/**
 * FunctionSequence — v1
 *
 * Sequence convergence visualizer. Stem plot of $a_n$ for $n = 1..N$
 * against a horizontal limit line $L$ with an &epsilon;-band shaded
 * around it. The smallest $N_0$ such that all later terms stay in the
 * band is computed and rendered as a vertical threshold; stems before
 * $N_0$ are drawn in light blue, from $N_0$ on in main blue.
 *
 * Pedagogical axis: the &epsilon;&ndash;N definition of a limit. For
 * every &epsilon; &gt; 0, there exists some finite $N_0$ such that all
 * later terms fall inside $L \pm \varepsilon$. The tool finds the
 * smallest $N_0$ for any &epsilon; the student picks.
 *
 * NOTE: FunctionVisualizerCorePro doesn&apos;t (yet) have a stem-plot
 * primitive. This component draws its own canvas directly, mirroring
 * the established visual language (axes, grid, padding, color palette,
 * legend placement). When the core gains a `stemPlot` primitive, the
 * draw logic here can be swapped for a thin VisualizerWithControls
 * wrapper without changing this file&apos;s public API.
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'invn'
 *   initialN              : number        — default 50
 *   initialEps            : number        — default 0.1
 *   families              : object        — override FAMILIES
 *   infoPanelProps        : object        — forwarded to InfoPanel
 *   darkMode              : boolean
 *   showPicker            : boolean
 *   showInfoPanel         : boolean
 *   showColorPicker       : boolean       — default true
 *   defaultHighlightColor : string        — default '#3b82f6'
 *   maxWidth              : string|number — default '80vw'
 *
 * RULES OBSERVED:
 *   - Never put $...$ inside **...**.
 *   - Escape &apos; and &quot; with HTML entities in JSX text.
 *   - Modest canvas height; chip strips stay above the fold.
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS  (all blue variants)
   ================================================================ */

const COL = {
  f:      '#3b82f6',   // main blue — stems from N0 on
  fp:     '#1e3a8a',   // deep blue — limit line
  fpp:    '#60a5fa',   // light blue — stems before N0
  link:   '#94a3b8',   // gray — N0 threshold line
  band:   'rgba(59, 130, 246, 0.08)',
  bandEdge: 'rgba(59, 130, 246, 0.45)',
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v, d = 3) {
  if (v === Infinity) return '+\u221e';
  if (v === -Infinity) return '\u2212\u221e';
  if (v === null) return 'DNE';
  if (!Number.isFinite(v)) return '\u2014';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  N:   { label: 'terms shown N', min: 10, max: 200, step: 1 },
  // ε on log scale: slider exponent, ε = 10^slider
  eps: { label: 'tolerance \u03b5', min: -3, max: 0.5, step: 0.05 },
};


/* ================================================================
   FAMILIES
   ----------------------------------------------------------------
   Each family:
     - name, group, glyph, eq, intro
     - fn:    n => a_n
     - L:     known limit value, Infinity, -Infinity, or null
     - conv:  true if convergent to a finite L
     - kind:  'oscillates' | 'diverges' (only when not convergent)
   ================================================================ */

