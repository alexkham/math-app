// Frozen-state SVGs for the Four Fundamental Subspaces tool (Line 1 anchor
// mesh).
//
// Built from SubspacesWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. All stills come from the default preset ('rank2':
// [[1,2,1],[2,4,3],[3,6,4]], rank 2, every subspace non-trivial), except
// 'trivial', which is the invertible preset's null-space scene:
//
//   rref      — A → R with pivots and the free column
//   colspace  — the pivot columns of A as a basis of C(A)
//   rowspace  — the non-zero rows of R as a basis of C(Aᵀ)
//   nullspace — R → the special solution, and A N = 0
//   leftnull  — Aᵀ → rref(Aᵀ) → the left-null vector, and Aᵀ L = 0
//   orth      — rows · N = 0 and C(A)ᵀ · L = 0
//   trivial   — the invertible preset: null space {0}
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './SubspacesWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;

const mainScenes = buildScenes(PRESETS[MAIN].values);
const invScenes = buildScenes(PRESETS.invertible.values);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  rref: firstOf(mainScenes, 'rref'),
  colspace: firstOf(mainScenes, 'colspace'),
  rowspace: firstOf(mainScenes, 'rowspace'),
  nullspace: firstOf(mainScenes, 'nullspace'),
  leftnull: firstOf(mainScenes, 'leftnull'),
  orth: firstOf(mainScenes, 'orth'),
  trivial: firstOf(invScenes, 'nullspace'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  sceneCounts: { main: mainScenes.length, invertible: invScenes.length },
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, (k === 'trivial' ? invScenes : mainScenes)[i].title])),
};

const subspacesDiagrams = {
  rref: freeze(mainScenes, sceneIndex.rref),
  colspace: freeze(mainScenes, sceneIndex.colspace),
  rowspace: freeze(mainScenes, sceneIndex.rowspace),
  nullspace: freeze(mainScenes, sceneIndex.nullspace),
  leftnull: freeze(mainScenes, sceneIndex.leftnull),
  orth: freeze(mainScenes, sceneIndex.orth),
  trivial: freeze(invScenes, sceneIndex.trivial),
};

export default subspacesDiagrams;
