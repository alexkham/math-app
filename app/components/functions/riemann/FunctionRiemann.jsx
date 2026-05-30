/**
 * FunctionRiemann — v1
 *
 * Numerical-integration visualizer. Pick a function family, set
 * bounds [a, b], pick an approximation rule (left/right/midpoint/
 * trapezoid), and watch rectangles or trapezoids fill the area
 * under the curve. The student sees three things at once and can
 * compare them: the geometric picture, the numerical Sₙ, and the
 * true integral (closed form when available, else a high-n
 * trapezoid fallback). Error = Sₙ − I, with an overshoots /
 * undershoots / exact tag.
 *
 * Pedagogical axis (the equivalent of Domain&apos;s
 * "only b, h affect domain"):
 *   - Method drives the SIGN of error and the CONVERGENCE ORDER
 *     (endpoint rules: O(1/n) and consistent over/under;
 *     midpoint and trapezoid: O(1/n²) with errors cancelling).
 *   - n drives the MAGNITUDE.
 *
 * Implementation note. Rectangles are drawn via the core&apos;s
 * `shadedRegions` (one underCurve region per strip), all
 * referencing a single piecewise step/linear strip function. The
 * strip function itself is rendered invisibly (visible: false) so
 * the legend stays clean — only f appears there. The bounds a
 * and b are dashed reference lines via the core&apos;s new
 * `verticalLines`.
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'quadratic'
 *   initialMethod         : 'left' | 'right' | 'mid' | 'trap'
 *   initialLo             : number        — default 0
 *   initialHi             : number        — default 3
 *   initialN              : number        — default 8
 *   families              : object        — override FAMILIES
 *   visualizerProps       : object        — forwarded to VisualizerWithControls
 *   infoPanelProps        : object        — forwarded to InfoPanel
 *   darkMode              : boolean
 *   showPicker            : boolean
 *   showSliders           : boolean
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
   COLORS
   ================================================================ */

const COL = {
  f:       '#1e3a8a', // function curve — deep blue
  rect:    '#3b82f6', // rectangle/strip default
  bad:     '#ef4444', // overshoot tag
  good:    '#10b981', // exact tag
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v, d = 4) {
  if (!Number.isFinite(v)) return '—';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}

function subscript(n) {
  const map = { '-': '₋', '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
                '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', '.': '.' };
  return String(n).split('').map(c => map[c] || c).join('');
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  lo: { label: 'lower bound a', min: -8, max: 8,  step: 0.1, def: 0 },
  hi: { label: 'upper bound b', min: -8, max: 8,  step: 0.1, def: 3 },
  n:  { label: 'partitions n',  min: 1,  max: 80, step: 1,   def: 8 },
};

const DEFAULT_PARAMS = { lo: 0, hi: 3, n: 8 };


/* ================================================================
   METHODS
   ================================================================ */

export const METHODS = {
  left: {
    label: 'Left',
    desc: 'left endpoint of each strip',
    formula: 'Sₙ = Δx · Σᵢ₌₀ⁿ⁻¹ f(a + i·Δx)',
    order: 'O(1/n)',
  },
  right: {
    label: 'Right',
    desc: 'right endpoint of each strip',
    formula: 'Sₙ = Δx · Σᵢ₌₁ⁿ f(a + i·Δx)',
    order: 'O(1/n)',
  },
  mid: {
    label: 'Midpoint',
    desc: 'midpoint of each strip',
    formula: 'Sₙ = Δx · Σᵢ₌₀ⁿ⁻¹ f(a + (i+½)·Δx)',
    order: 'O(1/n²)',
  },
  trap: {
    label: 'Trapezoid',
    desc: 'average of both endpoints',
    formula: 'Sₙ = (Δx/2)·[f(a) + 2Σᵢ₌₁ⁿ⁻¹ f(a+i·Δx) + f(b)]',
    order: 'O(1/n²)',
  },
};


