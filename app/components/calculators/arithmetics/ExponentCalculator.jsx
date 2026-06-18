
'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import defaultExplanations from './exponentCalculatorExplanations';
import {processContent}  from '../../../../app/utils/contentProcessor'

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

function fractionFromDecimal(d) {
  if (!isFinite(d) || isNaN(d) || d === 0) return null;
  const tolerance = 1e-7;
  let h1 = 1, h0 = 0, k1 = 0, k0 = 1;
  let b = d;
  do {
    const a = Math.floor(b);
    let aux = h1; h1 = a * h1 + h0; h0 = aux;
    aux = k1; k1 = a * k1 + k0; k0 = aux;
    if (b === a) break;
    b = 1 / (b - a);
    if (k1 > 10000) return null;
  } while (Math.abs(d - h1 / k1) > Math.abs(d) * tolerance);
  return { num: h1, den: k1 };
}

function ordinalize(n) {
  const map = { 0: 'to the zeroth', 1: 'to the first', 2: 'squared', 3: 'cubed' };
  if (map[n] !== undefined) return map[n];
  if (n === -1) return 'reciprocal';
  return `to the power of ${n}`;
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
    const signature = src + '|' + (container.dataset ? '' : '');
    if (el.dataset.mathRendered === signature) return;
    try {
      window.katex.render(src, el, { throwOnError: false, displayMode: false });
      el.dataset.mathRendered = signature;
    } catch (e) {
      el.textContent = src;
    }
  });
}

/* Deep merge override into defaults (objects only; arrays/functions/primitives replace) */
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

/* Helpers bundle passed to explanation functions */
const HELPERS = {
  fmt,
  fmtSci,
  withCommas,
  trimTrailingZeros,
  fmtTable,
  fractionFromDecimal,
  ordinalize
};

/* SVG icons for copy button */
const COPY_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const CHECK_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

/* =====================================================================
   Embedded CSS
   ===================================================================== */

