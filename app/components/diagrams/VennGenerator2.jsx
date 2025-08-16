import React, { useState, useMemo } from 'react';

const VennGenerator2 = () => {
  const initialCircle1 = { 
    label: 'Set A', 
    fillColor: '#FFCCCC',
    borderColor: 'black',
    strokeWidth: 2,
    radius: 70,
    x: 150,
    y: 150
  };
  
  const initialCircle2 = { 
    label: 'Set B', 
    fillColor: '#CCCCFF',
    borderColor: 'black',
    strokeWidth: 2,
    radius: 70,
    x: 250,
    y: 150
  };

  const [circle1, setCircle1] = useState(initialCircle1);
  const [circle2, setCircle2] = useState(initialCircle2);

  const intersectionPath = useMemo(() => {
    const dx = circle2.x - circle1.x;
    const dy = circle2.y - circle1.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d > circle1.radius + circle2.radius || d < Math.abs(circle1.radius - circle2.radius)) return '';

    const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
    const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

    const x2 = circle1.x + a * (dx / d);
    const y2 = circle1.y + a * (dy / d);

    const x3 = x2 + h * (dy / d);
    const y3 = y2 - h * (dx / d);

    const x4 = x2 - h * (dy / d);
    const y4 = y2 + h * (dx / d);

    const largeArcFlag = d < (circle1.radius + circle2.radius) / 2 ? 0 : 1;
    return `
      M ${circle1.x},${circle1.y}
      A ${circle1.radius},${circle1.radius} 0 ${largeArcFlag} 1 ${x3},${y3}
      A ${circle2.radius},${circle2.radius} 0 ${largeArcFlag} 1 ${x4},${y4}
      A ${circle1.radius},${circle1.radius} 0 ${largeArcFlag} 1 ${circle1.x},${circle1.y}
    `;
  }, [circle1, circle2]);

  return (
    <div>
      <h2>Venn Diagram Generator</h2>
      <svg width="400" height="300">
        <circle
          cx={circle1.x}
          cy={circle1.y}
          r={circle1.radius}
          fill={circle1.fillColor}
          stroke={circle1.borderColor}
          strokeWidth={circle1.strokeWidth}
        />
        <circle
          cx={circle2.x}
          cy={circle2.y}
          r={circle2.radius}
          fill={circle2.fillColor}
          stroke={circle2.borderColor}
          strokeWidth={circle2.strokeWidth}
        />
        {intersectionPath && (
          <path
            d={intersectionPath}
            fill="rgba(255, 0, 0, 0.5)"
            stroke="red"
            strokeWidth="2"
          />
        )}
      </svg>
      <button onClick={() => {
        setCircle1({ ...circle1, x: circle1.x - 10 }); // Example action to move circle1
      }}>Move Set A Left</button>
      <button onClick={() => {
        setCircle2({ ...circle2, x: circle2.x + 10 }); // Example action to move circle2
      }}>Move Set B Right</button>
    </div>
  );
};

export default VennGenerator2;
