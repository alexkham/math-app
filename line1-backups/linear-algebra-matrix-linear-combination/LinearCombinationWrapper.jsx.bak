
// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// // ===========================================================
// // LinearCombinationWrapper v2
// //
// // Diff vs v1: cell sizing tuned for the three-matrix layout
// // (A, B, C side by side). Horizontal canvas demand scales
// // with 3·cols·cellPx + scalar slots + operators, so we drop
// // cell size more aggressively when cols is large.
// //
// // Pairs with MatrixCore-v3 (or later), which adds
// // flex-wrap on the canvas as a fallback for narrow viewports.
// //
// // Operation: C = αA + βB, cell by cell, in three phases.
// //   Phase 1 — scale A:  a_{i,j} → α·a_{i,j}
// //   Phase 2 — scale B:  b_{i,j} → β·b_{i,j}
// //   Phase 3 — add:      c_{i,j} = α·a_{i,j} + β·b_{i,j}
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

// const subStyle = {
//   fontSize: '0.65em',
//   verticalAlign: 'sub',
//   lineHeight: 0,
//   fontStyle: 'italic'
// };

// const LINCOMB_INFO =
//   'A linear combination of two matrices A and B is α\u00B7A + β\u00B7B, ' +
//   'where α and β are scalars. A and B must share the same shape so that ' +
//   'the addition is defined; the result C has that same shape. ' +
//   'Linear combinations are built from two operations already covered: ' +
//   'scalar multiplication (scale A by α, scale B by β) and matrix ' +
//   'addition (add the scaled matrices). The animation walks the operation ' +
//   'in those three phases.';

// // -----------------------------------------------------------
// // Sizing — accounts for the three-matrix layout.
// // Returns { cellPx, abFontSize, cFontSize }.
// //
// // Reasoning:
// //   - Total horizontal demand ≈ 3·cols·cellPx + operators
// //   - C cells are widest (contain α·a_{i,j} + β·b_{i,j})
// //   - We pick cellPx so that even at cols=5 the row fits a
// //     ~900px canvas without wrapping; if it doesn't (narrower
// //     viewport), MatrixCore-v3 wraps the row.
// // -----------------------------------------------------------
// function sizingFor(rows, cols) {
//   const maxDim = Math.max(rows, cols);
//   let cellPx;
//   let abFontSize;
//   let cFontSize;

//   if (cols <= 2) {
//     cellPx = 68;
//     abFontSize = '14px';
//     cFontSize = maxDim <= 2 ? '12px' : '11px';
//   } else if (cols === 3) {
//     cellPx = 62;
//     abFontSize = '13px';
//     cFontSize = '11px';
//   } else if (cols === 4) {
//     cellPx = 52;
//     abFontSize = '11px';
//     cFontSize = '10px';
//   } else {
//     // cols === 5
//     cellPx = 46;
//     abFontSize = '10px';
//     cFontSize = '9px';
//   }
//   return { cellPx, abFontSize, cFontSize };
// }

// // -----------------------------------------------------------
// // Cell display helpers.
// // -----------------------------------------------------------
// function scaledACell(i, j, abFontSize) {
//   return {
//     display: (
//       <>
//         &alpha;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         a<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: abFontSize }
//   };
// }

// function scaledBCell(i, j, abFontSize) {
//   return {
//     display: (
//       <>
//         &beta;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         b<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: abFontSize }
//   };
// }

// function filledCCell(i, j, cFontSize) {
//   return {
//     display: (
//       <>
//         &alpha;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         a<span style={subStyle}>{i + 1},{j + 1}</span>
//         <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
//         &beta;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         b<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: cFontSize }
//   };
// }

// // -----------------------------------------------------------
// // Build overrides for A, B, C at a given (phase, sweepIdx).
// // phase: 0 intro, 1 scaling A, 2 scaling B, 3 filling C, 4 outro.
// // -----------------------------------------------------------
// function buildOverrides(rows, cols, phase, sweepIdx, abFontSize, cFontSize) {
//   const aOver = {};
//   const bOver = {};
//   const cOver = {};

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;

//       if (phase >= 2 || (phase === 1 && idx <= sweepIdx)) {
//         aOver[`${i},${j}`] = scaledACell(i, j, abFontSize);
//       }
//       if (phase >= 3 || (phase === 2 && idx <= sweepIdx)) {
//         bOver[`${i},${j}`] = scaledBCell(i, j, abFontSize);
//       }
//       if (phase >= 4 || (phase === 3 && idx <= sweepIdx)) {
//         cOver[`${i},${j}`] = filledCCell(i, j, cFontSize);
//       } else {
//         cOver[`${i},${j}`] = { empty: true };
//       }
//     }
//   }
//   return { aOver, bOver, cOver };
// }

// // -----------------------------------------------------------
// // Scene builder
// // -----------------------------------------------------------
// function buildScenes(rows, cols) {
//   const { cellPx, abFontSize, cFontSize } = sizingFor(rows, cols);

//   const baseMatrices = (aOver, bOver, cOver) => ({
//     A: {
//       symbol: 'a', rows, cols, label: 'A',
//       cellSize: cellPx,
//       cellOverrides: aOver
//     },
//     B: {
//       symbol: 'b', rows, cols, label: 'B',
//       cellSize: cellPx,
//       cellOverrides: bOver
//     },
//     C: {
//       symbol: 'c', rows, cols, label: 'C',
//       cellSize: cellPx,
//       cellOverrides: cOver
//     }
//   });

//   const baseLayout = [
//     { type: 'operator', symbol: '\u03B1', size: 28, color: '#1e40af' },
//     { type: 'operator', symbol: '\u00B7', size: 22 },
//     { type: 'matrix', ref: 'A' },
//     { type: 'operator', symbol: '+' },
//     { type: 'operator', symbol: '\u03B2', size: 28, color: '#1e40af' },
//     { type: 'operator', symbol: '\u00B7', size: 22 },
//     { type: 'matrix', ref: 'B' },
//     { type: 'operator', symbol: '=' },
//     { type: 'matrix', ref: 'C' }
//   ];

