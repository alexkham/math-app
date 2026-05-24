'use client';

// ============================================================================
// VENN CORE ENHANCED — 2-set (original) + 3-set support
// ============================================================================
// This file is a strict superset of Venncore.js:
//   - All original 2-set behaviour preserved (Venncore renders 2-set as before).
//   - New ThreeSetVenncore component exported for 3-set diagrams.
//   - Venncore auto-detects {A, B, C} in `circles` and delegates to
//     ThreeSetVenncore, so existing consumers keep working AND new ones can
//     just pass three circles.
//
// IMPORTANT: fix the processContent import path below to match your project.
// If the path is wrong, the whole module fails to load and Venncore /
// ThreeSetVenncore / ExplanationsPanel all become undefined in their
// consumers.
// ============================================================================

import React, { useState, useMemo, useRef, useId } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// ============================================================================
// SECTION 1 — 2-SET GEOMETRY (unchanged from original)
// ============================================================================

const EPS = 0.0001;

function classifyCircles(cA, cB) {
  const dx = cB.cx - cA.cx;
  const dy = cB.cy - cA.cy;
  const d = Math.sqrt(dx * dx + dy * dy);
  const rA = cA.r, rB = cB.r;

  if (d < EPS && Math.abs(rA - rB) < EPS) return { type: 'equal' };
  if (d > rA + rB + EPS) return { type: 'disjoint' };
  if (Math.abs(d - (rA + rB)) < EPS) return { type: 'tangent-external' };
  if (d + Math.min(rA, rB) < Math.max(rA, rB) - EPS) {
    const inner = rA < rB ? 'A' : 'B';
    return { type: 'contained', inner, outer: inner === 'A' ? 'B' : 'A' };
  }
  if (Math.abs(d + Math.min(rA, rB) - Math.max(rA, rB)) < EPS) {
    const inner = rA < rB ? 'A' : 'B';
    return { type: 'tangent-internal', inner, outer: inner === 'A' ? 'B' : 'A' };
  }
  const a = (rA * rA - rB * rB + d * d) / (2 * d);
  const h2 = rA * rA - a * a;
  const h = h2 > 0 ? Math.sqrt(h2) : 0;
  const px = cA.cx + (a * dx) / d;
  const py = cA.cy + (a * dy) / d;
  const p1 = { x: px + (h * dy) / d, y: py - (h * dx) / d };
  const p2 = { x: px - (h * dy) / d, y: py + (h * dx) / d };
  const points = p1.y < p2.y ? { top: p1, bottom: p2 } : { top: p2, bottom: p1 };
  return { type: 'overlapping', points };
}

