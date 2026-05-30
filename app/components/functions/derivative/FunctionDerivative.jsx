/**
 * FunctionDerivative — v1
 *
 * Derivative Companion. One graph shows f (solid), f&apos; (dashed),
 * and the tangent line on f at a movable point x&#8320;. A dashed
 * vertical link line drops through both curves at x&#8320; so the
 * student sees the same number twice: the slope of the tangent on
 * f at x&#8320; equals the height of f&apos; at x&#8320;.
 *
 * Pedagogical axis: the derivative is the slope of the tangent —
 * two pictures of one number. Scrubbing x&#8320;:
 *   - maxima/minima of f land where f&apos; crosses zero
 *   - steep parts of f push f&apos; far from zero
 *   - inflection points of f are extrema of f&apos;
 *
 * Below the graph, a points-of-interest bar lets the student jump
 * x&#8320; directly to roots of f, extrema of f (= roots of f&apos;),
 * and inflection points of f (= extrema of f&apos;). The values are
 * computed numerically per family on the visible interval.
 *
 * Built on FunctionVisualizerCorePro. Uses:
 *   - functions[] with f and f&apos; (f&apos; via `pattern: [9, 5]`)
 *   - `tangentAt` for the tangent line, restyled to a blue tone
 *   - `verticalLines` for the dashed link line at x&#8320;
 *   - `customPoints` for the marker dots on f and f&apos;
 *   - `labelMode="none"` — the legend is rendered in HTML below
 *     the graph so it doesn&apos;t sit on top of the curves.
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'quadratic'
 *   initialX0             : number        — default 1
 *   families              : object        — override FAMILIES
 *   visualizerProps       : object        — forwarded to VisualizerWithControls
 *   infoPanelProps        : object        — forwarded to InfoPanel
 *   darkMode              : boolean
 *   showPicker            : boolean
 *   showInfoPanel         : boolean
 *   showColorPicker       : boolean       — default true
 *   defaultHighlightColor : string        — default '#3b82f6'
 *   maxWidth              : string|number — wrapper cap; default '80vw'
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
  f:    '#3b82f6', // main blue
  fp:   '#1e3a8a', // deep blue
  tan:  '#60a5fa', // light blue
  link: '#94a3b8', // gray for the dashed link line
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v, d = 4) {
  if (!Number.isFinite(v)) return '—';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  x0: { label: 'point x\u2080', min: -5, max: 5, step: 0.05, def: 1 },
};


/* ================================================================
   FAMILIES
   ----------------------------------------------------------------
   Each family ships a closed-form derivative. (No numerical fallback
   for v1 — every family below has a clean derivative.)
   ================================================================ */

