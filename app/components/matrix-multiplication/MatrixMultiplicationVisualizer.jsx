// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import { motion } from 'framer-motion';

// // // // // // // // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // // // // // // // //   const d = (() => {
// // // // // // // // //     switch (type) {
// // // // // // // // //       case 'square':
// // // // // // // // //         const inset = Math.min(width, height) * 0.1;
// // // // // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // // // // // // // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // // // // // // // //       case 'straight':
// // // // // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // // // // // // // //       case 'curved':
// // // // // // // // //       default:
// // // // // // // // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // // // // // // // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // // // // // // // //     }
// // // // // // // // //   })();
// // // // // // // // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // // // // // // // };

// // // // // // // // // const MatrixSVGVisualizer = ({ 
// // // // // // // // //   matrix,
// // // // // // // // //   cellSize = 40,
// // // // // // // // //   padding = 10,
// // // // // // // // //   fontSize = 16,
// // // // // // // // //   textColor = 'black',
// // // // // // // // //   braceColor = 'blue',
// // // // // // // // //   braceWidth = 2,
// // // // // // // // //   braceType = 'curved',
// // // // // // // // //   showCellBorders = false,
// // // // // // // // //   cellBorderColor = 'lightgray',
// // // // // // // // //   cellBorderWidth = 1
// // // // // // // // // }) => {
// // // // // // // // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // // // // // // // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // // // // // // // //   }

// // // // // // // // //   const rows = matrix.length;
// // // // // // // // //   const cols = matrix[0].length;
// // // // // // // // //   const width = cols * cellSize + 2 * padding;
// // // // // // // // //   const height = rows * cellSize + 2 * padding;

// // // // // // // // //   return (
// // // // // // // // //     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // // // // // // //       {showCellBorders && matrix.map((row, i) =>
// // // // // // // // //         row.map((_, j) => (
// // // // // // // // //           <rect
// // // // // // // // //             key={`border-${i}-${j}`}
// // // // // // // // //             x={j * cellSize + padding}
// // // // // // // // //             y={i * cellSize + padding}
// // // // // // // // //             width={cellSize}
// // // // // // // // //             height={cellSize}
// // // // // // // // //             fill="none"
// // // // // // // // //             stroke={cellBorderColor}
// // // // // // // // //             strokeWidth={cellBorderWidth}
// // // // // // // // //           />
// // // // // // // // //         ))
// // // // // // // // //       )}
// // // // // // // // //       {matrix.map((row, i) =>
// // // // // // // // //         row.map((value, j) => (
// // // // // // // // //           <text
// // // // // // // // //             key={`text-${i}-${j}`}
// // // // // // // // //             x={j * cellSize + padding + cellSize / 2}
// // // // // // // // //             y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // // // // // // // //             fontSize={fontSize}
// // // // // // // // //             textAnchor="middle"
// // // // // // // // //             fill={textColor}
// // // // // // // // //           >
// // // // // // // // //             {value !== null && value !== undefined ? value : ''}
// // // // // // // // //           </text>
// // // // // // // // //         ))
// // // // // // // // //       )}
// // // // // // // // //       <BraceSVG 
// // // // // // // // //         type={braceType}
// // // // // // // // //         x={padding}
// // // // // // // // //         y={padding}
// // // // // // // // //         width={width - 2 * padding}
// // // // // // // // //         height={height - 2 * padding}
// // // // // // // // //         color={braceColor}
// // // // // // // // //         strokeWidth={braceWidth}
// // // // // // // // //       />
// // // // // // // // //     </svg>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // // // // // // // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // // // // // // // //     <text
// // // // // // // // //       x="50%"
// // // // // // // // //       y="50%"
// // // // // // // // //       fontSize={fontSize}
// // // // // // // // //       textAnchor="middle"
// // // // // // // // //       dominantBaseline="central"
// // // // // // // // //       fill={color}
// // // // // // // // //     >
// // // // // // // // //       {symbol}
// // // // // // // // //     </text>
// // // // // // // // //   </svg>
// // // // // // // // // );

// // // // // // // // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // // //   const [result, setResult] = useState([]);
// // // // // // // // //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: null, matrix2: null, result: null });

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // // // // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill(null)));
// // // // // // // // //     } else {
// // // // // // // // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // // // // // // // //     }
// // // // // // // // //   }, [matrix1, matrix2]);

// // // // // // // // //   const nextStep = () => {
// // // // // // // // //     if (!matrix1 || !matrix2 || !result) return;

// // // // // // // // //     const totalSteps = matrix1.length * matrix2[0].length;
// // // // // // // // //     if (step < totalSteps) {
// // // // // // // // //       const row = Math.floor(step / matrix2[0].length);
// // // // // // // // //       const col = step % matrix2[0].length;
      
// // // // // // // // //       const newResult = [...result];
// // // // // // // // //       newResult[row][col] = matrix1[row].reduce((sum, value, index) => sum + value * matrix2[index][col], 0);
      
// // // // // // // // //       setResult(newResult);
// // // // // // // // //       setHighlightedCells({
// // // // // // // // //         matrix1: { row, col: null },
// // // // // // // // //         matrix2: { row: null, col },
// // // // // // // // //         result: { row, col }
// // // // // // // // //       });
// // // // // // // // //       setStep(step + 1);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const resetVisualization = () => {
// // // // // // // // //     setStep(0);
// // // // // // // // //     if (matrix1 && matrix2) {
// // // // // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill(null)));
// // // // // // // // //     }
// // // // // // // // //     setHighlightedCells({ matrix1: null, matrix2: null, result: null });
// // // // // // // // //   };

// // // // // // // // //   if (!matrix1 || !matrix2) {
// // // // // // // // //     return <div>Please provide valid matrices for multiplication.</div>;
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div className="matrix-multiplication-visualizer">
// // // // // // // // //       <div className="matrices-container">
// // // // // // // // //         <MatrixSVGVisualizer matrix={matrix1} />
// // // // // // // // //         <SymbolSVG symbol="×" />
// // // // // // // // //         <MatrixSVGVisualizer matrix={matrix2} />
// // // // // // // // //         <SymbolSVG symbol="=" />
// // // // // // // // //         <MatrixSVGVisualizer matrix={result} />
// // // // // // // // //       </div>
// // // // // // // // //       <div className="controls">
// // // // // // // // //         <button onClick={nextStep} disabled={step >= matrix1.length * matrix2[0].length}>Next Step</button>
// // // // // // // // //         <button onClick={resetVisualization}>Reset</button>
// // // // // // // // //       </div>
// // // // // // // // //       <style jsx>{`
// // // // // // // // //         .matrix-multiplication-visualizer {
// // // // // // // // //           font-family: Arial, sans-serif;
// // // // // // // // //           display: flex;
// // // // // // // // //           flex-direction: column;
// // // // // // // // //           align-items: center;
// // // // // // // // //         }
// // // // // // // // //         .matrices-container {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           gap: 20px;
// // // // // // // // //         }
// // // // // // // // //         .controls {
// // // // // // // // //           margin-top: 20px;
// // // // // // // // //         }
// // // // // // // // //         button {
// // // // // // // // //           margin: 0 10px;
// // // // // // // // //           padding: 5px 10px;
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default MatrixMultiplicationVisualizer;
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { motion } from 'framer-motion';

// // // // // // // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // // // // // // //   const d = (() => {
// // // // // // // //     switch (type) {
// // // // // // // //       case 'square':
// // // // // // // //         const inset = Math.min(width, height) * 0.1;
// // // // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // // // // // // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // // // // // // //       case 'straight':
// // // // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // // // // // // //       case 'curved':
// // // // // // // //       default:
// // // // // // // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // // // // // // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // // // // // // //     }
// // // // // // // //   })();
// // // // // // // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // // // // // // };

// // // // // // // // const MatrixSVGVisualizer = ({ 
// // // // // // // //   matrix,
// // // // // // // //   cellSize = 40,
// // // // // // // //   padding = 10,
// // // // // // // //   fontSize = 16,
// // // // // // // //   textColor = 'black',
// // // // // // // //   braceColor = 'blue',
// // // // // // // //   braceWidth = 2,
// // // // // // // //   braceType = 'curved',
// // // // // // // //   showCellBorders = false,
// // // // // // // //   cellBorderColor = 'lightgray',
// // // // // // // //   cellBorderWidth = 1,
// // // // // // // //   highlightedCell = null
// // // // // // // // }) => {
// // // // // // // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // // // // // // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // // // // // // //   }

// // // // // // // //   const rows = matrix.length;
// // // // // // // //   const cols = matrix[0].length;
// // // // // // // //   const width = cols * cellSize + 2 * padding;
// // // // // // // //   const height = rows * cellSize + 2 * padding;

// // // // // // // //   return (
// // // // // // // //     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // // // // // //       {showCellBorders && matrix.map((row, i) =>
// // // // // // // //         row.map((_, j) => (
// // // // // // // //           <rect
// // // // // // // //             key={`border-${i}-${j}`}
// // // // // // // //             x={j * cellSize + padding}
// // // // // // // //             y={i * cellSize + padding}
// // // // // // // //             width={cellSize}
// // // // // // // //             height={cellSize}
// // // // // // // //             fill={highlightedCell && highlightedCell.row === i && highlightedCell.col === j ? 'yellow' : 'none'}
// // // // // // // //             stroke={cellBorderColor}
// // // // // // // //             strokeWidth={cellBorderWidth}
// // // // // // // //           />
// // // // // // // //         ))
// // // // // // // //       )}
// // // // // // // //       {matrix.map((row, i) =>
// // // // // // // //         row.map((value, j) => (
// // // // // // // //           <text
// // // // // // // //             key={`text-${i}-${j}`}
// // // // // // // //             x={j * cellSize + padding + cellSize / 2}
// // // // // // // //             y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // // // // // // //             fontSize={fontSize}
// // // // // // // //             textAnchor="middle"
// // // // // // // //             fill={textColor}
// // // // // // // //           >
// // // // // // // //             {value !== null && value !== undefined ? value : ''}
// // // // // // // //           </text>
// // // // // // // //         ))
// // // // // // // //       )}
// // // // // // // //       <BraceSVG 
// // // // // // // //         type={braceType}
// // // // // // // //         x={padding}
// // // // // // // //         y={padding}
// // // // // // // //         width={width - 2 * padding}
// // // // // // // //         height={height - 2 * padding}
// // // // // // // //         color={braceColor}
// // // // // // // //         strokeWidth={braceWidth}
// // // // // // // //       />
// // // // // // // //     </svg>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // // // // // // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // // // // // // //     <text
// // // // // // // //       x="50%"
// // // // // // // //       y="50%"
// // // // // // // //       fontSize={fontSize}
// // // // // // // //       textAnchor="middle"
// // // // // // // //       dominantBaseline="central"
// // // // // // // //       fill={color}
// // // // // // // //     >
// // // // // // // //       {symbol}
// // // // // // // //     </text>
// // // // // // // //   </svg>
// // // // // // // // );

// // // // // // // // const CalculationStep = ({ step }) => (
// // // // // // // //   <div className="calculation-step">
// // // // // // // //     {step.map((part, index) => (
// // // // // // // //       <span key={index} className={part.highlighted ? 'highlighted' : ''}>
// // // // // // // //         {part.value}
// // // // // // // //       </span>
// // // // // // // //     ))}
// // // // // // // //   </div>
// // // // // // // // );

// // // // // // // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // //   const [result, setResult] = useState([]);
// // // // // // // //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: null, matrix2: null, result: null });
// // // // // // // //   const [currentCalculation, setCurrentCalculation] = useState([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // // // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill(null)));
// // // // // // // //     } else {
// // // // // // // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // // // // // // //     }
// // // // // // // //   }, [matrix1, matrix2]);

// // // // // // // //   const nextStep = () => {
// // // // // // // //     if (!matrix1 || !matrix2 || !result) return;

// // // // // // // //     const totalSteps = matrix1.length * matrix2[0].length;
// // // // // // // //     if (step < totalSteps) {
// // // // // // // //       const row = Math.floor(step / matrix2[0].length);
// // // // // // // //       const col = step % matrix2[0].length;
      
