
/**
 * FunctionVisualizerCorePro
 *
 * Extension of FunctionVisualizerCoreImproved. Existing tools keep
 * importing the original file — this one is the new canonical core
 * for tools that need any of the additions below. Migrate per-tool.
 *
 * Additions (canvas + SVG export both updated):
 *   1. xAxisHighlights / yAxisHighlights — colored segments drawn
 *      directly on the axis line (`placement: 'on-axis'`) and/or as
 *      a thin parallel band (`placement: 'alongside'`), with open/
 *      closed endpoint markers at finite boundaries and arrowheads
 *      at infinite ones. Track pan/zoom natively — they live inside
 *      the canvas coordinate system.
 *   2. shadedRegions adds a `yRange` type — mirror of `xRange`,
 *      shades a horizontal strip across the full plot width.
 *   3. Per-function `domain: { from, to, fromKind?, toKind? }` —
 *      restricts curve drawing to that x-range and draws open/
 *      closed endpoint markers on the curve at the boundaries.
 *      Solves restricted-branch rendering (Inverse tool, piecewise
 *      functions) natively.
 *   4. verticalLines / horizontalLines — `[{x|y, color?, stroke?,
 *      pattern?, label?}]`. First-class reference lines (instead of
 *      abusing tangentLine for non-tangent purposes).
 *
 * Highlight API (xAxisHighlights and yAxisHighlights are the same shape):
 *   {
 *     from: number | -Infinity,
 *     to:   number |  Infinity,
 *     fromKind: 'open' | 'closed',          // when `from` is finite
 *     toKind:   'open' | 'closed',          // when `to`   is finite
 *     placement: 'on-axis' | 'alongside' | 'both',   // default 'on-axis'
 *     side:      'plus' | 'minus',          // 'alongside' only; default 'plus'
 *                                           // (above x-axis / right of y-axis)
 *     color:     string,                    // default styles.axisHighlight.defaultColor
 *     thickness: number,                    // px; overrides default
 *     opacity:   number,                    // default 1
 *     offset:    number                     // px gap from axis (alongside only)
 *   }
 *
 * When the underlying math axis is panned out of view, the highlight
 * clips out with the plot rect — no fallback rendering. Pan back to
 * see it. To draw a domain with an excluded point (e.g. x ≠ 0), use
 * two adjacent highlights with open endpoints meeting at the gap.
 */

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

// ============================================================
// DEFAULT STYLES
// ============================================================
const DEFAULT_STYLES = {
  canvas: { background: '#f6f7f9' },
  graphArea: { background: '#fcfcfd' },
  grid: {
    color: '#e5e7eb',
    minorColor: '#f1f5f9',
    stroke: 1,
    minorStroke: 1,
    pattern: []
  },
  axes: { color: '#475569', stroke: 1.5, pattern: [] },
  labels: {
    color: '#64748b',
    font: '10.5px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    axisNameFont: 'italic 13px "Cambria", "Times New Roman", serif',
    color2: '#334155'
  },
  crosshair: {
    color: 'rgba(59, 130, 246, 0.45)',
    stroke: 1, pattern: [4, 4],
    labelBackground: 'rgba(255, 255, 255, 0.96)',
    labelBorder: '#3b82f6',
    labelColor: '#0f172a',
    labelFont: '11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
  },
  curve: { stroke: 1.75, pattern: [], hoverStroke: 2.75, hoverGlow: true },
  tooltip: {
    background: 'rgba(255, 255, 255, 0.97)',
    border: '#cbd5e1',
    color: '#0f172a',
    font: '11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    padding: 8, radius: 6
  },
  point: { radius: 4, stroke: 2, strokeColor: '#fff' },
  legend: {
    background: 'rgba(255, 255, 255, 0.96)',
    border: '#e2e8f0',
    color: '#1e293b',
    font: '11.5px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    padding: 10, radius: 6
  },
  specialPoint: {
    root:       { radius: 5, fill: '#ffffff', stroke: '#ef4444', strokeWidth: 2.25 },
    extremum:   { radius: 5, fill: '#ffffff', stroke: '#10b981', strokeWidth: 2.25 },
    inflection: { radius: 5, fill: '#ffffff', stroke: '#8b5cf6', strokeWidth: 2.25 },
    custom:     { radius: 5, fill: '#ffffff', stroke: '#f59e0b', strokeWidth: 2.25 },
    labelFont: '10px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    labelBackground: 'rgba(255, 255, 255, 0.96)',
    labelPadding: 4
  },
  line: {
    asymptote: { color: '#ef4444', stroke: 1.25, pattern: [6, 4] },
    tangent:   { color: '#8b5cf6', stroke: 1.5,  pattern: [] },
    secant:    { color: '#06b6d4', stroke: 1.5,  pattern: [4, 4] }
  },
  shadedRegion: {
    defaultColor: 'rgba(59, 130, 246, 0.18)',
    defaultStroke: 'rgba(59, 130, 246, 0.55)',
    defaultStrokeWidth: 1
  },

  // ---- NEW ----
  axisHighlight: {
    defaultColor: '#639922',
    thicknessOnAxis: 5,
    thicknessAlongside: 4,
    offset: 8,
    markerRadius: 6,
    markerStrokeWidth: 2.5,
    arrowSize: 10
  },
  referenceLine: {
    defaultColor: '#94a3b8',
    defaultStroke: 1,
    defaultPattern: [4, 4],
    labelFont: '10.5px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    labelColor: '#475569',
    labelBackground: 'rgba(255, 255, 255, 0.94)',
    labelPadding: 3
  },
  domainEndpoint: {
    radius: 5,
    strokeWidth: 2.25
  }
};

const DEFAULT_COLORS = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
  '#06b6d4', '#ec4899', '#64748b', '#84cc16', '#f97316'
];

function mergeStyles(defaults, overrides) {
  if (!overrides) return defaults;
  const result = { ...defaults };
  for (const key in overrides) {
    if (overrides[key] && typeof overrides[key] === 'object' && !Array.isArray(overrides[key])) {
      result[key] = mergeStyles(defaults[key] || {}, overrides[key]);
    } else { result[key] = overrides[key]; }
  }
  return result;
}

// ============================================================
// MATH UTILITIES (unchanged from Improved)
// ============================================================
function findRoots(fn, xMin, xMax, samples = 200, tolerance = 1e-6) {
  const roots = [], step = (xMax - xMin) / samples;
  for (let i = 0; i < samples; i++) {
    const x1 = xMin + i * step, x2 = x1 + step;
    try {
      const y1 = fn(x1), y2 = fn(x2);
      if (!isFinite(y1) || !isFinite(y2)) continue;
      if (y1 * y2 < 0) { let a = x1, b = x2; for (let j = 0; j < 50; j++) { const mid = (a + b) / 2, yMid = fn(mid); if (Math.abs(yMid) < tolerance) break; if (yMid * fn(a) < 0) b = mid; else a = mid; } roots.push({ x: (a + b) / 2, y: 0, type: 'root' }); }
      else if (Math.abs(y1) < tolerance && (roots.length === 0 || Math.abs(roots[roots.length - 1].x - x1) > step)) { roots.push({ x: x1, y: 0, type: 'root' }); }
    } catch {}
  }
  return roots;
}

function findExtrema(fn, xMin, xMax, samples = 200, tolerance = 1e-6) {
  const extrema = [], step = (xMax - xMin) / samples, h = step / 10;
  const derivative = (x) => (fn(x + h) - fn(x - h)) / (2 * h);
  for (let i = 1; i < samples - 1; i++) {
    const x = xMin + i * step;
    try {
      const y = fn(x), d1 = derivative(x - step / 2), d2 = derivative(x + step / 2);
      if (!isFinite(y) || !isFinite(d1) || !isFinite(d2)) continue;
      if (d1 * d2 < 0) { let a = x - step / 2, b = x + step / 2; for (let j = 0; j < 30; j++) { const mid = (a + b) / 2, dMid = derivative(mid); if (Math.abs(dMid) < tolerance) break; if (dMid * derivative(a) < 0) b = mid; else a = mid; } const xExt = (a + b) / 2, yExt = fn(xExt); if (isFinite(yExt)) extrema.push({ x: xExt, y: yExt, type: 'extremum', subtype: d1 > 0 ? 'max' : 'min' }); }
    } catch {}
  }
  return extrema;
}

function findInflectionPoints(fn, xMin, xMax, samples = 200, tolerance = 1e-5) {
  const inflections = [], step = (xMax - xMin) / samples, h = step / 10;
  const secondDerivative = (x) => (fn(x + h) - 2 * fn(x) + fn(x - h)) / (h * h);
  for (let i = 1; i < samples - 1; i++) {
    const x = xMin + i * step;
    try {
      const y = fn(x), d2_1 = secondDerivative(x - step / 2), d2_2 = secondDerivative(x + step / 2);
      if (!isFinite(y) || !isFinite(d2_1) || !isFinite(d2_2)) continue;
      if (d2_1 * d2_2 < 0) { let a = x - step / 2, b = x + step / 2; for (let j = 0; j < 30; j++) { const mid = (a + b) / 2, d2Mid = secondDerivative(mid); if (Math.abs(d2Mid) < tolerance) break; if (d2Mid * secondDerivative(a) < 0) b = mid; else a = mid; } const xInf = (a + b) / 2, yInf = fn(xInf); if (isFinite(yInf)) inflections.push({ x: xInf, y: yInf, type: 'inflection' }); }
    } catch {}
  }
  return inflections;
}

function findVerticalAsymptotes(fn, xMin, xMax, samples = 500) {
  const asymptotes = [], step = (xMax - xMin) / samples, threshold = 1000;
  for (let i = 1; i < samples; i++) {
    const x1 = xMin + (i - 1) * step, x2 = xMin + i * step;
    try { const y1 = fn(x1), y2 = fn(x2); if ((!isFinite(y1) && isFinite(y2)) || (isFinite(y1) && !isFinite(y2))) { asymptotes.push((x1 + x2) / 2); } else if (isFinite(y1) && isFinite(y2) && Math.abs(y2 - y1) > threshold) { let testX = (x1 + x2) / 2; try { const testY = fn(testX); if (!isFinite(testY) || Math.abs(testY) > threshold * 10) asymptotes.push(testX); } catch { asymptotes.push(testX); } } } catch {}
  }
  return asymptotes;
}

function getTangentLine(fn, x0) { try { const y0 = fn(x0), h = 1e-7, slope = (fn(x0 + h) - fn(x0 - h)) / (2 * h); if (!isFinite(y0) || !isFinite(slope)) return null; return { slope, intercept: y0 - slope * x0, x0, y0 }; } catch { return null; } }
function getSecantLine(fn, x1, x2) { try { const y1 = fn(x1), y2 = fn(x2); if (!isFinite(y1) || !isFinite(y2)) return null; const slope = (y2 - y1) / (x2 - x1); return { slope, intercept: y1 - slope * x1, x1, y1, x2, y2 }; } catch { return null; } }

