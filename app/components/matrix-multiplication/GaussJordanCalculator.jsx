// // // // // // 'use client';
// // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // import styles from './GaussJordanCalculator.module.css';

// // // // // // const GaussJordanCalculator = () => {
// // // // // //   const [matrixSize, setMatrixSize] = useState(3);
// // // // // //   const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
// // // // // //   const [stages, setStages] = useState([]);
// // // // // //   const [currentStage, setCurrentStage] = useState(0);
// // // // // //   const [explanations, setExplanations] = useState([]);
// // // // // //   const [highlightCells, setHighlightCells] = useState([]);
// // // // // //   const matrixContainerRef = useRef(null);

// // // // // //   const matrixSizes = [2, 3, 4, 5];

// // // // // //   useEffect(() => {
// // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
// // // // // //     setStages([]);
// // // // // //     setCurrentStage(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);

// // // // // //     setTimeout(() => {
// // // // // //       if (matrixContainerRef.current) {
// // // // // //         const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
// // // // // //         const viewportHeight = window.innerHeight;
// // // // // //         if (matrixBottom > viewportHeight) {
// // // // // //           window.scrollTo({
// // // // // //             top: window.pageYOffset + (matrixBottom - viewportHeight),
// // // // // //             behavior: 'smooth'
// // // // // //           });
// // // // // //         }
// // // // // //       }
// // // // // //     }, 0);
// // // // // //   }, [matrixSize]);

// // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // //     newMatrix[i][j] = value === '' ? 0 : Number(value);
// // // // // //     setMatrix(newMatrix);
// // // // // //     setStages([]);
// // // // // //     setCurrentStage(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //   };

// // // // // //   const generateRandomMatrix = () => {
// // // // // //     const newMatrix = matrix.map(row => 
// // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // //     );
// // // // // //     setMatrix(newMatrix);
// // // // // //     setStages([]);
// // // // // //     setCurrentStage(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //   };

// // // // // //   const resetCalculator = () => {
// // // // // //     setMatrixSize(3);
// // // // // //     setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
// // // // // //     setStages([]);
// // // // // //     setCurrentStage(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //   };

// // // // // //   const performGaussJordan = () => {
// // // // // //     let m = matrix.map(row => [...row]);
// // // // // //     let n = m.length;
// // // // // //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// // // // // //     let explanations = ["Initial matrix"];

// // // // // //     for (let i = 0; i < n; i++) {
// // // // // //       // Find pivot
// // // // // //       let maxElement = Math.abs(m[i][i]);
// // // // // //       let maxRow = i;
// // // // // //       for (let k = i + 1; k < n; k++) {
// // // // // //         if (Math.abs(m[k][i]) > maxElement) {
// // // // // //           maxElement = Math.abs(m[k][i]);
// // // // // //           maxRow = k;
// // // // // //         }
// // // // // //       }

// // // // // //       // Swap maximum row with current row
// // // // // //       if (maxRow !== i) {
// // // // // //         [m[i], m[maxRow]] = [m[maxRow], m[i]];
// // // // // //         explanations.push(`Swap row ${i + 1} with row ${maxRow + 1}`);
// // // // // //         stages.push({ 
// // // // // //           matrix: JSON.parse(JSON.stringify(m)), 
// // // // // //           highlight: [[i, 'all'], [maxRow, 'all']]
// // // // // //         });
// // // // // //       }

// // // // // //       // Make all rows below this one 0 in current column
// // // // // //       for (let k = i + 1; k < n; k++) {
// // // // // //         let c = -m[k][i] / m[i][i];
// // // // // //         for (let j = i; j <= n; j++) {
// // // // // //           m[k][j] += c * m[i][j];
// // // // // //         }
// // // // // //       }
// // // // // //       explanations.push(`Eliminate below pivot in column ${i + 1}`);
// // // // // //       stages.push({ 
// // // // // //         matrix: JSON.parse(JSON.stringify(m)), 
// // // // // //         highlight: [[i, 'all'], ...Array(n - i - 1).fill().map((_, idx) => [i + idx + 1, i])]
// // // // // //       });

// // // // // //       // Scale the current row
// // // // // //       let scale = m[i][i];
// // // // // //       for (let j = i; j <= n; j++) {
// // // // // //         m[i][j] /= scale;
// // // // // //       }
// // // // // //       explanations.push(`Scale row ${i + 1}`);
// // // // // //       stages.push({ 
// // // // // //         matrix: JSON.parse(JSON.stringify(m)), 
// // // // // //         highlight: [[i, 'all']]
// // // // // //       });
// // // // // //     }

// // // // // //     // Back-substitution
// // // // // //     for (let i = n - 1; i > 0; i--) {
// // // // // //       for (let k = i - 1; k >= 0; k--) {
// // // // // //         let c = -m[k][i];
// // // // // //         for (let j = i; j <= n; j++) {
// // // // // //           m[k][j] += c * m[i][j];
// // // // // //         }
// // // // // //       }
// // // // // //       explanations.push(`Back-substitution for row ${i}`);
// // // // // //       stages.push({ 
// // // // // //         matrix: JSON.parse(JSON.stringify(m)), 
// // // // // //         highlight: Array(i).fill().map((_, idx) => [idx, i])
// // // // // //       });
// // // // // //     }

// // // // // //     setStages(stages);
// // // // // //     setExplanations(explanations);
// // // // // //     setCurrentStage(0);
// // // // // //     setHighlightCells(stages[0].highlight);
// // // // // //   };

// // // // // //   const nextStage = () => {
// // // // // //     if (currentStage < stages.length - 1) {
// // // // // //       setCurrentStage(currentStage + 1);
// // // // // //       setHighlightCells(stages[currentStage + 1].highlight);
// // // // // //     }
// // // // // //   };

// // // // // //   const prevStage = () => {
// // // // // //     if (currentStage > 0) {
// // // // // //       setCurrentStage(currentStage - 1);
// // // // // //       setHighlightCells(stages[currentStage - 1].highlight);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <div className={styles.sizeSelector}>
// // // // // //         Matrix Size:
// // // // // //         {matrixSizes.map(size => (
// // // // // //           <label key={size} className={styles.radioLabel}>
// // // // // //             <input
// // // // // //               type="radio"
// // // // // //               value={size}
// // // // // //               checked={matrixSize === size}
// // // // // //               onChange={() => setMatrixSize(size)}
// // // // // //               className={styles.radioInput}
// // // // // //             />
// // // // // //             {size}x{size + 1}
// // // // // //           </label>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //       <div className={styles.contentContainer}>
// // // // // //         <div className={styles.matrixSection}>
// // // // // //           <div className={styles.controls}>
// // // // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // //             <button className={styles.button} onClick={performGaussJordan}>Solve</button>
// // // // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // // //           </div>
// // // // // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // // // // //             <table className={styles.matrix}>
// // // // // //               <tbody>
// // // // // //                 {matrix.map((row, i) => (
// // // // // //                   <tr key={i}>
// // // // // //                     {row.map((cell, j) => (
// // // // // //                       <td key={j}>
// // // // // //                         <input
// // // // // //                           type="number"
// // // // // //                           value={cell}
// // // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // //                           className={styles.matrixInput}
// // // // // //                         />
// // // // // //                       </td>
// // // // // //                     ))}
// // // // // //                   </tr>
// // // // // //                 ))}
// // // // // //               </tbody>
// // // // // //             </table>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className={styles.visualizationSection}>
// // // // // //           <h3>Elimination Stages</h3>
// // // // // //           {stages.length > 0 && (
// // // // // //             <div>
// // // // // //               <div className={styles.stageControls}>
// // // // // //                 <button onClick={prevStage} disabled={currentStage === 0}>Previous</button>
// // // // // //                 <span>Stage {currentStage + 1} of {stages.length}</span>
// // // // // //                 <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next</button>
// // // // // //               </div>
// // // // // //               <p>{explanations[currentStage]}</p>
// // // // // //               <table className={styles.matrix}>
// // // // // //                 <tbody>
// // // // // //                   {stages[currentStage].matrix.map((row, i) => (
// // // // // //                     <tr key={i}>
// // // // // //                       {row.map((cell, j) => (
// // // // // //                         <td 
// // // // // //                           key={j} 
// // // // // //                           className={
// // // // // //                             highlightCells.some(([x, y]) => 
// // // // // //                               (x === i && (y === j || y === 'all')) || 
// // // // // //                               (y === j && x === 'all')
// // // // // //                             ) ? styles.highlighted : ''
// // // // // //                           }
// // // // // //                         >
// // // // // //                           {cell != null ? cell.toFixed(2) : ''}
// // // // // //                         </td>
// // // // // //                       ))}
// // // // // //                     </tr>
// // // // // //                   ))}
// // // // // //                 </tbody>
// // // // // //               </table>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default GaussJordanCalculator;
// // // // // 'use client';
// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import styles from './GaussJordanCalculator.module.css';

// // // // // const GaussJordanCalculator = () => {
// // // // //   const [matrixSize, setMatrixSize] = useState(3);
// // // // //   const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
// // // // //   const [stages, setStages] = useState([]);
// // // // //   const [currentStage, setCurrentStage] = useState(0);
// // // // //   const [explanations, setExplanations] = useState([]);
// // // // //   const [highlightCells, setHighlightCells] = useState([]);
// // // // //   const matrixContainerRef = useRef(null);

