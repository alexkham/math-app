// // // 'use client';

// // // import React, { useState, useMemo } from 'react';
// // // import { ScenePlayer } from './MatrixCore';

// // // // ===========================================================
// // // // MultiplicationWrapper
// // // // Self-contained component for matrix multiplication visualization.
// // // // Holds: dimension state, scenario generation, title, controls.
// // // // Page just renders <MultiplicationWrapper />.
// // // // ===========================================================

// // // // ---- scenario generator (helper, internal) ----
// // // function buildFormula(ci, cj, aCols, activeK) {
// // //   const parts = [`<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> = `];
// // //   for (let k = 0; k < aCols; k++) {
// // //     let bg = 'transparent';
// // //     let weight = 'normal';
// // //     if (activeK === k) {
// // //       bg = '#dbeafe';
// // //       weight = '700';
// // //     } else if ((activeK > k && activeK !== -1) || activeK === aCols) {
// // //       bg = '#e0e7ef';
// // //     }
// // //     parts.push(
// // //       `<span style="background:${bg};padding:1px 4px;border-radius:3px;font-weight:${weight};transition:background 0.25s ease">` +
// // //       `<span style="font-style:italic">a</span><sub>${ci + 1},${k + 1}</sub>·` +
// // //       `<span style="font-style:italic">b</span><sub>${k + 1},${cj + 1}</sub>` +
// // //       `</span>`
// // //     );
// // //     if (k < aCols - 1) parts.push(' + ');
// // //   }
// // //   return parts.join('');
// // // }

// // // function buildMultiplicationScenes(aRows, aCols, bCols) {
// // //   const matrices = {
// // //     A: { symbol: 'a', label: 'A', rows: aRows, cols: aCols, bracketColor: '#1e40af' },
// // //     B: { symbol: 'b', label: 'B', rows: aCols, cols: bCols, bracketColor: '#475569' },
// // //     C: { symbol: 'c', label: 'C', rows: aRows, cols: bCols, bracketColor: '#16a34a' }
// // //   };

// // //   const layout = [
// // //     { type: 'matrix', ref: 'A' },
// // //     { type: 'operator', symbol: '×' },
// // //     { type: 'matrix', ref: 'B' },
// // //     { type: 'operator', symbol: '=' },
// // //     { type: 'matrix', ref: 'C' }
// // //   ];

// // //   const allCPending = () => {
// // //     const out = [];
// // //     for (let i = 0; i < aRows; i++) {
// // //       for (let j = 0; j < bCols; j++) {
// // //         out.push([i, j, 'targetPending']);
// // //       }
// // //     }
// // //     return out;
// // //   };

// // //   const scenes = [];

// // //   scenes.push({
// // //     matrices, layout,
// // //     highlights: { C: { cells: allCPending() } },
// // //     overlays: [],
// // //     title: 'Matrix multiplication: A × B = C',
// // //     formula: `Each <span style="font-style:italic">c</span><sub>i,j</sub> = (row i of A) · (column j of B). ${aRows * bCols} cells to compute.`
// // //   });

// // //   for (let ci = 0; ci < aRows; ci++) {
// // //     for (let cj = 0; cj < bCols; cj++) {
// // //       const pendingMinusTarget = allCPending().filter(([i, j]) => !(i === ci && j === cj));

// // //       scenes.push({
// // //         matrices, layout,
// // //         highlights: {
// // //           A: { rows: [[ci, 'row']] },
// // //           B: { cols: [[cj, 'col']] },
// // //           C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
// // //         },
// // //         overlays: [],
// // //         title: `Computing <span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub>`,
// // //         formula: buildFormula(ci, cj, aCols, -1)
// // //       });

// // //       for (let k = 0; k < aCols; k++) {
// // //         scenes.push({
// // //           matrices, layout,
// // //           highlights: {
// // //             A: { rows: [[ci, 'row']], cells: [[ci, k, 'pairA']] },
// // //             B: { cols: [[cj, 'col']], cells: [[k, cj, 'pairB']] },
// // //             C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
// // //           },
// // //           overlays: [
// // //             { type: 'cell-arrow', from: { matrix: 'A', row: ci, col: k }, to: { matrix: 'C', row: ci, col: cj }, style: 'primary' },
// // //             { type: 'cell-arrow', from: { matrix: 'B', row: k, col: cj }, to: { matrix: 'C', row: ci, col: cj }, style: 'secondary' }
// // //           ],
// // //           title: `<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> — term ${k + 1} of ${aCols}`,
// // //           formula: buildFormula(ci, cj, aCols, k)
// // //         });
// // //       }

// // //       const completed = [];
// // //       for (let i = 0; i < aRows; i++) {
// // //         for (let j = 0; j < bCols; j++) {
// // //           const before = i < ci || (i === ci && j <= cj);
// // //           completed.push([i, j, before ? 'target' : 'targetPending']);
// // //         }
// // //       }
// // //       scenes.push({
// // //         matrices, layout,
// // //         highlights: { C: { cells: completed } },
// // //         overlays: [],
// // //         title: `<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> complete &nbsp;✓`,
// // //         formula: buildFormula(ci, cj, aCols, aCols)
// // //       });
// // //     }
// // //   }

// // //   const allTarget = [];
// // //   for (let i = 0; i < aRows; i++) {
// // //     for (let j = 0; j < bCols; j++) {
// // //       allTarget.push([i, j, 'target']);
// // //     }
// // //   }
// // //   scenes.push({
// // //     matrices, layout,
// // //     highlights: { C: { cells: allTarget } },
// // //     overlays: [],
// // //     title: 'All cells computed — multiplication complete',
// // //     formula: `Result C is ${aRows}×${bCols}. Each entry is a dot product of a row from A and a column from B.`
// // //   });

// // //   return scenes;
// // // }