//   const scenes = [];

//   // Scene 0: intro
//   {
//     const { aOver, bOver, cOver } = buildOverrides(rows, cols, 0, -1, abFontSize, cFontSize);
//     scenes.push({
//       title: 'Linear combination \u03B1\u00B7A + \u03B2\u00B7B',
//       formula:
//         `A and B are ${rows}\u00D7${cols}. The linear combination ` +
//         '\u03B1\u00B7A + \u03B2\u00B7B is built in three phases: ' +
//         '<strong>scale A by \u03B1</strong>, ' +
//         '<strong>scale B by \u03B2</strong>, then ' +
//         '<strong>add the two scaled matrices</strong>. ' +
//         'The result C has the same shape.',
//       matrices: baseMatrices(aOver, bOver, cOver),
//       layout: baseLayout,
//       highlights: {}
//     });
//   }

//   // Phase 1: scale A
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       const { aOver, bOver, cOver } = buildOverrides(rows, cols, 1, idx, abFontSize, cFontSize);
//       scenes.push({
//         title:
//           'Phase 1 \u2014 scale A: ' +
//           `a<sub>${i + 1},${j + 1}</sub> &rarr; ` +
//           `\u03B1\u00B7a<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           `Multiply the cell at row ${i + 1}, column ${j + 1} of A by \u03B1. ` +
//           'The scaled value replaces the original entry in place.',
//         matrices: baseMatrices(aOver, bOver, cOver),
//         layout: baseLayout,
//         highlights: {
//           A: { cells: [[i, j, 'primary']] }
//         }
//       });
//     }
//   }

//   // Phase 2: scale B
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       const { aOver, bOver, cOver } = buildOverrides(rows, cols, 2, idx, abFontSize, cFontSize);
//       scenes.push({
//         title:
//           'Phase 2 \u2014 scale B: ' +
//           `b<sub>${i + 1},${j + 1}</sub> &rarr; ` +
//           `\u03B2\u00B7b<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           `Multiply the cell at row ${i + 1}, column ${j + 1} of B by \u03B2. ` +
//           'A is already fully scaled from phase 1.',
//         matrices: baseMatrices(aOver, bOver, cOver),
//         layout: baseLayout,
//         highlights: {
//           B: { cells: [[i, j, 'secondary']] }
//         }
//       });
//     }
//   }

//   // Phase 3: fill C
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       const { aOver, bOver, cOver } = buildOverrides(rows, cols, 3, idx, abFontSize, cFontSize);
//       scenes.push({
//         title:
//           'Phase 3 \u2014 add: ' +
//           `c<sub>${i + 1},${j + 1}</sub> = ` +
//           `\u03B1\u00B7a<sub>${i + 1},${j + 1}</sub> + ` +
//           `\u03B2\u00B7b<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           'Take the scaled cell from A and the scaled cell from B at ' +
//           `(${i + 1}, ${j + 1}), add them, and write the result into ` +
//           `C[${i + 1},${j + 1}].`,
//         matrices: baseMatrices(aOver, bOver, cOver),
//         layout: baseLayout,
//         highlights: {
//           A: { cells: [[i, j, 'primary']] },
//           B: { cells: [[i, j, 'secondary']] },
//           C: { cells: [[i, j, 'accent']] }
//         },
//         overlays: [
//           {
//             type: 'cell-arrow-curve',
//             from: { matrix: 'A', row: i, col: j },
//             to: { matrix: 'C', row: i, col: j },
//             style: 'primary',
//             curveOffset: 35
//           },
//           {
//             type: 'cell-arrow-curve',
//             from: { matrix: 'B', row: i, col: j },
//             to: { matrix: 'C', row: i, col: j },
//             style: 'secondary',
//             curveOffset: 35
//           }
//         ]
//       });
//     }
//   }

//   // Outro
//   {
//     const { aOver, bOver, cOver } = buildOverrides(rows, cols, 4, -1, abFontSize, cFontSize);
//     scenes.push({
//       title: 'Done',
//       formula:
//         'C is filled. Every entry c<sub>i,j</sub> = ' +
//         '\u03B1\u00B7a<sub>i,j</sub> + \u03B2\u00B7b<sub>i,j</sub>. ' +
//         'A linear combination is element-wise: the result has the same ' +
//         'shape as the inputs, and each cell depends only on its own pair, ' +
//         'weighted by the scalars \u03B1 and \u03B2.',
//       matrices: baseMatrices(aOver, bOver, cOver),
//       layout: baseLayout,
//       highlights: {}
//     });
//   }

//   return scenes;
// }

// // -----------------------------------------------------------
// // UI helpers
// // -----------------------------------------------------------
// function InfoIcon({ tip }) {
//   return (
//     <span
//       className="lc-info"
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
//       <span className="lc-tip">{tip}</span>
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
//         minWidth: '10px',
//         textAlign: 'center',
//         color: '#0f172a'
//       }}>
//         {value}
//       </span>
//       <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
//         <button
//           className="lc-stepper-btn"
//           onClick={() => onChange(Math.min(max, value + 1))}
//           disabled={value >= max}
//           style={chevButtonStyle}
//           aria-label="Increase"
//         >&#9650;</button>
//         <button
//           className="lc-stepper-btn"
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
// export default function LinearCombinationWrapper({
//   defaultRows = 2,
//   defaultCols = 3,
//   dimensionRange = [1, 2, 3, 4, 5],
//   title = 'Linear Combination of Matrices',
//   subtitle = 'Symbolic visualization of \u03B1\u00B7A + \u03B2\u00B7B = C, in three phases: scale, scale, add.',
//   defaultSpeed = 1200
// }) {
//   const [rows, setRows] = useState(defaultRows);
//   const [cols, setCols] = useState(defaultCols);

//   const min = dimensionRange[0];
//   const max = dimensionRange[dimensionRange.length - 1];