export const FAMILIES = {
  identity: {
    name: 'Identity',
    group: 'Polynomial',
    glyph: 'M2,22 L24,4',
    fn:  x => x,
    dfn: x => 1,
    eq:  'f(x) = x',
    deq: 'f\u2032(x) = 1',
  },
  quadratic: {
    name: 'Quadratic',
    group: 'Polynomial',
    glyph: 'M2,4 Q13,30 24,4',
    fn:  x => x * x,
    dfn: x => 2 * x,
    eq:  'f(x) = x\u00b2',
    deq: 'f\u2032(x) = 2x',
  },
  cubic: {
    name: 'Cubic',
    group: 'Polynomial',
    glyph: 'M2,22 C8,2 16,30 24,8',
    fn:  x => x * x * x,
    dfn: x => 3 * x * x,
    eq:  'f(x) = x\u00b3',
    deq: 'f\u2032(x) = 3x\u00b2',
  },
  sine: {
    name: 'Sine',
    group: 'Transcendental',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    fn:  x => Math.sin(x),
    dfn: x => Math.cos(x),
    eq:  'f(x) = sin(x)',
    deq: 'f\u2032(x) = cos(x)',
  },
  cosine: {
    name: 'Cosine',
    group: 'Transcendental',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    fn:  x => Math.cos(x),
    dfn: x => -Math.sin(x),
    eq:  'f(x) = cos(x)',
    deq: 'f\u2032(x) = \u2212sin(x)',
  },
  exponential: {
    name: 'Exponential',
    group: 'Transcendental',
    glyph: 'M2,26 Q16,26 24,2',
    fn:  x => Math.exp(x),
    dfn: x => Math.exp(x),
    eq:  'f(x) = e\u02e3',
    deq: 'f\u2032(x) = e\u02e3',
  },
  logarithm: {
    name: 'Logarithm',
    group: 'Transcendental',
    glyph: 'M2,2 Q10,26 24,26',
    fn:  x => (x > 0 ? Math.log(x) : NaN),
    dfn: x => (x > 0 ? 1 / x : NaN),
    eq:  'f(x) = ln(x)',
    deq: 'f\u2032(x) = 1/x',
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   POI FINDERS — roots / extrema / inflections
   ----------------------------------------------------------------
   Numerical: scan with sign changes, then bisect.
   ================================================================ */

function findRootsOf(fn, xmin, xmax, samples = 400) {
  const roots = [];
  const step = (xmax - xmin) / samples;
  for (let i = 0; i < samples; i++) {
    const x1 = xmin + i * step, x2 = x1 + step;
    let y1, y2;
    try { y1 = fn(x1); y2 = fn(x2); } catch { continue; }
    if (!Number.isFinite(y1) || !Number.isFinite(y2)) continue;
    if (y1 * y2 < 0) {
      let a = x1, b = x2;
      for (let j = 0; j < 40; j++) {
        const m = (a + b) / 2;
        let ym; try { ym = fn(m); } catch { break; }
        if (!Number.isFinite(ym) || Math.abs(ym) < 1e-9) { a = b = m; break; }
        let ya; try { ya = fn(a); } catch { break; }
        if (ya * ym < 0) b = m; else a = m;
      }
      const r = (a + b) / 2;
      if (!roots.length || Math.abs(r - roots[roots.length - 1]) > step) roots.push(r);
    }
  }
  return roots;
}

function findPOI(fam, xmin, xmax) {
  const { fn, dfn } = fam;
  const h = 1e-4;
  const ddfn = x => (dfn(x + h) - dfn(x - h)) / (2 * h);
  return {
    roots:       findRootsOf(fn,   xmin, xmax),
    extrema:     findRootsOf(dfn,  xmin, xmax),  // f'(x) = 0
    inflections: findRootsOf(ddfn, xmin, xmax),  // f''(x) = 0
  };
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
   MAIN
   ================================================================ */

export default function FunctionDerivative({
  initialFamily = 'quadratic',
  initialX0 = 1,
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
  const [x0, setX0] = useState(initialX0);
  const [showF,   setShowF]   = useState(true);
  const [showFp,  setShowFp]  = useState(true);
  const [showTan, setShowTan] = useState(true);
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

  /* Tones derived from highlight color (same pattern as Domain/Range/Riemann) */
  const panelTones = useMemo(() => {
    const hex = (highlightColor || '#3b82f6').replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16) || 0;
    const g = parseInt(hex.slice(2, 4), 16) || 0;
    const b = parseInt(hex.slice(4, 6), 16) || 0;
    const rgba = (a) => `rgba(${r}, ${g}, ${b}, ${a})`;
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

  const f0  = useMemo(() => fam.fn(x0),  [fam, x0]);
  const fp0 = useMemo(() => fam.dfn(x0), [fam, x0]);
  const f0Defined  = Number.isFinite(f0);
  const fp0Defined = Number.isFinite(fp0);

  /* Functions: f and f'. f' uses dashed stroke pattern to differentiate. */
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
      formula: fam.deq,
      visible: showFp,
      stroke: 2,
      pattern: [9, 5],
    },
  ]), [fam, showF, showFp]);

  /* Tangent on f at x0. The core paints tangents purple by default;
     restyle to a light-blue tone via the `styles` override. */
  const tangentAt = useMemo(() => {
    if (!showTan || !f0Defined || !fp0Defined) return null;
    return { functionIndex: 0, x: x0 };
  }, [showTan, f0Defined, fp0Defined, x0]);

  const styleOverrides = useMemo(() => ({
    line: { tangent: { color: COL.tan, stroke: 2, pattern: [] } },
  }), []);

  /* Vertical dashed link line at x0 — the visual that ties f and f' together. */
  const verticalLines = useMemo(() => ([
    { x: x0, color: COL.link, stroke: 1.25, pattern: [5, 4] },
  ]), [x0]);

  /* Marker dots on f and f' (open-style so the tangent dot stays visible too). */
  const customPoints = useMemo(() => {
    const pts = [];
    if (showF  && f0Defined)  pts.push({ x: x0, y: f0,  color: COL.f,  label: 'f(x\u2080)' });
    if (showFp && fp0Defined) pts.push({ x: x0, y: fp0, color: COL.fp, label: "f'(x\u2080)" });
    return pts;
  }, [showF, showFp, f0Defined, fp0Defined, x0, f0, fp0]);

  /* POI computed once per family on the visible domain [-5, 5]. */
  const poi = useMemo(() => findPOI(fam, -5, 5), [fam]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    const numbersLine = (!f0Defined || !fp0Defined)
      ? `At $x_0 = ${fmt(x0, 2)}$, the function is not defined here.`
      : `At $x_0 = ${fmt(x0, 2)}$: $f(x_0) = ${fmt(f0)}$, and $f'(x_0) = ${fmt(fp0)}$. So the tangent at this point has slope $${fmt(fp0)}$, which is exactly the height of $f'$ at $x = ${fmt(x0, 2)}$.`;

    return (
      `## ${fam.name} and its derivative\n\n` +
      `**Function** · $${fam.eq.replace('f(x) = ', 'f(x) = ')}$\n\n` +
      `**Derivative** · $${fam.deq.replace("f\u2032(x) = ", "f'(x) = ")}$\n\n` +
      `### What x\u2080 controls\n\n` +
      `The slider picks a point $x_0$ on the x-axis. The vertical link line drops through both curves. Where it crosses **f** you get the height $f(x_0)$ — the function&apos;s value. Where it crosses **f&apos;** you get $f'(x_0)$ — the slope of $f$ at that point.\n\n` +
      `### Right now\n\n` +
      `${numbersLine}\n\n` +
      `### The link\n\n` +
      `The light-blue tangent line on $f$ has slope $f'(x_0)$. The deep-blue dot on $f'$ sits at the same height. Two pictures of the same number.`
    );
  }, [fam, x0, f0, fp0, f0Defined, fp0Defined]);

  const conceptsContent =
    '## What is a derivative?\n\n' +
    'The **derivative** of $f$ at a point measures the *instantaneous rate of change* — how fast the output changes when the input changes a tiny bit. Geometrically it&apos;s the slope of the line that just barely touches the curve at that point (the **tangent line**).\n\n' +
    '### Two ways to see it\n\n' +
    '- **On the graph of f** — pick a point, draw the tangent. The tangent&apos;s slope is the derivative there.\n' +
    '- **As its own function f&apos;** — plot the derivative value at every $x$. Now the derivative is a curve in its own right; the height of $f\'$ at any $x$ is the slope of $f$ at that same $x$.\n\n' +
    'This tool shows both at once. Slide $x_0$ and watch them stay in sync.\n\n' +
    '### What to look for\n\n' +
    '- **Maxima and minima of $f$** land where $f\'$ *crosses zero*. At the top of a hill on $f$, the tangent is horizontal — slope 0 — so $f\'$ is at 0.\n' +
    '- **Steep parts of $f$** push $f\'$ far from zero.\n' +
    '- **Constant or near-constant parts of $f$** (e.g. near an extremum) keep $f\'$ near zero.\n' +
    '- **Inflection points of $f$** (where the curve changes concavity) sit at maxima and minima *of $f\'$*.\n\n' +
    'The Jump to bar below the graph lets you snap $x_0$ directly to these special locations.\n\n' +
    '### Closed forms vs numerics\n\n' +
    'For the families here the derivative has a clean closed form ($\\frac{d}{dx}[x^2] = 2x$, $\\frac{d}{dx}[\\sin x] = \\cos x$, …). For functions without one, the standard fallback is a central-difference estimate $\\frac{f(x+h) - f(x-h)}{2h}$ — exactly what a calculator does.';

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
  const c = {
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
    background: active ? c.accentSoft : 'none',
    borderColor: active ? c.accentBorder : 'transparent',
    borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
    fontSize: 13, fontWeight: active ? 600 : 400,
    color: active ? c.accentText : c.inkSoft,
    transition: 'background 0.12s, border-color 0.12s',
  });

  const sectionTitle = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 460,
    ...visualizerProps,
  };

  const pickerEntries = buildPickerEntries(families);

  const selectFamily = (key) => {
    setCurrent(key);
    setX0(initialX0);
  };

  const resetX0 = () => setX0(initialX0);

  /* ---- Display toggle helper ---- */
  const ToggleRow = ({ checked, onChange, swatchColor, dashed, label }) => (
    <label style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '6px 4px', cursor: 'pointer',
      fontSize: 12.5, color: c.inkSoft,
    }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        style={{ accentColor: swatchColor }}
      />
      <span style={{
        display: 'inline-block', width: 28, height: 0, flexShrink: 0,
        borderTop: `2.5px ${dashed ? 'dashed' : 'solid'} ${swatchColor}`,
      }} />
      <span style={{ fontFamily: monoStack, fontSize: 12 }}>{label}</span>
    </label>
  );

  /* ---- Slider ---- */
  const renderX0Slider = () => {
    const def = PARAM_DEFS.x0;
    return (
      <div>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            {def.label}
            <span style={{
              fontSize: 9, fontWeight: 700,
              color: panelTones.text, background: panelTones.soft,
              padding: '1px 5px', borderRadius: 3,
              textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>links f &amp; f&apos;</span>
          </span>
          <span style={{ fontFamily: monoStack, color: highlightColor, fontWeight: 600 }}>
            {fmt(x0, 2)}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={x0}
          onChange={e => setX0(parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: highlightColor, cursor: 'pointer' }}
        />
      </div>
    );
  };

  /* ---- POI bar ---- */
  const renderPOIBar = () => {
    const groups = [
      { label: 'Roots of f',    pts: poi.roots },
      { label: 'Extrema of f',  pts: poi.extrema },
      { label: 'Inflections',   pts: poi.inflections },
    ].filter(g => g.pts.length > 0);

    return (
      <div style={{
        padding: '10px 12px',
        background: panelTones.soft,
        border: `1px solid ${panelTones.border}`,
        borderRadius: 8,
        display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center',
      }}>
        <span style={{
          fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
          color: c.muted, fontWeight: 600, marginRight: 4,
        }}>Jump to</span>
        {groups.length === 0 && (
          <span style={{ fontSize: 11, color: c.muted, fontStyle: 'italic' }}>
            none in view
          </span>
        )}
        {groups.map(g => (
          <span key={g.label} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '2px 8px',
            background: darkMode ? c.soft : '#fff',
            border: `1px solid ${panelTones.border}`,
            borderRadius: 6,
          }}>
            <span style={{
              fontSize: 10.5, fontWeight: 600,
              color: panelTones.text, marginRight: 4,
            }}>{g.label}</span>
            {g.pts.slice(0, 7).map((x, i) => {
              const active = Math.abs(x - x0) < 0.02;
              return (
                <button
                  key={i}
                  onClick={() => setX0(x)}
                  style={{
                    fontFamily: monoStack, fontSize: 11,
                    padding: '3px 8px',
                    border: `1px solid ${panelTones.border}`,
                    background: active ? highlightColor : (darkMode ? c.soft : '#fff'),
                    color: active ? '#fff' : panelTones.text,
                    borderRadius: 4, cursor: 'pointer',
                    fontVariantNumeric: 'tabular-nums',
                    fontWeight: active ? 600 : 500,
                    transition: 'all 0.12s',
                  }}
                >
                  {fmt(x, 2)}
                </button>
              );
            })}
          </span>
        ))}
      </div>
    );
  };

  /* ---- Legend row (HTML, below graph) ---- */
  const renderLegend = () => {
    const items = [];
    if (showF)   items.push({ c: COL.f,  dashed: false, text: fam.eq });
    if (showFp)  items.push({ c: COL.fp, dashed: true,  text: fam.deq });
    if (showTan) items.push({ c: COL.tan, dashed: false, text: 'tangent at x\u2080' });
    if (!items.length) return null;
    return (
      <div style={{
        display: 'flex', gap: 14, flexWrap: 'wrap',
        marginTop: 10, paddingTop: 10,
        borderTop: `1px solid ${c.borderSoft}`,
        width: '100%', justifyContent: 'center',
      }}>
        {items.map((it, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: monoStack, fontSize: 12, color: c.inkSoft,
          }}>
            <span style={{
              display: 'inline-block', width: 22, height: 0, flexShrink: 0,
              borderTop: `2.5px ${it.dashed ? 'dashed' : 'solid'} ${it.c}`,
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
        width: '100%',
        maxWidth,
        display: 'flex',
        gap: 16,
        padding: '0 16px',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
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

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${c.borderSoft}` }}>
              <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Display</div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                <ToggleRow checked={showF}   onChange={setShowF}   swatchColor={COL.f}   dashed={false} label="f(x)" />
                <ToggleRow checked={showFp}  onChange={setShowFp}  swatchColor={COL.fp}  dashed={true}  label="f'(x)" />
                <ToggleRow checked={showTan} onChange={setShowTan} swatchColor={COL.tan} dashed={false} label="tangent" />
              </div>
            </div>

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${c.borderSoft}` }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                margin: '0 4px 8px',
              }}>
                <div style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: c.muted, fontWeight: 600,
                }}>Parameters</div>
                <button onClick={resetX0} style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${c.border}`, color: c.inkSoft,
                  padding: '3px 8px', borderRadius: 5,
                  fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                }}>Reset</button>
              </div>
              <div style={{ padding: '0 4px' }}>
                {renderX0Slider()}
              </div>
            </div>

            {showColorPicker && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${c.borderSoft}` }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  margin: '0 4px 8px',
                }}>
                  <div style={{
                    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600,
                  }}>Appearance</div>
                  <button onClick={() => setHighlightColor(defaultHighlightColor)} style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${c.border}`, color: c.inkSoft,
                    padding: '3px 8px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}>Reset</button>
                </div>
                <label style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 10, padding: '0 4px',
                  fontSize: 12, color: c.inkSoft,
                }}>
                  <span>Accent color</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{
                      fontFamily: monoStack, fontSize: 11,
                      color: c.inkSoft,
                      fontVariantNumeric: 'tabular-nums',
                    }}>{highlightColor}</span>
                    <input
                      type="color"
                      value={highlightColor}
                      onChange={e => setHighlightColor(e.target.value)}
                      style={{
                        width: 28, height: 24,
                        border: `1px solid ${c.border}`,
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
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>
                {fam.name}
              </span>
              <span style={{ display: 'inline-flex', gap: 6, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: COL.f, background: c.softer,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                  {fam.eq}
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: COL.fp, background: c.softer,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.fp }} />
                  {fam.deq}
                </span>
              </span>
            </div>

            <VisualizerWithControls
              functions={functions}
              zoom={5}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="none"
              verticalLines={verticalLines}
              customPoints={customPoints}
              tangentAt={tangentAt}
              styles={styleOverrides}
              {...mergedVisualizerProps}
            />

            {renderLegend()}

            <div style={{ marginTop: 12 }}>
              {renderPOIBar()}
            </div>

            {/* ---- CENTERPIECE: link card ---- */}
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
                  At the point x&#8320;
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 13, color: c.inkSoft,
                }}>
                  x&#8320; = {fmt(x0, 2)}
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
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                    f(x&#8320;)
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(f0)}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2, fontFamily: monoStack,
                  }}>height on f</div>
                </div>

                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.fp }} />
                    f&apos;(x&#8320;)
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(fp0)}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2, fontFamily: monoStack,
                  }}>height on f&apos;</div>
                </div>

                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.tan }} />
                    tangent slope
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(fp0)}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2, fontFamily: monoStack,
                  }}>rise over run on f</div>
                </div>
              </div>

              <div style={{
                marginTop: 10, padding: '10px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${panelTones.border}`,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 12.5, color: c.inkSoft,
              }}>
                <span>
                  The <strong style={{ color: panelTones.text }}>slope of the tangent on f</strong> at x&#8320; equals
                  the <strong style={{ color: panelTones.text }}>height of f&apos; at x&#8320;</strong>.
                </span>
              </div>
            </div>

            {/* ---- APPLIED CHIPS ---- */}
            <div style={{
              display: 'flex', gap: 6, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Applied</span>
              <span style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 9px', borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: c.accentText, background: c.accentSoft,
                border: `1px solid ${c.accentBorder}`, fontWeight: 600,
              }}>
                <span style={{ fontWeight: 600, color: highlightColor }}>x&#8320;</span>
                <span>=</span>
                <span>{fmt(x0, 2)}</span>
              </span>
              <span style={{ width: 1, height: 16, background: c.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>x&#8320; links f and f&apos;</span>
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