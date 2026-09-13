'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// ProjectionWrapper v1
// Visualizes the orthogonal projection of u onto v:
//
//   c        = (u · v) / ‖v‖²
//   proj_v u = c · v
//   u − proj_v u   (the remainder, perpendicular to v)
//
// Phases:
//   1 — pair      : u_i with v_i, one pair per scene, building the
//                   dot product u · v (running sum in the caption)
//   2 — dot       : the u · v slot fills (one scene)
//   3 — normsq    : ‖v‖² = v · v fills its slot (one scene)
//   4 — coeff     : c = (u · v) / ‖v‖² fills (one scene)
//   5 — scale     : proj_i = c · v_i, one component per scene
//   6 — remainder : r_i = u_i − c · v_i, one component per scene
//                   (only in the 'decomposition' scenario)
//
// SCENARIO:
//   - 'projection'    → phases 1–5, ends at proj_v u
//   - 'decomposition' → phases 1–6, ends at u = proj + remainder
//
// MODE prop:
//   - mode='both'          (default) → scenario pills shown
//   - mode='projection'    → locked, no pills
//   - mode='decomposition' → locked, no pills
//
// explanations prop (optional): { intro, pair, dot, normsq, coeff,
// scale, remainder, done } — raw HTML appended to the caption of the
// matching scenes (Line 1 anchor mesh, same hook the siblings use).
//
// Standalone file: imports the core, never modifies it. The scene
// builder and phase helper are exported for the frozen-state diagrams.
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

const PROJ_INFO =
  'The projection of u onto v is the part of u that points along v: the ' +
  'vector c·v with c = (u·v)/‖v‖². Its length is |u·v|/‖v‖, the scalar ' +
  'projection. What is left over, u − c·v, is perpendicular to v, so u ' +
  'splits into a piece along v and a piece at right angles to it. Both ' +
  'vectors must have the same length, and v must be non-zero.';

const PJ_CSS = `
  .pj-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .pj-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .pj-pill:hover { border-color: #94a3b8; }
  .pj-pill-active:hover { border-color: #2563eb; }

  .pj-info:hover, .pj-info:focus { background: #bfdbfe; outline: none; }

  .pj-info .pj-tip {
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
  .pj-info .pj-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .pj-info:hover .pj-tip, .pj-info:focus .pj-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Sizing
// -----------------------------------------------------------
function sizingFor(n) {
  if (n <= 2)       return { cellPx: 64, vFont: '16px', wideCell: 82, wideFont: '12.5px' };
  else if (n === 3) return { cellPx: 60, vFont: '15px', wideCell: 78, wideFont: '12px' };
  else if (n === 4) return { cellPx: 52, vFont: '13px', wideCell: 70, wideFont: '11px' };
  else              return { cellPx: 46, vFont: '12px', wideCell: 62, wideFont: '10px' };
}

const SLOT_CELL = 84;
const SLOT_FONT = '14px';
const NORM_SQ = '‖v‖²';
const PROJ_LABEL = 'proj';
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

const DOT_CELL = {
  display: <>u<span style={{ ...UPRIGHT, margin: '0 2px' }}>&middot;</span>v</>,
  style: { fontSize: SLOT_FONT }
};

const NORMSQ_CELL = {
  display: <>v<span style={{ ...UPRIGHT, margin: '0 2px' }}>&middot;</span>v</>,
  style: { fontSize: SLOT_FONT }
};

const COEFF_CELL = {
  display: (
    <>
      u<span style={{ ...UPRIGHT, margin: '0 1px' }}>&middot;</span>v
      <span style={{ ...UPRIGHT, margin: '0 3px' }}>/</span>
      <span style={UPRIGHT}>{NORM_SQ}</span>
    </>
  ),
  style: { fontSize: '12px' }
};

function projCell(j, fontSize) {
  return {
    display: <>c<span style={{ ...UPRIGHT, margin: '0 1px' }}>&middot;</span>v{sub(j + 1)}</>,
    style: { fontSize }
  };
}

function remainderCell(j, fontSize) {
  return {
    display: (
      <>
        u{sub(j + 1)}
        <span style={{ ...UPRIGHT, margin: '0 2px' }}>&minus;</span>
        c<span style={{ ...UPRIGHT, margin: '0 1px' }}>&middot;</span>v{sub(j + 1)}
      </>
    ),
    style: { fontSize }
  };
}

function rowOverrides(n, cellFor, filledUpTo) {
  const over = {};
  for (let j = 0; j < n; j++) {
    over[`0,${j}`] = (filledUpTo === undefined || j <= filledUpTo) ? cellFor(j) : { empty: true };
  }
  return over;
}

function slot(label, filledCell, filled) {
  return {
    symbol: 's', rows: 1, cols: 1, label,
    showDimensions: false,
    cellSize: SLOT_CELL,
    cellOverrides: { '0,0': filled ? filledCell : { empty: true } }
  };
}

function runningSum(n, upTo) {
  const terms = [];
  for (let j = 0; j <= upTo; j++) terms.push(`u<sub>${j + 1}</sub>v<sub>${j + 1}</sub>`);
  return terms.join(' + ');
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(n, scenario = 'decomposition') {
  const { cellPx, vFont, wideCell, wideFont } = sizingFor(n);
  const withRemainder = scenario === 'decomposition';

  const U = {
    symbol: 'u', rows: 1, cols: n, label: 'u',
    cellSize: cellPx,
    cellOverrides: rowOverrides(n, (j) => entryCell('u', j, vFont))
  };
  const V = {
    symbol: 'v', rows: 1, cols: n, label: 'v',
    cellSize: cellPx,
    cellOverrides: rowOverrides(n, (j) => entryCell('v', j, vFont))
  };
  const D = (filled) => slot('u · v', DOT_CELL, filled);
  const E = (filled) => slot(NORM_SQ, NORMSQ_CELL, filled);
  const C = (filled) => slot('c', COEFF_CELL, filled);
  const P = (filledUpTo) => ({
    symbol: 'p', rows: 1, cols: n, label: PROJ_LABEL,
    cellSize: wideCell,
    cellOverrides: rowOverrides(n, (j) => projCell(j, wideFont), filledUpTo)
  });
  const R = (filledUpTo) => ({
    symbol: 'r', rows: 1, cols: n, label: 'u − proj',
    cellSize: wideCell,
    cellOverrides: rowOverrides(n, (j) => remainderCell(j, wideFont), filledUpTo)
  });

  const layoutDot = [
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'D' }
  ];
  const layoutNormSq = [
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'V2' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'E' }
  ];
  const layoutCoeff = [
    { type: 'matrix', ref: 'D' },
    { type: 'operator', symbol: '÷' },
    { type: 'matrix', ref: 'E' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'C' }
  ];
  const layoutScale = [
    { type: 'matrix', ref: 'C' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'P' }
  ];
  const layoutRemainder = [
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: '−' },
    { type: 'matrix', ref: 'P' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'R' }
  ];

  const scenes = [];

  // Intro
  scenes.push({
    title: withRemainder
      ? 'Projection of u onto v, and the perpendicular remainder'
      : 'Projection of u onto v',
    formula:
      `u and v both have length ${n}. The projection of u onto v is the part of u that ` +
      'points along v: <strong>proj<sub>v</sub> u = c · v</strong> with ' +
      '<strong>c = (u · v) / ‖v‖²</strong>. The run computes u · v, then ‖v‖², ' +
      'then the coefficient c, then scales v by c' +
      (withRemainder
        ? ', and finally subtracts the projection from u to expose the remainder, which is perpendicular to v.'
        : '.'),
    matrices: { U, V, D: D(false) },
    layout: layoutDot,
    highlights: {}
  });

  // Phase 1: pair components toward u · v
  for (let j = 0; j < n; j++) {
    scenes.push({
      title: `Phase 1 — pair: u<sub>${j + 1}</sub>v<sub>${j + 1}</sub>`,
      formula:
        `Multiply component ${j + 1} of u by component ${j + 1} of v and add it to the running ` +
        `sum: <strong>${runningSum(n, j)}</strong>` +
        (j < n - 1 ? ' + ⋯' : '') + '.',
      matrices: { U, V, D: D(false) },
      layout: layoutDot,
      highlights: {
        U: { cells: [[0, j, 'pairA']] },
        V: { cells: [[0, j, 'pairB']] },
        D: { cells: [[0, 0, 'targetPending']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: 0, col: j },
          to: { matrix: 'D', row: 0, col: 0 },
          style: 'primary', curveOffset: 36, curveDirection: 'up'
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: 0, col: j },
          to: { matrix: 'D', row: 0, col: 0 },
          style: 'secondary', curveOffset: 28, curveDirection: 'down'
        }
      ]
    });
  }

  // Phase 2: the dot product slot fills
  {
    const allU = [];
    const allV = [];
    for (let j = 0; j < n; j++) { allU.push([0, j, 'primary']); allV.push([0, j, 'secondary']); }
    scenes.push({
      title: `Phase 2 — dot product: u · v = ${runningSum(n, n - 1)}`,
      formula:
        'The running sum is complete. u · v is a single number that measures how much ' +
        'u leans along v: positive when they point the same way, negative when opposite, ' +
        'zero when perpendicular.',
      matrices: { U, V, D: D(true) },
      layout: layoutDot,
      highlights: {
        U: { cells: allU },
        V: { cells: allV },
        D: { cells: [[0, 0, 'accent']] }
      }
    });
  }

  // Phase 3: ‖v‖² = v · v
  {
    const allV = [];
    for (let j = 0; j < n; j++) allV.push([0, j, 'secondary']);
    const sq = [];
    for (let j = 0; j < n; j++) sq.push(`v<sub>${j + 1}</sub>²`);
    scenes.push({
      title: `Phase 3 — squared length: ‖v‖² = v · v = ${sq.join(' + ')}`,
      formula:
        'Dot v with itself: the same pairing sweep, with every product a square. ' +
        'This is the squared magnitude of v, and it is the number the dot product must be ' +
        'divided by so that the projection does not depend on how long v is.',
      matrices: { V, V2: V, E: E(true) },
      layout: layoutNormSq,
      highlights: {
        V: { cells: allV },
        V2: { cells: allV },
        E: { cells: [[0, 0, 'accent']] }
      }
    });
  }

  // Phase 4: the coefficient
  scenes.push({
    title: 'Phase 4 — coefficient: c = (u · v) / ‖v‖²',
    formula:
      'Divide the dot product by the squared length of v. The quotient c is a plain scalar: ' +
      'how many copies of v are needed to reach the foot of the perpendicular dropped from u ' +
      'onto the line through v. If v is a unit vector, ‖v‖² = 1 and c is just u · v.',
    matrices: { D: D(true), E: E(true), C: C(true) },
    layout: layoutCoeff,
    highlights: {
      D: { cells: [[0, 0, 'primary']] },
      E: { cells: [[0, 0, 'secondary']] },
      C: { cells: [[0, 0, 'accent']] }
    },
    overlays: [
      {
        type: 'cell-arrow-curve',
        from: { matrix: 'D', row: 0, col: 0 },
        to: { matrix: 'C', row: 0, col: 0 },
        style: 'primary', curveOffset: 40, curveDirection: 'up'
      },
      {
        type: 'cell-arrow-curve',
        from: { matrix: 'E', row: 0, col: 0 },
        to: { matrix: 'C', row: 0, col: 0 },
        style: 'secondary', curveOffset: 30, curveDirection: 'down'
      }
    ]
  });

  // Phase 5: scale v by c
  for (let j = 0; j < n; j++) {
    scenes.push({
      title: `Phase 5 — scale: proj<sub>${j + 1}</sub> = c · v<sub>${j + 1}</sub>`,
      formula:
        `Multiply component ${j + 1} of v by c. Every component is scaled by the same c, so the ` +
        'projection lies exactly along v — it is a scalar multiple of v, stretched or shrunk ' +
        '(or reversed, if c is negative) to the right length.',
      matrices: { C: C(true), V, P: P(j) },
      layout: layoutScale,
      highlights: {
        C: { cells: [[0, 0, 'primary']] },
        V: { cells: [[0, j, 'secondary']] },
        P: { cells: [[0, j, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'C', row: 0, col: 0 },
          to: { matrix: 'P', row: 0, col: j },
          style: 'primary', curveOffset: 40, curveDirection: 'up'
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: 0, col: j },
          to: { matrix: 'P', row: 0, col: j },
          style: 'secondary', curveOffset: 28, curveDirection: 'down'
        }
      ]
    });
  }

  // Phase 6: remainder (decomposition only)
  if (withRemainder) {
    for (let j = 0; j < n; j++) {
      scenes.push({
        title: `Phase 6 — remainder: u<sub>${j + 1}</sub> − c · v<sub>${j + 1}</sub>`,
        formula:
          `Subtract component ${j + 1} of the projection from component ${j + 1} of u. ` +
          'What is left is the part of u that has no component along v.',
        matrices: { U, P: P(n - 1), R: R(j) },
        layout: layoutRemainder,
        highlights: {
          U: { cells: [[0, j, 'primary']] },
          P: { cells: [[0, j, 'secondary']] },
          R: { cells: [[0, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'U', row: 0, col: j },
            to: { matrix: 'R', row: 0, col: j },
            style: 'primary', curveOffset: 40, curveDirection: 'up'
          },
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'P', row: 0, col: j },
            to: { matrix: 'R', row: 0, col: j },
            style: 'secondary', curveOffset: 28, curveDirection: 'down'
          }
        ]
      });
    }
  }

  // Done
  if (withRemainder) {
    scenes.push({
      title: 'Done',
      formula:
        'u has been split into two pieces: the projection c · v, which lies along v, and the ' +
        'remainder u − c · v, which is <strong>perpendicular to v</strong> — dot it with v and ' +
        'the terms cancel to zero. Adding the two pieces back gives u. This is the orthogonal ' +
        'decomposition of u with respect to v.',
      matrices: { U, P: P(n - 1), R: R(n - 1) },
      layout: layoutRemainder,
      highlights: {}
    });
  } else {
    scenes.push({
      title: 'Done',
      formula:
        'proj<sub>v</sub> u is filled. It is the scalar multiple of v closest to u, with ' +
        'length |u · v| / ‖v‖ — the scalar projection. The difference u − proj<sub>v</sub> u ' +
        'is perpendicular to v; switch to the decomposition scenario to see it computed.',
      matrices: { C: C(true), V, P: P(n - 1) },
      layout: layoutScale,
      highlights: {}
    });
  }

  return scenes;
}

// Phase key for scene i in a run built with (n, scenario).
export function phaseKeyFor(i, n, scenario = 'decomposition') {
  const total = scenario === 'decomposition' ? 3 * n + 5 : 2 * n + 5;
  if (i === 0) return 'intro';
  if (i === total - 1) return 'done';
  if (i <= n) return 'pair';
  if (i === n + 1) return 'dot';
  if (i === n + 2) return 'normsq';
  if (i === n + 3) return 'coeff';
  if (i <= 2 * n + 3) return 'scale';
  return 'remainder';
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="pj-info"
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
      <span className="pj-tip">{tip}</span>
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
          className="pj-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="pj-stepper-btn"
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
      className={active ? 'pj-pill pj-pill-active' : 'pj-pill'}
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
export default function ProjectionWrapper({
  mode = 'both',
  defaultScenario = 'decomposition',
  defaultN = 3,
  vectorRange = [1, 2, 3, 4, 5],
  explanations = null,
  title = 'Vector Projection',
  subtitle = 'Symbolic visualization of proj_v u = ((u · v) / ‖v‖²) · v — dot, square, divide, scale — and the perpendicular remainder u − proj_v u.',
  defaultSpeed = 1300
}) {
  const locked = mode === 'projection' || mode === 'decomposition';

  const [scenarioState, setScenarioState] = useState(defaultScenario);
  const scenario = locked ? mode : scenarioState;

  const [n, setN] = useState(defaultN);
  const min = vectorRange[0];
  const max = vectorRange[vectorRange.length - 1];

  const scenes = useMemo(() => {
    const built = buildScenes(n, scenario);
    if (!explanations) return built;
    return built.map((sc, i) => {
      const extra = explanations[phaseKeyFor(i, n, scenario)];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [n, scenario, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: PJ_CSS }} />

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
            <FieldLabel info={PROJ_INFO}>Scenario</FieldLabel>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Pill
                active={scenario === 'projection'}
                onClick={() => setScenarioState('projection')}
              >
                Projection only &nbsp;
                <span style={mathInlineStyle}>proj<sub>v</sub> u</span>
              </Pill>
              <Pill
                active={scenario === 'decomposition'}
                onClick={() => setScenarioState('decomposition')}
              >
                Projection and remainder &nbsp;
                <span style={mathInlineStyle}>u = proj<sub>v</sub> u + (u &minus; proj<sub>v</sub> u)</span>
              </Pill>
            </div>
          </div>
        )}

        <div>
          <FieldLabel info={locked ? PROJ_INFO : null}>
            Vector length (shared by u and v)
          </FieldLabel>
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
            <Stepper value={n} onChange={setN} min={min} max={max} />
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
