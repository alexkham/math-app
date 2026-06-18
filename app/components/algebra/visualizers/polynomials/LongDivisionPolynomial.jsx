// 'use client';

// // LongDivisionVisualizer-single.jsx
// // Entire long division visualizer in one file: constants + logic + styles +
// // panels + composer. Polynomial input uses Variant B styling.

// import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// // =====================================================
// //   CONSTANTS
// // =====================================================
// const DIVIDEND_MIN = 2;
// const DIVIDEND_MAX = 7;
// const DIVISOR_MIN = 1;
// const DIVISOR_MAX = 3;

// const MINUS = '\u2212';

// const AUTO_RUN_INTERVAL_MS = 1700;

// const CYCLE_COLORS = [
//   '#4338ca', '#047857', '#be185d', '#7c3aed',
//   '#334155', '#854d0e', '#0f766e',
// ];

// // Class names embedded in dangerouslySetInnerHTML step body content.
// // Kept as literal strings (no prefixing) — matched via descendant selectors
// // scoped under .ldv-step-body in the CSS below.
// const CYCLE_CLASSES = [
//   'ink-indigo', 'ink-emerald', 'ink-rose', 'ink-violet',
//   'ink-slate', 'ink-ochre', 'ink-teal',
// ];

// const PRESETS = [
//   {
//     name: 'x\u00b3 \u2212 6x\u00b2 + 11x \u2212 6 \u00f7 (x \u2212 1)',
//     hint: 'clean: remainder 0',
//     coeffs: [1, -6, 11, -6],
//     divCoeffs: [1, -1],
//   },
//   {
//     name: '2x\u00b3 \u2212 5x\u00b2 + 3x \u2212 4 \u00f7 (x \u2212 2)',
//     hint: 'remainder \u2260 0',
//     coeffs: [2, -5, 3, -4],
//     divCoeffs: [1, -2],
//   },
//   {
//     name: 'x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6 \u00f7 (x + 2)',
//     hint: 'has a zero mid-quotient',
//     coeffs: [1, 2, -5, -6],
//     divCoeffs: [1, 2],
//   },
//   {
//     name: 'x\u2074 \u2212 1 \u00f7 (x\u00b2 \u2212 1)',
//     hint: 'quadratic divisor, clean',
//     coeffs: [1, 0, 0, 0, -1],
//     divCoeffs: [1, 0, -1],
//   },
//   {
//     name: 'x\u2074 + 2x\u00b3 \u2212 7x\u00b2 + 4 \u00f7 (x\u00b2 + x \u2212 2)',
//     hint: 'quadratic divisor, with remainder',
//     coeffs: [1, 2, -7, 0, 4],
//     divCoeffs: [1, 1, -2],
//   },
// ];

// const SVG_LAYOUT = {
//   CELL_W: 66,
//   ROW_H: 26,
//   PAD_T: 22,
//   PAD_R: 18,
//   PAD_L: 12,
//   FONT_MAIN: 14,
//   FONT_QUOTIENT: 15,
//   QUOT_GAP: 9,
// };

// // =====================================================
// //   STYLES (injected via dangerouslySetInnerHTML)
// // =====================================================
// const STYLES = `
// .ldv-wrap {
//   max-width: 1180px;
//   margin: 0 auto;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
//   color: #1e3a5f;
// }
// .ldv-card {
//   background: #fff;
//   border-radius: 14px;
//   padding: 18px 22px;
//   box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
//   margin-bottom: 14px;
// }
// .ldv-card-title {
//   font-size: 0.72rem;
//   color: #94a3b8;
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
//   font-weight: 600;
//   margin-bottom: 10px;
// }

// /* Polynomial input — Variant B */
// .ldv-poly-row {
//   display: flex;
//   align-items: stretch;
//   gap: 16px;
//   flex-wrap: wrap;
//   padding: 4px 0;
// }
// .ldv-module {
//   background: linear-gradient(180deg, #eff6ff, #dbeafe);
//   border: 1px solid #bfdbfe;
//   border-radius: 10px;
//   padding: 12px 18px 12px 22px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   min-width: 140px;
//   position: relative;
// }
// .ldv-module::before {
//   content: '';
//   position: absolute;
//   left: 0; top: 12px; bottom: 12px;
//   width: 3px;
//   background: linear-gradient(180deg, #3b82f6, #2563eb);
//   border-radius: 2px;
// }
// .ldv-module-label {
//   font-size: 0.78rem;
//   color: #1d4ed8;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.14em;
// }
// .ldv-module-stepper-wrap {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4px;
// }
// .ldv-module-stepper-hint {
//   font-size: 0.62rem;
//   color: #64748b;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
// }
// .ldv-stepper {
//   display: inline-flex;
//   background: #fff;
//   border: 1px solid #93c5fd;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 1px 2px rgba(37, 99, 235, 0.1);
// }
// .ldv-stepper-btn {
//   width: 30px;
//   height: 34px;
//   border: none;
//   background: #fff;
//   font-size: 1.15rem;
//   font-weight: 700;
//   color: #2563eb;
//   cursor: pointer;
//   transition: background 0.12s;
//   padding: 0;
//   line-height: 1;
//   font-family: inherit;
// }
// .ldv-stepper-btn:hover:not(:disabled) { background: #eff6ff; }
// .ldv-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }
// .ldv-stepper-val {
//   min-width: 40px;
//   line-height: 34px;
//   text-align: center;
//   background: #fff;
//   font-family: "Cambria Math", Georgia, serif;
//   font-size: 1.1rem;
//   font-weight: 700;
//   color: #1e3a5f;
//   border-left: 1px solid #bfdbfe;
//   border-right: 1px solid #bfdbfe;
// }
// .ldv-cards-area {
//   flex: 1;
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   flex-wrap: wrap;
//   padding: 2px;
// }
// .ldv-term-card {
//   display: flex;
//   flex-direction: column;
//   background: #fff;
//   border: 1px solid #e2e8f0;
//   border-radius: 9px;
//   overflow: hidden;
//   transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
// }
// .ldv-term-card:hover,
// .ldv-term-card:focus-within {
//   border-color: #2563eb;
//   box-shadow: 0 4px 10px rgba(37, 99, 235, 0.14);
//   transform: translateY(-1px);
// }
// .ldv-term-card-error {
//   border-color: #dc2626;
//   background: #fef2f2;
// }
// .ldv-term-card-error:hover,
// .ldv-term-card-error:focus-within {
//   border-color: #dc2626;
//   box-shadow: 0 4px 10px rgba(220, 38, 38, 0.14);
// }
// .ldv-term-card-input {
//   width: 70px;
//   height: 38px;
//   border: none;
//   text-align: center;
//   background: transparent;
//   font-family: "Cambria Math", Georgia, serif;
//   font-size: 1rem;
//   font-weight: 700;
//   color: #1e3a5f;
//   outline: none;
//   -moz-appearance: textfield;
//   padding: 0;
// }
// .ldv-term-card-input::-webkit-outer-spin-button,
// .ldv-term-card-input::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }
// .ldv-term-card-var {
//   height: 22px;
//   background: #eff6ff;
//   border-top: 1px solid #dbeafe;
//   text-align: center;
//   font-family: "Cambria Math", Georgia, serif;
//   font-size: 0.78rem;
//   font-weight: 700;
//   color: #2563eb;
//   line-height: 22px;
// }
// .ldv-term-card-var sup { font-size: 0.85em; }
// .ldv-divide-sign-row {
//   text-align: center;
//   font-size: 1.45rem;
//   font-weight: 700;
//   color: #475569;
//   line-height: 1;
//   margin: 4px 0;
// }
// .ldv-error-row {
//   color: #dc2626;
//   font-size: 0.84rem;
//   font-weight: 600;
//   padding: 6px 2px 0;
// }

// /* Buttons */
// .ldv-btn {
//   padding: 7px 14px;
//   border-radius: 7px;
//   border: 1px solid #cbd5e1;
//   background: #fff;
//   font-family: inherit;
//   font-size: 0.88rem;
//   font-weight: 600;
//   color: #475569;
//   cursor: pointer;
//   transition: background 0.15s, border-color 0.15s, color 0.15s;
// }
// .ldv-btn:hover:not(:disabled) {
//   background: #eff6ff;
//   border-color: #3b82f6;
//   color: #1e3a5f;
// }
// .ldv-btn:disabled { opacity: 0.4; cursor: not-allowed; }
// .ldv-btn-primary {
//   background: linear-gradient(135deg, #3b82f6, #2563eb);
//   color: #fff;
//   border-color: transparent;
// }
// .ldv-btn-primary:hover:not(:disabled) {
//   background: linear-gradient(135deg, #2563eb, #1d4ed8);
//   color: #fff;
//   border-color: transparent;
// }
// .ldv-btn-playing {
//   background: #fef3c7;
//   color: #78350f;
//   border: 1px solid #b45309;
// }
// .ldv-btn-playing:hover:not(:disabled) {
//   background: #fde68a;
//   color: #78350f;
//   border-color: #b45309;
// }

// /* Accordion (presets) */
// .ldv-accordion {
//   margin-top: 14px;
//   padding-top: 12px;
//   border-top: 1px solid #e2e8f0;
// }
// .ldv-accordion-header {
//   background: #eff6ff;
//   border: 1px solid #c7d6f5;
//   border-radius: 8px;
//   padding: 10px 14px;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 0.95rem;
//   font-weight: 600;
//   color: #1e3a5f;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   width: 100%;
//   text-align: left;
//   transition: background 0.15s, border-color 0.15s;
// }
// .ldv-accordion-header:hover {
//   background: #dbeafe;
//   border-color: #3b82f6;
// }
// .ldv-accordion-icon {
//   display: inline-block;
//   font-size: 0.7rem;
//   transition: transform 0.2s;
// }
// .ldv-accordion-open .ldv-accordion-icon { transform: rotate(90deg); }
// .ldv-accordion-collapsed-hint {
//   margin-left: 6px;
//   font-style: italic;
//   font-weight: 400;
//   font-size: 0.84rem;
//   color: #64748b;
// }
// .ldv-accordion-content { margin-top: 10px; }
// .ldv-presets {
//   display: flex;
//   gap: 8px;
//   flex-wrap: wrap;
// }
// .ldv-preset {
//   padding: 8px 12px;
//   border-radius: 7px;
//   border: 1px solid #cbd5e1;
//   background: #fff;
//   font-family: "Cambria Math", Georgia, serif;
//   font-size: 0.9rem;
//   color: #475569;
//   cursor: pointer;
//   transition: background 0.15s, border-color 0.15s, color 0.15s;
// }
// .ldv-preset:hover {
//   background: #eff6ff;
//   border-color: #3b82f6;
//   color: #1e3a5f;
// }
// .ldv-preset-active {
//   background: #2563eb;
//   color: #fff;
//   border-color: #2563eb;
// }
// .ldv-preset-active:hover {
//   background: #1d4ed8;
//   color: #fff;
//   border-color: #1d4ed8;
// }
// .ldv-preset-hint {
//   color: #94a3b8;
//   font-size: 0.85em;
//   margin-left: 4px;
// }
// .ldv-preset-active .ldv-preset-hint { color: #c7d6f5; }

// /* Playback controls */
// .ldv-controls {
//   display: flex;
//   gap: 8px;
//   flex-wrap: wrap;
//   align-items: center;
//   padding-top: 12px;
//   margin-top: 14px;
//   border-top: 1px solid #e2e8f0;
// }
// .ldv-status {
//   margin-left: auto;
//   font-size: 0.86rem;
//   color: #64748b;
// }
// .ldv-status b { color: #1e3a5f; }

// /* Diagram / split */
// .ldv-split {
//   display: grid;
//   grid-template-columns: minmax(0, 1.35fr) minmax(280px, 1fr);
//   gap: 18px;
//   align-items: start;
// }
// @media (max-width: 860px) {
//   .ldv-split { grid-template-columns: 1fr; }
// }
// .ldv-svg-host {
//   display: flex;
//   justify-content: flex-start;
//   overflow-x: auto;
//   padding: 4px 0;
// }
// .ldv-svg-host svg {
//   display: block;
//   max-width: 100%;
//   height: auto;
//   flex: 0 0 auto;
// }

