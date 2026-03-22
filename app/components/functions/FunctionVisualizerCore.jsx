import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

// ============================================================
// DEFAULT STYLES
// ============================================================
const DEFAULT_STYLES = {
  canvas: { background: '#fafafa' },
  graphArea: { background: '#ffffff' },
  grid: { color: '#e0e0e0', stroke: 1, pattern: [] },
  axes: { color: '#333333', stroke: 2, pattern: [] },
  labels: { color: '#666666', font: '11px system-ui, sans-serif', axisNameFont: '13px system-ui, sans-serif' },
  crosshair: { color: 'rgba(103, 122, 228, 0.5)', stroke: 1, pattern: [5, 5], labelBackground: 'rgba(255, 255, 255, 0.95)', labelBorder: '#677ae4', labelColor: '#333', labelFont: '12px system-ui, sans-serif' },
  curve: { stroke: 2.5, pattern: [], hoverStroke: 4, hoverGlow: true },
  tooltip: { background: 'rgba(255, 255, 255, 0.95)', border: '#333', color: '#333', font: '12px system-ui, sans-serif', padding: 8, radius: 4 },
  point: { radius: 5, stroke: 2, strokeColor: '#fff' },
  legend: { background: 'rgba(255, 255, 255, 0.95)', border: '#ddd', color: '#333', font: '12px system-ui, sans-serif', padding: 10, radius: 6 },
  specialPoint: { root: { radius: 6, fill: '#e74c3c', stroke: '#fff', strokeWidth: 2 }, extremum: { radius: 6, fill: '#2ecc71', stroke: '#fff', strokeWidth: 2 }, inflection: { radius: 5, fill: '#9b59b6', stroke: '#fff', strokeWidth: 2 }, custom: { radius: 5, fill: '#f39c12', stroke: '#fff', strokeWidth: 2 }, labelFont: '10px system-ui, sans-serif', labelBackground: 'rgba(255, 255, 255, 0.95)', labelPadding: 4 },
  line: { asymptote: { color: '#e74c3c', stroke: 1.5, pattern: [8, 4] }, tangent: { color: '#9b59b6', stroke: 2, pattern: [] }, secant: { color: '#1abc9c', stroke: 2, pattern: [5, 5] } },
  shadedRegion: { defaultColor: 'rgba(103, 122, 228, 0.3)', defaultStroke: 'rgba(103, 122, 228, 0.6)', defaultStrokeWidth: 1 }
};

const DEFAULT_COLORS = ['#677ae4', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e91e63', '#00bcd4', '#ff5722', '#607d8b'];

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
// MATH UTILITIES
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
// HOOKS
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
  const findNearestCurve = useCallback((worldX, screenX, screenY) => { if (!functions?.length) return null; let nearest = null, minDist = hoverThreshold; functions.forEach((f, i) => { if (f.visible === false || !f.fn) return; try { const y = f.fn(worldX); if (typeof y !== 'number' || !isFinite(y)) return; const dist = Math.abs(toScreenY(y) - screenY); if (dist < minDist) { minDist = dist; nearest = { index: i, x: worldX, y, color: f.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length], label: f.label || `f${i + 1}` }; } } catch {} }); return nearest; }, [functions, toScreenY, hoverThreshold]);
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
  const { viewport, gridStep, padding, graphWidth, graphHeight, canvasWidth, canvasHeight, toScreenX, toScreenY, showGrid = true, showAxes = true, showAxisLabels = true, styles } = opts;
  const { xMin, xMax, yMin, yMax } = viewport;
  ctx.fillStyle = styles.graphArea.background; ctx.fillRect(padding, padding, graphWidth, graphHeight);
  if (showGrid) { ctx.strokeStyle = styles.grid.color; ctx.lineWidth = styles.grid.stroke; ctx.setLineDash(styles.grid.pattern); for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) { if (Math.abs(x) < gridStep / 1000) continue; ctx.beginPath(); ctx.moveTo(toScreenX(x), padding); ctx.lineTo(toScreenX(x), padding + graphHeight); ctx.stroke(); } for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) { if (Math.abs(y) < gridStep / 1000) continue; ctx.beginPath(); ctx.moveTo(padding, toScreenY(y)); ctx.lineTo(padding + graphWidth, toScreenY(y)); ctx.stroke(); } ctx.setLineDash([]); }
  if (showAxes) { ctx.strokeStyle = styles.axes.color; ctx.lineWidth = styles.axes.stroke; if (yMin <= 0 && yMax >= 0) { ctx.beginPath(); ctx.moveTo(padding, toScreenY(0)); ctx.lineTo(padding + graphWidth, toScreenY(0)); ctx.stroke(); } if (xMin <= 0 && xMax >= 0) { ctx.beginPath(); ctx.moveTo(toScreenX(0), padding); ctx.lineTo(toScreenX(0), padding + graphHeight); ctx.stroke(); } }
  if (showAxisLabels) { ctx.fillStyle = styles.labels.color; ctx.font = styles.labels.font; const fmt = v => { const r = Math.round(v * 1e6) / 1e6; return Math.abs(r - Math.round(r)) < 0.0001 ? Math.round(r).toString() : r.toFixed(2).replace(/\.?0+$/, ''); }; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; const xLabelY = (yMin <= 0 && yMax >= 0) ? Math.min(toScreenY(0) + 16, canvasHeight - padding + 16) : canvasHeight - padding + 16; for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) if (Math.abs(x) >= gridStep / 1000) ctx.fillText(fmt(x), toScreenX(x), xLabelY); ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; const yLabelX = (xMin <= 0 && xMax >= 0) ? Math.max(toScreenX(0) - 8, padding - 8) : padding - 8; for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) if (Math.abs(y) >= gridStep / 1000) ctx.fillText(fmt(y), yLabelX, toScreenY(y)); if (xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0) { ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('0', toScreenX(0) - 8, toScreenY(0) + 4); } ctx.font = styles.labels.axisNameFont; ctx.fillStyle = styles.axes.color; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText('x', canvasWidth - padding + 8, (yMin <= 0 && yMax >= 0) ? toScreenY(0) : padding + graphHeight / 2); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; ctx.fillText('y', (xMin <= 0 && xMax >= 0) ? toScreenX(0) : padding + graphWidth / 2, padding - 8); }
}

