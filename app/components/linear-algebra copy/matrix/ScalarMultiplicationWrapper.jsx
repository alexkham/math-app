// 'use client';

// import React, { useState, useMemo } from 'react';
// import { ScenePlayer } from './MatrixCore';

// // ===========================================================
// // ScalarMultiplicationWrapper
// // Visualizes k · A = C, cell by cell.
// // - No shape constraint: any matrix can be scaled
// // - C has the same shape as A
// // - No strategy axis (element-wise like addition)
// // - Scalar 'k' rendered via Operator slot — symbolic only
// // ===========================================================

// const mathInlineStyle = {
//   fontFamily: '\'Cambria Math\', Georgia, serif',
//   fontStyle: 'italic'
// };

// const chevButtonStyle = {
//   background: 'transparent',
//   border: 'none',
//   padding: '0 2px',
//   fontSize: '8px',
//   color: '#64748b',
//   cursor: 'pointer',
//   lineHeight: 1,
//   fontFamily: 'inherit'
// };

// const subStyle = {
//   fontSize: '0.65em',
//   verticalAlign: 'sub',
//   lineHeight: 0,
//   fontStyle: 'italic'
// };

// const SCALAR_INFO =
//   'A scalar is a single number — not a vector or matrix. Multiplying a matrix by a scalar k preserves its shape: C has the same dimensions as A, and every cell of C equals k times the corresponding cell of A.';

// // -----------------------------------------------------------
// // Scene builder
// // -----------------------------------------------------------
// function buildScenes(rows, cols) {
//   const maxDim = Math.max(rows, cols);
//   const cFontSize =
//     maxDim <= 3 ? '14px' : maxDim === 4 ? '12px' : '11px';

//   const filledCellDisplay = (i, j) => ({
//     display: (
//       <>
//         k
//         <span style={{ fontStyle: 'normal', margin: '0 2px' }}>·</span>
//         a<span style={subStyle}>{i + 1},{j + 1}</span>
//       </>
//     ),
//     style: { fontSize: cFontSize }
//   });

//   function makeCOverrides(upToIndex) {
//     const overrides = {};
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         const idx = i * cols + j;
//         if (idx <= upToIndex) {
//           overrides[`${i},${j}`] = filledCellDisplay(i, j);
//         } else {
//           overrides[`${i},${j}`] = { empty: true };
//         }
//       }
//     }
//     return overrides;
//   }

//   const baseMatrices = (cOverrides) => ({
//     A: { symbol: 'a', rows, cols, label: 'A' },
//     C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
//   });

//   // Layout: k · A = C
//   // 'k' rendered via Operator slot (no native scalar type in MatrixCore).
//   // Colored blue + slightly larger to read as a parameter, not a structural
//   // symbol like '·' or '='.
//   const baseLayout = [
//     { type: 'operator', symbol: 'k', size: 30, color: '#1e40af' },
//     { type: 'operator', symbol: '·', size: 24 },
//     { type: 'matrix', ref: 'A' },
//     { type: 'operator', symbol: '=' },
//     { type: 'matrix', ref: 'C' }
//   ];

//   const scenes = [];

//   // Intro
//   scenes.push({
//     title: 'Scalar multiplication',
//     formula:
//       `k is a scalar — a single number. To compute C = k · A, ` +
//       `multiply every cell of A by k. C has the same shape as A (${rows}×${cols}).`,
//     matrices: baseMatrices(makeCOverrides(-1)),
//     layout: baseLayout,
//     highlights: {}
//   });

//   // Per-cell sweep
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const idx = i * cols + j;
//       scenes.push({
//         title:
//           `c<sub>${i + 1},${j + 1}</sub> = ` +
//           `k · a<sub>${i + 1},${j + 1}</sub>`,
//         formula:
//           `Multiply the cell at row ${i + 1}, column ${j + 1} of A by k. ` +
//           `The product goes into C[${i + 1},${j + 1}].`,
//         matrices: baseMatrices(makeCOverrides(idx)),
//         layout: baseLayout,
//         highlights: {
//           A: { cells: [[i, j, 'primary']] },
//           C: { cells: [[i, j, 'accent']] }
//         },
//         overlays: [
//           {
//             type: 'cell-arrow-curve',
//             from: { matrix: 'A', row: i, col: j },
//             to: { matrix: 'C', row: i, col: j },
//             style: 'primary',
//             curveOffset: 35
//           }
//         ]
//       });
//     }
//   }

