'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// CrossProductWrapper v1
// Visualizes u × v = w for two vectors in R^3, one component
// at a time, by either of two methods:
//   - components  : the component formula
//                   w_k = u_{k+1} v_{k+2} − u_{k+2} v_{k+1}
//                   (indices cyclic 1→2→3→1)
//   - determinant : cofactor expansion of the symbolic
//                   | i  j  k  |
//                   | u1 u2 u3 |
//                   | v1 v2 v3 |
//                   along the first row
//
// The length is fixed at 3 — the cross product as a vector-
// valued product of two vectors exists only in R^3 — so there
// is no dimension stepper, only the method choice.
//
// MODE prop:
//   - mode='both'        (default) → method pills shown, user
//                                    toggles, starts on defaultMethod
//   - mode='components'  → locked to the component formula
//   - mode='determinant' → locked to the determinant expansion
//
// explanations prop (optional): { intro, components, determinant,
// done } — raw HTML appended to the caption of the matching
// scenes (Line 1 anchor mesh, same hook the sibling wrappers use).
//
// Standalone file: imports the core, never modifies it. The two
// scene builders are exported for the frozen-state diagrams.
// ===========================================================

const mathInlineStyle = {
  fontFamily: '\'Cambria Math\', Georgia, serif',
  fontStyle: 'italic'
};

const subStyle = {
  fontSize: '0.65em',
  verticalAlign: 'sub',
  lineHeight: 0,
  fontStyle: 'italic'
};

const CROSS_INFO =
  'The cross product u × v of two vectors in three-dimensional space is ' +
  'a third vector, perpendicular to both, whose length is the area of the ' +
  'parallelogram u and v span. Each component is a 2×2 determinant built ' +
  'from the other two rows of u and v. The determinant method writes i, j, k ' +
  'over u and v as a symbolic 3×3 determinant and expands along the first ' +
  'row — a mnemonic that produces exactly the same three expressions.';