// /* Step log */
// .ldv-step-log {
//   max-height: 480px;
//   overflow-y: auto;
//   padding-right: 4px;
//   border-left: 2px dashed #e2e8f0;
//   padding-left: 14px;
// }
// .ldv-step-log::-webkit-scrollbar { width: 6px; }
// .ldv-step-log::-webkit-scrollbar-thumb {
//   background: #cbd5e1;
//   border-radius: 4px;
// }
// .ldv-step-log-empty {
//   color: #94a3b8;
//   font-size: 0.86rem;
//   font-style: italic;
//   padding: 14px 4px;
// }
// .ldv-step-entry {
//   padding: 10px 12px;
//   border-radius: 8px;
//   background: #f8fafc;
//   margin-bottom: 7px;
//   border-left: 3px solid transparent;
//   transition: opacity 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s;
// }
// .ldv-step-entry-past { opacity: 0.55; }
// .ldv-step-entry-current {
//   background: #fef3c7;
//   border-left-color: #b45309;
//   box-shadow: 0 2px 8px rgba(180, 83, 9, 0.15);
// }
// .ldv-step-head {
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-bottom: 4px;
// }
// .ldv-step-badge {
//   background: #2563eb;
//   color: #fff;
//   font-size: 0.7rem;
//   font-weight: 700;
//   padding: 2px 8px;
//   border-radius: 10px;
//   min-width: 24px;
//   text-align: center;
// }
// .ldv-step-entry-current .ldv-step-badge { background: #b45309; }
// .ldv-step-title {
//   font-size: 0.84rem;
//   font-weight: 700;
//   color: #1e3a5f;
// }
// .ldv-step-body {
//   font-size: 0.86rem;
//   color: #475569;
//   line-height: 1.5;
// }
// .ldv-step-body sup { font-size: 0.7em; }
// .ldv-step-body b { color: #1e3a5f; }
// .ldv-step-body .accent {
//   background: #fef3c7;
//   color: #78350f;
//   padding: 1px 5px;
//   border-radius: 3px;
//   font-family: "Cambria Math", Georgia, serif;
//   font-weight: 700;
// }
// .ldv-step-body .ink-indigo,
// .ldv-step-body .ink-emerald,
// .ldv-step-body .ink-rose,
// .ldv-step-body .ink-violet,
// .ldv-step-body .ink-slate,
// .ldv-step-body .ink-ochre,
// .ldv-step-body .ink-teal {
//   font-weight: 700;
//   font-family: "Cambria Math", Georgia, serif;
// }
// .ldv-step-body .ink-indigo  { color: #4338ca; }
// .ldv-step-body .ink-emerald { color: #047857; }
// .ldv-step-body .ink-rose    { color: #be185d; }
// .ldv-step-body .ink-violet  { color: #7c3aed; }
// .ldv-step-body .ink-slate   { color: #334155; }
// .ldv-step-body .ink-ochre   { color: #854d0e; }
// .ldv-step-body .ink-teal    { color: #0f766e; }

// /* Result panel */
// .ldv-result {
//   padding: 18px 20px;
//   border-radius: 12px;
//   background: linear-gradient(135deg, #3b82f6, #2563eb);
//   color: #fff;
//   text-align: center;
// }
// .ldv-result-label {
//   font-size: 0.7rem;
//   text-transform: uppercase;
//   letter-spacing: 0.12em;
//   font-weight: 600;
//   opacity: 0.85;
//   margin-bottom: 6px;
// }
// .ldv-result-eq {
//   font-family: "Cambria Math", Georgia, serif;
//   font-size: 1.18rem;
//   font-weight: 700;
//   margin: 4px 0;
// }
// .ldv-result-eq-sub {
//   font-size: 0.95rem;
//   opacity: 0.9;
//   margin-top: 6px;
// }
// .ldv-factor-line {
//   margin-top: 10px;
//   padding-top: 10px;
//   border-top: 1px dashed rgba(255, 255, 255, 0.35);
//   font-size: 0.95rem;
// }
// .ldv-glow {
//   background: #fbbf24;
//   color: #78350f;
//   padding: 3px 8px;
//   border-radius: 5px;
//   font-weight: 700;
// }
// `;

// // =====================================================
// //   LOGIC: math
// // =====================================================
// function computeLongDivision(coeffs, divCoeffs) {
//   const n = coeffs.length - 1;
//   const D = divCoeffs.length - 1;
//   if (D > n || divCoeffs[0] === 0) {
//     return {
//       Q: [], R: [...coeffs], multRows: [], workings: [],
//       numIters: 0, valid: false, earlyTerminated: false,
//     };
//   }
//   const working = [...coeffs];
//   const Q = [];
//   const multRows = [];
//   const workings = [];
//   const conventionalIters = n - D + 1;
//   let earlyTerminated = false;
//   for (let k = 0; k < conventionalIters; k++) {
//     const q = working[k] / divCoeffs[0];
//     Q.push(q);
//     const mult = divCoeffs.map((d) => q * d);
//     multRows.push(mult);
//     for (let j = 0; j <= D; j++) working[k + j] -= mult[j];
//     workings.push([...working]);
//     let allRestZero = true;
//     for (let i = k + 1; i <= n; i++) {
//       if (Math.abs(working[i]) > 1e-10) { allRestZero = false; break; }
//     }
//     if (allRestZero && k + 1 < conventionalIters) {
//       earlyTerminated = true;
//       break;
//     }
//   }
//   const numIters = Q.length;
//   while (Q.length < conventionalIters) Q.push(0);
//   const R = working.slice(n - D + 1);
//   return { Q, R, multRows, workings, numIters, valid: true, earlyTerminated };
// }

// // =====================================================
// //   LOGIC: formatting
// // =====================================================
// function fmt(n) {
//   if (Math.abs(n) < 1e-10) return '0';
//   if (Number.isInteger(n)) return String(n);
//   return Number(n.toFixed(4)).toString();
// }

// const SUP_MAP = [
//   '\u2070', '\u00b9', '\u00b2', '\u00b3', '\u2074',
//   '\u2075', '\u2076', '\u2077', '\u2078', '\u2079',
// ];

// function supDigit(n) {
//   return String(n).split('').map((d) => SUP_MAP[Number(d)]).join('');
// }

// function termText(coeff, deg, isFirst) {
//   if (Math.abs(coeff) < 1e-10) return '';
//   const absC = Math.abs(coeff);
//   const coefStr = (absC === 1 && deg > 0) ? '' : fmt(absC);
//   let varStr = '';
//   if (deg === 1) varStr = 'x';
//   else if (deg > 1) varStr = 'x' + supDigit(deg);
//   if (isFirst) return (coeff < 0 ? MINUS : '') + coefStr + varStr;
//   return (coeff < 0 ? ' ' + MINUS + ' ' : ' + ') + coefStr + varStr;
// }

// function termHTML(coeff, deg, isFirst) {
//   if (Math.abs(coeff) < 1e-10) return '';
//   const absC = Math.abs(coeff);
//   const coefStr = (absC === 1 && deg > 0) ? '' : fmt(absC);
//   let varStr = '';
//   if (deg === 1) varStr = 'x';
//   else if (deg > 1) varStr = 'x<sup>' + deg + '</sup>';
//   if (isFirst) return (coeff < 0 ? MINUS : '') + coefStr + varStr;
//   return (coeff < 0 ? ' ' + MINUS + ' ' : ' + ') + coefStr + varStr;
// }

// function polyText(coefArr) {
//   if (!coefArr || coefArr.length === 0) return '0';
//   let s = '';
//   for (let i = 0; i < coefArr.length; i++) {
//     const deg = coefArr.length - 1 - i;
//     s += termText(coefArr[i], deg, s === '');
//   }
//   return s || '0';
// }

// function polyHTML(coefArr) {
//   if (!coefArr || coefArr.length === 0) return '0';
//   let s = '';
//   for (let i = 0; i < coefArr.length; i++) {
//     const deg = coefArr.length - 1 - i;
//     s += termHTML(coefArr[i], deg, s === '');
//   }
//   return s || '0';
// }

// function polyFromTermsHTML(termCoeffs, startDeg) {
//   let s = '';
//   for (let i = 0; i < termCoeffs.length; i++) {
//     s += termHTML(termCoeffs[i], startDeg - i, s === '');
//   }
//   return s || '0';
// }

// function termLabelHTML(deg) {
//   if (deg === 0) return 'constant term';
//   if (deg === 1) return 'x term';
//   return 'x<sup>' + deg + '</sup> term';
// }

// function totalLongSteps(coeffs, divCoeffs) {
//   const data = computeLongDivision(coeffs, divCoeffs);
//   return 3 * data.numIters;
// }

// // =====================================================
// //   LOGIC: step text
// // =====================================================
// function bringDownText(k, D, n, workings, coeffs) {
//   const bdCol = k + D + 1;
//   if (bdCol > n) return '';
//   const bdVal = coeffs[bdCol];
//   const bdDeg = n - bdCol;
//   const bdStr = termHTML(bdVal, bdDeg, true) || '0';
//   const runningCoeffs = [];
//   for (let j = 1; j <= D; j++) runningCoeffs.push(workings[k][k + j]);
//   runningCoeffs.push(bdVal);
//   const runningPoly = polyFromTermsHTML(runningCoeffs, n - k - 1);
//   return `Bring down <span class="accent">${bdStr}</span>. New running polynomial: <span class="accent">${runningPoly}</span>.`;
// }

// function finalRemainderText(workings, k, n, D, earlyTerminated) {
//   if (earlyTerminated) {
//     return `What&apos;s left below the bar is <span class="accent">0</span>, and every remaining dividend term is also <span class="accent">0</span>. Continuing would just append zeros to the quotient &mdash; the <b>remainder is 0</b> and the division is complete.`;
//   }
//   const remCoeffs = workings[k].slice(n - D + 1);
//   const allZero = remCoeffs.every((v) => Math.abs(v) < 1e-10);
//   const remStr = allZero ? '0' : polyFromTermsHTML(remCoeffs, D - 1);
//   return `No more terms to bring down &mdash; the <b>remainder</b> is <span class="accent">${remStr}</span>.`;
// }

// function generateSteps(coeffs, divCoeffs) {
//   const n = coeffs.length - 1;
//   const D = divCoeffs.length - 1;
//   const data = computeLongDivision(coeffs, divCoeffs);
//   const { Q, multRows, workings, numIters, valid, earlyTerminated } = data;
//   const steps = [];

//   if (!valid) {
//     steps.push({
//       idx: 0,
//       title: 'Cannot divide',
//       body: `The divisor&apos;s degree (${D}) is greater than the dividend&apos;s degree (${n}). Pick a smaller divisor degree.`,
//     });
//     return steps;
//   }

//   steps.push({
//     idx: 0,
//     title: 'Set up the division',
//     body: `Goal: divide <b>p(x) = ${polyHTML(coeffs)}</b> by <b>(${polyHTML(divCoeffs)})</b>. Dividend goes under the bracket, divisor on the left. Each column tracks one power of x.`,
//   });

//   const divLeadHTML = termHTML(divCoeffs[0], D, true);
//   const divHTML = polyHTML(divCoeffs);

//   for (let k = 0; k < numIters; k++) {
//     const cls = CYCLE_CLASSES[k % CYCLE_CLASSES.length];
//     const qDeg = n - D - k;
//     const isLast = (k === numIters - 1);
//     const leadCoeff = (k === 0) ? coeffs[0] : workings[k - 1][k];
//     const leadDeg = n - k;
//     const leadStr = termHTML(leadCoeff, leadDeg, true) || '0';

//     if (Math.abs(leadCoeff) < 1e-10) {
//       steps.push({
//         idx: 3 * k + 1,
//         title: 'Divide leading terms',
//         body: `The ${termLabelHTML(leadDeg)} of the running polynomial is <span class="accent">0</span>. Since there&apos;s no ${termLabelHTML(leadDeg)} to divide, the quotient gets a <span class="${cls}">0</span> at this position.`,
//       });
//       steps.push({
//         idx: 3 * k + 2,
//         title: 'Multiply back',
//         body: `<span class="${cls}">0 &middot; (${divHTML}) = 0</span>. Nothing to subtract.`,
//       });
//       steps.push({
//         idx: 3 * k + 3,
//         title: isLast ? 'Subtract' : 'Subtract &amp; bring down',
//         body: `Subtracting zero changes nothing. ${isLast ? finalRemainderText(workings, k, n, D, earlyTerminated) : bringDownText(k, D, n, workings, coeffs)}`,
//       });
//       continue;
//     }

