// 'use client';

// import React from 'react';
// import { DEFAULT_HIGHLIGHTS } from './MatrixCore';

// // ===========================================================
// // Number formatting — integers, fractions, decimal fallback.
// // Lifted from the row-operations prototype.
// // ===========================================================
// function gcd(a, b) {
//   a = Math.abs(Math.round(a));
//   b = Math.abs(Math.round(b));
//   while (b) {
//     [a, b] = [b, a % b];
//   }
//   return a;
// }

// function toFraction(num) {
//   if (Number.isInteger(num)) return { num: num, den: 1 };

//   const precision = 1000000;
//   let bestNum = Math.round(num * precision);
//   let bestDen = precision;

//   const g = gcd(bestNum, bestDen);
//   bestNum /= g;
//   bestDen /= g;

//   return { num: bestNum, den: bestDen };
// }

// export function formatNumber(num) {
//   if (num === null || num === undefined) return '';
//   if (Math.abs(num) < 1e-10) return '0';
//   if (Number.isInteger(num)) return num.toString();

//   const frac = toFraction(num);
//   if (frac.den === 1) return frac.num.toString();

//   if (Math.abs(frac.den) <= 100 && Math.abs(frac.num) <= 1000) {
//     // Fraction form: rendered with a stacked look via two <tspan>-like spans.
//     // For inline render we return a string marker; the cell renderer will
//     // detect and stack it.
//     return `${frac.num}/${frac.den}`;
//   }

//   const rounded = Math.round(num * 1000) / 1000;
//   if (Number.isInteger(rounded)) return rounded.toString();
//   return rounded.toFixed(3).replace(/\.?0+$/, '');
// }

// // Render a formatted number string. If it looks like "a/b" with integers,
// // stack it as a fraction; otherwise render plain.
// function NumericCellContent({ value }) {
//   const text = formatNumber(value);
//   const m = /^(-?\d+)\/(\d+)$/.exec(text);
//   if (m) {
//     return (
//       <span style={{
//         display: 'inline-flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         lineHeight: 1,
//         fontFamily: '\'Cambria Math\', \'Latin Modern Math\', Georgia, serif',
//         fontStyle: 'italic'
//       }}>
//         <span style={{ fontSize: '0.75em' }}>{m[1]}</span>
//         <span style={{
//           borderTop: '1.2px solid currentColor',
//           padding: '1px 4px 0',
//           fontSize: '0.75em'
//         }}>{m[2]}</span>
//       </span>
//     );
//   }
//   return (
//     <span style={{
//       fontFamily: '\'Cambria Math\', \'Latin Modern Math\', Georgia, serif',
//       fontStyle: 'italic'
//     }}>
//       {text}
//     </span>
//   );
// }

// // ===========================================================
// // NumericMatrixRenderer — same API and styling as MatrixRenderer,
// // but cells render numeric values from a 2D `values` array
// // instead of symbolic a_{i,j}. Highlights, brackets, hover,
// // transpose handling, etc. are identical.
// //
// // Required prop: `values` — 2D array of numbers (rows × cols).
// // `cellOverrides` still wins per cell if provided.
// // ===========================================================
// export function NumericMatrixRenderer({
//   matrixId,
//   values,
//   rows,
//   cols,
//   label = null,
//   transpose = false,
//   cellOverrides = {},
//   highlights = {},
//   bracketColor = '#6b7280',
//   bracketType = 'square',
//   cellSize = 'auto',
//   fontSize = 'auto',
//   showDimensions = true,
//   hoverable = false,
//   onCellHover = null,
//   onCellLeave = null,
//   onCellClick = null,
//   highlightStyles = DEFAULT_HIGHLIGHTS
// }) {
//   const actualRows = rows ?? (values ? values.length : 0);
//   const actualCols = cols ?? (values && values[0] ? values[0].length : 0);

//   const displayRows = transpose ? actualCols : actualRows;
//   const displayCols = transpose ? actualRows : actualCols;

//   const maxDim = Math.max(displayRows, displayCols);
//   // Slightly wider than symbolic — fractions and 2-digit numbers need room.
//   const cellPx = cellSize === 'auto'
//     ? (maxDim <= 3 ? 62 : maxDim === 4 ? 54 : 48)
//     : cellSize;
//   const fontPx = fontSize === 'auto'
//     ? (maxDim <= 3 ? 17 : maxDim === 4 ? 15 : 13)
//     : fontSize;

