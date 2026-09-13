'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';

// ===========================================================
// CramerWrapper v1
// Solves a square numeric system A x = b (n = 2 or 3) by
// Cramer's rule, one unknown per scene:
//
//   x_i = det(A_i) / det(A),   A_i = A with column i replaced by b
//
// Phases (each scene carries a `phase` field):
//   intro    — the system A x = b
//   det      — det A evaluated; if it is 0 the run stops with a
//              'singular' scene instead of solving
//   replace  — one scene per unknown: A_i shown with its swapped
//              column, det A_i evaluated, x_i = det A_i / det A
//   done     — the solution vector, and A x reproducing b
//
// The determinant is evaluated by cofactor expansion (n ≤ 3).
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

const CRAMER_INFO =
  'Cramer\'s rule solves a square system A x = b with a formula: each unknown ' +
  'x_i is the determinant of A with its i-th column replaced by b, divided by ' +
  'the determinant of A. It requires det A ≠ 0, which is exactly the condition ' +
  'for the system to have one solution. It is a closed form rather than a ' +
  'practical algorithm: for large systems elimination is far cheaper.';

const CR_CSS = `
  .cr-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .cr-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .cr-pill:hover { border-color: #94a3b8; }
  .cr-pill-active:hover { border-color: #2563eb; }

  .cr-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .cr-cell-input.cr-b { border-color: #f59e0b; background: #fffbeb; }
  .cr-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .cr-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .cr-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .cr-info:hover, .cr-info:focus { background: #bfdbfe; outline: none; }

  .cr-info .cr-tip {
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
  .cr-info .cr-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .cr-info:hover .cr-tip, .cr-info:focus .cr-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets — { A, b }
// -----------------------------------------------------------
export const PRESETS = {
  two: {
    label: '2×2, integers',
    note: 'solution (1, 3)',
    A: [[2, 1], [1, 3]], b: [5, 10]
  },
  three: {
    label: '3×3, integers',
    note: 'solution (1, 2, 3)',
    A: [[1, 1, 1], [2, -1, 1], [1, 2, -1]], b: [6, 3, 2]
  },
  fractions: {
    label: '2×2, fractions',
    note: 'solution (7/5, 19/10)',
    A: [[3, 2], [1, 4]], b: [8, 9]
  },
  homogeneous: {
    label: 'Homogeneous',
    note: 'b = 0, so every x_i = 0',
    A: [[2, 1], [1, 3]], b: [0, 0]
  },
  singular: {
    label: 'Singular',
    note: 'det A = 0: the rule does not apply',
    A: [[1, 2], [2, 4]], b: [3, 7]
  }
};

export const DEFAULT_PRESET = 'three';

const EPS = 1e-9;

// -----------------------------------------------------------
// Helpers
// -----------------------------------------------------------
function clone(M) {
  return M.map((row) => row.slice());
}

function fmt(v) {
  return formatNumber(v).replace(/-/g, '−');
}

export function det(M) {
  const n = M.length;
  if (n === 1) return M[0][0];
  if (n === 2) return M[0][0] * M[1][1] - M[0][1] * M[1][0];
  let s = 0;
  for (let j = 0; j < n; j++) {
    const minor = [];
    for (let i = 1; i < n; i++) {
      const row = [];
      for (let c = 0; c < n; c++) if (c !== j) row.push(M[i][c]);
      minor.push(row);
    }
    s += (j % 2 === 0 ? 1 : -1) * M[0][j] * det(minor);
  }
  return s;
}

function replaceColumn(A, i, b) {
  const out = clone(A);
  for (let r = 0; r < A.length; r++) out[r][i] = b[r];
  return out;
}

function sizingFor(n) {
  return n === 2 ? { cellPx: 54, font: '16px' } : { cellPx: 50, font: '14px' };
}

function numCell(v, font, extra) {
  const text = fmt(v);
  const isFrac = text.includes('/');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: isFrac ? `calc(${font} * 0.8)` : font, ...(extra || {}) }
  };
}

const B_STYLE = { color: '#b45309' };
const SUBS = ['₁', '₂', '₃', '₄'];

function slot(label, value, filled, font = '15px', extra) {
  return {
    symbol: 's', rows: 1, cols: 1, label,
    showDimensions: false,
    cellSize: 72,
    cellOverrides: { '0,0': filled ? numCell(value, font, extra) : { empty: true } }
  };
}

function symbolSlot(label, text, filled) {
  return {
    symbol: 's', rows: 1, cols: 1, label,
    showDimensions: false,
    cellSize: 60,
    cellOverrides: { '0,0': filled ? { display: text, fontStyle: 'italic', style: { fontSize: '16px' } } : { empty: true } }
  };
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(Ain, bin) {
  const A = clone(Ain);
  const b = bin.slice();
  const n = A.length;
  const { cellPx, font } = sizingFor(n);

  const matA = (label = 'A', colHl) => ({
    symbol: 'a', rows: n, cols: n, label,
    bracketType: 'square',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) o[`${i},${j}`] = numCell(A[i][j], font);
      return o;
    })()
  });
  const matAi = (i) => {
    const Ai = replaceColumn(A, i, b);
    return {
      symbol: 'a', rows: n, cols: n, label: `A${SUBS[i]}`,
      bracketType: 'bars',
      cellSize: cellPx,
      cellOverrides: (() => {
        const o = {};
        for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) o[`${r},${c}`] = numCell(Ai[r][c], font, c === i ? B_STYLE : null);
        return o;
      })()
    };
  };
  const vecB = () => ({
    symbol: 'b', rows: n, cols: 1, label: 'b',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) o[`${i},0`] = numCell(b[i], font, B_STYLE);
      return o;
    })()
  });
  const vecX = (x, filledUpTo) => ({
    symbol: 'x', rows: n, cols: 1, label: 'x',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) {
        o[`${i},0`] = i <= filledUpTo
          ? numCell(x[i], font)
          : { display: `x${SUBS[i]}`, fontStyle: 'italic', style: { fontSize: font, color: '#94a3b8' } };
      }
      return o;
    })()
  });

  const layoutSystem = (x, filledUpTo) => ({
    matrices: { A: matA(), X: vecX(x, filledUpTo), B: vecB() },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '·' },
      { type: 'matrix', ref: 'X' },
      { type: 'operator', symbol: '=' },
      { type: 'matrix', ref: 'B' }
    ]
  });

  const dA = det(A);
  const singular = Math.abs(dA) < EPS;
  const x = new Array(n).fill(0);
  const dets = new Array(n).fill(0);
  if (!singular) {
    for (let i = 0; i < n; i++) {
      dets[i] = det(replaceColumn(A, i, b));
      x[i] = dets[i] / dA;
    }
  }

  const scenes = [];

  // intro
  {
    const sys = layoutSystem(x, -1);
    scenes.push({
      phase: 'intro',
      title: `Solve A x = b by Cramer's rule (${n} unknowns)`,
      formula:
        `The system has ${n} equations in ${n} unknowns. Cramer's rule gives each unknown as a ratio of two ` +
        'determinants: <strong>x<sub>i</sub> = det A<sub>i</sub> / det A</strong>, where A<sub>i</sub> is A with ' +
        'its i-th column replaced by b. The first thing to check is det A itself — if it is zero the rule ' +
        'cannot be applied, and the system has no unique solution.',
      matrices: sys.matrices,
      layout: sys.layout,
      highlights: {}
    });
  }

  // det A
  scenes.push({
    phase: 'det',
    title: `det A = ${fmt(dA)}`,
    formula:
      (n === 2
        ? `det A = ${fmt(A[0][0])}·${fmt(A[1][1])} − ${fmt(A[0][1])}·${fmt(A[1][0])} = ${fmt(dA)}. `
        : `Expanding along the first row gives det A = ${fmt(dA)}. `) +
      (singular
        ? 'It is <strong>zero</strong>: A is singular, and Cramer\'s rule does not apply.'
        : 'It is non-zero, so the system has exactly one solution and every x<sub>i</sub> is well defined.'),
    matrices: { A: matA(), D: slot('det A', dA, true, '16px') },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'operator', symbol: '→' },
      { type: 'matrix', ref: 'D' }
    ],
    highlights: {
      A: { cells: (() => { const o = []; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) o.push([i, j, 'primary']); return o; })() },
      D: { cells: [[0, 0, singular ? 'muted' : 'accent']] }
    }
  });

  if (singular) {
    const sys = layoutSystem(x, -1);
    scenes.push({
      phase: 'singular',
      title: 'No unique solution',
      formula:
        'With det A = 0 the columns of A are dependent, and the formula would divide by zero. The system ' +
        'has either no solution or infinitely many, depending on whether b lies in the column space of A; ' +
        'Cramer\'s rule cannot tell which. Row reduction of the augmented matrix [A | b] can.',
      matrices: sys.matrices,
      layout: sys.layout,
      highlights: { A: { cols: (() => { const o = []; for (let j = 0; j < n; j++) o.push([j, 'muted']); return o; })() } }
    });
    return scenes;
  }

  // one scene per unknown
  for (let i = 0; i < n; i++) {
    scenes.push({
      phase: 'replace',
      title: `x${SUBS[i]} = det A${SUBS[i]} / det A = ${fmt(dets[i])} / ${fmt(dA)} = ${fmt(x[i])}`,
      formula:
        `Replace column ${i + 1} of A by b to form A${SUBS[i]} (the swapped column is shown in the colour of b). ` +
        `Its determinant is ${fmt(dets[i])}. Dividing by det A = ${fmt(dA)} gives ` +
        `<strong>x${SUBS[i]} = ${fmt(x[i])}</strong>.`,
      matrices: {
        AI: matAi(i),
        DI: slot(`det A${SUBS[i]}`, dets[i], true, '16px'),
        D: slot('det A', dA, true, '16px'),
        X: slot(`x${SUBS[i]}`, x[i], true, '16px')
      },
      layout: [
        { type: 'matrix', ref: 'AI' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'DI' },
        { type: 'operator', symbol: '÷' },
        { type: 'matrix', ref: 'D' },
        { type: 'operator', symbol: '=' },
        { type: 'matrix', ref: 'X' }
      ],
      highlights: {
        AI: { cols: [[i, 'accent']] },
        DI: { cells: [[0, 0, 'primary']] },
        D: { cells: [[0, 0, 'secondary']] },
        X: { cells: [[0, 0, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'AI', row: 0, col: i },
          to: { matrix: 'DI', row: 0, col: 0 },
          style: 'primary', curveOffset: 36, curveDirection: 'up'
        }
      ]
    });
  }

  // done
  {
    const sys = layoutSystem(x, n - 1);
    const check = [];
    for (let r = 0; r < n; r++) {
      let s = 0;
      for (let c = 0; c < n; c++) s += A[r][c] * x[c];
      check.push(fmt(s));
    }
    scenes.push({
      phase: 'done',
      title: `x = (${x.map(fmt).join(', ')})`,
      formula:
        `The solution is x = (${x.map(fmt).join(', ')}). Check by multiplying: A x = (${check.join(', ')}) = b. ` +
        `Each unknown cost one ${n}×${n} determinant, ${n + 1} determinants in all — a closed formula, but ` +
        'not a cheap one; for larger systems elimination does the same job with far less arithmetic.',
      matrices: sys.matrices,
      layout: sys.layout,
      highlights: {
        X: { cells: (() => { const o = []; for (let i = 0; i < n; i++) o.push([i, 0, 'accent']); return o; })() }
      }
    });
  }

  return scenes;
}

