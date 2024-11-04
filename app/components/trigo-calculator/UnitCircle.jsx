// // // // // // import React, { useState, useRef } from 'react';

// // // // // // const UnitCircle = () => {
// // // // // //   const [angle, setAngle] = useState(0);
// // // // // //   const [hoveredAngle, setHoveredAngle] = useState(null);
// // // // // //   const [inputAngle, setInputAngle] = useState('0');
// // // // // //   const svgRef = useRef(null);
// // // // // //   const isDragging = useRef(false);

// // // // // //   // Styles
// // // // // //   const styles = {
// // // // // //     container: {
// // // // // //       maxWidth: '800px',
// // // // // //       margin: '0 auto',
// // // // // //       padding: '20px',
// // // // // //       fontFamily: 'Arial, sans-serif'
// // // // // //     },
// // // // // //     card: {
// // // // // //       border: '1px solid #e2e8f0',
// // // // // //       borderRadius: '8px',
// // // // // //       backgroundColor: 'white',
// // // // // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
// // // // // //     },
// // // // // //     header: {
// // // // // //       padding: '20px',
// // // // // //       borderBottom: '1px solid #e2e8f0'
// // // // // //     },
// // // // // //     title: {
// // // // // //       fontSize: '24px',
// // // // // //       fontWeight: 'bold',
// // // // // //       margin: 0
// // // // // //     },
// // // // // //     content: {
// // // // // //       padding: '20px'
// // // // // //     },
// // // // // //     statsPanel: {
// // // // // //       backgroundColor: '#f8fafc',
// // // // // //       padding: '16px',
// // // // // //       borderRadius: '8px',
// // // // // //       marginBottom: '16px'
// // // // // //     },
// // // // // //     statTitle: {
// // // // // //       fontWeight: 'bold',
// // // // // //       marginBottom: '8px'
// // // // // //     },
// // // // // //     controls: {
// // // // // //       display: 'flex',
// // // // // //       gap: '8px',
// // // // // //       marginBottom: '16px',
// // // // // //       alignItems: 'center'
// // // // // //     },
// // // // // //     input: {
// // // // // //       flex: 1,
// // // // // //       padding: '8px 12px',
// // // // // //       borderRadius: '4px',
// // // // // //       border: '1px solid #e2e8f0',
// // // // // //       fontSize: '14px'
// // // // // //     },
// // // // // //     button: {
// // // // // //       padding: '8px 12px',
// // // // // //       borderRadius: '4px',
// // // // // //       border: '1px solid #e2e8f0',
// // // // // //       backgroundColor: 'white',
// // // // // //       cursor: 'pointer',
// // // // // //       display: 'flex',
// // // // // //       alignItems: 'center',
// // // // // //       justifyContent: 'center',
// // // // // //       width: '36px',
// // // // // //       height: '36px',
// // // // // //       '&:hover': {
// // // // // //         backgroundColor: '#f8fafc'
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   // Special angles and their coordinates
// // // // // //   const specialPoints = [
// // // // // //     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
// // // // // //     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
// // // // // //     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
// // // // // //     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
// // // // // //     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
// // // // // //     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
// // // // // //     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
// // // // // //     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
// // // // // //     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
// // // // // //     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
// // // // // //     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
// // // // // //     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
// // // // // //     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
// // // // // //     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
// // // // // //     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
// // // // // //     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
// // // // // //   ];

// // // // // //   // SVG configuration
// // // // // //   const size = 400;
// // // // // //   const center = size / 2;
// // // // // //   const radius = size * 0.4;
// // // // // //   const padding = 20;

// // // // // //   // Calculate coordinates
// // // // // //   const x = Math.cos(angle) * radius + center;
// // // // // //   const y = -Math.sin(angle) * radius + center;
// // // // // //   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

// // // // // //   const handleInputChange = (e) => {
// // // // // //     const value = e.target.value;
// // // // // //     setInputAngle(value);
// // // // // //     const numValue = parseFloat(value);
// // // // // //     if (!isNaN(numValue)) {
// // // // // //       setAngle((numValue * Math.PI) / 180);
// // // // // //     }
// // // // // //   };

// // // // // //   const incrementAngle = () => {
// // // // // //     const newAngle = (degrees + 5) % 360;
// // // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // // //     setInputAngle(newAngle.toString());
// // // // // //   };

// // // // // //   const decrementAngle = () => {
// // // // // //     const newAngle = (degrees - 5 + 360) % 360;
// // // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // // //     setInputAngle(newAngle.toString());
// // // // // //   };

// // // // // //   const resetAngle = () => {
// // // // // //     setAngle(0);
// // // // // //     setInputAngle('0');
// // // // // //   };

// // // // // //   // Mouse handlers
// // // // // //   const handleMouseDown = () => {
// // // // // //     isDragging.current = true;
// // // // // //   };

// // // // // //   const handleMouseUp = () => {
// // // // // //     isDragging.current = false;
// // // // // //   };

// // // // // //   const handleMouseMove = (e) => {
// // // // // //     if (!isDragging.current || !svgRef.current) return;
// // // // // //     const svgRect = svgRef.current.getBoundingClientRect();
// // // // // //     const svgX = e.clientX - svgRect.left;
// // // // // //     const svgY = e.clientY - svgRect.top;
// // // // // //     const dx = svgX - svgRect.width / 2;
// // // // // //     const dy = svgRect.height / 2 - svgY;
// // // // // //     const newAngle = Math.atan2(dy, dx);
// // // // // //     setAngle(newAngle);
// // // // // //     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <div style={styles.card}>
// // // // // //         <div style={styles.header}>
// // // // // //           <h2 style={styles.title}>Interactive Unit Circle</h2>
// // // // // //         </div>
// // // // // //         <div style={styles.content}>
// // // // // //           <div style={styles.statsPanel}>
// // // // // //             <div style={styles.statTitle}>Current Position</div>
// // // // // //             <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
// // // // // //             <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
// // // // // //             <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
// // // // // //           </div>
          
// // // // // //           <div style={styles.controls}>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               value={inputAngle}
// // // // // //               onChange={handleInputChange}
// // // // // //               placeholder="Enter angle in degrees"
// // // // // //               style={styles.input}
// // // // // //             />
// // // // // //             <button onClick={decrementAngle} style={styles.button}>
// // // // // //               ↓
// // // // // //             </button>
// // // // // //             <button onClick={incrementAngle} style={styles.button}>
// // // // // //               ↑
// // // // // //             </button>
// // // // // //             <button onClick={resetAngle} style={styles.button}>
// // // // // //               ↺
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           <svg
// // // // // //             ref={svgRef}
// // // // // //             viewBox={`0 0 ${size} ${size}`}
// // // // // //             style={{ width: '100%', height: 'auto' }}
// // // // // //             onMouseDown={handleMouseDown}
// // // // // //             onMouseUp={handleMouseUp}
// // // // // //             onMouseMove={handleMouseMove}
// // // // // //             onMouseLeave={handleMouseUp}
// // // // // //           >
// // // // // //             <defs>
// // // // // //               <marker
// // // // // //                 id="arrowhead"
// // // // // //                 markerWidth="10"
// // // // // //                 markerHeight="7"
// // // // // //                 refX="9"
// // // // // //                 refY="3.5"
// // // // // //                 orient="auto"
// // // // // //               >
// // // // // //                 <polygon points="0 0, 10 3.5, 0 7" fill="black" />
// // // // // //               </marker>
// // // // // //             </defs>

// // // // // //             {/* Grid */}
// // // // // //             <g stroke="gray" strokeWidth="0.5" opacity="0.2">
// // // // // //               {[-1, -0.5, 0.5, 1].map((factor) => (
// // // // // //                 <React.Fragment key={`grid${factor}`}>
// // // // // //                   <line
// // // // // //                     x1={center + radius * factor}
// // // // // //                     y1={padding}
// // // // // //                     x2={center + radius * factor}
// // // // // //                     y2={size - padding}
// // // // // //                   />
// // // // // //                   <line
// // // // // //                     x1={padding}
// // // // // //                     y1={center + radius * factor}
// // // // // //                     x2={size - padding}
// // // // // //                     y2={center + radius * factor}
// // // // // //                   />
// // // // // //                 </React.Fragment>
// // // // // //               ))}
// // // // // //             </g>

// // // // // //             {/* Axes */}
// // // // // //             <line 
// // // // // //               x1={padding} 
// // // // // //               y1={center} 
// // // // // //               x2={size - padding} 
// // // // // //               y2={center} 
// // // // // //               stroke="black" 
// // // // // //               strokeWidth="1"
// // // // // //               markerEnd="url(#arrowhead)"
// // // // // //             />
// // // // // //             <line 
// // // // // //               x1={center} 
// // // // // //               y1={size - padding} 
// // // // // //               x2={center} 
// // // // // //               y2={padding} 
// // // // // //               stroke="black" 
// // // // // //               strokeWidth="1"
// // // // // //               markerEnd="url(#arrowhead)"
// // // // // //             />

// // // // // //             {/* Unit circle */}
// // // // // //             <circle
// // // // // //               cx={center}
// // // // // //               cy={center}
// // // // // //               r={radius}
// // // // // //               fill="none"
// // // // // //               stroke="black"
// // // // // //               strokeWidth="1"
// // // // // //               opacity="0.3"
// // // // // //             />

// // // // // //             {/* Special points */}
// // // // // //             {specialPoints.map((point, index) => {
// // // // // //               const px = center + radius * point.coords[0];
// // // // // //               const py = center - radius * point.coords[1];
// // // // // //               const angleRad = (point.angle * Math.PI) / 180;
              
// // // // // //               return (
// // // // // //                 <g key={index}>
// // // // // //                   <circle
// // // // // //                     cx={px}
// // // // // //                     cy={py}
// // // // // //                     r="3"
// // // // // //                     fill="blue"
// // // // // //                     opacity="0.5"
// // // // // //                     style={{ cursor: 'pointer' }}
// // // // // //                     onMouseEnter={() => setHoveredAngle(point)}
// // // // // //                     onMouseLeave={() => setHoveredAngle(null)}
// // // // // //                   />
// // // // // //                   <text
// // // // // //                     x={px + (Math.cos(angleRad) * 20)}
// // // // // //                     y={py - (Math.sin(angleRad) * 20)}
// // // // // //                     fontSize="10"
// // // // // //                     opacity="0.5"
// // // // // //                     textAnchor="middle"
// // // // // //                     dominantBaseline="middle"
// // // // // //                   >
// // // // // //                     {point.degrees}
// // // // // //                     {' '}
// // // // // //                     ({point.radians})
// // // // // //                   </text>
// // // // // //                 </g>
// // // // // //               );
// // // // // //             })}

// // // // // //             {/* Vector */}
// // // // // //             <line
// // // // // //               x1={center}
// // // // // //               y1={center}
// // // // // //               x2={x}
// // // // // //               y2={y}
// // // // // //               stroke="blue"
// // // // // //               strokeWidth="2"
// // // // // //               style={{ cursor: 'pointer' }}
// // // // // //             />
            
// // // // // //             <circle
// // // // // //               cx={x}
// // // // // //               cy={y}
// // // // // //               r="6"
// // // // // //               fill="blue"
// // // // // //               style={{ cursor: 'pointer' }}
// // // // // //             />

// // // // // //             {/* Axis labels */}
// // // // // //             <text x={size - padding - 10} y={center - 10} fontSize="16">x</text>
// // // // // //             <text x={center + 10} y={padding + 10} fontSize="16">y</text>

// // // // // //             {/* Hover information */}
// // // // // //             {hoveredAngle && (
// // // // // //               <g>
// // // // // //                 <rect
// // // // // //                   x={10}
// // // // // //                   y={10}
// // // // // //                   width="200"
// // // // // //                   height="80"
// // // // // //                   fill="white"
// // // // // //                   stroke="black"
// // // // // //                   strokeWidth="1"
// // // // // //                   opacity="0.9"
// // // // // //                 />
// // // // // //                 <text x={20} y={30} fontSize="12">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
// // // // // //                 <text x={20} y={50} fontSize="12">Coordinates: </text>
// // // // // //                 <text x={20} y={70} fontSize="12">{hoveredAngle.label}</text>
// // // // // //               </g>
// // // // // //             )}
// // // // // //           </svg>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default UnitCircle;

// // // // // import React, { useState, useRef } from 'react';

// // // // // const UnitCircle = () => {
// // // // //   const [angle, setAngle] = useState(0);
// // // // //   const [hoveredAngle, setHoveredAngle] = useState(null);
// // // // //   const [inputAngle, setInputAngle] = useState('0');
// // // // //   const svgRef = useRef(null);
// // // // //   const isDragging = useRef(false);

// // // // //   // Special angles and their coordinates
// // // // //   const specialPoints = [
// // // // //     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
// // // // //     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
// // // // //     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
// // // // //     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
// // // // //     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
// // // // //     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
// // // // //     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
// // // // //     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
// // // // //     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
// // // // //     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
// // // // //     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
// // // // //     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
// // // // //     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
// // // // //     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
// // // // //     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
// // // // //     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
// // // // //   ];

// // // // //   // SVG configuration - scaled down
// // // // //   const size = 240;
// // // // //   const center = size / 2;
// // // // //   const radius = size * 0.4;
// // // // //   const padding = 12;

// // // // //   // Calculate coordinates
// // // // //   const x = Math.cos(angle) * radius + center;
// // // // //   const y = -Math.sin(angle) * radius + center;
// // // // //   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

// // // // //   const handleInputChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setInputAngle(value);
// // // // //     const numValue = parseFloat(value);
// // // // //     if (!isNaN(numValue)) {
// // // // //       setAngle((numValue * Math.PI) / 180);
// // // // //     }
// // // // //   };

