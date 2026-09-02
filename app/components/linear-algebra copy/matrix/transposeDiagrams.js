// Frozen-state SVGs for the Matrix Transpose tool (Line 1 anchor mesh).
//
// TransposeWrapper offers four strategies for the same operation, each with its
// own scene builder. This module calls those builders directly (STRATEGIES is
// exported additively from the wrapper) and renders one representative scene per
// strategy through frozenMatrixSvg, so the cells, colours, labels and dimensions
// are the tool's own.
//
// Defaults are the component's: 3 rows x 4 cols, so A is 3x4 and Aᵀ is 4x3.
// Scene counts at that size:
//   cell-by-cell        1 overview + 12 steps + 1 done = 14
//   row-as-column       1 overview +  3 steps + 1 done =  5
//   column-as-row       1 overview +  4 steps + 1 done =  6
//   diagonal-reflection 3 conceptual scenes
//
// Each is frozen mid-run rather than at the overview or the end, because the
// middle steps are where the strategies actually differ: what has already moved,
// what is moving, and what is still an empty placeholder.
//
// NOTE: the cell-by-cell and row/column strategies also draw a curved arrow
// overlay from source to destination, and the diagonal strategy draws a dashed
// axis. frozenMatrixSvg does not reproduce overlays, so these stills rely on the
// cell colouring alone - which does carry the correspondence in every case.

import { STRATEGIES } from './TransposeWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const ROWS = 3, COLS = 4;

const built = {
  'cell-by-cell': STRATEGIES['cell-by-cell'].build(ROWS, COLS),
  'row-as-column': STRATEGIES['row-as-column'].build(ROWS, COLS),
  'column-as-row': STRATEGIES['column-as-row'].build(ROWS, COLS),
  'diagonal-reflection': STRATEGIES['diagonal-reflection'].build(ROWS, COLS),
};

// index of the scene frozen for each strategy
export const sceneIndex = {
  'cell-by-cell': 6,          // step 6 of 12: five cells placed, one in flight
  'row-as-column': 2,         // step 2 of 3: one row already a column
  'column-as-row': 2,         // step 2 of 4: one column already a row
  'diagonal-reflection': 1,   // the reflection itself, after the setup scene
};

const freeze = (key) => {
  const sc = built[key][sceneIndex[key]];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  rows: ROWS,
  cols: COLS,
  sceneCounts: Object.fromEntries(Object.entries(built).map(([k, v]) => [k, v.length])),
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, built[k][i].title])),
};

const transposeDiagrams = {
  'cell-by-cell': freeze('cell-by-cell'),
  'row-as-column': freeze('row-as-column'),
  'column-as-row': freeze('column-as-row'),
  'diagonal-reflection': freeze('diagonal-reflection'),
};

export default transposeDiagrams;
