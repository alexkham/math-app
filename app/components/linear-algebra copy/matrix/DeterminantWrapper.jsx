'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// DeterminantWrapper v1
// Visualizes the determinant of a 2×2 or 3×3 symbolic matrix by
// either of two methods:
//   - cofactor : expansion along the first row. One scene per
//                entry a_{1,j}: strike row 1 and column j, read
//                the minor, attach the sign (−1)^{1+j}, and write
//                the term a_{1,j}·(minor) into a row of terms.
//   - sarrus   : (3×3 only) the first two columns are repeated to
//                the right; one scene per diagonal, three downward
//                (+) and three upward (−), each product written
//                into the terms row.
// The final scene reads the sum of the terms as det A.
//
// Phases (each scene carries a `phase` field): intro, term
// (cofactor), diag (sarrus), done.
//
// explanations prop (optional): keyed by phase, raw HTML appended
// to the matching scene captions (Line 1 anchor mesh).
//
// Standalone file: imports the core, never modifies it. The
// scene builders are exported for the frozen-state diagrams.
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

const DET_INFO =
  'The determinant is a single number attached to a square matrix. It is the ' +
  'signed factor by which the matrix scales area (2×2) or volume (3×3), and it ' +
  'is zero exactly when the matrix is singular. Cofactor expansion computes it ' +
  'by striking a row and a column for each entry of one row and combining the ' +
  'smaller determinants with alternating signs; Sarrus\'s rule, for 3×3 only, ' +
  'adds the three downward diagonal products and subtracts the three upward ones.';

const DT_CSS = `
  .dt-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .dt-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .dt-pill:hover:not(:disabled) { border-color: #94a3b8; }
  .dt-pill-active:hover { border-color: #2563eb; }
  .dt-pill:disabled { opacity: .45; cursor: not-allowed; }

  .dt-info:hover, .dt-info:focus { background: #bfdbfe; outline: none; }

  .dt-info .dt-tip {
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
  .dt-info .dt-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .dt-info:hover .dt-tip, .dt-info:focus .dt-tip {
    visibility: visible; opacity: 1;
  }
`;

const UPRIGHT = { fontStyle: 'normal' };
const STRUCK = { textDecoration: 'line-through', color: '#94a3b8' };
const DUP = { color: '#94a3b8' };

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
const LEAD_MINUS = <span style={{ ...UPRIGHT, marginRight: '1px' }}>&minus;</span>;
const LEAD_PLUS = <span style={{ ...UPRIGHT, marginRight: '1px' }}>+</span>;

function others(n, k) {
  const out = [];
  for (let t = 0; t < n; t++) if (t !== k) out.push(t);
  return out;
}

// minor of (0, j): { display, html } without sign
function minorOf(n, j) {
  const cols = others(n, j);
  if (n === 2) {
    const c = cols[0];
    return {
      display: <>a{sub(`2,${c + 1}`)}</>,
      html: `a<sub>2,${c + 1}</sub>`
    };
  }
  const [c1, c2] = cols;
  return {
    display: <>a{sub(`2,${c1 + 1}`)}a{sub(`3,${c2 + 1}`)}{MINUS}a{sub(`2,${c2 + 1}`)}a{sub(`3,${c1 + 1}`)}</>,
    html: `a<sub>2,${c1 + 1}</sub>a<sub>3,${c2 + 1}</sub> − a<sub>2,${c2 + 1}</sub>a<sub>3,${c1 + 1}</sub>`
  };
}

// the cofactor term for entry (0, j): ± a_{1,j} (minor)
function termCell(n, j, fontSize) {
  const neg = j % 2 === 1;
  const m = minorOf(n, j);
  const body = n === 2
    ? <>a{sub(`1,${j + 1}`)}{m.display}</>
    : <>a{sub(`1,${j + 1}`)}<span style={UPRIGHT}>(</span>{m.display}<span style={UPRIGHT}>)</span></>;
  return {
    display: <>{neg ? LEAD_MINUS : (j === 0 ? null : LEAD_PLUS)}{body}</>,
    style: { fontSize }
  };
}

