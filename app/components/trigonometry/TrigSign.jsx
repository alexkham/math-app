import React, { useState } from 'react';

const TrigSigns = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState(1);
  const [selectedFunction, setSelectedFunction] = useState('sin');
  const [showExplanation, setShowExplanation] = useState(true);

  const functions = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];
  
  const signs = {
    1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
    2: { sin: '+', cos: '−', tan: '−', csc: '+', sec: '−', cot: '−' },
    3: { sin: '−', cos: '−', tan: '+', csc: '−', sec: '−', cot: '+' },
    4: { sin: '−', cos: '+', tan: '−', csc: '−', sec: '+', cot: '−' }
  };

  const coordinates = {
    1: { x: '+', y: '+' },
    2: { x: '−', y: '+' },
    3: { x: '−', y: '−' },
    4: { x: '+', y: '−' }
  };

  const angles = {
    1: { degrees: '45°', radians: 'π/4' },
    2: { degrees: '135°', radians: '3π/4' },
    3: { degrees: '225°', radians: '5π/4' },
    4: { degrees: '315°', radians: '7π/4' }
  };

  const getExplanation = (func, quadrant) => {
    const coord = coordinates[quadrant];
    const explanations = {
      sin: `sin θ = y/r. Since y is ${coord.y === '+' ? 'positive' : 'negative'} and r is always positive, sin θ is ${signs[quadrant].sin === '+' ? 'positive' : 'negative'}.`,
      cos: `cos θ = x/r. Since x is ${coord.x === '+' ? 'positive' : 'negative'} and r is always positive, cos θ is ${signs[quadrant].cos === '+' ? 'positive' : 'negative'}.`,
      tan: `tan θ = y/x = sin θ/cos θ. Since y is ${coord.y === '+' ? 'positive' : 'negative'} and x is ${coord.x === '+' ? 'positive' : 'negative'}, tan θ is ${signs[quadrant].tan === '+' ? 'positive' : 'negative'}.`,
      csc: `csc θ = r/y = 1/sin θ. Since r is always positive and y is ${coord.y === '+' ? 'positive' : 'negative'}, csc θ is ${signs[quadrant].csc === '+' ? 'positive' : 'negative'}.`,
      sec: `sec θ = r/x = 1/cos θ. Since r is always positive and x is ${coord.x === '+' ? 'positive' : 'negative'}, sec θ is ${signs[quadrant].sec === '+' ? 'positive' : 'negative'}.`,
      cot: `cot θ = x/y = cos θ/sin θ. Since x is ${coord.x === '+' ? 'positive' : 'negative'} and y is ${coord.y === '+' ? 'positive' : 'negative'}, cot θ is ${signs[quadrant].cot === '+' ? 'positive' : 'negative'}.`
    };
    return explanations[func];
  };

  const getSignColor = (sign) => {
    return sign === '+' ? { color: '#22c55e', fontWeight: 'bold' } : { color: '#ef4444', fontWeight: 'bold' };
  };

  const getQuadrantColor = (q) => {
    const colors = {
      1: '#3b82f6',
      2: '#22c55e', 
      3: '#eab308',
      4: '#ef4444'
    };
    return colors[q];
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Trigonometric Functions Signs: Mathematical Reasoning
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Left Panel - Unit Circle and Controls */}
        <div>
          {/* Quadrant Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {[1, 2, 3, 4].map(q => (
              <button
                key={q}
                onClick={() => setSelectedQuadrant(q)}
                style={{
                  padding: '12px',
                  border: selectedQuadrant === q ? `2px solid ${getQuadrantColor(q)}` : '1px solid #ccc',
                  backgroundColor: selectedQuadrant === q ? getQuadrantColor(q) : 'white',
                  color: selectedQuadrant === q ? 'white' : '#333',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                Q{q}: {angles[q].degrees}
              </button>
            ))}
          </div>

          {/* Unit Circle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ position: 'relative' }}>
              <svg width="320" height="320" style={{ border: '1px solid #ddd' }}>
                {/* Grid */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="320" height="320" fill="url(#grid)"/>
                
                {/* Circle */}
                <circle cx="160" cy="160" r="120" fill="none" stroke="#333" strokeWidth="2"/>
                
                {/* Axes */}
                <line x1="160" y1="20" x2="160" y2="300" stroke="#666" strokeWidth="2"/>
                <line x1="40" y1="160" x2="280" y2="160" stroke="#666" strokeWidth="2"/>
                
                {/* Quadrant regions */}
                <path
                  d="M 160 160 L 160 40 A 120 120 0 0 1 280 160 Z"
                  fill={selectedQuadrant === 1 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(200, 200, 200, 0.1)'}
                  stroke={selectedQuadrant === 1 ? '#3b82f6' : '#ccc'}
                  strokeWidth={selectedQuadrant === 1 ? '2' : '1'}
                />
                <path
                  d="M 160 160 L 40 160 A 120 120 0 0 1 160 40 Z"
                  fill={selectedQuadrant === 2 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(200, 200, 200, 0.1)'}
                  stroke={selectedQuadrant === 2 ? '#22c55e' : '#ccc'}
                  strokeWidth={selectedQuadrant === 2 ? '2' : '1'}
                />
                <path
                  d="M 160 160 L 160 280 A 120 120 0 0 1 40 160 Z"
                  fill={selectedQuadrant === 3 ? 'rgba(234, 179, 8, 0.2)' : 'rgba(200, 200, 200, 0.1)'}
                  stroke={selectedQuadrant === 3 ? '#eab308' : '#ccc'}
                  strokeWidth={selectedQuadrant === 3 ? '2' : '1'}
                />
                <path
                  d="M 160 160 L 280 160 A 120 120 0 0 1 160 280 Z"
                  fill={selectedQuadrant === 4 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(200, 200, 200, 0.1)'}
                  stroke={selectedQuadrant === 4 ? '#ef4444' : '#ccc'}
                  strokeWidth={selectedQuadrant === 4 ? '2' : '1'}
                />
                
                {/* Sample point and radius */}
                {(() => {
                  const angleRad = {
                    1: Math.PI / 4,
                    2: 3 * Math.PI / 4,
                    3: 5 * Math.PI / 4,
                    4: 7 * Math.PI / 4
                  }[selectedQuadrant];
                  
                  const x = 160 + 120 * Math.cos(angleRad);
                  const y = 160 - 120 * Math.sin(angleRad);
                  
                  return (
                    <g>
                      {/* Radius line */}
                      <line 
                        x1="160" y1="160" 
                        x2={x} y2={y}
                        stroke={getQuadrantColor(selectedQuadrant)} 
                        strokeWidth="3"
                      />
                      {/* Point */}
                      <circle cx={x} cy={y} r="4" fill={getQuadrantColor(selectedQuadrant)}/>
                      
                      {/* Coordinate lines */}
                      <line x1={x} y1={y} x2={x} y2="160" stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
                      <line x1={x} y1={y} x2="160" y2={y} stroke="#666" strokeWidth="1" strokeDasharray="5,5"/>
                      
                      {/* Labels */}
                      <text x={x + 10} y={y - 5} fontSize="12" fontWeight="bold" fill={getQuadrantColor(selectedQuadrant)}>
                        (x, y)
                      </text>
                      <text x={x/2 + 80} y={y/2 + 85} fontSize="12" fontWeight="bold" fill={getQuadrantColor(selectedQuadrant)}>
                        r
                      </text>
                    </g>
                  );
                })()}
                
                {/* Axis labels */}
                <text x="285" y="155" fontSize="12" fill="#666">+x</text>
                <text x="165" y="35" fontSize="12" fill="#666">+y</text>
                <text x="30" y="155" fontSize="12" fill="#666">-x</text>
                <text x="165" y="305" fontSize="12" fill="#666">-y</text>
                
                {/* Quadrant labels */}
                <text x="200" y="100" fontSize="16" fontWeight="bold" fill="#666">I</text>
                <text x="120" y="100" fontSize="16" fontWeight="bold" fill="#666">II</text>
                <text x="120" y="220" fontSize="16" fontWeight="bold" fill="#666">III</text>
                <text x="200" y="220" fontSize="16" fontWeight="bold" fill="#666">IV</text>
              </svg>
            </div>
          </div>

          {/* Coordinate Info */}
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
              Quadrant {selectedQuadrant} Coordinates
            </h4>
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <div><strong>x-coordinate:</strong> <span style={coordinates[selectedQuadrant].x === '+' ? {color: '#22c55e'} : {color: '#ef4444'}}>{coordinates[selectedQuadrant].x}</span></div>
              <div><strong>y-coordinate:</strong> <span style={coordinates[selectedQuadrant].y === '+' ? {color: '#22c55e'} : {color: '#ef4444'}}>{coordinates[selectedQuadrant].y}</span></div>
              <div><strong>radius (r):</strong> <span style={{color: '#22c55e'}}>always +</span></div>
              <div><strong>Reference angle:</strong> {angles[selectedQuadrant].degrees} ({angles[selectedQuadrant].radians})</div>
            </div>
          </div>
        </div>

        {/* Right Panel - Functions and Explanations */}
        <div>
          {/* Function Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
            {functions.map(func => (
              <button
                key={func}
                onClick={() => setSelectedFunction(func)}
                style={{
                  padding: '12px 8px',
                  border: selectedFunction === func ? '2px solid #333' : '1px solid #ccc',
                  backgroundColor: selectedFunction === func ? '#333' : 'white',
                  color: selectedFunction === func ? 'white' : '#333',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                {func}
              </button>
            ))}
          </div>

          {/* Function Details */}
          <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            overflow: 'hidden',
            backgroundColor: 'white',
            marginBottom: '20px'
          }}>
            <div style={{ 
              backgroundColor: getQuadrantColor(selectedQuadrant), 
              color: 'white',
              padding: '15px', 
              textAlign: 'center'
            }}>
              <h3 style={{ margin: '0', fontSize: '18px' }}>
                {selectedFunction}(θ) in Quadrant {selectedQuadrant}
              </h3>
            </div>
            
            <div style={{ padding: '20px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
                  Sign: <span style={{fontSize: '32px', ...getSignColor(signs[selectedQuadrant][selectedFunction])}}>
                    {signs[selectedQuadrant][selectedFunction]}
                  </span>
                </div>
              </div>
              
              {showExplanation && (
                <div style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '15px', 
                  borderRadius: '6px',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  <strong>Mathematical Reasoning:</strong><br/>
                  {getExplanation(selectedFunction, selectedQuadrant)}
                </div>
              )}
            </div>
          </div>

          {/* All Functions Summary */}
          <div style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            backgroundColor: 'white'
          }}>
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '12px', 
              borderBottom: '1px solid #ddd'
            }}>
              <h4 style={{ margin: '0', fontSize: '16px' }}>
                All Functions in Quadrant {selectedQuadrant}
              </h4>
            </div>
            <div style={{ padding: '15px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {functions.map(func => (
                  <div
                    key={func}
                    onClick={() => setSelectedFunction(func)}
                    style={{
                      padding: '10px',
                      textAlign: 'center',
                      border: selectedFunction === func ? '2px solid #333' : '1px solid #ddd',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      backgroundColor: selectedFunction === func ? '#f8f9fa' : 'white'
                    }}
                  >
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{func}</div>
                    <div style={{ fontSize: '18px', ...getSignColor(signs[selectedQuadrant][func]) }}>
                      {signs[selectedQuadrant][func]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Aid */}
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#333' }}>Key Concepts</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', fontSize: '14px' }}>
          <div>
            <strong>Fundamental Definitions:</strong><br/>
            • sin θ = y/r, cos θ = x/r, tan θ = y/x<br/>
            • csc θ = r/y, sec θ = r/x, cot θ = x/y
          </div>
          <div>
            <strong>Memory Aid "ASTC":</strong><br/>
            • Quadrant I: <strong>A</strong>ll positive<br/>
            • Quadrant II: <strong>S</strong>ine positive<br/>
            • Quadrant III: <strong>T</strong>angent positive<br/>
            • Quadrant IV: <strong>C</strong>osine positive
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrigSigns;