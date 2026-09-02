'use client';

import { useRef, useEffect, useState, useMemo } from 'react';

/* =========================================================================
 *  FunctionTangentLine
 *  Tangent line at a point. Four scenarios:
 *    pos · neg · max · min
 *  Plus draggable point of tangency c.
 *
 *  Public API:
 *    <FunctionTangentLine />                               // all defaults
 *    <FunctionTangentLine explanations={{
 *      meaning: { pos: { title: 'My positive title' } },   // partial override
 *      theory:  { definition: { body: 'Custom body' } }
 *    }} />
 *
 *  Override semantics:
 *  - explanations.meaning.{idle|pos|neg|max|min}.{badge|title|text|notePill|note}
 *  - explanations.theory.{definition|derivativeAsSlope|linearization|criticalPoints|onThisFunction}.{lbl|body|eq}
 *  - Computation tab hardcoded — not overridable
 *
 *  Text strings can use {c} and {m} placeholders — the component substitutes
 *  them with current numerical values at render time. Spans using var(--scMain),
 *  var(--scDeep), var(--scMid), var(--scSoft) auto-theme to the active scenario.
 * ========================================================================= */

/* ---------- model ---------- */
const f  = (x) => (x*x*x) / 3 - x;
const fp = (x) => x*x - 1;

const X_MIN = -2.6, X_MAX = 2.6;
const Y_MIN = -1.8, Y_MAX = 1.8;
const LOC_MAX_X = -1, LOC_MIN_X = 1;

const DEFAULT_C = -0.5;

const THEMES = {
  pos: { main:'#3b82f6', deep:'#1e3a8a', soft:'#dfebfe', mid:'#dbeafe', tint:'#bfdbfe', rgb:'59,130,246' },
  neg: { main:'#b91c1c', deep:'#7f1d1d', soft:'#fee2e2', mid:'#fecaca', tint:'#fca5a5', rgb:'185,28,28'  },
  max: { main:'#d97706', deep:'#92400e', soft:'#fef3c7', mid:'#fde68a', tint:'#fcd34d', rgb:'217,119,6'  },
  min: { main:'#0d9488', deep:'#115e59', soft:'#ccfbf1', mid:'#99f6e4', tint:'#5eead4', rgb:'13,148,136' },
};

const SCENARIOS = {
  pos: { c: -1.7, regionA: -2.5, regionB: -1.0, signL: +1, signR: +1, label: 'Positive slope', glyph: '↗', cLabel: 'c = −1.7' },
  neg: { c:  0.4, regionA: -1.0, regionB:  1.0, signL: -1, signR: -1, label: 'Negative slope', glyph: '↘', cLabel: 'c = 0.4'  },
  max: { c: -1.0, regionA: -1.8, regionB: -0.2, signL: +1, signR: -1, label: 'Local max',      glyph: '⌒', cLabel: 'c = −1'   },
  min: { c:  1.0, regionA:  0.2, regionB:  1.8, signL: -1, signR: +1, label: 'Local min',      glyph: '⌣', cLabel: 'c = 1'    },
};

const STEPS = [
  { name: 'region',   dur: 700, label: 'Identify the region near c' },
  { name: 'mark',     dur: 750, label: 'Mark the point c on the x-axis' },
  { name: 'lift',     dur: 700, label: 'Lift to the curve: P = (c, f(c))' },
  { name: 'slope',    dur: 600, label: 'Evaluate the slope f′(c)' },
  { name: 'tangent',  dur: 900, label: 'Draw the tangent through P with slope f′(c)' },
  { name: 'equation', dur: 650, label: 'Tangent: y = f(c) + f′(c) (x − c)' },
];

/* ---------- helpers ---------- */
const ease       = (t) => t * t * (3 - 2 * t);
const lerp       = (a, b, t) => a + (b - a) * t;
const fmt        = (n, d = 2) => (Math.abs(n) < 1e-9 ? '0.00' : n.toFixed(d));
const fmtSigned  = (n) => (n >= 0 ? fmt(n) : '(' + fmt(n) + ')');
const clampX     = (x) => Math.max(X_MIN + 0.05, Math.min(X_MAX - 0.05, x));

function substituteVars(s, vars) {
  if (typeof s !== 'string') return s;
  return s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
}

/* ---------- inline-style emphasis (CSS vars resolve from wrapper) ---------- */
const HLB  = (s) => `<span style="color:var(--scMain);font-weight:700">${s}</span>`;
const HLD  = (s) => `<span style="color:var(--scDeep);font-weight:700">${s}</span>`;
const HL   = (s) => `<span style="background:var(--scMid);color:var(--scDeep);padding:1px 5px;border-radius:3px;font-weight:600">${s}</span>`;
const HLG  = (s) => `<span style="color:#94a3b8;font-weight:700">${s}</span>`;
const STR  = (s) => `<strong style="color:var(--scDeep)">${s}</strong>`;
const CODE = (s) => `<code style="font-family:'SF Mono',ui-monospace,Menlo,Monaco,Consolas,monospace;background:#eff6ff;padding:1px 5px;border-radius:3px;color:#1e3a8a">${s}</code>`;