function shadedRegionsRenderer(ctx, opts) {
  const { shadedRegions, functions, viewport, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, samples = 300 } = opts;
  if (!shadedRegions?.length) return;
  const { xMin, xMax, yMin, yMax } = viewport;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();
  shadedRegions.forEach(region => {
    const { type, functionIndex = 0, functionIndex1 = 0, functionIndex2 = 1, xStart = xMin, xEnd = xMax, y = 0, color = styles.shadedRegion.defaultColor, strokeColor = styles.shadedRegion.defaultStroke, strokeWidth = styles.shadedRegion.defaultStrokeWidth } = region;
    const fn1 = functions[functionIndex]?.fn || functions[functionIndex1]?.fn, fn2 = functions[functionIndex2]?.fn;
    const x1 = Math.max(xStart, xMin), x2 = Math.min(xEnd, xMax);
    if (type === 'underCurve' && fn1) { const step = (x2 - x1) / samples, pts = []; for (let i = 0; i <= samples; i++) { const x = x1 + i * step; try { const yVal = fn1(x); if (typeof yVal === 'number' && isFinite(yVal)) pts.push({ x, y: Math.max(yMin, Math.min(yMax, yVal)) }); } catch {} } if (pts.length >= 2) { ctx.beginPath(); ctx.moveTo(toScreenX(pts[0].x), toScreenY(0)); pts.forEach(p => ctx.lineTo(toScreenX(p.x), toScreenY(p.y))); ctx.lineTo(toScreenX(pts[pts.length - 1].x), toScreenY(0)); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.stroke(); } } }
    else if (type === 'betweenCurves' && fn1 && fn2) { const step = (x2 - x1) / samples, pts1 = [], pts2 = []; for (let i = 0; i <= samples; i++) { const x = x1 + i * step; try { const y1 = fn1(x), y2 = fn2(x); if (typeof y1 === 'number' && isFinite(y1)) pts1.push({ x, y: Math.max(yMin, Math.min(yMax, y1)) }); if (typeof y2 === 'number' && isFinite(y2)) pts2.push({ x, y: Math.max(yMin, Math.min(yMax, y2)) }); } catch {} } if (pts1.length >= 2 && pts2.length >= 2) { ctx.beginPath(); ctx.moveTo(toScreenX(pts1[0].x), toScreenY(pts1[0].y)); pts1.forEach(p => ctx.lineTo(toScreenX(p.x), toScreenY(p.y))); for (let i = pts2.length - 1; i >= 0; i--) ctx.lineTo(toScreenX(pts2[i].x), toScreenY(pts2[i].y)); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.stroke(); } } }
    else if ((type === 'aboveY' || type === 'belowY') && fn1) { const step = (x2 - x1) / samples, pts = [], isAbove = type === 'aboveY', yBound = Math.max(yMin, Math.min(yMax, y)); for (let i = 0; i <= samples; i++) { const x = x1 + i * step; try { const yVal = fn1(x); if (typeof yVal === 'number' && isFinite(yVal) && ((isAbove && yVal >= y) || (!isAbove && yVal <= y))) pts.push({ x, y: Math.max(yMin, Math.min(yMax, yVal)) }); } catch {} } if (pts.length >= 2) { ctx.beginPath(); ctx.moveTo(toScreenX(pts[0].x), toScreenY(yBound)); pts.forEach(p => ctx.lineTo(toScreenX(p.x), toScreenY(p.y))); ctx.lineTo(toScreenX(pts[pts.length - 1].x), toScreenY(yBound)); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.stroke(); } } }
    else if (type === 'xRange') { const sx1 = toScreenX(x1), sx2 = toScreenX(x2); ctx.fillStyle = color; ctx.fillRect(sx1, padding, sx2 - sx1, graphHeight); if (strokeWidth > 0) { ctx.strokeStyle = strokeColor; ctx.lineWidth = strokeWidth; ctx.strokeRect(sx1, padding, sx2 - sx1, graphHeight); } }
  });
  ctx.restore();
}

