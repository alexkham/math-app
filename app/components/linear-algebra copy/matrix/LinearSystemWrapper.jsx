'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';

// ===========================================================
// LinearSystemWrapper v1
// Solves a numeric system A x = b (m equations, n unknowns) by
// reducing the augmented matrix [A | b] to reduced row echelon
// form, one row operation per scene, and classifies the result:
//
//   - inconsistent : a row reads 0 … 0 | c with c ≠ 0 → no solution
//   - unique       : a pivot in every column of A → x read off
//   - infinite     : free columns → x = p + t₁v₁ + … , one direction
//                    per free variable
//
// Forward pass (as in the rank tool, on the augmented matrix):
//   pivot | swap | eliminate | skip
// Consistency check after the forward pass; then the backward pass:
//   normalize (scale the pivot row so the pivot is 1)
//   backelim  (clear the entries above each pivot)
// Then one of: inconsistent | unique | infinite  (all terminal).
//
// The right-hand side column is kept in colour throughout, and
// the label reads 'A | b'.
//
// Scenes carry a `phase` field so the explanations hook and the
// diagrams module can find them without assuming a fixed length.
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

const SYS_INFO =
  'A system of linear equations has exactly one solution, no solution, or ' +
  'infinitely many. Row reducing the augmented matrix [A | b] decides which: ' +
  'a row of zeros equal to a non-zero constant means no solution; a pivot in ' +
  'every column of A means one solution, read off the last column; free ' +
  'columns mean infinitely many, with one free parameter per free column. ' +
  'Reduced row echelon form makes all three cases readable at a glance.';

