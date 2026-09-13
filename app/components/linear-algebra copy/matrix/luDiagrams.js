// Frozen-state SVGs for the LU Decomposition tool (Line 1 anchor mesh).
//
// Built from LUWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Four stills come from the default preset
// ('classic': [[2,1,1],[4,3,3],[8,7,9]], no swaps), one from the 'pivoting'
// preset ([[0,1,2],[1,2,3],[2,5,9]]), whose zero (1,1) entry forces a swap:
//
//   intro     — A = L · U with L's known ones and zeros drawn, U a copy of A
//   pivot     — the first pivot marked in the working matrix
//   eliminate — the LAST elimination: ℓ32 into L, row 3 cleared, U triangular
//   swap      — the pivoting preset's row exchange, with A relabelled PA
//   done      — the completed factorization with the diagonal of U marked
//
// Scenes carry a `phase` field, so each still is found by phase rather than
// by index; the run length depends on the numbers.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './LUWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;
const SWAP = 'pivoting';

const mainScenes = buildScenes(PRESETS[MAIN].values);
const swapScenes = buildScenes(PRESETS[SWAP].values);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);
const lastOf = (scenes, phase) => {
  let idx = -1;
  scenes.forEach((sc, i) => { if (sc.phase === phase) idx = i; });
  return idx;
};

export const sceneIndex = {
  intro: firstOf(mainScenes, 'intro'),
  pivot: firstOf(mainScenes, 'pivot'),
  eliminate: lastOf(mainScenes, 'eliminate'),
  swap: firstOf(swapScenes, 'swap'),
  done: firstOf(mainScenes, 'done'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  swapPreset: SWAP,
  mainValues: PRESETS[MAIN].values,
  swapValues: PRESETS[SWAP].values,
  sceneCounts: { main: mainScenes.length, swap: swapScenes.length },
  titles: {
    intro: mainScenes[sceneIndex.intro].title,
    pivot: mainScenes[sceneIndex.pivot].title,
    eliminate: mainScenes[sceneIndex.eliminate].title,
    swap: sceneIndex.swap >= 0 ? swapScenes[sceneIndex.swap].title : null,
    done: mainScenes[sceneIndex.done].title,
  },
};

const luDiagrams = {
  intro: freeze(mainScenes, sceneIndex.intro),
  pivot: freeze(mainScenes, sceneIndex.pivot),
  eliminate: freeze(mainScenes, sceneIndex.eliminate),
  swap: sceneIndex.swap >= 0 ? freeze(swapScenes, sceneIndex.swap) : '',
  done: freeze(mainScenes, sceneIndex.done),
};

export default luDiagrams;
