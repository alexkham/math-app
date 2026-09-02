// Frozen-state SVGs for the nine Distribution Explorers (Line 1 anchor mesh).
//
// The nine routes under /probability/visual-tools/distributions are thin
// wrappers: the six discrete ones hand a `distribution` object to
// GenericDistributionExplorer and the three continuous ones hand one to
// GenericContinuousDistributionExplorer. So there are only TWO charts to port,
// not nine, and each is driven by its wrapper's data and statistics.
//
// Both generics are recharts, which cannot be rendered to a string at build
// time, so this module ports them with their own configuration:
//
//   discrete   <BarChart>, bars fill #677ae4, dashed 3 3 grid, axes labelled
//              "Value (k)" and "Probability P(X = k)" / "Cumulative
//              Probability P(X <= k)"
//   continuous <AreaChart> for the density - stroke #677ae4, fill #677ae4 at
//              0.3 opacity, type monotone - and <LineChart> width 2 for the CDF
//   both       a red #e74c3c ReferenceLine of width 3 at the mean, labelled
//              "E[X]=..." above the plot
//
// Each wrapper's pmf/pdf, its data range and its closed-form statistics are
// ported verbatim and evaluated at that wrapper's own `initial*` prop defaults:
//
//   discrete uniform a=1 b=6 | binomial n=10 p=0.5 | geometric p=0.3 (k to 30)
//   negative binomial r=5 p=0.3 (k to 50) | hypergeometric N=50 K=20 n=10
//   poisson lambda=3 | continuous uniform a=0 b=10 | exponential lambda=1
//   normal mu=0 sigma=1
//
// Note the two window rules that are not obvious from the parameters: the
// exponential's window is maxX = -ln(0.001)/lambda, the point where the tail
// falls to a thousandth; and the Poisson's is max(30, ceil(lambda + 4*sqrt(lambda)))
// with an early break once the pmf drops below 1e-10.

const W = 700, H = 380, PAD_L = 74, PAD_R = 26, PAD_T = 34, PAD_B = 52;
const PLOT_W = W - PAD_L - PAD_R, PLOT_H = H - PAD_T - PAD_B;
const BLUE = '#677ae4', RED = '#e74c3c';

const r2 = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---- shared maths, as the wrappers define it ---- */
const factorial = (n) => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
const choose = (n, k) => {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return r;
};
const erf = (x) => {
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741,
        a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  const t = 1 / (1 + p * x);
  return sign * (1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x));
};

/* ---- the nine wrappers, at their own default props ---- */
function discreteUniform() {
  const a = 1, b = 6, n = b - a + 1;
  const pmf = (k) => (k < a || k > b ? 0 : 1 / n);
  const data = [];
  for (let k = a; k <= b; k++) data.push({ x: k, probability: pmf(k) });
  return { data, mean: (a + b) / 2, variance: (n * n - 1) / 12,
    label: 'Discrete uniform, a = 1 to b = 6' };
}

function binomial() {
  const n = 10, p = 0.5;
  const data = [];
  for (let k = 0; k <= n; k++) {
    data.push({ x: k, probability: choose(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k) });
  }
  return { data, mean: n * p, variance: n * p * (1 - p), label: 'Binomial, n = 10, p = 0.5' };
}

function geometric() {
  const p = 0.3, maxK = 30;
  const data = [];
  for (let k = 1; k <= maxK; k++) data.push({ x: k, probability: Math.pow(1 - p, k - 1) * p });
  return { data, mean: 1 / p, variance: (1 - p) / (p * p), label: 'Geometric, p = 0.3' };
}

function negativeBinomial() {
  const r = 5, p = 0.3, maxK = 50;
  const data = [];
  for (let k = r; k <= maxK; k++) {
    data.push({ x: k, probability: choose(k - 1, r - 1) * Math.pow(p, r) * Math.pow(1 - p, k - r) });
  }
  return { data, mean: r / p, variance: (r * (1 - p)) / (p * p),
    label: 'Negative binomial, r = 5, p = 0.3' };
}

