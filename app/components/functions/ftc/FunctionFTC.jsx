/**
 * FunctionFTC — v1
 *
 * Fundamental Theorem of Calculus visualizer. Shows f (the integrand)
 * and F(x) = ∫ₐˣ f(t) dt (the accumulator) on the same plot, with the
 * shaded region under f from a to x. The shaded area equals F(x);
 * the slope of F at x equals f(x). One picture, both halves of the
 * theorem.
 *
 * Pedagogical axis: F&apos;(x) = f(x). Integration and differentiation
 * are inverses. Scrubbing x:
 *   - f &gt; 0 means F climbs; f &lt; 0 means F descends
 *   - f crossing zero is a flat spot of F (local max/min)
 *   - large |f| means steep F; small |f| means flat F
 *   - at x = a the area is zero and F(a) = 0
 *
 * Built on FunctionVisualizerCorePro. Uses:
 *   - functions[] with f (solid) and F (dashed deep blue)
 *   - `shadedRegions` with one underCurve region on f from a to x
 *   - `verticalLines` at a (light) and x (stronger)
 *   - `customPoints` for markers at (x, f(x)) and (x, F(x))
 *   - `labelMode="none"` — legend in HTML below the graph
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'quadratic'
 *   initialA              : number        — default 0
 *   initialX              : number        — default 2
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
  f:        '#3b82f6',  // main blue — integrand
  F:        '#1e3a8a',  // deep blue — accumulator
  link:     '#94a3b8',  // gray — vertical reference lines at a and x
  shade:    'rgba(59, 130, 246, 0.22)',
  shadeBorder: 'rgba(59, 130, 246, 0.6)',
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
  a: { label: 'lower bound a',  min: -5, max: 5, step: 0.1,  def: 0 },
  x: { label: 'upper bound x',  min: -5, max: 5, step: 0.05, def: 2 },
};


/* ================================================================
   FAMILIES
   ----------------------------------------------------------------
   Each family ships closed-form integrand and antiderivative.
   F(a, x) returns the definite integral from a to x.
   ================================================================ */

export const FAMILIES = {
  identity: {
    name: 'Identity',
    group: 'Polynomial',
    glyph: 'M2,22 L24,4',
    fn:  t => t,
    F:  (a, x) => (x * x - a * a) / 2,
    eq:  'f(t) = t',
    Feq: 'F(x) = x\u00b2/2 \u2212 a\u00b2/2',
  },
  quadratic: {
    name: 'Quadratic',
    group: 'Polynomial',
    glyph: 'M2,4 Q13,30 24,4',
    fn:  t => t * t,
    F:  (a, x) => (x * x * x - a * a * a) / 3,
    eq:  'f(t) = t\u00b2',
    Feq: 'F(x) = x\u00b3/3 \u2212 a\u00b3/3',
  },
  cubic: {
    name: 'Cubic',
    group: 'Polynomial',
    glyph: 'M2,22 C8,2 16,30 24,8',
    fn:  t => t * t * t,
    F:  (a, x) => (Math.pow(x, 4) - Math.pow(a, 4)) / 4,
    eq:  'f(t) = t\u00b3',
    Feq: 'F(x) = x\u2074/4 \u2212 a\u2074/4',
  },
  sine: {
    name: 'Sine',
    group: 'Transcendental',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    fn:  t => Math.sin(t),
    F:  (a, x) => -Math.cos(x) + Math.cos(a),
    eq:  'f(t) = sin(t)',
    Feq: 'F(x) = \u2212cos(x) + cos(a)',
  },
  cosine: {
    name: 'Cosine',
    group: 'Transcendental',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    fn:  t => Math.cos(t),
    F:  (a, x) => Math.sin(x) - Math.sin(a),
    eq:  'f(t) = cos(t)',
    Feq: 'F(x) = sin(x) \u2212 sin(a)',
  },
  exponential: {
    name: 'Exponential',
    group: 'Transcendental',
    glyph: 'M2,26 Q16,26 24,2',
    fn:  t => Math.exp(t),
    F:  (a, x) => Math.exp(x) - Math.exp(a),
    eq:  'f(t) = e\u1d57',
    Feq: 'F(x) = e\u02e3 \u2212 e\u1d43',
  },
};

const DEFAULT_FAMILIES = FAMILIES;


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
   AUTO Y-BOUNDS — fit both f and F on the visible x window
   ================================================================ */

