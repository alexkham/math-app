'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';

// ===========================================================
// LUWrapper v1
// Computes the LU decomposition of a square numeric matrix by
// Gaussian elimination, one row operation per scene, recording
// each multiplier into L as the corresponding entry of U is
// cleared. Doolittle convention: L unit lower triangular, U upper
// triangular. When a zero pivot is met, the rows are swapped
// (partial pivoting only when forced) and the swap is applied to
// the copy of A on the left, so the result reads PA = LU.
//
// Per column k, left to right:
//   - 'pivot'     : the entry U[k][k] is marked; if it is zero, a
//                   'swap' scene brings up a non-zero entry from
//                   below (and reorders the finished part of L too)
//   - 'eliminate' : for each row i below, ℓ_ik = U[i][k] / U[k][k]
//                   is written into L and R_i ← R_i − ℓ_ik R_k is
//                   applied to U, one scene per row
// Then 'done': L · U reproduces A (or PA), and the product of
// the diagonal of U is det A up to the sign of the permutation.
//
// Scenes carry a `phase` field (intro | pivot | swap | eliminate |
// done) so the explanations hook and the diagrams module can find
// them without assuming a fixed run length.
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

const LU_INFO =
  'The LU decomposition writes a square matrix as A = LU with L unit lower ' +
  'triangular and U upper triangular. It is Gaussian elimination with the ' +
  'multipliers kept: every time a multiple of the pivot row is subtracted from ' +
  'a row below, that multiple goes into L and the cleared row goes into U. If a ' +
  'zero pivot appears, two rows are swapped and the factorization becomes PA = LU. ' +
  'Solving A x = b then costs two triangular solves, L y = b and U x = y.';