//   const resolveStyle = (name) => {
//     if (!name) return null;
//     return highlightStyles[name] || null;
//   };

//   const getCellStyle = (i, j) => {
//     if (highlights.cells) {
//       const hit = highlights.cells.find(([r, c]) => r === i && c === j);
//       if (hit) {
//         const st = resolveStyle(hit[2]);
//         if (st) return st;
//       }
//     }
//     if (highlights.rows) {
//       const hit = highlights.rows.find(([r]) => r === i);
//       if (hit) {
//         const st = resolveStyle(hit[1]);
//         if (st) return st;
//       }
//     }
//     if (highlights.cols) {
//       const hit = highlights.cols.find(([c]) => c === j);
//       if (hit) {
//         const st = resolveStyle(hit[1]);
//         if (st) return st;
//       }
//     }
//     if (highlights.diagonal && i === j) {
//       const styleName = typeof highlights.diagonal === 'string' ? highlights.diagonal : 'primary';
//       const st = resolveStyle(styleName);
//       if (st) return st;
//     }
//     return resolveStyle('none') || DEFAULT_HIGHLIGHTS.none;
//   };

//   const getCellValue = (origI, origJ) => {
//     if (!values || !values[origI]) return null;
//     return values[origI][origJ];
//   };

//   const renderCellContent = (i, j) => {
//     const origI = transpose ? j : i;
//     const origJ = transpose ? i : j;
//     const key = `${origI},${origJ}`;
//     const override = cellOverrides[key];

//     if (override?.empty) {
//       return <span style={{ color: '#cbd5e1' }}>?</span>;
//     }
//     if (override?.display !== undefined) {
//       return (
//         <span style={{
//           fontFamily: '\'Cambria Math\', \'Latin Modern Math\', Georgia, serif',
//           fontStyle: override.fontStyle !== undefined ? override.fontStyle : 'italic',
//           ...(override.style || {})
//         }}>
//           {override.display}
//         </span>
//       );
//     }

//     const value = getCellValue(origI, origJ);
//     if (value === null || value === undefined) {
//       return <span style={{ color: '#cbd5e1' }}>·</span>;
//     }
//     return <NumericCellContent value={value} />;
//   };

//   const renderBracket = (side) => {
//     const heightPx = displayRows * (cellPx + 3) - 3;
//     const baseStyle = {
//       width: '8px',
//       height: heightPx + 'px',
//       flexShrink: 0
//     };

//     if (bracketType === 'square') {
//       return (
//         <div style={{
//           ...baseStyle,
//           borderTop: `2.5px solid ${bracketColor}`,
//           borderBottom: `2.5px solid ${bracketColor}`,
//           [side === 'left' ? 'borderLeft' : 'borderRight']: `2.5px solid ${bracketColor}`,
//           borderRadius: side === 'left' ? '4px 0 0 4px' : '0 4px 4px 0'
//         }} />
//       );
//     }
//     if (bracketType === 'round') {
//       return (
//         <div style={{
//           ...baseStyle,
//           width: '10px',
//           border: `2.5px solid ${bracketColor}`,
//           [side === 'left' ? 'borderRight' : 'borderLeft']: 'none',
//           borderRadius: side === 'left' ? '50% 0 0 50%' : '0 50% 50% 0'
//         }} />
//       );
//     }
//     if (bracketType === 'bars') {
//       return (
//         <div style={{
//           ...baseStyle,
//           width: '4px',
//           [side === 'left' ? 'borderLeft' : 'borderRight']: `3px solid ${bracketColor}`
//         }} />
//       );
//     }
//     return null;
//   };

//   const handleCellEnter = (i, j) => {
//     if (hoverable && onCellHover) {
//       const oi = transpose ? j : i;
//       const oj = transpose ? i : j;
//       onCellHover(oi, oj, matrixId);
//     }
//   };

//   const handleCellLeave = () => {
//     if (hoverable && onCellLeave) onCellLeave(matrixId);
//   };