function circlePath(c) {
  const { cx, cy, r } = c;
  return `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
}

function rectPath(r) {
  return `M ${r.x} ${r.y} L ${r.x + r.width} ${r.y} L ${r.x + r.width} ${r.y + r.height} L ${r.x} ${r.y + r.height} Z`;
}

function unionBoundary(circles, cls) {
  const cA = circles.A, cB = circles.B;
  switch (cls.type) {
    case 'overlapping': {
      const { top, bottom } = cls.points;
      return `M ${top.x} ${top.y} A ${cA.r} ${cA.r} 0 1 0 ${bottom.x} ${bottom.y} A ${cB.r} ${cB.r} 0 1 0 ${top.x} ${top.y} Z`;
    }
    case 'disjoint':
    case 'tangent-external':
      return `${circlePath(cA)} ${circlePath(cB)}`;
    case 'contained':
    case 'tangent-internal':
      return circlePath(circles[cls.outer]);
    case 'equal':
      return circlePath(cA);
    default:
      return '';
  }
}

function twoSetRegionPaths(circles, universeRect, cls) {
  const cA = circles.A, cB = circles.B;
  const outside = `${rectPath(universeRect)} ${unionBoundary(circles, cls)}`;
  let aOnly = null, bOnly = null, intersection = null;

  switch (cls.type) {
    case 'overlapping': {
      const { top, bottom } = cls.points;
      aOnly = `M ${top.x} ${top.y} A ${cA.r} ${cA.r} 0 1 0 ${bottom.x} ${bottom.y} A ${cB.r} ${cB.r} 0 0 1 ${top.x} ${top.y} Z`;
      bOnly = `M ${top.x} ${top.y} A ${cB.r} ${cB.r} 0 1 1 ${bottom.x} ${bottom.y} A ${cA.r} ${cA.r} 0 0 0 ${top.x} ${top.y} Z`;
      intersection = `M ${top.x} ${top.y} A ${cA.r} ${cA.r} 0 0 1 ${bottom.x} ${bottom.y} A ${cB.r} ${cB.r} 0 0 1 ${top.x} ${top.y} Z`;
      break;
    }
    case 'disjoint':
    case 'tangent-external':
      aOnly = circlePath(cA);
      bOnly = circlePath(cB);
      break;
    case 'contained':
    case 'tangent-internal': {
      const innerC = circles[cls.inner];
      const outerC = circles[cls.outer];
      const annulus = `${circlePath(outerC)} ${circlePath(innerC)}`;
      if (cls.inner === 'A') bOnly = annulus; else aOnly = annulus;
      intersection = circlePath(innerC);
      break;
    }
    case 'equal':
      intersection = circlePath(cA);
      break;
  }
  return { outside, 'A-only': aOnly, 'B-only': bOnly, 'A∩B': intersection };
}

function twoSetArcs(circles, cls) {
  const cA = circles.A, cB = circles.B;
  switch (cls.type) {
    case 'overlapping': {
      const { top, bottom } = cls.points;
      return [
        { id: 'A.outer', d: `M ${top.x} ${top.y} A ${cA.r} ${cA.r} 0 1 0 ${bottom.x} ${bottom.y}`, circle: 'A', segment: 'outer', bounds: ['outside', 'A-only'] },
        { id: 'A.inner', d: `M ${top.x} ${top.y} A ${cA.r} ${cA.r} 0 0 1 ${bottom.x} ${bottom.y}`, circle: 'A', segment: 'inner', bounds: ['A∩B', 'B-only'] },
        { id: 'B.outer', d: `M ${top.x} ${top.y} A ${cB.r} ${cB.r} 0 1 1 ${bottom.x} ${bottom.y}`, circle: 'B', segment: 'outer', bounds: ['outside', 'B-only'] },
        { id: 'B.inner', d: `M ${top.x} ${top.y} A ${cB.r} ${cB.r} 0 0 0 ${bottom.x} ${bottom.y}`, circle: 'B', segment: 'inner', bounds: ['A∩B', 'A-only'] }
      ];
    }
    case 'disjoint':
    case 'tangent-external':
      return [
        { id: 'A.outer', d: circlePath(cA), circle: 'A', segment: 'outer', bounds: ['outside', 'A-only'] },
        { id: 'B.outer', d: circlePath(cB), circle: 'B', segment: 'outer', bounds: ['outside', 'B-only'] }
      ];
    case 'contained':
    case 'tangent-internal': {
      const innerC = circles[cls.inner];
      const outerC = circles[cls.outer];
      const outerKey = cls.outer === 'A' ? 'A-only' : 'B-only';
      return [
        { id: `${cls.outer}.outer`, d: circlePath(outerC), circle: cls.outer, segment: 'outer', bounds: ['outside', outerKey] },
        { id: `${cls.inner}.outer`, d: circlePath(innerC), circle: cls.inner, segment: 'outer', bounds: [outerKey, 'A∩B'] }
      ];
    }
    case 'equal':
      return [
        { id: 'A.outer', d: circlePath(cA), circle: 'A', segment: 'outer', bounds: ['outside', 'A∩B'] },
        { id: 'B.outer', d: circlePath(cB), circle: 'B', segment: 'outer', bounds: ['outside', 'A∩B'] }
      ];
    default:
      return [];
  }
}

function twoSetAnchors(circles, cls) {
  const cA = circles.A, cB = circles.B;
  switch (cls.type) {
    case 'overlapping': {
      const { top, bottom } = cls.points;
      const dx = cB.cx - cA.cx, dy = cB.cy - cA.cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const ux = dx / dist, uy = dy / dist;
      return {
        'A-only': { x: cA.cx - ux * cA.r * 0.55, y: cA.cy - uy * cA.r * 0.55 },
        'B-only': { x: cB.cx + ux * cB.r * 0.55, y: cB.cy + uy * cB.r * 0.55 },
        'A∩B': { x: (top.x + bottom.x) / 2, y: (top.y + bottom.y) / 2 }
      };
    }
    case 'disjoint':
    case 'tangent-external':
      return { 'A-only': { x: cA.cx, y: cA.cy }, 'B-only': { x: cB.cx, y: cB.cy }, 'A∩B': null };
    case 'contained':
    case 'tangent-internal': {
      const inner = circles[cls.inner], outer = circles[cls.outer];
      const dx = outer.cx - inner.cx, dy = outer.cy - inner.cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let ux = 1, uy = 0;
      if (dist > EPS) { ux = dx / dist; uy = dy / dist; }
      const outerAnchor = { x: outer.cx + ux * outer.r * 0.65, y: outer.cy + uy * outer.r * 0.65 };
      const innerAnchor = { x: inner.cx, y: inner.cy };
      if (cls.inner === 'A') return { 'A-only': null, 'B-only': outerAnchor, 'A∩B': innerAnchor };
      return { 'A-only': outerAnchor, 'B-only': null, 'A∩B': innerAnchor };
    }
    case 'equal':
      return { 'A-only': null, 'B-only': null, 'A∩B': { x: cA.cx, y: cA.cy } };
    default:
      return { 'A-only': null, 'B-only': null, 'A∩B': null };
  }
}

// ============================================================================
// SECTION 2 — 2-SET ADAPTER (unchanged)
// ============================================================================

export const TWO_SET_REGION_TABLE = [
  { key: 'outside', vars: { A: false, B: false } },
  { key: 'A-only', vars: { A: true, B: false } },
  { key: 'B-only', vars: { A: false, B: true } },
  { key: 'A∩B', vars: { A: true, B: true } }
];

export const TWO_SET_REGION_ORDER = ['outside', 'A-only', 'B-only', 'A∩B'];

export function buildTwoSetDiagram(circles, universeRect) {
  const classification = classifyCircles(circles.A, circles.B);
  const paths = twoSetRegionPaths(circles, universeRect, classification);
  const arcs = twoSetArcs(circles, classification);
  const anchors = twoSetAnchors(circles, classification);
  const regions = {};
  TWO_SET_REGION_ORDER.forEach((key) => {
    if (paths[key]) regions[key] = { path: paths[key] };
  });
  return { regions, arcs, anchors, classification };
}

export function highlightFromPredicate(predicate, regionTable = TWO_SET_REGION_TABLE) {
  return regionTable.filter((r) => predicate(r.vars)).map((r) => r.key);
}

export function highlightsMatch(h1, h2) {
  const s1 = new Set(h1), s2 = new Set(h2);
  if (s1.size !== s2.size) return false;
  for (const k of s1) if (!s2.has(k)) return false;
  return true;
}

export function resolveDiagram(geometry, highlight, theme = {}, extras = {}) {
  const themeColor = theme.color ?? '#2563eb';
  const themeOpacity = theme.opacity ?? 0.85;
  const neutralFill = theme.neutralFill ?? '#ffffff';
  const outsideNeutralFill = theme.outsideNeutralFill ?? '#ffffff';
  const hi = new Set(highlight || []);
  const labels = extras.labels || {};
  const tooltips = extras.tooltips || {};
  const styles = extras.regionStyles || {};

  const out = {};
  Object.entries(geometry.regions).forEach(([key, base]) => {
    const isOutside = key === 'outside' || key.includes('outside');
    const isActive = hi.has(key);
    out[key] = {
      ...base,
      fill: isActive ? themeColor : (isOutside ? outsideNeutralFill : neutralFill),
      opacity: isActive ? themeOpacity : 1,
      label: labels[key] || '',
      tooltip: tooltips[key] || '',
      labelPosition: (styles[key] && styles[key].labelPosition) || geometry.anchors?.[key] || null,
      ...((styles[key]) || {})
    };
  });
  return out;
}

// ============================================================================
// SECTION 3 — 3-SET REGION TABLE & HELPERS (new)
// ============================================================================

export const THREE_SET_REGION_TABLE = [
  { key: 'outside', vars: { A: false, B: false, C: false } },
  { key: 'A',       vars: { A: true,  B: false, C: false } },
  { key: 'B',       vars: { A: false, B: true,  C: false } },
  { key: 'C',       vars: { A: false, B: false, C: true  } },
  { key: 'A∩B',     vars: { A: true,  B: true,  C: false } },
  { key: 'A∩C',     vars: { A: true,  B: false, C: true  } },
  { key: 'B∩C',     vars: { A: false, B: true,  C: true  } },
  { key: 'A∩B∩C',   vars: { A: true,  B: true,  C: true  } }
];

export const THREE_SET_REGION_ORDER = [
  'outside', 'A', 'B', 'C', 'A∩B', 'A∩C', 'B∩C', 'A∩B∩C'
];

export function highlightFromPredicate3(predicate, regionTable = THREE_SET_REGION_TABLE) {
  return regionTable.filter((r) => predicate(r.vars)).map((r) => r.key);
}

const THREE_SET_MEMBERSHIP = {
  'outside': { A: false, B: false, C: false },
  'A':       { A: true,  B: false, C: false },
  'B':       { A: false, B: true,  C: false },
  'C':       { A: false, B: false, C: true  },
  'A∩B':     { A: true,  B: true,  C: false },
  'A∩C':     { A: true,  B: false, C: true  },
  'B∩C':     { A: false, B: true,  C: true  },
  'A∩B∩C':   { A: true,  B: true,  C: true  }
};

function threeSetAnchors(circles) {
  const { A, B, C } = circles;
  const center = {
    x: (A.cx + B.cx + C.cx) / 3,
    y: (A.cy + B.cy + C.cy) / 3
  };
  const pushOut = (c, f = 0.6) => {
    const dx = c.cx - center.x, dy = c.cy - center.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    return { x: c.cx + (dx / d) * c.r * f, y: c.cy + (dy / d) * c.r * f };
  };
  const pair = (c1, c2, f = 0.45) => {
    const m = { x: (c1.cx + c2.cx) / 2, y: (c1.cy + c2.cy) / 2 };
    const dx = m.x - center.x, dy = m.y - center.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 1;
    const r = (c1.r + c2.r) / 2;
    return { x: m.x + (dx / d) * r * f, y: m.y + (dy / d) * r * f };
  };
  return {
    'A': pushOut(A),
    'B': pushOut(B),
    'C': pushOut(C),
    'A∩B': pair(A, B),
    'A∩C': pair(A, C),
    'B∩C': pair(B, C),
    'A∩B∩C': center,
    'outside': null
  };
}

export function resolveDiagram3(circles, universeRect, highlight, theme = {}, extras = {}) {
  const themeColor = theme.color ?? '#2563eb';
  const themeOpacity = theme.opacity ?? 0.85;
  const neutralFill = theme.neutralFill ?? '#ffffff';
  const outsideNeutralFill = theme.outsideNeutralFill ?? '#ffffff';
  const hi = new Set(highlight || []);
  const labels = extras.labels || {};
  const tooltips = extras.tooltips || {};
  const styles = extras.regionStyles || {};
  const anchors = threeSetAnchors(circles);

  const out = {};
  for (const { key } of THREE_SET_REGION_TABLE) {
    const isOutside = key === 'outside';
    const isActive = hi.has(key);
    const style = styles[key] || {};
    out[key] = {
      fill: isActive ? themeColor : (isOutside ? outsideNeutralFill : neutralFill),
      opacity: isActive ? themeOpacity : 1,
      label: labels[key] || '',
      tooltip: tooltips[key] || '',
      labelPosition: style.labelPosition || anchors[key] || null,
      stroke: style.stroke ?? 'none',
      strokeWidth: style.strokeWidth ?? 0,
      strokeDasharray: style.strokeDasharray ?? 'none',
      hidden: !!style.hidden,
      labelFontSize: style.labelFontSize,
      labelColor: style.labelColor
    };
  }
  return out;
}

export function symmetricThreeCircles({
  cx = 260, cy = 230, r = 100, offset = 55,
  labels = { A: 'A', B: 'B', C: 'C' },
  stroke = '#1e293b', strokeWidth = 1
} = {}) {
  const angleA = Math.PI / 2;
  const angleB = Math.PI / 2 + (2 * Math.PI) / 3;
  const angleC = Math.PI / 2 - (2 * Math.PI) / 3;
  const place = (a) => ({ cx: cx + offset * Math.cos(a), cy: cy - offset * Math.sin(a) });
  return {
    A: { ...place(angleA), r, label: labels.A, stroke, strokeWidth,
         labelPosition: { x: cx, y: cy - offset - r - 14 } },
    B: { ...place(angleB), r, label: labels.B, stroke, strokeWidth,
         labelPosition: { x: cx - offset - r * 0.8, y: cy + offset + r * 0.6 } },
    C: { ...place(angleC), r, label: labels.C, stroke, strokeWidth,
         labelPosition: { x: cx + offset + r * 0.8, y: cy + offset + r * 0.6 } }
  };
}

// ============================================================================
// SECTION 4 — 2-SET / GENERIC UNIVERSAL RENDERER (unchanged behaviour;
// extended to delegate to ThreeSetVenncore when 3 circles are detected)
// ============================================================================

const SEGMENT_DEFAULTS = { outer: true, inner: false };

function shouldShowArc(arc, regions, override, autoHide) {
  if (override === true) return true;
  if (override === false) return false;
  if (arc.segment && SEGMENT_DEFAULTS[arc.segment] === false) return false;
  if (autoHide && arc.bounds) {
    const [r1, r2] = arc.bounds;
    const c1 = regions[r1] || {};
    const c2 = regions[r2] || {};
    if (c1.hidden && c2.hidden) return false;
    if (c1.fill && c2.fill && c1.fill === c2.fill) {
      const o1 = c1.opacity ?? 1;
      const o2 = c2.opacity ?? 1;
      if (Math.abs(o1 - o2) < 0.2) return false;
    }
  }
  return true;
}

export const VennCoreEnhanced = (props) => {
  const {
    circles = [],
    regions: regionsProp = null
  } = props;

  // Auto-detect 3-set input: object with A, B, C. Delegate to ThreeSetVenncore
  // unless the caller passed pre-computed regions (regionsProp) — in that
  // case respect the lower-level API.
  if (
    !regionsProp &&
    circles && !Array.isArray(circles) &&
    circles.A && circles.B && circles.C
  ) {
    return <ThreeSetVenncore {...props} />;
  }

  // -- Original 2-set / generic path below --
  const {
    highlight = null,
    predicate = null,
    theme = null,
    labels = null,
    tooltips = null,
    regionStyles = null,
    margin = 10,
    width = 520,
    height = 420,
    backgroundColor = '#ffffff',
    universe = null,
    regionOrder: regionOrderProp = null,
    arcs: arcsProp = null,
    autoHideArcs = false,
    labelFontFamily = "'Inter', Arial, sans-serif",
    labelFontWeight = 'bold',
    labelFontSize = 16,
    labelColor = '#1e293b',
    circleLabelFontSize = 18,
    showTooltip = true,
    enableHover = true,
    enableHoverStroke = false,
    hoverHighlightStroke = '#0f172a',
    hoverHighlightStrokeWidth = 1.5,
    onRegionClick = null,
    onRegionHover = null
  } = props;

  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [hovered, setHovered] = useState(null);

  const { regions, arcs, circlesArr, universeFinal, order } = useMemo(() => {
    if (regionsProp) {
      return {
        regions: regionsProp,
        arcs: arcsProp || [],
        circlesArr: Array.isArray(circles) ? circles : Object.entries(circles).map(([k, v]) => ({ key: k, ...v })),
        universeFinal: universe,
        order: regionOrderProp || Object.keys(regionsProp)
      };
    }
    const isObj = circles && !Array.isArray(circles) && circles.A && circles.B;
    if (!isObj) {
      return { regions: {}, arcs: [], circlesArr: Array.isArray(circles) ? circles : [], universeFinal: universe, order: [] };
    }
    const uRect = { x: margin, y: margin, width: width - margin * 2, height: height - margin * 2 };
    const geom = buildTwoSetDiagram(circles, uRect);
    const hi = highlight || (predicate ? highlightFromPredicate(predicate) : []);
    const resolved = resolveDiagram(geom, hi, theme || {}, {
      labels: labels || {}, tooltips: tooltips || {}, regionStyles: regionStyles || {}
    });
    return {
      regions: resolved,
      arcs: geom.arcs,
      circlesArr: [{ key: 'A', ...circles.A }, { key: 'B', ...circles.B }],
      universeFinal: universe ? { rect: uRect, ...universe } : { rect: uRect, label: 'U' },
      order: regionOrderProp || TWO_SET_REGION_ORDER
    };
  }, [regionsProp, arcsProp, regionOrderProp, circles, highlight, theme, labels, tooltips, regionStyles, margin, width, height, universe, predicate]);

  const circleByKey = useMemo(() => {
    const m = {};
    circlesArr.forEach((c) => {
      if (c.key) m[c.key] = c;
      if (c.label) m[c.label] = c;
    });
    return m;
  }, [circlesArr]);

  const handleEnter = (key, cfg) => (e) => {
    if (enableHover) setHovered(key);
    if (showTooltip && cfg?.tooltip && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltip({ visible: true, content: cfg.tooltip, x: e.clientX - rect.left, y: e.clientY - rect.top - 40 });
    }
    if (onRegionHover) onRegionHover(key, cfg, e);
  };
  const handleMove = (e) => {
    if (!tooltip.visible || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip((p) => ({ ...p, x: e.clientX - rect.left, y: e.clientY - rect.top - 40 }));
  };
  const handleLeave = () => {
    setHovered(null);
    setTooltip((p) => ({ ...p, visible: false }));
    if (onRegionHover) onRegionHover(null, null, null);
  };
  const handleClick = (key, cfg) => (e) => {
    if (onRegionClick) onRegionClick(key, cfg, e);
  };

  const renderRegion = (key) => {
    const cfg = regions[key];
    if (!cfg || !cfg.path || cfg.hidden) return null;
    const isHovered = hovered === key;
    return (
      <path
        key={key}
        d={cfg.path}
        fill={cfg.fill ?? 'transparent'}
        opacity={cfg.opacity ?? 1}
        stroke={isHovered && enableHover && enableHoverStroke ? hoverHighlightStroke : (cfg.stroke ?? 'none')}
        strokeWidth={isHovered && enableHover && enableHoverStroke ? hoverHighlightStrokeWidth : (cfg.strokeWidth ?? 0)}
        strokeDasharray={cfg.strokeDasharray ?? 'none'}
        fillRule="evenodd"
        style={{
          cursor: onRegionClick || cfg.tooltip ? 'pointer' : 'default',
          transition: 'fill 250ms ease, opacity 250ms ease'
        }}
        onMouseEnter={handleEnter(key, cfg)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={handleClick(key, cfg)}
      />
    );
  };

  const renderRegionLabel = (key) => {
    const cfg = regions[key];
    if (!cfg || cfg.hidden || !cfg.label) return null;
    const pos = cfg.labelPosition;
    if (!pos) return null;
    return (
      <text
        key={`lbl-${key}`}
        x={pos.x} y={pos.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={cfg.labelFontSize ?? labelFontSize}
        fontFamily={labelFontFamily}
        fontWeight={labelFontWeight}
        fill={cfg.labelColor ?? labelColor}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >{cfg.label}</text>
    );
  };

  const renderUniverse = () => {
    if (!universeFinal || !universeFinal.rect) return null;
    const r = universeFinal.rect;
    return (
      <g>
        <rect x={r.x} y={r.y} width={r.width} height={r.height} fill="none"
          stroke={universeFinal.stroke ?? '#cbd5e1'} strokeWidth={universeFinal.strokeWidth ?? 1} />
        {universeFinal.label && (
          <text
            x={universeFinal.labelPosition?.x ?? r.x + 20}
            y={universeFinal.labelPosition?.y ?? r.y + 24}
            fontSize={universeFinal.labelFontSize ?? 16}
            fontFamily={labelFontFamily}
            fontWeight="bold"
            fill={universeFinal.labelColor ?? '#64748b'}
            style={{ userSelect: 'none' }}
          >{universeFinal.label}</text>
        )}
      </g>
    );
  };

  const renderArcs = () => arcs.map((arc) => {
    const cfg = circleByKey[arc.circle] || {};
    const override = cfg.strokeSegments?.[arc.segment];
    if (!shouldShowArc(arc, regions, override, autoHideArcs)) return null;
    return (
      <path
        key={arc.id}
        d={arc.d}
        fill="none"
        stroke={arc.stroke ?? cfg.stroke ?? '#1e293b'}
        strokeWidth={arc.strokeWidth ?? cfg.strokeWidth ?? 1}
        strokeDasharray={arc.strokeDasharray ?? cfg.strokeDasharray ?? 'none'}
        strokeLinecap="round"
        style={{ pointerEvents: 'none', transition: 'opacity 250ms ease' }}
      />
    );
  });

  const renderCircleLabels = () => circlesArr.map((c, i) => {
    if (!c.label) return null;
    const pos = c.labelPosition || { x: c.cx, y: (c.cy ?? 0) - (c.r ?? 0) - 12 };
    return (
      <text
        key={`circle-lbl-${c.key || c.label || i}`}
        x={pos.x} y={pos.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={c.labelFontSize ?? circleLabelFontSize}
        fontFamily={labelFontFamily}
        fontWeight="bold"
        fill={c.labelColor ?? '#1e293b'}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >{c.label}</text>
    );
  });

  const renderTooltip = () => {
    if (!tooltip.visible) return null;
    return (
      <div style={{
        position: 'absolute', left: tooltip.x, top: tooltip.y,
        transform: 'translateX(-50%)', pointerEvents: 'none',
        background: '#0f172a', color: '#fff', padding: '6px 10px',
        borderRadius: 6, fontSize: 13, fontFamily: labelFontFamily,
        whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 10
      }}>{tooltip.content}</div>
    );
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width, height, display: 'inline-block' }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}
        style={{ backgroundColor, display: 'block', borderRadius: 6 }}>
        {order.map((k) => renderRegion(k))}
        {renderUniverse()}
        {renderArcs()}
        {renderCircleLabels()}
        {order.map((k) => renderRegionLabel(k))}
      </svg>
      {renderTooltip()}
    </div>
  );
};

export function buildTwoSetDiagramProps(input) {
  const margin = input.margin ?? 10;
  const width = input.width ?? 520;
  const height = input.height ?? 420;
  const universeRect = input.universeRect || {
    x: margin, y: margin, width: width - margin * 2, height: height - margin * 2
  };
  const geometry = buildTwoSetDiagram(input.circles, universeRect);
  const regions = resolveDiagram(geometry, input.highlight || [], input.theme || {}, {
    labels: input.labels, tooltips: input.tooltips, regionStyles: input.regionStyles
  });
  const circlesArr = [
    { key: 'A', ...input.circles.A },
    { key: 'B', ...input.circles.B }
  ];
  return {
    width, height,
    backgroundColor: input.backgroundColor ?? '#ffffff',
    universe: input.universe ? { rect: universeRect, ...input.universe } : { rect: universeRect, label: 'U' },
    regions,
    regionOrder: TWO_SET_REGION_ORDER,
    arcs: geometry.arcs,
    circles: circlesArr,
    autoHideArcs: input.autoHideArcs ?? false
  };
}

// ============================================================================
// SECTION 5 — 3-SET RENDERER (new). Uses SVG clipPath nesting to define each
// of the 8 Boolean regions without needing per-region arc-bounded path math.
// ============================================================================

export const ThreeSetVenncore = ({
  highlight = null,
  predicate = null,
  theme = null,
  labels = null,
  tooltips = null,
  regionStyles = null,
  margin = 10,
  width = 520,
  height = 460,
  backgroundColor = '#ffffff',
  universe = null,
  circles,
  labelFontFamily = "'Inter', Arial, sans-serif",
  labelFontWeight = 'bold',
  labelFontSize = 16,
  labelColor = '#1e293b',
  circleLabelFontSize = 18,
  showTooltip = true,
  enableHover = true,
  enableHoverStroke = false,
  hoverHighlightStroke = '#0f172a',
  hoverHighlightStrokeWidth = 1.5,
  onRegionClick = null,
  onRegionHover = null
}) => {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [hovered, setHovered] = useState(null);

  const universeRect = useMemo(() => ({
    x: margin, y: margin, width: width - margin * 2, height: height - margin * 2
  }), [margin, width, height]);

  const resolved = useMemo(() => {
    const hi = highlight || (predicate ? highlightFromPredicate3(predicate) : []);
    return resolveDiagram3(circles, universeRect, hi, theme || {}, {
      labels: labels || {}, tooltips: tooltips || {}, regionStyles: regionStyles || {}
    });
  }, [circles, universeRect, highlight, predicate, theme, labels, tooltips, regionStyles]);

  const idIn = (k) => `${uid}-in-${k}`;
  const idOut = (k) => `${uid}-out-${k}`;

  const rectPathStr = (r) =>
    `M ${r.x} ${r.y} L ${r.x + r.width} ${r.y} L ${r.x + r.width} ${r.y + r.height} L ${r.x} ${r.y + r.height} Z`;

  const circleSubPath = (c) =>
    `M ${c.cx - c.r} ${c.cy} A ${c.r} ${c.r} 0 1 0 ${c.cx + c.r} ${c.cy} A ${c.r} ${c.r} 0 1 0 ${c.cx - c.r} ${c.cy} Z`;

  const notCirclePath = (c) => `${rectPathStr(universeRect)} ${circleSubPath(c)}`;

  const handleEnter = (key, cfg) => (e) => {
    if (enableHover) setHovered(key);
    if (showTooltip && cfg?.tooltip && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltip({ visible: true, content: cfg.tooltip, x: e.clientX - rect.left, y: e.clientY - rect.top - 40 });
    }
    if (onRegionHover) onRegionHover(key, cfg, e);
  };
  const handleMove = (e) => {
    if (!tooltip.visible || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip((p) => ({ ...p, x: e.clientX - rect.left, y: e.clientY - rect.top - 40 }));
  };
  const handleLeave = () => {
    setHovered(null);
    setTooltip((p) => ({ ...p, visible: false }));
    if (onRegionHover) onRegionHover(null, null, null);
  };
  const handleClick = (key, cfg) => (e) => {
    if (onRegionClick) onRegionClick(key, cfg, e);
  };

  const renderRegion = (key) => {
    const cfg = resolved[key];
    if (!cfg || cfg.hidden) return null;
    const m = THREE_SET_MEMBERSHIP[key];
    const isHovered = hovered === key;
    const cps = [
      m.A ? idIn('A') : idOut('A'),
      m.B ? idIn('B') : idOut('B'),
      m.C ? idIn('C') : idOut('C')
    ];
    return (
      <g key={key} clipPath={`url(#${cps[0]})`}>
        <g clipPath={`url(#${cps[1]})`}>
          <rect
            x={universeRect.x}
            y={universeRect.y}
            width={universeRect.width}
            height={universeRect.height}
            clipPath={`url(#${cps[2]})`}
            fill={cfg.fill ?? 'transparent'}
            opacity={cfg.opacity ?? 1}
            stroke={isHovered && enableHover && enableHoverStroke ? hoverHighlightStroke : cfg.stroke}
            strokeWidth={isHovered && enableHover && enableHoverStroke ? hoverHighlightStrokeWidth : cfg.strokeWidth}
            strokeDasharray={cfg.strokeDasharray}
            style={{
              cursor: onRegionClick || cfg.tooltip ? 'pointer' : 'default',
              transition: 'fill 250ms ease, opacity 250ms ease'
            }}
            onMouseEnter={handleEnter(key, cfg)}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onClick={handleClick(key, cfg)}
          />
        </g>
      </g>
    );
  };

  const renderRegionLabel = (key) => {
    const cfg = resolved[key];
    if (!cfg || cfg.hidden || !cfg.label) return null;
    const pos = cfg.labelPosition;
    if (!pos) return null;
    return (
      <text
        key={`lbl-${key}`}
        x={pos.x} y={pos.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={cfg.labelFontSize ?? labelFontSize}
        fontFamily={labelFontFamily}
        fontWeight={labelFontWeight}
        fill={cfg.labelColor ?? labelColor}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >{cfg.label}</text>
    );
  };

  const renderUniverse = () => {
    if (!universe) return null;
    const r = universeRect;
    return (
      <g>
        <rect x={r.x} y={r.y} width={r.width} height={r.height} fill="none"
          stroke={universe.stroke ?? '#cbd5e1'} strokeWidth={universe.strokeWidth ?? 1} />
        {universe.label && (
          <text
            x={universe.labelPosition?.x ?? r.x + 20}
            y={universe.labelPosition?.y ?? r.y + 24}
            fontSize={universe.labelFontSize ?? 16}
            fontFamily={labelFontFamily}
            fontWeight="bold"
            fill={universe.labelColor ?? '#64748b'}
            style={{ userSelect: 'none' }}
          >{universe.label}</text>
        )}
      </g>
    );
  };

  const renderCircles = () => ['A', 'B', 'C'].map((k) => {
    const c = circles[k];
    if (!c) return null;
    return (
      <circle
        key={`outline-${k}`}
        cx={c.cx}
        cy={c.cy}
        r={c.r}
        fill="none"
        stroke={c.stroke ?? '#1e293b'}
        strokeWidth={c.strokeWidth ?? 1}
        strokeDasharray={c.strokeDasharray ?? 'none'}
        style={{ pointerEvents: 'none' }}
      />
    );
  });

  const renderCircleLabels = () => ['A', 'B', 'C'].map((k) => {
    const c = circles[k];
    if (!c || !c.label) return null;
    const pos = c.labelPosition || { x: c.cx, y: c.cy - c.r - 12 };
    return (
      <text
        key={`circle-lbl-${k}`}
        x={pos.x} y={pos.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={c.labelFontSize ?? circleLabelFontSize}
        fontFamily={labelFontFamily}
        fontWeight="bold"
        fill={c.labelColor ?? '#1e293b'}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >{c.label}</text>
    );
  });

  const renderTooltip = () => {
    if (!tooltip.visible) return null;
    return (
      <div style={{
        position: 'absolute', left: tooltip.x, top: tooltip.y,
        transform: 'translateX(-50%)', pointerEvents: 'none',
        background: '#0f172a', color: '#fff', padding: '6px 10px',
        borderRadius: 6, fontSize: 13, fontFamily: labelFontFamily,
        whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 10
      }}>{tooltip.content}</div>
    );
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width, height, display: 'inline-block' }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}
        style={{ backgroundColor, display: 'block', borderRadius: 6 }}>
        <defs>
          {['A', 'B', 'C'].map((k) => (
            <clipPath key={`in-${k}`} id={idIn(k)} clipPathUnits="userSpaceOnUse">
              <path d={circleSubPath(circles[k])} />
            </clipPath>
          ))}
          {['A', 'B', 'C'].map((k) => (
            <clipPath key={`out-${k}`} id={idOut(k)} clipPathUnits="userSpaceOnUse">
              <path d={notCirclePath(circles[k])} fillRule="evenodd" />
            </clipPath>
          ))}
        </defs>

        {THREE_SET_REGION_ORDER.map((k) => renderRegion(k))}
        {renderUniverse()}
        {renderCircles()}
        {renderCircleLabels()}
        {THREE_SET_REGION_ORDER.map((k) => renderRegionLabel(k))}
      </svg>
      {renderTooltip()}
    </div>
  );
};

