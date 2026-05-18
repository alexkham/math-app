// strategies/adjugate.jsx
//
// Inverse via adjugate:
//   A^{-1} = (1 / det(A)) * adj(A),  where adj(A) = transpose(cof(A))
//
// For each cell (i, j) of A, build cofactor C_{i,j} = (-1)^{i+j} det(M_{i,j}),
// place into cof(A) at (i, j). Then transpose into adj(A). Then divide by det.
//
// Scene structure (per cell of cof(A)):
//   STRIKE   A with row i, col j struck; pivot primary; cof(A) cell pending
//   PLACE    cof(A) cell filled with the (signed) symbolic cofactor; minor revealed
//
// Plus framing:
//   1. Intro                          A alone
//   2. Sign pattern                   standalone sign-pattern matrix
//   3..2+2n^2. cell builds            n^2 cells * 2 scenes each
//   3+2n^2. Transpose                 cof(A) -> adj(A)
//   4+2n^2. Divide by det             scalar factor applied
//   5+2n^2. Outro                     framed inverse
//
// n=2 -> 13 scenes, n=3 -> 23 scenes. Past n=3 it gets long; we cap at n=3
// in the registry.

import React from 'react';
import { aSymbol, aDisplay, plainDisplay, invHeader } from './_shared';

// -----------------------------------------------------------------------
// Cell content helpers
// -----------------------------------------------------------------------

function cofactorHTML(i, j) {
  const positive = (i + j) % 2 === 0;
  return (
    (positive ? '+' : '&minus;') +
    'det(<i>M</i><sub>' + (i + 1) + ',' + (j + 1) + '</sub>)'
  );
}

function cofactorDisplay(i, j) {
  const positive = (i + j) % 2 === 0;
  return (
    <span style={{ fontStyle: 'normal', fontSize: '12px', lineHeight: 1.1 }}>
      {positive ? '+' : '\u2212'}
      <span style={{ fontStyle: 'italic' }}> det </span>
      (<span style={{ fontStyle: 'italic' }}>M</span>
      <span style={{
        fontSize: '0.7em', verticalAlign: 'sub', lineHeight: 0
      }}>
        {i + 1},{j + 1}
      </span>
      )
    </span>
  );
}

// Adjugate cell (i, j) holds cofactor (j, i)  [transpose]
function adjugateDisplay(i, j) {
  return cofactorDisplay(j, i);
}

function buildCofOverrides(filledCells /* Set of "i,j" */) {
  const overrides = {};
  for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) {
    // size-agnostic; engine just ignores keys outside the actual grid.
    const key = `${i},${j}`;
    if (filledCells.has(key)) {
      overrides[key] = {
        display: cofactorDisplay(i, j),
        style: { padding: '0 4px' }
      };
    } else {
      overrides[key] = { empty: true };
    }
  }
  return overrides;
}

function buildAdjOverrides(filledCells, n) {
  const overrides = {};
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const key = `${i},${j}`;
    if (filledCells.has(key)) {
      overrides[key] = {
        display: adjugateDisplay(i, j),
        style: { padding: '0 4px' }
      };
    } else {
      overrides[key] = { empty: true };
    }
  }
  return overrides;
}

function buildStrikeOverrides(n, iStar, jStar) {
  const overrides = {};
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    const isPivot = (r === iStar && c === jStar);
    const struck = !isPivot && (r === iStar || c === jStar);
    if (struck) {
      overrides[`${r},${c}`] = {
        display: aDisplay(r, c),
        style: { textDecoration: 'line-through', opacity: 0.5 }
      };
    }
  }
  return overrides;
}

function buildStrikeHighlightCells(n, iStar, jStar) {
  const cells = [];
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    const isPivot = (r === iStar && c === jStar);
    if (isPivot) cells.push([r, c, 'primary']);
    else if (r === iStar || c === jStar) cells.push([r, c, 'muted']);
  }
  return cells;
}

function buildSignPatternOverrides(n) {
  const overrides = {};
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    const positive = (r + c) % 2 === 0;
    overrides[`${r},${c}`] = {
      display: positive ? '+' : '\u2212',
      fontStyle: 'normal',
      style: {
        fontSize: '22px', fontWeight: '700',
        color: positive ? '#16a34a' : '#dc2626'
      }
    };
  }
  return overrides;
}

// -----------------------------------------------------------------------
// Spec builders
// -----------------------------------------------------------------------

function specA(n, cellOverrides = {}) {
  return {
    A: { symbol: 'a', label: 'A', rows: n, cols: n,
         bracketColor: '#1e40af', cellOverrides }
  };
}

function specAandCof(n, aCellOverrides, cofFilled) {
  return {
    A: { symbol: 'a', label: 'A', rows: n, cols: n,
         bracketColor: '#1e40af', cellOverrides: aCellOverrides },
    C: { symbol: 'a', label: 'cof(<i>A</i>)', rows: n, cols: n,
         bracketColor: '#475569',
         cellOverrides: buildCofOverrides(cofFilled) }
  };
}

function specAandAdj(n, adjFilled) {
  return {
    A: { symbol: 'a', label: 'A', rows: n, cols: n, bracketColor: '#1e40af' },
    J: { symbol: 'a', label: 'adj(<i>A</i>)', rows: n, cols: n,
         bracketColor: '#16a34a',
         cellOverrides: buildAdjOverrides(adjFilled, n) }
  };
}

function specSignPattern(n) {
  return {
    A: { symbol: 'a', label: 'sign pattern', rows: n, cols: n,
         bracketColor: '#94a3b8', showDimensions: false,
         cellOverrides: buildSignPatternOverrides(n) }
  };
}