// // // // //   const incrementAngle = () => {
// // // // //     const newAngle = (degrees + 5) % 360;
// // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // //     setInputAngle(newAngle.toString());
// // // // //   };

// // // // //   const decrementAngle = () => {
// // // // //     const newAngle = (degrees - 5 + 360) % 360;
// // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // //     setInputAngle(newAngle.toString());
// // // // //   };

// // // // //   const resetAngle = () => {
// // // // //     setAngle(0);
// // // // //     setInputAngle('0');
// // // // //   };

// // // // //   const handleMouseDown = () => {
// // // // //     isDragging.current = true;
// // // // //   };

// // // // //   const handleMouseUp = () => {
// // // // //     isDragging.current = false;
// // // // //   };

// // // // //   const handleMouseMove = (e) => {
// // // // //     if (!isDragging.current || !svgRef.current) return;
// // // // //     const svgRect = svgRef.current.getBoundingClientRect();
// // // // //     const svgX = e.clientX - svgRect.left;
// // // // //     const svgY = e.clientY - svgRect.top;
// // // // //     const dx = svgX - svgRect.width / 2;
// // // // //     const dy = svgRect.height / 2 - svgY;
// // // // //     const newAngle = Math.atan2(dy, dx);
// // // // //     setAngle(newAngle);
// // // // //     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
// // // // //   };

// // // // //   const styles = {
// // // // //     container: {
// // // // //       maxWidth: '1000px',
// // // // //       margin: '0 auto',
// // // // //       padding: '20px',
// // // // //       fontFamily: 'Arial, sans-serif'
// // // // //     },
// // // // //     card: {
// // // // //       border: '1px solid #e2e8f0',
// // // // //       borderRadius: '8px',
// // // // //       backgroundColor: 'white',
// // // // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
// // // // //     },
// // // // //     header: {
// // // // //       padding: '20px',
// // // // //       borderBottom: '1px solid #e2e8f0'
// // // // //     },
// // // // //     title: {
// // // // //       fontSize: '24px',
// // // // //       fontWeight: 'bold',
// // // // //       margin: 0
// // // // //     },
// // // // //     content: {
// // // // //       padding: '20px',
// // // // //       display: 'flex',
// // // // //       gap: '24px',
// // // // //       alignItems: 'flex-start'
// // // // //     },
// // // // //     circleContainer: {
// // // // //       width: '240px',
// // // // //       flexShrink: 0
// // // // //     },
// // // // //     controlsContainer: {
// // // // //       flex: 1,
// // // // //       padding: '0 20px'
// // // // //     },
// // // // //     statsPanel: {
// // // // //       backgroundColor: '#f8fafc',
// // // // //       padding: '16px',
// // // // //       borderRadius: '8px',
// // // // //       marginBottom: '16px'
// // // // //     },
// // // // //     statTitle: {
// // // // //       fontWeight: 'bold',
// // // // //       marginBottom: '8px'
// // // // //     },
// // // // //     controls: {
// // // // //       display: 'flex',
// // // // //       gap: '8px',
// // // // //       marginBottom: '16px',
// // // // //       alignItems: 'center'
// // // // //     },
// // // // //     input: {
// // // // //       flex: 1,
// // // // //       padding: '8px 12px',
// // // // //       borderRadius: '4px',
// // // // //       border: '1px solid #e2e8f0',
// // // // //       fontSize: '14px'
// // // // //     },
// // // // //     button: {
// // // // //       padding: '8px 12px',
// // // // //       borderRadius: '4px',
// // // // //       border: '1px solid #e2e8f0',
// // // // //       backgroundColor: 'white',
// // // // //       cursor: 'pointer',
// // // // //       display: 'flex',
// // // // //       alignItems: 'center',
// // // // //       justifyContent: 'center',
// // // // //       width: '36px',
// // // // //       height: '36px',
// // // // //       '&:hover': {
// // // // //         backgroundColor: '#f8fafc'
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <div style={styles.card}>
// // // // //         <div style={styles.header}>
// // // // //           <h2 style={styles.title}>Interactive Unit Circle</h2>
// // // // //         </div>
// // // // //         <div style={styles.content}>
// // // // //           <div style={styles.circleContainer}>
// // // // //             <svg
// // // // //               ref={svgRef}
// // // // //               viewBox={`0 0 ${size} ${size}`}
// // // // //               style={{ width: '100%', height: 'auto' }}
// // // // //               onMouseDown={handleMouseDown}
// // // // //               onMouseUp={handleMouseUp}
// // // // //               onMouseMove={handleMouseMove}
// // // // //               onMouseLeave={handleMouseUp}
// // // // //             >
// // // // //               <defs>
// // // // //                 <marker
// // // // //                   id="arrowhead"
// // // // //                   markerWidth="10"
// // // // //                   markerHeight="7"
// // // // //                   refX="9"
// // // // //                   refY="3.5"
// // // // //                   orient="auto"
// // // // //                 >
// // // // //                   <polygon points="0 0, 10 3.5, 0 7" fill="black" />
// // // // //                 </marker>
// // // // //               </defs>

// // // // //               {/* Grid */}
// // // // //               <g stroke="gray" strokeWidth="0.5" opacity="0.2">
// // // // //                 {[-1, -0.5, 0.5, 1].map((factor) => (
// // // // //                   <React.Fragment key={`grid${factor}`}>
// // // // //                     <line
// // // // //                       x1={center + radius * factor}
// // // // //                       y1={padding}
// // // // //                       x2={center + radius * factor}
// // // // //                       y2={size - padding}
// // // // //                     />
// // // // //                     <line
// // // // //                       x1={padding}
// // // // //                       y1={center + radius * factor}
// // // // //                       x2={size - padding}
// // // // //                       y2={center + radius * factor}
// // // // //                     />
// // // // //                   </React.Fragment>
// // // // //                 ))}
// // // // //               </g>

// // // // //               {/* Axes */}
// // // // //               <line 
// // // // //                 x1={padding} 
// // // // //                 y1={center} 
// // // // //                 x2={size - padding} 
// // // // //                 y2={center} 
// // // // //                 stroke="black" 
// // // // //                 strokeWidth="1"
// // // // //                 markerEnd="url(#arrowhead)"
// // // // //               />
// // // // //               <line 
// // // // //                 x1={center} 
// // // // //                 y1={size - padding} 
// // // // //                 x2={center} 
// // // // //                 y2={padding} 
// // // // //                 stroke="black" 
// // // // //                 strokeWidth="1"
// // // // //                 markerEnd="url(#arrowhead)"
// // // // //               />

// // // // //               {/* Unit circle */}
// // // // //               <circle
// // // // //                 cx={center}
// // // // //                 cy={center}
// // // // //                 r={radius}
// // // // //                 fill="none"
// // // // //                 stroke="black"
// // // // //                 strokeWidth="1"
// // // // //                 opacity="0.3"
// // // // //               />

// // // // //               {/* Special points */}
// // // // //               {specialPoints.map((point, index) => {
// // // // //                 const px = center + radius * point.coords[0];
// // // // //                 const py = center - radius * point.coords[1];
// // // // //                 const angleRad = (point.angle * Math.PI) / 180;
                
// // // // //                 return (
// // // // //                   <g key={index}>
// // // // //                     <circle
// // // // //                       cx={px}
// // // // //                       cy={py}
// // // // //                       r="2"
// // // // //                       fill="blue"
// // // // //                       opacity="0.5"
// // // // //                       style={{ cursor: 'pointer' }}
// // // // //                       onMouseEnter={() => setHoveredAngle(point)}
// // // // //                       onMouseLeave={() => setHoveredAngle(null)}
// // // // //                     />
// // // // //                     <text
// // // // //                       x={px + (Math.cos(angleRad) * 12)}
// // // // //                       y={py - (Math.sin(angleRad) * 12)}
// // // // //                       fontSize="8"
// // // // //                       opacity="0.5"
// // // // //                       textAnchor="middle"
// // // // //                       dominantBaseline="middle"
// // // // //                     >
// // // // //                       {point.degrees}
// // // // //                       {' '}
// // // // //                       ({point.radians})
// // // // //                     </text>
// // // // //                   </g>
// // // // //                 );
// // // // //               })}

// // // // //               {/* Vector */}
// // // // //               <line
// // // // //                 x1={center}
// // // // //                 y1={center}
// // // // //                 x2={x}
// // // // //                 y2={y}
// // // // //                 stroke="blue"
// // // // //                 strokeWidth="2"
// // // // //                 style={{ cursor: 'pointer' }}
// // // // //               />
              
// // // // //               <circle
// // // // //                 cx={x}
// // // // //                 cy={y}
// // // // //                 r="4"
// // // // //                 fill="blue"
// // // // //                 style={{ cursor: 'pointer' }}
// // // // //               />

// // // // //               {/* Axis labels */}
// // // // //               <text x={size - padding - 6} y={center - 6} fontSize="12">x</text>
// // // // //               <text x={center + 6} y={padding + 6} fontSize="12">y</text>

// // // // //               {/* Hover information */}
// // // // //               {hoveredAngle && (
// // // // //                 <g>
// // // // //                   <rect
// // // // //                     x={6}
// // // // //                     y={6}
// // // // //                     width="120"
// // // // //                     height="50"
// // // // //                     fill="white"
// // // // //                     stroke="black"
// // // // //                     strokeWidth="1"
// // // // //                     opacity="0.9"
// // // // //                   />
// // // // //                   <text x={12} y={20} fontSize="8">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
// // // // //                   <text x={12} y={32} fontSize="8">Coordinates: </text>
// // // // //                   <text x={12} y={44} fontSize="8">{hoveredAngle.label}</text>
// // // // //                 </g>
// // // // //               )}
// // // // //             </svg>
// // // // //           </div>
          
// // // // //           <div style={styles.controlsContainer}>
// // // // //             <div style={styles.statsPanel}>
// // // // //               <div style={styles.statTitle}>Current Position</div>
// // // // //               <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
// // // // //               <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
// // // // //               <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
// // // // //             </div>
            
// // // // //             <div style={styles.controls}>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 value={inputAngle}
// // // // //                 onChange={handleInputChange}
// // // // //                 placeholder="Enter angle in degrees"
// // // // //                 style={styles.input}
// // // // //               />
// // // // //               <button onClick={decrementAngle} style={styles.button}>
// // // // //                 ↓
// // // // //               </button>
// // // // //               <button onClick={incrementAngle} style={styles.button}>
// // // // //                 ↑
// // // // //               </button>
// // // // //               <button onClick={resetAngle} style={styles.button}>
// // // // //                 ↺
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UnitCircle;
// // // // // import React, { useState, useRef } from 'react';

// // // // // const UnitCircle = () => {
// // // // //   const [angle, setAngle] = useState(0);
// // // // //   const [hoveredAngle, setHoveredAngle] = useState(null);
// // // // //   const [inputAngle, setInputAngle] = useState('0');
// // // // //   const svgRef = useRef(null);
// // // // //   const isDragging = useRef(false);

// // // // //   // Special angles and their coordinates
// // // // //   const specialPoints = [
// // // // //     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
// // // // //     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
// // // // //     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
// // // // //     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
// // // // //     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
// // // // //     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
// // // // //     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
// // // // //     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
// // // // //     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
// // // // //     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
// // // // //     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
// // // // //     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
// // // // //     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
// // // // //     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
// // // // //     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
// // // // //     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
// // // // //   ];

// // // // //   // SVG configuration - scaled up by 40%
// // // // //   const size = 336; // 240 * 1.4
// // // // //   const center = size / 2;
// // // // //   const radius = size * 0.4;
// // // // //   const padding = 17; // 12 * 1.4

// // // // //   // Calculate coordinates
// // // // //   const x = Math.cos(angle) * radius + center;
// // // // //   const y = -Math.sin(angle) * radius + center;
// // // // //   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

// // // // //   const handleInputChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setInputAngle(value);
// // // // //     const numValue = parseFloat(value);
// // // // //     if (!isNaN(numValue)) {
// // // // //       setAngle((numValue * Math.PI) / 180);
// // // // //     }
// // // // //   };

// // // // //   const incrementAngle = () => {
// // // // //     const newAngle = (degrees + 5) % 360;
// // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // //     setInputAngle(newAngle.toString());
// // // // //   };

// // // // //   const decrementAngle = () => {
// // // // //     const newAngle = (degrees - 5 + 360) % 360;
// // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // //     setInputAngle(newAngle.toString());
// // // // //   };

// // // // //   const resetAngle = () => {
// // // // //     setAngle(0);
// // // // //     setInputAngle('0');
// // // // //   };

// // // // //   const handleMouseDown = () => {
// // // // //     isDragging.current = true;
// // // // //   };

// // // // //   const handleMouseUp = () => {
// // // // //     isDragging.current = false;
// // // // //   };

// // // // //   const handleMouseMove = (e) => {
// // // // //     if (!isDragging.current || !svgRef.current) return;
// // // // //     const svgRect = svgRef.current.getBoundingClientRect();
// // // // //     const svgX = e.clientX - svgRect.left;
// // // // //     const svgY = e.clientY - svgRect.top;
// // // // //     const dx = svgX - svgRect.width / 2;
// // // // //     const dy = svgRect.height / 2 - svgY;
// // // // //     const newAngle = Math.atan2(dy, dx);
// // // // //     setAngle(newAngle);
// // // // //     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
// // // // //   };

// // // // //   const styles = {
// // // // //     container: {
// // // // //       maxWidth: '1200px',
// // // // //       margin: '0 auto',
// // // // //       padding: '20px',
// // // // //       fontFamily: 'Arial, sans-serif',
// // // // //       userSelect: 'none',
// // // // //       WebkitUserSelect: 'none',
// // // // //       MozUserSelect: 'none',
// // // // //       msUserSelect: 'none',
     
