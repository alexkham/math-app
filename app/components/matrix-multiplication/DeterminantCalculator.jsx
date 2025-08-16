// // // // // // // // // // // // // 'use client';
// // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // import styles from './DeterminantCalculator.module.css';

// // // // // // // // // // // // // const DeterminantCalculator = () => {
// // // // // // // // // // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // // // // // // // // // //   const [matrix, setMatrix] = useState([[1, 0], [0, 1]]);
// // // // // // // // // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // // // // // // //   const [explanation, setExplanation] = useState('');

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     // Reset matrix when size changes
// // // // // // // // // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // // // //     setStep(0);
// // // // // // // // // // // // //     setExplanation('');
// // // // // // // // // // // // //   }, [matrixSize]);

// // // // // // // // // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // // // // // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // // // // // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // // // //     setStep(0);
// // // // // // // // // // // // //     setExplanation('');
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const calculateDeterminant = () => {
// // // // // // // // // // // // //     // We'll implement this later
// // // // // // // // // // // // //     console.log('Calculating determinant...');
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const generateRandomMatrix = () => {
// // // // // // // // // // // // //     const newMatrix = matrix.map(row => 
// // // // // // // // // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)  // Random integer between -5 and 5
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // // // //     setStep(0);
// // // // // // // // // // // // //     setExplanation('');
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // // // // //       <h2 className={styles.title}>Determinant Calculator</h2>
// // // // // // // // // // // // //       <div className={styles.controls}>
// // // // // // // // // // // // //         <label>
// // // // // // // // // // // // //           Matrix Size:
// // // // // // // // // // // // //           <input 
// // // // // // // // // // // // //             type="number" 
// // // // // // // // // // // // //             min="2" 
// // // // // // // // // // // // //             max="10" 
// // // // // // // // // // // // //             value={matrixSize} 
// // // // // // // // // // // // //             onChange={(e) => setMatrixSize(Math.max(2, Math.min(10, Number(e.target.value))))}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </label>
// // // // // // // // // // // // //         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // // // // // // // // //         <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //       {error && <div className={styles.error}>{error}</div>}
// // // // // // // // // // // // //       <div className={styles.matrixContainer}>
// // // // // // // // // // // // //         <table className={styles.matrix}>
// // // // // // // // // // // // //           <tbody>
// // // // // // // // // // // // //             {matrix.map((row, i) => (
// // // // // // // // // // // // //               <tr key={i}>
// // // // // // // // // // // // //                 {row.map((cell, j) => (
// // // // // // // // // // // // //                   <td key={j}>
// // // // // // // // // // // // //                     <input
// // // // // // // // // // // // //                       type="number"
// // // // // // // // // // // // //                       value={cell}
// // // // // // // // // // // // //                       onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // // // // // // // // //                       className={styles.matrixInput}
// // // // // // // // // // // // //                     />
// // // // // // // // // // // // //                   </td>
// // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // //               </tr>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </tbody>
// // // // // // // // // // // // //         </table>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //       {determinant !== null && (
// // // // // // // // // // // // //         <div className={styles.result}>
// // // // // // // // // // // // //           <h3>Determinant: {determinant}</h3>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //       {explanation && (
// // // // // // // // // // // // //         <div className={styles.explanation}>
// // // // // // // // // // // // //           <h3>Explanation:</h3>
// // // // // // // // // // // // //           <p>{explanation}</p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default DeterminantCalculator;
// // // // // // // // // // // // 'use client';
// // // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // // const DeterminantCalculator = () => {
// // // // // // // // // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // // // // // // // // //   const [matrix, setMatrix] = useState([[1, 0], [0, 1]]);
// // // // // // // // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // // // // // //   const [explanation, setExplanation] = useState('');

// // // // // // // // // // // //   const matrixSizes = [2, 3, 4, 5];

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // // //     setStep(0);
// // // // // // // // // // // //     setExplanation('');
// // // // // // // // // // // //   }, [matrixSize]);

// // // // // // // // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // // // // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // // // // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // // //     setStep(0);
// // // // // // // // // // // //     setExplanation('');
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const calculateDeterminant = () => {
// // // // // // // // // // // //     console.log('Calculating determinant...');
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const generateRandomMatrix = () => {
// // // // // // // // // // // //     const newMatrix = matrix.map(row => 
// // // // // // // // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // // // // // // // //     );
// // // // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // // //     setStep(0);
// // // // // // // // // // // //     setExplanation('');
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
// // // // // // // // // // // //       <h2 style={{textAlign: 'center', color: '#333'}}>Determinant Calculator</h2>
// // // // // // // // // // // //       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           Matrix Size:
// // // // // // // // // // // //           {matrixSizes.map(size => (
// // // // // // // // // // // //             <label key={size} style={{marginLeft: '10px'}}>
// // // // // // // // // // // //               <input
// // // // // // // // // // // //                 type="radio"
// // // // // // // // // // // //                 value={size}
// // // // // // // // // // // //                 checked={matrixSize === size}
// // // // // // // // // // // //                 onChange={() => setMatrixSize(size)}
// // // // // // // // // // // //               />
// // // // // // // // // // // //               {size}x{size}
// // // // // // // // // // // //             </label>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <button onClick={generateRandomMatrix} style={{padding: '10px', margin: '0 10px'}}>Generate Random Matrix</button>
// // // // // // // // // // // //         <button onClick={calculateDeterminant} style={{padding: '10px'}}>Calculate Determinant</button>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       {error && <div style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
// // // // // // // // // // // //       <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
// // // // // // // // // // // //         <table style={{borderCollapse: 'separate', borderSpacing: '5px'}}>
// // // // // // // // // // // //           <tbody>
// // // // // // // // // // // //             {matrix.map((row, i) => (
// // // // // // // // // // // //               <tr key={i}>
// // // // // // // // // // // //                 {row.map((cell, j) => (
// // // // // // // // // // // //                   <td key={j}>
// // // // // // // // // // // //                     <input
// // // // // // // // // // // //                       type="number"
// // // // // // // // // // // //                       value={cell}
// // // // // // // // // // // //                       onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // // // // // // // //                       style={{
// // // // // // // // // // // //                         width: '35px',
// // // // // // // // // // // //                         height: '35px',
// // // // // // // // // // // //                         textAlign: 'center',
// // // // // // // // // // // //                         fontSize: '14px',
// // // // // // // // // // // //                         border: '1px solid #ddd',
// // // // // // // // // // // //                         borderRadius: '4px'
// // // // // // // // // // // //                       }}
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                   </td>
// // // // // // // // // // // //                 ))}
// // // // // // // // // // // //               </tr>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </tbody>
// // // // // // // // // // // //         </table>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       {determinant !== null && (
// // // // // // // // // // // //         <div style={{textAlign: 'center', marginTop: '20px'}}>
// // // // // // // // // // // //           <h3>Determinant: {determinant}</h3>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //       {explanation && (
// // // // // // // // // // // //         <div style={{textAlign: 'center', marginTop: '20px'}}>
// // // // // // // // // // // //           <h3>Explanation:</h3>
// // // // // // // // // // // //           <p>{explanation}</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default DeterminantCalculator;
// // // // // // // // // // // 'use client';
// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import styles from './DeterminantCalculator.module.css';

// // // // // // // // // // // const DeterminantCalculator = () => {
// // // // // // // // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // // // // // // // //   const [matrix, setMatrix] = useState([[1, 0], [0, 1]]);
// // // // // // // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // // // // //   const [explanation, setExplanation] = useState('');

// // // // // // // // // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // //     setStep(0);
// // // // // // // // // // //     setExplanation('');
// // // // // // // // // // //   }, [matrixSize]);

// // // // // // // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // // // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // // // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // //     setStep(0);
// // // // // // // // // // //     setExplanation('');
// // // // // // // // // // //   };

// // // // // // // // // // //   const calculateDeterminant = () => {
// // // // // // // // // // //     console.log('Calculating determinant...');
// // // // // // // // // // //   };

// // // // // // // // // // //   const generateRandomMatrix = () => {
// // // // // // // // // // //     const newMatrix = matrix.map(row => 
// // // // // // // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // // // // // // //     );
// // // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // // //     setDeterminant(null);
// // // // // // // // // // //     setStep(0);
// // // // // // // // // // //     setExplanation('');
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // // //       <h2 className={styles.title}>Determinant Calculator</h2>
// // // // // // // // // // //       <div className={styles.controls}>
// // // // // // // // // // //         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // // // // // // //         <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <div className={styles.sizeSelector}>
// // // // // // // // // // //         Matrix Size:
// // // // // // // // // // //         {matrixSizes.map(size => (
// // // // // // // // // // //           <label key={size} className={styles.radioLabel}>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="radio"
// // // // // // // // // // //               value={size}
// // // // // // // // // // //               checked={matrixSize === size}
// // // // // // // // // // //               onChange={() => setMatrixSize(size)}
// // // // // // // // // // //               className={styles.radioInput}
// // // // // // // // // // //             />
// // // // // // // // // // //             {size}x{size}
// // // // // // // // // // //           </label>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>
// // // // // // // // // // //       {error && <div className={styles.error}>{error}</div>}
// // // // // // // // // // //       <div className={styles.matrixContainer}>
// // // // // // // // // // //         <table className={styles.matrix}>
// // // // // // // // // // //           <tbody>
// // // // // // // // // // //             {matrix.map((row, i) => (
// // // // // // // // // // //               <tr key={i}>
// // // // // // // // // // //                 {row.map((cell, j) => (
// // // // // // // // // // //                   <td key={j}>
// // // // // // // // // // //                     <input
// // // // // // // // // // //                       type="number"
// // // // // // // // // // //                       value={cell}
// // // // // // // // // // //                       onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // // // // // // //                       className={styles.matrixInput}
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </td>
// // // // // // // // // // //                 ))}
// // // // // // // // // // //               </tr>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </tbody>
// // // // // // // // // // //         </table>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       {determinant !== null && (
// // // // // // // // // // //         <div className={styles.result}>
// // // // // // // // // // //           <h3>Determinant: {determinant}</h3>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //       {explanation && (
// // // // // // // // // // //         <div className={styles.explanation}>
// // // // // // // // // // //           <h3>Explanation:</h3>
// // // // // // // // // // //           <p>{explanation}</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default DeterminantCalculator;
// // // // // // // // // // 'use client';
// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import styles from './DeterminantCalculator.module.css';

// // // // // // // // // // const DeterminantCalculator = () => {
// // // // // // // // // //   const [matrixSize, setMatrixSize] = useState(null);
// // // // // // // // // //   const [matrix, setMatrix] = useState([]);
// // // // // // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // // // //   const [explanation, setExplanation] = useState('');

// // // // // // // // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (matrixSize) {
// // // // // // // // // //       setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // // // // // //       setDeterminant(null);
// // // // // // // // // //       setStep(0);
// // // // // // // // // //       setExplanation('');
// // // // // // // // // //     }
// // // // // // // // // //   }, [matrixSize]);

// // // // // // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // //     setDeterminant(null);
// // // // // // // // // //     setStep(0);
// // // // // // // // // //     setExplanation('');
// // // // // // // // // //   };

// // // // // // // // // //   const calculateDeterminant = () => {
// // // // // // // // // //     console.log('Calculating determinant...');
// // // // // // // // // //   };

// // // // // // // // // //   const generateRandomMatrix = () => {
// // // // // // // // // //     const newMatrix = matrix.map(row => 
// // // // // // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // // // // // //     );
// // // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // // //     setDeterminant(null);
// // // // // // // // // //     setStep(0);
// // // // // // // // // //     setExplanation('');
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // //       <div className={styles.sizeSelector}>
// // // // // // // // // //         Matrix Size:
// // // // // // // // // //         {matrixSizes.map(size => (
// // // // // // // // // //           <label key={size} className={styles.radioLabel}>
// // // // // // // // // //             <input
// // // // // // // // // //               type="radio"
// // // // // // // // // //               value={size}
// // // // // // // // // //               checked={matrixSize === size}
// // // // // // // // // //               onChange={() => setMatrixSize(size)}
// // // // // // // // // //               className={styles.radioInput}
// // // // // // // // // //             />
// // // // // // // // // //             {size}x{size}
// // // // // // // // // //           </label>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //       {matrixSize && (
// // // // // // // // // //         <div className={styles.contentContainer}>
// // // // // // // // // //           <div className={styles.matrixSection}>
// // // // // // // // // //             <div className={styles.controls}>
// // // // // // // // // //               <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // // // // // //               <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // // // // // // //             </div>
// // // // // // // // // //             {error && <div className={styles.error}>{error}</div>}
// // // // // // // // // //             <div className={styles.matrixContainer}>
// // // // // // // // // //               <table className={styles.matrix}>
// // // // // // // // // //                 <tbody>
// // // // // // // // // //                   {matrix.map((row, i) => (
// // // // // // // // // //                     <tr key={i}>
// // // // // // // // // //                       {row.map((cell, j) => (
// // // // // // // // // //                         <td key={j}>
// // // // // // // // // //                           <input
// // // // // // // // // //                             type="number"
// // // // // // // // // //                             value={cell}
// // // // // // // // // //                             onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // // // // // //                             className={styles.matrixInput}
// // // // // // // // // //                           />
// // // // // // // // // //                         </td>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </tr>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </tbody>
// // // // // // // // // //               </table>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className={styles.visualizationSection}>
// // // // // // // // // //             {/* Visualization content will go here */}
// // // // // // // // // //             <h3>Visualization</h3>
// // // // // // // // // //             {determinant !== null && (
// // // // // // // // // //               <div className={styles.result}>
// // // // // // // // // //                 <h3>Determinant: {determinant}</h3>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //             {explanation && (
// // // // // // // // // //               <div className={styles.explanation}>
// // // // // // // // // //                 <h3>Explanation:</h3>
// // // // // // // // // //                 <p>{explanation}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default DeterminantCalculator;
// // // // // // // // // 'use client';
// // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // import styles from './DeterminantCalculator.module.css';

// // // // // // // // // const DeterminantCalculator = () => {
// // // // // // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // // // // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // // // // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // // //   const [explanation, setExplanation] = useState('');

// // // // // // // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // // // // // //   const controlsRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // // // // //     setDeterminant(null);
// // // // // // // // //     setStep(0);
// // // // // // // // //     setExplanation('');
// // // // // // // // //     if (controlsRef.current) {
// // // // // // // // //       controlsRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // // // // //     }
// // // // // // // // //   }, [matrixSize]);

// // // // // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // //     setDeterminant(null);
// // // // // // // // //     setStep(0);
// // // // // // // // //     setExplanation('');
// // // // // // // // //   };

// // // // // // // // //   const calculateDeterminant = () => {
// // // // // // // // //     console.log('Calculating determinant...');
// // // // // // // // //   };

// // // // // // // // //   const generateRandomMatrix = () => {
// // // // // // // // //     const newMatrix = matrix.map(row => 
// // // // // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // // // // //     );
// // // // // // // // //     setMatrix(newMatrix);
// // // // // // // // //     setDeterminant(null);
// // // // // // // // //     setStep(0);
// // // // // // // // //     setExplanation('');
// // // // // // // // //   };

// // // // // // // // //   const resetCalculator = () => {
// // // // // // // // //     setMatrixSize(2);
// // // // // // // // //     setMatrix([[0, 0], [0, 0]]);
// // // // // // // // //     setDeterminant(null);
// // // // // // // // //     setStep(0);
// // // // // // // // //     setExplanation('');
// // // // // // // // //     setError('');
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.container}>
// // // // // // // // //       <div className={styles.sizeSelector}>
// // // // // // // // //         Matrix Size:
// // // // // // // // //         {matrixSizes.map(size => (
// // // // // // // // //           <label key={size} className={styles.radioLabel}>
// // // // // // // // //             <input
// // // // // // // // //               type="radio"
// // // // // // // // //               value={size}
// // // // // // // // //               checked={matrixSize === size}
// // // // // // // // //               onChange={() => setMatrixSize(size)}
// // // // // // // // //               className={styles.radioInput}
// // // // // // // // //             />
// // // // // // // // //             {size}x{size}
// // // // // // // // //           </label>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //       <div className={styles.contentContainer}>
// // // // // // // // //         <div className={styles.matrixSection}>
// // // // // // // // //           <div className={styles.controls} ref={controlsRef}>
// // // // // // // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // // // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // // // // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // // // // // //           </div>
// // // // // // // // //           {error && <div className={styles.error}>{error}</div>}
// // // // // // // // //           <div className={styles.matrixContainer}>
// // // // // // // // //             <table className={styles.matrix}>
// // // // // // // // //               <tbody>
// // // // // // // // //                 {matrix.map((row, i) => (
// // // // // // // // //                   <tr key={i}>
// // // // // // // // //                     {row.map((cell, j) => (
// // // // // // // // //                       <td key={j}>
// // // // // // // // //                         <input
// // // // // // // // //                           type="number"
// // // // // // // // //                           value={cell}
// // // // // // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // // // // //                           className={styles.matrixInput}
// // // // // // // // //                         />
// // // // // // // // //                       </td>
// // // // // // // // //                     ))}
// // // // // // // // //                   </tr>
// // // // // // // // //                 ))}
// // // // // // // // //               </tbody>
// // // // // // // // //             </table>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //         <div className={styles.visualizationSection}>
// // // // // // // // //           <h3>Visualization</h3>
// // // // // // // // //           {determinant !== null && (
// // // // // // // // //             <div className={styles.result}>
// // // // // // // // //               <h3>Determinant: {determinant}</h3>
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //           {explanation && (
// // // // // // // // //             <div className={styles.explanation}>
// // // // // // // // //               <h3>Explanation:</h3>
// // // // // // // // //               <p>{explanation}</p>
// // // // // // // // //             </div>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default DeterminantCalculator;
// // // // // // // // 'use client';
// // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // import styles from './DeterminantCalculator.module.css';

// // // // // // // // const DeterminantCalculator = () => {
// // // // // // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // // // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // // // //   const [error, setError] = useState('');
// // // // // // // //   const [step, setStep] = useState(0);
// // // // // // // //   const [explanation, setExplanation] = useState('');
// // // // // // // //   const [highlightCells, setHighlightCells] = useState([]);

// // // // // // // //   const controlsRef = useRef(null);

// // // // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // // // //     setMatrix(newMatrix);
// // // // // // // //     setDeterminant(null);
// // // // // // // //     setStep(0);
// // // // // // // //     setExplanation('');
// // // // // // // //     setHighlightCells([]);
// // // // // // // //   };

// // // // // // // //   const generateRandomMatrix = () => {
// // // // // // // //     const newMatrix = matrix.map(row => 
// // // // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // // // //     );
// // // // // // // //     setMatrix(newMatrix);
// // // // // // // //     setDeterminant(null);
// // // // // // // //     setStep(0);
// // // // // // // //     setExplanation('');
// // // // // // // //     setHighlightCells([]);
// // // // // // // //   };

// // // // // // // //   const resetCalculator = () => {
// // // // // // // //     setMatrix([[0, 0], [0, 0]]);
// // // // // // // //     setDeterminant(null);
// // // // // // // //     setStep(0);
// // // // // // // //     setExplanation('');
// // // // // // // //     setError('');
// // // // // // // //     setHighlightCells([]);
// // // // // // // //   };

// // // // // // // //   const calculateDeterminant = () => {
// // // // // // // //     setStep(1);
// // // // // // // //     setExplanation("The determinant of a 2x2 matrix is calculated using the formula: ad - bc");
// // // // // // // //     setHighlightCells([]);
// // // // // // // //   };

// // // // // // // //   const nextStep = () => {
// // // // // // // //     const [[a, b], [c, d]] = matrix;
// // // // // // // //     switch(step) {
// // // // // // // //       case 1:
// // // // // // // //         setStep(2);
// // // // // // // //         setExplanation(`Multiply a and d: ${a} * ${d} = ${a * d}`);
// // // // // // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // // // // // //         break;
// // // // // // // //       case 2:
// // // // // // // //         setStep(3);
// // // // // // // //         setExplanation(`Multiply b and c: ${b} * ${c} = ${b * c}`);
// // // // // // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // // // // // //         break;
// // // // // // // //       case 3:
// // // // // // // //         const det = a * d - b * c;
// // // // // // // //         setStep(4);
// // // // // // // //         setExplanation(`Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`);
// // // // // // // //         setHighlightCells([]);
// // // // // // // //         break;
// // // // // // // //       case 4:
// // // // // // // //         setStep(5);
// // // // // // // //         setDeterminant(a * d - b * c);
// // // // // // // //         setExplanation(`The determinant is ${a * d - b * c}`);
// // // // // // // //         break;
// // // // // // // //       default:
// // // // // // // //         resetCalculator();
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.container}>
// // // // // // // //       <div className={styles.contentContainer}>
// // // // // // // //         <div className={styles.matrixSection}>
// // // // // // // //           <div className={styles.controls} ref={controlsRef}>
// // // // // // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // // // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // // // // //           </div>
// // // // // // // //           {error && <div className={styles.error}>{error}</div>}
// // // // // // // //           <div className={styles.matrixContainer}>
// // // // // // // //             <table className={styles.matrix}>
// // // // // // // //               <tbody>
// // // // // // // //                 {matrix.map((row, i) => (
// // // // // // // //                   <tr key={i}>
// // // // // // // //                     {row.map((cell, j) => (
// // // // // // // //                       <td key={j}>
// // // // // // // //                         <input
// // // // // // // //                           type="number"
// // // // // // // //                           value={cell}
// // // // // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // // // //                           className={`${styles.matrixInput} ${highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''}`}
// // // // // // // //                         />
// // // // // // // //                       </td>
// // // // // // // //                     ))}
// // // // // // // //                   </tr>
// // // // // // // //                 ))}
// // // // // // // //               </tbody>
// // // // // // // //             </table>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         <div className={styles.visualizationSection}>
// // // // // // // //           <h3>Visualization</h3>
// // // // // // // //           <div className={styles.explanation}>{explanation}</div>
// // // // // // // //           {step > 0 && step < 5 && (
// // // // // // // //             <button className={styles.button} onClick={nextStep}>Next Step</button>
// // // // // // // //           )}
// // // // // // // //           {determinant !== null && (
// // // // // // // //             <div className={styles.result}>
// // // // // // // //               <h3>Determinant: {determinant}</h3>
// // // // // // // //             </div>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default DeterminantCalculator;
// // // // // // // 'use client';
// // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // import styles from './DeterminantCalculator.module.css';

// // // // // // // const DeterminantCalculator = () => {
// // // // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // // //   const [error, setError] = useState('');
// // // // // // //   const [step, setStep] = useState(0);
// // // // // // //   const [explanation, setExplanation] = useState('');
// // // // // // //   const [highlightCells, setHighlightCells] = useState([]);

// // // // // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // // // //   const controlsRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // // //     setDeterminant(null);
// // // // // // //     setStep(0);
// // // // // // //     setExplanation('');
// // // // // // //     setHighlightCells([]);
// // // // // // //     if (controlsRef.current) {
// // // // // // //       controlsRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // // //     }
// // // // // // //   }, [matrixSize]);

// // // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // // //     setMatrix(newMatrix);
// // // // // // //     setDeterminant(null);
// // // // // // //     setStep(0);
// // // // // // //     setExplanation('');
// // // // // // //     setHighlightCells([]);
// // // // // // //   };

// // // // // // //   const generateRandomMatrix = () => {
// // // // // // //     const newMatrix = matrix.map(row => 
// // // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // // //     );
// // // // // // //     setMatrix(newMatrix);
// // // // // // //     setDeterminant(null);
// // // // // // //     setStep(0);
// // // // // // //     setExplanation('');
// // // // // // //     setHighlightCells([]);
// // // // // // //   };

// // // // // // //   const resetCalculator = () => {
// // // // // // //     setMatrixSize(2);
// // // // // // //     setMatrix([[0, 0], [0, 0]]);
// // // // // // //     setDeterminant(null);
// // // // // // //     setStep(0);
// // // // // // //     setExplanation('');
// // // // // // //     setError('');
// // // // // // //     setHighlightCells([]);
// // // // // // //   };

// // // // // // //   const calculateDeterminant = () => {
// // // // // // //     if (matrixSize === 2) {
// // // // // // //       setStep(1);
// // // // // // //       setExplanation("The determinant of a 2x2 matrix is calculated using the formula: ad - bc");
// // // // // // //       setHighlightCells([]);
// // // // // // //     } else {
// // // // // // //       // For matrices larger than 2x2, we'll just calculate the determinant
// // // // // // //       // without step-by-step visualization
// // // // // // //       const det = calculateLargerDeterminant(matrix);
// // // // // // //       setDeterminant(det);
// // // // // // //       setExplanation(`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const calculateLargerDeterminant = (m) => {
// // // // // // //     if (m.length === 1) return m[0][0];
// // // // // // //     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

// // // // // // //     let det = 0;
// // // // // // //     for (let i = 0; i < m.length; i++) {
// // // // // // //       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
// // // // // // //       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
// // // // // // //     }
// // // // // // //     return det;
// // // // // // //   };

// // // // // // //   const nextStep = () => {
// // // // // // //     if (matrixSize !== 2) return;

// // // // // // //     const [[a, b], [c, d]] = matrix;
// // // // // // //     switch(step) {
// // // // // // //       case 1:
// // // // // // //         setStep(2);
// // // // // // //         setExplanation(`Multiply a and d: ${a} * ${d} = ${a * d}`);
// // // // // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // // // // //         break;
// // // // // // //       case 2:
// // // // // // //         setStep(3);
// // // // // // //         setExplanation(`Multiply b and c: ${b} * ${c} = ${b * c}`);
// // // // // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // // // // //         break;
// // // // // // //       case 3:
// // // // // // //         const det = a * d - b * c;
// // // // // // //         setStep(4);
// // // // // // //         setExplanation(`Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`);
// // // // // // //         setHighlightCells([]);
// // // // // // //         break;
// // // // // // //       case 4:
// // // // // // //         setStep(5);
// // // // // // //         setDeterminant(a * d - b * c);
// // // // // // //         setExplanation(`The determinant is ${a * d - b * c}`);
// // // // // // //         break;
// // // // // // //       default:
// // // // // // //         resetCalculator();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       <div className={styles.sizeSelector}>
// // // // // // //         Matrix Size:
// // // // // // //         {matrixSizes.map(size => (
// // // // // // //           <label key={size} className={styles.radioLabel}>
// // // // // // //             <input
// // // // // // //               type="radio"
// // // // // // //               value={size}
// // // // // // //               checked={matrixSize === size}
// // // // // // //               onChange={() => setMatrixSize(size)}
// // // // // // //               className={styles.radioInput}
// // // // // // //             />
// // // // // // //             {size}x{size}
// // // // // // //           </label>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //       <div className={styles.contentContainer}>
// // // // // // //         <div className={styles.matrixSection}>
// // // // // // //           <div className={styles.controls} ref={controlsRef}>
// // // // // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // // // //           </div>
// // // // // // //           {error && <div className={styles.error}>{error}</div>}
// // // // // // //           <div className={styles.matrixContainer}>
// // // // // // //             <table className={styles.matrix}>
// // // // // // //               <tbody>
// // // // // // //                 {matrix.map((row, i) => (
// // // // // // //                   <tr key={i}>
// // // // // // //                     {row.map((cell, j) => (
// // // // // // //                       <td key={j}>
// // // // // // //                         <input
// // // // // // //                           type="number"
// // // // // // //                           value={cell}
// // // // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // // //                           className={`${styles.matrixInput} ${highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''}`}
// // // // // // //                         />
// // // // // // //                       </td>
// // // // // // //                     ))}
// // // // // // //                   </tr>
// // // // // // //                 ))}
// // // // // // //               </tbody>
// // // // // // //             </table>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className={styles.visualizationSection}>
// // // // // // //           <h3>Visualization</h3>
// // // // // // //           <div className={styles.explanation}>{explanation}</div>
// // // // // // //           {matrixSize === 2 && step > 0 && step < 5 && (
// // // // // // //             <button className={styles.button} onClick={nextStep}>Next Step</button>
// // // // // // //           )}
// // // // // // //           {determinant !== null && (
// // // // // // //             <div className={styles.result}>
// // // // // // //               <h3>Determinant: {determinant}</h3>
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default DeterminantCalculator;
// // // // // // 'use client';
// // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // import styles from './DeterminantCalculator.module.css';

// // // // // // const DeterminantCalculator = () => {
// // // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // // // // //   const [determinant, setDeterminant] = useState(null);
// // // // // //   const [error, setError] = useState('');
// // // // // //   const [step, setStep] = useState(0);
// // // // // //   const [explanations, setExplanations] = useState([]);
// // // // // //   const [highlightCells, setHighlightCells] = useState([]);

// // // // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // // //   const controlsRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //     if (controlsRef.current) {
// // // // // //       controlsRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // //     }
// // // // // //   }, [matrixSize]);

// // // // // //   const handleMatrixChange = (i, j, value) => {
// // // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // // //     setMatrix(newMatrix);
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //   };

// // // // // //   const generateRandomMatrix = () => {
// // // // // //     const newMatrix = matrix.map(row => 
// // // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // // //     );
// // // // // //     setMatrix(newMatrix);
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //   };

// // // // // //   const resetCalculator = () => {
// // // // // //     setMatrixSize(2);
// // // // // //     setMatrix([[0, 0], [0, 0]]);
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setError('');
// // // // // //     setHighlightCells([]);
// // // // // //   };

// // // // // //   const calculateDeterminant = () => {
// // // // // //     if (matrixSize === 2) {
// // // // // //       setStep(1);
// // // // // //       setExplanations([
// // // // // //         "1. For a 2x2 matrix:",
// // // // // //         "   [a b]",
// // // // // //         "   [c d]",
// // // // // //         "   The determinant is calculated using the formula: ad - bc"
// // // // // //       ]);
// // // // // //       setHighlightCells([]);
// // // // // //     } else {
// // // // // //       const det = calculateLargerDeterminant(matrix);
// // // // // //       setDeterminant(det);
// // // // // //       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
// // // // // //     }
// // // // // //   };

// // // // // //   const calculateLargerDeterminant = (m) => {
// // // // // //     if (m.length === 1) return m[0][0];
// // // // // //     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

// // // // // //     let det = 0;
// // // // // //     for (let i = 0; i < m.length; i++) {
// // // // // //       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
// // // // // //       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
// // // // // //     }
// // // // // //     return det;
// // // // // //   };

// // // // // //   const nextStep = () => {
// // // // // //     if (matrixSize !== 2) return;

// // // // // //     const [[a, b], [c, d]] = matrix;
// // // // // //     switch(step) {
// // // // // //       case 1:
// // // // // //         setStep(2);
// // // // // //         setExplanations(prev => [
// // // // // //           ...prev,
// // // // // //           `2. Multiply a and d: ${a} * ${d} = ${a * d}`
// // // // // //         ]);
// // // // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // // // //         break;
// // // // // //       case 2:
// // // // // //         setStep(3);
// // // // // //         setExplanations(prev => [
// // // // // //           ...prev,
// // // // // //           `3. Multiply b and c: ${b} * ${c} = ${b * c}`
// // // // // //         ]);
// // // // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // // // //         break;
// // // // // //       case 3:
// // // // // //         const det = a * d - b * c;
// // // // // //         setStep(4);
// // // // // //         setExplanations(prev => [
// // // // // //           ...prev,
// // // // // //           `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
// // // // // //         ]);
// // // // // //         setHighlightCells([]);
// // // // // //         break;
// // // // // //       case 4:
// // // // // //         setStep(5);
// // // // // //         setDeterminant(a * d - b * c);
// // // // // //         setExplanations(prev => [
// // // // // //           ...prev,
// // // // // //           `5. The determinant is ${a * d - b * c}`
// // // // // //         ]);
// // // // // //         break;
// // // // // //       default:
// // // // // //         resetCalculator();
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
// // // // // //             {size}x{size}
// // // // // //           </label>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //       <div className={styles.contentContainer}>
// // // // // //         <div className={styles.matrixSection}>
// // // // // //           <div className={styles.controls} ref={controlsRef}>
// // // // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // // //           </div>
// // // // // //           {error && <div className={styles.error}>{error}</div>}
// // // // // //           <div className={styles.matrixContainer}>
// // // // // //             <table className={styles.matrix}>
// // // // // //               <tbody>
// // // // // //                 {matrix.map((row, i) => (
// // // // // //                   <tr key={i}>
// // // // // //                     {row.map((cell, j) => (
// // // // // //                       <td key={j} className={styles.matrixCell}>
// // // // // //                         <div className={styles.cellLabel}>
// // // // // //                           {matrixSize === 2 ? ['a', 'b', 'c', 'd'][i*2 + j] : ''}
// // // // // //                         </div>
// // // // // //                         <input
// // // // // //                           type="number"
// // // // // //                           value={cell}
// // // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // // //                           className={`${styles.matrixInput} ${highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''}`}
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
// // // // // //           <h3>Visualization</h3>
// // // // // //           <div className={styles.explanation}>
// // // // // //             {explanations.map((exp, index) => (
// // // // // //               <p key={index}>{exp}</p>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //           {matrixSize === 2 && step > 0 && step < 5 && (
// // // // // //             <button className={styles.button} onClick={nextStep}>Next Step</button>
// // // // // //           )}
// // // // // //           {determinant !== null && (
// // // // // //             <div className={styles.result}>
// // // // // //               <h3>Determinant: {determinant}</h3>
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DeterminantCalculator;
// // // // // 'use client';
// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import styles from './DeterminantCalculator.module.css';

// // // // // const DeterminantCalculator = () => {
// // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // // // //   const [determinant, setDeterminant] = useState(null);
// // // // //   const [error, setError] = useState('');
// // // // //   const [step, setStep] = useState(0);
// // // // //   const [explanations, setExplanations] = useState([]);
// // // // //   const [highlightCells, setHighlightCells] = useState([]);

// // // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // //   const controlsRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setHighlightCells([]);
// // // // //     if (controlsRef.current) {
// // // // //       controlsRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // //     }
// // // // //   }, [matrixSize]);

// // // // //   const handleMatrixChange = (i, j, value) => {
// // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // //     setMatrix(newMatrix);
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setHighlightCells([]);
// // // // //   };

// // // // //   const generateRandomMatrix = () => {
// // // // //     const newMatrix = matrix.map(row => 
// // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // //     );
// // // // //     setMatrix(newMatrix);
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setHighlightCells([]);
// // // // //   };

// // // // //   const resetCalculator = () => {
// // // // //     setMatrixSize(2);
// // // // //     setMatrix([[0, 0], [0, 0]]);
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setError('');
// // // // //     setHighlightCells([]);
// // // // //   };

// // // // //   const calculateDeterminant = () => {
// // // // //     if (matrixSize === 2) {
// // // // //       setStep(1);
// // // // //       setExplanations([
// // // // //         "1. For a 2x2 matrix:",
// // // // //         "   [a b]",
// // // // //         "   [c d]",
// // // // //         "   The determinant is calculated using the formula: ad - bc"
// // // // //       ]);
// // // // //       setHighlightCells([]);
// // // // //     } else {
// // // // //       const det = calculateLargerDeterminant(matrix);
// // // // //       setDeterminant(det);
// // // // //       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
// // // // //     }
// // // // //   };

// // // // //   const calculateLargerDeterminant = (m) => {
// // // // //     if (m.length === 1) return m[0][0];
// // // // //     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

// // // // //     let det = 0;
// // // // //     for (let i = 0; i < m.length; i++) {
// // // // //       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
// // // // //       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
// // // // //     }
// // // // //     return det;
// // // // //   };

// // // // //   const nextStep = () => {
// // // // //     if (matrixSize !== 2) return;

// // // // //     const [[a, b], [c, d]] = matrix;
// // // // //     switch(step) {
// // // // //       case 1:
// // // // //         setStep(2);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `2. Multiply a and d: ${a} * ${d} = ${a * d}`
// // // // //         ]);
// // // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // // //         break;
// // // // //       case 2:
// // // // //         setStep(3);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `3. Multiply b and c: ${b} * ${c} = ${b * c}`
// // // // //         ]);
// // // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // // //         break;
// // // // //       case 3:
// // // // //         const det = a * d - b * c;
// // // // //         setStep(4);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
// // // // //         ]);
// // // // //         setHighlightCells([]);
// // // // //         break;
// // // // //       case 4:
// // // // //         setStep(5);
// // // // //         setDeterminant(a * d - b * c);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `5. The determinant is ${a * d - b * c}`
// // // // //         ]);
// // // // //         break;
// // // // //       default:
// // // // //         resetCalculator();
// // // // //     }
// // // // //   };

// // // // //   const prevStep = () => {
// // // // //     if (matrixSize !== 2 || step <= 1) return;

// // // // //     setStep(prev => prev - 1);
// // // // //     setExplanations(prev => prev.slice(0, -1));
    
// // // // //     switch(step) {
// // // // //       case 2:
// // // // //         setHighlightCells([]);
// // // // //         break;
// // // // //       case 3:
// // // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // // //         break;
// // // // //       case 4:
// // // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // // //         break;
// // // // //       case 5:
// // // // //         setHighlightCells([]);
// // // // //         setDeterminant(null);
// // // // //         break;
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
// // // // //             {size}x{size}
// // // // //           </label>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className={styles.contentContainer}>
// // // // //         <div className={styles.matrixSection}>
// // // // //           <div className={styles.controls} ref={controlsRef}>
// // // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // //           </div>
// // // // //           {error && <div className={styles.error}>{error}</div>}
// // // // //           <div className={styles.matrixContainer}>
// // // // //             <table className={styles.matrix}>
// // // // //               <tbody>
// // // // //                 {matrix.map((row, i) => (
// // // // //                   <tr key={i}>
// // // // //                     {row.map((cell, j) => (
// // // // //                       <td key={j}>
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           value={cell}
// // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // //                           className={`${styles.matrixInput} ${highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''}`}
// // // // //                         />
// // // // //                       </td>
// // // // //                     ))}
// // // // //                   </tr>
// // // // //                 ))}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className={styles.visualizationSection}>
// // // // //           <h3>Visualization</h3>
// // // // //           <div className={styles.explanation}>
// // // // //             {explanations.map((exp, index) => (
// // // // //               <p key={index}>{exp}</p>
// // // // //             ))}
// // // // //           </div>
// // // // //           {matrixSize === 2 && step > 0 && (
// // // // //             <div className={styles.stepControls}>
// // // // //               <button className={styles.button} onClick={prevStep} disabled={step <= 1}>Step Back</button>
// // // // //               <button className={styles.button} onClick={nextStep} disabled={step >= 5}>Next Step</button>
// // // // //             </div>
// // // // //           )}
// // // // //           {determinant !== null && (
// // // // //             <div className={styles.result}>
// // // // //               <h3>Determinant: {determinant}</h3>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DeterminantCalculator;
// // // // // 'use client';
// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import styles from './DeterminantCalculator.module.css';

// // // // // const DeterminantCalculator = () => {
// // // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // // // //   const [determinant, setDeterminant] = useState(null);
// // // // //   const [error, setError] = useState('');
// // // // //   const [step, setStep] = useState(0);
// // // // //   const [explanations, setExplanations] = useState([]);
// // // // //   const [highlightCells, setHighlightCells] = useState([]);

// // // // //   // New state for Sarrus' Rule
// // // // //   const [sarrusStep, setSarrusStep] = useState(0);
// // // // //   const [sarrusExplanations, setSarrusExplanations] = useState([]);
// // // // //   const [sarrusHighlights, setSarrusHighlights] = useState([]);

// // // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // //   const controlsRef = useRef(null);
// // // // //   const matrixContainerRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //     setSarrusStep(0);
// // // // // //     setSarrusExplanations([]);
// // // // // //     setSarrusHighlights([]);
// // // // // //     if (controlsRef.current) {
// // // // // //       controlsRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // //     }
// // // // // //   }, [matrixSize]);

// // // // // // useEffect(() => {
// // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //     setSarrusStep(0);
// // // // // //     setSarrusExplanations([]);
// // // // // //     setSarrusHighlights([]);
    
// // // // // //     // Only scroll if the matrix is large enough to warrant it
// // // // // //     if (matrixSize > 5 && controlsRef.current) {
// // // // // //       const bottomOfMatrix = controlsRef.current.getBoundingClientRect().bottom;
// // // // // //       const viewportHeight = window.innerHeight;
// // // // // //       if (bottomOfMatrix > viewportHeight) {
// // // // // //         controlsRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // //       }
// // // // // //     }
// // // // // //   }, [matrixSize]); 

// // // // // // useEffect(() => {
// // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //     setSarrusStep(0);
// // // // // //     setSarrusExplanations([]);
// // // // // //     setSarrusHighlights([]);
    
// // // // // //     // Use setTimeout to ensure the DOM has updated before checking
// // // // // //     setTimeout(() => {
// // // // // //       if (controlsRef.current) {
// // // // // //         const matrixBottom = controlsRef.current.getBoundingClientRect().bottom;
// // // // // //         const viewportHeight = window.innerHeight;
// // // // // //         if (matrixBottom > viewportHeight) {
// // // // // //           window.scrollTo({
// // // // // //             top: matrixBottom - viewportHeight + 20, // 20px buffer
// // // // // //             behavior: 'smooth'
// // // // // //           });
// // // // // //         }
// // // // // //       }
// // // // // //     }, 0);
// // // // // //   }, [matrixSize]);



// // // // // // useEffect(() => {
// // // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // // //     setDeterminant(null);
// // // // // //     setStep(0);
// // // // // //     setExplanations([]);
// // // // // //     setHighlightCells([]);
// // // // // //     setSarrusStep(0);
// // // // // //     setSarrusExplanations([]);
// // // // // //     setSarrusHighlights([]);
  
// // // // // //     // Wait for DOM update, then check if scrolling is needed
// // // // // //     setTimeout(() => {
// // // // // //       if (controlsRef.current) {
// // // // // //         const matrixBottom = controlsRef.current.getBoundingClientRect().bottom;
// // // // // //         const viewportHeight = window.innerHeight;
// // // // // //         const tolerance = 5; // Small tolerance to account for minor discrepancies
  
// // // // // //         if (Math.abs(matrixBottom - viewportHeight) <= tolerance) {
// // // // // //           window.scrollTo({
// // // // // //             top: window.scrollY + matrixBottom - viewportHeight,
// // // // // //             behavior: 'smooth'
// // // // // //           });
// // // // // //         }
// // // // // //       }
// // // // // //     }, 0);
// // // // // //   }, [matrixSize]);


// // // // // useEffect(() => {
// // // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setHighlightCells([]);
// // // // //     setSarrusStep(0);
// // // // //     setSarrusExplanations([]);
// // // // //     setSarrusHighlights([]);
    
// // // // //     setTimeout(() => {
// // // // //       if (matrixContainerRef.current) {
// // // // //         const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
// // // // //         const viewportHeight = window.innerHeight;
// // // // //         if (matrixBottom > viewportHeight) {
// // // // //           window.scrollTo({
// // // // //             top: window.pageYOffset + (matrixBottom - viewportHeight+20),
// // // // //             behavior: 'smooth'
// // // // //           });
// // // // //         }
// // // // //       }
// // // // //     }, 0);
// // // // //   }, [matrixSize]);

// // // // // const handleMatrixChange = (i, j, value) => {
// // // // //     const newMatrix = matrix.map(row => [...row]);
// // // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // // //     setMatrix(newMatrix);
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setHighlightCells([]);
// // // // //     setSarrusStep(0);
// // // // //     setSarrusExplanations([]);
// // // // //     setSarrusHighlights([]);
// // // // //   };

// // // // //   const generateRandomMatrix = () => {
// // // // //     const newMatrix = matrix.map(row => 
// // // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // // //     );
// // // // //     setMatrix(newMatrix);
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setHighlightCells([]);
// // // // //     setSarrusStep(0);
// // // // //     setSarrusExplanations([]);
// // // // //     setSarrusHighlights([]);
// // // // //   };

// // // // //   const resetCalculator = () => {
// // // // //     setMatrixSize(2);
// // // // //     setMatrix([[0, 0], [0, 0]]);
// // // // //     setDeterminant(null);
// // // // //     setStep(0);
// // // // //     setExplanations([]);
// // // // //     setError('');
// // // // //     setHighlightCells([]);
// // // // //     setSarrusStep(0);
// // // // //     setSarrusExplanations([]);
// // // // //     setSarrusHighlights([]);
// // // // //   };

// // // // //   const calculateDeterminant = () => {
// // // // //     if (matrixSize === 2) {
// // // // //       setStep(1);
// // // // //       setExplanations([
// // // // //         "1. For a 2x2 matrix:",
// // // // //         "   [a b]",
// // // // //         "   [c d]",
// // // // //         "   The determinant is calculated using the formula: ad - bc"
// // // // //       ]);
// // // // //       setHighlightCells([]);
// // // // //     } else {
// // // // //       const det = calculateLargerDeterminant(matrix);
// // // // //       setDeterminant(det);
// // // // //       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
// // // // //     }
// // // // //   };

// // // // //   const calculateLargerDeterminant = (m) => {
// // // // //     if (m.length === 1) return m[0][0];
// // // // //     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

// // // // //     let det = 0;
// // // // //     for (let i = 0; i < m.length; i++) {
// // // // //       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
// // // // //       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
// // // // //     }
// // // // //     return det;
// // // // //   };

// // // // //   const nextStep = () => {
// // // // //     if (matrixSize !== 2) return;

// // // // //     const [[a, b], [c, d]] = matrix;
// // // // //     switch(step) {
// // // // //       case 1:
// // // // //         setStep(2);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `2. Multiply a and d: ${a} * ${d} = ${a * d}`
// // // // //         ]);
// // // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // // //         break;
// // // // //       case 2:
// // // // //         setStep(3);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `3. Multiply b and c: ${b} * ${c} = ${b * c}`
// // // // //         ]);
// // // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // // //         break;
// // // // //       case 3:
// // // // //         const det = a * d - b * c;
// // // // //         setStep(4);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
// // // // //         ]);
// // // // //         setHighlightCells([]);
// // // // //         break;
// // // // //       case 4:
// // // // //         setStep(5);
// // // // //         setDeterminant(a * d - b * c);
// // // // //         setExplanations(prev => [
// // // // //           ...prev,
// // // // //           `5. The determinant is ${a * d - b * c}`
// // // // //         ]);
// // // // //         break;
// // // // //       default:
// // // // //         resetCalculator();
// // // // //     }
// // // // //   };

// // // // //   const prevStep = () => {
// // // // //     if (matrixSize !== 2 || step <= 1) return;

// // // // //     setStep(prev => prev - 1);
// // // // //     setExplanations(prev => prev.slice(0, -1));
    
// // // // //     switch(step) {
// // // // //       case 2:
// // // // //         setHighlightCells([]);
// // // // //         break;
// // // // //       case 3:
// // // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // // //         break;
// // // // //       case 4:
// // // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // // //         break;
// // // // //       case 5:
// // // // //         setHighlightCells([]);
// // // // //         setDeterminant(null);
// // // // //         break;
// // // // //     }
// // // // //   };

// // // // //   // New function for Sarrus' Rule calculation
// // // // //   const calculateSarrusRule = () => {
// // // // //     if (matrixSize !== 3) return;

// // // // //     setSarrusStep(1);
// // // // //     setSarrusExplanations([
// // // // //       "1. Sarrus' Rule for 3x3 matrices:",
// // // // //       "   [a b c]",
// // // // //       "   [d e f]",
// // // // //       "   [g h i]",
// // // // //       "   The determinant is calculated using the formula:",
// // // // //       "   (aei + bfg + cdh) - (ceg + bdi + afh)"
// // // // //     ]);
// // // // //     setSarrusHighlights([]);
// // // // //   };

// // // // //   // New function for Sarrus' Rule next step
// // // // //   const nextSarrusStep = () => {
// // // // //     const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
// // // // //     switch(sarrusStep) {
// // // // //       case 1:
// // // // //         setSarrusStep(2);
// // // // //         setSarrusExplanations(prev => [
// // // // //           ...prev,
// // // // //           `2. Calculate positive diagonals:`,
// // // // //           `   a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`,
// // // // //           `   b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`,
// // // // //           `   c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`
// // // // //         ]);
// // // // //         setSarrusHighlights([[0, 0], [1, 1], [2, 2]]);
// // // // //         break;
// // // // //       case 2:
// // // // //         setSarrusStep(3);
// // // // //         setSarrusExplanations(prev => [
// // // // //           ...prev,
// // // // //           `3. Calculate negative diagonals:`,
// // // // //           `   c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`,
// // // // //           `   b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`,
// // // // //           `   a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`
// // // // //         ]);
// // // // //         setSarrusHighlights([[0, 2], [1, 1], [2, 0]]);
// // // // //         break;
// // // // //       case 3:
// // // // //         const det = (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h);
// // // // //         setSarrusStep(4);
// // // // //         setSarrusExplanations(prev => [
// // // // //           ...prev,
// // // // //           `4. Final calculation:`,
// // // // //           `   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${det}`
// // // // //         ]);
// // // // //         setSarrusHighlights([]);
// // // // //         setDeterminant(det);
// // // // //         break;
// // // // //       default:
// // // // //         resetCalculator();
// // // // //     }
// // // // //   };

// // // // //   // New function for Sarrus' Rule previous step
// // // // //   const prevSarrusStep = () => {
// // // // //     if (sarrusStep <= 1) return;

// // // // //     setSarrusStep(prev => prev - 1);
// // // // //     setSarrusExplanations(prev => prev.slice(0, -3));
    
// // // // //     switch(sarrusStep) {
// // // // //       case 2:
// // // // //         setSarrusHighlights([]);
// // // // //         break;
// // // // //       case 3:
// // // // //         setSarrusHighlights([[0, 0], [1, 1], [2, 2]]);
// // // // //         break;
// // // // //       case 4:
// // // // //         setSarrusHighlights([[0, 2], [1, 1], [2, 0]]);
// // // // //         setDeterminant(null);
// // // // //         break;
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
// // // // //             {size}x{size}
// // // // //           </label>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className={styles.contentContainer}>
// // // // //         <div className={styles.matrixSection}>
// // // // //           <div className={styles.controls} ref={controlsRef}>
// // // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // // //           </div>
// // // // //           {error && <div className={styles.error}>{error}</div>}
// // // // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // // // //             <table className={styles.matrix}>
// // // // //               <tbody>
// // // // //                 {matrix.map((row, i) => (
// // // // //                   <tr key={i}>
// // // // //                     {row.map((cell, j) => (
// // // // //                       <td key={j}>
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           value={cell}
// // // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // // //                           className={`${styles.matrixInput} ${
// // // // //                             (highlightCells.some(([x, y]) => x === i && y === j) ||
// // // // //                             sarrusHighlights.some(([x, y]) => x === i && y === j)) 
// // // // //                             ? styles.highlighted : ''
// // // // //                           }`}
// // // // //                         />
// // // // //                       </td>
// // // // //                     ))}
// // // // //                   </tr>
// // // // //                 ))}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className={styles.visualizationSection}>
// // // // //           <h3>Visualization</h3>
// // // // //           {matrixSize === 3 && (
// // // // //             <button className={styles.button} onClick={calculateSarrusRule}>Calculate using Sarrus&apos; Rule</button>
// // // // //           )}
// // // // //           <div className={styles.explanation}>
// // // // //             {matrixSize === 2 ? 
// // // // //               explanations.map((exp, index) => (
// // // // //                 <p key={index}>{exp}</p>
// // // // //               ))
// // // // //               :
// // // // //               sarrusExplanations.map((exp, index) => (
// // // // //                 <p key={index}>{exp}</p>
// // // // //               ))
// // // // //             }
// // // // //           </div>
// // // // //           {matrixSize === 2 && step > 0 && (
// // // // //             <div className={styles.stepControls}>
// // // // //               <button className={styles.button} onClick={prevStep} disabled={step <= 1}>Step Back</button>
// // // // //               <button className={styles.button} onClick={nextStep} disabled={step >= 5}>Next Step</button>
// // // // //             </div>
// // // // //           )}
// // // // //           {matrixSize === 3 && sarrusStep > 0 && (
// // // // //             <div className={styles.stepControls}>
// // // // //               <button className={styles.button} onClick={prevSarrusStep} disabled={sarrusStep <= 1}>Step Back</button>
// // // // //               <button className={styles.button} onClick={nextSarrusStep} disabled={sarrusStep >= 4}>Next Step</button>
// // // // //             </div>
// // // // //           )}
// // // // //           {determinant !== null && (
// // // // //             <div className={styles.result}>
// // // // //               <h3>Determinant: {determinant}</h3>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DeterminantCalculator;
// // // // 'use client';
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import styles from './DeterminantCalculator.module.css';

// // // // const SarrusMatrix = ({ matrix }) => {
// // // //   return (
// // // //     <table className={styles.sarrusMatrix}>
// // // //       <tbody>
// // // //         {matrix.map((row, i) => (
// // // //           <tr key={i}>
// // // //             {row.map((cell, j) => (
// // // //               <td key={j}>{cell}</td>
// // // //             ))}
// // // //             <td className={styles.sarrusDivider}></td>
// // // //             <td>{row[0]}</td>
// // // //             <td>{row[1]}</td>
// // // //           </tr>
// // // //         ))}
// // // //       </tbody>
// // // //     </table>
// // // //   );
// // // // };

// // // // const DeterminantCalculator = () => {
// // // //   const [matrixSize, setMatrixSize] = useState(2);
// // // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // // //   const [determinant, setDeterminant] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [step, setStep] = useState(0);
// // // //   const [explanations, setExplanations] = useState([]);
// // // //   const [highlightCells, setHighlightCells] = useState([]);

// // // //   const [sarrusStep, setSarrusStep] = useState(0);
// // // //   const [sarrusExplanations, setSarrusExplanations] = useState([]);
// // // //   const [sarrusHighlights, setSarrusHighlights] = useState([]);
// // // //   const [showSarrusMatrix, setShowSarrusMatrix] = useState(false);

// // // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // //   const controlsRef = useRef(null);
// // // //   const matrixContainerRef = useRef(null);

// // // //   useEffect(() => {
// // // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // // //     setDeterminant(null);
// // // //     setStep(0);
// // // //     setExplanations([]);
// // // //     setHighlightCells([]);
// // // //     setSarrusStep(0);
// // // //     setSarrusExplanations([]);
// // // //     setSarrusHighlights([]);
// // // //     setShowSarrusMatrix(false);
    
// // // //     setTimeout(() => {
// // // //       if (matrixContainerRef.current) {
// // // //         const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
// // // //         const viewportHeight = window.innerHeight;
// // // //         if (matrixBottom > viewportHeight) {
// // // //           window.scrollTo({
// // // //             top: window.pageYOffset + (matrixBottom - viewportHeight + 20),
// // // //             behavior: 'smooth'
// // // //           });
// // // //         }
// // // //       }
// // // //     }, 0);
// // // //   }, [matrixSize]);

// // // //   const handleMatrixChange = (i, j, value) => {
// // // //     const newMatrix = matrix.map(row => [...row]);
// // // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // // //     setMatrix(newMatrix);
// // // //     setDeterminant(null);
// // // //     setStep(0);
// // // //     setExplanations([]);
// // // //     setHighlightCells([]);
// // // //     setSarrusStep(0);
// // // //     setSarrusExplanations([]);
// // // //     setSarrusHighlights([]);
// // // //     setShowSarrusMatrix(false);
// // // //   };

// // // //   const generateRandomMatrix = () => {
// // // //     const newMatrix = matrix.map(row => 
// // // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // // //     );
// // // //     setMatrix(newMatrix);
// // // //     setDeterminant(null);
// // // //     setStep(0);
// // // //     setExplanations([]);
// // // //     setHighlightCells([]);
// // // //     setSarrusStep(0);
// // // //     setSarrusExplanations([]);
// // // //     setSarrusHighlights([]);
// // // //     setShowSarrusMatrix(false);
// // // //   };

// // // //   const resetCalculator = () => {
// // // //     setMatrixSize(2);
// // // //     setMatrix([[0, 0], [0, 0]]);
// // // //     setDeterminant(null);
// // // //     setStep(0);
// // // //     setExplanations([]);
// // // //     setError('');
// // // //     setHighlightCells([]);
// // // //     setSarrusStep(0);
// // // //     setSarrusExplanations([]);
// // // //     setSarrusHighlights([]);
// // // //     setShowSarrusMatrix(false);
// // // //   };

// // // //   const calculateDeterminant = () => {
// // // //     if (matrixSize === 2) {
// // // //       setStep(1);
// // // //       setExplanations([
// // // //         "1. For a 2x2 matrix:",
// // // //         "   [a b]",
// // // //         "   [c d]",
// // // //         "   The determinant is calculated using the formula: ad - bc"
// // // //       ]);
// // // //       setHighlightCells([]);
// // // //     } else {
// // // //       const det = calculateLargerDeterminant(matrix);
// // // //       setDeterminant(det);
// // // //       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
// // // //     }
// // // //   };

// // // //   const calculateLargerDeterminant = (m) => {
// // // //     if (m.length === 1) return m[0][0];
// // // //     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

// // // //     let det = 0;
// // // //     for (let i = 0; i < m.length; i++) {
// // // //       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
// // // //       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
// // // //     }
// // // //     return det;
// // // //   };

// // // //   const nextStep = () => {
// // // //     if (matrixSize !== 2) return;

// // // //     const [[a, b], [c, d]] = matrix;
// // // //     switch(step) {
// // // //       case 1:
// // // //         setStep(2);
// // // //         setExplanations(prev => [
// // // //           ...prev,
// // // //           `2. Multiply a and d: ${a} * ${d} = ${a * d}`
// // // //         ]);
// // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // //         break;
// // // //       case 2:
// // // //         setStep(3);
// // // //         setExplanations(prev => [
// // // //           ...prev,
// // // //           `3. Multiply b and c: ${b} * ${c} = ${b * c}`
// // // //         ]);
// // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // //         break;
// // // //       case 3:
// // // //         const det = a * d - b * c;
// // // //         setStep(4);
// // // //         setExplanations(prev => [
// // // //           ...prev,
// // // //           `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
// // // //         ]);
// // // //         setHighlightCells([]);
// // // //         break;
// // // //       case 4:
// // // //         setStep(5);
// // // //         setDeterminant(a * d - b * c);
// // // //         setExplanations(prev => [
// // // //           ...prev,
// // // //           `5. The determinant is ${a * d - b * c}`
// // // //         ]);
// // // //         break;
// // // //       default:
// // // //         resetCalculator();
// // // //     }
// // // //   };

// // // //   const prevStep = () => {
// // // //     if (matrixSize !== 2 || step <= 1) return;

// // // //     setStep(prev => prev - 1);
// // // //     setExplanations(prev => prev.slice(0, -1));
    
// // // //     switch(step) {
// // // //       case 2:
// // // //         setHighlightCells([]);
// // // //         break;
// // // //       case 3:
// // // //         setHighlightCells([[0, 0], [1, 1]]);
// // // //         break;
// // // //       case 4:
// // // //         setHighlightCells([[0, 1], [1, 0]]);
// // // //         break;
// // // //       case 5:
// // // //         setHighlightCells([]);
// // // //         setDeterminant(null);
// // // //         break;
// // // //     }
// // // //   };

// // // //   const calculateSarrusRule = () => {
// // // //     if (matrixSize !== 3) return;

// // // //     setSarrusStep(1);
// // // //     setSarrusExplanations([
// // // //       "1. Sarrus' Rule for 3x3 matrices:",
// // // //       "   [a b c | a b]",
// // // //       "   [d e f | d e]",
// // // //       "   [g h i | g h]",
// // // //       "   The determinant is calculated using the formula:",
// // // //       "   (aei + bfg + cdh) - (ceg + bdi + afh)"
// // // //     ]);
// // // //     setSarrusHighlights([]);
// // // //     setShowSarrusMatrix(true);
// // // //   };

// // // //   const nextSarrusStep = () => {
// // // //     const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
// // // //     switch(sarrusStep) {
// // // //       case 1:
// // // //         setSarrusStep(2);
// // // //         setSarrusExplanations(prev => [
// // // //           ...prev,
// // // //           `2. Calculate positive diagonals:`,
// // // //           `   a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`,
// // // //           `   b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`,
// // // //           `   c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`
// // // //         ]);
// // // //         setSarrusHighlights([[0, 0], [1, 1], [2, 2]]);
// // // //         break;
// // // //       case 2:
// // // //         setSarrusStep(3);
// // // //         setSarrusExplanations(prev => [
// // // //           ...prev,
// // // //           `3. Calculate negative diagonals:`,
// // // //           `   c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`,
// // // //           `   b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`,
// // // //           `   a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`
// // // //         ]);
// // // //         setSarrusHighlights([[0, 2], [1, 1], [2, 0]]);
// // // //         break;
// // // //       case 3:
// // // //         const det = (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h);
// // // //         setSarrusStep(4);
// // // //         setSarrusExplanations(prev => [
// // // //           ...prev,
// // // //           `4. Final calculation:`,
// // // //           `   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${det}`
// // // //         ]);
// // // //         setSarrusHighlights([]);
// // // //         setDeterminant(det);
// // // //         break;
// // // //       default:
// // // //         resetCalculator();
// // // //     }
// // // //   };

// // // //   const prevSarrusStep = () => {
// // // //     if (sarrusStep <= 1) return;

// // // //     setSarrusStep(prev => prev - 1);
// // // //     setSarrusExplanations(prev => prev.slice(0, -3));
    
// // // //     switch(sarrusStep) {
// // // //       case 2:
// // // //         setSarrusHighlights([]);
// // // //         break;
// // // //       case 3:
// // // //         setSarrusHighlights([[0, 0], [1, 1], [2, 2]]);
// // // //         break;
// // // //       case 4:
// // // //         setSarrusHighlights([[0, 2], [1, 1], [2, 0]]);
// // // //         setDeterminant(null);
// // // //         break;
// // // //     }
// // // //   };

// // // //   return (
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
// // // //             {size}x{size}
// // // //           </label>
// // // //         ))}
// // // //       </div>
// // // //       <div className={styles.contentContainer}>
// // // //         <div className={styles.matrixSection}>
// // // //           <div className={styles.controls} ref={controlsRef}>
// // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // //           </div>
// // // //           {error && <div className={styles.error}>{error}</div>}
// // // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // // //             <table className={styles.matrix}>
// // // //               <tbody>
// // // //                 {matrix.map((row, i) => (
// // // //                   <tr key={i}>
// // // //                     {row.map((cell, j) => (
// // // //                       <td key={j}>
// // // //                         <input
// // // //                           type="number"
// // // //                           value={cell}
// // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // //                           className={`${styles.matrixInput} ${
// // // //                             (highlightCells.some(([x, y]) => x === i && y === j) ||
// // // //                             sarrusHighlights.some(([x, y]) => x === i && y === j)) 
// // // //                             ? styles.highlighted : ''
// // // //                           }`}
// // // //                         />
// // // //                       </td>
// // // //                     ))}
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </div>
// // // //         <div className={styles.visualizationSection}>
// // // //           <h3>Visualization</h3>
// // // //           {matrixSize === 3 && (
// // // //             <button className={styles.button} onClick={calculateSarrusRule}>Calculate using Sarrus' Rule</button>
// // // //           )}
// // // //           {showSarrusMatrix && matrixSize === 3 && (
// // // //             <div className={styles.sarrusMatrixContainer}>
// // // //               <h4>Sarrus' Rule Matrix:</h4>
// // // //               <SarrusMatrix matrix={matrix} />
// // // //             </div>
// // // //           )}
// // // //           <div className={styles.explanation}>
// // // //             {matrixSize === 2 ? 
// // // //               explanations.map((exp, index) => (
// // // //                 <p key={index}>{exp}</p>
// // // //               ))
// // // //               :
// // // //               sarrusExplanations.map((exp, index) => (
// // // //                 <p key={index}>{exp}</p>
// // // //               ))
// // // //             }
// // // //           </div>
// // // //           {matrixSize === 2 && step > 0 && (
// // // //             <div className={styles.stepControls}>
// // // //               <button className={styles.button} onClick={prevStep} disabled={step <= 1}>Step Back</button>
// // // //               <button className={styles.button} onClick={nextStep} disabled={step >= 5}>Next Step</button>
// // // //             </div>
// // // //           )}
// // // //           {matrixSize === 3 && sarrusStep > 0 && (
// // // //             <div className={styles.stepControls}>
// // // //               <button className={styles.button} onClick={prevSarrusStep} disabled={sarrusStep <= 1}>Step Back</button>
// // // //               <button className={styles.button} onClick={nextSarrusStep} disabled={sarrusStep >= 4}>Next Step</button>
// // // //             </div>
// // // //           )}
// // // //           {determinant !== null && (
// // // //             <div className={styles.result}>
// // // //               <h3>Determinant: {determinant}</h3>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DeterminantCalculator;
// // // 'use client';
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import styles from './DeterminantCalculator.module.css';



// // // const SarrusMatrix = ({ matrix, highlightColumns, highlightDiagonals }) => {
// // //     const getHighlightClass = (i, j, isExtended) => {
// // //       if (highlightColumns) {
// // //         if (j === 0 || (isExtended && j === 3)) return styles.highlightCol1;
// // //         if (j === 1 || (isExtended && j === 4)) return styles.highlightCol2;
// // //       }
// // //       if (highlightDiagonals) {
// // //         if (
// // //           (i === 0 && j === 0) ||
// // //           (i === 1 && j === 1) ||
// // //           (i === 2 && j === 2) ||
// // //           (i === 0 && j === 3) ||
// // //           (i === 1 && j === 4) ||
// // //           (i === 2 && j === 2)
// // //         ) return styles.highlightPositiveDiagonal;
// // //         if (
// // //           (i === 0 && j === 2) ||
// // //           (i === 1 && j === 1) ||
// // //           (i === 2 && j === 0) ||
// // //           (i === 0 && j === 4) ||
// // //           (i === 1 && j === 3) ||
// // //           (i === 2 && j === 2)
// // //         ) return styles.highlightNegativeDiagonal;
// // //       }
// // //       return '';
// // //     };
  
// // //     return (
// // //       <div className={styles.sarrusMatrixContainer}>
// // //         <table className={styles.sarrusMatrix}>
// // //           <tbody>
// // //             {matrix.map((row, i) => (
// // //               <tr key={i}>
// // //                 {row.map((cell, j) => (
// // //                   <td key={j} className={getHighlightClass(i, j, false)}>{cell}</td>
// // //                 ))}
// // //                 {row.slice(0, 2).map((cell, j) => (
// // //                   <td key={j + 3} className={getHighlightClass(i, j + 3, true)}>{cell}</td>
// // //                 ))}
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     );
// // //   };

// // // const DeterminantCalculator = () => {
// // //   const [matrixSize, setMatrixSize] = useState(2);
// // //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// // //   const [determinant, setDeterminant] = useState(null);
// // //   const [error, setError] = useState('');
// // //   const [step, setStep] = useState(0);
// // //   const [explanations, setExplanations] = useState([]);
// // //   const [highlightCells, setHighlightCells] = useState([]);

// // //   const [sarrusStep, setSarrusStep] = useState(0);
// // //   const [sarrusExplanations, setSarrusExplanations] = useState([]);
// // //   const [sarrusHighlights, setSarrusHighlights] = useState([]);
// // //   const [showSarrusMatrix, setShowSarrusMatrix] = useState(false);
// // //   const [highlightColumns, setHighlightColumns] = useState(false);
// // //   const [highlightDiagonals, setHighlightDiagonals] = useState(false);

// // //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // //   const controlsRef = useRef(null);
// // //   const matrixContainerRef = useRef(null);

// // //   useEffect(() => {
// // //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// // //     setDeterminant(null);
// // //     setStep(0);
// // //     setExplanations([]);
// // //     setHighlightCells([]);
// // //     setSarrusStep(0);
// // //     setSarrusExplanations([]);
// // //     setSarrusHighlights([]);
// // //     setShowSarrusMatrix(false);
// // //     setHighlightColumns(false);
// // //     setHighlightDiagonals(false);
    
// // //     setTimeout(() => {
// // //       if (matrixContainerRef.current) {
// // //         const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
// // //         const viewportHeight = window.innerHeight;
// // //         if (matrixBottom > viewportHeight) {
// // //           window.scrollTo({
// // //             top: window.pageYOffset + (matrixBottom - viewportHeight + 20),
// // //             behavior: 'smooth'
// // //           });
// // //         }
// // //       }
// // //     }, 0);
// // //   }, [matrixSize]);

// // //   const handleMatrixChange = (i, j, value) => {
// // //     const newMatrix = matrix.map(row => [...row]);
// // //     newMatrix[i][j] = value === '' ? '' : Number(value);
// // //     setMatrix(newMatrix);
// // //     setDeterminant(null);
// // //     setStep(0);
// // //     setExplanations([]);
// // //     setHighlightCells([]);
// // //     setSarrusStep(0);
// // //     setSarrusExplanations([]);
// // //     setSarrusHighlights([]);
// // //     setShowSarrusMatrix(false);
// // //     setHighlightColumns(false);
// // //     setHighlightDiagonals(false);
// // //   };

// // //   const generateRandomMatrix = () => {
// // //     const newMatrix = matrix.map(row => 
// // //       row.map(() => Math.floor(Math.random() * 10) - 5)
// // //     );
// // //     setMatrix(newMatrix);
// // //     setDeterminant(null);
// // //     setStep(0);
// // //     setExplanations([]);
// // //     setHighlightCells([]);
// // //     setSarrusStep(0);
// // //     setSarrusExplanations([]);
// // //     setSarrusHighlights([]);
// // //     setShowSarrusMatrix(false);
// // //     setHighlightColumns(false);
// // //     setHighlightDiagonals(false);
// // //   };

// // //   const resetCalculator = () => {
// // //     setMatrixSize(2);
// // //     setMatrix([[0, 0], [0, 0]]);
// // //     setDeterminant(null);
// // //     setStep(0);
// // //     setExplanations([]);
// // //     setError('');
// // //     setHighlightCells([]);
// // //     setSarrusStep(0);
// // //     setSarrusExplanations([]);
// // //     setSarrusHighlights([]);
// // //     setShowSarrusMatrix(false);
// // //     setHighlightColumns(false);
// // //     setHighlightDiagonals(false);
// // //   };

// // //   const calculateDeterminant = () => {
// // //     if (matrixSize === 2) {
// // //       setStep(1);
// // //       setExplanations([
// // //         "1. For a 2x2 matrix:",
// // //         "   [a b]",
// // //         "   [c d]",
// // //         "   The determinant is calculated using the formula: ad - bc"
// // //       ]);
// // //       setHighlightCells([]);
// // //     } else {
// // //       const det = calculateLargerDeterminant(matrix);
// // //       setDeterminant(det);
// // //       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
// // //     }
// // //   };

// // //   const calculateLargerDeterminant = (m) => {
// // //     if (m.length === 1) return m[0][0];
// // //     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

// // //     let det = 0;
// // //     for (let i = 0; i < m.length; i++) {
// // //       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
// // //       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
// // //     }
// // //     return det;
// // //   };

// // //   const nextStep = () => {
// // //     if (matrixSize !== 2) return;

// // //     const [[a, b], [c, d]] = matrix;
// // //     switch(step) {
// // //       case 1:
// // //         setStep(2);
// // //         setExplanations(prev => [
// // //           ...prev,
// // //           `2. Multiply a and d: ${a} * ${d} = ${a * d}`
// // //         ]);
// // //         setHighlightCells([[0, 0], [1, 1]]);
// // //         break;
// // //       case 2:
// // //         setStep(3);
// // //         setExplanations(prev => [
// // //           ...prev,
// // //           `3. Multiply b and c: ${b} * ${c} = ${b * c}`
// // //         ]);
// // //         setHighlightCells([[0, 1], [1, 0]]);
// // //         break;
// // //       case 3:
// // //         const det = a * d - b * c;
// // //         setStep(4);
// // //         setExplanations(prev => [
// // //           ...prev,
// // //           `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
// // //         ]);
// // //         setHighlightCells([]);
// // //         break;
// // //       case 4:
// // //         setStep(5);
// // //         setDeterminant(a * d - b * c);
// // //         setExplanations(prev => [
// // //           ...prev,
// // //           `5. The determinant is ${a * d - b * c}`
// // //         ]);
// // //         break;
// // //       default:
// // //         resetCalculator();
// // //     }
// // //   };

// // //   const prevStep = () => {
// // //     if (matrixSize !== 2 || step <= 1) return;

// // //     setStep(prev => prev - 1);
// // //     setExplanations(prev => prev.slice(0, -1));
    
// // //     switch(step) {
// // //       case 2:
// // //         setHighlightCells([]);
// // //         break;
// // //       case 3:
// // //         setHighlightCells([[0, 0], [1, 1]]);
// // //         break;
// // //       case 4:
// // //         setHighlightCells([[0, 1], [1, 0]]);
// // //         break;
// // //       case 5:
// // //         setHighlightCells([]);
// // //         setDeterminant(null);
// // //         break;
// // //     }
// // //   };

// // //   const calculateSarrusRule = () => {
// // //     if (matrixSize !== 3) return;

// // //     setSarrusStep(1);
// // //     setSarrusExplanations([
// // //       "1. Sarrus' Rule for 3x3 matrices:",
// // //       "   Extend the matrix by copying the first two columns to the right",
// // //       "   [a b c | a b]",
// // //       "   [d e f | d e]",
// // //       "   [g h i | g h]",
// // //     ]);
// // //     setHighlightColumns(true);
// // //     setHighlightDiagonals(false);
// // //     setShowSarrusMatrix(true);
// // //   };

// // //   const nextSarrusStep = () => {
// // //     const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
// // //     switch(sarrusStep) {
// // //       case 1:
// // //         setSarrusStep(2);
// // //         setSarrusExplanations(prev => [
// // //           ...prev,
// // //           `2. Calculate positive diagonals:`,
// // //           `   a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`,
// // //           `   b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`,
// // //           `   c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`
// // //         ]);
// // //         setHighlightColumns(false);
// // //         setHighlightDiagonals(true);
// // //         break;
// // //       case 2:
// // //         setSarrusStep(3);
// // //         setSarrusExplanations(prev => [
// // //           ...prev,
// // //           `3. Calculate negative diagonals:`,
// // //           `   c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`,
// // //           `   b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`,
// // //           `   a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`
// // //         ]);
// // //         break;
// // //       case 3:
// // //         const det = (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h);
// // //         setSarrusStep(4);
// // //         setSarrusExplanations(prev => [
// // //           ...prev,
// // //           `4. Final calculation:`,
// // //           `   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${det}`
// // //         ]);
// // //         setHighlightDiagonals(false);
// // //         setDeterminant(det);
// // //         break;
// // //       default:
// // //         resetCalculator();
// // //     }
// // //   };

// // //   const prevSarrusStep = () => {
// // //     if (sarrusStep <= 1) return;

// // //     setSarrusStep(prev => prev - 1);
// // //     setSarrusExplanations(prev => prev.slice(0, -3));
    
// // //     switch(sarrusStep) {
// // //       case 2:
// // //         setHighlightColumns(true);
// // //         setHighlightDiagonals(false);
// // //         break;
// // //       case 3:
// // //         setHighlightDiagonals(true);
// // //         break;
// // //       case 4:
// // //         setHighlightDiagonals(true);
// // //         setDeterminant(null);
// // //         break;
// // //     }
// // //   };

// // // //   return (
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
// // // //             {size}x{size}
// // // //           </label>
// // // //         ))}
// // // //       </div>
// // // //       <div className={styles.contentContainer}>
// // // //         <div className={styles.matrixSection}>
// // // //           <div className={styles.controls} ref={controlsRef}>
// // // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // // //           </div>
// // // //           {error && <div className={styles.error}>{error}</div>}
// // // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // // //             <table className={styles.matrix}>
// // // //               <tbody>
// // // //                 {matrix.map((row, i) => (
// // // //                   <tr key={i}>
// // // //                     {row.map((cell, j) => (
// // // //                       <td key={j}>
// // // //                         <input
// // // //                           type="number"
// // // //                           value={cell}
// // // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // // //                           className={`${styles.matrixInput} ${
// // // //                             (highlightCells.some(([x, y]) => x === i && y === j) ||
// // // //                             sarrusHighlights.some(([x, y]) => x === i && y === j)) 
// // // //                             ? styles.highlighted : ''
// // // //                           }`}
// // // //                         />
// // // //                       </td>
// // // //                     ))}
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </div>
// // // //         <div className={styles.visualizationSection}>
// // // //           <h3>Visualization</h3>
// // // //           {matrixSize === 3 && (
// // // //             <button className={styles.button} onClick={calculateSarrusRule}>Calculate using Sarrus' Rule</button>
// // // //           )}
// // // //           {showSarrusMatrix && matrixSize === 3 && (
// // // //             <div className={styles.sarrusMatrixContainer}>
// // // //               <h4>Sarrus' Rule Matrix:</h4>
// // // //               <table className={styles.sarrusMatrix}>
// // // //                 <tbody>
// // // //                   {matrix.map((row, i) => (
// // // //                     <tr key={i}>
// // // //                       {row.map((cell, j) => (
// // // //                         <td key={j} className={
// // // //                           highlightColumns ? (j === 0 ? styles.highlightCol1 : j === 1 ? styles.highlightCol2 : '') :
// // // //                           highlightDiagonals ? (
// // // //                             (i === j || (i === 0 && j === 2) || (i === 2 && j === 0)) ? styles.highlightPositiveDiagonal :
// // // //                             ((i + j === 2) || (i === 0 && j === 1) || (i === 2 && j === 1)) ? styles.highlightNegativeDiagonal : ''
// // // //                           ) : ''
// // // //                         }>{cell}</td>
// // // //                       ))}
// // // //                       {row.slice(0, 2).map((cell, j) => (
// // // //                         <td key={j + 3} className={
// // // //                           highlightColumns ? (j === 0 ? styles.highlightCol1 : styles.highlightCol2) :
// // // //                           highlightDiagonals ? (
// // // //                             (i === j) ? styles.highlightPositiveDiagonal :
// // // //                             (i + j === 2) ? styles.highlightNegativeDiagonal : ''
// // // //                           ) : ''
// // // //                         }>{cell}</td>
// // // //                       ))}
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           )}
// // // //           <div className={styles.explanation}>
// // // //             {matrixSize === 2 ? 
// // // //               explanations.map((exp, index) => (
// // // //                 <p key={index}>{exp}</p>
// // // //               ))
// // // //               :
// // // //               sarrusExplanations.map((exp, index) => (
// // // //                 <p key={index}>{exp}</p>
// // // //               ))
// // // //             }
// // // //           </div>
// // // //           {matrixSize === 2 && step > 0 && (
// // // //             <div className={styles.stepControls}>
// // // //               <button className={styles.button} onClick={prevStep} disabled={step <= 1}>Step Back</button>
// // // //               <button className={styles.button} onClick={nextStep} disabled={step >= 5}>Next Step</button>
// // // //             </div>
// // // //           )}
// // // //           {matrixSize === 3 && sarrusStep > 0 && (
// // // //             <div className={styles.stepControls}>
// // // //               <button className={styles.button} onClick={prevSarrusStep} disabled={sarrusStep <= 1}>Step Back</button>
// // // //               <button className={styles.button} onClick={nextSarrusStep} disabled={sarrusStep >= 4}>Next Step</button>
// // // //             </div>
// // // //           )}
// // // //           {determinant !== null && (
// // // //             <div className={styles.result}>
// // // //               <h3>Determinant: {determinant}</h3>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );


// // // return (
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
// // //             {size}x{size}
// // //           </label>
// // //         ))}
// // //       </div>
// // //       <div className={styles.contentContainer}>
// // //         <div className={styles.matrixSection}>
// // //           <div className={styles.controls} ref={controlsRef}>
// // //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// // //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// // //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// // //           </div>
// // //           {error && <div className={styles.error}>{error}</div>}
// // //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// // //             <table className={styles.matrix}>
// // //               <tbody>
// // //                 {matrix.map((row, i) => (
// // //                   <tr key={i}>
// // //                     {row.map((cell, j) => (
// // //                       <td key={j}>
// // //                         <input
// // //                           type="number"
// // //                           value={cell}
// // //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// // //                           className={`${styles.matrixInput} ${
// // //                             (highlightCells.some(([x, y]) => x === i && y === j) ||
// // //                             sarrusHighlights.some(([x, y]) => x === i && y === j)) 
// // //                             ? styles.highlighted : ''
// // //                           }`}
// // //                         />
// // //                       </td>
// // //                     ))}
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //           {showSarrusMatrix && matrixSize === 3 && (
// // //             <div className={styles.sarrusMatrixContainer}>
// // //               <div className={styles.columnNumbers}>
// // //                 <span>1</span><span>2</span><span>3</span><span>1</span><span>2</span>
// // //               </div>
// // //               <table className={styles.sarrusMatrix}>
// // //                 <tbody>
// // //                   {matrix.map((row, i) => (
// // //                     <tr key={i}>
// // //                       {row.map((cell, j) => (
// // //                         <td key={j} className={
// // //                           highlightColumns ? (j === 0 ? styles.highlightCol1 : j === 1 ? styles.highlightCol2 : '') :
// // //                           highlightDiagonals ? (
// // //                             (i === j || (i === 0 && j === 2) || (i === 2 && j === 0)) ? styles.highlightMainDiagonal :
// // //                             ((i + j === 2) || (i === 0 && j === 1) || (i === 2 && j === 1)) ? styles.highlightSecondaryDiagonal : ''
// // //                           ) : ''
// // //                         }>{cell}</td>
// // //                       ))}
// // //                       {row.slice(0, 2).map((cell, j) => (
// // //                         <td key={j + 3} className={
// // //                           highlightColumns ? (j === 0 ? styles.highlightCol1 : styles.highlightCol2) :
// // //                           highlightDiagonals ? (
// // //                             (i === j) ? styles.highlightMainDiagonal :
// // //                             (i + j === 2) ? styles.highlightSecondaryDiagonal : ''
// // //                           ) : ''
// // //                         }>{cell}</td>
// // //                       ))}
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           )}
// // //         </div>
// // //         <div className={styles.visualizationSection}>
// // //           <h3>Visualization</h3>
// // //           {matrixSize === 3 && (
// // //             <button className={styles.button} onClick={calculateSarrusRule}>Calculate using Sarrus' Rule</button>
// // //           )}
// // //           <div className={styles.explanation}>
// // //             {matrixSize === 2 ? 
// // //               explanations.map((exp, index) => (
// // //                 <p key={index}>{exp}</p>
// // //               ))
// // //               :
// // //               sarrusExplanations.map((exp, index) => (
// // //                 <p key={index}>
// // //                   {exp}
// // //                   {index === 0 && (
// // //                     // <svg width="120" height="120" viewBox="0 0 120 120">
// // //                     //   <rect x="10" y="10" width="100" height="100" fill="none" stroke="black" />
// // //                     //   <line x1="10" y1="43" x2="110" y2="43" stroke="black" />
// // //                     //   <line x1="10" y1="77" x2="110" y2="77" stroke="black" />
// // //                     //   <line x1="43" y1="10" x2="43" y2="110" stroke="black" />
// // //                     //   <line x1="77" y1="10" x2="77" y2="110" stroke="black" />
// // //                     //   <text x="25" y="35" font-size="20">a</text>
// // //                     //   <text x="58" y="35" font-size="20">b</text>
// // //                     //   <text x="92" y="35" font-size="20">c</text>
// // //                     //   <text x="25" y="68" font-size="20">d</text>
// // //                     //   <text x="58" y="68" font-size="20">e</text>
// // //                     //   <text x="92" y="68" font-size="20">f</text>
// // //                     //   <text x="25" y="102" font-size="20">g</text>
// // //                     //   <text x="58" y="102" font-size="20">h</text>
// // //                     //   <text x="92" y="102" font-size="20">i</text>
// // //                     // </svg>
// // //                     <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
// // //     <path d="M 10,10 Q 0,50 10,90" stroke="black" fill="transparent" stroke-width="2"/>
// // //     <path d="M 140,10 Q 150,50 140,90" stroke="black" fill="transparent" stroke-width="2"/>
// // //     <text x="30" y="30" font-family="Arial" font-size="14">a</text>
// // //     <text x="70" y="30" font-family="Arial" font-size="14">b</text>
// // //     <text x="110" y="30" font-family="Arial" font-size="14">c</text>
// // //     <text x="30" y="55" font-family="Arial" font-size="14">d</text>
// // //     <text x="70" y="55" font-family="Arial" font-size="14">e</text>
// // //     <text x="110" y="55" font-family="Arial" font-size="14">f</text>
// // //     <text x="30" y="80" font-family="Arial" font-size="14">g</text>
// // //     <text x="70" y="80" font-family="Arial" font-size="14">h</text>
// // //     <text x="110" y="80" font-family="Arial" font-size="14">i</text>
// // // </svg>

