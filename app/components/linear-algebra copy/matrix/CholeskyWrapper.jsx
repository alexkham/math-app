'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';

// ===========================================================
// CholeskyWrapper v1
// Computes the Cholesky factorization A = L Lᵀ of a symmetric
// positive definite numeric matrix, one entry of L per scene,
// column by column:
//
//   ℓ_jj = √( a_jj − Σ_{k<j} ℓ_jk² )
//   ℓ_ij = ( a_ij − Σ_{k<j} ℓ_ik ℓ_jk ) / ℓ_jj      for i > j
//
// Phases (each scene carries a `phase` field):
//   intro    — A = L · Lᵀ with L's zeros drawn, entries empty
//   notsym   — terminal: A is not symmetric
//   diag     — one per column: the square root
//   notpd    — terminal: the radicand is ≤ 0, A is not positive definite
//   offdiag  — one per entry below the diagonal
//   done     — L complete, Lᵀ mirrored, A reproduced
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

const CHOL_INFO =
  'The Cholesky factorization writes a symmetric positive definite matrix as ' +
  'A = L Lᵀ with L lower triangular and a positive diagonal — a matrix square ' +
  'root. It is LU with the symmetry used: only one factor is computed, the ' +
  'other is its transpose, and no pivoting is ever needed. It costs half of ' +
  'LU, and it doubles as the standard test for positive definiteness: the ' +
  'factorization succeeds exactly when every radicand stays positive.';

