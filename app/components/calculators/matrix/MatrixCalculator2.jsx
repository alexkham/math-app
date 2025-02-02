// // // // // // import { useState } from 'react';
// // // // // // import Matrix2 from './Matrix2';
// // // // // // import styles from './MatrixCalculator.module.css';

// // // // // // export default function MatrixCalculator2() {
// // // // // //   const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
// // // // // //   const [matrix, setMatrix] = useState(
// // // // // //     Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0))
// // // // // //   );

// // // // // //   const handleCellChange = (rowIndex, colIndex, value) => {
// // // // // //     const newMatrix = matrix.map((row, i) => 
// // // // // //       row.map((cell, j) => 
// // // // // //         i === rowIndex && j === colIndex ? Number(value) || 0 : cell
// // // // // //       )
// // // // // //     );
// // // // // //     setMatrix(newMatrix);
// // // // // //   };

// // // // // //   const resetToZeros = () => {
// // // // // //     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
// // // // // //   };

// // // // // //   const resetAll = () => {
// // // // // //     setDimensions({ rows: 2, cols: 2 });
// // // // // //     setMatrix(Array(2).fill().map(() => Array(2).fill(0)));
// // // // // //   };

// // // // // //   const generateRandom = () => {
// // // // // //     const newMatrix = matrix.map(row => 
// // // // // //       row.map(() => Math.floor(Math.random() * 10))
// // // // // //     );
// // // // // //     setMatrix(newMatrix);
// // // // // //   };

// // // // // //   const handleDimensionChange = (type, value) => {
// // // // // //     const newDimensions = { ...dimensions, [type]: value };
// // // // // //     setDimensions(newDimensions);
// // // // // //     setMatrix(Array(newDimensions.rows).fill().map(() => Array(newDimensions.cols).fill(0)));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <div className={styles.controlPanel}>
// // // // // //         <div className={styles.sizeControls}>
// // // // // //           <label className={styles.sizeLabel}>Matrix Size:</label>
// // // // // //           <div className={styles.selectGroup}>
// // // // // //             <select 
// // // // // //               className={styles.select}
// // // // // //               value={dimensions.rows}
// // // // // //               onChange={(e) => handleDimensionChange('rows', Number(e.target.value))}
// // // // // //             >
// // // // // //               {[2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
// // // // // //             </select>
// // // // // //             <span>×</span>
// // // // // //             <select
// // // // // //               className={styles.select}
// // // // // //               value={dimensions.cols}
// // // // // //               onChange={(e) => handleDimensionChange('cols', Number(e.target.value))}
// // // // // //             >
// // // // // //               {[2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
// // // // // //             </select>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className={styles.buttonGroup}>
// // // // // //           <button 
// // // // // //             onClick={resetToZeros}
// // // // // //             className={`${styles.button} ${styles.resetButton}`}
// // // // // //           >
// // // // // //             Reset to Zeros
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={resetAll}
// // // // // //             className={`${styles.button} ${styles.resetAllButton}`}
// // // // // //           >
// // // // // //             Reset All
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={generateRandom}
// // // // // //             className={`${styles.button} ${styles.operationButton}`}
// // // // // //           >
// // // // // //             Generate Random
// // // // // //           </button>
// // // // // //           <button className={`${styles.button} ${styles.operationButton}`}>
// // // // // //             Transpose
// // // // // //           </button>
// // // // // //           <button className={`${styles.button} ${styles.operationButton}`}>
// // // // // //             Determinant
// // // // // //           </button>
// // // // // //           <button className={`${styles.button} ${styles.operationButton}`}>
// // // // // //             Inverse
// // // // // //           </button>
// // // // // //           <button className={`${styles.button} ${styles.operationButton}`}>
// // // // // //             Rank
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <div className={styles.matrixWrapper}>
// // // // // //   <Matrix2 
// // // // // //     matrix={matrix} 
// // // // // //     name="A" 
// // // // // //     labelPosition="left"
// // // // // //     onCellChange={handleCellChange}
// // // // // //   />
// // // // // // </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import { useState } from 'react';
// // // // // import Matrix2 from './Matrix2';
// // // // // import styles from './MatrixCalculator.module.css';

