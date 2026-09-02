// Frozen-state SVGs for the Weighted Expected Value tool (Line 1 anchor mesh).
//
// The component draws its canvas as inline JSX inside the render tree, so there
// is no string builder to reuse; this module ports that markup element for
// element, keeping the component's own geometry:
//
//   canvas 900x620, value axis at y = 250 spanning x = 100..800
//   xScale(v) = 100 + ((v - min) / (max - min)) * 700
//   weight circle  r = 20 + (p / maxP) * 18, centred at lineY - 50 - arrowLen
//   arrow length   20 + (p / maxP) * 30, stroke 1.5 + (p / maxP) * 1.5
//   E(X) marker    solid blue #3B82F6, simple average dashed grey #6B7280
//
// The seven presets are imported from the component, so the probabilities and
// therefore every E(X) below are the tool's own.
//
// One faithful-to-the-tool detail: the weight circles carry "P=0.17" for the
// equal-weights preset because the component prints p.toFixed(2), so the six
// labels read 0.17 and do not visibly sum to 1. That is what the tool shows.

import { distributions } from './WeightedExpectedValueVisualization';

const WIDTH = 900, HEIGHT = 620;
const LINE_Y = 250, LINE_START = 100, LINE_END = 800;
const LINE_LEN = LINE_END - LINE_START;

const r2 = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const MARKER =
  '<defs><marker id="wev-arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" ' +
  'orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#3B82F6" opacity="0.8"/></marker></defs>';

const text = (x, y, s, o = {}) =>
  `<text x="${r2(x)}" y="${r2(y)}" text-anchor="${o.anchor || 'middle'}" ` +
  `font-size="${o.size || 12}" ${o.weight ? `font-weight="${o.weight}" ` : ''}` +
  `fill="${o.fill || '#2c3e50'}" font-family="Arial, sans-serif">${esc(s)}</text>`;

/* ---- the component's own derived quantities ---- */
export function stats(name) {
  const { values, probabilities } = distributions[name];
  const expectedValue = values.reduce((sum, v, i) => sum + v * probabilities[i], 0);
  const simpleAverage = values.reduce((sum, v) => sum + v, 0) / values.length;
  return {
    values,
    probabilities,
    expectedValue,
    simpleAverage,
    contributions: values.map((v, i) => v * probabilities[i]),
    total: probabilities.reduce((a, b) => a + b, 0),
  };
}