// // // // // // // //       const newResult = [...result];
// // // // // // // //       let sum = 0;
// // // // // // // //       const calculation = [];

// // // // // // // //       for (let i = 0; i < matrix1[0].length; i++) {
// // // // // // // //         const product = matrix1[row][i] * matrix2[i][col];
// // // // // // // //         sum += product;
// // // // // // // //         calculation.push(
// // // // // // // //           { value: `(${matrix1[row][i]} × ${matrix2[i][col]})`, highlighted: true },
// // // // // // // //           { value: i < matrix1[0].length - 1 ? ' + ' : ' = ', highlighted: false }
// // // // // // // //         );
// // // // // // // //       }
// // // // // // // //       calculation.push({ value: sum.toString(), highlighted: true });

// // // // // // // //       newResult[row][col] = sum;
      
// // // // // // // //       setResult(newResult);
// // // // // // // //       setHighlightedCells({
// // // // // // // //         matrix1: { row, col: null },
// // // // // // // //         matrix2: { row: null, col },
// // // // // // // //         result: { row, col }
// // // // // // // //       });
// // // // // // // //       setCurrentCalculation(calculation);
// // // // // // // //       setStep(step + 1);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const resetVisualization = () => {
// // // // // // // //     setStep(0);
// // // // // // // //     if (matrix1 && matrix2) {
// // // // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill(null)));
// // // // // // // //     }
// // // // // // // //     setHighlightedCells({ matrix1: null, matrix2: null, result: null });
// // // // // // // //     setCurrentCalculation([]);
// // // // // // // //   };

// // // // // // // //   if (!matrix1 || !matrix2) {
// // // // // // // //     return <div>Please provide valid matrices for multiplication.</div>;
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="matrix-multiplication-visualizer">
// // // // // // // //       <div className="matrices-container">
// // // // // // // //         <MatrixSVGVisualizer matrix={matrix1} highlightedCell={highlightedCells.matrix1} showCellBorders={true} />
// // // // // // // //         <SymbolSVG symbol="×" />
// // // // // // // //         <MatrixSVGVisualizer matrix={matrix2} highlightedCell={highlightedCells.matrix2} showCellBorders={true} />
// // // // // // // //         <SymbolSVG symbol="=" />
// // // // // // // //         <MatrixSVGVisualizer matrix={result} highlightedCell={highlightedCells.result} showCellBorders={true} />
// // // // // // // //       </div>
// // // // // // // //       <div className="calculation-container">
// // // // // // // //         <h3>Current Calculation:</h3>
// // // // // // // //         <CalculationStep step={currentCalculation} />
// // // // // // // //       </div>
// // // // // // // //       <div className="controls">
// // // // // // // //         <button onClick={nextStep} disabled={step >= matrix1.length * matrix2[0].length}>Next Step</button>
// // // // // // // //         <button onClick={resetVisualization}>Reset</button>
// // // // // // // //       </div>
// // // // // // // //       <style jsx>{`
// // // // // // // //         .matrix-multiplication-visualizer {
// // // // // // // //           font-family: Arial, sans-serif;
// // // // // // // //           display: flex;
// // // // // // // //           flex-direction: column;
// // // // // // // //           align-items: center;
// // // // // // // //         }
// // // // // // // //         .matrices-container {
// // // // // // // //           display: flex;
// // // // // // // //           align-items: center;
// // // // // // // //           gap: 20px;
// // // // // // // //         }
// // // // // // // //         .calculation-container {
// // // // // // // //           margin-top: 20px;
// // // // // // // //           text-align: center;
// // // // // // // //         }
// // // // // // // //         .calculation-step {
// // // // // // // //           font-size: 18px;
// // // // // // // //           margin-bottom: 10px;
// // // // // // // //         }
// // // // // // // //         .highlighted {
// // // // // // // //           background-color: yellow;
// // // // // // // //           font-weight: bold;
// // // // // // // //         }
// // // // // // // //         .controls {
// // // // // // // //           margin-top: 20px;
// // // // // // // //         }
// // // // // // // //         button {
// // // // // // // //           margin: 0 10px;
// // // // // // // //           padding: 5px 10px;
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default MatrixMultiplicationVisualizer;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { motion } from 'framer-motion';

// // // // // // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // // // // // //   const d = (() => {
// // // // // // //     switch (type) {
// // // // // // //       case 'square':
// // // // // // //         const inset = Math.min(width, height) * 0.1;
// // // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // // // // // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // // // // // //       case 'straight':
// // // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // // // // // //       case 'curved':
// // // // // // //       default:
// // // // // // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // // // // // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // // // // // //     }
// // // // // // //   })();
// // // // // // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // // // // // };

// // // // // // // const MatrixSVGVisualizer = ({ 
// // // // // // //   matrix,
// // // // // // //   cellSize = 40,
// // // // // // //   padding = 10,
// // // // // // //   fontSize = 16,
// // // // // // //   textColor = 'black',
// // // // // // //   braceColor = 'blue',
// // // // // // //   braceWidth = 2,
// // // // // // //   braceType = 'curved',
// // // // // // //   showCellBorders = false,
// // // // // // //   cellBorderColor = 'lightgray',
// // // // // // //   cellBorderWidth = 1,
// // // // // // //   highlightedCell = null
// // // // // // // }) => {
// // // // // // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // // // // // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // // // // // //   }

// // // // // // //   const rows = matrix.length;
// // // // // // //   const cols = matrix[0].length;
// // // // // // //   const width = cols * cellSize + 2 * padding;
// // // // // // //   const height = rows * cellSize + 2 * padding;

// // // // // // //   return (
// // // // // // //     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // // // // //       {showCellBorders && matrix.map((row, i) =>
// // // // // // //         row.map((_, j) => (
// // // // // // //           <rect
// // // // // // //             key={`border-${i}-${j}`}
// // // // // // //             x={j * cellSize + padding}
// // // // // // //             y={i * cellSize + padding}
// // // // // // //             width={cellSize}
// // // // // // //             height={cellSize}
// // // // // // //             fill={highlightedCell && highlightedCell.row === i && highlightedCell.col === j ? 'yellow' : 'none'}
// // // // // // //             stroke={cellBorderColor}
// // // // // // //             strokeWidth={cellBorderWidth}
// // // // // // //           />
// // // // // // //         ))
// // // // // // //       )}
// // // // // // //       {matrix.map((row, i) =>
// // // // // // //         row.map((value, j) => (
// // // // // // //           <text
// // // // // // //             key={`text-${i}-${j}`}
// // // // // // //             x={j * cellSize + padding + cellSize / 2}
// // // // // // //             y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // // // // // //             fontSize={fontSize}
// // // // // // //             textAnchor="middle"
// // // // // // //             fill={textColor}
// // // // // // //           >
// // // // // // //             {value !== null && value !== undefined ? value : ''}
// // // // // // //           </text>
// // // // // // //         ))
// // // // // // //       )}
// // // // // // //       <BraceSVG 
// // // // // // //         type={braceType}
// // // // // // //         x={padding}
// // // // // // //         y={padding}
// // // // // // //         width={width - 2 * padding}
// // // // // // //         height={height - 2 * padding}
// // // // // // //         color={braceColor}
// // // // // // //         strokeWidth={braceWidth}
// // // // // // //       />
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // // // // // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // // // // // //     <text
// // // // // // //       x="50%"
// // // // // // //       y="50%"
// // // // // // //       fontSize={fontSize}
// // // // // // //       textAnchor="middle"
// // // // // // //       dominantBaseline="central"
// // // // // // //       fill={color}
// // // // // // //     >
// // // // // // //       {symbol}
// // // // // // //     </text>
// // // // // // //   </svg>
// // // // // // // );

// // // // // // // const CalculationStep = ({ step }) => (
// // // // // // //   <div className="calculation-step">
// // // // // // //     {step}
// // // // // // //   </div>
// // // // // // // );

// // // // // // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // // // // // //   const [step, setStep] = useState(0);
// // // // // // //   const [result, setResult] = useState([]);
// // // // // // //   const [currentCalculation, setCurrentCalculation] = useState('');
// // // // // // //   const [currentElement, setCurrentElement] = useState({ row: 0, col: 0 });
// // // // // // //   const [subStep, setSubStep] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // // // // //     } else {
// // // // // // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // // // // // //     }
// // // // // // //   }, [matrix1, matrix2]);

// // // // // // //   const nextStep = () => {
// // // // // // //     if (!matrix1 || !matrix2 || !result) return;

// // // // // // //     const totalElements = matrix1.length * matrix2[0].length;
// // // // // // //     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
    
// // // // // // //     if (step < totalElements * stepsPerElement) {
// // // // // // //       const elementIndex = Math.floor(step / stepsPerElement);
// // // // // // //       const row = Math.floor(elementIndex / matrix2[0].length);
// // // // // // //       const col = elementIndex % matrix2[0].length;
// // // // // // //       const currentSubStep = step % stepsPerElement;

// // // // // // //       setCurrentElement({ row, col });

// // // // // // //       if (currentSubStep < matrix1[0].length) {
// // // // // // //         // Multiplication step
// // // // // // //         const a = matrix1[row][currentSubStep];
// // // // // // //         const b = matrix2[currentSubStep][col];
// // // // // // //         const product = a * b;
// // // // // // //         setCurrentCalculation(`${a} × ${b} = ${product}`);
        
// // // // // // //         const newResult = [...result];
// // // // // // //         if (currentSubStep === 0) {
// // // // // // //           newResult[row][col] = product.toString();
// // // // // // //         } else {
// // // // // // //           newResult[row][col] += ` + ${product}`;
// // // // // // //         }
// // // // // // //         setResult(newResult);
// // // // // // //       } else {
// // // // // // //         // Final addition step
// // // // // // //         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
// // // // // // //         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
// // // // // // //         const newResult = [...result];
// // // // // // //         newResult[row][col] = sum.toString();
// // // // // // //         setResult(newResult);
// // // // // // //       }

// // // // // // //       setStep(step + 1);
// // // // // // //       setSubStep(currentSubStep);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const resetVisualization = () => {
// // // // // // //     setStep(0);
// // // // // // //     setSubStep(0);
// // // // // // //     setCurrentElement({ row: 0, col: 0 });
// // // // // // //     setCurrentCalculation('');
// // // // // // //     if (matrix1 && matrix2) {
// // // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (!matrix1 || !matrix2) {
// // // // // // //     return <div>Please provide valid matrices for multiplication.</div>;
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="matrix-multiplication-visualizer">
// // // // // // //       <div className="matrices-container">
// // // // // // //         <MatrixSVGVisualizer matrix={matrix1} highlightedCell={{ row: currentElement.row, col: null }} showCellBorders={true} />
// // // // // // //         <SymbolSVG symbol="×" />
// // // // // // //         <MatrixSVGVisualizer matrix={matrix2} highlightedCell={{ row: null, col: currentElement.col }} showCellBorders={true} />
// // // // // // //         <SymbolSVG symbol="=" />
// // // // // // //         <MatrixSVGVisualizer matrix={result} highlightedCell={currentElement} showCellBorders={true} />
// // // // // // //       </div>
// // // // // // //       <div className="calculation-container">
// // // // // // //         <h3>Current Calculation:</h3>
// // // // // // //         <CalculationStep step={currentCalculation} />
// // // // // // //       </div>
// // // // // // //       <div className="controls">
// // // // // // //         <button onClick={nextStep} disabled={step >= matrix1.length * matrix2[0].length * (matrix1[0].length + 1)}>Next Step</button>
// // // // // // //         <button onClick={resetVisualization}>Reset</button>
// // // // // // //       </div>
// // // // // // //       <style jsx>{`
// // // // // // //         .matrix-multiplication-visualizer {
// // // // // // //           font-family: Arial, sans-serif;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           align-items: center;
// // // // // // //         }
// // // // // // //         .matrices-container {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 20px;
// // // // // // //         }
// // // // // // //         .calculation-container {
// // // // // // //           margin-top: 20px;
// // // // // // //           text-align: center;
// // // // // // //         }
// // // // // // //         .calculation-step {
// // // // // // //           font-size: 18px;
// // // // // // //           margin-bottom: 10px;
// // // // // // //         }
// // // // // // //         .controls {
// // // // // // //           margin-top: 20px;
// // // // // // //         }
// // // // // // //         button {
// // // // // // //           margin: 0 10px;
// // // // // // //           padding: 5px 10px;
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MatrixMultiplicationVisualizer;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { motion } from 'framer-motion';

// // // // // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // // // // //   const d = (() => {
// // // // // //     switch (type) {
// // // // // //       case 'square':
// // // // // //         const inset = Math.min(width, height) * 0.1;
// // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // // // // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // // // // //       case 'straight':
// // // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // // // // //       case 'curved':
// // // // // //       default:
// // // // // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // // // // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // // // // //     }
// // // // // //   })();
// // // // // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // // // // };

// // // // // // const MatrixSVGVisualizer = ({ 
// // // // // //   matrix,
// // // // // //   cellSize = 40,
// // // // // //   padding = 10,
// // // // // //   fontSize = 16,
// // // // // //   textColor = 'black',
// // // // // //   braceColor = 'blue',
// // // // // //   braceWidth = 2,
// // // // // //   braceType = 'curved',
// // // // // //   showCellBorders = false,
// // // // // //   cellBorderColor = 'lightgray',
// // // // // //   cellBorderWidth = 1,
// // // // // //   highlightedCells = []
// // // // // // }) => {
// // // // // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // // // // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // // // // //   }

// // // // // //   const rows = matrix.length;
// // // // // //   const cols = matrix[0].length;
// // // // // //   const width = cols * cellSize + 2 * padding;
// // // // // //   const height = rows * cellSize + 2 * padding;

// // // // // //   return (
// // // // // //     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // // // //       {matrix.map((row, i) =>
// // // // // //         row.map((_, j) => (
// // // // // //           <rect
// // // // // //             key={`cell-${i}-${j}`}
// // // // // //             x={j * cellSize + padding}
// // // // // //             y={i * cellSize + padding}
// // // // // //             width={cellSize}
// // // // // //             height={cellSize}
// // // // // //             fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
// // // // // //             stroke={cellBorderColor}
// // // // // //             strokeWidth={cellBorderWidth}
// // // // // //           />
// // // // // //         ))
// // // // // //       )}
// // // // // //       {matrix.map((row, i) =>
// // // // // //         row.map((value, j) => (
// // // // // //           <text
// // // // // //             key={`text-${i}-${j}`}
// // // // // //             x={j * cellSize + padding + cellSize / 2}
// // // // // //             y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // // // // //             fontSize={fontSize}
// // // // // //             textAnchor="middle"
// // // // // //             fill={textColor}
// // // // // //           >
// // // // // //             {value !== null && value !== undefined ? value : ''}
// // // // // //           </text>
// // // // // //         ))
// // // // // //       )}
// // // // // //       <BraceSVG 
// // // // // //         type={braceType}
// // // // // //         x={padding}
// // // // // //         y={padding}
// // // // // //         width={width - 2 * padding}
// // // // // //         height={height - 2 * padding}
// // // // // //         color={braceColor}
// // // // // //         strokeWidth={braceWidth}
// // // // // //       />
// // // // // //     </svg>
// // // // // //   );
// // // // // // };

// // // // // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // // // // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // // // // //     <text
// // // // // //       x="50%"
// // // // // //       y="50%"
// // // // // //       fontSize={fontSize}
// // // // // //       textAnchor="middle"
// // // // // //       dominantBaseline="central"
// // // // // //       fill={color}
// // // // // //     >
// // // // // //       {symbol}
// // // // // //     </text>
// // // // // //   </svg>
// // // // // // );

// // // // // // const CalculationStep = ({ step }) => (
// // // // // //   <div className="calculation-step">
// // // // // //     {step}
// // // // // //   </div>
// // // // // // );

// // // // // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // // // // //   const [step, setStep] = useState(0);
// // // // // //   const [result, setResult] = useState([]);
// // // // // //   const [currentCalculation, setCurrentCalculation] = useState('');
// // // // // //   const [currentElement, setCurrentElement] = useState({ row: 0, col: 0 });
// // // // // //   const [subStep, setSubStep] = useState(0);
// // // // // //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });

// // // // // //   useEffect(() => {
// // // // // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // // // //     } else {
// // // // // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // // // // //     }
// // // // // //   }, [matrix1, matrix2]);

// // // // // //   const nextStep = () => {
// // // // // //     if (!matrix1 || !matrix2 || !result) return;

// // // // // //     const totalElements = matrix1.length * matrix2[0].length;
// // // // // //     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
    
// // // // // //     if (step < totalElements * stepsPerElement) {
// // // // // //       const elementIndex = Math.floor(step / stepsPerElement);
// // // // // //       const row = Math.floor(elementIndex / matrix2[0].length);
// // // // // //       const col = elementIndex % matrix2[0].length;
// // // // // //       const currentSubStep = step % stepsPerElement;

// // // // // //       setCurrentElement({ row, col });

// // // // // //       if (currentSubStep < matrix1[0].length) {
// // // // // //         // Multiplication step
// // // // // //         const a = matrix1[row][currentSubStep];
// // // // // //         const b = matrix2[currentSubStep][col];
// // // // // //         const product = a * b;
// // // // // //         setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
// // // // // //         const newResult = [...result];
// // // // // //         if (currentSubStep === 0) {
// // // // // //           newResult[row][col] = product.toString();
// // // // // //         } else {
// // // // // //           newResult[row][col] += ` + ${product}`;
// // // // // //         }
// // // // // //         setResult(newResult);

// // // // // //         setHighlightedCells({
// // // // // //           matrix1: [{ row, col: currentSubStep }],
// // // // // //           matrix2: [{ row: currentSubStep, col }],
// // // // // //           result: [{ row, col }]
// // // // // //         });
// // // // // //       } else {
// // // // // //         // Final addition step
// // // // // //         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
// // // // // //         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
// // // // // //         const newResult = [...result];
// // // // // //         newResult[row][col] = sum.toString();
// // // // // //         setResult(newResult);

// // // // // //         setHighlightedCells({
// // // // // //           matrix1: [],
// // // // // //           matrix2: [],
// // // // // //           result: [{ row, col }]
// // // // // //         });
// // // // // //       }

// // // // // //       setStep(step + 1);
// // // // // //       setSubStep(currentSubStep);
// // // // // //     }
// // // // // //   };

// // // // // //   const resetVisualization = () => {
// // // // // //     setStep(0);
// // // // // //     setSubStep(0);
// // // // // //     setCurrentElement({ row: 0, col: 0 });
// // // // // //     setCurrentCalculation('');
// // // // // //     setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // // // // //     if (matrix1 && matrix2) {
// // // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // // // //     }
// // // // // //   };

// // // // // //   if (!matrix1 || !matrix2) {
// // // // // //     return <div>Please provide valid matrices for multiplication.</div>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="matrix-multiplication-visualizer">
// // // // // //       <div className="matrices-container">
// // // // // //         <MatrixSVGVisualizer matrix={matrix1} highlightedCells={highlightedCells.matrix1} showCellBorders={true} />
// // // // // //         <SymbolSVG symbol="×" />
// // // // // //         <MatrixSVGVisualizer matrix={matrix2} highlightedCells={highlightedCells.matrix2} showCellBorders={true} />
// // // // // //         <SymbolSVG symbol="=" />
// // // // // //         <MatrixSVGVisualizer matrix={result} highlightedCells={highlightedCells.result} showCellBorders={true} />
// // // // // //       </div>
// // // // // //       <div className="calculation-container">
// // // // // //         <h3>Current Calculation:</h3>
// // // // // //         <CalculationStep step={currentCalculation} />
// // // // // //       </div>
// // // // // //       <div className="controls">
// // // // // //         <button onClick={nextStep} disabled={step >= matrix1.length * matrix2[0].length * (matrix1[0].length + 1)}>Next Step</button>
// // // // // //         <button onClick={resetVisualization}>Reset</button>
// // // // // //       </div>
// // // // // //       <style jsx>{`
// // // // // //         .matrix-multiplication-visualizer {
// // // // // //           font-family: Arial, sans-serif;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           align-items: center;
// // // // // //         }
// // // // // //         .matrices-container {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 20px;
// // // // // //         }
// // // // // //         .calculation-container {
// // // // // //           margin-top: 20px;
// // // // // //           text-align: center;
// // // // // //         }
// // // // // //         .calculation-step {
// // // // // //           font-size: 18px;
// // // // // //           margin-bottom: 10px;
// // // // // //         }
// // // // // //         .controls {
// // // // // //           margin-top: 20px;
// // // // // //         }
// // // // // //         button {
// // // // // //           margin: 0 10px;
// // // // // //           padding: 5px 10px;
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MatrixMultiplicationVisualizer;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { motion } from 'framer-motion';

// // // // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // // // //   const d = (() => {
// // // // //     switch (type) {
// // // // //       case 'square':
// // // // //         const inset = Math.min(width, height) * 0.1;
// // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // // // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // // // //       case 'straight':
// // // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // // // //       case 'curved':
// // // // //       default:
// // // // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // // // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // // // //     }
// // // // //   })();
// // // // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // // // };

// // // // // const MatrixSVGVisualizer = ({ 
// // // // //   matrix,
// // // // //   label,
// // // // //   cellSize = 40,
// // // // //   padding = 10,
// // // // //   fontSize = 16,
// // // // //   textColor = 'black',
// // // // //   braceColor = 'blue',
// // // // //   braceWidth = 2,
// // // // //   braceType = 'curved',
// // // // //   showCellBorders = false,
// // // // //   cellBorderColor = 'lightgray',
// // // // //   cellBorderWidth = 1,
// // // // //   highlightedCells = []
// // // // // }) => {
// // // // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // // // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // // // //   }

// // // // //   const rows = matrix.length;
// // // // //   const cols = matrix[0].length;
// // // // //   const width = cols * cellSize + 2 * padding;
// // // // //   const height = rows * cellSize + 2 * padding;

// // // // //   return (
// // // // //     <div className="matrix-container">
// // // // //       <div className="matrix-label">{label}</div>
// // // // //       <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // // //         {matrix.map((row, i) =>
// // // // //           row.map((_, j) => (
// // // // //             <rect
// // // // //               key={`cell-${i}-${j}`}
// // // // //               x={j * cellSize + padding}
// // // // //               y={i * cellSize + padding}
// // // // //               width={cellSize}
// // // // //               height={cellSize}
// // // // //               fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
// // // // //               stroke={cellBorderColor}
// // // // //               strokeWidth={cellBorderWidth}
// // // // //             />
// // // // //           ))
// // // // //         )}
// // // // //         {matrix.map((row, i) =>
// // // // //           row.map((value, j) => (
// // // // //             <text
// // // // //               key={`text-${i}-${j}`}
// // // // //               x={j * cellSize + padding + cellSize / 2}
// // // // //               y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // // // //               fontSize={fontSize}
// // // // //               textAnchor="middle"
// // // // //               fill={textColor}
// // // // //             >
// // // // //               {value !== null && value !== undefined ? value : ''}
// // // // //             </text>
// // // // //           ))
// // // // //         )}
// // // // //         <BraceSVG 
// // // // //           type={braceType}
// // // // //           x={padding}
// // // // //           y={padding}
// // // // //           width={width - 2 * padding}
// // // // //           height={height - 2 * padding}
// // // // //           color={braceColor}
// // // // //           strokeWidth={braceWidth}
// // // // //         />
// // // // //       </svg>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // // // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // // // //     <text
// // // // //       x="50%"
// // // // //       y="50%"
// // // // //       fontSize={fontSize}
// // // // //       textAnchor="middle"
// // // // //       dominantBaseline="central"
// // // // //       fill={color}
// // // // //     >
// // // // //       {symbol}
// // // // //     </text>
// // // // //   </svg>
// // // // // );

