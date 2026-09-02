// Frozen-state SVGs for the Discrete CDF tool (Line 1 anchor mesh).
//
// The live chart is drawn with recharts (<LineChart type="stepAfter">), a React
// charting library that cannot be rendered to a string at build time. So this
// module ports the plot instead: the same data, drawn as a step function with
// the same visual configuration the component gives recharts -
//
//   line   stroke #245de1, width 3, type stepAfter
//   dots   fill #245de1, r 4
//   grid   dashed 3 3, #e0e0e0
//   axes   stroke #1a3a52, y domain fixed to [0, 1]
//   labels "Value (k)" and "Cumulative Probability F(k)"
//
// The six pmf/cdf helpers and the six data builders are defined inside the
// component (they close over its sliders), so they are ported verbatim here and
// evaluated at the component's own default slider positions:
//
//   uniform a=1 b=6 | binomial n=10 p=0.5 | geometric p=0.3
//   negative binomial r=3 p=0.4 | hypergeometric N=50 K=20 n=10 | poisson λ=3

const W = 700, H = 450, PAD_L = 64, PAD_R = 24, PAD_T = 20, PAD_B = 52;
const PLOT_W = W - PAD_L - PAD_R, PLOT_H = H - PAD_T - PAD_B;

const r2 = (n) => Math.round(n * 100) / 100;

/* ---- math helpers, ported from the component ---- */
const factorial = (n) => {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
};
const binomialCoeff = (n, k) => {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return r;
};
const binomialPMF = (k, n, p) => binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
const geometricCDF = (k, p) => 1 - Math.pow(1 - p, k);
const negativeBinomialPMF = (k, r, p) =>
  binomialCoeff(k - 1, r - 1) * Math.pow(p, r) * Math.pow(1 - p, k - r);
const hypergeometricPMF = (k, N, K, n) =>
  (binomialCoeff(K, k) * binomialCoeff(N - K, n - k)) / binomialCoeff(N, n);
