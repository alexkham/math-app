// Frozen-state SVGs for the Spectral Decomposition tool (Line 1 anchor mesh).
//
// Built from SpectralWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Four stills come from the default preset
// ('twoByTwo': [[2,1],[1,2]], eigenvalues 3 and 1, q = (1,1)/√2, (1,−1)/√2),
// one from 'repeated' (Gram–Schmidt inside the λ = 1 plane), one from
// 'projection' (a single rank-one term) and one from 'notSymmetric':
//
//   normalize  — integer eigenvectors → unit columns of Q, with Λ
//   orthocheck — Qᵀ Q = I
//   factor     — A = Q · Λ · Qᵀ
//   rankone    — A = 3 q₁q₁ᵀ + 1 q₂q₂ᵀ
//   gram       — the repeated preset's Gram–Schmidt scene
//   projection — the projection preset's rank-one scene (one term)
//   notsym     — the shear stopping at the symmetry check
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './SpectralWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;

const mainScenes = buildScenes(PRESETS[MAIN].values);
const repeatedScenes = buildScenes(PRESETS.repeated.values);
const projectionScenes = buildScenes(PRESETS.projection.values);
const notSymScenes = buildScenes(PRESETS.notSymmetric.values);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  normalize: firstOf(mainScenes, 'normalize'),
  orthocheck: firstOf(mainScenes, 'orthocheck'),
  factor: firstOf(mainScenes, 'factor'),
  rankone: firstOf(mainScenes, 'rankone'),
  gram: firstOf(repeatedScenes, 'orthogonalize'),
  projection: firstOf(projectionScenes, 'rankone'),
  notsym: firstOf(notSymScenes, 'notsym'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  sceneCounts: { main: mainScenes.length, repeated: repeatedScenes.length, projection: projectionScenes.length, notsym: notSymScenes.length },
  titles: {
    normalize: mainScenes[sceneIndex.normalize].title,
    orthocheck: mainScenes[sceneIndex.orthocheck].title,
    factor: mainScenes[sceneIndex.factor].title,
    rankone: mainScenes[sceneIndex.rankone].title,
    gram: repeatedScenes[sceneIndex.gram].title,
    projection: projectionScenes[sceneIndex.projection].title,
    notsym: notSymScenes[sceneIndex.notsym].title,
  },
};

const spectralDiagrams = {
  normalize: freeze(mainScenes, sceneIndex.normalize),
  orthocheck: freeze(mainScenes, sceneIndex.orthocheck),
  factor: freeze(mainScenes, sceneIndex.factor),
  rankone: freeze(mainScenes, sceneIndex.rankone),
  gram: freeze(repeatedScenes, sceneIndex.gram),
  projection: freeze(projectionScenes, sceneIndex.projection),
  notsym: freeze(notSymScenes, sceneIndex.notsym),
};

export default spectralDiagrams;
