'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { ScenePlayer } from './MatrixCore';
import { charPoly, polyRoots, nullSpace, randomEigenMatrix } from './EigenWrapper';

// ===========================================================
// PowerIterationWrapper v1
// The power method for the dominant eigenvalue of a numeric 2×2 or
// 3×3 matrix:
//
//   x₀ given (normalized so its largest entry is 1)
//   repeat: y = A xₖ ; λₖ = the entry of y of largest magnitude ;
//           xₖ₊₁ = y / λₖ
//   the estimates λₖ converge to the eigenvalue of largest modulus
//   and xₖ to its eigenvector, at the rate |λ₂ / λ₁| per step.
//
// Phases carried on each scene: intro, iterate (one per step),
// done. The done scene compares the estimate with the exact dominant
// eigenvalue (from the characteristic polynomial) and explains the
// convergence rate — or the lack of convergence when two eigenvalues
// tie in modulus (a ± pair or a complex pair).
//
// Standalone file: imports the core (ScenePlayer) and the numeric
// engine exported by EigenWrapper (charPoly, polyRoots, nullSpace,
// randomEigenMatrix); modifies nothing. buildScenes and PRESETS are
// exported for the frozen-state diagrams.
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

const PI_INFO =
  'Multiplying a vector by A again and again stretches it most along the ' +
  'eigenvector with the largest |λ|, because that component grows fastest. ' +
  'Rescaling after each product keeps the numbers tame; the scale factor ' +
  'itself converges to the dominant eigenvalue and the vector to its ' +
  'eigenvector. The error shrinks by |λ₂/λ₁| per step, so a close second ' +
  'eigenvalue means slow convergence, and a tie means none.';

const PI_CSS = `
  .pi-stepper-btn:hover:not(:disabled) { color: #1e40af; }
  .pi-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

  .pi-pill:hover { border-color: #94a3b8; }
  .pi-pill-active:hover { border-color: #2563eb; }

  .pi-cell-input {
    width: 46px; height: 34px; text-align: center;
    border: 1px solid #cbd5e1; border-radius: 6px;
    font-family: 'Cambria Math', Georgia, serif; font-size: 15px;
    color: #0f172a; background: white; outline: none;
  }
  .pi-cell-input:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #dbeafe; }

  .pi-btn {
    font-size: 13px; padding: 6px 12px; border-radius: 6px;
    background: white; border: 1px solid #cbd5e1; color: #334155;
    cursor: pointer; font-family: Arial, sans-serif;
  }
  .pi-btn:hover { border-color: #94a3b8; background: #f8fafc; }

  .pi-info:hover, .pi-info:focus { background: #bfdbfe; outline: none; }

  .pi-info .pi-tip {
    visibility: hidden; opacity: 0;
    position: absolute; top: calc(100% + 8px); left: 50%;
    transform: translateX(-50%);
    background: #1e293b; color: #f1f5f9;
    font-size: 12px; line-height: 1.5; font-weight: 400;
    padding: 9px 13px; border-radius: 6px;
    width: 320px; text-align: left;
    pointer-events: none;
    transition: opacity 0.12s ease, visibility 0.12s;
    z-index: 10;
    font-family: Arial, sans-serif;
    font-style: normal;
  }
  .pi-info .pi-tip::before {
    content: ""; position: absolute;
    bottom: 100%; left: 50%; transform: translateX(-50%);
    border: 5px solid transparent; border-bottom-color: #1e293b;
  }
  .pi-info:hover .pi-tip, .pi-info:focus .pi-tip {
    visibility: visible; opacity: 1;
  }
`;

