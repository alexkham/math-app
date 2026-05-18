// strategies/gaussJordan.jsx
//
// Inverse via Gauss-Jordan elimination on [A | I]:
// row-reduce until the left half becomes I; the right half is then A^{-1}.
//
// Symbolic note: fully expanded symbolic entries stack denominators after
// the first pivot and become unreadable. This strategy uses SYMBOLIC
// PLACEHOLDERS past row 1:
//   - column-1 entries are written exactly (a_{i,1} / a_{1,1}, etc.)
//   - everything else collapses to symbols a', a'', b', b'', ... which
//     stand in for "the entry after step k".
// This keeps the scene readable while preserving the algorithm shape.
//
// Stages (size-dependent):
//   1. Intro
//   2. Augment with I
//   3..2+2(n-1)*1. Forward pass: for each pivot row r in 0..n-1,
//        normalize R_r, then zero column r in every other row.
//        (We collapse "normalize" and "zero other rows" into per-pivot blocks.)
//   n+2..  Back-substitute or note we are already at reduced row echelon.
//   last-2. Split the augmented matrix: left = I, right = A^{-1}.
//   last-1. Outro: framed inverse.
//
// Scope: n = 2, 3. (Cap at 3 in the registry.)

import React from 'react';
import { plainDisplay, invHeader, aDisplay } from './_shared';

// -----------------------------------------------------------------------
// Symbol helpers
// -----------------------------------------------------------------------

function primed(letter, primes) {
  const tickStr = '\u2032'.repeat(primes);  // prime character
  return (
    <span style={{ fontStyle: 'italic' }}>
      {letter}{tickStr}
    </span>
  );
}

function fracDisplay(num, den) {
  return (
    <span style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
      lineHeight: 1.1, fontSize: '0.85em', fontStyle: 'italic'
    }}>
      <span style={{ padding: '0 4px 1px' }}>{num}</span>
      <span style={{ padding: '1px 4px 0', borderTop: '1.2px solid #374151' }}>{den}</span>
    </span>
  );
}

// -----------------------------------------------------------------------
// Augmented-matrix builder
// -----------------------------------------------------------------------

// Build cellOverrides for an n x 2n augmented matrix with custom content
// per cell. `getCell(r, c)` should return either:
//   { display: <JSX> }     — explicit content
//   { display: '0' or '1', fontStyle: 'normal' } — for plain digits
//   undefined              — use default symbol (a_{r,c} or, if c >= n,
//                            identity glyph)
function buildAugmentedOverrides(n, getCell) {
  const overrides = {};
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < 2 * n; c++) {
      const custom = getCell(r, c);
      if (custom !== undefined) {
        overrides[`${r},${c}`] = custom;
      } else if (c >= n) {
        // identity half: 1 on diagonal, 0 elsewhere
        const id = (c - n);
        overrides[`${r},${c}`] = {
          display: plainDisplay(r === id ? '1' : '0'),
          fontStyle: 'normal'
        };
      }
      // c < n with custom === undefined: engine renders default a_{r,c}
    }
  }
  return overrides;
}

function augSpec(n, getCell, highlightCols = []) {
  return {
    G: {
      symbol: 'a',
      label: '[<i>A</i> | <i>I</i>]',
      rows: n,
      cols: 2 * n,
      bracketColor: '#1e40af',
      cellSize: n === 2 ? 56 : 50,
      fontSize: n === 2 ? 15 : 13,
      cellOverrides: buildAugmentedOverrides(n, getCell)
    }
  };
}

// Highlight helpers
function rowH(rowIdx, style = 'primary', n) {
  // highlight every cell in `rowIdx` of an n x 2n grid
  const cells = [];
  for (let c = 0; c < 2 * n; c++) cells.push([rowIdx, c, style]);
  return cells;
}

function cellH(r, c, style = 'primary') {
  return [r, c, style];
}

// -----------------------------------------------------------------------
// State snapshots per stage
//
// Each snapshot returns a getCell(r, c) closure describing the current
// state of every cell in the augmented matrix.
// -----------------------------------------------------------------------

// Stage 0: just A augmented with identity (no row ops yet).
function stageInitial(n) {
  return (r, c) => undefined; // defaults handle it
}

