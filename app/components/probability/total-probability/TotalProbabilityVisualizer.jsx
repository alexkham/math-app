'use client';

import React, { useState } from 'react';

export default function TotalProbabilityVisualizer() {
  // Number of events in first level (can be 3, 4, or 5)
  const [numEvents, setNumEvents] = useState(4);
  
  // Probabilities for each event (these must sum to 1)
  const [eventProbs, setEventProbs] = useState([0.25, 0.25, 0.25, 0.25]);
  
  // Conditional probabilities P(B|Ei) for each event
  const [condProbs, setCondProbs] = useState([0.7, 0.5, 0.3, 0.6]);
  
  const [highlightedPath, setHighlightedPath] = useState(null);

  // Normalize probabilities to sum to 1
  const normalizeProbs = (probs) => {
    const sum = probs.reduce((a, b) => a + b, 0);
    return probs.map(p => p / sum);
  };

  // Update number of events
  const updateNumEvents = (n) => {
    setNumEvents(n);
    const newProbs = new Array(n).fill(1 / n);
    setEventProbs(newProbs);
    const newCondProbs = new Array(n).fill(0.5);
    setCondProbs(newCondProbs);
    setHighlightedPath(null);
  };

  // Update individual event probability
  const updateEventProb = (index, value) => {
    const newProbs = [...eventProbs];
    newProbs[index] = value;
    const normalized = normalizeProbs(newProbs);
    setEventProbs(normalized);
  };

  // Update conditional probability
  const updateCondProb = (index, value) => {
    const newCondProbs = [...condProbs];
    newCondProbs[index] = value;
    setCondProbs(newCondProbs);
  };

  // Calculate all joint probabilities
  const jointProbs = eventProbs.map((pE, i) => ({
    EB: pE * condProbs[i],
    EnotB: pE * (1 - condProbs[i])
  }));

  // Calculate total probability P(B)
  const pB = jointProbs.reduce((sum, jp) => sum + jp.EB, 0);
  const pNotB = jointProbs.reduce((sum, jp) => sum + jp.EnotB, 0);

  // Tree layout
  const width = 900;
  const height = Math.max(600, 200 + numEvents * 100);
  const startX = 60;
  const startY = height / 2;
  const level1X = 280;
  const level2X = 680;
  
  // Calculate vertical spacing based on number of events
  const getVerticalSpacing = () => {
    const totalHeight = height - 100;
    return totalHeight / (numEvents * 2);
  };

  const verticalSpacing = getVerticalSpacing();

  // Generate node positions
  const nodes = {
    start: { x: startX, y: startY, label: 'Start' }
  };

  // First level nodes (Events)
  for (let i = 0; i < numEvents; i++) {
    const centerOffset = (numEvents - 1) / 2;
    const yPos = startY + (i - centerOffset) * verticalSpacing * 2;
    nodes[`E${i}`] = {
      x: level1X,
      y: yPos,
      label: `E${i + 1}`,
      prob: eventProbs[i]
    };
  }

  // Second level nodes (B and B' for each event)
  for (let i = 0; i < numEvents; i++) {
    const centerOffset = (numEvents - 1) / 2;
    const yPos = startY + (i - centerOffset) * verticalSpacing * 2;
    
    nodes[`E${i}B`] = {
      x: level2X,
      y: yPos - verticalSpacing * 0.6,
      label: `E${i + 1} ∩ B`,
      prob: jointProbs[i].EB
    };
    
    nodes[`E${i}notB`] = {
      x: level2X,
      y: yPos + verticalSpacing * 0.6,
      label: `E${i + 1} ∩ B'`,
      prob: jointProbs[i].EnotB
    };
  }

  // Define paths
  const paths = [];
  
  // First level paths (Start to Events)
  for (let i = 0; i < numEvents; i++) {
    paths.push({
      from: 'start',
      to: `E${i}`,
      prob: eventProbs[i],
      label: `P(E${i + 1}) = ${eventProbs[i].toFixed(3)}`,
      pathKey: `E${i}`,
      belongsTo: [`E${i}`, `E${i}B`, `E${i}notB`, 'B', 'notB', `E${i}_all`]
    });
  }

  // Second level paths (Events to Outcomes)
  for (let i = 0; i < numEvents; i++) {
    paths.push({
      from: `E${i}`,
      to: `E${i}B`,
      prob: condProbs[i],
      label: `P(B|E${i + 1}) = ${condProbs[i].toFixed(3)}`,
      pathKey: `E${i}B`,
      belongsTo: [`E${i}B`, 'B', `E${i}_all`]
    });
    
    paths.push({
      from: `E${i}`,
      to: `E${i}notB`,
      prob: 1 - condProbs[i],
      label: `P(B'|E${i + 1}) = ${(1 - condProbs[i]).toFixed(3)}`,
      pathKey: `E${i}notB`,
      belongsTo: [`E${i}notB`, 'notB', `E${i}_all`]
    });
  }

  // Path colors
  const baseColors = [
    '#10b981', // green
    '#3b82f6', // blue
    '#f59e0b', // amber
    '#8b5cf6', // purple
    '#ec4899'  // pink
  ];

  const getPathColor = (path) => {
    if (!highlightedPath) return '#666';
    if (path.belongsTo.includes(highlightedPath)) {
      // Extract event index if this is an event-specific path
      const match = highlightedPath.match(/E(\d+)/);
      if (match) {
        const eventIdx = parseInt(match[1]);
        return baseColors[eventIdx % baseColors.length];
      }
      // For B and notB paths, use general colors
      if (highlightedPath === 'B') return '#10b981';
      if (highlightedPath === 'notB') return '#ef4444';
    }
    return '#cbd5e1';
  };

  const getPathWidth = (path) => {
    if (!highlightedPath) return 2;
    if (path.belongsTo.includes(highlightedPath)) return 4;
    return 1;
  };

  const getNodeColor = (nodeName) => {
    if (!highlightedPath) return '#3b82f6';
    
    // Check if this node is part of the highlighted path
    if (nodeName === 'start') {
      return highlightedPath ? baseColors[0] : '#3b82f6';
    }
    
    // Event nodes
    const eventMatch = nodeName.match(/^E(\d+)$/);
    if (eventMatch) {
      const eventIdx = parseInt(eventMatch[1]);
      if (highlightedPath === `E${eventIdx}` || 
          highlightedPath === `E${eventIdx}B` || 
          highlightedPath === `E${eventIdx}notB` ||
          highlightedPath === `E${eventIdx}_all` ||
          (highlightedPath === 'B' || highlightedPath === 'notB')) {
        return baseColors[eventIdx % baseColors.length];
      }
      return '#cbd5e1';
    }
    
    // Outcome nodes
    const outcomeMatch = nodeName.match(/^E(\d+)(B|notB)$/);
    if (outcomeMatch) {
      const eventIdx = parseInt(outcomeMatch[1]);
      if (highlightedPath === nodeName || 
          highlightedPath === `E${eventIdx}_all` ||
          (highlightedPath === 'B' && outcomeMatch[2] === 'B') ||
          (highlightedPath === 'notB' && outcomeMatch[2] === 'notB')) {
        return baseColors[eventIdx % baseColors.length];
      }
      return '#cbd5e1';
    }
    
    return '#cbd5e1';
  };

  // Calculate label position
  const getLabelPosition = (fromNode, toNode, offset = 30) => {
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

  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Visualize total probability with multiple events. The Total Probability Theorem: P(B) = Σ P(Eᵢ) × P(B|Eᵢ)
      </p>

      {/* Main Layout */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        
        {/* Left side: Tree */}
        <div style={{ flex: '0 0 auto' }}>
          {/* Tree Visualization */}
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <svg width={width} height={height} style={{ display: 'block' }}>
              {/* Draw paths */}
              {paths.map((path, idx) => {
                const fromNode = nodes[path.from];
                const toNode = nodes[path.to];
                const labelPos = getLabelPosition(fromNode, toNode);
                
                return (
                  <g key={idx}>
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={getPathColor(path)}
                      strokeWidth={getPathWidth(path)}
                      style={{ transition: 'all 0.3s' }}
                    />
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      fontSize="11"
                      fill={getPathColor(path)}
                      textAnchor="middle"
                      style={{ transition: 'all 0.3s' }}
                    >
                      {path.label}
                    </text>
                  </g>
                );
              })}

              {/* Draw nodes */}
              {Object.entries(nodes).map(([key, node]) => (
                <g key={key}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={key === 'start' ? 8 : 22}
                    fill={getNodeColor(key)}
                    stroke="#1e40af"
                    strokeWidth="2"
                    style={{ transition: 'all 0.3s', cursor: 'default' }}
                  />
                  {key !== 'start' && (
                    <>
                      {key.match(/^E\d+$/) ? (
                        // Event nodes (first level)
                        <>
                          <text
                            x={node.x}
                            y={node.y - 32}
                            fontSize="14"
                            fontWeight="600"
                            fill="#1e293b"
                            textAnchor="middle"
                          >
                            {node.label}
                          </text>
                          <text
                            x={node.x}
                            y={node.y - 47}
                            fontSize="11"
                            fill="#475569"
                            textAnchor="middle"
                          >
                            {node.prob.toFixed(4)}
                          </text>
                        </>
                      ) : (
                        // Outcome nodes (second level)
                        <>
                          <text
                            x={node.x + 35}
                            y={node.y - 5}
                            fontSize="13"
                            fontWeight="600"
                            fill="#1e293b"
                            textAnchor="start"
                          >
                            {node.label}
                          </text>
                          <text
                            x={node.x + 35}
                            y={node.y + 10}
                            fontSize="11"
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

          {/* Controls */}
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', width: width + 'px' }}>
            {/* Number of Events */}
            <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                Number of Events: {numEvents}
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[3, 4, 5].map(n => (
                  <button
                    key={n}
                    onClick={() => updateNumEvents(n)}
                    style={{
                      padding: '8px 16px',
                      background: numEvents === n ? '#3b82f6' : 'white',
                      color: numEvents === n ? 'white' : '#1e293b',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Probabilities */}
            <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                Event Probabilities (auto-normalized)
              </h3>
              {eventProbs.map((prob, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>
                    P(E{i + 1}) = {prob.toFixed(3)}
                  </label>
                  <input
                    type="range"
                    min="0.01"
                    max="0.99"
                    step="0.01"
                    value={prob}
                    onChange={(e) => updateEventProb(i, parseFloat(e.target.value))}
                    style={{ width: '100%' }}
                  />
                </div>
              ))}
            </div>

            {/* Conditional Probabilities */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                Conditional Probabilities P(B|Eᵢ)
              </h3>
              {condProbs.map((prob, i) => (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>
                    P(B|E{i + 1}) = {prob.toFixed(3)}
                  </label>
                  <input
                    type="range"
                    min="0.01"
                    max="0.99"
                    step="0.01"
                    value={prob}
                    onChange={(e) => updateCondProb(i, parseFloat(e.target.value))}
                    style={{ width: '100%' }}
                  />
                </div>
              ))}
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
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Clear Selection
              </button>
            )}
          </div>
        </div>

        {/* Right side: Calculations */}
        <div style={{ flex: '1', background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Probability Calculations</h2>
          
          {/* Total Probability Theorem */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              Total Probability Theorem
            </h3>
            <div
              onClick={() => setHighlightedPath(highlightedPath === 'B' ? null : 'B')}
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: `2px solid ${highlightedPath === 'B' ? '#10b981' : '#e2e8f0'}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: highlightedPath === 'B' ? '#10b98110' : 'white',
                marginBottom: '10px'
              }}
            >
              <div style={{ 
                fontSize: '14px', 
                fontWeight: highlightedPath === 'B' ? '600' : '400',
                color: highlightedPath === 'B' ? '#10b981' : '#1e293b',
                marginBottom: '8px'
              }}>
                P(B) = {jointProbs.map((_, i) => `P(E${i + 1})·P(B|E${i + 1})`).join(' + ')}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#10b981' }}>
                P(B) = {pB.toFixed(4)}
              </div>
            </div>
            <div
              onClick={() => setHighlightedPath(highlightedPath === 'notB' ? null : 'notB')}
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: `2px solid ${highlightedPath === 'notB' ? '#ef4444' : '#e2e8f0'}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: highlightedPath === 'notB' ? '#ef444410' : 'white'
              }}
            >
              <div style={{ 
                fontSize: '14px', 
                fontWeight: highlightedPath === 'notB' ? '600' : '400',
                color: highlightedPath === 'notB' ? '#ef4444' : '#1e293b',
                marginBottom: '8px'
              }}>
                P(B') = {jointProbs.map((_, i) => `P(E${i + 1})·P(B'|E${i + 1})`).join(' + ')}
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#ef4444' }}>
                P(B') = {pNotB.toFixed(4)}
              </div>
            </div>
          </div>

          {/* All Event Paths */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              View All Paths Through Event
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {eventProbs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHighlightedPath(highlightedPath === `E${i}_all` ? null : `E${i}_all`)}
                  style={{
                    padding: '8px 12px',
                    background: highlightedPath === `E${i}_all` ? baseColors[i % baseColors.length] : 'white',
                    color: highlightedPath === `E${i}_all` ? 'white' : '#1e293b',
                    border: `2px solid ${baseColors[i % baseColors.length]}`,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  E{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Joint Probabilities */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              Joint Probabilities (Click to Highlight)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {jointProbs.map((jp, i) => (
                <React.Fragment key={i}>
                  <div
                    onClick={() => setHighlightedPath(highlightedPath === `E${i}B` ? null : `E${i}B`)}
                    style={{
                      padding: '10px',
                      borderRadius: '6px',
                      border: `2px solid ${highlightedPath === `E${i}B` ? baseColors[i % baseColors.length] : '#e2e8f0'}`,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      background: highlightedPath === `E${i}B` ? `${baseColors[i % baseColors.length]}10` : 'white',
                      fontSize: '13px'
                    }}
                  >
                    <div style={{ 
                      fontWeight: highlightedPath === `E${i}B` ? '600' : '400',
                      color: highlightedPath === `E${i}B` ? baseColors[i % baseColors.length] : '#1e293b'
                    }}>
                      P(E{i + 1} ∩ B) = {jp.EB.toFixed(4)}
                    </div>
                  </div>
                  <div
                    onClick={() => setHighlightedPath(highlightedPath === `E${i}notB` ? null : `E${i}notB`)}
                    style={{
                      padding: '10px',
                      borderRadius: '6px',
                      border: `2px solid ${highlightedPath === `E${i}notB` ? baseColors[i % baseColors.length] : '#e2e8f0'}`,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      background: highlightedPath === `E${i}notB` ? `${baseColors[i % baseColors.length]}10` : 'white',
                      fontSize: '13px'
                    }}
                  >
                    <div style={{ 
                      fontWeight: highlightedPath === `E${i}notB` ? '600' : '400',
                      color: highlightedPath === `E${i}notB` ? baseColors[i % baseColors.length] : '#1e293b'
                    }}>
                      P(E{i + 1} ∩ B') = {jp.EnotB.toFixed(4)}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Bayes' Theorem */}
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>
              Bayes' Theorem (Reverse Probabilities)
            </h3>
            <div style={{ fontSize: '13px', lineHeight: '1.8' }}>
              {eventProbs.map((_, i) => (
                <div key={i} style={{ marginBottom: '4px' }}>
                  P(E{i + 1}|B) = P(B|E{i + 1}) × P(E{i + 1}) / P(B) = {pB > 0 ? (jointProbs[i].EB / pB).toFixed(4) : 'undefined'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px', color: '#1e40af' }}>
        <strong>How to use:</strong> Select number of events (3-5), adjust probabilities with sliders. Click on any outcome or total probability to highlight its path(s) through the tree.
      </div>
    </div>
  );
}