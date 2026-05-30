/**
 * FunctionContinuity — v1
 *
 * Continuity Checker. The three-condition checklist as a live UI:
 *   1. f(c) is defined.
 *   2. lim x → c f(x) exists.
 *   3. f(c) equals that limit.
 * All three pass → continuous at c. Otherwise the failure type names
 * the discontinuity (removable / jump / infinite).
 *
 * c is a slider, not fixed per family. Most c values pass all three
 * checks; the interesting points are the few where one fails. Each
 * family ships its known points of interest as jump-to buttons so
 * the student can hop directly to them.
 *
 * Pairs with FunctionLimit. Where Limit Explorer focuses on the
 * approach (ε slider, L⁻ vs L⁺), Continuity Checker focuses on the
 * verdict (three pass/fail rows that update live as c moves).
 *
 * Built on FunctionVisualizerCorePro. Uses:
 *   - functions[] with per-curve `domain` for piecewise families
 *     (jump, staircase) so step boundaries get clean open/closed
 *     endpoint markers automatically
 *   - `verticalLines` for the dashed line at x = c
 *   - `horizontalLines` for L⁻ and L⁺ reference lines
 *   - `customPoints` for limit markers and the f(c) point
 *   - `labelMode="none"` — legend in HTML below the graph
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'hole'
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
   COLORS  (all blue variants; red reserved for explicit fail state)
   ================================================================ */

