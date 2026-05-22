// // 'use client';

// // import React, { useState, useMemo } from 'react';
// // import { ScenePlayer } from './MatrixCore';

// // // ===========================================================
// // // ScalarMultiplicationWrapper
// // // Visualizes k · A = C, cell by cell.
// // // - No shape constraint: any matrix can be scaled
// // // - C has the same shape as A
// // // - No strategy axis (element-wise like addition)
// // // - Scalar 'k' rendered via Operator slot — symbolic only
// // // ===========================================================

// // const mathInlineStyle = {
// //   fontFamily: '\'Cambria Math\', Georgia, serif',
// //   fontStyle: 'italic'
// // };

// // const chevButtonStyle = {
// //   background: 'transparent',
// //   border: 'none',
// //   padding: '0 2px',
// //   fontSize: '8px',
// //   color: '#64748b',
// //   cursor: 'pointer',
// //   lineHeight: 1,
// //   fontFamily: 'inherit'
// // };

// // const subStyle = {
// //   fontSize: '0.65em',
// //   verticalAlign: 'sub',
// //   lineHeight: 0,
// //   fontStyle: 'italic'
// // };

// // const SCALAR_INFO =
// //   'A scalar is a single number — not a vector or matrix. Multiplying a matrix by a scalar k preserves its shape: C has the same dimensions as A, and every cell of C equals k times the corresponding cell of A.';

// // // -----------------------------------------------------------
// // // Scene builder
// // // -----------------------------------------------------------
// // function buildScenes(rows, cols) {
// //   const maxDim = Math.max(rows, cols);
// //   const cFontSize =
// //     maxDim <= 3 ? '14px' : maxDim === 4 ? '12px' : '11px';

// //   const filledCellDisplay = (i, j) => ({
// //     display: (
// //       <>
// //         k
// //         <span style={{ fontStyle: 'normal', margin: '0 2px' }}>·</span>
// //         a<span style={subStyle}>{i + 1},{j + 1}</span>
// //       </>
// //     ),
// //     style: { fontSize: cFontSize }
// //   });

// //   function makeCOverrides(upToIndex) {
// //     const overrides = {};
// //     for (let i = 0; i < rows; i++) {
// //       for (let j = 0; j < cols; j++) {
// //         const idx = i * cols + j;
// //         if (idx <= upToIndex) {
// //           overrides[`${i},${j}`] = filledCellDisplay(i, j);
// //         } else {
// //           overrides[`${i},${j}`] = { empty: true };
// //         }
// //       }
// //     }
// //     return overrides;
// //   }

// //   const baseMatrices = (cOverrides) => ({
// //     A: { symbol: 'a', rows, cols, label: 'A' },
// //     C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
// //   });

// //   // Layout: k · A = C
// //   // 'k' rendered via Operator slot (no native scalar type in MatrixCore).
// //   // Colored blue + slightly larger to read as a parameter, not a structural
// //   // symbol like '·' or '='.
// //   const baseLayout = [
// //     { type: 'operator', symbol: 'k', size: 30, color: '#1e40af' },
// //     { type: 'operator', symbol: '·', size: 24 },
// //     { type: 'matrix', ref: 'A' },
// //     { type: 'operator', symbol: '=' },
// //     { type: 'matrix', ref: 'C' }
// //   ];

// //   const scenes = [];

// //   // Intro
// //   scenes.push({
// //     title: 'Scalar multiplication',
// //     formula:
// //       `k is a scalar — a single number. To compute C = k · A, ` +
// //       `multiply every cell of A by k. C has the same shape as A (${rows}×${cols}).`,
// //     matrices: baseMatrices(makeCOverrides(-1)),
// //     layout: baseLayout,
// //     highlights: {}
// //   });

// //   // Per-cell sweep
// //   for (let i = 0; i < rows; i++) {
// //     for (let j = 0; j < cols; j++) {
// //       const idx = i * cols + j;
// //       scenes.push({
// //         title:
// //           `c<sub>${i + 1},${j + 1}</sub> = ` +
// //           `k · a<sub>${i + 1},${j + 1}</sub>`,
// //         formula:
// //           `Multiply the cell at row ${i + 1}, column ${j + 1} of A by k. ` +
// //           `The product goes into C[${i + 1},${j + 1}].`,
// //         matrices: baseMatrices(makeCOverrides(idx)),
// //         layout: baseLayout,
// //         highlights: {
// //           A: { cells: [[i, j, 'primary']] },
// //           C: { cells: [[i, j, 'accent']] }
// //         },
// //         overlays: [
// //           {
// //             type: 'cell-arrow-curve',
// //             from: { matrix: 'A', row: i, col: j },
// //             to: { matrix: 'C', row: i, col: j },
// //             style: 'primary',
// //             curveOffset: 35
// //           }
// //         ]
// //       });
// //     }
// //   }