const poissonPMF = (k, lambda) => (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
const discreteUniformCDF = (k, a, b) => (Math.floor(k) - a + 1) / (b - a + 1);

/* ---- the component's default slider positions ---- */
export const DEFAULTS = {
  uniform: { min: 1, max: 6 },
  binomial: { n: 10, p: 0.5 },
  geometric: { p: 0.3 },
  negativeBinomial: { r: 3, p: 0.4 },
  hypergeometric: { N: 50, K: 20, draws: 10 },
  poisson: { lambda: 3 },
};

/* ---- the six data builders, ported ---- */
function buildData(key) {
  const d = [];
  if (key === 'discreteUniform') {
    const { min, max } = DEFAULTS.uniform;
    for (let k = min; k <= max; k++) d.push({ x: k, cdf: discreteUniformCDF(k, min, max) });
  } else if (key === 'binomial') {
    const { n, p } = DEFAULTS.binomial;
    let c = 0;
    for (let k = 0; k <= n; k++) { c += binomialPMF(k, n, p); d.push({ x: k, cdf: c }); }
  } else if (key === 'geometric') {
    const { p } = DEFAULTS.geometric;
    const maxK = Math.min(50, Math.ceil(10 / p));
    for (let k = 1; k <= maxK; k++) d.push({ x: k, cdf: geometricCDF(k, p) });
  } else if (key === 'negativeBinomial') {
    const { r, p } = DEFAULTS.negativeBinomial;
    const maxK = Math.min(100, Math.ceil(r + 30 / p));
    let c = 0;
    for (let k = r; k <= maxK; k++) { c += negativeBinomialPMF(k, r, p); d.push({ x: k, cdf: c }); }
  } else if (key === 'hypergeometric') {
    const { N, K, draws } = DEFAULTS.hypergeometric;
    const minK = Math.max(0, draws - (N - K));
    const maxK = Math.min(draws, K);
    let c = 0;
    for (let k = minK; k <= maxK; k++) { c += hypergeometricPMF(k, N, K, draws); d.push({ x: k, cdf: c }); }
  } else if (key === 'poisson') {
    const { lambda } = DEFAULTS.poisson;
    const maxK = Math.min(30, lambda + 15);
    let c = 0;
    for (let k = 0; k <= maxK; k++) { c += poissonPMF(k, lambda); d.push({ x: k, cdf: c }); }
  }
  return d;
}

function plot(data, title) {
  const xs = data.map((p) => p.x);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const sx = (x) => PAD_L + ((x - xMin) / Math.max(1e-9, xMax - xMin)) * PLOT_W;
  const sy = (y) => PAD_T + (1 - y) * PLOT_H;   // y domain fixed to [0, 1]

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;

  // grid + y ticks
  for (let i = 0; i <= 5; i++) {
    const v = i / 5, y = sy(v);
    s += `<line x1="${PAD_L}" y1="${r2(y)}" x2="${W - PAD_R}" y2="${r2(y)}" stroke="#e0e0e0" ` +
      `stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${PAD_L - 10}" y="${r2(y)}" text-anchor="end" dominant-baseline="central" ` +
      `font-size="11" fill="#1a3a52" font-family="Arial, sans-serif">${v.toFixed(1)}</text>`;
  }
  // x ticks - at most 11, evenly sampled from the actual k values
  const step = Math.max(1, Math.ceil(xs.length / 11));
  xs.forEach((x, i) => {
    if (i % step && i !== xs.length - 1) return;
    s += `<line x1="${r2(sx(x))}" y1="${PAD_T}" x2="${r2(sx(x))}" y2="${PAD_T + PLOT_H}" ` +
      `stroke="#e0e0e0" stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${r2(sx(x))}" y="${PAD_T + PLOT_H + 16}" text-anchor="middle" font-size="11" ` +
      `fill="#1a3a52" font-family="Arial, sans-serif">${x}</text>`;
  });

  // axes
  s += `<path d="M${PAD_L} ${PAD_T}V${PAD_T + PLOT_H}H${W - PAD_R}" fill="none" stroke="#1a3a52" stroke-width="1.5"/>`;

  // stepAfter path: hold the previous value across to the next k, then jump
  let dpath = '';
  data.forEach((p, i) => {
    const x = sx(p.x), y = sy(p.cdf);
    if (i === 0) {
      dpath += `M${r2(x)} ${r2(y)}`;
      return;
    }
    const yPrev = sy(data[i - 1].cdf);
    dpath += `L${r2(x)} ${r2(yPrev)}L${r2(x)} ${r2(y)}`;
  });
  s += `<path d="${dpath}" fill="none" stroke="#245de1" stroke-width="3" stroke-linejoin="round"/>`;

  // dots
  data.forEach((p) => {
    s += `<circle cx="${r2(sx(p.x))}" cy="${r2(sy(p.cdf))}" r="4" fill="#245de1"/>`;
  });

  // axis labels
  s += `<text x="${PAD_L + PLOT_W / 2}" y="${H - 8}" text-anchor="middle" font-size="12" ` +
    `font-weight="600" fill="#1a3a52" font-family="Arial, sans-serif">Value (k)</text>`;
  s += `<text x="14" y="${PAD_T + PLOT_H / 2}" text-anchor="middle" font-size="12" font-weight="600" ` +
    `fill="#1a3a52" font-family="Arial, sans-serif" transform="rotate(-90 14 ${r2(PAD_T + PLOT_H / 2)})">` +
    `Cumulative Probability F(k)</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${title}">` + s + `</svg>`;
}

const KEYS = ['discreteUniform', 'binomial', 'geometric', 'negativeBinomial', 'hypergeometric', 'poisson'];
const TITLES = {
  discreteUniform: 'Discrete uniform CDF, a = 1 to b = 6',
  binomial: 'Binomial CDF, n = 10, p = 0.5',
  geometric: 'Geometric CDF, p = 0.3',
  negativeBinomial: 'Negative binomial CDF, r = 3, p = 0.4',
  hypergeometric: 'Hypergeometric CDF, N = 50, K = 20, n = 10',
  poisson: 'Poisson CDF, lambda = 3',
};

const DATA = Object.fromEntries(KEYS.map((k) => [k, buildData(k)]));

// what each frozen plot shows, so the page prose quotes the tool
export const series = Object.fromEntries(
  Object.entries(DATA).map(([k, d]) => [k, {
    points: d.length,
    firstK: d[0].x,
    lastK: d[d.length - 1].x,
    firstCdf: d[0].cdf,
    lastCdf: d[d.length - 1].cdf,
  }])
);

const discreteCdfDiagrams = Object.fromEntries(
  KEYS.map((k) => [k, plot(DATA[k], TITLES[k])])
);

export default discreteCdfDiagrams;