//     const qVal = Q[k];
//     const qTermStr = termHTML(qVal, qDeg, true);

//     steps.push({
//       idx: 3 * k + 1,
//       title: 'Divide leading terms',
//       body: `Leading term right now: <span class="accent">${leadStr}</span>. Divide by the divisor&apos;s leading term <span class="accent">${divLeadHTML}</span>: <span class="accent">${leadStr} &divide; ${divLeadHTML} = <span class="${cls}">${qTermStr}</span></span>. Write <span class="${cls}">${qTermStr}</span> above the bracket.`,
//     });

//     const multStartDeg = n - k;
//     const multStr = polyFromTermsHTML(multRows[k], multStartDeg);
//     steps.push({
//       idx: 3 * k + 2,
//       title: 'Multiply back',
//       body: `Multiply the divisor by the new quotient term: <span class="${cls}">${qTermStr} &middot; (${divHTML}) = ${multStr}</span>. Write below the dividend, lined up by columns.`,
//     });

//     steps.push({
//       idx: 3 * k + 3,
//       title: isLast ? 'Subtract' : 'Subtract &amp; bring down',
//       body: `Subtract the row above. The leading <span class="accent">${leadStr}</span> cancels (by design). ${isLast ? finalRemainderText(workings, k, n, D, earlyTerminated) : `What&apos;s left below the bar shows the modified columns. ${bringDownText(k, D, n, workings, coeffs)}`}`,
//     });
//   }
//   return steps;
// }

// // =====================================================
// //   LOGIC: SVG builder
// // =====================================================
// function svgTextInCell(cx, cy, text, color, fontSize, bold) {
//   return `<text x="${cx}" y="${cy}" font-family="Cambria Math, Georgia, serif" font-size="${fontSize}" font-weight="${bold ? 800 : 700}" fill="${color}" text-anchor="middle">${text}</text>`;
// }

// function buildLongDivisionSVG(coeffs, divCoeffs, stepIdx) {
//   const { CELL_W, ROW_H, PAD_T, PAD_R, PAD_L, FONT_MAIN, FONT_QUOTIENT, QUOT_GAP } = SVG_LAYOUT;
//   const n = coeffs.length - 1;
//   const D = divCoeffs.length - 1;
//   const data = computeLongDivision(coeffs, divCoeffs);
//   const { Q, multRows, workings, numIters, valid } = data;
//   const totalSteps = 3 * numIters;

//   const divisorText = polyText(divCoeffs);
//   const DIVISOR_AREA = Math.max(60, divisorText.length * 8 + 20);

//   const longColX = (i) => PAD_L + DIVISOR_AREA + i * CELL_W;
//   const longColCx = (i) => longColX(i) + CELL_W / 2;

//   const quotientY = PAD_T;
//   const dividendY = quotientY + ROW_H + QUOT_GAP;
//   const ITER_BLOCK = ROW_H + 6 + ROW_H;
//   const multY = (k) => dividendY + ROW_H + k * ITER_BLOCK;
//   const barY = (k) => multY(k) + ROW_H;
//   const resultY = (k) => barY(k) + 6;

//   const longS = Math.min(stepIdx, totalSteps);
//   const maxVisibleIter = longS === 0 ? -1 : Math.floor((longS - 1) / 3);

//   const polyCols = n + 1;
//   const svgW = PAD_L + DIVISOR_AREA + polyCols * CELL_W + PAD_R;
//   const contentBottom = (maxVisibleIter < 0)
//     ? (dividendY + ROW_H + 4)
//     : (resultY(maxVisibleIter) + ROW_H);
//   const svgH = contentBottom + (stepIdx >= totalSteps ? 28 : 14);

//   let svg = `<svg viewBox="0 0 ${svgW} ${svgH}" width="${svgW}" height="${svgH}" xmlns="http://www.w3.org/2000/svg">`;
//   svg += '<defs><marker id="arrDown" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" /></marker></defs>';

//   if (!valid) {
//     svg += `<text x="${svgW / 2}" y="${svgH / 2}" font-family="inherit" font-size="14" fill="#94a3b8" text-anchor="middle">divisor degree must be \u2264 dividend degree</text>`;
//     svg += '</svg>';
//     return svg;
//   }

//   // Highlight rect for current step
//   if (stepIdx >= 1 && stepIdx <= totalSteps) {
//     const k = Math.floor((stepIdx - 1) / 3);
//     const phase = (stepIdx - 1) % 3;
//     let hx, hy, hw, hh;
//     if (phase === 0) {
//       hx = longColX(D + k); hy = quotientY; hw = CELL_W; hh = ROW_H;
//     } else if (phase === 1) {
//       hx = longColX(k); hy = multY(k); hw = (D + 1) * CELL_W; hh = ROW_H;
//     } else {
//       const hasBringdown = (k + D + 1 < polyCols);
//       hx = longColX(k + 1); hy = resultY(k);
//       hw = (D + (hasBringdown ? 1 : 0)) * CELL_W; hh = ROW_H;
//     }
//     svg += `<rect x="${hx - 2}" y="${hy - 2}" width="${hw + 4}" height="${hh + 4}" rx="5" fill="#fef3c7" stroke="#b45309" stroke-width="1.8" />`;
//   }

//   // Divisor display
//   const divCenterY = dividendY + ROW_H / 2 + 5;
//   svg += `<text x="${PAD_L + DIVISOR_AREA - 12}" y="${divCenterY}" font-family="Cambria Math, Georgia, serif" font-size="${FONT_MAIN}" font-weight="700" fill="#475569" text-anchor="end">${divisorText}</text>`;

//   // Bracket
//   const bracketX = PAD_L + DIVISOR_AREA;
//   const bracketTop = dividendY - 10;
//   const bracketBottom = contentBottom;
//   const bracketRight = bracketX + polyCols * CELL_W;
//   svg += `<line x1="${bracketX}" y1="${bracketTop}" x2="${bracketX}" y2="${bracketBottom}" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />`;
//   svg += `<line x1="${bracketX}" y1="${bracketTop}" x2="${bracketRight}" y2="${bracketTop}" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />`;

//   // Dividend row
//   for (let i = 0; i < polyCols; i++) {
//     const deg = n - i;
//     const text = termText(coeffs[i], deg, i === 0) || (Math.abs(coeffs[i]) < 1e-10 ? '0' : '');
//     svg += svgTextInCell(longColCx(i), dividendY + ROW_H / 2 + 5, text, '#1e3a5f', FONT_MAIN);
//   }

//   // Iterations
//   for (let k = 0; k < numIters; k++) {
//     const qStep = 3 * k + 1;
//     const mStep = 3 * k + 2;
//     const rStep = 3 * k + 3;
//     const color = CYCLE_COLORS[k % CYCLE_COLORS.length];

//     if (longS >= qStep) {
//       const qDeg = n - D - k;
//       const isFirstQ = (k === 0);
//       const qText = termText(Q[k], qDeg, isFirstQ) || (Math.abs(Q[k]) < 1e-10 ? '0' : '');
//       svg += svgTextInCell(longColCx(D + k), quotientY + ROW_H / 2 + 5, qText, color, FONT_QUOTIENT, true);
//     }

//     if (longS >= mStep) {
//       const my = multY(k);
//       for (let j = 0; j <= D; j++) {
//         const val = multRows[k][j];
//         const deg = n - k - j;
//         const isFirst = (j === 0);
//         let text;
//         if (Math.abs(val) < 1e-10) text = isFirst ? '0' : '+ 0';
//         else text = termText(val, deg, isFirst);
//         svg += svgTextInCell(longColCx(k + j), my + ROW_H / 2 + 5, text, color, FONT_MAIN);
//       }
//       svg += `<text x="${longColX(k) - 10}" y="${my + ROW_H / 2 + 5}" font-family="Cambria Math, Georgia, serif" font-size="${FONT_MAIN}" font-weight="700" fill="${color}" text-anchor="middle">(${MINUS})</text>`;
//     }

//     if (longS >= rStep) {
//       const by = barY(k);
//       const barLeft = longColX(k) - 3;
//       const barRight = longColX(k + D) + CELL_W + 3;
//       svg += `<line x1="${barLeft}" y1="${by + 3}" x2="${barRight}" y2="${by + 3}" stroke="#475569" stroke-width="1.3" />`;
//       const ry = resultY(k);
//       const isLastIter = (k === numIters - 1);
//       for (let j = 1; j <= D; j++) {
//         const colIdx = k + j;
//         const val = workings[k][colIdx];
//         const deg = n - colIdx;
//         const isFirst = (j === 1);
//         let text;
//         if (Math.abs(val) < 1e-10) text = isFirst ? '0' : '+ 0';
//         else text = termText(val, deg, isFirst);
//         const isRemainderCell = isLastIter;
//         const cellColor = isRemainderCell ? '#b45309' : '#1e3a5f';
//         const font = isRemainderCell ? FONT_MAIN + 1 : FONT_MAIN;
//         const bold = isRemainderCell;
//         svg += svgTextInCell(longColCx(colIdx), ry + ROW_H / 2 + 5, text, cellColor, font, bold);
//       }
//       if (!isLastIter && (k + D + 1 < polyCols)) {
//         const bdCol = k + D + 1;
//         const bdVal = coeffs[bdCol];
//         const bdDeg = n - bdCol;
//         const bdText = termText(bdVal, bdDeg, false) || (Math.abs(bdVal) < 1e-10 ? '+ 0' : '');
//         svg += svgTextInCell(longColCx(bdCol), ry + ROW_H / 2 + 5, bdText, '#1e3a5f', FONT_MAIN);
//         const ax = longColCx(bdCol);
//         svg += `<path d="M ${ax} ${dividendY + ROW_H + 2} L ${ax} ${ry - 2}" stroke="#64748b" stroke-width="1" stroke-dasharray="2 2" fill="none" marker-end="url(#arrDown)" opacity="0.6" />`;
//       }
//     }
//   }

//   // Remainder highlight at end
//   if (stepIdx >= totalSteps && numIters > 0) {
//     const k = numIters - 1;
//     const ry = resultY(k);
//     const firstCol = k + 1;
//     const lastCol = k + D;
//     const x = longColX(firstCol) - 3;
//     const w = (lastCol - firstCol + 1) * CELL_W + 6;
//     svg += `<rect x="${x}" y="${ry - 3}" width="${w}" height="${ROW_H + 6}" rx="6" fill="none" stroke="#b45309" stroke-width="2.4" />`;
//     svg += `<text x="${x + w / 2}" y="${ry + ROW_H + 12}" font-family="Cambria Math, Georgia, serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">remainder</text>`;
//   }

//   svg += '</svg>';
//   return svg;
// }

// // =====================================================
// //   COMPONENT: PolyTermCard
// // =====================================================
// function PolyTermCard({ value, degree, isLeading, onChange }) {
//   const [text, setText] = useState(String(value));

//   useEffect(() => {
//     const parsed = parseInt(text, 10);
//     const parsedOrZero = isNaN(parsed) ? 0 : parsed;
//     if (parsedOrZero !== value) {
//       setText(String(value));
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value]);

//   const handleChange = (e) => {
//     const v = e.target.value;
//     setText(v);
//     const parsed = parseInt(v, 10);
//     onChange(isNaN(parsed) ? 0 : parsed);
//   };

//   const hasError = isLeading && value === 0;

//   let varEl;
//   if (degree === 0) varEl = '1';
//   else if (degree === 1) varEl = 'x';
//   else varEl = <>x<sup>{degree}</sup></>;

//   return (
//     <div className={`ldv-term-card ${hasError ? 'ldv-term-card-error' : ''}`}>
//       <input
//         type="number"
//         step="1"
//         className="ldv-term-card-input"
//         value={text}
//         onChange={handleChange}
//       />
//       <div className="ldv-term-card-var">{varEl}</div>
//     </div>
//   );
// }

