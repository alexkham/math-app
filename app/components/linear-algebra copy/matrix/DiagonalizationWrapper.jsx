'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';
import { charPoly, polyRoots, nullSpace, rref, randomEigenMatrix } from './EigenWrapper';

// ===========================================================
// DiagonalizationWrapper v1
// Diagonalizes a numeric 2×2 or 3×3 matrix, A = P D P⁻¹, and
// uses the factorization to compute a power A^k = P D^k P⁻¹:
//
//   eigen     : the characteristic polynomial's roots (summarized —
//               the eigenvalue tool shows the derivation)
//   complex   : terminal — complex eigenvalues, no real diagonalization
//   eigvecs   : one eigenvector per free column of A − λI, per λ
//   defective : terminal — fewer than n eigenvectors
//   assemble  : P from the eigenvectors, D from the eigenvalues
//   inverse   : P⁻¹ by row reducing [P | I]
//   factor    : A = P · D · P⁻¹, multiplied out as a check
//   verify    : P⁻¹ · A · P = D
//   power     : A^k = P · D^k · P⁻¹ for a chosen k
//   done      : summary; symmetric case → orthogonal P
//
// Phases carried on each scene: intro, eigen, complex, eigvecs,
// defective, assemble, inverse, factor, verify, power, done.
//
// Standalone file: imports the core (ScenePlayer, formatNumber) and the
// numeric engine exported by EigenWrapper (charPoly, polyRoots,
// nullSpace, rref, randomEigenMatrix); modifies nothing. buildScenes
// and PRESETS are exported for the frozen-state diagrams.
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

const DIAG_INFO =
  'A square matrix is diagonalizable when it has n linearly independent ' +
  'eigenvectors. Put them as the columns of P and the matching eigenvalues ' +
  'down the diagonal of D; then A P = P D, so A = P D P⁻¹. In the eigenvector ' +
  'basis A is just a scaling, and A^k = P D^k P⁻¹ costs only powering the ' +
  'diagonal. A matrix fails to diagonalize when a repeated eigenvalue has too ' +
  'few eigenvectors (defective) or when the eigenvalues are complex.';

