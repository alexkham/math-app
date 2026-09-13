// Frozen-state SVGs for the Matrix Determinant tool (Line 1 anchor mesh).
//
// DeterminantWrapper delegates scene generation to the STRATEGIES registry
// (strategies/index.js): one builder per strategy, each taking (n, options).
// This module calls those same builders and renders one representative scene
// per state through the shared frozenMatrixSvg, so the cells, colours, labels
// and dimensions are the tool's own.
//
// States and where they are frozen:
//
//   diagonal       2x2, 6 scenes;  frozen at scene 1 = main diagonal revealed
//                  (a_{1,1} and a_{2,2} in primary blue)
//   sarrus         3x3, 9 scenes;  frozen at scene 3 = positive diagonal 2 of 3
//                  on the augmented 3x5 form (a_{1,2}, a_{2,3}, a_{3,1} - the
//                  third cell sits in the duplicated columns, which are dimmed)
//   cofactor-row   3x3 along row 1, 12 scenes; frozen at scene 7 = term 2,
//                  pivot a_{1,2}, its row and column struck, minor M_{1,2}
//                  shown alongside
//   cofactor-col   3x3 along column 1, 12 scenes; frozen at scene 7 = term 2,
//                  pivot a_{2,1}, minor M_{2,1} alongside
//   sign-pattern   the checkerboard (-1)^{i+j} matrix the cofactor strategies
//                  show as their second scene; frozen at n = 4 so the pattern
//                  reads as a pattern rather than a 3x3 special case
//
// Overlays are not reproduced by frozenMatrixSvg: the dashed diagonal axis and
// the chained diagonal arrows of the diagonal and Sarrus strategies, and the
// framed det(A) bracket of every outro. Each frozen scene was chosen so the
// cell colouring alone carries the meaning. frozenMatrixSvg was extended
// additively for this module: JSX matrix labels (the minor's "M" with a
// subscript), and per-cell opacity, colour and strike-through from the
// strategies' cellOverrides styles.

import { STRATEGIES } from './strategies';
import frozenMatrixSvg from '../matrix/frozenMatrixSvg';

const built = {
  'diagonal': STRATEGIES['diagonal'].build(2, {}),
  'sarrus': STRATEGIES['sarrus'].build(3, {}),
  'cofactor-row': STRATEGIES['cofactor-row'].build(3, { expansionIndex: 0 }),
  'cofactor-col': STRATEGIES['cofactor-col'].build(3, { expansionIndex: 0 }),
  'sign-pattern': STRATEGIES['cofactor-row'].build(4, { expansionIndex: 0 }),
};

// index of the scene frozen for each state
export const sceneIndex = {
  'diagonal': 1,        // main diagonal revealed
  'sarrus': 3,          // positive diagonal 2 of 3 on the 3x5 form
  'cofactor-row': 7,    // term 2 along row 1: pivot a_{1,2} with minor M_{1,2}
  'cofactor-col': 7,    // term 2 along column 1: pivot a_{2,1} with minor M_{2,1}
  'sign-pattern': 1,    // the checkerboard sign matrix (n = 4)
};

const freeze = (key) => {
  const sc = built[key][sceneIndex[key]];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  sizes: { diagonal: 2, sarrus: 3, 'cofactor-row': 3, 'cofactor-col': 3, 'sign-pattern': 4 },
  sceneCounts: Object.fromEntries(Object.entries(built).map(([k, v]) => [k, v.length])),
  stepTitles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, built[k][i].stepTitle])),
};

const determinantDiagrams = {
  'diagonal': freeze('diagonal'),
  'sarrus': freeze('sarrus'),
  'cofactor-row': freeze('cofactor-row'),
  'cofactor-col': freeze('cofactor-col'),
  'sign-pattern': freeze('sign-pattern'),
};

export default determinantDiagrams;
