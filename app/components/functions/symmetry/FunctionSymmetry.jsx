/**
 * FunctionSymmetry — v1
 *
 * Pick a function, see three curves on one graph:
 *   - f(x)      — solid blue
 *   - f(−x)     — dashed amber (the y-axis mirror)
 *   - −f(−x)    — dotted teal  (the 180° rotation about the origin)
 *
 * The visual proof:
 *   - Even  → blue and amber overlap (dashes punch through the solid)
 *   - Odd   → blue and teal  overlap (dots  punch through the solid)
 *   - Neither → no overlap
 *
 * Three things happen on screen:
 *   1. The three curves are drawn with deliberately distinct stroke
 *      patterns so overlapping curves are still visible as two
 *      lines, not one.
 *   2. Intersections of f(x) and f(−x) are marked with purple
 *      points. For odd functions these are zeros of f; for even
 *      they vanish (the curves coincide everywhere); for neither
 *      they're wherever the function and its y-mirror cross.
 *   3. A derivation card walks through the algebra for the chosen
 *      family: substitute −x, simplify, compare to f(x) and −f(x).
 *
 * Sliders (a, k, b, h) transform g(x) = a·f(b(x − h)) + k. Symmetry
 * is verdict-detected on the transformed function at every render,
 * not assumed from the base family — so shifting an even function
 * (h ≠ 0) correctly turns the verdict to "neither" live.
 *
 * Built on FunctionVisualizerCorePro v2 (uses the newly-wired
 * `customPoints` prop to place intersection markers).
 *
 * PROPS (all optional)
 *   initialFamily   : string        — default 'quadratic'
 *   families        : object        — override FAMILIES
 *   visualizerProps : object
 *   infoPanelProps  : object
 *   darkMode        : boolean
 *   showPicker      : boolean
 *   showSliders     : boolean
 *   showLegend      : boolean       — show curve visibility toggles
 *   showInfoPanel   : boolean
 *   maxWidth        : string|number — default '80vw'
 *
 * RULES OBSERVED:
 *   - Never put $...$ inside **...**.
 *   - <style> blocks use dangerouslySetInnerHTML.
 *   - Modest canvas height; chip strips stay above the fold.
 */

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCorePro';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS
   ================================================================ */

const COL = {
  f:           '#3b82f6', // blue   — the function itself
  fNeg:        '#f59e0b', // amber  — y-axis mirror, dashed
  fNegNeg:     '#14b8a6', // teal   — origin mirror, dotted
  intersect:   '#8b5cf6', // purple — intersection markers
  evenAccent:  '#3b82f6',
  oddAccent:   '#14b8a6',
  neitherAcc:  '#94a3b8',
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v) {
  if (!Number.isFinite(v)) return '—';
  const r = Math.round(v * 100) / 100;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  a: { label: 'vertical scale a',   min: -3, max: 3, step: 0.05, def: 1 },
  k: { label: 'vertical shift k',   min: -6, max: 6, step: 0.1,  def: 0 },
  b: { label: 'horizontal scale b', min: -3, max: 3, step: 0.05, def: 1 },
  h: { label: 'horizontal shift h', min: -6, max: 6, step: 0.1,  def: 0 },
};

const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0 };


/* ================================================================
   FAMILIES
   ----------------------------------------------------------------
   Grouped by inherent symmetry of the BASE function:
     - 'Even'    : f(−x) = f(x)         (y-axis mirror coincides)
     - 'Odd'     : f(−x) = −f(x)        (origin rotation coincides)
     - 'Neither' : no symmetry, or symmetry obstructed by domain
   The picker groups by these. The runtime verdict on g(x) under
   the current (a, k, b, h) is detected numerically — it can differ
   from the base when sliders break the symmetry.
   ================================================================ */