const DG_CSS = `
  .dg-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .dg-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .dg-pill:hover { border-color: #94a3b8; }
  .dg-pill-active:hover { border-color: #2563eb; }

  .dg-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .dg-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .dg-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .dg-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .dg-info:hover, .dg-info:focus { background: #bfdbfe; outline: none; }

  .dg-info .dg-tip {
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
  .dg-info .dg-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .dg-info:hover .dg-tip, .dg-info:focus .dg-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  twoByTwo: {
    label: '2×2 classic',
    note: 'eigenvalues 5 and 2, integer eigenvectors',
    values: [[4, 1], [2, 3]]
  },
  symmetric2: {
    label: 'Symmetric',
    note: 'eigenvalues 3 and 1, perpendicular eigenvectors: P can be made orthogonal',
    values: [[2, 1], [1, 2]]
  },
  markov: {
    label: 'Markov chain',
    note: 'eigenvalues 1 and 0.4: A^k settles to the steady state',
    values: [[0.9, 0.5], [0.1, 0.5]]
  },
  fibonacci: {
    label: 'Fibonacci',
    note: 'irrational eigenvalues φ and −1/φ; A^k holds Fibonacci numbers',
    values: [[1, 1], [1, 0]]
  },
  distinct: {
    label: '3×3 distinct',
    note: 'eigenvalues 11, 2, 1',
    values: [[2, 0, 0], [0, 3, 4], [0, 4, 9]]
  },
  repeated: {
    label: 'Repeated but fine',
    note: 'λ = 1 twice with two eigenvectors: still diagonalizable',
    values: [[2, 1, 1], [1, 2, 1], [1, 1, 2]]
  },
  defective: {
    label: 'Defective',
    note: 'λ = 1 twice, one eigenvector: cannot be diagonalized',
    values: [[1, 1], [0, 1]]
  },
  rotation: {
    label: 'Rotation',
    note: 'complex eigenvalues ±i: no real diagonalization',
    values: [[0, -1], [1, 0]]
  }
};

export const DEFAULT_PRESET = 'twoByTwo';
export const DEFAULT_POWER = 3;

const EPS = 1e-9;

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

function identity(n) {
  return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (__, j) => (i === j ? 1 : 0)));
}

function matMul(X, Y) {
  return X.map((row) => Y[0].map((_, j) => row.reduce((s, x, k) => s + x * Y[k][j], 0)));
}

function matPow(A, k) {
  let R = identity(A.length);
  for (let i = 0; i < k; i++) R = matMul(R, A);
  return R;
}

function inverse(P) {
  const n = P.length;
  const aug = P.map((row, i) => [...row, ...identity(n)[i]]);
  const { R } = rref(aug);
  return R.map((row) => row.slice(n));
}

function isSymmetric(A) {
  const n = A.length;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.abs(A[i][j] - A[j][i]) > EPS) return false;
  return true;
}

function dot(u, v) {
  return u.reduce((s, x, i) => s + x * v[i], 0);
}

function trace(M) {
  let s = 0;
  for (let i = 0; i < M.length; i++) s += M[i][i];
  return s;
}

function sizingFor(n, wide) {
  if (n === 2) return { cellPx: wide ? 50 : 56, font: wide ? '15px' : '16px' };
  return { cellPx: wide ? 42 : 48, font: wide ? '13px' : '14px' };
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

function polyHtml(c) {
  const n = c.length - 1;
  const parts = [];
  for (let i = 0; i <= n; i++) {
    const coef = c[i];
    const deg = n - i;
    if (Math.abs(coef) < EPS) continue;
    const sign = coef < 0 ? '−' : (parts.length ? '+' : '');
    const mag = Math.abs(coef);
    const magStr = (mag === 1 && deg > 0) ? '' : fmt(mag);
    const pow = deg === 0 ? '' : deg === 1 ? 'λ' : `λ<sup>${deg}</sup>`;
    parts.push(`${sign} ${magStr}${pow}`.trim());
  }
  return parts.length ? parts.join(' ') : '0';
}

function rootStr(r) {
  if (Math.abs(r.im) < EPS) return fmt(r.re);
  const imMag = Math.abs(r.im);
  const imS = (Math.abs(imMag - 1) < EPS ? '' : fmt(imMag)) + 'i';
  if (Math.abs(r.re) < EPS) return `${r.im < 0 ? '−' : ''}${imS}`;
  return `${fmt(r.re)} ${r.im < 0 ? '−' : '+'} ${imS}`;
}

function vecStr(v) {
  return `(${v.map(fmt).join(', ')})`;
}

// matrix labels are plain text, so powers use Unicode superscripts
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
function sup(k) {
  return String(k).split('').map((ch) => SUP[Number(ch)] || ch).join('');
}

const allCells = (rows, cols, style) => {
  const out = [];
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) out.push([i, j, style]);
  return out;
};

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values, power = DEFAULT_POWER) {
  const A = clone(values);
  const n = A.length;
  const k = Math.max(1, Math.round(power));
  const c = charPoly(A);
  const roots = polyRoots(c);
  const allReal = roots.every((r) => Math.abs(r.im) < EPS);
  const realRoots = roots.filter((r) => Math.abs(r.im) < EPS).map((r) => r.re).sort((x, y) => y - x);

  const narrow = sizingFor(n, false);
  const wide = sizingFor(n, true);

  const matA = (sz) => numMatrix('a', A, 'A', sz.cellPx, sz.font);
  const rootRow = () => ({
    symbol: 'l', rows: 1, cols: n, label: 'eigenvalues',
    showDimensions: false,
    cellSize: allReal ? 56 : 84,
    cellOverrides: (() => {
      const o = {};
      roots.forEach((r, i) => { o[`0,${i}`] = { display: rootStr(r), fontStyle: 'normal', style: { fontSize: '14px' } }; });
      return o;
    })()
  });

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Diagonalize a ${n}×${n} matrix`,
    formula:
      'The goal is <strong>A = P D P⁻¹</strong> with D diagonal: the columns of P are eigenvectors of A and the ' +
      'diagonal of D holds their eigenvalues, in the same order. It works exactly when A has ' +
      `${n} independent eigenvectors. Plan: find the eigenvalues, find an eigenvector for each, assemble P and D, ` +
      `invert P, check the product — then use the factorization to compute A<sup>${k}</sup> the easy way.`,
    matrices: { A: matA(narrow) },
    layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {}
  });

  scenes.push({
    phase: 'eigen',
    title: `Eigenvalues: λ = ${roots.map(rootStr).join(', ')}`,
    formula:
      `The characteristic polynomial is det(A − λI) = ${polyHtml(c)}` +
      (allReal
        ? `, with roots ${realRoots.map(fmt).join(', ')}. `
        : `, whose roots are the complex pair ${roots.map(rootStr).join(' and ')}. `) +
      `Check: they add to the trace, ${fmt(trace(A))}. ` +
      'The eigenvalue tool shows this derivation step by step; here it is the starting point.',
    matrices: { A: matA(narrow), L: rootRow() },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'L' }
    ],
    highlights: { L: { cells: roots.map((_, i) => [0, i, allReal ? 'accent' : 'secondary']) } }
  });

  if (!allReal) {
    scenes.push({
      phase: 'complex',
      title: 'Complex eigenvalues: no real diagonalization',
      formula:
        'Over the real numbers there are no eigenvectors at all, so no real P exists. The matrix is ' +
        'diagonalizable over ℂ — P and D would have complex entries — and in the real plane it acts as ' +
        `a rotation combined with a scaling by |λ| = ${fmt(Math.hypot(roots[0].re, roots[0].im))}. ` +
        'The closest real form is the rotation–scaling block, not a diagonal matrix.',
      matrices: { A: matA(narrow), L: rootRow() },
      layout: [
        { type: 'matrix', ref: 'A' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'L' }
      ],
      highlights: { L: { cells: roots.map((_, i) => [0, i, 'secondary']) } }
    });
    return scenes;
  }

  // eigenvectors, one per free column, per distinct eigenvalue
  const distinct = [];
  realRoots.forEach((r) => { if (!distinct.some((d) => Math.abs(d - r) < 1e-6)) distinct.push(r); });
  const pairs = [];
  const perLam = [];
  for (const lam of distinct) {
    const S = A.map((row, i) => row.map((x, j) => (i === j ? x - lam : x)));
    const ns = nullSpace(S);
    const algMult = realRoots.filter((r) => Math.abs(r - lam) < 1e-6).length;
    perLam.push({ lam, vecs: ns.vecs, algMult, geoMult: ns.vecs.length });
    ns.vecs.forEach((v) => pairs.push({ lam, v }));
  }
  const m = pairs.length;

  // P with the eigenvectors as columns (possibly fewer than n)
  const Pcols = pairs.map((p) => p.v);
  const P = Array.from({ length: n }, (_, i) => Pcols.map((col) => col[i]));
  const matP = (sz, label) => numMatrix('p', P, label || 'P', sz.cellPx, sz.font);
  const colStyles = ['accent', 'primary', 'secondary'];
  const colHl = (cols) => {
    const out = [];
    for (let j = 0; j < cols; j++) for (let i = 0; i < n; i++) out.push([i, j, colStyles[j % colStyles.length]]);
    return out;
  };
  const lamRow = () => ({
    symbol: 'l', rows: 1, cols: Math.max(1, m), label: 'λ for each column',
    showDimensions: false,
    cellSize: narrow.cellPx,
    cellOverrides: (() => {
      const o = {};
      pairs.forEach((p, j) => { o[`0,${j}`] = numCell(p.lam, narrow.font); });
      return o;
    })()
  });

  const vecReport = perLam.map((r) =>
    `λ = ${fmt(r.lam)}: ${r.vecs.map(vecStr).join(' and ')}` +
    (r.algMult > 1 ? ` (multiplicity ${r.algMult}, ${r.geoMult} eigenvector${r.geoMult === 1 ? '' : 's'})` : '')
  ).join('; ');

  if (m < n) {
    const bad = perLam.find((r) => r.geoMult < r.algMult);
    scenes.push({
      phase: 'defective',
      title: `Only ${m} eigenvector${m === 1 ? '' : 's'}: A is not diagonalizable`,
      formula:
        `${vecReport}. ` +
        `The eigenvalue ${fmt(bad.lam)} is a root of multiplicity ${bad.algMult} but A − ${fmt(bad.lam)}I has only ` +
        `${bad.geoMult} free column${bad.geoMult === 1 ? '' : 's'}, so its eigenspace is too small. ` +
        `With ${m} independent eigenvector${m === 1 ? '' : 's'} there is no basis of eigenvectors, no invertible P, ` +
        'and no diagonal form — A is <strong>defective</strong>. The best available is its Jordan form.',
      matrices: { A: matA(narrow), L: lamRow(), P: matP(narrow, 'eigenvectors') },
      layout: [
        { type: 'matrix', ref: 'A' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'L' },
        { type: 'matrix', ref: 'P' }
      ],
      highlights: { L: { cells: pairs.map((_, j) => [0, j, 'primary']) }, P: { cells: colHl(m) } }
    });
    return scenes;
  }

  scenes.push({
    phase: 'eigvecs',
    title: `${n} independent eigenvectors: A is diagonalizable`,
    formula:
      `Row reducing A − λI for each eigenvalue gives ${vecReport}. ` +
      `That is ${n} eigenvectors for a ${n}×${n} matrix, one per column of the matrix on the right, each shown ` +
      'above its eigenvalue. They are independent, so they form a basis: A can be diagonalized.',
    matrices: { A: matA(narrow), L: lamRow(), P: matP(narrow, 'eigenvectors') },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'L' },
      { type: 'matrix', ref: 'P' }
    ],
    highlights: { L: { cells: pairs.map((_, j) => [0, j, 'primary']) }, P: { cells: colHl(n) } }
  });

  const D = identity(n).map((row, i) => row.map((x, j) => (i === j ? pairs[i].lam : 0)));
  const matD = (sz, label, Mx) => numMatrix('d', Mx || D, label || 'D', sz.cellPx, sz.font, {
    cellStyle: (i, j) => (i === j ? { color: '#1e40af' } : { color: '#94a3b8' })
  });

  scenes.push({
    phase: 'assemble',
    title: 'Assemble P and D',
    formula:
      'P takes the eigenvectors as its columns; D is diagonal with the eigenvalues in the same order, ' +
      `${pairs.map((p) => fmt(p.lam)).join(', ')}. ` +
      'The order is a free choice, but it must match: column j of P belongs to entry j of D. ' +
      'Then A P = P D column by column — each A v<sub>j</sub> = λ<sub>j</sub> v<sub>j</sub> is one column of that equation.',
    matrices: { P: matP(narrow), D: matD(narrow) },
    layout: [
      { type: 'matrix', ref: 'P' },
      { type: 'matrix', ref: 'D' }
    ],
    highlights: { P: { cells: colHl(n) }, D: { diagonal: 'primary' } }
  });

  const Pinv = inverse(P);
  const detP = n === 2
    ? P[0][0] * P[1][1] - P[0][1] * P[1][0]
    : P[0][0] * (P[1][1] * P[2][2] - P[1][2] * P[2][1]) - P[0][1] * (P[1][0] * P[2][2] - P[1][2] * P[2][0]) + P[0][2] * (P[1][0] * P[2][1] - P[1][1] * P[2][0]);
  const matPinv = (sz) => numMatrix('q', Pinv, 'P⁻¹', sz.cellPx, sz.font);

  scenes.push({
    phase: 'inverse',
    title: 'Invert P',
    formula:
      `P is invertible because its columns are independent: det P = ${fmt(detP)} ≠ 0. ` +
      'Row reduce [P | I] until the left half is the identity; the right half is then P⁻¹' +
      (n === 2 ? ', or use the 2×2 formula, swap the diagonal, negate the off-diagonal, divide by the determinant. ' : '. ') +
      'Fractions are normal here: P has integer columns, so P⁻¹ carries the determinant in its denominators.',
    matrices: { P: matP(narrow), Q: matPinv(narrow) },
    layout: [
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'Q' }
    ],
    highlights: { P: { cells: colHl(n) }, Q: { cells: allCells(n, n, 'secondary') } }
  });

  const PDPinv = matMul(matMul(P, D), Pinv);
  const rebuilt = PDPinv.map((row) => row.map(snap));
  const matches = rebuilt.every((row, i) => row.every((x, j) => Math.abs(x - A[i][j]) < 1e-6));

  scenes.push({
    phase: 'factor',
    title: 'A = P D P⁻¹',
    formula:
      'The factorization, read right to left: P⁻¹ converts a vector to eigenvector coordinates, D scales each ' +
      'coordinate by its eigenvalue, P converts back. ' +
      (matches
        ? `Multiplying out, P D P⁻¹ = ${rebuilt.map((row) => `(${row.map(fmt).join(', ')})`).join(' / ')} — the rows of A, exactly.`
        : 'Multiplying out reproduces A up to rounding.'),
    matrices: { A: matA(wide), P: matP(wide), D: matD(wide), Q: matPinv(wide) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'D' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'Q' }
    ],
    highlights: {
      A: { cells: allCells(n, n, 'target') },
      P: { cells: colHl(n) },
      D: { diagonal: 'primary' },
      Q: { cells: allCells(n, n, 'secondary') }
    }
  });

  const PinvAP = matMul(matMul(Pinv, A), P).map((row) => row.map(snap));
  scenes.push({
    phase: 'verify',
    title: 'Check: P⁻¹ A P = D',
    formula:
      'The same identity the other way round. Conjugating A by P — changing to the eigenvector basis — ' +
      `leaves a diagonal matrix: P⁻¹ A P = diag(${pairs.map((p) => fmt(p.lam)).join(', ')}), with zeros ` +
      'everywhere off the diagonal. Any non-zero off-diagonal entry here would mean a column of P is not an eigenvector.',
    matrices: { Q: matPinv(wide), A: matA(wide), P: matP(wide), D: matD(wide, 'D', PinvAP) },
    layout: [
      { type: 'matrix', ref: 'Q' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'D' }
    ],
    highlights: {
      Q: { cells: allCells(n, n, 'secondary') },
      P: { cells: colHl(n) },
      D: { diagonal: 'target' }
    }
  });

  const Dk = D.map((row, i) => row.map((x, j) => (i === j ? Math.pow(x, k) : 0)));
  const Ak = matPow(A, k).map((row) => row.map(snap));
  const matDk = numMatrix('d', Dk, `D${sup(k)}`, wide.cellPx, wide.font, {
    cellStyle: (i, j) => (i === j ? { color: '#1e40af' } : { color: '#94a3b8' })
  });
  const matAk = numMatrix('a', Ak, `A${sup(k)}`, wide.cellPx, wide.font);

  scenes.push({
    phase: 'power',
    title: `A<sup>${k}</sup> = P D<sup>${k}</sup> P⁻¹`,
    formula:
      `A<sup>${k}</sup> = (P D P⁻¹)(P D P⁻¹)··· — every inner P⁻¹P cancels, leaving P D<sup>${k}</sup> P⁻¹. ` +
      `Powering D means powering its diagonal: ${pairs.map((p) => `${fmt(p.lam)}<sup>${k}</sup> = ${fmt(Math.pow(p.lam, k))}`).join(', ')}. ` +
      `Two more multiplications give A<sup>${k}</sup> = ${Ak.map((row) => `(${row.map(fmt).join(', ')})`).join(' / ')} — the same as multiplying A by itself ${k - 1} time${k === 2 ? '' : 's'}, ` +
      'but the eigenvalues now say how the powers grow: the largest |λ| dominates.',
    matrices: { Ak: matAk, P: matP(wide), Dk: matDk, Q: matPinv(wide) },
    layout: [
      { type: 'matrix', ref: 'Ak' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'Dk' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'Q' }
    ],
    highlights: {
      Ak: { cells: allCells(n, n, 'target') },
      P: { cells: colHl(n) },
      Dk: { diagonal: 'primary' },
      Q: { cells: allCells(n, n, 'secondary') }
    }
  });

  // done
  const sym = isSymmetric(A);
  const orthogonal = sym && pairs.every((p, i) => pairs.every((q, j) => i === j || Math.abs(dot(p.v, q.v)) < 1e-6));
  const dominant = pairs.reduce((best, p) => (Math.abs(p.lam) > Math.abs(best.lam) ? p : best), pairs[0]);
  scenes.push({
    phase: 'done',
    title: 'Diagonalized',
    formula:
      `A = P D P⁻¹ with D = diag(${pairs.map((p) => fmt(p.lam)).join(', ')}). ` +
      (sym
        ? (orthogonal
          ? 'A is symmetric and the eigenvectors are mutually perpendicular, so dividing each column of P by its length gives an orthogonal Q with Q⁻¹ = Qᵀ: A = Q D Qᵀ, the spectral decomposition. '
          : 'A is symmetric, so an orthogonal choice of eigenvectors exists (pick perpendicular vectors within any repeated eigenspace) and A = Q D Qᵀ. ')
        : 'A is not symmetric, so P is not orthogonal and P⁻¹ must be computed, not transposed. ') +
      `Every power, and every polynomial or function of A, now reads off the diagonal: A<sup>k</sup> = P D<sup>k</sup> P⁻¹, ` +
      (Math.abs(dominant.lam) > 1
        ? `and since |${fmt(dominant.lam)}| is the largest eigenvalue, A<sup>k</sup> grows like ${fmt(dominant.lam)}<sup>k</sup> along ${vecStr(dominant.v)}.`
        : Math.abs(dominant.lam - 1) < 1e-9
          ? `and since the largest eigenvalue is 1, A<sup>k</sup> settles toward a limit along ${vecStr(dominant.v)} as k grows.`
          : `and since every |λ| < 1, A<sup>k</sup> shrinks to zero as k grows.`),
    matrices: { A: matA(wide), P: matP(wide), D: matD(wide), Q: matPinv(wide) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'P' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'D' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'Q' }
    ],
    highlights: {
      P: { cells: colHl(n) },
      D: { diagonal: 'primary' },
      Q: { cells: allCells(n, n, 'secondary') }
    }
  });

  return scenes;
}