// // =====================================================
// //   COMPONENT: PolynomialInput (Variant B)
// // =====================================================
// function PolynomialInput({
//   label,
//   degree,
//   minDegree,
//   maxDegree,
//   coeffs,
//   onDegreeChange,
//   onCoefficientChange,
//   onRandomize,
// }) {
//   return (
//     <div className="ldv-poly-row">
//       <div className="ldv-module">
//         <div className="ldv-module-label">{label}</div>
//         <div className="ldv-module-stepper-wrap">
//           <span className="ldv-module-stepper-hint">degree</span>
//           <div className="ldv-stepper">
//             <button
//               type="button"
//               className="ldv-stepper-btn"
//               onClick={() => onDegreeChange(degree - 1)}
//               disabled={degree <= minDegree}
//               aria-label="decrease degree"
//             >
//               −
//             </button>
//             <span className="ldv-stepper-val">{degree}</span>
//             <button
//               type="button"
//               className="ldv-stepper-btn"
//               onClick={() => onDegreeChange(degree + 1)}
//               disabled={degree >= maxDegree}
//               aria-label="increase degree"
//             >
//               +
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="ldv-cards-area">
//         {coeffs.map((v, i) => (
//           <PolyTermCard
//             key={`${degree}-${i}`}
//             value={v}
//             degree={degree - i}
//             isLeading={i === 0}
//             onChange={(val) => onCoefficientChange(i, val)}
//           />
//         ))}
//       </div>

//       <button
//         type="button"
//         className="ldv-btn"
//         onClick={onRandomize}
//       >
//         🎲 Generate random
//       </button>
//     </div>
//   );
// }

// // =====================================================
// //   COMPONENT: PresetsAccordion
// // =====================================================
// function PresetsAccordion({ presets, activeIdx, onSelect }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className={`ldv-accordion ${open ? 'ldv-accordion-open' : ''}`}>
//       <button
//         type="button"
//         className="ldv-accordion-header"
//         onClick={() => setOpen((o) => !o)}
//         aria-expanded={open}
//       >
//         <span className="ldv-accordion-icon">▶</span>
//         Use predefined examples
//         {!open && (
//           <span className="ldv-accordion-collapsed-hint">
//             — click to pick a worked example
//           </span>
//         )}
//       </button>
//       {open && (
//         <div className="ldv-accordion-content">
//           <div className="ldv-presets">
//             {presets.map((p, i) => (
//               <button
//                 key={i}
//                 type="button"
//                 className={`ldv-preset ${activeIdx === i ? 'ldv-preset-active' : ''}`}
//                 onClick={() => onSelect(i)}
//               >
//                 {p.name}
//                 <span className="ldv-preset-hint">· {p.hint}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // =====================================================
// //   COMPONENT: PlaybackControls
// // =====================================================
// function PlaybackControls({
//   stepIdx, maxStep, playing,
//   onPrev, onNext, onAuto, onReset,
// }) {
//   const autoLabel = playing
//     ? '⏸ Pause'
//     : (stepIdx >= maxStep ? 'Replay' : 'Auto-run');
//   return (
//     <div className="ldv-controls">
//       <button
//         type="button"
//         className="ldv-btn"
//         onClick={onPrev}
//         disabled={stepIdx === 0}
//       >
//         ◀ Back
//       </button>
//       <button
//         type="button"
//         className="ldv-btn"
//         onClick={onNext}
//         disabled={stepIdx >= maxStep}
//       >
//         Next ▶
//       </button>
//       <button
//         type="button"
//         className={`ldv-btn ${playing ? 'ldv-btn-playing' : 'ldv-btn-primary'}`}
//         onClick={onAuto}
//       >
//         {autoLabel}
//       </button>
//       <button
//         type="button"
//         className="ldv-btn"
//         onClick={onReset}
//       >
//         ↺ Reset
//       </button>
//       <div className="ldv-status">
//         step <b>{stepIdx}</b> / {maxStep}
//       </div>
//     </div>
//   );
// }

// // =====================================================
// //   COMPONENT: StepEntry + StepLog
// // =====================================================
// function StepEntry({ entry, isCurrent }) {
//   const cls = `ldv-step-entry ${isCurrent ? 'ldv-step-entry-current' : 'ldv-step-entry-past'}`;
//   return (
//     <div className={cls} data-current={isCurrent ? 'true' : 'false'}>
//       <div className="ldv-step-head">
//         <span className="ldv-step-badge">{entry.idx}</span>
//         <span
//           className="ldv-step-title"
//           dangerouslySetInnerHTML={{ __html: entry.title }}
//         />
//       </div>
//       <div
//         className="ldv-step-body"
//         dangerouslySetInnerHTML={{ __html: entry.body }}
//       />
//     </div>
//   );
// }

// function StepLog({ steps, stepIdx }) {
//   const visible = steps.filter((s) => s.idx <= stepIdx);
//   const logRef = useRef(null);

//   useEffect(() => {
//     if (!logRef.current) return;
//     const cur = logRef.current.querySelector('[data-current="true"]');
//     if (cur) cur.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//   }, [stepIdx]);

//   return (
//     <div className="ldv-step-log" ref={logRef}>
//       {visible.length === 0 ? (
//         <div className="ldv-step-log-empty">Click Next to begin.</div>
//       ) : (
//         visible.map((entry) => (
//           <StepEntry
//             key={entry.idx}
//             entry={entry}
//             isCurrent={entry.idx === stepIdx}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// // =====================================================
// //   COMPONENT: ResultPanel + FactorLine
// // =====================================================
// function FactorLine({ remAllZero, Rstr, D, divCoeffs, divStr }) {
//   if (remAllZero) {
//     if (D === 1 && divCoeffs[0] === 1) {
//       const rValue = -divCoeffs[1];
//       return (
//         <div className="ldv-factor-line">
//           R = 0 → <span className="ldv-glow">p({fmt(rValue)}) = 0</span>:{' '}
//           <b>r = {fmt(rValue)} is a root</b>, and <b>{divStr}</b> is a factor of p(x).
//         </div>
//       );
//     }
//     return (
//       <div className="ldv-factor-line">
//         R = 0 — so <span className="ldv-glow">{divStr} is a factor of p(x)</span>.
//       </div>
//     );
//   }
//   return (
//     <div className="ldv-factor-line">
//       Remainder R ={' '}
//       <span
//         className="ldv-glow"
//         dangerouslySetInnerHTML={{ __html: Rstr }}
//       />
//       . Since R ≠ 0, {divStr} is not a factor.
//     </div>
//   );
// }

// function ResultPanel({ coeffs, divCoeffs }) {
//   const n = coeffs.length - 1;
//   const D = divCoeffs.length - 1;
//   const data = computeLongDivision(coeffs, divCoeffs);
//   if (!data.valid) return null;

//   const { Q, workings, numIters } = data;
//   const R = numIters > 0 ? workings[numIters - 1].slice(n - D + 1) : [...coeffs];
//   const remAllZero = R.every((v) => Math.abs(v) < 1e-10);
//   const Rstr = remAllZero ? '0' : polyFromTermsHTML(R, D - 1);
//   const QstrHTML = polyHTML(Q);
//   const divStr = `(${polyText(divCoeffs)})`;

//   return (
//     <div className="ldv-result">
//       <div className="ldv-result-label">Result</div>
//       <div
//         className="ldv-result-eq"
//         dangerouslySetInnerHTML={{
//           __html: `p(x) = ${divStr} &middot; (${QstrHTML})${remAllZero ? ' + 0' : ' + (' + Rstr + ')'}`,
//         }}
//       />
//       <div
//         className="ldv-result-eq ldv-result-eq-sub"
//         dangerouslySetInnerHTML={{
//           __html: `Q(x) = ${QstrHTML} &nbsp;&middot;&nbsp; R = ${Rstr}`,
//         }}
//       />
//       <FactorLine
//         remAllZero={remAllZero}
//         Rstr={Rstr}
//         D={D}
//         divCoeffs={divCoeffs}
//         divStr={divStr}
//       />
//     </div>
//   );
// }

// // =====================================================
// //   COMPONENT: LongDivisionDiagram (SVG host)
// // =====================================================
// function LongDivisionDiagram({ coeffs, divCoeffs, stepIdx }) {
//   const svg = buildLongDivisionSVG(coeffs, divCoeffs, stepIdx);
//   return (
//     <div
//       className="ldv-svg-host"
//       dangerouslySetInnerHTML={{ __html: svg }}
//     />
//   );
// }

// // =====================================================
// //   MAIN COMPONENT
// // =====================================================
// export default function LongDivisionVisualizer() {
//   const [activePresetIdx, setActivePresetIdx] = useState(0);
//   const [coeffs, setCoeffs] = useState(() => [...PRESETS[0].coeffs]);
//   const [divCoeffs, setDivCoeffs] = useState(() => [...PRESETS[0].divCoeffs]);
//   const [stepIdx, setStepIdx] = useState(0);
//   const [playing, setPlaying] = useState(false);

//   const dividendDegree = coeffs.length - 1;
//   const divisorDegree = divCoeffs.length - 1;
//   const maxStep = useMemo(() => totalLongSteps(coeffs, divCoeffs), [coeffs, divCoeffs]);
//   const steps = useMemo(() => generateSteps(coeffs, divCoeffs), [coeffs, divCoeffs]);

//   let errorMsg = '';
//   if (coeffs[0] === 0) errorMsg = 'Dividend leading coefficient cannot be 0.';
//   else if (divCoeffs[0] === 0) errorMsg = 'Divisor leading coefficient cannot be 0.';

//   const stopAuto = useCallback(() => setPlaying(false), []);

//   // Auto-run
//   useEffect(() => {
//     if (!playing) return undefined;
//     if (stepIdx >= maxStep) {
//       setPlaying(false);
//       return undefined;
//     }
//     const timer = setTimeout(() => {
//       setStepIdx((s) => s + 1);
//     }, AUTO_RUN_INTERVAL_MS);
//     return () => clearTimeout(timer);
//   }, [playing, stepIdx, maxStep]);

//   // Clamp stepIdx if inputs change such that current step is past end
//   useEffect(() => {
//     if (stepIdx > maxStep) setStepIdx(0);
//   }, [maxStep, stepIdx]);

//   const resetBeforeInputChange = () => {
//     setActivePresetIdx(-1);
//     setPlaying(false);
//     setStepIdx(0);
//   };

//   const onDividendDegreeChange = (newDeg) => {
//     if (newDeg < DIVIDEND_MIN || newDeg > DIVIDEND_MAX) return;
//     if (newDeg < divisorDegree) return;
//     const next = new Array(newDeg + 1).fill(0);
//     for (let i = 0; i <= Math.min(newDeg, coeffs.length - 1); i++) {
//       next[i] = coeffs[i];
//     }
//     if (next[0] === 0) next[0] = 1;
//     setCoeffs(next);
//     resetBeforeInputChange();
//   };

//   const onDivisorDegreeChange = (newDeg) => {
//     if (newDeg < DIVISOR_MIN || newDeg > DIVISOR_MAX) return;
//     if (newDeg > dividendDegree) return;
//     const next = new Array(newDeg + 1).fill(0);
//     for (let i = 0; i <= Math.min(newDeg, divCoeffs.length - 1); i++) {
//       next[i] = divCoeffs[i];
//     }
//     if (next[0] === 0) next[0] = 1;
//     setDivCoeffs(next);
//     resetBeforeInputChange();
//   };

//   const onDividendCoefChange = (idx, value) => {
//     const next = [...coeffs];
//     next[idx] = value;
//     setCoeffs(next);
//     resetBeforeInputChange();
//   };

//   const onDivisorCoefChange = (idx, value) => {
//     const next = [...divCoeffs];
//     next[idx] = value;
//     setDivCoeffs(next);
//     resetBeforeInputChange();
//   };

//   const randomizeDividend = () => {
//     const out = [];
//     const leadOpts = [-3, -2, -1, 1, 2, 3];
//     out.push(leadOpts[Math.floor(Math.random() * leadOpts.length)]);
//     for (let i = 1; i <= dividendDegree; i++) {
//       out.push(Math.floor(Math.random() * 19) - 9);
//     }
//     setCoeffs(out);
//     resetBeforeInputChange();
//   };

