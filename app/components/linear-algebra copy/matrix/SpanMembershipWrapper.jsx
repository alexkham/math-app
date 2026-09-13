'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';
import { rref } from './EigenWrapper';

// ===========================================================
// SpanMembershipWrapper v1
// Given spanning vectors v₁ … vₖ in Rⁿ (as the columns of V) and a
// test vector w, decides whether w lies in span{v₁, …, vₖ} and, if so,
// finds its coordinates:
//
//   rank       : V → rref: rank r = dim of the span; dependencies among
//                the vᵢ read from the free columns
//   membership : [V | w] → rref: consistent ⇔ w in the span
//   coords     : the coefficients c with V c = w (free ones set to 0),
//                checked by multiplying; unique iff the vᵢ are independent
//   notin      : terminal — w adds a new direction: rank goes up by one
//   done       : summary
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

const SPAN_INFO =
  'The span of v₁ … vₖ is the set of all combinations c₁v₁ + … + cₖvₖ — a ' +
  'line, a plane, or a higher subspace through the origin. A vector w is in ' +
  'the span exactly when the system V c = w, with the vᵢ as the columns of V, ' +
  'has a solution; row reducing [V | w] decides it, and the solution c is the ' +
  'coordinate vector of w. The rank of V is the dimension of the span, and ' +
  'the vᵢ are a basis of it when the rank equals k.';

