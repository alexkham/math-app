/**
 * FunctionMVT — v1
 *
 * Mean Value Theorem visualizer. Pick an interval [a, b] on a smooth
 * function. Draw the secant from (a, f(a)) to (b, f(b)). The theorem
 * guarantees at least one c in (a, b) where f&apos;(c) equals the secant
 * slope — the tangent at c is parallel to the secant. Tool finds every
 * such c numerically and paints each tangent.
 *
 * Pedagogical axis: f&apos;(c) = (f(b) − f(a)) / (b − a). The average rate
 * of change over the interval is achieved as an instantaneous rate at
 * some interior point. Drove 100 km in 1 hour → averaged 100 km/h →
 * speedometer hit 100 km/h at some instant.
 *
 * Built on FunctionVisualizerCorePro. The secant and each tangent are
 * passed as linear `functions` entries (the core&apos;s tangentAt is
 * singular, so we don&apos;t use it here). All lines share one slope, so
 * the visual reads as a family of parallel rules.
 *   - functions[0] = f
 *   - functions[1] = secant (deep blue, full extent)
 *   - functions[2..N] = one tangent per c (light blue)
 *   - `verticalLines` at a and b (gray, dashed)
 *   - `customPoints` for endpoint markers and c markers
 *   - `labelMode="none"` — legend in HTML below the graph
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'quadratic'
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
  f:    '#3b82f6',  // main blue — the curve
  sec:  '#1e3a8a',  // deep blue — secant
  tan:  '#60a5fa',  // light blue — tangents at each c
  link: '#94a3b8',  // gray — vertical lines at a and b
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
  a: { label: 'left endpoint a',  min: -5, max: 5, step: 0.05 },
  b: { label: 'right endpoint b', min: -5, max: 5, step: 0.05 },
};


/* ================================================================
   FAMILIES — every entry differentiable, ships closed-form f&apos;
   ================================================================ */

