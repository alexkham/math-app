/**
 * FunctionRange — v1
 *
 * Mirror of FunctionDomain, for the y-axis. Pick a family, transform
 * with (a, k, b, h), see the range of g(x) drawn:
 *   - directly on the y-axis as a colored highlight band (via the
 *     core's `yAxisHighlights` prop),
 *   - as a horizontal 1D number line below the graph (RangeBar),
 *   - with a test point slider — drag along the y-axis and see whether
 *     a given y value is achievable as an output of g.
 *
 * Pedagogical inverse of FunctionDomain: only **a** and **k** change
 * the range. b and h (input-side transforms) leave the set of outputs
 * unchanged — they just relabel which input produces which output.
 *
 * Panel chrome follows the picked highlight color (same coordination
 * pattern as FunctionDomain v5+). Built on FunctionVisualizerCorePro.
 *
 * PROPS (all optional)
 *   initialFamily         : string        — default 'quadratic'
 *   families              : object        — override built-in FAMILIES
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
  f:        '#3b82f6', // function curve
  inRange: '#10b981', // green — valid territory
  outside:  '#ef4444', // red — outside range
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
  a:  { label: 'vertical scale a',     min: -3,  max: 3,  step: 0.05, def: 1 },
  k:  { label: 'vertical shift k',     min: -6,  max: 6,  step: 0.1,  def: 0 },
  b:  { label: 'horizontal scale b',   min: -3,  max: 3,  step: 0.05, def: 1 },
  h:  { label: 'horizontal shift h',   min: -6,  max: 6,  step: 0.1,  def: 0 },
  ty: { label: 'test point y',         min: -10, max: 10, step: 0.05, def: 1 },
};

const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0, ty: 1 };

/* Parameters that actually affect the range. */
const RANGE_PARAMS = ['a', 'k'];


/* ================================================================
   FAMILIES
   ================================================================
   Grouped by range shape so the picker reads as a teaching tool:
     - "Unrestricted (ℝ)" — range is all of ℝ
     - "Bounded below"    — range is a half-line [c, ∞) or (c, ∞)
     - "Bounded [-1, 1]"  — range is a closed interval
     - "Excluded point"   — range is ℝ minus a single value
*/

