import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export default function ContinuousUniformCalculator({ links }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const [queryType, setQueryType] = useState('all');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({ a: '', b: '', x1: '', x2: '' });

  const validateNumber = (value, field) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    }
    
    if (!/^-?\d*\.?\d*$/.test(value)) {
      setErrors(prev => ({ ...prev, [field]: 'Must be a number' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, [field]: '' }));
    return true;
  };

  const handleAChange = (value) => {
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setA(value);
      validateNumber(value, 'a');
    }
  };

  const handleBChange = (value) => {
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setB(value);
      validateNumber(value, 'b');
    }
  };

  const handleX1Change = (value) => {
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setX1(value);
      validateNumber(value, 'x1');
    }
  };

  const handleX2Change = (value) => {
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setX2(value);
      validateNumber(value, 'x2');
    }
  };

  const handleQueryTypeChange = (value) => {
    setQueryType(value);
    setResults(null);
    setX1('');
    setX2('');
    setErrors({ a: '', b: '', x1: '', x2: '' });
  };

  const calculate = () => {
    if (a === '' || b === '') {
      return;
    }

    const aVal = parseFloat(a);
    const bVal = parseFloat(b);

    if (isNaN(aVal) || isNaN(bVal)) {
      return;
    }

    if (aVal >= bVal) {
      setErrors(prev => ({ ...prev, b: 'b must be greater than a' }));
      return;
    }

    const range = bVal - aVal;
    const mean = (aVal + bVal) / 2;
    const variance = (range * range) / 12;
    const stdDev = Math.sqrt(variance);
    const pdf = 1 / range;

    let queryResult = null;

    if (queryType !== 'all') {
      if (queryType === 'range') {
        if (x1 === '' || x2 === '') {
          return;
        }

        const x1Val = parseFloat(x1);
        const x2Val = parseFloat(x2);

        if (isNaN(x1Val) || isNaN(x2Val)) {
          return;
        }

        if (x1Val >= x2Val) {
          setErrors(prev => ({ ...prev, x2: 'x2 must be greater than x1' }));
          return;
        }

        const lower = Math.max(aVal, x1Val);
        const upper = Math.min(bVal, x2Val);
        const prob = lower < upper ? (upper - lower) / range : 0;

        queryResult = {
          type: queryType,
          x1: x1Val,
          x2: x2Val,
          probability: prob,
          lower: lower,
          upper: upper
        };
      } else {
        if (x1 === '') {
          return;
        }

        const xVal = parseFloat(x1);

        if (isNaN(xVal)) {
          return;
        }

        let prob = 0;
        switch(queryType) {
          case 'less':
          case 'lessEqual':
            if (xVal <= aVal) prob = 0;
            else if (xVal >= bVal) prob = 1;
            else prob = (xVal - aVal) / range;
            break;
          case 'greater':
          case 'greaterEqual':
            if (xVal <= aVal) prob = 1;
            else if (xVal >= bVal) prob = 0;
            else prob = (bVal - xVal) / range;
            break;
        }

        queryResult = {
          type: queryType,
          x: xVal,
          probability: prob
        };
      }
    }

    setResults({
      a: aVal,
      b: bVal,
      range: range,
      mean: mean,
      variance: variance,
      stdDev: stdDev,
      pdf: pdf,
      query: queryResult
    });
  };

  const reset = () => {
    setA('');
    setB('');
    setX1('');
    setX2('');
    setResults(null);
    setErrors({ a: '', b: '', x1: '', x2: '' });
  };

  const DistributionChart = ({ a, b, pdf, query }) => {
    const width = 500;
    const height = 240;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    const range = b - a;
    const margin = range * 0.1;
    const xMin = a - margin;
    const xMax = b + margin;
    const totalRange = xMax - xMin;

    const xScale = (x) => padding + ((x - xMin) / totalRange) * chartWidth;
    const yScale = (y) => height - padding - (y / (pdf * 1.2)) * chartHeight;

    const rectX = xScale(a);
    const rectWidth = xScale(b) - xScale(a);
    const rectHeight = height - padding - yScale(pdf);

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
          x
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
          f(x)
        </text>

        {query && query.type === 'range' && (
          <rect
            x={xScale(query.lower)}
            y={yScale(pdf)}
            width={xScale(query.upper) - xScale(query.lower)}
            height={rectHeight}
            fill="#ffa50080"
            stroke="#ff8c00"
            strokeWidth="2"
          />
        )}

        {query && query.type !== 'range' && (
          <>
            {(query.type === 'less' || query.type === 'lessEqual') && query.x > a && query.x < b && (
              <rect
                x={rectX}
                y={yScale(pdf)}
                width={xScale(query.x) - rectX}
                height={rectHeight}
                fill="#ffa50080"
                stroke="#ff8c00"
                strokeWidth="2"
              />
            )}
            {(query.type === 'greater' || query.type === 'greaterEqual') && query.x > a && query.x < b && (
              <rect
                x={xScale(query.x)}
                y={yScale(pdf)}
                width={xScale(b) - xScale(query.x)}
                height={rectHeight}
                fill="#ffa50080"
                stroke="#ff8c00"
                strokeWidth="2"
              />
            )}
          </>
        )}

        <rect
          x={rectX}
          y={yScale(pdf)}
          width={rectWidth}
          height={rectHeight}
          fill="none"
          stroke="#245de1"
          strokeWidth="2"
        />

        <line
          x1={rectX}
          y1={yScale(0)}
          x2={rectX}
          y2={yScale(pdf)}
          stroke="#245de1"
          strokeWidth="2"
        />
        <line
          x1={xScale(b)}
          y1={yScale(pdf)}
          x2={xScale(b)}
          y2={yScale(0)}
          stroke="#245de1"
          strokeWidth="2"
        />

        <text
          x={rectX}
          y={height - padding + 15}
          textAnchor="middle"
          fontSize="10"
          fill="#333"
        >
          {a.toFixed(2)}
        </text>
        <text
          x={xScale(b)}
          y={height - padding + 15}
          textAnchor="middle"
          fontSize="10"
          fill="#333"
        >
          {b.toFixed(2)}
        </text>

        <text
          x={padding - 5}
          y={height - padding + 4}
          textAnchor="end"
          fontSize="10"
          fill="#333"
        >
          0
        </text>
        <text
          x={padding - 5}
          y={yScale(pdf) + 4}
          textAnchor="end"
          fontSize="10"
          fill="#333"
        >
          {pdf.toFixed(4)}
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
    const q = results.query;
    switch(q.type) {
      case 'less': return `P(X < ${q.x.toFixed(2)})`;
      case 'lessEqual': return `P(X ≤ ${q.x.toFixed(2)})`;
      case 'greater': return `P(X > ${q.x.toFixed(2)})`;
      case 'greaterEqual': return `P(X ≥ ${q.x.toFixed(2)})`;
      case 'range': return `P(${q.x1.toFixed(2)} < X < ${q.x2.toFixed(2)})`;
      default: return '';
    }
  };

  const needsRange = queryType === 'range';
  const needsSingleValue = queryType !== 'all' && queryType !== 'range';

  const canCalculate = a !== '' && b !== '' && !errors.a && !errors.b && 
    (queryType === 'all' || 
     (needsRange && x1 !== '' && x2 !== '' && !errors.x1 && !errors.x2) ||
     (needsSingleValue && x1 !== '' && !errors.x1));

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
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
            Continuous Uniform Distribution Calculator
          </h1>
          <p style={{ margin: 0, fontSize: '13px', opacity: 0.95 }}>
            Calculate probabilities and distribution properties
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
                  <option value="all">Full distribution</option>
                  <option value="less">P(X &lt; x)</option>
                  <option value="lessEqual">P(X ≤ x)</option>
                  <option value="greater">P(X &gt; x)</option>
                  <option value="greaterEqual">P(X ≥ x)</option>
                  <option value="range">P(x₁ &lt; X &lt; x₂)</option>
                </select>
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: a !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
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
                  Lower bound of distribution
                </p>
                <input
                  type="text"
                  placeholder="e.g., 0"
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
                padding: '14px',
                borderRadius: '8px',
                border: b !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
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
                  Upper bound of distribution
                </p>
                <input
                  type="text"
                  placeholder="e.g., 1"
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

              {needsSingleValue && (
                <div style={{
                  background: '#f8f9fa',
                  padding: '14px',
                  borderRadius: '8px',
                  border: x1 !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                  marginBottom: '12px'
                }}>
                  <label style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: '600',
                    marginBottom: '5px',
                    color: '#2d3748'
                  }}>
                    x (value)
                  </label>
                  <p style={{
                    fontSize: '12px',
                    color: '#718096',
                    marginBottom: '8px'
                  }}>
                    Target value for probability
                  </p>
                  <input
                    type="text"
                    placeholder="e.g., 0.5"
                    value={x1}
                    onChange={(e) => handleX1Change(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      fontSize: '15px',
                      border: errors.x1 ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                      borderRadius: '6px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.x1 && (
                    <div style={{
                      color: '#e53e3e',
                      fontSize: '11px',
                      marginTop: '5px',
                      fontWeight: '500'
                    }}>
                      {errors.x1}
                    </div>
                  )}
                </div>
              )}

              {needsRange && (
                <>
                  <div style={{
                    background: '#f8f9fa',
                    padding: '14px',
                    borderRadius: '8px',
                    border: x1 !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                    marginBottom: '12px'
                  }}>
                    <label style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      marginBottom: '5px',
                      color: '#2d3748'
                    }}>
                      x₁ (lower value)
                    </label>
                    <p style={{
                      fontSize: '12px',
                      color: '#718096',
                      marginBottom: '8px'
                    }}>
                      Lower bound of range
                    </p>
                    <input
                      type="text"
                      placeholder="e.g., 0.2"
                      value={x1}
                      onChange={(e) => handleX1Change(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '15px',
                        border: errors.x1 ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                        borderRadius: '6px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    {errors.x1 && (
                      <div style={{
                        color: '#e53e3e',
                        fontSize: '11px',
                        marginTop: '5px',
                        fontWeight: '500'
                      }}>
                        {errors.x1}
                      </div>
                    )}
                  </div>

                  <div style={{
                    background: '#f8f9fa',
                    padding: '14px',
                    borderRadius: '8px',
                    border: x2 !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                    marginBottom: '12px'
                  }}>
                    <label style={{
                      display: 'block',
                      fontSize: '15px',
                      fontWeight: '600',
                      marginBottom: '5px',
                      color: '#2d3748'
                    }}>
                      x₂ (upper value)
                    </label>
                    <p style={{
                      fontSize: '12px',
                      color: '#718096',
                      marginBottom: '8px'
                    }}>
                      Upper bound of range
                    </p>
                    <input
                      type="text"
                      placeholder="e.g., 0.8"
                      value={x2}
                      onChange={(e) => handleX2Change(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '15px',
                        border: errors.x2 ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                        borderRadius: '6px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    {errors.x2 && (
                      <div style={{
                        color: '#e53e3e',
                        fontSize: '11px',
                        marginTop: '5px',
                        fontWeight: '500'
                      }}>
                        {errors.x2}
                      </div>
                    )}
                  </div>
                </>
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
                      marginBottom: getLink('pdf') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>PDF f(x)</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.pdf.toFixed(4)}
                      </div>
                    </div>
                    {getLink('pdf') && (
                      <a 
                        href={getLink('pdf')} 
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
                      marginBottom: getLink('stdDev') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>Std Dev (σ)</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.stdDev.toFixed(4)}
                      </div>
                    </div>
                    {getLink('stdDev') && (
                      <a 
                        href={getLink('stdDev')} 
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
                    {processContent('$f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$')}
                  </div>
                  <div style={{ fontSize: '13px', color: '#2d3748', lineHeight: '1.4' }}>
                    Equal probability density across the interval
                  </div>
                </div>

                <div>
                  <DistributionChart a={results.a} b={results.b} pdf={results.pdf} query={results.query} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}