function termHtml(n, j) {
  const neg = j % 2 === 1;
  const m = minorOf(n, j);
  const body = n === 2 ? `a<sub>1,${j + 1}</sub>${m.html}` : `a<sub>1,${j + 1}</sub>(${m.html})`;
  return `${neg ? '− ' : (j === 0 ? '' : '+ ')}${body}`;
}

// Sarrus diagonals on the 3×5 extended matrix: columns 0..4 with 3 = 0, 4 = 1.
// downward d: cells (0,d),(1,d+1),(2,d+2); upward u: (2,u),(1,u+1),(0,u+2)
function sarrusCells(k) {
  if (k < 3) return [[0, k], [1, k + 1], [2, k + 2]];
  const u = k - 3;
  return [[2, u], [1, u + 1], [0, u + 2]];
}

function sarrusTerm(k, fontSize) {
  const cells = sarrusCells(k);
  const neg = k >= 3;
  const factors = cells.map(([i, c], idx) => (
    <React.Fragment key={idx}>a{sub(`${i + 1},${(c % 3) + 1}`)}</React.Fragment>
  ));
  return {
    display: <>{neg ? LEAD_MINUS : (k === 0 ? null : LEAD_PLUS)}{factors}</>,
    style: { fontSize }
  };
}

function sarrusTermHtml(k) {
  const cells = sarrusCells(k);
  const neg = k >= 3;
  const body = cells.map(([i, c]) => `a<sub>${i + 1},${(c % 3) + 1}</sub>`).join('');
  return `${neg ? '− ' : (k === 0 ? '' : '+ ')}${body}`;
}

function detSlot(filled, fontSize) {
  return {
    symbol: 'd', rows: 1, cols: 1, label: 'det A',
    showDimensions: false,
    cellSize: 76,
    cellOverrides: { '0,0': filled ? { display: '|A|', fontStyle: 'normal', style: { fontSize } } : { empty: true } }
  };
}

// ===========================================================
// SCENE BUILDER — cofactor expansion along row 1
// ===========================================================
export function buildCofactorScenes(n = 3) {
  const aPx = n === 2 ? 60 : 54;
  const aFont = n === 2 ? '16px' : '14px';
  const tPx = n === 2 ? 80 : 122;
  const tFont = n === 2 ? '12.5px' : '9.5px';

  const A = (pivot) => ({
    symbol: 'a', rows: n, cols: n, label: 'A',
    bracketType: 'bars',
    cellSize: aPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const struck = pivot !== null && ((i === 0 && j !== pivot) || (j === pivot && i !== 0));
          o[`${i},${j}`] = aCell(i, j, aFont, struck ? STRUCK : null);
        }
      }
      return o;
    })()
  });
  const T = (filledUpTo) => ({
    symbol: 't', rows: 1, cols: n, label: 'terms',
    showDimensions: false,
    cellSize: tPx,
    cellOverrides: (() => {
      const o = {};
      for (let j = 0; j < n; j++) o[`0,${j}`] = j <= filledUpTo ? termCell(n, j, tFont) : { empty: true };
      return o;
    })()
  });

  const layout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'T' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'D' }
  ];

  const scenes = [];
  scenes.push({
    phase: 'intro',
    title: `Determinant of a ${n}×${n} matrix by cofactor expansion`,
    formula:
      'Expand along the first row: for each entry a<sub>1,j</sub>, strike row 1 and column j, take the ' +
      'determinant of what remains (the <strong>minor</strong>), attach the sign ' +
      '<strong>(−1)<sup>1+j</sup></strong> — plus, minus, plus — and multiply by a<sub>1,j</sub>. ' +
      `The ${n} signed terms add up to det A.`,
    matrices: { A: A(null), T: T(-1), D: detSlot(false, '14px') },
    layout,
    highlights: {}
  });

  for (let j = 0; j < n; j++) {
    const neg = j % 2 === 1;
    const minorCells = [];
    for (let r = 1; r < n; r++) for (const c of others(n, j)) minorCells.push([r, c, 'secondary']);
    const struck = [];
    for (const c of others(n, j)) struck.push([0, c, 'muted']);
    for (let r = 1; r < n; r++) struck.push([r, j, 'muted']);
    scenes.push({
      phase: 'term',
      title: `Term ${j + 1}: ${termHtml(n, j)}`,
      formula:
        `Strike row 1 and column ${j + 1}. ` +
        (n === 2
          ? `What remains is the single entry ${minorOf(n, j).html}, the minor of a<sub>1,${j + 1}</sub>. `
          : `The 2×2 block that remains has determinant ${minorOf(n, j).html}, the minor of a<sub>1,${j + 1}</sub>. `) +
        `The sign for column ${j + 1} is ${neg ? '−' : '+'}, so the term is ${termHtml(n, j)}.`,
      matrices: { A: A(j), T: T(j), D: detSlot(false, '14px') },
      layout,
      highlights: {
        A: { cells: [[0, j, 'primary'], ...minorCells, ...struck] },
        T: { cells: [[0, j, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'A', row: 0, col: j },
          to: { matrix: 'T', row: 0, col: j },
          style: 'primary', curveOffset: 36, curveDirection: 'up'
        }
      ]
    });
  }

  const allT = [];
  for (let j = 0; j < n; j++) allT.push([0, j, 'secondary']);
  const full = [];
  for (let j = 0; j < n; j++) full.push(termHtml(n, j));
  scenes.push({
    phase: 'done',
    title: 'det A = ' + full.join(' '),
    formula:
      `Add the ${n} signed terms: <strong>det A = ${full.join(' ')}</strong>. ` +
      (n === 2
        ? 'This is the familiar a<sub>1,1</sub>a<sub>2,2</sub> − a<sub>1,2</sub>a<sub>2,1</sub>. '
        : 'Multiplied out, this is the six-term formula with three positive and three negative products — the same six that Sarrus\'s rule produces. ') +
      'The result is a single number: the signed factor by which A scales ' + (n === 2 ? 'area' : 'volume') +
      ', and it is zero exactly when A is singular.',
    matrices: { A: A(null), T: T(n - 1), D: detSlot(true, '14px') },
    layout,
    highlights: {
      T: { cells: allT },
      D: { cells: [[0, 0, 'accent']] }
    }
  });

  return scenes;
}

