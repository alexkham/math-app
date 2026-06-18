'use client';

import { useRef, useEffect, useState, useMemo } from 'react';

/* =========================================================================
 *  FunctionNewtonMethod
 *  Newton-Raphson root finder visualizer with three scenarios:
 *    fast · cross · flat (failure mode)
 *  Plus manual stepping after dragging x₀ on the x-axis.
 *
 *  Public API:
 *    <FunctionNewtonMethod />                              // all defaults
 *    <FunctionNewtonMethod explanations={{
 *      meaning: { fail: { title: 'My fail title' } },      // partial override
 *      theory:  { definition: { body: 'Custom body' } }
 *    }} />
 *
 *  Override semantics:
 *  - explanations.meaning.{success|fail}.{badge|title|text|notePill|note} — per field
 *  - explanations.theory.{definition|geometric|quadratic|failureModes|onThisFunction}.{lbl|body|eq}
 *  - Computation tab is hardcoded — not overridable
 *
 *  Text strings can use {iters}, {plural}, {finalErr}, {x0}, {dfx0}, {xnext}
 *  as placeholders — the component substitutes them at render time.
 *  Spans using var(--vMain), var(--vDeep), var(--vMid) auto-theme between
 *  blue (success) and red (failure).
 * ========================================================================= */

/* ---------- model ---------- */
const f  = (x) => x*x*x - 2*x - 5;
const fp = (x) => 3*x*x - 2;
const ROOT = 2.0945514815423265;

const X_MIN = -2, X_MAX = 4;
const Y_MIN = -10, Y_MAX = 22;

const SCENARIOS = {
  fast:  { x0:  3.0,  maxIter: 4, failOnFirst: false, glyph: '→', label: 'Direct hit',   x0Label: 'x₀ = 3'    },
  cross: { x0: -1.0,  maxIter: 5, failOnFirst: false, glyph: '↻', label: 'Crosses over', x0Label: 'x₀ = −1'   },
  flat:  { x0:  0.85, maxIter: 1, failOnFirst: true,  glyph: '⚠', label: 'Stalls',       x0Label: 'x₀ = 0.85' },
};

const PHASE = {
  mark:    { dur: 380 },
  tangent: { dur: 560 },
  toAxis:  { dur: 620 },
  toCurve: { dur: 520 },
  settle:  { dur: 280 },
};
const PHASE_ORDER = ['mark','tangent','toAxis','toCurve','settle'];

const DEFAULT_X0 = 3.0;

/* ---------- helpers ---------- */
const ease   = (t) => t * t * (3 - 2 * t);
const fmt    = (n, d = 2) => (Math.abs(n) < 1e-9 ? '0.00' : n.toFixed(d));
const clampX = (x) => Math.max(X_MIN + 0.05, Math.min(X_MAX - 0.05, x));

function subscript(n) {
  const map = ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉'];
  return String(n).split('').map((d) => map[+d] || d).join('');
}

function substituteVars(s, vars) {
  if (typeof s !== 'string') return s;
  return s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
}

/* ---------- inline-style emphasis (vars resolve from verdict-state wrapper) ---------- */
const HLB  = (s) => `<span style="color:var(--vMain);font-weight:700">${s}</span>`;
const HLD  = (s) => `<span style="color:var(--vDeep);font-weight:700">${s}</span>`;
const HL   = (s) => `<span style="background:var(--vMid);color:var(--vDeep);padding:1px 5px;border-radius:3px;font-weight:600">${s}</span>`;
const STR  = (s) => `<strong style="color:var(--vDeep)">${s}</strong>`;
const CODE = (s) => `<code style="font-family:'SF Mono',ui-monospace,Menlo,Monaco,Consolas,monospace;background:#eff6ff;padding:1px 5px;border-radius:3px;color:#1e3a8a">${s}</code>`;

/* =========================================================================
 *  DEFAULT EXPLANATIONS
 * ========================================================================= */
const DEFAULT_EXPLANATIONS = {
  meaning: {
    success: {
      badge: 'Converged',
      title: 'Quadratic convergence ↘',
      text:
        `Each tangent step pulled the guess sharply toward the root. After ` +
        `${HLB('{iters} iteration{plural}')}, the error has fallen to ${HL('{finalErr}')}. ` +
        `In the easy basin, each step roughly squares the error — that&apos;s why Newton beats bisection by orders of magnitude.`,
      notePill: 'why',
      note:
        `For a simple root α, e<sub>n+1</sub> ≈ |f&Prime;(α) / (2f&prime;(α))| · e<sub>n</sub><sup>2</sup>. ` +
        `Each correct digit roughly produces two more on the next step — far faster than bisection&apos;s linear halving.`,
    },
    fail: {
      badge: 'Stalls',
      title: 'Tangent nearly horizontal ⚠',
      text:
        `At x₀ = ${HLB('{x0}')}, ${HLB('f&prime;(x₀) = {dfx0}')} — close to a critical point. ` +
        `The tangent is almost horizontal, so its x-intercept lies far away: ` +
        `${HLD('x₁ = x₀ − f/f&prime; ≈ {xnext}')}. ` +
        `Newton flew off the chart and would need many recovery steps from there.`,
      notePill: 'why this fails',
      note:
        `The correction f / f&prime; blows up whenever f&prime; is small relative to f. ` +
        `Starts near critical points of f (where f&prime; ≈ 0) are unsafe for Newton.`,
    },
  },
  theory: {
    definition: {
      lbl: 'Definition',
      body: 'Newton&apos;s method finds a root of a differentiable f by iterating:',
      eq:   'x<sub>n+1</sub> = x<sub>n</sub> − f(x<sub>n</sub>) / f&prime;(x<sub>n</sub>)',
    },
    geometric: {
      lbl: 'Geometric derivation',
      body:
        `The tangent at ${CODE('(x<sub>n</sub>, f(x<sub>n</sub>))')} has equation ` +
        `${CODE('y = f&prime;(x<sub>n</sub>)(x − x<sub>n</sub>) + f(x<sub>n</sub>)')}. ` +
        `Setting ${CODE('y = 0')} and solving for x gives ` +
        `${CODE('x = x<sub>n</sub> − f(x<sub>n</sub>) / f&prime;(x<sub>n</sub>)')}. That&apos;s the next iterate.`,
    },
    quadratic: {
      lbl: 'Quadratic convergence',
      body:
        `Near a simple root α (where f(α) = 0 and f&prime;(α) ≠ 0), with error ` +
        `${CODE('e<sub>n</sub> = x<sub>n</sub> − α')}, Taylor expansion gives ` +
        `${CODE('e<sub>n+1</sub> ≈ (f&Prime;(α) / 2f&prime;(α)) · e<sub>n</sub><sup>2</sup>')}. ` +
        `The error shrinks like the square of the previous error — the count of correct digits roughly doubles per step.`,
    },
    failureModes: {
      lbl: 'Failure modes',
      body:
        `<ul style="margin:6px 0 0;padding-left:18px;font-size:12.5px;line-height:1.6;color:#0f172a">` +
        `<li style="margin-bottom:3px"><strong>Flat tangent.</strong> If f&prime;(x<sub>n</sub>) ≈ 0, the correction f/f&prime; blows up and x<sub>n+1</sub> lands far from the root.</li>` +
        `<li style="margin-bottom:3px"><strong>Cycle.</strong> Certain initial guesses lead to a periodic sequence (Newton can oscillate forever).</li>` +
        `<li><strong>Divergence.</strong> For functions like arctan(x), starts far from the root drive |x<sub>n</sub>| to grow without bound.</li>` +
        `</ul>`,
    },
    onThisFunction: {
      lbl: 'On this function',
      body:
        `For ${CODE('f(x) = x³ − 2x − 5')}, ${CODE('f&prime;(x) = 3x² − 2')}. ` +
        `Critical points sit at ${CODE('x = ±√(2/3) ≈ ±0.816')}. The only real root is ` +
        `${CODE('α ≈ 2.0946')}. There ${CODE('f&prime;(α) ≈ 11.16')}, comfortably away from zero, ` +
        `so any start in the right basin converges quadratically.`,
    },
  },
};

