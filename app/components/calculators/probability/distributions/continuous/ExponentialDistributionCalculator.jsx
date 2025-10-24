import React, { useState } from 'react';

export default function ExponentialDistributionCalculator({ links }) {
  const [lambda, setLambda] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const [queryType, setQueryType] = useState('all');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({ lambda: '', x1: '', x2: '' });

  const validateNumber = (value, field) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    }
    
    if (!/^\d*\.?\d*$/.test(value)) {
      setErrors(prev => ({ ...prev, [field]: 'Must be a positive number' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, [field]: '' }));
    return true;
  };

  const handleLambdaChange = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setLambda(value);
      validateNumber(value, 'lambda');
    }
  };

  const handleX1Change = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setX1(value);
      validateNumber(value, 'x1');
    }
  };

  const handleX2Change = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setX2(value);
      validateNumber(value, 'x2');
    }
  };

  const handleQueryTypeChange = (value) => {
    setQueryType(value);
    setResults(null);
    setX1('');
    setX2('');
    setErrors({ lambda: '', x1: '', x2: '' });
  };

  const exponentialCDF = (x, lambda) => {
    if (x < 0) return 0;
    return 1 - Math.exp(-lambda * x);
  };

  const exponentialPDF = (x, lambda) => {
    if (x < 0) return 0;
    return lambda * Math.exp(-lambda * x);
  };

  const calculate = () => {
    if (lambda === '') {
      return;
    }

    const lambdaVal = parseFloat(lambda);

    if (isNaN(lambdaVal)) {
      return;
    }

    if (lambdaVal <= 0) {
      setErrors(prev => ({ ...prev, lambda: 'Lambda must be positive' }));
      return;
    }

    const mean = 1 / lambdaVal;
    const variance = 1 / (lambdaVal * lambdaVal);
    const stdDev = Math.sqrt(variance);

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

        if (x1Val < 0) {
          setErrors(prev => ({ ...prev, x1: 'Must be non-negative' }));
          return;
        }

        if (x2Val < 0) {
          setErrors(prev => ({ ...prev, x2: 'Must be non-negative' }));
          return;
        }

        if (x1Val >= x2Val) {
          setErrors(prev => ({ ...prev, x2: 'x2 must be greater than x1' }));
          return;
        }

        const cdf1 = exponentialCDF(x1Val, lambdaVal);
        const cdf2 = exponentialCDF(x2Val, lambdaVal);
        const prob = cdf2 - cdf1;

        queryResult = {
          type: queryType,
          x1: x1Val,
          x2: x2Val,
          probability: prob
        };
      } else {
        if (x1 === '') {
          return;
        }

        const xVal = parseFloat(x1);

        if (isNaN(xVal)) {
          return;
        }

        if (xVal < 0) {
          setErrors(prev => ({ ...prev, x1: 'Must be non-negative' }));
          return;
        }

        let prob = 0;
        const cdf = exponentialCDF(xVal, lambdaVal);
        
        switch(queryType) {
          case 'less':
          case 'lessEqual':
            prob = cdf;
            break;
          case 'greater':
          case 'greaterEqual':
            prob = 1 - cdf;
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
      lambda: lambdaVal,
      mean: mean,
      variance: variance,
      stdDev: stdDev,
      query: queryResult
    });
  };

  const reset = () => {
    setLambda('');
    setX1('');
    setX2('');
    setResults(null);
    setErrors({ lambda: '', x1: '', x2: '' });
  };

  const DistributionChart = ({ lambda, query }) => {
    const width = 500;
    const height = 240;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    const mean = 1 / lambda;
    const xMax = mean * 5;
    const xMin = 0;
    const totalRange = xMax - xMin;

    const maxPDF = exponentialPDF(0, lambda);

    const xScale = (x) => padding + ((x - xMin) / totalRange) * chartWidth;
    const yScale = (y) => height - padding - (y / (maxPDF * 1.1)) * chartHeight;

    const points = [];
    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * totalRange;
      const y = exponentialPDF(x, lambda);
      points.push(`${xScale(x)},${yScale(y)}`);
    }

    const pathD = `M ${points.join(' L ')}`;

    let shadedArea = null;
    if (query) {
      if (query.type === 'range') {
        const rangePoints = [];
        const startX = query.x1;
        const endX = query.x2;
        
        rangePoints.push(`${xScale(startX)},${yScale(0)}`);
        
        for (let i = 0; i <= 100; i++) {
          const x = startX + (i / 100) * (endX - startX);
          const y = exponentialPDF(x, lambda);
          rangePoints.push(`${xScale(x)},${yScale(y)}`);
        }
        
        rangePoints.push(`${xScale(endX)},${yScale(0)}`);
        
        shadedArea = (
          <path
            d={`M ${rangePoints.join(' L ')} Z`}
            fill="#ffa50080"
            stroke="#ff8c00"
            strokeWidth="2"
          />
        );
      } else if (query.type === 'less' || query.type === 'lessEqual') {
        const rangePoints = [];
        const endX = query.x;
        
        rangePoints.push(`${xScale(xMin)},${yScale(0)}`);
        
        for (let i = 0; i <= 100; i++) {
          const x = xMin + (i / 100) * (endX - xMin);
          const y = exponentialPDF(x, lambda);
          rangePoints.push(`${xScale(x)},${yScale(y)}`);
        }
        
        rangePoints.push(`${xScale(endX)},${yScale(0)}`);
        
        shadedArea = (
          <path
            d={`M ${rangePoints.join(' L ')} Z`}
            fill="#ffa50080"
            stroke="#ff8c00"
            strokeWidth="2"
          />
        );
      } else if (query.type === 'greater' || query.type === 'greaterEqual') {
        const rangePoints = [];
        const startX = query.x;
        
        rangePoints.push(`${xScale(startX)},${yScale(0)}`);
        
        for (let i = 0; i <= 100; i++) {
          const x = startX + (i / 100) * (xMax - startX);
          const y = exponentialPDF(x, lambda);
          rangePoints.push(`${xScale(x)},${yScale(y)}`);
        }
        
        rangePoints.push(`${xScale(xMax)},${yScale(0)}`);
        
        shadedArea = (
          <path
            d={`M ${rangePoints.join(' L ')} Z`}
            fill="#ffa50080"
            stroke="#ff8c00"
            strokeWidth="2"
          />
        );
      }
    }

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

        {shadedArea}

        <path
          d={pathD}
          fill="none"
          stroke="#245de1"
          strokeWidth="2.5"
        />

        <line
          x1={xScale(mean)}
          y1={yScale(0)}
          x2={xScale(mean)}
          y2={yScale(exponentialPDF(mean, lambda))}
          stroke="#e53e3e"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />

        <text
          x={xScale(mean)}
          y={height - padding + 15}
          textAnchor="middle"
          fontSize="10"
          fill="#e53e3e"
          fontWeight="600"
        >
          μ = {mean.toFixed(2)}
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
          y={yScale(maxPDF) + 4}
          textAnchor="end"
          fontSize="10"
          fill="#333"
        >
          {maxPDF.toFixed(2)}
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

  const canCalculate = lambda !== '' && !errors.lambda && 
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
            Exponential Distribution Calculator
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
                border: lambda !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  λ (rate parameter)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Average rate of occurrence
                </p>
                <input
                  type="text"
                  placeholder="e.g., 0.5"
                  value={lambda}
                  onChange={(e) => handleLambdaChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.lambda ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.lambda && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.lambda}
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
                    placeholder="e.g., 2"
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
                      placeholder="e.g., 1"
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
                      placeholder="e.g., 3"
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
                      marginBottom: getLink('lambda') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>Rate (λ)</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.lambda.toFixed(4)}
                      </div>
                    </div>
                    {getLink('lambda') && (
                      <a 
                        href={getLink('lambda')} 
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
                <div style={{ fontSize: '14px', color: '#2d3748', lineHeight: '1.6', marginBottom: '8px' }}>
                  Models time between events in a Poisson process
                </div>
                <div style={{ fontSize: '13px', color: '#2d3748', lineHeight: '1.4' }}>
                  Memoryless property: P(X &gt; s + t | X &gt; s) = P(X &gt; t)
                </div>
              </div>

              <div>
                <DistributionChart lambda={results.lambda} query={results.query} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}