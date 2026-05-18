'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// InnerProductWrapper
// One component, two scenarios:
//   - vectors  : ⟨u,v⟩ for length-n row vectors
//   - matrices : ⟨A,B⟩_F (Frobenius) for shape-(m,n) matrices
//
// Both share the same mental model: pair entries by index,
// multiply, sum. The wrapper makes that unity explicit.
//
// Layout in the canvas:
//     [left operand] , [right operand] = [result slot]
//
// The result slot is a 1×1 matrix object so that:
//   - it reads visually as a "scalar in a box" alongside the
//     real matrix operands
//   - arrows can target it as cell [0,0] just like any other
//     matrix cell
//
// What lives where, symbolically:
//   - Caption (above canvas):
//       running expanded sum with per-term highlighting
//       (done / current / pending) — same trick as
//       MultiplicationWrapper.buildFormula
//   - Result slot (1×1 box):
//       VECTORS  -> compact Σ form with advancing upper bound
//       MATRICES -> plain ⟨A,B⟩_F label (dual-index Σ is
//                   awkward at this level; the caption
//                   carries the substance)
// ===========================================================

// -----------------------------------------------------------
// Shared style atoms
// -----------------------------------------------------------
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

const INNER_PRODUCT_INFO =
  'An inner product takes two objects of matching shape, multiplies their ' +
  'entries pairwise, and sums the results into a single scalar. The same ' +
  'idea applies to vectors (the classical dot product) and to matrices ' +
  '(the Frobenius inner product) — the operation is the same, only the ' +
  'shape of the operands differs.';

const SAME_SHAPE_INFO =
  'A and B must have the same dimensions. Each entry of A is paired with ' +
  'the entry at the same position in B; without matching shapes there is ' +
  'no such pairing.';

// -----------------------------------------------------------
// Per-term running-sum formula for the caption.
// state: { activeP, total }
//   activeP === -1  → no term highlighting (intro)
//   activeP === p   → term p highlighted blue/bold (current)
//   activeP > p     → term p highlighted green (counted)
//   activeP === total → every term green (outro)
//   activeP < p     → term p dimmed grey (pending)
//
// `getTermHTML(p)` produces the HTML for term p (e.g.
// "u_1 v_1" or "a_{1,1} b_{1,1}").
// -----------------------------------------------------------
function buildRunningSum(headerHTML, total, activeP, getTermHTML) {
  const parts = [headerHTML];
  for (let p = 0; p < total; p++) {
    let bg = 'transparent';
    let weight = 'normal';
    let color = 'inherit';

    if (activeP === p) {
      bg = '#dbeafe';
      weight = '700';
      color = '#1e40af';
    } else if (activeP !== -1 && p < activeP) {
      bg = '#dcfce7';
      color = '#166534';
    } else if (activeP === total) {
      bg = '#dcfce7';
      color = '#166534';
    } else if (activeP !== -1 && p > activeP) {
      color = '#94a3b8';
    }

    parts.push(
      `<span style="background:${bg};padding:1px 4px;border-radius:3px;` +
      `font-weight:${weight};color:${color};` +
      `transition:background 0.25s ease,color 0.25s ease">` +
      getTermHTML(p) +
      `</span>`
    );
    if (p < total - 1) parts.push(' + ');
  }
  return parts.join('');
}

// -----------------------------------------------------------
// Term HTML for the two scenarios.
// -----------------------------------------------------------
function vectorTerm(p) {
  return (
    `<span style="font-style:italic">u</span><sub>${p + 1}</sub>` +
    `<span style="font-style:italic">v</span><sub>${p + 1}</sub>`
  );
}

function matrixTerm(p, cols) {
  const i = Math.floor(p / cols);
  const j = p % cols;
  return (
    `<span style="font-style:italic">a</span><sub>${i + 1},${j + 1}</sub>` +
    `<span style="font-style:italic">b</span><sub>${i + 1},${j + 1}</sub>`
  );
}