// // // // //   const matrixSizes = [2, 3, 4, 5];

// // // // //   useEffect(() => {
// // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
// // // // //     resetCalculation();
// // // // //   }, [matrixSize]);

// // // // //   const handleMatrixChange = (i, j, value) => {
// // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // //     newMatrix[i][j] = value === '' ? 0 : Number(value);
// // // // //     setMatrix(newMatrix);
// // // // //     resetCalculation();
// // // // //   };

// // // // //   const generateRandomMatrix = () => {
// // // // //     const newMatrix = matrix.map(row => 
// // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // //     );
// // // // //     setMatrix(newMatrix);
// // // // //     resetCalculation();
// // // // //   };

// // // // //   const resetCalculation = () => {
// // // // //     setStages([]);
// // // // //     setCurrentStage(0);
// // // // //     setExplanations([]);
// // // // //     setHighlightCells([]);
// // // // //   };

// // // // //   const resetCalculator = () => {
// // // // //     setMatrixSize(3);
// // // // //     setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
// // // // //     resetCalculation();
// // // // //   };

// // // // //   const performGaussJordan = () => {
// // // // //     let m = matrix.map(row => [...row]);
// // // // //     let n = m.length;
// // // // //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// // // // //     let explanations = ["Initial matrix"];

// // // // //     for (let i = 0; i < n; i++) {
// // // // //       // Find pivot
// // // // //       let maxElement = Math.abs(m[i][i]);
// // // // //       let maxRow = i;
// // // // //       for (let k = i + 1; k < n; k++) {
// // // // //         if (Math.abs(m[k][i]) > maxElement) {
// // // // //           maxElement = Math.abs(m[k][i]);
// // // // //           maxRow = k;
// // // // //         }
// // // // //       }

// // // // //       // Swap maximum row with current row
// // // // //       if (maxRow !== i) {
// // // // //         [m[i], m[maxRow]] = [m[maxRow], m[i]];
// // // // //         explanations.push(`Swap row ${i + 1} with row ${maxRow + 1}`);
// // // // //         stages.push({ 
// // // // //           matrix: JSON.parse(JSON.stringify(m)), 
// // // // //           highlight: [[i, 'all'], [maxRow, 'all']]
// // // // //         });
// // // // //       }

// // // // //       // Make all rows below this one 0 in current column
// // // // //       for (let k = i + 1; k < n; k++) {
// // // // //         let c = -m[k][i] / m[i][i];
// // // // //         for (let j = i; j <= n; j++) {
// // // // //           m[k][j] += c * m[i][j];
// // // // //         }
// // // // //       }
// // // // //       explanations.push(`Eliminate below pivot in column ${i + 1}`);
// // // // //       stages.push({ 
// // // // //         matrix: JSON.parse(JSON.stringify(m)), 
// // // // //         highlight: [[i, 'all'], ...Array(n - i - 1).fill().map((_, idx) => [i + idx + 1, i])]
// // // // //       });

// // // // //       // Scale the current row
// // // // //       let scale = m[i][i];
// // // // //       for (let j = i; j <= n; j++) {
// // // // //         m[i][j] /= scale;
// // // // //       }
// // // // //       explanations.push(`Scale row ${i + 1}`);
// // // // //       stages.push({ 
// // // // //         matrix: JSON.parse(JSON.stringify(m)), 
// // // // //         highlight: [[i, 'all']]
// // // // //       });
// // // // //     }

// // // // //     // Back-substitution
// // // // //     for (let i = n - 1; i > 0; i--) {
// // // // //       for (let k = i - 1; k >= 0; k--) {
// // // // //         let c = -m[k][i];
// // // // //         for (let j = i; j <= n; j++) {
// // // // //           m[k][j] += c * m[i][j];
// // // // //         }
// // // // //       }
// // // // //       explanations.push(`Back-substitution for row ${i}`);
// // // // //       stages.push({ 
// // // // //         matrix: JSON.parse(JSON.stringify(m)), 
// // // // //         highlight: Array(i).fill().map((_, idx) => [idx, i])
// // // // //       });
// // // // //     }

// // // // //     setStages(stages);
// // // // //     setExplanations(explanations);
// // // // //     setCurrentStage(0);
// // // // //     setHighlightCells(stages[0].highlight);
// // // // //     setMatrix(stages[0].matrix);
// // // // //   };

// // // // //   const nextStage = () => {
// // // // //     if (currentStage < stages.length - 1) {
// // // // //       const nextStage = currentStage + 1;
// // // // //       setCurrentStage(nextStage);
// // // // //       setHighlightCells(stages[nextStage].highlight);
// // // // //       setMatrix(stages[nextStage].matrix);
// // // // //     }
// // // // //   };

// // // // //   const prevStage = () => {
// // // // //     if (currentStage > 0) {
// // // // //       const prevStage = currentStage - 1;
// // // // //       setCurrentStage(prevStage);
// // // // //       setHighlightCells(stages[prevStage].highlight);
// // // // //       setMatrix(stages[prevStage].matrix);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <div className={styles.sizeSelector}>
// // // // //         Matrix Size:
// // // // //         {matrixSizes.map(size => (
// // // // //           <label key={size} className={styles.radioLabel}>
// // // // //             <input
// // // // //               type="radio"
// // // // //               value={size}
// // // // //               checked={matrixSize === size}
// // // // //               onChange={() => setMatrixSize(size)}
// // // // //               className={styles.radioInput}
// // // // //             />
// // // // //             {size}x{size + 1}
// // // // //           </label>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className={styles.controls}>
// // // // //         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // //         <button className={styles.button} onClick={performGaussJordan}>Solve</button>
// // // // //         <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // //       </div>
// // // // //       <div className={styles.contentContainer}>
// // // // //         <div className={styles.matrixSection}>
// // // // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // // // //             <table className={styles.matrix}>
// // // // //               <tbody>
// // // // //                 {matrix.map((row, i) => (
// // // // //                   <tr key={i}>
// // // // //                     {row.map((cell, j) => (
// // // // //                       <td 
// // // // //                         key={j}
// // // // //                         className={
// // // // //                           highlightCells.some(([x, y]) => 
// // // // //                             (x === i && (y === j || y === 'all')) || 
// // // // //                             (y === j && x === 'all')
// // // // //                           ) ? styles.highlighted : ''
// // // // //                         }
// // // // //                       >
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           value={cell}
// // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // //                           className={styles.matrixInput}
// // // // //                           disabled={stages.length > 0}
// // // // //                         />
// // // // //                       </td>
// // // // //                     ))}
// // // // //                   </tr>
// // // // //                 ))}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //           {stages.length > 0 && (
// // // // //             <div className={styles.stageControls}>
// // // // //               <button onClick={prevStage} disabled={currentStage === 0}>Previous</button>
// // // // //               <span>Stage {currentStage + 1} of {stages.length}</span>
// // // // //               <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next</button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //         {stages.length > 0 && (
// // // // //           <div className={styles.explanationSection}>
// // // // //             <h3>Explanation</h3>
// // // // //             <p>{explanations[currentStage]}</p>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default GaussJordanCalculator;
// // // // 'use client';
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import styles from './GaussJordanCalculator.module.css';

// // // // const GaussJordanCalculator = () => {
// // // //   const [matrixSize, setMatrixSize] = useState(3);
// // // //   const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
// // // //   const [stages, setStages] = useState([]);
// // // //   const [currentStage, setCurrentStage] = useState(0);
// // // //   const [explanations, setExplanations] = useState([]);
// // // //   const [highlightCells, setHighlightCells] = useState([]);
// // // //   const matrixContainerRef = useRef(null);

// // // //   const matrixSizes = [2, 3, 4, 5];

// // // //   useEffect(() => {
// // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
// // // //     resetCalculation();
// // // //   }, [matrixSize]);

// // // //   const handleMatrixChange = (i, j, value) => {
// // // //     const newMatrix = matrix.map(row => [...row]);
// // // //     newMatrix[i][j] = value === '' ? 0 : Number(value);
// // // //     setMatrix(newMatrix);
// // // //     resetCalculation();
// // // //   };

// // // //   const generateRandomMatrix = () => {
// // // //     const newMatrix = matrix.map(row => 
// // // //       row.map(() => Math.floor(Math.random() * 201) - 100)  // Random numbers from -100 to 100
// // // //     );
// // // //     setMatrix(newMatrix);
// // // //     resetCalculation();
// // // //   };

// // // //   const resetCalculation = () => {
// // // //     setStages([]);
// // // //     setCurrentStage(0);
// // // //     setExplanations([]);
// // // //     setHighlightCells([]);
// // // //   };

// // // //   const resetCalculator = () => {
// // // //     setMatrixSize(3);
// // // //     setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
// // // //     resetCalculation();
// // // //   };

// // // //   const performGaussJordan = () => {
// // // //     let m = matrix.map(row => [...row]);
// // // //     let n = m.length;
// // // //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// // // //     let explanations = ["Initial matrix"];

