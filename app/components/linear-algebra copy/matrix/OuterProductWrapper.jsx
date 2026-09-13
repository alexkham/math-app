'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// OuterProductWrapper v1
// Visualizes the outer product of a column u (length m) and a
// row vᵀ (length n): the m×n matrix
//
//   (u vᵀ)_{i,j} = u_i · v_j
//
// Unlike the inner product there is no matching-length rule —
// m and n are independent, and the result is a matrix rather
// than a number. Three ways to build it, chosen with a pill:
//
//   - cell   : one entry per scene, row-major, u_i with v_j
//   - row    : one row per scene — row i is u_i · vᵀ, the whole
//              row vector scaled by one entry of u
//   - column : one column per scene — column j is v_j · u, the
//              whole column vector scaled by one entry of v
//
// The row and column views are the point: every row is a
// multiple of vᵀ and every column a multiple of u, which is
// what makes the outer product a rank-1 matrix.
//
// MODE prop:
//   - mode='both'   (default) → method pills shown
//   - mode='cell' | 'row' | 'column' → locked, no pills
//
// explanations prop (optional): { intro, cell, row, column, done }
// — raw HTML appended to the caption of the matching scenes.
//
// Standalone file: imports the core, never modifies it. The scene
// builder and phase helper are exported for the frozen-state
// diagrams.
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

const subStyle = {
  fontSize: '0.65em',
  verticalAlign: 'sub',
  lineHeight: 0,
  fontStyle: 'italic'
};

const OUTER_INFO =
  'The outer product of a column vector u with m entries and a row vector ' +
  'vᵀ with n entries is the m×n matrix whose (i, j) entry is u_i·v_j. It is ' +
  'the opposite of the inner product: no matching-length rule, and a whole ' +
  'matrix out instead of a single number. Every row of the result is a ' +
  'multiple of vᵀ and every column a multiple of u, so the matrix has rank 1.';