// // // // //     },
// // // // //     card: {
// // // // //       border: '1px solid #e2e8f0',
// // // // //       borderRadius: '8px',
// // // // //       backgroundColor: 'white',
// // // // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
// // // // //     },
// // // // //     header: {
// // // // //       padding: '20px',
// // // // //       borderBottom: '1px solid #e2e8f0'
// // // // //     },
// // // // //     title: {
// // // // //       fontSize: '24px',
// // // // //       fontWeight: 'bold',
// // // // //       margin: 0
// // // // //     },
// // // // //     content: {
// // // // //       padding: '20px',
// // // // //       display: 'flex',
// // // // //       gap: '24px',
// // // // //       alignItems: 'flex-start'
// // // // //     },
// // // // //     circleContainer: {
// // // // //       width: '360px', // Scaled up from 240px
// // // // //       flexShrink: 0
// // // // //     },
// // // // //     controlsContainer: {
// // // // //       flex: 1,
// // // // //       padding: '0 20px'
// // // // //     },
// // // // //     statsPanel: {
// // // // //       backgroundColor: '#f8fafc',
// // // // //       padding: '16px',
// // // // //       borderRadius: '8px',
// // // // //       marginBottom: '16px'
// // // // //     },
// // // // //     statTitle: {
// // // // //       fontWeight: 'bold',
// // // // //       marginBottom: '8px'
// // // // //     },
// // // // //     controls: {
// // // // //       display: 'flex',
// // // // //       gap: '8px',
// // // // //       marginBottom: '16px',
// // // // //       alignItems: 'center'
// // // // //     },
// // // // //     input: {
// // // // //       width: '200px', // Reduced width for input
// // // // //       padding: '8px 12px',
// // // // //       borderRadius: '4px',
// // // // //       border: '1px solid #e2e8f0',
// // // // //       fontSize: '14px'
// // // // //     },
// // // // //     button: {
// // // // //       padding: '8px 12px',
// // // // //       borderRadius: '4px',
// // // // //       border: '1px solid #e2e8f0',
// // // // //       backgroundColor: 'white',
// // // // //       cursor: 'pointer',
// // // // //       display: 'flex',
// // // // //       alignItems: 'center',
// // // // //       justifyContent: 'center',
// // // // //       width: '36px',
// // // // //       height: '36px',
// // // // //       '&:hover': {
// // // // //         backgroundColor: '#f8fafc'
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <div style={styles.card}>
// // // // //         <div style={styles.header}>
// // // // //           <h2 style={styles.title}>Interactive Unit Circle</h2>
// // // // //         </div>
// // // // //         <div style={styles.content}>
// // // // //           <div style={styles.circleContainer}>
// // // // //             <svg
// // // // //               ref={svgRef}
// // // // //               viewBox={`0 0 ${size} ${size}`}
// // // // //               style={{ width: '100%', height: 'auto' }}
// // // // //               onMouseDown={handleMouseDown}
// // // // //               onMouseUp={handleMouseUp}
// // // // //               onMouseMove={handleMouseMove}
// // // // //               onMouseLeave={handleMouseUp}
// // // // //             >
// // // // //               <defs>
// // // // //                 <marker
// // // // //                   id="arrowhead"
// // // // //                   markerWidth="10"
// // // // //                   markerHeight="7"
// // // // //                   refX="9"
// // // // //                   refY="3.5"
// // // // //                   orient="auto"
// // // // //                 >
// // // // //                   <polygon points="0 0, 10 3.5, 0 7" fill="black" />
// // // // //                 </marker>
// // // // //               </defs>

// // // // //               {/* Grid */}
// // // // //               <g stroke="gray" strokeWidth="0.5" opacity="0.2">
// // // // //                 {[-1, -0.5, 0.5, 1].map((factor) => (
// // // // //                   <React.Fragment key={`grid${factor}`}>
// // // // //                     <line
// // // // //                       x1={center + radius * factor}
// // // // //                       y1={padding}
// // // // //                       x2={center + radius * factor}
// // // // //                       y2={size - padding}
// // // // //                     />
// // // // //                     <line
// // // // //                       x1={padding}
// // // // //                       y1={center + radius * factor}
// // // // //                       x2={size - padding}
// // // // //                       y2={center + radius * factor}
// // // // //                     />
// // // // //                   </React.Fragment>
// // // // //                 ))}
// // // // //               </g>

// // // // //               {/* Axes */}
// // // // //               <line 
// // // // //                 x1={padding} 
// // // // //                 y1={center} 
// // // // //                 x2={size - padding} 
// // // // //                 y2={center} 
// // // // //                 stroke="black" 
// // // // //                 strokeWidth="1"
// // // // //                 markerEnd="url(#arrowhead)"
// // // // //               />
// // // // //               <line 
// // // // //                 x1={center} 
// // // // //                 y1={size - padding} 
// // // // //                 x2={center} 
// // // // //                 y2={padding} 
// // // // //                 stroke="black" 
// // // // //                 strokeWidth="1"
// // // // //                 markerEnd="url(#arrowhead)"
// // // // //               />

// // // // //               {/* Unit circle */}
// // // // //               <circle
// // // // //                 cx={center}
// // // // //                 cy={center}
// // // // //                 r={radius}
// // // // //                 fill="none"
// // // // //                 stroke="black"
// // // // //                 strokeWidth="1"
// // // // //                 opacity="0.3"
// // // // //               />

// // // // //               {/* Special points */}
// // // // //               {specialPoints.map((point, index) => {
// // // // //                 const px = center + radius * point.coords[0];
// // // // //                 const py = center - radius * point.coords[1];
// // // // //                 const angleRad = (point.angle * Math.PI) / 180;
                
// // // // //                 return (
// // // // //                   <g key={index}>
// // // // //                     <circle
// // // // //                       cx={px}
// // // // //                       cy={py}
// // // // //                       r="3"
// // // // //                       fill="blue"
// // // // //                       opacity="0.5"
// // // // //                       style={{ cursor: 'pointer' }}
// // // // //                       onMouseEnter={() => setHoveredAngle(point)}
// // // // //                       onMouseLeave={() => setHoveredAngle(null)}
// // // // //                     />
// // // // //                     <text
// // // // //                       x={px + (Math.cos(angleRad) * 17)}
// // // // //                       y={py - (Math.sin(angleRad) * 17)}
// // // // //                       fontSize="11"
// // // // //                       opacity="0.5"
// // // // //                       textAnchor="middle"
// // // // //                       dominantBaseline="middle"
// // // // //                     >
// // // // //                       {point.degrees}
// // // // //                       {' '}
// // // // //                       ({point.radians})
// // // // //                     </text>
// // // // //                   </g>
// // // // //                 );
// // // // //               })}

// // // // //               {/* Vector */}
// // // // //               <line
// // // // //                 x1={center}
// // // // //                 y1={center}
// // // // //                 x2={x}
// // // // //                 y2={y}
// // // // //                 stroke="blue"
// // // // //                 strokeWidth="2"
// // // // //                 style={{ cursor: 'pointer' }}
// // // // //               />
              
// // // // //               <circle
// // // // //                 cx={x}
// // // // //                 cy={y}
// // // // //                 r="5"
// // // // //                 fill="blue"
// // // // //                 style={{ cursor: 'pointer' }}
// // // // //               />

// // // // //               {/* Axis labels */}
// // // // //               <text x={size - padding - 8} y={center - 8} fontSize="16">x</text>
// // // // //               <text x={center + 8} y={padding + 8} fontSize="16">y</text>

// // // // //               {/* Hover information */}
// // // // //               {hoveredAngle && (
// // // // //                 <g>
// // // // //                   <rect
// // // // //                     x={8}
// // // // //                     y={8}
// // // // //                     width="168"
// // // // //                     height="70"
// // // // //                     fill="white"
// // // // //                     stroke="black"
// // // // //                     strokeWidth="1"
// // // // //                     opacity="0.9"
// // // // //                   />
// // // // //                   <text x={16} y={28} fontSize="11">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
// // // // //                   <text x={16} y={45} fontSize="11">Coordinates: </text>
// // // // //                   <text x={16} y={62} fontSize="11">{hoveredAngle.label}</text>
// // // // //                 </g>
// // // // //               )}
// // // // //             </svg>
// // // // //           </div>
          
// // // // //           <div style={styles.controlsContainer}>
// // // // //             <div style={styles.statsPanel}>
// // // // //               <div style={styles.statTitle}>Current Position</div>
// // // // //               <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
// // // // //               <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
// // // // //               <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
// // // // //             </div>
            
// // // // //             <div style={styles.controls}>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 value={inputAngle}
// // // // //                 onChange={handleInputChange}
// // // // //                 placeholder="Enter angle"
// // // // //                 style={styles.input}
// // // // //               />
// // // // //               <button onClick={decrementAngle} style={styles.button}>
// // // // //                 ↓
// // // // //               </button>
// // // // //               <button onClick={incrementAngle} style={styles.button}>
// // // // //                 ↑
// // // // //               </button>
// // // // //               <button onClick={resetAngle} style={styles.button}>
// // // // //                 ↺
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UnitCircle;
// // // // // import React, { useState, useRef } from 'react';

// // // // // const UnitCircle = () => {
// // // // //   const [angle, setAngle] = useState(0);
// // // // //   const [hoveredAngle, setHoveredAngle] = useState(null);
// // // // //   const [inputAngle, setInputAngle] = useState('0');
// // // // //   const svgRef = useRef(null);
// // // // //   const isDragging = useRef(false);

// // // // //   // Special angles and their coordinates
// // // // //   const specialPoints = [
// // // // //     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
// // // // //     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
// // // // //     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
// // // // //     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
// // // // //     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
// // // // //     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
// // // // //     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
// // // // //     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
// // // // //     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
// // // // //     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
// // // // //     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
// // // // //     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
// // // // //     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
// // // // //     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
// // // // //     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
// // // // //     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
// // // // //   ];

// // // // //   // SVG configuration - scaled up by 40% and shifted left by 50px
// // // // //   const size = 336;
// // // // //   const center = size / 2;
// // // // //   const radius = size * 0.4;
// // // // //   const padding = 17;
// // // // //   const leftShift = 50; // New left shift value

// // // // //   // Calculate coordinates with left shift
// // // // //   const x = Math.cos(angle) * radius + center - leftShift;
// // // // //   const y = -Math.sin(angle) * radius + center;
// // // // //   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

// // // // //   const handleInputChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setInputAngle(value);
// // // // //     const numValue = parseFloat(value);
// // // // //     if (!isNaN(numValue)) {
// // // // //       setAngle((numValue * Math.PI) / 180);
// // // // //     }
// // // // //   };

// // // // //   const incrementAngle = () => {
// // // // //     const newAngle = (degrees + 5) % 360;
// // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // //     setInputAngle(newAngle.toString());
// // // // //   };

// // // // //   const decrementAngle = () => {
// // // // //     const newAngle = (degrees - 5 + 360) % 360;
// // // // //     setAngle((newAngle * Math.PI) / 180);
// // // // //     setInputAngle(newAngle.toString());
// // // // //   };

// // // // //   const resetAngle = () => {
// // // // //     setAngle(0);
// // // // //     setInputAngle('0');
// // // // //   };

// // // // //   const handleMouseDown = () => {
// // // // //     isDragging.current = true;
// // // // //   };

// // // // //   const handleMouseUp = () => {
// // // // //     isDragging.current = false;
// // // // //   };

// // // // //   const handleMouseMove = (e) => {
// // // // //     if (!isDragging.current || !svgRef.current) return;
// // // // //     const svgRect = svgRef.current.getBoundingClientRect();
// // // // //     const svgX = e.clientX - svgRect.left + leftShift; // Adjust for left shift
// // // // //     const svgY = e.clientY - svgRect.top;
// // // // //     const dx = svgX - svgRect.width / 2;
// // // // //     const dy = svgRect.height / 2 - svgY;
// // // // //     const newAngle = Math.atan2(dy, dx);
// // // // //     setAngle(newAngle);
// // // // //     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
// // // // //   };

