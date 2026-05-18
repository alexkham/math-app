'use client';

import React, { useRef, useLayoutEffect, useState, useCallback, useEffect, useId } from 'react';

// ===========================================================
// MatrixCoreEnhanced
//
// Adds optional `stepTitle` / `stepFormula` scene fields to the
// step-log surface (ScenePlayer). Caption (SceneCanvas) keeps
// reading `title` / `formula`. When a scene declares both pairs,
// the wrapper can put a static header in the caption and a
// dynamic per-scene running formula in the step log.
//
// Overlay types: 'cell-arrow', 'cell-arrow-curve',
// 'diagonal-axis', 'group-bracket' (all unchanged from v3).
// ===========================================================

export const DEFAULT_HIGHLIGHTS = {
  primary:       { bg: '#dbeafe', border: '#3b82f6', borderWidth: 2 },
  secondary:     { bg: '#e2e8f0', border: '#475569', borderWidth: 2 },
  accent:        { bg: '#dcfce7', border: '#22c55e', borderWidth: 2 },
  muted:         { bg: '#f1f5f9', border: '#cbd5e1', borderWidth: 2 },

  row:           { bg: '#dbeafe', border: '#3b82f6', borderWidth: 2 },
  col:           { bg: '#e2e8f0', border: '#475569', borderWidth: 2 },
  target:        { bg: '#dcfce7', border: '#22c55e', borderWidth: 2 },
  targetPending: { bg: 'transparent', border: '#22c55e', borderWidth: 2, dashed: true },
  pairA:         { bg: '#bfdbfe', border: '#2563eb', borderWidth: 2, scale: 1.06 },
  pairB:         { bg: '#cbd5e1', border: '#334155', borderWidth: 2, scale: 1.06 },

  none:          { bg: '#fafafa', border: '#e5e7eb', borderWidth: 2 }
};

export const DEFAULT_OVERLAY_COLORS = {
  primary:   '#2563eb',
  secondary: '#475569',
  accent:    '#16a34a',
  muted:     '#9ca3af'
};

