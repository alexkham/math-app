'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';

// ===========================================================
// GaussEliminationWrapper v1
// Runs Gaussian elimination on an augmented matrix [A | b], one
// elementary row operation per scene, in either of the two target
// forms the page is about:
//
//   mode 'ref'  — row echelon form. Forward pass only: find a
//                 pivot, swap it up if needed, clear everything
//                 BELOW it. Pivots are left as they are, because
//                 echelon form does not require leading 1s.
//   mode 'rref' — reduced row echelon form (Gauss-Jordan). Same
//                 forward pass, plus: scale each pivot row so the
//                 pivot is 1, and clear the entries ABOVE it too.
//
// The mode switch is the whole point of the tool: both runs share
// the same pivots and the same below-pivot eliminations, so the
// step log makes the extra Gauss-Jordan work visible as the scenes
// the reduced run has and the plain run does not.
//
// Scene phases:
//   intro | swap | pivot | scale | eliminate | eliminateAbove
//   | skip | done
// `scale` and `eliminateAbove` only ever occur in 'rref'.
//
// explanations prop (optional): { intro, swap, pivot, scale,
// eliminate, eliminateAbove, skip, done } — raw HTML appended to
// the caption of every scene of that phase.
//
// Arithmetic is guarded by EPS throughout: pivot search, the
// skip test, and a snap-to-zero after every row operation, so
// float dust never shows up as a pivot, a spurious operation, or
// a 1e-17 in a cell that should read 0.
//
// Standalone file: imports the core (ScenePlayer, formatNumber),
// never modifies it. buildScenes, PRESETS and randomSystem are
// exported for the frozen-state diagrams.
// ===========================================================

const mathInlineStyle = {
  fontFamily: '\'Cambria Math\', Georgia, serif',
  fontStyle: 'italic'
};

const chevButtonStyle = {
  background: 'transparent',
  border: 'none',
  padding: '0 2px',
  fontSize: '8px',
  color: '#64748b',
  cursor: 'pointer',
  lineHeight: 1,
  fontFamily: 'inherit'
};

const GAUSS_INFO =
  'Gaussian elimination clears the entries below each pivot, working left to ' +
  'right, until the matrix has a staircase of leading entries — row echelon ' +
  'form — which is solved bottom-up by back-substitution. Gauss-Jordan goes ' +
  'further: it scales every pivot to 1 and clears above them as well, giving ' +
  'reduced row echelon form, where the solution is simply the last column. ' +
  'Both use only the three elementary row operations, so the system the ' +
  'matrix describes never changes.';

const MODE_INFO =
  'Echelon form stops as soon as every entry below a pivot is 0. Reduced ' +
  'echelon form keeps going: each pivot is scaled to 1 and the entries above ' +
  'it are cleared too. Switch between them to see exactly which extra ' +
  'operations the reduced run performs — the step log is otherwise identical.';

const GE_CSS = `
  .ge-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .ge-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .ge-pill:hover { border-color: #94a3b8; }
  .ge-pill-active:hover { border-color: #2563eb; }

  .ge-cell-input {
    width: 44px; height: 32px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 14px;
    color: #0f172a; background: white; outline: none;
  }
  .ge-cell-input.ge-b { border-color: #f59e0b; background: #fffbeb; }
  .ge-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .ge-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .ge-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .ge-info:hover, .ge-info:focus { background: #bfdbfe; outline: none; }

  .ge-info .ge-tip {
    visibility: hidden; opacity: 0;
    position: absolute; top: calc(100% + 8px); left: 50%;
    transform: translateX(-50%);
    background: #1e293b; color: #f1f5f9;
    font-size: 12px; line-height: 1.5; font-weight: 400;
    padding: 9px 13px; border-radius: 6px;
    width: 320px; text-align: left;
    pointer-events: none;
    transition: opacity 0.12s ease, visibility 0.12s;
    z-index: 10;
    font-family: Arial, sans-serif;
    font-style: normal;
  }
  .ge-info .ge-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .ge-info:hover .ge-tip, .ge-info:focus .ge-tip {
    visibility: visible; opacity: 1;
  }

  /* Layout: a top band for the two pill groups, then the work area -
     input column on the left, scene player on the right. The matrix
     never exceeds 5x6, so the entry grid needs ~300px and has no
     business sitting above a half-empty canvas. */
  .ge-band {
    display: flex; flex-wrap: wrap; gap: 30px; align-items: flex-start;
    padding-bottom: 15px; margin-bottom: 16px;
    border-bottom: 1px solid #e9eef5;
  }
  .ge-work {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 24px;
    align-items: start;
  }
  .ge-side { min-width: 0; }
  .ge-shape-row {
    display: flex; align-items: center; justify-content: space-between;
    gap: 12px; margin-bottom: 6px;
  }
  .ge-dim { color: #94a3b8; font-size: 13px; }

  /* Below this the two columns would each be too narrow to be useful,
     so the input stacks above the player again. */
  @media (max-width: 900px) {
    .ge-work { grid-template-columns: minmax(0, 1fr); }
  }
`;