// ============================================================
// HOOKS (unchanged from Improved)
// ============================================================
function useCoordinateSystem(options = {}) {
  const { initialXMin, initialXMax, initialYMin, initialYMax, zoom, canvasWidth = 600, canvasHeight = 500, padding = 50 } = options;
  const getInitialBounds = () => zoom !== undefined ? { xMin: -zoom, xMax: zoom, yMin: -zoom, yMax: zoom } : { xMin: initialXMin ?? -10, xMax: initialXMax ?? 10, yMin: initialYMin ?? -10, yMax: initialYMax ?? 10 };
  const [viewport, setViewport] = useState(getInitialBounds);
  const graphWidth = canvasWidth - padding * 2, graphHeight = canvasHeight - padding * 2;
  const toScreenX = useCallback((x) => padding + ((x - viewport.xMin) / (viewport.xMax - viewport.xMin)) * graphWidth, [viewport.xMin, viewport.xMax, graphWidth, padding]);
  const toScreenY = useCallback((y) => padding + ((viewport.yMax - y) / (viewport.yMax - viewport.yMin)) * graphHeight, [viewport.yMin, viewport.yMax, graphHeight, padding]);
  const toWorldX = useCallback((screenX) => viewport.xMin + ((screenX - padding) / graphWidth) * (viewport.xMax - viewport.xMin), [viewport.xMin, viewport.xMax, graphWidth, padding]);
  const toWorldY = useCallback((screenY) => viewport.yMax - ((screenY - padding) / graphHeight) * (viewport.yMax - viewport.yMin), [viewport.yMin, viewport.yMax, graphHeight, padding]);
  const toWorld = useCallback((screenX, screenY) => ({ x: toWorldX(screenX), y: toWorldY(screenY) }), [toWorldX, toWorldY]);
  const zoomAt = useCallback((worldX, worldY, factor) => setViewport(v => ({ xMin: worldX - (worldX - v.xMin) * factor, xMax: worldX + (v.xMax - worldX) * factor, yMin: worldY - (worldY - v.yMin) * factor, yMax: worldY + (v.yMax - worldY) * factor })), []);
  const pan = useCallback((deltaX, deltaY) => setViewport(v => ({ xMin: v.xMin - deltaX, xMax: v.xMax - deltaX, yMin: v.yMin - deltaY, yMax: v.yMax - deltaY })), []);
  const gridStep = useMemo(() => { const range = Math.max(viewport.xMax - viewport.xMin, viewport.yMax - viewport.yMin), rawStep = range / 10, mag = Math.pow(10, Math.floor(Math.log10(rawStep))), norm = rawStep / mag; return norm <= 1.5 ? mag : norm <= 3.5 ? 2 * mag : norm <= 7.5 ? 5 * mag : 10 * mag; }, [viewport]);
  const isInGraphArea = useCallback((sx, sy) => sx >= padding && sx <= canvasWidth - padding && sy >= padding && sy <= canvasHeight - padding, [padding, canvasWidth, canvasHeight]);
  return { viewport, graphWidth, graphHeight, padding, canvasWidth, canvasHeight, toScreenX, toScreenY, toWorldX, toWorldY, toWorld, zoomAt, pan, gridStep, isInGraphArea };
}

function useInteraction(options = {}) {
  const { toWorld, toScreenX, toScreenY, zoomAt, pan, isInGraphArea, enableZoom = true, enablePan = true, onHover, onViewportChange, functions = [], specialPoints = [], hoverThreshold = 10 } = options;
  const [mousePosition, setMousePosition] = useState(null);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [hoveredCurve, setHoveredCurve] = useState(null);
  const [hoveredSpecialPoint, setHoveredSpecialPoint] = useState(null);
  const panStartRef = useRef(null);

  const getCanvasPosition = useCallback((e) => { const rect = e.currentTarget.getBoundingClientRect(); return { x: e.clientX - rect.left, y: e.clientY - rect.top }; }, []);
  const findNearestCurve = useCallback((worldX, screenX, screenY) => {
    if (!functions?.length) return null;
    let nearest = null, minDist = hoverThreshold;
    functions.forEach((f, i) => {
      if (f.visible === false || !f.fn) return;
      // Respect per-function domain when picking the hovered curve.
      if (f.domain) {
        if (Number.isFinite(f.domain.from) && worldX < f.domain.from) return;
        if (Number.isFinite(f.domain.to)   && worldX > f.domain.to)   return;
      }
      try { const y = f.fn(worldX); if (typeof y !== 'number' || !isFinite(y)) return; const dist = Math.abs(toScreenY(y) - screenY); if (dist < minDist) { minDist = dist; nearest = { index: i, x: worldX, y, color: f.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length], label: f.label || `f${i + 1}` }; } } catch {}
    });
    return nearest;
  }, [functions, toScreenY, hoverThreshold]);
  const findNearestSpecialPoint = useCallback((screenX, screenY) => { if (!specialPoints?.length) return null; let nearest = null, minDist = 15; specialPoints.forEach(p => { const dist = Math.sqrt((toScreenX(p.x) - screenX) ** 2 + (toScreenY(p.y) - screenY) ** 2); if (dist < minDist) { minDist = dist; nearest = { ...p, screenX: toScreenX(p.x), screenY: toScreenY(p.y) }; } }); return nearest; }, [specialPoints, toScreenX, toScreenY]);

  const handleMouseMove = useCallback((e) => {
    const pos = getCanvasPosition(e), inGraph = isInGraphArea(pos.x, pos.y);
    setIsMouseInside(inGraph);
    if (inGraph) { const world = toWorld(pos.x, pos.y); setMousePosition(world); const sp = findNearestSpecialPoint(pos.x, pos.y); setHoveredSpecialPoint(sp); const c = findNearestCurve(world.x, pos.x, pos.y); setHoveredCurve(sp ? null : c); if (onHover) onHover({ ...world, hoveredCurve: c, hoveredSpecialPoint: sp }); }
    else { setMousePosition(null); setHoveredCurve(null); setHoveredSpecialPoint(null); }
    if (isPanning && panStartRef.current && enablePan) { const curr = toWorld(pos.x, pos.y); pan(curr.x - panStartRef.current.x, curr.y - panStartRef.current.y); if (onViewportChange) onViewportChange(); }
  }, [isInGraphArea, toWorld, onHover, isPanning, enablePan, pan, onViewportChange, getCanvasPosition, findNearestCurve, findNearestSpecialPoint]);

  const handleMouseDown = useCallback((e) => { if (!enablePan) return; const pos = getCanvasPosition(e); if (!isInGraphArea(pos.x, pos.y)) return; setIsPanning(true); panStartRef.current = toWorld(pos.x, pos.y); e.preventDefault(); }, [enablePan, isInGraphArea, toWorld, getCanvasPosition]);
  const handleMouseUp = useCallback(() => { setIsPanning(false); panStartRef.current = null; }, []);
  const handleMouseLeave = useCallback(() => { setIsMouseInside(false); setMousePosition(null); setIsPanning(false); setHoveredCurve(null); setHoveredSpecialPoint(null); panStartRef.current = null; }, []);
  const handleWheel = useCallback((e) => { if (!enableZoom) return; const pos = getCanvasPosition(e); if (!isInGraphArea(pos.x, pos.y)) return; e.preventDefault(); const world = toWorld(pos.x, pos.y); zoomAt(world.x, world.y, e.deltaY > 0 ? 1.1 : 0.9); if (onViewportChange) onViewportChange(); }, [enableZoom, isInGraphArea, toWorld, zoomAt, onViewportChange, getCanvasPosition]);

  return { mousePosition, isMouseInside, isPanning, hoveredCurve, hoveredSpecialPoint, handlers: { onMouseMove: handleMouseMove, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onMouseLeave: handleMouseLeave, onWheel: handleWheel } };
}

// ============================================================
// CANVAS RENDERERS
// ============================================================
function gridRenderer(ctx, opts) {
  const {
    viewport, gridStep, padding, graphWidth, graphHeight, canvasWidth, canvasHeight,
    toScreenX, toScreenY,
    showGrid = true, showMinorGrid = true, showAxes = true, showAxisLabels = true,
    styles
  } = opts;
  const { xMin, xMax, yMin, yMax } = viewport;

  ctx.fillStyle = styles.graphArea.background;
  ctx.fillRect(padding, padding, graphWidth, graphHeight);

  if (showGrid) {
    if (showMinorGrid) {
      const minorStep = gridStep / 5;
      ctx.strokeStyle = styles.grid.minorColor;
      ctx.lineWidth = styles.grid.minorStroke;
      ctx.setLineDash([]);
      for (let x = Math.ceil(xMin / minorStep) * minorStep; x <= xMax; x += minorStep) {
        if (Math.abs(x % gridStep) < minorStep / 100) continue;
        const sx = toScreenX(x);
        ctx.beginPath(); ctx.moveTo(sx, padding); ctx.lineTo(sx, padding + graphHeight); ctx.stroke();
      }
      for (let y = Math.ceil(yMin / minorStep) * minorStep; y <= yMax; y += minorStep) {
        if (Math.abs(y % gridStep) < minorStep / 100) continue;
        const sy = toScreenY(y);
        ctx.beginPath(); ctx.moveTo(padding, sy); ctx.lineTo(padding + graphWidth, sy); ctx.stroke();
      }
    }

    ctx.strokeStyle = styles.grid.color;
    ctx.lineWidth = styles.grid.stroke;
    ctx.setLineDash(styles.grid.pattern);
    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) {
      if (Math.abs(x) < gridStep / 1000) continue;
      ctx.beginPath(); ctx.moveTo(toScreenX(x), padding); ctx.lineTo(toScreenX(x), padding + graphHeight); ctx.stroke();
    }
    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) {
      if (Math.abs(y) < gridStep / 1000) continue;
      ctx.beginPath(); ctx.moveTo(padding, toScreenY(y)); ctx.lineTo(padding + graphWidth, toScreenY(y)); ctx.stroke();
    }
    ctx.setLineDash([]);
  }

  if (showAxes) {
    ctx.strokeStyle = styles.axes.color;
    ctx.lineWidth = styles.axes.stroke;
    if (yMin <= 0 && yMax >= 0) { ctx.beginPath(); ctx.moveTo(padding, toScreenY(0)); ctx.lineTo(padding + graphWidth, toScreenY(0)); ctx.stroke(); }
    if (xMin <= 0 && xMax >= 0) { ctx.beginPath(); ctx.moveTo(toScreenX(0), padding); ctx.lineTo(toScreenX(0), padding + graphHeight); ctx.stroke(); }
  }

  if (showAxisLabels) {
    ctx.fillStyle = styles.labels.color;
    ctx.font = styles.labels.font;
    const fmt = v => { const r = Math.round(v * 1e6) / 1e6; return Math.abs(r - Math.round(r)) < 0.0001 ? Math.round(r).toString() : r.toFixed(2).replace(/\.?0+$/, ''); };

    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    const xLabelY = (yMin <= 0 && yMax >= 0) ? Math.min(toScreenY(0) + 8, canvasHeight - padding + 8) : canvasHeight - padding + 8;
    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) {
      if (Math.abs(x) >= gridStep / 1000) ctx.fillText(fmt(x), toScreenX(x), xLabelY);
    }

    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    const yLabelX = (xMin <= 0 && xMax >= 0) ? Math.max(toScreenX(0) - 8, padding - 8) : padding - 8;
    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) {
      if (Math.abs(y) >= gridStep / 1000) ctx.fillText(fmt(y), yLabelX, toScreenY(y));
    }

    if (xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0) {
      ctx.textAlign = 'right'; ctx.textBaseline = 'top';
      ctx.fillText('0', toScreenX(0) - 6, toScreenY(0) + 4);
    }

    ctx.font = styles.labels.axisNameFont;
    ctx.fillStyle = styles.labels.color2;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('x', canvasWidth - padding + 10, (yMin <= 0 && yMax >= 0) ? toScreenY(0) : padding + graphHeight / 2);
    ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    ctx.fillText('y', (xMin <= 0 && xMax >= 0) ? toScreenX(0) : padding + graphWidth / 2, padding - 8);
  }
}

// ============================================================
// AXIS HIGHLIGHTS RENDERER (new)
// ------------------------------------------------------------
// Draws colored segments on the x-axis or y-axis (or as a parallel
// band alongside the axis), with open/closed endpoint markers at
// finite boundaries and arrowheads at infinite ones.
// ============================================================
function axisHighlightsRenderer(ctx, opts) {
  const {
    xAxisHighlights = [], yAxisHighlights = [],
    viewport, padding, graphWidth, graphHeight,
    toScreenX, toScreenY, styles
  } = opts;
  if (!xAxisHighlights.length && !yAxisHighlights.length) return;

  const { xMin, xMax, yMin, yMax } = viewport;
  const s = styles.axisHighlight;

  ctx.save();
  ctx.beginPath();
  ctx.rect(padding, padding, graphWidth, graphHeight);
  ctx.clip();

  // x-axis highlights — draw only when y=0 is visible
  if (yMin <= 0 && yMax >= 0) {
    const axisY = toScreenY(0);
    xAxisHighlights.forEach(h => {
      const fromFinite = Number.isFinite(h.from);
      const toFinite   = Number.isFinite(h.to);
      const p1 = fromFinite ? toScreenX(h.from) : toScreenX(xMin);
      const p2 = toFinite   ? toScreenX(h.to)   : toScreenX(xMax);
      drawAxisHighlightOnCanvas(ctx, {
        axis: 'x', axisPx: axisY,
        p1, p2, fromFinite, toFinite,
        fromKind: h.fromKind || 'closed',
        toKind:   h.toKind   || 'closed',
        placement: h.placement || 'on-axis',
        side: h.side || 'plus',
        color: h.color || s.defaultColor,
        thickness: h.thickness,
        opacity: h.opacity ?? 1,
        offset: h.offset ?? s.offset,
        s
      });
    });
  }

  // y-axis highlights — draw only when x=0 is visible
  if (xMin <= 0 && xMax >= 0) {
    const axisX = toScreenX(0);
    yAxisHighlights.forEach(h => {
      const fromFinite = Number.isFinite(h.from);
      const toFinite   = Number.isFinite(h.to);
      // y-axis: math y increases up, screen y increases down.
      // p1 corresponds to the "from" end (lower math y), p2 to "to" (higher math y).
      // In screen space p1 has the LARGER y (further down).
      const p1 = fromFinite ? toScreenY(h.from) : toScreenY(yMin);
      const p2 = toFinite   ? toScreenY(h.to)   : toScreenY(yMax);
      drawAxisHighlightOnCanvas(ctx, {
        axis: 'y', axisPx: axisX,
        p1, p2, fromFinite, toFinite,
        fromKind: h.fromKind || 'closed',
        toKind:   h.toKind   || 'closed',
        placement: h.placement || 'on-axis',
        side: h.side || 'plus',
        color: h.color || s.defaultColor,
        thickness: h.thickness,
        opacity: h.opacity ?? 1,
        offset: h.offset ?? s.offset,
        s
      });
    });
  }

  ctx.restore();
}