//   // Outro
//   scenes.push({
//     title: 'Done',
//     formula:
//       `C is filled. Every entry c<sub>i,j</sub> = k · a<sub>i,j</sub>. ` +
//       `Scalar multiplication is element-wise: it preserves shape and ` +
//       `scales every cell by the same factor k.`,
//     matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
//     layout: baseLayout,
//     highlights: {}
//   });

//   return scenes;
// }

// // -----------------------------------------------------------
// // UI helpers
// // -----------------------------------------------------------
// function InfoIcon({ tip }) {
//   return (
//     <span
//       className="sm-info"
//       tabIndex={0}
//       aria-label="More info"
//       style={{
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '16px',
//         height: '16px',
//         borderRadius: '50%',
//         background: '#dbeafe',
//         color: '#1e40af',
//         fontSize: '11px',
//         fontWeight: 700,
//         cursor: 'help',
//         position: 'relative',
//         fontFamily: 'Arial, sans-serif',
//         lineHeight: 1,
//         userSelect: 'none',
//         flexShrink: 0
//       }}
//     >
//       ?
//       <span className="sm-tip">{tip}</span>
//     </span>
//   );
// }

// function FieldLabel({ children, info }) {
//   return (
//     <div style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '8px',
//       margin: '0 0 10px'
//     }}>
//       <span style={{
//         fontSize: '16px',
//         color: '#1e40af',
//         fontFamily: 'Arial, sans-serif',
//         fontWeight: 600,
//         lineHeight: 1.2
//       }}>
//         {children}
//       </span>
//       {info && <InfoIcon tip={info} />}
//     </div>
//   );
// }

// function Stepper({ value, onChange, min, max }) {
//   return (
//     <span style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '4px',
//       padding: '4px 6px 4px 10px',
//       borderRadius: '6px',
//       background: 'white',
//       border: '1px solid #cbd5e1'
//     }}>
//       <span style={{
//         ...mathInlineStyle,
//         fontWeight: 500,
//         minWidth: '10px',
//         textAlign: 'center',
//         color: '#0f172a'
//       }}>
//         {value}
//       </span>
//       <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
//         <button
//           className="sm-stepper-btn"
//           onClick={() => onChange(Math.min(max, value + 1))}
//           disabled={value >= max}
//           style={chevButtonStyle}
//           aria-label="Increase"
//         >▲</button>
//         <button
//           className="sm-stepper-btn"
//           onClick={() => onChange(Math.max(min, value - 1))}
//           disabled={value <= min}
//           style={chevButtonStyle}
//           aria-label="Decrease"
//         >▼</button>
//       </span>
//     </span>
//   );
// }

// // ===========================================================
// // Main wrapper
// // ===========================================================
// export default function ScalarMultiplicationWrapper({
//   defaultRows = 2,
//   defaultCols = 3,
//   dimensionRange = [1, 2, 3, 4, 5],
//   title = 'Scalar Multiplication',
//   subtitle = 'Symbolic visualization of k · A = C, cell by cell.',
//   defaultSpeed = 1200
// }) {
//   const [rows, setRows] = useState(defaultRows);
//   const [cols, setCols] = useState(defaultCols);

//   const min = dimensionRange[0];
//   const max = dimensionRange[dimensionRange.length - 1];

//   const scenes = useMemo(
//     () => buildScenes(rows, cols),
//     [rows, cols]
//   );

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '10px',
//       boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//       padding: '22px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <style>{`
//         .sm-stepper-btn:hover:not(:disabled) { color: #1e40af; }
//         .sm-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

//         .sm-info:hover, .sm-info:focus { background: #bfdbfe; outline: none; }

//         .sm-info .sm-tip {
//           visibility: hidden; opacity: 0;
//           position: absolute; top: calc(100% + 8px); left: 50%;
//           transform: translateX(-50%);
//           background: #1e293b; color: #f1f5f9;
//           font-size: 12px; line-height: 1.5; font-weight: 400;
//           padding: 9px 13px; border-radius: 6px;
//           width: 280px; text-align: left;
//           pointer-events: none;
//           transition: opacity 0.12s ease, visibility 0.12s;
//           z-index: 10;
//           font-family: Arial, sans-serif;
//           font-style: normal;
//         }
//         .sm-info .sm-tip::before {
//           content: ''; position: absolute;
//           bottom: 100%; left: 50%; transform: translateX(-50%);
//           border: 5px solid transparent; border-bottom-color: #1e293b;
//         }
//         .sm-info:hover .sm-tip, .sm-info:focus .sm-tip {
//           visibility: visible; opacity: 1;
//         }
//       `}</style>