//   const handleCellClick = (i, j) => {
//     if (onCellClick) {
//       const oi = transpose ? j : i;
//       const oj = transpose ? i : j;
//       onCellClick(oi, oj, matrixId);
//     }
//   };

//   return (
//     <div
//       data-matrix-id={matrixId}
//       style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}
//     >
//       {(label !== null || showDimensions) && (
//         <div style={{
//           marginBottom: '6px',
//           fontSize: '15px',
//           fontWeight: 600,
//           color: '#374151'
//         }}>
//           {label !== null && (
//             <span style={{
//               fontFamily: '\'Cambria Math\', Georgia, serif',
//               fontStyle: 'italic'
//             }}>
//               {label}
//             </span>
//           )}
//           {label !== null && transpose && (
//             <span style={{ fontSize: '10px', verticalAlign: 'super', fontStyle: 'normal' }}>T</span>
//           )}
//           {showDimensions && (
//             <span style={{
//               fontStyle: 'normal',
//               fontSize: '12px',
//               color: '#94a3b8',
//               marginLeft: label !== null ? '6px' : 0
//             }}>
//               {displayRows}×{displayCols}
//             </span>
//           )}
//         </div>
//       )}

//       <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
//         {renderBracket('left')}

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
//           {Array(displayRows).fill(0).map((_, i) => (
//             <div key={i} style={{ display: 'flex', gap: '3px' }}>
//               {Array(displayCols).fill(0).map((_, j) => {
//                 const st = getCellStyle(i, j);

//                 const cellInlineStyle = {
//                   width: cellPx + 'px',
//                   height: cellPx + 'px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: fontPx + 'px',
//                   backgroundColor: st.bg,
//                   border: `${st.borderWidth || 2}px ${st.dashed ? 'dashed' : 'solid'} ${st.border}`,
//                   borderRadius: '4px',
//                   transform: st.scale ? `scale(${st.scale})` : 'none',
//                   transition: 'background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease',
//                   cursor: (hoverable && onCellHover) || onCellClick ? 'pointer' : 'default',
//                   userSelect: 'none'
//                 };

//                 return (
//                   <div
//                     key={j}
//                     data-row={i}
//                     data-col={j}
//                     style={cellInlineStyle}
//                     onMouseEnter={() => handleCellEnter(i, j)}
//                     onMouseLeave={handleCellLeave}
//                     onClick={() => handleCellClick(i, j)}
//                   >
//                     {renderCellContent(i, j)}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>

//         {renderBracket('right')}
//       </div>
//     </div>
//   );
// }


'use client';

import React from 'react';
import { DEFAULT_HIGHLIGHTS as IMPORTED_DEFAULTS } from './MatrixCore';

// ===========================================================
// Local fallback. If MatrixCore fails to export DEFAULT_HIGHLIGHTS
// for any reason (rename, default export, circular import, etc.)
// the renderer must still mount instead of white-screening.
// ===========================================================
const LOCAL_DEFAULTS = {
  none:    { bg: '#ffffff', border: '#e5e7eb', borderWidth: 2 },
  primary: { bg: '#dbeafe', border: '#3b82f6', borderWidth: 2 },
  accent:  { bg: '#fef3c7', border: '#f59e0b', borderWidth: 2 },
  muted:   { bg: '#f1f5f9', border: '#cbd5e1', borderWidth: 2 }
};

const SAFE_DEFAULTS =
  (IMPORTED_DEFAULTS && typeof IMPORTED_DEFAULTS === 'object')
    ? IMPORTED_DEFAULTS
    : LOCAL_DEFAULTS;

// Re-export under the original name so external imports of this file
// keep working.
export const DEFAULT_HIGHLIGHTS = SAFE_DEFAULTS;