// -----------------------------------------------------------
// Presets — { A, b }, each chosen to exercise a different branch
// of the run.
// -----------------------------------------------------------
export const PRESETS = {
  swapFirst: {
    label: 'Starts with a swap',
    note: 'the top-left entry is 0, so a row swap comes first',
    A: [[0, 2, 1], [2, 4, 1], [1, 1, 3]], b: [4, 9, 8]
  },
  unitPivot: {
    label: 'Pivot already 1',
    note: 'no swap, and the first pivot needs no scaling',
    A: [[1, 1, 1], [2, -1, 1], [1, 2, -1]], b: [6, 3, 2]
  },
  freeVar: {
    label: 'Free variable',
    note: '2 equations, 3 unknowns: one column has no pivot',
    A: [[1, 2, -1], [2, 4, 1]], b: [3, 9]
  },
  inconsistent: {
    label: 'No solution',
    note: 'a row reduces to 0 = 1, so elimination proves it unsolvable',
    A: [[1, 1], [2, 2], [1, -1]], b: [2, 5, 0]
  },
  fourUnknowns: {
    label: '4 unknowns',
    note: 'a longer run, with fractions along the way',
    A: [[2, 1, -1, 3], [1, 0, 2, -1], [3, 2, 1, 0], [1, 1, 1, 1]], b: [2, 4, 3, 3]
  },
  zero: {
    label: 'Zero matrix',
    note: 'no pivot anywhere: already in echelon form, vacuously',
    A: [[0, 0, 0], [0, 0, 0]], b: [0, 0]
  }
};

export const DEFAULT_PRESET = 'swapFirst';

export const MODES = {
  ref: { label: 'Echelon form', note: 'clear below the pivots and stop' },
  rref: { label: 'Reduced echelon form', note: 'unit pivots, and clear above them too' }
};

export const DEFAULT_MODE = 'ref';

const EPS = 1e-9;
const SUBS = ['₁', '₂', '₃', '₄', '₅', '₆'];

// -----------------------------------------------------------
// Helpers
// -----------------------------------------------------------
function clone(M) {
  return M.map((row) => row.slice());
}

function fmt(v) {
  return formatNumber(v).replace(/-/g, '−');
}

function sizingFor(m, n) {
  const maxDim = Math.max(m, n + 1);
  if (maxDim <= 3) return { cellPx: 52, font: '15px' };
  if (maxDim === 4) return { cellPx: 46, font: '13.5px' };
  return { cellPx: 42, font: '12.5px' };
}

const B_STYLE = { color: '#b45309' };

function numCell(v, font, extra) {
  const text = fmt(v);
  const isFrac = text.includes('/');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: isFrac ? `calc(${font} * 0.8)` : font, ...(extra || {}) }
  };
}

function rowLabel(i) {
  return `R<sub>${i + 1}</sub>`;
}

function factorHtml(f) {
  // −(3/2)·R₁ reads better than −3/2·R₁
  const text = fmt(Math.abs(f));
  return text.includes('/') ? `(${text})` : text;
}

// A fractional divisor needs brackets or "R₂ / −1/2" reads as two
// divisions.
function divisorHtml(d) {
  const text = fmt(d);
  return text.includes('/') ? `(${text})` : text;
}

function listCols(cols) {
  return cols.map((c) => c + 1).join(', ');
}

