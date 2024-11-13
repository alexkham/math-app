import React from 'react';

export default function GenericProbabilityTree({ data }) {
  const width = 1200;
  const height = data.levels.length * 200;
  const verticalGap = height / (data.levels.length + 1);
  
  function getNodePosition(level, index) {
    const nodesInLevel = Math.pow(2, level);
    const horizontalGap = width / (nodesInLevel + 1);
    return {
      x: horizontalGap * (index + 1),
      y: verticalGap * (level + 1)
    };
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Draw edges first */}
      {data.levels.map((level, levelIndex) => {
        return level.nodes.map((node, nodeIndex) => {
          const pos = getNodePosition(levelIndex, nodeIndex);
          const hasParent = levelIndex > 0;
          
          if (hasParent) {
            const parentIndex = Math.floor(nodeIndex / 2);
            const parentPos = getNodePosition(levelIndex - 1, parentIndex);

            return (
              <g key={`edge-${levelIndex}-${nodeIndex}`}>
                <line 
                  x1={parentPos.x}
                  y1={parentPos.y}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={level.color}
                  strokeWidth="1"
                />
                <text
                  x={(parentPos.x + pos.x) / 2}
                  y={(parentPos.y + pos.y) / 2}
                  fill={level.color}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {node.probability}
                </text>
              </g>
            );
          }
          return null;
        });
      })}

      {/* Draw root */}
      <g>
        <circle
          cx={width/2}
          cy={verticalGap}
          r={20}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
        <text
          x={width/2}
          y={verticalGap}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Ω
        </text>
      </g>

      {/* Draw all other nodes on top of edges */}
      {data.levels.map((level, levelIndex) => {
        return level.nodes.map((node, nodeIndex) => {
          const pos = getNodePosition(levelIndex, nodeIndex);
          
          return (
            <g key={`node-${levelIndex}-${nodeIndex}`}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={20}
                fill="white"
                stroke={level.color}
                strokeWidth="1"
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {node.event}
              </text>
            </g>
          );
        });
      })}
    </svg>
  );
}