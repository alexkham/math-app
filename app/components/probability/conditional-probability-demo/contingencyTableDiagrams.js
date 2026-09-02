// Frozen-state SVGs for the Contingency Tables tool (Line 1 anchor mesh).
//
// The page offers four table shapes through GenericMultiComponentFrame - 2x2,
// 2x3, 2x4 and 3x3 - each a separate component with its own fixed parameters.
// Those components render HTML tables, so the grid is ported to SVG here: the
// joint-probability body, the marginal row and column, the grand total of 1, and
// the same four accent colours the 2x2 uses for its cells.
//
// Every number below is computed from the parameters the components themselves
// declare, so the tables shown match the tables the tool draws:
//
//   2x2   P(A) = 0.6,  P(B|A) = 0.7,  P(B|not A) = 0.3
//   2x3   P(A) = 0.6,  P(B1|A) = 0.5, P(B2|A) = 0.3,  P(B1|notA) = 0.3, P(B2|notA) = 0.4
//   2x4   P(A) = 0.6,  P(B1..B3|A) = 0.3 / 0.25 / 0.25, P(B1..B3|notA) = 0.2 / 0.35 / 0.25
//   3x3   P(A1) = 0.3, P(A2) = 0.4,   rows of conditionals as declared in the component
//
// The remaining conditional in each row is the complement, exactly as each
// component derives it.