//       {(title || subtitle) && (
//         <div style={{ marginBottom: '18px' }}>
//           {/* {title && (
//             <h2 style={{
//               fontSize: '22px',
//               color: '#1e40af',
//               margin: '0 0 4px 0',
//               fontWeight: 'bold'
//             }}>
//               {title}
//             </h2>
//           )} */}
//           {subtitle && (
//             <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
//               {subtitle}
//             </p>
//           )}
//         </div>
//       )}

//       {/* Control panel: just dimensions */}
//       <div style={{
//         background: 'white',
//         border: '1px solid #e5e7eb',
//         borderRadius: '10px',
//         padding: '18px'
//       }}>
//         <FieldLabel info={SCALAR_INFO}>Dimensions of A</FieldLabel>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '6px',
//           flexWrap: 'wrap'
//         }}>
//           <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
//           <Stepper value={rows} onChange={setRows} min={min} max={max} />
//           <span style={{ color: '#94a3b8' }}>×</span>
//           <Stepper value={cols} onChange={setCols} min={min} max={max} />
//         </div>
//       </div>

//       {/* Output */}
//       <div style={{ marginTop: '18px' }}>
//         <ScenePlayer
//           scenes={scenes}
//           defaultSpeed={defaultSpeed}
//           showSpeedSelector={true}
//           showStepIndicator={true}
//           showStepLog={true}
//           stepLogTitle="Step explanations"
//           sceneCanvasProps={{ showCaption: false }}
//         />
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

const mathInlineStyle = {
  fontFamily: '"Cambria Math", Georgia, serif',
  fontStyle: 'italic'
};

const chevButtonStyle = {
  background: 'transparent',
  border: 'none',
  padding: '0 2px',
  fontSize: '8px',
  color: '#64748b',
  cursor: 'pointer',
  lineHeight: 1,
  fontFamily: 'inherit'
};

const subStyle = {
  fontSize: '0.65em',
  verticalAlign: 'sub',
  lineHeight: 0,
  fontStyle: 'italic'
};

const SCALAR_INFO =
  'A scalar is a single number — not a vector or matrix. Multiplying a matrix by a scalar k preserves its shape: C has the same dimensions as A, and every cell of C equals k times the corresponding cell of A.';

const SM_CSS = `
.sm-stepper-btn:hover:not(:disabled) { color: #1e40af; }
.sm-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

.sm-info:hover, .sm-info:focus { background: #bfdbfe; outline: none; }

.sm-info .sm-tip {
  visibility: hidden; opacity: 0;
  position: absolute; top: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  background: #1e293b; color: #f1f5f9;
  font-size: 12px; line-height: 1.5; font-weight: 400;
  padding: 9px 13px; border-radius: 6px;
  width: 280px; text-align: left;
  pointer-events: none;
  transition: opacity 0.12s ease, visibility 0.12s;
  z-index: 10;
  font-family: Arial, sans-serif;
  font-style: normal;
}
.sm-info .sm-tip::before {
  content: ""; position: absolute;
  bottom: 100%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent; border-bottom-color: #1e293b;
}
.sm-info:hover .sm-tip, .sm-info:focus .sm-tip {
  visibility: visible; opacity: 1;
}
`;