const LS_CSS = `
  .ls-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .ls-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .ls-pill:hover { border-color: #94a3b8; }
  .ls-pill-active:hover { border-color: #2563eb; }

  .ls-cell-input {
    width: 44px; height: 32px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 14px;
    color: #0f172a; background: white; outline: none;
  }
  .ls-cell-input.ls-b { border-color: #f59e0b; background: #fffbeb; }
  .ls-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

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
// Presets — { A, b }
// -----------------------------------------------------------
export const PRESETS = {
  unique: {
    label: 'One solution',
    note: '3 equations, 3 unknowns, solution (5, 3, −2)',
    A: [[1, 1, 1], [0, 2, 5], [2, 5, -1]], b: [6, -4, 27]
  },
  infinite: {
    label: 'Infinitely many',
    note: '2 equations, 3 unknowns: a line of solutions',
    A: [[1, 2, -1], [2, 4, 1]], b: [3, 9]
  },
  none: {
    label: 'No solution',
    note: 'a row reduces to 0 = 1',
    A: [[1, 1], [2, 2], [1, -1]], b: [2, 5, 0]
  },
  homogeneous: {
    label: 'Homogeneous',
    note: 'b = 0: the null space, a line through the origin',
    A: [[1, 2, 3], [2, 4, 7]], b: [0, 0]
  },
  overdetermined: {
    label: 'Overdetermined',
    note: '3 equations, 2 unknowns, still consistent',
    A: [[1, 1], [1, -1], [2, 1]], b: [3, 1, 5]
  },
  twoFree: {
    label: 'Two free variables',
    note: '2 equations, 4 unknowns: a plane of solutions',
    A: [[1, 2, 0, 1], [0, 0, 1, 3]], b: [4, 2]
  }
};

export const DEFAULT_PRESET = 'unique';

const EPS = 1e-9;
const SUBS = ['₁', '₂', '₃', '₄', '₅'];

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
  const text = fmt(Math.abs(f));
  return text.includes('/') ? `(${text})` : text;
}

function listCols(cols) {
  return cols.map((c) => `x${SUBS[c]}`).join(', ');
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(Ain, bin) {
  const m = Ain.length;
  const n = Ain[0].length;
  const { cellPx, font } = sizingFor(m, n);

  // augmented working matrix
  const M = Ain.map((row, i) => [...row, bin[i]]);

  const matM = () => ({
    symbol: 'a', rows: m, cols: n + 1, label: 'A | b',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < m; i++) for (let j = 0; j <= n; j++) o[`${i},${j}`] = numCell(M[i][j], font, j === n ? B_STYLE : null);
      return o;
    })()
  });
  const colVec = (label, vals, extra) => ({
    symbol: 'x', rows: n, cols: 1, label,
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) o[`${i},0`] = numCell(vals[i], font, extra);
      return o;
    })()
  });

  const layout = [{ type: 'matrix', ref: 'M' }];
  const snap = () => ({ M: matM() });
  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `${m} equation${m === 1 ? '' : 's'}, ${n} unknown${n === 1 ? '' : 's'}`,
    formula:
      'The augmented matrix [A | b] holds the coefficients of the unknowns on the left and the ' +
      'constants on the right (in amber). Row operations on it are legal moves on the equations: ' +
      'they change how the system is written, never what it says. The plan is to reduce it to ' +
      '<strong>reduced row echelon form</strong>, where the answer — one solution, none, or infinitely ' +
      'many — can be read directly.',
    matrices: snap(),
    layout,
    highlights: {}
  });

  // ---------- forward pass ----------
  let r = 0;
  const pivotCols = [];
  for (let j = 0; j < n && r < m; j++) {
    let p = -1;
    for (let i = r; i < m; i++) if (Math.abs(M[i][j]) > EPS) { p = i; break; }

    if (p === -1) {
      const cells = [];
      for (let i = r; i < m; i++) cells.push([i, j, 'muted']);
      scenes.push({
        phase: 'skip',
        title: `Column ${j + 1}: no pivot — x${SUBS[j]} is free`,
        formula:
          `Every entry of column ${j + 1} from row ${r + 1} down is 0, so no equation from here on ` +
          `pins x${SUBS[j]} down. It is a <strong>free variable</strong>: if the system turns out to be ` +
          'consistent, it can take any value and the solution set is infinite.',
        matrices: snap(),
        layout,
        highlights: { M: { cells } }
      });
      continue;
    }

    if (p !== r) {
      const tmp = M[p]; M[p] = M[r]; M[r] = tmp;
      scenes.push({
        phase: 'swap',
        title: `Swap ${rowLabel(r)} ↔ ${rowLabel(p)}`,
        formula:
          `Row ${r + 1} has a 0 in column ${j + 1} but row ${p + 1} does not. Swapping two equations ` +
          'changes nothing about the solutions, and brings a non-zero entry up to the pivot position.',
        matrices: snap(),
        layout,
        highlights: { M: { rows: [[r, 'primary'], [p, 'secondary']] } }
      });
    }

    pivotCols.push(j);
    scenes.push({
      phase: 'pivot',
      title: `Pivot ${pivotCols.length}: ${fmt(M[r][j])} at row ${r + 1}, column ${j + 1}`,
      formula:
        `The entry ${fmt(M[r][j])} at row ${r + 1}, column ${j + 1} is a pivot: x${SUBS[j]} is a ` +
        '<strong>leading variable</strong>, determined by the others. Every entry below it will now be cleared.',
      matrices: snap(),
      layout,
      highlights: { M: { cells: [[r, j, 'accent']], rows: [[r, 'primary']] } }
    });

    for (let k = r + 1; k < m; k++) {
      if (Math.abs(M[k][j]) <= EPS) continue;
      const f = M[k][j] / M[r][j];
      const before = fmt(M[k][j]);
      for (let c = 0; c <= n; c++) {
        M[k][c] = M[k][c] - f * M[r][c];
        if (Math.abs(M[k][c]) < EPS) M[k][c] = 0;
      }
      const sign = f < 0 ? '+' : '−';
      scenes.push({
        phase: 'eliminate',
        title: `${rowLabel(k)} ← ${rowLabel(k)} ${sign} ${factorHtml(f)}·${rowLabel(r)}`,
        formula:
          `Row ${k + 1} has ${before} under the pivot. Subtract ${factorHtml(f)} times the pivot row ` +
          `so that entry becomes 0 — including the constant on the right, which changes with the rest of the equation.`,
        matrices: snap(),
        layout,
        highlights: { M: { cells: [[k, j, 'accent']], rows: [[r, 'primary'], [k, 'secondary']] } }
      });
    }
    r++;
  }

  // ---------- consistency check ----------
  let badRow = -1;
  for (let i = 0; i < m; i++) {
    let allZero = true;
    for (let j = 0; j < n; j++) if (Math.abs(M[i][j]) > EPS) { allZero = false; break; }
    if (allZero && Math.abs(M[i][n]) > EPS) { badRow = i; break; }
  }
  if (badRow !== -1) {
    scenes.push({
      phase: 'inconsistent',
      title: `No solution: row ${badRow + 1} reads 0 = ${fmt(M[badRow][n])}`,
      formula:
        `Row ${badRow + 1} has become 0 for every unknown and ${fmt(M[badRow][n])} on the right: the equation ` +
        `<strong>0 = ${fmt(M[badRow][n])}</strong>, which no choice of unknowns can satisfy. The system is ` +
        '<strong>inconsistent</strong>. Geometrically, b is not in the column space of A — the equations ' +
        'contradict one another — and no further reduction can change that.',
      matrices: snap(),
      layout,
      highlights: { M: { rows: [[badRow, 'secondary']], cells: [[badRow, n, 'accent']] } }
    });
    return scenes;
  }

  // ---------- backward pass ----------
  for (let k = pivotCols.length - 1; k >= 0; k--) {
    const c = pivotCols[k];
    if (Math.abs(M[k][c] - 1) > EPS) {
      const d = M[k][c];
      for (let j = 0; j <= n; j++) {
        M[k][j] = M[k][j] / d;
        if (Math.abs(M[k][j]) < EPS) M[k][j] = 0;
      }
      scenes.push({
        phase: 'normalize',
        title: `${rowLabel(k)} ← ${rowLabel(k)} / ${fmt(d)}`,
        formula:
          `Divide row ${k + 1} by its pivot ${fmt(d)} so the pivot becomes 1. Scaling an equation by a ` +
          'non-zero constant leaves its solutions unchanged, and a unit pivot is what lets the ' +
          'constant on the right be read as the value of the variable.',
        matrices: snap(),
        layout,
        highlights: { M: { cells: [[k, c, 'accent']], rows: [[k, 'primary']] } }
      });
    }
    for (let i = k - 1; i >= 0; i--) {
      if (Math.abs(M[i][c]) <= EPS) continue;
      const f = M[i][c];
      for (let j = 0; j <= n; j++) {
        M[i][j] = M[i][j] - f * M[k][j];
        if (Math.abs(M[i][j]) < EPS) M[i][j] = 0;
      }
      const sign = f < 0 ? '+' : '−';
      scenes.push({
        phase: 'backelim',
        title: `${rowLabel(i)} ← ${rowLabel(i)} ${sign} ${factorHtml(f)}·${rowLabel(k)}`,
        formula:
          `Clear the entry above the pivot in column ${c + 1}: subtract ${factorHtml(f)} times row ${k + 1} ` +
          `from row ${i + 1}. After this, x${SUBS[c]} appears in one equation only.`,
        matrices: snap(),
        layout,
        highlights: { M: { cells: [[i, c, 'accent']], rows: [[k, 'primary'], [i, 'secondary']] } }
      });
    }
  }

  // ---------- classification ----------
  const rank = pivotCols.length;
  const free = [];
  for (let j = 0; j < n; j++) if (!pivotCols.includes(j)) free.push(j);
  const pivotHl = pivotCols.map((c, k) => [k, c, 'accent']);

  if (free.length === 0) {
    const x = new Array(n).fill(0);
    for (let k = 0; k < rank; k++) x[pivotCols[k]] = M[k][n];
    scenes.push({
      phase: 'unique',
      title: `One solution: x = (${x.map(fmt).join(', ')})`,
      formula:
        'Reduced row echelon form, with a pivot in every column of A. Each row now reads ' +
        '<strong>x<sub>j</sub> = constant</strong>, so the solution is the right-hand column: ' +
        `x = (${x.map(fmt).join(', ')}).` +
        (m > rank ? ` The ${m - rank} zero row${m - rank === 1 ? '' : 's'} at the bottom ${m - rank === 1 ? 'is' : 'are'} redundant equations, implied by the others.` : '') +
        ' Rank equals the number of unknowns: the columns of A are independent and the solution is unique.',
      matrices: { M: matM(), X: colVec('x', x) },
      layout: [
        { type: 'matrix', ref: 'M' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'X' }
      ],
      highlights: {
        M: { cells: [...pivotHl, ...pivotCols.map((c, k) => [k, n, 'primary'])] },
        X: { cells: x.map((_, i) => [i, 0, 'accent']) }
      }
    });
    return scenes;
  }

  // infinite: particular solution + one direction per free variable
  const p = new Array(n).fill(0);
  for (let k = 0; k < rank; k++) p[pivotCols[k]] = M[k][n];
  const dirs = free.map((f) => {
    const v = new Array(n).fill(0);
    v[f] = 1;
    for (let k = 0; k < rank; k++) v[pivotCols[k]] = -M[k][f];
    return v;
  });

  const matrices = { M: matM(), P: colVec('p', p) };
  const layoutInf = [
    { type: 'matrix', ref: 'M' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'P' }
  ];
  free.forEach((f, idx) => {
    matrices[`V${idx}`] = colVec(`v${SUBS[idx]}`, dirs[idx]);
    layoutInf.push({ type: 'operator', symbol: '+' });
    layoutInf.push({ type: 'operator', symbol: `t${SUBS[idx]}`, size: 22, color: '#1e40af' });
    layoutInf.push({ type: 'matrix', ref: `V${idx}` });
  });
  const paramLabel = free.map((f, idx) => `t${SUBS[idx]} = x${SUBS[f]}`).join(', ');
  const hl = { M: { cells: [...pivotHl, ...free.map((f) => [0, f, 'secondary'])] }, P: { cells: p.map((_, i) => [i, 0, 'accent']) } };
  free.forEach((f, idx) => { hl[`V${idx}`] = { cells: dirs[idx].map((_, i) => [i, 0, 'secondary']) }; });

  scenes.push({
    phase: 'infinite',
    title: `Infinitely many solutions: ${free.length} free variable${free.length === 1 ? '' : 's'}`,
    formula:
      `Reduced row echelon form with ${rank} pivot${rank === 1 ? '' : 's'} and ${free.length} free column${free.length === 1 ? '' : 's'} ` +
      `(${listCols(free)}). Set ${paramLabel}; each leading variable is then its constant minus the free-column ` +
      'entries times the parameters. In vector form <strong>x = p + ' +
      free.map((f, idx) => `t${SUBS[idx]} v${SUBS[idx]}`).join(' + ') + '</strong>: ' +
      `p = (${p.map(fmt).join(', ')}) is one particular solution, and ` +
      (free.length === 1
        ? `v₁ = (${dirs[0].map(fmt).join(', ')}) is the direction of the solution line.`
        : `the v's span the solution ${free.length === 2 ? 'plane' : 'space'}.`) +
      (bin.every((v) => Math.abs(v) < EPS) ? ' With b = 0, p = 0 and the solution set is the null space of A.' : ''),
    matrices,
    layout: layoutInf,
    highlights: hl
  });

  return scenes;
}

