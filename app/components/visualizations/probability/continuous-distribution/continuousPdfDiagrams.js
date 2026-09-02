// Frozen-state SVGs for the Continuous PDF/CDF tool (Line 1 anchor mesh).
//
// The live chart is recharts (<LineChart>), which cannot be rendered to a string
// at build time, so this module ports the plot with the configuration the
// component gives recharts -
//
//   line   stroke #245de1, width 2, dot={false}
//   grid   dashed 3 3, #e0e0e0
//   axes   stroke #1a3a52; y auto-scaled for the PDF view, fixed [0, 1] for CDF
//   labels "x", and "f(x)" or "F(x)" depending on the toggle
//
// The six density/distribution helpers are imported from the component, so the
// curves are the tool's own - including its Abramowitz & Stegun erf. The three
// data builders live inside the component as useMemo hooks closing over its
// sliders, so they are ported verbatim and evaluated at its defaults:
//
//   uniform a = 0, b = 10 | normal mu = 0, sigma = 1 | exponential lambda = 1
//
// This tool has TWO state axes: which distribution is selected, and whether the
// PDF/CDF toggle is on "PDF (Probability Density)" or "CDF (Cumulative)". Each
// distribution is therefore frozen twice, and the page pairs the two stills in a
// single unit so the toggle's effect is visible side by side.
//
// Note the shared float-accumulation behaviour of the component's loops
// (`for (let x = start; x <= end; x += step)`): the last step overshoots, so each
// series holds 200 points and stops just short of its nominal right edge.

import {
  uniformPDF, normalPDF, exponentialPDF,
  uniformCDF, normalCDF, exponentialCDF,
} from './ContinuousProbabilityDistribution';

const W = 700, H = 380, PAD_L = 68, PAD_R = 24, PAD_T = 20, PAD_B = 52;
const PLOT_W = W - PAD_L - PAD_R, PLOT_H = H - PAD_T - PAD_B;

const r2 = (n) => Math.round(n * 100) / 100;

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
    const start = a - padding, end = b + padding, step = (end - start) / 200;
    for (let x = start; x <= end; x += step) {
      const xv = parseFloat(x.toFixed(3));
      data.push({ x: xv, pdf: uniformPDF(x, a, b), cdf: uniformCDF(x, a, b) });
    }
  } else if (key === 'normal') {
    const { mean, stdDev } = DEFAULTS.normal;
    const start = mean - 4 * stdDev, end = mean + 4 * stdDev, step = (end - start) / 200;
    for (let x = start; x <= end; x += step) {
      const xv = parseFloat(x.toFixed(3));
      data.push({ x: xv, pdf: normalPDF(x, mean, stdDev), cdf: normalCDF(x, mean, stdDev) });
    }
  } else if (key === 'exponential') {
    const { lambda } = DEFAULTS.exponential;
    const end = 5 / lambda, step = end / 200;
    for (let x = 0; x <= end; x += step) {
      const xv = parseFloat(x.toFixed(3));
      data.push({ x: xv, pdf: exponentialPDF(x, lambda), cdf: exponentialCDF(x, lambda) });
    }
  }
  return data;
}

function niceMax(v) {
  if (v <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(v)));
  for (const step of [1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10]) if (v <= step * mag) return step * mag;
  return 10 * mag;
}

const tick = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(1));

function plot(data, view, title) {
  const xs = data.map((p) => p.x);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  // the component fixes the CDF axis to [0, 1] and lets the PDF axis auto-scale
  const yMax = view === 'cdf' ? 1 : niceMax(Math.max(...data.map((p) => p.pdf)));
  const sx = (x) => PAD_L + ((x - xMin) / Math.max(1e-9, xMax - xMin)) * PLOT_W;
  const sy = (y) => PAD_T + (1 - y / yMax) * PLOT_H;

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;

  for (let i = 0; i <= 5; i++) {
    const v = (yMax * i) / 5, y = sy(v);
    s += `<line x1="${PAD_L}" y1="${r2(y)}" x2="${W - PAD_R}" y2="${r2(y)}" stroke="#e0e0e0" ` +
      `stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${PAD_L - 10}" y="${r2(y)}" text-anchor="end" dominant-baseline="central" ` +
      `font-size="11" fill="#1a3a52" font-family="Arial, sans-serif">${v.toFixed(2)}</text>`;
  }
  const N = 8;
  for (let i = 0; i <= N; i++) {
    const x = xMin + ((xMax - xMin) * i) / N;
    s += `<line x1="${r2(sx(x))}" y1="${PAD_T}" x2="${r2(sx(x))}" y2="${PAD_T + PLOT_H}" ` +
      `stroke="#e0e0e0" stroke-width="1" stroke-dasharray="3 3"/>`;
    s += `<text x="${r2(sx(x))}" y="${PAD_T + PLOT_H + 16}" text-anchor="middle" font-size="11" ` +
      `fill="#1a3a52" font-family="Arial, sans-serif">${tick(x)}</text>`;
  }

  s += `<path d="M${PAD_L} ${PAD_T}V${PAD_T + PLOT_H}H${W - PAD_R}" fill="none" stroke="#1a3a52" stroke-width="1.5"/>`;

  const dpath = data.map((p, i) => `${i ? 'L' : 'M'}${r2(sx(p.x))} ${r2(sy(p[view]))}`).join('');
  s += `<path d="${dpath}" fill="none" stroke="#245de1" stroke-width="2" ` +
    `stroke-linejoin="round" stroke-linecap="round"/>`;

  s += `<text x="${PAD_L + PLOT_W / 2}" y="${H - 8}" text-anchor="middle" font-size="12" ` +
    `font-weight="600" fill="#1a3a52" font-family="Arial, sans-serif">x</text>`;
  s += `<text x="14" y="${PAD_T + PLOT_H / 2}" text-anchor="middle" font-size="12" font-weight="600" ` +
    `fill="#1a3a52" font-family="Arial, sans-serif" transform="rotate(-90 14 ${r2(PAD_T + PLOT_H / 2)})">` +
    `${view === 'pdf' ? 'f(x)' : 'F(x)'}</text>`;

  return `<svg viewBox="0 0 ${W} ${H}" width="480" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${title}">` + s + `</svg>`;
}

const KEYS = ['uniform', 'normal', 'exponential'];
const LABEL = {
  uniform: 'Continuous uniform, a = 0, b = 10',
  normal: 'Normal, mean 0, standard deviation 1',
  exponential: 'Exponential, lambda = 1',
};

const DATA = Object.fromEntries(KEYS.map((k) => [k, buildData(k)]));

export const readings = Object.fromEntries(
  Object.entries(DATA).map(([k, d]) => [k, {
    points: d.length,
    xMin: d[0].x,
    xMax: d[d.length - 1].x,
    peakPdf: Math.max(...d.map((p) => p.pdf)),
    firstCdf: d[0].cdf,
    lastCdf: d[d.length - 1].cdf,
  }])
);

// each distribution frozen under both toggle positions; the page pairs them
const continuousPdfDiagrams = Object.fromEntries(
  KEYS.flatMap((k) => [
    [`${k}-pdf`, plot(DATA[k], 'pdf', `${LABEL[k]}, PDF view`)],
    [`${k}-cdf`, plot(DATA[k], 'cdf', `${LABEL[k]}, CDF view`)],
  ])
);

export default continuousPdfDiagrams;