const OP_CSS = `
  .op-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .op-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .op-pill:hover { border-color: #94a3b8; }
  .op-pill-active:hover { border-color: #2563eb; }

  .op-info:hover, .op-info:focus { background: #bfdbfe; outline: none; }

  .op-info .op-tip {
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
  .op-info .op-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .op-info:hover .op-tip, .op-info:focus .op-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Sizing — the result holds "u_i v_j" per cell, so its cell
// shrinks with the larger dimension.
// -----------------------------------------------------------
function sizingFor(m, n) {
  const maxDim = Math.max(m, n);
  if (maxDim <= 2)       return { vecCell: 60, vecFont: '16px', resCell: 60, resFont: '14px' };
  else if (maxDim === 3) return { vecCell: 56, vecFont: '15px', resCell: 56, resFont: '13px' };
  else if (maxDim === 4) return { vecCell: 50, vecFont: '13px', resCell: 50, resFont: '11.5px' };
  else                   return { vecCell: 44, vecFont: '12px', resCell: 44, resFont: '10px' };
}

const UPRIGHT = { fontStyle: 'normal' };

// -----------------------------------------------------------
// Cell display helpers
// -----------------------------------------------------------
function sub(t) {
  return <span style={subStyle}>{t}</span>;
}

function entryCell(sym, j, fontSize) {
  return { display: <>{sym}{sub(j + 1)}</>, style: { fontSize } };
}

function productCell(i, j, fontSize) {
  return {
    display: <>u{sub(i + 1)}<span style={{ ...UPRIGHT, margin: '0 1px' }}>&middot;</span>v{sub(j + 1)}</>,
    style: { fontSize }
  };
}

function columnOverrides(m, fontSize) {
  const over = {};
  for (let i = 0; i < m; i++) over[`${i},0`] = entryCell('u', i, fontSize);
  return over;
}

function rowOverrides(n, fontSize) {
  const over = {};
  for (let j = 0; j < n; j++) over[`0,${j}`] = entryCell('v', j, fontSize);
  return over;
}

// filled(i, j) → boolean decides which result cells show their product
function resultOverrides(m, n, fontSize, filled) {
  const over = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      over[`${i},${j}`] = filled(i, j) ? productCell(i, j, fontSize) : { empty: true };
    }
  }
  return over;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(m, n, method = 'cell') {
  const { vecCell, vecFont, resCell, resFont } = sizingFor(m, n);

  const U = {
    symbol: 'u', rows: m, cols: 1, label: 'u',
    cellSize: vecCell,
    cellOverrides: columnOverrides(m, vecFont)
  };
  const V = {
    symbol: 'v', rows: 1, cols: n, label: 'v',
    transpose: false,
    cellSize: vecCell,
    cellOverrides: rowOverrides(n, vecFont)
  };
  // label carries the transpose mark by hand: MatrixRenderer only draws
  // the superscript T when transpose=true, which would also flip the grid.
  const VT = { ...V, label: 'vᵀ' };

  const M = (filled) => ({
    symbol: 'm', rows: m, cols: n, label: 'u vᵀ',
    cellSize: resCell,
    cellOverrides: resultOverrides(m, n, resFont, filled)
  });

  const layout = [
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'M' }
  ];

  const scenes = [];

  // Intro
  scenes.push({
    title: 'Outer product u vᵀ',
    formula:
      `u is a column with ${m} entr${m === 1 ? 'y' : 'ies'} and vᵀ a row with ${n}. ` +
      `Their outer product is the ${m}×${n} matrix whose entry at row i, column j is ` +
      '<strong>u<sub>i</sub> · v<sub>j</sub></strong>. There is no matching-length rule — ' +
      'every entry of u meets every entry of v, so the result has a row for each u<sub>i</sub> ' +
      'and a column for each v<sub>j</sub>.',
    matrices: { U, V: VT, M: M(() => false) },
    layout,
    highlights: {}
  });

  if (method === 'row') {
    // One row per scene: row i = u_i · vᵀ
    for (let i = 0; i < m; i++) {
      const vCells = [];
      for (let j = 0; j < n; j++) vCells.push([0, j, 'secondary']);
      const overlays = [];
      for (let j = 0; j < n; j++) {
        overlays.push({
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: 0, col: j },
          to: { matrix: 'M', row: i, col: j },
          style: 'secondary', curveOffset: 26 + 4 * j, curveDirection: 'down'
        });
      }
      overlays.push({
        type: 'cell-arrow-curve',
        from: { matrix: 'U', row: i, col: 0 },
        to: { matrix: 'M', row: i, col: 0 },
        style: 'primary', curveOffset: 40, curveDirection: 'up'
      });
      scenes.push({
        title: `Row ${i + 1}: u<sub>${i + 1}</sub> · vᵀ`,
        formula:
          `Take the single entry u<sub>${i + 1}</sub> and scale the whole row vᵀ by it. ` +
          `Row ${i + 1} of the result is (u<sub>${i + 1}</sub>v<sub>1</sub>, …, ` +
          `u<sub>${i + 1}</sub>v<sub>${n}</sub>) — a copy of vᵀ, stretched by u<sub>${i + 1}</sub>.`,
        matrices: { U, V: VT, M: M((r) => r <= i) },
        layout,
        highlights: {
          U: { cells: [[i, 0, 'primary']] },
          V: { cells: vCells },
          M: { rows: [[i, 'accent']] }
        },
        overlays
      });
    }
  } else if (method === 'column') {
    // One column per scene: column j = v_j · u
    for (let j = 0; j < n; j++) {
      const uCells = [];
      for (let i = 0; i < m; i++) uCells.push([i, 0, 'primary']);
      const overlays = [];
      for (let i = 0; i < m; i++) {
        overlays.push({
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: i, col: 0 },
          to: { matrix: 'M', row: i, col: j },
          style: 'primary', curveOffset: 30 + 4 * i, curveDirection: 'up'
        });
      }
      overlays.push({
        type: 'cell-arrow-curve',
        from: { matrix: 'V', row: 0, col: j },
        to: { matrix: 'M', row: 0, col: j },
        style: 'secondary', curveOffset: 30, curveDirection: 'down'
      });
      scenes.push({
        title: `Column ${j + 1}: v<sub>${j + 1}</sub> · u`,
        formula:
          `Take the single entry v<sub>${j + 1}</sub> and scale the whole column u by it. ` +
          `Column ${j + 1} of the result is (u<sub>1</sub>v<sub>${j + 1}</sub>, …, ` +
          `u<sub>${m}</sub>v<sub>${j + 1}</sub>)ᵀ — a copy of u, stretched by v<sub>${j + 1}</sub>.`,
        matrices: { U, V: VT, M: M((r, c) => c <= j) },
        layout,
        highlights: {
          U: { cells: uCells },
          V: { cells: [[0, j, 'secondary']] },
          M: { cols: [[j, 'accent']] }
        },
        overlays
      });
    }
  } else {
    // One cell per scene, row-major
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const idx = i * n + j;
        scenes.push({
          title: `Cell (${i + 1}, ${j + 1}): u<sub>${i + 1}</sub> · v<sub>${j + 1}</sub>`,
          formula:
            `Multiply entry ${i + 1} of u by entry ${j + 1} of v and write the product at ` +
            `row ${i + 1}, column ${j + 1}. The row index comes from u, the column index from v.`,
          matrices: { U, V: VT, M: M((r, c) => r * n + c <= idx) },
          layout,
          highlights: {
            U: { cells: [[i, 0, 'primary']] },
            V: { cells: [[0, j, 'secondary']] },
            M: { cells: [[i, j, 'accent']] }
          },
          overlays: [
            {
              type: 'cell-arrow-curve',
              from: { matrix: 'U', row: i, col: 0 },
              to: { matrix: 'M', row: i, col: j },
              style: 'primary', curveOffset: 36, curveDirection: 'up'
            },
            {
              type: 'cell-arrow-curve',
              from: { matrix: 'V', row: 0, col: j },
              to: { matrix: 'M', row: i, col: j },
              style: 'secondary', curveOffset: 30, curveDirection: 'down'
            }
          ]
        });
      }
    }
  }

  // Done
  scenes.push({
    title: 'Done',
    formula:
      'u vᵀ is filled. Every row is a multiple of vᵀ and every column a multiple of u, so ' +
      'the whole matrix is determined by one direction on each side: it has ' +
      '<strong>rank 1</strong>. Compare the inner product vᵀu, which pairs the same entries ' +
      'the other way round and collapses to a single number.',
    matrices: { U, V: VT, M: M(() => true) },
    layout,
    highlights: {}
  });

  return scenes;
}

// Phase key for scene i in a run built with (m, n, method).
export function phaseKeyFor(i, m, n, method = 'cell') {
  const steps = method === 'row' ? m : method === 'column' ? n : m * n;
  if (i === 0) return 'intro';
  if (i === steps + 1) return 'done';
  return method;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="op-info"
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
      <span className="op-tip">{tip}</span>
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
          className="op-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="op-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >&#9660;</button>
      </span>
    </span>
  );
}

function Pill({ active, onClick, children }) {
  return (
    <button
      className={active ? 'op-pill op-pill-active' : 'op-pill'}
      onClick={onClick}
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
export default function OuterProductWrapper({
  mode = 'both',
  defaultMethod = 'cell',
  defaultM = 3,
  defaultN = 3,
  dimensionRange = [1, 2, 3, 4, 5],
  explanations = null,
  title = 'Outer Product',
  subtitle = 'Symbolic visualization of u vᵀ — every entry of u against every entry of v — built cell by cell, row by row, or column by column.',
  defaultSpeed = 1200
}) {
  const locked = mode === 'cell' || mode === 'row' || mode === 'column';

  const [methodState, setMethodState] = useState(defaultMethod);
  const method = locked ? mode : methodState;

  const [m, setM] = useState(defaultM);
  const [n, setN] = useState(defaultN);
  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const scenes = useMemo(() => {
    const built = buildScenes(m, n, method);
    if (!explanations) return built;
    return built.map((sc, i) => {
      const extra = explanations[phaseKeyFor(i, m, n, method)];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [m, n, method, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: OP_CSS }} />

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
        {!locked && (
          <div>
            <FieldLabel info={OUTER_INFO}>Method</FieldLabel>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Pill active={method === 'cell'} onClick={() => setMethodState('cell')}>
                Cell by cell &nbsp;
                <span style={mathInlineStyle}>u<sub>i</sub> &middot; v<sub>j</sub></span>
              </Pill>
              <Pill active={method === 'row'} onClick={() => setMethodState('row')}>
                Row by row &nbsp;
                <span style={mathInlineStyle}>u<sub>i</sub> &middot; v<sup>T</sup></span>
              </Pill>
              <Pill active={method === 'column'} onClick={() => setMethodState('column')}>
                Column by column &nbsp;
                <span style={mathInlineStyle}>v<sub>j</sub> &middot; u</span>
              </Pill>
            </div>
          </div>
        )}

        <div>
          <FieldLabel info={locked ? OUTER_INFO : null}>
            Lengths (independent)
          </FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>u</span>
            <Stepper value={m} onChange={setM} min={min} max={max} />
            <span style={{ color: '#94a3b8', margin: '0 6px' }}>&nbsp;</span>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>v</span>
            <Stepper value={n} onChange={setN} min={min} max={max} />
            <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '8px' }}>
              result {m}&times;{n}
            </span>
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