// ============================================================================
// SECTION 6 — EXPLANATIONS PANEL (unchanged)
// ============================================================================

const EXP_STYLES_ID = 'venncore-explanations-panel-styles';
const EXP_STYLES = `
.exp-panel {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
.exp-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
}
.exp-head-title {
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.exp-body { padding: 20px; }
.exp-identity {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e2e8f0;
}
.exp-identity-name {
  margin: 0 0 6px 0;
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
}
.exp-identity-symbol {
  display: inline-block;
  padding: 6px 12px;
  background: #f1f5f9;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  color: #245de1;
  font-family: 'Cambria Math','Times New Roman',serif;
}
.exp-tab-bar {
  display: flex;
  gap: 2px;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 3px;
  margin-bottom: 16px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.exp-tab-bar::-webkit-scrollbar { display: none; width: 0; height: 0; }
.exp-tab-btn {
  flex: 1;
  min-width: max-content;
  padding: 7px 12px;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: #64748b;
  transition: all 0.15s;
  text-align: center;
  white-space: nowrap;
}
.exp-tab-btn.active {
  background: #fff;
  color: #1e293b;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.exp-tab-btn:not(.active):hover { color: #334155; }
.exp-section { margin-bottom: 16px; }
.exp-section:last-child { margin-bottom: 0; }
.exp-section-title {
  margin: 0 0 6px 0;
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.exp-section-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #475569;
}
.exp-links {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.exp-links-heading {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #94a3b8;
  font-weight: 600;
  margin-bottom: 4px;
}
.exp-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  background: #f1f5f9;
  color: #245de1;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.15s;
  border: 1px solid transparent;
}
.exp-link:hover {
  background: #e8effd;
  border-color: #245de1;
}
.exp-link-icon {
  font-size: 0.9em;
  opacity: 0.8;
  flex-shrink: 0;
}
.exp-link-tag {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: #245de1;
  color: #fff;
  margin-left: auto;
  flex-shrink: 0;
}
`;