// // // // //   const styles = {
// // // // //     container: {
// // // // //       maxWidth: '1300px',
// // // // //       margin: '0 auto',
// // // // //       padding: '20px',
// // // // //       fontFamily: 'Arial, sans-serif',
// // // // //       userSelect: 'none',
// // // // //       WebkitUserSelect: 'none',
// // // // //       MozUserSelect: 'none',
// // // // //       msUserSelect: 'none',
// // // // //     },
// // // // //     card: {
// // // // //       border: '1px solid #e2e8f0',
// // // // //       borderRadius: '8px',
// // // // //       backgroundColor: 'white',
// // // // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
// // // // //     },
// // // // //     header: {
// // // // //       padding: '20px',
// // // // //       borderBottom: '1px solid #e2e8f0'
// // // // //     },
// // // // //     title: {
// // // // //       fontSize: '24px',
// // // // //       fontWeight: 'bold',
// // // // //       margin: 0
// // // // //     },
// // // // //     content: {
// // // // //       padding: '20px',
// // // // //       display: 'flex',
// // // // //       gap: '24px',
// // // // //       alignItems: 'flex-start'
// // // // //     },
// // // // //     circleContainer: {
// // // // //       width: '400px',
// // // // //       flexShrink: 0,
// // // // //       marginLeft:'50px'
// // // // //     },
// // // // //     controlsContainer: {
// // // // //       flex: 1,
// // // // //       padding: '0 20px'
// // // // //     },
// // // // //     statsPanel: {
// // // // //       backgroundColor: '#f8fafc',
// // // // //       padding: '16px',
// // // // //       borderRadius: '8px',
// // // // //       marginBottom: '16px'
// // // // //     },
// // // // //     statTitle: {
// // // // //       fontWeight: 'bold',
// // // // //       marginBottom: '8px'
// // // // //     },
// // // // //     controls: {
// // // // //       display: 'flex',
// // // // //       gap: '8px',
// // // // //       marginBottom: '16px',
// // // // //       alignItems: 'center'
// // // // //     },
// // // // //     input: {
// // // // //       width: '200px',
// // // // //       padding: '8px 12px',
// // // // //       borderRadius: '4px',
// // // // //       border: '1px solid #e2e8f0',
// // // // //       fontSize: '14px'
// // // // //     },
// // // // //     button: {
// // // // //       padding: '8px 12px',
// // // // //       borderRadius: '4px',
// // // // //       border: '1px solid #e2e8f0',
// // // // //       backgroundColor: '#1d6bd8',
// // // // //       color:'white',
// // // // //       cursor: 'pointer',
// // // // //       display: 'flex',
// // // // //       alignItems: 'center',
// // // // //       justifyContent: 'center',
// // // // //       width: '36px',
// // // // //       height: '36px',
// // // // //       '&:hover': {
// // // // //         backgroundColor: '#f8fafc'
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <div style={styles.card}>
// // // // //         <div style={styles.header}>
// // // // //           <h2 style={styles.title}>Interactive Unit Circle</h2>
// // // // //         </div>
// // // // //         <div style={styles.content}>
// // // // //           <div style={styles.circleContainer}>
// // // // //             <svg
// // // // //               ref={svgRef}
// // // // //               viewBox={`-${leftShift} 0 ${size} ${size}`}
// // // // //               style={{ width: '100%', height: 'auto' }}
// // // // //               onMouseDown={handleMouseDown}
// // // // //               onMouseUp={handleMouseUp}
// // // // //               onMouseMove={handleMouseMove}
// // // // //               onMouseLeave={handleMouseUp}
// // // // //             >
// // // // //               <defs>
// // // // //                 <marker
// // // // //                   id="arrowhead"
// // // // //                   markerWidth="10"
// // // // //                   markerHeight="7"
// // // // //                   refX="9"
// // // // //                   refY="3.5"
// // // // //                   orient="auto"
// // // // //                 >
// // // // //                   <polygon points="0 0, 10 3.5, 0 7" fill="black" />
// // // // //                 </marker>
// // // // //               </defs>

// // // // //               {/* Grid */}
// // // // //               <g stroke="gray" strokeWidth="0.5" opacity="0.2">
// // // // //                 {[-1, -0.5, 0.5, 1].map((factor) => (
// // // // //                   <React.Fragment key={`grid${factor}`}>
// // // // //                     <line
// // // // //                       x1={center + radius * factor - leftShift}
// // // // //                       y1={padding}
// // // // //                       x2={center + radius * factor - leftShift}
// // // // //                       y2={size - padding}
// // // // //                     />
// // // // //                     <line
// // // // //                       x1={padding - leftShift}
// // // // //                       y1={center + radius * factor}
// // // // //                       x2={size - padding - leftShift}
// // // // //                       y2={center + radius * factor}
// // // // //                     />
// // // // //                   </React.Fragment>
// // // // //                 ))}
// // // // //               </g>

// // // // //               {/* Axes */}
// // // // //               <line 
// // // // //                 x1={padding - leftShift} 
// // // // //                 y1={center} 
// // // // //                 x2={size - padding - leftShift} 
// // // // //                 y2={center} 
// // // // //                 stroke="black" 
// // // // //                 strokeWidth="1"
// // // // //                 markerEnd="url(#arrowhead)"
// // // // //               />
// // // // //               <line 
// // // // //                 x1={center - leftShift} 
// // // // //                 y1={size - padding} 
// // // // //                 x2={center - leftShift} 
// // // // //                 y2={padding} 
// // // // //                 stroke="black" 
// // // // //                 strokeWidth="1"
// // // // //                 markerEnd="url(#arrowhead)"
// // // // //               />

// // // // //               {/* Unit circle */}
// // // // //               <circle
// // // // //                 cx={center - leftShift}
// // // // //                 cy={center}
// // // // //                 r={radius}
// // // // //                 fill="none"
// // // // //                 stroke="black"
// // // // //                 strokeWidth="1"
// // // // //                 opacity="0.3"
// // // // //               />

// // // // //               {/* Special points */}
// // // // //               {specialPoints.map((point, index) => {
// // // // //                 const px = center + radius * point.coords[0] - leftShift;
// // // // //                 const py = center - radius * point.coords[1];
// // // // //                 const angleRad = (point.angle * Math.PI) / 180;
// // // // //                 const labelDistance = 27; // Increased from 17 to move labels further
                
// // // // //                 return (
// // // // //                   <g key={index}>
// // // // //                     <circle
// // // // //                       cx={px}
// // // // //                       cy={py}
// // // // //                       r="3"
// // // // //                       fill="blue"
// // // // //                       opacity="0.5"
// // // // //                       style={{ cursor: 'pointer' }}
// // // // //                       onMouseEnter={() => setHoveredAngle(point)}
// // // // //                       onMouseLeave={() => setHoveredAngle(null)}
// // // // //                     />
// // // // //                     <text
// // // // //                       x={px + (Math.cos(angleRad) * labelDistance)}
// // // // //                       y={py - (Math.sin(angleRad) * labelDistance)}
// // // // //                       fontSize="11"
// // // // //                       fill="black" // Changed from opacity: 0.5 to solid black
// // // // //                       textAnchor="middle"
// // // // //                       dominantBaseline="middle"
// // // // //                     >
// // // // //                       {point.degrees}
// // // // //                       {' '}
// // // // //                       ({point.radians})
// // // // //                     </text>
// // // // //                   </g>
// // // // //                 );
// // // // //               })}

// // // // //               {/* Vector */}
// // // // //               <line
// // // // //                 x1={center - leftShift}
// // // // //                 y1={center}
// // // // //                 x2={x}
// // // // //                 y2={y}
// // // // //                 stroke="blue"
// // // // //                 strokeWidth="2"
// // // // //                 style={{ cursor: 'pointer' }}
// // // // //               />
              
// // // // //               <circle
// // // // //                 cx={x}
// // // // //                 cy={y}
// // // // //                 r="5"
// // // // //                 fill="blue"
// // // // //                 style={{ cursor: 'pointer' }}
// // // // //               />

// // // // //               {/* Axis labels */}
// // // // //               <text x={size - padding - leftShift - 8} y={center - 8} fontSize="16" fill="black">x</text>
// // // // //               <text x={center - leftShift + 8} y={padding + 8} fontSize="16" fill="black">y</text>

// // // // //               {/* Hover information */}
// // // // //               {hoveredAngle && (
// // // // //                 <g>
// // // // //                   <rect
// // // // //                     x={8 - leftShift}
// // // // //                     y={8}
// // // // //                     width="168"
// // // // //                     height="70"
// // // // //                     fill="white"
// // // // //                     stroke="black"
// // // // //                     strokeWidth="1"
// // // // //                     opacity="0.9"
// // // // //                   />
// // // // //                   <text x={16 - leftShift} y={28} fontSize="11" fill="black">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
// // // // //                   <text x={16 - leftShift} y={45} fontSize="11" fill="black">Coordinates: </text>
// // // // //                   <text x={16 - leftShift} y={62} fontSize="11" fill="black">{hoveredAngle.label}</text>
// // // // //                 </g>
// // // // //               )}
// // // // //             </svg>
// // // // //           </div>
          
// // // // //           <div style={styles.controlsContainer}>
// // // // //             <div style={styles.statsPanel}>
// // // // //               <div style={styles.statTitle}>Current Position</div>
// // // // //               <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
// // // // //               <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
// // // // //               <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
// // // // //             </div>
            
// // // // //             <div style={styles.controls}>
// // // // //               <input
// // // // //                 type="number"
// // // // //                 value={inputAngle}
// // // // //                 onChange={handleInputChange}
// // // // //                 placeholder="Enter angle"
// // // // //                 style={styles.input}
// // // // //               />
// // // // //               <button onClick={decrementAngle} style={styles.button}>
// // // // //                 ↓
// // // // //               </button>
// // // // //               <button onClick={incrementAngle} style={styles.button}>
// // // // //                 ↑
// // // // //               </button>
// // // // //               <button onClick={resetAngle} style={styles.button}>
// // // // //                 ↺
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UnitCircle;

// // // // import React, { useState, useRef } from 'react';

// // // // const UnitCircle = () => {
// // // //   const [angle, setAngle] = useState(0);
// // // //   const [hoveredAngle, setHoveredAngle] = useState(null);
// // // //   const [inputAngle, setInputAngle] = useState('0');
// // // //   const svgRef = useRef(null);
// // // //   const isDragging = useRef(false);

// // // //   const specialPoints = [
// // // //     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
// // // //     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
// // // //     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
// // // //     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
// // // //     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
// // // //     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
// // // //     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
// // // //     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
// // // //     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
// // // //     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
// // // //     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
// // // //     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
// // // //     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
// // // //     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
// // // //     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
// // // //     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
// // // //   ];

// // // //   // Modified SVG configuration
// // // //   const size = 336;
// // // //   const center = size / 2;
// // // //   const radius = size * 0.4;
// // // //   const padding = 17;
// // // //   const leftShift = 50;
// // // //   const extraPadding = 40; // Extra padding for labels
// // // //   const totalWidth = size + leftShift + extraPadding; // New total width
// // // //   const totalHeight = size + extraPadding * 2; // New total height

// // // //   // Calculate coordinates
// // // //   const x = Math.cos(angle) * radius + center - leftShift;
// // // //   const y = -Math.sin(angle) * radius + center;
// // // //   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

// // // //   const handleInputChange = (e) => {
// // // //     const value = e.target.value;
// // // //     setInputAngle(value);
// // // //     const numValue = parseFloat(value);
// // // //     if (!isNaN(numValue)) {
// // // //       setAngle((numValue * Math.PI) / 180);
// // // //     }
// // // //   };

// // // //   const incrementAngle = () => {
// // // //     const newAngle = (degrees + 5) % 360;
// // // //     setAngle((newAngle * Math.PI) / 180);
// // // //     setInputAngle(newAngle.toString());
// // // //   };

// // // //   const decrementAngle = () => {
// // // //     const newAngle = (degrees - 5 + 360) % 360;
// // // //     setAngle((newAngle * Math.PI) / 180);
// // // //     setInputAngle(newAngle.toString());
// // // //   };

// // // //   const resetAngle = () => {
// // // //     setAngle(0);
// // // //     setInputAngle('0');
// // // //   };

// // // //   const handleMouseDown = () => {
// // // //     isDragging.current = true;
// // // //   };

// // // //   const handleMouseUp = () => {
// // // //     isDragging.current = false;
// // // //   };

// // // //   const handleMouseMove = (e) => {
// // // //     if (!isDragging.current || !svgRef.current) return;
// // // //     const svgRect = svgRef.current.getBoundingClientRect();
// // // //     const svgX = e.clientX - svgRect.left + leftShift;
// // // //     const svgY = e.clientY - svgRect.top;
// // // //     const dx = svgX - svgRect.width / 2;
// // // //     const dy = svgRect.height / 2 - svgY;
// // // //     const newAngle = Math.atan2(dy, dx);
// // // //     setAngle(newAngle);
// // // //     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
// // // //   };

// // // //   const styles = {
// // // //     container: {
// // // //       maxWidth: '1300px',
// // // //       margin: '0 auto',
// // // //       padding: '20px',
// // // //       fontFamily: 'Arial, sans-serif',
// // // //       userSelect: 'none',
// // // //       WebkitUserSelect: 'none',
// // // //       MozUserSelect: 'none',
// // // //       msUserSelect: 'none',
// // // //     },
// // // //     card: {
// // // //       border: '1px solid #e2e8f0',
// // // //       borderRadius: '8px',
// // // //       backgroundColor: 'white',
// // // //       boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
// // // //     },
// // // //     header: {
// // // //       padding: '20px',
// // // //       borderBottom: '1px solid #e2e8f0'
// // // //     },
// // // //     title: {
// // // //       fontSize: '24px',
// // // //       fontWeight: 'bold',
// // // //       margin: 0
// // // //     },
// // // //     content: {
// // // //       padding: '20px',
// // // //       display: 'flex',
// // // //       gap: '24px',
// // // //       alignItems: 'flex-start'
// // // //     },
// // // //     circleContainer: {
// // // //       width: '450px',
// // // //       flexShrink: 0,
// // // //       marginLeft: '50px'
// // // //     },
// // // //     controlsContainer: {
// // // //       flex: 1,
// // // //       padding: '0 20px'
// // // //     },
// // // //     statsPanel: {
// // // //       backgroundColor: '#f8fafc',
// // // //       padding: '16px',
// // // //       borderRadius: '8px',
// // // //       marginBottom: '16px'
// // // //     },
// // // //     statTitle: {
// // // //       fontWeight: 'bold',
// // // //       marginBottom: '8px'
// // // //     },
// // // //     controls: {
// // // //       display: 'flex',
// // // //       gap: '8px',
// // // //       marginBottom: '16px',
// // // //       alignItems: 'center'
// // // //     },
// // // //     input: {
// // // //       width: '200px',
// // // //       padding: '8px 12px',
// // // //       borderRadius: '4px',
// // // //       border: '1px solid #e2e8f0',
// // // //       fontSize: '14px'
// // // //     },
// // // //     button: {
// // // //       padding: '8px 12px',
// // // //       borderRadius: '4px',
// // // //       border: '1px solid #e2e8f0',
// // // //       backgroundColor: '#1d6bd8',
// // // //       color: 'white',
// // // //       cursor: 'pointer',
// // // //       display: 'flex',
// // // //       alignItems: 'center',
// // // //       justifyContent: 'center',
// // // //       width: '36px',
// // // //       height: '36px',
// // // //       '&:hover': {
// // // //         backgroundColor: '#f8fafc'
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <div style={styles.card}>
// // // //         <div style={styles.header}>
// // // //           <h2 style={styles.title}>Interactive Unit Circle</h2>
// // // //         </div>
// // // //         <div style={styles.content}>
// // // //           <div style={styles.circleContainer}>
// // // //             <svg
// // // //               ref={svgRef}
// // // //               viewBox={`-${leftShift + extraPadding} -${extraPadding} ${totalWidth} ${totalHeight}`}
// // // //               style={{ width: '100%', height: 'auto' }}
// // // //               onMouseDown={handleMouseDown}
// // // //               onMouseUp={handleMouseUp}
// // // //               onMouseMove={handleMouseMove}
// // // //               onMouseLeave={handleMouseUp}
// // // //             >
// // // //               <defs>
// // // //                 <marker
// // // //                   id="arrowhead"
// // // //                   markerWidth="10"
// // // //                   markerHeight="7"
// // // //                   refX="9"
// // // //                   refY="3.5"
// // // //                   orient="auto"
// // // //                 >
// // // //                   <polygon points="0 0, 10 3.5, 0 7" fill="black" />
// // // //                 </marker>
// // // //               </defs>

