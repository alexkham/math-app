'use client';

import React, { useState } from 'react';
import defaultExplanations from './3x3explanations.js';

export default function ConditionalProbabilityTable3x3({ explanations = null }) {
  const [activeTab, setActiveTab] = useState('explanations');
  
  const pA1 = 0.3;
  const pA2 = 0.4;
  const pB1GivenA1 = 0.4;
  const pB2GivenA1 = 0.35;
  const pB1GivenA2 = 0.3;
  const pB2GivenA2 = 0.4;
  const pB1GivenA3 = 0.35;
  const pB2GivenA3 = 0.3;
  
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [highlightedMarginal, setHighlightedMarginal] = useState(null);
  
  const [accordionStates, setAccordionStates] = useState({
    condA1: false,
    condA2: false,
    condA3: false,
    condB1: false,
    condB2: false,
    condB3: false
  });

  const pA3 = 1 - pA1 - pA2;
  const pB3GivenA1 = 1 - pB1GivenA1 - pB2GivenA1;
  const pB3GivenA2 = 1 - pB1GivenA2 - pB2GivenA2;
  const pB3GivenA3 = 1 - pB1GivenA3 - pB2GivenA3;
  
  const pA1B1 = pA1 * pB1GivenA1;
  const pA1B2 = pA1 * pB2GivenA1;
  const pA1B3 = pA1 * pB3GivenA1;
  const pA2B1 = pA2 * pB1GivenA2;
  const pA2B2 = pA2 * pB2GivenA2;
  const pA2B3 = pA2 * pB3GivenA2;
  const pA3B1 = pA3 * pB1GivenA3;
  const pA3B2 = pA3 * pB2GivenA3;
  const pA3B3 = pA3 * pB3GivenA3;
  
  const pB1 = pA1B1 + pA2B1 + pA3B1;
  const pB2 = pA1B2 + pA2B2 + pA3B2;
  const pB3 = pA1B3 + pA2B3 + pA3B3;

  const cellColors = {
    'A1B1': '#10b981',
    'A1B2': '#f59e0b',
    'A1B3': '#8b5cf6',
    'A2B1': '#ef4444',
    'A2B2': '#06b6d4',
    'A2B3': '#ec4899',
    'A3B1': '#84cc16',
    'A3B2': '#f97316',
    'A3B3': '#6366f1'
  };

  const explanationsToUse = explanations || defaultExplanations;

  const getExplanationKey = () => {
    if (!highlightedCell) return 'default';
    if (highlightedMarginal) return `${highlightedCell}-${highlightedMarginal}`;
    return highlightedCell;
  };

  const currentExplanation = explanationsToUse[getExplanationKey()] || explanationsToUse['default'];

  const toggleAccordion = (key) => {
    setAccordionStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleConditionalClick = (cell, marginal) => {
    if (highlightedCell === cell && highlightedMarginal === marginal) {
      setHighlightedCell(null);
      setHighlightedMarginal(null);
    } else {
      setHighlightedCell(cell);
      setHighlightedMarginal(marginal);
    }
  };

  const handleCellClick = (cell) => {
    if (highlightedCell === cell && !highlightedMarginal) {
      setHighlightedCell(null);
    } else {
      setHighlightedCell(cell);
      setHighlightedMarginal(null);
    }
  };

  const getCellStyle = (cellKey) => {
    const baseStyle = {
      padding: '16px',
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
      padding: '12px',
      fontWeight: 'bold',
      background: '#f8fafc',
      border: '2px solid #e2e8f0',
      textAlign: 'center',
      fontSize: '14px'
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

  const getHeaderStyle = () => ({
    padding: '12px',
    fontWeight: 'bold',
    background: '#f8fafc',
    border: '2px solid #e2e8f0',
    textAlign: 'center'
  });

  const controlsExplanation = (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', color: '#1e293b' }}>
        How to Use This Table
      </h3>
      <p style={{ marginBottom: '10px' }}>
        <strong>Main Table (left):</strong> Click any cell to highlight it and see its joint probability. Click marginal totals to highlight related conditional probabilities.
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Conditional Panels (right):</strong> Click any row to highlight the corresponding cell in the main table and its marginal probability. This shows the relationship between joint and conditional probabilities.
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Accordions:</strong> Expand the "Row Explanations" sections to see what each conditional probability represents.
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Clear Selection:</strong> Use the red button at the bottom to reset all highlights.
      </p>
    </div>
  );

  const Accordion = ({ isOpen, onToggle, children }) => (
    <div>
      <div 
        onClick={onToggle}
        style={{ 
          background: '#dbeafe', 
          padding: '6px 8px', 
          borderRadius: '4px', 
          marginBottom: isOpen ? '6px' : '8px', 
          textAlign: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px'
        }}>
        <span style={{ fontSize: '11px', color: '#1e40af', fontWeight: '600' }}>
          {isOpen ? '▼' : '▶'} Row Explanations
        </span>
      </div>
      {isOpen && (
        <div style={{ 
          background: '#f0f9ff', 
          padding: '8px', 
          borderRadius: '4px', 
          marginBottom: '8px',
          fontSize: '10px',
          color: '#1e40af',
          lineHeight: '1.5'
        }}>
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @keyframes borderPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          50% { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3); }
        }
        .clickable-row { animation: borderPulse 3s ease-in-out infinite; }
        .clickable-row:hover { animation: none; }
        .conditional-table { border-spacing: 0 6px; }
      `}</style>
      
      <p style={{ color: '#666', marginBottom: '30px' }}>
        3×3 contingency table showing joint, marginal, and conditional probabilities.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px', marginBottom: '30px' }}>
        <div>
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Joint Probability Table</h2>
            
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={getHeaderStyle()}></th>
                  <th style={getHeaderStyle()}>B₁</th>
                  <th style={getHeaderStyle()}>B₂</th>
                  <th style={getHeaderStyle()}>B₃</th>
                  <th style={getHeaderStyle()}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={getHeaderStyle()}>A₁</td>
                  <td style={getCellStyle('A1B1')} onClick={() => handleCellClick('A1B1')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA1B1.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₁ ∩ B₁)</div>
                  </td>
                  <td style={getCellStyle('A1B2')} onClick={() => handleCellClick('A1B2')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA1B2.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₁ ∩ B₂)</div>
                  </td>
                  <td style={getCellStyle('A1B3')} onClick={() => handleCellClick('A1B3')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA1B3.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₁ ∩ B₃)</div>
                  </td>
                  <td style={getMarginalStyle('A1')}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>{pA1.toFixed(4)}</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>P(A₁)</div>
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle()}>A₂</td>
                  <td style={getCellStyle('A2B1')} onClick={() => handleCellClick('A2B1')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA2B1.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₂ ∩ B₁)</div>
                  </td>
                  <td style={getCellStyle('A2B2')} onClick={() => handleCellClick('A2B2')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA2B2.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₂ ∩ B₂)</div>
                  </td>
                  <td style={getCellStyle('A2B3')} onClick={() => handleCellClick('A2B3')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA2B3.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₂ ∩ B₃)</div>
                  </td>
                  <td style={getMarginalStyle('A2')}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>{pA2.toFixed(4)}</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>P(A₂)</div>
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle()}>A₃</td>
                  <td style={getCellStyle('A3B1')} onClick={() => handleCellClick('A3B1')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA3B1.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₃ ∩ B₁)</div>
                  </td>
                  <td style={getCellStyle('A3B2')} onClick={() => handleCellClick('A3B2')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA3B2.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₃ ∩ B₂)</div>
                  </td>
                  <td style={getCellStyle('A3B3')} onClick={() => handleCellClick('A3B3')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' }}>{pA3B3.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A₃ ∩ B₃)</div>
                  </td>
                  <td style={getMarginalStyle('A3')}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>{pA3.toFixed(4)}</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>P(A₃)</div>
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle()}>Total</td>
                  <td style={getMarginalStyle('B1')}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>{pB1.toFixed(4)}</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>P(B₁)</div>
                  </td>
                  <td style={getMarginalStyle('B2')}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>{pB2.toFixed(4)}</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>P(B₂)</div>
                  </td>
                  <td style={getMarginalStyle('B3')}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '2px' }}>{pB3.toFixed(4)}</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>P(B₃)</div>
                  </td>
                  <td style={{ ...getHeaderStyle(), fontSize: '14px', fontWeight: 'bold' }}>1.0000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0' }}>
              <button onClick={() => setActiveTab('explanations')}
                style={{ flex: 1, padding: '12px', background: activeTab === 'explanations' ? 'white' : '#f8fafc', border: 'none', borderBottom: activeTab === 'explanations' ? '3px solid #3b82f6' : 'none', fontWeight: activeTab === 'explanations' ? 'bold' : 'normal', cursor: 'pointer', fontSize: '14px' }}>
                Explanations
              </button>
              <button onClick={() => setActiveTab('controls')}
                style={{ flex: 1, padding: '12px', background: activeTab === 'controls' ? 'white' : '#f8fafc', border: 'none', borderBottom: activeTab === 'controls' ? '3px solid #3b82f6' : 'none', fontWeight: activeTab === 'controls' ? 'bold' : 'normal', cursor: 'pointer', fontSize: '14px' }}>
                Controls
              </button>
            </div>

            <div style={{ padding: '20px', background: 'white', minHeight: '200px' }}>
              {activeTab === 'explanations' && (
                <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
                  {currentExplanation}
                </div>
              )}
              {activeTab === 'controls' && controlsExplanation}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {[
              ['A1', 'A₁', 'condA1', [
                ['A1B1', pB1GivenA1, 'P(B₁|A₁)', 'P(A₁ ∩ B₁) / P(A₁)', pA1B1, pA1],
                ['A1B2', pB2GivenA1, 'P(B₂|A₁)', 'P(A₁ ∩ B₂) / P(A₁)', pA1B2, pA1],
                ['A1B3', pB3GivenA1, 'P(B₃|A₁)', 'P(A₁ ∩ B₃) / P(A₁)', pA1B3, pA1]
              ]],
              ['A2', 'A₂', 'condA2', [
                ['A2B1', pB1GivenA2, 'P(B₁|A₂)', 'P(A₂ ∩ B₁) / P(A₂)', pA2B1, pA2],
                ['A2B2', pB2GivenA2, 'P(B₂|A₂)', 'P(A₂ ∩ B₂) / P(A₂)', pA2B2, pA2],
                ['A2B3', pB3GivenA2, 'P(B₃|A₂)', 'P(A₂ ∩ B₃) / P(A₂)', pA2B3, pA2]
              ]],
              ['A3', 'A₃', 'condA3', [
                ['A3B1', pB1GivenA3, 'P(B₁|A₃)', 'P(A₃ ∩ B₁) / P(A₃)', pA3B1, pA3],
                ['A3B2', pB2GivenA3, 'P(B₂|A₃)', 'P(A₃ ∩ B₂) / P(A₃)', pA3B2, pA3],
                ['A3B3', pB3GivenA3, 'P(B₃|A₃)', 'P(A₃ ∩ B₃) / P(A₃)', pA3B3, pA3]
              ]]
            ].map(([key, title, accordionKey, cells]) => (
              <div key={key} style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '6px', textAlign: 'center' }}>Conditional on {title}</h3>
                <Accordion isOpen={accordionStates[accordionKey]} onToggle={() => toggleAccordion(accordionKey)}>
                  {cells.map(([cell, val, lbl]) => (
                    <div key={cell}>{lbl} - Probability conditional on {title}</div>
                  ))}
                </Accordion>
                <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 4px", flexGrow: 1 }} className="conditional-table">
                  <tbody>
                    {cells.map(([cell, val, lbl, formula, numerator, denominator]) => (
                      <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, key)}
                        style={{ cursor: 'pointer', transition: 'all 0.2s', background: highlightedCell === cell && highlightedMarginal === key ? `${cellColors[cell]}15` : 'transparent' }}
                        onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = '#f8fafc'; }}
                        onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = 'transparent'; }}>
                        <td style={{ padding: '6px', border: '1px solid #e2e8f0', fontSize: '10px' }}>
                          <div style={{ marginBottom: '2px', fontWeight: 'bold' }}>
                            {lbl} = {formula}
                          </div>
                          <div style={{ color: '#64748b', fontSize: '9px' }}>
                            = {numerator.toFixed(4)} / {denominator.toFixed(4)}
                          </div>
                        </td>
                        <td style={{ padding: '6px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '11px', fontWeight: 'bold' }}>{val.toFixed(4)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ padding: '6px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '11px' }}>Total</td>
                      <td style={{ padding: '6px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '11px' }}>1.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {[
              ['B1', 'B₁', 'condB1', [
                ['A1B1', pB1 > 0 ? pA1B1 / pB1 : 0, 'P(A₁|B₁)', 'P(A₁ ∩ B₁) / P(B₁)', pA1B1, pB1],
                ['A2B1', pB1 > 0 ? pA2B1 / pB1 : 0, 'P(A₂|B₁)', 'P(A₂ ∩ B₁) / P(B₁)', pA2B1, pB1],
                ['A3B1', pB1 > 0 ? pA3B1 / pB1 : 0, 'P(A₃|B₁)', 'P(A₃ ∩ B₁) / P(B₁)', pA3B1, pB1]
              ]],
              ['B2', 'B₂', 'condB2', [
                ['A1B2', pB2 > 0 ? pA1B2 / pB2 : 0, 'P(A₁|B₂)', 'P(A₁ ∩ B₂) / P(B₂)', pA1B2, pB2],
                ['A2B2', pB2 > 0 ? pA2B2 / pB2 : 0, 'P(A₂|B₂)', 'P(A₂ ∩ B₂) / P(B₂)', pA2B2, pB2],
                ['A3B2', pB2 > 0 ? pA3B2 / pB2 : 0, 'P(A₃|B₂)', 'P(A₃ ∩ B₂) / P(B₂)', pA3B2, pB2]
              ]],
              ['B3', 'B₃', 'condB3', [
                ['A1B3', pB3 > 0 ? pA1B3 / pB3 : 0, 'P(A₁|B₃)', 'P(A₁ ∩ B₃) / P(B₃)', pA1B3, pB3],
                ['A2B3', pB3 > 0 ? pA2B3 / pB3 : 0, 'P(A₂|B₃)', 'P(A₂ ∩ B₃) / P(B₃)', pA2B3, pB3],
                ['A3B3', pB3 > 0 ? pA3B3 / pB3 : 0, 'P(A₃|B₃)', 'P(A₃ ∩ B₃) / P(B₃)', pA3B3, pB3]
              ]]
            ].map(([key, title, accordionKey, cells]) => (
              <div key={key} style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '12px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '6px', textAlign: 'center' }}>Conditional on {title}</h3>
                <Accordion isOpen={accordionStates[accordionKey]} onToggle={() => toggleAccordion(accordionKey)}>
                  {cells.map(([cell, val, lbl]) => (
                    <div key={cell}>{lbl} - Probability conditional on {title}</div>
                  ))}
                </Accordion>
                <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 4px" }} className="conditional-table">
                  <tbody>
                    {cells.map(([cell, val, lbl, formula, numerator, denominator]) => (
                      <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, key)}
                        style={{ cursor: 'pointer', background: highlightedCell === cell && highlightedMarginal === key ? `${cellColors[cell]}15` : 'transparent' }}
                        onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = '#f8fafc'; }}
                        onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = 'transparent'; }}>
                        <td style={{ padding: '6px', border: '1px solid #e2e8f0', fontSize: '10px' }}>
                          <div style={{ marginBottom: '2px', fontWeight: 'bold' }}>
                            {lbl} = {formula}
                          </div>
                          <div style={{ color: '#64748b', fontSize: '9px' }}>
                            = {numerator.toFixed(4)} / {denominator.toFixed(4)}
                          </div>
                        </td>
                        <td style={{ padding: '6px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '11px', fontWeight: 'bold' }}>{val.toFixed(4)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ padding: '6px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '11px' }}>Total</td>
                      <td style={{ padding: '6px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '11px' }}>1.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {(highlightedCell || highlightedMarginal) && (
            <button onClick={() => { setHighlightedCell(null); setHighlightedMarginal(null); }}
              style={{ padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
              Clear Selection
            </button>
          )}
        </div>
      </div>

      <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px', color: '#1e40af' }}>
        <strong>How to read:</strong> Cells show joint probabilities. Click conditional rows to highlight paths. The highlighted connections demonstrate Bayes' theorem in action: P(A|B) = P(A ∩ B) / P(B). Watch how the same joint probability appears in multiple conditional calculations depending on which event you condition on.
      </div>
    </div>
  );
}