/* =========================================================================
 *  DEFAULT EXPLANATIONS
 * ========================================================================= */
const DEFAULT_EXPLANATIONS = {
  meaning: {
    idle: {
      badge: 'Tangent',
      title: 'The tangent at c',
      text:  'Drag c or pick a scenario to see the tangent in action.',
      notePill: 'why',
      note:  `The derivative at a point IS the slope of the tangent there — that&apos;s the geometric meaning of f&prime;(c).`,
    },
    pos: {
      badge: 'Positive slope',
      title: 'Tangent rises to the right ↗',
      text:
        `At c = ${HLB('{c}')}, f&prime;(c) = ${HLB('{m}')} &gt; 0, so the tangent line has positive slope. ` +
        `It ${HL('tilts upward to the right')}, matching the curve&apos;s ascending behavior in this region. ` +
        `Near c, the tangent and the curve agree to first order — they share a point and a slope.`,
      notePill: 'why',
      note:
        `On this f, the wings (|x| &gt; 1) have ${STR('f&prime;(x) = x² − 1 &gt; 0')} — ` +
        `the curve is strictly increasing, and every tangent has positive slope.`,
    },
    neg: {
      badge: 'Negative slope',
      title: 'Tangent falls to the right ↘',
      text:
        `At c = ${HLB('{c}')}, f&prime;(c) = ${HLD('{m}')} &lt; 0, so the tangent line has negative slope. ` +
        `It ${HL('tilts downward to the right')}, matching the curve&apos;s descending behavior in this region.`,
      notePill: 'why',
      note:
        `On the middle interval (−1, 1), ${STR('f&prime;(x) = x² − 1 &lt; 0')}. ` +
        `The curve falls steadily from the local max down to the local min, and every tangent there has negative slope.`,
    },
    max: {
      badge: 'Horizontal tangent · max',
      title: 'Tangent is flat at the peak ⌒',
      text:
        `At c = ${HLB('{c}')}, f&prime;(c) = ${HLG('0')}. The tangent is ${HL('horizontal')} — parallel to the x-axis. ` +
        `The curve falls on both sides of c, so this is a ${STR('local maximum')}. ` +
        `Fermat&apos;s theorem guarantees that any smooth interior extremum forces f&prime; through zero.`,
      notePill: 'why this isn&apos;t enough',
      note:
        `A horizontal tangent alone doesn&apos;t prove a maximum — it only says the curve is momentarily flat. ` +
        `The ${STR('sign change of f&prime;')} (positive → negative) is what confirms the maximum.`,
    },
    min: {
      badge: 'Horizontal tangent · min',
      title: 'Tangent is flat at the valley ⌣',
      text:
        `At c = ${HLB('{c}')}, f&prime;(c) = ${HLG('0')}. The tangent is ${HL('horizontal')}. ` +
        `The curve rises on both sides of c, so this is a ${STR('local minimum')}. ` +
        `Again Fermat&apos;s theorem: smooth interior extremum ⇒ f&prime;(c) = 0.`,
      notePill: 'why this isn&apos;t enough',
      note:
        `Zero slope is necessary but not sufficient. The ${STR('sign change of f&prime;')} ` +
        `(negative → positive) is what confirms a minimum.`,
    },
  },
  theory: {
    definition: {
      lbl: 'Definition',
      body: 'The tangent line to f at x = c is the unique line passing through (c, f(c)) with slope f&prime;(c). In point-slope form:',
      eq: 'y = f(c) + f&prime;(c) (x − c)',
    },
    derivativeAsSlope: {
      lbl: 'Derivative as slope',
      body:
        `The derivative ${CODE('f&prime;(c)')} <em>is</em> the slope of the tangent at c — this is its geometric definition. ` +
        `Algebraically, f&prime;(c) is the limit of secant slopes as the second point slides into c; ` +
        `geometrically, those secants rotate into the unique tangent. The same number, two views.`,
    },
    linearization: {
      lbl: 'Best linear approximation',
      body:
        `Among all lines through ${CODE('(c, f(c))')}, the tangent is the one whose graph matches f to <em>first order</em> at c: ` +
        `both pass through the same point, and both have the same slope there. ` +
        `Any other line would diverge from f faster as you move away. ` +
        `That&apos;s why ${CODE('L(x) = f(c) + f&prime;(c)(x − c)')} is called the <em>linearization</em> of f at c.`,
    },
    criticalPoints: {
      lbl: 'Horizontal tangent &amp; critical points',
      body:
        `Where ${CODE('f&prime;(c) = 0')}, the tangent is horizontal. Such points are ${STR('critical points')} — candidates for local extrema. ` +
        `At a local max, the tangent sits above the nearby curve; at a local min, below. ` +
        `${STR('Fermat&apos;s theorem')} guarantees an interior smooth extremum forces ${CODE('f&prime;(c) = 0')}.`,
    },
    onThisFunction: {
      lbl: 'On this function',
      body:
        `For ${CODE('f(x) = ⅓x³ − x')}, the slope of the tangent at any c is ${CODE('f&prime;(c) = c² − 1')}:` +
        `<ul style="margin:6px 0 0;padding-left:18px;font-size:12.5px;line-height:1.6;color:#0f172a">` +
        `<li style="margin-bottom:3px">For |c| &gt; 1, slope is positive — tangent rises to the right.</li>` +
        `<li style="margin-bottom:3px">For |c| &lt; 1, slope is negative — tangent falls to the right.</li>` +
        `<li>At c = ±1, slope = 0 — horizontal tangent at the local extrema.</li>` +
        `</ul>`,
    },
  },
};