export const FAMILIES = {
  identity: {
    name: 'Identity',
    group: 'Unrestricted (ℝ)',
    glyph: 'M2,22 L24,4',
    base: x => x,
    eqBase: 'x',
    bodyOf: i => i,
    baseRange: { kind: 'R' },
  },
  linearScale: {
    name: 'Linear (2x)',
    group: 'Unrestricted (ℝ)',
    glyph: 'M2,24 L24,2',
    base: x => 2 * x,
    eqBase: '2x',
    bodyOf: i => `2·${i}`,
    baseRange: { kind: 'R' },
  },
  cubic: {
    name: 'Cubic',
    group: 'Unrestricted (ℝ)',
    glyph: 'M2,22 C8,2 16,30 24,8',
    base: x => x * x * x,
    eqBase: 'x³',
    bodyOf: i => `(${i})³`,
    baseRange: { kind: 'R' },
  },
  logarithmic: {
    name: 'Logarithmic',
    group: 'Unrestricted (ℝ)',
    glyph: 'M2,2 Q10,26 24,26',
    base: x => (x > 0 ? Math.log(x) : NaN),
    eqBase: 'ln(x)',
    bodyOf: i => `ln(${i})`,
    baseRange: { kind: 'R' },
  },

  quadratic: {
    name: 'Quadratic',
    group: 'Bounded below',
    glyph: 'M2,4 Q13,30 24,4',
    base: x => x * x,
    eqBase: 'x²',
    bodyOf: i => `(${i})²`,
    baseRange: { kind: 'closed-half', dir: 'gte', val: 0 },
  },
  absolute: {
    name: 'Absolute',
    group: 'Bounded below',
    glyph: 'M2,4 L13,24 L24,4',
    base: x => Math.abs(x),
    eqBase: '|x|',
    bodyOf: i => `|${i}|`,
    baseRange: { kind: 'closed-half', dir: 'gte', val: 0 },
  },
  sqrt: {
    name: 'Square root',
    group: 'Bounded below',
    glyph: 'M2,24 Q4,8 24,4',
    base: x => (x >= 0 ? Math.sqrt(x) : NaN),
    eqBase: '√x',
    bodyOf: i => `√(${i})`,
    baseRange: { kind: 'closed-half', dir: 'gte', val: 0 },
  },
  exponential: {
    name: 'Exponential',
    group: 'Bounded below',
    glyph: 'M2,26 Q16,26 24,2',
    base: x => Math.exp(x),
    eqBase: 'eˣ',
    bodyOf: i => `e^(${i})`,
    baseRange: { kind: 'open-half', dir: 'gt', val: 0 },
  },

  sine: {
    name: 'Sine',
    group: 'Bounded [-1, 1]',
    glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14',
    base: x => Math.sin(x),
    eqBase: 'sin(x)',
    bodyOf: i => `sin(${i})`,
    baseRange: { kind: 'closed', lo: -1, hi: 1 },
  },
  cosine: {
    name: 'Cosine',
    group: 'Bounded [-1, 1]',
    glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',
    base: x => Math.cos(x),
    eqBase: 'cos(x)',
    bodyOf: i => `cos(${i})`,
    baseRange: { kind: 'closed', lo: -1, hi: 1 },
  },

  reciprocal: {
    name: 'Reciprocal',
    group: 'Excluded point',
    glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    base: x => (x === 0 ? NaN : 1 / x),
    eqBase: '1/x',
    bodyOf: i => `1/(${i})`,
    baseRange: { kind: 'excluded', val: 0 },
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   EQUATION BUILDER (same shape as Inverse / Transformations)
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
   DOMAIN TRANSFORM + STRING + MEMBERSHIP
   ================================================================ */

function transformRange(base, a, k) {
  if (!base) return { kind: 'R' };
  if (a === 0) return { kind: 'point', val: k };
  if (base.kind === 'R') return { kind: 'R' };
  if (base.kind === 'open-half') {
    const dir = a > 0 ? base.dir : (base.dir === 'gt' ? 'lt' : 'gt');
    return { kind: 'open-half', dir, val: a * base.val + k };
  }
  if (base.kind === 'closed-half') {
    const dir = a > 0 ? base.dir : (base.dir === 'gte' ? 'lte' : 'gte');
    return { kind: 'closed-half', dir, val: a * base.val + k };
  }
  if (base.kind === 'excluded') {
    return { kind: 'excluded', val: a * base.val + k };
  }
  if (base.kind === 'closed') {
    const lo = a * base.lo + k;
    const hi = a * base.hi + k;
    return { kind: 'closed', lo: Math.min(lo, hi), hi: Math.max(lo, hi) };
  }
  return base;
}

function rangeToString(d, v = 'x') {
  if (!d) return '—';
  if (d.kind === 'R') return `all real ${v}`;
  if (d.kind === 'point') return `${v} = ${fmt(d.val)}`;
  if (d.kind === 'open-half') {
    const sym = d.dir === 'gt' ? '>' : '<';
    return `${v} ${sym} ${fmt(d.val)}`;
  }
  if (d.kind === 'closed-half') {
    const sym = d.dir === 'gte' ? '≥' : '≤';
    return `${v} ${sym} ${fmt(d.val)}`;
  }
  if (d.kind === 'excluded') return `${v} ≠ ${fmt(d.val)}`;
  if (d.kind === 'closed') return `${fmt(d.lo)} ≤ ${v} ≤ ${fmt(d.hi)}`;
  return '?';
}

function inRange(d, x) {
  if (!d) return true;
  switch (d.kind) {
    case 'R':            return true;
    case 'point':        return x === d.val;
    case 'open-half':    return d.dir === 'gt' ? x > d.val : x < d.val;
    case 'closed-half':  return d.dir === 'gte' ? x >= d.val : x <= d.val;
    case 'excluded':     return x !== d.val;
    case 'closed':       return x >= d.lo && x <= d.hi;
    default:             return true;
  }
}


/* ================================================================
   DOMAIN  →  yAxisHighlights[]   (the v3 adapter)
   ----------------------------------------------------------------
   Convert the {kind, ...} range shape into the core's
   `yAxisHighlights` prop. Mostly a one-liner per case.
   ================================================================ */

function intervalToHighlights(d, color) {
  if (!d) return [];
  const c = color;
  switch (d.kind) {
    case 'R':
      return [{ from: -Infinity, to: Infinity, color: c, placement: 'on-axis' }];

    case 'open-half': {
      if (d.dir === 'gt') return [{ from: d.val, to:  Infinity, fromKind: 'open', color: c, placement: 'on-axis' }];
      return                 [{ from: -Infinity, to: d.val,    toKind:   'open', color: c, placement: 'on-axis' }];
    }

    case 'closed-half': {
      if (d.dir === 'gte') return [{ from: d.val, to:  Infinity, fromKind: 'closed', color: c, placement: 'on-axis' }];
      return                   [{ from: -Infinity, to: d.val,    toKind:   'closed', color: c, placement: 'on-axis' }];
    }

    case 'excluded':
      return [
        { from: -Infinity, to: d.val,    toKind:   'open', color: c, placement: 'on-axis' },
        { from: d.val,     to: Infinity, fromKind: 'open', color: c, placement: 'on-axis' },
      ];

    case 'closed':
      return [{
        from: d.lo, to: d.hi,
        fromKind: 'closed', toKind: 'closed',
        color: c, placement: 'on-axis',
      }];

    case 'point':
      // Degenerate: zero-length highlight; two closed markers overlap → looks like one dot.
      return [{
        from: d.val, to: d.val,
        fromKind: 'closed', toKind: 'closed',
        color: c, placement: 'on-axis',
      }];

    default:
      return [];
  }
}


/* ================================================================
   RANGE BAR — 1D number line showing the range interval
   (unchanged from v2)
   ================================================================ */

function RangeBar({ range, testY, darkMode, color = COL.inRange, xMin = -10, xMax = 10 }) {
  const W = 1000, H = 86;
  const cy = 36;                    // axis y
  const toX = v => ((v - xMin) / (xMax - xMin)) * W;
  const clampX = x => Math.max(0, Math.min(W, x));

  const inDom = inRange(range, testY);

  // Build fill segments + endpoint markers
  // Each segment: { x1, x2, leftBoundary, rightBoundary }
  //   boundary: { type: 'open' | 'closed' | 'arrow', x: pixel-x }
  const segments = [];

  switch (range.kind) {
    case 'R':
      segments.push({
        x1: 0, x2: W,
        leftBoundary:  { type: 'arrow', x: 0 },
        rightBoundary: { type: 'arrow', x: W },
      });
      break;
    case 'open-half':
    case 'closed-half': {
      const valX = toX(range.val);
      const isOpen = range.kind === 'open-half';
      const isGreater = range.dir === 'gt' || range.dir === 'gte';
      if (isGreater) {
        if (valX < W) segments.push({
          x1: clampX(valX), x2: W,
          leftBoundary:  { type: isOpen ? 'open' : 'closed', x: valX, withinView: valX >= 0 && valX <= W },
          rightBoundary: { type: 'arrow', x: W },
        });
      } else {
        if (valX > 0) segments.push({
          x1: 0, x2: clampX(valX),
          leftBoundary:  { type: 'arrow', x: 0 },
          rightBoundary: { type: isOpen ? 'open' : 'closed', x: valX, withinView: valX >= 0 && valX <= W },
        });
      }
      break;
    }
    case 'excluded': {
      const valX = toX(range.val);
      if (valX > 0) segments.push({
        x1: 0, x2: clampX(valX),
        leftBoundary:  { type: 'arrow', x: 0 },
        rightBoundary: { type: 'open',  x: valX, withinView: valX >= 0 && valX <= W },
      });
      if (valX < W) segments.push({
        x1: clampX(valX), x2: W,
        leftBoundary:  { type: 'open',  x: valX, withinView: valX >= 0 && valX <= W },
        rightBoundary: { type: 'arrow', x: W },
      });
      break;
    }
    case 'closed': {
      const x1 = toX(range.lo), x2 = toX(range.hi);
      segments.push({
        x1: clampX(x1), x2: clampX(x2),
        leftBoundary:  { type: 'closed', x: x1, withinView: x1 >= 0 && x1 <= W },
        rightBoundary: { type: 'closed', x: x2, withinView: x2 >= 0 && x2 <= W },
      });
      break;
    }
    case 'point':
    default:
      break;
  }

  const axisColor   = darkMode ? '#475569' : '#94a3b8';
  const tickColor   = darkMode ? '#64748b' : '#94a3b8';
  const labelColor  = darkMode ? '#cbd5e1' : '#475569';
  const fill        = color;
  const markerColor = inDom ? color : COL.outside;

  const renderEndpoint = (b, side) => {
    if (!b) return null;
    if (b.type === 'arrow') {
      // arrowhead pointing outward
      const dir = side === 'left' ? -1 : 1;
      const tipX = side === 'left' ? 2 : W - 2;
      const baseX = tipX - dir * 8;
      return (
        <polygon
          points={`${tipX},${cy} ${baseX},${cy - 6} ${baseX},${cy + 6}`}
          fill={fill}
          opacity={0.85}
        />
      );
    }
    if (!b.withinView) return null;
    if (b.type === 'closed') {
      return (
        <circle cx={b.x} cy={cy} r={6}
                fill={fill} stroke={darkMode ? '#0f172a' : '#fff'} strokeWidth={2} />
      );
    }
    if (b.type === 'open') {
      return (
        <circle cx={b.x} cy={cy} r={6}
                fill={darkMode ? '#0f172a' : '#fff'}
                stroke={fill} strokeWidth={2} />
      );
    }
    return null;
  };

  const testInView = toX(testY) >= 0 && toX(testY) <= W;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
         style={{ width: '100%', height: H, display: 'block' }}>
      {/* baseline */}
      <line x1={0} y1={cy} x2={W} y2={cy} stroke={axisColor} strokeWidth={1.5} />

      {/* tick marks + integer labels */}
      {Array.from({ length: xMax - xMin + 1 }, (_, i) => xMin + i).map(v => {
        const x = toX(v);
        const isMajor = v % 2 === 0;
        return (
          <g key={v}>
            <line
              x1={x} y1={cy - (isMajor ? 6 : 3)}
              x2={x} y2={cy + (isMajor ? 6 : 3)}
              stroke={tickColor} strokeWidth={1}
            />
            {isMajor && (
              <text x={x} y={H - 4} fontSize="11" fill={labelColor}
                    textAnchor="middle"
                    fontFamily='ui-monospace, "SF Mono", Menlo, monospace'>
                {v}
              </text>
            )}
          </g>
        );
      })}

      {/* range fill band (under the boundary markers) */}
      {segments.map((seg, i) => (
        <rect key={i}
              x={seg.x1} y={cy - 11}
              width={Math.max(0, seg.x2 - seg.x1)} height={22}
              fill={fill} fillOpacity={0.22} />
      ))}

      {/* boundary endpoints + arrows */}
      {segments.map((seg, i) => (
        <g key={`b-${i}`}>
          {renderEndpoint(seg.leftBoundary,  'left')}
          {renderEndpoint(seg.rightBoundary, 'right')}
        </g>
      ))}

      {/* excluded-point cross (when range.kind === 'excluded') */}
      {range.kind === 'excluded' && (() => {
        const xv = toX(range.val);
        if (xv < 0 || xv > W) return null;
        return (
          <g>
            <line x1={xv - 5} y1={cy - 5} x2={xv + 5} y2={cy + 5}
                  stroke={COL.outside} strokeWidth={2} />
            <line x1={xv - 5} y1={cy + 5} x2={xv + 5} y2={cy - 5}
                  stroke={COL.outside} strokeWidth={2} />
          </g>
        );
      })()}

      {/* test point marker */}
      {testInView && (
        <g>
          <line x1={toX(testY)} y1={cy - 18} x2={toX(testY)} y2={cy + 18}
                stroke={markerColor} strokeWidth={2} />
          <circle cx={toX(testY)} cy={cy} r={7}
                  fill={markerColor}
                  stroke={darkMode ? '#0f172a' : '#fff'} strokeWidth={2.5} />
        </g>
      )}
    </svg>
  );
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

export default function FunctionRange({
  initialFamily = 'quadratic',
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
  const [params, setParams] = useState({ ...DEFAULT_PARAMS });
  const [highlightColor, setHighlightColor] = useState(defaultHighlightColor);

  /* Derived tones from the picked highlight color — used to coordinate
     the Range panel chrome with the on-axis highlight. */
  const panelTones = useMemo(() => {
    const hex = (highlightColor || '#f59e0b').replace('#', '');
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

  const { a, b, h, k, ty } = params;

  /* Parameterized function */
  const forwardFn = useMemo(() => {
    if (a === 0 || b === 0) return () => NaN;
    return x => a * fam.base(b * (x - h)) + k;
  }, [fam, a, b, h, k]);

  /* Range of g under current parameters */
  const gRange = useMemo(() => transformRange(fam.baseRange, a, k), [fam, a, k]);
  const rangeStr = useMemo(() => rangeToString(gRange, 'x'), [gRange]);
  const tyInRange = inRange(gRange, ty);
  const fAtTy = tyInRange ? forwardFn(ty) : NaN;

  const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);

  const functions = useMemo(() => ([
    {
      fn: forwardFn,
      color: COL.f,
      label: 'g',
      formula: `g(x) = ${forwardEq}`,
      visible: true,
      stroke: 2.25,
    },
  ]), [forwardFn, forwardEq]);

  /* ---- NEW: derive axis highlights and test-point reference line ---- */

  const yAxisHighlights = useMemo(
    () => intervalToHighlights(gRange, highlightColor),
    [gRange, highlightColor]
  );

  const horizontalLines = useMemo(() => ([{
    y: ty,
    color: tyInRange ? highlightColor : COL.outside,
    stroke: 1.5,
    pattern: [4, 4],
  }]), [ty, tyInRange, highlightColor]);

  /* ---- InfoPanel content ---- */
  const explanationContent = useMemo(() => {
    return (
      `## ${fam.name} — range\n\n` +
      `**Base function** · $f(x) = ${fam.eqBase}$\n\n` +
      `**Base range** · ${rangeToString(fam.baseRange, 'y')}\n\n` +
      `**With parameters** · $g(x) = ${forwardEq}$\n\n` +
      `**Current range** · ${rangeStr}\n\n` +
      `### How parameters affect the range\n\n` +
      `Only **a** and **k** can change the range. They transform the output of the base function:\n\n` +
      `- $k$ — shifts every output up or down by the same amount\n` +
      `- $a$ — scales every output by a factor of $a$; if $a < 0$, the range flips across the $k$ line\n\n` +
      `**b** and **h** transform the input — they change *which* x produces each output, but the *set* of outputs the function can reach stays the same. Move them and the range stays put.`
    );
  }, [fam, params, forwardEq, rangeStr]);

  const conceptsContent =
    '## What is the range?\n\n' +
    'The **range** of a function is the set of outputs it can actually produce. Some functions reach every real number (linear, cubic, logarithmic). Others are stuck inside a smaller set:\n\n' +
    '- $x^2$ — always $\\geq 0$; the range is $[0, \\infty)$\n' +
    '- $e^x$ — always $> 0$; the range is $(0, \\infty)$\n' +
    '- $\\sin(x)$, $\\cos(x)$ — always between $-1$ and $1$\n' +
    '- $1/x$ — reaches everything except $0$\n\n' +
    'On the number line below the graph, the colored band shows which y-values the function can produce. Drag the test point to probe a specific value — a colored dot means **achievable** (some x produces this y), red means **not achievable**.\n\n' +
    '### Half-line endpoints: open vs closed\n\n' +
    'A **closed** endpoint (filled circle) means the boundary value is reached. $\\sqrt{x}$ at $y = 0$: yes, $\\sqrt{0} = 0$, so $y = 0$ is in the range. Closed.\n\n' +
    'An **open** endpoint (hollow circle) means the boundary is approached but never reached. $e^x$ at $y = 0$: $e^x$ gets arbitrarily close to $0$ as $x \\to -\\infty$, but never equals $0$. Open.\n\n' +
    '### Excluded values\n\n' +
    'Some functions hit every output except one. $1/x$ reaches every real number except $0$ — the function has a horizontal asymptote at $y = 0$. The range bar is filled everywhere except for an open hole at the excluded value, marked with a small red ×.\n\n' +
    '### Why b and h don\'t matter\n\n' +
    'Think about the formula $g(x) = a \\cdot f(b(x - h)) + k$. The transformations $b$ and $h$ act on the input *before* $f$ runs — they decide which x feeds into $f$. But the *outputs* $f$ produces are determined by $f$ alone; relabeling the inputs doesn\'t change which numbers can come out. Then $a$ scales those outputs and $k$ shifts them — and those are the only operations that move the range.';

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
  const resetParams = () => setParams({ ...DEFAULT_PARAMS });
  const resetTestY  = () => setParam('ty', DEFAULT_PARAMS.ty);

  const Chip = ({ k, valueOverride, accent, dim }) => {
    const value = valueOverride !== undefined ? valueOverride : params[k];
    const def = PARAM_DEFS[k];
    const active = def ? value !== def.def : true;
    const isRangeParam = RANGE_PARAMS.includes(k);
    const tone = accent || (isRangeParam ? highlightColor : (active ? COL.f : c.muted));
    return (
      <span style={{
        fontFamily: monoStack, fontSize: 11,
        padding: '3px 9px', borderRadius: 5,
        display: 'inline-flex', alignItems: 'center', gap: 5,
        color: active ? c.accentText : c.muted,
        background: active ? c.accentSoft : 'transparent',
        border: `1px solid ${active ? c.accentBorder : c.borderSoft}`,
        fontWeight: active ? 600 : 400,
        opacity: dim && !isRangeParam ? 0.55 : 1,
      }}>
        <span style={{ fontWeight: 600, color: tone }}>{k}</span>
        <span>=</span>
        <span>{fmt(value)}</span>
      </span>
    );
  };

  const renderSlider = (key) => {
    const def = PARAM_DEFS[key];
    const isRangeParam = RANGE_PARAMS.includes(key);
    const accent = isRangeParam ? highlightColor : COL.f;
    return (
      <div key={key}>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            {def.label}
            {isRangeParam && (
              <span style={{
                fontSize: 9, fontWeight: 700,
                color: panelTones.text, background: panelTones.soft,
                padding: '1px 5px', borderRadius: 3,
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>affects range</span>
            )}
          </span>
          <span style={{ fontFamily: monoStack, color: accent, fontWeight: 600 }}>
            {fmt(params[key])}
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
                  {['a', 'k', 'b', 'h'].map(renderSlider)}
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
                  <span>Range color</span>
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
                g(x) = {forwardEq}
              </span>
            </div>

            {/* The overlay is gone — the range is now drawn directly on the
                y-axis inside the visualizer&apos;s coordinate system via yAxisHighlights. */}
            <VisualizerWithControls
              functions={functions}
              zoom={10}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              yAxisHighlights={yAxisHighlights}
              horizontalLines={horizontalLines}
              {...mergedVisualizerProps}
            />

            {/* ---- RANGE BAR + TEST POINT + RESULT — the centerpiece ---- */}
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
                gap: 12, marginBottom: 10,
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: panelTones.text, fontWeight: 700,
                }}>
                  Range
                </span>
                <span style={{
                  fontFamily: monoStack, fontSize: 14,
                  color: c.ink, fontWeight: 700,
                }}>
                  {rangeStr}
                </span>
              </div>

              <RangeBar range={gRange} testY={ty} darkMode={darkMode} color={highlightColor} />

              {/* Test point slider + result */}
              <div style={{
                marginTop: 10,
                padding: '10px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${darkMode ? '#1e293b' : panelTones.border}`,
                borderRadius: 6,
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  gap: 12, marginBottom: 6,
                }}>
                  <span style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600,
                  }}>Test point</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <span style={{
                      fontFamily: monoStack, fontSize: 14,
                      color: c.ink, fontWeight: 700,
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      x = {fmt(ty)}
                    </span>
                    <button onClick={resetTestY} style={{
                      background: darkMode ? '#0f172a' : '#fff',
                      border: `1px solid ${c.border}`, color: c.inkSoft,
                      padding: '2px 8px', borderRadius: 5,
                      fontFamily: 'inherit', fontSize: 10, cursor: 'pointer',
                    }}>Reset</button>
                  </div>
                </div>
                <input
                  type="range"
                  min={PARAM_DEFS.ty.min}
                  max={PARAM_DEFS.ty.max}
                  step={PARAM_DEFS.ty.step}
                  value={ty}
                  onChange={e => setParam('ty', parseFloat(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: tyInRange ? highlightColor : COL.outside,
                    cursor: 'pointer',
                  }}
                />
                <div style={{
                  marginTop: 8,
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: monoStack, fontSize: 12,
                }}>
                  <span style={{
                    padding: '3px 9px', borderRadius: 4,
                    fontWeight: 700, fontSize: 11,
                    color: tyInRange ? panelTones.text : c.badText,
                    background: tyInRange ? panelTones.soft : c.badSoft,
                  }}>
                    {tyInRange ? '✓ achievable' : '✗ not achievable'}
                  </span>
                  <span style={{ color: c.inkSoft }}>
                    {tyInRange
                      ? `some x gives g(x) = ${fmt(ty)}`
                      : `no x gives g(x) = ${fmt(ty)}`}
                  </span>
                 
                </div>
              </div>
            </div>

            {/* ---- APPLIED CHIPS — range-relevant ones highlighted ---- */}
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
              {['a', 'k', 'b', 'h'].map(k => <Chip key={k} k={k} dim />)}
              <span style={{ width: 1, height: 16, background: c.border, margin: '0 2px' }} />
              <span style={{
                fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em',
                color: panelTones.text, fontWeight: 700,
                background: panelTones.soft, padding: '2px 6px', borderRadius: 3,
              }}>a, k affect range</span>
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