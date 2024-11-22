// // // import React, { useState } from 'react';

// // // const VectorVisualizationSVG = () => {
// // //   const vector = [1, 2];
// // //   const scalars = [0.5, 1, 2];
// // //   const colors = ['#22c55e', '#3b82f6', '#ef4444'];  // green, blue, red
  
// // //   // State for tooltip
// // //   const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  
// // //   // Convert coordinate space to SVG space
// // //   const scale = 120;  // pixels per unit
// // //   const offsetX = 300;  // center point x
// // //   const offsetY = 300;  // center point y
  
// // //   const toSVGCoord = (x, y) => ({
// // //     x: offsetX + x * scale,
// // //     y: offsetY - y * scale  // flip y because SVG y increases downward
// // //   });
  
// // //   // Create arrow marker definitions with matching fill and stroke
// // //   const createArrowMarker = (color, id) => (
// // //     <marker
// // //       id={id}
// // //       viewBox="0 0 10 10"
// // //       refX="9"
// // //       refY="5"
// // //       markerWidth="6"
// // //       markerHeight="6"
// // //       orient="auto"
// // //       markerUnits="strokeWidth"
// // //     >
// // //       <path d="M 0 0 L 10 5 L 0 10 z" fill={color} stroke={color} />
// // //     </marker>
// // //   );

// // //   // Draw grid lines
// // //   const gridLines = [];
// // //   for (let i = -5; i <= 5; i++) {
// // //     const vertLine = toSVGCoord(i, 0);
// // //     gridLines.push(
// // //       <line
// // //         key={`vert${i}`}
// // //         x1={vertLine.x}
// // //         y1={50}
// // //         x2={vertLine.x}
// // //         y2={550}
// // //         stroke="#e5e7eb"
// // //         strokeWidth="1"
// // //       />
// // //     );
// // //     const horizLine = toSVGCoord(0, i);
// // //     gridLines.push(
// // //       <line
// // //         key={`horiz${i}`}
// // //         x1={50}
// // //         y1={horizLine.y}
// // //         x2={550}
// // //         y2={horizLine.y}
// // //         stroke="#e5e7eb"
// // //         strokeWidth="1"
// // //       />
// // //     );
// // //   }

// // //   // Create segmented vectors with arrows
// // //   const vectorSegments = () => {
// // //     const segments = [];
// // //     let prevEnd = [0, 0];
    
// // //     scalars.forEach((scalar, index) => {
// // //       const scaledVector = [scalar * vector[0], scalar * vector[1]];
// // //       const start = toSVGCoord(prevEnd[0], prevEnd[1]);
// // //       const end = toSVGCoord(scaledVector[0], scaledVector[1]);
      
// // //       segments.push(
// // //         <g key={`segment-${index}`}>
// // //           <line
// // //             x1={start.x}
// // //             y1={start.y}
// // //             x2={end.x}
// // //             y2={end.y}
// // //             stroke={colors[index]}
// // //             strokeWidth="2"
// // //             markerEnd={`url(#arrow${index})`}
// // //           />
// // //           <circle
// // //             cx={end.x}
// // //             cy={end.y}
// // //             r="3"
// // //             fill={colors[index]}
// // //             stroke={colors[index]}
// // //             style={{ cursor: 'pointer' }}
// // //             onMouseEnter={(e) => {
// // //               const rect = e.target.getBoundingClientRect();
// // //               setTooltip({
// // //                 show: true,
// // //                 content: `(${(scalar * vector[0]).toFixed(1)}, ${(scalar * vector[1]).toFixed(1)}) - ${scalar}× vector`,
// // //                 x: rect.left,
// // //                 y: rect.top
// // //               });
// // //             }}
// // //             onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
// // //           />
// // //         </g>
// // //       );
      
// // //       prevEnd = scaledVector;
// // //     });
    
// // //     return segments;
// // //   };

// // //   const containerStyle = {
// // //     position: 'relative',
// // //     width: 'fit-content',
// // //     margin: '20px auto',
// // //     fontFamily: 'system-ui, -apple-system, sans-serif',
// // //   };

// // //   const tooltipStyle = {
// // //     position: 'fixed',
// // //     left: `${tooltip.x}px`,
// // //     top: `${tooltip.y - 40}px`,
// // //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // //     color: 'white',
// // //     padding: '8px 12px',
// // //     borderRadius: '4px',
// // //     fontSize: '14px',
// // //     pointerEvents: 'none',
// // //     zIndex: 1000,
// // //     display: tooltip.show ? 'block' : 'none',
// // //     fontFamily: 'monospace'
// // //   };