function drawAxisHighlightOnCanvas(ctx, o) {
  const { axis, axisPx, p1, p2, fromFinite, toFinite, fromKind, toKind,
          placement, side, color, thickness, opacity, offset, s } = o;
  const doOnAxis    = placement === 'on-axis'   || placement === 'both';
  const doAlongside = placement === 'alongside' || placement === 'both';

  ctx.globalAlpha = opacity;

  // ON-AXIS segment
  if (doOnAxis) {
    const t = thickness ?? s.thicknessOnAxis;
    ctx.strokeStyle = color;
    ctx.lineWidth = t;
    ctx.setLineDash([]);
    ctx.lineCap = 'butt';
    ctx.beginPath();
    if (axis === 'x') {
      ctx.moveTo(Math.min(p1, p2), axisPx);
      ctx.lineTo(Math.max(p1, p2), axisPx);
    } else {
      ctx.moveTo(axisPx, Math.min(p1, p2));
      ctx.lineTo(axisPx, Math.max(p1, p2));
    }
    ctx.stroke();
  }

  // ALONGSIDE band
  if (doAlongside) {
    const t = thickness ?? s.thicknessAlongside;
    // For x-axis: 'plus' = above (smaller screen y), 'minus' = below.
    // For y-axis: 'plus' = right (larger screen x), 'minus' = left.
    let bandCenter;
    if (axis === 'x') bandCenter = axisPx + (side === 'minus' ? +1 : -1) * (offset + t / 2);
    else              bandCenter = axisPx + (side === 'plus'  ? +1 : -1) * (offset + t / 2);

    ctx.fillStyle = color;
    if (axis === 'x') {
      ctx.fillRect(Math.min(p1, p2), bandCenter - t / 2, Math.abs(p2 - p1), t);
    } else {
      ctx.fillRect(bandCenter - t / 2, Math.min(p1, p2), t, Math.abs(p2 - p1));
    }
  }

  // Where do endpoint markers sit? On the axis when on-axis is rendered,
  // otherwise on the band.
  let markerLine;
  if (doOnAxis) {
    markerLine = axisPx;
  } else {
    const t = thickness ?? s.thicknessAlongside;
    if (axis === 'x') markerLine = axisPx + (side === 'minus' ? +1 : -1) * (offset + t / 2);
    else              markerLine = axisPx + (side === 'plus'  ? +1 : -1) * (offset + t / 2);
  }

  const drawMarker = (p, kind) => {
    let cx, cy;
    if (axis === 'x') { cx = p; cy = markerLine; } else { cx = markerLine; cy = p; }
    ctx.beginPath();
    ctx.arc(cx, cy, s.markerRadius, 0, Math.PI * 2);
    if (kind === 'closed') {
      ctx.fillStyle = color; ctx.fill();
      ctx.lineWidth = s.markerStrokeWidth; ctx.strokeStyle = '#fff'; ctx.stroke();
    } else {
      ctx.fillStyle = '#fff'; ctx.fill();
      ctx.lineWidth = s.markerStrokeWidth; ctx.strokeStyle = color; ctx.stroke();
    }
  };

  const drawArrow = (p, dirOnScreen) => {
    const sz = s.arrowSize;
    ctx.fillStyle = color;
    ctx.beginPath();
    if (axis === 'x') {
      const tip  = p + dirOnScreen * sz / 2;
      const base = p - dirOnScreen * sz / 2;
      ctx.moveTo(tip, markerLine);
      ctx.lineTo(base, markerLine - sz / 2);
      ctx.lineTo(base, markerLine + sz / 2);
    } else {
      const tip  = p + dirOnScreen * sz / 2;
      const base = p - dirOnScreen * sz / 2;
      ctx.moveTo(markerLine, tip);
      ctx.lineTo(markerLine - sz / 2, base);
      ctx.lineTo(markerLine + sz / 2, base);
    }
    ctx.closePath();
    ctx.fill();
  };

  // "from" end:
  //   x-axis: from = -∞ → arrow points left (screen dir -1)
  //   y-axis: from = -∞ → math down → screen dir +1 (down)
  if (fromFinite) drawMarker(p1, fromKind);
  else            drawArrow(p1, axis === 'x' ? -1 : +1);

  // "to" end:
  //   x-axis: to = +∞ → arrow right (+1)
  //   y-axis: to = +∞ → math up → screen dir -1 (up)
  if (toFinite)   drawMarker(p2, toKind);
  else            drawArrow(p2, axis === 'x' ? +1 : -1);

  ctx.globalAlpha = 1;
}

// ============================================================
// REFERENCE LINES RENDERER (new)
// ============================================================
function referenceLinesRenderer(ctx, opts) {
  const { verticalLines = [], horizontalLines = [], viewport, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles } = opts;
  if (!verticalLines.length && !horizontalLines.length) return;
  const { xMin, xMax, yMin, yMax } = viewport;
  const s = styles.referenceLine;

  ctx.save();
  ctx.beginPath();
  ctx.rect(padding, padding, graphWidth, graphHeight);
  ctx.clip();

  verticalLines.forEach(l => {
    if (l.x < xMin || l.x > xMax) return;
    ctx.strokeStyle = l.color || s.defaultColor;
    ctx.lineWidth = l.stroke ?? s.defaultStroke;
    ctx.setLineDash(l.pattern ?? s.defaultPattern);
    ctx.beginPath();
    ctx.moveTo(toScreenX(l.x), padding);
    ctx.lineTo(toScreenX(l.x), padding + graphHeight);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  horizontalLines.forEach(l => {
    if (l.y < yMin || l.y > yMax) return;
    ctx.strokeStyle = l.color || s.defaultColor;
    ctx.lineWidth = l.stroke ?? s.defaultStroke;
    ctx.setLineDash(l.pattern ?? s.defaultPattern);
    ctx.beginPath();
    ctx.moveTo(padding,              toScreenY(l.y));
    ctx.lineTo(padding + graphWidth, toScreenY(l.y));
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Labels — drawn outside the clip so they can sit slightly off the line.
  ctx.restore();
  verticalLines.forEach(l => {
    if (!l.label) return;
    if (l.x < xMin || l.x > xMax) return;
    ctx.font = s.labelFont;
    const tw = ctx.measureText(l.label).width;
    const lx = toScreenX(l.x) + 6;
    const ly = padding + 14;
    ctx.fillStyle = s.labelBackground;
    ctx.fillRect(lx - 2, ly - 11, tw + s.labelPadding * 2, 16);
    ctx.fillStyle = l.color || s.labelColor;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(l.label, lx + s.labelPadding - 2, ly - 3);
  });
  horizontalLines.forEach(l => {
    if (!l.label) return;
    if (l.y < yMin || l.y > yMax) return;
    ctx.font = s.labelFont;
    const tw = ctx.measureText(l.label).width;
    const lx = padding + graphWidth - tw - s.labelPadding * 2 - 4;
    const ly = toScreenY(l.y);
    ctx.fillStyle = s.labelBackground;
    ctx.fillRect(lx, ly - 8, tw + s.labelPadding * 2, 16);
    ctx.fillStyle = l.color || s.labelColor;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(l.label, lx + s.labelPadding, ly);
  });
}

// ============================================================
// SHADED REGIONS (extended with `yRange` type)
// ============================================================
function shadedRegionsRenderer(ctx, opts) {
  const { shadedRegions, functions, viewport, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, samples = 300 } = opts;
  if (!shadedRegions?.length) return;
  const { xMin, xMax, yMin, yMax } = viewport;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();
  shadedRegions.forEach(region => {
    const { type, functionIndex = 0, functionIndex1 = 0, functionIndex2 = 1, xStart = xMin, xEnd = xMax, yStart, yEnd, y = 0, color = styles.shadedRegion.defaultColor, strokeColor = styles.shadedRegion.defaultStroke, strokeWidth = styles.shadedRegion.defaultStrokeWidth } = region;
    const fn1 = functions[functionIndex]?.fn || functions[functionIndex1]?.fn, fn2 = functions[functionIndex2]?.fn;
    const x1 = Math.max(xStart, xMin), x2 = Math.min(xEnd, xMax);

    if (type === 'underCurve' && fn1) { const step = (x2 - x1) / samples, pts = []; for (let i = 0; i <= samples; i++) { const x = x1 + i * step; try { const yVal = fn1(x); if (typeof yVal === 'number' && isFinite(yVal)) pts.push({ x, y: Math.max(yMin, Math.min(yMax, yVal)) }); } catch {} } if (pts.length >= 2) { ctx.beginPath(); ctx.moveTo(toScreenX(pts[0].x), toScreenY(0)); pts.forEach(p => ctx.lineTo(toScreenX(p.x), toScreenY(p.y))); ctx.lineTo(toScreenX(pts[pts.length - 1].x), toScreenY(0)); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.stroke(); } } }
    else if (type === 'betweenCurves' && fn1 && fn2) { const step = (x2 - x1) / samples, pts1 = [], pts2 = []; for (let i = 0; i <= samples; i++) { const x = x1 + i * step; try { const y1 = fn1(x), y2 = fn2(x); if (typeof y1 === 'number' && isFinite(y1)) pts1.push({ x, y: Math.max(yMin, Math.min(yMax, y1)) }); if (typeof y2 === 'number' && isFinite(y2)) pts2.push({ x, y: Math.max(yMin, Math.min(yMax, y2)) }); } catch {} } if (pts1.length >= 2 && pts2.length >= 2) { ctx.beginPath(); ctx.moveTo(toScreenX(pts1[0].x), toScreenY(pts1[0].y)); pts1.forEach(p => ctx.lineTo(toScreenX(p.x), toScreenY(p.y))); for (let i = pts2.length - 1; i >= 0; i--) ctx.lineTo(toScreenX(pts2[i].x), toScreenY(pts2[i].y)); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.stroke(); } } }
    else if ((type === 'aboveY' || type === 'belowY') && fn1) { const step = (x2 - x1) / samples, pts = [], isAbove = type === 'aboveY', yBound = Math.max(yMin, Math.min(yMax, y)); for (let i = 0; i <= samples; i++) { const x = x1 + i * step; try { const yVal = fn1(x); if (typeof yVal === 'number' && isFinite(yVal) && ((isAbove && yVal >= y) || (!isAbove && yVal <= y))) pts.push({ x, y: Math.max(yMin, Math.min(yMax, yVal)) }); } catch {} } if (pts.length >= 2) { ctx.beginPath(); ctx.moveTo(toScreenX(pts[0].x), toScreenY(yBound)); pts.forEach(p => ctx.lineTo(toScreenX(p.x), toScreenY(p.y))); ctx.lineTo(toScreenX(pts[pts.length - 1].x), toScreenY(yBound)); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.stroke(); } } }
    else if (type === 'xRange') { const sx1 = toScreenX(x1), sx2 = toScreenX(x2); ctx.fillStyle = color; ctx.fillRect(sx1, padding, sx2 - sx1, graphHeight); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.strokeRect(sx1, padding, sx2 - sx1, graphHeight); } }
    else if (type === 'yRange') {
      // Horizontal strip across the full plot width.
      const y1v = Math.max(yStart ?? yMin, yMin);
      const y2v = Math.min(yEnd   ?? yMax, yMax);
      const sy1 = toScreenY(y2v); // top
      const sy2 = toScreenY(y1v); // bottom
      ctx.fillStyle = color;
      ctx.fillRect(padding, sy1, graphWidth, sy2 - sy1);
      if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.strokeRect(padding, sy1, graphWidth, sy2 - sy1); }
    }
  });
  ctx.restore();
}

