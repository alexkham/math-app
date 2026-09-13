'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { formatNumber } from './NumericMatrixRenderer';

// ===========================================================
// RankWrapper v1
// Computes the rank of a numeric matrix by row reduction to
// echelon form, one row operation per scene, and counts the
// pivots. Rank depends on the actual numbers, so unlike the
// sibling tools this one is numeric: the user edits a small
// grid, picks a preset, or shuffles a random matrix.
//
// Per column, left to right:
//   - look for a non-zero entry at or below the current row
//   - none → 'skip'   : the column has no pivot, rank unchanged
//   - found below the current row → 'swap' the two rows first
//   - 'pivot'         : mark the pivot, count it
//   - 'eliminate'     : one scene per non-zero entry below the
//                       pivot, R_k ← R_k − (a_kj / a_rj) R_r
// Then 'done': echelon form, pivots marked, pivot columns of
// the original A marked, rank = pivot count, nullity = n − rank.
//
// Scenes carry a `phase` field (intro | pivot | swap | eliminate
// | skip | done) so the explanations hook and the diagrams module
// can find them without assuming a fixed run length.
//
// explanations prop (optional): { intro, pivot, swap, eliminate,
// skip, done } — raw HTML appended to matching scene captions.
//
// Standalone file: imports the core (ScenePlayer, formatNumber),
// never modifies it. buildScenes and PRESETS are exported for
// the frozen-state diagrams.
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

const RANK_INFO =
  'The rank of a matrix is the number of linearly independent rows, which ' +
  'equals the number of linearly independent columns. Row reduction finds ' +
  'it: reduce to echelon form and count the pivots. Each pivot marks a ' +
  'column that is not a combination of the columns before it. Row operations ' +
  'never change the rank, so the count at the end is the rank of the ' +
  'original matrix. Rank is at most the smaller of the two dimensions.';

