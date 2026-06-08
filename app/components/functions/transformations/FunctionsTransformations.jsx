
/**
 * FunctionTransformations — v2
 *
 * Changes from v1:
 *   1. Tooltip <style> tag now uses dangerouslySetInnerHTML.
 *      The CSS contains `content: ''` which React escapes as
 *      `&#x27;` on the server but leaves untouched on the client,
 *      causing a hydration mismatch. Inline-HTML injection bypasses
 *      text escaping entirely (same pattern as InfoPanel v2).
 *   2. Default canvas size bumped from 560×420 → 880×600 so the
 *      graph fills the center card instead of leaving large
 *      whitespace margins.
 *   3. Right column widened 280 → 360 so the Explanation panel
 *      and the 5-tab parameter control read at a comfortable
 *      width instead of getting squeezed.
 */

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';


const ACCENT = '#3b82f6';
const BASE_COLOR = '#94a3b8';

function fmt(v) {
  const r = Math.round(v * 100) / 100;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}

const GENERAL = {
  a: {
    title: 'Vertical scale', key: 'a', formula: 'g(x) = a · f(x)',
    tooltip: 'Multiplies output by a — stretches, compresses, or flips the curve vertically.',
    body:
      'Multiplies every output by **a**.\n' +
      '- $|a| > 1$ — stretches vertically\n' +
      '- $0 < |a| < 1$ — compresses vertically\n' +
      '- $a < 0$ — reflects across the x-axis\n' +
      '- $a = 0$ — collapses to $y = 0$',
  },
  k: {
    title: 'Vertical shift', key: 'k', formula: 'g(x) = f(x) + k',
    tooltip: 'Adds k to output — slides the whole curve up or down.',
    body:
      'Adds a constant **k** to every output.\n' +
      '- $k > 0$ — slides up\n' +
      '- $k < 0$ — slides down\n\n' +
      'Shape is unchanged.',
  },
  b: {
    title: 'Horizontal scale', key: 'b', formula: 'g(x) = f(b · x)',
    tooltip: 'Scales the input — squeezes, stretches, or flips horizontally (opposite of vertical scale).',
    body:
      'Scales the input. Squeezes when $|b| > 1$, stretches when $|b| < 1$.\n' +
      '- $|b| > 1$ — squeezes horizontally\n' +
      '- $0 < |b| < 1$ — stretches horizontally\n' +
      '- $b < 0$ — reflects across the y-axis',
  },
  h: {
    title: 'Horizontal shift', key: 'h', formula: 'g(x) = f(x − h)',
    tooltip: 'Subtracts h from input — slides the curve left or right.',
    body:
      'Slides along the x-axis.\n' +
      '- $h > 0$ — moves **right** (note the minus sign)\n' +
      '- $h < 0$ — moves left',
  },
  custom: { tooltip: 'All four transformations combined.' },
};

const PARAM_DEFS = {
  a: { label: 'vertical scale a',   short: 'V. scale', min: -3, max: 3, step: 0.05, def: 1, animStep: 0.05 },
  k: { label: 'vertical shift k',   short: 'V. shift', min: -6, max: 6, step: 0.1,  def: 0, animStep: 0.1  },
  b: { label: 'horizontal scale b', short: 'H. scale', min: -3, max: 3, step: 0.05, def: 1, animStep: 0.05 },
  h: { label: 'horizontal shift h', short: 'H. shift', min: -6, max: 6, step: 0.1,  def: 0, animStep: 0.1  },
};

const TAB_ORDER = ['a', 'k', 'b', 'h', 'custom'];