// -----------------------------------------------------------
// Presets
// -----------------------------------------------------------
export const PRESETS = {
  classic: {
    label: 'Classic',
    note: 'eigenvalues 5 and 2: ratio 0.4, converges in a few steps',
    values: [[4, 1], [2, 3]],
    start: [1, 0]
  },
  fast: {
    label: 'Fast',
    note: 'eigenvalues 9 and 1: ratio 0.11, nearly one digit per step',
    values: [[5, 4], [4, 5]],
    start: [1, 0]
  },
  slow: {
    label: 'Slow',
    note: 'eigenvalues 10 and 9: ratio 0.9, crawls',
    values: [[9.5, 0.5], [0.5, 9.5]],
    start: [1, 0]
  },
  negative: {
    label: 'Negative dominant',
    note: 'eigenvalues −3 and 2: the sign is kept by the signed scale factor',
    values: [[1, 2], [2, -2]],
    start: [1, 0]
  },
  three: {
    label: '3×3',
    note: 'eigenvalues 11, 2, 1: ratio 2/11',
    values: [[2, 0, 0], [0, 3, 4], [0, 4, 9]],
    start: [1, 1, 1]
  },
  tie: {
    label: 'Tie ±1',
    note: 'eigenvalues 1 and −1 with equal modulus: no convergence',
    values: [[0, 1], [1, 0]],
    start: [1, 0]
  },
  rotation: {
    label: 'Rotation',
    note: 'complex eigenvalues ±i: the vector just turns',
    values: [[0, -1], [1, 0]],
    start: [1, 0]
  }
};

export const DEFAULT_PRESET = 'classic';
export const DEFAULT_ITERATIONS = 6;

const EPS = 1e-9;
const SUBS = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];

function sub(k) {
  return String(k).split('').map((ch) => SUBS[Number(ch)] || ch).join('');
}

// -----------------------------------------------------------
// Numeric helpers
// -----------------------------------------------------------
function clone(M) {
  return M.map((row) => row.slice());
}

function round4(x) {
  return Math.round(x * 1e4) / 1e4;
}

function fmt(v) {
  const r = round4(v);
  const s = Number.isInteger(r) ? String(r) : r.toFixed(4).replace(/\.?0+$/, '');
  return (s === '-0' ? '0' : s).replace(/-/g, '−');
}

function matVec(A, v) {
  return A.map((row) => row.reduce((s, x, j) => s + x * v[j], 0));
}

function dominantEntry(v) {
  let idx = 0;
  for (let i = 1; i < v.length; i++) if (Math.abs(v[i]) > Math.abs(v[idx]) + EPS) idx = i;
  return idx;
}

function normalizeMax(v) {
  const idx = dominantEntry(v);
  const s = v[idx];
  if (Math.abs(s) < EPS) return { x: v.slice(), scale: 0, idx };
  return { x: v.map((t) => t / s), scale: s, idx };
}

function vecStr(v) {
  return `(${v.map(fmt).join(', ')})`;
}

function sizingFor(n) {
  return n === 2 ? { cellPx: 54, font: '15px' } : { cellPx: 48, font: '14px' };
}

function numCell(v, font, extra) {
  const text = fmt(v);
  const small = text.includes('.');
  return {
    display: text,
    fontStyle: 'normal',
    style: { fontSize: small ? `calc(${font} * 0.8)` : font, ...(extra || {}) }
  };
}

function numMatrix(symbol, M, label, cellPx, font, opts) {
  const n = M.length, m = M[0].length;
  const o = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const extra = opts && opts.cellStyle ? opts.cellStyle(i, j) : null;
      o[`${i},${j}`] = numCell(M[i][j], font, extra);
    }
  }
  return { symbol, rows: n, cols: m, label, cellSize: cellPx, cellOverrides: o, ...(opts && opts.spec ? opts.spec : {}) };
}

function colVec(symbol, v, label, cellPx, font, opts) {
  return numMatrix(symbol, v.map((x) => [x]), label, cellPx, font, { ...(opts || {}), spec: { showDimensions: false, ...((opts && opts.spec) || {}) } });
}

