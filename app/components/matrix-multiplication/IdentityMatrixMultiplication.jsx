'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function IdentityMatrixMultiplicationFinal() {
  const [size, setSize] = useState(3);
  const [matrixA, setMatrixA] = useState([
    [2, 1, 3],
    [4, 0, 1],
    [1, 2, 5]
  ]);
  
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [resultRight, setResultRight] = useState([]);
  const [resultLeft, setResultLeft] = useState([]);
  const [currentStage, setCurrentStage] = useState({ row: 0, col: 0 });
  const [highlightARight, setHighlightARight] = useState([]);
  const [highlightIRight, setHighlightIRight] = useState([]);
  const [highlightALeft, setHighlightALeft] = useState([]);
  const [highlightILeft, setHighlightILeft] = useState([]);
  const [highlightResultRight, setHighlightResultRight] = useState([]);
  const [highlightResultLeft, setHighlightResultLeft] = useState([]);
  const [explanationRight, setExplanationRight] = useState([]);
  const [explanationLeft, setExplanationLeft] = useState([]);
  const [animationStarted, setAnimationStarted] = useState(false);

  const generateIdentity = (n) => {
    return Array(n).fill(0).map((_, i) => 
      Array(n).fill(0).map((_, j) => i === j ? 1 : 0)
    );
  };

  const identity = generateIdentity(size);
  const totalSteps = size * size * size;

  useEffect(() => {
    setResultRight(Array(size).fill(0).map(() => Array(size).fill(0)));
    setResultLeft(Array(size).fill(0).map(() => Array(size).fill(0)));
  }, [size]);

  const generateExplanation = useCallback((i, j, k, side, currentResult) => {
    if (k === 0) {
      return {
        initial: `Calculating R[${i + 1}][${j + 1}]`,
        steps: [],
        result: ''
      };
    }

    let aValue, iValue, product, stepText;
    
    if (side === 'right') {
      aValue = matrixA[i]?.[k-1] ?? 'undefined';
      iValue = identity[k-1]?.[j] ?? 'undefined';
      product = aValue !== 'undefined' && iValue !== 'undefined' ? aValue * iValue : 'undefined';
      stepText = `A[${i + 1}][${k}] * I[${k}][${j + 1}] = ${aValue} * ${iValue} = ${product}`;
    } else {
      iValue = identity[i]?.[k-1] ?? 'undefined';
      aValue = matrixA[k-1]?.[j] ?? 'undefined';
      product = iValue !== 'undefined' && aValue !== 'undefined' ? iValue * aValue : 'undefined';
      stepText = `I[${i + 1}][${k}] * A[${k}][${j + 1}] = ${iValue} * ${aValue} = ${product}`;
    }

    if (k === size) {
      return {
        initial: `Calculating R[${i + 1}][${j + 1}]`,
        steps: [stepText],
        result: `R[${i + 1}][${j + 1}] = ${currentResult[i]?.[j] ?? 'undefined'}`
      };
    }

    return {
      initial: `Calculating R[${i + 1}][${j + 1}]`,
      steps: [stepText],
      result: ''
    };
  }, [matrixA, identity, size]);

  const performStep = useCallback(() => {
    if (step < totalSteps) {
      const i = Math.floor(step / (size * size));
      const j = Math.floor((step % (size * size)) / size);
      const k = step % size;

      // A × I (right)
      setHighlightARight([i, k]);
      setHighlightIRight([k, j]);
      setHighlightResultRight([i, j]);

      // I × A (left)
      setHighlightILeft([i, k]);
      setHighlightALeft([k, j]);
      setHighlightResultLeft([i, j]);

      // Update right result (A × I)
      setResultRight(prevResult => {
        const newResult = prevResult.map(row => [...row]);
        if (k === 0) {
          newResult[i] = newResult[i] || [];
          newResult[i][j] = 0;
        }
        if (matrixA[i]?.[k] !== undefined && identity[k]?.[j] !== undefined) {
          newResult[i] = newResult[i] || [];
          newResult[i][j] += matrixA[i][k] * identity[k][j];
        }
        return newResult;
      });

      // Update left result (I × A)
      setResultLeft(prevResult => {
        const newResult = prevResult.map(row => [...row]);
        if (k === 0) {
          newResult[i] = newResult[i] || [];
          newResult[i][j] = 0;
        }
        if (identity[i]?.[k] !== undefined && matrixA[k]?.[j] !== undefined) {
          newResult[i] = newResult[i] || [];
          newResult[i][j] += identity[i][k] * matrixA[k][j];
        }
        return newResult;
      });

      // Update explanations
      setExplanationRight(prevExplanations => {
        const newExplanation = generateExplanation(i, j, k + 1, 'right', resultRight);
        if (prevExplanations.length === 0 || k === 0) {
          return [...prevExplanations, newExplanation];
        } else {
          const lastExplanation = prevExplanations[prevExplanations.length - 1];
          const updatedLastExplanation = {
            ...lastExplanation,
            steps: [...(lastExplanation.steps || []), ...(newExplanation.steps || [])],
            result: newExplanation.result || lastExplanation.result
          };
          return [...prevExplanations.slice(0, -1), updatedLastExplanation];
        }
      });

      setExplanationLeft(prevExplanations => {
        const newExplanation = generateExplanation(i, j, k + 1, 'left', resultLeft);
        if (prevExplanations.length === 0 || k === 0) {
          return [...prevExplanations, newExplanation];
        } else {
          const lastExplanation = prevExplanations[prevExplanations.length - 1];
          const updatedLastExplanation = {
            ...lastExplanation,
            steps: [...(lastExplanation.steps || []), ...(newExplanation.steps || [])],
            result: newExplanation.result || lastExplanation.result
          };
          return [...prevExplanations.slice(0, -1), updatedLastExplanation];
        }
      });

      setStep(prevStep => prevStep + 1);
      setCurrentStage({ row: i, col: j });
    } else {
      setIsRunning(false);
      setHighlightARight([]);
      setHighlightIRight([]);
      setHighlightALeft([]);
      setHighlightILeft([]);
      setHighlightResultRight([]);
      setHighlightResultLeft([]);
    }
  }, [step, totalSteps, matrixA, identity, size, generateExplanation, resultRight, resultLeft]);

  useEffect(() => {
    let timer;
    if (isRunning && step < totalSteps) {
      timer = setTimeout(performStep, 1500);
    }
    return () => clearTimeout(timer);
  }, [isRunning, step, totalSteps, performStep]);

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    const newMatrix = [];
    for (let i = 0; i < newSize; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < newSize; j++) {
        newMatrix[i][j] = i < matrixA.length && j < matrixA[0].length 
          ? matrixA[i][j] 
          : Math.floor(Math.random() * 5);
      }
    }
    setMatrixA(newMatrix);
    reset();
  };

  const handleCellChange = (i, j, value) => {
    const newMatrix = matrixA.map(row => [...row]);
    newMatrix[i][j] = parseFloat(value) || 0;
    setMatrixA(newMatrix);
  };

  const randomizeMatrix = () => {
    const newMatrix = Array(size).fill(0).map(() => 
      Array(size).fill(0).map(() => Math.floor(Math.random() * 10) - 2)
    );
    setMatrixA(newMatrix);
  };

  const start = () => {
    setStep(0);
    setExplanationRight([]);
    setExplanationLeft([]);
    setIsRunning(true);
    setAnimationStarted(true);
    setResultRight(Array(size).fill(0).map(() => Array(size).fill(0)));
    setResultLeft(Array(size).fill(0).map(() => Array(size).fill(0)));
  };

  const pause = () => setIsRunning(false);

  const reset = () => {
    setStep(0);
    setResultRight(Array(size).fill(0).map(() => Array(size).fill(0)));
    setResultLeft(Array(size).fill(0).map(() => Array(size).fill(0)));
    setHighlightARight([]);
    setHighlightIRight([]);
    setHighlightALeft([]);
    setHighlightILeft([]);
    setHighlightResultRight([]);
    setHighlightResultLeft([]);
    setIsRunning(false);
    setCurrentStage({ row: 0, col: 0 });
    setExplanationRight([]);
    setExplanationLeft([]);
    setAnimationStarted(false);
  };

  const performStepForward = useCallback(() => {
    if (!animationStarted) {
      setAnimationStarted(true);
    }
    if (step === 0 && !animationStarted) {
      setResultRight(Array(size).fill(0).map(() => Array(size).fill(0)));
      setResultLeft(Array(size).fill(0).map(() => Array(size).fill(0)));
    }
    if (step < totalSteps) {
      performStep();
    }
  }, [step, totalSteps, performStep, animationStarted, size]);

  return (
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '32px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e40af', marginBottom: '8px' }}>
          Identity Matrix: Side-Interchangeable Multiplication
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '24px' }}>
          Watch how A × I = I × A = A
        </p>

        <div style={{ marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>
              Matrix Size:
            </label>
            <select 
              value={size}
              onChange={(e) => handleSizeChange(parseInt(e.target.value))}
              style={{ padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '16px' }}
            >
              <option value={2}>2×2</option>
              <option value={3}>3×3</option>
              <option value={4}>4×4</option>
            </select>
          </div>
          <button
            onClick={randomizeMatrix}
            style={{ marginTop: '24px', padding: '8px 24px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
          >
            Randomize Matrix A
          </button>
        </div>

        <div style={{ marginBottom: '32px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', transform: 'scale(0.75)', transformOrigin: 'center' }}>
            {/* I × A (Left) */}
            <div style={{ border: '2px solid #86efac', borderRadius: '8px', padding: '16px', backgroundColor: '#f0fdf4' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#166534', marginBottom: '12px', textAlign: 'center' }}>I × A</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MatrixDisplay 
                  matrix={identity} 
                  label="I"
                  highlight={animationStarted ? highlightILeft : []}
                  highlightRow={animationStarted ? currentStage.row : -1}
                  highlightCol={-1}
                  isIdentity={true}
                />
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4b5563' }}>×</span>
                <MatrixDisplay 
                  matrix={matrixA} 
                  label="A"
                  highlight={animationStarted ? highlightALeft : []}
                  highlightRow={-1}
                  highlightCol={animationStarted ? currentStage.col : -1}
                />
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4b5563' }}>=</span>
                <MatrixDisplay 
                  matrix={resultLeft} 
                  label="Result"
                  highlight={animationStarted ? highlightResultLeft : []}
                />
              </div>
            </div>

            {/* Matrix A (Center) */}
            <div style={{ border: '2px solid #d1d5db', borderRadius: '8px', padding: '16px', backgroundColor: '#f9fafb' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '12px', textAlign: 'center' }}>Matrix A</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '36px', color: '#9ca3af', lineHeight: '1' }}>[</span>
                <div>
                  {matrixA.map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: '6px', marginBottom: i < matrixA.length - 1 ? '6px' : 0 }}>
                      {row.map((cell, j) => (
                        <input
                          key={j}
                          type="number"
                          value={cell}
                          onChange={(e) => handleCellChange(i, j, e.target.value)}
                          style={{ width: '56px', height: '42px', textAlign: 'center', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px', fontFamily: 'monospace' }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '36px', color: '#9ca3af', lineHeight: '1' }}>]</span>
              </div>
            </div>

            {/* A × I (Right) */}
            <div style={{ border: '2px solid #93c5fd', borderRadius: '8px', padding: '16px', backgroundColor: '#eff6ff' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1e40af', marginBottom: '12px', textAlign: 'center' }}>A × I</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MatrixDisplay 
                  matrix={matrixA} 
                  label="A"
                  highlight={animationStarted ? highlightARight : []}
                  highlightRow={animationStarted ? currentStage.row : -1}
                  highlightCol={-1}
                />
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4b5563' }}>×</span>
                <MatrixDisplay 
                  matrix={identity} 
                  label="I"
                  highlight={animationStarted ? highlightIRight : []}
                  highlightRow={-1}
                  highlightCol={animationStarted ? currentStage.col : -1}
                  isIdentity={true}
                />
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4b5563' }}>=</span>
                <MatrixDisplay 
                  matrix={resultRight} 
                  label="Result"
                  highlight={animationStarted ? highlightResultRight : []}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            onClick={start}
            disabled={isRunning || step === totalSteps}
            style={{ padding: '12px 24px', backgroundColor: isRunning || step === totalSteps ? '#9ca3af' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: isRunning || step === totalSteps ? 'not-allowed' : 'pointer' }}
          >
            Start
          </button>
          <button
            onClick={pause}
            disabled={!isRunning}
            style={{ padding: '12px 24px', backgroundColor: !isRunning ? '#9ca3af' : '#ea580c', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: !isRunning ? 'not-allowed' : 'pointer' }}
          >
            Pause
          </button>
          <button
            onClick={reset}
            style={{ padding: '12px 24px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
          >
            Reset
          </button>
          <button
            onClick={performStepForward}
            disabled={isRunning || step === totalSteps}
            style={{ padding: '12px 24px', backgroundColor: isRunning || step === totalSteps ? '#9ca3af' : '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: isRunning || step === totalSteps ? 'not-allowed' : 'pointer' }}
          >
            Step Forward
          </button>
        </div>

        {step > 0 && step <= totalSteps && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: '#f0fdf4', border: '2px solid #86efac', borderRadius: '8px' }}>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#166534', marginBottom: '8px' }}>
                I × A: Computing Result[{currentStage.row + 1}][{currentStage.col + 1}]
              </p>
              {explanationLeft.length > 0 && (
                <div>
                  <p style={{ color: '#374151' }}>{explanationLeft[explanationLeft.length - 1].initial}</p>
                  {explanationLeft[explanationLeft.length - 1].steps.map((stepText, index) => (
                    <p key={index} style={{ color: '#374151', margin: '4px 0' }}>{stepText}</p>
                  ))}
                  {explanationLeft[explanationLeft.length - 1].result && (
                    <p style={{ color: '#166534', fontWeight: 'bold', fontSize: '18px', marginTop: '8px' }}>
                      {explanationLeft[explanationLeft.length - 1].result}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div style={{ padding: '16px', backgroundColor: '#eff6ff', border: '2px solid #93c5fd', borderRadius: '8px' }}>
              <p style={{ fontSize: '18px', fontWeight: 600, color: '#1e40af', marginBottom: '8px' }}>
                A × I: Computing Result[{currentStage.row + 1}][{currentStage.col + 1}]
              </p>
              {explanationRight.length > 0 && (
                <div>
                  <p style={{ color: '#374151' }}>{explanationRight[explanationRight.length - 1].initial}</p>
                  {explanationRight[explanationRight.length - 1].steps.map((stepText, index) => (
                    <p key={index} style={{ color: '#374151', margin: '4px 0' }}>{stepText}</p>
                  ))}
                  {explanationRight[explanationRight.length - 1].result && (
                    <p style={{ color: '#1e40af', fontWeight: 'bold', fontSize: '18px', marginTop: '8px' }}>
                      {explanationRight[explanationRight.length - 1].result}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {step === totalSteps && (
          <div style={{ padding: '16px', backgroundColor: '#d1fae5', border: '2px solid #10b981', borderRadius: '8px', marginBottom: '16px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#065f46', textAlign: 'center' }}>
              ✓ Complete! Both A × I = A and I × A = A
            </p>
          </div>
        )}

        <div style={{ marginTop: '32px', backgroundColor: '#eff6ff', borderLeft: '4px solid #2563eb', padding: '24px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1e40af', marginBottom: '8px' }}>Why does this work?</h3>
          <p style={{ color: '#374151', marginBottom: '8px' }}>
            The identity matrix has 1s on the diagonal and 0s elsewhere. When multiplying:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '32px', color: '#374151' }}>
            <li style={{ marginBottom: '4px' }}>Each row of the result picks exactly one element from A (where I has a 1)</li>
            <li style={{ marginBottom: '4px' }}>All other elements are multiplied by 0 and contribute nothing</li>
            <li style={{ marginBottom: '4px' }}>The position of the 1 ensures we get back the original element</li>
            <li style={{ marginBottom: '4px' }}>This works regardless of whether I is on the left or right</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function MatrixDisplay({ matrix, label, highlight = [], highlightRow = -1, highlightCol = -1, isIdentity = false }) {
  return (
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 600, marginBottom: '4px', color: '#6b7280' }}>
        {label}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span style={{ fontSize: '40px', color: '#9ca3af', lineHeight: '1' }}>[</span>
        <div>
          {matrix.map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: '4px', marginBottom: i < matrix.length - 1 ? '4px' : 0 }}>
              {row.map((cell, j) => {
                const isHighlighted = highlight[0] === i && highlight[1] === j;
                const isRowHighlighted = highlightRow === i;
                const isColHighlighted = highlightCol === j;
                const isDiagonal = isIdentity && i === j;
                
                let bgColor = 'white';
                let borderColor = '#d1d5db';
                let fontWeight = 'normal';
                
                if (isHighlighted) {
                  bgColor = '#f87171';
                  borderColor = '#dc2626';
                } else if (isRowHighlighted || isColHighlighted) {
                  bgColor = '#bfdbfe';
                  borderColor = '#3b82f6';
                } else if (isDiagonal) {
                  bgColor = '#fef08a';
                  borderColor = '#eab308';
                  fontWeight = 'bold';
                }
                
                return (
                  <div
                    key={j}
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontFamily: 'monospace',
                      borderRadius: '4px',
                      border: '1px solid',
                      backgroundColor: bgColor,
                      borderColor: borderColor,
                      fontWeight: fontWeight
                    }}
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <span style={{ fontSize: '40px', color: '#9ca3af', lineHeight: '1' }}>]</span>
      </div>
    </div>
  );
}