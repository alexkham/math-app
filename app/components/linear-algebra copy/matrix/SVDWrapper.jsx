'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';
import { charPoly, polyRoots, nullSpace, tidy } from './EigenWrapper';

// ===========================================================
// SVDWrapper v1
// The singular value decomposition A = U Σ Vᵀ of a numeric m×n
// matrix with m, n ∈ {2, 3}, computed the textbook way:
//
//   gram     : form AᵀA (symmetric positive semidefinite)
//   eigen    : its eigenvalues λᵢ ≥ 0 and σᵢ = √λᵢ
//   vvec     : an orthonormal eigenvector vᵢ per eigenvalue (Gram–Schmidt
//              inside a repeated eigenspace) → V
//   uvec     : uᵢ = A vᵢ / σᵢ for each σᵢ > 0
//   complete : extend the uᵢ to an orthonormal basis of Rᵐ if needed
//   assemble : U, Σ (m×n), Vᵀ
//   factor   : A = U · Σ · Vᵀ multiplied out
//   rankone  : A = σ₁ u₁v₁ᵀ + σ₂ u₂v₂ᵀ + …
//   done     : rank, norm, condition number, geometry
//
// Standalone file: imports the core (ScenePlayer, formatNumber) and the
// numeric engine exported by EigenWrapper (charPoly, polyRoots,
// nullSpace, tidy); modifies nothing. buildScenes and PRESETS are
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

const SVD_INFO =
  'Every matrix, square or not, maps the unit sphere to an ellipsoid. The ' +
  'singular values σᵢ are the semi-axes, the columns of U their directions in ' +
  'the output space, and the columns of V the input directions that land on ' +
  'them: A vᵢ = σᵢ uᵢ. Computing it by hand goes through AᵀA, whose ' +
  'eigenvalues are σᵢ² and whose eigenvectors are the vᵢ; then uᵢ = A vᵢ / σᵢ.';