//   const randomizeDivisor = () => {
//     const out = [1];
//     for (let i = 1; i <= divisorDegree; i++) {
//       out.push(Math.floor(Math.random() * 11) - 5);
//     }
//     setDivCoeffs(out);
//     resetBeforeInputChange();
//   };

//   const selectPreset = (i) => {
//     const p = PRESETS[i];
//     setActivePresetIdx(i);
//     setCoeffs([...p.coeffs]);
//     setDivCoeffs([...p.divCoeffs]);
//     setPlaying(false);
//     setStepIdx(0);
//   };

//   const onPrev = () => {
//     if (stepIdx <= 0) return;
//     stopAuto();
//     setStepIdx((s) => s - 1);
//   };
//   const onNext = () => {
//     if (stepIdx >= maxStep) return;
//     stopAuto();
//     setStepIdx((s) => s + 1);
//   };
//   const onAuto = () => {
//     if (playing) {
//       setPlaying(false);
//       return;
//     }
//     if (stepIdx >= maxStep) setStepIdx(0);
//     setPlaying(true);
//   };
//   const onReset = () => {
//     stopAuto();
//     setStepIdx(0);
//   };

//   const showResult = stepIdx >= maxStep && maxStep > 0 && !errorMsg;

//   return (
//     <div className="ldv-wrap">
//       <style dangerouslySetInnerHTML={{ __html: STYLES }} />

//       <div className="ldv-card">
//         <PolynomialInput
//           label="Dividend"
//           degree={dividendDegree}
//           minDegree={Math.max(DIVIDEND_MIN, divisorDegree)}
//           maxDegree={DIVIDEND_MAX}
//           coeffs={coeffs}
//           onDegreeChange={onDividendDegreeChange}
//           onCoefficientChange={onDividendCoefChange}
//           onRandomize={randomizeDividend}
//         />

//         <div className="ldv-divide-sign-row">÷</div>

//         <PolynomialInput
//           label="Divisor"
//           degree={divisorDegree}
//           minDegree={DIVISOR_MIN}
//           maxDegree={Math.min(DIVISOR_MAX, dividendDegree)}
//           coeffs={divCoeffs}
//           onDegreeChange={onDivisorDegreeChange}
//           onCoefficientChange={onDivisorCoefChange}
//           onRandomize={randomizeDivisor}
//         />

//         {errorMsg && <div className="ldv-error-row">{errorMsg}</div>}

//         <PresetsAccordion
//           presets={PRESETS}
//           activeIdx={activePresetIdx}
//           onSelect={selectPreset}
//         />

//         <PlaybackControls
//           stepIdx={stepIdx}
//           maxStep={maxStep}
//           playing={playing}
//           onPrev={onPrev}
//           onNext={onNext}
//           onAuto={onAuto}
//           onReset={onReset}
//         />
//       </div>

//       <div className="ldv-card">
//         <div className="ldv-card-title">Long Division</div>
//         <div className="ldv-split">
//           <LongDivisionDiagram
//             coeffs={coeffs}
//             divCoeffs={divCoeffs}
//             stepIdx={stepIdx}
//           />
//           <StepLog steps={steps} stepIdx={stepIdx} />
//         </div>
//       </div>

//       {showResult && (
//         <div className="ldv-card">
//           <ResultPanel coeffs={coeffs} divCoeffs={divCoeffs} />
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

// LongDivisionVisualizer-single-v2.jsx
// Single-file long division visualizer.
// Changes vs v1:
//   - Added per-polynomial preview line under each input (Dividend / Divisor)
//   - Fixed Generate-random button no longer stretching to module height

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// =====================================================
//   CONSTANTS
// =====================================================
const DIVIDEND_MIN = 2;
const DIVIDEND_MAX = 7;
const DIVISOR_MIN = 1;
const DIVISOR_MAX = 3;

const MINUS = '\u2212';

const AUTO_RUN_INTERVAL_MS = 1700;

const CYCLE_COLORS = [
  '#4338ca', '#047857', '#be185d', '#7c3aed',
  '#334155', '#854d0e', '#0f766e',
];

const CYCLE_CLASSES = [
  'ink-indigo', 'ink-emerald', 'ink-rose', 'ink-violet',
  'ink-slate', 'ink-ochre', 'ink-teal',
];

const PRESETS = [
  {
    name: 'x\u00b3 \u2212 6x\u00b2 + 11x \u2212 6 \u00f7 (x \u2212 1)',
    hint: 'clean: remainder 0',
    coeffs: [1, -6, 11, -6],
    divCoeffs: [1, -1],
  },
  {
    name: '2x\u00b3 \u2212 5x\u00b2 + 3x \u2212 4 \u00f7 (x \u2212 2)',
    hint: 'remainder \u2260 0',
    coeffs: [2, -5, 3, -4],
    divCoeffs: [1, -2],
  },
  {
    name: 'x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6 \u00f7 (x + 2)',
    hint: 'has a zero mid-quotient',
    coeffs: [1, 2, -5, -6],
    divCoeffs: [1, 2],
  },
  {
    name: 'x\u2074 \u2212 1 \u00f7 (x\u00b2 \u2212 1)',
    hint: 'quadratic divisor, clean',
    coeffs: [1, 0, 0, 0, -1],
    divCoeffs: [1, 0, -1],
  },
  {
    name: 'x\u2074 + 2x\u00b3 \u2212 7x\u00b2 + 4 \u00f7 (x\u00b2 + x \u2212 2)',
    hint: 'quadratic divisor, with remainder',
    coeffs: [1, 2, -7, 0, 4],
    divCoeffs: [1, 1, -2],
  },
];

const SVG_LAYOUT = {
  CELL_W: 66,
  ROW_H: 26,
  PAD_T: 22,
  PAD_R: 18,
  PAD_L: 12,
  FONT_MAIN: 14,
  FONT_QUOTIENT: 15,
  QUOT_GAP: 9,
};

// =====================================================
//   STYLES
// =====================================================
const STYLES = `
.ldv-wrap {
  max-width: 1180px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1e3a5f;
}
.ldv-card {
  background: #fff;
  border-radius: 14px;
  padding: 18px 22px;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
  margin-bottom: 14px;
}
.ldv-card-title {
  font-size: 0.72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Polynomial input — Variant B */
.ldv-poly-block {
  padding: 6px 0;
}
.ldv-poly-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.ldv-module {
  background: linear-gradient(180deg, #eff6ff, #dbeafe);
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  padding: 12px 18px 12px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 140px;
  position: relative;
}
.ldv-module::before {
  content: '';
  position: absolute;
  left: 0; top: 12px; bottom: 12px;
  width: 3px;
  background: linear-gradient(180deg, #3b82f6, #2563eb);
  border-radius: 2px;
}
.ldv-module-label {
  font-size: 0.78rem;
  color: #1d4ed8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
.ldv-module-stepper-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.ldv-module-stepper-hint {
  font-size: 0.62rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.ldv-stepper {
  display: inline-flex;
  background: #fff;
  border: 1px solid #93c5fd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(37, 99, 235, 0.1);
}
.ldv-stepper-btn {
  width: 30px;
  height: 34px;
  border: none;
  background: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  color: #2563eb;
  cursor: pointer;
  transition: background 0.12s;
  padding: 0;
  line-height: 1;
  font-family: inherit;
}
.ldv-stepper-btn:hover:not(:disabled) { background: #eff6ff; }
.ldv-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }
.ldv-stepper-val {
  min-width: 40px;
  line-height: 34px;
  text-align: center;
  background: #fff;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a5f;
  border-left: 1px solid #bfdbfe;
  border-right: 1px solid #bfdbfe;
}
.ldv-cards-area {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  padding: 2px;
}
.ldv-term-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  overflow: hidden;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}
.ldv-term-card:hover,
.ldv-term-card:focus-within {
  border-color: #2563eb;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.14);
  transform: translateY(-1px);
}
.ldv-term-card-error {
  border-color: #dc2626;
  background: #fef2f2;
}
.ldv-term-card-error:hover,
.ldv-term-card-error:focus-within {
  border-color: #dc2626;
  box-shadow: 0 4px 10px rgba(220, 38, 38, 0.14);
}
.ldv-term-card-input {
  width: 70px;
  height: 38px;
  border: none;
  text-align: center;
  background: transparent;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a5f;
  outline: none;
  -moz-appearance: textfield;
  padding: 0;
}
.ldv-term-card-input::-webkit-outer-spin-button,
.ldv-term-card-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.ldv-term-card-var {
  height: 22px;
  background: #eff6ff;
  border-top: 1px solid #dbeafe;
  text-align: center;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #2563eb;
  line-height: 22px;
}
.ldv-term-card-var sup { font-size: 0.85em; }

/* Preview line under each polynomial input */
.ldv-preview-line {
  margin-top: 10px;
  padding: 8px 14px;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}
.ldv-preview-label {
  font-size: 0.66rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}
.ldv-preview-eq {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a5f;
}
.ldv-preview-eq sup { font-size: 0.7em; }

.ldv-divide-sign-row {
  text-align: center;
  font-size: 1.45rem;
  font-weight: 700;
  color: #475569;
  line-height: 1;
  margin: 6px 0;
}
.ldv-error-row {
  color: #dc2626;
  font-size: 0.84rem;
  font-weight: 600;
  padding: 6px 2px 0;
}

/* Buttons */
.ldv-btn {
  padding: 7px 14px;
  border-radius: 7px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  white-space: nowrap;
}
.ldv-btn:hover:not(:disabled) {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1e3a5f;
}
.ldv-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.ldv-btn-primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-color: transparent;
}
.ldv-btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  border-color: transparent;
}
.ldv-btn-playing {
  background: #fef3c7;
  color: #78350f;
  border: 1px solid #b45309;
}
.ldv-btn-playing:hover:not(:disabled) {
  background: #fde68a;
  color: #78350f;
  border-color: #b45309;
}

/* Accordion (presets) */
.ldv-accordion {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
}
.ldv-accordion-header {
  background: #eff6ff;
  border: 1px solid #c7d6f5;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e3a5f;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  transition: background 0.15s, border-color 0.15s;
}
.ldv-accordion-header:hover {
  background: #dbeafe;
  border-color: #3b82f6;
}
.ldv-accordion-icon {
  display: inline-block;
  font-size: 0.7rem;
  transition: transform 0.2s;
}
.ldv-accordion-open .ldv-accordion-icon { transform: rotate(90deg); }
.ldv-accordion-collapsed-hint {
  margin-left: 6px;
  font-style: italic;
  font-weight: 400;
  font-size: 0.84rem;
  color: #64748b;
}
.ldv-accordion-content { margin-top: 10px; }
.ldv-presets {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.ldv-preset {
  padding: 8px 12px;
  border-radius: 7px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 0.9rem;
  color: #475569;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.ldv-preset:hover {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1e3a5f;
}
.ldv-preset-active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.ldv-preset-active:hover {
  background: #1d4ed8;
  color: #fff;
  border-color: #1d4ed8;
}
.ldv-preset-hint {
  color: #94a3b8;
  font-size: 0.85em;
  margin-left: 4px;
}
.ldv-preset-active .ldv-preset-hint { color: #c7d6f5; }

/* Playback controls */
.ldv-controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 12px;
  margin-top: 14px;
  border-top: 1px solid #e2e8f0;
}
.ldv-status {
  margin-left: auto;
  font-size: 0.86rem;
  color: #64748b;
}
.ldv-status b { color: #1e3a5f; }

/* Diagram / split */
.ldv-split {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 1fr);
  gap: 18px;
  align-items: start;
}
@media (max-width: 860px) {
  .ldv-split { grid-template-columns: 1fr; }
}
.ldv-svg-host {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  padding: 4px 0;
}
.ldv-svg-host svg {
  display: block;
  max-width: 100%;
  height: auto;
  flex: 0 0 auto;
}

/* Step log */
.ldv-step-log {
  max-height: 480px;
  overflow-y: auto;
  padding-right: 4px;
  border-left: 2px dashed #e2e8f0;
  padding-left: 14px;
}
.ldv-step-log::-webkit-scrollbar { width: 6px; }
.ldv-step-log::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.ldv-step-log-empty {
  color: #94a3b8;
  font-size: 0.86rem;
  font-style: italic;
  padding: 14px 4px;
}
.ldv-step-entry {
  padding: 10px 12px;
  border-radius: 8px;
  background: #f8fafc;
  margin-bottom: 7px;
  border-left: 3px solid transparent;
  transition: opacity 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.ldv-step-entry-past { opacity: 0.55; }
.ldv-step-entry-current {
  background: #fef3c7;
  border-left-color: #b45309;
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.15);
}
.ldv-step-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}
.ldv-step-badge {
  background: #2563eb;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 24px;
  text-align: center;
}
.ldv-step-entry-current .ldv-step-badge { background: #b45309; }
.ldv-step-title {
  font-size: 0.84rem;
  font-weight: 700;
  color: #1e3a5f;
}
.ldv-step-body {
  font-size: 0.86rem;
  color: #475569;
  line-height: 1.5;
}
.ldv-step-body sup { font-size: 0.7em; }
.ldv-step-body b { color: #1e3a5f; }
.ldv-step-body .accent {
  background: #fef3c7;
  color: #78350f;
  padding: 1px 5px;
  border-radius: 3px;
  font-family: "Cambria Math", Georgia, serif;
  font-weight: 700;
}
.ldv-step-body .ink-indigo,
.ldv-step-body .ink-emerald,
.ldv-step-body .ink-rose,
.ldv-step-body .ink-violet,
.ldv-step-body .ink-slate,
.ldv-step-body .ink-ochre,
.ldv-step-body .ink-teal {
  font-weight: 700;
  font-family: "Cambria Math", Georgia, serif;
}
.ldv-step-body .ink-indigo  { color: #4338ca; }
.ldv-step-body .ink-emerald { color: #047857; }
.ldv-step-body .ink-rose    { color: #be185d; }
.ldv-step-body .ink-violet  { color: #7c3aed; }
.ldv-step-body .ink-slate   { color: #334155; }
.ldv-step-body .ink-ochre   { color: #854d0e; }
.ldv-step-body .ink-teal    { color: #0f766e; }

/* Result panel */
.ldv-result {
  padding: 18px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  text-align: center;
}
.ldv-result-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  opacity: 0.85;
  margin-bottom: 6px;
}
.ldv-result-eq {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.18rem;
  font-weight: 700;
  margin: 4px 0;
}
.ldv-result-eq-sub {
  font-size: 0.95rem;
  opacity: 0.9;
  margin-top: 6px;
}
.ldv-factor-line {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed rgba(255, 255, 255, 0.35);
  font-size: 0.95rem;
}
.ldv-glow {
  background: #fbbf24;
  color: #78350f;
  padding: 3px 8px;
  border-radius: 5px;
  font-weight: 700;
}
`;

