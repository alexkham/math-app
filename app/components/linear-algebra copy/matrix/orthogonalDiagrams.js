// Frozen-state SVGs for the Orthogonal Matrices tool (Line 1 anchor mesh).
//
// Built from OrthogonalWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Four stills come from the default preset
// ('rotate30'), and one each from 'reflect', 'permutation' and
// 'unnormalized':
//
//   gram     — Qᵀ · Q = I for the 30° rotation
//   det      — |Q| = 1
//   lengths  — Q x and Q y beside x and y
//   inverse  — Q · Qᵀ = I
//   reflect  — the reflection preset's classification (mirror at 22.5°)
//   axis     — the permutation matrix classified as a 120° rotation about (1, 1, 1)
//   fix      — perpendicular columns of length √2 normalized
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './OrthogonalWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;
const X2 = [2, 1], Y2 = [1, 0];
const X3 = [2, 1, 1], Y3 = [1, 0, 0];

const mainScenes = buildScenes(PRESETS[MAIN].values, X2, Y2);
const reflectScenes = buildScenes(PRESETS.reflect.values, X2, Y2);
const permScenes = buildScenes(PRESETS.permutation.values, X3, Y3);
const fixScenes = buildScenes(PRESETS.unnormalized.values, X2, Y2);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  gram: firstOf(mainScenes, 'gram'),
  det: firstOf(mainScenes, 'det'),
  lengths: firstOf(mainScenes, 'lengths'),
  inverse: firstOf(mainScenes, 'inverse'),
  reflect: firstOf(reflectScenes, 'classify'),
  axis: firstOf(permScenes, 'classify'),
  fix: firstOf(fixScenes, 'notortho'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  testVectors: { x2: X2, y2: Y2, x3: X3, y3: Y3 },
  sceneCounts: { main: mainScenes.length, reflect: reflectScenes.length, permutation: permScenes.length, fix: fixScenes.length },
  titles: {
    gram: mainScenes[sceneIndex.gram].title,
    det: mainScenes[sceneIndex.det].title,
    lengths: mainScenes[sceneIndex.lengths].title,
    inverse: mainScenes[sceneIndex.inverse].title,
    reflect: reflectScenes[sceneIndex.reflect].title,
    axis: permScenes[sceneIndex.axis].title,
    fix: fixScenes[sceneIndex.fix].title,
  },
};

const orthogonalDiagrams = {
  gram: freeze(mainScenes, sceneIndex.gram),
  det: freeze(mainScenes, sceneIndex.det),
  lengths: freeze(mainScenes, sceneIndex.lengths),
  inverse: freeze(mainScenes, sceneIndex.inverse),
  reflect: freeze(reflectScenes, sceneIndex.reflect),
  axis: freeze(permScenes, sceneIndex.axis),
  fix: freeze(fixScenes, sceneIndex.fix),
};

export default orthogonalDiagrams;
