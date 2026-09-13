// Frozen-state SVGs for the Vector Projection tool (Line 1 anchor mesh).
//
// Built from ProjectionWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed (frozenMatrixSvg with the subscript baseline repair).
// Defaults are the component's: n = 3 and the 'decomposition' scenario, so
// the run is 1 intro + 3 pairs + dot + ‖v‖² + c + 3 scale + 3 remainder + 1
// done = 14 scenes.
//
// Five stills:
//   intro     — u, v as rows and an empty u · v slot
//   pair      — phase 1 frozen at its 2nd pair, the slot still pending
//   coeff     — phase 4: u · v and ‖v‖² dividing into c
//   scale     — phase 5 frozen at its 2nd component, c · v filling proj
//   remainder — phase 6 frozen at its 2nd component, u − proj filling
//
// Arrows are not reproduced; the cell highlights carry each state.

import { buildScenes, phaseKeyFor } from './ProjectionWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const N = 3;
const SCENARIO = 'decomposition';
const STEP_IN_PHASE = 1;   // 0-based step within a sweep

const scenes = buildScenes(N, SCENARIO);

export const sceneIndex = {
  intro: 0,
  pair: 1 + STEP_IN_PHASE,
  coeff: N + 3,
  scale: N + 4 + STEP_IN_PHASE,
  remainder: 2 * N + 4 + STEP_IN_PHASE,
  done: scenes.length - 1,
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  n: N,
  scenario: SCENARIO,
  sceneCount: scenes.length,
  stepInPhase: STEP_IN_PHASE + 1,
  phases: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, phaseKeyFor(i, N, SCENARIO)])),
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])),
};

const projectionDiagrams = {
  intro: freeze(sceneIndex.intro),
  pair: freeze(sceneIndex.pair),
  coeff: freeze(sceneIndex.coeff),
  scale: freeze(sceneIndex.scale),
  remainder: freeze(sceneIndex.remainder),
};

export default projectionDiagrams;