const ACCENTS = ['#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];
const CELL_W = 96, CELL_H = 44, HEAD_W = 104, PAD = 14;

const f2 = (v) => v.toFixed(2);
const f3 = (v) => v.toFixed(3);

// ---- the four models, built from each component's own declared parameters ----
function model2x2() {
  const pA = 0.6, pBA = 0.7, pBnA = 0.3;
  const pNotA = 1 - pA;
  return {
    rowLabels: ['A', 'Aᶜ'],
    colLabels: ['B', 'Bᶜ'],
    joint: [
      [pA * pBA, pA * (1 - pBA)],
      [pNotA * pBnA, pNotA * (1 - pBnA)],
    ],
  };
}

function model2x3() {
  const pA = 0.6, b1A = 0.5, b2A = 0.3, b1nA = 0.3, b2nA = 0.4;
  const pNotA = 1 - pA;
  return {
    rowLabels: ['A', 'Aᶜ'],
    colLabels: ['B₁', 'B₂', 'B₃'],
    joint: [
      [pA * b1A, pA * b2A, pA * (1 - b1A - b2A)],
      [pNotA * b1nA, pNotA * b2nA, pNotA * (1 - b1nA - b2nA)],
    ],
  };
}

function model2x4() {
  const pA = 0.6;
  const a = [0.3, 0.25, 0.25];
  const na = [0.2, 0.35, 0.25];
  const pNotA = 1 - pA;
  return {
    rowLabels: ['A', 'Aᶜ'],
    colLabels: ['B₁', 'B₂', 'B₃', 'B₄'],
    joint: [
      [...a.map((p) => pA * p), pA * (1 - a.reduce((x, y) => x + y, 0))],
      [...na.map((p) => pNotA * p), pNotA * (1 - na.reduce((x, y) => x + y, 0))],
    ],
  };
}

function model3x3() {
  const pA1 = 0.3, pA2 = 0.4, pA3 = 1 - pA1 - pA2;
  const rows = [
    { p: pA1, c: [0.4, 0.35] },
    { p: pA2, c: [0.3, 0.4] },
    { p: pA3, c: [0.35, 0.3] },
  ];
  return {
    rowLabels: ['A₁', 'A₂', 'A₃'],
    colLabels: ['B₁', 'B₂', 'B₃'],
    joint: rows.map((r) => [r.p * r.c[0], r.p * r.c[1], r.p * (1 - r.c[0] - r.c[1])]),
  };
}

export const MODELS = {
  '2x2': model2x2(),
  '2x3': model2x3(),
  '2x4': model2x4(),
  '3x3': model3x3(),
};

function render(m, title) {
  const rows = m.joint.length, cols = m.joint[0].length;
  const rowSums = m.joint.map((r) => r.reduce((a, b) => a + b, 0));
  const colSums = m.joint[0].map((_, j) => m.joint.reduce((a, r) => a + r[j], 0));
  const grand = rowSums.reduce((a, b) => a + b, 0);

  const W = PAD * 2 + HEAD_W + (cols + 1) * CELL_W;
  const H = PAD * 2 + 26 + (rows + 2) * CELL_H;
  const x0 = PAD + HEAD_W, y0 = PAD + 26;

  let s = `<rect width="${W}" height="${H}" fill="#ffffff"/>`;
  s += `<text x="${PAD}" y="${PAD + 14}" font-size="13" font-weight="600" fill="#334155" ` +
    `font-family="Arial, sans-serif">${title}</text>`;

  const cell = (x, y, w, h, fill, stroke) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke || '#cbd5e1'}" stroke-width="1"/>`;
  const label = (x, y, w, h, text, opts = {}) =>
    `<text x="${x + w / 2}" y="${y + h / 2}" text-anchor="middle" dominant-baseline="central" ` +
    `font-size="${opts.size || 13}" font-weight="${opts.weight || 400}" fill="${opts.fill || '#0f172a'}" ` +
    `font-family="Arial, sans-serif">${text}</text>`;

  // header row
  s += cell(PAD, y0, HEAD_W, CELL_H, '#f1f5f9');
  m.colLabels.forEach((c, j) => {
    s += cell(x0 + j * CELL_W, y0, CELL_W, CELL_H, '#f1f5f9');
    s += label(x0 + j * CELL_W, y0, CELL_W, CELL_H, c, { weight: 600, fill: '#334155' });
  });
  s += cell(x0 + cols * CELL_W, y0, CELL_W, CELL_H, '#e2e8f0');
  s += label(x0 + cols * CELL_W, y0, CELL_W, CELL_H, 'total', { weight: 600, fill: '#475569', size: 12 });

  // body
  m.joint.forEach((row, i) => {
    const y = y0 + (i + 1) * CELL_H;
    s += cell(PAD, y, HEAD_W, CELL_H, '#f1f5f9');
    s += label(PAD, y, HEAD_W, CELL_H, m.rowLabels[i], { weight: 600, fill: '#334155' });
    row.forEach((v, j) => {
      const accent = ACCENTS[(i * cols + j) % ACCENTS.length];
      s += cell(x0 + j * CELL_W, y, CELL_W, CELL_H, accent + '1a', accent);
      s += label(x0 + j * CELL_W, y, CELL_W, CELL_H, f3(v));
    });
    s += cell(x0 + cols * CELL_W, y, CELL_W, CELL_H, '#e2e8f0');
    s += label(x0 + cols * CELL_W, y, CELL_W, CELL_H, f2(rowSums[i]), { weight: 600, fill: '#475569' });
  });

  // marginal row + grand total
  const yM = y0 + (rows + 1) * CELL_H;
  s += cell(PAD, yM, HEAD_W, CELL_H, '#e2e8f0');
  s += label(PAD, yM, HEAD_W, CELL_H, 'total', { weight: 600, fill: '#475569', size: 12 });
  colSums.forEach((v, j) => {
    s += cell(x0 + j * CELL_W, yM, CELL_W, CELL_H, '#e2e8f0');
    s += label(x0 + j * CELL_W, yM, CELL_W, CELL_H, f2(v), { weight: 600, fill: '#475569' });
  });
  s += cell(x0 + cols * CELL_W, yM, CELL_W, CELL_H, '#cbd5e1');
  s += label(x0 + cols * CELL_W, yM, CELL_W, CELL_H, f2(grand), { weight: 700, fill: '#0f172a' });

  return `<svg viewBox="0 0 ${W} ${H}" width="520" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="${title}: joint probabilities with marginals summing to ${f2(grand)}">` + s + `</svg>`;
}

// marginals the page prose quotes
export const marginals = Object.fromEntries(
  Object.entries(MODELS).map(([k, m]) => [k, {
    rows: m.joint.map((r) => r.reduce((a, b) => a + b, 0)),
    cols: m.joint[0].map((_, j) => m.joint.reduce((a, r) => a + r[j], 0)),
    grand: m.joint.flat().reduce((a, b) => a + b, 0),
    cells: m.joint.flat().length,
  }])
);

const contingencyTableDiagrams = {
  '2x2': render(MODELS['2x2'], '2×2 contingency table'),
  '2x3': render(MODELS['2x3'], '2×3 contingency table'),
  '2x4': render(MODELS['2x4'], '2×4 contingency table'),
  '3x3': render(MODELS['3x3'], '3×3 contingency table'),
};

export default contingencyTableDiagrams;
