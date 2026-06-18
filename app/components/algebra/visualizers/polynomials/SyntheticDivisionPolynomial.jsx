'use client';

// SyntheticDivisionVisualizer-single-v1.jsx
// Single-file synthetic division visualizer.
// Combines two diagram layouts in one component, switchable at runtime:
//   - 'tableau' (default): 3-row synthetic tableau (from synthetic-division-v1)
//   - 'longdiv'         : same synthetic in the long-division tableau (from v2)
// Inputs use Variant B styling. Divisor is fixed as (x - r), single r input.

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// =====================================================
//   CONSTANTS
// =====================================================
const DIVIDEND_MIN = 2;
const DIVIDEND_MAX = 7;
const R_MIN = -99;
const R_MAX = 99;

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
    coeffs: [1, -6, 11, -6], r: 1,
  },
  {
    name: '2x\u00b3 \u2212 5x\u00b2 + 3x \u2212 4 \u00f7 (x \u2212 2)',
    hint: 'remainder \u2260 0',
    coeffs: [2, -5, 3, -4], r: 2,
  },
  {
    name: 'x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6 \u00f7 (x + 2)',
    hint: 'negative r, clean',
    coeffs: [1, 2, -5, -6], r: -2,
  },
  {
    name: 'x\u2074 \u2212 1 \u00f7 (x \u2212 1)',
    hint: 'sparse dividend, clean',
    coeffs: [1, 0, 0, 0, -1], r: 1,
  },
  {
    name: 'x\u2075 + 1 \u00f7 (x + 1)',
    hint: 'odd-power identity',
    coeffs: [1, 0, 0, 0, 0, 1], r: -1,
  },
];

// SVG layout for the long-division-style tableau (v2)
const SVG_LAYOUT_LD = {
  CELL_W: 66, ROW_H: 26, PAD_T: 22, PAD_R: 18, PAD_L: 12,
  FONT_MAIN: 14, FONT_QUOTIENT: 15, QUOT_GAP: 9,
};
// SVG layout for the synthetic 3-row tableau (v1)
const SVG_LAYOUT_SYN = {
  CELL_W: 74, ROW_H: 36, PAD_T: 22, PAD_R: 22, PAD_L: 12,
  R_BOX_W: 80, ROW_GAP: 4, RESULT_GAP: 12,
};

