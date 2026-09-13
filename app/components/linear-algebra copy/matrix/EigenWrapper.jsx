'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';

// ===========================================================
// EigenWrapper v1
// Finds the eigenvalues and eigenvectors of a numeric 2×2 or 3×3
// matrix the way it is done by hand:
//
//   shift   : form A − λI, with λ on the diagonal
//   expand  : det(A − λI) expanded into the characteristic
//             polynomial p(λ), shown monic with its coefficients
//   roots   : the roots of p, real or complex
//   eigvec  : for each real eigenvalue, row reduce A − λI and read
//             a null-space vector, scaled to integers when possible
//   done    : eigenvalues, eigenvectors, and the checks
//             trace = Σλ, det = Πλ, A v = λ v
//
// Phases carried on each scene: intro, shift, expand, roots,
// complex (terminal, when the roots are not all real), eigvec, done.
//
// Root finding: quadratic formula for 2×2, Cardano / trigonometric
// method for 3×3, then Newton polishing and snapping to nearby
// simple values. Null spaces: reduced row echelon form with a
// tolerance, one vector per free column.
//
// Standalone file: imports the core (ScenePlayer, formatNumber),
// never modifies it. buildScenes and PRESETS are exported for the
// frozen-state diagrams.
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

const EIG_INFO =
  'An eigenvector of A is a non-zero vector that A merely scales: A v = λ v. ' +
  'The scale factor λ is the eigenvalue. Rewriting as (A − λI) v = 0, a ' +
  'non-zero v exists exactly when det(A − λI) = 0, so the eigenvalues are the ' +
  'roots of the characteristic polynomial det(A − λI), and each eigenvector ' +
  'is a null-space vector of A − λI for its λ. The roots may be complex; ' +
  'symmetric matrices always have real ones.';

