'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// QRWrapper v1
// Visualizes the QR decomposition A = QR of an n×k matrix A
// (k = 2 or 3 columns, n = 2..4 rows) by Gram–Schmidt on the
// columns, symbolically:
//
//   for each column a_k of A, left to right:
//     r_{j,k} = q_j · a_k               for j < k   (entries of R above the diagonal)
//     u_k     = a_k − Σ_{j<k} r_{j,k} q_j          (the column made orthogonal)
//     r_{k,k} = ‖u_k‖                              (the diagonal of R)
//     q_k     = u_k / r_{k,k}                      (the column of Q)
//
// Q has orthonormal columns, R is upper triangular by
// construction (its zeros are drawn from the very first scene),
// and A = QR because every a_k = Σ_{j≤k} r_{j,k} q_j.
//
// The working column u_k is shown inside column k of Q while it
// is being built, as the growing expression
//   a_{i,k} − r_{1,k} q_{i,1} − r_{2,k} q_{i,2} …
// and is replaced by u_{i,k} / r_{k,k} when it is normalized.
//
// Phases (each scene carries a `phase` field):
//   intro, start (column k copied in; k = 1 included), coef
//   (r_{j,k} = q_j · a_k), subtract (u_k −= r_{j,k} q_j),
//   norm (r_{k,k} and q_k), done.
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

const QR_INFO =
  'The QR decomposition writes a matrix with independent columns as A = QR, ' +
  'where Q has orthonormal columns and R is upper triangular. It is Gram–Schmidt ' +
  'on the columns of A, with the bookkeeping kept: each coefficient q_j · a_k ' +
  'goes into R above the diagonal, each length ‖u_k‖ goes on the diagonal, and ' +
  'the normalized columns go into Q. Solving least squares and finding ' +
  'eigenvalues both run on this factorization.';