// //   // Outro
// //   scenes.push({
// //     title: 'Done',
// //     formula:
// //       `C is filled. Every entry c<sub>i,j</sub> = k · a<sub>i,j</sub>. ` +
// //       `Scalar multiplication is element-wise: it preserves shape and ` +
// //       `scales every cell by the same factor k.`,
// //     matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
// //     layout: baseLayout,
// //     highlights: {}
// //   });

// //   return scenes;
// // }

// // // -----------------------------------------------------------
// // // UI helpers
// // // -----------------------------------------------------------
// // function InfoIcon({ tip }) {
// //   return (
// //     <span
// //       className="sm-info"
// //       tabIndex={0}
// //       aria-label="More info"
// //       style={{
// //         display: 'inline-flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         width: '16px',
// //         height: '16px',
// //         borderRadius: '50%',
// //         background: '#dbeafe',
// //         color: '#1e40af',
// //         fontSize: '11px',
// //         fontWeight: 700,
// //         cursor: 'help',
// //         position: 'relative',
// //         fontFamily: 'Arial, sans-serif',
// //         lineHeight: 1,
// //         userSelect: 'none',
// //         flexShrink: 0
// //       }}
// //     >
// //       ?
// //       <span className="sm-tip">{tip}</span>
// //     </span>
// //   );
// // }

// // function FieldLabel({ children, info }) {
// //   return (
// //     <div style={{
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '8px',
// //       margin: '0 0 10px'
// //     }}>
// //       <span style={{
// //         fontSize: '16px',
// //         color: '#1e40af',
// //         fontFamily: 'Arial, sans-serif',
// //         fontWeight: 600,
// //         lineHeight: 1.2
// //       }}>
// //         {children}
// //       </span>
// //       {info && <InfoIcon tip={info} />}
// //     </div>
// //   );
// // }

// // function Stepper({ value, onChange, min, max }) {
// //   return (
// //     <span style={{
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '4px',
// //       padding: '4px 6px 4px 10px',
// //       borderRadius: '6px',
// //       background: 'white',
// //       border: '1px solid #cbd5e1'
// //     }}>
// //       <span style={{
// //         ...mathInlineStyle,
// //         fontWeight: 500,
// //         minWidth: '10px',
// //         textAlign: 'center',
// //         color: '#0f172a'
// //       }}>
// //         {value}
// //       </span>
// //       <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
// //         <button
// //           className="sm-stepper-btn"
// //           onClick={() => onChange(Math.min(max, value + 1))}
// //           disabled={value >= max}
// //           style={chevButtonStyle}
// //           aria-label="Increase"
// //         >▲</button>
// //         <button
// //           className="sm-stepper-btn"
// //           onClick={() => onChange(Math.max(min, value - 1))}
// //           disabled={value <= min}
// //           style={chevButtonStyle}
// //           aria-label="Decrease"
// //         >▼</button>
// //       </span>
// //     </span>
// //   );
// // }

// // // ===========================================================
// // // Main wrapper
// // // ===========================================================
// // export default function ScalarMultiplicationWrapper({
// //   defaultRows = 2,
// //   defaultCols = 3,
// //   dimensionRange = [1, 2, 3, 4, 5],
// //   title = 'Scalar Multiplication',
// //   subtitle = 'Symbolic visualization of k · A = C, cell by cell.',
// //   defaultSpeed = 1200
// // }) {
// //   const [rows, setRows] = useState(defaultRows);
// //   const [cols, setCols] = useState(defaultCols);

// //   const min = dimensionRange[0];
// //   const max = dimensionRange[dimensionRange.length - 1];

// //   const scenes = useMemo(
// //     () => buildScenes(rows, cols),
// //     [rows, cols]
// //   );

// //   return (
// //     <div style={{
// //       background: 'white',
// //       borderRadius: '10px',
// //       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
// //       padding: '22px',
// //       fontFamily: 'Arial, sans-serif'
// //     }}>
// //       <style>{`
// //         .sm-stepper-btn:hover:not(:disabled) { color: #1e40af; }
// //         .sm-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

