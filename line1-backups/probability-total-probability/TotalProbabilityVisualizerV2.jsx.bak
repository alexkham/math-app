
'use client';

import React, { useState } from 'react';

export default function TotalProbabilityVisualizerV2() {
  const [numA, setNumA] = useState(3);
  const [numB, setNumB] = useState(3);
  const [showControls, setShowControls] = useState(false);
  
  const [aProbs, setAProbs] = useState([0.33, 0.33, 0.34]);
  
  const [condProbs, setCondProbs] = useState([
    [0.4, 0.3, 0.3],
    [0.3, 0.5, 0.2],
    [0.2, 0.3, 0.5]
  ]);
  
  const [highlightedPath, setHighlightedPath] = useState(null);

  const getMaxB = (numAEvents) => {
    const map = { 2: 5, 3: 4, 4: 3, 5: 2 };
    return map[numAEvents];
  };

  const normalizeProbs = (probs) => {
    const sum = probs.reduce((a, b) => a + b, 0);
    return probs.map(p => p / sum);
  };

  const updateNumA = (n) => {
    setNumA(n);
    const newAProbs = new Array(n).fill(1 / n);
    setAProbs(newAProbs);
    
    const maxB = getMaxB(n);
    const newNumB = Math.min(numB, maxB);
    setNumB(newNumB);
    
    const newCondProbs = Array(n).fill(null).map(() => 
      new Array(newNumB).fill(1 / newNumB)
    );
    setCondProbs(newCondProbs);
    setHighlightedPath(null);
  };

  const updateNumB = (n) => {
    setNumB(n);
    
    const newCondProbs = Array(numA).fill(null).map(() => 
      new Array(n).fill(1 / n)
    );
    setCondProbs(newCondProbs);
    setHighlightedPath(null);
  };

  const updateAProb = (index, value) => {
    const newProbs = [...aProbs];
    newProbs[index] = value;
    const normalized = normalizeProbs(newProbs);
    setAProbs(normalized);
  };

  const updateCondProb = (i, j, value) => {
    const newCondProbs = condProbs.map(row => [...row]);
    newCondProbs[i][j] = value;
    
    const rowSum = newCondProbs[i].reduce((a, b) => a + b, 0);
    newCondProbs[i] = newCondProbs[i].map(p => p / rowSum);
    
    setCondProbs(newCondProbs);
  };

  const jointProbs = Array(numA).fill(null).map((_, i) =>
    Array(numB).fill(null).map((_, j) => aProbs[i] * condProbs[i][j])
  );

  const bMarginals = Array(numB).fill(0).map((_, j) =>
    jointProbs.reduce((sum, row) => sum + row[j], 0)
  );

  const width = 1000;
  const height = Math.max(650, 200 + Math.max(numA, numA * numB) * 60);
  const startX = 60;
  const startY = height / 2;
  const level1X = 300;
  const level2X = 750;

  const aSpacing = Math.min(140, (height - 100) / numA);
  const bSpacingPerA = Math.min(80, aSpacing / numB);

  const nodes = {
    start: { x: startX, y: startY, label: 'Start' }
  };

  for (let i = 0; i < numA; i++) {
    const aCenterOffset = (numA - 1) / 2;
    const yPos = startY + (i - aCenterOffset) * aSpacing;
    nodes[`A${i}`] = {
      x: level1X,
      y: yPos,
      label: `A${i + 1}`,
      prob: aProbs[i]
    };
  }

  for (let i = 0; i < numA; i++) {
    const aCenterOffset = (numA - 1) / 2;
    const aYPos = startY + (i - aCenterOffset) * aSpacing;
    
    for (let j = 0; j < numB; j++) {
      const bCenterOffset = (numB - 1) / 2;
      const yPos = aYPos + (j - bCenterOffset) * bSpacingPerA;
      
      nodes[`A${i}B${j}`] = {
        x: level2X,
        y: yPos,
        label: `A${i + 1} ∩ B${j + 1}`,
        prob: jointProbs[i][j]
      };
    }
  }

  const paths = [];

  for (let i = 0; i < numA; i++) {
    paths.push({
      from: 'start',
      to: `A${i}`,
      prob: aProbs[i],
      label: `P(A${i + 1}) = ${aProbs[i].toFixed(3)}`,
      belongsTo: [`A${i}`, `A${i}_all`, ...Array(numB).fill(null).map((_, j) => `A${i}B${j}`), ...Array(numB).fill(null).map((_, j) => `B${j}`)]
    });
  }

  for (let i = 0; i < numA; i++) {
    for (let j = 0; j < numB; j++) {
      paths.push({
        from: `A${i}`,
        to: `A${i}B${j}`,
        prob: condProbs[i][j],
        label: `P(B${j + 1}|A${i + 1}) = ${condProbs[i][j].toFixed(3)}`,
        belongsTo: [`A${i}B${j}`, `A${i}_all`, `B${j}`]
      });
    }
  }

  const baseColors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899'];

  const getPathColor = (path) => {
    if (!highlightedPath) return '#666';
    if (path.belongsTo.includes(highlightedPath)) {
      const matchA = highlightedPath.match(/A(\d+)/);
      if (matchA) {
        return baseColors[parseInt(matchA[1]) % baseColors.length];
      }
      const matchB = highlightedPath.match(/^B(\d+)$/);
      if (matchB) {
        return baseColors[parseInt(matchB[1]) % baseColors.length];
      }
      return '#10b981';
    }
    return '#cbd5e1';
  };

  const getPathWidth = (path) => {
    if (!highlightedPath) return 2;
    return path.belongsTo.includes(highlightedPath) ? 4 : 1;
  };

  const getNodeColor = (nodeName) => {
    if (!highlightedPath) return '#3b82f6';
    
    if (nodeName === 'start') {
      return highlightedPath ? baseColors[0] : '#3b82f6';
    }
    
    const matchA = nodeName.match(/^A(\d+)$/);
    if (matchA) {
      const idx = parseInt(matchA[1]);
      if (highlightedPath === `A${idx}` || 
          highlightedPath === `A${idx}_all` ||
          highlightedPath.startsWith(`A${idx}B`) ||
          highlightedPath.match(/^B\d+$/)) {
        return baseColors[idx % baseColors.length];
      }
      return '#cbd5e1';
    }
    
    const matchAB = nodeName.match(/^A(\d+)B(\d+)$/);
    if (matchAB) {
      const aIdx = parseInt(matchAB[1]);
      const bIdx = parseInt(matchAB[2]);
      if (highlightedPath === nodeName || 
          highlightedPath === `A${aIdx}_all` ||
          highlightedPath === `B${bIdx}`) {
        return baseColors[aIdx % baseColors.length];
      }
      return '#cbd5e1';
    }
    
    return '#cbd5e1';
  };

  const getLabelPosition = (fromNode, toNode, offset = 25) => {
    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2;
    
    const dx = toNode.x - fromNode.x;
    const dy = toNode.y - fromNode.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    const perpX = -dy / length;
    const perpY = dx / length;
    
    return {
      x: midX + perpX * offset,
      y: midY + perpY * offset
    };
  };

  const maxB = getMaxB(numA);

  return (
    <div style={{ padding: '20px', maxWidth: '1700px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Instructions at top */}
      <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px', color: '#1e40af', marginBottom: '20px' }}>
        <strong>How to use:</strong> Select number of A events and B outcomes (inverse relationship). Adjust probabilities with sliders. Click on outcomes or marginal probabilities to highlight paths.
      </div>

      {/* Main Layout */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        
        {/* Left side: Tree */}
        <div style={{ flex: '0 0 auto' }}>
          {/* Tree Visualization - reduced padding */}
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px 20px', marginBottom: '15px' }}>
            <svg width={width} height={height} style={{ display: 'block' }}>
              {paths.map((path, idx) => {
                const fromNode = nodes[path.from];
                const toNode = nodes[path.to];
                
                return (
                  <line
                    key={idx}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={getPathColor(path)}
                    strokeWidth={getPathWidth(path)}
                    style={{ transition: 'all 0.3s' }}
                  />
                );
              })}
              
              {paths.map((path, idx) => {
                const fromNode = nodes[path.from];
                const toNode = nodes[path.to];
                const isSecondLevel = path.from.startsWith('A') && path.from.match(/^A\d+$/);
                
                let verticalOffset = 0;
                if (isSecondLevel) {
                  const match = path.to.match(/B(\d+)$/);
                  if (match) {
                    const bIndex = parseInt(match[1]);
                    const centerOffset = (numB - 1) / 2;
                    verticalOffset = (bIndex - centerOffset) * 8;
                  }
                }
                
                const labelPos = getLabelPosition(fromNode, toNode, isSecondLevel ? 15 : 25);
                labelPos.y += verticalOffset;
                labelPos.y -= 10;
                
                const labelWidth = path.label.length * 5.8;
                const labelHeight = 18;
                const padding = 5;
                
                return (
                  <g key={`label-${idx}`}>
                    <rect
                      x={labelPos.x - labelWidth / 2 - padding}
                      y={labelPos.y - labelHeight / 2 - padding}
                      width={labelWidth + padding * 2}
                      height={labelHeight + padding * 2}
                      fill="white"
                      fillOpacity="1"
                      stroke={getPathColor(path)}
                      strokeWidth="1.5"
                      rx="4"
                      style={{ transition: 'all 0.3s' }}
                    />
                    <text
                      x={labelPos.x}
                      y={labelPos.y + 4}
                      fontSize="10"
                      fill={getPathColor(path)}
                      textAnchor="middle"
                      fontWeight="500"
                      style={{ transition: 'all 0.3s' }}
                    >
                      {path.label}
                    </text>
                  </g>
                );
              })}

              {Object.entries(nodes).map(([key, node]) => (
                <g key={key}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={key === 'start' ? 8 : 20}
                    fill={getNodeColor(key)}
                    stroke="#1e40af"
                    strokeWidth="2"
                    style={{ transition: 'all 0.3s' }}
                  />
                  {key !== 'start' && (
                    <>
                      {key.match(/^A\d+$/) ? (
                        <>
                          <text
                            x={node.x}
                            y={node.y - 28}
                            fontSize="13"
                            fontWeight="600"
                            fill="#1e293b"
                            textAnchor="middle"
                          >
                            {node.label}
                          </text>
                          <text
                            x={node.x}
                            y={node.y - 42}
                            fontSize="10"
                            fill="#475569"
                            textAnchor="middle"
                          >
                            {node.prob.toFixed(4)}
                          </text>
                        </>
                      ) : (
                        <>
                          <text
                            x={node.x + 28}
                            y={node.y - 4}
                            fontSize="12"
                            fontWeight="600"
                            fill="#1e293b"
                            textAnchor="start"
                          >
                            {node.label}
                          </text>
                          <text
                            x={node.x + 28}
                            y={node.y + 9}
                            fontSize="10"
                            fill="#475569"
                            textAnchor="start"
                          >
                            {node.prob.toFixed(4)}
                          </text>
                        </>
                      )}
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Controls - all in one row */}
          <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '8px', width: width + 'px', marginBottom: '15px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              {/* Number of A Events */}
              <div style={{ flex: '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Number of A Events: {numA}
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      onClick={() => updateNumA(n)}
                      style={{
                        padding: '8px 14px',
                        background: numA === n ? '#3b82f6' : 'white',
                        color: numA === n ? 'white' : '#1e293b',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '13px'
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of B Outcomes */}
              <div style={{ flex: '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px' }}>
                  Number of B Outcomes: {numB} (max: {maxB})
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      onClick={() => updateNumB(n)}
                      disabled={n > maxB}
                      style={{
                        padding: '8px 14px',
                        background: numB === n ? '#3b82f6' : 'white',
                        color: numB === n ? 'white' : n > maxB ? '#cbd5e1' : '#1e293b',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        cursor: n > maxB ? 'not-allowed' : 'pointer',
                        fontWeight: '600',
                        fontSize: '13px',
                        opacity: n > maxB ? 0.5 : 1
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customize Probability Data Button */}
              <div style={{ flex: '1' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '13px', color: 'transparent' }}>
                  _
                </label>
                <button
                  onClick={() => setShowControls(!showControls)}
                  style={{
                    width: '100%',
                    padding: '8px 14px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{showControls ? '▼' : '▲'}</span>
                  <span>Customize Data</span>
                </button>
              </div>
            </div>

            {highlightedPath && (
              <button
                onClick={() => setHighlightedPath(null)}
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '15px'
                }}
              >
                Clear Selection
              </button>
            )}
          </div>

          {/* Expanding panel that opens upward */}
          <div style={{ position: 'relative' }}>
            {showControls && (
              <div style={{ 
                position: 'absolute',
                bottom: '0',
                left: 0,
                right: 0,
                background: 'linear-gradient(to bottom, #ffffff, #f8fafc)', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '2px solid #3b82f6',
                boxShadow: '0 -8px 16px -4px rgba(59, 130, 246, 0.15), 0 -4px 6px -2px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
                maxHeight: '500px',
                overflowY: 'auto'
              }}>
                {/* Close button at top of panel */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid #3b82f6' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#3b82f6', margin: 0 }}>
                    Customize Probability Data
                  </h3>
                  <button
                    onClick={() => setShowControls(false)}
                    style={{
                      padding: '6px 12px',
                      background: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>▼</span>
                    <span>Close</span>
                  </button>
                </div>

                {/* A Event Probabilities */}
                <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                    A Event Probabilities (auto-normalized)
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    {aProbs.map((prob, i) => (
                      <div key={i}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: '500' }}>
                          P(A{i + 1}) = {prob.toFixed(3)}
                        </label>
                        <input
                          type="range"
                          min="0.01"
                          max="0.99"
                          step="0.01"
                          value={prob}
                          onChange={(e) => updateAProb(i, parseFloat(e.target.value))}
                          style={{ width: '100%', accentColor: '#3b82f6' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditional Probabilities */}
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                    Conditional Probabilities P(Bⱼ|Aᵢ)
                  </h3>
                  {aProbs.map((_, i) => (
                    <div key={i} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: i < numA - 1 ? '1px solid #e2e8f0' : 'none' }}>
                      <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: baseColors[i % baseColors.length] }}>
                        Given A{i + 1}:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                        {condProbs[i].map((prob, j) => (
                          <div key={j}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '500' }}>
                              P(B{j + 1}|A{i + 1}) = {prob.toFixed(3)}
                            </label>
                            <input
                              type="range"
                              min="0.01"
                              max="0.99"
                              step="0.01"
                              value={prob}
                              onChange={(e) => updateCondProb(i, j, parseFloat(e.target.value))}
                              style={{ width: '100%', accentColor: baseColors[i % baseColors.length] }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Calculations */}
        <div style={{ flex: '1', background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Probability Calculations</h2>
          
          {/* Total Probability for each B */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              Marginal Probabilities P(Bⱼ)
            </h3>
            {bMarginals.map((pBj, j) => (
              <div
                key={j}
                onClick={() => setHighlightedPath(highlightedPath === `B${j}` ? null : `B${j}`)}
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  border: `2px solid ${highlightedPath === `B${j}` ? baseColors[j % baseColors.length] : '#e2e8f0'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: highlightedPath === `B${j}` ? `${baseColors[j % baseColors.length]}10` : 'white',
                  marginBottom: '8px'
                }}
              >
                <div style={{ 
                  fontSize: '13px', 
                  fontWeight: highlightedPath === `B${j}` ? '600' : '400',
                  color: highlightedPath === `B${j}` ? baseColors[j % baseColors.length] : '#1e293b',
                  marginBottom: '6px'
                }}>
                  P(B{j + 1}) = {aProbs.map((_, i) => `P(A${i + 1})·P(B${j + 1}|A${i + 1})`).join(' + ')}
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: baseColors[j % baseColors.length] }}>
                  P(B{j + 1}) = {pBj.toFixed(4)}
                </div>
              </div>
            ))}
          </div>

          {/* View All Paths Through A Event */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              View All Paths Through A Event
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {aProbs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHighlightedPath(highlightedPath === `A${i}_all` ? null : `A${i}_all`)}
                  style={{
                    padding: '8px 12px',
                    background: highlightedPath === `A${i}_all` ? baseColors[i % baseColors.length] : 'white',
                    color: highlightedPath === `A${i}_all` ? 'white' : '#1e293b',
                    border: `2px solid ${baseColors[i % baseColors.length]}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  A{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Joint Probabilities */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              Joint Probabilities P(Aᵢ ∩ Bⱼ)
            </h3>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {jointProbs.map((row, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: baseColors[i % baseColors.length] }}>
                    A{i + 1} outcomes:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                    {row.map((prob, j) => (
                      <div
                        key={j}
                        onClick={() => setHighlightedPath(highlightedPath === `A${i}B${j}` ? null : `A${i}B${j}`)}
                        style={{
                          padding: '8px',
                          borderRadius: '6px',
                          border: `2px solid ${highlightedPath === `A${i}B${j}` ? baseColors[i % baseColors.length] : '#e2e8f0'}`,
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          background: highlightedPath === `A${i}B${j}` ? `${baseColors[i % baseColors.length]}10` : 'white',
                          fontSize: '12px'
                        }}
                      >
                        <div style={{ 
                          fontWeight: highlightedPath === `A${i}B${j}` ? '600' : '400',
                          color: highlightedPath === `A${i}B${j}` ? baseColors[i % baseColors.length] : '#1e293b'
                        }}>
                          P(A{i + 1} ∩ B{j + 1}) = {prob.toFixed(4)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bayes' Theorem */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              Bayes&apos; Theorem P(Aᵢ|Bⱼ)
            </h3>
            <div style={{ fontSize: '12px', lineHeight: '1.6', maxHeight: '300px', overflowY: 'auto' }}>
              {bMarginals.map((pBj, j) => (
                <div key={j} style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>Given B{j + 1}:</div>
                  {aProbs.map((_, i) => (
                    <div key={i}>
                      P(A{i + 1}|B{j + 1}) = {pBj > 0 ? (jointProbs[i][j] / pBj).toFixed(4) : 'undefined'}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}