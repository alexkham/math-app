// import React, { useState, useMemo } from 'react';
// import solveLinearSystem, { subscript, fmtNum } from './solveLinearSystem';
// import { processContent } from '../../../utils/contentProcessor';

// /* ── styles ───────────────────────────────────────────────────── */

// const s = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa',
//     padding: '20px',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },
//   main: {
//     maxWidth: 'calc(100vw - 320px)',
//     margin: '0 auto',
//     backgroundColor: 'white',
//     borderRadius: '16px',
//     padding: '32px',
//     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//   },
//   header: { textAlign: 'center', marginBottom: '32px' },
//   title: {
//     fontSize: '2.5rem',
//     fontWeight: '600',
//     color: '#1a1a1a',
//     margin: '0 0 8px 0',
//   },
//   subtitle: { color: '#6b7280', fontSize: '1.1rem', margin: '0' },

//   /* 3-col — wider right panel */
//   threeCol: {
//     display: 'grid',
//     gridTemplateColumns: '200px 2fr 1.4fr',
//     gap: '24px',
//     alignItems: 'start',
//   },

//   /* LEFT */
//   leftPanel: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     position: 'sticky',
//     top: '20px',
//   },
//   leftTitle: {
//     fontSize: '0.95rem',
//     fontWeight: '700',
//     color: '#1f2937',
//     marginBottom: '4px',
//     textTransform: 'uppercase',
//     letterSpacing: '0.04em',
//   },

//   /* RIGHT */
//   rightPanel: {
//     backgroundColor: '#f0f4ff',
//     borderRadius: '12px',
//     padding: '24px',
//     border: '1px solid #d0d9f0',
//     position: 'sticky',
//     top: '20px',
//   },
//   explTitle: {
//     fontSize: '1.05rem',
//     fontWeight: '700',
//     color: '#1f2937',
//     margin: '0 0 12px 0',
//   },
//   explBody: {
//     fontSize: '0.95rem',
//     lineHeight: '1.6',
//     color: '#374151',
//     margin: '0',
//   },
//   explDivider: {
//     border: 'none',
//     borderTop: '1px solid #d0d9f0',
//     margin: '16px 0',
//   },

//   /* tabs */
//   tabRow: {
//     display: 'flex',
//     gap: '0',
//     borderBottom: '2px solid #d0d9f0',
//     marginBottom: '16px',
//   },
//   tab: {
//     padding: '8px 16px',
//     border: 'none',
//     borderBottom: '2px solid transparent',
//     marginBottom: '-2px',
//     background: 'transparent',
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     color: '#6b7280',
//     cursor: 'pointer',
//     transition: 'all 0.15s ease',
//     outline: 'none',
//   },
//   tabActive: {
//     color: '#4285f4',
//     borderBottomColor: '#4285f4',
//   },

//   /* steps list */
//   stepsTitle: {
//     fontSize: '0.9rem',
//     fontWeight: '700',
//     color: '#4285f4',
//     margin: '0 0 10px 0',
//     textTransform: 'uppercase',
//     letterSpacing: '0.03em',
//   },
//   stepsList: { listStyle: 'none', padding: '0', margin: '0' },
//   stepItem: {
//     fontSize: '0.85rem',
//     lineHeight: '1.55',
//     color: '#1f2937',
//     fontFamily: 'monospace',
//     padding: '2px 0',
//     whiteSpace: 'pre-wrap',
//   },

//   /* middle */
//   inputHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '24px',
//   },
//   inputTitle: {
//     fontSize: '1.35rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     margin: '0',
//   },

//   dimControls: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '24px',
//     marginBottom: '24px',
//     padding: '14px',
//     backgroundColor: '#f0f7ff',
//     borderRadius: '8px',
//     border: '1px solid #e0e7ff',
//     flexWrap: 'wrap',
//   },
//   dimGroup: { display: 'flex', alignItems: 'center', gap: '8px' },
//   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
//   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

//   /* view toggle */
//   viewToggle: {
//     display: 'flex',
//     border: '1px solid #e5e7eb',
//     borderRadius: '6px',
//     overflow: 'hidden',
//     marginBottom: '16px',
//     justifyContent: 'center',
//   },
//   viewBtn: {
//     padding: '6px 14px',
//     border: 'none',
//     background: 'white',
//     fontSize: '0.8rem',
//     fontWeight: '500',
//     color: '#6b7280',
//     cursor: 'pointer',
//     transition: 'all 0.15s ease',
//     outline: 'none',
//   },
//   viewBtnActive: {
//     background: '#4285f4',
//     color: 'white',
//   },

//   /* equation card */
//   eqCard: {
//     backgroundColor: '#f8f9fa',
//     padding: '20px',
//     borderRadius: '12px',
//     border: '1px solid #e5e7eb',
//     marginBottom: '24px',
//   },
//   eqCardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   eqCardTitle: {
//     margin: '0',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#374151',
//   },
//   eqCardActions: { display: 'flex', gap: '8px', alignItems: 'center' },

//   eqRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     marginBottom: '8px',
//     flexWrap: 'wrap',
//   },
//   eqRowNum: {
//     fontSize: '0.75rem',
//     color: '#9ca3af',
//     width: '18px',
//     textAlign: 'right',
//     fontVariantNumeric: 'tabular-nums',
//   },
//   eqCell: {
//     width: '50px',
//     height: '35px',
//     padding: '4px',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//     textAlign: 'center',
//     fontSize: '0.85rem',
//     backgroundColor: 'white',
//     outline: 'none',
//   },
//   eqCellFocus: {
//     borderColor: '#4285f4',
//     boxShadow: '0 0 0 2px rgba(66,133,244,0.15)',
//   },
//   eqVar: {
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     color: '#374151',
//     minWidth: '18px',
//     textAlign: 'center',
//   },
//   eqSign: {
//     fontSize: '1rem',
//     color: '#6b7280',
//     fontWeight: '500',
//     padding: '0 2px',
//   },
//   eqConstCell: {
//     width: '54px',
//     height: '35px',
//     padding: '4px',
//     border: '1px solid #a5b4fc',
//     borderRadius: '4px',
//     textAlign: 'center',
//     fontSize: '0.85rem',
//     backgroundColor: '#eef2ff',
//     outline: 'none',
//   },

//   /* matrix view */
//   matrixContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     justifyContent: 'center',
//   },
//   bracket: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#374151',
//     lineHeight: '1',
//   },
//   augDivider: {
//     width: '2px',
//     backgroundColor: '#4285f4',
//     borderRadius: '1px',
//     alignSelf: 'stretch',
//   },
//   matrixTable: { display: 'grid', gap: '4px', padding: '8px' },

//   /* ops grid */
//   opsSection: { marginBottom: '24px' },
//   opsTitle: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: '16px',
//   },
//   opsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//     gap: '8px',
//     marginBottom: '24px',
//   },
//   opBtn: {
//     padding: '10px 12px',
//     border: '2px solid #e5e7eb',
//     borderRadius: '8px',
//     backgroundColor: 'white',
//     color: '#374151',
//     fontSize: '0.85rem',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     textAlign: 'center',
//     outline: 'none',
//   },
//   opBtnSelected: {
//     borderColor: '#4285f4',
//     backgroundColor: '#f0f7ff',
//     color: '#4285f4',
//   },
//   opBtnDisabled: {
//     backgroundColor: '#f3f4f6',
//     color: '#9ca3af',
//     cursor: 'not-allowed',
//     borderColor: '#e5e7eb',
//   },

//   execRow: { display: 'flex', justifyContent: 'center', marginBottom: '24px' },
//   execBtn: {
//     padding: '12px 32px',
//     border: 'none',
//     borderRadius: '8px',
//     backgroundColor: '#4285f4',
//     color: 'white',
//     fontSize: '1rem',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     outline: 'none',
//   },
//   execBtnDisabled: {
//     backgroundColor: '#9ca3af',
//     cursor: 'not-allowed',
//   },