// // // // ===========================================================
// // // // Component
// // // // ===========================================================
// // // export default function MultiplicationWrapper({
// // //   defaultARows = 2,
// // //   defaultACols = 3,
// // //   defaultBCols = 2,
// // //   dimensionRange = [1, 2, 3, 4, 5],
// // //   title = 'Matrix Multiplication',
// // //   subtitle = 'Symbolic visualization of A × B = C, step by step.',
// // //   showDimensionControls = true,
// // //   showSpeedSelector = true,
// // //   showStepIndicator = true,
// // //   defaultSpeed = 1200
// // // }) {
// // //   const [aRows, setARows] = useState(defaultARows);
// // //   const [aCols, setACols] = useState(defaultACols);
// // //   const [bCols, setBCols] = useState(defaultBCols);

// // //   const scenes = useMemo(
// // //     () => buildMultiplicationScenes(aRows, aCols, bCols),
// // //     [aRows, aCols, bCols]
// // //   );

// // //   const selectStyle = {
// // //     padding: '6px 10px',
// // //     border: '1px solid #cbd5e1',
// // //     borderRadius: '5px',
// // //     fontSize: '13px',
// // //     background: 'white',
// // //     cursor: 'pointer',
// // //     color: '#1e293b'
// // //   };

// // //   const labelStyle = {
// // //     display: 'block',
// // //     fontSize: '11px',
// // //     color: '#64748b',
// // //     marginBottom: '3px',
// // //     fontWeight: 500
// // //   };

// // //   return (
// // //     <div style={{
// // //       background: 'white',
// // //       borderRadius: '10px',
// // //       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
// // //       padding: '20px',
// // //       fontFamily: 'Arial, sans-serif'
// // //     }}>
// // //       {(title || subtitle) && (
// // //         <div style={{ marginBottom: '16px' }}>
// // //           {title && (
// // //             <h2 style={{
// // //               fontSize: '20px',
// // //               color: '#1e40af',
// // //               margin: '0 0 4px 0',
// // //               fontWeight: 'bold'
// // //             }}>
// // //               {title}
// // //             </h2>
// // //           )}
// // //           {subtitle && (
// // //             <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>
// // //               {subtitle}
// // //             </p>
// // //           )}
// // //         </div>
// // //       )}

// // //       {showDimensionControls && (
// // //         <div style={{
// // //           display: 'flex',
// // //           gap: '14px',
// // //           alignItems: 'flex-end',
// // //           marginBottom: '16px',
// // //           flexWrap: 'wrap',
// // //           padding: '12px 14px',
// // //           background: '#f1f5f9',
// // //           borderRadius: '8px',
// // //           border: '1px solid #e2e8f0'
// // //         }}>
// // //           <div>
// // //             <label style={labelStyle}>A rows</label>
// // //             <select
// // //               value={aRows}
// // //               onChange={(e) => setARows(parseInt(e.target.value))}
// // //               style={selectStyle}
// // //             >
// // //               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label style={labelStyle}>A cols / B rows</label>
// // //             <select
// // //               value={aCols}
// // //               onChange={(e) => setACols(parseInt(e.target.value))}
// // //               style={selectStyle}
// // //             >
// // //               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label style={labelStyle}>B cols</label>
// // //             <select
// // //               value={bCols}
// // //               onChange={(e) => setBCols(parseInt(e.target.value))}
// // //               style={selectStyle}
// // //             >
// // //               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
// // //             </select>
// // //           </div>
// // //           <div style={{
// // //             fontSize: '12px',
// // //             color: '#64748b',
// // //             marginLeft: 'auto',
// // //             paddingBottom: '6px'
// // //           }}>
// // //             A: {aRows}×{aCols} &nbsp; B: {aCols}×{bCols} &nbsp; C: {aRows}×{bCols}
// // //           </div>
// // //         </div>
// // //       )}

// // //       <ScenePlayer
// // //         scenes={scenes}
// // //         defaultSpeed={defaultSpeed}
// // //         showSpeedSelector={showSpeedSelector}
// // //         showStepIndicator={showStepIndicator}
// // //       />
// // //     </div>
// // //   );
// // // }


// // 'use client';

// // import React, { useState, useMemo } from 'react';
// // import { ScenePlayer } from './MatrixCore';

// // // ===========================================================
// // // MultiplicationWrapper
// // // Self-contained component for matrix multiplication visualization.
// // // Holds: dimension state, scenario generation, title, controls.
// // // Page just renders <MultiplicationWrapper />.
// // // ===========================================================

// // // ---- scenario generator (helper, internal) ----
// // function buildFormula(ci, cj, aCols, activeK) {
// //   const parts = [`<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> = `];
// //   for (let k = 0; k < aCols; k++) {
// //     let bg = 'transparent';
// //     let weight = 'normal';
// //     if (activeK === k) {
// //       bg = '#dbeafe';
// //       weight = '700';
// //     } else if ((activeK > k && activeK !== -1) || activeK === aCols) {
// //       bg = '#e0e7ef';
// //     }
// //     parts.push(
// //       `<span style="background:${bg};padding:1px 4px;border-radius:3px;font-weight:${weight};transition:background 0.25s ease">` +
// //       `<span style="font-style:italic">a</span><sub>${ci + 1},${k + 1}</sub>·` +
// //       `<span style="font-style:italic">b</span><sub>${k + 1},${cj + 1}</sub>` +
// //       `</span>`
// //     );
// //     if (k < aCols - 1) parts.push(' + ');
// //   }
// //   return parts.join('');
// // }

// // function buildMultiplicationScenes(aRows, aCols, bCols) {
// //   const matrices = {
// //     A: { symbol: 'a', label: 'A', rows: aRows, cols: aCols, bracketColor: '#1e40af' },
// //     B: { symbol: 'b', label: 'B', rows: aCols, cols: bCols, bracketColor: '#475569' },
// //     C: { symbol: 'c', label: 'C', rows: aRows, cols: bCols, bracketColor: '#16a34a' }
// //   };

// //   const layout = [
// //     { type: 'matrix', ref: 'A' },
// //     { type: 'operator', symbol: '×' },
// //     { type: 'matrix', ref: 'B' },
// //     { type: 'operator', symbol: '=' },
// //     { type: 'matrix', ref: 'C' }
// //   ];