// // //                   )}
// // //                 </p>
// // //               ))
// // //             }
// // //           </div>
// // //           {matrixSize === 2 && step > 0 && (
// // //             <div className={styles.stepControls}>
// // //               <button className={styles.button} onClick={prevStep} disabled={step <= 1}>Step Back</button>
// // //               <button className={styles.button} onClick={nextStep} disabled={step >= 5}>Next Step</button>
// // //             </div>
// // //           )}
// // //           {matrixSize === 3 && sarrusStep > 0 && (
// // //             <div className={styles.stepControls}>
// // //               <button className={styles.button} onClick={prevSarrusStep} disabled={sarrusStep <= 1}>Step Back</button>
// // //               <button className={styles.button} onClick={nextSarrusStep} disabled={sarrusStep >= 4}>Next Step</button>
// // //             </div>
// // //           )}
// // //           {determinant !== null && (
// // //             <div className={styles.result}>
// // //               <h3>Determinant: {determinant}</h3>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // // };

// // // export default DeterminantCalculator;
// // 'use client';
// // import React, { useState, useEffect, useRef } from 'react';
// // import styles from './DeterminantCalculator.module.css';
// // import { getSarrusSVG } from './sarrusMatrix.js';

// // const DeterminantCalculator = () => {
// //   const [matrixSize, setMatrixSize] = useState(2);
// //   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
// //   const [determinant, setDeterminant] = useState(null);
// //   const [error, setError] = useState('');
// //   const [step, setStep] = useState(0);
// //   const [explanations, setExplanations] = useState([]);
// //   const [highlightCells, setHighlightCells] = useState([]);
// //   const [sarrusStep, setSarrusStep] = useState(0);

