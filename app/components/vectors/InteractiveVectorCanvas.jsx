import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";

// ============================================================
// DEFAULT STYLES
// ============================================================
const DEFAULT_STYLES = {
  canvas: { background: "#f5f5f5" },
  graphArea: { background: "#ffffff" },
  grid: { color: "#e0e0e0", stroke: 1, pattern: [] },
  axes: { color: "#2c3e50", stroke: 1.5, pattern: [] },
  labels: { color: "#666666", font: "11px system-ui, sans-serif", axisNameFont: "14px system-ui, sans-serif" },
  vector: {
    stroke: 2.5,
    pattern: [],
    tipRadius: 8,
    tipFillOpacity: 0.3,
    tipStroke: 2,
    arrowLength: 12,
    arrowAngle: Math.PI / 6
  },
  colors: { default: "#3498db", hover: "#f39c12", selected: "#e74c3c" }
};

function mergeStyles(defaults, overrides) {
  if (!overrides) return defaults;
  const result = { ...defaults };
  for (const key in overrides) {
    if (overrides[key] && typeof overrides[key] === "object" && !Array.isArray(overrides[key])) {
      result[key] = mergeStyles(defaults[key] || {}, overrides[key]);
    } else {
      result[key] = overrides[key];
    }
  }
  return result;
}

// ============================================================
// COORDINATE SYSTEM HOOK
// ============================================================
function useCoordinateSystem(options = {}) {
  const {
    initialRange = 10,
    canvasWidth = 560,
    canvasHeight = 560,
    padding = 50,
    autoFit = true,
    autoFitPadding = 1.3,
    vectors = []
  } = options;

  const getInitialBounds = useCallback(() => {
    if (autoFit && vectors.length > 0) {
      const maxComp = vectors.reduce((max, v) => {
        return Math.max(max, Math.abs(v.coords[0]), Math.abs(v.coords[1]));
      }, 1);
      const range = niceRange(maxComp * autoFitPadding);
      return { xMin: -range, xMax: range, yMin: -range, yMax: range };
    }
    return { xMin: -initialRange, xMax: initialRange, yMin: -initialRange, yMax: initialRange };
  }, [initialRange, autoFit, autoFitPadding, vectors]);

  const [viewport, setViewport] = useState(getInitialBounds);

  useEffect(() => {
    if (autoFit && vectors.length > 0) {
      const maxComp = vectors.reduce((max, v) => {
        return Math.max(max, Math.abs(v.coords[0]), Math.abs(v.coords[1]));
      }, 1);
      const range = niceRange(maxComp * autoFitPadding);
      setViewport({ xMin: -range, xMax: range, yMin: -range, yMax: range });
    }
  }, [vectors, autoFit, autoFitPadding]);

  const graphWidth = canvasWidth - padding * 2;
  const graphHeight = canvasHeight - padding * 2;

  const toScreenX = useCallback(
    (x) => padding + ((x - viewport.xMin) / (viewport.xMax - viewport.xMin)) * graphWidth,
    [viewport.xMin, viewport.xMax, graphWidth, padding]
  );

  const toScreenY = useCallback(
    (y) => padding + ((viewport.yMax - y) / (viewport.yMax - viewport.yMin)) * graphHeight,
    [viewport.yMin, viewport.yMax, graphHeight, padding]
  );

  const toWorldX = useCallback(
    (screenX) => viewport.xMin + ((screenX - padding) / graphWidth) * (viewport.xMax - viewport.xMin),
    [viewport.xMin, viewport.xMax, graphWidth, padding]
  );

  const toWorldY = useCallback(
    (screenY) => viewport.yMax - ((screenY - padding) / graphHeight) * (viewport.yMax - viewport.yMin),
    [viewport.yMin, viewport.yMax, graphHeight, padding]
  );

  const toWorld = useCallback(
    (screenX, screenY) => ({ x: toWorldX(screenX), y: toWorldY(screenY) }),
    [toWorldX, toWorldY]
  );

  const zoomAt = useCallback((worldX, worldY, factor) => {
    setViewport((v) => ({
      xMin: worldX - (worldX - v.xMin) * factor,
      xMax: worldX + (v.xMax - worldX) * factor,
      yMin: worldY - (worldY - v.yMin) * factor,
      yMax: worldY + (v.yMax - worldY) * factor
    }));
  }, []);

  const pan = useCallback((deltaX, deltaY) => {
    setViewport((v) => ({
      xMin: v.xMin - deltaX,
      xMax: v.xMax - deltaX,
      yMin: v.yMin - deltaY,
      yMax: v.yMax - deltaY
    }));
  }, []);

  const resetViewport = useCallback(() => {
    setViewport(getInitialBounds());
  }, [getInitialBounds]);

  const gridStep = useMemo(() => {
    const range = Math.max(viewport.xMax - viewport.xMin, viewport.yMax - viewport.yMin);
    const rawStep = range / 10;
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const norm = rawStep / mag;
    return norm <= 1.5 ? mag : norm <= 3.5 ? 2 * mag : norm <= 7.5 ? 5 * mag : 10 * mag;
  }, [viewport]);

  const isInGraphArea = useCallback(
    (sx, sy) => sx >= padding && sx <= canvasWidth - padding && sy >= padding && sy <= canvasHeight - padding,
    [padding, canvasWidth, canvasHeight]
  );

  return {
    viewport,
    setViewport,
    graphWidth,
    graphHeight,
    padding,
    canvasWidth,
    canvasHeight,
    toScreenX,
    toScreenY,
    toWorldX,
    toWorldY,
    toWorld,
    zoomAt,
    pan,
    resetViewport,
    gridStep,
    isInGraphArea
  };
}

