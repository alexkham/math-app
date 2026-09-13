// Frozen-state SVGs for the Gaussian Elimination tool (Line 1 anchor mesh).
//
// Built from GaussEliminationWrapper's exported buildScenes and rendered
// through frozenMatrixSvgFixed. Unlike the sibling tools this one needs
// four runs, because no single run reaches every phase:
//
//   REF  on 'swapFirst'    → intro, swap, pivot, eliminate, refDone
//   RREF on 'swapFirst'    → scale, eliminateAbove, rrefDone
//   REF  on 'freeVar'      → skip
//   REF  on 'inconsistent' → noSolution
//
// The first two are the same matrix under both target forms, which is the
// point of the page: the stills sit side by side and the extra Gauss-Jordan
// work is visible as the scenes the plain run never produces.
//
// Scenes carry a `phase` field, so each still is the FIRST scene of its
// phase rather than a fixed index; the run length depends on the numbers.
//
// Arrows are not used by this tool; row and cell highlights carry each state.

import { buildScenes, PRESETS } from './GaussEliminationWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const run = (key, mode) => buildScenes(PRESETS[key].A, PRESETS[key].b, mode);

const refRun = run('swapFirst', 'ref');
const rrefRun = run('swapFirst', 'rref');
const freeRun = run('freeVar', 'ref');
const badRun = run('inconsistent', 'ref');

// [run, phase, whichOccurrence] — 'last' picks the final scene of that
// phase, used for the two terminal stills.
const SOURCES = {
  intro:          [refRun,  'intro'],
  swap:           [refRun,  'swap'],
  pivot:          [refRun,  'pivot'],
  eliminate:      [refRun,  'eliminate'],
  refDone:        [refRun,  'done'],
  scale:          [rrefRun, 'scale'],
  eliminateAbove: [rrefRun, 'eliminateAbove'],
  rrefDone:       [rrefRun, 'done'],
  skip:           [freeRun, 'skip'],
  noSolution:     [badRun,  'done'],
};

const pick = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = Object.fromEntries(
  Object.entries(SOURCES).map(([k, [scenes, phase]]) => [k, pick(scenes, phase)])
);

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  runLengths: {
    refSwapFirst: refRun.length,
    rrefSwapFirst: rrefRun.length,
    refFreeVar: freeRun.length,
    refInconsistent: badRun.length,
  },
  titles: Object.fromEntries(
    Object.entries(SOURCES).map(([k, [scenes, phase]]) => {
      const i = pick(scenes, phase);
      return [k, i >= 0 ? scenes[i].title : null];
    })
  ),
};

const gaussDiagrams = Object.fromEntries(
  Object.entries(SOURCES).map(([k, [scenes, phase]]) => {
    const i = pick(scenes, phase);
    return [k, i >= 0 ? freeze(scenes, i) : ''];
  })
);

export default gaussDiagrams;