// // // // // export default function MatrixCalculator2() {
// // // // //   const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
// // // // //   const [matrix, setMatrix] = useState(
// // // // //     Array(2).fill().map(() => Array(2).fill(0))
// // // // //   );

// // // // //   const createMatrix = (rows, cols) => 
// // // // //     Array(rows).fill().map(() => Array(cols).fill(0));

// // // // //   const handleCellChange = (rowIndex, colIndex, value) => {
// // // // //     const newMatrix = matrix.map((row, i) => 
// // // // //       row.map((cell, j) => 
// // // // //         i === rowIndex && j === colIndex ? Number(value) || 0 : cell
// // // // //       )
// // // // //     );
// // // // //     setMatrix(newMatrix);
// // // // //   };

// // // // //   const resetToZeros = () => {
// // // // //     console.log('Reset to zeros worked');
// // // // //     setMatrix(createMatrix(dimensions.rows, dimensions.cols));
// // // // //   };

// // // // //   const resetAll = () => {
// // // // //     console.log('Reset all worked');
// // // // //     const defaultDimensions = { rows: 2, cols: 2 };
// // // // //     setDimensions(defaultDimensions);
// // // // //     setMatrix(createMatrix(defaultDimensions.rows, defaultDimensions.cols));
// // // // //   };

// // // // //   const generateRandom = () => {
// // // // //     const newMatrix = matrix.map(row => 
// // // // //       row.map(() => Math.floor(Math.random() * 10))
// // // // //     );
// // // // //     setMatrix(newMatrix);
// // // // //   };

// // // // //   const handleDimensionChange = (type, value) => {
// // // // //     const newDimensions = { ...dimensions, [type]: value };
// // // // //     setDimensions(newDimensions);
// // // // //     setMatrix(createMatrix(newDimensions.rows, newDimensions.cols));
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <div className={styles.controlPanel}>
// // // // //         <div className={styles.sizeControls}>
// // // // //           <label className={styles.sizeLabel}>Matrix Size:</label>
// // // // //           <div className={styles.selectGroup}>
// // // // //             <select 
// // // // //               className={styles.select}
// // // // //               value={dimensions.rows}
// // // // //               onChange={(e) => handleDimensionChange('rows', Number(e.target.value))}
// // // // //             >
// // // // //               {[2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
// // // // //             </select>
// // // // //             <span>×</span>
// // // // //             <select
// // // // //               className={styles.select}
// // // // //               value={dimensions.cols}
// // // // //               onChange={(e) => handleDimensionChange('cols', Number(e.target.value))}
// // // // //             >
// // // // //               {[2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
// // // // //             </select>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className={styles.buttonGroup}>
// // // // //           <button onClick={resetToZeros} className={`${styles.button} ${styles.resetButton}`}>
// // // // //             Reset to Zeros
// // // // //           </button>
// // // // //           <button onClick={resetAll} className={`${styles.button} ${styles.resetAllButton}`}>
// // // // //             Reset All
// // // // //           </button>
// // // // //           <button onClick={generateRandom} className={`${styles.button} ${styles.operationButton}`}>
// // // // //             Generate Random
// // // // //           </button>
// // // // //           <button className={`${styles.button} ${styles.operationButton}`}>Transpose</button>
// // // // //           <button className={`${styles.button} ${styles.operationButton}`}>Determinant</button>
// // // // //           <button className={`${styles.button} ${styles.operationButton}`}>Inverse</button>
// // // // //           <button className={`${styles.button} ${styles.operationButton}`}>Rank</button>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className={styles.matrixWrapper}>
// // // // //         <Matrix2 
// // // // //           matrix={matrix} 
// // // // //           name="A" 
// // // // //           labelPosition="left"
// // // // //           onCellChange={handleCellChange}
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useState, useEffect } from 'react';
// // // // import Matrix2 from './Matrix2';
// // // // import styles from './MatrixCalculator.module.css';

