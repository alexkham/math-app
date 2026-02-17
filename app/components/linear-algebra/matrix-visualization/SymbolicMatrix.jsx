'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

// ============================================================
// SYMBOLIC MATRIX - Core Component
// ============================================================

export function SymbolicMatrix({
  // Data
  symbol = 'a',
  rows = 3,
  cols = 3,
  transpose = false,
  label = '',
  
  // Cell overrides: { '0,1': { display: 'λ', style: {} }, '1,1': { display: '0' } }
  cellOverrides = {},
  
  // Static highlights
  highlightCells = [],          // [[0,1], [2,2]]
  highlightRows = [],           // [0, 2]
  highlightCols = [],           // [1]
  highlightDiagonal = false,
  highlightStyle = { bg: '#dbeafe', border: '#3b82f6' },
  
  // Secondary highlight (different color)
  secondaryHighlightCells = [],
  secondaryHighlightRows = [],
  secondaryHighlightCols = [],
  secondaryHighlightStyle = { bg: '#fef3c7', border: '#f59e0b' },
  
  // Animated highlights
  animationSequence = [],       // [{ cells: [[0,0]], rows: [], cols: [], duration: 500 }, ...]
  animationPlaying = false,
  animationSpeed = 1,
  animationLoop = false,
  onAnimationStep = null,       // (stepIndex, stepData) => {}
  onAnimationComplete = null,   // () => {}
  
  // Interaction
  onCellHover = null,           // (i, j) => {}
  onCellLeave = null,           // () => {}
  onCellClick = null,           // (i, j) => {}
  hoverable = true,
  
  // Styling
  bracketColor = '#6b7280',
  bracketType = 'square',       // 'square', 'round', 'bars'
  cellSize = 'auto',            // number or 'auto'
  fontSize = 'auto',            // number or 'auto'
  showDimensions = true,
  dimStartAt = 1,               // subscripts start at 0 or 1
}) {
  // --- Animation state ---
  const [animationStep, setAnimationStep] = useState(-1);
  const [animHighlightCells, setAnimHighlightCells] = useState([]);
  const [animHighlightRows, setAnimHighlightRows] = useState([]);
  const [animHighlightCols, setAnimHighlightCols] = useState([]);
  const animationTimer = useRef(null);

  // --- Computed dimensions ---
  const displayRows = transpose ? cols : rows;
  const displayCols = transpose ? rows : cols;
  
  // --- Auto-size ---
  const maxDim = Math.max(displayRows, displayCols);
  const computedCellSize = cellSize === 'auto' 
    ? (maxDim <= 3 ? 52 : maxDim === 4 ? 46 : 40)
    : cellSize;
  const computedFontSize = fontSize === 'auto'
    ? (maxDim <= 3 ? 15 : maxDim === 4 ? 13 : 12)
    : fontSize;

  // --- Animation logic ---
  const runAnimationStep = useCallback((stepIndex) => {
    if (stepIndex >= animationSequence.length) {
      if (animationLoop) {
        setAnimationStep(0);
        runAnimationStep(0);
      } else {
        setAnimationStep(-1);
        setAnimHighlightCells([]);
        setAnimHighlightRows([]);
        setAnimHighlightCols([]);
        if (onAnimationComplete) onAnimationComplete();
      }
      return;
    }

    const step = animationSequence[stepIndex];
    setAnimationStep(stepIndex);
    setAnimHighlightCells(step.cells || []);
    setAnimHighlightRows(step.rows || []);
    setAnimHighlightCols(step.cols || []);
    
    if (onAnimationStep) onAnimationStep(stepIndex, step);

    const duration = (step.duration || 500) / animationSpeed;
    animationTimer.current = setTimeout(() => {
      runAnimationStep(stepIndex + 1);
    }, duration);
  }, [animationSequence, animationSpeed, animationLoop, onAnimationStep, onAnimationComplete]);

  useEffect(() => {
    if (animationPlaying && animationSequence.length > 0) {
      runAnimationStep(0);
    } else {
      if (animationTimer.current) clearTimeout(animationTimer.current);
      if (!animationPlaying) {
        setAnimationStep(-1);
        setAnimHighlightCells([]);
        setAnimHighlightRows([]);
        setAnimHighlightCols([]);
      }
    }
    return () => {
      if (animationTimer.current) clearTimeout(animationTimer.current);
    };
  }, [animationPlaying, animationSequence, runAnimationStep]);

  // --- Highlight detection ---
  const getCellHighlight = (i, j) => {
    // Animation highlights take precedence
    if (animationStep >= 0) {
      const inAnimCells = animHighlightCells.some(([r, c]) => r === i && c === j);
      const inAnimRows = animHighlightRows.includes(i);
      const inAnimCols = animHighlightCols.includes(j);
      if (inAnimCells || inAnimRows || inAnimCols) {
        return { highlighted: true, style: highlightStyle };
      }
    }
    
    // Secondary highlights
    const inSecondaryCells = secondaryHighlightCells.some(([r, c]) => r === i && c === j);
    const inSecondaryRows = secondaryHighlightRows.includes(i);
    const inSecondaryCols = secondaryHighlightCols.includes(j);
    if (inSecondaryCells || inSecondaryRows || inSecondaryCols) {
      return { highlighted: true, style: secondaryHighlightStyle };
    }
    
    // Primary static highlights
    const inCells = highlightCells.some(([r, c]) => r === i && c === j);
    const inRows = highlightRows.includes(i);
    const inCols = highlightCols.includes(j);
    const inDiag = highlightDiagonal && i === j;
    if (inCells || inRows || inCols || inDiag) {
      return { highlighted: true, style: highlightStyle };
    }
    
    return { highlighted: false, style: null };
  };

  // --- Subscript component ---
  const Sub = ({ children }) => (
    <span style={{ fontSize: '0.65em', verticalAlign: 'sub', lineHeight: '0' }}>{children}</span>
  );

  // --- Element renderer ---
  const renderElement = (i, j) => {
    const origI = transpose ? j : i;
    const origJ = transpose ? i : j;
    const key = `${origI},${origJ}`;
    const override = cellOverrides[key];
    
    if (override?.display !== undefined) {
      return (
        <span style={{ 
          fontFamily: "'Cambria Math', 'Latin Modern Math', Georgia, serif",
          fontStyle: 'italic',
          ...override.style 
        }}>
          {override.display}
        </span>
      );
    }
    
    return (
      <span style={{ 
        fontFamily: "'Cambria Math', 'Latin Modern Math', Georgia, serif",
        fontStyle: 'italic'
      }}>
        {symbol}<Sub>{origI + dimStartAt},{origJ + dimStartAt}</Sub>
      </span>
    );
  };

  // --- Bracket renderer ---
  const renderBracket = (side) => {
    const height = displayRows * (computedCellSize + 4) - 4;
    const baseStyle = { width: '8px', height: `${height}px`, flexShrink: 0 };

    if (bracketType === 'square') {
      return (
        <div style={{
          ...baseStyle,
          borderTop: `2.5px solid ${bracketColor}`,
          borderBottom: `2.5px solid ${bracketColor}`,
          [side === 'left' ? 'borderLeft' : 'borderRight']: `2.5px solid ${bracketColor}`,
          borderRadius: side === 'left' ? '4px 0 0 4px' : '0 4px 4px 0',
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
          borderRadius: side === 'left' ? '50% 0 0 50%' : '0 50% 50% 0',
        }} />
      );
    }
    
    if (bracketType === 'bars') {
      return (
        <div style={{
          ...baseStyle,
          width: '4px',
          [side === 'left' ? 'borderLeft' : 'borderRight']: `3px solid ${bracketColor}`,
        }} />
      );
    }
    
    return null;
  };

  return (
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      {/* Label */}
      {(label || showDimensions) && (
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '6px', 
          fontSize: '14px', 
          fontWeight: 600, 
          color: '#374151' 
        }}>
          {label && (
            <span style={{ fontFamily: "'Cambria Math', Georgia, serif", fontStyle: 'italic' }}>
              {label}
            </span>
          )}
          {label && transpose && (
            <span style={{ fontSize: '10px', verticalAlign: 'super', fontStyle: 'normal' }}>T</span>
          )}
          {showDimensions && (
            <span style={{ fontStyle: 'normal', fontSize: '11px', color: '#9ca3af', marginLeft: label ? '6px' : 0 }}>
              {displayRows}×{displayCols}
            </span>
          )}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {renderBracket('left')}

        <div>
          {Array(displayRows).fill(0).map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '3px', marginBottom: i < displayRows - 1 ? '3px' : 0 }}>
              {Array(displayCols).fill(0).map((_, j) => {
                const { highlighted, style: hlStyle } = getCellHighlight(i, j);
                
                return (
                  <div
                    key={j}
                    onMouseEnter={() => {
                      if (hoverable && onCellHover) {
                        const origI = transpose ? j : i;
                        const origJ = transpose ? i : j;
                        onCellHover(origI, origJ);
                      }
                    }}
                    onMouseLeave={() => { if (hoverable && onCellLeave) onCellLeave(); }}
                    onClick={() => {
                      if (onCellClick) {
                        const origI = transpose ? j : i;
                        const origJ = transpose ? i : j;
                        onCellClick(origI, origJ);
                      }
                    }}
                    style={{
                      width: `${computedCellSize}px`,
                      height: `${computedCellSize}px`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: `${computedFontSize}px`,
                      borderRadius: '4px',
                      border: `2px solid ${highlighted ? hlStyle.border : '#e5e7eb'}`,
                      backgroundColor: highlighted ? hlStyle.bg : '#fafafa',
                      cursor: (hoverable && onCellHover) || onCellClick ? 'pointer' : 'default',
                      transition: 'all 0.2s ease',
                      userSelect: 'none',
                    }}
                  >
                    {renderElement(i, j)}
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


// ============================================================
// OPERATOR - Mathematical operator symbols
// ============================================================

export function Operator({ symbol = '×', size = 20, color = '#6b7280', style = {} }) {
  const symbols = {
    '×': '×', '*': '·', '+': '+', '-': '−', '=': '=',
    '->': '→', '=>': '⇒', 'T': 'ᵀ', '|': '|',
  };
  
  return (
    <span style={{ 
      fontSize: `${size}px`, 
      color, 
      fontWeight: 'bold',
      margin: '0 8px',
      userSelect: 'none',
      ...style,
    }}>
      {symbols[symbol] || symbol}
    </span>
  );
}


// ============================================================
// FORMULA - Symbolic formula with subscripts/superscripts
// ============================================================

export function Formula({ parts = [], size = 15, style = {} }) {
  const Sub = ({ children }) => (
    <span style={{ fontSize: '0.65em', verticalAlign: 'sub', lineHeight: '0' }}>{children}</span>
  );
  
  const Sup = ({ children }) => (
    <span style={{ fontSize: '0.65em', verticalAlign: 'super', lineHeight: '0' }}>{children}</span>
  );

  return (
    <span style={{ 
      fontFamily: "'Cambria Math', 'Latin Modern Math', Georgia, serif",
      fontSize: `${size}px`,
      ...style 
    }}>
      {parts.map((part, idx) => {
        if (part.op) {
          return <span key={idx} style={{ fontStyle: 'normal', margin: '0 3px' }}>{part.op}</span>;
        }
        if (part.sym) {
          return (
            <span key={idx} style={{ fontStyle: 'italic' }}>
              {part.sym}
              {part.sub && <Sub>{part.sub}</Sub>}
              {part.sup && <Sup>{part.sup}</Sup>}
            </span>
          );
        }
        if (part.text) {
          return <span key={idx} style={{ fontStyle: 'normal' }}>{part.text}</span>;
        }
        return null;
      })}
    </span>
  );
}


// ============================================================
// UTILITIES
// ============================================================

/**
 * Generate cell overrides for an identity matrix
 */
export function identityOverrides(n) {
  const overrides = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      overrides[`${i},${j}`] = { display: i === j ? '1' : '0' };
    }
  }
  return overrides;
}

/**
 * Generate cell overrides for a zero matrix
 */
export function zeroOverrides(rows, cols) {
  const overrides = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      overrides[`${i},${j}`] = { display: '0' };
    }
  }
  return overrides;
}

/**
 * Generate cell overrides from a numeric matrix
 */
export function numericOverrides(matrix) {
  const overrides = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      overrides[`${i},${j}`] = { display: String(matrix[i][j]) };
    }
  }
  return overrides;
}