export const BASES = {
  linear: {
    name: 'Linear', glyph: 'M2,22 L24,4',
    base: x => x, eqBase: 'f(x) = x', bodyOf: i => i,
    specific: {
      a: v => v === 1 ? null : v === 0
        ? `**a = 0** flattens the line to the x-axis.`
        : v < 0
          ? `**a = ${fmt(v)}** flips the line across the x-axis; slope becomes \`${fmt(v)}\`.`
          : `Slope becomes \`${fmt(v)}\`: the line rises by \`${fmt(v)}\` per unit of $x$.`,
      k: v => v === 0 ? null : `Slides the line vertically by **${fmt(v)}** — same slope, shifted ${v > 0 ? 'up' : 'down'}.`,
      b: v => v === 1 ? null : `For a line, **b** just rescales the slope: equivalent to slope \`${fmt(v)}\`.`,
      h: v => v === 0 ? null : `Shifts the line ${v > 0 ? 'right' : 'left'} by **${fmt(Math.abs(v))}** — indistinguishable from a vertical shift.`,
    },
  },
  quadratic: {
    name: 'Quadratic', glyph: 'M2,4 Q13,30 24,4',
    base: x => x*x, eqBase: 'f(x) = x²', bodyOf: i => `(${i})²`,
    specific: {
      a: v => v === 1 ? null : v === 0
        ? `**a = 0** collapses the parabola to the x-axis.`
        : v < 0
          ? `**a = ${fmt(v)}** flips the parabola to open **downward**.`
          : v > 1
            ? `**a = ${fmt(v)}** makes the parabola **narrower** — rises ${fmt(v)}× as fast.`
            : `**a = ${fmt(v)}** makes the parabola **wider** — rises only ${fmt(v)}× as fast.`,
      k: v => v === 0 ? null : `Moves the **vertex** from (0, 0) to (0, \`${fmt(v)}\`).`,
      b: v => v === 1 ? null : v === 0
        ? `**b = 0** makes the input zero — curve collapses to \`f(0) = 0\`.`
        : `**b = ${fmt(v)}** squeezes horizontally by ${fmt(Math.abs(v))}×.`,
      h: v => v === 0 ? null : `Moves the **vertex** from (0, 0) to (\`${fmt(v)}\`, 0).`,
    },
  },
  cubic: {
    name: 'Cubic', glyph: 'M2,22 C8,2 16,30 24,8',
    base: x => x*x*x, eqBase: 'f(x) = x³', bodyOf: i => `(${i})³`,
    specific: {
      a: v => v === 1 ? null : v < 0
        ? `**a = ${fmt(v)}** flips the cubic — falls from upper-left to lower-right.`
        : `**a = ${fmt(v)}** stretches the cubic vertically by ${fmt(v)}×.`,
      k: v => v === 0 ? null : `Inflection point moves to (0, \`${fmt(v)}\`).`,
      b: v => v === 1 ? null : `**b = ${fmt(v)}** ${v < 0 ? 'flips horizontally' : `compresses horizontally by ${fmt(v)}×`}.`,
      h: v => v === 0 ? null : `Inflection point moves to (\`${fmt(v)}\`, 0).`,
    },
  },
  reciprocal: {
    name: 'Reciprocal', glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    base: x => 1/x, eqBase: 'f(x) = 1/x', bodyOf: i => `1/(${i})`,
    specific: {
      a: v => v === 1 ? null : v < 0
        ? `**a = ${fmt(v)}** flips the branches across the x-axis.`
        : `Scales both branches vertically by ${fmt(v)}×.`,
      k: v => v === 0 ? null : `Horizontal asymptote moves from \`y = 0\` to \`y = ${fmt(v)}\`.`,
      b: v => v === 1 ? null : `**b = ${fmt(v)}** tightens the curve around \`x = 0\`.`,
      h: v => v === 0 ? null : `Vertical asymptote moves from \`x = 0\` to \`x = ${fmt(v)}\`.`,
    },
  },
  exponential: {
    name: 'Exponential', glyph: 'M2,26 Q16,26 24,2',
    base: x => Math.exp(x), eqBase: 'f(x) = eˣ', bodyOf: i => `e^(${i})`,
    specific: {
      a: v => v === 1 ? null : v < 0
        ? `**a = ${fmt(v)}** flips below the x-axis.`
        : `Scales vertically by ${fmt(v)}×. Y-intercept moves from 1 to \`${fmt(v)}\`.`,
      k: v => v === 0 ? null : `Horizontal asymptote moves from \`y = 0\` to \`y = ${fmt(v)}\`.`,
      b: v => v === 1 ? null : v < 0
        ? `**b = ${fmt(v)}** flips horizontally — exponential **decay** instead of growth.`
        : v > 1
          ? `**b = ${fmt(v)}** makes growth **steeper** — climbs ${fmt(v)}× faster.`
          : `**b = ${fmt(v)}** slows growth — stretched horizontally.`,
      h: v => v === 0 ? null : `Shifts ${v > 0 ? 'right' : 'left'} by ${fmt(Math.abs(v))}.`,
    },
  },
  logarithmic: {
    name: 'Logarithmic', glyph: 'M2,2 Q10,26 24,26',
    base: x => x > 0 ? Math.log(x) : NaN, eqBase: 'f(x) = ln(x)', bodyOf: i => `ln(${i})`,
    specific: {
      a: v => v === 1 ? null : v < 0
        ? `**a = ${fmt(v)}** flips the curve — now falls toward the asymptote.`
        : `Scales vertically by ${fmt(v)}×; still crosses \`y = 0\` at \`x = 1\`.`,
      k: v => v === 0 ? null : `Lifts the curve by ${fmt(v)}.`,
      b: v => v === 1 ? null : `**b = ${fmt(v)}** rescales horizontally. Note: \`ln(bx) = ln(b) + ln(x)\`.`,
      h: v => v === 0 ? null : `Vertical asymptote moves from \`x = 0\` to \`x = ${fmt(v)}\`; domain: \`x > ${fmt(v)}\`.`,
    },
  },
  sine: {
    name: 'Sine', group: 'Trigonometric', glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    base: x => Math.sin(x), eqBase: 'f(x) = sin(x)', bodyOf: i => `sin(${i})`,
    specific: {
      a: v => v === 1 ? null : `**Amplitude = ${fmt(Math.abs(v))}**${v < 0 ? ' (flipped)' : ''}. Oscillates between \`${fmt(-Math.abs(v))}\` and \`${fmt(Math.abs(v))}\`.`,
      k: v => v === 0 ? null : `Midline moves from \`y = 0\` to \`y = ${fmt(v)}\`.`,
      b: v => v === 1 ? null : `**Period = 2π/${fmt(Math.abs(v))} ≈ ${fmt(2*Math.PI/Math.abs(v))}**${v < 0 ? ' (mirrored)' : ''}.`,
      h: v => v === 0 ? null : `Phase shift of **${fmt(v)}** — \`sin(0)\` now happens at \`x = ${fmt(v)}\`.`,
    },
  },
  cosine: {
    name: 'Cosine', group: 'Trigonometric', glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    base: x => Math.cos(x), eqBase: 'f(x) = cos(x)', bodyOf: i => `cos(${i})`,
    specific: {
      a: v => v === 1 ? null : `**Amplitude = ${fmt(Math.abs(v))}**${v < 0 ? ' (flipped)' : ''}.`,
      k: v => v === 0 ? null : `Midline moves to \`y = ${fmt(v)}\`; peak at \`y = ${fmt(v + 1)}\`.`,
      b: v => v === 1 ? null : `**Period = 2π/${fmt(Math.abs(v))} ≈ ${fmt(2*Math.PI/Math.abs(v))}**${v < 0 ? '; cos is even, so the flip is invisible' : ''}.`,
      h: v => v === 0 ? null : `Peak moves from \`x = 0\` to \`x = ${fmt(v)}\`.`,
    },
  },
  absolute: {
    name: 'Absolute value', glyph: 'M2,4 L13,24 L24,4',
    base: x => Math.abs(x), eqBase: 'f(x) = |x|', bodyOf: i => `|${i}|`,
    specific: {
      a: v => v === 1 ? null : v < 0
        ? `**a = ${fmt(v)}** flips the V to open downward.`
        : `Slope of each side: \`±${fmt(v)}\`.`,
      k: v => v === 0 ? null : `Vertex moves to (0, \`${fmt(v)}\`).`,
      b: v => v === 1 ? null : `**b = ${fmt(v)}** sharpens horizontally${v < 0 ? ' (even, so flip is invisible)' : ''}.`,
      h: v => v === 0 ? null : `Vertex moves to (\`${fmt(v)}\`, 0).`,
    },
  },
  sqrt: {
    name: 'Square root', glyph: 'M2,24 Q4,8 24,4',
    base: x => x >= 0 ? Math.sqrt(x) : NaN, eqBase: 'f(x) = √x', bodyOf: i => `√(${i})`,
    specific: {
      a: v => v === 1 ? null : v < 0
        ? `**a = ${fmt(v)}** flips the curve below the x-axis.`
        : `Scales vertically by ${fmt(v)}×.`,
      k: v => v === 0 ? null : `Starting point moves to (0, \`${fmt(v)}\`).`,
      b: v => v === 1 ? null : `Domain ${v < 0 ? 'flips to \`x ≤ 0\`' : `compresses by ${fmt(v)}×`}.`,
      h: v => v === 0 ? null : `Domain shifts to \`x ≥ ${fmt(v)}\`; starting point: (\`${fmt(v)}\`, 0).`,
    },
  },
};

