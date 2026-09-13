// Frozen-state SVGs for the Matrix Inverse tool (Line 1 anchor mesh).
//
// Built from InverseWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Default is the component's n = 3, so the run is
// 1 intro + 9 cofactors + transpose + det + 9 divisions + 1 done = 22 scenes.
//
// Six stills:
//   intro     — A beside an empty cofactor grid
//   cofactor  — the centre cofactor C_{2,2}: row 2 and column 2 struck, the
//               2×2 minor highlighted, four cofactors already written
//   transpose — every cofactor moving to its mirrored position in adj A
//   det       — the first row of A against the first row of C, det A filled
//   divide    — the centre entry of A⁻¹ being formed from adj A and det A
//   done      — the completed inverse
//
// Arrows are not reproduced; the highlights and struck entries carry each state.

import { buildScenes, phaseKeyFor } from './InverseWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const N = 3;
const CENTRE = 1 * N + 1;   // 0-based row-major index of entry (2, 2)

const scenes = buildScenes(N);

export const sceneIndex = {
  intro: 0,
  cofactor: 1 + CENTRE,
  transpose: N * N + 1,
  det: N * N + 2,
  divide: N * N + 3 + CENTRE,
  done: scenes.length - 1,
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  n: N,
  sceneCount: scenes.length,
  phases: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, phaseKeyFor(i, N)])),
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])),
};

const inverseDiagrams = {
  intro: freeze(sceneIndex.intro),
  cofactor: freeze(sceneIndex.cofactor),
  transpose: freeze(sceneIndex.transpose),
  det: freeze(sceneIndex.det),
  divide: freeze(sceneIndex.divide),
  done: freeze(sceneIndex.done),
};

export default inverseDiagrams;
