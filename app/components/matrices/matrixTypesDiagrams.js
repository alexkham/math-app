// Frozen-state SVGs for the Square Matrix Types Generator (Line 1 anchor mesh).
//
// MatrixGenerator.jsx renders HTML/CSS, not SVG, so this module is a faithful
// SVG port of its matrix display rather than a re-use of its render path. The
// numbers below are the component's own, read off MatrixGenerator.module.css
// and MatrixBracket.jsx and resolved here because a CSS module cannot be
// imported for its values:
//
//   .cell            32x32 (2rem), radius 4, bg #f2f2f2, colour #2563eb,
//                    margin-top 2px
//   .matrixRow       horizontal gap 2.4px (.15rem)
//   .matrixContent   vertical gap 1.6px (.1rem)
//   .matrixDisplay   flex, align-items center, gap 1.6px, white, padding 32px
//   .cell.highlighted        bg #fef3c7, border #fcd34d, colour #92400e, 600
//                            (wins over the later, weaker `.highlighted` rule
//                            on specificity, 0-2-0 against 0-1-0)
//   .highlightDiagonal       bg rgba(253,216,53,.5), border rgba(251,192,45,.6)
//   .pair0..4                the five rgba pair colours, in order
//   MatrixBracket    width 15, height size*40, stroke #0a58ca, width 1
//
// The cell-colouring rules replicate MatrixCell.getHighlightClass exactly,
// including getPairKey (min*size + max) % 5 for the symmetric and
// skew-symmetric pair colours.
//
// The live tool fills its matrices with Math.random() values, which a still
// cannot reproduce, so each state uses a fixed representative matrix chosen to
// show the pattern clearly. The `random` state reuses the very matrix the
// page's own explanation prints, so the still and the prose agree.
//
// Nothing in MatrixGenerator.jsx or its stylesheet is modified.

const CELL = 32;
const COL_GAP = 2.4;
const ROW_GAP = 1.6;
const MARGIN_TOP = 2;
const RADIUS = 4;
const PAD = 32;
const BRACKET_W = 15;
const DISPLAY_GAP = 1.6;

const BASE_FILL = '#f2f2f2';
const BASE_INK = '#2563eb';

const HIGHLIGHT = { fill: '#fef3c7', stroke: '#fcd34d', ink: '#92400e', bold: true };
const DIAGONAL = { fill: 'rgba(253,216,53,0.5)', stroke: 'rgba(251,192,45,0.6)', ink: BASE_INK };
const PAIRS = [
  { fill: 'rgba(144,202,249,0.5)', stroke: 'rgba(66,165,245,0.6)', ink: BASE_INK },
  { fill: 'rgba(129,199,132,0.5)', stroke: 'rgba(67,160,71,0.6)', ink: BASE_INK },
  { fill: 'rgba(255,183,77,0.5)', stroke: 'rgba(255,152,0,0.6)', ink: BASE_INK },
  { fill: 'rgba(240,98,146,0.5)', stroke: 'rgba(236,64,122,0.6)', ink: BASE_INK },
  { fill: 'rgba(186,104,200,0.5)', stroke: 'rgba(171,71,188,0.6)', ink: BASE_INK },
];

// MatrixGenerator.jsx: getPairKey
const getPairKey = (i, j, size) => {
  const minIdx = Math.min(i, j);
  const maxIdx = Math.max(i, j);
  return (minIdx * size + maxIdx) % 5;
};

// MatrixGenerator.jsx: MatrixCell.getHighlightClass, returning a style instead
// of a class name.
function cellStyle(type, row, col, matrix, size) {
  switch (type) {
    case 'identity':
    case 'scalar':
    case 'diagonal':
      return row === col ? HIGHLIGHT : null;

    case 'upperTriangular':
      return col >= row ? HIGHLIGHT : null;

    case 'lowerTriangular':
      return col <= row ? HIGHLIGHT : null;

    case 'symmetric':
      if (row === col) return DIAGONAL;
      if (matrix && matrix[row][col] === matrix[col][row]) {
        return PAIRS[getPairKey(row, col, size)];
      }
      return null;

    case 'skewSymmetric':
      if (row === col) return null;
      if (matrix && matrix[row][col] === -matrix[col][row]) {
        return PAIRS[getPairKey(row, col, size)];
      }
      return null;

    default:
      return null;
  }
}

