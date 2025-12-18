'use client';

import React, { useState } from 'react';

const WeightedExpectedValueVisualizer = () => {
  const distributions = {
    'Equal Weights': {
      values: [1, 2, 3, 4, 5, 6],
      probabilities: [1/6, 1/6, 1/6, 1/6, 1/6, 1/6],
    },
    'Pull Right': {
      values: [1, 2, 3, 4, 5, 6],
      probabilities: [0.05, 0.05, 0.1, 0.15, 0.25, 0.4],
    },
    'Pull Left': {
      values: [1, 2, 3, 4, 5, 6],
      probabilities: [0.4, 0.25, 0.15, 0.1, 0.05, 0.05],
    },
    'Pull Center': {
      values: [1, 2, 3, 4, 5, 6],
      probabilities: [0.05, 0.15, 0.3, 0.3, 0.15, 0.05],
    },
    'Pull Extremes': {
      values: [1, 2, 3, 4, 5, 6],
      probabilities: [0.3, 0.1, 0.1, 0.1, 0.1, 0.3],
    },
    'Strong Right Bias': {
      values: [1, 2, 3, 4, 5, 6],
      probabilities: [0.02, 0.03, 0.05, 0.1, 0.2, 0.6],
    },
    'Strong Left Bias': {
      values: [1, 2, 3, 4, 5, 6],
      probabilities: [0.6, 0.2, 0.1, 0.05, 0.03, 0.02],
    },
  };

  const [selectedDist, setSelectedDist] = useState('Equal Weights');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Animation effect
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const distributionNames = Object.keys(distributions);
    
    const interval = setInterval(() => {
      setSelectedDist(current => {
        const currentIndex = distributionNames.indexOf(current);
        const nextIndex = (currentIndex + 1) % distributionNames.length;
        return distributionNames[nextIndex];
      });
    }, 2000); // Change distribution every 2 seconds
    
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  const dist = distributions[selectedDist];
  const values = dist.values;
  const probabilities = dist.probabilities;

  // Calculate expected value (weighted mean)
  const expectedValue = values.reduce((sum, val, i) => sum + val * probabilities[i], 0);
  
  // Calculate simple average (unweighted)
  const simpleAverage = values.reduce((sum, val) => sum + val, 0) / values.length;

  // SVG dimensions
  const width = 900;
  const height = 620;
  const lineY = 250;
  const lineStart = 100;
  const lineEnd = 800;
  const lineLength = lineEnd - lineStart;

  // Scale for positioning values
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const valRange = maxVal - minVal;
  
  const xScale = (value) => {
    if (valRange === 0) return (lineStart + lineEnd) / 2;
    return lineStart + ((value - minVal) / valRange) * lineLength;
  };

  // Max probability for scaling
  const maxProb = Math.max(...probabilities);

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1400px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '10px',
        fontSize: '24px',
        color: '#2c3e50'
      }}>
        Expected Value: Weighted Average Visualization
        {isPlaying && <span style={{ fontSize: '18px', color: '#3B82F6', marginLeft: '10px' }}>● Playing</span>}
      </h2> */}
      
      <p style={{ 
        textAlign: 'center', 
        marginBottom: '20px',
        color: '#555',
        fontSize: '14px',
        maxWidth: '700px',
        margin: '0 auto 20px'
      }}>
        Higher probabilities "pull" the expected value toward them. 
        Watch how E(X) differs from the simple average when probabilities are unequal.
      </p>

      {/* Distribution selector */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
      }}>
        <label style={{ 
          marginRight: '10px', 
          fontWeight: 'bold',
          color: '#2c3e50'
        }}>
          Select Distribution:
        </label>
        <select
          value={selectedDist}
          onChange={(e) => {
            setSelectedDist(e.target.value);
            setIsPlaying(false); // Stop animation when manually selecting
          }}
          style={{
            padding: '8px 15px',
            fontSize: '14px',
            border: '2px solid #3B82F6',
            borderRadius: '5px',
            backgroundColor: 'white',
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          {Object.keys(distributions).map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            padding: '8px 20px',
            fontSize: '14px',
            fontWeight: 'bold',
            border: '2px solid ' + (isPlaying ? '#2563EB' : '#3B82F6'),
            borderRadius: '5px',
            backgroundColor: isPlaying ? '#2563EB' : '#3B82F6',
            color: 'white',
            cursor: 'pointer',
            outline: 'none',
            transition: 'all 0.3s'
          }}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play Animation'}
        </button>
      </div>

      {/* Main content area with diagram and side panel */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {/* SVG Visualization */}
        <svg width={width} height={height} style={{ 
          border: '0.5px solid #ddd', 
          borderRadius: '8px',
          backgroundColor: '#F8FAFC',
          flexShrink: 0
        }}>
        {/* Main horizontal line (value axis) */}
        <line
          x1={lineStart}
          y1={lineY}
          x2={lineEnd}
          y2={lineY}
          stroke="#2c3e50"
          strokeWidth="2"
        />

        {/* Value markers and "weights" */}
        {values.map((value, idx) => {
          const x = xScale(value);
          const prob = probabilities[idx];
          
          // Weight size based on probability - larger minimum for "P=0.XX" text readability
          const weightRadius = 20 + (prob / maxProb) * 18;
          
          // Arrow length proportional to probability (much smaller)
          const arrowLength = 20 + (prob / maxProb) * 30;
          
          return (
            <g key={`value-${idx}`}>
              {/* Value tick mark */}
              <line
                x1={x}
                y1={lineY - 10}
                x2={x}
                y2={lineY + 10}
                stroke="#2c3e50"
                strokeWidth="1.5"
              />
              
              {/* Value label below */}
              <text
                x={x}
                y={lineY + 30}
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill="#2c3e50"
              >
                {value}
              </text>

              {/* "Weight" circle above - size shows probability */}
              <circle
                cx={x}
                cy={lineY - 50 - arrowLength}
                r={weightRadius}
                fill="#3B82F6"
                stroke="#2563EB"
                strokeWidth="2"
                opacity="0.9"
              />

              {/* Probability label in weight - this shows P(X = x) */}
              <text
                x={x}
                y={lineY - 50 - arrowLength + 5}
                textAnchor="middle"
                fontSize="11"
                fontWeight="bold"
                fill="white"
              >
                P={prob.toFixed(2)}
              </text>

              {/* Arrow showing "pull" force */}
              <line
                x1={x}
                y1={lineY - 50 - arrowLength + weightRadius}
                x2={x}
                y2={lineY - 15}
                stroke="#3B82F6"
                strokeWidth={1.5 + (prob / maxProb) * 1.5}
                opacity="0.8"
                markerEnd="url(#arrowhead)"
              />

              {/* Contribution label (value × probability) with calculation */}
              <text
                x={x}
                y={lineY + 45}
                textAnchor="middle"
                fontSize="9"
                fill="#3B82F6"
                fontWeight="bold"
              >
                {value}×{prob.toFixed(2)}
              </text>
              <text
                x={x}
                y={lineY + 57}
                textAnchor="middle"
                fontSize="9"
                fill="#3B82F6"
                fontWeight="bold"
              >
                ={(value * prob).toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 6 3, 0 6"
              fill="#3B82F6"
              opacity="0.8"
            />
          </marker>
        </defs>

        {/* Expected Value indicator */}
        <g>
          {/* E(X) line */}
          <line
            x1={xScale(expectedValue)}
            y1={lineY + 60}
            x2={xScale(expectedValue)}
            y2={lineY + 100}
            stroke="#3B82F6"
            strokeWidth="3"
          />
          
          {/* E(X) label */}
          <rect
            x={xScale(expectedValue) - 60}
            y={lineY + 105}
            width={120}
            height={28}
            fill="#3B82F6"
            rx="5"
          />
          <text
            x={xScale(expectedValue)}
            y={lineY + 125}
            textAnchor="middle"
            fontSize="15"
            fontWeight="bold"
            fill="white"
          >
            E(X) = {expectedValue.toFixed(2)}
          </text>
        </g>

        {/* Simple Average indicator (for comparison) */}
        <g>
          {/* Simple average line */}
          <line
            x1={xScale(simpleAverage)}
            y1={lineY + 60}
            x2={xScale(simpleAverage)}
            y2={lineY + 100}
            stroke="#6B7280"
            strokeWidth="2.5"
            strokeDasharray="5,5"
          />
          
          {/* Simple average label */}
          <rect
            x={xScale(simpleAverage) - 60}
            y={lineY + 148}
            width={120}
            height={25}
            fill="#6B7280"
            rx="5"
          />
          <text
            x={xScale(simpleAverage)}
            y={lineY + 166}
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="white"
          >
            Avg = {simpleAverage.toFixed(2)}
          </text>
        </g>

        {/* Title and explanation */}
        <text
          x={width / 2}
          y={30}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#2c3e50"
        >
          Probability "Weights" Pull the Expected Value
        </text>

        {/* Contribution explanation label */}
        <text
          x={width / 2}
          y={height - 50}
          textAnchor="middle"
          fontSize="11"
          fill="#3B82F6"
          fontWeight="bold"
        >
          Blue numbers show each contribution: x × P(x) = contribution to E(X)
        </text>

        {/* Legend */}
        <g transform={`translate(30, 420)`}>
          <rect x={0} y={0} width={250} height={120} fill="none" stroke="#ddd" strokeWidth="0.5" rx="5" />
          
          {/* Weight circle */}
          <circle cx={20} cy={25} r={12} fill="#3B82F6" stroke="#2563EB" strokeWidth="2" opacity="0.9" />
          <text x={40} y={30} fontSize="12" fill="#2c3e50">
            P(X = x) in circle
          </text>
          
          {/* Pull arrow */}
          <line x1={15} y1={55} x2={25} y2={55} stroke="#3B82F6" strokeWidth="2" opacity="0.8" markerEnd="url(#arrowhead)" />
          <text x={40} y={60} fontSize="12" fill="#2c3e50">
            Pull strength (arrow)
          </text>
          
          {/* E(X) */}
          <line x1={10} y1={85} x2={30} y2={85} stroke="#3B82F6" strokeWidth="3" />
          <text x={40} y={90} fontSize="12" fill="#2c3e50">
            Expected Value E(X)
          </text>
          
          {/* Simple average */}
          <line x1={10} y1={105} x2={30} y2={105} stroke="#6B7280" strokeWidth="2.5" strokeDasharray="5,5" />
          <text x={40} y={110} fontSize="12" fill="#2c3e50">
            Simple Average (unweighted)
          </text>
        </g>
      </svg>

        {/* Right side panel with calculations and explanation */}
        <div style={{ flex: 1, minWidth: '480px' }}>
          {/* Calculation */}
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#fff', 
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '14px',
            marginBottom: '20px'
          }}>
            <h3 style={{ 
              marginTop: '0', 
              color: '#2c3e50',
              fontSize: '18px'
            }}>
              Calculation
            </h3>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              marginTop: '15px'
            }}>
              {/* Expected Value */}
              <div style={{ 
                fontFamily: 'monospace', 
                backgroundColor: '#EFF6FF', 
                padding: '15px', 
                borderRadius: '5px',
                border: '2px solid #3B82F6'
              }}>
                <div style={{ fontWeight: 'bold', color: '#3B82F6', marginBottom: '10px', fontSize: '13px' }}>
                  Expected Value (Weighted):
                </div>
                {values.map((val, idx) => (
                  <div key={idx} style={{ marginBottom: '5px', color: '#2c3e50', fontSize: '12px' }}>
                    {val} × {probabilities[idx].toFixed(2)} = {(val * probabilities[idx]).toFixed(2)}
                  </div>
                ))}
                <div style={{ 
                  borderTop: '2px solid #3B82F6', 
                  paddingTop: '8px', 
                  marginTop: '8px',
                  fontWeight: 'bold',
                  color: '#3B82F6',
                  fontSize: '14px'
                }}>
                  E(X) = {expectedValue.toFixed(3)}
                </div>
              </div>

              {/* Simple Average */}
              <div style={{ 
                fontFamily: 'monospace', 
                backgroundColor: '#F9FAFB', 
                padding: '15px', 
                borderRadius: '5px',
                border: '2px solid #6B7280'
              }}>
                <div style={{ fontWeight: 'bold', color: '#6B7280', marginBottom: '10px', fontSize: '13px' }}>
                  Simple Average (Unweighted):
                </div>
                <div style={{ color: '#2c3e50', marginBottom: '10px', fontSize: '12px' }}>
                  ({values.join(' + ')}) / {values.length}
                </div>
                <div style={{ 
                  borderTop: '2px solid #6B7280', 
                  paddingTop: '8px', 
                  marginTop: '8px',
                  fontWeight: 'bold',
                  color: '#6B7280',
                  fontSize: '14px'
                }}>
                  Avg = {simpleAverage.toFixed(3)}
                </div>
              </div>
            </div>

            <p style={{ 
              marginTop: '15px', 
              color: '#555',
              fontSize: '12px',
              fontStyle: 'italic',
              marginBottom: '0'
            }}>
              Notice: When probabilities are equal, E(X) = Avg. When probabilities differ, E(X) is pulled toward the high-probability values.
            </p>
          </div>

          {/* Explanation */}
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#ecf0f1', 
            borderRadius: '8px',
            fontSize: '13px',
            lineHeight: '1.7'
          }}>
            <h3 style={{ 
              marginTop: '0', 
              color: '#2c3e50',
              fontSize: '18px'
            }}>
              Understanding Weighted Average
            </h3>
            
            <ul style={{ color: '#34495e', marginTop: '10px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Blue circles</strong> contain P(X = x) - the probability of each outcome. Circle size also shows probability</li>
              <li style={{ marginBottom: '8px' }}><strong>Arrow thickness/length</strong> shows "pull strength" - how much that outcome pulls E(X) toward it</li>
              <li style={{ marginBottom: '8px' }}><strong>Red line (E(X))</strong> is the weighted average - pulled toward high-probability outcomes</li>
              <li style={{ marginBottom: '8px' }}><strong>Gray dashed line</strong> is the simple average (unweighted) - treats all outcomes equally</li>
            </ul>

            <div style={{ 
              marginTop: '15px', 
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '5px',
              border: '2px solid #3B82F6'
            }}>
              <strong style={{ color: '#2c3e50', fontSize: '14px' }}>Key Insight:</strong>
              <p style={{ marginTop: '8px', marginBottom: '0', color: '#555', fontSize: '12px' }}>
                When probabilities are equal, E(X) = simple average. 
                When probabilities differ, E(X) is pulled toward high-probability outcomes. 
                This is why it's called a <strong>weighted</strong> average!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightedExpectedValueVisualizer;