'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';
import { charPoly, polyRoots, nullSpace, tidy } from './EigenWrapper';

// ===========================================================
// SpectralWrapper v1
// The spectral decomposition of a symmetric 2×2 or 3×3 matrix:
//
//   A = Q Λ Qᵀ = Σ λᵢ qᵢ qᵢᵀ
//
//   notsym       : terminal — A is not symmetric
//   eigen        : the eigenvalues (real, always)
//   eigvec       : one null-space vector per free column of A − λI
//   orthogonalize: Gram–Schmidt inside a repeated eigenspace
//   normalize    : each eigenvector divided by its length → Q
//   orthocheck   : Qᵀ Q = I
//   factor       : A = Q · Λ · Qᵀ
//   rankone      : A = λ₁ q₁q₁ᵀ + λ₂ q₂q₂ᵀ + …
//   done         : definiteness from the signs of the eigenvalues
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

const SP_INFO =
  'A symmetric matrix has real eigenvalues and eigenvectors that can be chosen ' +
  'perpendicular to one another. Normalize them to unit length and put them ' +
  'in Q; then Q⁻¹ = Qᵀ and A = Q Λ Qᵀ with the eigenvalues in Λ. Equivalently ' +
  'A is a sum of rank-one pieces λᵢ qᵢqᵢᵀ, one per eigenvector — a projection ' +
  'onto each eigen-direction, weighted by its eigenvalue. The signs of the ' +
  'eigenvalues classify the quadratic form xᵀAx.';