// // // // // const CalculationStep = ({ step }) => (
// // // // //   <div className="calculation-step">
// // // // //     {step}
// // // // //   </div>
// // // // // );

// // // // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // // // //   const [step, setStep] = useState(0);
// // // // //   const [result, setResult] = useState([]);
// // // // //   const [currentCalculation, setCurrentCalculation] = useState('');
// // // // //   const [currentElement, setCurrentElement] = useState({ row: 0, col: 0 });
// // // // //   const [subStep, setSubStep] = useState(0);
// // // // //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });

// // // // //   useEffect(() => {
// // // // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // // //     } else {
// // // // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // // // //     }
// // // // //   }, [matrix1, matrix2]);

// // // // //   const nextStep = () => {
// // // // //     if (!matrix1 || !matrix2 || !result) return;

// // // // //     const totalElements = matrix1.length * matrix2[0].length;
// // // // //     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
    
// // // // //     if (step < totalElements * stepsPerElement) {
// // // // //       const elementIndex = Math.floor(step / stepsPerElement);
// // // // //       const row = Math.floor(elementIndex / matrix2[0].length);
// // // // //       const col = elementIndex % matrix2[0].length;
// // // // //       const currentSubStep = step % stepsPerElement;

// // // // //       setCurrentElement({ row, col });

// // // // //       if (currentSubStep < matrix1[0].length) {
// // // // //         // Multiplication step
// // // // //         const a = matrix1[row][currentSubStep];
// // // // //         const b = matrix2[currentSubStep][col];
// // // // //         const product = a * b;
// // // // //         setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
// // // // //         const newResult = [...result];
// // // // //         if (currentSubStep === 0) {
// // // // //           newResult[row][col] = `${a}×${b}`;
// // // // //         } else {
// // // // //           newResult[row][col] += ` + ${a}×${b}`;
// // // // //         }
// // // // //         setResult(newResult);

// // // // //         setHighlightedCells({
// // // // //           matrix1: [{ row, col: currentSubStep }],
// // // // //           matrix2: [{ row: currentSubStep, col }],
// // // // //           result: [{ row, col }]
// // // // //         });
// // // // //       } else {
// // // // //         // Final addition step
// // // // //         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
// // // // //         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
// // // // //         const newResult = [...result];
// // // // //         newResult[row][col] += ` = ${sum}`;
// // // // //         setResult(newResult);

// // // // //         setHighlightedCells({
// // // // //           matrix1: [],
// // // // //           matrix2: [],
// // // // //           result: [{ row, col }]
// // // // //         });
// // // // //       }

// // // // //       setStep(step + 1);
// // // // //       setSubStep(currentSubStep);
// // // // //     }
// // // // //   };

// // // // //   const resetVisualization = () => {
// // // // //     setStep(0);
// // // // //     setSubStep(0);
// // // // //     setCurrentElement({ row: 0, col: 0 });
// // // // //     setCurrentCalculation('');
// // // // //     setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // // // //     if (matrix1 && matrix2) {
// // // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // // //     }
// // // // //   };

// // // // //   if (!matrix1 || !matrix2) {
// // // // //     return <div>Please provide valid matrices for multiplication.</div>;
// // // // //   }

// // // // //   return (
// // // // //     <div className="matrix-multiplication-visualizer">
// // // // //       <div className="matrices-container">
// // // // //         <MatrixSVGVisualizer matrix={matrix1} label="A" highlightedCells={highlightedCells.matrix1} showCellBorders={true} />
// // // // //         <SymbolSVG symbol="×" />
// // // // //         <MatrixSVGVisualizer matrix={matrix2} label="B" highlightedCells={highlightedCells.matrix2} showCellBorders={true} />
// // // // //         <SymbolSVG symbol="=" />
// // // // //         <MatrixSVGVisualizer matrix={result} label="C" highlightedCells={highlightedCells.result} showCellBorders={true} />
// // // // //       </div>
// // // // //       <div className="calculation-container">
// // // // //         <h3>Current Calculation:</h3>
// // // // //         <CalculationStep step={currentCalculation} />
// // // // //       </div>
// // // // //       <div className="controls">
// // // // //         <button onClick={nextStep} disabled={step >= matrix1.length * matrix2[0].length * (matrix1[0].length + 1)}>Next Step</button>
// // // // //         <button onClick={resetVisualization}>Reset</button>
// // // // //       </div>
// // // // //       <style jsx>{`
// // // // //         .matrix-multiplication-visualizer {
// // // // //           font-family: Arial, sans-serif;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center;
// // // // //         }
// // // // //         .matrices-container {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           gap: 20px;
// // // // //         }
// // // // //         .matrix-container {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center;
// // // // //         }
// // // // //         .matrix-label {
// // // // //           font-size: 24px;
// // // // //           font-weight: bold;
// // // // //           margin-bottom: 10px;
// // // // //         }
// // // // //         .calculation-container {
// // // // //           margin-top: 20px;
// // // // //           text-align: center;
// // // // //         }
// // // // //         .calculation-step {
// // // // //           font-size: 18px;
// // // // //           margin-bottom: 10px;
// // // // //         }
// // // // //         .controls {
// // // // //           margin-top: 20px;
// // // // //         }
// // // // //         button {
// // // // //           margin: 0 10px;
// // // // //           padding: 5px 10px;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MatrixMultiplicationVisualizer;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { motion } from 'framer-motion';

// // // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // // //   const d = (() => {
// // // //     switch (type) {
// // // //       case 'square':
// // // //         const inset = Math.min(width, height) * 0.1;
// // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // // //       case 'straight':
// // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // // //       case 'curved':
// // // //       default:
// // // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // // //     }
// // // //   })();
// // // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // // };

// // // // const MatrixSVGVisualizer = ({ 
// // // //   matrix,
// // // //   label,
// // // //   cellSize = 40,
// // // //   padding = 10,
  
// // // //   fontSize = 16,
// // // //   textColor = 'black',
// // // //   braceColor = 'blue',
// // // //   braceWidth = 1,
// // // //   braceType = 'curved',
// // // //   showCellBorders = false,
// // // //   cellBorderColor = 'lightgray',
// // // //   cellBorderWidth = 1,
// // // //   highlightedCells = [],
// // // //   isResultMatrix = false
// // // // }) => {
// // // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // // //   }

// // // //   const rows = matrix.length;
// // // //   const cols = matrix[0].length;
// // // //   const actualCellSize = isResultMatrix ? cellSize * 3 : cellSize;
// // // //   const width = cols * actualCellSize + 2 * padding;
// // // //   const height = rows * cellSize + 2 * padding;

// // // //   return (
// // // //     <div className="matrix-container">
// // // //       <div className="matrix-label">{label}</div>
// // // //       <svg width={width+5} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // //         {matrix.map((row, i) =>
// // // //           row.map((_, j) => (
// // // //             <rect
// // // //               key={`cell-${i}-${j}`}
// // // //               x={j * actualCellSize + padding}
// // // //               y={i * cellSize + padding}
// // // //               width={actualCellSize}
// // // //               height={cellSize}
// // // //               fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
// // // //               stroke={cellBorderColor}
// // // //               strokeWidth={cellBorderWidth}
// // // //             />
// // // //           ))
// // // //         )}
// // // //         {matrix.map((row, i) =>
// // // //           row.map((value, j) => (
// // // //             <text
// // // //               key={`text-${i}-${j}`}
// // // //               x={j * actualCellSize + padding + actualCellSize / 2}
// // // //               y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // // //               fontSize={fontSize}
// // // //               textAnchor="middle"
// // // //               fill={textColor}
// // // //             >
// // // //               {value !== null && value !== undefined ? value : ''}
// // // //             </text>
// // // //           ))
// // // //         )}
// // // //         <BraceSVG 
// // // //           type={braceType}
// // // //           x={padding}
// // // //           y={padding}
// // // //           width={width - 2 * padding}
// // // //           height={height - 2 * padding}
// // // //           color={braceColor}
// // // //           strokeWidth={braceWidth}
// // // //         />
// // // //       </svg>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // // //     <text
// // // //       x="50%"
// // // //       y="50%"
// // // //       fontSize={fontSize}
// // // //       textAnchor="middle"
// // // //       dominantBaseline="central"
// // // //       fill={color}
// // // //     >
// // // //       {symbol}
// // // //     </text>
// // // //   </svg>
// // // // );

// // // // const CalculationStep = ({ step }) => (
// // // //   <div className="calculation-step">
// // // //     {step}
// // // //   </div>
// // // // );

// // // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // // //   const [step, setStep] = useState(0);
// // // //   const [result, setResult] = useState([]);
// // // //   const [currentCalculation, setCurrentCalculation] = useState('');
// // // //   const [currentElement, setCurrentElement] = useState({ row: 0, col: 0 });
// // // //   const [subStep, setSubStep] = useState(0);
// // // //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });
// // // //   const [isComplete, setIsComplete] = useState(false);

// // // //   useEffect(() => {
// // // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // //     } else {
// // // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // // //     }
// // // //   }, [matrix1, matrix2]);

// // // //   const nextStep = () => {
// // // //     if (!matrix1 || !matrix2 || !result) return;

// // // //     const totalElements = matrix1.length * matrix2[0].length;
// // // //     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
// // // //     const totalSteps = totalElements * stepsPerElement;
    
// // // //     if (step < totalSteps) {
// // // //       const elementIndex = Math.floor(step / stepsPerElement);
// // // //       const row = Math.floor(elementIndex / matrix2[0].length);
// // // //       const col = elementIndex % matrix2[0].length;
// // // //       const currentSubStep = step % stepsPerElement;

// // // //       setCurrentElement({ row, col });

// // // //       if (currentSubStep < matrix1[0].length) {
// // // //         // Multiplication step
// // // //         const a = matrix1[row][currentSubStep];
// // // //         const b = matrix2[currentSubStep][col];
// // // //         const product = a * b;
// // // //         setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
// // // //         const newResult = [...result];
// // // //         if (currentSubStep === 0) {
// // // //           newResult[row][col] = `${a}×${b}`;
// // // //         } else {
// // // //           newResult[row][col] += ` + ${a}×${b}`;
// // // //         }
// // // //         setResult(newResult);

// // // //         setHighlightedCells({
// // // //           matrix1: [{ row, col: currentSubStep }],
// // // //           matrix2: [{ row: currentSubStep, col }],
// // // //           result: [{ row, col }]
// // // //         });
// // // //       } else {
// // // //         // Final addition step
// // // //         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
// // // //         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
// // // //         const newResult = [...result];
// // // //         newResult[row][col] += ` = ${sum}`;
// // // //         setResult(newResult);

// // // //         setHighlightedCells({
// // // //           matrix1: [],
// // // //           matrix2: [],
// // // //           result: [{ row, col }]
// // // //         });
// // // //       }

// // // //       setStep(step + 1);
// // // //       setSubStep(currentSubStep);
// // // //     } else if (step === totalSteps) {
// // // //       // Final step: show only the results
// // // //       const finalResult = result.map(row => row.map(cell => cell.split('=')[1].trim()));
// // // //       setResult(finalResult);
// // // //       setCurrentCalculation('Multiplication complete');
// // // //       setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // // //       setIsComplete(true);
// // // //       setStep(step + 1);
// // // //     }
// // // //   };

// // // //   const resetVisualization = () => {
// // // //     setStep(0);
// // // //     setSubStep(0);
// // // //     setCurrentElement({ row: 0, col: 0 });
// // // //     setCurrentCalculation('');
// // // //     setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // // //     setIsComplete(false);
// // // //     if (matrix1 && matrix2) {
// // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // //     }
// // // //   };

// // // //   if (!matrix1 || !matrix2) {
// // // //     return <div>Please provide valid matrices for multiplication.</div>;
// // // //   }

