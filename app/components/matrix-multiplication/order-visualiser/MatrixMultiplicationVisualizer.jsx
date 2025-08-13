// // // // // // // // import React, { useState } from 'react';

// // // // // // // // const MatrixMultiplicationOrderVisualizer = () => {
// // // // // // // //   const [matrixA, setMatrixA] = useState({ rows: 3, cols: 2 });
// // // // // // // //   const [matrixB, setMatrixB] = useState({ rows: 2, cols: 4 });
// // // // // // // //   const [highlightStep, setHighlightStep] = useState(null);

// // // // // // // //   const isValidMultiplication = matrixA.cols === matrixB.rows;
// // // // // // // //   const resultMatrix = { rows: matrixA.rows, cols: matrixB.cols };

// // // // // // // //   const renderMatrix = (matrix, name, highlight = null) => {
// // // // // // // //     const cells = [];
// // // // // // // //     for (let i = 0; i < matrix.rows; i++) {
// // // // // // // //       for (let j = 0; j < matrix.cols; j++) {
// // // // // // // //         const isHighlighted = highlight && 
// // // // // // // //           ((highlight.type === 'row' && highlight.index === i && name === 'A') ||
// // // // // // // //            (highlight.type === 'col' && highlight.index === j && name === 'B') ||
// // // // // // // //            (highlight.type === 'result' && highlight.row === i && highlight.col === j && name === 'Result'));
        
// // // // // // // //         cells.push(
// // // // // // // //           <div
// // // // // // // //             key={`${i}-${j}`}
// // // // // // // //             className={`matrix-cell ${isHighlighted ? 'highlighted' : ''}`}
// // // // // // // //             style={{
// // // // // // // //               gridColumn: j + 1,
// // // // // // // //               gridRow: i + 1,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <div className="cell-dot"></div>
// // // // // // // //           </div>
// // // // // // // //         );
// // // // // // // //       }
// // // // // // // //     }

