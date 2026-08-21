'use client'
// PolynomialMultiplicationVisualizer.jsx (single-file build, 2-column layout)
//
// All four modules merged: constants/types, pure logic, presentational
// panels, and the top-level visualizer component.
//
// Layout: the two main cards sit side-by-side at 1/2 : 1/2 width on wide
// screens, stacking vertically only when the viewport gets narrow.

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// ============================================================
//   1. CONSTANTS & "TYPES"
// ============================================================

/**
 * @typedef {Object} Term
 * @property {number} coeff
 * @property {number} exp
 *
 * @typedef {Term[]} Polynomial
 *
 * @typedef {Object} Cell
 * @property {number} i
 * @property {number} j
 * @property {number} coeff
 * @property {number} exp
 *
 * @typedef {Object} Preset
 * @property {string} name
 * @property {Polynomial} left
 * @property {Polynomial} right
 */

const VALIDATION_LIMITS = {
  MIN_EXP: 0,
  MAX_EXP: 12,
  MIN_COEFF: -9999,
  MAX_COEFF: 9999,
  MAX_TERMS_PER_POLY: 6,
  MAX_GRID_CELLS: 36,
};

const EXP_PALETTE = [
  { bg: '#e0e7ff', border: '#6366f1', text: '#312e81' }, // 0 — indigo/slate
  { bg: '#fef3c7', border: '#b45309', text: '#78350f' }, // 1 — muted amber
  { bg: '#ccfbf1', border: '#0d9488', text: '#134e4a' }, // 2 — teal
  { bg: '#ede9fe', border: '#7c3aed', text: '#4c1d95' }, // 3 — soft violet
  { bg: '#dcfce7', border: '#16a34a', text: '#14532d' }, // 4 — sage
  { bg: '#dbeafe', border: '#3b82f6', text: '#1e3a8a' }, // 5 — blue
  { bg: '#fef9c3', border: '#a16207', text: '#713f12' }, // 6 — warm sand
  { bg: '#e0f2fe', border: '#0284c7', text: '#0c4a6e' }, // 7 — sky
];

// ============================================================
//   2. PURE LOGIC
// ============================================================

function validateCoefficient(input) {
  if (input === '' || input === null || input === undefined) return 0;
  const n = Number(input);
  if (!Number.isFinite(n)) return 0;
  if (n > VALIDATION_LIMITS.MAX_COEFF) return VALIDATION_LIMITS.MAX_COEFF;
  if (n < VALIDATION_LIMITS.MIN_COEFF) return VALIDATION_LIMITS.MIN_COEFF;
  return n;
}

function validateExponent(input) {
  if (input === '' || input === null || input === undefined) return 0;
  const n = Math.floor(Number(input));
  if (!Number.isFinite(n)) return 0;
  if (n < VALIDATION_LIMITS.MIN_EXP) return VALIDATION_LIMITS.MIN_EXP;
  if (n > VALIDATION_LIMITS.MAX_EXP) return VALIDATION_LIMITS.MAX_EXP;
  return n;
}

function validateTerm(term) {
  return {
    coeff: validateCoefficient(term && term.coeff),
    exp: validateExponent(term && term.exp),
  };
}

function validatePolynomial(poly) {
  if (!Array.isArray(poly)) {
    return { valid: false, error: 'Polynomial must be an array.', terms: [] };
  }
  if (poly.length === 0) {
    return { valid: false, error: 'Polynomial is empty — add at least one term.', terms: [] };
  }
  const capped = poly.slice(0, VALIDATION_LIMITS.MAX_TERMS_PER_POLY);
  const sanitized = capped.map(validateTerm);
  const allZero = sanitized.every(t => t.coeff === 0);
  if (allZero) {
    return { valid: false, error: 'All coefficients are zero.', terms: sanitized };
  }
  return { valid: true, error: null, terms: sanitized };
}