// // // // export default function MatrixCalculator2() {
// // // //   const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
// // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);

// // // //   // Ensure matrix updates AFTER dimensions change
// // // //   useEffect(() => {
// // // //     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
// // // //   }, [dimensions]);

// // // //   const handleCellChange = (rowIndex, colIndex, value) => {
// // // //     const newMatrix = matrix.map((row, i) => 
// // // //       row.map((cell, j) => 
// // // //         i === rowIndex && j === colIndex ? Number(value) || 0 : cell
// // // //       )
// // // //     );
// // // //     setMatrix(newMatrix);
// // // //   };

// // // //   const resetToZeros = () => {
// // // //     console.log('Set to zeros')
// // // //     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
// // // //   };

// // // //   const resetAll = () => {
// // // //     // First reset dimensions, matrix will auto-reset via useEffect
// // // //     setDimensions({ rows: 2, cols: 2 });
// // // //     resetToZeros();
// // // //   };

// // // //   const generateRandom = () => {
// // // //     const newMatrix = matrix.map(row => 
// // // //       row.map(() => Math.floor(Math.random() * 10))
// // // //     );
// // // //     setMatrix(newMatrix);
// // // //   };

// // // //   const handleDimensionChange = (type, value) => {
// // // //     setDimensions(prev => ({ ...prev, [type]: value }));
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.controlPanel}>
// // // //         <div className={styles.sizeControls}>
// // // //           <label className={styles.sizeLabel}>Matrix Size:</label>
// // // //           <div className={styles.selectGroup}>
// // // //             <select 
// // // //               className={styles.select}
// // // //               value={dimensions.rows}
// // // //               onChange={(e) => handleDimensionChange('rows', Number(e.target.value))}
// // // //             >
// // // //               {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
// // // //             </select>
// // // //             <span>×</span>
// // // //             <select
// // // //               className={styles.select}
// // // //               value={dimensions.cols}
// // // //               onChange={(e) => handleDimensionChange('cols', Number(e.target.value))}
// // // //             >
// // // //               {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
// // // //             </select>
// // // //           </div>
// // // //         </div>
// // // //         <div className={styles.buttonGroup}>
// // // //           <button onClick={resetToZeros} className={`${styles.button} ${styles.resetButton}`}>
// // // //             Reset to Zeros
// // // //           </button>
// // // //           <button onClick={resetAll} className={`${styles.button} ${styles.resetAllButton}`}>
// // // //             Reset All
// // // //           </button>
// // // //           <button onClick={generateRandom} className={`${styles.button} ${styles.operationButton}`}>
// // // //             Generate Random
// // // //           </button>
// // // //           <button className={`${styles.button} ${styles.operationButton}`}>Transpose</button>
// // // //           <button className={`${styles.button} ${styles.operationButton}`}>Determinant</button>
// // // //           <button className={`${styles.button} ${styles.operationButton}`}>Inverse</button>
// // // //           <button className={`${styles.button} ${styles.operationButton}`}>Rank</button>
// // // //         </div>
// // // //       </div>
// // // //       <div className={styles.matrixWrapper}>
// // // //         <Matrix2 
// // // //           matrix={matrix} 
// // // //           name="A" 
// // // //           labelPosition="left"
// // // //           onCellChange={handleCellChange}
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState, useEffect } from 'react';
// // // import Matrix2 from './Matrix2';
// // // import styles from './MatrixCalculator.module.css';

// // // export default function MatrixCalculator2() {
// // //   const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
// // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);

// // //   useEffect(() => {
// // //     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
// // //   }, [dimensions]);

// // //   const handleCellChange = (rowIndex, colIndex, value) => {
// // //     const newMatrix = matrix.map((row, i) =>
// // //       row.map((cell, j) =>
// // //         i === rowIndex && j === colIndex ? Number(value) || 0 : cell
// // //       )
// // //     );
// // //     setMatrix(newMatrix);
// // //   };

