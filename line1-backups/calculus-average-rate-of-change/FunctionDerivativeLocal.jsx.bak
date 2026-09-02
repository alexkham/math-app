'use client';

import { useRef, useEffect, useState, useMemo } from 'react';

/* =========================================================================
 *  FunctionDerivativeLocal
 *  Local two-point derivative analysis with 4 scenarios:
 *    asc · desc · max · min
 *  Animated step-by-step illustration. Inline styles only.
 *  Public API:
 *    <FunctionDerivativeLocal />                       // all defaults
 *    <FunctionDerivativeLocal explanations={{
 *      meaning: { desc: { title: '...' } },            // partial override
 *      theory:  { fermat: { body: '...' } }
 *    }} />
 * ========================================================================= */

/* ----- model ----- */
const f = (x) => (x * x * x) / 3 - x;
const LOC_MAX_X = -1;
const LOC_MIN_X = 1;

const X_MIN = -2.6, X_MAX = 2.6;
const Y_MIN = -1.8, Y_MAX = 1.8;

/* ----- themes (descending = red 700) ----- */
const THEMES = {
  asc:  { main:'#3b82f6', deep:'#1e3a8a', soft:'#dfebfe', mid:'#dbeafe', tint:'#bfdbfe', rgb:'59,130,246' },
  desc: { main:'#b91c1c', deep:'#7f1d1d', soft:'#fee2e2', mid:'#fecaca', tint:'#fca5a5', rgb:'185,28,28'  },
  max:  { main:'#d97706', deep:'#92400e', soft:'#fef3c7', mid:'#fde68a', tint:'#fcd34d', rgb:'217,119,6'  },
  min:  { main:'#0d9488', deep:'#115e59', soft:'#ccfbf1', mid:'#99f6e4', tint:'#5eead4', rgb:'13,148,136' },
};

const SCENARIOS = {
  asc:  { tx1:-2.05, tx2:-1.35, regionA:-2.5, regionB:-1.0, arrowsOn:'left-asc',   tighten:null },
  desc: { tx1:-0.55, tx2: 0.55, regionA:-1.0, regionB: 1.0, arrowsOn:'mid-desc',   tighten:null },
  max:  { tx1:-1.45, tx2:-0.55, regionA:-1.8, regionB:-0.2, arrowsOn:'around-max', tighten:[[-1.25,-0.75],[-1.08,-0.92]] },
  min:  { tx1: 0.55, tx2: 1.45, regionA: 0.2, regionB: 1.8, arrowsOn:'around-min', tighten:[[0.75,1.25],[0.92,1.08]] },
};

const BASIC_STEPS = [
  { name:'region',  dur:700, label:'Identify the region of the curve' },
  { name:'p1',      dur:750, label:'Mark first point P₁' },
  { name:'p2',      dur:750, label:'Mark second point P₂' },
  { name:'dx',      dur:650, label:'Measure horizontal change Δx' },
  { name:'dy',      dur:650, label:'Measure vertical change Δy' },
  { name:'secant',  dur:800, label:'Draw the secant · slope = Δy/Δx' },
  { name:'verdict', dur:700, label:'Interpret the sign of the slope' },
];
const TIGHTEN_STEPS = [
  { name:'tighten1', dur:1100, label:'Bring P₁ and P₂ closer · slope shrinks' },
  { name:'tighten2', dur:1100, label:'Closer still · slope → f′(c) = 0' },
];
const stepsFor = (sc) => ((sc === 'max' || sc === 'min') ? [...BASIC_STEPS, ...TIGHTEN_STEPS] : BASIC_STEPS);

const DEFAULT_X = { x1: -1.40, x2: -0.40 };

/* ----- helpers ----- */
const ease = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;
const fmt = (n) => (Math.abs(n) < 1e-9 ? '0.00' : n.toFixed(2));
const fmtSigned = (n) => (n >= 0 ? fmt(n) : '(' + fmt(n) + ')');
const clampX = (x) => Math.max(X_MIN + 0.05, Math.min(X_MAX - 0.05, x));

/* ----- inline-style emphasis helpers (CSS vars resolve from scenario theme on the wrapper) ----- */
const HLB = (s) => `<span style="color:var(--scMain);font-weight:700">${s}</span>`;
const HLD = (s) => `<span style="color:var(--scDeep);font-weight:700">${s}</span>`;
const HL  = (s) => `<span style="background:var(--scMid);color:var(--scDeep);padding:1px 5px;border-radius:3px;font-weight:600">${s}</span>`;
const HLG = (s) => `<span style="color:#94a3b8;font-weight:700">${s}</span>`;
const STR = (s) => `<strong style="color:var(--scDeep)">${s}</strong>`;
const CODE = (s) => `<code style="font-family:'SF Mono',ui-monospace,Menlo,Monaco,Consolas,monospace;background:#eff6ff;padding:1px 5px;border-radius:3px;color:#1e3a8a">${s}</code>`;

/* =========================================================================
 *  DEFAULT EXPLANATIONS — overridable per field
 * ========================================================================= */