// //         .sm-info:hover, .sm-info:focus { background: #bfdbfe; outline: none; }

// //         .sm-info .sm-tip {
// //           visibility: hidden; opacity: 0;
// //           position: absolute; top: calc(100% + 8px); left: 50%;
// //           transform: translateX(-50%);
// //           background: #1e293b; color: #f1f5f9;
// //           font-size: 12px; line-height: 1.5; font-weight: 400;
// //           padding: 9px 13px; border-radius: 6px;
// //           width: 280px; text-align: left;
// //           pointer-events: none;
// //           transition: opacity 0.12s ease, visibility 0.12s;
// //           z-index: 10;
// //           font-family: Arial, sans-serif;
// //           font-style: normal;
// //         }
// //         .sm-info .sm-tip::before {
// //           content: ''; position: absolute;
// //           bottom: 100%; left: 50%; transform: translateX(-50%);
// //           border: 5px solid transparent; border-bottom-color: #1e293b;
// //         }
// //         .sm-info:hover .sm-tip, .sm-info:focus .sm-tip {
// //           visibility: visible; opacity: 1;
// //         }
// //       `}</style>

// //       {(title || subtitle) && (
// //         <div style={{ marginBottom: '18px' }}>
// //           {/* {title && (
// //             <h2 style={{
// //               fontSize: '22px',
// //               color: '#1e40af',
// //               margin: '0 0 4px 0',
// //               fontWeight: 'bold'
// //             }}>
// //               {title}
// //             </h2>
// //           )} */}
// //           {subtitle && (
// //             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
// //               {subtitle}
// //             </p>
// //           )}
// //         </div>
// //       )}

// //       {/* Control panel: just dimensions */}
// //       <div style={{
// //         background: 'white',
// //         border: '1px solid #e5e7eb',
// //         borderRadius: '10px',
// //         padding: '18px'
// //       }}>
// //         <FieldLabel info={SCALAR_INFO}>Dimensions of A</FieldLabel>
// //         <div style={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '6px',
// //           flexWrap: 'wrap'
// //         }}>
// //           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
// //           <Stepper value={rows} onChange={setRows} min={min} max={max} />
// //           <span style={{ color: '#94a3b8' }}>×</span>
// //           <Stepper value={cols} onChange={setCols} min={min} max={max} />
// //         </div>
// //       </div>

// //       {/* Output */}
// //       <div style={{ marginTop: '18px' }}>
// //         <ScenePlayer
// //           scenes={scenes}
// //           defaultSpeed={defaultSpeed}
// //           showSpeedSelector={true}
// //           showStepIndicator={true}
// //           showStepLog={true}
// //           stepLogTitle="Step explanations"
// //           sceneCanvasProps={{ showCaption: false }}
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// const mathInlineStyle = {
//   fontFamily: '"Cambria Math", Georgia, serif',
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

// const SCALAR_INFO =
//   'A scalar is a single number — not a vector or matrix. Multiplying a matrix by a scalar k preserves its shape: C has the same dimensions as A, and every cell of C equals k times the corresponding cell of A.';

// const SM_CSS = `
// .sm-stepper-btn:hover:not(:disabled) { color: #1e40af; }
// .sm-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

// .sm-info:hover, .sm-info:focus { background: #bfdbfe; outline: none; }

// .sm-info .sm-tip {
//   visibility: hidden; opacity: 0;
//   position: absolute; top: calc(100% + 8px); left: 50%;
//   transform: translateX(-50%);
//   background: #1e293b; color: #f1f5f9;
//   font-size: 12px; line-height: 1.5; font-weight: 400;
//   padding: 9px 13px; border-radius: 6px;
//   width: 280px; text-align: left;
//   pointer-events: none;
//   transition: opacity 0.12s ease, visibility 0.12s;
//   z-index: 10;
//   font-family: Arial, sans-serif;
//   font-style: normal;
// }
// .sm-info .sm-tip::before {
//   content: ""; position: absolute;
//   bottom: 100%; left: 50%; transform: translateX(-50%);
//   border: 5px solid transparent; border-bottom-color: #1e293b;
// }
// .sm-info:hover .sm-tip, .sm-info:focus .sm-tip {
//   visibility: visible; opacity: 1;
// }
// `;

