/**
 * FunctionComposition — v1 (demo)
 *
 * Function Composition Explorer. Pick an outer function f and an inner
 * function g; the visualizer shows four curves at once:
 *   - f(x)          — outer alone
 *   - g(x)          — inner alone
 *   - (f∘g)(x)      — f after g
 *   - (g∘f)(x)      — g after f
 *
 * Each curve has a colored legend chip in the visualizer card; clicking
 * a chip toggles that curve's visibility. The InfoPanel shows the
 * symbolic forms of both compositions and a short note on why they
 * generally differ.
 *
 * Built from the same primitives as FunctionGallery and
 * FunctionTransformations: VisualizerWithControls + InfoPanel + the
 * family-picker pattern.
 *
 * PROPS (all optional)
 *   initialF, initialG : string         — starting family keys
 *   families           : object         — override built-in FAMILIES
 *   visualizerProps    : object         — forwarded to VisualizerWithControls
 *   infoPanelProps     : object         — forwarded to InfoPanel
 *   darkMode           : boolean
 *   showPickers        : boolean
 *   showInfoPanel      : boolean
 *   maxWidth           : string|number  — wrapper cap; default '80vw'
 */

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS
   ================================================================ */

const COL = {
  f:   '#94a3b8', // outer alone (gray, reference)
  g:   '#14b8a6', // inner alone (teal)
  fog: '#3b82f6', // f after g  (blue — primary)
  gof: '#f59e0b', // g after f  (amber — contrast)
};


/* ================================================================
   FAMILIES
   ================================================================
   Each family declares:
     - name, glyph (small SVG path for the picker)
     - fn(x)       : numeric evaluator
     - eq          : pretty string for "f(x) = ..."
     - bodyOf(inner) : how the function reads when its input is the
                       string `inner`. Composed with the inner family's
                       bodyOf('x'), this builds a readable composed
                       expression (e.g. "(sin(x))²").
*/

