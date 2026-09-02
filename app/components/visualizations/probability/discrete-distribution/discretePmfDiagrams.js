// Frozen-state SVGs for the Discrete PMF tool (Line 1 anchor mesh).
//
// The live chart is a recharts <BarChart>, which cannot be rendered to a string
// at build time, so this module ports the plot: the same data, drawn with the
// same visual configuration the component gives recharts -
//
//   bars   fill #245de1
//   grid   dashed 3 3, #e0e0e0
//   axes   stroke #1a3a52, y auto-scaled to the data
//   labels "Value (k)" and "Probability P(X = k)"
//
// The eight PMF helpers are imported from the component (they were hoisted there
// for this purpose), so the probabilities below are the tool's own. The six data
// builders live inside the component as useMemo hooks closing over its sliders,
// so they are ported verbatim here - INCLUDING the `prob > 0.001` filter that
// the geometric and negative binomial builders apply and the other four do not -
// and evaluated at the component's own default slider positions:
//
//   uniform a=1 b=6 | binomial n=10 p=0.5 | geometric p=0.3
//   negative binomial r=3 p=0.4 | hypergeometric N=50 K=20 n=10 | poisson lambda=3
//
// These are the same six families and the same defaults as the CDF sibling at
// /probability/visual-tools/cdf/discrete; the difference is that this tool plots
// P(X = k) rather than its running total.

import {
  discreteUniformPMF, binomialPMF, geometricPMF,
  negativeBinomialPMF, hypergeometricPMF, poissonPMF,
} from './DiscreteProbabilityDistributions';

const W = 700, H = 420, PAD_L = 72, PAD_R = 24, PAD_T = 20, PAD_B = 56;
const PLOT_W = W - PAD_L - PAD_R, PLOT_H = H - PAD_T - PAD_B;

const r2 = (n) => Math.round(n * 100) / 100;

/* ---- the component's default slider positions ---- */
export const DEFAULTS = {
  uniform: { min: 1, max: 6 },
  binomial: { n: 10, p: 0.5 },
  geometric: { p: 0.3 },
  negativeBinomial: { r: 3, p: 0.4 },
  hypergeometric: { N: 50, K: 20, draws: 10 },
  poisson: { lambda: 3 },
};

/* ---- the six data builders, ported verbatim from the component's useMemos ---- */
function buildData(key) {
  const data = [];
  if (key === 'discreteUniform') {
    const { min, max } = DEFAULTS.uniform;
    for (let k = min; k <= max; k++) data.push({ x: k, probability: discreteUniformPMF(k, min, max) });
  } else if (key === 'binomial') {
    const { n, p } = DEFAULTS.binomial;
    for (let k = 0; k <= n; k++) data.push({ x: k, probability: binomialPMF(k, n, p) });
  } else if (key === 'geometric') {
    const { p } = DEFAULTS.geometric;
    const maxK = Math.min(50, Math.ceil(10 / p));
    for (let k = 1; k <= maxK; k++) {
      const prob = geometricPMF(k, p);
      if (prob > 0.001) data.push({ x: k, probability: prob });
    }
  } else if (key === 'negativeBinomial') {
    const { r, p } = DEFAULTS.negativeBinomial;
    const maxK = Math.min(100, Math.ceil(r + 30 / p));
    for (let k = r; k <= maxK; k++) {
      const prob = negativeBinomialPMF(k, r, p);
      if (prob > 0.001) data.push({ x: k, probability: prob });
    }
  } else if (key === 'hypergeometric') {
    const { N, K, draws } = DEFAULTS.hypergeometric;
    const minK = Math.max(0, draws - (N - K));
    const maxK = Math.min(draws, K);
    for (let k = minK; k <= maxK; k++) data.push({ x: k, probability: hypergeometricPMF(k, N, K, draws) });
  } else if (key === 'poisson') {
    const { lambda } = DEFAULTS.poisson;
    const maxK = Math.min(30, lambda + 15);
    for (let k = 0; k <= maxK; k++) data.push({ x: k, probability: poissonPMF(k, lambda) });
  }
  return data;
}