// // // //   return (
// // // //     <div className="matrix-multiplication-visualizer">
// // // //       <div className="matrices-container">
// // // //         <MatrixSVGVisualizer matrix={matrix1} label="A" highlightedCells={highlightedCells.matrix1} showCellBorders={true} />
// // // //         <SymbolSVG symbol="×" />
// // // //         <MatrixSVGVisualizer matrix={matrix2} label="B" highlightedCells={highlightedCells.matrix2} showCellBorders={true} />
// // // //         <SymbolSVG symbol="=" />
// // // //         <MatrixSVGVisualizer matrix={result} label="C" highlightedCells={highlightedCells.result} showCellBorders={true} isResultMatrix={true} />
// // // //       </div>
// // // //       <div className="calculation-container">
// // // //         <h3>Current Calculation:</h3>
// // // //         <CalculationStep step={currentCalculation} />
// // // //       </div>
// // // //       <div className="controls">
// // // //         <button onClick={nextStep} disabled={isComplete}>Next Step</button>
// // // //         <button onClick={resetVisualization}>Reset</button>
// // // //       </div>
// // // //       <style jsx>{`
// // // //         .matrix-multiplication-visualizer {
// // // //           font-family: Arial, sans-serif;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //         }
// // // //         .matrices-container {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 20px;
// // // //         }
// // // //         .matrix-container {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //           padding:5px;
// // // //         }
// // // //         .matrix-label {
// // // //           font-size: 24px;
// // // //           font-weight: bold;
// // // //           margin-bottom: 10px;
// // // //         }
// // // //         .calculation-container {
// // // //           margin-top: 20px;
// // // //           text-align: center;
// // // //         }
// // // //         .calculation-step {
// // // //           font-size: 18px;
// // // //           margin-bottom: 10px;
// // // //         }
// // // //         .controls {
// // // //           margin-top: 20px;
// // // //         }
// // // //         button {
// // // //           margin: 0 10px;
// // // //           padding: 5px 10px;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MatrixMultiplicationVisualizer;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { motion } from 'framer-motion';

// // // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // // //   const d = (() => {
// // // //     switch (type) {
// // // //       case 'square':
// // // //         const inset = Math.min(width, height) * 0.1;
// // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // // //       case 'straight':
// // // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // // //       case 'curved':
// // // //       default:
// // // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // // //     }
// // // //   })();
// // // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // // };

// // // // const MatrixSVGVisualizer = ({ 
// // // //   matrix,
// // // //   label,
// // // //   cellSize = 40,
// // // //   padding = 10,
// // // //   fontSize = 16,
// // // //   textColor = 'black',
// // // //   braceColor = 'blue',
// // // //   braceWidth = 2,
// // // //   braceType = 'curved',
// // // //   showCellBorders = false,
// // // //   cellBorderColor = 'lightgray',
// // // //   cellBorderWidth = 1,
// // // //   highlightedCells = [],
// // // //   isResultMatrix = false
// // // // }) => {
// // // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // // //   }

// // // //   const rows = matrix.length;
// // // //   const cols = matrix[0].length;
// // // //   const actualCellSize = isResultMatrix ? cellSize * 3 : cellSize;
// // // //   const width = cols * actualCellSize + 2 * padding;
// // // //   const height = rows * cellSize + 2 * padding;

// // // //   return (
// // // //     <div className="matrix-container">
// // // //       <div className="matrix-label">{label}</div>
// // // //       <svg width={width+5} height={height} viewBox={`0 0 ${width} ${height}`}>
// // // //         {matrix.map((row, i) =>
// // // //           row.map((_, j) => (
// // // //             <rect
// // // //               key={`cell-${i}-${j}`}
// // // //               x={j * actualCellSize + padding}
// // // //               y={i * cellSize + padding}
// // // //               width={actualCellSize}
// // // //               height={cellSize}
// // // //               fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
// // // //               stroke={cellBorderColor}
// // // //               strokeWidth={cellBorderWidth}
// // // //             />
// // // //           ))
// // // //         )}
// // // //         {matrix.map((row, i) =>
// // // //           row.map((value, j) => (
// // // //             <text
// // // //               key={`text-${i}-${j}`}
// // // //               x={j * actualCellSize + padding + actualCellSize / 2}
// // // //               y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // // //               fontSize={fontSize}
// // // //               textAnchor="middle"
// // // //               fill={textColor}
// // // //             >
// // // //               {value !== null && value !== undefined ? value : ''}
// // // //             </text>
// // // //           ))
// // // //         )}
// // // //         <BraceSVG 
// // // //           type={braceType}
// // // //           x={padding}
// // // //           y={padding}
// // // //           width={width - 2 * padding}
// // // //           height={height - 2 * padding}
// // // //           color={braceColor}
// // // //           strokeWidth={braceWidth}
// // // //         />
// // // //       </svg>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // // //     <text
// // // //       x="50%"
// // // //       y="50%"
// // // //       fontSize={fontSize}
// // // //       textAnchor="middle"
// // // //       dominantBaseline="central"
// // // //       fill={color}
// // // //     >
// // // //       {symbol}
// // // //     </text>
// // // //   </svg>
// // // // );

// // // // const CalculationStep = ({ step }) => (
// // // //   <div className="calculation-step">
// // // //     {step}
// // // //   </div>
// // // // );

// // // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // // //   const [step, setStep] = useState(0);
// // // //   const [result, setResult] = useState([]);
// // // //   const [currentCalculation, setCurrentCalculation] = useState('');
// // // //   const [currentDescription, setCurrentDescription] = useState('');
// // // //   const [currentElement, setCurrentElement] = useState({ row: 0, col: 0 });
// // // //   const [subStep, setSubStep] = useState(0);
// // // //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });
// // // //   const [isComplete, setIsComplete] = useState(false);

// // // //   useEffect(() => {
// // // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // //     } else {
// // // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // // //     }
// // // //   }, [matrix1, matrix2]);

// // // //   const nextStep = () => {
// // // //     if (!matrix1 || !matrix2 || !result) return;

// // // //     const totalElements = matrix1.length * matrix2[0].length;
// // // //     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
// // // //     const totalSteps = totalElements * stepsPerElement;
    
// // // //     if (step < totalSteps) {
// // // //       const elementIndex = Math.floor(step / stepsPerElement);
// // // //       const row = Math.floor(elementIndex / matrix2[0].length);
// // // //       const col = elementIndex % matrix2[0].length;
// // // //       const currentSubStep = step % stepsPerElement;

// // // //       setCurrentElement({ row, col });

// // // //       // Set the description at the start of each new element calculation
// // // //       if (currentSubStep === 0) {
// // // //         setCurrentDescription(`Multiplying row ${row + 1} of matrix A by column ${col + 1} of matrix B`);
// // // //       }

// // // //       if (currentSubStep < matrix1[0].length) {
// // // //         // Multiplication step
// // // //         const a = matrix1[row][currentSubStep];
// // // //         const b = matrix2[currentSubStep][col];
// // // //         const product = a * b;
// // // //         setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
// // // //         const newResult = [...result];
// // // //         if (currentSubStep === 0) {
// // // //           newResult[row][col] = `${a}×${b}`;
// // // //         } else {
// // // //           newResult[row][col] += ` + ${a}×${b}`;
// // // //         }
// // // //         setResult(newResult);

// // // //         setHighlightedCells({
// // // //           matrix1: [{ row, col: currentSubStep }],
// // // //           matrix2: [{ row: currentSubStep, col }],
// // // //           result: [{ row, col }]
// // // //         });
// // // //       } else {
// // // //         // Final addition step
// // // //         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
// // // //         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
// // // //         const newResult = [...result];
// // // //         newResult[row][col] += ` = ${sum}`;
// // // //         setResult(newResult);

// // // //         setHighlightedCells({
// // // //           matrix1: [],
// // // //           matrix2: [],
// // // //           result: [{ row, col }]
// // // //         });
// // // //       }

// // // //       setStep(step + 1);
// // // //       setSubStep(currentSubStep);
// // // //     } else if (step === totalSteps) {
// // // //       // Final step: show only the results
// // // //       const finalResult = result.map(row => row.map(cell => cell.split('=')[1].trim()));
// // // //       setResult(finalResult);
// // // //       setCurrentCalculation('Multiplication complete');
// // // //       setCurrentDescription('');
// // // //       setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // // //       setIsComplete(true);
// // // //       setStep(step + 1);
// // // //     }
// // // //   };

// // // //   const resetVisualization = () => {
// // // //     setStep(0);
// // // //     setSubStep(0);
// // // //     setCurrentElement({ row: 0, col: 0 });
// // // //     setCurrentCalculation('');
// // // //     setCurrentDescription('');
// // // //     setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // // //     setIsComplete(false);
// // // //     if (matrix1 && matrix2) {
// // // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // // //     }
// // // //   };

// // // //   if (!matrix1 || !matrix2) {
// // // //     return <div>Please provide valid matrices for multiplication.</div>;
// // // //   }

// // // //   return (
// // // //     <div className="matrix-multiplication-visualizer">
// // // //       <div className="matrices-container">
// // // //         <MatrixSVGVisualizer matrix={matrix1} label="A" highlightedCells={highlightedCells.matrix1} showCellBorders={true} />
// // // //         <SymbolSVG symbol="×" />
// // // //         <MatrixSVGVisualizer matrix={matrix2} label="B" highlightedCells={highlightedCells.matrix2} showCellBorders={true} />
// // // //         <SymbolSVG symbol="=" />
// // // //         <MatrixSVGVisualizer matrix={result} label="C" highlightedCells={highlightedCells.result} showCellBorders={true} isResultMatrix={true} />
// // // //       </div>
// // // //       <div className="calculation-container">
// // // //         {/* <h3>Current Operation:</h3> */}
// // // //         <div className="description-step">{currentDescription}</div>
// // // //         <h3>Current Calculation:</h3>
// // // //         <CalculationStep step={currentCalculation} />
// // // //       </div>
// // // //       <div className="controls">
// // // //         <button onClick={nextStep} disabled={isComplete}>Next Step</button>
// // // //         <button onClick={resetVisualization}>Reset</button>
// // // //       </div>
// // // //       <style jsx>{`
// // // //         .matrix-multiplication-visualizer {
// // // //           font-family: Arial, sans-serif;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //         }
// // // //         .matrices-container {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 20px;
// // // //         }
// // // //         .matrix-container {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //         }
// // // //         .matrix-label {
// // // //           font-size: 24px;
// // // //           font-weight: bold;
// // // //           margin-bottom: 10px;
// // // //         }
// // // //         .calculation-container {
// // // //           margin-top: 20px;
// // // //           text-align: center;
// // // //         }
// // // //         .calculation-step {
// // // //           font-size: 18px;
// // // //           margin-bottom: 10px;
// // // //         }
// // // //         .description-step {
// // // //           font-size: 18px;
// // // //           margin-bottom: 10px;
// // // //           font-weight: bold;
// // // //         }
// // // //         .controls {
// // // //           margin-top: 20px;
// // // //         }
// // // //         button {
// // // //           margin: 0 10px;
// // // //           padding: 5px 10px;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MatrixMultiplicationVisualizer;
// // // import React, { useState, useEffect } from 'react';
// // // import { motion } from 'framer-motion';

// // // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// // //   const d = (() => {
// // //     switch (type) {
// // //       case 'square':
// // //         const inset = Math.min(width, height) * 0.1;
// // //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// // //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// // //       case 'straight':
// // //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// // //       case 'curved':
// // //       default:
// // //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// // //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// // //     }
// // //   })();
// // //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // // };

// // // const MatrixSVGVisualizer = ({ 
// // //   matrix,
// // //   label,
// // //   cellSize = 40,
// // //   padding = 10,
// // //   fontSize = 16,
// // //   textColor = 'black',
// // //   braceColor = 'blue',
// // //   braceWidth = 2,
// // //   braceType = 'curved',
// // //   showCellBorders = false,
// // //   cellBorderColor = 'lightgray',
// // //   cellBorderWidth = 1,
// // //   highlightedCells = [],
// // //   highlightedRow = null,
// // //   highlightedColumn = null,
// // //   isResultMatrix = false
// // // }) => {
// // //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// // //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// // //   }

