'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';
import { rref, tidy } from './EigenWrapper';

// ===========================================================
// SubspacesWrapper v1
// The four fundamental subspaces of a numeric m×n matrix (m, n ≤ 4),
// read from one row reduction:
//
//   rref      : A → R, pivots and free columns, rank r
//   colspace  : the pivot COLUMNS OF A span C(A), dim r
//   rowspace  : the non-zero ROWS OF R span C(Aᵀ), dim r
//   nullspace : one special solution per free column, dim n − r,
//               checked by A N = 0
//   leftnull  : null space of Aᵀ, dim m − r, checked by Aᵀ L = 0
//   orth      : row space ⟂ null space, column space ⟂ left null space
//   done      : the dimension count r + (n − r) = n, r + (m − r) = m
//
// Standalone file: imports the core (ScenePlayer, formatNumber) and
// rref / tidy from EigenWrapper; modifies nothing. buildScenes and
// PRESETS are exported for the frozen-state diagrams.
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

const SUB_INFO =
  'An m×n matrix has four subspaces attached to it. The column space, in Rᵐ, ' +
  'is everything A can output; the null space, in Rⁿ, is everything A sends ' +
  'to zero. The row space, in Rⁿ, is spanned by the rows, and the left null ' +
  'space, in Rᵐ, is the null space of Aᵀ. Row reduction finds all four: the ' +
  'rank r is the number of pivots, the column space has dimension r, the null ' +
  'space n − r, the row space r, the left null space m − r. Row space and null ' +
  'space are perpendicular complements in Rⁿ; column space and left null ' +
  'space are perpendicular complements in Rᵐ.';

