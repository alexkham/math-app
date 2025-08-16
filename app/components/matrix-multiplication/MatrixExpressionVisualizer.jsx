import React from 'react';
import styles from './MatrixExpressionVisualizer.module.css';

const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
  const d = (() => {
    switch (type) {
      case 'square':
        const inset = Math.min(width, height) * 0.1;
        return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
                M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
      case 'straight':
        return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
      case 'curved':
      default:
        return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
                M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
    }
  })();

  return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
};

const MatrixSVGVisualizer = ({ 
  matrix,
  cellSize = 40,
  padding = 10,
  fontSize = 16,
  textColor = 'black',
  braceColor = 'blue',
  braceWidth = 2,
  braceType = 'curved',
  showCellBorders = false,
  cellBorderColor = 'lightgray',
  cellBorderWidth = 1
}) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const width = cols * cellSize + 2 * padding;
  const height = rows * cellSize + 2 * padding;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={styles.matrixSVG}>
      {showCellBorders && matrix.map((row, i) =>
        row.map((_, j) => (
          <rect
            key={`border-${i}-${j}`}
            x={j * cellSize + padding}
            y={i * cellSize + padding}
            width={cellSize}
            height={cellSize}
            fill="none"
            stroke={cellBorderColor}
            strokeWidth={cellBorderWidth}
          />
        ))
      )}
      {matrix.map((row, i) =>
        row.map((value, j) => (
          <text
            key={`text-${i}-${j}`}
            x={j * cellSize + padding + cellSize / 2}
            y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
            fontSize={fontSize}
            textAnchor="middle"
            fill={textColor}
          >
            {value !== null && value !== undefined ? value : ''}
          </text>
        ))
      )}
      <BraceSVG 
        type={braceType}
        x={padding}
        y={padding}
        width={width - 2 * padding}
        height={height - 2 * padding}
        color={braceColor}
        strokeWidth={braceWidth}
      />
    </svg>
  );
};

const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
  <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`} className={styles.symbolSVG}>
    <text
      x="50%"
      y="50%"
      fontSize={fontSize}
      textAnchor="middle"
      dominantBaseline="central"
      fill={color}
    >
      {symbol}
    </text>
  </svg>
);

const MatrixExpressionVisualizer = ({ 
  expression, 
  cellSize = 40, 
  fontSize = 16, 
  textColor = 'black', 
  braceColor = 'blue',
  braceWidth = 2,
  braceType = 'curved',
  showCellBorders = false,
  cellBorderColor = 'lightgray',
  cellBorderWidth = 1
}) => {
  return (
    <div className={styles.expressionContainer}>
      {expression.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <MatrixSVGVisualizer
              key={index}
              matrix={item}
              cellSize={cellSize}
              fontSize={fontSize}
              textColor={textColor}
              braceColor={braceColor}
              braceWidth={braceWidth}
              braceType={braceType}
              showCellBorders={showCellBorders}
              cellBorderColor={cellBorderColor}
              cellBorderWidth={cellBorderWidth}
            />
          );
        } else {
          return <SymbolSVG key={index} symbol={item} fontSize={fontSize * 1.5} color={textColor} />;
        }
      })}
    </div>
  );
};

export default MatrixExpressionVisualizer;