function freeze(name) {
  const { values, probabilities, expectedValue, simpleAverage } = stats(name);
  const minVal = Math.min(...values), maxVal = Math.max(...values);
  const valRange = maxVal - minVal;
  const xScale = (v) => (valRange === 0 ? (LINE_START + LINE_END) / 2
    : LINE_START + ((v - minVal) / valRange) * LINE_LEN);
  const maxProb = Math.max(...probabilities);

  let s = `<rect width="${WIDTH}" height="${HEIGHT}" fill="#F8FAFC"/>`;

  // value axis
  s += `<line x1="${LINE_START}" y1="${LINE_Y}" x2="${LINE_END}" y2="${LINE_Y}" ` +
    `stroke="#2c3e50" stroke-width="2"/>`;

  // per-value tick, weight circle, pull arrow and contribution labels
  values.forEach((value, idx) => {
    const x = xScale(value);
    const prob = probabilities[idx];
    const weightRadius = 20 + (prob / maxProb) * 18;
    const arrowLength = 20 + (prob / maxProb) * 30;
    const cy = LINE_Y - 50 - arrowLength;

    s += `<line x1="${r2(x)}" y1="${LINE_Y - 10}" x2="${r2(x)}" y2="${LINE_Y + 10}" ` +
      `stroke="#2c3e50" stroke-width="1.5"/>`;
    s += text(x, LINE_Y + 30, value, { size: 14, weight: 'bold' });
    s += `<circle cx="${r2(x)}" cy="${r2(cy)}" r="${r2(weightRadius)}" fill="#3B82F6" ` +
      `stroke="#2563EB" stroke-width="2" opacity="0.9"/>`;
    s += text(x, cy + 5, `P=${prob.toFixed(2)}`, { size: 11, weight: 'bold', fill: '#ffffff' });
    s += `<line x1="${r2(x)}" y1="${r2(cy + weightRadius)}" x2="${r2(x)}" y2="${LINE_Y - 15}" ` +
      `stroke="#3B82F6" stroke-width="${r2(1.5 + (prob / maxProb) * 1.5)}" opacity="0.8" ` +
      `marker-end="url(#wev-arrowhead)"/>`;
    s += text(x, LINE_Y + 45, `${value}×${prob.toFixed(2)}`, { size: 9, weight: 'bold', fill: '#3B82F6' });
    s += text(x, LINE_Y + 57, `=${(value * prob).toFixed(2)}`, { size: 9, weight: 'bold', fill: '#3B82F6' });
  });

  // E(X) marker
  const ex = xScale(expectedValue);
  s += `<line x1="${r2(ex)}" y1="${LINE_Y + 60}" x2="${r2(ex)}" y2="${LINE_Y + 100}" ` +
    `stroke="#3B82F6" stroke-width="3"/>`;
  s += `<rect x="${r2(ex - 60)}" y="${LINE_Y + 105}" width="120" height="28" fill="#3B82F6" rx="5"/>`;
  s += text(ex, LINE_Y + 125, `E(X) = ${expectedValue.toFixed(2)}`, { size: 15, weight: 'bold', fill: '#ffffff' });

  // simple-average marker
  const av = xScale(simpleAverage);
  s += `<line x1="${r2(av)}" y1="${LINE_Y + 60}" x2="${r2(av)}" y2="${LINE_Y + 100}" ` +
    `stroke="#6B7280" stroke-width="2.5" stroke-dasharray="5,5"/>`;
  s += `<rect x="${r2(av - 60)}" y="${LINE_Y + 148}" width="120" height="25" fill="#6B7280" rx="5"/>`;
  s += text(av, LINE_Y + 166, `Avg = ${simpleAverage.toFixed(2)}`, { size: 13, weight: 'bold', fill: '#ffffff' });

  // headings
  s += text(WIDTH / 2, 30, 'Probability "Weights" Pull the Expected Value', { size: 16, weight: 'bold' });
  s += text(WIDTH / 2, HEIGHT - 50, 'Blue numbers show each contribution: x × P(x) = contribution to E(X)',
    { size: 11, weight: 'bold', fill: '#3B82F6' });

  // legend, at the component's own translate(30, 420)
  s += `<g transform="translate(30, 420)">`;
  s += `<rect x="0" y="0" width="250" height="120" fill="none" stroke="#ddd" stroke-width="0.5" rx="5"/>`;
  s += `<circle cx="20" cy="25" r="12" fill="#3B82F6" stroke="#2563EB" stroke-width="2" opacity="0.9"/>`;
  s += text(40, 30, 'P(X = x) in circle', { anchor: 'start' });
  s += `<line x1="15" y1="55" x2="25" y2="55" stroke="#3B82F6" stroke-width="2" opacity="0.8" marker-end="url(#wev-arrowhead)"/>`;
  s += text(40, 60, 'Pull strength (arrow)', { anchor: 'start' });
  s += `<line x1="10" y1="85" x2="30" y2="85" stroke="#3B82F6" stroke-width="3"/>`;
  s += text(40, 90, 'Expected Value E(X)', { anchor: 'start' });
  s += `<line x1="10" y1="105" x2="30" y2="105" stroke="#6B7280" stroke-width="2.5" stroke-dasharray="5,5"/>`;
  s += text(40, 110, 'Simple Average (unweighted)', { anchor: 'start' });
  s += `</g>`;

  return `<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" width="560" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(name)} preset: E(X) = ${expectedValue.toFixed(2)} against a simple average of ${simpleAverage.toFixed(2)}">` +
    MARKER + s + `</svg>`;
}

// slug per preset, so the page can key sections and anchors off the same names
export const SLUGS = {
  'Equal Weights': 'equal-weights',
  'Pull Right': 'pull-right',
  'Pull Left': 'pull-left',
  'Pull Center': 'pull-center',
  'Pull Extremes': 'pull-extremes',
  'Strong Right Bias': 'strong-right-bias',
  'Strong Left Bias': 'strong-left-bias',
};

// every preset's readings, so the page prose quotes the tool
export const readings = Object.fromEntries(
  Object.keys(distributions).map((name) => {
    const st = stats(name);
    return [SLUGS[name], {
      name,
      expectedValue: st.expectedValue,
      simpleAverage: st.simpleAverage,
      total: st.total,
      contributions: st.contributions,
    }];
  })
);

const weightedExpectedValueDiagrams = Object.fromEntries(
  Object.keys(distributions).map((name) => [SLUGS[name], freeze(name)])
);

export default weightedExpectedValueDiagrams;
