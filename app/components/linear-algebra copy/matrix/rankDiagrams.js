// Frozen-state SVGs for the Matrix Rank tool (Line 1 anchor mesh).
//
// Built from RankWrapper's exported buildScenes on the default preset
// ('deficient': [[1,2,3],[2,4,6],[1,0,1]], rank 2) and rendered through
// frozenMatrixSvgFixed. That preset exercises every branch in one run:
//
//   intro → pivot (col 1) → eliminate R2 → eliminate R3 → swap R2↔R3
//         → pivot (col 2) → skip (col 3) → done
//
// Scenes carry a `phase` field, so each still is the FIRST scene of its
// phase rather than a fixed index; the run length depends on the numbers.
//
// Arrows are not used by this tool; row and cell highlights carry each state.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './RankWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const PRESET = DEFAULT_PRESET;
const scenes = buildScenes(PRESETS[PRESET].values);

const firstOf = (phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  intro: firstOf('intro'),
  pivot: firstOf('pivot'),
  eliminate: firstOf('eliminate'),
  swap: firstOf('swap'),
  skip: firstOf('skip'),
  done: firstOf('done'),
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  preset: PRESET,
  values: PRESETS[PRESET].values,
  sceneCount: scenes.length,
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, i >= 0 ? scenes[i].title : null])),
};

const rankDiagrams = Object.fromEntries(
  Object.entries(sceneIndex).map(([k, i]) => [k, i >= 0 ? freeze(i) : ''])
);

export default rankDiagrams;