const EG_CSS = `
  .eg-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .eg-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .eg-pill:hover { border-color: #94a3b8; }
  .eg-pill-active:hover { border-color: #2563eb; }

  .eg-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .eg-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .eg-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .eg-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .eg-info:hover, .eg-info:focus { background: #bfdbfe; outline: none; }

  .eg-info .eg-tip {
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
  .eg-info .eg-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .eg-info:hover .eg-tip, .eg-info:focus .eg-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  distinct: {
    label: 'Three distinct',
    note: 'eigenvalues 1, 2, 11',
    values: [[2, 0, 0], [0, 3, 4], [0, 4, 9]]
  },
  symmetric2: {
    label: 'Symmetric 2×2',
    note: 'eigenvalues 1 and 3, perpendicular eigenvectors',
    values: [[2, 1], [1, 2]]
  },
  repeated: {
    label: 'Repeated eigenvalue',
    note: 'λ = 1 twice with a plane of eigenvectors, and λ = 4',
    values: [[2, 1, 1], [1, 2, 1], [1, 1, 2]]
  },
  defective: {
    label: 'Defective',
    note: 'λ = 1 twice but only one eigenvector',
    values: [[1, 1], [0, 1]]
  },
  triangular: {
    label: 'Triangular',
    note: 'eigenvalues on the diagonal',
    values: [[1, 2, 3], [0, 4, 5], [0, 0, 6]]
  },
  rotation: {
    label: 'Rotation',
    note: 'complex eigenvalues ±i',
    values: [[0, -1], [1, 0]]
  }
};

export const DEFAULT_PRESET = 'distinct';

const EPS = 1e-9;
const TOL = 1e-6;

// -----------------------------------------------------------
// Numeric helpers
// -----------------------------------------------------------
function clone(M) {
  return M.map((row) => row.slice());
}

function snap(x) {
  // snap to a nearby integer, half or third if within tolerance
  for (const d of [1, 2, 3, 4, 5, 6, 8, 10]) {
    const r = Math.round(x * d) / d;
    if (Math.abs(r - x) < 1e-7) return r;
  }
  return Math.round(x * 1e6) / 1e6;
}

function fmt(v) {
  return formatNumber(snap(v)).replace(/-/g, '−');
}

function det2(M) {
  return M[0][0] * M[1][1] - M[0][1] * M[1][0];
}

function det3(M) {
  return M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1])
       - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0])
       + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
}

function trace(M) {
  let s = 0;
  for (let i = 0; i < M.length; i++) s += M[i][i];
  return s;
}

// monic characteristic polynomial coefficients, highest degree first
export function charPoly(A) {
  const n = A.length;
  if (n === 2) return [1, -trace(A), det2(A)];
  const e2 = (A[0][0] * A[1][1] - A[0][1] * A[1][0])
           + (A[0][0] * A[2][2] - A[0][2] * A[2][0])
           + (A[1][1] * A[2][2] - A[1][2] * A[2][1]);
  return [1, -trace(A), e2, -det3(A)];
}

function polyEval(c, x) {
  let y = 0;
  for (let i = 0; i < c.length; i++) y = y * x + c[i];
  return y;
}

function polyDeriv(c) {
  const n = c.length - 1;
  const out = [];
  for (let i = 0; i < n; i++) out.push(c[i] * (n - i));
  return out;
}

function newton(c, x0) {
  let x = x0;
  const d = polyDeriv(c);
  for (let k = 0; k < 40; k++) {
    const f = polyEval(c, x);
    const fp = polyEval(d, x);
    if (Math.abs(fp) < 1e-14) break;
    const nx = x - f / fp;
    if (Math.abs(nx - x) < 1e-13) { x = nx; break; }
    x = nx;
  }
  return x;
}

// roots of a monic polynomial of degree 2 or 3: [{ re, im }]
export function polyRoots(c) {
  const n = c.length - 1;
  if (n === 2) {
    const b = c[1], k = c[2];
    const disc = b * b - 4 * k;
    if (disc >= -1e-12) {
      const s = Math.sqrt(Math.max(0, disc));
      return [{ re: (-b + s) / 2, im: 0 }, { re: (-b - s) / 2, im: 0 }];
    }
    const s = Math.sqrt(-disc);
    return [{ re: -b / 2, im: s / 2 }, { re: -b / 2, im: -s / 2 }];
  }
  // cubic x³ + a x² + b x + d
  const a = c[1], b = c[2], d = c[3];
  const p = b - a * a / 3;
  const q = 2 * a * a * a / 27 - a * b / 3 + d;
  const shift = -a / 3;
  const disc = q * q / 4 + p * p * p / 27;
  let roots;
  if (Math.abs(p) < 1e-12 && Math.abs(q) < 1e-12) {
    roots = [{ re: shift, im: 0 }, { re: shift, im: 0 }, { re: shift, im: 0 }];
  } else if (disc > 1e-12) {
    const sq = Math.sqrt(disc);
    const u = Math.cbrt(-q / 2 + sq);
    const v = Math.cbrt(-q / 2 - sq);
    const t1 = u + v;
    const reC = -t1 / 2;
    const imC = (Math.sqrt(3) / 2) * (u - v);
    roots = [{ re: t1 + shift, im: 0 }, { re: reC + shift, im: imC }, { re: reC + shift, im: -imC }];
  } else {
    const r = 2 * Math.sqrt(-p / 3);
    let arg = (3 * q) / (p * r);
    arg = Math.max(-1, Math.min(1, arg));
    const theta = Math.acos(arg);
    roots = [0, 1, 2].map((k) => ({ re: r * Math.cos((theta - 2 * Math.PI * k) / 3) + shift, im: 0 }));
  }
  // polish real roots and snap
  return roots.map((r) => (Math.abs(r.im) < 1e-9
    ? { re: snap(newton(c, r.re)), im: 0 }
    : { re: snap(r.re), im: snap(r.im) }));
}

// reduced row echelon form with tolerance; returns { R, pivotCols }
export function rref(Min) {
  const M = clone(Min);
  const m = M.length, n = M[0].length;
  let r = 0;
  const pivotCols = [];
  for (let j = 0; j < n && r < m; j++) {
    let p = -1, best = TOL;
    for (let i = r; i < m; i++) if (Math.abs(M[i][j]) > best) { best = Math.abs(M[i][j]); p = i; }
    if (p === -1) continue;
    [M[p], M[r]] = [M[r], M[p]];
    const d = M[r][j];
    for (let c = 0; c < n; c++) M[r][c] /= d;
    for (let i = 0; i < m; i++) {
      if (i === r) continue;
      const f = M[i][j];
      if (Math.abs(f) < TOL) continue;
      for (let c = 0; c < n; c++) M[i][c] -= f * M[r][c];
    }
    pivotCols.push(j);
    r++;
  }
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) { if (Math.abs(M[i][j]) < TOL) M[i][j] = 0; M[i][j] = snap(M[i][j]); }
  return { R: M, pivotCols };
}

// null-space basis of a square matrix from its rref, integer-scaled when possible
export function nullSpace(M) {
  const n = M.length;
  const { R, pivotCols } = rref(M);
  const free = [];
  for (let j = 0; j < n; j++) if (!pivotCols.includes(j)) free.push(j);
  const vecs = free.map((f) => {
    const v = new Array(n).fill(0);
    v[f] = 1;
    pivotCols.forEach((c, k) => { v[c] = -R[k][f]; });
    return tidy(v);
  });
  return { R, pivotCols, free, vecs };
}

export function tidy(v) {
  // scale to small integers if some multiple k ≤ 12 makes every entry integral
  for (let k = 1; k <= 12; k++) {
    const w = v.map((x) => x * k);
    if (w.every((x) => Math.abs(x - Math.round(x)) < 1e-6)) {
      let g = 0;
      const ints = w.map((x) => Math.round(x));
      for (const x of ints) g = gcd(g, Math.abs(x));
      const out = g > 0 ? ints.map((x) => x / g) : ints;
      const firstNZ = out.find((x) => x !== 0);
      return firstNZ < 0 ? out.map((x) => -x) : out;
    }
  }
  const firstNZ = v.find((x) => Math.abs(x) > 1e-9);
  return (firstNZ < 0 ? v.map((x) => -x) : v).map(snap);
}

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

function matVec(A, v) {
  return A.map((row) => row.reduce((s, x, j) => s + x * v[j], 0));
}

function sizingFor(n) {
  return n === 2 ? { cellPx: 56, font: '16px' } : { cellPx: 50, font: '14px' };
}

function numCell(v, font, extra) {
  const text = fmt(v);
  const small = text.includes('/') || text.includes('.');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: small ? `calc(${font} * 0.8)` : font, ...(extra || {}) }
  };
}

function textCell(text, font, italic, extra) {
  return { display: text, fontStyle: italic ? 'italic' : 'normal', style: { fontSize: font, ...(extra || {}) } };
}

const LAMBDA = 'λ';

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

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values) {
  const A = clone(values);
  const n = A.length;
  const { cellPx, font } = sizingFor(n);
  const c = charPoly(A);
  const roots = polyRoots(c);
  const tr = trace(A);
  const dt = n === 2 ? det2(A) : det3(A);

  const matA = () => ({
    symbol: 'a', rows: n, cols: n, label: 'A',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) o[`${i},${j}`] = numCell(A[i][j], font);
      return o;
    })()
  });
  const matShift = () => ({
    symbol: 'a', rows: n, cols: n, label: 'A − λI',
    bracketType: 'bars',
    cellSize: cellPx + 18,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i === j) o[`${i},${j}`] = textCell(`${fmt(A[i][i])} − ${LAMBDA}`, `calc(${font} * 0.85)`, false, { color: '#1e40af' });
          else o[`${i},${j}`] = numCell(A[i][j], font);
        }
      }
      return o;
    })()
  });
  const coefRow = () => ({
    symbol: 'c', rows: 1, cols: n + 1, label: n === 2 ? 'λ²  ·  λ  ·  1' : 'λ³  ·  λ²  ·  λ  ·  1',
    showDimensions: false,
    cellSize: 54,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i <= n; i++) o[`0,${i}`] = numCell(c[i], '14px');
      return o;
    })()
  });
  const rootRow = () => ({
    symbol: 'l', rows: 1, cols: n, label: 'eigenvalues λ',
    showDimensions: false,
    cellSize: roots.some((r) => Math.abs(r.im) > EPS) ? 84 : 56,
    cellOverrides: (() => {
      const o = {};
      roots.forEach((r, i) => { o[`0,${i}`] = textCell(rootStr(r), '14px', false); });
      return o;
    })()
  });

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Eigenvalues and eigenvectors of a ${n}×${n} matrix`,
    formula:
      'An eigenvector is a direction A does not turn: <strong>A v = λ v</strong>, with the eigenvalue λ ' +
      'as the scale factor. Rewritten as (A − λI) v = 0, a non-zero v exists only when A − λI is singular, ' +
      'so the plan is: subtract λ from the diagonal, expand the determinant into a polynomial in λ, find ' +
      'its roots, and for each root read an eigenvector from the null space of A − λI.',
    matrices: { A: matA() },
    layout: [{ type: 'matrix', ref: 'A' }],
    highlights: {}
  });

  scenes.push({
    phase: 'shift',
    title: 'Form A − λI',
    formula:
      'Subtract the unknown λ from every diagonal entry and leave the rest alone. The eigenvalues are the ' +
      'values of λ that make this matrix singular — that is, the values for which its determinant is zero.',
    matrices: { S: matShift() },
    layout: [{ type: 'matrix', ref: 'S' }],
    highlights: { S: { diagonal: 'primary' } }
  });

  const expandHtml = n === 2
    ? `(${fmt(A[0][0])} − λ)(${fmt(A[1][1])} − λ) − (${fmt(A[0][1])})(${fmt(A[1][0])}) = λ² − (${fmt(tr)})λ + (${fmt(dt)})`
    : `−λ³ + (${fmt(tr)})λ² − (${fmt(c[2])})λ + (${fmt(dt)}), or, multiplied by −1 to make it monic, λ³ − (${fmt(tr)})λ² + (${fmt(c[2])})λ − (${fmt(dt)})`;
  scenes.push({
    phase: 'expand',
    title: `p(λ) = ${polyHtml(c)}`,
    formula:
      `Expand det(A − λI): ${expandHtml}. ` +
      (n === 2
        ? 'The λ coefficient is minus the trace and the constant is the determinant — always, for a 2×2.'
        : 'The λ² coefficient is the trace, the λ coefficient is the sum of the three principal 2×2 minors, and the constant is the determinant.') +
      ' The coefficients are shown in the row on the right.',
    matrices: { S: matShift(), C: coefRow() },
    layout: [
      { type: 'matrix', ref: 'S' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'C' }
    ],
    highlights: { S: { diagonal: 'primary' }, C: { cells: c.map((_, i) => [0, i, 'accent']) } }
  });

  const allReal = roots.every((r) => Math.abs(r.im) < EPS);
  const realRoots = roots.filter((r) => Math.abs(r.im) < EPS).map((r) => r.re).sort((x, y) => y - x);
  const factored = allReal ? realRoots.map((r) => `(λ ${r < 0 ? '+ ' + fmt(-r) : '− ' + fmt(r)})`).join('') : null;

  scenes.push({
    phase: 'roots',
    title: `Roots: λ = ${roots.map(rootStr).join(', ')}`,
    formula:
      (n === 2
        ? `Solve λ² − (${fmt(tr)})λ + (${fmt(dt)}) = 0 with the quadratic formula. `
        : 'Solve the cubic — by spotting a rational root and dividing it out, or numerically. ') +
      (allReal
        ? `The polynomial factors as ${factored}, so the eigenvalues are ${realRoots.map(fmt).join(', ')}. `
        : `The discriminant is negative: the roots are the complex pair ${roots.map(rootStr).join(' and ')}. `) +
      `Two checks: the eigenvalues add to the trace, ${fmt(tr)}, and multiply to the determinant, ${fmt(dt)}.`,
    matrices: { C: coefRow(), L: rootRow() },
    layout: [
      { type: 'matrix', ref: 'C' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'L' }
    ],
    highlights: { L: { cells: roots.map((_, i) => [0, i, allReal ? 'accent' : 'secondary']) } }
  });

  if (!allReal) {
    scenes.push({
      phase: 'complex',
      title: 'Complex eigenvalues: no real eigenvectors',
      formula:
        'With complex eigenvalues there is no real direction that A merely scales — every real vector is ' +
        'turned. For a 2×2 this means A acts as a rotation combined with a scaling by |λ| = ' +
        `${fmt(Math.hypot(roots[0].re, roots[0].im))}. Complex eigenvectors exist in ℂ², but the real-plane ` +
        'picture is a rotation, which the 2D eigenvector tool shows directly.',
      matrices: { A: matA(), L: rootRow() },
      layout: [
        { type: 'matrix', ref: 'A' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'L' }
      ],
      highlights: { L: { cells: roots.map((_, i) => [0, i, 'secondary']) } }
    });
    return scenes;
  }

  // distinct real eigenvalues (dedupe)
  const distinct = [];
  realRoots.forEach((r) => { if (!distinct.some((d) => Math.abs(d - r) < 1e-6)) distinct.push(r); });
  const results = [];

  for (const lam of distinct) {
    const S = A.map((row, i) => row.map((x, j) => (i === j ? x - lam : x)));
    const ns = nullSpace(S);
    const algMult = realRoots.filter((r) => Math.abs(r - lam) < 1e-6).length;
    const geoMult = ns.vecs.length;
    results.push({ lam, vecs: ns.vecs, algMult, geoMult });

    const matS = {
      symbol: 'a', rows: n, cols: n, label: `A − (${fmt(lam)})I`,
      cellSize: cellPx,
      cellOverrides: (() => {
        const o = {};
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) o[`${i},${j}`] = numCell(S[i][j], font, i === j ? { color: '#1e40af' } : null);
        return o;
      })()
    };
    const matR = {
      symbol: 'r', rows: n, cols: n, label: 'rref',
      cellSize: cellPx,
      cellOverrides: (() => {
        const o = {};
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) o[`${i},${j}`] = numCell(ns.R[i][j], font);
        return o;
      })()
    };
    const matV = {
      symbol: 'v', rows: n, cols: Math.max(1, geoMult), label: geoMult > 1 ? 'eigenvectors' : 'v',
      cellSize: cellPx,
      cellOverrides: (() => {
        const o = {};
        for (let k = 0; k < Math.max(1, geoMult); k++) {
          for (let i = 0; i < n; i++) o[`${i},${k}`] = geoMult ? numCell(ns.vecs[k][i], font) : { empty: true };
        }
        return o;
      })()
    };
    const pivotHl = ns.pivotCols.map((cc, k) => [k, cc, 'accent']);
    const freeHl = ns.free.map((f) => [0, f, 'secondary']);
    const vHl = [];
    for (let k = 0; k < geoMult; k++) for (let i = 0; i < n; i++) vHl.push([i, k, 'accent']);

    scenes.push({
      phase: 'eigvec',
      title: `λ = ${fmt(lam)}: solve (A − ${fmt(lam)}I) v = 0`,
      formula:
        `Subtract ${fmt(lam)} from the diagonal and row reduce. The reduced matrix has ${ns.pivotCols.length} pivot${ns.pivotCols.length === 1 ? '' : 's'} ` +
        `and ${geoMult} free column${geoMult === 1 ? '' : 's'}, so the null space is ${geoMult}-dimensional: ` +
        (geoMult === 1
          ? `set the free variable to 1 and read the rest — v = (${ns.vecs[0].map(fmt).join(', ')}), scaled to small integers.`
          : `one eigenvector per free column, ${ns.vecs.map((v) => `(${v.map(fmt).join(', ')})`).join(' and ')} — a whole ${geoMult === 2 ? 'plane' : 'space'} of eigenvectors.`) +
        (algMult > 1
          ? ` This eigenvalue has algebraic multiplicity ${algMult} and geometric multiplicity ${geoMult}` +
            (geoMult < algMult ? ': fewer eigenvectors than the multiplicity — the matrix is defective and cannot be diagonalized.' : ': a full set.')
          : '') +
        ` Check: A v = ${fmt(lam)} v.`,
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
        R: { cells: [...pivotHl, ...freeHl] },
        V: { cells: vHl }
      },
      overlays: geoMult ? [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'R', row: 0, col: ns.free[0] },
          to: { matrix: 'V', row: 0, col: 0 },
          style: 'secondary', curveOffset: 34, curveDirection: 'up'
        }
      ] : []
    });
  }

  // done
  const allVecs = results.flatMap((r) => r.vecs.map((v) => ({ lam: r.lam, v })));
  const k = allVecs.length;
  const matVall = {
    symbol: 'v', rows: n, cols: Math.max(1, k), label: 'eigenvectors',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      allVecs.forEach((e, col) => { for (let i = 0; i < n; i++) o[`${i},${col}`] = numCell(e.v[i], font); });
      return o;
    })()
  };
  const matLall = {
    symbol: 'l', rows: 1, cols: Math.max(1, k), label: 'λ for each column',
    showDimensions: false,
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      allVecs.forEach((e, col) => { o[`0,${col}`] = numCell(e.lam, font); });
      return o;
    })()
  };
  const checks = allVecs.slice(0, 3).map((e) => `A(${e.v.map(fmt).join(', ')}) = (${matVec(A, e.v).map(fmt).join(', ')}) = ${fmt(e.lam)}·v`);
  const diagonalizable = k === n;

  scenes.push({
    phase: 'done',
    title: `Eigenvalues ${realRoots.map(fmt).join(', ')}` + (diagonalizable ? ' with a full set of eigenvectors' : ' — defective'),
    formula:
      `${checks.join('; ')}. ` +
      `The eigenvalues sum to the trace (${fmt(tr)}) and multiply to the determinant (${fmt(dt)}). ` +
      (diagonalizable
        ? `There are ${k} independent eigenvectors for a ${n}×${n} matrix, so A is <strong>diagonalizable</strong>: ` +
          'A = PDP⁻¹ with these vectors as the columns of P and the eigenvalues down the diagonal of D.'
        : `Only ${k} independent eigenvector${k === 1 ? '' : 's'} for a ${n}×${n} matrix: A is <strong>not diagonalizable</strong>. ` +
          'A repeated eigenvalue came with fewer eigenvectors than its multiplicity.'),
    matrices: { A: matA(), L: matLall, V: matVall },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'L' },
      { type: 'matrix', ref: 'V' }
    ],
    highlights: {
      L: { cells: allVecs.map((_, i) => [0, i, 'primary']) },
      V: { cells: allVecs.flatMap((_, col) => Array.from({ length: n }, (__, i) => [i, col, 'accent'])) }
    }
  });

  return scenes;
}