// ===========================================================
// MatrixRenderer
// ===========================================================
export function MatrixRenderer({
  matrixId,
  symbol = 'a',
  rows = 3,
  cols = 3,
  label = null,
  transpose = false,
  cellOverrides = {},
  highlights = {},
  bracketColor = '#6b7280',
  bracketType = 'square',
  cellSize = 'auto',
  fontSize = 'auto',
  showDimensions = true,
  dimStartAt = 1,
  hoverable = false,
  onCellHover = null,
  onCellLeave = null,
  onCellClick = null,
  highlightStyles = DEFAULT_HIGHLIGHTS
}) {
  const displayRows = transpose ? cols : rows;
  const displayCols = transpose ? rows : cols;

  const maxDim = Math.max(displayRows, displayCols);
  const cellPx = cellSize === 'auto'
    ? (maxDim <= 3 ? 58 : maxDim === 4 ? 51 : 44)
    : cellSize;
  const fontPx = fontSize === 'auto'
    ? (maxDim <= 3 ? 17 : maxDim === 4 ? 14 : 13)
    : fontSize;

  const resolveStyle = (name) => {
    if (!name) return null;
    return highlightStyles[name] || null;
  };

  const getCellStyle = (i, j) => {
    if (highlights.cells) {
      const hit = highlights.cells.find(([r, c]) => r === i && c === j);
      if (hit) {
        const st = resolveStyle(hit[2]);
        if (st) return st;
      }
    }
    if (highlights.rows) {
      const hit = highlights.rows.find(([r]) => r === i);
      if (hit) {
        const st = resolveStyle(hit[1]);
        if (st) return st;
      }
    }
    if (highlights.cols) {
      const hit = highlights.cols.find(([c]) => c === j);
      if (hit) {
        const st = resolveStyle(hit[1]);
        if (st) return st;
      }
    }
    if (highlights.diagonal && i === j) {
      const styleName = typeof highlights.diagonal === 'string' ? highlights.diagonal : 'primary';
      const st = resolveStyle(styleName);
      if (st) return st;
    }
    return resolveStyle('none') || DEFAULT_HIGHLIGHTS.none;
  };

  const renderCellContent = (i, j) => {
    const origI = transpose ? j : i;
    const origJ = transpose ? i : j;
    const key = `${origI},${origJ}`;
    const override = cellOverrides[key];

    if (override?.empty) {
      return <span style={{ color: '#cbd5e1' }}>?</span>;
    }

    if (override?.display !== undefined) {
      return (
        <span style={{
          fontFamily: '\'Cambria Math\', \'Latin Modern Math\', Georgia, serif',
          fontStyle: override.fontStyle !== undefined ? override.fontStyle : 'italic',
          ...(override.style || {})
        }}>
          {override.display}
        </span>
      );
    }

    return (
      <span style={{
        fontFamily: '\'Cambria Math\', \'Latin Modern Math\', Georgia, serif',
        fontStyle: 'italic'
      }}>
        {symbol}
        <span style={{ fontSize: '0.65em', verticalAlign: 'sub', lineHeight: 0, fontStyle: 'italic' }}>
          {origI + dimStartAt},{origJ + dimStartAt}
        </span>
      </span>
    );
  };

  const renderBracket = (side) => {
    const heightPx = displayRows * (cellPx + 3) - 3;
    const baseStyle = {
      width: '8px',
      height: heightPx + 'px',
      flexShrink: 0
    };

    if (bracketType === 'square') {
      return (
        <div style={{
          ...baseStyle,
          borderTop: `2.5px solid ${bracketColor}`,
          borderBottom: `2.5px solid ${bracketColor}`,
          [side === 'left' ? 'borderLeft' : 'borderRight']: `2.5px solid ${bracketColor}`,
          borderRadius: side === 'left' ? '4px 0 0 4px' : '0 4px 4px 0'
        }} />
      );
    }
    if (bracketType === 'round') {
      return (
        <div style={{
          ...baseStyle,
          width: '10px',
          border: `2.5px solid ${bracketColor}`,
          [side === 'left' ? 'borderRight' : 'borderLeft']: 'none',
          borderRadius: side === 'left' ? '50% 0 0 50%' : '0 50% 50% 0'
        }} />
      );
    }
    if (bracketType === 'bars') {
      return (
        <div style={{
          ...baseStyle,
          width: '4px',
          [side === 'left' ? 'borderLeft' : 'borderRight']: `3px solid ${bracketColor}`
        }} />
      );
    }
    return null;
  };

  const handleCellEnter = (i, j) => {
    if (hoverable && onCellHover) {
      const oi = transpose ? j : i;
      const oj = transpose ? i : j;
      onCellHover(oi, oj, matrixId);
    }
  };

  const handleCellLeave = () => {
    if (hoverable && onCellLeave) onCellLeave(matrixId);
  };

  const handleCellClick = (i, j) => {
    if (onCellClick) {
      const oi = transpose ? j : i;
      const oj = transpose ? i : j;
      onCellClick(oi, oj, matrixId);
    }
  };

  return (
    <div
      data-matrix-id={matrixId}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {(label !== null || showDimensions) && (
        <div style={{
          marginBottom: '6px',
          fontSize: '15px',
          fontWeight: 600,
          color: '#374151'
        }}>
          {label !== null && (
            <span style={{
              fontFamily: '\'Cambria Math\', Georgia, serif',
              fontStyle: 'italic'
            }}>
              {label}
            </span>
          )}
          {label !== null && transpose && (
            <span style={{ fontSize: '10px', verticalAlign: 'super', fontStyle: 'normal' }}>T</span>
          )}
          {showDimensions && (
            <span style={{
              fontStyle: 'normal',
              fontSize: '12px',
              color: '#94a3b8',
              marginLeft: label !== null ? '6px' : 0
            }}>
              {displayRows}&times;{displayCols}
            </span>
          )}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {renderBracket('left')}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {Array(displayRows).fill(0).map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '3px' }}>
              {Array(displayCols).fill(0).map((_, j) => {
                const st = getCellStyle(i, j);

                const cellInlineStyle = {
                  width: cellPx + 'px',
                  height: cellPx + 'px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: fontPx + 'px',
                  backgroundColor: st.bg,
                  border: `${st.borderWidth || 2}px ${st.dashed ? 'dashed' : 'solid'} ${st.border}`,
                  borderRadius: '4px',
                  transform: st.scale ? `scale(${st.scale})` : 'none',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease',
                  cursor: (hoverable && onCellHover) || onCellClick ? 'pointer' : 'default',
                  userSelect: 'none'
                };

                return (
                  <div
                    key={j}
                    data-row={i}
                    data-col={j}
                    style={cellInlineStyle}
                    onMouseEnter={() => handleCellEnter(i, j)}
                    onMouseLeave={handleCellLeave}
                    onClick={() => handleCellClick(i, j)}
                  >
                    {renderCellContent(i, j)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {renderBracket('right')}
      </div>
    </div>
  );
}

// ===========================================================
// Operator
// ===========================================================
function Operator({ symbol, size = 31, color = '#6b7280' }) {
  const symbolMap = { '*': '·', '->': '→', '=>': '⇒', 'T': 'ᵀ' };
  return (
    <span style={{
      fontSize: size + 'px',
      color: color,
      fontWeight: 'bold',
      margin: '0 4px',
      userSelect: 'none',
      lineHeight: 1
    }}>
      {symbolMap[symbol] || symbol}
    </span>
  );
}

// ===========================================================
// SceneCanvas
// ===========================================================
export function SceneCanvas({
  scene,
  highlightStyles = DEFAULT_HIGHLIGHTS,
  overlayColors = DEFAULT_OVERLAY_COLORS,
  minHeight = 280,
  background = '#fafafa',
  showCaption = true,
  captionMinHeight = 60
}) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [overlayElements, setOverlayElements] = useState([]);
  const idPrefix = useId().replace(/:/g, '');

  const hasScene = scene && scene.matrices && scene.layout;

  const recomputeOverlays = useCallback(() => {
    if (!containerRef.current || !scene || !scene.overlays || scene.overlays.length === 0) {
      setOverlayElements([]);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const els = [];

    scene.overlays.forEach((ov) => {
      if (ov.type === 'cell-arrow' || ov.type === 'cell-arrow-curve') {
        const fromCell = containerRef.current.querySelector(
          `[data-matrix-id="${ov.from.matrix}"] [data-row="${ov.from.row}"][data-col="${ov.from.col}"]`
        );
        const toCell = containerRef.current.querySelector(
          `[data-matrix-id="${ov.to.matrix}"] [data-row="${ov.to.row}"][data-col="${ov.to.col}"]`
        );
        if (!fromCell || !toCell) return;

        const fr = fromCell.getBoundingClientRect();
        const tr = toCell.getBoundingClientRect();
        const x1 = fr.left + fr.width / 2 - containerRect.left;
        const y1 = fr.top + fr.height / 2 - containerRect.top;
        const x2 = tr.left + tr.width / 2 - containerRect.left;
        const y2 = tr.top + tr.height / 2 - containerRect.top;

        const color = ov.color || overlayColors[ov.style] || overlayColors.primary;
        const dashed = ov.dashed !== false;
        const width = ov.width || 2;

        if (ov.type === 'cell-arrow') {
          els.push({ kind: 'line', x1, y1, x2, y2, color, dashed, width });
        } else {
          const curveOffset = ov.curveOffset || 40;
          const direction = ov.curveDirection || 'up';
          const mx = (x1 + x2) / 2;
          const my = direction === 'down'
            ? Math.max(y1, y2) + curveOffset
            : Math.min(y1, y2) - curveOffset;
          els.push({
            kind: 'curve',
            path: `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`,
            color, dashed, width
          });
        }
      }

      if (ov.type === 'diagonal-axis') {
        const matrixEl = containerRef.current.querySelector(
          `[data-matrix-id="${ov.matrix}"]`
        );
        if (!matrixEl) return;

        let k = 0;
        while (matrixEl.querySelector(`[data-row="${k}"][data-col="${k}"]`)) k++;
        const lastK = k - 1;
        if (lastK < 0) return;

        const firstCell = matrixEl.querySelector('[data-row="0"][data-col="0"]');
        const lastCell  = matrixEl.querySelector(`[data-row="${lastK}"][data-col="${lastK}"]`);
        if (!firstCell || !lastCell) return;

        const fr = firstCell.getBoundingClientRect();
        const lr = lastCell.getBoundingClientRect();

        const x1 = fr.left   - containerRect.left;
        const y1 = fr.top    - containerRect.top;
        const x2 = lr.right  - containerRect.left;
        const y2 = lr.bottom - containerRect.top;

        const color = ov.color || overlayColors[ov.style] || overlayColors.primary;
        const dashed = ov.dashed !== false;
        const width = ov.width || 2.5;

        els.push({ kind: 'axis-line', x1, y1, x2, y2, color, dashed, width });
      }

      if (ov.type === 'group-bracket') {
        const ids = ov.matrices || [];
        const rects = ids
          .map((id) => containerRef.current.querySelector(`[data-matrix-id="${id}"]`))
          .filter(Boolean)
          .map((el) => el.getBoundingClientRect());
        if (rects.length === 0) return;

        const padding = ov.padding != null ? ov.padding : 14;
        const topExtra = ov.labelOffset != null ? ov.labelOffset : 6;

        const minX  = Math.min(...rects.map((r) => r.left))  - containerRect.left - padding;
        const minY  = Math.min(...rects.map((r) => r.top))   - containerRect.top  - padding - topExtra;
        const maxX  = Math.max(...rects.map((r) => r.right)) - containerRect.left + padding;
        const maxY  = Math.max(...rects.map((r) => r.bottom)) - containerRect.top  + padding;

        const color = ov.color || overlayColors[ov.style] || overlayColors.primary;
        const dashed = ov.variant !== 'solid';

        els.push({
          kind: 'group-bracket',
          x: minX,
          y: minY,
          w: maxX - minX,
          h: maxY - minY,
          color,
          dashed,
          label: ov.label || null
        });
      }
    });

    if (svgRef.current) {
      svgRef.current.setAttribute('width', containerRect.width);
      svgRef.current.setAttribute('height', containerRect.height);
      svgRef.current.setAttribute('viewBox', `0 0 ${containerRect.width} ${containerRect.height}`);
    }

    setOverlayElements(els);
  }, [scene, overlayColors]);

  useLayoutEffect(() => {
    recomputeOverlays();
  }, [recomputeOverlays]);

  useEffect(() => {
    const handleResize = () => recomputeOverlays();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [recomputeOverlays]);

  if (!hasScene) {
    return (
      <div style={{
        minHeight: minHeight + 'px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8',
        fontStyle: 'italic',
        background: background,
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        No scene to display
      </div>
    );
  }

  const tintColor = (hex) => `${hex}1A`;

  const svgEls = overlayElements.filter((e) => e.kind !== 'group-bracket');
  const bracketEls = overlayElements.filter((e) => e.kind === 'group-bracket');

  const usedColors = Array.from(new Set(svgEls.map((e) => e.color)));
  const markerId = (color) => `${idPrefix}-arrow-${color.replace('#', '')}`;

  return (
    <div style={{ width: '100%', minWidth: 0, overflow: 'hidden' }}>
      {showCaption && (scene.title || scene.formula) && (
        <div style={{
          background: '#f1f5f9',
          borderRadius: '8px',
          padding: '15px 20px',
          marginBottom: '16px',
          borderLeft: '4px solid #2563eb',
          minHeight: captionMinHeight + 'px'
        }}>
          {scene.title && (
            <div
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#1e40af',
                marginBottom: '6px',
                fontFamily: '\'Cambria Math\', Georgia, serif'
              }}
              dangerouslySetInnerHTML={{ __html: scene.title }}
            />
          )}
          {scene.formula && (
            <div
              style={{
                fontFamily: '\'Cambria Math\', Georgia, serif',
                fontSize: '17px',
                color: '#374151',
                lineHeight: 1.5
              }}
              dangerouslySetInnerHTML={{ __html: scene.formula }}
            />
          )}
        </div>
      )}

      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          minWidth: 0,
          minHeight: minHeight + 'px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          rowGap: '32px',
          padding: '32px 14px',
          background: background,
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        {scene.layout.map((item, idx) => {
          if (item.type === 'matrix') {
            const spec = scene.matrices[item.ref] || {};
            const sceneHighlights = (scene.highlights && scene.highlights[item.ref]) || {};
            return (
              <MatrixRenderer
                key={`${item.ref}-${idx}`}
                matrixId={item.ref}
                {...spec}
                highlights={sceneHighlights}
                highlightStyles={highlightStyles}
              />
            );
          }
          if (item.type === 'operator') {
            return (
              <Operator
                key={`op-${idx}`}
                symbol={item.symbol}
                size={item.size}
                color={item.color}
              />
            );
          }
          return null;
        })}

        {bracketEls.map((el, idx) => (
          <div
            key={`gb-${idx}`}
            style={{
              position: 'absolute',
              left: el.x + 'px',
              top: el.y + 'px',
              width: el.w + 'px',
              height: el.h + 'px',
              border: `2px ${el.dashed ? 'dashed' : 'solid'} ${el.color}`,
              borderRadius: '10px',
              background: tintColor(el.color),
              pointerEvents: 'none',
              zIndex: 4,
              boxSizing: 'border-box'
            }}
          >
            {el.label && (
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white',
                  border: `1.5px solid ${el.color}`,
                  borderRadius: '4px',
                  padding: '2px 10px',
                  fontFamily: '\'Cambria Math\', Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '14px',
                  color: el.color,
                  whiteSpace: 'nowrap',
                  lineHeight: 1.2
                }}
                dangerouslySetInnerHTML={{ __html: el.label }}
              />
            )}
          </div>
        ))}

        <svg
          ref={svgRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {usedColors.map((color) => (
              <marker
                key={color}
                id={markerId(color)}
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L9,3 z" fill={color} />
              </marker>
            ))}
          </defs>
          {svgEls.map((el, idx) => {
            if (el.kind === 'axis-line') {
              return (
                <line
                  key={idx}
                  x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2}
                  stroke={el.color}
                  strokeWidth={el.width}
                  strokeDasharray={el.dashed ? '6 4' : 'none'}
                  opacity="0.7"
                />
              );
            }

            const dashArray = el.dashed ? '5 3' : 'none';
            const me = `url(#${markerId(el.color)})`;

            if (el.kind === 'line') {
              return (
                <line
                  key={idx}
                  x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2}
                  stroke={el.color}
                  strokeWidth={el.width}
                  strokeDasharray={dashArray}
                  markerEnd={me}
                >
                  {el.dashed && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0" to="-16" dur="0.6s"
                      repeatCount="indefinite"
                    />
                  )}
                </line>
              );
            }
            if (el.kind === 'curve') {
              return (
                <path
                  key={idx}
                  d={el.path}
                  fill="none"
                  stroke={el.color}
                  strokeWidth={el.width}
                  strokeDasharray={dashArray}
                  markerEnd={me}
                >
                  {el.dashed && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0" to="-16" dur="0.6s"
                      repeatCount="indefinite"
                    />
                  )}
                </path>
              );
            }
            return null;
          })}
        </svg>
      </div>
    </div>
  );
}

// ===========================================================
// ScenePlayer
//
// NEW: per-scene `stepTitle` / `stepFormula` override the
// caption fields on the step-log surface. Falls back to
// `title` / `formula` when absent. Caption (canvas) is
// unaffected — it always reads `title` / `formula`.
// ===========================================================
export function ScenePlayer({
  scenes,
  defaultSpeed = 1200,
  speedOptions = [
    { value: 2000, label: 'Slow' },
    { value: 1200, label: 'Normal' },
    { value: 700,  label: 'Fast' },
    { value: 400,  label: 'Very Fast' }
  ],
  showSpeedSelector = true,
  showStepIndicator = true,
  showStepLog = false,
  stepLogTitle = 'Steps',
  stepLogMaxHeight = '30rem',
  sceneCanvasProps = {}
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(defaultSpeed);
  const timerRef = useRef(null);
  const logBodyRef = useRef(null);

  const scrollbarHideClass = 'mce-no-scrollbar-' + useId().replace(/:/g, '');

  useEffect(() => {
    setCurrentStep(0);
    setPlaying(false);
  }, [scenes]);

  const totalSteps = scenes ? scenes.length : 0;

  useEffect(() => {
    if (playing && currentStep < totalSteps - 1) {
      timerRef.current = setTimeout(() => {
        setCurrentStep((s) => s + 1);
      }, speed);
    } else if (currentStep >= totalSteps - 1) {
      setPlaying(false);
    }
    return () => clearTimeout(timerRef.current);
  }, [playing, currentStep, totalSteps, speed]);

  useEffect(() => {
    if (!showStepLog) return;
    const el = logBodyRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [currentStep, showStepLog]);

  const handlePlay = () => {
    if (currentStep >= totalSteps - 1) {
      setCurrentStep(0);
      setTimeout(() => setPlaying(true), 50);
    } else {
      setPlaying((p) => !p);
    }
  };
  const handleNext = () => {
    setPlaying(false);
    setCurrentStep((s) => Math.min(s + 1, totalSteps - 1));
  };
  const handleBack = () => {
    setPlaying(false);
    setCurrentStep((s) => Math.max(s - 1, 0));
  };
  const handleReset = () => {
    setPlaying(false);
    setCurrentStep(0);
  };
  const handleJumpTo = (idx) => {
    setPlaying(false);
    setCurrentStep(idx);
  };

  const btnStyle = (color, enabled = true) => ({
    padding: '9px 18px',
    background: enabled ? color : '#94a3b8',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: enabled ? 'pointer' : 'not-allowed',
    transition: 'background 0.15s ease'
  });

  if (!scenes || scenes.length === 0) {
    return (
      <div style={{
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#94a3b8',
        fontStyle: 'italic',
        background: '#fafafa',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        No scenes provided
      </div>
    );
  }

  const resolveStepTitle   = (s) => (s.stepTitle   !== undefined ? s.stepTitle   : s.title);
  const resolveStepFormula = (s) => (s.stepFormula !== undefined ? s.stepFormula : s.formula);

  const controlsBlock = (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      alignItems: 'center',
      marginTop: '14px',
      flexWrap: 'wrap',
      flexShrink: 0
    }}>
      <button
        style={btnStyle('#475569', currentStep > 0)}
        onClick={handleBack}
        disabled={currentStep === 0}
      >
        &larr; Back
      </button>
      <button
        style={btnStyle(playing ? '#ea580c' : '#2563eb')}
        onClick={handlePlay}
      >
        {playing ? '\u23F8 Pause' : currentStep >= totalSteps - 1 ? '\u21BB Replay' : '\u25B6 Play'}
      </button>
      <button
        style={btnStyle('#475569', currentStep < totalSteps - 1)}
        onClick={handleNext}
        disabled={currentStep >= totalSteps - 1}
      >
        Next &rarr;
      </button>
      <button style={btnStyle('#dc2626')} onClick={handleReset}>
        Reset
      </button>

      {showSpeedSelector && (
        <select
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
          style={{
            padding: '7px 11px',
            border: '1px solid #cbd5e1',
            borderRadius: '5px',
            fontSize: '14px',
            background: 'white',
            cursor: 'pointer',
            marginLeft: '8px',
            color: '#1e293b'
          }}
        >
          {speedOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      )}

      {showStepIndicator && (
        <span style={{
          fontSize: '13px',
          color: '#64748b',
          marginLeft: '8px',
          fontVariantNumeric: 'tabular-nums'
        }}>
          Step {currentStep + 1} / {totalSteps}
        </span>
      )}
    </div>
  );

  const leftCell = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minWidth: 0,
      minHeight: 0,
      overflow: 'hidden'
    }}>
      <SceneCanvas scene={scenes[currentStep]} {...sceneCanvasProps} />
      {controlsBlock}
    </div>
  );

  const logCell = showStepLog ? (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      minWidth: 0,
      minHeight: 0,
      maxHeight: stepLogMaxHeight,
      background: '#fafafa',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden'
    }}>
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid #e5e7eb',
        background: '#f1f5f9',
        borderRadius: '8px 8px 0 0'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: 600,
          color: '#1e40af'
        }}>
          {stepLogTitle}
        </h3>
      </div>
      <div
        ref={logBodyRef}
        className={scrollbarHideClass}
        style={{
          overflowY: 'auto',
          padding: '8px',
          minHeight: 0,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {scenes.slice(0, currentStep + 1).map((s, idx) => {
          const isCurrent = idx === currentStep;
          const itemTitle   = resolveStepTitle(s);
          const itemFormula = resolveStepFormula(s);
          return (
            <div
              key={idx}
              onClick={() => handleJumpTo(idx)}
              style={{
                padding: '10px 12px',
                marginBottom: '5px',
                borderRadius: '6px',
                background: isCurrent ? '#dbeafe' : 'transparent',
                border: `2px solid ${isCurrent ? '#3b82f6' : 'transparent'}`,
                cursor: 'pointer',
                transition: 'background 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                marginBottom: itemTitle ? '5px' : 0
              }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'white',
                  background: isCurrent ? '#2563eb' : '#94a3b8',
                  padding: '3px 9px',
                  borderRadius: '4px',
                  flexShrink: 0,
                  fontVariantNumeric: 'tabular-nums'
                }}>
                  {idx + 1}
                </span>
                {itemTitle && (
                  <span
                    style={{
                      fontFamily: '\'Cambria Math\', Georgia, serif',
                      fontSize: '15px',
                      fontWeight: isCurrent ? 700 : 500,
                      color: isCurrent ? '#1e40af' : '#475569'
                    }}
                    dangerouslySetInnerHTML={{ __html: itemTitle }}
                  />
                )}
              </div>
              {itemFormula && (
                <div
                  style={{
                    fontFamily: '\'Cambria Math\', Georgia, serif',
                    fontSize: '14px',
                    color: isCurrent ? '#374151' : '#64748b',
                    lineHeight: 1.7,
                    paddingLeft: '38px'
                  }}
                  dangerouslySetInnerHTML={{ __html: itemFormula }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  ) : null;

  if (!showStepLog) {
    return (
      <div style={{ width: '100%', minWidth: 0 }}>
        <SceneCanvas scene={scenes[currentStep]} {...sceneCanvasProps} />
        {controlsBlock}
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
      gridTemplateRows: 'minmax(0, auto)',
      gap: '14px',
      alignItems: 'start',
      width: '100%'
    }}>
      <style>{`
        .${scrollbarHideClass}::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>
      {leftCell}
      {logCell}
    </div>
  );
}