// import React, { useState } from 'react';

// function RootCalculator({ explanations, detailInstructions }) {
//   const [value, setValue] = useState('');
//   const [rootType, setRootType] = useState('square');
//   const [nthValue, setNthValue] = useState('');
//   const [result, setResult] = useState('');
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   const handleChangeValue = (event) => {
//     setValue(event.target.value);
//   };

//   const handleChangeNthValue = (event) => {
//     setNthValue(event.target.value);
//   };

//   const toggleRootType = (event) => {
//     setRootType(event.target.value);
//     if (event.target.value !== 'nth') {
//       setNthValue('');
//     }
//   };

//   const calculateRoot = () => {
//     const num = parseFloat(value);
//     if (isNaN(num)) {
//       setResult('Error: Invalid input');
//       return;
//     }

//     try {
//       let rootResult;

//       switch (rootType) {
//         case 'square':
//           if (num < 0) {
//             setResult('Error: Cannot calculate square root of negative number');
//             return;
//           }
//           rootResult = Math.sqrt(num);
//           break;
//         case 'cube':
//           if (num < 0) {
//             rootResult = -Math.pow(Math.abs(num), 1/3);
//           } else {
//             rootResult = Math.pow(num, 1/3);
//           }
//           break;
//         case 'nth':
//           const n = parseFloat(nthValue);
//           if (isNaN(n) || n <= 0) {
//             setResult('Error: Invalid nth root');
//             return;
//           }
//           if (num < 0) {
//             if (n % 2 === 0) {
//               setResult('Error: Cannot calculate even root of negative number');
//               return;
//             } else {
//               rootResult = -Math.pow(Math.abs(num), 1/n);
//             }
//           } else {
//             rootResult = Math.pow(num, 1/n);
//           }
//           break;
//         default:
//           setResult('Error: Invalid root type');
//           return;
//       }

//       setResult(rootResult.toFixed(4));
//     } catch (error) {
//       setResult('Error: Calculation failed');
//     }
//   };

//   const resetAll = () => {
//     setValue('');
//     setRootType('square');
//     setNthValue('');
//     setResult('');
//   };

//   const processContent = (text) => text;

//   const defaultExplanations = {
//     square: {
//       text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
//       links: [
//         { title: "Square Root Visualizer", link: "#" },
//         { title: "Perfect Squares and Roots Table", link: "#" }
//       ]
//     },
//     cube: {
//       text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
//       links: [
//         { title: "Perfect Cubes and Cube Roots Table", link: "#" }
//       ]
//     },
//     nth: {
//       text: "An nth root of a number is a value that, when multiplied by itself n-1 times, gives the number. For example, the 4th root of 16 is 2, because 2 × 2 × 2 × 2 = 16."
//     }
//   };

//   const displayExplanations = explanations || defaultExplanations;

//   return (
//     <div style={{
//       display: 'flex',
//       gap: '20px',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '20px',
//       fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
//     }}>
//       {/* Main Calculator Container */}
//       <div style={{
//         flex: '1',
//         maxWidth: '600px',
//         backgroundColor: '#ffffff',
//         padding: '24px',
//         borderRadius: '12px',
//         border: '2px solid #e2e8f0'
//       }}>
//         {/* Root Type Selection */}
//         <div style={{ marginBottom: '24px' }}>
//           <label style={{
//             display: 'block',
//             marginBottom: '12px',
//             fontWeight: '600',
//             color: '#1e293b',
//             fontSize: '14px',
//             letterSpacing: '0.01em'
//           }}>
//             Choose Root Type
//           </label>
          
//           <div style={{
//             display: 'flex',
//             gap: '12px',
//             flexWrap: 'wrap'
//           }}>
//             {[
//               { value: 'square', label: 'Square' },
//               { value: 'cube', label: 'Cube' },
//               { value: 'nth', label: 'Custom Root' }
//             ].map((option) => (
//               <React.Fragment key={option.value}>
//                 <input
//                   type="radio"
//                   id={`root-${option.value}`}
//                   name="rootType"
//                   value={option.value}
//                   checked={rootType === option.value}
//                   onChange={toggleRootType}
//                   style={{ display: 'none' }}
//                 />
//                 <label
//                   htmlFor={`root-${option.value}`}
//                   style={{
//                     cursor: 'pointer',
//                     color: rootType === option.value ? '#ffffff' : '#475569',
//                     fontSize: '15px',
//                     padding: '10px 20px',
//                     border: '2px solid',
//                     borderColor: rootType === option.value ? '#3498db' : '#cbd5e1',
//                     borderRadius: '8px',
//                     backgroundColor: rootType === option.value ? '#3498db' : '#ffffff',
//                     transition: 'all 0.2s',
//                     fontWeight: '500'
//                   }}
//                   onMouseEnter={(e) => {
//                     if (rootType !== option.value) {
//                       e.target.style.borderColor = '#3498db';
//                       e.target.style.backgroundColor = '#f8fafc';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (rootType !== option.value) {
//                       e.target.style.borderColor = '#cbd5e1';
//                       e.target.style.backgroundColor = '#ffffff';
//                     }
//                   }}
//                 >
//                   {option.label}
//                 </label>
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {/* Calculator Body */}
//         <div style={{ marginBottom: '24px' }}>
//           <div style={{
//             backgroundColor: '#f8fafc',
//             border: '2px solid #e2e8f0',
//             borderLeft: '4px solid #3498db',
//             padding: '20px',
//             borderRadius: '8px'
//           }}>
//             <table style={{
//               width: '100%',
//               borderCollapse: 'collapse'
//             }}>
//               <tbody>
//                 <tr style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '12px'
//                 }}>
//                   {/* Nth value input */}
//                   {rootType === 'nth' && (
//                     <td style={{ flex: '0 0 auto' }}>
//                       <div style={{
//                         position: 'relative',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '8px'
//                       }}>
//                         <input
//                           type="text"
//                           value={nthValue}
//                           onChange={handleChangeNthValue}
//                           placeholder="n"
//                           style={{
//                             width: '80px',
//                             padding: '11px 14px',
//                             border: '2px solid #cbd5e1',
//                             borderRadius: '8px',
//                             fontSize: '16px',
//                             transition: 'all 0.2s',
//                             outline: 'none',
//                             backgroundColor: '#ffffff',
//                             textAlign: 'center'
//                           }}
//                           onFocus={(e) => e.target.style.borderColor = '#3498db'}
//                           onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
//                         />
//                         <span
//                           style={{
//                             position: 'relative',
//                             display: 'inline-flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             width: '20px',
//                             height: '20px',
//                             backgroundColor: '#e2e8f0',
//                             color: '#64748b',
//                             borderRadius: '50%',
//                             fontSize: '12px',
//                             fontWeight: '600',
//                             cursor: 'help',
//                             flexShrink: '0'
//                           }}
//                           onMouseEnter={() => setActiveTooltip('nth')}
//                           onMouseLeave={() => setActiveTooltip(null)}
//                         >
//                           ?
//                           {activeTooltip === 'nth' && (
//                             <span style={{
//                               position: 'absolute',
//                               bottom: '28px',
//                               left: '50%',
//                               transform: 'translateX(-50%)',
//                               backgroundColor: '#1e293b',
//                               color: '#ffffff',
//                               padding: '8px 12px',
//                               borderRadius: '6px',
//                               fontSize: '13px',
//                               whiteSpace: 'nowrap',
//                               zIndex: '1000',
//                               pointerEvents: 'none'
//                             }}>
//                               Enter the nth root value
//                               <span style={{
//                                 content: '',
//                                 position: 'absolute',
//                                 top: '100%',
//                                 left: '50%',
//                                 transform: 'translateX(-50%)',
//                                 border: '5px solid transparent',
//                                 borderTopColor: '#1e293b'
//                               }} />
//                             </span>
//                           )}
//                         </span>
//                       </div>
//                     </td>
//                   )}

//                   {/* Root Symbol */}
//                   <td style={{
//                     flex: '0 0 auto',
//                     fontSize: '32px',
//                     color: '#1e293b',
//                     fontWeight: '300'
//                   }}>
//                     {rootType === 'cube' ? '∛' : '√'}
//                   </td>

//                   {/* Value Input */}
//                   <td style={{ flex: '0 0 auto' }}>
//                     <div style={{
//                       position: 'relative',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px'
//                     }}>
//                       <input
//                         type="text"
//                         value={value}
//                         onChange={handleChangeValue}
//                         placeholder="Enter number"
//                         style={{
//                           width: '150px',
//                           padding: '11px 14px',
//                           border: '2px solid #cbd5e1',
//                           borderRadius: '8px',
//                           fontSize: '16px',
//                           transition: 'all 0.2s',
//                           outline: 'none',
//                           backgroundColor: '#ffffff'
//                         }}
//                         onFocus={(e) => e.target.style.borderColor = '#3498db'}
//                         onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
//                       />
//                       <span
//                         style={{
//                           position: 'relative',
//                           display: 'inline-flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           width: '20px',
//                           height: '20px',
//                           backgroundColor: '#e2e8f0',
//                           color: '#64748b',
//                           borderRadius: '50%',
//                           fontSize: '12px',
//                           fontWeight: '600',
//                           cursor: 'help',
//                           flexShrink: '0'
//                         }}
//                         onMouseEnter={() => setActiveTooltip('value')}
//                         onMouseLeave={() => setActiveTooltip(null)}
//                       >
//                         ?
//                         {activeTooltip === 'value' && (
//                           <span style={{
//                             position: 'absolute',
//                             bottom: '28px',
//                             left: '50%',
//                             transform: 'translateX(-50%)',
//                             backgroundColor: '#1e293b',
//                             color: '#ffffff',
//                             padding: '8px 12px',
//                             borderRadius: '6px',
//                             fontSize: '13px',
//                             whiteSpace: 'nowrap',
//                             zIndex: '1000',
//                             pointerEvents: 'none'
//                           }}>
//                             Enter the number
//                             <span style={{
//                               content: '',
//                               position: 'absolute',
//                               top: '100%',
//                               left: '50%',
//                               transform: 'translateX(-50%)',
//                               border: '5px solid transparent',
//                               borderTopColor: '#1e293b'
//                             }} />
//                           </span>
//                         )}
//                       </span>
//                     </div>
//                   </td>

//                   {/* Result */}
//                   <td style={{
//                     flex: '1',
//                     fontSize: '20px',
//                     fontWeight: '600',
//                     color: '#0c4a6e',
//                     textAlign: 'right',
//                     paddingRight: '8px'
//                   }}>
//                     = {result || ''}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div style={{
//           display: 'flex',
//           gap: '12px'
//         }}>
//           <button
//             onClick={calculateRoot}
//             style={{
//               flex: '1',
//               padding: '14px 24px',
//               border: '2px solid #3498db',
//               borderRadius: '8px',
//               fontSize: '16px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s',
//               outline: 'none',
//               backgroundColor: '#3498db',
//               color: '#ffffff'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#2980b9';
//               e.target.style.borderColor = '#2980b9';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = '#3498db';
//               e.target.style.borderColor = '#3498db';
//             }}
//           >
//             Calculate
//           </button>
//           <button
//             onClick={resetAll}
//             style={{
//               flex: '1',
//               padding: '14px 24px',
//               border: '2px solid #cbd5e1',
//               borderRadius: '8px',
//               fontSize: '16px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s',
//               outline: 'none',
//               backgroundColor: '#ffffff',
//               color: '#64748b'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#f8fafc';
//               e.target.style.borderColor = '#94a3b8';
//               e.target.style.color = '#475569';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = '#ffffff';
//               e.target.style.borderColor = '#cbd5e1';
//               e.target.style.color = '#64748b';
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* Explanation Panel - Right Side */}
//       {displayExplanations && displayExplanations[rootType] && (
//         <div style={{
//           flex: '1',
//           maxWidth: '600px',
//           alignSelf: 'flex-start',
//           position: 'sticky',
//           top: '20px'
//         }}>
//           <div style={{
//             backgroundColor: '#f8fafc',
//             padding: '24px',
//             borderRadius: '12px',
//             border: '2px solid #e2e8f0',
//             borderLeft: '4px solid #3498db'
//           }}>
//             <div style={{
//               color: '#475569',
//               fontSize: '15px',
//               lineHeight: '1.6',
//               marginBottom: '20px'
//             }}>
//               {processContent(displayExplanations[rootType].text)}
//             </div>
            
