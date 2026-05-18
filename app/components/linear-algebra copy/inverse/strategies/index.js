// strategies/index.js
//
// Registry of inverse-matrix strategies.

import { buildClosed2x2Scenes }   from './closed2x2';
import { buildAdjugateScenes }    from './adjugate';
import { buildGaussJordanScenes } from './gaussJordan';

export const STRATEGIES = {
  'closed-2x2': {
    id: 'closed-2x2',
    label: 'Closed form (2&times;2)',
    description: 'Swap main diagonal, negate anti-diagonal, divide by det(A).',
    sizes: [2],
    advanced: false,
    enabled: true,
    build: (n, options) => buildClosed2x2Scenes(n, options)
  },

  'adjugate': {
    id: 'adjugate',
    label: 'Adjugate (cofactor matrix)',
    description: 'A<sup>&minus;1</sup> = (1 / det(<i>A</i>)) &middot; adj(<i>A</i>). Build cof(<i>A</i>) cell by cell, transpose, divide.',
    sizes: [2, 3],
    advanced: false,
    enabled: true,
    build: (n, options) => buildAdjugateScenes(n, options)
  },

  'gauss-jordan': {
    id: 'gauss-jordan',
    label: 'Gauss-Jordan on [<i>A</i> | <i>I</i>]',
    description: 'Augment with the identity, row-reduce until the left half is <i>I</i>. The right half is then <i>A</i><sup>&minus;1</sup>.',
    sizes: [2, 3],
    advanced: true,
    enabled: true,
    build: (n, options) => buildGaussJordanScenes(n, options)
  }
};

export const STRATEGY_ORDER = ['closed-2x2', 'adjugate', 'gauss-jordan'];

export function getStrategy(id) {
  return STRATEGIES[id] || STRATEGIES['closed-2x2'];
}