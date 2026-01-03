
import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export default function DiscreteUniformCalculator({ links }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [x, setX] = useState('');
  const [queryType, setQueryType] = useState('all');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({ a: '', b: '', x: '' });

  const validateInput = (value, field) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    }
    
    if (!/^-?\d+$/.test(value)) {
      setErrors(prev => ({ ...prev, [field]: 'Must be an integer' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, [field]: '' }));
    return true;
  };

  const handleAChange = (value) => {
    setA(value);
    validateInput(value, 'a');
  };

  const handleBChange = (value) => {
    setB(value);
    validateInput(value, 'b');
  };

  const handleXChange = (value) => {
    setX(value);
    validateInput(value, 'x');
  };

  const handleQueryTypeChange = (value) => {
    setQueryType(value);
    setResults(null);
    setX('');
    setErrors({ a: '', b: '', x: '' });
  };

  const calculate = () => {
    if (a === '' || b === '') {
      return;
    }

    if (queryType !== 'all' && x === '') {
      return;
    }

    const aVal = parseInt(a);
    const bVal = parseInt(b);

    if (isNaN(aVal) || isNaN(bVal)) {
      return;
    }

    if (aVal >= bVal) {
      setErrors({ a: '', b: 'b must be greater than a', x: '' });
      return;
    }

    const n = bVal - aVal + 1;
    const mean = (aVal + bVal) / 2;
    const variance = ((n * n) - 1) / 12;
    const stdDev = Math.sqrt(variance);
    const probability = 1 / n;

    let queryResult = null;

    if (queryType !== 'all') {
      const xVal = parseInt(x);
      if (isNaN(xVal)) {
        return;
      }

      if (xVal < aVal || xVal > bVal) {
        setErrors(prev => ({ ...prev, x: `x must be between ${aVal} and ${bVal}` }));
        return;
      }

      let prob = 0;
      switch(queryType) {
        case 'equal':
          prob = probability;
          break;
        case 'less':
          prob = (xVal - aVal) / n;
          break;
        case 'lessEqual':
          prob = (xVal - aVal + 1) / n;
          break;
        case 'greater':
          prob = (bVal - xVal) / n;
          break;
        case 'greaterEqual':
          prob = (bVal - xVal + 1) / n;
          break;
      }

      queryResult = {
        type: queryType,
        x: xVal,
        probability: prob
      };
    }

    setResults({
      a: aVal,
      b: bVal,
      n: n,
      mean: mean,
      variance: variance,
      stdDev: stdDev,
      probability: probability,
      query: queryResult
    });
  };

  const reset = () => {
    setA('');
    setB('');
    setX('');
    setResults(null);
    setErrors({ a: '', b: '', x: '' });
  };

  const DistributionChart = ({ a, b, n }) => {
    const width = 500;
    const height = 240;
    const padding = 35;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    const barWidth = Math.min(chartWidth / n, 32);
    const spacing = chartWidth / n;
    
    const probability = 1 / n;
    const maxHeight = chartHeight * 0.8;

    return (
      <svg width={width} height={height} style={{ background: 'white', borderRadius: '6px' }}>
        <line 
          x1={padding} 
          y1={height - padding} 
          x2={width - padding} 
          y2={height - padding} 
          stroke="#333" 
          strokeWidth="1.5"
        />
        <line 
          x1={padding} 
          y1={padding} 
          x2={padding} 
          y2={height - padding} 
          stroke="#333" 
          strokeWidth="1.5"
        />
        
        <text 
          x={width / 2} 
          y={height - 5} 
          textAnchor="middle" 
          fontSize="11" 
          fill="#333"
          fontWeight="600"
        >
          Values
        </text>
        
        <text 
          x={12} 
          y={height / 2} 
          textAnchor="middle" 
          fontSize="11" 
          fill="#333"
          fontWeight="600"
          transform={`rotate(-90, 12, ${height / 2})`}
        >
          Probability
        </text>

        {Array.from({ length: n }, (_, i) => {
          const x = padding + i * spacing + (spacing - barWidth) / 2;
          const value = a + i;
          
          return (
            <g key={i}>
              <rect
                x={x}
                y={height - padding - maxHeight}
                width={barWidth}
                height={maxHeight}
                fill="#7fa8f5"
                stroke="#245de1"
                strokeWidth="1.5"
              />
              
              <text
                x={x + barWidth / 2}
                y={height - padding + 16}
                textAnchor="middle"
                fontSize="10"
                fill="#333"
              >
                {value}
              </text>
              
              {i === 0 && (
                <text
                  x={padding - 8}
                  y={height - padding - maxHeight}
                  textAnchor="end"
                  fontSize="10"
                  fill="#333"
                >
                  {probability.toFixed(4)}
                </text>
              )}
            </g>
          );
        })}
        
        <text
          x={padding - 8}
          y={height - padding + 4}
          textAnchor="end"
          fontSize="10"
          fill="#333"
        >
          0
        </text>
      </svg>
    );
  };

  const getLink = (key) => {
    if (!links || !links[key]) return null;
    return `${window.location.pathname}${window.location.search}#${links[key]}`;
  };

  const getQueryLabel = () => {
    if (!results || !results.query) return '';
    switch(results.query.type) {
      case 'equal': return `P(X = ${results.query.x})`;
      case 'less': return `P(X < ${results.query.x})`;
      case 'lessEqual': return `P(X ≤ ${results.query.x})`;
      case 'greater': return `P(X > ${results.query.x})`;
      case 'greaterEqual': return `P(X ≥ ${results.query.x})`;
      default: return '';
    }
  };

  const canCalculate = a !== '' && b !== '' && !errors.a && !errors.b && 
    (queryType === 'all' || (x !== '' && !errors.x));

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        border: 'solid 1.5px lightgray'
      }}>
        <div style={{
          background: '#245de1',
          padding: '20px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: '600' }}>
            Discrete Uniform Distribution Calculator
          </h1>
          <p style={{ margin: 0, fontSize: '13px', opacity: 0.95 }}>
            Enter the minimum (a) and maximum (b) values
          </p>
        </div>

        <div style={{ padding: '20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: results ? '280px 1fr' : '1fr',
            gap: '20px',
            alignItems: 'start'
          }}>
            <div>
              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#2d3748'
                }}>
                  Probability Type
                </label>
                <select
                  value={queryType}
                  onChange={(e) => handleQueryTypeChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    background: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">All values (full distribution)</option>
                  <option value="equal">P(X = x)</option>
                  <option value="less">P(X &lt; x)</option>
                  <option value="lessEqual">P(X ≤ x)</option>
                  <option value="greater">P(X &gt; x)</option>
                  <option value="greaterEqual">P(X ≥ x)</option>
                </select>
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '16px',
                borderRadius: '8px',
                border: a !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  a (minimum)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Minimum value (integer)
                </p>
                <input
                  type="text"
                  placeholder="e.g., 1"
                  value={a}
                  onChange={(e) => handleAChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.a ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.a && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.a}
                  </div>
                )}
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '16px',
                borderRadius: '8px',
                border: b !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  b (maximum)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Maximum value (integer)
                </p>
                <input
                  type="text"
                  placeholder="e.g., 6"
                  value={b}
                  onChange={(e) => handleBChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.b ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.b && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.b}
                  </div>
                )}
              </div>

              {queryType !== 'all' && (
                <div style={{
                  background: '#f8f9fa',
                  padding: '16px',
                  borderRadius: '8px',
                  border: x !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                  marginBottom: '12px'
                }}>
                  <label style={{
                    display: 'block',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '5px',
                    color: '#2d3748'
                  }}>
                    x (target value)
                  </label>
                  <p style={{
                    fontSize: '12px',
                    color: '#718096',
                    marginBottom: '8px'
                  }}>
                    Value to query
                  </p>
                  <input
                    type="text"
                    placeholder="e.g., 3"
                    value={x}
                    onChange={(e) => handleXChange(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      fontSize: '15px',
                      border: errors.x ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                      borderRadius: '6px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.x && (
                    <div style={{
                      color: '#e53e3e',
                      fontSize: '11px',
                      marginTop: '5px',
                      fontWeight: '500'
                    }}>
                      {errors.x}
                    </div>
                  )}
                </div>
              )}

              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '12px'
              }}>
                <button
                  onClick={calculate}
                  disabled={!canCalculate}
                  style={{
                    flex: 1,
                    background: canCalculate ? '#245de1' : '#cbd5e0',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '6px',
                    cursor: canCalculate ? 'pointer' : 'not-allowed'
                  }}
                >
                  Calculate
                </button>
                <button
                  onClick={reset}
                  style={{
                    flex: 1,
                    background: 'white',
                    color: '#245de1',
                    border: '2px solid #245de1',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Reset
                </button>
              </div>
            </div>

            {results && (
              <div>
                {results.query && (
                  <div style={{
                    background: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '12px',
                    border: '2px solid #245de1',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>
                      {getQueryLabel()}
                    </div>
                    <div style={{
                      fontSize: '48px',
                      fontWeight: '700',
                      color: '#245de1',
                      marginBottom: '8px'
                    }}>
                      {results.query.probability.toFixed(6)}
                    </div>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  <div style={{
                    background: '#f8f9fa',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1.5px solid #e2e8f0'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: getLink('n') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>n (Count)</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.n}
                      </div>
                    </div>
                    {getLink('n') && (
                      <a 
                        href={getLink('n')} 
                        style={{ 
                          fontSize: '11px', 
                          color: '#245de1',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'block'
                        }}
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                  <div style={{
                    background: '#f8f9fa',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1.5px solid #e2e8f0'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: getLink('probability') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>P(X = x)</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.probability.toFixed(4)}
                      </div>
                    </div>
                    {getLink('probability') && (
                      <a 
                        href={getLink('probability')} 
                        style={{ 
                          fontSize: '11px', 
                          color: '#245de1',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'block'
                        }}
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                  <div style={{
                    background: '#f8f9fa',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1.5px solid #e2e8f0'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: getLink('mean') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>Mean (μ)</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.mean.toFixed(4)}
                      </div>
                    </div>
                    {getLink('mean') && (
                      <a 
                        href={getLink('mean')} 
                        style={{ 
                          fontSize: '11px', 
                          color: '#245de1',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'block'
                        }}
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                  <div style={{
                    background: '#f8f9fa',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1.5px solid #e2e8f0'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: getLink('variance') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>Variance (σ²)</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.variance.toFixed(4)}
                      </div>
                    </div>
                    {getLink('variance') && (
                      <a 
                        href={getLink('variance')} 
                        style={{ 
                          fontSize: '11px', 
                          color: '#245de1',
                          textDecoration: 'none',
                          fontWeight: '600',
                          display: 'block'
                        }}
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>

                <div style={{
                  padding: '18px',
                  background: '#e6f2ff',
                  borderRadius: '8px',
                  border: '2px solid #245de1',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '15px', color: '#245de1', fontWeight: '600' }}>
                    Distribution Info
                  </h3>
                  <div style={{ fontSize: '16px', color: '#2d3748', lineHeight: '1.6', marginBottom: '8px' }}>
                    {processContent('$PMF: P(X = x) = \\frac{1}{n} = \\frac{1}{b-a+1}$')}
                  </div>
                  <div style={{ fontSize: '13px', color: '#2d3748', lineHeight: '1.4' }}>
                    Each value has equal probability
                  </div>
                </div>

                {queryType === 'all' && (
                  <div>
                    <DistributionChart a={results.a} b={results.b} n={results.n} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}