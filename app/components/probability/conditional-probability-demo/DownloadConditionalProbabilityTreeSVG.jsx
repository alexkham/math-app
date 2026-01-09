'use client';

import React, { useState, useRef } from 'react';

export default function DownloadConditionalProbabilityTreeSVG() {
  const svgRef = useRef(null);
  const [pA, setPA] = useState(0.6);
  const [pBGivenA, setPBGivenA] = useState(0.7);
  const [pBGivenNotA, setPBGivenNotA] = useState(0.3);
  const [highlightedPath, setHighlightedPath] = useState(null);

  // Calculate all probabilities
  const pNotA = 1 - pA;
  const pAAndB = pA * pBGivenA;
  const pAAndNotB = pA * (1 - pBGivenA);
  const pNotAAndB = pNotA * pBGivenNotA;
  const pNotAAndNotB = pNotA * (1 - pBGivenNotA);
  const pB = pAAndB + pNotAAndB;

  // Tree layout constants - 20% smaller
  const width = 720;
  const height = 560;
  const startX = 40;
  const startY = height / 2;
  const level1X = 240;
  const level2X = 520;
  const verticalSpacing = 120;

  // Download SVG function
  const downloadSVG = () => {
    if (!svgRef.current) return;
    
    const svgClone = svgRef.current.cloneNode(true);
    svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgClone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    
    const removeStyles = (element) => {
      if (element.hasAttribute('style')) {
        element.removeAttribute('style');
      }
      for (let child of element.children) {
        removeStyles(child);
      }
    };
    removeStyles(svgClone);
    
    const svgData = svgClone.outerHTML;
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'conditional-probability-tree.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Node positions
  const nodes = {
    start: { x: startX, y: startY, label: 'Start' },
    A: { x: level1X, y: startY - verticalSpacing, label: 'A', prob: pA },
    notA: { x: level1X, y: startY + verticalSpacing, label: "Aᶜ", prob: pNotA },
    AB: { x: level2X, y: startY - verticalSpacing - 64, label: 'A ∩ B', prob: pAAndB },
    AnotB: { x: level2X, y: startY - verticalSpacing + 64, label: "A ∩ Bᶜ", prob: pAAndNotB },
    notAB: { x: level2X, y: startY + verticalSpacing - 64, label: "Aᶜ ∩ B", prob: pNotAAndB },
    notAnotB: { x: level2X, y: startY + verticalSpacing + 64, label: "Aᶜ ∩ Bᶜ", prob: pNotAAndNotB }
  };

  // Path colors for each intersection and marginal
  const pathColors = {
    'AB': '#10b981',      // green
    'AnotB': '#f59e0b',   // amber
    'notAB': '#8b5cf6',   // purple
    'notAnotB': '#ef4444', // red
    'A': '#3b82f6',       // blue
    'notA': '#06b6d4',    // cyan
    'B': '#ec4899',       // pink
    'notB': '#f97316',    // orange
    'givenA': '#60a5fa',  // light blue
    'givenNotA': '#22d3ee', // light cyan
    'BgivenA': '#10b981',  // green (same as AB)
    'BnotgivenA': '#f59e0b', // amber (same as AnotB)
    'BgivenNotA': '#8b5cf6', // purple (same as notAB)
    'BnotgivenNotA': '#ef4444' // red (same as notAnotB)
  };

  // Define which nodes are part of each path
  const pathNodes = {
    'AB': ['start', 'A', 'AB'],
    'AnotB': ['start', 'A', 'AnotB'],
    'notAB': ['start', 'notA', 'notAB'],
    'notAnotB': ['start', 'notA', 'notAnotB'],
    'A': ['start', 'A'],
    'notA': ['start', 'notA'],
    'B': ['start', 'A', 'AB', 'notA', 'notAB'],
    'notB': ['start', 'A', 'AnotB', 'notA', 'notAnotB'],
    'givenA': ['start', 'A', 'AB', 'AnotB'],
    'givenNotA': ['start', 'notA', 'notAB', 'notAnotB'],
    'BgivenA': ['start', 'A', 'AB'],
    'BnotgivenA': ['start', 'A', 'AnotB'],
    'BgivenNotA': ['start', 'notA', 'notAB'],
    'BnotgivenNotA': ['start', 'notA', 'notAnotB']
  };

  const paths = [
    { from: 'start', to: 'A', prob: pA, label: `P(A) = ${pA.toFixed(3)}`, path: 'A', belongsTo: ['AB', 'AnotB', 'A', 'B', 'notB', 'givenA', 'BgivenA', 'BnotgivenA'] },
    { from: 'start', to: 'notA', prob: pNotA, label: `P(Aᶜ) = ${pNotA.toFixed(3)}`, path: 'notA', belongsTo: ['notAB', 'notAnotB', 'notA', 'B', 'notB', 'givenNotA', 'BgivenNotA', 'BnotgivenNotA'] },
    { from: 'A', to: 'AB', prob: pBGivenA, label: `P(B|A) = ${pBGivenA.toFixed(3)}`, path: 'AB', belongsTo: ['AB', 'B', 'givenA', 'BgivenA'] },
    { from: 'A', to: 'AnotB', prob: 1 - pBGivenA, label: `P(Bᶜ|A) = ${(1 - pBGivenA).toFixed(3)}`, path: 'AnotB', belongsTo: ['AnotB', 'notB', 'givenA', 'BnotgivenA'] },
    { from: 'notA', to: 'notAB', prob: pBGivenNotA, label: `P(B|Aᶜ) = ${pBGivenNotA.toFixed(3)}`, path: 'notAB', belongsTo: ['notAB', 'B', 'givenNotA', 'BgivenNotA'] },
    { from: 'notA', to: 'notAnotB', prob: 1 - pBGivenNotA, label: `P(Bᶜ|Aᶜ) = ${(1 - pBGivenNotA).toFixed(3)}`, path: 'notAnotB', belongsTo: ['notAnotB', 'notB', 'givenNotA', 'BnotgivenNotA'] }
  ];

  const getPathColor = (path) => {
    if (!highlightedPath) return '#666';
    if (path.belongsTo.includes(highlightedPath)) {
      return pathColors[highlightedPath];
    }
    return '#cbd5e1';
  };

  const getPathWidth = (path) => {
    if (!highlightedPath) return 2;
    if (path.belongsTo.includes(highlightedPath)) {
      return 4;
    }
    return 1;
  };

  const getNodeColor = (nodeName) => {
    if (!highlightedPath) return '#3b82f6';
    if (pathNodes[highlightedPath] && pathNodes[highlightedPath].includes(nodeName)) {
      return pathColors[highlightedPath];
    }
    return '#cbd5e1';
  };

  // Calculate label position offset from line
  const getLabelPosition = (fromNode, toNode) => {
    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2;
    
    // Calculate perpendicular offset
    const dx = toNode.x - fromNode.x;
    const dy = toNode.y - fromNode.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    // Perpendicular vector (rotate 90 degrees)
    const perpX = -dy / length;
    const perpY = dx / length;
    
    // Offset distance from line
    const offset = 30;
    
    return {
      x: midX + perpX * offset,
      y: midY + perpY * offset
    };
  };

  const intersections = [
    { key: 'AB', label: 'A ∩ B', prob: pAAndB, color: pathColors.AB, formula: 'P(A) × P(B|A)' },
    { key: 'AnotB', label: "A ∩ Bᶜ", prob: pAAndNotB, color: pathColors.AnotB, formula: "P(A) × P(Bᶜ|A)" },
    { key: 'notAB', label: "Aᶜ ∩ B", prob: pNotAAndB, color: pathColors.notAB, formula: "P(Aᶜ) × P(B|Aᶜ)" },
    { key: 'notAnotB', label: "Aᶜ ∩ Bᶜ", prob: pNotAAndNotB, color: pathColors.notAnotB, formula: "P(Aᶜ) × P(Bᶜ|Aᶜ)" }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Visualize conditional probabilities with events A and B. Click on intersection probabilities to highlight paths.
      </p>

      {/* Main Layout: Graph on left, Stats on right */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        
        {/* Left side: Tree and Controls */}
        <div style={{ flex: '0 0 auto' }}>
          {/* Tree Visualization */}
          <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <svg ref={svgRef} width={width} height={height} style={{ display: 'block' }}>
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
                      fontSize="12"
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
                    r={key === 'start' ? 8 : 25}
                    fill={getNodeColor(key)}
                    stroke="#1e40af"
                    strokeWidth="2"
                    style={{ transition: 'all 0.3s', cursor: 'default' }}
                  />
                  {key !== 'start' && (
                    <>
                      {(key === 'A' || key === 'notA') ? (
                        <>
                          <text
                            x={node.x}
                            y={node.y - 35}
                            fontSize="14"
                            fontWeight="600"
                            fill="#1e293b"
                            textAnchor="middle"
                          >
                            {node.label}
                          </text>
                          {node.prob !== undefined && (
                            <text
                              x={node.x}
                              y={node.y - 50}
                              fontSize="12"
                              fill="#475569"
                              textAnchor="middle"
                            >
                              P = {node.prob.toFixed(4)}
                            </text>
                          )}
                        </>
                      ) : (
                        <>
                          <text
                            x={node.x + 40}
                            y={node.y - 8}
                            fontSize="14"
                            fontWeight="600"
                            fill="#1e293b"
                            textAnchor="start"
                          >
                            {node.label}
                          </text>
                          {node.prob !== undefined && (
                            <text
                              x={node.x + 40}
                              y={node.y + 8}
                              fontSize="12"
                              fill="#475569"
                              textAnchor="start"
                            >
                              P = {node.prob.toFixed(4)}
                            </text>
                          )}
                        </>
                      )}
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Controls */}
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', width: width + 40 + 'px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                P(A) = {pA.toFixed(3)}
              </label>
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={pA}
                onChange={(e) => setPA(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                P(B|A) = {pBGivenA.toFixed(3)}
              </label>
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={pBGivenA}
                onChange={(e) => setPBGivenA(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                P(B|Aᶜ) = {pBGivenNotA.toFixed(3)}
              </label>
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={pBGivenNotA}
                onChange={(e) => setPBGivenNotA(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
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
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                Clear Selection
              </button>
            )}

            <button
              onClick={downloadSVG}
              style={{
                width: '100%',
                padding: '10px',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Download SVG
            </button>
          </div>
        </div>

        {/* Right side: Probability Calculations */}
        <div style={{ flex: '1', background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Calculated Probabilities</h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
            Click on any joint probability to highlight its path through the tree
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {/* Clickable Joint Probabilities */}
            <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>Joint Probabilities</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {intersections.map((intersection) => (
                  <div
                    key={intersection.key}
                    onClick={() => setHighlightedPath(highlightedPath === intersection.key ? null : intersection.key)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: `2px solid ${highlightedPath === intersection.key ? intersection.color : '#e2e8f0'}`,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      background: highlightedPath === intersection.key ? `${intersection.color}10` : 'white',
                      fontSize: '14px'
                    }}
                  >
                    <div style={{ 
                      fontWeight: highlightedPath === intersection.key ? '600' : '400',
                      color: highlightedPath === intersection.key ? intersection.color : '#1e293b'
                    }}>
                      {intersection.label} = {intersection.formula} = {intersection.prob.toFixed(4)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>Marginal Probabilities</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'A' ? null : 'A')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'A' ? pathColors.A : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'A' ? `${pathColors.A}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'A' ? '600' : '400',
                    color: highlightedPath === 'A' ? pathColors.A : '#1e293b'
                  }}
                >
                  P(A) = {pA.toFixed(4)}
                </div>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'notA' ? null : 'notA')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'notA' ? pathColors.notA : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'notA' ? `${pathColors.notA}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'notA' ? '600' : '400',
                    color: highlightedPath === 'notA' ? pathColors.notA : '#1e293b'
                  }}
                >
                  P(Aᶜ) = {pNotA.toFixed(4)}
                </div>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'B' ? null : 'B')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'B' ? pathColors.B : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'B' ? `${pathColors.B}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'B' ? '600' : '400',
                    color: highlightedPath === 'B' ? pathColors.B : '#1e293b'
                  }}
                >
                  P(B) = P(A∩B) + P(Aᶜ∩B) = {pB.toFixed(4)}
                </div>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'notB' ? null : 'notB')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'notB' ? pathColors.notB : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'notB' ? `${pathColors.notB}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'notB' ? '600' : '400',
                    color: highlightedPath === 'notB' ? pathColors.notB : '#1e293b'
                  }}
                >
                  P(Bᶜ) = {(1 - pB).toFixed(4)}
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>Conditional: Given A</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'BgivenA' ? null : 'BgivenA')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'BgivenA' ? pathColors.BgivenA : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'BgivenA' ? `${pathColors.BgivenA}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'BgivenA' ? '600' : '400',
                    color: highlightedPath === 'BgivenA' ? pathColors.BgivenA : '#1e293b'
                  }}
                >
                  P(B|A) = {pBGivenA.toFixed(4)}
                </div>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'BnotgivenA' ? null : 'BnotgivenA')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'BnotgivenA' ? pathColors.BnotgivenA : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'BnotgivenA' ? `${pathColors.BnotgivenA}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'BnotgivenA' ? '600' : '400',
                    color: highlightedPath === 'BnotgivenA' ? pathColors.BnotgivenA : '#1e293b'
                  }}
                >
                  P(Bᶜ|A) = {(1 - pBGivenA).toFixed(4)}
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#64748b' }}>Conditional: Given Aᶜ</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'BgivenNotA' ? null : 'BgivenNotA')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'BgivenNotA' ? pathColors.BgivenNotA : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'BgivenNotA' ? `${pathColors.BgivenNotA}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'BgivenNotA' ? '600' : '400',
                    color: highlightedPath === 'BgivenNotA' ? pathColors.BgivenNotA : '#1e293b'
                  }}
                >
                  P(B|Aᶜ) = {pBGivenNotA.toFixed(4)}
                </div>
                <div
                  onClick={() => setHighlightedPath(highlightedPath === 'BnotgivenNotA' ? null : 'BnotgivenNotA')}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: `2px solid ${highlightedPath === 'BnotgivenNotA' ? pathColors.BnotgivenNotA : '#e2e8f0'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: highlightedPath === 'BnotgivenNotA' ? `${pathColors.BnotgivenNotA}10` : 'white',
                    fontSize: '14px',
                    fontWeight: highlightedPath === 'BnotgivenNotA' ? '600' : '400',
                    color: highlightedPath === 'BnotgivenNotA' ? pathColors.BnotgivenNotA : '#1e293b'
                  }}
                >
                  P(Bᶜ|Aᶜ) = {(1 - pBGivenNotA).toFixed(4)}
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '15px', borderRadius: '6px', gridColumn: '1 / -1' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#64748b' }}>Bayes Theorem</h3>
              <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                <div>P(A|B) = P(B|A) × P(A) / P(B) = {pB > 0 ? (pAAndB / pB).toFixed(4) : 'undefined'}</div>
                <div>P(Aᶜ|B) = P(B|Aᶜ) × P(Aᶜ) / P(B) = {pB > 0 ? (pNotAAndB / pB).toFixed(4) : 'undefined'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px', color: '#1e40af' }}>
        <strong>How to use:</strong> Adjust the sliders to change probabilities. Click on any joint probability block to highlight its path through the tree.
      </div>
    </div>
  );
}