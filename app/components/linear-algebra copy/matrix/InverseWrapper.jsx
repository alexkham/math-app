'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// InverseWrapper v1
// Visualizes the inverse of a square matrix A (n = 2 or 3) by
// the adjugate formula
//
//   A⁻¹ = adj(A) / det(A),   adj(A) = Cᵀ,   C_{i,j} = (−1)^{i+j} M_{i,j}
//
// Phases:
//   1 — cofactor  : one scene per entry (row-major). Strike row i
//                   and column j of A, read the minor M_{i,j}, attach
//                   the sign, write C_{i,j} into the cofactor matrix
//   2 — transpose : adj(A) = Cᵀ, one scene
//   3 — det       : det A = a_{1,1}C_{1,1} + a_{1,2}C_{1,2} + …, expanded
//                   along the first row with the cofactors already in
//                   hand, one scene
//   4 — divide    : one scene per entry, (A⁻¹)_{i,j} = adj_{i,j} / det A
//
// n is limited to 2 and 3 because the cofactor expressions are
// written out symbolically; at 4×4 each is a 3×3 determinant and
// no longer fits in a cell.
//
// explanations prop (optional): { intro, cofactor, transpose, det,
// divide, done } — raw HTML appended to the caption of the matching
// scenes (Line 1 anchor mesh, same hook the sibling wrappers use).
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

const INV_INFO =
  'The inverse of a square matrix A is the matrix A⁻¹ with A·A⁻¹ = A⁻¹·A = I. ' +
  'It exists exactly when det A ≠ 0. The adjugate formula builds it in four ' +
  'moves: compute every cofactor (a signed minor), transpose the cofactor ' +
  'matrix to get the adjugate, compute det A by expanding along the first row, ' +
  'then divide every entry of the adjugate by det A. Row reduction of [A | I] ' +
  'is the other standard route and scales better; this one shows the structure.';