// -----------------------------------------------------------
// Random system: small integers; half the time one row is a
// combination of another (dependent), so the non-unique cases
// appear; the constant may then be perturbed to force
// inconsistency.
// -----------------------------------------------------------
export function randomSystem(m, n) {
  const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
  const A = [];
  for (let i = 0; i < m; i++) { const row = []; for (let j = 0; j < n; j++) row.push(rnd(-3, 3)); A.push(row); }
  const x = [];
  for (let j = 0; j < n; j++) x.push(rnd(-2, 2));
  const b = [];
  for (let i = 0; i < m; i++) { let s = 0; for (let j = 0; j < n; j++) s += A[i][j] * x[j]; b.push(s); }
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
export default function LinearSystemWrapper({
  defaultPreset = DEFAULT_PRESET,
  rowRange = [1, 2, 3, 4],
  colRange = [1, 2, 3, 4],
  explanations = null,
  title = 'Solution Sets of Linear Systems',
  subtitle = 'Row reduce [A | b] to reduced row echelon form and read the answer: one solution, none, or infinitely many.',
  defaultSpeed = 1500
}) {
  const initial = PRESETS[defaultPreset] || PRESETS[DEFAULT_PRESET];
  const [A, setA] = useState(() => clone(initial.A));
  const [b, setB] = useState(() => initial.b.slice());
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
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
    if (raw === '' || raw === '-') return 0;
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
          <FieldLabel info={SYS_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '420px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Shape</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ color: '#94a3b8', fontSize: '13px' }}>equations</span>
            <Stepper value={m} onChange={setRows} min={rowRange[0]} max={rowRange[rowRange.length - 1]} />
            <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '6px' }}>unknowns</span>
            <Stepper value={n} onChange={setCols} min={colRange[0]} max={colRange[colRange.length - 1]} />
            <button className="ls-btn" onClick={shuffle} style={{ marginLeft: '10px' }}>
              Shuffle
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>A | b</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {A.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                {row.map((val, j) => (
                  <input
                    key={j}
                    className="ls-cell-input"
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
                  className="ls-cell-input ls-b"
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
          stepLogTitle="Row operations"
          sceneCanvasProps={{ showCaption: false }}
        />
      </div>
    </div>
  );
}