const CH_CSS = `
  .ch-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .ch-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .ch-pill:hover { border-color: #94a3b8; }
  .ch-pill-active:hover { border-color: #2563eb; }

  .ch-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .ch-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .ch-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .ch-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .ch-info:hover, .ch-info:focus { background: #bfdbfe; outline: none; }

  .ch-info .ch-tip {
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
  .ch-info .ch-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .ch-info:hover .ch-tip, .ch-info:focus .ch-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  classic: {
    label: 'Classic 3×3',
    note: 'integer factor',
    values: [[4, 2, 2], [2, 5, 3], [2, 3, 6]]
  },
  twoByTwo: {
    label: '2×2',
    note: 'the smallest case',
    values: [[4, 2], [2, 2]]
  },
  pascal: {
    label: 'Pascal 4×4',
    note: 'L is the lower Pascal triangle',
    values: [[1, 1, 1, 1], [1, 2, 3, 4], [1, 3, 6, 10], [1, 4, 10, 20]]
  },
  decimals: {
    label: 'Irrational factor',
    note: 'square roots that do not simplify',
    values: [[2, 1, 0], [1, 2, 1], [0, 1, 2]]
  },
  notPD: {
    label: 'Not positive definite',
    note: 'symmetric, but a radicand goes negative',
    values: [[1, 2], [2, 1]]
  },
  notSym: {
    label: 'Not symmetric',
    note: 'the factorization does not apply',
    values: [[4, 1], [3, 5]]
  }
};

export const DEFAULT_PRESET = 'classic';

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

function sizingFor(n) {
  if (n <= 2) return { cellPx: 56, font: '16px' };
  if (n === 3) return { cellPx: 52, font: '15px' };
  return { cellPx: 46, font: '13.5px' };
}

function numCell(v, font, extra) {
  const text = fmt(v);
  const isFrac = text.includes('/') || text.includes('.');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: isFrac ? `calc(${font} * 0.8)` : font, ...(extra || {}) }
  };
}

const KNOWN = { color: '#94a3b8' };

function isSymmetric(A) {
  const n = A.length;
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.abs(A[i][j] - A[j][i]) > EPS) return false;
  return true;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values) {
  const A = clone(values);
  const n = A.length;
  const { cellPx, font } = sizingFor(n);

  const L = [];
  for (let i = 0; i < n; i++) { L.push([]); for (let j = 0; j < n; j++) L[i].push(null); }

  const matA = () => ({
    symbol: 'a', rows: n, cols: n, label: 'A',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) o[`${i},${j}`] = numCell(A[i][j], font);
      return o;
    })()
  });
  const matL = () => ({
    symbol: 'l', rows: n, cols: n, label: 'L',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (j > i) o[`${i},${j}`] = numCell(0, font, KNOWN);
          else if (L[i][j] === null) o[`${i},${j}`] = { empty: true };
          else o[`${i},${j}`] = numCell(L[i][j], font);
        }
      }
      return o;
    })()
  });
  const matLT = () => ({
    symbol: 'l', rows: n, cols: n, label: 'Lᵀ',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i > j) o[`${i},${j}`] = numCell(0, font, KNOWN);
          else if (L[j][i] === null) o[`${i},${j}`] = { empty: true };
          else o[`${i},${j}`] = numCell(L[j][i], font);
        }
      }
      return o;
    })()
  });

  const layout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'L' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'LT' }
  ];

  const snap = () => ({ A: matA(), L: matL(), LT: matLT() });
  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Cholesky factorization of a ${n}×${n} matrix`,
    formula:
      'A will be written as <strong>A = L Lᵀ</strong>: L lower triangular with a positive diagonal, and the ' +
      'second factor its own transpose — drawn on the right and filled in step with L. The zeros above the ' +
      'diagonal of L are known already. The entries are computed column by column: a square root on the ' +
      'diagonal, then a division for each entry below it. Two preconditions: A must be symmetric, and every ' +
      'square root must be of a positive number.',
    matrices: snap(),
    layout,
    highlights: {}
  });

  if (!isSymmetric(A)) {
    const cells = [];
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.abs(A[i][j] - A[j][i]) > EPS) { cells.push([i, j, 'secondary']); cells.push([j, i, 'secondary']); }
    scenes.push({
      phase: 'notsym',
      title: 'A is not symmetric',
      formula:
        'A Lᵀ-shaped second factor forces the product L Lᵀ to be symmetric, so an unsymmetric A cannot ' +
        'equal it. The highlighted pairs differ across the diagonal. Cholesky does not apply; use the LU ' +
        'decomposition instead, which makes no symmetry assumption.',
      matrices: snap(),
      layout,
      highlights: { A: { cells } }
    });
    return scenes;
  }

  for (let j = 0; j < n; j++) {
    // diagonal
    let s = 0;
    for (let k = 0; k < j; k++) s += L[j][k] * L[j][k];
    const radicand = A[j][j] - s;
    const subtractHtml = (() => {
      if (j === 0) return `${fmt(A[j][j])}`;
      const terms = [];
      for (let k = 0; k < j; k++) terms.push(`${fmt(L[j][k])}²`);
      return `${fmt(A[j][j])} − (${terms.join(' + ')}) = ${fmt(radicand)}`;
    })();

    if (radicand <= EPS) {
      scenes.push({
        phase: 'notpd',
        title: `Column ${j + 1}: the radicand is ${fmt(radicand)}`,
        formula:
          `ℓ<sub>${j + 1},${j + 1}</sub> would be √(${subtractHtml}), the square root of a number that is not positive. ` +
          'No real L exists: A is symmetric but <strong>not positive definite</strong>. This is the standard test — ' +
          'a symmetric matrix is positive definite exactly when Cholesky runs to completion with positive radicands.',
        matrices: snap(),
        layout,
        highlights: { A: { cells: [[j, j, 'muted']] }, L: { cells: [[j, j, 'muted']] } }
      });
      return scenes;
    }

    L[j][j] = Math.sqrt(radicand);
    const prevCells = [];
    for (let k = 0; k < j; k++) prevCells.push([j, k, 'secondary']);
    scenes.push({
      phase: 'diag',
      title: `ℓ<sub>${j + 1},${j + 1}</sub> = √(${subtractHtml}) = ${fmt(L[j][j])}`,
      formula:
        `The diagonal entry is a square root: a<sub>${j + 1},${j + 1}</sub>` +
        (j === 0 ? '' : ` minus the squares of the entries already in row ${j + 1} of L`) +
        `, rooted. The radicand is positive (${fmt(radicand)}), so the entry is real and the factorization continues. ` +
        'The same value appears at once in Lᵀ.',
      matrices: snap(),
      layout,
      highlights: {
        A: { cells: [[j, j, 'primary']] },
        L: { cells: [[j, j, 'accent'], ...prevCells] },
        LT: { cells: [[j, j, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'A', row: j, col: j },
          to: { matrix: 'L', row: j, col: j },
          style: 'primary', curveOffset: 36, curveDirection: 'up'
        }
      ]
    });

    // below the diagonal
    for (let i = j + 1; i < n; i++) {
      let t = 0;
      for (let k = 0; k < j; k++) t += L[i][k] * L[j][k];
      const num = A[i][j] - t;
      L[i][j] = num / L[j][j];
      const numHtml = (() => {
        if (j === 0) return `${fmt(A[i][j])}`;
        const terms = [];
        for (let k = 0; k < j; k++) terms.push(`${fmt(L[i][k])}·${fmt(L[j][k])}`);
        return `${fmt(A[i][j])} − (${terms.join(' + ')}) = ${fmt(num)}`;
      })();
      const usedI = [];
      const usedJ = [];
      for (let k = 0; k < j; k++) { usedI.push([i, k, 'secondary']); usedJ.push([j, k, 'secondary']); }
      scenes.push({
        phase: 'offdiag',
        title: `ℓ<sub>${i + 1},${j + 1}</sub> = (${numHtml}) / ${fmt(L[j][j])} = ${fmt(L[i][j])}`,
        formula:
          `The entry below the diagonal: a<sub>${i + 1},${j + 1}</sub>` +
          (j === 0 ? '' : ` minus the products of the entries already in rows ${i + 1} and ${j + 1} of L`) +
          `, divided by the diagonal entry ℓ<sub>${j + 1},${j + 1}</sub> just found. ` +
          `It is mirrored into Lᵀ at (${j + 1}, ${i + 1}).`,
        matrices: snap(),
        layout,
        highlights: {
          A: { cells: [[i, j, 'primary']] },
          L: { cells: [[i, j, 'accent'], [j, j, 'primary'], ...usedI, ...usedJ] },
          LT: { cells: [[j, i, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: i, col: j },
            to: { matrix: 'L', row: i, col: j },
            style: 'primary', curveOffset: 36, curveDirection: 'up'
          }
        ]
      });
    }
  }

  let detA = 1;
  for (let j = 0; j < n; j++) detA *= L[j][j] * L[j][j];
  const lHl = [];
  for (let i = 0; i < n; i++) for (let j = 0; j <= i; j++) lHl.push([i, j, j === i ? 'accent' : 'secondary']);
  const ltHl = [];
  for (let i = 0; i < n; i++) for (let j = i; j < n; j++) ltHl.push([i, j, j === i ? 'accent' : 'secondary']);

  scenes.push({
    phase: 'done',
    title: 'Done: A = L Lᵀ',
    formula:
      'L is complete and Lᵀ is its mirror image, so the product on the right reproduces A. Every radicand ' +
      'was positive, which proves A is positive definite. The determinant is the product of the squared ' +
      `diagonal, ${fmt(detA)}. Solving A x = b is now two triangular solves with the same factor: ` +
      'L y = b forward, then Lᵀ x = y backward — half the work of LU, with no pivoting.',
    matrices: snap(),
    layout,
    highlights: { L: { cells: lHl }, LT: { cells: ltHl } }
  });

  return scenes;
}

// -----------------------------------------------------------
// Random symmetric positive definite matrix: B Bᵀ + I for a
// small integer B, which is SPD by construction.
// -----------------------------------------------------------
export function randomSPD(n) {
  const rnd = () => Math.floor(Math.random() * 5) - 2;
  const B = [];
  for (let i = 0; i < n; i++) { const row = []; for (let j = 0; j < n; j++) row.push(rnd()); B.push(row); }
  const A = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      let s = 0;
      for (let k = 0; k < n; k++) s += B[i][k] * B[j][k];
      row.push(s + (i === j ? 1 : 0));
    }
    A.push(row);
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
      className="ch-info"
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
      <span className="ch-tip">{tip}</span>
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
          className="ch-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="ch-stepper-btn"
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
      className={active ? 'ch-pill ch-pill-active' : 'ch-pill'}
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
export default function CholeskyWrapper({
  defaultPreset = DEFAULT_PRESET,
  sizeRange = [2, 3, 4],
  explanations = null,
  title = 'Cholesky Decomposition',
  subtitle = 'A = L Lᵀ for a symmetric positive definite matrix — a square root on each diagonal, a division for each entry below.',
  defaultSpeed = 1600
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
  const shuffle = () => { setPreset(null); setDrafts({}); setValues(randomSPD(n)); };

  // editing keeps A symmetric: the mirrored entry follows
  const editCell = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`${i},${j}`]: raw }));
    const num = parseFloat(raw);
    const v = Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
    if (v !== null) {
      setValues((M) => {
        const next = clone(M);
        next[i][j] = v;
        next[j][i] = v;
        return next;
      });
    }
  };
  const commitCell = (i, j) => {
    setDrafts((d) => { const next = { ...d }; delete next[`${i},${j}`]; return next; });
  };

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
      <style dangerouslySetInnerHTML={{ __html: CH_CSS }} />

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
          <FieldLabel info={CHOL_INFO}>Preset</FieldLabel>
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
            <button className="ch-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random symmetric positive definite matrix">
              Shuffle
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>Entries of A (edits are mirrored)</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {values.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px' }}>
                {row.map((val, j) => (
                  <input
                    key={j}
                    className="ch-cell-input"
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