// recharts picks a rounded upper bound for an auto y axis; mirror that so the
// gridline labels are the round numbers the tool shows
function niceMax(v) {
  if (v <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  for (const step of [1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10]) {
    if (v <= step * mag) return step * mag;
  }
  return 10 * mag;
}

function plot(data, title) {
  const yMax = niceMax(Math.max(...data.map((p) => p.probability)));
  const n = data.length;
  const slot = PLOT_W / n;
  const barW = Math.max(2, slot * 0.62);

  const sy = (y) => PAD_T + (1 - y / yMax) * PLOT_H;
  const cx = (i) => PAD_L + slot * (i + 0.5);

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;

  // horizontal grid + y ticks
  for (let i = 0; i <= 5; i++) {
    const v = (yMax * i) / 5, y = sy(v);
    s += `<line x1="${PAD_L}" y1="${r2(y)}" x2="${W - PAD_R}" y2="${r2(y)}" stroke="#e0e0e0" ` +
      `stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${PAD_L - 10}" y="${r2(y)}" text-anchor="end" dominant-baseline="central" ` +
      `font-size="11" fill="#1a3a52" font-family="Arial, sans-serif">${v.toFixed(3)}</text>`;
  }

  // bars
  data.forEach((p, i) => {
    const y = sy(p.probability);
    s += `<rect x="${r2(cx(i) - barW / 2)}" y="${r2(y)}" width="${r2(barW)}" ` +
      `height="${r2(PAD_T + PLOT_H - y)}" fill="#245de1"/>`;
  });

  // x ticks - at most 12, evenly sampled from the actual k values
  const step = Math.max(1, Math.ceil(n / 12));
  data.forEach((p, i) => {
    if (i % step && i !== n - 1) return;
    s += `<text x="${r2(cx(i))}" y="${PAD_T + PLOT_H + 16}" text-anchor="middle" font-size="11" ` +
      `fill="#1a3a52" font-family="Arial, sans-serif">${p.x}</text>`;
  });

  // axes
  s += `<path d="M${PAD_L} ${PAD_T}V${PAD_T + PLOT_H}H${W - PAD_R}" fill="none" stroke="#1a3a52" stroke-width="1.5"/>`;

  // axis labels
  s += `<text x="${PAD_L + PLOT_W / 2}" y="${H - 8}" text-anchor="middle" font-size="12" ` +
    `font-weight="600" fill="#1a3a52" font-family="Arial, sans-serif">Value (k)</text>`;
  s += `<text x="14" y="${PAD_T + PLOT_H / 2}" text-anchor="middle" font-size="12" font-weight="600" ` +
    `fill="#1a3a52" font-family="Arial, sans-serif" transform="rotate(-90 14 ${r2(PAD_T + PLOT_H / 2)})">` +
    `Probability P(X = k)</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${title}">` + s + `</svg>`;
}

const KEYS = ['discreteUniform', 'binomial', 'geometric', 'negativeBinomial', 'hypergeometric', 'poisson'];
const TITLES = {
  discreteUniform: 'Discrete uniform PMF, a = 1 to b = 6',
  binomial: 'Binomial PMF, n = 10, p = 0.5',
  geometric: 'Geometric PMF, p = 0.3',
  negativeBinomial: 'Negative binomial PMF, r = 3, p = 0.4',
  hypergeometric: 'Hypergeometric PMF, N = 50, K = 20, n = 10',
  poisson: 'Poisson PMF, lambda = 3',
};

const DATA = Object.fromEntries(KEYS.map((k) => [k, buildData(k)]));

// what each frozen plot shows, so the page prose quotes the tool
export const series = Object.fromEntries(
  Object.entries(DATA).map(([k, d]) => {
    const total = d.reduce((a, p) => a + p.probability, 0);
    const peak = d.reduce((a, p) => (p.probability > a.probability ? p : a), d[0]);
    return [k, {
      bars: d.length,
      firstK: d[0].x,
      lastK: d[d.length - 1].x,
      // the geometric and negative binomial builders drop bars under 0.001, so
      // their totals fall short of 1 by the dropped mass
      total,
      mode: peak.x,
      modeProbability: peak.probability,
    }];
  })
);

const discretePmfDiagrams = Object.fromEntries(
  KEYS.map((k) => [k, plot(DATA[k], TITLES[k])])
);

export default discretePmfDiagrams;
