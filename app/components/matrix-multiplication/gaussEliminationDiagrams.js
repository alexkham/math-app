// Frozen-state SVGs for the Gaussian Elimination Calculator (Line 1 anchor
// mesh).
//
// GaussJordanCalculator renders an HTML <table> of number inputs, so this is an
// SVG port of that table rather than a re-use of its render path. Values are
// read off GaussJordanCalculator.module.css, which cannot be imported for them:
//
//   .matrix td      padding 5px, border 1px #ddd
//   .matrixInput    width 100px, padding 5px, border 1px #ddd, text-align right
//   .highlighted    background #FFFF99      (the later rule wins over the
//                                            commented-out `yellow` at the top)
//
// The elimination itself is not re-implemented: performElimination is
// replicated below exactly - same pivot search, same swap, same scale, same
// subtraction order, same `isReduced` branch (i from 0 rather than r + 1) - so
// the stages here are the stages the tool produces, including the highlight
// rows it marks on each one.
//
// Stage kinds, matching the `kinds` array the component now builds:
//   initial | swap | scale | eliminate | eliminateAbove | zeroError
//
// Nothing in GaussJordanCalculator.jsx's own behaviour is changed by this file.

const INPUT_W = 100;
const INPUT_PAD = 5;
const INPUT_BORDER = 1;
const CELL_W = INPUT_W + INPUT_PAD * 2 + INPUT_BORDER * 2; // 112
const CELL_H = 31;
const TD_PAD = 5;
const TD_BORDER = 1;
const COL_W = CELL_W + TD_PAD * 2 + TD_BORDER * 2;         // 124
const ROW_H = CELL_H + TD_PAD * 2 + TD_BORDER * 2;         // 43
const PAD = 18;

const GRID = '#dddddd';
const HIGHLIGHT = '#FFFF99';
const INK = '#111827';