function validatePair(left, right) {
  const L = validatePolynomial(left);
  if (!L.valid) return { valid: false, error: 'Left: ' + L.error };
  const R = validatePolynomial(right);
  if (!R.valid) return { valid: false, error: 'Right: ' + R.error };
  const nzL = dropZeros(L.terms);
  const nzR = dropZeros(R.terms);
  const cells = nzL.length * nzR.length;
  if (cells === 0) {
    return { valid: false, error: 'Both sides need at least one non-zero term.' };
  }
  if (cells > VALIDATION_LIMITS.MAX_GRID_CELLS) {
    return {
      valid: false,
      error: 'Grid too large (' + cells + ' cells, max ' + VALIDATION_LIMITS.MAX_GRID_CELLS + ').',
    };
  }
  return { valid: true, error: null, left: L.terms, right: R.terms };
}

function multiplyTerms(t1, t2) {
  return { coeff: t1.coeff * t2.coeff, exp: t1.exp + t2.exp };
}

function sortByExpDesc(poly) {
  return [...poly].sort((a, b) => b.exp - a.exp);
}

function dropZeros(poly) {
  return poly.filter(t => t.coeff !== 0);
}

function combineByExp(poly) {
  const map = new Map();
  poly.forEach(t => {
    map.set(t.exp, (map.get(t.exp) || 0) + t.coeff);
  });
  const out = [];
  for (const [exp, coeff] of map.entries()) {
    if (coeff !== 0) out.push({ coeff, exp });
  }
  return sortByExpDesc(out);
}

function allProductExponents(left, right) {
  const set = new Set();
  left.forEach(l => right.forEach(r => set.add(l.exp + r.exp)));
  return Array.from(set).sort((a, b) => b - a);
}

function buildCellOrder(leftLen, rightLen) {
  const out = [];
  for (let i = 0; i < leftLen; i++) {
    for (let j = 0; j < rightLen; j++) {
      out.push([i, j]);
    }
  }
  return out;
}

function colorForExp(exp) {
  const safe = Math.max(0, exp);
  return EXP_PALETTE[safe % EXP_PALETTE.length];
}

const MINUS = '\u2212';

function fmtSingleTerm(coeff, exp) {
  if (coeff === 0) return '0';
  const absC = Math.abs(coeff);
  const sign = coeff < 0 ? MINUS : '';
  const coefStr = (exp === 0 || absC !== 1) ? String(absC) : '';
  let xPart = '';
  if (exp === 1) xPart = 'x';
  else if (exp > 1) xPart = 'x<sup>' + exp + '</sup>';
  return sign + coefStr + xPart;
}

function fmtTermWithSign(coeff, exp, isFirst) {
  if (coeff === 0) return '';
  const absC = Math.abs(coeff);
  let sign;
  if (isFirst) sign = coeff < 0 ? MINUS : '';
  else sign = coeff < 0 ? ' ' + MINUS + ' ' : ' + ';
  const coefStr = (exp === 0 || absC !== 1) ? String(absC) : '';
  let xPart = '';
  if (exp === 1) xPart = 'x';
  else if (exp > 1) xPart = 'x<sup>' + exp + '</sup>';
  return sign + coefStr + xPart;
}

function fmtPolynomial(poly) {
  if (!poly || poly.length === 0) return '0';
  const nonZero = dropZeros(poly);
  if (nonZero.length === 0) return '0';
  const sorted = sortByExpDesc(nonZero);
  let s = '';
  sorted.forEach((t, i) => { s += fmtTermWithSign(t.coeff, t.exp, i === 0); });
  return s || '0';
}

function fmtExpLabel(exp) {
  if (exp === 0) return 'constants';
  if (exp === 1) return 'x terms';
  return 'x<sup>' + exp + '</sup> terms';
}

const PRESETS = [
  {
    name: '(x + 2)(x + 3)',
    left:  [{ coeff: 1, exp: 1 }, { coeff: 2, exp: 0 }],
    right: [{ coeff: 1, exp: 1 }, { coeff: 3, exp: 0 }],
  },
  {
    name: '(2x \u2212 1)(x + 4)',
    left:  [{ coeff: 2, exp: 1 }, { coeff: -1, exp: 0 }],
    right: [{ coeff: 1, exp: 1 }, { coeff: 4, exp: 0 }],
  },
  {
    name: '(x\u00b2 \u2212 3x + 2)(2x + 5)',
    left:  [{ coeff: 1, exp: 2 }, { coeff: -3, exp: 1 }, { coeff: 2, exp: 0 }],
    right: [{ coeff: 2, exp: 1 }, { coeff: 5, exp: 0 }],
  },
  {
    name: '(x + 1)(x\u00b2 \u2212 x + 1)',
    left:  [{ coeff: 1, exp: 1 }, { coeff: 1, exp: 0 }],
    right: [{ coeff: 1, exp: 2 }, { coeff: -1, exp: 1 }, { coeff: 1, exp: 0 }],
  },
  {
    name: '(2x\u00b2 + x \u2212 3)(x\u00b2 \u2212 2x + 1)',
    left:  [{ coeff: 2, exp: 2 }, { coeff: 1, exp: 1 }, { coeff: -3, exp: 0 }],
    right: [{ coeff: 1, exp: 2 }, { coeff: -2, exp: 1 }, { coeff: 1, exp: 0 }],
  },
];