function injectExpStylesOnce() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(EXP_STYLES_ID)) return;
  const el = document.createElement('style');
  el.id = EXP_STYLES_ID;
  el.textContent = EXP_STYLES;
  document.head.appendChild(el);
}

function renderText(value) {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'string' || typeof value === 'number') return processContent(String(value));
  return value;
}

function ExpLinksList({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="exp-links">
      <div className="exp-links-heading">Resources</div>
      {links.map((l, i) => (
        <a key={i} className="exp-link" href={l.url} target="_blank" rel="noopener noreferrer">
          {l.icon && <span className="exp-link-icon">{l.icon}</span>}
          <span>{renderText(l.label)}</span>
          {l.tag && <span className="exp-link-tag">{renderText(l.tag)}</span>}
        </a>
      ))}
    </div>
  );
}

function ExpSections({ sections }) {
  if (!sections || sections.length === 0) return null;
  return (
    <>
      {sections.map((sec, i) => (
        <div key={i} className="exp-section">
          {sec.title && <h3 className="exp-section-title">{renderText(sec.title)}</h3>}
          {sec.content !== undefined && sec.content !== null && sec.content !== '' && (
            <div className="exp-section-text">{renderText(sec.content)}</div>
          )}
        </div>
      ))}
    </>
  );
}