// //   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// //   const controlsRef = useRef(null);
// //   const matrixContainerRef = useRef(null);

// //   useEffect(() => {
// //     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
// //     setDeterminant(null);
// //     setStep(0);
// //     setExplanations([]);
// //     setHighlightCells([]);
// //     setSarrusStep(0);
    
// //     setTimeout(() => {
// //       if (matrixContainerRef.current) {
// //         const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
// //         const viewportHeight = window.innerHeight;
// //         if (matrixBottom > viewportHeight) {
// //           window.scrollTo({
// //             top: window.pageYOffset + (matrixBottom - viewportHeight + 20),
// //             behavior: 'smooth'
// //           });
// //         }
// //       }
// //     }, 0);
// //   }, [matrixSize]);

// //   const handleMatrixChange = (i, j, value) => {
// //     const newMatrix = matrix.map(row => [...row]);
// //     newMatrix[i][j] = value === '' ? '' : Number(value);
// //     setMatrix(newMatrix);
// //     setDeterminant(null);
// //     setStep(0);
// //     setExplanations([]);
// //     setHighlightCells([]);
// //     setSarrusStep(0);
// //   };

// //   const generateRandomMatrix = () => {
// //     const newMatrix = matrix.map(row => 
// //       row.map(() => Math.floor(Math.random() * 10) - 5)
// //     );
// //     setMatrix(newMatrix);
// //     setDeterminant(null);
// //     setStep(0);
// //     setExplanations([]);
// //     setHighlightCells([]);
// //     setSarrusStep(0);
// //   };

