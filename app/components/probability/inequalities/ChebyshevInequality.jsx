import React, { useState } from 'react';

export default function ChebyshevInequality() {
  const [mean, setMean] = useState(10);
  const [variance, setVariance] = useState(4);
  const [deviation, setDeviation] = useState(3);
  const [distribution, setDistribution] = useState('normal');

  const stdDev = Math.sqrt(variance);
  const chebyshevBound = deviation > 0 ? variance / (deviation * deviation) : 0;
  const chebyshevBoundPercent = (Math.min(chebyshevBound, 1) * 100).toFixed(1);

  const lowerBound = mean - deviation;
  const upperBound = mean + deviation;

  const minX = Math.max(0, mean - 4 * stdDev);
  const maxX = mean + 4 * stdDev;
  
  const generateDistribution = () => {
    const pts = [];
    
    if (distribution === 'normal') {
      const sigma = stdDev;
      const mu = mean;
      for (let x = minX; x <= maxX; x += 0.2) {
        const y = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
        pts.push({ x, y, type: 'continuous' });
      }
    } else if (distribution === 'exponential') {
      const lambda = 1 / mean;
      for (let x = 0; x <= maxX; x += 0.2) {
        pts.push({ x, y: lambda * Math.exp(-lambda * x), type: 'continuous' });
      }
    } else if (distribution === 'uniform') {
      const a = mean - Math.sqrt(3 * variance);
      const b = mean + Math.sqrt(3 * variance);
      for (let x = Math.max(0, a - 5); x <= b + 5; x += 0.2) {
        pts.push({ x, y: (x >= a && x <= b ? 1/(b-a) : 0), type: 'continuous' });
      }
    } else if (distribution === 'poisson') {
      const lambda = mean;
      for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
        const pmf = (Math.pow(lambda, x) * Math.exp(-lambda)) / factorial(x);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'binomial') {
      const p = 0.4;
      const n = Math.round(mean / p);
      for (let x = 0; x <= Math.min(n, maxX); x += 1) {
        const pmf = binomialCoeff(n, x) * Math.pow(p, x) * Math.pow(1-p, n-x);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'geometric') {
      const p = 1 / mean;
      for (let x = 1; x <= Math.min(maxX, 50); x += 1) {
        const pmf = p * Math.pow(1-p, x-1);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'discrete_uniform') {
      const n = Math.round(2 * mean - 1);
      for (let x = 1; x <= Math.min(n, maxX); x += 1) {
        pts.push({ x, y: 1/n, type: 'discrete' });
      }
    } else if (distribution === 'negative_binomial') {
      const r = 5;
      const p = r / (mean + r);
      for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
        const pmf = binomialCoeff(x + r - 1, x) * Math.pow(p, r) * Math.pow(1-p, x);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'hypergeometric') {
      const N = 50;
      const K = Math.round(N * 0.6);
      const n = Math.round(mean * N / K);
      for (let x = Math.max(0, n + K - N); x <= Math.min(n, K, maxX); x += 1) {
        const pmf = (binomialCoeff(K, x) * binomialCoeff(N - K, n - x)) / binomialCoeff(N, n);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    }
    
    return pts;
  };
  
  const factorial = (n) => {
    if (n > 170) return Infinity;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  };
  
  const binomialCoeff = (n, k) => {
    if (k > n || k < 0) return 0;
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 0; i < Math.min(k, n - k); i++) {
      result *= (n - i) / (i + 1);
    }
    return result;
  };
  
  const points = generateDistribution();
  const isDiscrete = points.length > 0 && points[0].type === 'discrete';
  const maxY = Math.max(...points.map(p => p.y));
  const width = 700;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 60 };

  const scaleX = (x) => padding.left + ((x - minX) / (maxX - minX)) * (width - padding.left - padding.right);
  const scaleY = (y) => height - padding.bottom - (y / maxY) * (height - padding.top - padding.bottom);

  const curvePath = !isDiscrete ? points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)},${scaleY(p.y)}`).join(' ') : '';

  const leftTailPoints = points.filter(p => p.x < lowerBound);
  const rightTailPoints = points.filter(p => p.x > upperBound);
  
  let leftShadedPath = '';
  if (leftTailPoints.length > 0 && !isDiscrete) {
    leftShadedPath = leftTailPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)},${scaleY(p.y)}`).join(' ');
    leftShadedPath += ` L ${scaleX(leftTailPoints[leftTailPoints.length-1].x)},${scaleY(0)} L ${scaleX(leftTailPoints[0].x)},${scaleY(0)} Z`;
  }
  
  let rightShadedPath = '';
  if (rightTailPoints.length > 0 && !isDiscrete) {
    rightShadedPath = rightTailPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)},${scaleY(p.y)}`).join(' ');
    rightShadedPath += ` L ${scaleX(rightTailPoints[rightTailPoints.length-1].x)},${scaleY(0)} L ${scaleX(rightTailPoints[0].x)},${scaleY(0)} Z`;
  }

  const calculateActualProb = () => {
    if (distribution === 'normal') {
      const sigma = stdDev;
      const zLower = (lowerBound - mean) / sigma;
      const zUpper = (upperBound - mean) / sigma;
      return normalCDF(zLower) + (1 - normalCDF(zUpper));
    } else if (distribution === 'exponential') {
      const lambda = 1 / mean;
      const leftProb = lowerBound <= 0 ? 0 : (1 - Math.exp(-lambda * lowerBound));
      const rightProb = Math.exp(-lambda * upperBound);
      return leftProb + rightProb;
    } else if (distribution === 'uniform') {
      const a = mean - Math.sqrt(3 * variance);
      const b = mean + Math.sqrt(3 * variance);
      const leftProb = lowerBound <= a ? 0 : Math.min((lowerBound - a) / (b - a), 1);
      const rightProb = upperBound >= b ? 0 : Math.max(0, (b - upperBound) / (b - a));
      return leftProb + rightProb;
    } else if (distribution === 'poisson' || distribution === 'binomial' || distribution === 'geometric' || distribution === 'discrete_uniform' || distribution === 'negative_binomial' || distribution === 'hypergeometric') {
      return points.filter(p => p.x < lowerBound || p.x > upperBound).reduce((sum, p) => sum + p.y, 0);
    }
    return 0;
  };
  
  const normalCDF = (z) => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
  };

  const actualProb = calculateActualProb();
  const actualProbPercent = (actualProb * 100).toFixed(1);

  const xAxisTicks = [];
  const range = maxX - minX;
  const step = range > 40 ? 10 : range > 20 ? 5 : 2;
  for (let x = Math.ceil(minX / step) * step; x <= maxX; x += step) {
    xAxisTicks.push(x);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#1e40af', marginBottom: '20px' }}>Chebyshev Inequality Visualizer</h2>
      
      <div style={{ background: '#dbeafe', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '2px solid #3b82f6' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>P(|X - μ| ≥ a) ≤ σ² / a²</div>
        <div style={{ fontSize: '14px', textAlign: 'center', color: '#1e40af' }}>
          P(|X - {mean}| ≥ {deviation}) ≤ {variance} / {(deviation * deviation).toFixed(1)} = {chebyshevBound.toFixed(3)} = {chebyshevBoundPercent}%
        </div>
        <div style={{ fontSize: '13px', textAlign: 'center', color: '#1e40af', marginTop: '8px' }}>Actual: {actualProbPercent}%</div>
      </div>

      <svg width={width} height={height} style={{ border: '1px solid #d1d5db', borderRadius: '8px', background: 'white', display: 'block', margin: '0 auto' }}>
        {[0, 0.25, 0.5, 0.75, 1].map((frac) => (
          <line key={frac} x1={padding.left} y1={scaleY(frac * maxY)} x2={width - padding.right} y2={scaleY(frac * maxY)} stroke="#e5e7eb" strokeWidth="1" />
        ))}
        <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#374151" strokeWidth="2" />
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="#374151" strokeWidth="2" />
        <text x={width / 2} y={height - 15} textAnchor="middle" fontSize="14" fill="#374151">x</text>
        <text x={20} y={height / 2} textAnchor="middle" fontSize="14" fill="#374151" transform={`rotate(-90, 20, ${height / 2})`}>{isDiscrete ? 'PMF' : 'PDF'}</text>
        
        {isDiscrete ? (
          <>
            {points.map((p, i) => (
              <g key={i}>
                <line 
                  x1={scaleX(p.x)} 
                  y1={scaleY(0)} 
                  x2={scaleX(p.x)} 
                  y2={scaleY(p.y)} 
                  stroke={(p.x < lowerBound || p.x > upperBound) ? '#ef4444' : '#2563eb'} 
                  strokeWidth="3"
                  opacity={(p.x < lowerBound || p.x > upperBound) ? 0.7 : 1}
                />
                <circle 
                  cx={scaleX(p.x)} 
                  cy={scaleY(p.y)} 
                  r="4" 
                  fill={(p.x < lowerBound || p.x > upperBound) ? '#ef4444' : '#2563eb'}
                />
              </g>
            ))}
          </>
        ) : (
          <>
            {leftShadedPath && <path d={leftShadedPath} fill="#ef4444" opacity="0.3" />}
            {rightShadedPath && <path d={rightShadedPath} fill="#ef4444" opacity="0.3" />}
            <path d={curvePath} fill="none" stroke="#2563eb" strokeWidth="3" />
          </>
        )}
        
        <line x1={scaleX(mean)} y1={padding.top} x2={scaleX(mean)} y2={height - padding.bottom} stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
        <text x={scaleX(mean)} y={padding.top - 10} textAnchor="middle" fontSize="13" fill="#10b981" fontWeight="bold">μ={mean}</text>
        
        <line x1={scaleX(lowerBound)} y1={padding.top} x2={scaleX(lowerBound)} y2={height - padding.bottom} stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
        <text x={scaleX(lowerBound)} y={padding.top - 10} textAnchor="middle" fontSize="13" fill="#ef4444" fontWeight="bold">μ-a</text>
        
        <line x1={scaleX(upperBound)} y1={padding.top} x2={scaleX(upperBound)} y2={height - padding.bottom} stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
        <text x={scaleX(upperBound)} y={padding.top - 10} textAnchor="middle" fontSize="13" fill="#ef4444" fontWeight="bold">μ+a</text>
        
        {xAxisTicks.map((x) => (
          <g key={x}>
            <line x1={scaleX(x)} y1={height - padding.bottom} x2={scaleX(x)} y2={height - padding.bottom + 5} stroke="#374151" strokeWidth="2" />
            <text x={scaleX(x)} y={height - padding.bottom + 20} textAnchor="middle" fontSize="12" fill="#374151">{x.toFixed(0)}</text>
          </g>
        ))}
      </svg>

      <div style={{ marginTop: '30px', marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#374151', textAlign: 'center' }}>Distribution Type</label>
        <select 
          value={distribution} 
          onChange={(e) => setDistribution(e.target.value)}
          style={{ display: 'block', margin: '0 auto', padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #d1d5db' }}
        >
          <optgroup label="Continuous">
            <option value="normal">Normal</option>
            <option value="exponential">Exponential</option>
            <option value="uniform">Uniform</option>
          </optgroup>
          <optgroup label="Discrete">
            <option value="poisson">Poisson</option>
            <option value="binomial">Binomial</option>
            <option value="geometric">Geometric</option>
            <option value="negative_binomial">Negative Binomial</option>
            <option value="hypergeometric">Hypergeometric</option>
            <option value="discrete_uniform">Discrete Uniform</option>
          </optgroup>
        </select>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#10b981', textAlign: 'center' }}>Mean μ: {mean}</label>
          <input type="range" min="5" max="20" step="0.5" value={mean} onChange={(e) => setMean(parseFloat(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#6366f1', textAlign: 'center' }}>Variance σ²: {variance}</label>
          <input type="range" min="1" max="16" step="0.5" value={variance} onChange={(e) => setVariance(parseFloat(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#ef4444', textAlign: 'center' }}>Distance from mean (threshold a): {deviation}</label>
          <input type="range" min="0.5" max="10" step="0.5" value={deviation} onChange={(e) => setDeviation(parseFloat(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', background: '#f3f4f6', borderRadius: '8px', fontSize: '14px' }}>
        <p><strong>Chebyshev Inequality:</strong> For any distribution with mean μ and variance σ²: P(|X - μ| ≥ a) ≤ σ² / a²</p>
        <p>{isDiscrete ? 'Red bars' : 'Red areas'} show P(X &lt; μ-a) + P(X &gt; μ+a). Bound: {chebyshevBoundPercent}%, Actual: {actualProbPercent}%</p>
      </div>
    </div>
  );
}