function curveRenderer(ctx, opts) {
  const { functions, viewport, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, samples = 500, hoveredCurve } = opts;
  if (!functions?.length) return;
  const { xMin, xMax, yMin, yMax } = viewport;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();
  functions.forEach((f, i) => {
    if (f.visible === false) return;
    const { fn, color = DEFAULT_COLORS[i % DEFAULT_COLORS.length], stroke = styles.curve.stroke, pattern = styles.curve.pattern } = f;
    if (!fn) return;
    const pts = [], step = (xMax - xMin) / samples;
    for (let j = 0; j <= samples; j++) { const x = xMin + j * step; try { const y = fn(x); pts.push(typeof y === 'number' && isFinite(y) ? { x, y } : { x, y: null }); } catch { pts.push({ x: xMin + j * step, y: null }); } }
    const isHovered = hoveredCurve?.index === i;
    if (isHovered && styles.curve.hoverGlow) { ctx.strokeStyle = color; ctx.lineWidth = stroke + 6; ctx.globalAlpha = 0.2; ctx.setLineDash(pattern); drawPath(ctx, pts, toScreenX, toScreenY, yMin, yMax); ctx.stroke(); ctx.globalAlpha = 1; }
    ctx.strokeStyle = color; ctx.lineWidth = isHovered ? styles.curve.hoverStroke : stroke; ctx.setLineDash(pattern); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    drawPath(ctx, pts, toScreenX, toScreenY, yMin, yMax); ctx.stroke(); ctx.setLineDash([]);
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

function linesRenderer(ctx, opts) {
  const { viewport, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, asymptotes = [], tangentLine, secantLine } = opts;
  const { xMin, xMax } = viewport;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();
  asymptotes.forEach(x => { if (x < xMin || x > xMax) return; ctx.strokeStyle = styles.line.asymptote.color; ctx.lineWidth = styles.line.asymptote.stroke; ctx.setLineDash(styles.line.asymptote.pattern); ctx.beginPath(); ctx.moveTo(toScreenX(x), padding); ctx.lineTo(toScreenX(x), padding + graphHeight); ctx.stroke(); });
  if (tangentLine) { const { slope, intercept, x0, y0 } = tangentLine; ctx.strokeStyle = styles.line.tangent.color; ctx.lineWidth = styles.line.tangent.stroke; ctx.setLineDash(styles.line.tangent.pattern); ctx.beginPath(); ctx.moveTo(toScreenX(xMin), toScreenY(slope * xMin + intercept)); ctx.lineTo(toScreenX(xMax), toScreenY(slope * xMax + intercept)); ctx.stroke(); ctx.setLineDash([]); ctx.beginPath(); ctx.arc(toScreenX(x0), toScreenY(y0), 5, 0, Math.PI * 2); ctx.fillStyle = styles.line.tangent.color; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); }
  if (secantLine) { const { slope, intercept, x1, y1, x2, y2 } = secantLine; ctx.strokeStyle = styles.line.secant.color; ctx.lineWidth = styles.line.secant.stroke; ctx.setLineDash(styles.line.secant.pattern); ctx.beginPath(); ctx.moveTo(toScreenX(xMin), toScreenY(slope * xMin + intercept)); ctx.lineTo(toScreenX(xMax), toScreenY(slope * xMax + intercept)); ctx.stroke(); ctx.setLineDash([]); [{ x: x1, y: y1 }, { x: x2, y: y2 }].forEach(p => { ctx.beginPath(); ctx.arc(toScreenX(p.x), toScreenY(p.y), 5, 0, Math.PI * 2); ctx.fillStyle = styles.line.secant.color; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); }); }
  ctx.setLineDash([]); ctx.restore();
}

function specialPointsRenderer(ctx, opts) {
  const { specialPoints, padding, graphWidth, graphHeight, toScreenX, toScreenY, styles, labelMode = 'hover', hoveredSpecialPoint } = opts;
  if (!specialPoints?.length) return;
  ctx.save(); ctx.beginPath(); ctx.rect(padding, padding, graphWidth, graphHeight); ctx.clip();
  specialPoints.forEach(pt => {
    const sx = toScreenX(pt.x), sy = toScreenY(pt.y), ps = styles.specialPoint[pt.type] || styles.specialPoint.custom, col = pt.color || ps.fill;
    ctx.beginPath(); ctx.arc(sx, sy, ps.radius, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = ps.stroke; ctx.lineWidth = ps.strokeWidth; ctx.stroke();
    const show = labelMode === 'always' || (labelMode === 'hover' && hoveredSpecialPoint?.x === pt.x && hoveredSpecialPoint?.y === pt.y);
    if (show) {
      let txt; if (pt.type === 'root') txt = `Root: (${pt.x.toFixed(2)}, 0)`; else if (pt.type === 'extremum') txt = `${pt.subtype === 'max' ? 'Max' : 'Min'}: (${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`; else if (pt.type === 'inflection') txt = `Inflection: (${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`; else txt = pt.label || `(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`;
      ctx.font = styles.specialPoint.labelFont; const tw = ctx.measureText(txt).width, lp = styles.specialPoint.labelPadding, lh = 16;
      let lx = sx + ps.radius + 6, ly = sy - lh / 2 - 4; if (lx + tw + lp * 2 > padding + graphWidth) lx = sx - tw - lp * 2 - ps.radius - 6; if (ly < padding) ly = sy + ps.radius + 6;
      ctx.fillStyle = styles.specialPoint.labelBackground; ctx.fillRect(lx, ly, tw + lp * 2, lh); ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.strokeRect(lx, ly, tw + lp * 2, lh); ctx.fillStyle = '#333'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(txt, lx + lp, ly + lh / 2);
    }
  });
  ctx.restore();
}

function legendRenderer(ctx, opts) {
  const { functions, padding, width, height, styles, position = 'top-right' } = opts;
  const vis = functions.filter(f => f.visible !== false && (f.formula || f.label)); if (!vis.length) return;
  ctx.font = styles.legend.font; const lh = 20, boxSz = 12, gap = 8; let maxW = 0; vis.forEach((f, i) => { const w = ctx.measureText(f.formula || f.label || `f${i + 1}`).width; if (w > maxW) maxW = w; });
  const legW = styles.legend.padding * 2 + boxSz + gap + maxW, legH = styles.legend.padding * 2 + vis.length * lh - (lh - boxSz), margin = 10;
  let lx, ly; switch (position) { case 'top-left': lx = padding + margin; ly = padding + margin; break; case 'bottom-left': lx = padding + margin; ly = height - padding - legH - margin; break; case 'bottom-right': lx = width - padding - legW - margin; ly = height - padding - legH - margin; break; default: lx = width - padding - legW - margin; ly = padding + margin; }
  ctx.fillStyle = styles.legend.background; ctx.strokeStyle = styles.legend.border; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(lx, ly, legW, legH, styles.legend.radius); ctx.fill(); ctx.stroke();
  vis.forEach((f, i) => { const idx = functions.indexOf(f), col = f.color || DEFAULT_COLORS[idx % DEFAULT_COLORS.length], txt = f.formula || f.label || `f${idx + 1}`, ey = ly + styles.legend.padding + i * lh; ctx.fillStyle = col; ctx.fillRect(lx + styles.legend.padding, ey, boxSz, boxSz); ctx.fillStyle = styles.legend.color; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(txt, lx + styles.legend.padding + boxSz + gap, ey + boxSz / 2); });
}

function crosshairRenderer(ctx, opts) {
  const { mousePosition, padding, width, height, toScreenX, toScreenY, styles, showCoordinates = true } = opts;
  if (!mousePosition) return;
  const { x, y } = mousePosition, sx = toScreenX(x), sy = toScreenY(y);
  ctx.strokeStyle = styles.crosshair.color; ctx.lineWidth = styles.crosshair.stroke; ctx.setLineDash(styles.crosshair.pattern);
  ctx.beginPath(); ctx.moveTo(sx, padding); ctx.lineTo(sx, height - padding); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(padding, sy); ctx.lineTo(width - padding, sy); ctx.stroke(); ctx.setLineDash([]);
  if (showCoordinates) { const lbl = `(${x.toFixed(2)}, ${y.toFixed(2)})`; ctx.font = styles.crosshair.labelFont; const lw = ctx.measureText(lbl).width + 12, lh = 22; let lx = sx + 12, ly = sy - lh - 8; if (lx + lw > width - padding) lx = sx - lw - 12; if (ly < padding) ly = sy + 12; ctx.fillStyle = styles.crosshair.labelBackground; ctx.strokeStyle = styles.crosshair.labelBorder; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(lx, ly, lw, lh, 4); ctx.fill(); ctx.stroke(); ctx.fillStyle = styles.crosshair.labelColor; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(lbl, lx + lw / 2, ly + lh / 2); }
}

function curveTooltipRenderer(ctx, opts) {
  const { hoveredCurve, toScreenX, toScreenY, padding, width, height, styles } = opts;
  if (!hoveredCurve) return;
  const { x, y, color, label } = hoveredCurve, sx = toScreenX(x), sy = toScreenY(y);
  ctx.beginPath(); ctx.arc(sx, sy, styles.point.radius, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); ctx.strokeStyle = styles.point.strokeColor; ctx.lineWidth = styles.point.stroke; ctx.stroke();
  const txt = `${label}(${x.toFixed(3)}) = ${y.toFixed(3)}`; ctx.font = styles.tooltip.font; const tw = ctx.measureText(txt).width + styles.tooltip.padding * 2, th = 24, r = styles.tooltip.radius;
  let tx = sx + 15, ty = sy - th - 10; if (tx + tw > width - padding) tx = sx - tw - 15; if (ty < padding) ty = sy + 15;
  ctx.fillStyle = styles.tooltip.background; ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, r); ctx.fill(); ctx.stroke();
  ctx.fillStyle = styles.tooltip.color; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(txt, tx + styles.tooltip.padding, ty + th / 2);
}

// ============================================================
// SVG GENERATOR (for ref.getSVG())
// ============================================================
function generateSVG(opts) {
  const { width, height, padding, viewport, gridStep, functions, styles, showGrid, showAxes, showAxisLabels, shadedRegions, asymptotes, tangentLine, secantLine, specialPoints, labelMode, legendPosition, samples = 500 } = opts;
  const { xMin, xMax, yMin, yMax } = viewport;
  const graphWidth = width - padding * 2, graphHeight = height - padding * 2;
  const toScreenX = (x) => padding + ((x - xMin) / (xMax - xMin)) * graphWidth;
  const toScreenY = (y) => padding + ((yMax - y) / (yMax - yMin)) * graphHeight;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n`;
  svg += `  <rect x="0" y="0" width="${width}" height="${height}" fill="${styles.canvas.background}"/>\n`;
  svg += `  <rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}" fill="${styles.graphArea.background}"/>\n`;
  svg += `  <defs><clipPath id="graphClip"><rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}"/></clipPath></defs>\n`;

  if (showGrid) {
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

  // Curves
  svg += `  <g clip-path="url(#graphClip)" fill="none">\n`;
  functions.forEach((f, i) => {
    if (f.visible === false || !f.fn) return;
    const color = f.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length], stroke = f.stroke || styles.curve.stroke, pattern = f.pattern || [];
    const step = (xMax - xMin) / samples;
    let d = '', inPath = false, prevY = null;
    const jump = (yMax - yMin) * 0.5;
    for (let j = 0; j <= samples; j++) {
      const x = xMin + j * step;
      try {
        const y = f.fn(x);
        if (typeof y !== 'number' || !isFinite(y)) { inPath = false; prevY = null; continue; }
        if (prevY !== null && Math.abs(y - prevY) > jump && ((prevY > yMax && y < yMin) || (prevY < yMin && y > yMax))) inPath = false;
        if (!inPath) { d += ` M ${toScreenX(x)} ${toScreenY(y)}`; inPath = true; }
        else d += ` L ${toScreenX(x)} ${toScreenY(y)}`;
        prevY = y;
      } catch { inPath = false; prevY = null; }
    }
    svg += `    <path d="${d.trim()}" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" ${pattern.length ? `stroke-dasharray="${pattern.join(',')}"` : ''}/>\n`;
  });
  svg += `  </g>\n`;

  if (specialPoints?.length) {
    svg += `  <g clip-path="url(#graphClip)">\n`;
    specialPoints.forEach(pt => {
      const ps = styles.specialPoint[pt.type] || styles.specialPoint.custom, col = pt.color || ps.fill;
      svg += `    <circle cx="${toScreenX(pt.x)}" cy="${toScreenY(pt.y)}" r="${ps.radius}" fill="${col}" stroke="${ps.stroke}" stroke-width="${ps.strokeWidth}"/>\n`;
    });
    svg += `  </g>\n`;
  }

  svg += '</svg>';
  return svg;
}