// // // // // // // //     return (
// // // // // // // //       <div className="matrix-wrapper">
// // // // // // // //         <div className="matrix-label">
// // // // // // // //           Matrix {name} ({matrix.rows}×{matrix.cols})
// // // // // // // //         </div>
// // // // // // // //         <div
// // // // // // // //           className="matrix"
// // // // // // // //           style={{
// // // // // // // //             gridTemplateColumns: `repeat(${matrix.cols}, 35px)`,
// // // // // // // //             gridTemplateRows: `repeat(${matrix.rows}, 35px)`,
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           {cells}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   const handleStepVisualization = (row, col) => {
// // // // // // // //     if (!isValidMultiplication) return;
    
// // // // // // // //     setHighlightStep({
// // // // // // // //       type: 'computation',
// // // // // // // //       row: row,
// // // // // // // //       col: col
// // // // // // // //     });
    
// // // // // // // //     setTimeout(() => setHighlightStep(null), 2000);
// // // // // // // //   };

// // // // // // // //   const renderInteractiveMatrix = () => {
// // // // // // // //     if (!isValidMultiplication) return null;

// // // // // // // //     const cells = [];
// // // // // // // //     for (let i = 0; i < resultMatrix.rows; i++) {
// // // // // // // //       for (let j = 0; j < resultMatrix.cols; j++) {
// // // // // // // //         cells.push(
// // // // // // // //           <button
// // // // // // // //             key={`${i}-${j}`}
// // // // // // // //             onClick={() => handleStepVisualization(i, j)}
// // // // // // // //             className="result-cell"
// // // // // // // //             style={{
// // // // // // // //               gridColumn: j + 1,
// // // // // // // //               gridRow: i + 1,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             <div className="result-dot"></div>
// // // // // // // //           </button>
// // // // // // // //         );
// // // // // // // //       }
// // // // // // // //     }

// // // // // // // //     return (
// // // // // // // //       <div className="interactive-section">
// // // // // // // //         <h3 className="interactive-title">
// // // // // // // //           Click on result cells to see computation pattern
// // // // // // // //         </h3>
// // // // // // // //         <div className="matrix-wrapper">
// // // // // // // //           <div className="matrix-label">
// // // // // // // //             Interactive Result ({resultMatrix.rows}×{resultMatrix.cols})
// // // // // // // //           </div>
// // // // // // // //           <div
// // // // // // // //             className="matrix"
// // // // // // // //             style={{
// // // // // // // //               gridTemplateColumns: `repeat(${resultMatrix.cols}, 45px)`,
// // // // // // // //               gridTemplateRows: `repeat(${resultMatrix.rows}, 45px)`,
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {cells}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container">
// // // // // // // //       <div className="title-section">
// // // // // // // //         <h1>Matrix Multiplication Visualizer</h1>
// // // // // // // //         <p>
// // // // // // // //           Explore how matrix dimensions work in multiplication. Adjust the matrix sizes 
// // // // // // // //           and see how the dimensions must align for valid multiplication.
// // // // // // // //         </p>
// // // // // // // //       </div>

// // // // // // // //       <div className="controls">
// // // // // // // //         <h2>Matrix Dimensions</h2>
// // // // // // // //         <div className="controls-grid">
// // // // // // // //           <div className="control-group">
// // // // // // // //             <label>Matrix A Size</label>
// // // // // // // //             <div className="dimension-inputs">
// // // // // // // //               <div className="input-group">
// // // // // // // //                 <span>Rows</span>
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="1"
// // // // // // // //                   max="6"
// // // // // // // //                   value={matrixA.rows}
// // // // // // // //                   onChange={(e) => setMatrixA(prev => ({ ...prev, rows: parseInt(e.target.value) || 1 }))}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <span className="multiplication-symbol">×</span>
// // // // // // // //               <div className="input-group">
// // // // // // // //                 <span>Cols</span>
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="1"
// // // // // // // //                   max="6"
// // // // // // // //                   value={matrixA.cols}
// // // // // // // //                   onChange={(e) => setMatrixA(prev => ({ ...prev, cols: parseInt(e.target.value) || 1 }))}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <div className="control-group">
// // // // // // // //             <label>Matrix B Size</label>
// // // // // // // //             <div className="dimension-inputs">
// // // // // // // //               <div className="input-group">
// // // // // // // //                 <span>Rows</span>
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="1"
// // // // // // // //                   max="6"
// // // // // // // //                   value={matrixB.rows}
// // // // // // // //                   onChange={(e) => setMatrixB(prev => ({ ...prev, rows: parseInt(e.target.value) || 1 }))}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //               <span className="multiplication-symbol">×</span>
// // // // // // // //               <div className="input-group">
// // // // // // // //                 <span>Cols</span>
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="1"
// // // // // // // //                   max="6"
// // // // // // // //                   value={matrixB.cols}
// // // // // // // //                   onChange={(e) => setMatrixB(prev => ({ ...prev, cols: parseInt(e.target.value) || 1 }))}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className={`validation-message ${isValidMultiplication ? 'valid' : 'invalid'}`}>
// // // // // // // //           {isValidMultiplication ? (
// // // // // // // //             `✓ Valid multiplication: A(${matrixA.rows}×${matrixA.cols}) × B(${matrixB.rows}×${matrixB.cols}) = Result(${resultMatrix.rows}×${resultMatrix.cols})`
// // // // // // // //           ) : (
// // // // // // // //             `✗ Invalid multiplication: A columns (${matrixA.cols}) must equal B rows (${matrixB.rows})`
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <div className="visualization">
// // // // // // // //         <div className="matrices-container">
// // // // // // // //           {renderMatrix(
// // // // // // // //             matrixA, 
// // // // // // // //             'A', 
// // // // // // // //             highlightStep?.type === 'computation' 
// // // // // // // //               ? { type: 'row', index: highlightStep.row }
// // // // // // // //               : null
// // // // // // // //           )}

// // // // // // // //           <div className="operator">×</div>

// // // // // // // //           {renderMatrix(
// // // // // // // //             matrixB, 
// // // // // // // //             'B', 
// // // // // // // //             highlightStep?.type === 'computation' 
// // // // // // // //               ? { type: 'col', index: highlightStep.col }
// // // // // // // //               : null
// // // // // // // //           )}

// // // // // // // //           <div className="operator">=</div>

// // // // // // // //           {isValidMultiplication && renderMatrix(
// // // // // // // //             resultMatrix, 
// // // // // // // //             'Result', 
// // // // // // // //             highlightStep?.type === 'computation' 
// // // // // // // //               ? { type: 'result', row: highlightStep.row, col: highlightStep.col }
// // // // // // // //               : null
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {renderInteractiveMatrix()}

// // // // // // // //         <div className="rules-section">
// // // // // // // //           <h3>Matrix Multiplication Rules:</h3>
// // // // // // // //           <ul>
// // // // // // // //             <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
// // // // // // // //             <li>The result matrix has dimensions: (A rows) × (B columns)</li>
// // // // // // // //             <li>Each cell in the result is computed using one row from A and one column from B</li>
// // // // // // // //             <li>Click on result cells above to see which row and column are used for that computation</li>
// // // // // // // //             <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
// // // // // // // //           </ul>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <style jsx>{`
// // // // // // // //         .container {
// // // // // // // //           padding: 2rem;
// // // // // // // //           max-width: 1200px;
// // // // // // // //           margin: 0 auto;
// // // // // // // //           background-color: #f9fafb;
// // // // // // // //           min-height: 100vh;
// // // // // // // //           font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
// // // // // // // //         }

// // // // // // // //         .title-section {
// // // // // // // //           text-align: center;
// // // // // // // //           margin-bottom: 2rem;
// // // // // // // //         }

// // // // // // // //         .title-section h1 {
// // // // // // // //           font-size: 3rem;
// // // // // // // //           font-weight: bold;
// // // // // // // //           color: #1f2937;
// // // // // // // //           margin-bottom: 1rem;
// // // // // // // //         }

// // // // // // // //         .title-section p {
// // // // // // // //           color: #6b7280;
// // // // // // // //           max-width: 32rem;
// // // // // // // //           margin: 0 auto;
// // // // // // // //           font-size: 1.125rem;
// // // // // // // //           line-height: 1.75;
// // // // // // // //         }

// // // // // // // //         .controls {
// // // // // // // //           background: white;
// // // // // // // //           padding: 1.5rem;
// // // // // // // //           border-radius: 0.75rem;
// // // // // // // //           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
// // // // // // // //           margin-bottom: 2rem;
// // // // // // // //         }

// // // // // // // //         .controls h2 {
// // // // // // // //           font-size: 1.5rem;
// // // // // // // //           font-weight: 600;
// // // // // // // //           margin-bottom: 1rem;
// // // // // // // //           color: #1f2937;
// // // // // // // //         }

// // // // // // // //         .controls-grid {
// // // // // // // //           display: grid;
// // // // // // // //           grid-template-columns: 1fr 1fr;
// // // // // // // //           gap: 1.5rem;
// // // // // // // //           margin-bottom: 1rem;
// // // // // // // //         }

// // // // // // // //         .control-group label {
// // // // // // // //           display: block;
// // // // // // // //           font-size: 0.875rem;
// // // // // // // //           font-weight: 500;
// // // // // // // //           margin-bottom: 0.5rem;
// // // // // // // //           color: #374151;
// // // // // // // //         }

// // // // // // // //         .dimension-inputs {
// // // // // // // //           display: flex;
// // // // // // // //           gap: 0.75rem;
// // // // // // // //           align-items: end;
// // // // // // // //         }

// // // // // // // //         .input-group {
// // // // // // // //           display: flex;
// // // // // // // //           flex-direction: column;
// // // // // // // //           align-items: center;
// // // // // // // //         }

// // // // // // // //         .input-group span {
// // // // // // // //           font-size: 0.75rem;
// // // // // // // //           color: #6b7280;
// // // // // // // //           margin-bottom: 0.25rem;
// // // // // // // //         }

// // // // // // // //         .input-group input {
// // // // // // // //           width: 4rem;
// // // // // // // //           padding: 0.5rem;
// // // // // // // //           border: 1px solid #d1d5db;
// // // // // // // //           border-radius: 0.375rem;
// // // // // // // //           text-align: center;
// // // // // // // //           font-size: 1rem;
// // // // // // // //         }

// // // // // // // //         .input-group input:focus {
// // // // // // // //           outline: none;
// // // // // // // //           border-color: #3b82f6;
// // // // // // // //           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
// // // // // // // //         }

// // // // // // // //         .multiplication-symbol {
// // // // // // // //           color: #6b7280;
// // // // // // // //           font-size: 1.25rem;
// // // // // // // //           font-weight: bold;
// // // // // // // //           align-self: end;
// // // // // // // //           padding-bottom: 0.5rem;
// // // // // // // //         }

// // // // // // // //         .validation-message {
// // // // // // // //           padding: 1rem;
// // // // // // // //           border-radius: 0.5rem;
// // // // // // // //           font-weight: 600;
// // // // // // // //           text-align: center;
// // // // // // // //         }

// // // // // // // //         .validation-message.valid {
// // // // // // // //           background-color: #d1fae5;
// // // // // // // //           color: #065f46;
// // // // // // // //           border: 2px solid #10b981;
// // // // // // // //         }

// // // // // // // //         .validation-message.invalid {
// // // // // // // //           background-color: #fee2e2;
// // // // // // // //           color: #991b1b;
// // // // // // // //           border: 2px solid #ef4444;
// // // // // // // //         }

// // // // // // // //         .visualization {
// // // // // // // //           background: white;
// // // // // // // //           padding: 1.5rem;
// // // // // // // //           border-radius: 0.75rem;
// // // // // // // //           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
// // // // // // // //         }

// // // // // // // //         .matrices-container {
// // // // // // // //           display: flex;
// // // // // // // //           flex-wrap: wrap;
// // // // // // // //           justify-content: center;
// // // // // // // //           align-items: center;
// // // // // // // //           gap: 2rem;
// // // // // // // //           margin-bottom: 1.5rem;
// // // // // // // //         }

// // // // // // // //         .matrix-wrapper {
// // // // // // // //           display: flex;
// // // // // // // //           flex-direction: column;
// // // // // // // //           align-items: center;
// // // // // // // //         }

// // // // // // // //         .matrix-label {
// // // // // // // //           font-size: 0.875rem;
// // // // // // // //           font-weight: 600;
// // // // // // // //           margin-bottom: 0.5rem;
// // // // // // // //           color: #374151;
// // // // // // // //         }

// // // // // // // //         .matrix {
// // // // // // // //           display: inline-grid;
// // // // // // // //           gap: 2px;
// // // // // // // //           border: 3px solid #374151;
// // // // // // // //           background: #374151;
// // // // // // // //           padding: 2px;
// // // // // // // //         }

// // // // // // // //         .matrix-cell {
// // // // // // // //           width: 35px;
// // // // // // // //           height: 35px;
// // // // // // // //           background: #f9fafb;
// // // // // // // //           border: 1px solid #d1d5db;
// // // // // // // //           display: flex;
// // // // // // // //           align-items: center;
// // // // // // // //           justify-content: center;
// // // // // // // //           transition: all 0.3s ease;
// // // // // // // //         }

// // // // // // // //         .matrix-cell:hover {
// // // // // // // //           background: #f3f4f6;
// // // // // // // //         }

// // // // // // // //         .matrix-cell.highlighted {
// // // // // // // //           background: #dbeafe;
// // // // // // // //           border-color: #3b82f6;
// // // // // // // //           box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
// // // // // // // //         }

// // // // // // // //         .cell-dot {
// // // // // // // //           width: 8px;
// // // // // // // //           height: 8px;
// // // // // // // //           background: #9ca3af;
// // // // // // // //           border-radius: 50%;
// // // // // // // //           opacity: 0.6;
// // // // // // // //         }

// // // // // // // //         .operator {
// // // // // // // //           font-size: 2rem;
// // // // // // // //           font-weight: bold;
// // // // // // // //           color: #6b7280;
// // // // // // // //         }

// // // // // // // //         .interactive-section {
// // // // // // // //           margin-top: 2rem;
// // // // // // // //           text-align: center;
// // // // // // // //         }

// // // // // // // //         .interactive-title {
// // // // // // // //           font-size: 1.125rem;
// // // // // // // //           font-weight: 600;
// // // // // // // //           margin-bottom: 1rem;
// // // // // // // //           color: #374151;
// // // // // // // //         }

// // // // // // // //         .result-cell {
// // // // // // // //           width: 45px;
// // // // // // // //           height: 45px;
// // // // // // // //           background: #dbeafe;
// // // // // // // //           border: 2px solid #3b82f6;
// // // // // // // //           display: flex;
// // // // // // // //           align-items: center;
// // // // // // // //           justify-content: center;
// // // // // // // //           cursor: pointer;
// // // // // // // //           transition: all 0.2s ease;
// // // // // // // //         }

// // // // // // // //         .result-cell:hover {
// // // // // // // //           background: #bfdbfe;
// // // // // // // //           transform: scale(1.05);
// // // // // // // //         }

// // // // // // // //         .result-cell:focus {
// // // // // // // //           outline: none;
// // // // // // // //           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
// // // // // // // //         }

// // // // // // // //         .result-dot {
// // // // // // // //           width: 12px;
// // // // // // // //           height: 12px;
// // // // // // // //           background: #3b82f6;
// // // // // // // //           border-radius: 50%;
// // // // // // // //         }

// // // // // // // //         .rules-section {
// // // // // // // //           margin-top: 2rem;
// // // // // // // //           padding: 1rem;
// // // // // // // //           background: #f9fafb;
// // // // // // // //           border-radius: 0.5rem;
// // // // // // // //           border-left: 4px solid #3b82f6;
// // // // // // // //         }

// // // // // // // //         .rules-section h3 {
// // // // // // // //           font-size: 1.125rem;
// // // // // // // //           font-weight: 600;
// // // // // // // //           margin-bottom: 0.75rem;
// // // // // // // //           color: #374151;
// // // // // // // //         }

// // // // // // // //         .rules-section ul {
// // // // // // // //           list-style: none;
// // // // // // // //           padding: 0;
// // // // // // // //           margin: 0;
// // // // // // // //         }

// // // // // // // //         .rules-section li {
// // // // // // // //           font-size: 0.875rem;
// // // // // // // //           color: #374151;
// // // // // // // //           margin-bottom: 0.5rem;
// // // // // // // //           position: relative;
// // // // // // // //           padding-left: 1.5rem;
// // // // // // // //         }

// // // // // // // //         .rules-section li::before {
// // // // // // // //           content: "→";
// // // // // // // //           position: absolute;
// // // // // // // //           left: 0;
// // // // // // // //           color: #3b82f6;
// // // // // // // //           font-weight: bold;
// // // // // // // //         }

// // // // // // // //         @media (max-width: 768px) {
// // // // // // // //           .controls-grid {
// // // // // // // //             grid-template-columns: 1fr;
// // // // // // // //           }
          
// // // // // // // //           .matrices-container {
// // // // // // // //             flex-direction: column;
// // // // // // // //             gap: 1rem;
// // // // // // // //           }
          
// // // // // // // //           .operator {
// // // // // // // //             font-size: 1.5rem;
// // // // // // // //           }

// // // // // // // //           .title-section h1 {
// // // // // // // //             font-size: 2rem;
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default MatrixMultiplicationOrderVisualizer;


// // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // const MatrixMultiplicationOrderVisualizer = () => {
// // // // // // //   const [matrixA, setMatrixA] = useState({ rows: 3, cols: 2 });
// // // // // // //   const [matrixB, setMatrixB] = useState({ rows: 2, cols: 4 });
// // // // // // //   const [highlightTimeout, setHighlightTimeout] = useState(null);

// // // // // // //   const isValidMultiplication = matrixA.cols === matrixB.rows;

// // // // // // //   const createMatrix = (containerId, rows, cols, type) => {
// // // // // // //     const cells = [];
// // // // // // //     for (let i = 0; i < rows; i++) {
// // // // // // //       for (let j = 0; j < cols; j++) {
// // // // // // //         cells.push(
// // // // // // //           <div
// // // // // // //             key={`${i}-${j}`}
// // // // // // //             className="matrix-cell"
// // // // // // //             data-row={i}
// // // // // // //             data-col={j}
// // // // // // //             data-type={type}
// // // // // // //           >
// // // // // // //             <div className="cell-dot"></div>
// // // // // // //           </div>
// // // // // // //         );
// // // // // // //       }
// // // // // // //     }
// // // // // // //     return cells;
// // // // // // //   };

// // // // // // //   const createInteractiveMatrix = (rows, cols) => {
// // // // // // //     const cells = [];
// // // // // // //     for (let i = 0; i < rows; i++) {
// // // // // // //       for (let j = 0; j < cols; j++) {
// // // // // // //         cells.push(
// // // // // // //           <div
// // // // // // //             key={`${i}-${j}`}
// // // // // // //             className="result-cell"
// // // // // // //             data-row={i}
// // // // // // //             data-col={j}
// // // // // // //             onClick={() => highlightComputation(i, j)}
// // // // // // //           >
// // // // // // //             <div className="result-dot"></div>
// // // // // // //           </div>
// // // // // // //         );
// // // // // // //       }
// // // // // // //     }
// // // // // // //     return cells;
// // // // // // //   };

// // // // // // //   const clearHighlights = () => {
// // // // // // //     const highlightedCells = document.querySelectorAll('.matrix-cell.highlighted');
// // // // // // //     highlightedCells.forEach(cell => {
// // // // // // //       cell.classList.remove('highlighted');
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const highlightComputation = (row, col) => {
// // // // // // //     clearHighlights();

// // // // // // //     // Highlight row in matrix A
// // // // // // //     const matrixACells = document.querySelectorAll('#matrixA .matrix-cell');
// // // // // // //     matrixACells.forEach(cell => {
// // // // // // //       if (parseInt(cell.dataset.row) === row) {
// // // // // // //         cell.classList.add('highlighted');
// // // // // // //       }
// // // // // // //     });

// // // // // // //     // Highlight column in matrix B
// // // // // // //     const matrixBCells = document.querySelectorAll('#matrixB .matrix-cell');
// // // // // // //     matrixBCells.forEach(cell => {
// // // // // // //       if (parseInt(cell.dataset.col) === col) {
// // // // // // //         cell.classList.add('highlighted');
// // // // // // //       }
// // // // // // //     });

// // // // // // //     // Highlight result cell
// // // // // // //     const resultCells = document.querySelectorAll('#matrixResult .matrix-cell');
// // // // // // //     resultCells.forEach(cell => {
// // // // // // //       if (parseInt(cell.dataset.row) === row && parseInt(cell.dataset.col) === col) {
// // // // // // //         cell.classList.add('highlighted');
// // // // // // //       }
// // // // // // //     });

// // // // // // //     // Clear highlights after 2 seconds
// // // // // // //     if (highlightTimeout) clearTimeout(highlightTimeout);
// // // // // // //     const timeout = setTimeout(clearHighlights, 2000);
// // // // // // //     setHighlightTimeout(timeout);
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     return () => {
// // // // // // //       if (highlightTimeout) {
// // // // // // //         clearTimeout(highlightTimeout);
// // // // // // //       }
// // // // // // //     };
// // // // // // //   }, [highlightTimeout]);

// // // // // // //   return (
// // // // // // //     <div className="container">
// // // // // // //       <div className="title">
// // // // // // //         <h1>Matrix Multiplication Visualizer</h1>
// // // // // // //         <p>Explore how matrix dimensions work in multiplication. Adjust the matrix sizes and see how dimensions must align for valid multiplication.</p>
// // // // // // //       </div>

// // // // // // //       <div className="controls">
// // // // // // //         <h2>Matrix Dimensions</h2>
// // // // // // //         <div className="controls-grid">
// // // // // // //           <div className="control-group">
// // // // // // //             <label>Matrix A Size</label>
// // // // // // //             <div className="dimension-inputs">
// // // // // // //               <div className="input-group">
// // // // // // //                 <span>Rows</span>
// // // // // // //                 <input 
// // // // // // //                   type="number" 
// // // // // // //                   value={matrixA.rows} 
// // // // // // //                   min="1" 
// // // // // // //                   max="6"
// // // // // // //                   onChange={(e) => setMatrixA(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <span className="times">×</span>
// // // // // // //               <div className="input-group">
// // // // // // //                 <span>Cols</span>
// // // // // // //                 <input 
// // // // // // //                   type="number" 
// // // // // // //                   value={matrixA.cols} 
// // // // // // //                   min="1" 
// // // // // // //                   max="6"
// // // // // // //                   onChange={(e) => setMatrixA(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="control-group">
// // // // // // //             <label>Matrix B Size</label>
// // // // // // //             <div className="dimension-inputs">
// // // // // // //               <div className="input-group">
// // // // // // //                 <span>Rows</span>
// // // // // // //                 <input 
// // // // // // //                   type="number" 
// // // // // // //                   value={matrixB.rows} 
// // // // // // //                   min="1" 
// // // // // // //                   max="6"
// // // // // // //                   onChange={(e) => setMatrixB(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <span className="times">×</span>
// // // // // // //               <div className="input-group">
// // // // // // //                 <span>Cols</span>
// // // // // // //                 <input 
// // // // // // //                   type="number" 
// // // // // // //                   value={matrixB.cols} 
// // // // // // //                   min="1" 
// // // // // // //                   max="6"
// // // // // // //                   onChange={(e) => setMatrixB(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className={`validation ${isValidMultiplication ? 'valid' : 'invalid'}`}>
// // // // // // //           {isValidMultiplication ? 
// // // // // // //             `✓ Valid multiplication: A(${matrixA.rows}×${matrixA.cols}) × B(${matrixB.rows}×${matrixB.cols}) = Result(${matrixA.rows}×${matrixB.cols})` :
// // // // // // //             `✗ Invalid multiplication: A columns (${matrixA.cols}) must equal B rows (${matrixB.rows})`
// // // // // // //           }
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="visualization">
// // // // // // //         <div className="matrices-container">
// // // // // // //           <div className="matrix-wrapper">
// // // // // // //             <div className="matrix-label">Matrix A ({matrixA.rows}×{matrixA.cols})</div>
// // // // // // //             <div 
// // // // // // //               className="matrix" 
// // // // // // //               id="matrixA"
// // // // // // //               style={{
// // // // // // //                 gridTemplateColumns: `repeat(${matrixA.cols}, 35px)`,
// // // // // // //                 gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {createMatrix('matrixA', matrixA.rows, matrixA.cols, 'A')}
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="operator">×</div>
          
// // // // // // //           <div className="matrix-wrapper">
// // // // // // //             <div className="matrix-label">Matrix B ({matrixB.rows}×{matrixB.cols})</div>
// // // // // // //             <div 
// // // // // // //               className="matrix" 
// // // // // // //               id="matrixB"
// // // // // // //               style={{
// // // // // // //                 gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // // // // //                 gridTemplateRows: `repeat(${matrixB.rows}, 35px)`
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {createMatrix('matrixB', matrixB.rows, matrixB.cols, 'B')}
// // // // // // //             </div>
// // // // // // //           </div>
          
// // // // // // //           <div className="operator">=</div>
          
// // // // // // //           {isValidMultiplication && (
// // // // // // //             <div className="matrix-wrapper">
// // // // // // //               <div className="matrix-label">Result ({matrixA.rows}×{matrixB.cols})</div>
// // // // // // //               <div 
// // // // // // //                 className="matrix" 
// // // // // // //                 id="matrixResult"
// // // // // // //                 style={{
// // // // // // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // // // // //                   gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {createMatrix('matrixResult', matrixA.rows, matrixB.cols, 'Result')}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
        
// // // // // // //         {isValidMultiplication && (
// // // // // // //           <div className="interactive-section">
// // // // // // //             <h3>Click on result cells to see computation pattern</h3>
// // // // // // //             <div className="matrix-wrapper">
// // // // // // //               <div className="matrix-label">Interactive Result ({matrixA.rows}×{matrixB.cols})</div>
// // // // // // //               <div 
// // // // // // //                 className="matrix"
// // // // // // //                 style={{
// // // // // // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 45px)`,
// // // // // // //                   gridTemplateRows: `repeat(${matrixA.rows}, 45px)`
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 {createInteractiveMatrix(matrixA.rows, matrixB.cols)}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
        
// // // // // // //         <div className="rules">
// // // // // // //           <h3>Matrix Multiplication Rules:</h3>
// // // // // // //           <ul>
// // // // // // //             <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
// // // // // // //             <li>The result matrix has dimensions: (A rows) × (B columns)</li>
// // // // // // //             <li>Each cell in the result is computed using one row from A and one column from B</li>
// // // // // // //             <li>Click on result cells above to see which row and column are used for that computation</li>
// // // // // // //             <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
// // // // // // //           </ul>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style jsx>{`
// // // // // // //         * {
// // // // // // //           box-sizing: border-box;
// // // // // // //         }
        
// // // // // // //         .container {
// // // // // // //           margin: 0;
// // // // // // //           padding: 20px;
// // // // // // //           font-family: system-ui, -apple-system, sans-serif;
// // // // // // //           background-color: #f9fafb;
// // // // // // //           line-height: 1.6;
// // // // // // //           max-width: 1200px;
// // // // // // //           margin: 0 auto;
// // // // // // //         }
        
// // // // // // //         .title {
// // // // // // //           text-align: center;
// // // // // // //           margin-bottom: 30px;
// // // // // // //         }
        
// // // // // // //         .title h1 {
// // // // // // //           font-size: 2.5rem;
// // // // // // //           color: #1f2937;
// // // // // // //           margin-bottom: 15px;
// // // // // // //         }
        
// // // // // // //         .title p {
// // // // // // //           color: #6b7280;
// // // // // // //           font-size: 1.1rem;
// // // // // // //           max-width: 600px;
// // // // // // //           margin: 0 auto;
// // // // // // //         }
        
// // // // // // //         .controls {
// // // // // // //           background: white;
// // // // // // //           padding: 25px;
// // // // // // //           border-radius: 10px;
// // // // // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // // // // //           margin-bottom: 30px;
// // // // // // //         }
        
// // // // // // //         .controls h2 {
// // // // // // //           font-size: 1.5rem;
// // // // // // //           margin-bottom: 20px;
// // // // // // //           color: #1f2937;
// // // // // // //         }
        
// // // // // // //         .controls-grid {
// // // // // // //           display: grid;
// // // // // // //           grid-template-columns: 1fr 1fr;
// // // // // // //           gap: 30px;
// // // // // // //           margin-bottom: 20px;
// // // // // // //         }
        
// // // // // // //         .control-group label {
// // // // // // //           display: block;
// // // // // // //           font-weight: 600;
// // // // // // //           margin-bottom: 10px;
// // // // // // //           color: #374151;
// // // // // // //         }
        
// // // // // // //         .dimension-inputs {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           gap: 15px;
// // // // // // //         }
        
// // // // // // //         .input-group {
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           align-items: center;
// // // // // // //         }
        
// // // // // // //         .input-group span {
// // // // // // //           font-size: 0.9rem;
// // // // // // //           color: #6b7280;
// // // // // // //           margin-bottom: 5px;
// // // // // // //         }
        
// // // // // // //         .input-group input {
// // // // // // //           width: 60px;
// // // // // // //           padding: 8px;
// // // // // // //           border: 2px solid #d1d5db;
// // // // // // //           border-radius: 5px;
// // // // // // //           font-size: 1rem;
// // // // // // //           text-align: center;
// // // // // // //         }
        
// // // // // // //         .input-group input:focus {
// // // // // // //           outline: none;
// // // // // // //           border-color: #3b82f6;
// // // // // // //         }
        
// // // // // // //         .times {
// // // // // // //           font-size: 1.5rem;
// // // // // // //           color: #6b7280;
// // // // // // //           font-weight: bold;
// // // // // // //         }
        
// // // // // // //         .validation {
// // // // // // //           padding: 15px;
// // // // // // //           border-radius: 8px;
// // // // // // //           font-weight: 600;
// // // // // // //           text-align: center;
// // // // // // //         }
        
// // // // // // //         .validation.valid {
// // // // // // //           background: #d1fae5;
// // // // // // //           color: #065f46;
// // // // // // //           border: 2px solid #10b981;
// // // // // // //         }
        
// // // // // // //         .validation.invalid {
// // // // // // //           background: #fee2e2;
// // // // // // //           color: #991b1b;
// // // // // // //           border: 2px solid #ef4444;
// // // // // // //         }
        
// // // // // // //         .visualization {
// // // // // // //           background: white;
// // // // // // //           padding: 30px;
// // // // // // //           border-radius: 10px;
// // // // // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // // // // //         }
        
// // // // // // //         .matrices-container {
// // // // // // //           display: flex;
// // // // // // //           justify-content: center;
// // // // // // //           align-items: center;
// // // // // // //           gap: 40px;
// // // // // // //           margin-bottom: 40px;
// // // // // // //           flex-wrap: wrap;
// // // // // // //         }
        
// // // // // // //         .matrix-wrapper {
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           align-items: center;
// // // // // // //         }
        
// // // // // // //         .matrix-label {
// // // // // // //           font-weight: 600;
// // // // // // //           margin-bottom: 10px;
// // // // // // //           color: #374151;
// // // // // // //           font-size: 1.1rem;
// // // // // // //         }
        
// // // // // // //         .matrix {
// // // // // // //           display: grid;
// // // // // // //           gap: 2px;
// // // // // // //           border: 3px solid #374151;
// // // // // // //           background: #374151;
// // // // // // //           padding: 2px;
// // // // // // //         }
        
// // // // // // //         .matrix-cell {
// // // // // // //           width: 35px;
// // // // // // //           height: 35px;
// // // // // // //           background: #f9fafb;
// // // // // // //           border: 1px solid #d1d5db;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           transition: all 0.3s ease;
// // // // // // //         }
        
// // // // // // //         .matrix-cell.highlighted {
// // // // // // //           background: #dbeafe;
// // // // // // //           border-color: #3b82f6;
// // // // // // //           box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
// // // // // // //         }
        
// // // // // // //         .cell-dot {
// // // // // // //           width: 8px;
// // // // // // //           height: 8px;
// // // // // // //           background: #9ca3af;
// // // // // // //           border-radius: 50%;
// // // // // // //         }
        
// // // // // // //         .operator {
// // // // // // //           font-size: 3rem;
// // // // // // //           font-weight: bold;
// // // // // // //           color: #6b7280;
// // // // // // //         }
        
// // // // // // //         .interactive-section {
// // // // // // //           margin-top: 40px;
// // // // // // //           text-align: center;
// // // // // // //         }
        
// // // // // // //         .interactive-section h3 {
// // // // // // //           font-size: 1.3rem;
// // // // // // //           margin-bottom: 20px;
// // // // // // //           color: #374151;
// // // // // // //         }
        
// // // // // // //         .result-cell {
// // // // // // //           width: 45px;
// // // // // // //           height: 45px;
// // // // // // //           background: #dbeafe;
// // // // // // //           border: 2px solid #3b82f6;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //           cursor: pointer;
// // // // // // //           transition: all 0.2s ease;
// // // // // // //         }
        
// // // // // // //         .result-cell:hover {
// // // // // // //           background: #bfdbfe;
// // // // // // //           transform: scale(1.05);
// // // // // // //         }
        
// // // // // // //         .result-dot {
// // // // // // //           width: 12px;
// // // // // // //           height: 12px;
// // // // // // //           background: #3b82f6;
// // // // // // //           border-radius: 50%;
// // // // // // //         }
        
// // // // // // //         .rules {
// // // // // // //           margin-top: 30px;
// // // // // // //           padding: 20px;
// // // // // // //           background: #f9fafb;
// // // // // // //           border-radius: 8px;
// // // // // // //           border-left: 4px solid #3b82f6;
// // // // // // //         }
        
// // // // // // //         .rules h3 {
// // // // // // //           margin-bottom: 15px;
// // // // // // //           color: #374151;
// // // // // // //         }
        
// // // // // // //         .rules ul {
// // // // // // //           list-style: none;
// // // // // // //           padding: 0;
// // // // // // //         }
        
// // // // // // //         .rules li {
// // // // // // //           margin-bottom: 10px;
// // // // // // //           color: #374151;
// // // // // // //         }
        
// // // // // // //         .rules li::before {
// // // // // // //           content: "→ ";
// // // // // // //           color: #3b82f6;
// // // // // // //           font-weight: bold;
// // // // // // //         }
        
// // // // // // //         @media (max-width: 768px) {
// // // // // // //           .controls-grid {
// // // // // // //             grid-template-columns: 1fr;
// // // // // // //           }
          
// // // // // // //           .matrices-container {
// // // // // // //             flex-direction: column;
// // // // // // //             gap: 20px;
// // // // // // //           }
          
// // // // // // //           .operator {
// // // // // // //             font-size: 2rem;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MatrixMultiplicationOrderVisualizer;


// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // const MatrixMultiplicationOrderVisualizer = () => {
// // // // // //   const [matrixA, setMatrixA] = useState({ rows: 3, cols: 2 });
// // // // // //   const [matrixB, setMatrixB] = useState({ rows: 2, cols: 4 });
// // // // // //   const [highlightTimeout, setHighlightTimeout] = useState(null);

// // // // // //   const isValidMultiplication = matrixA.cols === matrixB.rows;

// // // // // //   const createMatrix = (containerId, rows, cols, type) => {
// // // // // //     const cells = [];
// // // // // //     for (let i = 0; i < rows; i++) {
// // // // // //       for (let j = 0; j < cols; j++) {
// // // // // //         cells.push(
// // // // // //           <div
// // // // // //             key={`${i}-${j}`}
// // // // // //             className="matrix-cell"
// // // // // //             data-row={i}
// // // // // //             data-col={j}
// // // // // //             data-type={type}
// // // // // //           >
// // // // // //             <div className="cell-dot"></div>
// // // // // //           </div>
// // // // // //         );
// // // // // //       }
// // // // // //     }
// // // // // //     return cells;
// // // // // //   };

// // // // // //   const createInteractiveMatrix = (rows, cols) => {
// // // // // //     const cells = [];
// // // // // //     for (let i = 0; i < rows; i++) {
// // // // // //       for (let j = 0; j < cols; j++) {
// // // // // //         cells.push(
// // // // // //           <div
// // // // // //             key={`${i}-${j}`}
// // // // // //             className="result-cell"
// // // // // //             data-row={i}
// // // // // //             data-col={j}
// // // // // //             onClick={() => highlightComputation(i, j)}
// // // // // //           >
// // // // // //             <div className="result-dot"></div>
// // // // // //           </div>
// // // // // //         );
// // // // // //       }
// // // // // //     }
// // // // // //     return cells;
// // // // // //   };

// // // // // //   const clearHighlights = () => {
// // // // // //     const highlightedCells = document.querySelectorAll('.matrix-cell.highlighted');
// // // // // //     highlightedCells.forEach(cell => {
// // // // // //       cell.classList.remove('highlighted');
// // // // // //     });
// // // // // //   };

// // // // // //   const highlightComputation = (row, col) => {
// // // // // //     clearHighlights();

// // // // // //     // Highlight row in matrix A
// // // // // //     const matrixACells = document.querySelectorAll('#matrixA .matrix-cell');
// // // // // //     matrixACells.forEach(cell => {
// // // // // //       if (parseInt(cell.dataset.row) === row) {
// // // // // //         cell.classList.add('highlighted');
// // // // // //       }
// // // // // //     });

// // // // // //     // Highlight column in matrix B
// // // // // //     const matrixBCells = document.querySelectorAll('#matrixB .matrix-cell');
// // // // // //     matrixBCells.forEach(cell => {
// // // // // //       if (parseInt(cell.dataset.col) === col) {
// // // // // //         cell.classList.add('highlighted');
// // // // // //       }
// // // // // //     });

// // // // // //     // Highlight result cell
// // // // // //     const resultCells = document.querySelectorAll('#matrixResult .matrix-cell');
// // // // // //     resultCells.forEach(cell => {
// // // // // //       if (parseInt(cell.dataset.row) === row && parseInt(cell.dataset.col) === col) {
// // // // // //         cell.classList.add('highlighted');
// // // // // //       }
// // // // // //     });

// // // // // //     // Clear highlights after 2 seconds
// // // // // //     if (highlightTimeout) clearTimeout(highlightTimeout);
// // // // // //     const timeout = setTimeout(clearHighlights, 2000);
// // // // // //     setHighlightTimeout(timeout);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     return () => {
// // // // // //       if (highlightTimeout) {
// // // // // //         clearTimeout(highlightTimeout);
// // // // // //       }
// // // // // //     };
// // // // // //   }, [highlightTimeout]);

// // // // // //   return (
// // // // // //     <div className="container">
// // // // // //       <div className="title">
// // // // // //         <h1>Matrix Multiplication Visualizer</h1>
// // // // // //         <p>Explore how matrix dimensions work in multiplication. Adjust the matrix sizes and see how dimensions must align for valid multiplication.</p>
// // // // // //       </div>

// // // // // //       <div className="controls">
// // // // // //         <h2>Matrix Dimensions</h2>
// // // // // //         <div className="controls-grid">
// // // // // //           <div className="control-group">
// // // // // //             <label>Matrix A Size</label>
// // // // // //             <div className="dimension-inputs">
// // // // // //               <div className="input-group">
// // // // // //                 <span>Rows</span>
// // // // // //                 <input 
// // // // // //                   type="number" 
// // // // // //                   value={matrixA.rows} 
// // // // // //                   min="1" 
// // // // // //                   max="6"
// // // // // //                   onChange={(e) => setMatrixA(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <span className="times">×</span>
// // // // // //               <div className="input-group">
// // // // // //                 <span>Cols</span>
// // // // // //                 <input 
// // // // // //                   type="number" 
// // // // // //                   value={matrixA.cols} 
// // // // // //                   min="1" 
// // // // // //                   max="6"
// // // // // //                   onChange={(e) => setMatrixA(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="control-group">
// // // // // //             <label>Matrix B Size</label>
// // // // // //             <div className="dimension-inputs">
// // // // // //               <div className="input-group">
// // // // // //                 <span>Rows</span>
// // // // // //                 <input 
// // // // // //                   type="number" 
// // // // // //                   value={matrixB.rows} 
// // // // // //                   min="1" 
// // // // // //                   max="6"
// // // // // //                   onChange={(e) => setMatrixB(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <span className="times">×</span>
// // // // // //               <div className="input-group">
// // // // // //                 <span>Cols</span>
// // // // // //                 <input 
// // // // // //                   type="number" 
// // // // // //                   value={matrixB.cols} 
// // // // // //                   min="1" 
// // // // // //                   max="6"
// // // // // //                   onChange={(e) => setMatrixB(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         <div className={`validation ${isValidMultiplication ? 'valid' : 'invalid'}`}>
// // // // // //           {isValidMultiplication ? 
// // // // // //             `✓ Valid multiplication: A(${matrixA.rows}×${matrixA.cols}) × B(${matrixB.rows}×${matrixB.cols}) = Result(${matrixA.rows}×${matrixB.cols})` :
// // // // // //             `✗ Invalid multiplication: A columns (${matrixA.cols}) must equal B rows (${matrixB.rows})`
// // // // // //           }
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="visualization">
// // // // // //         <div className="matrices-container">
// // // // // //           <div className="matrix-wrapper">
// // // // // //             <div className="matrix-label">Matrix A ({matrixA.rows}×{matrixA.cols})</div>
// // // // // //             <div 
// // // // // //               className="matrix" 
// // // // // //               id="matrixA"
// // // // // //               style={{
// // // // // //                 gridTemplateColumns: `repeat(${matrixA.cols}, 35px)`,
// // // // // //                 gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // // // //               }}
// // // // // //             >
// // // // // //               {createMatrix('matrixA', matrixA.rows, matrixA.cols, 'A')}
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="operator">×</div>
          
// // // // // //           <div className="matrix-wrapper">
// // // // // //             <div className="matrix-label">Matrix B ({matrixB.rows}×{matrixB.cols})</div>
// // // // // //             <div 
// // // // // //               className="matrix" 
// // // // // //               id="matrixB"
// // // // // //               style={{
// // // // // //                 gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // // // //                 gridTemplateRows: `repeat(${matrixB.rows}, 35px)`
// // // // // //               }}
// // // // // //             >
// // // // // //               {createMatrix('matrixB', matrixB.rows, matrixB.cols, 'B')}
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="operator">=</div>
          
// // // // // //           {isValidMultiplication && (
// // // // // //             <div className="matrix-wrapper">
// // // // // //               <div className="matrix-label">Result ({matrixA.rows}×{matrixB.cols})</div>
// // // // // //               <div 
// // // // // //                 className="matrix" 
// // // // // //                 id="matrixResult"
// // // // // //                 style={{
// // // // // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // // // //                   gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {createMatrix('matrixResult', matrixA.rows, matrixB.cols, 'Result')}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
        
// // // // // //         {isValidMultiplication && (
// // // // // //           <div className="interactive-section">
// // // // // //             <h3>Click on result cells to see computation pattern</h3>
// // // // // //             <div className="matrix-wrapper">
// // // // // //               <div className="matrix-label">Interactive Result ({matrixA.rows}×{matrixB.cols})</div>
// // // // // //               <div 
// // // // // //                 className="matrix"
// // // // // //                 style={{
// // // // // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 45px)`,
// // // // // //                   gridTemplateRows: `repeat(${matrixA.rows}, 45px)`
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {createInteractiveMatrix(matrixA.rows, matrixB.cols)}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
        
// // // // // //         <div className="rules">
// // // // // //           <h3>Matrix Multiplication Rules:</h3>
// // // // // //           <ul>
// // // // // //             <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
// // // // // //             <li>The result matrix has dimensions: (A rows) × (B columns)</li>
// // // // // //             <li>Each cell in the result is computed using one row from A and one column from B</li>
// // // // // //             <li>Click on result cells above to see which row and column are used for that computation</li>
// // // // // //             <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
// // // // // //           </ul>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         * {
// // // // // //           box-sizing: border-box;
// // // // // //         }
        
// // // // // //         .container {
// // // // // //           margin: 0;
// // // // // //           padding: 20px;
// // // // // //           font-family: system-ui, -apple-system, sans-serif;
// // // // // //           background-color: #f9fafb;
// // // // // //           line-height: 1.6;
// // // // // //           max-width: 1200px;
// // // // // //           margin: 0 auto;
// // // // // //         }
        
// // // // // //         .title {
// // // // // //           text-align: center;
// // // // // //           margin-bottom: 30px;
// // // // // //         }
        
// // // // // //         .title h1 {
// // // // // //           font-size: 2.5rem;
// // // // // //           color: #1f2937;
// // // // // //           margin-bottom: 15px;
// // // // // //         }
        
// // // // // //         .title p {
// // // // // //           color: #6b7280;
// // // // // //           font-size: 1.1rem;
// // // // // //           max-width: 600px;
// // // // // //           margin: 0 auto;
// // // // // //         }
        
// // // // // //         .controls {
// // // // // //           background: white;
// // // // // //           padding: 25px;
// // // // // //           border-radius: 10px;
// // // // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // // // //           margin-bottom: 30px;
// // // // // //         }
        
// // // // // //         .controls h2 {
// // // // // //           font-size: 1.5rem;
// // // // // //           margin-bottom: 20px;
// // // // // //           color: #1f2937;
// // // // // //         }
        
// // // // // //         .controls-grid {
// // // // // //           display: grid;
// // // // // //           grid-template-columns: 1fr 1fr;
// // // // // //           gap: 30px;
// // // // // //           margin-bottom: 20px;
// // // // // //         }
        
// // // // // //         .control-group label {
// // // // // //           display: block;
// // // // // //           font-weight: 600;
// // // // // //           margin-bottom: 10px;
// // // // // //           color: #374151;
// // // // // //         }
        
// // // // // //         .dimension-inputs {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           gap: 15px;
// // // // // //         }
        
// // // // // //         .input-group {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           align-items: center;
// // // // // //         }
        
// // // // // //         .input-group span {
// // // // // //           font-size: 0.9rem;
// // // // // //           color: #6b7280;
// // // // // //           margin-bottom: 5px;
// // // // // //         }
        
// // // // // //         .input-group input {
// // // // // //           width: 60px;
// // // // // //           padding: 8px;
// // // // // //           border: 2px solid #d1d5db;
// // // // // //           border-radius: 5px;
// // // // // //           font-size: 1rem;
// // // // // //           text-align: center;
// // // // // //         }
        
// // // // // //         .input-group input:focus {
// // // // // //           outline: none;
// // // // // //           border-color: #3b82f6;
// // // // // //         }
        
// // // // // //         .times {
// // // // // //           font-size: 1.5rem;
// // // // // //           color: #6b7280;
// // // // // //           font-weight: bold;
// // // // // //         }
        
// // // // // //         .validation {
// // // // // //           padding: 15px;
// // // // // //           border-radius: 8px;
// // // // // //           font-weight: 600;
// // // // // //           text-align: center;
// // // // // //         }
        
// // // // // //         .validation.valid {
// // // // // //           background: #d1fae5;
// // // // // //           color: #065f46;
// // // // // //           border: 2px solid #10b981;
// // // // // //         }
        
// // // // // //         .validation.invalid {
// // // // // //           background: #fee2e2;
// // // // // //           color: #991b1b;
// // // // // //           border: 2px solid #ef4444;
// // // // // //         }
        
// // // // // //         .visualization {
// // // // // //           background: white;
// // // // // //           padding: 30px;
// // // // // //           border-radius: 10px;
// // // // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // // // //         }
        
// // // // // //         .matrices-container {
// // // // // //           display: flex;
// // // // // //           justify-content: center;
// // // // // //           align-items: center;
// // // // // //           gap: 40px;
// // // // // //           margin-bottom: 40px;
// // // // // //           flex-wrap: wrap;
// // // // // //         }
        
// // // // // //         .matrix-wrapper {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           align-items: center;
// // // // // //         }
        
// // // // // //         .matrix-label {
// // // // // //           font-weight: 600;
// // // // // //           margin-bottom: 10px;
// // // // // //           color: #374151;
// // // // // //           font-size: 1.1rem;
// // // // // //         }
        
// // // // // //         .matrix {
// // // // // //           display: grid;
// // // // // //           gap: 1px;
// // // // // //           border: 2px solid #374151;
// // // // // //           background: white;
// // // // // //           padding: 0;
// // // // // //         }
        
// // // // // //         .matrix-cell {
// // // // // //           width: 35px;
// // // // // //           height: 35px;
// // // // // //           background: white;
// // // // // //           border: 1px solid #374151;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           transition: all 0.3s ease;
// // // // // //         }
        
// // // // // //         .matrix-cell.highlighted {
// // // // // //           background: #dbeafe;
// // // // // //           border-color: #3b82f6;
// // // // // //           box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
// // // // // //         }
        
// // // // // //         .cell-dot {
// // // // // //           width: 8px;
// // // // // //           height: 8px;
// // // // // //           background: #9ca3af;
// // // // // //           border-radius: 50%;
// // // // // //         }
        
// // // // // //         .operator {
// // // // // //           font-size: 3rem;
// // // // // //           font-weight: bold;
// // // // // //           color: #6b7280;
// // // // // //         }
        
// // // // // //         .interactive-section {
// // // // // //           margin-top: 40px;
// // // // // //           text-align: center;
// // // // // //         }
        
// // // // // //         .interactive-section h3 {
// // // // // //           font-size: 1.3rem;
// // // // // //           margin-bottom: 20px;
// // // // // //           color: #374151;
// // // // // //         }
        
// // // // // //         .result-cell {
// // // // // //           width: 45px;
// // // // // //           height: 45px;
// // // // // //           background: #dbeafe;
// // // // // //           border: 2px solid #3b82f6;
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           justify-content: center;
// // // // // //           cursor: pointer;
// // // // // //           transition: all 0.2s ease;
// // // // // //         }
        
// // // // // //         .result-cell:hover {
// // // // // //           background: #bfdbfe;
// // // // // //           transform: scale(1.05);
// // // // // //         }
        
// // // // // //         .result-dot {
// // // // // //           width: 12px;
// // // // // //           height: 12px;
// // // // // //           background: #3b82f6;
// // // // // //           border-radius: 50%;
// // // // // //         }
        
// // // // // //         .rules {
// // // // // //           margin-top: 30px;
// // // // // //           padding: 20px;
// // // // // //           background: #f9fafb;
// // // // // //           border-radius: 8px;
// // // // // //           border-left: 4px solid #3b82f6;
// // // // // //         }
        
// // // // // //         .rules h3 {
// // // // // //           margin-bottom: 15px;
// // // // // //           color: #374151;
// // // // // //         }
        
// // // // // //         .rules ul {
// // // // // //           list-style: none;
// // // // // //           padding: 0;
// // // // // //         }
        
// // // // // //         .rules li {
// // // // // //           margin-bottom: 10px;
// // // // // //           color: #374151;
// // // // // //         }
        
// // // // // //         .rules li::before {
// // // // // //           content: "→ ";
// // // // // //           color: #3b82f6;
// // // // // //           font-weight: bold;
// // // // // //         }
        
// // // // // //         @media (max-width: 768px) {
// // // // // //           .controls-grid {
// // // // // //             grid-template-columns: 1fr;
// // // // // //           }
          
// // // // // //           .matrices-container {
// // // // // //             flex-direction: column;
// // // // // //             gap: 20px;
// // // // // //           }
          
// // // // // //           .operator {
// // // // // //             font-size: 2rem;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MatrixMultiplicationOrderVisualizer;


// // // // // import React, { useState, useEffect } from 'react';

// // // // // const MatrixMultiplicationOrderVisualizer = () => {
// // // // //   const [matrixA, setMatrixA] = useState({ rows: 3, cols: 2 });
// // // // //   const [matrixB, setMatrixB] = useState({ rows: 2, cols: 4 });
// // // // //   const [highlightTimeout, setHighlightTimeout] = useState(null);

// // // // //   const isValidMultiplication = matrixA.cols === matrixB.rows;

// // // // //   const createMatrix = (containerId, rows, cols, type) => {
// // // // //     const cells = [];
// // // // //     for (let i = 0; i < rows; i++) {
// // // // //       for (let j = 0; j < cols; j++) {
// // // // //         cells.push(
// // // // //           <div
// // // // //             key={`${i}-${j}`}
// // // // //             className="matrix-cell"
// // // // //             data-row={i}
// // // // //             data-col={j}
// // // // //             data-type={type}
// // // // //           >
// // // // //             <div className="cell-dot"></div>
// // // // //           </div>
// // // // //         );
// // // // //       }
// // // // //     }
// // // // //     return cells;
// // // // //   };

// // // // //   const createInteractiveMatrix = (rows, cols) => {
// // // // //     const cells = [];
// // // // //     for (let i = 0; i < rows; i++) {
// // // // //       for (let j = 0; j < cols; j++) {
// // // // //         cells.push(
// // // // //           <div
// // // // //             key={`${i}-${j}`}
// // // // //             className="result-cell"
// // // // //             data-row={i}
// // // // //             data-col={j}
// // // // //             onClick={() => highlightComputation(i, j)}
// // // // //           >
// // // // //             <div className="result-dot"></div>
// // // // //           </div>
// // // // //         );
// // // // //       }
// // // // //     }
// // // // //     return cells;
// // // // //   };

// // // // //   const clearHighlights = () => {
// // // // //     const highlightedCells = document.querySelectorAll('.matrix-cell.highlighted');
// // // // //     highlightedCells.forEach(cell => {
// // // // //       cell.classList.remove('highlighted');
// // // // //     });
// // // // //   };

// // // // //   const highlightComputation = (row, col) => {
// // // // //     clearHighlights();

// // // // //     const matrixACells = document.querySelectorAll('#matrixA .matrix-cell');
// // // // //     matrixACells.forEach(cell => {
// // // // //       if (parseInt(cell.dataset.row) === row) {
// // // // //         cell.classList.add('highlighted');
// // // // //       }
// // // // //     });

// // // // //     const matrixBCells = document.querySelectorAll('#matrixB .matrix-cell');
// // // // //     matrixBCells.forEach(cell => {
// // // // //       if (parseInt(cell.dataset.col) === col) {
// // // // //         cell.classList.add('highlighted');
// // // // //       }
// // // // //     });

// // // // //     const resultCells = document.querySelectorAll('#matrixResult .matrix-cell');
// // // // //     resultCells.forEach(cell => {
// // // // //       if (parseInt(cell.dataset.row) === row && parseInt(cell.dataset.col) === col) {
// // // // //         cell.classList.add('highlighted');
// // // // //       }
// // // // //     });

// // // // //     if (highlightTimeout) clearTimeout(highlightTimeout);
// // // // //     const timeout = setTimeout(clearHighlights, 2000);
// // // // //     setHighlightTimeout(timeout);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     return () => {
// // // // //       if (highlightTimeout) {
// // // // //         clearTimeout(highlightTimeout);
// // // // //       }
// // // // //     };
// // // // //   }, [highlightTimeout]);

// // // // //   return (
// // // // //     <div className="container">
// // // // //       <div className="title">
// // // // //         <h1>Matrix Multiplication Visualizer</h1>
// // // // //         <p>Explore how matrix dimensions work in multiplication. Adjust the matrix sizes and see how dimensions must align for valid multiplication.</p>
// // // // //       </div>

// // // // //       <div className="controls">
// // // // //         <h2>Matrix Dimensions</h2>
// // // // //         <div className="controls-grid">
// // // // //           <div className="control-group">
// // // // //             <label>Matrix A Size</label>
// // // // //             <div className="dimension-inputs">
// // // // //               <div className="input-group">
// // // // //                 <span>Rows</span>
// // // // //                 <input 
// // // // //                   type="number" 
// // // // //                   value={matrixA.rows} 
// // // // //                   min="1" 
// // // // //                   max="6"
// // // // //                   onChange={(e) => setMatrixA(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // // //                 />
// // // // //               </div>
// // // // //               <span className="times">×</span>
// // // // //               <div className="input-group">
// // // // //                 <span>Cols</span>
// // // // //                 <input 
// // // // //                   type="number" 
// // // // //                   value={matrixA.cols} 
// // // // //                   min="1" 
// // // // //                   max="6"
// // // // //                   onChange={(e) => setMatrixA(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="control-group">
// // // // //             <label>Matrix B Size</label>
// // // // //             <div className="dimension-inputs">
// // // // //               <div className="input-group">
// // // // //                 <span>Rows</span>
// // // // //                 <input 
// // // // //                   type="number" 
// // // // //                   value={matrixB.rows} 
// // // // //                   min="1" 
// // // // //                   max="6"
// // // // //                   onChange={(e) => setMatrixB(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // // //                 />
// // // // //               </div>
// // // // //               <span className="times">×</span>
// // // // //               <div className="input-group">
// // // // //                 <span>Cols</span>
// // // // //                 <input 
// // // // //                   type="number" 
// // // // //                   value={matrixB.cols} 
// // // // //                   min="1" 
// // // // //                   max="6"
// // // // //                   onChange={(e) => setMatrixB(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         <div className={`validation ${isValidMultiplication ? 'valid' : 'invalid'}`}>
// // // // //           {isValidMultiplication ? 
// // // // //             `✓ Valid multiplication: A(${matrixA.rows}×${matrixA.cols}) × B(${matrixB.rows}×${matrixB.cols}) = Result(${matrixA.rows}×${matrixB.cols})` :
// // // // //             `✗ Invalid multiplication: A columns (${matrixA.cols}) must equal B rows (${matrixB.rows})`
// // // // //           }
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="visualization">
// // // // //         <div className="matrices-container">
// // // // //           <div className="matrix-wrapper">
// // // // //             <div className="matrix-label">Matrix A ({matrixA.rows}×{matrixA.cols})</div>
// // // // //             <div 
// // // // //               className="matrix" 
// // // // //               id="matrixA"
// // // // //               style={{
// // // // //                 gridTemplateColumns: `repeat(${matrixA.cols}, 35px)`,
// // // // //                 gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // // //               }}
// // // // //             >
// // // // //               {createMatrix('matrixA', matrixA.rows, matrixA.cols, 'A')}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="operator">×</div>
          
// // // // //           <div className="matrix-wrapper">
// // // // //             <div className="matrix-label">Matrix B ({matrixB.rows}×{matrixB.cols})</div>
// // // // //             <div 
// // // // //               className="matrix" 
// // // // //               id="matrixB"
// // // // //               style={{
// // // // //                 gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // // //                 gridTemplateRows: `repeat(${matrixB.rows}, 35px)`
// // // // //               }}
// // // // //             >
// // // // //               {createMatrix('matrixB', matrixB.rows, matrixB.cols, 'B')}
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="operator">=</div>
          
// // // // //           {isValidMultiplication && (
// // // // //             <div className="matrix-wrapper">
// // // // //               <div className="matrix-label">Result ({matrixA.rows}×{matrixB.cols})</div>
// // // // //               <div 
// // // // //                 className="matrix" 
// // // // //                 id="matrixResult"
// // // // //                 style={{
// // // // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // // //                   gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // // //                 }}
// // // // //               >
// // // // //                 {createMatrix('matrixResult', matrixA.rows, matrixB.cols, 'Result')}
// // // // //               </div>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
        
// // // // //         {isValidMultiplication && (
// // // // //           <div className="interactive-section">
// // // // //             <h3>Click on result cells to see computation pattern</h3>
// // // // //             <div className="matrix-wrapper">
// // // // //               <div className="matrix-label">Interactive Result ({matrixA.rows}×{matrixB.cols})</div>
// // // // //               <div 
// // // // //                 className="matrix"
// // // // //                 style={{
// // // // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 45px)`,
// // // // //                   gridTemplateRows: `repeat(${matrixA.rows}, 45px)`
// // // // //                 }}
// // // // //               >
// // // // //                 {createInteractiveMatrix(matrixA.rows, matrixB.cols)}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
        
// // // // //         <div className="rules">
// // // // //           <h3>Matrix Multiplication Rules:</h3>
// // // // //           <ul>
// // // // //             <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
// // // // //             <li>The result matrix has dimensions: (A rows) × (B columns)</li>
// // // // //             <li>Each cell in the result is computed using one row from A and one column from B</li>
// // // // //             <li>Click on result cells above to see which row and column are used for that computation</li>
// // // // //             <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
// // // // //           </ul>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         * {
// // // // //           box-sizing: border-box;
// // // // //         }
        
// // // // //         .container {
// // // // //           margin: 0;
// // // // //           padding: 20px;
// // // // //           font-family: system-ui, -apple-system, sans-serif;
// // // // //           background-color: #f9fafb;
// // // // //           line-height: 1.6;
// // // // //           max-width: 1200px;
// // // // //           margin: 0 auto;
// // // // //         }
        
// // // // //         .title {
// // // // //           text-align: center;
// // // // //           margin-bottom: 30px;
// // // // //         }
        
// // // // //         .title h1 {
// // // // //           font-size: 2.5rem;
// // // // //           color: #1f2937;
// // // // //           margin-bottom: 15px;
// // // // //         }
        
// // // // //         .title p {
// // // // //           color: #6b7280;
// // // // //           font-size: 1.1rem;
// // // // //           max-width: 600px;
// // // // //           margin: 0 auto;
// // // // //         }
        
// // // // //         .controls {
// // // // //           background: white;
// // // // //           padding: 25px;
// // // // //           border-radius: 10px;
// // // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // // //           margin-bottom: 30px;
// // // // //         }
        
// // // // //         .controls h2 {
// // // // //           font-size: 1.5rem;
// // // // //           margin-bottom: 20px;
// // // // //           color: #1f2937;
// // // // //         }
        
// // // // //         .controls-grid {
// // // // //           display: grid;
// // // // //           grid-template-columns: 1fr 1fr;
// // // // //           gap: 30px;
// // // // //           margin-bottom: 20px;
// // // // //         }
        
// // // // //         .control-group label {
// // // // //           display: block;
// // // // //           font-weight: 600;
// // // // //           margin-bottom: 10px;
// // // // //           color: #374151;
// // // // //         }
        
// // // // //         .dimension-inputs {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           gap: 15px;
// // // // //         }
        
// // // // //         .input-group {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center;
// // // // //         }
        
// // // // //         .input-group span {
// // // // //           font-size: 0.9rem;
// // // // //           color: #6b7280;
// // // // //           margin-bottom: 5px;
// // // // //         }
        
// // // // //         .input-group input {
// // // // //           width: 60px;
// // // // //           padding: 8px;
// // // // //           border: 2px solid #d1d5db;
// // // // //           border-radius: 5px;
// // // // //           font-size: 1rem;
// // // // //           text-align: center;
// // // // //         }
        
// // // // //         .input-group input:focus {
// // // // //           outline: none;
// // // // //           border-color: #3b82f6;
// // // // //         }
        
// // // // //         .times {
// // // // //           font-size: 1.5rem;
// // // // //           color: #6b7280;
// // // // //           font-weight: bold;
// // // // //         }
        
// // // // //         .validation {
// // // // //           padding: 15px;
// // // // //           border-radius: 8px;
// // // // //           font-weight: 600;
// // // // //           text-align: center;
// // // // //         }
        
// // // // //         .validation.valid {
// // // // //           background: #d1fae5;
// // // // //           color: #065f46;
// // // // //           border: 2px solid #10b981;
// // // // //         }
        
// // // // //         .validation.invalid {
// // // // //           background: #fee2e2;
// // // // //           color: #991b1b;
// // // // //           border: 2px solid #ef4444;
// // // // //         }
        
// // // // //         .visualization {
// // // // //           background: white;
// // // // //           padding: 30px;
// // // // //           border-radius: 10px;
// // // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // // //         }
        
// // // // //         .matrices-container {
// // // // //           display: flex;
// // // // //           justify-content: center;
// // // // //           align-items: center;
// // // // //           gap: 40px;
// // // // //           margin-bottom: 40px;
// // // // //           flex-wrap: wrap;
// // // // //         }
        
// // // // //         .matrix-wrapper {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center;
// // // // //         }
        
// // // // //         .matrix-label {
// // // // //           font-weight: 600;
// // // // //           margin-bottom: 10px;
// // // // //           color: #374151;
// // // // //           font-size: 1.1rem;
// // // // //         }
        
// // // // //         .matrix {
// // // // //           display: grid;
// // // // //           gap: 2px;
// // // // //           border: 3px solid #374151;
// // // // //           background: #374151;
// // // // //           padding: 2px;
// // // // //         }
        
// // // // //         .matrix-cell {
// // // // //           width: 35px;
// // // // //           height: 35px;
// // // // //           background: #f9fafb;
// // // // //           border: 1px solid #d1d5db;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           transition: all 0.3s ease;
// // // // //         }
        
// // // // //         .matrix-cell.highlighted {
// // // // //           background: #dbeafe;
// // // // //           border-color: #3b82f6;
// // // // //           box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
// // // // //         }
        
// // // // //         .cell-dot {
// // // // //           width: 8px;
// // // // //           height: 8px;
// // // // //           background: #9ca3af;
// // // // //           border-radius: 50%;
// // // // //         }
        
// // // // //         .operator {
// // // // //           font-size: 3rem;
// // // // //           font-weight: bold;
// // // // //           color: #6b7280;
// // // // //         }
        
// // // // //         .interactive-section {
// // // // //           margin-top: 40px;
// // // // //           text-align: center;
// // // // //         }
        
// // // // //         .interactive-section h3 {
// // // // //           font-size: 1.3rem;
// // // // //           margin-bottom: 20px;
// // // // //           color: #374151;
// // // // //         }
        
// // // // //         .result-cell {
// // // // //           width: 45px;
// // // // //           height: 45px;
// // // // //           background: #dbeafe;
// // // // //           border: 2px solid #3b82f6;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           cursor: pointer;
// // // // //           transition: all 0.2s ease;
// // // // //         }
        
// // // // //         .result-cell:hover {
// // // // //           background: #bfdbfe;
// // // // //           transform: scale(1.05);
// // // // //         }
        
// // // // //         .result-dot {
// // // // //           width: 12px;
// // // // //           height: 12px;
// // // // //           background: #3b82f6;
// // // // //           border-radius: 50%;
// // // // //         }
        
// // // // //         .rules {
// // // // //           margin-top: 30px;
// // // // //           padding: 20px;
// // // // //           background: #f9fafb;
// // // // //           border-radius: 8px;
// // // // //           border-left: 4px solid #3b82f6;
// // // // //         }
        
// // // // //         .rules h3 {
// // // // //           margin-bottom: 15px;
// // // // //           color: #374151;
// // // // //         }
        
// // // // //         .rules ul {
// // // // //           list-style: none;
// // // // //           padding: 0;
// // // // //         }
        
// // // // //         .rules li {
// // // // //           margin-bottom: 10px;
// // // // //           color: #374151;
// // // // //         }
        
// // // // //         .rules li::before {
// // // // //           content: "→ ";
// // // // //           color: #3b82f6;
// // // // //           font-weight: bold;
// // // // //         }
        
// // // // //         @media (max-width: 768px) {
// // // // //           .controls-grid {
// // // // //             grid-template-columns: 1fr;
// // // // //           }
          
// // // // //           .matrices-container {
// // // // //             flex-direction: column;
// // // // //             gap: 20px;
// // // // //           }
          
// // // // //           .operator {
// // // // //             font-size: 2rem;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MatrixMultiplicationOrderVisualizer;


// // // // import React, { useState, useEffect } from 'react';

// // // // const MatrixMultiplicationOrderVisualizer = () => {
// // // //   const [matrixA, setMatrixA] = useState({ rows: 3, cols: 2 });
// // // //   const [matrixB, setMatrixB] = useState({ rows: 2, cols: 4 });
// // // //   const [highlightTimeout, setHighlightTimeout] = useState(null);

// // // //   const isValidMultiplication = matrixA.cols === matrixB.rows;

// // // //   const createMatrix = (containerId, rows, cols, type) => {
// // // //     const cells = [];
// // // //     for (let i = 0; i < rows; i++) {
// // // //       for (let j = 0; j < cols; j++) {
// // // //         cells.push(
// // // //           <div
// // // //             key={`${i}-${j}`}
// // // //             className="matrix-cell"
// // // //             data-row={i}
// // // //             data-col={j}
// // // //             data-type={type}
// // // //           >
// // // //             <div className="cell-dot"></div>
// // // //           </div>
// // // //         );
// // // //       }
// // // //     }
// // // //     return cells;
// // // //   };

// // // //   const createInteractiveMatrix = (rows, cols) => {
// // // //     const cells = [];
// // // //     for (let i = 0; i < rows; i++) {
// // // //       for (let j = 0; j < cols; j++) {
// // // //         cells.push(
// // // //           <div
// // // //             key={`${i}-${j}`}
// // // //             className="result-cell"
// // // //             data-row={i}
// // // //             data-col={j}
// // // //             onClick={() => highlightComputation(i, j)}
// // // //           >
// // // //             <div className="result-dot"></div>
// // // //           </div>
// // // //         );
// // // //       }
// // // //     }
// // // //     return cells;
// // // //   };

// // // //   const clearHighlights = () => {
// // // //     const highlightedCells = document.querySelectorAll('.matrix-cell.highlighted');
// // // //     highlightedCells.forEach(cell => {
// // // //       cell.classList.remove('highlighted');
// // // //     });
// // // //   };

// // // //   const highlightComputation = (row, col) => {
// // // //     clearHighlights();

// // // //     const matrixACells = document.querySelectorAll('#matrixA .matrix-cell');
// // // //     matrixACells.forEach(cell => {
// // // //       if (parseInt(cell.dataset.row) === row) {
// // // //         cell.classList.add('highlighted');
// // // //       }
// // // //     });

// // // //     const matrixBCells = document.querySelectorAll('#matrixB .matrix-cell');
// // // //     matrixBCells.forEach(cell => {
// // // //       if (parseInt(cell.dataset.col) === col) {
// // // //         cell.classList.add('highlighted');
// // // //       }
// // // //     });

// // // //     const resultCells = document.querySelectorAll('#matrixResult .matrix-cell');
// // // //     resultCells.forEach(cell => {
// // // //       if (parseInt(cell.dataset.row) === row && parseInt(cell.dataset.col) === col) {
// // // //         cell.classList.add('highlighted');
// // // //       }
// // // //     });

// // // //     if (highlightTimeout) clearTimeout(highlightTimeout);
// // // //     const timeout = setTimeout(clearHighlights, 2000);
// // // //     setHighlightTimeout(timeout);
// // // //   };

// // // //   useEffect(() => {
// // // //     return () => {
// // // //       if (highlightTimeout) {
// // // //         clearTimeout(highlightTimeout);
// // // //       }
// // // //     };
// // // //   }, [highlightTimeout]);

// // // //   return (
// // // //     <>
// // // //       <div className="container">
// // // //         <div className="title">
// // // //           <h1>Matrix Multiplication Visualizer</h1>
// // // //           <p>Explore how matrix dimensions work in multiplication. Adjust the matrix sizes and see how dimensions must align for valid multiplication.</p>
// // // //         </div>

// // // //         <div className="controls">
// // // //           <h2>Matrix Dimensions</h2>
// // // //           <div className="controls-grid">
// // // //             <div className="control-group">
// // // //               <label>Matrix A Size</label>
// // // //               <div className="dimension-inputs">
// // // //                 <div className="input-group">
// // // //                   <span>Rows</span>
// // // //                   <input 
// // // //                     type="number" 
// // // //                     value={matrixA.rows} 
// // // //                     min="1" 
// // // //                     max="6"
// // // //                     onChange={(e) => setMatrixA(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // //                   />
// // // //                 </div>
// // // //                 <span className="times">×</span>
// // // //                 <div className="input-group">
// // // //                   <span>Cols</span>
// // // //                   <input 
// // // //                     type="number" 
// // // //                     value={matrixA.cols} 
// // // //                     min="1" 
// // // //                     max="6"
// // // //                     onChange={(e) => setMatrixA(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="control-group">
// // // //               <label>Matrix B Size</label>
// // // //               <div className="dimension-inputs">
// // // //                 <div className="input-group">
// // // //                   <span>Rows</span>
// // // //                   <input 
// // // //                     type="number" 
// // // //                     value={matrixB.rows} 
// // // //                     min="1" 
// // // //                     max="6"
// // // //                     onChange={(e) => setMatrixB(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // // //                   />
// // // //                 </div>
// // // //                 <span className="times">×</span>
// // // //                 <div className="input-group">
// // // //                   <span>Cols</span>
// // // //                   <input 
// // // //                     type="number" 
// // // //                     value={matrixB.cols} 
// // // //                     min="1" 
// // // //                     max="6"
// // // //                     onChange={(e) => setMatrixB(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className={`validation ${isValidMultiplication ? 'valid' : 'invalid'}`}>
// // // //             {isValidMultiplication ? 
// // // //               `✓ Valid multiplication: A(${matrixA.rows}×${matrixA.cols}) × B(${matrixB.rows}×${matrixB.cols}) = Result(${matrixA.rows}×${matrixB.cols})` :
// // // //               `✗ Invalid multiplication: A columns (${matrixA.cols}) must equal B rows (${matrixB.rows})`
// // // //             }
// // // //           </div>
// // // //         </div>

// // // //         <div className="visualization">
// // // //           <div className="matrices-container">
// // // //             <div className="matrix-wrapper">
// // // //               <div className="matrix-label">Matrix A ({matrixA.rows}×{matrixA.cols})</div>
// // // //               <div 
// // // //                 className="matrix" 
// // // //                 id="matrixA"
// // // //                 style={{
// // // //                   gridTemplateColumns: `repeat(${matrixA.cols}, 35px)`,
// // // //                   gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // //                 }}
// // // //               >
// // // //                 {createMatrix('matrixA', matrixA.rows, matrixA.cols, 'A')}
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="operator">×</div>
            
// // // //             <div className="matrix-wrapper">
// // // //               <div className="matrix-label">Matrix B ({matrixB.rows}×{matrixB.cols})</div>
// // // //               <div 
// // // //                 className="matrix" 
// // // //                 id="matrixB"
// // // //                 style={{
// // // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // //                   gridTemplateRows: `repeat(${matrixB.rows}, 35px)`
// // // //                 }}
// // // //               >
// // // //                 {createMatrix('matrixB', matrixB.rows, matrixB.cols, 'B')}
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="operator">=</div>
            
// // // //             {isValidMultiplication && (
// // // //               <div className="matrix-wrapper" id="resultWrapper">
// // // //                 <div className="matrix-label">Result ({matrixA.rows}×{matrixB.cols})</div>
// // // //                 <div 
// // // //                   className="matrix" 
// // // //                   id="matrixResult"
// // // //                   style={{
// // // //                     gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // // //                     gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // // //                   }}
// // // //                 >
// // // //                   {createMatrix('matrixResult', matrixA.rows, matrixB.cols, 'Result')}
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>
          
// // // //           {isValidMultiplication && (
// // // //             <div className="interactive-section" id="interactiveSection">
// // // //               <h3>Click on result cells to see computation pattern</h3>
// // // //               <div className="matrix-wrapper">
// // // //                 <div className="matrix-label">Interactive Result ({matrixA.rows}×{matrixB.cols})</div>
// // // //                 <div 
// // // //                   className="matrix" 
// // // //                   id="interactiveMatrix"
// // // //                   style={{
// // // //                     gridTemplateColumns: `repeat(${matrixB.cols}, 45px)`,
// // // //                     gridTemplateRows: `repeat(${matrixA.rows}, 45px)`
// // // //                   }}
// // // //                 >
// // // //                   {createInteractiveMatrix(matrixA.rows, matrixB.cols)}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}
          
// // // //           <div className="rules">
// // // //             <h3>Matrix Multiplication Rules:</h3>
// // // //             <ul>
// // // //               <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
// // // //               <li>The result matrix has dimensions: (A rows) × (B columns)</li>
// // // //               <li>Each cell in the result is computed using one row from A and one column from B</li>
// // // //               <li>Click on result cells above to see which row and column are used for that computation</li>
// // // //               <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         * {
// // // //           box-sizing: border-box;
// // // //         }
        
// // // //         .container {
// // // //           margin: 0;
// // // //           padding: 20px;
// // // //           font-family: system-ui, -apple-system, sans-serif;
// // // //           background-color: #f9fafb;
// // // //           line-height: 1.6;
// // // //           max-width: 1200px;
// // // //           margin: 0 auto;
// // // //         }
        
// // // //         .title {
// // // //           text-align: center;
// // // //           margin-bottom: 30px;
// // // //         }
        
// // // //         .title h1 {
// // // //           font-size: 2.5rem;
// // // //           color: #1f2937;
// // // //           margin-bottom: 15px;
// // // //         }
        
// // // //         .title p {
// // // //           color: #6b7280;
// // // //           font-size: 1.1rem;
// // // //           max-width: 600px;
// // // //           margin: 0 auto;
// // // //         }
        
// // // //         .controls {
// // // //           background: white;
// // // //           padding: 25px;
// // // //           border-radius: 10px;
// // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // //           margin-bottom: 30px;
// // // //         }
        
// // // //         .controls h2 {
// // // //           font-size: 1.5rem;
// // // //           margin-bottom: 20px;
// // // //           color: #1f2937;
// // // //         }
        
// // // //         .controls-grid {
// // // //           display: grid;
// // // //           grid-template-columns: 1fr 1fr;
// // // //           gap: 30px;
// // // //           margin-bottom: 20px;
// // // //         }
        
// // // //         .control-group label {
// // // //           display: block;
// // // //           font-weight: 600;
// // // //           margin-bottom: 10px;
// // // //           color: #374151;
// // // //         }
        
// // // //         .dimension-inputs {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           gap: 15px;
// // // //         }
        
// // // //         .input-group {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //         }
        
// // // //         .input-group span {
// // // //           font-size: 0.9rem;
// // // //           color: #6b7280;
// // // //           margin-bottom: 5px;
// // // //         }
        
// // // //         .input-group input {
// // // //           width: 60px;
// // // //           padding: 8px;
// // // //           border: 2px solid #d1d5db;
// // // //           border-radius: 5px;
// // // //           font-size: 1rem;
// // // //           text-align: center;
// // // //         }
        
// // // //         .input-group input:focus {
// // // //           outline: none;
// // // //           border-color: #3b82f6;
// // // //         }
        
// // // //         .times {
// // // //           font-size: 1.5rem;
// // // //           color: #6b7280;
// // // //           font-weight: bold;
// // // //         }
        
// // // //         .validation {
// // // //           padding: 15px;
// // // //           border-radius: 8px;
// // // //           font-weight: 600;
// // // //           text-align: center;
// // // //         }
        
// // // //         .validation.valid {
// // // //           background: #d1fae5;
// // // //           color: #065f46;
// // // //           border: 2px solid #10b981;
// // // //         }
        
// // // //         .validation.invalid {
// // // //           background: #fee2e2;
// // // //           color: #991b1b;
// // // //           border: 2px solid #ef4444;
// // // //         }
        
// // // //         .visualization {
// // // //           background: white;
// // // //           padding: 30px;
// // // //           border-radius: 10px;
// // // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // // //         }
        
// // // //         .matrices-container {
// // // //           display: flex;
// // // //           justify-content: center;
// // // //           align-items: center;
// // // //           gap: 40px;
// // // //           margin-bottom: 40px;
// // // //           flex-wrap: wrap;
// // // //         }
        
// // // //         .matrix-wrapper {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //         }
        
// // // //         .matrix-label {
// // // //           font-weight: 600;
// // // //           margin-bottom: 10px;
// // // //           color: #374151;
// // // //           font-size: 1.1rem;
// // // //         }
        
// // // //         .matrix {
// // // //           display: grid;
// // // //           gap: 2px;
// // // //           border: 3px solid #374151;
// // // //           background: #374151;
// // // //           padding: 2px;
// // // //         }
        
// // // //         .matrix-cell {
// // // //           width: 35px;
// // // //           height: 35px;
// // // //           background: #f9fafb;
// // // //           border: 1px solid #d1d5db;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           transition: all 0.3s ease;
// // // //         }
        
// // // //         .matrix-cell.highlighted {
// // // //           background: #dbeafe;
// // // //           border-color: #3b82f6;
// // // //           box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
// // // //         }
        
// // // //         .cell-dot {
// // // //           width: 8px;
// // // //           height: 8px;
// // // //           background: #9ca3af;
// // // //           border-radius: 50%;
// // // //         }
        
// // // //         .operator {
// // // //           font-size: 3rem;
// // // //           font-weight: bold;
// // // //           color: #6b7280;
// // // //         }
        
// // // //         .interactive-section {
// // // //           margin-top: 40px;
// // // //           text-align: center;
// // // //         }
        
// // // //         .interactive-section h3 {
// // // //           font-size: 1.3rem;
// // // //           margin-bottom: 20px;
// // // //           color: #374151;
// // // //         }
        
// // // //         .result-cell {
// // // //           width: 45px;
// // // //           height: 45px;
// // // //           background: #dbeafe;
// // // //           border: 2px solid #3b82f6;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           cursor: pointer;
// // // //           transition: all 0.2s ease;
// // // //         }
        
// // // //         .result-cell:hover {
// // // //           background: #bfdbfe;
// // // //           transform: scale(1.05);
// // // //         }
        
// // // //         .result-dot {
// // // //           width: 12px;
// // // //           height: 12px;
// // // //           background: #3b82f6;
// // // //           border-radius: 50%;
// // // //         }
        
// // // //         .rules {
// // // //           margin-top: 30px;
// // // //           padding: 20px;
// // // //           background: #f9fafb;
// // // //           border-radius: 8px;
// // // //           border-left: 4px solid #3b82f6;
// // // //         }
        
// // // //         .rules h3 {
// // // //           margin-bottom: 15px;
// // // //           color: #374151;
// // // //         }
        
// // // //         .rules ul {
// // // //           list-style: none;
// // // //           padding: 0;
// // // //         }
        
// // // //         .rules li {
// // // //           margin-bottom: 10px;
// // // //           color: #374151;
// // // //         }
        
// // // //         .rules li::before {
// // // //           content: "→ ";
// // // //           color: #3b82f6;
// // // //           font-weight: bold;
// // // //         }
        
// // // //         @media (max-width: 768px) {
// // // //           .controls-grid {
// // // //             grid-template-columns: 1fr;
// // // //           }
          
// // // //           .matrices-container {
// // // //             flex-direction: column;
// // // //             gap: 20px;
// // // //           }
          
// // // //           .operator {
// // // //             font-size: 2rem;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // };

// // // // export default MatrixMultiplicationOrderVisualizer;


// // // import React, { useState, useEffect } from 'react';

// // // const MatrixMultiplicationOrderVisualizer = () => {
// // //   const [matrixA, setMatrixA] = useState({ rows: 3, cols: 2 });
// // //   const [matrixB, setMatrixB] = useState({ rows: 2, cols: 4 });
// // //   const [highlightTimeout, setHighlightTimeout] = useState(null);

// // //   const isValidMultiplication = matrixA.cols === matrixB.rows;

// // //   const createMatrix = (containerId, rows, cols, type) => {
// // //     const cells = [];
// // //     for (let i = 0; i < rows; i++) {
// // //       for (let j = 0; j < cols; j++) {
// // //         cells.push(
// // //           <div
// // //             key={`${i}-${j}`}
// // //             className="matrix-cell"
// // //             data-row={i}
// // //             data-col={j}
// // //             data-type={type}
// // //           >
// // //             <div className="cell-dot"></div>
// // //           </div>
// // //         );
// // //       }
// // //     }
// // //     return cells;
// // //   };

// // //   const createInteractiveMatrix = (rows, cols) => {
// // //     const cells = [];
// // //     for (let i = 0; i < rows; i++) {
// // //       for (let j = 0; j < cols; j++) {
// // //         cells.push(
// // //           <div
// // //             key={`${i}-${j}`}
// // //             className="result-cell"
// // //             data-row={i}
// // //             data-col={j}
// // //             onClick={() => highlightComputation(i, j)}
// // //           >
// // //             <div className="result-dot"></div>
// // //           </div>
// // //         );
// // //       }
// // //     }
// // //     return cells;
// // //   };

// // //   const clearHighlights = () => {
// // //     const highlightedCells = document.querySelectorAll('.matrix-cell.highlighted');
// // //     highlightedCells.forEach(cell => {
// // //       cell.classList.remove('highlighted');
// // //     });
// // //   };

// // //   const highlightComputation = (row, col) => {
// // //     clearHighlights();

// // //     const matrixACells = document.querySelectorAll('#matrixA .matrix-cell');
// // //     matrixACells.forEach(cell => {
// // //       if (parseInt(cell.dataset.row) === row) {
// // //         cell.classList.add('highlighted');
// // //       }
// // //     });

// // //     const matrixBCells = document.querySelectorAll('#matrixB .matrix-cell');
// // //     matrixBCells.forEach(cell => {
// // //       if (parseInt(cell.dataset.col) === col) {
// // //         cell.classList.add('highlighted');
// // //       }
// // //     });

// // //     const resultCells = document.querySelectorAll('#matrixResult .matrix-cell');
// // //     resultCells.forEach(cell => {
// // //       if (parseInt(cell.dataset.row) === row && parseInt(cell.dataset.col) === col) {
// // //         cell.classList.add('highlighted');
// // //       }
// // //     });

// // //     if (highlightTimeout) clearTimeout(highlightTimeout);
// // //     const timeout = setTimeout(clearHighlights, 2000);
// // //     setHighlightTimeout(timeout);
// // //   };

// // //   useEffect(() => {
// // //     return () => {
// // //       if (highlightTimeout) {
// // //         clearTimeout(highlightTimeout);
// // //       }
// // //     };
// // //   }, [highlightTimeout]);

// // //   return (
// // //     <>
// // //       <div className="container">
// // //         <div className="title">
// // //           <h1>Matrix Multiplication Visualizer</h1>
// // //           <p>Explore how matrix dimensions work in multiplication. Adjust the matrix sizes and see how dimensions must align for valid multiplication.</p>
// // //         </div>

// // //         <div className="controls">
// // //           <h2>Matrix Dimensions</h2>
// // //           <div className="controls-grid">
// // //             <div className="control-group">
// // //               <label>Matrix A Size</label>
// // //               <div className="dimension-inputs">
// // //                 <div className="input-group">
// // //                   <span>Rows</span>
// // //                   <input 
// // //                     type="number" 
// // //                     value={matrixA.rows} 
// // //                     min="1" 
// // //                     max="6"
// // //                     onChange={(e) => setMatrixA(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // //                   />
// // //                 </div>
// // //                 <span className="times">×</span>
// // //                 <div className="input-group">
// // //                   <span>Cols</span>
// // //                   <input 
// // //                     type="number" 
// // //                     value={matrixA.cols} 
// // //                     min="1" 
// // //                     max="6"
// // //                     onChange={(e) => setMatrixA(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             <div className="control-group">
// // //               <label>Matrix B Size</label>
// // //               <div className="dimension-inputs">
// // //                 <div className="input-group">
// // //                   <span>Rows</span>
// // //                   <input 
// // //                     type="number" 
// // //                     value={matrixB.rows} 
// // //                     min="1" 
// // //                     max="6"
// // //                     onChange={(e) => setMatrixB(prev => ({...prev, rows: parseInt(e.target.value) || 1}))}
// // //                   />
// // //                 </div>
// // //                 <span className="times">×</span>
// // //                 <div className="input-group">
// // //                   <span>Cols</span>
// // //                   <input 
// // //                     type="number" 
// // //                     value={matrixB.cols} 
// // //                     min="1" 
// // //                     max="6"
// // //                     onChange={(e) => setMatrixB(prev => ({...prev, cols: parseInt(e.target.value) || 1}))}
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
          
// // //           <div className={`validation ${isValidMultiplication ? 'valid' : 'invalid'}`}>
// // //             {isValidMultiplication ? 
// // //               `✓ Valid multiplication: A(${matrixA.rows}×${matrixA.cols}) × B(${matrixB.rows}×${matrixB.cols}) = Result(${matrixA.rows}×${matrixB.cols})` :
// // //               `✗ Invalid multiplication: A columns (${matrixA.cols}) must equal B rows (${matrixB.rows})`
// // //             }
// // //           </div>
// // //         </div>

// // //         <div className="visualization">
// // //           <div className="matrices-container">
// // //             <div className="matrix-wrapper">
// // //               <div className="matrix-label">Matrix A ({matrixA.rows}×{matrixA.cols})</div>
// // //               <div 
// // //                 className="matrix" 
// // //                 id="matrixA"
// // //                 style={{
// // //                   gridTemplateColumns: `repeat(${matrixA.cols}, 35px)`,
// // //                   gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // //                 }}
// // //               >
// // //                 {createMatrix('matrixA', matrixA.rows, matrixA.cols, 'A')}
// // //               </div>
// // //             </div>
            
// // //             <div className="operator">×</div>
            
// // //             <div className="matrix-wrapper">
// // //               <div className="matrix-label">Matrix B ({matrixB.rows}×{matrixB.cols})</div>
// // //               <div 
// // //                 className="matrix" 
// // //                 id="matrixB"
// // //                 style={{
// // //                   gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // //                   gridTemplateRows: `repeat(${matrixB.rows}, 35px)`
// // //                 }}
// // //               >
// // //                 {createMatrix('matrixB', matrixB.rows, matrixB.cols, 'B')}
// // //               </div>
// // //             </div>
            
// // //             <div className="operator">=</div>
            
// // //             {isValidMultiplication && (
// // //               <div className="matrix-wrapper" id="resultWrapper">
// // //                 <div className="matrix-label">Result ({matrixA.rows}×{matrixB.cols})</div>
// // //                 <div 
// // //                   className="matrix" 
// // //                   id="matrixResult"
// // //                   style={{
// // //                     gridTemplateColumns: `repeat(${matrixB.cols}, 35px)`,
// // //                     gridTemplateRows: `repeat(${matrixA.rows}, 35px)`
// // //                   }}
// // //                 >
// // //                   {createMatrix('matrixResult', matrixA.rows, matrixB.cols, 'Result')}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
          
// // //           {isValidMultiplication && (
// // //             <div className="interactive-section" id="interactiveSection">
// // //               <h3>Click on result cells to see computation pattern</h3>
// // //               <div className="matrix-wrapper">
// // //                 <div className="matrix-label">Interactive Result ({matrixA.rows}×{matrixB.cols})</div>
// // //                 <div 
// // //                   className="matrix" 
// // //                   id="interactiveMatrix"
// // //                   style={{
// // //                     gridTemplateColumns: `repeat(${matrixB.cols}, 45px)`,
// // //                     gridTemplateRows: `repeat(${matrixA.rows}, 45px)`
// // //                   }}
// // //                 >
// // //                   {createInteractiveMatrix(matrixA.rows, matrixB.cols)}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
          
// // //           <div className="rules">
// // //             <h3>Matrix Multiplication Rules:</h3>
// // //             <ul>
// // //               <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
// // //               <li>The result matrix has dimensions: (A rows) × (B columns)</li>
// // //               <li>Each cell in the result is computed using one row from A and one column from B</li>
// // //               <li>Click on result cells above to see which row and column are used for that computation</li>
// // //               <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         * {
// // //           box-sizing: border-box;
// // //         }
        
// // //         .container {
// // //           margin: 0;
// // //           padding: 20px;
// // //           font-family: system-ui, -apple-system, sans-serif;
// // //           background-color: #f9fafb;
// // //           line-height: 1.6;
// // //           max-width: 1200px;
// // //           margin: 0 auto;
// // //         }
        
// // //         .title {
// // //           text-align: center;
// // //           margin-bottom: 30px;
// // //         }
        
// // //         .title h1 {
// // //           font-size: 2.5rem;
// // //           color: #1f2937;
// // //           margin-bottom: 15px;
// // //         }
        
// // //         .title p {
// // //           color: #6b7280;
// // //           font-size: 1.1rem;
// // //           max-width: 600px;
// // //           margin: 0 auto;
// // //         }
        
// // //         .controls {
// // //           background: white;
// // //           padding: 25px;
// // //           border-radius: 10px;
// // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // //           margin-bottom: 30px;
// // //         }
        
// // //         .controls h2 {
// // //           font-size: 1.5rem;
// // //           margin-bottom: 20px;
// // //           color: #1f2937;
// // //         }
        
// // //         .controls-grid {
// // //           display: grid;
// // //           grid-template-columns: 1fr 1fr;
// // //           gap: 30px;
// // //           margin-bottom: 20px;
// // //         }
        
// // //         .control-group label {
// // //           display: block;
// // //           font-weight: 600;
// // //           margin-bottom: 10px;
// // //           color: #374151;
// // //         }
        
// // //         .dimension-inputs {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 15px;
// // //         }
        
// // //         .input-group {
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //         }
        
// // //         .input-group span {
// // //           font-size: 0.9rem;
// // //           color: #6b7280;
// // //           margin-bottom: 5px;
// // //         }
        
// // //         .input-group input {
// // //           width: 60px;
// // //           padding: 8px;
// // //           border: 2px solid #d1d5db;
// // //           border-radius: 5px;
// // //           font-size: 1rem;
// // //           text-align: center;
// // //         }
        
// // //         .input-group input:focus {
// // //           outline: none;
// // //           border-color: #3b82f6;
// // //         }
        
// // //         .times {
// // //           font-size: 1.5rem;
// // //           color: #6b7280;
// // //           font-weight: bold;
// // //         }
        
// // //         .validation {
// // //           padding: 15px;
// // //           border-radius: 8px;
// // //           font-weight: 600;
// // //           text-align: center;
// // //         }
        
// // //         .validation.valid {
// // //           background: #d1fae5;
// // //           color: #065f46;
// // //           border: 2px solid #10b981;
// // //         }
        
// // //         .validation.invalid {
// // //           background: #fee2e2;
// // //           color: #991b1b;
// // //           border: 2px solid #ef4444;
// // //         }
        
// // //         .visualization {
// // //           background: white;
// // //           padding: 30px;
// // //           border-radius: 10px;
// // //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// // //         }
        
// // //         .matrices-container {
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           gap: 40px;
// // //           margin-bottom: 40px;
// // //           flex-wrap: wrap;
// // //         }
        
// // //         .matrix-wrapper {
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //         }
        
// // //         .matrix-label {
// // //           font-weight: 600;
// // //           margin-bottom: 10px;
// // //           color: #374151;
// // //           font-size: 1.1rem;
// // //         }
        
// // //         .matrix {
// // //           display: grid;
// // //           gap: 2px;
// // //           border: 3px solid #374151;
// // //           background: #374151;
// // //           padding: 2px;
// // //         }
        
// // //         .matrix-cell {
// // //           width: 35px;
// // //           height: 35px;
// // //           background: white;
// // //           border: 1px solid #374151;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           transition: all 0.3s ease;
// // //         }
        
// // //         .matrix-cell.highlighted {
// // //           background: #dbeafe;
// // //           border-color: #3b82f6;
// // //           box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
// // //         }
        
// // //         .cell-dot {
// // //           width: 8px;
// // //           height: 8px;
// // //           background: #9ca3af;
// // //           border-radius: 50%;
// // //         }
        
// // //         .operator {
// // //           font-size: 3rem;
// // //           font-weight: bold;
// // //           color: #6b7280;
// // //         }
        
// // //         .interactive-section {
// // //           margin-top: 40px;
// // //           text-align: center;
// // //         }
        
// // //         .interactive-section h3 {
// // //           font-size: 1.3rem;
// // //           margin-bottom: 20px;
// // //           color: #374151;
// // //         }
        
// // //         .result-cell {
// // //           width: 45px;
// // //           height: 45px;
// // //           background: #dbeafe;
// // //           border: 2px solid #3b82f6;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           cursor: pointer;
// // //           transition: all 0.2s ease;
// // //         }
        
// // //         .result-cell:hover {
// // //           background: #bfdbfe;
// // //           transform: scale(1.05);
// // //         }
        
// // //         .result-dot {
// // //           width: 12px;
// // //           height: 12px;
// // //           background: #3b82f6;
// // //           border-radius: 50%;
// // //         }
        
// // //         .rules {
// // //           margin-top: 30px;
// // //           padding: 20px;
// // //           background: #f9fafb;
// // //           border-radius: 8px;
// // //           border-left: 4px solid #3b82f6;
// // //         }
        
// // //         .rules h3 {
// // //           margin-bottom: 15px;
// // //           color: #374151;
// // //         }
        
// // //         .rules ul {
// // //           list-style: none;
// // //           padding: 0;
// // //         }
        
// // //         .rules li {
// // //           margin-bottom: 10px;
// // //           color: #374151;
// // //         }
        
// // //         .rules li::before {
// // //           content: "→ ";
// // //           color: #3b82f6;
// // //           font-weight: bold;
// // //         }
        
// // //         @media (max-width: 768px) {
// // //           .controls-grid {
// // //             grid-template-columns: 1fr;
// // //           }
          
// // //           .matrices-container {
// // //             flex-direction: column;
// // //             gap: 20px;
// // //           }
          
// // //           .operator {
// // //             font-size: 2rem;
// // //           }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // export default MatrixMultiplicationOrderVisualizer;


// // 'use client';

// // import { useState, useEffect } from 'react';

// // const MatrixMultiplicationOrderVisualizer = () => {
// //   const [aRows, setARows] = useState(3);
// //   const [aCols, setACols] = useState(2);
// //   const [bRows, setBRows] = useState(2);
// //   const [bCols, setBCols] = useState(4);
// //   const [highlightTimeout, setHighlightTimeout] = useState(null);

// //   const isValid = aCols === bRows;

// //   const clearHighlights = () => {
// //     const highlightedCells = document.querySelectorAll('.matrix-cell.highlighted');
// //     highlightedCells.forEach(cell => {
// //       cell.classList.remove('highlighted');
// //     });
// //   };

// //   const highlightComputation = (row, col) => {
// //     clearHighlights();
    
// //     // Highlight row in matrix A
// //     const matrixACells = document.querySelectorAll('[data-matrix="A"]');
// //     matrixACells.forEach(cell => {
// //       if (parseInt(cell.dataset.row) === row) {
// //         cell.classList.add('highlighted');
// //       }
// //     });
    
// //     // Highlight column in matrix B
// //     const matrixBCells = document.querySelectorAll('[data-matrix="B"]');
// //     matrixBCells.forEach(cell => {
// //       if (parseInt(cell.dataset.col) === col) {
// //         cell.classList.add('highlighted');
// //       }
// //     });
    
// //     // Highlight result cell
// //     const resultCells = document.querySelectorAll('[data-matrix="Result"]');
// //     resultCells.forEach(cell => {
// //       if (parseInt(cell.dataset.row) === row && parseInt(cell.dataset.col) === col) {
// //         cell.classList.add('highlighted');
// //       }
// //     });
    
// //     // Clear highlights after 2 seconds
// //     if (highlightTimeout) clearTimeout(highlightTimeout);
// //     const timeout = setTimeout(clearHighlights, 2000);
// //     setHighlightTimeout(timeout);
// //   };

// //   const createMatrix = (rows, cols, type) => {
// //     const cells = [];
// //     for (let i = 0; i < rows; i++) {
// //       for (let j = 0; j < cols; j++) {
// //         cells.push(
// //           <div
// //             key={`${type}-${i}-${j}`}
// //             className="matrix-cell"
// //             data-row={i}
// //             data-col={j}
// //             data-matrix={type}
// //           >
// //             <div className="cell-dot"></div>
// //           </div>
// //         );
// //       }
// //     }
// //     return cells;
// //   };

// //   const createInteractiveMatrix = (rows, cols) => {
// //     const cells = [];
// //     for (let i = 0; i < rows; i++) {
// //       for (let j = 0; j < cols; j++) {
// //         cells.push(
// //           <div
// //             key={`interactive-${i}-${j}`}
// //             className="result-cell"
// //             data-row={i}
// //             data-col={j}
// //             onClick={() => highlightComputation(i, j)}
// //           >
// //             <div className="result-dot"></div>
// //           </div>
// //         );
// //       }
// //     }
// //     return cells;
// //   };

// //   useEffect(() => {
// //     return () => {
// //       if (highlightTimeout) {
// //         clearTimeout(highlightTimeout);
// //       }
// //     };
// //   }, [highlightTimeout]);

// //   return (
// //     <>
// //       <style jsx>{`
// //         * {
// //           box-sizing: border-box;
// //         }
        
// //         .matrix-visualizer {
// //           margin: 0;
// //           padding: 20px;
// //           font-family: system-ui, -apple-system, sans-serif;
// //           background-color: #f9fafb;
// //           line-height: 1.6;
// //         }
        
// //         .container {
// //           max-width: 1200px;
// //           margin: 0 auto;
// //         }
        
// //         .title {
// //           text-align: center;
// //           margin-bottom: 30px;
// //         }
        
// //         .title h1 {
// //           font-size: 2.5rem;
// //           color: #1f2937;
// //           margin-bottom: 15px;
// //         }
        
// //         .title p {
// //           color: #6b7280;
// //           font-size: 1.1rem;
// //           max-width: 600px;
// //           margin: 0 auto;
// //         }
        
// //         .controls {
// //           background: white;
// //           padding: 25px;
// //           border-radius: 10px;
// //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// //           margin-bottom: 30px;
// //         }
        
// //         .controls h2 {
// //           font-size: 1.5rem;
// //           margin-bottom: 20px;
// //           color: #1f2937;
// //         }
        
// //         .controls-grid {
// //           display: grid;
// //           grid-template-columns: 1fr 1fr;
// //           gap: 30px;
// //           margin-bottom: 20px;
// //         }
        
// //         .control-group label {
// //           display: block;
// //           font-weight: 600;
// //           margin-bottom: 10px;
// //           color: #374151;
// //         }
        
// //         .dimension-inputs {
// //           display: flex;
// //           align-items: center;
// //           gap: 15px;
// //         }
        
// //         .input-group {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //         }
        
// //         .input-group span {
// //           font-size: 0.9rem;
// //           color: #6b7280;
// //           margin-bottom: 5px;
// //         }
        
// //         .input-group input {
// //           width: 60px;
// //           padding: 8px;
// //           border: 2px solid #d1d5db;
// //           border-radius: 5px;
// //           font-size: 1rem;
// //           text-align: center;
// //         }
        
// //         .input-group input:focus {
// //           outline: none;
// //           border-color: #3b82f6;
// //         }
        
// //         .times {
// //           font-size: 1.5rem;
// //           color: #6b7280;
// //           font-weight: bold;
// //         }
        
// //         .validation {
// //           padding: 15px;
// //           border-radius: 8px;
// //           font-weight: 600;
// //           text-align: center;
// //         }
        
// //         .validation.valid {
// //           background: #d1fae5;
// //           color: #065f46;
// //           border: 2px solid #10b981;
// //         }
        
// //         .validation.invalid {
// //           background: #fee2e2;
// //           color: #991b1b;
// //           border: 2px solid #ef4444;
// //         }
        
// //         .visualization {
// //           background: white;
// //           padding: 30px;
// //           border-radius: 10px;
// //           box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// //         }
        
// //         .matrices-container {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           gap: 40px;
// //           margin-bottom: 40px;
// //           flex-wrap: wrap;
// //         }
        
// //         .matrix-wrapper {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //         }
        
// //         .matrix-label {
// //           font-weight: 600;
// //           margin-bottom: 10px;
// //           color: #374151;
// //           font-size: 1.1rem;
// //         }
        
// //         .matrix {
// //           display: grid;
// //           gap: 2px;
// //           border: 3px solid #374151;
         
// //           padding: 2px;
// //         }
        
// //         .matrix-cell {
// //           width: 35px;
// //           height: 35px;
// //           background: #f9fafb;
// //           border: 1px solid #d1d5db;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           transition: all 0.3s ease;
// //         }
        
// //         .matrix-cell.highlighted {
// //           background: #dbeafe !important;
// //           border-color: #3b82f6 !important;
// //           box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
// //         }
        
// //         .cell-dot {
// //           width: 8px;
// //           height: 8px;
// //           background: #9ca3af;
// //           border-radius: 50%;
// //         }
        
// //         .operator {
// //           font-size: 3rem;
// //           font-weight: bold;
// //           color: #6b7280;
// //         }
        
// //         .interactive-section {
// //           margin-top: 40px;
// //           text-align: center;
// //         }
        
// //         .interactive-section h3 {
// //           font-size: 1.3rem;
// //           margin-bottom: 20px;
// //           color: #374151;
// //         }
        
// //         .result-cell {
// //           width: 45px;
// //           height: 45px;
// //           background: #dbeafe;
// //           border: 2px solid #3b82f6;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           cursor: pointer;
// //           transition: all 0.2s ease;
// //         }
        
// //         .result-cell:hover {
// //           background: #bfdbfe;
// //           transform: scale(1.05);
// //         }
        
// //         .result-dot {
// //           width: 12px;
// //           height: 12px;
// //           background: #3b82f6;
// //           border-radius: 50%;
// //         }
        
// //         .rules {
// //           margin-top: 30px;
// //           padding: 20px;
// //           background: #f9fafb;
// //           border-radius: 8px;
// //           border-left: 4px solid #3b82f6;
// //         }
        
// //         .rules h3 {
// //           margin-bottom: 15px;
// //           color: #374151;
// //         }
        
// //         .rules ul {
// //           list-style: none;
// //           padding: 0;
// //         }
        
// //         .rules li {
// //           margin-bottom: 10px;
// //           color: #374151;
// //         }
        
// //         .rules li::before {
// //           content: "→ ";
// //           color: #3b82f6;
// //           font-weight: bold;
// //         }
        
// //         @media (max-width: 768px) {
// //           .controls-grid {
// //             grid-template-columns: 1fr;
// //           }
          
// //           .matrices-container {
// //             flex-direction: column;
// //             gap: 20px;
// //           }
          
// //           .operator {
// //             font-size: 2rem;
// //           }
// //         }
// //       `}</style>

// //       <div className="matrix-visualizer">
// //         <div className="container">
// //           <div className="title">
// //             <h1>Matrix Multiplication Visualizer</h1>
// //             <p>Explore how matrix dimensions work in multiplication. Adjust the matrix sizes and see how dimensions must align for valid multiplication.</p>
// //           </div>

// //           <div className="controls">
// //             <h2>Matrix Dimensions</h2>
// //             <div className="controls-grid">
// //               <div className="control-group">
// //                 <label>Matrix A Size</label>
// //                 <div className="dimension-inputs">
// //                   <div className="input-group">
// //                     <span>Rows</span>
// //                     <input 
// //                       type="number" 
// //                       value={aRows} 
// //                       min="1" 
// //                       max="6"
// //                       onChange={(e) => setARows(parseInt(e.target.value))}
// //                     />
// //                   </div>
// //                   <span className="times">×</span>
// //                   <div className="input-group">
// //                     <span>Cols</span>
// //                     <input 
// //                       type="number" 
// //                       value={aCols} 
// //                       min="1" 
// //                       max="6"
// //                       onChange={(e) => setACols(parseInt(e.target.value))}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="control-group">
// //                 <label>Matrix B Size</label>
// //                 <div className="dimension-inputs">
// //                   <div className="input-group">
// //                     <span>Rows</span>
// //                     <input 
// //                       type="number" 
// //                       value={bRows} 
// //                       min="1" 
// //                       max="6"
// //                       onChange={(e) => setBRows(parseInt(e.target.value))}
// //                     />
// //                   </div>
// //                   <span className="times">×</span>
// //                   <div className="input-group">
// //                     <span>Cols</span>
// //                     <input 
// //                       type="number" 
// //                       value={bCols} 
// //                       min="1" 
// //                       max="6"
// //                       onChange={(e) => setBCols(parseInt(e.target.value))}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className={`validation ${isValid ? 'valid' : 'invalid'}`}>
// //               {isValid ? 
// //                 `✓ Valid multiplication: A(${aRows}×${aCols}) × B(${bRows}×${bCols}) = Result(${aRows}×${bCols})` :
// //                 `✗ Invalid multiplication: A columns (${aCols}) must equal B rows (${bRows})`
// //               }
// //             </div>
// //           </div>

// //           <div className="visualization">
// //             <div className="matrices-container">
// //               <div className="matrix-wrapper">
// //                 <div className="matrix-label">Matrix A ({aRows}×{aCols})</div>
// //                 <div 
// //                   className="matrix"
// //                   style={{
// //                     gridTemplateColumns: `repeat(${aCols}, 35px)`,
// //                     gridTemplateRows: `repeat(${aRows}, 35px)`
// //                   }}
// //                 >
// //                   {createMatrix(aRows, aCols, 'A')}
// //                 </div>
// //               </div>
              
// //               <div className="operator">×</div>
              
// //               <div className="matrix-wrapper">
// //                 <div className="matrix-label">Matrix B ({bRows}×{bCols})</div>
// //                 <div 
// //                   className="matrix"
// //                   style={{
// //                     gridTemplateColumns: `repeat(${bCols}, 35px)`,
// //                     gridTemplateRows: `repeat(${bRows}, 35px)`
// //                   }}
// //                 >
// //                   {createMatrix(bRows, bCols, 'B')}
// //                 </div>
// //               </div>
              
// //               <div className="operator">=</div>
              
// //               {isValid && (
// //                 <div className="matrix-wrapper">
// //                   <div className="matrix-label">Result ({aRows}×{bCols})</div>
// //                   <div 
// //                     className="matrix"
// //                     style={{
// //                       gridTemplateColumns: `repeat(${bCols}, 35px)`,
// //                       gridTemplateRows: `repeat(${aRows}, 35px)`
// //                     }}
// //                   >
// //                     {createMatrix(aRows, bCols, 'Result')}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
            
// //             {isValid && (
// //               <div className="interactive-section">
// //                 <h3>Click on result cells to see computation pattern</h3>
// //                 <div className="matrix-wrapper">
// //                   <div className="matrix-label">Interactive Result ({aRows}×{bCols})</div>
// //                   <div 
// //                     className="matrix"
// //                     style={{
// //                       gridTemplateColumns: `repeat(${bCols}, 45px)`,
// //                       gridTemplateRows: `repeat(${aRows}, 45px)`
// //                     }}
// //                   >
// //                     {createInteractiveMatrix(aRows, bCols)}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
            
// //             <div className="rules">
// //               <h3>Matrix Multiplication Rules:</h3>
// //               <ul>
// //                 <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
// //                 <li>The result matrix has dimensions: (A rows) × (B columns)</li>
// //                 <li>Each cell in the result is computed using one row from A and one column from B</li>
// //                 <li>Click on result cells above to see which row and column are used for that computation</li>
// //                 <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default MatrixMultiplicationOrderVisualizer;


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import './MatrixMultiplicationOrderVisualizer.css';


// export default function MatrixMultiplicationOrderVisualizer() {
//   const [aRows, setARows] = useState(3);
//   const [aCols, setACols] = useState(2);
//   const [bRows, setBRows] = useState(2);
//   const [bCols, setBCols] = useState(4);
//   const [isValid, setIsValid] = useState(true);

//   const matrixARef = useRef(null);
//   const matrixBRef = useRef(null);
//   const matrixResultRef = useRef(null);
//   const interactiveMatrixRef = useRef(null);
//   let highlightTimeout = useRef(null);

//   useEffect(() => {
//     setIsValid(aCols === bRows);
//     createMatrix(matrixARef.current, aRows, aCols);
//     createMatrix(matrixBRef.current, bRows, bCols);

//     if (aCols === bRows) {
//       createMatrix(matrixResultRef.current, aRows, bCols);
//       createInteractiveMatrix(interactiveMatrixRef.current, aRows, bCols);
//     }
//   }, [aRows, aCols, bRows, bCols]);

//   const createMatrix = (container, rows, cols) => {
//     if (!container) return;
//     container.innerHTML = '';
//     container.style.gridTemplateColumns = `repeat(${cols}, 35px)`;
//     container.style.gridTemplateRows = `repeat(${rows}, 35px)`;
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         const cell = document.createElement('div');
//         cell.className = 'matrix-cell';
//         cell.dataset.row = i;
//         cell.dataset.col = j;
//         const dot = document.createElement('div');
//         dot.className = 'cell-dot';
//         cell.appendChild(dot);
//         container.appendChild(cell);
//       }
//     }
//   };

//   const createInteractiveMatrix = (container, rows, cols) => {
//     if (!container) return;
//     container.innerHTML = '';
//     container.style.gridTemplateColumns = `repeat(${cols}, 45px)`;
//     container.style.gridTemplateRows = `repeat(${rows}, 45px)`;
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         const cell = document.createElement('div');
//         cell.className = 'result-cell';
//         cell.dataset.row = i;
//         cell.dataset.col = j;
//         cell.addEventListener('click', () => highlightComputation(i, j));
//         const dot = document.createElement('div');
//         dot.className = 'result-dot';
//         cell.appendChild(dot);
//         container.appendChild(cell);
//       }
//     }
//   };

//   const highlightComputation = (row, col) => {
//     document.querySelectorAll('.matrix-cell.highlighted').forEach(c => c.classList.remove('highlighted'));
//     document.querySelectorAll('#matrixA .matrix-cell').forEach(c => {
//       if (parseInt(c.dataset.row) === row) c.classList.add('highlighted');
//     });
//     document.querySelectorAll('#matrixB .matrix-cell').forEach(c => {
//       if (parseInt(c.dataset.col) === col) c.classList.add('highlighted');
//     });
//     document.querySelectorAll('#matrixResult .matrix-cell').forEach(c => {
//       if (parseInt(c.dataset.row) === row && parseInt(c.dataset.col) === col) c.classList.add('highlighted');
//     });
//     clearTimeout(highlightTimeout.current);
//     highlightTimeout.current = setTimeout(() => {
//       document.querySelectorAll('.matrix-cell.highlighted').forEach(c => c.classList.remove('highlighted'));
//     }, 2000);
//   };

//   return (
//     <div className="container">
//       <div className="title">
//         <h1>Matrix Multiplication Visualizer</h1>
//         <p>Explore how matrix dimensions work in multiplication. Adjust the matrix sizes and see how dimensions must align for valid multiplication.</p>
//       </div>

//       <div className="controls">
//         <h2>Matrix Dimensions</h2>
//         <div className="controls-grid">
//           <div className="control-group">
//             <label>Matrix A Size</label>
//             <div className="dimension-inputs">
//               <div className="input-group">
//                 <span>Rows</span>
//                 <input type="number" value={aRows} min="1" max="6" onChange={e => setARows(+e.target.value)} />
//               </div>
//               <span className="times">×</span>
//               <div className="input-group">
//                 <span>Cols</span>
//                 <input type="number" value={aCols} min="1" max="6" onChange={e => setACols(+e.target.value)} />
//               </div>
//             </div>
//           </div>

//           <div className="control-group">
//             <label>Matrix B Size</label>
//             <div className="dimension-inputs">
//               <div className="input-group">
//                 <span>Rows</span>
//                 <input type="number" value={bRows} min="1" max="6" onChange={e => setBRows(+e.target.value)} />
//               </div>
//               <span className="times">×</span>
//               <div className="input-group">
//                 <span>Cols</span>
//                 <input type="number" value={bCols} min="1" max="6" onChange={e => setBCols(+e.target.value)} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={`validation ${isValid ? 'valid' : 'invalid'}`}>
//           {isValid
//             ? `✓ Valid multiplication: A(${aRows}×${aCols}) × B(${bRows}×${bCols}) = Result(${aRows}×${bCols})`
//             : `✗ Invalid multiplication: A columns (${aCols}) must equal B rows (${bRows})`}
//         </div>
//       </div>

//       <div className="visualization">
//         <div className="matrices-container">
//           <div className="matrix-wrapper">
//             <div className="matrix-label">{`Matrix A (${aRows}×${aCols})`}</div>
//             <div className="matrix" id="matrixA" ref={matrixARef}></div>
//           </div>

//           <div className="operator">×</div>

//           <div className="matrix-wrapper">
//             <div className="matrix-label">{`Matrix B (${bRows}×${bCols})`}</div>
//             <div className="matrix" id="matrixB" ref={matrixBRef}></div>
//           </div>

//           {isValid && (
//             <>
//               <div className="operator">=</div>
//               <div className="matrix-wrapper">
//                 <div className="matrix-label">{`Result (${aRows}×${bCols})`}</div>
//                 <div className="matrix" id="matrixResult" ref={matrixResultRef}></div>
//               </div>
//             </>
//           )}
//         </div>

//         {isValid && (
//           <div className="interactive-section">
//             <h3>Click on result cells to see computation pattern</h3>
//             <div className="matrix-wrapper">
//               <div className="matrix-label">{`Interactive Result (${aRows}×${bCols})`}</div>
//               <div className="matrix" id="interactiveMatrix" ref={interactiveMatrixRef}></div>
//             </div>
//           </div>
//         )}

//         <div className="rules">
//           <h3>Matrix Multiplication Rules:</h3>
//           <ul>
//             <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
//             <li>The result matrix has dimensions: (A rows) × (B columns)</li>
//             <li>Each cell in the result is computed using one row from A and one column from B</li>
//             <li>Click on result cells above to see which row and column are used for that computation</li>
//             <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import './MatrixMultiplicationOrderVisualizer.css';

export default function MatrixMultiplicationOrderVisualizer() {
  const [aRows, setARows] = useState(3);
  const [aCols, setACols] = useState(2);
  const [bRows, setBRows] = useState(2);
  const [bCols, setBCols] = useState(6);
  const [highlighted, setHighlighted] = useState({ row: null, col: null });

  const isValid = aCols === bRows;
  const resultRows = aRows;
  const resultCols = bCols;

  const handleHighlight = (row, col) => {
    setHighlighted({ row, col });
    setTimeout(() => {
      setHighlighted({ row: null, col: null });
    }, 2000);
  };

  const buildMatrix = (rows, cols, type) => {
    return (
      <div
        className="matrix"
        style={{
          gridTemplateColumns: `repeat(${cols}, 35px)`,
          gridTemplateRows: `repeat(${rows}, 35px)`,
        }}
      >
        {[...Array(rows * cols)].map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          const isHighlight =
            (type === 'A' && r === highlighted.row) ||
            (type === 'B' && c === highlighted.col) ||
            (type === 'Result' && r === highlighted.row && c === highlighted.col);

          return (
            <div
              key={`${type}-${r}-${c}`}
              className={`matrix-cell ${isHighlight ? 'highlighted' : ''}`}
            >
              <div className="cell-dot" />
            </div>
          );
        })}
      </div>
    );
  };

  const buildInteractiveMatrix = (rows, cols) => {
    return (
      <div
        className="matrix"
        style={{
          gridTemplateColumns: `repeat(${cols}, 45px)`,
          gridTemplateRows: `repeat(${rows}, 45px)`,
        }}
      >
        {[...Array(rows * cols)].map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;

          return (
            <div
              key={`i-${r}-${c}`}
              className="result-cell"
              onClick={() => handleHighlight(r, c)}
            >
              <div className="result-dot" />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Matrix Multiplication Visualizer</h1>
        <p>
          Explore how matrix dimensions work in multiplication. Adjust the
          matrix sizes and see how dimensions must align for valid
          multiplication.
        </p>
      </div>

      <div className="controls">
        <h2>Matrix Dimensions</h2>
        <div className="controls-grid">
          <div className="control-group">
            <label>Matrix A Size</label>
            <div className="dimension-inputs">
              <div className="input-group">
                <span>Rows</span>
                <input
                  type="number"
                  value={aRows}
                  min={1}
                  max={6}
                  onChange={(e) => setARows(+e.target.value)}
                />
              </div>
              <span className="times">×</span>
              <div className="input-group">
                <span>Cols</span>
                <input
                  type="number"
                  value={aCols}
                  min={1}
                  max={6}
                  onChange={(e) => setACols(+e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="control-group">
            <label>Matrix B Size</label>
            <div className="dimension-inputs">
              <div className="input-group">
                <span>Rows</span>
                <input
                  type="number"
                  value={bRows}
                  min={1}
                  max={6}
                  onChange={(e) => setBRows(+e.target.value)}
                />
              </div>
              <span className="times">×</span>
              <div className="input-group">
                <span>Cols</span>
                <input
                  type="number"
                  value={bCols}
                  min={1}
                  max={6}
                  onChange={(e) => setBCols(+e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`validation ${isValid ? 'valid' : 'invalid'}`}>
          {isValid
            ? `✓ Valid multiplication: A(${aRows}×${aCols}) × B(${bRows}×${bCols}) = Result(${resultRows}×${resultCols})`
            : `✗ Invalid multiplication: A columns (${aCols}) must equal B rows (${bRows})`}
        </div>
      </div>

      <div className="visualization">
        <div className="matrices-container">
          <div className="matrix-wrapper">
            <div className="matrix-label">{`Matrix A (${aRows}×${aCols})`}</div>
            {buildMatrix(aRows, aCols, 'A')}
          </div>

          <div className="operator">×</div>

          <div className="matrix-wrapper">
            <div className="matrix-label">{`Matrix B (${bRows}×${bCols})`}</div>
            {buildMatrix(bRows, bCols, 'B')}
          </div>

          {isValid && (
            <>
              <div className="operator">=</div>
              <div className="matrix-wrapper">
                <div className="matrix-label">{`Result (${resultRows}×${resultCols})`}</div>
                {buildMatrix(resultRows, resultCols, 'Result')}
              </div>
            </>
          )}
        </div>

        {isValid && (
          <div className="interactive-section">
            <h3>Click on result cells to see computation pattern</h3>
            <div className="matrix-wrapper">
              <div className="matrix-label">{`Interactive Result (${resultRows}×${resultCols})`}</div>
              {buildInteractiveMatrix(resultRows, resultCols)}
            </div>
          </div>
        )}

        <div className="rules">
          <h3>Matrix Multiplication Rules:</h3>
          <ul>
            <li>The number of columns in Matrix A must equal the number of rows in Matrix B</li>
            <li>The result matrix has dimensions: (A rows) × (B columns)</li>
            <li>Each cell in the result is computed using one row from A and one column from B</li>
            <li>Click on result cells above to see which row and column are used for that computation</li>
            <li>Try changing the matrix dimensions to see when multiplication is valid or invalid</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