// ============================================================
// CURVE RENDERER (extended: per-function `domain` + endpoint markers)
// ============================================================
function curveRenderer(ctx, opts) {
  const { functions, viewport, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, samples = 500, hoveredCurve, defaultStroke } = opts;
  if (!functions?.length) return;
  const { xMin, xMax, yMin, yMax } = viewport;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();

  functions.forEach((f, i) => {
    if (f.visible === false) return;
    const { fn, color = DEFAULT_COLORS[i % DEFAULT_COLORS.length], stroke = defaultStroke ?? styles.curve.stroke, pattern = styles.curve.pattern } = f;
    if (!fn) return;

    // Per-function domain bounds clip the sampling range.
    const dom = f.domain || {};
    const sampleMin = Math.max(xMin, Number.isFinite(dom.from) ? dom.from : -Infinity);
    const sampleMax = Math.min(xMax, Number.isFinite(dom.to)   ? dom.to   :  Infinity);
    if (sampleMax <= sampleMin) return;

    const pts = [], step = (sampleMax - sampleMin) / samples;
    for (let j = 0; j <= samples; j++) { const x = sampleMin + j * step; try { const y = fn(x); pts.push(typeof y === 'number' && isFinite(y) ? { x, y } : { x, y: null }); } catch { pts.push({ x: sampleMin + j * step, y: null }); } }

    const isHovered = hoveredCurve?.index === i;
    if (isHovered && styles.curve.hoverGlow) { ctx.strokeStyle = color; ctx.lineWidth = stroke + 5; ctx.globalAlpha = 0.18; ctx.setLineDash(pattern); drawPath(ctx, pts, toScreenX, toScreenY, yMin, yMax); ctx.stroke(); ctx.globalAlpha = 1; }
    ctx.strokeStyle = color; ctx.lineWidth = isHovered ? Math.max(styles.curve.hoverStroke, stroke + 0.75) : stroke; ctx.setLineDash(pattern); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    drawPath(ctx, pts, toScreenX, toScreenY, yMin, yMax); ctx.stroke(); ctx.setLineDash([]);

    // Endpoint markers (open/closed) on the curve at finite domain boundaries.
    if (f.domain) {
      const ep = styles.domainEndpoint;
      const drawDomainMarker = (xVal, kind) => {
        if (xVal < xMin || xVal > xMax) return;
        let yVal;
        try { yVal = fn(xVal); } catch { return; }
        if (typeof yVal !== 'number' || !isFinite(yVal)) return;
        if (yVal < yMin || yVal > yMax) return;
        ctx.beginPath();
        ctx.arc(toScreenX(xVal), toScreenY(yVal), ep.radius, 0, Math.PI * 2);
        if (kind === 'closed') { ctx.fillStyle = color; ctx.fill(); ctx.lineWidth = ep.strokeWidth; ctx.strokeStyle = '#fff'; ctx.stroke(); }
        else                   { ctx.fillStyle = '#fff'; ctx.fill(); ctx.lineWidth = ep.strokeWidth; ctx.strokeStyle = color; ctx.stroke(); }
      };
      if (Number.isFinite(dom.from)) drawDomainMarker(dom.from, dom.fromKind || 'closed');
      if (Number.isFinite(dom.to))   drawDomainMarker(dom.to,   dom.toKind   || 'closed');
    }
  });
  ctx.restore();
}

function drawPath(ctx, pts, toScreenX, toScreenY, yMin, yMax) {
  let inPath = false, prevY = null;
  const jump = (yMax - yMin) * 0.5;
  ctx.beginPath();
  for (const { x, y } of pts) {
    if (y === null) { inPath = false; prevY = null; continue; }
    if (prevY !== null && Math.abs(y - prevY) > jump && ((prevY > yMax && y < yMin) || (prevY < yMin && y > yMax))) inPath = false;
    const sx = toScreenX(x), sy = toScreenY(y);
    if (!inPath) { ctx.moveTo(sx, sy); inPath = true; } else ctx.lineTo(sx, sy);
    prevY = y;
  }
}

