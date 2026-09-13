// Frozen-state SVGs for the Eigenvalues and Eigenvectors tool (Line 1
// anchor mesh).
//
// Built from EigenWrapper's exported buildScenes and rendered through
// frozenMatrixSvgFixed. Four stills come from the default preset ('distinct':
// [[2,0,0],[0,3,4],[0,4,9]], eigenvalues 1, 2, 11), one from 'rotation' (the
// complex case) and one from 'repeated' (a two-dimensional eigenspace):
//
//   shift    — A − λI with λ on the diagonal
//   expand   — the characteristic polynomial's coefficients
//   roots    — the three eigenvalues
//   eigvec   — the FIRST eigenvector scene: A − 11I row reduced, v read off
//   complex  — the rotation preset: complex pair, no real eigenvectors
//   repeated — the repeated preset's λ = 1 scene: two free columns, a plane
//
// Scenes carry a `phase` field, so each still is found by phase.

import { buildScenes, PRESETS, DEFAULT_PRESET } from './EigenWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const MAIN = DEFAULT_PRESET;

const mainScenes = buildScenes(PRESETS[MAIN].values);
const rotationScenes = buildScenes(PRESETS.rotation.values);
const repeatedScenes = buildScenes(PRESETS.repeated.values);

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);
const findRepeated = () => {
  // the λ = 1 scene of the repeated preset is the one with two eigenvectors
  const idx = repeatedScenes.findIndex((sc) => sc.phase === 'eigvec' && sc.matrices.V && sc.matrices.V.cols === 2);
  return idx >= 0 ? idx : firstOf(repeatedScenes, 'eigvec');
};

export const sceneIndex = {
  shift: firstOf(mainScenes, 'shift'),
  expand: firstOf(mainScenes, 'expand'),
  roots: firstOf(mainScenes, 'roots'),
  eigvec: firstOf(mainScenes, 'eigvec'),
  complex: firstOf(rotationScenes, 'complex'),
  repeated: findRepeated(),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  mainPreset: MAIN,
  sceneCounts: { main: mainScenes.length, rotation: rotationScenes.length, repeated: repeatedScenes.length },
  titles: {
    shift: mainScenes[sceneIndex.shift].title,
    expand: mainScenes[sceneIndex.expand].title,
    roots: mainScenes[sceneIndex.roots].title,
    eigvec: mainScenes[sceneIndex.eigvec].title,
    complex: rotationScenes[sceneIndex.complex].title,
    repeated: repeatedScenes[sceneIndex.repeated].title,
  },
};

const eigenDiagrams = {
  shift: freeze(mainScenes, sceneIndex.shift),
  expand: freeze(mainScenes, sceneIndex.expand),
  roots: freeze(mainScenes, sceneIndex.roots),
  eigvec: freeze(mainScenes, sceneIndex.eigvec),
  complex: freeze(rotationScenes, sceneIndex.complex),
  repeated: freeze(repeatedScenes, sceneIndex.repeated),
};

export default eigenDiagrams;