const COL = {
  f:        '#3b82f6',
  fp:       '#1e3a8a',
  limit:    '#60a5fa',
  link:     '#94a3b8',
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
   STAIRCASE HELPER — generate per-step curves with domains
   ================================================================ */

function buildStaircaseCurves(xMin, xMax) {
  const curves = [];
  for (let i = Math.floor(xMin); i < Math.ceil(xMax); i++) {
    const height = i + 0.5;
    curves.push({
      fn: () => height,
      domain: { from: i, fromKind: 'closed', to: i + 1, toKind: 'open' },
    });
  }
  return curves;
}


/* ================================================================
   FAMILIES
   ----------------------------------------------------------------
   Each family:
     - name, group?, glyph, eq, intro
     - curves: [{ fn, domain? }]  (piecewise rendering via core domain)
     - pois:   [x, ...]  (interesting x values to jump to)
     - info:   (c) => { Lminus, Lplus, Fc }  (analytical, not sampled)
   ================================================================ */

export const FAMILIES = {
  smooth: {
    name: 'Smooth (x\u00b2)',
    glyph: 'M2,4 Q13,30 24,4',
    eq: 'f(x) = x\u00b2',
    intro: 'A polynomial — continuous everywhere. The checklist passes at every c.',
    curves: [{ fn: x => x * x }],
    pois: [],
    info: c => ({ Lminus: c*c, Lplus: c*c, Fc: c*c }),
  },
  hole: {
    name: 'Hole at x=1',
    glyph: 'M2,22 L12,11 M14,9 L24,4',
    eq: 'f(x) = (x\u00b2 \u2212 1) / (x \u2212 1)',
    intro: 'A hole. The simplified form would be x + 1, but the original isn\u2019t defined at x = 1.',
    curves: [{ fn: x => (Math.abs(x - 1) < 1e-12 ? NaN : (x*x - 1) / (x - 1)) }],
    pois: [1],
    info: c => {
      const Fc = Math.abs(c - 1) < 1e-12 ? NaN : (c*c - 1) / (c - 1);
      const Lim = c + 1;
      return { Lminus: Lim, Lplus: Lim, Fc };
    },
  },
  jump: {
    name: 'Jump at x=0',
    glyph: 'M2,18 L12,18 M14,9 L24,9',
    eq: 'f(x) = x for x<0; x+1 for x\u22650',
    intro: 'A jump. Continuous everywhere except c = 0.',
    curves: [
      { fn: x => x,     domain: { to: 0,   toKind:   'open'   } },
      { fn: x => x + 1, domain: { from: 0, fromKind: 'closed' } },
    ],
    pois: [0],
    info: c => {
      if (Math.abs(c) < 1e-12) return { Lminus: 0, Lplus: 1, Fc: 1 };
      if (c < 0) return { Lminus: c,     Lplus: c,     Fc: c };
      return       { Lminus: c + 1, Lplus: c + 1, Fc: c + 1 };
    },
  },
  wrongvalue: {
    name: 'Wrong value at x=1',
    glyph: 'M2,18 L12,11 M14,9 L24,4',
    eq: 'f(x) = x+1 for x\u22601;  f(1) = 0',
    intro: 'A line, but the value at x = 1 was set to 0 instead of the natural 2. Limit exists, f(c) defined, but they disagree.',
    curves: [
      { fn: x => x + 1, domain: { to: 1, toKind: 'open' } },
      { fn: x => x + 1, domain: { from: 1, fromKind: 'open' } },
      // single-point curve at x=1 — rendered as a dot via customPoints below
    ],
    pois: [1],
    info: c => {
      const Fc = Math.abs(c - 1) < 1e-12 ? 0 : c + 1;
      const Lim = c + 1;
      return { Lminus: Lim, Lplus: Lim, Fc };
    },
  },
  asymptote: {
    name: 'Asymptote at x=0',
    glyph: 'M2,26 Q11,26 12,3 M14,3 Q15,26 24,26',
    eq: 'f(x) = 1/x\u00b2',
    intro: 'Vertical asymptote at c = 0. Not continuous, not removable.',
    curves: [{ fn: x => 1 / (x * x) }],
    pois: [0],
    info: c => {
      if (Math.abs(c) < 1e-12) return { Lminus: INF, Lplus: INF, Fc: NaN };
      const v = 1 / (c * c);
      return { Lminus: v, Lplus: v, Fc: v };
    },
  },
  staircase: {
    name: 'Staircase',
    glyph: 'M2,22 L9,22 M9,14 L16,14 M16,6 L23,6',
    eq: 'f(x) = \u230Ax\u230B + 0.5',
    intro: 'Continuous on each step, jump at every integer. Use the jump-to buttons to walk through the discontinuities.',
    curves: buildStaircaseCurves(-4, 4),
    pois: [-2, -1, 0, 1, 2],
    info: c => {
      const isInt = Math.abs(c - Math.round(c)) < 1e-9;
      if (isInt) {
        return { Lminus: c - 0.5, Lplus: c + 0.5, Fc: c + 0.5 };
      }
      const v = Math.floor(c) + 0.5;
      return { Lminus: v, Lplus: v, Fc: v };
    },
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   CLASSIFY — three-condition checklist + verdict
   ================================================================ */

function classify(info) {
  const { Lminus, Lplus, Fc } = info;
  const limitExists =
    Number.isFinite(Lminus) && Number.isFinite(Lplus) &&
    Math.abs(Lminus - Lplus) < 1e-9;
  const limitValue = limitExists ? Lminus : null;

  const c1pass = Number.isFinite(Fc);
  const c2pass = limitExists;
  const c3pass = c1pass && c2pass && Math.abs(Fc - limitValue) < 1e-9;

  const continuous = c1pass && c2pass && c3pass;

  let kind, kindDetail;
  if (continuous) {
    kind = 'continuous';
    kindDetail = 'all three conditions pass.';
  } else if (!c2pass) {
    if (!Number.isFinite(Lminus) || !Number.isFinite(Lplus)) {
      kind = 'infinite';
      kindDetail = 'vertical asymptote; not removable.';
    } else {
      kind = 'jump';
      kindDetail = 'one-sided limits disagree; not removable.';
    }
  } else if (!c1pass) {
    kind = 'removable';
    kindDetail = 'limit exists but f(c) undefined; patch f(c) = ' + fmt(limitValue) + ' and it\u2019s fixed.';
  } else {
    kind = 'removable';
    kindDetail = 'f(c) \u2260 lim; patch f(c) = ' + fmt(limitValue) + ' and it\u2019s fixed.';
  }

  return { Lminus, Lplus, Fc, limitExists, limitValue, c1pass, c2pass, c3pass, continuous, kind, kindDetail };
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
   VIEW BOUNDS — fixed window per family
   ================================================================ */

function viewBoundsFor(famKey) {
  switch (famKey) {
    case 'smooth':     return { xMin: -3.5, xMax: 3.5, yMin: -1,   yMax: 9   };
    case 'hole':       return { xMin: -3.5, xMax: 3.5, yMin: -3,   yMax: 5   };
    case 'jump':       return { xMin: -3.5, xMax: 3.5, yMin: -4,   yMax: 4   };
    case 'wrongvalue': return { xMin: -3.5, xMax: 3.5, yMin: -2,   yMax: 5   };
    case 'asymptote':  return { xMin: -3.5, xMax: 3.5, yMin: -1,   yMax: 8   };
    case 'staircase':  return { xMin: -3.5, xMax: 3.5, yMin: -3.5, yMax: 3.5 };
    default:           return { xMin: -3.5, xMax: 3.5, yMin: -4,   yMax: 4   };
  }
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionContinuity({
  initialFamily = 'hole',
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
  const [c, setC] = useState(startFam.pois.length ? startFam.pois[0] : 0);
  const [showF,      setShowF]      = useState(true);
  const [showLimits, setShowLimits] = useState(true);
  const [showC,      setShowC]      = useState(true);
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

  /* Functions to draw — one per curve in the family. */
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

  /* Live limit + Fc computation at the current c. */
  const info = useMemo(() => fam.info(c), [fam, c]);
  const v = useMemo(() => classify(info), [info]);

  /* Dashed vertical at x = c. */
  const verticalLines = useMemo(() => {
    if (!showC) return [];
    return [{ x: c, color: COL.link, stroke: 1.5, pattern: [5, 4], label: `c = ${fmt(c, 2)}` }];
  }, [c, showC]);

  /* Horizontal limit lines (when finite). */
  const horizontalLines = useMemo(() => {
    if (!showLimits) return [];
    const out = [];
    if (Number.isFinite(info.Lminus)) {
      out.push({ y: info.Lminus, color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L\u207B = ${fmt(info.Lminus)}` });
    }
    if (Number.isFinite(info.Lplus) && info.Lplus !== info.Lminus) {
      out.push({ y: info.Lplus, color: COL.limit, stroke: 1.5, pattern: [6, 4], label: `L\u207A = ${fmt(info.Lplus)}` });
    }
    return out;
  }, [info.Lminus, info.Lplus, showLimits]);

  /* Markers at (c, L⁻), (c, L⁺), (c, f(c)). */
  const customPoints = useMemo(() => {
    const pts = [];
    if (showLimits) {
      if (Number.isFinite(info.Lminus)) {
        pts.push({ x: c, y: info.Lminus, color: COL.f, label: `L\u207B = ${fmt(info.Lminus)}` });
      }
      if (Number.isFinite(info.Lplus) && info.Lplus !== info.Lminus) {
        pts.push({ x: c, y: info.Lplus, color: COL.f, label: `L\u207A = ${fmt(info.Lplus)}` });
      }
    }
    if (Number.isFinite(info.Fc) && info.Fc !== info.Lminus && info.Fc !== info.Lplus) {
      pts.push({ x: c, y: info.Fc, color: COL.fp, label: `f(c) = ${fmt(info.Fc)}` });
    }
    return pts;
  }, [c, info, showLimits]);

  /* Viewport per family. */
  const viewport = useMemo(() => viewBoundsFor(current), [current]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    const failed = [!v.c1pass && '1', !v.c2pass && '2', !v.c3pass && '3'].filter(Boolean);
    const summary = v.continuous
      ? 'All three conditions pass — continuous at this c.'
      : `Check ${failed.join(' and ')} fails — not continuous at this c.`;
    return (
      `## ${fam.name} at c = ${fmt(c, 2)}\n\n` +
      `${fam.intro}\n\n` +
      `**Function** · $${fam.eq}$\n\n` +
      `### Right now\n\n` +
      `f(c) = $${fmt(v.Fc)}$; $L^-$ = $${fmt(v.Lminus)}$, $L^+$ = $${fmt(v.Lplus)}$. ${summary}\n\n` +
      `### What c controls\n\n` +
      `Slide c to test the three conditions at any point. At most c the checklist passes — f is continuous almost everywhere. The interesting points are the few where at least one check fails. Use the jump-to buttons to land on them directly.`
    );
  }, [fam, c, v]);

  const conceptsContent =
    '## What it means to be continuous at c\n\n' +
    'The definition has three parts that all have to hold:\n\n' +
    '1. **f(c) is defined.** The function actually has a value at the point.\n' +
    '2. **lim x \u2192 c f(x) exists.** Both one-sided limits exist and agree on a single finite value.\n' +
    '3. **f(c) = lim x \u2192 c f(x).** The actual value matches the limit.\n\n' +
    'If all three pass, $f$ is **continuous at c**. If any one fails, it&apos;s **discontinuous**, and the failure type names the discontinuity:\n\n' +
    '- Condition 1 fails (but 2 still passes): **removable** — patch f(c) and it&apos;s fixed.\n' +
    '- Condition 2 fails because $L^- \\ne L^+$ (both finite): **jump**.\n' +
    '- Condition 2 fails because a one-sided limit is infinite: **infinite** — vertical asymptote.\n' +
    '- Condition 3 fails (1 and 2 pass): **removable** — f has a value but the wrong one; patch f(c) and it&apos;s fixed.\n\n' +
    'Removable discontinuities are special because a single targeted patch — redefining f(c) — would restore continuity. Jump and infinite are not patchable.\n\n' +
    '### Continuous on an interval\n\n' +
    'A function is continuous on an interval if it&apos;s continuous at every point in that interval. Polynomials, $\\sin$, $\\cos$, $e^x$, $\\sqrt{x}$ on its domain, $\\ln$ on its domain — all continuous on their entire domains. Most discontinuities you meet in practice live at isolated points: where you divide by zero, take a log of zero, or splice two pieces of a function together.';

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

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 460,
    ...visualizerProps,
  };

  const selectFamily = (key) => {
    setCurrent(key);
    const nextFam = families[key];
    setC(nextFam.pois.length ? nextFam.pois[0] : 0);
  };

  const resetC = () => {
    setC(fam.pois.length ? fam.pois[0] : 0);
  };

  /* ---- Display toggle ---- */
  const Toggle = ({ checked, onChange, swatchColor, style, label }) => (
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
        borderTop: `2.5px ${style} ${swatchColor}`,
      }} />
      <span style={{ fontFamily: monoStack, fontSize: 12 }}>{label}</span>
    </label>
  );

  /* ---- c slider + POI bar ---- */
  const renderCSlider = () => (
    <div>
      <label style={{
        display: 'flex', justifyContent: 'space-between', fontSize: 12,
        color: ctok.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          point c
          <span style={{
            fontSize: 9, fontWeight: 700,
            color: panelTones.text, background: panelTones.soft,
            padding: '1px 5px', borderRadius: 3,
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>slide to probe</span>
        </span>
        <span style={{ fontFamily: monoStack, color: highlightColor, fontWeight: 600 }}>
          {fmt(c, 2)}
        </span>
      </label>
      <input
        type="range" min={-3} max={3} step={0.05}
        value={c}
        onChange={e => setC(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: highlightColor, cursor: 'pointer' }}
      />
    </div>
  );

  const renderPOI = () => {
    if (!fam.pois.length) return null;
    return (
      <div style={{
        marginTop: 10, paddingTop: 8,
        display: 'flex', flexWrap: 'wrap', gap: 4,
      }}>
        <span style={{
          fontSize: 10, color: ctok.muted, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.05em',
          marginRight: 2, alignSelf: 'center',
        }}>Jump to</span>
        {fam.pois.map((x, i) => {
          const active = Math.abs(x - c) < 0.02;
          return (
            <button
              key={i}
              onClick={() => setC(x)}
              style={{
                fontFamily: monoStack, fontSize: 11,
                padding: '3px 7px',
                border: `1px solid ${panelTones.border}`,
                background: active ? highlightColor : (darkMode ? ctok.soft : '#fff'),
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
      </div>
    );
  };

  /* ---- Legend below graph ---- */
  const renderLegend = () => {
    const items = [];
    if (showF)      items.push({ c: COL.f,     style: 'solid',  text: 'f(x)' });
    if (showLimits) items.push({ c: COL.limit, style: 'dashed', text: 'L\u207B and L\u207A' });
    if (showC)      items.push({ c: COL.link,  style: 'dashed', text: 'x = c' });
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

  /* ---- Checkmark renderer ---- */
  const Mark = ({ pass }) => (
    <span style={{
      width: 26, height: 26, borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: 15,
      fontFamily: monoStack,
      background: pass ? ctok.okSoft : ctok.badSoft,
      color: pass ? ctok.okText : ctok.badText,
    }}>{pass ? '\u2713' : '\u2715'}</span>
  );

  /* ---- Check row ---- */
  const CheckRow = ({ num, title, pass, detail }) => (
    <div style={{
      background: darkMode ? '#0f172a' : '#fff',
      border: `1px solid ${panelTones.border}`,
      borderRadius: 6,
      padding: '10px 14px',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <Mark pass={pass} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13, color: ctok.ink, fontWeight: 600, marginBottom: 2,
        }}>
          <span style={{
            color: ctok.muted, fontWeight: 700, marginRight: 6,
            fontFamily: monoStack,
          }}>{num}.</span>
          {title}
        </div>
        <div style={{
          fontSize: 12,
          color: pass ? ctok.inkSoft : ctok.badText,
          fontFamily: monoStack,
          fontVariantNumeric: 'tabular-nums',
        }}>{detail}</div>
      </div>
    </div>
  );

  /* ---- Check row details for the current state ---- */
  const c1Detail = v.c1pass
    ? `f(${fmt(c, 2)}) = ${fmt(v.Fc)}`
    : `f(${fmt(c, 2)}) is ${v.Fc === INF || v.Fc === -INF ? fmt(v.Fc) : 'undefined'}`;

  let c2Detail;
  if (v.c2pass) {
    c2Detail = `L\u207B = L\u207A = ${fmt(v.limitValue)}`;
  } else if (!Number.isFinite(v.Lminus) && !Number.isFinite(v.Lplus)) {
    c2Detail = `one-sided limits not finite (L\u207B = ${fmt(v.Lminus)}, L\u207A = ${fmt(v.Lplus)})`;
  } else if (!Number.isFinite(v.Lminus)) {
    c2Detail = `L\u207B = ${fmt(v.Lminus)} is not finite`;
  } else if (!Number.isFinite(v.Lplus)) {
    c2Detail = `L\u207A = ${fmt(v.Lplus)} is not finite`;
  } else {
    c2Detail = `L\u207B = ${fmt(v.Lminus)} \u2260 L\u207A = ${fmt(v.Lplus)}`;
  }

  let c3Detail;
  if (!v.c1pass) c3Detail = 'f(c) is undefined, so this can\u2019t hold';
  else if (!v.c2pass) c3Detail = 'limit doesn\u2019t exist, so this can\u2019t hold';
  else if (v.c3pass) c3Detail = `f(c) = ${fmt(v.Fc)} = lim`;
  else c3Detail = `f(c) = ${fmt(v.Fc)} \u2260 lim = ${fmt(v.limitValue)}`;

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
          <nav style={{ ...card, width: 260, padding: 10, flexShrink: 0 }}>
            <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Function</div>
            {Object.entries(families).map(([key, f]) => (
              <button
                key={key}
                style={famBtn(key === current)}
                onClick={() => selectFamily(key)}
              >
                <FamilyGlyph d={f.glyph} active={key === current} darkMode={darkMode} />
                <span>{f.name}</span>
              </button>
            ))}

            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${ctok.borderSoft}` }}>
              <div style={{ ...sectionTitle, margin: '0 4px 4px' }}>Display</div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '0 4px' }}>
                <Toggle checked={showF}      onChange={setShowF}      swatchColor={COL.f}     style="solid"  label="f(x)" />
                <Toggle checked={showLimits} onChange={setShowLimits} swatchColor={COL.limit} style="dashed" label="L\u207B, L\u207A" />
                <Toggle checked={showC}      onChange={setShowC}      swatchColor={COL.link}  style="dashed" label="x = c" />
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
                <button onClick={resetC} style={{
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${ctok.border}`, color: ctok.inkSoft,
                  padding: '3px 8px', borderRadius: 5,
                  fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                }}>Reset</button>
              </div>
              <div style={{ padding: '0 4px' }}>
                {renderCSlider()}
                {renderPOI()}
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
              horizontalLines={horizontalLines}
              customPoints={customPoints}
              {...mergedVisualizerProps}
            />

            {renderLegend()}

            {/* ===== CHECKLIST ===== */}
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
                }}>Three-condition checklist</span>
                <span style={{
                  fontFamily: monoStack, fontSize: 13, color: ctok.inkSoft,
                }}>at c = {fmt(c, 2)}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <CheckRow num={1} pass={v.c1pass}
                          title="f(c) is defined"
                          detail={c1Detail} />
                <CheckRow num={2} pass={v.c2pass}
                          title={'lim x \u2192 c f(x) exists'}
                          detail={c2Detail} />
                <CheckRow num={3} pass={v.c3pass}
                          title={'f(c) = lim x \u2192 c f(x)'}
                          detail={c3Detail} />
              </div>

              {/* Final verdict */}
              <div style={{
                marginTop: 12, padding: '12px 14px',
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 12,
                fontSize: 13,
                background: v.continuous ? ctok.okSoft : ctok.badSoft,
                border: `1px solid ${v.continuous ? panelTones.border : ctok.badBorder}`,
                color: v.continuous ? ctok.okText : ctok.badText,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 16,
                  color: v.continuous ? ctok.okText : ctok.badText,
                  flexShrink: 0,
                }}>{v.continuous ? '\u2713' : '\u2715'}</span>
                <span style={{ flex: 1 }}>
                  <strong style={{ fontSize: 14 }}>
                    {v.continuous ? 'Continuous at c' : 'Not continuous'}
                  </strong>
                  {' '}— {v.kindDetail}
                </span>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  padding: '3px 8px', borderRadius: 4,
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  background: '#fff',
                  color: v.continuous ? ctok.okText : ctok.badText,
                }}>{v.kind}</span>
              </div>
            </div>

            {/* CHIPS */}
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
                <span style={{ fontWeight: 600, color: highlightColor }}>c</span>
                <span>=</span>
                <span>{fmt(c, 2)}</span>
              </span>
              <span style={{ width: 1, height: 16, background: ctok.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>all 3 pass &rArr; continuous</span>
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