// // // //     for (let i = 0; i < n; i++) {
// // // //       // Find best pivot
// // // //       let bestPivotRow = i;
// // // //       for (let k = i; k < n; k++) {
// // // //         if (Math.abs(m[k][i]) === 1) {
// // // //           bestPivotRow = k;
// // // //           break;
// // // //         } else if (Math.abs(m[k][i]) > Math.abs(m[bestPivotRow][i])) {
// // // //           bestPivotRow = k;
// // // //         }
// // // //       }

// // // //       // Swap with the best pivot row if it's not the current row
// // // //       if (bestPivotRow !== i) {
// // // //         [m[i], m[bestPivotRow]] = [m[bestPivotRow], m[i]];
// // // //         explanations.push(`Swap row ${i + 1} with row ${bestPivotRow + 1} for better pivot`);
// // // //         stages.push({ 
// // // //           matrix: JSON.parse(JSON.stringify(m)), 
// // // //           highlight: [[i, 'all'], [bestPivotRow, 'all']]
// // // //         });
// // // //       }

// // // //       // Scale the current row to make the pivot 1
// // // //       let pivotValue = m[i][i];
// // // //       if (pivotValue !== 1) {
// // // //         for (let j = i; j <= n; j++) {
// // // //           m[i][j] /= pivotValue;
// // // //         }
// // // //         explanations.push(`Scale row ${i + 1} to make pivot 1`);
// // // //         stages.push({ 
// // // //           matrix: JSON.parse(JSON.stringify(m)), 
// // // //           highlight: [[i, 'all']]
// // // //         });
// // // //       }

// // // //       // Eliminate in all other rows
// // // //       for (let k = 0; k < n; k++) {
// // // //         if (k !== i) {
// // // //           let factor = m[k][i];
// // // //           for (let j = i; j <= n; j++) {
// // // //             m[k][j] -= factor * m[i][j];
// // // //           }
// // // //         }
// // // //       }
// // // //       explanations.push(`Eliminate in all rows for column ${i + 1}`);
// // // //       stages.push({ 
// // // //         matrix: JSON.parse(JSON.stringify(m)), 
// // // //         highlight: Array(n).fill().map((_, idx) => idx !== i ? [idx, i] : null).filter(Boolean)
// // // //       });
// // // //     }

// // // //     setStages(stages);
// // // //     setExplanations(explanations);
// // // //     setCurrentStage(0);
// // // //     setHighlightCells(stages[0].highlight);
// // // //     setMatrix(stages[0].matrix);
// // // //   };

// // // //   const nextStage = () => {
// // // //     if (currentStage < stages.length - 1) {
// // // //       const nextStage = currentStage + 1;
// // // //       setCurrentStage(nextStage);
// // // //       setHighlightCells(stages[nextStage].highlight);
// // // //       setMatrix(stages[nextStage].matrix);
// // // //     }
// // // //   };

// // // //   const prevStage = () => {
// // // //     if (currentStage > 0) {
// // // //       const prevStage = currentStage - 1;
// // // //       setCurrentStage(prevStage);
// // // //       setHighlightCells(stages[prevStage].highlight);
// // // //       setMatrix(stages[prevStage].matrix);
// // // //     }
// // // //   };

// // // //     return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.sizeSelector}>
// // // //         Matrix Size:
// // // //         {matrixSizes.map(size => (
// // // //           <label key={size} className={styles.radioLabel}>
// // // //             <input
// // // //               type="radio"
// // // //               value={size}
// // // //               checked={matrixSize === size}
// // // //               onChange={() => setMatrixSize(size)}
// // // //               className={styles.radioInput}
// // // //             />
// // // //             {size}x{size + 1}
// // // //           </label>
// // // //         ))}
// // // //       </div>
// // // //       <div className={styles.controls}>
// // // //         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // //         <button className={styles.button} onClick={performGaussJordan}>Solve</button>
// // // //         <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // //       </div>
// // // //       <div className={styles.contentContainer}>
// // // //         <div className={styles.matrixSection}>
// // // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // // //             <table className={styles.matrix}>
// // // //               <tbody>
// // // //                 {matrix.map((row, i) => (
// // // //                   <tr key={i}>
// // // //                     {row.map((cell, j) => (
// // // //                       <td 
// // // //                         key={j}
// // // //                         className={
// // // //                           highlightCells.some(([x, y]) => 
// // // //                             (x === i && (y === j || y === 'all')) || 
// // // //                             (y === j && x === 'all')
// // // //                           ) ? styles.highlighted : ''
// // // //                         }
// // // //                       >
// // // //                         <input
// // // //                           type="number"
// // // //                           value={cell}
// // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // //                           className={styles.matrixInput}
// // // //                           disabled={stages.length > 0}
// // // //                         />
// // // //                       </td>
// // // //                     ))}
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //           {stages.length > 0 && (
// // // //             <div className={styles.stageControls}>
// // // //               <button onClick={prevStage} disabled={currentStage === 0}>Previous</button>
// // // //               <span>Stage {currentStage + 1} of {stages.length}</span>
// // // //               <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next</button>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //         {stages.length > 0 && (
// // // //           <div className={styles.explanationSection}>
// // // //             <h3>Explanation</h3>
// // // //             <p>{explanations[currentStage]}</p>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default GaussJordanCalculator;
// // // 'use client';
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import styles from './GaussJordanCalculator.module.css';

// // // const GaussJordanCalculator = () => {
// // //   const [matrixSize, setMatrixSize] = useState(3);
// // //   const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
// // //   const [stages, setStages] = useState([]);
// // //   const [currentStage, setCurrentStage] = useState(0);
// // //   const [explanations, setExplanations] = useState([]);
// // //   const [highlightCells, setHighlightCells] = useState([]);
// // //   const matrixContainerRef = useRef(null);

// // //   const matrixSizes = [2, 3, 4, 5];

// // //   useEffect(() => {
// // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
// // //     resetCalculation();
// // //   }, [matrixSize]);

// // //   const handleMatrixChange = (i, j, value) => {
// // //     const newMatrix = matrix.map(row => [...row]);
// // //     newMatrix[i][j] = value === '' ? 0 : Number(value);
// // //     setMatrix(newMatrix);
// // //     resetCalculation();
// // //   };

// // //   const generateRandomMatrix = () => {
// // //     const newMatrix = matrix.map(row => 
// // //       row.map(() => Math.floor(Math.random() * 41) - 20)
// // //     );
// // //     setMatrix(newMatrix);
// // //     resetCalculation();
// // //   };

// // //   const resetCalculation = () => {
// // //     setStages([]);
// // //     setCurrentStage(0);
// // //     setExplanations([]);
// // //     setHighlightCells([]);
// // //   };

// // //   const resetCalculator = () => {
// // //     setMatrixSize(3);
// // //     setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
// // //     resetCalculation();
// // //   };

// // //   const performGaussJordan = () => {
// // //     let m = matrix.map(row => [...row]);
// // //     let n = m.length;
// // //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// // //     let explanations = ["Initial matrix"];

// // //     for (let i = 0; i < n; i++) {
// // //       let oneRow = m.findIndex((row, index) => index >= i && row[i] === 1);
      
// // //       if (oneRow !== -1 && oneRow !== i) {
// // //         [m[i], m[oneRow]] = [m[oneRow], m[i]];
// // //         explanations.push(`Swap row ${i + 1} with row ${oneRow + 1} (coefficient 1 found)`);
// // //         stages.push({ 
// // //           matrix: JSON.parse(JSON.stringify(m)), 
// // //           highlight: [[i, 'all'], [oneRow, 'all']]
// // //         });
// // //       }

// // //       let pivotValue = m[i][i];
// // //       if (pivotValue !== 1 && pivotValue !== 0) {
// // //         for (let j = i; j <= n; j++) {
// // //           m[i][j] /= pivotValue;
// // //         }
// // //         explanations.push(`Scale row ${i + 1} to make pivot 1`);
// // //         stages.push({ 
// // //           matrix: JSON.parse(JSON.stringify(m)), 
// // //           highlight: [[i, 'all']]
// // //         });
// // //       }

// // //       for (let k = 0; k < n; k++) {
// // //         if (k !== i && m[i][i] !== 0) {
// // //           let factor = m[k][i];
// // //           for (let j = i; j <= n; j++) {
// // //             m[k][j] -= factor * m[i][j];
// // //           }
// // //         }
// // //       }
// // //       explanations.push(`Eliminate in all rows for column ${i + 1}`);
// // //       stages.push({ 
// // //         matrix: JSON.parse(JSON.stringify(m)), 
// // //         highlight: Array(n).fill().map((_, idx) => idx !== i ? [idx, i] : null).filter(Boolean)
// // //       });
// // //     }

// // //     setStages(stages);
// // //     setExplanations(explanations);
// // //     setCurrentStage(0);
// // //     setHighlightCells(stages[0].highlight);
// // //     setMatrix(stages[0].matrix);
// // //   };

// // //   const nextStage = () => {
// // //     if (currentStage < stages.length - 1) {
// // //       const nextStage = currentStage + 1;
// // //       setCurrentStage(nextStage);
// // //       setHighlightCells(stages[nextStage].highlight);
// // //       setMatrix(stages[nextStage].matrix);
// // //     }
// // //   };

