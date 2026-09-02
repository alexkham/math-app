// Frozen-state SVGs for the Continuous CDF tool (Line 1 anchor mesh).
//
// Like its discrete sibling, the live chart is recharts (<LineChart>), which
// cannot be rendered to a string at build time, so this module ports the plot:
// the same data, drawn with the same visual configuration the component gives
// recharts -
//
//   line   stroke #245de1, width 3, dot={false}
//   grid   dashed 3 3, #e0e0e0
//   axes   stroke #1a3a52, y domain fixed to [0, 1]
//   labels "x" and "F(x) = P(X <= x)"
//
// The three CDF helpers are module-level in the component and imported here, so
// the curves below are the tool's own functions - including its Abramowitz &
// Stegun erf approximation, which is what the live normal curve is drawn from.
// The three data builders live inside the component (they close over its
// sliders), so they are ported verbatim and evaluated at the component's own
// default slider positions:
//
//   uniform a = 0, b = 10 | normal mu = 0, sigma = 1 | exponential lambda = 1
//
// The component asks recharts for type="monotone" - a smoothing spline. With
// 201 samples across the window the sampled polyline drawn here is visually
// identical, and it is more faithful at the uniform's two corners, where a
// spline would round what is genuinely a kink.

import { uniformCDF, normalCDF, exponentialCDF } from './ContinuousCDFVisualizer';

const W = 700, H = 450, PAD_L = 68, PAD_R = 24, PAD_T = 20, PAD_B = 52;
const PLOT_W = W - PAD_L - PAD_R, PLOT_H = H - PAD_T - PAD_B;

const r2 = (n) => Math.round(n * 100) / 100;

/* ---- the component's default slider positions ---- */
export const DEFAULTS = {
  uniform: { a: 0, b: 10 },
  normal: { mean: 0, stdDev: 1 },
  exponential: { lambda: 1 },
};

/* ---- the three data builders, ported verbatim from the component ---- */
function buildData(key) {
  const data = [];
  if (key === 'uniform') {
    const { a, b } = DEFAULTS.uniform;
    const padding = (b - a) * 0.2;
    const start = a - padding;
    const end = b + padding;
    const step = (end - start) / 200;
    for (let x = start; x <= end; x += step) {
      data.push({ x: parseFloat(x.toFixed(3)), cdf: uniformCDF(x, a, b) });
    }
  } else if (key === 'normal') {
    const { mean, stdDev } = DEFAULTS.normal;
    const start = mean - 4 * stdDev;
    const end = mean + 4 * stdDev;
    const step = (end - start) / 200;
    for (let x = start; x <= end; x += step) {
      data.push({ x: parseFloat(x.toFixed(3)), cdf: normalCDF(x, mean, stdDev) });
    }
  } else if (key === 'exponential') {
    const { lambda } = DEFAULTS.exponential;
    const end = 5 / lambda;
    const step = end / 200;
    for (let x = 0; x <= end; x += step) {
      data.push({ x: parseFloat(x.toFixed(3)), cdf: exponentialCDF(x, lambda) });
    }
  }
  return data;
}

// tick label: integers stay integers, otherwise one decimal
const tick = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(1));