// // // //               {/* Grid */}
// // // //               <g stroke="gray" strokeWidth="0.5" opacity="0.2">
// // // //                 {[-1, -0.5, 0.5, 1].map((factor) => (
// // // //                   <React.Fragment key={`grid${factor}`}>
// // // //                     <line
// // // //                       x1={center + radius * factor - leftShift}
// // // //                       y1={padding}
// // // //                       x2={center + radius * factor - leftShift}
// // // //                       y2={size - padding}
// // // //                     />
// // // //                     <line
// // // //                       x1={padding - leftShift}
// // // //                       y1={center + radius * factor}
// // // //                       x2={size - padding - leftShift}
// // // //                       y2={center + radius * factor}
// // // //                     />
// // // //                   </React.Fragment>
// // // //                 ))}
// // // //               </g>

// // // //               {/* Quadrant Labels */}
// // // //               <text x={center - leftShift + radius/2} y={center - radius/2} 
// // // //                     fontSize="14" fill="#666" textAnchor="middle">
// // // //                 I 
// // // //               </text>
// // // //               <text x={center - leftShift - radius/2} y={center - radius/2} 
// // // //                     fontSize="14" fill="#666" textAnchor="middle">
// // // //                  II 
// // // //               </text>
// // // //               <text x={center - leftShift - radius/2} y={center + radius/2} 
// // // //                     fontSize="14" fill="#666" textAnchor="middle">
// // // //                 III 
// // // //               </text>
// // // //               <text x={center - leftShift + radius/2} y={center + radius/2} 
// // // //                     fontSize="14" fill="#666" textAnchor="middle">
// // // //                 IV 
// // // //               </text>

// // // //               {/* Axes */}
// // // //               <line 
// // // //                 x1={padding - leftShift} 
// // // //                 y1={center} 
// // // //                 x2={size - padding - leftShift} 
// // // //                 y2={center} 
// // // //                 stroke="black" 
// // // //                 strokeWidth="1"
// // // //                 markerEnd="url(#arrowhead)"
// // // //               />
// // // //               <line 
// // // //                 x1={center - leftShift} 
// // // //                 y1={size - padding} 
// // // //                 x2={center - leftShift} 
// // // //                 y2={padding} 
// // // //                 stroke="black" 
// // // //                 strokeWidth="1"
// // // //                 markerEnd="url(#arrowhead)"
// // // //               />

// // // //               {/* Unit circle */}
// // // //               <circle
// // // //                 cx={center - leftShift}
// // // //                 cy={center}
// // // //                 r={radius}
// // // //                 fill="none"
// // // //                 stroke="black"
// // // //                 strokeWidth="1"
// // // //                 opacity="0.3"
// // // //               />

// // // //               {/* Special points */}
// // // //               {specialPoints.map((point, index) => {
// // // //                 const px = center + radius * point.coords[0] - leftShift;
// // // //                 const py = center - radius * point.coords[1];
// // // //                 const angleRad = (point.angle * Math.PI) / 180;
// // // //                 const labelDistance = 27;
                
                
// // // //                 return (
// // // //                   <g key={index}>
// // // //                     <circle
// // // //                       cx={px}
// // // //                       cy={py}
// // // //                       r="3"
// // // //                       fill="blue"
// // // //                       opacity="0.5"
// // // //                       style={{ cursor: 'pointer' }}
// // // //                       onMouseEnter={() => setHoveredAngle(point)}
// // // //                       onMouseLeave={() => setHoveredAngle(null)}
// // // //                     />
// // // //                     <text
// // // //                       // x={px + (Math.cos(angleRad) * labelDistance)}
// // // //                       // x={point.angle === 180 ? px + (Math.cos(angleRad) * labelDistance) - 10 : px + (Math.cos(angleRad) * labelDistance)}
// // // //                       x={point.angle === 180 ? px + (Math.cos(angleRad) * labelDistance) - 10 : 
// // // //                         point.angle === 0 ? px + (Math.cos(angleRad) * labelDistance) + 15 : 
// // // //                         px + (Math.cos(angleRad) * labelDistance)}
// // // //                       y={py - (Math.sin(angleRad) * labelDistance)}
// // // //                       fontSize="11"
// // // //                       fill="black"
// // // //                       textAnchor="middle"
// // // //                       dominantBaseline="middle"
// // // //                     >
// // // //                       {point.degrees}
// // // //                       {' '}
// // // //                       ({point.radians})
// // // //                     </text>
// // // //                   </g>
// // // //                 );
// // // //               })}

// // // //               {/* Vector */}
// // // //               <line
// // // //                 x1={center - leftShift}
// // // //                 y1={center}
// // // //                 x2={x}
// // // //                 y2={y}
// // // //                 stroke="blue"
// // // //                 strokeWidth="2"
// // // //                 style={{ cursor: 'pointer' }}
// // // //               />
              
// // // //               <circle
// // // //                 cx={x}
// // // //                 cy={y}
// // // //                 r="5"
// // // //                 fill="blue"
// // // //                 style={{ cursor: 'pointer' }}
// // // //               />

// // // //               {/* Axis labels */}
// // // //               <text x={size - padding - leftShift - 8} y={center - 8} fontSize="16" fill="black">x</text>
// // // //               <text x={center - leftShift + 8} y={padding + 8} fontSize="16" fill="black">y</text>

// // // //              {/* Hover information */}
// // // //              {hoveredAngle && (
// // // //                 <g>
// // // //                   <rect
// // // //                     x={8 - leftShift}
// // // //                     y={8}
// // // //                     width="168"
// // // //                     height="70"
// // // //                     fill="white"
// // // //                     stroke="black"
// // // //                     strokeWidth="1"
// // // //                     opacity="0.9"
// // // //                   />
// // // //                   <text x={16 - leftShift} y={28} fontSize="11" fill="black">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
// // // //                   <text x={16 - leftShift} y={45} fontSize="11" fill="black">Coordinates: </text>
// // // //                   <text x={16 - leftShift} y={62} fontSize="11" fill="black">{hoveredAngle.label}</text>
// // // //                 </g>
// // // //               )}
// // // //             </svg>
// // // //           </div>
          
// // // //           <div style={styles.controlsContainer}>
// // // //             <div style={styles.statsPanel}>
// // // //               <div style={styles.statTitle}>Current Position</div>
// // // //               <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
// // // //               <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
// // // //               <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
// // // //             </div>
            
// // // //             <div style={styles.controls}>
// // // //               <input
// // // //                 type="number"
// // // //                 value={inputAngle}
// // // //                 onChange={handleInputChange}
// // // //                 placeholder="Enter angle"
// // // //                 style={styles.input}
// // // //               />
// // // //               <button onClick={decrementAngle} style={styles.button}>
// // // //                 ↓
// // // //               </button>
// // // //               <button onClick={incrementAngle} style={styles.button}>
// // // //                 ↑
// // // //               </button>
// // // //               <button onClick={resetAngle} style={styles.button}>
// // // //                 ↺
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UnitCircle;
// // // import React, { useState, useRef } from 'react';
// // // import styles from './UnitCircle.module.css';

// // // const UnitCircle = () => {
// // //   const [angle, setAngle] = useState(0);
// // //   const [hoveredAngle, setHoveredAngle] = useState(null);
// // //   const [inputAngle, setInputAngle] = useState('0');
// // //   const svgRef = useRef(null);
// // //   const isDragging = useRef(false);

// // //   const specialPoints = [
// // //     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
// // //     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
// // //     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
// // //     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
// // //     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
// // //     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
// // //     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
// // //     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
// // //     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
// // //     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
// // //     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
// // //     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
// // //     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
// // //     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
// // //     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
// // //     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
// // //   ];

// // //   // Modified SVG configuration
// // //   const size = 336;
// // //   const center = size / 2;
// // //   const radius = size * 0.4;
// // //   const padding = 17;
// // //   const leftShift = 50;
// // //   const extraPadding = 40;
// // //   const totalWidth = size + leftShift + extraPadding;
// // //   const totalHeight = size + extraPadding * 2;

// // //   // Calculate coordinates
// // //   const x = Math.cos(angle) * radius + center - leftShift;
// // //   const y = -Math.sin(angle) * radius + center;
// // //   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

// // //   const handleInputChange = (e) => {
// // //     const value = e.target.value;
// // //     setInputAngle(value);
// // //     const numValue = parseFloat(value);
// // //     if (!isNaN(numValue)) {
// // //       setAngle((numValue * Math.PI) / 180);
// // //     }
// // //   };

// // //   const incrementAngle = () => {
// // //     const newAngle = (degrees + 1) % 360;
// // //     setAngle((newAngle * Math.PI) / 180);
// // //     setInputAngle(newAngle.toString());
// // //   };

// // //   const decrementAngle = () => {
// // //     const newAngle = (degrees - 1 + 360) % 360;
// // //     setAngle((newAngle * Math.PI) / 180);
// // //     setInputAngle(newAngle.toString());
// // //   };

// // //   const resetAngle = () => {
// // //     setAngle(0);
// // //     setInputAngle('0');
// // //   };

// // //   const handleMouseDown = () => {
// // //     isDragging.current = true;
// // //   };

// // //   const handleMouseUp = () => {
// // //     isDragging.current = false;
// // //   };

// // //   const handleMouseMove = (e) => {
// // //     if (!isDragging.current || !svgRef.current) return;
// // //     const svgRect = svgRef.current.getBoundingClientRect();
// // //     const svgX = e.clientX - svgRect.left + leftShift;
// // //     const svgY = e.clientY - svgRect.top;
// // //     const dx = svgX - svgRect.width / 2;
// // //     const dy = svgRect.height / 2 - svgY;
// // //     const newAngle = Math.atan2(dy, dx);
// // //     setAngle(newAngle);
// // //     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.card}>
// // //         <div className={styles.header}>
// // //           <h2 className={styles.title}>Interactive Unit Circle</h2>
// // //         </div>
// // //         <div className={styles.content}>
// // //           <div className={styles.circleContainer}>
// // //             <svg
// // //               ref={svgRef}
// // //               viewBox={`-${leftShift + extraPadding} -${extraPadding} ${totalWidth} ${totalHeight}`}
// // //               style={{ width: '100%', height: 'auto' }}
// // //               onMouseDown={handleMouseDown}
// // //               onMouseUp={handleMouseUp}
// // //               onMouseMove={handleMouseMove}
// // //               onMouseLeave={handleMouseUp}
// // //             >
// // //               <defs>
// // //                 <marker
// // //                   id="arrowhead"
// // //                   markerWidth="10"
// // //                   markerHeight="7"
// // //                   refX="9"
// // //                   refY="3.5"
// // //                   orient="auto"
// // //                 >
// // //                   <polygon points="0 0, 10 3.5, 0 7" fill="black" />
// // //                 </marker>
// // //               </defs>

// // //               {/* Grid */}
// // //               <g stroke="gray" strokeWidth="0.5" opacity="0.2">
// // //                 {[-1, -0.5, 0.5, 1].map((factor) => (
// // //                   <React.Fragment key={`grid${factor}`}>
// // //                     <line
// // //                       x1={center + radius * factor - leftShift}
// // //                       y1={padding}
// // //                       x2={center + radius * factor - leftShift}
// // //                       y2={size - padding}
// // //                     />
// // //                     <line
// // //                       x1={padding - leftShift}
// // //                       y1={center + radius * factor}
// // //                       x2={size - padding - leftShift}
// // //                       y2={center + radius * factor}
// // //                     />
// // //                   </React.Fragment>
// // //                 ))}
// // //               </g>

// // //               {/* Quadrant Labels */}
// // //               <text x={center - leftShift + radius/2} y={center - radius/2} 
// // //                     fontSize="14" fill="#666" textAnchor="middle">
// // //                 I 
// // //               </text>
// // //               <text x={center - leftShift - radius/2} y={center - radius/2} 
// // //                     fontSize="14" fill="#666" textAnchor="middle">
// // //                  II 
// // //               </text>
// // //               <text x={center - leftShift - radius/2} y={center + radius/2} 
// // //                     fontSize="14" fill="#666" textAnchor="middle">
// // //                 III 
// // //               </text>
// // //               <text x={center - leftShift + radius/2} y={center + radius/2} 
// // //                     fontSize="14" fill="#666" textAnchor="middle">
// // //                 IV 
// // //               </text>

