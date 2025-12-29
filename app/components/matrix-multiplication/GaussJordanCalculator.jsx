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