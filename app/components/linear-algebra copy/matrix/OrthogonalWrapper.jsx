'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';
import { nullSpace } from './EigenWrapper';

// ===========================================================
// OrthogonalWrapper v1
// Tests a numeric 2×2 or 3×3 matrix Q for orthogonality and shows
// what orthogonality buys:
//
//   gram      : Qᵀ Q — is it I? (columns orthonormal)
//   notortho  : terminal — not orthogonal; says whether the columns
//               are at least orthogonal (then normalizing fixes it)
//   det       : det Q = ±1 — rotation (+1) or reflection (−1)
//   lengths   : |Q x| = |x| and (Q x)·(Q y) = x·y for test vectors
//   inverse   : Q⁻¹ = Qᵀ, and Q Qᵀ = I as well (rows orthonormal too)
//   classify  : 2D — rotation angle, or the mirror line;
//               3D — the axis (null space of Q − I) and the angle
//               from trace Q = 1 + 2 cos θ
//   done      : summary
//
// Standalone file: imports the core (ScenePlayer, formatNumber) and
// nullSpace from EigenWrapper; modifies nothing. buildScenes and
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

const ORTH_INFO =
  'A square matrix is orthogonal when its columns are orthonormal: unit length ' +
  'and mutually perpendicular, which is the single equation QᵀQ = I. Then ' +
  'Q⁻¹ = Qᵀ, the rows are orthonormal too, det Q = ±1, and Q preserves every ' +
  'length and angle: |Qx| = |x| and (Qx)·(Qy) = x·y. In the plane an orthogonal ' +
  'matrix is a rotation (det +1) or a reflection (det −1); in space a rotation ' +
  'about an axis, or a rotation combined with a reflection.';

const ORTH_CSS = `
  .oq-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .oq-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .oq-pill:hover { border-color: #94a3b8; }
  .oq-pill-active:hover { border-color: #2563eb; }

  .oq-cell-input {
    width: 54px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 14px;
    color: #0f172a; background: white; outline: none;
  }
  .oq-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .oq-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .oq-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .oq-info:hover, .oq-info:focus { background: #bfdbfe; outline: none; }

  .oq-info .oq-tip {
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
  .oq-info .oq-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .oq-info:hover .oq-tip, .oq-info:focus .oq-tip {
    visibility: visible; opacity: 1;
  }
`;

const C30 = Math.sqrt(3) / 2, S30 = 0.5, R2 = Math.SQRT1_2;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  rotate30: {
    label: 'Rotation 30°',
    note: 'det +1: a rotation of the plane',
    values: [[C30, -S30], [S30, C30]]
  },
  reflect: {
    label: 'Reflection',
    note: 'det −1: reflection across the line at 22.5°',
    values: [[R2, R2], [R2, -R2]]
  },
  permutation: {
    label: 'Permutation',
    note: 'reorders coordinates: a rotation of space by 120° about (1, 1, 1)',
    values: [[0, 0, 1], [1, 0, 0], [0, 1, 0]]
  },
  householder: {
    label: 'Householder',
    note: 'I − 2uuᵀ/uᵀu with u = (1, 1, 1): a reflection of space',
    values: [[1 / 3, -2 / 3, -2 / 3], [-2 / 3, 1 / 3, -2 / 3], [-2 / 3, -2 / 3, 1 / 3]]
  },
  rotateZ: {
    label: 'Rotation about z',
    note: '90° about the z-axis',
    values: [[0, -1, 0], [1, 0, 0], [0, 0, 1]]
  },
  unnormalized: {
    label: 'Orthogonal, not unit',
    note: 'perpendicular columns of length √2: divide by √2 to fix',
    values: [[1, 1], [1, -1]]
  },
  scaled: {
    label: 'Scaled rotation',
    note: '2 × R(45°): angles kept, lengths doubled — not orthogonal',
    values: [[R2 * 2, -R2 * 2], [R2 * 2, R2 * 2]]
  },
  shear: {
    label: 'Shear',
    note: 'columns not perpendicular — not orthogonal',
    values: [[1, 1], [0, 1]]
  }
};

export const DEFAULT_PRESET = 'rotate30';

// tolerance for the orthogonality test: typed entries like 0.866 for cos 30°
// should still pass, so compare to three decimals
const EPS = 1e-3;

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

function norm(v) {
  return Math.sqrt(dot(v, v));
}

function det(M) {
  if (M.length === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
  return M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1])
       - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0])
       + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
}

function trace(M) {
  let s = 0;
  for (let i = 0; i < M.length; i++) s += M[i][i];
  return s;
}

