// Frozen-state SVGs for the Solution Sets tool (Line 1 anchor mesh).
//
// Built from LinearSystemWrapper's exported buildScenes on three presets and
// rendered through frozenMatrixSvgFixed:
//
//   intro     — 'unique' preset: [A | b] before any row operation
//   eliminate — 'unique' preset: the first forward elimination
//   backelim  — 'unique' preset: the first backward elimination
//   unique    — 'unique' preset: reduced form with the solution read off
//   none      — 'none' preset: the inconsistent row 0 = 1
//   infinite  — 'infinite' preset: reduced form with p and the direction v₁
//
// Scenes carry a `phase` field, so each still is found by phase; the run
// length depends on the numbers.

import { buildScenes, PRESETS } from './LinearSystemWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const build = (key) => buildScenes(PRESETS[key].A, PRESETS[key].b);

const uniqueScenes = build('unique');
const noneScenes = build('none');
const infiniteScenes = build('infinite');

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  intro: firstOf(uniqueScenes, 'intro'),
  eliminate: firstOf(uniqueScenes, 'eliminate'),
  backelim: firstOf(uniqueScenes, 'backelim'),
  unique: firstOf(uniqueScenes, 'unique'),
  none: firstOf(noneScenes, 'inconsistent'),
  infinite: firstOf(infiniteScenes, 'infinite'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  presets: { unique: PRESETS.unique, none: PRESETS.none, infinite: PRESETS.infinite },
  sceneCounts: { unique: uniqueScenes.length, none: noneScenes.length, infinite: infiniteScenes.length },
  titles: {
    intro: uniqueScenes[sceneIndex.intro].title,
    eliminate: uniqueScenes[sceneIndex.eliminate].title,
    backelim: uniqueScenes[sceneIndex.backelim].title,
    unique: uniqueScenes[sceneIndex.unique].title,
    none: noneScenes[sceneIndex.none].title,
    infinite: infiniteScenes[sceneIndex.infinite].title,
  },
};

const linearSystemDiagrams = {
  intro: freeze(uniqueScenes, sceneIndex.intro),
  eliminate: freeze(uniqueScenes, sceneIndex.eliminate),
  backelim: freeze(uniqueScenes, sceneIndex.backelim),
  unique: freeze(uniqueScenes, sceneIndex.unique),
  none: freeze(noneScenes, sceneIndex.none),
  infinite: freeze(infiniteScenes, sceneIndex.infinite),
};

export default linearSystemDiagrams;