// //   const resetCalculator = () => {
// //     setMatrixSize(2);
// //     setMatrix([[0, 0], [0, 0]]);
// //     setDeterminant(null);
// //     setStep(0);
// //     setExplanations([]);
// //     setError('');
// //     setHighlightCells([]);
// //     setSarrusStep(0);
// //   };

// //   const calculateDeterminant = () => {
// //     if (matrixSize === 2) {
// //       setStep(1);
// //       setExplanations([
// //         "1. For a 2x2 matrix:",
// //         "   [a b]",
// //         "   [c d]",
// //         "   The determinant is calculated using the formula: ad - bc"
// //       ]);
// //       setHighlightCells([]);
// //     } else if (matrixSize === 3) {
// //       setSarrusStep(1);
// //       setExplanations([
// //         "Sarrus' Rule for 3x3 matrices:",
// //         "det(A) = (aei + bfg + cdh) - (ceg + bdi + afh)",
// //         "1. Extend the matrix by copying the first two columns to the right"
// //       ]);
// //     } else {
// //       const det = calculateLargerDeterminant(matrix);
// //       setDeterminant(det);
// //       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
// //     }
// //   };

// //   const calculateLargerDeterminant = (m) => {
// //     if (m.length === 1) return m[0][0];
// //     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

// //     let det = 0;
// //     for (let i = 0; i < m.length; i++) {
// //       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
// //       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
// //     }
// //     return det;
// //   };