// ===========================================================
// Number formatting — integers, fractions, decimal fallback.
// Continued-fraction expansion so 1/3, 2/7, 5/6 render as
// stacked fractions instead of 0.333 / 0.286 / 0.833.
// ===========================================================
function gcd(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function toFraction(num, maxDen = 100, tolerance = 1e-9) {
  if (!Number.isFinite(num)) return null;
  if (Number.isInteger(num)) return { num: num, den: 1 };

  const sign = num < 0 ? -1 : 1;
  let x = Math.abs(num);

  let h0 = 0, h1 = 1;
  let k0 = 1, k1 = 0;
  let b = x;

  for (let i = 0; i < 64; i++) {
    const a = Math.floor(b);
    const h2 = a * h1 + h0;
    const k2 = a * k1 + k0;

    if (k2 > maxDen) break;

    h0 = h1; h1 = h2;
    k0 = k1; k1 = k2;

    const frac = b - a;
    if (frac < tolerance) break;
    b = 1 / frac;
  }

  if (k1 === 0) return null;

  const approx = h1 / k1;
  if (Math.abs(approx - x) > 1e-6) return null;

  return { num: sign * h1, den: k1 };
}

export function formatNumber(num) {
  if (num === null || num === undefined) return '';
  if (!Number.isFinite(num)) return String(num);
  if (Math.abs(num) < 1e-10) return '0';
  if (Number.isInteger(num)) return num.toString();

  const frac = toFraction(num);
  if (frac && frac.den !== 1) {
    return `${frac.num}/${frac.den}`;
  }
  if (frac && frac.den === 1) {
    return frac.num.toString();
  }

  const rounded = Math.round(num * 1000) / 1000;
  if (Number.isInteger(rounded)) return rounded.toString();
  return rounded.toFixed(3).replace(/\.?0+$/, '');
}

function NumericCellContent({ value }) {
  const text = formatNumber(value);
  const m = /^(-?\d+)\/(\d+)$/.exec(text);
  if (m) {
    return (
      <span style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1,
        fontFamily: '\'Cambria Math\', \'Latin Modern Math\', Georgia, serif',
        fontStyle: 'italic'
      }}>
        <span style={{ fontSize: '0.75em' }}>{m[1]}</span>
        <span style={{
          borderTop: '1.2px solid currentColor',
          padding: '1px 4px 0',
          fontSize: '0.75em'
        }}>{m[2]}</span>
      </span>
    );
  }
  return (
    <span style={{
      fontFamily: '\'Cambria Math\', \'Latin Modern Math\', Georgia, serif',
      fontStyle: 'italic'
    }}>
      {text}
    </span>
  );
}

// ===========================================================
// NumericMatrixRenderer
// ===========================================================
export function NumericMatrixRenderer({
  matrixId,
  values,
  rows,
  cols,
  label = null,
  transpose = false,
  cellOverrides = {},
  highlights = {},
  bracketColor = '#6b7280',
  bracketType = 'square',
  cellSize = 'auto',
  fontSize = 'auto',
  showDimensions = true,
  hoverable = false,
  onCellHover = null,
  onCellLeave = null,
  onCellClick = null,
  highlightStyles = SAFE_DEFAULTS
}) {
  // Guard at the entry point too — caller might explicitly pass
  // `highlightStyles={undefined}` or a non-object.
  const styles = (highlightStyles && typeof highlightStyles === 'object')
    ? highlightStyles
    : SAFE_DEFAULTS;

  const actualRows = rows ?? (values ? values.length : 0);
  const actualCols = cols ?? (values && values[0] ? values[0].length : 0);

  const displayRows = transpose ? actualCols : actualRows;
  const displayCols = transpose ? actualRows : actualCols;

  const maxDim = Math.max(displayRows, displayCols);
  const cellPx = cellSize === 'auto'
    ? (maxDim <= 3 ? 62 : maxDim === 4 ? 54 : 48)
    : cellSize;
  const fontPx = fontSize === 'auto'
    ? (maxDim <= 3 ? 17 : maxDim === 4 ? 15 : 13)
    : fontSize;

  const resolveStyle = (name) => {
    if (!name) return null;
    return styles[name] || SAFE_DEFAULTS[name] || null;
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
    return resolveStyle('none') || LOCAL_DEFAULTS.none;
  };

  const getCellValue = (origI, origJ) => {
    if (!values || !values[origI]) return null;
    return values[origI][origJ];
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

    const value = getCellValue(origI, origJ);
    if (value === null || value === undefined) {
      return <span style={{ color: '#cbd5e1' }}>·</span>;
    }
    return <NumericCellContent value={value} />;
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
              {displayRows}×{displayCols}
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