function mergeExplanations(overrides) {
  const out = { meaning: {}, theory: {} };
  ['success', 'fail'].forEach((k) => {
    out.meaning[k] = { ...DEFAULT_EXPLANATIONS.meaning[k], ...(overrides?.meaning?.[k] || {}) };
  });
  ['definition', 'geometric', 'quadratic', 'failureModes', 'onThisFunction'].forEach((k) => {
    out.theory[k] = { ...DEFAULT_EXPLANATIONS.theory[k], ...(overrides?.theory?.[k] || {}) };
  });
  return out;
}

/* =========================================================================
 *  Iteration computation
 * ========================================================================= */
function computeIterations(x0, maxIter, failOnFirst) {
  const out = [];
  let x = x0;
  for (let i = 0; i < maxIter; i++) {
    const fx = f(x);
    const dfx = fp(x);
    if (Math.abs(dfx) < 1e-6) {
      out.push({ x, fx, dfx, corr: NaN, xNext: NaN, failed: 'flat' });
      break;
    }
    const corr = fx / dfx;
    const xNext = x - corr;
    const flew = Math.abs(xNext) > X_MAX + 30 || (failOnFirst && Math.abs(corr) > 6);
    out.push({ x, fx, dfx, corr, xNext, flew });
    if (flew) break;
    if (Math.abs(fx) < 1e-7) break;
    x = xNext;
  }
  return out;
}

/* =========================================================================
 *  drawScene — pure canvas draw, no React
 * ========================================================================= */
function drawScene(canvas, scene) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.clientWidth;
  const H = canvas.clientHeight;

  const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
  const yToPx = (y) => H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * H;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);

  // grid (minor + major)
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#eef2f7';
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    for (let s = 1; s < 5; s++) {
      const xv = x + s * 0.2; if (xv < X_MIN || xv > X_MAX) continue;
      const px = xToPx(xv);
      ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
    }
  }
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 2) {
    const py = yToPx(y);
    ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(W, py); ctx.stroke();
  }
  ctx.strokeStyle = '#e6eaf2';
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    const px = xToPx(x);
    ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
  }
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 5) {
    const py = yToPx(y);
    ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(W, py); ctx.stroke();
  }
  ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.25;
  const y0 = yToPx(0), x0Px = xToPx(0);
  ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(W, y0); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x0Px, 0); ctx.lineTo(x0Px, H); ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '11px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    if (x === 0) continue;
    ctx.fillText(String(x), xToPx(x), y0 + 4);
  }
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 5) {
    if (y === 0) continue;
    ctx.fillText(String(y), x0Px - 5, yToPx(y));
  }
  ctx.textAlign = 'right'; ctx.textBaseline = 'top';
  ctx.fillText('0', x0Px - 5, y0 + 4);
  ctx.fillStyle = '#475569'; ctx.font = 'italic 12px Georgia,serif';
  ctx.textAlign = 'right'; ctx.textBaseline = 'top';
  ctx.fillText('x', W - 6, y0 + 4);
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText('y', x0Px + 6, 4);
  ctx.restore();

  // root marker (alpha triangle below axis)
  ctx.save();
  ctx.fillStyle = '#94a3b8';
  const rx = xToPx(ROOT);
  ctx.beginPath();
  ctx.moveTo(rx, y0 + 6); ctx.lineTo(rx - 5, y0 + 14); ctx.lineTo(rx + 5, y0 + 14); ctx.closePath();
  ctx.fill();
  ctx.font = 'italic 11px Georgia,serif'; ctx.fillStyle = '#64748b';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('α', rx, y0 + 16);
  ctx.restore();

  // curve
  ctx.save();
  ctx.strokeStyle = '#1e3a8a'; ctx.lineWidth = 2.5;
  ctx.beginPath();
  const N = 600;
  let started = false;
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    const y = f(x);
    if (y > Y_MAX + 3 || y < Y_MIN - 3) { started = false; continue; }
    const px = xToPx(x), py = yToPx(y);
    if (!started) { ctx.moveTo(px, py); started = true; }
    else ctx.lineTo(px, py);
  }
  ctx.stroke();
  ctx.restore();

  // past iterations (faded trail)
  for (let i = 0; i < scene.drawnCount && i < scene.iters.length; i++) {
    const isLatest = (i === scene.iters.length - 1) && (scene.curIdx < 0);
    drawIterationStatic(ctx, scene.iters[i], i, isLatest, xToPx, yToPx);
  }

  // current animating iteration
  if (scene.curIdx >= 0 && scene.curIdx < scene.iters.length) {
    drawCurrentIteration(ctx, scene.iters[scene.curIdx], scene.curIdx, scene.phaseIdx, scene.phaseProgress, W, H, xToPx, yToPx);
  }

  // initial point if nothing has run yet
  if (scene.drawnCount === 0 && scene.curIdx < 0) {
    drawInitialPoint(ctx, scene.x0, xToPx, yToPx);
  }
}

