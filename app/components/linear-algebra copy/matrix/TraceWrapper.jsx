// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// // ===========================================================
// // TraceWrapper
// // Visualizes tr(A) = a_{1,1} + a_{2,2} + ... + a_{n,n}
// // for a square matrix A of size n×n (n in 2..10).
// // - No scenario axis, no strategy axis: single dimension n
// // - Single matrix in the canvas
// // - diagonal-axis overlay drawn through every scene
// // - Off-diagonal cells stay default (no highlight box):
// //   the visualization deliberately leaves them visible but
// //   ignored, reinforcing that trace looks only at the diagonal
// // - Three diagonal states across the sweep:
// //   pending     → targetPending (dashed green outline)
// //   current     → pairA (blue, slight scale-up)
// //   counted     → accent (solid green)
// // ===========================================================

// const mathInlineStyle = {
//   fontFamily: '\'Cambria Math\', Georgia, serif',
//   fontStyle: 'italic'
// };

// const chevButtonStyle = {
//   background: 'transparent',
//   border: 'none',
//   padding: '0 2px',
//   fontSize: '8px',
//   color: '#64748b',
//   cursor: 'pointer',
//   lineHeight: 1,
//   fontFamily: 'inherit'
// };

// const TRACE_INFO =
//   'Trace is defined only for square matrices. The trace of an n×n matrix A ' +
//   'is the sum of its main-diagonal entries: tr(A) = a\u2081,\u2081 + a\u2082,\u2082 + … + a\u2099,\u2099. ' +
//   'Off-diagonal entries are ignored entirely.';

// // -----------------------------------------------------------
// // Render-size table — keeps the matrix readable up through n=10.
// // MatrixRenderer's auto sizing gives 44px / 13px for any n ≥ 5,
// // so for the larger end we step the cells down explicitly.
// // -----------------------------------------------------------
// function getMatrixDisplaySize(n) {
//   if (n <= 4) return { cellSize: 'auto', fontSize: 'auto' };
//   if (n <= 6) return { cellSize: 44, fontSize: 14 };
//   if (n <= 8) return { cellSize: 40, fontSize: 12 };
//   return { cellSize: 36, fontSize: 11 };
// }

// // -----------------------------------------------------------
// // Builds the running-sum formula
// //   tr(A) = a_{1,1} + a_{2,2} + ... + a_{n,n}
// // with progressive highlighting based on activeK:
// //   -1     → no highlighting (intro, all neutral)
// //   k      → term k highlighted blue/bold (current),
// //            terms < k green (counted),
// //            terms > k faded grey (pending)
// //   n      → every term green (all counted, outro)
// // -----------------------------------------------------------
// function buildTraceFormula(n, activeK) {
//   const parts = ['tr(<span style="font-style:italic">A</span>) = '];
//   for (let k = 0; k < n; k++) {
//     let bg = 'transparent';
//     let weight = 'normal';
//     let color = 'inherit';

//     if (activeK === k) {
//       bg = '#dbeafe';
//       weight = '700';
//       color = '#1e40af';
//     } else if (activeK !== -1 && k < activeK) {
//       bg = '#dcfce7';
//       color = '#166534';
//     } else if (activeK === n) {
//       bg = '#dcfce7';
//       color = '#166534';
//     } else if (activeK !== -1 && k > activeK) {
//       color = '#94a3b8';
//     }

//     parts.push(
//       `<span style="background:${bg};padding:1px 4px;border-radius:3px;` +
//       `font-weight:${weight};color:${color};` +
//       `transition:background 0.25s ease,color 0.25s ease">` +
//       `<span style="font-style:italic">a</span>` +
//       `<sub>${k + 1},${k + 1}</sub>` +
//       `</span>`
//     );
//     if (k < n - 1) parts.push(' + ');
//   }
//   return parts.join('');
// }

// // -----------------------------------------------------------
// // Scene builder
// // -----------------------------------------------------------
// function buildScenes(n) {
//   const sz = getMatrixDisplaySize(n);
//   const scenes = [];

//   // Diagonal highlight cells per activeK.
//   const diagonalCells = (activeK) => {
//     const cells = [];
//     for (let k = 0; k < n; k++) {
//       let style;
//       if (activeK === -1) {
//         style = 'primary';            // intro: all diagonal blue
//       } else if (activeK === n) {
//         style = 'accent';              // outro: all diagonal green
//       } else if (k < activeK) {
//         style = 'accent';              // already counted
//       } else if (k === activeK) {
//         style = 'pairA';               // currently being summed (scaled)
//       } else {
//         style = 'targetPending';       // pending (dashed)
//       }
//       cells.push([k, k, style]);
//     }
//     return cells;
//   };