// // //   const prevStage = () => {
// // //     if (currentStage > 0) {
// // //       const prevStage = currentStage - 1;
// // //       setCurrentStage(prevStage);
// // //       setHighlightCells(stages[prevStage].highlight);
// // //       setMatrix(stages[prevStage].matrix);
// // //     }
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.sizeSelector}>
// // //         Matrix Size:
// // //         {matrixSizes.map(size => (
// // //           <label key={size} className={styles.radioLabel}>
// // //             <input
// // //               type="radio"
// // //               value={size}
// // //               checked={matrixSize === size}
// // //               onChange={() => setMatrixSize(size)}
// // //               className={styles.radioInput}
// // //             />
// // //             {size}x{size + 1}
// // //           </label>
// // //         ))}
// // //       </div>
// // //       <div className={styles.controls}>
// // //         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // //         <button className={styles.button} onClick={performGaussJordan}>Solve</button>
// // //         <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // //       </div>
// // //       <div className={styles.contentContainer}>
// // //         <div className={styles.matrixSection}>
// // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // //             <table className={styles.matrix}>
// // //               <tbody>
// // //                 {matrix.map((row, i) => (
// // //                   <tr key={i}>
// // //                     {row.map((cell, j) => (
// // //                       <td 
// // //                         key={j}
// // //                         className={
// // //                           highlightCells.some(([x, y]) => 
// // //                             (x === i && (y === j || y === 'all')) || 
// // //                             (y === j && x === 'all')
// // //                           ) ? styles.highlighted : ''
// // //                         }
// // //                       >
// // //                         <input
// // //                           type="number"
// // //                           value={cell}
// // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // //                           className={styles.matrixInput}
// // //                           disabled={stages.length > 0}
// // //                         />
// // //                       </td>
// // //                     ))}
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //           {stages.length > 0 && (
// // //             <div className={styles.stageControls}>
// // //               <button onClick={prevStage} disabled={currentStage === 0}>Previous</button>
// // //               <span>Stage {currentStage + 1} of {stages.length}</span>
// // //               <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next</button>
// // //             </div>
// // //           )}
// // //         </div>
// // //         {stages.length > 0 && (
// // //           <div className={styles.explanationSection}>
// // //             <h3>Explanation</h3>
// // //             <p>{explanations[currentStage]}</p>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default GaussJordanCalculator;
// // 'use client';
// // import React, { useState, useEffect, useRef } from 'react';
// // import styles from './GaussJordanCalculator.module.css';

// // const GaussJordanCalculator = () => {
// //   const [matrixSize, setMatrixSize] = useState(3);
// //   const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
// //   const [stages, setStages] = useState([]);
// //   const [currentStage, setCurrentStage] = useState(0);
// //   const [explanations, setExplanations] = useState([]);
// //   const [highlightCells, setHighlightCells] = useState([]);
// //   const matrixContainerRef = useRef(null);

// //   const matrixSizes = [2, 3, 4, 5];

// //   useEffect(() => {
// //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
// //     resetCalculation();
// //   }, [matrixSize]);

// //   const handleMatrixChange = (i, j, value) => {
// //     const newMatrix = matrix.map(row => [...row]);
// //     newMatrix[i][j] = value === '' ? 0 : Number(value);
// //     setMatrix(newMatrix);
// //     resetCalculation();
// //   };

// //   const generateRandomMatrix = () => {
// //     const newMatrix = matrix.map(row => 
// //       row.map(() => Math.floor(Math.random() * 41) - 20)
// //     );
// //     setMatrix(newMatrix);
// //     resetCalculation();
// //   };

// //   const resetCalculation = () => {
// //     setStages([]);
// //     setCurrentStage(0);
// //     setExplanations([]);
// //     setHighlightCells([]);
// //   };

// //   const resetCalculator = () => {
// //     setMatrixSize(3);
// //     setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
// //     resetCalculation();
// //   };

// //   const convertToEchelonForm = () => {
// //     let m = matrix.map(row => [...row]);
// //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// //     let explanations = ["Initial matrix"];

// //     const rows = m.length;
// //     const cols = m[0].length;

// //     let lead = 0;
// //     for (let r = 0; r < rows; r++) {
// //       if (lead >= cols) {
// //         break;
// //       }
// //       let i = r;
// //       while (m[i][lead] === 0) {
// //         i++;
// //         if (i === rows) {
// //           i = r;
// //           lead++;
// //           if (cols === lead) {
// //             setStages(stages);
// //             setExplanations(explanations);
// //             setCurrentStage(0);
// //             setHighlightCells(stages[0].highlight);
// //             setMatrix(stages[0].matrix);
// //             return;
// //           }
// //         }
// //       }
// //       if (i !== r) {
// //         [m[i], m[r]] = [m[r], m[i]];
// //         explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
// //         stages.push({ 
// //           matrix: JSON.parse(JSON.stringify(m)), 
// //           highlight: [[r, 'all'], [i, 'all']]
// //         });
// //       }

// //       let val = m[r][lead];
// //       for (let j = 0; j < cols; j++) {
// //         m[r][j] /= val;
// //       }
// //       explanations.push(`Scale row ${r + 1}`);
// //       stages.push({ 
// //         matrix: JSON.parse(JSON.stringify(m)), 
// //         highlight: [[r, 'all']]
// //       });

// //       for (let i = r + 1; i < rows; i++) {
// //         val = m[i][lead];
// //         for (let j = 0; j < cols; j++) {
// //           m[i][j] -= val * m[r][j];
// //         }
// //         explanations.push(`Eliminate in row ${i + 1} using row ${r + 1}`);
// //         stages.push({ 
// //           matrix: JSON.parse(JSON.stringify(m)), 
// //           highlight: [[i, 'all'], [r, 'all']]
// //         });
// //       }
// //       lead++;
// //     }

// //     setStages(stages);
// //     setExplanations(explanations);
// //     setCurrentStage(0);
// //     setHighlightCells(stages[0].highlight);
// //     setMatrix(stages[0].matrix);
// //   };

// //   const convertToReducedEchelonForm = () => {
// //     let m = matrix.map(row => [...row]);
// //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// //     let explanations = ["Initial matrix"];

// //     const rows = m.length;
// //     const cols = m[0].length;

// //     let lead = 0;
// //     for (let r = 0; r < rows; r++) {
// //       if (lead >= cols) {
// //         break;
// //       }
// //       let i = r;
// //       while (m[i][lead] === 0) {
// //         i++;
// //         if (i === rows) {
// //           i = r;
// //           lead++;
// //           if (cols === lead) {
// //             setStages(stages);
// //             setExplanations(explanations);
// //             setCurrentStage(0);
// //             setHighlightCells(stages[0].highlight);
// //             setMatrix(stages[0].matrix);
// //             return;
// //           }
// //         }
// //       }
// //       if (i !== r) {
// //         [m[i], m[r]] = [m[r], m[i]];
// //         explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
// //         stages.push({ 
// //           matrix: JSON.parse(JSON.stringify(m)), 
// //           highlight: [[r, 'all'], [i, 'all']]
// //         });
// //       }

// //       let val = m[r][lead];
// //       for (let j = 0; j < cols; j++) {
// //         m[r][j] /= val;
// //       }
// //       explanations.push(`Scale row ${r + 1}`);
// //       stages.push({ 
// //         matrix: JSON.parse(JSON.stringify(m)), 
// //         highlight: [[r, 'all']]
// //       });

// //       for (let i = 0; i < rows; i++) {
// //         if (i !== r) {
// //           val = m[i][lead];
// //           for (let j = 0; j < cols; j++) {
// //             m[i][j] -= val * m[r][j];
// //           }
// //           explanations.push(`Eliminate in row ${i + 1} using row ${r + 1}`);
// //           stages.push({ 
// //             matrix: JSON.parse(JSON.stringify(m)), 
// //             highlight: [[i, 'all'], [r, 'all']]
// //           });
// //         }
// //       }
// //       lead++;
// //     }

// //     setStages(stages);
// //     setExplanations(explanations);
// //     setCurrentStage(0);
// //     setHighlightCells(stages[0].highlight);
// //     setMatrix(stages[0].matrix);
// //   };

// //   const nextStage = () => {
// //     if (currentStage < stages.length - 1) {
// //       const nextStage = currentStage + 1;
// //       setCurrentStage(nextStage);
// //       setHighlightCells(stages[nextStage].highlight);
// //       setMatrix(stages[nextStage].matrix);
// //     }
// //   };