/**
 * Generate animation sequence: cell by cell (row-major order)
 */
export function cellByCellSequence(rows, cols, duration = 400) {
  const seq = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      seq.push({ cells: [[i, j]], duration });
    }
  }
  return seq;
}

/**
 * Generate animation sequence: row by row
 */
export function rowByRowSequence(rows, duration = 600) {
  return Array(rows).fill(0).map((_, i) => ({ rows: [i], duration }));
}

/**
 * Generate animation sequence: column by column
 */
export function colByColSequence(cols, duration = 600) {
  return Array(cols).fill(0).map((_, j) => ({ cols: [j], duration }));
}

/**
 * Generate animation sequence: diagonal
 */
export function diagonalSequence(n, duration = 500) {
  const seq = [];
  for (let k = 0; k < n; k++) {
    const cells = [];
    for (let i = 0; i <= k; i++) {
      cells.push([i, i]);
    }
    seq.push({ cells, duration });
  }
  return seq;
}

/**
 * Generate formula parts for matrix multiplication element c_ij
 */
export function multiplicationFormula(i, j, innerDim, symA = 'a', symB = 'b', symC = 'c') {
  const parts = [
    { sym: symC, sub: `${i},${j}` },
    { op: '=' },
  ];
  for (let k = 1; k <= innerDim; k++) {
    if (k > 1) parts.push({ op: '+' });
    parts.push({ sym: symA, sub: `${i},${k}` });
    parts.push({ op: '·' });
    parts.push({ sym: symB, sub: `${k},${j}` });
  }
  return parts;
}

/**
 * Generate formula parts for dot product
 */
export function dotProductFormula(dim, symA = 'a', symB = 'b') {
  const parts = [];
  for (let k = 1; k <= dim; k++) {
    if (k > 1) parts.push({ op: '+' });
    parts.push({ sym: symA, sub: `${k}` });
    parts.push({ op: '·' });
    parts.push({ sym: symB, sub: `${k}` });
  }
  return parts;
}