// //   const allCPending = () => {
// //     const out = [];
// //     for (let i = 0; i < aRows; i++) {
// //       for (let j = 0; j < bCols; j++) {
// //         out.push([i, j, 'targetPending']);
// //       }
// //     }
// //     return out;
// //   };

// //   const scenes = [];

// //   scenes.push({
// //     matrices, layout,
// //     highlights: { C: { cells: allCPending() } },
// //     overlays: [],
// //     title: 'Matrix multiplication: A × B = C',
// //     formula: `Each <span style="font-style:italic">c</span><sub>i,j</sub> = (row i of A) · (column j of B). ${aRows * bCols} cells to compute.`
// //   });

// //   for (let ci = 0; ci < aRows; ci++) {
// //     for (let cj = 0; cj < bCols; cj++) {
// //       const pendingMinusTarget = allCPending().filter(([i, j]) => !(i === ci && j === cj));

// //       scenes.push({
// //         matrices, layout,
// //         highlights: {
// //           A: { rows: [[ci, 'row']] },
// //           B: { cols: [[cj, 'col']] },
// //           C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
// //         },
// //         overlays: [],
// //         title: `Computing <span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub>`,
// //         formula: buildFormula(ci, cj, aCols, -1)
// //       });

// //       for (let k = 0; k < aCols; k++) {
// //         scenes.push({
// //           matrices, layout,
// //           highlights: {
// //             A: { rows: [[ci, 'row']], cells: [[ci, k, 'pairA']] },
// //             B: { cols: [[cj, 'col']], cells: [[k, cj, 'pairB']] },
// //             C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
// //           },
// //           overlays: [
// //             { type: 'cell-arrow', from: { matrix: 'A', row: ci, col: k }, to: { matrix: 'C', row: ci, col: cj }, style: 'primary' },
// //             { type: 'cell-arrow', from: { matrix: 'B', row: k, col: cj }, to: { matrix: 'C', row: ci, col: cj }, style: 'secondary' }
// //           ],
// //           title: `<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> — term ${k + 1} of ${aCols}`,
// //           formula: buildFormula(ci, cj, aCols, k)
// //         });
// //       }

// //       const completed = [];
// //       for (let i = 0; i < aRows; i++) {
// //         for (let j = 0; j < bCols; j++) {
// //           const before = i < ci || (i === ci && j <= cj);
// //           completed.push([i, j, before ? 'target' : 'targetPending']);
// //         }
// //       }
// //       scenes.push({
// //         matrices, layout,
// //         highlights: { C: { cells: completed } },
// //         overlays: [],
// //         title: `<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> complete &nbsp;✓`,
// //         formula: buildFormula(ci, cj, aCols, aCols)
// //       });
// //     }
// //   }

// //   const allTarget = [];
// //   for (let i = 0; i < aRows; i++) {
// //     for (let j = 0; j < bCols; j++) {
// //       allTarget.push([i, j, 'target']);
// //     }
// //   }
// //   scenes.push({
// //     matrices, layout,
// //     highlights: { C: { cells: allTarget } },
// //     overlays: [],
// //     title: 'All cells computed — multiplication complete',
// //     formula: `Result C is ${aRows}×${bCols}. Each entry is a dot product of a row from A and a column from B.`
// //   });

// //   return scenes;
// // }

// // // ===========================================================
// // // Component
// // // ===========================================================
// // export default function MultiplicationWrapper({
// //   defaultARows = 2,
// //   defaultACols = 3,
// //   defaultBCols = 2,
// //   dimensionRange = [1, 2, 3, 4, 5],
// //   title = 'Matrix Multiplication',
// //   subtitle = 'Symbolic visualization of A × B = C, step by step.',
// //   showDimensionControls = true,
// //   showSpeedSelector = true,
// //   showStepIndicator = true,
// //   defaultSpeed = 1200
// // }) {
// //   const [aRows, setARows] = useState(defaultARows);
// //   const [aCols, setACols] = useState(defaultACols);
// //   const [bCols, setBCols] = useState(defaultBCols);

// //   const scenes = useMemo(
// //     () => buildMultiplicationScenes(aRows, aCols, bCols),
// //     [aRows, aCols, bCols]
// //   );

// //   const selectStyle = {
// //     padding: '6px 10px',
// //     border: '1px solid #cbd5e1',
// //     borderRadius: '5px',
// //     fontSize: '13px',
// //     background: 'white',
// //     cursor: 'pointer',
// //     color: '#1e293b'
// //   };

// //   const labelStyle = {
// //     display: 'block',
// //     fontSize: '11px',
// //     color: '#64748b',
// //     marginBottom: '3px',
// //     fontWeight: 500
// //   };

// //   return (
// //     <div style={{
// //       background: 'white',
// //       borderRadius: '10px',
// //       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
// //       padding: '22px',
// //       fontFamily: 'Arial, sans-serif'
// //     }}>
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

// //       {showDimensionControls && (
// //         <div style={{
// //           display: 'flex',
// //           gap: '16px',
// //           alignItems: 'flex-end',
// //           marginBottom: '18px',
// //           flexWrap: 'wrap',
// //           padding: '14px 16px',
// //           background: '#f1f5f9',
// //           borderRadius: '8px',
// //           border: '1px solid #e2e8f0'
// //         }}>
// //           <div>
// //             <label style={labelStyle}>A rows</label>
// //             <select
// //               value={aRows}
// //               onChange={(e) => setARows(parseInt(e.target.value))}
// //               style={selectStyle}
// //             >
// //               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
// //             </select>
// //           </div>
// //           <div>
// //             <label style={labelStyle}>A cols / B rows</label>
// //             <select
// //               value={aCols}
// //               onChange={(e) => setACols(parseInt(e.target.value))}
// //               style={selectStyle}
// //             >
// //               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
// //             </select>
// //           </div>
// //           <div>
// //             <label style={labelStyle}>B cols</label>
// //             <select
// //               value={bCols}
// //               onChange={(e) => setBCols(parseInt(e.target.value))}
// //               style={selectStyle}
// //             >
// //               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
// //             </select>
// //           </div>
// //           <div style={{
// //             fontSize: '13px',
// //             color: '#64748b',
// //             marginLeft: 'auto',
// //             paddingBottom: '7px'
// //           }}>
// //             A: {aRows}×{aCols} &nbsp; B: {aCols}×{bCols} &nbsp; C: {aRows}×{bCols}
// //           </div>
// //         </div>
// //       )}