// // //   const rows = matrix.length;
// // //   const cols = matrix[0].length;
// // //   const actualCellSize = isResultMatrix ? cellSize * 3 : cellSize;
// // //   const width = cols * actualCellSize + 2 * padding;
// // //   const height = rows * cellSize + 2 * padding;

// // //   return (
// // //     <div className="matrix-container">
// // //       <div className="matrix-label">{label}</div>
// // //       <svg width={width+5} height={height} viewBox={`0 0 ${width} ${height}`}>
// // //         {matrix.map((row, i) =>
// // //           row.map((_, j) => (
// // //             <React.Fragment key={`cell-${i}-${j}`}>
// // //               {(highlightedRow === i || highlightedColumn === j) && (
// // //                 <rect
// // //                   x={j * actualCellSize + padding}
// // //                   y={i * cellSize + padding}
// // //                   width={actualCellSize}
// // //                   height={cellSize}
// // //                   fill="rgba(255, 255, 0, 0.2)"
// // //                 />
// // //               )}
// // //               <rect
// // //                 x={j * actualCellSize + padding}
// // //                 y={i * cellSize + padding}
// // //                 width={actualCellSize}
// // //                 height={cellSize}
// // //                 fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
// // //                 stroke={cellBorderColor}
// // //                 strokeWidth={cellBorderWidth}
// // //               />
// // //             </React.Fragment>
// // //           ))
// // //         )}
// // //         {matrix.map((row, i) =>
// // //           row.map((value, j) => (
// // //             <text
// // //               key={`text-${i}-${j}`}
// // //               x={j * actualCellSize + padding + actualCellSize / 2}
// // //               y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// // //               fontSize={fontSize}
// // //               textAnchor="middle"
// // //               fill={textColor}
// // //             >
// // //               {value !== null && value !== undefined ? value : ''}
// // //             </text>
// // //           ))
// // //         )}
// // //         <BraceSVG 
// // //           type={braceType}
// // //           x={padding}
// // //           y={padding}
// // //           width={width - 2 * padding}
// // //           height={height - 2 * padding}
// // //           color={braceColor}
// // //           strokeWidth={braceWidth}
// // //         />
// // //       </svg>
// // //     </div>
// // //   );
// // // };

// // // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// // //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// // //     <text
// // //       x="50%"
// // //       y="50%"
// // //       fontSize={fontSize}
// // //       textAnchor="middle"
// // //       dominantBaseline="central"
// // //       fill={color}
// // //     >
// // //       {symbol}
// // //     </text>
// // //   </svg>
// // // );

// // // const CalculationStep = ({ step }) => (
// // //   <div className="calculation-step">
// // //     {step}
// // //   </div>
// // // );

// // // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// // //   const [step, setStep] = useState(0);
// // //   const [result, setResult] = useState([]);
// // //   const [currentCalculation, setCurrentCalculation] = useState('');
// // //   const [currentDescription, setCurrentDescription] = useState('');
// // //   const [currentElement, setCurrentElement] = useState({ row: 0, col: 0 });
// // //   const [subStep, setSubStep] = useState(0);
// // //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });
// // //   const [isComplete, setIsComplete] = useState(false);

// // //   useEffect(() => {
// // //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // //     } else {
// // //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// // //     }
// // //   }, [matrix1, matrix2]);

// // //   const nextStep = () => {
// // //     if (!matrix1 || !matrix2 || !result) return;

// // //     const totalElements = matrix1.length * matrix2[0].length;
// // //     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
// // //     const totalSteps = totalElements * stepsPerElement;
    
// // //     if (step < totalSteps) {
// // //       const elementIndex = Math.floor(step / stepsPerElement);
// // //       const row = Math.floor(elementIndex / matrix2[0].length);
// // //       const col = elementIndex % matrix2[0].length;
// // //       const currentSubStep = step % stepsPerElement;

// // //       setCurrentElement({ row, col });

// // //       // Set the description at the start of each new element calculation
// // //       if (currentSubStep === 0) {
// // //         setCurrentDescription(`Multiplying row ${row + 1} of matrix A by column ${col + 1} of matrix B`);
// // //       }

// // //       if (currentSubStep < matrix1[0].length) {
// // //         // Multiplication step
// // //         const a = matrix1[row][currentSubStep];
// // //         const b = matrix2[currentSubStep][col];
// // //         const product = a * b;
// // //         setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
// // //         const newResult = [...result];
// // //         if (currentSubStep === 0) {
// // //           newResult[row][col] = `${a}×${b}`;
// // //         } else {
// // //           newResult[row][col] += ` + ${a}×${b}`;
// // //         }
// // //         setResult(newResult);

// // //         setHighlightedCells({
// // //           matrix1: [{ row, col: currentSubStep }],
// // //           matrix2: [{ row: currentSubStep, col }],
// // //           result: [{ row, col }]
// // //         });
// // //       } else {
// // //         // Final addition step
// // //         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
// // //         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
// // //         const newResult = [...result];
// // //         newResult[row][col] += ` = ${sum}`;
// // //         setResult(newResult);

// // //         setHighlightedCells({
// // //           matrix1: [],
// // //           matrix2: [],
// // //           result: [{ row, col }]
// // //         });
// // //       }

// // //       setStep(step + 1);
// // //       setSubStep(currentSubStep);
// // //     } else if (step === totalSteps) {
// // //       // Final step: show only the results
// // //       const finalResult = result.map(row => row.map(cell => cell.split('=')[1].trim()));
// // //       setResult(finalResult);
// // //       setCurrentCalculation('Multiplication complete');
// // //       setCurrentDescription('');
// // //       setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // //       setIsComplete(true);
// // //       setStep(step + 1);
// // //     }
// // //   };

// // //   const resetVisualization = () => {
// // //     setStep(0);
// // //     setSubStep(0);
// // //     setCurrentElement({ row: 0, col: 0 });
// // //     setCurrentCalculation('');
// // //     setCurrentDescription('');
// // //     setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// // //     setIsComplete(false);
// // //     if (matrix1 && matrix2) {
// // //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// // //     }
// // //   };

// // //   if (!matrix1 || !matrix2) {
// // //     return <div>Please provide valid matrices for multiplication.</div>;
// // //   }

// // //   return (
// // //     <div className="matrix-multiplication-visualizer">
// // //       <div className="matrices-container">
// // //         <MatrixSVGVisualizer 
// // //           matrix={matrix1} 
// // //           label="A" 
// // //           highlightedCells={highlightedCells.matrix1} 
// // //           highlightedRow={currentElement.row}
// // //           showCellBorders={true} 
// // //         />
// // //         <SymbolSVG symbol="×" />
// // //         <MatrixSVGVisualizer 
// // //           matrix={matrix2} 
// // //           label="B" 
// // //           highlightedCells={highlightedCells.matrix2} 
// // //           highlightedColumn={currentElement.col}
// // //           showCellBorders={true} 
// // //         />
// // //         <SymbolSVG symbol="=" />
// // //         <MatrixSVGVisualizer 
// // //           matrix={result} 
// // //           label="C" 
// // //           highlightedCells={highlightedCells.result} 
// // //           showCellBorders={true} 
// // //           isResultMatrix={true} 
// // //         />
// // //       </div>
// // //       <div className="calculation-container">
// // //         <div className="description-step">{currentDescription}</div>
// // //         <h3>Current Calculation:</h3>
// // //         <CalculationStep step={currentCalculation} />
// // //       </div>
// // //       <div className="controls">
// // //         <button onClick={nextStep} disabled={isComplete}>Next Step</button>
// // //         <button onClick={resetVisualization}>Reset</button>
// // //       </div>
// // //       <style jsx>{`
// // //         .matrix-multiplication-visualizer {
// // //           font-family: Arial, sans-serif;
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //         }
// // //         .matrices-container {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 20px;
// // //         }
// // //         .matrix-container {
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //         }
// // //         .matrix-label {
// // //           font-size: 24px;
// // //           font-weight: bold;
// // //           margin-bottom: 10px;
// // //         }
// // //         .calculation-container {
// // //           margin-top: 20px;
// // //           text-align: center;
// // //         }
// // //         .calculation-step {
// // //           font-size: 18px;
// // //           margin-bottom: 10px;
// // //         }
// // //         .description-step {
// // //           font-size: 18px;
// // //           margin-bottom: 10px;
// // //           font-weight: bold;
// // //         }
// // //         .controls {
// // //           margin-top: 20px;
// // //         }
// // //         button {
// // //           margin: 0 10px;
// // //           padding: 5px 10px;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default MatrixMultiplicationVisualizer;
// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';

// // const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
// //   const d = (() => {
// //     switch (type) {
// //       case 'square':
// //         const inset = Math.min(width, height) * 0.1;
// //         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
// //                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
// //       case 'straight':
// //         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
// //       case 'curved':
// //       default:
// //         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
// //                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
// //     }
// //   })();
// //   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// // };

// // const MatrixSVGVisualizer = ({ 
// //   matrix,
// //   label,
// //   cellSize = 40,
// //   padding = 10,
// //   fontSize = 16,
// //   textColor = 'black',
// //   braceColor = 'blue',
// //   braceWidth = 2,
// //   braceType = 'curved',
// //   showCellBorders = false,
// //   cellBorderColor = 'lightgray',
// //   cellBorderWidth = 1,
// //   highlightedCells = [],
// //   highlightedRow = null,
// //   highlightedColumn = null,
// //   isResultMatrix = false
// // }) => {
// //   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
// //     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
// //   }

// //   const rows = matrix.length;
// //   const cols = matrix[0].length;
// //   const actualCellSize = isResultMatrix ? cellSize * 3 : cellSize;
// //   const width = cols * actualCellSize + 2 * padding;
// //   const height = rows * cellSize + 2 * padding;

// //   return (
// //     <div className="matrix-container">
// //       <div className="matrix-label">{label}</div>
// //       <svg width={width+5} height={height} viewBox={`0 0 ${width} ${height}`}>
// //         {matrix.map((row, i) =>
// //           row.map((_, j) => (
// //             <React.Fragment key={`cell-${i}-${j}`}>
// //               {(highlightedRow === i || highlightedColumn === j) && (
// //                 <rect
// //                   x={j * actualCellSize + padding}
// //                   y={i * cellSize + padding}
// //                   width={actualCellSize}
// //                   height={cellSize}
// //                   fill="rgba(144, 238, 144, 0.5)"
// //                 />
// //               )}
// //               <rect
// //                 x={j * actualCellSize + padding}
// //                 y={i * cellSize + padding}
// //                 width={actualCellSize}
// //                 height={cellSize}
// //                 fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
// //                 stroke={cellBorderColor}
// //                 strokeWidth={cellBorderWidth}
// //               />
// //             </React.Fragment>
// //           ))
// //         )}
// //         {matrix.map((row, i) =>
// //           row.map((value, j) => (
// //             <text
// //               key={`text-${i}-${j}`}
// //               x={j * actualCellSize + padding + actualCellSize / 2}
// //               y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
// //               fontSize={fontSize}
// //               textAnchor="middle"
// //               fill={textColor}
// //             >
// //               {value !== null && value !== undefined ? value : ''}
// //             </text>
// //           ))
// //         )}
// //         <BraceSVG 
// //           type={braceType}
// //           x={padding}
// //           y={padding}
// //           width={width - 2 * padding}
// //           height={height - 2 * padding}
// //           color={braceColor}
// //           strokeWidth={braceWidth}
// //         />
// //       </svg>
// //     </div>
// //   );
// // };

// // const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
// //   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
// //     <text
// //       x="50%"
// //       y="50%"
// //       fontSize={fontSize}
// //       textAnchor="middle"
// //       dominantBaseline="central"
// //       fill={color}
// //     >
// //       {symbol}
// //     </text>
// //   </svg>
// // );

// // const CalculationStep = ({ step }) => (
// //   <div className="calculation-step">
// //     {step}
// //   </div>
// // );