/* ================================================================
   FAMILIES
   ----------------------------------------------------------------
   Grouped so the picker reads as a teaching tool:
     - Polynomial      : closed-form antiderivative, easy to verify
     - Transcendental  : closed-form, includes signed-area cases
     - Numerical only  : no elementary antiderivative; truth is
                         computed by 4000-strip trapezoid
   ================================================================ */

export const FAMILIES = {
  identity: {
    name: 'Identity',
    group: 'Polynomial',
    glyph: 'M2,22 L24,4',
    base: x => x,
    eqBase: 'x',
    integral: (a, b) => (b*b - a*a) / 2,
  },
  quadratic: {
    name: 'Quadratic',
    group: 'Polynomial',
    glyph: 'M2,4 Q13,30 24,4',
    base: x => x * x,
    eqBase: 'x²',
    integral: (a, b) => (b*b*b - a*a*a) / 3,
  },
  cubic: {
    name: 'Cubic',
    group: 'Polynomial',
    glyph: 'M2,22 C8,2 16,30 24,8',
    base: x => x * x * x,
    eqBase: 'x³',
    integral: (a, b) => (Math.pow(b, 4) - Math.pow(a, 4)) / 4,
  },

  sine: {
    name: 'Sine',
    group: 'Transcendental',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    base: x => Math.sin(x),
    eqBase: 'sin(x)',
    integral: (a, b) => -Math.cos(b) + Math.cos(a),
  },
  cosine: {
    name: 'Cosine',
    group: 'Transcendental',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    base: x => Math.cos(x),
    eqBase: 'cos(x)',
    integral: (a, b) => Math.sin(b) - Math.sin(a),
  },
  exponential: {
    name: 'Exponential',
    group: 'Transcendental',
    glyph: 'M2,26 Q16,26 24,2',
    base: x => Math.exp(x),
    eqBase: 'eˣ',
    integral: (a, b) => Math.exp(b) - Math.exp(a),
  },

  bump: {
    name: 'Gaussian bump',
    group: 'Numerical only',
    glyph: 'M2,24 Q13,2 24,24',
    base: x => Math.exp(-x*x / 2),
    eqBase: 'e^(−x²/2)',
    integral: null,
  },
  sinc: {
    name: 'Sinc (sin x / x)',
    group: 'Numerical only',
    glyph: 'M2,14 Q5,2 9,14 Q13,22 17,14 Q21,8 24,14',
    base: x => (Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x),
    eqBase: 'sin(x)/x',
    integral: null,
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   EQUATION STRING (no transforms — Riemann doesn't need them)
   ================================================================ */

function buildForwardEq(fam) {
  return fam.eqBase;
}


/* ================================================================
   RIEMANN SUM + TRUE INTEGRAL
   ----------------------------------------------------------------
   `dx` is signed: if hi < lo, every term is negated naturally and
   Sₙ comes out as −∫ₕᵢˡᵒ f dx, matching the convention
   ∫ₐᵇ f dx = −∫ᵇᵃ f dx.
   ================================================================ */

function riemannSum(fn, lo, hi, n, method) {
  if (n < 1) return NaN;
  const dx = (hi - lo) / n;
  if (dx === 0) return 0;
  let s = 0;
  for (let i = 0; i < n; i++) {
    const x0 = lo + i * dx;
    const x1 = x0 + dx;
    let v;
    if (method === 'left')        v = fn(x0);
    else if (method === 'right')  v = fn(x1);
    else if (method === 'mid')    v = fn((x0 + x1) / 2);
    else                          v = (fn(x0) + fn(x1)) / 2;
    if (!Number.isFinite(v)) continue;
    s += v;
  }
  return s * dx;
}

function trueIntegral(fam, lo, hi) {
  if (fam.integral) {
    const v = fam.integral(lo, hi);
    if (Number.isFinite(v)) return v;
  }
  return riemannSum(fam.base, lo, hi, 4000, 'trap');
}


/* ================================================================
   PIECEWISE STRIP FUNCTION
   ----------------------------------------------------------------
   One function that returns the right strip-top value for any x
   in [lo, hi]. Used as functionIndex for n shadedRegions (one
   per strip). For left/right/mid this is piecewise constant; for
   trap it&apos;s piecewise linear.
   ================================================================ */

function makeStripFn(base, lo, hi, n, method) {
  const dx = (hi - lo) / n;
  if (dx === 0 || n < 1) return () => NaN;
  return x => {
    let i = Math.floor((x - lo) / dx);
    if (i < 0) i = 0;
    if (i > n - 1) i = n - 1;
    const x0 = lo + i * dx;
    const x1 = x0 + dx;
    if (method === 'left')   return base(x0);
    if (method === 'right')  return base(x1);
    if (method === 'mid')    return base((x0 + x1) / 2);
    // trapezoid: linear interp between endpoints
    const t = (x - x0) / dx;
    return (1 - t) * base(x0) + t * base(x1);
  };
}


/* ================================================================
   VIEW BOUNDS — auto-fit to the integration window plus some pad
   ================================================================ */

function autoViewBounds(fam, lo, hi) {
  const a = Math.min(lo, hi), b = Math.max(lo, hi);
  const N = 200;
  const span = Math.max(0.1, b - a);
  let ymin = Infinity, ymax = -Infinity;
  for (let i = 0; i <= N; i++) {
    const y = fam.base(a + (i / N) * span);
    if (Number.isFinite(y)) { if (y < ymin) ymin = y; if (y > ymax) ymax = y; }
  }
  if (!Number.isFinite(ymin)) { ymin = -1; ymax = 1; }
  ymin = Math.min(ymin, 0);
  ymax = Math.max(ymax, 0);
  const yPad = (ymax - ymin) * 0.2 + 0.5;
  const xPad = Math.max(0.5, span * 0.25);
  return {
    xMin: a - xPad,
    xMax: b + xPad,
    yMin: ymin - yPad,
    yMax: ymax + yPad,
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
            stroke={active ? COL.rect : (darkMode ? '#64748b' : '#94a3b8')}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionRiemann({
  initialFamily = 'quadratic',
  initialMethod = 'left',
  initialLo = 0,
  initialHi = 3,
  initialN = 8,
  families = DEFAULT_FAMILIES,
  visualizerProps = {},
  infoPanelProps = {},
  darkMode = false,
  showPicker = true,
  showSliders = true,
  showInfoPanel = true,
  showColorPicker = true,
  defaultHighlightColor = '#3b82f6',
  maxWidth = '80vw',
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

  const [current, setCurrent] = useState(startKey);
  const [method, setMethod] = useState(METHODS[initialMethod] ? initialMethod : 'left');
  const [params, setParams] = useState({
    lo: initialLo, hi: initialHi, n: initialN,
  });
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

  /* Derived tones from the picked highlight color — coordinates
     the Riemann result card chrome with the rectangle fill. */
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
      fill:   rgba(0.22),
      stroke: highlightColor,
      main:   highlightColor,
    };
  }, [highlightColor, darkMode]);

  const fam = families[current] || families[familyKeys[0]];

  const { lo, hi, n } = params;

  /* Strip function (piecewise step or linear) */
  const stripFn = useMemo(
    () => makeStripFn(fam.base, lo, hi, n, method),
    [fam, lo, hi, n, method]
  );

  /* Riemann sum, true integral, error */
  const sn  = useMemo(() => riemannSum(fam.base, lo, hi, n, method), [fam, lo, hi, n, method]);
  const I   = useMemo(() => trueIntegral(fam, lo, hi), [fam, lo, hi]);
  const err = sn - I;

  /* Equation string and Δx */
  const forwardEq = useMemo(() => buildForwardEq(fam), [fam]);
  const dx = (hi - lo) / Math.max(1, n);

  /* Functions passed to the core. f visible, strip invisible
     (used only as a source for shadedRegions). */
  const functions = useMemo(() => ([
    {
      fn: fam.base,
      color: COL.f,
      label: 'f',
      formula: `f(x) = ${forwardEq}`,
      visible: true,
      stroke: 2.25,
    },
    {
      fn: stripFn,
      color: highlightColor,
      visible: false,
    },
  ]), [fam, stripFn, forwardEq, highlightColor]);

  /* One underCurve region per strip — that&apos;s how the
     rectangles/trapezoids get drawn. */
  const shadedRegions = useMemo(() => {
    if (n < 1 || hi === lo) return [];
    const dxs = (hi - lo) / n;
    const out = [];
    for (let i = 0; i < n; i++) {
      const xS = lo + i * dxs;
      const xE = xS + dxs;
      out.push({
        type: 'underCurve',
        functionIndex: 1,
        xStart: Math.min(xS, xE),
        xEnd:   Math.max(xS, xE),
        color: panelTones.fill,
        strokeColor: panelTones.stroke,
        strokeWidth: 1,
      });
    }
    return out;
  }, [lo, hi, n, panelTones]);

  /* Dashed reference lines at a and b. */
  const verticalLines = useMemo(() => ([
    { x: lo, color: '#94a3b8', stroke: 1, pattern: [4, 4], label: 'a' },
    { x: hi, color: '#94a3b8', stroke: 1, pattern: [4, 4], label: 'b' },
  ]), [lo, hi]);

  /* Auto-fit viewport to the integration window. */
  const viewport = useMemo(() => autoViewBounds(fam, lo, hi), [fam, lo, hi]);

  /* ---- InfoPanel content ---- */
  const m = METHODS[method];

  const explanationContent = useMemo(() => {
    let verdict;
    if (Math.abs(err) < 1e-4) verdict = 'is essentially exact';
    else if (err > 0)         verdict = 'overshoots';
    else                      verdict = 'undershoots';

    const whyLine =
      (method === 'left' || method === 'right')
        ? `Endpoint rules sit entirely above or below the curve when the function is monotonic on a strip. On the current interval the sum **${verdict}** the true integral by ${fmt(Math.abs(err))}.`
        : `Midpoint and trapezoid sample the curve more representatively, so over- and under-shoots within each strip mostly cancel. With the current setup the sum **${verdict}** the true integral by ${fmt(Math.abs(err))}.`;

    return (
      `## ${m.label} Riemann sum\n\n` +
      `The interval $[a, b]$ is split into $n$ equal strips of width $\\Delta x = (b - a)/n$. For each strip, the height comes from sampling $f$ at the **${m.desc}**:\n\n` +
      `$$${m.formula}$$\n\n` +
      `### For the current setup\n\n` +
      `$f(x) = ${fam.eqBase}$, integrating from $${fmt(lo, 2)}$ to $${fmt(hi, 2)}$ with $n = ${n}$ strips. So $\\Delta x = ${fmt(dx)}$.\n\n` +
      `- **S${subscript(n)}** = $${fmt(sn)}$\n` +
      `- **True integral** = $${fmt(I)}$\n` +
      `- **Error** = S${subscript(n)} − I = $${fmt(err)}$\n\n` +
      `### Why ${m.label.toLowerCase()} ${verdict} here\n\n` +
      `${whyLine}\n\n` +
      `### Convergence order\n\n` +
      `For smooth functions the ${m.label.toLowerCase()} rule converges as **${m.order}**. Push the $n$ slider higher and watch the error shrink — ${
        m.order === 'O(1/n)'
          ? 'doubling $n$ roughly halves the error'
          : 'doubling $n$ shrinks the error by about a factor of four'
      }.`
    );
  }, [fam, m, method, lo, hi, n, dx, sn, I, err]);

  const conceptsContent =
    '## What is a Riemann sum?\n\n' +
    'A **Riemann sum** estimates the area under a curve using simple shapes. Take the interval $[a, b]$, chop it into $n$ equal strips of width $\\Delta x = (b-a)/n$, and on each strip build a shape whose height is taken from the function. Sum the areas.\n\n' +
    'As $n \\to \\infty$ the sum converges to the exact integral $\\int_a^b f(x)\\,dx$. The four classical rules differ in *where* on each strip the height is sampled.\n\n' +
    '### The four rules\n\n' +
    '- **Left** — sample at the left edge of each strip. On an increasing function every rectangle sits *below* the curve, so the sum undershoots. On a decreasing function it overshoots.\n' +
    '- **Right** — sample at the right edge. The mirror image: overshoots on increasing, undershoots on decreasing.\n' +
    '- **Midpoint** — sample at the center. The rectangle&apos;s flat top punches *above* the curve on one half of the strip and *below* on the other, so errors mostly cancel.\n' +
    '- **Trapezoid** — connect the left and right endpoint heights with a straight line. Also has errors that mostly cancel, and tends to err the opposite way of midpoint.\n\n' +
    '### Convergence order\n\n' +
    'Not all rules converge equally fast. For smooth functions:\n\n' +
    '- **Left and right**: error shrinks like $1/n$. Doubling $n$ halves the error.\n' +
    '- **Midpoint and trapezoid**: error shrinks like $1/n^2$. Doubling $n$ shrinks the error by a factor of four.\n\n' +
    'So a midpoint sum with $n = 20$ is typically more accurate than a left sum with $n = 200$. The picture on screen shows it directly — push the $n$ slider with each rule selected and watch how fast the error tag shrinks.\n\n' +
    '### Signed areas\n\n' +
    'When the curve dips below the x-axis, the strip heights become negative and the corresponding rectangles count as *negative area*. That matches the standard convention: $\\int_a^b f(x)\\,dx$ subtracts area below the axis. If you slide $b$ below $a$, $\\Delta x$ goes negative and the whole sum flips sign — also standard.\n\n' +
    '### When there is no closed-form integral\n\n' +
    'Some functions (the Gaussian bump $e^{-x^2/2}$, $\\sin(x)/x$, many others) have no elementary antiderivative. In those cases the "true" value comes from a *very fine* numerical method — here we use a 4000-strip trapezoid. That&apos;s exactly how numerical libraries do real-world integration: pick a high-order rule, crank $n$ up until further refinement stops changing the answer.';

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
    okSoft: darkMode ? '#064e3b' : '#d1fae5',
    okText: darkMode ? '#6ee7b7' : '#065f46',
    badSoft: darkMode ? '#7f1d1d' : '#fee2e2',
    badText: darkMode ? '#fca5a5' : '#991b1b',
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

  const methodBtn = active => ({
    padding: '6px 8px',
    border: `1px solid ${active ? highlightColor : c.border}`,
    background: active ? highlightColor : (darkMode ? '#0f172a' : '#fff'),
    color: active ? '#fff' : c.inkSoft,
    borderRadius: 6, cursor: 'pointer',
    fontFamily: 'inherit', fontSize: 11.5,
    fontWeight: active ? 600 : 500,
    transition: 'all 0.12s',
  });

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

  const setParam = (k, v) => setParams(prev => ({ ...prev, [k]: v }));
  const resetParams = () => setParams({ lo: initialLo, hi: initialHi, n: initialN });

  const Chip = ({ k, label, val, accent }) => {
    return (
      <span style={{
        fontFamily: monoStack, fontSize: 11,
        padding: '3px 9px', borderRadius: 5,
        display: 'inline-flex', alignItems: 'center', gap: 5,
        color: c.accentText,
        background: c.accentSoft,
        border: `1px solid ${c.accentBorder}`,
        fontWeight: 600,
      }}>
        <span style={{ fontWeight: 600, color: accent || COL.rect }}>{label || k}</span>
        <span>=</span>
        <span>{val}</span>
      </span>
    );
  };

  const renderSlider = (key) => {
    const def = PARAM_DEFS[key];
    const isAccuracy = key === 'n';
    const accent = isAccuracy ? highlightColor : COL.rect;
    return (
      <div key={key}>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            {def.label}
            {isAccuracy && (
              <span style={{
                fontSize: 9, fontWeight: 700,
                color: panelTones.text, background: panelTones.soft,
                padding: '1px 5px', borderRadius: 3,
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>controls accuracy</span>
            )}
          </span>
          <span style={{ fontFamily: monoStack, color: accent, fontWeight: 600 }}>
            {fmt(params[key], def.step < 1 ? 2 : 0)}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={params[key]}
          onChange={e => setParam(key, parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: accent, cursor: 'pointer' }}
        />
      </div>
    );
  };

  /* Error tag styling */
  let errTagText, errTagColor, errTagBg;
  if (Math.abs(err) < 1e-4) {
    errTagText = 'exact'; errTagColor = c.okText; errTagBg = c.okSoft;
  } else if (err > 0) {
    errTagText = 'overshoots'; errTagColor = c.badText; errTagBg = c.badSoft;
  } else {
    errTagText = 'undershoots'; errTagColor = panelTones.text; errTagBg = panelTones.soft;
  }

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

            <div style={{
              marginTop: 12,
              paddingTop: 12,
              borderTop: `1px solid ${c.borderSoft}`,
            }}>
              <div style={{ ...sectionTitle, margin: '0 4px 8px' }}>Method</div>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4,
                padding: '0 4px',
              }}>
                {Object.entries(METHODS).map(([key, meta]) => (
                  <button
                    key={key}
                    style={methodBtn(key === method)}
                    onClick={() => setMethod(key)}
                  >
                    {meta.label}
                  </button>
                ))}
              </div>
            </div>

            {showSliders && (
              <div style={{
                marginTop: 12,
                paddingTop: 12,
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
                  {['lo', 'hi', 'n'].map(renderSlider)}
                </div>
              </div>
            )}

            {showColorPicker && (
              <div style={{
                marginTop: 12,
                paddingTop: 12,
                borderTop: `1px solid ${c.borderSoft}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
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
                  <span>Strip color</span>
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
              xMin={viewport.xMin}
              xMax={viewport.xMax}
              yMin={viewport.yMin}
              yMax={viewport.yMax}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              shadedRegions={shadedRegions}
              verticalLines={verticalLines}
              {...mergedVisualizerProps}
            />

            {/* ---- RIEMANN RESULT — the centerpiece ---- */}
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
                  Riemann sum
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 12.5,
                  color: c.inkSoft,
                }}>
                  S{subscript(n)} = Δx · Σ f(xᵢ*) · Δx = {fmt(dx)} · rule: {m.label.toLowerCase()}
                </span>
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10,
              }}>
                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${darkMode ? '#1e293b' : panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                  }}>Approximation S{subscript(n)}</div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(sn)}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2,
                    fontFamily: monoStack,
                  }}>with n = {n} ({m.label.toLowerCase()})</div>
                </div>

                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${darkMode ? '#1e293b' : panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                  }}>True integral</div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(I)}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2,
                    fontFamily: monoStack,
                  }}>
                    {fam.integral ? 'closed form' : 'numeric (n=4000 trap)'}
                  </div>
                </div>

                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${darkMode ? '#1e293b' : panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                  }}>Error</div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>
                    {err >= 0 ? '+' : ''}{fmt(err)}
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <span style={{
                      display: 'inline-block', fontSize: 9.5, fontWeight: 700,
                      padding: '1px 6px', borderRadius: 3,
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                      color: errTagColor, background: errTagBg,
                    }}>{errTagText}</span>
                  </div>
                </div>
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
              <Chip k="a" label="a" val={fmt(lo, 2)} />
              <Chip k="b" label="b" val={fmt(hi, 2)} />
              <Chip k="n" label="n" val={n} accent={highlightColor} />
              <Chip k="method" label="rule" val={m.label.toLowerCase()} accent={highlightColor} />
              <span style={{ width: 1, height: 16, background: c.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>n drives accuracy · rule drives error sign</span>
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