// //   const prevStage = () => {
// //     if (currentStage > 0) {
// //       const prevStage = currentStage - 1;
// //       setCurrentStage(prevStage);
// //       setHighlightCells(stages[prevStage].highlight);
// //       setMatrix(stages[prevStage].matrix);
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.sizeSelector}>
// //         Matrix Size:
// //         {matrixSizes.map(size => (
// //           <label key={size} className={styles.radioLabel}>
// //             <input
// //               type="radio"
// //               value={size}
// //               checked={matrixSize === size}
// //               onChange={() => setMatrixSize(size)}
// //               className={styles.radioInput}
// //             />
// //             {size}x{size + 1}
// //           </label>
// //         ))}
// //       </div>
// //       <div className={styles.controls}>
// //         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// //         <button className={styles.button} onClick={convertToEchelonForm}>Convert to Echelon Form</button>
// //         <button className={styles.button} onClick={convertToReducedEchelonForm}>Convert to Reduced Echelon Form</button>
// //         <button className={styles.button} onClick={resetCalculator}>Reset</button>
// //       </div>
// //       <div className={styles.contentContainer}>
// //         <div className={styles.matrixSection}>
// //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// //             <table className={styles.matrix}>
// //               <tbody>
// //                 {matrix.map((row, i) => (
// //                   <tr key={i}>
// //                     {row.map((cell, j) => (
// //                       <td 
// //                         key={j}
// //                         className={
// //                           highlightCells.some(([x, y]) => 
// //                             (x === i && (y === j || y === 'all')) || 
// //                             (y === j && x === 'all')
// //                           ) ? styles.highlighted : ''
// //                         }
// //                       >
// //                         <input
// //                           type="number"
// //                           value={cell}
// //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// //                           className={styles.matrixInput}
// //                           disabled={stages.length > 0}
// //                         />
// //                       </td>
// //                     ))}
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //           {stages.length > 0 && (
// //             <div className={styles.stageControls}>
// //               <button onClick={prevStage} disabled={currentStage === 0}>Previous</button>
// //               <span>Stage {currentStage + 1} of {stages.length}</span>
// //               <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next</button>
// //             </div>
// //           )}
// //         </div>
// //         {stages.length > 0 && (
// //           <div className={styles.explanationSection}>
// //             <h3>Explanation</h3>
// //             <p>{explanations[currentStage]}</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GaussJordanCalculator;
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import styles from './GaussJordanCalculator.module.css';

// const GaussJordanCalculator = () => {
//   const [matrixSize, setMatrixSize] = useState(3);
//   const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
//   const [stages, setStages] = useState([]);
//   const [currentStage, setCurrentStage] = useState(0);
//   const [explanations, setExplanations] = useState([]);
//   const [highlightCells, setHighlightCells] = useState([]);
//   const matrixContainerRef = useRef(null);

//   const matrixSizes = [2, 3, 4, 5];

//   const echelonFormTooltip = `Echelon Form requirements:
// 1. All rows consisting of only zeroes are at the bottom of the matrix
// 2. The leading entry (pivot) of a nonzero row is always strictly to the right of the leading entry of the row above it
// 3. All entries in a column below a leading entry are zeros`;

//   const reducedEchelonFormTooltip = `Reduced Echelon Form requirements:
// 1. The matrix is in echelon form
// 2. The leading entry in each nonzero row is 1 (called a leading 1)
// 3. Each column containing a leading 1 has zeros in all its other entries (both above and below the leading 1)`;

//   useEffect(() => {
//     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
//     resetCalculation();
//   }, [matrixSize]);

//   const handleMatrixChange = (i, j, value) => {
//     const newMatrix = matrix.map(row => [...row]);
//     newMatrix[i][j] = value === '' ? 0 : Number(value);
//     setMatrix(newMatrix);
//     resetCalculation();
//   };

//   const generateRandomMatrix = () => {
//     const newMatrix = matrix.map(row => 
//       row.map(() => Math.floor(Math.random() * 41) - 20)
//     );
//     setMatrix(newMatrix);
//     resetCalculation();
//   };

//   const resetCalculation = () => {
//     setStages([]);
//     setCurrentStage(0);
//     setExplanations([]);
//     setHighlightCells([]);
//   };

//   const resetCalculator = () => {
//     setMatrixSize(3);
//     setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
//     resetCalculation();
//   };

//   const convertToEchelonForm = () => {
//     let m = matrix.map(row => [...row]);
//     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
//     let explanations = ["Initial matrix"];

//     const rows = m.length;
//     const cols = m[0].length;

//     let lead = 0;
//     for (let r = 0; r < rows; r++) {
//       if (lead >= cols) {
//         break;
//       }
//       let i = r;
//       while (m[i][lead] === 0) {
//         i++;
//         if (i === rows) {
//           i = r;
//           lead++;
//           if (cols === lead) {
//             setStages(stages);
//             setExplanations(explanations);
//             setCurrentStage(0);
//             setHighlightCells(stages[0].highlight);
//             setMatrix(stages[0].matrix);
//             return;
//           }
//         }
//       }
//       if (i !== r) {
//         [m[i], m[r]] = [m[r], m[i]];
//         explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
//         stages.push({ 
//           matrix: JSON.parse(JSON.stringify(m)), 
//           highlight: [[r, 'all'], [i, 'all']]
//         });
//       }

//       let val = m[r][lead];
//       for (let j = 0; j < cols; j++) {
//         m[r][j] /= val;
//       }
//       explanations.push(`Scale row ${r + 1}`);
//       stages.push({ 
//         matrix: JSON.parse(JSON.stringify(m)), 
//         highlight: [[r, 'all']]
//       });

//       for (let i = r + 1; i < rows; i++) {
//         val = m[i][lead];
//         for (let j = 0; j < cols; j++) {
//           m[i][j] -= val * m[r][j];
//         }
//         explanations.push(`Eliminate in row ${i + 1} using row ${r + 1}`);
//         stages.push({ 
//           matrix: JSON.parse(JSON.stringify(m)), 
//           highlight: [[i, 'all'], [r, 'all']]
//         });
//       }
//       lead++;
//     }

//     setStages(stages);
//     setExplanations(explanations);
//     setCurrentStage(0);
//     setHighlightCells(stages[0].highlight);
//     setMatrix(stages[0].matrix);
//   };

//   const convertToReducedEchelonForm = () => {
//     let m = matrix.map(row => [...row]);
//     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
//     let explanations = ["Initial matrix"];

//     const rows = m.length;
//     const cols = m[0].length;

//     let lead = 0;
//     for (let r = 0; r < rows; r++) {
//       if (lead >= cols) {
//         break;
//       }
//       let i = r;
//       while (m[i][lead] === 0) {
//         i++;
//         if (i === rows) {
//           i = r;
//           lead++;
//           if (cols === lead) {
//             setStages(stages);
//             setExplanations(explanations);
//             setCurrentStage(0);
//             setHighlightCells(stages[0].highlight);
//             setMatrix(stages[0].matrix);
//             return;
//           }
//         }
//       }
//       if (i !== r) {
//         [m[i], m[r]] = [m[r], m[i]];
//         explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
//         stages.push({ 
//           matrix: JSON.parse(JSON.stringify(m)), 
//           highlight: [[r, 'all'], [i, 'all']]
//         });
//       }

//       let val = m[r][lead];
//       for (let j = 0; j < cols; j++) {
//         m[r][j] /= val;
//       }
//       explanations.push(`Scale row ${r + 1}`);
//       stages.push({ 
//         matrix: JSON.parse(JSON.stringify(m)), 
//         highlight: [[r, 'all']]
//       });

//       for (let i = 0; i < rows; i++) {
//         if (i !== r) {
//           val = m[i][lead];
//           for (let j = 0; j < cols; j++) {
//             m[i][j] -= val * m[r][j];
//           }
//           explanations.push(`Eliminate in row ${i + 1} using row ${r + 1}`);
//           stages.push({ 
//             matrix: JSON.parse(JSON.stringify(m)), 
//             highlight: [[i, 'all'], [r, 'all']]
//           });
//         }
//       }
//       lead++;
//     }

//     setStages(stages);
//     setExplanations(explanations);
//     setCurrentStage(0);
//     setHighlightCells(stages[0].highlight);
//     setMatrix(stages[0].matrix);
//   };

//   const nextStage = () => {
//     if (currentStage < stages.length - 1) {
//       const nextStage = currentStage + 1;
//       setCurrentStage(nextStage);
//       setHighlightCells(stages[nextStage].highlight);
//       setMatrix(stages[nextStage].matrix);
//     }
//   };

//   const prevStage = () => {
//     if (currentStage > 0) {
//       const prevStage = currentStage - 1;
//       setCurrentStage(prevStage);
//       setHighlightCells(stages[prevStage].highlight);
//       setMatrix(stages[prevStage].matrix);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.sizeSelector}>
//         Matrix Size:
//         {matrixSizes.map(size => (
//           <label key={size} className={styles.radioLabel}>
//             <input
//               type="radio"
//               value={size}
//               checked={matrixSize === size}
//               onChange={() => setMatrixSize(size)}
//               className={styles.radioInput}
//             />
//             {size}x{size + 1}
//           </label>
//         ))}
//       </div>
//       <div className={styles.controls}>
//         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
//         {/* <button 
//           className={styles.button} 
//           onClick={convertToEchelonForm}
//           title={echelonFormTooltip}
//         >
//           Transform to Echelon Form
//           <span className={styles.tooltip}>{echelonFormTooltip}</span>
//         </button> */}
//         {/* <button 
//           className={styles.button} 
//           onClick={convertToReducedEchelonForm}
//           title={reducedEchelonFormTooltip}
//         >
//           Transform to Reduced Echelon Form
//         </button> */}

//         {/* <span className={styles.tooltipContainer}>
//         <button 
//             className={styles.button} 
//             onClick={convertToEchelonForm}
//         >
//             Transform to Echelon Form
//         </button>
//         <span className={styles.tooltip}>
//             Echelon Form requirements:
//             1. All rows consisting of only zeroes are at the bottom of the matrix
//             2. The leading entry (pivot) of a nonzero row is always strictly to the right of the leading entry of the row above it
//             3. All entries in a column below a leading entry are zeros
//         </span>
//         </span>