function mergeExplanations(overrides) {
  const out = { meaning: {}, theory: {} };
  ['idle', 'pos', 'neg', 'max', 'min'].forEach((k) => {
    out.meaning[k] = { ...DEFAULT_EXPLANATIONS.meaning[k], ...(overrides?.meaning?.[k] || {}) };
  });
  ['definition', 'derivativeAsSlope', 'linearization', 'criticalPoints', 'onThisFunction'].forEach((k) => {
    out.theory[k] = { ...DEFAULT_EXPLANATIONS.theory[k], ...(overrides?.theory?.[k] || {}) };
  });
  return out;
}

/* =========================================================================
 *  drawScene — pure canvas drawing
 * ========================================================================= */
function drawScene(canvas, scene, theme) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.clientWidth;
  const H = canvas.clientHeight;

  const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
  const yToPx = (y) => H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * H;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);

  // region tint (under grid)
  if (scene.scenario && scene.regionAlpha > 0) {
    const cfg = SCENARIOS[scene.scenario];
    const xa = xToPx(cfg.regionA), xb = xToPx(cfg.regionB);
    ctx.save();
    ctx.globalAlpha = 0.55 * scene.regionAlpha;
    ctx.fillStyle = theme.soft;
    ctx.fillRect(Math.min(xa, xb), 0, Math.abs(xb - xa), H);
    ctx.strokeStyle = theme.mid; ctx.lineWidth = 1;
    ctx.setLineDash([2, 3]);
    ctx.beginPath(); ctx.moveTo(xa, 0); ctx.lineTo(xa, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(xb, 0); ctx.lineTo(xb, H); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // grid
  drawGrid(ctx, W, H, xToPx, yToPx);

  // chevrons for max/min showing slope sign change
  if (scene.scenario && (scene.scenario === 'max' || scene.scenario === 'min') && scene.regionAlpha > 0.5) {
    drawChevrons(ctx, scene, theme, xToPx, yToPx);
  }

  // curve
  ctx.save();
  ctx.strokeStyle = '#1e3a8a'; ctx.lineWidth = 2.5;
  ctx.beginPath();
  const N = 600;
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    const px = xToPx(x), py = yToPx(f(x));
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.stroke();
  ctx.restore();

  // tangent (drawn under drop / point so they stay readable on top)
  if (scene.tangentReveal > 0) drawTangent(ctx, scene, theme, xToPx, yToPx);

  // drop line from x-axis to curve at c
  if (scene.liftReveal > 0) drawDrop(ctx, scene, xToPx, yToPx);

  // c marker on x-axis
  if (scene.cMarkerAlpha > 0) drawCMarker(ctx, scene, theme, xToPx, yToPx);

  // point P on curve
  if (scene.pointAlpha > 0) drawPoint(ctx, scene, theme, xToPx, yToPx);

  // slope label
  if (scene.slopeReveal > 0.5 && scene.tangentReveal > 0.1) drawSlopeLabel(ctx, scene, theme, xToPx, yToPx);
}

function drawGrid(ctx, W, H, xToPx, yToPx) {
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
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) {
    for (let s = 1; s < 5; s++) {
      const yv = y + s * 0.2; if (yv < Y_MIN || yv > Y_MAX) continue;
      const py = yToPx(yv);
      ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(W, py); ctx.stroke();
    }
  }
  ctx.strokeStyle = '#e6eaf2';
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    const px = xToPx(x);
    ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
  }
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) {
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
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) {
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
}