// ============================================================
// COMPONENT: VisualizerCore
// ============================================================
const VisualizerCore = React.forwardRef((props, ref) => {
  const { functions = [], xMin: initXMin, xMax: initXMax, yMin: initYMin, yMax: initYMax, zoom, width = 600, height = 500, padding = 50, showGrid = true, showAxes = true, showAxisLabels = true, enableZoom = true, enablePan = true, showCrosshair = false, showCrosshairCoordinates = true, showCurveTooltip = true, labelMode = 'none', legendPosition = 'top-right', showRoots = false, showExtrema = false, showInflections = false, specialPointLabelMode = 'hover', showAsymptotes = false, tangentAt = null, secantAt = null, shadedRegions = [], customPoints = [], hoverThreshold = 15, samples = 500, onViewportChange, onHover, styles: customStyles = {} } = props;

  const canvasRef = useRef(null);
  const styles = useMemo(() => mergeStyles(DEFAULT_STYLES, customStyles), [customStyles]);
  const normFns = useMemo(() => { if (!functions) return []; if (typeof functions === 'function') return [{ fn: functions }]; return functions.map(f => typeof f === 'function' ? { fn: f } : f); }, [functions]);
  const coordSys = useCoordinateSystem({ initialXMin: initXMin, initialXMax: initXMax, initialYMin: initYMin, initialYMax: initYMax, zoom, canvasWidth: width, canvasHeight: height, padding });

  const specialPoints = useMemo(() => {
    const pts = [], { xMin, xMax, yMin, yMax } = coordSys.viewport;
    normFns.forEach((f, i) => { if (f.visible === false || !f.fn) return; const col = f.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length]; if (showRoots) findRoots(f.fn, xMin, xMax).forEach(p => { if (p.y >= yMin && p.y <= yMax) pts.push({ ...p, color: col }); }); if (showExtrema) findExtrema(f.fn, xMin, xMax).forEach(p => { if (p.y >= yMin && p.y <= yMax) pts.push({ ...p, color: col }); }); if (showInflections) findInflectionPoints(f.fn, xMin, xMax).forEach(p => { if (p.y >= yMin && p.y <= yMax) pts.push({ ...p, color: col }); }); });
    return pts;
  }, [normFns, coordSys.viewport, showRoots, showExtrema, showInflections]);

  const asymptotes = useMemo(() => { if (!showAsymptotes) return []; const all = [], { xMin, xMax } = coordSys.viewport; normFns.forEach(f => { if (f.visible !== false && f.fn) findVerticalAsymptotes(f.fn, xMin, xMax).forEach(x => { if (!all.some(a => Math.abs(a - x) < 0.01)) all.push(x); }); }); return all; }, [normFns, coordSys.viewport, showAsymptotes]);
  const tangentLine = useMemo(() => { if (!tangentAt) return null; const f = normFns[tangentAt.functionIndex]; return f?.fn ? getTangentLine(f.fn, tangentAt.x) : null; }, [normFns, tangentAt]);
  const secantLine = useMemo(() => { if (!secantAt) return null; const f = normFns[secantAt.functionIndex]; return f?.fn ? getSecantLine(f.fn, secantAt.x1, secantAt.x2) : null; }, [normFns, secantAt]);

  const handleVpChange = useCallback(() => { if (onViewportChange) onViewportChange(coordSys.viewport); }, [onViewportChange, coordSys.viewport]);
  const interaction = useInteraction({ toWorld: coordSys.toWorld, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, zoomAt: coordSys.zoomAt, pan: coordSys.pan, isInGraphArea: coordSys.isInGraphArea, enableZoom, enablePan, onHover, onViewportChange: handleVpChange, functions: normFns, specialPoints, hoverThreshold });

  // Expose methods via ref (sandbox-safe - returns data instead of triggering downloads)
  React.useImperativeHandle(ref, () => ({
    getPNGDataURL: () => canvasRef.current?.toDataURL('image/png'),
    getSVG: () => generateSVG({ width, height, padding, viewport: coordSys.viewport, gridStep: coordSys.gridStep, functions: normFns, styles, showGrid, showAxes, showAxisLabels, shadedRegions, asymptotes, tangentLine, secantLine, specialPoints, labelMode, legendPosition, samples }),
    getCanvas: () => canvasRef.current,
    getViewport: () => coordSys.viewport
  }), [width, height, padding, coordSys.viewport, coordSys.gridStep, normFns, styles, showGrid, showAxes, showAxisLabels, shadedRegions, asymptotes, tangentLine, secantLine, specialPoints, labelMode, legendPosition, samples]);

  const render = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = styles.canvas.background; ctx.fillRect(0, 0, width, height);
    gridRenderer(ctx, { viewport: coordSys.viewport, gridStep: coordSys.gridStep, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, canvasWidth: width, canvasHeight: height, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, showGrid, showAxes, showAxisLabels, styles });
    shadedRegionsRenderer(ctx, { shadedRegions, functions: normFns, viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, samples });
    linesRenderer(ctx, { viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, asymptotes, tangentLine, secantLine });
    curveRenderer(ctx, { functions: normFns, viewport: coordSys.viewport, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, samples, hoveredCurve: interaction.hoveredCurve });
    specialPointsRenderer(ctx, { specialPoints, padding, graphWidth: coordSys.graphWidth, graphHeight: coordSys.graphHeight, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, labelMode: specialPointLabelMode, hoveredSpecialPoint: interaction.hoveredSpecialPoint });
    if (labelMode === 'legend' || labelMode === 'both') legendRenderer(ctx, { functions: normFns, padding, width, height, styles, position: legendPosition });
    if (showCrosshair && interaction.isMouseInside) crosshairRenderer(ctx, { mousePosition: interaction.mousePosition, padding, width, height, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, styles, showCoordinates: showCrosshairCoordinates });
    if (showCurveTooltip && interaction.hoveredCurve && !interaction.hoveredSpecialPoint) curveTooltipRenderer(ctx, { hoveredCurve: interaction.hoveredCurve, toScreenX: coordSys.toScreenX, toScreenY: coordSys.toScreenY, padding, width, height, styles });
  }, [coordSys, interaction, normFns, specialPoints, asymptotes, tangentLine, secantLine, shadedRegions, showGrid, showAxes, showAxisLabels, showCrosshair, showCrosshairCoordinates, showCurveTooltip, labelMode, legendPosition, specialPointLabelMode, width, height, padding, styles, samples]);

  useEffect(() => { const id = requestAnimationFrame(render); return () => cancelAnimationFrame(id); }, [render]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ display: 'block', cursor: interaction.hoveredCurve || interaction.hoveredSpecialPoint ? 'crosshair' : interaction.isPanning ? 'grabbing' : enablePan ? 'grab' : 'default' }} {...interaction.handlers} />;
});
VisualizerCore.displayName = 'VisualizerCore';

