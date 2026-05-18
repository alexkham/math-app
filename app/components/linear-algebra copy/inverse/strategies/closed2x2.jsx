// strategies/closed2x2.jsx
//
// 2x2 inverse closed form:
//   A^{-1} = (1 / det(A)) * [[a_{2,2}, -a_{1,2}], [-a_{2,1}, a_{1,1}]]
//
// 5 scenes:
//   1. Intro          A as 2x2
//   2. Swap main      a_{1,1} <-> a_{2,2}
//   3. Negate anti    a_{1,2} and a_{2,1} flip sign
//   4. Divide by det  result expressed with 1/det(A) factor
//   5. Outro          result framed

import React from 'react';
import { aSymbol, aDisplay, negADisplay, plainDisplay, invHeader } from './_shared';

export function buildClosed2x2Scenes(/* n, options */) {
  const headerTitle = 'Inverse of a 2&times;2 matrix &mdash; closed form';
  const headerFormula =
    invHeader() +
    '(1 / det(<i>A</i>)) &middot; ' +
    '[swap main diagonal, negate anti-diagonal]. ' +
    'Valid whenever det(<i>A</i>) &ne; 0.';

  const aSpec = (cellOverrides = {}) => ({
    A: {
      symbol: 'a', label: 'A', rows: 2, cols: 2,
      bracketColor: '#1e40af', cellOverrides
    }
  });

  const fullSpec = (resultOverrides = {}) => ({
    A: {
      symbol: 'a', label: 'A', rows: 2, cols: 2,
      bracketColor: '#1e40af'
    },
    R: {
      symbol: 'a', label: 'A\u207B\u00B9', rows: 2, cols: 2,
      bracketColor: '#16a34a',
      cellOverrides: resultOverrides
    }
  });

  // The full result-matrix overrides (after both swap and negate).
  const finalResultOverrides = {
    '0,0': { display: aDisplay(1, 1) },              // a_{2,2}
    '0,1': { display: negADisplay(0, 1) },            // -a_{1,2}
    '1,0': { display: negADisplay(1, 0) },            // -a_{2,1}
    '1,1': { display: aDisplay(0, 0) }                // a_{1,1}
  };

  // Highlights for the result matrix matching swap/negate state.
  const swapHighlights = {
    R: { cells: [[0, 0, 'primary'], [1, 1, 'primary']] }
  };
  const negateHighlights = {
    R: {
      cells: [
        [0, 0, 'primary'], [1, 1, 'primary'],
        [0, 1, 'secondary'], [1, 0, 'secondary']
      ]
    }
  };

  const scenes = [];

  // 1. Intro
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: aSpec(),
    layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {},
    overlays: [],
    stepTitle: 'Intro &mdash; the 2&times;2 matrix',
    stepFormula:
      'For a 2&times;2 the inverse has a closed form: rearrange the entries, ' +
      'apply signs, divide by det(<i>A</i>). Three short transformations.'
  });

  // 2. Swap main diagonal
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: fullSpec({
      '0,0': { display: aDisplay(1, 1) },
      '1,1': { display: aDisplay(0, 0) }
    }),
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '->' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: {
      A: { cells: [[0, 0, 'primary'], [1, 1, 'primary']] },
      ...swapHighlights
    },
    overlays: [
      {
        type: 'cell-arrow-curve',
        from: { matrix: 'A', row: 0, col: 0 },
        to:   { matrix: 'R', row: 1, col: 1 },
        style: 'primary'
      },
      {
        type: 'cell-arrow-curve',
        from: { matrix: 'A', row: 1, col: 1 },
        to:   { matrix: 'R', row: 0, col: 0 },
        style: 'primary'
      }
    ],
    stepTitle: 'Swap main-diagonal entries',
    stepFormula:
      aSymbol(0, 0) + ' and ' + aSymbol(1, 1) +
      ' exchange positions. The main diagonal is now ' +
      aSymbol(1, 1) + ', ' + aSymbol(0, 0) + '.'
  });

  // 3. Negate anti-diagonal
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: fullSpec(finalResultOverrides),
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '->' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: {
      A: { cells: [[0, 1, 'secondary'], [1, 0, 'secondary']] },
      ...negateHighlights
    },
    overlays: [],
    stepTitle: 'Negate anti-diagonal entries',
    stepFormula:
      aSymbol(0, 1) + ' and ' + aSymbol(1, 0) +
      ' flip sign. The anti-diagonal becomes &minus;' +
      aSymbol(0, 1) + ', &minus;' + aSymbol(1, 0) + '.'
  });

  // 4. Divide by det
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: {
      A: {
        symbol: 'a', label: 'A', rows: 2, cols: 2,
        bracketColor: '#1e40af'
      },
      R: {
        symbol: 'a', label: 'A\u207B\u00B9', rows: 2, cols: 2,
        bracketColor: '#16a34a',
        cellOverrides: finalResultOverrides
      }
    },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '->' },
      { type: 'operator', symbol: '1 / det(A)' },
      { type: 'operator', symbol: '*' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: { ...negateHighlights },
    overlays: [],
    stepTitle: 'Divide by det(<i>A</i>)',
    stepFormula:
      'Multiply the rearranged matrix by the scalar 1 / det(<i>A</i>), where ' +
      'det(<i>A</i>) = ' + aSymbol(0, 0) + aSymbol(1, 1) +
      ' &minus; ' + aSymbol(0, 1) + aSymbol(1, 0) + '. ' +
      'Defined only when this determinant is non-zero.'
  });

  // 5. Outro: framed result
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: {
      R: {
        symbol: 'a', label: 'A\u207B\u00B9', rows: 2, cols: 2,
        bracketColor: '#16a34a',
        cellOverrides: finalResultOverrides
      }
    },
    layout: [
      { type: 'operator', symbol: '1 / det(A)' },
      { type: 'operator', symbol: '*' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: {},
    overlays: [
      {
        type: 'group-bracket',
        matrices: ['R'],
        label: '<i>A</i><sup>&minus;1</sup>',
        style: 'accent',
        variant: 'solid',
        padding: 16,
        labelOffset: 8
      }
    ],
    stepTitle: 'Result &mdash; <i>A</i><sup>&minus;1</sup>',
    stepFormula:
      'The closed form is complete. Each entry of <i>A</i><sup>&minus;1</sup> ' +
      'is one of the original entries (possibly negated) divided by det(<i>A</i>).'
  });

  return scenes;
}