//   const scenes = useMemo(
//     () => buildScenes(rows, cols),
//     [rows, cols]
//   );

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//       padding: '22px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <style>{`
//         .lc-stepper-btn:hover:not(:disabled) { color: #1e40af; }
//         .lc-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

//         .lc-info:hover, .lc-info:focus { background: #bfdbfe; outline: none; }

//         .lc-info .lc-tip {
//           visibility: hidden; opacity: 0;
//           position: absolute; top: calc(100% + 8px); left: 50%;
//           transform: translateX(-50%);
//           background: #1e293b; color: #f1f5f9;
//           font-size: 12px; line-height: 1.5; font-weight: 400;
//           padding: 9px 13px; border-radius: 6px;
//           width: 320px; text-align: left;
//           pointer-events: none;
//           transition: opacity 0.12s ease, visibility 0.12s;
//           z-index: 10;
//           font-family: Arial, sans-serif;
//           font-style: normal;
//         }
//         .lc-info .lc-tip::before {
//           content: ''; position: absolute;
//           bottom: 100%; left: 50%; transform: translateX(-50%);
//           border: 5px solid transparent; border-bottom-color: #1e293b;
//         }
//         .lc-info:hover .lc-tip, .lc-info:focus .lc-tip {
//           visibility: visible; opacity: 1;
//         }
//       `}</style>

//       {(title || subtitle) && (
//         <div style={{ marginBottom: '18px' }}>
//           {/* {title && (
//             <h2 style={{
//               fontSize: '22px',
//               color: '#1e40af',
//               margin: '0 0 4px 0',
//               fontWeight: 'bold'
//             }}>
//               {title}
//             </h2>
//           )} */}
//           {subtitle && (
//             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
//               {subtitle}
//             </p>
//           )}
//         </div>
//       )}

//       <div style={{
//         background: 'white',
//         border: '1px solid #e5e7eb',
//         borderRadius: '10px',
//         padding: '18px'
//       }}>
//         <FieldLabel info={LINCOMB_INFO}>
//           Dimensions (shared by A and B)
//         </FieldLabel>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           flexWrap: 'wrap'
//         }}>
//           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
//             A, B
//           </span>
//           <Stepper value={rows} onChange={setRows} min={min} max={max} />
//           <span style={{ color: '#94a3b8' }}>&times;</span>
//           <Stepper value={cols} onChange={setCols} min={min} max={max} />
//         </div>
//       </div>

//       <div style={{ marginTop: '18px' }}>
//         <ScenePlayer
//           scenes={scenes}
//           defaultSpeed={defaultSpeed}
//           showSpeedSelector={true}
//           showStepIndicator={true}
//           showStepLog={true}
//           stepLogTitle="Step explanations"
//            sceneCanvasProps={{ showCaption: false }}
//         />
//       </div>
//     </div>
//   );
// }



// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// // ===========================================================
// // LinearCombinationWrapper v3
// // - dangerouslySetInnerHTML on <style> to bypass React's
// //   quote-escaping that triggered hydration mismatch on SSR
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

// const subStyle = {
//   fontSize: '0.65em',
//   verticalAlign: 'sub',
//   lineHeight: 0,
//   fontStyle: 'italic'
// };

// const LINCOMB_INFO =
//   'A linear combination of two matrices A and B is α\u00B7A + β\u00B7B, ' +
//   'where α and β are scalars. A and B must share the same shape so that ' +
//   'the addition is defined; the result C has that same shape. ' +
//   'Linear combinations are built from two operations already covered: ' +
//   'scalar multiplication (scale A by α, scale B by β) and matrix ' +
//   'addition (add the scaled matrices). The animation walks the operation ' +
//   'in those three phases.';

// const LC_CSS = `
//   .lc-stepper-btn:hover:not(:disabled) { color: #1e40af; }
//   .lc-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

//   .lc-info:hover, .lc-info:focus { background: #bfdbfe; outline: none; }

//   .lc-info .lc-tip {
//     visibility: hidden; opacity: 0;
//     position: absolute; top: calc(100% + 8px); left: 50%;
//     transform: translateX(-50%);
//     background: #1e293b; color: #f1f5f9;
//     font-size: 12px; line-height: 1.5; font-weight: 400;
//     padding: 9px 13px; border-radius: 6px;
//     width: 320px; text-align: left;
//     pointer-events: none;
//     transition: opacity 0.12s ease, visibility 0.12s;
//     z-index: 10;
//     font-family: Arial, sans-serif;
//     font-style: normal;
//   }
//   .lc-info .lc-tip::before {
//     content: ""; position: absolute;
//     bottom: 100%; left: 50%; transform: translateX(-50%);
//     border: 5px solid transparent; border-bottom-color: #1e293b;
//   }
//   .lc-info:hover .lc-tip, .lc-info:focus .lc-tip {
//     visibility: visible; opacity: 1;
//   }
// `;

// // -----------------------------------------------------------
// // Sizing
// // -----------------------------------------------------------
// function sizingFor(rows, cols) {
//   const maxDim = Math.max(rows, cols);
//   let cellPx;
//   let abFontSize;
//   let cFontSize;

//   if (cols <= 2) {
//     cellPx = 68;
//     abFontSize = '14px';
//     cFontSize = maxDim <= 2 ? '12px' : '11px';
//   } else if (cols === 3) {
//     cellPx = 62;
//     abFontSize = '13px';
//     cFontSize = '11px';
//   } else if (cols === 4) {
//     cellPx = 52;
//     abFontSize = '11px';
//     cFontSize = '10px';
//   } else {
//     cellPx = 46;
//     abFontSize = '10px';
//     cFontSize = '9px';
//   }
//   return { cellPx, abFontSize, cFontSize };
// }

// // -----------------------------------------------------------
// // Cell display helpers
// // -----------------------------------------------------------
// function scaledACell(i, j, abFontSize) {
//   return {
//     display: (
//       <>
//         &alpha;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         a<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: abFontSize }
//   };
// }

// function scaledBCell(i, j, abFontSize) {
//   return {
//     display: (
//       <>
//         &beta;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         b<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: abFontSize }
//   };
// }