// -----------------------------------------------------------------------
// Main builder
// -----------------------------------------------------------------------

export function buildAdjugateScenes(n /* options */) {
  const headerTitle = 'Inverse via adjugate';
  const headerFormula =
    invHeader() +
    '(1 / det(<i>A</i>)) &middot; adj(<i>A</i>). ' +
    'Build the cofactor matrix cof(<i>A</i>) cell by cell, transpose to get ' +
    'adj(<i>A</i>), divide by det(<i>A</i>). Each C<sub>i,j</sub> = ' +
    '(&minus;1)<sup>i+j</sup> &middot; det(<i>M</i><sub>i,j</sub>).';

  const scenes = [];
  const filled = new Set();

  // 1. Intro
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: specA(n), layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {}, overlays: [],
    stepTitle: 'Intro &mdash; the matrix <i>A</i>',
    stepFormula:
      'Build cof(<i>A</i>) cell by cell: for each (i, j), strike row i and ' +
      'column j of <i>A</i>, compute the signed determinant of the ' +
      (n - 1) + '&times;' + (n - 1) + ' minor, and place the result in ' +
      'cell (i, j) of cof(<i>A</i>).'
  });

  // 2. Sign pattern
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: specSignPattern(n), layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {}, overlays: [],
    stepTitle: 'Sign pattern (&minus;1)<sup>i+j</sup>',
    stepFormula:
      'Each cofactor picks up the sign of its position. Top-left is +; ' +
      'signs alternate row by row, column by column.'
  });

  // 3..2+2*n^2. Per-cell triplet (strike + place)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const strikeOv = buildStrikeOverrides(n, i, j);
      const strikeH = { A: { cells: buildStrikeHighlightCells(n, i, j) } };

      // STRIKE
      scenes.push({
        title: headerTitle, formula: headerFormula,
        matrices: specAandCof(n, strikeOv, new Set(filled)),
        layout: [
          { type: 'matrix', ref: 'A' },
          { type: 'operator', symbol: '->' },
          { type: 'matrix', ref: 'C' }
        ],
        highlights: { ...strikeH, C: { cells: [[i, j, 'targetPending']] } },
        overlays: [],
        stepTitle: 'Cell (' + (i+1) + ', ' + (j+1) + '): strike row ' + (i+1) + ', column ' + (j+1),
        stepFormula:
          'Pivot ' + aSymbol(i, j) + ' is held; its row and column are crossed out. ' +
          'The (' + (n-1) + '&times;' + (n-1) + ') survivors form the minor <i>M</i>' +
          '<sub>' + (i+1) + ',' + (j+1) + '</sub>.'
      });

      // PLACE
      filled.add(`${i},${j}`);
      scenes.push({
        title: headerTitle, formula: headerFormula,
        matrices: specAandCof(n, strikeOv, new Set(filled)),
        layout: [
          { type: 'matrix', ref: 'A' },
          { type: 'operator', symbol: '->' },
          { type: 'matrix', ref: 'C' }
        ],
        highlights: { ...strikeH, C: { cells: [[i, j, 'accent']] } },
        overlays: [],
        stepTitle:
          'Place C<sub>' + (i+1) + ',' + (j+1) + '</sub> = ' + cofactorHTML(i, j),
        stepFormula:
          'Cell (' + (i+1) + ', ' + (j+1) + ') of cof(<i>A</i>) now holds the ' +
          'signed cofactor. The inner determinant det(<i>M</i><sub>' +
          (i+1) + ',' + (j+1) + '</sub>) is not expanded here &mdash; it stands ' +
          'in symbolically (one level of recursion).'
      });
    }
  }

  // Transpose cof(A) -> adj(A)
  const allFilled = new Set(filled);
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: specAandAdj(n, allFilled),
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '->' },
      { type: 'matrix', ref: 'J' }
    ],
    highlights: {}, overlays: [],
    stepTitle: 'Transpose: adj(<i>A</i>) = cof(<i>A</i>)<sup>T</sup>',
    stepFormula:
      'Transpose the cofactor matrix. Cell (i, j) of adj(<i>A</i>) now holds ' +
      'the cofactor C<sub>j,i</sub> (note the swapped indices).'
  });

  // Divide by det
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: specAandAdj(n, allFilled),
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '->' },
      { type: 'operator', symbol: '1 / det(A)' },
      { type: 'operator', symbol: '*' },
      { type: 'matrix', ref: 'J' }
    ],
    highlights: {}, overlays: [],
    stepTitle: 'Divide by det(<i>A</i>)',
    stepFormula:
      'Multiply adj(<i>A</i>) by the scalar 1 / det(<i>A</i>). The product ' +
      'is the inverse. Defined only when det(<i>A</i>) &ne; 0.'
  });

  // Outro
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: {
      J: { symbol: 'a', label: 'A\u207B\u00B9', rows: n, cols: n,
           bracketColor: '#16a34a',
           cellOverrides: buildAdjOverrides(allFilled, n) }
    },
    layout: [
      { type: 'operator', symbol: '1 / det(A)' },
      { type: 'operator', symbol: '*' },
      { type: 'matrix', ref: 'J' }
    ],
    highlights: {},
    overlays: [
      {
        type: 'group-bracket', matrices: ['J'],
        label: '<i>A</i><sup>&minus;1</sup>',
        style: 'accent', variant: 'solid',
        padding: 16, labelOffset: 8
      }
    ],
    stepTitle: 'Result &mdash; <i>A</i><sup>&minus;1</sup>',
    stepFormula:
      'Each entry of <i>A</i><sup>&minus;1</sup> is a signed minor ' +
      'determinant divided by det(<i>A</i>).'
  });

  return scenes;
}