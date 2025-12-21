import React, { useState } from 'react';
import { LineChart, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function GenericContinuousDistributionExplorer({ distribution }) {
  const [activeTab, setActiveTab] = useState('pdf');
  const [calcTab, setCalcTab] = useState('range');
  const [rangeA, setRangeA] = useState('');
  const [rangeB, setRangeB] = useState('');
  const [strictRangeA, setStrictRangeA] = useState('');
  const [strictRangeB, setStrictRangeB] = useState('');
  const [leftIncRangeA, setLeftIncRangeA] = useState('');
  const [leftIncRangeB, setLeftIncRangeB] = useState('');
  const [rightIncRangeA, setRightIncRangeA] = useState('');
  const [rightIncRangeB, setRightIncRangeB] = useState('');
  const [lessThanX, setLessThanX] = useState('');
  const [lessEqualX, setLessEqualX] = useState('');
  const [greaterThanX, setGreaterThanX] = useState('');
  const [greaterEqualX, setGreaterEqualX] = useState('');
  const [showFormulas, setShowFormulas] = useState(false);
  const [expandedProperty, setExpandedProperty] = useState(null);

  const calculateRangeProb = () => {
    const a = parseFloat(rangeA);
    const b = parseFloat(rangeB);
    if (!isNaN(a) && !isNaN(b) && a <= b) {
      return distribution.onCalculateRangeProbability(a, b);
    }
    return null;
  };

  const calculateStrictRangeProb = () => {
    const a = parseFloat(strictRangeA);
    const b = parseFloat(strictRangeB);
    if (!isNaN(a) && !isNaN(b) && a < b) {
      return distribution.onCalculateStrictRangeProbability(a, b);
    }
    return null;
  };

  const calculateLeftIncRangeProb = () => {
    const a = parseFloat(leftIncRangeA);
    const b = parseFloat(leftIncRangeB);
    if (!isNaN(a) && !isNaN(b) && a < b) {
      return distribution.onCalculateLeftIncRangeProbability(a, b);
    }
    return null;
  };

  const calculateRightIncRangeProb = () => {
    const a = parseFloat(rightIncRangeA);
    const b = parseFloat(rightIncRangeB);
    if (!isNaN(a) && !isNaN(b) && a < b) {
      return distribution.onCalculateRightIncRangeProbability(a, b);
    }
    return null;
  };

  const calculateLessThanProb = () => {
    const x = parseFloat(lessThanX);
    if (!isNaN(x)) {
      return distribution.onCalculateStrictLessProbability(x);
    }
    return null;
  };

  const calculateLessEqualProb = () => {
    const x = parseFloat(lessEqualX);
    if (!isNaN(x)) {
      return distribution.onCalculateCumulativeProbability(x);
    }
    return null;
  };

  const calculateGreaterThanProb = () => {
    const x = parseFloat(greaterThanX);
    if (!isNaN(x)) {
      return distribution.onCalculateStrictGreaterProbability(x);
    }
    return null;
  };

  const calculateGreaterEqualProb = () => {
    const x = parseFloat(greaterEqualX);
    if (!isNaN(x)) {
      return distribution.onCalculateGreaterEqualProbability(x);
    }
    return null;
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1800px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '5px',
        fontSize: '28px',
        margin: '0 0 5px 0'
      }}>{distribution.title}</h1>
      <p style={{
        textAlign: 'center',
        color: '#7f8c8d',
        marginBottom: '15px',
        fontStyle: 'italic',
        fontSize: '14px',
        margin: '0 0 15px 0'
      }}>{distribution.description}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '315px 1fr 315px',
        gap: '15px',
        flex: 1,
        overflow: 'hidden'
      }}>
        {/* LEFT COLUMN - Parameters and Statistics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'auto' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '1px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Parameters</h3>
            <div style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px'
            }}>
              {distribution.controls}
            </div>
            {distribution.parameters && distribution.parameters.length > 0 && (
              <div style={{ display: 'grid', gap: '12px', marginTop: '15px' }}>
                {distribution.parameters.map((param, idx) => (
                  <div key={idx} style={{
                    padding: '10px',
                    background: '#f8f9fa',
                    borderRadius: '6px',
                    borderLeft: '4px solid #677ae4'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '4px'
                    }}>
                      <div>
                        <span style={{ fontWeight: '600', color: '#2c3e50', fontSize: '13px' }}>{param.name}</span>
                        {param.symbol && <span style={{ color: '#677ae4', fontStyle: 'italic', fontSize: '12px' }}> ({param.symbol})</span>}
                      </div>
                      <span style={{ fontWeight: '700', color: '#677ae4', fontSize: '14px' }}>{param.value}</span>
                    </div>
                    <p style={{ fontSize: '11px', color: '#7f8c8d', margin: 0 }}>{param.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Statistics</h3>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <button onClick={() => setShowFormulas(!showFormulas)} style={{
                background: '#677ae4',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '11px',
                fontWeight: '600'
              }}>
                {showFormulas ? 'Hide Formulas' : 'Show Formulas'}
              </button>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px'
            }}>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Expected Value</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{distribution.statistics.mean.toFixed(4)}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.meanFormula}</div>}
              </div>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Variance</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{distribution.statistics.variance.toFixed(4)}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.varianceFormula}</div>}
              </div>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Std Deviation</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{distribution.statistics.stdDev.toFixed(4)}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.stdDevFormula}</div>}
              </div>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Mode</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{typeof distribution.statistics.mode === 'number' ? distribution.statistics.mode.toFixed(4) : distribution.statistics.mode}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.modeFormula}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN - Graphs and Calculator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'auto' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '15px',
              borderBottom: '2px solid #f0f0f0'
            }}>
              <button
                onClick={() => setActiveTab('pdf')}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeTab === 'pdf' ? '#677ae4' : '#7f8c8d',
                  borderBottom: activeTab === 'pdf' ? '3px solid #677ae4' : '3px solid transparent',
                  transition: 'all 0.3s'
                }}
              >
                PDF
              </button>
              <button
                onClick={() => setActiveTab('cdf')}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeTab === 'cdf' ? '#677ae4' : '#7f8c8d',
                  borderBottom: activeTab === 'cdf' ? '3px solid #677ae4' : '3px solid transparent',
                  transition: 'all 0.3s'
                }}
              >
                CDF
              </button>
              <button
                onClick={() => setActiveTab('table')}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeTab === 'table' ? '#677ae4' : '#7f8c8d',
                  borderBottom: activeTab === 'table' ? '3px solid #677ae4' : '3px solid transparent',
                  transition: 'all 0.3s'
                }}
              >
                Table
              </button>
            </div>

            {activeTab === 'pdf' && (
              <div style={{
                background: '#fafbfc',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={distribution.pdfData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="x"
                      type="number"
                      domain={['dataMin', 'dataMax']}
                      label={{ value: 'Value (x)', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      label={{ value: 'Density f(x)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value) => value.toFixed(6)}
                      labelFormatter={(label) => `x = ${parseFloat(label).toFixed(4)}`}
                    />
                    <Area type="monotone" dataKey="density" stroke="#677ae4" fill="#677ae4" fillOpacity={0.3} />
                    <ReferenceLine 
                      x={distribution.statistics.mean} 
                      stroke="#e74c3c" 
                      strokeWidth={3}
                      label={{ 
                        value: `E[X]=${distribution.statistics.mean.toFixed(2)}`, 
                        position: 'top',
                        fill: '#e74c3c',
                        fontSize: 11,
                        fontWeight: 'bold',
                        offset: 10
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeTab === 'cdf' && (
              <div style={{
                background: '#fafbfc',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={distribution.cdfData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="x"
                      type="number"
                      domain={['dataMin', 'dataMax']}
                      label={{ value: 'Value (x)', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      label={{ value: 'Cumulative Probability F(x)', angle: -90, position: 'insideLeft' }}
                      domain={[0, 1]}
                    />
                    <Tooltip 
                      formatter={(value) => value.toFixed(6)}
                      labelFormatter={(label) => `x = ${parseFloat(label).toFixed(4)}`}
                    />
                    <Line type="monotone" dataKey="cumulativeProbability" stroke="#677ae4" strokeWidth={2} dot={false} />
                    <ReferenceLine 
                      x={distribution.statistics.mean} 
                      stroke="#e74c3c" 
                      strokeWidth={3}
                      label={{ 
                        value: `E[X]=${distribution.statistics.mean.toFixed(2)}`, 
                        position: 'top',
                        fill: '#e74c3c',
                        fontSize: 11,
                        fontWeight: 'bold',
                        offset: 10
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeTab === 'table' && (
              <div style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '12px'
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        background: '#f8f9fa',
                        padding: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#2c3e50',
                        border: '1px solid #e0e0e0'
                      }}>x</th>
                      <th style={{
                        background: '#f8f9fa',
                        padding: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#2c3e50',
                        border: '1px solid #e0e0e0'
                      }}>f(x)</th>
                      <th style={{
                        background: '#f8f9fa',
                        padding: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#2c3e50',
                        border: '1px solid #e0e0e0'
                      }}>F(x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distribution.pdfData.map((row, idx) => (
                      <tr key={idx}>
                        <td style={{
                          padding: '6px',
                          textAlign: 'center',
                          border: '1px solid #e0e0e0'
                        }}>{row.x.toFixed(4)}</td>
                        <td style={{
                          padding: '6px',
                          textAlign: 'center',
                          border: '1px solid #e0e0e0'
                        }}>{row.density.toFixed(6)}</td>
                        <td style={{
                          padding: '6px',
                          textAlign: 'center',
                          border: '1px solid #e0e0e0'
                        }}>{distribution.cdfData[idx]?.cumulativeProbability.toFixed(6)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Probability Calculator</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
              <button
                onClick={() => setCalcTab('lessthan')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'lessthan' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'lessthan' ? 'white' : '#7f8c8d'
                }}
              >
                P(X &lt; x)
              </button>
              <button
                onClick={() => setCalcTab('lessequal')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'lessequal' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'lessequal' ? 'white' : '#7f8c8d'
                }}
              >
                P(X ≤ x)
              </button>
              <button
                onClick={() => setCalcTab('greaterthan')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'greaterthan' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'greaterthan' ? 'white' : '#7f8c8d'
                }}
              >
                P(X &gt; x)
              </button>
              <button
                onClick={() => setCalcTab('greaterequal')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'greaterequal' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'greaterequal' ? 'white' : '#7f8c8d'
                }}
              >
                P(X ≥ x)
              </button>
              <button
                onClick={() => setCalcTab('range')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'range' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'range' ? 'white' : '#7f8c8d'
                }}
              >
                P(a ≤ X ≤ b)
              </button>
              <button
                onClick={() => setCalcTab('strictrange')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'strictrange' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'strictrange' ? 'white' : '#7f8c8d'
                }}
              >
                P(a &lt; X &lt; b)
              </button>
              <button
                onClick={() => setCalcTab('leftinc')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'leftinc' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'leftinc' ? 'white' : '#7f8c8d'
                }}
              >
                P(a ≤ X &lt; b)
              </button>
              <button
                onClick={() => setCalcTab('rightinc')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'rightinc' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'rightinc' ? 'white' : '#7f8c8d'
                }}
              >
                P(a &lt; X ≤ b)
              </button>
            </div>

            <div style={{
              padding: '12px',
              background: '#f8f9fa',
              borderRadius: '6px'
            }}>
              {calcTab === 'lessthan' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value x:</label>
                    <input
                      type="number"
                      step="any"
                      value={lessThanX}
                      onChange={(e) => setLessThanX(e.target.value)}
                      placeholder="Enter x"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {lessThanX !== '' && calculateLessThanProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X &lt; {lessThanX})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateLessThanProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'lessequal' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value x:</label>
                    <input
                      type="number"
                      step="any"
                      value={lessEqualX}
                      onChange={(e) => setLessEqualX(e.target.value)}
                      placeholder="Enter x"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {lessEqualX !== '' && calculateLessEqualProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X ≤ {lessEqualX})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateLessEqualProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'greaterthan' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value x:</label>
                    <input
                      type="number"
                      step="any"
                      value={greaterThanX}
                      onChange={(e) => setGreaterThanX(e.target.value)}
                      placeholder="Enter x"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {greaterThanX !== '' && calculateGreaterThanProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X &gt; {greaterThanX})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateGreaterThanProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'greaterequal' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value x:</label>
                    <input
                      type="number"
                      step="any"
                      value={greaterEqualX}
                      onChange={(e) => setGreaterEqualX(e.target.value)}
                      placeholder="Enter x"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {greaterEqualX !== '' && calculateGreaterEqualProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X ≥ {greaterEqualX})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateGreaterEqualProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'range' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      step="any"
                      value={rangeA}
                      onChange={(e) => setRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      step="any"
                      value={rangeB}
                      onChange={(e) => setRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {rangeA !== '' && rangeB !== '' && calculateRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({rangeA} ≤ X ≤ {rangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'strictrange' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      step="any"
                      value={strictRangeA}
                      onChange={(e) => setStrictRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      step="any"
                      value={strictRangeB}
                      onChange={(e) => setStrictRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {strictRangeA !== '' && strictRangeB !== '' && calculateStrictRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({strictRangeA} &lt; X &lt; {strictRangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateStrictRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'leftinc' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      step="any"
                      value={leftIncRangeA}
                      onChange={(e) => setLeftIncRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      step="any"
                      value={leftIncRangeB}
                      onChange={(e) => setLeftIncRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {leftIncRangeA !== '' && leftIncRangeB !== '' && calculateLeftIncRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({leftIncRangeA} ≤ X &lt; {leftIncRangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateLeftIncRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'rightinc' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      step="any"
                      value={rightIncRangeA}
                      onChange={(e) => setRightIncRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      step="any"
                      value={rightIncRangeB}
                      onChange={(e) => setRightIncRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {rightIncRangeA !== '' && rightIncRangeB !== '' && calculateRightIncRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({rightIncRangeA} &lt; X ≤ {rightIncRangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateRightIncRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Key Properties and Applications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'hidden' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Key Properties</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {distribution.properties.map((prop, idx) => (
                <div key={idx} style={{
                  background: '#f8f9fa',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <button
                    onClick={() => setExpandedProperty(expandedProperty === idx ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '12px',
                      color: '#2c3e50',
                      fontWeight: '500',
                      textAlign: 'left'
                    }}
                  >
                    <span>{prop.title}</span>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#677ae4',
                      transition: 'transform 0.3s',
                      transform: expandedProperty === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'inline-block'
                    }}>▼</span>
                  </button>
                  {expandedProperty === idx && (
                    <div style={{
                      padding: '10px',
                      paddingTop: '0',
                      fontSize: '11px',
                      color: '#555',
                      lineHeight: '1.6',
                      borderTop: '1px solid #e0e0e0',
                      marginTop: '5px',
                      paddingTop: '10px'
                    }}>
                      {prop.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Real-World Applications</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {distribution.examples.map((example, idx) => (
                <li key={idx} style={{
                  padding: '10px',
                  background: '#f8f9fa',
                  borderRadius: '4px',
                  marginBottom: idx < distribution.examples.length - 1 ? '8px' : '0',
                  fontSize: '12px',
                  color: '#2c3e50',
                  borderLeft: '3px solid #677ae4',
                  lineHeight: '1.4'
                }}>{example}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}