// function filledCCell(i, j, cFontSize) {
//   return {
//     display: (
//       <>
//         &alpha;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         a<span style={subStyle}>{i + 1},{j + 1}</span>
//         <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
//         &beta;
//         <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
//         b<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: cFontSize }
//   };
// }

// function buildOverrides(rows, cols, phase, sweepIdx, abFontSize, cFontSize) {
//   const aOver = {};
//   const bOver = {};
//   const cOver = {};

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;

//       if (phase >= 2 || (phase === 1 && idx <= sweepIdx)) {
//         aOver[`${i},${j}`] = scaledACell(i, j, abFontSize);
//       }
//       if (phase >= 3 || (phase === 2 && idx <= sweepIdx)) {
//         bOver[`${i},${j}`] = scaledBCell(i, j, abFontSize);
//       }
//       if (phase >= 4 || (phase === 3 && idx <= sweepIdx)) {
//         cOver[`${i},${j}`] = filledCCell(i, j, cFontSize);
//       } else {
//         cOver[`${i},${j}`] = { empty: true };
//       }
//     }
//   }
//   return { aOver, bOver, cOver };
// }

// // -----------------------------------------------------------
// // Scene builder
// // -----------------------------------------------------------
// function buildScenes(rows, cols) {
//   const { cellPx, abFontSize, cFontSize } = sizingFor(rows, cols);

//   const baseMatrices = (aOver, bOver, cOver) => ({
//     A: {
//       symbol: 'a', rows, cols, label: 'A',
//       cellSize: cellPx,
//       cellOverrides: aOver
//     },
//     B: {
//       symbol: 'b', rows, cols, label: 'B',
//       cellSize: cellPx,
//       cellOverrides: bOver
//     },
//     C: {
//       symbol: 'c', rows, cols, label: 'C',
//       cellSize: cellPx,
//       cellOverrides: cOver
//     }
//   });

//   const baseLayout = [
//     { type: 'operator', symbol: '\u03B1', size: 28, color: '#1e40af' },
//     { type: 'operator', symbol: '\u00B7', size: 22 },
//     { type: 'matrix', ref: 'A' },
//     { type: 'operator', symbol: '+' },
//     { type: 'operator', symbol: '\u03B2', size: 28, color: '#1e40af' },
//     { type: 'operator', symbol: '\u00B7', size: 22 },
//     { type: 'matrix', ref: 'B' },
//     { type: 'operator', symbol: '=' },
//     { type: 'matrix', ref: 'C' }
//   ];

//   const scenes = [];

//   // Intro
//   {
//     const { aOver, bOver, cOver } = buildOverrides(rows, cols, 0, -1, abFontSize, cFontSize);
//     scenes.push({
//       title: 'Linear combination \u03B1\u00B7A + \u03B2\u00B7B',
//       formula:
//         `A and B are ${rows}\u00D7${cols}. The linear combination ` +
//         '\u03B1\u00B7A + \u03B2\u00B7B is built in three phases: ' +
//         '<strong>scale A by \u03B1</strong>, ' +
//         '<strong>scale B by \u03B2</strong>, then ' +
//         '<strong>add the two scaled matrices</strong>. ' +
//         'The result C has the same shape.',
//       matrices: baseMatrices(aOver, bOver, cOver),
//       layout: baseLayout,
//       highlights: {}
//     });
//   }

//   // Phase 1: scale A
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       const { aOver, bOver, cOver } = buildOverrides(rows, cols, 1, idx, abFontSize, cFontSize);
//       scenes.push({
//         title:
//           'Phase 1 \u2014 scale A: ' +
//           `a<sub>${i + 1},${j + 1}</sub> &rarr; ` +
//           `\u03B1\u00B7a<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           `Multiply the cell at row ${i + 1}, column ${j + 1} of A by \u03B1. ` +
//           'The scaled value replaces the original entry in place.',
//         matrices: baseMatrices(aOver, bOver, cOver),
//         layout: baseLayout,
//         highlights: {
//           A: { cells: [[i, j, 'primary']] }
//         }
//       });
//     }
//   }

//   // Phase 2: scale B
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       const { aOver, bOver, cOver } = buildOverrides(rows, cols, 2, idx, abFontSize, cFontSize);
//       scenes.push({
//         title:
//           'Phase 2 \u2014 scale B: ' +
//           `b<sub>${i + 1},${j + 1}</sub> &rarr; ` +
//           `\u03B2\u00B7b<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           `Multiply the cell at row ${i + 1}, column ${j + 1} of B by \u03B2. ` +
//           'A is already fully scaled from phase 1.',
//         matrices: baseMatrices(aOver, bOver, cOver),
//         layout: baseLayout,
//         highlights: {
//           B: { cells: [[i, j, 'secondary']] }
//         }
//       });
//     }
//   }

//   // Phase 3: fill C
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       const { aOver, bOver, cOver } = buildOverrides(rows, cols, 3, idx, abFontSize, cFontSize);
//       scenes.push({
//         title:
//           'Phase 3 \u2014 add: ' +
//           `c<sub>${i + 1},${j + 1}</sub> = ` +
//           `\u03B1\u00B7a<sub>${i + 1},${j + 1}</sub> + ` +
//           `\u03B2\u00B7b<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           'Take the scaled cell from A and the scaled cell from B at ' +
//           `(${i + 1}, ${j + 1}), add them, and write the result into ` +
//           `C[${i + 1},${j + 1}].`,
//         matrices: baseMatrices(aOver, bOver, cOver),
//         layout: baseLayout,
//         highlights: {
//           A: { cells: [[i, j, 'primary']] },
//           B: { cells: [[i, j, 'secondary']] },
//           C: { cells: [[i, j, 'accent']] }
//         },
//         overlays: [
//           {
//             type: 'cell-arrow-curve',
//             from: { matrix: 'A', row: i, col: j },
//             to: { matrix: 'C', row: i, col: j },
//             style: 'primary',
//             curveOffset: 35
//           },
//           {
//             type: 'cell-arrow-curve',
//             from: { matrix: 'B', row: i, col: j },
//             to: { matrix: 'C', row: i, col: j },
//             style: 'secondary',
//             curveOffset: 35
//           }
//         ]
//       });
//     }
//   }

