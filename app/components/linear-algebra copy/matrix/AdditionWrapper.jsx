// // 'use client';

// // import React, { useState, useMemo } from 'react';
// // import { ScenePlayer } from './MatrixCore';

// // // ===========================================================
// // // AdditionWrapper
// // // Visualizes A + B = C, cell by cell.
// // // Dimensions are linked: A and B always share the same shape,
// // // and C inherits it. No strategy axis — addition is element-
// // // wise, and any "strategy" would be cosmetic, not pedagogical.
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

// // // Subscript style — mirrors the MatrixRenderer default so that
// // // our cellOverride displays visually match its native cells.
// // const subStyle = {
// //   fontSize: '0.65em',
// //   verticalAlign: 'sub',
// //   lineHeight: 0,
// //   fontStyle: 'italic'
// // };

// // // -----------------------------------------------------------
// // // Scene builder
// // // Produces a list of scenes:
// // //   1. Intro (C empty)
// // //   2. One scene per (i,j) in row-major order
// // //   3. Outro (C fully filled, summary text)
// // // -----------------------------------------------------------
// // function buildAdditionScenes(rows, cols) {
// //   const maxDim = Math.max(rows, cols);
// //   // Compressed font for C cells because "a_{i,j}+b_{i,j}" is
// //   // much wider than the default single-symbol contents.
// //   const cFontSize =
// //     maxDim <= 3 ? '13px' : maxDim === 4 ? '11px' : '10px';

// //   // Display for a filled C cell: "a_{i+1,j+1} + b_{i+1,j+1}"
// //   const filledCellDisplay = (i, j) => ({
// //     display: (
// //       <>
// //         a<span style={subStyle}>{i + 1},{j + 1}</span>
// //         <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
// //         b<span style={subStyle}>{i + 1},{j + 1}</span>
// //       </>
// //     ),
// //     style: { fontSize: cFontSize }
// //   });

// //   // Build the cellOverrides map for C, where every cell with
// //   // row-major index <= upToIndex is filled, the rest are empty.
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
// //     B: { symbol: 'b', rows, cols, label: 'B' },
// //     C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
// //   });

// //   const baseLayout = [
// //     { type: 'matrix', ref: 'A' },
// //     { type: 'operator', symbol: '+' },
// //     { type: 'matrix', ref: 'B' },
// //     { type: 'operator', symbol: '=' },
// //     { type: 'matrix', ref: 'C' }
// //   ];

// //   const scenes = [];

// //   // --- Intro scene ---
// //   scenes.push({
// //     title: 'Matrix addition',
// //     formula:
// //       `Both A and B are ${rows}×${cols}. To compute C = A + B, ` +
// //       `pair up each cell of A with its counterpart in B and add them.`,
// //     matrices: baseMatrices(makeCOverrides(-1)),
// //     layout: baseLayout,
// //     highlights: {}
// //   });

// //   // --- One scene per cell ---
// //   for (let i = 0; i < rows; i++) {
// //     for (let j = 0; j < cols; j++) {
// //       const idx = i * cols + j;
// //       scenes.push({
// //         title:
// //           `c<sub>${i + 1},${j + 1}</sub> = ` +
// //           `a<sub>${i + 1},${j + 1}</sub> + b<sub>${i + 1},${j + 1}</sub>`,
// //         formula:
// //           `Take the cell at row ${i + 1}, column ${j + 1} from ` +
// //           `each of A and B, and write their sum into C[${i + 1},${j + 1}].`,
// //         matrices: baseMatrices(makeCOverrides(idx)),
// //         layout: baseLayout,
// //         highlights: {
// //           A: { cells: [[i, j, 'primary']] },
// //           B: { cells: [[i, j, 'secondary']] },
// //           C: { cells: [[i, j, 'accent']] }
// //         },
// //         overlays: [
// //           {
// //             type: 'cell-arrow-curve',
// //             from: { matrix: 'A', row: i, col: j },
// //             to: { matrix: 'C', row: i, col: j },
// //             style: 'primary',
// //             curveOffset: 35
// //           },
// //           {
// //             type: 'cell-arrow-curve',
// //             from: { matrix: 'B', row: i, col: j },
// //             to: { matrix: 'C', row: i, col: j },
// //             style: 'secondary',
// //             curveOffset: 35
// //           }
// //         ]
// //       });
// //     }
// //   }

