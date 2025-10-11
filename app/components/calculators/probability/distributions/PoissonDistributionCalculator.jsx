import React, { useState } from 'react';

export default function PoissonCalculator({ links }) {
  const [lambda, setLambda] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const validateLambda = (value) => {
    if (value === '') {
      setError('');
      return true;
    }
    
    if (!/^\d*\.?\d*$/.test(value)) {
      setError('Invalid number format');
      return false;
    }
    
    const num = parseFloat(value);
    if (num <= 0) {
      setError('Must be greater than 0');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleLambdaChange = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setLambda(value);
      validateLambda(value);
    }
  };

  const factorial = (num) => {
    if (num <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const poissonPMF = (k, lambda) => {
    // P(X = k) = (λ^k * e^(-λ)) / k!
    return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
  };

  const calculate = () => {
    if (lambda === '') {
      return;
    }

    const lambdaVal = parseFloat(lambda);

    if (isNaN(lambdaVal) || lambdaVal <= 0) {
      return;
    }

    const mean = lambdaVal;
    const variance = lambdaVal;
    const stdDev = Math.sqrt(lambdaVal);

    const pmfValues = [];
    const maxK = Math.min(100, Math.ceil(lambdaVal + 5 * stdDev));
    for (let k = 0; k <= maxK; k++) {
      const prob = poissonPMF(k, lambdaVal);
      if (prob < 0.00001 && k > 20) break;
      pmfValues.push({
        k: k,
        probability: prob
      });
    }

    setResults({
      lambda: lambdaVal,
      mean: mean,
      variance: variance,
      stdDev: stdDev,
      pmf: pmfValues
    });
  };

  const reset = () => {
    setLambda('');
    setResults(null);
    setError('');
  };

  const DistributionChart = ({ pmf }) => {
    const width = 500;
    const height = 220;
    const padding = 35;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    const maxProb = Math.max(...pmf.map(item => item.probability));
    const barWidth = Math.min(chartWidth / pmf.length, 25);
    const spacing = chartWidth / pmf.length;

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
          Number of Events (k)
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
              
              {(pmf.length <= 15 || i % Math.ceil(pmf.length / 15) === 0) && (
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

  const canCalculate = lambda !== '' && !error;

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
            Poisson Distribution Calculator
          </h1>
          <p style={{ margin: 0, fontSize: '13px', opacity: 0.95 }}>
            Enter λ (lambda) - average rate of events per interval
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
                  λ (lambda - average rate)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Average number of events per interval
                </p>
                <input
                  type="text"
                  placeholder="e.g., 3.5"
                  value={lambda}
                  onChange={(e) => handleLambdaChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: error ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {error && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {error}
                  </div>
                )}
              </div>

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

              {results && (
                <div style={{
                  padding: '12px',
                  background: '#e6f2ff',
                  borderRadius: '8px',
                  border: '2px solid #245de1'
                }}>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#245de1' }}>
                    Distribution Info
                  </h3>
                  <p style={{ margin: '3px 0', fontSize: '11px', color: '#2d3748', lineHeight: '1.4' }}>
                    PMF: P(X = k) = (λ^k × e^(-λ)) / k!
                  </p>
                  <p style={{ margin: '3px 0', fontSize: '11px', color: '#2d3748', lineHeight: '1.4' }}>
                    Models event counts in fixed intervals
                  </p>
                </div>
              )}
            </div>

            {results && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 520px',
                gap: '20px',
                alignItems: 'start'
              }}>
                <div>
                  <div style={{
                    display: 'grid',
                    gap: '10px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      background: '#f8f9fa',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        marginBottom: getLink('mean') ? '8px' : '0'
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
                            Mean (μ)
                          </div>
                          <div style={{ fontSize: '11px', color: '#718096' }}>
                            Expected events: λ
                          </div>
                        </div>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#245de1',
                          marginLeft: '15px'
                        }}>
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
                        marginBottom: getLink('variance') ? '8px' : '0'
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
                            Variance (σ²)
                          </div>
                          <div style={{ fontSize: '11px', color: '#718096' }}>
                            Also equals λ
                          </div>
                        </div>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#245de1',
                          marginLeft: '15px'
                        }}>
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
                        marginBottom: getLink('stdDev') ? '8px' : '0'
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
                            Standard Deviation (σ)
                          </div>
                          <div style={{ fontSize: '11px', color: '#718096' }}>
                            Square root of λ
                          </div>
                        </div>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#245de1',
                          marginLeft: '15px'
                        }}>
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
                    background: '#f8f9fa',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1.5px solid #e2e8f0',
                    maxHeight: '360px',
                    overflowY: 'auto'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <h3 style={{ margin: 0, fontSize: '14px', color: '#2d3748' }}>
                        Probability Mass Function
                      </h3>
                      {getLink('pmf') && (
                        <a 
                          href={getLink('pmf')} 
                          style={{ 
                            fontSize: '11px', 
                            color: '#245de1',
                            textDecoration: 'none',
                            fontWeight: '600',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          Learn more →
                        </a>
                      )}
                    </div>
                    <div style={{ display: 'grid', gap: '5px' }}>
                      {results.pmf.map((item) => (
                        <div key={item.k} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '6px 10px',
                          background: 'white',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}>
                          <span style={{ fontWeight: '600', color: '#2d3748' }}>
                            P(X = {item.k})
                          </span>
                          <span style={{ color: '#245de1', fontWeight: '600' }}>
                            {item.probability.toFixed(6)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <DistributionChart pmf={results.pmf} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}