// //   const nextStep = () => {
// //     if (matrixSize === 2) {
// //       const [[a, b], [c, d]] = matrix;
// //       switch(step) {
// //         case 1:
// //           setStep(2);
// //           setExplanations(prev => [
// //             ...prev,
// //             `2. Multiply a and d: ${a} * ${d} = ${a * d}`
// //           ]);
// //           setHighlightCells([[0, 0], [1, 1]]);
// //           break;
// //         case 2:
// //           setStep(3);
// //           setExplanations(prev => [
// //             ...prev,
// //             `3. Multiply b and c: ${b} * ${c} = ${b * c}`
// //           ]);
// //           setHighlightCells([[0, 1], [1, 0]]);
// //           break;
// //         case 3:
// //           const det = a * d - b * c;
// //           setStep(4);
// //           setExplanations(prev => [
// //             ...prev,
// //             `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
// //           ]);
// //           setHighlightCells([]);
// //           break;
// //         case 4:
// //           setStep(5);
// //           setDeterminant(a * d - b * c);
// //           setExplanations(prev => [
// //             ...prev,
// //             `5. The determinant is ${a * d - b * c}`
// //           ]);
// //           break;
// //         default:
// //           resetCalculator();
// //       }
// //     } else if (matrixSize === 3) {
// //       const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
// //       switch(sarrusStep) {
// //         case 1:
// //           setSarrusStep(2);
// //           setExplanations(prev => [
// //             ...prev,
// //             `2. Calculate first positive diagonal: a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`
// //           ]);
// //           break;
// //         case 2:
// //           setSarrusStep(3);
// //           setExplanations(prev => [
// //             ...prev,
// //             `3. Calculate second positive diagonal: b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`
// //           ]);
// //           break;
// //         case 3:
// //           setSarrusStep(4);
// //           setExplanations(prev => [
// //             ...prev,
// //             `4. Calculate third positive diagonal: c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`
// //           ]);
// //           break;
// //         case 4:
// //           setSarrusStep(5);
// //           setExplanations(prev => [
// //             ...prev,
// //             `5. Calculate first negative diagonal: c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`
// //           ]);
// //           break;
// //         case 5:
// //           setSarrusStep(6);
// //           setExplanations(prev => [
// //             ...prev,
// //             `6. Calculate second negative diagonal: b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`
// //           ]);
// //           break;
// //         case 6:
// //           setSarrusStep(7);
// //           setExplanations(prev => [
// //             ...prev,
// //             `7. Calculate third negative diagonal: a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`
// //           ]);
// //           break;
// //         case 7:
// //           const det = (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h);
// //           setSarrusStep(8);
// //           setExplanations(prev => [
// //             ...prev,
// //             `8. Final calculation:`,
// //             `   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${det}`
// //           ]);
// //           setDeterminant(det);
// //           break;
// //         default:
// //           resetCalculator();
// //       }
// //     }
// //   };

// //   const prevStep = () => {
// //     if (matrixSize === 2) {
// //       if (step <= 1) return;
// //       setStep(prev => prev - 1);
// //       setExplanations(prev => prev.slice(0, -1));
      
