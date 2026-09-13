// Frozen-state SVGs for the Span and Membership tool (Line 1 anchor mesh).
//
// Built from SpanMembershipWrapper's exported buildScenes and rendered
// through frozenMatrixSvgFixed. Three stills come from the default preset
// ('plane': v₁ = (1,0,1), v₂ = (0,1,1), w = (2,3,5) = 2v₁ + 3v₂), one from
// 'offPlane' and one from 'dependent':
//
//   rank       — V → rref: rank 2, a plane
//   membership — [V | w] reduced: consistent
//   coords     — V c = w with c = (2, 3)
//   notin      — the off-plane preset: a pivot in the last column
//   dependent  — the dependent preset's rank scene: v₃ = v₁ + v₂
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './SpanMembershipWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;

const build = (key) => buildScenes(PRESETS[key].vectors, PRESETS[key].w);
const mainScenes = build(MAIN);
const offScenes = build('offPlane');
const depScenes = build('dependent');

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  rank: firstOf(mainScenes, 'rank'),
  membership: firstOf(mainScenes, 'membership'),
  coords: firstOf(mainScenes, 'coords'),
  notin: firstOf(offScenes, 'membership'),
  dependent: firstOf(depScenes, 'rank'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  sceneCounts: { main: mainScenes.length, offPlane: offScenes.length, dependent: depScenes.length },
  titles: {
    rank: mainScenes[sceneIndex.rank].title,
    membership: mainScenes[sceneIndex.membership].title,
    coords: mainScenes[sceneIndex.coords].title,
    notin: offScenes[sceneIndex.notin].title,
    dependent: depScenes[sceneIndex.dependent].title,
  },
};

const spanMembershipDiagrams = {
  rank: freeze(mainScenes, sceneIndex.rank),
  membership: freeze(mainScenes, sceneIndex.membership),
  coords: freeze(mainScenes, sceneIndex.coords),
  notin: freeze(offScenes, sceneIndex.notin),
  dependent: freeze(depScenes, sceneIndex.dependent),
};

export default spanMembershipDiagrams;