// Stage 1: after normalizing row 0 by 1/a_{1,1}.
function stageNormalizeR1(n) {
  return (r, c) => {
    if (r !== 0) return undefined;
    if (c < n) {
      if (c === 0) return { display: plainDisplay('1'), fontStyle: 'normal' };
      return { display: fracDisplay(
        <span><span style={{ fontStyle: 'italic' }}>a</span>
              <sub style={{ fontSize: '0.65em' }}>1,{c+1}</sub></span>,
        <span><span style={{ fontStyle: 'italic' }}>a</span>
              <sub style={{ fontSize: '0.65em' }}>1,1</sub></span>
      ) };
    }
    // c >= n  (identity half of row 0)
    const idCol = c - n;
    if (idCol === 0) {
      return { display: fracDisplay(
        <span>1</span>,
        <span><span style={{ fontStyle: 'italic' }}>a</span>
              <sub style={{ fontSize: '0.65em' }}>1,1</sub></span>
      ) };
    }
    return { display: plainDisplay('0'), fontStyle: 'normal' };
  };
}

// Stage 2: after zeroing column 0 in rows 1..n-1.
// Row 0 stays normalized; rows 1..n-1 show column 0 = 0, other entries collapse
// to single-primed symbols.
function stageZeroCol1(n) {
  const norm = stageNormalizeR1(n);
  return (r, c) => {
    if (r === 0) return norm(r, c);
    // r >= 1
    if (c === 0) return { display: plainDisplay('0'), fontStyle: 'normal' };
    if (c < n) {
      return { display: primed('a', 1), style: { padding: '0 4px' } };
    }
    // identity half: collapse to placeholder b'
    if (c === n) {
      return { display: primed('b', 1), style: { padding: '0 4px' } };
    }
    return { display: primed('c', 1), style: { padding: '0 4px' } };
  };
}

// Stage 3: after pivot 2 normalized AND col 2 zeroed elsewhere.
// Rows 0 and pivot-2's row have a 1 in their pivot column; pivot row collapsed
// to single primes in the right half; other rows now double-primed.
function stagePivot2Done(n) {
  return (r, c) => {
    // diagonal in left half
    if (c < n) {
      return { display: plainDisplay(r === c ? '1' : '0'), fontStyle: 'normal' };
    }
    // right half: cell (r, c) of A^{-1}-in-progress shown as double-primed
    const letters = ['x', 'y', 'z'];
    return {
      display: primed(letters[c - n] || 'w', 2),
      style: { padding: '0 4px' }
    };
  };
}

// Stage 4 (n=3 only): after pivot 3 normalized AND col 3 zeroed elsewhere.
function stagePivot3Done(n) {
  return (r, c) => {
    if (c < n) {
      return { display: plainDisplay(r === c ? '1' : '0'), fontStyle: 'normal' };
    }
    const letters = ['x', 'y', 'z'];
    return {
      display: primed(letters[c - n] || 'w', 3),
      style: { padding: '0 4px' }
    };
  };
}

// Final stage: left = I, right = symbolic A^{-1} entries (using double primes
// for n=2 and triple primes for n=3 — chosen so the visual matches the last
// pivot stage).
function stageFinal(n) {
  return n === 2 ? stagePivot2Done(n) : stagePivot3Done(n);
}

// -----------------------------------------------------------------------
// Main builder
// -----------------------------------------------------------------------

