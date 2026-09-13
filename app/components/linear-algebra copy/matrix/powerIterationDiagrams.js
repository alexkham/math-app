// Frozen-state SVGs for the Power Iteration tool (Line 1 anchor mesh).
//
// Built from PowerIterationWrapper's exported buildScenes and rendered
// through frozenMatrixSvgFixed. Four stills come from the default preset
// ('classic': [[4,1],[2,3]], x₀ = (1,0), eigenvalues 5 and 2), one from
// 'slow' and one from 'tie':
//
//   intro — A beside x₀
//   step1 — A x₀ = (4, 2) → x₁ = (1, 0.5), estimate 4
//   step3 — the third step, estimate 4.7778
//   done  — x₆ beside the exact eigenvector (1, 1)
//   slow  — the 'slow' preset's sixth step, still far from 10
//   tie   — the 'tie' preset's verdict: no convergence
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET, DEFAULT_ITERATIONS } from './PowerIterationWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;

const build = (key) => buildScenes(PRESETS[key].values, PRESETS[key].start, DEFAULT_ITERATIONS);
const mainScenes = build(MAIN);
const slowScenes = build('slow');
const tieScenes = build('tie');

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
  step1: nthOf(mainScenes, 'iterate', 0),
  step3: nthOf(mainScenes, 'iterate', 2),
  done: firstOf(mainScenes, 'done'),
  slow: lastOf(slowScenes, 'iterate'),
  tie: firstOf(tieScenes, 'done'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  iterations: DEFAULT_ITERATIONS,
  sceneCounts: { main: mainScenes.length, slow: slowScenes.length, tie: tieScenes.length },
  titles: {
    intro: mainScenes[sceneIndex.intro].title,
    step1: mainScenes[sceneIndex.step1].title,
    step3: mainScenes[sceneIndex.step3].title,
    done: mainScenes[sceneIndex.done].title,
    slow: slowScenes[sceneIndex.slow].title,
    tie: tieScenes[sceneIndex.tie].title,
  },
};

const powerIterationDiagrams = {
  intro: freeze(mainScenes, sceneIndex.intro),
  step1: freeze(mainScenes, sceneIndex.step1),
  step3: freeze(mainScenes, sceneIndex.step3),
  done: freeze(mainScenes, sceneIndex.done),
  slow: freeze(slowScenes, sceneIndex.slow),
  tie: freeze(tieScenes, sceneIndex.tie),
};

export default powerIterationDiagrams;