//   const baseMatrices = () => ({
//     A: {
//       symbol: 'a',
//       rows: n,
//       cols: n,
//       label: 'A',
//       cellSize: sz.cellSize,
//       fontSize: sz.fontSize
//     }
//   });

//   const baseLayout = [{ type: 'matrix', ref: 'A' }];

//   const diagonalAxisOverlay = {
//     type: 'diagonal-axis',
//     matrix: 'A',
//     style: 'primary',
//     dashed: true,
//     width: 2.5
//   };

//   // --- Intro ---
//   scenes.push({
//     title: `Trace of a square matrix (${n}\u00D7${n})`,
//     formula:
//       `Trace looks only at the <strong>main diagonal</strong> of ` +
//       `<span style="font-style:italic">A</span> and adds those entries ` +
//       `together. Off-diagonal entries play no role.<br/>` +
//       buildTraceFormula(n, -1),
//     matrices: baseMatrices(),
//     layout: baseLayout,
//     highlights: { A: { cells: diagonalCells(-1) } },
//     overlays: [diagonalAxisOverlay]
//   });

//   // --- Per-diagonal-cell sweep ---
//   for (let k = 0; k < n; k++) {
//     scenes.push({
//       title:
//         `Adding <span style="font-style:italic">a</span>` +
//         `<sub>${k + 1},${k + 1}</sub> to the trace`,
//       formula: buildTraceFormula(n, k),
//       matrices: baseMatrices(),
//       layout: baseLayout,
//       highlights: { A: { cells: diagonalCells(k) } },
//       overlays: [diagonalAxisOverlay]
//     });
//   }

//   // --- Outro ---
//   scenes.push({
//     title: 'Trace complete',
//     formula:
//       buildTraceFormula(n, n) +
//       `<br/>tr(<span style="font-style:italic">A</span>) = ` +
//       `\u03A3<sub><span style="font-style:italic">i</span></sub> ` +
//       `<span style="font-style:italic">a</span>` +
//       `<sub><span style="font-style:italic">i</span>,` +
//       `<span style="font-style:italic">i</span></sub>. ` +
//       `Every off-diagonal entry of ` +
//       `<span style="font-style:italic">A</span> was ignored.`,
//     matrices: baseMatrices(),
//     layout: baseLayout,
//     highlights: { A: { cells: diagonalCells(n) } },
//     overlays: [diagonalAxisOverlay]
//   });

//   return scenes;
// }

// // -----------------------------------------------------------
// // UI helpers — mirrored from ScalarMultiplicationWrapper,
// // with the `tr-` class prefix to avoid colliding with sibling
// // wrappers when several are mounted on the same page.
// // -----------------------------------------------------------
// function InfoIcon({ tip }) {
//   return (
//     <span
//       className="tr-info"
//       tabIndex={0}
//       aria-label="More info"
//       style={{
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '16px',
//         height: '16px',
//         borderRadius: '50%',
//         background: '#dbeafe',
//         color: '#1e40af',
//         fontSize: '11px',
//         fontWeight: 700,
//         cursor: 'help',
//         position: 'relative',
//         fontFamily: 'Arial, sans-serif',
//         lineHeight: 1,
//         userSelect: 'none',
//         flexShrink: 0
//       }}
//     >
//       ?
//       <span className="tr-tip">{tip}</span>
//     </span>
//   );
// }

// function FieldLabel({ children, info }) {
//   return (
//     <div style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '8px',
//       margin: '0 0 10px'
//     }}>
//       <span style={{
//         fontSize: '16px',
//         color: '#1e40af',
//         fontFamily: 'Arial, sans-serif',
//         fontWeight: 600,
//         lineHeight: 1.2
//       }}>
//         {children}
//       </span>
//       {info && <InfoIcon tip={info} />}
//     </div>
//   );
// }

