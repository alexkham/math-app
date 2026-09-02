// Frozen-state SVGs for the Conditional Probability Tree (Line 1 anchor mesh).
//
// The component draws its tree as inline JSX, so this module ports that markup
// element for element and keeps the component's own geometry:
//
//   canvas 720x560, root at x = 40, level 1 at x = 240, level 2 at x = 520,
//          vertical spacing 120 with leaves offset +/- 64
//   nodes  r = 8 for the root, r = 25 otherwise, stroke #1e40af width 2
//   edges  #666 at width 2 when nothing is highlighted; on a highlight the
//          edges belonging to it take the highlight colour at width 4 and the
//          rest fade to #cbd5e1 at width 1 - the component's own getPathColor /
//          getPathWidth rules, reproduced here
//   labels edge labels offset 30px along the perpendicular, node labels above
//          for A / Ac and to the right for the four leaves
//
// The component's sliders open at P(A) = 0.6, P(B|A) = 0.7, P(B|Ac) = 0.3, and
// every probability below is computed from those with the component's own
// formulas. Four of its fourteen highlight keys are frozen: the unhighlighted
// tree, one leaf path, the two-path P(B) highlight (the law of total
// probability) and the whole subtree under A.

const WIDTH = 720, HEIGHT = 560;
const START_X = 40, LEVEL1_X = 240, LEVEL2_X = 520, V_SPACING = 120;
const START_Y = HEIGHT / 2;

const r2 = (n) => Math.round(n * 100) / 100;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---- the component's opening sliders ---- */
export const DEFAULTS = { pA: 0.6, pBGivenA: 0.7, pBGivenNotA: 0.3 };

export function model({ pA, pBGivenA, pBGivenNotA } = DEFAULTS) {
  const pNotA = 1 - pA;
  const pAAndB = pA * pBGivenA;
  const pAAndNotB = pA * (1 - pBGivenA);
  const pNotAAndB = pNotA * pBGivenNotA;
  const pNotAAndNotB = pNotA * (1 - pBGivenNotA);
  const pB = pAAndB + pNotAAndB;
  return {
    pA, pNotA, pBGivenA, pBGivenNotA,
    pAAndB, pAAndNotB, pNotAAndB, pNotAAndNotB,
    pB, pNotB: 1 - pB,
    // Bayes, available from the same four leaves
    pAGivenB: pB > 0 ? pAAndB / pB : 0,
    total: pAAndB + pAAndNotB + pNotAAndB + pNotAAndNotB,
  };
}

const PATH_COLORS = {
  AB: '#10b981', AnotB: '#f59e0b', notAB: '#8b5cf6', notAnotB: '#ef4444',
  A: '#3b82f6', notA: '#06b6d4', B: '#ec4899', notB: '#f97316',
  givenA: '#60a5fa', givenNotA: '#22d3ee',
  BgivenA: '#10b981', BnotgivenA: '#f59e0b',
  BgivenNotA: '#8b5cf6', BnotgivenNotA: '#ef4444',
};

const PATH_NODES = {
  AB: ['start', 'A', 'AB'],
  AnotB: ['start', 'A', 'AnotB'],
  notAB: ['start', 'notA', 'notAB'],
  notAnotB: ['start', 'notA', 'notAnotB'],
  A: ['start', 'A'],
  notA: ['start', 'notA'],
  B: ['start', 'A', 'AB', 'notA', 'notAB'],
  notB: ['start', 'A', 'AnotB', 'notA', 'notAnotB'],
  givenA: ['start', 'A', 'AB', 'AnotB'],
  givenNotA: ['start', 'notA', 'notAB', 'notAnotB'],
};

function buildNodes(m) {
  return {
    start: { x: START_X, y: START_Y, label: 'Start' },
    A: { x: LEVEL1_X, y: START_Y - V_SPACING, label: 'A', prob: m.pA },
    notA: { x: LEVEL1_X, y: START_Y + V_SPACING, label: 'Aᶜ', prob: m.pNotA },
    AB: { x: LEVEL2_X, y: START_Y - V_SPACING - 64, label: 'A ∩ B', prob: m.pAAndB },
    AnotB: { x: LEVEL2_X, y: START_Y - V_SPACING + 64, label: 'A ∩ Bᶜ', prob: m.pAAndNotB },
    notAB: { x: LEVEL2_X, y: START_Y + V_SPACING - 64, label: 'Aᶜ ∩ B', prob: m.pNotAAndB },
    notAnotB: { x: LEVEL2_X, y: START_Y + V_SPACING + 64, label: 'Aᶜ ∩ Bᶜ', prob: m.pNotAAndNotB },
  };
}

