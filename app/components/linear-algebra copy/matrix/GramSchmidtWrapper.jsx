'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// GramSchmidtWrapper v1
// Visualizes the Gram–Schmidt process on k vectors v_1..v_k of
// length n (k = 2 or 3, n = 2..4), symbolically:
//
//   u_1 = v_1
//   u_k = v_k − c_{k,1} u_1 − … − c_{k,k−1} u_{k−1},
//         c_{k,j} = (v_k · u_j) / (u_j · u_j)
//   e_k = u_k / ‖u_k‖
//
// The input set is drawn as the rows of a k×n matrix V, the
// orthogonal set as the rows of U, and the orthonormal set as
// the rows of E, so the whole process fits in one row of the
// canvas at every step.
//
// Phases (each scene carries a `phase` field):
//   intro     — V beside an empty U
//   keep      — u_1 = v_1, copied across
//   start     — u_k begins as a copy of v_k (k ≥ 2)
//   subtract  — one scene per earlier u_j: the projection of v_k
//               onto u_j is subtracted, the row of U grows a term
//   normalize — one scene per vector: e_k = u_k / ‖u_k‖
//   done
//
// explanations prop (optional): keyed by phase, raw HTML appended
// to the matching scene captions (Line 1 anchor mesh).
//
// Standalone file: imports the core, never modifies it. The scene
// builder is exported for the frozen-state diagrams.
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

const GS_INFO =
  'Gram–Schmidt turns any list of independent vectors into an orthogonal list ' +
  'with the same span, one vector at a time: keep the first, and from each ' +
  'later vector subtract its projections onto every vector already made ' +
  'orthogonal. What remains is perpendicular to all of them. Dividing each ' +
  'result by its length then gives an orthonormal set. The vectors must be ' +
  'independent; a dependent v_k is reduced to zero and cannot be normalized.';