// // //   const cardStyle = {
// // //     backgroundColor: 'white',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // //     maxWidth: '600px',
// // //     margin: '0 auto',
// // //     padding: '20px',
// // //   };

// // //   return (
// // //     <div style={cardStyle}>
// // //       <h2 style={{ margin: '0 0 20px 0', fontSize: '1.5rem', fontWeight: '600' }}>
// // //         Scalar Multiplication of a Vector
// // //       </h2>
// // //       <div style={containerStyle}>
// // //         <svg viewBox="0 0 600 600" style={{ width: '100%', maxWidth: '600px' }}>
// // //           <defs>
// // //             {scalars.map((_, index) => 
// // //               createArrowMarker(colors[index], `arrow${index}`)
// // //             )}
// // //             {createArrowMarker("#666666", "axis-arrow")}
// // //           </defs>
          
// // //           {/* Grid */}
// // //           {gridLines}
          
// // //           {/* Axes */}
// // //           <line x1="300" y1="550" x2="300" y2="50" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
// // //           <line x1="50" y1="300" x2="550" y2="300" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
          
// // //           {/* Axis Labels */}
// // //           <text x="560" y="305" fontSize="16" fill="#666666">x</text>
// // //           <text x="295" y="40" fontSize="16" fill="#666666">y</text>
          
// // //           {/* Tick Labels */}
// // //           {[-4, -3, -2, -1, 1, 2, 3, 4].map(tick => (
// // //             <g key={tick}>
// // //               <text 
// // //                 x={toSVGCoord(tick, 0).x} 
// // //                 y={toSVGCoord(0, 0).y + 20} 
// // //                 fontSize="12" 
// // //                 textAnchor="middle"
// // //                 fill="#666666"
// // //               >
// // //                 {tick}
// // //               </text>
// // //               <text 
// // //                 x={toSVGCoord(0, 0).x - 20} 
// // //                 y={toSVGCoord(0, tick).y + 5} 
// // //                 fontSize="12" 
// // //                 textAnchor="end"
// // //                 fill="#666666"
// // //               >
// // //                 {tick}
// // //               </text>
// // //             </g>
// // //           ))}
          
// // //           {/* Vectors */}
// // //           {vectorSegments()}
          
// // //           {/* Legend */}
// // //           <g transform="translate(420, 150)">
// // //             {scalars.map((scalar, index) => (
// // //               <g key={index} transform={`translate(0, ${index * 25})`}>
// // //                 <line
// // //                   x1="0"
// // //                   y1="0"
// // //                   x2="30"
// // //                   y2="0"
// // //                   stroke={colors[index]}
// // //                   strokeWidth="2"
// // //                   markerEnd={`url(#arrow${index})`}
// // //                 />
// // //                 <text x="40" y="5" fontSize="14">
// // //                   {scalar}× vector
// // //                 </text>
// // //               </g>
// // //             ))}
// // //           </g>
// // //         </svg>
// // //         <div style={tooltipStyle}>{tooltip.content}</div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VectorVisualizationSVG;

// // import React, { useState } from 'react';

// // const VectorVisualizationSVG = () => {
// //   const vector = [1, 2];
// //   const scalars = [0.5, 1, 2];
// //   const colors = ['#22c55e', '#3b82f6', '#ef4444'];  // green, blue, red
  
// //   // State for tooltip
// //   const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  
// //   // Convert coordinate space to SVG space
// //   const scale = 120; 
// //   const offsetX = 600;  // doubled
// //   const offsetY = 600;  // doubled
  
// //   const toSVGCoord = (x, y) => ({
// //     x: offsetX + x * scale,
// //     y: offsetY - y * scale  // flip y because SVG y increases downward
// //   });
  
// //   // Create arrow marker definitions with matching fill and stroke
// //   const createArrowMarker = (color, id) => (
// //     <marker
// //       id={id}
// //       viewBox="0 0 10 10"
// //       refX="9"
// //       refY="5"
// //       markerWidth="6"
// //       markerHeight="6"
// //       orient="auto"
// //       markerUnits="strokeWidth"
// //     >
// //       <path d="M 0 0 L 10 5 L 0 10 z" fill={color} stroke={color} />
// //     </marker>
// //   );

