

import React from 'react';

const CircularDiagram = ({ data, showCircle = false, radius = 100, width = 1000, height = 700 }) => {
const centerX = width / 2;
const centerY = height / 2;

const getPosition = (index, total) => {
  const angle = (index * 2 * Math.PI) / total;
  return {
    x: centerX + radius * Math.cos(angle - Math.PI / 2),
    y: centerY + radius * Math.sin(angle - Math.PI / 2),
    angle: angle - Math.PI / 2
  };
};

const wrapText = (text, maxWidth) => {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0] || '';
  const maxCharsPerLine = Math.floor(maxWidth / 8);

  for(let i = 1; i < words.length; i++) {
    const word = words[i];
    if ((currentLine + " " + word).length <= maxCharsPerLine) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
};

const TextBox = ({ x, y, angle, textBox, nodeSize }) => {
  if (!textBox) return null;

  const { text, width: boxWidth = 150 } = textBox;
  
  const boxDistance = nodeSize + 80;
  let boxX = x + Math.cos(angle) * boxDistance;
  let boxY = y + Math.sin(angle) * boxDistance;
  
  const lines = wrapText(text, boxWidth - 20);
  const lineHeight = 16;
  const padding = 8;
  const boxHeight = (lines.length * lineHeight) + (padding * 2);
  
  const margin = boxWidth/2 + 20;
  boxX = Math.max(margin, Math.min(width - margin, boxX));
  boxY = Math.max(boxHeight/2 + 20, Math.min(height - boxHeight/2 - 20, boxY));
  
  const lineStartX = x + Math.cos(angle) * nodeSize;
  const lineStartY = y + Math.sin(angle) * nodeSize;
  const lineEndX = boxX - Math.cos(angle) * (boxWidth/2);
  const lineEndY = boxY - Math.sin(angle) * (boxHeight/2);

  return (
    <g>
      <line
        x1={lineStartX}
        y1={lineStartY}
        x2={lineEndX}
        y2={lineEndY}
        stroke="#ccc"
        strokeWidth="1"
      />
      <rect
        x={boxX - boxWidth/2}
        y={boxY - boxHeight/2}
        width={boxWidth}
        height={boxHeight}
        fill="#fff"
        stroke="#ccc"
        strokeWidth="1"
        rx="4"
      />
      {lines.map((line, i) => (
        <text
          key={i}
          x={boxX}
          y={boxY - boxHeight/2 + padding + (i * lineHeight) + (lineHeight/2)}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: '12px', fill: '#666' }}
        >
          {line}
        </text>
      ))}
    </g>
  );
};

const NodeContent = ({ x, y, size, color, title, textBox, angle }) => (
  <>
    <circle 
      cx={x} 
      cy={y} 
      r={size} 
      fill={color || '#000000'}
    />
    <foreignObject
      x={x - size}
      y={y - size}
      width={size * 2}
      height={size * 2}
    >
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 'bold',
        pointerEvents: 'none',
        wordWrap: 'break-word',
        hyphens: 'auto',
        lineHeight: '1.1',
        padding: '4px',
        overflowWrap: 'break-word'
      }}>
        {title}
      </div>
    </foreignObject>
    <TextBox x={x} y={y} angle={angle} textBox={textBox} nodeSize={size} />
  </>
);

const ClickableNode = ({ x, y, size, color, title, link, textBox, angle }) => {
  const handleClick = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <g 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
    >
      <NodeContent 
        x={x} 
        y={y} 
        size={size} 
        color={color} 
        title={title} 
        textBox={textBox}
        angle={angle}
      />
    </g>
  );
};

return (
  <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#fff' }}>
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%' }}>
      {showCircle && (
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke="lightgray"
          fill="none"
          strokeWidth="6"
        />
      )}

      {data.link ? (
        <ClickableNode 
          x={centerX}
          y={centerY}
          size={data.size || 40}
          color={data.color}
          title={data.title}
          link={data.link}
          textBox={data.textBox}
          angle={0}
        />
      ) : (
        <NodeContent 
          x={centerX}
          y={centerY}
          size={data.size || 40}
          color={data.color}
          title={data.title}
          textBox={data.textBox}
          angle={0}
        />
      )}

      {data.nested.map((item, index) => {
        const pos = getPosition(index, data.nested.length);
        
        return item.link ? (
          <ClickableNode 
            key={item.title}
            x={pos.x}
            y={pos.y}
            size={item.size || 30}
            color={item.color}
            title={item.title}
            link={item.link}
            textBox={item.textBox}
            angle={pos.angle}
          />
        ) : (
          <g key={item.title}>
            <NodeContent 
              x={pos.x}
              y={pos.y}
              size={item.size || 30}
              color={item.color}
              title={item.title}
              textBox={item.textBox}
              angle={pos.angle}
            />
          </g>
        );
      })}
    </svg>
  </div>
);
};

export default CircularDiagram;