function niceRange(value) {
  const niceValues = [1, 2, 3, 5, 8, 10, 15, 20, 25, 50, 75, 100, 150, 200, 250, 500, 1000, 2000, 5000];
  return niceValues.find((v) => v >= value) || Math.ceil(value / 100) * 100;
}

// ============================================================
// INTERACTION HOOK
// ============================================================
function useVectorInteraction(options = {}) {
  const {
    coordSys,
    vectors = [],
    enableZoom = true,
    enablePan = true,
    snapToGrid = false,
    snapThreshold = 0.5,
    onVectorChange,
    onVectorSelect,
    onHover,
    onViewportChange
  } = options;

  const { toWorld, toScreenX, toScreenY, zoomAt, pan, isInGraphArea, gridStep } = coordSys;

  const [hoveredId, setHoveredId] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const [draggingVector, setDraggingVector] = useState(null);

  const panStartRef = useRef(null);
  const dragStartRef = useRef(null);

  const snapValue = useCallback(
    (val) => {
      if (!snapToGrid) return val;
      const snap = snapThreshold || gridStep;
      return Math.round(val / snap) * snap;
    },
    [snapToGrid, snapThreshold, gridStep]
  );

  const findVectorAtPosition = useCallback(
    (screenX, screenY, threshold = 15) => {
      for (const vec of vectors) {
        const tipX = toScreenX(vec.coords[0]);
        const tipY = toScreenY(vec.coords[1]);
        const dist = Math.sqrt((tipX - screenX) ** 2 + (tipY - screenY) ** 2);
        if (dist < threshold) {
          return vec;
        }
      }
      return null;
    },
    [vectors, toScreenX, toScreenY]
  );

  const getCanvasPosition = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      const pos = getCanvasPosition(e);

      if (draggingVector && dragStartRef.current) {
        const world = toWorld(pos.x, pos.y);
        const newX = snapValue(world.x);
        const newY = snapValue(world.y);
        if (onVectorChange) {
          onVectorChange(draggingVector.id, [newX, newY]);
        }
        return;
      }

      if (isPanning && panStartRef.current && enablePan) {
        const curr = toWorld(pos.x, pos.y);
        pan(curr.x - panStartRef.current.x, curr.y - panStartRef.current.y);
        if (onViewportChange) onViewportChange();
        return;
      }

      if (isInGraphArea(pos.x, pos.y)) {
        const vec = findVectorAtPosition(pos.x, pos.y);
        const newHoveredId = vec ? vec.id : null;
        if (newHoveredId !== hoveredId) {
          setHoveredId(newHoveredId);
          if (onHover) onHover(newHoveredId);
        }
      } else {
        if (hoveredId !== null) {
          setHoveredId(null);
          if (onHover) onHover(null);
        }
      }
    },
    [
      draggingVector,
      isPanning,
      enablePan,
      toWorld,
      pan,
      snapValue,
      isInGraphArea,
      findVectorAtPosition,
      hoveredId,
      onVectorChange,
      onHover,
      onViewportChange,
      getCanvasPosition
    ]
  );

  const handleMouseDown = useCallback(
    (e) => {
      const pos = getCanvasPosition(e);
      if (!isInGraphArea(pos.x, pos.y)) return;

      const vec = findVectorAtPosition(pos.x, pos.y);

      if (vec) {
        setDraggingVector(vec);
        dragStartRef.current = { x: pos.x, y: pos.y };
        if (onVectorSelect) onVectorSelect(vec.id);
        e.preventDefault();
      } else if (enablePan) {
        setIsPanning(true);
        panStartRef.current = toWorld(pos.x, pos.y);
        e.preventDefault();
      }
    },
    [isInGraphArea, findVectorAtPosition, enablePan, toWorld, onVectorSelect, getCanvasPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
    setDraggingVector(null);
    panStartRef.current = null;
    dragStartRef.current = null;
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    setIsPanning(false);
    setDraggingVector(null);
    panStartRef.current = null;
    dragStartRef.current = null;
    if (onHover) onHover(null);
  }, [onHover]);

  const handleWheel = useCallback(
    (e) => {
      if (!enableZoom) return;
      const pos = getCanvasPosition(e);
      if (!isInGraphArea(pos.x, pos.y)) return;
      e.preventDefault();
      const world = toWorld(pos.x, pos.y);
      zoomAt(world.x, world.y, e.deltaY > 0 ? 1.1 : 0.9);
      if (onViewportChange) onViewportChange();
    },
    [enableZoom, isInGraphArea, toWorld, zoomAt, onViewportChange, getCanvasPosition]
  );

  const handleClick = useCallback(
    (e) => {
      const pos = getCanvasPosition(e);
      if (!isInGraphArea(pos.x, pos.y)) return;
      const vec = findVectorAtPosition(pos.x, pos.y);
      if (!vec && onVectorSelect) {
        onVectorSelect(null);
      }
    },
    [isInGraphArea, findVectorAtPosition, onVectorSelect, getCanvasPosition]
  );

  return {
    hoveredId,
    isPanning,
    draggingVector,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onWheel: handleWheel,
      onClick: handleClick
    }
  };
}