// ============================================================
// LINES RENDERER (asymptotes/tangent/secant — unchanged from Improved)
// ============================================================
function linesRenderer(ctx, opts) {
  const { viewport, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, asymptotes = [], tangentLine, secantLine } = opts;
  const { xMin, xMax } = viewport;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();
  asymptotes.forEach(x => { if (x < xMin || x > xMax) return; ctx.strokeStyle = styles.line.asymptote.color; ctx.lineWidth = styles.line.asymptote.stroke; ctx.setLineDash(styles.line.asymptote.pattern); ctx.beginPath(); ctx.moveTo(toScreenX(x), padding); ctx.lineTo(toScreenX(x), padding + graphHeight); ctx.stroke(); });
  if (tangentLine) { const { slope, intercept, x0, y0 } = tangentLine; ctx.strokeStyle = styles.line.tangent.color; ctx.lineWidth = styles.line.tangent.stroke; ctx.setLineDash(styles.line.tangent.pattern); ctx.beginPath(); ctx.moveTo(toScreenX(xMin), toScreenY(slope * xMin + intercept)); ctx.lineTo(toScreenX(xMax), toScreenY(slope * xMax + intercept)); ctx.stroke(); ctx.setLineDash([]); ctx.beginPath(); ctx.arc(toScreenX(x0), toScreenY(y0), 4, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = styles.line.tangent.color; ctx.lineWidth = 2.25; ctx.stroke(); }
  if (secantLine) { const { slope, intercept, x1, y1, x2, y2 } = secantLine; ctx.strokeStyle = styles.line.secant.color; ctx.lineWidth = styles.line.secant.stroke; ctx.setLineDash(styles.line.secant.pattern); ctx.beginPath(); ctx.moveTo(toScreenX(xMin), toScreenY(slope * xMin + intercept)); ctx.lineTo(toScreenX(xMax), toScreenY(slope * xMax + intercept)); ctx.stroke(); ctx.setLineDash([]); [{ x: x1, y: y1 }, { x: x2, y: y2 }].forEach(p => { ctx.beginPath(); ctx.arc(toScreenX(p.x), toScreenY(p.y), 4, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = styles.line.secant.color; ctx.lineWidth = 2.25; ctx.stroke(); }); }
  ctx.setLineDash([]); ctx.restore();
}

// ============================================================
// SPECIAL POINTS + TOOLTIPS + LEGEND + CROSSHAIR (unchanged from Improved)
// ============================================================
function specialPointsRenderer(ctx, opts) {
  const { specialPoints, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, labelMode = 'hover', hoveredSpecialPoint } = opts;
  if (!specialPoints?.length) return;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();

  specialPoints.forEach(pt => {
    const sx = toScreenX(pt.x), sy = toScreenY(pt.y);
    const ps = styles.specialPoint[pt.type] || styles.specialPoint.custom;
    const strokeCol = pt.color || ps.stroke;

    ctx.beginPath(); ctx.arc(sx, sy, ps.radius, 0, Math.PI * 2);
    ctx.fillStyle = ps.fill; ctx.fill();
    ctx.strokeStyle = strokeCol; ctx.lineWidth = ps.strokeWidth; ctx.stroke();

    const isHovered = hoveredSpecialPoint?.x === pt.x && hoveredSpecialPoint?.y === pt.y;
    if (labelMode === 'always' && !isHovered) {
      let txt;
      if (pt.type === 'root') txt = `(${pt.x.toFixed(2)}, 0)`;
      else if (pt.type === 'extremum' || pt.type === 'inflection') txt = `(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`;
      else txt = pt.label || `(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`;

      ctx.font = styles.specialPoint.labelFont;
      const tw = ctx.measureText(txt).width, lp = styles.specialPoint.labelPadding, lh = 16;
      let lx = sx + ps.radius + 6, ly = sy - lh / 2 - 4;
      if (lx + tw + lp * 2 > padding + graphWidth) lx = sx - tw - lp * 2 - ps.radius - 6;
      if (ly < padding) ly = sy + ps.radius + 6;
      ctx.fillStyle = styles.specialPoint.labelBackground; ctx.fillRect(lx, ly, tw + lp * 2, lh);
      ctx.strokeStyle = strokeCol; ctx.lineWidth = 1; ctx.strokeRect(lx, ly, tw + lp * 2, lh);
      ctx.fillStyle = '#1e293b'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(txt, lx + lp, ly + lh / 2);
    }
  });
  ctx.restore();
}

function specialPointTooltipRenderer(ctx, opts) {
  const { hoveredSpecialPoint, toScreenX, toScreenY, padding, width, height, styles } = opts;
  if (!hoveredSpecialPoint) return;

  const pt = hoveredSpecialPoint;
  const sx = toScreenX(pt.x), sy = toScreenY(pt.y);
  const ps = styles.specialPoint[pt.type] || styles.specialPoint.custom;
  const col = pt.color || ps.stroke;

  let title, coords, desc;
  if (pt.type === 'root') {
    title = 'Root'; coords = `(${pt.x.toFixed(3)}, 0)`;
    desc = 'Where the curve crosses the x-axis. Found by solving f(x) = 0.';
  } else if (pt.type === 'extremum') {
    if (pt.subtype === 'max') { title = 'Local Maximum'; desc = 'Highest point in this region. The derivative equals zero here.'; }
    else                      { title = 'Local Minimum'; desc = 'Lowest point in this region. The derivative equals zero here.'; }
    coords = `(${pt.x.toFixed(3)}, ${pt.y.toFixed(3)})`;
  } else if (pt.type === 'inflection') {
    title = 'Inflection Point';
    coords = `(${pt.x.toFixed(3)}, ${pt.y.toFixed(3)})`;
    desc = 'Where the curve changes concavity. The second derivative equals zero here.';
  } else {
    title = pt.label || 'Point';
    coords = `(${pt.x.toFixed(3)}, ${pt.y.toFixed(3)})`;
    desc = pt.description || '';
  }

  const tooltipPadding = 12;
  const tooltipWidth = 200;
  const titleFont = '600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const coordsFont = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const descFont = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const lineHeight = 16;

  ctx.font = descFont;
  const descLines = desc ? wrapText(ctx, desc, tooltipWidth - tooltipPadding * 2) : [];
  const tooltipHeight = tooltipPadding * 2 + 18 + 20 + (descLines.length * lineHeight) + (desc ? 6 : 0);

  let tx = sx + 15, ty = sy - tooltipHeight - 10;
  if (tx + tooltipWidth > width - padding) tx = sx - tooltipWidth - 15;
  if (ty < padding) ty = sy + 15;
  if (tx < padding) tx = padding + 5;

  ctx.fillStyle = '#0f172a';
  ctx.beginPath(); ctx.roundRect(tx, ty, tooltipWidth, tooltipHeight, 8); ctx.fill();

  ctx.fillStyle = col;
  ctx.beginPath(); ctx.roundRect(tx, ty, 4, tooltipHeight, [8, 0, 0, 8]); ctx.fill();

  ctx.fillStyle = '#93c5fd';
  ctx.font = titleFont;
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText(title, tx + tooltipPadding, ty + tooltipPadding);

  ctx.fillStyle = '#ffffff'; ctx.font = coordsFont;
  ctx.fillText(coords, tx + tooltipPadding, ty + tooltipPadding + 20);

  if (descLines.length > 0) {
    ctx.fillStyle = '#cbd5e1'; ctx.font = descFont;
    descLines.forEach((line, i) => { ctx.fillText(line, tx + tooltipPadding, ty + tooltipPadding + 44 + i * lineHeight); });
  }
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(' '), lines = []; let currentLine = '';
  for (const word of words) {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    if (ctx.measureText(testLine).width > maxWidth && currentLine) { lines.push(currentLine); currentLine = word; }
    else { currentLine = testLine; }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

function legendRenderer(ctx, opts) {
  const { functions, padding, width, height, styles, position = 'top-right' } = opts;
  const vis = functions.filter(f => f.visible !== false && (f.formula || f.label)); if (!vis.length) return;
  ctx.font = styles.legend.font;
  const lh = 20, boxSz = 10, gap = 8; let maxW = 0;
  vis.forEach((f, i) => { const w = ctx.measureText(f.formula || f.label || `f${i + 1}`).width; if (w > maxW) maxW = w; });
  const legW = styles.legend.padding * 2 + boxSz + gap + maxW, legH = styles.legend.padding * 2 + vis.length * lh - (lh - boxSz), margin = 12;
  let lx, ly;
  switch (position) {
    case 'top-left':     lx = padding + margin;                ly = padding + margin; break;
    case 'bottom-left':  lx = padding + margin;                ly = height - padding - legH - margin; break;
    case 'bottom-right': lx = width - padding - legW - margin; ly = height - padding - legH - margin; break;
    default:             lx = width - padding - legW - margin; ly = padding + margin;
  }

  ctx.save();
  ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = styles.legend.background;
  ctx.beginPath(); ctx.roundRect(lx, ly, legW, legH, styles.legend.radius); ctx.fill();
  ctx.restore();

  ctx.strokeStyle = styles.legend.border; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.roundRect(lx, ly, legW, legH, styles.legend.radius); ctx.stroke();

  vis.forEach((f, i) => {
    const idx = functions.indexOf(f), col = f.color || DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
    const txt = f.formula || f.label || `f${idx + 1}`, ey = ly + styles.legend.padding + i * lh;
    ctx.strokeStyle = col; ctx.lineWidth = 2.25; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(lx + styles.legend.padding, ey + boxSz / 2);
    ctx.lineTo(lx + styles.legend.padding + boxSz + 4, ey + boxSz / 2);
    ctx.stroke();
    ctx.fillStyle = styles.legend.color; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(txt, lx + styles.legend.padding + boxSz + gap + 4, ey + boxSz / 2);
  });
}

function crosshairRenderer(ctx, opts) {
  const { mousePosition, padding, width, height, toScreenX, toScreenY, styles, showCoordinates = true } = opts;
  if (!mousePosition) return;
  const { x, y } = mousePosition, sx = toScreenX(x), sy = toScreenY(y);
  ctx.strokeStyle = styles.crosshair.color; ctx.lineWidth = styles.crosshair.stroke; ctx.setLineDash(styles.crosshair.pattern);
  ctx.beginPath(); ctx.moveTo(sx, padding); ctx.lineTo(sx, height - padding); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(padding, sy); ctx.lineTo(width - padding, sy); ctx.stroke(); ctx.setLineDash([]);
  if (showCoordinates) {
    const lbl = `(${x.toFixed(2)}, ${y.toFixed(2)})`;
    ctx.font = styles.crosshair.labelFont;
    const lw = ctx.measureText(lbl).width + 12, lh = 22;
    let lx = sx + 12, ly = sy - lh - 8;
    if (lx + lw > width - padding) lx = sx - lw - 12;
    if (ly < padding) ly = sy + 12;
    ctx.fillStyle = styles.crosshair.labelBackground; ctx.strokeStyle = styles.crosshair.labelBorder; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 4); ctx.fill(); ctx.stroke();
    ctx.fillStyle = styles.crosshair.labelColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(lbl, lx + lw / 2, ly + lh / 2);
  }
}

function curveTooltipRenderer(ctx, opts) {
  const { hoveredCurve, toScreenX, toScreenY, padding, width, height, styles } = opts;
  if (!hoveredCurve) return;
  const { x, y, color, label } = hoveredCurve, sx = toScreenX(x), sy = toScreenY(y);
  ctx.beginPath(); ctx.arc(sx, sy, styles.point.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#fff'; ctx.fill();
  ctx.strokeStyle = color; ctx.lineWidth = styles.point.stroke; ctx.stroke();

  const txt = `${label}(${x.toFixed(3)}) = ${y.toFixed(3)}`;
  ctx.font = styles.tooltip.font;
  const tw = ctx.measureText(txt).width + styles.tooltip.padding * 2, th = 24, r = styles.tooltip.radius;
  let tx = sx + 15, ty = sy - th - 10;
  if (tx + tw > width - padding) tx = sx - tw - 15;
  if (ty < padding) ty = sy + 15;
  ctx.save();
  ctx.shadowColor = 'rgba(15, 23, 42, 0.1)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = styles.tooltip.background;
  ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, r); ctx.fill();
  ctx.restore();
  ctx.strokeStyle = color; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, r); ctx.stroke();
  ctx.fillStyle = styles.tooltip.color; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText(txt, tx + styles.tooltip.padding, ty + th / 2);
}

// ============================================================
// SVG GENERATOR (extended)
// ============================================================
function generateSVG(opts) {
  const {
    width, height, padding, viewport, gridStep, functions, styles,
    showGrid, showMinorGrid, showAxes, showAxisLabels,
    shadedRegions, asymptotes, tangentLine, secantLine,
    specialPoints, labelMode, legendPosition,
    samples = 500, defaultStroke,
    xAxisHighlights = [], yAxisHighlights = [],
    verticalLines = [], horizontalLines = []
  } = opts;
  const { xMin, xMax, yMin, yMax } = viewport;
  const graphWidth = width - padding * 2, graphHeight = height - padding * 2;
  const toScreenX = (x) => padding + ((x - xMin) / (xMax - xMin)) * graphWidth;
  const toScreenY = (y) => padding + ((yMax - y) / (yMax - yMin)) * graphHeight;
  const fmt = v => { const r = Math.round(v * 1e6) / 1e6; return Math.abs(r - Math.round(r)) < 0.0001 ? Math.round(r).toString() : r.toFixed(2).replace(/\.?0+$/, ''); };

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'>\n`;
  svg += `  <rect x="0" y="0" width="${width}" height="${height}" fill="${styles.canvas.background}"/>\n`;
  svg += `  <rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}" fill="${styles.graphArea.background}"/>\n`;
  svg += `  <defs><clipPath id="graphClip"><rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}"/></clipPath></defs>\n`;

  if (showGrid) {
    if (showMinorGrid) {
      const minorStep = gridStep / 5;
      svg += `  <g stroke="${styles.grid.minorColor}" stroke-width="${styles.grid.minorStroke}">\n`;
      for (let x = Math.ceil(xMin / minorStep) * minorStep; x <= xMax; x += minorStep) { if (Math.abs(x % gridStep) < minorStep / 100) continue; svg += `    <line x1="${toScreenX(x)}" y1="${padding}" x2="${toScreenX(x)}" y2="${padding + graphHeight}"/>\n`; }
      for (let y = Math.ceil(yMin / minorStep) * minorStep; y <= yMax; y += minorStep) { if (Math.abs(y % gridStep) < minorStep / 100) continue; svg += `    <line x1="${padding}" y1="${toScreenY(y)}" x2="${padding + graphWidth}" y2="${toScreenY(y)}"/>\n`; }
      svg += `  </g>\n`;
    }
    svg += `  <g stroke="${styles.grid.color}" stroke-width="${styles.grid.stroke}">\n`;
    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) { if (Math.abs(x) >= gridStep / 1000) svg += `    <line x1="${toScreenX(x)}" y1="${padding}" x2="${toScreenX(x)}" y2="${padding + graphHeight}"/>\n`; }
    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) { if (Math.abs(y) >= gridStep / 1000) svg += `    <line x1="${padding}" y1="${toScreenY(y)}" x2="${padding + graphWidth}" y2="${toScreenY(y)}"/>\n`; }
    svg += `  </g>\n`;
  }

  if (showAxes) {
    svg += `  <g stroke="${styles.axes.color}" stroke-width="${styles.axes.stroke}">\n`;
    if (yMin <= 0 && yMax >= 0) svg += `    <line x1="${padding}" y1="${toScreenY(0)}" x2="${padding + graphWidth}" y2="${toScreenY(0)}"/>\n`;
    if (xMin <= 0 && xMax >= 0) svg += `    <line x1="${toScreenX(0)}" y1="${padding}" x2="${toScreenX(0)}" y2="${padding + graphHeight}"/>\n`;
    svg += `  </g>\n`;
  }

  if (showAxisLabels) {
    svg += `  <g fill="${styles.labels.color}" font-size="10.5">\n`;
    const xLabelY = (yMin <= 0 && yMax >= 0) ? Math.min(toScreenY(0) + 14, height - padding + 14) : height - padding + 14;
    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) {
      if (Math.abs(x) >= gridStep / 1000) svg += `    <text x="${toScreenX(x)}" y="${xLabelY}" text-anchor="middle">${fmt(x)}</text>\n`;
    }
    const yLabelX = (xMin <= 0 && xMax >= 0) ? Math.max(toScreenX(0) - 8, padding - 8) : padding - 8;
    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) {
      if (Math.abs(y) >= gridStep / 1000) svg += `    <text x="${yLabelX}" y="${toScreenY(y) + 4}" text-anchor="end">${fmt(y)}</text>\n`;
    }
    svg += `  </g>\n`;
    svg += `  <g fill="${styles.labels.color2}" font-size="13" font-style="italic" font-family="Cambria, 'Times New Roman', serif">\n`;
    svg += `    <text x="${width - padding + 10}" y="${(yMin <= 0 && yMax >= 0 ? toScreenY(0) : padding + graphHeight / 2) + 4}">x</text>\n`;
    svg += `    <text x="${(xMin <= 0 && xMax >= 0 ? toScreenX(0) : padding + graphWidth / 2)}" y="${padding - 8}" text-anchor="middle">y</text>\n`;
    svg += `  </g>\n`;
  }

  // ---- Shaded regions (with new yRange) ----
  if (shadedRegions?.length) {
    svg += `  <g clip-path="url(#graphClip)">\n`;
    shadedRegions.forEach(region => {
      const { type, functionIndex = 0, functionIndex1 = 0, functionIndex2 = 1, xStart = xMin, xEnd = xMax, yStart, yEnd, y = 0,
        color = styles.shadedRegion.defaultColor, strokeColor = styles.shadedRegion.defaultStroke, strokeWidth = styles.shadedRegion.defaultStrokeWidth } = region;
      const fn1 = functions[functionIndex]?.fn || functions[functionIndex1]?.fn, fn2 = functions[functionIndex2]?.fn;
      const x1 = Math.max(xStart, xMin), x2 = Math.min(xEnd, xMax);
      const sampleN = 300, step = (x2 - x1) / sampleN;
      const clamp = v => Math.max(yMin, Math.min(yMax, v));
      let d = '';
      if (type === 'underCurve' && fn1) {
        const pts = []; for (let i = 0; i <= sampleN; i++) { const x = x1 + i * step; try { const yv = fn1(x); if (typeof yv === 'number' && isFinite(yv)) pts.push({ x, y: clamp(yv) }); } catch {} }
        if (pts.length >= 2) { d = `M ${toScreenX(pts[0].x)} ${toScreenY(0)}`; pts.forEach(p => d += ` L ${toScreenX(p.x)} ${toScreenY(p.y)}`); d += ` L ${toScreenX(pts[pts.length-1].x)} ${toScreenY(0)} Z`; }
      } else if (type === 'betweenCurves' && fn1 && fn2) {
        const pts1 = [], pts2 = []; for (let i = 0; i <= sampleN; i++) { const x = x1 + i * step; try { const a = fn1(x), b = fn2(x); if (isFinite(a)) pts1.push({ x, y: clamp(a) }); if (isFinite(b)) pts2.push({ x, y: clamp(b) }); } catch {} }
        if (pts1.length >= 2 && pts2.length >= 2) { d = `M ${toScreenX(pts1[0].x)} ${toScreenY(pts1[0].y)}`; pts1.forEach(p => d += ` L ${toScreenX(p.x)} ${toScreenY(p.y)}`); for (let i = pts2.length - 1; i >= 0; i--) d += ` L ${toScreenX(pts2[i].x)} ${toScreenY(pts2[i].y)}`; d += ' Z'; }
      } else if ((type === 'aboveY' || type === 'belowY') && fn1) {
        const isAbove = type === 'aboveY', yBound = clamp(y), pts = [];
        for (let i = 0; i <= sampleN; i++) { const x = x1 + i * step; try { const yv = fn1(x); if (isFinite(yv) && ((isAbove && yv >= y) || (!isAbove && yv <= y))) pts.push({ x, y: clamp(yv) }); } catch {} }
        if (pts.length >= 2) { d = `M ${toScreenX(pts[0].x)} ${toScreenY(yBound)}`; pts.forEach(p => d += ` L ${toScreenX(p.x)} ${toScreenY(p.y)}`); d += ` L ${toScreenX(pts[pts.length-1].x)} ${toScreenY(yBound)} Z`; }
      } else if (type === 'xRange') {
        const sx1 = toScreenX(x1), sx2 = toScreenX(x2);
        svg += `    <rect x="${sx1}" y="${padding}" width="${sx2 - sx1}" height="${graphHeight}" fill="${color}" ${strokeWidth > 0 ? `stroke="${strokeColor}" stroke-width="${strokeWidth}"` : ''}/>\n`;
        return;
      } else if (type === 'yRange') {
        const y1v = Math.max(yStart ?? yMin, yMin);
        const y2v = Math.min(yEnd   ?? yMax, yMax);
        const sy1 = toScreenY(y2v), sy2 = toScreenY(y1v);
        svg += `    <rect x="${padding}" y="${sy1}" width="${graphWidth}" height="${sy2 - sy1}" fill="${color}" ${strokeWidth > 0 ? `stroke="${strokeColor}" stroke-width="${strokeWidth}"` : ''}/>\n`;
        return;
      }
      if (d) svg += `    <path d="${d}" fill="${color}" ${strokeWidth > 0 ? `stroke="${strokeColor}" stroke-width="${strokeWidth}"` : 'stroke="none"'}/>\n`;
    });
    svg += `  </g>\n`;
  }

  // ---- Axis highlights ----
  if (xAxisHighlights.length || yAxisHighlights.length) {
    svg += `  <g clip-path="url(#graphClip)">\n`;
    const s = styles.axisHighlight;
    const renderHighlightSVG = (h, axis) => {
      const fromFinite = Number.isFinite(h.from);
      const toFinite   = Number.isFinite(h.to);
      let p1, p2, axisPx;
      if (axis === 'x') {
        if (!(yMin <= 0 && yMax >= 0)) return '';
        axisPx = toScreenY(0);
        p1 = fromFinite ? toScreenX(h.from) : toScreenX(xMin);
        p2 = toFinite   ? toScreenX(h.to)   : toScreenX(xMax);
      } else {
        if (!(xMin <= 0 && xMax >= 0)) return '';
        axisPx = toScreenX(0);
        p1 = fromFinite ? toScreenY(h.from) : toScreenY(yMin);
        p2 = toFinite   ? toScreenY(h.to)   : toScreenY(yMax);
      }
      const placement = h.placement || 'on-axis';
      const side = h.side || 'plus';
      const color = h.color || s.defaultColor;
      const opacity = h.opacity ?? 1;
      const offset  = h.offset ?? s.offset;
      const doOnAxis    = placement === 'on-axis'   || placement === 'both';
      const doAlongside = placement === 'alongside' || placement === 'both';

      let frag = `    <g opacity="${opacity}">\n`;
      if (doOnAxis) {
        const t = h.thickness ?? s.thicknessOnAxis;
        if (axis === 'x') frag += `      <line x1="${Math.min(p1,p2)}" y1="${axisPx}" x2="${Math.max(p1,p2)}" y2="${axisPx}" stroke="${color}" stroke-width="${t}"/>\n`;
        else              frag += `      <line x1="${axisPx}" y1="${Math.min(p1,p2)}" x2="${axisPx}" y2="${Math.max(p1,p2)}" stroke="${color}" stroke-width="${t}"/>\n`;
      }
      let markerLine = axisPx;
      if (doAlongside) {
        const t = h.thickness ?? s.thicknessAlongside;
        let bandCenter;
        if (axis === 'x') bandCenter = axisPx + (side === 'minus' ? +1 : -1) * (offset + t / 2);
        else              bandCenter = axisPx + (side === 'plus'  ? +1 : -1) * (offset + t / 2);
        if (axis === 'x') frag += `      <rect x="${Math.min(p1,p2)}" y="${bandCenter - t/2}" width="${Math.abs(p2-p1)}" height="${t}" fill="${color}"/>\n`;
        else              frag += `      <rect x="${bandCenter - t/2}" y="${Math.min(p1,p2)}" width="${t}" height="${Math.abs(p2-p1)}" fill="${color}"/>\n`;
        if (!doOnAxis) markerLine = bandCenter;
      }

      const renderMarker = (p, kind) => {
        const cx = axis === 'x' ? p : markerLine;
        const cy = axis === 'x' ? markerLine : p;
        if (kind === 'closed') return `      <circle cx="${cx}" cy="${cy}" r="${s.markerRadius}" fill="${color}" stroke="#fff" stroke-width="${s.markerStrokeWidth}"/>\n`;
        else                   return `      <circle cx="${cx}" cy="${cy}" r="${s.markerRadius}" fill="#fff" stroke="${color}" stroke-width="${s.markerStrokeWidth}"/>\n`;
      };
      const renderArrow = (p, dir) => {
        const sz = s.arrowSize;
        const tip  = p + dir * sz / 2;
        const base = p - dir * sz / 2;
        if (axis === 'x') return `      <polygon points="${tip},${markerLine} ${base},${markerLine - sz/2} ${base},${markerLine + sz/2}" fill="${color}"/>\n`;
        else              return `      <polygon points="${markerLine},${tip} ${markerLine - sz/2},${base} ${markerLine + sz/2},${base}" fill="${color}"/>\n`;
      };

      frag += fromFinite ? renderMarker(p1, h.fromKind || 'closed') : renderArrow(p1, axis === 'x' ? -1 : +1);
      frag += toFinite   ? renderMarker(p2, h.toKind   || 'closed') : renderArrow(p2, axis === 'x' ? +1 : -1);
      frag += `    </g>\n`;
      return frag;
    };
    xAxisHighlights.forEach(h => { svg += renderHighlightSVG(h, 'x'); });
    yAxisHighlights.forEach(h => { svg += renderHighlightSVG(h, 'y'); });
    svg += `  </g>\n`;
  }

  // ---- Reference lines ----
  if (verticalLines.length || horizontalLines.length) {
    svg += `  <g clip-path="url(#graphClip)">\n`;
    const rs = styles.referenceLine;
    verticalLines.forEach(l => {
      if (l.x < xMin || l.x > xMax) return;
      const col = l.color || rs.defaultColor;
      const sw  = l.stroke ?? rs.defaultStroke;
      const pat = (l.pattern ?? rs.defaultPattern).join(',');
      svg += `    <line x1="${toScreenX(l.x)}" y1="${padding}" x2="${toScreenX(l.x)}" y2="${padding + graphHeight}" stroke="${col}" stroke-width="${sw}"${pat ? ` stroke-dasharray="${pat}"` : ''}/>\n`;
    });
    horizontalLines.forEach(l => {
      if (l.y < yMin || l.y > yMax) return;
      const col = l.color || rs.defaultColor;
      const sw  = l.stroke ?? rs.defaultStroke;
      const pat = (l.pattern ?? rs.defaultPattern).join(',');
      svg += `    <line x1="${padding}" y1="${toScreenY(l.y)}" x2="${padding + graphWidth}" y2="${toScreenY(l.y)}" stroke="${col}" stroke-width="${sw}"${pat ? ` stroke-dasharray="${pat}"` : ''}/>\n`;
    });
    svg += `  </g>\n`;
  }

  // ---- Asymptotes / tangent / secant (unchanged from Improved) ----
  if (asymptotes?.length || tangentLine || secantLine) {
    svg += `  <g clip-path="url(#graphClip)">\n`;
    asymptotes?.forEach(x => {
      if (x < xMin || x > xMax) return;
      svg += `    <line x1="${toScreenX(x)}" y1="${padding}" x2="${toScreenX(x)}" y2="${padding + graphHeight}" stroke="${styles.line.asymptote.color}" stroke-width="${styles.line.asymptote.stroke}" stroke-dasharray="${styles.line.asymptote.pattern.join(',')}"/>\n`;
    });
    if (tangentLine) {
      const { slope, intercept, x0, y0 } = tangentLine;
      svg += `    <line x1="${toScreenX(xMin)}" y1="${toScreenY(slope*xMin+intercept)}" x2="${toScreenX(xMax)}" y2="${toScreenY(slope*xMax+intercept)}" stroke="${styles.line.tangent.color}" stroke-width="${styles.line.tangent.stroke}"/>\n`;
      svg += `    <circle cx="${toScreenX(x0)}" cy="${toScreenY(y0)}" r="4" fill="#fff" stroke="${styles.line.tangent.color}" stroke-width="2.25"/>\n`;
    }
    if (secantLine) {
      const { slope, intercept, x1, y1, x2, y2 } = secantLine;
      svg += `    <line x1="${toScreenX(xMin)}" y1="${toScreenY(slope*xMin+intercept)}" x2="${toScreenX(xMax)}" y2="${toScreenY(slope*xMax+intercept)}" stroke="${styles.line.secant.color}" stroke-width="${styles.line.secant.stroke}" stroke-dasharray="${styles.line.secant.pattern.join(',')}"/>\n`;
      svg += `    <circle cx="${toScreenX(x1)}" cy="${toScreenY(y1)}" r="4" fill="#fff" stroke="${styles.line.secant.color}" stroke-width="2.25"/>\n`;
      svg += `    <circle cx="${toScreenX(x2)}" cy="${toScreenY(y2)}" r="4" fill="#fff" stroke="${styles.line.secant.color}" stroke-width="2.25"/>\n`;
    }
    svg += `  </g>\n`;
  }

  // ---- Curves (extended with per-function domain) ----
  svg += `  <g clip-path="url(#graphClip)" fill="none" stroke-linecap="round" stroke-linejoin="round">\n`;
  functions.forEach((f, i) => {
    if (f.visible === false || !f.fn) return;
    const color = f.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
    const stroke = f.stroke || defaultStroke || styles.curve.stroke;
    const pattern = f.pattern || [];
    const dom = f.domain || {};
    const sampleMin = Math.max(xMin, Number.isFinite(dom.from) ? dom.from : -Infinity);
    const sampleMax = Math.min(xMax, Number.isFinite(dom.to)   ? dom.to   :  Infinity);
    if (sampleMax <= sampleMin) return;
    const step = (sampleMax - sampleMin) / samples;
    let d = '', inPath = false, prevY = null;
    const jump = (yMax - yMin) * 0.5;
    for (let j = 0; j <= samples; j++) {
      const x = sampleMin + j * step;
      try {
        const y = f.fn(x);
        if (typeof y !== 'number' || !isFinite(y)) { inPath = false; prevY = null; continue; }
        if (prevY !== null && Math.abs(y - prevY) > jump && ((prevY > yMax && y < yMin) || (prevY < yMin && y > yMax))) inPath = false;
        if (!inPath) { d += ` M ${toScreenX(x)} ${toScreenY(y)}`; inPath = true; }
        else d += ` L ${toScreenX(x)} ${toScreenY(y)}`;
        prevY = y;
      } catch { inPath = false; prevY = null; }
    }
    svg += `    <path d="${d.trim()}" stroke="${color}" stroke-width="${stroke}" ${pattern.length ? `stroke-dasharray="${pattern.join(',')}"` : ''}/>\n`;
  });
  svg += `  </g>\n`;

  // Per-function domain endpoint markers in SVG.
  const anyHasDomain = functions.some(f => f.visible !== false && f.fn && f.domain);
  if (anyHasDomain) {
    svg += `  <g clip-path="url(#graphClip)">\n`;
    const ep = styles.domainEndpoint;
    functions.forEach((f, i) => {
      if (f.visible === false || !f.fn || !f.domain) return;
      const color = f.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
      const mark = (xVal, kind) => {
        if (xVal < xMin || xVal > xMax) return '';
        let yVal; try { yVal = f.fn(xVal); } catch { return ''; }
        if (typeof yVal !== 'number' || !isFinite(yVal)) return '';
        if (yVal < yMin || yVal > yMax) return '';
        if (kind === 'closed') return `    <circle cx="${toScreenX(xVal)}" cy="${toScreenY(yVal)}" r="${ep.radius}" fill="${color}" stroke="#fff" stroke-width="${ep.strokeWidth}"/>\n`;
        return `    <circle cx="${toScreenX(xVal)}" cy="${toScreenY(yVal)}" r="${ep.radius}" fill="#fff" stroke="${color}" stroke-width="${ep.strokeWidth}"/>\n`;
      };
      if (Number.isFinite(f.domain.from)) svg += mark(f.domain.from, f.domain.fromKind || 'closed');
      if (Number.isFinite(f.domain.to))   svg += mark(f.domain.to,   f.domain.toKind   || 'closed');
    });
    svg += `  </g>\n`;
  }

  // ---- Special points (unchanged) ----
  if (specialPoints?.length) {
    svg += `  <g clip-path="url(#graphClip)">\n`;
    specialPoints.forEach(pt => {
      const ps = styles.specialPoint[pt.type] || styles.specialPoint.custom;
      const strokeCol = pt.color || ps.stroke;
      svg += `    <circle cx="${toScreenX(pt.x)}" cy="${toScreenY(pt.y)}" r="${ps.radius}" fill="${ps.fill}" stroke="${strokeCol}" stroke-width="${ps.strokeWidth}"/>\n`;
      if (labelMode === 'always') {
        let txt;
        if (pt.type === 'root') txt = `(${pt.x.toFixed(2)}, 0)`;
        else if (pt.type === 'extremum' || pt.type === 'inflection') txt = `(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`;
        else txt = pt.label || `(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`;
        svg += `    <text x="${toScreenX(pt.x) + ps.radius + 6}" y="${toScreenY(pt.y) + 4}" font-size="10" fill="#1e293b">${txt}</text>\n`;
      }
    });
    svg += `  </g>\n`;
  }

  // ---- Legend (unchanged) ----
  if (legendPosition && functions.some(f => f.visible !== false && (f.formula || f.label))) {
    const vis = functions.filter(f => f.visible !== false && (f.formula || f.label));
    const lh = 20, boxSz = 10, gap = 8, pd = styles.legend.padding;
    const charW = 6.6;
    const maxW = Math.max(...vis.map(f => (f.formula || f.label || 'f').length)) * charW;
    const legW = pd * 2 + boxSz + gap + maxW + 4;
    const legH = pd * 2 + vis.length * lh - (lh - boxSz);
    const margin = 12;
    let lx, ly;
    switch (legendPosition) {
      case 'top-left':     lx = padding + margin;                ly = padding + margin; break;
      case 'bottom-left':  lx = padding + margin;                ly = height - padding - legH - margin; break;
      case 'bottom-right': lx = width - padding - legW - margin; ly = height - padding - legH - margin; break;
      default:             lx = width - padding - legW - margin; ly = padding + margin;
    }
    svg += `  <g>\n`;
    svg += `    <rect x="${lx}" y="${ly}" width="${legW}" height="${legH}" rx="${styles.legend.radius}" fill="${styles.legend.background}" stroke="${styles.legend.border}"/>\n`;
    vis.forEach((f, i) => {
      const idx = functions.indexOf(f);
      const col = f.color || DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      const txt = f.formula || f.label || `f${idx + 1}`;
      const ey = ly + pd + i * lh + boxSz / 2;
      svg += `    <line x1="${lx + pd}" y1="${ey}" x2="${lx + pd + boxSz + 4}" y2="${ey}" stroke="${col}" stroke-width="2.25" stroke-linecap="round"/>\n`;
      svg += `    <text x="${lx + pd + boxSz + gap + 4}" y="${ey + 4}" font-size="11.5" fill="${styles.legend.color}">${txt}</text>\n`;
    });
    svg += `  </g>\n`;
  }

  svg += '</svg>';
  return svg;
}

// ============================================================
// COMPONENT: VisualizerCore
// ============================================================
export const VisualizerCore = React.forwardRef((props, ref) => {
  const {
    functions = [],
    xMin: initXMin, xMax: initXMax, yMin: initYMin, yMax: initYMax, zoom,
    width = 600, height = 500, padding = 50,
    showGrid = true, showMinorGrid = true, showAxes = true, showAxisLabels = true,
    enableZoom = true, enablePan = true,
    showCrosshair = false, showCrosshairCoordinates = true, showCurveTooltip = true,
    labelMode = 'none', legendPosition = 'top-right',
    showRoots = false, showExtrema = false, showInflections = false, specialPointLabelMode = 'hover',
    showAsymptotes = false, tangentAt = null, secantAt = null,
    shadedRegions = [], customPoints = [],
    hoverThreshold = 15, samples = 500,
    curveStroke,
    onViewportChange, onHover,
    styles: customStyles = {},
    // ---- NEW ----
    xAxisHighlights = [],
    yAxisHighlights = [],
    verticalLines = [],
    horizontalLines = []
  } = props;

  const canvasRef = useRef(null);
  const styles = useMemo(() => mergeStyles(DEFAULT_STYLES, customStyles), [customStyles]);
  const effectiveDefaultStroke = curveStroke ?? styles.curve.stroke;

  const normFns = useMemo(() => {
    if (!functions) return [];
    if (typeof functions === 'function') return [{ fn: functions }];
    return functions.map(f => typeof f === 'function' ? { fn: f } : f);
  }, [functions]);

  const coordSys = useCoordinateSystem({ initialXMin: initXMin, initialXMax: initXMax, initialYMin: initYMin, initialYMax: initYMax, zoom, canvasWidth: width, canvasHeight: height, padding });

  const specialPoints = useMemo(() => {
    const pts = [], { xMin, xMax, yMin, yMax } = coordSys.viewport;
    normFns.forEach((f, i) => {
      if (f.visible === false || !f.fn) return;
      const col = f.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
      if (showRoots) findRoots(f.fn, xMin, xMax).forEach(p => { if (p.y >= yMin && p.y <= yMax) pts.push({ ...p, color: col }); });
      if (showExtrema) findExtrema(f.fn, xMin, xMax).forEach(p => { if (p.y >= yMin && p.y <= yMax) pts.push({ ...p, color: col }); });
      if (showInflections) findInflectionPoints(f.fn, xMin, xMax).forEach(p => { if (p.y >= yMin && p.y <= yMax) pts.push({ ...p, color: col }); });
    });
    if (customPoints?.length) {
      customPoints.forEach(p => pts.push({ type: 'custom', ...p }));
    }
    return pts;
  }, [normFns, coordSys.viewport, showRoots, showExtrema, showInflections, customPoints]);

  const asymptotes = useMemo(() => {
    if (!showAsymptotes) return [];
    const all = [], { xMin, xMax } = coordSys.viewport;
    normFns.forEach(f => {
      if (f.visible !== false && f.fn) findVerticalAsymptotes(f.fn, xMin, xMax).forEach(x => { if (!all.some(a => Math.abs(a - x) < 0.01)) all.push(x); });
    });
    return all;
  }, [normFns, coordSys.viewport, showAsymptotes]);

  const tangentLine = useMemo(() => { if (!tangentAt) return null; const f = normFns[tangentAt.functionIndex]; return f?.fn ? getTangentLine(f.fn, tangentAt.x) : null; }, [normFns, tangentAt]);
  const secantLine = useMemo(() => { if (!secantAt) return null; const f = normFns[secantAt.functionIndex]; return f?.fn ? getSecantLine(f.fn, secantAt.x1, secantAt.x2) : null; }, [normFns, secantAt]);

  const handleVpChange = useCallback(() => { if (onViewportChange) onViewportChange(coordSys.viewport); }, [onViewportChange, coordSys.viewport]);
  const interaction = useInteraction({ toWorld: coordSys.toWorld, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, zoomAt: coordSys.zoomAt, pan: coordSys.pan, isInGraphArea: coordSys.isInGraphArea, enableZoom, enablePan, onHover, onViewportChange: handleVpChange, functions: normFns, specialPoints, hoverThreshold });

  React.useImperativeHandle(ref, () => ({
    getPNGDataURL: () => canvasRef.current?.toDataURL('image/png'),
    getSVG: () => generateSVG({
      width, height, padding,
      viewport: coordSys.viewport, gridStep: coordSys.gridStep,
      functions: normFns, styles,
      showGrid, showMinorGrid, showAxes, showAxisLabels,
      shadedRegions, asymptotes, tangentLine, secantLine,
      specialPoints, labelMode, legendPosition, samples,
      defaultStroke: effectiveDefaultStroke,
      xAxisHighlights, yAxisHighlights,
      verticalLines, horizontalLines
    }),
    getCanvas: () => canvasRef.current,
    getViewport: () => coordSys.viewport
  }), [width, height, padding, coordSys.viewport, coordSys.gridStep, normFns, styles, showGrid, showMinorGrid, showAxes, showAxisLabels, shadedRegions, asymptotes, tangentLine, secantLine, specialPoints, labelMode, legendPosition, samples, effectiveDefaultStroke, xAxisHighlights, yAxisHighlights, verticalLines, horizontalLines]);

  const render = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;

    const physicalW = Math.round(width * dpr), physicalH = Math.round(height * dpr);
    if (canvas.width !== physicalW || canvas.height !== physicalH) {
      canvas.width = physicalW;
      canvas.height = physicalH;
    }

    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.fillStyle = styles.canvas.background;
    ctx.fillRect(0, 0, width, height);

    gridRenderer(ctx, { viewport: coordSys.viewport, gridStep: coordSys.gridStep, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, canvasWidth: width, canvasHeight: height, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, showGrid, showMinorGrid, showAxes, showAxisLabels, styles });
    shadedRegionsRenderer(ctx, { shadedRegions, functions: normFns, viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, samples });
    axisHighlightsRenderer(ctx, { xAxisHighlights, yAxisHighlights, viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles });
    referenceLinesRenderer(ctx, { verticalLines, horizontalLines, viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles });
    linesRenderer(ctx, { viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, asymptotes, tangentLine, secantLine });
    curveRenderer(ctx, { functions: normFns, viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, samples, hoveredCurve: interaction.hoveredCurve, defaultStroke: effectiveDefaultStroke });
    specialPointsRenderer(ctx, { specialPoints, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, labelMode: specialPointLabelMode, hoveredSpecialPoint: interaction.hoveredSpecialPoint });
    if (labelMode === 'legend' || labelMode === 'both') legendRenderer(ctx, { functions: normFns, padding, width, height, styles, position: legendPosition });
    if (showCrosshair && interaction.isMouseInside) crosshairRenderer(ctx, { mousePosition: interaction.mousePosition, padding, width, height, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, showCoordinates: showCrosshairCoordinates });
    if (showCurveTooltip && interaction.hoveredCurve && !interaction.hoveredSpecialPoint) curveTooltipRenderer(ctx, { hoveredCurve: interaction.hoveredCurve, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, padding, width, height, styles });
    if (interaction.hoveredSpecialPoint) specialPointTooltipRenderer(ctx, { hoveredSpecialPoint: interaction.hoveredSpecialPoint, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, padding, width, height, styles });
  }, [coordSys, interaction, normFns, specialPoints, asymptotes, tangentLine, secantLine, shadedRegions, showGrid, showMinorGrid, showAxes, showAxisLabels, showCrosshair, showCrosshairCoordinates, showCurveTooltip, labelMode, legendPosition, specialPointLabelMode, width, height, padding, styles, samples, effectiveDefaultStroke, xAxisHighlights, yAxisHighlights, verticalLines, horizontalLines]);

  useEffect(() => { const id = requestAnimationFrame(render); return () => cancelAnimationFrame(id); }, [render]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: width + 'px',
        height: height + 'px',
        cursor: interaction.hoveredCurve || interaction.hoveredSpecialPoint ? 'crosshair' : interaction.isPanning ? 'grabbing' : enablePan ? 'grab' : 'default'
      }}
      {...interaction.handlers}
    />
  );
});
VisualizerCore.displayName = 'VisualizerCore';