//             {displayExplanations[rootType].links && (
//               <div style={{
//                 borderTop: '2px solid #e2e8f0',
//                 paddingTop: '16px'
//               }}>
//                 <p style={{
//                   fontWeight: '600',
//                   color: '#1e293b',
//                   fontSize: '14px',
//                   margin: '0 0 12px 0'
//                 }}>
//                   Learn more:
//                 </p>
//                 <ul style={{
//                   listStyle: 'none',
//                   padding: '0',
//                   margin: '0'
//                 }}>
//                   {displayExplanations[rootType].links.map((link, index) => (
//                     <li key={index} style={{ marginBottom: '8px' }}>
//                       <a
//                         href={link.link}
//                         rel="noopener noreferrer"
//                         style={{
//                           color: '#3498db',
//                           textDecoration: 'none',
//                           fontSize: '14px',
//                           transition: 'color 0.2s'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.target.style.color = '#2980b9';
//                           e.target.style.textDecoration = 'underline';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.target.style.color = '#3498db';
//                           e.target.style.textDecoration = 'none';
//                         }}
//                       >
//                         {link.title}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RootCalculator;


'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import defaultExplanations from './rootCalculatorExplanations';

/* =====================================================================
   Utilities (module scope)
   ===================================================================== */

function parseNum(s) {
  if (s === '' || s === '-' || s === '.' || s == null) return NaN;
  const n = parseFloat(s);
  return isNaN(n) ? NaN : n;
}

function fmt(n, opts = {}) {
  if (!isFinite(n)) return n > 0 ? '∞' : '-∞';
  if (isNaN(n)) return 'undefined';
  const abs = Math.abs(n);
  if (abs !== 0 && (abs >= 1e12 || abs < 1e-4)) {
    return n.toExponential(opts.exp != null ? opts.exp : 4);
  }
  if (Number.isInteger(n) && abs < 1e15) return n.toString();
  return n.toFixed(opts.fixed != null ? opts.fixed : 4);
}

function fmtSci(n, digits) {
  if (!isFinite(n) || isNaN(n)) return '—';
  if (n === 0) return '0';
  return n.toExponential(digits != null ? digits : 4);
}

function withCommas(s) {
  const str = String(s);
  const neg = str.startsWith('-');
  const body = neg ? str.slice(1) : str;
  const [intPart, decPart] = body.split('.');
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '-' : '') + grouped + (decPart ? '.' + decPart : '');
}

function trimTrailingZeros(s) {
  if (typeof s !== 'string' || !s.includes('.')) return s;
  return s.replace(/\.?0+$/, '');
}

function fmtTable(v) {
  if (!isFinite(v)) return v > 0 ? '∞' : '-∞';
  if (isNaN(v)) return '—';
  const abs = Math.abs(v);
  if (abs !== 0 && (abs >= 1e10 || abs < 1e-4)) return v.toExponential(3);
  if (Number.isInteger(v) && abs < 1e15) return withCommas(v);
  const trimmed = v.toFixed(6).replace(/\.?0+$/, '');
  if (trimmed.includes('.')) {
    const [i, d] = trimmed.split('.');
    return withCommas(i) + '.' + d;
  }
  return withCommas(trimmed);
}

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}
function lcm(a, b) { return Math.abs(a * b) / gcd(a, b); }

function nthRoot(x, n) {
  if (n === 0) return NaN;
  if (x === 0) return 0;
  if (x < 0) {
    if (Number.isInteger(n) && n % 2 !== 0) return -Math.pow(-x, 1 / n);
    return NaN;
  }
  return Math.pow(x, 1 / n);
}

function isPerfectNthPower(n, k) {
  if (!Number.isInteger(n) || !Number.isInteger(k) || k < 1) return null;
  if (n === 0) return 0;
  if (n < 0) {
    if (k % 2 === 0) return null;
    const inner = isPerfectNthPower(-n, k);
    return inner == null ? null : -inner;
  }
  const r = Math.round(Math.pow(n, 1 / k));
  for (let i = -1; i <= 1; i++) {
    const c = r + i;
    if (c >= 0 && Math.pow(c, k) === n) return c;
  }
  return null;
}

function simplifyRadical(n, k) {
  if (!Number.isInteger(n) || !Number.isInteger(k) || k < 2) return null;
  if (n < 0) return null;
  if (n === 0) return { coef: 0, radicand: 0 };
  if (n === 1) return { coef: 1, radicand: 1 };
  let coef = 1, rad = n;
  const pk = (p) => Math.pow(p, k);
  for (let p = 2; pk(p) <= rad; p++) {
    while (rad % pk(p) === 0) {
      coef *= p;
      rad = rad / pk(p);
    }
  }
  return { coef, radicand: rad };
}

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function mathHTML(latex) {
  return `<span data-math="${escAttr(latex)}"></span>`;
}

/* Render KaTeX into every [data-math] element inside container. */
function renderKatexIn(container) {
  if (!container || typeof window === 'undefined' || !window.katex) return;
  const nodes = container.querySelectorAll('[data-math]');
  nodes.forEach((el) => {
    const src = el.getAttribute('data-math') || el.textContent || '';
    if (el.dataset.mathRendered === src) return;
    try {
      window.katex.render(src, el, { throwOnError: false, displayMode: false });
      el.dataset.mathRendered = src;
    } catch (e) {
      el.textContent = src;
    }
  });
}

/* Deep merge override into defaults */
function deepMerge(def, override) {
  if (override == null) return def;
  if (typeof def !== 'object' || typeof override !== 'object') return override;
  if (Array.isArray(def) || Array.isArray(override)) return override;
  if (typeof def === 'function' || typeof override === 'function') return override;
  const out = { ...def };
  for (const k of Object.keys(override)) {
    out[k] = deepMerge(def[k], override[k]);
  }
  return out;
}

