// Frozen-state SVGs for the Least Squares tool (Line 1 anchor mesh).
//
// Built from LeastSquaresWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Five stills come from the default preset ('lineFit':
// points (0,6), (1,0), (2,0), x̂ = (5, −3)), one from 'oneColumn' and one from
// 'dependent':
//
//   consistency — [A | b] reduced: a pivot in the last column
//   normal      — Aᵀ·A = AᵀA and Aᵀ·b = Aᵀb
//   solve       — [AᵀA | Aᵀb] reduced to x̂
//   residual    — b − p = e and Aᵀe = 0
//   projmatrix  — P b = p
//   line        — the one-column preset's solve scene: x̂ = aᵀb / aᵀa
//   singular    — the dependent preset stopping at a singular AᵀA
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './LeastSquaresWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;

const build = (key) => buildScenes(PRESETS[key].values, PRESETS[key].b, PRESETS[key].fit);
const mainScenes = build(MAIN);
const lineScenes = build('oneColumn');
const depScenes = build('dependent');

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  consistency: firstOf(mainScenes, 'consistency'),
  normal: firstOf(mainScenes, 'normal'),
  solve: firstOf(mainScenes, 'solve'),
  residual: firstOf(mainScenes, 'residual'),
  projmatrix: firstOf(mainScenes, 'projmatrix'),
  line: firstOf(lineScenes, 'solve'),
  singular: firstOf(depScenes, 'singular'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  sceneCounts: { main: mainScenes.length, line: lineScenes.length, dependent: depScenes.length },
  titles: {
    consistency: mainScenes[sceneIndex.consistency].title,
    normal: mainScenes[sceneIndex.normal].title,
    solve: mainScenes[sceneIndex.solve].title,
    residual: mainScenes[sceneIndex.residual].title,
    projmatrix: mainScenes[sceneIndex.projmatrix].title,
    line: lineScenes[sceneIndex.line].title,
    singular: depScenes[sceneIndex.singular].title,
  },
};

const leastSquaresDiagrams = {
  consistency: freeze(mainScenes, sceneIndex.consistency),
  normal: freeze(mainScenes, sceneIndex.normal),
  solve: freeze(mainScenes, sceneIndex.solve),
  residual: freeze(mainScenes, sceneIndex.residual),
  projmatrix: freeze(mainScenes, sceneIndex.projmatrix),
  line: freeze(lineScenes, sceneIndex.line),
  singular: freeze(depScenes, sceneIndex.singular),
};

export default leastSquaresDiagrams;