function buildPaths(m) {
  return [
    { from: 'start', to: 'A', label: `P(A) = ${m.pA.toFixed(3)}`,
      belongsTo: ['AB', 'AnotB', 'A', 'B', 'notB', 'givenA', 'BgivenA', 'BnotgivenA'] },
    { from: 'start', to: 'notA', label: `P(Aᶜ) = ${m.pNotA.toFixed(3)}`,
      belongsTo: ['notAB', 'notAnotB', 'notA', 'B', 'notB', 'givenNotA', 'BgivenNotA', 'BnotgivenNotA'] },
    { from: 'A', to: 'AB', label: `P(B|A) = ${m.pBGivenA.toFixed(3)}`,
      belongsTo: ['AB', 'B', 'givenA', 'BgivenA'] },
    { from: 'A', to: 'AnotB', label: `P(Bᶜ|A) = ${(1 - m.pBGivenA).toFixed(3)}`,
      belongsTo: ['AnotB', 'notB', 'givenA', 'BnotgivenA'] },
    { from: 'notA', to: 'notAB', label: `P(B|Aᶜ) = ${m.pBGivenNotA.toFixed(3)}`,
      belongsTo: ['notAB', 'B', 'givenNotA', 'BgivenNotA'] },
    { from: 'notA', to: 'notAnotB', label: `P(Bᶜ|Aᶜ) = ${(1 - m.pBGivenNotA).toFixed(3)}`,
      belongsTo: ['notAnotB', 'notB', 'givenNotA', 'BnotgivenNotA'] },
  ];
}

// the component's own perpendicular label offset
function labelPosition(from, to) {
  const midX = (from.x + to.x) / 2, midY = (from.y + to.y) / 2;
  const dx = to.x - from.x, dy = to.y - from.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  return { x: midX + (-dy / length) * 30, y: midY + (dx / length) * 30 };
}

function freeze(highlight, label, sliders) {
  const m = model(sliders);
  const nodes = buildNodes(m);
  const paths = buildPaths(m);

  const pathColor = (p) => !highlight ? '#666'
    : p.belongsTo.includes(highlight) ? PATH_COLORS[highlight] : '#cbd5e1';
  const pathWidth = (p) => !highlight ? 2 : p.belongsTo.includes(highlight) ? 4 : 1;
  const nodeColor = (k) => !highlight ? '#3b82f6'
    : (PATH_NODES[highlight] || []).includes(k) ? PATH_COLORS[highlight] : '#cbd5e1';

  let s = `<rect width="${WIDTH}" height="${HEIGHT}" fill="#ffffff"/>`;

  paths.forEach((p) => {
    const from = nodes[p.from], to = nodes[p.to];
    const lp = labelPosition(from, to);
    s += `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" ` +
      `stroke="${pathColor(p)}" stroke-width="${pathWidth(p)}"/>`;
    s += `<text x="${r2(lp.x)}" y="${r2(lp.y)}" font-size="12" fill="${pathColor(p)}" ` +
      `text-anchor="middle" font-family="Arial, sans-serif">${esc(p.label)}</text>`;
  });

  Object.entries(nodes).forEach(([key, node]) => {
    s += `<circle cx="${node.x}" cy="${node.y}" r="${key === 'start' ? 8 : 25}" ` +
      `fill="${nodeColor(key)}" stroke="#1e40af" stroke-width="2"/>`;
    if (key === 'start') return;
    if (key === 'A' || key === 'notA') {
      s += `<text x="${node.x}" y="${node.y - 35}" font-size="14" font-weight="600" fill="#1e293b" ` +
        `text-anchor="middle" font-family="Arial, sans-serif">${esc(node.label)}</text>`;
      s += `<text x="${node.x}" y="${node.y - 50}" font-size="12" fill="#475569" ` +
        `text-anchor="middle" font-family="Arial, sans-serif">P = ${node.prob.toFixed(4)}</text>`;
    } else {
      s += `<text x="${node.x + 40}" y="${node.y - 8}" font-size="14" font-weight="600" fill="#1e293b" ` +
        `text-anchor="start" font-family="Arial, sans-serif">${esc(node.label)}</text>`;
      s += `<text x="${node.x + 40}" y="${node.y + 8}" font-size="12" fill="#475569" ` +
        `text-anchor="start" font-family="Arial, sans-serif">P = ${node.prob.toFixed(4)}</text>`;
    }
  });

  return `<svg viewBox="0 0 ${WIDTH} ${HEIGHT}" width="540" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${esc(label)}">` + s + `</svg>`;
}

export const readings = model(DEFAULTS);

const conditionalTreeDiagrams = {
  unhighlighted: freeze(null,
    'Conditional probability tree at P(A) = 0.6, P(B|A) = 0.7, P(B|not A) = 0.3, no path highlighted'),
  leafPath: freeze('AB',
    'The A then B path highlighted in green, giving P(A and B) = 0.42'),
  totalProbability: freeze('B',
    'Both paths that reach B highlighted in pink: 0.42 + 0.12 = 0.54'),
  subtreeGivenA: freeze('givenA',
    'The whole subtree under A highlighted, whose two conditional branches sum to 1'),
};

export default conditionalTreeDiagrams;
