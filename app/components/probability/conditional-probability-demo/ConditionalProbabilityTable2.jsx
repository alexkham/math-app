'use client';

import React, { useState } from 'react';

export default function ConditionalProbabilityTable2() {
  const [pA, setPA] = useState(0.6);
  const [pBGivenA, setPBGivenA] = useState(0.7);
  const [pBGivenNotA, setPBGivenNotA] = useState(0.3);
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [highlightedMarginal, setHighlightedMarginal] = useState(null);
  const [calculationDisplay, setCalculationDisplay] = useState(null);

  // Calculate all probabilities
  const pNotA = 1 - pA;
  const pAAndB = pA * pBGivenA;
  const pAAndNotB = pA * (1 - pBGivenA);
  const pNotAAndB = pNotA * pBGivenNotA;
  const pNotAAndNotB = pNotA * (1 - pBGivenNotA);
  const pB = pAAndB + pNotAAndB;
  const pNotB = 1 - pB;

  const cellColors = {
    'AB': '#10b981',
    'AnotB': '#f59e0b',
    'notAB': '#8b5cf6',
    'notAnotB': '#ef4444'
  };

  const handleConditionalClick = (cell, marginal, calculation) => {
    if (highlightedCell === cell && highlightedMarginal === marginal) {
      setHighlightedCell(null);
      setHighlightedMarginal(null);
      setCalculationDisplay(null);
    } else {
      setHighlightedCell(cell);
      setHighlightedMarginal(marginal);
      setCalculationDisplay(calculation);
    }
  };

  const handleCellClick = (cell) => {
    if (highlightedCell === cell && !highlightedMarginal) {
      setHighlightedCell(null);
      setCalculationDisplay(null);
    } else {
      setHighlightedCell(cell);
      setHighlightedMarginal(null);
      setCalculationDisplay(null);
    }
  };

  const getCellStyle = (cellKey) => {
    const baseStyle = {
      padding: '20px',
      textAlign: 'center',
      border: '2px solid #e2e8f0',
      cursor: 'pointer',
      transition: 'all 0.3s',
      background: 'white'
    };

    if (highlightedCell === cellKey) {
      return {
        ...baseStyle,
        border: `3px solid ${cellColors[cellKey]}`,
        background: `${cellColors[cellKey]}30`,
        fontWeight: 'bold'
      };
    }

    return baseStyle;
  };

  const getMarginalStyle = (marginalKey) => {
    const baseStyle = {
      padding: '15px',
      fontWeight: 'bold',
      background: '#f8fafc',
      border: '2px solid #e2e8f0',
      textAlign: 'center',
      fontSize: '16px'
    };

    if (highlightedMarginal === marginalKey) {
      return {
        ...baseStyle,
        border: `3px solid ${cellColors[highlightedCell]}`,
        background: `${cellColors[highlightedCell]}20`
      };
    }

    return baseStyle;
  };

  const getHeaderStyle = (isHighlighted) => ({
    padding: '15px',
    fontWeight: 'bold',
    background: isHighlighted ? '#f1f5f9' : '#f8fafc',
    border: '2px solid #e2e8f0',
    textAlign: 'center'
  });

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @keyframes borderPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
          50% {
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
          }
        }
        
        .clickable-row {
          animation: borderPulse 3s ease-in-out infinite;
        }
        
        .clickable-row:hover {
          animation: none;
        }
        
        .conditional-table {
          border-spacing: 0 8px;
        }
        
        .conditional-table tbody tr.clickable-row {
          border-radius: 4px;
        }
      `}</style>
      
      {/* <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Conditional Probability Table</h1> */}
      <p style={{ color: '#666', marginBottom: '30px' }}>
        2×2 contingency table showing joint, marginal, and conditional probabilities. Click any cell to highlight it.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        {/* Left side: Contingency Table + Controls */}
        <div>
          {/* Contingency Table */}
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Joint Probability Table</h2>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={getHeaderStyle(false)}></th>
                  <th style={getHeaderStyle(false)}>B</th>
                  <th style={getHeaderStyle(false)}>B'</th>
                  <th style={getHeaderStyle(false)}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={getHeaderStyle(false)}>A</td>
                  <td 
                    style={getCellStyle('AB')}
                    onClick={() => handleCellClick('AB')}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
                      {pAAndB.toFixed(4)}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      P(A ∩ B)
                    </div>
                  </td>
                  <td 
                    style={getCellStyle('AnotB')}
                    onClick={() => handleCellClick('AnotB')}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
                      {pAAndNotB.toFixed(4)}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      P(A ∩ B')
                    </div>
                  </td>
                  <td style={getMarginalStyle('A')}>
                    {pA.toFixed(4)}
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle(false)}>A'</td>
                  <td 
                    style={getCellStyle('notAB')}
                    onClick={() => handleCellClick('notAB')}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
                      {pNotAAndB.toFixed(4)}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      P(A' ∩ B)
                    </div>
                  </td>
                  <td 
                    style={getCellStyle('notAnotB')}
                    onClick={() => handleCellClick('notAnotB')}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
                      {pNotAAndNotB.toFixed(4)}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      P(A' ∩ B')
                    </div>
                  </td>
                  <td style={getMarginalStyle('notA')}>
                    {pNotA.toFixed(4)}
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle(false)}>Total</td>
                  <td style={getMarginalStyle('B')}>
                    {pB.toFixed(4)}
                  </td>
                  <td style={getMarginalStyle('notB')}>
                    {pNotB.toFixed(4)}
                  </td>
                  <td style={{ ...getHeaderStyle(false), fontSize: '16px', fontWeight: 'bold' }}>
                    1.0000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Controls */}
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                P(A) = {pA.toFixed(3)}
              </label>
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={pA}
                onChange={(e) => setPA(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                P(B|A) = {pBGivenA.toFixed(3)}
              </label>
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={pBGivenA}
                onChange={(e) => setPBGivenA(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                P(B|A') = {pBGivenNotA.toFixed(3)}
              </label>
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={pBGivenNotA}
                onChange={(e) => setPBGivenNotA(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            {(highlightedCell || highlightedMarginal || calculationDisplay) && (
              <button
                onClick={() => {
                  setHighlightedCell(null);
                  setHighlightedMarginal(null);
                  setCalculationDisplay(null);
                }}
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Clear Selection
              </button>
            )}
          </div>
        </div>

        {/* Right side: Conditional Probability Tables in 2x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {/* Given A */}
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on A</h3>
            <div style={{ background: '#dbeafe', padding: '6px 12px', borderRadius: '4px', marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600' }}>Click rows to highlight paths</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px", flexGrow: 1 }} className="conditional-table">
              <tbody>
                <tr className="clickable-row" $
                //   className="clickable-row"
                  onClick={() => handleConditionalClick('AB', 'A', {
                    formula: 'P(B|A) = P(A ∩ B) / P(A)',
                    substitution: `P(B|A) = ${pAAndB.toFixed(4)} / ${pA.toFixed(4)}`,
                    result: `P(B|A) = ${pBGivenA.toFixed(4)}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'AB' && highlightedMarginal === 'A' ? '#10b98115' : 'transparent',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'AB' && highlightedMarginal === 'A')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'AB' && highlightedMarginal === 'A')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(B|A) = P(A∩B) / P(A) = {pAAndB.toFixed(2)} / {pA.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {pBGivenA.toFixed(4)}
                  </td>
                </tr>
                <tr className="clickable-row" $
                //   className="clickable-row"
                  onClick={() => handleConditionalClick('AnotB', 'A', {
                    formula: "P(B'|A) = P(A ∩ B') / P(A)",
                    substitution: `P(B'|A) = ${pAAndNotB.toFixed(4)} / ${pA.toFixed(4)}`,
                    result: `P(B'|A) = ${(1 - pBGivenA).toFixed(4)}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'AnotB' && highlightedMarginal === 'A' ? '#f59e0b15' : 'transparent',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'AnotB' && highlightedMarginal === 'A')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'AnotB' && highlightedMarginal === 'A')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(B'|A) = P(A∩B') / P(A) = {pAAndNotB.toFixed(2)} / {pA.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {(1 - pBGivenA).toFixed(4)}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>Total</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '13px' }}>
                    1.0000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Given A' */}
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on A'</h3>
            <div style={{ background: '#dbeafe', padding: '6px 12px', borderRadius: '4px', marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600' }}>Click rows to highlight paths</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px", flexGrow: 1 }} className="conditional-table">
              <tbody>
                <tr className="clickable-row" $
                  onClick={() => handleConditionalClick('notAB', 'notA', {
                    formula: "P(B|A') = P(A' ∩ B) / P(A')",
                    substitution: `P(B|A') = ${pNotAAndB.toFixed(4)} / ${pNotA.toFixed(4)}`,
                    result: `P(B|A') = ${pBGivenNotA.toFixed(4)}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'notAB' && highlightedMarginal === 'notA' ? '#8b5cf615' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'notAB' && highlightedMarginal === 'notA')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'notAB' && highlightedMarginal === 'notA')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(B|A') = P(A'∩B) / P(A') = {pNotAAndB.toFixed(2)} / {pNotA.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {pBGivenNotA.toFixed(4)}
                  </td>
                </tr>
                <tr className="clickable-row" $
                  onClick={() => handleConditionalClick('notAnotB', 'notA', {
                    formula: "P(B'|A') = P(A' ∩ B') / P(A')",
                    substitution: `P(B'|A') = ${pNotAAndNotB.toFixed(4)} / ${pNotA.toFixed(4)}`,
                    result: `P(B'|A') = ${(1 - pBGivenNotA).toFixed(4)}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'notAnotB' && highlightedMarginal === 'notA' ? '#ef444415' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'notAnotB' && highlightedMarginal === 'notA')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'notAnotB' && highlightedMarginal === 'notA')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(B'|A') = P(A'∩B') / P(A') = {pNotAAndNotB.toFixed(2)} / {pNotA.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {(1 - pBGivenNotA).toFixed(4)}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>Total</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '13px' }}>
                    1.0000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Given B */}
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on B</h3>
            <div style={{ background: '#dbeafe', padding: '6px 12px', borderRadius: '4px', marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600' }}>Click rows to highlight paths</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px", flexGrow: 1 }} className="conditional-table">
              <tbody>
                <tr className="clickable-row" $
                  onClick={() => handleConditionalClick('AB', 'B', {
                    formula: 'P(A|B) = P(A ∩ B) / P(B)',
                    substitution: `P(A|B) = ${pAAndB.toFixed(4)} / ${pB.toFixed(4)}`,
                    result: `P(A|B) = ${pB > 0 ? (pAAndB / pB).toFixed(4) : 'undefined'}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'AB' && highlightedMarginal === 'B' ? '#10b98115' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'AB' && highlightedMarginal === 'B')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'AB' && highlightedMarginal === 'B')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(A|B) = P(A∩B) / P(B) = {pAAndB.toFixed(2)} / {pB.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {pB > 0 ? (pAAndB / pB).toFixed(4) : 'undefined'}
                  </td>
                </tr>
                <tr className="clickable-row" $
                  onClick={() => handleConditionalClick('notAB', 'B', {
                    formula: "P(A'|B) = P(A' ∩ B) / P(B)",
                    substitution: `P(A'|B) = ${pNotAAndB.toFixed(4)} / ${pB.toFixed(4)}`,
                    result: `P(A'|B) = ${pB > 0 ? (pNotAAndB / pB).toFixed(4) : 'undefined'}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'notAB' && highlightedMarginal === 'B' ? '#8b5cf615' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'notAB' && highlightedMarginal === 'B')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'notAB' && highlightedMarginal === 'B')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(A'|B) = P(A'∩B) / P(B) = {pNotAAndB.toFixed(2)} / {pB.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {pB > 0 ? (pNotAAndB / pB).toFixed(4) : 'undefined'}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>Total</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '13px' }}>
                    1.0000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Given B' */}
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on B'</h3>
            <div style={{ background: '#dbeafe', padding: '6px 12px', borderRadius: '4px', marginBottom: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '13px', color: '#1e40af', fontWeight: '600' }}>Click rows to highlight paths</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px", flexGrow: 1 }} className="conditional-table">
              <tbody>
                <tr className="clickable-row" $
                  onClick={() => handleConditionalClick('AnotB', 'notB', {
                    formula: "P(A|B') = P(A ∩ B') / P(B')",
                    substitution: `P(A|B') = ${pAAndNotB.toFixed(4)} / ${pNotB.toFixed(4)}`,
                    result: `P(A|B') = ${pNotB > 0 ? (pAAndNotB / pNotB).toFixed(4) : 'undefined'}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'AnotB' && highlightedMarginal === 'notB' ? '#f59e0b15' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'AnotB' && highlightedMarginal === 'notB')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'AnotB' && highlightedMarginal === 'notB')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(A|B') = P(A∩B') / P(B') = {pAAndNotB.toFixed(2)} / {pNotB.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {pNotB > 0 ? (pAAndNotB / pNotB).toFixed(4) : 'undefined'}
                  </td>
                </tr>
                <tr className="clickable-row" $
                  onClick={() => handleConditionalClick('notAnotB', 'notB', {
                    formula: "P(A'|B') = P(A' ∩ B') / P(B')",
                    substitution: `P(A'|B') = ${pNotAAndNotB.toFixed(4)} / ${pNotB.toFixed(4)}`,
                    result: `P(A'|B') = ${pNotB > 0 ? (pNotAAndNotB / pNotB).toFixed(4) : 'undefined'}`
                  })}
                  style={{ 
                    cursor: 'pointer', 
                    transition: 'all 0.2s',
                    background: highlightedCell === 'notAnotB' && highlightedMarginal === 'notB' ? '#ef444415' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!(highlightedCell === 'notAnotB' && highlightedMarginal === 'notB')) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!(highlightedCell === 'notAnotB' && highlightedMarginal === 'notB')) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>P(A'|B') = P(A'∩B') / P(B') = {pNotAAndNotB.toFixed(2)} / {pNotB.toFixed(2)}</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13px' }}>
                    {pNotB > 0 ? (pNotAAndNotB / pNotB).toFixed(4) : 'undefined'}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '13px' }}>Total</td>
                  <td style={{ padding: '10px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '13px' }}>
                    1.0000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px', color: '#1e40af' }}>
        <strong>How to read:</strong> The main table shows joint probabilities P(A∩B) in each cell. Row and column totals show marginal probabilities. The four tables on the right show all conditional probability distributions with their calculations. Click any conditional probability to highlight the corresponding cells in the main table.
      </div>
    </div>
  );
}