// //       <ScenePlayer
// //         scenes={scenes}
// //         defaultSpeed={defaultSpeed}
// //         showSpeedSelector={showSpeedSelector}
// //         showStepIndicator={showStepIndicator}
// //         showStepLog={true}
// //         stepLogTitle="Step explanations"
// //       />
// //     </div>
// //   );
// // }


// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// // ===========================================================
// // MultiplicationWrapper
// // Self-contained component for matrix multiplication visualization.
// // Holds: dimension state, scenario generation, title, controls.
// // Page just renders <MultiplicationWrapper />.
// // ===========================================================

// // ---- scenario generator (helper, internal) ----
// function buildFormula(ci, cj, aCols, activeK) {
//   const parts = [`<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> = `];
//   for (let k = 0; k < aCols; k++) {
//     let bg = 'transparent';
//     let weight = 'normal';
//     if (activeK === k) {
//       bg = '#dbeafe';
//       weight = '700';
//     } else if ((activeK > k && activeK !== -1) || activeK === aCols) {
//       bg = '#e0e7ef';
//     }
//     parts.push(
//       `<span style="background:${bg};padding:1px 4px;border-radius:3px;font-weight:${weight};transition:background 0.25s ease">` +
//       `<span style="font-style:italic">a</span><sub>${ci + 1},${k + 1}</sub>·` +
//       `<span style="font-style:italic">b</span><sub>${k + 1},${cj + 1}</sub>` +
//       `</span>`
//     );
//     if (k < aCols - 1) parts.push(' + ');
//   }
//   return parts.join('');
// }

// function buildMultiplicationScenes(aRows, aCols, bCols) {
//   const matrices = {
//     A: { symbol: 'a', label: 'A', rows: aRows, cols: aCols, bracketColor: '#1e40af' },
//     B: { symbol: 'b', label: 'B', rows: aCols, cols: bCols, bracketColor: '#475569' },
//     C: { symbol: 'c', label: 'C', rows: aRows, cols: bCols, bracketColor: '#16a34a' }
//   };

//   const layout = [
//     { type: 'matrix', ref: 'A' },
//     { type: 'operator', symbol: '×' },
//     { type: 'matrix', ref: 'B' },
//     { type: 'operator', symbol: '=' },
//     { type: 'matrix', ref: 'C' }
//   ];

//   const allCPending = () => {
//     const out = [];
//     for (let i = 0; i < aRows; i++) {
//       for (let j = 0; j < bCols; j++) {
//         out.push([i, j, 'targetPending']);
//       }
//     }
//     return out;
//   };

//   const scenes = [];

//   scenes.push({
//     matrices, layout,
//     highlights: { C: { cells: allCPending() } },
//     overlays: [],
//     title: 'Matrix multiplication: A × B = C',
//     formula: `Each <span style="font-style:italic">c</span><sub>i,j</sub> = (row i of A) · (column j of B). ${aRows * bCols} cells to compute.`
//   });

//   for (let ci = 0; ci < aRows; ci++) {
//     for (let cj = 0; cj < bCols; cj++) {
//       const pendingMinusTarget = allCPending().filter(([i, j]) => !(i === ci && j === cj));

//       scenes.push({
//         matrices, layout,
//         highlights: {
//           A: { rows: [[ci, 'row']] },
//           B: { cols: [[cj, 'col']] },
//           C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
//         },
//         overlays: [],
//         title: `Computing <span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub>`,
//         formula: buildFormula(ci, cj, aCols, -1)
//       });

//       for (let k = 0; k < aCols; k++) {
//         scenes.push({
//           matrices, layout,
//           highlights: {
//             A: { rows: [[ci, 'row']], cells: [[ci, k, 'pairA']] },
//             B: { cols: [[cj, 'col']], cells: [[k, cj, 'pairB']] },
//             C: { cells: [...pendingMinusTarget, [ci, cj, 'target']] }
//           },
//           overlays: [
//             { type: 'cell-arrow', from: { matrix: 'A', row: ci, col: k }, to: { matrix: 'C', row: ci, col: cj }, style: 'primary' },
//             { type: 'cell-arrow', from: { matrix: 'B', row: k, col: cj }, to: { matrix: 'C', row: ci, col: cj }, style: 'secondary' }
//           ],
//           title: `<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> — term ${k + 1} of ${aCols}`,
//           formula: buildFormula(ci, cj, aCols, k)
//         });
//       }

//       const completed = [];
//       for (let i = 0; i < aRows; i++) {
//         for (let j = 0; j < bCols; j++) {
//           const before = i < ci || (i === ci && j <= cj);
//           completed.push([i, j, before ? 'target' : 'targetPending']);
//         }
//       }
//       scenes.push({
//         matrices, layout,
//         highlights: { C: { cells: completed } },
//         overlays: [],
//         title: `<span style="font-style:italic">c</span><sub>${ci + 1},${cj + 1}</sub> complete &nbsp;✓`,
//         formula: buildFormula(ci, cj, aCols, aCols)
//       });
//     }
//   }

//   const allTarget = [];
//   for (let i = 0; i < aRows; i++) {
//     for (let j = 0; j < bCols; j++) {
//       allTarget.push([i, j, 'target']);
//     }
//   }
//   scenes.push({
//     matrices, layout,
//     highlights: { C: { cells: allTarget } },
//     overlays: [],
//     title: 'All cells computed — multiplication complete',
//     formula: `Result C is ${aRows}×${bCols}. Each entry is a dot product of a row from A and a column from B.`
//   });