const STYLES = `
.ec-root :root,
.ec-root {
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
  --ms-warning-bg:     #fef3c7;
  --ms-error:          #b91c1c;
  --ms-error-bg:       #fee2e2;

  --ms-font-serif: 'Playfair Display', Georgia, serif;
  --ms-font-sans:  'Inter', -apple-system, sans-serif;
  --ms-font-mono:  'JetBrains Mono', 'SF Mono', Menlo, monospace;

  --ms-radius-sm: 6px;
  --ms-radius:    10px;
  --ms-radius-lg: 14px;

  --ms-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
  --ms-shadow:    0 2px 6px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
}

.ec-root, .ec-root * { box-sizing: border-box; }
.ec-root {
  color: var(--ms-text);
  font-family: var(--ms-font-sans);
  font-size: 1rem;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.ec-root .page {
  width: 94%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 1.25rem 0 3rem;
}

.ec-root .page-header { text-align: center; margin-bottom: 1rem; }
.ec-root .page-title {
  font-family: var(--ms-font-serif);
  font-weight: 700;
  font-size: 2rem;
  margin: 0 0 0.3rem;
  color: var(--ms-primary-deeper);
  letter-spacing: -0.01em;
}
.ec-root .page-sub { font-size: 0.92rem; color: var(--ms-text-soft); margin: 0; }

.ec-root .mode-tabs {
  display: flex;
  gap: 0.5rem;
  background: var(--ms-card-bg);
  border: 1px solid var(--ms-border);
  border-radius: 999px;
  padding: 0.32rem;
  margin: 0 auto 1rem;
  width: fit-content;
  box-shadow: var(--ms-shadow-sm);
}
.ec-root .mode-tab {
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.5rem 1.4rem;
  background: transparent;
  border: none;
  border-radius: 999px;
  color: var(--ms-text-soft);
  cursor: pointer;
  transition: all 0.15s;
}
.ec-root .mode-tab:hover { color: var(--ms-text); }
.ec-root .mode-tab.is-active {
  background: var(--ms-primary);
  color: #fff;
  box-shadow: 0 2px 6px rgba(29, 78, 216, 0.25);
}

.ec-root .main-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}
@media (max-width: 1020px) { .ec-root .main-grid { grid-template-columns: 1fr; } }

.ec-root .card {
  background: var(--ms-card-bg);
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius-lg);
  box-shadow: var(--ms-shadow);
  margin-bottom: 1.25rem;
  overflow: hidden;
}
.ec-root .card-header {
  background: var(--ms-primary);
  color: #fff;
  padding: 0.95rem 1.5rem;
  font-family: var(--ms-font-serif);
  font-weight: 600;
  font-size: 1.2rem;
}
.ec-root .card-body { padding: 1.6rem 1.7rem; }

.ec-root .mode-panel { display: none; }
.ec-root .mode-panel.is-active { display: block; }

.ec-root .type-row {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.85rem;
}
.ec-root .type-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ms-text-soft);
  margin-bottom: 0;
  flex-shrink: 0;
}
.ec-root .type-controls {
  display: flex;
  align-items: stretch;
  gap: 0;
  flex-wrap: nowrap;
  min-width: 0;
  flex: 1;
}
.ec-root .type-pills {
  display: flex;
  gap: 0.45rem;
  flex-shrink: 0;
  align-items: center;
}
.ec-root .type-pill {
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.56rem 1.12rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: var(--ms-shadow-sm);
  min-width: 80px;
}
.ec-root .type-pill:hover {
  background: var(--ms-primary-light);
  border-color: var(--ms-primary);
  color: var(--ms-primary-dark);
}
.ec-root .type-pill.is-active {
  background: var(--ms-primary);
  border-color: var(--ms-primary);
  color: #fff;
}

.ec-root .exp-chips-inline {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex: 1;
  min-width: 0;
  padding-left: 0.7rem;
  margin-left: 0.7rem;
}
.ec-root .exp-chips-inline[hidden] { display: none; }
.ec-root .exp-chips-divider {
  width: 1px;
  background: var(--ms-border-strong);
  flex-shrink: 0;
  align-self: stretch;
}
.ec-root .exp-chips-scroll {
  display: flex;
  gap: 0.4rem;
  overflow-x: auto;
  flex: 1;
  min-width: 0;
  scrollbar-width: thin;
  scrollbar-color: var(--ms-border-strong) transparent;
  padding-bottom: 2px;
  scroll-behavior: smooth;
}
.ec-root .exp-chips-scroll::-webkit-scrollbar { height: 5px; }
.ec-root .exp-chips-scroll::-webkit-scrollbar-track { background: transparent; }
.ec-root .exp-chips-scroll::-webkit-scrollbar-thumb {
  background: var(--ms-border-strong);
  border-radius: 3px;
}
.ec-root .exp-chip {
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.32rem 0.64rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: var(--ms-shadow-sm);
  min-width: 40px;
  flex-shrink: 0;
  white-space: nowrap;
  line-height: 1.4;
}
.ec-root .exp-chip sup { font-size: 0.78em; }
.ec-root .exp-chip:hover {
  background: var(--ms-primary-light);
  border-color: var(--ms-primary);
  color: var(--ms-primary-dark);
}
.ec-root .exp-chip.is-active {
  background: var(--ms-primary);
  border-color: var(--ms-primary);
  color: #fff;
}

.ec-root .slot-input {
  text-align: center;
  font-family: var(--ms-font-mono);
  font-weight: 500;
  background: #fff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  color: var(--ms-text);
  outline: none;
  transition: all 0.12s;
  padding: 0 0.5rem;
}
.ec-root .slot-input:focus {
  border-color: var(--ms-primary);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.14);
}
.ec-root .slot-input:read-only {
  background: #f1f5f9;
  color: var(--ms-text-muted);
  cursor: not-allowed;
}
.ec-root .exp-stack {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.2rem;
}

.ec-root .slot-input.base { width: 108px; height: 52px; font-size: 1.56rem; }
.ec-root .slot-input.exp  { width: 69px;  height: 39px; font-size: 1rem; margin-top: -16px; }

.ec-root .slot-input.cmp-base { width: 64px; height: 43px; font-size: 1.2rem; }
.ec-root .slot-input.cmp-exp  { width: 45px; height: 30px; font-size: 0.82rem; margin-top: -13px; }

.ec-root .slot-input.rule-base { width: 46px; height: 35px; font-size: 0.92rem; }
.ec-root .slot-input.rule-exp  { width: 37px; height: 24px; font-size: 0.78rem; }
.ec-root .exp-stack > .slot-input.rule-exp { margin-top: -13px; }
.ec-root .exp-stack > .exp-with-prefix     { margin-top: -13px; }
.ec-root .exp-stack > .rule-exp-static     { margin-top: -13px; }

.ec-root .math-glyph {
  font-family: 'KaTeX_Main', 'Times New Roman', serif;
  font-size: 1.28rem;
  line-height: 1;
  color: var(--ms-text);
  display: inline-flex;
  align-items: center;
  padding: 0 0.05rem;
}

.ec-root .rule-exp-static {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius-sm);
  color: var(--ms-text-muted);
  width: 30px;
  height: 24px;
  font-size: 0.78rem;
  font-family: var(--ms-font-mono);
  font-weight: 500;
}

.ec-root .exp-with-prefix {
  display: inline-flex;
  align-items: center;
  gap: 0.12rem;
}
.ec-root .exp-with-prefix .slot-input.rule-exp { margin-top: 0; }
.ec-root .neg-prefix {
  font-family: 'KaTeX_Main', 'Times New Roman', serif;
  font-size: 1.05rem;
  color: var(--ms-text);
  line-height: 1;
  padding-bottom: 1px;
}

.ec-root .fraction {
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 0.3rem;
  vertical-align: middle;
}
.ec-root .frac-num, .ec-root .frac-den {
  padding: 0.4rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  min-height: 50px;
}
.ec-root .frac-num { border-bottom: 2px solid var(--ms-text); }

.ec-root .expression {
  background: #f8faff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: 1.65rem 1.1rem 0.95rem;
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 1px 4px rgba(29, 78, 216, 0.06);
}
.ec-root .expr-render { min-width: 30px; }
.ec-root .expr-render .katex { font-size: 1.68rem !important; }
.ec-root .result-inline {
  font-family: 'KaTeX_Main', 'Times New Roman', serif;
  font-size: 1.6rem;
  color: var(--ms-text);
  min-width: 86px;
  text-align: left;
}
.ec-root .result-inline.placeholder {
  color: var(--ms-text-muted);
  font-style: italic;
  font-size: 0.96rem;
  font-family: var(--ms-font-sans);
}

.ec-root .actions { display: flex; gap: 0.55rem; margin-top: 0.8rem; }
.ec-root .btn {
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.64rem 1.6rem;
  border-radius: var(--ms-radius);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.1s;
}
.ec-root .btn:active { transform: translateY(1px); }
.ec-root .btn-primary { background: var(--ms-primary); color: #fff; flex: 1; }
.ec-root .btn-primary:hover { background: var(--ms-primary-hover); }
.ec-root .btn-secondary {
  background: #fff;
  color: var(--ms-text-soft);
  border-color: var(--ms-border-strong);
}
.ec-root .btn-secondary:hover {
  background: #f8fafc;
  color: var(--ms-text);
  border-color: var(--ms-text-muted);
}

.ec-root .result {
  background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
  border-left: 4px solid var(--ms-primary);
  padding: 0.85rem 1.2rem;
}
.ec-root .result-eyebrow {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: 0.3rem;
}
.ec-root .result-primary {
  font-size: 1.55rem;
  color: var(--ms-text);
  margin-bottom: 0.55rem;
  min-height: 30px;
}
.ec-root .result-primary .katex { font-size: 1.45rem !important; }
.ec-root .result-forms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
  gap: 0.52rem;
  margin-bottom: 0.82rem;
}
.ec-root .result-form {
  position: relative;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: 0.52rem 0.72rem;
  padding-right: 1.7rem;
}
.ec-root .result-form-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: 0.24rem;
}
.ec-root .result-form-value {
  font-family: var(--ms-font-mono);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ms-text);
  word-break: break-all;
  min-height: 1.1rem;
}
.ec-root .result-form-value .katex { font-size: 0.88rem !important; }
.ec-root .result-form-copy {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  background: transparent;
  border: none;
  color: var(--ms-text-muted);
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}
.ec-root .result-form-copy:hover {
  background: rgba(29, 78, 216, 0.08);
  color: var(--ms-primary);
}
.ec-root .result-form-copy.is-copied {
  color: var(--ms-success);
  background: rgba(13, 148, 136, 0.12);
}

.ec-root .neighbors { margin-top: 0.7rem; padding-top: 0.7rem; border-top: 1px solid var(--ms-primary-light); }
.ec-root .neighbors-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: 0.5rem;
}
.ec-root .neighbors-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.3rem;
}
.ec-root .neighbor {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: 0.44rem 0.24rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s;
}
.ec-root .neighbor:hover { background: #fff; border-color: var(--ms-primary); }
.ec-root .neighbor.is-current { background: var(--ms-primary); border-color: var(--ms-primary); }
.ec-root .neighbor.is-current .neighbor-label .katex,
.ec-root .neighbor.is-current .neighbor-value { color: #fff !important; }
.ec-root .neighbor.is-current .neighbor-label .katex * { color: #fff !important; }
.ec-root .neighbor-label { margin-bottom: 0.14rem; }
.ec-root .neighbor-label .katex { font-size: 0.82rem !important; }
.ec-root .neighbor-value {
  font-family: var(--ms-font-mono);
  font-size: 0.7rem;
  color: var(--ms-text-soft);
}
@media (max-width: 760px) { .ec-root .neighbors-grid { grid-template-columns: repeat(4, 1fr); } }

.ec-root .history-strip {
  margin-top: 0.7rem;
  padding-top: 0.7rem;
  border-top: 1px solid var(--ms-primary-light);
}
.ec-root .history-strip[hidden] { display: none; }
.ec-root .history-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: 0.45rem;
}
.ec-root .history-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.32rem;
}
.ec-root .history-chip {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: 0.28rem 0.56rem;
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  cursor: pointer;
  transition: all 0.1s;
  font-family: var(--ms-font-mono);
  font-size: 0.74rem;
  color: var(--ms-text);
}
.ec-root .history-chip:hover {
  background: #fff;
  border-color: var(--ms-primary);
}
.ec-root .history-chip .h-expr .katex { font-size: 0.78rem !important; }
.ec-root .history-chip .h-arrow {
  color: var(--ms-text-muted);
  font-family: 'KaTeX_Main', serif;
}
.ec-root .history-chip .h-value {
  color: var(--ms-text-soft);
}

.ec-root .powers-table { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
.ec-root .powers-table thead th {
  background: #f8fafc;
  border-bottom: 1px solid var(--ms-border);
  padding: 0.7rem 0.95rem;
  text-align: left;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
}
.ec-root .powers-table thead th:last-child { text-align: right; }
.ec-root .powers-table tbody tr {
  border-bottom: 1px solid var(--ms-border);
  cursor: pointer;
  transition: background 0.1s;
}
.ec-root .powers-table tbody tr:last-child { border-bottom: none; }
.ec-root .powers-table tbody tr:hover { background: #f8faff; }
.ec-root .powers-table tbody tr.is-current { background: var(--ms-primary-light); }
.ec-root .powers-table tbody tr.is-current td { color: var(--ms-primary-dark); font-weight: 600; }
.ec-root .powers-table tbody tr.is-current .katex * { color: var(--ms-primary-dark) !important; }
.ec-root .powers-table td { padding: 0.55rem 0.95rem; }
.ec-root .powers-table td:nth-child(1) { font-family: var(--ms-font-mono); color: var(--ms-text-soft); width: 72px; }
.ec-root .powers-table td:nth-child(2) { width: 100px; }
.ec-root .powers-table td:nth-child(2) .katex { font-size: 1.02rem !important; }
.ec-root .powers-table td:nth-child(3) { font-family: var(--ms-font-mono); text-align: right; word-break: break-all; }

.ec-root .rule-list { display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1rem; }
.ec-root .rule-pill {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.62rem 0.85rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  cursor: pointer;
  transition: all 0.1s;
  text-align: left;
  font-family: inherit;
  width: 100%;
}
.ec-root .rule-pill:hover { background: var(--ms-primary-light); border-color: var(--ms-primary); }
.ec-root .rule-pill.is-active { background: var(--ms-primary); border-color: var(--ms-primary); }
.ec-root .rule-pill.is-active .rule-name, .ec-root .rule-pill.is-active .rule-formula { color: #fff; }
.ec-root .rule-pill.is-active .rule-formula .katex * { color: #fff !important; }
.ec-root .rule-name {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ms-text);
  min-width: 132px;
}
.ec-root .rule-formula { flex: 1; }
.ec-root .rule-formula .katex { font-size: 0.92rem !important; }

.ec-root .rule-inputs {
  background: #f8faff;
  border: 1.5px dashed var(--ms-primary);
  border-radius: var(--ms-radius);
  padding: 0.95rem;
  margin-bottom: 0.4rem;
}
.ec-root .rule-input-row {
  display: flex;
  align-items: flex-end;
  gap: 0.32rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.32rem 0;
}

.ec-root .rule-steps {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left: 4px solid var(--ms-primary);
  padding: 0.95rem 1.12rem;
  margin-top: 0.78rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
}
.ec-root .rule-steps-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ms-primary-dark);
  margin-bottom: 0.6rem;
}
.ec-root .rule-step {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.34rem 0;
}
.ec-root .rule-step-num {
  width: 19px; height: 19px;
  flex-shrink: 0;
  background: var(--ms-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.68rem;
  font-weight: 700;
  font-family: var(--ms-font-mono);
}
.ec-root .rule-step-text { flex: 1; font-size: 0.82rem; }
.ec-root .rule-step-text .katex { font-size: 0.95rem !important; }

.ec-root .rule-mismatch {
  background: linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%);
  border-left: 4px solid var(--ms-error);
  border-radius: var(--ms-radius);
  padding: 0.76rem 0.92rem;
}
.ec-root .rule-mismatch-title {
  font-weight: 700;
  font-size: 0.78rem;
  margin-bottom: 0.32rem;
  color: #7f1d1d;
}
.ec-root .rule-mismatch-body { font-size: 0.82rem; color: var(--ms-text); margin: 0; }

.ec-root .compare-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 1rem;
}
@media (max-width: 720px) {
  .ec-root .compare-inputs { grid-template-columns: 1fr; }
  .ec-root .compare-vs { text-align: center; }
}
.ec-root .compare-side {
  background: #f8faff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: 0.92rem;
  text-align: center;
}
.ec-root .compare-side-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: 0.55rem;
}
.ec-root .compare-side-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.45rem;
}
.ec-root .compare-side-value {
  font-family: var(--ms-font-mono);
  font-size: 0.78rem;
  color: var(--ms-text-soft);
}
.ec-root .compare-vs {
  font-family: var(--ms-font-serif);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ms-primary);
}
.ec-root .compare-verdict {
  background: linear-gradient(180deg, #fef9e7 0%, #fef3c7 100%);
  border-left: 4px solid var(--ms-warning);
  padding: 0.92rem 1.08rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
  margin-bottom: 0.78rem;
}
.ec-root .compare-verdict.equal {
  background: linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%);
  border-left-color: var(--ms-success);
}
.ec-root .compare-verdict-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #854d0e;
  margin-bottom: 0.32rem;
}
.ec-root .compare-verdict.equal .compare-verdict-label { color: var(--ms-success); }
.ec-root .compare-verdict-text { font-size: 0.82rem; color: var(--ms-text); }
.ec-root .compare-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(116px, 1fr));
  gap: 0.52rem;
}
.ec-root .compare-stat {
  background: #fff;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: 0.64rem 0.76rem;
}
.ec-root .compare-stat-label {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: 0.24rem;
}
.ec-root .compare-stat-value {
  font-family: var(--ms-font-mono);
  font-size: 0.82rem;
  color: var(--ms-text);
  font-weight: 500;
}

.ec-root .explain-block {
  padding: 1.15rem 0;
  border-bottom: 1px solid var(--ms-border);
}
.ec-root .explain-block:first-child { padding-top: 0; }
.ec-root .explain-block:last-child { padding-bottom: 0; border-bottom: none; }
.ec-root .explain-title {
  font-family: var(--ms-font-serif);
  font-size: 1.18rem;
  font-weight: 600;
  margin: 0 0 0.65rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--ms-text);
}
.ec-root .explain-text {
  font-size: 0.96rem;
  color: var(--ms-text-soft);
  margin: 0 0 0.65rem;
}
.ec-root .explain-text:last-child { margin-bottom: 0; }
.ec-root .explain-text code {
  font-family: var(--ms-font-mono);
  background: #f1f5f9;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.88rem;
}
.ec-root .explain-formula {
  background: #f8fafc;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: 0.95rem 1.15rem;
  margin: 0.65rem 0;
  text-align: center;
}
.ec-root .explain-formula .katex { font-size: 1.22rem !important; }

.ec-root .insight {
  background: linear-gradient(180deg, #fef9e7 0%, #fef3c7 100%);
  border-left: 4px solid var(--ms-warning);
  border-radius: var(--ms-radius);
  padding: 0.9rem 1.1rem;
  margin: 0.65rem 0;
}
.ec-root .insight.info {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left-color: var(--ms-primary);
}
.ec-root .insight.danger {
  background: linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%);
  border-left-color: var(--ms-error);
}
.ec-root .insight-title {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.38rem;
  color: #854d0e;
}
.ec-root .insight.info .insight-title { color: var(--ms-primary-dark); }
.ec-root .insight.danger .insight-title { color: #7f1d1d; }
.ec-root .insight-body { font-size: 0.92rem; color: var(--ms-text); margin: 0; }
.ec-root .insight-body code {
  font-family: var(--ms-font-mono);
  background: rgba(255,255,255,0.7);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
}
.ec-root .insight-body .katex { font-size: 1.02rem !important; }

.ec-root [hidden] { display: none !important; }

/* Left column ~20% scale-down: shared card padding/header overrides */
.ec-root .left-col .card-header {
  padding: 0.55rem 1.15rem;
  font-size: 0.92rem;
}
.ec-root .left-col .card-body { padding: 0.95rem 1.2rem; }
.ec-root .left-col .card { margin-bottom: 0.7rem; }
`;