// =====================================================
//   STYLES
// =====================================================
const STYLES = `
.sdv-wrap {
  max-width: 1180px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1e3a5f;
}
.sdv-card {
  background: #fff;
  border-radius: 14px;
  padding: 18px 22px;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
  margin-bottom: 14px;
}
.sdv-card-title {
  font-size: 0.72rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Polynomial input — Variant B */
.sdv-poly-block { padding: 6px 0; }
.sdv-poly-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.sdv-module {
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
.sdv-module::before {
  content: '';
  position: absolute;
  left: 0; top: 12px; bottom: 12px;
  width: 3px;
  background: linear-gradient(180deg, #3b82f6, #2563eb);
  border-radius: 2px;
}
.sdv-module-label {
  font-size: 0.78rem;
  color: #1d4ed8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}
.sdv-module-stepper-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.sdv-module-stepper-hint {
  font-size: 0.62rem;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.sdv-module-form-hint {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e3a5f;
  padding: 4px 0;
}
.sdv-stepper {
  display: inline-flex;
  background: #fff;
  border: 1px solid #93c5fd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(37, 99, 235, 0.1);
}
.sdv-stepper-btn {
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
.sdv-stepper-btn:hover:not(:disabled) { background: #eff6ff; }
.sdv-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }
.sdv-stepper-val {
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
.sdv-cards-area {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  padding: 2px;
}
.sdv-term-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  overflow: hidden;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}
.sdv-term-card:hover,
.sdv-term-card:focus-within {
  border-color: #2563eb;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.14);
  transform: translateY(-1px);
}
.sdv-term-card-error {
  border-color: #dc2626;
  background: #fef2f2;
}
.sdv-term-card-error:hover,
.sdv-term-card-error:focus-within {
  border-color: #dc2626;
  box-shadow: 0 4px 10px rgba(220, 38, 38, 0.14);
}
.sdv-term-card-input {
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
.sdv-term-card-input::-webkit-outer-spin-button,
.sdv-term-card-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.sdv-term-card-var {
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
.sdv-term-card-var sup { font-size: 0.85em; }

/* Distinct, slightly larger card for the lone r input */
.sdv-r-card .sdv-term-card-input {
  width: 96px;
  height: 44px;
  font-size: 1.1rem;
}
.sdv-r-card .sdv-term-card-var {
  height: 24px;
  font-size: 0.82rem;
  line-height: 24px;
}

/* Preview line */
.sdv-preview-line {
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
.sdv-preview-label {
  font-size: 0.66rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}
.sdv-preview-eq {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a5f;
}
.sdv-preview-eq sup { font-size: 0.7em; }

.sdv-divide-sign-row {
  text-align: center;
  font-size: 1.45rem;
  font-weight: 700;
  color: #475569;
  line-height: 1;
  margin: 6px 0;
}
.sdv-error-row {
  color: #dc2626;
  font-size: 0.84rem;
  font-weight: 600;
  padding: 6px 2px 0;
}

/* Buttons */
.sdv-btn {
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
.sdv-btn:hover:not(:disabled) {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1e3a5f;
}
.sdv-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.sdv-btn-primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-color: transparent;
}
.sdv-btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  border-color: transparent;
}
.sdv-btn-playing {
  background: #fef3c7;
  color: #78350f;
  border: 1px solid #b45309;
}
.sdv-btn-playing:hover:not(:disabled) {
  background: #fde68a;
  color: #78350f;
  border-color: #b45309;
}

/* Layout toggle (v1/v2 switch) */
.sdv-layout-toggle-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}
.sdv-layout-label {
  font-size: 0.72rem;
  color: #1d4ed8;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.sdv-layout-seg {
  display: inline-flex;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}
.sdv-layout-seg button {
  padding: 7px 14px;
  border: none;
  background: #fff;
  font-family: inherit;
  font-size: 0.86rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  border-right: 1px solid #e2e8f0;
}
.sdv-layout-seg button:last-child { border-right: none; }
.sdv-layout-seg button:hover:not(.sdv-layout-seg-active) {
  background: #eff6ff;
  color: #1d4ed8;
}
.sdv-layout-seg-active {
  background: linear-gradient(135deg, #3b82f6, #2563eb) !important;
  color: #fff !important;
  font-weight: 700 !important;
}

/* Accordion */
.sdv-accordion {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
}
.sdv-accordion-header {
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
.sdv-accordion-header:hover {
  background: #dbeafe;
  border-color: #3b82f6;
}
.sdv-accordion-icon {
  display: inline-block;
  font-size: 0.7rem;
  transition: transform 0.2s;
}
.sdv-accordion-open .sdv-accordion-icon { transform: rotate(90deg); }
.sdv-accordion-collapsed-hint {
  margin-left: 6px;
  font-style: italic;
  font-weight: 400;
  font-size: 0.84rem;
  color: #64748b;
}
.sdv-accordion-content { margin-top: 10px; }
.sdv-presets { display: flex; gap: 8px; flex-wrap: wrap; }
.sdv-preset {
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
.sdv-preset:hover { background: #eff6ff; border-color: #3b82f6; color: #1e3a5f; }
.sdv-preset-active { background: #2563eb; color: #fff; border-color: #2563eb; }
.sdv-preset-active:hover { background: #1d4ed8; color: #fff; border-color: #1d4ed8; }
.sdv-preset-hint { color: #94a3b8; font-size: 0.85em; margin-left: 4px; }
.sdv-preset-active .sdv-preset-hint { color: #c7d6f5; }

/* Playback controls */
.sdv-controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 12px;
  margin-top: 14px;
  border-top: 1px solid #e2e8f0;
}
.sdv-status {
  margin-left: auto;
  font-size: 0.86rem;
  color: #64748b;
}
.sdv-status b { color: #1e3a5f; }

/* Diagram / split */
.sdv-split {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 1fr);
  gap: 18px;
  align-items: start;
}
@media (max-width: 860px) {
  .sdv-split { grid-template-columns: 1fr; }
}
.sdv-svg-host {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  padding: 4px 0;
}
.sdv-svg-host svg {
  display: block;
  max-width: 100%;
  height: auto;
  flex: 0 0 auto;
}

/* Step log */
.sdv-step-log {
  max-height: 480px;
  overflow-y: auto;
  padding-right: 4px;
  border-left: 2px dashed #e2e8f0;
  padding-left: 14px;
}
.sdv-step-log::-webkit-scrollbar { width: 6px; }
.sdv-step-log::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
.sdv-step-log-empty {
  color: #94a3b8;
  font-size: 0.86rem;
  font-style: italic;
  padding: 14px 4px;
}
.sdv-step-entry {
  padding: 10px 12px;
  border-radius: 8px;
  background: #f8fafc;
  margin-bottom: 7px;
  border-left: 3px solid transparent;
  transition: opacity 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.sdv-step-entry-past { opacity: 0.55; }
.sdv-step-entry-current {
  background: #fef3c7;
  border-left-color: #b45309;
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.15);
}
.sdv-step-head { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.sdv-step-badge {
  background: #2563eb;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 24px;
  text-align: center;
}
.sdv-step-entry-current .sdv-step-badge { background: #b45309; }
.sdv-step-title { font-size: 0.84rem; font-weight: 700; color: #1e3a5f; }
.sdv-step-body { font-size: 0.86rem; color: #475569; line-height: 1.5; }
.sdv-step-body sup { font-size: 0.7em; }
.sdv-step-body b { color: #1e3a5f; }
.sdv-step-body .accent {
  background: #fef3c7; color: #78350f;
  padding: 1px 5px; border-radius: 3px;
  font-family: "Cambria Math", Georgia, serif; font-weight: 700;
}
.sdv-step-body .ink-indigo,
.sdv-step-body .ink-emerald,
.sdv-step-body .ink-rose,
.sdv-step-body .ink-violet,
.sdv-step-body .ink-slate,
.sdv-step-body .ink-ochre,
.sdv-step-body .ink-teal {
  font-weight: 700;
  font-family: "Cambria Math", Georgia, serif;
}
.sdv-step-body .ink-indigo  { color: #4338ca; }
.sdv-step-body .ink-emerald { color: #047857; }
.sdv-step-body .ink-rose    { color: #be185d; }
.sdv-step-body .ink-violet  { color: #7c3aed; }
.sdv-step-body .ink-slate   { color: #334155; }
.sdv-step-body .ink-ochre   { color: #854d0e; }
.sdv-step-body .ink-teal    { color: #0f766e; }

/* Result panel */
.sdv-result {
  padding: 18px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  text-align: center;
}
.sdv-result-label {
  font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em;
  font-weight: 600; opacity: 0.85; margin-bottom: 6px;
}
.sdv-result-eq {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.18rem; font-weight: 700; margin: 4px 0;
}
.sdv-result-eq-sub { font-size: 0.95rem; opacity: 0.9; margin-top: 6px; }
.sdv-factor-line {
  margin-top: 10px; padding-top: 10px;
  border-top: 1px dashed rgba(255, 255, 255, 0.35);
  font-size: 0.95rem;
}
.sdv-glow {
  background: #fbbf24; color: #78350f;
  padding: 3px 8px; border-radius: 5px;
  font-weight: 700;
}
`;

