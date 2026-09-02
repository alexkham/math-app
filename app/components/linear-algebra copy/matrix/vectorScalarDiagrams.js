// Frozen-state SVGs for the Vector Scalar Multiplication tool (Line 1 anchor mesh).
//
// Same component as matrix-scalar-multiplication — ScalarMultiplicationWrapper
// — driven with mode='vectors', so the scenes come from buildVectorScenes(n).
// Both builders are exported additively, and the frozen scenes render through
// frozenMatrixSvg.
//
// Defaults are the component's: defaultVecN = 4. At that length the scene list
// is 1 intro + 4 component steps + 1 done = 6. The step state is frozen at
// component 3 of 4, where filled slots, the active slot and a remaining
// placeholder are all visible together.

import { buildVectorScenes } from './ScalarMultiplicationWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const N = 4;
const STEP_J = 2;   // 0-based component index within the sweep

const scenes = buildVectorScenes(N);

export const sceneIndex = {
  intro: 0,
  step: 1 + STEP_J,
  done: scenes.length - 1,
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  n: N,
  sceneCount: scenes.length,
  stepComponent: STEP_J + 1,
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])),
};

const vectorScalarDiagrams = {
  intro: freeze(sceneIndex.intro),
  step: freeze(sceneIndex.step),
  done: freeze(sceneIndex.done),
};

export default vectorScalarDiagrams;