// ============================================================
// CANVAS RENDERER
// ============================================================
function renderCanvas(canvas, options) {
  const {
    coordSys,
    vectors,
    selectedId,
    hoveredId,
    styles,
    showGrid = true,
    showAxes = true,
    showAxisLabels = true
  } = options;

  const ctx = canvas.getContext("2d");
  const { viewport, gridStep, padding, canvasWidth, canvasHeight, graphWidth, graphHeight, toScreenX, toScreenY } = coordSys;
  const { xMin, xMax, yMin, yMax } = viewport;

  // Clear and fill background
  ctx.fillStyle = styles.canvas.background;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Graph area background
  ctx.fillStyle = styles.graphArea.background;
  ctx.fillRect(padding, padding, graphWidth, graphHeight);

  // Grid
  if (showGrid) {
    ctx.strokeStyle = styles.grid.color;
    ctx.lineWidth = styles.grid.stroke;
    ctx.setLineDash(styles.grid.pattern || []);

    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) {
      if (Math.abs(x) < gridStep / 1000) continue;
      ctx.beginPath();
      ctx.moveTo(toScreenX(x), padding);
      ctx.lineTo(toScreenX(x), padding + graphHeight);
      ctx.stroke();
    }

    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) {
      if (Math.abs(y) < gridStep / 1000) continue;
      ctx.beginPath();
      ctx.moveTo(padding, toScreenY(y));
      ctx.lineTo(padding + graphWidth, toScreenY(y));
      ctx.stroke();
    }

    ctx.setLineDash([]);
  }

  // Axes
  if (showAxes) {
    ctx.strokeStyle = styles.axes.color;
    ctx.lineWidth = styles.axes.stroke;
    ctx.setLineDash(styles.axes.pattern || []);

    // X axis
    if (yMin <= 0 && yMax >= 0) {
      ctx.beginPath();
      ctx.moveTo(padding, toScreenY(0));
      ctx.lineTo(padding + graphWidth, toScreenY(0));
      ctx.stroke();
    }

    // Y axis
    if (xMin <= 0 && xMax >= 0) {
      ctx.beginPath();
      ctx.moveTo(toScreenX(0), padding);
      ctx.lineTo(toScreenX(0), padding + graphHeight);
      ctx.stroke();
    }

    ctx.setLineDash([]);
  }

  // Axis labels
  if (showAxisLabels) {
    ctx.fillStyle = styles.labels.color;
    ctx.font = styles.labels.font;

    const fmt = (v) => {
      const r = Math.round(v * 1e6) / 1e6;
      return Math.abs(r - Math.round(r)) < 0.0001 ? Math.round(r).toString() : r.toFixed(1);
    };

    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const xLabelY = yMin <= 0 && yMax >= 0 ? Math.min(toScreenY(0) + 8, canvasHeight - padding + 8) : canvasHeight - padding + 8;

    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) {
      if (Math.abs(x) >= gridStep / 1000) {
        ctx.fillText(fmt(x), toScreenX(x), xLabelY);
      }
    }

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    const yLabelX = xMin <= 0 && xMax >= 0 ? Math.max(toScreenX(0) - 8, padding - 8) : padding - 8;

    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) {
      if (Math.abs(y) >= gridStep / 1000) {
        ctx.fillText(fmt(y), yLabelX, toScreenY(y));
      }
    }

    ctx.font = styles.labels.axisNameFont;
    ctx.fillStyle = styles.axes.color;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText("x", canvasWidth - padding + 10, yMin <= 0 && yMax >= 0 ? toScreenY(0) : padding + graphHeight / 2);

    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("y", xMin <= 0 && xMax >= 0 ? toScreenX(0) : padding + graphWidth / 2, padding - 10);
  }

  // Clip to graph area for vectors
  ctx.save();
  ctx.beginPath();
  ctx.rect(padding, padding, graphWidth, graphHeight);
  ctx.clip();

  // Draw vectors
  const originX = toScreenX(0);
  const originY = toScreenY(0);

  vectors.forEach((vec) => {
    const [vx, vy] = vec.coords;
    const endX = toScreenX(vx);
    const endY = toScreenY(vy);

    const isSelected = selectedId === vec.id;
    const isHovered = hoveredId === vec.id;

    // Determine color
    const color = isSelected
      ? styles.colors.selected
      : isHovered
        ? styles.colors.hover
        : vec.color || styles.colors.default;

    // Determine stroke width
    const strokeWidth = vec.stroke !== undefined ? vec.stroke : styles.vector.stroke;

    // Determine pattern
    const pattern = vec.pattern !== undefined ? vec.pattern : styles.vector.pattern;

    // Determine arrow dimensions
    const arrowLength = vec.arrowLength !== undefined ? vec.arrowLength : styles.vector.arrowLength;
    const arrowAngle = vec.arrowAngle !== undefined ? vec.arrowAngle : styles.vector.arrowAngle;

    // Determine tip style
    const tipRadius = vec.tipRadius !== undefined ? vec.tipRadius : styles.vector.tipRadius;
    const tipFillOpacity = vec.tipFillOpacity !== undefined ? vec.tipFillOpacity : styles.vector.tipFillOpacity;
    const tipStroke = vec.tipStroke !== undefined ? vec.tipStroke : styles.vector.tipStroke;

    // Draw arrow line
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";
    ctx.setLineDash(pattern || []);

    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.setLineDash([]);

    // Draw arrowhead
    const angle = Math.atan2(originY - endY, originX - endX);

    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(
      endX + arrowLength * Math.cos(angle + arrowAngle),
      endY + arrowLength * Math.sin(angle + arrowAngle)
    );
    ctx.lineTo(
      endX + arrowLength * Math.cos(angle - arrowAngle),
      endY + arrowLength * Math.sin(angle - arrowAngle)
    );
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    // Draw draggable tip
    ctx.beginPath();
    ctx.arc(endX, endY, tipRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = tipFillOpacity;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = color;
    ctx.lineWidth = tipStroke;
    ctx.stroke();

    // Draw label
    if (vec.label) {
      ctx.fillStyle = color;
      ctx.font = vec.labelFont || "13px system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";
      ctx.fillText(vec.label, endX + 12, endY - 8);
    }

    // Draw coordinates
    if (vec.showCoords !== false) {
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.7;
      ctx.font = "11px system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(`(${vx.toFixed(2)}, ${vy.toFixed(2)})`, endX + 12, endY + 4);
      ctx.globalAlpha = 1;
    }
  });

  ctx.restore();
}

// ============================================================
// SVG GENERATOR
// ============================================================
function generateSVG(options) {
  const { coordSys, vectors, selectedId, styles, showGrid = true, showAxes = true, showAxisLabels = true } = options;

  const { viewport, gridStep, padding, canvasWidth, canvasHeight, graphWidth, graphHeight, toScreenX, toScreenY } = coordSys;
  const { xMin, xMax, yMin, yMax } = viewport;

  const patternToSVG = (pattern) => {
    if (!pattern || pattern.length === 0) return "";
    return `stroke-dasharray="${pattern.join(",")}"`;
  };

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}">\n`;

  // Background
  svg += `  <rect width="${canvasWidth}" height="${canvasHeight}" fill="${styles.canvas.background}"/>\n`;
  svg += `  <rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}" fill="${styles.graphArea.background}"/>\n`;

  // Clip path
  svg += `  <defs><clipPath id="graphClip"><rect x="${padding}" y="${padding}" width="${graphWidth}" height="${graphHeight}"/></clipPath></defs>\n`;

  // Grid
  if (showGrid) {
    const gridPattern = patternToSVG(styles.grid.pattern);
    svg += `  <g stroke="${styles.grid.color}" stroke-width="${styles.grid.stroke}" ${gridPattern}>\n`;
    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) {
      if (Math.abs(x) >= gridStep / 1000) {
        svg += `    <line x1="${toScreenX(x)}" y1="${padding}" x2="${toScreenX(x)}" y2="${padding + graphHeight}"/>\n`;
      }
    }
    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) {
      if (Math.abs(y) >= gridStep / 1000) {
        svg += `    <line x1="${padding}" y1="${toScreenY(y)}" x2="${padding + graphWidth}" y2="${toScreenY(y)}"/>\n`;
      }
    }
    svg += `  </g>\n`;
  }

  // Axes
  if (showAxes) {
    const axesPattern = patternToSVG(styles.axes.pattern);
    svg += `  <g stroke="${styles.axes.color}" stroke-width="${styles.axes.stroke}" ${axesPattern}>\n`;
    if (yMin <= 0 && yMax >= 0) {
      svg += `    <line x1="${padding}" y1="${toScreenY(0)}" x2="${padding + graphWidth}" y2="${toScreenY(0)}"/>\n`;
    }
    if (xMin <= 0 && xMax >= 0) {
      svg += `    <line x1="${toScreenX(0)}" y1="${padding}" x2="${toScreenX(0)}" y2="${padding + graphHeight}"/>\n`;
    }
    svg += `  </g>\n`;
  }

  // Axis labels
  if (showAxisLabels) {
    const fmt = (v) => {
      const r = Math.round(v * 1e6) / 1e6;
      return Math.abs(r - Math.round(r)) < 0.0001 ? Math.round(r).toString() : r.toFixed(1);
    };

    svg += `  <g fill="${styles.labels.color}" font-family="system-ui, sans-serif" font-size="11">\n`;

    const xLabelY = yMin <= 0 && yMax >= 0 ? toScreenY(0) + 18 : canvasHeight - padding + 18;
    for (let x = Math.ceil(xMin / gridStep) * gridStep; x <= xMax; x += gridStep) {
      if (Math.abs(x) >= gridStep / 1000) {
        svg += `    <text x="${toScreenX(x)}" y="${xLabelY}" text-anchor="middle">${fmt(x)}</text>\n`;
      }
    }

    const yLabelX = xMin <= 0 && xMax >= 0 ? toScreenX(0) - 10 : padding - 10;
    for (let y = Math.ceil(yMin / gridStep) * gridStep; y <= yMax; y += gridStep) {
      if (Math.abs(y) >= gridStep / 1000) {
        svg += `    <text x="${yLabelX}" y="${toScreenY(y) + 4}" text-anchor="end">${fmt(y)}</text>\n`;
      }
    }

    svg += `  </g>\n`;

    // Axis names
    svg += `  <g fill="${styles.axes.color}" font-family="system-ui, sans-serif" font-size="14">\n`;
    svg += `    <text x="${canvasWidth - padding + 10}" y="${yMin <= 0 && yMax >= 0 ? toScreenY(0) + 5 : padding + graphHeight / 2}">x</text>\n`;
    svg += `    <text x="${xMin <= 0 && xMax >= 0 ? toScreenX(0) : padding + graphWidth / 2}" y="${padding - 10}" text-anchor="middle">y</text>\n`;
    svg += `  </g>\n`;
  }

  // Vectors
  const originX = toScreenX(0);
  const originY = toScreenY(0);

  svg += `  <g clip-path="url(#graphClip)">\n`;
  vectors.forEach((vec) => {
    const [vx, vy] = vec.coords;
    const endX = toScreenX(vx);
    const endY = toScreenY(vy);
    const color = selectedId === vec.id ? styles.colors.selected : vec.color || styles.colors.default;
    const strokeWidth = vec.stroke !== undefined ? vec.stroke : styles.vector.stroke;
    const pattern = vec.pattern !== undefined ? vec.pattern : styles.vector.pattern;
    const arrowLength = vec.arrowLength !== undefined ? vec.arrowLength : styles.vector.arrowLength;
    const arrowAngle = vec.arrowAngle !== undefined ? vec.arrowAngle : styles.vector.arrowAngle;

    const vecPattern = patternToSVG(pattern);

    // Arrow line
    svg += `    <line x1="${originX}" y1="${originY}" x2="${endX}" y2="${endY}" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" ${vecPattern}/>\n`;

    // Arrowhead
    const angle = Math.atan2(originY - endY, originX - endX);
    const p1x = endX + arrowLength * Math.cos(angle + arrowAngle);
    const p1y = endY + arrowLength * Math.sin(angle + arrowAngle);
    const p2x = endX + arrowLength * Math.cos(angle - arrowAngle);
    const p2y = endY + arrowLength * Math.sin(angle - arrowAngle);
    svg += `    <polygon points="${endX},${endY} ${p1x},${p1y} ${p2x},${p2y}" fill="${color}"/>\n`;

    // Label
    if (vec.label) {
      svg += `    <text x="${endX + 12}" y="${endY - 8}" fill="${color}" font-size="13" font-family="system-ui, sans-serif">${vec.label}</text>\n`;
    }

    // Coordinates
    if (vec.showCoords !== false) {
      svg += `    <text x="${endX + 12}" y="${endY + 14}" fill="${color}" fill-opacity="0.7" font-size="11" font-family="system-ui, sans-serif">(${vx.toFixed(2)}, ${vy.toFixed(2)})</text>\n`;
    }
  });
  svg += `  </g>\n`;

  svg += "</svg>";
  return svg;
}