const IV_CSS = `
  .iv-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .iv-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .iv-info:hover, .iv-info:focus { background: #bfdbfe; outline: none; }

  .iv-info .iv-tip {
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
  .iv-info .iv-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .iv-info:hover .iv-tip, .iv-info:focus .iv-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Sizing
// -----------------------------------------------------------
function sizingFor(n) {
  if (n === 2) return { aCell: 60, aFont: '16px', cCell: 68, cFont: '13px', invCell: 76, invFont: '12px' };
  return       { aCell: 54, aFont: '14px', cCell: 92, cFont: '10.5px', invCell: 70, invFont: '11px' };
}

const DET_CELL = 84;
const DET_FONT = '14px';
const UPRIGHT = { fontStyle: 'normal' };
const STRUCK = { textDecoration: 'line-through', color: '#94a3b8' };
const DET_SYMBOL = '|A|';

// -----------------------------------------------------------
// Cell display helpers
// -----------------------------------------------------------
function sub(t) {
  return <span style={subStyle}>{t}</span>;
}

function aCell(i, j, fontSize, extraStyle) {
  return {
    display: <>a{sub(`${i + 1},${j + 1}`)}</>,
    style: { fontSize, ...(extraStyle || {}) }
  };
}

const MINUS = <span style={{ ...UPRIGHT, margin: '0 2px' }}>&minus;</span>;

// Rows/columns other than k, in increasing order.
function others(n, k) {
  const out = [];
  for (let t = 0; t < n; t++) if (t !== k) out.push(t);
  return out;
}

// The cofactor C_{i,j} of an n×n symbolic matrix, as { display, html }.
// The sign (−1)^{i+j} is folded in: for a negative sign the two terms of a
// 2×2 minor are swapped, and a 1×1 minor gets a leading minus.
function cofactor(n, i, j) {
  const neg = (i + j) % 2 === 1;
  const rows = others(n, i);
  const cols = others(n, j);
  if (n === 2) {
    const r = rows[0], c = cols[0];
    return {
      display: <>{neg ? MINUS : null}a{sub(`${r + 1},${c + 1}`)}</>,
      html: `${neg ? '−' : ''}a<sub>${r + 1},${c + 1}</sub>`,
      minorHtml: `a<sub>${r + 1},${c + 1}</sub>`
    };
  }
  const [r1, r2] = rows;
  const [c1, c2] = cols;
  const t1 = { r: r1, c: c1, r2, c2 };          // a_{r1,c1} a_{r2,c2}
  const t2 = { r: r1, c: c2, r2, c2: c1 };      // a_{r1,c2} a_{r2,c1}
  const first = neg ? t2 : t1;
  const second = neg ? t1 : t2;
  const term = (t) => <>a{sub(`${t.r + 1},${t.c + 1}`)}a{sub(`${t.r2 + 1},${t.c2 + 1}`)}</>;
  const termHtml = (t) => `a<sub>${t.r + 1},${t.c + 1}</sub>a<sub>${t.r2 + 1},${t.c2 + 1}</sub>`;
  return {
    display: <>{term(first)}{MINUS}{term(second)}</>,
    html: `${termHtml(first)} − ${termHtml(second)}`,
    minorHtml: `${termHtml(t1)} − ${termHtml(t2)}`
  };
}

function aOverrides(n, fontSize, pivot) {
  const over = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const struck = pivot && ((i === pivot.i && j !== pivot.j) || (j === pivot.j && i !== pivot.i));
      over[`${i},${j}`] = aCell(i, j, fontSize, struck ? STRUCK : null);
    }
  }
  return over;
}

// filled(i, j) → boolean; content(i, j) → override
function gridOverrides(n, filled, content) {
  const over = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      over[`${i},${j}`] = filled(i, j) ? content(i, j) : { empty: true };
    }
  }
  return over;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(n = 3) {
  const { aCell: aPx, aFont, cCell, cFont, invCell, invFont } = sizingFor(n);

  const A = (pivot) => ({
    symbol: 'a', rows: n, cols: n, label: 'A',
    cellSize: aPx,
    cellOverrides: aOverrides(n, aFont, pivot)
  });
  const C = (filled) => ({
    symbol: 'C', rows: n, cols: n, label: 'C',
    cellSize: cCell,
    cellOverrides: gridOverrides(n, filled, (i, j) => ({ display: cofactor(n, i, j).display, style: { fontSize: cFont } }))
  });
  const ADJ = (filled) => ({
    symbol: 'adj', rows: n, cols: n, label: 'adj A',
    cellSize: cCell,
    // adj_{i,j} = C_{j,i}
    cellOverrides: gridOverrides(n, filled, (i, j) => ({ display: cofactor(n, j, i).display, style: { fontSize: cFont } }))
  });
  const D = (filled) => ({
    symbol: 'd', rows: 1, cols: 1, label: 'det A',
    showDimensions: false,
    cellSize: DET_CELL,
    cellOverrides: { '0,0': filled ? { display: DET_SYMBOL, fontStyle: 'normal', style: { fontSize: DET_FONT } } : { empty: true } }
  });
  const invContent = (i, j) => {
    // (A⁻¹)_{i,j} = adj_{i,j} / det A = C_{j,i} / det A.
    // At 2×2 the cofactor is a single entry and is written out; at 3×3 it is
    // named C_{j,i} so the cell stays readable.
    const top = n === 2
      ? cofactor(n, j, i).display
      : <>C{sub(`${j + 1},${i + 1}`)}</>;
    return {
      display: <>{top}<span style={{ ...UPRIGHT, margin: '0 2px' }}>/</span><span style={UPRIGHT}>{DET_SYMBOL}</span></>,
      style: { fontSize: invFont }
    };
  };
  const INV = (filled) => ({
    symbol: 'x', rows: n, cols: n, label: 'A⁻¹',
    cellSize: invCell,
    cellOverrides: gridOverrides(n, filled, invContent)
  });

  const layoutCof = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'C' }
  ];
  const layoutT = [
    { type: 'matrix', ref: 'C' },
    { type: 'operator', symbol: 'ᵀ', size: 24 },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'ADJ' }
  ];
  const layoutDet = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'C' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'D' }
  ];
  const layoutDiv = [
    { type: 'matrix', ref: 'ADJ' },
    { type: 'operator', symbol: '÷' },
    { type: 'matrix', ref: 'D' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'INV' }
  ];

  const all = () => true;
  const none = () => false;
  const scenes = [];

  // Intro
  scenes.push({
    title: 'Inverse of A by the adjugate formula',
    formula:
      `A is ${n}×${n}. Its inverse, when it exists, is ` +
      '<strong>A⁻¹ = adj(A) / det A</strong>. The run computes every ' +
      '<strong>cofactor</strong> of A (a signed minor), <strong>transposes</strong> the ' +
      'cofactor matrix to get the adjugate, computes <strong>det A</strong> from the ' +
      'first-row cofactors, and finally <strong>divides</strong> every entry of the ' +
      'adjugate by det A. The last step is the one that can fail: if det A = 0 there ' +
      'is no inverse.',
    matrices: { A: A(null), C: C(none) },
    layout: layoutCof,
    highlights: {}
  });

  // Phase 1: cofactors, row-major
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      const cf = cofactor(n, i, j);
      const neg = (i + j) % 2 === 1;
      const minorCells = [];
      for (const r of others(n, i)) for (const c of others(n, j)) minorCells.push([r, c, 'secondary']);
      const struck = [];
      for (const c of others(n, j)) struck.push([i, c, 'muted']);
      for (const r of others(n, i)) struck.push([r, j, 'muted']);
      scenes.push({
        title: `Cofactor C<sub>${i + 1},${j + 1}</sub> = ${cf.html}`,
        formula:
          `Strike row ${i + 1} and column ${j + 1}. ` +
          (n === 2
            ? `What remains is the single entry ${cf.minorHtml}, the minor M<sub>${i + 1},${j + 1}</sub>. `
            : `The 2×2 block that remains has determinant ${cf.minorHtml}, the minor M<sub>${i + 1},${j + 1}</sub>. `) +
          `The cofactor attaches the sign (−1)<sup>${i + 1}+${j + 1}</sup> = ${neg ? '−1' : '+1'}` +
          (neg ? ', so the minor is negated.' : ', so the minor is taken as is.'),
        matrices: { A: A({ i, j }), C: C((r, c) => r * n + c <= idx) },
        layout: layoutCof,
        highlights: {
          A: { cells: [[i, j, 'primary'], ...minorCells, ...struck] },
          C: { cells: [[i, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: i, col: j },
            to: { matrix: 'C', row: i, col: j },
            style: 'primary', curveOffset: 36, curveDirection: 'up'
          }
        ]
      });
    }
  }

  // Phase 2: transpose → adjugate
  {
    const cAll = [];
    const adjAll = [];
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { cAll.push([i, j, 'secondary']); adjAll.push([i, j, 'accent']); }
    scenes.push({
      title: 'Adjugate: adj A = Cᵀ',
      formula:
        'Transpose the cofactor matrix: the cofactor of a<sub>i,j</sub> moves to row j, ' +
        'column i. The diagonal stays put and every off-diagonal cofactor swaps places ' +
        'with its mirror image. This transposed matrix is the adjugate (or classical ' +
        'adjoint) of A.',
      matrices: { C: C(all), ADJ: ADJ(all) },
      layout: layoutT,
      highlights: {
        C: { cells: cAll },
        ADJ: { cells: adjAll }
      }
    });
  }

  // Phase 3: determinant from the first-row cofactors
  {
    const terms = [];
    for (let j = 0; j < n; j++) terms.push(`a<sub>1,${j + 1}</sub>C<sub>1,${j + 1}</sub>`);
    const aRow = [];
    const cRow = [];
    for (let j = 0; j < n; j++) { aRow.push([0, j, 'primary']); cRow.push([0, j, 'secondary']); }
    scenes.push({
      title: `Determinant: det A = ${terms.join(' + ')}`,
      formula:
        'Expand along the first row: multiply each entry of row 1 by its own cofactor and ' +
        'add. The cofactors are already computed, so the determinant costs one row of ' +
        'products. If it comes out zero, stop — A is singular and has no inverse.',
      matrices: { A: A(null), C: C(all), D: D(true) },
      layout: layoutDet,
      highlights: {
        A: { cells: aRow },
        C: { cells: cRow },
        D: { cells: [[0, 0, 'accent']] }
      }
    });
  }

  // Phase 4: divide, row-major
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      const cf = cofactor(n, j, i);
      scenes.push({
        title: `(A⁻¹)<sub>${i + 1},${j + 1}</sub> = adj<sub>${i + 1},${j + 1}</sub> / det A` +
          (n === 2 ? ` = ${cf.html} / det A` : ` = C<sub>${j + 1},${i + 1}</sub> / det A`),
        formula:
          `Divide the adjugate entry at row ${i + 1}, column ${j + 1} — which is the cofactor ` +
          `C<sub>${j + 1},${i + 1}</sub> = ${cf.html} — by det A. Every entry is divided by the ` +
          'same number, so the inverse is the adjugate rescaled.',
        matrices: { ADJ: ADJ(all), D: D(true), INV: INV((r, c) => r * n + c <= idx) },
        layout: layoutDiv,
        highlights: {
          ADJ: { cells: [[i, j, 'primary']] },
          D: { cells: [[0, 0, 'secondary']] },
          INV: { cells: [[i, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'ADJ', row: i, col: j },
            to: { matrix: 'INV', row: i, col: j },
            style: 'primary', curveOffset: 38, curveDirection: 'up'
          },
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'D', row: 0, col: 0 },
            to: { matrix: 'INV', row: i, col: j },
            style: 'secondary', curveOffset: 28, curveDirection: 'down'
          }
        ]
      });
    }
  }

  // Done
  scenes.push({
    title: 'Done',
    formula:
      'A⁻¹ is filled. Multiplying A by it, in either order, gives the identity: the ' +
      'row-i-times-column-i products reproduce the first-row expansion of det A and ' +
      'divide out to 1, while the off-diagonal products are expansions along a row ' +
      'with the wrong cofactors, which always vanish. The whole construction rests on ' +
      'det A ≠ 0; that single number decides whether A can be undone.',
    matrices: { ADJ: ADJ(all), D: D(true), INV: INV(all) },
    layout: layoutDiv,
    highlights: {}
  });

  return scenes;
}

// Phase key for scene i in a run built with n.
export function phaseKeyFor(i, n) {
  const sq = n * n;
  const total = 2 * sq + 4;
  if (i === 0) return 'intro';
  if (i === total - 1) return 'done';
  if (i <= sq) return 'cofactor';
  if (i === sq + 1) return 'transpose';
  if (i === sq + 2) return 'det';
  return 'divide';
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="iv-info"
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
      <span className="iv-tip">{tip}</span>
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
          className="iv-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="iv-stepper-btn"
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
export default function InverseWrapper({
  defaultN = 3,
  dimensionRange = [2, 3],
  explanations = null,
  title = 'Matrix Inverse',
  subtitle = 'Symbolic visualization of A⁻¹ = adj(A) / det A — cofactors, transpose, determinant, divide.',
  defaultSpeed = 1400
}) {
  const [n, setN] = useState(defaultN);
  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const scenes = useMemo(() => {
    const built = buildScenes(n);
    if (!explanations) return built;
    return built.map((sc, i) => {
      const extra = explanations[phaseKeyFor(i, n)];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [n, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: IV_CSS }} />

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
          <FieldLabel info={INV_INFO}>
            Size of A (square)
          </FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={n} onChange={setN} min={min} max={max} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <span style={{
              ...mathInlineStyle,
              fontWeight: 500,
              padding: '4px 12px',
              borderRadius: '6px',
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#0f172a'
            }}>
              {n}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '8px' }}>
              2&times;2 or 3&times;3 &mdash; the cofactors are written out in full
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
