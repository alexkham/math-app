/**
 * FunctionOptimization — v1
 *
 * Critical-point classifier. Find every x in [a, b] with f&apos;(x) = 0,
 * then classify each as local max / local min / inflection using the
 * second-derivative test (with first-derivative fallback when
 * f&apos;&apos;(c) ≈ 0).
 *
 * Pedagogical axis: f&apos;(c) = 0 finds the candidates; sign of f&apos;&apos;(c)
 * classifies them. Positive → concave up → local min. Negative →
 * concave down → local max. Zero → second-derivative test
 * inconclusive; fall back to the first-derivative test.
 *
 * Built on FunctionVisualizerCorePro. Uses:
 *   - functions[] with f (solid), f&apos; (dashed deep blue), f&apos;&apos;
 *     (dotted light blue) — toggle each
 *   - `shadedRegions` for a faint band over [a, b] (the search window)
 *   - `verticalLines` for a drop line from each critical point to the x-axis
 *   - `customPoints` for the colored marker at each critical point
 *   - `labelMode="none"` — legend in HTML below the graph
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'cubic-bump'
 *   families              : object        — override FAMILIES
 *   visualizerProps       : object
 *   infoPanelProps        : object
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

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCorePro';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS  (all blue variants)
   ================================================================ */

const COL = {
  f:    '#3b82f6',  // main blue — f, also min markers
  fp:   '#1e3a8a',  // deep blue — f', also max markers
  fpp:  '#60a5fa',  // light blue — f'', also inflection markers
  link: '#94a3b8',  // gray — drop lines
};

const KIND_COLORS = {
  max:          COL.fp,
  min:          COL.f,
  infl:         COL.fpp,
  inconclusive: '#94a3b8',
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v, d = 3) {
  if (!Number.isFinite(v)) return '\u2014';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  a: { label: 'left endpoint a',  min: -5, max: 5, step: 0.1 },
  b: { label: 'right endpoint b', min: -5, max: 5, step: 0.1 },
};


/* ================================================================
   FAMILIES — closed-form f, f&apos;, f&apos;&apos;
   ================================================================ */