// //   // Draw grid lines
// //   const gridLines = [];
// //   for (let i = -5; i <= 5; i++) {
// //     const vertLine = toSVGCoord(i, 0);
// //     gridLines.push(
// //       <line
// //         key={`vert${i}`}
// //         x1={vertLine.x}
// //         y1={100}    // doubled from 50
// //         x2={vertLine.x}
// //         y2={1100}   // doubled from 550
// //         stroke="#e5e7eb"
// //         strokeWidth="1"
// //       />
// //     );
// //     const horizLine = toSVGCoord(0, i);
// //     gridLines.push(
// //       <line
// //         key={`horiz${i}`}
// //         x1={100}    // doubled from 50
// //         y1={horizLine.y}
// //         x2={1100}   // doubled from 550
// //         y2={horizLine.y}
// //         stroke="#e5e7eb"
// //         strokeWidth="1"
// //       />
// //     );
// //   }

// //   // Create segmented vectors with arrows
// //   const vectorSegments = () => {
// //     const segments = [];
// //     let prevEnd = [0, 0];
    
// //     scalars.forEach((scalar, index) => {
// //       const scaledVector = [scalar * vector[0], scalar * vector[1]];
// //       const start = toSVGCoord(prevEnd[0], prevEnd[1]);
// //       const end = toSVGCoord(scaledVector[0], scaledVector[1]);
      
// //       segments.push(
// //         <g key={`segment-${index}`}>
// //           <line
// //             x1={start.x}
// //             y1={start.y}
// //             x2={end.x}
// //             y2={end.y}
// //             stroke={colors[index]}
// //             strokeWidth="2"
// //             markerEnd={`url(#arrow${index})`}
// //           />
// //           <circle
// //             cx={end.x}
// //             cy={end.y}
// //             r="6"      // doubled from 3
// //             fill={colors[index]}
// //             stroke={colors[index]}
// //             style={{ cursor: 'pointer' }}
// //             onMouseEnter={(e) => {
// //               const rect = e.target.getBoundingClientRect();
// //               setTooltip({
// //                 show: true,
// //                 content: `(${(scalar * vector[0]).toFixed(1)}, ${(scalar * vector[1]).toFixed(1)}) - ${scalar}× vector`,
// //                 x: rect.left,
// //                 y: rect.top
// //               });
// //             }}
// //             onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
// //           />
// //         </g>
// //       );
      
// //       prevEnd = scaledVector;
// //     });
    
// //     return segments;
// //   };

// //   const containerStyle = {
// //     position: 'relative',
// //     width: 'fit-content',
// //     margin: '20px auto',
// //     fontFamily: 'system-ui, -apple-system, sans-serif',
// //   };

// //   const tooltipStyle = {
// //     position: 'fixed',
// //     left: `${tooltip.x}px`,
// //     top: `${tooltip.y - 40}px`,
// //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// //     color: 'white',
// //     padding: '9.6px 14.4px',    // increased by 20%
// //     borderRadius: '4px',
// //     fontSize: '16.8px',         // increased by 20%
// //     pointerEvents: 'none',
// //     zIndex: 1000,
// //     display: tooltip.show ? 'block' : 'none',
// //     fontFamily: 'monospace'
// //   };

// //   const cardStyle = {
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //     maxWidth: '1200px',  // doubled from 600px
// //     margin: '0 auto',
// //     padding: '20px',
// //   };

// //   return (
// //     <div style={cardStyle}>
// //       <h2 style={{ margin: '0 0 20px 0', fontSize: '1.5rem', fontWeight: '600' }}>
// //         Scalar Multiplication of a Vector
// //       </h2>
// //       <div style={containerStyle}>
// //         <svg viewBox="0 0 1200 1200" style={{ width: '100%', maxWidth: '1200px' }}>
// //           <defs>
// //             {scalars.map((_, index) => 
// //               createArrowMarker(colors[index], `arrow${index}`)
// //             )}
// //             {createArrowMarker("#666666", "axis-arrow")}
// //           </defs>
          
// //           {/* Grid */}
// //           {gridLines}
          
// //           {/* Axes */}
// //           <line x1="600" y1="1100" x2="600" y2="100" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
// //           <line x1="100" y1="600" x2="1100" y2="600" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
          
// //           {/* Axis Labels */}
// //           <text x="1120" y="605" fontSize="32" fill="#666666">x</text>
// //           <text x="595" y="80" fontSize="32" fill="#666666">y</text>
          