//   // Outro
//   {
//     const { aOver, bOver, cOver } = buildOverrides(rows, cols, 4, -1, abFontSize, cFontSize);
//     scenes.push({
//       title: 'Done',
//       formula:
//         'C is filled. Every entry c<sub>i,j</sub> = ' +
//         '\u03B1\u00B7a<sub>i,j</sub> + \u03B2\u00B7b<sub>i,j</sub>. ' +
//         'A linear combination is element-wise: the result has the same ' +
//         'shape as the inputs, and each cell depends only on its own pair, ' +
//         'weighted by the scalars \u03B1 and \u03B2.',
//       matrices: baseMatrices(aOver, bOver, cOver),
//       layout: baseLayout,
//       highlights: {}
//     });
//   }

//   return scenes;
// }

// // -----------------------------------------------------------
// // UI helpers
// // -----------------------------------------------------------
// function InfoIcon({ tip }) {
//   return (
//     <span
//       className="lc-info"
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
//       <span className="lc-tip">{tip}</span>
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
//         minWidth: '10px',
//         textAlign: 'center',
//         color: '#0f172a'
//       }}>
//         {value}
//       </span>
//       <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
//         <button
//           className="lc-stepper-btn"
//           onClick={() => onChange(Math.min(max, value + 1))}
//           disabled={value >= max}
//           style={chevButtonStyle}
//           aria-label="Increase"
//         >&#9650;</button>
//         <button
//           className="lc-stepper-btn"
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
// export default function LinearCombinationWrapper({
//   defaultRows = 2,
//   defaultCols = 3,
//   dimensionRange = [1, 2, 3, 4, 5],
//   title = 'Linear Combination of Matrices',
//   subtitle = 'Symbolic visualization of \u03B1\u00B7A + \u03B2\u00B7B = C, in three phases: scale, scale, add.',
//   defaultSpeed = 1200
// }) {
//   const [rows, setRows] = useState(defaultRows);
//   const [cols, setCols] = useState(defaultCols);

//   const min = dimensionRange[0];
//   const max = dimensionRange[dimensionRange.length - 1];

//   const scenes = useMemo(
//     () => buildScenes(rows, cols),
//     [rows, cols]
//   );

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//       padding: '22px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <style dangerouslySetInnerHTML={{ __html: LC_CSS }} />

//       {(title || subtitle) && (
//         <div style={{ marginBottom: '18px' }}>
//           {/* {title && (
//             <h2 style={{
//               fontSize: '22px',
//               color: '#1e40af',
//               margin: '0 0 4px 0',
//               fontWeight: 'bold'
//             }}>
//               {title}
//             </h2>
//           )} */}
//           {subtitle && (
//             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
//               {subtitle}
//             </p>
//           )}
//         </div>
//       )}

//       <div style={{
//         background: 'white',
//         border: '1px solid #e5e7eb',
//         borderRadius: '10px',
//         padding: '18px'
//       }}>
//         <FieldLabel info={LINCOMB_INFO}>
//           Dimensions (shared by A and B)
//         </FieldLabel>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           flexWrap: 'wrap'
//         }}>
//           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
//             A, B
//           </span>
//           <Stepper value={rows} onChange={setRows} min={min} max={max} />
//           <span style={{ color: '#94a3b8' }}>&times;</span>
//           <Stepper value={cols} onChange={setCols} min={min} max={max} />
//         </div>
//       </div>

//       <div style={{ marginTop: '18px' }}>
//         <ScenePlayer
//           scenes={scenes}
//           defaultSpeed={defaultSpeed}
//           showSpeedSelector={true}
//           showStepIndicator={true}
//           showStepLog={true}
//           stepLogTitle="Step explanations"
//           sceneCanvasProps={{ showCaption: false }}
//         />
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// LinearCombinationWrapper v4
// Visualizes α·A + β·B = C in three phases — two scenarios:
//   - vectors  : α·u + β·v = w   for length-n row vectors
//   - matrices : α·A + β·B = C   for shape-(m,n) matrices
//
// Both are element-wise and built in three phases:
//   scale left by α, scale right by β, then add.
// The vector case is the matrix case with a single row.
//
// MODE prop:
//   - mode='both'     (default) → scenario pills shown, user
//                                 toggles vectors/matrices,
//                                 starts on defaultScenario.
//   - mode='vectors'  → no pills, vector view only, locked.
//   - mode='matrices' → no pills, matrix view only, locked.
//   In the locked modes the scenario can only be changed from
//   outside by changing the prop.
//
// - dangerouslySetInnerHTML on <style> to bypass React's
//   quote-escaping that triggered hydration mismatch on SSR
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

const LINCOMB_INFO =
  'A linear combination is α\u00B7A + β\u00B7B, where α and β are scalars. ' +
  'The two operands must share the same shape so that the addition is ' +
  'defined; the result has that same shape. Linear combinations are built ' +
  'from two operations already covered: scalar multiplication (scale each ' +
  'operand) and addition (add the scaled operands). The same idea applies ' +
  'to vectors and to matrices — only the shape of the operands differs.';

const LC_CSS = `
  .lc-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .lc-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .lc-pill:hover { border-color: #94a3b8; }
  .lc-pill-active:hover { border-color: #2563eb; }

  .lc-info:hover, .lc-info:focus { background: #bfdbfe; outline: none; }

  .lc-info .lc-tip {
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
  .lc-info .lc-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .lc-info:hover .lc-tip, .lc-info:focus .lc-tip {
    visibility: visible; opacity: 1;
  }
`;

// ===========================================================
// VECTOR SCENE BUILDER — α·u + β·v = w (1×n), three phases
// ===========================================================
function vecSizingFor(n) {
  if (n <= 2)      return { cellPx: 68, uvFontSize: '14px', wFontSize: '12px' };
  else if (n === 3) return { cellPx: 62, uvFontSize: '13px', wFontSize: '11px' };
  else if (n === 4) return { cellPx: 52, uvFontSize: '11px', wFontSize: '10px' };
  else              return { cellPx: 46, uvFontSize: '10px', wFontSize: '9px' };
}