// ============================================================
// ICONS
// ============================================================
const MaxIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>;
const MinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>;
const DownloadIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>;
const CloseIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>;
const ChevronLeftIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>;
const ChevronRightLarge = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>;

// ============================================================
// EXPORT MODAL
// ============================================================
function ExportModal({ isOpen, onClose, pngDataUrl, svgContent }) {
  const [copied, setCopied] = useState(null);
  if (!isOpen) return null;

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        cursor: 'pointer'
      }}
      onClick={onClose}
      role="presentation"
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          borderRadius: 12,
          padding: 24,
          maxWidth: 500,
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          cursor: 'default'
        }}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 18, color: '#0f172a' }}>Export Graph</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#64748b' }}><CloseIcon /></button>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ margin: '0 0 8px', fontSize: 13, color: '#64748b', fontWeight: 500 }}>PNG Preview</h4>
          <img src={pngDataUrl} alt="Graph" style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 8 }} />
          <p style={{ fontSize: 11, color: '#94a3b8', margin: '8px 0 0' }}>Right-click &rarr; Save image as&hellip;</p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ margin: '0 0 8px', fontSize: 13, color: '#64748b', fontWeight: 500 }}>SVG Code</h4>
          <textarea value={svgContent} readOnly style={{ width: '100%', height: 100, fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 10, padding: 8, border: '1px solid #e2e8f0', borderRadius: 4, resize: 'vertical', color: '#334155' }} />
          <button onClick={() => copyToClipboard(svgContent, 'svg')} style={{ marginTop: 8, padding: '8px 16px', background: copied === 'svg' ? '#10b981' : '#3b82f6', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 500 }}>
            {copied === 'svg' ? '✓ Copied!' : 'Copy SVG'}
          </button>
        </div>

        <p style={{ fontSize: 11, color: '#94a3b8', margin: 0 }}>
          Tip: click outside this panel or press <kbd style={{ padding: '1px 5px', border: '1px solid #cbd5e1', borderRadius: 3, background: '#f1f5f9', fontSize: 10 }}>Esc</kbd> to close.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// WRAPPER WITH CONTROLS (unchanged from Improved)
