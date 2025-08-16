
'use client';

import React, { useState, useEffect } from 'react';
import styles from './MatrixTranspositionCalculator.module.css';

const MatrixTranspositionCalculator = () => {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState(() => Array(2).fill().map(() => Array(2).fill(0)));
  const [transposedMatrix, setTransposedMatrix] = useState(null);

  useEffect(() => {
    setMatrix(Array(matrixSize).fill().map(() => Array(matrixSize).fill(0)));
    setTransposedMatrix(null);
  }, [matrixSize]);

  const handleMatrixChange = (i, j, value) => {
    const updatedMatrix = matrix.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (rowIndex === i && colIndex === j) {
          const cleanedValue = value.replace(/^0+/, '');
          if (cleanedValue === '' || cleanedValue === '-') {
            return cleanedValue;
          }
          const numValue = parseFloat(cleanedValue);
          return isNaN(numValue) ? 0 : numValue;
        }
        return cell;
      })
    );
    setMatrix(updatedMatrix);
  };

  const generateRandomMatrix = () => {
    const randomMatrix = matrix.map(row =>
      row.map(() => Math.floor(Math.random() * 10) - 5)
    );
    setMatrix(randomMatrix);
    setTransposedMatrix(null);
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

  const MatrixWithDelimiters = ({ matrix, label }) => (
    <div className={styles.matrixWithDelimiters}>
      <div className={styles.matrixLabel}>{label}</div>
      <div className={styles.matrixWrapper}>
        <table className={styles.matrix}>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={`${i}-${j}`}>
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                      readOnly={label === 'Aᵀ ='}
                      className={styles.matrixInput}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

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
        <MatrixWithDelimiters matrix={matrix} label="A =" />
        {transposedMatrix && <MatrixWithDelimiters matrix={transposedMatrix} label="Aᵀ =" />}
      </div>
    </div>
  );
};

export default MatrixTranspositionCalculator;