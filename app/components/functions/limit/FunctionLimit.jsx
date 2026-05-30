/**
 * FunctionLimit — v1
 *
 * Limit Explorer. Pick a family from the discontinuity zoo (continuous,
 * removable, jump, infinite, oscillating, one-sided), watch L⁻ and L⁺
 * land on the same height (or not), and read the verdict.
 *
 * Three things on screen:
 *   1. The curve f(x), with hole/jump rendering via per-function `domain`
 *      where the family is piecewise (split functions don&apos;t get a
 *      spurious vertical connector at c).
 *   2. Two horizontal reference lines at L⁻ and L⁺ (when finite). Open
 *      circles at (c, L⁻) and (c, L⁺) indicate the limit values are
 *      approached but not necessarily attained.
 *   3. A pair of approach markers at (c−ε, f(c−ε)) and (c+ε, f(c+ε)) —
 *      slide ε on a log scale from 1 down to 10⁻³ and watch the
 *      numbers in the Approach card march toward L⁻ and L⁺.
 *
 * Pedagogical axis: the limit at c is about the *approach*, not the
 * destination. f(c) — defined, undefined, or "wrong" — sits separately
 * and gets its own row showing continuous / removable / jump / infinite /
 * essential.
 *
 * Built on FunctionVisualizerCorePro. Uses:
 *   - functions[] (1 or 2 entries per family, with per-function `domain`
 *     for the piecewise jump family)
 *   - `verticalLines` for the dashed line at x = c
 *   - `horizontalLines` for the L⁻ and L⁺ reference lines
 *   - `customPoints` for hole / approach markers
 *   - `labelMode="none"` — legend is rendered in HTML below the graph
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'removable'
 *   initialEps            : number        — default 0.5
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
  f:        '#3b82f6',  // main blue
  fp:       '#1e3a8a',  // deep blue (f(c) closed marker)
  limit:    '#60a5fa',  // light blue (L lines, limit markers)
  link:     '#94a3b8',  // gray (x = c dashed line)
  approach: '#3b82f6',  // approach markers
};

const INF = Number.POSITIVE_INFINITY;


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v, d = 3) {
  if (v === INF) return '+\u221e';
  if (v === -INF) return '\u2212\u221e';
  if (v === null) return 'DNE';
  if (!Number.isFinite(v)) return 'undefined';
  const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
  return Math.abs(r - Math.round(r)) < 1e-9 ? String(Math.round(r)) : String(r);
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  // ε on log scale: slider value is exponent, ε = 10^slider
  eps: { label: 'distance \u03b5', min: -3, max: 0.3, step: 0.05, def: -0.301 },
};


/* ================================================================
   FAMILIES — the discontinuity zoo
   ----------------------------------------------------------------
   Each family has:
     - curves: array of { fn, domain? } passed to the core
     - c, Lminus, Lplus, Fc, type
     - eq, intro
   ================================================================ */

