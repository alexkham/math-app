'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer, DEFAULT_HIGHLIGHTS } from './MatrixCore';

// ===========================================================
// TransposeWrapper
// Single matrix operation: A → A^T.
// Four strategies (all enabled):
//   - cell-by-cell
//   - row-as-column
//   - column-as-row
//   - diagonal-reflection
// No scenario/order axis — the operation is fixed.
// ===========================================================

// -----------------------------------------------------------
// Custom highlight palette: extends defaults with diagonal
// strategy's above/below/diag colors.
// -----------------------------------------------------------
const TRANSPOSE_HIGHLIGHTS = {
  ...DEFAULT_HIGHLIGHTS,
  above: { bg: '#fef3c7', border: '#f59e0b', borderWidth: 2 },
  below: { bg: '#ede9fe', border: '#8b5cf6', borderWidth: 2 },
  diag:  { bg: '#f1f5f9', border: '#94a3b8', borderWidth: 2 }
};

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

// -----------------------------------------------------------
// Shared scene helpers
// A is rendered with (rows, cols) and transpose:false.
// A^T is rendered with (rows, cols) and transpose:true — the
// renderer swaps display dims to (cols, rows) and labels each
// display cell (i,j) as a_{j+1,i+1} (transposed indices).
//
// cellOverrides for A^T are keyed by *original A coords* —
// an override at "i,j" controls A^T display cell (j, i).
//
// highlights for A^T use *display coords*. To highlight the
// A^T cell that holds a_{i,j}, target display (j, i).
// -----------------------------------------------------------
const baseLayout = [
  { type: 'matrix', ref: 'A' },
  { type: 'operator', symbol: '->' },
  { type: 'matrix', ref: 'AT' }
];

function matrices(rows, cols, aOv, atOv) {
  return {
    A:  { symbol: 'a', rows, cols, label: 'A', cellOverrides: aOv || {} },
    AT: { symbol: 'a', rows, cols, label: 'A', transpose: true, cellOverrides: atOv || {} }
  };
}

// Mark every A^T cell as empty (used for intro scenes).
function atAllEmpty(rows, cols) {
  const out = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      out[`${i},${j}`] = { empty: true };
    }
  }
  return out;
}

// A^T cellOverrides where A cells up to (and including) upToIdx
// in row-major order are filled; rest empty.
function atEmptyByCellIdx(rows, cols, upToIdx) {
  const out = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      if (idx > upToIdx) out[`${i},${j}`] = { empty: true };
    }
  }
  return out;
}

// A^T cellOverrides where A rows up to upToRow are filled.
function atEmptyByRow(rows, cols, upToRow) {
  const out = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i > upToRow) out[`${i},${j}`] = { empty: true };
    }
  }
  return out;
}

// A^T cellOverrides where A cols up to upToCol are filled.
function atEmptyByCol(rows, cols, upToCol) {
  const out = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j > upToCol) out[`${i},${j}`] = { empty: true };
    }
  }
  return out;
}

// -----------------------------------------------------------
// Strategy 1: cell-by-cell
// Sweep A row-major; each step places one a_{i,j} into A^T at
// display position (j, i). Curved arrow from A cell to A^T cell.
// -----------------------------------------------------------
function buildCellByCellScenes(rows, cols) {
  const total = rows * cols;
  const scenes = [];

  scenes.push({
    title: 'Cell-by-cell — strategy overview',
    formula:
      `Sweep A in row-major order. For each entry a<sub>i,j</sub>, place it ` +
      `at position [j, i] of A<sup>T</sup>. ` +
      `<strong>${total} steps</strong> total.`,
    matrices: matrices(rows, cols, {}, atAllEmpty(rows, cols)),
    layout: baseLayout,
    highlights: {}
  });

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      scenes.push({
        title:
          `Step ${idx + 1}: a<sub>${i + 1},${j + 1}</sub> → ` +
          `position [${j + 1}, ${i + 1}] of A<sup>T</sup>`,
        formula:
          `Take a<sub>${i + 1},${j + 1}</sub> from row ${i + 1}, column ${j + 1} of A. ` +
          `Write it into A<sup>T</sup> at row ${j + 1}, column ${i + 1}.`,
        matrices: matrices(rows, cols, {}, atEmptyByCellIdx(rows, cols, idx)),
        layout: baseLayout,
        highlights: {
          A:  { cells: [[i, j, 'primary']] },
          AT: { cells: [[j, i, 'accent']] }
        },
        overlays: [{
          type: 'cell-arrow-curve',
          from: { matrix: 'A', row: i, col: j },
          to:   { matrix: 'AT', row: j, col: i },
          style: 'primary',
          curveOffset: 40
        }]
      });
    }
  }

  scenes.push({
    title: 'Done',
    formula:
      `A<sup>T</sup> is filled. Notice that sweeping A row-by-row caused A<sup>T</sup> ` +
      `to fill column-by-column — a natural consequence of the i↔j swap.`,
    matrices: matrices(rows, cols, {}, {}),
    layout: baseLayout,
    highlights: {}
  });

  return scenes;
}

