'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// HadamardWrapper v2
// - dangerouslySetInnerHTML on <style> to bypass React's
//   quote-escaping that triggered hydration mismatch on SSR
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

const HADAMARD_INFO =
  'The Hadamard product (denoted A \u2299 B) multiplies matrices ' +
  'element-by-element: each cell of the result is the product of the ' +
  'corresponding cells of A and B. It requires A and B to have the same ' +
  'shape — the result keeps that same shape. ' +
  'Note: this is NOT the standard matrix product A \u00D7 B. ' +
  'Standard multiplication pairs rows with columns and has different ' +
  'shape requirements; the Hadamard product just pairs cells.';

const HW_CSS = `
  .hw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .hw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .hw-info:hover, .hw-info:focus { background: #bfdbfe; outline: none; }

  .hw-info .hw-tip {
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
  .hw-info .hw-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .hw-info:hover .hw-tip, .hw-info:focus .hw-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Scene builder
// -----------------------------------------------------------
function buildScenes(rows, cols) {
  const maxDim = Math.max(rows, cols);
  const cFontSize =
    maxDim <= 3 ? '13px' : maxDim === 4 ? '11px' : '10px';

  const filledCellDisplay = (i, j) => ({
    display: (
      <>
        a<span style={subStyle}>{i + 1},{j + 1}</span>
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        b<span style={subStyle}>{i + 1},{j + 1}</span>
      </>
    ),
    style: { fontSize: cFontSize }
  });

  function makeCOverrides(upToIndex) {
    const overrides = {};
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const idx = i * cols + j;
        if (idx <= upToIndex) {
          overrides[`${i},${j}`] = filledCellDisplay(i, j);
        } else {
          overrides[`${i},${j}`] = { empty: true };
        }
      }
    }
    return overrides;
  }

  const baseMatrices = (cOverrides) => ({
    A: { symbol: 'a', rows, cols, label: 'A' },
    B: { symbol: 'b', rows, cols, label: 'B' },
    C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
  });

  const baseLayout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '\u2299', size: 28 },
    { type: 'matrix', ref: 'B' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'C' }
  ];

  const scenes = [];

  scenes.push({
    title: 'Hadamard product (element-wise)',
    formula:
      `Both A and B are ${rows}\u00D7${cols}. To compute C = A \u2299 B, ` +
      'pair up each cell of A with its counterpart in B and multiply ' +
      'them. The result C has the same shape.',
    matrices: baseMatrices(makeCOverrides(-1)),
    layout: baseLayout,
    highlights: {}
  });

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      scenes.push({
        title:
          `c<sub>${i + 1},${j + 1}</sub> = ` +
          `a<sub>${i + 1},${j + 1}</sub> &middot; b<sub>${i + 1},${j + 1}</sub>`,
        formula:
          `Take the cell at row ${i + 1}, column ${j + 1} from each of A and B, ` +
          `and write their product into C[${i + 1},${j + 1}].`,
        matrices: baseMatrices(makeCOverrides(idx)),
        layout: baseLayout,
        highlights: {
          A: { cells: [[i, j, 'primary']] },
          B: { cells: [[i, j, 'secondary']] },
          C: { cells: [[i, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: i, col: j },
            to: { matrix: 'C', row: i, col: j },
            style: 'primary',
            curveOffset: 35
          },
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'B', row: i, col: j },
            to: { matrix: 'C', row: i, col: j },
            style: 'secondary',
            curveOffset: 35
          }
        ]
      });
    }
  }

  scenes.push({
    title: 'Done',
    formula:
      'C is filled. Every entry c<sub>i,j</sub> = ' +
      'a<sub>i,j</sub> &middot; b<sub>i,j</sub>. ' +
      'The Hadamard product is element-wise: each cell depends only on ' +
      'its own pair. ' +
      '<strong>This is NOT the standard matrix product</strong> ' +
      'A \u00D7 B, which pairs rows of A with columns of B and produces ' +
      'a matrix whose shape depends on both operands\u2019 dimensions.',
    matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
    layout: baseLayout,
    highlights: {}
  });

  return scenes;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="hw-info"
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
      <span className="hw-tip">{tip}</span>
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
          className="hw-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="hw-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >&#9660;</button>
      </span>
    </span>
  );
}

// ===========================================================
// Main wrapper
// ===========================================================
export default function HadamardWrapper({
  defaultRows = 2,
  defaultCols = 3,
  dimensionRange = [1, 2, 3, 4, 5],
  title = 'Hadamard Product (element-wise)',
  subtitle = 'Symbolic visualization of A \u2299 B = C, cell by cell. Not to be confused with standard matrix multiplication.',
  defaultSpeed = 1200
}) {
  const [rows, setRows] = useState(defaultRows);
  const [cols, setCols] = useState(defaultCols);

  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const scenes = useMemo(
    () => buildScenes(rows, cols),
    [rows, cols]
  );

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: HW_CSS }} />

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {/* {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }}>
              {title}
            </h2>
          )} */}
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px'
      }}>
        <FieldLabel info={HADAMARD_INFO}>
          Dimensions (shared by A and B)
        </FieldLabel>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap'
        }}>
          <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
            A, B
          </span>
          <Stepper value={rows} onChange={setRows} min={min} max={max} />
          <span style={{ color: '#94a3b8' }}>&times;</span>
          <Stepper value={cols} onChange={setCols} min={min} max={max} />
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