const GS_CSS = `
  .gs-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .gs-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .gs-info:hover, .gs-info:focus { background: #bfdbfe; outline: none; }

  .gs-info .gs-tip {
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
  .gs-info .gs-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .gs-info:hover .gs-tip, .gs-info:focus .gs-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Sizing — U cells hold up to k terms, so they widen with k and
// shrink with n.
// -----------------------------------------------------------
function sizingFor(k, n) {
  const vCell = n <= 2 ? 56 : n === 3 ? 52 : 46;
  const vFont = n <= 2 ? '15px' : n === 3 ? '14px' : '12.5px';
  const uCell = (k === 2 ? 92 : 118) - (n === 4 ? 14 : n === 3 ? 6 : 0);
  const uFont = (k === 2 ? 11.5 : 10.5) - (n === 4 ? 1.5 : n === 3 ? 0.5 : 0);
  const eCell = n === 4 ? 74 : 84;
  const eFont = n === 4 ? '11px' : '12px';
  return { vCell, vFont, uCell, uFont: `${uFont}px`, eCell, eFont };
}

const UPRIGHT = { fontStyle: 'normal' };
const MINUS = (key) => <span key={key} style={{ ...UPRIGHT, margin: '0 2px' }}>&minus;</span>;

// -----------------------------------------------------------
// Cell display helpers
// -----------------------------------------------------------
function sub(t) {
  return <span style={subStyle}>{t}</span>;
}

function vCellOf(k, i, fontSize) {
  return { display: <>v{sub(`${k + 1},${i + 1}`)}</>, style: { fontSize } };
}

// u_{k,i} = v_{k,i} − c_{k,1} u_{1,i} − … − c_{k,upTo} u_{upTo,i}
function uCellOf(k, i, upTo, fontSize) {
  const parts = [<React.Fragment key="v">v{sub(`${k + 1},${i + 1}`)}</React.Fragment>];
  for (let j = 0; j < upTo; j++) {
    parts.push(MINUS(`m${j}`));
    parts.push(
      <React.Fragment key={`t${j}`}>
        c{sub(`${k + 1},${j + 1}`)}u{sub(`${j + 1},${i + 1}`)}
      </React.Fragment>
    );
  }
  return { display: <>{parts}</>, style: { fontSize } };
}

function eCellOf(k, i, fontSize) {
  return {
    display: (
      <>
        u{sub(`${k + 1},${i + 1}`)}
        <span style={{ ...UPRIGHT, margin: '0 2px' }}>/</span>
        <span style={UPRIGHT}>‖</span>u{sub(k + 1)}<span style={UPRIGHT}>‖</span>
      </>
    ),
    style: { fontSize }
  };
}

function uHtml(k, upTo) {
  let s = `v<sub>${k + 1},i</sub>`;
  for (let j = 0; j < upTo; j++) s += ` − c<sub>${k + 1},${j + 1}</sub>u<sub>${j + 1},i</sub>`;
  return s;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(k = 3, n = 3) {
  const { vCell, vFont, uCell, uFont, eCell, eFont } = sizingFor(k, n);

  const V = {
    symbol: 'v', rows: k, cols: n, label: 'V',
    cellSize: vCell,
    cellOverrides: (() => {
      const o = {};
      for (let r = 0; r < k; r++) for (let i = 0; i < n; i++) o[`${r},${i}`] = vCellOf(r, i, vFont);
      return o;
    })()
  };

  // state[r] = number of subtracted terms in row r, or -1 for empty
  const U = (state) => ({
    symbol: 'u', rows: k, cols: n, label: 'U',
    cellSize: uCell,
    cellOverrides: (() => {
      const o = {};
      for (let r = 0; r < k; r++) {
        for (let i = 0; i < n; i++) {
          o[`${r},${i}`] = state[r] < 0 ? { empty: true } : uCellOf(r, i, state[r], uFont);
        }
      }
      return o;
    })()
  });

  const E = (filledUpTo) => ({
    symbol: 'e', rows: k, cols: n, label: 'E',
    cellSize: eCell,
    cellOverrides: (() => {
      const o = {};
      for (let r = 0; r < k; r++) {
        for (let i = 0; i < n; i++) {
          o[`${r},${i}`] = r <= filledUpTo ? eCellOf(r, i, eFont) : { empty: true };
        }
      }
      return o;
    })()
  });

  const layoutOrth = [
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'U' }
  ];
  const layoutNorm = [
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'E' }
  ];

  const scenes = [];
  const state = new Array(k).fill(-1);
  const rowsUpTo = (r, style) => {
    const out = [];
    for (let t = 0; t <= r; t++) out.push([t, style]);
    return out;
  };

  scenes.push({
    phase: 'intro',
    title: `Gram–Schmidt on ${k} vectors in ℝ<sup>${n}</sup>`,
    formula:
      `The rows of V are the input vectors v<sub>1</sub>…v<sub>${k}</sub>. Gram–Schmidt replaces them, ` +
      'in order, by vectors u<sub>1</sub>…u<sub>' + k + '</sub> that are <strong>mutually perpendicular</strong> ' +
      'and span the same space: keep the first, and from each later vector subtract its projections onto ' +
      'the ones already done. A final pass divides each u<sub>k</sub> by its length to make the set ' +
      '<strong>orthonormal</strong>.',
    matrices: { V, U: U(state) },
    layout: layoutOrth,
    highlights: {}
  });

  // u_1 = v_1
  state[0] = 0;
  scenes.push({
    phase: 'keep',
    title: 'u<sub>1</sub> = v<sub>1</sub>',
    formula:
      'The first vector is kept as it is. There is nothing yet to be perpendicular to, so ' +
      'u<sub>1</sub> = v<sub>1</sub> sets the first direction of the orthogonal set.',
    matrices: { V, U: U(state) },
    layout: layoutOrth,
    highlights: {
      V: { rows: [[0, 'primary']] },
      U: { rows: [[0, 'accent']] }
    }
  });

  // later vectors
  for (let r = 1; r < k; r++) {
    state[r] = 0;
    scenes.push({
      phase: 'start',
      title: `Start u<sub>${r + 1}</sub> from v<sub>${r + 1}</sub>`,
      formula:
        `Copy v<sub>${r + 1}</sub> into row ${r + 1} of U. It is not yet perpendicular to ` +
        (r === 1 ? 'u<sub>1</sub>' : `u<sub>1</sub>…u<sub>${r}</sub>`) +
        `; the next ${r === 1 ? 'scene subtracts' : r + ' scenes subtract'} the part${r === 1 ? '' : 's'} of ` +
        `v<sub>${r + 1}</sub> that ${r === 1 ? 'lies' : 'lie'} along ${r === 1 ? 'it' : 'them'}.`,
      matrices: { V, U: U(state) },
      layout: layoutOrth,
      highlights: {
        V: { rows: [[r, 'primary']] },
        U: { rows: [[r, 'accent']] }
      }
    });

    for (let j = 0; j < r; j++) {
      state[r] = j + 1;
      scenes.push({
        phase: 'subtract',
        title: `u<sub>${r + 1}</sub> −= c<sub>${r + 1},${j + 1}</sub> u<sub>${j + 1}</sub>, ` +
          `c<sub>${r + 1},${j + 1}</sub> = (v<sub>${r + 1}</sub> · u<sub>${j + 1}</sub>) / (u<sub>${j + 1}</sub> · u<sub>${j + 1}</sub>)`,
        formula:
          `Project v<sub>${r + 1}</sub> onto u<sub>${j + 1}</sub> — the coefficient is ` +
          `c<sub>${r + 1},${j + 1}</sub> = (v<sub>${r + 1}</sub> · u<sub>${j + 1}</sub>) / (u<sub>${j + 1}</sub> · u<sub>${j + 1}</sub>) — ` +
          `and subtract that projection, component by component. Row ${r + 1} of U now reads ` +
          `<strong>${uHtml(r, j + 1)}</strong>` +
          (j + 1 === r
            ? `, and it is perpendicular to ${r === 1 ? 'u<sub>1</sub>' : `every earlier u`}.`
            : `; it is perpendicular to u<sub>${j + 1}</sub>, with ${r - j - 1} projection${r - j - 1 === 1 ? '' : 's'} still to remove.`),
        matrices: { V, U: U(state) },
        layout: layoutOrth,
        highlights: {
          V: { rows: [[r, 'primary']] },
          U: { rows: [[j, 'secondary'], [r, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'U', row: j, col: 0 },
            to: { matrix: 'U', row: r, col: 0 },
            style: 'secondary', curveOffset: 30, curveDirection: 'up'
          }
        ]
      });
    }
  }

  // normalize
  for (let r = 0; r < k; r++) {
    scenes.push({
      phase: 'normalize',
      title: `e<sub>${r + 1}</sub> = u<sub>${r + 1}</sub> / ‖u<sub>${r + 1}</sub>‖`,
      formula:
        `Divide every component of u<sub>${r + 1}</sub> by its length ‖u<sub>${r + 1}</sub>‖ = ` +
        `√(u<sub>${r + 1}</sub> · u<sub>${r + 1}</sub>). The direction is unchanged, so e<sub>${r + 1}</sub> is still ` +
        'perpendicular to the others, and its length is now exactly 1.',
      matrices: { U: U(state), E: E(r) },
      layout: layoutNorm,
      highlights: {
        U: { rows: [[r, 'primary']] },
        E: { rows: [[r, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: r, col: n - 1 },
          to: { matrix: 'E', row: r, col: 0 },
          style: 'primary', curveOffset: 28, curveDirection: 'up'
        }
      ]
    });
  }

  scenes.push({
    phase: 'done',
    title: 'Done',
    formula:
      `The rows of E are an <strong>orthonormal set</strong>: e<sub>i</sub> · e<sub>j</sub> = 0 for i ≠ j and ` +
      'e<sub>i</sub> · e<sub>i</sub> = 1. They span exactly the same space as v<sub>1</sub>…v<sub>' + k + '</sub>, ' +
      'and each e<sub>k</sub> lies in the span of v<sub>1</sub>…v<sub>k</sub> — the process never looks ahead. ' +
      'Written as columns, E is the Q of the QR decomposition and the coefficients c<sub>k,j</sub> together with ' +
      'the lengths ‖u<sub>k</sub>‖ fill in R.',
    matrices: { U: U(state), E: E(k - 1) },
    layout: layoutNorm,
    highlights: { E: { rows: rowsUpTo(k - 1, 'accent') } }
  });

  return scenes;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="gs-info"
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
      <span className="gs-tip">{tip}</span>
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
          className="gs-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="gs-stepper-btn"
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
export default function GramSchmidtWrapper({
  defaultK = 3,
  defaultN = 3,
  kRange = [2, 3],
  nRange = [2, 3, 4],
  explanations = null,
  title = 'Gram–Schmidt Process',
  subtitle = 'Symbolic visualization of Gram–Schmidt — keep, subtract projections, normalize — on two or three vectors.',
  defaultSpeed = 1500
}) {
  const [k, setK] = useState(defaultK);
  const [n, setN] = useState(defaultN);

  const scenes = useMemo(() => {
    const built = buildScenes(k, n);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [k, n, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: GS_CSS }} />

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
          <FieldLabel info={GS_INFO}>Number of vectors</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>k</span>
            <Stepper value={k} onChange={setK} min={kRange[0]} max={kRange[kRange.length - 1]} />
          </div>
        </div>
        <div>
          <FieldLabel>Vector length</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>n</span>
            <Stepper value={n} onChange={setN} min={nRange[0]} max={nRange[nRange.length - 1]} />
            <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '8px' }}>
              {k} vectors in &#8477;<sup>{n}</sup>{k > n ? ' — more vectors than dimensions: the set cannot be independent' : ''}
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