//         <span className={styles.tooltipContainer}>
//         <button 
//             className={styles.button} 
//             onClick={convertToReducedEchelonForm}
//         >
//             Transform to Reduced Echelon Form
//         </button>
//         <span className={styles.tooltip}>
//             Reduced Echelon Form requirements:
//             1. The matrix is in echelon form
//             2. The leading entry in each nonzero row is 1 (called a leading 1)
//             3. Each column containing a leading 1 has zeros in all its other entries (both above and below the leading 1)
//         </span>
//         </span> */}
//         <div className={styles.buttonGroup}>
//             <button 
//                 className={styles.button} 
//                 onClick={convertToEchelonForm}
//             >
//                 Transform to Echelon Form
//             </button>
//             <span className={styles.tooltipContainer}>
//                 <span className={styles.questionMark}>?</span>
//                 <span className={styles.tooltip}>
//                 Echelon Form requirements:
//                 1. All rows consisting of only zeroes are at the bottom of the matrix
//                 2. The leading entry (pivot) of a nonzero row is always strictly to the right of the leading entry of the row above it
//                 3. All entries in a column below a leading entry are zeros
//                 </span>
//             </span>
//             </div>

//             <div className={styles.buttonGroup}>
//             <button 
//                 className={styles.button} 
//                 onClick={convertToReducedEchelonForm}
//             >
//                 Transform to Reduced Echelon Form
//             </button>
//             <span className={styles.tooltipContainer}>
//                 <span className={styles.questionMark}>?</span>
//                 <span className={styles.tooltip}>
//                 Reduced Echelon Form requirements:
//                 1. The matrix is in echelon form
//                 2. The leading entry in each nonzero row is 1 (called a leading 1)
//                 3. Each column containing a leading 1 has zeros in all its other entries (both above and below the leading 1)
//                 </span>
//             </span>
//             </div>

//         <button className={styles.button} onClick={resetCalculator}>Reset</button>
//       </div>
//       <div className={styles.contentContainer}>
//         <div className={styles.matrixSection}>
//           <div className={styles.matrixContainer} ref={matrixContainerRef}>
//             <table className={styles.matrix}>
//               <tbody>
//                 {matrix.map((row, i) => (
//                   <tr key={i}>
//                     {row.map((cell, j) => (
//                       <td 
//                         key={j}
//                         className={
//                           highlightCells.some(([x, y]) => 
//                             (x === i && (y === j || y === 'all')) || 
//                             (y === j && x === 'all')
//                           ) ? styles.highlighted : ''
//                         }
//                       >
//                         <input
//                           type="number"
//                           value={cell}
//                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
//                           className={styles.matrixInput}
//                           disabled={stages.length > 0}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {stages.length > 0 && (
//             <div className={styles.stageControls}>
//               <button onClick={prevStage} disabled={currentStage === 0}>Previous</button>
//               <span>Stage {currentStage + 1} of {stages.length}</span>
//               <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next</button>
//             </div>
//           )}
//         </div>
//         {stages.length > 0 && (
//           <div className={styles.explanationSection}>
//             <h3>Explanation</h3>
//             <p>{explanations[currentStage]}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GaussJordanCalculator;
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import styles from './GaussJordanCalculator.module.css';

// const GaussJordanCalculator = () => {
//   const [matrixSize, setMatrixSize] = useState(3);
//   const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
//   const [stages, setStages] = useState([]);
//   const [currentStage, setCurrentStage] = useState(0);
//   const [explanations, setExplanations] = useState([]);
//   const [highlightCells, setHighlightCells] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [error, setError] = useState('');
//   const matrixContainerRef = useRef(null);
//   const playIntervalRef = useRef(null);

//   const matrixSizes = [2, 3, 4, 5];

//   useEffect(() => {
//     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
//     resetCalculation();
//   }, [matrixSize]);

//   useEffect(() => {
//     if (isPlaying && currentStage < stages.length - 1) {
//       playIntervalRef.current = setInterval(() => {
//         setCurrentStage(prev => {
//           if (prev < stages.length - 1) {
//             return prev + 1;
//           } else {
//             setIsPlaying(false);
//             return prev;
//           }
//         });
//       }, 1000);
//     } else {
//       clearInterval(playIntervalRef.current);
//     }

//     return () => clearInterval(playIntervalRef.current);
//   }, [isPlaying, currentStage, stages.length]);

//   useEffect(() => {
//     if (stages.length > 0) {
//       setHighlightCells(stages[currentStage].highlight);
//       setMatrix(stages[currentStage].matrix);
//     }
//   }, [currentStage, stages]);

//   const handleMatrixChange = (i, j, value) => {
//     const newMatrix = matrix.map(row => [...row]);
//     newMatrix[i][j] = value === '' ? 0 : Number(value);
//     setMatrix(newMatrix);
//     resetCalculation();
//   };

//   const generateRandomMatrix = () => {
//     const newMatrix = matrix.map(row => 
//       row.map(() => Math.floor(Math.random() * 41) - 20)
//     );
//     setMatrix(newMatrix);
//     resetCalculation();
//   };

//   const resetCalculation = () => {
//     setStages([]);
//     setCurrentStage(0);
//     setExplanations([]);
//     setHighlightCells([]);
//     setError('');
//     setIsPlaying(false);
//   };

//   const resetCalculator = () => {
//     setMatrixSize(3);
//     setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
//     resetCalculation();
//   };

//   const isZeroMatrix = (m) => m.every(row => row.every(cell => cell === 0));

//   const convertToEchelonForm = () => {
//     if (isZeroMatrix(matrix)) {
//       setError('Error: Cannot transform a zero matrix.Generate Random Matrix or Input Values Manually');
//       return;
//     }
//     performElimination(false);
//   };

//   const convertToReducedEchelonForm = () => {
//     if (isZeroMatrix(matrix)) {
//       setError('Error: Cannot transform a zero matrix.Generate Random Matrix or Input Values Manually.');
//       return;
//     }
//     performElimination(true);
//   };

// //   const performElimination = (isReduced) => {
// //     let m = matrix.map(row => [...row]);
// //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// //     let explanations = ["Initial matrix"];

// //     const rows = m.length;
// //     const cols = m[0].length;

// //     let lead = 0;
// //     for (let r = 0; r < rows; r++) {
// //       if (lead >= cols) {
// //         break;
// //       }
// //       let i = r;
// //       while (m[i][lead] === 0) {
// //         i++;
// //         if (i === rows) {
// //           i = r;
// //           lead++;
// //           if (cols === lead) {
// //             setStages(stages);
// //             setExplanations(explanations);
// //             setCurrentStage(0);
// //             return;
// //           }
// //         }
// //       }
// //       if (i !== r) {
// //         [m[i], m[r]] = [m[r], m[i]];
// //         explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
// //         stages.push({ 
// //           matrix: JSON.parse(JSON.stringify(m)), 
// //           highlight: [[r, 'all'], [i, 'all']]
// //         });
// //       }

// //       let val = m[r][lead];
// //       for (let j = 0; j < cols; j++) {
// //         m[r][j] /= val;
// //       }
// //       explanations.push(`Scale row ${r + 1}`);
// //       stages.push({ 
// //         matrix: JSON.parse(JSON.stringify(m)), 
// //         highlight: [[r, 'all']]
// //       });

// //       for (let i = isReduced ? 0 : r + 1; i < rows; i++) {
// //         if (i !== r) {
// //           val = m[i][lead];
// //           for (let j = 0; j < cols; j++) {
// //             m[i][j] -= val * m[r][j];
// //           }
// //           explanations.push(`Eliminate in row ${i + 1} using row ${r + 1}`);
// //           stages.push({ 
// //             matrix: JSON.parse(JSON.stringify(m)), 
// //             highlight: [[i, 'all'], [r, 'all']]
// //           });
// //         }
// //       }
// //       lead++;
// //     }

// //     setStages(stages);
// //     setExplanations(explanations);
// //     setCurrentStage(0);
// //     setError('');
// //   };

// // const performElimination = (isReduced) => {
// //     let m = matrix.map(row => [...row]);
// //     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
// //     let explanations = ["Initial matrix"];
  
// //     const rows = m.length;
// //     const cols = m[0].length;
  
// //     let lead = 0;
// //     for (let r = 0; r < rows; r++) {
// //       if (lead >= cols) {
// //         break;
// //       }
// //       let i = r;
// //       while (m[i][lead] === 0) {
// //         i++;
// //         if (i === rows) {
// //           i = r;
// //           lead++;
// //           if (cols === lead) {
// //             setStages(stages);
// //             setExplanations(explanations);
// //             setCurrentStage(0);
// //             return;
// //           }
// //         }
// //       }
// //       if (i !== r) {
// //         [m[i], m[r]] = [m[r], m[i]];
// //         explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
// //         stages.push({ 
// //           matrix: JSON.parse(JSON.stringify(m)), 
// //           highlight: [[r, 'all'], [i, 'all']]
// //         });
// //       }
  