// //   // --- Outro scene ---
// //   scenes.push({
// //     title: 'Done',
// //     formula:
// //       `C is filled. Every entry c<sub>i,j</sub> = ` +
// //       `a<sub>i,j</sub> + b<sub>i,j</sub>. Addition is element-wise: ` +
// //       `the result has the same shape as the inputs, and each cell ` +
// //       `depends only on its own pair.`,
// //     matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
// //     layout: baseLayout,
// //     highlights: {}
// //   });

// //   return scenes;
// // }

// // // -----------------------------------------------------------
// // // UI helpers
// // // -----------------------------------------------------------
// // function FieldLabel({ children }) {
// //   return (
// //     <p style={{
// //       fontSize: '12px',
// //       color: '#64748b',
// //       margin: '0 0 8px',
// //       fontFamily: 'Arial, sans-serif',
// //       fontWeight: 500
// //     }}>
// //       {children}
// //     </p>
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
// //           className="aw-stepper-btn"
// //           onClick={() => onChange(Math.min(max, value + 1))}
// //           disabled={value >= max}
// //           style={chevButtonStyle}
// //           aria-label="Increase"
// //         >▲</button>
// //         <button
// //           className="aw-stepper-btn"
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
// // export default function AdditionWrapper({
// //   defaultRows = 2,
// //   defaultCols = 3,
// //   dimensionRange = [1, 2, 3, 4, 5],
// //   title = 'Matrix Addition',
// //   subtitle = 'Symbolic visualization of A + B = C, cell by cell.',
// //   defaultSpeed = 1200
// // }) {
// //   const [rows, setRows] = useState(defaultRows);
// //   const [cols, setCols] = useState(defaultCols);

// //   const min = dimensionRange[0];
// //   const max = dimensionRange[dimensionRange.length - 1];

// //   const scenes = useMemo(
// //     () => buildAdditionScenes(rows, cols),
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
// //       {/* Pseudo-class hover styles can't be inline */}
// //       <style>{`
// //         .aw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
// //         .aw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }
// //       `}</style>

// //       {(title || subtitle) && (
// //         <div style={{ marginBottom: '18px' }}>
// //           {title && (
// //             <h2 style={{
// //               fontSize: '22px',
// //               color: '#1e40af',
// //               margin: '0 0 4px 0',
// //               fontWeight: 'bold'
// //             }}>
// //               {title}
// //             </h2>
// //           )}
// //           {subtitle && (
// //             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
// //               {subtitle}
// //             </p>
// //           )}
// //         </div>
// //       )}

// //       {/* Control panel — single field: linked dimensions */}
// //       <div style={{
// //         background: 'white',
// //         border: '1px solid #e5e7eb',
// //         borderRadius: '10px',
// //         padding: '18px'
// //       }}>
// //         <FieldLabel>Dimensions (shared by A and B)</FieldLabel>
// //         <div style={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '16px',
// //           flexWrap: 'wrap'
// //         }}>
// //           <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
// //             <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
// //               A, B
// //             </span>
// //             <Stepper value={rows} onChange={setRows} min={min} max={max} />
// //             <span style={{ color: '#94a3b8' }}>×</span>
// //             <Stepper value={cols} onChange={setCols} min={min} max={max} />
// //           </div>
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
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// // ===========================================================
// // AdditionWrapper v2
// // Visualizes A ± B = C, cell by cell.
// // - Operation toggle: addition / subtraction
// // - Dimensions are linked: A, B, C all share the same shape
// // - Info icon next to dimensions label explains the same-
// //   shape requirement
// // - No strategy axis: addition/subtraction is element-wise
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

// const SAME_SHAPE_INFO =
//   'A and B must have the same dimensions — the same number of rows and the same number of columns. The result C has that same shape, and each cell of C is computed from the corresponding pair of cells in A and B.';

// // -----------------------------------------------------------
// // Scene builder
// // -----------------------------------------------------------
// function buildScenes(rows, cols, operation) {
//   const isAdd = operation === 'add';
//   const opSymbol = isAdd ? '+' : '−';
//   const opWord = isAdd ? 'addition' : 'subtraction';
//   const opVerb = isAdd ? 'add' : 'subtract';
//   const opNoun = isAdd ? 'sum' : 'difference';