// -----------------------------------------------------------
// Strategy 2: row-as-column
// Each step: row i of A becomes column i of A^T. Multiple
// curved arrows fanning out, alternating up/down for clarity.
// -----------------------------------------------------------
function buildRowAsColumnScenes(rows, cols) {
  const scenes = [];

  scenes.push({
    title: 'Row-as-column — strategy overview',
    formula:
      `Each row of A becomes the corresponding column of A<sup>T</sup>. ` +
      `The whole row moves in one step. <strong>${rows} steps</strong> total.`,
    matrices: matrices(rows, cols, {}, atAllEmpty(rows, cols)),
    layout: baseLayout,
    highlights: {}
  });

  for (let i = 0; i < rows; i++) {
    const overlays = [];
    for (let k = 0; k < cols; k++) {
      overlays.push({
        type: 'cell-arrow-curve',
        from: { matrix: 'A',  row: i, col: k },
        to:   { matrix: 'AT', row: k, col: i },
        style: 'primary',
        curveOffset: 40 + Math.floor(k / 2) * 30,
        curveDirection: k % 2 === 0 ? 'up' : 'down'
      });
    }

    scenes.push({
      title: `Step ${i + 1}: row ${i + 1} of A → column ${i + 1} of A<sup>T</sup>`,
      formula:
        `Take all ${cols} entries of row ${i + 1} of A: ` +
        `a<sub>${i + 1},1</sub>, a<sub>${i + 1},2</sub>, …, a<sub>${i + 1},${cols}</sub>. ` +
        `These become column ${i + 1} of A<sup>T</sup> — in the same order, ` +
        `read top-to-bottom instead of left-to-right.`,
      matrices: matrices(rows, cols, {}, atEmptyByRow(rows, cols, i)),
      layout: baseLayout,
      highlights: {
        A:  { rows: [[i, 'primary']] },
        AT: { cols: [[i, 'accent']]  }
      },
      overlays
    });
  }

  scenes.push({
    title: 'Done',
    formula:
      `All rows of A have become columns of A<sup>T</sup>. Row 1 of A ↔ column 1 of A<sup>T</sup>, ` +
      `row 2 ↔ column 2, and so on.`,
    matrices: matrices(rows, cols, {}, {}),
    layout: baseLayout,
    highlights: {}
  });

  return scenes;
}

// -----------------------------------------------------------
// Strategy 3: column-as-row
// Symmetric to strategy 2. A^T fills row-by-row.
// -----------------------------------------------------------
function buildColumnAsRowScenes(rows, cols) {
  const scenes = [];

  scenes.push({
    title: 'Column-as-row — strategy overview',
    formula:
      `Each column of A becomes the corresponding row of A<sup>T</sup>. ` +
      `A<sup>T</sup> fills top-down. <strong>${cols} steps</strong> total.`,
    matrices: matrices(rows, cols, {}, atAllEmpty(rows, cols)),
    layout: baseLayout,
    highlights: {}
  });

  for (let j = 0; j < cols; j++) {
    const overlays = [];
    for (let k = 0; k < rows; k++) {
      overlays.push({
        type: 'cell-arrow-curve',
        from: { matrix: 'A',  row: k, col: j },
        to:   { matrix: 'AT', row: j, col: k },
        style: 'primary',
        curveOffset: 40 + Math.floor(k / 2) * 30,
        curveDirection: k % 2 === 0 ? 'up' : 'down'
      });
    }

    scenes.push({
      title: `Step ${j + 1}: column ${j + 1} of A → row ${j + 1} of A<sup>T</sup>`,
      formula:
        `Take all ${rows} entries of column ${j + 1} of A: ` +
        `a<sub>1,${j + 1}</sub>, a<sub>2,${j + 1}</sub>, …, a<sub>${rows},${j + 1}</sub>. ` +
        `These become row ${j + 1} of A<sup>T</sup> — same order, ` +
        `read left-to-right instead of top-to-bottom.`,
      matrices: matrices(rows, cols, {}, atEmptyByCol(rows, cols, j)),
      layout: baseLayout,
      highlights: {
        A:  { cols: [[j, 'primary']] },
        AT: { rows: [[j, 'accent']]  }
      },
      overlays
    });
  }

  scenes.push({
    title: 'Done',
    formula:
      `All columns of A have become rows of A<sup>T</sup>. Column 1 ↔ row 1, column 2 ↔ row 2, etc.`,
    matrices: matrices(rows, cols, {}, {}),
    layout: baseLayout,
    highlights: {}
  });

  return scenes;
}

