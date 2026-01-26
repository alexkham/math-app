'use client';

import React, { useState } from 'react';
import defaultExplanations from './2x4explanations.js';

export default function ConditionalProbabilityTable2x4({ explanations = null }) {
  const [activeTab, setActiveTab] = useState('explanations');
  
  const pA = 0.6;
  const pB1GivenA = 0.3;
  const pB2GivenA = 0.25;
  const pB3GivenA = 0.25;
  const pB1GivenNotA = 0.2;
  const pB2GivenNotA = 0.35;
  const pB3GivenNotA = 0.25;
  
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [highlightedMarginal, setHighlightedMarginal] = useState(null);
  
  const [accordionStates, setAccordionStates] = useState({
    condA: false,
    condNotA: false,
    condB1: false,
    condB2: false,
    condB3: false,
    condB4: false
  });

  const pNotA = 1 - pA;
  const pB4GivenA = 1 - pB1GivenA - pB2GivenA - pB3GivenA;
  const pB4GivenNotA = 1 - pB1GivenNotA - pB2GivenNotA - pB3GivenNotA;
  
  const pAAndB1 = pA * pB1GivenA;
  const pAAndB2 = pA * pB2GivenA;
  const pAAndB3 = pA * pB3GivenA;
  const pAAndB4 = pA * pB4GivenA;
  const pNotAAndB1 = pNotA * pB1GivenNotA;
  const pNotAAndB2 = pNotA * pB2GivenNotA;
  const pNotAAndB3 = pNotA * pB3GivenNotA;
  const pNotAAndB4 = pNotA * pB4GivenNotA;
  
  const pB1 = pAAndB1 + pNotAAndB1;
  const pB2 = pAAndB2 + pNotAAndB2;
  const pB3 = pAAndB3 + pNotAAndB3;
  const pB4 = pAAndB4 + pNotAAndB4;

  const cellColors = {
    'AB1': '#10b981',
    'AB2': '#f59e0b',
    'AB3': '#8b5cf6',
    'AB4': '#06b6d4',
    'notAB1': '#ef4444',
    'notAB2': '#ec4899',
    'notAB3': '#84cc16',
    'notAB4': '#f97316'
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
      padding: '18px',
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

  const getHeaderStyle = () => ({
    padding: '15px',
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
          padding: '8px 10px', 
          borderRadius: '4px', 
          marginBottom: isOpen ? '8px' : '10px', 
          textAlign: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
        <span style={{ fontSize: '12px', color: '#1e40af', fontWeight: '600' }}>
          {isOpen ? '▼' : '▶'} Row Explanations
        </span>
      </div>
      {isOpen && (
        <div style={{ 
          background: '#f0f9ff', 
          padding: '10px', 
          borderRadius: '4px', 
          marginBottom: '10px',
          fontSize: '11px',
          color: '#1e40af',
          lineHeight: '1.6'
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
        .conditional-table { border-spacing: 0 8px; }
      `}</style>
      
      <p style={{ color: '#666', marginBottom: '30px' }}>
        2×4 contingency table showing joint, marginal, and conditional probabilities.
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
                  <th style={getHeaderStyle()}>B₄</th>
                  <th style={getHeaderStyle()}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={getHeaderStyle()}>A</td>
                  <td style={getCellStyle('AB1')} onClick={() => handleCellClick('AB1')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pAAndB1.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A ∩ B₁)</div>
                  </td>
                  <td style={getCellStyle('AB2')} onClick={() => handleCellClick('AB2')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pAAndB2.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A ∩ B₂)</div>
                  </td>
                  <td style={getCellStyle('AB3')} onClick={() => handleCellClick('AB3')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pAAndB3.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A ∩ B₃)</div>
                  </td>
                  <td style={getCellStyle('AB4')} onClick={() => handleCellClick('AB4')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pAAndB4.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A ∩ B₄)</div>
                  </td>
                  <td style={getMarginalStyle('A')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '3px' }}>{pA.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A)</div>
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle()}>A<sup>c</sup></td>
                  <td style={getCellStyle('notAB1')} onClick={() => handleCellClick('notAB1')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pNotAAndB1.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A<sup>c</sup> ∩ B₁)</div>
                  </td>
                  <td style={getCellStyle('notAB2')} onClick={() => handleCellClick('notAB2')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pNotAAndB2.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A<sup>c</sup> ∩ B₂)</div>
                  </td>
                  <td style={getCellStyle('notAB3')} onClick={() => handleCellClick('notAB3')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pNotAAndB3.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A<sup>c</sup> ∩ B₃)</div>
                  </td>
                  <td style={getCellStyle('notAB4')} onClick={() => handleCellClick('notAB4')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pNotAAndB4.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A<sup>c</sup> ∩ B₄)</div>
                  </td>
                  <td style={getMarginalStyle('notA')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '3px' }}>{pNotA.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(A<sup>c</sup>)</div>
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle()}>Total</td>
                  <td style={getMarginalStyle('B1')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '3px' }}>{pB1.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(B₁)</div>
                  </td>
                  <td style={getMarginalStyle('B2')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '3px' }}>{pB2.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(B₂)</div>
                  </td>
                  <td style={getMarginalStyle('B3')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '3px' }}>{pB3.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(B₃)</div>
                  </td>
                  <td style={getMarginalStyle('B4')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '3px' }}>{pB4.toFixed(4)}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>P(B₄)</div>
                  </td>
                  <td style={{ ...getHeaderStyle(), fontSize: '16px', fontWeight: 'bold' }}>1.0000</td>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on A</h3>
              <Accordion isOpen={accordionStates.condA} onToggle={() => toggleAccordion('condA')}>
                <div>P(B₁|A) - Probability of B₁ conditional on A</div>
                <div>P(B₂|A) - Probability of B₂ conditional on A</div>
                <div>P(B₃|A) - Probability of B₃ conditional on A</div>
                <div>P(B₄|A) - Probability of B₄ conditional on A</div>
              </Accordion>
              <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px", flexGrow: 1 }} className="conditional-table">
                <tbody>
                  {[
                    ['AB1', 'A', pB1GivenA, 'P(B₁|A)', 'P(A ∩ B₁) / P(A)', pAAndB1, pA],
                    ['AB2', 'A', pB2GivenA, 'P(B₂|A)', 'P(A ∩ B₂) / P(A)', pAAndB2, pA],
                    ['AB3', 'A', pB3GivenA, 'P(B₃|A)', 'P(A ∩ B₃) / P(A)', pAAndB3, pA],
                    ['AB4', 'A', pB4GivenA, 'P(B₄|A)', 'P(A ∩ B₄) / P(A)', pAAndB4, pA]
                  ].map(([cell, marg, val, lbl, formula, numerator, denominator]) => (
                    <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, marg)}
                      style={{ cursor: 'pointer', transition: 'all 0.2s', background: highlightedCell === cell && highlightedMarginal === marg ? `${cellColors[cell]}15` : 'transparent' }}
                      onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = '#f8fafc'; }}
                      onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = 'transparent'; }}>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontSize: '11px' }}>
                        <div style={{ marginBottom: '2px', fontWeight: 'bold' }}>
                          {lbl} = {formula}
                        </div>
                        <div style={{ color: '#64748b', fontSize: '10px' }}>
                          = {numerator.toFixed(4)} / {denominator.toFixed(4)}
                        </div>
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>{val.toFixed(4)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '12px' }}>Total</td>
                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>1.0000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on A<sup>c</sup></h3>
              <Accordion isOpen={accordionStates.condNotA} onToggle={() => toggleAccordion('condNotA')}>
                <div dangerouslySetInnerHTML={{ __html: 'P(B₁|A<sup>c</sup>) - Probability of B₁ conditional on A<sup>c</sup>' }}></div>
                <div dangerouslySetInnerHTML={{ __html: 'P(B₂|A<sup>c</sup>) - Probability of B₂ conditional on A<sup>c</sup>' }}></div>
                <div dangerouslySetInnerHTML={{ __html: 'P(B₃|A<sup>c</sup>) - Probability of B₃ conditional on A<sup>c</sup>' }}></div>
                <div dangerouslySetInnerHTML={{ __html: 'P(B₄|A<sup>c</sup>) - Probability of B₄ conditional on A<sup>c</sup>' }}></div>
              </Accordion>
              <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px", flexGrow: 1 }} className="conditional-table">
                <tbody>
                  {[
                    ['notAB1', 'notA', pB1GivenNotA, 'P(B₁|A<sup>c</sup>)', 'P(A<sup>c</sup> ∩ B₁) / P(A<sup>c</sup>)', pNotAAndB1, pNotA],
                    ['notAB2', 'notA', pB2GivenNotA, 'P(B₂|A<sup>c</sup>)', 'P(A<sup>c</sup> ∩ B₂) / P(A<sup>c</sup>)', pNotAAndB2, pNotA],
                    ['notAB3', 'notA', pB3GivenNotA, 'P(B₃|A<sup>c</sup>)', 'P(A<sup>c</sup> ∩ B₃) / P(A<sup>c</sup>)', pNotAAndB3, pNotA],
                    ['notAB4', 'notA', pB4GivenNotA, 'P(B₄|A<sup>c</sup>)', 'P(A<sup>c</sup> ∩ B₄) / P(A<sup>c</sup>)', pNotAAndB4, pNotA]
                  ].map(([cell, marg, val, lbl, formula, numerator, denominator]) => (
                    <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, marg)}
                      style={{ cursor: 'pointer', transition: 'all 0.2s', background: highlightedCell === cell && highlightedMarginal === marg ? `${cellColors[cell]}15` : 'transparent' }}
                      onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = '#f8fafc'; }}
                      onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = 'transparent'; }}>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontSize: '11px' }}>
                        <div style={{ marginBottom: '2px', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: lbl + ' = ' + formula }}></div>
                        <div style={{ color: '#64748b', fontSize: '10px' }}>
                          = {numerator.toFixed(4)} / {denominator.toFixed(4)}
                        </div>
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>{val.toFixed(4)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '12px' }}>Total</td>
                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>1.0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px' }}>
            {[
              ['B1', 'B₁', 'condB1', [
                ['AB1', pB1 > 0 ? pAAndB1 / pB1 : 0, 'P(A|B₁)', 'P(A ∩ B₁) / P(B₁)', pAAndB1, pB1],
                ['notAB1', pB1 > 0 ? pNotAAndB1 / pB1 : 0, 'P(A<sup>c</sup>|B₁)', 'P(A<sup>c</sup> ∩ B₁) / P(B₁)', pNotAAndB1, pB1]
              ]],
              ['B2', 'B₂', 'condB2', [
                ['AB2', pB2 > 0 ? pAAndB2 / pB2 : 0, 'P(A|B₂)', 'P(A ∩ B₂) / P(B₂)', pAAndB2, pB2],
                ['notAB2', pB2 > 0 ? pNotAAndB2 / pB2 : 0, 'P(A<sup>c</sup>|B₂)', 'P(A<sup>c</sup> ∩ B₂) / P(B₂)', pNotAAndB2, pB2]
              ]],
              ['B3', 'B₃', 'condB3', [
                ['AB3', pB3 > 0 ? pAAndB3 / pB3 : 0, 'P(A|B₃)', 'P(A ∩ B₃) / P(B₃)', pAAndB3, pB3],
                ['notAB3', pB3 > 0 ? pNotAAndB3 / pB3 : 0, 'P(A<sup>c</sup>|B₃)', 'P(A<sup>c</sup> ∩ B₃) / P(B₃)', pNotAAndB3, pB3]
              ]],
              ['B4', 'B₄', 'condB4', [
                ['AB4', pB4 > 0 ? pAAndB4 / pB4 : 0, 'P(A|B₄)', 'P(A ∩ B₄) / P(B₄)', pAAndB4, pB4],
                ['notAB4', pB4 > 0 ? pNotAAndB4 / pB4 : 0, 'P(A<sup>c</sup>|B₄)', 'P(A<sup>c</sup> ∩ B₄) / P(B₄)', pNotAAndB4, pB4]
              ]]
            ].map(([key, title, accordionKey, cells]) => (
              <div key={key} style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '12px' }}>
                <h3 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '6px', textAlign: 'center' }}>Conditional on {title}</h3>
                <Accordion isOpen={accordionStates[accordionKey]} onToggle={() => toggleAccordion(accordionKey)}>
                  {cells.map(([cell, val, lbl]) => (
                    <div key={cell} dangerouslySetInnerHTML={{ __html: lbl + ' - Probability conditional on ' + title }}></div>
                  ))}
                </Accordion>
                <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 5px" }} className="conditional-table">
                  <tbody>
                    {cells.map(([cell, val, lbl, formula, numerator, denominator]) => (
                      <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, key)}
                        style={{ cursor: 'pointer', background: highlightedCell === cell && highlightedMarginal === key ? `${cellColors[cell]}15` : 'transparent' }}
                        onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = '#f8fafc'; }}
                        onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = 'transparent'; }}>
                        <td style={{ padding: '7px', border: '1px solid #e2e8f0', fontSize: '10px' }}>
                          <div style={{ marginBottom: '2px', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: lbl + ' = ' + formula }}></div>
                          <div style={{ color: '#64748b', fontSize: '9px' }}>
                            = {numerator.toFixed(4)} / {denominator.toFixed(4)}
                          </div>
                        </td>
                        <td style={{ padding: '7px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '11px', fontWeight: 'bold' }}>{val.toFixed(4)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ padding: '7px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '11px' }}>Total</td>
                      <td style={{ padding: '7px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '11px' }}>1.0000</td>
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