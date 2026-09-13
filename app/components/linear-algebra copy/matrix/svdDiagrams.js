// Frozen-state SVGs for the Singular Value Decomposition tool (Line 1
// anchor mesh).
//
// Built from SVDWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Five stills come from the default preset
// ('classic': [[3,0],[4,5]], σ = √45 and √5), one from 'tall' (completing
// U) and one from 'rankOne' (a single term):
//
//   gram     — Aᵀ · A = AᵀA
//   eigen    — AᵀA → λ → σ = √λ
//   uvec     — the FIRST u: A v₁ = σ₁ u₁
//   factor   — A = U · Σ · Vᵀ
//   rankone  — A = √45 u₁v₁ᵀ + √5 u₂v₂ᵀ
//   complete — the tall preset's third column of U
//   single   — the rank-one preset's one-term expansion
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './SVDWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;

const mainScenes = buildScenes(PRESETS[MAIN].values);
const tallScenes = buildScenes(PRESETS.tall.values);
const rankOneScenes = buildScenes(PRESETS.rankOne.values);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  gram: firstOf(mainScenes, 'gram'),
  eigen: firstOf(mainScenes, 'eigen'),
  uvec: firstOf(mainScenes, 'uvec'),
  factor: firstOf(mainScenes, 'factor'),
  rankone: firstOf(mainScenes, 'rankone'),
  complete: firstOf(tallScenes, 'complete'),
  single: firstOf(rankOneScenes, 'rankone'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  sceneCounts: { main: mainScenes.length, tall: tallScenes.length, rankOne: rankOneScenes.length },
  titles: {
    gram: mainScenes[sceneIndex.gram].title,
    eigen: mainScenes[sceneIndex.eigen].title,
    uvec: mainScenes[sceneIndex.uvec].title,
    factor: mainScenes[sceneIndex.factor].title,
    rankone: mainScenes[sceneIndex.rankone].title,
    complete: tallScenes[sceneIndex.complete].title,
    single: rankOneScenes[sceneIndex.single].title,
  },
};

const svdDiagrams = {
  gram: freeze(mainScenes, sceneIndex.gram),
  eigen: freeze(mainScenes, sceneIndex.eigen),
  uvec: freeze(mainScenes, sceneIndex.uvec),
  factor: freeze(mainScenes, sceneIndex.factor),
  rankone: freeze(mainScenes, sceneIndex.rankone),
  complete: freeze(tallScenes, sceneIndex.complete),
  single: freeze(rankOneScenes, sceneIndex.single),
};

export default svdDiagrams;