// -----------------------------------------------------------
// Result-slot content — JSX (passed as cellOverride.display).
// fontStyle 'normal' override is set on the cellOverride so
// the brackets aren't italicised; letters inside are
// explicitly italicised.
// -----------------------------------------------------------
function VectorResultDisplay({ upperBound }) {
  // Stacked Σ with bounds: small "n" above, "k=1" below.
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px',
      fontFamily: '\'Cambria Math\', Georgia, serif',
      fontSize: '13px',
      lineHeight: 1
    }}>
      <span style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1,
        fontStyle: 'normal'
      }}>
        <span style={{ fontSize: '0.62em' }}>{upperBound}</span>
        <span style={{ fontSize: '1.5em' }}>&Sigma;</span>
        <span style={{ fontSize: '0.62em' }}>
          <span style={{ fontStyle: 'italic' }}>k</span>=1
        </span>
      </span>
      <span style={{ fontStyle: 'italic' }}>
        u<sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>k</sub>
        v<sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>k</sub>
      </span>
    </span>
  );
}

function MatrixResultLabel() {
  return (
    <span style={{
      fontFamily: '\'Cambria Math\', Georgia, serif',
      fontSize: '14px',
      lineHeight: 1
    }}>
      &#10216;
      <span style={{ fontStyle: 'italic' }}>A</span>,
      <span style={{ fontStyle: 'italic' }}>B</span>
      &#10217;
      <sub style={{ fontStyle: 'normal', fontSize: '0.65em' }}>F</sub>
    </span>
  );
}

// -----------------------------------------------------------
// Label JSX for the result matrix.
// -----------------------------------------------------------
const vectorResultLabel = (
  <>
    &#10216;
    <span style={{ fontStyle: 'italic' }}>u</span>,
    <span style={{ fontStyle: 'italic' }}>v</span>
    &#10217;
  </>
);

const matrixResultLabelJSX = (
  <>
    &#10216;
    <span style={{ fontStyle: 'italic' }}>A</span>,
    <span style={{ fontStyle: 'italic' }}>B</span>
    &#10217;
    <sub style={{ fontStyle: 'normal', fontSize: '0.65em' }}>F</sub>
  </>
);

// ===========================================================
// VECTOR SCENE BUILDER
// ===========================================================
function buildVectorScenes(n) {
  const scenes = [];

  // Result-cell content per phase.
  const resultOverride = (upperBound, state) => ({
    '0,0': {
      display: <VectorResultDisplay upperBound={upperBound} />,
      fontStyle: 'normal',
      style: { padding: '0 4px' }
    }
  });

  const baseMatrices = (resultBound) => ({
    U: { symbol: 'u', rows: 1, cols: n, label: 'u' },
    V: { symbol: 'v', rows: 1, cols: n, label: 'v' },
    R: {
      rows: 1,
      cols: 1,
      label: vectorResultLabel,
      showDimensions: false,
      cellSize: 80,
      fontSize: 13,
      cellOverrides: resultOverride(resultBound)
    }
  });

  const baseLayout = [
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: ',', size: 22 },
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'R' }
  ];

  const headerHTML =
    '&#10216;<span style="font-style:italic">u</span>, ' +
    '<span style="font-style:italic">v</span>&#10217; = ';

  // ---------- Scene 0: intro ----------
  scenes.push({
    title: 'Vector inner product',
    formula:
      'The inner product of two vectors of the same length ' +
      'pairs them index by index, multiplies, and sums to a ' +
      `single scalar.<br/>` +
      buildRunningSum(headerHTML, n, -1, vectorTerm),
    matrices: baseMatrices(String(n)),
    layout: baseLayout,
    highlights: {},
    overlays: []
  });

  // ---------- Scenes 1..n: sweep ----------
  for (let k = 0; k < n; k++) {
    scenes.push({
      title:
        `Pair <span style="font-style:italic">u</span>` +
        `<sub>${k + 1}</sub> with ` +
        `<span style="font-style:italic">v</span><sub>${k + 1}</sub>`,
      formula: buildRunningSum(headerHTML, n, k, vectorTerm),
      matrices: baseMatrices(String(k + 1)),
      layout: baseLayout,
      highlights: {
        U: { cells: [[0, k, 'pairA']] },
        V: { cells: [[0, k, 'pairB']] },
        R: { cells: [[0, 0, 'primary']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: 0, col: k },
          to: { matrix: 'R', row: 0, col: 0 },
          style: 'primary',
          curveOffset: 38
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: 0, col: k },
          to: { matrix: 'R', row: 0, col: 0 },
          style: 'secondary',
          curveOffset: 38
        }
      ]
    });
  }

  // ---------- Final scene: outro ----------
  const allAccent = (length) =>
    Array.from({ length }, (_, i) => [0, i, 'accent']);
  scenes.push({
    title: 'Inner product computed',
    formula:
      buildRunningSum(headerHTML, n, n, vectorTerm) +
      '<br/>The result is a single scalar — one number that ' +
      'summarises the alignment of <span style="font-style:italic">u</span> ' +
      'and <span style="font-style:italic">v</span>.',
    matrices: baseMatrices(String(n)),
    layout: baseLayout,
    highlights: {
      U: { cells: allAccent(n) },
      V: { cells: allAccent(n) },
      R: { cells: [[0, 0, 'accent']] }
    },
    overlays: []
  });

  return scenes;
}

