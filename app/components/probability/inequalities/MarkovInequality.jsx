import React, { useState } from 'react';

export default function MarkovInequality() {
  const [expectedValue, setExpectedValue] = useState(10);
  const [threshold, setThreshold] = useState(15);
  const [distribution, setDistribution] = useState('exponential');

  const markovBound = threshold > 0 ? expectedValue / threshold : 0;
  const markovBoundPercent = (Math.min(markovBound, 1) * 100).toFixed(1);

  const maxX = Math.max(threshold * 2.5, expectedValue * 4, 40);
  
  const generateDistribution = () => {
    const pts = [];
    
    if (distribution === 'exponential') {
      const lambda = 1 / expectedValue;
      for (let x = 0; x <= maxX; x += 0.5) {
        pts.push({ x, y: lambda * Math.exp(-lambda * x), type: 'continuous' });
      }
    } else if (distribution === 'normal') {
      const sigma = expectedValue / 2;
      const mu = expectedValue;
      for (let x = 0; x <= maxX; x += 0.5) {
        const y = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sigma, 2));
        pts.push({ x, y, type: 'continuous' });
      }
    } else if (distribution === 'uniform') {
      const b = expectedValue * 2;
      for (let x = 0; x <= maxX; x += 0.5) {
        pts.push({ x, y: (x <= b ? 1/b : 0), type: 'continuous' });
      }
    } else if (distribution === 'poisson') {
      const lambda = expectedValue;
      for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
        const pmf = (Math.pow(lambda, x) * Math.exp(-lambda)) / factorial(x);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'binomial') {
      const p = 0.4;
      const n = Math.round(expectedValue / p);
      for (let x = 0; x <= Math.min(n, maxX); x += 1) {
        const pmf = binomialCoeff(n, x) * Math.pow(p, x) * Math.pow(1-p, n-x);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'geometric') {
      const p = 1 / expectedValue;
      for (let x = 1; x <= Math.min(maxX, 50); x += 1) {
        const pmf = p * Math.pow(1-p, x-1);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'discrete_uniform') {
      const n = Math.round(2 * expectedValue - 1);
      for (let x = 1; x <= Math.min(n, maxX); x += 1) {
        pts.push({ x, y: 1/n, type: 'discrete' });
      }
    } else if (distribution === 'negative_binomial') {
      const r = 5;
      const p = r / (expectedValue + r);
      for (let x = 0; x <= Math.min(maxX, 50); x += 1) {
        const pmf = binomialCoeff(x + r - 1, x) * Math.pow(p, r) * Math.pow(1-p, x);
        pts.push({ x, y: pmf, type: 'discrete' });
      }
    } else if (distribution === 'hypergeometric') {
      const N = 50;
      const K = Math.round(N * 0.6);
      const n = Math.round(expectedValue * N / K);
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

  const scaleX = (x) => padding.left + (x / maxX) * (width - padding.left - padding.right);
  const scaleY = (y) => height - padding.bottom - (y / maxY) * (height - padding.top - padding.bottom);

  const curvePath = !isDiscrete ? points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)},${scaleY(p.y)}`).join(' ') : '';

  const beyondPoints = points.filter(p => p.x >= threshold);
  let shadedPath = '';
  if (beyondPoints.length > 0 && !isDiscrete) {
    shadedPath = beyondPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)},${scaleY(p.y)}`).join(' ');
    shadedPath += ` L ${scaleX(maxX)},${scaleY(0)} L ${scaleX(threshold)},${scaleY(0)} Z`;
  }

  const calculateActualProb = () => {
    if (distribution === 'exponential') {
      const lambda = 1 / expectedValue;
      return Math.exp(-lambda * threshold);
    } else if (distribution === 'normal') {
      const sigma = expectedValue / 2;
      const mu = expectedValue;
      const z = (threshold - mu) / sigma;
      return 1 - normalCDF(z);
    } else if (distribution === 'uniform') {
      const b = expectedValue * 2;
      return threshold >= b ? 0 : Math.max(0, (b - threshold) / b);
    } else if (distribution === 'poisson' || distribution === 'binomial' || distribution === 'geometric' || distribution === 'discrete_uniform' || distribution === 'negative_binomial' || distribution === 'hypergeometric') {
      return points.filter(p => p.x >= threshold).reduce((sum, p) => sum + p.y, 0);
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

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#1e40af', marginBottom: '20px' }}>Markov Inequality Visualizer</h2>
      
      <div style={{ background: threshold <= expectedValue ? '#fee2e2' : '#fef3c7', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: threshold <= expectedValue ? '2px solid #ef4444' : '2px solid #f59e0b' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>P(X ≥ a) ≤ E[X] / a</div>
        {threshold <= expectedValue ? (
          <div style={{ fontSize: '14px', textAlign: 'center', color: '#991b1b', fontWeight: 'bold' }}>
            ⚠️ Markov bound is useless when a ≤ E[X]<br/>
            Bound: {markovBound.toFixed(3)} ≥ 1 (tells us nothing!)<br/>
            Set a &gt; E[X] = {expectedValue} for meaningful bound
          </div>
        ) : (
          <>
            <div style={{ fontSize: '14px', textAlign: 'center', color: '#92400e' }}>P(X ≥ {threshold}) ≤ {expectedValue} / {threshold} = {markovBound.toFixed(3)} = {markovBoundPercent}%</div>
            <div style={{ fontSize: '13px', textAlign: 'center', color: '#92400e', marginTop: '8px' }}>Actual: {actualProbPercent}%</div>
          </>
        )}
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
                  stroke={p.x >= threshold ? '#ef4444' : '#2563eb'} 
                  strokeWidth="3"
                  opacity={p.x >= threshold ? 0.7 : 1}
                />
                <circle 
                  cx={scaleX(p.x)} 
                  cy={scaleY(p.y)} 
                  r="4" 
                  fill={p.x >= threshold ? '#ef4444' : '#2563eb'}
                />
              </g>
            ))}
          </>
        ) : (
          <>
            {shadedPath && <path d={shadedPath} fill="#ef4444" opacity="0.3" />}
            <path d={curvePath} fill="none" stroke="#2563eb" strokeWidth="3" />
          </>
        )}
        
        <line x1={scaleX(expectedValue)} y1={padding.top} x2={scaleX(expectedValue)} y2={height - padding.bottom} stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
        <text x={scaleX(expectedValue)} y={padding.top - 10} textAnchor="middle" fontSize="13" fill="#10b981" fontWeight="bold">E[X]={expectedValue}</text>
        <line x1={scaleX(threshold)} y1={padding.top} x2={scaleX(threshold)} y2={height - padding.bottom} stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
        <text x={scaleX(threshold)} y={padding.top - 10} textAnchor="middle" fontSize="13" fill="#ef4444" fontWeight="bold">a={threshold}</text>
        {[0, 10, 20, 30, 40].filter(x => x <= maxX).map((x) => (
          <g key={x}>
            <line x1={scaleX(x)} y1={height - padding.bottom} x2={scaleX(x)} y2={height - padding.bottom + 5} stroke="#374151" strokeWidth="2" />
            <text x={scaleX(x)} y={height - padding.bottom + 20} textAnchor="middle" fontSize="12" fill="#374151">{x}</text>
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
            <option value="normal">Normal (non-negative range only)</option>
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

      <div style={{ marginTop: '30px', display: 'flex', gap: '40px', justifyContent: 'center' }}>
        <div style={{ flex: '1', maxWidth: '300px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#10b981' }}>E[X]: {expectedValue}</label>
          <input type="range" min="1" max="30" step="0.5" value={expectedValue} onChange={(e) => setExpectedValue(parseFloat(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div style={{ flex: '1', maxWidth: '300px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#ef4444' }}>Threshold a: {threshold}</label>
          <input type="range" min="1" max="40" step="0.5" value={threshold} onChange={(e) => setThreshold(parseFloat(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', background: '#f3f4f6', borderRadius: '8px', fontSize: '14px' }}>
        <p><strong>Markov Inequality:</strong> For non-negative X and a &gt; 0: P(X ≥ a) ≤ E[X] / a</p>
        <p>{isDiscrete ? 'Red bars' : 'Red area'} show{isDiscrete ? '' : 's'} P(X ≥ a). Bound: {markovBoundPercent}%, Actual: {actualProbPercent}%</p>
      </div>
    </div>
  );
}