function drawChevrons(ctx, scene, theme, xToPx, yToPx) {
  const cfg = SCENARIOS[scene.scenario];
  ctx.save();
  ctx.globalAlpha = scene.regionAlpha;
  ctx.strokeStyle = theme.main;
  ctx.lineWidth = 2;
  const drawSegment = (a, b, dir) => {
    const steps = 3;
    for (let i = 1; i <= steps; i++) {
      const x = a + (i / (steps + 1)) * (b - a);
      const dx = 0.08;
      const x0n = x - dx * dir, x1n = x + dx * dir;
      const p0 = { x: xToPx(x0n), y: yToPx(f(x0n)) };
      const p1 = { x: xToPx(x1n), y: yToPx(f(x1n)) };
      const vx = p1.x - p0.x, vy = p1.y - p0.y;
      const len = Math.hypot(vx, vy) || 1;
      const ux = vx / len, uy = vy / len;
      const tip = { x: xToPx(x) + ux * 7, y: yToPx(f(x)) + uy * 7 };
      const tail1 = { x: tip.x - ux * 9 - uy * 5, y: tip.y - uy * 9 + ux * 5 };
      const tail2 = { x: tip.x - ux * 9 + uy * 5, y: tip.y - uy * 9 - ux * 5 };
      ctx.beginPath();
      ctx.moveTo(tail1.x, tail1.y);
      ctx.lineTo(tip.x, tip.y);
      ctx.lineTo(tail2.x, tail2.y);
      ctx.stroke();
    }
  };
  drawSegment(cfg.regionA, scene.c, cfg.signL);
  drawSegment(scene.c, cfg.regionB, cfg.signR);
  ctx.restore();
}

function drawTangent(ctx, scene, theme, xToPx, yToPx) {
  const c = scene.c;
  const m = fp(c);
  const yc = f(c);
  const b = yc - m * c;
  const halfReveal = ease(scene.tangentReveal);
  const halfRange = (X_MAX - X_MIN) * halfReveal * 0.6;
  const xA = c - halfRange;
  const xB = c + halfRange;
  ctx.save();
  ctx.strokeStyle = theme.main; ctx.lineWidth = 2.25;
  ctx.beginPath();
  ctx.moveTo(xToPx(xA), yToPx(m * xA + b));
  ctx.lineTo(xToPx(xB), yToPx(m * xB + b));
  ctx.stroke();
  ctx.restore();
}

