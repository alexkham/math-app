// strategies/diagonal2x2.js
//
// 2x2 determinant: product of main diagonal minus product of anti-diagonal.
// Six scenes:
//   1. Intro                    A shown neutral
//   2. Main diagonal reveal     (0,0) and (1,1) primary, diagonal-axis overlay
//   3. Main-diagonal product    term 1 becomes "current" in step log
//   4. Anti-diagonal reveal     (0,1) and (1,0) secondary
//   5. Anti-diagonal product    term 2 becomes "current" in step log
//   6. Outro                    both terms accumulated, result framed
//
// Caption (canvas) is STATIC: it shows the general formula
// det(A) = a_{1,1}a_{2,2} - a_{1,2}a_{2,1} on every scene.
// Per-scene running pills live in stepFormula.

import { buildTermPills, aSymbol, detEquals } from './_shared';

export function buildDiagonal2x2Scenes(/* n, options */) {
  // --- static header (same on every scene) ---
  const headerTitle = 'Determinant of a 2&times;2 matrix';
  const headerFormula =
    detEquals() +
    aSymbol(0, 0) + aSymbol(1, 1) +
    ' &minus; ' +
    aSymbol(0, 1) + aSymbol(1, 0) +
    '. Product of the main diagonal, minus product of the anti-diagonal.';

  // --- term list for the running formula ---
  const terms = [
    { html: aSymbol(0, 0) + aSymbol(1, 1), sign: null },
    { html: aSymbol(0, 1) + aSymbol(1, 0), sign: '-'  }
  ];
  const runningFormula = (currentIdx) =>
    detEquals() + buildTermPills(terms, currentIdx);

  // --- shared scene skeleton ---
  const matricesSpec = {
    A: { symbol: 'a', label: 'A', rows: 2, cols: 2, bracketColor: '#1e40af' }
  };
  const layout = [{ type: 'matrix', ref: 'A' }];

  const baseScene = (extras) => ({
    title: headerTitle,
    formula: headerFormula,
    matrices: matricesSpec,
    layout,
    highlights: {},
    overlays: [],
    ...extras
  });

  const scenes = [];

  // 1. Intro
  scenes.push(baseScene({
    stepTitle: 'Intro &mdash; the 2&times;2 matrix',
    stepFormula:
      'For a 2&times;2 matrix, the determinant is the difference of two diagonal products. ' +
      'No terms accumulated yet.'
  }));

  // 2. Reveal main diagonal
  scenes.push(baseScene({
    highlights: {
      A: { cells: [[0, 0, 'primary'], [1, 1, 'primary']] }
    },
    overlays: [
      { type: 'diagonal-axis', matrix: 'A', style: 'primary' }
    ],
    stepTitle: 'Main diagonal: ' + aSymbol(0, 0) + ', ' + aSymbol(1, 1),
    stepFormula:
      'The <strong>main diagonal</strong> runs top-left to bottom-right. Its product is the first term.'
  }));

  // 3. Term 1: main-diagonal product accumulated as "current"
  scenes.push(baseScene({
    highlights: {
      A: { cells: [[0, 0, 'primary'], [1, 1, 'primary']] }
    },
    overlays: [
      { type: 'diagonal-axis', matrix: 'A', style: 'primary' }
    ],
    stepTitle: 'Term 1: ' + aSymbol(0, 0) + aSymbol(1, 1),
    stepFormula: runningFormula(0)
  }));

  // 4. Reveal anti-diagonal
  scenes.push(baseScene({
    highlights: {
      A: { cells: [[0, 1, 'secondary'], [1, 0, 'secondary']] }
    },
    overlays: [
      // Engine has no anti-diagonal-axis overlay; use a dashed cell-arrow
      // connecting (0,1) and (1,0) as the visual cue.
      {
        type: 'cell-arrow',
        from: { matrix: 'A', row: 0, col: 1 },
        to:   { matrix: 'A', row: 1, col: 0 },
        style: 'secondary',
        dashed: true
      }
    ],
    stepTitle: 'Anti-diagonal: ' + aSymbol(0, 1) + ', ' + aSymbol(1, 0),
    stepFormula:
      'The <strong>anti-diagonal</strong> runs top-right to bottom-left. Its product is the ' +
      'second term, and it is <strong>subtracted</strong>.'
  }));

  // 5. Term 2: anti-diagonal product becomes "current"
  scenes.push(baseScene({
    highlights: {
      A: { cells: [[0, 1, 'secondary'], [1, 0, 'secondary']] }
    },
    overlays: [
      {
        type: 'cell-arrow',
        from: { matrix: 'A', row: 0, col: 1 },
        to:   { matrix: 'A', row: 1, col: 0 },
        style: 'secondary',
        dashed: true
      }
    ],
    stepTitle: 'Term 2: &minus;' + aSymbol(0, 1) + aSymbol(1, 0),
    stepFormula: runningFormula(1)
  }));

  // 6. Outro: both terms accumulated, result framed
  scenes.push(baseScene({
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
    stepTitle: 'Result &mdash; both terms accounted for',
    stepFormula: runningFormula(terms.length)
  }));

  return scenes;
}