const SPAN_CSS = `
  .sm-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .sm-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .sm-pill:hover { border-color: #94a3b8; }
  .sm-pill-active:hover { border-color: #2563eb; }

  .sm-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .sm-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }
  .sm-cell-input.sm-w { border-color: #fbbf24; background: #fffbeb; }

  .sm-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .sm-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .sm-info:hover, .sm-info:focus { background: #bfdbfe; outline: none; }

  .sm-info .sm-tip {
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
  .sm-info .sm-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .sm-info:hover .sm-tip, .sm-info:focus .sm-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets: vectors are given as a list (columns of V), plus w
// -----------------------------------------------------------
export const PRESETS = {
  plane: {
    label: 'In a plane',
    note: 'w = 2v₁ + 3v₂',
    vectors: [[1, 0, 1], [0, 1, 1]],
    w: [2, 3, 5]
  },
  offPlane: {
    label: 'Off the plane',
    note: 'the same plane, a w that is not on it',
    vectors: [[1, 0, 1], [0, 1, 1]],
    w: [1, 1, 1]
  },
  line: {
    label: 'On a line',
    note: 'one vector; w is a multiple of it',
    vectors: [[1, 2, 3]],
    w: [2, 4, 6]
  },
  dependent: {
    label: 'Dependent set',
    note: 'v₃ = v₁ + v₂: the span is a plane, coordinates are not unique',
    vectors: [[1, 1, 0], [0, 1, 1], [1, 2, 1]],
    w: [2, 3, 1]
  },
  basis: {
    label: 'A basis of R³',
    note: 'three independent vectors span everything',
    vectors: [[1, 0, 0], [1, 1, 0], [1, 1, 1]],
    w: [2, 5, 1]
  },
  r4: {
    label: 'A plane in R⁴',
    note: 'two vectors in four dimensions',
    vectors: [[1, 0, 1, 0], [0, 1, 0, 1]],
    w: [3, -2, 3, -2]
  },
  zero: {
    label: 'w = 0',
    note: 'the zero vector is in every span',
    vectors: [[1, 0, 1], [0, 1, 1]],
    w: [0, 0, 0]
  }
};

export const DEFAULT_PRESET = 'plane';

// -----------------------------------------------------------
// Numeric helpers
// -----------------------------------------------------------
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

function matVec(A, v) {
  return A.map((row) => row.reduce((s, x, j) => s + x * v[j], 0));
}

function vecStr(v) {
  return `(${v.map(fmt).join(', ')})`;
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

const colStyles = ['accent', 'primary', 'secondary', 'pairA'];
function colHl(rows, cols) {
  const out = [];
  for (let j = 0; j < cols; j++) for (let i = 0; i < rows; i++) out.push([i, j, colStyles[j % colStyles.length]]);
  return out;
}

const SUBS = ['₁', '₂', '₃', '₄'];

function comboStr(coefs, names) {
  const parts = [];
  coefs.forEach((c, i) => {
    if (Math.abs(c) < 1e-9) return;
    const mag = Math.abs(c);
    const magStr = Math.abs(mag - 1) < 1e-9 ? '' : fmt(mag);
    parts.push(`${c < 0 ? '−' : (parts.length ? '+' : '')} ${magStr}${names[i]}`.trim());
  });
  return parts.length ? parts.join(' ') : '0';
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(vectors, wIn) {
  const k = vectors.length;
  const n = vectors[0].length;
  const V = Array.from({ length: n }, (_, i) => vectors.map((v) => v[i]));
  const w = (wIn || []).slice(0, n); while (w.length < n) w.push(0);
  const maxDim = Math.max(n, k + 1);
  const narrow = sizingFor(maxDim, false);
  const wide = sizingFor(maxDim, true);
  const names = vectors.map((_, i) => `v${SUBS[i]}`);

  const matV = (sz) => numMatrix('v', V, 'V = [v₁ … vₖ]', sz.cellPx, sz.font);
  const vecW = (sz) => colVec('w', w, 'w', sz.cellPx, sz.font, { cellStyle: () => ({ color: '#b45309' }) });

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Is w in span{${names.join(', ')}}?`,
    formula:
      `${vectors.map((v, i) => `${names[i]} = ${vecStr(v)}`).join(', ')}, and the test vector w = ${vecStr(w)}, all in R${sup(n)}. ` +
      `The span is every combination c₁v₁ + … + c${SUBS[k - 1]}v${SUBS[k - 1]}, and w is in it exactly when some coefficients c make ` +
      'V c = w with the vᵢ as the columns of V. So the question is whether a linear system is consistent, and row ' +
      'reduction answers it — after first finding how big the span is.',
    matrices: { V: matV(narrow), W: vecW(narrow) },
    layout: [
      { type: 'matrix', ref: 'V' },
      { type: 'operator', symbol: 'c =' },
      { type: 'matrix', ref: 'W' }
    ],
    highlights: { V: { cells: colHl(n, k) } }
  });

  const rv = rref(V);
  const r = rv.pivotCols.length;
  const free = [];
  for (let j = 0; j < k; j++) if (!rv.pivotCols.includes(j)) free.push(j);
  const deps = free.map((f) => {
    const coefs = new Array(k).fill(0);
    rv.pivotCols.forEach((c, kk) => { coefs[c] = rv.R[kk][f]; });
    return { f, coefs };
  });

  scenes.push({
    phase: 'rank',
    title: `The span has dimension ${r}${r === k ? ': the vectors are independent' : ': the set is dependent'}`,
    formula:
      `Row reduce V. Rank ${r} means the span is ${r === 0 ? 'just {0}' : r === 1 ? 'a line' : r === 2 ? 'a plane' : `a ${r}-dimensional subspace`} of R${sup(n)}` +
      (r === n ? ' — all of it' : '') + '. ' +
      (r === k
        ? `Every column is a pivot column, so the ${k} vector${k === 1 ? '' : 's'} ${k === 1 ? 'is' : 'are'} independent and form a basis of the span: coordinates in it will be unique.`
        : `Column${free.length === 1 ? '' : 's'} ${free.map((f) => f + 1).join(', ')} ${free.length === 1 ? 'is' : 'are'} free, so ` +
          deps.map((d) => `${names[d.f]} = ${comboStr(d.coefs, names)}`).join(' and ') +
          `; the pivot vectors ${rv.pivotCols.map((c) => names[c]).join(', ')} alone span the same space, and coordinates will not be unique.`),
    matrices: { V: matV(narrow), R: numMatrix('r', rv.R, 'rref(V)', narrow.cellPx, narrow.font) },
    layout: [
      { type: 'matrix', ref: 'V' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: {
      V: { cells: colHl(n, k) },
      R: { cells: [...free.flatMap((f) => Array.from({ length: n }, (_, i) => [i, f, 'muted'])), ...rv.pivotCols.map((c, kk) => [kk, c, 'accent'])] }
    }
  });

  const aug = V.map((row, i) => [...row, w[i]]);
  const ra = rref(aug);
  const inSpan = !ra.pivotCols.includes(k);

  scenes.push({
    phase: 'membership',
    title: inSpan ? 'Consistent: w is in the span' : 'Inconsistent: w is not in the span',
    formula:
      'Row reduce the augmented matrix [V | w]. ' +
      (inSpan
        ? `No pivot lands in the last column, so V c = w has a solution and w is a combination of the vᵢ. The rank stayed ${r}: adding w to the set added no new direction.`
        : `A pivot lands in the last column — a row reads 0 = 1 — so V c = w has no solution. The rank rose from ${r} to ${r + 1}: w points out of the span, in a direction the vᵢ cannot reach.`),
    matrices: {
      G: numMatrix('g', aug, '[V | w]', narrow.cellPx, narrow.font, { cellStyle: (i, j) => (j === k ? { color: '#b45309' } : null) }),
      R: numMatrix('r', ra.R, 'rref', narrow.cellPx, narrow.font, { cellStyle: (i, j) => (j === k ? { color: '#b45309' } : null) })
    },
    layout: [
      { type: 'matrix', ref: 'G' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'R' }
    ],
    highlights: {
      G: { cols: [[k, 'secondary']] },
      R: { cells: ra.pivotCols.map((c, kk) => [kk, c, c === k ? 'muted' : 'accent']) }
    }
  });

  if (!inSpan) {
    scenes.push({
      phase: 'notin',
      title: 'w adds a new direction',
      formula:
        `The set {${names.join(', ')}, w} has rank ${r + 1}: w is independent of the vᵢ, and span{${names.join(', ')}, w} is ` +
        `${r + 1 === n ? `all of R${sup(n)}` : `${r + 1}-dimensional`}. ` +
        'No choice of coefficients reproduces w. The nearest point of the span to w is its orthogonal projection, which ' +
        'the least-squares tool computes; the difference is the part of w that lies outside.',
      matrices: { V: matV(narrow), W: vecW(narrow) },
      layout: [
        { type: 'matrix', ref: 'V' },
        { type: 'operator', symbol: 'c ≠' },
        { type: 'matrix', ref: 'W' }
      ],
      highlights: { V: { cells: colHl(n, k) }, W: { cells: allCells(n, 1, 'muted') } }
    });
    return scenes;
  }

  const c = new Array(k).fill(0);
  ra.pivotCols.forEach((col, kk) => { c[col] = snap(ra.R[kk][k]); });
  const check = matVec(V, c).map(snap);

  scenes.push({
    phase: 'coords',
    title: `w = ${comboStr(c, names)}`,
    formula:
      `Read the coefficients from the reduced matrix${free.length ? `, with the free coefficient${free.length === 1 ? '' : 's'} ${free.map((f) => `c${SUBS[f]}`).join(', ')} set to 0` : ''}: ` +
      `c = ${vecStr(c)}, so w = ${comboStr(c, names)}. Check: ${c.map((ci, i) => `${fmt(ci)}·${vecStr(vectors[i])}`).join(' + ')} = ${vecStr(check)}. ` +
      (free.length
        ? `Because the set is dependent, other coefficient vectors work too — add any multiple of a dependency, such as ${deps.map((d) => { const dv = d.coefs.map((x) => -x); dv[d.f] = 1; return vecStr(dv); }).join(' or ')}.`
        : 'Because the vᵢ are independent, these coordinates are the only ones: c is the coordinate vector of w in the basis {' + names.join(', ') + '}.'),
    matrices: { V: matV(narrow), C: colVec('c', c, 'c', narrow.cellPx, narrow.font), W: colVec('w', check, 'w', narrow.cellPx, narrow.font, { cellStyle: () => ({ color: '#b45309' }) }) },
    layout: [
      { type: 'matrix', ref: 'V' },
      { type: 'matrix', ref: 'C' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'W' }
    ],
    highlights: { V: { cells: colHl(n, k) }, C: { cells: c.map((_, i) => [i, 0, colStyles[i % colStyles.length]]) }, W: { cells: allCells(n, 1, 'target') } }
  });

  scenes.push({
    phase: 'done',
    title: `w ∈ span{${names.join(', ')}}, coordinates ${vecStr(c)}`,
    formula:
      `The span is ${r === 1 ? 'a line' : r === 2 ? 'a plane' : `${r}-dimensional`}${r === n ? `, all of R${sup(n)}` : ''}, ` +
      (r === k ? `with basis {${names.join(', ')}}` : `with basis {${rv.pivotCols.map((cc) => names[cc]).join(', ')}} (the dependent vector${free.length === 1 ? '' : 's'} dropped)`) +
      `, and w lies in it with coordinates ${vecStr(c)}. ` +
      'Membership is consistency of V c = w; coordinates are its solution; uniqueness is independence of the vᵢ. ' +
      (w.every((x) => Math.abs(x) < 1e-9) ? 'The zero vector is in every span, with all coefficients 0. ' : '') +
      'Three questions, one row reduction.',
    matrices: { V: matV(narrow), C: colVec('c', c, 'c', narrow.cellPx, narrow.font), W: vecW(narrow) },
    layout: [
      { type: 'matrix', ref: 'V' },
      { type: 'matrix', ref: 'C' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'W' }
    ],
    highlights: { V: { cells: colHl(n, k) }, C: { cells: c.map((_, i) => [i, 0, colStyles[i % colStyles.length]]) } }
  });

  return scenes;
}

const SUPS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
function sup(x) {
  return String(x).split('').map((ch) => SUPS[Number(ch)] || ch).join('');
}

export function randomProblem(n, k) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  const vectors = Array.from({ length: k }, () => Array.from({ length: n }, () => rnd(-2, 3)));
  // w: usually a combination (in the span), sometimes not
  let w;
  if (Math.random() < 0.6) {
    const coefs = vectors.map(() => rnd(-2, 3));
    w = Array.from({ length: n }, (_, i) => vectors.reduce((s, v, j) => s + coefs[j] * v[i], 0));
  } else {
    w = Array.from({ length: n }, () => rnd(-3, 4));
  }
  return { vectors, w };
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="sm-info"
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
      <span className="sm-tip">{tip}</span>
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
          className="sm-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="sm-stepper-btn"
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
      className={active ? 'sm-pill sm-pill-active' : 'sm-pill'}
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
export default function SpanMembershipWrapper({
  defaultPreset = DEFAULT_PRESET,
  dimRange = [2, 4],
  countRange = [1, 4],
  explanations = null,
  title = 'Span and Membership',
  subtitle = 'Is w a combination of v₁ … vₖ? Row reduce V to size the span, then [V | w] to decide and to read the coordinates.',
  defaultSpeed = 1800
}) {
  const initialKey = PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET;
  const [vectors, setVectors] = useState(() => PRESETS[initialKey].vectors.map((v) => v.slice()));
  const [w, setW] = useState(() => PRESETS[initialKey].w.slice());
  const [preset, setPreset] = useState(initialKey);
  const [drafts, setDrafts] = useState({});

  const k = vectors.length, n = vectors[0].length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setVectors(PRESETS[key].vectors.map((v) => v.slice()));
    setW(PRESETS[key].w.slice());
  }, []);

  const setDim = (nn) => {
    setPreset(null); setDrafts({});
    setVectors((vs) => vs.map((v, j) => Array.from({ length: nn }, (_, i) => (v[i] !== undefined ? v[i] : (i === j ? 1 : 0)))));
    setW((ww) => Array.from({ length: nn }, (_, i) => (ww[i] !== undefined ? ww[i] : 0)));
  };
  const setCount = (kk) => {
    setPreset(null); setDrafts({});
    setVectors((vs) => Array.from({ length: kk }, (_, j) => (vs[j] ? vs[j].slice() : Array.from({ length: n }, (_, i) => (i === j ? 1 : 0)))));
  };
  const shuffle = () => {
    setPreset(null); setDrafts({});
    const r = randomProblem(n, k);
    setVectors(r.vectors); setW(r.w);
  };

  const parseRaw = (raw) => {
    const num = parseFloat(raw);
    return Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
  };
  const editV = (j, i, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`v${j},${i}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setVectors((vs) => { const next = vs.map((x) => x.slice()); next[j][i] = v; return next; });
  };
  const editW = (i, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`w${i}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setW((ww) => { const next = ww.slice(); next[i] = v; return next; });
  };
  const commit = (key) => setDrafts((d) => { const next = { ...d }; delete next[key]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(vectors, w);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [vectors, w, explanations]);

  const column = (label, values, keyFn, onEdit, cls) => (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
      <span style={{ ...mathInlineStyle, fontSize: '14px', color: '#475569' }}>{label}</span>
      {values.map((val, i) => (
        <input
          key={i}
          className={'sm-cell-input' + (cls ? ' ' + cls : '')}
          type="text"
          inputMode="decimal"
          value={drafts[keyFn(i)] !== undefined ? drafts[keyFn(i)] : String(Number.isFinite(val) ? val : 0)}
          onChange={(e) => onEdit(i, e.target.value)}
          onBlur={() => commit(keyFn(i))}
          aria-label={`${label} entry ${i + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: SPAN_CSS }} />

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
          <FieldLabel info={SPAN_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '440px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Space and count</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#334155' }}>R</span>
            <Stepper value={n} onChange={setDim} min={dimRange[0]} max={dimRange[1]} />
            <span style={{ fontSize: '14px', color: '#334155', marginLeft: '10px' }}>vectors</span>
            <Stepper value={k} onChange={setCount} min={countRange[0]} max={countRange[1]} />
            <button className="sm-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="Random vectors; w is usually in the span">
              Shuffle
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>Vectors and w</FieldLabel>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            {vectors.map((v, j) => column(`v${SUBS[j]}`, v, (i) => `v${j},${i}`, (i, raw) => editV(j, i, raw)))}
            <span style={{ color: '#94a3b8', alignSelf: 'center' }}>|</span>
            {column('w', w, (i) => `w${i}`, editW, 'sm-w')}
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