// function Stepper({ value, onChange, min, max }) {
//   return (
//     <span style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '4px',
//       padding: '4px 6px 4px 10px',
//       borderRadius: '6px',
//       background: 'white',
//       border: '1px solid #cbd5e1'
//     }}>
//       <span style={{
//         ...mathInlineStyle,
//         fontWeight: 500,
//         minWidth: '14px',
//         textAlign: 'center',
//         color: '#0f172a'
//       }}>
//         {value}
//       </span>
//       <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
//         <button
//           className="tr-stepper-btn"
//           onClick={() => onChange(Math.min(max, value + 1))}
//           disabled={value >= max}
//           style={chevButtonStyle}
//           aria-label="Increase"
//         >&#9650;</button>
//         <button
//           className="tr-stepper-btn"
//           onClick={() => onChange(Math.max(min, value - 1))}
//           disabled={value <= min}
//           style={chevButtonStyle}
//           aria-label="Decrease"
//         >&#9660;</button>
//       </span>
//     </span>
//   );
// }

// // ===========================================================
// // Main wrapper
// // ===========================================================
// export default function TraceWrapper({
//   defaultN = 4,
//   dimensionRange = [2, 3, 4, 5, 6, 7, 8, 9, 10],
//   title = 'Matrix Trace',
//   subtitle = 'Symbolic visualization of tr(A) = sum of the main-diagonal entries.',
//   defaultSpeed = 1200
// }) {
//   const [n, setN] = useState(defaultN);

//   const min = dimensionRange[0];
//   const max = dimensionRange[dimensionRange.length - 1];

//   const scenes = useMemo(() => buildScenes(n), [n]);

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//       padding: '22px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <style>{`
//         .tr-stepper-btn:hover:not(:disabled) { color: #1e40af; }
//         .tr-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

//         .tr-info:hover, .tr-info:focus { background: #bfdbfe; outline: none; }

//         .tr-info .tr-tip {
//           visibility: hidden; opacity: 0;
//           position: absolute; top: calc(100% + 8px); left: 50%;
//           transform: translateX(-50%);
//           background: #1e293b; color: #f1f5f9;
//           font-size: 12px; line-height: 1.5; font-weight: 400;
//           padding: 9px 13px; border-radius: 6px;
//           width: 280px; text-align: left;
//           pointer-events: none;
//           transition: opacity 0.12s ease, visibility 0.12s;
//           z-index: 10;
//           font-family: Arial, sans-serif;
//           font-style: normal;
//         }
//         .tr-info .tr-tip::before {
//           content: ''; position: absolute;
//           bottom: 100%; left: 50%; transform: translateX(-50%);
//           border: 5px solid transparent; border-bottom-color: #1e293b;
//         }
//         .tr-info:hover .tr-tip, .tr-info:focus .tr-tip {
//           visibility: visible; opacity: 1;
//         }
//       `}</style>

//       {(title || subtitle) && (
//         <div style={{ marginBottom: '18px' }}>
//           {title && (
//             <h2 style={{
//               fontSize: '22px',
//               color: '#1e40af',
//               margin: '0 0 4px 0',
//               fontWeight: 'bold'
//             }}>
//               {title}
//             </h2>
//           )}
//           {subtitle && (
//             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
//               {subtitle}
//             </p>
//           )}
//         </div>
//       )}

//       {/* Control panel: single dimension n (A is n × n) */}
//       <div style={{
//         background: 'white',
//         border: '1px solid #e5e7eb',
//         borderRadius: '10px',
//         padding: '18px'
//       }}>
//         <FieldLabel info={TRACE_INFO}>Dimension of A (square)</FieldLabel>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           flexWrap: 'wrap'
//         }}>
//           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
//           <Stepper value={n} onChange={setN} min={min} max={max} />
//           <span style={{ color: '#94a3b8' }}>&times;</span>
//           <Stepper value={n} onChange={setN} min={min} max={max} />
//         </div>
//       </div>