// // //               {/* Axes */}
// // //               <line 
// // //                 x1={padding - leftShift} 
// // //                 y1={center} 
// // //                 x2={size - padding - leftShift} 
// // //                 y2={center} 
// // //                 stroke="black" 
// // //                 strokeWidth="1"
// // //                 markerEnd="url(#arrowhead)"
// // //               />
// // //               <line 
// // //                 x1={center - leftShift} 
// // //                 y1={size - padding} 
// // //                 x2={center - leftShift} 
// // //                 y2={padding} 
// // //                 stroke="black" 
// // //                 strokeWidth="1"
// // //                 markerEnd="url(#arrowhead)"
// // //               />

// // //               {/* Unit circle */}
// // //               <circle
// // //                 cx={center - leftShift}
// // //                 cy={center}
// // //                 r={radius}
// // //                 fill="none"
// // //                 stroke="black"
// // //                 strokeWidth="1"
// // //                 opacity="0.3"
// // //               />

// // //               {/* Special points */}
// // //               {specialPoints.map((point, index) => {
// // //                 const px = center + radius * point.coords[0] - leftShift;
// // //                 const py = center - radius * point.coords[1];
// // //                 const angleRad = (point.angle * Math.PI) / 180;
// // //                 const labelDistance = 27;
                
// // //                 return (
// // //                   <g key={index}>
// // //                     <circle
// // //                       cx={px}
// // //                       cy={py}
// // //                       r="3"
// // //                       fill="blue"
// // //                       opacity="0.5"
// // //                       style={{ cursor: 'pointer' }}
// // //                       onMouseEnter={() => setHoveredAngle(point)}
// // //                       onMouseLeave={() => setHoveredAngle(null)}
// // //                     />
// // //                     <text
// // //                       x={point.angle === 180 ? px + (Math.cos(angleRad) * labelDistance) - 10 : 
// // //                          point.angle === 0 ? px + (Math.cos(angleRad) * labelDistance) + 10 : 
// // //                          px + (Math.cos(angleRad) * labelDistance)}
// // //                       y={py - (Math.sin(angleRad) * labelDistance)}
// // //                       fontSize="11"
// // //                       fill="black"
// // //                       textAnchor="middle"
// // //                       dominantBaseline="middle"
// // //                     >
// // //                       {point.degrees}
// // //                       {' '}
// // //                       ({point.radians})
// // //                     </text>
// // //                   </g>
// // //                 );
// // //               })}

// // //               {/* Vector */}
// // //               <line
// // //                 x1={center - leftShift}
// // //                 y1={center}
// // //                 x2={x}
// // //                 y2={y}
// // //                 stroke="blue"
// // //                 strokeWidth="2"
// // //                 style={{ cursor: 'pointer' }}
// // //               />
              
// // //               <circle
// // //                 cx={x}
// // //                 cy={y}
// // //                 r="5"
// // //                 fill="blue"
// // //                 style={{ cursor: 'pointer' }}
// // //               />

// // //               {/* Axis labels */}
// // //               <text x={size - padding - leftShift - 8} y={center - 8} fontSize="16" fill="black">x</text>
// // //               <text x={center - leftShift + 8} y={padding + 8} fontSize="16" fill="black">y</text>

// // //               {/* Hover information */}
// // //               {hoveredAngle && (
// // //                 <g>
// // //                   <rect
// // //                     x={8 - leftShift}
// // //                     y={8}
// // //                     width="168"
// // //                     height="70"
// // //                     fill="white"
// // //                     stroke="black"
// // //                     strokeWidth="1"
// // //                     opacity="0.9"
// // //                   />
// // //                   <text x={16 - leftShift} y={28} fontSize="11" fill="black">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
// // //                   <text x={16 - leftShift} y={45} fontSize="11" fill="black">Coordinates: </text>
// // //                   <text x={16 - leftShift} y={62} fontSize="11" fill="black">{hoveredAngle.label}</text>
// // //                 </g>
// // //               )}
// // //             </svg>
// // //           </div>
          
// // //           <div className={styles.controlsContainer}>
// // //             <div className={styles.statsPanel}>
// // //               <div className={styles.statTitle}>Current Position</div>
// // //               <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
// // //               <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
// // //               <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
// // //             </div>
            
// // //             <div className={styles.controls}>
// // //               <input
// // //                 type="number"
// // //                 value={inputAngle}
// // //                 onChange={handleInputChange}
// // //                 placeholder="Enter angle"
// // //                 className={styles.input}
// // //               />
// // //               <button onClick={decrementAngle} className={styles.button}>
// // //                 ↓
// // //               </button>
// // //               <button onClick={incrementAngle} className={styles.button}>
// // //                 ↑
// // //               </button>
// // //               <button onClick={resetAngle} className={styles.button}>
// // //                 ↺
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UnitCircle;
// // import React, { useState, useRef } from 'react';
// // import styles from './UnitCircle.module.css';

// // const UnitCircle = () => {
// //   const [angle, setAngle] = useState(0);
// //   const [hoveredAngle, setHoveredAngle] = useState(null);
// //   const [inputAngle, setInputAngle] = useState('0');
// //   const svgRef = useRef(null);
// //   const isDragging = useRef(false);

// //   // Add describeArc function
// //   const describeArc = (x, y, radius, startAngle, endAngle) => {
// //     const start = {
// //       x: x + Math.cos(startAngle) * radius,
// //       y: y - Math.sin(startAngle) * radius
// //     };
// //     const end = {
// //       x: x + Math.cos(endAngle) * radius,
// //       y: y - Math.sin(endAngle) * radius
// //     };
// //     const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
// //     return [
// //       "M", start.x, start.y,
// //       "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
// //     ].join(" ");
// //   };

// //   const specialPoints = [
// //     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
// //     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
// //     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
// //     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
// //     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
// //     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
// //     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
// //     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
// //     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
// //     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
// //     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
// //     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
// //     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
// //     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
// //     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
// //     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
// //   ];

// //   const ANGLE_STEP = 1; // Define step size for increment/decrement

// //   // SVG configuration
// //   const size = 336;
// //   const center = size / 2;
// //   const radius = size * 0.4;
// //   const padding = 17;
// //   const leftShift = 50;
// //   const extraPadding = 40;
// //   const totalWidth = size + leftShift + extraPadding;
// //   const totalHeight = size + extraPadding * 2;

// //   // Calculate coordinates
// //   const x = Math.cos(angle) * radius + center - leftShift;
// //   const y = -Math.sin(angle) * radius + center;
// //   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

// //   const handleInputChange = (e) => {
// //     const value = e.target.value;
// //     setInputAngle(value);
// //     const numValue = parseFloat(value);
// //     if (!isNaN(numValue)) {
// //       setAngle((numValue * Math.PI) / 180);
// //     }
// //   };

// //   const incrementAngle = () => {
// //     const newAngle = (degrees + ANGLE_STEP) % 360;
// //     setAngle((newAngle * Math.PI) / 180);
// //     setInputAngle(newAngle.toString());
// //   };

// //   const decrementAngle = () => {
// //     const newAngle = (degrees - ANGLE_STEP + 360) % 360;
// //     setAngle((newAngle * Math.PI) / 180);
// //     setInputAngle(newAngle.toString());
// //   };

// //   const resetAngle = () => {
// //     setAngle(0);
// //     setInputAngle('0');
// //   };

// //   const handleMouseDown = () => {
// //     isDragging.current = true;
// //   };

// //   const handleMouseUp = () => {
// //     isDragging.current = false;
// //   };

// //   const handleMouseMove = (e) => {
// //     if (!isDragging.current || !svgRef.current) return;
// //     const svgRect = svgRef.current.getBoundingClientRect();
// //     const svgX = e.clientX - svgRect.left + leftShift;
// //     const svgY = e.clientY - svgRect.top;
// //     const dx = svgX - svgRect.width / 2;
// //     const dy = svgRect.height / 2 - svgY;
// //     const newAngle = Math.atan2(dy, dx);
// //     setAngle(newAngle);
// //     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.card}>
// //         <div className={styles.header}>
// //           <h2 className={styles.title}>Interactive Unit Circle</h2>
// //         </div>
// //         <div className={styles.content}>
// //           <div className={styles.circleContainer}>
// //             <svg
// //               ref={svgRef}
// //               viewBox={`-${leftShift + extraPadding} -${extraPadding} ${totalWidth} ${totalHeight}`}
// //               style={{ width: '100%', height: 'auto' }}
// //               onMouseDown={handleMouseDown}
// //               onMouseUp={handleMouseUp}
// //               onMouseMove={handleMouseMove}
// //               onMouseLeave={handleMouseUp}
// //             >
// //               <defs>
// //                 <marker
// //                   id="arrowhead"
// //                   markerWidth="10"
// //                   markerHeight="7"
// //                   refX="9"
// //                   refY="3.5"
// //                   orient="auto"
// //                 >
// //                   <polygon points="0 0, 10 3.5, 0 7" fill="black" />
// //                 </marker>
// //               </defs>

// //               {/* Grid */}
// //               <g stroke="gray" strokeWidth="0.5" opacity="0.2">
// //                 {[-1, -0.5, 0.5, 1].map((factor) => (
// //                   <React.Fragment key={`grid${factor}`}>
// //                     <line
// //                       x1={center + radius * factor - leftShift}
// //                       y1={padding}
// //                       x2={center + radius * factor - leftShift}
// //                       y2={size - padding}
// //                     />
// //                     <line
// //                       x1={padding - leftShift}
// //                       y1={center + radius * factor}
// //                       x2={size - padding - leftShift}
// //                       y2={center + radius * factor}
// //                     />
// //                   </React.Fragment>
// //                 ))}
// //               </g>

// //               {/* Quadrant Labels */}
// //               <text x={center - leftShift + radius/2} y={center - radius/2} 
// //                     fontSize="14" fill="#666" textAnchor="middle">
// //                 I 
// //               </text>
// //               <text x={center - leftShift - radius/2} y={center - radius/2} 
// //                     fontSize="14" fill="#666" textAnchor="middle">
// //                  II 
// //               </text>
// //               <text x={center - leftShift - radius/2} y={center + radius/2} 
// //                     fontSize="14" fill="#666" textAnchor="middle">
// //                 III 
// //               </text>
// //               <text x={center - leftShift + radius/2} y={center + radius/2} 
// //                     fontSize="14" fill="#666" textAnchor="middle">
// //                 IV 
// //               </text>

// //               {/* Axes */}
// //               <line 
// //                 x1={padding - leftShift} 
// //                 y1={center} 
// //                 x2={size - padding - leftShift} 
// //                 y2={center} 
// //                 stroke="black" 
// //                 strokeWidth="1"
// //                 markerEnd="url(#arrowhead)"
// //               />
// //               <line 
// //                 x1={center - leftShift} 
// //                 y1={size - padding} 
// //                 x2={center - leftShift} 
// //                 y2={padding} 
// //                 stroke="black" 
// //                 strokeWidth="1"
// //                 markerEnd="url(#arrowhead)"
// //               />

// //               {/* Unit circle */}
// //               <circle
// //                 cx={center - leftShift}
// //                 cy={center}
// //                 r={radius}
// //                 fill="none"
// //                 stroke="black"
// //                 strokeWidth="1"
// //                 opacity="0.3"
// //               />

// //               {/* Angle arc */}
// //               <path 
// //                 d={describeArc(center - leftShift, center, 30, 0, angle)} 
// //                 stroke="green" 
// //                 fill="none" 
// //                 strokeWidth="1"
// //               />

// //               {/* θ label */}
// //               <text 
// //                 x={center - leftShift + 20 * Math.cos(angle/2)}
// //                 y={center - 20 * Math.sin(angle/2)}
// //                 fill="green"
// //                 fontSize="12"
// //               >
// //                 θ
// //               </text>

// //               {/* Sin and Cos lines */}
// //               <line 
// //                 x1={x}
// //                 y1={y}
// //                 x2={x}
// //                 y2={center}
// //                 stroke="blue"
// //                 strokeWidth="1"
// //               />
// //               <line 
// //                 x1={center - leftShift}
// //                 y1={center}
// //                 x2={x}
// //                 y2={center}
// //                 stroke="red"
// //                 strokeWidth="1"
// //               />

// //               {/* Sin and Cos labels */}
// //               <text 
// //                 x={x + 5}
// //                 y={(y + center)/2}
// //                 fill="blue"
// //                 fontSize="11"
// //               >
// //                 sin(θ)
// //               </text>
// //               <text 
// //                 x={(x + center - leftShift)/2}
// //                 y={center + 15}
// //                 fill="red"
// //                 fontSize="11"
// //               >
// //                 cos(θ)
// //               </text>

// //               {/* Special points */}
// //               {specialPoints.map((point, index) => {
// //                 const px = center + radius * point.coords[0] - leftShift;
// //                 const py = center - radius * point.coords[1];
// //                 const angleRad = (point.angle * Math.PI) / 180;
// //                 const labelDistance = 27;
                
// //                 return (
// //                   <g key={index}>
// //                     <circle
// //                       cx={px}
// //                       cy={py}
// //                       r="3"
// //                       fill="blue"
// //                       opacity="0.5"
// //                       style={{ cursor: 'pointer' }}
// //                       onMouseEnter={() => setHoveredAngle(point)}
// //                       onMouseLeave={() => setHoveredAngle(null)}
// //                     />
// //                     <text
// //                       x={point.angle === 180 ? px + (Math.cos(angleRad) * labelDistance) - 10 : 
// //                          point.angle === 0 ? px + (Math.cos(angleRad) * labelDistance) + 10 : 
// //                          px + (Math.cos(angleRad) * labelDistance)}
// //                       y={py - (Math.sin(angleRad) * labelDistance)}
// //                       fontSize="11"
// //                       fill="black"
// //                       textAnchor="middle"
// //                       dominantBaseline="middle"
// //                     >
// //                       {point.degrees}
// //                       {' '}
// //                       ({point.radians})
// //                     </text>
// //                   </g>
// //                 );
// //               })}