function scaledUCell(j, uvFontSize) {
  return {
    display: (
      <>
        &alpha;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        u<span style={subStyle}>{j + 1}</span>
      </>
    ),
    style: { fontSize: uvFontSize }
  };
}

function scaledVCell(j, uvFontSize) {
  return {
    display: (
      <>
        &beta;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        v<span style={subStyle}>{j + 1}</span>
      </>
    ),
    style: { fontSize: uvFontSize }
  };
}

function filledWCell(j, wFontSize) {
  return {
    display: (
      <>
        &alpha;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        u<span style={subStyle}>{j + 1}</span>
        <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
        &beta;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        v<span style={subStyle}>{j + 1}</span>
      </>
    ),
    style: { fontSize: wFontSize }
  };
}

function buildVectorOverrides(n, phase, sweepIdx, uvFontSize, wFontSize) {
  const uOver = {};
  const vOver = {};
  const wOver = {};

  for (let j = 0; j < n; j++) {
    if (phase >= 2 || (phase === 1 && j <= sweepIdx)) {
      uOver[`0,${j}`] = scaledUCell(j, uvFontSize);
    }
    if (phase >= 3 || (phase === 2 && j <= sweepIdx)) {
      vOver[`0,${j}`] = scaledVCell(j, uvFontSize);
    }
    if (phase >= 4 || (phase === 3 && j <= sweepIdx)) {
      wOver[`0,${j}`] = filledWCell(j, wFontSize);
    } else {
      wOver[`0,${j}`] = { empty: true };
    }
  }
  return { uOver, vOver, wOver };
}

function buildVectorScenes(n) {
  const { cellPx, uvFontSize, wFontSize } = vecSizingFor(n);

  const baseMatrices = (uOver, vOver, wOver) => ({
    U: {
      symbol: 'u', rows: 1, cols: n, label: 'u',
      cellSize: cellPx,
      cellOverrides: uOver
    },
    V: {
      symbol: 'v', rows: 1, cols: n, label: 'v',
      cellSize: cellPx,
      cellOverrides: vOver
    },
    W: {
      symbol: 'w', rows: 1, cols: n, label: 'w',
      cellSize: cellPx,
      cellOverrides: wOver
    }
  });

  const baseLayout = [
    { type: 'operator', symbol: '\u03B1', size: 28, color: '#1e40af' },
    { type: 'operator', symbol: '\u00B7', size: 22 },
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: '+' },
    { type: 'operator', symbol: '\u03B2', size: 28, color: '#1e40af' },
    { type: 'operator', symbol: '\u00B7', size: 22 },
    { type: 'matrix', ref: 'V' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'W' }
  ];

  const scenes = [];

  // Intro
  {
    const { uOver, vOver, wOver } = buildVectorOverrides(n, 0, -1, uvFontSize, wFontSize);
    scenes.push({
      title: 'Linear combination \u03B1\u00B7u + \u03B2\u00B7v',
      formula:
        `u and v both have length ${n}. The linear combination ` +
        '\u03B1\u00B7u + \u03B2\u00B7v is built in three phases: ' +
        '<strong>scale u by \u03B1</strong>, ' +
        '<strong>scale v by \u03B2</strong>, then ' +
        '<strong>add the two scaled vectors</strong>. ' +
        'The result w has the same length.',
      matrices: baseMatrices(uOver, vOver, wOver),
      layout: baseLayout,
      highlights: {}
    });
  }

  // Phase 1: scale u
  for (let j = 0; j < n; j++) {
    const { uOver, vOver, wOver } = buildVectorOverrides(n, 1, j, uvFontSize, wFontSize);
    scenes.push({
      title:
        'Phase 1 \u2014 scale u: ' +
        `u<sub>${j + 1}</sub> &rarr; ` +
        `\u03B1\u00B7u<sub>${j + 1}</sub>`,
      formula:
        `Multiply entry ${j + 1} of u by \u03B1. ` +
        'The scaled value replaces the original entry in place.',
      matrices: baseMatrices(uOver, vOver, wOver),
      layout: baseLayout,
      highlights: {
        U: { cells: [[0, j, 'primary']] }
      }
    });
  }

  // Phase 2: scale v
  for (let j = 0; j < n; j++) {
    const { uOver, vOver, wOver } = buildVectorOverrides(n, 2, j, uvFontSize, wFontSize);
    scenes.push({
      title:
        'Phase 2 \u2014 scale v: ' +
        `v<sub>${j + 1}</sub> &rarr; ` +
        `\u03B2\u00B7v<sub>${j + 1}</sub>`,
      formula:
        `Multiply entry ${j + 1} of v by \u03B2. ` +
        'u is already fully scaled from phase 1.',
      matrices: baseMatrices(uOver, vOver, wOver),
      layout: baseLayout,
      highlights: {
        V: { cells: [[0, j, 'secondary']] }
      }
    });
  }

  // Phase 3: fill w
  for (let j = 0; j < n; j++) {
    const { uOver, vOver, wOver } = buildVectorOverrides(n, 3, j, uvFontSize, wFontSize);
    scenes.push({
      title:
        'Phase 3 \u2014 add: ' +
        `w<sub>${j + 1}</sub> = ` +
        `\u03B1\u00B7u<sub>${j + 1}</sub> + ` +
        `\u03B2\u00B7v<sub>${j + 1}</sub>`,
      formula:
        'Take the scaled entry from u and the scaled entry from v at ' +
        `position ${j + 1}, add them, and write the result into ` +
        `w[${j + 1}].`,
      matrices: baseMatrices(uOver, vOver, wOver),
      layout: baseLayout,
      highlights: {
        U: { cells: [[0, j, 'primary']] },
        V: { cells: [[0, j, 'secondary']] },
        W: { cells: [[0, j, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: 0, col: j },
          to: { matrix: 'W', row: 0, col: j },
          style: 'primary',
          curveOffset: 35
        },
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'V', row: 0, col: j },
          to: { matrix: 'W', row: 0, col: j },
          style: 'secondary',
          curveOffset: 35
        }
      ]
    });
  }

  // Outro
  {
    const { uOver, vOver, wOver } = buildVectorOverrides(n, 4, -1, uvFontSize, wFontSize);
    scenes.push({
      title: 'Done',
      formula:
        'w is filled. Every entry w<sub>k</sub> = ' +
        '\u03B1\u00B7u<sub>k</sub> + \u03B2\u00B7v<sub>k</sub>. ' +
        'A linear combination is element-wise: the result has the same ' +
        'length as the inputs, and each entry depends only on its own pair, ' +
        'weighted by the scalars \u03B1 and \u03B2.',
      matrices: baseMatrices(uOver, vOver, wOver),
      layout: baseLayout,
      highlights: {}
    });
  }

  return scenes;
}

