// components/MatrixCalculator.js
'use client';

import { useState } from 'react';

export default function MatrixCalculator() {
  const [dimensions, setDimensions] = useState({
    rows: 2,
    cols: 2
  });

  const [matrixA, setMatrixA] = useState(
    Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(''))
  );

  const [matrixB, setMatrixB] = useState(
    Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(''))
  );

  const [result, setResult] = useState(null);

  const handleMatrixChange = (matrix, rowIndex, colIndex, value, isMatrixA) => {
    const newMatrix = matrix.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? Number(value) || 0 : cell
      )
    );
    
    if (isMatrixA) {
      setMatrixA(newMatrix);
    } else {
      setMatrixB(newMatrix);
    }
  };

  const handleDimensionsChange = (newRows, newCols) => {
    setDimensions({ rows: newRows, cols: newCols });
    setMatrixA(Array(newRows).fill().map(() => Array(newCols).fill('')));
    setMatrixB(Array(newRows).fill().map(() => Array(newCols).fill('')));
    setResult(null);
  };

  const add = () => {
    const resultMatrix = matrixA.map((row, i) =>
      row.map((cell, j) => matrixA[i][j] + matrixB[i][j])
    );
    setResult(resultMatrix);
  };

  const subtract = () => {
    const resultMatrix = matrixA.map((row, i) =>
      row.map((cell, j) => matrixA[i][j] - matrixB[i][j])
    );
    setResult(resultMatrix);
  };

  const multiply = () => {
    const resultMatrix = Array(dimensions.rows).fill()
      .map(() => Array(dimensions.cols).fill(0));

    for (let i = 0; i < dimensions.rows; i++) {
      for (let j = 0; j < dimensions.cols; j++) {
        for (let k = 0; k < dimensions.cols; k++) {
          resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
    setResult(resultMatrix);
  };

  const renderMatrix = (matrix, isMatrixA) => (
    <div style={{ margin: '20px 0' }}>
      <h3>{isMatrixA ? 'Matrix A' : 'Matrix B'}</h3>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="number"
              value={cell}
              onChange={(e) => handleMatrixChange(matrix, rowIndex, colIndex, e.target.value, isMatrixA)}
              style={{
                width: '60px',
                height: '60px',
                textAlign: 'center',
                border: '1px solid #ccc'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label>Dimensions: </label>
        <select 
          value={dimensions.rows} 
          onChange={(e) => handleDimensionsChange(Number(e.target.value), dimensions.cols)}
          style={{ marginRight: '10px' }}
        >
          {[2, 3, 4].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        x
        <select 
          value={dimensions.cols} 
          onChange={(e) => handleDimensionsChange(dimensions.rows, Number(e.target.value))}
          style={{ marginLeft: '10px' }}
        >
          {[2, 3, 4].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      {renderMatrix(matrixA, true)}
      {renderMatrix(matrixB, false)}

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={add} style={{ padding: '8px 16px' }}>Add</button>
        <button onClick={subtract} style={{ padding: '8px 16px' }}>Subtract</button>
        <button onClick={multiply} style={{ padding: '8px 16px' }}>Multiply</button>
      </div>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>Result:</h3>
          {result.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #ccc'
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}