// =====================================================
//   LOGIC: math
// =====================================================
function computeSynthetic(coeffs, r) {
  const n = coeffs.length - 1;
  const valid = coeffs[0] !== 0;
  if (!valid) return { b: [], products: [], Q: [], R: 0, valid: false };
  const b = [coeffs[0]];
  const products = [null];
  for (let k = 1; k <= n; k++) {
    const p = r * b[k - 1];
    products.push(p);
    b.push(coeffs[k] + p);
  }
  return { b, products, Q: b.slice(0, n), R: b[n], valid: true };
}

function computeLongDivision(coeffs, divCoeffs) {
  const n = coeffs.length - 1;
  const D = divCoeffs.length - 1;
  if (D > n || divCoeffs[0] === 0) {
    return { Q: [], R: [...coeffs], multRows: [], workings: [], numIters: 0, valid: false, earlyTerminated: false };
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
    s += termText(coefArr[i], coefArr.length - 1 - i, s === '');
  }
  return s || '0';
}
function polyHTML(coefArr) {
  if (!coefArr || coefArr.length === 0) return '0';
  let s = '';
  for (let i = 0; i < coefArr.length; i++) {
    s += termHTML(coefArr[i], coefArr.length - 1 - i, s === '');
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

function divisorTextFromR(r) {
  if (r === 0) return 'x';
  if (r > 0) return 'x ' + MINUS + ' ' + fmt(r);
  return 'x + ' + fmt(-r);
}

// =====================================================
//   STEP COUNTS
// =====================================================
function totalSyntheticSteps(coeffs) {
  const n = coeffs.length - 1;
  return 2 * n + 1;
}
function totalLongDivSteps(coeffs, divCoeffs) {
  const data = computeLongDivision(coeffs, divCoeffs);
  return 3 * data.numIters;
}

// =====================================================
//   STEPS — synthetic (v1 tableau)
// =====================================================
function generateSyntheticSteps(coeffs, r) {
  const n = coeffs.length - 1;
  const data = computeSynthetic(coeffs, r);
  const { b, products, valid } = data;
  const steps = [];

  if (!valid) {
    steps.push({
      idx: 0, title: 'Cannot divide',
      body: 'Leading coefficient is 0 &mdash; fix it to continue.',
    });
    return steps;
  }

  steps.push({
    idx: 0, title: 'Set up the synthetic division',
    body: `Goal: divide <b>p(x) = ${polyHTML(coeffs)}</b> by <b>(${divisorTextFromR(r)})</b>. Write p(x)&apos;s coefficients in the top row. <span class="ink-slate">r = ${fmt(r)}</span> sits on the left. We&apos;ll fill in the <span class="ink-violet">product row</span> (each cell = r &times; the previous result) and the <span class="ink-emerald">result row</span> (each cell = coefficient + product). The last cell of the result row is the <span class="ink-ochre">remainder</span>; everything before it is the quotient.`,
  });

  steps.push({
    idx: 1, title: 'Drop the leading coefficient',
    body: `Bring the leading coefficient straight down to the result row: <span class="accent">${fmt(coeffs[0])}</span>. No math &mdash; just copy. This is the leading coefficient of the quotient (degree <span class="ink-emerald">${n - 1}</span>).`,
  });

  for (let k = 1; k <= n; k++) {
    const isLast = (k === n);
    const qDeg = n - k;
    steps.push({
      idx: 2 * k, title: 'Multiply by r',
      body: `Take the last result <span class="ink-emerald">${fmt(b[k - 1])}</span> and multiply by <span class="ink-slate">r = ${fmt(r)}</span>: <span class="accent">${fmt(r)} &times; ${fmt(b[k - 1])} = ${fmt(products[k])}</span>. Write it in the product row, under the next coefficient.`,
    });
    let addBody;
    if (isLast) {
      addBody = `Add the coefficient above and the product: <span class="accent">${fmt(coeffs[k])} + ${fmt(products[k])} = ${fmt(b[k])}</span>. This last cell is the <b>remainder</b>: <span class="accent">R = ${fmt(b[k])}</span>.`;
    } else {
      const qTermStr = termHTML(b[k], qDeg, true) || '0';
      addBody = `Add the coefficient above and the product: <span class="accent">${fmt(coeffs[k])} + ${fmt(products[k])} = ${fmt(b[k])}</span>. This is the next quotient coefficient (the ${termLabelHTML(qDeg)}): <span class="accent">${qTermStr}</span>.`;
    }
    steps.push({
      idx: 2 * k + 1,
      title: isLast ? 'Add \u2192 remainder' : 'Add \u2192 next coefficient',
      body: addBody,
    });
  }
  return steps;
}

// =====================================================
//   STEPS — long-division tableau (v2)
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
function generateLongDivSteps(coeffs, divCoeffs) {
  const n = coeffs.length - 1;
  const D = divCoeffs.length - 1;
  const data = computeLongDivision(coeffs, divCoeffs);
  const { Q, multRows, workings, numIters, valid, earlyTerminated } = data;
  const steps = [];

  if (!valid) {
    steps.push({
      idx: 0, title: 'Cannot divide',
      body: `The divisor&apos;s degree (${D}) is greater than the dividend&apos;s degree (${n}). Pick a smaller divisor degree.`,
    });
    return steps;
  }

  steps.push({
    idx: 0, title: 'Set up the division',
    body: `Goal: divide <b>p(x) = ${polyHTML(coeffs)}</b> by <b>(${polyHTML(divCoeffs)})</b>. Dividend goes under the bracket, divisor on the left. Each column tracks one power of x. (Synthetic division is exactly this long-division process applied to a linear divisor.)`,
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
        idx: 3 * k + 1, title: 'Divide leading terms',
        body: `The ${termLabelHTML(leadDeg)} of the running polynomial is <span class="accent">0</span>. Since there&apos;s no ${termLabelHTML(leadDeg)} to divide, the quotient gets a <span class="${cls}">0</span> at this position.`,
      });
      steps.push({
        idx: 3 * k + 2, title: 'Multiply back',
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
      idx: 3 * k + 1, title: 'Divide leading terms',
      body: `Leading term right now: <span class="accent">${leadStr}</span>. Divide by the divisor&apos;s leading term <span class="accent">${divLeadHTML}</span>: <span class="accent">${leadStr} &divide; ${divLeadHTML} = <span class="${cls}">${qTermStr}</span></span>. Write <span class="${cls}">${qTermStr}</span> above the bracket.`,
    });

    const multStartDeg = n - k;
    const multStr = polyFromTermsHTML(multRows[k], multStartDeg);
    steps.push({
      idx: 3 * k + 2, title: 'Multiply back',
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
//   SVG — synthetic 3-row tableau (v1)
// =====================================================
function svgTextInCell(cx, cy, text, color, fontSize, bold) {
  return `<text x="${cx}" y="${cy}" font-family="Cambria Math, Georgia, serif" font-size="${fontSize}" font-weight="${bold ? 800 : 700}" fill="${color}" text-anchor="middle">${text}</text>`;
}
function svgHighlightRect(x, y, w, h) {
  return `<rect x="${x + 2}" y="${y}" width="${w - 4}" height="${h}" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.8" />`;
}
function syntheticPhase(s) {
  if (s === 0) return { phase: 'setup' };
  if (s === 1) return { phase: 'drop' };
  const k = Math.floor(s / 2);
  const isAdd = (s % 2 === 1);
  return { phase: isAdd ? 'add' : 'multiply', k };
}

function buildSyntheticSVG(coeffs, r, stepIdx) {
  const { CELL_W, ROW_H, PAD_T, PAD_R, PAD_L, R_BOX_W, ROW_GAP, RESULT_GAP } = SVG_LAYOUT_SYN;
  const n = coeffs.length - 1;
  const data = computeSynthetic(coeffs, r);
  const { b, products, valid } = data;

  const colX = (i) => PAD_L + R_BOX_W + i * CELL_W;
  const colCx = (i) => colX(i) + CELL_W / 2;

  const row1Y = PAD_T;
  const row2Y = row1Y + ROW_H + ROW_GAP;
  const row3Y = row2Y + ROW_H + RESULT_GAP;

  const polyCols = n + 1;
  const svgW = PAD_L + R_BOX_W + polyCols * CELL_W + PAD_R;
  const svgH = row3Y + ROW_H + 36;

  let svg = `<svg viewBox="0 0 ${svgW} ${svgH}" width="${svgW}" height="${svgH}" xmlns="http://www.w3.org/2000/svg">`;
  svg += '<defs><marker id="arrAccent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#b45309" /></marker></defs>';

  if (!valid) {
    svg += `<text x="${svgW / 2}" y="${svgH / 2}" font-family="inherit" font-size="14" fill="#94a3b8" text-anchor="middle">leading coefficient must be non-zero</text></svg>`;
    return svg;
  }

  // Vertical bar after r-area, horizontal bar between row2 and row3
  const vbarX = PAD_L + R_BOX_W - 6;
  svg += `<line x1="${vbarX}" y1="${row1Y - 6}" x2="${vbarX}" y2="${row2Y + ROW_H + 2}" stroke="#475569" stroke-width="2" stroke-linecap="round" />`;
  const hbarY = row2Y + ROW_H + RESULT_GAP / 2;
  svg += `<line x1="${vbarX}" y1="${hbarY}" x2="${colX(polyCols)}" y2="${hbarY}" stroke="#475569" stroke-width="2" stroke-linecap="round" />`;

  // Double-bar separating quotient from remainder (in result row)
  if (n >= 1) {
    svg += `<line x1="${colX(n) - 4}" y1="${row3Y - 1}" x2="${colX(n) - 4}" y2="${row3Y + ROW_H + 1}" stroke="#475569" stroke-width="1.5" />`;
    svg += `<line x1="${colX(n) - 8}" y1="${row3Y - 1}" x2="${colX(n) - 8}" y2="${row3Y + ROW_H + 1}" stroke="#475569" stroke-width="1.5" />`;
  }

  // r value display
  svg += `<text x="${(PAD_L + vbarX) / 2}" y="${(row1Y + row2Y + ROW_H) / 2 + 5}" font-family="Cambria Math, Georgia, serif" font-size="17" font-weight="700" fill="#334155" text-anchor="middle">r = ${fmt(r)}</text>`;

  // Phase highlights
  const phase = syntheticPhase(stepIdx);
  if (phase.phase === 'drop') {
    svg += svgHighlightRect(colX(0), row1Y, CELL_W, ROW_H);
    svg += svgHighlightRect(colX(0), row3Y, CELL_W, ROW_H);
    svg += `<path d="M ${colCx(0)} ${row1Y + ROW_H + 4} L ${colCx(0)} ${row3Y - 6}" stroke="#b45309" stroke-width="2.2" stroke-dasharray="4 3" fill="none" marker-end="url(#arrAccent)" />`;
  } else if (phase.phase === 'multiply') {
    const k = phase.k;
    svg += svgHighlightRect(colX(k - 1), row3Y, CELL_W, ROW_H);
    svg += svgHighlightRect(colX(k), row2Y, CELL_W, ROW_H);
    const startX = colCx(k - 1) + 16;
    const startY = row3Y - 4;
    const endX = colCx(k) - 10;
    const endY = row2Y + ROW_H + 4;
    const midX = (startX + endX) / 2;
    svg += `<path d="M ${startX} ${startY} Q ${midX} ${(startY + endY) / 2 - 14}, ${endX} ${endY}" stroke="#b45309" stroke-width="2.2" stroke-dasharray="4 3" fill="none" marker-end="url(#arrAccent)" />`;
    svg += `<text x="${midX}" y="${(startY + endY) / 2 - 4}" font-family="Cambria Math, Georgia, serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">&times; ${fmt(r)}</text>`;
  } else if (phase.phase === 'add') {
    const k = phase.k;
    svg += svgHighlightRect(colX(k), row1Y, CELL_W, ROW_H);
    svg += svgHighlightRect(colX(k), row2Y, CELL_W, ROW_H);
    svg += svgHighlightRect(colX(k), row3Y, CELL_W, ROW_H);
    svg += `<text x="${colX(k) - 12}" y="${row2Y + ROW_H / 2 + 6}" font-family="Cambria Math, Georgia, serif" font-size="17" font-weight="800" fill="#b45309" text-anchor="middle">+</text>`;
  }

  // Row 1: coefficients (always shown)
  for (let i = 0; i < polyCols; i++) {
    svg += svgTextInCell(colCx(i), row1Y + ROW_H / 2 + 5, fmt(coeffs[i]), '#1e3a5f', 15, true);
  }

  // Row 2: products (shown progressively)
  for (let k = 1; k <= n; k++) {
    if (stepIdx >= 2 * k) {
      svg += svgTextInCell(colCx(k), row2Y + ROW_H / 2 + 5, fmt(products[k]), '#7c3aed', 15, true);
    }
  }

  // Row 3: results
  for (let k = 0; k <= n; k++) {
    const showAt = (k === 0) ? 1 : 2 * k + 1;
    if (stepIdx >= showAt) {
      const isRemainder = (k === n);
      const color = isRemainder ? '#b45309' : '#047857';
      const fontSize = isRemainder ? 17 : 16;
      svg += svgTextInCell(colCx(k), row3Y + ROW_H / 2 + 5, fmt(b[k]), color, fontSize, true);
    }
  }

  // End labels
  if (stepIdx >= totalSyntheticSteps(coeffs) && n >= 1) {
    const qLeft = colX(0);
    const qRight = colX(n) - 10;
    svg += `<text x="${(qLeft + qRight) / 2}" y="${row3Y + ROW_H + 18}" font-family="Cambria Math, Georgia, serif" font-size="10.5" font-weight="700" fill="#047857" text-anchor="middle">quotient coefficients</text>`;
    svg += `<text x="${colCx(n)}" y="${row3Y + ROW_H + 18}" font-family="Cambria Math, Georgia, serif" font-size="10.5" font-weight="700" fill="#b45309" text-anchor="middle">remainder</text>`;
  }

  svg += '</svg>';
  return svg;
}

// =====================================================
//   SVG — long-division tableau (v2)
// =====================================================
function buildLongDivisionSVG(coeffs, divCoeffs, stepIdx) {
  const { CELL_W, ROW_H, PAD_T, PAD_R, PAD_L, FONT_MAIN, FONT_QUOTIENT, QUOT_GAP } = SVG_LAYOUT_LD;
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
    svg += `<text x="${svgW / 2}" y="${svgH / 2}" font-family="inherit" font-size="14" fill="#94a3b8" text-anchor="middle">divisor degree must be \u2264 dividend degree</text></svg>`;
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
//   PolyTermCard
// =====================================================
function PolyTermCard({ value, degree, isLeading, onChange }) {
  const [text, setText] = useState(String(value));

  useEffect(() => {
    const parsed = parseInt(text, 10);
    const parsedOrZero = isNaN(parsed) ? 0 : parsed;
    if (parsedOrZero !== value) setText(String(value));
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
    <div className={`sdv-term-card ${hasError ? 'sdv-term-card-error' : ''}`}>
      <input
        type="number"
        step="1"
        className="sdv-term-card-input"
        value={text}
        onChange={handleChange}
      />
      <div className="sdv-term-card-var">{varEl}</div>
    </div>
  );
}

// =====================================================
//   PolynomialInput (dividend) — Variant B
// =====================================================
function PolynomialInput({
  label, previewPrefix,
  degree, minDegree, maxDegree, coeffs,
  onDegreeChange, onCoefficientChange, onRandomize,
}) {
  const previewHTML = `${previewPrefix} ${polyHTML(coeffs)}`;
  return (
    <div className="sdv-poly-block">
      <div className="sdv-poly-row">
        <div className="sdv-module">
          <div className="sdv-module-label">{label}</div>
          <div className="sdv-module-stepper-wrap">
            <span className="sdv-module-stepper-hint">degree</span>
            <div className="sdv-stepper">
              <button
                type="button"
                className="sdv-stepper-btn"
                onClick={() => onDegreeChange(degree - 1)}
                disabled={degree <= minDegree}
                aria-label="decrease degree"
              >
                −
              </button>
              <span className="sdv-stepper-val">{degree}</span>
              <button
                type="button"
                className="sdv-stepper-btn"
                onClick={() => onDegreeChange(degree + 1)}
                disabled={degree >= maxDegree}
                aria-label="increase degree"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="sdv-cards-area">
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

        <button type="button" className="sdv-btn" onClick={onRandomize}>
          🎲 Generate random
        </button>
      </div>

      <div className="sdv-preview-line">
        <span className="sdv-preview-label">Preview</span>
        <span className="sdv-preview-eq" dangerouslySetInnerHTML={{ __html: previewHTML }} />
      </div>
    </div>
  );
}

// =====================================================
//   RDivisorInput (single integer r — locked as (x − r))
// =====================================================
function RTermCard({ value, onChange }) {
  const [text, setText] = useState(String(value));

  useEffect(() => {
    const parsed = parseInt(text, 10);
    const parsedOrZero = isNaN(parsed) ? 0 : parsed;
    if (parsedOrZero !== value) setText(String(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (e) => {
    const v = e.target.value;
    setText(v);
    const parsed = parseInt(v, 10);
    onChange(isNaN(parsed) ? 0 : parsed);
  };

  return (
    <div className="sdv-term-card sdv-r-card">
      <input
        type="number"
        step="1"
        className="sdv-term-card-input"
        value={text}
        onChange={handleChange}
      />
      <div className="sdv-term-card-var">r</div>
    </div>
  );
}

function RDivisorInput({ r, onRChange, onRandomize }) {
  return (
    <div className="sdv-poly-block">
      <div className="sdv-poly-row">
        <div className="sdv-module">
          <div className="sdv-module-label">Divisor</div>
          <div className="sdv-module-form-hint">(x {MINUS} r)</div>
        </div>

        <div className="sdv-cards-area">
          <RTermCard value={r} onChange={onRChange} />
        </div>

        <button type="button" className="sdv-btn" onClick={onRandomize}>
          🎲 Generate random
        </button>
      </div>

      <div className="sdv-preview-line">
        <span className="sdv-preview-label">Preview</span>
        <span className="sdv-preview-eq">({divisorTextFromR(r)})</span>
      </div>
    </div>
  );
}

// =====================================================
//   LayoutToggle (v1 ↔ v2)
// =====================================================
function LayoutToggle({ layout, onChange }) {
  return (
    <div className="sdv-layout-toggle-row">
      <span className="sdv-layout-label">Layout</span>
      <div className="sdv-layout-seg">
        <button
          type="button"
          className={layout === 'tableau' ? 'sdv-layout-seg-active' : ''}
          onClick={() => onChange('tableau')}
        >
          3-row synthetic
        </button>
        <button
          type="button"
          className={layout === 'longdiv' ? 'sdv-layout-seg-active' : ''}
          onClick={() => onChange('longdiv')}
        >
          Long-division tableau
        </button>
      </div>
    </div>
  );
}

// =====================================================
//   PresetsAccordion
// =====================================================
function PresetsAccordion({ presets, activeIdx, onSelect }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`sdv-accordion ${open ? 'sdv-accordion-open' : ''}`}>
      <button
        type="button"
        className="sdv-accordion-header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="sdv-accordion-icon">▶</span>
        Use predefined examples
        {!open && (
          <span className="sdv-accordion-collapsed-hint">
            — click to pick a worked example
          </span>
        )}
      </button>
      {open && (
        <div className="sdv-accordion-content">
          <div className="sdv-presets">
            {presets.map((p, i) => (
              <button
                key={i}
                type="button"
                className={`sdv-preset ${activeIdx === i ? 'sdv-preset-active' : ''}`}
                onClick={() => onSelect(i)}
              >
                {p.name}
                <span className="sdv-preset-hint">· {p.hint}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// =====================================================
//   PlaybackControls
// =====================================================
function PlaybackControls({ stepIdx, maxStep, playing, onPrev, onNext, onAuto, onReset }) {
  const autoLabel = playing
    ? '⏸ Pause'
    : (stepIdx >= maxStep ? 'Replay' : 'Auto-run');
  return (
    <div className="sdv-controls">
      <button type="button" className="sdv-btn" onClick={onPrev} disabled={stepIdx === 0}>◀ Back</button>
      <button type="button" className="sdv-btn" onClick={onNext} disabled={stepIdx >= maxStep}>Next ▶</button>
      <button
        type="button"
        className={`sdv-btn ${playing ? 'sdv-btn-playing' : 'sdv-btn-primary'}`}
        onClick={onAuto}
      >
        {autoLabel}
      </button>
      <button type="button" className="sdv-btn" onClick={onReset}>↺ Reset</button>
      <div className="sdv-status">step <b>{stepIdx}</b> / {maxStep}</div>
    </div>
  );
}

// =====================================================
//   StepEntry / StepLog
// =====================================================
function StepEntry({ entry, isCurrent }) {
  const cls = `sdv-step-entry ${isCurrent ? 'sdv-step-entry-current' : 'sdv-step-entry-past'}`;
  return (
    <div className={cls} data-current={isCurrent ? 'true' : 'false'}>
      <div className="sdv-step-head">
        <span className="sdv-step-badge">{entry.idx}</span>
        <span className="sdv-step-title" dangerouslySetInnerHTML={{ __html: entry.title }} />
      </div>
      <div className="sdv-step-body" dangerouslySetInnerHTML={{ __html: entry.body }} />
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
    <div className="sdv-step-log" ref={logRef}>
      {visible.length === 0 ? (
        <div className="sdv-step-log-empty">Click Next to begin.</div>
      ) : (
        visible.map((entry) => (
          <StepEntry key={entry.idx} entry={entry} isCurrent={entry.idx === stepIdx} />
        ))
      )}
    </div>
  );
}

// =====================================================
//   ResultPanel
// =====================================================
function FactorLine({ remZero, r, R, divStr }) {
  if (remZero) {
    return (
      <div className="sdv-factor-line">
        R = 0 → <span className="sdv-glow">p({fmt(r)}) = 0</span>:{' '}
        <b>r = {fmt(r)} is a root</b>, and <b>{divStr}</b> is a factor of p(x).
      </div>
    );
  }
  return (
    <div className="sdv-factor-line">
      Remainder R = <span className="sdv-glow">{fmt(R)}</span>. By the remainder theorem,{' '}
      <b>p({fmt(r)}) = {fmt(R)}</b>. Since R ≠ 0, {divStr} is not a factor.
    </div>
  );
}

function ResultPanel({ coeffs, r }) {
  const data = computeSynthetic(coeffs, r);
  if (!data.valid) return null;
  const { Q, R } = data;
  const remZero = Math.abs(R) < 1e-10;
  const Qstr = polyHTML(Q);
  const Rstr = fmt(R);
  const divStr = `(${divisorTextFromR(r)})`;

  return (
    <div className="sdv-result">
      <div className="sdv-result-label">Result</div>
      <div
        className="sdv-result-eq"
        dangerouslySetInnerHTML={{
          __html: `p(x) = ${divStr} &middot; (${Qstr})${remZero ? ' + 0' : ' + ' + Rstr}`,
        }}
      />
      <div
        className="sdv-result-eq sdv-result-eq-sub"
        dangerouslySetInnerHTML={{
          __html: `Q(x) = ${Qstr} &nbsp;&middot;&nbsp; R = ${Rstr}`,
        }}
      />
      <FactorLine remZero={remZero} r={r} R={R} divStr={divStr} />
    </div>
  );
}

// =====================================================
//   Diagrams
// =====================================================
function SyntheticDiagram({ coeffs, r, stepIdx }) {
  const svg = buildSyntheticSVG(coeffs, r, stepIdx);
  return <div className="sdv-svg-host" dangerouslySetInnerHTML={{ __html: svg }} />;
}
function LongDivDiagram({ coeffs, divCoeffs, stepIdx }) {
  const svg = buildLongDivisionSVG(coeffs, divCoeffs, stepIdx);
  return <div className="sdv-svg-host" dangerouslySetInnerHTML={{ __html: svg }} />;
}

// =====================================================
//   MAIN COMPONENT
// =====================================================
export default function SyntheticDivisionVisualizer() {
  const [activePresetIdx, setActivePresetIdx] = useState(0);
  const [coeffs, setCoeffs] = useState(() => [...PRESETS[0].coeffs]);
  const [r, setR] = useState(PRESETS[0].r);
  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [layout, setLayout] = useState('tableau'); // 'tableau' = v1, 'longdiv' = v2

  const dividendDegree = coeffs.length - 1;
  const divCoeffs = useMemo(() => [1, -r], [r]);

  const maxStep = useMemo(() => (
    layout === 'tableau'
      ? totalSyntheticSteps(coeffs)
      : totalLongDivSteps(coeffs, divCoeffs)
  ), [layout, coeffs, divCoeffs]);

  const steps = useMemo(() => (
    layout === 'tableau'
      ? generateSyntheticSteps(coeffs, r)
      : generateLongDivSteps(coeffs, divCoeffs)
  ), [layout, coeffs, r, divCoeffs]);

  let errorMsg = '';
  if (coeffs[0] === 0) errorMsg = 'Dividend leading coefficient cannot be 0.';

  const stopAuto = useCallback(() => setPlaying(false), []);

  // Auto-run
  useEffect(() => {
    if (!playing) return undefined;
    if (stepIdx >= maxStep) { setPlaying(false); return undefined; }
    const timer = setTimeout(() => setStepIdx((s) => s + 1), AUTO_RUN_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [playing, stepIdx, maxStep]);

  // Clamp stepIdx when maxStep shrinks (e.g. layout switch with different step count)
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
    const next = new Array(newDeg + 1).fill(0);
    for (let i = 0; i <= Math.min(newDeg, coeffs.length - 1); i++) next[i] = coeffs[i];
    if (next[0] === 0) next[0] = 1;
    setCoeffs(next);
    resetBeforeInputChange();
  };
  const onDividendCoefChange = (idx, value) => {
    const next = [...coeffs];
    next[idx] = value;
    setCoeffs(next);
    resetBeforeInputChange();
  };
  const onRChange = (value) => {
    let v = value;
    if (v < R_MIN) v = R_MIN;
    if (v > R_MAX) v = R_MAX;
    setR(v);
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
  const randomizeR = () => {
    setR(Math.floor(Math.random() * 11) - 5);
    resetBeforeInputChange();
  };
  const selectPreset = (i) => {
    const p = PRESETS[i];
    setActivePresetIdx(i);
    setCoeffs([...p.coeffs]);
    setR(p.r);
    setPlaying(false);
    setStepIdx(0);
  };

  const onLayoutChange = (next) => {
    if (next === layout) return;
    setLayout(next);
    setPlaying(false);
    setStepIdx(0);
  };

  const onPrev = () => { if (stepIdx <= 0) return; stopAuto(); setStepIdx((s) => s - 1); };
  const onNext = () => { if (stepIdx >= maxStep) return; stopAuto(); setStepIdx((s) => s + 1); };
  const onAuto = () => {
    if (playing) { setPlaying(false); return; }
    if (stepIdx >= maxStep) setStepIdx(0);
    setPlaying(true);
  };
  const onReset = () => { stopAuto(); setStepIdx(0); };

  const showResult = stepIdx >= maxStep && maxStep > 0 && !errorMsg;

  return (
    <div className="sdv-wrap">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="sdv-card">
        <PolynomialInput
          label="Dividend"
          previewPrefix="p(x) ="
          degree={dividendDegree}
          minDegree={DIVIDEND_MIN}
          maxDegree={DIVIDEND_MAX}
          coeffs={coeffs}
          onDegreeChange={onDividendDegreeChange}
          onCoefficientChange={onDividendCoefChange}
          onRandomize={randomizeDividend}
        />

        <div className="sdv-divide-sign-row">÷</div>

        <RDivisorInput r={r} onRChange={onRChange} onRandomize={randomizeR} />

        {errorMsg && <div className="sdv-error-row">{errorMsg}</div>}

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

      <div className="sdv-card">
        <LayoutToggle layout={layout} onChange={onLayoutChange} />
        <div className="sdv-split">
          {layout === 'tableau'
            ? <SyntheticDiagram coeffs={coeffs} r={r} stepIdx={stepIdx} />
            : <LongDivDiagram coeffs={coeffs} divCoeffs={divCoeffs} stepIdx={stepIdx} />
          }
          <StepLog steps={steps} stepIdx={stepIdx} />
        </div>
      </div>

      {showResult && (
        <div className="sdv-card">
          <ResultPanel coeffs={coeffs} r={r} />
        </div>
      )}
    </div>
  );
}