const RK_CSS = `
  .rk-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .rk-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .rk-pill:hover { border-color: #94a3b8; }
  .rk-pill-active:hover { border-color: #2563eb; }

  .rk-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
    -moz-appearance: textfield;
  }
  .rk-cell-input::-webkit-outer-spin-button,
  .rk-cell-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  .rk-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .rk-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .rk-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .rk-info:hover, .rk-info:focus { background: #bfdbfe; outline: none; }

  .rk-info .rk-tip {
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
  .rk-info .rk-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .rk-info:hover .rk-tip, .rk-info:focus .rk-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets — each chosen to exercise a different branch.
// -----------------------------------------------------------
export const PRESETS = {
  deficient: {
    label: 'Rank 2 of 3',
    note: 'one row is a multiple of another',
    values: [[1, 2, 3], [2, 4, 6], [1, 0, 1]]
  },
  full: {
    label: 'Full rank',
    note: '3×3 with three pivots',
    values: [[2, 1, 1], [1, 3, 2], [1, 0, 0]]
  },
  rank1: {
    label: 'Rank 1',
    note: 'every row a multiple of the first',
    values: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
  },
  wide: {
    label: 'Wide 2×4',
    note: 'rank capped by the row count',
    values: [[1, 2, 0, 1], [2, 4, 1, 0]]
  },
  tall: {
    label: 'Tall 4×2',
    note: 'rank capped by the column count',
    values: [[1, 1], [2, 2], [0, 1], [1, 0]]
  },
  zero: {
    label: 'Zero matrix',
    note: 'rank 0',
    values: [[0, 0, 0], [0, 0, 0]]
  }
};

export const DEFAULT_PRESET = 'deficient';

const EPS = 1e-9;
const SLOT_CELL = 64;

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
  const maxDim = Math.max(m, n);
  if (maxDim <= 3) return { cellPx: 54, font: '16px' };
  if (maxDim === 4) return { cellPx: 48, font: '14px' };
  return { cellPx: 42, font: '13px' };
}

function numOverrides(M, font) {
  const over = {};
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      const text = fmt(M[i][j]);
      const isFrac = text.includes('/');
      over[`${i},${j}`] = {
        display: text,
        fontStyle: 'normal',
        style: { fontSize: isFrac ? `calc(${font} * 0.8)` : font }
      };
    }
  }
  return over;
}

function rowLabel(i) {
  return `R<sub>${i + 1}</sub>`;
}

function factorHtml(f) {
  // −(3/2)·R₁ reads better than −3/2·R₁
  const text = fmt(Math.abs(f));
  return text.includes('/') ? `(${text})` : text;
}

function listCols(cols) {
  return cols.map((c) => c + 1).join(', ');
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values) {
  const A = clone(values);
  const m = A.length;
  const n = A[0].length;
  const { cellPx, font } = sizingFor(m, n);

  const matA = () => ({
    symbol: 'a', rows: m, cols: n, label: 'A',
    cellSize: cellPx,
    cellOverrides: numOverrides(A, font)
  });
  const matR = (M) => ({
    symbol: 'r', rows: m, cols: n, label: 'R',
    cellSize: cellPx,
    cellOverrides: numOverrides(M, font)
  });
  const rankSlot = (k) => ({
    symbol: 'k', rows: 1, cols: 1, label: 'rank A',
    showDimensions: false,
    cellSize: SLOT_CELL,
    cellOverrides: { '0,0': { display: String(k), fontStyle: 'normal', style: { fontSize: '20px', fontWeight: 700 } } }
  });

  const layout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'R' }
  ];
  const layoutDone = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'R' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'K' }
  ];

  const scenes = [];
  const R = clone(A);
  let r = 0;                 // current row
  const pivotCols = [];
  const pivotCells = [];

  scenes.push({
    phase: 'intro',
    title: `Rank of a ${m}×${n} matrix`,
    formula:
      'Row reduce A to echelon form and <strong>count the pivots</strong>. Work column by column: ' +
      'find a non-zero entry at or below the current row (swapping rows if it sits lower), mark it ' +
      'as a pivot, and clear everything beneath it. A column with no such entry is skipped and ' +
      'contributes nothing. Row operations never change the rank, so the pivot count at the end ' +
      `is rank A. It cannot exceed min(${m}, ${n}) = ${Math.min(m, n)}.`,
    matrices: { A: matA(), R: matR(R) },
    layout,
    highlights: {}
  });

  for (let j = 0; j < n && r < m; j++) {
    // find a pivot candidate
    let p = -1;
    for (let i = r; i < m; i++) {
      if (Math.abs(R[i][j]) > EPS) { p = i; break; }
    }

    if (p === -1) {
      const cells = [];
      for (let i = r; i < m; i++) cells.push([i, j, 'muted']);
      scenes.push({
        phase: 'skip',
        title: `Column ${j + 1}: no pivot`,
        formula:
          `Every entry of column ${j + 1} from row ${r + 1} down is 0, so there is nothing to pivot on. ` +
          'The column is skipped and the pivot count stays at ' + pivotCols.length + '. ' +
          `Column ${j + 1} of A is a combination of the pivot columns before it` +
          (pivotCols.length === 0 ? ' — here, of nothing, so it is the zero column.' : '.'),
        matrices: { A: matA(), R: matR(R) },
        layout,
        highlights: { R: { cells } }
      });
      continue;
    }

    if (p !== r) {
      const tmp = R[p]; R[p] = R[r]; R[r] = tmp;
      scenes.push({
        phase: 'swap',
        title: `Swap ${rowLabel(r)} ↔ ${rowLabel(p)}`,
        formula:
          `Row ${r + 1} has a 0 in column ${j + 1} but row ${p + 1} does not. Swapping the two rows ` +
          `brings the non-zero entry ${fmt(R[r][j])} up to row ${r + 1}, where the next pivot belongs. ` +
          'A swap reorders the rows and changes nothing about their span, so the rank is unaffected.',
        matrices: { A: matA(), R: matR(R) },
        layout,
        highlights: { R: { rows: [[r, 'primary'], [p, 'secondary']] } }
      });
    }

    pivotCols.push(j);
    pivotCells.push([r, j]);
    const count = pivotCols.length;
    scenes.push({
      phase: 'pivot',
      title: `Pivot ${count}: ${fmt(R[r][j])} at row ${r + 1}, column ${j + 1}`,
      formula:
        `The entry ${fmt(R[r][j])} at row ${r + 1}, column ${j + 1} is non-zero, so it is pivot number ${count}. ` +
        `Column ${j + 1} is a pivot column: it is not a combination of the columns before it. ` +
        `Pivot columns so far: ${listCols(pivotCols)}.`,
      matrices: { A: matA(), R: matR(R) },
      layout,
      highlights: { R: { cells: [[r, j, 'accent']], rows: [[r, 'primary']] } }
    });

    for (let k = r + 1; k < m; k++) {
      if (Math.abs(R[k][j]) <= EPS) continue;
      const f = R[k][j] / R[r][j];
      const before = fmt(R[k][j]);
      for (let c = 0; c < n; c++) {
        R[k][c] = R[k][c] - f * R[r][c];
        if (Math.abs(R[k][c]) < EPS) R[k][c] = 0;
      }
      const sign = f < 0 ? '+' : '−';
      scenes.push({
        phase: 'eliminate',
        title: `${rowLabel(k)} ← ${rowLabel(k)} ${sign} ${factorHtml(f)}·${rowLabel(r)}`,
        formula:
          `Row ${k + 1} has ${before} under the pivot. Subtract ${factorHtml(f)} times the pivot row ` +
          `(the ratio ${before} / ${fmt(R[r][j])}) from it, so that its entry in column ${j + 1} becomes 0. ` +
          'Adding a multiple of one row to another leaves the span of the rows unchanged, so the rank is unaffected.',
        matrices: { A: matA(), R: matR(R) },
        layout,
        highlights: { R: { cells: [[k, j, 'accent']], rows: [[r, 'primary'], [k, 'secondary']] } }
      });
    }

    r++;
  }

  const rank = pivotCols.length;
  const nullity = n - rank;
  const free = [];
  for (let j = 0; j < n; j++) if (!pivotCols.includes(j)) free.push(j);
  const pivotHl = pivotCells.map(([i, j]) => [i, j, 'accent']);
  const colHl = pivotCols.map((j) => [j, 'col']);

  scenes.push({
    phase: 'done',
    title: `rank A = ${rank}`,
    formula:
      `R is in row echelon form with <strong>${rank} pivot${rank === 1 ? '' : 's'}</strong>, so rank A = ${rank}` +
      (rank === Math.min(m, n) ? ` — full rank, the most a ${m}×${n} matrix can have.` : `, less than min(${m}, ${n}) = ${Math.min(m, n)}: the matrix is rank-deficient.`) +
      (rank > 0 ? ` The pivot columns, ${listCols(pivotCols)}, form a basis of the column space of A;` : ' The column space is just the zero vector;') +
      (free.length > 0 ? ` column${free.length === 1 ? '' : 's'} ${listCols(free)} ${free.length === 1 ? 'is' : 'are'} free.` : ' there are no free columns.') +
      ` Nullity = ${n} − ${rank} = ${nullity}, the dimension of the null space, and rank + nullity = ${n}, the number of columns.`,
    matrices: { A: matA(), R: matR(R), K: rankSlot(rank) },
    layout: layoutDone,
    highlights: {
      A: { cols: colHl },
      R: { cells: pivotHl },
      K: { cells: [[0, 0, 'accent']] }
    }
  });

  return scenes;
}

// -----------------------------------------------------------
// Random matrix: small integers, with a 50% chance that one row
// is a multiple of another so rank deficiency shows up often.
// -----------------------------------------------------------
export function randomMatrix(m, n) {
  const rnd = () => Math.floor(Math.random() * 7) - 3;
  const M = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(rnd());
    M.push(row);
  }
  if (m >= 2 && Math.random() < 0.5) {
    const a = Math.floor(Math.random() * m);
    let b = Math.floor(Math.random() * m);
    if (b === a) b = (a + 1) % m;
    const ks = [-2, -1, 1, 2];
    const k = ks[Math.floor(Math.random() * ks.length)];
    for (let j = 0; j < n; j++) M[b][j] = k * M[a][j];
  }
  return M;
}

function resize(M, m, n) {
  const out = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(M[i] && M[i][j] !== undefined ? M[i][j] : 0);
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
      className="rk-info"
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
      <span className="rk-tip">{tip}</span>
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
          className="rk-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="rk-stepper-btn"
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
      className={active ? 'rk-pill rk-pill-active' : 'rk-pill'}
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
export default function RankWrapper({
  defaultPreset = DEFAULT_PRESET,
  rowRange = [1, 2, 3, 4, 5],
  colRange = [1, 2, 3, 4, 5],
  explanations = null,
  title = 'Matrix Rank',
  subtitle = 'Row reduce to echelon form, one operation at a time, and count the pivots — with an editable matrix, presets and a shuffle.',
  defaultSpeed = 1500
}) {
  const initial = PRESETS[defaultPreset] ? PRESETS[defaultPreset].values : PRESETS[DEFAULT_PRESET].values;
  const [values, setValues] = useState(() => clone(initial));
  const [preset, setPreset] = useState(PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET);
  // Raw text per cell while the user is typing, so "-" or an emptied field
  // is not snapped to 0 mid-edit. Cleared whenever the matrix is replaced.
  const [drafts, setDrafts] = useState({});

  const m = values.length;
  const n = values[0].length;

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
    if (Number.isFinite(num)) {
      setValues((v) => {
        const next = clone(v);
        next[i][j] = num;
        return next;
      });
    } else if (raw === '' || raw === '-') {
      setValues((v) => {
        const next = clone(v);
        next[i][j] = 0;
        return next;
      });
    }
  };

  const commitCell = (i, j) => {
    setDrafts((d) => {
      const next = { ...d };
      delete next[`${i},${j}`];
      return next;
    });
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
      <style dangerouslySetInnerHTML={{ __html: RK_CSS }} />

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
          <FieldLabel info={RANK_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '420px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill
                key={key}
                active={preset === key}
                onClick={() => applyPreset(key)}
                title={PRESETS[key].note}
              >
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Size</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={m} onChange={setRows} min={rowRange[0]} max={rowRange[rowRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <Stepper value={n} onChange={setCols} min={colRange[0]} max={colRange[colRange.length - 1]} />
            <button className="rk-btn" onClick={shuffle} style={{ marginLeft: '10px' }}>
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
                    className="rk-cell-input"
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