// ============================================================
// ICONS
// ============================================================
const MaxIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>;
const MinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>;
const DownloadIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>;
const CloseIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>;

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
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }} onClick={onClose}>
      <div style={{ background: 'white', borderRadius: 12, padding: 24, maxWidth: 500, width: '90%', maxHeight: '80vh', overflow: 'auto' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 18 }}>Export Graph</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><CloseIcon /></button>
        </div>

        <div style={{ marginBottom: 20, position: 'relative' }}>
          <h4 style={{ margin: '0 0 8px', fontSize: 14, color: '#666' }}>PNG Preview</h4>
          {/* <img src={pngDataUrl} alt="Graph" style={{ width: '100%', border: '1px solid #eee', borderRadius: 8 }} /> */}
          <Image src={pngDataUrl} alt="Graph" fill unoptimized style={{ objectFit: 'contain', border: '1px solid #eee', borderRadius: 8 }} />
          <p style={{ fontSize: 11, color: '#888', margin: '8px 0 0' }}>Right-click → Save image as...</p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ margin: '0 0 8px', fontSize: 14, color: '#666' }}>SVG Code</h4>
          <textarea value={svgContent} readOnly style={{ width: '100%', height: 100, fontFamily: 'monospace', fontSize: 10, padding: 8, border: '1px solid #ddd', borderRadius: 4, resize: 'vertical' }} />
          <button onClick={() => copyToClipboard(svgContent, 'svg')} style={{ marginTop: 8, padding: '8px 16px', background: copied === 'svg' ? '#2ecc71' : '#677ae4', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12 }}>
            {copied === 'svg' ? '✓ Copied!' : 'Copy SVG'}
          </button>
        </div>

        <p style={{ fontSize: 11, color: '#888', margin: 0 }}>
          Note: In a real environment, you can trigger downloads. This preview works in the sandbox.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// WRAPPER WITH CONTROLS
