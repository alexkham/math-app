'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';
import { rref } from './EigenWrapper';

// ===========================================================
// LeastSquaresWrapper v1
// Least squares and projection onto the column space of a numeric
// m×n matrix A (m ≥ n), for a right-hand side b:
//
//   consistency : [A | b] row reduced — is b in C(A)?
//   normal      : form AᵀA and Aᵀb
//   singular    : terminal — dependent columns, AᵀA not invertible
//   solve       : AᵀA x̂ = Aᵀb solved by row reduction
//   project     : p = A x̂, the projection of b onto C(A)
//   residual    : e = b − p, with Aᵀe = 0 and |e|
//   projmatrix  : P = A (AᵀA)⁻¹ Aᵀ, with P b = p and P² = P
//   done        : the fitted line / curve when A is a design matrix
//
// Standalone file: imports the core (ScenePlayer, formatNumber) and
// rref from EigenWrapper; modifies nothing. buildScenes and PRESETS
// are exported for the frozen-state diagrams.
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

const LS_INFO =
  'When Ax = b has no solution — b is not in the column space of A — the ' +
  'least-squares solution x̂ makes Ax̂ as close to b as possible. The closest ' +
  'point is the projection p of b onto the column space, and the error ' +
  'e = b − p is perpendicular to every column: Aᵀ(b − Ax̂) = 0, the normal ' +
  'equations AᵀA x̂ = Aᵀb. When the columns are independent AᵀA is invertible ' +
  'and P = A(AᵀA)⁻¹Aᵀ is the projection matrix.';