// -----------------------------------------------------------
// Strategy 4: diagonal reflection
// 3 steps. For square A, the diagonal is real. For rectangular A,
// it's an abstract reflection axis through the min(m,n) square
// subregion — formulas explain this explicitly.
// -----------------------------------------------------------
function buildDiagonalScenes(rows, cols) {
  const isSquare = rows === cols;
  const k = Math.min(rows, cols);

  // Color every cell of A by its side of the diagonal.
  const aCells = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === j)      aCells.push([i, j, 'diag']);
      else if (j > i)   aCells.push([i, j, 'above']);
      else              aCells.push([i, j, 'below']);
    }
  }

  // For A^T, color each *display* cell (i,j) by the side-of-diagonal
  // of the A cell it holds (which is A[j, i]). Color follows data.
  const atCells = [];
  for (let i = 0; i < cols; i++) {           // displayRows of A^T = cols
    for (let j = 0; j < rows; j++) {         // displayCols of A^T = rows
      const ai = j, aj = i;
      if (ai === aj)      atCells.push([i, j, 'diag']);
      else if (aj > ai)   atCells.push([i, j, 'above']);
      else                atCells.push([i, j, 'below']);
    }
  }

  const aHighlights  = { cells: aCells };
  const atHighlights = { cells: atCells };

  const axisOverlayBoth = [
    { type: 'diagonal-axis', matrix: 'A',  dashed: true, style: 'primary' },
    { type: 'diagonal-axis', matrix: 'AT', dashed: true, style: 'primary' }
  ];
  const axisOverlayAOnly = [
    { type: 'diagonal-axis', matrix: 'A', dashed: true, style: 'primary' }
  ];

  const scenes = [];

  // ---- Step 1: setup (A colored + axis, A^T empty) ----
  scenes.push({
    title: isSquare
      ? 'Diagonal reflection — the geometric view'
      : 'Diagonal-like reflection — for non-square A, the axis is an abstraction',
    formula: isSquare
      ? `Transpose is a single geometric operation: <strong>reflection across the main diagonal</strong>. ` +
        `Cells on the diagonal (where i = j) stay put. Every other cell swaps with its mirror partner: ` +
        `a<sub>i,j</sub> ↔ a<sub>j,i</sub>.`
      : `For a non-square matrix, <strong>a true main diagonal doesn't exist</strong> in the strict sense. ` +
        `The cells where i = j only extend through the ${k}×${k} square subregion in the corner. ` +
        `We draw a <em>diagonal-like reflection axis</em> across that subregion — an abstract line ` +
        `that plays the same role the real diagonal plays for square matrices. ` +
        `The rule is identical: a<sub>i,j</sub> ↔ a<sub>j,i</sub>, ` +
        `and it applies to <strong>every</strong> cell — including those in the overhang, ` +
        `even though they have no diagonal anchor.`,
    matrices: matrices(rows, cols, {}, atAllEmpty(rows, cols)),
    layout: baseLayout,
    highlights: { A: aHighlights },
    overlays: axisOverlayAOnly
  });

  // ---- Step 2: the reflection (A^T appears, both colored) ----
  scenes.push({
    title: isSquare
      ? 'A<sup>T</sup> = A reflected across its main diagonal'
      : 'A<sup>T</sup> = A reflected across the diagonal-like axis',
    formula: isSquare
      ? `A<sup>T</sup> emerges as the mirror image of A. Cells of the same color hold the same data, ` +
        `just at the swapped position.`
      : `A<sup>T</sup> emerges as the mirror image of A across the abstract axis. ` +
        `The overhang cells follow the same i↔j swap as every other cell, ` +
        `landing on the opposite side of the axis in A<sup>T</sup>.`,
    matrices: matrices(rows, cols, {}, {}),
    layout: baseLayout,
    highlights: { A: aHighlights, AT: atHighlights },
    overlays: axisOverlayBoth
  });

  // ---- Step 3: outro / summary ----
  scenes.push({
    title: 'Done',
    formula: isSquare
      ? `Transpose as reflection gives a clean geometric view of the operation. ` +
        `A consequence: (A<sup>T</sup>)<sup>T</sup> = A — reflecting twice returns the original.`
      : `Even without a true diagonal, the reflection view extends to rectangular matrices. ` +
        `The axis is an abstraction, but the rule it embodies — a<sub>i,j</sub> ↔ a<sub>j,i</sub> — is exact, ` +
        `and (A<sup>T</sup>)<sup>T</sup> = A still holds.`,
    matrices: matrices(rows, cols, {}, {}),
    layout: baseLayout,
    highlights: { A: aHighlights, AT: atHighlights },
    overlays: axisOverlayBoth
  });

  return scenes;
}