// -----------------------------------------------------------
// Random system with an integer solution: pick x and A, set b = A x.
// -----------------------------------------------------------
export function randomSystem(n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  let A, d;
  do {
    A = [];
    for (let i = 0; i < n; i++) { const row = []; for (let j = 0; j < n; j++) row.push(rnd(-3, 4)); A.push(row); }
    d = det(A);
  } while (Math.abs(d) < EPS);
  const x = [];
  for (let i = 0; i < n; i++) x.push(rnd(-3, 3));
  const b = [];
  for (let i = 0; i < n; i++) { let s = 0; for (let j = 0; j < n; j++) s += A[i][j] * x[j]; b.push(s); }
  return { A, b };
}

function resize(A, b, n) {
  const outA = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(A[i] && A[i][j] !== undefined ? A[i][j] : (i === j ? 1 : 0));
    outA.push(row);
  }
  const outB = [];
  for (let i = 0; i < n; i++) outB.push(b[i] !== undefined ? b[i] : 0);
  return { A: outA, b: outB };
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="cr-info"
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
      <span className="cr-tip">{tip}</span>
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
          className="cr-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="cr-stepper-btn"
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
      className={active ? 'cr-pill cr-pill-active' : 'cr-pill'}
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
export default function CramerWrapper({
  defaultPreset = DEFAULT_PRESET,
  sizeRange = [2, 3],
  explanations = null,
  title = 'Cramer\'s Rule',
  subtitle = 'Each unknown as a ratio of determinants: replace one column of A by b, evaluate, divide by det A.',
  defaultSpeed = 1600
}) {
  const initial = PRESETS[defaultPreset] || PRESETS[DEFAULT_PRESET];
  const [A, setA] = useState(() => clone(initial.A));
  const [b, setB] = useState(() => initial.b.slice());
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
  const [drafts, setDrafts] = useState({});

  const n = A.length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setA(clone(PRESETS[key].A));
    setB(PRESETS[key].b.slice());
  }, []);

  const setSize = (nn) => {
    setPreset(null); setDrafts({});
    const r = resize(A, b, nn);
    setA(r.A); setB(r.b);
  };
  const shuffle = () => {
    setPreset(null); setDrafts({});
    const s = randomSystem(n);
    setA(s.A); setB(s.b);
  };

  const parse = (raw) => {
    const num = parseFloat(raw);
    if (Number.isFinite(num)) return num;
    if (raw === '' || raw === '-') return 0;
    return null;
  };
  const editA = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`a${i},${j}`]: raw }));
    const v = parse(raw);
    if (v !== null) setA((m) => { const next = clone(m); next[i][j] = v; return next; });
  };
  const editB = (i, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`b${i}`]: raw }));
    const v = parse(raw);
    if (v !== null) setB((m) => { const next = m.slice(); next[i] = v; return next; });
  };
  const commit = (key) => setDrafts((d) => { const next = { ...d }; delete next[key]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(A, b);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [A, b, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: CR_CSS }} />

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
          <FieldLabel info={CRAMER_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '360px' }}>
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
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>n</span>
            <Stepper value={n} onChange={setSize} min={sizeRange[0]} max={sizeRange[sizeRange.length - 1]} />
            <span style={{ color: '#94a3b8', fontSize: '13px' }}>equations and unknowns</span>
            <button className="cr-btn" onClick={shuffle} style={{ marginLeft: '10px' }}>
              Shuffle
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>A and b</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {A.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {row.map((val, j) => (
                  <input
                    key={j}
                    className="cr-cell-input"
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
                  className="cr-cell-input cr-b"
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