const LU_CSS = `
  .lu-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .lu-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .lu-pill:hover { border-color: #94a3b8; }
  .lu-pill-active:hover { border-color: #2563eb; }

  .lu-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .lu-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .lu-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .lu-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .lu-info:hover, .lu-info:focus { background: #bfdbfe; outline: none; }

  .lu-info .lu-tip {
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
  .lu-info .lu-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .lu-info:hover .lu-tip, .lu-info:focus .lu-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  classic: {
    label: 'Classic 3×3',
    note: 'integer multipliers, no swaps',
    values: [[2, 1, 1], [4, 3, 3], [8, 7, 9]]
  },
  negatives: {
    label: 'Negative pivots',
    note: 'a negative pivot and negative multipliers',
    values: [[1, 2, 3], [2, 3, 4], [3, 4, 6]]
  },
  pivoting: {
    label: 'Needs a swap',
    note: 'zero in the (1,1) position: PA = LU',
    values: [[0, 1, 2], [1, 2, 3], [2, 5, 9]]
  },
  twoByTwo: {
    label: '2×2',
    note: 'one multiplier, a fraction',
    values: [[4, 3], [6, 3]]
  },
  pascal: {
    label: 'Pascal 4×4',
    note: 'L and U are both Pascal triangles',
    values: [[1, 1, 1, 1], [1, 2, 3, 4], [1, 3, 6, 10], [1, 4, 10, 20]]
  },
  singular: {
    label: 'Singular',
    note: 'a zero lands on the diagonal of U',
    values: [[1, 2, 3], [2, 4, 6], [1, 0, 1]]
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
  const isFrac = text.includes('/');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: isFrac ? `calc(${font} * 0.8)` : font, ...(extra || {}) }
  };
}

const KNOWN = { color: '#94a3b8' };

function rowLabel(i) {
  return `R<sub>${i + 1}</sub>`;
}

function factorHtml(f) {
  const text = fmt(Math.abs(f));
  return text.includes('/') ? `(${text})` : text;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values) {
  const n = values.length;
  const { cellPx, font } = sizingFor(n);

  const A = clone(values);        // reordered when a swap happens (PA)
  const U = clone(values);        // working matrix → upper triangular
  const L = [];                   // multipliers below the diagonal, null = not yet
  for (let i = 0; i < n; i++) { L.push([]); for (let j = 0; j < n; j++) L[i].push(null); }
  let swapped = false;
  const perm = [];                // row order of A currently shown
  for (let i = 0; i < n; i++) perm.push(i);

  const matA = () => ({
    symbol: 'a', rows: n, cols: n, label: swapped ? 'PA' : 'A',
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
          if (i === j) o[`${i},${j}`] = numCell(1, font, KNOWN);
          else if (j > i) o[`${i},${j}`] = numCell(0, font, KNOWN);
          else if (L[i][j] === null) o[`${i},${j}`] = { empty: true };
          else o[`${i},${j}`] = numCell(L[i][j], font);
        }
      }
      return o;
    })()
  });
  const matU = () => ({
    symbol: 'u', rows: n, cols: n, label: 'U',
    cellSize: cellPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) o[`${i},${j}`] = numCell(U[i][j], font);
      return o;
    })()
  });

  const layout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'L' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'U' }
  ];

  const snap = () => ({ A: matA(), L: matL(), U: matU() });
  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `LU decomposition of a ${n}×${n} matrix`,
    formula:
      'A will be written as <strong>A = LU</strong>: L unit lower triangular (ones on the diagonal, ' +
      'zeros above — drawn already), U upper triangular. The method is Gaussian elimination on a working ' +
      'copy of A, which becomes U, while every multiplier used to clear an entry is stored in the same ' +
      'position of L. If a pivot is zero, two rows are swapped and the result reads PA = LU.',
    matrices: snap(),
    layout,
    highlights: {}
  });

  for (let k = 0; k < n - 1; k++) {
    // zero pivot → swap with the first non-zero row below, if any
    if (Math.abs(U[k][k]) <= EPS) {
      let p = -1;
      for (let i = k + 1; i < n; i++) if (Math.abs(U[i][k]) > EPS) { p = i; break; }
      if (p !== -1) {
        [U[k], U[p]] = [U[p], U[k]];
        [A[k], A[p]] = [A[p], A[k]];
        for (let j = 0; j < k; j++) { const t = L[k][j]; L[k][j] = L[p][j]; L[p][j] = t; }
        [perm[k], perm[p]] = [perm[p], perm[k]];
        swapped = true;
        scenes.push({
          phase: 'swap',
          title: `Swap ${rowLabel(k)} ↔ ${rowLabel(p)}`,
          formula:
            `The pivot position (${k + 1}, ${k + 1}) holds 0, and nothing can be divided by it. Row ${p + 1} has ` +
            `${fmt(U[k][k])} in that column, so the two rows are exchanged — in the working matrix, in the copy of A on the ` +
            `left (now PA), and in the multipliers already stored in L, which travel with their rows. ` +
            'Without the swap no LU factorization exists; with it, PA = LU.',
          matrices: snap(),
          layout,
          highlights: {
            A: { rows: [[k, 'primary'], [p, 'secondary']] },
            U: { rows: [[k, 'primary'], [p, 'secondary']] },
            L: { rows: [[k, 'primary'], [p, 'secondary']] }
          }
        });
      }
    }

    if (Math.abs(U[k][k]) <= EPS) {
      scenes.push({
        phase: 'pivot',
        title: `Column ${k + 1}: pivot is 0 with nothing below`,
        formula:
          `Every entry of column ${k + 1} from row ${k + 1} down is already 0, so there is nothing to eliminate ` +
          'and no swap can help. The column is left as it is; the multipliers below this pivot are 0, and the ' +
          'zero on the diagonal of U means A is singular.',
        matrices: snap(),
        layout,
        highlights: { U: { cells: [[k, k, 'muted']] } }
      });
      for (let i = k + 1; i < n; i++) L[i][k] = 0;
      continue;
    }

    scenes.push({
      phase: 'pivot',
      title: `Pivot ${k + 1}: ${fmt(U[k][k])} at (${k + 1}, ${k + 1})`,
      formula:
        `The entry ${fmt(U[k][k])} at row ${k + 1}, column ${k + 1} is the pivot for this column. Every row below ` +
        `will have its column-${k + 1} entry cleared by subtracting a multiple of this row, and each multiple is ` +
        `recorded in column ${k + 1} of L.`,
      matrices: snap(),
      layout,
      highlights: {
        U: { cells: [[k, k, 'accent']], rows: [[k, 'primary']] }
      }
    });

    for (let i = k + 1; i < n; i++) {
      const target = U[i][k];
      const f = target / U[k][k];
      L[i][k] = f;
      const before = fmt(target);
      for (let c = 0; c < n; c++) {
        U[i][c] = U[i][c] - f * U[k][c];
        if (Math.abs(U[i][c]) < EPS) U[i][c] = 0;
      }
      const sign = f < 0 ? '+' : '−';
      scenes.push({
        phase: 'eliminate',
        title: `ℓ<sub>${i + 1},${k + 1}</sub> = ${fmt(f)}, &nbsp; ${rowLabel(i)} ← ${rowLabel(i)} ${sign} ${factorHtml(f)}·${rowLabel(k)}`,
        formula:
          `The multiplier is the entry under the pivot divided by the pivot: ${before} / ${fmt(U[k][k])} = ${fmt(f)}. ` +
          `It is stored at (${i + 1}, ${k + 1}) in L, and ${factorHtml(f)} times the pivot row is ` +
          `${f < 0 ? 'added to' : 'subtracted from'} row ${i + 1} of the working matrix, so its column-${k + 1} entry becomes 0.`,
        matrices: snap(),
        layout,
        highlights: {
          L: { cells: [[i, k, 'accent']] },
          U: { cells: [[i, k, 'accent']], rows: [[k, 'primary'], [i, 'secondary']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'U', row: i, col: k },
            to: { matrix: 'L', row: i, col: k },
            style: 'accent', curveOffset: 40, curveDirection: 'down'
          }
        ]
      });
    }
  }

  let detU = 1;
  for (let i = 0; i < n; i++) detU *= U[i][i];
  const singular = Math.abs(detU) < EPS;
  const diagHl = [];
  for (let i = 0; i < n; i++) diagHl.push([i, i, singular && Math.abs(U[i][i]) < EPS ? 'muted' : 'accent']);
  const lHl = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < i; j++) lHl.push([i, j, 'secondary']);

  scenes.push({
    phase: 'done',
    title: swapped ? 'Done: PA = LU' : 'Done: A = LU',
    formula:
      'U is upper triangular and L holds every multiplier that was used, so multiplying L by U ' +
      (swapped ? 'reproduces the row-swapped matrix PA on the left.' : 'reproduces A.') +
      ` The determinant is the product of the diagonal of U${swapped ? ', up to the sign of the permutation' : ''}: ` +
      `${fmt(detU)}${singular ? ' — A is singular, and the zero on the diagonal of U says so' : ''}. ` +
      'Solving A x = b is now two triangular solves: L y = ' + (swapped ? 'Pb' : 'b') + ' forward, then U x = y backward.',
    matrices: snap(),
    layout,
    highlights: {
      L: { cells: lHl },
      U: { cells: diagHl }
    }
  });

  return scenes;
}

// -----------------------------------------------------------
// Random matrix: small non-zero integers, with a 30% chance of a
// zero in the (1,1) position so that the swap branch shows up.
// -----------------------------------------------------------
export function randomMatrix(n) {
  const rnd = () => { let v = 0; while (v === 0) v = Math.floor(Math.random() * 9) - 4; return v; };
  const M = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(rnd());
    M.push(row);
  }
  if (n >= 2 && Math.random() < 0.3) M[0][0] = 0;
  return M;
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
      className="lu-info"
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
      <span className="lu-tip">{tip}</span>
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
          className="lu-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="lu-stepper-btn"
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
      className={active ? 'lu-pill lu-pill-active' : 'lu-pill'}
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
export default function LUWrapper({
  defaultPreset = DEFAULT_PRESET,
  sizeRange = [2, 3, 4],
  explanations = null,
  title = 'LU Decomposition',
  subtitle = 'Gaussian elimination with the multipliers kept: the working matrix becomes U, the multipliers fill L, and a forced row swap turns A = LU into PA = LU.',
  defaultSpeed = 1500
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
  const shuffle = () => { setPreset(null); setDrafts({}); setValues(randomMatrix(n)); };

  const editCell = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`${i},${j}`]: raw }));
    const num = parseFloat(raw);
    if (Number.isFinite(num) || raw === '' || raw === '-') {
      setValues((v) => {
        const next = clone(v);
        next[i][j] = Number.isFinite(num) ? num : 0;
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
      <style dangerouslySetInnerHTML={{ __html: LU_CSS }} />

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
          <FieldLabel info={LU_INFO}>Preset</FieldLabel>
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
            <button className="lu-btn" onClick={shuffle} style={{ marginLeft: '10px' }}>
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
                    className="lu-cell-input"
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
          stepLogTitle="Row operations"
          sceneCanvasProps={{ showCaption: false }}
        />
      </div>
    </div>
  );
}