//   return scenes;
// }

// // ===========================================================
// // Component
// // ===========================================================
// export default function MultiplicationWrapper({
//   defaultARows = 2,
//   defaultACols = 3,
//   defaultBCols = 2,
//   dimensionRange = [1, 2, 3, 4, 5],
//   title = 'Matrix Multiplication',
//   subtitle = 'Symbolic visualization of A × B = C, step by step.',
//   showDimensionControls = true,
//   showSpeedSelector = true,
//   showStepIndicator = true,
//   defaultSpeed = 1200
// }) {
//   const [aRows, setARows] = useState(defaultARows);
//   const [aCols, setACols] = useState(defaultACols);
//   const [bCols, setBCols] = useState(defaultBCols);

//   const scenes = useMemo(
//     () => buildMultiplicationScenes(aRows, aCols, bCols),
//     [aRows, aCols, bCols]
//   );

//   const selectStyle = {
//     padding: '6px 10px',
//     border: '1px solid #cbd5e1',
//     borderRadius: '5px',
//     fontSize: '13px',
//     background: 'white',
//     cursor: 'pointer',
//     color: '#1e293b'
//   };

//   const labelStyle = {
//     display: 'block',
//     fontSize: '11px',
//     color: '#64748b',
//     marginBottom: '3px',
//     fontWeight: 500
//   };

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//       padding: '22px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
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

//       {showDimensionControls && (
//         <div style={{
//           display: 'flex',
//           gap: '16px',
//           alignItems: 'flex-end',
//           marginBottom: '18px',
//           flexWrap: 'wrap',
//           padding: '14px 16px',
//           background: '#f1f5f9',
//           borderRadius: '8px',
//           border: '1px solid #e2e8f0'
//         }}>
//           <div>
//             <label style={labelStyle}>A rows</label>
//             <select
//               value={aRows}
//               onChange={(e) => setARows(parseInt(e.target.value))}
//               style={selectStyle}
//             >
//               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
//             </select>
//           </div>
//           <div>
//             <label style={labelStyle}>A cols / B rows</label>
//             <select
//               value={aCols}
//               onChange={(e) => setACols(parseInt(e.target.value))}
//               style={selectStyle}
//             >
//               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
//             </select>
//           </div>
//           <div>
//             <label style={labelStyle}>B cols</label>
//             <select
//               value={bCols}
//               onChange={(e) => setBCols(parseInt(e.target.value))}
//               style={selectStyle}
//             >
//               {dimensionRange.map((v) => <option key={v} value={v}>{v}</option>)}
//             </select>
//           </div>
//           <div style={{
//             fontSize: '13px',
//             color: '#64748b',
//             marginLeft: 'auto',
//             paddingBottom: '7px'
//           }}>
//             A: {aRows}×{aCols} &nbsp; B: {aCols}×{bCols} &nbsp; C: {aRows}×{bCols}
//           </div>
//         </div>
//       )}

//       <ScenePlayer
//         scenes={scenes}
//         defaultSpeed={defaultSpeed}
//         showSpeedSelector={showSpeedSelector}
//         showStepIndicator={showStepIndicator}
//         showStepLog={true}
//         stepLogTitle="Step explanations"
       
//       />
//     </div>
//   );
// }


'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';
import { STRATEGIES, STRATEGY_ORDER, getStrategy } from './strategies';

// ===========================================================
// MultiplicationWrapper v2
// Tabbed control panel: Scenario | Strategy.
// Axes:
//   - scenario: 'general' | 'matrix-vector' | 'vector-matrix'
//   - order: 'AB' | 'BA'
//   - sizes: aRows, aCols, bCols (scenario constrains them)
//   - strategy: id from STRATEGIES registry
// Wrapper delegates scene generation to the active strategy.
// ===========================================================

const SCENARIOS = {
  general: {
    id: 'general',
    label: 'General A × B',
    constrain: (aRows, aCols, bCols) => ({ aRows, aCols, bCols })
  },
  'matrix-vector': {
    id: 'matrix-vector',
    label: 'Matrix × vector',
    // A is n×m, B is m×1 — lock bCols to 1
    constrain: (aRows, aCols /* bCols ignored */) => ({ aRows, aCols, bCols: 1 })
  },
  'vector-matrix': {
    id: 'vector-matrix',
    label: 'Vector × matrix',
    // A is 1×m, B is m×n — lock aRows to 1
    constrain: (_aRows, aCols, bCols) => ({ aRows: 1, aCols, bCols })
  }
};

const SCENARIO_ORDER = ['general', 'matrix-vector', 'vector-matrix'];

// ---- helpers ----

// Compute the displayed product given chosen order. Returns
// { displayARows, displayACols, displayBCols, isUndefined }.
// For 'BA' we visualize B × A; this is undefined when B's cols (bCols)
// don't equal A's rows (aRows).
function resolveOrder(order, aRows, aCols, bCols) {
  if (order === 'AB') {
    return {
      displayARows: aRows,
      displayACols: aCols,
      displayBCols: bCols,
      isUndefined: false
    };
  }
  // BA: left = B (aCols × bCols), right = A (aRows × aCols).
  // Inner dims must match: bCols === aRows.
  return {
    displayARows: aCols,
    displayACols: bCols,
    displayBCols: aCols,
    isUndefined: bCols !== aRows
  };
}