// MatrixBracket.jsx, verbatim geometry
function bracket(size, side, x, y) {
  const height = size * 40;
  const d = side === 'left'
    ? `M 15 0 Q 5 0 5 20 L 5 ${height - 20} Q 5 ${height} 15 ${height}`
    : `M 0 0 Q 10 0 10 20 L 10 ${height - 20} Q 10 ${height} 0 ${height}`;
  return `<g transform="translate(${x} ${y})">`
    + `<path d="${d}" fill="none" stroke="#0a58ca" stroke-width="1"/></g>`;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function freeze(type, matrix, label) {
  const size = matrix.length;
  const contentW = size * CELL + (size - 1) * COL_GAP;
  const contentH = size * CELL + (size - 1) * ROW_GAP + MARGIN_TOP;
  const bracketH = size * 40;
  const innerH = Math.max(contentH, bracketH);
  const innerW = BRACKET_W + DISPLAY_GAP + contentW + DISPLAY_GAP + BRACKET_W;
  const w = innerW + PAD * 2;
  const h = innerH + PAD * 2;

  // .matrixDisplay is align-items: center, so each child is centred vertically
  const contentX = PAD + BRACKET_W + DISPLAY_GAP;
  const contentY = PAD + (innerH - contentH) / 2;
  const bracketY = PAD + (innerH - bracketH) / 2;

  let cells = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const st = cellStyle(type, i, j, matrix, size);
      const x = contentX + j * (CELL + COL_GAP);
      const y = contentY + MARGIN_TOP + i * (CELL + ROW_GAP);
      const fill = st ? st.fill : BASE_FILL;
      const ink = st ? st.ink : BASE_INK;
      cells += `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${CELL}" height="${CELL}" `
        + `rx="${RADIUS}" fill="${fill}"`
        + (st && st.stroke ? ` stroke="${st.stroke}" stroke-width="1"` : '')
        + `/>`;
      cells += `<text x="${(x + CELL / 2).toFixed(2)}" y="${(y + CELL / 2).toFixed(2)}" `
        + `text-anchor="middle" dominant-baseline="central" `
        + `font-family="monospace" font-size="20" fill="${ink}"`
        + (st && st.bold ? ' font-weight="600"' : '')
        + `>${esc(matrix[i][j])}</text>`;
    }
  }

  return `<svg viewBox="0 0 ${w.toFixed(2)} ${h.toFixed(2)}" width="${Math.round(w)}" `
    + `xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(label)}">`
    + `<rect width="${w.toFixed(2)}" height="${h.toFixed(2)}" rx="8" fill="#ffffff"/>`
    + bracket(size, 'left', PAD, bracketY)
    + cells
    + bracket(size, 'right', PAD + BRACKET_W + DISPLAY_GAP + contentW + DISPLAY_GAP, bracketY)
    + `</svg>`;
}

// Representative matrices, one per state of the type selector. Size 3 for all
// nine, which is the generator's own default size.
export const values = {
  identity: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  zero: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  scalar: [[3, 0, 0], [0, 3, 0], [0, 0, 3]],
  diagonal: [[4, 0, 0], [0, 7, 0], [0, 0, 2]],
  upperTriangular: [[3, 8, 5], [0, 6, 2], [0, 0, 9]],
  lowerTriangular: [[3, 0, 0], [8, 6, 0], [5, 2, 9]],
  symmetric: [[4, 7, 2], [7, 5, 8], [2, 8, 6]],
  skewSymmetric: [[0, 7, 2], [-7, 0, 8], [-2, -8, 0]],
  random: [[3, 7, 2], [5, 1, 9], [4, 6, 8]],
};

const LABELS = {
  identity: 'A 3 by 3 identity matrix with the diagonal ones highlighted',
  zero: 'A 3 by 3 zero matrix',
  scalar: 'A 3 by 3 scalar matrix with 3 on the highlighted diagonal',
  diagonal: 'A 3 by 3 diagonal matrix with 4, 7 and 2 on the highlighted diagonal',
  upperTriangular: 'A 3 by 3 upper triangular matrix with the diagonal and everything above it highlighted',
  lowerTriangular: 'A 3 by 3 lower triangular matrix with the diagonal and everything below it highlighted',
  symmetric: 'A 3 by 3 symmetric matrix with the diagonal in yellow and each mirrored pair in its own colour',
  skewSymmetric: 'A 3 by 3 skew-symmetric matrix with a zero diagonal and each sign-flipped pair in its own colour',
  random: 'A 3 by 3 random matrix with no highlighting',
};

export const meta = {
  size: 3,
  states: Object.keys(values),
  geometry: { CELL, COL_GAP, ROW_GAP, MARGIN_TOP, PAD, BRACKET_W },
};

const matrixTypesDiagrams = Object.fromEntries(
  Object.entries(values).map(([type, m]) => [type, freeze(type, m, LABELS[type])])
);

export default matrixTypesDiagrams;