// ===========================================================
// SCENE BUILDER — Sarrus's rule (3×3 only)
// ===========================================================
export function buildSarrusScenes() {
  const aPx = 50;
  const aFont = '13px';
  const tPx = 92;
  const tFont = '10px';

  const M = () => ({
    symbol: 'a', rows: 3, cols: 5, label: 'A with columns 1, 2 repeated',
    showDimensions: false,
    bracketType: 'bars',
    cellSize: aPx,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < 3; i++) {
        for (let c = 0; c < 5; c++) {
          o[`${i},${c}`] = aCell(i, c % 3, aFont, c >= 3 ? DUP : null);
        }
      }
      return o;
    })()
  });
  const T = (filledUpTo) => ({
    symbol: 't', rows: 1, cols: 6, label: 'terms',
    showDimensions: false,
    cellSize: tPx,
    cellOverrides: (() => {
      const o = {};
      for (let k = 0; k < 6; k++) o[`0,${k}`] = k <= filledUpTo ? sarrusTerm(k, tFont) : { empty: true };
      return o;
    })()
  });

  const layout = [
    { type: 'matrix', ref: 'M' },
    { type: 'operator', symbol: '→' },
    { type: 'matrix', ref: 'T' }
  ];

  const scenes = [];
  scenes.push({
    phase: 'intro',
    title: 'Determinant of a 3×3 matrix by Sarrus\'s rule',
    formula:
      'Write the first two columns again to the right of A (shown in grey). Then read six diagonals of ' +
      'three entries each: the three running <strong>down and to the right</strong> are added, the three running ' +
      '<strong>up and to the right</strong> are subtracted. The six products are the six terms of the 3×3 ' +
      'determinant. This shortcut works for 3×3 only.',
    matrices: { M: M(), T: T(-1) },
    layout,
    highlights: {}
  });

  for (let k = 0; k < 6; k++) {
    const cells = sarrusCells(k);
    const neg = k >= 3;
    scenes.push({
      phase: 'diag',
      title: `${neg ? 'Upward' : 'Downward'} diagonal ${(k % 3) + 1}: ${sarrusTermHtml(k)}`,
      formula:
        (neg
          ? `Read the diagonal starting at row 3, column ${(k - 3) + 1} and running up to the right. `
          : `Read the diagonal starting at row 1, column ${k + 1} and running down to the right. `) +
        `Multiply its three entries: ${sarrusTermHtml(k).replace(/^[−+] /, '')}. ` +
        (neg ? 'Upward diagonals are subtracted.' : 'Downward diagonals are added.') +
        (k === 2 ? ' That completes the three positive terms.' : k === 5 ? ' That completes the three negative terms.' : ''),
      matrices: { M: M(), T: T(k) },
      layout,
      highlights: {
        M: { cells: cells.map(([i, c]) => [i, c, neg ? 'secondary' : 'primary']) },
        T: { cells: [[0, k, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'M', row: cells[1][0], col: cells[1][1] },
          to: { matrix: 'T', row: 0, col: k },
          style: neg ? 'secondary' : 'primary', curveOffset: 34, curveDirection: 'up'
        }
      ]
    });
  }

  const allT = [];
  for (let k = 0; k < 6; k++) allT.push([0, k, k < 3 ? 'primary' : 'secondary']);
  const full = [];
  for (let k = 0; k < 6; k++) full.push(sarrusTermHtml(k));
  scenes.push({
    phase: 'done',
    title: 'det A = ' + full.join(' '),
    formula:
      `<strong>det A = ${full.join(' ')}</strong>: three products added, three subtracted. ` +
      'Expanding the cofactor formula along any row gives exactly these six terms, so the two methods ' +
      'agree. Sarrus\'s rule is a memory aid for the 3×3 case; it has no 4×4 version, where the ' +
      'determinant has twenty-four terms and cofactor expansion or row reduction is used instead.',
    matrices: { M: M(), T: T(5) },
    layout,
    highlights: { T: { cells: allT } }
  });

  return scenes;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="dt-info"
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
      <span className="dt-tip">{tip}</span>
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
          className="dt-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="dt-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >&#9660;</button>
      </span>
    </span>
  );
}

