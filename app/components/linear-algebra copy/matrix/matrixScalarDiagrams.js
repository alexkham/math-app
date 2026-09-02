// Frozen-state SVGs for the Matrix Scalar Multiplication tool (Line 1 anchor mesh).
//
// ScalarMultiplicationWrapper builds its steps with buildMatrixScenes(rows, cols)
// — exported additively — so this module calls that same function and renders
// the chosen scenes through frozenMatrixSvg.
//
// Defaults are the component's: 2 rows x 3 cols. At that size the scene list is
// 1 intro + 6 cell steps + 1 done = 8. The step state is frozen at cell 4 of 6,
// where filled cells, the active cell and remaining placeholders are all on
// screen together.
//
// The filled cells of C carry JSX displays (k times a1,1, with real subscripts),
// which frozenMatrixSvg walks. The cell-to-cell arrow is an overlay and is not
// reproduced; the shared highlight on source and destination carries it.

import { buildMatrixScenes } from './ScalarMultiplicationWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const ROWS = 2, COLS = 3;
const STEP_CELL = 3;   // 0-based cell index within the sweep

const scenes = buildMatrixScenes(ROWS, COLS);

export const sceneIndex = {
  intro: 0,
  step: 1 + STEP_CELL,
  done: scenes.length - 1,
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  rows: ROWS,
  cols: COLS,
  cells: ROWS * COLS,
  sceneCount: scenes.length,
  stepCell: STEP_CELL + 1,
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])),
};

const matrixScalarDiagrams = {
  intro: freeze(sceneIndex.intro),
  step: freeze(sceneIndex.step),
  done: freeze(sceneIndex.done),
};

export default matrixScalarDiagrams;
