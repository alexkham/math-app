
import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

export default function BinomialCalculator({ links }) {
  const [n, setN] = useState('');
  const [p, setP] = useState('');
  const [k, setK] = useState('');
  const [queryType, setQueryType] = useState('all');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({ n: '', p: '', k: '' });

  const validateN = (value) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, n: '' }));
      return true;
    }
    
    if (!/^\d+$/.test(value)) {
      setErrors(prev => ({ ...prev, n: 'Must be a positive integer' }));
      return false;
    }
    
    const num = parseInt(value);
    if (num <= 0) {
      setErrors(prev => ({ ...prev, n: 'Must be greater than 0' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, n: '' }));
    return true;
  };

  const validateP = (value) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, p: '' }));
      return true;
    }
    
    if (!/^\d*\.?\d*$/.test(value)) {
      setErrors(prev => ({ ...prev, p: 'Invalid number format' }));
      return false;
    }
    
    const num = parseFloat(value);
    if (num < 0 || num > 1) {
      setErrors(prev => ({ ...prev, p: 'Must be between 0 and 1' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, p: '' }));
    return true;
  };

  const validateK = (value) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, k: '' }));
      return true;
    }
    
    if (!/^\d+$/.test(value)) {
      setErrors(prev => ({ ...prev, k: 'Must be a non-negative integer' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, k: '' }));
    return true;
  };

  const handleNChange = (value) => {
    setN(value);
    validateN(value);
  };

  const handlePChange = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setP(value);
      validateP(value);
    }
  };

  const handleKChange = (value) => {
    setK(value);
    validateK(value);
  };

  const handleQueryTypeChange = (value) => {
    setQueryType(value);
    setResults(null);
    setK('');
    setErrors({ n: '', p: '', k: '' });
  };

  const factorial = (num) => {
    if (num <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const binomialCoefficient = (n, k) => {
    return factorial(n) / (factorial(k) * factorial(n - k));
  };

  const binomialPMF = (n, k, p) => {
    return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  };

  const calculate = () => {
    if (n === '' || p === '') {
      return;
    }

    if (queryType !== 'all' && k === '') {
      return;
    }

    const nVal = parseInt(n);
    const pVal = parseFloat(p);

    if (isNaN(nVal) || isNaN(pVal) || nVal <= 0 || pVal < 0 || pVal > 1) {
      return;
    }

    const mean = nVal * pVal;
    const variance = nVal * pVal * (1 - pVal);
    const stdDev = Math.sqrt(variance);

    const pmfValues = [];
    for (let i = 0; i <= nVal; i++) {
      pmfValues.push({
        k: i,
        probability: binomialPMF(nVal, i, pVal)
      });
    }

    let queryResult = null;
    
    if (queryType !== 'all') {
      const kVal = parseInt(k);
      if (isNaN(kVal) || kVal < 0) {
        return;
      }
      
      if (kVal > nVal) {
        setErrors(prev => ({ ...prev, k: 'k cannot exceed n' }));
        return;
      }

      let prob = 0;
      switch(queryType) {
        case 'equal':
          prob = binomialPMF(nVal, kVal, pVal);
          break;
        case 'less':
          for (let i = 0; i < kVal; i++) {
            prob += binomialPMF(nVal, i, pVal);
          }
          break;
        case 'lessEqual':
          for (let i = 0; i <= kVal; i++) {
            prob += binomialPMF(nVal, i, pVal);
          }
          break;
        case 'greater':
          for (let i = kVal + 1; i <= nVal; i++) {
            prob += binomialPMF(nVal, i, pVal);
          }
          break;
        case 'greaterEqual':
          for (let i = kVal; i <= nVal; i++) {
            prob += binomialPMF(nVal, i, pVal);
          }
          break;
      }

      queryResult = {
        type: queryType,
        k: kVal,
        probability: prob
      };
    }

    setResults({
      n: nVal,
      p: pVal,
      q: 1 - pVal,
      mean: mean,
      variance: variance,
      stdDev: stdDev,
      pmf: pmfValues,
      query: queryResult
    });
  };

  const reset = () => {
    setN('');
    setP('');
    setK('');
    setResults(null);
    setErrors({ n: '', p: '', k: '' });
  };

  const DistributionChart = ({ pmf, n }) => {
    const width = 500;
    const height = 220;
    const padding = 35;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    const maxProb = Math.max(...pmf.map(item => item.probability));
    const barWidth = Math.min(chartWidth / (n + 1), 25);
    const spacing = chartWidth / (n + 1);

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
          Number of Successes (k)
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
          P(X = k)
        </text>

        {pmf.map((item, i) => {
          const barHeight = (item.probability / maxProb) * (chartHeight - 15);
          const x = padding + i * spacing + (spacing - barWidth) / 2;
          const y = height - padding - barHeight;
          
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="#7fa8f5"
                stroke="#245de1"
                strokeWidth="1"
              />
              
              {(n <= 20 || i % Math.ceil(n / 20) === 0) && (
                <text
                  x={x + barWidth / 2}
                  y={height - padding + 15}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#333"
                >
                  {item.k}
                </text>
              )}
            </g>
          );
        })}
        
        <text
          x={padding - 5}
          y={height - padding + 3}
          textAnchor="end"
          fontSize="9"
          fill="#333"
        >
          0
        </text>
        
        <text
          x={padding - 5}
          y={padding + 3}
          textAnchor="end"
          fontSize="9"
          fill="#333"
        >
          {maxProb.toFixed(2)}
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
      case 'equal': return `P(X = ${results.query.k})`;
      case 'less': return `P(X < ${results.query.k})`;
      case 'lessEqual': return `P(X ≤ ${results.query.k})`;
      case 'greater': return `P(X > ${results.query.k})`;
      case 'greaterEqual': return `P(X ≥ ${results.query.k})`;
      default: return '';
    }
  };

  const canCalculate = n !== '' && p !== '' && !errors.n && !errors.p && 
    (queryType === 'all' || (k !== '' && !errors.k));

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
            Binomial Distribution Calculator
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
                  <option value="all">All values (full distribution)</option>
                  <option value="equal">P(X = k)</option>
                  <option value="less">P(X &lt; k)</option>
                  <option value="lessEqual">P(X ≤ k)</option>
                  <option value="greater">P(X &gt; k)</option>
                  <option value="greaterEqual">P(X ≥ k)</option>
                </select>
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: n !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  n (number of trials)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Total number of independent trials
                </p>
                <input
                  type="text"
                  placeholder="e.g., 10"
                  value={n}
                  onChange={(e) => handleNChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.n ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.n && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.n}
                  </div>
                )}
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: p !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  p (success probability)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Probability of success on each trial
                </p>
                <input
                  type="text"
                  placeholder="e.g., 0.5"
                  value={p}
                  onChange={(e) => handlePChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.p ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.p && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.p}
                  </div>
                )}
              </div>

              {queryType !== 'all' && (
                <div style={{
                  background: '#f8f9fa',
                  padding: '14px',
                  borderRadius: '8px',
                  border: k !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                  marginBottom: '12px'
                }}>
                  <label style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: '600',
                    marginBottom: '5px',
                    color: '#2d3748'
                  }}>
                    k (number of successes)
                  </label>
                  <p style={{
                    fontSize: '12px',
                    color: '#718096',
                    marginBottom: '8px'
                  }}>
                    Target number of successes
                  </p>
                  <input
                    type="text"
                    placeholder="e.g., 6"
                    value={k}
                    onChange={(e) => handleKChange(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      fontSize: '15px',
                      border: errors.k ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                      borderRadius: '6px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.k && (
                    <div style={{
                      color: '#e53e3e',
                      fontSize: '11px',
                      marginTop: '5px',
                      fontWeight: '500'
                    }}>
                      {errors.k}
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
                      marginBottom: getLink('q') ? '8px' : '0'
                    }}>
                      <div style={{ fontSize: '13px', color: '#718096' }}>q = 1 - p</div>
                      <div style={{ fontSize: '22px', fontWeight: '700', color: '#245de1' }}>
                        {results.q.toFixed(4)}
                      </div>
                    </div>
                    {getLink('q') && (
                      <a 
                        href={getLink('q')} 
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
                  <div style={{ fontSize: '16px', color: '#2d3748', lineHeight: '1.6' }}>
                    {processContent('$PMF: P(X = k) = C(n,k) \\times p^k \\times (1-p)^{(n-k)}$')}
                  </div>
                </div>

                {queryType === 'all' && (
                  <div>
                    <div style={{ marginBottom: '20px' }}>
                      <DistributionChart pmf={results.pmf} n={results.n} />
                    </div>

                    <div style={{
                      background: '#f8f9fa',
                      padding: '15px',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0'
                    }}>
                      <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#2d3748' }}>
                        Probability Mass Function
                      </h3>
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                        gap: '8px'
                      }}>
                        {results.pmf.map((item) => (
                          <div key={item.k} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 12px',
                            background: 'white',
                            borderRadius: '4px',
                            fontSize: '13px'
                          }}>
                            <span style={{ fontWeight: '600', color: '#2d3748' }}>
                              P(X={item.k})
                            </span>
                            <span style={{ color: '#245de1', fontWeight: '600' }}>
                              {item.probability.toFixed(4)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
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