function Pill({ active, onClick, children, disabled, title }) {
  return (
    <button
      className={active ? 'dt-pill dt-pill-active' : 'dt-pill'}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        fontSize: '13px',
        padding: '6px 12px',
        borderRadius: '999px',
        background: active ? '#dbeafe' : 'white',
        border: `1px solid ${active ? '#2563eb' : '#cbd5e1'}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
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
export default function DeterminantWrapper({
  mode = 'both',
  defaultMethod = 'cofactor',
  defaultN = 3,
  sizeRange = [2, 3],
  explanations = null,
  title = 'Determinant',
  subtitle = 'Symbolic visualization of det A — cofactor expansion along the first row, or Sarrus\'s rule for 3×3.',
  defaultSpeed = 1500
}) {
  const locked = mode === 'cofactor' || mode === 'sarrus';
  const [methodState, setMethodState] = useState(defaultMethod);
  const [n, setN] = useState(defaultN);

  // Sarrus exists only at 3×3; fall back silently at 2×2
  const requested = locked ? mode : methodState;
  const method = requested === 'sarrus' && n !== 3 ? 'cofactor' : requested;

  const scenes = useMemo(() => {
    const built = method === 'sarrus' ? buildSarrusScenes() : buildCofactorScenes(n);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [method, n, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: DT_CSS }} />

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
            <FieldLabel info={DET_INFO}>Method</FieldLabel>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Pill active={method === 'cofactor'} onClick={() => setMethodState('cofactor')}>
                Cofactor expansion &nbsp;
                <span style={mathInlineStyle}>along row 1</span>
              </Pill>
              <Pill
                active={method === 'sarrus'}
                onClick={() => setMethodState('sarrus')}
                disabled={n !== 3}
                title={n !== 3 ? 'Sarrus\'s rule applies to 3×3 matrices only' : undefined}
              >
                Sarrus&apos;s rule &nbsp;
                <span style={mathInlineStyle}>3×3 diagonals</span>
              </Pill>
            </div>
          </div>
        )}

        <div>
          <FieldLabel info={locked ? DET_INFO : null}>Size of A (square)</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={n} onChange={setN} min={sizeRange[0]} max={sizeRange[sizeRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times; {n}</span>
            <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '8px' }}>
              {n === 2 ? '2 terms' : '6 terms'} &mdash; a 4&times;4 would have 24
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