// ============================================================
function VisualizerWithControls(props) {
  const { defaultWidth = 700, defaultHeight = 550, minWidth = 400, minHeight = 300, ...rest } = props;
  const visualizerRef = useRef(null);
  const [isMax, setIsMax] = useState(false);
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [winSize, setWinSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [exportModal, setExportModal] = useState({ isOpen: false, png: '', svg: '' });

  useEffect(() => { const h = () => setWinSize({ width: window.innerWidth, height: window.innerHeight }); window.addEventListener('resize', h); return () => window.removeEventListener('resize', h); }, []);
  useEffect(() => { const h = e => { if (e.key === 'Escape') { if (exportModal.isOpen) setExportModal({ isOpen: false, png: '', svg: '' }); else if (isMax) setIsMax(false); } }; window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h); }, [isMax, exportModal.isOpen]);

  const cur = isMax ? { width: winSize.width - 40, height: winSize.height - 80 } : size;
  const presets = [{ l: 'S', w: 500, h: 400 }, { l: 'M', w: 700, h: 550 }, { l: 'L', w: 900, h: 700 }, { l: 'XL', w: 1100, h: 850 }];
  const btnStyle = { padding: '6px 10px', border: '1px solid #ddd', background: 'white', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' };
  const actStyle = { ...btnStyle, background: '#677ae4', color: 'white', borderColor: '#677ae4' };

  const handleExport = () => {
    const png = visualizerRef.current?.getPNGDataURL() || '';
    const svg = visualizerRef.current?.getSVG() || '';
    setExportModal({ isOpen: true, png, svg });
  };

  return (
    <div style={isMax ? { position: 'fixed', inset: 0, background: '#1a1a2e', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 } : { background: 'white', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        {!isMax && <div style={{ display: 'flex', gap: 4, marginRight: 8 }}>{presets.map(p => <button key={p.l} onClick={() => setSize({ width: p.w, height: p.h })} style={size.width === p.w && size.height === p.h ? actStyle : btnStyle}>{p.l}</button>)}</div>}
        {!isMax && <div style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 12, color: '#666' }}><input type="number" value={size.width} onChange={e => setSize(s => ({ ...s, width: Math.max(minWidth, +e.target.value || minWidth) }))} style={{ width: 60, padding: 5, border: '1px solid #ddd', borderRadius: 4, fontSize: 12 }} /><span>×</span><input type="number" value={size.height} onChange={e => setSize(s => ({ ...s, height: Math.max(minHeight, +e.target.value || minHeight) }))} style={{ width: 60, padding: 5, border: '1px solid #ddd', borderRadius: 4, fontSize: 12 }} /></div>}
        <button onClick={handleExport} style={btnStyle}><DownloadIcon /> Export</button>
        <button onClick={() => setIsMax(!isMax)} style={{ ...btnStyle, background: isMax ? '#e74c3c' : 'white', color: isMax ? 'white' : 'inherit', borderColor: isMax ? '#e74c3c' : '#ddd' }}>{isMax ? <MinIcon /> : <MaxIcon />}{isMax ? 'Exit' : 'Maximize'}</button>
      </div>
      <VisualizerCore ref={visualizerRef} {...rest} width={cur.width} height={cur.height} />
      <div style={{ marginTop: 8, fontSize: 11, color: isMax ? '#888' : '#999' }}>{cur.width} × {cur.height}</div>
      <ExportModal isOpen={exportModal.isOpen} onClose={() => setExportModal({ isOpen: false, png: '', svg: '' })} pngDataUrl={exportModal.png} svgContent={exportModal.svg} />
    </div>
  );
}

// ============================================================
// DEMO
// ============================================================
export default function Demo() {
  const [showGrid, setShowGrid] = useState(true);
  const [showAxes, setShowAxes] = useState(true);
  const [showCrosshair, setShowCrosshair] = useState(true);
  const [labelMode, setLabelMode] = useState('legend');
  const [viewport, setViewport] = useState({ xMin: -10, xMax: 10, yMin: -10, yMax: 10 });

  const [showRoots, setShowRoots] = useState(true);
  const [showExtrema, setShowExtrema] = useState(true);
  const [showUnderCurve, setShowUnderCurve] = useState(true);
  const [underCurveStart, setUnderCurveStart] = useState(-3);
  const [underCurveEnd, setUnderCurveEnd] = useState(3);

  const functions = [
    { fn: x => 0.1 * x * x - 2, color: '#677ae4', label: 'f', formula: 'f(x) = 0.1x² - 2', visible: true },
    { fn: x => Math.sin(x) * 2, color: '#2ecc71', label: 'g', formula: 'g(x) = 2sin(x)', visible: true }
  ];

  const shadedRegions = showUnderCurve ? [{ type: 'underCurve', functionIndex: 0, xStart: underCurveStart, xEnd: underCurveEnd, color: 'rgba(103, 122, 228, 0.3)' }] : [];

  const chk = { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, fontSize: 13, cursor: 'pointer' };
  const sld = { width: '100%', marginTop: 4 };
  const sec = { marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #eee' };

  return (
    <div style={{ display: 'flex', gap: 20, padding: 16, fontFamily: 'system-ui, sans-serif', background: '#f0f0f0', minHeight: '100vh', alignItems: 'flex-start' }}>
      <div style={{ width: 280, background: 'white', padding: 16, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', flexShrink: 0, maxHeight: '90vh', overflowY: 'auto' }}>
        <h3 style={{ margin: '0 0 4px', color: '#2c3e50', fontSize: 16 }}>VisualizerCore</h3>
        <p style={{ fontSize: 11, color: '#888', marginBottom: 16 }}>Step 8: Export (PNG & SVG)</p>

        <div style={sec}>
          <h4 style={{ margin: '0 0 8px', fontSize: 11, color: '#666', textTransform: 'uppercase' }}>Display</h4>
          <label style={chk}><input type="checkbox" checked={showGrid} onChange={e => setShowGrid(e.target.checked)} /> Grid</label>
          <label style={chk}><input type="checkbox" checked={showAxes} onChange={e => setShowAxes(e.target.checked)} /> Axes</label>
          <label style={chk}><input type="checkbox" checked={showCrosshair} onChange={e => setShowCrosshair(e.target.checked)} /> Crosshair</label>
        </div>

        <div style={sec}>
          <h4 style={{ margin: '0 0 8px', fontSize: 11, color: '#666', textTransform: 'uppercase' }}>Special Points</h4>
          <label style={chk}><input type="checkbox" checked={showRoots} onChange={e => setShowRoots(e.target.checked)} /> Roots</label>
          <label style={chk}><input type="checkbox" checked={showExtrema} onChange={e => setShowExtrema(e.target.checked)} /> Extrema</label>
        </div>

        <div style={sec}>
          <h4 style={{ margin: '0 0 8px', fontSize: 11, color: '#666', textTransform: 'uppercase' }}>Shaded Region</h4>
          <label style={chk}><input type="checkbox" checked={showUnderCurve} onChange={e => setShowUnderCurve(e.target.checked)} /> Under f(x)</label>
          {showUnderCurve && <>
            <label style={{ display: 'block', fontSize: 12, marginTop: 8 }}>x start: {underCurveStart}<input type="range" min="-10" max="10" step="0.5" value={underCurveStart} onChange={e => setUnderCurveStart(+e.target.value)} style={sld} /></label>
            <label style={{ display: 'block', fontSize: 12 }}>x end: {underCurveEnd}<input type="range" min="-10" max="10" step="0.5" value={underCurveEnd} onChange={e => setUnderCurveEnd(+e.target.value)} style={sld} /></label>
          </>}
        </div>

        <div style={{ padding: 12, background: '#e8f5e9', borderRadius: 6, fontSize: 12, marginBottom: 12 }}>
          <strong>💡 Export</strong><br />
          Click &quot;Export&quot; button to get PNG preview and SVG code.
        </div>

        <div style={{ padding: 10, background: '#f8f9fa', borderRadius: 6, fontSize: 11 }}>
          <strong>Viewport</strong><br />x: [{viewport.xMin.toFixed(2)}, {viewport.xMax.toFixed(2)}]<br />y: [{viewport.yMin.toFixed(2)}, {viewport.yMax.toFixed(2)}]
        </div>
      </div>

      <VisualizerWithControls
        functions={functions}
        zoom={10}
        showGrid={showGrid}
        showAxes={showAxes}
        showAxisLabels
        showCrosshair={showCrosshair}
        showCurveTooltip
        labelMode={labelMode}
        showRoots={showRoots}
        showExtrema={showExtrema}
        shadedRegions={shadedRegions}
        onViewportChange={setViewport}
      />
    </div>
  );
}