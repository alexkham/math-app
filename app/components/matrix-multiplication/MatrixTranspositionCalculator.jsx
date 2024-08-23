// 'use client';

// import React, { useState, useEffect } from 'react';
// import styles from './MatrixTranspositionCalculator.module.css';

// const MatrixTranspositionCalculator = () => {
//   const [matrixSize, setMatrixSize] = useState(2);
//   const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
//   const [transposedMatrix, setTransposedMatrix] = useState(null);

//   const matrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];

//   useEffect(() => {
//     setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
//     setTransposedMatrix(null);
//   }, [matrixSize]);

//   const handleMatrixChange = (i, j, value) => {
//     const newMatrix = matrix.map(row => [...row]);
//     newMatrix[i][j] = value === '' ? '' : Number(value);
//     setMatrix(newMatrix);
//     setTransposedMatrix(null);
//   };

//   const generateRandomMatrix = () => {
//     const newMatrix = matrix.map(row => 
//       row.map(() => Math.floor(Math.random() * 10) - 5)
//     );
//     setMatrix(newMatrix);
//     setTransposedMatrix(null);
//   };

//   const transposeMatrix = () => {
//     const transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
//     setTransposedMatrix(transposed);
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
//             <span className={styles.radioLabel}>{size}x{size}</span>
//           </label>
//         ))}
//       </div>
//       <div className={styles.controls}>
//         <button className={styles.button} onClick={generateRandomMatrix}>Generate Random Matrix</button>
//         <button className={styles.button} onClick={transposeMatrix}>Transpose Matrix</button>
//       </div>
//       <div className={styles.matrixContainer}>
//         <h3>Original Matrix</h3>
//         <table className={styles.matrix}>
//           <tbody>
//             {matrix.map((row, i) => (
//               <tr key={i}>
//                 {row.map((cell, j) => (
//                   <td key={j}>
//                     <input
//                       type="number"
//                       value={cell}
//                       onChange={(e) => handleMatrixChange(i, j, e.target.value)}
//                       className={styles.matrixInput}
//                     />
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {transposedMatrix && (
//         <div className={styles.matrixContainer}>
//           <h3>Transposed Matrix</h3>
//           <table className={styles.matrix}>
//             <tbody>
//               {transposedMatrix.map((row, i) => (
//                 <tr key={i}>
//                   {row.map((cell, j) => (
//                     <td key={j}>{cell}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MatrixTranspositionCalculator;
'use client';

import React, { useState, useEffect } from 'react';
import styles from './MatrixTranspositionCalculator.module.css';

const MatrixTranspositionCalculator = () => {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState(() => Array(2).fill().map(() => Array(2).fill(0)));
  const [transposedMatrix, setTransposedMatrix] = useState(null);

  useEffect(() => {
    setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
  }, [matrixSize]);

  const handleMatrixChange = (i, j, value) => {
    const updatedMatrix = matrix.map((row, rowIndex) =>
      row.map((cell, colIndex) => rowIndex === i && colIndex === j ? parseInt(value) || 0 : cell)
    );
    setMatrix(updatedMatrix);
  };

  const generateRandomMatrix = () => {
    const randomMatrix = matrix.map(row =>
      row.map(() => Math.floor(Math.random() * 10) - 5)
    );
    setMatrix(randomMatrix);
    setTransposedMatrix(null); // Clear the transposed matrix when generating a new random matrix
  };

  const calculateTranspose = () => {
    const transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    setTransposedMatrix(transposed);
  };

  const resetMatrix = () => {
    const initialMatrix = Array(matrixSize).fill().map(() => Array(matrixSize).fill(0));
    setMatrix(initialMatrix);
    setTransposedMatrix(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sizeSelector}>
        <span className={styles.sizeLabel}>Matrix Size:</span>
        {Array.from({ length: 9 }, (_, i) => i + 2).map(size => (
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
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={generateRandomMatrix}>Generate Random</button>
        <button className={styles.button} onClick={calculateTranspose}>Transpose Matrix</button>
        <button className={styles.resetButton} onClick={resetMatrix}>Reset</button>
      </div>
      <div className={styles.matrixContainer}>
        <div className={styles.matrixSection}>
          <h3>Original Matrix</h3>
          <table className={styles.matrix}>
            <tbody>
              {matrix.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={`${i}-${j}`}>
                      <input
                        type="number"
                        value={cell}
                        onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                        className={styles.matrixInput}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {transposedMatrix && (
          <div className={styles.matrixSection}>
            <h3>Transposed Matrix</h3>
            <table className={styles.matrix}>
              <tbody>
                {transposedMatrix.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={`${i}-${j}`}>
                        <input
                          type="number"
                          value={cell}
                          readOnly
                          className={styles.matrixInput}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatrixTranspositionCalculator;
