'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function MatrixInverseRowOperations() {
  const [size, setSize] = useState(3);
  const [matrixA, setMatrixA] = useState([
    [2, 1, 1],
    [1, 3, 2],
    [1, 0, 2]
  ]);
  
  const [augmented, setAugmented] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1500);
  const [highlightRow, setHighlightRow] = useState(-1);
  const [highlightCol, setHighlightCol] = useState(-1);
  const [highlightPivot, setHighlightPivot] = useState([-1, -1]);
  const [highlightSecondaryRow, setHighlightSecondaryRow] = useState(-1);
  const [errorMessage, setErrorMessage] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const logEndRef = useRef(null);

  const generateIdentity = (n) => {
    return Array(n).fill(0).map((_, i) => 
      Array(n).fill(0).map((_, j) => i === j ? 1 : 0)
    );
  };

  const gcd = (a, b) => {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) { [a, b] = [b, a % b]; }
    return a;
  };

  const toFraction = (num) => {
    if (Number.isInteger(num)) return { num: num, den: 1 };
    const precision = 1000000;
    let bestNum = Math.round(num * precision);
    let bestDen = precision;
    const g = gcd(bestNum, bestDen);
    bestNum /= g;
    bestDen /= g;
    return { num: bestNum, den: bestDen };
  };

  const formatNumber = (num) => {
    if (Math.abs(num) < 1e-10) return '0';
    if (Number.isInteger(num)) return num.toString();
    const frac = toFraction(num);
    if (frac.den === 1) return frac.num.toString();
    if (Math.abs(frac.den) <= 100 && Math.abs(frac.num) <= 1000) {
      return `${frac.num}/${frac.den}`;
    }
    const rounded = Math.round(num * 1000) / 1000;
    if (Number.isInteger(rounded)) return rounded.toString();
    return rounded.toFixed(3).replace(/\.?0+$/, '');
  };

  const formatMultiplier = (num) => {
    if (num === 1) return '';
    if (num === -1) return '-';
    const frac = toFraction(num);
    if (frac.den === 1) return frac.num.toString();
    if (frac.num < 0) return `(-${Math.abs(frac.num)}/${frac.den})`;
    return `(${frac.num}/${frac.den})`;
  };

  const createAugmentedMatrix = useCallback(() => {
    const identity = generateIdentity(size);
    return matrixA.map((row, i) => [...row, ...identity[i]]);
  }, [matrixA, size]);

  const findBestPivotRow = (matrix, col, startRow, n) => {
    let bestRow = -1;
    let bestScore = -Infinity;
    for (let row = startRow; row < n; row++) {
      const val = matrix[row][col];
      if (Math.abs(val) < 1e-10) continue;
      let score = 0;
      if (val === 1) score = 1000;
      else if (val === -1) score = 900;
      else if (Number.isInteger(val) && Math.abs(val) <= 10) score = 100 - Math.abs(val);
      else if (Number.isInteger(val)) score = 50 - Math.min(Math.abs(val), 49);
      else score = -100;
      if (score > bestScore) { bestScore = score; bestRow = row; }
    }
    return bestRow;
  };

  const computeAllSteps = useCallback(() => {
    const stepsArray = [];
    let matrix = createAugmentedMatrix();
    const n = size;
    
    stepsArray.push({
      matrix: matrix.map(row => [...row]),
      description: 'Initial augmented matrix [A | I]',
      explanation: 'Place I next to A. Goal: transform A → I using row operations.',
      highlightRow: -1, highlightCol: -1, highlightPivot: [-1, -1],
      highlightSecondaryRow: -1, operationType: 'initial'
    });

    for (let col = 0; col < n; col++) {
      const pivotRow = findBestPivotRow(matrix, col, col, n);
      if (pivotRow === -1) {
        stepsArray.push({
          matrix: matrix.map(row => [...row]),
          description: `No non-zero pivot in column ${col + 1}`,
          explanation: 'Matrix is singular (det = 0) — not invertible.',
          highlightRow: -1, highlightCol: col, highlightPivot: [-1, -1],
          highlightSecondaryRow: -1, operationType: 'error', error: true
        });
        return stepsArray;
      }

      if (pivotRow !== col) {
        const pivotVal = matrix[pivotRow][col];
        const currentVal = matrix[col][col];
        let swapReason = '';
        if (Math.abs(currentVal) < 1e-10) swapReason = `Position (${col+1},${col+1}) is zero.`;
        else if (pivotVal === 1) swapReason = `R${pivotRow+1} has 1 in col ${col+1} — avoids division.`;
        else if (pivotVal === -1) swapReason = `R${pivotRow+1} has -1 — only needs sign flip.`;
        else if (Number.isInteger(pivotVal) && !Number.isInteger(currentVal)) swapReason = `R${pivotRow+1} has integer ${pivotVal}, better than fraction.`;
        else if (Number.isInteger(pivotVal) && Number.isInteger(currentVal) && Math.abs(pivotVal) < Math.abs(currentVal)) swapReason = `R${pivotRow+1} has smaller value (${pivotVal} vs ${currentVal}).`;
        
        const temp = matrix[col]; matrix[col] = matrix[pivotRow]; matrix[pivotRow] = temp;
        stepsArray.push({
          matrix: matrix.map(row => [...row]),
          description: `R${col+1} ↔ R${pivotRow+1}`,
          explanation: swapReason,
          highlightRow: col, highlightCol: -1, highlightPivot: [col, col],
          highlightSecondaryRow: pivotRow, operationType: 'swap'
        });
      }

      const pivot = matrix[col][col];
      if (Math.abs(pivot - 1) > 1e-10 && Math.abs(pivot + 1) > 1e-10) {
        const multiplier = 1 / pivot;
        matrix[col] = matrix[col].map(val => val * multiplier);
        const multiplierStr = formatMultiplier(multiplier);
        stepsArray.push({
          matrix: matrix.map(row => [...row]),
          description: `R${col+1} → ${multiplierStr}·R${col+1}`,
          explanation: `Multiply by ${multiplierStr} (inverse of ${formatNumber(pivot)}) to make pivot = 1.`,
          highlightRow: col, highlightCol: -1, highlightPivot: [col, col],
          highlightSecondaryRow: -1, operationType: 'scale'
        });
      } else if (Math.abs(pivot + 1) < 1e-10) {
        matrix[col] = matrix[col].map(val => -val);
        stepsArray.push({
          matrix: matrix.map(row => [...row]),
          description: `R${col+1} → (-1)·R${col+1}`,
          explanation: `Negate row to flip pivot from -1 to 1.`,
          highlightRow: col, highlightCol: -1, highlightPivot: [col, col],
          highlightSecondaryRow: -1, operationType: 'scale'
        });
      }

      for (let row = 0; row < n; row++) {
        if (row !== col && Math.abs(matrix[row][col]) > 1e-10) {
          const factor = matrix[row][col];
          matrix[row] = matrix[row].map((val, j) => val - factor * matrix[col][j]);
          let opStr;
          const factorStr = formatMultiplier(Math.abs(factor));
          if (factor > 0) {
            opStr = factor === 1 ? `R${row+1} → R${row+1} - R${col+1}` : `R${row+1} → R${row+1} - ${factorStr}·R${col+1}`;
          } else {
            opStr = factor === -1 ? `R${row+1} → R${row+1} + R${col+1}` : `R${row+1} → R${row+1} + ${factorStr}·R${col+1}`;
          }
          stepsArray.push({
            matrix: matrix.map(row => [...row]),
            description: opStr,
            explanation: `Eliminate ${formatNumber(factor)} at (${row+1},${col+1}) to create zero.`,
            highlightRow: row, highlightCol: col, highlightPivot: [col, col],
            highlightSecondaryRow: col, operationType: 'eliminate'
          });
        }
      }
    }

    stepsArray.push({
      matrix: matrix.map(row => [...row]),
      description: 'Complete! [I | A⁻¹]',
      explanation: 'Left side is now I. Right side is A⁻¹.',
      highlightRow: -1, highlightCol: -1, highlightPivot: [-1, -1],
      highlightSecondaryRow: -1, operationType: 'complete'
    });
    return stepsArray;
  }, [createAugmentedMatrix, size]);

  useEffect(() => {
    setAugmented(createAugmentedMatrix());
    setSteps([]); setCurrentStep(-1); setIsComplete(false); setErrorMessage('');
  }, [matrixA, size, createAugmentedMatrix]);

  useEffect(() => {
    if (logEndRef.current) logEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [currentStep]);

  const applyStepHighlights = useCallback((idx) => {
    const s = steps[idx]; if (!s) return;
    setAugmented(s.matrix); setHighlightRow(s.highlightRow); setHighlightCol(s.highlightCol);
    setHighlightPivot(s.highlightPivot); setHighlightSecondaryRow(s.highlightSecondaryRow);
    if (s.error) { setErrorMessage(s.explanation); setIsRunning(false); }
    if (s.operationType === 'complete') { setIsComplete(true); setIsRunning(false); }
  }, [steps]);

  const startComputation = () => {
    const allSteps = computeAllSteps();
    setSteps(allSteps); setCurrentStep(0); setAugmented(allSteps[0].matrix);
    setIsRunning(true); setIsComplete(false); setErrorMessage('');
  };

  const stepForward = useCallback(() => {
    if (steps.length === 0) {
      const allSteps = computeAllSteps();
      setSteps(allSteps); setCurrentStep(0); setAugmented(allSteps[0].matrix);
      if (allSteps[0].error) setErrorMessage(allSteps[0].explanation);
    } else if (currentStep < steps.length - 1) {
      const next = currentStep + 1; setCurrentStep(next); applyStepHighlights(next);
    }
  }, [steps, currentStep, computeAllSteps, applyStepHighlights]);

  const stepBackward = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1; setCurrentStep(prev); applyStepHighlights(prev);
      setIsComplete(false); setErrorMessage('');
    }
  };

  useEffect(() => {
    let timer;
    if (isRunning && currentStep < steps.length - 1) timer = setTimeout(() => stepForward(), speed);
    else if (currentStep === steps.length - 1) setIsRunning(false);
    return () => clearTimeout(timer);
  }, [isRunning, currentStep, steps.length, speed, stepForward]);

  const pause = () => setIsRunning(false);
  const resume = () => { if (currentStep < steps.length - 1 && !errorMessage) setIsRunning(true); };

  const reset = () => {
    setAugmented(createAugmentedMatrix()); setSteps([]); setCurrentStep(-1);
    setIsRunning(false); setHighlightRow(-1); setHighlightCol(-1);
    setHighlightPivot([-1, -1]); setHighlightSecondaryRow(-1);
    setIsComplete(false); setErrorMessage('');
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    const m = [];
    for (let i = 0; i < newSize; i++) {
      m[i] = [];
      for (let j = 0; j < newSize; j++) {
        m[i][j] = (i < matrixA.length && j < matrixA[0].length) ? matrixA[i][j] : (i === j ? 1 : Math.floor(Math.random() * 5));
      }
    }
    setMatrixA(m);
  };

  const handleCellChange = (i, j, value) => {
    const m = matrixA.map(row => [...row]); m[i][j] = parseFloat(value) || 0; setMatrixA(m);
  };

  const randomizeMatrix = () => {
    let m; let att = 0;
    do { m = Array(size).fill(0).map(() => Array(size).fill(0).map(() => Math.floor(Math.random() * 9) - 4)); att++; }
    while (determinant(m) === 0 && att < 100);
    setMatrixA(m);
  };

  const determinant = (matrix) => {
    const n = matrix.length;
    if (n === 1) return matrix[0][0];
    if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    let det = 0;
    for (let j = 0; j < n; j++) {
      const minor = matrix.slice(1).map(row => [...row.slice(0, j), ...row.slice(j + 1)]);
      det += Math.pow(-1, j) * matrix[0][j] * determinant(minor);
    }
    return det;
  };

  const getOpColor = (type) => {
    switch (type) {
      case 'swap': return { bg: '#fef3c7', border: '#f59e0b', text: '#92400e', badge: '#f59e0b' };
      case 'scale': return { bg: '#ede9fe', border: '#8b5cf6', text: '#5b21b6', badge: '#8b5cf6' };
      case 'eliminate': return { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af', badge: '#3b82f6' };
      case 'complete': return { bg: '#dcfce7', border: '#22c55e', text: '#166534', badge: '#22c55e' };
      case 'error': return { bg: '#fee2e2', border: '#ef4444', text: '#991b1b', badge: '#ef4444' };
      default: return { bg: '#f1f5f9', border: '#94a3b8', text: '#475569', badge: '#94a3b8' };
    }
  };

  const getOpLabel = (type) => {
    switch (type) {
      case 'swap': return 'SWAP'; case 'scale': return 'SCALE'; case 'eliminate': return 'ELIM';
      case 'complete': return 'DONE'; case 'error': return 'ERR'; default: return 'INIT';
    }
  };

  const cW = size <= 3 ? 48 : size === 4 ? 44 : 40;
  const cH = size <= 3 ? 36 : size === 4 ? 32 : 28;
  const cF = size <= 3 ? 13 : size === 4 ? 12 : 11;
  const cG = 3;

  const btnStyle = (enabled, color) => ({
    padding: '7px 16px', backgroundColor: enabled ? color : '#9ca3af',
    color: 'white', border: 'none', borderRadius: '6px',
    fontSize: '13px', fontWeight: 600, cursor: enabled ? 'pointer' : 'not-allowed'
  });

  return (
    <div style={{ width: '100%', maxWidth: '1500px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8fafc' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '16px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e40af', marginBottom: '4px' }}>
          Matrix Inverse via Row Operations
        </h1>
        <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
          Gauss-Jordan elimination — smart pivot selection to minimize fractions
        </p>
      </div>

      {/* 2/3 + 1/3 master layout */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>

        {/* LEFT 2/3: Main tool */}
        <div style={{ flex: '0 0 66%', minWidth: 0 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '20px' }}>

            {/* Controls */}
            <div style={{ marginBottom: '14px', display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, color: '#374151', marginBottom: '3px' }}>Size</label>
                <select value={size} onChange={(e) => handleSizeChange(parseInt(e.target.value))}
                  disabled={isRunning || currentStep >= 0}
                  style={{ padding: '5px 10px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '13px',
                    cursor: isRunning || currentStep >= 0 ? 'not-allowed' : 'pointer',
                    opacity: isRunning || currentStep >= 0 ? 0.5 : 1 }}>
                  <option value={2}>2×2</option>
                  <option value={3}>3×3</option>
                  <option value={4}>4×4</option>
                  <option value={5}>5×5</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, color: '#374151', marginBottom: '3px' }}>Speed</label>
                <select value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))}
                  style={{ padding: '5px 10px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '13px' }}>
                  <option value={2500}>Slow</option>
                  <option value={1500}>Normal</option>
                  <option value={800}>Fast</option>
                  <option value={400}>Very Fast</option>
                </select>
              </div>
              <button onClick={randomizeMatrix} disabled={isRunning || currentStep >= 0}
                style={{ ...btnStyle(!(isRunning || currentStep >= 0), '#6366f1'), height: '30px', fontSize: '12px' }}>
                Randomize
              </button>
              <span style={{ fontSize: '12px', color: '#6b7280', paddingBottom: '3px' }}>
                det = <strong style={{ color: determinant(matrixA) === 0 ? '#dc2626' : '#374151' }}>{formatNumber(determinant(matrixA))}</strong>
                {determinant(matrixA) === 0 && <span style={{ color: '#dc2626' }}> Singular!</span>}
              </span>
            </div>

            {/* Input Matrix */}
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '10px', backgroundColor: '#fafafa', marginBottom: '12px', display: 'inline-block' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Matrix A</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ fontSize: '32px', color: '#9ca3af', lineHeight: '1' }}>[</span>
                <div>
                  {matrixA.map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: `${cG}px`, marginBottom: i < matrixA.length - 1 ? `${cG}px` : 0 }}>
                      {row.map((cell, j) => (
                        <input key={j} type="number" value={cell}
                          onChange={(e) => handleCellChange(i, j, e.target.value)}
                          disabled={isRunning || currentStep >= 0}
                          style={{ width: `${cW}px`, height: `${cH}px`, textAlign: 'center',
                            border: '1px solid #d1d5db', borderRadius: '3px', fontSize: `${cF}px`,
                            fontFamily: 'monospace', cursor: isRunning || currentStep >= 0 ? 'not-allowed' : 'text',
                            opacity: isRunning || currentStep >= 0 ? 0.6 : 1 }} />
                      ))}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '32px', color: '#9ca3af', lineHeight: '1' }}>]</span>
              </div>
            </div>

            {/* Augmented + Log side by side */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'stretch' }}>

              {/* Augmented matrix */}
              <div style={{ border: '2px solid #93c5fd', borderRadius: '8px', padding: '10px', backgroundColor: '#eff6ff', flexShrink: 0 }}>
                <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#1e40af', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  [A | I]
                  {currentStep >= 0 && <span style={{ fontSize: '11px', fontWeight: 'normal', color: '#6b7280' }}>Step {currentStep + 1}/{steps.length}</span>}
                </h3>
                <div style={{ overflowX: 'auto' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', minWidth: 'fit-content' }}>
                    <span style={{ fontSize: '36px', color: '#9ca3af', lineHeight: '1' }}>[</span>
                    <div>
                      {augmented.map((row, i) => (
                        <div key={i} style={{ display: 'flex', gap: `${cG}px`, marginBottom: i < augmented.length - 1 ? `${cG}px` : 0, alignItems: 'center' }}>
                          {row.map((cell, j) => {
                            const isLeft = j < size;
                            const isPiv = highlightPivot[0] === i && highlightPivot[1] === j;
                            const isHRow = highlightRow === i;
                            const isSRow = highlightSecondaryRow === i && highlightRow !== i;
                            const isHCol = highlightCol === j && isLeft;
                            const isDL = isLeft && i === j;
                            const isDR = !isLeft && i === (j - size);
                            
                            let bg = 'white', bc = '#d1d5db', fw = 'normal';
                            if (isPiv) { bg = '#fbbf24'; bc = '#d97706'; fw = 'bold'; }
                            else if (isHRow && isHCol) { bg = '#f87171'; bc = '#dc2626'; }
                            else if (isHRow) { bg = '#bfdbfe'; bc = '#3b82f6'; }
                            else if (isSRow) { bg = '#ddd6fe'; bc = '#8b5cf6'; }
                            else if (isHCol) { bg = '#fecaca'; bc = '#f87171'; }
                            else if (isComplete && isDL) { bg = '#86efac'; bc = '#22c55e'; fw = 'bold'; }
                            else if (isComplete && isDR) { bg = '#c4b5fd'; bc = '#8b5cf6'; fw = 'bold'; }
                            
                            return (
                              <React.Fragment key={j}>
                                {j === size && <div style={{ width: '2px', height: `${cH}px`, backgroundColor: '#6b7280', margin: '0 3px' }} />}
                                <div style={{
                                  width: `${cW}px`, height: `${cH}px`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  fontSize: `${cF}px`, fontFamily: 'monospace', borderRadius: '3px',
                                  border: `2px solid ${bc}`, backgroundColor: bg, fontWeight: fw, transition: 'all 0.3s ease'
                                }}>{formatNumber(cell)}</div>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: '36px', color: '#9ca3af', lineHeight: '1' }}>]</span>
                  </div>
                </div>
                {/* Legend */}
                <div style={{ marginTop: '8px', display: 'flex', gap: '8px', fontSize: '10px', flexWrap: 'wrap' }}>
                  {[
                    { c: '#fbbf24', b: '#d97706', l: 'Pivot' },
                    { c: '#bfdbfe', b: '#3b82f6', l: 'Active' },
                    { c: '#ddd6fe', b: '#8b5cf6', l: 'Ref' },
                    { c: '#fecaca', b: '#f87171', l: 'Target' }
                  ].map(x => (
                    <span key={x.l} style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <div style={{ width: '10px', height: '10px', backgroundColor: x.c, borderRadius: '2px', border: `1px solid ${x.b}` }} />{x.l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Operations Log */}
              <div style={{ border: '2px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc', flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f1f5f9', borderRadius: '6px 6px 0 0' }}>
                  <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#374151', margin: 0 }}>Row Operations Log</h3>
                </div>
                <div style={{ flex: 1, overflowY: 'auto', padding: '6px', maxHeight: '320px', minHeight: '160px' }}>
                  {steps.length === 0 && (
                    <div style={{ padding: '16px', textAlign: 'center', color: '#9ca3af', fontSize: '12px', fontStyle: 'italic' }}>
                      Press Start to begin
                    </div>
                  )}
                  {steps.slice(0, currentStep + 1).map((sd, idx) => {
                    const c = getOpColor(sd.operationType);
                    const cur = idx === currentStep;
                    return (
                      <div key={idx}
                        onClick={() => { if (!isRunning) { setCurrentStep(idx); applyStepHighlights(idx); setIsComplete(sd.operationType === 'complete'); setErrorMessage(sd.error ? sd.explanation : ''); }}}
                        style={{ padding: '6px 8px', marginBottom: '3px', borderRadius: '5px',
                          border: `2px solid ${cur ? c.border : 'transparent'}`,
                          backgroundColor: cur ? c.bg : 'transparent',
                          cursor: isRunning ? 'default' : 'pointer', transition: 'all 0.2s ease' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '9px', fontWeight: 700, color: 'white',
                            backgroundColor: cur ? c.badge : '#cbd5e1', padding: '1px 5px',
                            borderRadius: '3px', letterSpacing: '0.5px', flexShrink: 0 }}>
                            {getOpLabel(sd.operationType)}
                          </span>
                          <span style={{ fontFamily: 'monospace', fontSize: '12px',
                            fontWeight: cur ? 700 : 500, color: cur ? c.text : '#64748b' }}>
                            {sd.description}
                          </span>
                        </div>
                        {sd.explanation && (
                          <p style={{ margin: '2px 0 0 0', fontSize: '11px',
                            color: cur ? c.text : '#78716c', lineHeight: '1.3', paddingLeft: '38px' }}>
                            {sd.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                  <div ref={logEndRef} />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ marginBottom: '12px', display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {currentStep < 0 ? (
                <button onClick={startComputation} disabled={determinant(matrixA) === 0}
                  style={btnStyle(determinant(matrixA) !== 0, '#2563eb')}>▶ Start</button>
              ) : (
                <>
                  <button onClick={stepBackward} disabled={currentStep <= 0 || isRunning}
                    style={btnStyle(currentStep > 0 && !isRunning, '#6366f1')}>← Back</button>
                  {isRunning ? (
                    <button onClick={pause} style={btnStyle(true, '#ea580c')}>⏸ Pause</button>
                  ) : (
                    <button onClick={resume} disabled={currentStep >= steps.length - 1 || !!errorMessage}
                      style={btnStyle(currentStep < steps.length - 1 && !errorMessage, '#2563eb')}>▶ Play</button>
                  )}
                  <button onClick={stepForward} disabled={currentStep >= steps.length - 1 || isRunning}
                    style={btnStyle(currentStep < steps.length - 1 && !isRunning, '#6366f1')}>Next →</button>
                </>
              )}
              <button onClick={reset} style={btnStyle(true, '#dc2626')}>Reset</button>
            </div>

            {/* Result A⁻¹ */}
            {isComplete && (
              <div style={{ padding: '12px', backgroundColor: '#f5f3ff', border: '2px solid #c4b5fd', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#6d28d9', marginBottom: '6px' }}>✓ Result: A⁻¹</h3>
                <div style={{ overflowX: 'auto' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <span style={{ fontSize: '32px', color: '#9ca3af', lineHeight: '1' }}>[</span>
                    <div>
                      {augmented.map((row, i) => (
                        <div key={i} style={{ display: 'flex', gap: `${cG}px`, marginBottom: i < augmented.length - 1 ? `${cG}px` : 0 }}>
                          {row.slice(size).map((cell, j) => (
                            <div key={j} style={{
                              width: `${cW + 6}px`, height: `${cH}px`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: `${cF}px`, fontFamily: 'monospace', borderRadius: '3px',
                              border: '2px solid #c4b5fd', backgroundColor: 'white', fontWeight: i === j ? 'bold' : 'normal'
                            }}>{formatNumber(cell)}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: '32px', color: '#9ca3af', lineHeight: '1' }}>]</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT 1/3: Reference Panel */}
        <div style={{ flex: '0 0 calc(34% - 16px)', minWidth: 0 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '20px' }}>

            {/* How to Use */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>📖</span> How to Use
              </h3>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '4px' }}><strong>1.</strong> Enter your matrix A or click <strong>Randomize</strong> to generate an invertible one.</p>
                <p style={{ marginBottom: '4px' }}><strong>2.</strong> Press <strong>Start</strong> to compute all steps, then use <strong>Play</strong> for auto or <strong>Next/Back</strong> for manual stepping.</p>
                <p style={{ marginBottom: '4px' }}><strong>3.</strong> Click any past step in the log to jump to that state and inspect the matrix at that point.</p>
                <p style={{ marginBottom: '0' }}><strong>4.</strong> When done, A⁻¹ appears below the augmented matrix.</p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '14px 0' }} />

            {/* Theory */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>📐</span> Theory
              </h3>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '6px' }}>
                  A square matrix A is <strong>invertible</strong> if there exists A⁻¹ such that A·A⁻¹ = A⁻¹·A = I. This is possible if and only if det(A) ≠ 0.
                </p>
                <p style={{ marginBottom: '6px' }}>
                  <strong>Gauss-Jordan method:</strong> form the augmented matrix [A | I] and apply elementary row operations until A becomes I. The same operations transform I into A⁻¹.
                </p>
                <p style={{ marginBottom: '6px' }}>
                  <strong>Why it works:</strong> each row operation is equivalent to left-multiplication by an elementary matrix E. If E₁·E₂·…·Eₖ·A = I, then E₁·E₂·…·Eₖ = A⁻¹. Applying these to I gives exactly that product.
                </p>
                <p style={{ marginBottom: '0' }}>
                  <strong>Three elementary row operations:</strong> swap two rows, multiply a row by a non-zero scalar, add a scalar multiple of one row to another.
                </p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '14px 0' }} />

            {/* Smart Pivot Strategy */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>🧠</span> Smart Pivot Strategy
              </h3>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '6px' }}>
                  To minimize fractions, we <strong>always prefer swaps over division</strong>. Before scaling a pivot row, we scan all candidate rows for better values:
                </p>
                <div style={{ backgroundColor: '#f1f5f9', borderRadius: '6px', padding: '8px 10px', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '12px' }}>
                    <span><strong style={{ color: '#16a34a' }}>Best:</strong> value = 1 (no operation needed)</span>
                    <span><strong style={{ color: '#2563eb' }}>Good:</strong> value = -1 (just negate the row)</span>
                    <span><strong style={{ color: '#d97706' }}>OK:</strong> small integers (simpler fractions)</span>
                    <span><strong style={{ color: '#dc2626' }}>Last resort:</strong> fractions / large numbers</span>
                  </div>
                </div>
                <p style={{ marginBottom: '0' }}>
                  <strong>Notation:</strong> we write <span style={{ fontFamily: 'monospace' }}>R1 → ½·R1</span> (multiply by inverse) rather than R1 → R1/2, emphasizing that row operations are elementary matrix multiplications.
                </p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '14px 0' }} />

            {/* Color Legend */}
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>🎨</span> Operation Colors
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
                {[
                  { badge: '#f59e0b', label: 'SWAP', desc: 'Row interchange' },
                  { badge: '#8b5cf6', label: 'SCALE', desc: 'Multiply row by scalar' },
                  { badge: '#3b82f6', label: 'ELIM', desc: 'Add multiple of one row to another' },
                  { badge: '#22c55e', label: 'DONE', desc: 'Process complete' }
                ].map(x => (
                  <div key={x.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: 'white', backgroundColor: x.badge,
                      padding: '1px 5px', borderRadius: '3px', letterSpacing: '0.5px', flexShrink: 0, width: '40px', textAlign: 'center' }}>
                      {x.label}
                    </span>
                    <span style={{ color: '#4b5563' }}>{x.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}