const CP_CSS = `
  .cp-pill:hover { border-color: #94a3b8; }
  .cp-pill-active:hover { border-color: #2563eb; }

  .cp-info:hover, .cp-info:focus { background: #bfdbfe; outline: none; }

  .cp-info .cp-tip {
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
  .cp-info .cp-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .cp-info:hover .cp-tip, .cp-info:focus .cp-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Sizing — fixed, since the shape never changes.
// U and V are 3×1 columns; W holds a two-term product per cell
// so it gets a wider cell and a smaller font. M is the 3×3
// symbolic determinant.
// -----------------------------------------------------------
const UV_CELL = 58;
const UV_FONT = '17px';
const W_CELL = 96;
const W_FONT = '12.5px';
const M_CELL = 54;
const M_FONT = '15px';

const BASIS = ['i', 'j', 'k'];
const SIGN = ['+', '−', '+'];
const OP_MINUS = <span style={{ fontStyle: 'normal', margin: '0 3px' }}>&minus;</span>;

// -----------------------------------------------------------
// Cell display helpers
// -----------------------------------------------------------
function sub(t) {
  return <span style={subStyle}>{t}</span>;
}

function entryCell(sym, j, fontSize, extraStyle) {
  return {
    display: <>{sym}{sub(j + 1)}</>,
    style: { fontSize, ...(extraStyle || {}) }
  };
}

function basisCell(k, extraStyle) {
  return {
    display: BASIS[k],
    fontStyle: 'normal',
    style: { fontSize: M_FONT, fontWeight: 700, color: '#1e40af', ...(extraStyle || {}) }
  };
}

// w_k = u_a v_b − u_b v_a with (a, b) the two rows other than k,
// taken in cyclic order: k=0 → (1,2), k=1 → (2,0), k=2 → (0,1).
function pairFor(k) {
  return [(k + 1) % 3, (k + 2) % 3];
}

function productCell(k) {
  const [a, b] = pairFor(k);
  return {
    display: (
      <>
        u{sub(a + 1)}v{sub(b + 1)}
        {OP_MINUS}
        u{sub(b + 1)}v{sub(a + 1)}
      </>
    ),
    style: { fontSize: W_FONT }
  };
}

function productHtml(k) {
  const [a, b] = pairFor(k);
  return `u<sub>${a + 1}</sub>v<sub>${b + 1}</sub> − u<sub>${b + 1}</sub>v<sub>${a + 1}</sub>`;
}

function wOverrides(filledUpTo) {
  const over = {};
  for (let k = 0; k < 3; k++) {
    over[`${k},0`] = k <= filledUpTo ? productCell(k) : { empty: true };
  }
  return over;
}

function columnOverrides(sym) {
  return {
    '0,0': entryCell(sym, 0, UV_FONT),
    '1,0': entryCell(sym, 1, UV_FONT),
    '2,0': entryCell(sym, 2, UV_FONT)
  };
}

const W_MATRIX = (filledUpTo) => ({
  symbol: 'w', rows: 3, cols: 1, label: 'u × v',
  cellSize: W_CELL,
  cellOverrides: wOverrides(filledUpTo)
});

// ===========================================================
// METHOD 1 — component formula
// ===========================================================
export function buildComponentScenes() {
  const matrices = (filledUpTo) => ({
    U: {
      symbol: 'u', rows: 3, cols: 1, label: 'u',
      cellSize: UV_CELL,
      cellOverrides: columnOverrides('u')
    },
    V: {
      symbol: 'v', rows: 3, cols: 1, label: 'v',
      cellSize: UV_CELL,
      cellOverrides: columnOverrides('v')
    },
    W: W_MATRIX(filledUpTo)
  });

  const layout = [
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: '×' },
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'W' }
  ];

  const scenes = [];

  // Intro
  scenes.push({
    title: 'Cross product u × v, by the component formula',
    formula:
      'u and v are vectors in three-dimensional space. Their cross product is a ' +
      'third vector w with three components. Each component is found by ' +
      '<strong>skipping its own row</strong> and <strong>cross-multiplying the ' +
      'other two rows</strong> of u and v: w<sub>k</sub> = u<sub>a</sub>v<sub>b</sub> ' +
      '− u<sub>b</sub>v<sub>a</sub>, with a and b the rows after k in cyclic ' +
      'order 1 → 2 → 3 → 1.',
    matrices: matrices(-1),
    layout,
    highlights: {}
  });

  // One scene per component
  for (let k = 0; k < 3; k++) {
    const [a, b] = pairFor(k);
    const extra = k === 1
      ? ' Notice the order: the middle component runs 3 then 1, not 1 then 3. ' +
        'That is the same cyclic rule, and it is where the sign is most often lost.'
      : '';
    scenes.push({
      title: `w<sub>${k + 1}</sub> = ${productHtml(k)}`,
      formula:
        `Skip row ${k + 1} of both vectors. Cross-multiply the other two rows: ` +
        `u<sub>${a + 1}</sub> with v<sub>${b + 1}</sub>, minus ` +
        `u<sub>${b + 1}</sub> with v<sub>${a + 1}</sub>. ` +
        `The difference goes into row ${k + 1} of w.` + extra,
      matrices: matrices(k),
      layout,
      highlights: {
        U: { cells: [[a, 0, 'primary'], [b, 0, 'primary'], [k, 0, 'muted']] },
        V: { cells: [[a, 0, 'secondary'], [b, 0, 'secondary'], [k, 0, 'muted']] },
        W: { cells: [[k, 0, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: a, col: 0 },
          to: { matrix: 'W', row: k, col: 0 },
          style: 'primary', curveOffset: 34, curveDirection: 'up'
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: b, col: 0 },
          to: { matrix: 'W', row: k, col: 0 },
          style: 'primary', curveOffset: 34, curveDirection: 'up'
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: a, col: 0 },
          to: { matrix: 'W', row: k, col: 0 },
          style: 'secondary', curveOffset: 30, curveDirection: 'down'
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: b, col: 0 },
          to: { matrix: 'W', row: k, col: 0 },
          style: 'secondary', curveOffset: 30, curveDirection: 'down'
        }
      ]
    });
  }

  // Done
  scenes.push({
    title: 'Done',
    formula:
      'w is filled. Each component is a 2×2 determinant taken from the two ' +
      'rows of u and v that are not its own. The vector w is ' +
      '<strong>perpendicular to both u and v</strong>, its length is the area of ' +
      'the parallelogram they span, and its direction follows the right-hand ' +
      'rule. Swapping u and v flips every sign: v × u = −(u × v).',
    matrices: matrices(2),
    layout,
    highlights: {}
  });

  return scenes;
}

// ===========================================================
// METHOD 2 — determinant expansion along the first row
// ===========================================================
function determinantOverrides(pivot) {
  const over = {};
  const struck = { textDecoration: 'line-through', color: '#94a3b8' };
  for (let j = 0; j < 3; j++) {
    const onTopRowStruck = pivot !== null && j !== pivot;
    over[`0,${j}`] = basisCell(j, onTopRowStruck ? struck : null);
    const inPivotCol = pivot !== null && j === pivot;
    over[`1,${j}`] = entryCell('u', j, M_FONT, inPivotCol ? struck : null);
    over[`2,${j}`] = entryCell('v', j, M_FONT, inPivotCol ? struck : null);
  }
  return over;
}

export function buildDeterminantScenes() {
  const matrices = (pivot, filledUpTo) => ({
    M: {
      symbol: 'm', rows: 3, cols: 3, label: 'det',
      showDimensions: false,
      bracketType: 'bars',
      cellSize: M_CELL,
      cellOverrides: determinantOverrides(pivot)
    },
    W: W_MATRIX(filledUpTo)
  });

  const layout = [
    { type: 'matrix', ref: 'M' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'W' }
  ];

  const scenes = [];

  // Intro
  scenes.push({
    title: 'Cross product u × v, by the determinant expansion',
    formula:
      'Write the basis vectors <strong>i, j, k</strong> in the first row, the ' +
      'components of u in the second and the components of v in the third. ' +
      'Expanding this symbolic determinant along the first row gives ' +
      'u × v = (…) i − (…) j + (…) k, and the three ' +
      'brackets are the three components of w. It is a mnemonic, not a true ' +
      'determinant: the top row holds vectors, not numbers.',
    matrices: matrices(null, -1),
    layout,
    highlights: {}
  });

  // One scene per pivot
  for (let k = 0; k < 3; k++) {
    const others = [0, 1, 2].filter((j) => j !== k);
    const minorCells = [];
    for (const r of [1, 2]) for (const c of others) minorCells.push([r, c, 'secondary']);
    const struckCells = [];
    for (const c of others) struckCells.push([0, c, 'muted']);
    for (const r of [1, 2]) struckCells.push([r, k, 'muted']);

    // The raw cofactor is u_c1 v_c2 − u_c2 v_c1 with c1 < c2 the minor's columns.
    const [c1, c2] = others;
    const rawMinor = `u<sub>${c1 + 1}</sub>v<sub>${c2 + 1}</sub> − u<sub>${c2 + 1}</sub>v<sub>${c1 + 1}</sub>`;
    const signed = k === 1
      ? `−(${rawMinor}) = ${productHtml(k)}`
      : productHtml(k);

    scenes.push({
      title: `Expand along <strong>${BASIS[k]}</strong>: w<sub>${k + 1}</sub> = ${signed}`,
      formula:
        `Strike the first row and column ${k + 1}. The 2×2 block that remains is the ` +
        `minor of ${BASIS[k]}; its determinant is ${rawMinor}. ` +
        `The cofactor sign for column ${k + 1} is ${SIGN[k]}, ` +
        (k === 1
          ? 'so the minor is negated — which is why the middle component reads ' +
            `${productHtml(1)} once the terms are reordered. `
          : 'so the minor is taken as is. ') +
        `That expression is the coefficient of ${BASIS[k]}, that is, row ${k + 1} of w.`,
      matrices: matrices(k, k),
      layout,
      highlights: {
        M: { cells: [[0, k, 'primary'], ...minorCells, ...struckCells] },
        W: { cells: [[k, 0, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'M', row: 0, col: k },
          to: { matrix: 'W', row: k, col: 0 },
          style: 'primary', curveOffset: 40, curveDirection: 'up'
        }
      ]
    });
  }

  // Done
  scenes.push({
    title: 'Done',
    formula:
      'w is filled, and its three entries are exactly the ones the component ' +
      'formula produces — the determinant is a way of remembering that formula, ' +
      'with the alternating cofactor signs supplying the awkward minus in the ' +
      'middle component. As before, w is perpendicular to u and to v, and its ' +
      'length is the area of the parallelogram they span.',
    matrices: matrices(null, 2),
    layout,
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
      className="cp-info"
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
      <span className="cp-tip">{tip}</span>
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

function Pill({ active, onClick, children }) {
  return (
    <button
      className={active ? 'cp-pill cp-pill-active' : 'cp-pill'}
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
export default function CrossProductWrapper({
  mode = 'both',
  defaultMethod = 'components',
  explanations = null,
  title = 'Cross Product',
  subtitle = 'Symbolic visualization of u × v = w, one component at a time — by the component formula or by expanding the i, j, k determinant.',
  defaultSpeed = 1400
}) {
  const locked = mode === 'components' || mode === 'determinant';

  const [methodState, setMethodState] = useState(defaultMethod);
  const method = locked ? mode : methodState;

  const scenes = useMemo(() => {
    const built = method === 'determinant'
      ? buildDeterminantScenes()
      : buildComponentScenes();
    if (!explanations) return built;
    // Line 1 anchor mesh: the run is 1 intro + 3 steps + 1 done for either
    // method, so the phase follows from the index.
    const keyFor = (i) => {
      if (i === 0) return 'intro';
      if (i === built.length - 1) return 'done';
      return method;
    };
    return built.map((sc, i) => {
      const extra = explanations[keyFor(i)];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [method, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: CP_CSS }} />

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
            <FieldLabel info={CROSS_INFO}>Method</FieldLabel>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Pill
                active={method === 'components'}
                onClick={() => setMethodState('components')}
              >
                Component formula &nbsp;
                <span style={mathInlineStyle}>w<sub>k</sub> = u<sub>a</sub>v<sub>b</sub> &minus; u<sub>b</sub>v<sub>a</sub></span>
              </Pill>
              <Pill
                active={method === 'determinant'}
                onClick={() => setMethodState('determinant')}
              >
                Determinant expansion &nbsp;
                <span style={mathInlineStyle}>det [ i j k ; u ; v ]</span>
              </Pill>
            </div>
          </div>
        )}

        <div>
          <FieldLabel info={locked ? CROSS_INFO : null}>
            Vector length
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
            <span style={{ color: '#94a3b8' }}>fixed at</span>
            <span style={{
              ...mathInlineStyle,
              fontWeight: 500,
              padding: '4px 12px',
              borderRadius: '6px',
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#0f172a'
            }}>
              3
            </span>
            <span style={{ color: '#94a3b8', fontSize: '13px' }}>
              &mdash; the cross product is defined only in three dimensions
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