// -----------------------------------------------------------
// Strategy registry
// -----------------------------------------------------------
const STRATEGIES = {
  'cell-by-cell': {
    id: 'cell-by-cell',
    label: 'Cell-by-cell',
    description:
      'Sweep A in row-major order. Each step places one a<sub>i,j</sub> at position [j, i] of A<sup>T</sup>. ' +
      'The definition view — <strong>m × n steps</strong>.',
    enabled: true,
    build: buildCellByCellScenes
  },
  'row-as-column': {
    id: 'row-as-column',
    label: 'Row-as-column',
    description:
      'Each row of A becomes the corresponding column of A<sup>T</sup>. The whole row moves at once. ' +
      '<strong>m steps</strong>.',
    enabled: true,
    build: buildRowAsColumnScenes
  },
  'column-as-row': {
    id: 'column-as-row',
    label: 'Column-as-row',
    description:
      'Each column of A becomes the corresponding row of A<sup>T</sup>. A<sup>T</sup> fills top-down. ' +
      '<strong>n steps</strong>.',
    enabled: true,
    build: buildColumnAsRowScenes
  },
  'diagonal-reflection': {
    id: 'diagonal-reflection',
    label: 'Diagonal reflection',
    description:
      'A single geometric operation — a mirror across the diagonal. For square A, the main diagonal; ' +
      'for rectangular A, a diagonal-like abstract axis. <strong>1 conceptual step</strong>.',
    enabled: true,
    advanced: true,
    build: buildDiagonalScenes
  }
};
const STRATEGY_ORDER = [
  'cell-by-cell',
  'row-as-column',
  'column-as-row',
  'diagonal-reflection'
];

// ===========================================================
// UI helpers
// ===========================================================
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

function InfoIcon({ tip }) {
  return (
    <span
      className="tw-info"
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
      <span className="tw-tip">{tip}</span>
    </span>
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
          className="tw-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >▲</button>
        <button
          className="tw-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >▼</button>
      </span>
    </span>
  );
}

function StrategyCard({ meta, active, disabled, onClick }) {
  const base = {
    background: active ? '#dbeafe' : 'white',
    border: active ? '2px solid #2563eb' : '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: active ? '11px 13px' : '12px 14px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Arial, sans-serif',
    transition: 'border-color 0.15s ease, background 0.15s ease'
  };

  const cls = [
    'tw-strategy',
    active && 'tw-strategy-active',
    disabled && 'tw-strategy-disabled'
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} style={base} onClick={disabled ? undefined : onClick}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '4px'
      }}>
        <span style={{
          fontSize: '14px',
          fontWeight: active ? 600 : 500,
          color: active ? '#1e40af' : '#334155'
        }}>
          {meta.label}
        </span>
        <span style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
          {meta.advanced && (
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: '#dbeafe',
              color: '#1e40af',
              fontWeight: 600
            }}>
              geometric
            </span>
          )}
          {disabled && (
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: '#f1f5f9',
              color: '#64748b',
              fontWeight: 500
            }}>
              soon
            </span>
          )}
          {active && (
            <span style={{ fontSize: '14px', color: '#2563eb' }}>✓</span>
          )}
        </span>
      </div>
      <p
        style={{
          fontSize: '12px',
          color: active ? '#475569' : '#64748b',
          margin: 0,
          lineHeight: 1.45
        }}
        dangerouslySetInnerHTML={{ __html: meta.description }}
      />
    </div>
  );
}