//   const maxDim = Math.max(rows, cols);
//   const cFontSize =
//     maxDim <= 3 ? '13px' : maxDim === 4 ? '11px' : '10px';

//   const filledCellDisplay = (i, j) => ({
//     display: (
//       <>
//         a<span style={subStyle}>{i + 1},{j + 1}</span>
//         <span style={{ fontStyle: 'normal', margin: '0 2px' }}>{opSymbol}</span>
//         b<span style={subStyle}>{i + 1},{j + 1}</span>
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
//     B: { symbol: 'b', rows, cols, label: 'B' },
//     C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
//   });

//   const baseLayout = [
//     { type: 'matrix', ref: 'A' },
//     { type: 'operator', symbol: opSymbol },
//     { type: 'matrix', ref: 'B' },
//     { type: 'operator', symbol: '=' },
//     { type: 'matrix', ref: 'C' }
//   ];

//   const scenes = [];

//   // Intro
//   scenes.push({
//     title: `Matrix ${opWord}`,
//     formula:
//       `Both A and B are ${rows}×${cols}. To compute C = A ${opSymbol} B, ` +
//       `pair up each cell of A with its counterpart in B and ${opVerb} them.`,
//     matrices: baseMatrices(makeCOverrides(-1)),
//     layout: baseLayout,
//     highlights: {}
//   });