export const FAMILIES = {
  identity: {
    name: 'Identity',
    glyph: 'M2,22 L24,4',
    fn: x => x,
    eq: 'x',
    bodyOf: i => i,
  },
  quadratic: {
    name: 'Quadratic',
    glyph: 'M2,4 Q13,30 24,4',
    fn: x => x * x,
    eq: 'x²',
    bodyOf: i => `(${i})²`,
  },
  cubic: {
    name: 'Cubic',
    glyph: 'M2,22 C8,2 16,30 24,8',
    fn: x => x * x * x,
    eq: 'x³',
    bodyOf: i => `(${i})³`,
  },
  reciprocal: {
    name: 'Reciprocal',
    glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    fn: x => (x === 0 ? NaN : 1 / x),
    eq: '1/x',
    bodyOf: i => `1/(${i})`,
  },
  exponential: {
    name: 'Exponential',
    glyph: 'M2,26 Q16,26 24,2',
    fn: x => Math.exp(x),
    eq: 'eˣ',
    bodyOf: i => `e^(${i})`,
  },
  logarithmic: {
    name: 'Logarithmic',
    glyph: 'M2,2 Q10,26 24,26',
    fn: x => (x > 0 ? Math.log(x) : NaN),
    eq: 'ln(x)',
    bodyOf: i => `ln(${i})`,
  },
  sine: {
    name: 'Sine',
    group: 'Trigonometric',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    fn: x => Math.sin(x),
    eq: 'sin(x)',
    bodyOf: i => `sin(${i})`,
  },
  cosine: {
    name: 'Cosine',
    group: 'Trigonometric',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    fn: x => Math.cos(x),
    eq: 'cos(x)',
    bodyOf: i => `cos(${i})`,
  },
  absolute: {
    name: 'Absolute',
    glyph: 'M2,4 L13,24 L24,4',
    fn: x => Math.abs(x),
    eq: '|x|',
    bodyOf: i => `|${i}|`,
  },
  sqrt: {
    name: 'Square root',
    glyph: 'M2,24 Q4,8 24,4',
    fn: x => (x >= 0 ? Math.sqrt(x) : NaN),
    eq: '√x',
    bodyOf: i => `√(${i})`,
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   COMPOSITION HELPERS
   ================================================================ */

function composeNumeric(outer, inner) {
  return x => {
    const inside = inner.fn(x);
    if (!Number.isFinite(inside)) return NaN;
    return outer.fn(inside);
  };
}

function composeSymbolic(outer, inner) {
  // outer( inner(x) )  →  outer.bodyOf( inner.bodyOf('x') )
  return outer.bodyOf(inner.bodyOf('x'));
}

/* A tiny pedagogical note when the two compositions happen to coincide
   (or have a notable simplification). Returns a markdown snippet or null. */
function compositionNote(fKey, gKey) {
  if (fKey === gKey) {
    return `Since f and g are the **same** function, $f \\circ g = g \\circ f$ trivially.`;
  }
  if (fKey === 'identity') {
    return `With the identity as outer, $f(g(x)) = g(x)$ — the inner function passes through unchanged.`;
  }
  if (gKey === 'identity') {
    return `With the identity as inner, $g(f(x)) = f(x)$ — the outer function passes through unchanged.`;
  }
  if ((fKey === 'sqrt' && gKey === 'quadratic') || (fKey === 'quadratic' && gKey === 'sqrt')) {
    return `Notable: $\\sqrt{x^2} = |x|$, but $(\\sqrt{x})^2 = x$ only for $x \\geq 0$. The two compositions are **not** equal — this pair shows the asymmetry vividly.`;
  }
  if ((fKey === 'exponential' && gKey === 'logarithmic') || (fKey === 'logarithmic' && gKey === 'exponential')) {
    return `These are **inverses**: $e^{\\ln x} = x$ for $x > 0$, and $\\ln(e^x) = x$ for all $x$. Both compositions collapse to (a restriction of) the identity.`;
  }
  return null;
}


/* ================================================================
   PICKER ENTRIES (grouped headers, like FunctionGallery v6)
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

function FamilyGlyph({ d, active, darkMode, color }) {
  const stroke = active ? (color || '#3b82f6') : (darkMode ? '#64748b' : '#94a3b8');
  return (
    <svg width="22" height="22" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none" stroke={stroke}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionComposition({
  initialF = 'quadratic',
  initialG = 'sine',
  families = DEFAULT_FAMILIES,
  visualizerProps = {},
  infoPanelProps = {},
  darkMode = false,
  showPickers = true,
  showInfoPanel = true,
  maxWidth = '80vw',
}) {
  const familyKeys = Object.keys(families);
  const startF = families[initialF] ? initialF : familyKeys[0];
  const startG = families[initialG] ? initialG : familyKeys[0];

  const [fKey, setFKey] = useState(startF);
  const [gKey, setGKey] = useState(startG);
  const [visible, setVisible] = useState({ f: false, g: false, fog: true, gof: true });

  const f = families[fKey] || families[familyKeys[0]];
  const g = families[gKey] || families[familyKeys[0]];

  const fogExpr = useMemo(() => composeSymbolic(f, g), [f, g]);
  const gofExpr = useMemo(() => composeSymbolic(g, f), [f, g]);

  const functions = useMemo(() => [
    { fn: f.fn, color: COL.f, label: 'f',   formula: `f(x) = ${f.eq}`, visible: visible.f,   stroke: 1.5, pattern: [4, 4] },
    { fn: g.fn, color: COL.g, label: 'g',   formula: `g(x) = ${g.eq}`, visible: visible.g,   stroke: 1.5, pattern: [4, 4] },
    { fn: composeNumeric(f, g), color: COL.fog, label: 'f∘g', formula: `f(g(x)) = ${fogExpr}`, visible: visible.fog, stroke: 2.5 },
    { fn: composeNumeric(g, f), color: COL.gof, label: 'g∘f', formula: `g(f(x)) = ${gofExpr}`, visible: visible.gof, stroke: 2.5 },
  ], [f, g, fogExpr, gofExpr, visible]);

  /* ---- Info panel content ---- */
  const note = compositionNote(fKey, gKey);
  const explanationContent = useMemo(() => {
    return (
      `## Composition · ${f.name} ∘ ${g.name}\n\n` +
      `**$f(x) = ${f.eq}$** · **$g(x) = ${g.eq}$**\n\n` +
      `### Both compositions\n` +
      `- $(f \\circ g)(x) = f(g(x)) = ${fogExpr}$\n` +
      `- $(g \\circ f)(x) = g(f(x)) = ${gofExpr}$\n\n` +
      `### Why the order matters\n` +
      `Composition is **not commutative**: $f \\circ g$ first applies $g$ to $x$, then feeds the result into $f$. ` +
      `Swapping the order changes what gets evaluated first, and usually changes the answer.\n\n` +
      (note ? `### Notable\n${note}\n` : '')
    );
  }, [f, g, fogExpr, gofExpr, note]);

  const infoTabs = useMemo(() => ([
    { key: 'explanation', label: 'Explanation', order: 0, content: explanationContent },
    {
      key: 'guide',
      label: 'Guide',
      order: 10,
      content:
        '## How to read the graph\n\n' +
        '- **f** (dashed gray) — the outer function alone\n' +
        '- **g** (dashed teal) — the inner function alone\n' +
        '- **f∘g** (solid blue) — first $g$, then $f$\n' +
        '- **g∘f** (solid amber) — first $f$, then $g$\n\n' +
        'Click any chip in the legend to toggle a curve on or off. By default only the two compositions are shown, ' +
        'so the asymmetry between $f \\circ g$ and $g \\circ f$ is the main thing on screen.',
    },
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
  };

  const sectionHeader = {
    fontSize: 10.5,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: c.muted,
    fontWeight: 600,
    margin: '6px 8px 8px',
  };
  const subHeader = {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: c.muted,
    fontWeight: 600,
    margin: '10px 8px 4px',
  };

  const famBtn = (active, role) => ({
    display: 'flex', alignItems: 'center', gap: 8, width: '100%', textAlign: 'left',
    border: '1px solid transparent',
    background: active
      ? (role === 'f'
          ? (darkMode ? 'rgba(148,163,184,0.15)' : 'rgba(148,163,184,0.18)')
          : (darkMode ? 'rgba(20,184,166,0.18)'  : 'rgba(20,184,166,0.12)'))
      : 'none',
    borderColor: active
      ? (role === 'f' ? COL.f : COL.g)
      : 'transparent',
    borderRadius: 8,
    padding: '8px 10px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 12.5,
    fontWeight: active ? 600 : 400,
    color: c.inkSoft,
    transition: 'background 0.12s, border-color 0.12s',
  });

  const pickerEntries = buildPickerEntries(families);

  const renderPicker = (role, currentKey, setKey, label, color) => (
    <div>
      <div style={subHeader}>
        <span style={{
          display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
          background: color, marginRight: 6, verticalAlign: 'middle',
        }} />
        {label}
      </div>
      {pickerEntries.map(e =>
        e.type === 'header'
          ? <div key={`${role}-${e.key}`} style={subHeader}>{e.label}</div>
          : (
            <button
              key={`${role}-${e.key}`}
              style={famBtn(e.key === currentKey, role)}
              onClick={() => setKey(e.key)}
            >
              <FamilyGlyph d={e.fam.glyph} active={e.key === currentKey} darkMode={darkMode} color={color} />
              <span>{e.fam.name}</span>
            </button>
          )
      )}
    </div>
  );

  const LegendChip = ({ k, label, formula, color }) => {
    const on = visible[k];
    return (
      <button
        onClick={() => setVisible(v => ({ ...v, [k]: !v[k] }))}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 10px', borderRadius: 8,
          border: `1px solid ${on ? color : c.borderSoft}`,
          background: on
            ? (darkMode ? 'rgba(255,255,255,0.04)' : '#fff')
            : (darkMode ? '#0f172a' : c.softer),
          color: on ? c.ink : c.muted,
          opacity: on ? 1 : 0.65,
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 12,
          transition: 'all 0.15s',
        }}
        title={on ? 'Click to hide' : 'Click to show'}
      >
        <span style={{
          width: 14, height: 4, borderRadius: 2,
          background: color, flexShrink: 0,
        }} />
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{
          fontFamily: monoStack, fontSize: 11,
          color: on ? c.inkSoft : c.muted,
        }}>{formula}</span>
      </button>
    );
  };

  /* Larger canvas: same trade-off as FunctionTransformations v2.
     Caller can override via visualizerProps.defaultWidth/Height. */
  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 600,
    ...visualizerProps,
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

        {showPickers && (
          <nav style={{ ...card, width: 220, padding: 10, flexShrink: 0 }}>
            <div style={sectionHeader}>Compose f ∘ g</div>
            {renderPicker('f', fKey, setFKey, 'Outer (f)', COL.f)}
            <div style={{
              margin: '14px 0',
              borderTop: `1px solid ${c.borderSoft}`,
            }} />
            {renderPicker('g', gKey, setGKey, 'Inner (g)', COL.g)}
          </nav>
        )}

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>
                {f.name} ∘ {g.name}
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 12,
                padding: '3px 8px', borderRadius: 5,
                color: c.inkSoft, background: c.softer,
              }}>
                f(x) = {f.eq} · g(x) = {g.eq}
              </span>
            </div>

            <VisualizerWithControls
              functions={functions}
              zoom={10}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              {...mergedVisualizerProps}
            />

            <div style={{
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8,
              display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Show</span>
              <LegendChip k="f"   label="f"   formula={f.eq}    color={COL.f} />
              <LegendChip k="g"   label="g"   formula={g.eq}    color={COL.g} />
              <LegendChip k="fog" label="f∘g" formula={fogExpr} color={COL.fog} />
              <LegendChip k="gof" label="g∘f" formula={gofExpr} color={COL.gof} />
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