// //       switch(step) {
// //         case 2:
// //           setHighlightCells([]);
// //           break;
// //         case 3:
// //           setHighlightCells([[0, 0], [1, 1]]);
// //           break;
// //         case 4:
// //           setHighlightCells([[0, 1], [1, 0]]);
// //           break;
// //         case 5:
// //           setHighlightCells([]);
// //           setDeterminant(null);
// //           break;
// //       }
// //     } else if (matrixSize === 3) {
// //       if (sarrusStep <= 1) return;
// //       setSarrusStep(prev => prev - 1);
// //       setExplanations(prev => prev.slice(0, -1));
// //       if (sarrusStep === 8) {
// //         setDeterminant(null);
// //       }
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
// //             {size}x{size}
// //           </label>
// //         ))}
// //       </div>
// //       <div className={styles.contentContainer}>
// //         <div className={styles.matrixSection}>
// //           <div className={styles.controls} ref={controlsRef}>
// //             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
// //             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
// //             <button className={styles.button} onClick={resetCalculator}>Reset</button>
// //           </div>
// //           {error && <div className={styles.error}>{error}</div>}
// //           <div className={styles.matrixContainer} ref={matrixContainerRef}>
// //             <table className={styles.matrix}>
// //               <tbody>
// //                 {matrix.map((row, i) => (
// //                   <tr key={i}>
// //                     {row.map((cell, j) => (
// //                       <td key={j}>
// //                         <input
// //                           type="number"
// //                           value={cell}
// //                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
// //                           className={`${styles.matrixInput} ${
// //                             highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''
// //                           }`}
// //                         />
// //                       </td>
// //                     ))}
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //         <div className={styles.visualizationSection}>
// //           <h3>Visualization</h3>
// //           {matrixSize === 3 && sarrusStep > 0 && (
// //             <div className={styles.sarrusVisualization} dangerouslySetInnerHTML={{ __html: getSarrusSVG(sarrusStep) }} />
// //           )}
// //           <div className={styles.explanation}>
// //             {explanations.map((exp, index) => (
// //               <p key={index}>{exp}</p>
// //             ))}
// //           </div>
// //           {(matrixSize === 2 && step > 0) || (matrixSize === 3 && sarrusStep > 0) ? (
// //             <div className={styles.stepControls}>
// //               <button className={styles.button} onClick={prevStep} disabled={matrixSize === 2 ? step <= 1 : sarrusStep <= 1}>Step Back</button>
// //               <button className={styles.button} onClick={nextStep} disabled={matrixSize === 2 ? step >= 5 : sarrusStep >= 8}>Next Step</button>
// //             </div>
// //           ) : null}
// //           {determinant !== null && (
// //             <div className={styles.result}>
// //               <h3>Determinant: {determinant}</h3>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DeterminantCalculator;
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import styles from './DeterminantCalculator.module.css';
// import { getSarrusSVG } from './sarrusMatrix.js';

// const DeterminantCalculator = () => {
//   const [matrixSize, setMatrixSize] = useState(2);
//   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
//   const [determinant, setDeterminant] = useState(null);
//   const [error, setError] = useState('');
//   const [step, setStep] = useState(0);
//   const [explanations, setExplanations] = useState([]);
//   const [highlightCells, setHighlightCells] = useState([]);
//   const [sarrusStep, setSarrusStep] = useState(0);

//   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const controlsRef = useRef(null);
//   const matrixContainerRef = useRef(null);
//   const visualizationRef = useRef(null);

//   useEffect(() => {
//     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setHighlightCells([]);
//     setSarrusStep(0);
    
//     setTimeout(() => {
//       if (matrixContainerRef.current) {
//         const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
//         const viewportHeight = window.innerHeight;
//         if (matrixBottom > viewportHeight) {
//           window.scrollTo({
//             top: window.pageYOffset + (matrixBottom - viewportHeight + 20),
//             behavior: 'smooth'
//           });
//         }
//       }
//     }, 0);
//   }, [matrixSize]);

//   useEffect(() => {
//     if (visualizationRef.current && (step > 0 || sarrusStep > 0)) {
//       visualizationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [step, sarrusStep]);

//   const handleMatrixChange = (i, j, value) => {
//     const newMatrix = matrix.map(row => [...row]);
//     newMatrix[i][j] = value === '' ? '' : Number(value);
//     setMatrix(newMatrix);
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setHighlightCells([]);
//     setSarrusStep(0);
//   };

//   const generateRandomMatrix = () => {
//     const newMatrix = matrix.map(row => 
//       row.map(() => Math.floor(Math.random() * 10) - 5)
//     );
//     setMatrix(newMatrix);
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setHighlightCells([]);
//     setSarrusStep(0);
//   };

//   const resetCalculator = () => {
//     setMatrixSize(2);
//     setMatrix([[0, 0], [0, 0]]);
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setError('');
//     setHighlightCells([]);
//     setSarrusStep(0);
//   };

//   const calculateDeterminant = () => {
//     if (matrixSize === 2) {
//       setStep(1);
//       setExplanations([
//         "1. For a 2x2 matrix:",
//         "   [a b]",
//         "   [c d]",
//         "   The determinant is calculated using the formula: ad - bc"
//       ]);
//       setHighlightCells([]);
//     } else if (matrixSize === 3) {
//       setSarrusStep(1);
//       setExplanations([
//         "Sarrus' Rule for 3x3 matrices:",
//         "det(A) = (aei + bfg + cdh) - (ceg + bdi + afh)",
//         "1. Extend the matrix by copying the first two columns to the right"
//       ]);
//     } else {
//       const det = calculateLargerDeterminant(matrix);
//       setDeterminant(det);
//       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
//     }
//   };

//   const calculateLargerDeterminant = (m) => {
//     if (m.length === 1) return m[0][0];
//     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

//     let det = 0;
//     for (let i = 0; i < m.length; i++) {
//       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
//       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
//     }
//     return det;
//   };

//   const nextStep = () => {
//     if (matrixSize === 2) {
//       const [[a, b], [c, d]] = matrix;
//       switch(step) {
//         case 1:
//           setStep(2);
//           setExplanations(prev => [
//             ...prev,
//             `2. Multiply a and d: ${a} * ${d} = ${a * d}`
//           ]);
//           setHighlightCells([[0, 0], [1, 1]]);
//           break;
//         case 2:
//           setStep(3);
//           setExplanations(prev => [
//             ...prev,
//             `3. Multiply b and c: ${b} * ${c} = ${b * c}`
//           ]);
//           setHighlightCells([[0, 1], [1, 0]]);
//           break;
//         case 3:
//           const det = a * d - b * c;
//           setStep(4);
//           setExplanations(prev => [
//             ...prev,
//             `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
//           ]);
//           setHighlightCells([]);
//           break;
//         case 4:
//           setStep(5);
//           setDeterminant(a * d - b * c);
//           setExplanations(prev => [
//             ...prev,
//             `5. The determinant is ${a * d - b * c}`
//           ]);
//           break;
//         default:
//           resetCalculator();
//       }
//     } else if (matrixSize === 3) {
//       const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
//       switch(sarrusStep) {
//         case 1:
//           setSarrusStep(2);
//           setExplanations(prev => [
//             ...prev,
//             `2. Calculate first positive diagonal: a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`
//           ]);
//           break;
//         case 2:
//           setSarrusStep(3);
//           setExplanations(prev => [
//             ...prev,
//             `3. Calculate second positive diagonal: b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`
//           ]);
//           break;
//         case 3:
//           setSarrusStep(4);
//           setExplanations(prev => [
//             ...prev,
//             `4. Calculate third positive diagonal: c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`
//           ]);
//           break;
//         case 4:
//           setSarrusStep(5);
//           setExplanations(prev => [
//             ...prev,
//             `5. Calculate first negative diagonal: c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`
//           ]);
//           break;
//         case 5:
//           setSarrusStep(6);
//           setExplanations(prev => [
//             ...prev,
//             `6. Calculate second negative diagonal: b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`
//           ]);
//           break;
//         case 6:
//           setSarrusStep(7);
//           setExplanations(prev => [
//             ...prev,
//             `7. Calculate third negative diagonal: a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`
//           ]);
//           break;
//         case 7:
//           const det = (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h);
//           setSarrusStep(8);
//           setExplanations(prev => [
//             ...prev,
//             `8. Final calculation:`,
//             `   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${det}`
//           ]);
//           setDeterminant(det);
//           break;
//         default:
//           resetCalculator();
//       }
//     }
//   };

//   const prevStep = () => {
//     if (matrixSize === 2) {
//       if (step <= 1) return;
//       setStep(prev => prev - 1);
//       setExplanations(prev => prev.slice(0, -1));
      
//       switch(step) {
//         case 2:
//           setHighlightCells([]);
//           break;
//         case 3:
//           setHighlightCells([[0, 0], [1, 1]]);
//           break;
//         case 4:
//           setHighlightCells([[0, 1], [1, 0]]);
//           break;
//         case 5:
//           setHighlightCells([]);
//           setDeterminant(null);
//           break;
//       }
//     } else if (matrixSize === 3) {
//       if (sarrusStep <= 1) return;
//       setSarrusStep(prev => prev - 1);
//       setExplanations(prev => prev.slice(0, -1));
//       if (sarrusStep === 8) {
//         setDeterminant(null);
//       }
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
//             {size}x{size}
//           </label>
//         ))}
//       </div>
//       <div className={styles.contentContainer}>
//         <div className={styles.matrixSection}>
//           <div className={styles.controls} ref={controlsRef}>
//             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
//             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
//             <button className={styles.button} onClick={resetCalculator}>Reset</button>
//           </div>
//           {error && <div className={styles.error}>{error}</div>}
//           <div className={styles.matrixContainer} ref={matrixContainerRef}>
//             <table className={styles.matrix}>
//               <tbody>
//                 {matrix.map((row, i) => (
//                   <tr key={i}>
//                     {row.map((cell, j) => (
//                       <td key={j}>
//                         <input
//                           type="number"
//                           value={cell}
//                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
//                           className={`${styles.matrixInput} ${
//                             highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''
//                           }`}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className={styles.visualizationSection} ref={visualizationRef}>
//           <h3>Visualization</h3>
//           {matrixSize === 3 && sarrusStep > 0 && (
//             <div className={styles.sarrusVisualization} dangerouslySetInnerHTML={{ __html: getSarrusSVG(sarrusStep) }} />
//           )}
//           <div className={styles.explanation}>
//             {explanations.map((exp, index) => (
//               <p key={index}>{exp}</p>
//             ))}
//           </div>
//           {(matrixSize === 2 && step > 0) || (matrixSize === 3 && sarrusStep > 0) ? (
//             <div className={styles.stepControls}>
//               <button className={styles.button} onClick={prevStep} disabled={matrixSize === 2 ? step <= 1 : sarrusStep <= 1}>Step Back</button>
//               <button className={styles.button} onClick={nextStep} disabled={matrixSize === 2 ? step >= 5 : sarrusStep >= 8}>Next Step</button>
//             </div>
//           ) : null}
//           {determinant !== null && (
//             <div className={styles.result}>
//               <h3>Determinant: {determinant}</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeterminantCalculator;
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import styles from './DeterminantCalculator.module.css';
// import { getSarrusSVG } from './sarrusMatrix.js';

// const DeterminantCalculator = () => {
//   const [matrixSize, setMatrixSize] = useState(2);
//   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
//   const [determinant, setDeterminant] = useState(null);
//   const [error, setError] = useState('');
//   const [step, setStep] = useState(0);
//   const [explanations, setExplanations] = useState([]);
//   const [highlightCells, setHighlightCells] = useState([]);
//   const [sarrusStep, setSarrusStep] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const controlsRef = useRef(null);
//   const matrixContainerRef = useRef(null);
//   const visualizationRef = useRef(null);
//   const playIntervalRef = useRef(null);

//   useEffect(() => {
//     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setHighlightCells([]);
//     setSarrusStep(0);
//     setIsPlaying(false);
    
//     setTimeout(() => {
//       if (matrixContainerRef.current) {
//         const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
//         const viewportHeight = window.innerHeight;
//         if (matrixBottom > viewportHeight) {
//           window.scrollTo({
//             top: window.pageYOffset + (matrixBottom - viewportHeight + 20),
//             behavior: 'smooth'
//           });
//         }
//       }
//     }, 0);
//   }, [matrixSize]);

//   useEffect(() => {
//     if (visualizationRef.current && (step > 0 || sarrusStep > 0)) {
//       visualizationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }, [step, sarrusStep]);

//   useEffect(() => {
//     if (isPlaying) {
//       playIntervalRef.current = setInterval(() => {
//         if ((matrixSize === 2 && step < 5) || (matrixSize === 3 && sarrusStep < 8)) {
//           nextStep();
//         } else {
//           setIsPlaying(false);
//         }
//       }, 1500);
//     } else {
//       clearInterval(playIntervalRef.current);
//     }
//     return () => clearInterval(playIntervalRef.current);
//   }, [isPlaying, step, sarrusStep, matrixSize]);

//   const handleMatrixChange = (i, j, value) => {
//     const newMatrix = matrix.map(row => [...row]);
//     newMatrix[i][j] = value === '' ? '' : Number(value);
//     setMatrix(newMatrix);
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setHighlightCells([]);
//     setSarrusStep(0);
//   };

//   const generateRandomMatrix = () => {
//     const newMatrix = matrix.map(row => 
//       row.map(() => Math.floor(Math.random() * 10) - 5)
//     );
//     setMatrix(newMatrix);
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setHighlightCells([]);
//     setSarrusStep(0);
//   };

//   const resetCalculator = () => {
//     setMatrixSize(2);
//     setMatrix([[0, 0], [0, 0]]);
//     setDeterminant(null);
//     setStep(0);
//     setExplanations([]);
//     setError('');
//     setHighlightCells([]);
//     setSarrusStep(0);
//     setIsPlaying(false);
//   };

//   const calculateDeterminant = () => {
//     if (matrixSize === 2) {
//       setStep(1);
//       setExplanations([
//         "1. For a 2x2 matrix:",
//         "   [a b]",
//         "   [c d]",
//         "   The determinant is calculated using the formula: ad - bc"
//       ]);
//       setHighlightCells([]);
//     } else if (matrixSize === 3) {
//       setSarrusStep(1);
//       setExplanations([
//         "Sarrus' Rule for 3x3 matrices:",
//         "det(A) = (aei + bfg + cdh) - (ceg + bdi + afh)",
//         "1. Extend the matrix by copying the first two columns to the right"
//       ]);
//     } else {
//       const det = calculateLargerDeterminant(matrix);
//       setDeterminant(det);
//       setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
//     }
//   };

//   const calculateLargerDeterminant = (m) => {
//     if (m.length === 1) return m[0][0];
//     if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

//     let det = 0;
//     for (let i = 0; i < m.length; i++) {
//       let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
//       det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
//     }
//     return det;
//   };