export const FAMILIES = {
  continuous: {
    name: 'Quadratic',
    group: 'Continuous (control)',
    glyph: 'M2,4 Q13,30 24,4',
    curves: [{ fn: x => x * x }],
    c: 1,
    Lminus: 1, Lplus: 1, Fc: 1,
    type: 'continuous',
    eq: 'f(x) = x\u00b2',
    intro: 'A smooth, well-behaved curve. The function value and both one-sided limits all agree.',
  },
  removable: {
    name: 'Hole',
    group: 'Removable',
    glyph: 'M2,22 L12,11 M14,9 L24,4',
    curves: [{ fn: x => (Math.abs(x - 1) < 1e-12 ? NaN : (x*x - 1) / (x - 1)) }],
    c: 1,
    Lminus: 2, Lplus: 2, Fc: NaN,
    type: 'removable',
    eq: 'f(x) = (x\u00b2 \u2212 1) / (x \u2212 1)',
    intro: 'A hole in the graph. f(c) is undefined, but the curve approaches the same height from both sides.',
  },
  jump: {
    name: 'Step',
    group: 'Jump',
    glyph: 'M2,18 L12,18 M14,9 L24,9',
    curves: [
      { fn: x => x,     domain: { to: 0,   toKind:   'open'   } },
      { fn: x => x + 1, domain: { from: 0, fromKind: 'closed' } },
    ],
    c: 0,
    Lminus: 0, Lplus: 1, Fc: 1,
    type: 'jump',
    eq: 'f(x) = x for x<0; x+1 for x\u22650',
    intro: 'A jump. The left and right limits exist but disagree.',
  },
  'infinite-pos': {
    name: '1/x\u00b2',
    group: 'Infinite',
    glyph: 'M2,26 Q11,26 12,3 M14,3 Q15,26 24,26',
    curves: [{ fn: x => 1 / (x * x) }],
    c: 0,
    Lminus: INF, Lplus: INF, Fc: NaN,
    type: 'infinite',
    eq: 'f(x) = 1/x\u00b2',
    intro: 'A vertical asymptote. The function blows up to +\u221e from both sides.',
  },
  'infinite-jump': {
    name: '1/x',
    group: 'Infinite',
    glyph: 'M2,4 Q11,4 12,26 M14,3 Q15,26 24,26',
    curves: [{ fn: x => 1 / x }],
    c: 0,
    Lminus: -INF, Lplus: INF, Fc: NaN,
    type: 'infinite',
    eq: 'f(x) = 1/x',
    intro: 'A vertical asymptote with sign change. f \u2192 \u2212\u221e on the left, +\u221e on the right.',
  },
  oscillating: {
    name: 'sin(1/x)',
    group: 'Oscillating',
    glyph: 'M2,14 Q4,2 6,14 Q7,26 9,14 Q11,2 14,14 Q18,26 24,14',
    curves: [{ fn: x => (x === 0 ? NaN : Math.sin(1 / x)) }],
    c: 0,
    Lminus: null, Lplus: null, Fc: NaN,
    type: 'oscillating',
    eq: 'f(x) = sin(1/x)',
    intro: 'A function that oscillates infinitely fast near c. Neither one-sided limit exists.',
  },
  onesided: {
    name: 'Square root',
    group: 'One-sided',
    glyph: 'M13,24 Q15,8 24,4',
    curves: [{ fn: x => (x >= 0 ? Math.sqrt(x) : NaN), domain: { from: 0, fromKind: 'closed' } }],
    c: 0,
    Lminus: null, Lplus: 0, Fc: 0,
    type: 'onesided',
    eq: 'f(x) = \u221ax',
    intro: 'A function only defined on one side of c. The left limit doesn\u2019t exist; the right limit is 0.',
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   VIEW BOUNDS — center on c, cap y for asymptotic families
   ================================================================ */

function autoViewBounds(fam) {
  const c = fam.c;
  const half = 4;
  let yMin = -4, yMax = 4;
  if (fam.type === 'continuous' || fam.type === 'removable') { yMin = -1; yMax = 4; }
  else if (fam.type === 'onesided') { yMin = -1; yMax = 3; }
  else if (fam.type === 'oscillating') { yMin = -1.5; yMax = 1.5; }
  return { xMin: c - half, xMax: c + half, yMin, yMax };
}


/* ================================================================
   CLASSIFY — limit existence + continuity verdict
   ================================================================ */

function classify(fam) {
  const { Lminus, Lplus, Fc, type, c } = fam;

  let limitExists = false, limitValue = null;
  let verdictTitle, verdictDetail, verdictTag, verdictKind;

  if (Lminus === null || Lplus === null) {
    if (type === 'oscillating') {
      verdictTitle = 'Limit does not exist.';
      verdictDetail = 'f oscillates infinitely fast near c — neither one-sided limit settles to a value.';
      verdictTag = 'DNE (oscillating)';
    } else if (type === 'onesided') {
      verdictTitle = 'Limit does not exist (two-sided).';
      verdictDetail = `f isn\u2019t defined on one side of c, so the left limit doesn\u2019t exist. Only the right limit makes sense here, and it equals ${fmt(Lplus)}.`;
      verdictTag = 'DNE (one-sided only)';
    } else {
      verdictTitle = 'Limit does not exist.';
      verdictDetail = 'A one-sided limit fails.';
      verdictTag = 'DNE';
    }
    verdictKind = 'bad';
  } else if (!Number.isFinite(Lminus) || !Number.isFinite(Lplus)) {
    verdictTitle = 'Limit does not exist (infinite).';
    if (Lminus === Lplus) {
      verdictDetail = `Both sides head to ${fmt(Lminus)}. As a finite number the limit doesn\u2019t exist.`;
    } else {
      verdictDetail = `Left side \u2192 ${fmt(Lminus)}; right side \u2192 ${fmt(Lplus)}. Vertical asymptote at c.`;
    }
    verdictTag = 'DNE (infinite)';
    verdictKind = 'bad';
  } else if (Math.abs(Lminus - Lplus) < 1e-9) {
    limitExists = true;
    limitValue = Lminus;
    verdictTitle = 'Limit exists.';
    verdictDetail = `L\u207B and L\u207A agree at ${fmt(limitValue)}, so lim x\u2192${c} f(x) = ${fmt(limitValue)}.`;
    verdictTag = 'limit exists';
    verdictKind = 'ok';
  } else {
    verdictTitle = 'Limit does not exist (jump).';
    verdictDetail = `L\u207B = ${fmt(Lminus)}, L\u207A = ${fmt(Lplus)}. Different values, so the two-sided limit DNE.`;
    verdictTag = 'DNE (jump)';
    verdictKind = 'bad';
  }

  // Continuity
  let contLabel, contDetail, contKind;
  if (Number.isFinite(Fc)) {
    if (limitExists && Math.abs(Fc - limitValue) < 1e-9) {
      contLabel = 'continuous';
      contDetail = 'f(c) is defined, the limit exists, and they agree. f is continuous at c.';
      contKind = 'ok';
    } else if (limitExists) {
      contLabel = 'removable';
      contDetail = 'The limit exists but f(c) \u2260 lim. You could redefine f(c) to make it continuous.';
      contKind = 'bad';
    } else {
      contLabel = type === 'jump' ? 'jump' : type;
      contDetail = 'The two-sided limit doesn\u2019t exist, so f can\u2019t be continuous at c — no redefinition of f(c) can fix that.';
      contKind = 'bad';
    }
  } else {
    if (limitExists) {
      contLabel = 'removable';
      contDetail = `The limit exists but f isn\u2019t defined at c. Set f(c) = ${fmt(limitValue)} and the function becomes continuous.`;
      contKind = 'bad';
    } else if (type === 'infinite') {
      contLabel = 'infinite';
      contDetail = 'Vertical asymptote at c. Not continuous, not removable.';
      contKind = 'bad';
    } else if (type === 'oscillating') {
      contLabel = 'essential';
      contDetail = 'Essential discontinuity — no value of f(c) could fix it.';
      contKind = 'bad';
    } else {
      contLabel = type;
      contDetail = 'f isn\u2019t defined at c and the limit doesn\u2019t exist.';
      contKind = 'bad';
    }
  }

  return {
    limitExists, limitValue,
    verdictTitle, verdictDetail, verdictTag, verdictKind,
    contLabel, contDetail, contKind,
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

export default function FunctionLimit({
  initialFamily = 'removable',
  initialEps = 0.5,
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
  const [eps, setEps] = useState(initialEps);
  const [showF,        setShowF]        = useState(true);
  const [showLimits,   setShowLimits]   = useState(true);
  const [showC,        setShowC]        = useState(true);
  const [showApproach, setShowApproach] = useState(true);
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

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

  /* Functions to draw (1 or 2). Visible: showF. */
  const functions = useMemo(() => {
    return fam.curves.map((cv, i) => ({
      fn: cv.fn,
      color: COL.f,
      label: i === 0 ? 'f' : undefined,
      formula: i === 0 ? fam.eq : undefined,
      visible: showF,
      stroke: 2.25,
      domain: cv.domain,
    }));
  }, [fam, showF]);

  /* Dashed vertical at x = c. */
  const verticalLines = useMemo(() => {
    if (!showC) return [];
    return [{ x: fam.c, color: COL.link, stroke: 1.5, pattern: [5, 4], label: `c = ${fam.c}` }];
  }, [fam.c, showC]);

  /* Horizontal limit lines (when finite). The core draws them full
     width; this is a small fidelity compromise vs. the demo&apos;s
     half-lines. The vertical line at c gives the visual divide. */
  const horizontalLines = useMemo(() => {
    if (!showLimits) return [];
    const lines = [];
    if (Number.isFinite(fam.Lminus)) {
      lines.push({ y: fam.Lminus, color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L\u207B = ${fmt(fam.Lminus)}` });
    }
    if (Number.isFinite(fam.Lplus) && fam.Lplus !== fam.Lminus) {
      lines.push({ y: fam.Lplus,  color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L\u207A = ${fmt(fam.Lplus)}` });
    }
    return lines;
  }, [fam.Lminus, fam.Lplus, showLimits]);

  /* Markers:
        - (c, L⁻), (c, L⁺) — open if not equal to f(c), closed if equal
        - (c, f(c)) — closed, deep blue, if defined and distinct from limits
        - (c−ε, f(c−ε)) and (c+ε, f(c+ε)) — small open markers as approach */
  const customPoints = useMemo(() => {
    const pts = [];
    if (showLimits) {
      if (Number.isFinite(fam.Lminus)) {
        pts.push({ x: fam.c, y: fam.Lminus, color: COL.f, label: `L\u207B = ${fmt(fam.Lminus)}` });
      }
      if (Number.isFinite(fam.Lplus) && fam.Lplus !== fam.Lminus) {
        pts.push({ x: fam.c, y: fam.Lplus, color: COL.f, label: `L\u207A = ${fmt(fam.Lplus)}` });
      }
    }
    if (Number.isFinite(fam.Fc) && fam.Fc !== fam.Lminus && fam.Fc !== fam.Lplus) {
      pts.push({ x: fam.c, y: fam.Fc, color: COL.fp, label: `f(c) = ${fmt(fam.Fc)}` });
    }
    if (showApproach) {
      const xL = fam.c - eps;
      const xR = fam.c + eps;
      let yL = NaN, yR = NaN;
      try {
        const curveL = pickCurveAt(fam, xL);
        if (curveL) yL = curveL.fn(xL);
      } catch {}
      try {
        const curveR = pickCurveAt(fam, xR);
        if (curveR) yR = curveR.fn(xR);
      } catch {}
      if (Number.isFinite(yL)) pts.push({ x: xL, y: yL, color: COL.approach, label: `x \u2192 c\u207B` });
      if (Number.isFinite(yR)) pts.push({ x: xR, y: yR, color: COL.approach, label: `x \u2192 c\u207A` });
    }
    return pts;
  }, [fam, eps, showLimits, showApproach]);

  /* For the approach card, find f(c±ε) honoring per-curve domains. */
  const xL = fam.c - eps;
  const xR = fam.c + eps;
  const fL = useMemo(() => evalAt(fam, xL), [fam, xL]);
  const fR = useMemo(() => evalAt(fam, xR), [fam, xR]);

  /* Verdict + continuity */
  const v = useMemo(() => classify(fam), [fam]);

  /* View bounds — center on c. */
  const viewport = useMemo(() => autoViewBounds(fam), [fam]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    return (
      `## ${fam.name} — ${v.contLabel}\n\n` +
      `${fam.intro}\n\n` +
      `**Function** · $${fam.eq}$\n\n` +
      `**Centered at** · $c = ${fam.c}$\n\n` +
      `### Right now\n\n` +
      `With $\u03b5 = ${fmt(eps)}$: $f(c - \u03b5) = ${fmt(fL)}$, $f(c + \u03b5) = ${fmt(fR)}$.\n\n` +
      `$L^- = ${fmt(fam.Lminus)}$, $L^+ = ${fmt(fam.Lplus)}$.\n\n` +
      `### Verdict\n\n` +
      `**${v.verdictTitle}** ${v.verdictDetail}\n\n` +
      `### What ε controls\n\n` +
      `Slide ε to pick how far on each side of c we sample. As ε shrinks, $f(c - \u03b5)$ approaches $L^-$ and $f(c + \u03b5)$ approaches $L^+$. That&apos;s the definition of a limit: getting arbitrarily close.`
    );
  }, [fam, eps, fL, fR, v]);

  const conceptsContent =
    '## One-sided and two-sided limits\n\n' +
    'The **limit** of $f$ at $x = c$ asks: as $x$ gets arbitrarily close to $c$, what value does $f(x)$ get arbitrarily close to?\n\n' +
    'Split that into two questions:\n\n' +
    '- **Left limit** $L^-$ — approach $c$ from values smaller than $c$.\n' +
    '- **Right limit** $L^+$ — approach $c$ from values larger than $c$.\n\n' +
    'The two-sided limit **exists** if and only if $L^- = L^+$. When they agree, that&apos;s the limit. When they disagree, the limit does not exist (DNE).\n\n' +
    '### Types of discontinuity\n\n' +
    '- **Removable** — $L^- = L^+$, but $f(c)$ is undefined or doesn&apos;t equal the limit. A single point is missing or wrong; everything else lines up.\n' +
    '- **Jump** — $L^-$ and $L^+$ are both finite but different. The graph leaps from one height to another at $c$.\n' +
    '- **Infinite** — at least one of $L^-$, $L^+$ is $\\pm\\infty$. A vertical asymptote at $c$.\n' +
    '- **Oscillating** — neither one-sided limit exists because the function bounces around without settling. Classic example: $\\sin(1/x)$ near $0$.\n\n' +
    '### Why $f(c)$ doesn&apos;t determine the limit\n\n' +
    'The limit is about the *approach*, not the destination. The function&apos;s actual value at $c$ — if it has one — could be anything, and it wouldn&apos;t change $L^-$ or $L^+$. That&apos;s why **removable** is a category: the limit exists cleanly; only $f(c)$ is the problem, and you could just patch it.';

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
    okSoft: darkMode ? '#1e3a8a' : '#dfebfe',
    okText: darkMode ? '#dbeafe' : '#1e3a8a',
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

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 460,
    ...visualizerProps,
  };

  const pickerEntries = buildPickerEntries(families);

  const selectFamily = (key) => {
    setCurrent(key);
    setEps(initialEps);
  };

  const resetEps = () => setEps(initialEps);

  /* ---- Display toggle ---- */
  const Toggle = ({ checked, onChange, swatchColor, style, label }) => (
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
        borderTop: `2.5px ${style} ${swatchColor}`,
      }} />
      <span style={{ fontFamily: monoStack, fontSize: 12 }}>{label}</span>
    </label>
  );

  /* ---- ε slider (log scale) ---- */
  const renderEpsSlider = () => {
    const def = PARAM_DEFS.eps;
    const sliderVal = Math.log10(eps);
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
            }}>approach c</span>
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

  /* ---- Legend below graph ---- */
  const renderLegend = () => {
    const items = [];
    if (showF)        items.push({ c: COL.f,        style: 'solid',  text: 'f(x)' });
    if (showLimits)   items.push({ c: COL.limit,    style: 'dashed', text: 'L\u207B and L\u207A' });
    if (showC)        items.push({ c: COL.link,     style: 'dashed', text: 'x = c' });
    if (showApproach) items.push({ c: COL.approach, style: 'dotted', text: 'approach' });
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
              borderTop: `2.5px ${it.style} ${it.c}`,
            }} />
            {it.text}
          </span>
        ))}
      </div>
    );
  };

  /* ---- Verdict tag style ---- */
  const verdictTagStyle = (kind) => ({
    marginLeft: 'auto',
    display: 'inline-block',
    fontSize: 10, fontWeight: 700,
    padding: '3px 8px', borderRadius: 4,
    textTransform: 'uppercase', letterSpacing: '0.05em',
    color: kind === 'ok' ? c.okText : c.badText,
    background: kind === 'ok' ? c.okSoft : c.badSoft,
  });

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
                      fontSize: 10, color: c.muted,
                      fontFamily: monoStack,
                    }}>c={e.fam.c}</span>
                  </button>
                )
            )}

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${c.borderSoft}` }}>
              <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Display</div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                <Toggle checked={showF}        onChange={setShowF}        swatchColor={COL.f}        style="solid"  label="f(x)" />
                <Toggle checked={showLimits}   onChange={setShowLimits}   swatchColor={COL.limit}    style="dashed" label="L\u207B, L\u207A" />
                <Toggle checked={showC}        onChange={setShowC}        swatchColor={COL.link}     style="dashed" label="x = c" />
                <Toggle checked={showApproach} onChange={setShowApproach} swatchColor={COL.approach} style="dotted" label="approach" />
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
                <button onClick={resetEps} style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${c.border}`, color: c.inkSoft,
                  padding: '3px 8px', borderRadius: 5,
                  fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                }}>Reset</button>
              </div>
              <div style={{ padding: '0 4px' }}>
                {renderEpsSlider()}
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
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 8px', borderRadius: 5,
                color: COL.f, background: c.softer,
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
              horizontalLines={horizontalLines}
              customPoints={customPoints}
              {...mergedVisualizerProps}
            />

            {renderLegend()}

            {/* APPROACH BAR — left / right */}
            <div style={{
              marginTop: 12, padding: '12px 14px',
              background: panelTones.soft,
              border: `1px solid ${panelTones.border}`,
              borderRadius: 8,
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
            }}>
              {[
                { side: 'left',  label: 'From the left',  tag: 'x \u2192 c\u207B', x: xL, fx: fL, L: fam.Lminus, Lname: 'L\u207B' },
                { side: 'right', label: 'From the right', tag: 'x \u2192 c\u207A', x: xR, fx: fR, L: fam.Lplus,  Lname: 'L\u207A' },
              ].map(s => (
                <div key={s.side} style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 6,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <span>{s.label}</span>
                    <span style={{
                      fontSize: 9.5, fontWeight: 700,
                      color: panelTones.text, background: panelTones.soft,
                      padding: '1px 6px', borderRadius: 3,
                    }}>{s.tag}</span>
                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontFamily: monoStack, fontSize: 13, color: c.ink,
                    marginBottom: 2, fontVariantNumeric: 'tabular-nums',
                  }}>
                    <span style={{ color: c.muted }}>x =</span>
                    <span>{fmt(s.x)}</span>
                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontFamily: monoStack, fontSize: 13, color: c.ink,
                    marginBottom: 2, fontVariantNumeric: 'tabular-nums',
                  }}>
                    <span style={{ color: c.muted }}>f(x) =</span>
                    <span>{fmt(s.fx)}</span>
                  </div>
                  <div style={{
                    textAlign: 'center',
                    fontFamily: monoStack, fontSize: 11, color: c.muted,
                    margin: '4px 0',
                  }}>
                    &darr; as &epsilon; &rarr; 0
                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontFamily: monoStack, fontSize: 14,
                    color: highlightColor, fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    <span>{s.Lname} =</span>
                    <span>{fmt(s.L)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTERPIECE: result + verdict */}
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
                  Limit at x = c
                </span>
                <span style={{ fontFamily: monoStack, fontSize: 13, color: c.inkSoft }}>
                  c = {fam.c}
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
                  }}>Left limit L&#8315;</div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(fam.Lminus)}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2, fontFamily: monoStack,
                  }}>lim x&rarr;c&#8315; f(x)</div>
                </div>
                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                  }}>Right limit L&#8314;</div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{fmt(fam.Lplus)}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2, fontFamily: monoStack,
                  }}>lim x&rarr;c&#8314; f(x)</div>
                </div>
                <div style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${panelTones.border}`,
                  borderRadius: 6, padding: '10px 12px',
                }}>
                  <div style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600, marginBottom: 4,
                  }}>Two-sided limit</div>
                  <div style={{
                    fontFamily: monoStack, fontSize: 18, fontWeight: 700,
                    color: c.ink, fontVariantNumeric: 'tabular-nums',
                  }}>{v.limitExists ? fmt(v.limitValue) : 'DNE'}</div>
                  <div style={{
                    fontSize: 11, color: c.muted, marginTop: 2, fontFamily: monoStack,
                  }}>{v.limitExists ? 'L\u207B = L\u207A' : v.verdictTag}</div>
                </div>
              </div>

              {/* Limit verdict row */}
              <div style={{
                marginTop: 10, padding: '10px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${panelTones.border}`,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 12.5, color: c.inkSoft,
              }}>
                <span>
                  <strong style={{ color: c.ink }}>{v.verdictTitle}</strong>{' '}
                  {v.verdictDetail}
                </span>
                <span style={verdictTagStyle(v.verdictKind)}>{v.verdictTag}</span>
              </div>

              {/* Continuity verdict row */}
              <div style={{
                marginTop: 8, padding: '10px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${panelTones.border}`,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 12.5, color: c.inkSoft,
              }}>
                <span>
                  <strong style={{ color: c.ink }}>f(c) = </strong>
                  {Number.isFinite(fam.Fc) ? fmt(fam.Fc) : 'undefined'}.{' '}
                  {v.contDetail}
                </span>
                <span style={verdictTagStyle(v.contLabel === 'continuous' ? 'ok' : 'bad')}>
                  {v.contLabel}
                </span>
              </div>
            </div>

            {/* CHIPS */}
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
                <span style={{ fontWeight: 600, color: highlightColor }}>c</span>
                <span>=</span>
                <span>{fam.c}</span>
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 9px', borderRadius: 5,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                color: c.accentText, background: c.accentSoft,
                border: `1px solid ${c.accentBorder}`, fontWeight: 600,
              }}>
                <span style={{ fontWeight: 600, color: highlightColor }}>&epsilon;</span>
                <span>=</span>
                <span>{fmt(eps)}</span>
              </span>
              <span style={{ width: 1, height: 16, background: c.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>L&#8315; = L&#8314; &rArr; limit exists</span>
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


/* ================================================================
   HELPERS — find which curve owns a given x (for piecewise families)
   ================================================================ */

function pickCurveAt(fam, x) {
  for (const cv of fam.curves) {
    const d = cv.domain;
    if (!d) return cv;
    if (Number.isFinite(d.from)) {
      if (d.fromKind === 'open' && !(x > d.from)) continue;
      if (d.fromKind !== 'open' && !(x >= d.from)) continue;
    }
    if (Number.isFinite(d.to)) {
      if (d.toKind === 'open' && !(x < d.to)) continue;
      if (d.toKind !== 'open' && !(x <= d.to)) continue;
    }
    return cv;
  }
  return fam.curves[0];
}

function evalAt(fam, x) {
  const cv = pickCurveAt(fam, x);
  if (!cv) return NaN;
  try { return cv.fn(x); } catch { return NaN; }
}