//   /* result */
//   resultBox: {
//     backgroundColor: '#f9fafb',
//     padding: '16px',
//     borderRadius: '8px',
//     border: '1px solid #e5e7eb',
//   },
//   resultTitle: {
//     margin: '0 0 12px 0',
//     fontSize: '1.05rem',
//     fontWeight: '600',
//     color: '#1f2937',
//   },
//   resultContent: {
//     minHeight: '60px',
//     backgroundColor: 'white',
//     padding: '16px',
//     borderRadius: '6px',
//     border: '1px solid #d1d5db',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   resLabel: { fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic' },
//   resVarRow: {
//     display: 'flex',
//     gap: '16px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   resVar: {
//     fontSize: '1rem',
//     fontFamily: 'monospace',
//     fontWeight: '600',
//     color: '#1f2937',
//   },
//   resDetail: {
//     fontSize: '0.88rem',
//     color: '#374151',
//     textAlign: 'center',
//     lineHeight: '1.5',
//   },
//   resError: { color: '#dc2626', fontWeight: '500', fontSize: '0.95rem' },

//   /* errors */
//   errorSection: {
//     backgroundColor: '#fef2f2',
//     border: '1px solid #fecaca',
//     borderRadius: '8px',
//     padding: '16px',
//     marginBottom: '16px',
//   },
//   errorTitle: {
//     color: '#dc2626',
//     fontWeight: '600',
//     fontSize: '1rem',
//     margin: '0 0 8px 0',
//   },
//   errorList: { listStyle: 'none', padding: '0', margin: '0' },
//   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

//   /* small buttons */
//   btnSm: {
//     padding: '3px 8px',
//     borderRadius: '4px',
//     fontSize: '0.75rem',
//     cursor: 'pointer',
//     transition: 'all 0.15s ease',
//     outline: 'none',
//     background: 'transparent',
//   },
//   btnRandom: { border: '1px solid #4285f4', color: '#4285f4' },
//   btnClear: { border: '1px solid #9ca3af', color: '#6b7280' },
//   btnDanger: {
//     padding: '8px 16px',
//     borderRadius: '6px',
//     fontSize: '0.9rem',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     border: '2px solid #dc2626',
//     backgroundColor: 'transparent',
//     color: '#dc2626',
//     outline: 'none',
//   },

//   /* mode buttons (left panel) */
//   modeBtn: (active) => ({
//     padding: '12px',
//     border: active ? '2px solid #4285f4' : '2px solid #e5e7eb',
//     borderRadius: '10px',
//     backgroundColor: active ? '#f0f7ff' : 'white',
//     cursor: 'pointer',
//     textAlign: 'left',
//     transition: 'all 0.25s ease',
//     width: '100%',
//     boxSizing: 'border-box',
//     outline: 'none',
//   }),
//   modeLbl: (active) => ({
//     fontSize: '0.9rem',
//     fontWeight: '600',
//     color: active ? '#4285f4' : '#1f2937',
//     marginBottom: '4px',
//   }),
//   modeDesc: { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' },

//   dimInput: (val) => ({
//     width: '60px',
//     padding: '8px 12px',
//     border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
//     borderRadius: '8px',
//     fontSize: '1rem',
//     textAlign: 'center',
//     outline: 'none',
//   }),

//   /* graph */
//   graphWrap: {
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '4px',
//   },
//   graphMsg: {
//     fontSize: '0.88rem',
//     color: '#6b7280',
//     textAlign: 'center',
//     fontStyle: 'italic',
//     padding: '20px 0',
//   },
// };

// /* ── Tooltip ──────────────────────────────────────────────────── */

// const tipS = {
//   wrap: { position: 'relative', display: 'inline-flex', alignItems: 'center' },
//   icon: {
//     width: '16px', height: '16px', borderRadius: '50%',
//     border: '1.5px solid #9ca3af', background: 'transparent',
//     color: '#9ca3af', fontSize: '10px', fontWeight: '600',
//     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//     cursor: 'help', flexShrink: 0, outline: 'none', padding: 0,
//     transition: 'border-color 0.15s, color 0.15s',
//   },
//   iconHover: { borderColor: '#4285f4', color: '#4285f4', background: 'rgba(66,133,244,0.08)' },
//   bubble: {
//     position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%',
//     transform: 'translateX(-50%)', backgroundColor: '#1f2937',
//     color: 'white', fontSize: '12px', lineHeight: '1.5',
//     padding: '8px 12px', borderRadius: '8px', width: '220px',
//     zIndex: 10, pointerEvents: 'none',
//   },
//   arrow: {
//     position: 'absolute', top: '100%', left: '50%',
//     transform: 'translateX(-50%)', borderWidth: '5px',
//     borderStyle: 'solid', borderColor: '#1f2937 transparent transparent transparent',
//   },
// };

// function Tooltip({ text }) {
//   const [show, setShow] = useState(false);
//   if (!text) return null;
//   return (
//     <span style={tipS.wrap}>
//       <button
//         style={{ ...tipS.icon, ...(show ? tipS.iconHover : {}) }}
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//         onFocus={() => setShow(true)}
//         onBlur={() => setShow(false)}
//         tabIndex={0}
//         aria-label="Help"
//       >?</button>
//       {show && (
//         <span style={tipS.bubble}>
//           {text}
//           <span style={tipS.arrow} />
//         </span>
//       )}
//     </span>
//   );
// }

// /* ── descriptions ─────────────────────────────────────────────── */

// const descriptions = {
//   _default:
//     'Enter a system of linear equations. Choose a solution method and click Solve to find the unknowns.',
//   'Gaussian Elimination':
//     'Reduces the augmented matrix [A|b] to row echelon form via forward elimination, then uses back-substitution to find the solution. Time complexity O(n³).',
//   'Gauss-Jordan':
//     'Extends Gaussian elimination by reducing the matrix to reduced row echelon form (RREF), eliminating above and below each pivot. The solution is read directly from the last column.',
//   "Cramer's Rule":
//     'Uses determinants to solve square systems. Each variable xᵢ = det(Aᵢ)/det(A), where Aᵢ is A with column i replaced by b. Requires det(A) ≠ 0. Elegant but O(n!) for large n.',
//   'Inverse Method':
//     'Computes x = A⁻¹b directly. Requires A to be square and non-singular (det(A) ≠ 0). The inverse is found via Gauss-Jordan on [A|I].',
// };

// /* ── line colors for graph ────────────────────────────────────── */

// const LINE_COLORS = ['#4285f4', '#ea4335', '#34a853', '#fbbc05', '#8e44ad', '#e67e22', '#1abc9c', '#e74c3c', '#2c3e50', '#d35400'];

// /* ── Graph component (2-var systems) ──────────────────────────── */

// function SystemGraph({ coeffs, constants, solution, numEqs, numVars }) {
//   if (numVars !== 2) {
//     return <div style={s.graphMsg}>Graph is available for 2-variable systems only</div>;
//   }

//   const W = 320;
//   const H = 280;
//   const pad = 40;

//   /* Determine viewport from solution or from line intersections with reasonable range */
//   let cx = 0;
//   let cy = 0;
//   if (solution) {
//     cx = solution[0];
//     cy = solution[1];
//   }

//   /* auto-range: at least ±5, expanding if solution is far from origin */
//   let range = Math.max(5, Math.abs(cx) * 1.5 + 2, Math.abs(cy) * 1.5 + 2);
//   range = Math.ceil(range);

//   const xMin = cx - range;
//   const xMax = cx + range;
//   const yMin = cy - range;
//   const yMax = cy + range;

//   const toSX = (x) => pad + ((x - xMin) / (xMax - xMin)) * (W - 2 * pad);
//   const toSY = (y) => (H - pad) - ((y - yMin) / (yMax - yMin)) * (H - 2 * pad);

//   /* grid lines */
//   const gridLines = [];
//   const step = range <= 10 ? 1 : range <= 25 ? 5 : 10;

//   for (let v = Math.ceil(xMin / step) * step; v <= xMax; v += step) {
//     const sx = toSX(v);
//     gridLines.push(
//       <line key={`gx${v}`} x1={sx} y1={pad} x2={sx} y2={H - pad}
//         stroke="#e5e7eb" strokeWidth="0.5" />
//     );
//     if (v !== 0) {
//       gridLines.push(
//         <text key={`lx${v}`} x={sx} y={H - pad + 14} textAnchor="middle"
//           fontSize="9" fill="#9ca3af">{v}</text>
//       );
//     }
//   }
//   for (let v = Math.ceil(yMin / step) * step; v <= yMax; v += step) {
//     const sy = toSY(v);
//     gridLines.push(
//       <line key={`gy${v}`} x1={pad} y1={sy} x2={W - pad} y2={sy}
//         stroke="#e5e7eb" strokeWidth="0.5" />
//     );
//     if (v !== 0) {
//       gridLines.push(
//         <text key={`ly${v}`} x={pad - 6} y={sy + 3} textAnchor="end"
//           fontSize="9" fill="#9ca3af">{v}</text>
//       );
//     }
//   }

