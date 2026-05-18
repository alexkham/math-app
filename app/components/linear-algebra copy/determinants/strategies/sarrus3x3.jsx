// strategies/sarrus3x3.jsx
//
// Sarrus rule for 3×3: write A with its first two columns duplicated
// to the right (3×5 augmented form), then sum 3 down-right diagonals
// minus 3 up-right diagonals.
//
// The augmented form is rendered as a SINGLE 3×5 matrix (one pair of
// brackets), matching textbook Sarrus presentation. Columns 3 and 4
// reuse A's first two columns via cellOverrides; their content is
// dimmed (opacity 0.55) when not part of the current diagonal, full
// opacity when highlighted.
//
// Scenes (9):
//   1. Intro:    A as 3×3
//   2. Augment:  3×5 form appears, duplicate cols dimmed
//   3-5.         Positive diagonals 1, 2, 3 (running formula gains + term)
//   6-8.         Negative diagonals 1, 2, 3 (running formula gains − term)
//   9. Outro:    all six terms accumulated, result framed

import React from 'react';
import { buildTermPills, aSymbol, aDisplay, detEquals } from './_shared';

// ---- diagonal definitions in the augmented 3×5 grid -----------------------
// Each diagonal is three { row, col } cells; col ∈ 0..4.

const POSITIVE_DIAGS = [
  [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
  [{ row: 0, col: 1 }, { row: 1, col: 2 }, { row: 2, col: 3 }],
  [{ row: 0, col: 2 }, { row: 1, col: 3 }, { row: 2, col: 4 }]
];

const NEGATIVE_DIAGS = [
  [{ row: 2, col: 0 }, { row: 1, col: 1 }, { row: 0, col: 2 }],
  [{ row: 2, col: 1 }, { row: 1, col: 2 }, { row: 0, col: 3 }],
  [{ row: 2, col: 2 }, { row: 1, col: 3 }, { row: 0, col: 4 }]
];

// ---- helpers --------------------------------------------------------------

// Build cellOverrides for cols 3, 4 of the augmented matrix.
// Each cell displays the corresponding A-column entry (col j-3 of A).
// Highlighted duplicate cells get full opacity; the rest are dimmed.
function buildDupOverrides(highlightedDupCells) {
  const set = new Set(highlightedDupCells.map((c) => `${c.row},${c.col}`));
  const overrides = {};
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j <= 4; j++) {
      const isOn = set.has(`${i},${j}`);
      overrides[`${i},${j}`] = {
        display: aDisplay(i, j - 3),
        style: isOn ? {} : { opacity: 0.55 }
      };
    }
  }
  return overrides;
}

// Augmented-matrix spec; cellOverrides depend on which duplicate cells
// are currently highlighted, so this is rebuilt per scene.
function augmentedSpec(highlightedDupCells) {
  return {
    A: {
      symbol: 'a',
      label: 'A',
      rows: 3,
      cols: 5,
      bracketColor: '#1e40af',
      showDimensions: false,
      cellSize: 58,
      fontSize: 17,
      cellOverrides: buildDupOverrides(highlightedDupCells)
    }
  };
}

// Convert a diagonal (list of cells) into highlights for matrix A.
function diagHighlights(cells, style) {
  return {
    A: { cells: cells.map((c) => [c.row, c.col, style]) }
  };
}

// Chain straight cell-arrows along a diagonal.
function diagArrows(cells, style) {
  const arrows = [];
  for (let k = 0; k < cells.length - 1; k++) {
    arrows.push({
      type: 'cell-arrow',
      from: { matrix: 'A', row: cells[k].row,     col: cells[k].col },
      to:   { matrix: 'A', row: cells[k + 1].row, col: cells[k + 1].col },
      style,
      dashed: false,
      width: 2
    });
  }
  return arrows;
}

const dupOnly = (cells) => cells.filter((c) => c.col >= 3);

// ---- main builder ---------------------------------------------------------

