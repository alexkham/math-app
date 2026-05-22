'use client';

import React, { useState, useMemo, useCallback } from 'react';
import NumericCore from '../MatrixCoreEnhanced';
import NumericRandomizer from '../NumericRandomizer';
import { buildRankScenes } from './strategies/rankScenes';
import { generate } from '../numericRegistry';

// ===========================================================
// RankNumericWrapper v1
//
// Parallel to InverseNumericWrapper, but for computing the
// rank of a matrix via row reduction (REF). Lives in World B
// (concrete numbers, NumericCore player).
//
// Key differences from Inverse:
//   - Rectangular: independent rows x cols steppers (rank is
//     most meaningful for m != n). No square lock.
//   - Single matrix (no augmented half).
//
// ENGINE CONTRACT (rankScenes.js):
//   buildRankScenes(A, onChange) -> scenes[]
//     - A: m x n matrix (2D array)
//     - scene 0 is editable: matrix id 'A' with onChange { A }
//     - remaining scenes reduce A to row echelon form and
//       report rank(A).
//
// State:
//   - rows, cols : dimensions of A
//   - values     : A contents (rows x cols)
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
  'The rank of a matrix is the number of independent rows (equivalently, ' +
  'independent columns). Row-reduce to echelon form and count the pivots: ' +
  'each pivot marks one independent row. Rank is at most min(rows, cols). ' +
  'A matrix with rank equal to that minimum has full rank; anything less ' +
  'is rank-deficient.';

// -----------------------------------------------------------
// Matrix helpers
// -----------------------------------------------------------
function buildZeroMatrix(rows, cols) {
  const m = [];
  for (let i = 0; i < rows; i++) m.push(Array(cols).fill(0));
  return m;
}

function resizeValues(prev, rows, cols) {
  const out = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const v = prev?.[i]?.[j];
      row.push(typeof v === 'number' ? v : 0);
    }
    out.push(row);
  }
  return out;
}

// -----------------------------------------------------------
// UI primitives (pattern from InverseNumericWrapper)
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="rw-info"
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
      <span className="rw-tip">{tip}</span>
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
        minWidth: '14px',
        textAlign: 'center',
        color: '#0f172a'
      }}>
        {value}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
        <button
          className="rw-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="rw-stepper-btn"
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
export default function RankWrapper({
  defaultRows = 3,
  defaultCols = 4,
  dimensionRange = [1, 2, 3, 4, 5, 6],
  title = 'Matrix Rank via Row Reduction',
  subtitle = 'Reduce <i>A</i> to row echelon form and count the pivots \u2014 each pivot marks one independent row.',
  defaultSpeed = 1400
}) {
  const [rows, setRows] = useState(defaultRows);
  const [cols, setCols] = useState(defaultCols);
  const [values, setValues] = useState(() =>
    generate('general', { rows: defaultRows, cols: defaultCols })
  );

  const dimMin = dimensionRange[0];
  const dimMax = dimensionRange[dimensionRange.length - 1];

  const handleRows = useCallback((newRows) => {
    setRows(newRows);
    setValues((prev) => resizeValues(prev, newRows, cols));
  }, [cols]);

  const handleCols = useCallback((newCols) => {
    setCols(newCols);
    setValues((prev) => resizeValues(prev, rows, newCols));
  }, [rows]);

  const handleClear = useCallback(() => {
    setValues(buildZeroMatrix(rows, cols));
  }, [rows, cols]);

  const scenes = useMemo(
    () => buildRankScenes(values, setValues),
    [values]
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
        .rw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
        .rw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

        .rw-info:hover, .rw-info:focus { background: #bfdbfe; outline: none; }
        .rw-info .rw-tip {
          visibility: hidden; opacity: 0;
          position: absolute; top: calc(100% + 8px); left: 50%;
          transform: translateX(-50%);
          background: #1e293b; color: #f1f5f9;
          font-size: 12px; line-height: 1.5; font-weight: 400;
          padding: 9px 13px; border-radius: 6px;
          width: 300px; text-align: left;
          pointer-events: none;
          transition: opacity 0.12s ease, visibility 0.12s;
          z-index: 100;
          font-family: Arial, sans-serif; font-style: normal;
        }
        .rw-info .rw-tip::before {
          content: ''; position: absolute;
          bottom: 100%; left: 50%; transform: translateX(-50%);
          border: 5px solid transparent; border-bottom-color: #1e293b;
        }
        .rw-info:hover .rw-tip, .rw-info:focus .rw-tip {
          visibility: visible; opacity: 1;
        }

        .rw-btn {
          padding: 9px 14px;
          background: white; color: #475569;
          border: 1px solid #cbd5e1; border-radius: 6px;
          font-size: 13px; font-weight: 600;
          cursor: pointer; font-family: inherit;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .rw-btn:hover { border-color: #94a3b8; }
      `}</style>

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }} dangerouslySetInnerHTML={{ __html: title }} />
          )}
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}
               dangerouslySetInnerHTML={{ __html: subtitle }} />
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
        {/* Dimensions — independent rows x cols */}
        <div>
          <FieldLabel info={RANK_INFO}>Dimensions of <span style={mathInlineStyle}>A</span></FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={rows} onChange={handleRows} min={dimMin} max={dimMax} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <Stepper value={cols} onChange={handleCols} min={dimMin} max={dimMax} />
          </div>
        </div>

        {/* Generate A */}
        <div>
          <FieldLabel>Generate <span style={mathInlineStyle}>A</span></FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <NumericRandomizer
              shape={{ rows, cols }}
              onGenerate={setValues}
              types={['general', 'zero']}
              defaultType="general"
            />
            <button className="rw-btn" onClick={handleClear}>
              &#x21BA; Clear
            </button>
          </div>
        </div>
      </div>

      {/* Scene player */}
      <div style={{ marginTop: '18px' }}>
        <NumericCore
          scenes={scenes}
          playerProps={{
            showStepLog: true,
            defaultSpeed: defaultSpeed,
            stepLogTitle: 'Step explanations'
          }}
        />
      </div>
    </div>
  );
}