const EXP_DEFAULT_TAB_KEY = '__default__';

export function ExplanationsPanel({
  current,
  headTitle = 'Explanation',
  defaultTabLabel = 'Overview',
  explanations = null,
  style = null,
}) {
  injectExpStylesOnce();

  const defaultSections = [];
  if (current?.definition) defaultSections.push({ title: 'Definition', content: current.definition });
  if (current?.example)    defaultSections.push({ title: 'Example',    content: current.example });

  const defaultTab = {
    key: EXP_DEFAULT_TAB_KEY,
    label: defaultTabLabel,
    sections: defaultSections,
    links: null,
  };

  const extraTabsRaw = (explanations && current?.id && explanations[current.id]) || [];
  const extraTabs = extraTabsRaw.map((t, i) => ({
    key: t.key || `extra-${i}`,
    label: t.label || `Tab ${i + 2}`,
    sections: t.sections || [],
    links: t.links || null,
  }));

  const allTabs = [defaultTab, ...extraTabs];

  const [activeKey, setActiveKey] = useState(EXP_DEFAULT_TAB_KEY);

  const prevIdRef = useRef(current?.id);
  if (current?.id !== prevIdRef.current) {
    prevIdRef.current = current?.id;
    if (activeKey !== EXP_DEFAULT_TAB_KEY) setActiveKey(EXP_DEFAULT_TAB_KEY);
  }

  const exists = allTabs.some(t => t.key === activeKey);
  const effectiveKey = exists ? activeKey : EXP_DEFAULT_TAB_KEY;
  const activeTab = allTabs.find(t => t.key === effectiveKey) || defaultTab;

  const showTabBar = allTabs.length > 1;
  const identityLabel = current?.symbol || current?.formula;

  return (
    <div className="exp-panel" style={style || undefined}>
      <div className="exp-head">
        <span className="exp-head-title">{renderText(headTitle)}</span>
      </div>
      <div className="exp-body">
        {(current?.name || identityLabel) && (
          <div className="exp-identity">
            {current?.name && (
              <h2 className="exp-identity-name">{renderText(current.name)}</h2>
            )}
            {identityLabel && (
              <div className="exp-identity-symbol">{renderText(identityLabel)}</div>
            )}
          </div>
        )}

        {showTabBar && (
          <div className="exp-tab-bar">
            {allTabs.map(t => (
              <button
                key={t.key}
                className={`exp-tab-btn${effectiveKey === t.key ? ' active' : ''}`}
                onClick={() => setActiveKey(t.key)}
              >
                {renderText(t.label)}
              </button>
            ))}
          </div>
        )}

        <ExpSections sections={activeTab.sections} />
        <ExpLinksList links={activeTab.links} />
      </div>
    </div>
  );
}

export default VennCoreEnhanced;