// //       let val = m[r][lead];
// //       if (val !== 1) {
// //         let scaleFactor = 1 / val;
// //         let oldRow = [...m[r]];
// //         for (let j = 0; j < cols; j++) {
// //           m[r][j] *= scaleFactor;
// //         }
// //         explanations.push(`Scale row ${r + 1} by dividing each element by ${val.toFixed(2)}:
// //           [${oldRow.map(x => x.toFixed(2)).join(', ')}]
// //           becomes
// //           [${m[r].map(x => x.toFixed(2)).join(', ')}]`);
// //         stages.push({ 
// //           matrix: JSON.parse(JSON.stringify(m)), 
// //           highlight: [[r, 'all']]
// //         });
// //       }
  
// //       for (let i = isReduced ? 0 : r + 1; i < rows; i++) {
// //         if (i !== r) {
// //           val = m[i][lead];
// //           if (val !== 0) {
// //             let oldRow = [...m[i]];
// //             for (let j = 0; j < cols; j++) {
// //               m[i][j] -= val * m[r][j];
// //             }
// //             explanations.push(`Eliminate in row ${i + 1} using row ${r + 1}:
// //               Subtract ${val.toFixed(2)} times row ${r + 1} from row ${i + 1}:
// //               [${oldRow.map(x => x.toFixed(2)).join(', ')}]
// //               becomes
// //               [${m[i].map(x => x.toFixed(2)).join(', ')}]`);
// //             stages.push({ 
// //               matrix: JSON.parse(JSON.stringify(m)), 
// //               highlight: [[i, 'all'], [r, 'all']]
// //             });
// //           }
// //         }
// //       }
// //       lead++;
// //     }
  
// //     setStages(stages);
// //     setExplanations(explanations);
// //     setCurrentStage(0);
// //     setError('');
// //   }; 

// const performElimination = (isReduced) => {
//     let m = matrix.map(row => [...row]);
//     let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
//     let explanations = ["Initial matrix"];
  
//     const rows = m.length;
//     const cols = m[0].length;
  
//     let lead = 0;
//     for (let r = 0; r < rows; r++) {
//       if (lead >= cols) {
//         break;
//       }
//       let i = r;
//       while (m[i][lead] === 0) {
//         i++;
//         if (i === rows) {
//           i = r;
//           lead++;
//           if (cols === lead) {
//             setStages(stages);
//             setExplanations(explanations);
//             setCurrentStage(0);
//             return;
//           }
//         }
//       }
//       if (i !== r) {
//         [m[i], m[r]] = [m[r], m[i]];
//         explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
//         stages.push({ 
//           matrix: JSON.parse(JSON.stringify(m)), 
//           highlight: [[r, 'all'], [i, 'all']]
//         });
//       }
  
//       let val = m[r][lead];
//       if (val !== 1) {
//         let scaleFactor = 1 / val;
//         let oldRow = [...m[r]];
//         for (let j = 0; j < cols; j++) {
//           m[r][j] *= scaleFactor;
//         }
//         // explanations.push(`Scale row ${r + 1} by dividing each element by ${val.toFixed(2)}:<br/>
//         //   [${oldRow.map(x => x.toFixed(2)).join(', ')}]<br/>
//         //   becomes<br/>
//         //   [${m[r].map(x => x.toFixed(2)).join(', ')}]`);
//         explanations.push(`<div class="step-explanation">
//             <span class="step-title">Scale row ${r + 1}</span> by dividing each element by <span class="highlight-value">${val.toFixed(2)}</span>:<br/>
//             <div class="row-transformation">
//                 <span class="old-row">[${oldRow.map(x => x.toFixed(2)).join(', ')}]</span><br/>
//                 <span class="becomes">becomes</span><br/>
//                 <span class="new-row">[${m[r].map(x => x.toFixed(2)).join(', ')}]</span>
//             </div>
//             </div>`);
//         stages.push({ 
//           matrix: JSON.parse(JSON.stringify(m)), 
//           highlight: [[r, 'all']]
//         });
//       }
  
//       for (let i = isReduced ? 0 : r + 1; i < rows; i++) {
//         if (i !== r) {
//           val = m[i][lead];
//           if (val !== 0) {
//             let oldRow = [...m[i]];
//             for (let j = 0; j < cols; j++) {
//               m[i][j] -= val * m[r][j];
//             }
//             // explanations.push(`Eliminate in row ${i + 1} using row ${r + 1}:<br/>
//             //   Subtract ${val.toFixed(2)} times row ${r + 1} from row ${i + 1}:<br/>
//             //   [${oldRow.map(x => x.toFixed(2)).join(', ')}]<br/>
//             //   becomes<br/>
//             //   [${m[i].map(x => x.toFixed(2)).join(', ')}]`);
//             explanations.push(`<div class="step-explanation">
//                 <span class="step-title">Eliminate in row ${i + 1} using row ${r + 1}:</span><br/>
//                 Subtract <span class="highlight-value">${val.toFixed(2)}</span> times row ${r + 1} from row ${i + 1}:<br/>
//                 <div class="row-transformation">
//                     <span class="old-row">[${oldRow.map(x => x.toFixed(2)).join(', ')}]</span><br/>
//                     <span class="becomes">becomes</span><br/>
//                     <span class="new-row">[${m[i].map(x => x.toFixed(2)).join(', ')}]</span>
//                 </div>
//                 </div>`);
//             stages.push({ 
//               matrix: JSON.parse(JSON.stringify(m)), 
//               highlight: [[i, 'all'], [r, 'all']]
//             });
//           }
//         }
//       }
//       lead++;
//     }
  
//     setStages(stages);
//     setExplanations(explanations);
//     setCurrentStage(0);
//     setError('');
//   };

// const nextStage = () => {
//     if (currentStage < stages.length - 1) {
//       setCurrentStage(currentStage + 1);
//     }
//   };

//   const prevStage = () => {
//     if (currentStage > 0) {
//       setCurrentStage(currentStage - 1);
//     }
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.sizeSelector}>
//         Matrix Size:
//         {matrixSizes.map(size => (
//           <label key={size} className={styles.radioLabel}>
//             <input
//               type="radio"
//               value={size}
//               checked={matrixSize === size}
//               onChange={() => setMatrixSize(size)}
//               className={styles.radioInput}
//             />
//             {size}x{size + 1}
//           </label>
//         ))}
//       </div>
//       <div className={styles.controls}>
//         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
//         <div className={styles.buttonGroup}>
//           <button 
//             className={styles.button} 
//             onClick={convertToEchelonForm}
//           >
//             Transform to Echelon Form
//           </button>
//           <span className={styles.tooltipContainer}>
//             <span className={styles.questionMark}>?</span>
//             <span className={styles.tooltip}>
//               Echelon Form requirements:
//               1. All rows consisting of only zeroes are at the bottom of the matrix
//               2. The leading entry (pivot) of a nonzero row is always strictly to the right of the leading entry of the row above it
//               3. All entries in a column below a leading entry are zeros
//             </span>
//           </span>
//         </div>
//         <div className={styles.buttonGroup}>
//           <button 
//             className={styles.button} 
//             onClick={convertToReducedEchelonForm}
//           >
//             Transform to Reduced Echelon Form
//           </button>
//           <span className={styles.tooltipContainer}>
//             <span className={styles.questionMark}>?</span>
//             <span className={styles.tooltip}>
//               Reduced Echelon Form requirements:
//               1. The matrix is in echelon form
//               2. The leading entry in each nonzero row is 1 (called a leading 1)
//               3. Each column containing a leading 1 has zeros in all its other entries (both above and below the leading 1)
//             </span>
//           </span>
//         </div>
//         <button className={styles.resetButton} onClick={resetCalculator}>Reset</button>
//       </div>
//       <br></br>
//       <div className={styles.contentContainer}>
//         <div className={styles.matrixSection}>
//           <div className={styles.matrixContainer} ref={matrixContainerRef}>
//             <table className={styles.matrix}>
//               <tbody>
//                 {matrix.map((row, i) => (
//                   <tr key={i}>
//                     {row.map((cell, j) => (
//                       <td 
//                         key={j}
//                         className={
//                           highlightCells.some(([x, y]) => 
//                             (x === i && (y === j || y === 'all')) || 
//                             (y === j && x === 'all')
//                           ) ? styles.highlighted : ''
//                         }
//                       >
//                         <input
//                           type="number"
//                           value={cell}
//                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
//                           className={styles.matrixInput}
//                           disabled={stages.length > 0}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <br></br>
//                 <br></br>
//                 <br></br>
//           {stages.length > 0 && (
//             <div className={styles.stageControls}>
               
//               <button onClick={prevStage} disabled={currentStage === 0}>❮ Previous</button>
//               <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//               <span>Stage {currentStage + 1} of {stages.length}</span>
//               <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next ❯</button>
//             </div>
//           )}
//         </div>
//         {/* {explanations.length>0&&<div className={styles.explanationSection}>
//           <h3 style={{marginTop:'5px'}}>Explanation</h3>
//           {error ? (
//             <p className={styles.error}>{error}</p>
//           ) : (
//             <p dangerouslySetInnerHTML={{ __html: explanations[currentStage] }} />
//           )}
//         </div>} */}
//         {explanations.length>0&&<div className={styles.explanationSection}>
//             <h3 style={{marginTop:'5px'}}>Explanation</h3>
//             {error ? (
//                 <p className={styles.error}>{error}</p>
//             ) : (
//                 <div 
//                 className={styles.stepExplanation}
//                 dangerouslySetInnerHTML={{ __html: explanations[currentStage] }} 
//                 />
//             )}
//             </div>}
//         {error&&
//         <div className={styles.explanationSection}>
//             <p className={styles.error}>{error}</p>
//             </div>}
//       </div>
//     </div>
//   );
// };

