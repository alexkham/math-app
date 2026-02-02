
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
