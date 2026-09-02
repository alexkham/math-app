// Frozen-state SVGs for the Matrix Linear Combination tool (Line 1 anchor mesh).
//
// LinearCombinationWrapper builds its steps with buildMatrixScenes(rows, cols)
// — exported additively — so this module calls that same function and renders
// the chosen scenes through frozenMatrixSvg.
//
// Defaults are the component's: 2 rows x 3 cols, so 6 cells and a run of
// 1 intro + 3 sweeps of 6 + 1 done = 20 scenes. The three sweeps are phase 1
// (scale A by alpha), phase 2 (scale B by beta) and phase 3 (add the two).
// Each phase is frozen at its 4th step, far enough in that completed cells,
// the active cell and untouched cells are all visible at once.

import { buildMatrixScenes } from './LinearCombinationWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const ROWS = 2, COLS = 3;
const CELLS = ROWS * COLS;
const STEP_IN_PHASE = 3;   // 0-based step within each sweep

const scenes = buildMatrixScenes(ROWS, COLS);

export const sceneIndex = {
  intro: 0,
  scaleA: 1 + STEP_IN_PHASE,
  scaleB: 1 + CELLS + STEP_IN_PHASE,
  add: 1 + 2 * CELLS + STEP_IN_PHASE,
  done: scenes.length - 1,
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  rows: ROWS,
  cols: COLS,
  cells: CELLS,
  sceneCount: scenes.length,
  stepInPhase: STEP_IN_PHASE + 1,
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])),
};

const matrixLinCombDiagrams = {
  intro: freeze(sceneIndex.intro),
  scaleA: freeze(sceneIndex.scaleA),
  scaleB: freeze(sceneIndex.scaleB),
  add: freeze(sceneIndex.add),
};

export default matrixLinCombDiagrams;