// export default GaussJordanCalculator;
'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './GaussJordanCalculator.module.css';

const GaussJordanCalculator = () => {
  const [matrixSize, setMatrixSize] = useState(3);
  const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(4).fill(0)));
  const [stages, setStages] = useState([]);
  const [currentStage, setCurrentStage] = useState(0);
  const [explanations, setExplanations] = useState([]);
  const [highlightCells, setHighlightCells] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState('');
  const matrixContainerRef = useRef(null);
  const playIntervalRef = useRef(null);

  const matrixSizes = [2, 3, 4, 5];

  useEffect(() => {
    setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize + 1).fill(0)));
    resetCalculation();
  }, [matrixSize]);

  useEffect(() => {
    if (isPlaying && currentStage < stages.length - 1) {
      playIntervalRef.current = setInterval(() => {
        setCurrentStage(prev => {
          if (prev < stages.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 1000);
    } else {
      clearInterval(playIntervalRef.current);
    }

    return () => clearInterval(playIntervalRef.current);
  }, [isPlaying, currentStage, stages.length]);

  useEffect(() => {
    if (stages.length > 0) {
      setHighlightCells(stages[currentStage].highlight);
      setMatrix(stages[currentStage].matrix);
    }
  }, [currentStage, stages]);

  const handleMatrixChange = (i, j, value) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[i][j] = value === '' ? 0 : Number(value);
    setMatrix(newMatrix);
    resetCalculation();
  };

  const generateRandomMatrix = () => {
    const newMatrix = matrix.map(row => 
      row.map(() => Math.floor(Math.random() * 41) - 20)
    );
    setMatrix(newMatrix);
    resetCalculation();
  };

  const resetCalculation = () => {
    setStages([]);
    setCurrentStage(0);
    setExplanations([]);
    setHighlightCells([]);
    setError('');
    setIsPlaying(false);
  };

  const resetCalculator = () => {
    setMatrixSize(3);
    setMatrix(Array(3).fill().map(() => Array(4).fill(0)));
    resetCalculation();
  };

  const isZeroMatrix = (m) => m.every(row => row.every(cell => cell === 0));

  const convertToEchelonForm = () => {
    if (isZeroMatrix(matrix)) {
      setError('Error: Cannot transform a zero matrix. Generate Random Matrix or Input Values Manually');
      return;
    }
    performElimination(false);
  };

  const convertToReducedEchelonForm = () => {
    if (isZeroMatrix(matrix)) {
      setError('Error: Cannot transform a zero matrix. Generate Random Matrix or Input Values Manually.');
      return;
    }
    performElimination(true);
  };

  const performElimination = (isReduced) => {
    let m = matrix.map(row => [...row]);
    let stages = [{ matrix: JSON.parse(JSON.stringify(m)), highlight: [] }];
    let explanations = ["Initial matrix"];
  
    const rows = m.length;
    const cols = m[0].length;
  
    let lead = 0;
    for (let r = 0; r < rows; r++) {
      if (lead >= cols) {
        break;
      }
      let i = r;
      while (m[i][lead] === 0) {
        i++;
        if (i === rows) {
          i = r;
          lead++;
          if (cols === lead) {
            setStages(stages);
            setExplanations(explanations);
            setCurrentStage(0);
            return;
          }
        }
      }
      if (i !== r) {
        [m[i], m[r]] = [m[r], m[i]];
        explanations.push(`Swap row ${r + 1} with row ${i + 1}`);
        stages.push({ 
          matrix: JSON.parse(JSON.stringify(m)), 
          highlight: [[r, 'all'], [i, 'all']]
        });
      }
  
      let val = m[r][lead];
      if (val !== 1) {
        let scaleFactor = 1 / val;
        let oldRow = [...m[r]];
        for (let j = 0; j < cols; j++) {
          m[r][j] *= scaleFactor;
        }
        explanations.push(`<div class="step-explanation">
            <span class="step-title">Scale row ${r + 1}</span> by dividing each element by <span class="highlight-value">${val.toFixed(2)}</span>:<br/>
            <div class="row-transformation">
                <span class="old-row">[${oldRow.map(x => x.toFixed(2)).join(', ')}]</span><br/>
                <span class="becomes">becomes</span><br/>
                <span class="new-row">[${m[r].map(x => x.toFixed(2)).join(', ')}]</span>
            </div>
            </div>`);
        stages.push({ 
          matrix: JSON.parse(JSON.stringify(m)), 
          highlight: [[r, 'all']]
        });
      }
  
      for (let i = isReduced ? 0 : r + 1; i < rows; i++) {
        if (i !== r) {
          val = m[i][lead];
          if (val !== 0) {
            let oldRow = [...m[i]];
            for (let j = 0; j < cols; j++) {
              m[i][j] -= val * m[r][j];
            }
            explanations.push(`<div class="step-explanation">
                <span class="step-title">Eliminate in row ${i + 1} using row ${r + 1}:</span><br/>
                Subtract <span class="highlight-value">${val.toFixed(2)}</span> times row ${r + 1} from row ${i + 1}:<br/>
                <div class="row-transformation">
                    <span class="old-row">[${oldRow.map(x => x.toFixed(2)).join(', ')}]</span><br/>
                    <span class="becomes">becomes</span><br/>
                    <span class="new-row">[${m[i].map(x => x.toFixed(2)).join(', ')}]</span>
                </div>
                </div>`);
            stages.push({ 
              matrix: JSON.parse(JSON.stringify(m)), 
              highlight: [[i, 'all'], [r, 'all']]
            });
          }
        }
      }
      lead++;
    }
  
    setStages(stages);
    setExplanations(explanations);
    setCurrentStage(0);
    setError('');
  };

  const nextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sizeSelector}>
        Matrix Size:
        {matrixSizes.map(size => (
          <label key={size} className={styles.radioLabel}>
            <input
              type="radio"
              value={size}
              checked={matrixSize === size}
              onChange={() => setMatrixSize(size)}
              className={styles.radioInput}
            />
            {size}x{size + 1}
          </label>
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
        <div className={styles.buttonGroup}>
          <button 
            className={styles.button} 
            onClick={convertToEchelonForm}
          >
            Transform to Echelon Form
          </button>
          <span className={styles.tooltipContainer}>
            <span className={styles.questionMark}>?</span>
            <span className={styles.tooltip}>
              Echelon Form requirements:
              1. All rows consisting of only zeroes are at the bottom of the matrix
              2. The leading entry (pivot) of a nonzero row is always strictly to the right of the leading entry of the row above it
              3. All entries in a column below a leading entry are zeros
            </span>
          </span>
        </div>
        <div className={styles.buttonGroup}>
          <button 
            className={styles.button} 
            onClick={convertToReducedEchelonForm}
          >
            Transform to Reduced Echelon Form
          </button>
          <span className={styles.tooltipContainer}>
            <span className={styles.questionMark}>?</span>
            <span className={styles.tooltip}>
              Reduced Echelon Form requirements:
              1. The matrix is in echelon form
              2. The leading entry in each nonzero row is 1 (called a leading 1)
              3. Each column containing a leading 1 has zeros in all its other entries (both above and below the leading 1)
            </span>
          </span>
        </div>
        <button className={styles.resetButton} onClick={resetCalculator}>Reset</button>
      </div>
      <br />
      <div className={styles.contentContainer}>
        <div className={styles.matrixSection}>
          <div className={styles.matrixContainer} ref={matrixContainerRef}>
            <table className={styles.matrix}>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td 
                        key={j}
                        className={
                          highlightCells.some(([x, y]) => 
                            (x === i && (y === j || y === 'all')) || 
                            (y === j && x === 'all')
                          ) ? styles.highlighted : ''
                        }
                      >
                        <input
                          type="number"
                          value={cell}
                          onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                          className={styles.matrixInput}
                          disabled={stages.length > 0}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <br />
          {stages.length > 0 && (
            <div className={styles.stageControls}>
              <button onClick={prevStage} disabled={currentStage === 0}>❮ Previous</button>
              <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
              <span>Stage {currentStage + 1} of {stages.length}</span>
              <button onClick={nextStage} disabled={currentStage === stages.length - 1}>Next ❯</button>
            </div>
          )}
        </div>
        {explanations.length > 0 && (
          <div className={styles.explanationSection}>
            <h3 style={{marginTop:'5px'}}>Explanation</h3>
            {error ? (
              <p className={styles.error}>{error}</p>
            ) : (
              <div 
                className={styles.stepExplanation}
                dangerouslySetInnerHTML={{ __html: explanations[currentStage] }} 
              />
            )}
           
          </div>
          
          )}
        {error && (
          <div className={styles.explanationSection}>
            <p className={styles.error}>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GaussJordanCalculator;