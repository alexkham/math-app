
// 'use client'
// import React, { useState } from 'react';
// import Decimal from 'decimal.js';
// import styles from './Arithmetics.module.css';
// import ExplanationDetails from '@/app/components/ExplanationDetails';

// function LogarithmCalculator({ explanations, detailInstructions }) {
//   const [value, setValue] = useState('');
//   const [base, setBase] = useState('2');
//   const [result, setResult] = useState('');
//   const [standard, setStandard] = useState(true);
//   const [activeTooltip, setActiveTooltip] = useState(null);
//   const [error, setError] = useState('');

//   const handleChangeValue = (event) => {
//     setValue(event.target.value);
//     setError('');
//   };

//   const handleChangeBase = (event) => {
//     setBase(event.target.value);
//     setError('');
//   };

//   const toggleBaseInput = (event) => {
//     setStandard(event.target.value === 'standard');
//     if (event.target.value === 'standard') {
//       setBase('2');
//     } else {
//       setBase('');
//     }
//     setError('');
//   };

//   const calculateLogarithm = () => {
//     if (!/^-?\d*\.?\d*$/.test(value) || !/^\d*\.?\d*$/.test(base)) {
//       setError('Warning: Input contains invalid characters');
//       return;
//     }

//     const numericalValue = parseFloat(value);
//     const numericalBase = parseFloat(base);
  
//     if (numericalValue <= 0 || numericalBase <= 0 || isNaN(numericalValue) || isNaN(numericalBase)) {
//       setError('Error: Both value and base must be positive numbers');
//       return;
//     }

//     try {
//       const decimalValue = new Decimal(numericalValue);
//       const decimalBase = new Decimal(numericalBase);
//       const logResult = decimalValue.log().div(decimalBase.log());
//       setResult(logResult.toFixed(4));
//       setError('');
//     } catch (error) {
//       setError('Error: Calculation failed');
//     }
//   };

//   const resetAll = () => {
//     setValue('');
//     setBase('2');
//     setStandard(true);
//     setResult('');
//     setError('');
//   };

//   const showTooltip = (tooltipId) => {
//     setActiveTooltip(tooltipId);
//   };

//   const hideTooltip = () => {
//     setActiveTooltip(null);
//   };

//   return (
//     <div className={styles.pageLayout}>
//       <ExplanationDetails 
//         title="How to use Logarithm Calculator" 
//         instructions={detailInstructions}
//       />
//       <div className={styles.container}>
//         <div className={styles.baseSelection}>
//           <label>Choose Base</label>
//           <div className={styles.radio_container}>
//             <input 
//               type="radio" 
//               checked={standard} 
//               value="standard" 
//               onChange={toggleBaseInput} 
//               id="standard"
//             />
//             <label htmlFor="standard">Standard</label>
//             <input 
//               type="radio" 
//               checked={!standard} 
//               value="custom" 
//               onChange={toggleBaseInput} 
//               id="custom"
//             />
//             <label htmlFor="custom">Custom</label>
//           </div>
//         </div>
//         <div className={styles.calculatorBodyWrapper}>
//           <div className={styles.calculatorBody}>
//             <table className={styles.calcTable}>
//               <tbody>
//                 <tr>
//                   <td style={{width:'80px'}}><span className={styles.logSymbol}>log</span></td>
//                   <td style={{width:'80px'}}></td>
//                   <td>
//                     <div className={styles.inputWrapper}>
//                       <input  
//                         className={`${styles.valueInput} ${error ? styles.inputError : ''}`}
//                         type="text" 
//                         value={value} 
//                         onChange={handleChangeValue} 
//                         placeholder="Enter number"
//                       />
//                       <span 
//                         className={styles.tooltipTrigger} 
//                         onMouseEnter={() => showTooltip('value')}
//                         onMouseLeave={hideTooltip}
//                       >
//                         ?
//                         {activeTooltip === 'value' && (
//                           <span className={styles.tooltip}>
//                             Enter the value to calculate the logarithm of
//                           </span>
//                         )}
//                       </span>
//                     </div>
//                   </td>
//                   <td className={styles.resultCell}>= {result}</td>
//                 </tr>
//                 <tr>
//                   <td></td>
//                   <td className={styles.baseCol} style={{minWidth:'150px'}}>
//                     <div className={styles.inputWrapper} style={{minWidth:'150px'}}>
//                       {standard ? (
//                         <select 
//                           className={`${styles.selectBase} ${error ? styles.inputError : ''}`}
//                           value={base} 
//                           onChange={handleChangeBase}
//                         >
//                           <option value="2">2</option>
//                           <option value={Math.E.toFixed(4)}>e</option>
//                           <option value="10">10</option>
//                         </select>
//                       ) : (
//                         <input
//                           className={`${styles.logBase} ${error ? styles.inputError : ''}`}
//                           type='text'
//                           value={base}
//                           onChange={handleChangeBase}
//                           placeholder="Enter base"
//                         />
//                       )}
//                       <span 
//                         className={styles.tooltipTrigger}
//                         onMouseEnter={() => showTooltip('base')}
//                         onMouseLeave={hideTooltip}
//                       >
//                         ?
//                         {activeTooltip === 'base' && (
//                           <span className={styles.tooltip}>
//                             Enter the base of the logarithm
//                           </span>
//                         )}
//                       </span>
//                     </div>
//                   </td>
//                   <td></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         {error && <div className={styles.errorMessage}>{error}</div>}
//         <div className={styles.buttonContainer}>
//           <button 
//             onClick={calculateLogarithm}
//             className={styles.calculateButton}
//           >
//             Calculate
//           </button>
//           <button 
//             onClick={resetAll}
//             className={styles.resetButton}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
      
//       {explanations && explanations[standard ? 'standard' : 'custom'] && (
//         <div className={styles.explanationContainer}>
//           <div className={styles.explanationContent}>
//             <p className={styles.explanationText}>
//               {explanations[standard ? 'standard' : 'custom'].text}
//             </p>
//             {explanations[standard ? 'standard' : 'custom'].links && (
//               <div className={styles.explanationLinks}>
//                 <p className={styles.linksTitle}>Learn more:</p>
//                 <ul className={styles.linksList}>
//                   {explanations[standard ? 'standard' : 'custom'].links.map((link, index) => (
//                     <li key={index}>
//                       <a href={link.link}  rel="noopener noreferrer" className={styles.explanationLink}>
//                       {/* Use  target="_blank" for external links */}
//                         {link.title}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//              {explanations[standard ? 'standard' : 'custom'].externalLinks && (
//               <div className={styles.explanationLinks}>
//                 <p className={styles.linksTitle}>Learn more:</p>
//                 <ul className={styles.linksList}>
//                   {explanations[standard ? 'standard' : 'custom'].externalLinks.map((link, index) => (
//                     <li key={index}>
//                       <a href={link.link} target="_blank" rel="noopener noreferrer" className={styles.explanationLink}>
//                       {/* Use  target="_blank" for external links */}
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