// ===========================================================
// MATRIX SCENE BUILDER — α·A + β·B = C (m×n), three phases
// ===========================================================
function sizingFor(rows, cols) {
  const maxDim = Math.max(rows, cols);
  let cellPx;
  let abFontSize;
  let cFontSize;

  if (cols <= 2) {
    cellPx = 68;
    abFontSize = '14px';
    cFontSize = maxDim <= 2 ? '12px' : '11px';
  } else if (cols === 3) {
    cellPx = 62;
    abFontSize = '13px';
    cFontSize = '11px';
  } else if (cols === 4) {
    cellPx = 52;
    abFontSize = '11px';
    cFontSize = '10px';
  } else {
    cellPx = 46;
    abFontSize = '10px';
    cFontSize = '9px';
  }
  return { cellPx, abFontSize, cFontSize };
}

function scaledACell(i, j, abFontSize) {
  return {
    display: (
      <>
        &alpha;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        a<span style={subStyle}>{i + 1},{j + 1}</span>
      </>
    ),
    style: { fontSize: abFontSize }
  };
}

function scaledBCell(i, j, abFontSize) {
  return {
    display: (
      <>
        &beta;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        b<span style={subStyle}>{i + 1},{j + 1}</span>
      </>
    ),
    style: { fontSize: abFontSize }
  };
}

function filledCCell(i, j, cFontSize) {
  return {
    display: (
      <>
        &alpha;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        a<span style={subStyle}>{i + 1},{j + 1}</span>
        <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
        &beta;
        <span style={{ fontStyle: 'normal', margin: '0 1px' }}>&middot;</span>
        b<span style={subStyle}>{i + 1},{j + 1}</span>
      </>
    ),
    style: { fontSize: cFontSize }
  };
}

function buildOverrides(rows, cols, phase, sweepIdx, abFontSize, cFontSize) {
  const aOver = {};
  const bOver = {};
  const cOver = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;

      if (phase >= 2 || (phase === 1 && idx <= sweepIdx)) {
        aOver[`${i},${j}`] = scaledACell(i, j, abFontSize);
      }
      if (phase >= 3 || (phase === 2 && idx <= sweepIdx)) {
        bOver[`${i},${j}`] = scaledBCell(i, j, abFontSize);
      }
      if (phase >= 4 || (phase === 3 && idx <= sweepIdx)) {
        cOver[`${i},${j}`] = filledCCell(i, j, cFontSize);
      } else {
        cOver[`${i},${j}`] = { empty: true };
      }
    }
  }
  return { aOver, bOver, cOver };
}