// // //   // Modified resetToZeros function
// // // //   const resetToZeros = () => {
// // // //     const rows = dimensions.rows;
// // // //     const cols = dimensions.cols;
// // // //     const newMatrix = [];
    
// // // //     for (let i = 0; i < rows; i++) {
// // // //       newMatrix[i] = new Array(cols).fill(0);
// // // //     }
    
// // // //     setMatrix(newMatrix);
// // // //   };

// // // const resetToZeros = () => {
// // //     console.log('Current dimensions:', dimensions);
// // //     console.log('Current matrix:', matrix);
    
// // //     // Create a new matrix with explicit dimensions
// // //     const zeroMatrix = [];
// // //     for(let i = 0; i < dimensions.rows; i++) {
// // //         const row = [];
// // //         for(let j = 0; j < dimensions.cols; j++) {
// // //             row.push(0);
// // //         }
// // //         zeroMatrix.push(row);
// // //     }
    
// // //     console.log('New zero matrix:', zeroMatrix);
// // //     setMatrix(zeroMatrix);
// // // }; 

// // // const resetAll = () => {
// // //     setDimensions({ rows: 2, cols: 2 });
// // //     resetToZeros();
// // //   };

// // //   const generateRandom = () => {
// // //     const newMatrix = matrix.map(row =>
// // //       row.map(() => Math.floor(Math.random() * 10))
// // //     );
// // //     setMatrix(newMatrix);
// // //   };

// // //   const handleDimensionChange = (type, value) => {
// // //     setDimensions(prev => ({ ...prev, [type]: value }));
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.controlPanel}>
// // //         <div className={styles.sizeControls}>
// // //           <label className={styles.sizeLabel}>Matrix Size:</label>
// // //           <div className={styles.selectGroup}>
// // //             <select
// // //               className={styles.select}
// // //               value={dimensions.rows}
// // //               onChange={(e) => handleDimensionChange('rows', Number(e.target.value))}
// // //             >
// // //               {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
// // //             </select>
// // //             <span>×</span>
// // //             <select
// // //               className={styles.select}
// // //               value={dimensions.cols}
// // //               onChange={(e) => handleDimensionChange('cols', Number(e.target.value))}
// // //             >
// // //               {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
// // //             </select>
// // //           </div>
// // //         </div>
// // //         <div className={styles.buttonGroup}>
// // //           <button onClick={resetToZeros} className={`${styles.button} ${styles.resetButton}`}>
// // //             Reset to Zeros
// // //           </button>
// // //           <button onClick={resetAll} className={`${styles.button} ${styles.resetAllButton}`}>
// // //             Reset All
// // //           </button>
// // //           <button onClick={generateRandom} className={`${styles.button} ${styles.operationButton}`}>
// // //             Generate Random
// // //           </button>
// // //           <button className={`${styles.button} ${styles.operationButton}`}>Transpose</button>
// // //           <button className={`${styles.button} ${styles.operationButton}`}>Determinant</button>
// // //           <button className={`${styles.button} ${styles.operationButton}`}>Inverse</button>
// // //           <button className={`${styles.button} ${styles.operationButton}`}>Rank</button>
// // //         </div>
// // //       </div>
// // //       {/* <div className={styles.matrixWrapper}>
// // //         <Matrix2
// // //           matrix={matrix}
// // //           name="A"
// // //           labelPosition="left"
// // //           onCellChange={handleCellChange}
// // //         />
// // //       </div> */}
// // //       <div className={styles.matrixWrapper}>
// // //   <Matrix2
// // //     key={`matrix-${JSON.stringify(matrix)}`}  // Force re-render on matrix change
// // //     matrix={matrix}
// // //     name="A"
// // //     labelPosition="left"
// // //     onCellChange={handleCellChange}
// // //   />
// // // </div>
// // //     </div>
// // //   );
// // // }