function ordinal(k) {
  return ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][k] || `${k + 1}th`;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(Ain, bin, mode = DEFAULT_MODE) {
  const reduced = mode === 'rref';
  const m = Ain.length;
  const n = Ain[0].length;
  const { cellPx, font } = sizingFor(m, n);

  // The working augmented matrix. Every scene snapshots it, so the
  // canvas always shows the state *after* the operation named in the
  // caption.
  const M = Ain.map((row, i) => [...row, bin[i]]);

  const matM = () => ({
    symbol: 'a', rows: m, cols: n + 1, label: 'A | b',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < m; i++) {
        for (let j = 0; j <= n; j++) o[`${i},${j}`] = numCell(M[i][j], font, j === n ? B_STYLE : null);
      }
      return o;
    })()
  });

  const layout = [{ type: 'matrix', ref: 'M' }];
  const snap = () => ({ M: matM() });
  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: reduced
      ? `Reduce a ${m}×${n + 1} augmented matrix to reduced echelon form`
      : `Reduce a ${m}×${n + 1} augmented matrix to echelon form`,
    formula:
      'The coefficients sit on the left and the constants on the right, in amber — together they are ' +
      'the augmented matrix [A | b]. Working column by column, find a non-zero entry at or below the ' +
      'current row, swap it up if it sits lower, and clear the entries beneath it. ' +
      (reduced
        ? 'Because this is the <strong>reduced</strong> run, each pivot is also scaled to 1 and the entries ' +
          '<strong>above</strong> it are cleared, which is what turns the coefficient block into an identity block.'
        : 'That is all echelon form asks for: the run stops once every entry below a pivot is 0, leaving ' +
          'back-substitution to finish the job.') +
      ' Only the three elementary row operations are used, and each one is reversible, so every stage ' +
      'describes exactly the same system as the one you typed in.',
    matrices: snap(),
    layout,
    highlights: { M: { cols: [[n, 'muted']] } }
  });

  let r = 0;
  const pivotCols = [];
  const pivotRows = [];

  for (let j = 0; j < n && r < m; j++) {
    // ---- find a pivot at or below row r --------------------
    let p = -1;
    for (let i = r; i < m; i++) {
      if (Math.abs(M[i][j]) > EPS) { p = i; break; }
    }

    if (p === -1) {
      const cells = [];
      for (let i = r; i < m; i++) cells.push([i, j, 'muted']);
      scenes.push({
        phase: 'skip',
        title: `Column ${j + 1}: no pivot`,
        formula:
          `Every entry of column ${j + 1} from row ${r + 1} down is already 0, so there is nothing to ` +
          'pivot on and nothing to eliminate. The column is skipped and the current row does not advance — ' +
          `the next pivot will be further to the right, on the same row. x<sub>${j + 1}</sub> is a ` +
          '<strong>free variable</strong>: no equation from here on pins it down.',
        matrices: snap(),
        layout,
        highlights: { M: { cells } }
      });
      continue;
    }

    // ---- swap it up ----------------------------------------
    if (p !== r) {
      const tmp = M[p]; M[p] = M[r]; M[r] = tmp;
      scenes.push({
        phase: 'swap',
        title: `Swap ${rowLabel(r)} ↔ ${rowLabel(p)}`,
        formula:
          `Row ${r + 1} has a 0 in column ${j + 1}, but row ${p + 1} does not. Swapping the two rows brings ` +
          `${fmt(M[r][j])} up into the pivot position. A swap only reorders the equations, so it cannot ` +
          'change the solution set — and it undoes itself, which is why it is a legal row operation.',
        matrices: snap(),
        layout,
        highlights: { M: { rows: [[r, 'primary'], [p, 'secondary']] } }
      });
    }

    // ---- name the pivot ------------------------------------
    pivotCols.push(j);
    pivotRows.push(r);
    const count = pivotCols.length;

    // What this pivot actually has left to do, so the caption never
    // promises work that will not happen (a last pivot with nothing
    // below it, or a column that is already clear).
    const targets = [];
    for (let k = reduced ? 0 : r + 1; k < m; k++) {
      if (k !== r && Math.abs(M[k][j]) > EPS) targets.push(k);
    }
    const nTargets = targets.length;
    const countWord = nTargets === 1 ? 'one' : String(nTargets);
    const entryWord = nTargets === 1 ? 'entry' : 'entries';
    let plan;
    if (reduced) {
      plan =
        (Math.abs(M[r][j] - 1) > EPS ? 'It will now be scaled to 1' : 'It is already 1') +
        (nTargets
          ? `, and the ${countWord} other non-zero ${entryWord} in its column cleared.`
          : ', and the rest of its column is already 0.');
    } else {
      plan = nTargets
        ? `The ${countWord} non-zero ${entryWord} below it will now be cleared.`
        : 'Everything below it is already 0, so there is nothing left to eliminate here.';
    }

    scenes.push({
      phase: 'pivot',
      title: `Pivot ${count}: ${fmt(M[r][j])} at row ${r + 1}, column ${j + 1}`,
      formula:
        `${fmt(M[r][j])} is the leading entry of row ${r + 1}, so it is the ${ordinal(count - 1)} pivot` +
        (count > 1
          ? `, one row down and at least one column right of the previous one — that is the staircase echelon form is named for.`
          : '.') +
        ` Column ${j + 1} is a pivot column, and x<sub>${j + 1}</sub> is a <strong>leading variable</strong>. ` +
        plan,
      matrices: snap(),
      layout,
      highlights: { M: { cells: [[r, j, 'accent']], rows: [[r, 'primary']] } }
    });

    // ---- scale to a leading 1 (reduced run only) -----------
    if (reduced && Math.abs(M[r][j] - 1) > EPS) {
      const d = M[r][j];
      for (let c = 0; c <= n; c++) {
        M[r][c] = M[r][c] / d;
        if (Math.abs(M[r][c]) < EPS) M[r][c] = 0;
      }
      scenes.push({
        phase: 'scale',
        title: `${rowLabel(r)} ← ${rowLabel(r)} / ${divisorHtml(d)}`,
        formula:
          `Divide every entry of row ${r + 1} by its pivot ${fmt(d)}, constant included, so the pivot ` +
          'becomes a <strong>leading 1</strong>. The divisor is non-zero, so the equation still says the ' +
          'same thing — and a unit pivot is what lets the constant on the right be read off as the value ' +
          'of the variable at the end. Echelon form does not require this; reduced echelon form does.',
        matrices: snap(),
        layout,
        highlights: { M: { cells: [[r, j, 'accent']], rows: [[r, 'primary']] } }
      });
    }

    // ---- eliminate -----------------------------------------
    // Plain run clears below the pivot; the reduced run clears the
    // whole column, above and below, in one sweep.
    for (let k = reduced ? 0 : r + 1; k < m; k++) {
      if (k === r) continue;
      if (Math.abs(M[k][j]) <= EPS) continue;

      const f = M[k][j] / M[r][j];
      const before = fmt(M[k][j]);
      const pivotVal = fmt(M[r][j]);
      const pivotIsOne = Math.abs(M[r][j] - 1) < EPS;
      for (let c = 0; c <= n; c++) {
        M[k][c] = M[k][c] - f * M[r][c];
        if (Math.abs(M[k][c]) < EPS) M[k][c] = 0;
      }
      // A negative factor means the operation is an addition. Say so:
      // the title already carries the sign, and a caption reading
      // "subtract" under a title reading "+" is just wrong.
      const negative = f < 0;
      const sign = negative ? '+' : '−';
      const verb = negative ? 'add' : 'subtract';
      const prep = negative ? 'to' : 'from';
      const above = k < r;
      // A factor of ±1 is left implicit: "R₂ − R₁", not "R₂ − 1·R₁".
      const unitFactor = Math.abs(Math.abs(f) - 1) < EPS;
      const term = unitFactor ? rowLabel(r) : `${factorHtml(f)}·${rowLabel(r)}`;
      // Once a pivot has been scaled to 1 the ratio is the entry itself,
      // so "1/2 / 1 = 1/2" would just be noise.
      const factorSentence = pivotIsOne
        ? `The pivot is 1, so the factor is that entry itself, ${fmt(f)}`
        : `The factor is that entry over the pivot, ${before} / ${pivotVal} = ${fmt(f)}`;
      const action = unitFactor
        ? `${verb} the pivot row ${prep} row ${k + 1}`
        : `${verb} ${factorHtml(f)} times the pivot row ${prep} row ${k + 1}`;
      scenes.push({
        phase: above ? 'eliminateAbove' : 'eliminate',
        title: `${rowLabel(k)} ← ${rowLabel(k)} ${sign} ${term}`,
        formula:
          `Row ${k + 1} has ${before} ${above ? 'above' : 'below'} the pivot. ${factorSentence}, so ` +
          `${action} and the entry becomes 0. The constant on the right moves with the rest of ` +
          'the row, because the operation acts on the whole equation. Note that only row ' + (k + 1) +
          ' changes: the pivot row is the instrument, not the target, and it comes through untouched.' +
          (above
            ? ' <strong>This is the step the plain echelon run never takes.</strong>'
            : ''),
        matrices: snap(),
        layout,
        highlights: { M: { cells: [[k, j, 'accent']], rows: [[r, 'primary'], [k, 'secondary']] } }
      });
    }

    r++;
  }

  // ---- final scene -----------------------------------------
  const rank = pivotCols.length;
  const free = [];
  for (let j = 0; j < n; j++) if (!pivotCols.includes(j)) free.push(j);

  let badRow = -1;
  for (let i = 0; i < m; i++) {
    let allZero = true;
    for (let j = 0; j < n; j++) if (Math.abs(M[i][j]) > EPS) { allZero = false; break; }
    if (allZero && Math.abs(M[i][n]) > EPS) { badRow = i; break; }
  }

  const pivotHl = pivotCols.map((c, k) => [pivotRows[k], c, 'accent']);
  const doneHl = { M: { cells: [...pivotHl] } };
  if (badRow !== -1) {
    doneHl.M.rows = [[badRow, 'secondary']];
    doneHl.M.cells = [...pivotHl, [badRow, n, 'accent']];
  }

  let verdict;
  if (badRow !== -1) {
    verdict =
      `But look at row ${badRow + 1}: every coefficient is 0 and the constant is ${fmt(M[badRow][n])}, ` +
      `the equation <strong>0 = ${fmt(M[badRow][n])}</strong>. No choice of unknowns satisfies that, so the ` +
      'system has <strong>no solution</strong>. Elimination did not lose it — the contradiction was in the ' +
      'equations all along, and reducing the matrix is what brought it into view.';
  } else if (rank === 0) {
    verdict =
      'There was no pivot anywhere, so nothing was eliminated. A zero coefficient matrix is already in ' +
      'echelon form and in reduced echelon form — vacuously, since there are no pivots for any of the ' +
      'rules to be violated by. Every variable is free.';
  } else if (free.length > 0) {
    verdict =
      `Column${free.length === 1 ? '' : 's'} ${listCols(free)} never took a pivot, so ` +
      `x<sub>${free.map((f) => f + 1).join('</sub>, x<sub>')}</sub> ${free.length === 1 ? 'is a free variable' : 'are free variables'}: ` +
      `each can take any value, and the system has <strong>infinitely many solutions</strong>. Rank ${rank} ` +
      `with ${n} unknowns leaves ${free.length} degree${free.length === 1 ? '' : 's'} of freedom.`;
  } else {
    const x = new Array(n).fill(0);
    if (reduced) {
      for (let k = 0; k < rank; k++) x[pivotCols[k]] = M[pivotRows[k]][n];
    } else {
      // back-substitution, bottom row upward
      for (let k = rank - 1; k >= 0; k--) {
        const row = pivotRows[k];
        const col = pivotCols[k];
        let s = M[row][n];
        for (let c = col + 1; c < n; c++) s -= M[row][c] * x[c];
        x[col] = s / M[row][col];
        if (Math.abs(x[col]) < EPS) x[col] = 0;
      }
    }
    verdict = reduced
      ? 'The coefficient block is the identity, so each row reads <strong>x<sub>j</sub> = constant</strong> ' +
        `and the answer is simply the last column: x = (${x.map(fmt).join(', ')}). No arithmetic is left to do.`
      : `The bottom row gives one unknown outright, and each row above it falls out once the rows below are ` +
        `known. That is back-substitution, and it yields x = (${x.map(fmt).join(', ')}). ` +
        'The reduced run would have done this bookkeeping for you, at the cost of the extra operations.';
  }

  scenes.push({
    phase: 'done',
    title: reduced ? 'Reduced row echelon form' : 'Row echelon form',
    formula:
      (reduced
        ? `Every pivot is 1, every other entry of a pivot column is 0, and the pivots step to the right as ` +
          'you go down. That is reduced row echelon form, and unlike echelon form it is unique: this is the ' +
          'only reduced form this matrix can have, whatever order the operations were done in. '
        : `Every entry below a pivot is 0 and the leading entries step strictly to the right as you go down, ` +
          'with any all-zero rows at the bottom. That is row echelon form. The pivots were left as they ' +
          'are, because echelon form does not require leading 1s. ') +
      `There ${rank === 1 ? 'is 1 pivot' : `are ${rank} pivots`}` +
      (rank > 0 ? `, in column${rank === 1 ? '' : 's'} ${listCols(pivotCols)}, so rank A = ${rank}. ` : `, so rank A = 0. `) +
      verdict,
    matrices: snap(),
    layout,
    highlights: doneHl
  });

  return scenes;
}

