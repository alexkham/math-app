'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * SymbolicMatrix - A reusable component for rendering symbolic matrices
 * 
 * Handles: matrices, vectors (row/column), scalars (1x1)
 * Features: static highlights, animated highlight sequences, hover/click callbacks
 */
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
  
  // Secondary highlight (different color, e.g., for showing two things at once)
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
  bracketType = 'square',       // 'square', 'round', 'curly', 'bars' (determinant)
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

  // --- Compute display dimensions ---
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

  // --- Check if cell is highlighted ---
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

  // --- Element notation renderer ---
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
    const baseStyle = {
      width: '8px',
      height: `${height}px`,
      flexShrink: 0,
    };

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
    
    // curly - simplified version
    return (
      <div style={{
        ...baseStyle,
        fontSize: `${height}px`,
        lineHeight: '1',
        color: bracketColor,
        display: 'flex',
        alignItems: 'center',
      }}>
        {side === 'left' ? '{' : '}'}
      </div>
    );
  };

  // --- Determine what type this is ---
  const getTypeLabel = () => {
    if (displayRows === 1 && displayCols === 1) return 'scalar';
    if (displayRows === 1) return 'row vector';
    if (displayCols === 1) return 'column vector';
    return 'matrix';
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
            <div key={i} style={{ 
              display: 'flex', 
              gap: '3px', 
              marginBottom: i < displayRows - 1 ? '3px' : 0 
            }}>
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
                    onMouseLeave={() => {
                      if (hoverable && onCellLeave) onCellLeave();
                    }}
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

/**
 * Operator - Renders mathematical operators
 */
export function Operator({ symbol = '×', size = 20, color = '#6b7280' }) {
  const symbols = {
    '×': '×',
    '*': '·',
    '+': '+',
    '-': '−',
    '=': '=',
    '->': '→',
    '=>': '⇒',
    'T': 'ᵀ',
  };
  
  return (
    <span style={{ 
      fontSize: `${size}px`, 
      color, 
      fontWeight: 'bold',
      margin: '0 8px',
      userSelect: 'none',
    }}>
      {symbols[symbol] || symbol}
    </span>
  );
}

/**
 * Formula - Renders a symbolic formula with subscripts
 * Example: formula={[{sym:'a',sub:'1,1'}, {op:'·'}, {sym:'b',sub:'1,1'}, {op:'+'}, ...]}
 */
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
          return (
            <span key={idx} style={{ fontStyle: 'normal', margin: '0 3px' }}>
              {part.op}
            </span>
          );
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
          return (
            <span key={idx} style={{ fontStyle: 'normal' }}>
              {part.text}
            </span>
          );
        }
        return null;
      })}
    </span>
  );
}


// ============================================================
// DEMO: Shows all features of the components
// ============================================================