// // import { useState, useEffect } from 'react';
// // import Matrix2 from './Matrix2';
// // import styles from './MatrixCalculator.module.css';

// // export default function MatrixCalculator2() {
// //   const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
// //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);

// //   useEffect(() => {
// //     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
// //   }, [dimensions]);

// //   const handleCellChange = (rowIndex, colIndex, value) => {
// //     const newMatrix = matrix.map((row, i) =>
// //       row.map((cell, j) =>
// //         i === rowIndex && j === colIndex ? Number(value) || 0 : cell
// //       )
// //     );
// //     setMatrix(newMatrix);
// //   };

// //   const resetToZeros = () => {
// //     const zeroMatrix = Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0));
// //     setMatrix(zeroMatrix);
// //   };

// //   const resetAll = () => {
// //     setDimensions({ rows: 2, cols: 2 });
// //   };

// //   const generateRandom = () => {
// //     const newMatrix = matrix.map(row =>
// //       row.map(() => Math.floor(Math.random() * 10))
// //     );
// //     setMatrix(newMatrix);
// //   };

// //   const handleDimensionChange = (type, value) => {
// //     setDimensions(prev => ({ ...prev, [type]: value }));
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.controlPanel}>
// //         <div className={styles.sizeControls}>
// //           <label className={styles.sizeLabel}>Matrix Size:</label>
// //           <div className={styles.selectGroup}>
// //             <select
// //               className={styles.select}
// //               value={dimensions.rows}
// //               onChange={(e) => handleDimensionChange('rows', Number(e.target.value))}
// //             >
// //               {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
// //             </select>
// //             <span>×</span>
// //             <select
// //               className={styles.select}
// //               value={dimensions.cols}
// //               onChange={(e) => handleDimensionChange('cols', Number(e.target.value))}
// //             >
// //               {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
// //             </select>
// //           </div>
// //         </div>
// //         <div className={styles.buttonGroup}>
// //           <button onClick={resetToZeros} className={`${styles.button} ${styles.resetButton}`}>
// //             Reset to Zeros
// //           </button>
// //           <button onClick={resetAll} className={`${styles.button} ${styles.resetAllButton}`}>
// //             Reset All
// //           </button>
// //           <button onClick={generateRandom} className={`${styles.button} ${styles.operationButton}`}>
// //             Generate Random
// //           </button>
// //           <button className={`${styles.button} ${styles.operationButton}`}>Transpose</button>
// //           <button className={`${styles.button} ${styles.operationButton}`}>Determinant</button>
// //           <button className={`${styles.button} ${styles.operationButton}`}>Inverse</button>
// //           <button className={`${styles.button} ${styles.operationButton}`}>Rank</button>
// //         </div>
// //       </div>
// //       <div className={styles.matrixWrapper}>
// //         <Matrix2
// //           matrix={matrix}
// //           name="A"
// //           labelPosition="left"
// //           onCellChange={handleCellChange}
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// // import { useState, useEffect } from 'react';
// // import Matrix2 from './Matrix2';
// // import styles from './MatrixCalculator.module.css';

// // export default function MatrixCalculator2() {
// //   const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
// //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
// //   }, [dimensions]);

// //   const handleCellChange = (rowIndex, colIndex, value) => {
// //     const newMatrix = matrix.map((row, i) =>
// //       row.map((cell, j) =>
// //         i === rowIndex && j === colIndex ? Number(value) || 0 : cell
// //       )
// //     );
// //     setMatrix(newMatrix);
// //   };

// //   const handleDimensionChange = (type, value) => {
// //     const numValue = parseInt(value, 10);
    
// //     if (isNaN(numValue)) {
// //       setError('Please enter a valid number');
// //       return;
// //     }

// //     if (numValue < 1 || numValue > 10) {
// //       setError('Dimensions must be between 1 and 10');
// //       return;
// //     }

// //     setError('');
// //     setDimensions(prev => ({ ...prev, [type]: numValue }));
// //   };