// -----------------------------------------------------------
// Random system: small integers built around a chosen integer
// solution, so the run usually lands on readable numbers. A
// dependent row is planted half the time, which is what produces
// free variables and inconsistent rows.
// -----------------------------------------------------------
export function randomSystem(m, n) {
  const rnd = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1));
  const A = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(rnd(-3, 3));
    A.push(row);
  }
  const x = [];
  for (let j = 0; j < n; j++) x.push(rnd(-2, 2));
  const b = [];
  for (let i = 0; i < m; i++) {
    let s = 0;
    for (let j = 0; j < n; j++) s += A[i][j] * x[j];
    b.push(s);
  }
  if (m >= 2 && Math.random() < 0.5) {
    const a = rnd(0, m - 1);
    let c = rnd(0, m - 1);
    if (c === a) c = (a + 1) % m;
    const k = [-2, -1, 1, 2][rnd(0, 3)];
    for (let j = 0; j < n; j++) A[c][j] = k * A[a][j];
    b[c] = k * b[a] + (Math.random() < 0.5 ? 0 : rnd(1, 3));
  }
  return { A, b };
}

function resize(A, b, m, n) {
  const outA = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(A[i] && A[i][j] !== undefined ? A[i][j] : (i === j ? 1 : 0));
    outA.push(row);
  }
  const outB = [];
  for (let i = 0; i < m; i++) outB.push(b[i] !== undefined ? b[i] : 0);
  return { A: outA, b: outB };
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="ge-info"
      tabIndex={0}
      aria-label="More info"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#dbeafe',
        color: '#1e40af',
        fontSize: '11px',
        fontWeight: 700,
        cursor: 'help',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1,
        userSelect: 'none',
        flexShrink: 0
      }}
    >
      ?
      <span className="ge-tip">{tip}</span>
    </span>
  );
}