export default function SymbolicMatrixDemo() {
  const [demoMode, setDemoMode] = useState('basic');
  const [hoveredCell, setHoveredCell] = useState(null);
  const [animPlaying, setAnimPlaying] = useState(false);
  const [animStep, setAnimStep] = useState(-1);

  // Animation sequence for row traversal demo
  const rowTraversalSequence = [
    { cells: [[0, 0]], duration: 400 },
    { cells: [[0, 1]], duration: 400 },
    { cells: [[0, 2]], duration: 400 },
    { cells: [[1, 0]], duration: 400 },
    { cells: [[1, 1]], duration: 400 },
    { cells: [[1, 2]], duration: 400 },
    { cells: [[2, 0]], duration: 400 },
    { cells: [[2, 1]], duration: 400 },
    { cells: [[2, 2]], duration: 400 },
  ];

  // Animation for row-by-row
  const rowByRowSequence = [
    { rows: [0], duration: 700 },
    { rows: [1], duration: 700 },
    { rows: [2], duration: 700 },
  ];

  // Animation for diagonal
  const diagonalSequence = [
    { cells: [[0, 0]], duration: 500 },
    { cells: [[0, 0], [1, 1]], duration: 500 },
    { cells: [[0, 0], [1, 1], [2, 2]], duration: 800 },
  ];

  const getSequence = () => {
    if (demoMode === 'cellByCell') return rowTraversalSequence;
    if (demoMode === 'rowByRow') return rowByRowSequence;
    if (demoMode === 'diagonal') return diagonalSequence;
    return [];
  };

  // Formula for multiplication demo
  const multFormulaParts = hoveredCell ? [
    { sym: 'c', sub: `${hoveredCell[0]+1},${hoveredCell[1]+1}` },
    { op: '=' },
    { sym: 'a', sub: `${hoveredCell[0]+1},1` },
    { op: '·' },
    { sym: 'b', sub: `1,${hoveredCell[1]+1}` },
    { op: '+' },
    { sym: 'a', sub: `${hoveredCell[0]+1},2` },
    { op: '·' },
    { sym: 'b', sub: `2,${hoveredCell[1]+1}` },
    { op: '+' },
    { sym: 'a', sub: `${hoveredCell[0]+1},3` },
    { op: '·' },
    { sym: 'b', sub: `3,${hoveredCell[1]+1}` },
  ] : [];

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1400px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{ marginBottom: '16px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e40af', marginBottom: '4px' }}>
          SymbolicMatrix Component Library
        </h1>
        <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
          Reusable building blocks for visualizing linear algebra operations
        </p>
      </div>

      {/* Mode selector */}
      <div style={{ 
        marginBottom: '20px', 
        display: 'flex', 
        gap: '8px', 
        flexWrap: 'wrap' 
      }}>
        {[
          { id: 'basic', label: 'Basic Matrix' },
          { id: 'vector', label: 'Vectors' },
          { id: 'transpose', label: 'Transpose' },
          { id: 'multiplication', label: 'Multiplication' },
          { id: 'cellByCell', label: 'Anim: Cell by Cell' },
          { id: 'rowByRow', label: 'Anim: Row by Row' },
          { id: 'diagonal', label: 'Anim: Diagonal' },
          { id: 'brackets', label: 'Bracket Types' },
          { id: 'overrides', label: 'Cell Overrides' },
        ].map(mode => (
          <button
            key={mode.id}
            onClick={() => { setDemoMode(mode.id); setAnimPlaying(false); setAnimStep(-1); }}
            style={{
              padding: '8px 14px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: demoMode === mode.id ? '#2563eb' : '#e5e7eb',
              color: demoMode === mode.id ? 'white' : '#374151',
              cursor: 'pointer',
            }}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '10px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
        padding: '24px',
        minHeight: '400px'
      }}>

        {/* Basic Matrix */}
        {demoMode === 'basic' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
              Basic Matrix Display
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Hover over cells to see coordinates reported via callback.
            </p>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <SymbolicMatrix
                symbol="a"
                rows={3}
                cols={3}
                label="A"
                bracketColor="#1e40af"
                onCellHover={(i, j) => setHoveredCell([i, j])}
                onCellLeave={() => setHoveredCell(null)}
                highlightCells={hoveredCell ? [hoveredCell] : []}
              />
              <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px', minWidth: '200px' }}>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                  {hoveredCell 
                    ? <>Hovering: <strong>a<sub>{hoveredCell[0]+1},{hoveredCell[1]+1}</sub></strong> (row {hoveredCell[0]+1}, col {hoveredCell[1]+1})</>
                    : 'Hover a cell...'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Vectors */}
        {demoMode === 'vector' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
              Vectors (1×n or n×1)
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Same component, different dimensions. Scalar is just 1×1.
            </p>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <SymbolicMatrix symbol="v" rows={4} cols={1} label="v" bracketColor="#7c3aed" />
              <SymbolicMatrix symbol="u" rows={1} cols={4} label="u" bracketColor="#0891b2" />
              <SymbolicMatrix symbol="λ" rows={1} cols={1} label="λ" bracketColor="#be185d" showDimensions={false} />
            </div>
          </div>
        )}

        {/* Transpose */}
        {demoMode === 'transpose' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
              Transpose View
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Hover to see corresponding elements. Same data, rows↔cols swapped.
            </p>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
              <SymbolicMatrix
                symbol="a"
                rows={2}
                cols={3}
                label="A"
                bracketColor="#1e40af"
                onCellHover={(i, j) => setHoveredCell([i, j])}
                onCellLeave={() => setHoveredCell(null)}
                highlightCells={hoveredCell ? [hoveredCell] : []}
              />
              <Operator symbol="->" size={24} />
              <SymbolicMatrix
                symbol="a"
                rows={2}
                cols={3}
                transpose={true}
                label="A"
                bracketColor="#7c3aed"
                highlightCells={hoveredCell ? [[hoveredCell[1], hoveredCell[0]]] : []}
              />
            </div>
            {hoveredCell && (
              <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
                <Formula 
                  parts={[
                    { sym: 'a', sub: `${hoveredCell[0]+1},${hoveredCell[1]+1}` },
                    { text: ' in A  ↔  ' },
                    { sym: 'a', sub: `${hoveredCell[1]+1},${hoveredCell[0]+1}` },
                    { text: ' in A' },
                    { sym: '', sup: 'T' },
                  ]}
                  size={16}
                />
              </div>
            )}
          </div>
        )}

        {/* Multiplication */}
        {demoMode === 'multiplication' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
              Matrix Multiplication
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Hover any cell in C to see contributing row (A) and column (B).
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <SymbolicMatrix
                symbol="a"
                rows={3}
                cols={3}
                label="A"
                bracketColor="#1e40af"
                highlightRows={hoveredCell ? [hoveredCell[0]] : []}
              />
              <Operator symbol="×" size={20} />
              <SymbolicMatrix
                symbol="b"
                rows={3}
                cols={2}
                label="B"
                bracketColor="#b45309"
                highlightCols={hoveredCell ? [hoveredCell[1]] : []}
              />
              <Operator symbol="=" size={20} />
              <SymbolicMatrix
                symbol="c"
                rows={3}
                cols={2}
                label="C"
                bracketColor="#16a34a"
                onCellHover={(i, j) => setHoveredCell([i, j])}
                onCellLeave={() => setHoveredCell(null)}
                highlightCells={hoveredCell ? [hoveredCell] : []}
                highlightStyle={{ bg: '#dcfce7', border: '#16a34a' }}
              />
            </div>
            {hoveredCell && (
              <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f0fdf4', border: '2px solid #86efac', borderRadius: '8px' }}>
                <Formula parts={multFormulaParts} size={16} />
                <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#6b7280' }}>
                  Row {hoveredCell[0]+1} of A · Column {hoveredCell[1]+1} of B
                </p>
              </div>
            )}
          </div>
        )}

        {/* Animation demos */}
        {(demoMode === 'cellByCell' || demoMode === 'rowByRow' || demoMode === 'diagonal') && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
              Animated Highlighting: {demoMode === 'cellByCell' ? 'Cell by Cell' : demoMode === 'rowByRow' ? 'Row by Row' : 'Diagonal'}
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Animation controlled via props. Current step: {animStep >= 0 ? animStep + 1 : '—'}
            </p>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <SymbolicMatrix
                symbol="a"
                rows={3}
                cols={3}
                label="A"
                bracketColor="#1e40af"
                animationSequence={getSequence()}
                animationPlaying={animPlaying}
                animationSpeed={1}
                onAnimationStep={(idx) => setAnimStep(idx)}
                onAnimationComplete={() => { setAnimPlaying(false); setAnimStep(-1); }}
              />
              <div>
                <button
                  onClick={() => setAnimPlaying(!animPlaying)}
                  style={{
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: animPlaying ? '#dc2626' : '#2563eb',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  {animPlaying ? '⏹ Stop' : '▶ Play'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bracket types */}
        {demoMode === 'brackets' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
              Bracket Types
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Square (matrix), round (grouping), bars (determinant).
            </p>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <SymbolicMatrix symbol="a" rows={3} cols={3} label="A" bracketType="square" bracketColor="#1e40af" />
              <SymbolicMatrix symbol="a" rows={3} cols={3} label="A" bracketType="round" bracketColor="#7c3aed" />
              <SymbolicMatrix symbol="a" rows={3} cols={3} label="|A|" bracketType="bars" bracketColor="#be185d" showDimensions={false} />
            </div>
          </div>
        )}

        {/* Cell overrides */}
        {demoMode === 'overrides' && (
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '16px' }}>
              Cell Overrides
            </h2>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
              Override specific cells with custom display values (e.g., identity matrix, zeros, special symbols).
            </p>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              {/* Identity matrix */}
              <SymbolicMatrix
                symbol=""
                rows={3}
                cols={3}
                label="I"
                bracketColor="#16a34a"
                cellOverrides={{
                  '0,0': { display: '1' },
                  '0,1': { display: '0' },
                  '0,2': { display: '0' },
                  '1,0': { display: '0' },
                  '1,1': { display: '1' },
                  '1,2': { display: '0' },
                  '2,0': { display: '0' },
                  '2,1': { display: '0' },
                  '2,2': { display: '1' },
                }}
                highlightDiagonal={true}
                highlightStyle={{ bg: '#dcfce7', border: '#16a34a' }}
              />
              {/* Mixed */}
              <SymbolicMatrix
                symbol="a"
                rows={3}
                cols={3}
                label="A - λI"
                bracketColor="#b45309"
                cellOverrides={{
                  '0,0': { display: 'a₁₁ - λ' },
                  '1,1': { display: 'a₂₂ - λ' },
                  '2,2': { display: 'a₃₃ - λ' },
                }}
                highlightDiagonal={true}
                highlightStyle={{ bg: '#fef3c7', border: '#f59e0b' }}
              />
            </div>
          </div>
        )}

      </div>

      {/* Code example
      <div style={{ 
        marginTop: '20px', 
        backgroundColor: '#1e293b', 
        borderRadius: '8px', 
        padding: '16px',
        overflow: 'auto'
      }}>
        <pre style={{ margin: 0, fontSize: '12px', color: '#e2e8f0', fontFamily: 'monospace' }}>
{`<SymbolicMatrix
  symbol="a"
  rows={3}
  cols={3}
  label="A"
  highlightCells={[[0, 1], [2, 2]]}
  highlightRows={[1]}
  highlightStyle={{ bg: '#dbeafe', border: '#3b82f6' }}
  animationSequence={[
    { cells: [[0, 0]], duration: 500 },
    { rows: [1], duration: 700 },
  ]}
  animationPlaying={isPlaying}
  onCellHover={(i, j) => console.log('Hovered:', i, j)}
  onAnimationComplete={() => console.log('Done!')}
/>`}
        </pre>
      </div> */}
    </div>
  );
}