// //   const adjustDimension = (type, increment) => {
// //     setDimensions(prev => {
// //       const newValue = prev[type] + increment;
// //       if (newValue >= 1 && newValue <= 10) {
// //         return { ...prev, [type]: newValue };
// //       }
// //       return prev;
// //     });
// //   };

// //   const resetToZeros = () => {
// //     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
// //   };

// //   const resetAll = () => {
// //     setDimensions({ rows: 2, cols: 2 });
// //   };

// //   const generateRandom = () => {
// //     const newMatrix = matrix.map(row =>
// //       row.map(() => Math.floor(Math.random() * 10))
// //     );
// //     setMatrix(newMatrix);
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.controlsContainer}>
// //         <div className={styles.dimensionControls}>
// //           <h3 className={styles.controlTitle}>Matrix Size</h3>
// //           <div className={styles.dimensionGroup}>
// //             <div className={styles.dimensionControl}>
// //               <label>Rows:</label>
// //               <div className={styles.inputGroup}>
// //                 <button 
// //                   onClick={() => adjustDimension('rows', -1)}
// //                   disabled={dimensions.rows <= 1}
// //                   className={styles.adjustButton}
// //                 >
// //                   −
// //                 </button>
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   max="10"
// //                   value={dimensions.rows}
// //                   onChange={(e) => handleDimensionChange('rows', e.target.value)}
// //                   className={styles.dimensionInput}
// //                 />
// //                 <button 
// //                   onClick={() => adjustDimension('rows', 1)}
// //                   disabled={dimensions.rows >= 10}
// //                   className={styles.adjustButton}
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>
// //             <div className={styles.dimensionControl}>
// //               <label>Columns:</label>
// //               <div className={styles.inputGroup}>
// //                 <button 
// //                   onClick={() => adjustDimension('cols', -1)}
// //                   disabled={dimensions.cols <= 1}
// //                   className={styles.adjustButton}
// //                 >
// //                   −
// //                 </button>
// //                 <input
// //                   type="number"
// //                   min="1"
// //                   max="10"
// //                   value={dimensions.cols}
// //                   onChange={(e) => handleDimensionChange('cols', e.target.value)}
// //                   className={styles.dimensionInput}
// //                 />
// //                 <button 
// //                   onClick={() => adjustDimension('cols', 1)}
// //                   disabled={dimensions.cols >= 10}
// //                   className={styles.adjustButton}
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className={styles.operationsGroup}>
// //           <h3 className={styles.controlTitle}>Matrix Operations</h3>
// //           <div className={styles.basicOperations}>
// //             <button onClick={resetToZeros} className={styles.operationButton}>
// //               Reset to Zeros
// //             </button>
// //             <button onClick={resetAll} className={styles.operationButton}>
// //               Reset All
// //             </button>
// //             <button onClick={generateRandom} className={styles.operationButton}>
// //               Generate Random
// //             </button>
// //           </div>
// //           <div className={styles.mathOperations}>
// //             <button className={styles.operationButton}>Transpose</button>
// //             <button className={styles.operationButton}>Determinant</button>
// //             <button className={styles.operationButton}>Inverse</button>
// //             <button className={styles.operationButton}>Rank</button>
// //           </div>
// //         </div>
// //       </div>

// //       {error && <div className={styles.error}>{error}</div>}
      
// //       <div className={styles.matrixWrapper}>
// //         <Matrix2
// //           matrix={matrix}
// //           name="A"
// //           labelPosition="left"
// //           onCellChange={handleCellChange}
// //         />
// //       </div>
// //     </div>
// //   );
// // }



// import { useState, useEffect } from 'react';
// import Matrix2 from './Matrix2';
// import styles from './MatrixCalculator.module.css';

// export default function MatrixCalculator2() {
//   const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
//   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
//   }, [dimensions]);

