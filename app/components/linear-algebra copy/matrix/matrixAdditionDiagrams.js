// Frozen-state SVGs for the Matrix Addition tool (Line 1 anchor mesh).
//
// AdditionWrapper builds its steps with buildMatrixScenes(rows, cols, operation)
// — exported additively — so this module calls that same function and renders
// the chosen scenes through frozenMatrixSvg. Cells, placeholders, labels and
// dimensions are therefore the tool's own.
//
// Defaults are the component's: 2 rows x 3 cols, operation 'add'. At that size
// the scene list is 1 intro + 6 cell steps + 1 done = 8. The step state is
// frozen at cell 4 of 6, far enough in that filled cells, the active pair and
// remaining placeholders are all on screen at once; the subtraction state is
// frozen at the same position so the two can be compared directly.
//
// The composite cells of C carry JSX displays ("a1,1 + b1,1" with real
// subscripts) rather than plain strings; frozenMatrixSvg walks those element
// trees. The curved cell-to-cell arrows are overlays and are not reproduced —
// the shared highlight colour on the three cells carries the pairing.

import { buildMatrixScenes } from './AdditionWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const ROWS = 2, COLS = 3;
const STEP_CELL = 4;   // 0-based cell index within the sweep

const add = buildMatrixScenes(ROWS, COLS, 'add');
const sub = buildMatrixScenes(ROWS, COLS, 'subtract');

export const sceneIndex = {
  intro: 0,
  step: 1 + STEP_CELL,
  done: add.length - 1,
  subtract: 1 + STEP_CELL,
};

const freeze = (list, i) => {
  const sc = list[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  rows: ROWS,
  cols: COLS,
  cells: ROWS * COLS,
  sceneCount: add.length,
  stepCell: STEP_CELL + 1,
  titles: {
    intro: add[sceneIndex.intro].title,
    step: add[sceneIndex.step].title,
    done: add[sceneIndex.done].title,
    subtract: sub[sceneIndex.subtract].title,
  },
};

const matrixAdditionDiagrams = {
  intro: freeze(add, sceneIndex.intro),
  step: freeze(add, sceneIndex.step),
  done: freeze(add, sceneIndex.done),
  subtract: freeze(sub, sceneIndex.subtract),
};

export default matrixAdditionDiagrams;
