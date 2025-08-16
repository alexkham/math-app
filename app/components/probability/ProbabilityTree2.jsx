// import React from 'react';
// import { SVG } from 'react-svg';

// const ProbabilityTree2 = ({ data }) => {
//   const drawTree = (node, depth = 0, position = { x: 100, y: 100 }) => {
//     if (!node) return null;

//     const xOffset = 200; // Horizontal distance between nodes
//     const yOffset = 100; // Vertical distance between nodes

//     return (
//       <>
//         <circle cx={position.x} cy={position.y} r={20} fill="blue" />
//         <text x={position.x} y={position.y - 30} fill="white" textAnchor="middle">
//           {node.probability}
//         </text>
//         {node.children.map((child, index) => (
//           <>
//             <line
//               x1={position.x}
//               y1={position.y}
//               x2={position.x + xOffset - depth * 50}
//               y2={position.y + yOffset + index * yOffset}
//               stroke="black"
//             />
//             {drawTree(child, depth + 1, {
//               x: position.x + xOffset - depth * 50,
//               y: position.y + yOffset + index * yOffset,
//             })}
//           </>
//         ))}
//       </>
//     );
//   };

//   return (
//     <svg width="100%" height="500px">
//       {drawTree(data)}
//     </svg>
//   );
// };

// export default ProbabilityTree2;


import React from 'react';

const drawNode = (node, depth = 0, position = { x: 100, y: 100 }) => {
  const xOffset = 200;
  const yOffset = 100;
  let nodes = [];
  let links = [];

  if (node.children) {
    node.children.forEach((child, index) => {
      const childPos = {
        x: position.x + xOffset,
        y: position.y + (index - (node.children.length - 1) / 2) * yOffset
      };
      links.push(
        <line
          x1={position.x}
          y1={position.y}
          x2={childPos.x}
          y2={childPos.y}
          stroke="#000"
          key={`line-${node.name}-${child.name}`}
        />
      );
      nodes.push(...drawNode(child, depth + 1, childPos));
    });
  }

  nodes.push(
    <g key={`node-${node.name}`}>
      <circle cx={position.x} cy={position.y} r={20} fill="blue" />
      <text x={position.x} y={position.y + 5} textAnchor="middle" fill="white">
        {`${node.name} (${node.probability})`}
      </text>
    </g>
  );

  return [...links, ...nodes];
};

const ProbabilityTree = ({ data }) => {
  return (
    <svg width="100%" height="600">
      {data ? drawNode(data) : null}
    </svg>
  );
};

export default ProbabilityTree;