//   const handleCellChange = (rowIndex, colIndex, value) => {
//     const newMatrix = matrix.map((row, i) =>
//       row.map((cell, j) =>
//         i === rowIndex && j === colIndex ? Number(value) || 0 : cell
//       )
//     );
//     setMatrix(newMatrix);
//   };

//   const handleDimensionChange = (type, value) => {
//     const numValue = parseInt(value, 10);
    
//     if (isNaN(numValue)) {
//       setError('Please enter a valid number');
//       return;
//     }

//     if (numValue < 1 || numValue > 10) {
//       setError('Dimensions must be between 1 and 10');
//       return;
//     }

//     setError('');
//     setDimensions(prev => ({ ...prev, [type]: numValue }));
//   };

//   const adjustDimension = (type, increment) => {
//     setDimensions(prev => {
//       const newValue = prev[type] + increment;
//       if (newValue >= 1 && newValue <= 10) {
//         return { ...prev, [type]: newValue };
//       }
//       return prev;
//     });
//   };

//   const resetToZeros = () => {
//     setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
//   };

//   const resetAll = () => {
//     setDimensions({ rows: 2, cols: 2 });
//   };

//   const generateRandom = () => {
//     const newMatrix = matrix.map(row =>
//       row.map(() => Math.floor(Math.random() * 10))
//     );
//     setMatrix(newMatrix);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Top Section - Dimension Controls */}
//       <div className={styles.topSection}>
//         <div className={styles.dimensionControls}>
//           <h3 className={styles.controlTitle}>Matrix Dimensions</h3>
//           <div className={styles.dimensionGroup}>
//             <div className={styles.dimensionControl}>
//               <label>Rows:</label>
//               <div className={styles.inputGroup}>
//                 <button 
//                   onClick={() => adjustDimension('rows', -1)}
//                   disabled={dimensions.rows <= 1}
//                   className={styles.adjustButton}
//                 >
//                   −
//                 </button>
//                 <input
//                   type="number"
//                   min="1"
//                   max="10"
//                   value={dimensions.rows}
//                   onChange={(e) => handleDimensionChange('rows', e.target.value)}
//                   className={styles.dimensionInput}
//                 />
//                 <button 
//                   onClick={() => adjustDimension('rows', 1)}
//                   disabled={dimensions.rows >= 10}
//                   className={styles.adjustButton}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <div className={styles.dimensionControl}>
//               <label>Columns:</label>
//               <div className={styles.inputGroup}>
//                 <button 
//                   onClick={() => adjustDimension('cols', -1)}
//                   disabled={dimensions.cols <= 1}
//                   className={styles.adjustButton}
//                 >
//                   −
//                 </button>
//                 <input
//                   type="number"
//                   min="1"
//                   max="10"
//                   value={dimensions.cols}
//                   onChange={(e) => handleDimensionChange('cols', e.target.value)}
//                   className={styles.dimensionInput}
//                 />
//                 <button 
//                   onClick={() => adjustDimension('cols', 1)}
//                   disabled={dimensions.cols >= 10}
//                   className={styles.adjustButton}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {error && <div className={styles.error}>{error}</div>}

//       {/* Middle Section - Matrix Display */}
//       <div className={styles.matrixSection}>
//         <Matrix2
//           matrix={matrix}
//           name="A"
//           labelPosition="left"
//           onCellChange={handleCellChange}
//         />
//       </div>

//       {/* Bottom Section - Operations */}
//       <div className={styles.bottomSection}>
//         {/* Input Controls */}
//         <div className={styles.controlPanel}>
//           <h3 className={styles.controlTitle}>Input Controls</h3>
//           <div className={styles.buttonGroup}>
//             <button onClick={resetToZeros} className={styles.inputControl}>
//               Set to Zeros
//             </button>
//             <button onClick={resetAll} className={styles.inputControl}>
//               Reset All
//             </button>
//             <button onClick={generateRandom} className={styles.inputControl}>
//               Generate Random
//             </button>
//           </div>
//         </div>