// ============================================================
//   3. PRESENTATIONAL PANELS
// ============================================================

function PresetPanel({ presets, activePresetIdx, onSelect }) {
  return (
    <div className="pm-presets">
      {presets.map((p, i) => (
        <button
          key={i}
          type="button"
          className={'pm-preset' + (activePresetIdx === i ? ' active' : '')}
          onClick={() => onSelect(i)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}

function TermEditor({ term, index, onChange, onRemove, canRemove }) {
  const selectAll = (e) => e.target.select();
  return (
    <div className="pm-term-row">
      <input
        type="number"
        value={term.coeff}
        step={1}
        onChange={(e) => onChange(index, 'coeff', e.target.value)}
        onFocus={selectAll}
        aria-label="coefficient"
      />
      <span className="pm-x-label">x</span>
      <input
        type="number"
        className="pm-exp-input"
        value={term.exp}
        min={0}
        step={1}
        onChange={(e) => onChange(index, 'exp', e.target.value)}
        onFocus={selectAll}
        aria-label="exponent"
      />
      <button
        type="button"
        className="pm-remove-btn"
        onClick={() => onRemove(index)}
        disabled={!canRemove}
        title="remove term"
        aria-label="remove term"
      >
        ×
      </button>
    </div>
  );
}

function PolynomialEditor({
  label,
  poly,
  onTermChange,
  onTermRemove,
  onTermAdd,
  canAdd,
}) {
  const display = fmtPolynomial(poly);
  return (
    <div className="pm-editor">
      <div className="pm-editor-label">{label}</div>
      <div
        className="pm-editor-display"
        dangerouslySetInnerHTML={{ __html: display }}
      />
      <div className="pm-term-rows">
        {poly.map((t, i) => (
          <TermEditor
            key={i}
            term={t}
            index={i}
            onChange={onTermChange}
            onRemove={onTermRemove}
            canRemove={poly.length > 1}
          />
        ))}
      </div>
      <button
        type="button"
        className="pm-add-term-btn"
        onClick={onTermAdd}
        disabled={!canAdd}
      >
        + add term
      </button>
    </div>
  );
}

function ControlsPanel({ onStep, onAuto, onReset, playing, idx, total, error }) {
  const blocked = Boolean(error);
  const atEnd = idx >= total;
  return (
    <div className="pm-controls">
      <button
        type="button"
        className="pm-btn"
        onClick={onStep}
        disabled={blocked || atEnd}
      >
        Step ▶
      </button>
      <button
        type="button"
        className={'pm-btn primary' + (playing ? ' playing' : '')}
        onClick={onAuto}
        disabled={blocked}
      >
        {playing ? '⏸ Pause' : (atEnd ? 'Replay' : 'Auto-expand')}
      </button>
      <button type="button" className="pm-btn" onClick={onReset}>↺ Reset</button>
      <div className="pm-controls-spacer" />
      <div className="pm-status">
        {error ? (
          <span className="pm-status-err">{error}</span>
        ) : (
          <span>{idx} / {total} cells</span>
        )}
      </div>
    </div>
  );
}

function GridPanel({ leftSorted, rightSorted, deliveredCells, hotCellKey }) {
  if (leftSorted.length === 0 || rightSorted.length === 0) {
    return (
      <div className="pm-grid-empty">
        Both polynomials need at least one non-zero term to form a grid.
      </div>
    );
  }
  const delivered = new Set(deliveredCells.map(c => c.i + '_' + c.j));
  return (
    <div className="pm-grid-area">
      <table className="pm-product-grid">
        <thead>
          <tr>
            <th className="pm-grid-corner" />
            {rightSorted.map((rt, ri) => (
              <th
                key={ri}
                className="pm-grid-header"
                dangerouslySetInnerHTML={{ __html: fmtSingleTerm(rt.coeff, rt.exp) }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {leftSorted.map((lt, li) => (
            <tr key={li}>
              <th
                className="pm-grid-header"
                dangerouslySetInnerHTML={{ __html: fmtSingleTerm(lt.coeff, lt.exp) }}
              />
              {rightSorted.map((rt, ri) => {
                const coeff = lt.coeff * rt.coeff;
                const exp = lt.exp + rt.exp;
                const cellKey = li + '_' + ri;
                const isDelivered = delivered.has(cellKey);
                const isHot = hotCellKey === cellKey;
                const col = colorForExp(exp);
                const style = isDelivered
                  ? { background: col.bg, borderColor: col.border, color: col.text }
                  : undefined;
                return (
                  <td
                    key={ri}
                    className={
                      'pm-grid-cell'
                      + (isHot ? ' hot' : '')
                      + (isDelivered ? ' collected' : '')
                    }
                    style={style}
                    dangerouslySetInnerHTML={{ __html: fmtSingleTerm(coeff, exp) }}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BucketPanel({ exponents, deliveredCells, flashedExp }) {
  if (exponents.length === 0) return null;
  return (
    <div className="pm-buckets">
      {exponents.map(exp => {
        const col = colorForExp(exp);
        const ofExp = deliveredCells.filter(c => c.exp === exp);
        const sum = ofExp.reduce((s, c) => s + c.coeff, 0);
        return (
          <div
            key={exp}
            className={'pm-bucket' + (flashedExp === exp ? ' hot' : '')}
            style={{ background: col.bg, borderColor: col.border }}
          >
            <div className="pm-bucket-header" style={{ color: col.text }}>
              <span dangerouslySetInnerHTML={{ __html: fmtExpLabel(exp) }} />
              <span className="pm-bucket-exp">exp = {exp}</span>
            </div>
            <div className="pm-bucket-contributions" style={{ color: col.text }}>
              {ofExp.length === 0 ? (
                <span className="pm-bucket-empty">(empty)</span>
              ) : (
                ofExp.map((c, i) => {
                  const sign = c.coeff < 0 ? MINUS : (i === 0 ? '' : '+');
                  return (
                    <span key={i} className="pm-contrib">
                      {sign} {Math.abs(c.coeff)}
                    </span>
                  );
                })
              )}
            </div>
            <div className="pm-bucket-sum" style={{ color: col.text }}>
              sum:&nbsp;
              <span
                className="pm-bucket-coef"
                dangerouslySetInnerHTML={{ __html: fmtSingleTerm(sum, exp) }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FinalPanel({ resultHtml, done }) {
  return (
    <div className={'pm-final' + (done ? ' done' : '')}>
      <div className="pm-final-label">{done ? 'Result' : 'Result (pending)'}</div>
      <div
        className="pm-final-eq"
        dangerouslySetInnerHTML={{
          __html: 'P(x) &middot; Q(x) = ' + (done ? resultHtml : '?'),
        }}
      />
    </div>
  );
}

// ============================================================
//   4. STYLES
// ============================================================

const PM_STYLES = `
.pm-wrap {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1e3a5f;
  max-width: 1400px;
  margin: 0 auto;
}
.pm-sub {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 16px;
  line-height: 1.5;
}

/* Two-column container: left card and right card sit side by side. */
.pm-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
}
@media (max-width: 980px) {
  .pm-columns { grid-template-columns: 1fr; }
}

.pm-card {
  background: #fff;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  min-width: 0;       /* allow card to shrink inside grid track */
}
.pm-card-title {
  font-size: 0.74rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 12px;
}
.pm-explain {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.55;
  margin-bottom: 14px;
  padding: 12px 14px;
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
  border-radius: 6px;
}
.pm-explain b { color: #1e3a5f; }
.pm-explain.error {
  background: #fef2f2;
  border-left-color: #fca5a5;
  color: #991b1b;
}

/* Presets */
.pm-presets {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.pm-preset {
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 0.95rem;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
}
.pm-preset:hover {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1e3a5f;
}
.pm-preset.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

/* Editors — stacked vertically (the left card is half-width now). */
.pm-editors {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
.pm-editor {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px;
  background: #f8fafc;
}
.pm-editor-label {
  font-size: 0.74rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 8px;
}
.pm-editor-display {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a5f;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-align: center;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.pm-editor-display sup { font-size: 0.7em; }
.pm-term-rows {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.pm-term-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.pm-term-row input[type="number"] {
  width: 60px;
  padding: 5px 6px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  font-family: inherit;
  font-size: 0.9rem;
  text-align: center;
  background: #fff;
  color: #1e3a5f;
}
.pm-term-row input[type="number"]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.18);
}
.pm-term-row .pm-x-label {
  font-style: italic;
  color: #475569;
  font-weight: 700;
}
.pm-term-row .pm-exp-input {
  width: 50px;
}
.pm-term-row .pm-remove-btn {
  width: 26px;
  height: 26px;
  border-radius: 5px;
  border: 1px solid #cbd5e1;
  background: #f1f5f9;
  color: #64748b;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1;
}
.pm-term-row .pm-remove-btn:hover:not(:disabled) {
  background: #fef2f2;
  border-color: #fca5a5;
  color: #991b1b;
}
.pm-term-row .pm-remove-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.pm-add-term-btn {
  margin-top: 8px;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px dashed #94a3b8;
  background: #fff;
  color: #475569;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
}
.pm-add-term-btn:hover:not(:disabled) {
  background: #f1f5f9;
  border-color: #475569;
  color: #1e3a5f;
}
.pm-add-term-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Controls */
.pm-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 12px 0 0 0;
  border-top: 1px solid #e2e8f0;
  margin-top: 14px;
  align-items: center;
}
.pm-controls-spacer { flex: 1; }
.pm-btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #fff;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  color: #475569;
  transition: all 0.15s;
}
.pm-btn:hover:not(:disabled) {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1e3a5f;
}
.pm-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.pm-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-color: transparent;
}
.pm-btn.primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}
.pm-btn.primary.playing {
  background: #fef3c7;
  color: #78350f;
  border: 1px solid #b45309;
}
.pm-btn.primary.playing:hover:not(:disabled) {
  background: #fde68a;
}
.pm-status {
  font-size: 0.85rem;
  color: #64748b;
}
.pm-status-err {
  color: #991b1b;
  font-weight: 600;
}

/* Grid */
.pm-grid-area {
  display: flex;
  justify-content: center;
  padding: 12px 0;
  overflow-x: auto;
}
.pm-grid-empty {
  color: #94a3b8;
  padding: 30px;
  font-style: italic;
  text-align: center;
}
table.pm-product-grid {
  border-collapse: separate;
  border-spacing: 5px;
  font-family: "Cambria Math", Georgia, serif;
}
table.pm-product-grid th,
table.pm-product-grid td {
  text-align: center;
  padding: 0;
}
.pm-grid-corner { background: transparent; }
.pm-grid-header {
  background: #f1f5f9;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a5f;
  min-width: 60px;
}
.pm-grid-header sup { font-size: 0.7em; }
.pm-grid-cell {
  border-radius: 8px;
  padding: 10px 8px;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
  font-weight: 700;
  color: #1e3a5f;
  min-width: 60px;
  cursor: pointer;
  transition: all 0.3s;
  background: #fff;
}
.pm-grid-cell sup { font-size: 0.7em; }
.pm-grid-cell.hot {
  transform: scale(1.08);
  box-shadow: 0 4px 14px rgba(59,130,246,0.25);
  border-color: #3b82f6;
  background: #eff6ff;
  z-index: 5;
}

/* Buckets */
.pm-buckets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 10px;
  margin-top: 16px;
}
.pm-bucket {
  border-radius: 10px;
  padding: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s;
  min-height: 110px;
}
.pm-bucket.hot {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}
.pm-bucket-header {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.pm-bucket-header sup { font-size: 0.7em; }
.pm-bucket-exp {
  font-size: 0.68rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}
.pm-bucket-contributions {
  font-family: "Cambria Math", Georgia, serif;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 6px 0;
  min-height: 26px;
  opacity: 0.85;
}
.pm-contrib { margin-right: 8px; }
.pm-bucket-empty {
  opacity: 0.5;
  font-style: italic;
  font-size: 0.85rem;
}
.pm-bucket-sum {
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px dashed rgba(0,0,0,0.15);
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1rem;
  font-weight: 700;
}
.pm-bucket-sum sup { font-size: 0.7em; }
.pm-bucket-coef {
  font-size: 1.15rem;
  font-weight: 700;
}

/* Final */
.pm-final {
  margin-top: 18px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-radius: 12px;
  font-family: "Cambria Math", Georgia, serif;
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.3s;
}
.pm-final.done { opacity: 1; }
.pm-final sup { font-size: 0.7em; }
.pm-final-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
  margin-bottom: 6px;
  font-weight: 600;
}
.pm-final-eq sup { font-size: 0.7em; }
`;

// ============================================================
//   5. MAIN COMPONENT
// ============================================================

export default function PolynomialMultiplicationVisualizer() {
  const DEFAULT_PRESET = 2;

  const [left, setLeft] = useState(() => PRESETS[DEFAULT_PRESET].left.map(t => ({ ...t })));
  const [right, setRight] = useState(() => PRESETS[DEFAULT_PRESET].right.map(t => ({ ...t })));
  const [activePresetIdx, setActivePresetIdx] = useState(DEFAULT_PRESET);

  const [collected, setCollected] = useState([]);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hotCellKey, setHotCellKey] = useState(null);
  const [flashedExp, setFlashedExp] = useState(null);
  const hotTimerRef = useRef(null);

  const validation = useMemo(() => validatePair(left, right), [left, right]);
  const leftSorted = useMemo(() => dropZeros(sortByExpDesc(left)), [left]);
  const rightSorted = useMemo(() => dropZeros(sortByExpDesc(right)), [right]);
  const cellOrder = useMemo(
    () => buildCellOrder(leftSorted.length, rightSorted.length),
    [leftSorted, rightSorted]
  );
  const totalCells = cellOrder.length;
  const exponents = useMemo(
    () => allProductExponents(leftSorted, rightSorted),
    [leftSorted, rightSorted]
  );
  const finalHtml = useMemo(() => {
    if (idx < totalCells || totalCells === 0) return '';
    const combined = combineByExp(collected);
    return fmtPolynomial(combined);
  }, [collected, idx, totalCells]);

  const deliverOne = useCallback(() => {
    if (idx >= totalCells) return;
    const [i, j] = cellOrder[idx];
    const lt = leftSorted[i];
    const rt = rightSorted[j];
    const product = multiplyTerms(lt, rt);

    setCollected(prev => [...prev, { i, j, coeff: product.coeff, exp: product.exp }]);
    setIdx(prev => prev + 1);
    setHotCellKey(i + '_' + j);
    setFlashedExp(product.exp);

    if (hotTimerRef.current) clearTimeout(hotTimerRef.current);
    hotTimerRef.current = setTimeout(() => {
      setHotCellKey(null);
      setFlashedExp(null);
    }, 360);
  }, [idx, totalCells, cellOrder, leftSorted, rightSorted]);

  useEffect(() => {
    if (!playing) return undefined;
    if (idx >= totalCells) {
      setPlaying(false);
      return undefined;
    }
    const t = setTimeout(deliverOne, 480);
    return () => clearTimeout(t);
  }, [playing, idx, totalCells, deliverOne]);

  useEffect(() => {
    setPlaying(false);
    setCollected([]);
    setIdx(0);
    setHotCellKey(null);
    setFlashedExp(null);
  }, [left, right]);

  useEffect(() => {
    return () => {
      if (hotTimerRef.current) clearTimeout(hotTimerRef.current);
    };
  }, []);

  const handleStep = () => {
    setPlaying(false);
    deliverOne();
  };
  const handleAuto = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (idx >= totalCells) {
      setCollected([]);
      setIdx(0);
    }
    setPlaying(true);
  };
  const handleReset = () => {
    setPlaying(false);
    setCollected([]);
    setIdx(0);
    setHotCellKey(null);
    setFlashedExp(null);
  };

  const editTerm = (which) => (i, field, rawValue) => {
    const setter = which === 'left' ? setLeft : setRight;
    setter(prev => {
      const next = [...prev];
      const sanitized = field === 'coeff'
        ? validateCoefficient(rawValue)
        : validateExponent(rawValue);
      next[i] = { ...next[i], [field]: sanitized };
      return next;
    });
    setActivePresetIdx(null);
  };
  const removeTerm = (which) => (i) => {
    const setter = which === 'left' ? setLeft : setRight;
    setter(prev => prev.length > 1 ? prev.filter((_, k) => k !== i) : prev);
    setActivePresetIdx(null);
  };
  const addTerm = (which) => () => {
    const setter = which === 'left' ? setLeft : setRight;
    setter(prev =>
      prev.length >= VALIDATION_LIMITS.MAX_TERMS_PER_POLY
        ? prev
        : [...prev, { coeff: 1, exp: 0 }]
    );
    setActivePresetIdx(null);
  };

  const onPresetSelect = (i) => {
    setActivePresetIdx(i);
    setLeft(PRESETS[i].left.map(t => ({ ...t })));
    setRight(PRESETS[i].right.map(t => ({ ...t })));
  };

  const canAddLeft  = left.length  < VALIDATION_LIMITS.MAX_TERMS_PER_POLY;
  const canAddRight = right.length < VALIDATION_LIMITS.MAX_TERMS_PER_POLY;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PM_STYLES }} />

      <div className="pm-wrap">
        <div className="pm-sub">
          FOIL, generalized. Multiply each term of the left polynomial by each term of the right &mdash;
          that&apos;s the grid. Group cells with the same power of x into like-term buckets, then sum each bucket.
        </div>

        <div className="pm-columns">
          {/* LEFT card — inputs and controls */}
          <div className="pm-card">
            <div className="pm-card-title">Pick an example or build your own</div>

            <PresetPanel
              presets={PRESETS}
              activePresetIdx={activePresetIdx}
              onSelect={onPresetSelect}
            />

            <div className="pm-editors">
              <PolynomialEditor
                label="Left polynomial — P(x)"
                poly={left}
                onTermChange={editTerm('left')}
                onTermRemove={removeTerm('left')}
                onTermAdd={addTerm('left')}
                canAdd={canAddLeft}
              />
              <PolynomialEditor
                label="Right polynomial — Q(x)"
                poly={right}
                onTermChange={editTerm('right')}
                onTermRemove={removeTerm('right')}
                onTermAdd={addTerm('right')}
                canAdd={canAddRight}
              />
            </div>

            <ControlsPanel
              onStep={handleStep}
              onAuto={handleAuto}
              onReset={handleReset}
              playing={playing}
              idx={idx}
              total={totalCells}
              error={validation.valid ? null : validation.error}
            />
          </div>

          {/* RIGHT card — results */}
          <div className="pm-card">
            <div className="pm-card-title">P(x) &middot; Q(x) — pairwise products and collection</div>

            <div className={'pm-explain' + (validation.valid ? '' : ' error')}>
              {validation.valid ? (
                <>
                  Left has <b>{leftSorted.length}</b> {leftSorted.length === 1 ? 'term' : 'terms'},
                  right has <b>{rightSorted.length}</b> {rightSorted.length === 1 ? 'term' : 'terms'}.
                  Distributing gives <b>{leftSorted.length} × {rightSorted.length} = {totalCells}</b> pairwise products.
                  Each cell&apos;s exponent is the sum of its row and column exponents &mdash; that&apos;s how
                  products group into like-term buckets.
                </>
              ) : (
                <>{validation.error}</>
              )}
            </div>

            <GridPanel
              leftSorted={leftSorted}
              rightSorted={rightSorted}
              deliveredCells={collected}
              hotCellKey={hotCellKey}
            />

            <BucketPanel
              exponents={exponents}
              deliveredCells={collected}
              flashedExp={flashedExp}
            />

            <FinalPanel
              resultHtml={finalHtml}
              done={totalCells > 0 && idx >= totalCells}
            />
          </div>
        </div>
      </div>
    </>
  );
}