const HELPERS = {
  fmt, fmtSci, withCommas, trimTrailingZeros, fmtTable,
  isPerfectNthPower, simplifyRadical, gcd, lcm, nthRoot
};

const COPY_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const CHECK_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

/* =====================================================================
   Embedded CSS (scoped under .rc-root)
   ===================================================================== */

const STYLES = `
.rc-root :root,
.rc-root {
  --ms-primary:        #1d4ed8;
  --ms-primary-dark:   #1e3a8a;
  --ms-primary-light:  #dbeafe;
  --ms-primary-hover:  #1e40af;
  --ms-primary-deeper: #172554;

  --ms-bg:             #f4f6fb;
  --ms-card-bg:        #ffffff;
  --ms-border:         #e2e8f0;
  --ms-border-strong:  #cbd5e1;

  --ms-text:           #0f172a;
  --ms-text-muted:     #64748b;
  --ms-text-soft:      #475569;

  --ms-success:        #0d9488;
  --ms-warning:        #b45309;
  --ms-error:          #b91c1c;

  --ms-font-serif: 'Playfair Display', Georgia, serif;
  --ms-font-sans:  'Inter', -apple-system, sans-serif;
  --ms-font-mono:  'JetBrains Mono', 'SF Mono', Menlo, monospace;

  --ms-radius-sm: 6px;
  --ms-radius:    10px;
  --ms-radius-lg: 14px;

  --ms-shadow-sm: 0 1px 2px rgba(15,23,42,.05);
  --ms-shadow:    0 2px 6px rgba(15,23,42,.06), 0 1px 2px rgba(15,23,42,.04);
}

.rc-root, .rc-root * { box-sizing: border-box; }
.rc-root {
  color: var(--ms-text);
  font-family: var(--ms-font-sans);
  font-size: 1rem;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.rc-root .page {
  width: 94%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 1.25rem 0 3rem;
}

/* Mode tabs */
.rc-root .mode-tabs {
  display: flex;
  gap: .5rem;
  background: var(--ms-card-bg);
  border: 1px solid var(--ms-border);
  border-radius: 999px;
  padding: .32rem;
  margin: 0 auto 1rem;
  width: fit-content;
  box-shadow: var(--ms-shadow-sm);
}
.rc-root .mode-tab {
  font-family: inherit;
  font-size: .92rem;
  font-weight: 600;
  padding: .5rem 1.4rem;
  background: transparent;
  border: none;
  border-radius: 999px;
  color: var(--ms-text-soft);
  cursor: pointer;
  transition: all .15s;
}
.rc-root .mode-tab:hover { color: var(--ms-text); }
.rc-root .mode-tab.is-active {
  background: var(--ms-primary);
  color: #fff;
  box-shadow: 0 2px 6px rgba(29,78,216,.25);
}

/* Grid */
.rc-root .main-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}
@media (max-width: 1020px) { .rc-root .main-grid { grid-template-columns: 1fr; } }

/* Cards */
.rc-root .card {
  background: var(--ms-card-bg);
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius-lg);
  box-shadow: var(--ms-shadow);
  margin-bottom: 1rem;
  overflow: hidden;
}
.rc-root .card-header {
  background: var(--ms-primary);
  color: #fff;
  padding: .55rem 1.15rem;
  font-family: var(--ms-font-serif);
  font-weight: 600;
  font-size: .92rem;
}
.rc-root .left-col .card-body { padding: .95rem 1.2rem; }
.rc-root .right-col .card-body { padding: 1.3rem 1.5rem; }

/* Mode panels */
.rc-root .mode-panel { display: none; }
.rc-root .mode-panel.is-active { display: block; }

/* Type row (inline label + pills) */
.rc-root .type-row {
  display: flex;
  align-items: center;
  gap: .9rem;
  margin-bottom: .55rem;
}
.rc-root .type-label {
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .02em;
  color: var(--ms-text-soft);
  flex-shrink: 0;
}
.rc-root .type-pills {
  display: flex;
  gap: .45rem;
  flex-shrink: 0;
  align-items: center;
}
.rc-root .type-pill {
  font-family: inherit;
  font-size: .82rem;
  font-weight: 600;
  padding: .56rem 1.12rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  transition: all .1s;
  box-shadow: var(--ms-shadow-sm);
  min-width: 80px;
}
.rc-root .type-pill:hover {
  background: var(--ms-primary-light);
  border-color: var(--ms-primary);
  color: var(--ms-primary-dark);
}
.rc-root .type-pill.is-active {
  background: var(--ms-primary);
  border-color: var(--ms-primary);
  color: #fff;
}

/* Chips (own row, under the type pills) */
.rc-root .chips-row {
  margin-top: -.3rem;
  margin-bottom: .85rem;
}
.rc-root .chips-row[hidden] { display: none; }
.rc-root .chips-list {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
}
.rc-root .chip {
  font-family: inherit;
  font-size: .78rem;
  font-weight: 500;
  padding: .32rem .64rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  transition: all .1s;
  box-shadow: var(--ms-shadow-sm);
  min-width: 40px;
  flex-shrink: 0;
  white-space: nowrap;
}
.rc-root .chip:hover {
  background: var(--ms-primary-light);
  border-color: var(--ms-primary);
  color: var(--ms-primary-dark);
}
.rc-root .chip.is-active {
  background: var(--ms-primary);
  border-color: var(--ms-primary);
  color: #fff;
}

/* Slot inputs */
.rc-root .slot-input {
  text-align: center;
  font-family: var(--ms-font-mono);
  font-weight: 500;
  background: #fff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  color: var(--ms-text);
  outline: none;
  transition: all .12s;
  padding: 0 .5rem;
}
.rc-root .slot-input:focus {
  border-color: var(--ms-primary);
  box-shadow: 0 0 0 3px rgba(29,78,216,.14);
}
.rc-root .slot-input:read-only {
  background: #f1f5f9;
  color: var(--ms-text-muted);
  cursor: not-allowed;
}

.rc-root .slot-input.rad     { width: 130px; height: 52px; font-size: 1.56rem; }
.rc-root .slot-input.idx     { width: 56px;  height: 36px; font-size: 1rem; }
.rc-root .slot-input.cmp-rad { width: 90px;  height: 44px; font-size: 1.2rem; }
.rc-root .slot-input.cmp-idx { width: 50px;  height: 30px; font-size: .85rem; }
.rc-root .slot-input.law-num { width: 56px;  height: 38px; font-size: 1rem;   }

/* Radical glyph */
.rc-root .radical {
  display: inline-flex;
  align-items: stretch;
  gap: 0;
  vertical-align: middle;
}
.rc-root .radical-idx {
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-right: -8px;
  margin-top: -2px;
  z-index: 1;
}
.rc-root .radical-sign {
  font-family: 'KaTeX_Main', 'Cambria Math', serif;
  font-size: 2.4rem;
  line-height: 1;
  color: var(--ms-text);
  display: inline-flex;
  align-items: center;
  padding-top: 4px;
}
.rc-root .radical-sign.lg { font-size: 3rem; }
.rc-root .radical-body {
  border-top: 1.5px solid var(--ms-text);
  padding: 4px 6px 0 6px;
  display: inline-flex;
  align-items: center;
  margin-top: 2px;
}

/* Expression box */
.rc-root .expression {
  background: #f8faff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: 1.3rem 1.1rem;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .7rem;
  flex-wrap: wrap;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
}
.rc-root .expr-eq {
  font-family: 'KaTeX_Main', 'Times New Roman', serif;
  font-size: 1.6rem;
  color: var(--ms-text-soft);
}
.rc-root .result-inline {
  font-family: 'KaTeX_Main', 'Times New Roman', serif;
  font-size: 1.6rem;
  color: var(--ms-text);
  min-width: 86px;
  text-align: left;
}
.rc-root .result-inline.placeholder {
  color: var(--ms-text-muted);
  font-style: italic;
  font-size: .96rem;
  font-family: var(--ms-font-sans);
}

/* Buttons */
.rc-root .actions { display: flex; gap: .55rem; margin-top: .8rem; }
.rc-root .btn {
  font-family: inherit;
  font-size: .82rem;
  font-weight: 600;
  padding: .64rem 1.6rem;
  border-radius: var(--ms-radius);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all .1s;
}
.rc-root .btn:active { transform: translateY(1px); }
.rc-root .btn-primary { background: var(--ms-primary); color: #fff; flex: 1; }
.rc-root .btn-primary:hover { background: var(--ms-primary-hover); }
.rc-root .btn-secondary {
  background: #fff;
  color: var(--ms-text-soft);
  border-color: var(--ms-border-strong);
}
.rc-root .btn-secondary:hover {
  background: #f8fafc;
  color: var(--ms-text);
}

/* Result card */
.rc-root .result {
  background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
  border-left: 4px solid var(--ms-primary);
  padding: .85rem 1.2rem;
}
.rc-root .result-eyebrow {
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .3rem;
}
.rc-root .result-primary {
  font-size: 1.55rem;
  color: var(--ms-text);
  margin-bottom: .55rem;
  min-height: 30px;
}
.rc-root .result-primary .katex { font-size: 1.45rem !important; }
.rc-root .result-forms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
  gap: .52rem;
  margin-bottom: .82rem;
}
.rc-root .result-form {
  position: relative;
  background: rgba(255,255,255,.75);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: .52rem .72rem;
  padding-right: 1.7rem;
}
.rc-root .result-form-label {
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: .24rem;
}
.rc-root .result-form-value {
  font-family: var(--ms-font-mono);
  font-size: .82rem;
  font-weight: 500;
  color: var(--ms-text);
  word-break: break-all;
  min-height: 1.1rem;
}
.rc-root .result-form-value .katex { font-size: .92rem !important; }
.rc-root .result-form-copy {
  position: absolute;
  top: .4rem;
  right: .4rem;
  background: transparent;
  border: none;
  color: var(--ms-text-muted);
  cursor: pointer;
  padding: .3rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all .15s;
}
.rc-root .result-form-copy:hover {
  background: rgba(29,78,216,.08);
  color: var(--ms-primary);
}
.rc-root .result-form-copy.is-copied {
  color: var(--ms-success);
  background: rgba(13,148,136,.12);
}

/* Neighbors & history */
.rc-root .neighbors { margin-top: .7rem; padding-top: .7rem; border-top: 1px solid var(--ms-primary-light); }
.rc-root .neighbors-label, .rc-root .history-label {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .5rem;
}
.rc-root .neighbors-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: .3rem;
}
.rc-root .neighbor {
  background: rgba(255,255,255,.7);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .44rem .24rem;
  text-align: center;
  cursor: pointer;
  transition: all .1s;
}
.rc-root .neighbor:hover { background: #fff; border-color: var(--ms-primary); }
.rc-root .neighbor.is-current { background: var(--ms-primary); border-color: var(--ms-primary); }
.rc-root .neighbor.is-current .neighbor-label .katex,
.rc-root .neighbor.is-current .neighbor-value { color: #fff !important; }
.rc-root .neighbor.is-current .neighbor-label .katex * { color: #fff !important; }
.rc-root .neighbor-label .katex { font-size: .82rem !important; }
.rc-root .neighbor-value {
  font-family: var(--ms-font-mono);
  font-size: .7rem;
  color: var(--ms-text-soft);
  margin-top: .14rem;
}
@media (max-width: 760px) { .rc-root .neighbors-grid { grid-template-columns: repeat(4,1fr); } }

.rc-root .history-strip { margin-top: .7rem; padding-top: .7rem; border-top: 1px solid var(--ms-primary-light); }
.rc-root .history-strip[hidden] { display: none; }
.rc-root .history-chips {
  display: flex;
  flex-wrap: wrap;
  gap: .32rem;
}
.rc-root .history-chip {
  background: rgba(255,255,255,.75);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .28rem .56rem;
  display: inline-flex;
  align-items: center;
  gap: .32rem;
  cursor: pointer;
  font-family: var(--ms-font-mono);
  font-size: .74rem;
}
.rc-root .history-chip:hover { background: #fff; border-color: var(--ms-primary); }
.rc-root .history-chip .katex { font-size: .78rem !important; }
.rc-root .h-arrow { color: var(--ms-text-muted); font-family: 'KaTeX_Main', serif; }
.rc-root .h-value { color: var(--ms-text-soft); }

/* Reference table */
.rc-root .ref-table { width: 100%; border-collapse: collapse; font-size: .92rem; }
.rc-root .ref-table thead th {
  background: #f8fafc;
  border-bottom: 1px solid var(--ms-border);
  padding: .7rem .95rem;
  text-align: left;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
}
.rc-root .ref-table thead th:last-child { text-align: right; }
.rc-root .ref-table tbody tr {
  border-bottom: 1px solid var(--ms-border);
  cursor: pointer;
  transition: background .1s;
}
.rc-root .ref-table tbody tr:last-child { border-bottom: none; }
.rc-root .ref-table tbody tr:hover { background: #f8faff; }
.rc-root .ref-table tbody tr.is-current { background: var(--ms-primary-light); }
.rc-root .ref-table tbody tr.is-current td { color: var(--ms-primary-dark); font-weight: 600; }
.rc-root .ref-table tbody tr.is-current .katex * { color: var(--ms-primary-dark) !important; }
.rc-root .ref-table td { padding: .55rem .95rem; }
.rc-root .ref-table td:nth-child(1) { font-family: var(--ms-font-mono); color: var(--ms-text-soft); width: 72px; }
.rc-root .ref-table td:nth-child(2) .katex { font-size: 1.02rem !important; }
.rc-root .ref-table td:nth-child(3) { font-family: var(--ms-font-mono); text-align: right; word-break: break-all; }

/* Laws mode */
.rc-root .rule-list { display: flex; flex-direction: column; gap: .45rem; margin-bottom: 1rem; }
.rc-root .rule-pill {
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: .62rem .85rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  cursor: pointer;
  transition: all .1s;
  text-align: left;
  font-family: inherit;
  width: 100%;
}
.rc-root .rule-pill:hover { background: var(--ms-primary-light); border-color: var(--ms-primary); }
.rc-root .rule-pill.is-active { background: var(--ms-primary); border-color: var(--ms-primary); }
.rc-root .rule-pill.is-active .rule-name, .rc-root .rule-pill.is-active .rule-formula { color: #fff; }
.rc-root .rule-pill.is-active .rule-formula .katex * { color: #fff !important; }
.rc-root .rule-name {
  font-size: .78rem;
  font-weight: 600;
  color: var(--ms-text);
  min-width: 132px;
}
.rc-root .rule-formula { flex: 1; }
.rc-root .rule-formula .katex { font-size: .92rem !important; }

.rc-root .rule-inputs {
  background: #f8faff;
  border: 1.5px dashed var(--ms-primary);
  border-radius: var(--ms-radius);
  padding: 1rem;
  margin-bottom: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: .6rem;
}

.rc-root .rule-steps {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left: 4px solid var(--ms-primary);
  padding: .95rem 1.12rem;
  margin-top: .78rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
}
.rc-root .rule-steps-label {
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary-dark);
  margin-bottom: .6rem;
}
.rc-root .rule-step {
  display: flex;
  align-items: center;
  gap: .6rem;
  padding: .34rem 0;
}
.rc-root .rule-step-num {
  width: 19px; height: 19px;
  flex-shrink: 0;
  background: var(--ms-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .68rem;
  font-weight: 700;
  font-family: var(--ms-font-mono);
}
.rc-root .rule-step-text { flex: 1; font-size: .82rem; }
.rc-root .rule-step-text .katex { font-size: .95rem !important; }

/* Compare mode */
.rc-root .compare-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: .8rem;
  align-items: center;
  margin-bottom: 1rem;
}
@media (max-width: 720px) {
  .rc-root .compare-inputs { grid-template-columns: 1fr; }
  .rc-root .compare-vs { text-align: center; }
}
.rc-root .compare-side {
  background: #f8faff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: .92rem;
  text-align: center;
}
.rc-root .compare-side-label {
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .55rem;
}
.rc-root .compare-side-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .35rem;
  margin-bottom: .45rem;
}
.rc-root .compare-side-value {
  font-family: var(--ms-font-mono);
  font-size: .78rem;
  color: var(--ms-text-soft);
}
.rc-root .compare-vs {
  font-family: var(--ms-font-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ms-primary);
}
.rc-root .compare-verdict {
  background: linear-gradient(180deg, #fef9e7 0%, #fef3c7 100%);
  border-left: 4px solid var(--ms-warning);
  padding: .92rem 1.08rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
  margin-bottom: .78rem;
}
.rc-root .compare-verdict.equal {
  background: linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%);
  border-left-color: var(--ms-success);
}
.rc-root .compare-verdict-label {
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #854d0e;
  margin-bottom: .32rem;
}
.rc-root .compare-verdict.equal .compare-verdict-label { color: var(--ms-success); }
.rc-root .compare-verdict-text { font-size: .9rem; color: var(--ms-text); }
.rc-root .compare-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(116px,1fr));
  gap: .52rem;
}
.rc-root .compare-stat {
  background: #fff;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .64rem .76rem;
}
.rc-root .compare-stat-label {
  font-size: .62rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: .24rem;
}
.rc-root .compare-stat-value {
  font-family: var(--ms-font-mono);
  font-size: .85rem;
  color: var(--ms-text);
  font-weight: 500;
}

/* Right column — explain */
.rc-root .explain-block { padding: 1.15rem 0; border-bottom: 1px solid var(--ms-border); }
.rc-root .explain-block:first-child { padding-top: 0; }
.rc-root .explain-block:last-child { padding-bottom: 0; border-bottom: none; }
.rc-root .explain-title {
  font-family: var(--ms-font-serif);
  font-size: 1.18rem;
  font-weight: 600;
  margin: 0 0 .65rem;
  color: var(--ms-text);
}
.rc-root .explain-text { font-size: .96rem; color: var(--ms-text-soft); margin: 0 0 .65rem; }
.rc-root .explain-text:last-child { margin-bottom: 0; }
.rc-root .explain-text code {
  font-family: var(--ms-font-mono);
  background: #f1f5f9;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: .88rem;
}
.rc-root .explain-formula {
  background: #f8fafc;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .95rem 1.15rem;
  margin: .65rem 0;
  text-align: center;
}
.rc-root .explain-formula .katex { font-size: 1.22rem !important; }

.rc-root .insight {
  background: linear-gradient(180deg, #fef9e7 0%, #fef3c7 100%);
  border-left: 4px solid var(--ms-warning);
  border-radius: var(--ms-radius);
  padding: .9rem 1.1rem;
  margin: .65rem 0;
}
.rc-root .insight.info {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left-color: var(--ms-primary);
}
.rc-root .insight.danger {
  background: linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%);
  border-left-color: var(--ms-error);
}
.rc-root .insight-title {
  font-weight: 700;
  font-size: .9rem;
  margin-bottom: .38rem;
  color: #854d0e;
}
.rc-root .insight.info .insight-title { color: var(--ms-primary-dark); }
.rc-root .insight.danger .insight-title { color: #7f1d1d; }
.rc-root .insight-body { font-size: .92rem; color: var(--ms-text); margin: 0; }
.rc-root .insight-body .katex { font-size: 1.02rem !important; }

.rc-root [hidden] { display: none !important; }
`;