// ===========================================================
// MATRIX SCENE BUILDER (Frobenius)
// ===========================================================
function buildMatrixScenes(rows, cols) {
  const total = rows * cols;
  const scenes = [];

  const sizeForCells = Math.max(rows, cols);
  const cellPx =
    sizeForCells <= 3 ? 58 : sizeForCells === 4 ? 51 : 44;
  const fontPx =
    sizeForCells <= 3 ? 17 : sizeForCells === 4 ? 14 : 13;

  const resultOverride = () => ({
    '0,0': {
      display: <MatrixResultLabel />,
      fontStyle: 'normal',
      style: { padding: '0 4px' }
    }
  });

  const baseMatrices = () => ({
    A: { symbol: 'a', rows, cols, label: 'A', cellSize: cellPx, fontSize: fontPx },
    B: { symbol: 'b', rows, cols, label: 'B', cellSize: cellPx, fontSize: fontPx },
    R: {
      rows: 1,
      cols: 1,
      label: matrixResultLabelJSX,
      showDimensions: false,
      cellSize: 80,
      fontSize: 13,
      cellOverrides: resultOverride()
    }
  });

  const baseLayout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: ',', size: 22 },
    { type: 'matrix', ref: 'B' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'R' }
  ];

  const headerHTML =
    '&#10216;<span style="font-style:italic">A</span>, ' +
    '<span style="font-style:italic">B</span>&#10217;' +
    '<sub style="font-style:normal">F</sub> = ';

  const termFn = (p) => matrixTerm(p, cols);

  // ---------- Scene 0: intro ----------
  scenes.push({
    title: 'Frobenius inner product',
    formula:
      `A and B share the same shape (${rows}\u00D7${cols}). ` +
      'Pair their entries position by position, multiply each ' +
      'pair, and sum the products into a single scalar.<br/>' +
      buildRunningSum(headerHTML, total, -1, termFn),
    matrices: baseMatrices(),
    layout: baseLayout,
    highlights: {},
    overlays: []
  });

  // ---------- Scenes 1..total: sweep ----------
  for (let p = 0; p < total; p++) {
    const i = Math.floor(p / cols);
    const j = p % cols;
    scenes.push({
      title:
        `Pair <span style="font-style:italic">a</span>` +
        `<sub>${i + 1},${j + 1}</sub> with ` +
        `<span style="font-style:italic">b</span>` +
        `<sub>${i + 1},${j + 1}</sub>`,
      formula: buildRunningSum(headerHTML, total, p, termFn),
      matrices: baseMatrices(),
      layout: baseLayout,
      highlights: {
        A: { cells: [[i, j, 'pairA']] },
        B: { cells: [[i, j, 'pairB']] },
        R: { cells: [[0, 0, 'primary']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'A', row: i, col: j },
          to: { matrix: 'R', row: 0, col: 0 },
          style: 'primary',
          curveOffset: 38
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'B', row: i, col: j },
          to: { matrix: 'R', row: 0, col: 0 },
          style: 'secondary',
          curveOffset: 38
        }
      ]
    });
  }

  // ---------- Final scene: outro ----------
  const allAccentCells = () => {
    const cells = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) cells.push([i, j, 'accent']);
    }
    return cells;
  };

  scenes.push({
    title: 'Frobenius inner product computed',
    formula:
      buildRunningSum(headerHTML, total, total, termFn) +
      '<br/>The result is a single scalar — independent of how ' +
      'A and B are laid out in rows and columns, it is just the ' +
      'sum over all matching positions.',
    matrices: baseMatrices(),
    layout: baseLayout,
    highlights: {
      A: { cells: allAccentCells() },
      B: { cells: allAccentCells() },
      R: { cells: [[0, 0, 'accent']] }
    },
    overlays: []
  });

  return scenes;
}

