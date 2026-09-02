// Frozen-state SVGs for the Discrete Expected Value tool (Line 1 anchor mesh).
//
// The component draws its chart as inline JSX, so this module ports that markup
// element for element and keeps the component's own geometry:
//
//   canvas 700x400, baseline y = 350, plot from x = 60 to 660
//   bars   xPos = 100 + idx * 90, width 60, height p * (300 / maxP)
//   fills  #4A90E2 at 0.7 opacity, stroke #2E5C8A
//   labels p.toFixed(3) above each bar, (x * p).toFixed(2) inside it
//   E[X]   dashed #e74c3c, width 3, dash 8,4
//
// NO DEPARTURES FROM THE LIVE COMPONENT
// -------------------------------------
// This module once carried two deliberate departures, because the component had
// two rendering defects a teaching still must not reproduce. Both have since
// been fixed in DiscreteExpectedValueVisualization.jsx, so these stills are now
// pixel identical to the tool in every respect. Kept on record:
//
// 1. E[X] MARKER POSITION. The component drew the marker at
//        x = 100 + (expectedValue - 1) * 90
//    but bars sit at xPos = 100 + idx * 90 with width 60, so the value labels
//    are at bar CENTRES, xPos + 30. The marker was therefore drawn exactly 30px
//    (a third of the 90px bar pitch) to the LEFT of the value it reported. At the
//    default distribution E[X] = 3.4 rendered at x = 316 when value 3.4 sits at
//    x = 346. Both files now use 130 + (expectedValue - 1) * 90.
//
// 2. Y-AXIS TICK LABELS. The component labelled its five gridlines 0.0, 0.2, 0.4,
//    0.6, 0.8 at a fixed 70px spacing - a scale of 350px per unit probability -
//    while the bars are drawn with an auto-fitting scale of 300 / maxP. The two
//    agreed only when maxP = 300/350 = 0.857. At the default maxP = 0.3 the scale
//    is 1000px per unit, so the 0.3 bar reaches the top of the plot, which the
//    printed axis would have read as roughly 0.86. Both files now keep the
//    gridlines at those y positions and label each with the value it actually
//    represents under the bar scale, ((i * 70) / scale).toFixed(2), so the axis
//    and the bars agree.
//
// See the registry entry for probability-expected-value.

import { DEFAULT_VALUES } from './DiscreteExpectedValueVisualization';

const W = 700, H = 400;
const BASE = 350, PLOT_L = 60, PLOT_R = 660;
const BAR_W = 60, PITCH = 90, BAR_X0 = 100;

const r2 = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const text = (x, y, s, o = {}) =>
  `<text x="${r2(x)}" y="${r2(y)}" text-anchor="${o.anchor || 'middle'}" ` +
  `font-size="${o.size || 12}" ${o.weight ? `font-weight="${o.weight}" ` : ''}` +
  `fill="${o.fill || '#333'}" font-family="Arial, sans-serif"` +
  `${o.transform ? ` transform="${o.transform}"` : ''}>${esc(s)}</text>`;

/* ---- the component's own derived quantities ---- */
export function stats(values) {
  const expectedValue = values.reduce((sum, v) => sum + v.x * v.p, 0);
  return {
    values,
    expectedValue,
    total: values.reduce((s, v) => s + v.p, 0),
    contributions: values.map((v) => v.x * v.p),
    maxP: Math.max(...values.map((v) => v.p)),
  };
}

/* ---- the component's own normalisation, ported from handleProbabilityChange ----
   Dragging one slider writes the raw slider value into that entry and then
   rescales EVERY entry so the six probabilities sum to 1 again. */
export function afterSliderDrag(values, index, rawValue) {
  const next = values.map((v) => ({ ...v }));
  next[index].p = parseFloat(rawValue) || 0;
  const total = next.reduce((sum, v) => sum + v.p, 0);
  if (total > 0) next.forEach((v) => { v.p = v.p / total; });
  return next;
}

function freeze(values, title) {
  const { expectedValue, maxP } = stats(values);
  const scale = 300 / (maxP || 1);

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;

  // gridlines at the component's own y positions, labelled at the bar scale
  for (let i = 0; i <= 4; i++) {
    const y = BASE - i * 70;
    s += `<line x1="${PLOT_L}" y1="${y}" x2="${PLOT_R}" y2="${y}" stroke="#e9ecef" stroke-width="1"/>`;
    s += text(45, BASE + 5 - i * 70, ((i * 70) / scale).toFixed(2), { anchor: 'end', fill: '#6c757d' });
  }

  // bars
  values.forEach((val, idx) => {
    const barHeight = val.p * scale;
    const xPos = BAR_X0 + idx * PITCH;
    const yPos = BASE - barHeight;
    s += `<rect x="${xPos}" y="${r2(yPos)}" width="${BAR_W}" height="${r2(barHeight)}" ` +
      `fill="#4A90E2" opacity="0.7" stroke="#2E5C8A" stroke-width="2"/>`;
    s += text(xPos + 30, 375, val.x, { size: 14, weight: 'bold' });
    s += text(xPos + 30, yPos - 5, val.p.toFixed(3), { weight: 'bold', fill: '#2E5C8A' });
    s += text(xPos + 30, yPos + barHeight / 2 + 5, (val.x * val.p).toFixed(2),
      { size: 11, weight: 'bold', fill: '#ffffff' });
  });

  // E[X] marker - centre aligned, matching the component (see note 1 in the header)
  const ex = BAR_X0 + 30 + (expectedValue - 1) * PITCH;
  s += `<line x1="${r2(ex)}" y1="30" x2="${r2(ex)}" y2="${BASE}" stroke="#e74c3c" ` +
    `stroke-width="3" stroke-dasharray="8,4"/>`;
  s += text(ex, 20, `E[X] = ${expectedValue.toFixed(3)}`, { size: 14, weight: 'bold', fill: '#e74c3c' });

  // axes and axis labels
  s += `<line x1="${PLOT_L}" y1="${BASE}" x2="${PLOT_R}" y2="${BASE}" stroke="#333" stroke-width="2"/>`;
  s += `<line x1="${PLOT_L}" y1="10" x2="${PLOT_L}" y2="${BASE}" stroke="#333" stroke-width="2"/>`;
  s += text(360, 395, 'Value (x)', { size: 16, weight: 'bold' });
  s += text(25, 180, 'Probability P(X = x)', { size: 16, weight: 'bold', transform: 'rotate(-90, 25, 180)' });

  return `<svg viewBox="0 0 ${W} ${H}" width="540" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(title)}">` + s + `</svg>`;
}

/* ---- the two frozen states ----
   `opening` is the distribution the tool mounts with. `afterDrag` is what the
   tool actually shows after pushing the P(X = 1) slider to its maximum, 1.00 -
   NOT a certainty, because the normalisation step rescales everything. */
export const STATES = {
  opening: DEFAULT_VALUES.map((v) => ({ ...v })),
  afterDrag: afterSliderDrag(DEFAULT_VALUES, 0, '1'),
};

export const readings = {
  opening: stats(STATES.opening),
  afterDrag: stats(STATES.afterDrag),
};

const discreteExpectedValueDiagrams = {
  opening: freeze(STATES.opening, 'The opening distribution, E[X] = 3.4'),
  afterDrag: freeze(STATES.afterDrag,
    'After dragging the P(X = 1) slider to 1.00: renormalised to 0.526, E[X] = 2.263'),
};

export default discreteExpectedValueDiagrams;