function polyHtml(c) {
  const n = c.length - 1;
  const parts = [];
  for (let i = 0; i <= n; i++) {
    const coef = c[i];
    const deg = n - i;
    if (Math.abs(coef) < EPS) continue;
    const sign = coef < 0 ? '−' : (parts.length ? '+' : '');
    const mag = Math.abs(coef);
    const magStr = (mag === 1 && deg > 0) ? '' : fmt(mag);
    const pow = deg === 0 ? '' : deg === 1 ? 'λ' : `λ<sup>${deg}</sup>`;
    parts.push(`${sign} ${magStr}${pow}`.trim());
  }
  return parts.length ? parts.join(' ') : '0';
}

function rootStr(r) {
  if (Math.abs(r.im) < EPS) return fmt(r.re);
  const imMag = Math.abs(r.im);
  const imS = (Math.abs(imMag - 1) < EPS ? '' : fmt(imMag)) + 'i';
  if (Math.abs(r.re) < EPS) return `${r.im < 0 ? '−' : ''}${imS}`;
  return `${fmt(r.re)} ${r.im < 0 ? '−' : '+'} ${imS}`;
}

// exact spectral facts for the done scene
function analyze(A) {
  const c = charPoly(A);
  const roots = polyRoots(c);
  const mods = roots.map((r) => Math.hypot(r.re, r.im)).sort((a, b) => b - a);
  const top = roots.filter((r) => Math.abs(Math.hypot(r.re, r.im) - mods[0]) < 1e-6);
  const tie = top.length > 1 && !(top.every((r) => Math.abs(r.im) < EPS) && top.every((r) => Math.abs(r.re - top[0].re) < 1e-6));
  const complexTop = top.some((r) => Math.abs(r.im) > EPS);
  const dominant = complexTop ? null : top[0].re;
  const ratio = mods.length > 1 ? (mods[0] > EPS ? mods[1] / mods[0] : 1) : 0;
  let vec = null;
  if (dominant !== null) {
    const S = A.map((row, i) => row.map((x, j) => (i === j ? x - dominant : x)));
    const ns = nullSpace(S);
    if (ns.vecs.length) vec = normalizeMax(ns.vecs[0]).x;
  }
  return { c, roots, dominant, ratio, tie, complexTop, vec };
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
export function buildScenes(values, startVec, iterations = DEFAULT_ITERATIONS) {
  const A = clone(values);
  const n = A.length;
  const N = Math.max(1, Math.round(iterations));
  const { cellPx, font } = sizingFor(n);
  const info = analyze(A);

  let x0 = (startVec || []).slice(0, n);
  while (x0.length < n) x0.push(1);
  if (x0.every((t) => Math.abs(t) < EPS)) x0 = x0.map(() => 1);
  const x0n = normalizeMax(x0);

  const matA = numMatrix('a', A, 'A', cellPx, font);
  const xVec = (v, k, style) => colVec('x', v, `x${sub(k)}`, cellPx, font, style);

  const scenes = [];

  scenes.push({
    phase: 'intro',
    title: `Power iteration on a ${n}×${n} matrix`,
    formula:
      `Start from x₀ = ${vecStr(x0n.x)}` +
      (Math.abs(x0n.scale - 1) > EPS ? ` — the given vector ${vecStr(x0)} rescaled so its largest entry is 1. ` : '. ') +
      'Each step multiplies by A, reads off the entry of largest magnitude as the current estimate of the ' +
      'dominant eigenvalue, and divides by it so the largest entry is 1 again. Repeated multiplication ' +
      'amplifies the eigenvector component with the largest |λ| fastest, so the vector swings toward that ' +
      `eigenvector and the scale factor toward that eigenvalue. ${N} step${N === 1 ? '' : 's'} follow.`,
    matrices: { A: matA, X: xVec(x0n.x, 0) },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'matrix', ref: 'X' }
    ],
    highlights: { X: { cells: x0n.x.map((_, i) => [i, 0, 'primary']) } }
  });

  let x = x0n.x;
  let prevEst = null;
  const estimates = [];
  let converged = false;
  let breakdown = false;

  for (let k = 0; k < N; k++) {
    const y = matVec(A, x);
    const nrm = normalizeMax(y);
    if (nrm.scale === 0) {
      scenes.push({
        phase: 'iterate',
        title: `Step ${k + 1}: A x${sub(k)} = 0`,
        formula:
          `A x${sub(k)} is the zero vector: x${sub(k)} lies in the null space of A, so it is an eigenvector for ` +
          'λ = 0 and the iteration cannot continue. Restart from a different x₀ to find the dominant eigenvalue.',
        matrices: { A: matA, X: xVec(x, k), Y: colVec('y', y, `A x${sub(k)}`, cellPx, font) },
        layout: [
          { type: 'matrix', ref: 'A' },
          { type: 'matrix', ref: 'X' },
          { type: 'operator', symbol: '=' },
          { type: 'matrix', ref: 'Y' }
        ],
        highlights: { Y: { cells: y.map((_, i) => [i, 0, 'muted']) } }
      });
      breakdown = true;
      break;
    }
    const est = nrm.scale;
    estimates.push(est);
    const delta = prevEst === null ? null : Math.abs(est - prevEst);
    const xNext = nrm.x;
    const change = Math.max(...xNext.map((t, i) => Math.abs(t - x[i])));

    scenes.push({
      phase: 'iterate',
      title: `Step ${k + 1}: λ ≈ ${fmt(est)}`,
      formula:
        `A x${sub(k)} = ${vecStr(y)}. The entry of largest magnitude is ${fmt(est)}` +
        ` (position ${nrm.idx + 1}), so λ${sub(k + 1)} = ${fmt(est)} is the new estimate` +
        (delta !== null ? `, a change of ${fmt(delta)} from the last one. ` : '. ') +
        `Divide by it: x${sub(k + 1)} = ${vecStr(xNext)}` +
        (k > 0 ? `, which moved by at most ${fmt(change)} in any entry.` : '.') +
        (info.dominant !== null && !info.tie && delta !== null && delta < 1e-4 && !converged
          ? ' The estimate has settled to four decimals.'
          : ''),
      matrices: {
        A: matA,
        X: xVec(x, k),
        Y: colVec('y', y, `A x${sub(k)}`, cellPx, font),
        Z: xVec(xNext, k + 1)
      },
      layout: [
        { type: 'matrix', ref: 'A' },
        { type: 'matrix', ref: 'X' },
        { type: 'operator', symbol: '=' },
        { type: 'matrix', ref: 'Y' },
        { type: 'operator', symbol: '→' },
        { type: 'matrix', ref: 'Z' }
      ],
      highlights: {
        X: { cells: x.map((_, i) => [i, 0, 'muted']) },
        Y: { cells: [[nrm.idx, 0, 'accent']] },
        Z: { cells: xNext.map((_, i) => [i, 0, 'primary']) }
      },
      overlays: [
        {
          type: 'cell-arrow-curve',
          from: { matrix: 'Y', row: nrm.idx, col: 0 },
          to: { matrix: 'Z', row: nrm.idx, col: 0 },
          style: 'accent', curveOffset: 26, curveDirection: 'up'
        }
      ]
    });

    if (delta !== null && delta < 1e-4) converged = true;
    prevEst = est;
    x = xNext;
  }

  if (breakdown) return scenes;

  const last = estimates[estimates.length - 1];
  const exactStr = info.dominant !== null ? fmt(info.dominant) : null;
  const err = info.dominant !== null ? Math.abs(last - info.dominant) : null;
  const trail = estimates.map((e) => fmt(e)).join(', ');

  let verdict;
  if (info.complexTop) {
    verdict =
      `The eigenvalues of largest modulus are the complex pair ${info.roots.map(rootStr).join(' and ')}: there is no real ` +
      'dominant eigenvector to converge to. The vector keeps turning and the estimates never settle — the power method ' +
      'needs a single real eigenvalue of largest modulus.';
  } else if (info.tie) {
    verdict =
      `Two eigenvalues tie in modulus, ${info.roots.map(rootStr).join(' and ')}. Neither component outgrows the other, so ` +
      'the vector oscillates between two directions and the estimates alternate instead of converging. Shifting the matrix ' +
      '(iterating on A − sI) breaks the tie.';
  } else {
    verdict =
      `The exact dominant eigenvalue, from det(A − λI) = ${polyHtml(info.c)}, is ${exactStr}` +
      (info.vec ? ` with eigenvector ${vecStr(info.vec)} (largest entry scaled to 1)` : '') +
      `. After ${estimates.length} step${estimates.length === 1 ? '' : 's'} the estimate is ${fmt(last)}, off by ${fmt(err)}` +
      (err < 1e-4 ? ' — converged to four decimals. ' : '. ') +
      `The error shrinks by about |λ₂/λ₁| = ${fmt(info.ratio)} per step` +
      (info.ratio > 0.8 ? ', which is why convergence is slow here.' : info.ratio < 0.2 ? ', so it converges fast.' : '.') +
      (info.dominant < 0 ? ' The dominant eigenvalue is negative: keeping the sign of the scale factor keeps the vector steady rather than flipping.' : '');
  }

  scenes.push({
    phase: 'done',
    title: info.complexTop || info.tie ? 'No convergence' : `Dominant eigenvalue ≈ ${fmt(last)}`,
    formula: `Estimates so far: ${trail}. ${verdict}`,
    matrices: {
      A: matA,
      X: xVec(x, estimates.length),
      ...(info.vec ? { V: colVec('v', info.vec, 'exact v', cellPx, font) } : {})
    },
    layout: [
      { type: 'matrix', ref: 'A' },
      { type: 'matrix', ref: 'X' },
      ...(info.vec ? [{ type: 'operator', symbol: '≈' }, { type: 'matrix', ref: 'V' }] : [])
    ],
    highlights: {
      X: { cells: x.map((_, i) => [i, 0, info.complexTop || info.tie ? 'secondary' : 'primary']) },
      ...(info.vec ? { V: { cells: info.vec.map((_, i) => [i, 0, 'target']) } } : {})
    }
  });

  return scenes;
}