// //           {/* Tick Labels */}
// //           {[-4, -3, -2, -1, 1, 2, 3, 4].map(tick => (
// //             <g key={tick}>
// //               <text 
// //                 x={toSVGCoord(tick, 0).x} 
// //                 y={toSVGCoord(0, 0).y + 40} 
// //                 fontSize="24" 
// //                 textAnchor="middle"
// //                 fill="#666666"
// //               >
// //                 {tick}
// //               </text>
// //               <text 
// //                 x={toSVGCoord(0, 0).x - 40} 
// //                 y={toSVGCoord(0, tick).y + 10} 
// //                 fontSize="24" 
// //                 textAnchor="end"
// //                 fill="#666666"
// //               >
// //                 {tick}
// //               </text>
// //             </g>
// //           ))}
          
// //           {/* Vectors */}
// //           {vectorSegments()}
          
// //           {/* Legend */}
// //           <g transform="translate(840, 300)">
// //             {scalars.map((scalar, index) => (
// //               <g key={index} transform={`translate(0, ${index * 50})`}>
// //                 <line
// //                   x1="0"
// //                   y1="0"
// //                   x2="60"
// //                   y2="0"
// //                   stroke={colors[index]}
// //                   strokeWidth="2"
// //                   markerEnd={`url(#arrow${index})`}
// //                 />
// //                 <text x="80" y="10" fontSize="28">
// //                   {scalar}× vector
// //                 </text>
// //               </g>
// //             ))}
// //           </g>
// //         </svg>
// //         <div style={tooltipStyle}>{tooltip.content}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VectorVisualizationSVG;
// import React, { useState } from 'react';

// const VectorVisualizationSVG = () => {
//   const vector = [1, 2];
//   const scalars = [0.5, 1, 2];
//   const colors = ['#22c55e', '#3b82f6', '#ef4444'];  // green, blue, red
  
//   // State for tooltip
//   const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  
//   // Convert coordinate space to SVG space
//   const scale = 60;  // halved from 120 because viewBox is smaller
//   const offsetX = 150;  // halved from 300
//   const offsetY = 150;  // halved from 300
  
//   const toSVGCoord = (x, y) => ({
//     x: offsetX + x * scale,
//     y: offsetY - y * scale  // flip y because SVG y increases downward
//   });
  
//   // Create arrow marker definitions with matching fill and stroke
//   const createArrowMarker = (color, id) => (
//     <marker
//       id={id}
//       viewBox="0 0 10 10"
//       refX="9"
//       refY="5"
//       markerWidth="6"
//       markerHeight="6"
//       orient="auto"
//       markerUnits="strokeWidth"
//     >
//       <path d="M 0 0 L 10 5 L 0 10 z" fill={color} stroke={color} />
//     </marker>
//   );

//   // Draw grid lines
//   const gridLines = [];
//   for (let i = -5; i <= 5; i++) {
//     const vertLine = toSVGCoord(i, 0);
//     gridLines.push(
//       <line
//         key={`vert${i}`}
//         x1={vertLine.x}
//         y1={25}
//         x2={vertLine.x}
//         y2={275}
//         stroke="#e5e7eb"
//         strokeWidth="1"
//       />
//     );
//     const horizLine = toSVGCoord(0, i);
//     gridLines.push(
//       <line
//         key={`horiz${i}`}
//         x1={25}
//         y1={horizLine.y}
//         x2={275}
//         y2={horizLine.y}
//         stroke="#e5e7eb"
//         strokeWidth="1"
//       />
//     );
//   }

//   // Create segmented vectors with arrows
//   const vectorSegments = () => {
//     const segments = [];
//     let prevEnd = [0, 0];
    
//     scalars.forEach((scalar, index) => {
//       const scaledVector = [scalar * vector[0], scalar * vector[1]];
//       const start = toSVGCoord(prevEnd[0], prevEnd[1]);
//       const end = toSVGCoord(scaledVector[0], scaledVector[1]);
      