//   /* axes */
//   const axes = [];
//   if (xMin <= 0 && xMax >= 0) {
//     const ax = toSX(0);
//     axes.push(
//       <line key="yaxis" x1={ax} y1={pad} x2={ax} y2={H - pad}
//         stroke="#374151" strokeWidth="1" />
//     );
//   }
//   if (yMin <= 0 && yMax >= 0) {
//     const ay = toSY(0);
//     axes.push(
//       <line key="xaxis" x1={pad} y1={ay} x2={W - pad} y2={ay}
//         stroke="#374151" strokeWidth="1" />
//     );
//   }

//   /* lines: ax + by = c → two points at x=xMin, x=xMax (if b≠0), else vertical */
//   const lines = [];
//   for (let i = 0; i < numEqs; i++) {
//     const a = coeffs[i][0];
//     const b = coeffs[i][1];
//     const c = constants[i];
//     const color = LINE_COLORS[i % LINE_COLORS.length];

//     if (Math.abs(b) > 1e-10) {
//       const y1 = (c - a * xMin) / b;
//       const y2 = (c - a * xMax) / b;
//       lines.push(
//         <line key={`l${i}`}
//           x1={toSX(xMin)} y1={toSY(y1)}
//           x2={toSX(xMax)} y2={toSY(y2)}
//           stroke={color} strokeWidth="2" opacity="0.85"
//         />
//       );
//     } else if (Math.abs(a) > 1e-10) {
//       const xv = c / a;
//       lines.push(
//         <line key={`l${i}`}
//           x1={toSX(xv)} y1={pad}
//           x2={toSX(xv)} y2={H - pad}
//           stroke={color} strokeWidth="2" opacity="0.85"
//         />
//       );
//     }

//     /* label */
//     const lblX = W - pad - 4;
//     let lblY;
//     if (Math.abs(b) > 1e-10) {
//       lblY = toSY((c - a * xMax) / b);
//     } else {
//       lblY = pad + 14 + i * 14;
//     }
//     lines.push(
//       <text key={`ll${i}`} x={lblX} y={Math.max(pad + 10, Math.min(H - pad - 4, lblY - 4))}
//         textAnchor="end" fontSize="10" fontWeight="600" fill={color}>
//         eq{i + 1}
//       </text>
//     );
//   }

//   /* solution dot */
//   let solDot = null;
//   if (solution) {
//     solDot = (
//       <g>
//         <circle cx={toSX(solution[0])} cy={toSY(solution[1])} r="5"
//           fill="#4285f4" stroke="white" strokeWidth="2" />
//         <text x={toSX(solution[0]) + 8} y={toSY(solution[1]) - 8}
//           fontSize="10" fontWeight="600" fill="#1f2937">
//           ({fmtNum(solution[0])}, {fmtNum(solution[1])})
//         </text>
//       </g>
//     );
//   }

//   return (
//     <div style={s.graphWrap}>
//       <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
//         style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #d0d9f0' }}>
//         {gridLines}
//         {axes}
//         {/* clip lines to plot area */}
//         <defs>
//           <clipPath id="plot-area">
//             <rect x={pad} y={pad} width={W - 2 * pad} height={H - 2 * pad} />
//           </clipPath>
//         </defs>
//         <g clipPath="url(#plot-area)">
//           {lines}
//         </g>
//         {solDot && <g clipPath="url(#plot-area)">{solDot}</g>}
//         {/* axis labels */}
//         <text x={W - pad + 4} y={toSY(0) + 4} fontSize="11" fontWeight="600" fill="#374151">x&#8321;</text>
//         <text x={toSX(0) + 6} y={pad - 6} fontSize="11" fontWeight="600" fill="#374151">x&#8322;</text>
//       </svg>
//     </div>
//   );
// }

// /* ── component ────────────────────────────────────────────────── */

// const METHODS = ['Gaussian Elimination', 'Gauss-Jordan', "Cramer's Rule", 'Inverse Method'];
// const SQUARE_ONLY = ["Cramer's Rule", 'Inverse Method'];

// export default function LinearSystemsCalculator() {
//   const [numEqs, setNumEqs] = useState(3);
//   const [numVars, setNumVars] = useState(3);
//   const [coeffs, setCoeffs] = useState(() => makeEmpty(3, 3));
//   const [constants, setConstants] = useState(() => new Array(3).fill(''));
//   const [method, setMethod] = useState('Gaussian Elimination');
//   const [result, setResult] = useState(null);
//   const [errors, setErrors] = useState([]);
//   const [view, setView] = useState('equation'); // 'equation' | 'matrix'
//   const [rightTab, setRightTab] = useState('theory'); // 'theory' | 'steps' | 'graph'

//   function makeEmpty(rows, cols) {
//     return Array.from({ length: rows }, () => new Array(cols).fill(''));
//   }

//   /* ── dimension changes ── */

//   const handleEqsChange = (val) => {
//     if (val === '') { setNumEqs(''); return; }
//     const n = parseInt(val);
//     if (n < 1 || n > 10) return;
//     setNumEqs(n);
//     setCoeffs((prev) => {
//       const next = makeEmpty(n, numVars);
//       for (let r = 0; r < Math.min(prev.length, n); r++)
//         for (let c = 0; c < Math.min(prev[0].length, numVars); c++)
//           next[r][c] = prev[r][c];
//       return next;
//     });
//     setConstants((prev) => {
//       const next = new Array(n).fill('');
//       for (let r = 0; r < Math.min(prev.length, n); r++) next[r] = prev[r];
//       return next;
//     });
//     setResult(null);
//     setErrors([]);
//   };

//   const handleVarsChange = (val) => {
//     if (val === '') { setNumVars(''); return; }
//     const n = parseInt(val);
//     if (n < 1 || n > 10) return;
//     setNumVars(n);
//     setCoeffs((prev) => {
//       const next = makeEmpty(numEqs, n);
//       for (let r = 0; r < Math.min(prev.length, numEqs); r++)
//         for (let c = 0; c < Math.min(prev[0].length, n); c++)
//           next[r][c] = prev[r][c];
//       return next;
//     });
//     setResult(null);
//     setErrors([]);
//   };

//   /* ── cell updates ── */

//   const updateCoeff = (r, c, val) => {
//     setCoeffs((prev) => {
//       const next = prev.map((row) => [...row]);
//       next[r][c] = val;
//       return next;
//     });
//     if (errors.length) setErrors([]);
//   };

//   const updateConstant = (r, val) => {
//     setConstants((prev) => {
//       const next = [...prev];
//       next[r] = val;
//       return next;
//     });
//     if (errors.length) setErrors([]);
//   };

//   /* ── fill helpers ── */

//   const randomize = () => {
//     setCoeffs(Array.from({ length: numEqs }, () =>
//       Array.from({ length: numVars }, () => String(Math.floor(Math.random() * 21) - 10))
//     ));
//     setConstants(Array.from({ length: numEqs }, () =>
//       String(Math.floor(Math.random() * 21) - 10)
//     ));
//     setResult(null);
//     setErrors([]);
//   };

//   const clearAll = () => {
//     setCoeffs(makeEmpty(numEqs, numVars));
//     setConstants(new Array(numEqs).fill(''));
//     setResult(null);
//     setErrors([]);
//   };

//   const resetAll = () => {
//     setNumEqs(3);
//     setNumVars(3);
//     setCoeffs(makeEmpty(3, 3));
//     setConstants(new Array(3).fill(''));
//     setMethod('Gaussian Elimination');
//     setResult(null);
//     setErrors([]);
//     setView('equation');
//     setRightTab('theory');
//   };

//   /* ── validation ── */

//   const validate = () => {
//     const errs = [];
//     for (let r = 0; r < numEqs; r++) {
//       for (let c = 0; c < numVars; c++) {
//         if (coeffs[r][c] === '' || isNaN(parseFloat(coeffs[r][c])))
//           errs.push(`Coefficient at row ${r + 1}, x${subscript(c + 1)} is empty or invalid`);
//       }
//       if (constants[r] === '' || isNaN(parseFloat(constants[r])))
//         errs.push(`Constant b${subscript(r + 1)} is empty or invalid`);
//     }
//     if (SQUARE_ONLY.includes(method) && numEqs !== numVars)
//       errs.push(`${method} requires a square system (equations = variables)`);
//     setErrors(errs);
//     return errs.length === 0;
//   };

