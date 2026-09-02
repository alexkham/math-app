// Frozen-state SVGs for the Vector Linear Combination tool (Line 1 anchor mesh).
//
// Same component as matrix-linear-combination — LinearCombinationWrapper —
// driven with mode='vectors', so the scenes come from buildVectorScenes(n).
// Both builders are exported additively and the scenes render through
// frozenMatrixSvg.
//
// Defaults are the component's: defaultVecN = 4, so 4 components and a run of
// 1 intro + 3 sweeps of 4 + 1 done = 14 scenes. The three sweeps are phase 1
// (scale u by alpha), phase 2 (scale v by beta) and phase 3 (add the two).
// Each phase is frozen at its 3rd step, where completed slots, the active slot
// and untouched slots are all visible together.

import { buildVectorScenes } from './LinearCombinationWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const N = 4;
const STEP_IN_PHASE = 2;   // 0-based step within each sweep

const scenes = buildVectorScenes(N);

export const sceneIndex = {
  intro: 0,
  scaleA: 1 + STEP_IN_PHASE,
  scaleB: 1 + N + STEP_IN_PHASE,
  add: 1 + 2 * N + STEP_IN_PHASE,
  done: scenes.length - 1,
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  n: N,
  sceneCount: scenes.length,
  stepInPhase: STEP_IN_PHASE + 1,
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])),
};

const vectorLinCombDiagrams = {
  intro: freeze(sceneIndex.intro),
  scaleA: freeze(sceneIndex.scaleA),
  scaleB: freeze(sceneIndex.scaleB),
  add: freeze(sceneIndex.add),
};

export default vectorLinCombDiagrams;