export function buildSarrus3x3Scenes(/* n, options */) {
  // Static caption (same on every scene)
  const headerTitle = 'Determinant of a 3&times;3 by Sarrus';
  const headerFormula =
    'det(<i>A</i>) = sum of three down-right diagonal products ' +
    '&minus; sum of three up-right diagonal products, on the augmented ' +
    '3&times;5 form.';

  // Six terms: three positive, three negative
  const terms = [
    { html: aSymbol(0,0) + aSymbol(1,1) + aSymbol(2,2), sign: null },
    { html: aSymbol(0,1) + aSymbol(1,2) + aSymbol(2,0), sign: '+'  },
    { html: aSymbol(0,2) + aSymbol(1,0) + aSymbol(2,1), sign: '+'  },
    { html: aSymbol(0,2) + aSymbol(1,1) + aSymbol(2,0), sign: '-'  },
    { html: aSymbol(0,0) + aSymbol(1,2) + aSymbol(2,1), sign: '-'  },
    { html: aSymbol(0,1) + aSymbol(1,0) + aSymbol(2,2), sign: '-'  }
  ];
  const runningFormula = (currentIdx) =>
    detEquals() + buildTermPills(terms, currentIdx);

  const layout = [{ type: 'matrix', ref: 'A' }];

  const scenes = [];

  // Scene 1: Intro — 3×3 A
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: {
      A: { symbol: 'a', label: 'A', rows: 3, cols: 3, bracketColor: '#1e40af' }
    },
    layout,
    highlights: {},
    overlays: [],
    stepTitle: 'Intro &mdash; the 3&times;3 matrix',
    stepFormula:
      'Sarrus works only on a 3&times;3 matrix. Next we augment it with its first two ' +
      'columns to set up six diagonals of three cells each.'
  });

  // Scene 2: Augment — 3×5 form appears
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: augmentedSpec([]),
    layout,
    highlights: {},
    overlays: [],
    stepTitle: 'Augment: duplicate columns 1, 2 to the right',
    stepFormula:
      'Append A&apos;s first two columns (dimmed) to the right. The 3&times;5 grid now ' +
      'has three full down-right diagonals and three full up-right diagonals.'
  });

  // Scenes 3–5: Positive diagonals (terms 0, 1, 2)
  for (let k = 0; k < 3; k++) {
    const cells = POSITIVE_DIAGS[k];
    scenes.push({
      title: headerTitle,
      formula: headerFormula,
      matrices: augmentedSpec(dupOnly(cells)),
      layout,
      highlights: diagHighlights(cells, 'primary'),
      overlays: diagArrows(cells, 'primary'),
      stepTitle: `Positive diagonal ${k + 1} of 3`,
      stepFormula: runningFormula(k)
    });
  }

  // Scenes 6–8: Negative diagonals (terms 3, 4, 5)
  for (let k = 0; k < 3; k++) {
    const cells = NEGATIVE_DIAGS[k];
    scenes.push({
      title: headerTitle,
      formula: headerFormula,
      matrices: augmentedSpec(dupOnly(cells)),
      layout,
      highlights: diagHighlights(cells, 'secondary'),
      overlays: diagArrows(cells, 'secondary'),
      stepTitle: `Negative diagonal ${k + 1} of 3 (subtracted)`,
      stepFormula: runningFormula(3 + k)
    });
  }

  // Scene 9: Outro — result framed
  scenes.push({
    title: headerTitle,
    formula: headerFormula,
    matrices: augmentedSpec([]),
    layout,
    highlights: {},
    overlays: [
      {
        type: 'group-bracket',
        matrices: ['A'],
        label: 'det(<i>A</i>)',
        style: 'accent',
        variant: 'solid',
        padding: 16,
        labelOffset: 8
      }
    ],
    stepTitle: 'Result &mdash; all six diagonals accounted for',
    stepFormula: runningFormula(terms.length)
  });

  return scenes;
}