const SVD_CSS = `
  .sv-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .sv-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .sv-pill:hover { border-color: #94a3b8; }
  .sv-pill-active:hover { border-color: #2563eb; }

  .sv-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .sv-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .sv-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .sv-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .sv-info:hover, .sv-info:focus { background: #bfdbfe; outline: none; }

  .sv-info .sv-tip {
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
  .sv-info .sv-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .sv-info:hover .sv-tip, .sv-info:focus .sv-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  classic: {
    label: '2×2 classic',
    note: 'σ = √45 and √5; V is a 45° rotation',
    values: [[3, 0], [4, 5]]
  },
  rankOne: {
    label: 'Rank one',
    note: 'σ = 5 and 0: a single term',
    values: [[1, 2], [2, 4]]
  },
  symmetric: {
    label: 'Symmetric',
    note: 'σ = 3 and 1: the SVD is the spectral decomposition',
    values: [[2, 1], [1, 2]]
  },
  rotation: {
    label: 'Rotation',
    note: 'σ = 1 and 1: repeated, any orthonormal V works',
    values: [[0, -1], [1, 0]]
  },
  wide: {
    label: 'Wide 2×3',
    note: 'σ = √3 and 1, plus a null direction v₃',
    values: [[1, 1, 0], [0, 1, 1]]
  },
  tall: {
    label: 'Tall 3×2',
    note: 'σ = √3 and 1; U needs a third column',
    values: [[1, 0], [1, 1], [0, 1]]
  },
  threeByThree: {
    label: '3×3',
    note: 'σ = 2, 1, 1',
    values: [[1, 1, 0], [0, 1, 1], [1, 0, 1]]
  }
};

export const DEFAULT_PRESET = 'classic';

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

function fmt4(v) {
  const r = Math.round(v * 1e4) / 1e4;
  const s = Number.isInteger(r) ? String(r) : r.toFixed(4).replace(/\.?0+$/, '');
  return (s === '-0' ? '0' : s).replace(/-/g, '−');
}

// "√45" when x² is a non-square integer, else fmt4
function sqrtStr(x) {
  const sq = x * x;
  if (Math.abs(sq - Math.round(sq)) < 1e-6) {
    const n = Math.round(sq);
    const r = Math.sqrt(n);
    if (Math.abs(r - Math.round(r)) < 1e-9) return String(Math.round(r));
    return `√${n}`;
  }
  return fmt4(x);
}

function dot(u, v) {
  return u.reduce((s, x, i) => s + x * v[i], 0);
}

function norm(v) {
  return Math.sqrt(dot(v, v));
}

function matMul(X, Y) {
  return X.map((row) => Y[0].map((_, j) => row.reduce((s, x, k) => s + x * Y[k][j], 0)));
}

function transpose(M) {
  return M[0].map((_, j) => M.map((row) => row[j]));
}

function matVec(A, v) {
  return A.map((row) => row.reduce((s, x, j) => s + x * v[j], 0));
}

function vecStr(v) {
  return `(${v.map(fmt).join(', ')})`;
}

function vecStr4(v) {
  return `(${v.map(fmt4).join(', ')})`;
}

function unitStr(v) {
  const integral = v.every((x) => Math.abs(x - Math.round(x)) < 1e-9);
  const n2 = Math.round(dot(v, v));
  if (integral && n2 > 0) {
    const r = Math.sqrt(n2);
    if (Math.abs(r - Math.round(r)) < 1e-9) return Math.round(r) === 1 ? vecStr(v) : `${vecStr(v)}/${Math.round(r)}`;
    return `${vecStr(v)}/√${n2}`;
  }
  const nn = norm(v);
  return vecStr4(v.map((x) => x / nn));
}

function sizingFor(maxDim, wide) {
  if (maxDim === 2) return { cellPx: wide ? 50 : 56, font: wide ? '14px' : '16px' };
  return { cellPx: wide ? 42 : 48, font: wide ? '12.5px' : '14px' };
}

function numCell(v, font, extra, decimals) {
  const text = decimals ? fmt4(v) : fmt(v);
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
      o[`${i},${j}`] = numCell(M[i][j], font, extra, opts && opts.decimals);
    }
  }
  return { symbol, rows: n, cols: m, label, cellSize: cellPx, cellOverrides: o, ...(opts && opts.spec ? opts.spec : {}) };
}

const allCells = (rows, cols, style) => {
  const out = [];
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) out.push([i, j, style]);
  return out;
};

const colStyles = ['accent', 'primary', 'secondary'];
function colHl(rows, cols, from = 0) {
  const out = [];
  for (let j = from; j < cols; j++) for (let i = 0; i < rows; i++) out.push([i, j, colStyles[j % colStyles.length]]);
  return out;
}

const SUBS = ['₁', '₂', '₃', '₄'];

// orthonormal eigen-decomposition of a small symmetric PSD matrix
function symEig(S) {
  const n = S.length;
  const c = charPoly(S);
  let lams = polyRoots(c).map((r) => (Math.abs(r.im) < 1e-6 ? r.re : r.re)).map((l) => (Math.abs(l) < 1e-7 ? 0 : l));
  lams = lams.map(snap).sort((x, y) => y - x);
  const distinct = [];
  lams.forEach((l) => { if (!distinct.some((d) => Math.abs(d - l) < 1e-6)) distinct.push(l); });
  const out = [];
  for (const lam of distinct) {
    const M = S.map((row, i) => row.map((x, j) => (i === j ? x - lam : x)));
    const ns = nullSpace(M);
    const mult = lams.filter((l) => Math.abs(l - lam) < 1e-6).length;
    let vecs = ns.vecs.slice(0, Math.max(1, mult));
    // Gram–Schmidt inside the eigenspace
    const gs = [];
    let orthogonalized = false;
    for (const v of vecs) {
      let w = v.slice();
      for (const u of gs) {
        const cf = dot(w, u) / dot(u, u);
        if (Math.abs(cf) > 1e-9) orthogonalized = true;
        w = w.map((x, i) => x - cf * u[i]);
      }
      if (norm(w) > 1e-9) gs.push(tidy(w));
    }
    gs.forEach((v) => out.push({ lam, v, raw: vecs, orthogonalized, mult, R: ns.R, pivotCols: ns.pivotCols, free: ns.free }));
  }
  return { lams, pairs: out.slice(0, n) };
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values) {
  const A = clone(values);
  const m = A.length, n = A[0].length;
  const maxDim = Math.max(m, n);
  const narrow = sizingFor(maxDim, false);
  const wide = sizingFor(maxDim, true);
  const matA = (sz) => numMatrix('a', A, 'A', sz.cellPx, sz.font);

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Singular value decomposition of a ${m}×${n} matrix`,
    formula:
      'The goal is <strong>A = U Σ Vᵀ</strong> with U (m×m) and V (n×n) orthogonal and Σ (m×n) diagonal with the ' +
      'singular values σ₁ ≥ σ₂ ≥ … ≥ 0. Geometrically: A sends the orthonormal input directions vᵢ to the orthogonal ' +
      'output directions σᵢuᵢ — the unit sphere becomes an ellipsoid with semi-axes σᵢ. Plan: form AᵀA, take its ' +
      'eigenvalues and eigenvectors, set σᵢ = √λᵢ and uᵢ = A vᵢ / σᵢ, and assemble.',
    matrices: { A: matA(narrow) },
    layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {}
  });

  const At = transpose(A);
  const AtA = matMul(At, A).map((row) => row.map(snap));
  scenes.push({
    phase: 'gram',
    title: 'Form AᵀA',
    formula:
      `AᵀA is ${n}×${n}, symmetric (entry (i, j) is column i · column j of A) and positive semidefinite ` +
      '(xᵀAᵀAx = |Ax|² ≥ 0). Its eigenvalues are therefore real and non-negative, and their square roots are the ' +
      'singular values of A. Its eigenvectors are the right singular vectors, the columns of V.',
    matrices: { AT: numMatrix('a', At, 'Aᵀ', wide.cellPx, wide.font), A: matA(wide), G: numMatrix('g', AtA, 'AᵀA', wide.cellPx, wide.font) },
    layout: [
      { type: 'matrix', ref: 'AT' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'G' }
    ],
    highlights: { G: { cells: allCells(n, n, 'target') } }
  });

  const { lams, pairs } = symEig(AtA);
  const sig = lams.map((l) => Math.sqrt(Math.max(0, l)));
  const rank = sig.filter((s) => s > 1e-6).length;

  const lamRow = {
    symbol: 'l', rows: 1, cols: n, label: 'λ of AᵀA', showDimensions: false, cellSize: 56,
    cellOverrides: (() => { const o = {}; lams.forEach((l, i) => { o[`0,${i}`] = numCell(l, '14px'); }); return o; })()
  };
  const sigRow = {
    symbol: 's', rows: 1, cols: n, label: 'σ = √λ', showDimensions: false, cellSize: 64,
    cellOverrides: (() => { const o = {}; sig.forEach((s, i) => { o[`0,${i}`] = { display: sqrtStr(s), fontStyle: 'normal', style: { fontSize: '14px' } }; }); return o; })()
  };

  scenes.push({
    phase: 'eigen',
    title: `Singular values: σ = ${sig.map(sqrtStr).join(', ')}`,
    formula:
      `The eigenvalues of AᵀA are ${lams.map(fmt).join(', ')}, in decreasing order. Their square roots ` +
      `σ = ${sig.map((s) => fmt4(s)).join(', ')} are the singular values. ` +
      `${rank} of them ${rank === 1 ? 'is' : 'are'} non-zero, so A has rank ${rank}` +
      (rank < Math.min(m, n) ? ' — the zero singular value marks a direction A collapses.' : '.') +
      ' Check: Σσᵢ² = ‖A‖²_F, the sum of the squares of all entries of A, ' +
      `${fmt(A.flat().reduce((s, x) => s + x * x, 0))}.`,
    matrices: { G: numMatrix('g', AtA, 'AᵀA', narrow.cellPx, narrow.font), L: lamRow, S: sigRow },
    layout: [
      { type: 'matrix', ref: 'G' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'L' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'S' }
    ],
    highlights: { L: { cells: lams.map((_, i) => [0, i, 'primary']) }, S: { cells: sig.map((s, i) => [0, i, s > 1e-6 ? 'accent' : 'muted']) } }
  });

  // right singular vectors
  const V = AtA.map((_, i) => pairs.map((p) => p.v[i] / norm(p.v)));
  const Vint = AtA.map((_, i) => pairs.map((p) => p.v[i]));
  const seen = new Set();
  pairs.forEach((p, idx) => {
    if (seen.has(p.lam)) return;
    seen.add(p.lam);
    const group = pairs.filter((q) => Math.abs(q.lam - p.lam) < 1e-6);
    const S = AtA.map((row, i) => row.map((x, j) => (i === j ? x - p.lam : x)));
    const matS = numMatrix('s', S, `AᵀA − (${fmt(p.lam)})I`, narrow.cellPx, narrow.font, { cellStyle: (i, j) => (i === j ? { color: '#1e40af' } : null) });
    const matR = numMatrix('r', p.R, 'rref', narrow.cellPx, narrow.font);
    const matV = numMatrix('v', AtA.map((_, i) => group.map((q) => q.v[i])), group.length > 1 ? 'eigenvectors' : `v${SUBS[idx]}`, narrow.cellPx, narrow.font);
    scenes.push({
      phase: 'vvec',
      title: `λ = ${fmt(p.lam)}: eigenvector${group.length > 1 ? 's' : ''} of AᵀA`,
      formula:
        `Row reduce AᵀA − ${fmt(p.lam)}I and read ${group.length === 1 ? 'a null-space vector' : 'one null-space vector per free column'}: ` +
        `${group.map((q, k) => `v${SUBS[idx + k]} = ${vecStr(q.v)}`).join(', ')}, scaled to integers` +
        (p.orthogonalized ? ', after Gram–Schmidt inside the repeated eigenspace so the two are perpendicular' : '') +
        `. Normalized: ${group.map((q, k) => `v${SUBS[idx + k]} = ${unitStr(q.v)}`).join(', ')}. ` +
        (p.lam < 1e-7 ? 'This eigenvalue is 0, so A v = 0: the vector spans the null space of A and gets no u.' :
          `Since AᵀA vᵢ = λ vᵢ, |A vᵢ|² = vᵢᵀAᵀA vᵢ = λ — so A stretches this unit direction by exactly σ = ${sqrtStr(Math.sqrt(p.lam))}.`),
      matrices: { S: matS, R: matR, V: matV },
      layout: [
        { type: 'matrix', ref: 'S' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'R' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'V' }
      ],
      highlights: {
        S: { diagonal: 'primary' },
        R: { cells: [...p.pivotCols.map((cc, k) => [k, cc, 'accent']), ...p.free.map((f) => [0, f, 'secondary'])] },
        V: { cells: colHl(n, group.length).map(([i, j, s]) => [i, j, colStyles[(idx + j) % colStyles.length]]) }
      }
    });
  });

  // left singular vectors
  const us = [];
  for (let i = 0; i < n; i++) {
    if (sig[i] <= 1e-6) continue;
    const vi = V.map((row) => row[i]);
    const Av = matVec(A, vi);
    const u = Av.map((x) => x / sig[i]);
    us.push(u);
    const vint = Vint.map((row) => row[i]);
    const Avint = matVec(A, vint);
    const integral = vint.every((x) => Math.abs(x - Math.round(x)) < 1e-9);
    const den = norm(vint);
    const denStr = Math.abs(den - 1) < 1e-9 ? '' : `/${sqrtStr(den)}`;
    const AvStr = integral ? `${vecStr(Avint)}${denStr}` : vecStr4(Av);
    scenes.push({
      phase: 'uvec',
      title: `u${SUBS[i]} = A v${SUBS[i]} / σ${SUBS[i]}`,
      formula:
        `A v${SUBS[i]} = A·${unitStr(vint)} = ${AvStr}, of length ${sqrtStr(norm(Av))}` +
        (Math.abs(norm(Av) - sig[i]) < 1e-6 ? ` = σ${SUBS[i]}, as promised` : '') +
        `. Dividing by σ${SUBS[i]} gives the unit vector u${SUBS[i]} = ${integral ? unitStr(Avint) + ' = ' : ''}${vecStr4(u)}. ` +
        (us.length > 1
          ? `It is perpendicular to the previous u (dot product ${fmt4(dot(u, us[us.length - 2]))}), because A vᵢ · A vⱼ = vᵢᵀAᵀA vⱼ = λⱼ vᵢ·vⱼ = 0.`
          : 'The u vectors come out orthonormal automatically: A vᵢ · A vⱼ = vᵢᵀAᵀA vⱼ = λⱼ vᵢ·vⱼ = 0 for i ≠ j.'),
      matrices: {
        A: matA(narrow),
        V: numMatrix('v', vi.map((x) => [x]), `v${SUBS[i]}`, narrow.cellPx, narrow.font, { decimals: true, spec: { showDimensions: false } }),
        W: numMatrix('w', Av.map((x) => [x]), `A v${SUBS[i]}`, narrow.cellPx, narrow.font, { decimals: true, spec: { showDimensions: false } }),
        U: numMatrix('u', u.map((x) => [x]), `u${SUBS[i]}`, narrow.cellPx, narrow.font, { decimals: true, spec: { showDimensions: false } })
      },
      layout: [
        { type: 'matrix', ref: 'A' },
        { type: 'matrix', ref: 'V' },
        { type: 'operator', symbol: '=' },
        { type: 'matrix', ref: 'W' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'U' }
      ],
      highlights: {
        V: { cells: vi.map((_, r) => [r, 0, colStyles[i % 3]]) },
        W: { cells: Av.map((_, r) => [r, 0, 'muted']) },
        U: { cells: u.map((_, r) => [r, 0, colStyles[i % 3]]) }
      }
    });
  }

  // complete U to an orthonormal basis of R^m
  const usBefore = us.length;
  if (us.length < m) {
    const added = [];
    for (let k = 0; k < m && us.length < m; k++) {
      let w = Array.from({ length: m }, (_, i) => (i === k ? 1 : 0));
      for (const u of us) { const cf = dot(w, u); w = w.map((x, i) => x - cf * u[i]); }
      if (norm(w) > 1e-6) { const t = tidy(w); const uu = t.map((x) => x / norm(t)); us.push(uu); added.push({ from: k, t, uu }); }
    }
    scenes.push({
      phase: 'complete',
      title: `Complete U: ${m - usBefore} more orthonormal column${m - usBefore === 1 ? '' : 's'}`,
      formula:
        `Only ${usBefore} singular value${usBefore === 1 ? ' is' : 's are'} non-zero, so A vᵢ / σᵢ gives ${usBefore} column${usBefore === 1 ? '' : 's'} of U; ` +
        `U must be ${m}×${m} orthogonal, so the rest are any orthonormal vectors perpendicular to them — they span the left null space of A. ` +
        `Gram–Schmidt on a standard basis vector: ${added.map((a) => `e${SUBS[a.from]} minus its projections gives ${unitStr(a.t)}`).join('; ')}. ` +
        'These columns multiply zero rows of Σ, so they do not affect A; they complete the basis.',
      matrices: { U: numMatrix('u', Array.from({ length: m }, (_, i) => us.map((u) => u[i])), 'U', narrow.cellPx, narrow.font, { decimals: true }) },
      layout: [{ type: 'matrix', ref: 'U' }],
      highlights: { U: { cells: [...colHl(m, usBefore), ...allCells(m, m, 'secondary').filter(([, j]) => j >= usBefore)] } }
    });
  }

  const U = Array.from({ length: m }, (_, i) => us.map((u) => u[i]));
  const Sigma = Array.from({ length: m }, (_, i) => Array.from({ length: n }, (__, j) => (i === j ? sig[i] : 0)));
  const Vt = transpose(V);
  const matU = (sz) => numMatrix('u', U, 'U', sz.cellPx, sz.font, { decimals: true });
  const matSig = (sz) => numMatrix('s', Sigma, 'Σ', sz.cellPx, sz.font, { decimals: true, cellStyle: (i, j) => (i === j ? { color: '#1e40af' } : { color: '#94a3b8' }) });
  const matVt = (sz) => numMatrix('v', Vt, 'Vᵀ', sz.cellPx, sz.font, { decimals: true });

  scenes.push({
    phase: 'assemble',
    title: 'Assemble U, Σ and Vᵀ',
    formula:
      `U is ${m}×${m} with the uᵢ as columns; Σ is ${m}×${n} with σ₁ ≥ σ₂ ≥ … on its diagonal and zeros elsewhere` +
      (m !== n ? ` — rectangular, like A, with ${Math.abs(m - n)} extra ${m > n ? 'zero row' : 'zero column'}${Math.abs(m - n) === 1 ? '' : 's'}` : '') +
      '; Vᵀ has the vᵢ as rows. The order must match: column i of U, entry i of Σ, row i of Vᵀ belong together, ' +
      'because each triple is one equation A vᵢ = σᵢ uᵢ.',
    matrices: { U: matU(wide), S: matSig(wide), VT: matVt(wide) },
    layout: [
      { type: 'matrix', ref: 'U' },
      { type: 'matrix', ref: 'S' },
      { type: 'matrix', ref: 'VT' }
    ],
    highlights: {
      U: { cells: colHl(m, m) },
      S: { cells: sig.map((s, i) => (i < m ? [i, i, s > 1e-6 ? 'accent' : 'muted'] : null)).filter(Boolean) },
      VT: { rows: Vt.map((_, i) => [i, colStyles[i % 3]]) }
    }
  });

  const rebuilt = matMul(matMul(U, Sigma), Vt).map((row) => row.map(snap));
  scenes.push({
    phase: 'factor',
    title: 'A = U Σ Vᵀ',
    formula:
      'Right to left: Vᵀ rotates the input into the vᵢ axes, Σ scales axis i by σᵢ (and drops the extra dimensions ' +
      'when m ≠ n), U rotates into the output axes. Multiplying out: ' +
      `${rebuilt.map((row) => `(${row.map(fmt).join(', ')})`).join(' / ')} — the rows of A. ` +
      'Two orthogonal matrices and a diagonal one, for every matrix whatsoever: that is the theorem.',
    matrices: { A: matA(wide), U: matU(wide), S: matSig(wide), VT: matVt(wide) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'U' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'S' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'VT' }
    ],
    highlights: {
      A: { cells: allCells(m, n, 'target') },
      U: { cells: colHl(m, m) },
      S: { diagonal: 'primary' },
      VT: { rows: Vt.map((_, i) => [i, colStyles[i % 3]]) }
    }
  });

  // rank-one expansion
  const termMats = {};
  const layout = [{ type: 'matrix', ref: 'A' }, { type: 'operator', symbol: '=' }];
  const hl = { A: { cells: allCells(m, n, 'target') } };
  for (let i = 0; i < rank; i++) {
    const T = Array.from({ length: m }, (_, r) => Array.from({ length: n }, (__, c) => sig[i] * U[r][i] * V[c][i]));
    const ref = `T${i}`;
    termMats[ref] = numMatrix('t', T, `${sqrtStr(sig[i])}·u${SUBS[i]}v${SUBS[i]}ᵀ`, wide.cellPx, wide.font);
    if (i > 0) layout.push({ type: 'operator', symbol: '+' });
    layout.push({ type: 'matrix', ref });
    hl[ref] = { cells: allCells(m, n, colStyles[i % 3]) };
  }
  scenes.push({
    phase: 'rankone',
    title: `A as a sum of ${rank} rank-one piece${rank === 1 ? '' : 's'}`,
    formula:
      `Expanding U Σ Vᵀ column by column: A = ${sig.slice(0, rank).map((s, i) => `${sqrtStr(s)} u${SUBS[i]}v${SUBS[i]}ᵀ`).join(' + ')}` +
      (rank < Math.min(m, n) ? ' — the zero singular values contribute nothing' : '') +
      '. Each uᵢvᵢᵀ is a rank-one matrix that takes the component of x along vᵢ and outputs it along uᵢ. ' +
      (rank > 1
        ? `Keeping only the first term, ${sqrtStr(sig[0])} u₁v₁ᵀ, gives the best rank-one approximation of A; its error is the next singular value, ${sqrtStr(sig[1])}.`
        : 'With one term the matrix is itself rank one, and the term is exact.'),
    matrices: { A: matA(wide), ...termMats },
    layout,
    highlights: hl
  });

  const condition = rank === Math.min(m, n) ? sig[rank - 1] > 1e-9 ? sig[0] / sig[rank - 1] : null : null;
  scenes.push({
    phase: 'done',
    title: `A = U Σ Vᵀ with σ = ${sig.map(sqrtStr).join(', ')}`,
    formula:
      `Rank ${rank}; ‖A‖₂ = σ₁ = ${fmt4(sig[0])}, the most A stretches any unit vector, attained at v₁ = ${vecStr4(V.map((row) => row[0]))}; ` +
      `‖A‖_F = √(Σσᵢ²) = ${fmt4(Math.sqrt(sig.reduce((s, x) => s + x * x, 0)))}. ` +
      (condition !== null
        ? `Condition number σ₁/σ${SUBS[rank - 1]} = ${fmt4(condition)}${condition > 100 ? ' — ill-conditioned' : condition < 3 ? ' — well-conditioned' : ''}. `
        : 'Condition number ∞: the matrix is singular, some direction is collapsed to zero. ') +
      `The unit ${n === 2 ? 'circle' : 'sphere'} in the input maps to ${m === 2 ? 'an ellipse' : 'an ellipsoid'} with semi-axes ` +
      `${sig.slice(0, rank).map((s) => sqrtStr(s)).join(', ')} along u${SUBS[0]}${rank > 1 ? `, …, u${SUBS[rank - 1]}` : ''}. ` +
      (m === n && rank === n ? 'A is invertible with A⁻¹ = V Σ⁻¹ Uᵀ. ' : 'The pseudoinverse A⁺ = V Σ⁺ Uᵀ inverts the non-zero singular values and gives least-squares solutions. ') +
      'Columns u₁…u_r span the column space, v₁…v_r the row space, the rest of V the null space, the rest of U the left null space: all four fundamental subspaces, orthonormally.',
    matrices: { U: matU(wide), S: matSig(wide), VT: matVt(wide) },
    layout: [
      { type: 'matrix', ref: 'U' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'S' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'VT' }
    ],
    highlights: {
      U: { cells: colHl(m, rank) },
      S: { cells: sig.slice(0, Math.min(m, n)).map((s, i) => [i, i, s > 1e-6 ? 'accent' : 'muted']) },
      VT: { rows: Vt.slice(0, rank).map((_, i) => [i, colStyles[i % 3]]) }
    }
  });

  return scenes;
}

export function randomMatrix(m, n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  return Array.from({ length: m }, () => Array.from({ length: n }, () => rnd(-2, 3)));
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
      className="sv-info"
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
      <span className="sv-tip">{tip}</span>
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
          className="sv-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="sv-stepper-btn"
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
      className={active ? 'sv-pill sv-pill-active' : 'sv-pill'}
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
export default function SVDWrapper({
  defaultPreset = DEFAULT_PRESET,
  dimRange = [2, 3],
  explanations = null,
  title = 'Singular Value Decomposition',
  subtitle = 'AᵀA gives the singular values and V; uᵢ = A vᵢ / σᵢ gives U; then A = U Σ Vᵀ, a sum of rank-one pieces.',
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
      <style dangerouslySetInnerHTML={{ __html: SVD_CSS }} />

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
          <FieldLabel info={SVD_INFO}>Preset</FieldLabel>
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
            <button className="sv-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random small-integer matrix">
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
                    className="sv-cell-input"
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