export const FAMILIES = {
  invn: {
    name: '1/n',
    group: 'Converges to 0',
    glyph: 'M2,4 Q8,22 24,24',
    fn: n => 1 / n,
    L: 0, conv: true,
    eq: 'a\u2099 = 1/n',
    intro: 'A textbook converging sequence. The tail squeezes into any band around 0 you ask for.',
  },
  altinvn: {
    name: '(-1)\u207F/n',
    group: 'Converges to 0',
    glyph: 'M2,4 L6,22 L10,8 L14,20 L18,12 L22,18 L24,14',
    fn: n => (n % 2 === 0 ? 1 : -1) / n,
    L: 0, conv: true,
    eq: 'a\u2099 = (-1)\u207F / n',
    intro: 'Alternating signs, but amplitudes shrink. Still converges to 0.',
  },
  sinnoverN: {
    name: 'sin(n)/n',
    group: 'Converges to 0',
    glyph: 'M2,12 L5,8 L8,18 L11,10 L14,15 L17,12 L20,14 L24,13',
    fn: n => Math.sin(n) / n,
    L: 0, conv: true,
    eq: 'a\u2099 = sin(n) / n',
    intro: 'The numerator bounces in [-1, 1] forever. The denominator grows, so the ratio is squeezed to 0.',
  },
  nover: {
    name: 'n/(n+1)',
    group: 'Converges to nonzero',
    glyph: 'M2,22 Q12,4 24,4',
    fn: n => n / (n + 1),
    L: 1, conv: true,
    eq: 'a\u2099 = n / (n + 1)',
    intro: 'Monotone increasing, bounded above by 1, approaches 1 from below.',
  },
  onepowern: {
    name: '(1+1/n)\u207F',
    group: 'Converges to nonzero',
    glyph: 'M2,20 Q12,10 24,6',
    fn: n => Math.pow(1 + 1 / n, n),
    L: Math.E, conv: true,
    eq: 'a\u2099 = (1 + 1/n)\u207F',
    intro: 'The classical compound-interest limit. Slow climb to e \u2248 2.718.',
  },
  ntothe1n: {
    name: 'n^(1/n)',
    group: 'Converges to nonzero',
    glyph: 'M2,2 Q12,10 24,12',
    fn: n => Math.pow(n, 1 / n),
    L: 1, conv: true,
    eq: 'a\u2099 = n^(1/n)',
    intro: 'Starts above 1 (small n raised to a power near 1), drifts down to 1 as n grows. Slow convergence.',
  },
  altone: {
    name: '(-1)\u207F',
    group: 'Doesn\u2019t converge',
    glyph: 'M2,6 L6,22 L10,6 L14,22 L18,6 L22,22',
    fn: n => (n % 2 === 0 ? 1 : -1),
    L: null, conv: false, kind: 'oscillates',
    eq: 'a\u2099 = (-1)\u207F',
    intro: 'Oscillates between -1 and 1 forever. No single limit.',
  },
  diverge: {
    name: 'n/2',
    group: 'Doesn\u2019t converge',
    glyph: 'M2,24 L24,2',
    fn: n => n / 2,
    L: Infinity, conv: false, kind: 'diverges',
    eq: 'a\u2099 = n/2',
    intro: 'Grows without bound. Diverges to +\u221e.',
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   SAMPLING + N0 SEARCH
   ================================================================ */

function sampleSeq(fam, N) {
  const arr = new Float64Array(N);
  for (let n = 1; n <= N; n++) {
    try { arr[n - 1] = fam.fn(n); } catch { arr[n - 1] = NaN; }
  }
  return arr;
}

function findN0(fam, eps, maxN) {
  if (!fam.conv || fam.L === null || !Number.isFinite(fam.L)) return null;
  let lastFail = 0;
  for (let n = 1; n <= maxN; n++) {
    const a = fam.fn(n);
    if (!Number.isFinite(a)) continue;
    if (Math.abs(a - fam.L) >= eps) lastFail = n;
  }
  if (lastFail === 0) return 1;
  if (lastFail >= maxN) return null; // not yet in band by maxN
  return lastFail + 1;
}


/* ================================================================
   PICKER GROUPING
   ================================================================ */

function buildPickerEntries(families) {
  const out = [];
  let lastGroup;
  Object.entries(families).forEach(([key, f]) => {
    if (f.group && f.group !== lastGroup) {
      out.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
      lastGroup = f.group;
    } else if (!f.group) {
      lastGroup = undefined;
    }
    out.push({ type: 'item', key, fam: f });
  });
  return out;
}


/* ================================================================
   GLYPH
   ================================================================ */

function FamilyGlyph({ d, active, darkMode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none"
            stroke={active ? COL.f : (darkMode ? '#64748b' : '#94a3b8')}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


/* ================================================================
   STEM PLOT CANVAS (self-contained until the core gains a stemPlot)
   ================================================================ */

function StemPlotCanvas({
  fam, N, eps, samples, N0,
  showStems, showLimit, showBand, showN0,
  width, height, darkMode,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cssW = width, cssH = height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const PAD = 44;
    const gx = PAD, gy = PAD, gw = cssW - PAD * 2, gh = cssH - PAD * 2;

    // y bounds
    let ymin = Infinity, ymax = -Infinity;
    for (let i = 0; i < samples.length; i++) {
      const y = samples[i];
      if (Number.isFinite(y)) {
        if (y < ymin) ymin = y;
        if (y > ymax) ymax = y;
      }
    }
    if (!Number.isFinite(ymin) || !Number.isFinite(ymax)) { ymin = -1; ymax = 1; }
    if (Number.isFinite(fam.L)) {
      if (fam.L < ymin) ymin = fam.L;
      if (fam.L > ymax) ymax = fam.L;
    }
    ymin = Math.min(ymin, 0);
    ymax = Math.max(ymax, 0);
    if (fam.kind === 'diverges') ymax = Math.min(ymax, 30);
    const yrange = ymax - ymin;
    const ypad = yrange * 0.12 + 0.3;
    ymin -= ypad; ymax += ypad;

    const xmin = 0, xmax = N + 1;
    const sx = x => gx + ((x - xmin) / (xmax - xmin)) * gw;
    const sy = y => gy + ((ymax - y) / (ymax - ymin)) * gh;

    // background
    ctx.fillStyle = darkMode ? '#020617' : '#f6f7f9';
    ctx.fillRect(0, 0, cssW, cssH);
    ctx.fillStyle = darkMode ? '#0f172a' : '#fcfcfd';
    ctx.fillRect(gx, gy, gw, gh);

    // grid
    const xstep = N <= 30 ? 5 : N <= 100 ? 10 : 25;
    ctx.strokeStyle = darkMode ? '#1e293b' : '#f1f5f9';
    ctx.lineWidth = 1;
    for (let x = 0; x <= N + 1; x += xstep) {
      ctx.beginPath(); ctx.moveTo(sx(x), gy); ctx.lineTo(sx(x), gy + gh); ctx.stroke();
    }
    const yraw = yrange / 10;
    const ymag = Math.pow(10, Math.floor(Math.log10(yraw)));
    const ynorm = yraw / ymag;
    const ystep = ynorm <= 1.5 ? ymag : ynorm <= 3.5 ? 2 * ymag : ynorm <= 7.5 ? 5 * ymag : 10 * ymag;
    for (let y = Math.ceil(ymin / ystep) * ystep; y <= ymax; y += ystep) {
      ctx.beginPath(); ctx.moveTo(gx, sy(y)); ctx.lineTo(gx + gw, sy(y)); ctx.stroke();
    }
    ctx.strokeStyle = darkMode ? '#334155' : '#e5e7eb';
    for (let x = xstep; x <= N + 1; x += xstep) {
      ctx.beginPath(); ctx.moveTo(sx(x), gy); ctx.lineTo(sx(x), gy + gh); ctx.stroke();
    }

    // axes
    ctx.strokeStyle = darkMode ? '#94a3b8' : '#475569';
    ctx.lineWidth = 1.5;
    if (ymin <= 0 && ymax >= 0) {
      ctx.beginPath(); ctx.moveTo(gx, sy(0)); ctx.lineTo(gx + gw, sy(0)); ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(sx(0), gy); ctx.lineTo(sx(0), gy + gh); ctx.stroke();

    // axis labels
    ctx.fillStyle = darkMode ? '#94a3b8' : '#64748b';
    ctx.font = '10.5px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    const xLabelY = (ymin <= 0 && ymax >= 0) ? Math.min(sy(0) + 6, gy + gh + 6) : gy + gh + 6;
    for (let x = xstep; x <= N + 1; x += xstep) {
      ctx.fillText(String(x), sx(x), xLabelY);
    }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let y = Math.ceil(ymin / ystep) * ystep; y <= ymax; y += ystep) {
      if (Math.abs(y) < ystep / 1000) continue;
      ctx.fillText((+y.toFixed(2)).toString(), gx - 6, sy(y));
    }
    // 'n' axis name
    ctx.fillStyle = darkMode ? '#64748b' : '#94a3b8';
    ctx.font = 'italic 11px ui-monospace, "SF Mono", Menlo, monospace';
    ctx.textAlign = 'right'; ctx.textBaseline = 'top';
    ctx.fillText('n', gx + gw - 2, xLabelY + 14);

    // ε-band
    if (showBand && Number.isFinite(fam.L)) {
      ctx.save();
      ctx.beginPath(); ctx.rect(gx, gy, gw, gh); ctx.clip();
      ctx.fillStyle = COL.band;
      const yLo = Math.max(ymin, fam.L - eps);
      const yHi = Math.min(ymax, fam.L + eps);
      ctx.fillRect(gx, sy(yHi), gw, sy(yLo) - sy(yHi));
      ctx.strokeStyle = COL.bandEdge;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(gx, sy(fam.L + eps)); ctx.lineTo(gx + gw, sy(fam.L + eps)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(gx, sy(fam.L - eps)); ctx.lineTo(gx + gw, sy(fam.L - eps)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    // limit line
    if (showLimit && Number.isFinite(fam.L)) {
      ctx.save();
      ctx.beginPath(); ctx.rect(gx, gy, gw, gh); ctx.clip();
      ctx.strokeStyle = COL.fp; ctx.lineWidth = 1.75;
      ctx.setLineDash([8, 5]);
      ctx.beginPath();
      ctx.moveTo(gx, sy(fam.L)); ctx.lineTo(gx + gw, sy(fam.L));
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      ctx.fillStyle = darkMode ? '#dbeafe' : '#1e40af';
      ctx.font = '11px ui-monospace, "SF Mono", Menlo, monospace';
      ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
      ctx.fillText('L = ' + fmt(fam.L, 4), gx + gw - 4, sy(fam.L) - 2);
    }

    // N0 threshold
    if (showN0 && N0 !== null && Number.isFinite(fam.L)) {
      ctx.save();
      ctx.beginPath(); ctx.rect(gx, gy, gw, gh); ctx.clip();
      ctx.strokeStyle = COL.link; ctx.lineWidth = 1.25;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(sx(N0), gy); ctx.lineTo(sx(N0), gy + gh);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
      ctx.fillStyle = darkMode ? '#cbd5e1' : '#475569';
      ctx.font = '11px ui-monospace, "SF Mono", Menlo, monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
      ctx.fillText('N\u2080 = ' + N0, sx(N0), gy - 2);
    }

    // stems
    if (showStems) {
      for (let n = 1; n <= N; n++) {
        const a = samples[n - 1];
        if (!Number.isFinite(a)) continue;
        const beforeN0 = (N0 !== null && n < N0);
        const col = beforeN0 ? COL.fpp : COL.f;
        ctx.save();
        ctx.beginPath(); ctx.rect(gx, gy, gw, gh); ctx.clip();
        ctx.strokeStyle = col; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(sx(n), sy(0));
        const yClamped = Math.max(ymin, Math.min(ymax, a));
        ctx.lineTo(sx(n), sy(yClamped));
        ctx.stroke();
        if (yClamped === a) {
          ctx.beginPath();
          ctx.arc(sx(n), sy(a), 3.5, 0, Math.PI * 2);
          ctx.fillStyle = col;
          ctx.fill();
        } else {
          // off-screen indicator
          ctx.fillStyle = col;
          ctx.beginPath();
          if (a > ymax) {
            ctx.moveTo(sx(n), gy + 2);
            ctx.lineTo(sx(n) - 4, gy + 8);
            ctx.lineTo(sx(n) + 4, gy + 8);
          } else {
            ctx.moveTo(sx(n), gy + gh - 2);
            ctx.lineTo(sx(n) - 4, gy + gh - 8);
            ctx.lineTo(sx(n) + 4, gy + gh - 8);
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    }
  }, [fam, N, eps, samples, N0, showStems, showLimit, showBand, showN0, width, height, darkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        background: darkMode ? '#020617' : '#fcfcfd',
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionSequence({
  initialFamily = 'invn',
  initialN = 50,
  initialEps = 0.1,
  families = DEFAULT_FAMILIES,
  infoPanelProps = {},
  darkMode = false,
  showPicker = true,
  showInfoPanel = true,
  showColorPicker = true,
  defaultHighlightColor = '#3b82f6',
  maxWidth = '80vw',
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

  const [current, setCurrent] = useState(startKey);
  const [N, setN] = useState(initialN);
  const [eps, setEps] = useState(initialEps);
  const [showStems, setShowStems] = useState(true);
  const [showLimit, setShowLimit] = useState(true);
  const [showBand,  setShowBand]  = useState(true);
  const [showN0,    setShowN0]    = useState(true);
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

  // Canvas size — S/M/L/XL like the other tools
  const SIZES = { S: [600, 360], M: [760, 460], L: [920, 540], XL: [1100, 620] };
  const [sizeKey, setSizeKey] = useState('M');
  const [cw, ch] = SIZES[sizeKey];

  const panelTones = useMemo(() => {
    const hex = (highlightColor || '#3b82f6').replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16) || 0;
    const g = parseInt(hex.slice(2, 4), 16) || 0;
    const b = parseInt(hex.slice(4, 6), 16) || 0;
    const rgba = (al) => `rgba(${r}, ${g}, ${b}, ${al})`;
    const hx = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
    const darken = (f) => `#${hx(r * f)}${hx(g * f)}${hx(b * f)}`;
    return {
      soft:   darkMode ? rgba(0.22) : rgba(0.14),
      border: darkMode ? rgba(0.55) : rgba(0.45),
      text:   darkMode ? rgba(0.95) : darken(0.4),
      main:   highlightColor,
    };
  }, [highlightColor, darkMode]);

  const fam = families[current] || families[familyKeys[0]];

  const samples = useMemo(() => sampleSeq(fam, N), [fam, N]);
  const N0 = useMemo(() => findN0(fam, eps, N), [fam, eps, N]);
  const aN = useMemo(() => fam.fn(N), [fam, N]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    const verdict = fam.conv
      ? `converges to ${fmt(fam.L, 4)}`
      : (fam.kind === 'oscillates' ? 'oscillates' : 'diverges');
    const errLine = Number.isFinite(fam.L)
      ? `|a${N} \u2212 L| = ${fmt(Math.abs(aN - fam.L))}. `
      : '';
    const n0Line = N0 !== null
      ? `At $\\varepsilon = ${fmt(eps)}$, $N_0 = ${N0}$.`
      : (fam.conv ? 'No $N_0$ found within shown range — try smaller $\\varepsilon$ or larger N.' : '');
    return (
      `## ${fam.name} — ${verdict}\n\n` +
      `${fam.intro}\n\n` +
      `**Definition** · $${fam.eq}$\n\n` +
      `### Right now\n\n` +
      `$a_{${N}} = ${fmt(aN, 5)}$. ${errLine}${n0Line}\n\n` +
      `### What \u03b5 controls\n\n` +
      `The shaded band is $[L - \\varepsilon, L + \\varepsilon]$. Shrink \u03b5 and the band tightens; the threshold $N_0$ grows. Converges means: for every \u03b5 &gt; 0, some finite $N_0$ works.`
    );
  }, [fam, N, eps, aN, N0]);

  const conceptsContent =
    '## What it means for a sequence to converge\n\n' +
    'A sequence is a list of numbers $a_1, a_2, a_3, \\dots$ indexed by positive integers. It **converges to L** if, no matter how tight a band you put around $L$, eventually every term falls inside.\n\n' +
    '### The &epsilon;&ndash;N definition\n\n' +
    '$\\lim_{n \\to \\infty} a_n = L$ means: for every $\\varepsilon &gt; 0$, there exists an $N_0$ such that for all $n \\ge N_0$,\n\n' +
    '$$|a_n - L| &lt; \\varepsilon.$$\n\n' +
    'Pick any \u03b5. The tool finds the smallest $N_0$ that works.\n\n' +
    '### What can go wrong\n\n' +
    '- **Diverges to $\\infty$** — terms grow without bound; no $L$.\n' +
    '- **Oscillates** — terms bounce between two or more values forever (like $(-1)^n$).\n' +
    '- **Wanders** — bounded but no settling (some chaotic sequences).\n\n' +
    '### Famous limits to know\n\n' +
    '- $1/n \\to 0$, $1/n^p \\to 0$ for any $p &gt; 0$.\n' +
    '- $r^n \\to 0$ if $|r| &lt; 1$; diverges if $|r| &gt; 1$.\n' +
    '- $(1 + 1/n)^n \\to e \\approx 2.718$.\n' +
    '- $n^{1/n} \\to 1$ (slowly).\n' +
    '- $(\\sin n)/n \\to 0$ — numerator bounded, denominator grows.\n\n' +
    '### Why this matters\n\n' +
    'Sequences are the building block of series, limits of functions, integrals as Riemann sums, and the construction of the real numbers themselves. The &epsilon;&ndash;N idea is the model for every other limit definition in analysis.';

  const infoTabs = useMemo(() => ([
    { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
    { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
  ]), [explanationContent]);

  /* ---- Styling tokens ---- */
  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12,
    boxShadow: panelShadow,
  };
  const ctok = {
    ink: darkMode ? '#e2e8f0' : '#0f172a',
    inkSoft: darkMode ? '#cbd5e1' : '#334155',
    muted: darkMode ? '#64748b' : '#94a3b8',
    soft: darkMode ? '#1e293b' : '#f8fafc',
    softer: darkMode ? '#0f172a' : '#f1f5f9',
    border: darkMode ? '#334155' : '#e2e8f0',
    borderSoft: darkMode ? '#1e293b' : '#f1f5f9',
    accentSoft: darkMode ? '#1e293b' : '#eff6ff',
    accentBorder: darkMode ? '#334155' : '#dbeafe',
    accentText: darkMode ? '#dbeafe' : '#1e3a8a',
    okSoft: darkMode ? '#1e3a8a' : '#dfebfe',
    okText: darkMode ? '#dbeafe' : '#1e3a8a',
    badSoft: darkMode ? '#7f1d1d' : '#fee2e2',
    badText: darkMode ? '#fca5a5' : '#991b1b',
    badBorder: darkMode ? '#7f1d1d' : '#fecaca',
  };

  const famBtn = active => ({
    display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
    border: '1px solid transparent',
    background: active ? ctok.accentSoft : 'none',
    borderColor: active ? ctok.accentBorder : 'transparent',
    borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
    fontSize: 13, fontWeight: active ? 600 : 400,
    color: active ? ctok.accentText : ctok.inkSoft,
    transition: 'background 0.12s, border-color 0.12s',
  });

  const sectionTitle = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: ctok.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  const pickerEntries = buildPickerEntries(families);

  const selectFamily = (key) => {
    setCurrent(key);
    setN(initialN);
    setEps(initialEps);
  };

  const resetParams = () => {
    setN(initialN);
    setEps(initialEps);
  };

  /* ---- Toggle helper ---- */
  const Toggle = ({ checked, onChange, swatchColor, swatchStyle, label }) => (
    <label style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '6px 4px', cursor: 'pointer',
      fontSize: 12.5, color: ctok.inkSoft,
    }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        style={{ accentColor: swatchColor }}
      />
      <span style={{
        display: 'inline-block', width: 28, height: 0, flexShrink: 0,
        borderTop: swatchStyle === 'fill'
          ? `8px solid ${swatchColor}`
          : `2.5px ${swatchStyle} ${swatchColor}`,
      }} />
      <span style={{ fontFamily: monoStack, fontSize: 12 }}>{label}</span>
    </label>
  );

  /* ---- N slider (linear) ---- */
  const renderNSlider = () => {
    const def = PARAM_DEFS.N;
    return (
      <div>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: ctok.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span>{def.label}</span>
          <span style={{ fontFamily: monoStack, color: highlightColor, fontWeight: 600 }}>{N}</span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={N}
          onChange={e => setN(parseInt(e.target.value, 10))}
          style={{ width: '100%', accentColor: highlightColor, cursor: 'pointer' }}
        />
      </div>
    );
  };

  /* ---- ε slider (log) ---- */
  const renderEpsSlider = () => {
    const def = PARAM_DEFS.eps;
    const sliderVal = Math.log10(eps);
    return (
      <div>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: ctok.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            {def.label}
            <span style={{
              fontSize: 9, fontWeight: 700,
              color: panelTones.text, background: panelTones.soft,
              padding: '1px 5px', borderRadius: 3,
              textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>&epsilon;&ndash;N test</span>
          </span>
          <span style={{ fontFamily: monoStack, color: highlightColor, fontWeight: 600 }}>
            {fmt(eps)}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={sliderVal}
          onChange={e => setEps(Math.pow(10, parseFloat(e.target.value)))}
          style={{ width: '100%', accentColor: highlightColor, cursor: 'pointer' }}
        />
      </div>
    );
  };

  /* ---- Legend ---- */
  const renderLegend = () => {
    const items = [];
    if (showStems) {
      items.push({ c: COL.fpp, style: 'solid', text: 'a\u2099 before N\u2080' });
      items.push({ c: COL.f,   style: 'solid', text: 'a\u2099 from N\u2080 on (in band)' });
    }
    if (showLimit) items.push({ c: COL.fp,        style: 'dashed', text: 'limit L' });
    if (showBand)  items.push({ c: COL.bandEdge,  style: 'solid',  text: 'L \u00b1 \u03b5 band' });
    if (showN0)    items.push({ c: COL.link,      style: 'dashed', text: 'N\u2080 threshold' });
    if (!items.length) return null;
    return (
      <div style={{
        display: 'flex', gap: 14, flexWrap: 'wrap',
        marginTop: 10, paddingTop: 10,
        borderTop: `1px solid ${ctok.borderSoft}`,
        width: '100%', justifyContent: 'center',
      }}>
        {items.map((it, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: monoStack, fontSize: 12, color: ctok.inkSoft,
          }}>
            <span style={{
              display: 'inline-block', width: 22, height: 0, flexShrink: 0,
              borderTop: `2.5px ${it.style} ${it.c}`,
            }} />
            {it.text}
          </span>
        ))}
      </div>
    );
  };

  /* ---- Verdict computation ---- */
  const verdict = useMemo(() => {
    if (fam.conv) {
      return {
        ok: true,
        title: `Converges to ${fmt(fam.L, 4)}.`,
        detail: N0 !== null
          ? ` Smallest N\u2080 such that all later terms stay in [L \u2212 \u03b5, L + \u03b5] is ${N0}.`
          : ' Need more terms to find N\u2080 at this \u03b5 (try smaller \u03b5 or larger N).',
        tag: 'converges',
        icon: '\u2713',
      };
    }
    if (fam.kind === 'oscillates') {
      return {
        ok: false,
        title: 'Limit does not exist.',
        detail: ' Terms oscillate; they don\u2019t settle to a single value.',
        tag: 'DNE (oscillates)',
        icon: '\u2715',
      };
    }
    return {
      ok: false,
      title: 'Diverges to +\u221e.',
      detail: ' Terms grow without bound; no finite limit.',
      tag: 'diverges',
      icon: '\u2715',
    };
  }, [fam, N0]);

  return (
    <div style={{
      width: '100%',
      background: darkMode ? '#020617' : '#f6f7f9',
      minHeight: '100vh',
      fontFamily: fontStack,
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%', maxWidth,
        display: 'flex', gap: 16, padding: '0 16px',
        alignItems: 'flex-start', boxSizing: 'border-box',
      }}>

        {showPicker && (
          <nav style={{ ...card, width: 240, padding: 10, flexShrink: 0 }}>
            <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Sequence</div>
            {pickerEntries.map(e =>
              e.type === 'header'
                ? <div key={e.key} style={sectionTitle}>{e.label}</div>
                : (
                  <button
                    key={e.key}
                    style={famBtn(e.key === current)}
                    onClick={() => selectFamily(e.key)}
                  >
                    <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
                    <span style={{ flex: 1 }}>{e.fam.name}</span>
                    <span style={{
                      fontSize: 10, color: ctok.muted, fontFamily: monoStack,
                    }}>
                      {e.fam.conv
                        ? `\u2192 ${fmt(e.fam.L, 2)}`
                        : (e.fam.kind === 'oscillates' ? 'osc' : '\u2192 \u221e')}
                    </span>
                  </button>
                )
            )}

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
              <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Display</div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                <Toggle checked={showStems} onChange={setShowStems} swatchColor={COL.f}    swatchStyle="solid"  label="stems a\u2099" />
                <Toggle checked={showLimit} onChange={setShowLimit} swatchColor={COL.fp}   swatchStyle="dashed" label="limit L" />
                <Toggle checked={showBand}  onChange={setShowBand}  swatchColor={ctok.accentBorder} swatchStyle="fill" label="\u03b5-band" />
                <Toggle checked={showN0}    onChange={setShowN0}    swatchColor={COL.link} swatchStyle="dashed" label="N\u2080 threshold" />
              </div>
            </div>

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                margin: '0 4px 8px',
              }}>
                <div style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: ctok.muted, fontWeight: 600,
                }}>Parameters</div>
                <button onClick={resetParams} style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${ctok.border}`, color: ctok.inkSoft,
                  padding: '3px 8px', borderRadius: 5,
                  fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                }}>Reset</button>
              </div>
              <div style={{ padding: '0 4px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {renderNSlider()}
                {renderEpsSlider()}
              </div>
            </div>

            {showColorPicker && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  margin: '0 4px 8px',
                }}>
                  <div style={{
                    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: ctok.muted, fontWeight: 600,
                  }}>Appearance</div>
                  <button onClick={() => setHighlightColor(defaultHighlightColor)} style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${ctok.border}`, color: ctok.inkSoft,
                    padding: '3px 8px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}>Reset</button>
                </div>
                <label style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 10, padding: '0 4px',
                  fontSize: 12, color: ctok.inkSoft,
                }}>
                  <span>Accent color</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{
                      fontFamily: monoStack, fontSize: 11,
                      color: ctok.inkSoft,
                      fontVariantNumeric: 'tabular-nums',
                    }}>{highlightColor}</span>
                    <input
                      type="color"
                      value={highlightColor}
                      onChange={e => setHighlightColor(e.target.value)}
                      style={{
                        width: 28, height: 24,
                        border: `1px solid ${ctok.border}`,
                        borderRadius: 4, background: 'none',
                        cursor: 'pointer', padding: 0,
                      }}
                    />
                  </span>
                </label>
              </div>
            )}
          </nav>
        )}

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: ctok.ink }}>
                {fam.name}
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 8px', borderRadius: 5,
                color: COL.f, background: ctok.softer,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                {fam.eq}
              </span>
            </div>

            {/* Canvas card */}
            <div style={{
              background: darkMode ? '#0f172a' : '#fff',
              borderRadius: 10,
              border: `1px solid ${ctok.borderSoft}`,
              padding: 16,
              boxShadow: '0 1px 3px rgba(15,23,42,0.06), 0 8px 24px rgba(15,23,42,0.06)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              {/* Size controls */}
              <div style={{
                display: 'flex', gap: 8, marginBottom: 12,
                alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center',
              }}>
                {Object.keys(SIZES).map(k => (
                  <button key={k}
                    onClick={() => setSizeKey(k)}
                    style={{
                      padding: '6px 10px',
                      border: `1px solid ${ctok.border}`,
                      background: sizeKey === k ? COL.f : (darkMode ? '#0f172a' : '#fff'),
                      color: sizeKey === k ? '#fff' : ctok.inkSoft,
                      borderColor: sizeKey === k ? COL.f : ctok.border,
                      borderRadius: 6, cursor: 'pointer',
                      fontSize: 12, fontWeight: 500, fontFamily: 'inherit',
                    }}
                  >{k}</button>
                ))}
              </div>

              <StemPlotCanvas
                fam={fam}
                N={N}
                eps={eps}
                samples={samples}
                N0={N0}
                showStems={showStems}
                showLimit={showLimit}
                showBand={showBand}
                showN0={showN0}
                width={cw}
                height={ch}
                darkMode={darkMode}
              />

              <div style={{
                marginTop: 8, fontSize: 11,
                color: ctok.muted, fontVariantNumeric: 'tabular-nums',
              }}>{cw} &times; {ch}</div>

              {renderLegend()}
            </div>

            {/* ---- CENTERPIECE ---- */}
            <div style={{
              marginTop: 12,
              background: panelTones.soft,
              border: `1px solid ${panelTones.border}`,
              borderLeft: `4px solid ${highlightColor}`,
              borderRadius: 8,
              padding: '14px 16px',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                gap: 12, marginBottom: 10, flexWrap: 'wrap',
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: panelTones.text, fontWeight: 700,
                }}>
                  Convergence at &epsilon; = {fmt(eps)}
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 13, color: ctok.inkSoft,
                }}>
                  N = {N} terms shown
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: ctok.muted, fontWeight: 600, marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.fp }} />
                    Limit L
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(fam.L, 4)}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>{fam.conv ? 'lim a\u2099' : (fam.kind === 'oscillates' ? 'limit DNE' : 'diverges')}</div>
                </div>

                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: ctok.muted, fontWeight: 600, marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.link }} />
                    Threshold N&#8320;
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{N0 !== null ? N0 : '\u2014'}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>{N0 !== null ? 'all n \u2265 N\u2080 in band' : (fam.conv ? 'increase N to find' : 'no limit')}</div>
                </div>

                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: ctok.muted, fontWeight: 600, marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                    Error |a&#8345; &minus; L|
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{Number.isFinite(fam.L) ? fmt(Math.abs(aN - fam.L)) : '\u2014'}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>at n = N</div>
                </div>
              </div>

              {/* Verdict row */}
              <div style={{
                marginTop: 10, padding: '10px 12px',
                background: verdict.ok ? ctok.okSoft : ctok.badSoft,
                border: `1px solid ${verdict.ok ? panelTones.border : ctok.badBorder}`,
                color: verdict.ok ? ctok.okText : ctok.badText,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 12.5,
              }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>{verdict.icon}</span>
                <span>
                  <strong style={{ color: verdict.ok ? ctok.okText : ctok.badText }}>
                    {verdict.title}
                  </strong>
                  {verdict.detail}
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: 10, fontWeight: 700,
                  padding: '3px 8px', borderRadius: 4,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  background: '#fff',
                  color: verdict.ok ? ctok.okText : ctok.badText,
                }}>{verdict.tag}</span>
              </div>
            </div>

            {/* ---- APPLIED CHIPS ---- */}
            <div style={{
              display: 'flex', gap: 6, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: ctok.soft, border: `1px solid ${ctok.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: ctok.muted, fontWeight: 600, marginRight: 4,
              }}>Applied</span>
              <span style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 9px', borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: ctok.accentText, background: ctok.accentSoft,
                border: `1px solid ${ctok.accentBorder}`, fontWeight: 600,
              }}>
                <span style={{ fontWeight: 600, color: highlightColor }}>N</span>
                <span>=</span>
                <span>{N}</span>
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 9px', borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: ctok.accentText, background: ctok.accentSoft,
                border: `1px solid ${ctok.accentBorder}`, fontWeight: 600,
              }}>
                <span style={{ fontWeight: 600, color: highlightColor }}>&epsilon;</span>
                <span>=</span>
                <span>{fmt(eps)}</span>
              </span>
              <span style={{ width: 1, height: 16, background: ctok.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>all n &ge; N&#8320; in band &rArr; converges</span>
            </div>
          </div>
        </div>

        {showInfoPanel && (
          <aside style={{ ...card, width: 360, padding: 16, flexShrink: 0 }}>
            <InfoPanel
              tabs={infoTabs}
              darkMode={darkMode}
              {...infoPanelProps}
            />
          </aside>
        )}
      </div>
    </div>
  );
}