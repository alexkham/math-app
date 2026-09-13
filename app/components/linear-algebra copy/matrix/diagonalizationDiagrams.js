// Frozen-state SVGs for the Diagonalization tool (Line 1 anchor mesh).
//
// Built from DiagonalizationWrapper's exported buildScenes and rendered
// through frozenMatrixSvgFixed. Five stills come from the default preset
// ('twoByTwo': [[4,1],[2,3]], eigenvalues 5 and 2, P = [[1,1],[1,−2]]),
// one from 'defective' and one from 'markov':
//
//   eigvecs   — A → eigenvalues and the eigenvector matrix
//   assemble  — P and D side by side
//   inverse   — P → P⁻¹
//   factor    — A = P · D · P⁻¹
//   power     — A³ = P · D³ · P⁻¹
//   defective — the shear: one eigenvector, no diagonalization
//   markov    — the Markov preset's A⁸ ≈ steady state (power 8)
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET, DEFAULT_POWER } from './DiagonalizationWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;
const MARKOV_POWER = 8;

const mainScenes = buildScenes(PRESETS[MAIN].values, DEFAULT_POWER);
const defectiveScenes = buildScenes(PRESETS.defective.values, DEFAULT_POWER);
const markovScenes = buildScenes(PRESETS.markov.values, MARKOV_POWER);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  eigvecs: firstOf(mainScenes, 'eigvecs'),
  assemble: firstOf(mainScenes, 'assemble'),
  inverse: firstOf(mainScenes, 'inverse'),
  factor: firstOf(mainScenes, 'factor'),
  power: firstOf(mainScenes, 'power'),
  defective: firstOf(defectiveScenes, 'defective'),
  markov: firstOf(markovScenes, 'power'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  markovPower: MARKOV_POWER,
  sceneCounts: { main: mainScenes.length, defective: defectiveScenes.length, markov: markovScenes.length },
  titles: {
    eigvecs: mainScenes[sceneIndex.eigvecs].title,
    assemble: mainScenes[sceneIndex.assemble].title,
    inverse: mainScenes[sceneIndex.inverse].title,
    factor: mainScenes[sceneIndex.factor].title,
    power: mainScenes[sceneIndex.power].title,
    defective: defectiveScenes[sceneIndex.defective].title,
    markov: markovScenes[sceneIndex.markov].title,
  },
};

const diagonalizationDiagrams = {
  eigvecs: freeze(mainScenes, sceneIndex.eigvecs),
  assemble: freeze(mainScenes, sceneIndex.assemble),
  inverse: freeze(mainScenes, sceneIndex.inverse),
  factor: freeze(mainScenes, sceneIndex.factor),
  power: freeze(mainScenes, sceneIndex.power),
  defective: freeze(defectiveScenes, sceneIndex.defective),
  markov: freeze(markovScenes, sceneIndex.markov),
};

export default diagonalizationDiagrams;