function plot(data, title) {
  const xs = data.map((p) => p.x);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const sx = (x) => PAD_L + ((x - xMin) / Math.max(1e-9, xMax - xMin)) * PLOT_W;
  const sy = (y) => PAD_T + (1 - y) * PLOT_H;   // y domain fixed to [0, 1]

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;

  // horizontal grid + y ticks
  for (let i = 0; i <= 5; i++) {
    const v = i / 5, y = sy(v);
    s += `<line x1="${PAD_L}" y1="${r2(y)}" x2="${W - PAD_R}" y2="${r2(y)}" stroke="#e0e0e0" ` +
      `stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${PAD_L - 10}" y="${r2(y)}" text-anchor="end" dominant-baseline="central" ` +
      `font-size="11" fill="#1a3a52" font-family="Arial, sans-serif">${v.toFixed(1)}</text>`;
  }
  // vertical grid + x ticks - 9 evenly spaced sample positions across the window
  const N = 8;
  for (let i = 0; i <= N; i++) {
    const x = xMin + ((xMax - xMin) * i) / N;
    s += `<line x1="${r2(sx(x))}" y1="${PAD_T}" x2="${r2(sx(x))}" y2="${PAD_T + PLOT_H}" ` +
      `stroke="#e0e0e0" stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${r2(sx(x))}" y="${PAD_T + PLOT_H + 16}" text-anchor="middle" font-size="11" ` +
      `fill="#1a3a52" font-family="Arial, sans-serif">${tick(x)}</text>`;
  }

  // axes
  s += `<path d="M${PAD_L} ${PAD_T}V${PAD_T + PLOT_H}H${W - PAD_R}" fill="none" stroke="#1a3a52" stroke-width="1.5"/>`;

  // the curve
  const dpath = data
    .map((p, i) => `${i ? 'L' : 'M'}${r2(sx(p.x))} ${r2(sy(p.cdf))}`)
    .join('');
  s += `<path d="${dpath}" fill="none" stroke="#245de1" stroke-width="3" ` +
    `stroke-linejoin="round" stroke-linecap="round"/>`;

  // axis labels
  s += `<text x="${PAD_L + PLOT_W / 2}" y="${H - 8}" text-anchor="middle" font-size="12" ` +
    `font-weight="600" fill="#1a3a52" font-family="Arial, sans-serif">x</text>`;
  s += `<text x="14" y="${PAD_T + PLOT_H / 2}" text-anchor="middle" font-size="12" font-weight="600" ` +
    `fill="#1a3a52" font-family="Arial, sans-serif" transform="rotate(-90 14 ${r2(PAD_T + PLOT_H / 2)})">` +
    `F(x) = P(X &#8804; x)</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${title}">` + s + `</svg>`;
}

const KEYS = ['uniform', 'normal', 'exponential'];
const TITLES = {
  uniform: 'Continuous uniform CDF, a = 0, b = 10',
  normal: 'Normal CDF, mean 0, standard deviation 1',
  exponential: 'Exponential CDF, lambda = 1',
};

const DATA = Object.fromEntries(KEYS.map((k) => [k, buildData(k)]));

// readings the page prose quotes, taken from the tool's own functions
export const readings = {
  uniform: {
    points: DATA.uniform.length,
    xMin: DATA.uniform[0].x,
    xMax: DATA.uniform[DATA.uniform.length - 1].x,
    atA: uniformCDF(0, 0, 10),
    atMid: uniformCDF(5, 0, 10),
    atB: uniformCDF(10, 0, 10),
    slope: 1 / 10,
  },
  normal: {
    points: DATA.normal.length,
    xMin: DATA.normal[0].x,
    xMax: DATA.normal[DATA.normal.length - 1].x,
    atMean: normalCDF(0, 0, 1),
    atPlus1: normalCDF(1, 0, 1),
    atMinus1: normalCDF(-1, 0, 1),
    within1: normalCDF(1, 0, 1) - normalCDF(-1, 0, 1),
    within2: normalCDF(2, 0, 1) - normalCDF(-2, 0, 1),
    within3: normalCDF(3, 0, 1) - normalCDF(-3, 0, 1),
  },
  exponential: {
    points: DATA.exponential.length,
    xMin: DATA.exponential[0].x,
    xMax: DATA.exponential[DATA.exponential.length - 1].x,
    atMeanLife: exponentialCDF(1, 1),
    median: Math.log(2),
    atMedian: exponentialCDF(Math.log(2), 1),
    // the loop's float accumulation stops one step short of 5/lambda, so the
    // plotted right edge is 4.975 rather than 5 - this is the value actually
    // drawn, not the nominal end of the window
    atEnd: DATA.exponential[DATA.exponential.length - 1].cdf,
  },
};

const continuousCdfDiagrams = Object.fromEntries(
  KEYS.map((k) => [k, plot(DATA[k], TITLES[k])])
);

export default continuousCdfDiagrams;