const LS_CSS = `
  .ls-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .ls-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .ls-pill:hover { border-color: #94a3b8; }
  .ls-pill-active:hover { border-color: #2563eb; }

  .ls-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .ls-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }
  .ls-cell-input.ls-b { border-color: #fbbf24; background: #fffbeb; }

  .ls-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .ls-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .ls-info:hover, .ls-info:focus { background: #bfdbfe; outline: none; }

  .ls-info .ls-tip {
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
  .ls-info .ls-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .ls-info:hover .ls-tip, .ls-info:focus .ls-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  lineFit: {
    label: 'Line through 3 points',
    note: 'points (0, 6), (1, 0), (2, 0): fit b = C + Dt',
    values: [[1, 0], [1, 1], [1, 2]],
    b: [6, 0, 0],
    fit: { kind: 'poly', t: [0, 1, 2] }
  },
  lineFit4: {
    label: 'Line through 4 points',
    note: 'points (−1, 1), (0, 1), (1, 3), (2, 4)',
    values: [[1, -1], [1, 0], [1, 1], [1, 2]],
    b: [1, 1, 3, 4],
    fit: { kind: 'poly', t: [-1, 0, 1, 2] }
  },
  parabola: {
    label: 'Parabola through 4 points',
    note: 'b = C + Dt + Et² through (−1, 2), (0, 0), (1, 1), (2, 5)',
    values: [[1, -1, 1], [1, 0, 0], [1, 1, 1], [1, 2, 4]],
    b: [2, 0, 1, 5],
    fit: { kind: 'poly', t: [-1, 0, 1, 2] }
  },
  oneColumn: {
    label: 'Projection onto a line',
    note: 'a single column: x̂ = aᵀb / aᵀa',
    values: [[1], [2], [2]],
    b: [3, 3, 3]
  },
  plane: {
    label: 'Projection onto a plane',
    note: 'columns e₁, e₂: p keeps the first two coordinates',
    values: [[1, 0], [0, 1], [0, 0]],
    b: [1, 2, 3]
  },
  consistent: {
    label: 'b in the column space',
    note: 'exact solution, zero residual',
    values: [[1, 0], [1, 1], [1, 2]],
    b: [1, 3, 5],
    fit: { kind: 'poly', t: [0, 1, 2] }
  },
  dependent: {
    label: 'Dependent columns',
    note: 'AᵀA singular: no unique x̂',
    values: [[1, 2], [2, 4], [3, 6]],
    b: [1, 0, 0]
  }
};

export const DEFAULT_PRESET = 'lineFit';

// -----------------------------------------------------------
// Numeric helpers
// -----------------------------------------------------------
function clone(M) {
  return M.map((row) => row.slice());
}

function snap(x) {
  for (const d of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 20]) {
    const r = Math.round(x * d) / d;
    if (Math.abs(r - x) < 1e-7) return r;
  }
  return Math.round(x * 1e6) / 1e6;
}

function fmt(v) {
  return formatNumber(snap(v)).replace(/-/g, '−');
}

function fmt4(v) {
  const r = Math.round(v * 1e4) / 1e4;
  const s = Number.isInteger(r) ? String(r) : r.toFixed(4).replace(/\.?0+$/, '');
  return (s === '-0' ? '0' : s).replace(/-/g, '−');
}

function transpose(M) {
  return M[0].map((_, j) => M.map((row) => row[j]));
}

function matMul(X, Y) {
  return X.map((row) => Y[0].map((_, j) => row.reduce((s, x, k) => s + x * Y[k][j], 0)));
}

function matVec(A, v) {
  return A.map((row) => row.reduce((s, x, j) => s + x * v[j], 0));
}

function dot(u, v) {
  return u.reduce((s, x, i) => s + x * v[i], 0);
}

function vecStr(v) {
  return `(${v.map(fmt).join(', ')})`;
}

function inverse(M) {
  const n = M.length;
  const aug = M.map((row, i) => [...row, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))]);
  const { R, pivotCols } = rref(aug);
  if (pivotCols.length < n || pivotCols.some((c) => c >= n)) return null;
  return R.map((row) => row.slice(n));
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

function colVec(symbol, v, label, cellPx, font, opts) {
  return numMatrix(symbol, v.map((x) => [x]), label, cellPx, font, { ...(opts || {}), spec: { showDimensions: false, ...((opts && opts.spec) || {}) } });
}

const allCells = (rows, cols, style) => {
  const out = [];
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) out.push([i, j, style]);
  return out;
};

const SUBS = ['₁', '₂', '₃', '₄'];

function polyStr(x) {
  // C + D t + E t² …
  const parts = [];
  x.forEach((c, k) => {
    if (Math.abs(c) < 1e-9) return;
    const mag = fmt(Math.abs(c));
    const term = k === 0 ? mag : k === 1 ? `${mag === '1' ? '' : mag}t` : `${mag === '1' ? '' : mag}t<sup>${k}</sup>`;
    parts.push(`${c < 0 ? '−' : (parts.length ? '+' : '')} ${term}`.trim());
  });
  return parts.length ? parts.join(' ') : '0';
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values, bIn, fit) {
  const A = clone(values);
  const m = A.length, n = A[0].length;
  const b = (bIn || []).slice(0, m);
  while (b.length < m) b.push(0);
  const maxDim = Math.max(m, n + 1);
  const narrow = sizingFor(maxDim, false);
  const wide = sizingFor(maxDim, true);

  const matA = (sz, opts) => numMatrix('a', A, 'A', sz.cellPx, sz.font, opts);
  const vecB = (sz) => colVec('b', b, 'b', sz.cellPx, sz.font, { cellStyle: () => ({ color: '#b45309' }) });

  const scenes = [];
  const isFit = fit && fit.kind === 'poly' && fit.t && fit.t.length === m && n <= 4;

  scenes.push({
    phase: 'intro',
    title: `Least squares: ${m} equations, ${n} unknown${n === 1 ? '' : 's'}`,
    formula:
      `Ax = b has ${m} equations and ${n} unknown${n === 1 ? '' : 's'}` +
      (isFit ? `: fitting ${n === 1 ? 'a constant' : n === 2 ? 'a line b = C + Dt' : n === 3 ? 'a parabola b = C + Dt + Et²' : 'a cubic'} to ${m} data points, one equation per point. ` : '. ') +
      'It has an exact solution only if b lies in the column space of A. When it does not, the best we can do is ' +
      'make Ax as close to b as possible: minimize |b − Ax|. That minimum is reached at the projection of b onto ' +
      'the column space, and the normal equations find it.',
    matrices: { A: matA(narrow), B: vecB(narrow) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: 'x =' },
      { type: 'matrix', ref: 'B' }
    ],
    highlights: {}
  });

  // consistency check
  const aug = A.map((row, i) => [...row, b[i]]);
  const augR = rref(aug);
  const consistent = !augR.pivotCols.includes(n);
  scenes.push({
    phase: 'consistency',
    title: consistent ? 'b is in the column space: Ax = b is solvable' : 'b is not in the column space: Ax = b has no solution',
    formula:
      'Row reduce the augmented matrix [A | b]. ' +
      (consistent
        ? 'No pivot lands in the last column, so the system is consistent and the least-squares solution will be an exact solution with zero residual. '
        : `A pivot lands in the last column — a row reads 0 = 1 — so no x satisfies all ${m} equations. ` +
          'Least squares asks for the x that comes closest instead. ') +
      `The rank of A is ${augR.pivotCols.filter((c) => c < n).length}.`,
    matrices: {
      G: numMatrix('g', aug, '[A | b]', narrow.cellPx, narrow.font, { cellStyle: (i, j) => (j === n ? { color: '#b45309' } : null) }),
      R: numMatrix('r', augR.R, 'rref', narrow.cellPx, narrow.font, { cellStyle: (i, j) => (j === n ? { color: '#b45309' } : null) })
    },
    layout: [
      { type: 'matrix', ref: 'G' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: {
      G: { cols: [[n, 'secondary']] },
      R: { cells: augR.pivotCols.map((c, k) => [k, c, c === n ? 'muted' : 'accent']) }
    }
  });

  const At = transpose(A);
  const AtA = matMul(At, A).map((row) => row.map(snap));
  const Atb = matVec(At, b).map(snap);

  scenes.push({
    phase: 'normal',
    title: 'Form the normal equations AᵀA x̂ = Aᵀb',
    formula:
      'The error e = b − Ax̂ must be perpendicular to every column of A, which says Aᵀ(b − Ax̂) = 0, or ' +
      `<strong>AᵀA x̂ = Aᵀb</strong>. AᵀA is ${n}×${n} and symmetric: entry (i, j) is the dot product of columns i and j. ` +
      `Aᵀb is the vector of dot products of the columns with b. Here AᵀA = ${AtA.map((row) => `(${row.map(fmt).join(', ')})`).join(' / ')} ` +
      `and Aᵀb = ${vecStr(Atb)}.`,
    matrices: {
      AT: numMatrix('a', At, 'Aᵀ', wide.cellPx, wide.font),
      A: matA(wide),
      G: numMatrix('g', AtA, 'AᵀA', wide.cellPx, wide.font),
      B: vecB(wide),
      H: colVec('h', Atb, 'Aᵀb', wide.cellPx, wide.font)
    },
    layout: [
      { type: 'matrix', ref: 'AT' },
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'G' },
      { type: 'operator', symbol: ',' },
      { type: 'matrix', ref: 'AT' },
      { type: 'matrix', ref: 'B' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'H' }
    ],
    highlights: { G: { cells: allCells(n, n, 'target') }, H: { cells: allCells(n, 1, 'target') } }
  });

  const inv = inverse(AtA);
  if (!inv) {
    scenes.push({
      phase: 'singular',
      title: 'AᵀA is singular: the columns of A are dependent',
      formula:
        'AᵀA is invertible exactly when the columns of A are independent, and here they are not — some column is a ' +
        'combination of the others. The projection p of b onto the column space still exists and is unique, but many ' +
        'different x̂ give the same Ax̂ = p, so there is no single least-squares solution. Remove the dependent column ' +
        '(or use the pseudoinverse, which picks the x̂ of smallest length).',
      matrices: { G: numMatrix('g', AtA, 'AᵀA', narrow.cellPx, narrow.font), R: numMatrix('r', rref(AtA).R, 'rref', narrow.cellPx, narrow.font) },
      layout: [
        { type: 'matrix', ref: 'G' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'R' }
      ],
      highlights: { R: { rows: [[n - 1, 'muted']] } }
    });
    return scenes;
  }

  const augN = AtA.map((row, i) => [...row, Atb[i]]);
  const solved = rref(augN);
  const xhat = solved.R.map((row) => snap(row[n]));

  scenes.push({
    phase: 'solve',
    title: `Solve: x̂ = ${vecStr(xhat)}`,
    formula:
      `Row reduce [AᵀA | Aᵀb]${n === 1 ? ' — one equation, one unknown' : ''}. ` +
      `The solution is x̂ = ${vecStr(xhat)}` +
      (isFit ? `, so the fitted ${n === 2 ? 'line' : n === 3 ? 'parabola' : 'curve'} is b = ${polyStr(xhat)}` : '') +
      (n === 1 ? `. For a single column a, this is the familiar x̂ = aᵀb / aᵀa = ${fmt(Atb[0])} / ${fmt(AtA[0][0])}` : '') +
      '. Unlike the original system, the normal equations always have a solution, and it is unique when AᵀA is invertible.',
    matrices: {
      N: numMatrix('n', augN, '[AᵀA | Aᵀb]', narrow.cellPx, narrow.font, { cellStyle: (i, j) => (j === n ? { color: '#b45309' } : null) }),
      S: numMatrix('s', solved.R, 'rref', narrow.cellPx, narrow.font, { cellStyle: (i, j) => (j === n ? { color: '#1e40af' } : null) }),
      X: colVec('x', xhat, 'x̂', narrow.cellPx, narrow.font)
    },
    layout: [
      { type: 'matrix', ref: 'N' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'S' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'X' }
    ],
    highlights: { S: { cols: [[n, 'accent']] }, X: { cells: allCells(n, 1, 'accent') } }
  });

  const p = matVec(A, xhat).map(snap);
  scenes.push({
    phase: 'project',
    title: `Projection: p = A x̂ = ${vecStr(p)}`,
    formula:
      `p = A x̂ = ${xhat.map((c, k) => `${fmt(c)}·a${SUBS[k]}`).join(' + ')} = ${vecStr(p)} is the point of the column space closest to b. ` +
      (isFit ? `Its entries are the fitted values at t = ${fit.t.map(fmt).join(', ')}: the heights of the curve at the data points. ` : '') +
      (consistent ? 'Here p = b exactly, because b was in the column space to begin with.' : 'It is what Ax can reach; b itself cannot be reached.'),
    matrices: { A: matA(narrow), X: colVec('x', xhat, 'x̂', narrow.cellPx, narrow.font), P: colVec('p', p, 'p', narrow.cellPx, narrow.font), B: vecB(narrow) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'matrix', ref: 'X' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '≈' },
      { type: 'matrix', ref: 'B' }
    ],
    highlights: { X: { cells: allCells(n, 1, 'accent') }, P: { cells: allCells(m, 1, 'target') } }
  });

  const e = b.map((x, i) => snap(x - p[i]));
  const Ate = matVec(At, e).map(snap);
  const eNorm = Math.sqrt(dot(e, e));
  scenes.push({
    phase: 'residual',
    title: `Residual: e = b − p = ${vecStr(e)}`,
    formula:
      `The error e = b − p = ${vecStr(e)} has length |e| = ${fmt4(eNorm)}` +
      (eNorm < 1e-9 ? ' — zero, since the system was consistent. ' : `, the smallest possible distance from b to the column space. `) +
      `Check that it is perpendicular to every column: Aᵀe = ${vecStr(Ate)}. ` +
      'That is the geometry behind the normal equations: b splits into p in the column space plus e in the left null ' +
      'space, and the two parts are orthogonal, so |b|² = |p|² + |e|²' +
      `: ${fmt4(dot(b, b))} = ${fmt4(dot(p, p))} + ${fmt4(dot(e, e))}.`,
    matrices: {
      B: vecB(narrow), P: colVec('p', p, 'p', narrow.cellPx, narrow.font), E: colVec('e', e, 'e', narrow.cellPx, narrow.font),
      AT: numMatrix('a', At, 'Aᵀ', narrow.cellPx, narrow.font), Z: colVec('z', Ate, 'Aᵀe', narrow.cellPx, narrow.font, { cellStyle: () => ({ color: '#94a3b8' }) })
    },
    layout: [
      { type: 'matrix', ref: 'B' },
      { type: 'operator', symbol: '−' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'E' },
      { type: 'operator', symbol: ',' },
      { type: 'matrix', ref: 'AT' },
      { type: 'matrix', ref: 'E' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'Z' }
    ],
    highlights: { E: { cells: allCells(m, 1, 'secondary') }, Z: { cells: allCells(n, 1, 'target') } }
  });

  const Pm = matMul(matMul(A, inv), At).map((row) => row.map(snap));
  const Pb = matVec(Pm, b).map(snap);
  const PP = matMul(Pm, Pm).map((row) => row.map(snap));
  const idem = PP.every((row, i) => row.every((x, j) => Math.abs(x - Pm[i][j]) < 1e-6));
  scenes.push({
    phase: 'projmatrix',
    title: 'The projection matrix P = A (AᵀA)⁻¹ Aᵀ',
    formula:
      `Putting the steps together, p = A x̂ = A (AᵀA)⁻¹ Aᵀ b, so the ${m}×${m} matrix P = A(AᵀA)⁻¹Aᵀ projects any vector ` +
      `onto the column space: P b = ${vecStr(Pb)} = p. ` +
      `It is symmetric and idempotent${idem ? ' — P² = P, verified' : ''}: projecting twice changes nothing. ` +
      'Its trace equals its rank, ' + `${fmt(Pm.reduce((s, row, i) => s + row[i], 0))} = ${n}` +
      ', the dimension of the column space. I − P projects onto the left null space and gives the residual.',
    matrices: { Pm: numMatrix('p', Pm, 'P', wide.cellPx, wide.font), B: vecB(wide), P: colVec('p', Pb, 'P b', wide.cellPx, wide.font) },
    layout: [
      { type: 'matrix', ref: 'Pm' },
      { type: 'matrix', ref: 'B' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'P' }
    ],
    highlights: { Pm: { diagonal: 'primary' }, P: { cells: allCells(m, 1, 'target') } }
  });

  scenes.push({
    phase: 'done',
    title: isFit ? `Best fit: b = ${polyStr(xhat)}` : `Least-squares solution x̂ = ${vecStr(xhat)}`,
    formula:
      (isFit
        ? `The fitted values at t = ${fit.t.map(fmt).join(', ')} are p = ${vecStr(p)} against the data b = ${vecStr(b)}; the errors are e = ${vecStr(e)}, ` +
          `with sum of squares ${fmt4(dot(e, e))}, the smallest any ${n === 2 ? 'line' : n === 3 ? 'parabola' : 'such curve'} can achieve. ` +
          (n >= 2 ? 'The errors sum to zero (the first column is all ones) and are uncorrelated with t (the second column). ' : '')
        : `x̂ = ${vecStr(xhat)} minimizes |Ax − b|; the minimum is |e| = ${fmt4(eNorm)}. `) +
      'Every least-squares problem is this picture: a right-hand side outside the column space, its shadow p inside, and an ' +
      'error e perpendicular to the space. The normal equations are the algebra; the projection is the geometry.',
    matrices: { A: matA(narrow), X: colVec('x', xhat, 'x̂', narrow.cellPx, narrow.font), P: colVec('p', p, 'p', narrow.cellPx, narrow.font), E: colVec('e', e, 'e', narrow.cellPx, narrow.font), B: vecB(narrow) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'matrix', ref: 'X' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: ',' },
      { type: 'matrix', ref: 'B' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '+' },
      { type: 'matrix', ref: 'E' }
    ],
    highlights: { X: { cells: allCells(n, 1, 'accent') }, P: { cells: allCells(m, 1, 'target') }, E: { cells: allCells(m, 1, 'secondary') } }
  });

  return scenes;
}

export function randomProblem(m, n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  // a design matrix 1, t, t², … at integer t, and random data
  const t = Array.from({ length: m }, (_, i) => i - Math.floor(m / 2) + (m % 2 === 0 ? 1 : 0));
  const A = t.map((ti) => Array.from({ length: n }, (_, k) => Math.pow(ti, k)));
  const b = t.map(() => rnd(-3, 6));
  return { A, b, fit: { kind: 'poly', t } };
}

function resize(M, m, n) {
  const out = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(M[i] && M[i][j] !== undefined ? M[i][j] : (j === 0 ? 1 : i));
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
      className="ls-info"
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
      <span className="ls-tip">{tip}</span>
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
          className="ls-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="ls-stepper-btn"
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
      className={active ? 'ls-pill ls-pill-active' : 'ls-pill'}
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
export default function LeastSquaresWrapper({
  defaultPreset = DEFAULT_PRESET,
  rowRange = [2, 4],
  colRange = [1, 3],
  explanations = null,
  title = 'Least Squares',
  subtitle = 'Project b onto the column space of A: the normal equations AᵀA x̂ = Aᵀb, the projection p = A x̂, and the perpendicular residual.',
  defaultSpeed = 1800
}) {
  const initialKey = PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET;
  const [values, setValues] = useState(() => clone(PRESETS[initialKey].values));
  const [b, setB] = useState(() => PRESETS[initialKey].b.slice());
  const [fit, setFit] = useState(() => PRESETS[initialKey].fit || null);
  const [preset, setPreset] = useState(initialKey);
  const [drafts, setDrafts] = useState({});

  const m = values.length, n = values[0].length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setValues(clone(PRESETS[key].values));
    setB(PRESETS[key].b.slice());
    setFit(PRESETS[key].fit || null);
  }, []);

  const setRows = (mm) => {
    setPreset(null); setDrafts({}); setFit(null);
    setValues((v) => resize(v, mm, v[0].length));
    setB((bb) => Array.from({ length: mm }, (_, i) => (bb[i] !== undefined ? bb[i] : 0)));
  };
  const setCols = (nn) => { setPreset(null); setDrafts({}); setFit(null); setValues((v) => resize(v, v.length, nn)); };
  const shuffle = () => {
    setPreset(null); setDrafts({});
    const r = randomProblem(m, n);
    setValues(r.A); setB(r.b); setFit(r.fit);
  };

  const parseRaw = (raw) => {
    const num = parseFloat(raw);
    return Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
  };
  const editCell = (i, j, raw) => {
    setPreset(null); setFit(null);
    setDrafts((d) => ({ ...d, [`a${i},${j}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setValues((M) => { const next = clone(M); next[i][j] = v; return next; });
  };
  const editB = (i, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`b${i}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setB((bb) => { const next = bb.slice(); next[i] = v; return next; });
  };
  const commit = (key) => setDrafts((d) => { const next = { ...d }; delete next[key]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(values, b, fit);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [values, b, fit, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: LS_CSS }} />

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
          <FieldLabel info={LS_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '460px' }}>
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
            <Stepper value={m} onChange={setRows} min={rowRange[0]} max={rowRange[1]} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <Stepper value={n} onChange={setCols} min={colRange[0]} max={colRange[1]} />
            <button className="ls-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A polynomial design matrix with random data">
              Shuffle data
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>A and b</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {values.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {row.map((val, j) => (
                  <input
                    key={j}
                    className="ls-cell-input"
                    type="text"
                    inputMode="decimal"
                    value={drafts[`a${i},${j}`] !== undefined ? drafts[`a${i},${j}`] : String(Number.isFinite(val) ? val : 0)}
                    onChange={(e) => editCell(i, j, e.target.value)}
                    onBlur={() => commit(`a${i},${j}`)}
                    aria-label={`entry ${i + 1},${j + 1}`}
                  />
                ))}
                <span style={{ color: '#94a3b8', margin: '0 4px' }}>|</span>
                <input
                  className="ls-cell-input ls-b"
                  type="text"
                  inputMode="decimal"
                  value={drafts[`b${i}`] !== undefined ? drafts[`b${i}`] : String(Number.isFinite(b[i]) ? b[i] : 0)}
                  onChange={(e) => editB(i, e.target.value)}
                  onBlur={() => commit(`b${i}`)}
                  aria-label={`b entry ${i + 1}`}
                />
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