// export default LogarithmCalculator;




'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import defaultExplanations from './logarithmCalculatorExplanations';

/* =====================================================================
   Utilities (module scope)
   ===================================================================== */

function parseNum(s) {
  if (s === '' || s === '-' || s === '.' || s == null) return NaN;
  const n = parseFloat(s);
  return isNaN(n) ? NaN : n;
}

function fmt(n, fixed) {
  if (!isFinite(n)) return n > 0 ? '∞' : '-∞';
  if (isNaN(n)) return '—';
  const abs = Math.abs(n);
  if (abs !== 0 && (abs >= 1e10 || abs < 1e-4)) return n.toExponential(4);
  if (Number.isInteger(n) && abs < 1e15) return String(n);
  return n.toFixed(fixed != null ? fixed : 4);
}

function trimZeros(s) {
  if (typeof s !== 'string' || !s.includes('.')) return s;
  return s.replace(/\.?0+$/, '');
}

function fmtTable(v) {
  if (!isFinite(v)) return v > 0 ? '∞' : '-∞';
  if (isNaN(v)) return '—';
  const abs = Math.abs(v);
  if (abs !== 0 && (abs >= 1e10 || abs < 1e-4)) return v.toExponential(3);
  if (Number.isInteger(v) && abs < 1e15) return String(v);
  return trimZeros(v.toFixed(6));
}

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function mathHTML(latex) {
  return `<span data-math="${escAttr(latex)}"></span>`;
}

function logb(x, b) {
  if (!isFinite(x) || !isFinite(b) || x <= 0 || b <= 0 || b === 1) return NaN;
  return Math.log(x) / Math.log(b);
}

function isPerfectLog(x, b) {
  const v = logb(x, b);
  if (!isFinite(v)) return null;
  const r = Math.round(v);
  if (Math.abs(v - r) < 1e-10) return r;
  return null;
}

function logLatex(btype, baseValue, argStr) {
  if (btype === 'ln') return '\\ln\\left(' + argStr + '\\right)';
  if (btype === 'log2') return '\\log_{2}\\left(' + argStr + '\\right)';
  if (btype === 'log10') return '\\log_{10}\\left(' + argStr + '\\right)';
  return '\\log_{' + baseValue + '}\\left(' + argStr + '\\right)';
}

function baseLatex(btype, customBaseVal) {
  if (btype === 'ln') return 'e';
  if (btype === 'log2') return '2';
  if (btype === 'log10') return '10';
  return customBaseVal;
}

function baseTitle(btype, customBaseVal) {
  if (btype === 'ln') return 'Natural log of';
  if (btype === 'log2') return 'log base 2 of';
  if (btype === 'log10') return 'log base 10 of';
  return 'log base ' + customBaseVal + ' of';
}

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
  fmt, fmtTable, trimZeros, logb, isPerfectLog, logLatex, baseLatex, baseTitle
};

const COPY_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const CHECK_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

/* =====================================================================
   Embedded CSS (scoped under .lc-root)
   ===================================================================== */

