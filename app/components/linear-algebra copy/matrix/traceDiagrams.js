// Frozen-state SVGs for the Matrix Trace tool (Line 1 anchor mesh).
//
// TraceWrapper builds its steps with buildScenes(n) — a pure function returning
// declarative scenes (matrices + layout + per-cell highlight styles). This
// module calls that same function and renders the chosen scenes through
// frozenMatrixSvg, so the cells, colours and dimensions are the tool's own.
//
// n = 4 is the component's defaultN. With n = 4 the scene list is:
//   0        pose the question (no highlights)
//   1        reveal the main diagonal (all four cells primary)
//   2..5     sweep k = 0..3 (counted / current / pending)
//   6        complete (all four accent)
// The sweep is frozen at k = 1, the first step where all three sweep states are
// visible at once: one counted behind, one current, two still pending.

import { buildScenes } from './TraceWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const N = 4;
const SWEEP_K = 1;

const scenes = buildScenes(N);

const freeze = (i) => frozenMatrixSvg({
  matrices: scenes[i].matrices,
  layout: scenes[i].layout,
  highlights: scenes[i].highlights,
});

// scene indices for the four frozen phases, given n = 4
export const sceneIndex = {
  pose: 0,
  diagonal: 1,
  sweep: 2 + SWEEP_K,
  complete: scenes.length - 1,
};

export const meta = {
  n: N,
  sweepK: SWEEP_K,
  sceneCount: scenes.length,
  titles: Object.fromEntries(
    Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])
  ),
};

const traceDiagrams = {
  pose: freeze(sceneIndex.pose),
  diagonal: freeze(sceneIndex.diagonal),
  sweep: freeze(sceneIndex.sweep),
  complete: freeze(sceneIndex.complete),
};

export default traceDiagrams;