// =====================================================
//   LOGIC: math
// =====================================================
function computeLongDivision(coeffs, divCoeffs) {
  const n = coeffs.length - 1;
  const D = divCoeffs.length - 1;
  if (D > n || divCoeffs[0] === 0) {
    return {
      Q: [], R: [...coeffs], multRows: [], workings: [],
      numIters: 0, valid: false, earlyTerminated: false,
    };
  }
  const working = [...coeffs];
  const Q = [];
  const multRows = [];
  const workings = [];
  const conventionalIters = n - D + 1;
  let earlyTerminated = false;
  for (let k = 0; k < conventionalIters; k++) {
    const q = working[k] / divCoeffs[0];
    Q.push(q);
    const mult = divCoeffs.map((d) => q * d);
    multRows.push(mult);
    for (let j = 0; j <= D; j++) working[k + j] -= mult[j];
    workings.push([...working]);
    let allRestZero = true;
    for (let i = k + 1; i <= n; i++) {
      if (Math.abs(working[i]) > 1e-10) { allRestZero = false; break; }
    }
    if (allRestZero && k + 1 < conventionalIters) {
      earlyTerminated = true;
      break;
    }
  }
  const numIters = Q.length;
  while (Q.length < conventionalIters) Q.push(0);
  const R = working.slice(n - D + 1);
  return { Q, R, multRows, workings, numIters, valid: true, earlyTerminated };
}

// =====================================================
//   LOGIC: formatting
// =====================================================
function fmt(n) {
  if (Math.abs(n) < 1e-10) return '0';
  if (Number.isInteger(n)) return String(n);
  return Number(n.toFixed(4)).toString();
}

const SUP_MAP = [
  '\u2070', '\u00b9', '\u00b2', '\u00b3', '\u2074',
  '\u2075', '\u2076', '\u2077', '\u2078', '\u2079',
];

function supDigit(n) {
  return String(n).split('').map((d) => SUP_MAP[Number(d)]).join('');
}

function termText(coeff, deg, isFirst) {
  if (Math.abs(coeff) < 1e-10) return '';
  const absC = Math.abs(coeff);
  const coefStr = (absC === 1 && deg > 0) ? '' : fmt(absC);
  let varStr = '';
  if (deg === 1) varStr = 'x';
  else if (deg > 1) varStr = 'x' + supDigit(deg);
  if (isFirst) return (coeff < 0 ? MINUS : '') + coefStr + varStr;
  return (coeff < 0 ? ' ' + MINUS + ' ' : ' + ') + coefStr + varStr;
}

function termHTML(coeff, deg, isFirst) {
  if (Math.abs(coeff) < 1e-10) return '';
  const absC = Math.abs(coeff);
  const coefStr = (absC === 1 && deg > 0) ? '' : fmt(absC);
  let varStr = '';
  if (deg === 1) varStr = 'x';
  else if (deg > 1) varStr = 'x<sup>' + deg + '</sup>';
  if (isFirst) return (coeff < 0 ? MINUS : '') + coefStr + varStr;
  return (coeff < 0 ? ' ' + MINUS + ' ' : ' + ') + coefStr + varStr;
}

function polyText(coefArr) {
  if (!coefArr || coefArr.length === 0) return '0';
  let s = '';
  for (let i = 0; i < coefArr.length; i++) {
    const deg = coefArr.length - 1 - i;
    s += termText(coefArr[i], deg, s === '');
  }
  return s || '0';
}

function polyHTML(coefArr) {
  if (!coefArr || coefArr.length === 0) return '0';
  let s = '';
  for (let i = 0; i < coefArr.length; i++) {
    const deg = coefArr.length - 1 - i;
    s += termHTML(coefArr[i], deg, s === '');
  }
  return s || '0';
}

function polyFromTermsHTML(termCoeffs, startDeg) {
  let s = '';
  for (let i = 0; i < termCoeffs.length; i++) {
    s += termHTML(termCoeffs[i], startDeg - i, s === '');
  }
  return s || '0';
}

function termLabelHTML(deg) {
  if (deg === 0) return 'constant term';
  if (deg === 1) return 'x term';
  return 'x<sup>' + deg + '</sup> term';
}

function totalLongSteps(coeffs, divCoeffs) {
  const data = computeLongDivision(coeffs, divCoeffs);
  return 3 * data.numIters;
}

// =====================================================
//   LOGIC: step text
// =====================================================
function bringDownText(k, D, n, workings, coeffs) {
  const bdCol = k + D + 1;
  if (bdCol > n) return '';
  const bdVal = coeffs[bdCol];
  const bdDeg = n - bdCol;
  const bdStr = termHTML(bdVal, bdDeg, true) || '0';
  const runningCoeffs = [];
  for (let j = 1; j <= D; j++) runningCoeffs.push(workings[k][k + j]);
  runningCoeffs.push(bdVal);
  const runningPoly = polyFromTermsHTML(runningCoeffs, n - k - 1);
  return `Bring down <span class="accent">${bdStr}</span>. New running polynomial: <span class="accent">${runningPoly}</span>.`;
}

function finalRemainderText(workings, k, n, D, earlyTerminated) {
  if (earlyTerminated) {
    return `What&apos;s left below the bar is <span class="accent">0</span>, and every remaining dividend term is also <span class="accent">0</span>. Continuing would just append zeros to the quotient &mdash; the <b>remainder is 0</b> and the division is complete.`;
  }
  const remCoeffs = workings[k].slice(n - D + 1);
  const allZero = remCoeffs.every((v) => Math.abs(v) < 1e-10);
  const remStr = allZero ? '0' : polyFromTermsHTML(remCoeffs, D - 1);
  return `No more terms to bring down &mdash; the <b>remainder</b> is <span class="accent">${remStr}</span>.`;
}

function generateSteps(coeffs, divCoeffs) {
  const n = coeffs.length - 1;
  const D = divCoeffs.length - 1;
  const data = computeLongDivision(coeffs, divCoeffs);
  const { Q, multRows, workings, numIters, valid, earlyTerminated } = data;
  const steps = [];

  if (!valid) {
    steps.push({
      idx: 0,
      title: 'Cannot divide',
      body: `The divisor&apos;s degree (${D}) is greater than the dividend&apos;s degree (${n}). Pick a smaller divisor degree.`,
    });
    return steps;
  }

  steps.push({
    idx: 0,
    title: 'Set up the division',
    body: `Goal: divide <b>p(x) = ${polyHTML(coeffs)}</b> by <b>(${polyHTML(divCoeffs)})</b>. Dividend goes under the bracket, divisor on the left. Each column tracks one power of x.`,
  });

  const divLeadHTML = termHTML(divCoeffs[0], D, true);
  const divHTML = polyHTML(divCoeffs);

  for (let k = 0; k < numIters; k++) {
    const cls = CYCLE_CLASSES[k % CYCLE_CLASSES.length];
    const qDeg = n - D - k;
    const isLast = (k === numIters - 1);
    const leadCoeff = (k === 0) ? coeffs[0] : workings[k - 1][k];
    const leadDeg = n - k;
    const leadStr = termHTML(leadCoeff, leadDeg, true) || '0';

    if (Math.abs(leadCoeff) < 1e-10) {
      steps.push({
        idx: 3 * k + 1,
        title: 'Divide leading terms',
        body: `The ${termLabelHTML(leadDeg)} of the running polynomial is <span class="accent">0</span>. Since there&apos;s no ${termLabelHTML(leadDeg)} to divide, the quotient gets a <span class="${cls}">0</span> at this position.`,
      });
      steps.push({
        idx: 3 * k + 2,
        title: 'Multiply back',
        body: `<span class="${cls}">0 &middot; (${divHTML}) = 0</span>. Nothing to subtract.`,
      });
      steps.push({
        idx: 3 * k + 3,
        title: isLast ? 'Subtract' : 'Subtract &amp; bring down',
        body: `Subtracting zero changes nothing. ${isLast ? finalRemainderText(workings, k, n, D, earlyTerminated) : bringDownText(k, D, n, workings, coeffs)}`,
      });
      continue;
    }

    const qVal = Q[k];
    const qTermStr = termHTML(qVal, qDeg, true);

    steps.push({
      idx: 3 * k + 1,
      title: 'Divide leading terms',
      body: `Leading term right now: <span class="accent">${leadStr}</span>. Divide by the divisor&apos;s leading term <span class="accent">${divLeadHTML}</span>: <span class="accent">${leadStr} &divide; ${divLeadHTML} = <span class="${cls}">${qTermStr}</span></span>. Write <span class="${cls}">${qTermStr}</span> above the bracket.`,
    });

    const multStartDeg = n - k;
    const multStr = polyFromTermsHTML(multRows[k], multStartDeg);
    steps.push({
      idx: 3 * k + 2,
      title: 'Multiply back',
      body: `Multiply the divisor by the new quotient term: <span class="${cls}">${qTermStr} &middot; (${divHTML}) = ${multStr}</span>. Write below the dividend, lined up by columns.`,
    });

    steps.push({
      idx: 3 * k + 3,
      title: isLast ? 'Subtract' : 'Subtract &amp; bring down',
      body: `Subtract the row above. The leading <span class="accent">${leadStr}</span> cancels (by design). ${isLast ? finalRemainderText(workings, k, n, D, earlyTerminated) : `What&apos;s left below the bar shows the modified columns. ${bringDownText(k, D, n, workings, coeffs)}`}`,
    });
  }
  return steps;
}