//         {/* Matrix Operations */}
//         <div className={styles.operationsPanel}>
//           <h3 className={styles.controlTitle}>Matrix Operations</h3>
//           <div className={styles.buttonGroup}>
//             <button className={styles.operationButton}>Transpose</button>
//             <button className={styles.operationButton}>Determinant</button>
//             <button className={styles.operationButton}>Inverse</button>
//             <button className={styles.operationButton}>Rank</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import Matrix2 from './Matrix2';
import styles from './MatrixCalculator.module.css';

export default function MatrixCalculator2() {
  const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
  const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
  const [error, setError] = useState('');

  useEffect(() => {
    setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
  }, [dimensions]);

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newMatrix = matrix.map((row, i) =>
      row.map((cell, j) =>
        i === rowIndex && j === colIndex ? Number(value) || 0 : cell
      )
    );
    setMatrix(newMatrix);
  };

  const handleDimensionChange = (type, value) => {
    const numValue = parseInt(value, 10);
    
    if (isNaN(numValue)) {
      setError('Please enter a valid number');
      return;
    }

    if (numValue < 1 || numValue > 10) {
      setError('Dimensions must be between 1 and 10');
      return;
    }

    setError('');
    setDimensions(prev => ({ ...prev, [type]: numValue }));
  };

  const adjustDimension = (type, increment) => {
    setDimensions(prev => {
      const newValue = prev[type] + increment;
      if (newValue >= 1 && newValue <= 10) {
        return { ...prev, [type]: newValue };
      }
      return prev;
    });
  };

  const resetToZeros = () => {
    setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
  };

  const resetAll = () => {
    setDimensions({ rows: 2, cols: 2 });
  };

  const generateRandom = () => {
    const newMatrix = matrix.map(row =>
      row.map(() => Math.floor(Math.random() * 10))
    );
    setMatrix(newMatrix);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topPanel}>
        <div className={styles.dimensions}>
          <div className={styles.dimensionGroup}>
            <div className={styles.dimensionControl}>
              <label>Rows:</label>
              <div className={styles.inputGroup}>
                <button 
                  onClick={() => adjustDimension('rows', -1)}
                  disabled={dimensions.rows <= 1}
                  className={styles.adjustButton}
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={dimensions.rows}
                  onChange={(e) => handleDimensionChange('rows', e.target.value)}
                  className={styles.dimensionInput}
                />
                <button 
                  onClick={() => adjustDimension('rows', 1)}
                  disabled={dimensions.rows >= 10}
                  className={styles.adjustButton}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.dimensionControl}>
              <label>Columns:</label>
              <div className={styles.inputGroup}>
                <button 
                  onClick={() => adjustDimension('cols', -1)}
                  disabled={dimensions.cols <= 1}
                  className={styles.adjustButton}
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={dimensions.cols}
                  onChange={(e) => handleDimensionChange('cols', e.target.value)}
                  className={styles.dimensionInput}
                />
                <button 
                  onClick={() => adjustDimension('cols', 1)}
                  disabled={dimensions.cols >= 10}
                  className={styles.adjustButton}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.leftGroup}>
            <button onClick={resetToZeros} className={styles.basicBtn}>
              Set to Zeros
            </button>
            <button onClick={resetAll} className={styles.basicBtn}>
              Reset All
            </button>
            <button onClick={generateRandom} className={styles.basicBtn}>
              Generate Random
            </button>
          </div>
          <br/>
          <br/>
          <br/>
          <div className={styles.rightGroup}>
            <button className={styles.operationBtn}>Transpose</button>
            <button className={styles.operationBtn}>Determinant</button>
            <button className={styles.operationBtn}>Inverse</button>
            <button className={styles.operationBtn}>Rank</button>
          </div>
        </div>
      </div>

      {error && <div className={styles.error}>{error}</div>}
     
     
      
      
      <div className={styles.matrixWrapper}>
        <Matrix2
          matrix={matrix}
          name="A"
          labelPosition="left"
          onCellChange={handleCellChange}
        />
      </div>
    </div>
  );
}