// //               {/* Vector */}
// //               <line
// //                 x1={center - leftShift}
// //                 y1={center}
// //                 x2={x}
// //                 y2={y}
// //                 stroke="blue"
// //                 strokeWidth="2"
// //                 style={{ cursor: 'pointer' }}
// //               />
              
// //               <circle
// //                 cx={x}
// //                 cy={y}
// //                 r="5"
// //                 fill="blue"
// //                 style={{ cursor: 'pointer' }}
// //               />

// //               {/* Axis labels */}
// //               <text x={size - padding - leftShift - 8} y={center - 8} fontSize="16" fill="black">x</text>
// //               <text x={center - leftShift + 8} y={padding + 8} fontSize="16" fill="black">y</text>

// //             {/* Hover information */}
// //             {hoveredAngle && (
// //                 <g>
// //                   <rect
// //                     x={8 - leftShift}
// //                     y={8}
// //                     width="168"
// //                     height="70"
// //                     fill="white"
// //                     stroke="black"
// //                     strokeWidth="1"
// //                     opacity="0.9"
// //                   />
// //                   <text x={16 - leftShift} y={28} fontSize="11" fill="black">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
// //                   <text x={16 - leftShift} y={45} fontSize="11" fill="black">Coordinates: </text>
// //                   <text x={16 - leftShift} y={62} fontSize="11" fill="black">{hoveredAngle.label}</text>
// //                 </g>
// //               )}
// //             </svg>
// //           </div>
          
// //           <div className={styles.controlsContainer}>
// //             <div className={styles.statsPanel}>
// //               <div className={styles.statTitle}>Current Position</div>
// //               <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
// //               <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
// //               <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
// //             </div>
            
// //             <div className={styles.controls}>
// //               <input
// //                 type="number"
// //                 value={inputAngle}
// //                 onChange={handleInputChange}
// //                 placeholder="Enter angle"
// //                 className={styles.input}
// //               />
// //               <button onClick={decrementAngle} className={styles.button}>
// //                 ↓
// //               </button>
// //               <button onClick={incrementAngle} className={styles.button}>
// //                 ↑
// //               </button>
// //               <button onClick={resetAngle} className={styles.button}>
// //                 ↺
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UnitCircle;
// import React, { useState, useRef } from 'react';
// import styles from './UnitCircle.module.css';

// const UnitCircle = () => {
//   const [angle, setAngle] = useState(0);
//   const [hoveredAngle, setHoveredAngle] = useState(null);
//   const [inputAngle, setInputAngle] = useState('0');
//   const svgRef = useRef(null);
//   const isDragging = useRef(false);

//   const getCoordinates = (degrees, r) => ({
//     x: Math.cos(degrees * Math.PI / 180) * r,
//     y: Math.sin(degrees * Math.PI / 180) * r
//   });

//   const describeArc = (x, y, radius, startAngle, endAngle) => {
//     const start = getCoordinates(startAngle, radius);
//     const end = getCoordinates(endAngle, radius);
//     const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
//     return [
//       "M", x + start.x, y - start.y,
//       "A", radius, radius, 0, largeArcFlag, 0, x + end.x, y - end.y
//     ].join(" ");
//   };

//   const specialPoints = [
//     { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
//     { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
//     { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
//     { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
//     { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
//     { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
//     { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
//     { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
//     { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
//     { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
//     { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
//     { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
//     { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
//     { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
//     { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
//     { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
//   ];

//   const ANGLE_STEP = 1;

//   // SVG configuration
//   const size = 336;
//   const center = size / 2;
//   const radius = size * 0.4;
//   const padding = 17;
//   const leftShift = 50;
//   const extraPadding = 40;
//   const totalWidth = size + leftShift + extraPadding;
//   const totalHeight = size + extraPadding * 2;

//   // Calculate coordinates
//   const x = Math.cos(angle) * radius + center - leftShift;
//   const y = -Math.sin(angle) * radius + center;
//   const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputAngle(value);
//     const numValue = parseFloat(value);
//     if (!isNaN(numValue)) {
//       setAngle((numValue * Math.PI) / 180);
//     }
//   };

//   const incrementAngle = () => {
//     const newAngle = (degrees + ANGLE_STEP) % 360;
//     setAngle((newAngle * Math.PI) / 180);
//     setInputAngle(newAngle.toString());
//   };

//   const decrementAngle = () => {
//     const newAngle = (degrees - ANGLE_STEP + 360) % 360;
//     setAngle((newAngle * Math.PI) / 180);
//     setInputAngle(newAngle.toString());
//   };

//   const resetAngle = () => {
//     setAngle(0);
//     setInputAngle('0');
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging.current || !svgRef.current) return;
//     const svgRect = svgRef.current.getBoundingClientRect();
//     const svgX = e.clientX - svgRect.left + leftShift;
//     const svgY = e.clientY - svgRect.top;
//     const dx = svgX - svgRect.width / 2;
//     const dy = svgRect.height / 2 - svgY;
//     const newAngle = Math.atan2(dy, dx);
//     setAngle(newAngle);
//     setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
//   };

//   const formatFullAngle = (degrees) => {
//     const fullRounds = Math.floor(degrees / 360);
//     const remainingDegrees = ((degrees % 360) + 360) % 360;
    
//     if (fullRounds === 0) {
//       return `${remainingDegrees.toFixed(1)}°`;
//     }
    
//     return `${fullRounds} rounds + ${remainingDegrees.toFixed(1)}°`;
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <div className={styles.header}>
//           <h2 className={styles.title}>Interactive Unit Circle</h2>
//         </div>
//         <div className={styles.content}>
//           <div className={styles.circleContainer}>
//             <svg
//               ref={svgRef}
//               viewBox={`-${leftShift + extraPadding} -${extraPadding} ${totalWidth} ${totalHeight}`}
//               style={{ width: '100%', height: 'auto' }}
//               onMouseDown={handleMouseDown}
//               onMouseUp={handleMouseUp}
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseUp}
//             >
//               <defs>
//                 <marker
//                   id="arrowhead"
//                   markerWidth="10"
//                   markerHeight="7"
//                   refX="9"
//                   refY="3.5"
//                   orient="auto"
//                 >
//                   <polygon points="0 0, 10 3.5, 0 7" fill="black" />
//                 </marker>
//               </defs>

//               {/* Grid */}
//               <g stroke="gray" strokeWidth="0.5" opacity="0.2">
//                 {[-1, -0.5, 0.5, 1].map((factor) => (
//                   <React.Fragment key={`grid${factor}`}>
//                     <line
//                       x1={center + radius * factor - leftShift}
//                       y1={padding}
//                       x2={center + radius * factor - leftShift}
//                       y2={size - padding}
//                     />
//                     <line
//                       x1={padding - leftShift}
//                       y1={center + radius * factor}
//                       x2={size - padding - leftShift}
//                       y2={center + radius * factor}
//                     />
//                   </React.Fragment>
//                 ))}
//               </g>

//               {/* Quadrant Labels */}
//               <text x={center - leftShift + radius/2} y={center - radius/2} 
//                     fontSize="14" fill="#666" textAnchor="middle">
//                 I 
//               </text>
//               <text x={center - leftShift - radius/2} y={center - radius/2} 
//                     fontSize="14" fill="#666" textAnchor="middle">
//                  II 
//               </text>
//               <text x={center - leftShift - radius/2} y={center + radius/2} 
//                     fontSize="14" fill="#666" textAnchor="middle">
//                 III 
//               </text>
//               <text x={center - leftShift + radius/2} y={center + radius/2} 
//                     fontSize="14" fill="#666" textAnchor="middle">
//                 IV 
//               </text>

//               {/* Axes */}
//               <line 
//                 x1={padding - leftShift} 
//                 y1={center} 
//                 x2={size - padding - leftShift} 
//                 y2={center} 
//                 stroke="black" 
//                 strokeWidth="1"
//                 markerEnd="url(#arrowhead)"
//               />
//               <line 
//                 x1={center - leftShift} 
//                 y1={size - padding} 
//                 x2={center - leftShift} 
//                 y2={padding} 
//                 stroke="black" 
//                 strokeWidth="1"
//                 markerEnd="url(#arrowhead)"
//               />

//               {/* Unit circle */}
//               <circle
//                 cx={center - leftShift}
//                 cy={center}
//                 r={radius}
//                 fill="none"
//                 stroke="black"
//                 strokeWidth="1"
//                 opacity="0.3"
//               />

//               {/* Sin line */}
//               <line 
//                 x1={x}
//                 y1={y}
//                 x2={x}
//                 y2={center}
//                 stroke="blue"
//                 strokeWidth="1"
//               />

//               {/* Cos line */}
//               <line 
//                 x1={center - leftShift}
//                 y1={center}
//                 x2={x}
//                 y2={center}
//                 stroke="red"
//                 strokeWidth="1"
//               />

//               {/* Angle arc */}
//               <path 
//                 d={describeArc(center - leftShift, center, 40, 0, degrees)} 
//                 stroke="green" 
//                 fill="none" 
//                 strokeWidth="1"
//               />

//               {/* θ label in the center of the arc */}
//               <text 
//                 x={center - leftShift + 30 * Math.cos(angle/2)}
//                 y={center - 30 * Math.sin(angle/2)}
//                 fill="green"
//                 fontSize="12"
//                 dominantBaseline="middle"
//                 textAnchor="middle"
//               >
//                 θ
//               </text>

//               {/* Special points */}
//               {specialPoints.map((point, index) => {
//                 const px = center + radius * point.coords[0] - leftShift;
//                 const py = center - radius * point.coords[1];
//                 const angleRad = (point.angle * Math.PI) / 180;
//                 const labelDistance = 27;
                
//                 return (
//                   <g key={index}>
//                     <circle
//                       cx={px}
//                       cy={py}
//                       r="3"
//                       fill="blue"
//                       opacity="0.5"
//                       style={{ cursor: 'pointer' }}
//                       onMouseEnter={() => setHoveredAngle(point)}
//                       onMouseLeave={() => setHoveredAngle(null)}
//                     />
//                     <text
//                       x={point.angle === 180 ? px + (Math.cos(angleRad) * labelDistance) - 10 : 
//                          point.angle === 0 ? px + (Math.cos(angleRad) * labelDistance) + 10 : 
//                          px + (Math.cos(angleRad) * labelDistance)}
//                       y={py - (Math.sin(angleRad) * labelDistance)}
//                       fontSize="11"
//                       fill="black"
//                       textAnchor="middle"
//                       dominantBaseline="middle"
//                     >
//                       {point.degrees}
//                       {' '}
//                       ({point.radians})
//                     </text>
//                   </g>
//                 );
//               })}

//               {/* Vector */}
//               <line
//                 x1={center - leftShift}
//                 y1={center}
//                 x2={x}
//                 y2={y}
//                 stroke="blue"
//                 strokeWidth="2"
//                 style={{ cursor: 'pointer' }}
//               />
              
//               <circle
//                 cx={x}
//                 cy={y}
//                 r="5"
//                 fill="blue"
//                 style={{ cursor: 'pointer' }}
//               />

//               {/* Axis labels */}
//               <text x={size - padding - leftShift - 8} y={center - 8} fontSize="16" fill="black">x</text>
//               <text x={center - leftShift + 8} y={padding + 8} fontSize="16" fill="black">y</text>

//               {/* Sin and Cos labels */}
//               <text 
//                 x={x + 5}
//                 y={(y + center)/2}
//                 fill="blue"
//                 fontSize="11"
//                 dominantBaseline="middle"
//               >
//                 sin(θ)
//               </text>
//               <text 
//                 x={(x + center - leftShift)/2}
//                 y={center + 15}
//                 fill="red"
//                 fontSize="11"
//                 textAnchor="middle"
//               >
//                 cos(θ)
//               </text>

//              {/* Hover information */}
//              {hoveredAngle && (
//                <g>
//                  <rect
//                    x={8 - leftShift}
//                    y={8}
//                    width="168"
//                    height="70"
//                    fill="white"
//                    stroke="black"
//                    strokeWidth="1"
//                    opacity="0.9"
//                  />
//                  <text x={16 - leftShift} y={28} fontSize="11" fill="black">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
//                  <text x={16 - leftShift} y={45} fontSize="11" fill="black">Coordinates: </text>
//                  <text x={16 - leftShift} y={62} fontSize="11" fill="black">{hoveredAngle.label}</text>
//                </g>
//              )}
//            </svg>
//          </div>
         
//          <div className={styles.controlsContainer}>
//            {/* <div className={styles.statsPanel}>
//              <div className={styles.statTitle}>Current Position</div>
//              <div>Angle: {degrees.toFixed(1)}° = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
//              <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
//              <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
//            </div> */}

//           <div className={styles.statsPanel}>
//             <div className={styles.statTitle}>Current Position</div>
//             <div>Angle: {formatFullAngle(parseFloat(inputAngle))} = {(angle >= 0 ? angle : (2 * Math.PI + angle)).toFixed(2)} radians</div>
//             <div>cos({degrees.toFixed(1)}°) = {Math.cos(angle).toFixed(3)}</div>
//             <div>sin({degrees.toFixed(1)}°) = {Math.sin(angle).toFixed(3)}</div>
//           </div>
           