export const FAMILIES = {
  identity: {
    name: 'Identity',
    group: 'Polynomial',
    glyph: 'M2,22 L24,4',
    fn:  x => x,
    dfn: () => 1,
    eq:  'f(x) = x',
    defaultInterval: [-2, 2],
    cNote: '1 c (everywhere)',
  },
  quadratic: {
    name: 'Quadratic',
    group: 'Polynomial',
    glyph: 'M2,4 Q13,30 24,4',
    fn:  x => x * x,
    dfn: x => 2 * x,
    eq:  'f(x) = x\u00b2',
    defaultInterval: [-2, 2],
    cNote: '1 c (midpoint)',
  },
  cubic: {
    name: 'Cubic',
    group: 'Polynomial',
    glyph: 'M2,22 C8,2 16,30 24,8',
    fn:  x => x * x * x,
    dfn: x => 3 * x * x,
    eq:  'f(x) = x\u00b3',
    defaultInterval: [-2, 2],
    cNote: 'up to 2 c',
  },
  sine: {
    name: 'Sine',
    group: 'Transcendental',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    fn:  x => Math.sin(x),
    dfn: x => Math.cos(x),
    eq:  'f(x) = sin(x)',
    defaultInterval: [0, 2 * Math.PI],
    cNote: 'multiple c possible',
  },
  cosine: {
    name: 'Cosine',
    group: 'Transcendental',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    fn:  x => Math.cos(x),
    dfn: x => -Math.sin(x),
    eq:  'f(x) = cos(x)',
    defaultInterval: [0, Math.PI],
    cNote: 'multiple c possible',
  },
  exponential: {
    name: 'Exponential',
    group: 'Transcendental',
    glyph: 'M2,26 Q16,26 24,2',
    fn:  x => Math.exp(x),
    dfn: x => Math.exp(x),
    eq:  'f(x) = e\u02e3',
    defaultInterval: [0, 1],
    cNote: '1 c',
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   c FINDER — solve f&apos;(c) = m on (a, b) via sampling + bisection
   ================================================================ */

function findCs(fam, a, b, m, samples = 800) {
  if (!(b > a)) return [];
  const g = x => fam.dfn(x) - m;
  const dx = (b - a) / samples;
  const roots = [];
  let prev = g(a);
  for (let i = 1; i <= samples; i++) {
    const x = a + i * dx;
    const cur = g(x);
    if (!Number.isFinite(prev) || !Number.isFinite(cur)) { prev = cur; continue; }
    if (prev === 0) { roots.push(a + (i - 1) * dx); prev = cur; continue; }
    if (prev * cur < 0) {
      let lo = a + (i - 1) * dx, hi = x;
      for (let j = 0; j < 50; j++) {
        const mid = (lo + hi) / 2;
        const gm = g(mid);
        if (!Number.isFinite(gm) || Math.abs(gm) < 1e-12) { lo = hi = mid; break; }
        if (g(lo) * gm < 0) hi = mid; else lo = mid;
      }
      roots.push((lo + hi) / 2);
    }
    prev = cur;
  }
  const out = [];
  for (const r of roots) {
    if (!out.length || Math.abs(r - out[out.length - 1]) > Math.max(dx * 2, 1e-6)) out.push(r);
  }
  return out;
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
    const y = fam.fn(t);
    if (Number.isFinite(y)) { if (y < lo) lo = y; if (y > hi) hi = y; }
  }
  hi = Math.min(hi, 20);
  lo = Math.max(lo, -20);
  lo = Math.min(lo, 0);
  hi = Math.max(hi, 0);
  const pad = (hi - lo) * 0.18 + 0.5;
  return { yMin: lo - pad, yMax: hi + pad };
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionMVT({
  initialFamily = 'quadratic',
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
  const [showF,         setShowF]         = useState(true);
  const [showSecant,    setShowSecant]    = useState(true);
  const [showTangents,  setShowTangents]  = useState(true);
  const [showEndpoints, setShowEndpoints] = useState(true);
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

  /* Normalize endpoints: always work with aN < bN */
  const aN = Math.min(a, b);
  const bN = Math.max(a, b);
  const validInterval = (bN - aN) > 1e-6;

  const fa = useMemo(() => fam.fn(aN), [fam, aN]);
  const fb = useMemo(() => fam.fn(bN), [fam, bN]);
  const m  = useMemo(() => validInterval ? (fb - fa) / (bN - aN) : NaN, [validInterval, fa, fb, aN, bN]);
  const cs = useMemo(() => validInterval && Number.isFinite(m) ? findCs(fam, aN, bN, m) : [], [fam, aN, bN, m, validInterval]);

  /* Functions array: f, secant (linear), one tangent per c (linear). */
  const functions = useMemo(() => {
    const list = [
      {
        fn: fam.fn,
        color: COL.f,
        label: 'f',
        formula: fam.eq,
        visible: showF,
        stroke: 2.25,
      },
    ];
    if (validInterval && showSecant) {
      list.push({
        fn: x => fa + m * (x - aN),
        color: COL.sec,
        label: 'secant',
        formula: `y = f(a) + ${fmt(m)}\u00b7(x \u2212 a)`,
        visible: true,
        stroke: 2,
      });
    }
    if (validInterval && showTangents) {
      cs.forEach((c, i) => {
        const fc = fam.fn(c);
        list.push({
          fn: x => fc + m * (x - c),
          color: COL.tan,
          label: cs.length > 1 ? `tangent at c${i + 1}` : 'tangent at c',
          formula: `y = f(c) + ${fmt(m)}\u00b7(x \u2212 c)`,
          visible: true,
          stroke: 2,
        });
      });
    }
    return list;
  }, [fam, showF, showSecant, showTangents, validInterval, cs, m, fa, aN]);

  /* Vertical lines at a and b. */
  const verticalLines = useMemo(() => {
    if (!showEndpoints || !validInterval) return [];
    return [
      { x: aN, color: COL.link, stroke: 1.25, pattern: [5, 4], label: `a = ${fmt(aN, 2)}` },
      { x: bN, color: COL.link, stroke: 1.25, pattern: [5, 4], label: `b = ${fmt(bN, 2)}` },
    ];
  }, [aN, bN, showEndpoints, validInterval]);

  /* Marker points: endpoints (closed deep blue) + each c (light blue). */
  const customPoints = useMemo(() => {
    const pts = [];
    if (validInterval && showEndpoints) {
      if (Number.isFinite(fa)) pts.push({ x: aN, y: fa, color: COL.sec, label: `(a, f(a)) = (${fmt(aN, 2)}, ${fmt(fa)})` });
      if (Number.isFinite(fb)) pts.push({ x: bN, y: fb, color: COL.sec, label: `(b, f(b)) = (${fmt(bN, 2)}, ${fmt(fb)})` });
    }
    if (validInterval && showTangents) {
      cs.forEach((c, i) => {
        const y = fam.fn(c);
        if (!Number.isFinite(y)) return;
        const tag = cs.length > 1 ? `c${i + 1} = ${fmt(c)}` : `c = ${fmt(c)}`;
        pts.push({ x: c, y, color: COL.tan, label: tag });
      });
    }
    return pts;
  }, [fam, aN, bN, fa, fb, cs, showEndpoints, showTangents, validInterval]);

  /* View bounds. */
  const viewport = useMemo(() => {
    const xMin = -5, xMax = 5;
    const yb = autoYBounds(fam, xMin, xMax);
    return { xMin, xMax, ...yb };
  }, [fam]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    const intro =
      `## MVT on the ${fam.name.toLowerCase()}\n\n` +
      `Pick any interval. Connect the two endpoints with a secant line. The MVT guarantees at least one c inside $(a, b)$ where the curve&apos;s tangent is parallel to that secant.\n\n` +
      `**Function** · $${fam.eq}$\n\n`;

    const rightNow = validInterval
      ? `### Right now\n\nOn $[a, b] = [${fmt(aN, 2)}, ${fmt(bN, 2)}]$: secant slope $= ${fmt(m)}$. ` +
        (cs.length === 0
          ? `No c found in this interval.`
          : `Found ${cs.length} value${cs.length === 1 ? '' : 's'} of c where $f'(c)$ matches: $${cs.map(c => fmt(c)).join(', ')}$.`)
      : `### Right now\n\nInterval too narrow.`;

    const howFound =
      `\n\n### How c is found\n\n` +
      `Compute the secant slope $m = (f(b) - f(a))/(b - a)$. Then solve $f'(c) = m$ for $c$ in $(a, b)$. For the quadratic, that&apos;s exactly the midpoint $(a+b)/2$. For other functions there can be more than one c.`;

    return intro + rightNow + howFound;
  }, [fam, aN, bN, m, cs, validInterval]);

  const conceptsContent =
    '## The Mean Value Theorem\n\n' +
    'If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there is at least one point $c \\in (a, b)$ where\n\n' +
    '$$f\'(c) = \\frac{f(b) - f(a)}{b - a}.$$\n\n' +
    'The left side is the slope of the curve at $c$. The right side is the slope of the secant line connecting the endpoints. They&apos;re equal at some interior point.\n\n' +
    '### What it really says\n\n' +
    'Pick the average rate of change of $f$ over $[a, b]$. That average is the secant slope. The theorem promises that the curve achieves that exact rate of change as an instantaneous slope somewhere in the middle.\n\n' +
    'Drive 100 km in 1 hour. Your average speed was 100 km/h. The MVT says at some instant, your speedometer read exactly 100 km/h. You can&apos;t average 100 without hitting 100 at least once.\n\n' +
    '### Why differentiability matters\n\n' +
    'Without differentiability you can dodge the conclusion. A function with a sharp corner can have a secant slope it never matches as an instantaneous slope — at the corner the "slope" isn&apos;t a single number.\n\n' +
    '### Rolle&apos;s theorem — a special case\n\n' +
    'When $f(a) = f(b)$, the secant slope is zero. The MVT gives you $f\'(c) = 0$: a horizontal tangent somewhere between. That&apos;s Rolle&apos;s theorem.\n\n' +
    '### What it powers\n\n' +
    'The MVT is the engine behind a lot of calculus: if $f\' = 0$ on an interval, $f$ is constant there; if $f\' > 0$, $f$ is increasing; if two functions have the same derivative, they differ by a constant. Each of these comes from the MVT applied to a cleverly chosen interval.';

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
        borderTop: `2.5px ${swatchStyle} ${swatchColor}`,
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
    if (showF)         items.push({ c: COL.f,    style: 'solid',  text: fam.eq });
    if (showSecant)    items.push({ c: COL.sec,  style: 'solid',  text: 'secant from (a, f(a)) to (b, f(b))' });
    if (showTangents)  items.push({ c: COL.tan,  style: 'solid',  text: 'tangent at c (parallel to secant)' });
    if (showEndpoints) items.push({ c: COL.link, style: 'dashed', text: 'x = a, x = b' });
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

  /* Subscript digits 0–9 */
  const subDigit = (n) => {
    return String(n).split('').map(d => String.fromCharCode(0x2080 + +d)).join('');
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
          <nav style={{ ...card, width: 240, padding: 10, flexShrink: 0 }}>
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
                <Toggle checked={showF}         onChange={setShowF}         swatchColor={COL.f}    swatchStyle="solid"  label="f(x)" />
                <Toggle checked={showSecant}    onChange={setShowSecant}    swatchColor={COL.sec}  swatchStyle="solid"  label="secant" />
                <Toggle checked={showTangents}  onChange={setShowTangents}  swatchColor={COL.tan}  swatchStyle="solid"  label="tangent at c" />
                <Toggle checked={showEndpoints} onChange={setShowEndpoints} swatchColor={COL.link} swatchStyle="dashed" label="a, b lines" />
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
                {renderSlider('b', b, setB, { badge: 'interval' })}
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
              verticalLines={verticalLines}
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
                }}>Mean Value Theorem on [a, b]</span>
                <span style={{
                  fontFamily: monoStack, fontSize: 13, color: ctok.inkSoft,
                }}>
                  [a, b] = [{fmt(aN, 2)}, {fmt(bN, 2)}]
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
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.sec }} />
                    Secant slope
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(m)}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>(f(b) &minus; f(a)) / (b &minus; a)</div>
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
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.tan }} />
                    c values found
                  </div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{cs.length === 0 ? 'none' : cs.length}</div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>{cs.length
                    ? 'at c = ' + cs.map(c => fmt(c, 3)).join(', ')
                    : (validInterval ? 'no interior solution' : 'interval too narrow')}</div>
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
                    f&apos;(c) at each c
                  </div>
                  <div style={{
                    fontFamily: monoStack,
                    fontSize: cs.length > 1 ? 14 : 18,
                    fontWeight: 700,
                    color: ctok.ink, fontVariantNumeric: 'tabular-nums',
                  }}>
                    {cs.length ? cs.map(c => fmt(fam.dfn(c), 3)).join(', ') : '\u2014'}
                  </div>
                  <div style={{
                    fontSize: 11, color: ctok.muted, marginTop: 2, fontFamily: monoStack,
                  }}>matches secant slope</div>
                </div>
              </div>

              {/* Per-c detail rows */}
              {cs.length > 0 && (
                <div style={{
                  marginTop: 10,
                  display: 'flex', flexDirection: 'column', gap: 6,
                }}>
                  {cs.map((c, i) => (
                    <div key={i} style={{
                      background: darkMode ? '#0f172a' : '#fff',
                      border: `1px solid ${panelTones.border}`,
                      borderRadius: 6, padding: '8px 12px',
                      display: 'flex', alignItems: 'center', gap: 12,
                      fontFamily: monoStack, fontSize: 12.5, color: ctok.ink,
                      fontVariantNumeric: 'tabular-nums',
                      flexWrap: 'wrap',
                    }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700,
                        padding: '2px 7px', borderRadius: 3,
                        background: COL.tan, color: '#fff',
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>{cs.length > 1 ? `c${subDigit(i + 1)}` : 'c'}</span>
                      <span>c = <strong style={{ color: ctok.ink }}>{fmt(c)}</strong></span>
                      <span style={{ color: ctok.muted }}>&rarr;</span>
                      <span>f&apos;(c) = <strong style={{ color: ctok.ink }}>{fmt(fam.dfn(c))}</strong></span>
                      <span style={{
                        marginLeft: 'auto', color: ctok.muted, fontSize: 11,
                      }}>= secant slope {fmt(m)}</span>
                    </div>
                  ))}
                </div>
              )}

              <div style={{
                marginTop: 10, padding: '10px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${panelTones.border}`,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 12.5, color: ctok.inkSoft,
              }}>
                <span>
                  The <strong style={{ color: panelTones.text }}>secant slope</strong> from a to b
                  equals <strong style={{ color: panelTones.text }}>f&apos;(c)</strong> at every c —
                  the tangent at c is parallel to the secant.
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: 9.5, fontWeight: 700,
                  padding: '2px 7px', borderRadius: 3,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  color: panelTones.text, background: panelTones.soft,
                }}>MVT</span>
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
              }}>tangent &parallel; secant</span>
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