function drawLineByEq(ctx, m, b, xToPx, yToPx) {
  const pts = [
    { x: X_MIN, y: m * X_MIN + b },
    { x: X_MAX, y: m * X_MAX + b },
  ];
  if (Math.abs(m) > 1e-9) {
    pts.push({ x: (Y_MAX - b) / m, y: Y_MAX });
    pts.push({ x: (Y_MIN - b) / m, y: Y_MIN });
  }
  const inside = pts.filter((p) => p.x >= X_MIN - 1e-6 && p.x <= X_MAX + 1e-6 && p.y >= Y_MIN - 1e-6 && p.y <= Y_MAX + 1e-6);
  if (inside.length < 2) return;
  inside.sort((a, b) => a.x - b.x);
  const a = inside[0], c = inside[inside.length - 1];
  ctx.beginPath();
  ctx.moveTo(xToPx(a.x), yToPx(a.y));
  ctx.lineTo(xToPx(c.x), yToPx(c.y));
  ctx.stroke();
}

function drawInitialPoint(ctx, x, xToPx, yToPx) {
  const px = xToPx(x);
  const y0 = yToPx(0);
  const py = yToPx(f(x));

  ctx.save();
  ctx.setLineDash([4, 4]); ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, y0); ctx.stroke();
  ctx.setLineDash([]);

  // draggable x-axis marker
  ctx.fillStyle = '#1e3a8a';
  ctx.beginPath(); ctx.arc(px, y0, 6, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(px, y0, 6, 0, Math.PI * 2); ctx.stroke();

  // curve point
  ctx.fillStyle = 'rgba(59,130,246,.2)';
  ctx.beginPath(); ctx.arc(px, py, 11, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#1e3a8a'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#1e3a8a';
  ctx.font = '600 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
  ctx.fillText('P₀', px + 9, py - 8);

  ctx.fillStyle = '#1e3a8a';
  ctx.font = '600 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('x₀', px, y0 + 18);
  ctx.restore();
}

function drawIterationStatic(ctx, it, i, isLatest, xToPx, yToPx) {
  const alpha = isLatest ? 1.0 : Math.max(0.18, 0.7 - i * 0.13);
  const px = xToPx(it.x), py = yToPx(it.fx);
  const y0 = yToPx(0);

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.setLineDash([4, 4]); ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, y0); ctx.stroke();
  ctx.setLineDash([]);

  if (isFinite(it.dfx) && Math.abs(it.dfx) > 1e-9 && !it.flew) {
    const m = it.dfx, b = it.fx - m * it.x;
    ctx.strokeStyle = '#60a5fa'; ctx.lineWidth = 1.5;
    ctx.globalAlpha = alpha * 0.5;
    drawLineByEq(ctx, m, b, xToPx, yToPx);
    ctx.globalAlpha = alpha;
  }

  ctx.fillStyle = isLatest ? 'rgba(59,130,246,.22)' : 'rgba(148,163,184,.18)';
  ctx.beginPath(); ctx.arc(px, py, isLatest ? 11 : 8, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = isLatest ? '#1e3a8a' : '#64748b';
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  const r = isLatest ? 6 : 4;
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

  ctx.fillStyle = isLatest ? '#1e3a8a' : '#64748b';
  ctx.font = (isLatest ? '600 ' : '500 ') + (isLatest ? 12 : 11) + 'px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
  ctx.fillText('P' + subscript(i), px + 9, py - 8);

  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.font = (isLatest ? '600 ' : '500 ') + '11px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.fillText('x' + subscript(i), px, y0 + 18);
  ctx.restore();
}

function drawCurrentIteration(ctx, it, idx, phaseIdx, phaseProgress, W, H, xToPx, yToPx) {
  const phaseName = PHASE_ORDER[phaseIdx];
  const t = ease(Math.min(1, phaseProgress));

  const px = xToPx(it.x), py = yToPx(it.fx);
  const y0 = yToPx(0);

  // drop line from curve to x-axis
  ctx.save();
  ctx.setLineDash([4, 4]); ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, y0); ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  const pastTangent = phaseIdx >= 1;
  const pastToAxis = phaseIdx >= 2;
  const pastToCurve = phaseIdx >= 3;

  // tangent
  if (pastTangent) {
    const m = it.dfx, b = it.fx - m * it.x;
    const tangentAlpha = phaseName === 'tangent' ? t : 1;
    ctx.save();
    ctx.globalAlpha = tangentAlpha;
    ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2.25;
    drawLineByEq(ctx, m, b, xToPx, yToPx);
    ctx.restore();
    if (it.flew && (phaseName === 'toAxis' || pastToAxis)) {
      drawFlewArrow(ctx, it, W, H);
    }
  }

  // marker on x-axis at xNext
  if (pastToAxis && isFinite(it.xNext) && it.xNext > X_MIN && it.xNext < X_MAX) {
    const xnx = xToPx(it.xNext);
    const markerAlpha = phaseName === 'toAxis' ? t : 1;
    ctx.save();
    ctx.globalAlpha = markerAlpha;
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.moveTo(xnx, y0 - 8);
    ctx.lineTo(xnx - 5, y0);
    ctx.lineTo(xnx + 5, y0);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#1e3a8a';
    ctx.font = '600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillText('x' + subscript(idx + 1), xnx, y0 + 18);
    ctx.restore();
  }

  // dashed rise from xNext to (xNext, f(xNext))
  if (pastToCurve && isFinite(it.xNext) && it.xNext > X_MIN && it.xNext < X_MAX) {
    const xnx = xToPx(it.xNext);
    const yny = yToPx(f(it.xNext));
    const rise = phaseName === 'toCurve' ? t : 1;
    const endY = y0 + (yny - y0) * rise;
    ctx.save();
    ctx.setLineDash([4, 4]); ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.moveTo(xnx, y0); ctx.lineTo(xnx, endY); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // current point (mark phase pulse)
  ctx.save();
  if (phaseName === 'mark') {
    const pulse = 1 - phaseProgress;
    if (pulse > 0) {
      ctx.fillStyle = `rgba(59,130,246,${0.25 * pulse})`;
      ctx.beginPath(); ctx.arc(px, py, 14 + pulse * 10, 0, Math.PI * 2); ctx.fill();
    }
  }
  ctx.fillStyle = 'rgba(59,130,246,.22)';
  ctx.beginPath(); ctx.arc(px, py, 11, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#1e3a8a'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#1e3a8a';
  ctx.font = '600 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
  ctx.fillText('P' + subscript(idx), px + 9, py - 8);
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.font = '600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.fillText('x' + subscript(idx), px, y0 + 18);
  ctx.restore();
}

function drawFlewArrow(ctx, it, W, H) {
  ctx.save();
  ctx.strokeStyle = '#b91c1c'; ctx.fillStyle = '#b91c1c'; ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(W - 22, H * 0.5); ctx.lineTo(W - 8, H * 0.5);
  ctx.lineTo(W - 14, H * 0.5 - 6);
  ctx.moveTo(W - 8, H * 0.5); ctx.lineTo(W - 14, H * 0.5 + 6);
  ctx.stroke();
  ctx.font = '600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('x₁ ≈ ' + (it.xNext > 0 ? '+' : '') + fmt(it.xNext, 1), W - 28, H * 0.5);
  ctx.restore();
}

/* =========================================================================
 *  Animation advance (mutates scene.current)
 * ========================================================================= */
function advanceAnimation(s, now) {
  if (!s.running || s.phaseIdx < 0 || s.curIdx < 0) { s.running = false; return; }

  const phaseName = PHASE_ORDER[s.phaseIdx];
  const dur = PHASE[phaseName].dur;
  const tRaw = (now - s.phaseStart) / dur;
  s.phaseProgress = Math.min(1, tRaw);

  if (tRaw >= 1) {
    s.phaseIdx++;
    s.phaseStart = now;
    s.phaseProgress = 0;

    if (s.phaseIdx >= PHASE_ORDER.length) {
      s.drawnCount = s.curIdx + 1;
      const it = s.iters[s.curIdx];

      if (it.flew || it.failed) {
        s.failed = true;
        s.failedIter = it;
        s.curIdx = -1;
        s.phaseIdx = -1;
        s.running = false;
        s.justFinished = true;
        return;
      }

      s.x0 = it.xNext;

      if (s.singleShot) {
        s.curIdx = -1;
        s.phaseIdx = -1;
        s.running = false;
        s.justFinished = true;
        return;
      }

      if (s.curIdx + 1 < s.iters.length) {
        s.curIdx++;
        s.phaseIdx = 0;
        s.phaseStart = now;
      } else {
        s.curIdx = -1;
        s.phaseIdx = -1;
        s.running = false;
        s.justFinished = true;
      }
    }
  }
}

/* =========================================================================
 *  Hover hook
 * ========================================================================= */
function useHover() {
  const [h, setH] = useState(false);
  return [h, { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) }];
}

/* =========================================================================
 *  Component
 * ========================================================================= */
export default function FunctionNewtonMethod({ explanations } = {}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animRafRef = useRef(0);
  const dragRef = useRef(null);

  const sceneRef = useRef({
    x0: DEFAULT_X0,
    scenario: null,
    iters: [],
    drawnCount: 0,
    curIdx: -1,
    phaseIdx: -1,
    phaseStart: 0,
    phaseProgress: 0,
    running: false,
    failed: false,
    failedIter: null,
    singleShot: false,
    justFinished: false,
  });

  const [scenario, setScenario] = useState(null);
  const [activeTab, setActiveTab] = useState('comp');
  const [runSignal, setRunSignal] = useState(0);
  const [, setTick] = useState(0);

  const exp = useMemo(() => mergeExplanations(explanations), [explanations]);

  /* ----- DPR fit + resize ----- */
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const fit = () => {
      const ratio = window.devicePixelRatio || 1;
      const cssW = cv.clientWidth;
      const cssH = Math.round(cssW * 540 / 900);
      cv.width = Math.round(cssW * ratio);
      cv.height = Math.round(cssH * ratio);
      cv.style.height = cssH + 'px';
      cv.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
      drawScene(cv, sceneRef.current);
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', fit);
    return () => { ro.disconnect(); window.removeEventListener('resize', fit); };
  }, []);

  /* ----- redraw whenever React renders (state changed) ----- */
  useEffect(() => {
    drawScene(canvasRef.current, sceneRef.current);
  });

  /* ----- animation loop ----- */
  useEffect(() => {
    if (!sceneRef.current.running) return;
    const tick = () => {
      const now = performance.now();
      advanceAnimation(sceneRef.current, now);
      drawScene(canvasRef.current, sceneRef.current);
      setTick((t) => t + 1);
      if (sceneRef.current.running) {
        animRafRef.current = requestAnimationFrame(tick);
      } else if (sceneRef.current.justFinished) {
        sceneRef.current.justFinished = false;
        setActiveTab('mean');
      }
    };
    animRafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRafRef.current);
  }, [runSignal]);

  /* ----- drag x₀ on x-axis ----- */
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * cv.clientWidth;
    const yToPx = (y) => cv.clientHeight - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * cv.clientHeight;
    const pxToX = (px) => X_MIN + (px / cv.clientWidth) * (X_MAX - X_MIN);

    const hitX0 = (mx, my) => {
      const s = sceneRef.current;
      if (s.scenario || s.drawnCount > 0 || s.running) return false;
      const px = xToPx(s.x0);
      const y0 = yToPx(0);
      return Math.hypot(mx - px, my - y0) < 14;
    };
    const getMouse = (e) => {
      const r = cv.getBoundingClientRect();
      const t = (e.touches && e.touches[0]) || e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    };

    const onDown = (e) => {
      if (sceneRef.current.running) return;
      const m = getMouse(e);
      if (hitX0(m.x, m.y)) { dragRef.current = 'x0'; cv.style.cursor = 'grabbing'; }
    };
    const onMove = (e) => {
      if (sceneRef.current.running) return;
      const m = getMouse(e);
      if (dragRef.current === 'x0') {
        sceneRef.current.x0 = clampX(pxToX(m.x));
        sceneRef.current.iters = [];
        sceneRef.current.drawnCount = 0;
        drawScene(cv, sceneRef.current);
        setTick((t) => t + 1);
      } else {
        cv.style.cursor = hitX0(m.x, m.y) ? 'grab' : 'default';
      }
    };
    const onUp = () => { dragRef.current = null; cv.style.cursor = 'default'; };

    const onTouchStart = (e) => {
      if (sceneRef.current.running) return;
      const m = getMouse(e);
      if (hitX0(m.x, m.y)) { dragRef.current = 'x0'; e.preventDefault(); }
    };
    const onTouchMove = (e) => {
      if (sceneRef.current.running || !dragRef.current) return;
      const m = getMouse(e);
      sceneRef.current.x0 = clampX(pxToX(m.x));
      sceneRef.current.iters = [];
      sceneRef.current.drawnCount = 0;
      drawScene(cv, sceneRef.current);
      setTick((t) => t + 1);
      e.preventDefault();
    };
    const onTouchEnd = () => { dragRef.current = null; };

    cv.addEventListener('mousedown', onDown);
    cv.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    cv.addEventListener('touchstart', onTouchStart, { passive: false });
    cv.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      cv.removeEventListener('mousedown', onDown);
      cv.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      cv.removeEventListener('touchstart', onTouchStart);
      cv.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  /* ----- scenario / step / reset ----- */
  const startScenario = (name) => {
    if (sceneRef.current.running) return;
    const cfg = SCENARIOS[name];
    sceneRef.current.x0 = cfg.x0;
    sceneRef.current.scenario = name;
    sceneRef.current.iters = computeIterations(cfg.x0, cfg.maxIter, cfg.failOnFirst);
    sceneRef.current.drawnCount = 0;
    sceneRef.current.curIdx = 0;
    sceneRef.current.phaseIdx = 0;
    sceneRef.current.phaseStart = performance.now();
    sceneRef.current.phaseProgress = 0;
    sceneRef.current.running = true;
    sceneRef.current.failed = false;
    sceneRef.current.failedIter = null;
    sceneRef.current.singleShot = false;
    sceneRef.current.justFinished = false;
    setScenario(name);
    setActiveTab('comp');
    setRunSignal((s) => s + 1);
  };

  const stepManual = () => {
    const s = sceneRef.current;
    if (s.scenario || s.running) return;
    if (s.iters.length === 0 || s.drawnCount === 0) {
      s.iters = computeIterations(s.x0, 8, false);
      s.drawnCount = 0;
    }
    if (s.drawnCount >= s.iters.length) return;
    s.curIdx = s.drawnCount;
    s.phaseIdx = 0;
    s.phaseStart = performance.now();
    s.phaseProgress = 0;
    s.running = true;
    s.singleShot = true;
    s.failed = false;
    s.failedIter = null;
    s.justFinished = false;
    setRunSignal((sig) => sig + 1);
  };

  const reset = () => {
    sceneRef.current = {
      x0: DEFAULT_X0,
      scenario: null,
      iters: [],
      drawnCount: 0,
      curIdx: -1,
      phaseIdx: -1,
      phaseStart: 0,
      phaseProgress: 0,
      running: false,
      failed: false,
      failedIter: null,
      singleShot: false,
      justFinished: false,
    };
    setScenario(null);
    setActiveTab('comp');
    setTick((t) => t + 1);
  };

  /* ----- derived live values for the panel ----- */
  const s = sceneRef.current;
  const n = s.curIdx >= 0 ? s.curIdx : Math.max(0, s.drawnCount);
  const curIt = s.curIdx >= 0 ? s.iters[s.curIdx]
              : (s.drawnCount > 0 ? s.iters[s.drawnCount - 1] : null);
  const liveX = curIt ? curIt.x : s.x0;
  const liveFx = curIt ? curIt.fx : f(s.x0);
  const liveDfx = curIt ? curIt.dfx : fp(s.x0);
  const liveCorr = curIt ? curIt.corr : liveFx / liveDfx;
  const liveXNext = curIt ? curIt.xNext : liveX - liveCorr;
  const liveErr = Math.abs(liveX - ROOT);

  const visibleRows = Math.max(1, s.drawnCount + (s.curIdx >= 0 ? 1 : 0));
  const tableRows = s.iters.length === 0
    ? [{ idx: 0, x: s.x0, fx: f(s.x0), err: Math.abs(s.x0 - ROOT), isCur: true, isFail: false }]
    : s.iters.slice(0, visibleRows).map((it, i) => {
        const isCur = i === (s.curIdx >= 0 ? s.curIdx : s.drawnCount - 1);
        return {
          idx: i,
          x: it.x,
          fx: it.fx,
          err: Math.abs(it.x - ROOT),
          isCur,
          isFail: !!(it.flew || it.failed),
        };
      });

  // banner
  let bannerVisible = false, bannerText = '', bannerPill = '', bannerFail = false;
  if (s.curIdx >= 0) {
    const phaseName = PHASE_ORDER[s.phaseIdx];
    const phaseLabels = {
      mark:    'Mark current guess P' + subscript(s.curIdx) + ' on the curve',
      tangent: 'Draw the tangent at P' + subscript(s.curIdx),
      toAxis:  'Follow tangent down to x-axis → x' + subscript(s.curIdx + 1),
      toCurve: 'Lift back to curve → P' + subscript(s.curIdx + 1),
      settle:  'Iteration ' + (s.curIdx + 1) + ' complete',
    };
    bannerVisible = true;
    bannerText = 'Iteration ' + (s.curIdx + 1) + ' · ' + phaseLabels[phaseName];
    bannerPill = 'n = ' + s.curIdx;
    bannerFail = false;
  } else if (s.failed) {
    bannerVisible = true;
    bannerText = 'Stopped · tangent sent x₁ off the chart';
    bannerPill = 'failed';
    bannerFail = true;
  }

  // verdict state
  const isFail = s.failed;
  const verdictVars = isFail
    ? { '--vMain': '#b91c1c', '--vDeep': '#7f1d1d', '--vMid': '#fecaca', '--vSoft': '#fee2e2', '--vTint': '#fca5a5' }
    : { '--vMain': '#3b82f6', '--vDeep': '#1e3a8a', '--vMid': '#dbeafe', '--vSoft': '#dfebfe', '--vTint': '#bfdbfe' };

  // verdict substitution context
  const successIters = s.iters.length;
  const successFinalErr = (() => {
    if (s.iters.length === 0) return '—';
    const last = s.iters[s.iters.length - 1];
    const e = Math.abs((last.xNext !== undefined && isFinite(last.xNext) ? last.xNext : last.x) - ROOT);
    return e < 1e-4 ? e.toExponential(1) : e.toFixed(4);
  })();
  const failIt = s.failedIter || (s.iters[0] || { x: s.x0, dfx: fp(s.x0), xNext: s.x0 - f(s.x0) / fp(s.x0) });

  const verdictContent = isFail ? exp.meaning.fail : exp.meaning.success;
  const subVars = isFail
    ? { x0: fmt(failIt.x, 2), dfx0: fmt(failIt.dfx, 3), xnext: fmt(failIt.xNext, 1) }
    : { iters: successIters, plural: successIters === 1 ? '' : 's', finalErr: successFinalErr };

  /* ===== render ===== */
  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        color: '#0f172a', fontSize: 14, lineHeight: 1.5,
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 380px', gap: 18, alignItems: 'start' }}>

        {/* ============ LEFT: graph card ============ */}
        <div style={cardStyle}>
          <div style={cardHeadStyle}>
            <h2 style={cardHeadH2Style}>Local view · f(x) = x³ − 2x − 5</h2>
            <div style={cardHeadMetaStyle}>f&prime;(x) = 3x² − 2 · real root α ≈ 2.0946</div>
          </div>

          <div style={{ position: 'relative', background: '#fff' }}>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: 'auto' }} />
            <div style={{
              position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
              background: 'rgba(255,255,255,.96)',
              border: '1px solid ' + (bannerFail ? '#b91c1c' : '#3b82f6'),
              color: bannerFail ? '#7f1d1d' : '#1e3a8a',
              boxShadow: '0 4px 14px ' + (bannerFail ? 'rgba(185,28,28,.25)' : 'rgba(59,130,246,.25)'),
              borderRadius: 20, padding: '7px 16px 7px 7px',
              fontSize: 12.5, fontWeight: 600, letterSpacing: '.2px',
              opacity: bannerVisible ? 1 : 0,
              pointerEvents: 'none',
              transition: 'opacity .25s ease, border-color .3s, color .3s, box-shadow .3s',
              display: 'flex', alignItems: 'center', gap: 10, maxWidth: '80%', whiteSpace: 'nowrap',
            }}>
              <span style={{
                background: bannerFail ? '#b91c1c' : '#3b82f6',
                color: '#fff', borderRadius: 14,
                padding: '3px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '.4px',
              }}>{bannerPill}</span>
              <span>{bannerText}</span>
            </div>
            <div style={{
              position: 'absolute', left: 14, bottom: 10,
              fontSize: 11.5, color: '#475569',
              background: 'rgba(255,255,255,.85)', padding: '4px 8px',
              border: '1px solid #cbd5e1', borderRadius: 4,
            }}>
              Drag x₀ on the x-axis, click &quot;Step ▶&quot;, or pick a scenario.
            </div>
          </div>

          <div style={{
            padding: '12px 14px', borderTop: '1px solid #cbd5e1', background: '#eff6ff',
            display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center',
          }}>
            <ScenarioButton sc="fast"  active={scenario === 'fast'}  onClick={() => startScenario('fast')}  />
            <ScenarioButton sc="cross" active={scenario === 'cross'} onClick={() => startScenario('cross')} />
            <ScenarioButton sc="flat"  active={scenario === 'flat'}  onClick={() => startScenario('flat')}  />
            <div style={{ flex: 1 }} />
            <StepButton onClick={stepManual} disabled={s.scenario != null || s.running} />
            <ResetButton onClick={reset} />
          </div>

          <div style={{
            padding: '8px 14px', borderTop: '1px solid #cbd5e1', background: '#fff',
            display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 12, color: '#475569',
          }}>
            <div style={readoutGroupStyle}><span>n =</span><b style={monoB}>{n}</b></div>
            <div style={readoutGroupStyle}><span>xₙ =</span><b style={monoB}>{fmt(liveX)}</b></div>
            <div style={readoutGroupStyle}><span>f(xₙ) =</span><b style={monoB}>{fmt(liveFx)}</b></div>
            <div style={readoutGroupStyle}>
              <span>|xₙ − α| =</span>
              <b style={monoB}>{liveErr < 1e-4 ? liveErr.toExponential(1) : fmt(liveErr)}</b>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
              <span><span style={{ ...swatch, background: '#1e3a8a' }} />f(x)</span>
              <span><span style={{ ...swatch, background: '#3b82f6' }} />tangent</span>
              <span><span style={{ ...swatch, background: '#94a3b8' }} />drops</span>
            </div>
          </div>
        </div>

        {/* ============ RIGHT: info panel ============ */}
        <aside style={{ position: 'sticky', top: 18 }}>
          <div style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #cbd5e1', background: '#eff6ff' }}>
              <PanelTab active={activeTab === 'comp'} onClick={() => setActiveTab('comp')}>Computation</PanelTab>
              <PanelTab active={activeTab === 'mean'} onClick={() => setActiveTab('mean')}>Meaning</PanelTab>
              <PanelTab active={activeTab === 'theo'} onClick={() => setActiveTab('theo')}>Theory</PanelTab>
            </div>

            {/* COMPUTATION */}
            {activeTab === 'comp' && (
              <div style={panelBodyStyle}>
                <Section>
                  <SectionH4>Iteration formula</SectionH4>
                  <Formula label="Newton step">
                    x<sub>n+1</sub> = x<sub>n</sub> − f(x<sub>n</sub>) / f&prime;(x<sub>n</sub>)
                  </Formula>
                </Section>

                <Section active>
                  <SectionH4>Current step (n = {n})</SectionH4>
                  <Formula>
                    <div style={{ margin: '2px 0' }}>f(x<sub>n</sub>) = {fmt(liveFx, 3)}</div>
                    <div style={{ margin: '2px 0' }}>f&prime;(x<sub>n</sub>) = {fmt(liveDfx, 3)}</div>
                    <div style={{ margin: '2px 0' }}>
                      correction = f / f&prime; = <span style={resStyleBlue}>{isFinite(liveCorr) ? fmt(liveCorr, 3) : '—'}</span>
                    </div>
                    <div style={{ margin: '2px 0' }}>
                      x<sub>n+1</sub> = x<sub>n</sub> − corr = <span style={resStyleBlue}>{isFinite(liveXNext) ? fmt(liveXNext, 3) : '—'}</span>
                    </div>
                  </Formula>
                </Section>

                <Section>
                  <SectionH4>History</SectionH4>
                  <IterationTable rows={tableRows} />
                </Section>
              </div>
            )}

            {/* MEANING */}
            {activeTab === 'mean' && (
              <div style={panelBodyStyle}>
                <Section active>
                  <SectionH4>Verdict</SectionH4>
                  <div style={{
                    ...verdictVars,
                    padding: 12, borderRadius: 6,
                    border: '1px solid var(--vMid)',
                    background: 'var(--vSoft)',
                    transition: 'all .3s ease',
                  }}>
                    <span style={{
                      display: 'inline-block', padding: '3px 9px', borderRadius: 11,
                      fontSize: 10.5, fontWeight: 700, letterSpacing: '.5px',
                      textTransform: 'uppercase', color: '#fff', background: 'var(--vMain)',
                    }} dangerouslySetInnerHTML={{ __html: verdictContent.badge }} />
                    <h3 style={{ margin: '8px 0 6px', fontSize: 14, color: 'var(--vDeep)', fontWeight: 600 }}
                      dangerouslySetInnerHTML={{ __html: verdictContent.title }} />
                    <p
                      style={{ margin: 0, fontSize: 12.5, color: '#475569', lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: substituteVars(verdictContent.text, subVars) }}
                    />
                  </div>
                  <div style={{
                    ...verdictVars,
                    marginTop: 12, padding: '10px 12px', background: '#fff',
                    border: '1px solid var(--vMid)', borderRadius: 6,
                    fontSize: 12.5, color: '#475569', lineHeight: 1.6,
                  }}>
                    <span style={{
                      display: 'inline-block', padding: '1px 7px', borderRadius: 9,
                      fontSize: 10.5, fontWeight: 700, letterSpacing: '.3px',
                      color: '#fff', background: 'var(--vMain)', marginRight: 5, verticalAlign: 1,
                    }} dangerouslySetInnerHTML={{ __html: verdictContent.notePill }} />
                    <span dangerouslySetInnerHTML={{ __html: substituteVars(verdictContent.note, subVars) }} />
                  </div>
                </Section>
              </div>
            )}

            {/* THEORY */}
            {activeTab === 'theo' && (
              <div style={panelBodyStyle}>
                <TheoryBlock section={exp.theory.definition} />
                <TheoryBlock section={exp.theory.geometric} />
                <TheoryBlock section={exp.theory.quadratic} />
                <TheoryBlock section={exp.theory.failureModes} />
                <TheoryBlock section={exp.theory.onThisFunction} />
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

/* =========================================================================
 *  Sub-components & shared inline styles
 * ========================================================================= */
const cardStyle = { background: '#fff', border: '1px solid #cbd5e1', borderRadius: 8, overflow: 'hidden' };
const cardHeadStyle = {
  padding: '10px 14px', borderBottom: '1px solid #cbd5e1',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  background: 'linear-gradient(0deg,#fff,#eff6ff)',
};
const cardHeadH2Style = {
  margin: 0, fontSize: 13, fontWeight: 600, color: '#1e3a8a',
  letterSpacing: '.3px', textTransform: 'uppercase',
};
const cardHeadMetaStyle = { fontSize: 12, color: '#475569' };
const readoutGroupStyle = { display: 'flex', alignItems: 'center', gap: 6 };
const monoB = {
  color: '#1e3a8a', fontWeight: 600,
  fontFamily: '"SF Mono",ui-monospace,Menlo,Monaco,Consolas,monospace',
};
const swatch = {
  display: 'inline-block', width: 14, height: 3, verticalAlign: 'middle',
  marginRight: 6, borderRadius: 2,
};
const panelBodyStyle = { padding: '14px 14px 16px 14px' };
const resStyleBlue = { color: '#3b82f6', fontWeight: 700 };

function ScenarioButton({ sc, active, onClick }) {
  const [hover, hp] = useHover();
  const cfg = SCENARIOS[sc];
  return (
    <button
      type="button"
      onClick={onClick}
      {...hp}
      style={{
        appearance: 'none',
        background: active ? '#3b82f6' : (hover ? '#dfebfe' : '#fff'),
        color: active ? '#fff' : '#1e3a8a',
        padding: '8px 13px',
        borderRadius: 6,
        fontSize: 13,
        cursor: 'pointer',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        transition: 'all .15s',
        letterSpacing: '.2px',
        border: '1.5px solid #3b82f6',
        boxShadow: active ? '0 2px 6px rgba(59,130,246,.35)' : 'none',
      }}
    >
      <span style={{ fontSize: 13, lineHeight: 1 }}>{cfg.glyph}</span>
      {cfg.label} · {cfg.x0Label}
    </button>
  );
}

function StepButton({ onClick, disabled }) {
  const [hover, hp] = useHover();
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...hp}
      style={{
        appearance: 'none',
        background: disabled ? '#fff' : (hover ? '#dfebfe' : '#fff'),
        color: '#1e3a8a',
        padding: '8px 13px',
        borderRadius: 6,
        fontSize: 13,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: 600,
        border: '1.5px solid #3b82f6',
        transition: 'all .15s',
        letterSpacing: '.2px',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      Step ▶
    </button>
  );
}

function ResetButton({ onClick }) {
  const [hover, hp] = useHover();
  return (
    <button
      type="button"
      onClick={onClick}
      {...hp}
      style={{
        appearance: 'none',
        background: hover ? '#eff6ff' : '#fff',
        color: '#475569',
        padding: '8px 13px',
        borderRadius: 6,
        fontSize: 13,
        cursor: 'pointer',
        fontWeight: 600,
        border: '1.5px solid #94a3b8',
        transition: 'all .15s',
        letterSpacing: '.2px',
      }}
    >
      Reset
    </button>
  );
}

function PanelTab({ active, onClick, children }) {
  const [hover, hp] = useHover();
  return (
    <div
      onClick={onClick}
      {...hp}
      style={{
        flex: 1,
        textAlign: 'center',
        padding: '10px 8px',
        fontSize: 11.5,
        color: active ? '#1e3a8a' : (hover ? '#1e3a8a' : '#475569'),
        borderBottom: '2px solid ' + (active ? '#3b82f6' : 'transparent'),
        cursor: 'pointer',
        letterSpacing: '.4px',
        textTransform: 'uppercase',
        fontWeight: 600,
        transition: 'color .15s, background .15s, border-color .3s',
        background: active ? '#fff' : 'transparent',
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
}

function Section({ active, children }) {
  return (
    <div style={{
      padding: '10px 12px',
      margin: '8px -12px',
      borderLeft: '3px solid ' + (active ? '#3b82f6' : 'transparent'),
      borderRadius: '0 6px 6px 0',
      background: active ? '#dfebfe' : 'transparent',
      transition: 'background .3s ease, border-color .3s ease',
    }}>
      {children}
    </div>
  );
}

function SectionH4({ children }) {
  return (
    <h4 style={{
      margin: '0 0 6px 0', fontSize: 11, color: '#475569',
      textTransform: 'uppercase', letterSpacing: '.5px', fontWeight: 700,
    }}>{children}</h4>
  );
}

function Formula({ label, children }) {
  return (
    <div style={{
      background: '#eff6ff',
      border: '1px solid #dbeafe',
      borderRadius: 6,
      padding: '9px 11px',
      margin: '8px 0',
      fontFamily: '"SF Mono",ui-monospace,Menlo,Monaco,Consolas,monospace',
      fontSize: 12.5,
      color: '#0f172a',
    }}>
      {label && (
        <span style={{
          fontFamily: 'inherit', color: '#475569', fontSize: 10.5,
          textTransform: 'uppercase', letterSpacing: '.4px',
          display: 'block', marginBottom: 3, fontWeight: 600,
        }}>{label}</span>
      )}
      {children}
    </div>
  );
}

function IterationTable({ rows }) {
  return (
    <table style={{
      width: '100%', borderCollapse: 'collapse', fontSize: 11.5,
      fontFamily: '"SF Mono",ui-monospace,Menlo,Monaco,Consolas,monospace',
      marginTop: 6,
    }}>
      <thead>
        <tr>
          <th style={thStyle}>n</th>
          <th style={{ ...thStyle, textAlign: 'right' }}>xₙ</th>
          <th style={{ ...thStyle, textAlign: 'right' }}>f(xₙ)</th>
          <th style={{ ...thStyle, textAlign: 'right' }}>|err|</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.idx} style={{ background: r.isCur ? '#dfebfe' : 'transparent' }}>
            <td style={{ ...tdStyle, textAlign: 'center', color: r.isFail ? '#7f1d1d' : '#475569', fontWeight: r.isCur ? 700 : 600 }}>{r.idx}</td>
            <td style={{ ...tdStyle, color: r.isFail ? '#7f1d1d' : '#1e3a8a', fontWeight: r.isCur ? 700 : 400 }}>{fmt(r.x, 3)}</td>
            <td style={{ ...tdStyle, color: r.isFail ? '#7f1d1d' : '#1e3a8a', fontWeight: r.isCur ? 700 : 400 }}>{fmt(r.fx, 3)}</td>
            <td style={{ ...tdStyle, color: r.isFail ? '#7f1d1d' : '#1e3a8a', fontWeight: r.isCur ? 700 : 400 }}>
              {r.err < 1e-4 ? r.err.toExponential(1) : fmt(r.err, 3)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const thStyle = {
  padding: '5px 6px', textAlign: 'right',
  background: '#eff6ff', color: '#475569', fontWeight: 600,
  textTransform: 'uppercase', fontSize: 10, letterSpacing: '.4px',
  borderBottom: '1px solid #cbd5e1',
};
const tdStyle = {
  padding: '5px 6px', textAlign: 'right',
  borderBottom: '1px solid #e2e8f0',
};

function TheoryBlock({ section }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <span style={{
        fontSize: 11, color: '#475569',
        textTransform: 'uppercase', letterSpacing: '.5px', fontWeight: 700,
        marginBottom: 5, display: 'block',
      }} dangerouslySetInnerHTML={{ __html: section.lbl }} />
      <div
        style={{ fontSize: 12.5, color: '#0f172a', lineHeight: 1.6 }}
        dangerouslySetInnerHTML={{ __html: section.body }}
      />
      {section.eq && (
        <div style={{
          display: 'block', textAlign: 'center',
          fontFamily: '"SF Mono",ui-monospace,Menlo,Monaco,Consolas,monospace',
          background: '#eff6ff', border: '1px solid #dbeafe',
          borderRadius: 6, padding: 10, margin: '8px 0',
          color: '#1e3a8a', fontWeight: 600, fontSize: 13,
        }} dangerouslySetInnerHTML={{ __html: section.eq }} />
      )}
    </div>
  );
}