const SP_CSS = `
  .sp-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .sp-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .sp-pill:hover { border-color: #94a3b8; }
  .sp-pill-active:hover { border-color: #2563eb; }

  .sp-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .sp-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }
  .sp-cell-input.sp-mirror { color: #64748b; background: #f8fafc; }

  .sp-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .sp-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .sp-info:hover, .sp-info:focus { background: #bfdbfe; outline: none; }

  .sp-info .sp-tip {
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
  .sp-info .sp-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .sp-info:hover .sp-tip, .sp-info:focus .sp-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets (all symmetric except the last)
// -----------------------------------------------------------
export const PRESETS = {
  twoByTwo: {
    label: '2×2 classic',
    note: 'eigenvalues 3 and 1, eigenvectors (1, 1) and (1, −1)',
    values: [[2, 1], [1, 2]]
  },
  indefinite: {
    label: 'Indefinite',
    note: 'eigenvalues 2 and −3: a saddle',
    values: [[1, 2], [2, -2]]
  },
  projection: {
    label: 'Projection',
    note: 'eigenvalues 1 and 0: a single rank-one term',
    values: [[0.5, 0.5], [0.5, 0.5]]
  },
  distinct: {
    label: '3×3 distinct',
    note: 'eigenvalues 11, 2, 1',
    values: [[2, 0, 0], [0, 3, 4], [0, 4, 9]]
  },
  repeated: {
    label: 'Repeated',
    note: 'λ = 4 once and λ = 1 twice: Gram–Schmidt inside the plane',
    values: [[2, 1, 1], [1, 2, 1], [1, 1, 2]]
  },
  semidefinite: {
    label: 'Semidefinite',
    note: 'eigenvalues 2, 2, 0: positive semidefinite, singular',
    values: [[1, 1, 0], [1, 1, 0], [0, 0, 2]]
  },
  notSymmetric: {
    label: 'Not symmetric',
    note: 'a shear: the theorem does not apply',
    values: [[1, 2], [0, 1]]
  }
};

export const DEFAULT_PRESET = 'twoByTwo';

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

function fmt4(v) {
  const r = Math.round(v * 1e4) / 1e4;
  const s = Number.isInteger(r) ? String(r) : r.toFixed(4).replace(/\.?0+$/, '');
  return (s === '-0' ? '0' : s).replace(/-/g, '−');
}

function isSymmetric(A) {
  const n = A.length;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.abs(A[i][j] - A[j][i]) > 1e-9) return false;
  return true;
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

function trace(M) {
  let s = 0;
  for (let i = 0; i < M.length; i++) s += M[i][i];
  return s;
}

function vecStr(v) {
  return `(${v.map(fmt).join(', ')})`;
}

// "(1, 1)/√2" when v is integral, else decimals
function unitStr(v) {
  const integral = v.every((x) => Math.abs(x - Math.round(x)) < 1e-9);
  const n2 = Math.round(dot(v, v));
  if (integral && n2 > 0) {
    const r = Math.sqrt(n2);
    if (Math.abs(r - Math.round(r)) < 1e-9) {
      return Math.round(r) === 1 ? vecStr(v) : `${vecStr(v)}/${Math.round(r)}`;
    }
    return `${vecStr(v)}/√${n2}`;
  }
  const nn = norm(v);
  return `(${v.map((x) => fmt4(x / nn)).join(', ')})`;
}

function sizingFor(n, wide) {
  if (n === 2) return { cellPx: wide ? 50 : 56, font: wide ? '14px' : '16px' };
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
function colHl(rows, cols) {
  const out = [];
  for (let j = 0; j < cols; j++) for (let i = 0; i < rows; i++) out.push([i, j, colStyles[j % colStyles.length]]);
  return out;
}

const SUBS = ['₁', '₂', '₃', '₄'];

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values) {
  const A = clone(values);
  const n = A.length;
  const narrow = sizingFor(n, false);
  const wide = sizingFor(n, true);
  const matA = (sz) => numMatrix('a', A, 'A', sz.cellPx, sz.font);

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Spectral decomposition of a ${n}×${n} symmetric matrix`,
    formula:
      'For a symmetric matrix the eigenvalues are real and the eigenvectors can be chosen orthonormal. ' +
      'The plan: find the eigenvalues, one unit eigenvector for each (orthogonalizing inside any repeated eigenspace), ' +
      'collect them in Q, and write <strong>A = Q Λ Qᵀ</strong> — no inverse needed, since Q⁻¹ = Qᵀ. ' +
      'Then split A into rank-one pieces, one per eigenvector.',
    matrices: { A: matA(narrow) },
    layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {}
  });

  if (!isSymmetric(A)) {
    const bad = [];
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.abs(A[i][j] - A[j][i]) > 1e-9) bad.push([i, j], [j, i]);
    scenes.push({
      phase: 'notsym',
      title: 'Not symmetric: the spectral theorem does not apply',
      formula:
        `A ≠ Aᵀ — the highlighted entries differ across the diagonal. Only symmetric matrices are guaranteed real ` +
        'eigenvalues and an orthonormal eigenvector basis; this matrix may still diagonalize with a non-orthogonal P ' +
        '(the diagonalization tool), or may be defective or have complex eigenvalues. Edit an entry to restore symmetry ' +
        '— the grid mirrors edits automatically.',
      matrices: { A: matA(narrow) },
      layout: [{ type: 'matrix', ref: 'A' }],
      highlights: { A: { cells: bad.map(([i, j]) => [i, j, 'muted']), diagonal: 'primary' } }
    });
    return scenes;
  }

  const c = charPoly(A);
  const roots = polyRoots(c).map((r) => r.re).sort((x, y) => y - x);
  const tr = trace(A);

  const lamRowOf = (lams, label) => ({
    symbol: 'l', rows: 1, cols: lams.length, label: label || 'eigenvalues',
    showDimensions: false,
    cellSize: 56,
    cellOverrides: (() => {
      const o = {};
      lams.forEach((l, i) => { o[`0,${i}`] = numCell(l, '14px'); });
      return o;
    })()
  });

  scenes.push({
    phase: 'eigen',
    title: `Eigenvalues: ${roots.map(fmt).join(', ')}`,
    formula:
      `det(A − λI) = 0 gives λ = ${roots.map(fmt).join(', ')} — all real, as they must be for a symmetric matrix. ` +
      `They add to the trace, ${fmt(tr)}. ` +
      'The eigenvalue tool shows the derivation; here it is the starting point.',
    matrices: { A: matA(narrow), L: lamRowOf(roots) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'L' }
    ],
    highlights: { L: { cells: roots.map((_, i) => [0, i, 'accent']) } }
  });

  // distinct eigenvalues and their eigenspaces
  const distinct = [];
  roots.forEach((r) => { if (!distinct.some((d) => Math.abs(d - r) < 1e-6)) distinct.push(r); });

  const pairs = []; // { lam, v (integer-ish), q (unit) }
  for (const lam of distinct) {
    const S = A.map((row, i) => row.map((x, j) => (i === j ? x - lam : x)));
    const ns = nullSpace(S);
    const algMult = roots.filter((r) => Math.abs(r - lam) < 1e-6).length;
    const vecs = ns.vecs;

    const matS = numMatrix('s', S, `A − (${fmt(lam)})I`, narrow.cellPx, narrow.font, {
      cellStyle: (i, j) => (i === j ? { color: '#1e40af' } : null)
    });
    const matR = numMatrix('r', ns.R, 'rref', narrow.cellPx, narrow.font);
    const matV = numMatrix('v', A.map((_, i) => vecs.map((v) => v[i])), vecs.length > 1 ? 'eigenvectors' : 'v', narrow.cellPx, narrow.font);

    scenes.push({
      phase: 'eigvec',
      title: `λ = ${fmt(lam)}: null space of A − ${fmt(lam)}I`,
      formula:
        `Row reduce A − ${fmt(lam)}I: ${ns.pivotCols.length} pivot${ns.pivotCols.length === 1 ? '' : 's'}, ` +
        `${vecs.length} free column${vecs.length === 1 ? '' : 's'}, so the eigenspace has dimension ${vecs.length}` +
        (algMult > 1 ? ` — equal to the multiplicity ${algMult}, as the spectral theorem guarantees for symmetric matrices` : '') +
        `. Eigenvector${vecs.length === 1 ? '' : 's'}: ${vecs.map(vecStr).join(' and ')}, scaled to small integers.` +
        (vecs.length > 1 && Math.abs(dot(vecs[0], vecs[1])) > 1e-9
          ? ` These two are not perpendicular (dot product ${fmt(dot(vecs[0], vecs[1]))}); the next step fixes that.`
          : vecs.length > 1 ? ' These happen to be perpendicular already.' : ''),
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
        R: { cells: [...ns.pivotCols.map((cc, k) => [k, cc, 'accent']), ...ns.free.map((f) => [0, f, 'secondary'])] },
        V: { cells: colHl(n, vecs.length) }
      }
    });

    // Gram–Schmidt inside a repeated eigenspace
    let ortho = vecs.map((v) => v.slice());
    if (vecs.length > 1) {
      const out = [];
      for (let k = 0; k < vecs.length; k++) {
        let w = vecs[k].slice();
        for (const u of out) {
          const coef = dot(w, u) / dot(u, u);
          w = w.map((x, i) => x - coef * u[i]);
        }
        out.push(tidy(w));
      }
      ortho = out;
      const before = vecs;
      const matB = numMatrix('v', A.map((_, i) => before.map((v) => v[i])), 'before', narrow.cellPx, narrow.font);
      const matO = numMatrix('u', A.map((_, i) => out.map((v) => v[i])), 'orthogonal', narrow.cellPx, narrow.font);
      const coef = dot(before[1], out[0]) / dot(out[0], out[0]);
      scenes.push({
        phase: 'orthogonalize',
        title: `λ = ${fmt(lam)}: Gram–Schmidt inside the eigenspace`,
        formula:
          `Any basis of the eigenspace consists of eigenvectors, so we may replace the second by its component perpendicular to the first: ` +
          `u₂ = v₂ − (v₂·u₁ / u₁·u₁) u₁ = ${vecStr(before[1])} − (${fmt(coef)}) ${vecStr(out[0])} = ${vecStr(out[1])} (rescaled to integers). ` +
          `Now u₁·u₂ = ${fmt(dot(out[0], out[1]))}. Eigenvectors for different eigenvalues of a symmetric matrix are ` +
          'perpendicular automatically; only inside a repeated eigenspace is a choice needed.',
        matrices: { B: matB, O: matO },
        layout: [
          { type: 'matrix', ref: 'B' },
          { type: 'operator', symbol: '→' },
          { type: 'matrix', ref: 'O' }
        ],
        highlights: { B: { cells: colHl(n, before.length) }, O: { cells: colHl(n, out.length) } }
      });
    }

    ortho.forEach((v) => pairs.push({ lam, v, q: v.map((x) => x / norm(v)) }));
  }

  const m = pairs.length;
  const Q = A.map((_, i) => pairs.map((p) => p.q[i]));
  const V = A.map((_, i) => pairs.map((p) => p.v[i]));
  const lams = pairs.map((p) => p.lam);
  const Lam = A.map((row, i) => row.map((_, j) => (i === j ? lams[i] : 0)));
  const matQ = (sz, label) => numMatrix('q', Q, label || 'Q', sz.cellPx, sz.font, { decimals: true });
  const matQT = (sz) => numMatrix('q', transpose(Q), 'Qᵀ', sz.cellPx, sz.font, { decimals: true });
  const matLam = (sz, M) => numMatrix('d', M || Lam, 'Λ', sz.cellPx, sz.font, {
    cellStyle: (i, j) => (i === j ? { color: '#1e40af' } : { color: '#94a3b8' })
  });

  scenes.push({
    phase: 'normalize',
    title: 'Normalize: unit eigenvectors into Q',
    formula:
      `Divide each eigenvector by its length: ${pairs.map((p, i) => `q${SUBS[i]} = ${unitStr(p.v)}`).join(', ')}. ` +
      `The eigenvectors are mutually perpendicular${distinct.length === m ? ' — different eigenvalues of a symmetric matrix guarantee it' : ''}, ` +
      'so the columns of Q are orthonormal: Q is an orthogonal matrix. Λ holds the eigenvalues in the same column order.',
    matrices: { V: numMatrix('v', V, 'eigenvectors', narrow.cellPx, narrow.font), Q: matQ(narrow), L: matLam(narrow) },
    layout: [
      { type: 'matrix', ref: 'V' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'Q' },
      { type: 'matrix', ref: 'L' }
    ],
    highlights: { V: { cells: colHl(n, m) }, Q: { cells: colHl(n, m) }, L: { diagonal: 'primary' } }
  });

  const QtQ = matMul(transpose(Q), Q).map((row) => row.map(snap));
  scenes.push({
    phase: 'orthocheck',
    title: 'Check: Qᵀ Q = I',
    formula:
      'Entry (i, j) of QᵀQ is qᵢ·qⱼ: 1 on the diagonal because each column has unit length, 0 off it because the ' +
      'columns are perpendicular. So Qᵀ is the inverse of Q, and the change of basis to eigen-coordinates costs a ' +
      'transpose instead of an inversion. That is the whole practical advantage of the symmetric case.',
    matrices: { QT: matQT(wide), Q: matQ(wide), I: numMatrix('i', QtQ, 'I', wide.cellPx, wide.font) },
    layout: [
      { type: 'matrix', ref: 'QT' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'Q' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'I' }
    ],
    highlights: { I: { diagonal: 'target' } }
  });

  const rebuilt = matMul(matMul(Q, Lam), transpose(Q)).map((row) => row.map(snap));
  scenes.push({
    phase: 'factor',
    title: 'A = Q Λ Qᵀ',
    formula:
      'The spectral decomposition. Right to left: Qᵀ rotates into the eigenvector axes, Λ scales each axis by its ' +
      'eigenvalue, Q rotates back. Multiplying out gives ' +
      `${rebuilt.map((row) => `(${row.map(fmt).join(', ')})`).join(' / ')} — the rows of A. ` +
      'Because Q is orthogonal, this is a diagonalization by a rotation (or reflection) of the axes: the quadratic form ' +
      'xᵀAx becomes Σ λᵢ yᵢ² in the coordinates y = Qᵀx.',
    matrices: { A: matA(wide), Q: matQ(wide), L: matLam(wide), QT: matQT(wide) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'Q' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'L' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'QT' }
    ],
    highlights: {
      A: { cells: allCells(n, n, 'target') },
      Q: { cells: colHl(n, m) },
      L: { diagonal: 'primary' },
      QT: { rows: pairs.map((_, i) => [i, colStyles[i % colStyles.length]]) }
    }
  });

  // rank-one expansion
  const terms = pairs.map((p) => A.map((_, i) => A.map((__, j) => p.lam * p.q[i] * p.q[j])));
  const nonzero = pairs.map((p, k) => ({ p, k })).filter(({ p }) => Math.abs(p.lam) > EPS);
  const termMats = {};
  const layout = [{ type: 'matrix', ref: 'A' }, { type: 'operator', symbol: '=' }];
  const hl = { A: { cells: allCells(n, n, 'target') } };
  const shown = nonzero.length ? nonzero : [{ p: pairs[0], k: 0 }];
  shown.forEach(({ p, k }, idx) => {
    const ref = `T${k}`;
    termMats[ref] = numMatrix('t', terms[k], `${fmt(p.lam)}·q${SUBS[k]}q${SUBS[k]}ᵀ`, wide.cellPx, wide.font);
    if (idx > 0) layout.push({ type: 'operator', symbol: '+' });
    layout.push({ type: 'matrix', ref });
    hl[ref] = { cells: allCells(n, n, colStyles[k % colStyles.length]) };
  });
  scenes.push({
    phase: 'rankone',
    title: 'A as a sum of rank-one projections',
    formula:
      `Expanding Q Λ Qᵀ column by column: A = ${pairs.map((p, k) => `${fmt(p.lam)} q${SUBS[k]}q${SUBS[k]}ᵀ`).join(' + ')}. ` +
      'Each qᵢqᵢᵀ is the orthogonal projection onto the line of qᵢ, so A acts by projecting x onto each eigen-direction, ' +
      'scaling by that eigenvalue, and adding up. ' +
      (nonzero.length < pairs.length
        ? `The term${pairs.length - nonzero.length === 1 ? '' : 's'} with eigenvalue 0 vanish${pairs.length - nonzero.length === 1 ? 'es' : ''}: A has rank ${nonzero.length}. `
        : '') +
      'The pieces are computed with the integer eigenvectors, λ vvᵀ / (v·v), which is why they come out as fractions.',
    matrices: { A: matA(wide), ...termMats },
    layout,
    highlights: hl
  });

  // done: definiteness
  const pos = lams.filter((l) => l > 1e-9).length, neg = lams.filter((l) => l < -1e-9).length, zero = m - pos - neg;
  let kind, why;
  if (neg === 0 && zero === 0) { kind = 'positive definite'; why = 'every eigenvalue is positive, so xᵀAx > 0 for every non-zero x'; }
  else if (pos === 0 && zero === 0) { kind = 'negative definite'; why = 'every eigenvalue is negative, so xᵀAx < 0 for every non-zero x'; }
  else if (neg === 0) { kind = 'positive semidefinite'; why = `the eigenvalues are non-negative with ${zero} zero${zero === 1 ? '' : 's'}, so xᵀAx ≥ 0, with equality along the null space`; }
  else if (pos === 0) { kind = 'negative semidefinite'; why = 'the eigenvalues are non-positive with a zero'; }
  else { kind = 'indefinite'; why = 'the eigenvalues have both signs, so xᵀAx takes both signs — a saddle'; }
  const detA = lams.reduce((s, l) => s * l, 1);

  scenes.push({
    phase: 'done',
    title: `A = Q Λ Qᵀ, ${kind}`,
    formula:
      `Eigenvalues ${lams.map(fmt).join(', ')}: A is <strong>${kind}</strong> because ${why}. ` +
      `det A = Π λᵢ = ${fmt(detA)} and tr A = Σ λᵢ = ${fmt(tr)}. ` +
      'In the rotated coordinates y = Qᵀx the quadratic form is ' +
      `${lams.map((l, i) => `${fmt(l)}y${SUBS[i]}²`).join(' + ').replace(/\+ −/g, '− ')}` +
      ', and its level sets are ellipses or hyperbolas with the columns of Q as axes. ' +
      'Powers and functions follow as for any diagonalization: Aᵏ = Q Λᵏ Qᵀ, and for positive definite A the ' +
      'square root √A = Q √Λ Qᵀ is symmetric positive definite too.',
    matrices: { A: matA(wide), Q: matQ(wide), L: matLam(wide), QT: matQT(wide) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'Q' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'L' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'QT' }
    ],
    highlights: {
      Q: { cells: colHl(n, m) },
      L: { cells: lams.map((l, i) => [i, i, l > 1e-9 ? 'accent' : l < -1e-9 ? 'muted' : 'secondary']) },
      QT: { rows: pairs.map((_, i) => [i, colStyles[i % colStyles.length]]) }
    }
  });

  return scenes;
}