/* =====================================================================
   COMPONENT
   ===================================================================== */

const KATEX_VERSION = '0.16.9';
const KATEX_CSS_HREF = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css`;
const KATEX_JS_SRC   = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.js`;

const FONTS_HREF = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';

const EXP_CHIPS = [
  { val: '4',   sup: '4' },
  { val: '5',   sup: '5' },
  { val: '6',   sup: '6' },
  { val: '10',  sup: '10' },
  { val: '0.5', sup: '1/2' },
  { val: '-1',  sup: '-1' },
  { val: '-2',  sup: '-2' },
  { val: '0',   sup: '0' }
];

export default function ExponentCalculator({ explanations: explanationsProp } = {}) {
  /* --- Merge explanations --- */
  const explanations = useMemo(
    () => deepMerge(defaultExplanations, explanationsProp || {}),
    [explanationsProp]
  );

  /* --- Mode --- */
  const [mode, setMode] = useState('power'); // 'power' | 'rules' | 'compare'

  /* --- Power state --- */
  const [pwrBase, setPwrBase] = useState('5');
  const [pwrExp, setPwrExp] = useState('2');
  const [pwrType, setPwrType] = useState('square'); // 'square' | 'cube' | 'custom'
  const [powerHistory, setPowerHistory] = useState([]); // [{base, exp, result}]
  const [copiedKey, setCopiedKey] = useState(null);

  /* --- Rules state --- */
  const [currentRule, setCurrentRule] = useState('product');
  const [ruleState, setRuleState] = useState({
    product:          { b: '2', b2: '2', m: '3', n: '4' },
    quotient:         { b: '3', b2: '3', m: '5', n: '2' },
    power:            { b: '2', m: '3', n: '4' },
    'product-power':  { a: '2', b: '3', n: '4' },
    'quotient-power': { a: '6', b: '2', n: '3' },
    negative:         { b: '2', n: '3' },
    zero:             { b: '7' }
  });

  /* --- Compare state --- */
  const [cmpBaseA, setCmpBaseA] = useState('2');
  const [cmpExpA,  setCmpExpA]  = useState('10');
  const [cmpBaseB, setCmpBaseB] = useState('10');
  const [cmpExpB,  setCmpExpB]  = useState('3');

  /* --- KaTeX readiness --- */
  const [katexReady, setKatexReady] = useState(
    typeof window !== 'undefined' && !!window.katex
  );

  const rootRef = useRef(null);

  /* --- Load KaTeX CSS + JS dynamically --- */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // CSS
    if (!document.querySelector(`link[href="${KATEX_CSS_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = KATEX_CSS_HREF;
      document.head.appendChild(link);
    }

    // Fonts (optional but matches the demo)
    if (!document.querySelector(`link[href="${FONTS_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONTS_HREF;
      document.head.appendChild(link);
    }

    if (window.katex) {
      setKatexReady(true);
      return;
    }

    const existing = document.querySelector(`script[src="${KATEX_JS_SRC}"]`);
    if (existing) {
      const onload = () => setKatexReady(true);
      existing.addEventListener('load', onload);
      // Poll in case script already loaded but event missed
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

  /* --- Render KaTeX after every render --- */
  useEffect(() => {
    if (!katexReady) return;
    if (rootRef.current) renderKatexIn(rootRef.current);
  });

  /* =====================================================================
     POWER MODE — computation
     ===================================================================== */

  const powerComputed = useMemo(() => {
    const base = parseNum(pwrBase);
    const exp  = parseNum(pwrExp);
    let result, status = 'ok';
    if (isNaN(base) || isNaN(exp))          { status = 'incomplete'; result = NaN; }
    else if (base === 0 && exp === 0)       { status = 'undefined';  result = NaN; }
    else if (base === 0 && exp < 0)         { status = 'undefined';  result = NaN; }
    else if (base < 0 && !Number.isInteger(exp)) { status = 'complex'; result = NaN; }
    else {
      result = Math.pow(base, exp);
      if (!isFinite(result)) status = 'overflow';
    }
    return { base, exp, result, status };
  }, [pwrBase, pwrExp]);

  /* Power-type pill click */
  const handleTypeClick = useCallback((t) => {
    setPwrType(t);
    if (t === 'square') setPwrExp('2');
    else if (t === 'cube') setPwrExp('3');
    // 'custom' leaves the current exp value alone
    // Push history after the new value commits
    setTimeout(() => pushHistoryFromCurrent(), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Chip click — set exponent (must be in custom mode to be visible) */
  const handleChipClick = useCallback((v) => {
    setPwrExp(v);
    setTimeout(() => pushHistoryFromCurrent(), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Base input */
  const handleBaseInput = useCallback((e) => {
    setPwrBase(e.target.value);
  }, []);

  /* Exp input — only editable in custom */
  const handleExpInput = useCallback((e) => {
    if (pwrType === 'custom') setPwrExp(e.target.value);
  }, [pwrType]);

  /* Calculate button */
  const handleCalc = useCallback(() => {
    pushHistoryFromCurrent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Reset button */
  const handleReset = useCallback(() => {
    setPwrBase('5');
    setPwrType('square');
    setPwrExp('2');
  }, []);

  /* History push — reads the LATEST computed values via a ref */
  const computedRef = useRef(powerComputed);
  useEffect(() => { computedRef.current = powerComputed; }, [powerComputed]);

  function pushHistoryFromCurrent() {
    const { base, exp, result, status } = computedRef.current;
    if (status !== 'ok' || isNaN(base) || isNaN(exp)) return;
    setPowerHistory((prev) => {
      const idx = prev.findIndex((h) => h.base === base && h.exp === exp);
      let next = prev;
      if (idx !== -1) {
        next = [...prev.slice(0, idx), ...prev.slice(idx + 1)];
      }
      next = [...next, { base, exp, result }];
      if (next.length > 8) next = next.slice(next.length - 8);
      return next;
    });
  }

  /* Set state from a history chip or neighbor or table row */
  const restoreFromValues = useCallback((base, exp) => {
    if (exp === 2) setPwrType('square');
    else if (exp === 3) setPwrType('cube');
    else setPwrType('custom');
    setPwrBase(String(base));
    setPwrExp(String(exp));
  }, []);

  /* =====================================================================
     POWER MODE — derived render helpers
     ===================================================================== */

  const { base: pwrBaseNum, exp: pwrExpNum, result: pwrResult, status: pwrStatus } = powerComputed;

  const inlineResultText = pwrStatus === 'ok'
    ? fmt(pwrResult)
    : pwrStatus === 'incomplete'
      ? 'enter values'
      : 'undefined';

  const inlineIsPlaceholder = pwrStatus !== 'ok';

  const eyebrowText = (!isNaN(pwrBaseNum) && !isNaN(pwrExpNum))
    ? `${pwrBaseNum} ${ordinalize(pwrExpNum)}`
    : 'Result';

  /* Primary result math (HTML string with data-math span, or placeholder) */
  let primaryHTML;
  if (pwrStatus === 'ok') {
    primaryHTML = mathHTML(`${pwrBaseNum}^{${pwrExpNum}} = ${fmt(pwrResult)}`);
  } else if (pwrStatus === 'incomplete') {
    primaryHTML = '<span style="color:var(--ms-text-muted);font-style:italic;font-size:1.3rem">Enter a base and exponent</span>';
  } else {
    primaryHTML = mathHTML(`${isNaN(pwrBaseNum) ? '?' : pwrBaseNum}^{${isNaN(pwrExpNum) ? '?' : pwrExpNum}} = \\text{undefined}`);
  }

  /* Forms (multi-representation) */
  const powerForms = useMemo(() => {
    const forms = [];
    const base = pwrBaseNum, exp = pwrExpNum, result = pwrResult, status = pwrStatus;
    if (status !== 'ok') {
      forms.push({
        label: 'Status',
        value: status === 'incomplete' ? 'Waiting for input'
             : status === 'undefined' ? 'Undefined'
             : status === 'complex' ? 'Complex (not real)'
             : 'Overflow / infinity'
      });
      return forms;
    }

    if (Number.isInteger(result) && Math.abs(result) < 1e15) {
      forms.push({ label: 'Exact', value: withCommas(result), copyValue: String(result) });
    }
    const decStr = fmt(result, { fixed: 6 });
    forms.push({ label: 'Decimal', value: decStr, copyValue: trimTrailingZeros(decStr) });
    const sciStr = fmtSci(result);
    forms.push({ label: 'Scientific', value: sciStr, copyValue: sciStr });

    if (exp < 0 && Number.isInteger(exp) && base !== 0) {
      const denom = Math.pow(base, -exp);
      if (Number.isInteger(denom) && isFinite(denom)) {
        forms.push({ label: 'Fraction', math: `\\dfrac{1}{${denom}}`, copyValue: `1/${denom}` });
      }
    } else if (!Number.isInteger(result) && isFinite(result) && Math.abs(result) < 10000) {
      const frac = fractionFromDecimal(result);
      if (frac && frac.den < 1000 && frac.den > 1) {
        forms.push({ label: 'Fraction', math: `\\dfrac{${frac.num}}{${frac.den}}`, copyValue: `${frac.num}/${frac.den}` });
      }
    }

    if (Number.isInteger(exp) && exp > 0 && exp <= 6) {
      const parts = Array(exp).fill(base.toString()).join(' \\cdot ');
      const plainParts = Array(exp).fill(base.toString()).join(' * ');
      forms.push({ label: 'Expanded', math: parts, copyValue: plainParts });
    }

    if (exp < 0) {
      forms.push({
        label: 'As reciprocal',
        math: `\\dfrac{1}{${base}^{${-exp}}}`,
        copyValue: `1/(${base}^${-exp})`
      });
    }

    if (!Number.isInteger(exp) && exp > 0) {
      const frac = fractionFromDecimal(exp);
      if (frac && frac.den < 100 && frac.den > 1) {
        if (frac.num === 1) {
          forms.push({
            label: 'As radical',
            math: `\\sqrt[${frac.den}]{${base}}`,
            copyValue: `${base}^(1/${frac.den})`
          });
        } else {
          forms.push({
            label: 'As radical',
            math: `\\sqrt[${frac.den}]{${base}^{${frac.num}}}`,
            copyValue: `${base}^(${frac.num}/${frac.den})`
          });
        }
      }
    }

    return forms;
  }, [pwrBaseNum, pwrExpNum, pwrResult, pwrStatus]);

  /* Neighbors */
  const neighbors = useMemo(() => {
    const base = pwrBaseNum, exp = pwrExpNum;
    if (isNaN(base) || isNaN(exp)) return [];
    const offsets = [-3, -2, -1, 0, 1, 2, 3];
    return offsets.map((off) => {
      const n = exp + off;
      let val;
      if (base < 0 && !Number.isInteger(n)) val = '—';
      else if (base === 0 && n <= 0) val = '—';
      else {
        const v = Math.pow(base, n);
        val = (!isFinite(v) || isNaN(v)) ? '—' : fmt(v, { fixed: 2 });
      }
      const nDisp = Number.isInteger(n) ? n : n.toFixed(2);
      return { off, n, nDisp, val };
    });
  }, [pwrBaseNum, pwrExpNum]);

  /* Powers reference table */
  const powersTableRows = useMemo(() => {
    if (isNaN(pwrBaseNum)) return [];
    const range = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
    return range.map((n) => {
      let val;
      if (pwrBaseNum === 0 && n <= 0) val = '—';
      else if (pwrBaseNum < 0 && !Number.isInteger(n)) val = '—';
      else {
        const v = Math.pow(pwrBaseNum, n);
        val = fmtTable(v);
      }
      return { n, val };
    });
  }, [pwrBaseNum]);

  /* Copy handler */
  const handleCopy = useCallback(async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {
      try {
        const ta = document.createElement('textarea');
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      } catch (_) { /* ignore */ }
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1400);
  }, []);

  /* =====================================================================
     RULES MODE — computation
     ===================================================================== */

  const rs = ruleState[currentRule];

  const updateRuleField = useCallback((rule, field, value) => {
    setRuleState((prev) => ({
      ...prev,
      [rule]: { ...prev[rule], [field]: value }
    }));
  }, []);

  /* Returns either { mismatch: {ruleName, b1, b2} } or { steps: [{text}] } */
  const ruleComputed = useMemo(() => {
    const s = ruleState[currentRule];
    // Parse numbers
    const N = (k) => parseNum(s[k]);

    if (currentRule === 'product' || currentRule === 'quotient') {
      const b = N('b'), b2 = N('b2');
      if (!isNaN(b) && !isNaN(b2) && b !== b2) {
        return {
          mismatch: {
            ruleName: currentRule === 'product' ? 'product rule' : 'quotient rule',
            b1: s.b, b2: s.b2
          }
        };
      }
    }

    const stepList = [];

    if (currentRule === 'product') {
      const b = N('b'), m = N('m'), n = N('n');
      if ([b, m, n].some(isNaN)) stepList.push({ text: '\\text{Enter values to see the rule applied.}' });
      else {
        const left = Math.pow(b, m), right = Math.pow(b, n), product = Math.pow(b, m + n);
        stepList.push({ text: `\\text{Start: } ${b}^{${m}} \\cdot ${b}^{${n}}` });
        stepList.push({ text: `\\text{Same base } ${b} \\text{, so add the exponents: } ${b}^{${m}+${n}} = ${b}^{${m + n}}` });
        stepList.push({ text: `\\text{Compute: } ${b}^{${m + n}} = ${fmt(product)}` });
        stepList.push({ text: `\\text{Verify directly: } ${fmt(left)} \\cdot ${fmt(right)} = ${fmt(left * right)}` });
      }
    }
    else if (currentRule === 'quotient') {
      const b = N('b'), m = N('m'), n = N('n');
      if ([b, m, n].some(isNaN)) stepList.push({ text: '\\text{Enter values to see the rule applied.}' });
      else if (b === 0) stepList.push({ text: '\\text{Base cannot be 0 in the quotient rule (division by zero).}' });
      else {
        const num = Math.pow(b, m), den = Math.pow(b, n), quot = Math.pow(b, m - n);
        stepList.push({ text: `\\text{Start: } \\dfrac{${b}^{${m}}}{${b}^{${n}}}` });
        stepList.push({ text: `\\text{Same base } ${b} \\text{, so subtract the exponents: } ${b}^{${m}-${n}} = ${b}^{${m - n}}` });
        stepList.push({ text: `\\text{Compute: } ${b}^{${m - n}} = ${fmt(quot)}` });
        stepList.push({ text: `\\text{Verify directly: } \\dfrac{${fmt(num)}}{${fmt(den)}} = ${fmt(num / den)}` });
      }
    }
    else if (currentRule === 'power') {
      const b = N('b'), m = N('m'), n = N('n');
      if ([b, m, n].some(isNaN)) stepList.push({ text: '\\text{Enter values to see the rule applied.}' });
      else {
        const inner = Math.pow(b, m), result = Math.pow(b, m * n);
        stepList.push({ text: `\\text{Start: } (${b}^{${m}})^{${n}}` });
        stepList.push({ text: `\\text{Multiply the exponents: } ${b}^{${m} \\cdot ${n}} = ${b}^{${m * n}}` });
        stepList.push({ text: `\\text{Compute: } ${b}^{${m * n}} = ${fmt(result)}` });
        stepList.push({ text: `\\text{Verify directly: } (${fmt(inner)})^{${n}} = ${fmt(Math.pow(inner, n))}` });
      }
    }
    else if (currentRule === 'product-power') {
      const a = N('a'), b = N('b'), n = N('n');
      if ([a, b, n].some(isNaN)) stepList.push({ text: '\\text{Enter values to see the rule applied.}' });
      else {
        const ab = a * b, lhs = Math.pow(ab, n), an = Math.pow(a, n), bn = Math.pow(b, n);
        stepList.push({ text: `\\text{Start: } (${a} \\cdot ${b})^{${n}}` });
        stepList.push({ text: `\\text{Distribute the exponent: } ${a}^{${n}} \\cdot ${b}^{${n}}` });
        stepList.push({ text: `\\text{Compute each: } ${fmt(an)} \\cdot ${fmt(bn)} = ${fmt(an * bn)}` });
        stepList.push({ text: `\\text{Verify directly: } (${ab})^{${n}} = ${fmt(lhs)}` });
      }
    }
    else if (currentRule === 'quotient-power') {
      const a = N('a'), b = N('b'), n = N('n');
      if ([a, b, n].some(isNaN)) stepList.push({ text: '\\text{Enter values to see the rule applied.}' });
      else if (b === 0) stepList.push({ text: '\\text{Denominator cannot be 0.}' });
      else {
        const an = Math.pow(a, n), bn = Math.pow(b, n);
        stepList.push({ text: `\\text{Start: } \\left(\\dfrac{${a}}{${b}}\\right)^{${n}}` });
        stepList.push({ text: `\\text{Distribute the exponent: } \\dfrac{${a}^{${n}}}{${b}^{${n}}}` });
        stepList.push({ text: `\\text{Compute each: } \\dfrac{${fmt(an)}}{${fmt(bn)}} = ${fmt(an / bn)}` });
      }
    }
    else if (currentRule === 'negative') {
      const b = N('b'), n = N('n');
      if ([b, n].some(isNaN)) stepList.push({ text: '\\text{Enter values to see the rule applied.}' });
      else if (b === 0) stepList.push({ text: '\\text{Cannot raise 0 to a negative power (undefined).}' });
      else {
        const denom = Math.pow(b, n);
        stepList.push({ text: `\\text{Start: } ${b}^{-${n}}` });
        stepList.push({ text: `\\text{Flip to reciprocal: } \\dfrac{1}{${b}^{${n}}}` });
        stepList.push({ text: `\\text{Compute: } \\dfrac{1}{${fmt(denom)}} = ${fmt(1 / denom)}` });
      }
    }
    else if (currentRule === 'zero') {
      const b = N('b');
      if (isNaN(b)) stepList.push({ text: '\\text{Enter a base.}' });
      else if (b === 0) stepList.push({ text: '0^0 \\text{ is conventionally undefined.}' });
      else {
        stepList.push({ text: `\\text{Start: } ${b}^{0}` });
        stepList.push({ text: `\\text{Any non-zero base to the 0 power is 1.}` });
        stepList.push({ text: `${b}^{0} = 1` });
      }
    }

    return { steps: stepList };
  }, [currentRule, ruleState]);

  /* =====================================================================
     COMPARE MODE — computation
     ===================================================================== */

  const compareComputed = useMemo(() => {
    const ba = parseNum(cmpBaseA);
    const ea = parseNum(cmpExpA);
    const bb = parseNum(cmpBaseB);
    const eb = parseNum(cmpExpB);

    let va = NaN, vb = NaN;
    if (!isNaN(ba) && !isNaN(ea) && !(ba < 0 && !Number.isInteger(ea)) && !(ba === 0 && ea <= 0)) {
      va = Math.pow(ba, ea);
    }
    if (!isNaN(bb) && !isNaN(eb) && !(bb < 0 && !Number.isInteger(eb)) && !(bb === 0 && eb <= 0)) {
      vb = Math.pow(bb, eb);
    }
    return { ba, ea, bb, eb, va, vb };
  }, [cmpBaseA, cmpExpA, cmpBaseB, cmpExpB]);

  /* =====================================================================
     EXPLANATION HTML
     ===================================================================== */

  const explainHTML = useMemo(() => {
    if (mode === 'power') {
      const { base, exp, result, status } = powerComputed;
      const e = explanations.power;
      const blocks = [];
      blocks.push(`
        <div class="explain-block">
          <h3 class="explain-title">${e.sectionTitles.whatHappened}</h3>
          ${e.describeOperation(base, exp, result, status, HELPERS)}
        </div>
      `);
      const insights = e.detectInsights(base, exp, result, status, HELPERS) || [];
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
          ${e.conceptExplanation(base, exp, HELPERS)}
        </div>
      `);
      return blocks.join('');
    }

    if (mode === 'rules') {
      const e = explanations.rules;
      const r = e.descriptions[currentRule];
      const cm = e.commonMistakes[currentRule];
      if (!r) return '';
      return `
        <div class="explain-block">
          <h3 class="explain-title">${r.title}</h3>
          <p class="explain-text">${r.intuition}</p>
        </div>
        <div class="explain-block">
          <h3 class="explain-title">Why it works</h3>
          <p class="explain-text">${r.why}</p>
          <div class="explain-formula">${mathHTML(r.example)}</div>
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
      const { ba, ea, bb, eb, va, vb } = compareComputed;
      const blocks = [];

      blocks.push(`
        <div class="explain-block">
          <h3 class="explain-title">${e.intro.title}</h3>
          <p class="explain-text">${e.intro.body}</p>
        </div>
      `);

      if (ba === bb && !isNaN(ba)) {
        const sb = e.sameBase(ba, ea, eb, HELPERS);
        blocks.push(`
          <div class="explain-block">
            <h3 class="explain-title">${sb.title}</h3>
            <p class="explain-text">${sb.body}</p>
            <div class="explain-formula">${mathHTML(sb.formula)}</div>
          </div>
        `);
      } else if (!isNaN(ba) && !isNaN(bb) && !isNaN(ea) && !isNaN(eb) && va > 0 && vb > 0) {
        const db = e.diffBases(ba, ea, bb, eb, va, vb, HELPERS);
        const formulas = (db.formulas || []).map((f) => `<div class="explain-formula">${mathHTML(f)}</div>`).join('');
        blocks.push(`
          <div class="explain-block">
            <h3 class="explain-title">${db.title}</h3>
            <p class="explain-text">${db.intro}</p>
            ${formulas}
            <p class="explain-text">${db.footer}</p>
          </div>
        `);
      }

      if (va > 0 && vb > 0 && isFinite(va) && isFinite(vb)) {
        const om = e.ordersOfMagnitude(va, vb, HELPERS);
        const paras = (om.paragraphs || []).map((p) => `<p class="explain-text">${p}</p>`).join('');
        blocks.push(`
          <div class="explain-block">
            <h3 class="explain-title">${om.title}</h3>
            ${paras}
          </div>
        `);
      }

      return blocks.join('');
    }

    return '';
  }, [mode, powerComputed, currentRule, compareComputed, explanations]);

  /* Compare verdict + stats render values */
  const compareVerdict = useMemo(() => {
    const { va, vb } = compareComputed;
    if (!isFinite(va) || !isFinite(vb)) {
      return {
        kind: '',
        labelText: 'Waiting',
        bodyHTML: 'Enter valid values for both expressions.'
      };
    }
    if (va === vb) {
      return {
        kind: 'equal',
        labelText: 'Verdict',
        bodyHTML: `Equal: both expressions evaluate to <strong>${fmt(va)}</strong>.`
      };
    }
    if (va > vb) {
      const ratio = va / vb;
      return {
        kind: '',
        labelText: 'Verdict',
        bodyHTML: `<strong>A is larger</strong> &mdash; about <strong>${fmt(ratio, { fixed: 2 })}× greater</strong> than B.`
      };
    }
    const ratio = vb / va;
    return {
      kind: '',
      labelText: 'Verdict',
      bodyHTML: `<strong>B is larger</strong> &mdash; about <strong>${fmt(ratio, { fixed: 2 })}× greater</strong> than A.`
    };
  }, [compareComputed]);

  const compareStats = useMemo(() => {
    const { va, vb } = compareComputed;
    if (!isFinite(va) || !isFinite(vb)) return null;
    const ratio = vb !== 0 ? va / vb : NaN;
    const ordersOfMagnitude = (va > 0 && vb > 0) ? Math.log10(va) - Math.log10(vb) : NaN;
    const diff = va - vb;
    return {
      ratio: isFinite(ratio) ? fmt(ratio) : '—',
      diff: fmt(diff),
      orders: isFinite(ordersOfMagnitude)
        ? (ordersOfMagnitude >= 0 ? '+' : '') + fmt(ordersOfMagnitude, { fixed: 2 })
        : '—'
    };
  }, [compareComputed]);

  /* =====================================================================
     RULE INPUT RENDERERS
     ===================================================================== */

  const renderRuleInputs = () => {
    const s = ruleState[currentRule];
    const setField = (field) => (e) => updateRuleField(currentRule, field, e.target.value);

    const baseExpPair = (baseKey, expKey, baseClass = 'rule-base', expClass = 'rule-exp') => (
      <span className="exp-stack">
        <input
          className={`slot-input ${baseClass}`}
          type="text"
          inputMode="decimal"
          value={s[baseKey]}
          onChange={setField(baseKey)}
        />
        <input
          className={`slot-input ${expClass}`}
          type="text"
          inputMode="decimal"
          value={s[expKey]}
          onChange={setField(expKey)}
        />
      </span>
    );

    const singleInput = (key, sizeClass = 'rule-base') => (
      <input
        className={`slot-input ${sizeClass}`}
        type="text"
        inputMode="decimal"
        value={s[key]}
        onChange={setField(key)}
      />
    );

    if (currentRule === 'product') {
      return (
        <div className="rule-input-row">
          {baseExpPair('b', 'm')}
          <span className="math-glyph">·</span>
          {baseExpPair('b2', 'n')}
        </div>
      );
    }
    if (currentRule === 'quotient') {
      return (
        <div className="rule-input-row">
          <span className="fraction">
            <span className="frac-num">{baseExpPair('b', 'm')}</span>
            <span className="frac-den">{baseExpPair('b2', 'n')}</span>
          </span>
        </div>
      );
    }
    if (currentRule === 'power') {
      return (
        <div className="rule-input-row">
          <span className="exp-stack">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.1rem' }}>
              <span className="math-glyph">(</span>
              {baseExpPair('b', 'm')}
              <span className="math-glyph">)</span>
            </span>
            {singleInput('n', 'rule-exp')}
          </span>
        </div>
      );
    }
    if (currentRule === 'product-power') {
      return (
        <div className="rule-input-row">
          <span className="exp-stack">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="math-glyph">(</span>
              {singleInput('a', 'rule-base')}
              <span className="math-glyph">·</span>
              {singleInput('b', 'rule-base')}
              <span className="math-glyph">)</span>
            </span>
            {singleInput('n', 'rule-exp')}
          </span>
        </div>
      );
    }
    if (currentRule === 'quotient-power') {
      return (
        <div className="rule-input-row">
          <span className="exp-stack">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.1rem' }}>
              <span className="math-glyph">(</span>
              <span className="fraction">
                <span className="frac-num">{singleInput('a', 'rule-base')}</span>
                <span className="frac-den">{singleInput('b', 'rule-base')}</span>
              </span>
              <span className="math-glyph">)</span>
            </span>
            {singleInput('n', 'rule-exp')}
          </span>
        </div>
      );
    }
    if (currentRule === 'negative') {
      return (
        <div className="rule-input-row">
          <span className="exp-stack">
            {singleInput('b', 'rule-base')}
            <span className="exp-with-prefix">
              <span className="neg-prefix">−</span>
              {singleInput('n', 'rule-exp')}
            </span>
          </span>
        </div>
      );
    }
    if (currentRule === 'zero') {
      return (
        <div className="rule-input-row">
          <span className="exp-stack">
            {singleInput('b', 'rule-base')}
            <span className="rule-exp-static">0</span>
          </span>
        </div>
      );
    }
    return null;
  };

  /* =====================================================================
     JSX
     ===================================================================== */

  return (
    <div className="ec-root" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="page">

        {/* <header className="page-header">
          <h1 className="page-title">Exponent Calculator</h1>
          <p className="page-sub">Compute powers, apply exponent rules, and compare orders of magnitude.</p>
        </header> */}

        <div className="mode-tabs">
          <button
            className={`mode-tab ${mode === 'power' ? 'is-active' : ''}`}
            onClick={() => setMode('power')}
          >Power</button>
          <button
            className={`mode-tab ${mode === 'rules' ? 'is-active' : ''}`}
            onClick={() => setMode('rules')}
          >Rules</button>
          <button
            className={`mode-tab ${mode === 'compare' ? 'is-active' : ''}`}
            onClick={() => setMode('compare')}
          >Compare</button>
        </div>

        <div className="main-grid">

          {/* LEFT COLUMN */}
          <div className="left-col">

            {/* ===== POWER ===== */}
            <div className={`mode-panel ${mode === 'power' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Compute a power</div>
                <div className="card-body">

                  <div className="type-row">
                    <div className="type-label">Power type</div>
                    <div className="type-controls">
                      <div className="type-pills">
                        <button
                          className={`type-pill ${pwrType === 'square' ? 'is-active' : ''}`}
                          onClick={() => handleTypeClick('square')}
                        >Square</button>
                        <button
                          className={`type-pill ${pwrType === 'cube' ? 'is-active' : ''}`}
                          onClick={() => handleTypeClick('cube')}
                        >Cube</button>
                        <button
                          className={`type-pill ${pwrType === 'custom' ? 'is-active' : ''}`}
                          onClick={() => handleTypeClick('custom')}
                        >Custom</button>
                      </div>

                      <div className="exp-chips-inline" hidden={pwrType !== 'custom'}>
                        <div className="exp-chips-divider"></div>
                        <div className="exp-chips-scroll">
                          {EXP_CHIPS.map((chip) => (
                            <button
                              key={chip.val}
                              className={`exp-chip ${parseFloat(chip.val) === pwrExpNum ? 'is-active' : ''}`}
                              onClick={() => handleChipClick(chip.val)}
                            >
                              x<sup>{chip.sup}</sup>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="expression">
                    <span className="exp-stack">
                      <input
                        className="slot-input base"
                        type="text"
                        inputMode="decimal"
                        value={pwrBase}
                        onChange={handleBaseInput}
                      />
                      <input
                        className="slot-input exp"
                        type="text"
                        inputMode="decimal"
                        value={pwrExp}
                        readOnly={pwrType !== 'custom'}
                        onChange={handleExpInput}
                      />
                    </span>
                    <span className="expr-render" data-math="=" />
                    <span className={`result-inline ${inlineIsPlaceholder ? 'placeholder' : ''}`}>
                      {inlineResultText}
                    </span>
                  </div>

                  <div className="actions">
                    <button className="btn btn-primary" onClick={handleCalc}>Calculate</button>
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
                      {powerForms.map((f, i) => {
                        const copyVal = f.copyValue != null ? f.copyValue : (f.value || '');
                        const key = `form-${i}`;
                        const isCopied = copiedKey === key;
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
                              : <div className="result-form-value">{f.value}</div>
                            }
                          </div>
                        );
                      })}
                    </div>

                    <div className="neighbors">
                      <div className="neighbors-label">Neighboring powers (click to set)</div>
                      <div className="neighbors-grid">
                        {neighbors.map((nb) => (
                          <div
                            key={nb.off}
                            className={`neighbor ${nb.off === 0 ? 'is-current' : ''}`}
                            onClick={() => {
                              restoreFromValues(pwrBaseNum, parseFloat(nb.nDisp));
                              setTimeout(() => pushHistoryFromCurrent(), 0);
                            }}
                          >
                            <div
                              className="neighbor-label"
                              dangerouslySetInnerHTML={{ __html: mathHTML(`${pwrBaseNum}^{${nb.nDisp}}`) }}
                            />
                            <div className="neighbor-value">{nb.val}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="history-strip" hidden={powerHistory.length === 0}>
                      <div className="history-label">Recent</div>
                      <div className="history-chips">
                        {[...powerHistory].reverse().map((h, i) => (
                          <div
                            key={`${h.base}-${h.exp}-${i}`}
                            className="history-chip"
                            onClick={() => restoreFromValues(h.base, h.exp)}
                          >
                            <span
                              className="h-expr"
                              dangerouslySetInnerHTML={{ __html: mathHTML(`${h.base}^{${h.exp}}`) }}
                            />
                            <span className="h-arrow">=</span>
                            <span className="h-value">{fmt(h.result)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* ===== RULES ===== */}
            <div className={`mode-panel ${mode === 'rules' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Apply an exponent rule</div>
                <div className="card-body">

                  <div className="rule-list">
                    {explanations.rules.list.map((rule) => (
                      <button
                        key={rule.id}
                        className={`rule-pill ${currentRule === rule.id ? 'is-active' : ''}`}
                        onClick={() => setCurrentRule(rule.id)}
                      >
                        <span className="rule-name">{rule.name}</span>
                        <span className="rule-formula" data-math={rule.formula} />
                      </button>
                    ))}
                  </div>

                  <div className="rule-inputs">
                    {renderRuleInputs()}
                  </div>

                  <div className="rule-steps">
                    <div className="rule-steps-label">Step-by-step</div>
                    {ruleComputed.mismatch ? (
                      <div className="rule-mismatch">
                        <div className="rule-mismatch-title">{explanations.rules.mismatchTitle}</div>
                        <div
                          className="rule-mismatch-body"
                          dangerouslySetInnerHTML={{
                            __html: explanations.rules.mismatchBody(
                              ruleComputed.mismatch.ruleName,
                              ruleComputed.mismatch.b1,
                              ruleComputed.mismatch.b2
                            )
                          }}
                        />
                      </div>
                    ) : (
                      ruleComputed.steps.map((step, i) => (
                        <div className="rule-step" key={i}>
                          <div className="rule-step-num">{i + 1}</div>
                          <div className="rule-step-text">
                            <span data-math={step.text} />
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                </div>
              </section>
            </div>

            {/* ===== COMPARE ===== */}
            <div className={`mode-panel ${mode === 'compare' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Compare two powers</div>
                <div className="card-body">

                  <div className="compare-inputs">
                    <div className="compare-side">
                      <div className="compare-side-label">Expression A</div>
                      <div className="compare-side-inputs">
                        <span className="exp-stack">
                          <input
                            className="slot-input cmp-base"
                            type="text"
                            inputMode="decimal"
                            value={cmpBaseA}
                            onChange={(e) => setCmpBaseA(e.target.value)}
                          />
                          <input
                            className="slot-input cmp-exp"
                            type="text"
                            inputMode="decimal"
                            value={cmpExpA}
                            onChange={(e) => setCmpExpA(e.target.value)}
                          />
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
                        <span className="exp-stack">
                          <input
                            className="slot-input cmp-base"
                            type="text"
                            inputMode="decimal"
                            value={cmpBaseB}
                            onChange={(e) => setCmpBaseB(e.target.value)}
                          />
                          <input
                            className="slot-input cmp-exp"
                            type="text"
                            inputMode="decimal"
                            value={cmpExpB}
                            onChange={(e) => setCmpExpB(e.target.value)}
                          />
                        </span>
                      </div>
                      <div className="compare-side-value">
                        {isFinite(compareComputed.vb) ? '= ' + fmt(compareComputed.vb) : '= —'}
                      </div>
                    </div>
                  </div>

                  <div className={`compare-verdict ${compareVerdict.kind}`}>
                    <div className="compare-verdict-label">{compareVerdict.labelText}</div>
                    <div
                      className="compare-verdict-text"
                      dangerouslySetInnerHTML={{ __html: compareVerdict.bodyHTML }}
                    />
                  </div>

                  {compareStats && (
                    <div className="compare-stats">
                      <div className="compare-stat">
                        <div className="compare-stat-label">Ratio A / B</div>
                        <div className="compare-stat-value">{compareStats.ratio}</div>
                      </div>
                      <div className="compare-stat">
                        <div className="compare-stat-label">Difference A − B</div>
                        <div className="compare-stat-value">{compareStats.diff}</div>
                      </div>
                      <div className="compare-stat">
                        <div className="compare-stat-label">Orders of magnitude</div>
                        <div className="compare-stat-value">{compareStats.orders}</div>
                      </div>
                    </div>
                  )}

                </div>
              </section>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div>
            <section className="card">
              <div className="card-header">How this works</div>
              <div
                className="card-body"
                dangerouslySetInnerHTML={{ __html: explainHTML }}
              />
            </section>

            {mode === 'power' && (
              <section className="card">
                <div className="card-header">
                  Powers of <span>{isNaN(pwrBaseNum) ? '—' : pwrBaseNum}</span>
                </div>
                <div className="card-body" style={{ padding: 0 }}>
                  <table className="powers-table">
                    <thead>
                      <tr><th>n</th><th>Expression</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                      {powersTableRows.map((row) => (
                        <tr
                          key={row.n}
                          className={Number.isInteger(pwrExpNum) && pwrExpNum === row.n ? 'is-current' : ''}
                          onClick={() => {
                            restoreFromValues(pwrBaseNum, row.n);
                            setTimeout(() => pushHistoryFromCurrent(), 0);
                          }}
                        >
                          <td>{row.n}</td>
                          <td><span data-math={`${pwrBaseNum}^{${row.n}}`} /></td>
                          <td>{row.val}</td>
                        </tr>
                      ))}
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