// // const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
// //   const [step, setStep] = useState(0);
// //   const [result, setResult] = useState([]);
// //   const [currentCalculation, setCurrentCalculation] = useState('');
// //   const [currentDescription, setCurrentDescription] = useState('');
// //   const [currentElement, setCurrentElement] = useState({ row: null, col: null });
// //   const [subStep, setSubStep] = useState(0);
// //   const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });
// //   const [isComplete, setIsComplete] = useState(false);

// //   useEffect(() => {
// //     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
// //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// //     } else {
// //       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
// //     }
// //   }, [matrix1, matrix2]);

// //   const nextStep = () => {
// //     if (!matrix1 || !matrix2 || !result) return;

// //     const totalElements = matrix1.length * matrix2[0].length;
// //     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
// //     const totalSteps = totalElements * stepsPerElement;
    
// //     if (step < totalSteps) {
// //       const elementIndex = Math.floor(step / stepsPerElement);
// //       const row = Math.floor(elementIndex / matrix2[0].length);
// //       const col = elementIndex % matrix2[0].length;
// //       const currentSubStep = step % stepsPerElement;

// //       setCurrentElement({ row, col });

// //       // Set the description at the start of each new element calculation
// //       if (currentSubStep === 0) {
// //         setCurrentDescription(`Multiplying row ${row + 1} of matrix A by column ${col + 1} of matrix B`);
// //       }

// //       if (currentSubStep < matrix1[0].length) {
// //         // Multiplication step
// //         const a = matrix1[row][currentSubStep];
// //         const b = matrix2[currentSubStep][col];
// //         const product = a * b;
// //         setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
// //         const newResult = [...result];
// //         if (currentSubStep === 0) {
// //           newResult[row][col] = `${a}×${b}`;
// //         } else {
// //           newResult[row][col] += ` + ${a}×${b}`;
// //         }
// //         setResult(newResult);

// //         setHighlightedCells({
// //           matrix1: [{ row, col: currentSubStep }],
// //           matrix2: [{ row: currentSubStep, col }],
// //           result: [{ row, col }]
// //         });
// //       } else {
// //         // Final addition step
// //         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
// //         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
// //         const newResult = [...result];
// //         newResult[row][col] += ` = ${sum}`;
// //         setResult(newResult);

// //         setHighlightedCells({
// //           matrix1: [],
// //           matrix2: [],
// //           result: [{ row, col }]
// //         });
// //       }

// //       setStep(step + 1);
// //       setSubStep(currentSubStep);
// //     } else if (step === totalSteps) {
// //       // Final step: show only the results
// //       const finalResult = result.map(row => row.map(cell => cell.split('=')[1].trim()));
// //       setResult(finalResult);
// //       setCurrentCalculation('Multiplication complete');
// //       setCurrentDescription('');
// //       setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// //       setCurrentElement({ row: null, col: null });
// //       setIsComplete(true);
// //       setStep(step + 1);
// //     }
// //   };

// //   const resetVisualization = () => {
// //     setStep(0);
// //     setSubStep(0);
// //     setCurrentElement({ row: null, col: null });
// //     setCurrentCalculation('');
// //     setCurrentDescription('');
// //     setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
// //     setIsComplete(false);
// //     if (matrix1 && matrix2) {
// //       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
// //     }
// //   };

// //   if (!matrix1 || !matrix2) {
// //     return <div>Please provide valid matrices for multiplication.</div>;
// //   }

// //   return (
// //     <div className="matrix-multiplication-visualizer">
// //       <div className="matrices-container">
// //         <MatrixSVGVisualizer 
// //           matrix={matrix1} 
// //           label="A" 
// //           highlightedCells={highlightedCells.matrix1} 
// //           highlightedRow={currentElement.row}
// //           showCellBorders={true} 
// //         />
// //         <SymbolSVG symbol="×" />
// //         <MatrixSVGVisualizer 
// //           matrix={matrix2} 
// //           label="B" 
// //           highlightedCells={highlightedCells.matrix2} 
// //           highlightedColumn={currentElement.col}
// //           showCellBorders={true} 
// //         />
// //         <SymbolSVG symbol="=" />
// //         <MatrixSVGVisualizer 
// //           matrix={result} 
// //           label="C" 
// //           highlightedCells={highlightedCells.result} 
// //           showCellBorders={true} 
// //           isResultMatrix={true} 
// //         />
// //       </div>
// //       <div className="calculation-container">
// //         <div className="description-step">{currentDescription}</div>
// //         <h3>Current Calculation:</h3>
// //         <CalculationStep step={currentCalculation} />
// //       </div>
// //       <div className="controls">
// //         <button onClick={nextStep} disabled={isComplete}>Next Step</button>
// //         <button onClick={resetVisualization}>Reset</button>
// //       </div>
// //       <style jsx>{`
// //         .matrix-multiplication-visualizer {
// //           font-family: Arial, sans-serif;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //         }
// //         .matrices-container {
// //           display: flex;
// //           align-items: center;
// //           gap: 20px;
// //         }
// //         .matrix-container {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //         }
// //         .matrix-label {
// //           font-size: 24px;
// //           font-weight: bold;
// //           margin-bottom: 10px;
// //         }
// //         .calculation-container {
// //           margin-top: 20px;
// //           text-align: center;
// //         }
// //         .calculation-step {
// //           font-size: 18px;
// //           margin-bottom: 10px;
// //         }
// //         .description-step {
// //           font-size: 18px;
// //           margin-bottom: 10px;
// //           font-weight: bold;
// //         }
// //         .controls {
// //           margin-top: 20px;
// //         }
// //         button {
// //           margin: 0 10px;
// //           padding: 5px 10px;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default MatrixMultiplicationVisualizer;
// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// const BraceSVG = ({ type, x, y, width, height, color, strokeWidth }) => {
//   const d = (() => {
//     switch (type) {
//       case 'square':
//         const inset = Math.min(width, height) * 0.1;
//         return `M ${x} ${y} L ${x} ${y + height} M ${x} ${y} L ${x + inset} ${y} M ${x} ${y + height} L ${x + inset} ${y + height}
//                 M ${x + width} ${y} L ${x + width} ${y + height} M ${x + width} ${y} L ${x + width - inset} ${y} M ${x + width} ${y + height} L ${x + width - inset} ${y + height}`;
//       case 'straight':
//         return `M ${x} ${y} L ${x} ${y + height} M ${x + width} ${y} L ${x + width} ${y + height}`;
//       case 'curved':
//       default:
//         return `M ${x} ${y} Q ${x - width * 0.1} ${y + height / 2} ${x} ${y + height}
//                 M ${x + width} ${y} Q ${x + width + width * 0.1} ${y + height / 2} ${x + width} ${y + height}`;
//     }
//   })();
//   return <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} />;
// };

// const MatrixSVGVisualizer = ({ 
//   matrix,
//   label,
//   cellSize = 40,
//   padding = 10,
//   fontSize = 16,
//   textColor = 'black',
//   braceColor = 'blue',
//   braceWidth = 2,
//   braceType = 'curved',
//   showCellBorders = false,
//   cellBorderColor = 'lightgray',
//   cellBorderWidth = 1,
//   highlightedCells = [],
//   highlightedRow = null,
//   highlightedColumn = null,
//   isResultMatrix = false
// }) => {
//   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
//     return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
//   }

//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   const actualCellSize = isResultMatrix ? cellSize * 3 : cellSize;
//   const width = cols * actualCellSize + 2 * padding;
//   const height = rows * cellSize + 2 * padding;

//   return (
//     <div className="matrix-container">
//       <div className="matrix-label">{label}</div>
//       <svg width={width+5} height={height} viewBox={`0 0 ${width} ${height}`}>
//         {matrix.map((row, i) =>
//           row.map((_, j) => (
//             <React.Fragment key={`cell-${i}-${j}`}>
//               {(highlightedRow === i || highlightedColumn === j) && (
//                 <rect
//                   x={j * actualCellSize + padding}
//                   y={i * cellSize + padding}
//                   width={actualCellSize}
//                   height={cellSize}
//                   fill="rgba(144, 238, 144, 0.5)"
//                 />
//               )}
//               <rect
//                 x={j * actualCellSize + padding}
//                 y={i * cellSize + padding}
//                 width={actualCellSize}
//                 height={cellSize}
//                 fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
//                 stroke={cellBorderColor}
//                 strokeWidth={cellBorderWidth}
//               />
//             </React.Fragment>
//           ))
//         )}
//         {matrix.map((row, i) =>
//           row.map((value, j) => (
//             <text
//               key={`text-${i}-${j}`}
//               x={j * actualCellSize + padding + actualCellSize / 2}
//               y={i * cellSize + padding + cellSize / 2 + fontSize / 3}
//               fontSize={fontSize}
//               textAnchor="middle"
//               fill={textColor}
//             >
//               {value !== null && value !== undefined ? value : ''}
//             </text>
//           ))
//         )}
//         <BraceSVG 
//           type={braceType}
//           x={padding}
//           y={padding}
//           width={width - 2 * padding}
//           height={height - 2 * padding}
//           color={braceColor}
//           strokeWidth={braceWidth}
//         />
//       </svg>
//     </div>
//   );
// };

// const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
//   <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
//     <text
//       x="50%"
//       y="50%"
//       fontSize={fontSize}
//       textAnchor="middle"
//       dominantBaseline="central"
//       fill={color}
//     >
//       {symbol}
//     </text>
//   </svg>
// );

// const CalculationStep = ({ step }) => (
//   <div className="calculation-step">
//     {step}
//   </div>
// );

// const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
//   const [step, setStep] = useState(0);
//   const [result, setResult] = useState([]);
//   const [currentCalculation, setCurrentCalculation] = useState('');
//   const [currentDescription, setCurrentDescription] = useState('');
//   const [currentElement, setCurrentElement] = useState({ row: null, col: null });
//   const [subStep, setSubStep] = useState(0);
//   const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });
//   const [isComplete, setIsComplete] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const playIntervalRef = useRef(null);

//   useEffect(() => {
//     if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
//       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
//     } else {
//       console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
//     }
//   }, [matrix1, matrix2]);

//   const nextStep = () => {
//     if (!matrix1 || !matrix2 || !result) return;

//     const totalElements = matrix1.length * matrix2[0].length;
//     const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
//     const totalSteps = totalElements * stepsPerElement;
    
//     if (step < totalSteps) {
//       const elementIndex = Math.floor(step / stepsPerElement);
//       const row = Math.floor(elementIndex / matrix2[0].length);
//       const col = elementIndex % matrix2[0].length;
//       const currentSubStep = step % stepsPerElement;

//       setCurrentElement({ row, col });

//       // Set the description at the start of each new element calculation
//       if (currentSubStep === 0) {
//         setCurrentDescription(`Multiplying row ${row + 1} of matrix A by column ${col + 1} of matrix B`);
//       }

//       if (currentSubStep < matrix1[0].length) {
//         // Multiplication step
//         const a = matrix1[row][currentSubStep];
//         const b = matrix2[currentSubStep][col];
//         const product = a * b;
//         setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
//         const newResult = [...result];
//         if (currentSubStep === 0) {
//           newResult[row][col] = `${a}×${b}`;
//         } else {
//           newResult[row][col] += ` + ${a}×${b}`;
//         }
//         setResult(newResult);

//         setHighlightedCells({
//           matrix1: [{ row, col: currentSubStep }],
//           matrix2: [{ row: currentSubStep, col }],
//           result: [{ row, col }]
//         });
//       } else {
//         // Final addition step
//         const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
//         setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
//         const newResult = [...result];
//         newResult[row][col] += ` = ${sum}`;
//         setResult(newResult);

//         setHighlightedCells({
//           matrix1: [],
//           matrix2: [],
//           result: [{ row, col }]
//         });
//       }

//       setStep(step + 1);
//       setSubStep(currentSubStep);
//     } else if (step === totalSteps) {
//       // Final step: show only the results
//       const finalResult = result.map(row => row.map(cell => cell.split('=')[1].trim()));
//       setResult(finalResult);
//       setCurrentCalculation('Multiplication complete');
//       setCurrentDescription('');
//       setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
//       setCurrentElement({ row: null, col: null });
//       setIsComplete(true);
//       setStep(step + 1);
//       setIsPlaying(false);
//     }
//   };

