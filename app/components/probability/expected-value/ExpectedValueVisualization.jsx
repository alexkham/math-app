import React, { useState } from 'react';

export default function ExpectedValueVisualization() {
  const [values, setValues] = useState([
    { x: 1, p: 0.1 },
    { x: 2, p: 0.15 },
    { x: 3, p: 0.25 },
    { x: 4, p: 0.3 },
    { x: 5, p: 0.15 },
    { x: 6, p: 0.05 }
  ]);

  const calculateExpectedValue = () => {
    return values.reduce((sum, val) => sum + val.x * val.p, 0);
  };

  const handleProbabilityChange = (index, newP) => {
    const newValues = [...values];
    newValues[index].p = parseFloat(newP) || 0;
    
    // Normalize probabilities to sum to 1
    const total = newValues.reduce((sum, v) => sum + v.p, 0);
    if (total > 0) {
      newValues.forEach(v => v.p = v.p / total);
    }
    
    setValues(newValues);
  };

  const expectedValue = calculateExpectedValue();
  const maxP = Math.max(...values.map(v => v.p));
  const scale = 300 / (maxP || 1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>
        Expected Value of Discrete Distribution
      </h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '1px solid #dee2e6'
      }}>
        <div style={{ fontSize: '16px', marginBottom: '10px', color: '#495057' }}>
          <strong>Formula:</strong> E[X] = Σ x · P(X = x)
        </div>
        <div style={{ fontSize: '20px', color: '#e74c3c', fontWeight: 'bold' }}>
          Expected Value: {expectedValue.toFixed(3)}
        </div>
      </div>

      <svg width="700" height="400" style={{ border: '1px solid #dee2e6', borderRadius: '8px', backgroundColor: 'white' }}>
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <g key={i}>
            <line
              x1="60"
              y1={350 - i * 70}
              x2="660"
              y2={350 - i * 70}
              stroke="#e9ecef"
              strokeWidth="1"
            />
            <text
              x="45"
              y={355 - i * 70}
              textAnchor="end"
              fontSize="12"
              fill="#6c757d"
            >
              {(i * 0.2).toFixed(1)}
            </text>
          </g>
        ))}

        {/* Bars for probability distribution */}
        {values.map((val, idx) => {
          const barHeight = val.p * scale;
          const xPos = 100 + idx * 90;
          const yPos = 350 - barHeight;
          
          return (
            <g key={idx}>
              {/* Bar */}
              <rect
                x={xPos}
                y={yPos}
                width="60"
                height={barHeight}
                fill="#4A90E2"
                opacity="0.7"
                stroke="#2E5C8A"
                strokeWidth="2"
              />
              
              {/* X value label */}
              <text
                x={xPos + 30}
                y="375"
                textAnchor="middle"
                fontSize="14"
                fill="#333"
                fontWeight="bold"
              >
                {val.x}
              </text>
              
              {/* Probability label on bar */}
              <text
                x={xPos + 30}
                y={yPos - 5}
                textAnchor="middle"
                fontSize="12"
                fill="#2E5C8A"
                fontWeight="bold"
              >
                {val.p.toFixed(3)}
              </text>

              {/* Contribution to expected value */}
              <text
                x={xPos + 30}
                y={yPos + barHeight/2 + 5}
                textAnchor="middle"
                fontSize="11"
                fill="white"
                fontWeight="bold"
              >
                {(val.x * val.p).toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* Expected value line */}
        <line
          x1={100 + (expectedValue - 1) * 90}
          y1="30"
          x2={100 + (expectedValue - 1) * 90}
          y2="350"
          stroke="#e74c3c"
          strokeWidth="3"
          strokeDasharray="8,4"
        />
        
        {/* Expected value label */}
        <text
          x={100 + (expectedValue - 1) * 90}
          y="20"
          textAnchor="middle"
          fontSize="14"
          fill="#e74c3c"
          fontWeight="bold"
        >
          E[X] = {expectedValue.toFixed(3)}
        </text>

        {/* Axes */}
        <line x1="60" y1="350" x2="660" y2="350" stroke="#333" strokeWidth="2" />
        <line x1="60" y1="10" x2="60" y2="350" stroke="#333" strokeWidth="2" />

        {/* Axis labels */}
        <text x="360" y="395" textAnchor="middle" fontSize="16" fill="#333" fontWeight="bold">
          Value (x)
        </text>
        <text x="25" y="180" textAnchor="middle" fontSize="16" fill="#333" fontWeight="bold" transform="rotate(-90, 25, 180)">
          Probability P(X = x)
        </text>
      </svg>

      {/* Interactive controls */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Adjust Probabilities:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
          {values.map((val, idx) => (
            <div key={idx} style={{ 
              padding: '15px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '8px',
              border: '1px solid #dee2e6'
            }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#495057' }}>
                P(X = {val.x})
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={val.p}
                onChange={(e) => handleProbabilityChange(idx, e.target.value)}
                style={{ width: '100%', marginBottom: '5px' }}
              />
              <div style={{ textAlign: 'center', color: '#6c757d', fontSize: '14px' }}>
                {val.p.toFixed(3)}
              </div>
              <div style={{ textAlign: 'center', color: '#4A90E2', fontSize: '12px', marginTop: '5px' }}>
                Contribution: {(val.x * val.p).toFixed(3)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        marginTop: '25px', 
        padding: '15px', 
        backgroundColor: '#e7f3ff', 
        borderRadius: '8px',
        border: '1px solid #b3d9ff'
      }}>
        <h4 style={{ marginTop: 0, color: '#0066cc' }}>Understanding Expected Value:</h4>
        <p style={{ margin: '10px 0', lineHeight: '1.6', color: '#333' }}>
          The <strong>expected value</strong> is the weighted average of all possible values, 
          where each value is weighted by its probability. The red dashed line shows where 
          the expected value falls on the x-axis.
        </p>
        <p style={{ margin: '10px 0', lineHeight: '1.6', color: '#333' }}>
          Each bar shows the probability of that outcome, and the number inside shows 
          that value&apos;s contribution to the expected value (x · P(X = x)).
        </p>
      </div>
    </div>
  );
}