//   /* ── solve ── */

//   const solve = () => {
//     if (!validate()) return;
//     const numCoeffs = coeffs.map((row) => row.map((v) => parseFloat(v)));
//     const numConst = constants.map((v) => parseFloat(v));
//     const res = solveLinearSystem(method, numCoeffs, numConst);
//     setResult(res);
//     if (res.type === 'error') setErrors([res.detail]);
//     if (res.steps && res.steps.length > 0) setRightTab('steps');
//   };

//   /* ── is method disabled? ── */

//   const isMethodDisabled = (m) => SQUARE_ONLY.includes(m) && numEqs !== numVars;

//   /* ── parsed coefficients for the graph (best-effort) ── */

//   const parsedCoeffs = useMemo(() => {
//     try {
//       return coeffs.map((row) => row.map((v) => (v === '' ? 0 : parseFloat(v) || 0)));
//     } catch { return null; }
//   }, [coeffs]);

//   const parsedConst = useMemo(() => {
//     try {
//       return constants.map((v) => (v === '' ? 0 : parseFloat(v) || 0));
//     } catch { return null; }
//   }, [constants]);

//   /* ── render equation view ── */

//   const renderEquationView = () => (
//     <div style={s.eqCard}>
//       <div style={s.eqCardHeader}>
//         <h4 style={s.eqCardTitle}>Coefficients</h4>
//         <div style={s.eqCardActions}>
//           <button onClick={randomize} style={{ ...s.btnSm, ...s.btnRandom }}>Random</button>
//           <button onClick={clearAll} style={{ ...s.btnSm, ...s.btnClear }}>Clear</button>
//           <Tooltip text="Random fills coefficients and constants with integers from -10 to 10." />
//         </div>
//       </div>
//       {coeffs.map((row, r) => (
//         <div key={r} style={s.eqRow}>
//           <span style={s.eqRowNum}>{r + 1}.</span>
//           {row.map((val, c) => (
//             <React.Fragment key={c}>
//               {c > 0 && <span style={s.eqSign}>+</span>}
//               <input
//                 type="number"
//                 step="any"
//                 value={val}
//                 onChange={(e) => updateCoeff(r, c, e.target.value)}
//                 placeholder="0"
//                 style={s.eqCell}
//               />
//               <span style={s.eqVar}>x{subscript(c + 1)}</span>
//             </React.Fragment>
//           ))}
//           <span style={s.eqSign}>=</span>
//           <input
//             type="number"
//             step="any"
//             value={constants[r]}
//             onChange={(e) => updateConstant(r, e.target.value)}
//             placeholder="0"
//             style={s.eqConstCell}
//           />
//         </div>
//       ))}
//     </div>
//   );

//   /* ── render matrix view (augmented) ── */

//   const renderMatrixView = () => {
//     const augCols = numVars + 1;
//     return (
//       <div style={s.eqCard}>
//         <div style={s.eqCardHeader}>
//           <h4 style={s.eqCardTitle}>Augmented Matrix [A|b]</h4>
//           <div style={s.eqCardActions}>
//             <button onClick={randomize} style={{ ...s.btnSm, ...s.btnRandom }}>Random</button>
//             <button onClick={clearAll} style={{ ...s.btnSm, ...s.btnClear }}>Clear</button>
//           </div>
//         </div>
//         <div style={s.matrixContainer}>
//           <span style={s.bracket}>[</span>
//           <div style={{
//             ...s.matrixTable,
//             gridTemplateColumns: `repeat(${numVars}, 1fr)`,
//           }}>
//             {coeffs.map((row, r) =>
//               row.map((val, c) => (
//                 <input
//                   key={`${r}-${c}`}
//                   type="number"
//                   step="any"
//                   value={val}
//                   onChange={(e) => updateCoeff(r, c, e.target.value)}
//                   placeholder="0"
//                   style={s.eqCell}
//                 />
//               ))
//             )}
//           </div>
//           <div style={s.augDivider} />
//           <div style={{
//             ...s.matrixTable,
//             gridTemplateColumns: '1fr',
//           }}>
//             {constants.map((val, r) => (
//               <input
//                 key={r}
//                 type="number"
//                 step="any"
//                 value={val}
//                 onChange={(e) => updateConstant(r, e.target.value)}
//                 placeholder="0"
//                 style={s.eqConstCell}
//               />
//             ))}
//           </div>
//           <span style={s.bracket}>]</span>
//         </div>
//       </div>
//     );
//   };

//   /* ── render result ── */

//   const renderResult = () => {
//     if (!result) return 'Enter values, choose a method, and click Solve';

//     if (result.type === 'error') {
//       return <span style={s.resError}>{result.detail}</span>;
//     }

//     if (result.type === 'none') {
//       return (
//         <>
//           <span style={{ color: '#dc2626', fontWeight: '600', fontSize: '1rem' }}>
//             &#10007; No Solution
//           </span>
//           <span style={s.resDetail}>{result.detail}</span>
//         </>
//       );
//     }

//     if (result.type === 'infinite') {
//       return (
//         <>
//           <span style={{ color: '#d97706', fontWeight: '600', fontSize: '1rem' }}>
//             &#8734; Infinite Solutions
//           </span>
//           <span style={s.resDetail}>{result.detail}</span>
//         </>
//       );
//     }

//     return (
//       <>
//         <span style={s.resLabel}>Unique solution ({method})</span>
//         <div style={s.resVarRow}>
//           {result.solution.map((v, i) => (
//             <span key={i} style={s.resVar}>
//               x{subscript(i + 1)} = {fmtNum(v)}
//             </span>
//           ))}
//         </div>
//         <span style={s.resDetail}>{result.detail}</span>
//       </>
//     );
//   };

//   /* ── right panel tabs ── */

//   const renderRightContent = () => {
//     if (rightTab === 'theory') {
//       const desc = descriptions[method] || descriptions._default;
//       return (
//         <>
//           <h4 style={s.explTitle}>{method}</h4>
//           <p style={s.explBody}>{processContent(desc)}</p>
//         </>
//       );
//     }

//     if (rightTab === 'steps') {
//       if (!result || !result.steps || result.steps.length === 0) {
//         return (
//           <p style={{ ...s.explBody, fontStyle: 'italic' }}>
//             Solve a system to see step-by-step calculations here.
//           </p>
//         );
//       }
//       return (
//         <>
//           <div style={s.stepsTitle}>Calculation Steps</div>
//           <ul style={s.stepsList}>
//             {result.steps.map((line, i) => (
//               <li key={i} style={s.stepItem}>{line}</li>
//             ))}
//           </ul>
//         </>
//       );
//     }

//     if (rightTab === 'graph') {
//       return (
//         <>
//           <div style={s.stepsTitle}>System Graph</div>
//           <SystemGraph
//             coeffs={parsedCoeffs}
//             constants={parsedConst}
//             solution={result?.type === 'unique' ? result.solution : null}
//             numEqs={numEqs}
//             numVars={numVars}
//           />
//         </>
//       );
//     }

//     return null;
//   };

//   /* ── JSX ─────────────────────────────────────────────────────── */

//   return (
//     <div style={s.container}>
//       <div style={s.main}>

//         <div style={s.header}>
//           <h1 style={s.title}>Linear Systems Calculator</h1>
//           <p style={s.subtitle}>Solve and visualize systems of linear equations</p>
//         </div>

//         <div style={s.threeCol}>

//           {/* ▸ LEFT — input mode */}
//           <div style={s.leftPanel}>
//             <div style={s.leftTitle}>Input Mode</div>

//             <button
//               onClick={() => setView('equation')}
//               style={s.modeBtn(view === 'equation')}
//             >
//               <div style={s.modeLbl(view === 'equation')}>Equations</div>
//               <div style={s.modeDesc}>Enter coefficients equation by equation</div>
//             </button>

//             <button
//               onClick={() => setView('matrix')}
//               style={s.modeBtn(view === 'matrix')}
//             >
//               <div style={s.modeLbl(view === 'matrix')}>Augmented Matrix</div>
//               <div style={s.modeDesc}>Enter the full augmented matrix [A|b]</div>
//             </button>
//           </div>