export const FAMILIES = {
  /* ---- EVEN ---- */
  quadratic: {
    name: 'Quadratic',
    symGroup: 'Even',
    glyph: 'M2,4 Q13,30 24,4',
    base: x => x * x,
    eqBase: 'x²',
    bodyOf: i => `(${i})²`,
    baseSymmetry: 'even',
    negFormula:  '(−x)²',
    simplified:  'x²',
    conclusion:  'f(−x) = x² = f(x)',
  },
  absolute: {
    name: 'Absolute',
    symGroup: 'Even',
    glyph: 'M2,4 L13,24 L24,4',
    base: x => Math.abs(x),
    eqBase: '|x|',
    bodyOf: i => `|${i}|`,
    baseSymmetry: 'even',
    negFormula:  '|−x|',
    simplified:  '|x|',
    conclusion:  'f(−x) = |x| = f(x)',
  },
  cosine: {
    name: 'Cosine',
    symGroup: 'Even',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    base: x => Math.cos(x),
    eqBase: 'cos(x)',
    bodyOf: i => `cos(${i})`,
    baseSymmetry: 'even',
    negFormula:  'cos(−x)',
    simplified:  'cos(x)',
    conclusion:  'f(−x) = cos(x) = f(x)',
  },

  /* ---- ODD ---- */
  identity: {
    name: 'Identity',
    symGroup: 'Odd',
    glyph: 'M2,22 L24,4',
    base: x => x,
    eqBase: 'x',
    bodyOf: i => `${i}`,
    baseSymmetry: 'odd',
    negFormula:  '−x',
    simplified:  '−x',
    conclusion:  'f(−x) = −x = −f(x)',
  },
  cubic: {
    name: 'Cubic',
    symGroup: 'Odd',
    glyph: 'M2,22 C8,2 16,30 24,8',
    base: x => x * x * x,
    eqBase: 'x³',
    bodyOf: i => `(${i})³`,
    baseSymmetry: 'odd',
    negFormula:  '(−x)³',
    simplified:  '−x³',
    conclusion:  'f(−x) = −x³ = −f(x)',
  },
  sine: {
    name: 'Sine',
    symGroup: 'Odd',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    base: x => Math.sin(x),
    eqBase: 'sin(x)',
    bodyOf: i => `sin(${i})`,
    baseSymmetry: 'odd',
    negFormula:  'sin(−x)',
    simplified:  '−sin(x)',
    conclusion:  'f(−x) = −sin(x) = −f(x)',
  },
  reciprocal: {
    name: 'Reciprocal',
    symGroup: 'Odd',
    glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    base: x => (x === 0 ? NaN : 1 / x),
    eqBase: '1/x',
    bodyOf: i => `1/(${i})`,
    baseSymmetry: 'odd',
    negFormula:  '1/(−x)',
    simplified:  '−1/x',
    conclusion:  'f(−x) = −1/x = −f(x)',
  },

  /* ---- NEITHER ---- */
  sqrt: {
    name: 'Square root',
    symGroup: 'Neither',
    glyph: 'M2,24 Q4,8 24,4',
    base: x => (x >= 0 ? Math.sqrt(x) : NaN),
    eqBase: '√x',
    bodyOf: i => `√(${i})`,
    baseSymmetry: 'neither',
    negFormula:  '√(−x)',
    simplified:  'undefined for x > 0',
    conclusion:  'domain blocks the comparison',
  },
  exponential: {
    name: 'Exponential',
    symGroup: 'Neither',
    glyph: 'M2,26 Q16,26 24,2',
    base: x => Math.exp(x),
    eqBase: 'eˣ',
    bodyOf: i => `e^(${i})`,
    baseSymmetry: 'neither',
    negFormula:  'e^(−x)',
    simplified:  '1/eˣ',
    conclusion:  'f(−x) = 1/eˣ — neither equal to f(x) nor to −f(x)',
  },
  logarithmic: {
    name: 'Logarithmic',
    symGroup: 'Neither',
    glyph: 'M2,2 Q10,26 24,26',
    base: x => (x > 0 ? Math.log(x) : NaN),
    eqBase: 'ln(x)',
    bodyOf: i => `ln(${i})`,
    baseSymmetry: 'neither',
    negFormula:  'ln(−x)',
    simplified:  'undefined for x > 0',
    conclusion:  'domain blocks the comparison',
  },
  quadraticPlusLinear: {
    name: 'x² + x',
    symGroup: 'Neither',
    glyph: 'M2,16 Q9,30 14,20 T24,4',
    base: x => x * x + x,
    eqBase: 'x² + x',
    bodyOf: i => `(${i})² + (${i})`,
    baseSymmetry: 'neither',
    negFormula:  '(−x)² + (−x)',
    simplified:  'x² − x',
    conclusion:  'f(−x) = x² − x ≠ f(x), and ≠ −f(x) = −x² − x',
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   EQUATION BUILDER (same shape as Domain / Range)
   ================================================================ */

function buildForwardEq(fam, p) {
  const { a, b, h, k } = p;
  let inner = 'x';
  if (h !== 0) inner = `x ${h >= 0 ? '−' : '+'} ${fmt(Math.abs(h))}`;
  if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
  let body = fam.bodyOf(inner);
  let out;
  if (a === -1) out = `−${body}`;
  else if (a !== 1) out = `${fmt(a)}·${body}`;
  else out = body;
  if (k !== 0) out += ` ${k >= 0 ? '+' : '−'} ${fmt(Math.abs(k))}`;
  return out;
}


/* ================================================================
   SYMMETRY DETECTION (runtime, on the transformed g)
   ================================================================ */

function detectSymmetry(fn, xMin = -5, xMax = 5, samples = 60, tol = 1e-6) {
  let evenMax = 0, oddMax = 0, valid = 0;
  for (let i = 1; i <= samples; i++) {
    const x = (i / samples) * Math.max(Math.abs(xMin), Math.abs(xMax));
    let a, b;
    try { a = fn(x); b = fn(-x); } catch { continue; }
    if (!Number.isFinite(a) || !Number.isFinite(b)) continue;
    evenMax = Math.max(evenMax, Math.abs(a - b));
    oddMax  = Math.max(oddMax,  Math.abs(a + b));
    valid++;
  }
  if (valid < samples * 0.3) return 'neither';   // domain too restricted to compare
  if (evenMax < tol) return 'even';
  if (oddMax  < tol) return 'odd';
  return 'neither';
}


/* ================================================================
   INTERSECTION FINDER — bisection on f(x) − g(x)
   ================================================================ */

function findIntersections(fA, fB, xMin, xMax, samples = 120, tol = 1e-7) {
  const pts = [];
  const step = (xMax - xMin) / samples;
  let prevD = null, prevX = null;
  for (let i = 0; i <= samples; i++) {
    const x = xMin + i * step;
    let d;
    try { d = fA(x) - fB(x); } catch { d = NaN; }
    if (!Number.isFinite(d)) { prevD = null; prevX = null; continue; }
    if (prevD !== null && prevD * d < 0) {
      let a = prevX, b = x;
      for (let j = 0; j < 40; j++) {
        const m = (a + b) / 2;
        let dm;
        try { dm = fA(m) - fB(m); } catch { dm = NaN; }
        if (!Number.isFinite(dm) || Math.abs(dm) < tol) { a = b = m; break; }
        let da;
        try { da = fA(a) - fB(a); } catch { da = NaN; }
        if (da * dm < 0) b = m; else a = m;
      }
      const xc = (a + b) / 2;
      let yc;
      try { yc = fA(xc); } catch { yc = NaN; }
      if (Number.isFinite(yc)) pts.push({ x: xc, y: yc });
    }
    prevD = d; prevX = x;
  }
  return pts;
}


/* ================================================================
   PICKER GROUPING
   ================================================================ */

function buildPickerEntries(families) {
  const out = [];
  let lastGroup;
  Object.entries(families).forEach(([key, f]) => {
    const g = f.symGroup || 'Other';
    if (g !== lastGroup) {
      out.push({ type: 'header', label: g, key: `__hdr_${g}` });
      lastGroup = g;
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
   VERDICT VISUAL (small pill + accent)
   ================================================================ */

const VERDICT_META = {
  even:    { label: 'Even',    accent: COL.evenAccent,   blurb: 'symmetric across the y-axis' },
  odd:     { label: 'Odd',     accent: COL.oddAccent,    blurb: 'symmetric about the origin' },
  neither: { label: 'Neither', accent: COL.neitherAcc,   blurb: 'no symmetry detected' },
};


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionSymmetry({
  initialFamily = 'quadratic',
  families = DEFAULT_FAMILIES,
  visualizerProps = {},
  infoPanelProps = {},
  darkMode = false,
  showPicker = true,
  showSliders = true,
  showLegend = true,
  showInfoPanel = true,
  maxWidth = '80vw',
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

  const [current, setCurrent] = useState(startKey);
  const [params, setParams] = useState({ ...DEFAULT_PARAMS });
  const [vis, setVis] = useState({ f: true, neg: true, negneg: true });

  const fam = families[current] || families[familyKeys[0]];
  const { a, b, h, k } = params;

  const forwardFn = useMemo(() => {
    if (a === 0 || b === 0) return () => NaN;
    return x => a * fam.base(b * (x - h)) + k;
  }, [fam, a, b, h, k]);

  const fNegFn    = useMemo(() => (x => forwardFn(-x)),  [forwardFn]);
  const fNegNegFn = useMemo(() => (x => -forwardFn(-x)), [forwardFn]);

  const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);

  /* Runtime verdict — sampled on transformed g */
  const verdict = useMemo(() => detectSymmetry(forwardFn), [forwardFn]);
  const meta    = VERDICT_META[verdict];

  /* Intersections of f and f(−x). Only marked when curves don't coincide
     (i.e., verdict != 'even'). Otherwise the entire curve is the "intersection". */
  const intersections = useMemo(() => {
    if (verdict === 'even') return [];
    const pts = findIntersections(forwardFn, fNegFn, -8, 8);
    return pts.filter(p => p.y >= -10 && p.y <= 10);
  }, [forwardFn, fNegFn, verdict]);

  const functions = useMemo(() => ([
    { fn: forwardFn, color: COL.f,       label: 'f',       formula: `f(x) = ${forwardEq}`,
      visible: vis.f,      stroke: 2.5, pattern: [] },
    { fn: fNegFn,    color: COL.fNeg,    label: 'f(−x)',   formula: 'f(−x)',
      visible: vis.neg,    stroke: 2,   pattern: [9, 5] },
    { fn: fNegNegFn, color: COL.fNegNeg, label: '−f(−x)',  formula: '−f(−x)',
      visible: vis.negneg, stroke: 2,   pattern: [2, 5] },
  ]), [forwardFn, fNegFn, fNegNegFn, forwardEq, vis]);

  const customPoints = useMemo(() =>
    intersections.map(p => ({ x: p.x, y: p.y, color: COL.intersect, label: 'intersection' })),
    [intersections]
  );

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    const isTransformed = a !== 1 || k !== 0 || b !== 1 || h !== 0;
    const baseVerdict = fam.baseSymmetry;
    const verdictMatchesBase = verdict === baseVerdict;

    return (
      `## ${fam.name} — symmetry\n\n` +
      `**Base function** · $f(x) = ${fam.eqBase}$\n\n` +
      `### Derivation for the base function\n\n` +
      `Substitute $-x$ in place of $x$:\n\n` +
      `$$f(-x) = ${fam.negFormula} = ${fam.simplified}$$\n\n` +
      (baseVerdict === 'neither'
        ? `The result ${fam.conclusion}. So $f$ is **neither** even nor odd.\n\n`
        : `Compare to $f(x) = ${fam.eqBase}$${baseVerdict === 'odd' ? ` and $-f(x) = -${fam.eqBase}$` : ''}. We see ${fam.conclusion}, so $f$ is **${baseVerdict}**.\n\n`) +
      (isTransformed
        ? `### With the current parameters\n\n` +
          `$g(x) = ${forwardEq}$\n\n` +
          `The runtime check on $g$ says: **${meta.label.toLowerCase()}**.\n\n` +
          (verdictMatchesBase
            ? `The transformation preserved symmetry. For an ${baseVerdict} base function, this happens when ${baseVerdict === 'even' ? '$h = 0$' : '$h = 0$ and $k = 0$'} (input-side shift breaks the y-axis mirror; output shift breaks the origin rotation).`
            : `The transformation **broke** the symmetry. ${baseVerdict === 'even' ? 'A horizontal shift $h \\ne 0$ moves the mirror axis off the y-axis.' : (baseVerdict === 'odd' ? 'A vertical shift $k \\ne 0$ moves the rotation centre off the origin; a horizontal shift $h \\ne 0$ moves the input axis.' : 'Transformations of a neither function don\'t generally produce symmetry.')}`)
        : `Try moving the sliders to see how shifts break the symmetry.`)
    );
  }, [fam, params, forwardEq, verdict, meta]);

  const conceptsContent =
    '## What does symmetry mean for a function?\n\n' +
    'Two visual symmetries show up over and over:\n\n' +
    '### Even — mirror across the y-axis\n\n' +
    'A function is **even** when $f(-x) = f(x)$ for every $x$. Geometrically: fold the plane along the y-axis and the graph lands exactly on itself.\n\n' +
    'Classic examples: $x^2$, $|x|$, $\\cos(x)$, any polynomial with only even powers.\n\n' +
    '### Odd — rotation 180° about the origin\n\n' +
    'A function is **odd** when $f(-x) = -f(x)$. Geometrically: rotate the graph 180° around the origin and it lands on itself. Equivalently, reflect across the y-axis *and* across the x-axis — the two flips cancel out.\n\n' +
    'Classic examples: $x$, $x^3$, $\\sin(x)$, $1/x$. Note that every odd function defined at $0$ must satisfy $f(0) = -f(0)$, so $f(0) = 0$ — odd graphs pass through the origin.\n\n' +
    '### Neither\n\n' +
    'Most functions are neither even nor odd. $e^x$ grows in one direction, $\\sqrt{x}$ doesn\'t even reach negative inputs, $x^2 + x$ has a tilted parabola. The y-axis mirror lands somewhere else, the origin rotation lands somewhere else.\n\n' +
    '### How the visual proof works\n\n' +
    'The graph shows three curves:\n\n' +
    '- $f(x)$ — solid blue\n' +
    '- $f(-x)$ — dashed amber, the y-axis mirror\n' +
    '- $-f(-x)$ — dotted teal, the 180° rotation\n\n' +
    'When two curves coincide you see them as overlapping (dashes punching through the solid line). Even → blue and amber overlap. Odd → blue and teal overlap. Neither → none overlap.\n\n' +
    'Purple dots mark where $f(x)$ and $f(-x)$ cross. For odd functions these are the zeros of $f$ (since $f(x) = f(-x)$ together with $f(-x) = -f(x)$ forces $f(x) = 0$). For even, the curves coincide everywhere and no dots appear. For neither, the crossings are wherever they happen.\n\n' +
    '### Why transformations break symmetry\n\n' +
    'Symmetry is fragile. Take $g(x) = a \\cdot f(b(x - h)) + k$:\n\n' +
    '- $h \\ne 0$ shifts the input axis — the y-axis mirror is no longer at $x = 0$, breaking even symmetry.\n' +
    '- $k \\ne 0$ shifts every output — the rotation center moves off the origin, breaking odd symmetry.\n' +
    '- $a$ and $b$ rescale but don\'t move the axes, so on their own they preserve whatever symmetry the base function had (with the caveat that a negative $a$ flips an odd function to another odd function, and an even to another even).';

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

  /* Verdict tone (soft bg, dark text) derived from accent */
  const verdictTone = useMemo(() => {
    const hex = meta.accent.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const bb = parseInt(hex.slice(4, 6), 16);
    const rgba = (al) => `rgba(${r}, ${g}, ${bb}, ${al})`;
    const hx = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
    const darken = (f) => `#${hx(r * f)}${hx(g * f)}${hx(bb * f)}`;
    return {
      soft:   darkMode ? rgba(0.22) : rgba(0.14),
      border: darkMode ? rgba(0.55) : rgba(0.45),
      text:   darkMode ? rgba(0.95) : darken(0.4),
      main:   meta.accent,
    };
  }, [meta.accent, darkMode]);

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 460,
    ...visualizerProps,
  };

  const pickerEntries = buildPickerEntries(families);

  const selectFamily = (key) => {
    setCurrent(key);
    setParams({ ...DEFAULT_PARAMS });
  };

  const setParam = (kk, v) => setParams(prev => ({ ...prev, [kk]: v }));
  const resetParams = () => setParams({ ...DEFAULT_PARAMS });

  const renderSlider = (key) => {
    const def = PARAM_DEFS[key];
    return (
      <div key={key}>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span>{def.label}</span>
          <span style={{ fontFamily: monoStack, color: COL.f, fontWeight: 600 }}>
            {fmt(params[key])}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={params[key]}
          onChange={e => setParam(key, parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: COL.f, cursor: 'pointer' }}
        />
      </div>
    );
  };

  const LegendToggle = ({ k, swatchColor, dashStyle, label }) => (
    <label style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '6px 4px', cursor: 'pointer',
      fontSize: 12.5, color: c.inkSoft,
    }}>
      <input
        type="checkbox"
        checked={vis[k]}
        onChange={e => setVis(v => ({ ...v, [k]: e.target.checked }))}
        style={{ accentColor: swatchColor }}
      />
      <span style={{ display: 'inline-block', width: 28, height: 0,
        borderTop: `2.5px ${dashStyle} ${swatchColor}`,
        flexShrink: 0,
      }} />
      <span style={{ fontFamily: monoStack, fontSize: 12 }}>{label}</span>
    </label>
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

            {showLegend && (
              <div style={{
                marginTop: 12, paddingTop: 12,
                borderTop: `1px solid ${c.borderSoft}`,
              }}>
                <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Curves</div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                  <LegendToggle k="f"      swatchColor={COL.f}       dashStyle="solid"  label="f(x)" />
                  <LegendToggle k="neg"    swatchColor={COL.fNeg}    dashStyle="dashed" label="f(−x)" />
                  <LegendToggle k="negneg" swatchColor={COL.fNegNeg} dashStyle="dotted" label="−f(−x)" />
                </div>
              </div>
            )}

            {showSliders && (
              <div style={{
                marginTop: 12, paddingTop: 12,
                borderTop: `1px solid ${c.borderSoft}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
                  <div style={{
                    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600,
                  }}>Parameters</div>
                  <button onClick={resetParams} style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${c.border}`, color: c.inkSoft,
                    padding: '3px 8px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}>Reset</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 4px' }}>
                  {['a', 'k', 'b', 'h'].map(renderSlider)}
                </div>
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
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 8px', borderRadius: 5,
                color: COL.f, background: c.softer,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                f(x) = {forwardEq}
              </span>
            </div>

            <VisualizerWithControls
              functions={functions}
              zoom={6}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              customPoints={customPoints}
              specialPointLabelMode="hover"
              {...mergedVisualizerProps}
            />

            {/* ---- VERDICT + DERIVATION CARD ---- */}
            <div style={{
              marginTop: 12,
              background: verdictTone.soft,
              border: `1px solid ${verdictTone.border}`,
              borderLeft: `4px solid ${meta.accent}`,
              borderRadius: 8,
              padding: '14px 16px',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                gap: 12, marginBottom: 10, flexWrap: 'wrap',
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: verdictTone.text, fontWeight: 700,
                }}>
                  Verdict
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 16,
                  color: c.ink, fontWeight: 700,
                }}>
                  {meta.label.toLowerCase()}
                </span>
                <span style={{ fontSize: 12, color: c.inkSoft, fontStyle: 'italic' }}>
                  {meta.blurb}
                </span>
              </div>

              {/* Per-family derivation, base function only — the runtime
                  verdict above already covers what happens after sliders. */}
              <div style={{
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${darkMode ? '#1e293b' : verdictTone.border}`,
                borderRadius: 6,
                padding: '10px 12px',
                fontFamily: monoStack, fontSize: 13, color: c.inkSoft,
                lineHeight: 1.7,
              }}>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ color: c.muted, marginRight: 6 }}>1.</span>
                  f(x) = <span style={{ color: c.ink, fontWeight: 600 }}>{fam.eqBase}</span>
                </div>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ color: c.muted, marginRight: 6 }}>2.</span>
                  substitute &minus;x:&nbsp;
                  f(&minus;x) = <span style={{ color: c.ink }}>{fam.negFormula}</span>
                  {fam.negFormula !== fam.simplified && (
                    <> = <span style={{ color: c.ink, fontWeight: 600 }}>{fam.simplified}</span></>
                  )}
                </div>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ color: c.muted, marginRight: 6 }}>3.</span>
                  compare:&nbsp;
                  <span style={{ color: verdictTone.text, fontWeight: 600 }}>{fam.conclusion}</span>
                </div>
                {verdict !== fam.baseSymmetry && (
                  <div style={{
                    marginTop: 8, paddingTop: 8,
                    borderTop: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
                    color: c.muted, fontFamily: fontStack, fontSize: 12,
                  }}>
                    Note: the base function is{' '}
                    <span style={{ color: c.ink, fontWeight: 600 }}>{fam.baseSymmetry}</span>,
                    but the transformation broke the symmetry. The runtime verdict on g(x) is{' '}
                    <span style={{ color: verdictTone.text, fontWeight: 600 }}>{verdict}</span>.
                  </div>
                )}
              </div>

              {intersections.length > 0 && (
                <div style={{
                  marginTop: 10, padding: '8px 12px',
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
                  borderRadius: 6,
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: monoStack, fontSize: 12, color: c.inkSoft,
                }}>
                  <span style={{
                    display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
                    background: COL.intersect,
                  }} />
                  <span style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600,
                  }}>f ∩ f(−x)</span>
                  <span>
                    {intersections.length === 1
                      ? `at (${fmt(intersections[0].x)}, ${fmt(intersections[0].y)})`
                      : `${intersections.length} points: ${intersections.slice(0, 4).map(p => `(${fmt(p.x)}, ${fmt(p.y)})`).join(', ')}${intersections.length > 4 ? ', …' : ''}`}
                  </span>
                </div>
              )}
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
              {['a', 'k', 'b', 'h'].map(kk => {
                const def = PARAM_DEFS[kk];
                const active = params[kk] !== def.def;
                return (
                  <span key={kk} style={{
                    fontFamily: monoStack, fontSize: 11,
                    padding: '3px 9px', borderRadius: 5,
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    color: active ? c.accentText : c.muted,
                    background: active ? c.accentSoft : 'transparent',
                    border: `1px solid ${active ? c.accentBorder : c.borderSoft}`,
                    fontWeight: active ? 600 : 400,
                  }}>
                    <span style={{ fontWeight: 600, color: active ? COL.f : c.muted }}>{kk}</span>
                    <span>=</span>
                    <span>{fmt(params[kk])}</span>
                  </span>
                );
              })}
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