export function buildGaussJordanScenes(n /* options */) {
  if (n < 2 || n > 3) return []; // safety; registry already gates this

  const headerTitle =
    'Inverse by Gauss-Jordan on [<i>A</i> | <i>I</i>]';
  const headerFormula =
    'Augment <i>A</i> with the identity. Use elementary row operations until ' +
    'the left half becomes <i>I</i>. The right half is then <i>A</i><sup>&minus;1</sup>. ' +
    'Symbols with primes (<i>a</i>&prime;, <i>a</i>&Prime;) stand for the entries after each pass.';

  const layout = [{ type: 'matrix', ref: 'G' }];
  const scenes = [];

  // 1. Intro
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: augSpec(n, stageInitial(n)), layout,
    highlights: {}, overlays: [],
    stepTitle: 'Intro &mdash; the matrix <i>A</i> augmented with <i>I</i>',
    stepFormula:
      'The right half starts as the identity matrix. Every row operation is ' +
      'applied to both halves at once. When the left half becomes <i>I</i>, ' +
      'the right half is <i>A</i><sup>&minus;1</sup>.'
  });

  // 2. Normalize R_1
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: augSpec(n, stageNormalizeR1(n)), layout,
    highlights: { G: { cells: rowH(0, 'primary', n) } },
    overlays: [],
    stepTitle: 'Pivot 1: <i>R</i><sub>1</sub> &larr; <i>R</i><sub>1</sub> / <i>a</i><sub>1,1</sub>',
    stepFormula:
      'Divide row 1 by its pivot <i>a</i><sub>1,1</sub> so the (1,1) entry becomes 1. ' +
      'The other entries of row 1 pick up <i>a</i><sub>1,1</sub> in the denominator.'
  });

  // 3. Zero column 1 elsewhere
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: augSpec(n, stageZeroCol1(n)), layout,
    highlights: {
      G: {
        cells: [
          ...rowH(0, 'muted', n).slice(0, 1),
          // mark column 0 below row 0 as primary
          ...Array.from({ length: n - 1 }, (_, k) => [k + 1, 0, 'primary'])
        ]
      }
    },
    overlays: [],
    stepTitle: 'Zero column 1 below the pivot',
    stepFormula:
      'For each row <i>R</i><sub>r</sub> below the pivot, subtract ' +
      '<i>a</i><sub>r,1</sub> &middot; <i>R</i><sub>1</sub>. Column 1 becomes 0 in ' +
      'every row except row 1. Other entries are now combinations of the ' +
      'originals; we summarize them as <i>a</i>&prime;, <i>b</i>&prime;, <i>c</i>&prime;.'
  });

  // 4. Pivot 2 done
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: augSpec(n, stagePivot2Done(n)), layout,
    highlights: {
      G: {
        cells: [
          [1, 1, 'primary'],
          ...(n === 3 ? [[2, 1, 'muted']] : [])
        ]
      }
    },
    overlays: [],
    stepTitle: 'Pivot 2: normalize <i>R</i><sub>2</sub>, then zero column 2',
    stepFormula:
      'Divide row 2 by its (now-leading) entry <i>a</i>&prime;<sub>2,2</sub>; ' +
      'then zero column 2 in every other row. The left half is now an identity ' +
      (n === 2 ? '' : 'in the top 2&times;2 block') +
      '. Entries collapse one more level: <i>a</i>&Prime;, <i>b</i>&Prime;, ...'
  });

  // 5. (n=3 only) Pivot 3
  if (n === 3) {
    scenes.push({
      title: headerTitle, formula: headerFormula,
      matrices: augSpec(n, stagePivot3Done(n)), layout,
      highlights: { G: { cells: [[2, 2, 'primary']] } },
      overlays: [],
      stepTitle: 'Pivot 3: normalize <i>R</i><sub>3</sub>, then zero column 3',
      stepFormula:
        'Divide row 3 by its leading entry; zero column 3 in rows 1 and 2. ' +
        'The left half is now the full identity. Entries reach their final form ' +
        '<i>a</i>&#8243;&prime;, <i>b</i>&#8243;&prime;, ...'
    });
  }

  // 6. Split: highlight right half
  const finalCells = [];
  for (let r = 0; r < n; r++) for (let c = n; c < 2 * n; c++) {
    finalCells.push([r, c, 'accent']);
  }
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: augSpec(n, stageFinal(n)), layout,
    highlights: { G: { cells: finalCells } },
    overlays: [],
    stepTitle: 'Left half is <i>I</i> &mdash; right half is <i>A</i><sup>&minus;1</sup>',
    stepFormula:
      'The right half of the augmented matrix has accumulated every row ' +
      'operation applied to <i>A</i>. Since those operations turned <i>A</i> ' +
      'into <i>I</i>, applying them to <i>I</i> produced exactly <i>A</i><sup>&minus;1</sup>.'
  });

  // 7. Outro
  scenes.push({
    title: headerTitle, formula: headerFormula,
    matrices: augSpec(n, stageFinal(n)), layout,
    highlights: {},
    overlays: [
      {
        type: 'group-bracket', matrices: ['G'],
        label: '[<i>I</i> | <i>A</i><sup>&minus;1</sup>]',
        style: 'accent', variant: 'solid',
        padding: 16, labelOffset: 8
      }
    ],
    stepTitle: 'Result &mdash; <i>A</i><sup>&minus;1</sup> is the right half',
    stepFormula:
      'The procedure works for any non-singular <i>A</i>. If at any pivot the ' +
      'leading entry is zero and no row below has a non-zero entry in that ' +
      'column, the matrix is singular and <i>A</i><sup>&minus;1</sup> does not exist.'
  });

  return scenes;
}