const DEFAULT_BASES = BASES;

const TT_STYLES = `
  .ft-tt-wrap { position: relative; display: inline-flex; }
  .ft-tt {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #0f172a;
    color: #f1f5f9;
    font-size: 11.5px;
    font-weight: 400;
    line-height: 1.4;
    padding: 8px 10px;
    border-radius: 6px;
    white-space: normal;
    width: 220px;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.22);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.14s ease, transform 0.14s ease;
    z-index: 100;
    text-align: left;
  }
  .ft-tt-wrap:hover .ft-tt,
  .ft-tt-wrap:focus-within .ft-tt {
    opacity: 1;
    transform: translateX(-50%) translateY(-2px);
  }
  .ft-tt::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #0f172a;
  }
  .ft-tt-title {
    font-weight: 600;
    color: #fff;
    margin-bottom: 3px;
    font-size: 11.5px;
  }
`;

function FamilyGlyph({ d, active, darkMode }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none"
            stroke={active ? ACCENT : (darkMode ? '#64748b' : '#94a3b8')}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FunctionTransformations({
  initialFamily = 'quadratic',
  families = DEFAULT_BASES,
  visualizerProps = {},
  infoPanelProps = {},
  extraTabs = [],
  darkMode = false,
  showPicker = true,
  showInfoPanel = true,
  maxWidth = '80vw',
  onFamilyChange,
  onParamsChange,
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

  const [current, setCurrent] = useState(startKey);
  const [params, setParams] = useState({ a: 1, b: 1, h: 0, k: 0 });
  const [activeTab, setActiveTab] = useState('a');
  const [mode, setMode] = useState({ a: 'manual', k: 'manual', b: 'manual', h: 'manual' });
  const [animKey, setAnimKey] = useState(null);

  const animDirRef = useRef(1);
  const rafRef = useRef(null);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const fam = families[current] || families[familyKeys[0]];

  const stopAnim = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setAnimKey(null);
  }, []);

  useEffect(() => () => stopAnim(), [stopAnim]);

  const startAnim = (key) => {
    stopAnim();
    setAnimKey(key);
    const def = PARAM_DEFS[key];
    const tick = () => {
      const cur = paramsRef.current[key];
      let v = cur + def.animStep * animDirRef.current;
      if (v > def.max) { v = def.max; animDirRef.current = -1; }
      if (v < def.min) { v = def.min; animDirRef.current = 1; }
      setParams(p => {
        const next = { ...p, [key]: v };
        if (onParamsChange) onParamsChange(next);
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stepParam = (key, dir) => {
    stopAnim();
    const def = PARAM_DEFS[key];
    setParams(p => {
      let v = p[key] + def.animStep * dir;
      if (v > def.max) v = def.max;
      if (v < def.min) v = def.min;
      const next = { ...p, [key]: v };
      if (onParamsChange) onParamsChange(next);
      return next;
    });
  };

  const selectFamily = key => {
    stopAnim();
    setCurrent(key);
    const next = { a: 1, b: 1, h: 0, k: 0 };
    setParams(next);
    if (onFamilyChange) onFamilyChange(key, families[key]);
    if (onParamsChange) onParamsChange(next);
  };

  const setParam = (k, v) => {
    setParams(p => {
      const next = { ...p, [k]: v };
      if (onParamsChange) onParamsChange(next);
      return next;
    });
  };

  const resetTab = () => {
    stopAnim();
    if (activeTab === 'custom') {
      const next = { a: 1, b: 1, h: 0, k: 0 };
      setParams(next);
      if (onParamsChange) onParamsChange(next);
    } else {
      setParam(activeTab, PARAM_DEFS[activeTab].def);
    }
  };

  const isDefault = (key) => params[key] === PARAM_DEFS[key].def;

  const transformedFn = useMemo(() => {
    const baseFn = fam.base;
    const { a, b, h, k } = params;
    return x => a * baseFn(b * (x - h)) + k;
  }, [fam, params]);

  const functions = useMemo(() => [
    { fn: fam.base, color: BASE_COLOR, label: 'f', formula: fam.eqBase, visible: true, stroke: 1.5, pattern: [5, 5] },
    { fn: transformedFn, color: ACCENT, label: 'g', formula: buildEq(fam, params), visible: true, stroke: 2.25 },
  ], [fam, transformedFn, params]);

  const infoTabs = useMemo(() => {
    let content;
    if (activeTab === 'custom') {
      const active = ['a', 'k', 'b', 'h'].filter(k => !isDefault(k));
      if (active.length === 0) {
        content =
          '## Custom · ' + fam.name + '\n' +
          '`g(x) = a · f(b(x − h)) + k`\n\n' +
          '*No transformations applied yet — adjust any slider to see effects on **' + fam.name + '**.*';
      } else {
        content = '## Custom · ' + fam.name + '\n`g(x) = a · f(b(x − h)) + k`\n\n';
        active.forEach(k => {
          const spec = fam.specific[k](params[k]);
          content += `**${GENERAL[k].title}** · \`${k} = ${fmt(params[k])}\`\n${spec || ''}\n\n`;
        });
      }
    } else {
      const g = GENERAL[activeTab];
      const v = params[activeTab];
      const specific = fam.specific[activeTab](v);
      content =
        `## ${g.title}\n` +
        `\`${g.formula}\`\n\n` +
        `### General\n${g.body}\n\n` +
        `### Applied to ${fam.name.toLowerCase()}\n` +
        (specific
          ? specific
          : `*Currently at the default value — move the slider to see how it affects **${fam.name}**.*`);
    }
    return [
      { key: 'explanation', label: 'Explanation', order: 0, content },
      ...extraTabs,
    ];
  }, [activeTab, params, fam, extraTabs]);

  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12, boxShadow: panelShadow,
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
  const groupHeader = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  /* Larger default canvas so the graph fills its column instead of
     leaving a strip of whitespace on each side. User can still
     resize via the visualizer's built-in S/M/L/XL toolbar. */
  const mergedVisualizerProps = {
    defaultWidth: 880, defaultHeight: 600,
    ...visualizerProps,
  };

  const pickerEntries = [];
  let lastGroup;
  Object.entries(families).forEach(([key, f]) => {
    if (f.group && f.group !== lastGroup) {
      pickerEntries.push({ type: 'header', label: f.group, key: `__hdr_${f.group}` });
      lastGroup = f.group;
    } else if (!f.group) lastGroup = undefined;
    pickerEntries.push({ type: 'item', key, fam: f });
  });

  const Chip = ({ k, value }) => {
    const active = value !== PARAM_DEFS[k].def;
    return (
      <span style={{
        fontFamily: monoStack, fontSize: 11,
        padding: '3px 9px', borderRadius: 5,
        display: 'inline-flex', alignItems: 'center', gap: 5,
        color: active ? c.accentText : c.muted,
        background: active ? c.accentSoft : 'transparent',
        border: `1px solid ${active ? c.accentBorder : c.borderSoft}`,
        fontWeight: active ? 600 : 400,
      }}>
        <span style={{ fontWeight: 600, color: active ? ACCENT : c.muted }}>{k}</span>
        <span>=</span>
        <span>{fmt(value)}</span>
      </span>
    );
  };

  const TabButton = ({ tabKey, label, badge }) => {
    const active = activeTab === tabKey;
    const tip = GENERAL[tabKey]?.tooltip;
    return (
      <span className="ft-tt-wrap" style={{ flex: 1 }}>
        <button
          onClick={() => { stopAnim(); setActiveTab(tabKey); }}
          style={{
            width: '100%',
            padding: '8px 6px', border: 'none', borderRadius: 6,
            fontFamily: 'inherit', fontSize: 11.5, fontWeight: 500, cursor: 'pointer',
            background: active ? (darkMode ? '#334155' : '#fff') : 'transparent',
            color: active ? c.ink : c.muted,
            boxShadow: active ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
            transition: 'all 0.15s', textAlign: 'center',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            minWidth: 0,
          }}
        >
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
          {badge != null && (
            <span style={{
              fontFamily: monoStack, fontSize: 10,
              padding: '1px 5px', borderRadius: 3,
              background: active ? ACCENT : c.accentSoft,
              color: active ? '#fff' : ACCENT,
              fontWeight: 600, flexShrink: 0,
            }}>{badge}</span>
          )}
        </button>
        {tip && (
          <span className="ft-tt" role="tooltip">
            <span className="ft-tt-title">
              {tabKey === 'custom' ? 'Custom' : GENERAL[tabKey].title}
            </span>
            {tip}
          </span>
        )}
      </span>
    );
  };

  const renderSlider = (key) => {
    const def = PARAM_DEFS[key];
    return (
      <div>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span>{def.label}</span>
          <span style={{ fontFamily: monoStack, color: ACCENT, fontWeight: 600 }}>
            {fmt(params[key])}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={params[key]}
          disabled={activeTab !== 'custom' && mode[key] === 'auto'}
          onChange={e => setParam(key, parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: ACCENT, cursor: 'pointer',
                   opacity: (activeTab !== 'custom' && mode[key] === 'auto') ? 0.5 : 1 }}
        />
      </div>
    );
  };

  const renderSingleTab = (key) => {
    const isAuto = mode[key] === 'auto';
    const isPlaying = animKey === key;
    const modeBtn = (m, label) => (
      <button
        onClick={() => {
          setMode(prev => ({ ...prev, [key]: m }));
          if (m === 'manual') stopAnim();
        }}
        style={{
          padding: '5px 10px', border: 'none', borderRadius: 4,
          fontFamily: 'inherit', fontSize: 11, fontWeight: 500, cursor: 'pointer',
          background: mode[key] === m ? (darkMode ? '#334155' : '#fff') : 'transparent',
          color: mode[key] === m ? c.ink : c.muted,
          boxShadow: mode[key] === m ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
          transition: 'all 0.15s',
        }}
      >{label}</button>
    );
    const animBtnStyle = (primary) => ({
      width: primary ? 40 : 32, height: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: `1px solid ${primary ? ACCENT : c.border}`,
      background: primary ? ACCENT : (darkMode ? '#0f172a' : '#fff'),
      color: primary ? '#fff' : c.inkSoft,
      borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', fontSize: 12,
      transition: 'all 0.12s',
    });

    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
          <div style={{
            display: 'inline-flex', gap: 2,
            background: c.border, borderRadius: 6, padding: 2,
          }}>
            {modeBtn('manual', 'Manual')}
            {modeBtn('auto', 'Auto')}
          </div>
          <button onClick={resetTab} style={{
            background: darkMode ? '#0f172a' : '#fff',
            border: `1px solid ${c.border}`, color: c.inkSoft,
            padding: '5px 10px', borderRadius: 6,
            fontFamily: 'inherit', fontSize: 11.5, cursor: 'pointer',
          }}>Reset</button>
        </div>
        {renderSlider(key)}
        {isAuto && (
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10 }}>
            <button onClick={() => stepParam(key, -1)} style={animBtnStyle(false)} title="Step back">⏮</button>
            <button
              onClick={() => isPlaying ? stopAnim() : startAnim(key)}
              style={animBtnStyle(true)}
              title={isPlaying ? 'Pause' : 'Play'}
            >{isPlaying ? '⏸' : '▶'}</button>
            <button onClick={() => stepParam(key, 1)} style={animBtnStyle(false)} title="Step forward">⏭</button>
          </div>
        )}
      </>
    );
  };

  const renderCustomTab = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
        <div style={{
          fontSize: 10.5, color: c.muted, textTransform: 'uppercase',
          letterSpacing: '0.05em', fontWeight: 600,
        }}>All transformations</div>
        <button onClick={resetTab} style={{
          background: darkMode ? '#0f172a' : '#fff',
          border: `1px solid ${c.border}`, color: c.inkSoft,
          padding: '5px 10px', borderRadius: 6,
          fontFamily: 'inherit', fontSize: 11.5, cursor: 'pointer',
        }}>Reset all</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
        {['a','k','b','h'].map(key => <div key={key}>{renderSlider(key)}</div>)}
      </div>
    </>
  );

  return (
    <div style={{
      width: '100%', background: darkMode ? '#020617' : '#f6f7f9',
      minHeight: '100vh', fontFamily: fontStack,
      display: 'flex', justifyContent: 'center',
      padding: '20px 0', boxSizing: 'border-box',
    }}>
      <style dangerouslySetInnerHTML={{ __html: TT_STYLES }} />
      <div style={{
        width: '100%', maxWidth,
        display: 'flex', gap: 16, padding: '0 16px',
        alignItems: 'flex-start', boxSizing: 'border-box',
      }}>
        {showPicker && (
          <nav style={{ ...card, width: 200, padding: 10, flexShrink: 0 }}>
            <div style={{ ...groupHeader, margin: '6px 8px 10px' }}>Base function</div>
            {pickerEntries.map(e =>
              e.type === 'header'
                ? <div key={e.key} style={groupHeader}>{e.label}</div>
                : (
                  <button key={e.key} style={famBtn(e.key === current)} onClick={() => selectFamily(e.key)}>
                    <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
                    <span>{e.fam.name}</span>
                  </button>
                )
            )}
          </nav>
        )}

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>{fam.name}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: BASE_COLOR, background: c.softer,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: BASE_COLOR }} />
                  {fam.eqBase}
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 11.5,
                  padding: '3px 8px', borderRadius: 5,
                  color: ACCENT, background: c.accentSoft,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
                  {buildEq(fam, params)}
                </span>
              </div>
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
              display: 'flex', gap: 6, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Applied</span>
              {['a', 'k', 'b', 'h'].map(k => <Chip key={k} k={k} value={params[k]} />)}
            </div>
          </div>
        </div>

        {/* Right column: wider (360 vs old 280) so Explanation prose and
            the 5-tab parameter control read at a comfortable size. */}
        <div style={{ width: 360, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {showInfoPanel && (
            <aside style={{ ...card, padding: 16 }}>
              <InfoPanel tabs={infoTabs} darkMode={darkMode} {...infoPanelProps} />
            </aside>
          )}

          <div style={{ ...card, padding: 12 }}>
            <div style={{
              display: 'flex', gap: 2,
              background: c.border, borderRadius: 8, padding: 3,
            }}>
              {TAB_ORDER.map(tab => {
                const label = tab === 'custom' ? 'Custom' : PARAM_DEFS[tab].short;
                const badge = (tab !== 'custom' && !isDefault(tab)) ? fmt(params[tab]) : null;
                return <TabButton key={tab} tabKey={tab} label={label} badge={badge} />;
              })}
            </div>

            <div style={{
              marginTop: 12, background: c.soft,
              border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, padding: '12px 12px',
            }}>
              {activeTab === 'custom' ? renderCustomTab() : renderSingleTab(activeTab)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildEq(fam, params) {
  const { a, b, h, k } = params;
  let inner = 'x';
  if (h !== 0) inner = `x ${h >= 0 ? '−' : '+'} ${fmt(Math.abs(h))}`;
  if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
  let body = fam.bodyOf(inner);
  let out;
  if (a === -1) out = `−${body}`;
  else if (a !== 1) out = `${fmt(a)}·${body}`;
  else out = body;
  if (k !== 0) out += ` ${k >= 0 ? '+' : '−'} ${fmt(Math.abs(k))}`;
  return `g(x) = ${out}`;
}