//           {/* ▸ MIDDLE — editor */}
//           <div>
//             <div style={s.inputHeader}>
//               <h2 style={s.inputTitle}>
//                 System of Equations ({numEqs}&times;{numVars})
//               </h2>
//               <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//                 <Tooltip text="Enter coefficient values and constants for each equation. Use Random for test data." />
//                 <button onClick={resetAll} style={s.btnDanger}>Reset All</button>
//               </div>
//             </div>

//             {/* Dimensions */}
//             <div style={s.dimControls}>
//               <div style={s.dimGroup}>
//                 <label style={s.dimLabel}>Equations:</label>
//                 <input
//                   type="number" min="1" max="10"
//                   value={numEqs}
//                   onChange={(e) => handleEqsChange(e.target.value)}
//                   style={s.dimInput(numEqs)}
//                 />
//               </div>
//               <div style={s.dimGroup}>
//                 <label style={s.dimLabel}>Variables:</label>
//                 <input
//                   type="number" min="1" max="10"
//                   value={numVars}
//                   onChange={(e) => handleVarsChange(e.target.value)}
//                   style={s.dimInput(numVars)}
//                 />
//               </div>
//               <span style={s.dimHint}>
//                 {numEqs} equation{numEqs !== 1 ? 's' : ''}, {numVars} unknown{numVars !== 1 ? 's' : ''}
//               </span>
//               {numEqs !== numVars && (
//                 <span style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: '500' }}>
//                   Some methods require square systems
//                 </span>
//               )}
//               <Tooltip text="Set system size (1–10). Non-square systems restrict available methods." />
//             </div>

//             {/* Errors */}
//             {errors.length > 0 && (
//               <div style={s.errorSection}>
//                 <div style={s.errorTitle}>Please fix the following:</div>
//                 <ul style={s.errorList}>
//                   {errors.map((err, i) => (
//                     <li key={i} style={s.errorItem}>&bull; {err}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Input (equation or matrix view) */}
//             {view === 'equation' ? renderEquationView() : renderMatrixView()}

//             {/* Method selector */}
//             <div style={s.opsSection}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
//                 <h3 style={{ ...s.opsTitle, marginBottom: 0 }}>Solution Method</h3>
//                 <Tooltip text="Select a method to solve the system. Grayed-out methods require a square system." />
//               </div>
//               <div style={s.opsGrid}>
//                 {METHODS.map((m) => {
//                   const sel = method === m;
//                   const dis = isMethodDisabled(m);
//                   return (
//                     <button
//                       key={m}
//                       onClick={() => { if (!dis) { setMethod(m); setResult(null); } }}
//                       disabled={dis}
//                       style={{
//                         ...s.opBtn,
//                         ...(sel ? s.opBtnSelected : {}),
//                         ...(dis ? s.opBtnDisabled : {}),
//                       }}
//                     >
//                       {m}
//                     </button>
//                   );
//                 })}
//               </div>

//               <div style={s.execRow}>
//                 <button
//                   onClick={solve}
//                   style={{ ...s.execBtn, ...(!method ? s.execBtnDisabled : {}) }}
//                   disabled={!method}
//                 >
//                   Solve System
//                 </button>
//               </div>
//             </div>

//             {/* Result */}
//             <div style={s.resultBox}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
//                 <h4 style={s.resultTitle}>Solution</h4>
//                 <Tooltip text="Results appear after clicking Solve. Shows solution type: unique, infinite, or none." />
//               </div>
//               <div style={s.resultContent}>
//                 {renderResult()}
//               </div>
//             </div>
//           </div>

//           {/* ▸ RIGHT — explanation panel with tabs */}
//           <div style={s.rightPanel}>
//             <div style={s.tabRow}>
//               {['theory', 'steps', 'graph'].map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setRightTab(t)}
//                   style={{ ...s.tab, ...(rightTab === t ? s.tabActive : {}) }}
//                 >
//                   {t === 'theory' ? 'Theory' : t === 'steps' ? 'Steps' : 'Graph'}
//                 </button>
//               ))}
//             </div>
//             {renderRightContent()}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';
import solveLinearSystem, { subscript, fmtNum } from './solveLinearSystem';
import { processContent } from '../../../utils/contentProcessor';

/* ── styles ───────────────────────────────────────────────────── */

