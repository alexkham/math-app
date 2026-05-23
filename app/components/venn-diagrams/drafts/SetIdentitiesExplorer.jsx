'use client';

// ============================================================================
// VENN SET IDENTITIES — IDENTITY EXPLORER ONLY (v9)
// ============================================================================
// Split into:
//   - Layer 1: pure geometry engine
//   - Layer 2: VennDiagram renderer
//   - Layer 3: scenario resolver
//   - Layer 5: identities data (26 identities, 8 groups)
//   - Layer 4: SetIdentitiesExplorer (UI shell)
//   - Page export: VennIdentitiesPage
// ============================================================================

import React, { useState, useMemo, useRef } from 'react';

// ============================================================================
// LAYER 1: GEOMETRY ENGINE
// ============================================================================

const EPS = 0.0001;

function classifyCircles(circleA, circleB) {
  const dx = circleB.cx - circleA.cx;
  const dy = circleB.cy - circleA.cy;
  const d = Math.sqrt(dx * dx + dy * dy);
  const rA = circleA.r;
  const rB = circleB.r;

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
  const px = circleA.cx + (a * dx) / d;
  const py = circleA.cy + (a * dy) / d;
  const p1 = { x: px + (h * dy) / d, y: py - (h * dx) / d };
  const p2 = { x: px - (h * dy) / d, y: py + (h * dx) / d };
  const points = p1.y < p2.y ? { top: p1, bottom: p2 } : { top: p2, bottom: p1 };

  return { type: 'overlapping', points };
}

