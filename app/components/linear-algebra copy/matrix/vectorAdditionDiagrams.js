// Frozen-state SVGs for the Vector Addition tool (Line 1 anchor mesh).
//
// Same component as matrix-addition — AdditionWrapper — driven with
// mode='vectors', so the scenes come from buildVectorScenes(n, operation)
// rather than buildMatrixScenes. Both builders are exported additively, and
// the frozen scenes render through frozenMatrixSvg: a vector is simply a
// one-row matrix as far as the renderer is concerned.
//
// Defaults are the component's: defaultVecN = 4, operation 'add'. At that
// length the scene list is 1 intro + 4 component steps + 1 done = 6. The step
// state is frozen at component 3 of 4, where filled slots, the active pair and
// a remaining placeholder are all visible; the subtraction state is frozen at
// the same position so the two units compare directly.

import { buildVectorScenes } from './AdditionWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const N = 4;
const STEP_J = 2;   // 0-based component index within the sweep

const add = buildVectorScenes(N, 'add');
const sub = buildVectorScenes(N, 'subtract');

export const sceneIndex = {
  intro: 0,
  step: 1 + STEP_J,
  done: add.length - 1,
  subtract: 1 + STEP_J,
};

const freeze = (list, i) => {
  const sc = list[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  n: N,
  sceneCount: add.length,
  stepComponent: STEP_J + 1,
  titles: {
    intro: add[sceneIndex.intro].title,
    step: add[sceneIndex.step].title,
    done: add[sceneIndex.done].title,
    subtract: sub[sceneIndex.subtract].title,
  },
};

const vectorAdditionDiagrams = {
  intro: freeze(add, sceneIndex.intro),
  step: freeze(add, sceneIndex.step),
  done: freeze(add, sceneIndex.done),
  subtract: freeze(sub, sceneIndex.subtract),
};

export default vectorAdditionDiagrams;