// =====================================================
//   LOGIC: SVG builder
// =====================================================
function svgTextInCell(cx, cy, text, color, fontSize, bold) {
  return `<text x="${cx}" y="${cy}" font-family="Cambria Math, Georgia, serif" font-size="${fontSize}" font-weight="${bold ? 800 : 700}" fill="${color}" text-anchor="middle">${text}</text>`;
}

function buildLongDivisionSVG(coeffs, divCoeffs, stepIdx) {
  const { CELL_W, ROW_H, PAD_T, PAD_R, PAD_L, FONT_MAIN, FONT_QUOTIENT, QUOT_GAP } = SVG_LAYOUT;
  const n = coeffs.length - 1;
  const D = divCoeffs.length - 1;
  const data = computeLongDivision(coeffs, divCoeffs);
  const { Q, multRows, workings, numIters, valid } = data;
  const totalSteps = 3 * numIters;

  const divisorText = polyText(divCoeffs);
  const DIVISOR_AREA = Math.max(60, divisorText.length * 8 + 20);

  const longColX = (i) => PAD_L + DIVISOR_AREA + i * CELL_W;
  const longColCx = (i) => longColX(i) + CELL_W / 2;

  const quotientY = PAD_T;
  const dividendY = quotientY + ROW_H + QUOT_GAP;
  const ITER_BLOCK = ROW_H + 6 + ROW_H;
  const multY = (k) => dividendY + ROW_H + k * ITER_BLOCK;
  const barY = (k) => multY(k) + ROW_H;
  const resultY = (k) => barY(k) + 6;

  const longS = Math.min(stepIdx, totalSteps);
  const maxVisibleIter = longS === 0 ? -1 : Math.floor((longS - 1) / 3);

  const polyCols = n + 1;
  const svgW = PAD_L + DIVISOR_AREA + polyCols * CELL_W + PAD_R;
  const contentBottom = (maxVisibleIter < 0)
    ? (dividendY + ROW_H + 4)
    : (resultY(maxVisibleIter) + ROW_H);
  const svgH = contentBottom + (stepIdx >= totalSteps ? 28 : 14);

  let svg = `<svg viewBox="0 0 ${svgW} ${svgH}" width="${svgW}" height="${svgH}" xmlns="http://www.w3.org/2000/svg">`;
  svg += '<defs><marker id="arrDown" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" /></marker></defs>';

  if (!valid) {
    svg += `<text x="${svgW / 2}" y="${svgH / 2}" font-family="inherit" font-size="14" fill="#94a3b8" text-anchor="middle">divisor degree must be \u2264 dividend degree</text>`;
    svg += '</svg>';
    return svg;
  }

  if (stepIdx >= 1 && stepIdx <= totalSteps) {
    const k = Math.floor((stepIdx - 1) / 3);
    const phase = (stepIdx - 1) % 3;
    let hx, hy, hw, hh;
    if (phase === 0) {
      hx = longColX(D + k); hy = quotientY; hw = CELL_W; hh = ROW_H;
    } else if (phase === 1) {
      hx = longColX(k); hy = multY(k); hw = (D + 1) * CELL_W; hh = ROW_H;
    } else {
      const hasBringdown = (k + D + 1 < polyCols);
      hx = longColX(k + 1); hy = resultY(k);
      hw = (D + (hasBringdown ? 1 : 0)) * CELL_W; hh = ROW_H;
    }
    svg += `<rect x="${hx - 2}" y="${hy - 2}" width="${hw + 4}" height="${hh + 4}" rx="5" fill="#fef3c7" stroke="#b45309" stroke-width="1.8" />`;
  }

  const divCenterY = dividendY + ROW_H / 2 + 5;
  svg += `<text x="${PAD_L + DIVISOR_AREA - 12}" y="${divCenterY}" font-family="Cambria Math, Georgia, serif" font-size="${FONT_MAIN}" font-weight="700" fill="#475569" text-anchor="end">${divisorText}</text>`;

  const bracketX = PAD_L + DIVISOR_AREA;
  const bracketTop = dividendY - 10;
  const bracketBottom = contentBottom;
  const bracketRight = bracketX + polyCols * CELL_W;
  svg += `<line x1="${bracketX}" y1="${bracketTop}" x2="${bracketX}" y2="${bracketBottom}" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />`;
  svg += `<line x1="${bracketX}" y1="${bracketTop}" x2="${bracketRight}" y2="${bracketTop}" stroke="#475569" stroke-width="1.8" stroke-linecap="round" />`;

  for (let i = 0; i < polyCols; i++) {
    const deg = n - i;
    const text = termText(coeffs[i], deg, i === 0) || (Math.abs(coeffs[i]) < 1e-10 ? '0' : '');
    svg += svgTextInCell(longColCx(i), dividendY + ROW_H / 2 + 5, text, '#1e3a5f', FONT_MAIN);
  }

  for (let k = 0; k < numIters; k++) {
    const qStep = 3 * k + 1;
    const mStep = 3 * k + 2;
    const rStep = 3 * k + 3;
    const color = CYCLE_COLORS[k % CYCLE_COLORS.length];

    if (longS >= qStep) {
      const qDeg = n - D - k;
      const isFirstQ = (k === 0);
      const qText = termText(Q[k], qDeg, isFirstQ) || (Math.abs(Q[k]) < 1e-10 ? '0' : '');
      svg += svgTextInCell(longColCx(D + k), quotientY + ROW_H / 2 + 5, qText, color, FONT_QUOTIENT, true);
    }

    if (longS >= mStep) {
      const my = multY(k);
      for (let j = 0; j <= D; j++) {
        const val = multRows[k][j];
        const deg = n - k - j;
        const isFirst = (j === 0);
        let text;
        if (Math.abs(val) < 1e-10) text = isFirst ? '0' : '+ 0';
        else text = termText(val, deg, isFirst);
        svg += svgTextInCell(longColCx(k + j), my + ROW_H / 2 + 5, text, color, FONT_MAIN);
      }
      svg += `<text x="${longColX(k) - 10}" y="${my + ROW_H / 2 + 5}" font-family="Cambria Math, Georgia, serif" font-size="${FONT_MAIN}" font-weight="700" fill="${color}" text-anchor="middle">(${MINUS})</text>`;
    }

    if (longS >= rStep) {
      const by = barY(k);
      const barLeft = longColX(k) - 3;
      const barRight = longColX(k + D) + CELL_W + 3;
      svg += `<line x1="${barLeft}" y1="${by + 3}" x2="${barRight}" y2="${by + 3}" stroke="#475569" stroke-width="1.3" />`;
      const ry = resultY(k);
      const isLastIter = (k === numIters - 1);
      for (let j = 1; j <= D; j++) {
        const colIdx = k + j;
        const val = workings[k][colIdx];
        const deg = n - colIdx;
        const isFirst = (j === 1);
        let text;
        if (Math.abs(val) < 1e-10) text = isFirst ? '0' : '+ 0';
        else text = termText(val, deg, isFirst);
        const isRemainderCell = isLastIter;
        const cellColor = isRemainderCell ? '#b45309' : '#1e3a5f';
        const font = isRemainderCell ? FONT_MAIN + 1 : FONT_MAIN;
        const bold = isRemainderCell;
        svg += svgTextInCell(longColCx(colIdx), ry + ROW_H / 2 + 5, text, cellColor, font, bold);
      }
      if (!isLastIter && (k + D + 1 < polyCols)) {
        const bdCol = k + D + 1;
        const bdVal = coeffs[bdCol];
        const bdDeg = n - bdCol;
        const bdText = termText(bdVal, bdDeg, false) || (Math.abs(bdVal) < 1e-10 ? '+ 0' : '');
        svg += svgTextInCell(longColCx(bdCol), ry + ROW_H / 2 + 5, bdText, '#1e3a5f', FONT_MAIN);
        const ax = longColCx(bdCol);
        svg += `<path d="M ${ax} ${dividendY + ROW_H + 2} L ${ax} ${ry - 2}" stroke="#64748b" stroke-width="1" stroke-dasharray="2 2" fill="none" marker-end="url(#arrDown)" opacity="0.6" />`;
      }
    }
  }

  if (stepIdx >= totalSteps && numIters > 0) {
    const k = numIters - 1;
    const ry = resultY(k);
    const firstCol = k + 1;
    const lastCol = k + D;
    const x = longColX(firstCol) - 3;
    const w = (lastCol - firstCol + 1) * CELL_W + 6;
    svg += `<rect x="${x}" y="${ry - 3}" width="${w}" height="${ROW_H + 6}" rx="6" fill="none" stroke="#b45309" stroke-width="2.4" />`;
    svg += `<text x="${x + w / 2}" y="${ry + ROW_H + 12}" font-family="Cambria Math, Georgia, serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">remainder</text>`;
  }

  svg += '</svg>';
  return svg;
}