const DEFAULT_EXPLANATIONS = {
  meaning: {
    asc: {
      badge: 'Ascending',
      title: 'Between P₁ and P₂, f is increasing ↗',
      text:
        `Because ${HLB('Δy &gt; 0')} when ${HLB('Δx &gt; 0')}, the ratio ${HLB('Δy/Δx &gt; 0')}. ` +
        `The secant ${HL('tilts upward to the right')}. ` +
        `Shrinking Δx around a single point turns this average slope into the derivative ${HLD('f&apos;(x)')} at that point — ` +
        `and ${HLD('f&apos;(x) &gt; 0')} is the formal way to say ${STR('f is increasing at x')}.`,
      notePill: 'why',
      note:
        `For this f, the left wing (x &lt; −1) and right wing (x &gt; 1) are both ascending. ` +
        `There, ${STR('f&apos;(x) = x² − 1 &gt; 0')} — exactly what the positive secant slope is approximating.`,
    },
    desc: {
      badge: 'Descending',
      title: 'Between P₁ and P₂, f is decreasing ↘',
      text:
        `Now ${HLD('Δy &lt; 0')} while ${HLB('Δx &gt; 0')}, so ${HLD('Δy/Δx &lt; 0')}. ` +
        `The secant ${HL('tilts downward to the right')}. ` +
        `In the limit Δx → 0 the secant becomes the tangent, so the derivative is negative: ${HLD('f&apos;(x) &lt; 0')} — ` +
        `the formal statement of ${STR('f is decreasing at x')}.`,
      notePill: 'why',
      note:
        `On the middle interval (−1, 1), ${STR('f&apos;(x) = x² − 1 &lt; 0')}. ` +
        `The function falls steadily from the local max down to the local min — and every secant inside this interval has negative slope.`,
    },
    max: {
      badge: 'Local maximum',
      title: 'P₁ and P₂ straddle a peak ⌒',
      text:
        `Just left of the peak f is ${HLB('rising')} (slope &gt; 0). ` +
        `Just right of it, f is ${HLD('falling')} (slope &lt; 0). ` +
        `Crossing through the peak, the slope must pass through ${HLG('zero')}. ` +
        `As P₁ and P₂ tighten symmetrically around the peak, ${HL('Δy / Δx → 0')}, and in the limit ` +
        `${STR('f&apos;(c) = 0')} at the maximum. This is ${STR('Fermat&apos;s theorem')}.`,
      notePill: 'why this isn&apos;t enough',
      note:
        `A zero derivative alone doesn&apos;t prove a maximum — only that the curve is momentarily flat. ` +
        `It&apos;s the ${STR('change of sign of f&apos;')} (positive → negative) that confirms it&apos;s a maximum. ` +
        `On this curve, that happens precisely at x = −1.`,
    },
    min: {
      badge: 'Local minimum',
      title: 'P₁ and P₂ straddle a valley ⌣',
      text:
        `Just left of the valley f is ${HLD('falling')} (slope &lt; 0). ` +
        `Just right of it, f is ${HLB('rising')} (slope &gt; 0). ` +
        `Crossing through the valley, the slope passes through ${HLG('zero')}. ` +
        `As P₁ and P₂ tighten symmetrically around the valley, ${HL('Δy / Δx → 0')}, so ${STR('f&apos;(c) = 0')} at the minimum.`,
      notePill: 'why this isn&apos;t enough',
      note:
        `Zero slope alone is necessary but not sufficient. The sign change of f&apos; ` +
        `(negative → positive) is what confirms a minimum. On this curve, that happens at x = 1.`,
    },
  },
  theory: {
    definition: {
      lbl: 'Definition',
      body: 'The derivative of f at a point c is the limit of the secant slope as the second point slides into c:',
      eq: 'f&apos;(c) = lim<sub>Δx → 0</sub> &nbsp; ( f(c+Δx) − f(c) ) / Δx',
    },
    monotonicity: {
      lbl: 'Sign &amp; monotonicity',
      body:
        `On an interval I where f is differentiable:` +
        `<ul style="margin:6px 0 0 0;padding-left:18px;font-size:12.5px;color:#0f172a;line-height:1.6">` +
        `<li style="margin-bottom:3px">If ${CODE('f&apos;(x) &gt; 0')} for all x in I, then f is <strong>strictly increasing</strong> on I.</li>` +
        `<li>If ${CODE('f&apos;(x) &lt; 0')} for all x in I, then f is <strong>strictly decreasing</strong> on I.</li>` +
        `</ul>`,
    },
    fermat: {
      lbl: 'Fermat&apos;s theorem',
      body:
        `If f has a local maximum or minimum at an interior point c and f&apos;(c) exists, then ${CODE('f&apos;(c) = 0')}. ` +
        `This is why every smooth extremum forces the slope through zero — and why we hunt extrema by solving f&apos;(x) = 0.`,
    },
    onThisFunction: {
      lbl: 'On this function',
      body:
        `For ${CODE('f(x) = ⅓x³ − x')}, we have ${CODE('f&apos;(x) = x² − 1')}. So:` +
        `<ul style="margin:6px 0 0 0;padding-left:18px;font-size:12.5px;color:#0f172a;line-height:1.6">` +
        `<li style="margin-bottom:3px">${CODE('f&apos;(x) &gt; 0')} for |x| &gt; 1 — f is increasing there (left and right wings).</li>` +
        `<li style="margin-bottom:3px">${CODE('f&apos;(x) &lt; 0')} for |x| &lt; 1 — f is decreasing in the middle.</li>` +
        `<li style="margin-bottom:3px">${CODE('f&apos;(−1) = 0')} — local maximum.</li>` +
        `<li>${CODE('f&apos;(1) = 0')} — local minimum.</li>` +
        `</ul>`,
    },
  },
};