//   const previousStep = () => {
//     if (step > 0) {
//       setStep(step - 1);
//       // You might need to implement logic to reverse the calculation state
//       // This could be complex and might require storing previous states
//     }
//   };

//   const resetVisualization = () => {
//     setStep(0);
//     setSubStep(0);
//     setCurrentElement({ row: null, col: null });
//     setCurrentCalculation('');
//     setCurrentDescription('');
//     setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
//     setIsComplete(false);
//     setIsPlaying(false);
//     if (matrix1 && matrix2) {
//       setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
//     }
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//     if (!isPlaying) {
//       playIntervalRef.current = setInterval(() => {
//         nextStep();
//       }, 1000); // Adjust the interval as needed
//     } else {
//       clearInterval(playIntervalRef.current);
//     }
//   };

//   useEffect(() => {
//     if (isComplete) {
//       clearInterval(playIntervalRef.current);
//       setIsPlaying(false);
//     }
//   }, [isComplete]);

//   useEffect(() => {
//     return () => {
//       if (playIntervalRef.current) {
//         clearInterval(playIntervalRef.current);
//       }
//     };
//   }, []);

//   if (!matrix1 || !matrix2) {
//     return <div>Please provide valid matrices for multiplication.</div>;
//   }

//   return (
//     <div className="matrix-multiplication-visualizer">
//       <div className="content-container">
//         <div className="matrices-container">
//           <MatrixSVGVisualizer 
//             matrix={matrix1} 
//             label="A" 
//             highlightedCells={highlightedCells.matrix1} 
//             highlightedRow={currentElement.row}
//             showCellBorders={true} 
//           />
//           <SymbolSVG symbol="×" />
//           <MatrixSVGVisualizer 
//             matrix={matrix2} 
//             label="B" 
//             highlightedCells={highlightedCells.matrix2} 
//             highlightedColumn={currentElement.col}
//             showCellBorders={true} 
//           />
//           <SymbolSVG symbol="=" />
//           <MatrixSVGVisualizer 
//             matrix={result} 
//             label="C" 
//             highlightedCells={highlightedCells.result} 
//             showCellBorders={true} 
//             isResultMatrix={true} 
//           />
//         </div>
//         <div className="explanation-container">
//           <div className="description-step">{currentDescription}</div>
//           <h3>Current Calculation:</h3>
//           <CalculationStep step={currentCalculation} />
//         </div>
//       </div>
//       <div className="controls">
//         <button onClick={previousStep} disabled={step === 0 || isPlaying}>Back</button>
//         <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//         <button onClick={nextStep} disabled={isComplete || isPlaying}>Next Step</button>
//         <button onClick={resetVisualization}>Reset</button>
//       </div>
//       <style jsx>{`
//         .matrix-multiplication-visualizer {
//           font-family: Arial, sans-serif;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 20px;
//         }
//         .content-container {
//           display: flex;
//           justify-content: space-between;
//           width: 100%;
//           max-width: 1200px;
//         }
//         .matrices-container {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//         }
//         .matrix-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin-left:50px;
//           background-color:red;
//         }
//         .matrix-label {
//           font-size: 24px;
//           font-weight: bold;
//           margin-bottom: 10px;
//         }
//         .explanation-container {
//           width: 300px;
//           padding: 20px;
//           background-color: #f0f0f0;
//           border-radius: 10px;
//           margin-left: 20px;
//         }
//         .calculation-container {
//           margin-top: 20px;
//           text-align: center;
//         }
//         .calculation-step {
//           font-size: 18px;
//           margin-bottom: 10px;
//         }
//         .description-step {
//           font-size: 18px;
//           margin-bottom: 10px;
//           font-weight: bold;
//         }
//         .controls {
//           margin-top: 20px;
//           display: flex;
//           gap: 10px;
//         }
//         button {
//           padding: 10px 20px;
//           font-size: 16px;
//           cursor: pointer;
//           background-color: #4CAF50;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           transition: background-color 0.3s;
//         }
//         button:hover {
//           background-color: #45a049;
//         }
//         button:disabled {
//           background-color: #cccccc;
//           cursor: not-allowed;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MatrixMultiplicationVisualizer;
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
  label,
  cellSize = 40,
  padding = 10,
  fontSize = 16,
  textColor = 'black',
  braceColor = 'blue',
  braceWidth = 2,
  braceType = 'curved',
  showCellBorders = false,
  cellBorderColor = 'lightgray',
  cellBorderWidth = 1,
  highlightedCells = [],
  highlightedRow = null,
  highlightedColumn = null,
  isResultMatrix = false
}) => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return <svg width={cellSize} height={cellSize}><text x="50%" y="50%" textAnchor="middle" fill={textColor}>Empty</text></svg>;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const actualCellSize = isResultMatrix ? cellSize * 3 : cellSize;
  const width = cols * actualCellSize + 2 * padding;
  const height = rows * cellSize + 2 * padding;

  return (
    <div className="matrix-container">
      <div className="matrix-label">{label}</div>
      <svg width={width+5} height={height} viewBox={`0 0 ${width} ${height}`}>
        {matrix.map((row, i) =>
          row.map((_, j) => (
            <React.Fragment key={`cell-${i}-${j}`}>
              {(highlightedRow === i || highlightedColumn === j) && (
                <rect
                  x={j * actualCellSize + padding}
                  y={i * cellSize + padding}
                  width={actualCellSize}
                  height={cellSize}
                  fill="rgba(144, 238, 144, 0.5)"
                />
              )}
              <rect
                x={j * actualCellSize + padding}
                y={i * cellSize + padding}
                width={actualCellSize}
                height={cellSize}
                fill={highlightedCells.some(cell => cell.row === i && cell.col === j) ? 'yellow' : 'none'}
                stroke={cellBorderColor}
                strokeWidth={cellBorderWidth}
              />
            </React.Fragment>
          ))
        )}
        {matrix.map((row, i) =>
          row.map((value, j) => (
            <text
              key={`text-${i}-${j}`}
              x={j * actualCellSize + padding + actualCellSize / 2}
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
    </div>
  );
};

const SymbolSVG = ({ symbol, fontSize = 24, color = 'black' }) => (
  <svg width={fontSize * 1.5} height={fontSize * 1.5} viewBox={`0 0 ${fontSize * 1.5} ${fontSize * 1.5}`}>
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

const CalculationStep = ({ step }) => (
  <div className="calculation-step">
    {step}
  </div>
);

const MatrixMultiplicationVisualizer = ({ matrix1, matrix2 }) => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState([]);
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentElement, setCurrentElement] = useState({ row: null, col: null });
  const [subStep, setSubStep] = useState(0);
  const [highlightedCells, setHighlightedCells] = useState({ matrix1: [], matrix2: [], result: [] });
  const [isComplete, setIsComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playTimeoutRef = useRef(null);

  useEffect(() => {
    if (matrix1 && matrix2 && matrix1[0].length === matrix2.length) {
      setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
    } else {
      console.error("Matrices cannot be multiplied. Dimensions don't match or matrices are undefined.");
    }
  }, [matrix1, matrix2]);

  const nextStep = () => {
    if (!matrix1 || !matrix2 || !result || isComplete) return;

    const totalElements = matrix1.length * matrix2[0].length;
    const stepsPerElement = matrix1[0].length + 1; // multiplications + final addition
    const totalSteps = totalElements * stepsPerElement;
    
    if (step < totalSteps) {
      const elementIndex = Math.floor(step / stepsPerElement);
      const row = Math.floor(elementIndex / matrix2[0].length);
      const col = elementIndex % matrix2[0].length;
      const currentSubStep = step % stepsPerElement;

      setCurrentElement({ row, col });

      // Set the description at the start of each new element calculation
      if (currentSubStep === 0) {
        setCurrentDescription(`Multiplying row ${row + 1} of matrix A by column ${col + 1} of matrix B`);
      }

      if (currentSubStep < matrix1[0].length) {
        // Multiplication step
        const a = matrix1[row][currentSubStep];
        const b = matrix2[currentSubStep][col];
        const product = a * b;
        setCurrentCalculation(`${a} (from A) × ${b} (from B) = ${product}`);
        
        const newResult = [...result];
        if (currentSubStep === 0) {
          newResult[row][col] = `${a}×${b}`;
        } else {
          newResult[row][col] += ` + ${a}×${b}`;
        }
        setResult(newResult);

        setHighlightedCells({
          matrix1: [{ row, col: currentSubStep }],
          matrix2: [{ row: currentSubStep, col }],
          result: [{ row, col }]
        });
      } else {
        // Final addition step
        const sum = matrix1[row].reduce((acc, _, i) => acc + matrix1[row][i] * matrix2[i][col], 0);
        setCurrentCalculation(`${result[row][col]} = ${sum}`);
        
        const newResult = [...result];
        newResult[row][col] += ` = ${sum}`;
        setResult(newResult);

        setHighlightedCells({
          matrix1: [],
          matrix2: [],
          result: [{ row, col }]
        });
      }

      setStep(step + 1);
      setSubStep(currentSubStep);
    } else {
      // Final step: show only the results
      const finalResult = result.map(row => row.map(cell => cell.split('=')[1].trim()));
      setResult(finalResult);
      setCurrentCalculation('Multiplication complete');
      setCurrentDescription('');
      setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
      setCurrentElement({ row: null, col: null });
      setIsComplete(true);
      setIsPlaying(false);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      // You might need to implement logic to reverse the calculation state
      // This could be complex and might require storing previous states
    }
  };

  const resetVisualization = () => {
    setStep(0);
    setSubStep(0);
    setCurrentElement({ row: null, col: null });
    setCurrentCalculation('');
    setCurrentDescription('');
    setHighlightedCells({ matrix1: [], matrix2: [], result: [] });
    setIsComplete(false);
    setIsPlaying(false);
    if (matrix1 && matrix2) {
      setResult(Array(matrix1.length).fill().map(() => Array(matrix2[0].length).fill('')));
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying && !isComplete) {
      playTimeoutRef.current = setTimeout(() => {
        nextStep();
      }, 1000);
    } else if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
    }

    return () => {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
      }
    };
  }, [isPlaying, step, isComplete]);

  if (!matrix1 || !matrix2) {
    return <div>Please provide valid matrices for multiplication.</div>;
  }

  return (
    <div className="matrix-multiplication-visualizer">
      <div className="content-container">
        <div className="matrices-container">
          <MatrixSVGVisualizer 
            matrix={matrix1} 
            label="A" 
            highlightedCells={highlightedCells.matrix1} 
            highlightedRow={currentElement.row}
            showCellBorders={true} 
          />
          <SymbolSVG symbol="×" />
          <MatrixSVGVisualizer 
            matrix={matrix2} 
            label="B" 
            highlightedCells={highlightedCells.matrix2} 
            highlightedColumn={currentElement.col}
            showCellBorders={true} 
          />
          <SymbolSVG symbol="=" />
          <MatrixSVGVisualizer 
            matrix={result} 
            label="C" 
            highlightedCells={highlightedCells.result} 
            showCellBorders={true} 
            isResultMatrix={true} 
          />
        </div>
        <div className="explanation-container">
          <div className="description-step">{currentDescription}</div>
          <h3>Current Calculation:</h3>
          <CalculationStep step={currentCalculation} />
        </div>
      </div>
      <div className="controls">
        <button onClick={previousStep} disabled={step === 0 || isPlaying}>Back</button>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={nextStep} disabled={isComplete || isPlaying}>Next Step</button>
        <button onClick={resetVisualization}>Reset</button>
      </div>
      <style jsx>{`
        .matrix-multiplication-visualizer {
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .content-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          max-width: 1200px;
          gap: 20px;
        }
        .matrices-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .matrix-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .matrix-label {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .explanation-container {
          width: 300px;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
        }
        .calculation-container {
          margin-top: 20px;
          text-align: center;
        }
        .calculation-step {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .description-step {
          font-size: 18px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .controls {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #45a049;
        }
        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default MatrixMultiplicationVisualizer;