// =====================================================
//   COMPONENT: PolyTermCard
// =====================================================
function PolyTermCard({ value, degree, isLeading, onChange }) {
  const [text, setText] = useState(String(value));

  useEffect(() => {
    const parsed = parseInt(text, 10);
    const parsedOrZero = isNaN(parsed) ? 0 : parsed;
    if (parsedOrZero !== value) {
      setText(String(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (e) => {
    const v = e.target.value;
    setText(v);
    const parsed = parseInt(v, 10);
    onChange(isNaN(parsed) ? 0 : parsed);
  };

  const hasError = isLeading && value === 0;

  let varEl;
  if (degree === 0) varEl = '1';
  else if (degree === 1) varEl = 'x';
  else varEl = <>x<sup>{degree}</sup></>;

  return (
    <div className={`ldv-term-card ${hasError ? 'ldv-term-card-error' : ''}`}>
      <input
        type="number"
        step="1"
        className="ldv-term-card-input"
        value={text}
        onChange={handleChange}
      />
      <div className="ldv-term-card-var">{varEl}</div>
    </div>
  );
}

// =====================================================
//   COMPONENT: PolynomialInput (Variant B) + preview
// =====================================================
function PolynomialInput({
  label,
  previewPrefix,
  degree,
  minDegree,
  maxDegree,
  coeffs,
  onDegreeChange,
  onCoefficientChange,
  onRandomize,
}) {
  const previewHTML = `${previewPrefix} ${polyHTML(coeffs)}`;
  return (
    <div className="ldv-poly-block">
      <div className="ldv-poly-row">
        <div className="ldv-module">
          <div className="ldv-module-label">{label}</div>
          <div className="ldv-module-stepper-wrap">
            <span className="ldv-module-stepper-hint">degree</span>
            <div className="ldv-stepper">
              <button
                type="button"
                className="ldv-stepper-btn"
                onClick={() => onDegreeChange(degree - 1)}
                disabled={degree <= minDegree}
                aria-label="decrease degree"
              >
                −
              </button>
              <span className="ldv-stepper-val">{degree}</span>
              <button
                type="button"
                className="ldv-stepper-btn"
                onClick={() => onDegreeChange(degree + 1)}
                disabled={degree >= maxDegree}
                aria-label="increase degree"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="ldv-cards-area">
          {coeffs.map((v, i) => (
            <PolyTermCard
              key={`${degree}-${i}`}
              value={v}
              degree={degree - i}
              isLeading={i === 0}
              onChange={(val) => onCoefficientChange(i, val)}
            />
          ))}
        </div>

        <button
          type="button"
          className="ldv-btn"
          onClick={onRandomize}
        >
          🎲 Generate random
        </button>
      </div>

      <div className="ldv-preview-line">
        <span className="ldv-preview-label">Preview</span>
        <span
          className="ldv-preview-eq"
          dangerouslySetInnerHTML={{ __html: previewHTML }}
        />
      </div>
    </div>
  );
}

// =====================================================
//   COMPONENT: PresetsAccordion
// =====================================================
function PresetsAccordion({ presets, activeIdx, onSelect }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ldv-accordion ${open ? 'ldv-accordion-open' : ''}`}>
      <button
        type="button"
        className="ldv-accordion-header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="ldv-accordion-icon">▶</span>
        Use predefined examples
        {!open && (
          <span className="ldv-accordion-collapsed-hint">
            — click to pick a worked example
          </span>
        )}
      </button>
      {open && (
        <div className="ldv-accordion-content">
          <div className="ldv-presets">
            {presets.map((p, i) => (
              <button
                key={i}
                type="button"
                className={`ldv-preset ${activeIdx === i ? 'ldv-preset-active' : ''}`}
                onClick={() => onSelect(i)}
              >
                {p.name}
                <span className="ldv-preset-hint">· {p.hint}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// =====================================================
//   COMPONENT: PlaybackControls
// =====================================================
function PlaybackControls({
  stepIdx, maxStep, playing,
  onPrev, onNext, onAuto, onReset,
}) {
  const autoLabel = playing
    ? '⏸ Pause'
    : (stepIdx >= maxStep ? 'Replay' : 'Auto-run');
  return (
    <div className="ldv-controls">
      <button
        type="button"
        className="ldv-btn"
        onClick={onPrev}
        disabled={stepIdx === 0}
      >
        ◀ Back
      </button>
      <button
        type="button"
        className="ldv-btn"
        onClick={onNext}
        disabled={stepIdx >= maxStep}
      >
        Next ▶
      </button>
      <button
        type="button"
        className={`ldv-btn ${playing ? 'ldv-btn-playing' : 'ldv-btn-primary'}`}
        onClick={onAuto}
      >
        {autoLabel}
      </button>
      <button
        type="button"
        className="ldv-btn"
        onClick={onReset}
      >
        ↺ Reset
      </button>
      <div className="ldv-status">
        step <b>{stepIdx}</b> / {maxStep}
      </div>
    </div>
  );
}

// =====================================================
//   COMPONENT: StepEntry + StepLog
// =====================================================
function StepEntry({ entry, isCurrent }) {
  const cls = `ldv-step-entry ${isCurrent ? 'ldv-step-entry-current' : 'ldv-step-entry-past'}`;
  return (
    <div className={cls} data-current={isCurrent ? 'true' : 'false'}>
      <div className="ldv-step-head">
        <span className="ldv-step-badge">{entry.idx}</span>
        <span
          className="ldv-step-title"
          dangerouslySetInnerHTML={{ __html: entry.title }}
        />
      </div>
      <div
        className="ldv-step-body"
        dangerouslySetInnerHTML={{ __html: entry.body }}
      />
    </div>
  );
}

function StepLog({ steps, stepIdx }) {
  const visible = steps.filter((s) => s.idx <= stepIdx);
  const logRef = useRef(null);

  useEffect(() => {
    if (!logRef.current) return;
    const cur = logRef.current.querySelector('[data-current="true"]');
    if (cur) cur.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [stepIdx]);

  return (
    <div className="ldv-step-log" ref={logRef}>
      {visible.length === 0 ? (
        <div className="ldv-step-log-empty">Click Next to begin.</div>
      ) : (
        visible.map((entry) => (
          <StepEntry
            key={entry.idx}
            entry={entry}
            isCurrent={entry.idx === stepIdx}
          />
        ))
      )}
    </div>
  );
}

// =====================================================
//   COMPONENT: ResultPanel + FactorLine
// =====================================================
function FactorLine({ remAllZero, Rstr, D, divCoeffs, divStr }) {
  if (remAllZero) {
    if (D === 1 && divCoeffs[0] === 1) {
      const rValue = -divCoeffs[1];
      return (
        <div className="ldv-factor-line">
          R = 0 → <span className="ldv-glow">p({fmt(rValue)}) = 0</span>:{' '}
          <b>r = {fmt(rValue)} is a root</b>, and <b>{divStr}</b> is a factor of p(x).
        </div>
      );
    }
    return (
      <div className="ldv-factor-line">
        R = 0 — so <span className="ldv-glow">{divStr} is a factor of p(x)</span>.
      </div>
    );
  }
  return (
    <div className="ldv-factor-line">
      Remainder R ={' '}
      <span
        className="ldv-glow"
        dangerouslySetInnerHTML={{ __html: Rstr }}
      />
      . Since R ≠ 0, {divStr} is not a factor.
    </div>
  );
}

function ResultPanel({ coeffs, divCoeffs }) {
  const n = coeffs.length - 1;
  const D = divCoeffs.length - 1;
  const data = computeLongDivision(coeffs, divCoeffs);
  if (!data.valid) return null;

  const { Q, workings, numIters } = data;
  const R = numIters > 0 ? workings[numIters - 1].slice(n - D + 1) : [...coeffs];
  const remAllZero = R.every((v) => Math.abs(v) < 1e-10);
  const Rstr = remAllZero ? '0' : polyFromTermsHTML(R, D - 1);
  const QstrHTML = polyHTML(Q);
  const divStr = `(${polyText(divCoeffs)})`;

  return (
    <div className="ldv-result">
      <div className="ldv-result-label">Result</div>
      <div
        className="ldv-result-eq"
        dangerouslySetInnerHTML={{
          __html: `p(x) = ${divStr} &middot; (${QstrHTML})${remAllZero ? ' + 0' : ' + (' + Rstr + ')'}`,
        }}
      />
      <div
        className="ldv-result-eq ldv-result-eq-sub"
        dangerouslySetInnerHTML={{
          __html: `Q(x) = ${QstrHTML} &nbsp;&middot;&nbsp; R = ${Rstr}`,
        }}
      />
      <FactorLine
        remAllZero={remAllZero}
        Rstr={Rstr}
        D={D}
        divCoeffs={divCoeffs}
        divStr={divStr}
      />
    </div>
  );
}

// =====================================================
//   COMPONENT: LongDivisionDiagram (SVG host)
// =====================================================
function LongDivisionDiagram({ coeffs, divCoeffs, stepIdx }) {
  const svg = buildLongDivisionSVG(coeffs, divCoeffs, stepIdx);
  return (
    <div
      className="ldv-svg-host"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

// =====================================================
//   MAIN COMPONENT
// =====================================================
export default function LongDivisionVisualizer() {
  const [activePresetIdx, setActivePresetIdx] = useState(0);
  const [coeffs, setCoeffs] = useState(() => [...PRESETS[0].coeffs]);
  const [divCoeffs, setDivCoeffs] = useState(() => [...PRESETS[0].divCoeffs]);
  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  const dividendDegree = coeffs.length - 1;
  const divisorDegree = divCoeffs.length - 1;
  const maxStep = useMemo(() => totalLongSteps(coeffs, divCoeffs), [coeffs, divCoeffs]);
  const steps = useMemo(() => generateSteps(coeffs, divCoeffs), [coeffs, divCoeffs]);

  let errorMsg = '';
  if (coeffs[0] === 0) errorMsg = 'Dividend leading coefficient cannot be 0.';
  else if (divCoeffs[0] === 0) errorMsg = 'Divisor leading coefficient cannot be 0.';

  const stopAuto = useCallback(() => setPlaying(false), []);

  useEffect(() => {
    if (!playing) return undefined;
    if (stepIdx >= maxStep) {
      setPlaying(false);
      return undefined;
    }
    const timer = setTimeout(() => {
      setStepIdx((s) => s + 1);
    }, AUTO_RUN_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [playing, stepIdx, maxStep]);

  useEffect(() => {
    if (stepIdx > maxStep) setStepIdx(0);
  }, [maxStep, stepIdx]);

  const resetBeforeInputChange = () => {
    setActivePresetIdx(-1);
    setPlaying(false);
    setStepIdx(0);
  };

  const onDividendDegreeChange = (newDeg) => {
    if (newDeg < DIVIDEND_MIN || newDeg > DIVIDEND_MAX) return;
    if (newDeg < divisorDegree) return;
    const next = new Array(newDeg + 1).fill(0);
    for (let i = 0; i <= Math.min(newDeg, coeffs.length - 1); i++) {
      next[i] = coeffs[i];
    }
    if (next[0] === 0) next[0] = 1;
    setCoeffs(next);
    resetBeforeInputChange();
  };

  const onDivisorDegreeChange = (newDeg) => {
    if (newDeg < DIVISOR_MIN || newDeg > DIVISOR_MAX) return;
    if (newDeg > dividendDegree) return;
    const next = new Array(newDeg + 1).fill(0);
    for (let i = 0; i <= Math.min(newDeg, divCoeffs.length - 1); i++) {
      next[i] = divCoeffs[i];
    }
    if (next[0] === 0) next[0] = 1;
    setDivCoeffs(next);
    resetBeforeInputChange();
  };

  const onDividendCoefChange = (idx, value) => {
    const next = [...coeffs];
    next[idx] = value;
    setCoeffs(next);
    resetBeforeInputChange();
  };

  const onDivisorCoefChange = (idx, value) => {
    const next = [...divCoeffs];
    next[idx] = value;
    setDivCoeffs(next);
    resetBeforeInputChange();
  };

  const randomizeDividend = () => {
    const out = [];
    const leadOpts = [-3, -2, -1, 1, 2, 3];
    out.push(leadOpts[Math.floor(Math.random() * leadOpts.length)]);
    for (let i = 1; i <= dividendDegree; i++) {
      out.push(Math.floor(Math.random() * 19) - 9);
    }
    setCoeffs(out);
    resetBeforeInputChange();
  };

  const randomizeDivisor = () => {
    const out = [1];
    for (let i = 1; i <= divisorDegree; i++) {
      out.push(Math.floor(Math.random() * 11) - 5);
    }
    setDivCoeffs(out);
    resetBeforeInputChange();
  };

  const selectPreset = (i) => {
    const p = PRESETS[i];
    setActivePresetIdx(i);
    setCoeffs([...p.coeffs]);
    setDivCoeffs([...p.divCoeffs]);
    setPlaying(false);
    setStepIdx(0);
  };

  const onPrev = () => {
    if (stepIdx <= 0) return;
    stopAuto();
    setStepIdx((s) => s - 1);
  };
  const onNext = () => {
    if (stepIdx >= maxStep) return;
    stopAuto();
    setStepIdx((s) => s + 1);
  };
  const onAuto = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (stepIdx >= maxStep) setStepIdx(0);
    setPlaying(true);
  };
  const onReset = () => {
    stopAuto();
    setStepIdx(0);
  };

  const showResult = stepIdx >= maxStep && maxStep > 0 && !errorMsg;

  return (
    <div className="ldv-wrap">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="ldv-card">
        <PolynomialInput
          label="Dividend"
          previewPrefix="p(x) ="
          degree={dividendDegree}
          minDegree={Math.max(DIVIDEND_MIN, divisorDegree)}
          maxDegree={DIVIDEND_MAX}
          coeffs={coeffs}
          onDegreeChange={onDividendDegreeChange}
          onCoefficientChange={onDividendCoefChange}
          onRandomize={randomizeDividend}
        />

        <div className="ldv-divide-sign-row">÷</div>

        <PolynomialInput
          label="Divisor"
          previewPrefix="d(x) ="
          degree={divisorDegree}
          minDegree={DIVISOR_MIN}
          maxDegree={Math.min(DIVISOR_MAX, dividendDegree)}
          coeffs={divCoeffs}
          onDegreeChange={onDivisorDegreeChange}
          onCoefficientChange={onDivisorCoefChange}
          onRandomize={randomizeDivisor}
        />

        {errorMsg && <div className="ldv-error-row">{errorMsg}</div>}

        <PresetsAccordion
          presets={PRESETS}
          activeIdx={activePresetIdx}
          onSelect={selectPreset}
        />

        <PlaybackControls
          stepIdx={stepIdx}
          maxStep={maxStep}
          playing={playing}
          onPrev={onPrev}
          onNext={onNext}
          onAuto={onAuto}
          onReset={onReset}
        />
      </div>

      <div className="ldv-card">
        <div className="ldv-card-title">Long Division</div>
        <div className="ldv-split">
          <LongDivisionDiagram
            coeffs={coeffs}
            divCoeffs={divCoeffs}
            stepIdx={stepIdx}
          />
          <StepLog steps={steps} stepIdx={stepIdx} />
        </div>
      </div>

      {showResult && (
        <div className="ldv-card">
          <ResultPanel coeffs={coeffs} divCoeffs={divCoeffs} />
        </div>
      )}
    </div>
  );
}