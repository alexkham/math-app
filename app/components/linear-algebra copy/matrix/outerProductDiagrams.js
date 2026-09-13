// Frozen-state SVGs for the Vector Outer Product tool (Line 1 anchor mesh).
//
// Built from OuterProductWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Defaults are the component's: u of length 3, v of
// length 3, so the cell method runs 1 intro + 9 cells + 1 done, the row
// method 1 + 3 + 1, the column method 1 + 3 + 1.
//
// Five stills:
//   intro  — u as a column, vᵀ as a row, the 3×3 result empty
//   cell   — cell method frozen at entry (2, 2), the 5th of 9
//   row    — row method frozen at row 2: one entry of u against all of vᵀ
//   column — column method frozen at column 2: one entry of v against all of u
//   done   — the completed rank-1 matrix
//
// Arrows are not reproduced; the cell/row/column highlights carry each state.

import { buildScenes, phaseKeyFor } from './OuterProductWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const M = 3;
const N = 3;

const cellScenes = buildScenes(M, N, 'cell');
const rowScenes = buildScenes(M, N, 'row');
const columnScenes = buildScenes(M, N, 'column');

export const sceneIndex = {
  intro: 0,
  cell: 1 + (1 * N + 1),   // entry (2, 2) in 1-based terms
  row: 1 + 1,              // row 2
  column: 1 + 1,           // column 2
  done: cellScenes.length - 1,
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  m: M,
  n: N,
  sceneCounts: { cell: cellScenes.length, row: rowScenes.length, column: columnScenes.length },
  phases: {
    intro: phaseKeyFor(sceneIndex.intro, M, N, 'cell'),
    cell: phaseKeyFor(sceneIndex.cell, M, N, 'cell'),
    row: phaseKeyFor(sceneIndex.row, M, N, 'row'),
    column: phaseKeyFor(sceneIndex.column, M, N, 'column'),
    done: phaseKeyFor(sceneIndex.done, M, N, 'cell'),
  },
  titles: {
    intro: cellScenes[sceneIndex.intro].title,
    cell: cellScenes[sceneIndex.cell].title,
    row: rowScenes[sceneIndex.row].title,
    column: columnScenes[sceneIndex.column].title,
    done: cellScenes[sceneIndex.done].title,
  },
};

const outerProductDiagrams = {
  intro: freeze(cellScenes, sceneIndex.intro),
  cell: freeze(cellScenes, sceneIndex.cell),
  row: freeze(rowScenes, sceneIndex.row),
  column: freeze(columnScenes, sceneIndex.column),
  done: freeze(cellScenes, sceneIndex.done),
};

export default outerProductDiagrams;