const STYLES = `
.lc-root :root,
.lc-root {
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

.lc-root, .lc-root * { box-sizing: border-box; }
.lc-root {
  color: var(--ms-text);
  font-family: var(--ms-font-sans);
  font-size: 1rem;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.lc-root .page {
  width: 94%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 1.25rem 0 3rem;
}

/* Mode tabs */
.lc-root .mode-tabs {
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
.lc-root .mode-tab {
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
.lc-root .mode-tab:hover { color: var(--ms-text); }
.lc-root .mode-tab.is-active {
  background: var(--ms-primary);
  color: #fff;
  box-shadow: 0 2px 6px rgba(29,78,216,.25);
}

/* Grid */
.lc-root .main-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}
@media (max-width: 1020px) { .lc-root .main-grid { grid-template-columns: 1fr; } }

/* Cards */
.lc-root .card {
  background: var(--ms-card-bg);
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius-lg);
  box-shadow: var(--ms-shadow);
  margin-bottom: 1rem;
  overflow: hidden;
}
.lc-root .card-header {
  background: var(--ms-primary);
  color: #fff;
  padding: .55rem 1.15rem;
  font-family: var(--ms-font-serif);
  font-weight: 600;
  font-size: .92rem;
}
.lc-root .left-col .card-body { padding: 1.1rem 1.3rem; }
.lc-root .right-col .card-body { padding: 1.3rem 1.5rem; }

/* Mode panels */
.lc-root .mode-panel { display: none; }
.lc-root .mode-panel.is-active { display: block; }

/* Type pills */
.lc-root .type-row {
  display: flex;
  align-items: center;
  gap: .9rem;
  margin-bottom: .8rem;
  flex-wrap: wrap;
}
.lc-root .type-label {
  font-size: .78rem;
  font-weight: 600;
  color: var(--ms-text-soft);
  flex-shrink: 0;
}
.lc-root .type-pills {
  display: flex;
  gap: .45rem;
  flex-wrap: wrap;
}
.lc-root .type-pill {
  font-family: inherit;
  font-size: .82rem;
  font-weight: 600;
  padding: .55rem 1rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  min-width: 64px;
}
.lc-root .type-pill .sub { font-size: .75em; vertical-align: sub; line-height: 0; }
.lc-root .type-pill:hover {
  background: var(--ms-primary-light);
  border-color: var(--ms-primary);
}
.lc-root .type-pill.is-active {
  background: var(--ms-primary);
  border-color: var(--ms-primary);
  color: #fff;
}

/* Chips */
.lc-root .chips-row { margin-bottom: 1rem; }
.lc-root .chips-list {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
}
.lc-root .chip {
  font-family: inherit;
  font-size: .78rem;
  font-weight: 500;
  padding: .3rem .6rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  min-width: 38px;
}
.lc-root .chip:hover {
  background: var(--ms-primary-light);
  border-color: var(--ms-primary);
}
.lc-root .chip.is-active {
  background: var(--ms-primary);
  border-color: var(--ms-primary);
  color: #fff;
}

/* Inputs */
.lc-root .slot-input {
  text-align: center;
  font-family: var(--ms-font-mono);
  font-weight: 500;
  background: #fff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  color: var(--ms-text);
  outline: none;
  padding: 0 .4rem;
  vertical-align: middle;
}
.lc-root .slot-input:focus {
  border-color: var(--ms-primary);
  box-shadow: 0 0 0 3px rgba(29,78,216,.14);
}

.lc-root .slot-input.arg     { width: 120px; height: 44px; font-size: 1.35rem; }
.lc-root .slot-input.basein  { width: 56px;  height: 30px; font-size: .9rem; }
.lc-root .slot-input.law-num { width: 60px;  height: 36px; font-size: 1rem; }
.lc-root .slot-input.law-sub { width: 44px;  height: 26px; font-size: .85rem; }
.lc-root .slot-input.cmp-arg { width: 90px;  height: 40px; font-size: 1.1rem; }
.lc-root .slot-input.cmp-base{ width: 50px;  height: 28px; font-size: .85rem; }

/* Input row */
.lc-root .input-row {
  display: flex;
  align-items: center;
  gap: .55rem;
  flex-wrap: wrap;
  margin-bottom: .9rem;
  padding: .6rem .75rem;
  background: #f8faff;
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
}
.lc-root .input-row label {
  font-size: .78rem;
  font-weight: 600;
  color: var(--ms-text-soft);
}

/* Expression display */
.lc-root .expr-display {
  background: linear-gradient(180deg, #eff6ff 0%, #f8faff 100%);
  border: 1.5px solid var(--ms-primary-light);
  border-left: 4px solid var(--ms-primary);
  border-radius: var(--ms-radius);
  padding: 1.1rem 1.3rem;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.lc-root .expr-display .katex { font-size: 1.8rem !important; }
.lc-root .expr-display.placeholder {
  color: var(--ms-text-muted);
  font-style: italic;
  font-family: var(--ms-font-sans);
  font-size: 1rem;
}

/* Buttons */
.lc-root .actions { display: flex; gap: .55rem; margin-top: .9rem; }
.lc-root .btn {
  font-family: inherit;
  font-size: .85rem;
  font-weight: 600;
  padding: .65rem 1.4rem;
  border-radius: var(--ms-radius);
  border: 1.5px solid transparent;
  cursor: pointer;
}
.lc-root .btn:active { transform: translateY(1px); }
.lc-root .btn-primary { background: var(--ms-primary); color: #fff; flex: 1; }
.lc-root .btn-primary:hover { background: var(--ms-primary-hover); }
.lc-root .btn-secondary {
  background: #fff;
  color: var(--ms-text-soft);
  border-color: var(--ms-border-strong);
}
.lc-root .btn-secondary:hover { background: #f8fafc; color: var(--ms-text); }

/* Result card */
.lc-root .result {
  padding: 1rem 1.3rem;
  background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
  border-left: 4px solid var(--ms-primary);
}
.lc-root .result-eyebrow {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .35rem;
}
.lc-root .result-primary {
  font-size: 1.6rem;
  color: var(--ms-text);
  margin-bottom: .7rem;
  min-height: 32px;
}
.lc-root .result-primary .katex { font-size: 1.55rem !important; }
.lc-root .result-forms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: .5rem;
  margin-bottom: .85rem;
}
.lc-root .result-form {
  position: relative;
  background: rgba(255,255,255,.8);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: .5rem .7rem;
  padding-right: 1.7rem;
}
.lc-root .result-form-label {
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: .22rem;
}
.lc-root .result-form-value {
  font-family: var(--ms-font-mono);
  font-size: .82rem;
  color: var(--ms-text);
  word-break: break-all;
  min-height: 1.1rem;
}
.lc-root .result-form-value .katex { font-size: .9rem !important; }
.lc-root .result-form-copy {
  position: absolute;
  top: .35rem;
  right: .35rem;
  background: transparent;
  border: none;
  color: var(--ms-text-muted);
  cursor: pointer;
  padding: .25rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
}
.lc-root .result-form-copy:hover { background: rgba(29,78,216,.08); color: var(--ms-primary); }
.lc-root .result-form-copy.is-copied { color: var(--ms-success); background: rgba(13,148,136,.12); }

/* Neighbors & history */
.lc-root .neighbors, .lc-root .history-strip {
  margin-top: .8rem;
  padding-top: .8rem;
  border-top: 1px solid var(--ms-primary-light);
}
.lc-root .history-strip[hidden] { display: none; }
.lc-root .neighbors-label, .lc-root .history-label {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .5rem;
}
.lc-root .neighbors-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: .35rem;
}
.lc-root .neighbor {
  background: rgba(255,255,255,.7);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .5rem .3rem;
  text-align: center;
  cursor: pointer;
}
.lc-root .neighbor:hover { background: #fff; border-color: var(--ms-primary); }
.lc-root .neighbor.is-current { background: var(--ms-primary); border-color: var(--ms-primary); }
.lc-root .neighbor.is-current .katex *,
.lc-root .neighbor.is-current .neighbor-value { color: #fff !important; }
.lc-root .neighbor-label .katex { font-size: .82rem !important; }
.lc-root .neighbor-value {
  font-family: var(--ms-font-mono);
  font-size: .72rem;
  color: var(--ms-text-soft);
  margin-top: .2rem;
}
@media (max-width: 760px) { .lc-root .neighbors-grid { grid-template-columns: repeat(3,1fr); } }

.lc-root .history-chips {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
}
.lc-root .history-chip {
  background: rgba(255,255,255,.8);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .3rem .6rem;
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  cursor: pointer;
  font-family: var(--ms-font-mono);
  font-size: .76rem;
}
.lc-root .history-chip:hover { background: #fff; border-color: var(--ms-primary); }
.lc-root .history-chip .katex { font-size: .82rem !important; }
.lc-root .h-arrow { color: var(--ms-text-muted); }
.lc-root .h-value { color: var(--ms-text-soft); }

/* Reference table */
.lc-root .ref-table { width: 100%; border-collapse: collapse; font-size: .92rem; }
.lc-root .ref-table thead th {
  background: #f8fafc;
  border-bottom: 1px solid var(--ms-border);
  padding: .65rem .95rem;
  text-align: left;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
}
.lc-root .ref-table thead th:last-child { text-align: right; }
.lc-root .ref-table tbody tr {
  border-bottom: 1px solid var(--ms-border);
  cursor: pointer;
}
.lc-root .ref-table tbody tr:last-child { border-bottom: none; }
.lc-root .ref-table tbody tr:hover { background: #f8faff; }
.lc-root .ref-table tbody tr.is-current { background: var(--ms-primary-light); }
.lc-root .ref-table tbody tr.is-current td { color: var(--ms-primary-dark); font-weight: 600; }
.lc-root .ref-table tbody tr.is-current .katex * { color: var(--ms-primary-dark) !important; }
.lc-root .ref-table td { padding: .55rem .95rem; }
.lc-root .ref-table td:nth-child(1) { font-family: var(--ms-font-mono); color: var(--ms-text-soft); width: 60px; }
.lc-root .ref-table td:nth-child(2) .katex { font-size: 1rem !important; }
.lc-root .ref-table td:nth-child(3) { font-family: var(--ms-font-mono); text-align: right; word-break: break-all; }

/* Laws mode */
.lc-root .rule-list { display: flex; flex-direction: column; gap: .45rem; margin-bottom: 1rem; }
.lc-root .rule-pill {
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: .6rem .85rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  width: 100%;
}
.lc-root .rule-pill:hover { background: var(--ms-primary-light); border-color: var(--ms-primary); }
.lc-root .rule-pill.is-active { background: var(--ms-primary); border-color: var(--ms-primary); }
.lc-root .rule-pill.is-active .rule-name { color: #fff; }
.lc-root .rule-pill.is-active .rule-formula .katex * { color: #fff !important; }
.lc-root .rule-name {
  font-size: .8rem;
  font-weight: 600;
  color: var(--ms-text);
  min-width: 140px;
}
.lc-root .rule-formula { flex: 1; }
.lc-root .rule-formula .katex { font-size: .92rem !important; }

.lc-root .rule-inputs {
  background: #f8faff;
  border: 1.5px dashed var(--ms-primary);
  border-radius: var(--ms-radius);
  padding: 1rem;
  margin-bottom: .5rem;
  display: flex;
  flex-wrap: wrap;
  gap: .65rem;
  align-items: center;
  justify-content: center;
}
.lc-root .rule-inputs label {
  font-size: .8rem;
  font-weight: 600;
  color: var(--ms-text-soft);
}

.lc-root .rule-display {
  background: #fff;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .8rem 1rem;
  margin-bottom: .5rem;
  text-align: center;
}
.lc-root .rule-display .katex { font-size: 1.3rem !important; }

.lc-root .rule-steps {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left: 4px solid var(--ms-primary);
  padding: .95rem 1.1rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
}
.lc-root .rule-steps-label {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary-dark);
  margin-bottom: .6rem;
}
.lc-root .rule-step {
  display: flex;
  align-items: center;
  gap: .6rem;
  padding: .35rem 0;
}
.lc-root .rule-step-num {
  width: 20px; height: 20px;
  flex-shrink: 0;
  background: var(--ms-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .7rem;
  font-weight: 700;
  font-family: var(--ms-font-mono);
}
.lc-root .rule-step-text { flex: 1; font-size: .85rem; }
.lc-root .rule-step-text .katex { font-size: 1rem !important; }

/* Compare mode */
.lc-root .compare-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: .8rem;
  align-items: center;
  margin-bottom: 1rem;
}
@media (max-width: 720px) { .lc-root .compare-inputs { grid-template-columns: 1fr; } }
.lc-root .compare-side {
  background: #f8faff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: .9rem;
}
.lc-root .compare-side-label {
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .55rem;
  text-align: center;
}
.lc-root .compare-side-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .35rem;
  flex-wrap: wrap;
  margin-bottom: .4rem;
}
.lc-root .compare-side-row label {
  font-size: .72rem;
  color: var(--ms-text-soft);
  font-weight: 600;
}
.lc-root .compare-side-display {
  background: #fff;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius-sm);
  padding: .5rem;
  text-align: center;
  margin-top: .35rem;
}
.lc-root .compare-side-display .katex { font-size: 1.1rem !important; }
.lc-root .compare-vs {
  font-family: var(--ms-font-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ms-primary);
  text-align: center;
}
.lc-root .compare-verdict {
  background: linear-gradient(180deg, #fef9e7 0%, #fef3c7 100%);
  border-left: 4px solid var(--ms-warning);
  padding: .9rem 1.1rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
  margin-bottom: .75rem;
}
.lc-root .compare-verdict.equal {
  background: linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%);
  border-left-color: var(--ms-success);
}
.lc-root .compare-verdict-label {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #854d0e;
  margin-bottom: .3rem;
}
.lc-root .compare-verdict.equal .compare-verdict-label { color: var(--ms-success); }
.lc-root .compare-verdict-text { font-size: .92rem; color: var(--ms-text); }
.lc-root .compare-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px,1fr));
  gap: .5rem;
}
.lc-root .compare-stat {
  background: #fff;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .6rem .75rem;
}
.lc-root .compare-stat-label {
  font-size: .62rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: .25rem;
}
.lc-root .compare-stat-value {
  font-family: var(--ms-font-mono);
  font-size: .85rem;
  color: var(--ms-text);
}

/* Right column — explain */
.lc-root .explain-block {
  padding: 1.15rem 0;
  border-bottom: 1px solid var(--ms-border);
}
.lc-root .explain-block:first-child { padding-top: 0; }
.lc-root .explain-block:last-child { padding-bottom: 0; border-bottom: none; }
.lc-root .explain-title {
  font-family: var(--ms-font-serif);
  font-size: 1.18rem;
  font-weight: 600;
  margin: 0 0 .6rem;
  color: var(--ms-text);
}
.lc-root .explain-text {
  font-size: .96rem;
  color: var(--ms-text-soft);
  margin: 0 0 .6rem;
}
.lc-root .explain-text:last-child { margin-bottom: 0; }
.lc-root .explain-formula {
  background: #f8fafc;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .95rem 1.15rem;
  margin: .6rem 0;
  text-align: center;
}
.lc-root .explain-formula .katex { font-size: 1.2rem !important; }

.lc-root .insight {
  background: linear-gradient(180deg, #fef9e7 0%, #fef3c7 100%);
  border-left: 4px solid var(--ms-warning);
  border-radius: var(--ms-radius);
  padding: .85rem 1.05rem;
  margin: .6rem 0;
}
.lc-root .insight.info {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left-color: var(--ms-primary);
}
.lc-root .insight.danger {
  background: linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%);
  border-left-color: var(--ms-error);
}
.lc-root .insight-title {
  font-weight: 700;
  font-size: .9rem;
  margin-bottom: .35rem;
  color: #854d0e;
}
.lc-root .insight.info .insight-title { color: var(--ms-primary-dark); }
.lc-root .insight.danger .insight-title { color: #7f1d1d; }
.lc-root .insight-body { font-size: .92rem; color: var(--ms-text); margin: 0; }
.lc-root .insight-body .katex { font-size: 1rem !important; }

.lc-root [hidden] { display: none !important; }
`;

/* =====================================================================
   Constants
   ===================================================================== */

const KATEX_VERSION = '0.16.9';
const KATEX_CSS_HREF = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css`;
const KATEX_JS_SRC   = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.js`;
const FONTS_HREF = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';

const E = Math.E;

const CHIPS_BY_BASE = {
  log2:   [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].map(v => ({ label: String(v), value: v })),
  ln:     [
    { label: '1',  value: 1 },
    { label: 'e',  value: E },
    { label: 'e²', value: E * E },
    { label: 'e³', value: Math.pow(E, 3) },
    { label: '10', value: 10 },
    { label: '100', value: 100 }
  ],
  log10:  [10, 100, 1000, 10000, 100000, 1000000].map(v => ({ label: String(v), value: v })),
  custom: [2, 4, 8, 16, 32, 64, 128, 256].map(v => ({ label: String(v), value: v }))
};

const LAWS = [
  { id: 'product',    name: 'Product rule',     formula: '\\log_b(xy) = \\log_b(x) + \\log_b(y)' },
  { id: 'quotient',   name: 'Quotient rule',    formula: '\\log_b\\!\\left(\\dfrac{x}{y}\\right) = \\log_b(x) - \\log_b(y)' },
  { id: 'power',      name: 'Power rule',       formula: '\\log_b(x^n) = n \\cdot \\log_b(x)' },
  { id: 'changeBase', name: 'Change of base',   formula: '\\log_b(x) = \\dfrac{\\log_a(x)}{\\log_a(b)}' },
  { id: 'identity',   name: 'Log of base',      formula: '\\log_b(b) = 1' },
  { id: 'logOne',     name: 'Log of one',       formula: '\\log_b(1) = 0' },
  { id: 'inverse',    name: 'Inverse pair',     formula: '\\log_b(b^x) = x' }
];