function circlePath(c) {
  const { cx, cy, r } = c;
  return `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
}

function rectPath(rect) {
  const { x, y, width, height } = rect;
  return `M ${x} ${y} L ${x + width} ${y} L ${x + width} ${y + height} L ${x} ${y + height} Z`;
}

function buildUnionBoundary(circles, classification) {
  const cA = circles.A;
  const cB = circles.B;
  switch (classification.type) {
    case 'overlapping': {
      const { top, bottom } = classification.points;
      return `M ${top.x} ${top.y} A ${cA.r} ${cA.r} 0 1 0 ${bottom.x} ${bottom.y} A ${cB.r} ${cB.r} 0 1 0 ${top.x} ${top.y} Z`;
    }
    case 'disjoint':
    case 'tangent-external':
      return `${circlePath(cA)} ${circlePath(cB)}`;
    case 'contained':
    case 'tangent-internal':
      return circlePath(circles[classification.outer]);
    case 'equal':
      return circlePath(cA);
    default:
      return '';
  }
}

function buildRegionPaths(circles, universeRect) {
  const cA = circles.A;
  const cB = circles.B;
  const classification = classifyCircles(cA, cB);

  const unionBoundary = buildUnionBoundary(circles, classification);
  const outside = `${rectPath(universeRect)} ${unionBoundary}`;
  let aOnly = null, bOnly = null, intersection = null;

  switch (classification.type) {
    case 'overlapping': {
      const { top, bottom } = classification.points;
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
      const innerC = circles[classification.inner];
      const outerC = circles[classification.outer];
      const annulus = `${circlePath(outerC)} ${circlePath(innerC)}`;
      if (classification.inner === 'A') bOnly = annulus;
      else aOnly = annulus;
      intersection = circlePath(innerC);
      break;
    }
    case 'equal':
      intersection = circlePath(cA);
      break;
  }

  return { outside, 'A-only': aOnly, 'B-only': bOnly, 'A∩B': intersection, classification };
}

function buildArcs(circles, classification) {
  const cA = circles.A;
  const cB = circles.B;

  switch (classification.type) {
    case 'overlapping': {
      const { top, bottom } = classification.points;
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
      const innerC = circles[classification.inner];
      const outerC = circles[classification.outer];
      const outerOnlyKey = classification.outer === 'A' ? 'A-only' : 'B-only';
      return [
        { id: `${classification.outer}.outer`, d: circlePath(outerC), circle: classification.outer, segment: 'outer', bounds: ['outside', outerOnlyKey] },
        { id: `${classification.inner}.outer`, d: circlePath(innerC), circle: classification.inner, segment: 'outer', bounds: [outerOnlyKey, 'A∩B'] }
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

function computeRegionAnchors(circles, classification) {
  const cA = circles.A;
  const cB = circles.B;

  switch (classification.type) {
    case 'overlapping': {
      const { top, bottom } = classification.points;
      const midX = (top.x + bottom.x) / 2;
      const midY = (top.y + bottom.y) / 2;
      const dx = cB.cx - cA.cx;
      const dy = cB.cy - cA.cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const ux = dx / dist;
      const uy = dy / dist;
      return {
        'A-only': { x: cA.cx - ux * cA.r * 0.55, y: cA.cy - uy * cA.r * 0.55 },
        'B-only': { x: cB.cx + ux * cB.r * 0.55, y: cB.cy + uy * cB.r * 0.55 },
        'A∩B': { x: midX, y: midY }
      };
    }
    case 'disjoint':
    case 'tangent-external':
      return {
        'A-only': { x: cA.cx, y: cA.cy },
        'B-only': { x: cB.cx, y: cB.cy },
        'A∩B': null
      };
    case 'contained':
    case 'tangent-internal': {
      const inner = circles[classification.inner];
      const outer = circles[classification.outer];
      const dx = outer.cx - inner.cx;
      const dy = outer.cy - inner.cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let ux = 1, uy = 0;
      if (dist > EPS) { ux = dx / dist; uy = dy / dist; }
      const outerAnchor = { x: outer.cx + ux * outer.r * 0.65, y: outer.cy + uy * outer.r * 0.65 };
      const innerAnchor = { x: inner.cx, y: inner.cy };
      if (classification.inner === 'A') return { 'A-only': null, 'B-only': outerAnchor, 'A∩B': innerAnchor };
      return { 'A-only': outerAnchor, 'B-only': null, 'A∩B': innerAnchor };
    }
    case 'equal':
      return { 'A-only': null, 'B-only': null, 'A∩B': { x: cA.cx, y: cA.cy } };
    default:
      return { 'A-only': null, 'B-only': null, 'A∩B': null };
  }
}

// ============================================================================
// IDENTITY HELPERS (predicate → highlight)
// ============================================================================

const REGION_TRUTH_TABLE = [
  { key: 'outside', a: false, b: false },
  { key: 'A-only', a: true, b: false },
  { key: 'B-only', a: false, b: true },
  { key: 'A∩B', a: true, b: true }
];

function highlightFromPredicate(predicate) {
  return REGION_TRUTH_TABLE.filter(({ a, b }) => predicate(a, b)).map((c) => c.key);
}

function highlightsMatch(h1, h2) {
  const s1 = new Set(h1);
  const s2 = new Set(h2);
  if (s1.size !== s2.size) return false;
  for (const k of s1) if (!s2.has(k)) return false;
  return true;
}

// ============================================================================
// LAYER 2: DIAGRAM RENDERER
// ============================================================================

const DEFAULT_REGION_ORDER = ['outside', 'A-only', 'B-only', 'A∩B'];
const SEGMENT_DEFAULTS = { outer: true, inner: false };

function shouldShowArc(arc, regions, segmentOverride, autoHide) {
  if (segmentOverride === true) return true;
  if (segmentOverride === false) return false;
  if (!SEGMENT_DEFAULTS[arc.segment]) return false;
  if (autoHide) {
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

const VennDiagram = ({
  width = 260,
  height = 210,
  backgroundColor = '#ffffff',
  showUniverse = true,
  universe = {
    label: 'U',
    labelPosition: { x: 18, y: 20 },
    stroke: '#cbd5e1',
    strokeWidth: 1,
    margin: 6
  },
  circles,
  regions = {},
  autoHideArcs = false,
  labelFontSize = 14,
  labelFontFamily = "'Inter', Arial, sans-serif",
  labelFontWeight = 'bold',
  labelColor = '#1e293b',
  circleLabelFontSize = 14,
  showTooltip = true,
  enableHover = true,
  enableHoverStroke = false,
  hoverHighlightStroke = '#0f172a',
  hoverHighlightStrokeWidth = 1.5,
  onRegionClick = null,
  onRegionHover = null
}) => {
  const containerRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const universeRect = useMemo(() => {
    const m = universe.margin ?? 6;
    return { x: m, y: m, width: width - m * 2, height: height - m * 2 };
  }, [width, height, universe.margin]);

  const { paths, anchors, arcs } = useMemo(() => {
    const result = buildRegionPaths(circles, universeRect);
    const { classification: cls, ...rest } = result;
    return {
      paths: rest,
      anchors: computeRegionAnchors(circles, cls),
      arcs: buildArcs(circles, cls)
    };
  }, [circles, universeRect]);

  const handleEnter = (key, cfg) => (e) => {
    if (enableHover) setHoveredRegion(key);
    if (showTooltip && cfg?.tooltip && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltip({ visible: true, content: cfg.tooltip, x: e.clientX - rect.left, y: e.clientY - rect.top - 40 });
    }
    if (onRegionHover) onRegionHover(key, cfg, e);
  };
  const handleMove = (e) => {
    if (!tooltip.visible || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip((prev) => ({ ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top - 40 }));
  };
  const handleLeave = () => {
    setHoveredRegion(null);
    setTooltip((prev) => ({ ...prev, visible: false }));
    if (onRegionHover) onRegionHover(null, null, null);
  };
  const handleClick = (key, cfg) => (e) => {
    if (onRegionClick) onRegionClick(key, cfg, e);
  };

  const renderRegion = (key) => {
    const cfg = regions[key];
    const path = paths[key];
    if (!cfg || !path || cfg.hidden) return null;
    const isHovered = hoveredRegion === key;
    return (
      <path
        key={key}
        d={path}
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
    const pos = cfg.labelPosition || anchors[key];
    if (!pos) return null;
    return (
      <text
        key={`lbl-${key}`}
        x={pos.x}
        y={pos.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={cfg.labelFontSize ?? labelFontSize}
        fontFamily={labelFontFamily}
        fontWeight={labelFontWeight}
        fill={cfg.labelColor ?? labelColor}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {cfg.label}
      </text>
    );
  };

  const renderUniverse = () => {
    if (!showUniverse) return null;
    const u = universeRect;
    return (
      <g>
        <rect
          x={u.x}
          y={u.y}
          width={u.width}
          height={u.height}
          fill="none"
          stroke={universe.stroke ?? '#cbd5e1'}
          strokeWidth={universe.strokeWidth ?? 1}
        />
        {universe.label && (
          <text
            x={universe.labelPosition?.x ?? u.x + 14}
            y={universe.labelPosition?.y ?? u.y + 20}
            fontSize={universe.labelFontSize ?? 12}
            fontFamily={labelFontFamily}
            fontWeight="bold"
            fill={universe.labelColor ?? '#64748b'}
            style={{ userSelect: 'none' }}
          >
            {universe.label}
          </text>
        )}
      </g>
    );
  };

  const renderArcs = () => {
    return arcs.map((arc) => {
      const circleCfg = circles[arc.circle] || {};
      const segOverride = circleCfg.strokeSegments?.[arc.segment];
      if (!shouldShowArc(arc, regions, segOverride, autoHideArcs)) return null;
      return (
        <path
          key={arc.id}
          d={arc.d}
          fill="none"
          stroke={circleCfg.stroke ?? '#1e293b'}
          strokeWidth={circleCfg.strokeWidth ?? 1}
          strokeDasharray={circleCfg.strokeDasharray ?? 'none'}
          strokeLinecap="round"
          style={{ pointerEvents: 'none', transition: 'opacity 250ms ease' }}
        />
      );
    });
  };

  const renderCircleLabels = () => {
    return Object.entries(circles).map(([key, c]) => {
      if (!c.label) return null;
      const labelPos = c.labelPosition || { x: c.cx, y: c.cy - c.r - 10 };
      return (
        <text
          key={`circle-lbl-${key}`}
          x={labelPos.x}
          y={labelPos.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={c.labelFontSize ?? circleLabelFontSize}
          fontFamily={labelFontFamily}
          fontWeight="bold"
          fill={c.labelColor ?? '#1e293b'}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {c.label}
        </text>
      );
    });
  };

  const renderTooltip = () => {
    if (!tooltip.visible) return null;
    return (
      <div
        style={{
          position: 'absolute',
          left: tooltip.x,
          top: tooltip.y,
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          background: '#0f172a',
          color: '#fff',
          padding: '6px 10px',
          borderRadius: 6,
          fontSize: 13,
          fontFamily: labelFontFamily,
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 10
        }}
      >
        {tooltip.content}
      </div>
    );
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width, height, display: 'inline-block' }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ backgroundColor, display: 'block', borderRadius: 6 }}
      >
        {renderRegion('outside')}
        {DEFAULT_REGION_ORDER.slice(1).map((k) => renderRegion(k))}
        {renderUniverse()}
        {renderArcs()}
        {renderCircleLabels()}
        {DEFAULT_REGION_ORDER.map((k) => renderRegionLabel(k))}
      </svg>
      {renderTooltip()}
    </div>
  );
};

// ============================================================================
// LAYER 3: SCENARIO RESOLVER
// ============================================================================

function mergeCircles(baseCircles, overrideCircles) {
  if (!overrideCircles) return baseCircles;
  if (!baseCircles) return overrideCircles;
  const result = {};
  const keys = new Set([...Object.keys(baseCircles), ...Object.keys(overrideCircles)]);
  keys.forEach((key) => {
    const base = baseCircles[key] || {};
    const override = overrideCircles[key] || {};
    result[key] = {
      ...base,
      ...override,
      strokeSegments: { ...(base.strokeSegments || {}), ...(override.strokeSegments || {}) },
      labelPosition: override.labelPosition || base.labelPosition
    };
  });
  return result;
}

function resolveScenario(diagramDefaults = {}, scenario = {}, theme = {}) {
  const themeColor = theme.color ?? '#2563eb';
  const themeOpacity = theme.opacity ?? 0.85;
  const neutralFill = theme.neutralFill ?? '#ffffff';
  const outsideNeutralFill = theme.outsideNeutralFill ?? '#ffffff';

  const highlight = new Set(scenario.highlight || []);
  const labels = scenario.labels || {};
  const tooltips = scenario.tooltips || {};

  const buildRegion = (key) => {
    const isOutside = key === 'outside';
    const isActive = highlight.has(key);
    return {
      fill: isActive ? themeColor : (isOutside ? outsideNeutralFill : neutralFill),
      opacity: isActive ? themeOpacity : 1,
      label: labels[key] || '',
      tooltip: tooltips[key] || ''
    };
  };

  const regions = {
    outside: buildRegion('outside'),
    'A-only': buildRegion('A-only'),
    'B-only': buildRegion('B-only'),
    'A∩B': buildRegion('A∩B')
  };

  const circles = mergeCircles(diagramDefaults.circles, scenario.circles);

  return {
    width: diagramDefaults.width ?? 260,
    height: diagramDefaults.height ?? 210,
    backgroundColor: diagramDefaults.backgroundColor ?? '#ffffff',
    showUniverse: diagramDefaults.showUniverse ?? true,
    showTooltip: diagramDefaults.showTooltip ?? true,
    enableHover: diagramDefaults.enableHover ?? true,
    enableHoverStroke: diagramDefaults.enableHoverStroke ?? false,
    autoHideArcs: scenario.autoHideArcs ?? diagramDefaults.autoHideArcs ?? false,
    universe: { ...(diagramDefaults.universe || {}), ...(scenario.universe || {}) },
    circles,
    regions
  };
}

// ============================================================================
// LAYER 5: IDENTITIES DATA (26 identities, 8 groups)
// ============================================================================

const CIRCLE_STROKE = '#1e293b';

const MINI_CIRCLES = {
  A: { cx: 100, cy: 110, r: 55, label: 'A', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 60, y: 180 } },
  B: { cx: 160, cy: 110, r: 55, label: 'B', stroke: CIRCLE_STROKE, strokeWidth: 1, labelPosition: { x: 200, y: 180 } }
};

const identitiesData = {
  frame: {
    title: 'Set Theory Identities',
    subtitle: 'Visual proofs — both diagrams should highlight the same regions'
  },
  diagramDefaults: {
    width: 260,
    height: 210,
    backgroundColor: '#ffffff',
    showUniverse: true,
    showTooltip: true,
    enableHover: true,
    enableHoverStroke: false,
    autoHideArcs: false,
    universe: {
      label: 'U',
      labelPosition: { x: 18, y: 20 },
      stroke: '#cbd5e1',
      strokeWidth: 1,
      margin: 6,
      labelFontSize: 12,
      labelColor: '#64748b'
    },
    circles: MINI_CIRCLES
  },
  theme: {
    color: '#2563eb',
    opacity: 0.85,
    neutralFill: '#ffffff',
    outsideNeutralFill: '#ffffff'
  },
  identities: [
    // Idempotent
    {
      id: 'idem-union',
      group: 'Idempotent',
      name: 'Idempotent (Union)',
      formula: 'A ∪ A = A',
      lhs: { symbol: 'A ∪ A', expr: (a, b) => a || a },
      rhs: { symbol: 'A',     expr: (a, b) => a },
      definition: 'Uniting a set with itself yields the same set.'
    },
    {
      id: 'idem-intersect',
      group: 'Idempotent',
      name: 'Idempotent (Intersection)',
      formula: 'A ∩ A = A',
      lhs: { symbol: 'A ∩ A', expr: (a, b) => a && a },
      rhs: { symbol: 'A',     expr: (a, b) => a },
      definition: 'Intersecting a set with itself yields the same set.'
    },
    // Commutative
    {
      id: 'comm-union',
      group: 'Commutative',
      name: 'Commutative (Union)',
      formula: 'A ∪ B = B ∪ A',
      lhs: { symbol: 'A ∪ B', expr: (a, b) => a || b },
      rhs: { symbol: 'B ∪ A', expr: (a, b) => b || a },
      definition: 'Order does not matter in union.'
    },
    {
      id: 'comm-intersect',
      group: 'Commutative',
      name: 'Commutative (Intersection)',
      formula: 'A ∩ B = B ∩ A',
      lhs: { symbol: 'A ∩ B', expr: (a, b) => a && b },
      rhs: { symbol: 'B ∩ A', expr: (a, b) => b && a },
      definition: 'Order does not matter in intersection.'
    },
    // Identity & Annihilation
    {
      id: 'id-union-empty',
      group: 'Identity & Annihilation',
      name: 'Identity (Union with ∅)',
      formula: 'A ∪ ∅ = A',
      lhs: { symbol: 'A ∪ ∅', expr: (a, b) => a || false },
      rhs: { symbol: 'A',     expr: (a, b) => a },
      definition: '∅ is the identity element for union.'
    },
    {
      id: 'id-intersect-U',
      group: 'Identity & Annihilation',
      name: 'Identity (Intersection with U)',
      formula: 'A ∩ U = A',
      lhs: { symbol: 'A ∩ U', expr: (a, b) => a && true },
      rhs: { symbol: 'A',     expr: (a, b) => a },
      definition: 'U is the identity element for intersection.'
    },
    {
      id: 'annih-intersect',
      group: 'Identity & Annihilation',
      name: 'Annihilation (Intersection with ∅)',
      formula: 'A ∩ ∅ = ∅',
      lhs: { symbol: 'A ∩ ∅', expr: (a, b) => a && false },
      rhs: { symbol: '∅',     expr: (a, b) => false },
      definition: 'Intersecting with ∅ always gives ∅.'
    },
    {
      id: 'annih-union',
      group: 'Identity & Annihilation',
      name: 'Annihilation (Union with U)',
      formula: 'A ∪ U = U',
      lhs: { symbol: 'A ∪ U', expr: (a, b) => a || true },
      rhs: { symbol: 'U',     expr: (a, b) => true },
      definition: 'Uniting with U always gives U.'
    },
    // Complement
    {
      id: 'comp-union',
      group: 'Complement',
      name: 'Complement Law (Union)',
      formula: "A ∪ A' = U",
      lhs: { symbol: "A ∪ A'", expr: (a, b) => a || !a },
      rhs: { symbol: 'U',      expr: (a, b) => true },
      definition: 'A set together with its complement is the universe.'
    },
    {
      id: 'comp-intersect',
      group: 'Complement',
      name: 'Complement Law (Intersection)',
      formula: "A ∩ A' = ∅",
      lhs: { symbol: "A ∩ A'", expr: (a, b) => a && !a },
      rhs: { symbol: '∅',      expr: (a, b) => false },
      definition: 'A set and its complement share no elements.'
    },
    {
      id: 'double-comp',
      group: 'Complement',
      name: 'Double Complement (Involution)',
      formula: "(A')' = A",
      lhs: { symbol: "(A')'", expr: (a, b) => !(!a) },
      rhs: { symbol: 'A',     expr: (a, b) => a },
      definition: 'Complementing twice returns the original set.'
    },
    {
      id: 'comp-U',
      group: 'Complement',
      name: 'Complement of Universe',
      formula: "U' = ∅",
      lhs: { symbol: "U'", expr: (a, b) => !true },
      rhs: { symbol: '∅', expr: (a, b) => false },
      definition: 'The complement of U is the empty set.'
    },
    {
      id: 'comp-empty',
      group: 'Complement',
      name: 'Complement of Empty Set',
      formula: "∅' = U",
      lhs: { symbol: "∅'", expr: (a, b) => !false },
      rhs: { symbol: 'U', expr: (a, b) => true },
      definition: 'The complement of ∅ is the universe.'
    },
    // De Morgan's Laws
    {
      id: 'demorgan-union',
      group: "De Morgan's Laws",
      name: 'Complement of Union',
      formula: "(A ∪ B)' = A' ∩ B'",
      lhs: { symbol: "(A ∪ B)'", expr: (a, b) => !(a || b) },
      rhs: { symbol: "A' ∩ B'",  expr: (a, b) => !a && !b },
      definition: 'The complement of a union equals the intersection of the complements.'
    },
    {
      id: 'demorgan-intersect',
      group: "De Morgan's Laws",
      name: 'Complement of Intersection',
      formula: "(A ∩ B)' = A' ∪ B'",
      lhs: { symbol: "(A ∩ B)'", expr: (a, b) => !(a && b) },
      rhs: { symbol: "A' ∪ B'",  expr: (a, b) => !a || !b },
      definition: 'The complement of an intersection equals the union of the complements.'
    },
    // Absorption
    {
      id: 'abs-union',
      group: 'Absorption',
      name: 'Absorption (Union)',
      formula: 'A ∪ (A ∩ B) = A',
      lhs: { symbol: 'A ∪ (A ∩ B)', expr: (a, b) => a || (a && b) },
      rhs: { symbol: 'A',           expr: (a, b) => a },
      definition: 'Uniting A with any subset of A leaves A unchanged.'
    },
    {
      id: 'abs-intersect',
      group: 'Absorption',
      name: 'Absorption (Intersection)',
      formula: 'A ∩ (A ∪ B) = A',
      lhs: { symbol: 'A ∩ (A ∪ B)', expr: (a, b) => a && (a || b) },
      rhs: { symbol: 'A',           expr: (a, b) => a },
      definition: 'Intersecting A with any superset of A leaves A unchanged.'
    },
    // Difference
    {
      id: 'diff-as-intersect-comp',
      group: 'Difference',
      name: 'A minus B as Intersection',
      formula: "A \\ B = A ∩ B'",
      lhs: { symbol: 'A \\ B',  expr: (a, b) => a && !b },
      rhs: { symbol: "A ∩ B'",  expr: (a, b) => a && !b },
      definition: 'Difference is intersection with the complement.'
    },
    {
      id: 'diff-rev',
      group: 'Difference',
      name: 'B minus A as Intersection',
      formula: "B \\ A = A' ∩ B",
      lhs: { symbol: 'B \\ A',  expr: (a, b) => b && !a },
      rhs: { symbol: "A' ∩ B",  expr: (a, b) => !a && b },
      definition: 'Symmetric form of the difference identity.'
    },
    {
      id: 'symdiff-as-union-diffs',
      group: 'Difference',
      name: 'Symmetric Difference as Union of Differences',
      formula: 'A △ B = (A \\ B) ∪ (B \\ A)',
      lhs: { symbol: 'A △ B',             expr: (a, b) => a !== b },
      rhs: { symbol: '(A \\ B) ∪ (B \\ A)', expr: (a, b) => (a && !b) || (b && !a) },
      definition: 'Symmetric difference equals the union of the two differences.'
    },
    {
      id: 'symdiff-as-union-minus-intersect',
      group: 'Difference',
      name: 'Symmetric Difference as Union Minus Intersection',
      formula: "A △ B = (A ∪ B) ∩ (A ∩ B)'",
      lhs: { symbol: 'A △ B',              expr: (a, b) => a !== b },
      rhs: { symbol: "(A ∪ B) ∩ (A ∩ B)'", expr: (a, b) => (a || b) && !(a && b) },
      definition: 'Symmetric difference equals everything in the union except the intersection.'
    },
    {
      id: 'symdiff-complement',
      group: 'Difference',
      name: 'Complement of Symmetric Difference',
      formula: "(A △ B)' = (A ∩ B) ∪ (A ∪ B)'",
      lhs: { symbol: "(A △ B)'",            expr: (a, b) => !(a !== b) },
      rhs: { symbol: "(A ∩ B) ∪ (A ∪ B)'",  expr: (a, b) => (a && b) || !(a || b) },
      definition: 'The complement of A △ B contains the intersection plus everything outside both sets.'
    },
    // Compound Complements
    {
      id: 'cc-1',
      group: 'Compound Complements',
      name: "Complement of A' ∪ B",
      formula: "(A' ∪ B)' = A ∩ B'",
      lhs: { symbol: "(A' ∪ B)'", expr: (a, b) => !(!a || b) },
      rhs: { symbol: "A ∩ B'",    expr: (a, b) => a && !b },
      definition: "Derived from De Morgan's plus double complement."
    },
    {
      id: 'cc-2',
      group: 'Compound Complements',
      name: "Complement of A ∪ B'",
      formula: "(A ∪ B')' = A' ∩ B",
      lhs: { symbol: "(A ∪ B')'", expr: (a, b) => !(a || !b) },
      rhs: { symbol: "A' ∩ B",    expr: (a, b) => !a && b },
      definition: 'Mirror of the previous identity.'
    },
    {
      id: 'cc-3',
      group: 'Compound Complements',
      name: "Complement of A ∩ B'",
      formula: "(A ∩ B')' = A' ∪ B",
      lhs: { symbol: "(A ∩ B')'", expr: (a, b) => !(a && !b) },
      rhs: { symbol: "A' ∪ B",    expr: (a, b) => !a || b },
      definition: 'Useful in expressing material implication: A → B.'
    },
    {
      id: 'cc-4',
      group: 'Compound Complements',
      name: "Complement of A' ∩ B",
      formula: "(A' ∩ B)' = A ∪ B'",
      lhs: { symbol: "(A' ∩ B)'", expr: (a, b) => !(!a && b) },
      rhs: { symbol: "A ∪ B'",    expr: (a, b) => a || !b },
      definition: 'Mirror of the previous identity.'
    }
  ]
};

// ============================================================================
// LAYER 4: SET IDENTITIES EXPLORER
// ============================================================================

const IDENTITY_GROUP_ORDER = [
  'Idempotent',
  'Commutative',
  'Identity & Annihilation',
  'Complement',
  "De Morgan's Laws",
  'Absorption',
  'Difference',
  'Compound Complements'
];

const SetIdentitiesExplorer = ({ identitiesData, DiagramComponent }) => {
  const frame = identitiesData?.frame || { title: 'Identities', subtitle: '' };
  const diagramDefaults = identitiesData?.diagramDefaults || {};
  const identities = identitiesData?.identities || [];
  const defaultTheme = identitiesData?.theme || { color: '#2563eb', opacity: 0.85 };

  const [currentId, setCurrentId] = useState(identities[0]?.id);
  const [themeColor, setThemeColor] = useState(defaultTheme.color);
  const [themeOpacity, setThemeOpacity] = useState(defaultTheme.opacity);

  const resetTheme = () => {
    setThemeColor(defaultTheme.color);
    setThemeOpacity(defaultTheme.opacity);
  };

  const groupedIdentities = useMemo(() => {
    return identities.reduce((acc, id) => {
      const g = id.group || 'Other';
      if (!acc[g]) acc[g] = [];
      acc[g].push(id);
      return acc;
    }, {});
  }, [identities]);

  const sortedGroups = useMemo(() => {
    const known = IDENTITY_GROUP_ORDER.filter((g) => groupedIdentities[g]);
    const extras = Object.keys(groupedIdentities).filter((g) => !IDENTITY_GROUP_ORDER.includes(g));
    return [...known, ...extras];
  }, [groupedIdentities]);

  const currentIdentity = identities.find((id) => id.id === currentId) || identities[0];
  const currentIndex = identities.findIndex((id) => id.id === currentId);

  const { lhsProps, rhsProps, matches } = useMemo(() => {
    if (!currentIdentity) return { lhsProps: null, rhsProps: null, matches: false };
    const theme = {
      color: themeColor,
      opacity: themeOpacity,
      neutralFill: defaultTheme.neutralFill,
      outsideNeutralFill: defaultTheme.outsideNeutralFill
    };
    const lhsHighlight = highlightFromPredicate(currentIdentity.lhs.expr);
    const rhsHighlight = highlightFromPredicate(currentIdentity.rhs.expr);
    return {
      lhsProps: resolveScenario(diagramDefaults, { highlight: lhsHighlight }, theme),
      rhsProps: resolveScenario(diagramDefaults, { highlight: rhsHighlight }, theme),
      matches: highlightsMatch(lhsHighlight, rhsHighlight)
    };
  }, [diagramDefaults, currentIdentity, themeColor, themeOpacity, defaultTheme]);

  const goPrev = () => {
    const i = currentIndex > 0 ? currentIndex - 1 : identities.length - 1;
    setCurrentId(identities[i].id);
  };
  const goNext = () => {
    const i = currentIndex < identities.length - 1 ? currentIndex + 1 : 0;
    setCurrentId(identities[i].id);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{frame.title}</h1>
        <p style={styles.subtitle}>{frame.subtitle}</p>
      </div>

      <div style={styles.controlsPanel}>
        <div style={styles.buttonGroupsContainer}>
          {sortedGroups.map((groupName) => (
            <div key={groupName} style={styles.buttonGroup}>
              <span style={styles.groupLabel}>{groupName}</span>
              <div style={styles.groupButtons}>
                {groupedIdentities[groupName].map((id) => (
                  <button
                    key={id.id}
                    style={{ ...styles.quickButton, ...(currentId === id.id ? styles.quickButtonActive : {}) }}
                    onClick={() => setCurrentId(id.id)}
                    title={id.name}
                  >
                    {id.formula}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.dropdownContainer}>
          <span style={styles.groupLabel}>Jump to</span>
          <select style={styles.dropdown} value={currentId} onChange={(e) => setCurrentId(e.target.value)}>
            {sortedGroups.map((groupName) => (
              <optgroup key={groupName} label={groupName}>
                {groupedIdentities[groupName].map((id) => (
                  <option key={id.id} value={id.id}>{id.formula}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.diagramColumn}>
          <div style={styles.diagramPanel}>
            <div style={styles.panelHeader}>
              <span style={styles.panelTitle}>Identity</span>
              <span style={styles.panelBadge}>{currentIdentity?.formula}</span>
            </div>
            <div style={styles.identityDiagrams}>
              <div style={styles.identitySide}>
                <div style={styles.identitySideLabel}>{currentIdentity?.lhs.symbol}</div>
                {DiagramComponent && lhsProps && <DiagramComponent {...lhsProps} />}
              </div>
              <div style={styles.identityEquals}>=</div>
              <div style={styles.identitySide}>
                <div style={styles.identitySideLabel}>{currentIdentity?.rhs.symbol}</div>
                {DiagramComponent && rhsProps && <DiagramComponent {...rhsProps} />}
              </div>
            </div>
            <div style={styles.identityMatchRow}>
              <span style={{ ...styles.identityMatchBadge, ...(matches ? styles.identityMatchOk : styles.identityMatchFail) }}>
                {matches ? '✓ Regions match — identity holds' : '✗ Regions differ'}
              </span>
            </div>
          </div>

          <div style={styles.themePanel}>
            <div style={styles.panelHeader}>
              <span style={styles.panelTitle}>Theme</span>
              <button style={styles.resetButton} onClick={resetTheme}>Reset</button>
            </div>
            <div style={styles.themeBody}>
              <span style={styles.themeLabel}>Color</span>
              <input
                type="color"
                style={styles.colorInput}
                value={themeColor}
                onChange={(e) => setThemeColor(e.target.value)}
              />
              <span style={styles.themeLabel}>Opacity</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                style={styles.rangeInput}
                value={themeOpacity}
                onChange={(e) => setThemeOpacity(parseFloat(e.target.value))}
              />
              <span style={styles.opacityValue}>{themeOpacity.toFixed(2)}</span>
            </div>
          </div>

          <div style={styles.navigationPanel}>
            <button style={styles.navButton} onClick={goPrev}>← Previous</button>
            <span style={styles.stateCounter}>{currentIndex + 1} / {identities.length}</span>
            <button style={styles.navButton} onClick={goNext}>Next →</button>
          </div>
        </div>

        <div style={styles.explanationPanel}>
          <div style={styles.panelHeader}>
            <span style={styles.panelTitle}>Explanation</span>
          </div>
          <div style={styles.explanationContent}>
            <div style={styles.stateTitle}>
              <h2 style={styles.stateName}>{currentIdentity?.name}</h2>
              <div style={styles.symbolDisplay}>{currentIdentity?.formula}</div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Definition</h3>
              <p style={styles.sectionText}>{currentIdentity?.definition || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", maxWidth: '1440px', margin: '0 auto', padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' },
  header: { textAlign: 'center', marginBottom: '20px', padding: '16px 20px', backgroundColor: '#245de1', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 20px rgba(36, 93, 225, 0.3)' },
  title: { margin: '0 0 4px 0', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' },
  subtitle: { margin: 0, fontSize: '14px', opacity: 0.9 },
  controlsPanel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' },
  buttonGroupsContainer: { display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 },
  buttonGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  groupLabel: { fontSize: '10px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' },
  groupButtons: { display: 'flex', gap: '4px', flexWrap: 'wrap' },
  quickButton: { padding: '6px 10px', fontSize: '12px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '2px solid transparent', borderRadius: '6px', cursor: 'pointer', fontFamily: "'Cambria Math', 'Times New Roman', serif", whiteSpace: 'nowrap' },
  quickButtonActive: { color: '#245de1', backgroundColor: '#e8effd', borderColor: '#245de1' },
  dropdownContainer: { display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '200px' },
  dropdown: { width: '100%', padding: '8px 12px', fontSize: '13px', fontWeight: '500', color: '#334155', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer', outline: 'none' },
  mainContent: { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' },
  diagramColumn: { flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '12px' },
  diagramPanel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
  panelHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' },
  panelTitle: { fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
  panelBadge: { padding: '3px 10px', backgroundColor: '#245de1', color: '#fff', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  identityDiagrams: { padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' },
  identitySide: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
  identitySideLabel: { fontSize: '14px', fontWeight: '600', color: '#1e293b', fontFamily: "'Cambria Math', 'Times New Roman', serif" },
  identityEquals: { fontSize: '28px', fontWeight: '700', color: '#64748b' },
  identityMatchRow: { padding: '0 16px 14px 16px', display: 'flex', justifyContent: 'center' },
  identityMatchBadge: { padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' },
  identityMatchOk: { backgroundColor: '#dcfce7', color: '#166534' },
  identityMatchFail: { backgroundColor: '#fee2e2', color: '#991b1b' },
  navigationPanel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '12px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' },
  themePanel: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' },
  themeBody: { padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' },
  themeLabel: { fontSize: '12px', fontWeight: '600', color: '#64748b' },
  colorInput: { width: '36px', height: '28px', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', padding: '2px', background: '#fff' },
  rangeInput: { flex: 1, cursor: 'pointer' },
  opacityValue: { fontSize: '12px', color: '#64748b', minWidth: '36px', fontFamily: 'monospace' },
  resetButton: { padding: '4px 12px', fontSize: '11px', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '4px', cursor: 'pointer' },
  navButton: { padding: '8px 20px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#245de1', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  stateCounter: { fontSize: '13px', fontWeight: '600', color: '#64748b', minWidth: '70px', textAlign: 'center' },
  explanationPanel: { flex: '1 1 350px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  explanationContent: { padding: '20px' },
  stateTitle: { marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #e2e8f0' },
  stateName: { margin: '0 0 6px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' },
  symbolDisplay: { display: 'inline-block', padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '18px', fontWeight: '600', color: '#245de1', fontFamily: "'Cambria Math', 'Times New Roman', serif" },
  section: { marginBottom: '16px' },
  sectionTitle: { margin: '0 0 6px 0', fontSize: '11px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' },
  sectionText: { margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#475569' }
};

// ============================================================================
// ENTRY POINT
// ============================================================================

export default function VennIdentitiesPage() {
  return <SetIdentitiesExplorer identitiesData={identitiesData} DiagramComponent={VennDiagram} />;
}