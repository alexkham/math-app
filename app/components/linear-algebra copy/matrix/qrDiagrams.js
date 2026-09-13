// Frozen-state SVGs for the QR Decomposition tool (Line 1 anchor mesh).
//
// Built from QRWrapper's exported buildScenes at the component's defaults, a
// 3×3 matrix A, and rendered through frozenMatrixSvgFixed. The run is:
// intro, start u1, norm (r11, q1), start u2, coef r12, subtract, norm, start
// u3, coef r13, subtract, coef r23, subtract, norm, done = 14 scenes.
//
// Five stills, found by phase since the run length depends on k:
//   intro    — A = Q · R with Q empty and R showing only its zeros
//   coef     — the LAST coef scene, r23 = q2 · a3, both earlier columns done
//   subtract — the LAST subtract scene, column 3 of Q with both terms removed
//   norm     — the LAST norm scene, r33 and q3
//   done     — A = QR complete
//
// Arrows are not reproduced; the column and cell highlights carry each state.

import { buildScenes } from './QRWrapper';
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
  coef: lastOf('coef'),
  subtract: lastOf('subtract'),
  norm: lastOf('norm'),
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

const qrDiagrams = Object.fromEntries(
  Object.entries(sceneIndex).map(([key, i]) => [key, freeze(i)])
);

export default qrDiagrams;