//   // Per-cell scenes
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       scenes.push({
//         title:
//           `c<sub>${i + 1},${j + 1}</sub> = ` +
//           `a<sub>${i + 1},${j + 1}</sub> ${opSymbol} b<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           `Take the cell at row ${i + 1}, column ${j + 1} from each of A and B, ` +
//           `and write their ${opNoun} into C[${i + 1},${j + 1}].`,
//         matrices: baseMatrices(makeCOverrides(idx)),
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
//   scenes.push({
//     title: 'Done',
//     formula:
//       `C is filled. Every entry c<sub>i,j</sub> = ` +
//       `a<sub>i,j</sub> ${opSymbol} b<sub>i,j</sub>. ` +
//       `${isAdd ? 'Addition' : 'Subtraction'} is element-wise: ` +
//       `the result has the same shape as the inputs, and each cell ` +
//       `depends only on its own pair.`,
//     matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
//     layout: baseLayout,
//     highlights: {}
//   });

//   return scenes;
// }

// // -----------------------------------------------------------
// // UI helpers
// // -----------------------------------------------------------
// function InfoIcon({ tip }) {
//   return (
//     <span
//       className="aw-info"
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
//       <span className="aw-tip">{tip}</span>
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
//           className="aw-stepper-btn"
//           onClick={() => onChange(Math.min(max, value + 1))}
//           disabled={value >= max}
//           style={chevButtonStyle}
//           aria-label="Increase"
//         >▲</button>
//         <button
//           className="aw-stepper-btn"
//           onClick={() => onChange(Math.max(min, value - 1))}
//           disabled={value <= min}
//           style={chevButtonStyle}
//           aria-label="Decrease"
//         >▼</button>
//       </span>
//     </span>
//   );
// }

// function Segmented({ options, value, onChange }) {
//   return (
//     <div style={{
//       display: 'inline-flex',
//       borderRadius: '6px',
//       border: '1px solid #cbd5e1',
//       overflow: 'hidden'
//     }}>
//       {options.map((opt, idx) => {
//         const on = value === opt.value;
//         return (
//           <button
//             key={opt.value}
//             onClick={() => onChange(opt.value)}
//             style={{
//               padding: '6px 14px',
//               background: on ? '#dbeafe' : 'white',
//               color: on ? '#1e40af' : '#334155',
//               border: 'none',
//               borderRight: idx < options.length - 1 ? '1px solid #cbd5e1' : 'none',
//               fontSize: '13px',
//               fontWeight: on ? 600 : 'normal',
//               cursor: 'pointer',
//               fontFamily: 'Arial, sans-serif'
//             }}
//           >
//             <span style={mathInlineStyle}>{opt.label}</span>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// // ===========================================================
// // Main wrapper
// // ===========================================================
// export default function AdditionWrapper({
//   defaultRows = 2,
//   defaultCols = 3,
//   defaultOperation = 'add',
//   dimensionRange = [1, 2, 3, 4, 5],
//   title = 'Matrix Addition & Subtraction',
//   subtitle = 'Symbolic visualization of A ± B = C, cell by cell.',
//   defaultSpeed = 1200
// }) {
//   const [rows, setRows] = useState(defaultRows);
//   const [cols, setCols] = useState(defaultCols);
//   const [operation, setOperation] = useState(defaultOperation);

//   const min = dimensionRange[0];
//   const max = dimensionRange[dimensionRange.length - 1];

//   const scenes = useMemo(
//     () => buildScenes(rows, cols, operation),
//     [rows, cols, operation]
//   );

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//       padding: '22px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       {/* Scoped pseudo-class styles */}
//       <style>{`
//         .aw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
//         .aw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

//         .aw-info:hover, .aw-info:focus { background: #bfdbfe; outline: none; }

//         .aw-info .aw-tip {
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
//         .aw-info .aw-tip::before {
//           content: ''; position: absolute;
//           bottom: 100%; left: 50%; transform: translateX(-50%);
//           border: 5px solid transparent; border-bottom-color: #1e293b;
//         }
//         .aw-info:hover .aw-tip, .aw-info:focus .aw-tip {
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

//       {/* Control panel */}
//       <div style={{
//         background: 'white',
//         border: '1px solid #e5e7eb',
//         borderRadius: '10px',
//         padding: '18px',
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '32px',
//         alignItems: 'flex-start'
//       }}>
//         {/* Operation */}
//         <div>
//           <FieldLabel>Operation</FieldLabel>
//           <div>
//             <Segmented
//               options={[
//                 { value: 'add',      label: 'A + B' },
//                 { value: 'subtract', label: 'A − B' }
//               ]}
//               value={operation}
//               onChange={setOperation}
//             />
//           </div>
//         </div>

//         {/* Dimensions (with info icon) */}
//         <div>
//           <FieldLabel info={SAME_SHAPE_INFO}>
//             Dimensions (shared by A and B)
//           </FieldLabel>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             flexWrap: 'wrap'
//           }}>
//             <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>
//               A, B
//             </span>
//             <Stepper value={rows} onChange={setRows} min={min} max={max} />
//             <span style={{ color: '#94a3b8' }}>×</span>
//             <Stepper value={cols} onChange={setCols} min={min} max={max} />
//           </div>
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
// AdditionWrapper v2
// Visualizes A ± B = C, cell by cell.
// - Operation toggle: addition / subtraction
// - Dimensions are linked: A, B, C all share the same shape
// - Info icon next to dimensions label explains the same-
//   shape requirement
// - No strategy axis: addition/subtraction is element-wise
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

const SAME_SHAPE_INFO =
  'A and B must have the same dimensions — the same number of rows and the same number of columns. The result C has that same shape, and each cell of C is computed from the corresponding pair of cells in A and B.';

// -----------------------------------------------------------
// Scene builder
// -----------------------------------------------------------
function buildScenes(rows, cols, operation) {
  const isAdd = operation === 'add';
  const opSymbol = isAdd ? '+' : '−';
  const opWord = isAdd ? 'addition' : 'subtraction';
  const opVerb = isAdd ? 'add' : 'subtract';
  const opNoun = isAdd ? 'sum' : 'difference';

  const maxDim = Math.max(rows, cols);
  const cFontSize =
    maxDim <= 3 ? '13px' : maxDim === 4 ? '11px' : '10px';

  const filledCellDisplay = (i, j) => ({
    display: (
      <>
        a<span style={subStyle}>{i + 1},{j + 1}</span>
        <span style={{ fontStyle: 'normal', margin: '0 2px' }}>{opSymbol}</span>
        b<span style={subStyle}>{i + 1},{j + 1}</span>
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
    B: { symbol: 'b', rows, cols, label: 'B' },
    C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
  });

  const baseLayout = [
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: opSymbol },
    { type: 'matrix', ref: 'B' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'C' }
  ];

  const scenes = [];

  // Intro
  scenes.push({
    title: `Matrix ${opWord}`,
    formula:
      `Both A and B are ${rows}×${cols}. To compute C = A ${opSymbol} B, ` +
      `pair up each cell of A with its counterpart in B and ${opVerb} them.`,
    matrices: baseMatrices(makeCOverrides(-1)),
    layout: baseLayout,
    highlights: {}
  });

  // Per-cell scenes
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      scenes.push({
        title:
          `c<sub>${i + 1},${j + 1}</sub> = ` +
          `a<sub>${i + 1},${j + 1}</sub> ${opSymbol} b<sub>${i + 1},${j + 1}</sub>`,
        formula:
          `Take the cell at row ${i + 1}, column ${j + 1} from each of A and B, ` +
          `and write their ${opNoun} into C[${i + 1},${j + 1}].`,
        matrices: baseMatrices(makeCOverrides(idx)),
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
  scenes.push({
    title: 'Done',
    formula:
      `C is filled. Every entry c<sub>i,j</sub> = ` +
      `a<sub>i,j</sub> ${opSymbol} b<sub>i,j</sub>. ` +
      `${isAdd ? 'Addition' : 'Subtraction'} is element-wise: ` +
      `the result has the same shape as the inputs, and each cell ` +
      `depends only on its own pair.`,
    matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
    layout: baseLayout,
    highlights: {}
  });

  return scenes;
}

// -----------------------------------------------------------
// Scoped CSS — extracted to avoid hydration mismatch on quoted
// content values inside the inline <style> template literal.
// -----------------------------------------------------------
const SCOPED_CSS = `
.aw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
.aw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

.aw-info:hover, .aw-info:focus { background: #bfdbfe; outline: none; }

.aw-info .aw-tip {
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
.aw-info .aw-tip::before {
  content: ""; position: absolute;
  bottom: 100%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent; border-bottom-color: #1e293b;
}
.aw-info:hover .aw-tip, .aw-info:focus .aw-tip {
  visibility: visible; opacity: 1;
}
`;

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="aw-info"
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
      <span className="aw-tip">{tip}</span>
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
          className="aw-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >▲</button>
        <button
          className="aw-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >▼</button>
      </span>
    </span>
  );
}

function Segmented({ options, value, onChange }) {
  return (
    <div style={{
      display: 'inline-flex',
      borderRadius: '6px',
      border: '1px solid #cbd5e1',
      overflow: 'hidden'
    }}>
      {options.map((opt, idx) => {
        const on = value === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            style={{
              padding: '6px 14px',
              background: on ? '#dbeafe' : 'white',
              color: on ? '#1e40af' : '#334155',
              border: 'none',
              borderRight: idx < options.length - 1 ? '1px solid #cbd5e1' : 'none',
              fontSize: '13px',
              fontWeight: on ? 600 : 'normal',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            <span style={mathInlineStyle}>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ===========================================================
// Main wrapper
// ===========================================================
export default function AdditionWrapper({
  defaultRows = 2,
  defaultCols = 3,
  defaultOperation = 'add',
  dimensionRange = [1, 2, 3, 4, 5],
  title = 'Matrix Addition & Subtraction',
  subtitle = 'Symbolic visualization of A ± B = C, cell by cell.',
  defaultSpeed = 1200
}) {
  const [rows, setRows] = useState(defaultRows);
  const [cols, setCols] = useState(defaultCols);
  const [operation, setOperation] = useState(defaultOperation);

  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const scenes = useMemo(
    () => buildScenes(rows, cols, operation),
    [rows, cols, operation]
  );

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Scoped pseudo-class styles — injected via dangerouslySetInnerHTML
          so React doesn't re-encode quotes in the CSS content property
          (which caused a server/client hydration mismatch). */}
      <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />

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
        {/* Operation */}
        <div>
          <FieldLabel>Operation</FieldLabel>
          <div>
            <Segmented
              options={[
                { value: 'add',      label: 'A + B' },
                { value: 'subtract', label: 'A − B' }
              ]}
              value={operation}
              onChange={setOperation}
            />
          </div>
        </div>

        {/* Dimensions (with info icon) */}
        <div>
          <FieldLabel info={SAME_SHAPE_INFO}>
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
            <span style={{ color: '#94a3b8' }}>×</span>
            <Stepper value={cols} onChange={setCols} min={min} max={max} />
          </div>
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
          sceneCanvasProps={{ showCaption: false }}
          
        />
      </div>
    </div>
  );
}