const QR_CSS = `
  .qr-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .qr-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .qr-info:hover, .qr-info:focus { background: #bfdbfe; outline: none; }

  .qr-info .qr-tip {
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
  .qr-info .qr-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .qr-info:hover .qr-tip, .qr-info:focus .qr-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Sizing — Q cells hold up to k terms while a column is being
// built, so they widen with k; A and R cells stay compact.
// -----------------------------------------------------------
function sizingFor(k, n) {
  const aCell = n === 4 ? 44 : 48;
  const aFont = n === 4 ? '12.5px' : '14px';
  const qCell = k === 2 ? 88 : 106;
  const qFont = k === 2 ? '11px' : '9.5px';
  const rCell = 56;
  const rFont = '12px';
  return { aCell, aFont, qCell, qFont, rCell, rFont };
}

const UPRIGHT = { fontStyle: 'normal' };
const MINUS = (key) => <span key={key} style={{ ...UPRIGHT, margin: '0 2px' }}>&minus;</span>;

// -----------------------------------------------------------
// Cell display helpers
// -----------------------------------------------------------
function sub(t) {
  return <span style={subStyle}>{t}</span>;
}

function aCellOf(i, k, fontSize) {
  return { display: <>a{sub(`${i + 1},${k + 1}`)}</>, style: { fontSize } };
}

// working column: a_{i,k} − r_{1,k} q_{i,1} − … − r_{upTo,k} q_{i,upTo}
function uCellOf(i, k, upTo, fontSize) {
  const parts = [<React.Fragment key="a">a{sub(`${i + 1},${k + 1}`)}</React.Fragment>];
  for (let j = 0; j < upTo; j++) {
    parts.push(MINUS(`m${j}`));
    parts.push(
      <React.Fragment key={`t${j}`}>
        r{sub(`${j + 1},${k + 1}`)}q{sub(`${i + 1},${j + 1}`)}
      </React.Fragment>
    );
  }
  return { display: <>{parts}</>, style: { fontSize } };
}

// normalized column: u_{i,k} / r_{k,k}
function qCellOf(i, k, fontSize) {
  return {
    display: (
      <>
        u{sub(`${i + 1},${k + 1}`)}
        <span style={{ ...UPRIGHT, margin: '0 2px' }}>/</span>
        r{sub(`${k + 1},${k + 1}`)}
      </>
    ),
    style: { fontSize }
  };
}

function rDiagCell(k, fontSize) {
  return {
    display: <><span style={UPRIGHT}>‖</span>u{sub(k + 1)}<span style={UPRIGHT}>‖</span></>,
    style: { fontSize }
  };
}

function rUpperCell(j, k, fontSize) {
  return {
    display: <>q{sub(j + 1)}<span style={{ ...UPRIGHT, margin: '0 1px' }}>&middot;</span>a{sub(k + 1)}</>,
    style: { fontSize }
  };
}

const R_ZERO = { display: '0', fontStyle: 'normal', style: { color: '#94a3b8' } };

function uHtml(k, upTo) {
  let s = `a<sub>i,${k + 1}</sub>`;
  for (let j = 0; j < upTo; j++) s += ` − r<sub>${j + 1},${k + 1}</sub>q<sub>i,${j + 1}</sub>`;
  return s;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(k = 3, n = 3) {
  const { aCell, aFont, qCell, qFont, rCell, rFont } = sizingFor(k, n);

  const A = {
    symbol: 'a', rows: n, cols: k, label: 'A',
    cellSize: aCell,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) for (let c = 0; c < k; c++) o[`${i},${c}`] = aCellOf(i, c, aFont);
      return o;
    })()
  };

  // qState[c]: -1 empty | { terms: t } working with t subtractions | 'done' normalized
  const Q = (qState) => ({
    symbol: 'q', rows: n, cols: k, label: 'Q',
    cellSize: qCell,
    cellOverrides: (() => {
      const o = {};
      for (let i = 0; i < n; i++) {
        for (let c = 0; c < k; c++) {
          const st = qState[c];
          if (st === -1) o[`${i},${c}`] = { empty: true };
          else if (st === 'done') o[`${i},${c}`] = qCellOf(i, c, qFont);
          else o[`${i},${c}`] = uCellOf(i, c, st.terms, qFont);
        }
      }
      return o;
    })()
  });

  // rState: set of filled 'j,c' keys (upper and diagonal); lower entries are 0
  const R = (rState) => ({
    symbol: 'r', rows: k, cols: k, label: 'R',
    cellSize: rCell,
    cellOverrides: (() => {
      const o = {};
      for (let j = 0; j < k; j++) {
        for (let c = 0; c < k; c++) {
          if (j > c) o[`${j},${c}`] = R_ZERO;
          else if (!rState.has(`${j},${c}`)) o[`${j},${c}`] = { empty: true };
          else if (j === c) o[`${j},${c}`] = rDiagCell(c, rFont);
          else o[`${j},${c}`] = rUpperCell(j, c, rFont);
        }
      }
      return o;
    })()
  });

  const layout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'Q' },
    { type: 'operator', symbol: '·' },
    { type: 'matrix', ref: 'R' }
  ];

  const scenes = [];
  const qState = new Array(k).fill(-1);
  const rState = new Set();
  const col = (c, style) => ({ cols: [[c, style]] });

  const snap = () => ({ A, Q: Q(qState.slice()), R: R(new Set(rState)) });

  scenes.push({
    phase: 'intro',
    title: `QR decomposition of an ${n}×${k} matrix`,
    formula:
      'A will be written as <strong>A = QR</strong>: Q with <strong>orthonormal columns</strong>, ' +
      'R <strong>upper triangular</strong>. The method is Gram–Schmidt on the columns of A, keeping the ' +
      'bookkeeping: every coefficient q<sub>j</sub> · a<sub>k</sub> goes into R above the diagonal, every ' +
      'length ‖u<sub>k</sub>‖ onto the diagonal, and every normalized column into Q. The zeros below the ' +
      'diagonal of R are known before any arithmetic: column k of A only ever involves q<sub>1</sub>…q<sub>k</sub>.',
    matrices: snap(),
    layout,
    highlights: {}
  });

  for (let c = 0; c < k; c++) {
    // start: copy column c of A into column c of Q as the working column
    qState[c] = { terms: 0 };
    scenes.push({
      phase: 'start',
      title: c === 0
        ? 'u<sub>1</sub> = a<sub>1</sub>'
        : `Start u<sub>${c + 1}</sub> from a<sub>${c + 1}</sub>`,
      formula: c === 0
        ? 'The first column needs no orthogonalizing: there is nothing yet to be perpendicular to. ' +
          'Copy a<sub>1</sub> into the working column u<sub>1</sub>; only its length remains to be fixed.'
        : `Copy a<sub>${c + 1}</sub> into the working column u<sub>${c + 1}</sub>. It is not yet perpendicular to ` +
          (c === 1 ? 'q<sub>1</sub>' : `q<sub>1</sub>…q<sub>${c}</sub>`) +
          `; each of the next ${c === 1 ? 'two scenes' : (2 * c) + ' scenes'} records a coefficient into R and subtracts the matching projection.`,
      matrices: snap(),
      layout,
      highlights: { A: col(c, 'primary'), Q: col(c, 'accent') }
    });

    for (let j = 0; j < c; j++) {
      // coef: r_{j,c} = q_j · a_c
      rState.add(`${j},${c}`);
      scenes.push({
        phase: 'coef',
        title: `r<sub>${j + 1},${c + 1}</sub> = q<sub>${j + 1}</sub> · a<sub>${c + 1}</sub>`,
        formula:
          `Dot the finished unit column q<sub>${j + 1}</sub> with the original column a<sub>${c + 1}</sub>. ` +
          `Because q<sub>${j + 1}</sub> has length 1, this dot product is exactly the projection coefficient, ` +
          `with no division — and it is entry (${j + 1}, ${c + 1}) of R, above the diagonal.`,
        matrices: snap(),
        layout,
        highlights: {
          A: col(c, 'primary'),
          Q: col(j, 'secondary'),
          R: { cells: [[j, c, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'Q', row: 0, col: j },
            to: { matrix: 'R', row: j, col: c },
            style: 'secondary', curveOffset: 34, curveDirection: 'up'
          },
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: 0, col: c },
            to: { matrix: 'R', row: j, col: c },
            style: 'primary', curveOffset: 48, curveDirection: 'up'
          }
        ]
      });

      // subtract: u_c −= r_{j,c} q_j
      qState[c] = { terms: j + 1 };
      scenes.push({
        phase: 'subtract',
        title: `u<sub>${c + 1}</sub> −= r<sub>${j + 1},${c + 1}</sub> q<sub>${j + 1}</sub>`,
        formula:
          `Subtract r<sub>${j + 1},${c + 1}</sub> times q<sub>${j + 1}</sub> from the working column, entry by entry. ` +
          `Column ${c + 1} of Q now reads <strong>${uHtml(c, j + 1)}</strong>` +
          (j + 1 === c
            ? `, perpendicular to ${c === 1 ? 'q<sub>1</sub>' : 'every finished column'}.`
            : `; ${c - j - 1} projection${c - j - 1 === 1 ? '' : 's'} still to remove.`),
        matrices: snap(),
        layout,
        highlights: {
          Q: { cols: [[j, 'secondary'], [c, 'accent']] },
          R: { cells: [[j, c, 'primary']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'R', row: j, col: c },
            to: { matrix: 'Q', row: 0, col: c },
            style: 'primary', curveOffset: 40, curveDirection: 'up'
          }
        ]
      });
    }

    // norm: r_{c,c} = ‖u_c‖, q_c = u_c / r_{c,c}
    rState.add(`${c},${c}`);
    qState[c] = 'done';
    scenes.push({
      phase: 'norm',
      title: `r<sub>${c + 1},${c + 1}</sub> = ‖u<sub>${c + 1}</sub>‖, &nbsp; q<sub>${c + 1}</sub> = u<sub>${c + 1}</sub> / r<sub>${c + 1},${c + 1}</sub>`,
      formula:
        `The length of the working column goes on the diagonal of R, and the column divided by that length ` +
        `becomes q<sub>${c + 1}</sub>, a unit vector` +
        (c === 0 ? '.' : ` perpendicular to ${c === 1 ? 'q<sub>1</sub>' : `q<sub>1</sub>…q<sub>${c}</sub>`}.`) +
        ` Read down column ${c + 1} of R and the original column is recovered: a<sub>${c + 1}</sub> = ` +
        (() => {
          const terms = [];
          for (let j = 0; j <= c; j++) terms.push(`r<sub>${j + 1},${c + 1}</sub>q<sub>${j + 1}</sub>`);
          return terms.join(' + ');
        })() + '.',
      matrices: snap(),
      layout,
      highlights: {
        Q: col(c, 'accent'),
        R: { cells: [[c, c, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'R', row: c, col: c },
          to: { matrix: 'Q', row: n - 1, col: c },
          style: 'accent', curveOffset: 30, curveDirection: 'down'
        }
      ]
    });
  }

  scenes.push({
    phase: 'done',
    title: 'Done: A = QR',
    formula:
      'Every column of A is a combination of the columns of Q, with the coefficients stored in the ' +
      'matching column of R — which is exactly the matrix product QR. Q<sup>T</sup>Q = I because its ' +
      'columns are orthonormal, so R = Q<sup>T</sup>A, and the triangular shape of R records that ' +
      'q<sub>1</sub>…q<sub>k</sub> span the same nested spaces as a<sub>1</sub>…a<sub>k</sub>. ' +
      'Least squares becomes R x = Q<sup>T</sup> b, solved by back substitution.',
    matrices: snap(),
    layout,
    highlights: {
      Q: { cols: Array.from({ length: k }, (_, c) => [c, 'accent']) },
      R: { cells: (() => { const out = []; for (let j = 0; j < k; j++) for (let c = j; c < k; c++) out.push([j, c, 'secondary']); return out; })() }
    }
  });

  return scenes;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="qr-info"
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
      <span className="qr-tip">{tip}</span>
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
          className="qr-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="qr-stepper-btn"
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
export default function QRWrapper({
  defaultK = 3,
  defaultN = 3,
  kRange = [2, 3],
  nRange = [2, 3, 4],
  explanations = null,
  title = 'QR Decomposition',
  subtitle = 'Symbolic visualization of A = QR by Gram–Schmidt on the columns — coefficients into R, unit columns into Q.',
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
      <style dangerouslySetInnerHTML={{ __html: QR_CSS }} />

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
          <FieldLabel info={QR_INFO}>Shape of A</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={n} onChange={setN} min={nRange[0]} max={nRange[nRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <Stepper value={k} onChange={setK} min={kRange[0]} max={kRange[kRange.length - 1]} />
            <span style={{ color: '#94a3b8', fontSize: '13px', marginLeft: '8px' }}>
              rows &times; columns &mdash; Q is {n}&times;{k}, R is {k}&times;{k}
              {k > n ? ' — more columns than rows: the columns cannot be independent' : ''}
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