export const FAMILIES = {
  quadratic: {
    name: 'Quadratic',
    group: 'Polynomial',
    glyph: 'M2,4 Q13,30 24,4',
    fn:   x => x * x,
    dfn:  x => 2 * x,
    ddfn: () => 2,
    eq:   'f(x) = x\u00b2',
    eqFull: 'f(x) = x\u00b2;  f\u2032(x) = 2x;  f\u2032\u2032(x) = 2',
    defaultInterval: [-3, 3],
    cNote: '1 min',
  },
  'cubic-bump': {
    name: 'x\u00b3 \u2212 3x',
    group: 'Polynomial',
    glyph: 'M2,22 C6,2 12,26 18,2 C22,2 24,8 24,8',
    fn:   x => x*x*x - 3*x,
    dfn:  x => 3*x*x - 3,
    ddfn: x => 6*x,
    eq:   'f(x) = x\u00b3 \u2212 3x',
    eqFull: 'f(x) = x\u00b3 \u2212 3x;  f\u2032(x) = 3x\u00b2 \u2212 3;  f\u2032\u2032(x) = 6x',
    defaultInterval: [-3, 3],
    cNote: 'max + min',
  },
  cubic: {
    name: 'x\u00b3',
    group: 'Polynomial',
    glyph: 'M2,22 C8,2 16,30 24,8',
    fn:   x => x*x*x,
    dfn:  x => 3*x*x,
    ddfn: x => 6*x,
    eq:   'f(x) = x\u00b3',
    eqFull: 'f(x) = x\u00b3;  f\u2032(x) = 3x\u00b2;  f\u2032\u2032(x) = 6x',
    defaultInterval: [-3, 3],
    cNote: 'inflection',
  },
  'quartic-w': {
    name: 'x\u2074 \u2212 4x\u00b2',
    group: 'Polynomial',
    glyph: 'M2,4 Q6,26 9,14 Q13,4 17,14 Q20,26 24,4',
    fn:   x => Math.pow(x, 4) - 4 * x * x,
    dfn:  x => 4*x*x*x - 8*x,
    ddfn: x => 12*x*x - 8,
    eq:   'f(x) = x\u2074 \u2212 4x\u00b2',
    eqFull: 'f(x) = x\u2074 \u2212 4x\u00b2;  f\u2032(x) = 4x\u00b3 \u2212 8x;  f\u2032\u2032(x) = 12x\u00b2 \u2212 8',
    defaultInterval: [-3, 3],
    cNote: 'W shape',
  },
  sine: {
    name: 'sin(x)',
    group: 'Transcendental',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    fn:   x => Math.sin(x),
    dfn:  x => Math.cos(x),
    ddfn: x => -Math.sin(x),
    eq:   'f(x) = sin(x)',
    eqFull: 'f(x) = sin(x);  f\u2032(x) = cos(x);  f\u2032\u2032(x) = \u2212sin(x)',
    defaultInterval: [-2 * Math.PI, 2 * Math.PI],
    cNote: 'many',
  },
  gaussian: {
    name: 'e\u207B\u02e3\u00b2',
    group: 'Transcendental',
    glyph: 'M2,22 Q13,-4 24,22',
    fn:   x => Math.exp(-x * x),
    dfn:  x => -2 * x * Math.exp(-x * x),
    ddfn: x => (4 * x * x - 2) * Math.exp(-x * x),
    eq:   'f(x) = e\u207B\u02e3\u00b2',
    eqFull: 'f(x) = e\u207B\u02e3\u00b2;  f\u2032(x) = \u22122x e\u207B\u02e3\u00b2;  f\u2032\u2032(x) = (4x\u00b2 \u2212 2) e\u207B\u02e3\u00b2',
    defaultInterval: [-3, 3],
    cNote: '1 max',
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   CRITICAL POINT FINDER
   ----------------------------------------------------------------
   Detects both sign-change zeros and touch zeros (e.g. x³ at 0).
   ================================================================ */

function findCriticalPoints(fam, a, b, samples = 800) {
  if (!(b > a)) return [];
  const dx = (b - a) / samples;
  const roots = [];

  let prevV = fam.dfn(a), prevX = a;
  for (let i = 1; i <= samples; i++) {
    const x = a + i * dx;
    const v = fam.dfn(x);
    if (!Number.isFinite(prevV) || !Number.isFinite(v)) { prevV = v; prevX = x; continue; }
    if (prevV === 0) { roots.push(prevX); prevV = v; prevX = x; continue; }
    if (prevV * v < 0) {
      let lo = prevX, hi = x;
      for (let j = 0; j < 50; j++) {
        const mid = (lo + hi) / 2;
        const gm = fam.dfn(mid);
        if (!Number.isFinite(gm) || Math.abs(gm) < 1e-12) { lo = hi = mid; break; }
        if (fam.dfn(lo) * gm < 0) hi = mid; else lo = mid;
      }
      roots.push((lo + hi) / 2);
    }
    prevV = v; prevX = x;
  }

  // Detect touch zeros: local minima of |f'| that are near zero.
  const N = 200;
  const ddx = (b - a) / N;
  for (let i = 1; i < N; i++) {
    const xL = a + (i - 1) * ddx, xM = a + i * ddx, xR = a + (i + 1) * ddx;
    const vL = Math.abs(fam.dfn(xL));
    const vM = Math.abs(fam.dfn(xM));
    const vR = Math.abs(fam.dfn(xR));
    if (vM < 1e-3 && vM < vL && vM < vR) {
      let lo = xL, hi = xR;
      for (let j = 0; j < 40; j++) {
        const m1 = lo + (hi - lo) / 3;
        const m2 = hi - (hi - lo) / 3;
        if (Math.abs(fam.dfn(m1)) < Math.abs(fam.dfn(m2))) hi = m2;
        else lo = m1;
      }
      const xT = (lo + hi) / 2;
      if (Math.abs(fam.dfn(xT)) < 1e-4) {
        if (!roots.some(r => Math.abs(r - xT) < dx * 3)) roots.push(xT);
      }
    }
  }

  roots.sort((p, q) => p - q);
  const out = [];
  for (const r of roots) {
    if (!out.length || Math.abs(r - out[out.length - 1]) > Math.max(dx * 2, 1e-4)) out.push(r);
  }
  return out;
}


/* ================================================================
   CLASSIFY — 2nd-deriv test with 1st-deriv fallback
   ================================================================ */

function classify(fam, x) {
  const fpp = fam.ddfn(x);
  if (Math.abs(fpp) < 1e-6) {
    const eps = 1e-3;
    const left = fam.dfn(x - eps);
    const right = fam.dfn(x + eps);
    if (left * right > 0) {
      return { kind: 'infl', label: 'inflection (touch)', testText: 'f\u2032\u2032 \u2248 0; f\u2032 doesn\u2019t change sign' };
    }
    if (left > 0 && right < 0) return { kind: 'max', label: 'local max', testText: 'f\u2032\u2032 \u2248 0; using 1st-deriv test' };
    if (left < 0 && right > 0) return { kind: 'min', label: 'local min', testText: 'f\u2032\u2032 \u2248 0; using 1st-deriv test' };
    return { kind: 'inconclusive', label: 'inconclusive', testText: 'f\u2032\u2032 \u2248 0' };
  }
  if (fpp > 0) return { kind: 'min', label: 'local min', testText: 'f\u2032\u2032(c) > 0 \u2192 concave up' };
  return { kind: 'max', label: 'local max', testText: 'f\u2032\u2032(c) < 0 \u2192 concave down' };
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
   AUTO Y-BOUNDS
   ================================================================ */

function autoYBounds(fam, xMin, xMax) {
  let lo = Infinity, hi = -Infinity;
  const N = 300;
  for (let i = 0; i <= N; i++) {
    const t = xMin + (i / N) * (xMax - xMin);
    [fam.fn(t), fam.dfn(t), fam.ddfn(t)].forEach(y => {
      if (Number.isFinite(y)) { if (y < lo) lo = y; if (y > hi) hi = y; }
    });
  }
  hi = Math.min(hi, 20);
  lo = Math.max(lo, -20);
  lo = Math.min(lo, 0);
  hi = Math.max(hi, 0);
  const pad = (hi - lo) * 0.15 + 0.5;
  return { yMin: lo - pad, yMax: hi + pad };
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionOptimization({
  initialFamily = 'cubic-bump',
  families = DEFAULT_FAMILIES,
  visualizerProps = {},
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
  const startFam = families[startKey];

  const [current, setCurrent] = useState(startKey);
  const [a, setA] = useState(startFam.defaultInterval[0]);
  const [b, setB] = useState(startFam.defaultInterval[1]);
  const [showF,    setShowF]    = useState(true);
  const [showFp,   setShowFp]   = useState(true);
  const [showFpp,  setShowFpp]  = useState(false);
  const [showCrit, setShowCrit] = useState(true);
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

  const panelTones = useMemo(() => {
    const hex = (highlightColor || '#3b82f6').replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16) || 0;
    const g = parseInt(hex.slice(2, 4), 16) || 0;
    const bb = parseInt(hex.slice(4, 6), 16) || 0;
    const rgba = (al) => `rgba(${r}, ${g}, ${bb}, ${al})`;
    const hx = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
    const darken = (f) => `#${hx(r * f)}${hx(g * f)}${hx(bb * f)}`;
    return {
      soft:   darkMode ? rgba(0.22) : rgba(0.14),
      border: darkMode ? rgba(0.55) : rgba(0.45),
      text:   darkMode ? rgba(0.95) : darken(0.4),
      main:   highlightColor,
    };
  }, [highlightColor, darkMode]);

  const fam = families[current] || families[familyKeys[0]];

  /* Normalize endpoints */
  const aN = Math.min(a, b);
  const bN = Math.max(a, b);
  const validInterval = (bN - aN) > 1e-6;

  /* Critical points + classification */
  const cps = useMemo(() => {
    if (!validInterval) return [];
    return findCriticalPoints(fam, aN, bN).map(x => {
      const cls = classify(fam, x);
      return {
        x,
        fx: fam.fn(x),
        fppx: fam.ddfn(x),
        ...cls,
      };
    });
  }, [fam, aN, bN, validInterval]);

  /* Functions: f, f', f''. */
  const functions = useMemo(() => ([
    {
      fn: fam.fn,
      color: COL.f,
      label: 'f',
      formula: fam.eq,
      visible: showF,
      stroke: 2.25,
    },
    {
      fn: fam.dfn,
      color: COL.fp,
      label: "f'",
      formula: "f'(x)",
      visible: showFp,
      stroke: 2,
      pattern: [9, 5],
    },
    {
      fn: fam.ddfn,
      color: COL.fpp,
      label: "f''",
      formula: "f''(x)",
      visible: showFpp,
      stroke: 2,
      pattern: [2, 4],
    },
  ]), [fam, showF, showFp, showFpp]);

  /* Faint band over [a, b] to highlight the search interval. */
  const shadedRegions = useMemo(() => {
    if (!validInterval) return [];
    return [{
      type: 'xRange',
      from: aN,
      to: bN,
      color: 'rgba(59, 130, 246, 0.05)',
    }];
  }, [aN, bN, validInterval]);

  /* Drop line from each critical point. */
  const verticalLines = useMemo(() => {
    if (!showCrit) return [];
    return cps.map(cp => ({
      x: cp.x,
      color: COL.link,
      stroke: 1,
      pattern: [3, 4],
    }));
  }, [cps, showCrit]);

  /* Marker at each critical point (on f), colored by kind. */
  const customPoints = useMemo(() => {
    if (!showCrit) return [];
    return cps.map((cp, i) => ({
      x: cp.x,
      y: cp.fx,
      color: KIND_COLORS[cp.kind],
      label: `${i + 1}: ${cp.label}`,
    }));
  }, [cps, showCrit]);

  const viewport = useMemo(() => {
    const xMin = -5, xMax = 5;
    return { xMin, xMax, ...autoYBounds(fam, xMin, xMax) };
  }, [fam]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    const summary = !validInterval
      ? 'Interval too narrow.'
      : cps.length === 0
        ? 'No critical points found in this interval.'
        : `Found ${cps.length} critical point${cps.length === 1 ? '' : 's'} in $[${fmt(aN, 2)}, ${fmt(bN, 2)}]$: ` +
          cps.map((cp, i) => `${i + 1}) x = ${fmt(cp.x)} (${cp.label})`).join('; ') + '.';
    return (
      `## Critical points of ${fam.name}\n\n` +
      `Critical points are the x values where $f'(x) = 0$ (or undefined). They&apos;re the candidates for local max, local min, or inflection. The second derivative tells you which.\n\n` +
      `**Derivatives** · $${fam.eqFull}$\n\n` +
      `### Right now\n\n` +
      `${summary}\n\n` +
      `### Reading the picture\n\n` +
      `The solid curve is $f$. The dashed curve is $f'$. At every critical point, $f'$ crosses (or touches) zero. If $f'$ goes from positive to negative there, you&apos;re at a local max of $f$. Touch-and-return (like $x^3$ at 0) means the second-derivative test is inconclusive — use the first-derivative test.`
    );
  }, [fam, aN, bN, cps, validInterval]);

  const conceptsContent =
    '## Optimization with derivatives\n\n' +
    'The whole machinery of finding maxes and mins of a smooth function rests on two facts:\n\n' +
    '- At a local extremum, the tangent line is horizontal — so $f\'(x) = 0$.\n' +
    '- The concavity at that point tells you which kind of extremum.\n\n' +
    '### The first-derivative test\n\n' +
    'Find every $c$ where $f\'(c) = 0$ (or where $f\'$ doesn&apos;t exist). For each:\n\n' +
    '- If $f\'$ changes from positive to negative at $c$: **local max**.\n' +
    '- If $f\'$ changes from negative to positive: **local min**.\n' +
    '- If $f\'$ doesn&apos;t change sign: **not an extremum** — usually an inflection with horizontal tangent (like $x^3$ at $0$).\n\n' +
    '### The second-derivative test\n\n' +
    'Often faster. At a point $c$ with $f\'(c) = 0$:\n\n' +
    '- $f\'\'(c) > 0$ — concave up — **local min**.\n' +
    '- $f\'\'(c) < 0$ — concave down — **local max**.\n' +
    '- $f\'\'(c) = 0$ — **inconclusive**; fall back to the first-derivative test or check higher derivatives.\n\n' +
    '### Inflection points\n\n' +
    'Separate concept: $f\'\'$ changes sign. Concavity flips. The curve switches from cupping-up to cupping-down (or vice versa). An inflection point may or may not be a critical point.\n\n' +
    '### Why this matters\n\n' +
    'If you want the largest area enclosed by a fence, the cheapest box that holds a given volume, the fastest path through a medium — set up the quantity as a function and find its critical points. That&apos;s the whole reason Calc 1 spends so much time on this.';

  const infoTabs = useMemo(() => ([
    { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
    { key: 'concepts',    label: 'Concepts',    order: 10, content: conceptsContent },
  ]), [explanationContent]);

  /* ---- Styling ---- */
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

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 460,
    ...visualizerProps,
  };

  const pickerEntries = buildPickerEntries(families);

  const selectFamily = (key) => {
    setCurrent(key);
    const [da, db] = families[key].defaultInterval;
    setA(da);
    setB(db);
  };

  const resetParams = () => {
    const [da, db] = fam.defaultInterval;
    setA(da);
    setB(db);
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
        borderTop: `2.5px ${swatchStyle} ${swatchColor}`,
      }} />
      <span style={{ fontFamily: monoStack, fontSize: 12 }}>{label}</span>
    </label>
  );

  /* ---- Slider helper ---- */
  const renderSlider = (key, value, setter, opts = {}) => {
    const def = PARAM_DEFS[key];
    return (
      <div>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: ctok.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            {def.label}
            {opts.badge && (
              <span style={{
                fontSize: 9, fontWeight: 700,
                color: panelTones.text, background: panelTones.soft,
                padding: '1px 5px', borderRadius: 3,
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>{opts.badge}</span>
            )}
          </span>
          <span style={{ fontFamily: monoStack, color: highlightColor, fontWeight: 600 }}>
            {fmt(value, 2)}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={value}
          onChange={e => setter(parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: highlightColor, cursor: 'pointer' }}
        />
      </div>
    );
  };

  /* ---- Legend ---- */
  const renderLegend = () => {
    const items = [];
    if (showF)    items.push({ c: COL.f,    style: 'solid',  text: 'f(x)' });
    if (showFp)   items.push({ c: COL.fp,   style: 'dashed', text: 'f\u2032(x)' });
    if (showFpp)  items.push({ c: COL.fpp,  style: 'dotted', text: 'f\u2032\u2032(x)' });
    if (showCrit) items.push({ c: COL.link, style: 'dashed', text: 'critical points (numbered)' });
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

  /* ---- Critical point table ---- */
  const cellStyle = {
    padding: '8px 12px',
    fontFamily: monoStack,
    fontSize: 12,
    color: ctok.ink,
    borderBottom: `1px solid ${ctok.borderSoft}`,
    fontVariantNumeric: 'tabular-nums',
    display: 'flex',
    alignItems: 'center',
  };
  const headStyle = {
    ...cellStyle,
    background: ctok.accentSoft,
    fontSize: 10, fontWeight: 700,
    color: ctok.accentText,
    textTransform: 'uppercase', letterSpacing: '0.05em',
    borderBottom: `1px solid ${panelTones.border}`,
  };
  const tagStyle = (kind) => ({
    display: 'inline-block',
    fontSize: 10, fontWeight: 700,
    padding: '3px 8px', borderRadius: 3,
    textTransform: 'uppercase', letterSpacing: '0.05em',
    color: kind === 'infl' ? panelTones.text : '#fff',
    background: KIND_COLORS[kind] || COL.f,
    textAlign: 'center',
  });
  const markerStyle = (kind) => ({
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 22, height: 22, borderRadius: '50%',
    color: kind === 'infl' ? panelTones.text : '#fff',
    fontWeight: 700, fontSize: 11,
    fontFamily: monoStack,
    background: KIND_COLORS[kind] || COL.f,
  });

  const renderTable = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '60px 1fr 1fr 1fr 1.3fr 110px',
      background: darkMode ? '#0f172a' : '#fff',
      border: `1px solid ${panelTones.border}`,
      borderRadius: 6,
      overflow: 'hidden',
    }}>
      <div style={headStyle}>#</div>
      <div style={headStyle}>x</div>
      <div style={headStyle}>f(x)</div>
      <div style={headStyle}>f&apos;&apos;(x)</div>
      <div style={headStyle}>Second-derivative test</div>
      <div style={headStyle}>Verdict</div>

      {cps.length === 0 && (
        <div style={{
          ...cellStyle,
          gridColumn: '1 / -1',
          justifyContent: 'center',
          color: ctok.muted, fontStyle: 'italic',
          borderBottom: 'none',
        }}>
          {validInterval ? 'No critical points in this interval.' : 'Interval too narrow.'}
        </div>
      )}

      {cps.map((cp, i) => {
        const last = i === cps.length - 1;
        const rowCellStyle = last ? { ...cellStyle, borderBottom: 'none' } : cellStyle;
        return (
          <React.Fragment key={i}>
            <div style={rowCellStyle}><span style={markerStyle(cp.kind)}>{i + 1}</span></div>
            <div style={rowCellStyle}>{fmt(cp.x)}</div>
            <div style={rowCellStyle}>{fmt(cp.fx)}</div>
            <div style={rowCellStyle}>{fmt(cp.fppx)}</div>
            <div style={rowCellStyle}>{cp.testText}</div>
            <div style={rowCellStyle}><span style={tagStyle(cp.kind)}>{cp.label}</span></div>
          </React.Fragment>
        );
      })}
    </div>
  );

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
          <nav style={{ ...card, width: 250, padding: 10, flexShrink: 0 }}>
            <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Function</div>
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
                      fontSize: 10, color: ctok.muted,
                      fontFamily: monoStack,
                    }}>{e.fam.cNote}</span>
                  </button>
                )
            )}

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
              <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Display</div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                <Toggle checked={showF}    onChange={setShowF}    swatchColor={COL.f}    swatchStyle="solid"  label="f(x)" />
                <Toggle checked={showFp}   onChange={setShowFp}   swatchColor={COL.fp}   swatchStyle="dashed" label="f'(x)" />
                <Toggle checked={showFpp}  onChange={setShowFpp}  swatchColor={COL.fpp}  swatchStyle="dotted" label="f''(x)" />
                <Toggle checked={showCrit} onChange={setShowCrit} swatchColor={COL.link} swatchStyle="dashed" label="critical points" />
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
                {renderSlider('a', a, setA, { badge: 'search interval' })}
                {renderSlider('b', b, setB)}
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

            <VisualizerWithControls
              functions={functions}
              xMin={viewport.xMin}
              xMax={viewport.xMax}
              yMin={viewport.yMin}
              yMax={viewport.yMax}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="none"
              shadedRegions={shadedRegions}
              verticalLines={verticalLines}
              customPoints={customPoints}
              {...mergedVisualizerProps}
            />

            {renderLegend()}

            {/* ---- CENTERPIECE: critical-point table ---- */}
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
                gap: 12, marginBottom: 12, flexWrap: 'wrap',
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: panelTones.text, fontWeight: 700,
                }}>Critical points on [a, b]</span>
                <span style={{
                  fontFamily: monoStack, fontSize: 13, color: ctok.inkSoft,
                }}>
                  [a, b] = [{fmt(aN, 2)}, {fmt(bN, 2)}]
                </span>
              </div>

              {renderTable()}

              <div style={{
                marginTop: 12, padding: '10px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${panelTones.border}`,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 12.5, color: ctok.inkSoft,
              }}>
                <span>
                  <strong style={{ color: panelTones.text }}>f&apos;(c) = 0</strong> finds the candidates;
                  <strong style={{ color: panelTones.text }}> sign of f&apos;&apos;(c)</strong> classifies them.
                  Positive: local min. Negative: local max. Zero or sign change: inflection.
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: 9.5, fontWeight: 700,
                  padding: '2px 7px', borderRadius: 3,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  color: panelTones.text, background: panelTones.soft,
                }}>2nd-deriv test</span>
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
                <span style={{ fontWeight: 600, color: highlightColor }}>a</span>
                <span>=</span>
                <span>{fmt(aN, 2)}</span>
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 9px', borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: ctok.accentText, background: ctok.accentSoft,
                border: `1px solid ${ctok.accentBorder}`, fontWeight: 600,
              }}>
                <span style={{ fontWeight: 600, color: highlightColor }}>b</span>
                <span>=</span>
                <span>{fmt(bN, 2)}</span>
              </span>
              <span style={{ width: 1, height: 16, background: ctok.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>f&apos;=0 candidates &middot; f&apos;&apos; classifies</span>
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