const DIM_INFO =
  'A is the input matrix. A^T has the swapped shape: if A is m×n, then A^T is n×m. ' +
  'There are no shape restrictions on transpose — any matrix can be transposed.';

// ===========================================================
// Main wrapper
// ===========================================================
export default function TransposeWrapper({
  defaultRows = 3,
  defaultCols = 4,
  defaultStrategy = 'cell-by-cell',
  dimensionRange = [1, 2, 3, 4, 5],
  title = 'Matrix Transpose',
  subtitle = 'Symbolic visualization of A → A^T — four mental models for the same operation.',
  defaultSpeed = 1200
}) {
  const [rows, setRows] = useState(defaultRows);
  const [cols, setCols] = useState(defaultCols);
  const [strategy, setStrategy] = useState(defaultStrategy);

  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const activeStrategy = STRATEGIES[strategy] || STRATEGIES['cell-by-cell'];

  const scenes = useMemo(
    () => activeStrategy.build(rows, cols),
    [rows, cols, activeStrategy]
  );

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>{`
        .tw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
        .tw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

        .tw-strategy:hover { border-color: #94a3b8; }
        .tw-strategy-active:hover { border-color: #2563eb; }
        .tw-strategy-disabled { opacity: 0.55; cursor: not-allowed; }
        .tw-strategy-disabled:hover { border-color: #cbd5e1; }

        .tw-info:hover, .tw-info:focus { background: #bfdbfe; outline: none; }

        .tw-info .tw-tip {
          visibility: hidden; opacity: 0;
          position: absolute; top: calc(100% + 8px); left: 50%;
          transform: translateX(-50%);
          background: #1e293b; color: #f1f5f9;
          font-size: 12px; line-height: 1.5; font-weight: 400;
          padding: 9px 13px; border-radius: 6px;
          width: 280px; text-align: left;
          pointer-events: none;
          transition: opacity 0.12s ease, visibility 0.12s;
          z-index: 10;
          font-family: Arial, sans-serif;
          font-style: normal;
        }
        .tw-info .tw-tip::before {
          content: ''; position: absolute;
          bottom: 100%; left: 50%; transform: translateX(-50%);
          border: 5px solid transparent; border-bottom-color: #1e293b;
        }
        .tw-info:hover .tw-tip, .tw-info:focus .tw-tip {
          visibility: visible; opacity: 1;
        }
      `}</style>

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Control panel: dimensions on top, strategy cards below */}
      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px'
      }}>
        {/* Dimensions row */}
        <div style={{ marginBottom: '20px' }}>
          <FieldLabel info={DIM_INFO}>Dimensions of A</FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={rows} onChange={setRows} min={min} max={max} />
            <span style={{ color: '#94a3b8' }}>×</span>
            <Stepper value={cols} onChange={setCols} min={min} max={max} />
            <span style={{ color: '#94a3b8', margin: '0 8px' }}>→</span>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
              A<span style={{ fontSize: '10px', verticalAlign: 'super', fontStyle: 'normal' }}>T</span>
            </span>
            <span style={{
              fontSize: '13px',
              color: '#64748b',
              fontFamily: 'Arial, sans-serif'
            }}>
              {cols} × {rows}
            </span>
          </div>
        </div>

        {/* Strategy cards */}
        <div>
          <FieldLabel>
            Strategy — same result, different mental model
          </FieldLabel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px'
          }}>
            {STRATEGY_ORDER.map((id) => {
              const s = STRATEGIES[id];
              const active = strategy === id;
              return (
                <StrategyCard
                  key={id}
                  meta={s}
                  active={active}
                  disabled={!s.enabled}
                  onClick={() => s.enabled && setStrategy(id)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Output */}
      <div style={{ marginTop: '18px' }}>
        <ScenePlayer
          scenes={scenes}
          defaultSpeed={defaultSpeed}
          showSpeedSelector={true}
          showStepIndicator={true}
          showStepLog={true}
          stepLogTitle="Step explanations"
          sceneCanvasProps={{ highlightStyles: TRANSPOSE_HIGHLIGHTS }}
        />
      </div>
    </div>
  );
}