function FieldLabel({ children, info }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      margin: '0 0 10px'
    }}>
      <span style={{
        fontSize: '16px',
        color: '#1e40af',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        lineHeight: 1.2
      }}>
        {children}
      </span>
      {info && <InfoIcon tip={info} />}
    </div>
  );
}

function Stepper({ value, onChange, min, max }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 6px 4px 10px',
      borderRadius: '6px',
      background: 'white',
      border: '1px solid #cbd5e1'
    }}>
      <span style={{
        ...mathInlineStyle,
        fontWeight: 500,
        minWidth: '10px',
        textAlign: 'center',
        color: '#0f172a'
      }}>
        {value}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
        <button
          className="ge-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="ge-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >&#9660;</button>
      </span>
    </span>
  );
}

function Pill({ active, onClick, children, title }) {
  return (
    <button
      className={active ? 'ge-pill ge-pill-active' : 'ge-pill'}
      onClick={onClick}
      title={title}
      style={{
        fontSize: '13px',
        padding: '6px 12px',
        borderRadius: '999px',
        background: active ? '#dbeafe' : 'white',
        border: `1px solid ${active ? '#2563eb' : '#cbd5e1'}`,
        cursor: 'pointer',
        color: active ? '#1e40af' : '#334155',
        fontWeight: active ? 600 : 'normal',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {children}
    </button>
  );
}

// ===========================================================
// Main wrapper
// ===========================================================
export default function GaussEliminationWrapper({
  defaultPreset = DEFAULT_PRESET,
  defaultMode = DEFAULT_MODE,
  rowRange = [1, 2, 3, 4, 5],
  colRange = [1, 2, 3, 4, 5],
  explanations = null,
  title = 'Gaussian Elimination',
  subtitle = 'Row reduce [A | b] one elementary operation at a time, to echelon form or all the way to reduced echelon form — with an editable matrix, presets and a shuffle.',
  defaultSpeed = 1500,
  // The tool is self-limiting: dropped into a full-bleed container it
  // centres itself rather than stretching to the viewport and sliding
  // under the site's fixed right-hand sidebar rail. Wide enough that the
  // control panel stays on one band instead of wrapping. Pass a different
  // value, or null, to let the host page decide instead.
  maxWidth = '1500px'
}) {
  const initial = PRESETS[defaultPreset] || PRESETS[DEFAULT_PRESET];
  const [A, setA] = useState(() => clone(initial.A));
  const [b, setB] = useState(() => initial.b.slice());
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
  const [mode, setMode] = useState(MODES[defaultMode] ? defaultMode : DEFAULT_MODE);
  // Raw text per cell while the user is typing, so "-" or an emptied
  // field is not snapped to 0 mid-edit. Cleared whenever the matrix
  // is replaced.
  const [drafts, setDrafts] = useState({});

  const m = A.length;
  const n = A[0].length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setA(clone(PRESETS[key].A));
    setB(PRESETS[key].b.slice());
  }, []);

  const setRows = (mm) => { setPreset(null); setDrafts({}); const r = resize(A, b, mm, n); setA(r.A); setB(r.b); };
  const setCols = (nn) => { setPreset(null); setDrafts({}); const r = resize(A, b, m, nn); setA(r.A); setB(r.b); };
  const shuffle = () => { setPreset(null); setDrafts({}); const s = randomSystem(m, n); setA(s.A); setB(s.b); };

  const parse = (raw) => {
    const num = parseFloat(raw);
    if (Number.isFinite(num)) return num;
    if (raw === '' || raw === '-' || raw === '−') return 0;
    return null;
  };
  const editA = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`a${i},${j}`]: raw }));
    const v = parse(raw);
    if (v !== null) setA((M) => { const next = clone(M); next[i][j] = v; return next; });
  };
  const editB = (i, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`b${i}`]: raw }));
    const v = parse(raw);
    if (v !== null) setB((vec) => { const next = vec.slice(); next[i] = v; return next; });
  };
  const commit = (key) => setDrafts((d) => { const next = { ...d }; delete next[key]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(A, b, mode);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [A, b, mode, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      maxWidth: maxWidth || undefined,
      margin: '0 auto',
      boxSizing: 'border-box',
      minWidth: 0
    }}>
      <style dangerouslySetInnerHTML={{ __html: GE_CSS }} />

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Band: the two pill groups, which are wide and rarely touched */}
      <div className="ge-band">
        <div>
          <FieldLabel info={MODE_INFO}>Target form</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {Object.keys(MODES).map((key) => (
              <Pill key={key} active={mode === key} onClick={() => setMode(key)} title={MODES[key].note}>
                {MODES[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel info={GAUSS_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '560px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>
      </div>

      {/* Work area: shape + entries on the left, the run on the right */}
      <div className="ge-work">
        <div className="ge-side">
          <FieldLabel>Shape</FieldLabel>
          <div className="ge-shape-row">
            <span className="ge-dim">equations</span>
            <Stepper value={m} onChange={setRows} min={rowRange[0]} max={rowRange[rowRange.length - 1]} />
          </div>
          <div className="ge-shape-row">
            <span className="ge-dim">unknowns</span>
            <Stepper value={n} onChange={setCols} min={colRange[0]} max={colRange[colRange.length - 1]} />
          </div>
          <button className="ge-btn" onClick={shuffle} style={{ width: '100%', marginTop: '2px' }}>
            Shuffle
          </button>

          <div style={{ marginTop: '18px' }}>
            <FieldLabel>A | b</FieldLabel>
            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
              {A.map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {row.map((val, j) => (
                    <input
                      key={j}
                      className="ge-cell-input"
                      type="text"
                      inputMode="decimal"
                      value={drafts[`a${i},${j}`] !== undefined ? drafts[`a${i},${j}`] : String(val)}
                      onChange={(e) => editA(i, j, e.target.value)}
                      onBlur={() => commit(`a${i},${j}`)}
                      aria-label={`A entry ${i + 1},${j + 1}`}
                    />
                  ))}
                  <span style={{ color: '#94a3b8', margin: '0 4px' }}>|</span>
                  <input
                    className="ge-cell-input ge-b"
                    type="text"
                    inputMode="decimal"
                    value={drafts[`b${i}`] !== undefined ? drafts[`b${i}`] : String(b[i])}
                    onChange={(e) => editB(i, e.target.value)}
                    onBlur={() => commit(`b${i}`)}
                    aria-label={`b entry ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ minWidth: 0 }}>
          <ScenePlayer
            scenes={scenes}
            defaultSpeed={defaultSpeed}
            showSpeedSelector={true}
            showStepIndicator={true}
            showStepLog={true}
            stepLogTitle="Row operations"
            sceneCanvasProps={{ showCaption: false, minHeight: 240 }}
          />
        </div>
      </div>
    </div>
  );
}