const SUB_CSS = `
  .sb-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .sb-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .sb-pill:hover { border-color: #94a3b8; }
  .sb-pill-active:hover { border-color: #2563eb; }

  .sb-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .sb-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .sb-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .sb-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .sb-info:hover, .sb-info:focus { background: #bfdbfe; outline: none; }

  .sb-info .sb-tip {
    visibility: hidden; opacity: 0;
    position: absolute; top: calc(100% + 8px); left: 50%;
    transform: translateX(-50%);
    background: #1e293b; color: #f1f5f9;
    font-size: 12px; line-height: 1.5; font-weight: 400;
    padding: 9px 13px; border-radius: 6px;
    width: 340px; text-align: left;
    pointer-events: none;
    transition: opacity 0.12s ease, visibility 0.12s;
    z-index: 10;
    font-family: Arial, sans-serif;
    font-style: normal;
  }
  .sb-info .sb-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .sb-info:hover .sb-tip, .sb-info:focus .sb-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  rank2: {
    label: '3×3, rank 2',
    note: 'third row is the sum of the first two: every subspace non-trivial',
    values: [[1, 2, 1], [2, 4, 3], [3, 6, 4]]
  },
  rankOne: {
    label: 'Rank one',
    note: 'all rows multiples of (1, 2, 3): null space is a plane',
    values: [[1, 2, 3], [2, 4, 6]]
  },
  wide: {
    label: 'Wide 2×3',
    note: 'full row rank: left null space is {0}',
    values: [[1, 1, 0], [0, 1, 1]]
  },
  tall: {
    label: 'Tall 3×2',
    note: 'full column rank: null space is {0}',
    values: [[1, 0], [1, 1], [0, 1]]
  },
  invertible: {
    label: 'Invertible',
    note: 'rank 2 of 2: both null spaces are {0}',
    values: [[2, 1], [1, 3]]
  },
  fourByThree: {
    label: '4×3, rank 2',
    note: 'two dependent rows and one dependent column',
    values: [[1, 1, 2], [2, 2, 4], [1, 0, 1], [0, 1, 1]]
  },
  zero: {
    label: 'Zero',
    note: 'rank 0: null spaces are everything',
    values: [[0, 0, 0], [0, 0, 0]]
  }
};

export const DEFAULT_PRESET = 'rank2';

// -----------------------------------------------------------
// Numeric helpers
// -----------------------------------------------------------
function clone(M) {
  return M.map((row) => row.slice());
}

function snap(x) {
  for (const d of [1, 2, 3, 4, 5, 6, 8, 10, 12]) {
    const r = Math.round(x * d) / d;
    if (Math.abs(r - x) < 1e-7) return r;
  }
  return Math.round(x * 1e6) / 1e6;
}

function fmt(v) {
  return formatNumber(snap(v)).replace(/-/g, '−');
}

function transpose(M) {
  return M[0].map((_, j) => M.map((row) => row[j]));
}

function matMul(X, Y) {
  return X.map((row) => Y[0].map((_, j) => row.reduce((s, x, k) => s + x * Y[k][j], 0)));
}

function dot(u, v) {
  return u.reduce((s, x, i) => s + x * v[i], 0);
}

function vecStr(v) {
  return `(${v.map(fmt).join(', ')})`;
}

// null space of any m×n matrix from its rref: one special solution per free column
export function nullOf(M) {
  const cols = M[0].length;
  const { R, pivotCols } = rref(M);
  const free = [];
  for (let j = 0; j < cols; j++) if (!pivotCols.includes(j)) free.push(j);
  const vecs = free.map((f) => {
    const v = new Array(cols).fill(0);
    v[f] = 1;
    pivotCols.forEach((c, k) => { v[c] = -R[k][f]; });
    return tidy(v);
  });
  return { R, pivotCols, free, vecs };
}

function sizingFor(maxDim, wide) {
  if (maxDim <= 2) return { cellPx: wide ? 50 : 56, font: wide ? '14px' : '16px' };
  if (maxDim === 3) return { cellPx: wide ? 42 : 48, font: wide ? '12.5px' : '14px' };
  return { cellPx: wide ? 36 : 42, font: wide ? '12px' : '13px' };
}

function numCell(v, font, extra) {
  const text = fmt(v);
  const small = text.includes('/') || text.includes('.');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: small ? `calc(${font} * 0.78)` : font, ...(extra || {}) }
  };
}

function numMatrix(symbol, M, label, cellPx, font, opts) {
  const n = M.length, m = M[0].length;
  const o = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const extra = opts && opts.cellStyle ? opts.cellStyle(i, j) : null;
      o[`${i},${j}`] = numCell(M[i][j], font, extra);
    }
  }
  return { symbol, rows: n, cols: m, label, cellSize: cellPx, cellOverrides: o, ...(opts && opts.spec ? opts.spec : {}) };
}

function emptyMatrix(symbol, rows, cols, label, cellPx, text) {
  const o = {};
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) o[`${i},${j}`] = { display: text || '0', fontStyle: 'normal', style: { color: '#94a3b8' } };
  return { symbol, rows, cols, label, cellSize: cellPx, cellOverrides: o };
}

const allCells = (rows, cols, style) => {
  const out = [];
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) out.push([i, j, style]);
  return out;
};

const SUBS = ['₁', '₂', '₃', '₄'];

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values) {
  const A = clone(values);
  const m = A.length, n = A[0].length;
  const maxDim = Math.max(m, n);
  const narrow = sizingFor(maxDim, false);
  const wide = sizingFor(maxDim, true);
  const matA = (sz, opts) => numMatrix('a', A, 'A', sz.cellPx, sz.font, opts);

  const ns = nullOf(A);
  const R = ns.R;
  const r = ns.pivotCols.length;
  const At = transpose(A);
  const lns = nullOf(At);

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `The four fundamental subspaces of a ${m}×${n} matrix`,
    formula:
      `A maps Rⁿ = R${sup(n)} to Rᵐ = R${sup(m)}. Two subspaces live in the input space R${sup(n)}: the <strong>row space</strong>, ` +
      'spanned by the rows, and the <strong>null space</strong>, the solutions of Ax = 0. Two live in the output space ' +
      `R${sup(m)}: the <strong>column space</strong>, spanned by the columns — everything A can produce — and the ` +
      '<strong>left null space</strong>, the solutions of Aᵀy = 0. One row reduction finds a basis for each and ' +
      'the rank r that fixes all four dimensions.',
    matrices: { A: matA(narrow) },
    layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {}
  });

  const pivotHl = ns.pivotCols.map((c, k) => [k, c, 'accent']);
  const freeHl = ns.free.flatMap((f) => Array.from({ length: m }, (_, i) => [i, f, 'secondary']));
  scenes.push({
    phase: 'rref',
    title: `Row reduce: rank r = ${r}`,
    formula:
      `Reduce A to its reduced row echelon form R. There ${r === 1 ? 'is' : 'are'} ${r} pivot${r === 1 ? '' : 's'}` +
      (r ? `, in column${ns.pivotCols.length === 1 ? '' : 's'} ${ns.pivotCols.map((c) => c + 1).join(', ')}` : '') +
      `, so the rank is r = ${r}` +
      (ns.free.length ? `; column${ns.free.length === 1 ? '' : 's'} ${ns.free.map((c) => c + 1).join(', ')} ${ns.free.length === 1 ? 'is' : 'are'} free` : '; there are no free columns') +
      `. Row operations change the rows but not the row space, and change the columns but not which columns are ` +
      'independent, so R answers every question about the four subspaces.',
    matrices: { A: matA(narrow), R: numMatrix('r', R, 'R = rref(A)', narrow.cellPx, narrow.font) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: { R: { cells: [...freeHl, ...pivotHl] } }
  });

  // column space: pivot columns of A
  const C = r ? A.map((row) => ns.pivotCols.map((c) => row[c])) : null;
  scenes.push({
    phase: 'colspace',
    title: `Column space C(A): dimension ${r}, in R${sup(m)}`,
    formula:
      (r
        ? `The pivot column${r === 1 ? '' : 's'} of A — ${r === 1 ? 'the original column' : 'the original columns'}, not of R — form a basis: ` +
          `${ns.pivotCols.map((c, k) => `c${SUBS[k]} = ${vecStr(A.map((row) => row[c]))}`).join(', ')}. `
        : 'A has no pivots, so its column space is just {0}. ') +
      (ns.free.length
        ? `The free column${ns.free.length === 1 ? '' : 's'} ${ns.free.length === 1 ? 'is' : 'are'} ` +
          `${ns.free.map((f) => `column ${f + 1} = ${ns.pivotCols.map((c, k) => (Math.abs(R[k][f]) > 1e-9 ? `${fmt(R[k][f])}·c${SUBS[k]}` : null)).filter(Boolean).join(' + ') || '0'}`).join('; ')}, ` +
          'read straight from R. '
        : 'Every column is a pivot column: the columns are independent. ') +
      'The column space is the set of all b for which Ax = b is solvable.',
    matrices: {
      A: matA(narrow, { cellStyle: (i, j) => (ns.pivotCols.includes(j) ? null : { color: '#94a3b8' }) }),
      ...(C ? { C: numMatrix('c', C, 'basis of C(A)', narrow.cellPx, narrow.font) } : {})
    },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      ...(C ? [{ type: 'matrix', ref: 'C' }] : [{ type: 'operator', symbol: '{0}', size: 18 }])
    ],
    highlights: {
      A: { cols: ns.pivotCols.map((c) => [c, 'accent']) },
      ...(C ? { C: { cells: allCells(m, r, 'accent') } } : {})
    }
  });

  // row space: non-zero rows of R
  const rows = R.slice(0, r);
  scenes.push({
    phase: 'rowspace',
    title: `Row space C(Aᵀ): dimension ${r}, in R${sup(n)}`,
    formula:
      (r
        ? `The non-zero row${r === 1 ? '' : 's'} of R form a basis: ${rows.map((row, k) => `r${SUBS[k]} = ${vecStr(row)}`).join(', ')}. ` +
          'Row operations replace rows by combinations of rows, so the row space of R equals the row space of A; the reduced rows ' +
          'are simply the tidiest basis of it. '
        : 'R has no non-zero rows: the row space is {0}. ') +
      `Row space and column space always have the same dimension, the rank ${r}, even though they live in different spaces` +
      (m !== n ? ` (R${sup(n)} and R${sup(m)})` : '') + '.',
    matrices: {
      R: numMatrix('r', R, 'R', narrow.cellPx, narrow.font, { cellStyle: (i) => (i < r ? null : { color: '#94a3b8' }) }),
      ...(r ? { B: numMatrix('b', rows, 'basis of C(Aᵀ), as rows', narrow.cellPx, narrow.font) } : {})
    },
    layout: [
      { type: 'matrix', ref: 'R' },
      { type: 'operator', symbol: '→' },
      ...(r ? [{ type: 'matrix', ref: 'B' }] : [{ type: 'operator', symbol: '{0}', size: 18 }])
    ],
    highlights: {
      R: { rows: rows.map((_, k) => [k, 'primary']) },
      ...(r ? { B: { cells: allCells(r, n, 'primary') } } : {})
    }
  });

  // null space
  const N = ns.vecs.length ? A[0].map((_, i) => ns.vecs.map((v) => v[i])) : null;
  const AN = N ? matMul(A, N).map((row) => row.map(snap)) : null;
  scenes.push({
    phase: 'nullspace',
    title: `Null space N(A): dimension ${n - r}, in R${sup(n)}`,
    formula:
      (ns.vecs.length
        ? `One special solution per free column: set that free variable to 1, the other free variables to 0, and read the pivot ` +
          `variables from R. ${ns.vecs.map((v, k) => `n${SUBS[k]} = ${vecStr(v)}`).join(', ')}` +
          ' (scaled to integers). Check: A times each is the zero vector, as the product on the right shows. ' +
          `Every solution of Ax = 0 is a combination of these ${ns.vecs.length}.`
        : 'There are no free columns, so Ax = 0 has only the trivial solution: the null space is {0}. The columns of A are independent.') +
      ` Dimension n − r = ${n} − ${r} = ${n - r}.`,
    matrices: {
      R: numMatrix('r', R, 'R', wide.cellPx, wide.font),
      ...(N ? {
        A: matA(wide),
        N: numMatrix('n', N, 'basis of N(A)', wide.cellPx, wide.font),
        Z: numMatrix('z', AN, '0', wide.cellPx, wide.font, { cellStyle: () => ({ color: '#94a3b8' }) })
      } : {})
    },
    layout: N
      ? [
        { type: 'matrix', ref: 'R' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'A' },
        { type: 'matrix', ref: 'N' },
        { type: 'operator', symbol: '=' },
        { type: 'matrix', ref: 'Z' }
      ]
      : [{ type: 'matrix', ref: 'R' }, { type: 'operator', symbol: '→' }, { type: 'operator', symbol: '{0}', size: 18 }],
    highlights: {
      R: { cells: [...freeHl.map(([i, j]) => [i, j, 'secondary']), ...pivotHl] },
      ...(N ? { N: { cells: allCells(n, ns.vecs.length, 'secondary') }, Z: { cells: allCells(m, ns.vecs.length, 'target') } } : {})
    }
  });

  // left null space
  const L = lns.vecs.length ? At[0].map((_, i) => lns.vecs.map((v) => v[i])) : null;
  const AtL = L ? matMul(At, L).map((row) => row.map(snap)) : null;
  scenes.push({
    phase: 'leftnull',
    title: `Left null space N(Aᵀ): dimension ${m - r}, in R${sup(m)}`,
    formula:
      `The left null space is the null space of Aᵀ: the vectors y with Aᵀy = 0, equivalently yᵀA = 0 — combinations of the ` +
      'rows of A that give zero. Row reduce Aᵀ and read its special solutions. ' +
      (lns.vecs.length
        ? `${lns.vecs.map((v, k) => `l${SUBS[k]} = ${vecStr(v)}`).join(', ')}. Check: Aᵀ times each is zero. ` +
          (m - r === 1 ? `So ${vecStr(lns.vecs[0])} records the one dependency among the rows of A.` : `Each records a dependency among the rows of A.`)
        : 'Aᵀ has no free columns: the rows of A are independent and the left null space is {0}.') +
      ` Dimension m − r = ${m} − ${r} = ${m - r}.`,
    matrices: {
      AT: numMatrix('a', At, 'Aᵀ', wide.cellPx, wide.font),
      RT: numMatrix('r', lns.R, 'rref(Aᵀ)', wide.cellPx, wide.font),
      ...(L ? {
        L: numMatrix('l', L, 'basis of N(Aᵀ)', wide.cellPx, wide.font),
        Z: numMatrix('z', AtL, '0', wide.cellPx, wide.font, { cellStyle: () => ({ color: '#94a3b8' }) })
      } : {})
    },
    layout: L
      ? [
        { type: 'matrix', ref: 'AT' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'RT' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'L' },
        { type: 'operator', symbol: '·' },
        { type: 'matrix', ref: 'Z' }
      ]
      : [
        { type: 'matrix', ref: 'AT' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'RT' },
        { type: 'operator', symbol: '→' },
        { type: 'operator', symbol: '{0}', size: 18 }
      ],
    highlights: {
      RT: { cells: [...lns.pivotCols.map((c, k) => [k, c, 'accent']), ...lns.free.flatMap((f) => Array.from({ length: n }, (_, i) => [i, f, 'secondary']))] },
      ...(L ? { L: { cells: allCells(m, lns.vecs.length, 'muted') }, Z: { cells: allCells(n, lns.vecs.length, 'target') } } : {})
    }
  });

  // orthogonality
  const rowDotNull = (r && N) ? matMul(rows, N).map((row) => row.map(snap)) : null;
  const colDotLeft = (C && L) ? matMul(transpose(C), L).map((row) => row.map(snap)) : null;
  const orthMats = {};
  const orthLayout = [];
  const orthHl = {};
  if (rowDotNull) {
    orthMats.B = numMatrix('b', rows, 'rows of A', wide.cellPx, wide.font);
    orthMats.N = numMatrix('n', N, 'N(A)', wide.cellPx, wide.font);
    orthMats.Z1 = numMatrix('z', rowDotNull, '0', wide.cellPx, wide.font, { cellStyle: () => ({ color: '#94a3b8' }) });
    orthLayout.push({ type: 'matrix', ref: 'B' }, { type: 'matrix', ref: 'N' }, { type: 'operator', symbol: '=' }, { type: 'matrix', ref: 'Z1' });
    orthHl.B = { cells: allCells(r, n, 'primary') };
    orthHl.N = { cells: allCells(n, ns.vecs.length, 'secondary') };
    orthHl.Z1 = { cells: allCells(r, ns.vecs.length, 'target') };
  }
  if (colDotLeft) {
    if (orthLayout.length) orthLayout.push({ type: 'operator', symbol: 'and', size: 13 });
    orthMats.CT = numMatrix('c', transpose(C), 'C(A)ᵀ', wide.cellPx, wide.font);
    orthMats.L = numMatrix('l', L, 'N(Aᵀ)', wide.cellPx, wide.font);
    orthMats.Z2 = numMatrix('z', colDotLeft, '0', wide.cellPx, wide.font, { cellStyle: () => ({ color: '#94a3b8' }) });
    orthLayout.push({ type: 'matrix', ref: 'CT' }, { type: 'matrix', ref: 'L' }, { type: 'operator', symbol: '=' }, { type: 'matrix', ref: 'Z2' });
    orthHl.CT = { cells: allCells(r, m, 'accent') };
    orthHl.L = { cells: allCells(m, lns.vecs.length, 'muted') };
    orthHl.Z2 = { cells: allCells(r, lns.vecs.length, 'target') };
  }
  scenes.push({
    phase: 'orth',
    title: 'Two pairs of orthogonal complements',
    formula:
      'Every row of A dotted with every null-space vector is zero — that is what Ax = 0 says, row by row — so the row space ' +
      `and null space are perpendicular, and with dimensions ${r} + ${n - r} = ${n} they are orthogonal complements in R${sup(n)}. ` +
      'Likewise Aᵀy = 0 says every column of A is perpendicular to every left-null vector: the column space and left null ' +
      `space are orthogonal complements in R${sup(m)}, dimensions ${r} + ${m - r} = ${m}. ` +
      (orthLayout.length ? 'The products shown are the dot products, all zero.' : 'Here one space in each pair is {0}, so the complement is the whole space.'),
    matrices: orthLayout.length ? orthMats : { A: matA(narrow) },
    layout: orthLayout.length ? orthLayout : [{ type: 'matrix', ref: 'A' }],
    highlights: orthHl
  });

  // done
  scenes.push({
    phase: 'done',
    title: `r = ${r}: dimensions ${r}, ${n - r}, ${r}, ${m - r}`,
    formula:
      `Column space: dimension ${r} in R${sup(m)}. Null space: dimension ${n - r} in R${sup(n)}. Row space: dimension ${r} in R${sup(n)}. ` +
      `Left null space: dimension ${m - r} in R${sup(m)}. The two counts r + (n − r) = ${n} and r + (m − r) = ${m} are the ` +
      'rank–nullity theorem, once for A and once for Aᵀ. ' +
      (r === n && r === m ? 'Full rank and square: A is invertible, both null spaces are {0}, and Ax = b has exactly one solution for every b. '
        : r === n ? 'Full column rank: Ax = b has at most one solution, and exactly one when b is in the column space. '
          : r === m ? 'Full row rank: Ax = b is solvable for every b, with infinitely many solutions. '
            : 'Rank deficient: Ax = b is solvable only for b in the column space, and then has infinitely many solutions. ') +
      'Every x in Rⁿ splits uniquely into a row-space part plus a null-space part; A kills the second and maps the first ' +
      'one-to-one onto the column space.',
    matrices: { A: matA(narrow), R: numMatrix('r', R, 'R', narrow.cellPx, narrow.font) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: { A: { cols: ns.pivotCols.map((c) => [c, 'accent']) }, R: { rows: rows.map((_, k) => [k, 'primary']), cells: freeHl } }
  });

  return scenes;
}

const SUPS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
function sup(k) {
  return String(k).split('').map((ch) => SUPS[Number(ch)] || ch).join('');
}

export function randomMatrix(m, n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  // build with a planted dependency so the subspaces are usually non-trivial
  const A = Array.from({ length: m }, () => Array.from({ length: n }, () => rnd(-2, 3)));
  if (m > 1 && Math.random() < 0.7) {
    const a = rnd(0, m - 1); let b = rnd(0, m - 1); if (b === a) b = (a + 1) % m;
    const k = rnd(-2, 2) || 1;
    A[b] = A[a].map((x) => k * x);
  }
  return A;
}

function resize(M, m, n) {
  const out = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(M[i] && M[i][j] !== undefined ? M[i][j] : (i === j ? 1 : 0));
    out.push(row);
  }
  return out;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="sb-info"
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
      <span className="sb-tip">{tip}</span>
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
          className="sb-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="sb-stepper-btn"
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
      className={active ? 'sb-pill sb-pill-active' : 'sb-pill'}
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
export default function SubspacesWrapper({
  defaultPreset = DEFAULT_PRESET,
  dimRange = [2, 4],
  explanations = null,
  title = 'Four Fundamental Subspaces',
  subtitle = 'One row reduction gives a basis for the column space, row space, null space and left null space, and the rank fixes all four dimensions.',
  defaultSpeed = 1800
}) {
  const initial = PRESETS[defaultPreset] ? PRESETS[defaultPreset].values : PRESETS[DEFAULT_PRESET].values;
  const [values, setValues] = useState(() => clone(initial));
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
  const [drafts, setDrafts] = useState({});

  const m = values.length, n = values[0].length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setValues(clone(PRESETS[key].values));
  }, []);

  const setRows = (mm) => { setPreset(null); setDrafts({}); setValues((v) => resize(v, mm, v[0].length)); };
  const setCols = (nn) => { setPreset(null); setDrafts({}); setValues((v) => resize(v, v.length, nn)); };
  const shuffle = () => { setPreset(null); setDrafts({}); setValues(randomMatrix(m, n)); };

  const editCell = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`${i},${j}`]: raw }));
    const num = parseFloat(raw);
    const v = Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
    if (v !== null) setValues((M) => { const next = clone(M); next[i][j] = v; return next; });
  };
  const commitCell = (i, j) => setDrafts((d) => { const next = { ...d }; delete next[`${i},${j}`]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(values);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [values, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: SUB_CSS }} />

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Control panel */}
      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px',
        alignItems: 'flex-start'
      }}>
        <div>
          <FieldLabel info={SUB_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '440px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Size</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={m} onChange={setRows} min={dimRange[0]} max={dimRange[1]} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <Stepper value={n} onChange={setCols} min={dimRange[0]} max={dimRange[1]} />
            <button className="sb-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random small-integer matrix, usually with a dependent row">
              Shuffle
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>Entries of A</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {values.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px' }}>
                {row.map((val, j) => (
                  <input
                    key={j}
                    className="sb-cell-input"
                    type="text"
                    inputMode="decimal"
                    value={drafts[`${i},${j}`] !== undefined ? drafts[`${i},${j}`] : String(Number.isFinite(val) ? val : 0)}
                    onChange={(e) => editCell(i, j, e.target.value)}
                    onBlur={() => commitCell(i, j)}
                    aria-label={`entry ${i + 1},${j + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '18px' }}>
        <ScenePlayer
          scenes={scenes}
          defaultSpeed={defaultSpeed}
          showSpeedSelector={true}
          showStepIndicator={true}
          showStepLog={true}
          stepLogTitle="Step explanations"
          sceneCanvasProps={{ showCaption: false }}
        />
      </div>
    </div>
  );
}
