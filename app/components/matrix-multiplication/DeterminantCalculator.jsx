
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