function buildScenes(rows, cols) {
  const maxDim = Math.max(rows, cols);
  const cFontSize =
    maxDim <= 3 ? '14px' : maxDim === 4 ? '12px' : '11px';

  const filledCellDisplay = (i, j) => ({
    display: (
      <>
        k
        <span style={{ fontStyle: 'normal', margin: '0 2px' }}>·</span>
        a<span style={subStyle}>{i + 1},{j + 1}</span>
      </>
    ),
    style: { fontSize: cFontSize }
  });

  function makeCOverrides(upToIndex) {
    const overrides = {};
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const idx = i * cols + j;
        if (idx <= upToIndex) {
          overrides[`${i},${j}`] = filledCellDisplay(i, j);
        } else {
          overrides[`${i},${j}`] = { empty: true };
        }
      }
    }
    return overrides;
  }

  const baseMatrices = (cOverrides) => ({
    A: { symbol: 'a', rows, cols, label: 'A' },
    C: { symbol: 'c', rows, cols, label: 'C', cellOverrides: cOverrides }
  });

  const baseLayout = [
    { type: 'operator', symbol: 'k', size: 30, color: '#1e40af' },
    { type: 'operator', symbol: '·', size: 24 },
    { type: 'matrix', ref: 'A' },
    { type: 'operator', symbol: '=' },
    { type: 'matrix', ref: 'C' }
  ];

  const scenes = [];

  scenes.push({
    title: 'Scalar multiplication',
    formula:
      `k is a scalar — a single number. To compute C = k · A, ` +
      `multiply every cell of A by k. C has the same shape as A (${rows}×${cols}).`,
    matrices: baseMatrices(makeCOverrides(-1)),
    layout: baseLayout,
    highlights: {}
  });

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const idx = i * cols + j;
      scenes.push({
        title:
          `c<sub>${i + 1},${j + 1}</sub> = ` +
          `k · a<sub>${i + 1},${j + 1}</sub>`,
        formula:
          `Multiply the cell at row ${i + 1}, column ${j + 1} of A by k. ` +
          `The product goes into C[${i + 1},${j + 1}].`,
        matrices: baseMatrices(makeCOverrides(idx)),
        layout: baseLayout,
        highlights: {
          A: { cells: [[i, j, 'primary']] },
          C: { cells: [[i, j, 'accent']] }
        },
        overlays: [
          {
            type: 'cell-arrow-curve',
            from: { matrix: 'A', row: i, col: j },
            to: { matrix: 'C', row: i, col: j },
            style: 'primary',
            curveOffset: 35
          }
        ]
      });
    }
  }

  scenes.push({
    title: 'Done',
    formula:
      `C is filled. Every entry c<sub>i,j</sub> = k · a<sub>i,j</sub>. ` +
      `Scalar multiplication is element-wise: it preserves shape and ` +
      `scales every cell by the same factor k.`,
    matrices: baseMatrices(makeCOverrides(rows * cols - 1)),
    layout: baseLayout,
    highlights: {}
  });

  return scenes;
}

function InfoIcon({ tip }) {
  return (
    <span
      className="sm-info"
      tabIndex={0}
      aria-label="More info"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#dbeafe',
        color: '#1e40af',
        fontSize: '11px',
        fontWeight: 700,
        cursor: 'help',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1,
        userSelect: 'none',
        flexShrink: 0
      }}
    >
      ?
      <span className="sm-tip">{tip}</span>
    </span>
  );
}

function FieldLabel({ children, info }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      margin: '0 0 10px'
    }}>
      <span style={{
        fontSize: '16px',
        color: '#1e40af',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        lineHeight: 1.2
      }}>
        {children}
      </span>
      {info && <InfoIcon tip={info} />}
    </div>
  );
}

function Stepper({ value, onChange, min, max }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 6px 4px 10px',
      borderRadius: '6px',
      background: 'white',
      border: '1px solid #cbd5e1'
    }}>
      <span style={{
        ...mathInlineStyle,
        fontWeight: 500,
        minWidth: '10px',
        textAlign: 'center',
        color: '#0f172a'
      }}>
        {value}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
        <button
          className="sm-stepper-btn"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          style={chevButtonStyle}
          aria-label="Increase"
        >▲</button>
        <button
          className="sm-stepper-btn"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          style={chevButtonStyle}
          aria-label="Decrease"
        >▼</button>
      </span>
    </span>
  );
}

export default function ScalarMultiplicationWrapper({
  defaultRows = 2,
  defaultCols = 3,
  dimensionRange = [1, 2, 3, 4, 5],
  title = 'Scalar Multiplication',
  subtitle = 'Symbolic visualization of k · A = C, cell by cell.',
  defaultSpeed = 1200
}) {
  const [rows, setRows] = useState(defaultRows);
  const [cols, setCols] = useState(defaultCols);

  const min = dimensionRange[0];
  const max = dimensionRange[dimensionRange.length - 1];

  const scenes = useMemo(
    () => buildScenes(rows, cols),
    [rows, cols]
  );

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style dangerouslySetInnerHTML={{ __html: SM_CSS }} />

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {/* {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }}>
              {title}
            </h2>
          )} */}
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px'
      }}>
        <FieldLabel info={SCALAR_INFO}>Dimensions of A</FieldLabel>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap'
        }}>
          <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
          <Stepper value={rows} onChange={setRows} min={min} max={max} />
          <span style={{ color: '#94a3b8' }}>×</span>
          <Stepper value={cols} onChange={setCols} min={min} max={max} />
        </div>
      </div>

      <div style={{ marginTop: '18px' }}>
        <ScenePlayer
          scenes={scenes}
          defaultSpeed={defaultSpeed}
          showSpeedSelector={true}
          showStepIndicator={true}
          showStepLog={true}
          stepLogTitle="Step explanations"
          sceneCanvasProps={{ showCaption: false }}
        />
      </div>
    </div>
  );
}