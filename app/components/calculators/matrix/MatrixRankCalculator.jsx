'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function MatrixRankCalculator() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(4);
  const [matrixA, setMatrixA] = useState([
    [1, 2, 3, 4],
    [2, 4, 5, 7],
    [3, 6, 8, 11]
  ]);

  const [workingMatrix, setWorkingMatrix] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(1500);
  const [highlightRow, setHighlightRow] = useState(-1);
  const [highlightCol, setHighlightCol] = useState(-1);
  const [highlightPivot, setHighlightPivot] = useState([-1, -1]);
  const [highlightSecondaryRow, setHighlightSecondaryRow] = useState(-1);
  const [pivotPositions, setPivotPositions] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [rankResult, setRankResult] = useState(null);
  const logEndRef = useRef(null);

  // --- Utility ---

  const gcd = (a, b) => {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) { [a, b] = [b, a % b]; }
    return a;
  };

  const toFraction = (num) => {
    if (Number.isInteger(num)) return { num, den: 1 };
    let bestNum = Math.round(num * 1000000);
    let bestDen = 1000000;
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
    if (Math.abs(frac.den) <= 100 && Math.abs(frac.num) <= 1000) return `${frac.num}/${frac.den}`;
    const r = Math.round(num * 1000) / 1000;
    if (Number.isInteger(r)) return r.toString();
    return r.toFixed(3).replace(/\.?0+$/, '');
  };

  const formatMultiplier = (num) => {
    if (num === 1) return '';
    if (num === -1) return '-';
    const frac = toFraction(num);
    if (frac.den === 1) return frac.num.toString();
    if (frac.num < 0) return `(-${Math.abs(frac.num)}/${frac.den})`;
    return `(${frac.num}/${frac.den})`;
  };

  // --- Smart pivot ---

  const findBestPivotRow = (matrix, col, startRow, numRows) => {
    let bestRow = -1;
    let bestScore = -Infinity;
    for (let row = startRow; row < numRows; row++) {
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

  // --- Compute all steps ---

  const computeAllSteps = useCallback(() => {
    const stepsArray = [];
    let matrix = matrixA.map(row => [...row]);
    const m = rows;
    const n = cols;
    const pivots = [];

    stepsArray.push({
      matrix: matrix.map(r => [...r]),
      description: 'Original matrix',
      explanation: `${m}×${n} matrix. We reduce to Row Echelon Form (REF) and count pivots to find rank.`,
      highlightRow: -1, highlightCol: -1, highlightPivot: [-1, -1],
      highlightSecondaryRow: -1, operationType: 'initial', pivotPositions: []
    });

    let pivotRow = 0;

    for (let col = 0; col < n && pivotRow < m; col++) {
      const bestRow = findBestPivotRow(matrix, col, pivotRow, m);

      if (bestRow === -1) {
        stepsArray.push({
          matrix: matrix.map(r => [...r]),
          description: `Column ${col + 1}: all zeros below pivot`,
          explanation: `No non-zero entry in column ${col + 1} at or below row ${pivotRow + 1}. Skip — this is a free column.`,
          highlightRow: -1, highlightCol: col, highlightPivot: [-1, -1],
          highlightSecondaryRow: -1, operationType: 'skip', pivotPositions: [...pivots]
        });
        continue;
      }

      if (bestRow !== pivotRow) {
        const pivotVal = matrix[bestRow][col];
        const currentVal = matrix[pivotRow][col];
        let reason = '';
        if (Math.abs(currentVal) < 1e-10) reason = `Position (${pivotRow + 1},${col + 1}) is zero.`;
        else if (pivotVal === 1) reason = `R${bestRow + 1} has 1 in column ${col + 1} — avoids division.`;
        else if (pivotVal === -1) reason = `R${bestRow + 1} has -1 — only needs sign flip.`;
        else if (Number.isInteger(pivotVal) && !Number.isInteger(currentVal)) reason = `R${bestRow + 1} has integer ${pivotVal}, better than fraction.`;
        else if (Number.isInteger(pivotVal) && Number.isInteger(currentVal) && Math.abs(pivotVal) < Math.abs(currentVal)) reason = `R${bestRow + 1} has smaller value (${pivotVal} vs ${currentVal}).`;

        const temp = matrix[pivotRow];
        matrix[pivotRow] = matrix[bestRow];
        matrix[bestRow] = temp;

        stepsArray.push({
          matrix: matrix.map(r => [...r]),
          description: `R${pivotRow + 1} ↔ R${bestRow + 1}`,
          explanation: reason,
          highlightRow: pivotRow, highlightCol: -1, highlightPivot: [pivotRow, col],
          highlightSecondaryRow: bestRow, operationType: 'swap', pivotPositions: [...pivots]
        });
      }

      const pivot = matrix[pivotRow][col];

      if (Math.abs(pivot - 1) > 1e-10 && Math.abs(pivot + 1) > 1e-10) {
        const mult = 1 / pivot;
        matrix[pivotRow] = matrix[pivotRow].map(v => v * mult);
        const multStr = formatMultiplier(mult);
        stepsArray.push({
          matrix: matrix.map(r => [...r]),
          description: `R${pivotRow + 1} → ${multStr}·R${pivotRow + 1}`,
          explanation: `Multiply by ${multStr} (inverse of ${formatNumber(pivot)}) to make pivot = 1.`,
          highlightRow: pivotRow, highlightCol: -1, highlightPivot: [pivotRow, col],
          highlightSecondaryRow: -1, operationType: 'scale', pivotPositions: [...pivots]
        });
      } else if (Math.abs(pivot + 1) < 1e-10) {
        matrix[pivotRow] = matrix[pivotRow].map(v => -v);
        stepsArray.push({
          matrix: matrix.map(r => [...r]),
          description: `R${pivotRow + 1} → (-1)·R${pivotRow + 1}`,
          explanation: `Negate row to flip pivot from -1 to 1.`,
          highlightRow: pivotRow, highlightCol: -1, highlightPivot: [pivotRow, col],
          highlightSecondaryRow: -1, operationType: 'scale', pivotPositions: [...pivots]
        });
      }

      // Eliminate below only (REF, not RREF)
      for (let row = pivotRow + 1; row < m; row++) {
        if (Math.abs(matrix[row][col]) > 1e-10) {
          const factor = matrix[row][col];
          matrix[row] = matrix[row].map((v, j) => v - factor * matrix[pivotRow][j]);
          let opStr;
          const fStr = formatMultiplier(Math.abs(factor));
          if (factor > 0) {
            opStr = factor === 1 ? `R${row + 1} → R${row + 1} - R${pivotRow + 1}` : `R${row + 1} → R${row + 1} - ${fStr}·R${pivotRow + 1}`;
          } else {
            opStr = factor === -1 ? `R${row + 1} → R${row + 1} + R${pivotRow + 1}` : `R${row + 1} → R${row + 1} + ${fStr}·R${pivotRow + 1}`;
          }
          stepsArray.push({
            matrix: matrix.map(r => [...r]),
            description: opStr,
            explanation: `Eliminate ${formatNumber(factor)} at (${row + 1},${col + 1}) to create zero below pivot.`,
            highlightRow: row, highlightCol: col, highlightPivot: [pivotRow, col],
            highlightSecondaryRow: pivotRow, operationType: 'eliminate', pivotPositions: [...pivots]
          });
        }
      }

      pivots.push([pivotRow, col]);

      stepsArray.push({
        matrix: matrix.map(r => [...r]),
        description: `Pivot #${pivots.length} found at (${pivotRow + 1}, ${col + 1})`,
        explanation: `Column ${col + 1} is a pivot column. Pivot count so far: ${pivots.length}.`,
        highlightRow: -1, highlightCol: -1, highlightPivot: [pivotRow, col],
        highlightSecondaryRow: -1, operationType: 'pivot', pivotPositions: [...pivots]
      });

      pivotRow++;
    }

    const rank = pivots.length;
    const nullity = n - rank;
    const freeColIndices = [];
    const pivotColSet = new Set(pivots.map(p => p[1]));
    for (let j = 0; j < n; j++) {
      if (!pivotColSet.has(j)) freeColIndices.push(j + 1);
    }

    stepsArray.push({
      matrix: matrix.map(r => [...r]),
      description: `Complete! Rank = ${rank}`,
      explanation: `Row Echelon Form reached. ${rank} pivot${rank !== 1 ? 's' : ''} found. Nullity = ${n} - ${rank} = ${nullity}.${freeColIndices.length > 0 ? ` Free column${freeColIndices.length > 1 ? 's' : ''}: ${freeColIndices.join(', ')}.` : ' No free columns.'}`,
      highlightRow: -1, highlightCol: -1, highlightPivot: [-1, -1],
      highlightSecondaryRow: -1, operationType: 'complete',
      pivotPositions: [...pivots],
      rankInfo: { rank, nullity, pivotCols: pivots.map(p => p[1]), freeCols: freeColIndices.map(c => c - 1), m, n }
    });

    return stepsArray;
  }, [matrixA, rows, cols]);

  // --- State management ---

  useEffect(() => {
    setWorkingMatrix(matrixA.map(r => [...r]));
    setSteps([]); setCurrentStep(-1); setIsComplete(false);
    setPivotPositions([]); setRankResult(null);
  }, [matrixA, rows, cols]);

  useEffect(() => {
    if (logEndRef.current) logEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [currentStep]);

  const applyStep = useCallback((idx) => {
    const s = steps[idx]; if (!s) return;
    setWorkingMatrix(s.matrix);
    setHighlightRow(s.highlightRow); setHighlightCol(s.highlightCol);
    setHighlightPivot(s.highlightPivot); setHighlightSecondaryRow(s.highlightSecondaryRow);
    setPivotPositions(s.pivotPositions || []);
    if (s.operationType === 'complete') {
      setIsComplete(true); setIsRunning(false); setRankResult(s.rankInfo);
    }
  }, [steps]);

  const startComputation = () => {
    const all = computeAllSteps();
    setSteps(all); setCurrentStep(0); setWorkingMatrix(all[0].matrix);
    setIsRunning(true); setIsComplete(false); setRankResult(null);
  };

  const stepForward = useCallback(() => {
    if (steps.length === 0) {
      const all = computeAllSteps();
      setSteps(all); setCurrentStep(0); setWorkingMatrix(all[0].matrix);
    } else if (currentStep < steps.length - 1) {
      const next = currentStep + 1; setCurrentStep(next); applyStep(next);
    }
  }, [steps, currentStep, computeAllSteps, applyStep]);

  const stepBackward = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1; setCurrentStep(prev); applyStep(prev);
      setIsComplete(false); setRankResult(null);
    }
  };

  useEffect(() => {
    let timer;
    if (isRunning && currentStep < steps.length - 1) timer = setTimeout(() => stepForward(), speed);
    else if (currentStep === steps.length - 1) setIsRunning(false);
    return () => clearTimeout(timer);
  }, [isRunning, currentStep, steps.length, speed, stepForward]);

  const pause = () => setIsRunning(false);
  const resume = () => { if (currentStep < steps.length - 1) setIsRunning(true); };

  const reset = () => {
    setWorkingMatrix(matrixA.map(r => [...r]));
    setSteps([]); setCurrentStep(-1); setIsRunning(false);
    setHighlightRow(-1); setHighlightCol(-1); setHighlightPivot([-1, -1]);
    setHighlightSecondaryRow(-1); setPivotPositions([]);
    setIsComplete(false); setRankResult(null);
  };

  const handleDimensionChange = (newRows, newCols) => {
    const m = [];
    for (let i = 0; i < newRows; i++) {
      m[i] = [];
      for (let j = 0; j < newCols; j++) {
        m[i][j] = (i < matrixA.length && j < matrixA[0].length) ? matrixA[i][j] : Math.floor(Math.random() * 7) - 3;
      }
    }
    setRows(newRows); setCols(newCols); setMatrixA(m);
  };

  const handleCellChange = (i, j, value) => {
    const m = matrixA.map(r => [...r]); m[i][j] = parseFloat(value) || 0; setMatrixA(m);
  };

  const randomizeMatrix = () => {
    const m = Array(rows).fill(0).map(() => Array(cols).fill(0).map(() => Math.floor(Math.random() * 9) - 4));
    setMatrixA(m);
  };

  const randomizeRankDeficient = () => {
    // Build a matrix with at least one dependent row
    const m = Array(rows).fill(0).map(() => Array(cols).fill(0).map(() => Math.floor(Math.random() * 7) - 3));
    if (rows >= 2) {
      // Make last row a combination of first two
      const a = Math.floor(Math.random() * 3) + 1;
      const b = Math.floor(Math.random() * 3) - 1;
      for (let j = 0; j < cols; j++) {
        m[rows - 1][j] = a * m[0][j] + b * (rows > 2 ? m[1][j] : 0);
      }
    }
    setMatrixA(m);
  };

  // --- Rendering helpers ---

  const getOpColor = (type) => {
    switch (type) {
      case 'swap': return { bg: '#fef3c7', border: '#f59e0b', text: '#92400e', badge: '#f59e0b' };
      case 'scale': return { bg: '#ede9fe', border: '#8b5cf6', text: '#5b21b6', badge: '#8b5cf6' };
      case 'eliminate': return { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af', badge: '#3b82f6' };
      case 'pivot': return { bg: '#dcfce7', border: '#22c55e', text: '#166534', badge: '#22c55e' };
      case 'skip': return { bg: '#fff7ed', border: '#f97316', text: '#9a3412', badge: '#f97316' };
      case 'complete': return { bg: '#dcfce7', border: '#22c55e', text: '#166534', badge: '#22c55e' };
      case 'error': return { bg: '#fee2e2', border: '#ef4444', text: '#991b1b', badge: '#ef4444' };
      default: return { bg: '#f1f5f9', border: '#94a3b8', text: '#475569', badge: '#94a3b8' };
    }
  };

  const getOpLabel = (type) => {
    switch (type) {
      case 'swap': return 'SWAP'; case 'scale': return 'SCALE'; case 'eliminate': return 'ELIM';
      case 'pivot': return 'PIVOT'; case 'skip': return 'SKIP';
      case 'complete': return 'DONE'; default: return 'INIT';
    }
  };

  const maxDim = Math.max(rows, cols);
  const cW = maxDim <= 3 ? 48 : maxDim === 4 ? 44 : 40;
  const cH = maxDim <= 3 ? 36 : maxDim === 4 ? 32 : 28;
  const cF = maxDim <= 3 ? 13 : maxDim === 4 ? 12 : 11;
  const cG = 3;

  const isPivotPos = (i, j) => pivotPositions.some(p => p[0] === i && p[1] === j);
  const isPivotCol = (j) => pivotPositions.some(p => p[1] === j);

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
          Matrix Rank Calculator
        </h1>
        <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
          Step-by-step row reduction to Row Echelon Form — find rank, nullity, pivot &amp; free columns
        </p>
      </div>

      {/* 2/3 + 1/3 layout */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>

        {/* LEFT 2/3 */}
        <div style={{ flex: '0 0 66%', minWidth: 0 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '20px' }}>

            {/* Controls */}
            <div style={{ marginBottom: '14px', display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, color: '#374151', marginBottom: '3px' }}>Rows</label>
                <select value={rows} onChange={(e) => handleDimensionChange(parseInt(e.target.value), cols)}
                  disabled={isRunning || currentStep >= 0}
                  style={{ padding: '5px 10px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '13px',
                    cursor: isRunning || currentStep >= 0 ? 'not-allowed' : 'pointer',
                    opacity: isRunning || currentStep >= 0 ? 0.5 : 1 }}>
                  {[2, 3, 4, 5].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div style={{ fontSize: '16px', color: '#9ca3af', paddingBottom: '4px' }}>×</div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 500, color: '#374151', marginBottom: '3px' }}>Cols</label>
                <select value={cols} onChange={(e) => handleDimensionChange(rows, parseInt(e.target.value))}
                  disabled={isRunning || currentStep >= 0}
                  style={{ padding: '5px 10px', border: '1px solid #d1d5db', borderRadius: '5px', fontSize: '13px',
                    cursor: isRunning || currentStep >= 0 ? 'not-allowed' : 'pointer',
                    opacity: isRunning || currentStep >= 0 ? 0.5 : 1 }}>
                  {[2, 3, 4, 5].map(v => <option key={v} value={v}>{v}</option>)}
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
                Random
              </button>
              <button onClick={randomizeRankDeficient} disabled={isRunning || currentStep >= 0}
                style={{ ...btnStyle(!(isRunning || currentStep >= 0), '#d97706'), height: '30px', fontSize: '12px' }}>
                Rank-Deficient
              </button>
            </div>

            {/* Input Matrix */}
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '10px', backgroundColor: '#fafafa', marginBottom: '12px', display: 'inline-block' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                Matrix A <span style={{ fontWeight: 'normal', color: '#6b7280' }}>({rows}×{cols})</span>
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ fontSize: '32px', color: '#9ca3af', lineHeight: '1' }}>[</span>
                <div>
                  {matrixA.map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: `${cG}px`, marginBottom: i < rows - 1 ? `${cG}px` : 0 }}>
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

            {/* Working Matrix + Log */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'stretch' }}>

              {/* Matrix */}
              <div style={{ border: '2px solid #93c5fd', borderRadius: '8px', padding: '10px', backgroundColor: '#eff6ff', flexShrink: 0 }}>
                <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#1e40af', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Working Matrix
                  {currentStep >= 0 && <span style={{ fontSize: '11px', fontWeight: 'normal', color: '#6b7280' }}>Step {currentStep + 1}/{steps.length}</span>}
                </h3>

                {/* Column labels */}
                <div style={{ display: 'flex', gap: `${cG}px`, marginBottom: '2px', paddingLeft: '14px' }}>
                  {Array(cols).fill(0).map((_, j) => {
                    const isPCol = isPivotCol(j);
                    return (
                      <div key={j} style={{
                        width: `${cW}px`, textAlign: 'center', fontSize: '10px', fontWeight: 600,
                        color: isComplete ? (isPCol ? '#166534' : '#dc2626') : '#9ca3af'
                      }}>
                        {isComplete ? (isPCol ? 'P' : 'F') : `c${j + 1}`}
                      </div>
                    );
                  })}
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', minWidth: 'fit-content' }}>
                    <span style={{ fontSize: '36px', color: '#9ca3af', lineHeight: '1' }}>[</span>
                    <div>
                      {workingMatrix.map((row, i) => (
                        <div key={i} style={{ display: 'flex', gap: `${cG}px`, marginBottom: i < rows - 1 ? `${cG}px` : 0, alignItems: 'center' }}>
                          {row.map((cell, j) => {
                            const isPiv = highlightPivot[0] === i && highlightPivot[1] === j;
                            const isHRow = highlightRow === i;
                            const isSRow = highlightSecondaryRow === i && highlightRow !== i;
                            const isHCol = highlightCol === j;
                            const isFoundPivot = isPivotPos(i, j);
                            const isPCol = isComplete && isPivotCol(j);
                            const isFCol = isComplete && !isPivotCol(j);
                            const isZeroRow = isComplete && row.every(v => Math.abs(v) < 1e-10);

                            let bg = 'white', bc = '#d1d5db', fw = 'normal';

                            if (isPiv) { bg = '#fbbf24'; bc = '#d97706'; fw = 'bold'; }
                            else if (isHRow && isHCol) { bg = '#f87171'; bc = '#dc2626'; }
                            else if (isHRow) { bg = '#bfdbfe'; bc = '#3b82f6'; }
                            else if (isSRow) { bg = '#ddd6fe'; bc = '#8b5cf6'; }
                            else if (isHCol) { bg = '#fecaca'; bc = '#f87171'; }
                            else if (isFoundPivot) { bg = '#86efac'; bc = '#22c55e'; fw = 'bold'; }
                            else if (isComplete && isZeroRow) { bg = '#fee2e2'; bc = '#fca5a5'; }
                            else if (isComplete && isPCol) { bg = '#dcfce7'; bc = '#86efac'; }
                            else if (isComplete && isFCol) { bg = '#fef3c7'; bc = '#fcd34d'; }

                            return (
                              <div key={j} style={{
                                width: `${cW}px`, height: `${cH}px`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: `${cF}px`, fontFamily: 'monospace', borderRadius: '3px',
                                border: `2px solid ${bc}`, backgroundColor: bg, fontWeight: fw, transition: 'all 0.3s ease'
                              }}>{formatNumber(cell)}</div>
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
                    { c: '#86efac', b: '#22c55e', l: 'Pivot Col' },
                    { c: '#fef3c7', b: '#fcd34d', l: 'Free Col' },
                    { c: '#fee2e2', b: '#fca5a5', l: 'Zero Row' }
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
                <div style={{ flex: 1, overflowY: 'auto', padding: '6px', maxHeight: '340px', minHeight: '160px' }}>
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
                        onClick={() => { if (!isRunning) { setCurrentStep(idx); applyStep(idx); setIsComplete(sd.operationType === 'complete'); setRankResult(sd.rankInfo || null); }}}
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
                <button onClick={startComputation} style={btnStyle(true, '#2563eb')}>▶ Start</button>
              ) : (
                <>
                  <button onClick={stepBackward} disabled={currentStep <= 0 || isRunning}
                    style={btnStyle(currentStep > 0 && !isRunning, '#6366f1')}>← Back</button>
                  {isRunning ? (
                    <button onClick={pause} style={btnStyle(true, '#ea580c')}>⏸ Pause</button>
                  ) : (
                    <button onClick={resume} disabled={currentStep >= steps.length - 1}
                      style={btnStyle(currentStep < steps.length - 1, '#2563eb')}>▶ Play</button>
                  )}
                  <button onClick={stepForward} disabled={currentStep >= steps.length - 1 || isRunning}
                    style={btnStyle(currentStep < steps.length - 1 && !isRunning, '#6366f1')}>Next →</button>
                </>
              )}
              <button onClick={reset} style={btnStyle(true, '#dc2626')}>Reset</button>
            </div>

            {/* Result */}
            {isComplete && rankResult && (
              <div style={{ padding: '14px', backgroundColor: '#f0fdf4', border: '2px solid #86efac', borderRadius: '8px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {/* Rank badge */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px', fontWeight: 600 }}>RANK</div>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#16a34a', color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                      {rankResult.rank}
                    </div>
                  </div>
                  {/* Details */}
                  <div style={{ flex: 1, fontSize: '13px', color: '#374151', lineHeight: '1.6' }}>
                    <p style={{ margin: '0 0 4px 0' }}>
                      <strong>Matrix dimensions:</strong> {rankResult.m}×{rankResult.n}
                    </p>
                    <p style={{ margin: '0 0 4px 0' }}>
                      <strong>Rank:</strong> {rankResult.rank} &nbsp;|&nbsp; <strong>Nullity:</strong> {rankResult.nullity}
                      &nbsp;&nbsp;<span style={{ color: '#6b7280', fontSize: '12px' }}>(rank + nullity = {rankResult.rank} + {rankResult.nullity} = {rankResult.n} = n ✓)</span>
                    </p>
                    <p style={{ margin: '0 0 4px 0' }}>
                      <strong>Pivot columns:</strong> {rankResult.pivotCols.map(c => c + 1).join(', ')}
                      &nbsp;&nbsp;<strong>Free columns:</strong> {rankResult.freeCols.length > 0 ? rankResult.freeCols.map(c => c + 1).join(', ') : 'none'}
                    </p>
                    <p style={{ margin: '0', fontSize: '12px', color: '#6b7280' }}>
                      {rankResult.rank === Math.min(rankResult.m, rankResult.n)
                        ? '✓ Full rank — maximum possible for this shape.'
                        : `⚠ Rank-deficient — ${Math.min(rankResult.m, rankResult.n) - rankResult.rank} rank(s) below maximum.`}
                    </p>
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
                <p style={{ marginBottom: '4px' }}><strong>1.</strong> Set dimensions (rows × cols) — any combination from 2 to 5.</p>
                <p style={{ marginBottom: '4px' }}><strong>2.</strong> Enter values or use <strong>Random</strong> / <strong>Rank-Deficient</strong> to generate a matrix.</p>
                <p style={{ marginBottom: '4px' }}><strong>3.</strong> Press <strong>Start</strong>, then <strong>Play</strong> or <strong>Next</strong> to step through row reduction.</p>
                <p style={{ marginBottom: '0' }}><strong>4.</strong> At the end, see rank, nullity, pivot columns (green), and free columns (yellow).</p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '14px 0' }} />

            {/* Theory */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>📐</span> What is Rank?
              </h3>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '6px' }}>
                  The <strong>rank</strong> of a matrix is the number of linearly independent rows (or columns — they&apos;re always equal). Equivalently, it&apos;s the number of pivots in Row Echelon Form.
                </p>
                <p style={{ marginBottom: '6px' }}>
                  For an m×n matrix, rank ≤ min(m, n). When rank = min(m, n) the matrix has <strong>full rank</strong>. Otherwise it is <strong>rank-deficient</strong>.
                </p>
                <p style={{ marginBottom: '0' }}>
                  Row operations never change rank because they are reversible — each one is an invertible linear transformation of the row space.
                </p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '14px 0' }} />

            {/* Rank-Nullity */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>⚖️</span> Rank-Nullity Theorem
              </h3>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
                <div style={{ backgroundColor: '#f1f5f9', borderRadius: '6px', padding: '8px 10px', marginBottom: '6px', textAlign: 'center', fontFamily: 'monospace', fontSize: '13px' }}>
                  rank(A) + nullity(A) = n
                </div>
                <p style={{ marginBottom: '6px' }}>
                  <strong>Rank</strong> = dimension of column space = number of pivot columns.
                </p>
                <p style={{ marginBottom: '6px' }}>
                  <strong>Nullity</strong> = dimension of null space = number of free columns (non-pivot).
                </p>
                <p style={{ marginBottom: '0' }}>
                  Together they always sum to n (the number of columns). This is one of the fundamental theorems of linear algebra.
                </p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '14px 0' }} />

            {/* Pivot vs Free */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>🔑</span> Pivot vs Free Columns
              </h3>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '6px' }}>
                  <strong style={{ color: '#166534' }}>Pivot columns (P)</strong> — contain a leading 1 in REF. These columns are linearly independent and form a basis for the column space.
                </p>
                <p style={{ marginBottom: '0' }}>
                  <strong style={{ color: '#b45309' }}>Free columns (F)</strong> — no pivot. Each free column gives one degree of freedom in the null space. The corresponding variable is &quot;free&quot; when solving Ax = 0.
                </p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: '#e5e7eb', margin: '14px 0' }} />

            {/* Smart pivot note */}
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '16px' }}>🧠</span> Smart Pivots
              </h3>
              <div style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '0' }}>
                  We prefer swaps over division to minimize fractions. Priority: 1 → -1 → small integers → large integers → fractions. Notation: <span style={{ fontFamily: 'monospace' }}>R1 → ½·R1</span> (multiply by inverse).
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}