function hypergeometric() {
  const N = 50, K = 20, n = 10;
  const minK = Math.max(0, n - (N - K)), maxK = Math.min(n, K);
  const data = [];
  for (let k = minK; k <= maxK; k++) {
    data.push({ x: k, probability: (choose(K, k) * choose(N - K, n - k)) / choose(N, n) });
  }
  return { data, mean: (n * K) / N,
    variance: n * (K / N) * (1 - K / N) * ((N - n) / (N - 1)),
    label: 'Hypergeometric, N = 50, K = 20, n = 10' };
}

function poisson() {
  const lambda = 3, maxK = 30;
  const effectiveMax = Math.max(maxK, Math.ceil(lambda + 4 * Math.sqrt(lambda)));
  const data = [];
  for (let k = 0; k <= effectiveMax; k++) {
    const prob = (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
    if (prob < 1e-10 && k > lambda + 10) break;
    data.push({ x: k, probability: prob });
  }
  return { data, mean: lambda, variance: lambda, label: 'Poisson, lambda = 3' };
}

function continuousUniform() {
  const a = 0, b = 10, numPoints = 200;
  const step = (b - a) / numPoints;
  const data = [];
  for (let i = 0; i < 20; i++) data.push({ x: a - (20 - i) * step, density: 0, cdf: 0 });
  for (let i = 0; i <= numPoints; i++) {
    const x = a + i * step;
    data.push({ x, density: 1 / (b - a), cdf: (x - a) / (b - a) });
  }
  for (let i = 1; i <= 20; i++) data.push({ x: b + i * step, density: 0, cdf: 1 });
  return { data, mean: (a + b) / 2, variance: Math.pow(b - a, 2) / 12,
    label: 'Continuous uniform, a = 0, b = 10' };
}

function exponential() {
  const lambda = 1, numPoints = 300;
  const maxX = -Math.log(0.001) / lambda;
  const step = maxX / numPoints;
  const data = [];
  for (let i = 0; i <= numPoints; i++) {
    const x = i * step;
    data.push({ x, density: lambda * Math.exp(-lambda * x), cdf: 1 - Math.exp(-lambda * x) });
  }
  return { data, mean: 1 / lambda, variance: 1 / (lambda * lambda), maxX,
    label: 'Exponential, lambda = 1' };
}

function normal() {
  const mu = 0, sigma = 1, numPoints = 300;
  const minX = mu - 4 * sigma, maxX = mu + 4 * sigma;
  const step = (maxX - minX) / numPoints;
  const data = [];
  for (let i = 0; i <= numPoints; i++) {
    const x = minX + i * step;
    data.push({
      x,
      density: (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-Math.pow(x - mu, 2) / (2 * sigma * sigma)),
      cdf: 0.5 * (1 + erf((x - mu) / (sigma * Math.sqrt(2)))),
    });
  }
  return { data, mean: mu, variance: sigma * sigma, label: 'Normal, mu = 0, sigma = 1' };
}

/* ---- chart frame shared by both generics ---- */
function frame(yMax, yLabel, xTicks, sx) {
  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
  for (let i = 0; i <= 5; i++) {
    const v = (yMax * i) / 5, y = PAD_T + (1 - i / 5) * PLOT_H;
    s += `<line x1="${PAD_L}" y1="${r2(y)}" x2="${W - PAD_R}" y2="${r2(y)}" stroke="#ccc" ` +
      `stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${PAD_L - 8}" y="${r2(y)}" text-anchor="end" dominant-baseline="central" ` +
      `font-size="11" fill="#666" font-family="Arial, sans-serif">${v < 1 ? v.toFixed(3) : v.toFixed(2)}</text>`;
  }
  xTicks.forEach((t) => {
    s += `<line x1="${r2(sx(t.v))}" y1="${PAD_T}" x2="${r2(sx(t.v))}" y2="${PAD_T + PLOT_H}" ` +
      `stroke="#ccc" stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${r2(sx(t.v))}" y="${PAD_T + PLOT_H + 16}" text-anchor="middle" font-size="11" ` +
      `fill="#666" font-family="Arial, sans-serif">${esc(t.label)}</text>`;
  });
  s += `<path d="M${PAD_L} ${PAD_T}V${PAD_T + PLOT_H}H${W - PAD_R}" fill="none" stroke="#666" stroke-width="1"/>`;
  s += `<text x="${PAD_L + PLOT_W / 2}" y="${H - 8}" text-anchor="middle" font-size="12" ` +
    `fill="#333" font-family="Arial, sans-serif">Value (k)</text>`;
  s += `<text x="14" y="${PAD_T + PLOT_H / 2}" text-anchor="middle" font-size="12" fill="#333" ` +
    `font-family="Arial, sans-serif" transform="rotate(-90 14 ${r2(PAD_T + PLOT_H / 2)})">${esc(yLabel)}</text>`;
  return s;
}

function meanLine(mean, sx) {
  const x = sx(mean);
  if (!(x >= PAD_L && x <= W - PAD_R)) return '';
  return `<line x1="${r2(x)}" y1="${PAD_T}" x2="${r2(x)}" y2="${PAD_T + PLOT_H}" stroke="${RED}" ` +
    `stroke-width="3"/>` +
    `<text x="${r2(x)}" y="${PAD_T - 12}" text-anchor="middle" font-size="11" font-weight="bold" ` +
    `fill="${RED}" font-family="Arial, sans-serif">E[X]=${mean.toFixed(2)}</text>`;
}

function niceMax(v) {
  if (v <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  for (const s of [1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10]) if (v <= s * mag) return s * mag;
  return 10 * mag;
}

/* ---- the discrete bar chart ---- */
function discretePlot(d, mode) {
  const key = mode === 'pmf' ? 'probability' : 'cumulative';
  const rows = mode === 'pmf' ? d.data
    : d.data.reduce((acc, p) => {
        const prev = acc.length ? acc[acc.length - 1].cumulative : 0;
        acc.push({ x: p.x, cumulative: prev + p.probability });
        return acc;
      }, []);
  const yMax = mode === 'pmf' ? niceMax(Math.max(...rows.map((p) => p[key]))) : 1;
  const n = rows.length, slot = PLOT_W / n;
  const barW = Math.min(40, slot * 0.7);
  const sx = (v) => PAD_L + slot * (rows.findIndex((p) => p.x === Math.round(v)) + 0.5);
  const sxIdx = (i) => PAD_L + slot * (i + 0.5);
  const sy = (v) => PAD_T + (1 - v / yMax) * PLOT_H;

  const step = Math.max(1, Math.ceil(n / 12));
  const ticks = rows.filter((_, i) => i % step === 0 || i === n - 1)
    .map((p) => ({ v: p.x, label: String(p.x) }));
  // ticks are positioned by index, so build them against the index scale
  let s = frame(yMax, mode === 'pmf' ? 'Probability P(X = k)' : 'Cumulative Probability P(X ≤ k)',
    ticks, (v) => sxIdx(rows.findIndex((p) => p.x === v)));

  rows.forEach((p, i) => {
    const y = sy(p[key]);
    s += `<rect x="${r2(sxIdx(i) - barW / 2)}" y="${r2(y)}" width="${r2(barW)}" ` +
      `height="${r2(PAD_T + PLOT_H - y)}" fill="${BLUE}"/>`;
  });
  s += meanLine(d.mean, sx);

  return `<svg viewBox="0 0 ${W} ${H}" width="500" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(d.label)}, ${mode.toUpperCase()} view">` + s + `</svg>`;
}

/* ---- the continuous area / line chart ---- */
function continuousPlot(d, mode) {
  const key = mode === 'pdf' ? 'density' : 'cdf';
  const xs = d.data.map((p) => p.x);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const yMax = mode === 'pdf' ? niceMax(Math.max(...d.data.map((p) => p.density))) : 1;
  const sx = (v) => PAD_L + ((v - xMin) / (xMax - xMin)) * PLOT_W;
  const sy = (v) => PAD_T + (1 - v / yMax) * PLOT_H;

  const ticks = Array.from({ length: 9 }, (_, i) => {
    const v = xMin + ((xMax - xMin) * i) / 8;
    return { v, label: Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(1) };
  });
  let s = frame(yMax, mode === 'pdf' ? 'Density f(x)' : 'Cumulative Probability P(X ≤ x)', ticks, sx);

  const line = d.data.map((p, i) => `${i ? 'L' : 'M'}${r2(sx(p.x))} ${r2(sy(p[key]))}`).join('');
  if (mode === 'pdf') {
    // AreaChart: the same path closed down to the baseline at 0.3 opacity
    s += `<path d="${line}L${r2(sx(xMax))} ${r2(sy(0))}L${r2(sx(xMin))} ${r2(sy(0))}Z" ` +
      `fill="${BLUE}" fill-opacity="0.3"/>`;
    s += `<path d="${line}" fill="none" stroke="${BLUE}" stroke-width="1.5"/>`;
  } else {
    s += `<path d="${line}" fill="none" stroke="${BLUE}" stroke-width="2"/>`;
  }
  s += meanLine(d.mean, sx);

  return `<svg viewBox="0 0 ${W} ${H}" width="500" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(d.label)}, ${mode.toUpperCase()} view">` + s + `</svg>`;
}

const DISCRETE = {
  'uniform-discrete': discreteUniform(),
  binomial: binomial(),
  geometric: geometric(),
  'negative-binomial': negativeBinomial(),
  hypergeometric: hypergeometric(),
  poisson: poisson(),
};

const CONTINUOUS = {
  'uniform-continuous': continuousUniform(),
  exponential: exponential(),
  normal: normal(),
};

/* ---- readings the page prose quotes ---- */
export const readings = {};
for (const [k, d] of Object.entries(DISCRETE)) {
  const total = d.data.reduce((a, p) => a + p.probability, 0);
  const peak = d.data.reduce((a, p) => (p.probability > a.probability ? p : a), d.data[0]);
  readings[k] = {
    kind: 'discrete', bars: d.data.length,
    firstK: d.data[0].x, lastK: d.data[d.data.length - 1].x,
    total, mode: peak.x, modeProbability: peak.probability,
    mean: d.mean, variance: d.variance, sd: Math.sqrt(d.variance),
  };
}
for (const [k, d] of Object.entries(CONTINUOUS)) {
  readings[k] = {
    kind: 'continuous', points: d.data.length,
    xMin: d.data[0].x, xMax: d.data[d.data.length - 1].x,
    peakDensity: Math.max(...d.data.map((p) => p.density)),
    lastCdf: d.data[d.data.length - 1].cdf,
    mean: d.mean, variance: d.variance, sd: Math.sqrt(d.variance),
  };
}

const distributionExplorerDiagrams = {};
for (const [k, d] of Object.entries(DISCRETE)) {
  distributionExplorerDiagrams[`${k}-pmf`] = discretePlot(d, 'pmf');
  distributionExplorerDiagrams[`${k}-cdf`] = discretePlot(d, 'cdf');
}
for (const [k, d] of Object.entries(CONTINUOUS)) {
  distributionExplorerDiagrams[`${k}-pdf`] = continuousPlot(d, 'pdf');
  distributionExplorerDiagrams[`${k}-cdf`] = continuousPlot(d, 'cdf');
}

export default distributionExplorerDiagrams;