// ===========================================================
// Component
// ===========================================================
export default function MultiplicationWrapper({
  defaultARows = 2,
  defaultACols = 3,
  defaultBCols = 2,
  dimensionRange = [1, 2, 3, 4, 5],
  title = 'Matrix Multiplication',
  subtitle = 'Symbolic visualization of A × B = C, step by step.',
  defaultSpeed = 1200,
  compatibilityToolHref = '/matrix/multiplication-compatibility'
}) {
  const [activeTab, setActiveTab] = useState('scenario');
  const [scenario, setScenario] = useState('general');
  const [order, setOrder] = useState('AB');
  const [strategy, setStrategy] = useState('row-column');

  const [aRows, setARows] = useState(defaultARows);
  const [aCols, setACols] = useState(defaultACols);
  const [bCols, setBCols] = useState(defaultBCols);

  // Apply scenario constraints to chosen dims.
  const constrained = useMemo(() => {
    return SCENARIOS[scenario].constrain(aRows, aCols, bCols);
  }, [scenario, aRows, aCols, bCols]);

  const resolved = useMemo(
    () => resolveOrder(order, constrained.aRows, constrained.aCols, constrained.bCols),
    [order, constrained]
  );

  const activeStrategy = getStrategy(strategy);

  const scenes = useMemo(() => {
    if (resolved.isUndefined) return [];
    if (!activeStrategy.enabled || !activeStrategy.build) return [];
    return activeStrategy.build(
      resolved.displayARows,
      resolved.displayACols,
      resolved.displayBCols,
      order
    );
  }, [resolved, activeStrategy, order]);

  // Whether BA is undefined for the current (constrained) sizes.
  const baWouldBeUndefined = constrained.bCols !== constrained.aRows;

  // ---- handlers ----
  const handleScenarioChange = (id) => {
    setScenario(id);
    // Snap dims into a sensible default if current ones violate the new scenario.
    if (id === 'matrix-vector' && bCols !== 1) setBCols(1);
    if (id === 'vector-matrix' && aRows !== 1) setARows(1);
  };

  const handleStrategyChange = (id) => {
    const s = STRATEGIES[id];
    if (!s || !s.enabled) return;
    setStrategy(id);
  };

  // ===========================================================
  // Render
  // ===========================================================
  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Inline scoped styles for tab hover/tooltip — pseudo-elements can't be inline */}
      <style>{`
        .mw-tab { position: relative; }
        .mw-tab:hover { color: #334155; }
        .mw-tab .mw-tip {
          visibility: hidden; opacity: 0;
          position: absolute; top: calc(100% + 8px); left: 50%;
          transform: translateX(-50%);
          background: #1e293b; color: #f1f5f9;
          font-size: 12px; line-height: 1.4; font-weight: 400;
          padding: 7px 11px; border-radius: 6px;
          width: 210px; text-align: center;
          pointer-events: none;
          transition: opacity 0.12s ease, visibility 0.12s;
          z-index: 10;
        }
        .mw-tab .mw-tip::before {
          content: ''; position: absolute;
          bottom: 100%; left: 50%; transform: translateX(-50%);
          border: 5px solid transparent; border-bottom-color: #1e293b;
        }
        .mw-tab:hover .mw-tip, .mw-tab:focus .mw-tip {
          visibility: visible; opacity: 1;
        }
        .mw-pill:hover { border-color: #94a3b8; }
        .mw-pill-active:hover { border-color: #2563eb; }
        .mw-strategy:hover { border-color: #94a3b8; }
        .mw-strategy-active:hover { border-color: #2563eb; }
        .mw-strategy-disabled { opacity: 0.55; cursor: not-allowed; }
        .mw-strategy-disabled:hover { border-color: #cbd5e1; }
        .mw-stepper-btn:hover { color: #1e40af; }
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

      {/* Tabbed control panel */}
      <ControlPanel
        activeTab={activeTab}
        onTabChange={setActiveTab}
        scenario={scenario}
        onScenarioChange={handleScenarioChange}
        order={order}
        onOrderChange={setOrder}
        baWouldBeUndefined={baWouldBeUndefined}
        aRows={aRows}
        aCols={aCols}
        bCols={bCols}
        constrained={constrained}
        setARows={setARows}
        setACols={setACols}
        setBCols={setBCols}
        dimensionRange={dimensionRange}
        strategy={strategy}
        onStrategyChange={handleStrategyChange}
        resolved={resolved}
      />

      {/* Output area: scene player or undefined banner */}
      <div style={{ marginTop: '18px' }}>
        {resolved.isUndefined ? (
          <UndefinedBanner
            scenario={SCENARIOS[scenario].label}
            order={order}
            aRows={constrained.aRows}
            aCols={constrained.aCols}
            bCols={constrained.bCols}
            compatibilityToolHref={compatibilityToolHref}
          />
        ) : (
          <ScenePlayer
            scenes={scenes}
            defaultSpeed={defaultSpeed}
            showSpeedSelector={true}
            showStepIndicator={true}
            showStepLog={true}
            stepLogTitle="Step explanations"
          />
        )}
      </div>
    </div>
  );
}

// ===========================================================
// ControlPanel — tabbed Scenario | Strategy
// ===========================================================
function ControlPanel({
  activeTab, onTabChange,
  scenario, onScenarioChange,
  order, onOrderChange,
  baWouldBeUndefined,
  aRows, aCols, bCols,
  constrained,
  setARows, setACols, setBCols,
  dimensionRange,
  strategy, onStrategyChange,
  resolved
}) {
  const strategyMeta = getStrategy(strategy);

  // Summary line shown in the tab strip (always visible)
  const summary = (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      color: '#64748b',
      padding: '12px 0',
      flexWrap: 'wrap'
    }}>
      <span>{SCENARIOS[scenario].label}</span>
      <span style={{ color: '#cbd5e1' }}>·</span>
      <span style={mathInlineStyle}>
        {order === 'AB' ? 'A × B' : 'B × A'}
      </span>
      <span style={{ color: '#cbd5e1' }}>·</span>
      <span>
        {resolved.isUndefined
          ? <span style={{ color: '#b91c1c', fontWeight: 600 }}>undefined</span>
          : `${resolved.displayARows}×${resolved.displayACols} · ${resolved.displayACols}×${resolved.displayBCols}`}
      </span>
      <span style={{ color: '#cbd5e1', margin: '0 4px' }}>|</span>
      <span>{strategyMeta.label}</span>
    </div>
  );

  return (
    <div style={{
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      overflow: 'hidden'
    }}>
      {/* Tab strip */}
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        padding: '0 16px',
        borderBottom: '1px solid #e5e7eb',
        background: '#f8fafc',
        flexWrap: 'wrap'
      }}>
        <TabButton
          active={activeTab === 'scenario'}
          onClick={() => onTabChange('scenario')}
          tooltip="Pick the multiplication case and matrix sizes"
        >
          Scenario
        </TabButton>
        <TabButton
          active={activeTab === 'strategy'}
          onClick={() => onTabChange('strategy')}
          tooltip="How each cell of C is built — same product, different mental model"
        >
          Strategy
        </TabButton>
        <div style={{ flex: 1 }} />
        {summary}
      </div>

      {/* Tab content */}
      <div style={{ padding: '18px' }}>
        {activeTab === 'scenario' && (
          <ScenarioTab
            scenario={scenario}
            onScenarioChange={onScenarioChange}
            order={order}
            onOrderChange={onOrderChange}
            baWouldBeUndefined={baWouldBeUndefined}
            aRows={aRows}
            aCols={aCols}
            bCols={bCols}
            constrained={constrained}
            setARows={setARows}
            setACols={setACols}
            setBCols={setBCols}
            dimensionRange={dimensionRange}
          />
        )}
        {activeTab === 'strategy' && (
          <StrategyTab
            strategy={strategy}
            onStrategyChange={onStrategyChange}
          />
        )}
      </div>
    </div>
  );
}

// ===========================================================
// Tab button with tooltip
// ===========================================================
function TabButton({ active, onClick, tooltip, children }) {
  const base = {
    padding: '12px 16px',
    background: active ? 'white' : 'transparent',
    border: 'none',
    borderBottom: `2px solid ${active ? '#2563eb' : 'transparent'}`,
    fontSize: '13px',
    color: active ? '#1e40af' : '#64748b',
    fontWeight: active ? 600 : 'normal',
    cursor: 'pointer',
    fontFamily: 'inherit',
    marginBottom: active ? '-1px' : 0
  };

  return (
    <button
      className="mw-tab"
      style={base}
      onClick={onClick}
    >
      {children}
      <span className="mw-tip">{tooltip}</span>
    </button>
  );
}

// ===========================================================
// Scenario tab content
// ===========================================================
function ScenarioTab({
  scenario, onScenarioChange,
  order, onOrderChange,
  baWouldBeUndefined,
  aRows, aCols, bCols,
  constrained,
  setARows, setACols, setBCols,
  dimensionRange
}) {
  return (
    <div>
      {/* Scenario pills */}
      <div style={{ marginBottom: '18px' }}>
        <FieldLabel>Scenario</FieldLabel>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {SCENARIO_ORDER.map((id) => (
            <Pill
              key={id}
              active={scenario === id}
              onClick={() => onScenarioChange(id)}
            >
              {SCENARIOS[id].label}
            </Pill>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: '36px',
        alignItems: 'start',
        rowGap: '14px'
      }}>
        {/* Order */}
        <div>
          <FieldLabel>Order</FieldLabel>
          <Segmented
            options={[
              { value: 'AB', label: 'A × B' },
              { value: 'BA', label: 'B × A', warning: baWouldBeUndefined }
            ]}
            value={order}
            onChange={onOrderChange}
          />
          {baWouldBeUndefined && order === 'BA' && (
            <p style={{
              fontSize: '11px',
              color: '#b91c1c',
              margin: '6px 0 0',
              fontStyle: 'italic'
            }}>
              undefined for these sizes
            </p>
          )}
        </div>

        {/* Dimensions */}
        <div>
          <FieldLabel>Dimensions</FieldLabel>
          <DimensionControls
            scenario={scenario}
            aRows={aRows}
            aCols={aCols}
            bCols={bCols}
            setARows={setARows}
            setACols={setACols}
            setBCols={setBCols}
            dimensionRange={dimensionRange}
          />
        </div>
      </div>
    </div>
  );
}

// ===========================================================
// Dimension controls — three steppers with constraints
//   - A.cols and B.rows are linked (B.rows shown as locked)
//   - Matrix × vector: B.cols locked to 1
//   - Vector × matrix: A.rows locked to 1
// ===========================================================
function DimensionControls({
  scenario,
  aRows, aCols, bCols,
  setARows, setACols, setBCols,
  dimensionRange
}) {
  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const aRowsLocked = scenario === 'vector-matrix';
  const bColsLocked = scenario === 'matrix-vector';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap'
    }}>
      {/* A */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
        <Stepper
          value={aRows}
          onChange={setARows}
          min={min}
          max={max}
          locked={aRowsLocked}
          lockReason="Vector × matrix: A must be 1 row"
        />
        <span style={{ color: '#94a3b8' }}>×</span>
        <Stepper
          value={aCols}
          onChange={setACols}
          min={min}
          max={max}
        />
      </div>

      {/* B */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>B</span>
        <Stepper
          value={aCols}
          onChange={() => {}}
          min={min}
          max={max}
          linked={true}
          lockReason="Linked to A's columns"
        />
        <span style={{ color: '#94a3b8' }}>×</span>
        <Stepper
          value={bCols}
          onChange={setBCols}
          min={min}
          max={max}
          locked={bColsLocked}
          lockReason="Matrix × vector: B must be 1 column"
        />
      </div>
    </div>
  );
}

// ===========================================================
// Stepper — number input with up/down chevrons
// `linked`  → dashed style, link icon, non-interactive (value
//             reflects another field)
// `locked`  → dashed style, lock icon, non-interactive (scenario
//             forces this value)
// ===========================================================
function Stepper({ value, onChange, min, max, linked = false, locked = false, lockReason }) {
  const interactive = !linked && !locked;
  const dashed = linked || locked;

  return (
    <span
      title={dashed ? lockReason : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px 4px 10px',
        borderRadius: '6px',
        background: dashed ? '#f1f5f9' : 'white',
        border: `1px ${dashed ? 'dashed' : 'solid'} ${dashed ? '#94a3b8' : '#cbd5e1'}`
      }}
    >
      <span style={{
        ...mathInlineStyle,
        fontWeight: 500,
        minWidth: '10px',
        textAlign: 'center',
        color: dashed ? '#64748b' : '#0f172a'
      }}>
        {value}
      </span>
      {interactive ? (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
          <button
            className="mw-stepper-btn"
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            style={chevButtonStyle}
            aria-label="Increase"
          >▲</button>
          <button
            className="mw-stepper-btn"
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            style={chevButtonStyle}
            aria-label="Decrease"
          >▼</button>
        </span>
      ) : (
        <span style={{
          fontSize: '11px',
          color: '#94a3b8',
          display: 'inline-flex',
          alignItems: 'center'
        }}>
          {linked ? '⇌' : '🔒'}
        </span>
      )}
    </span>
  );
}

// ===========================================================
// Strategy tab — 4 cards (3 disabled in this phase)
// ===========================================================
function StrategyTab({ strategy, onStrategyChange }) {
  return (
    <div>
      <FieldLabel>
        How each <span style={mathInlineStyle}>c<sub>ij</sub></span> of{' '}
        <span style={mathInlineStyle}>C</span> is built
      </FieldLabel>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px'
      }}>
        {STRATEGY_ORDER.map((id) => {
          const s = STRATEGIES[id];
          const active = strategy === id;
          return (
            <StrategyCard
              key={id}
              meta={s}
              active={active}
              disabled={!s.enabled}
              onClick={() => onStrategyChange(id)}
            />
          );
        })}
      </div>
    </div>
  );
}

function StrategyCard({ meta, active, disabled, onClick }) {
  const base = {
    background: active ? '#dbeafe' : 'white',
    border: active
      ? '2px solid #2563eb'
      : '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: active ? '11px 13px' : '12px 14px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Arial, sans-serif',
    transition: 'border-color 0.15s ease, background 0.15s ease'
  };

  const cls = [
    'mw-strategy',
    active && 'mw-strategy-active',
    disabled && 'mw-strategy-disabled'
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} style={base} onClick={disabled ? undefined : onClick}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '4px'
      }}>
        <span style={{
          fontSize: '14px',
          fontWeight: active ? 600 : 500,
          color: active ? '#1e40af' : '#334155'
        }}>
          {meta.label}
        </span>
        <span style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
          {meta.advanced && (
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: '#dbeafe',
              color: '#1e40af',
              fontWeight: 600
            }}>
              advanced
            </span>
          )}
          {disabled && (
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: '#f1f5f9',
              color: '#64748b',
              fontWeight: 500
            }}>
              soon
            </span>
          )}
          {active && (
            <span style={{ fontSize: '14px', color: '#2563eb' }}>✓</span>
          )}
        </span>
      </div>
      <p
        style={{
          fontSize: '12px',
          color: active ? '#475569' : '#64748b',
          margin: 0,
          lineHeight: 1.45
        }}
        dangerouslySetInnerHTML={{ __html: meta.description }}
      />
    </div>
  );
}

// ===========================================================
// Undefined banner — shown when current scenario+order+sizes
// produce an undefined product. Replaces the scene player.
// ===========================================================
function UndefinedBanner({ scenario, order, aRows, aCols, bCols, compatibilityToolHref }) {
  const leftDims = order === 'AB' ? `${aRows}×${aCols}` : `${aCols}×${bCols}`;
  const rightDims = order === 'AB' ? `${aCols}×${bCols}` : `${aRows}×${aCols}`;
  const leftInner = order === 'AB' ? aCols : bCols;
  const rightInner = order === 'AB' ? aCols : aRows;
  const leftLabel = order === 'AB' ? 'A' : 'B';
  const rightLabel = order === 'AB' ? 'B' : 'A';

  return (
    <div style={{
      padding: '20px 22px',
      background: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px'
    }}>
      <div style={{
        fontSize: '24px',
        lineHeight: 1,
        color: '#b91c1c',
        flexShrink: 0
      }}>⚠</div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontSize: '15px',
          fontWeight: 600,
          color: '#991b1b',
          margin: '0 0 6px'
        }}>
          <span style={mathInlineStyle}>
            {order === 'AB' ? 'A × B' : 'B × A'}
          </span>{' '}
          is undefined for these sizes
        </h3>
        <p style={{
          fontSize: '13px',
          color: '#7f1d1d',
          margin: '0 0 10px',
          lineHeight: 1.5
        }}>
          Scenario: <strong>{scenario}</strong>.{' '}
          <span style={mathInlineStyle}>{leftLabel}</span> is {leftDims},{' '}
          <span style={mathInlineStyle}>{rightLabel}</span> is {rightDims} — inner dimensions{' '}
          ({leftInner}, {rightInner}) don't match. Two matrices multiply only when the inner
          dimensions agree.
        </p>
        <a
          href={compatibilityToolHref}
          style={{
            fontSize: '13px',
            color: '#b91c1c',
            fontWeight: 600,
            textDecoration: 'underline'
          }}
        >
          See which size combinations multiply →
        </a>
      </div>
    </div>
  );
}

// ===========================================================
// Shared little bits
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

function FieldLabel({ children }) {
  return (
    <p style={{
      fontSize: '12px',
      color: '#64748b',
      margin: '0 0 8px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 500
    }}>
      {children}
    </p>
  );
}

function Pill({ active, onClick, children }) {
  return (
    <button
      className={active ? 'mw-pill mw-pill-active' : 'mw-pill'}
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
        fontFamily: 'Arial, sans-serif',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      {children}
    </button>
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
        const warn = opt.warning && on;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            style={{
              padding: '6px 14px',
              background: on ? (warn ? '#fee2e2' : '#dbeafe') : 'white',
              color: on ? (warn ? '#991b1b' : '#1e40af') : '#334155',
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