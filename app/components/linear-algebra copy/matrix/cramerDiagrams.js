// Frozen-state SVGs for the Cramer's Rule tool (Line 1 anchor mesh).
//
// Built from CramerWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Four stills come from the default preset ('three':
// a 3×3 system with solution (1, 2, 3)), one from the 'singular' preset:
//
//   intro    — A x = b with x still symbolic
//   det      — det A evaluated and highlighted
//   replace  — the SECOND unknown: A₂ with b in its middle column, det A₂
//              divided by det A giving x₂
//   singular — the singular preset's stop scene, det A = 0
//   done     — the solution vector in place, A x = b
//
// Arrows are not reproduced; the highlights carry each state. The live tool
// draws bars around A_i; the shared freezer draws square brackets.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './CramerWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;
const SING = 'singular';

const mainScenes = buildScenes(PRESETS[MAIN].A, PRESETS[MAIN].b);
const singScenes = buildScenes(PRESETS[SING].A, PRESETS[SING].b);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  intro: firstOf(mainScenes, 'intro'),
  det: firstOf(mainScenes, 'det'),
  replace: firstOf(mainScenes, 'replace') + 1,
  singular: firstOf(singScenes, 'singular'),
  done: firstOf(mainScenes, 'done'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  singularPreset: SING,
  sceneCounts: { main: mainScenes.length, singular: singScenes.length },
  titles: {
    intro: mainScenes[sceneIndex.intro].title,
    det: mainScenes[sceneIndex.det].title,
    replace: mainScenes[sceneIndex.replace].title,
    singular: singScenes[sceneIndex.singular].title,
    done: mainScenes[sceneIndex.done].title,
  },
};

const cramerDiagrams = {
  intro: freeze(mainScenes, sceneIndex.intro),
  det: freeze(mainScenes, sceneIndex.det),
  replace: freeze(mainScenes, sceneIndex.replace),
  singular: freeze(singScenes, sceneIndex.singular),
  done: freeze(mainScenes, sceneIndex.done),
};

export default cramerDiagrams;
