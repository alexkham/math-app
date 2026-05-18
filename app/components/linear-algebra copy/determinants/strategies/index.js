// strategies/index.js
//
// Registry of determinant computation strategies.
// Each strategy entry:
//   id           unique key
//   label        card title (HTML)
//   description  card description (HTML)
//   sizes        list of n values where this strategy applies
//   advanced     show "advanced" badge
//   enabled      false  -> card renders disabled with "soon" badge
//   build(n, options) -> scenes[]
//   options      optional schema describing card-internal sub-controls:
//                  { [optionName]: {
//                      kind: 'pill-row',
//                      label: 'HTML label',
//                      rangeFromSize: (n) => [min, max]   (1-indexed display)
//                    }, ... }
//                When present, the wrapper renders sub-controls inside the
//                strategy card when it is the active strategy. The selected
//                option values are passed to build() in the `options` arg.

import { buildDiagonal2x2Scenes } from './diagonal2x2';
import { buildSarrus3x3Scenes }   from './sarrus3x3';
import { buildCofactorScenes }    from './cofactor';

export const STRATEGIES = {
  'diagonal': {
    id: 'diagonal',
    label: 'Diagonal product',
    description: 'det(A) = product of main diagonal &minus; product of anti-diagonal.',
    sizes: [2],
    advanced: false,
    enabled: true,
    build: (n, options) => buildDiagonal2x2Scenes(n, options)
  },

  'sarrus': {
    id: 'sarrus',
    label: 'Sarrus',
    description: 'Three down-right diagonals minus three up-right diagonals on an augmented 3&times;5 layout.',
    sizes: [3],
    advanced: false,
    enabled: true,
    build: (n, options) => buildSarrus3x3Scenes(n, options)
  },

  'cofactor-row': {
    id: 'cofactor-row',
    label: 'Cofactor &mdash; expand along a row',
    description: 'Sum of signed products: pick a row, walk its entries, multiply each by the determinant of its minor.',
    sizes: [3, 4, 5],
    advanced: false,
    enabled: true,
    options: {
      expansionIndex: {
        kind: 'pill-row',
        label: 'Expand along row',
        rangeFromSize: (n) => [1, n]
      }
    },
    build: (n, options) => buildCofactorScenes(n, { ...options, axis: 'row' })
  },

  'cofactor-col': {
    id: 'cofactor-col',
    label: 'Cofactor &mdash; expand along a column',
    description: 'Same sum, picked along a column instead of a row.',
    sizes: [3, 4, 5],
    advanced: false,
    enabled: true,
    options: {
      expansionIndex: {
        kind: 'pill-row',
        label: 'Expand along column',
        rangeFromSize: (n) => [1, n]
      }
    },
    build: (n, options) => buildCofactorScenes(n, { ...options, axis: 'col' })
  }
};

export const STRATEGY_ORDER = ['diagonal', 'sarrus', 'cofactor-row', 'cofactor-col'];

export function getStrategy(id) {
  return STRATEGIES[id] || STRATEGIES['diagonal'];
}