//       segments.push(
//         <g key={`segment-${index}`}>
//           <line
//             x1={start.x}
//             y1={start.y}
//             x2={end.x}
//             y2={end.y}
//             stroke={colors[index]}
//             strokeWidth="2"
//             markerEnd={`url(#arrow${index})`}
//           />
//           <circle
//             cx={end.x}
//             cy={end.y}
//             r="3"
//             fill={colors[index]}
//             stroke={colors[index]}
//             style={{ cursor: 'pointer' }}
//             onMouseEnter={(e) => {
//               const rect = e.target.getBoundingClientRect();
//               setTooltip({
//                 show: true,
//                 content: `(${(scalar * vector[0]).toFixed(1)}, ${(scalar * vector[1]).toFixed(1)}) - ${scalar}× vector`,
//                 x: rect.left,
//                 y: rect.top
//               });
//             }}
//             onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
//           />
//         </g>
//       );
      
//       prevEnd = scaledVector;
//     });
    
//     return segments;
//   };

//   const containerStyle = {
//     position: 'relative',
//     width: 'fit-content',
//     margin: '20px auto',
//     fontFamily: 'system-ui, -apple-system, sans-serif',
//   };

//   const tooltipStyle = {
//     position: 'fixed',
//     left: `${tooltip.x}px`,
//     top: `${tooltip.y - 40}px`,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     color: 'white',
//     padding: '9.6px 14.4px',    // increased by 20%
//     borderRadius: '4px',
//     fontSize: '16.8px',         // increased by 20%
//     pointerEvents: 'none',
//     zIndex: 1000,
//     display: tooltip.show ? 'block' : 'none',
//     fontFamily: 'monospace'
//   };

//   const cardStyle = {
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//   };

//   return (
//     <div style={cardStyle}>
//       <h2 style={{ margin: '0 0 20px 0', fontSize: '1.5rem', fontWeight: '600' }}>
//         Scalar Multiplication of a Vector
//       </h2>
//       <div style={containerStyle}>
//         <svg viewBox="0 0 300 300" style={{ width: '100%', maxWidth: '600px' }}>
//           <defs>
//             {scalars.map((_, index) => 
//               createArrowMarker(colors[index], `arrow${index}`)
//             )}
//             {createArrowMarker("#666666", "axis-arrow")}
//           </defs>
          
//           {/* Grid */}
//           {gridLines}
          
//           {/* Axes */}
//           <line x1="150" y1="275" x2="150" y2="25" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
//           <line x1="25" y1="150" x2="275" y2="150" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
          
//           {/* Axis Labels */}
//           <text x="280" y="155" fontSize="16" fill="#666666">x</text>
//           <text x="145" y="20" fontSize="16" fill="#666666">y</text>
          
//           {/* Tick Labels */}
//           {[-4, -3, -2, -1, 1, 2, 3, 4].map(tick => (
//             <g key={tick}>
//               <text 
//                 x={toSVGCoord(tick, 0).x} 
//                 y={toSVGCoord(0, 0).y + 20} 
//                 fontSize="12" 
//                 textAnchor="middle"
//                 fill="#666666"
//               >
//                 {tick}
//               </text>
//               <text 
//                 x={toSVGCoord(0, 0).x - 20} 
//                 y={toSVGCoord(0, tick).y + 5} 
//                 fontSize="12" 
//                 textAnchor="end"
//                 fill="#666666"
//               >
//                 {tick}
//               </text>
//             </g>
//           ))}
          
//           {/* Vectors */}
//           {vectorSegments()}
          
//           {/* Legend */}
//           <g transform="translate(210, 75)">
//             {scalars.map((scalar, index) => (
//               <g key={index} transform={`translate(0, ${index * 25})`}>
//                 <line
//                   x1="0"
//                   y1="0"
//                   x2="30"
//                   y2="0"
//                   stroke={colors[index]}
//                   strokeWidth="2"
//                   markerEnd={`url(#arrow${index})`}
//                 />
//                 <text x="40" y="5" fontSize="14">
//                   {scalar}× vector
//                 </text>
//               </g>
//             ))}
//           </g>
//         </svg>
//         <div style={tooltipStyle}>{tooltip.content}</div>
//       </div>
//     </div>
//   );
// };

// export default VectorVisualizationSVG;

import React, { useState } from 'react';