function resize(M, n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(M[i] && M[i][j] !== undefined ? M[i][j] : (i === j ? 1 : 0));
    out.push(row);
  }
  return out;
}

function resizeVec(v, n) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(v[i] !== undefined ? v[i] : 1);
  return out;
}

// -----------------------------------------------------------
// UI helpers
// -----------------------------------------------------------
function InfoIcon({ tip }) {
  return (
    <span
      className="pi-info"
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
      <span className="pi-tip">{tip}</span>
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
          className="pi-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >&#9650;</button>
        <button
          className="pi-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >&#9660;</button>
      </span>
    </span>
  );
}

function Pill({ active, onClick, children, title }) {
  return (
    <button
      className={active ? 'pi-pill pi-pill-active' : 'pi-pill'}
      onClick={onClick}
      title={title}
      style={{
        fontSize: '13px',
        padding: '6px 12px',
        borderRadius: '999px',
        background: active ? '#dbeafe' : 'white',
        border: `1px solid ${active ? '#2563eb' : '#cbd5e1'}`,
        cursor: 'pointer',
        color: active ? '#1e40af' : '#334155',
        fontWeight: active ? 600 : 'normal',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {children}
    </button>
  );
}

// ===========================================================
// Main wrapper
// ===========================================================
export default function PowerIterationWrapper({
  defaultPreset = DEFAULT_PRESET,
  defaultIterations = DEFAULT_ITERATIONS,
  iterationRange = [1, 15],
  sizeRange = [2, 3],
  explanations = null,
  title = 'Power Iteration',
  subtitle = 'Multiply by A, rescale, repeat: the scale factor converges to the dominant eigenvalue and the vector to its eigenvector.',
  defaultSpeed = 1800
}) {
  const initialPreset = PRESETS[defaultPreset] ? defaultPreset : DEFAULT_PRESET;
  const [values, setValues] = useState(() => clone(PRESETS[initialPreset].values));
  const [start, setStart] = useState(() => PRESETS[initialPreset].start.slice());
  const [preset, setPreset] = useState(initialPreset);
  const [iterations, setIterations] = useState(defaultIterations);
  const [drafts, setDrafts] = useState({});

  const n = values.length;

  const applyPreset = useCallback((key) => {
    setPreset(key);
    setDrafts({});
    setValues(clone(PRESETS[key].values));
    setStart(PRESETS[key].start.slice());
  }, []);

  const setSize = (nn) => {
    setPreset(null); setDrafts({});
    setValues((v) => resize(v, nn));
    setStart((s) => resizeVec(s, nn));
  };
  const shuffle = () => {
    setPreset(null); setDrafts({});
    setValues(randomEigenMatrix(n));
    setStart(Array.from({ length: n }, (_, i) => (i === 0 ? 1 : 0)));
  };

  const parseRaw = (raw) => {
    const num = parseFloat(raw);
    return Number.isFinite(num) ? num : (raw === '' || raw === '-' ? 0 : null);
  };
  const editCell = (i, j, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`a${i},${j}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setValues((M) => { const next = clone(M); next[i][j] = v; return next; });
  };
  const editStart = (i, raw) => {
    setPreset(null);
    setDrafts((d) => ({ ...d, [`x${i}`]: raw }));
    const v = parseRaw(raw);
    if (v !== null) setStart((s) => { const next = s.slice(); next[i] = v; return next; });
  };
  const commit = (key) => setDrafts((d) => { const next = { ...d }; delete next[key]; return next; });

  const scenes = useMemo(() => {
    const built = buildScenes(values, start, iterations);
    if (!explanations) return built;
    return built.map((sc) => {
      const extra = explanations[sc.phase];
      return extra ? { ...sc, formula: `${sc.formula || ''}${extra}` } : sc;
    });
  }, [values, start, iterations, explanations]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: PI_CSS }} />

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
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
        <div>
          <FieldLabel info={PI_INFO}>Preset</FieldLabel>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '440px' }}>
            {Object.keys(PRESETS).map((key) => (
              <Pill key={key} active={preset === key} onClick={() => applyPreset(key)} title={PRESETS[key].note}>
                {PRESETS[key].label}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Size and steps</FieldLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={n} onChange={setSize} min={sizeRange[0]} max={sizeRange[sizeRange.length - 1]} />
            <span style={{ color: '#94a3b8' }}>&times; {n}</span>
            <span style={{ fontSize: '14px', color: '#334155', marginLeft: '14px' }}>steps</span>
            <Stepper value={iterations} onChange={setIterations} min={iterationRange[0]} max={iterationRange[1]} />
            <button className="pi-btn" onClick={shuffle} style={{ marginLeft: '10px' }} title="A random matrix with small integer eigenvalues">
              Shuffle
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>Entries of A</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {values.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '4px' }}>
                {row.map((val, j) => (
                  <input
                    key={j}
                    className="pi-cell-input"
                    type="text"
                    inputMode="decimal"
                    value={drafts[`a${i},${j}`] !== undefined ? drafts[`a${i},${j}`] : String(Number.isFinite(val) ? val : 0)}
                    onChange={(e) => editCell(i, j, e.target.value)}
                    onBlur={() => commit(`a${i},${j}`)}
                    aria-label={`entry ${i + 1},${j + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <FieldLabel>Start vector x₀</FieldLabel>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
            {start.map((val, i) => (
              <input
                key={i}
                className="pi-cell-input"
                type="text"
                inputMode="decimal"
                value={drafts[`x${i}`] !== undefined ? drafts[`x${i}`] : String(Number.isFinite(val) ? val : 0)}
                onChange={(e) => editStart(i, e.target.value)}
                onBlur={() => commit(`x${i}`)}
                aria-label={`start entry ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

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