// ============================================================
// ICONS
// ============================================================
const MaxIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const MinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const ResetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

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
      console.error("Copy failed", e);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          borderRadius: 12,
          padding: 24,
          maxWidth: 500,
          width: "90%",
          maxHeight: "80vh",
          overflow: "auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 18 }}>Export Vectors</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
            <CloseIcon />
          </button>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ margin: "0 0 8px", fontSize: 14, color: "#666" }}>PNG Preview</h4>
          <img src={pngDataUrl} alt="Vectors" style={{ width: "100%", border: "1px solid #eee", borderRadius: 8 }} />
          <p style={{ fontSize: 11, color: "#888", margin: "8px 0 0" }}>Right-click → Save image as...</p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ margin: "0 0 8px", fontSize: 14, color: "#666" }}>SVG Code</h4>
          <textarea
            value={svgContent}
            readOnly
            style={{
              width: "100%",
              height: 100,
              fontFamily: "monospace",
              fontSize: 10,
              padding: 8,
              border: "1px solid #ddd",
              borderRadius: 4,
              resize: "vertical"
            }}
          />
          <button
            onClick={() => copyToClipboard(svgContent, "svg")}
            style={{
              marginTop: 8,
              padding: "8px 16px",
              background: copied === "svg" ? "#2ecc71" : "#3498db",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 12
            }}
          >
            {copied === "svg" ? "✓ Copied!" : "Copy SVG"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CORE COMPONENT
// ============================================================
const InteractiveVectorCanvasCore = React.forwardRef((props, ref) => {
  const {
    vectors = [],
    selectedId = null,
    width = 560,
    height = 560,
    padding = 50,
    initialRange = 10,
    autoFit = true,
    autoFitPadding = 1.3,
    showGrid = true,
    showAxes = true,
    showAxisLabels = true,
    enableZoom = true,
    enablePan = true,
    snapToGrid = false,
    snapThreshold = 0.5,
    styles: customStyles = {},
    onVectorChange,
    onVectorSelect,
    onHover,
    onViewportChange
  } = props;

  const canvasRef = useRef(null);
  const styles = useMemo(() => mergeStyles(DEFAULT_STYLES, customStyles), [customStyles]);

  const coordSys = useCoordinateSystem({
    initialRange,
    canvasWidth: width,
    canvasHeight: height,
    padding,
    autoFit,
    autoFitPadding,
    vectors
  });

  const interaction = useVectorInteraction({
    coordSys,
    vectors,
    enableZoom,
    enablePan,
    snapToGrid,
    snapThreshold,
    onVectorChange,
    onVectorSelect,
    onHover,
    onViewportChange
  });

  React.useImperativeHandle(
    ref,
    () => ({
      getPNGDataURL: () => canvasRef.current?.toDataURL("image/png"),
      getSVG: () => generateSVG({ coordSys, vectors, selectedId, styles, showGrid, showAxes, showAxisLabels }),
      getCanvas: () => canvasRef.current,
      getViewport: () => coordSys.viewport,
      resetViewport: () => coordSys.resetViewport()
    }),
    [coordSys, vectors, selectedId, styles, showGrid, showAxes, showAxisLabels]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const render = () => {
      renderCanvas(canvas, {
        coordSys,
        vectors,
        selectedId,
        hoveredId: interaction.hoveredId,
        styles,
        showGrid,
        showAxes,
        showAxisLabels
      });
    };

    const id = requestAnimationFrame(render);
    return () => cancelAnimationFrame(id);
  }, [coordSys, vectors, selectedId, interaction.hoveredId, styles, showGrid, showAxes, showAxisLabels]);

  const getCursor = () => {
    if (interaction.draggingVector) return "grabbing";
    if (interaction.hoveredId) return "grab";
    if (interaction.isPanning) return "grabbing";
    if (enablePan) return "default";
    return "default";
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display: "block", cursor: getCursor() }}
      {...interaction.handlers}
    />
  );
});
InteractiveVectorCanvasCore.displayName = 'InteractiveVectorCanvasCore';
// ============================================================
// WRAPPER WITH CONTROLS
// ============================================================
function InteractiveVectorCanvas(props) {
  const {
    defaultWidth = 560,
    defaultHeight = 560,
    minWidth = 300,
    minHeight = 300,
    showControls = true,
    ...coreProps
  } = props;

  const coreRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [winSize, setWinSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [exportModal, setExportModal] = useState({ isOpen: false, png: "", svg: "" });

  useEffect(() => {
    const handleResize = () => setWinSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (exportModal.isOpen) setExportModal({ isOpen: false, png: "", svg: "" });
        else if (isMaximized) setIsMaximized(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMaximized, exportModal.isOpen]);

  const currentSize = isMaximized
    ? { width: winSize.width - 40, height: winSize.height - 100 }
    : size;

  const presets = [
    { label: "S", width: 400, height: 400 },
    { label: "M", width: 560, height: 560 },
    { label: "L", width: 700, height: 700 },
    { label: "XL", width: 900, height: 900 }
  ];

  const btnStyle = {
    padding: "6px 10px",
    border: "1px solid #ddd",
    background: "white",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    gap: 4
  };

  const activeStyle = { ...btnStyle, background: "#3498db", color: "white", borderColor: "#3498db" };

  const handleExport = () => {
    const png = coreRef.current?.getPNGDataURL() || "";
    const svg = coreRef.current?.getSVG() || "";
    setExportModal({ isOpen: true, png, svg });
  };

  const handleReset = () => {
    coreRef.current?.resetViewport();
  };

  if (!showControls) {
    return <InteractiveVectorCanvasCore ref={coreRef} {...coreProps} width={defaultWidth} height={defaultHeight} />;
  }

  return (
    <div
      style={
        isMaximized
          ? {
              position: "fixed",
              inset: 0,
              background: "#1a1a2e",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 20
            }
          : {
              background: "white",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: 16,
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center"
            }
      }
    >
      <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
        {!isMaximized && (
          <div style={{ display: "flex", gap: 4, marginRight: 8 }}>
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => setSize({ width: p.width, height: p.height })}
                style={size.width === p.width && size.height === p.height ? activeStyle : btnStyle}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        {!isMaximized && (
          <div style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 12, color: "#666" }}>
            <input
              type="number"
              value={size.width}
              onChange={(e) => setSize((s) => ({ ...s, width: Math.max(minWidth, +e.target.value || minWidth) }))}
              style={{ width: 60, padding: 5, border: "1px solid #ddd", borderRadius: 4, fontSize: 12 }}
            />
            <span>×</span>
            <input
              type="number"
              value={size.height}
              onChange={(e) => setSize((s) => ({ ...s, height: Math.max(minHeight, +e.target.value || minHeight) }))}
              style={{ width: 60, padding: 5, border: "1px solid #ddd", borderRadius: 4, fontSize: 12 }}
            />
          </div>
        )}

        <button onClick={handleReset} style={btnStyle}>
          <ResetIcon /> Reset
        </button>

        <button onClick={handleExport} style={btnStyle}>
          <DownloadIcon /> Export
        </button>

        <button
          onClick={() => setIsMaximized(!isMaximized)}
          style={{
            ...btnStyle,
            background: isMaximized ? "#e74c3c" : "white",
            color: isMaximized ? "white" : "inherit",
            borderColor: isMaximized ? "#e74c3c" : "#ddd"
          }}
        >
          {isMaximized ? <MinIcon /> : <MaxIcon />}
          {isMaximized ? "Exit" : "Max"}
        </button>
      </div>

      <InteractiveVectorCanvasCore ref={coreRef} {...coreProps} width={currentSize.width} height={currentSize.height} />

      <div style={{ marginTop: 8, fontSize: 11, color: isMaximized ? "#888" : "#999" }}>
        {currentSize.width} × {currentSize.height}
      </div>

      <ExportModal
        isOpen={exportModal.isOpen}
        onClose={() => setExportModal({ isOpen: false, png: "", svg: "" })}
        pngDataUrl={exportModal.png}
        svgContent={exportModal.svg}
      />
    </div>
  );
}

export default InteractiveVectorCanvas;

export { InteractiveVectorCanvasCore, useCoordinateSystem, useVectorInteraction };