function vecStr(v) {
  return `(${v.map(fmt4).join(', ')})`;
}

function deg(t) {
  return t * 180 / Math.PI;
}

function sizingFor(n, wide) {
  if (n === 2) return { cellPx: wide ? 52 : 58, font: wide ? '13px' : '14px' };
  return { cellPx: wide ? 44 : 50, font: wide ? '12px' : '13px' };
}

function numCell(v, font, extra) {
  const text = fmt4(v);
  const small = text.includes('.');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: small ? `calc(${font} * 0.82)` : font, ...(extra || {}) }
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

const isIdentity = (M) => M.every((row, i) => row.every((x, j) => Math.abs(x - (i === j ? 1 : 0)) < EPS));

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values, testX, testY) {
  const Q = clone(values);
  const n = Q.length;
  const narrow = sizingFor(n, false);
  const wide = sizingFor(n, true);
  const Qt = transpose(Q);
  const matQ = (sz, label) => numMatrix('q', Q, label || 'Q', sz.cellPx, sz.font);
  const matQt = (sz) => numMatrix('q', Qt, 'Qᵀ', sz.cellPx, sz.font);

  const x = (testX || []).slice(0, n); while (x.length < n) x.push(1);
  const y = (testY || []).slice(0, n); while (y.length < n) y.push(n === 2 ? (y.length === 0 ? 1 : 0) : 1);

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Is this ${n}×${n} matrix orthogonal?`,
    formula:
      'A matrix is <strong>orthogonal</strong> when its columns are orthonormal — each of length 1, each pair ' +
      'perpendicular — which is the single matrix equation <strong>QᵀQ = I</strong>. The test is one multiplication. ' +
      'If it passes, everything else follows: Q⁻¹ = Qᵀ, det Q = ±1, and Q moves vectors without changing any length or angle, ' +
      'so it is a rotation, a reflection, or a combination.',
    matrices: { Q: matQ(narrow) },
    layout: [{ type: 'matrix', ref: 'Q' }],
    highlights: {}
  });

  const G = matMul(Qt, Q).map((row) => row.map(snap));
  const ortho = isIdentity(G);
  const colsPerp = G.every((row, i) => row.every((v, j) => i === j || Math.abs(v) < EPS));
  const lens = Q[0].map((_, j) => norm(Q.map((row) => row[j])));

  scenes.push({
    phase: 'gram',
    title: ortho ? 'QᵀQ = I: the columns are orthonormal' : 'QᵀQ ≠ I',
    formula:
      'Entry (i, j) of QᵀQ is the dot product of columns i and j. ' +
      (ortho
        ? 'Every diagonal entry is 1 — each column has unit length — and every off-diagonal entry is 0 — the columns are ' +
          'mutually perpendicular. Q is orthogonal.'
        : colsPerp
          ? `The off-diagonal entries are 0, so the columns are perpendicular, but the diagonal entries are ${G.map((row, i) => fmt4(row[i])).join(', ')}: ` +
            `the columns have lengths ${lens.map(fmt4).join(', ')}, not 1. Q is not orthogonal, but dividing each column by its length would make it so.`
          : `The columns are not all perpendicular (a non-zero off-diagonal entry) ${lens.some((l) => Math.abs(l - 1) > EPS) ? 'and not all of unit length' : ''}. Q is not orthogonal.`),
    matrices: { QT: matQt(wide), Q: matQ(wide), G: numMatrix('g', G, 'QᵀQ', wide.cellPx, wide.font) },
    layout: [
      { type: 'matrix', ref: 'QT' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'Q' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'G' }
    ],
    highlights: {
      G: ortho
        ? { diagonal: 'target' }
        : { cells: G.flatMap((row, i) => row.map((v, j) => (Math.abs(v - (i === j ? 1 : 0)) > EPS ? [i, j, 'muted'] : null)).filter(Boolean)) }
    }
  });

  if (!ortho) {
    const fixed = colsPerp ? Q.map((row) => row.map((v, j) => v / lens[j])) : null;
    scenes.push({
      phase: 'notortho',
      title: colsPerp ? 'Not orthogonal — but normalizing the columns fixes it' : 'Not orthogonal',
      formula:
        (colsPerp
          ? `Divide column j by its length ${lens.map(fmt4).join(', ')}: the result Q̃ on the right has Q̃ᵀQ̃ = I. ` +
            'Perpendicular columns of the wrong length are the common near-miss; Gram–Schmidt produces exactly this normalization step.'
          : 'The columns are not perpendicular, so no rescaling helps; Gram–Schmidt on the columns would produce an orthonormal set spanning the same space, but a different matrix. ') +
        ` For this Q, det Q = ${fmt4(det(Q))} and |Q x| ≠ |x| in general: lengths and angles are not preserved.`,
      matrices: { Q: matQ(narrow), ...(fixed ? { F: numMatrix('f', fixed, 'Q̃', narrow.cellPx, narrow.font) } : {}) },
      layout: fixed
        ? [{ type: 'matrix', ref: 'Q' }, { type: 'operator', symbol: '→' }, { type: 'matrix', ref: 'F' }]
        : [{ type: 'matrix', ref: 'Q' }],
      highlights: fixed ? { F: { cells: allCells(n, n, 'accent') } } : {}
    });
    return scenes;
  }

  const d = snap(det(Q));
  scenes.push({
    phase: 'det',
    title: `det Q = ${fmt(d)}: ${d > 0 ? 'a rotation' : 'a reflection'}`,
    formula:
      'Taking determinants of QᵀQ = I gives (det Q)² = 1, so det Q = ±1 for every orthogonal matrix. ' +
      (d > 0
        ? 'Here it is +1: Q preserves orientation. It is a rotation' + (n === 3 ? ' of space about some axis.' : ' of the plane.')
        : 'Here it is −1: Q reverses orientation. It is a reflection' + (n === 3 ? ', possibly combined with a rotation.' : ' across some line through the origin.')) +
      ' Volumes are preserved either way, since |det Q| = 1.',
    matrices: { Q: numMatrix('q', Q, 'Q', narrow.cellPx, narrow.font, { spec: { bracketType: 'bars' } }) },
    layout: [{ type: 'matrix', ref: 'Q' }, { type: 'operator', symbol: `= ${fmt(d)}` }],
    highlights: { Q: { diagonal: d > 0 ? 'accent' : 'muted' } }
  });

  const Qx = matVec(Q, x), Qy = matVec(Q, y);
  scenes.push({
    phase: 'lengths',
    title: 'Lengths and angles are preserved',
    formula:
      `For the test vector x = ${vecStr(x)}: |x| = ${fmt4(norm(x))} and |Q x| = |${vecStr(Qx)}| = ${fmt4(norm(Qx))}. ` +
      `For y = ${vecStr(y)}: x·y = ${fmt4(dot(x, y))} and (Q x)·(Q y) = ${fmt4(dot(Qx, Qy))}. ` +
      'In general (Qx)·(Qy) = xᵀQᵀQy = xᵀy, so every dot product, hence every length and every angle, survives. ' +
      'An orthogonal matrix is a rigid motion fixing the origin.',
    matrices: {
      Q: matQ(wide),
      X: colVec('x', x, 'x', wide.cellPx, wide.font),
      QX: colVec('w', Qx, 'Q x', wide.cellPx, wide.font),
      Y: colVec('y', y, 'y', wide.cellPx, wide.font),
      QY: colVec('z', Qy, 'Q y', wide.cellPx, wide.font)
    },
    layout: [
      { type: 'matrix', ref: 'Q' },
      { type: 'matrix', ref: 'X' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'QX' },
      { type: 'operator', symbol: ',' },
      { type: 'matrix', ref: 'Q' },
      { type: 'matrix', ref: 'Y' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'QY' }
    ],
    highlights: {
      X: { cells: allCells(n, 1, 'accent') }, QX: { cells: allCells(n, 1, 'accent') },
      Y: { cells: allCells(n, 1, 'secondary') }, QY: { cells: allCells(n, 1, 'secondary') }
    }
  });

  const QQt = matMul(Q, Qt).map((row) => row.map(snap));
  scenes.push({
    phase: 'inverse',
    title: 'Q⁻¹ = Qᵀ',
    formula:
      'QᵀQ = I says Qᵀ is a left inverse; for a square matrix a left inverse is the inverse, so Q⁻¹ = Qᵀ and also ' +
      'Q Qᵀ = I, shown on the right. That second equation says the rows of Q are orthonormal too. ' +
      'Undoing an orthogonal transformation costs a transpose, which is why orthogonal matrices are the currency of ' +
      'numerical linear algebra: QR, the SVD and the spectral decomposition all lean on it.',
    matrices: { Q: matQ(wide), QT: matQt(wide), I: numMatrix('i', QQt, 'I', wide.cellPx, wide.font) },
    layout: [
      { type: 'matrix', ref: 'Q' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'QT' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'I' }
    ],
    highlights: { I: { diagonal: 'target' } }
  });

  // classify
  let classify;
  if (n === 2) {
    if (d > 0) {
      const theta = Math.atan2(Q[1][0], Q[0][0]);
      classify = {
        title: `Rotation by ${fmt4(deg(theta))}°`,
        formula:
          `A 2×2 orthogonal matrix with det +1 is R(θ) = [[cos θ, −sin θ], [sin θ, cos θ]]. Reading cos θ = ${fmt4(Q[0][0])} and sin θ = ${fmt4(Q[1][0])} ` +
          `gives θ = ${fmt4(deg(theta))}°. The first column is where (1, 0) lands, the second where (0, 1) lands, and both have simply turned by θ. ` +
          'Its eigenvalues are e^{±iθ}, complex unless θ is 0° or 180°: no real direction is fixed.'
      };
    } else {
      const phi = Math.atan2(Q[1][0], Q[0][0]) / 2;
      const u = [Math.cos(phi), Math.sin(phi)];
      classify = {
        title: `Reflection across the line at ${fmt4(deg(phi))}°`,
        formula:
          `A 2×2 orthogonal matrix with det −1 is a reflection, [[cos 2φ, sin 2φ], [sin 2φ, −cos 2φ]], across the line at angle φ. ` +
          `Here cos 2φ = ${fmt4(Q[0][0])} and sin 2φ = ${fmt4(Q[1][0])}, so φ = ${fmt4(deg(phi))}° and the mirror direction is ${vecStr(u)}. ` +
          `Check: Q leaves that direction fixed, Q u = ${vecStr(matVec(Q, u))}, and reverses the perpendicular one. Eigenvalues +1 and −1; Q² = I.`
      };
    }
  } else {
    const cosT = Math.max(-1, Math.min(1, (trace(Q) - (d > 0 ? 1 : -1)) / 2));
    const theta = Math.acos(cosT);
    const S = Q.map((row, i) => row.map((v, j) => (i === j ? v - d : v)));
    const ns = nullSpace(S);
    const axis = ns.vecs.length ? ns.vecs[0] : null;
    if (d > 0) {
      classify = {
        title: axis ? `Rotation by ${fmt4(deg(theta))}° about ${vecStr(axis)}` : 'Rotation of space',
        formula:
          'Every 3×3 orthogonal matrix with det +1 is a rotation about some axis (Euler). The axis is the direction Q leaves fixed, ' +
          `the null space of Q − I: ${axis ? `axis = ${vecStr(axis)}` : 'here every direction is fixed — Q = I'}. ` +
          `The angle comes from the trace: tr Q = 1 + 2 cos θ, so cos θ = ${fmt4(cosT)} and θ = ${fmt4(deg(theta))}°. ` +
          'Eigenvalues 1, e^{iθ}, e^{−iθ}.'
      };
    } else {
      classify = {
        title: `Reflection${Math.abs(theta) < 1e-6 ? '' : ' combined with a rotation by ' + fmt4(deg(theta)) + '°'}`,
        formula:
          'A 3×3 orthogonal matrix with det −1 has eigenvalue −1: some direction is reversed. ' +
          `That direction is the null space of Q + I: ${axis ? vecStr(axis) : '—'}. ` +
          (Math.abs(theta) < 1e-6
            ? 'The remaining angle, from tr Q = −1 + 2 cos θ, is 0°: Q is a pure reflection across the plane perpendicular to that direction, a Householder reflection I − 2uuᵀ.'
            : `The plane perpendicular to it is rotated by θ with tr Q = −1 + 2 cos θ, θ = ${fmt4(deg(theta))}°: a rotoreflection.`) +
          ' Eigenvalues −1, e^{±iθ}.'
      };
    }
  }
  scenes.push({
    phase: 'classify',
    title: classify.title,
    formula: classify.formula,
    matrices: { Q: matQ(narrow) },
    layout: [{ type: 'matrix', ref: 'Q' }],
    highlights: { Q: { cells: allCells(n, n, d > 0 ? 'accent' : 'secondary') } }
  });

  scenes.push({
    phase: 'done',
    title: `Q is orthogonal: ${classify.title.charAt(0).toLowerCase()}${classify.title.slice(1)}`,
    formula:
      'Summary: QᵀQ = QQᵀ = I, Q⁻¹ = Qᵀ, det Q = ' + fmt(d) + ', |Qx| = |x| for every x. ' +
      'Products of orthogonal matrices are orthogonal, and so are inverses, so rotations and reflections form a group. ' +
      'Any orthonormal basis, written as columns, is an orthogonal matrix, and changing coordinates to such a basis is a ' +
      'rigid motion — the reason symmetric matrices diagonalize so cleanly and the SVD is so stable.',
    matrices: { Q: matQ(narrow), QT: matQt(narrow) },
    layout: [
      { type: 'matrix', ref: 'Q' },
      { type: 'operator', symbol: 'Q⁻¹ =' },
      { type: 'matrix', ref: 'QT' }
    ],
    highlights: { Q: { cells: allCells(n, n, 'accent') }, QT: { cells: allCells(n, n, 'primary') } }
  });

  return scenes;
}

export function randomOrthogonal(n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  if (n === 2) {
    const t = (rnd(1, 11) * 30) * Math.PI / 180;
    const c = Math.cos(t), s = Math.sin(t);
    return Math.random() < 0.5 ? [[c, -s], [s, c]] : [[c, s], [s, -c]];
  }
  // product of a permutation-signed matrix and a rotation about z
  const t = (rnd(1, 11) * 30) * Math.PI / 180;
  const c = Math.cos(t), s = Math.sin(t);
  const Rz = [[c, -s, 0], [s, c, 0], [0, 0, 1]];
  const perms = [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[0, 0, 1], [1, 0, 0], [0, 1, 0]], [[0, 1, 0], [0, 0, 1], [1, 0, 0]]];
  const P = perms[rnd(0, 2)].map((row) => row.map((v) => v * (Math.random() < 0.3 ? -1 : 1)));
  return matMul(P, Rz).map((row) => row.map((v) => Math.round(v * 1e6) / 1e6));
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
      className="oq-info"
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
      <span className="oq-tip">{tip}</span>
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
          className="oq-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="oq-stepper-btn"
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
      className={active ? 'oq-pill oq-pill-active' : 'oq-pill'}
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
export default function OrthogonalWrapper({
  defaultPreset = DEFAULT_PRESET,
  sizeRange = [2, 3],
  explanations = null,
  title = 'Orthogonal Matrices',
  subtitle = 'Test QᵀQ = I, read the determinant, watch lengths and angles survive, and identify the rotation or reflection.',
  defaultSpeed = 1800
}) {
  const initialKey = PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET;
  const [values, setValues] = useState(() => clone(PRESETS[initialKey].values));
  const [preset, setPreset] = useState(initialKey);
  const [drafts, setDrafts] = useState({});
  const [x, setX] = useState([2, 1, 1]);

  const n = values.length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setValues(clone(PRESETS[key].values));
  }, []);

  const setSize = (nn) => { setPreset(null); setDrafts({}); setValues((v) => resize(v, nn)); };
  const shuffle = () => { setPreset(null); setDrafts({}); setValues(randomOrthogonal(n)); };

  const parseRaw = (raw) => {
    const num = parseFloat(raw);
    return Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
  };
  const editCell = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`q${i},${j}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setValues((M) => { const next = clone(M); next[i][j] = v; return next; });
  };
  const editX = (i, raw) => {
    setDrafts((d) => ({ ...d, [`x${i}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setX((xx) => { const next = xx.slice(); next[i] = v; return next; });
  };
  const commit = (key) => setDrafts((d) => { const next = { ...d }; delete next[key]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(values, x, n === 2 ? [1, 0] : [1, 0, 0]);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [values, x, n, explanations]);

  const shown = (v) => String(Math.round(v * 10000) / 10000);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: ORTH_CSS }} />

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
          <FieldLabel info={ORTH_INFO}>Preset</FieldLabel>
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
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>Q</span>
            <Stepper value={n} onChange={setSize} min={sizeRange[0]} max={sizeRange[sizeRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times; {n}</span>
            <button className="oq-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random rotation or reflection">
              Shuffle
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>Entries of Q</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {values.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px' }}>
                {row.map((val, j) => (
                  <input
                    key={j}
                    className="oq-cell-input"
                    type="text"
                    inputMode="decimal"
                    value={drafts[`q${i},${j}`] !== undefined ? drafts[`q${i},${j}`] : shown(Number.isFinite(val) ? val : 0)}
                    onChange={(e) => editCell(i, j, e.target.value)}
                    onBlur={() => commit(`q${i},${j}`)}
                    aria-label={`entry ${i + 1},${j + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Test vector x</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {x.slice(0, n).map((val, i) => (
              <input
                key={i}
                className="oq-cell-input"
                type="text"
                inputMode="decimal"
                value={drafts[`x${i}`] !== undefined ? drafts[`x${i}`] : shown(Number.isFinite(val) ? val : 0)}
                onChange={(e) => editX(i, e.target.value)}
                onBlur={() => commit(`x${i}`)}
                aria-label={`x entry ${i + 1}`}
              />
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