/* ----- per-field merge: user partial overrides win, defaults fill in ----- */
function mergeExplanations(overrides) {
  const out = { meaning: {}, theory: {} };
  ['asc', 'desc', 'max', 'min'].forEach((sc) => {
    out.meaning[sc] = { ...DEFAULT_EXPLANATIONS.meaning[sc], ...(overrides?.meaning?.[sc] || {}) };
  });
  ['definition', 'monotonicity', 'fermat', 'onThisFunction'].forEach((s) => {
    out.theory[s] = { ...DEFAULT_EXPLANATIONS.theory[s], ...(overrides?.theory?.[s] || {}) };
  });
  return out;
}

/* =========================================================================
 *  drawScene — pure canvas draw, no React
 * ========================================================================= */
function drawScene(canvas, scene, scenario, theme) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.clientWidth;
  const H = canvas.clientHeight;

  const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
  const yToPx = (y) => H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * H;

  // clear
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);

  // region tint (under grid)
  if (scenario && scene.regionAlpha > 0) {
    const cfg = SCENARIOS[scenario];
    const xa = xToPx(cfg.regionA), xb = xToPx(cfg.regionB);
    ctx.save();
    ctx.globalAlpha = 0.55 * scene.regionAlpha;
    ctx.fillStyle = theme.soft;
    ctx.fillRect(Math.min(xa, xb), 0, Math.abs(xb - xa), H);
    ctx.strokeStyle = theme.mid;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 3]);
    ctx.beginPath(); ctx.moveTo(xa, 0); ctx.lineTo(xa, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(xb, 0); ctx.lineTo(xb, H); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // grid
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#eef2f7';
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    for (let s = 1; s < 5; s++) {
      const xv = x + s * 0.2;
      if (xv < X_MIN || xv > X_MAX) continue;
      const px = xToPx(xv);
      ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
    }
  }
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) {
    for (let s = 1; s < 5; s++) {
      const yv = y + s * 0.2;
      if (yv < Y_MIN || yv > Y_MAX) continue;
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
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.25;
  const y0 = yToPx(0), x0 = xToPx(0);
  ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(W, y0); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x0, 0); ctx.lineTo(x0, H); ctx.stroke();
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
    ctx.fillText(String(y), x0 - 5, yToPx(y));
  }
  ctx.textAlign = 'right'; ctx.textBaseline = 'top';
  ctx.fillText('0', x0 - 5, y0 + 4);
  ctx.fillStyle = '#475569';
  ctx.font = 'italic 12px Georgia,serif';
  ctx.textAlign = 'right'; ctx.textBaseline = 'top';
  ctx.fillText('x', W - 6, y0 + 4);
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText('y', x0 + 6, 4);
  ctx.restore();

  // curve
  ctx.save();
  ctx.strokeStyle = '#1e3a8a';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  const N = 600;
  for (let i = 0; i <= N; i++) {
    const x = X_MIN + (i / N) * (X_MAX - X_MIN);
    const px = xToPx(x), py = yToPx(f(x));
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.stroke();
  ctx.restore();

  // direction chevrons
  if (scenario && scene.arrowsAlpha > 0) {
    const cfg = SCENARIOS[scenario];
    const ranges = [];
    if (cfg.arrowsOn === 'left-asc')   ranges.push([cfg.regionA, cfg.regionB, +1]);
    if (cfg.arrowsOn === 'mid-desc')   ranges.push([cfg.regionA, cfg.regionB, -1]);
    if (cfg.arrowsOn === 'around-max') ranges.push([cfg.regionA, LOC_MAX_X, +1], [LOC_MAX_X, cfg.regionB, -1]);
    if (cfg.arrowsOn === 'around-min') ranges.push([cfg.regionA, LOC_MIN_X, -1], [LOC_MIN_X, cfg.regionB, +1]);

    ctx.save();
    ctx.globalAlpha = scene.arrowsAlpha;
    ctx.strokeStyle = theme.main;
    ctx.fillStyle = theme.main;
    ctx.lineWidth = 2;
    ranges.forEach(([a, b, dir]) => {
      const steps = 4;
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
    });
    if (cfg.arrowsOn === 'around-max') {
      const ex = LOC_MAX_X, ey = f(LOC_MAX_X);
      ctx.fillStyle = theme.deep;
      ctx.beginPath(); ctx.arc(xToPx(ex), yToPx(ey), 4, 0, Math.PI * 2); ctx.fill();
      ctx.font = '600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
      ctx.fillText('local max  f′ = 0', xToPx(ex), yToPx(ey) - 8);
    }
    if (cfg.arrowsOn === 'around-min') {
      const ex = LOC_MIN_X, ey = f(LOC_MIN_X);
      ctx.fillStyle = theme.deep;
      ctx.beginPath(); ctx.arc(xToPx(ex), yToPx(ey), 4, 0, Math.PI * 2); ctx.fill();
      ctx.font = '600 11px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText('local min  f′ = 0', xToPx(ex), yToPx(ey) + 8);
    }
    ctx.restore();
  }

  // delta lines
  const X1 = xToPx(scene.x1), Y1 = yToPx(f(scene.x1));
  const X2 = xToPx(scene.x2), Y2 = yToPx(f(scene.x2));
  const XdxEnd = X1 + (X2 - X1) * scene.dxRevealed;
  const YdyEnd = Y1 + (Y2 - Y1) * scene.dyRevealed;
  ctx.save();
  ctx.setLineDash([5, 4]);
  ctx.lineWidth = 1.5;
  if (scene.dxRevealed > 0) {
    ctx.strokeStyle = '#64748b';
    ctx.beginPath(); ctx.moveTo(X1, Y1); ctx.lineTo(XdxEnd, Y1); ctx.stroke();
    if (scene.dxRevealed > 0.5) {
      ctx.setLineDash([]);
      ctx.globalAlpha = (scene.dxRevealed - 0.5) * 2;
      ctx.fillStyle = '#475569';
      ctx.font = 'italic 13px Georgia,serif';
      ctx.textAlign = 'center'; ctx.textBaseline = (Y2 > Y1) ? 'top' : 'bottom';
      ctx.fillText('Δx', (X1 + X2) / 2, Y1 + (Y2 > Y1 ? 5 : -5));
      ctx.globalAlpha = 1;
      ctx.setLineDash([5, 4]);
    }
  }
  if (scene.dyRevealed > 0) {
    ctx.strokeStyle = '#64748b';
    ctx.beginPath(); ctx.moveTo(X2, Y1); ctx.lineTo(X2, YdyEnd); ctx.stroke();
    if (scene.dyRevealed > 0.5) {
      ctx.setLineDash([]);
      ctx.globalAlpha = (scene.dyRevealed - 0.5) * 2;
      ctx.fillStyle = '#475569';
      ctx.font = 'italic 13px Georgia,serif';
      ctx.textAlign = (X2 > X1) ? 'left' : 'right'; ctx.textBaseline = 'middle';
      ctx.fillText('Δy', X2 + (X2 > X1 ? 6 : -6), (Y1 + Y2) / 2);
      ctx.globalAlpha = 1;
    }
  }
  ctx.restore();

  // secant
  if (scene.secantAlpha > 0 && Math.abs(scene.x2 - scene.x1) >= 1e-9) {
    const m = (f(scene.x2) - f(scene.x1)) / (scene.x2 - scene.x1);
    const b = f(scene.x1) - m * scene.x1;
    const pad = 0.35 * Math.abs(scene.x2 - scene.x1) + 0.5;
    const xa = Math.min(scene.x1, scene.x2) - pad;
    const xb = Math.max(scene.x1, scene.x2) + pad;
    ctx.save();
    ctx.globalAlpha = scene.secantAlpha;
    ctx.strokeStyle = theme.main;
    ctx.lineWidth = 2.25;
    ctx.beginPath();
    ctx.moveTo(xToPx(xa), yToPx(m * xa + b));
    ctx.lineTo(xToPx(xb), yToPx(m * xb + b));
    ctx.stroke();

    if (scene.secantAlpha > 0.6) {
      ctx.globalAlpha = (scene.secantAlpha - 0.6) * 2.5;
      const xm = (scene.x1 + scene.x2) / 2;
      const ym = m * xm + b;
      const lblText = 'm = ' + m.toFixed(2);
      ctx.font = '600 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
      const lblW = ctx.measureText(lblText).width + 14;
      const lblH = 22;
      const lblX = xToPx(xm) + 12;
      const lblY = yToPx(ym) - 26;
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
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = theme.deep;
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(lblText, lblX + 7, lblY + lblH / 2 + 0.5);
    }
    ctx.restore();
  }

  // points
  const drawPoint = (x, label, pulse) => {
    const px = xToPx(x), py = yToPx(f(x));
    ctx.save();
    if (pulse > 0) {
      const r = 14 + pulse * 10;
      ctx.fillStyle = `rgba(${theme.rgb},${0.25 * pulse})`;
      ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = `rgba(${theme.rgb},.18)`;
    ctx.beginPath(); ctx.arc(px, py, 11, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = theme.deep;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = theme.deep;
    ctx.font = '600 12px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
    ctx.fillText(label, px + 9, py - 8);
    ctx.restore();
  };
  if (scene.showP1) drawPoint(scene.x1, 'P₁', scene.p1Pulse);
  if (scene.showP2) drawPoint(scene.x2, 'P₂', scene.p2Pulse);
}

/* =========================================================================
 *  Hover helper
 * ========================================================================= */
function useHover() {
  const [h, setH] = useState(false);
  return [h, { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) }];
}

/* =========================================================================
 *  Component
 * ========================================================================= */
export default function FunctionDerivativeLocal({ explanations } = {}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // imperative scene state — updated every animation tick, mirrored to React via `tick`
  const sceneRef = useRef({
    x1: DEFAULT_X.x1, x2: DEFAULT_X.x2,
    phase: -1, phaseStart: 0,
    animFromX1: 0, animFromX2: 0,
    regionAlpha: 0, arrowsAlpha: 0,
    dxRevealed: 1, dyRevealed: 1, secantAlpha: 1,
    showP1: true, showP2: true,
    p1Pulse: 0, p2Pulse: 0,
    verdictGlow: false,
    activeSection: 'idle',
    banner: null,
  });

  const [scenario, setScenario] = useState(null);
  const [activeTab, setActiveTab] = useState('comp');
  const [, setTick] = useState(0);
  const dragRef = useRef(null);
  const animRafRef = useRef(0);

  const exp = useMemo(() => mergeExplanations(explanations), [explanations]);
  const theme = THEMES[scenario || 'asc'];

  /* ----- canvas DPR fit + resize ----- */
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
      const ctx = cv.getContext('2d');
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      drawScene(cv, sceneRef.current, scenario, theme);
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [scenario, theme]);

  /* ----- redraw whenever something visible changes ----- */
  const requestRender = () => setTick((t) => t + 1);

  useEffect(() => {
    drawScene(canvasRef.current, sceneRef.current, scenario, theme);
  });

  /* ----- animation loop ----- */
  useEffect(() => {
    if (sceneRef.current.phase < 0) return;
    const tick = () => {
      const now = performance.now();
      advanceAnimation(sceneRef.current, scenario, now, () => {
        // animation ended → switch to meaning tab
        setActiveTab('mean');
      });
      drawScene(canvasRef.current, sceneRef.current, scenario, theme);
      setTick((t) => t + 1);
      if (sceneRef.current.phase >= 0) {
        animRafRef.current = requestAnimationFrame(tick);
      }
    };
    animRafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenario]);

  /* ----- interaction (drag P1 / P2) ----- */
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const xToPx = (x) => ((x - X_MIN) / (X_MAX - X_MIN)) * cv.clientWidth;
    const yToPx = (y) => cv.clientHeight - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * cv.clientHeight;
    const pxToX = (px) => X_MIN + (px / cv.clientWidth) * (X_MAX - X_MIN);

    const hit = (mx, my) => {
      const r = 14;
      const s = sceneRef.current;
      const d1 = Math.hypot(mx - xToPx(s.x1), my - yToPx(f(s.x1)));
      const d2 = Math.hypot(mx - xToPx(s.x2), my - yToPx(f(s.x2)));
      if (d1 < r && d1 <= d2) return 'p1';
      if (d2 < r) return 'p2';
      return null;
    };
    const getMouse = (e) => {
      const r = cv.getBoundingClientRect();
      const t = (e.touches && e.touches[0]) || e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    };

    const onDown = (e) => {
      if (sceneRef.current.phase >= 0) return;
      const m = getMouse(e);
      dragRef.current = hit(m.x, m.y);
      if (dragRef.current) cv.style.cursor = 'grabbing';
    };
    const onMove = (e) => {
      if (sceneRef.current.phase >= 0) return;
      const m = getMouse(e);
      if (dragRef.current) {
        const nx = clampX(pxToX(m.x));
        if (dragRef.current === 'p1') sceneRef.current.x1 = nx;
        else sceneRef.current.x2 = nx;
        drawScene(cv, sceneRef.current, scenario, theme);
        requestRender();
      } else {
        cv.style.cursor = hit(m.x, m.y) ? 'grab' : 'default';
      }
    };
    const onUp = () => { dragRef.current = null; cv.style.cursor = 'default'; };

    const onTouchStart = (e) => {
      if (sceneRef.current.phase >= 0) return;
      const m = getMouse(e);
      dragRef.current = hit(m.x, m.y);
      if (dragRef.current) e.preventDefault();
    };
    const onTouchMove = (e) => {
      if (sceneRef.current.phase >= 0 || !dragRef.current) return;
      const m = getMouse(e);
      const nx = clampX(pxToX(m.x));
      if (dragRef.current === 'p1') sceneRef.current.x1 = nx;
      else sceneRef.current.x2 = nx;
      drawScene(cv, sceneRef.current, scenario, theme);
      requestRender();
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
  }, [scenario, theme]);

  /* ----- scenario lifecycle ----- */
  const startScenario = (sc) => {
    sceneRef.current.animFromX1 = sceneRef.current.x1;
    sceneRef.current.animFromX2 = sceneRef.current.x2;
    sceneRef.current.phase = 0;
    sceneRef.current.phaseStart = performance.now();
    setActiveTab('comp');
    setScenario(sc);
  };

  const reset = () => {
    sceneRef.current.x1 = DEFAULT_X.x1;
    sceneRef.current.x2 = DEFAULT_X.x2;
    sceneRef.current.phase = -1;
    sceneRef.current.regionAlpha = 0;
    sceneRef.current.arrowsAlpha = 0;
    sceneRef.current.dxRevealed = 1;
    sceneRef.current.dyRevealed = 1;
    sceneRef.current.secantAlpha = 1;
    sceneRef.current.banner = null;
    sceneRef.current.verdictGlow = false;
    sceneRef.current.activeSection = 'idle';
    setScenario(null);
    setActiveTab('comp');
  };

  /* ----- derived numerics for the panel ----- */
  const x1 = sceneRef.current.x1;
  const x2 = sceneRef.current.x2;
  const y1 = f(x1), y2 = f(x2);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const slope = Math.abs(dx) < 1e-9 ? NaN : dy / dx;
  const verdictKind = scenario || classifyBySlope(slope);
  const mActive = sceneRef.current.activeSection;

  const slopeColor = scenario
    ? 'var(--scMain)'
    : (isNaN(slope) ? '#94a3b8' : slope > 0.05 ? '#3b82f6' : slope < -0.05 ? '#1e3a8a' : '#94a3b8');

  /* ----- theme vars on the wrapper so descendants inherit ----- */
  const themeVars = {
    '--scMain': theme.main,
    '--scDeep': theme.deep,
    '--scSoft': theme.soft,
    '--scMid':  theme.mid,
    '--scTint': theme.tint,
  };

  /* ===== render ===== */
  return (
    <div ref={containerRef} style={{ ...themeVars, fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', color: '#0f172a', fontSize: 14, lineHeight: 1.5 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) 380px',
        gap: 18,
        alignItems: 'start',
      }}>

        {/* ============ LEFT: graph card ============ */}
        <div style={cardStyle}>
          <div style={cardHeadStyle}>
            <h2 style={cardHeadH2Style}>Local view &middot; f(x) = ⅓x³ − x</h2>
            <div style={cardHeadMetaStyle}>f&apos;(x) = x² − 1 &nbsp;&middot;&nbsp; max at x = −1 &nbsp;&middot;&nbsp; min at x = 1</div>
          </div>

          <div style={{ position: 'relative', background: '#fff' }}>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: 'auto' }} />
            <div style={{
              position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
              background: 'rgba(255,255,255,.96)', border: `1px solid ${theme.main}`,
              borderRadius: 20, padding: '7px 16px 7px 7px',
              fontSize: 12.5, color: theme.deep, fontWeight: 600,
              letterSpacing: '.2px', boxShadow: `0 4px 14px ${theme.tint}`,
              opacity: sceneRef.current.banner ? 1 : 0,
              pointerEvents: 'none', transition: 'opacity .25s ease, border-color .3s, color .3s, box-shadow .3s',
              display: 'flex', alignItems: 'center', gap: 10, maxWidth: '80%',
              whiteSpace: 'nowrap',
            }}>
              <span style={{
                background: theme.main, color: '#fff', borderRadius: 14,
                padding: '3px 10px', fontSize: 11, fontWeight: 700, letterSpacing: '.4px',
              }}>
                Step {sceneRef.current.banner?.num ?? ''}
              </span>
              <span>{sceneRef.current.banner?.text ?? ''}</span>
            </div>
            <div style={{
              position: 'absolute', left: 14, bottom: 10,
              fontSize: 11.5, color: '#475569',
              background: 'rgba(255,255,255,.85)', padding: '4px 8px',
              border: '1px solid #cbd5e1', borderRadius: 4,
            }}>
              Drag P<sub>1</sub> or P<sub>2</sub>, or pick a scenario to watch it unfold.
            </div>
          </div>

          {/* scenarios */}
          <div style={{
            padding: '12px 14px', borderTop: '1px solid #cbd5e1', background: '#eff6ff',
            display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center',
          }}>
            <ScenarioButton sc="asc"  label="Ascending"     glyph="↗" active={scenario === 'asc'}  onClick={() => startScenario('asc')}  />
            <ScenarioButton sc="desc" label="Descending"    glyph="↘" active={scenario === 'desc'} onClick={() => startScenario('desc')} />
            <ScenarioButton sc="max"  label="Local max"     glyph="⌒" active={scenario === 'max'}  onClick={() => startScenario('max')}  />
            <ScenarioButton sc="min"  label="Local min"     glyph="⌣" active={scenario === 'min'}  onClick={() => startScenario('min')}  />
            <ResetButton onClick={reset} />
          </div>

          {/* readouts */}
          <div style={{
            padding: '8px 14px', borderTop: '1px solid #cbd5e1', background: '#fff',
            display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 12, color: '#475569',
          }}>
            <div style={readoutGroupStyle}>
              <span>P<sub>1</sub> x =</span><b style={monoB}>{fmt(x1)}</b>
            </div>
            <div style={readoutGroupStyle}>
              <span>P<sub>2</sub> x =</span><b style={monoB}>{fmt(x2)}</b>
            </div>
            <div style={readoutGroupStyle}>
              <span>slope =</span><b style={{ ...monoB, color: slopeColor }}>{isNaN(slope) ? '—' : fmt(slope)}</b>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
              <span><span style={{ ...swatch, background: '#1e3a8a' }} />f(x)</span>
              <span><span style={{ ...swatch, background: theme.main }} />secant</span>
              <span><span style={{ ...swatch, background: '#94a3b8' }} />Δx, Δy</span>
            </div>
          </div>
        </div>

        {/* ============ RIGHT: info panel ============ */}
        <aside style={{ position: 'sticky', top: 18 }}>
          <div style={{ background: '#fff', border: '1px solid #cbd5e1', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #cbd5e1', background: '#eff6ff' }}>
              <PanelTab name="comp" active={activeTab === 'comp'} onClick={() => setActiveTab('comp')}>Computation</PanelTab>
              <PanelTab name="mean" active={activeTab === 'mean'} onClick={() => setActiveTab('mean')}>Meaning</PanelTab>
              <PanelTab name="theo" active={activeTab === 'theo'} onClick={() => setActiveTab('theo')}>Theory</PanelTab>
            </div>

            {/* COMPUTATION */}
            {activeTab === 'comp' && (
              <div style={panelBodyStyle}>
                <Section active={mActive === 'points'}>
                  <SectionH4>The two points</SectionH4>
                  <Row k={<>P<sub>1</sub></>} v={`(${fmt(x1)}, ${fmt(y1)})`} />
                  <Row k={<>P<sub>2</sub></>} v={`(${fmt(x2)}, ${fmt(y2)})`} />
                </Section>

                <Section active={mActive === 'deltas'}>
                  <SectionH4>Step 1 — Horizontal &amp; vertical change</SectionH4>
                  <Formula dim={sceneRef.current.dxRevealed < 0.05} label="change in x">
                    Δx = x<sub>2</sub> − x<sub>1</sub> = {fmt(x2)} − {fmtSigned(x1)} = <span style={resStyle}>{fmt(dx)}</span>
                  </Formula>
                  <Formula dim={sceneRef.current.dyRevealed < 0.05} label="change in y">
                    Δy = f(x<sub>2</sub>) − f(x<sub>1</sub>) = {fmt(y2)} − {fmtSigned(y1)} = <span style={resStyle}>{fmt(dy)}</span>
                  </Formula>
                </Section>

                <Section active={mActive === 'slope'}>
                  <SectionH4>Step 2 — Average rate of change</SectionH4>
                  <Formula dim={sceneRef.current.secantAlpha < 0.05} label="slope of secant">
                    <span style={{ fontSize: 13.5 }}>
                      m = Δy / Δx = {fmt(dy)} / {fmt(dx)} = <span style={resStyle}>{isNaN(slope) ? '—' : fmt(slope)}</span>
                    </span>
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
                    border: `1px solid ${theme.mid}`, background: theme.soft,
                    transition: 'all .3s ease',
                    boxShadow: sceneRef.current.verdictGlow ? `0 0 0 3px ${theme.tint}` : 'none',
                  }}>
                    <span style={{
                      display: 'inline-block', padding: '3px 9px', borderRadius: 11,
                      fontSize: 10.5, fontWeight: 700, letterSpacing: '.5px',
                      textTransform: 'uppercase', color: '#fff', background: theme.main,
                    }}>{exp.meaning[verdictKind].badge}</span>
                    <h3 style={{ margin: '8px 0 6px 0', fontSize: 14, color: theme.deep, fontWeight: 600 }}>
                      {exp.meaning[verdictKind].title}
                    </h3>
                    <p
                      style={{ margin: 0, fontSize: 12.5, color: '#475569', lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: exp.meaning[verdictKind].text }}
                    />
                  </div>

                  <div style={{
                    marginTop: 12, padding: '10px 12px', background: '#fff',
                    border: `1px solid ${theme.mid}`, borderRadius: 6,
                    fontSize: 12.5, color: '#475569', lineHeight: 1.6,
                  }}>
                    <span style={{
                      display: 'inline-block', padding: '1px 7px', borderRadius: 9,
                      fontSize: 10.5, fontWeight: 700, letterSpacing: '.3px',
                      color: '#fff', background: theme.main, marginRight: 5, verticalAlign: 1,
                    }} dangerouslySetInnerHTML={{ __html: exp.meaning[verdictKind].notePill }} />
                    <span dangerouslySetInnerHTML={{ __html: exp.meaning[verdictKind].note }} />
                  </div>
                </Section>
              </div>
            )}

            {/* THEORY */}
            {activeTab === 'theo' && (
              <div style={panelBodyStyle}>
                <TheoryBlock section={exp.theory.definition} />
                <TheoryBlock section={exp.theory.monotonicity} />
                <TheoryBlock section={exp.theory.fermat} />
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
 *  Animation advance (mutates sceneRef.current)
 * ========================================================================= */
function advanceAnimation(s, scenario, now, onComplete) {
  const stepsList = stepsFor(scenario);
  const step = stepsList[s.phase];
  if (!step) { s.phase = -1; s.banner = null; if (onComplete) onComplete(); return; }

  const tRaw = Math.min(1, (now - s.phaseStart) / step.dur);
  const t = ease(tRaw);

  // reset visibility flags each frame
  s.regionAlpha = 0; s.arrowsAlpha = 0;
  s.showP1 = false; s.showP2 = false;
  s.dxRevealed = 0; s.dyRevealed = 0; s.secantAlpha = 0;
  s.p1Pulse = 0; s.p2Pulse = 0;
  s.verdictGlow = false;

  const idx = stepsList.findIndex((x) => x.name === step.name);
  const past = (name) => {
    const i = stepsList.findIndex((x) => x.name === name);
    return i >= 0 && i < idx;
  };
  const isNow = (name) => step.name === name;

  if (past('region') || isNow('region')) s.regionAlpha = isNow('region') ? t : 1;

  if (isNow('p1')) {
    s.x1 = lerp(s.animFromX1, SCENARIOS[scenario].tx1, t);
    s.showP1 = true; s.p1Pulse = 1 - tRaw;
  } else if (past('p1')) {
    s.showP1 = true; s.x1 = SCENARIOS[scenario].tx1;
  }

  if (isNow('p2')) {
    s.x1 = SCENARIOS[scenario].tx1;
    s.x2 = lerp(s.animFromX2, SCENARIOS[scenario].tx2, t);
    s.showP1 = true; s.showP2 = true; s.p2Pulse = 1 - tRaw;
  } else if (past('p2')) {
    s.showP2 = true; s.x2 = SCENARIOS[scenario].tx2;
  }

  if (past('p2') || isNow('p2')) s.arrowsAlpha = isNow('p2') ? t : 1;

  if (isNow('dx')) s.dxRevealed = t;
  else if (past('dx')) s.dxRevealed = 1;

  if (isNow('dy')) s.dyRevealed = t;
  else if (past('dy')) s.dyRevealed = 1;

  if (isNow('secant')) s.secantAlpha = t;
  else if (past('secant')) s.secantAlpha = 1;

  if (isNow('verdict')) s.verdictGlow = true;
  else if (past('verdict')) s.verdictGlow = false;

  if (isNow('tighten1')) {
    const cfg = SCENARIOS[scenario];
    s.x1 = lerp(cfg.tx1, cfg.tighten[0][0], t);
    s.x2 = lerp(cfg.tx2, cfg.tighten[0][1], t);
    s.showP1 = true; s.showP2 = true; s.dxRevealed = 1; s.dyRevealed = 1; s.secantAlpha = 1;
  } else if (past('tighten1')) {
    const cfg = SCENARIOS[scenario];
    s.x1 = cfg.tighten[0][0]; s.x2 = cfg.tighten[0][1];
    s.showP1 = true; s.showP2 = true; s.dxRevealed = 1; s.dyRevealed = 1; s.secantAlpha = 1;
  }
  if (isNow('tighten2')) {
    const cfg = SCENARIOS[scenario];
    s.x1 = lerp(cfg.tighten[0][0], cfg.tighten[1][0], t);
    s.x2 = lerp(cfg.tighten[0][1], cfg.tighten[1][1], t);
    s.showP1 = true; s.showP2 = true; s.dxRevealed = 1; s.dyRevealed = 1; s.secantAlpha = 1;
  } else if (past('tighten2')) {
    const cfg = SCENARIOS[scenario];
    s.x1 = cfg.tighten[1][0]; s.x2 = cfg.tighten[1][1];
  }

  if (isNow('region') || isNow('p1') || isNow('p2')) s.activeSection = 'points';
  else if (isNow('dx') || isNow('dy')) s.activeSection = 'deltas';
  else if (isNow('secant') || isNow('tighten1') || isNow('tighten2')) s.activeSection = 'slope';
  else if (isNow('verdict')) s.activeSection = 'verdict';

  s.banner = { num: `${idx + 1} / ${stepsList.length}`, text: step.label };

  if (tRaw >= 1) {
    s.phase++;
    s.phaseStart = now;
    if (s.phase >= stepsList.length) {
      s.phase = -1; s.banner = null;
      if (onComplete) onComplete();
    }
  }
}

function classifyBySlope(slope) {
  if (isNaN(slope)) return 'asc';
  if (Math.abs(slope) < 0.05) return 'max';
  return slope > 0 ? 'asc' : 'desc';
}

/* =========================================================================
 *  Sub-components & shared inline styles
 * ========================================================================= */

const cardStyle = {
  background: '#fff', border: '1px solid #cbd5e1', borderRadius: 8, overflow: 'hidden',
};
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

function ScenarioButton({ sc, label, glyph, active, onClick }) {
  const [hover, hp] = useHover();
  const t = THEMES[sc];
  const bg = active ? t.main : (hover ? t.soft : '#fff');
  const color = active ? '#fff' : t.deep;
  return (
    <button
      type="button"
      onClick={onClick}
      {...hp}
      style={{
        appearance: 'none',
        background: bg,
        color,
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
      <span style={{ fontSize: 13, lineHeight: 1 }}>{glyph}</span>
      {label}
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
        borderBottom: `2px solid ${active ? 'var(--scMain)' : 'transparent'}`,
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
      borderLeft: `3px solid ${active ? 'var(--scMain)' : 'transparent'}`,
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

function Row({ k, v }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '5px 0', borderBottom: '1px dashed #cbd5e1',
    }}>
      <span style={{ fontSize: 12, color: '#475569' }}>{k}</span>
      <span style={{
        fontFamily: '"SF Mono",ui-monospace,Menlo,Monaco,Consolas,monospace',
        fontSize: 13, color: '#1e3a8a', fontWeight: 600,
      }}>{v}</span>
    </div>
  );
}

function Formula({ label, dim, children }) {
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
      opacity: dim ? 0.45 : 1,
      transition: 'background .3s, border-color .3s, opacity .25s',
    }}>
      <span style={{
        fontFamily: 'inherit', color: '#475569', fontSize: 10.5,
        textTransform: 'uppercase', letterSpacing: '.4px',
        display: 'block', marginBottom: 3, fontWeight: 600,
      }}>{label}</span>
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