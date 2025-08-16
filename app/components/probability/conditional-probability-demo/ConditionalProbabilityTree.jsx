import { useState, useRef, useEffect } from 'react';

export default function ConditionalProbabilityTree() {
  const [probA, setProbA] = useState(0.3);
  const [probBGivenA, setProbBGivenA] = useState(0.8);
  const [probBGivenNotA, setProbBGivenNotA] = useState(0.2);
  const svgRef = useRef(null);

  const examples = {
    weather: { probA: 0.4, probBGivenA: 0.8, probBGivenNotA: 0.1, desc: 'A=Cloudy, B=Rain' },
    medical: { probA: 0.01, probBGivenA: 0.95, probBGivenNotA: 0.05, desc: 'A=Disease, B=Positive Test' },
    email: { probA: 0.25, probBGivenA: 0.8, probBGivenNotA: 0.05, desc: 'A=Spam, B=Contains "ASAP"' },
    cards: { probA: 0.5, probBGivenA: 0.077, probBGivenNotA: 0.077, desc: 'A=Red Card, B=Ace' }
  };

  const loadExample = (type) => {
    const example = examples[type];
    setProbA(example.probA);
    setProbBGivenA(example.probBGivenA);
    setProbBGivenNotA(example.probBGivenNotA);
  };

  const drawTree = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const probNotA = 1 - probA;
    const probNotBGivenA = 1 - probBGivenA;
    const probNotBGivenNotA = 1 - probBGivenNotA;
    
    const probAAndB = probA * probBGivenA;
    const probAAndNotB = probA * probNotBGivenA;
    const probNotAAndB = probNotA * probBGivenNotA;
    const probNotAAndNotB = probNotA * probNotBGivenNotA;

    svg.innerHTML = '';

    const width = 800;
    const height = 500;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const startX = 50, level1X = 200, level2X = 400;
    const centerY = height / 2, branchSpacing = 120;
    const aY = centerY - branchSpacing/2, notAY = centerY + branchSpacing/2;

    // Helper functions
    const createEl = (tag, attrs) => {
      const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
      return el;
    };

    const drawNode = (x, y, text, color) => {
      svg.appendChild(createEl('circle', {
        cx: x, cy: y, r: 25, fill: color, stroke: '#333', 'stroke-width': 2
      }));
      svg.appendChild(createEl('text', {
        x, y, 'text-anchor': 'middle', 'dominant-baseline': 'middle',
        fill: 'white', 'font-size': 14, 'font-weight': 'bold'
      })).textContent = text;
    };

    const drawBranch = (x1, y1, x2, y2, isConditional = false) => {
      svg.appendChild(createEl('line', {
        x1: x1 + 25, y1, x2: x2 - 25, y2,
        stroke: isConditional ? '#dc3545' : '#333',
        'stroke-width': 3
      }));
    };

    const drawLabel = (x, y, text, color = '#333') => {
      svg.appendChild(createEl('text', {
        x, y, 'text-anchor': 'middle', fill: color,
        'font-size': 13, 'font-weight': 'bold'
      })).textContent = text;
    };

    // Draw tree structure
    drawNode(startX, centerY, 'Start', '#6c757d');
    drawNode(level1X, aY, 'A', '#4facfe');
    drawNode(level1X, notAY, "A'", '#4facfe');

    drawBranch(startX, centerY, level1X, aY);
    drawBranch(startX, centerY, level1X, notAY);

    drawLabel((startX + level1X)/2, aY - 20, `P(A) = ${probA.toFixed(2)}`);
    drawLabel((startX + level1X)/2, notAY + 30, `P(A') = ${probNotA.toFixed(2)}`);

    // Second level
    const positions = [
      {x: level2X, y: aY - branchSpacing/3, parent: {x: level1X, y: aY}, label: 'B', prob: probBGivenA, joint: probAAndB, condition: 'A'},
      {x: level2X, y: aY + branchSpacing/3, parent: {x: level1X, y: aY}, label: "B'", prob: probNotBGivenA, joint: probAAndNotB, condition: 'A'},
      {x: level2X, y: notAY - branchSpacing/3, parent: {x: level1X, y: notAY}, label: 'B', prob: probBGivenNotA, joint: probNotAAndB, condition: "A'"},
      {x: level2X, y: notAY + branchSpacing/3, parent: {x: level1X, y: notAY}, label: "B'", prob: probNotBGivenNotA, joint: probNotAAndNotB, condition: "A'"}
    ];

    positions.forEach(pos => {
      drawBranch(pos.parent.x, pos.parent.y, pos.x, pos.y, true);
      drawNode(pos.x, pos.y, pos.label, '#28a745');
      
      const midX = (pos.parent.x + pos.x) / 2;
      const midY = (pos.parent.y + pos.y) / 2;
      const labelY = pos.y < pos.parent.y ? midY - 15 : midY + 20;
      
      drawLabel(midX, labelY, `P(${pos.label}|${pos.condition}) = ${pos.prob.toFixed(2)}`);
      drawLabel(pos.x + 50, pos.y, pos.joint.toFixed(3), '#dc3545');
    });

    // Legend
    svg.appendChild(createEl('line', {x1: width-150, y1: 30, x2: width-120, y2: 30, stroke: '#333', 'stroke-width': 3}));
    svg.appendChild(createEl('text', {x: width-115, y: 35, 'font-size': 12, fill: '#333'})).textContent = 'Prior probability';
    svg.appendChild(createEl('line', {x1: width-150, y1: 50, x2: width-120, y2: 50, stroke: '#dc3545', 'stroke-width': 3}));
    svg.appendChild(createEl('text', {x: width-115, y: 55, 'font-size': 12, fill: '#333'})).textContent = 'Conditional probability';
  };

  useEffect(() => {
    drawTree();
  }, [probA, probBGivenA, probBGivenNotA]);

  const totalProbB = probA * probBGivenA + (1 - probA) * probBGivenNotA;
  const probAAndB = probA * probBGivenA;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Conditional Probability Tree Diagram</h1>
        <p style={styles.subtitle}>Interactive visualization of P(B|A) - Probability of B given A</p>
      </div>
      
      <div style={styles.controls}>
        <div style={styles.controlGroup}>
          <label style={styles.label}>P(A) - Prior</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={probA}
            onChange={(e) => setProbA(parseFloat(e.target.value) || 0)}
            style={styles.input}
          />
        </div>
        <div style={styles.controlGroup}>
          <label style={styles.label}>P(B|A) - B given A</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={probBGivenA}
            onChange={(e) => setProbBGivenA(parseFloat(e.target.value) || 0)}
            style={styles.input}
          />
        </div>
        <div style={styles.controlGroup}>
          <label style={styles.label}>P(B|A&apos;) - B given not A</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={probBGivenNotA}
            onChange={(e) => setProbBGivenNotA(parseFloat(e.target.value) || 0)}
            style={styles.input}
          />
        </div>
        
        <div style={styles.exampleButtons}>
          <strong>Examples:</strong>
          {Object.keys(examples).map(key => (
            <button
              key={key}
              onClick={() => loadExample(key)}
              style={styles.exampleBtn}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div style={styles.treeContainer}>
        <svg ref={svgRef} style={styles.treeSvg} />
      </div>
      
      <div style={styles.explanation}>
        <h3 style={styles.explanationTitle}>Understanding Conditional Probability</h3>
        <p><strong>Conditional probability P(B|A)</strong> means the probability of B happening, given that A has already happened.</p>
        
        <div style={styles.formulaBox}>
          P(B|A) = P(A and B) / P(A)<br/><br/>
          Current values:<br/>
          • P(A) = {probA.toFixed(2)} ({(probA * 100).toFixed(0)}%)<br/>
          • P(B|A) = {probBGivenA.toFixed(2)} ({(probBGivenA * 100).toFixed(0)}%)<br/>
          • P(B|A&apos;) = {probBGivenNotA.toFixed(2)} ({(probBGivenNotA * 100).toFixed(0)}%)<br/><br/>
          <span style={styles.highlight}>P(A and B) = P(A) × P(B|A) = {probA.toFixed(2)} × {probBGivenA.toFixed(2)} = {probAAndB.toFixed(3)}</span><br/>
          <span style={styles.highlight}>P(B) total = {totalProbB.toFixed(3)} (law of total probability)</span>
        </div>
        
        <p><strong>Key insight:</strong> The tree shows how knowing that A occurred changes the probability of B. Compare P(B|A) with P(B|A&apos;) to see the conditional effect.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    overflow: 'hidden'
  },
  header: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    padding: '30px',
    textAlign: 'center',
    color: 'white'
  },
  title: {
    margin: '0',
    fontSize: '28px'
  },
  subtitle: {
    margin: '10px 0 0 0',
    opacity: 0.9
  },
  controls: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6'
  },
  controlGroup: {
    display: 'inline-block',
    margin: '10px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#495057'
  },
  input: {
    width: '80px',
    padding: '8px',
    border: '2px solid #ced4da',
    borderRadius: '6px',
    fontSize: '14px'
  },
  exampleButtons: {
    marginTop: '15px'
  },
  exampleBtn: {
    margin: '5px',
    padding: '8px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px'
  },
  treeContainer: {
    padding: '40px',
    minHeight: '600px',
    position: 'relative',
    overflowX: 'auto'
  },
  treeSvg: {
    width: '100%',
    height: '500px'
  },
  explanation: {
    backgroundColor: '#e9ecef',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    borderLeft: '4px solid #4facfe'
  },
  explanationTitle: {
    margin: '0 0 15px 0',
    color: '#333'
  },
  formulaBox: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '8px',
    margin: '10px 0',
    fontFamily: 'monospace',
    fontSize: '14px'
  },
  highlight: {
    backgroundColor: '#fff3cd',
    padding: '2px 4px',
    borderRadius: '3px'
  }
};