// ===========================================================
// UI helpers — `ip-` class prefix for sibling-collision safety
// ===========================================================
function InfoIcon({ tip }) {
  return (
    <span
      className="ip-info"
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
      <span className="ip-tip">{tip}</span>
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
          className="ip-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="ip-stepper-btn"
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
      className={active ? 'ip-pill ip-pill-active' : 'ip-pill'}
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
export default function InnerProductWrapper({
  defaultScenario = 'vectors',
  defaultVecN = 4,
  defaultMatRows = 2,
  defaultMatCols = 3,
  vectorRange = [2, 3, 4, 5, 6, 7, 8, 9, 10],
  matrixRange = [2, 3, 4, 5],
  title = 'Inner Product',
  subtitle = 'Symbolic visualization of \u27E8u, v\u27E9 (vectors) and \u27E8A, B\u27E9_F (Frobenius), step by step.',
  defaultSpeed = 1200
}) {
  const [scenario, setScenario] = useState(defaultScenario);
  const [vecN, setVecN] = useState(defaultVecN);
  const [matRows, setMatRows] = useState(defaultMatRows);
  const [matCols, setMatCols] = useState(defaultMatCols);

  const vecMin = vectorRange[0];
  const vecMax = vectorRange[vectorRange.length - 1];
  const matMin = matrixRange[0];
  const matMax = matrixRange[matrixRange.length - 1];

  const scenes = useMemo(() => {
    if (scenario === 'vectors') return buildVectorScenes(vecN);
    return buildMatrixScenes(matRows, matCols);
  }, [scenario, vecN, matRows, matCols]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>{`
        .ip-stepper-btn:hover:not(:disabled) { color: #1e40af; }
        .ip-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

        .ip-pill:hover { border-color: #94a3b8; }
        .ip-pill-active:hover { border-color: #2563eb; }

        .ip-info:hover, .ip-info:focus { background: #bfdbfe; outline: none; }

        .ip-info .ip-tip {
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
        .ip-info .ip-tip::before {
          content: ''; position: absolute;
          bottom: 100%; left: 50%; transform: translateX(-50%);
          border: 5px solid transparent; border-bottom-color: #1e293b;
        }
        .ip-info:hover .ip-tip, .ip-info:focus .ip-tip {
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
        {/* Scenario */}
        <div>
          <FieldLabel info={INNER_PRODUCT_INFO}>Scenario</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Pill
              active={scenario === 'vectors'}
              onClick={() => setScenario('vectors')}
            >
              Vectors &nbsp;
              <span style={mathInlineStyle}>&#10216;u, v&#10217;</span>
            </Pill>
            <Pill
              active={scenario === 'matrices'}
              onClick={() => setScenario('matrices')}
            >
              Matrices &nbsp;
              <span style={mathInlineStyle}>
                &#10216;A, B&#10217;<sub style={{ fontStyle: 'normal' }}>F</sub>
              </span>
            </Pill>
          </div>
        </div>

        {/* Dimensions — scenario-specific */}
        {scenario === 'vectors' ? (
          <div>
            <FieldLabel>Vector length</FieldLabel>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexWrap: 'wrap'
            }}>
              <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
                u, v
              </span>
              <span style={{ color: '#94a3b8' }}>length</span>
              <Stepper value={vecN} onChange={setVecN} min={vecMin} max={vecMax} />
            </div>
          </div>
        ) : (
          <div>
            <FieldLabel info={SAME_SHAPE_INFO}>
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
              <Stepper value={matRows} onChange={setMatRows} min={matMin} max={matMax} />
              <span style={{ color: '#94a3b8' }}>&times;</span>
              <Stepper value={matCols} onChange={setMatCols} min={matMin} max={matMax} />
            </div>
          </div>
        )}
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
        />
      </div>
    </div>
  );
}