function resize(M, n) {
  const out = [];
  for (let i = 0; i < n; i++) {
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
      className="dg-info"
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
      <span className="dg-tip">{tip}</span>
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
          className="dg-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="dg-stepper-btn"
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
      className={active ? 'dg-pill dg-pill-active' : 'dg-pill'}
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
export default function DiagonalizationWrapper({
  defaultPreset = DEFAULT_PRESET,
  defaultPower = DEFAULT_POWER,
  powerRange = [2, 10],
  sizeRange = [2, 3],
  explanations = null,
  title = 'Diagonalization',
  subtitle = 'Find the eigenvectors, assemble P and D, invert P, and use A = P D P⁻¹ to compute a power of A.',
  defaultSpeed = 1800
}) {
  const initial = PRESETS[defaultPreset] ? PRESETS[defaultPreset].values : PRESETS[DEFAULT_PRESET].values;
  const [values, setValues] = useState(() => clone(initial));
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
  const [power, setPower] = useState(defaultPower);
  const [drafts, setDrafts] = useState({});

  const n = values.length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setValues(clone(PRESETS[key].values));
  }, []);

  const setSize = (nn) => { setPreset(null); setDrafts({}); setValues((v) => resize(v, nn)); };
  const shuffle = () => { setPreset(null); setDrafts({}); setValues(randomEigenMatrix(n)); };

  const editCell = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`${i},${j}`]: raw }));
    const num = parseFloat(raw);
    const v = Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
    if (v !== null) setValues((M) => { const next = clone(M); next[i][j] = v; return next; });
  };
  const commitCell = (i, j) => setDrafts((d) => { const next = { ...d }; delete next[`${i},${j}`]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(values, power);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [values, power, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: DG_CSS }} />

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
          <FieldLabel info={DIAG_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '460px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Size and power</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={n} onChange={setSize} min={sizeRange[0]} max={sizeRange[sizeRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times; {n}</span>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500, marginLeft: '14px' }}>A<sup>k</sup>, k =</span>
            <Stepper value={power} onChange={setPower} min={powerRange[0]} max={powerRange[1]} />
            <button className="dg-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random matrix with small integer eigenvalues">
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
                    className="dg-cell-input"
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