/* =====================================================================
   COMPONENT
   ===================================================================== */

export default function LogarithmCalculator({ explanations: explanationsProp } = {}) {
  const explanations = useMemo(
    () => deepMerge(defaultExplanations, explanationsProp || {}),
    [explanationsProp]
  );

  /* Mode */
  const [mode, setMode] = useState('calc');

  /* Calculate state */
  const [btype, setBtype] = useState('log2');
  const [customBase, setCustomBase] = useState('3');
  const [arg, setArg] = useState('8');
  const [calcHistory, setCalcHistory] = useState([]);
  const [copiedKey, setCopiedKey] = useState(null);

  /* Laws state */
  const [currentLaw, setCurrentLaw] = useState('product');
  const [lawInputs, setLawInputs] = useState({
    product:    { b: '2', x: '4',  y: '8' },
    quotient:   { b: '2', x: '32', y: '4' },
    power:      { b: '2', x: '4',  n: '3' },
    changeBase: { b: '8', x: '64', a: '2' },
    identity:   { b: '5' },
    logOne:     { b: '5' },
    inverse:    { b: '2', x: '5' }
  });

  /* Compare state */
  const [aBase, setABase] = useState('2');
  const [aArg, setAArg]   = useState('64');
  const [bBase, setBBase] = useState('10');
  const [bArg, setBArg]   = useState('1000');

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

  const activeBase = useMemo(() => {
    if (btype === 'log2') return 2;
    if (btype === 'ln') return E;
    if (btype === 'log10') return 10;
    const v = parseNum(customBase);
    return (v > 0 && v !== 1) ? v : NaN;
  }, [btype, customBase]);

  const calcComputed = useMemo(() => {
    const x = parseNum(arg);
    const base = activeBase;
    if (isNaN(x)) return { status: 'incomplete', x: NaN, base, val: NaN };
    if (isNaN(base)) return { status: 'invalid-base', x, base: NaN, val: NaN };
    if (x <= 0) return { status: 'invalid-arg', x, base, val: NaN };
    const val = logb(x, base);
    if (!isFinite(val)) return { status: 'overflow', x, base, val };
    return { status: 'ok', x, base, val };
  }, [arg, activeBase]);

  const { x: cX, base: cBase, val: cVal, status: cStatus } = calcComputed;

  /* Push history */
  const computedRef = useRef(calcComputed);
  useEffect(() => { computedRef.current = calcComputed; }, [calcComputed]);

  const pushHistory = useCallback(() => {
    const c = computedRef.current;
    if (c.status !== 'ok') return;
    setCalcHistory((prev) => {
      const k = (h) => `${h.btype}|${h.base}|${h.x}`;
      const newH = { btype, base: c.base, x: c.x, val: c.val };
      const i = prev.findIndex((h) => k(h) === k(newH));
      let next = prev;
      if (i !== -1) next = [...prev.slice(0, i), ...prev.slice(i + 1)];
      next = [...next, newH];
      if (next.length > 8) next = next.slice(next.length - 8);
      return next;
    });
  }, [btype]);

  /* Type pill click */
  const handleTypeClick = useCallback((t) => {
    setBtype(t);
  }, []);

  /* Chip click */
  const handleChipClick = useCallback((v) => {
    setArg(String(v));
    setTimeout(() => pushHistory(), 0);
  }, [pushHistory]);

  /* Reset */
  const handleReset = useCallback(() => {
    setBtype('log2');
    setArg('8');
    setCustomBase('3');
  }, []);

  /* Restore from history / neighbor / table */
  const restoreFromValues = useCallback((newBtype, newBase, newArg) => {
    setBtype(newBtype);
    if (newBtype === 'custom') setCustomBase(String(newBase));
    setArg(String(newArg));
  }, []);

  /* Eyebrow text */
  const eyebrowText = useMemo(() => {
    if (isNaN(cX) || isNaN(cBase)) return 'Result';
    return baseTitle(btype, fmt(cBase)) + ' ' + fmt(cX);
  }, [cX, cBase, btype]);

  /* Expression display HTML */
  const exprDisplay = useMemo(() => {
    if (cStatus === 'incomplete') return { isPlaceholder: true, html: 'Enter an argument' };
    if (cStatus === 'invalid-arg') return { isPlaceholder: true, html: 'Argument must be greater than 0' };
    if (cStatus === 'invalid-base') return { isPlaceholder: true, html: 'Base must be positive and not equal to 1' };
    if (cStatus === 'overflow') return { isPlaceholder: true, html: 'Overflow' };
    const baseStr = baseLatex(btype, fmt(cBase));
    const perfect = isPerfectLog(cX, cBase);
    const value = perfect != null ? String(perfect) : fmt(cVal);
    return { isPlaceholder: false, html: mathHTML(logLatex(btype, baseStr, fmt(cX)) + ' = ' + value) };
  }, [cStatus, cX, cBase, cVal, btype]);

  /* Primary result HTML */
  const primaryHTML = useMemo(() => {
    if (cStatus !== 'ok') {
      return '<span style="color:var(--ms-text-muted);font-size:1rem">—</span>';
    }
    const baseStr = baseLatex(btype, fmt(cBase));
    const perfect = isPerfectLog(cX, cBase);
    const value = perfect != null ? String(perfect) : fmt(cVal);
    return mathHTML(logLatex(btype, baseStr, fmt(cX)) + ' = ' + value);
  }, [cStatus, cX, cBase, cVal, btype]);

  /* Result forms */
  const resultForms = useMemo(() => {
    const forms = [];
    if (cStatus !== 'ok') {
      forms.push({
        label: 'Status',
        value: cStatus === 'incomplete' ? 'Waiting for input'
             : cStatus === 'invalid-arg' ? 'Argument must be > 0'
             : cStatus === 'invalid-base' ? 'Base must be > 0 and ≠ 1'
             : 'Overflow'
      });
      return forms;
    }
    const baseStr = baseLatex(btype, fmt(cBase));
    const argStr = fmt(cX);
    const perfect = isPerfectLog(cX, cBase);
    const displayResult = perfect != null ? String(perfect) : fmt(cVal);

    if (perfect != null) {
      forms.push({ label: 'Exact', value: String(perfect), copy: String(perfect) });
    }
    forms.push({ label: 'Decimal', value: fmt(cVal, 6), copy: trimZeros(fmt(cVal, 6)) });
    forms.push({ label: 'Scientific', value: cVal === 0 ? '0' : cVal.toExponential(4), copy: cVal === 0 ? '0' : cVal.toExponential(4) });
    forms.push({
      label: 'As exponent equation',
      math: baseStr + '^{' + displayResult + '} = ' + argStr,
      copy: baseStr + '^' + displayResult + ' = ' + argStr
    });
    if (btype !== 'ln') {
      forms.push({
        label: 'Change of base',
        math: '\\dfrac{\\ln(' + argStr + ')}{\\ln(' + baseStr + ')} = \\dfrac{' + fmt(Math.log(cX)) + '}{' + fmt(Math.log(cBase)) + '}',
        copy: 'ln(' + argStr + ')/ln(' + baseStr + ')'
      });
    }
    return forms;
  }, [cStatus, cX, cBase, cVal, btype]);

  /* Neighbors (geometric) */
  const neighbors = useMemo(() => {
    if (cStatus !== 'ok') return [];
    const offs = [-2, -1, 0, 1, 2];
    return offs.map((o) => {
      const xx = cX * Math.pow(cBase, o);
      const v = xx > 0 ? fmt(logb(xx, cBase), 2) : '—';
      const xxStr = (Math.abs(xx) >= 1e6 || (xx !== 0 && Math.abs(xx) < 1e-3))
        ? xx.toExponential(2)
        : (Number.isInteger(xx) ? String(xx) : xx.toFixed(2));
      return { off: o, xx, xxStr, val: v };
    });
  }, [cStatus, cX, cBase]);

  /* Reference rows */
  const referenceRows = useMemo(() => {
    if (cStatus !== 'ok') return [];
    const cur = Math.round(cVal);
    const rows = [];
    for (let n = -2; n <= 8; n++) {
      const v = Math.pow(cBase, n);
      rows.push({ n, v, isCurrent: n === cur && Math.abs(v - cX) < 1e-6 });
    }
    return rows;
  }, [cStatus, cVal, cBase, cX]);

  const referenceTitle = useMemo(() => {
    if (cStatus !== 'ok') return 'Reference';
    return 'Powers of ' + baseLatex(btype, fmt(cBase));
  }, [cStatus, cBase, btype]);

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

  /* =====================================================================
     LAWS MODE
     ===================================================================== */

  const updateLawField = useCallback((law, field, value) => {
    setLawInputs((prev) => ({ ...prev, [law]: { ...prev[law], [field]: value } }));
  }, []);

  /* Display LaTeX preview of the current law with values plugged in */
  const lawDisplayLatex = useMemo(() => {
    const s = lawInputs[currentLaw];
    const b = parseNum(s.b);
    const x = parseNum(s.x);
    const y = parseNum(s.y);
    const n = parseNum(s.n);
    const bStr = isNaN(b) ? 'b' : String(b);
    const xStr = isNaN(x) ? 'x' : String(x);
    const yStr = isNaN(y) ? 'y' : String(y);
    const nStr = isNaN(n) ? 'n' : String(n);

    if (currentLaw === 'product')    return `\\log_{${bStr}}(${xStr} \\cdot ${yStr})`;
    if (currentLaw === 'quotient')   return `\\log_{${bStr}}\\!\\left(\\dfrac{${xStr}}{${yStr}}\\right)`;
    if (currentLaw === 'power')      return `\\log_{${bStr}}(${xStr}^{${nStr}})`;
    if (currentLaw === 'changeBase') return `\\log_{${bStr}}(${xStr})`;
    if (currentLaw === 'identity')   return `\\log_{${bStr}}(${bStr})`;
    if (currentLaw === 'logOne')     return `\\log_{${bStr}}(1)`;
    if (currentLaw === 'inverse')    return `\\log_{${bStr}}(${bStr}^{${xStr}})`;
    return '';
  }, [currentLaw, lawInputs]);

  /* Computed steps for the current law */
  const lawSteps = useMemo(() => {
    const s = lawInputs[currentLaw];
    const N = (k) => parseNum(s[k]);
    const validBase = (b) => isFinite(b) && b > 0 && b !== 1;
    const steps = [];
    const step = (latex) => steps.push(latex);

    if (currentLaw === 'product') {
      const b = N('b'), x = N('x'), y = N('y');
      if ([b, x, y].some(isNaN) || !validBase(b) || x <= 0 || y <= 0) step('\\text{Enter positive x, y and a valid base.}');
      else {
        step(`\\text{Start: } \\log_{${b}}(${x} \\cdot ${y})`);
        step(`\\text{Compute product: } \\log_{${b}}(${x * y})`);
        step(`\\text{Split (product rule): } \\log_{${b}}(${x}) + \\log_{${b}}(${y})`);
        step(`\\approx ${fmt(logb(x, b))} + ${fmt(logb(y, b))} = ${fmt(logb(x * y, b))}`);
      }
    } else if (currentLaw === 'quotient') {
      const b = N('b'), x = N('x'), y = N('y');
      if ([b, x, y].some(isNaN) || !validBase(b) || x <= 0 || y <= 0) step('\\text{Enter positive x, y and a valid base.}');
      else {
        step(`\\text{Start: } \\log_{${b}}\\!\\left(\\dfrac{${x}}{${y}}\\right)`);
        step(`\\text{Compute quotient: } \\log_{${b}}(${x / y})`);
        step(`\\text{Split (quotient rule): } \\log_{${b}}(${x}) - \\log_{${b}}(${y})`);
        step(`\\approx ${fmt(logb(x, b))} - ${fmt(logb(y, b))} = ${fmt(logb(x / y, b))}`);
      }
    } else if (currentLaw === 'power') {
      const b = N('b'), x = N('x'), n = N('n');
      if ([b, x, n].some(isNaN) || !validBase(b) || x <= 0) step('\\text{Enter a positive x and a valid base.}');
      else {
        step(`\\text{Start: } \\log_{${b}}(${x}^{${n}})`);
        step(`\\text{Pull exponent out: } ${n} \\cdot \\log_{${b}}(${x})`);
        step(`= ${n} \\cdot ${fmt(logb(x, b))} \\approx ${fmt(n * logb(x, b))}`);
      }
    } else if (currentLaw === 'changeBase') {
      const b = N('b'), x = N('x'), a = N('a');
      if ([b, x, a].some(isNaN) || !validBase(b) || !validBase(a) || x <= 0) step('\\text{Enter valid bases and a positive x.}');
      else {
        step(`\\text{Start: } \\log_{${b}}(${x})`);
        step(`\\text{Rewrite via base ${a}: } \\dfrac{\\log_{${a}}(${x})}{\\log_{${a}}(${b})}`);
        step(`\\approx \\dfrac{${fmt(logb(x, a))}}{${fmt(logb(b, a))}} = ${fmt(logb(x, b))}`);
      }
    } else if (currentLaw === 'identity') {
      const b = N('b');
      if (isNaN(b) || !validBase(b)) step('\\text{Enter a valid base.}');
      else {
        step(`\\text{Start: } \\log_{${b}}(${b})`);
        step(`\\text{Definition: } ${b}^y = ${b} \\Rightarrow y = 1`);
        step(`\\log_{${b}}(${b}) = 1`);
      }
    } else if (currentLaw === 'logOne') {
      const b = N('b');
      if (isNaN(b) || !validBase(b)) step('\\text{Enter a valid base.}');
      else {
        step(`\\text{Start: } \\log_{${b}}(1)`);
        step(`\\text{Definition: } ${b}^y = 1 \\Rightarrow y = 0`);
        step(`\\log_{${b}}(1) = 0`);
      }
    } else if (currentLaw === 'inverse') {
      const b = N('b'), x = N('x');
      if ([b, x].some(isNaN) || !validBase(b)) step('\\text{Enter a valid base and x.}');
      else {
        step(`\\text{Start: } \\log_{${b}}(${b}^{${x}})`);
        step(`\\text{Logs and exponents are inverse: } = ${x}`);
      }
    }
    return steps;
  }, [currentLaw, lawInputs]);

  /* =====================================================================
     COMPARE MODE
     ===================================================================== */

  const compareSides = useMemo(() => {
    const sideA = (() => {
      const b = parseNum(aBase), x = parseNum(aArg);
      if (isNaN(b) || isNaN(x) || b <= 0 || b === 1 || x <= 0) return { b, x, val: NaN };
      return { b, x, val: logb(x, b) };
    })();
    const sideB = (() => {
      const b = parseNum(bBase), x = parseNum(bArg);
      if (isNaN(b) || isNaN(x) || b <= 0 || b === 1 || x <= 0) return { b, x, val: NaN };
      return { b, x, val: logb(x, b) };
    })();
    return { a: sideA, b: sideB };
  }, [aBase, aArg, bBase, bArg]);

  const compareVerdict = useMemo(() => {
    const { a, b } = compareSides;
    if (!isFinite(a.val) || !isFinite(b.val)) {
      return { kind: '', body: 'Enter valid values for both expressions.' };
    }
    if (Math.abs(a.val - b.val) < 1e-9) {
      return { kind: 'equal', body: `Equal: both expressions evaluate to <strong>${fmt(a.val)}</strong>.` };
    }
    const diff = Math.abs(a.val - b.val);
    return {
      kind: '',
      body: `<strong>${a.val > b.val ? 'A is larger' : 'B is larger'}</strong> &mdash; difference of <strong>${fmt(diff, 4)}</strong>.`
    };
  }, [compareSides]);

  const compareStats = useMemo(() => {
    const { a, b } = compareSides;
    if (!isFinite(a.val) || !isFinite(b.val)) return null;
    const stats = [
      { label: 'Decimal A', value: fmt(a.val, 6) },
      { label: 'Decimal B', value: fmt(b.val, 6) },
      { label: 'A − B',     value: fmt(a.val - b.val, 4) },
      { label: 'A / B',     value: b.val !== 0 ? fmt(a.val / b.val, 4) : '—' }
    ];
    if (Math.abs(a.b - b.b) < 1e-9 && a.x > 0 && b.x > 0) {
      stats.push({ label: 'A − B as one log', math: `\\log_{${a.b}}\\!\\left(\\dfrac{${a.x}}{${b.x}}\\right)` });
    }
    return stats;
  }, [compareSides]);

  /* =====================================================================
     EXPLANATION HTML
     ===================================================================== */

  const explainHTML = useMemo(() => {
    if (mode === 'calc') {
      const e = explanations.calculate;
      const baseStr = baseLatex(btype, fmt(cBase));
      const blocks = [];

      blocks.push(`
        <div class="explain-block">
          <h3 class="explain-title">${e.sectionTitles.whatHappened}</h3>
          ${e.describeOperation(cX, cBase, btype, cVal, cStatus, HELPERS)}
        </div>
      `);
      const insights = e.detectInsights(cX, cBase, btype, cVal, cStatus, HELPERS) || [];
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
          ${e.conceptExplanation(btype, baseStr, HELPERS)}
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
      const { a, b } = compareSides;
      const blocks = [];

      blocks.push(`
        <div class="explain-block">
          <h3 class="explain-title">${e.intro.title}</h3>
          <p class="explain-text">${e.intro.body}</p>
        </div>
      `);

      if (isFinite(a.val) && isFinite(b.val)) {
        if (Math.abs(a.b - b.b) < 1e-9) {
          const sb = e.sameBase(a, b, HELPERS);
          blocks.push(`
            <div class="explain-block">
              <h3 class="explain-title">${sb.title}</h3>
              <p class="explain-text">${sb.body}</p>
              <div class="explain-formula">${mathHTML(sb.formula)}</div>
              <p class="explain-text">${sb.footer}</p>
            </div>
          `);
        } else if (Math.abs(a.x - b.x) < 1e-9) {
          const sa = e.sameArg(a, b, HELPERS);
          blocks.push(`
            <div class="explain-block">
              <h3 class="explain-title">${sa.title}</h3>
              <p class="explain-text">${sa.body}</p>
              <div class="explain-formula">${mathHTML(sa.formula)}</div>
            </div>
          `);
        } else {
          const di = e.different(a, b, HELPERS);
          const formulas = (di.formulas || []).map((f) => `<div class="explain-formula">${mathHTML(f)}</div>`).join('');
          blocks.push(`
            <div class="explain-block">
              <h3 class="explain-title">${di.title}</h3>
              <p class="explain-text">${di.body}</p>
              ${formulas}
            </div>
          `);
        }
      }

      return blocks.join('');
    }

    return '';
  }, [mode, cX, cBase, cVal, cStatus, btype, currentLaw, compareSides, explanations]);

  /* =====================================================================
     JSX
     ===================================================================== */

  const isCustom = btype === 'custom';
  const argNum = parseNum(arg);
  const chips = CHIPS_BY_BASE[btype] || [];

  return (
    <div className="lc-root" ref={rootRef}>
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
                <div className="card-header">Compute a logarithm</div>
                <div className="card-body">

                  <div className="type-row">
                    <span className="type-label">Base</span>
                    <div className="type-pills">
                      <button
                        className={`type-pill ${btype === 'log2' ? 'is-active' : ''}`}
                        onClick={() => handleTypeClick('log2')}
                      >log<span className="sub">2</span></button>
                      <button
                        className={`type-pill ${btype === 'ln' ? 'is-active' : ''}`}
                        onClick={() => handleTypeClick('ln')}
                      >ln</button>
                      <button
                        className={`type-pill ${btype === 'log10' ? 'is-active' : ''}`}
                        onClick={() => handleTypeClick('log10')}
                      >log<span className="sub">10</span></button>
                      <button
                        className={`type-pill ${btype === 'custom' ? 'is-active' : ''}`}
                        onClick={() => handleTypeClick('custom')}
                      >Custom</button>
                    </div>
                  </div>

                  <div className="chips-row">
                    <div className="chips-list">
                      {chips.map((c, i) => (
                        <button
                          key={i}
                          className={`chip ${!isNaN(argNum) && Math.abs(argNum - c.value) < 1e-6 ? 'is-active' : ''}`}
                          onClick={() => handleChipClick(c.value)}
                        >{c.label}</button>
                      ))}
                    </div>
                  </div>

                  <div className="input-row">
                    {isCustom && (
                      <>
                        <label>Base</label>
                        <input
                          className="slot-input basein"
                          value={customBase}
                          onChange={(e) => setCustomBase(e.target.value)}
                          inputMode="decimal"
                        />
                      </>
                    )}
                    <label>Argument</label>
                    <input
                      className="slot-input arg"
                      value={arg}
                      onChange={(e) => setArg(e.target.value)}
                      inputMode="decimal"
                    />
                  </div>

                  <div className={`expr-display ${exprDisplay.isPlaceholder ? 'placeholder' : ''}`}
                       dangerouslySetInnerHTML={{ __html: exprDisplay.html }} />

                  <div className="actions">
                    <button className="btn btn-primary"   onClick={pushHistory}>Add to history</button>
                    <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
                  </div>

                </div>
              </section>

              <section className="card">
                <div className="card-header">Result</div>
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="result">
                    <div className="result-eyebrow">{eyebrowText}</div>
                    <div className="result-primary" dangerouslySetInnerHTML={{ __html: primaryHTML }} />

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
                      <div className="neighbors-label">Neighboring arguments (geometric, click to set)</div>
                      <div className="neighbors-grid">
                        {neighbors.map((nb) => {
                          const baseStr = baseLatex(btype, fmt(cBase));
                          return (
                            <div
                              key={nb.off}
                              className={`neighbor ${nb.off === 0 ? 'is-current' : ''}`}
                              onClick={() => { setArg(String(nb.xx)); setTimeout(() => pushHistory(), 0); }}
                            >
                              <div
                                className="neighbor-label"
                                dangerouslySetInnerHTML={{ __html: mathHTML(logLatex(btype, baseStr, nb.xxStr)) }}
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
                          const baseStr = baseLatex(h.btype, fmt(h.base));
                          return (
                            <div
                              key={`${h.btype}-${h.base}-${h.x}-${i}`}
                              className="history-chip"
                              onClick={() => restoreFromValues(h.btype, h.base, h.x)}
                            >
                              <span dangerouslySetInnerHTML={{ __html: mathHTML(logLatex(h.btype, baseStr, fmt(h.x))) }} />
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
                <div className="card-header">Apply a logarithm law</div>
                <div className="card-body">

                  <div className="rule-list">
                    {LAWS.map((law) => (
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

                  <div className="rule-display">
                    <span data-math={lawDisplayLatex} />
                  </div>

                  <div className="rule-inputs">
                    {renderLawInputs(currentLaw, lawInputs[currentLaw], updateLawField)}
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
                <div className="card-header">Compare two logarithms</div>
                <div className="card-body">

                  <div className="compare-inputs">
                    <div className="compare-side">
                      <div className="compare-side-label">Expression A</div>
                      <div className="compare-side-row">
                        <label>base</label>
                        <input
                          className="slot-input cmp-base"
                          value={aBase}
                          onChange={(e) => setABase(e.target.value)}
                          inputMode="decimal"
                        />
                        <label>arg</label>
                        <input
                          className="slot-input cmp-arg"
                          value={aArg}
                          onChange={(e) => setAArg(e.target.value)}
                          inputMode="decimal"
                        />
                      </div>
                      <div className="compare-side-display">
                        {isFinite(compareSides.a.val)
                          ? <span dangerouslySetInnerHTML={{ __html: mathHTML(`\\log_{${compareSides.a.b}}(${compareSides.a.x}) = ${fmt(compareSides.a.val)}`) }} />
                          : <span style={{ color: 'var(--ms-text-muted)', fontSize: '.9rem' }}>enter valid values</span>}
                      </div>
                    </div>

                    <div className="compare-vs">vs</div>

                    <div className="compare-side">
                      <div className="compare-side-label">Expression B</div>
                      <div className="compare-side-row">
                        <label>base</label>
                        <input
                          className="slot-input cmp-base"
                          value={bBase}
                          onChange={(e) => setBBase(e.target.value)}
                          inputMode="decimal"
                        />
                        <label>arg</label>
                        <input
                          className="slot-input cmp-arg"
                          value={bArg}
                          onChange={(e) => setBArg(e.target.value)}
                          inputMode="decimal"
                        />
                      </div>
                      <div className="compare-side-display">
                        {isFinite(compareSides.b.val)
                          ? <span dangerouslySetInnerHTML={{ __html: mathHTML(`\\log_{${compareSides.b.b}}(${compareSides.b.x}) = ${fmt(compareSides.b.val)}`) }} />
                          : <span style={{ color: 'var(--ms-text-muted)', fontSize: '.9rem' }}>enter valid values</span>}
                      </div>
                    </div>
                  </div>

                  <div className={`compare-verdict ${compareVerdict.kind}`}>
                    <div className="compare-verdict-label">Verdict</div>
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

            {mode === 'calc' && cStatus === 'ok' && (
              <section className="card">
                <div className="card-header">{referenceTitle}</div>
                <div className="card-body" style={{ padding: 0 }}>
                  <table className="ref-table">
                    <thead>
                      <tr><th>n</th><th>Expression</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                      {referenceRows.map((row) => {
                        const baseStr = baseLatex(btype, fmt(cBase));
                        return (
                          <tr
                            key={row.n}
                            className={row.isCurrent ? 'is-current' : ''}
                            onClick={() => { setArg(String(row.v)); setTimeout(() => pushHistory(), 0); }}
                          >
                            <td>{row.n}</td>
                            <td><span data-math={`${baseStr}^{${row.n}}`} /></td>
                            <td>{fmtTable(row.v)}</td>
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

/* Renderer for law-specific input layouts */
function renderLawInputs(currentLaw, s, updateLawField) {
  const setF = (field) => (e) => updateLawField(currentLaw, field, e.target.value);
  const input = (key, cls = 'law-num') => (
    <input
      className={`slot-input ${cls}`}
      value={s[key]}
      onChange={setF(key)}
      inputMode="decimal"
    />
  );

  if (currentLaw === 'product' || currentLaw === 'quotient') {
    return (
      <>
        <label>base</label>{input('b', 'law-sub')}
        <label>x</label>{input('x')}
        <label>y</label>{input('y')}
      </>
    );
  }
  if (currentLaw === 'power') {
    return (
      <>
        <label>base</label>{input('b', 'law-sub')}
        <label>x</label>{input('x')}
        <label>n</label>{input('n', 'law-sub')}
      </>
    );
  }
  if (currentLaw === 'changeBase') {
    return (
      <>
        <label>old base</label>{input('b', 'law-sub')}
        <label>x</label>{input('x')}
        <label>new base</label>{input('a', 'law-sub')}
      </>
    );
  }
  if (currentLaw === 'identity' || currentLaw === 'logOne') {
    return (
      <>
        <label>base</label>{input('b', 'law-sub')}
      </>
    );
  }
  if (currentLaw === 'inverse') {
    return (
      <>
        <label>base</label>{input('b', 'law-sub')}
        <label>x</label>{input('x')}
      </>
    );
  }
  return null;
}