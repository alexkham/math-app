// strategies/index.js
// Registry of computation strategies for matrix multiplication scenes.
// Each strategy exports a build(aRows, aCols, bCols, order) -> scenes[] function.

import { buildRowColumnScenes } from './rowColumn';
import { buildColumnByColumnScenes } from './columnByColumn';
import { buildRowByRowScenes } from './rowByRow';
import { buildSumOfOuterProductsScenes } from './sumOfOuterProducts';

export const STRATEGIES = {
  'row-column': {
    id: 'row-column',
    label: 'Row · Column',
    description: 'Each c<sub>ij</sub> = dot product of row i of A with col j of B.',
    advanced: false,
    enabled: true,
    build: buildRowColumnScenes
  },
  'column-by-column': {
    id: 'column-by-column',
    label: 'Column by column',
    description: 'Each column of C = A times the matching column of B.',
    advanced: false,
    enabled: true,
    build: buildColumnByColumnScenes
  },
  'row-by-row': {
    id: 'row-by-row',
    label: 'Row by row',
    description: 'Each row of C = the matching row of A times B.',
    advanced: false,
    enabled: true,
    build: buildRowByRowScenes
  },
  'sum-of-outer-products': {
    id: 'sum-of-outer-products',
    label: 'Sum of outer products',
    description: 'C = Σ (col k of A)(row k of B).',
    advanced: true,
    enabled: true,
    build: buildSumOfOuterProductsScenes
  }
};

export const STRATEGY_ORDER = [
  'row-column',
  'column-by-column',
  'row-by-row',
  'sum-of-outer-products'
];

export function getStrategy(id) {
  return STRATEGIES[id] || STRATEGIES['row-column'];
}