// ============================================================
export function VisualizerWithControls(props) {
  const { defaultWidth = 700, defaultHeight = 550, minWidth = 400, minHeight = 300, ...rest } = props;
  const visualizerRef = useRef(null);
  const [isMax, setIsMax] = useState(false);
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [winSize, setWinSize] = useState({ width: 1200, height: 800 });
  const [exportModal, setExportModal] = useState({ isOpen: false, png: '', svg: '' });

  useEffect(() => { setWinSize({ width: window.innerWidth, height: window.innerHeight }); const h = () => setWinSize({ width: window.innerWidth, height: window.innerHeight }); window.addEventListener('resize', h); return () => window.removeEventListener('resize', h); }, []);
  useEffect(() => { const h = e => { if (e.key === 'Escape') { if (exportModal.isOpen) setExportModal({ isOpen: false, png: '', svg: '' }); else if (isMax) setIsMax(false); } }; window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h); }, [isMax, exportModal.isOpen]);

  const cur = isMax ? { width: winSize.width - 40, height: winSize.height - 180 } : size;
  const presets = [{ l: 'S', w: 500, h: 400 }, { l: 'M', w: 700, h: 550 }, { l: 'L', w: 900, h: 850 }, { l: 'XL', w: 1100, h: 850 }];

  const btnStyle = { padding: '6px 10px', border: '1px solid #e2e8f0', background: 'white', borderRadius: 6, cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4, color: '#334155', fontWeight: 500 };
  const actStyle = { ...btnStyle, background: '#3b82f6', color: 'white', borderColor: '#3b82f6' };

  const handleExport = () => {
    const png = visualizerRef.current?.getPNGDataURL() || '';
    const svg = visualizerRef.current?.getSVG() || '';
    setExportModal({ isOpen: true, png, svg });
  };

  const innerContent = (
    <div
      onClick={isMax ? (e => e.stopPropagation()) : undefined}
      style={isMax
        ? { display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }
        : { display: 'contents' }}
    >
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', flexShrink: 0 }}>
        {!isMax && <div style={{ display: 'flex', gap: 4, marginRight: 8 }}>{presets.map(p => <button key={p.l} onClick={() => setSize({ width: p.w, height: p.h })} style={size.width === p.w && size.height === p.h ? actStyle : btnStyle}>{p.l}</button>)}</div>}
        {!isMax && <div style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 12, color: '#64748b' }}>
          <input type="number" value={size.width} onChange={e => setSize(s => ({ ...s, width: Math.max(minWidth, +e.target.value || minWidth) }))} style={{ width: 60, padding: 5, border: '1px solid #e2e8f0', borderRadius: 4, fontSize: 12 }} />
          <span>×</span>
          <input type="number" value={size.height} onChange={e => setSize(s => ({ ...s, height: Math.max(minHeight, +e.target.value || minHeight) }))} style={{ width: 60, padding: 5, border: '1px solid #e2e8f0', borderRadius: 4, fontSize: 12 }} />
        </div>}
        <button onClick={handleExport} style={btnStyle}><DownloadIcon /> Export</button>
        <button onClick={() => setIsMax(!isMax)} style={{ ...btnStyle, background: isMax ? '#ef4444' : 'white', color: isMax ? 'white' : '#334155', borderColor: isMax ? '#ef4444' : '#e2e8f0' }}>{isMax ? <MinIcon /> : <MaxIcon />}{isMax ? 'Exit' : 'Maximize'}</button>
      </div>
      <VisualizerCore ref={visualizerRef} {...rest} width={cur.width} height={cur.height} />
      <div style={{ marginTop: 8, fontSize: 11, color: isMax ? '#cbd5e1' : '#94a3b8', fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>{cur.width} × {cur.height}</div>
      {isMax && <div style={{ marginTop: 12, fontSize: 11, color: '#94a3b8', fontStyle: 'italic' }}>Click outside or press Esc to exit.</div>}
    </div>
  );

  return (
    <div
      onClick={isMax ? (() => setIsMax(false)) : undefined}
      style={isMax
        ? { position: 'fixed', inset: 0, background: '#0f172a', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '80px 20px 20px', overflow: 'auto', cursor: 'pointer' }
        : { background: 'white', borderRadius: 10, boxShadow: '0 1px 3px rgba(15,23,42,0.06), 0 8px 24px rgba(15,23,42,0.06)', padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #f1f5f9' }}>
      {innerContent}
      <ExportModal isOpen={exportModal.isOpen} onClose={() => setExportModal({ isOpen: false, png: '', svg: '' })} pngDataUrl={exportModal.png} svgContent={exportModal.svg} />
    </div>
  );
}

// ============================================================
// DEMO — extended to showcase the new features
// ============================================================
export default function Demo() {
  const [showAxisHighlight, setShowAxisHighlight] = useState(true);
  const [highlightPlacement, setHighlightPlacement] = useState('on-axis'); // 'on-axis' | 'alongside' | 'both'
  const [highlightColor, setHighlightColor] = useState('#639922');
  const [showVerticalLine, setShowVerticalLine] = useState(true);
  const [showYRange, setShowYRange] = useState(false);
  const [restrictedBranch, setRestrictedBranch] = useState(false);

  const functions = restrictedBranch
    ? [{ fn: x => x * x, color: '#3b82f6', label: 'f', formula: 'f(x) = x²  on  [0, ∞)', visible: true,
         domain: { from: 0, to: Infinity, fromKind: 'closed' } }]
    : [{ fn: x => Math.log(x - 2), color: '#3b82f6', label: 'f', formula: 'f(x) = ln(x − 2)', visible: true }];

  const xAxisHighlights = showAxisHighlight
    ? [{
        from: restrictedBranch ? 0 : 2,
        to: Infinity,
        fromKind: restrictedBranch ? 'closed' : 'open',
        placement: highlightPlacement,
        color: highlightColor
      }]
    : [];

  const verticalLines = showVerticalLine
    ? [{ x: restrictedBranch ? 0 : 2, color: '#94a3b8', stroke: 1, pattern: [4, 4], label: 'boundary' }]
    : [];

  const shadedRegions = showYRange
    ? [{ type: 'yRange', yStart: 0, yEnd: 3, color: 'rgba(245, 158, 11, 0.12)', strokeColor: 'rgba(245, 158, 11, 0.4)', strokeWidth: 1 }]
    : [];

  const sec = { marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #f1f5f9' };
  const chk = { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, fontSize: 13, cursor: 'pointer', color: '#334155' };
  const lbl = { fontSize: 10.5, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, margin: '0 0 8px' };
  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';

  return (
    <div style={{ display: 'flex', gap: 20, padding: 16, fontFamily: fontStack, background: '#f8fafc', minHeight: '100vh', alignItems: 'flex-start' }}>
      <div style={{ width: 280, background: 'white', padding: 18, borderRadius: 10, boxShadow: '0 1px 3px rgba(15,23,42,0.06), 0 8px 24px rgba(15,23,42,0.06)', flexShrink: 0, maxHeight: '90vh', overflowY: 'auto', border: '1px solid #f1f5f9' }}>
        <h3 style={{ margin: '0 0 4px', color: '#0f172a', fontSize: 16, letterSpacing: '-0.01em' }}>FunctionVisualizerCorePro</h3>
        <p style={{ fontSize: 11, color: '#94a3b8', marginBottom: 16 }}>v1 — axis highlights, reference lines, yRange shading, per-function domain</p>

        <div style={sec}>
          <h4 style={lbl}>Function</h4>
          <label style={chk}>
            <input type="checkbox" checked={restrictedBranch} onChange={e => setRestrictedBranch(e.target.checked)} />
            Restricted branch: x² on [0, ∞)
          </label>
          <p style={{ fontSize: 11, color: '#94a3b8', margin: '4px 0 0 24px' }}>
            Uses per-function <code>domain</code>. Otherwise shows ln(x − 2).
          </p>
        </div>

        <div style={sec}>
          <h4 style={lbl}>Axis highlight</h4>
          <label style={chk}>
            <input type="checkbox" checked={showAxisHighlight} onChange={e => setShowAxisHighlight(e.target.checked)} />
            Show highlight
          </label>
          {showAxisHighlight && (
            <>
              <div style={{ display: 'flex', gap: 4, marginTop: 6, marginBottom: 8 }}>
                {['on-axis', 'alongside', 'both'].map(p => (
                  <button key={p} onClick={() => setHighlightPlacement(p)}
                          style={{
                            flex: 1, padding: '4px 6px', fontSize: 11,
                            border: '1px solid #e2e8f0',
                            background: highlightPlacement === p ? '#3b82f6' : 'white',
                            color: highlightPlacement === p ? 'white' : '#334155',
                            borderColor: highlightPlacement === p ? '#3b82f6' : '#e2e8f0',
                            borderRadius: 5, cursor: 'pointer', fontWeight: 500
                          }}>{p}</button>
                ))}
              </div>
              <label style={{ display: 'block', fontSize: 12, color: '#334155', marginTop: 6 }}>
                Color
                <input type="color" value={highlightColor} onChange={e => setHighlightColor(e.target.value)}
                       style={{ marginLeft: 8, verticalAlign: 'middle', width: 40, height: 22, border: 'none', cursor: 'pointer' }} />
              </label>
            </>
          )}
        </div>

        <div style={sec}>
          <h4 style={lbl}>Reference line</h4>
          <label style={chk}>
            <input type="checkbox" checked={showVerticalLine} onChange={e => setShowVerticalLine(e.target.checked)} />
            Vertical line at boundary
          </label>
        </div>

        <div style={sec}>
          <h4 style={lbl}>yRange shading</h4>
          <label style={chk}>
            <input type="checkbox" checked={showYRange} onChange={e => setShowYRange(e.target.checked)} />
            Shade y ∈ [0, 3]
          </label>
        </div>

        <div style={{ padding: 10, background: '#f8fafc', borderRadius: 6, fontSize: 11, color: '#475569', border: '1px solid #f1f5f9', lineHeight: 1.5 }}>
          <strong style={{ color: '#0f172a' }}>Tip</strong><br />
          Pan and zoom — the highlight tracks the axis correctly because it lives inside the canvas coordinate system.
        </div>
      </div>

      <VisualizerWithControls
        functions={functions}
        zoom={10}
        showCrosshair
        showCurveTooltip
        labelMode="legend"
        xAxisHighlights={xAxisHighlights}
        verticalLines={verticalLines}
        shadedRegions={shadedRegions}
      />
    </div>
  );
}