function drawDrop(ctx, scene, xToPx, yToPx) {
  const c = scene.c;
  const yc = f(c);
  const y0 = yToPx(0);
  const ycPx = yToPx(yc);
  const cPx = xToPx(c);
  ctx.save();
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.4;
  const reveal = ease(scene.liftReveal);
  const endY = y0 + (ycPx - y0) * reveal;
  ctx.beginPath();
  ctx.moveTo(cPx, y0);
  ctx.lineTo(cPx, endY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}

function drawCMarker(ctx, scene, theme, xToPx, yToPx) {
  const cPx = xToPx(scene.c);
  const y0 = yToPx(0);

  ctx.save();
  ctx.globalAlpha = scene.cMarkerAlpha;
  if (scene.cMarkerPulse > 0) {
    const p = scene.cMarkerPulse;
    ctx.fillStyle = `rgba(${theme.rgb},${0.25 * p})`;
    ctx.beginPath(); ctx.arc(cPx, y0, 14 + p * 10, 0, Math.PI * 2); ctx.fill();
  }
  ctx.fillStyle = theme.deep;
  ctx.beginPath(); ctx.arc(cPx, y0, 6, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cPx, y0, 6, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = theme.deep;
  ctx.font = 'italic 12px Georgia,serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText('c', cPx, y0 + 14);
  ctx.restore();
}

function drawPoint(ctx, scene, theme, xToPx, yToPx) {
  const cPx = xToPx(scene.c);
  const ycPx = yToPx(f(scene.c));
  ctx.save();
  ctx.globalAlpha = scene.pointAlpha;
  if (scene.pointPulse > 0) {
    const p = scene.pointPulse;
    ctx.fillStyle = `rgba(${theme.rgb},${0.25 * p})`;
    ctx.beginPath(); ctx.arc(cPx, ycPx, 14 + p * 10, 0, Math.PI * 2); ctx.fill();
  }
  ctx.fillStyle = `rgba(${theme.rgb},.22)`;
  ctx.beginPath(); ctx.arc(cPx, ycPx, 11, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = theme.deep; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cPx, ycPx, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = theme.deep;
  ctx.font = '600 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  const offsetUp = (f(scene.c) >= 0);
  ctx.textAlign = 'left'; ctx.textBaseline = offsetUp ? 'bottom' : 'top';
  ctx.fillText('P = (c, f(c))', cPx + 9, ycPx + (offsetUp ? -8 : 8));
  ctx.restore();
}

function drawSlopeLabel(ctx, scene, theme, xToPx, yToPx) {
  const c = scene.c;
  const m = fp(c);
  const yc = f(c);
  const b = yc - m * c;
  const labelAlpha = Math.min(1, (scene.tangentReveal - 0.4) * 2.5);
  if (labelAlpha <= 0) return;
  const xLbl = c + 0.45;
  const yLbl = m * xLbl + b;
  const px = xToPx(xLbl);
  const py = yToPx(yLbl);
  const text = 'slope = ' + fmt(m, 2);
  ctx.save();
  ctx.globalAlpha = labelAlpha;
  ctx.font = '600 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  const lblW = ctx.measureText(text).width + 14;
  const lblH = 22;
  const lblX = px + 8;
  const lblY = py - 28;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = theme.main;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  const r = 4;
  ctx.moveTo(lblX + r, lblY);
  ctx.arcTo(lblX + lblW, lblY, lblX + lblW, lblY + lblH, r);
  ctx.arcTo(lblX + lblW, lblY + lblH, lblX, lblY + lblH, r);
  ctx.arcTo(lblX, lblY + lblH, lblX, lblY, r);
  ctx.arcTo(lblX, lblY, lblX + lblW, lblY, r);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = theme.deep;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText(text, lblX + 7, lblY + lblH / 2 + 0.5);
  ctx.restore();
}

/* =========================================================================
 *  Animation advance (mutates scene)
 * ========================================================================= */
function advanceAnimation(s, now) {
  if (!s.running || s.phase < 0) { s.running = false; return; }
  const step = STEPS[s.phase];
  if (!step) { s.running = false; s.phase = -1; return; }

  const tRaw = Math.min(1, (now - s.phaseStart) / step.dur);
  const t = ease(tRaw);

  // reset all transient reveals
  s.regionAlpha = 0;
  s.cMarkerAlpha = 0;
  s.cMarkerPulse = 0;
  s.liftReveal = 0;
  s.pointAlpha = 0;
  s.pointPulse = 0;
  s.slopeReveal = 0;
  s.tangentReveal = 0;

  const idx = s.phase;
  const past = (name) => {
    const i = STEPS.findIndex((x) => x.name === name);
    return i >= 0 && i < idx;
  };
  const isNow = (name) => STEPS[idx].name === name;

  if (past('region') || isNow('region')) s.regionAlpha = isNow('region') ? t : 1;

  if (isNow('mark')) {
    s.c = lerp(s.animFromC, SCENARIOS[s.scenario].c, t);
    s.cMarkerAlpha = t;
    s.cMarkerPulse = 1 - tRaw;
  } else if (past('mark')) {
    s.c = SCENARIOS[s.scenario].c;
    s.cMarkerAlpha = 1;
  }

  if (isNow('lift')) s.liftReveal = t;
  else if (past('lift')) s.liftReveal = 1;

  if (isNow('lift') && t > 0.6) {
    s.pointAlpha = (t - 0.6) * 2.5;
    s.pointPulse = s.pointAlpha;
  } else if (past('lift')) {
    s.pointAlpha = 1;
  }

  if (isNow('slope')) s.slopeReveal = t;
  else if (past('slope')) s.slopeReveal = 1;

  if (isNow('tangent')) s.tangentReveal = t;
  else if (past('tangent')) s.tangentReveal = 1;

  // active section in panel
  if (isNow('region') || isNow('mark') || isNow('lift')) s.activeSection = 'point';
  else if (isNow('slope')) s.activeSection = 'slope';
  else if (isNow('tangent') || isNow('equation')) s.activeSection = 'eq';

  s.banner = { pill: 'Step ' + (idx + 1) + ' / ' + STEPS.length, text: step.label };

  if (tRaw >= 1) {
    s.phase++;
    s.phaseStart = now;
    if (s.phase >= STEPS.length) {
      s.phase = -1;
      s.running = false;
      // settle: keep everything visible
      s.regionAlpha = 1;
      s.cMarkerAlpha = 1;
      s.liftReveal = 1;
      s.pointAlpha = 1;
      s.slopeReveal = 1;
      s.tangentReveal = 1;
      s.activeSection = 'idle';
      s.banner = null;
      s.justFinished = true;
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
export default function FunctionTangentLine({ explanations } = {}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animRafRef = useRef(0);
  const dragRef = useRef(null);

  const sceneRef = useRef({
    c: DEFAULT_C,
    animFromC: DEFAULT_C,
    scenario: null,
    phase: -1,
    phaseStart: 0,
    running: false,
    justFinished: false,
    // visual reveals (idle state shows everything for the default c)
    regionAlpha: 0,
    cMarkerAlpha: 1,
    cMarkerPulse: 0,
    liftReveal: 1,
    pointAlpha: 1,
    pointPulse: 0,
    slopeReveal: 1,
    tangentReveal: 1,
    activeSection: 'idle',
    banner: null,
  });

  const [scenario, setScenario] = useState(null);
  const [activeTab, setActiveTab] = useState('comp');
  const [runSignal, setRunSignal] = useState(0);
  const [, setTick] = useState(0);

  const exp = useMemo(() => mergeExplanations(explanations), [explanations]);
  const theme = THEMES[scenario || 'pos'];

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
      drawScene(cv, sceneRef.current, theme);
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', fit);
    return () => { ro.disconnect(); window.removeEventListener('resize', fit); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  /* ----- redraw on every React render ----- */
  useEffect(() => {
    drawScene(canvasRef.current, sceneRef.current, theme);
  });

  /* ----- animation loop ----- */
  useEffect(() => {
    if (!sceneRef.current.running) return;
    const tick = () => {
      const now = performance.now();
      advanceAnimation(sceneRef.current, now);
      drawScene(canvasRef.current, sceneRef.current, theme);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runSignal]);

  /* ----- drag c on x-axis ----- */
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * cv.clientWidth;
    const yToPx = (y) => cv.clientHeight - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * cv.clientHeight;
    const pxToX = (px) => X_MIN + (px / cv.clientWidth) * (X_MAX - X_MIN);

    const hitC = (mx, my) => {
      const s = sceneRef.current;
      if (s.running) return false;
      const cPx = xToPx(s.c);
      const y0 = yToPx(0);
      return Math.hypot(mx - cPx, my - y0) < 14;
    };
    const getMouse = (e) => {
      const r = cv.getBoundingClientRect();
      const t = (e.touches && e.touches[0]) || e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    };
    const onDragMove = (m) => {
      const s = sceneRef.current;
      s.c = clampX(pxToX(m.x));
      // dragging clears active scenario but keeps tangent visible
      if (s.scenario) {
        s.scenario = null;
        s.regionAlpha = 0;
        setScenario(null);
      }
      drawScene(cv, sceneRef.current, theme);
      setTick((t) => t + 1);
    };

    const onDown = (e) => {
      if (sceneRef.current.running) return;
      const m = getMouse(e);
      if (hitC(m.x, m.y)) { dragRef.current = 'c'; cv.style.cursor = 'grabbing'; }
    };
    const onMove = (e) => {
      if (sceneRef.current.running) return;
      const m = getMouse(e);
      if (dragRef.current === 'c') onDragMove(m);
      else cv.style.cursor = hitC(m.x, m.y) ? 'grab' : 'default';
    };
    const onUp = () => { dragRef.current = null; cv.style.cursor = 'default'; };

    const onTouchStart = (e) => {
      if (sceneRef.current.running) return;
      const m = getMouse(e);
      if (hitC(m.x, m.y)) { dragRef.current = 'c'; e.preventDefault(); }
    };
    const onTouchMove = (e) => {
      if (sceneRef.current.running || !dragRef.current) return;
      onDragMove(getMouse(e));
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
  }, [theme]);

  /* ----- scenario / reset ----- */
  const startScenario = (name) => {
    if (sceneRef.current.running) return;
    sceneRef.current.scenario = name;
    sceneRef.current.animFromC = sceneRef.current.c;
    sceneRef.current.phase = 0;
    sceneRef.current.phaseStart = performance.now();
    sceneRef.current.running = true;
    sceneRef.current.justFinished = false;
    setScenario(name);
    setActiveTab('comp');
    setRunSignal((s) => s + 1);
  };

  const reset = () => {
    sceneRef.current = {
      c: DEFAULT_C,
      animFromC: DEFAULT_C,
      scenario: null,
      phase: -1,
      phaseStart: 0,
      running: false,
      justFinished: false,
      regionAlpha: 0,
      cMarkerAlpha: 1,
      cMarkerPulse: 0,
      liftReveal: 1,
      pointAlpha: 1,
      pointPulse: 0,
      slopeReveal: 1,
      tangentReveal: 1,
      activeSection: 'idle',
      banner: null,
    };
    setScenario(null);
    setActiveTab('comp');
    setTick((t) => t + 1);
  };

  /* ----- derived live values ----- */
  const c = sceneRef.current.c;
  const yc = f(c);
  const m = fp(c);
  const b = yc - m * c;
  const sec = sceneRef.current.activeSection;

  // theme vars on wrapper
  const themeVars = {
    '--scMain': theme.main,
    '--scDeep': theme.deep,
    '--scSoft': theme.soft,
    '--scMid':  theme.mid,
    '--scTint': theme.tint,
  };

  // banner state
  const banner = sceneRef.current.banner;

  // verdict key
  const verdictKey = scenario || 'idle';
  const verdictContent = exp.meaning[verdictKey];
  const subVars = { c: fmt(c), m: fmt(m, 2) };

  return (
    <div
      ref={containerRef}
      style={{
        ...themeVars,
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        color: '#0f172a', fontSize: 14, lineHeight: 1.5,
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 380px', gap: 18, alignItems: 'start' }}>

        {/* ============ LEFT: graph card ============ */}
        <div style={cardStyle}>
          <div style={cardHeadStyle}>
            <h2 style={cardHeadH2Style}>Local view · f(x) = ⅓x³ − x</h2>
            <div style={cardHeadMetaStyle}>f&prime;(x) = x² − 1 · max at x = −1 · min at x = 1</div>
          </div>

          <div style={{ position: 'relative', background: '#fff' }}>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: 'auto' }} />
            <div style={{
              position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
              background: 'rgba(255,255,255,.96)',
              border: '1px solid var(--scMain)',
              color: 'var(--scDeep)',
              boxShadow: `0 4px 14px rgba(${theme.rgb},.25)`,
              borderRadius: 20, padding: '7px 16px 7px 7px',
              fontSize: 12.5, fontWeight: 600, letterSpacing: '.2px',
              opacity: banner ? 1 : 0,
              pointerEvents: 'none',
              transition: 'opacity .25s ease, border-color .3s, color .3s, box-shadow .3s',
              display: 'flex', alignItems: 'center', gap: 10, maxWidth: '80%', whiteSpace: 'nowrap',
            }}>
              <span style={{
                background: 'var(--scMain)', color: '#fff', borderRadius: 14,
                padding: '3px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '.4px',
              }}>{banner?.pill || ''}</span>
              <span>{banner?.text || ''}</span>
            </div>
            <div style={{
              position: 'absolute', left: 14, bottom: 10,
              fontSize: 11.5, color: '#475569',
              background: 'rgba(255,255,255,.85)', padding: '4px 8px',
              border: '1px solid #cbd5e1', borderRadius: 4,
            }}>
              Drag c on the x-axis, or pick a scenario.
            </div>
          </div>

          <div style={{
            padding: '12px 14px', borderTop: '1px solid #cbd5e1', background: '#eff6ff',
            display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center',
          }}>
            <ScenarioButton sc="pos" active={scenario === 'pos'} onClick={() => startScenario('pos')} />
            <ScenarioButton sc="neg" active={scenario === 'neg'} onClick={() => startScenario('neg')} />
            <ScenarioButton sc="max" active={scenario === 'max'} onClick={() => startScenario('max')} />
            <ScenarioButton sc="min" active={scenario === 'min'} onClick={() => startScenario('min')} />
            <ResetButton onClick={reset} />
          </div>

          <div style={{
            padding: '8px 14px', borderTop: '1px solid #cbd5e1', background: '#fff',
            display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 12, color: '#475569',
          }}>
            <div style={readoutGroupStyle}><span>c =</span><b style={monoB}>{fmt(c)}</b></div>
            <div style={readoutGroupStyle}><span>f(c) =</span><b style={monoB}>{fmt(yc)}</b></div>
            <div style={readoutGroupStyle}>
              <span>f&prime;(c) =</span>
              <b style={{ ...monoB, color: 'var(--scMain)' }}>{fmt(m)}</b>
            </div>
            <div style={readoutGroupStyle}>
              <span>slope of tangent =</span>
              <b style={{ ...monoB, color: 'var(--scMain)' }}>{fmt(m)}</b>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
              <span><span style={{ ...swatch, background: '#1e3a8a' }} />f(x)</span>
              <span><span style={{ ...swatch, background: 'var(--scMain)' }} />tangent</span>
              <span><span style={{ ...swatch, background: '#94a3b8' }} />drop</span>
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
                <Section active={sec === 'point'}>
                  <SectionH4>The point of tangency</SectionH4>
                  <Formula label="at x = c">
                    <div style={{ margin: '2px 0' }}>c = {fmt(c)}</div>
                    <div style={{ margin: '2px 0' }}>f(c) = {fmt(yc, 3)}</div>
                  </Formula>
                </Section>

                <Section active={sec === 'slope'}>
                  <SectionH4>Step 1 — Slope from the derivative</SectionH4>
                  <Formula label="evaluate f′(c)">
                    <div style={{ margin: '2px 0' }}>f&prime;(x) = x² − 1</div>
                    <div style={{ margin: '2px 0' }}>
                      f&prime;(c) = ({fmt(c)})² − 1 = <span style={resStyle}>{fmt(m, 3)}</span>
                    </div>
                  </Formula>
                </Section>

                <Section active={sec === 'eq'}>
                  <SectionH4>Step 2 — Point-slope form</SectionH4>
                  <Formula label="tangent line equation">
                    <div style={{ margin: '2px 0' }}>y − f(c) = f&prime;(c) (x − c)</div>
                    <div style={{ margin: '2px 0' }}>
                      y − <span style={resStyle}>{fmt(yc, 3)}</span> = <span style={resStyle}>{fmt(m, 3)}</span> (x − <span style={resStyle}>{fmt(c)}</span>)
                    </div>
                    <div style={{ marginTop: 6 }}>
                      y = <span style={resStyle}>{fmt(m, 3) + ' x ' + (b >= 0 ? '+ ' : '− ') + fmt(Math.abs(b), 3)}</span>
                    </div>
                  </Formula>
                </Section>
              </div>
            )}

            {/* MEANING */}
            {activeTab === 'mean' && (
              <div style={panelBodyStyle}>
                <Section active>
                  <SectionH4>Verdict</SectionH4>
                  <div style={{
                    padding: 12, borderRadius: 6,
                    border: '1px solid var(--scMid)',
                    background: 'var(--scSoft)',
                    transition: 'all .3s ease',
                  }}>
                    <span style={{
                      display: 'inline-block', padding: '3px 9px', borderRadius: 11,
                      fontSize: 10.5, fontWeight: 700, letterSpacing: '.5px',
                      textTransform: 'uppercase', color: '#fff', background: 'var(--scMain)',
                    }} dangerouslySetInnerHTML={{ __html: verdictContent.badge }} />
                    <h3 style={{ margin: '8px 0 6px', fontSize: 14, color: 'var(--scDeep)', fontWeight: 600 }}
                      dangerouslySetInnerHTML={{ __html: verdictContent.title }} />
                    <p
                      style={{ margin: 0, fontSize: 12.5, color: '#475569', lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: substituteVars(verdictContent.text, subVars) }}
                    />
                  </div>
                  <div style={{
                    marginTop: 12, padding: '10px 12px', background: '#fff',
                    border: '1px solid var(--scMid)', borderRadius: 6,
                    fontSize: 12.5, color: '#475569', lineHeight: 1.6,
                  }}>
                    <span style={{
                      display: 'inline-block', padding: '1px 7px', borderRadius: 9,
                      fontSize: 10.5, fontWeight: 700, letterSpacing: '.3px',
                      color: '#fff', background: 'var(--scMain)', marginRight: 5, verticalAlign: 1,
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
                <TheoryBlock section={exp.theory.derivativeAsSlope} />
                <TheoryBlock section={exp.theory.linearization} />
                <TheoryBlock section={exp.theory.criticalPoints} />
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
  transition: 'color .3s',
};
const swatch = {
  display: 'inline-block', width: 14, height: 3, verticalAlign: 'middle',
  marginRight: 6, borderRadius: 2, transition: 'background .3s',
};
const panelBodyStyle = { padding: '14px 14px 16px 14px' };
const resStyle = { color: 'var(--scMain)', fontWeight: 700, transition: 'color .3s' };

function ScenarioButton({ sc, active, onClick }) {
  const [hover, hp] = useHover();
  const t = THEMES[sc];
  const cfg = SCENARIOS[sc];
  const bg = active ? t.main : (hover ? t.soft : '#fff');
  const color = active ? '#fff' : t.deep;
  return (
    <button
      type="button"
      onClick={onClick}
      {...hp}
      style={{
        appearance: 'none',
        background: bg, color,
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
        border: `1.5px solid ${t.main}`,
        boxShadow: active ? `0 2px 6px rgba(${t.rgb},.35)` : 'none',
      }}
    >
      <span style={{ fontSize: 13, lineHeight: 1 }}>{cfg.glyph}</span>
      {cfg.label} · {cfg.cLabel}
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
        marginLeft: 'auto',
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
        color: active ? 'var(--scDeep)' : (hover ? '#1e3a8a' : '#475569'),
        borderBottom: '2px solid ' + (active ? 'var(--scMain)' : 'transparent'),
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
      borderLeft: '3px solid ' + (active ? 'var(--scMain)' : 'transparent'),
      borderRadius: '0 6px 6px 0',
      background: active ? 'var(--scSoft)' : 'transparent',
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
      background: 'var(--scSoft)',
      border: '1px solid var(--scMid)',
      borderRadius: 6,
      padding: '9px 11px',
      margin: '8px 0',
      fontFamily: '"SF Mono",ui-monospace,Menlo,Monaco,Consolas,monospace',
      fontSize: 12.5,
      color: '#0f172a',
      transition: 'background .3s, border-color .3s',
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