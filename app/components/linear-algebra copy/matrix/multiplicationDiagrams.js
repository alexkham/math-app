// Frozen-state SVGs for the Matrix Multiplication tool (Line 1 anchor mesh).
//
// MultiplicationWrapper delegates scene generation to the STRATEGIES registry
// (strategies/index.js), one builder per computation strategy, each taking
// (aRows, aCols, bCols, order). This module calls those same builders and
// renders one representative scene per state through frozenMatrixSvg, so the
// cells, colours, labels and dimensions are the tool's own.
//
// States and the sizes they are frozen at:
//
//   strategies (all at the component defaults, A 2x3 · B 3x2 -> C 2x2):
//     row-column             22 scenes; frozen at scene 8  = c_{1,2}, term 2 of 3
//     column-by-column       12 scenes; frozen at scene 8  = column 2 of C, term 2 of 3
//     row-by-row             12 scenes; frozen at scene 8  = row 2 of C, term 2 of 3
//     sum-of-outer-products  11 scenes; frozen at scene 5  = adding rank-1 contribution 2
//
//   scenarios (row-column strategy):
//     general        A 2x3 · B 3x2, frozen at the intro scene (every cell of C pending)
//     matrix-vector  A 2x3 · B 3x1, frozen at scene 3 = c_{1,1}, term 2 of 3
//     vector-matrix  A 1x3 · B 3x2, frozen at scene 3 = c_{1,1}, term 2 of 3
//
//   undefined: no builder produces this - the wrapper shows a banner instead of
//     a scene. The still is assembled by hand in the same scene vocabulary:
//     order B x A with A 2x3 and B 3x3, so the left factor has 3 columns and the
//     right factor has 2 rows. Every column of B and every row of A is
//     highlighted so the mismatch (3 against 2) can be counted directly.
//
// The middle steps are frozen rather than the overview or the end because the
// middle is where the strategies actually differ: what is highlighted in A and
// B, and which cells of C are being written.
//
// NOTE: the live scenes also draw arrow overlays from the highlighted cells of
// A and B to the target cell of C. frozenMatrixSvg does not reproduce overlays,
// so every frozen scene was chosen so that the cell colouring alone carries the
// pairing (blue pairA in A, grey pairB in B, green target in C).

import { STRATEGIES } from './strategies';
import frozenMatrixSvg from './frozenMatrixSvg';

const A_ROWS = 2, A_COLS = 3, B_COLS = 2;

const built = {
  'row-column': STRATEGIES['row-column'].build(A_ROWS, A_COLS, B_COLS, 'AB'),
  'column-by-column': STRATEGIES['column-by-column'].build(A_ROWS, A_COLS, B_COLS, 'AB'),
  'row-by-row': STRATEGIES['row-by-row'].build(A_ROWS, A_COLS, B_COLS, 'AB'),
  'sum-of-outer-products': STRATEGIES['sum-of-outer-products'].build(A_ROWS, A_COLS, B_COLS, 'AB'),
  'general': STRATEGIES['row-column'].build(A_ROWS, A_COLS, B_COLS, 'AB'),
  'matrix-vector': STRATEGIES['row-column'].build(A_ROWS, A_COLS, 1, 'AB'),
  'vector-matrix': STRATEGIES['row-column'].build(1, A_COLS, B_COLS, 'AB'),
};

// index of the scene frozen for each state
export const sceneIndex = {
  'row-column': 8,             // c_{1,2}, term 2 of 3 (c_{1,1} already computed)
  'column-by-column': 8,       // column 2 of C, term 2 of 3 (column 1 complete)
  'row-by-row': 8,             // row 2 of C, term 2 of 3 (row 1 complete)
  'sum-of-outer-products': 5,  // adding rank-1 contribution 2 of 3
  'general': 0,                // intro: shapes only, C entirely pending
  'matrix-vector': 3,          // c_{1,1}, term 2 of 3, B is a single column
  'vector-matrix': 3,          // c_{1,1}, term 2 of 3, A is a single row
};

const freeze = (key) => {
  const sc = built[key][sceneIndex[key]];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

// The undefined product, B x A with A 2x3 and B 3x3. Same matrix descriptors
// and highlight names the strategies use, so frozenMatrixSvg draws it in the
// tool's own style; the '?' stands where C would be.
const undefinedScene = {
  matrices: {
    B: { symbol: 'b', label: 'B', rows: 3, cols: 3, bracketColor: '#475569' },
    A: { symbol: 'a', label: 'A', rows: 2, cols: 3, bracketColor: '#1e40af' },
  },
  layout: [
    { type: 'matrix', ref: 'B' },
    { type: 'operator', symbol: '×' },
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '=' },
    { type: 'text', label: '?' },
  ],
  highlights: {
    B: { cols: [[0, 'col'], [1, 'col'], [2, 'col']] },
    A: { rows: [[0, 'row'], [1, 'row']] },
  },
};

export const meta = {
  defaults: { aRows: A_ROWS, aCols: A_COLS, bCols: B_COLS },
  sceneCounts: Object.fromEntries(Object.entries(built).map(([k, v]) => [k, v.length])),
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, built[k][i].title])),
  undefinedShapes: { left: 'B 3×3', right: 'A 2×3' },
};

const multiplicationDiagrams = {
  'row-column': freeze('row-column'),
  'column-by-column': freeze('column-by-column'),
  'row-by-row': freeze('row-by-row'),
  'sum-of-outer-products': freeze('sum-of-outer-products'),
  'general': freeze('general'),
  'matrix-vector': freeze('matrix-vector'),
  'vector-matrix': freeze('vector-matrix'),
  'undefined': frozenMatrixSvg(undefinedScene),
};

export default multiplicationDiagrams;
