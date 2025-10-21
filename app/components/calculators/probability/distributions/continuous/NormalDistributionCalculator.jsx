import React, { useState } from 'react';

export default function NormalDistributionCalculator({ links }) {
  const [mean, setMean] = useState('');
  const [stdDev, setStdDev] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const [queryType, setQueryType] = useState('all');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({ mean: '', stdDev: '', x1: '', x2: '' });

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

  const handleMeanChange = (value) => {
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setMean(value);
      validateNumber(value, 'mean');
    }
  };

  const handleStdDevChange = (value) => {
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setStdDev(value);
      validateNumber(value, 'stdDev');
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
    setErrors({ mean: '', stdDev: '', x1: '', x2: '' });
  };

  const erf = (x) => {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return sign * y;
  };

  const normalCDF = (x, mu, sigma) => {
    return 0.5 * (1 + erf((x - mu) / (sigma * Math.sqrt(2))));
  };

  const normalPDF = (x, mu, sigma) => {
    const coefficient = 1 / (sigma * Math.sqrt(2 * Math.PI));
    const exponent = -Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2));
    return coefficient * Math.exp(exponent);
  };

  const calculate = () => {
    if (mean === '' || stdDev === '') {
      return;
    }

    const muVal = parseFloat(mean);
    const sigmaVal = parseFloat(stdDev);

    if (isNaN(muVal) || isNaN(sigmaVal)) {
      return;
    }

    if (sigmaVal <= 0) {
      setErrors(prev => ({ ...prev, stdDev: 'Standard deviation must be positive' }));
      return;
    }

    const variance = sigmaVal * sigmaVal;

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

        const cdf1 = normalCDF(x1Val, muVal, sigmaVal);
        const cdf2 = normalCDF(x2Val, muVal, sigmaVal);
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

        let prob = 0;
        const cdf = normalCDF(xVal, muVal, sigmaVal);
        
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
          probability: prob,
          zScore: (xVal - muVal) / sigmaVal
        };
      }
    }

    setResults({
      mean: muVal,
      stdDev: sigmaVal,
      variance: variance,
      query: queryResult
    });
  };

  const reset = () => {
    setMean('');
    setStdDev('');
    setX1('');
    setX2('');
    setResults(null);
    setErrors({ mean: '', stdDev: '', x1: '', x2: '' });
  };

  const DistributionChart = ({ mean, stdDev, query }) => {
    const width = 500;
    const height = 240;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    const xMin = mean - 4 * stdDev;
    const xMax = mean + 4 * stdDev;
    const totalRange = xMax - xMin;

    const maxPDF = normalPDF(mean, mean, stdDev);

    const xScale = (x) => padding + ((x - xMin) / totalRange) * chartWidth;
    const yScale = (y) => height - padding - (y / (maxPDF * 1.1)) * chartHeight;

    const points = [];
    for (let i = 0; i <= 200; i++) {
      const x = xMin + (i / 200) * totalRange;
      const y = normalPDF(x, mean, stdDev);
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
          const y = normalPDF(x, mean, stdDev);
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
          const y = normalPDF(x, mean, stdDev);
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
          const y = normalPDF(x, mean, stdDev);
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
          y2={yScale(maxPDF)}
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
          x={xScale(mean - stdDev)}
          y={height - padding + 15}
          textAnchor="middle"
          fontSize="9"
          fill="#666"
        >
          -σ
        </text>
        <text
          x={xScale(mean + stdDev)}
          y={height - padding + 15}
          textAnchor="middle"
          fontSize="9"
          fill="#666"
        >
          +σ
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

  const canCalculate = mean !== '' && stdDev !== '' && !errors.mean && !errors.stdDev && 
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
            Normal Distribution Calculator
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
                border: mean !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  μ (mean)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Center of the distribution
                </p>
                <input
                  type="text"
                  placeholder="e.g., 0"
                  value={mean}
                  onChange={(e) => handleMeanChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.mean ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.mean && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.mean}
                  </div>
                )}
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: stdDev !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  σ (standard deviation)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Spread of the distribution
                </p>
                <input
                  type="text"
                  placeholder="e.g., 1"
                  value={stdDev}
                  onChange={(e) => handleStdDevChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.stdDev ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.stdDev && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.stdDev}
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
                    placeholder="e.g., 1.5"
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
                      placeholder="e.g., -1"
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
                      placeholder="e.g., 1"
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
                    {results.query.zScore !== undefined && (
                      <div style={{ fontSize: '13px', color: '#718096', marginTop: '8px' }}>
                        Z-score: {results.query.zScore.toFixed(4)}
                      </div>
                    )}
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
                    Bell-shaped curve symmetric around the mean
                  </div>
                  <div style={{ fontSize: '13px', color: '#2d3748', lineHeight: '1.4' }}>
                    68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ
                  </div>
                </div>

                <div>
                  <DistributionChart mean={results.mean} stdDev={results.stdDev} query={results.query} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}