//       {/* Output */}
//       <div style={{ marginTop: '18px' }}>
//         <ScenePlayer
//           scenes={scenes}
//           defaultSpeed={defaultSpeed}
//           showSpeedSelector={true}
//           showStepIndicator={true}
//           showStepLog={true}
//           stepLogTitle="Step explanations"
//         />
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// TraceWrapper v2
// Visualizes tr(A) = a_{1,1} + a_{2,2} + ... + a_{n,n}
// for a square matrix A of size n×n (n in 2..10).
//
// Changes vs v1:
//   - Intro now starts with the matrix fully neutral (no
//     highlights, no overlay). The question is posed first;
//     the diagonal is revealed only on the next step.
//   - The diagonal-axis dashed line has been dropped entirely.
//     The diagonal is communicated purely through cell
//     highlighting, scene by scene.
//
// Scene order:
//   0    — Pose the question (A neutral, no highlights, no overlay)
//   1    — Reveal the main diagonal (all diagonal cells primary)
//   2..n+1 — Per-diagonal-cell sweep (k = 0 .. n-1)
//   n+2  — Outro (all diagonal counted)
//
// Diagonal states across the sweep:
//   pending     → targetPending (dashed green outline)
//   current     → pairA (blue, slight scale-up)
//   counted     → accent (solid green)
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

const TRACE_INFO =
  'Trace is defined only for square matrices. The trace of an n×n matrix A ' +
  'is the sum of its main-diagonal entries: tr(A) = a\u2081,\u2081 + a\u2082,\u2082 + … + a\u2099,\u2099. ' +
  'Off-diagonal entries are ignored entirely.';

// -----------------------------------------------------------
// Render-size table — keeps the matrix readable up through n=10.
// MatrixRenderer's auto sizing gives 44px / 13px for any n ≥ 5,
// so for the larger end we step the cells down explicitly.
// -----------------------------------------------------------
function getMatrixDisplaySize(n) {
  if (n <= 4) return { cellSize: 'auto', fontSize: 'auto' };
  if (n <= 6) return { cellSize: 44, fontSize: 14 };
  if (n <= 8) return { cellSize: 40, fontSize: 12 };
  return { cellSize: 36, fontSize: 11 };
}

// -----------------------------------------------------------
// Builds the running-sum formula
//   tr(A) = a_{1,1} + a_{2,2} + ... + a_{n,n}
// with progressive highlighting based on activeK:
//   -1     → no highlighting on terms (used by intro/reveal)
//   k      → term k highlighted blue/bold (current),
//            terms < k green (counted),
//            terms > k faded grey (pending)
//   n      → every term green (all counted, outro)
// -----------------------------------------------------------
function buildTraceFormula(n, activeK) {
  const parts = ['tr(<span style="font-style:italic">A</span>) = '];
  for (let k = 0; k < n; k++) {
    let bg = 'transparent';
    let weight = 'normal';
    let color = 'inherit';

    if (activeK === k) {
      bg = '#dbeafe';
      weight = '700';
      color = '#1e40af';
    } else if (activeK !== -1 && k < activeK) {
      bg = '#dcfce7';
      color = '#166534';
    } else if (activeK === n) {
      bg = '#dcfce7';
      color = '#166534';
    } else if (activeK !== -1 && k > activeK) {
      color = '#94a3b8';
    }

    parts.push(
      `<span style="background:${bg};padding:1px 4px;border-radius:3px;` +
      `font-weight:${weight};color:${color};` +
      `transition:background 0.25s ease,color 0.25s ease">` +
      `<span style="font-style:italic">a</span>` +
      `<sub>${k + 1},${k + 1}</sub>` +
      `</span>`
    );
    if (k < n - 1) parts.push(' + ');
  }
  return parts.join('');
}