function buildMatrixScenes(rows, cols) {
  const { cellPx, abFontSize, cFontSize } = sizingFor(rows, cols);

  const baseMatrices = (aOver, bOver, cOver) => ({
    A: {
      symbol: 'a', rows, cols, label: 'A',
      cellSize: cellPx,
      cellOverrides: aOver
    },
    B: {
      symbol: 'b', rows, cols, label: 'B',
      cellSize: cellPx,
      cellOverrides: bOver
    },
    C: {
      symbol: 'c', rows, cols, label: 'C',
      cellSize: cellPx,
      cellOverrides: cOver
    }
  });

  const baseLayout = [
    { type: 'operator', symbol: '\u03B1', size: 28, color: '#1e40af' },
    { type: 'operator', symbol: '\u00B7', size: 22 },
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '+' },
    { type: 'operator', symbol: '\u03B2', size: 28, color: '#1e40af' },
    { type: 'operator', symbol: '\u00B7', size: 22 },
    { type: 'matrix', ref: 'B' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'C' }
  ];

  const scenes = [];

  // Intro
  {
    const { aOver, bOver, cOver } = buildOverrides(rows, cols, 0, -1, abFontSize, cFontSize);
    scenes.push({
      title: 'Linear combination \u03B1\u00B7A + \u03B2\u00B7B',
      formula:
        `A and B are ${rows}\u00D7${cols}. The linear combination ` +
        '\u03B1\u00B7A + \u03B2\u00B7B is built in three phases: ' +
        '<strong>scale A by \u03B1</strong>, ' +
        '<strong>scale B by \u03B2</strong>, then ' +
        '<strong>add the two scaled matrices</strong>. ' +
        'The result C has the same shape.',
      matrices: baseMatrices(aOver, bOver, cOver),
      layout: baseLayout,
      highlights: {}
    });
  }

  // Phase 1: scale A
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      const { aOver, bOver, cOver } = buildOverrides(rows, cols, 1, idx, abFontSize, cFontSize);
      scenes.push({
        title:
          'Phase 1 \u2014 scale A: ' +
          `a<sub>${i + 1},${j + 1}</sub> &rarr; ` +
          `\u03B1\u00B7a<sub>${i + 1},${j + 1}</sub>`,
        formula:
          `Multiply the cell at row ${i + 1}, column ${j + 1} of A by \u03B1. ` +
          'The scaled value replaces the original entry in place.',
        matrices: baseMatrices(aOver, bOver, cOver),
        layout: baseLayout,
        highlights: {
          A: { cells: [[i, j, 'primary']] }
        }
      });
    }
  }

  // Phase 2: scale B
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      const { aOver, bOver, cOver } = buildOverrides(rows, cols, 2, idx, abFontSize, cFontSize);
      scenes.push({
        title:
          'Phase 2 \u2014 scale B: ' +
          `b<sub>${i + 1},${j + 1}</sub> &rarr; ` +
          `\u03B2\u00B7b<sub>${i + 1},${j + 1}</sub>`,
        formula:
          `Multiply the cell at row ${i + 1}, column ${j + 1} of B by \u03B2. ` +
          'A is already fully scaled from phase 1.',
        matrices: baseMatrices(aOver, bOver, cOver),
        layout: baseLayout,
        highlights: {
          B: { cells: [[i, j, 'secondary']] }
        }
      });
    }
  }

  // Phase 3: fill C
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      const { aOver, bOver, cOver } = buildOverrides(rows, cols, 3, idx, abFontSize, cFontSize);
      scenes.push({
        title:
          'Phase 3 \u2014 add: ' +
          `c<sub>${i + 1},${j + 1}</sub> = ` +
          `\u03B1\u00B7a<sub>${i + 1},${j + 1}</sub> + ` +
          `\u03B2\u00B7b<sub>${i + 1},${j + 1}</sub>`,
        formula:
          'Take the scaled cell from A and the scaled cell from B at ' +
          `(${i + 1}, ${j + 1}), add them, and write the result into ` +
          `C[${i + 1},${j + 1}].`,
        matrices: baseMatrices(aOver, bOver, cOver),
        layout: baseLayout,
        highlights: {
          A: { cells: [[i, j, 'primary']] },
          B: { cells: [[i, j, 'secondary']] },
          C: { cells: [[i, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: i, col: j },
            to: { matrix: 'C', row: i, col: j },
            style: 'primary',
            curveOffset: 35
          },
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'B', row: i, col: j },
            to: { matrix: 'C', row: i, col: j },
            style: 'secondary',
            curveOffset: 35
          }
        ]
      });
    }
  }

  // Outro
  {
    const { aOver, bOver, cOver } = buildOverrides(rows, cols, 4, -1, abFontSize, cFontSize);
    scenes.push({
      title: 'Done',
      formula:
        'C is filled. Every entry c<sub>i,j</sub> = ' +
        '\u03B1\u00B7a<sub>i,j</sub> + \u03B2\u00B7b<sub>i,j</sub>. ' +
        'A linear combination is element-wise: the result has the same ' +
        'shape as the inputs, and each cell depends only on its own pair, ' +
        'weighted by the scalars \u03B1 and \u03B2.',
      matrices: baseMatrices(aOver, bOver, cOver),
      layout: baseLayout,
      highlights: {}
    });
  }

  return scenes;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="lc-info"
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
      <span className="lc-tip">{tip}</span>
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
          className="lc-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="lc-stepper-btn"
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
      className={active ? 'lc-pill lc-pill-active' : 'lc-pill'}
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
//
// mode: 'both' (default) | 'vectors' | 'matrices'
//   'both'     → scenario pills shown; internal state drives
//                the scenario, starting at defaultScenario.
//   'vectors'  → locked to vectors; no pills.
//   'matrices' → locked to matrices; no pills.
// ===========================================================
export default function LinearCombinationWrapper({
  mode = 'both',
  defaultScenario = 'matrices',
  defaultVecN = 4,
  defaultRows = 2,
  defaultCols = 3,
  vectorRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  dimensionRange = [1, 2, 3, 4, 5],
  title = 'Linear Combination',
  subtitle = 'Symbolic visualization of \u03B1\u00B7A + \u03B2\u00B7B = C, in three phases: scale, scale, add.',
  defaultSpeed = 1200
}) {
  const locked = mode === 'vectors' || mode === 'matrices';

  // In 'both' mode the scenario is interactive state; in a
  // locked mode it is pinned to the prop and only changes if
  // the prop changes from outside.
  const [scenarioState, setScenarioState] = useState(defaultScenario);
  const scenario = locked ? mode : scenarioState;

  const [vecN, setVecN] = useState(defaultVecN);
  const [rows, setRows] = useState(defaultRows);
  const [cols, setCols] = useState(defaultCols);

  const vecMin = vectorRange[0];
  const vecMax = vectorRange[vectorRange.length - 1];
  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const scenes = useMemo(() => {
    if (scenario === 'vectors') return buildVectorScenes(vecN);
    return buildMatrixScenes(rows, cols);
  }, [scenario, vecN, rows, cols]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: LC_CSS }} />

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {/* {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }}>
              {title}
            </h2>
          )} */}
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
        {/* Scenario — only shown in 'both' mode */}
        {!locked && (
          <div>
            <FieldLabel info={LINCOMB_INFO}>Scenario</FieldLabel>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Pill
                active={scenario === 'vectors'}
                onClick={() => setScenarioState('vectors')}
              >
                Vectors &nbsp;
                <span style={mathInlineStyle}>&alpha;u + &beta;v</span>
              </Pill>
              <Pill
                active={scenario === 'matrices'}
                onClick={() => setScenarioState('matrices')}
              >
                Matrices &nbsp;
                <span style={mathInlineStyle}>&alpha;A + &beta;B</span>
              </Pill>
            </div>
          </div>
        )}

        {/* Dimensions — scenario-specific */}
        {scenario === 'vectors' ? (
          <div>
            <FieldLabel info={LINCOMB_INFO}>
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
              <Stepper value={vecN} onChange={setVecN} min={vecMin} max={vecMax} />
            </div>
          </div>
        ) : (
          <div>
            <FieldLabel info={LINCOMB_INFO}>
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
              <Stepper value={rows} onChange={setRows} min={min} max={max} />
              <span style={{ color: '#94a3b8' }}>&times;</span>
              <Stepper value={cols} onChange={setCols} min={min} max={max} />
            </div>
          </div>
        )}
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