//            <div className={styles.controls}>
//              <input
//                type="number"
//                value={inputAngle}
//                onChange={handleInputChange}
//                placeholder="Enter angle"
//                className={styles.input}
//              />
//              <button onClick={decrementAngle} className={styles.button}>
//                ↓
//              </button>
//              <button onClick={incrementAngle} className={styles.button}>
//                ↑
//              </button>
//              <button onClick={resetAngle} className={styles.button}>
//                ↺
//              </button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
// };

// export default UnitCircle;

import React, { useState, useRef } from 'react';
import styles from './UnitCircle.module.css';

const UnitCircle = () => {
  const [angle, setAngle] = useState(0);
  const [hoveredAngle, setHoveredAngle] = useState(null);
  const [inputAngle, setInputAngle] = useState('0');
  const svgRef = useRef(null);
  const isDragging = useRef(false);

  const size = 336;
  const center = size / 2;
  const radius = size * 0.4;
  const padding = 17;
  const leftShift = 50;
  const extraPadding = 40;
  const totalWidth = size + leftShift + extraPadding;
  const totalHeight = size + extraPadding * 2;

  const x = Math.cos(angle) * radius + center - leftShift;
  const y = -Math.sin(angle) * radius + center;
  const degrees = ((angle * 180 / Math.PI) % 360 + 360) % 360;

  const getCoordinates = (degrees, r) => ({
    x: Math.cos(degrees * Math.PI / 180) * r,
    y: Math.sin(degrees * Math.PI / 180) * r
  });

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = getCoordinates(startAngle, radius);
    const end = getCoordinates(endAngle, radius);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", x + start.x, y - start.y,
      "A", radius, radius, 0, largeArcFlag, 0, x + end.x, y - end.y
    ].join(" ");
  };

  const trigoValues = (() => {
    const rad = angle;
    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);
    const tanVal = Math.tan(rad);

    return {
      sin: sinVal,
      cos: cosVal,
      tan: Math.abs(cosVal) < 1e-10 ? null : tanVal,
      csc: Math.abs(sinVal) < 1e-10 ? null : 1/sinVal,
      sec: Math.abs(cosVal) < 1e-10 ? null : 1/cosVal,
      cot: Math.abs(sinVal) < 1e-10 ? null : 1/tanVal
    };
  })();

  const specialPoints = [
    { angle: 0, degrees: "0°", radians: "0", coords: [1, 0], label: "(cos 0° = 1, sin 0° = 0)" },
    { angle: 30, degrees: "30°", radians: "π/6", coords: [Math.sqrt(3)/2, 1/2], label: `(cos 30° = √3/2, sin 30° = 1/2)` },
    { angle: 45, degrees: "45°", radians: "π/4", coords: [Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 45° = √2/2, sin 45° = √2/2)` },
    { angle: 60, degrees: "60°", radians: "π/3", coords: [1/2, Math.sqrt(3)/2], label: `(cos 60° = 1/2, sin 60° = √3/2)` },
    { angle: 90, degrees: "90°", radians: "π/2", coords: [0, 1], label: "(cos 90° = 0, sin 90° = 1)" },
    { angle: 120, degrees: "120°", radians: "2π/3", coords: [-1/2, Math.sqrt(3)/2], label: `(cos 120° = -1/2, sin 120° = √3/2)` },
    { angle: 135, degrees: "135°", radians: "3π/4", coords: [-Math.sqrt(2)/2, Math.sqrt(2)/2], label: `(cos 135° = -√2/2, sin 135° = √2/2)` },
    { angle: 150, degrees: "150°", radians: "5π/6", coords: [-Math.sqrt(3)/2, 1/2], label: `(cos 150° = -√3/2, sin 150° = 1/2)` },
    { angle: 180, degrees: "180°", radians: "π", coords: [-1, 0], label: "(cos 180° = -1, sin 180° = 0)" },
    { angle: 210, degrees: "210°", radians: "7π/6", coords: [-Math.sqrt(3)/2, -1/2], label: `(cos 210° = -√3/2, sin 210° = -1/2)` },
    { angle: 225, degrees: "225°", radians: "5π/4", coords: [-Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 225° = -√2/2, sin 225° = -√2/2)` },
    { angle: 240, degrees: "240°", radians: "4π/3", coords: [-1/2, -Math.sqrt(3)/2], label: `(cos 240° = -1/2, sin 240° = -√3/2)` },
    { angle: 270, degrees: "270°", radians: "3π/2", coords: [0, -1], label: "(cos 270° = 0, sin 270° = -1)" },
    { angle: 300, degrees: "300°", radians: "5π/3", coords: [1/2, -Math.sqrt(3)/2], label: `(cos 300° = 1/2, sin 300° = -√3/2)` },
    { angle: 315, degrees: "315°", radians: "7π/4", coords: [Math.sqrt(2)/2, -Math.sqrt(2)/2], label: `(cos 315° = √2/2, sin 315° = -√2/2)` },
    { angle: 330, degrees: "330°", radians: "11π/6", coords: [Math.sqrt(3)/2, -1/2], label: `(cos 330° = √3/2, sin 330° = -1/2)` }
  ];

  const formatFullAngle = (inputDegrees) => {
    const numDegrees = parseFloat(inputDegrees);
    if (isNaN(numDegrees)) return '0°';
    const fullRounds = Math.floor(numDegrees / 360);
    const remainingDegrees = ((numDegrees % 360) + 360) % 360;
    return fullRounds === 0 ? `${remainingDegrees.toFixed(1)}°` : `${fullRounds} rounds + ${remainingDegrees.toFixed(1)}°`;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputAngle(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setAngle((numValue * Math.PI) / 180);
    }
  };

  const incrementAngle = () => {
    const newAngle = (degrees + 1) % 360;
    setAngle((newAngle * Math.PI) / 180);
    setInputAngle(newAngle.toString());
  };

  const decrementAngle = () => {
    const newAngle = (degrees - 1 + 360) % 360;
    setAngle((newAngle * Math.PI) / 180);
    setInputAngle(newAngle.toString());
  };

  const resetAngle = () => {
    setAngle(0);
    setInputAngle('0');
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const svgX = e.clientX - svgRect.left + leftShift;
    const svgY = e.clientY - svgRect.top;
    const dx = svgX - svgRect.width / 2;
    const dy = svgRect.height / 2 - svgY;
    const newAngle = Math.atan2(dy, dx);
    setAngle(newAngle);
    setInputAngle(((newAngle * 180 / Math.PI) % 360 + 360) % 360);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* <div className={styles.header}>
          <h2 className={styles.title}>Interactive Unit Circle</h2>
        </div> */}
        <div className={styles.content}>
          <div className={styles.circleContainer}>
            <svg
              ref={svgRef}
              viewBox={`-${leftShift + extraPadding} -${extraPadding} ${totalWidth} ${totalHeight}`}
              style={{ width: '100%', height: 'auto' }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
              </defs>

              <g stroke="gray" strokeWidth="0.5" opacity="0.2">
                {[-1, -0.5, 0.5, 1].map((factor) => (
                  <React.Fragment key={`grid${factor}`}>
                    <line
                      x1={center + radius * factor - leftShift}
                      y1={padding}
                      x2={center + radius * factor - leftShift}
                      y2={size - padding}
                    />
                    <line
                      x1={padding - leftShift}
                      y1={center + radius * factor}
                      x2={size - padding - leftShift}
                      y2={center + radius * factor}
                    />
                  </React.Fragment>
                ))}
              </g>

              <text x={center - leftShift + radius/2} y={center - radius/2} 
                    fontSize="14" fill="#666" textAnchor="middle">
                I 
              </text>
              <text x={center - leftShift - radius/2} y={center - radius/2} 
                    fontSize="14" fill="#666" textAnchor="middle">
                 II 
              </text>
              <text x={center - leftShift - radius/2} y={center + radius/2} 
                    fontSize="14" fill="#666" textAnchor="middle">
                III 
              </text>
              <text x={center - leftShift + radius/2} y={center + radius/2} 
                    fontSize="14" fill="#666" textAnchor="middle">
                IV 
              </text>

              <line 
                x1={padding - leftShift} 
                y1={center} 
                x2={size - padding - leftShift} 
                y2={center} 
                stroke="black" 
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />
              <line 
                x1={center - leftShift} 
                y1={size - padding} 
                x2={center - leftShift} 
                y2={padding} 
                stroke="black" 
                strokeWidth="1"
                markerEnd="url(#arrowhead)"
              />

              <circle
                cx={center - leftShift}
                cy={center}
                r={radius}
                fill="none"
                stroke="black"
                strokeWidth="1"
                opacity="0.3"
              />

              <line 
                x1={x}
                y1={y}
                x2={x}
                y2={center}
                stroke="blue"
                strokeWidth="1"
              />

              <line 
                x1={center - leftShift}
                y1={center}
                x2={x}
                y2={center}
                stroke="red"
                strokeWidth="1"
              />

              <path 
                d={describeArc(center - leftShift, center, 40, 0, degrees)} 
                stroke="green" 
                fill="none" 
                strokeWidth="1"
              />

              <text 
                x={center - leftShift + 30 * Math.cos(angle/2)}
                y={center - 30 * Math.sin(angle/2)}
                fill="green"
                fontSize="12"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                θ
              </text>

              {specialPoints.map((point, index) => {
                const px = center + radius * point.coords[0] - leftShift;
                const py = center - radius * point.coords[1];
                const angleRad = (point.angle * Math.PI) / 180;
                const labelDistance = 27;
                
                return (
                  <g key={index}>
                    <circle
                      cx={px}
                      cy={py}
                      r="3"
                      fill="blue"
                      opacity="0.5"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredAngle(point)}
                      onMouseLeave={() => setHoveredAngle(null)}
                    />
                    <text
                      x={point.angle === 180 ? px + (Math.cos(angleRad) * labelDistance) - 10 : 
                         point.angle === 0 ? px + (Math.cos(angleRad) * labelDistance) + 10 : 
                         px + (Math.cos(angleRad) * labelDistance)}
                      y={py - (Math.sin(angleRad) * labelDistance)}
                      fontSize="11"
                      fill="black"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {point.degrees}
                      {' '}
                      ({point.radians})
                    </text>
                  </g>
                );
              })}

              <line
                x1={center - leftShift}
                y1={center}
                x2={x}
                y2={y}
                stroke="blue"
                strokeWidth="2"
                style={{ cursor: 'pointer' }}
              />
              
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="blue"
                style={{ cursor: 'pointer' }}
              />

              <text x={size - padding - leftShift - 8} y={center - 8} fontSize="16" fill="black">x</text>
              <text x={center - leftShift + 8} y={padding + 8} fontSize="16" fill="black">y</text>

              <text 
                x={x + 5}
                y={(y + center)/2}
                fill="blue"
                fontSize="11"
                dominantBaseline="middle"
              >
                sin(θ)
              </text>
              <text 
                x={(x + center - leftShift)/2}
                y={center + 15}
                fill="red"
                fontSize="11"
                textAnchor="middle"
              >
                cos(θ)
              </text>

              {hoveredAngle && (
                <g>
                  <rect
                    x={8 - leftShift}
                    y={8}
                    width="168"
                    height="70"
                    fill="white"
                    stroke="black"
                    strokeWidth="1"
                    opacity="0.9"
                  />
                  <text x={16 - leftShift} y={28} fontSize="11" fill="black">Angle: {hoveredAngle.degrees} = {hoveredAngle.radians}</text>
                  <text x={16 - leftShift} y={45} fontSize="11" fill="black">Coordinates: </text>
                  <text x={16 - leftShift} y={62} fontSize="11" fill="black">{hoveredAngle.label}</text>
                </g>
              )}
            </svg>
          </div>
          
          <div className={styles.controlsContainer}>
            <div className={styles.controls}>
              <input
                type="number"
                value={inputAngle}
                onChange={handleInputChange}
                placeholder="Enter angle"
                className={styles.input}
              />
              <button onClick={decrementAngle} className={styles.button}>
                ↓
              </button>
              <button onClick={incrementAngle} className={styles.button}>
                ↑
              </button>
              <button onClick={resetAngle} className={styles.button}>
                ↺
              </button>
            </div>

            <div className={styles.angleDisplay}>
              Angle: {formatFullAngle(inputAngle)}
            </div>

            <table className={styles.trigoTable}>
              <thead>
                <tr>
                  {Object.keys(trigoValues).map(func => (
                    <th key={func}>{func}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.entries(trigoValues).map(([func, value]) => (
                    <td key={func}>
                      {value === null ? 'Undefined' : value.toFixed(5)}
                      <button
                        className={styles.copyButton}
                        onClick={() => navigator.clipboard.writeText(value === null ? 'Undefined' : value.toFixed(5))}
                      >
                        Copy
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            
          <div className={styles.explanationsContainer}>
            <h3 className={styles.explanationsTitle}>How to Use</h3>
            <div className={styles.explanationsList}>
              <div className={styles.explanationItem}>
                <span className={styles.explanationNumber}>1.</span>
                <p>Input angle using number field or arrow buttons (↑↓). Supports angles beyond 360° to show multiple rotations.</p>
              </div>
              <div className={styles.explanationItem}>
                <span className={styles.explanationNumber}>2.</span>
                <p>Drag the blue point on the circle for interactive angle selection.</p>
              </div>
              <div className={styles.explanationItem}>
                <span className={styles.explanationNumber}>3.</span>
                <p>Hover over special angles (marked in blue) to see exact values.</p>
              </div>
              <div className={styles.explanationItem}>
                <span className={styles.explanationNumber}>4.</span>
                <p>Use &apos;Copy&apos; buttons in the table to copy individual trigonometric values.</p>
              </div>
              <div className={styles.explanationItem}>
                <span className={styles.explanationNumber}>5.</span>
                <p>Reset button (↺) returns angle to 0°.</p>
              </div>
            </div>
          </div>


            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UnitCircle;