// random symmetric matrix with small integer eigenvalues: Q D Qᵀ is not
// integer in general, so use A = B + Bᵀ with small integer B instead
export function randomSymmetric(n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  const A = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    A[i][i] = rnd(-2, 5);
    for (let j = i + 1; j < n; j++) { const v = rnd(-2, 3); A[i][j] = v; A[j][i] = v; }
  }
  return A;
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
      className="sp-info"
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
      <span className="sp-tip">{tip}</span>
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
          className="sp-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="sp-stepper-btn"
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
      className={active ? 'sp-pill sp-pill-active' : 'sp-pill'}
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
export default function SpectralWrapper({
  defaultPreset = DEFAULT_PRESET,
  sizeRange = [2, 3],
  mirrorEdits = true,
  explanations = null,
  title = 'Spectral Decomposition',
  subtitle = 'Orthonormal eigenvectors into Q, eigenvalues into Λ, and A = Q Λ Qᵀ — a sum of weighted projections.',
  defaultSpeed = 1800
}) {
  const initial = PRESETS[defaultPreset] ? PRESETS[defaultPreset].values : PRESETS[DEFAULT_PRESET].values;
  const [values, setValues] = useState(() => clone(initial));
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
  const [drafts, setDrafts] = useState({});
  const [mirror, setMirror] = useState(mirrorEdits);

  const n = values.length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setValues(clone(PRESETS[key].values));
    setMirror(key !== 'notSymmetric');
  }, []);

  const setSize = (nn) => { setPreset(null); setDrafts({}); setValues((v) => resize(v, nn)); };
  const shuffle = () => { setPreset(null); setDrafts({}); setMirror(true); setValues(randomSymmetric(n)); };

  const editCell = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`${i},${j}`]: raw }));
    const num = parseFloat(raw);
    const v = Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
    if (v !== null) setValues((M) => {
      const next = clone(M);
      next[i][j] = v;
      if (mirror) next[j][i] = v;
      return next;
    });
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
      <style dangerouslySetInnerHTML={{ __html: SP_CSS }} />

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
          <FieldLabel info={SP_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '440px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Size (symmetric)</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={n} onChange={setSize} min={sizeRange[0]} max={sizeRange[sizeRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times; {n}</span>
            <button className="sp-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random symmetric matrix with small integer entries">
              Shuffle
            </button>
            <label style={{ marginLeft: '10px', fontSize: '12.5px', color: '#475569', display: 'inline-flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              <input type="checkbox" checked={mirror} onChange={(e) => setMirror(e.target.checked)} style={{ accentColor: '#2563eb' }} />
              mirror edits
            </label>
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
                    className={'sp-cell-input' + (mirror && j < i ? ' sp-mirror' : '')}
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
