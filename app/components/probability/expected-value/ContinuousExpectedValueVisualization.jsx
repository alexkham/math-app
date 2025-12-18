'use client';

import React, { useState } from 'react';

export default function ContinuousExpectedValueVisualization() {
  const [distribution, setDistribution] = useState('normal');
  const [params, setParams] = useState({
    normal: { mu: 5, sigma: 1.5 },
    exponential: { lambda: 0.5 },
    uniform: { a: 2, b: 8 },
    gamma: { k: 2, theta: 2 },
    beta: { alpha: 2, beta: 5 },
    lognormal: { mu: 1, sigma: 0.5 }
  });

  // Helper function for gamma function approximation
  const gammaFunction = (z) => {
    // Stirling's approximation for gamma function
    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gammaFunction(1 - z));
    z -= 1;
    const g = 7;
    const coef = [
      0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
    ];
    let x = coef[0];
    for (let i = 1; i < g + 2; i++) x += coef[i] / (z + i);
    const t = z + g + 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
  };

  // PDF functions
  const normalPDF = (x, mu, sigma) => {
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * 
           Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
  };

  const exponentialPDF = (x, lambda) => {
    return x >= 0 ? lambda * Math.exp(-lambda * x) : 0;
  };

  const uniformPDF = (x, a, b) => {
    return (x >= a && x <= b) ? 1 / (b - a) : 0;
  };

  const gammaPDF = (x, k, theta) => {
    if (x <= 0) return 0;
    return (Math.pow(x, k - 1) * Math.exp(-x / theta)) / 
           (Math.pow(theta, k) * gammaFunction(k));
  };

  const betaPDF = (x, alpha, beta) => {
    if (x <= 0 || x >= 1) return 0;
    return (Math.pow(x, alpha - 1) * Math.pow(1 - x, beta - 1)) / 
           (gammaFunction(alpha) * gammaFunction(beta) / gammaFunction(alpha + beta));
  };

  const lognormalPDF = (x, mu, sigma) => {
    if (x <= 0) return 0;
    return (1 / (x * sigma * Math.sqrt(2 * Math.PI))) * 
           Math.exp(-Math.pow(Math.log(x) - mu, 2) / (2 * sigma * sigma));
  };

  // Expected values
  const getExpectedValue = () => {
    if (distribution === 'normal') return params.normal.mu;
    if (distribution === 'exponential') return 1 / params.exponential.lambda;
    if (distribution === 'uniform') return (params.uniform.a + params.uniform.b) / 2;
    if (distribution === 'gamma') return params.gamma.k * params.gamma.theta;
    if (distribution === 'beta') {
      const { alpha, beta } = params.beta;
      return alpha / (alpha + beta);
    }
    if (distribution === 'lognormal') {
      const { mu, sigma } = params.lognormal;
      return Math.exp(mu + sigma * sigma / 2);
    }
    return 0;
  };

  const getVariance = () => {
    if (distribution === 'normal') return Math.pow(params.normal.sigma, 2);
    if (distribution === 'exponential') return 1 / Math.pow(params.exponential.lambda, 2);
    if (distribution === 'uniform') return Math.pow(params.uniform.b - params.uniform.a, 2) / 12;
    if (distribution === 'gamma') return params.gamma.k * Math.pow(params.gamma.theta, 2);
    if (distribution === 'beta') {
      const { alpha, beta } = params.beta;
      return (alpha * beta) / (Math.pow(alpha + beta, 2) * (alpha + beta + 1));
    }
    if (distribution === 'lognormal') {
      const { mu, sigma } = params.lognormal;
      return (Math.exp(sigma * sigma) - 1) * Math.exp(2 * mu + sigma * sigma);
    }
    return 0;
  };

  // Generate points for curve
  const generateCurve = () => {
    const points = [];
    let xMin, xMax, step;
    
    if (distribution === 'normal') {
      const { mu, sigma } = params.normal;
      xMin = mu - 4 * sigma;
      xMax = mu + 4 * sigma;
      step = (xMax - xMin) / 200;
      
      for (let x = xMin; x <= xMax; x += step) {
        points.push({ x, y: normalPDF(x, mu, sigma) });
      }
    } else if (distribution === 'exponential') {
      const { lambda } = params.exponential;
      xMin = 0;
      xMax = 10 / lambda;
      step = xMax / 200;
      
      for (let x = xMin; x <= xMax; x += step) {
        points.push({ x, y: exponentialPDF(x, lambda) });
      }
    } else if (distribution === 'uniform') {
      const { a, b } = params.uniform;
      xMin = a - 1;
      xMax = b + 1;
      
      points.push({ x: xMin, y: 0 });
      points.push({ x: a, y: 0 });
      points.push({ x: a, y: uniformPDF(a + 0.01, a, b) });
      points.push({ x: b, y: uniformPDF(b - 0.01, a, b) });
      points.push({ x: b, y: 0 });
      points.push({ x: xMax, y: 0 });
    } else if (distribution === 'gamma') {
      const { k, theta } = params.gamma;
      xMin = 0;
      xMax = k * theta + 5 * Math.sqrt(k * theta * theta);
      step = xMax / 200;
      
      for (let x = xMin; x <= xMax; x += step) {
        points.push({ x, y: gammaPDF(x, k, theta) });
      }
    } else if (distribution === 'beta') {
      const { alpha, beta } = params.beta;
      xMin = 0;
      xMax = 1;
      step = 1 / 200;
      
      for (let x = 0.001; x <= 0.999; x += step) {
        points.push({ x, y: betaPDF(x, alpha, beta) });
      }
    } else if (distribution === 'lognormal') {
      const { mu, sigma } = params.lognormal;
      xMin = 0;
      xMax = Math.exp(mu + 3 * sigma);
      step = xMax / 200;
      
      for (let x = 0.01; x <= xMax; x += step) {
        points.push({ x, y: lognormalPDF(x, mu, sigma) });
      }
    }
    
    return { points, xMin, xMax };
  };

  const { points, xMin, xMax } = generateCurve();
  const maxY = Math.max(...points.map(p => p.y));
  
  // SVG dimensions
  const width = 700;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scales
  const xScale = (x) => margin.left + ((x - xMin) / (xMax - xMin)) * chartWidth;
  const yScale = (y) => margin.top + chartHeight - (y / maxY) * chartHeight;

  // Convert points to SVG path
  const pathData = points.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`
  ).join(' ');

  const expectedValue = getExpectedValue();
  const variance = getVariance();
  const stdDev = Math.sqrt(variance);

  const handleParamChange = (param, value) => {
    setParams({
      ...params,
      [distribution]: {
        ...params[distribution],
        [param]: parseFloat(value)
      }
    });
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '1400px', 
      margin: '0 auto' 
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Expected Value of Continuous Distribution
      </h1>

      {/* Main content area */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        
        {/* SVG Diagram on Left */}
        <svg 
          key={`${distribution}-${JSON.stringify(params[distribution])}`}
          width={width} 
          height={height} 
          style={{ 
            border: '1px solid #dee2e6', 
            borderRadius: '8px', 
            backgroundColor: 'white',
            flexShrink: 0
          }}
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <g key={i}>
              <line
                x1={margin.left}
                y1={margin.top + chartHeight - (i * chartHeight / 4)}
                x2={width - margin.right}
                y2={margin.top + chartHeight - (i * chartHeight / 4)}
                stroke="#e9ecef"
                strokeWidth="1"
              />
              <text
                x={margin.left - 10}
                y={margin.top + chartHeight - (i * chartHeight / 4) + 4}
                textAnchor="end"
                fontSize="12"
                fill="#6c757d"
              >
                {((i * maxY / 4)).toFixed(2)}
              </text>
            </g>
          ))}

          {/* X-axis ticks */}
          {[0, 1, 2, 3, 4].map(i => {
            const x = xMin + (i * (xMax - xMin) / 4);
            return (
              <g key={i}>
                <line
                  x1={xScale(x)}
                  y1={margin.top + chartHeight}
                  x2={xScale(x)}
                  y2={margin.top + chartHeight + 5}
                  stroke="#333"
                  strokeWidth="1"
                />
                <text
                  x={xScale(x)}
                  y={margin.top + chartHeight + 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#333"
                >
                  {x.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Area under curve (shaded) */}
          <path
            d={`${pathData} L ${xScale(points[points.length - 1].x)} ${yScale(0)} L ${xScale(points[0].x)} ${yScale(0)} Z`}
            fill="#4A90E2"
            opacity="0.2"
          />

          {/* PDF Curve */}
          <path
            d={pathData}
            fill="none"
            stroke="#4A90E2"
            strokeWidth="3"
          />

          {/* Expected value line */}
          <line
            x1={xScale(expectedValue)}
            y1={margin.top}
            x2={xScale(expectedValue)}
            y2={margin.top + chartHeight}
            stroke="#e74c3c"
            strokeWidth="3"
            strokeDasharray="8,4"
          />

          {/* Expected value label */}
          <rect
            x={xScale(expectedValue) - 45}
            y={margin.top - 30}
            width={90}
            height={25}
            fill="#e74c3c"
            rx="5"
          />
          <text
            x={xScale(expectedValue)}
            y={margin.top - 12}
            textAnchor="middle"
            fontSize="13"
            fill="white"
            fontWeight="bold"
          >
            E[X] = {expectedValue.toFixed(2)}
          </text>

          {/* Axes */}
          <line 
            x1={margin.left} 
            y1={margin.top + chartHeight} 
            x2={width - margin.right} 
            y2={margin.top + chartHeight} 
            stroke="#333" 
            strokeWidth="2" 
          />
          <line 
            x1={margin.left} 
            y1={margin.top} 
            x2={margin.left} 
            y2={margin.top + chartHeight} 
            stroke="#333" 
            strokeWidth="2" 
          />

          {/* Axis labels */}
          <text 
            x={(margin.left + width - margin.right) / 2} 
            y={height - 10} 
            textAnchor="middle" 
            fontSize="14" 
            fill="#333" 
            fontWeight="bold"
          >
            x
          </text>
          <text 
            x={20} 
            y={(margin.top + margin.top + chartHeight) / 2} 
            textAnchor="middle" 
            fontSize="14" 
            fill="#333" 
            fontWeight="bold" 
            transform={`rotate(-90, 20, ${(margin.top + margin.top + chartHeight) / 2})`}
          >
            f(x)
          </text>
        </svg>

        {/* Right side panel */}
        <div style={{ flex: 1, minWidth: '400px' }}>
          
          {/* Distribution selector */}
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '8px', 
            marginBottom: '20px',
            border: '1px solid #dee2e6'
          }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontWeight: 'bold', 
              color: '#495057' 
            }}>
              Select Distribution:
            </label>
            <select
              value={distribution}
              onChange={(e) => setDistribution(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '14px',
                border: '1px solid #ced4da',
                borderRadius: '5px',
                backgroundColor: 'white'
              }}
            >
              <option value="normal">Normal (Gaussian)</option>
              <option value="exponential">Exponential</option>
              <option value="uniform">Uniform</option>
              <option value="gamma">Gamma</option>
              <option value="beta">Beta</option>
              <option value="lognormal">Log-Normal</option>
            </select>
          </div>

          {/* Parameters */}
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '8px', 
            marginBottom: '20px',
            border: '1px solid #dee2e6'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#495057' }}>
              Adjust Parameters:
            </h3>

            {distribution === 'normal' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Mean (μ): {params.normal.mu.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={params.normal.mu}
                    onChange={(e) => handleParamChange('mu', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Standard Deviation (σ): {params.normal.sigma.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.1"
                    value={params.normal.sigma}
                    onChange={(e) => handleParamChange('sigma', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </>
            )}

            {distribution === 'exponential' && (
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                  Rate (λ): {params.exponential.lambda.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={params.exponential.lambda}
                  onChange={(e) => handleParamChange('lambda', e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>
            )}

            {distribution === 'uniform' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Lower bound (a): {params.uniform.a.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={params.uniform.a}
                    onChange={(e) => handleParamChange('a', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Upper bound (b): {params.uniform.b.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="10"
                    step="0.1"
                    value={params.uniform.b}
                    onChange={(e) => handleParamChange('b', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </>
            )}

            {distribution === 'gamma' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Shape (k): {params.gamma.k.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={params.gamma.k}
                    onChange={(e) => handleParamChange('k', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Scale (θ): {params.gamma.theta.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.5"
                    value={params.gamma.theta}
                    onChange={(e) => handleParamChange('theta', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </>
            )}

            {distribution === 'beta' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Alpha (α): {params.beta.alpha.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={params.beta.alpha}
                    onChange={(e) => handleParamChange('alpha', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Beta (β): {params.beta.beta.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={params.beta.beta}
                    onChange={(e) => handleParamChange('beta', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </>
            )}

            {distribution === 'lognormal' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Log-mean (μ): {params.lognormal.mu.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.1"
                    value={params.lognormal.mu}
                    onChange={(e) => handleParamChange('mu', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: 'bold' }}>
                    Log-std (σ): {params.lognormal.sigma.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="1.5"
                    step="0.1"
                    value={params.lognormal.sigma}
                    onChange={(e) => handleParamChange('sigma', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </div>
              </>
            )}
          </div>

          {/* Statistics */}
          <div style={{ 
            backgroundColor: '#e7f3ff', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #b3d9ff',
            marginBottom: '20px'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#0066cc', fontSize: '16px' }}>
              Distribution Statistics:
            </h3>
            <div style={{ fontSize: '14px', color: '#333', lineHeight: '1.8' }}>
              <div><strong>Expected Value E[X]:</strong> {expectedValue.toFixed(3)}</div>
              <div><strong>Variance Var(X):</strong> {variance.toFixed(3)}</div>
              <div><strong>Standard Deviation σ:</strong> {stdDev.toFixed(3)}</div>
            </div>
          </div>

          {/* Understanding section */}
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#fff3cd', 
            borderRadius: '8px',
            border: '1px solid #ffc107'
          }}>
            <h4 style={{ marginTop: 0, color: '#856404', fontSize: '16px' }}>
              Understanding Continuous Distributions:
            </h4>
            <p style={{ margin: '10px 0', lineHeight: '1.6', color: '#333', fontSize: '13px' }}>
              For continuous distributions, the <strong>expected value</strong> is calculated as:
            </p>
            <p style={{ 
              margin: '10px 0', 
              fontFamily: 'monospace', 
              backgroundColor: 'white', 
              padding: '8px', 
              borderRadius: '5px',
              fontSize: '14px'
            }}>
              E[X] = ∫ x · f(x) dx
            </p>
            <p style={{ margin: '10px 0 0 0', lineHeight: '1.6', color: '#333', fontSize: '13px' }}>
              The shaded area under the curve represents the probability density function (PDF). The red dashed line 
              shows the expected value - the "balance point" of the distribution. Adjust the parameters to see how 
              the shape changes and how E[X] moves accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}