//   const nextStep = () => {
//     if (matrixSize === 2) {
//       const [[a, b], [c, d]] = matrix;
//       switch(step) {
//         case 1:
//           setStep(2);
//           setExplanations(prev => [
//             ...prev,
//             `2. Multiply a and d: ${a} * ${d} = ${a * d}`
//           ]);
//           setHighlightCells([[0, 0], [1, 1]]);
//           break;
//         case 2:
//           setStep(3);
//           setExplanations(prev => [
//             ...prev,
//             `3. Multiply b and c: ${b} * ${c} = ${b * c}`
//           ]);
//           setHighlightCells([[0, 1], [1, 0]]);
//           break;
//         case 3:
//           const det = a * d - b * c;
//           setStep(4);
//           setExplanations(prev => [
//             ...prev,
//             `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${det}`
//           ]);
//           setHighlightCells([]);
//           break;
//         case 4:
//           setStep(5);
//           setDeterminant(a * d - b * c);
//           setExplanations(prev => [
//             ...prev,
//             `5. The determinant is ${a * d - b * c}`,
//             `Det(A)=ad-bc= ${a * d - b * c}`
//           ]);
//           break;
//         default:
//           resetCalculator();
//       }
//     } else if (matrixSize === 3) {
//       const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
//       switch(sarrusStep) {
//         case 1:
//           setSarrusStep(2);
//           setExplanations(prev => [
//             ...prev,
//             `2. Calculate first positive diagonal: a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`
//           ]);
//           break;
//         case 2:
//           setSarrusStep(3);
//           setExplanations(prev => [
//             ...prev,
//             `3. Calculate second positive diagonal: b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`
//           ]);
//           break;
//         case 3:
//           setSarrusStep(4);
//           setExplanations(prev => [
//             ...prev,
//             `4. Calculate third positive diagonal: c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`
//           ]);
//           break;
//         case 4:
//           setSarrusStep(5);
//           setExplanations(prev => [
//             ...prev,
//             `5. Calculate first negative diagonal: c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`
//           ]);
//           break;
//         case 5:
//           setSarrusStep(6);
//           setExplanations(prev => [
//             ...prev,
//             `6. Calculate second negative diagonal: b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`
//           ]);
//           break;
//         case 6:
//           setSarrusStep(7);
//           setExplanations(prev => [
//             ...prev,
//             `7. Calculate third negative diagonal: a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`
//           ]);
//           break;
//         case 7:
//           const det = (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h);
//           setSarrusStep(8);
//           setExplanations(prev => [
//             ...prev,
//             `8. Final calculation:`,
//             `   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${det}`,
//             ` Det(A) = (aei + bfg + cdh) - (ceg + bdi + afh)= ${det}.`
//           ]);
//           setDeterminant(det);
//           break;
//         default:
//           resetCalculator();
//       }
//     }
//   };

//   const prevStep = () => {
//     if (matrixSize === 2) {
//       if (step <= 1) return;
//       setStep(prev => prev - 1);
//       setExplanations(prev => prev.slice(0, -1));
      
//       switch(step) {
//         case 2:
//           setHighlightCells([]);
//           break;
//         case 3:
//           setHighlightCells([[0, 0], [1, 1]]);
//           break;
//         case 4:
//           setHighlightCells([[0, 1], [1, 0]]);
//           break;
//         case 5:
//           setHighlightCells([]);
//           setDeterminant(null);
//           break;
//       }
//     } else if (matrixSize === 3) {
//       if (sarrusStep <= 1) return;
//       setSarrusStep(prev => prev - 1);
//       setExplanations(prev => prev.slice(0, -1));
//       if (sarrusStep === 8) {
//         setDeterminant(null);
//       }
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
//             {size}x{size}
//           </label>
//         ))}
//       </div>
//       <div className={styles.contentContainer}>
//         <div className={styles.matrixSection}>
//           <div className={styles.controls} ref={controlsRef}>
//             <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
//             <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
//             <button className={styles.resetButton} onClick={resetCalculator}>Reset</button>
//           </div>
//           {error && <div className={styles.error}>{error}</div>}
//           <div className={styles.matrixContainer} ref={matrixContainerRef}>
//             <table className={styles.matrix}>
//               <tbody>
//                 {matrix.map((row, i) => (
//                   <tr key={i}>
//                     {row.map((cell, j) => (
//                       <td key={j}>
//                         <input
//                           type="number"
//                           value={cell}
//                           onChange={(e) => handleMatrixChange(i, j, e.target.value)}
//                           className={`${styles.matrixInput} ${
//                             highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''
//                           }`}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className={styles.visualizationSection} ref={visualizationRef}>
//           <h3>Explanation</h3>
//           {matrixSize === 3 && sarrusStep > 0 && (
//             <div className={styles.sarrusVisualization} dangerouslySetInnerHTML={{ __html: getSarrusSVG(sarrusStep) }} />
//           )}
//           <div className={styles.explanation}>
//             {explanations.map((exp, index) => (
//               <p key={index} className={index === explanations.length - 1 && (step === 5 || sarrusStep === 8) ? styles.finalExplanation : ''}>{exp}</p>
//             ))}
//           </div>
//           {(matrixSize === 2 && step > 0) || (matrixSize === 3 && sarrusStep > 0) ? (
//             <div className={styles.stepControls}>
//               <button className={styles.navButton} onClick={prevStep} disabled={matrixSize === 2 ? step <= 1 : sarrusStep <= 1}>❮ Previous</button>
//               <button className={styles.navButton} onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//               <button className={styles.navButton} onClick={nextStep} disabled={matrixSize === 2 ? step >= 5 : sarrusStep >= 8}>Next ❯</button>
//             </div>
//           ) : null}
//           {determinant !== null && (
//             <div className={styles.result}>
//               <h3>Determinant: {determinant}</h3>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeterminantCalculator;
'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './DeterminantCalculator.module.css';
import { getSarrusSVG } from './sarrusMatrix.js';

const DeterminantCalculator = () => {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
  const [determinant, setDeterminant] = useState(null);
  const [step, setStep] = useState(0);
  const [explanations, setExplanations] = useState([]);
  const [highlightCells, setHighlightCells] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const matrixSizes = [2, 3];
  const matrixContainerRef = useRef(null);
  const visualizationRef = useRef(null);
  const playIntervalRef = useRef(null);

//   useEffect(() => {
//     resetCalculator();
//     scrollToMatrix();
//   }, [matrixSize]);

useEffect(() => {
    setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
    setDeterminant(null);
    setStep(0);
    setExplanations([]);
    setHighlightCells([]);
    setIsPlaying(false);
    scrollToMatrix();
  }, [matrixSize]);  

useEffect(() => {
    if (visualizationRef.current && step > 0) {
      visualizationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [step]);

  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        if ((matrixSize === 2 && step < 5) || (matrixSize === 3 && step < 8)) {
          nextStep();
        } else {
          setIsPlaying(false);
        }
      }, 1500);
    } else {
      clearInterval(playIntervalRef.current);
    }
    return () => clearInterval(playIntervalRef.current);
  }, [isPlaying, step, matrixSize]);

  const scrollToMatrix = () => {
    setTimeout(() => {
      if (matrixContainerRef.current) {
        const matrixBottom = matrixContainerRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        if (matrixBottom > viewportHeight) {
          window.scrollTo({
            top: window.pageYOffset + (matrixBottom - viewportHeight + 20),
            behavior: 'smooth'
          });
        }
      }
    }, 0);
  };

  const handleMatrixChange = (i, j, value) => {
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[i][j] = value === '' ? '' : Number(value);
    setMatrix(newMatrix);
    resetCalculation();
  };

  const generateRandomMatrix = () => {
    const newMatrix = matrix.map(row => 
      row.map(() => Math.floor(Math.random() * 10) - 5)
    );
    setMatrix(newMatrix);
    resetCalculation();
  };

//   const resetCalculator = () => {
    
//     setMatrixSize(matrixSize);
//     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
//     resetCalculation();
//   };

const resetCalculator = () => {
    setMatrixSize(2);
    setMatrix([[0, 0], [0, 0]]);
    setDeterminant(null);
    setStep(0);
    setExplanations([]);
    setHighlightCells([]);
    setIsPlaying(false);
  }; 

const resetCalculation = () => {
    setDeterminant(null);
    setStep(0);
    setExplanations([]);
    setHighlightCells([]);
    setIsPlaying(false);
  };

  const calculateDeterminant = () => {
    if (matrixSize === 2 || matrixSize === 3) {
      setStep(1);
      setExplanations(matrixSize === 2 ? get2x2Explanation() : get3x3Explanation());
      setHighlightCells([]);
    } else {
      const det = calculateLargerDeterminant(matrix);
      setDeterminant(det);
      setExplanations([`The determinant of the ${matrixSize}x${matrixSize} matrix is ${det}`]);
    }
  };

  const get2x2Explanation = () => [
    "                     ",
    "1. For a 2x2 matrix:",
    "   [a b]",
    "   [c d]",
    "   The determinant is calculated using the formula: ad - bc"
  ];

  const get3x3Explanation = () => [
    `Sarrus Rule for 3x3 matrices:`,
    "det(A) = (a*e*i + b*f*g + c*d*h) - (c*e*g + b*d*i + a*f*h)",
    "1. Extend the matrix by copying the first two columns to the right"
  ];

  const calculateLargerDeterminant = (m) => {
    if (m.length === 1) return m[0][0];
    if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

    let det = 0;
    for (let i = 0; i < m.length; i++) {
      let subMatrix = m.slice(1).map(row => [...row.slice(0, i), ...row.slice(i + 1)]);
      det += Math.pow(-1, i) * m[0][i] * calculateLargerDeterminant(subMatrix);
    }
    return det;
  };

  const nextStep = () => {
    if (matrixSize === 2) {
      handle2x2Step();
    } else if (matrixSize === 3) {
      handle3x3Step();
    }
  };

  const handle2x2Step = () => {
    const [[a, b], [c, d]] = matrix;
    const steps = [
      { explanation: `2. Multiply a and d: ${a} * ${d} = ${a * d}`, highlight: [[0, 0], [1, 1]] },
      { explanation: `3. Multiply b and c: ${b} * ${c} = ${b * c}`, highlight: [[0, 1], [1, 0]] },
      { explanation: `4. Subtract the second product from the first: (${a * d}) - (${b * c}) = ${a * d - b * c}`, highlight: [] },
      { explanation: `5. The determinant is ${a * d - b * c}`, highlight: [], setDeterminant: a * d - b * c }
    ];

    if (step <= steps.length) {
      const currentStep = steps[step - 1];
      setStep(step + 1);
      setExplanations(prev => [...prev, currentStep.explanation]);
      setHighlightCells(currentStep.highlight);
      if (currentStep.setDeterminant) setDeterminant(currentStep.setDeterminant);
    } else {
      resetCalculator();
    }
  };

  const handle3x3Step = () => {
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    // const steps = [
    //   { explanation: `2. Calculate first positive diagonal: a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`, highlight: [[0, 0], [1, 1], [2, 2]] },
    //   { explanation: `3. Calculate second positive diagonal: b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`, highlight: [[0, 1], [1, 2], [2, 0]] },
    //   { explanation: `4. Calculate third positive diagonal: c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`, highlight: [[0, 2], [1, 0], [2, 1]] },
    //   { explanation: `5. Calculate first negative diagonal: c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`, highlight: [[0, 2], [1, 1], [2, 0]] },
    //   { explanation: `6. Calculate second negative diagonal: a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`, highlight: [[0, 0], [1, 2], [2, 1]] },
    //   { explanation: `7. Calculate third negative diagonal:  b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`, highlight: [[0, 1], [1, 0], [2, 2]] },
    //   { 
    //     explanation: `8. Final calculation:\n   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${(a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h)}`,
    //     highlight: [],
    //     setDeterminant: (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h)
    //   }
    // ];
    const steps = [
        { explanation: `2. Calculate first positive diagonal: a * e * i = ${a} * ${e} * ${i} = ${a * e * i}`, highlight: [[0, 0], [1, 1], [2, 2]] },
        { explanation: `3. Calculate second positive diagonal: b * f * g = ${b} * ${f} * ${g} = ${b * f * g}`, highlight: [[0, 1], [1, 2], [2, 0]] },
        { explanation: `4. Calculate third positive diagonal: c * d * h = ${c} * ${d} * ${h} = ${c * d * h}`, highlight: [[0, 2], [1, 0], [2, 1]] },
        { explanation: `5. Calculate first negative diagonal: c * e * g = ${c} * ${e} * ${g} = ${c * e * g}`, highlight: [[0, 2], [1, 1], [2, 0]] },
        { explanation: `6. Calculate second negative diagonal: b * d * i = ${b} * ${d} * ${i} = ${b * d * i}`, highlight: [[0, 1], [1, 0], [2, 2]] },
        { explanation: `7. Calculate third negative diagonal: a * f * h = ${a} * ${f} * ${h} = ${a * f * h}`, highlight: [[0, 0], [1, 2], [2, 1]] },
        { 
          explanation: `8. Final calculation:\n   (${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${b * d * i} + ${a * f * h}) = ${(a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h)}`,
          highlight: [],
          setDeterminant: (a * e * i + b * f * g + c * d * h) - (c * e * g + b * d * i + a * f * h)
        }
      ];
    

    if (step <= steps.length) {
      const currentStep = steps[step - 1];
      setStep(step + 1);
      setExplanations(prev => [...prev, currentStep.explanation]);
      setHighlightCells(currentStep.highlight);
      if (currentStep.setDeterminant) setDeterminant(currentStep.setDeterminant);
    } else {
      resetCalculator();
    }
  };

  const prevStep = () => {
    if (step <= 1) return;
    setStep(prev => prev - 1);
    setExplanations(prev => prev.slice(0, -1));
    setDeterminant(null);

    if (matrixSize === 2) {
      const highlightMap = [[], [[0, 0], [1, 1]], [[0, 1], [1, 0]], [], []];
      setHighlightCells(highlightMap[step - 2]);
    } else if (matrixSize === 3) {
      const highlightMap = [
        [], [[0, 0], [1, 1], [2, 2]], [[0, 1], [1, 2], [2, 0]],
        [[0, 2], [1, 0], [2, 1]], [[0, 2], [1, 1], [2, 0]],
        [[0, 1], [1, 0], [2, 2]], [[0, 0], [1, 2], [2, 1]], []
      ];
      setHighlightCells(highlightMap[step - 2]);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.sizeSelector}>
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
            {size}x{size}
          </label>
        ))}
      </div> */}
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
            <span className={styles.radioLabel}>{size}x{size}</span>
            </label>
        ))}
        </div>
      <div className={styles.contentContainer}>
        <div className={styles.matrixSection}>
          <div className={styles.controls}>
            <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
            <button className={styles.button} onClick={calculateDeterminant}>Calculate Determinant</button>
            <button className={styles.resetButton} onClick={resetCalculator}>Reset</button>
          </div>
          <div className={styles.matrixContainer} ref={matrixContainerRef}>
            <table className={styles.matrix}>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        <input
                          type="number"
                          value={cell}
                          onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                          className={`${styles.matrixInput} ${
                            highlightCells.some(([x, y]) => x === i && y === j) ? styles.highlighted : ''
                          }`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.visualizationSection} ref={visualizationRef}>
          <h3>Explanation</h3>
          {matrixSize === 3 && step > 0 && (
            <div className={styles.sarrusVisualization} dangerouslySetInnerHTML={{ __html: getSarrusSVG(step) }} />
          )}
          <div className={styles.explanation}>
            {explanations.map((exp, index) => (
              <p key={index} className={index === explanations.length - 1 && step === (matrixSize === 2 ? 5 : 8) ? styles.finalExplanation : ''}>{exp}</p>
            ))}
          </div>
          {step > 0 && (matrixSize === 2 || matrixSize === 3) && (
            <div className={styles.stepControls}>
              <button className={styles.navButton} onClick={prevStep} disabled={step <= 1}>❮ Previous</button>
              <button className={styles.navButton} onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
              <button className={styles.navButton} onClick={nextStep} disabled={step >= (matrixSize === 2 ? 5 : 8)}>Next ❯</button>
            </div>
          )}
          <br></br>
          {determinant !== null && (
            <div className={styles.result}>
              <h3>Determinant: {determinant}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeterminantCalculator;