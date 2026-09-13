'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// MagnitudeWrapper v1
// Visualizes the magnitude (Euclidean norm) of a vector and,
// optionally, its normalization to a unit vector:
//
//   ‖v‖ = √( v1² + v2² + … + vn² )
//   v̂   = v / ‖v‖ ,  v̂_i = v_i / ‖v‖
//
// Phases:
//   1 — square    : each component v_i → v_i², one per scene
//   2 — root      : sum the squares and take the square root,
//                   filling the ‖v‖ slot (one scene)
//   3 — normalize : each component v_i → v_i / ‖v‖, one per
//                   scene (only in the 'unit' scenario)
//
// SCENARIO:
//   - 'magnitude' → phases 1–2, ends at ‖v‖
//   - 'unit'      → phases 1–3, ends at the unit vector v̂
//
// MODE prop:
//   - mode='both'      (default) → scenario pills shown, user
//                                  toggles, starts on defaultScenario
//   - mode='magnitude' → locked, no pills
//   - mode='unit'      → locked, no pills
//
// explanations prop (optional): { intro, square, root, normalize,
// done } — raw HTML appended to the caption of matching scenes
// (Line 1 anchor mesh, same hook the sibling wrappers use).
//
// Standalone file: imports the core, never modifies it. The
// scene builder is exported for the frozen-state diagrams.
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

const NORM_INFO =
  'The magnitude (or Euclidean norm) of a vector v is the square root of ' +
  'the sum of the squares of its components — the Pythagorean theorem ' +
  'extended to any number of components. Dividing every component by that ' +
  'one number rescales v to length 1 without changing its direction; the ' +
  'result is the unit vector in the direction of v. Only the zero vector ' +
  'cannot be normalized, because its magnitude is zero.';

const MG_CSS = `
  .mg-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .mg-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .mg-pill:hover { border-color: #94a3b8; }
  .mg-pill-active:hover { border-color: #2563eb; }

  .mg-info:hover, .mg-info:focus { background: #bfdbfe; outline: none; }

  .mg-info .mg-tip {
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
  .mg-info .mg-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .mg-info:hover .mg-tip, .mg-info:focus .mg-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Sizing
// -----------------------------------------------------------
function sizingFor(n) {
  if (n <= 2)       return { cellPx: 64, vFont: '16px', sqFont: '14px', uCell: 76, uFont: '12.5px' };
  else if (n === 3) return { cellPx: 60, vFont: '15px', sqFont: '13px', uCell: 72, uFont: '12px' };
  else if (n === 4) return { cellPx: 52, vFont: '13px', sqFont: '12px', uCell: 66, uFont: '11px' };
  else              return { cellPx: 46, vFont: '12px', sqFont: '11px', uCell: 60, uFont: '10px' };
}

const NORM_CELL = 128;
const NORM_FONT = '12.5px';
const NORM_LABEL = '‖v‖';       // ‖v‖
const UNIT_LABEL = 'v̂';             // v̂
const UPRIGHT = { fontStyle: 'normal' };

// -----------------------------------------------------------
// Cell display helpers
// -----------------------------------------------------------
function sub(t) {
  return <span style={subStyle}>{t}</span>;
}

function vCell(j, fontSize) {
  return { display: <>v{sub(j + 1)}</>, style: { fontSize } };
}

function squareCell(j, fontSize) {
  // the superscript two is a literal character so it survives the SVG freeze
  return { display: <>v{sub(j + 1)}<span style={UPRIGHT}>&#178;</span></>, style: { fontSize } };
}

function normCell(n) {
  // √(v1² + v2² + v3²) written out up to three terms, elided beyond that
  const term = (j) => <React.Fragment key={j}>v{sub(j + 1)}<span style={UPRIGHT}>&#178;</span></React.Fragment>;
  const plus = (k) => <span key={`p${k}`} style={{ ...UPRIGHT, margin: '0 2px' }}>+</span>;
  const parts = [];
  if (n <= 3) {
    for (let j = 0; j < n; j++) {
      if (j > 0) parts.push(plus(j));
      parts.push(term(j));
    }
  } else {
    parts.push(term(0), plus(1), <span key="e" style={UPRIGHT}>&#8943;</span>, plus(2), term(n - 1));
  }
  return {
    display: (
      <>
        <span style={UPRIGHT}>&#8730;(</span>
        {parts}
        <span style={UPRIGHT}>)</span>
      </>
    ),
    style: { fontSize: NORM_FONT }
  };
}

function unitCell(j, fontSize) {
  return {
    display: (
      <>
        v{sub(j + 1)}
        <span style={{ ...UPRIGHT, margin: '0 2px' }}>/</span>
        <span style={UPRIGHT}>{NORM_LABEL}</span>
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

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(n, scenario = 'unit') {
  const { cellPx, vFont, sqFont, uCell, uFont } = sizingFor(n);
  const withUnit = scenario === 'unit';

  const V = {
    symbol: 'v', rows: 1, cols: n, label: 'v',
    cellSize: cellPx,
    cellOverrides: rowOverrides(n, (j) => vCell(j, vFont))
  };
  const S = (filledUpTo) => ({
    symbol: 's', rows: 1, cols: n, label: 'squares',
    cellSize: cellPx,
    cellOverrides: rowOverrides(n, (j) => squareCell(j, sqFont), filledUpTo)
  });
  const N = (filled) => ({
    symbol: 'r', rows: 1, cols: 1, label: NORM_LABEL,
    showDimensions: false,
    cellSize: NORM_CELL,
    cellOverrides: { '0,0': filled ? normCell(n) : { empty: true } }
  });
  const U = (filledUpTo) => ({
    symbol: 'u', rows: 1, cols: n, label: UNIT_LABEL,
    cellSize: uCell,
    cellOverrides: rowOverrides(n, (j) => unitCell(j, uFont), filledUpTo)
  });

  const layoutA = [
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'S' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'N' }
  ];
  const layoutB = [
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '÷' },
    { type: 'matrix', ref: 'N' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'U' }
  ];

  const scenes = [];

  // Intro
  scenes.push({
    title: withUnit
      ? `Magnitude ‖v‖ and unit vector v̂`
      : `Magnitude ‖v‖`,
    formula:
      `v has ${n} component${n === 1 ? '' : 's'}. Its magnitude is ` +
      '<strong>‖v‖ = √(v<sub>1</sub>² + ⋯ + v<sub>' + n + '</sub>²)</strong>: ' +
      'square every component, add the squares, take the square root. ' +
      (withUnit
        ? 'Dividing each component by that one number then gives the unit vector ' +
          'v̂ = v / ‖v‖, which points the same way as v and has length 1.'
        : 'The result is a single non-negative number — the length of the arrow v.'),
    matrices: { V, S: S(-1), N: N(false) },
    layout: layoutA,
    highlights: {}
  });

  // Phase 1: square each component
  for (let j = 0; j < n; j++) {
    scenes.push({
      title: `Phase 1 — square: v<sub>${j + 1}</sub> → v<sub>${j + 1}</sub>²`,
      formula:
        `Multiply component ${j + 1} of v by itself. Squaring discards the sign, ` +
        'so a negative component contributes exactly as much as a positive one of the same size.',
      matrices: { V, S: S(j), N: N(false) },
      layout: layoutA,
      highlights: {
        V: { cells: [[0, j, 'primary']] },
        S: { cells: [[0, j, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: 0, col: j },
          to: { matrix: 'S', row: 0, col: j },
          style: 'primary', curveOffset: 34, curveDirection: 'up'
        }
      ]
    });
  }

  // Phase 2: sum and root
  {
    const allS = [];
    for (let j = 0; j < n; j++) allS.push([0, j, 'secondary']);
    const arrows = [];
    for (let j = 0; j < n; j++) {
      arrows.push({
        type: 'cell-arrow-curve',
        from: { matrix: 'S', row: 0, col: j },
        to: { matrix: 'N', row: 0, col: 0 },
        style: 'secondary', curveOffset: 30 + 6 * (n - 1 - j), curveDirection: 'up'
      });
    }
    scenes.push({
      title: `Phase 2 — sum and root: ‖v‖ = √(v<sub>1</sub>² + ⋯ + v<sub>${n}</sub>²)`,
      formula:
        `Add the ${n} square${n === 1 ? '' : 's'} and take the square root of the total. ` +
        'The sum of squares is ‖v‖², the squared length; the root undoes the ' +
        'squaring and returns a length in the same units as the components. ' +
        (n === 2
          ? 'For two components this is exactly the Pythagorean theorem.'
          : 'This is the Pythagorean theorem applied ' + (n - 1) + ' time' + (n === 2 ? '' : 's') + ' in a row.'),
      matrices: { V, S: S(n - 1), N: N(true) },
      layout: layoutA,
      highlights: {
        S: { cells: allS },
        N: { cells: [[0, 0, 'accent']] }
      },
      overlays: arrows
    });
  }

  // Phase 3: normalize (unit scenario only)
  if (withUnit) {
    for (let j = 0; j < n; j++) {
      scenes.push({
        title: `Phase 3 — normalize: v̂<sub>${j + 1}</sub> = v<sub>${j + 1}</sub> / ‖v‖`,
        formula:
          `Divide component ${j + 1} of v by the magnitude. Every component is divided by ` +
          'the <strong>same</strong> number, so the direction of v is unchanged; only its ' +
          'length is rescaled.',
        matrices: { V, N: N(true), U: U(j) },
        layout: layoutB,
        highlights: {
          V: { cells: [[0, j, 'primary']] },
          N: { cells: [[0, 0, 'secondary']] },
          U: { cells: [[0, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'V', row: 0, col: j },
            to: { matrix: 'U', row: 0, col: j },
            style: 'primary', curveOffset: 36, curveDirection: 'up'
          },
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'N', row: 0, col: 0 },
            to: { matrix: 'U', row: 0, col: j },
            style: 'secondary', curveOffset: 28, curveDirection: 'down'
          }
        ]
      });
    }
  }

  // Done
  if (withUnit) {
    scenes.push({
      title: 'Done',
      formula:
        'v̂ is filled. Every component of v has been divided by ‖v‖, so ' +
        '‖v̂‖ = ‖v‖ / ‖v‖ = 1: the unit vector has length one ' +
        'and points exactly where v points. The original v is recovered as ' +
        '‖v‖ · v̂ — a length times a direction.',
      matrices: { V, N: N(true), U: U(n - 1) },
      layout: layoutB,
      highlights: {}
    });
  } else {
    scenes.push({
      title: 'Done',
      formula:
        '‖v‖ is filled. The magnitude is a single non-negative number: zero only ' +
        'for the zero vector, and otherwise the length of the arrow v measured with the ' +
        'Pythagorean theorem. Scaling v by k scales ‖v‖ by |k|.',
      matrices: { V, S: S(n - 1), N: N(true) },
      layout: layoutA,
      highlights: {}
    });
  }

  return scenes;
}

// Phase key for scene i in a run built with (n, scenario) — used by the
// explanations hook and by the diagrams module.
export function phaseKeyFor(i, n, scenario = 'unit') {
  const total = scenario === 'unit' ? 2 * n + 3 : n + 3;
  if (i === 0) return 'intro';
  if (i === total - 1) return 'done';
  if (i <= n) return 'square';
  if (i === n + 1) return 'root';
  return 'normalize';
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="mg-info"
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
      <span className="mg-tip">{tip}</span>
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
          className="mg-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="mg-stepper-btn"
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
      className={active ? 'mg-pill mg-pill-active' : 'mg-pill'}
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
export default function MagnitudeWrapper({
  mode = 'both',
  defaultScenario = 'unit',
  defaultN = 3,
  vectorRange = [1, 2, 3, 4, 5, 6],
  explanations = null,
  title = 'Magnitude and Unit Vector',
  subtitle = 'Symbolic visualization of ‖v‖ = √(v₁² + ⋯ + vₙ²), then v̂ = v / ‖v‖ — square, sum and root, divide.',
  defaultSpeed = 1300
}) {
  const locked = mode === 'magnitude' || mode === 'unit';

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
      <style dangerouslySetInnerHTML={{ __html: MG_CSS }} />

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
            <FieldLabel info={NORM_INFO}>Scenario</FieldLabel>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Pill
                active={scenario === 'magnitude'}
                onClick={() => setScenarioState('magnitude')}
              >
                Magnitude only &nbsp;
                <span style={mathInlineStyle}>{NORM_LABEL}</span>
              </Pill>
              <Pill
                active={scenario === 'unit'}
                onClick={() => setScenarioState('unit')}
              >
                Magnitude, then unit vector &nbsp;
                <span style={mathInlineStyle}>{UNIT_LABEL} = v / {NORM_LABEL}</span>
              </Pill>
            </div>
          </div>
        )}

        <div>
          <FieldLabel info={locked ? NORM_INFO : null}>
            Vector length
          </FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
              v
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