// function buildScenes(rows, cols) {
//   const maxDim = Math.max(rows, cols);
//   const cFontSize =
//     maxDim <= 3 ? '14px' : maxDim === 4 ? '12px' : '11px';

//   const filledCellDisplay = (i, j) => ({
//     display: (
//       <>
//         k
//         <span style={{ fontStyle: 'normal', margin: '0 2px' }}>·</span>
//         a<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: cFontSize }
//   });

//   function makeCOverrides(upToIndex) {
//     const overrides = {};
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         const idx = i * cols + j;
//         if (idx <= upToIndex) {
//           overrides[`${i},${j}`] = filledCellDisplay(i, j);
//         } else {
//           overrides[`${i},${j}`] = { empty: true };
//         }
//       }
//     }
//     return overrides;
//   }

//   const baseMatrices = (cOverrides) => ({
//     A: { symbol: 'a', rows, cols, label: 'A' },
//     C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
//   });

//   const baseLayout = [
//     { type: 'operator', symbol: 'k', size: 30, color: '#1e40af' },
//     { type: 'operator', symbol: '·', size: 24 },
//     { type: 'matrix', ref: 'A' },
//     { type: 'operator', symbol: '=' },
//     { type: 'matrix', ref: 'C' }
//   ];

//   const scenes = [];