const s = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  main: {
    maxWidth: 'calc(100vw - 180px)',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  header: { textAlign: 'center', marginBottom: '32px' },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 8px 0',
  },
  subtitle: { color: '#6b7280', fontSize: '1.1rem', margin: '0' },

  threeCol: {
    display: 'grid',
    gridTemplateColumns: '220px 2fr 1.4fr',
    gap: '24px',
    alignItems: 'start',
  },

  /* LEFT */
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    position: 'sticky',
    top: '20px',
  },
  leftTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  leftSectionTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#1f2937',
    marginTop: '10px',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },

  /* sub-operation items */
  opSubList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    marginTop: '2px',
    marginBottom: '4px',
    paddingLeft: '10px',
    borderLeft: '2px solid #d0d9f0',
    marginLeft: '10px',
  },
  opSubItem: {
    padding: '6px 10px',
    border: '1px solid transparent',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    fontSize: '0.82rem',
    color: '#374151',
    transition: 'all 0.15s ease',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    boxSizing: 'border-box',
  },
  opSubItemSelected: {
    backgroundColor: '#f0f7ff',
    color: '#4285f4',
    fontWeight: '600',
    borderColor: '#bfdbfe',
  },
  opSubItemDisabled: {
    color: '#9ca3af',
    cursor: 'not-allowed',
  },
  opSubDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: '#4285f4',
    flexShrink: 0,
  },

  /* RIGHT */
  rightPanel: {
    backgroundColor: '#f0f4ff',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #d0d9f0',
    position: 'sticky',
    top: '20px',
  },
  explTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#1f2937',
    margin: '0 0 12px 0',
  },
  explBody: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#374151',
    margin: '0',
  },
  explDivider: {
    border: 'none',
    borderTop: '1px solid #d0d9f0',
    margin: '16px 0',
  },

  tabRow: {
    display: 'flex',
    gap: '0',
    borderBottom: '2px solid #d0d9f0',
    marginBottom: '16px',
  },
  tab: {
    padding: '8px 16px',
    border: 'none',
    borderBottom: '2px solid transparent',
    marginBottom: '-2px',
    background: 'transparent',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#6b7280',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
  },
  tabActive: {
    color: '#4285f4',
    borderBottomColor: '#4285f4',
  },

  stepsTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#4285f4',
    margin: '0 0 10px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
  },
  stepsList: { listStyle: 'none', padding: '0', margin: '0' },
  stepItem: {
    fontSize: '0.85rem',
    lineHeight: '1.55',
    color: '#1f2937',
    fontFamily: 'monospace',
    padding: '2px 0',
    whiteSpace: 'pre-wrap',
  },

  /* middle */
  inputHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  inputTitle: {
    fontSize: '1.35rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0',
  },

  dimControls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '24px',
    padding: '14px',
    backgroundColor: '#f0f7ff',
    borderRadius: '8px',
    border: '1px solid #e0e7ff',
    flexWrap: 'wrap',
  },
  dimGroup: { display: 'flex', alignItems: 'center', gap: '8px' },
  dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
  dimHint: { fontSize: '0.85rem', color: '#6b7280' },

  viewToggle: {
    display: 'flex',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '16px',
    justifyContent: 'center',
  },
  viewBtn: {
    padding: '6px 14px',
    border: 'none',
    background: 'white',
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#6b7280',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
  },
  viewBtnActive: {
    background: '#4285f4',
    color: 'white',
  },

  eqCard: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    marginBottom: '24px',
  },
  eqCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  eqCardTitle: {
    margin: '0',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#374151',
  },
  eqCardActions: { display: 'flex', gap: '8px', alignItems: 'center' },

  eqRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '8px',
    flexWrap: 'wrap',
  },
  eqRowNum: {
    fontSize: '0.75rem',
    color: '#9ca3af',
    width: '18px',
    textAlign: 'right',
    fontVariantNumeric: 'tabular-nums',
  },
  eqCell: {
    width: '50px',
    height: '35px',
    padding: '4px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '0.85rem',
    backgroundColor: 'white',
    outline: 'none',
  },
  eqVar: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#374151',
    minWidth: '18px',
    textAlign: 'center',
  },
  eqSign: {
    fontSize: '1rem',
    color: '#6b7280',
    fontWeight: '500',
    padding: '0 2px',
  },
  eqConstCell: {
    width: '54px',
    height: '35px',
    padding: '4px',
    border: '1px solid #a5b4fc',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '0.85rem',
    backgroundColor: '#eef2ff',
    outline: 'none',
  },

  matrixContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    justifyContent: 'center',
  },
  bracket: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#374151',
    lineHeight: '1',
  },
  augDivider: {
    width: '2px',
    backgroundColor: '#4285f4',
    borderRadius: '1px',
    alignSelf: 'stretch',
  },
  matrixTable: { display: 'grid', gap: '4px', padding: '8px' },

  execRow: { display: 'flex', justifyContent: 'center', marginBottom: '24px' },
  execBtn: {
    padding: '12px 32px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#4285f4',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
  },
  execBtnDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
  },

  resultBox: {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  resultTitle: {
    margin: '0 0 12px 0',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  resultContent: {
    minHeight: '60px',
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',
  },
  resLabel: { fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic' },
  resVarRow: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  resVar: {
    fontSize: '1rem',
    fontFamily: 'monospace',
    fontWeight: '600',
    color: '#1f2937',
  },
  resDetail: {
    fontSize: '0.88rem',
    color: '#374151',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  resError: { color: '#dc2626', fontWeight: '500', fontSize: '0.95rem' },

  errorSection: {
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
  },
  errorTitle: {
    color: '#dc2626',
    fontWeight: '600',
    fontSize: '1rem',
    margin: '0 0 8px 0',
  },
  errorList: { listStyle: 'none', padding: '0', margin: '0' },
  errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

  btnSm: {
    padding: '3px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
    background: 'transparent',
  },
  btnRandom: { border: '1px solid #4285f4', color: '#4285f4' },
  btnClear: { border: '1px solid #9ca3af', color: '#6b7280' },
  btnDanger: {
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '2px solid #dc2626',
    backgroundColor: 'transparent',
    color: '#dc2626',
    outline: 'none',
  },

  modeBtn: (active) => ({
    padding: '12px',
    border: active ? '2px solid #4285f4' : '2px solid #e5e7eb',
    borderRadius: '10px',
    backgroundColor: active ? '#f0f7ff' : 'white',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.25s ease',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
  }),
  modeLbl: (active) => ({
    fontSize: '0.9rem',
    fontWeight: '600',
    color: active ? '#4285f4' : '#1f2937',
    marginBottom: '4px',
  }),
  modeDesc: { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' },

  dimInput: (val) => ({
    width: '60px',
    padding: '8px 12px',
    border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    textAlign: 'center',
    outline: 'none',
  }),

  graphWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4px',
  },
  graphMsg: {
    fontSize: '0.88rem',
    color: '#6b7280',
    textAlign: 'center',
    fontStyle: 'italic',
    padding: '20px 0',
  },
};

/* ── Tooltip ──────────────────────────────────────────────────── */

const tipS = {
  wrap: { position: 'relative', display: 'inline-flex', alignItems: 'center' },
  icon: {
    width: '16px', height: '16px', borderRadius: '50%',
    border: '1.5px solid #9ca3af', background: 'transparent',
    color: '#9ca3af', fontSize: '10px', fontWeight: '600',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'help', flexShrink: 0, outline: 'none', padding: 0,
    transition: 'border-color 0.15s, color 0.15s',
  },
  iconHover: { borderColor: '#4285f4', color: '#4285f4', background: 'rgba(66,133,244,0.08)' },
  bubble: {
    position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%',
    transform: 'translateX(-50%)', backgroundColor: '#1f2937',
    color: 'white', fontSize: '12px', lineHeight: '1.5',
    padding: '8px 12px', borderRadius: '8px', width: '220px',
    zIndex: 10, pointerEvents: 'none',
  },
  arrow: {
    position: 'absolute', top: '100%', left: '50%',
    transform: 'translateX(-50%)', borderWidth: '5px',
    borderStyle: 'solid', borderColor: '#1f2937 transparent transparent transparent',
  },
};

function Tooltip({ text }) {
  const [show, setShow] = useState(false);
  if (!text) return null;
  return (
    <span style={tipS.wrap}>
      <button
        style={{ ...tipS.icon, ...(show ? tipS.iconHover : {}) }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        tabIndex={0}
        aria-label="Help"
      >?</button>
      {show && (
        <span style={tipS.bubble}>
          {text}
          <span style={tipS.arrow} />
        </span>
      )}
    </span>
  );
}

/* ── descriptions ─────────────────────────────────────────────── */

const descriptions = {
  _default:
    'Enter a system of linear equations. Choose a solution method and click Solve to find the unknowns.',
  'Gaussian Elimination':
    'Reduces the augmented matrix [A|b] to row echelon form via forward elimination, then uses back-substitution to find the solution. Time complexity O(n³).',
  'Gauss-Jordan':
    'Extends Gaussian elimination by reducing the matrix to reduced row echelon form (RREF), eliminating above and below each pivot. The solution is read directly from the last column.',
  "Cramer's Rule":
    'Uses determinants to solve square systems. Each variable xᵢ = det(Aᵢ)/det(A), where Aᵢ is A with column i replaced by b. Requires det(A) ≠ 0. Elegant but O(n!) for large n.',
  'Inverse Method':
    'Computes x = A⁻¹b directly. Requires A to be square and non-singular (det(A) ≠ 0). The inverse is found via Gauss-Jordan on [A|I].',
};

const LINE_COLORS = ['#4285f4', '#ea4335', '#34a853', '#fbbc05', '#8e44ad', '#e67e22', '#1abc9c', '#e74c3c', '#2c3e50', '#d35400'];

/* ── Graph component ──────────────────────────────────────────── */

function SystemGraph({ coeffs, constants, solution, numEqs, numVars }) {
  if (numVars !== 2) {
    return <div style={s.graphMsg}>Graph is available for 2-variable systems only</div>;
  }

  const W = 320;
  const H = 280;
  const pad = 40;

  let cx = 0;
  let cy = 0;
  if (solution) { cx = solution[0]; cy = solution[1]; }

  let range = Math.max(5, Math.abs(cx) * 1.5 + 2, Math.abs(cy) * 1.5 + 2);
  range = Math.ceil(range);

  const xMin = cx - range;
  const xMax = cx + range;
  const yMin = cy - range;
  const yMax = cy + range;

  const toSX = (x) => pad + ((x - xMin) / (xMax - xMin)) * (W - 2 * pad);
  const toSY = (y) => (H - pad) - ((y - yMin) / (yMax - yMin)) * (H - 2 * pad);

  const gridLines = [];
  const step = range <= 10 ? 1 : range <= 25 ? 5 : 10;

  for (let v = Math.ceil(xMin / step) * step; v <= xMax; v += step) {
    const sx = toSX(v);
    gridLines.push(<line key={`gx${v}`} x1={sx} y1={pad} x2={sx} y2={H - pad} stroke="#e5e7eb" strokeWidth="0.5" />);
    if (v !== 0) gridLines.push(<text key={`lx${v}`} x={sx} y={H - pad + 14} textAnchor="middle" fontSize="9" fill="#9ca3af">{v}</text>);
  }
  for (let v = Math.ceil(yMin / step) * step; v <= yMax; v += step) {
    const sy = toSY(v);
    gridLines.push(<line key={`gy${v}`} x1={pad} y1={sy} x2={W - pad} y2={sy} stroke="#e5e7eb" strokeWidth="0.5" />);
    if (v !== 0) gridLines.push(<text key={`ly${v}`} x={pad - 6} y={sy + 3} textAnchor="end" fontSize="9" fill="#9ca3af">{v}</text>);
  }

  const axes = [];
  if (xMin <= 0 && xMax >= 0) {
    const ax = toSX(0);
    axes.push(<line key="yaxis" x1={ax} y1={pad} x2={ax} y2={H - pad} stroke="#374151" strokeWidth="1" />);
  }
  if (yMin <= 0 && yMax >= 0) {
    const ay = toSY(0);
    axes.push(<line key="xaxis" x1={pad} y1={ay} x2={W - pad} y2={ay} stroke="#374151" strokeWidth="1" />);
  }

  const lines = [];
  for (let i = 0; i < numEqs; i++) {
    const a = coeffs[i][0];
    const b = coeffs[i][1];
    const c = constants[i];
    const color = LINE_COLORS[i % LINE_COLORS.length];

    if (Math.abs(b) > 1e-10) {
      const y1 = (c - a * xMin) / b;
      const y2 = (c - a * xMax) / b;
      lines.push(<line key={`l${i}`} x1={toSX(xMin)} y1={toSY(y1)} x2={toSX(xMax)} y2={toSY(y2)} stroke={color} strokeWidth="2" opacity="0.85" />);
    } else if (Math.abs(a) > 1e-10) {
      const xv = c / a;
      lines.push(<line key={`l${i}`} x1={toSX(xv)} y1={pad} x2={toSX(xv)} y2={H - pad} stroke={color} strokeWidth="2" opacity="0.85" />);
    }

    const lblX = W - pad - 4;
    let lblY;
    if (Math.abs(b) > 1e-10) lblY = toSY((c - a * xMax) / b);
    else lblY = pad + 14 + i * 14;
    lines.push(
      <text key={`ll${i}`} x={lblX} y={Math.max(pad + 10, Math.min(H - pad - 4, lblY - 4))} textAnchor="end" fontSize="10" fontWeight="600" fill={color}>
        eq{i + 1}
      </text>
    );
  }

  let solDot = null;
  if (solution) {
    solDot = (
      <g>
        <circle cx={toSX(solution[0])} cy={toSY(solution[1])} r="5" fill="#4285f4" stroke="white" strokeWidth="2" />
        <text x={toSX(solution[0]) + 8} y={toSY(solution[1]) - 8} fontSize="10" fontWeight="600" fill="#1f2937">
          ({fmtNum(solution[0])}, {fmtNum(solution[1])})
        </text>
      </g>
    );
  }

  return (
    <div style={s.graphWrap}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
        style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #d0d9f0' }}>
        {gridLines}
        {axes}
        <defs>
          <clipPath id="plot-area">
            <rect x={pad} y={pad} width={W - 2 * pad} height={H - 2 * pad} />
          </clipPath>
        </defs>
        <g clipPath="url(#plot-area)">{lines}</g>
        {solDot && <g clipPath="url(#plot-area)">{solDot}</g>}
        <text x={W - pad + 4} y={toSY(0) + 4} fontSize="11" fontWeight="600" fill="#374151">x&#8321;</text>
        <text x={toSX(0) + 6} y={pad - 6} fontSize="11" fontWeight="600" fill="#374151">x&#8322;</text>
      </svg>
    </div>
  );
}

/* ── component ────────────────────────────────────────────────── */

const METHODS = ['Gaussian Elimination', 'Gauss-Jordan', "Cramer's Rule", 'Inverse Method'];
const SQUARE_ONLY = ["Cramer's Rule", 'Inverse Method'];

export default function LinearSystemsCalculator() {
  const [numEqs, setNumEqs] = useState(3);
  const [numVars, setNumVars] = useState(3);
  const [coeffs, setCoeffs] = useState(() => makeEmpty(3, 3));
  const [constants, setConstants] = useState(() => new Array(3).fill(''));
  const [method, setMethod] = useState('Gaussian Elimination');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState([]);
  const [view, setView] = useState('equation');
  const [rightTab, setRightTab] = useState('theory');

  function makeEmpty(rows, cols) {
    return Array.from({ length: rows }, () => new Array(cols).fill(''));
  }

  const handleEqsChange = (val) => {
    if (val === '') { setNumEqs(''); return; }
    const n = parseInt(val);
    if (n < 1 || n > 10) return;
    setNumEqs(n);
    setCoeffs((prev) => {
      const next = makeEmpty(n, numVars);
      for (let r = 0; r < Math.min(prev.length, n); r++)
        for (let c = 0; c < Math.min(prev[0].length, numVars); c++)
          next[r][c] = prev[r][c];
      return next;
    });
    setConstants((prev) => {
      const next = new Array(n).fill('');
      for (let r = 0; r < Math.min(prev.length, n); r++) next[r] = prev[r];
      return next;
    });
    setResult(null);
    setErrors([]);
  };

  const handleVarsChange = (val) => {
    if (val === '') { setNumVars(''); return; }
    const n = parseInt(val);
    if (n < 1 || n > 10) return;
    setNumVars(n);
    setCoeffs((prev) => {
      const next = makeEmpty(numEqs, n);
      for (let r = 0; r < Math.min(prev.length, numEqs); r++)
        for (let c = 0; c < Math.min(prev[0].length, n); c++)
          next[r][c] = prev[r][c];
      return next;
    });
    setResult(null);
    setErrors([]);
  };

  const updateCoeff = (r, c, val) => {
    setCoeffs((prev) => {
      const next = prev.map((row) => [...row]);
      next[r][c] = val;
      return next;
    });
    if (errors.length) setErrors([]);
  };

  const updateConstant = (r, val) => {
    setConstants((prev) => {
      const next = [...prev];
      next[r] = val;
      return next;
    });
    if (errors.length) setErrors([]);
  };

  const randomize = () => {
    setCoeffs(Array.from({ length: numEqs }, () =>
      Array.from({ length: numVars }, () => String(Math.floor(Math.random() * 21) - 10))
    ));
    setConstants(Array.from({ length: numEqs }, () =>
      String(Math.floor(Math.random() * 21) - 10)
    ));
    setResult(null);
    setErrors([]);
  };

  const clearAll = () => {
    setCoeffs(makeEmpty(numEqs, numVars));
    setConstants(new Array(numEqs).fill(''));
    setResult(null);
    setErrors([]);
  };

  const resetAll = () => {
    setNumEqs(3);
    setNumVars(3);
    setCoeffs(makeEmpty(3, 3));
    setConstants(new Array(3).fill(''));
    setMethod('Gaussian Elimination');
    setResult(null);
    setErrors([]);
    setView('equation');
    setRightTab('theory');
  };

  const validate = () => {
    const errs = [];
    for (let r = 0; r < numEqs; r++) {
      for (let c = 0; c < numVars; c++) {
        if (coeffs[r][c] === '' || isNaN(parseFloat(coeffs[r][c])))
          errs.push(`Coefficient at row ${r + 1}, x${subscript(c + 1)} is empty or invalid`);
      }
      if (constants[r] === '' || isNaN(parseFloat(constants[r])))
        errs.push(`Constant b${subscript(r + 1)} is empty or invalid`);
    }
    if (SQUARE_ONLY.includes(method) && numEqs !== numVars)
      errs.push(`${method} requires a square system (equations = variables)`);
    setErrors(errs);
    return errs.length === 0;
  };

  const solve = () => {
    if (!validate()) return;
    const numCoeffs = coeffs.map((row) => row.map((v) => parseFloat(v)));
    const numConst = constants.map((v) => parseFloat(v));
    const res = solveLinearSystem(method, numCoeffs, numConst);
    setResult(res);
    if (res.type === 'error') setErrors([res.detail]);
    if (res.steps && res.steps.length > 0) setRightTab('steps');
  };

  const isMethodDisabled = (m) => SQUARE_ONLY.includes(m) && numEqs !== numVars;

  const parsedCoeffs = useMemo(() => {
    try { return coeffs.map((row) => row.map((v) => (v === '' ? 0 : parseFloat(v) || 0))); }
    catch { return null; }
  }, [coeffs]);

  const parsedConst = useMemo(() => {
    try { return constants.map((v) => (v === '' ? 0 : parseFloat(v) || 0)); }
    catch { return null; }
  }, [constants]);

  const renderEquationView = () => (
    <div style={s.eqCard}>
      <div style={s.eqCardHeader}>
        <h4 style={s.eqCardTitle}>Coefficients</h4>
        <div style={s.eqCardActions}>
          <button onClick={randomize} style={{ ...s.btnSm, ...s.btnRandom }}>Random</button>
          <button onClick={clearAll} style={{ ...s.btnSm, ...s.btnClear }}>Clear</button>
          <Tooltip text="Random fills coefficients and constants with integers from -10 to 10." />
        </div>
      </div>
      {coeffs.map((row, r) => (
        <div key={r} style={s.eqRow}>
          <span style={s.eqRowNum}>{r + 1}.</span>
          {row.map((val, c) => (
            <React.Fragment key={c}>
              {c > 0 && <span style={s.eqSign}>+</span>}
              <input type="number" step="any" value={val} onChange={(e) => updateCoeff(r, c, e.target.value)} placeholder="0" style={s.eqCell} />
              <span style={s.eqVar}>x{subscript(c + 1)}</span>
            </React.Fragment>
          ))}
          <span style={s.eqSign}>=</span>
          <input type="number" step="any" value={constants[r]} onChange={(e) => updateConstant(r, e.target.value)} placeholder="0" style={s.eqConstCell} />
        </div>
      ))}
    </div>
  );

  const renderMatrixView = () => (
    <div style={s.eqCard}>
      <div style={s.eqCardHeader}>
        <h4 style={s.eqCardTitle}>Augmented Matrix [A|b]</h4>
        <div style={s.eqCardActions}>
          <button onClick={randomize} style={{ ...s.btnSm, ...s.btnRandom }}>Random</button>
          <button onClick={clearAll} style={{ ...s.btnSm, ...s.btnClear }}>Clear</button>
        </div>
      </div>
      <div style={s.matrixContainer}>
        <span style={s.bracket}>[</span>
        <div style={{ ...s.matrixTable, gridTemplateColumns: `repeat(${numVars}, 1fr)` }}>
          {coeffs.map((row, r) =>
            row.map((val, c) => (
              <input key={`${r}-${c}`} type="number" step="any" value={val} onChange={(e) => updateCoeff(r, c, e.target.value)} placeholder="0" style={s.eqCell} />
            ))
          )}
        </div>
        <div style={s.augDivider} />
        <div style={{ ...s.matrixTable, gridTemplateColumns: '1fr' }}>
          {constants.map((val, r) => (
            <input key={r} type="number" step="any" value={val} onChange={(e) => updateConstant(r, e.target.value)} placeholder="0" style={s.eqConstCell} />
          ))}
        </div>
        <span style={s.bracket}>]</span>
      </div>
    </div>
  );

  const renderResult = () => {
    if (!result) return 'Enter values, choose a method, and click Solve';

    if (result.type === 'error') return <span style={s.resError}>{result.detail}</span>;

    if (result.type === 'none') {
      return (
        <>
          <span style={{ color: '#dc2626', fontWeight: '600', fontSize: '1rem' }}>&#10007; No Solution</span>
          <span style={s.resDetail}>{result.detail}</span>
        </>
      );
    }

    if (result.type === 'infinite') {
      return (
        <>
          <span style={{ color: '#d97706', fontWeight: '600', fontSize: '1rem' }}>&#8734; Infinite Solutions</span>
          <span style={s.resDetail}>{result.detail}</span>
        </>
      );
    }

    return (
      <>
        <span style={s.resLabel}>Unique solution ({method})</span>
        <div style={s.resVarRow}>
          {result.solution.map((v, i) => (
            <span key={i} style={s.resVar}>x{subscript(i + 1)} = {fmtNum(v)}</span>
          ))}
        </div>
        <span style={s.resDetail}>{result.detail}</span>
      </>
    );
  };

  const renderRightContent = () => {
    if (rightTab === 'theory') {
      const desc = descriptions[method] || descriptions._default;
      return (
        <>
          <h4 style={s.explTitle}>{method}</h4>
          <p style={s.explBody}>{processContent(desc)}</p>
        </>
      );
    }

    if (rightTab === 'steps') {
      if (!result || !result.steps || result.steps.length === 0) {
        return <p style={{ ...s.explBody, fontStyle: 'italic' }}>Solve a system to see step-by-step calculations here.</p>;
      }
      return (
        <>
          <div style={s.stepsTitle}>Calculation Steps</div>
          <ul style={s.stepsList}>
            {result.steps.map((line, i) => (
              <li key={i} style={s.stepItem}>{line}</li>
            ))}
          </ul>
        </>
      );
    }

    if (rightTab === 'graph') {
      return (
        <>
          <div style={s.stepsTitle}>System Graph</div>
          <SystemGraph coeffs={parsedCoeffs} constants={parsedConst} solution={result?.type === 'unique' ? result.solution : null} numEqs={numEqs} numVars={numVars} />
        </>
      );
    }

    return null;
  };

  /* ── JSX ─────────────────────────────────────────────────────── */

  return (
    <div style={s.container}>
      <div style={s.main}>

        <div style={s.header}>
          {/* <h1 style={s.title}>Linear Systems Calculator</h1> */}
          <p style={s.subtitle}>Solve and visualize systems of linear equations</p>
        </div>

        <div style={s.threeCol}>

          {/* ▸ LEFT — input mode + method sub-items */}
          <div style={s.leftPanel}>
            <div style={s.leftTitle}>Input Mode</div>

            <button onClick={() => setView('equation')} style={s.modeBtn(view === 'equation')}>
              <div style={s.modeLbl(view === 'equation')}>Equations</div>
              <div style={s.modeDesc}>Enter coefficients equation by equation</div>
            </button>

            <button onClick={() => setView('matrix')} style={s.modeBtn(view === 'matrix')}>
              <div style={s.modeLbl(view === 'matrix')}>Augmented Matrix</div>
              <div style={s.modeDesc}>Enter the full augmented matrix [A|b]</div>
            </button>

            {/* ── Solution Method sub-items ── */}
            <div style={s.leftSectionTitle}>Method</div>
            <div style={s.opSubList}>
              {METHODS.map((m) => {
                const sel = method === m;
                const dis = isMethodDisabled(m);
                return (
                  <button
                    key={m}
                    onClick={() => { if (!dis) { setMethod(m); setResult(null); } }}
                    disabled={dis}
                    style={{
                      ...s.opSubItem,
                      ...(sel ? s.opSubItemSelected : {}),
                      ...(dis ? s.opSubItemDisabled : {}),
                    }}
                  >
                    {sel && <span style={s.opSubDot} />}
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ▸ MIDDLE — editor */}
          <div>
            <div style={s.inputHeader}>
              <h2 style={s.inputTitle}>
                System of Equations ({numEqs}&times;{numVars})
              </h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Tooltip text="Enter coefficient values and constants for each equation. Use Random for test data." />
                <button onClick={resetAll} style={s.btnDanger}>Reset All</button>
              </div>
            </div>

            {/* Dimensions */}
            <div style={s.dimControls}>
              <div style={s.dimGroup}>
                <label style={s.dimLabel}>Equations:</label>
                <input type="number" min="1" max="10" value={numEqs} onChange={(e) => handleEqsChange(e.target.value)} style={s.dimInput(numEqs)} />
              </div>
              <div style={s.dimGroup}>
                <label style={s.dimLabel}>Variables:</label>
                <input type="number" min="1" max="10" value={numVars} onChange={(e) => handleVarsChange(e.target.value)} style={s.dimInput(numVars)} />
              </div>
              <span style={s.dimHint}>
                {numEqs} equation{numEqs !== 1 ? 's' : ''}, {numVars} unknown{numVars !== 1 ? 's' : ''}
              </span>
              {numEqs !== numVars && (
                <span style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: '500' }}>
                  Some methods require square systems
                </span>
              )}
              <Tooltip text="Set system size (1–10). Non-square systems restrict available methods." />
            </div>

            {/* Errors */}
            {errors.length > 0 && (
              <div style={s.errorSection}>
                <div style={s.errorTitle}>Please fix the following:</div>
                <ul style={s.errorList}>
                  {errors.map((err, i) => (
                    <li key={i} style={s.errorItem}>&bull; {err}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Input view */}
            {view === 'equation' ? renderEquationView() : renderMatrixView()}

            {/* Execute */}
            <div style={s.execRow}>
              <button
                onClick={solve}
                style={{ ...s.execBtn, ...(!method ? s.execBtnDisabled : {}) }}
                disabled={!method}
              >
                Solve System
              </button>
            </div>

            {/* Result */}
            <div style={s.resultBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <h4 style={s.resultTitle}>Solution</h4>
                <Tooltip text="Results appear after clicking Solve. Shows solution type: unique, infinite, or none." />
              </div>
              <div style={s.resultContent}>
                {renderResult()}
              </div>
            </div>
          </div>

          {/* ▸ RIGHT — explanation panel with tabs */}
          <div style={s.rightPanel}>
            <div style={s.tabRow}>
              {['theory', 'steps', 'graph'].map((t) => (
                <button
                  key={t}
                  onClick={() => setRightTab(t)}
                  style={{ ...s.tab, ...(rightTab === t ? s.tabActive : {}) }}
                >
                  {t === 'theory' ? 'Theory' : t === 'steps' ? 'Steps' : 'Graph'}
                </button>
              ))}
            </div>
            {renderRightContent()}
          </div>

        </div>
      </div>
    </div>
  );
}