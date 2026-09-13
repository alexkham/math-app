// Frozen-state SVGs for the Vector Magnitude tool (Line 1 anchor mesh).
//
// Built from MagnitudeWrapper's exported buildScenes and rendered through
// frozenMatrixSvg. Defaults are the component's: n = 3 and the 'unit'
// scenario, so the run is 1 intro + 3 squares + 1 root + 3 normalize + 1 done
// = 9 scenes.
//
// Five stills:
//   intro     — v, an empty row of squares, an empty ‖v‖ slot
//   square    — phase 1 frozen at its 2nd component
//   root      — phase 2: every square counted, ‖v‖ filled
//   normalize — phase 3 frozen at its 2nd component, the layout now
//               v ÷ ‖v‖ = v̂
//   done      — the unit vector complete
//
// frozenMatrixSvg does not reproduce arrows, so the stills rely on the cell
// highlights alone.

import { buildScenes, phaseKeyFor } from './MagnitudeWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const N = 3;
const SCENARIO = 'unit';
const STEP_IN_PHASE = 1;   // 0-based step within a sweep

const scenes = buildScenes(N, SCENARIO);

export const sceneIndex = {
  intro: 0,
  square: 1 + STEP_IN_PHASE,
  root: N + 1,
  normalize: N + 2 + STEP_IN_PHASE,
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

const magnitudeDiagrams = {
  intro: freeze(sceneIndex.intro),
  square: freeze(sceneIndex.square),
  root: freeze(sceneIndex.root),
  normalize: freeze(sceneIndex.normalize),
  done: freeze(sceneIndex.done),
};

export default magnitudeDiagrams;