// -----------------------------------------------------------
// Scene builder
// -----------------------------------------------------------
function buildScenes(n) {
  const sz = getMatrixDisplaySize(n);
  const scenes = [];

  // Diagonal-cell highlights per state.
  // mode:
  //   'neutral' → no entries (matrix is fully default)
  //   'reveal'  → every diagonal cell shown in primary (uniform blue)
  //   'sweep'   → activeK drives per-cell state (pending/current/counted)
  //   'done'    → every diagonal cell accent (uniform green)
  const diagonalCells = (mode, activeK = -1) => {
    if (mode === 'neutral') return [];
    const cells = [];
    for (let k = 0; k < n; k++) {
      let style;
      if (mode === 'reveal') {
        style = 'primary';
      } else if (mode === 'done') {
        style = 'accent';
      } else { // sweep
        if (k < activeK)       style = 'accent';
        else if (k === activeK) style = 'pairA';
        else                    style = 'targetPending';
      }
      cells.push([k, k, style]);
    }
    return cells;
  };

  const baseMatrices = () => ({
    A: {
      symbol: 'a',
      rows: n,
      cols: n,
      label: 'A',
      cellSize: sz.cellSize,
      fontSize: sz.fontSize
    }
  });

  const baseLayout = [{ type: 'matrix', ref: 'A' }];

  // --- Scene 0: Pose the question. Nothing highlighted, no overlay. ---
  scenes.push({
    title: `Trace of a square matrix (${n}\u00D7${n})`,
    formula:
      `What is the <strong>trace</strong> of ` +
      `<span style="font-style:italic">A</span>? ` +
      `Trace is a single number assigned to every square matrix — ` +
      `we'll build it step by step.`,
    matrices: baseMatrices(),
    layout: baseLayout,
    highlights: { A: { cells: diagonalCells('neutral') } },
    overlays: []
  });

  // --- Scene 1: Reveal the main diagonal. ---
  scenes.push({
    title: 'The main diagonal',
    formula:
      `Trace looks only at the cells on the <strong>main diagonal</strong> ` +
      `of <span style="font-style:italic">A</span> — those where the row ` +
      `index equals the column index: ` +
      `<span style="font-style:italic">a</span><sub>1,1</sub>, ` +
      `<span style="font-style:italic">a</span><sub>2,2</sub>, …, ` +
      `<span style="font-style:italic">a</span><sub>${n},${n}</sub>. ` +
      `Every other entry will be ignored.`,
    matrices: baseMatrices(),
    layout: baseLayout,
    highlights: { A: { cells: diagonalCells('reveal') } },
    overlays: []
  });

  // --- Scenes 2..n+1: Per-diagonal-cell sweep ---
  for (let k = 0; k < n; k++) {
    scenes.push({
      title:
        `Adding <span style="font-style:italic">a</span>` +
        `<sub>${k + 1},${k + 1}</sub> to the trace`,
      formula: buildTraceFormula(n, k),
      matrices: baseMatrices(),
      layout: baseLayout,
      highlights: { A: { cells: diagonalCells('sweep', k) } },
      overlays: []
    });
  }

  // --- Final scene: Outro ---
  scenes.push({
    title: 'Trace complete',
    formula:
      buildTraceFormula(n, n) +
      `<br/>tr(<span style="font-style:italic">A</span>) = ` +
      `\u03A3<sub><span style="font-style:italic">i</span></sub> ` +
      `<span style="font-style:italic">a</span>` +
      `<sub><span style="font-style:italic">i</span>,` +
      `<span style="font-style:italic">i</span></sub>. ` +
      `Every off-diagonal entry of ` +
      `<span style="font-style:italic">A</span> was ignored.`,
    matrices: baseMatrices(),
    layout: baseLayout,
    highlights: { A: { cells: diagonalCells('done') } },
    overlays: []
  });

  return scenes;
}

// -----------------------------------------------------------
// UI helpers — mirrored from ScalarMultiplicationWrapper,
// with the `tr-` class prefix to avoid colliding with sibling
// wrappers when several are mounted on the same page.
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="tr-info"
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
      <span className="tr-tip">{tip}</span>
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
          className="tr-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="tr-stepper-btn"
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
export default function TraceWrapper({
  defaultN = 4,
  dimensionRange = [2, 3, 4, 5, 6, 7, 8, 9, 10],
  title = 'Matrix Trace',
  subtitle = 'Symbolic visualization of tr(A) = sum of the main-diagonal entries.',
  defaultSpeed = 1200
}) {
  const [n, setN] = useState(defaultN);

  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const scenes = useMemo(() => buildScenes(n), [n]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>{`
        .tr-stepper-btn:hover:not(:disabled) { color: #1e40af; }
        .tr-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

        .tr-info:hover, .tr-info:focus { background: #bfdbfe; outline: none; }

        .tr-info .tr-tip {
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
        .tr-info .tr-tip::before {
          content: ''; position: absolute;
          bottom: 100%; left: 50%; transform: translateX(-50%);
          border: 5px solid transparent; border-bottom-color: #1e293b;
        }
        .tr-info:hover .tr-tip, .tr-info:focus .tr-tip {
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

      {/* Control panel: single dimension n (A is n × n) */}
      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px'
      }}>
        <FieldLabel info={TRACE_INFO}>Dimension of A (square)</FieldLabel>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap'
        }}>
          <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
          <Stepper value={n} onChange={setN} min={min} max={max} />
          <span style={{ color: '#94a3b8' }}>&times;</span>
          <Stepper value={n} onChange={setN} min={min} max={max} />
        </div>
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