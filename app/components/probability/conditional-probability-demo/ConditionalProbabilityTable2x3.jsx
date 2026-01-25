'use client';

import React, { useState } from 'react';

export default function ConditionalProbabilityTable2x3({ explanations = null }) {
  const [activeTab, setActiveTab] = useState('explanation');
  
  const defaults = {
    pA: 0.6,
    pB1GivenA: 0.5,
    pB2GivenA: 0.3,
    pB1GivenNotA: 0.3,
    pB2GivenNotA: 0.4
  };
  
  const [pA, setPA] = useState(defaults.pA);
  const [pB1GivenA, setPB1GivenA] = useState(defaults.pB1GivenA);
  const [pB2GivenA, setPB2GivenA] = useState(defaults.pB2GivenA);
  const [pB1GivenNotA, setPB1GivenNotA] = useState(defaults.pB1GivenNotA);
  const [pB2GivenNotA, setPB2GivenNotA] = useState(defaults.pB2GivenNotA);
  
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [highlightedMarginal, setHighlightedMarginal] = useState(null);
  const [editingCell, setEditingCell] = useState(null);

  const pNotA = 1 - pA;
  const pB3GivenA = 1 - pB1GivenA - pB2GivenA;
  const pB3GivenNotA = 1 - pB1GivenNotA - pB2GivenNotA;
  
  const pAAndB1 = pA * pB1GivenA;
  const pAAndB2 = pA * pB2GivenA;
  const pAAndB3 = pA * pB3GivenA;
  const pNotAAndB1 = pNotA * pB1GivenNotA;
  const pNotAAndB2 = pNotA * pB2GivenNotA;
  const pNotAAndB3 = pNotA * pB3GivenNotA;
  
  const pB1 = pAAndB1 + pNotAAndB1;
  const pB2 = pAAndB2 + pNotAAndB2;
  const pB3 = pAAndB3 + pNotAAndB3;

  const cellColors = {
    'AB1': '#10b981',
    'AB2': '#f59e0b',
    'AB3': '#8b5cf6',
    'notAB1': '#ef4444',
    'notAB2': '#06b6d4',
    'notAB3': '#ec4899'
  };

  const resetToDefaults = () => {
    setPA(defaults.pA);
    setPB1GivenA(defaults.pB1GivenA);
    setPB2GivenA(defaults.pB2GivenA);
    setPB1GivenNotA(defaults.pB1GivenNotA);
    setPB2GivenNotA(defaults.pB2GivenNotA);
    setHighlightedCell(null);
    setHighlightedMarginal(null);
    setEditingCell(null);
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
    if (editingCell) return;
    if (highlightedCell === cell && !highlightedMarginal) {
      setHighlightedCell(null);
    } else {
      setHighlightedCell(cell);
      setHighlightedMarginal(null);
    }
  };

  const getCellStyle = (cellKey, isEditable = false) => {
    const baseStyle = {
      padding: isEditable ? '15px' : '20px',
      textAlign: 'center',
      border: '2px solid #e2e8f0',
      cursor: isEditable ? 'pointer' : 'pointer',
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

  const getMarginalStyle = (marginalKey, isEditable = false) => {
    const baseStyle = {
      padding: '15px',
      fontWeight: 'bold',
      background: '#f8fafc',
      border: '2px solid #e2e8f0',
      textAlign: 'center',
      fontSize: '16px',
      cursor: isEditable ? 'pointer' : 'default'
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

  const handleInputChange = (setter, value) => {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0 && num <= 1) {
      setter(num);
    }
  };

  const renderEditableJointCell = (jointValue, conditionalValue, setter, cellKey, label) => {
    const isEditing = editingCell === cellKey;

    return (
      <div onClick={() => !isEditing && setEditingCell(cellKey)} style={{ cursor: 'pointer' }}>
        {isEditing ? (
          <div>
            <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '5px' }}>Edit conditional</div>
            <input
              type="number"
              step="0.01"
              value={conditionalValue}
              onChange={(e) => handleInputChange(setter, e.target.value)}
              onBlur={() => setEditingCell(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === 'Escape') setEditingCell(null);
              }}
              autoFocus
              style={{
                width: '90%',
                padding: '6px',
                border: '2px solid #3b82f6',
                borderRadius: '4px',
                fontSize: '16px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            />
          </div>
        ) : (
          <>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
              {jointValue.toFixed(4)}
            </div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              <span dangerouslySetInnerHTML={{ __html: label }} />
            </div>
          </>
        )}
      </div>
    );
  };

  const renderEditableMarginal = (value, setter, cellKey) => {
    const isEditing = editingCell === cellKey;

    return (
      <div onClick={() => !isEditing && setEditingCell(cellKey)} style={{ cursor: 'pointer' }}>
        {isEditing ? (
          <input
            type="number"
            step="0.01"
            value={value}
            onChange={(e) => handleInputChange(setter, e.target.value)}
            onBlur={() => setEditingCell(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Escape') setEditingCell(null);
            }}
            autoFocus
            style={{
              width: '80%',
              padding: '6px',
              border: '2px solid #3b82f6',
              borderRadius: '4px',
              fontSize: '16px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          />
        ) : (
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {value.toFixed(4)}
          </div>
        )}
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {value.toFixed(4)}
          </div>
      </div>
    );
  };

  const defaultExplanation = (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', color: '#1e293b' }}>
        2×3 Contingency Table
      </h3>
      <p style={{ marginBottom: '10px' }}>
        Two variables: A (binary) and B (three categories: B₁, B₂, B₃).
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Cells:</strong> Joint probabilities P(A ∩ Bᵢ). Click to edit conditional inputs.
      </p>
    </div>
  );

  const controlsExplanation = (
    <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', color: '#1e293b' }}>
        How to Use
      </h3>
      <p style={{ marginBottom: '10px' }}>
        Click cells to edit:
      </p>
      <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
        <li>P(A) - Total column, row A</li>
        <li>Conditional inputs P(Bᵢ|A), P(Bᵢ|A<sup>c</sup>) - table cells</li>
      </ul>
      <p>P(B₃|...) auto-calculated.</p>
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
        2×3 contingency table. Click cells to edit.
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
                  <td style={getHeaderStyle()}>A</td>
                  <td style={getCellStyle('AB1', true)}>
                    {renderEditableJointCell(pAAndB1, pB1GivenA, setPB1GivenA, 'editAB1', 'P(A ∩ B₁)')}
                  </td>
                  <td style={getCellStyle('AB2', true)}>
                    {renderEditableJointCell(pAAndB2, pB2GivenA, setPB2GivenA, 'editAB2', 'P(A ∩ B₂)')}
                  </td>
                  <td style={getCellStyle('AB3')} onClick={() => handleCellClick('AB3')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pAAndB3.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A ∩ B₃)</div>
                  </td>
                  <td style={getMarginalStyle('A', true)}>
                    {renderEditableMarginal(pA, setPA, 'editPA')}
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle()}>A<sup>c</sup></td>
                  <td style={getCellStyle('notAB1', true)}>
                    {renderEditableJointCell(pNotAAndB1, pB1GivenNotA, setPB1GivenNotA, 'editNotAB1', 'P(A<sup>c</sup> ∩ B₁)')}
                  </td>
                  <td style={getCellStyle('notAB2', true)}>
                    {renderEditableJointCell(pNotAAndB2, pB2GivenNotA, setPB2GivenNotA, 'editNotAB2', 'P(A<sup>c</sup> ∩ B₂)')}
                  </td>
                  <td style={getCellStyle('notAB3')} onClick={() => handleCellClick('notAB3')}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{pNotAAndB3.toFixed(4)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>P(A<sup>c</sup> ∩ B₃)</div>
                  </td>
                  <td style={getMarginalStyle('notA')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{pNotA.toFixed(4)}</div>
                  </td>
                </tr>
                <tr>
                  <td style={getHeaderStyle()}>Total</td>
                  <td style={getMarginalStyle('B1')}>{pB1.toFixed(4)}</td>
                  <td style={getMarginalStyle('B2')}>{pB2.toFixed(4)}</td>
                  <td style={getMarginalStyle('B3')}>{pB3.toFixed(4)}</td>
                  <td style={{ ...getHeaderStyle(), fontSize: '16px', fontWeight: 'bold' }}>1.0000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0' }}>
              <button onClick={() => setActiveTab('explanation')}
                style={{ flex: 1, padding: '12px', background: activeTab === 'explanation' ? 'white' : '#f8fafc', border: 'none', borderBottom: activeTab === 'explanation' ? '3px solid #3b82f6' : 'none', fontWeight: activeTab === 'explanation' ? 'bold' : 'normal', cursor: 'pointer', fontSize: '14px' }}>
                Explanation
              </button>
              <button onClick={() => setActiveTab('controls')}
                style={{ flex: 1, padding: '12px', background: activeTab === 'controls' ? 'white' : '#f8fafc', border: 'none', borderBottom: activeTab === 'controls' ? '3px solid #3b82f6' : 'none', fontWeight: activeTab === 'controls' ? 'bold' : 'normal', cursor: 'pointer', fontSize: '14px' }}>
                Controls
              </button>
            </div>

            <div style={{ padding: '20px', background: 'white', minHeight: '200px' }}>
              {activeTab === 'explanation' && (explanations || defaultExplanation)}
              {activeTab === 'controls' && controlsExplanation}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on A</h3>
              <div style={{ background: '#dbeafe', padding: '5px 10px', borderRadius: '4px', marginBottom: '10px', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#1e40af', fontWeight: '600' }}>Click rows</span>
              </div>
              <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px", flexGrow: 1 }} className="conditional-table">
                <tbody>
                  {[['AB1', 'A', pB1GivenA, 'P(B₁|A)'], ['AB2', 'A', pB2GivenA, 'P(B₂|A)'], ['AB3', 'A', pB3GivenA, 'P(B₃|A)']].map(([cell, marg, val, lbl]) => (
                    <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, marg)}
                      style={{ cursor: 'pointer', transition: 'all 0.2s', background: highlightedCell === cell && highlightedMarginal === marg ? `${cellColors[cell]}15` : 'transparent' }}
                      onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = '#f8fafc'; }}
                      onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = 'transparent'; }}>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '12px' }}>{lbl}</td>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '12px' }}>{val.toFixed(4)}</td>
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
              <div style={{ background: '#dbeafe', padding: '5px 10px', borderRadius: '4px', marginBottom: '10px', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#1e40af', fontWeight: '600' }}>Click rows</span>
              </div>
              <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px", flexGrow: 1 }} className="conditional-table">
                <tbody>
                  {[['notAB1', 'notA', pB1GivenNotA, 'P(B₁|A<sup>c</sup>)'], ['notAB2', 'notA', pB2GivenNotA, 'P(B₂|A<sup>c</sup>)'], ['notAB3', 'notA', pB3GivenNotA, 'P(B₃|A<sup>c</sup>)']].map(([cell, marg, val, lbl]) => (
                    <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, marg)}
                      style={{ cursor: 'pointer', transition: 'all 0.2s', background: highlightedCell === cell && highlightedMarginal === marg ? `${cellColors[cell]}15` : 'transparent' }}
                      onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = '#f8fafc'; }}
                      onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === marg)) e.currentTarget.style.background = 'transparent'; }}>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: lbl }}></td>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '12px' }}>{val.toFixed(4)}</td>
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            {[
              ['B1', 'B₁', [['AB1', pB1 > 0 ? pAAndB1 / pB1 : 0, 'P(A|B₁)'], ['notAB1', pB1 > 0 ? pNotAAndB1 / pB1 : 0, 'P(A<sup>c</sup>|B₁)']]],
              ['B2', 'B₂', [['AB2', pB2 > 0 ? pAAndB2 / pB2 : 0, 'P(A|B₂)'], ['notAB2', pB2 > 0 ? pNotAAndB2 / pB2 : 0, 'P(A<sup>c</sup>|B₂)']]],
              ['B3', 'B₃', [['AB3', pB3 > 0 ? pAAndB3 / pB3 : 0, 'P(A|B₃)'], ['notAB3', pB3 > 0 ? pNotAAndB3 / pB3 : 0, 'P(A<sup>c</sup>|B₃)']]]
            ].map(([key, title, cells]) => (
              <div key={key} style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Conditional on {title}</h3>
                <div style={{ background: '#dbeafe', padding: '5px 10px', borderRadius: '4px', marginBottom: '10px', textAlign: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#1e40af', fontWeight: '600' }}>Click rows</span>
                </div>
                <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 6px" }} className="conditional-table">
                  <tbody>
                    {cells.map(([cell, val, lbl]) => (
                      <tr key={cell} className="clickable-row" onClick={() => handleConditionalClick(cell, key)}
                        style={{ cursor: 'pointer', background: highlightedCell === cell && highlightedMarginal === key ? `${cellColors[cell]}15` : 'transparent' }}
                        onMouseEnter={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = '#f8fafc'; }}
                        onMouseLeave={(e) => { if (!(highlightedCell === cell && highlightedMarginal === key)) e.currentTarget.style.background = 'transparent'; }}>
                        <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '12px' }} dangerouslySetInnerHTML={{ __html: lbl }}></td>
                        <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '12px' }}>{val.toFixed(4)}</td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', fontSize: '12px' }}>Total</td>
                      <td style={{ padding: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>1.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={resetToDefaults}
              style={{ flex: 1, padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
              Reset to Defaults
            </button>
            
            {(highlightedCell || highlightedMarginal) && (
              <button onClick={() => { setHighlightedCell(null); setHighlightedMarginal(null); }}
                style={{ flex: 1, padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                Clear Selection
              </button>
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px', color: '#1e40af' }}>
        <strong>How to read:</strong> Cells show joints. Click to edit conditionals or P(A). Click conditional rows to highlight.
      </div>
    </div>
  );
}