const fmt = (x) => {
  const r = Math.round(x * 100) / 100;
  const s = Number.isInteger(r) ? String(r) : r.toFixed(2);
  return s === '-0' ? '0' : s.replace(/-/g, '−');
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// GaussJordanCalculator.jsx: performElimination, replicated so the stages and
// their highlight rows are the tool's own.
export function buildStages(input, isReduced) {
  const m = input.map((row) => [...row]);
  const stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
  const kinds = ['initial'];

  const rows = m.length;
  const cols = m[0].length;
  let lead = 0;

  for (let r = 0; r < rows; r++) {
    if (lead >= cols) break;
    let i = r;
    while (m[i][lead] === 0) {
      i++;
      if (i === rows) {
        i = r;
        lead++;
        if (cols === lead) return { stages, kinds };
      }
    }
    if (i !== r) {
      [m[i], m[r]] = [m[r], m[i]];
      kinds.push('swap');
      stages.push({ matrix: JSON.parse(JSON.stringify(m)), highlight: [r, i] });
    }

    let val = m[r][lead];
    if (val !== 1) {
      const scaleFactor = 1 / val;
      for (let j = 0; j < cols; j++) m[r][j] *= scaleFactor;
      kinds.push('scale');
      stages.push({ matrix: JSON.parse(JSON.stringify(m)), highlight: [r] });
    }

    for (let k = isReduced ? 0 : r + 1; k < rows; k++) {
      if (k !== r) {
        val = m[k][lead];
        if (val !== 0) {
          for (let j = 0; j < cols; j++) m[k][j] -= val * m[r][j];
          kinds.push(k < r ? 'eliminateAbove' : 'eliminate');
          stages.push({ matrix: JSON.parse(JSON.stringify(m)), highlight: [k, r] });
        }
      }
    }
    lead++;
  }
  return { stages, kinds };
}

function freeze(stage, label) {
  const m = stage.matrix;
  const rows = m.length;
  const cols = m[0].length;
  const hl = stage.highlight || [];
  const w = cols * COL_W + PAD * 2;
  const h = rows * ROW_H + PAD * 2;

  let out = '';
  for (let i = 0; i < rows; i++) {
    const y = PAD + i * ROW_H;
    for (let j = 0; j < cols; j++) {
      const x = PAD + j * COL_W;
      const on = hl.includes(i);
      // td
      out += `<rect x="${x}" y="${y}" width="${COL_W}" height="${ROW_H}" `
        + `fill="${on ? HIGHLIGHT : '#ffffff'}" stroke="${GRID}" stroke-width="${TD_BORDER}"/>`;
      // the number input inside it
      out += `<rect x="${x + TD_PAD + TD_BORDER}" y="${y + TD_PAD + TD_BORDER}" `
        + `width="${CELL_W}" height="${CELL_H}" fill="#ffffff" stroke="${GRID}" stroke-width="1"/>`;
      // right-aligned value, matching text-align: right + 5px padding
      out += `<text x="${x + TD_PAD + TD_BORDER + CELL_W - INPUT_PAD - INPUT_BORDER}" `
        + `y="${y + ROW_H / 2}" text-anchor="end" dominant-baseline="central" `
        + `font-family="Arial, Helvetica, sans-serif" font-size="15" fill="${INK}">`
        + `${esc(fmt(m[i][j]))}</text>`;
    }
  }

  // the augmented bar, between the coefficient block and the last column
  const barX = PAD + (cols - 1) * COL_W;
  out += `<line x1="${barX}" y1="${PAD}" x2="${barX}" y2="${PAD + rows * ROW_H}" `
    + `stroke="#94a3b8" stroke-width="2"/>`;

  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" xmlns="http://www.w3.org/2000/svg" `
    + `role="img" aria-label="${esc(label)}">`
    + `<rect width="${w}" height="${h}" fill="#ffffff"/>`
    + out
    + `</svg>`;
}

// The matrix the stills use. Chosen so the run exercises every stage kind: the
// first pivot is 0, which forces a swap; no pivot is 1, which forces a scale at
// every step; and the RREF pass produces eliminations above the pivot as well
// as below.
export const MATRIX = [
  [0, 2, 1, 4],
  [2, 4, 1, 9],
  [1, 1, 3, 8],
];

// A zero matrix reproduces the tool's guard, which refuses to run at all.
export const ZERO_MATRIX = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const ref = buildStages(MATRIX, false);
const rref = buildStages(MATRIX, true);

const firstOf = (built, kind) => built.kinds.indexOf(kind);

export const sceneIndex = {
  initial: firstOf(ref, 'initial'),
  swap: firstOf(ref, 'swap'),
  scale: firstOf(ref, 'scale'),
  eliminate: firstOf(ref, 'eliminate'),
  refDone: ref.stages.length - 1,
  eliminateAbove: firstOf(rref, 'eliminateAbove'),
  rrefDone: rref.stages.length - 1,
};

export const meta = {
  matrix: MATRIX,
  refStages: ref.stages.length,
  rrefStages: rref.stages.length,
  refKinds: ref.kinds,
  rrefKinds: rref.kinds,
};

const LABELS = {
  initial: 'The starting augmented matrix, before any row operation',
  swap: 'After swapping row 1 with row 2 to bring a non-zero pivot into place, both rows highlighted',
  scale: 'After dividing row 1 by its pivot so the leading entry becomes 1, that row highlighted',
  eliminate: 'After subtracting a multiple of the pivot row from a row below it, both rows highlighted',
  refDone: 'The finished row echelon form, zeros below every pivot',
  eliminateAbove: 'A reduced-echelon step: clearing an entry above a pivot, which the echelon pass never does',
  rrefDone: 'The finished reduced row echelon form, the identity beside the solution column',
};

const gaussEliminationDiagrams = {
  initial: freeze(ref.stages[sceneIndex.initial], LABELS.initial),
  swap: freeze(ref.stages[sceneIndex.swap], LABELS.swap),
  scale: freeze(ref.stages[sceneIndex.scale], LABELS.scale),
  eliminate: freeze(ref.stages[sceneIndex.eliminate], LABELS.eliminate),
  refDone: freeze(ref.stages[sceneIndex.refDone], LABELS.refDone),
  eliminateAbove: freeze(rref.stages[sceneIndex.eliminateAbove], LABELS.eliminateAbove),
  rrefDone: freeze(rref.stages[sceneIndex.rrefDone], LABELS.rrefDone),
  zeroError: freeze({ matrix: ZERO_MATRIX, highlight: [] },
    'A zero matrix, which the calculator refuses to transform'),
};

export default gaussEliminationDiagrams;