/* =====================================================================
   COMPONENT
   ===================================================================== */

const KATEX_VERSION = '0.16.9';
const KATEX_CSS_HREF = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css`;
const KATEX_JS_SRC   = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.js`;
const FONTS_HREF = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';

const CHIPS_BY_TYPE = {
  square: ['4','9','16','25','36','49','64','81','100','121','144','169'],
  cube:   ['8','27','64','125','216','343','512','729','1000'],
  custom: ['2','4','8','16','32','64','128','256']
};

export default function RootCalculator({ explanations: explanationsProp } = {}) {
  const explanations = useMemo(
    () => deepMerge(defaultExplanations, explanationsProp || {}),
    [explanationsProp]
  );

  /* Mode */
  const [mode, setMode] = useState('calc');

  /* Calculate state */
  const [rtype, setRtype]     = useState('square');
  const [radicand, setRadicand] = useState('25');
  const [indexStr, setIndexStr] = useState('2');
  const [calcHistory, setCalcHistory] = useState([]);
  const [copiedKey, setCopiedKey] = useState(null);

  /* Laws state */
  const [currentLaw, setCurrentLaw] = useState('product');
  const [lawInputs, setLawInputs] = useState({
    product:       { a: '12', b: '3',   n: '2' },
    quotient:      { a: '50', b: '2',   n: '2' },
    'power-root':  { a: '4',  m: '3',   n: '2' },
    nested:        { a: '64', n: '2',   m: '3' },
    rationalize:   { a: '2',  n: '2' },
    'exp-form':    { a: '8',  n: '3' }
  });

  /* Compare state */
  const [aIdx, setAIdx] = useState('2');
  const [aRad, setARad] = useState('50');
  const [bIdx, setBIdx] = useState('3');
  const [bRad, setBRad] = useState('125');

  /* KaTeX readiness */
  const [katexReady, setKatexReady] = useState(
    typeof window !== 'undefined' && !!window.katex
  );
  const rootRef = useRef(null);

  /* Load KaTeX CSS + JS dynamically */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!document.querySelector(`link[href="${KATEX_CSS_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = KATEX_CSS_HREF;
      document.head.appendChild(link);
    }

    if (!document.querySelector(`link[href="${FONTS_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONTS_HREF;
      document.head.appendChild(link);
    }

    if (window.katex) { setKatexReady(true); return; }

    const existing = document.querySelector(`script[src="${KATEX_JS_SRC}"]`);
    if (existing) {
      const onload = () => setKatexReady(true);
      existing.addEventListener('load', onload);
      const t = setInterval(() => {
        if (window.katex) { setKatexReady(true); clearInterval(t); }
      }, 100);
      return () => { existing.removeEventListener('load', onload); clearInterval(t); };
    }

    const script = document.createElement('script');
    script.src = KATEX_JS_SRC;
    script.async = true;
    script.onload = () => setKatexReady(true);
    document.head.appendChild(script);
  }, []);

  /* Render KaTeX after every render */
  useEffect(() => {
    if (!katexReady) return;
    if (rootRef.current) renderKatexIn(rootRef.current);
  });

  /* =====================================================================
     CALCULATE MODE
     ===================================================================== */

  const activeIndex = useMemo(() => {
    if (rtype === 'square') return 2;
    if (rtype === 'cube')   return 3;
    const n = parseNum(indexStr);
    return Number.isInteger(n) && n >= 2 ? n : 2;
  }, [rtype, indexStr]);

  const calcComputed = useMemo(() => {
    const x = parseNum(radicand);
    const idx = activeIndex;
    if (isNaN(x)) return { status: 'incomplete', x, idx, val: NaN };
    if (x < 0 && idx % 2 === 0) return { status: 'imaginary', x, idx, val: NaN };
    const val = nthRoot(x, idx);
    if (!isFinite(val)) return { status: 'overflow', x, idx, val };
    return { status: 'ok', x, idx, val };
  }, [radicand, activeIndex]);

  const { x: cX, idx: cIdx, val: cVal, status: cStatus } = calcComputed;

  /* Push history */
  const computedRef = useRef(calcComputed);
  useEffect(() => { computedRef.current = calcComputed; }, [calcComputed]);

  const pushHistory = useCallback(() => {
    const c = computedRef.current;
    if (c.status !== 'ok') return;
    setCalcHistory((prev) => {
      const i = prev.findIndex((h) => h.x === c.x && h.idx === c.idx);
      let next = prev;
      if (i !== -1) next = [...prev.slice(0, i), ...prev.slice(i + 1)];
      next = [...next, { x: c.x, idx: c.idx, val: c.val }];
      if (next.length > 8) next = next.slice(next.length - 8);
      return next;
    });
  }, []);

  /* Type pill click */
  const handleTypeClick = useCallback((t) => {
    setRtype(t);
    if (t === 'square') setIndexStr('2');
    else if (t === 'cube') setIndexStr('3');
    else if (parseNum(indexStr) < 2) setIndexStr('4');
    setTimeout(() => pushHistory(), 0);
  }, [indexStr, pushHistory]);

  /* Inline result text */
  const inlineResultText = cStatus === 'ok'
    ? fmt(cVal)
    : cStatus === 'incomplete'
      ? 'enter a value'
      : cStatus === 'imaginary'
        ? 'imaginary'
        : 'undefined';
  const inlineIsPlaceholder = cStatus !== 'ok';

  const eyebrowText = useMemo(() => {
    if (isNaN(cX)) return 'Result';
    if (cIdx === 2) return 'Square root of ' + cX;
    if (cIdx === 3) return 'Cube root of ' + cX;
    return cIdx + 'th root of ' + cX;
  }, [cX, cIdx]);

  /* Primary result HTML */
  let primaryHTML;
  if (cStatus === 'incomplete') {
    primaryHTML = `<span style="color:var(--ms-text-muted);font-style:italic;font-size:1.05rem">Enter a value</span>`;
  } else if (cStatus === 'imaginary') {
    primaryHTML = mathHTML(`\\sqrt${cIdx === 2 ? '' : `[${cIdx}]`}{${cX}} = \\text{imaginary}`);
  } else if (cStatus === 'overflow') {
    primaryHTML = `<span style="color:var(--ms-warning)">Overflow</span>`;
  } else {
    primaryHTML = mathHTML(`\\sqrt${cIdx === 2 ? '' : `[${cIdx}]`}{${cX}} = ${fmt(cVal)}`);
  }

  /* Result forms */
  const resultForms = useMemo(() => {
    const forms = [];
    if (cStatus !== 'ok') {
      forms.push({
        label: 'Status',
        value: cStatus === 'incomplete' ? 'Waiting for input'
             : cStatus === 'imaginary'  ? 'Imaginary (no real root)'
             : 'Overflow'
      });
      return forms;
    }
    const perfect = (Number.isInteger(cX) && cX >= 0) ? isPerfectNthPower(cX, cIdx) : null;
    if (perfect != null) {
      forms.push({ label: 'Exact', value: withCommas(perfect), copy: String(perfect) });
    }
    const decStr = fmt(cVal, { fixed: 6 });
    forms.push({ label: 'Decimal', value: decStr, copy: trimTrailingZeros(decStr) });
    forms.push({ label: 'Scientific', value: fmtSci(cVal), copy: fmtSci(cVal) });

    if (Number.isInteger(cX) && cX > 0) {
      const s = simplifyRadical(cX, cIdx);
      if (s && s.coef > 1 && s.radicand > 1) {
        const latex = s.coef + ' \\sqrt' + (cIdx === 2 ? '' : `[${cIdx}]`) + '{' + s.radicand + '}';
        forms.push({
          label: 'Simplified radical',
          math:  latex,
          copy:  s.coef + '*' + (cIdx === 2 ? 'sqrt' : 'root' + cIdx) + '(' + s.radicand + ')'
        });
      }
    }
    forms.push({
      label: 'Fractional exponent',
      math:  cX + '^{1/' + cIdx + '}',
      copy:  cX + '^(1/' + cIdx + ')'
    });
    return forms;
  }, [cStatus, cX, cIdx, cVal]);

  /* Neighbors */
  const neighbors = useMemo(() => {
    if (isNaN(cX)) return [];
    const offs = [-3,-2,-1,0,1,2,3];
    return offs.map((o) => {
      const xx = cX + o;
      let v;
      if (xx < 0 && cIdx % 2 === 0) v = '—';
      else if (xx === 0) v = '0';
      else {
        const vn = nthRoot(xx, cIdx);
        v = (!isFinite(vn) || isNaN(vn)) ? '—' : fmt(vn, { fixed: 2 });
      }
      return { off: o, xx, val: v };
    });
  }, [cX, cIdx]);

  /* Reference table rows */
  const referenceRows = useMemo(() => {
    if (isNaN(cX)) return [];
    const xInt = Math.round(cX);
    const lo = Math.max(0, xInt - 5);
    const hi = lo + 11;
    const rows = [];
    for (let n = lo; n <= hi; n++) {
      const v = nthRoot(n, cIdx);
      rows.push({ n, val: fmtTable(v), isCurrent: n === xInt });
    }
    return rows;
  }, [cX, cIdx]);

  const referenceTitle = useMemo(() => {
    if (isNaN(cX)) return 'Reference';
    const xInt = Math.round(cX);
    const kind = cIdx === 2 ? 'Square roots' : cIdx === 3 ? 'Cube roots' : cIdx + 'th roots';
    return `${kind} near ${xInt}`;
  }, [cX, cIdx]);

  /* Copy handler */
  const handleCopy = useCallback(async (key, value) => {
    try { await navigator.clipboard.writeText(value); }
    catch (e) {
      try {
        const ta = document.createElement('textarea');
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      } catch (_) {}
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1400);
  }, []);

  const handleReset = useCallback(() => {
    setRtype('square');
    setIndexStr('2');
    setRadicand('25');
  }, []);

  /* Restore from a neighbor / table row / history chip */
  const restoreFromValues = useCallback((x, idx) => {
    if (idx === 2) setRtype('square');
    else if (idx === 3) setRtype('cube');
    else { setRtype('custom'); setIndexStr(String(idx)); }
    setRadicand(String(x));
  }, []);

  /* =====================================================================
     LAWS MODE
     ===================================================================== */

  const updateLawField = useCallback((law, field, value) => {
    setLawInputs((prev) => ({ ...prev, [law]: { ...prev[law], [field]: value } }));
  }, []);

  const lawSteps = useMemo(() => {
    const s = lawInputs[currentLaw];
    const N = (k) => parseNum(s[k]);
    const steps = [];
    const step = (latex) => steps.push(latex);

    if (currentLaw === 'product') {
      const a = N('a'), b = N('b'), n = N('n');
      if ([a, b, n].some(isNaN) || n < 2) step('\\text{Enter values to see the rule applied.}');
      else {
        step(`\\text{Start: } \\sqrt[${n}]{${a}} \\cdot \\sqrt[${n}]{${b}}`);
        step(`\\text{Combine: } \\sqrt[${n}]{${a} \\cdot ${b}} = \\sqrt[${n}]{${a * b}}`);
        const root = nthRoot(a * b, n);
        const perfect = isPerfectNthPower(a * b, n);
        if (perfect != null) step(`\\sqrt[${n}]{${a * b}} = ${perfect}`);
        else step(`\\sqrt[${n}]{${a * b}} \\approx ${fmt(root)}`);
      }
    } else if (currentLaw === 'quotient') {
      const a = N('a'), b = N('b'), n = N('n');
      if ([a, b, n].some(isNaN) || n < 2) step('\\text{Enter values to see the rule applied.}');
      else if (b === 0) step('\\text{Denominator cannot be 0.}');
      else {
        step(`\\text{Start: } \\dfrac{\\sqrt[${n}]{${a}}}{\\sqrt[${n}]{${b}}}`);
        step(`\\text{Combine: } \\sqrt[${n}]{\\dfrac{${a}}{${b}}} = \\sqrt[${n}]{${a / b}}`);
        const root = nthRoot(a / b, n);
        step(`\\sqrt[${n}]{${a / b}} \\approx ${fmt(root)}`);
      }
    } else if (currentLaw === 'power-root') {
      const a = N('a'), m = N('m'), n = N('n');
      if ([a, m, n].some(isNaN) || n < 2) step('\\text{Enter values to see the rule applied.}');
      else {
        step(`\\text{Start: } \\left(\\sqrt[${n}]{${a}}\\right)^{${m}}`);
        step(`\\text{Convert to exponent form: } ${a}^{${m}/${n}}`);
        const v = Math.pow(a, m / n);
        step(`${a}^{${m}/${n}} \\approx ${fmt(v)}`);
      }
    } else if (currentLaw === 'nested') {
      const a = N('a'), m = N('m'), n = N('n');
      if ([a, m, n].some(isNaN) || n < 2 || m < 2) step('\\text{Enter values to see the rule applied.}');
      else {
        step(`\\text{Start: } \\sqrt[${n}]{\\sqrt[${m}]{${a}}}`);
        step(`\\text{Multiply indices: } \\sqrt[${n * m}]{${a}}`);
        const v = nthRoot(a, n * m);
        const perfect = isPerfectNthPower(a, n * m);
        if (perfect != null) step(`\\sqrt[${n * m}]{${a}} = ${perfect}`);
        else step(`\\sqrt[${n * m}]{${a}} \\approx ${fmt(v)}`);
      }
    } else if (currentLaw === 'rationalize') {
      const a = N('a'), n = N('n');
      if ([a, n].some(isNaN) || n < 2 || a <= 0) step('\\text{Enter positive values to see the rule applied.}');
      else {
        step(`\\text{Start: } \\dfrac{1}{\\sqrt[${n}]{${a}}}`);
        if (n === 2) {
          step(`\\text{Multiply by } \\dfrac{\\sqrt{${a}}}{\\sqrt{${a}}}: \\dfrac{\\sqrt{${a}}}{${a}}`);
          step(`\\dfrac{\\sqrt{${a}}}{${a}} \\approx ${fmt(Math.sqrt(a) / a)}`);
        } else {
          step(`\\text{Multiply by } \\dfrac{\\sqrt[${n}]{${a}^{${n - 1}}}}{\\sqrt[${n}]{${a}^{${n - 1}}}}: \\dfrac{\\sqrt[${n}]{${Math.pow(a, n - 1)}}}{${a}}`);
          const v = Math.pow(a, (n - 1) / n) / a;
          step(`\\approx ${fmt(v)}`);
        }
      }
    } else if (currentLaw === 'exp-form') {
      const a = N('a'), n = N('n');
      if ([a, n].some(isNaN) || n < 2) step('\\text{Enter values to see the rule applied.}');
      else {
        step(`\\text{Start: } \\sqrt[${n}]{${a}}`);
        step(`\\text{Equivalent: } ${a}^{1/${n}}`);
        const v = nthRoot(a, n);
        step(`${a}^{1/${n}} \\approx ${fmt(v)}`);
      }
    }
    return steps;
  }, [currentLaw, lawInputs]);

  /* =====================================================================
     COMPARE MODE
     ===================================================================== */

  const compareComputed = useMemo(() => {
    const ai = parseNum(aIdx);
    const ar = parseNum(aRad);
    const bi = parseNum(bIdx);
    const br = parseNum(bRad);
    const va = (isNaN(ai) || isNaN(ar) || ai < 2) ? NaN : nthRoot(ar, ai);
    const vb = (isNaN(bi) || isNaN(br) || bi < 2) ? NaN : nthRoot(br, bi);
    return { ai, ar, bi, br, va, vb };
  }, [aIdx, aRad, bIdx, bRad]);

  const compareVerdict = useMemo(() => {
    const { va, vb } = compareComputed;
    if (!isFinite(va) || !isFinite(vb)) {
      return { kind: '', label: 'Verdict', body: 'Enter valid values for both expressions.' };
    }
    if (Math.abs(va - vb) < 1e-9) {
      return { kind: 'equal', label: 'Verdict', body: `Equal: both expressions evaluate to <strong>${fmt(va)}</strong>.` };
    }
    const ratio = va > vb ? va / vb : vb / va;
    return {
      kind: '',
      label: 'Verdict',
      body: `<strong>${va > vb ? 'A is larger' : 'B is larger'}</strong> &mdash; about <strong>${fmt(ratio, { fixed: 3 })}×</strong> the other.`
    };
  }, [compareComputed]);

  const compareStats = useMemo(() => {
    const { ai, ar, bi, br, va, vb } = compareComputed;
    if (!isFinite(va) || !isFinite(vb)) return null;
    const stats = [
      { label: 'Decimal A', value: fmt(va, { fixed: 6 }) },
      { label: 'Decimal B', value: fmt(vb, { fixed: 6 }) },
      { label: 'Ratio A/B', value: vb !== 0 ? fmt(va / vb, { fixed: 4 }) : '—' },
      { label: 'A − B',     value: fmt(va - vb, { fixed: 4 }) }
    ];
    if (Number.isInteger(ai) && Number.isInteger(bi) && ai !== bi && ai >= 2 && bi >= 2) {
      const L = lcm(ai, bi);
      const eA = L / ai, eB = L / bi;
      const newAr = Math.pow(ar, eA);
      const newBr = Math.pow(br, eB);
      stats.push({ label: 'Common index', value: String(L) });
      stats.push({ label: 'A restated', math: '\\sqrt[' + L + ']{' + newAr + '}' });
      stats.push({ label: 'B restated', math: '\\sqrt[' + L + ']{' + newBr + '}' });
    }
    return stats;
  }, [compareComputed]);

  /* =====================================================================
     EXPLANATION HTML
     ===================================================================== */

  const explainHTML = useMemo(() => {
    if (mode === 'calc') {
      const e = explanations.calculate;
      const blocks = [];

      blocks.push(`
        <div class="explain-block">
          <h3 class="explain-title">${e.sectionTitles.whatHappened}</h3>
          ${e.describeOperation(cX, cIdx, cVal, cStatus, HELPERS)}
        </div>
      `);
      const insights = e.detectInsights(cX, cIdx, cVal, cStatus, HELPERS) || [];
      if (insights.length > 0) {
        blocks.push(`
          <div class="explain-block">
            <h3 class="explain-title">${e.sectionTitles.worthKnowing}</h3>
            ${insights.map((ins) => `
              <div class="insight ${ins.kind || ''}">
                <div class="insight-title">${ins.title}</div>
                <div class="insight-body">${ins.body}</div>
              </div>
            `).join('')}
          </div>
        `);
      }
      blocks.push(`
        <div class="explain-block">
          <h3 class="explain-title">${e.sectionTitles.concept}</h3>
          ${e.conceptExplanation(cIdx, HELPERS)}
        </div>
      `);
      return blocks.join('');
    }

    if (mode === 'laws') {
      const e = explanations.laws;
      const d = e.descriptions[currentLaw];
      const cm = e.commonMistakes[currentLaw];
      if (!d) return '';
      return `
        <div class="explain-block">
          <h3 class="explain-title">${d.title}</h3>
          <p class="explain-text">${d.intuition}</p>
        </div>
        <div class="explain-block">
          <h3 class="explain-title">Why it works</h3>
          <p class="explain-text">${d.why}</p>
          <div class="explain-formula">${mathHTML(d.example)}</div>
        </div>
        <div class="explain-block">
          <h3 class="explain-title">Common mistake</h3>
          <div class="insight danger">
            <div class="insight-title">${cm.title}</div>
            <div class="insight-body">${cm.body}</div>
          </div>
        </div>
      `;
    }

    if (mode === 'compare') {
      const e = explanations.compare;
      const { ai, ar, bi, br, va, vb } = compareComputed;
      const blocks = [];

      blocks.push(`
        <div class="explain-block">
          <h3 class="explain-title">${e.intro.title}</h3>
          <p class="explain-text">${e.intro.body}</p>
        </div>
      `);

      if (Number.isInteger(ai) && Number.isInteger(bi) && ai === bi && !isNaN(ar) && !isNaN(br)) {
        const sb = e.sameIndex(ai, ar, br, HELPERS);
        blocks.push(`
          <div class="explain-block">
            <h3 class="explain-title">${sb.title}</h3>
            <p class="explain-text">${sb.body}</p>
            <div class="explain-formula">${mathHTML(sb.formula)}</div>
          </div>
        `);
      } else if (Number.isInteger(ai) && Number.isInteger(bi) && ai !== bi && !isNaN(ar) && !isNaN(br) && ar > 0 && br > 0) {
        const di = e.diffIndices(ai, ar, bi, br, va, vb, HELPERS);
        const formulas = (di.formulas || []).map((f) => `<div class="explain-formula">${mathHTML(f)}</div>`).join('');
        blocks.push(`
          <div class="explain-block">
            <h3 class="explain-title">${di.title}</h3>
            <p class="explain-text">${di.intro}</p>
            ${formulas}
            <p class="explain-text">${di.footer}</p>
          </div>
        `);
      }

      if (isFinite(va) && isFinite(vb)) {
        const sz = e.sizeOfDifference(va, vb, HELPERS);
        blocks.push(`
          <div class="explain-block">
            <h3 class="explain-title">${sz.title}</h3>
            <p class="explain-text">${sz.body}</p>
          </div>
        `);
      }

      return blocks.join('');
    }

    return '';
  }, [mode, cX, cIdx, cVal, cStatus, currentLaw, compareComputed, explanations]);

  /* =====================================================================
     LAW INPUT RENDERERS
     ===================================================================== */

  const renderLawInputs = () => {
    const s = lawInputs[currentLaw];
    const setF = (f) => (e) => updateLawField(currentLaw, f, e.target.value);
    const numIn = (key, cls = 'law-num') => (
      <input className={`slot-input ${cls}`} value={s[key]} onChange={setF(key)} inputMode="decimal" />
    );
    const idxIn = (key) => (
      <input className="slot-input cmp-idx" value={s[key]} onChange={setF(key)} inputMode="numeric" />
    );

    if (currentLaw === 'product') {
      return (
        <>
          <span className="radical">
            <span className="radical-idx">{idxIn('n')}</span>
            <span className="radical-sign">√</span>
            <span className="radical-body">{numIn('a')}</span>
          </span>
          <span style={{ fontFamily: "'KaTeX_Main'", fontSize: '1.4rem', margin: '0 .2rem' }}>·</span>
          <span className="radical">
            <span className="radical-sign">√</span>
            <span className="radical-body">{numIn('b')}</span>
          </span>
        </>
      );
    }
    if (currentLaw === 'quotient') {
      return (
        <>
          <span className="radical">
            <span className="radical-idx">{idxIn('n')}</span>
            <span className="radical-sign">√</span>
            <span className="radical-body">{numIn('a')}</span>
          </span>
          <span style={{ fontFamily: "'KaTeX_Main'", fontSize: '1.4rem', margin: '0 .2rem' }}>÷</span>
          <span className="radical">
            <span className="radical-sign">√</span>
            <span className="radical-body">{numIn('b')}</span>
          </span>
        </>
      );
    }
    if (currentLaw === 'power-root') {
      return (
        <>
          <span style={{ fontFamily: "'KaTeX_Main'", fontSize: '1.5rem' }}>(</span>
          <span className="radical">
            <span className="radical-idx">{idxIn('n')}</span>
            <span className="radical-sign">√</span>
            <span className="radical-body">{numIn('a')}</span>
          </span>
          <span style={{ fontFamily: "'KaTeX_Main'", fontSize: '1.5rem' }}>)</span>
          <input className="slot-input cmp-idx" value={s['m']} onChange={setF('m')} inputMode="numeric" style={{ marginTop: '-12px' }} />
        </>
      );
    }
    if (currentLaw === 'nested') {
      return (
        <span className="radical">
          <span className="radical-idx">{idxIn('n')}</span>
          <span className="radical-sign">√</span>
          <span className="radical-body">
            <span className="radical">
              <span className="radical-idx">{idxIn('m')}</span>
              <span className="radical-sign">√</span>
              <span className="radical-body">{numIn('a')}</span>
            </span>
          </span>
        </span>
      );
    }
    if (currentLaw === 'rationalize') {
      return (
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ padding: '.4rem .5rem', borderBottom: '2px solid var(--ms-text)', fontFamily: "'KaTeX_Main'", fontSize: '1.4rem', minWidth: '120px', textAlign: 'center' }}>1</span>
          <span style={{ padding: '.4rem .5rem', minWidth: '120px', textAlign: 'center' }}>
            <span className="radical">
              <span className="radical-idx">{idxIn('n')}</span>
              <span className="radical-sign">√</span>
              <span className="radical-body">{numIn('a')}</span>
            </span>
          </span>
        </span>
      );
    }
    if (currentLaw === 'exp-form') {
      return (
        <span className="radical">
          <span className="radical-idx">{idxIn('n')}</span>
          <span className="radical-sign">√</span>
          <span className="radical-body">{numIn('a')}</span>
        </span>
      );
    }
    return null;
  };

  /* =====================================================================
     JSX
     ===================================================================== */

  const showCustomIndexInput = rtype === 'custom';

  return (
    <div className="rc-root" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="page">

        <div className="mode-tabs">
          <button
            className={`mode-tab ${mode === 'calc' ? 'is-active' : ''}`}
            onClick={() => setMode('calc')}
          >Calculate</button>
          <button
            className={`mode-tab ${mode === 'laws' ? 'is-active' : ''}`}
            onClick={() => setMode('laws')}
          >Laws</button>
          <button
            className={`mode-tab ${mode === 'compare' ? 'is-active' : ''}`}
            onClick={() => setMode('compare')}
          >Compare</button>
        </div>

        <div className="main-grid">

          {/* LEFT COLUMN */}
          <div className="left-col">

            {/* ===== CALCULATE ===== */}
            <div className={`mode-panel ${mode === 'calc' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Compute a root</div>
                <div className="card-body">

                  <div className="type-row">
                    <div className="type-label">Root type</div>
                    <div className="type-pills">
                      <button
                        className={`type-pill ${rtype === 'square' ? 'is-active' : ''}`}
                        onClick={() => handleTypeClick('square')}
                      >Square</button>
                      <button
                        className={`type-pill ${rtype === 'cube' ? 'is-active' : ''}`}
                        onClick={() => handleTypeClick('cube')}
                      >Cube</button>
                      <button
                        className={`type-pill ${rtype === 'custom' ? 'is-active' : ''}`}
                        onClick={() => handleTypeClick('custom')}
                      >Custom</button>
                    </div>
                  </div>

                  <div className="chips-row">
                    <div className="chips-list">
                      {(CHIPS_BY_TYPE[rtype] || []).map((v) => (
                        <button
                          key={v}
                          className={`chip ${String(parseNum(radicand)) === v ? 'is-active' : ''}`}
                          onClick={() => { setRadicand(v); setTimeout(() => pushHistory(), 0); }}
                        >{v}</button>
                      ))}
                    </div>
                  </div>

                  <div className="expression">
                    <span className="radical">
                      {showCustomIndexInput && (
                        <span className="radical-idx">
                          <input
                            className="slot-input idx"
                            value={indexStr}
                            onChange={(e) => setIndexStr(e.target.value)}
                            inputMode="numeric"
                          />
                        </span>
                      )}
                      <span className="radical-sign lg">√</span>
                      <span className="radical-body">
                        <input
                          className="slot-input rad"
                          value={radicand}
                          onChange={(e) => setRadicand(e.target.value)}
                          inputMode="decimal"
                        />
                      </span>
                    </span>
                    <span className="expr-eq">=</span>
                    <span className={`result-inline ${inlineIsPlaceholder ? 'placeholder' : ''}`}>
                      {inlineResultText}
                    </span>
                  </div>

                  <div className="actions">
                    <button className="btn btn-primary"   onClick={pushHistory}>Calculate</button>
                    <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
                  </div>

                </div>
              </section>

              <section className="card">
                <div className="card-header">Result</div>
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="result">
                    <div className="result-eyebrow">{eyebrowText}</div>
                    <div
                      className="result-primary"
                      dangerouslySetInnerHTML={{ __html: primaryHTML }}
                    />

                    <div className="result-forms">
                      {resultForms.map((f, i) => {
                        const key = `form-${i}`;
                        const isCopied = copiedKey === key;
                        const copyVal = f.copy != null ? f.copy : (f.value || '');
                        return (
                          <div className="result-form" key={key}>
                            <button
                              className={`result-form-copy ${isCopied ? 'is-copied' : ''}`}
                              type="button"
                              title="Copy"
                              aria-label={`Copy ${f.label}`}
                              onClick={() => handleCopy(key, copyVal)}
                              dangerouslySetInnerHTML={{ __html: isCopied ? CHECK_ICON : COPY_ICON }}
                            />
                            <div className="result-form-label">{f.label}</div>
                            {f.math
                              ? <div className="result-form-value" dangerouslySetInnerHTML={{ __html: mathHTML(f.math) }} />
                              : <div className="result-form-value">{f.value}</div>}
                          </div>
                        );
                      })}
                    </div>

                    <div className="neighbors">
                      <div className="neighbors-label">Neighboring roots (click to set)</div>
                      <div className="neighbors-grid">
                        {neighbors.map((nb) => {
                          const idxPart = cIdx === 2 ? '' : `[${cIdx}]`;
                          return (
                            <div
                              key={nb.off}
                              className={`neighbor ${nb.off === 0 ? 'is-current' : ''}`}
                              onClick={() => { restoreFromValues(nb.xx, cIdx); setTimeout(() => pushHistory(), 0); }}
                            >
                              <div
                                className="neighbor-label"
                                dangerouslySetInnerHTML={{ __html: mathHTML('\\sqrt' + idxPart + '{' + nb.xx + '}') }}
                              />
                              <div className="neighbor-value">{nb.val}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="history-strip" hidden={calcHistory.length === 0}>
                      <div className="history-label">Recent</div>
                      <div className="history-chips">
                        {[...calcHistory].reverse().map((h, i) => {
                          const idxPart = h.idx === 2 ? '' : `[${h.idx}]`;
                          return (
                            <div
                              key={`${h.x}-${h.idx}-${i}`}
                              className="history-chip"
                              onClick={() => restoreFromValues(h.x, h.idx)}
                            >
                              <span dangerouslySetInnerHTML={{ __html: mathHTML('\\sqrt' + idxPart + '{' + h.x + '}') }} />
                              <span className="h-arrow">=</span>
                              <span className="h-value">{fmt(h.val)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* ===== LAWS ===== */}
            <div className={`mode-panel ${mode === 'laws' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Apply a radical law</div>
                <div className="card-body">

                  <div className="rule-list">
                    {explanations.laws.list.map((law) => (
                      <button
                        key={law.id}
                        className={`rule-pill ${currentLaw === law.id ? 'is-active' : ''}`}
                        onClick={() => setCurrentLaw(law.id)}
                      >
                        <span className="rule-name">{law.name}</span>
                        <span className="rule-formula" data-math={law.formula} />
                      </button>
                    ))}
                  </div>

                  <div className="rule-inputs">
                    {renderLawInputs()}
                  </div>

                  <div className="rule-steps">
                    <div className="rule-steps-label">Step-by-step</div>
                    {lawSteps.map((s, i) => (
                      <div className="rule-step" key={i}>
                        <div className="rule-step-num">{i + 1}</div>
                        <div className="rule-step-text">
                          <span data-math={s} />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </section>
            </div>

            {/* ===== COMPARE ===== */}
            <div className={`mode-panel ${mode === 'compare' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Compare two radicals</div>
                <div className="card-body">

                  <div className="compare-inputs">
                    <div className="compare-side">
                      <div className="compare-side-label">Expression A</div>
                      <div className="compare-side-inputs">
                        <span className="radical">
                          <span className="radical-idx">
                            <input
                              className="slot-input cmp-idx"
                              value={aIdx}
                              onChange={(e) => setAIdx(e.target.value)}
                              inputMode="numeric"
                            />
                          </span>
                          <span className="radical-sign">√</span>
                          <span className="radical-body">
                            <input
                              className="slot-input cmp-rad"
                              value={aRad}
                              onChange={(e) => setARad(e.target.value)}
                              inputMode="decimal"
                            />
                          </span>
                        </span>
                      </div>
                      <div className="compare-side-value">
                        {isFinite(compareComputed.va) ? '= ' + fmt(compareComputed.va) : '= —'}
                      </div>
                    </div>

                    <div className="compare-vs">vs</div>

                    <div className="compare-side">
                      <div className="compare-side-label">Expression B</div>
                      <div className="compare-side-inputs">
                        <span className="radical">
                          <span className="radical-idx">
                            <input
                              className="slot-input cmp-idx"
                              value={bIdx}
                              onChange={(e) => setBIdx(e.target.value)}
                              inputMode="numeric"
                            />
                          </span>
                          <span className="radical-sign">√</span>
                          <span className="radical-body">
                            <input
                              className="slot-input cmp-rad"
                              value={bRad}
                              onChange={(e) => setBRad(e.target.value)}
                              inputMode="decimal"
                            />
                          </span>
                        </span>
                      </div>
                      <div className="compare-side-value">
                        {isFinite(compareComputed.vb) ? '= ' + fmt(compareComputed.vb) : '= —'}
                      </div>
                    </div>
                  </div>

                  <div className={`compare-verdict ${compareVerdict.kind}`}>
                    <div className="compare-verdict-label">{compareVerdict.label}</div>
                    <div
                      className="compare-verdict-text"
                      dangerouslySetInnerHTML={{ __html: compareVerdict.body }}
                    />
                  </div>

                  {compareStats && (
                    <div className="compare-stats">
                      {compareStats.map((st, i) => (
                        <div className="compare-stat" key={i}>
                          <div className="compare-stat-label">{st.label}</div>
                          {st.math
                            ? <div className="compare-stat-value" dangerouslySetInnerHTML={{ __html: mathHTML(st.math) }} />
                            : <div className="compare-stat-value">{st.value}</div>}
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </section>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="right-col">
            <section className="card">
              <div className="card-header">How this works</div>
              <div
                className="card-body"
                dangerouslySetInnerHTML={{ __html: explainHTML }}
              />
            </section>

            {mode === 'calc' && !isNaN(cX) && (
              <section className="card">
                <div className="card-header">{referenceTitle}</div>
                <div className="card-body" style={{ padding: 0 }}>
                  <table className="ref-table">
                    <thead>
                      <tr><th>n</th><th>Expression</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                      {referenceRows.map((row) => {
                        const idxPart = cIdx === 2 ? '' : `[${cIdx}]`;
                        return (
                          <tr
                            key={row.n}
                            className={row.isCurrent ? 'is-current' : ''}
                            onClick={() => { restoreFromValues(row.n, cIdx); setTimeout(() => pushHistory(), 0); }}
                          >
                            <td>{row.n}</td>
                            <td><span data-math={`\\sqrt${idxPart}{${row.n}}`} /></td>
                            <td>{row.val}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}