// -----------------------------------------------------------
// Random matrix with small integer eigenvalues: A = P D P⁻¹ with
// P unimodular (det ±1) so A stays integer.
// -----------------------------------------------------------
export function randomEigenMatrix(n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  const D = [];
  for (let i = 0; i < n; i++) D.push(rnd(-3, 4));
  // unimodular P = product of elementary shears
  let P = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (__, j) => (i === j ? 1 : 0)));
  const mul = (X, Y) => X.map((row, i) => Y[0].map((_, j) => row.reduce((s, x, k) => s + x * Y[k][j], 0)));
  for (let t = 0; t < 3; t++) {
    const i = rnd(0, n - 1); let j = rnd(0, n - 1); if (j === i) j = (i + 1) % n;
    const E = Array.from({ length: n }, (_, a) => Array.from({ length: n }, (__, b) => (a === b ? 1 : 0)));
    E[i][j] = rnd(-1, 1) || 1;
    P = mul(P, E);
  }
  // inverse of a unimodular matrix via adjugate for n ≤ 3
  const inv = (M) => {
    if (n === 2) {
      const d = det2(M);
      return [[M[1][1] / d, -M[0][1] / d], [-M[1][0] / d, M[0][0] / d]];
    }
    const d = det3(M);
    const C = (i, j) => {
      const rows = [0, 1, 2].filter((r) => r !== i), cols = [0, 1, 2].filter((c) => c !== j);
      const m = M[rows[0]][cols[0]] * M[rows[1]][cols[1]] - M[rows[0]][cols[1]] * M[rows[1]][cols[0]];
      return ((i + j) % 2 ? -1 : 1) * m;
    };
    return [0, 1, 2].map((i) => [0, 1, 2].map((j) => C(j, i) / d));
  };
  const Dm = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (__, j) => (i === j ? D[i] : 0)));
  const A = mul(mul(P, Dm), inv(P));
  return A.map((row) => row.map((x) => Math.round(x)));
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
      className="eg-info"
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
      <span className="eg-tip">{tip}</span>
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
          className="eg-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="eg-stepper-btn"
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
      className={active ? 'eg-pill eg-pill-active' : 'eg-pill'}
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
export default function EigenWrapper({
  defaultPreset = DEFAULT_PRESET,
  sizeRange = [2, 3],
  explanations = null,
  title = 'Eigenvalues and Eigenvectors',
  subtitle = 'Form A − λI, expand the characteristic polynomial, find its roots, and read an eigenvector from each null space.',
  defaultSpeed = 1800
}) {
  const initial = PRESETS[defaultPreset] ? PRESETS[defaultPreset].values : PRESETS[DEFAULT_PRESET].values;
  const [values, setValues] = useState(() => clone(initial));
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
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
      <style dangerouslySetInnerHTML={{ __html: EG_CSS }} />

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
          <FieldLabel info={EIG_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '420px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Size (square)</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={n} onChange={setSize} min={sizeRange[0]} max={sizeRange[sizeRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times; {n}</span>
            <button className="eg-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random matrix with small integer eigenvalues">
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
                    className="eg-cell-input"
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
