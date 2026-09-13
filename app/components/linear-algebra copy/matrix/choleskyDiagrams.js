// Frozen-state SVGs for the Cholesky Decomposition tool (Line 1 anchor mesh).
//
// Built from CholeskyWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Four stills come from the default preset
// ('classic': [[4,2,2],[2,5,3],[2,3,6]], whose factor is integer), one from
// the 'notPD' preset:
//
//   intro   — A = L · Lᵀ with the known zeros drawn, entries empty
//   diag    — the SECOND diagonal entry, ℓ22 = √(5 − 1²) = 2, with the
//             already-known entry of row 2 highlighted as the subtraction
//   offdiag — the LAST off-diagonal entry, ℓ32 = (3 − 1·1) / 2 = 1
//   notpd   — the not-positive-definite preset stopping at √(1 − 2²)
//   done    — L complete and Lᵀ mirrored
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './CholeskyWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;
const BAD = 'notPD';

const mainScenes = buildScenes(PRESETS[MAIN].values);
const badScenes = buildScenes(PRESETS[BAD].values);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);
const nthOf = (scenes, phase, k) => {
  let count = 0;
  for (let i = 0; i < scenes.length; i++) if (scenes[i].phase === phase) { if (count === k) return i; count++; }
  return -1;
};
const lastOf = (scenes, phase) => {
  let idx = -1;
  scenes.forEach((sc, i) => { if (sc.phase === phase) idx = i; });
  return idx;
};

export const sceneIndex = {
  intro: firstOf(mainScenes, 'intro'),
  diag: nthOf(mainScenes, 'diag', 1),
  offdiag: lastOf(mainScenes, 'offdiag'),
  notpd: firstOf(badScenes, 'notpd'),
  done: firstOf(mainScenes, 'done'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  badPreset: BAD,
  mainValues: PRESETS[MAIN].values,
  sceneCounts: { main: mainScenes.length, bad: badScenes.length },
  titles: {
    intro: mainScenes[sceneIndex.intro].title,
    diag: mainScenes[sceneIndex.diag].title,
    offdiag: mainScenes[sceneIndex.offdiag].title,
    notpd: badScenes[sceneIndex.notpd].title,
    done: mainScenes[sceneIndex.done].title,
  },
};

const choleskyDiagrams = {
  intro: freeze(mainScenes, sceneIndex.intro),
  diag: freeze(mainScenes, sceneIndex.diag),
  offdiag: freeze(mainScenes, sceneIndex.offdiag),
  notpd: freeze(badScenes, sceneIndex.notpd),
  done: freeze(mainScenes, sceneIndex.done),
};

export default choleskyDiagrams;
