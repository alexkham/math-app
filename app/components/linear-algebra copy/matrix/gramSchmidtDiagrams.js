// Frozen-state SVGs for the Gram–Schmidt tool (Line 1 anchor mesh).
//
// Built from GramSchmidtWrapper's exported buildScenes at the component's
// defaults, k = 3 vectors in R^3, and rendered through frozenMatrixSvgFixed.
// The run is: intro, keep (u1), start u2, subtract (u2 − c21 u1), start u3,
// subtract (u3 − c31 u1), subtract (u3 − c32 u2), normalize ×3, done = 11.
//
// Five stills, found by phase since the run length depends on k:
//   intro     — V beside an empty U
//   keep      — u1 = v1 copied across
//   subtract  — the LAST subtract scene: u3 with both projections removed,
//               the fullest expression the tool writes
//   normalize — the first normalization, e1 = u1 / ‖u1‖
//   done      — the orthonormal set complete
//
// Arrows are not reproduced; the row highlights carry each state.

import { buildScenes } from './GramSchmidtWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const K = 3;
const N = 3;

const scenes = buildScenes(K, N);

const firstOf = (phase) => scenes.findIndex((sc) => sc.phase === phase);
const lastOf = (phase) => {
  let idx = -1;
  scenes.forEach((sc, i) => { if (sc.phase === phase) idx = i; });
  return idx;
};

export const sceneIndex = {
  intro: firstOf('intro'),
  keep: firstOf('keep'),
  subtract: lastOf('subtract'),
  normalize: firstOf('normalize'),
  done: firstOf('done'),
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  k: K,
  n: N,
  sceneCount: scenes.length,
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([key, i]) => [key, scenes[i].title])),
};

const gramSchmidtDiagrams = Object.fromEntries(
  Object.entries(sceneIndex).map(([key, i]) => [key, freeze(i)])
);

export default gramSchmidtDiagrams;
