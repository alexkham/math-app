'use client'
import React, { useState, useEffect, useRef } from 'react';

// FAKE IMPORT — replace with your actual path.
import { processContent } from '../../../utils/contentProcessor';

import sequences from './parametricSequences';

// =====================================================
// Helpers
// =====================================================
const fmt = (n) => {
  if (typeof n === 'bigint') {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  if (n === undefined || n === null) return '';
  if (typeof n === 'number' && !Number.isFinite(n)) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const initialParamsFor = (seq) => {
  const p = {};
  (seq.parameters || []).forEach((param) => {
    p[param.key] = parseFloat(param.defaultValue);
  });
  return p;
};

const initialDraftsFor = (seq) => {
  const p = {};
  (seq.parameters || []).forEach((param) => {
    p[param.key] = String(param.defaultValue);
  });
  return p;
};

// =====================================================
// Pure compute functions per mode (now accept params)
// =====================================================
function computeBrowse(rawN, sequence, max, params) {
  const cap = max || 200;
  const n = Math.max(1, Math.min(cap, parseInt(rawN, 10) || 20));
  const terms = [];
  let sum = sequence.zero ?? 0;
  for (let i = 1; i <= n; i++) {
    const t = sequence.getTerm(i, params);
    terms.push({ index: i, value: t });
    sum += t;
  }
  return { count: n, sum, max: sequence.getTerm(n, params), maxIndex: n, terms };
}

function computeRange(rawA, rawB, sequence, max, params) {
  const cap = max || 200;
  const a = parseInt(rawA, 10);
  const b = parseInt(rawB, 10);
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
    return { error: 'Enter two positive integer indexes.' };
  }
  if (a > b) {
    return { error: 'From-index must be less than or equal to to-index.' };
  }
  if (b - a > cap - 1) {
    return { error: `Range too wide \u2014 cap is ${cap} terms.` };
  }
  const terms = [];
  for (let i = a; i <= b; i++) {
    terms.push({ index: i, value: sequence.getTerm(i, params) });
  }
  return {
    error: null,
    terms,
    count: b - a + 1,
    min: sequence.getTerm(a, params),
    minIndex: a,
    max: sequence.getTerm(b, params),
    maxIndex: b,
  };
}

function computeMember(rawM, sequence, params) {
  const m = parseFloat(rawM);
  if (!Number.isFinite(m)) {
    return { error: 'Enter a number.' };
  }
  const idx = sequence.isMember(m, params);
  if (idx !== null && idx !== undefined) {
    return { error: null, isMember: true, value: m, index: idx };
  }
  const nearest = sequence.nearestNeighbors ? sequence.nearestNeighbors(m, params) : null;
  return { error: null, isMember: false, value: m, nearest };
}

function computeLookup(rawN, sequence, params) {
  const n = parseInt(rawN, 10);
  if (!Number.isInteger(n) || n < 1) {
    return { error: 'Enter a positive integer index.' };
  }
  return { error: null, index: n, value: sequence.getTerm(n, params) };
}

// =====================================================
// Tab metadata (Solver tab is added dynamically per sequence)
// =====================================================
const BASE_TABS = [
  { id: 'browse', label: 'List first N',     tip: 'Generate the first N terms of the sequence and show their sum.' },
  { id: 'range',  label: 'List a \u2013 b',  tip: 'List every term whose index falls between two integers a and b.' },
  { id: 'member', label: 'Test a number',    tip: 'Check whether a given number is one of the values produced by this sequence.' },
  { id: 'lookup', label: 'Lookup by index',  tip: 'Given a position n, compute the single corresponding term.' },
];
const SOLVER_TAB = {
  id: 'solver', label: 'Solver', tip: 'Solve relations between this sequence\u2019s parameters and terms \u2014 fill all but one and compute the missing one.',
};

// =====================================================
// Styles
// =====================================================
const SE_STYLES = `
  .se-grid {
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    gap: 18px;
    align-items: stretch;
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 720px;
  }
  @media (max-width: 720px) {
    .se-grid {
      grid-template-columns: minmax(0, 1fr);
      width: 95%;
    }
  }
  .se-main { display: flex; }
  .se-card {
    background: var(--ms-card, #fff);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 12px;
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 720px;
  }
  .se-card-header {
    background: var(--ms-header-bg, #3B5BDB);
    color: var(--ms-header-text, #fff);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
  .se-card-title {
    margin: 0;
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    font-weight: 700;
    font-size: 1.4rem;
  }
  .se-card-subtitle {
    margin: 3px 0 0;
    font-size: 0.92rem;
    color: rgba(255, 255, 255, 0.85);
  }
  .se-picker-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }
  .se-picker-label {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
  }
  .se-picker {
    appearance: none;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 8px;
    padding: 8px 36px 8px 14px;
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 12px;
  }
  .se-picker option { background: #fff; color: var(--ms-text, #1e3a5f); font-weight: 500; }

  /* ---------- Parameter strip (only for parametric sequences) ---------- */
  .se-params {
    background: var(--ms-header-soft, #EEF1FB);
    border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
    padding: 14px 20px;
    display: flex;
    align-items: end;
    gap: 16px;
    flex-wrap: wrap;
  }
  .se-params-label {
    font-size: 0.7rem;
    color: var(--ms-muted, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    padding-bottom: 10px;
    margin-right: 4px;
  }
  .se-param-field { display: flex; flex-direction: column; gap: 5px; }
  .se-param-field label {
    font-size: 0.86rem;
    color: var(--ms-text-secondary, #475569);
    font-weight: 500;
  }
  .se-param-input {
    font-family: inherit;
    font-size: 1.05rem;
    padding: 9px 12px;
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    width: 120px;
    outline: none;
    background: #fff;
    color: var(--ms-text, #1e3a5f);
  }
  .se-param-input:focus {
    border-color: var(--ms-accent, #3b82f6);
    box-shadow: 0 0 0 3px var(--ms-accent-light, #eff6ff);
  }
  .se-apply {
    font-family: inherit;
    font-size: 0.96rem;
    font-weight: 500;
    padding: 10px 20px;
    background: var(--ms-header-bg, #3B5BDB);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .se-apply:hover { background: var(--ms-header-bg-hover, #2E48C7); }

  .se-card-body {
    padding: 0 20px 18px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* ---------- Tabs ---------- */
  .se-tabs {
    display: flex;
    gap: 2px;
    padding: 14px 0 0 4px;
    border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
    margin-bottom: 18px;
    flex-wrap: wrap;
  }
  .se-tab {
    background: var(--ms-header-soft, #EEF1FB);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-bottom: none;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    font-family: inherit;
    font-size: 0.96rem;
    font-weight: 500;
    color: var(--ms-muted, #64748b);
    padding: 11px 18px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    position: relative;
    top: 1px;
    transition: background 0.15s, color 0.15s;
  }
  .se-tab:hover { background: #e4eaf6; color: var(--ms-text-secondary, #334155); }
  .se-tab.active {
    background: var(--ms-header-bg, #3B5BDB);
    color: #fff;
    border-color: var(--ms-header-bg, #3B5BDB);
    font-weight: 600;
    z-index: 2;
    box-shadow: 0 1px 3px rgba(59, 91, 219, 0.18);
  }

  /* ---------- ? help icon + tooltip ---------- */
  .se-help {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.10);
    color: inherit;
    font-size: 0.72rem;
    font-weight: 700;
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    cursor: help;
    position: relative;
    line-height: 1;
    margin-left: 7px;
  }
  .se-tab.active .se-help { background: rgba(255, 255, 255, 0.25); color: #fff; }
  .se-help::after {
    content: attr(data-tip);
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: #fff;
    padding: 8px 12px;
    border-radius: 7px;
    font-size: 0.82rem;
    font-weight: 400;
    font-family: inherit;
    width: max-content;
    max-width: 240px;
    white-space: normal;
    line-height: 1.4;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .se-help::before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-bottom-color: #1e293b;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s;
    z-index: 10;
  }
  .se-help:hover::after, .se-help:hover::before { opacity: 1; }

  /* ---------- Inputs ---------- */
  .se-input-row {
    display: flex;
    align-items: end;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  }
  .se-field { display: flex; flex-direction: column; gap: 5px; }
  .se-field label {
    font-size: 0.86rem;
    color: var(--ms-muted, #64748b);
    font-weight: 500;
  }
  .se-input {
    font-family: inherit;
    font-size: 1.05rem;
    padding: 9px 12px;
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    width: 110px;
    outline: none;
    background: var(--ms-card, #fff);
    color: var(--ms-text, #1e3a5f);
  }
  .se-input:focus {
    border-color: var(--ms-accent, #3b82f6);
    box-shadow: 0 0 0 3px var(--ms-accent-light, #eff6ff);
  }
  .se-suffix {
    padding-bottom: 11px;
    color: var(--ms-muted, #64748b);
    font-size: 0.96rem;
  }
  .se-action {
    font-family: inherit;
    font-size: 0.96rem;
    font-weight: 500;
    padding: 10px 20px;
    background: var(--ms-header-bg, #3B5BDB);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .se-action:hover { background: var(--ms-header-bg-hover, #2E48C7); }

  /* ---------- Stats ---------- */
  .se-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 18px;
  }
  .se-stats.two-col { grid-template-columns: repeat(2, 1fr); }
  .se-stat {
    background: var(--ms-header-soft, #EEF1FB);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    padding: 10px 14px;
  }
  .se-stat-label {
    font-size: 0.72rem;
    color: var(--ms-muted, #64748b);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
  }
  .se-stat-val {
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--ms-text, #1e3a5f);
    line-height: 1.2;
    word-break: break-all;
  }
  .se-stat-val.accent { color: var(--ms-accent, #3b82f6); }

  .se-section-label {
    font-size: 0.72rem;
    color: var(--ms-muted, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .se-terms-wrap {
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    overflow: auto;
    background: var(--ms-card, #fff);
    max-height: 360px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .se-terms-wrap::-webkit-scrollbar { display: none; }
  .se-terms-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); }
  .se-term-cell {
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 9px 13px;
    border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-right: 1px solid var(--ms-placeholder-border, #cbd5e1);
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    word-break: break-all;
  }
  .se-term-idx {
    color: var(--ms-accent, #3b82f6);
    font-size: 0.84rem;
    font-weight: 500;
    min-width: 26px;
    flex-shrink: 0;
  }
  .se-term-val { color: var(--ms-text, #1e3a5f); font-size: 1.02rem; font-weight: 700; }

  /* ---------- Alerts ---------- */
  .se-alert {
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.02rem;
    border: 1px solid;
  }
  .se-alert-yes { background: #E6F4F4; color: #115E59; border-color: rgba(17, 94, 89, 0.25); }
  .se-alert-no  { background: var(--ms-placeholder-bg, #f1f5f9); color: var(--ms-text, #1e3a5f); border-color: var(--ms-placeholder-border, #cbd5e1); }
  .se-alert-err { background: var(--ms-error-bg, #FBECEC); color: var(--ms-error-text, #991B1B); border-color: var(--ms-error-border, rgba(153, 27, 27, 0.2)); }
  .se-alert-icon {
    flex-shrink: 0;
    width: 26px; height: 26px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.96rem;
  }
  .se-alert-yes .se-alert-icon { background: rgba(17, 94, 89, 0.18); }
  .se-alert-no  .se-alert-icon { background: rgba(0, 0, 0, 0.08); color: var(--ms-muted, #64748b); }
  .se-alert-err .se-alert-icon { background: rgba(153, 27, 27, 0.15); }

  /* ---------- Solver pane ---------- */
  .se-solver-modes {
    display: inline-flex;
    background: var(--ms-placeholder-bg, #f1f5f9);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 9px;
    padding: 4px;
    margin-bottom: 16px;
    gap: 2px;
  }
  .se-solver-mode-btn {
    padding: 8px 16px;
    border: none;
    background: transparent;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.92rem;
    font-weight: 500;
    color: var(--ms-muted, #64748b);
    cursor: pointer;
  }
  .se-solver-mode-btn.active {
    background: #fff;
    color: var(--ms-text, #1e3a5f);
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }
  .se-solver-intro {
    background: var(--ms-header-soft, #EEF1FB);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 16px;
    font-size: 0.96rem;
    color: var(--ms-text-secondary, #475569);
  }
  .se-solver-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin-bottom: 16px;
  }
  .se-solver-cell {
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    padding: 12px;
    background: #fff;
    transition: all 0.15s;
  }
  .se-solver-cell.solving-for {
    border-color: var(--ms-accent, #3b82f6);
    background: var(--ms-accent-light, #eff6ff);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
  }
  .se-solver-cell-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .se-solver-cell-label {
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ms-text, #1e3a5f);
  }
  .se-solver-radio {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.78rem;
    color: var(--ms-muted, #64748b);
    cursor: pointer;
  }
  .se-solver-radio input { margin: 0; cursor: pointer; }
  .se-solver-input {
    font-family: inherit;
    font-size: 1.05rem;
    padding: 8px 10px;
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 6px;
    width: 100%;
    outline: none;
    background: #fff;
    color: var(--ms-text, #1e3a5f);
  }
  .se-solver-input:disabled {
    background: var(--ms-placeholder-bg, #f1f5f9);
    color: var(--ms-muted, #64748b);
    cursor: not-allowed;
  }
  .se-solver-input:focus {
    border-color: var(--ms-accent, #3b82f6);
    box-shadow: 0 0 0 3px var(--ms-accent-light, #eff6ff);
  }
  .se-solver-row { display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap; }
  .se-solver-result {
    background: #E6F4F4;
    color: #115E59;
    border: 1px solid rgba(17, 94, 89, 0.25);
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 1.02rem;
  }
  .se-solver-result strong {
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    font-size: 1.15rem;
  }

  /* ---------- Aside ---------- */
  .se-aside {
    background: var(--ms-card, #fff);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 12px;
    padding: 16px 18px;
    min-height: 720px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .se-aside::-webkit-scrollbar { display: none; }
  .se-aside-section {
    padding: 14px 0;
    border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
  }
  .se-aside-section:first-of-type { padding-top: 0; }
  .se-aside-section:last-of-type { border-bottom: none; padding-bottom: 0; }
  .se-aside-heading {
    font-size: 0.74rem;
    color: var(--ms-faint, #94a3b8);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin: 0 0 10px 0;
  }
  .se-aside-content {
    font-size: 0.96rem;
    color: var(--ms-text-secondary, #475569);
    line-height: 1.6;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    min-height: 80px;
    word-break: break-word;
  }
  .se-aside-content::-webkit-scrollbar { display: none; }
  .se-aside-content p { margin: 5px 0; }

  .se-placeholder {
    width: 90%;
    max-width: 1400px;
    min-height: 720px;
    margin: 0 auto;
  }
`;

function ParametricSequenceExplorer({ name = 'arithmetic' }) {
  // Mount gate — server and initial client render produce the same placeholder.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Current sequence
  const safeName = sequences[name] ? name : 'arithmetic';
  const [currentName, setCurrentName] = useState(safeName);
  const sequence = sequences[currentName] || sequences.arithmetic;

  // Parameters
  const [paramValues, setParamValues] = useState(() => initialParamsFor(sequence));
  const [paramDrafts, setParamDrafts] = useState(() => initialDraftsFor(sequence));

  const inputs = sequence.initialInputs || {};

  const [activeTab, setActiveTab] = useState('browse');

  // Mode states
  const [browseN, setBrowseN] = useState(inputs.browse || '20');
  const [browseResult, setBrowseResult] = useState(() =>
    computeBrowse(inputs.browse || '20', sequence, sequence.maxBrowseCount, paramValues)
  );

  const [rangeA, setRangeA] = useState(inputs.rangeFrom || '5');
  const [rangeB, setRangeB] = useState(inputs.rangeTo || '15');
  const [rangeResult, setRangeResult] = useState(() =>
    computeRange(inputs.rangeFrom || '5', inputs.rangeTo || '15', sequence, sequence.maxRangeSpan, paramValues)
  );

  const [memberM, setMemberM] = useState(inputs.member || '1');
  const [memberResult, setMemberResult] = useState(() =>
    computeMember(inputs.member || '1', sequence, paramValues)
  );

  const [lookupN, setLookupN] = useState(inputs.lookup || '1');
  const [lookupResult, setLookupResult] = useState(() =>
    computeLookup(inputs.lookup || '1', sequence, paramValues)
  );

  // Solver state
  const solverModes = sequence.solverModes || [];
  const [solverModeId, setSolverModeId] = useState(solverModes[0]?.id ?? null);
  const [solverFields, setSolverFields] = useState({});
  const [solverSolveFor, setSolverSolveFor] = useState(solverModes[0]?.defaultSolveFor ?? null);
  const [solverResult, setSolverResult] = useState(null);

  const currentSolverMode = solverModes.find((m) => m.id === solverModeId) || null;

  // When solver mode changes, reset its fields and result.
  const isFirstSolverModeRun = useRef(true);
  useEffect(() => {
    if (isFirstSolverModeRun.current) {
      isFirstSolverModeRun.current = false;
      return;
    }
    if (!currentSolverMode) {
      setSolverFields({});
      setSolverSolveFor(null);
      setSolverResult(null);
      return;
    }
    const f = {};
    currentSolverMode.fields.forEach((field) => { f[field.key] = ''; });
    setSolverFields(f);
    setSolverSolveFor(currentSolverMode.defaultSolveFor ?? null);
    setSolverResult(null);
  }, [solverModeId]);

  // Sequence change — reset everything.
  const isFirstSeqRun = useRef(true);
  useEffect(() => {
    if (isFirstSeqRun.current) {
      isFirstSeqRun.current = false;
      return;
    }
    const seq = sequences[currentName] || sequences.arithmetic;
    const ins = seq.initialInputs || {};
    const newParams = initialParamsFor(seq);
    setParamValues(newParams);
    setParamDrafts(initialDraftsFor(seq));
    setBrowseN(ins.browse || '20');
    setRangeA(ins.rangeFrom || '5');
    setRangeB(ins.rangeTo || '15');
    setMemberM(ins.member || '1');
    setLookupN(ins.lookup || '1');
    setBrowseResult(computeBrowse(ins.browse || '20', seq, seq.maxBrowseCount, newParams));
    setRangeResult(computeRange(ins.rangeFrom || '5', ins.rangeTo || '15', seq, seq.maxRangeSpan, newParams));
    setMemberResult(computeMember(ins.member || '1', seq, newParams));
    setLookupResult(computeLookup(ins.lookup || '1', seq, newParams));
    const sm = seq.solverModes || [];
    setSolverModeId(sm[0]?.id ?? null);
    setSolverSolveFor(sm[0]?.defaultSolveFor ?? null);
    setSolverFields({});
    setSolverResult(null);
    setActiveTab('browse');
    isFirstSolverModeRun.current = true;
  }, [currentName]);

  const applyParams = () => {
    const newParams = {};
    Object.keys(paramDrafts).forEach((k) => { newParams[k] = parseFloat(paramDrafts[k]); });
    setParamValues(newParams);
    setBrowseResult(computeBrowse(browseN, sequence, sequence.maxBrowseCount, newParams));
    setRangeResult(computeRange(rangeA, rangeB, sequence, sequence.maxRangeSpan, newParams));
    setMemberResult(computeMember(memberM, sequence, newParams));
    setLookupResult(computeLookup(lookupN, sequence, newParams));
  };

  const runBrowse = () => setBrowseResult(computeBrowse(browseN, sequence, sequence.maxBrowseCount, paramValues));
  const runRange  = () => setRangeResult(computeRange(rangeA, rangeB, sequence, sequence.maxRangeSpan, paramValues));
  const runMember = () => setMemberResult(computeMember(memberM, sequence, paramValues));
  const runLookup = () => setLookupResult(computeLookup(lookupN, sequence, paramValues));

  const runSolver = () => {
    if (!currentSolverMode) return;
    const parsed = {};
    currentSolverMode.fields.forEach((field) => {
      if (field.key !== solverSolveFor) {
        parsed[field.key] = parseFloat(solverFields[field.key]);
      }
    });
    // Check all required fields are valid numbers.
    const missing = currentSolverMode.fields
      .filter((f) => f.key !== solverSolveFor)
      .find((f) => !Number.isFinite(parsed[f.key]));
    if (missing) {
      setSolverResult({ error: 'Fill all fields except the one being solved for.' });
      return;
    }
    const r = currentSolverMode.compute(parsed, solverSolveFor, paramValues);
    setSolverResult(r);
  };

  const onKey = (handler) => (e) => { if (e.key === 'Enter') handler(); };

  // Pre-mount placeholder
  if (!mounted) {
    return (
      <>
        <style>{SE_STYLES}</style>
        <div className="se-placeholder" />
      </>
    );
  }

  const N = sequence.notation;
  const hasParams = (sequence.parameters || []).length > 0;
  const hasSolver = solverModes.length > 0;
  const TABS = hasSolver ? [...BASE_TABS, SOLVER_TAB] : BASE_TABS;

  const currentResult = {
    browse: browseResult,
    range: rangeResult,
    member: memberResult,
    lookup: lookupResult,
  }[activeTab];

  const modeExp = sequence.modeExplanations && sequence.modeExplanations[activeTab];

  const sequenceKeys = Object.keys(sequences);

  return (
    <>
      <style>{SE_STYLES}</style>
      <div className="se-grid">

        <div className="se-main">
          <div className="se-card">

            <div className="se-card-header">
              <div>
                <h2 className="se-card-title">{sequence.name}</h2>
                <div className="se-card-subtitle">
                  {sequence.formulaDisplay}
                  {sequence.meta && <> &middot; {sequence.meta}</>}
                </div>
              </div>
              <div className="se-picker-wrap">
                <label className="se-picker-label" htmlFor="se-picker">Sequence</label>
                <select
                  id="se-picker"
                  className="se-picker"
                  value={currentName}
                  onChange={(e) => setCurrentName(e.target.value)}
                >
                  {sequenceKeys.map((key) => (
                    <option key={key} value={key}>{sequences[key].name}</option>
                  ))}
                </select>
              </div>
            </div>

            {hasParams && (
              <div className="se-params">
                <div className="se-params-label">Parameters</div>
                {sequence.parameters.map((param) => (
                  <div className="se-param-field" key={param.key}>
                    <label htmlFor={`se-param-${param.key}`}>{param.label}</label>
                    <input
                      id={`se-param-${param.key}`}
                      className="se-param-input"
                      type="number"
                      step="any"
                      value={paramDrafts[param.key] ?? ''}
                      onChange={(e) => setParamDrafts({ ...paramDrafts, [param.key]: e.target.value })}
                      onKeyDown={onKey(applyParams)}
                    />
                  </div>
                ))}
                <button className="se-apply" onClick={applyParams}>Apply</button>
              </div>
            )}

            <div className="se-card-body">

              <div className="se-tabs" role="tablist">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    className={`se-tab${activeTab === tab.id ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span>{tab.label}</span>
                    <span
                      className="se-help"
                      data-tip={tab.tip}
                      onClick={(e) => e.stopPropagation()}
                    >?</span>
                  </button>
                ))}
              </div>

              {activeTab === 'browse' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-b-n">Show first</label>
                      <input id="se-b-n" className="se-input" type="number" min="1"
                        max={sequence.maxBrowseCount || 200} step="1"
                        value={browseN}
                        onChange={(e) => setBrowseN(e.target.value)}
                        onKeyDown={onKey(runBrowse)} />
                    </div>
                    <span className="se-suffix">terms</span>
                    <button className="se-action" onClick={runBrowse}>Update</button>
                  </div>

                  <div className="se-stats">
                    <div className="se-stat">
                      <div className="se-stat-label">Showing</div>
                      <div className="se-stat-val">
                        {browseResult.count} term{browseResult.count === 1 ? '' : 's'}
                      </div>
                    </div>
                    <div className="se-stat">
                      <div className="se-stat-label">Largest</div>
                      <div className="se-stat-val accent">
                        {N}<sub>{browseResult.maxIndex}</sub> = {fmt(browseResult.max)}
                      </div>
                    </div>
                    <div className="se-stat">
                      <div className="se-stat-label">Sum</div>
                      <div className="se-stat-val">{fmt(browseResult.sum)}</div>
                    </div>
                  </div>

                  <div className="se-section-label">First N terms</div>
                  <div className="se-terms-wrap">
                    <div className="se-terms-grid">
                      {browseResult.terms.map((t) => (
                        <div key={t.index} className="se-term-cell">
                          <span className="se-term-idx">{t.index}</span>
                          <span className="se-term-val">{fmt(t.value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'range' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-r-a">From index</label>
                      <input id="se-r-a" className="se-input" type="number" min="1" step="1"
                        value={rangeA} onChange={(e) => setRangeA(e.target.value)} onKeyDown={onKey(runRange)} />
                    </div>
                    <div className="se-field">
                      <label htmlFor="se-r-b">To index</label>
                      <input id="se-r-b" className="se-input" type="number" min="1" step="1"
                        value={rangeB} onChange={(e) => setRangeB(e.target.value)} onKeyDown={onKey(runRange)} />
                    </div>
                    <button className="se-action" onClick={runRange}>List range</button>
                  </div>

                  {rangeResult.error ? (
                    <div className="se-alert se-alert-err">
                      <div className="se-alert-icon">!</div>
                      <div>{rangeResult.error}</div>
                    </div>
                  ) : (
                    <>
                      <div className="se-stats">
                        <div className="se-stat">
                          <div className="se-stat-label">Count</div>
                          <div className="se-stat-val">
                            {rangeResult.count} term{rangeResult.count === 1 ? '' : 's'}
                          </div>
                        </div>
                        <div className="se-stat">
                          <div className="se-stat-label">Smallest</div>
                          <div className="se-stat-val">
                            {N}<sub>{rangeResult.minIndex}</sub> = {fmt(rangeResult.min)}
                          </div>
                        </div>
                        <div className="se-stat">
                          <div className="se-stat-label">Largest</div>
                          <div className="se-stat-val accent">
                            {N}<sub>{rangeResult.maxIndex}</sub> = {fmt(rangeResult.max)}
                          </div>
                        </div>
                      </div>

                      <div className="se-section-label">Terms in range</div>
                      <div className="se-terms-wrap">
                        <div className="se-terms-grid">
                          {rangeResult.terms.map((t) => (
                            <div key={t.index} className="se-term-cell">
                              <span className="se-term-idx">{t.index}</span>
                              <span className="se-term-val">{fmt(t.value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'member' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-m-n">Test number</label>
                      <input id="se-m-n" className="se-input" type="number" step="any" style={{ width: 160 }}
                        value={memberM} onChange={(e) => setMemberM(e.target.value)} onKeyDown={onKey(runMember)} />
                    </div>
                    <button className="se-action" onClick={runMember}>Check</button>
                  </div>

                  {memberResult.error ? (
                    <div className="se-alert se-alert-err">
                      <div className="se-alert-icon">!</div>
                      <div>{memberResult.error}</div>
                    </div>
                  ) : memberResult.isMember ? (
                    <div className="se-alert se-alert-yes">
                      <div className="se-alert-icon">&#10003;</div>
                      <div>
                        <strong>{fmt(memberResult.value)}</strong> is {sequence.memberLabel} &mdash; this is{' '}
                        {N}<sub>{memberResult.index}</sub>.
                      </div>
                    </div>
                  ) : (
                    <div className="se-alert se-alert-no">
                      <div className="se-alert-icon">&times;</div>
                      <div>
                        <strong>{fmt(memberResult.value)}</strong> is not {sequence.memberLabel}.
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'lookup' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-l-n">Index n</label>
                      <input id="se-l-n" className="se-input" type="number" min="1" step="1" style={{ width: 160 }}
                        value={lookupN} onChange={(e) => setLookupN(e.target.value)} onKeyDown={onKey(runLookup)} />
                    </div>
                    <button className="se-action" onClick={runLookup}>Get term</button>
                  </div>

                  {lookupResult.error ? (
                    <div className="se-alert se-alert-err">
                      <div className="se-alert-icon">!</div>
                      <div>{lookupResult.error}</div>
                    </div>
                  ) : (
                    <div className="se-stats two-col">
                      <div className="se-stat">
                        <div className="se-stat-label">Index</div>
                        <div className="se-stat-val">n = {fmt(lookupResult.index)}</div>
                      </div>
                      <div className="se-stat">
                        <div className="se-stat-label">Value</div>
                        <div className="se-stat-val accent">
                          {N}<sub>{lookupResult.index}</sub> = {fmt(lookupResult.value)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'solver' && currentSolverMode && (
                <div>
                  {solverModes.length > 1 && (
                    <div className="se-solver-modes">
                      {solverModes.map((m) => (
                        <button
                          key={m.id}
                          className={`se-solver-mode-btn${solverModeId === m.id ? ' active' : ''}`}
                          onClick={() => setSolverModeId(m.id)}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {currentSolverMode.intro && (
                    <div className="se-solver-intro">{currentSolverMode.intro}</div>
                  )}

                  <div className="se-solver-grid">
                    {currentSolverMode.fields.map((field) => {
                      const isTarget = field.key === solverSolveFor;
                      return (
                        <div
                          key={field.key}
                          className={`se-solver-cell${isTarget ? ' solving-for' : ''}`}
                        >
                          <div className="se-solver-cell-head">
                            <span className="se-solver-cell-label">{field.label}</span>
                            {solverSolveFor !== null && (
                              <label className="se-solver-radio">
                                <input
                                  type="radio"
                                  name="solver-solve-for"
                                  value={field.key}
                                  checked={isTarget}
                                  onChange={() => setSolverSolveFor(field.key)}
                                />
                                solve
                              </label>
                            )}
                          </div>
                          <input
                            className="se-solver-input"
                            type="number"
                            step="any"
                            disabled={isTarget}
                            placeholder={isTarget ? '?' : ''}
                            value={isTarget ? '' : (solverFields[field.key] ?? '')}
                            onChange={(e) => setSolverFields({ ...solverFields, [field.key]: e.target.value })}
                            onKeyDown={onKey(runSolver)}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="se-solver-row">
                    <button className="se-action" onClick={runSolver}>Solve</button>
                  </div>

                  {solverResult !== null && (
                    solverResult.error ? (
                      <div className="se-alert se-alert-err">
                        <div className="se-alert-icon">!</div>
                        <div>{solverResult.error}</div>
                      </div>
                    ) : (
                      <div className="se-solver-result">
                        {currentSolverMode.renderResult
                          ? currentSolverMode.renderResult(solverResult, solverFields, solverSolveFor)
                          : <>Result: <strong>{fmt(solverResult)}</strong></>}
                      </div>
                    )
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        <aside className="se-aside">
          {activeTab === 'solver' && currentSolverMode ? (
            <>
              <section className="se-aside-section">
                <h3 className="se-aside-heading">How it works</h3>
                <div className="se-aside-content">
                  {currentSolverMode.theory ? processContent(currentSolverMode.theory) : null}
                </div>
              </section>
              <section className="se-aside-section">
                <h3 className="se-aside-heading">Walkthrough</h3>
                <div className="se-aside-content">
                  {currentSolverMode.renderWalkthrough && solverResult !== null && !solverResult.error
                    ? processContent(currentSolverMode.renderWalkthrough(solverResult, solverFields, solverSolveFor, paramValues))
                    : null}
                </div>
              </section>
            </>
          ) : modeExp ? (
            <>
              <section className="se-aside-section">
                <h3 className="se-aside-heading">How it works</h3>
                <div className="se-aside-content">{processContent(modeExp.theory)}</div>
              </section>
              <section className="se-aside-section">
                <h3 className="se-aside-heading">Walkthrough</h3>
                <div className="se-aside-content">
                  {processContent(modeExp.renderWalkthrough(currentResult, paramValues))}
                </div>
              </section>
            </>
          ) : null}
        </aside>

      </div>
    </>
  );
}

export default ParametricSequenceExplorer;