//   scenes.push({
//     title: 'Scalar multiplication',
//     formula:
//       `k is a scalar — a single number. To compute C = k · A, ` +
//       `multiply every cell of A by k. C has the same shape as A (${rows}×${cols}).`,
//     matrices: baseMatrices(makeCOverrides(-1)),
//     layout: baseLayout,
//     highlights: {}
//   });

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       scenes.push({
//         title:
//           `c<sub>${i + 1},${j + 1}</sub> = ` +
//           `k · a<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           `Multiply the cell at row ${i + 1}, column ${j + 1} of A by k. ` +
//           `The product goes into C[${i + 1},${j + 1}].`,
//         matrices: baseMatrices(makeCOverrides(idx)),
//         layout: baseLayout,
//         highlights: {
//           A: { cells: [[i, j, 'primary']] },
//           C: { cells: [[i, j, 'accent']] }
//         },
//         overlays: [
//           {
//             type: 'cell-arrow-curve',
//             from: { matrix: 'A', row: i, col: j },
//             to: { matrix: 'C', row: i, col: j },
//             style: 'primary',
//             curveOffset: 35
//           }
//         ]
//       });
//     }
//   }

//   scenes.push({
//     title: 'Done',
//     formula:
//       `C is filled. Every entry c<sub>i,j</sub> = k · a<sub>i,j</sub>. ` +
//       `Scalar multiplication is element-wise: it preserves shape and ` +
//       `scales every cell by the same factor k.`,
//     matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
//     layout: baseLayout,
//     highlights: {}
//   });

//   return scenes;
// }

// function InfoIcon({ tip }) {
//   return (
//     <span
//       className="sm-info"
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
//       <span className="sm-tip">{tip}</span>
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
//           className="sm-stepper-btn"
//           onClick={() => onChange(Math.min(max, value + 1))}
//           disabled={value >= max}
//           style={chevButtonStyle}
//           aria-label="Increase"
//         >▲</button>
//         <button
//           className="sm-stepper-btn"
//           onClick={() => onChange(Math.max(min, value - 1))}
//           disabled={value <= min}
//           style={chevButtonStyle}
//           aria-label="Decrease"
//         >▼</button>
//       </span>
//     </span>
//   );
// }

// export default function ScalarMultiplicationWrapper({
//   defaultRows = 2,
//   defaultCols = 3,
//   dimensionRange = [1, 2, 3, 4, 5],
//   title = 'Scalar Multiplication',
//   subtitle = 'Symbolic visualization of k · A = C, cell by cell.',
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
//       <style dangerouslySetInnerHTML={{ __html: SM_CSS }} />

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
//         <FieldLabel info={SCALAR_INFO}>Dimensions of A</FieldLabel>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           flexWrap: 'wrap'
//         }}>
//           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
//           <Stepper value={rows} onChange={setRows} min={min} max={max} />
//           <span style={{ color: '#94a3b8' }}>×</span>
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
// ScalarMultiplicationWrapper v2
// Visualizes k · A = C, cell by cell — two scenarios:
//   - vectors  : k · u = w   for length-n row vectors
//   - matrices : k · A = C   for shape-(m,n) matrices
//
// Both are element-wise: multiply every entry by the scalar k.
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
// ===========================================================

const mathInlineStyle = {
  fontFamily: '"Cambria Math", Georgia, serif',
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

const SCALAR_INFO =
  'A scalar is a single number — not a vector or matrix. Multiplying by a ' +
  'scalar k preserves shape: the result has the same dimensions as the ' +
  'input, and every entry equals k times the corresponding input entry. ' +
  'The same idea applies to vectors and to matrices — only the shape of ' +
  'the operand differs.';

const SM_CSS = `
.sm-stepper-btn:hover:not(:disabled) { color: #1e40af; }
.sm-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

.sm-pill:hover { border-color: #94a3b8; }
.sm-pill-active:hover { border-color: #2563eb; }

.sm-info:hover, .sm-info:focus { background: #bfdbfe; outline: none; }

.sm-info .sm-tip {
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
.sm-info .sm-tip::before {
  content: ""; position: absolute;
  bottom: 100%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent; border-bottom-color: #1e293b;
}
.sm-info:hover .sm-tip, .sm-info:focus .sm-tip {
  visibility: visible; opacity: 1;
}
`;

// ===========================================================
// VECTOR SCENE BUILDER — k · u = w (1×n)
// ===========================================================
function buildVectorScenes(n) {
  const wFontSize = n <= 3 ? '14px' : n === 4 ? '12px' : '11px';

  const filledCellDisplay = (j) => ({
    display: (
      <>
        k
        <span style={{ fontStyle: 'normal', margin: '0 2px' }}>·</span>
        u<span style={subStyle}>{j + 1}</span>
      </>
    ),
    style: { fontSize: wFontSize }
  });

  function makeWOverrides(upToIndex) {
    const overrides = {};
    for (let j = 0; j < n; j++) {
      if (j <= upToIndex) {
        overrides[`0,${j}`] = filledCellDisplay(j);
      } else {
        overrides[`0,${j}`] = { empty: true };
      }
    }
    return overrides;
  }

  const baseMatrices = (wOverrides) => ({
    U: { symbol: 'u', rows: 1, cols: n, label: 'u' },
    W: { symbol: 'w', rows: 1, cols: n, label: 'w', cellOverrides: wOverrides }
  });

  const baseLayout = [
    { type: 'operator', symbol: 'k', size: 30, color: '#1e40af' },
    { type: 'operator', symbol: '·', size: 24 },
    { type: 'matrix', ref: 'U' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'W' }
  ];

  const scenes = [];

  scenes.push({
    title: 'Scalar multiplication',
    formula:
      `k is a scalar — a single number. To compute w = k · u, ` +
      `multiply every entry of u by k. w has the same length as u (${n}).`,
    matrices: baseMatrices(makeWOverrides(-1)),
    layout: baseLayout,
    highlights: {}
  });

  for (let j = 0; j < n; j++) {
    scenes.push({
      title:
        `w<sub>${j + 1}</sub> = ` +
        `k · u<sub>${j + 1}</sub>`,
      formula:
        `Multiply entry ${j + 1} of u by k. ` +
        `The product goes into w[${j + 1}].`,
      matrices: baseMatrices(makeWOverrides(j)),
      layout: baseLayout,
      highlights: {
        U: { cells: [[0, j, 'primary']] },
        W: { cells: [[0, j, 'accent']] }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'U', row: 0, col: j },
          to: { matrix: 'W', row: 0, col: j },
          style: 'primary',
          curveOffset: 35
        }
      ]
    });
  }

  scenes.push({
    title: 'Done',
    formula:
      `w is filled. Every entry w<sub>k</sub> = k · u<sub>k</sub>. ` +
      `Scalar multiplication is element-wise: it preserves length and ` +
      `scales every entry by the same factor k.`,
    matrices: baseMatrices(makeWOverrides(n - 1)),
    layout: baseLayout,
    highlights: {}
  });

  return scenes;
}

// ===========================================================
// MATRIX SCENE BUILDER — k · A = C (m×n)
// ===========================================================
function buildMatrixScenes(rows, cols) {
  const maxDim = Math.max(rows, cols);
  const cFontSize =
    maxDim <= 3 ? '14px' : maxDim === 4 ? '12px' : '11px';

  const filledCellDisplay = (i, j) => ({
    display: (
      <>
        k
        <span style={{ fontStyle: 'normal', margin: '0 2px' }}>·</span>
        a<span style={subStyle}>{i + 1},{j + 1}</span>
      </>
    ),
    style: { fontSize: cFontSize }
  });

  function makeCOverrides(upToIndex) {
    const overrides = {};
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const idx = i * cols + j;
        if (idx <= upToIndex) {
          overrides[`${i},${j}`] = filledCellDisplay(i, j);
        } else {
          overrides[`${i},${j}`] = { empty: true };
        }
      }
    }
    return overrides;
  }

  const baseMatrices = (cOverrides) => ({
    A: { symbol: 'a', rows, cols, label: 'A' },
    C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
  });

  const baseLayout = [
    { type: 'operator', symbol: 'k', size: 30, color: '#1e40af' },
    { type: 'operator', symbol: '·', size: 24 },
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'C' }
  ];

  const scenes = [];

  scenes.push({
    title: 'Scalar multiplication',
    formula:
      `k is a scalar — a single number. To compute C = k · A, ` +
      `multiply every cell of A by k. C has the same shape as A (${rows}×${cols}).`,
    matrices: baseMatrices(makeCOverrides(-1)),
    layout: baseLayout,
    highlights: {}
  });

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      scenes.push({
        title:
          `c<sub>${i + 1},${j + 1}</sub> = ` +
          `k · a<sub>${i + 1},${j + 1}</sub>`,
        formula:
          `Multiply the cell at row ${i + 1}, column ${j + 1} of A by k. ` +
          `The product goes into C[${i + 1},${j + 1}].`,
        matrices: baseMatrices(makeCOverrides(idx)),
        layout: baseLayout,
        highlights: {
          A: { cells: [[i, j, 'primary']] },
          C: { cells: [[i, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: i, col: j },
            to: { matrix: 'C', row: i, col: j },
            style: 'primary',
            curveOffset: 35
          }
        ]
      });
    }
  }

  scenes.push({
    title: 'Done',
    formula:
      `C is filled. Every entry c<sub>i,j</sub> = k · a<sub>i,j</sub>. ` +
      `Scalar multiplication is element-wise: it preserves shape and ` +
      `scales every cell by the same factor k.`,
    matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
    layout: baseLayout,
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
      className="sm-info"
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
      <span className="sm-tip">{tip}</span>
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
          className="sm-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="sm-stepper-btn"
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
      className={active ? 'sm-pill sm-pill-active' : 'sm-pill'}
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
export default function ScalarMultiplicationWrapper({
  mode = 'both',
  defaultScenario = 'matrices',
  defaultVecN = 4,
  defaultRows = 2,
  defaultCols = 3,
  vectorRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  dimensionRange = [1, 2, 3, 4, 5],
  title = 'Scalar Multiplication',
  subtitle = 'Symbolic visualization of k · A = C, cell by cell.',
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
      <style dangerouslySetInnerHTML={{ __html: SM_CSS }} />

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
            <FieldLabel info={SCALAR_INFO}>Scenario</FieldLabel>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Pill
                active={scenario === 'vectors'}
                onClick={() => setScenarioState('vectors')}
              >
                Vectors &nbsp;
                <span style={mathInlineStyle}>k·u</span>
              </Pill>
              <Pill
                active={scenario === 'matrices'}
                onClick={() => setScenarioState('matrices')}
              >
                Matrices &nbsp;
                <span style={mathInlineStyle}>k·A</span>
              </Pill>
            </div>
          </div>
        )}

        {/* Dimensions — scenario-specific */}
        {scenario === 'vectors' ? (
          <div>
            <FieldLabel info={SCALAR_INFO}>Length of u</FieldLabel>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexWrap: 'wrap'
            }}>
              <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>u</span>
              <span style={{ color: '#94a3b8' }}>length</span>
              <Stepper value={vecN} onChange={setVecN} min={vecMin} max={vecMax} />
            </div>
          </div>
        ) : (
          <div>
            <FieldLabel info={SCALAR_INFO}>Dimensions of A</FieldLabel>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexWrap: 'wrap'
            }}>
              <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
              <Stepper value={rows} onChange={setRows} min={min} max={max} />
              <span style={{ color: '#94a3b8' }}>×</span>
              <Stepper value={cols} onChange={setCols} min={min} max={max} />
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
          sceneCanvasProps={{ showCaption: false }}
        />
      </div>
    </div>
  );
}