function autoYBounds(fam, a, xMin, xMax) {
  let lo = Infinity, hi = -Infinity;
  const N = 300;
  for (let i = 0; i <= N; i++) {
    const t = xMin + (i / N) * (xMax - xMin);
    const y1 = fam.fn(t);
    const y2 = fam.F(a, t);
    if (Number.isFinite(y1)) { if (y1 < lo) lo = y1; if (y1 > hi) hi = y1; }
    if (Number.isFinite(y2)) { if (y2 < lo) lo = y2; if (y2 > hi) hi = y2; }
  }
  hi = Math.min(hi, 15);
  lo = Math.max(lo, -15);
  lo = Math.min(lo, 0);
  hi = Math.max(hi, 0);
  const pad = (hi - lo) * 0.15 + 0.5;
  return { yMin: lo - pad, yMax: hi + pad };
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionFTC({
  initialFamily = 'quadratic',
  initialA = 0,
  initialX = 2,
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

  const [current, setCurrent] = useState(startKey);
  const [a, setA] = useState(initialA);
  const [x, setX] = useState(initialX);
  const [showF,    setShowF]    = useState(true);
  const [showFcap, setShowFcap] = useState(true);
  const [showArea, setShowArea] = useState(true);
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

  /* Tones derived from highlight color */
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

  /* Current values */
  const fx   = useMemo(() => fam.fn(x),     [fam, x]);
  const Fx   = useMemo(() => fam.F(a, x),   [fam, a, x]);
  const area = Fx; // by construction

  /* Functions: f (solid) and F (dashed deep blue). */
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
      fn: t => fam.F(a, t),
      color: COL.F,
      label: 'F',
      formula: fam.Feq,
      visible: showFcap,
      stroke: 2,
      pattern: [9, 5],
    },
  ]), [fam, a, showF, showFcap]);

  /* Shaded area under f from min(a,x) to max(a,x). */
  const shadedRegions = useMemo(() => {
    if (!showArea || a === x) return [];
    return [{
      type: 'underCurve',
      functionIndex: 0,
      from: Math.min(a, x),
      to: Math.max(a, x),
      color: COL.shade,
      borderColor: COL.shadeBorder,
      borderStroke: 1,
    }];
  }, [a, x, showArea]);

  /* Vertical reference lines at a and x. */
  const verticalLines = useMemo(() => ([
    { x: a, color: COL.link, stroke: 1,   pattern: [4, 4], label: `a = ${fmt(a, 2)}` },
    { x: x, color: COL.link, stroke: 1.5, pattern: [5, 4], label: `x = ${fmt(x, 2)}` },
  ]), [a, x]);

  /* Marker dots at (x, f(x)) and (x, F(x)). */
  const customPoints = useMemo(() => {
    const pts = [];
    if (showF    && Number.isFinite(fx)) pts.push({ x, y: fx, color: COL.f, label: `f(x) = ${fmt(fx)}` });
    if (showFcap && Number.isFinite(Fx)) pts.push({ x, y: Fx, color: COL.F, label: `F(x) = ${fmt(Fx)}` });
    return pts;
  }, [showF, showFcap, x, fx, Fx]);

  /* View bounds — fixed x window; y autofit per family + a. */
  const viewport = useMemo(() => {
    const xMin = -5, xMax = 5;
    const yb = autoYBounds(fam, a, xMin, xMax);
    return { xMin, xMax, ...yb };
  }, [fam, a]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => (
    `## ${fam.name}: accumulator and integrand\n\n` +
    `The shaded region is the area under f from a to x. Sliding x grows or shrinks that area, and the height of F tracks it exactly.\n\n` +
    `**Integrand** · $${fam.eq}$\n\n` +
    `**Accumulator** · $${fam.Feq}$\n\n` +
    `### Right now\n\n` +
    `a = $${fmt(a, 2)}$, x = $${fmt(x, 2)}$. Shaded area = $${fmt(area)}$, F(x) = $${fmt(Fx)}$ (they match by construction). f(x) = $${fmt(fx)}$, which is also $F'(x)$ — the slope of the F curve at x.\n\n` +
    `### The two halves of the theorem\n\n` +
    `**Part 1 (the link).** Define $F(x) = \\int_a^x f(t)\\,dt$ — the accumulated area. Then F is differentiable and $F'(x) = f(x)$. Differentiation undoes integration.\n\n` +
    `**Part 2 (evaluation).** If G is any antiderivative of f, then $\\int_a^b f(t)\\,dt = G(b) - G(a)$. That&apos;s how you compute definite integrals without summing rectangles forever.`
  ), [fam, a, x, fx, Fx, area]);

  const conceptsContent =
    '## The Fundamental Theorem of Calculus\n\n' +
    'Two operations — **differentiation** (slope of a curve) and **integration** (area under a curve) — look unrelated. The FTC says they are inverses of each other. That single fact is the bridge between everything in calculus.\n\n' +
    '### The accumulator F\n\n' +
    'Fix a starting point $a$. Define\n\n' +
    '$$F(x) = \\int_a^x f(t)\\,dt.$$\n\n' +
    'F takes an $x$ and gives back the signed area under f from $a$ to $x$. It&apos;s a brand-new function built out of f.\n\n' +
    '### What F&apos;(x) is\n\n' +
    'How fast does F grow as x moves? Push x a little further right by $\\Delta x$ and you pick up a thin sliver of area of width $\\Delta x$ and height roughly $f(x)$. So $\\Delta F \\approx f(x)\\cdot\\Delta x$, which means\n\n' +
    '$$F\'(x) = f(x).$$\n\n' +
    'Differentiating the accumulator gives back the integrand. **That&apos;s Part 1.**\n\n' +
    '### Why this is huge\n\n' +
    'It means you can compute $\\int_a^b f(t)\\,dt$ by finding *any* antiderivative G (a function with $G\' = f$) and evaluating $G(b) - G(a)$. No more summing 4000 trapezoids — just take the antiderivative and plug in. **That&apos;s Part 2.**\n\n' +
    '### What the picture shows\n\n' +
    '- Move x to see the shaded area change.\n' +
    '- The height of the F curve at x equals that area.\n' +
    '- The slope of F at x equals f at x (the height of the f curve at the same x).\n' +
    '- When f crosses zero, F stops changing — flat spot, slope zero, local max or min.\n' +
    '- Where f is large, F climbs fast. Where f is negative, F decreases.';

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
    setA(initialA);
    setX(initialX);
  };

  const resetParams = () => {
    setA(initialA);
    setX(initialX);
  };

  /* ---- Display toggle ---- */
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

  /* ---- Slider ---- */
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

  /* ---- Legend below graph ---- */
  const renderLegend = () => {
    const items = [];
    if (showF)    items.push({ c: COL.f, style: 'solid',  text: `${fam.eq} (integrand)` });
    if (showFcap) items.push({ c: COL.F, style: 'dashed', text: `F(x) = \u222B\u2090\u02e3 f(t) dt (accumulator)` });
    if (showArea) items.push({ c: COL.shadeBorder, style: 'solid', text: 'shaded area' });
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
          <nav style={{ ...card, width: 220, padding: 10, flexShrink: 0 }}>
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
                    <span>{e.fam.name}</span>
                  </button>
                )
            )}

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
              <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Display</div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                <Toggle checked={showF}    onChange={setShowF}    swatchColor={COL.f}             swatchStyle="solid"  label="f(t)" />
                <Toggle checked={showFcap} onChange={setShowFcap} swatchColor={COL.F}             swatchStyle="dashed" label="F(x)" />
                <Toggle checked={showArea} onChange={setShowArea} swatchColor={ctok.accentBorder} swatchStyle="fill"   label="area" />
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
                {renderSlider('a', a, setA)}
                {renderSlider('x', x, setX, { badge: 'moving point' })}
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
              <span style={{ display: 'inline-flex', gap: 6, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: COL.f, background: ctok.softer,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                  {fam.eq}
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: COL.F, background: ctok.softer,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.F }} />
                  {fam.Feq}
                </span>
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
              verticalLines={verticalLines}
              shadedRegions={shadedRegions}
              customPoints={customPoints}
              {...mergedVisualizerProps}
            />

            {renderLegend()}

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
                }}>At the moving point x</span>
                <span style={{
                  fontFamily: monoStack, fontSize: 13, color: ctok.inkSoft,
                }}>
                  x = {fmt(x, 2)} &nbsp;(a = {fmt(a, 2)})
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
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: ctok.accentBorder }} />
                    Area &int;&#8336;&#7517; f(t) dt
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(area)}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>shaded region under f</div>
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
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.F }} />
                    F(x)
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(Fx)}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>height on F</div>
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
                    f(x) = F&apos;(x)
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(fx)}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>slope of F at x</div>
                </div>
              </div>

              <div style={{
                marginTop: 10, padding: '10px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${panelTones.border}`,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 12.5, color: ctok.inkSoft,
              }}>
                <span>
                  The <strong style={{ color: panelTones.text }}>shaded area</strong> from a to x equals
                  the <strong style={{ color: panelTones.text }}>height of F at x</strong>; and the
                  <strong style={{ color: panelTones.text }}> slope of F at x</strong> equals
                  <strong style={{ color: panelTones.text }}> f(x)</strong>.
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: 9.5, fontWeight: 700,
                  padding: '2px 7px', borderRadius: 3,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  color: panelTones.text, background: panelTones.soft,
                }}>FTC</span>
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
                <span>{fmt(a, 2)}</span>
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 9px', borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: ctok.accentText, background: ctok.accentSoft,
                border: `1px solid ${ctok.accentBorder}`, fontWeight: 600,
              }}>
                <span style={{ fontWeight: 600, color: highlightColor }}>x</span>
                <span>=</span>
                <span>{fmt(x, 2)}</span>
              </span>
              <span style={{ width: 1, height: 16, background: ctok.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>F&apos;(x) = f(x)</span>
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