const VectorVisualizationSVG = () => {
  const vector = [1, 2];
  const scalars = [0.5, 1, 2];
  const colors = ['#22c55e', '#3b82f6', '#ef4444'];
  
  const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  
  const scale = 60;
  const offsetX = 300;
  const offsetY = 300;
  
  const toSVGCoord = (x, y) => ({
    x: offsetX + x * scale,
    y: offsetY - y * scale
  });
  
  const createArrowMarker = (color, id) => (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill={color} stroke={color} />
    </marker>
  );

  const gridLines = [];
  for (let i = -5; i <= 5; i++) {
    const vertLine = toSVGCoord(i, 0);
    gridLines.push(
      <line
        key={`vert${i}`}
        x1={vertLine.x}
        y1={50}
        x2={vertLine.x}
        y2={550}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    );
    const horizLine = toSVGCoord(0, i);
    gridLines.push(
      <line
        key={`horiz${i}`}
        x1={50}
        y1={horizLine.y}
        x2={550}
        y2={horizLine.y}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    );
  }

  const vectorSegments = () => {
    const segments = [];
    let prevEnd = [0, 0];
    
    scalars.forEach((scalar, index) => {
      const scaledVector = [scalar * vector[0], scalar * vector[1]];
      const start = toSVGCoord(prevEnd[0], prevEnd[1]);
      const end = toSVGCoord(scaledVector[0], scaledVector[1]);
      
      segments.push(
        <g key={`segment-${index}`}>
          <line
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke={colors[index]}
            strokeWidth="2"
            markerEnd={`url(#arrow${index})`}
          />
          <circle
            cx={end.x}
            cy={end.y}
            r="3"
            fill={colors[index]}
            stroke={colors[index]}
            style={{ cursor: 'pointer' }}
            onMouseEnter={(e) => {
              const rect = e.target.getBoundingClientRect();
              setTooltip({
                show: true,
                content: `(${(scalar * vector[0]).toFixed(1)}, ${(scalar * vector[1]).toFixed(1)}) - ${scalar}× vector`,
                x: rect.left,
                y: rect.top
              });
            }}
            onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
          />
        </g>
      );
      
      prevEnd = scaledVector;
    });
    
    return segments;
  };

  const containerStyle = {
    position: 'relative',
    width: '50%',
    margin: '20px 0',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    // backgroundColor:'red',
    
  };

  const tooltipStyle = {
    position: 'fixed',
    left: `${tooltip.x}px`,
    top: `${tooltip.y - 40}px`,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '6.4px 9.6px',
    borderRadius: '4px',
    fontSize: '11.2px',
    pointerEvents: 'none',
    zIndex: 1000,
    display: tooltip.show ? 'block' : 'none',
    fontFamily: 'monospace'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100vw',
    margin: '0 0',
    padding: '20px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '1.5rem', fontWeight: '600' }}>
        Scalar Multiplication of a Vector
      </h2>
      <div style={containerStyle}>
        <svg viewBox="0 0 600 400" style={{ width: '100%',transform:'scale(0.9)' }}>
          <defs>
            {scalars.map((_, index) => 
              createArrowMarker(colors[index], `arrow${index}`)
            )}
            {createArrowMarker("#666666", "axis-arrow")}
          </defs>
          
          {gridLines}
          
          <line x1="300" y1="550" x2="300" y2="50" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
          <line x1="50" y1="300" x2="550" y2="300" stroke="#666666" strokeWidth="1" markerEnd="url(#axis-arrow)" />
          
          <text x="560" y="305" fontSize="16" fill="#666666">x</text>
          <text x="295" y="40" fontSize="16" fill="#666666">y</text>
          
          {[-4, -3, -2, -1, 1, 2, 3, 4].map(tick => (
            <g key={tick}>
              <text 
                x={toSVGCoord(tick, 0).x} 
                y={toSVGCoord(0, 0).y + 20} 
                fontSize="12" 
                textAnchor="middle"
                fill="#666666"
              >
                {tick}
              </text>
              <text 
                x={toSVGCoord(0, 0).x - 20} 
                y={toSVGCoord(0, tick).y + 5} 
                fontSize="12" 
                textAnchor="end"
                fill="#666666"
              >
                {tick}
              </text>
            </g>
          ))}
          
          {vectorSegments()}
          
          <g transform="translate(420, 150)">
            {scalars.map((scalar, index) => (
              <g key={index} transform={`translate(0, ${index * 25})`}>
                <line
                  x1="0"
                  y1="0"
                  x2="30"
                  y2="0"
                  stroke={colors[index]}
                  strokeWidth="2"
                  markerEnd={`url(#arrow${index})`}
                />
                <text x="40" y="5" fontSize="14">
                  {scalar}× vector
                </text>
              </g>
            ))}
          </g>
        </svg>
        <div style={tooltipStyle}>{tooltip.content}</div>
      </div>
    </div>
  );
};

export default VectorVisualizationSVG;