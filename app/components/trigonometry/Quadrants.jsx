

// // import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';

// // // Constants
// // const FUNCTIONS = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];
// // const QUADRANT_COLORS = {
// //   1: '#3b82f6', 2: '#22c55e', 3: '#eab308', 4: '#8b5cf6'
// // };

// // const QUADRANT_DATA = {
// //   1: {
// //     coordinates: { x: '+', y: '+' },
// //     angles: { degrees: '0° to 90°', radians: '0 to π/2' },
// //     signs: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' }
// //   },
// //   2: {
// //     coordinates: { x: '−', y: '+' },
// //     angles: { degrees: '90° to 180°', radians: 'π/2 to π' },
// //     signs: { sin: '+', cos: '−', tan: '−', csc: '+', sec: '−', cot: '−' }
// //   },
// //   3: {
// //     coordinates: { x: '−', y: '−' },
// //     angles: { degrees: '180° to 270°', radians: 'π to 3π/2' },
// //     signs: { sin: '−', cos: '−', tan: '+', csc: '−', sec: '−', cot: '+' }
// //   },
// //   4: {
// //     coordinates: { x: '+', y: '−' },
// //     angles: { degrees: '270° to 360°', radians: '3π/2 to 2π' },
// //     signs: { sin: '−', cos: '+', tan: '−', csc: '−', sec: '+', cot: '−' }
// //   }
// // };

// // // Error Boundary
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }

// //   static getDerivedStateFromError(error) {
// //     return { hasError: true };
// //   }

// //   componentDidCatch(error, errorInfo) {
// //     console.error('Trigonometry App Error:', error, errorInfo);
// //   }

// //   render() {
// //     if (this.state.hasError) {
// //       return (
// //         <div style={{ 
// //           display: 'flex', 
// //           justifyContent: 'center', 
// //           alignItems: 'center', 
// //           minHeight: '400px',
// //           padding: '20px',
// //           fontFamily: 'system-ui, -apple-system, sans-serif'
// //         }}>
// //           <div style={{
// //             backgroundColor: 'white',
// //             borderRadius: '8px',
// //             padding: '32px',
// //             maxWidth: '500px',
// //             textAlign: 'center',
// //             border: '1px solid #e5e7eb',
// //             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
// //           }}>
// //             <h2 style={{ color: '#dc2626', marginBottom: '16px' }}>
// //               Something went wrong
// //             </h2>
// //             <p style={{ color: '#4b5563', marginBottom: '24px' }}>
// //               The trigonometry visualization encountered an error. Please refresh the page.
// //             </p>
// //             <button 
// //               onClick={() => window.location.reload()}
// //               style={{
// //                 backgroundColor: '#3b82f6',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '6px',
// //                 padding: '12px 24px',
// //                 cursor: 'pointer'
// //               }}
// //             >
// //               Refresh Page
// //             </button>
// //           </div>
// //         </div>
// //       );
// //     }
// //     return this.props.children;
// //   }
// // }

// // // Utility Functions
// // const getExplanation = (func, quadrant) => {
// //   const { coordinates, signs } = QUADRANT_DATA[quadrant];
// //   const { x: xSign, y: ySign } = coordinates;
// //   const funcSign = signs[func];
  
// //   const explanations = {
// //     sin: `sin θ = y/r. Since y is ${ySign === '+' ? 'positive' : 'negative'} and r is always positive, sin θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     cos: `cos θ = x/r. Since x is ${xSign === '+' ? 'positive' : 'negative'} and r is always positive, cos θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     tan: `tan θ = y/x. Since y is ${ySign === '+' ? 'positive' : 'negative'} and x is ${xSign === '+' ? 'positive' : 'negative'}, tan θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     csc: `csc θ = r/y = 1/sin θ. Since r is always positive and y is ${ySign === '+' ? 'positive' : 'negative'}, csc θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     sec: `sec θ = r/x = 1/cos θ. Since r is always positive and x is ${xSign === '+' ? 'positive' : 'negative'}, sec θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     cot: `cot θ = x/y. Since x is ${xSign === '+' ? 'positive' : 'negative'} and y is ${ySign === '+' ? 'positive' : 'negative'}, cot θ is ${funcSign === '+' ? 'positive' : 'negative'}.`
// //   };
  
// //   return explanations[func] || 'Explanation not available';
// // };

// // const getSignStyle = (sign) => ({
// //   color: sign === '+' ? '#22c55e' : '#ef4444',
// //   fontWeight: 'bold'
// // });

// // const getCirclePoint = (quadrant, center, radius) => {
// //   const angles = { 1: Math.PI / 4, 2: 3 * Math.PI / 4, 3: 5 * Math.PI / 4, 4: 7 * Math.PI / 4 };
// //   const angle = angles[quadrant];
  
// //   return {
// //     x: center + radius * Math.cos(angle),
// //     y: center - radius * Math.sin(angle)
// //   };
// // };

// // // Custom Hooks
// // const useTrigonometry = ({ initialQuadrant = 1, initialFunction = 'sin', functions = FUNCTIONS } = {}) => {
// //   const [selectedQuadrant, setSelectedQuadrant] = useState(initialQuadrant);
// //   const [selectedFunction, setSelectedFunction] = useState(
// //     functions.includes(initialFunction) ? initialFunction : functions[0]
// //   );
// //   const [showExplanation, setShowExplanation] = useState(true);

// //   const handleQuadrantSelect = useCallback((quadrant) => {
// //     if ([1, 2, 3, 4].includes(quadrant)) {
// //       setSelectedQuadrant(quadrant);
// //     }
// //   }, []);

// //   const handleFunctionSelect = useCallback((func) => {
// //     if (functions.includes(func)) {
// //       setSelectedFunction(func);
// //     }
// //   }, [functions]);

// //   const currentQuadrantData = useMemo(() => 
// //     QUADRANT_DATA[selectedQuadrant], 
// //     [selectedQuadrant]
// //   );

// //   const currentFunctionSign = useMemo(() => 
// //     currentQuadrantData?.signs[selectedFunction] || '+',
// //     [currentQuadrantData, selectedFunction]
// //   );

// //   return {
// //     selectedQuadrant,
// //     selectedFunction,
// //     showExplanation,
// //     currentQuadrantData,
// //     currentFunctionSign,
// //     handleQuadrantSelect,
// //     handleFunctionSelect,
// //     toggleExplanation: () => setShowExplanation(prev => !prev)
// //   };
// // };

// // const useKeyboardNavigation = ({ onQuadrantSelect, onFunctionSelect, functions = FUNCTIONS }) => {
// //   useEffect(() => {
// //     const handleKeyPress = (event) => {
// //       switch (event.key) {
// //         case '1':
// //         case '2':
// //         case '3':
// //         case '4':
// //           event.preventDefault();
// //           onQuadrantSelect(parseInt(event.key));
// //           break;
// //         case 'ArrowLeft':
// //         case 'ArrowRight':
// //           event.preventDefault();
// //           const currentIndex = functions.findIndex(f => f === event.target.dataset?.function);
// //           if (currentIndex >= 0) {
// //             const newIndex = event.key === 'ArrowLeft' 
// //               ? (currentIndex - 1 + functions.length) % functions.length
// //               : (currentIndex + 1) % functions.length;
// //             onFunctionSelect(functions[newIndex]);
// //           }
// //           break;
// //       }
// //     };

// //     document.addEventListener('keydown', handleKeyPress);
// //     return () => document.removeEventListener('keydown', handleKeyPress);
// //   }, [onQuadrantSelect, onFunctionSelect, functions]);
// // };

// // // Components
// // const QuadrantSelector = memo(({ selectedQuadrant, onQuadrantSelect }) => (
// //   <div style={{ 
// //     display: 'grid', 
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
// //     gap: '10px', 
// //     marginBottom: '20px' 
// //   }}>
// //     {[1, 2, 3, 4].map(q => (
// //       <button
// //         key={q}
// //         onClick={() => onQuadrantSelect(q)}
// //         onKeyDown={(e) => e.key === 'Enter' && onQuadrantSelect(q)}
// //         style={{
// //           padding: '12px',
// //           border: selectedQuadrant === q ? `2px solid ${QUADRANT_COLORS[q]}` : '1px solid #ccc',
// //           backgroundColor: selectedQuadrant === q ? QUADRANT_COLORS[q] : 'white',
// //           color: selectedQuadrant === q ? 'white' : '#333',
// //           borderRadius: '8px',
// //           cursor: 'pointer',
// //           fontSize: '14px',
// //           fontWeight: 'bold',
// //           transition: 'all 0.2s ease'
// //         }}
// //         aria-pressed={selectedQuadrant === q}
// //         aria-label={`Select quadrant ${q}: ${QUADRANT_DATA[q].angles.degrees}`}
// //       >
// //         Q{q}: {QUADRANT_DATA[q].angles.degrees}<br/>
// //         <span style={{ fontSize: '12px', opacity: '0.9' }}>({QUADRANT_DATA[q].angles.radians})</span>
// //       </button>
// //     ))}
// //   </div>
// // ));

// // const UnitCircle = memo(({ selectedQuadrant, size = 320 }) => {
// //   const center = size / 2;
// //   const radius = (size - 40) / 2;
// //   const point = getCirclePoint(selectedQuadrant, center, radius);
// //   const selectedColor = QUADRANT_COLORS[selectedQuadrant];

// //   const quadrantPaths = [
// //     { quadrant: 1, d: `M ${center} ${center} L ${center} ${center - radius} A ${radius} ${radius} 0 0 1 ${center + radius} ${center} Z` },
// //     { quadrant: 2, d: `M ${center} ${center} L ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center - radius} Z` },
// //     { quadrant: 3, d: `M ${center} ${center} L ${center} ${center + radius} A ${radius} ${radius} 0 0 1 ${center - radius} ${center} Z` },
// //     { quadrant: 4, d: `M ${center} ${center} L ${center + radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center + radius} Z` }
// //   ];

// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
// //       <svg 
// //         width={size} 
// //         height={size} 
// //         viewBox={`0 0 ${size} ${size}`}
// //         role="img"
// //         aria-label={`Unit circle showing quadrant ${selectedQuadrant}`}
// //         style={{ border: '1px solid #ddd', maxWidth: '100%', height: 'auto' }}
// //       >
// //         <title>Unit Circle - Quadrant {selectedQuadrant}</title>
        
// //         <circle cx={center} cy={center} r={radius} fill="none" stroke="#333" strokeWidth="2" />
        
// //         <line x1={center} y1="20" x2={center} y2={size - 20} stroke="#666" strokeWidth="2" />
// //         <line x1="20" y1={center} x2={size - 20} y2={center} stroke="#666" strokeWidth="2" />
        
// //         {quadrantPaths.map(({ quadrant, d }) => (
// //           <path
// //             key={quadrant}
// //             d={d}
// //             fill={selectedQuadrant === quadrant ? `${QUADRANT_COLORS[quadrant]}20` : 'rgba(200, 200, 200, 0.1)'}
// //             stroke={selectedQuadrant === quadrant ? QUADRANT_COLORS[quadrant] : '#ccc'}
// //             strokeWidth={selectedQuadrant === quadrant ? '2' : '1'}
// //           />
// //         ))}
        
// //         <g>
// //           <line x1={center} y1={center} x2={point.x} y2={point.y} stroke={selectedColor} strokeWidth="3" />
// //           <circle cx={point.x} cy={point.y} r="4" fill={selectedColor} />
// //           <line x1={point.x} y1={point.y} x2={point.x} y2={center} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
// //           <line x1={point.x} y1={point.y} x2={center} y2={point.y} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
          
// //           <text x={point.x + 10} y={point.y - 5} fontSize="12" fontWeight="bold" fill={selectedColor}>(x, y)</text>
// //           <text x={point.x/2 + center/2} y={point.y/2 + center/2 + 5} fontSize="12" fontWeight="bold" fill={selectedColor}>r</text>
// //         </g>
        
// //         <text x={size - 15} y={center - 5} fontSize="12" fill="#666">+x</text>
// //         <text x={center + 5} y="15" fontSize="12" fill="#666">+y</text>
// //         <text x="5" y={center - 5} fontSize="12" fill="#666">-x</text>
// //         <text x={center + 5} y={size - 5} fontSize="12" fill="#666">-y</text>
        
// //         <text x={center + radius/2} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">I</text>
// //         <text x={center - radius/2 - 10} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">II</text>
// //         <text x={center - radius/2 - 10} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">III</text>
// //         <text x={center + radius/2} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">IV</text>
// //       </svg>
// //     </div>
// //   );
// // });

// // const FunctionSelector = memo(({ selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => (
// //   <div style={{ 
// //     display: 'grid', 
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
// //     gap: '8px', 
// //     marginBottom: '20px' 
// //   }}>
// //     {functions.map(func => (
// //       <button
// //         key={func}
// //         onClick={() => onFunctionSelect(func)}
// //         data-function={func}
// //         style={{
// //           padding: '12px 8px',
// //           border: selectedFunction === func ? '2px solid #333' : '1px solid #ccc',
// //           backgroundColor: selectedFunction === func ? '#333' : 'white',
// //           color: selectedFunction === func ? 'white' : '#333',
// //           borderRadius: '6px',
// //           cursor: 'pointer',
// //           fontSize: '14px',
// //           fontWeight: 'bold',
// //           transition: 'all 0.2s ease'
// //         }}
// //         aria-pressed={selectedFunction === func}
// //         aria-label={`Select ${func} function`}
// //       >
// //         {func}
// //       </button>
// //     ))}
// //   </div>
// // ));

// // const CoordinateInfo = memo(({ quadrant, coordinates, angles }) => (
// //   <div style={{ 
// //     padding: '15px', 
// //     backgroundColor: '#f8f9fa', 
// //     borderRadius: '8px',
// //     border: '1px solid #ddd',
// //     marginBottom: '20px'
// //   }}>
// //     <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
// //       Quadrant {quadrant} Coordinates
// //     </h4>
// //     <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
// //       <div><strong>x-coordinate:</strong> <span style={getSignStyle(coordinates.x)}>{coordinates.x}</span></div>
// //       <div><strong>y-coordinate:</strong> <span style={getSignStyle(coordinates.y)}>{coordinates.y}</span></div>
// //       <div><strong>radius (r):</strong> <span style={{ color: '#22c55e', fontWeight: 'bold' }}>always +</span></div>
// //       <div><strong>Reference angle:</strong> {angles.degrees} ({angles.radians})</div>
// //     </div>
// //   </div>
// // ));

// // const ExplanationPanel = memo(({ selectedFunction, selectedQuadrant, currentQuadrantData, currentFunctionSign, showExplanation }) => (
// //   <div style={{ 
// //     border: '1px solid #ddd', 
// //     borderRadius: '8px', 
// //     overflow: 'hidden',
// //     backgroundColor: 'white',
// //     marginBottom: '20px'
// //   }}>
// //     <div style={{ 
// //       backgroundColor: QUADRANT_COLORS[selectedQuadrant], 
// //       color: 'white',
// //       padding: '15px', 
// //       textAlign: 'center'
// //     }}>
// //       <h3 style={{ margin: '0', fontSize: '18px' }}>
// //         {selectedFunction}(θ) in Quadrant {selectedQuadrant}
// //       </h3>
// //     </div>
    
// //     <div style={{ padding: '20px' }}>
// //       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
// //         <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
// //           Sign: <span style={{ fontSize: '32px', ...getSignStyle(currentFunctionSign) }}>
// //             {currentFunctionSign}
// //           </span>
// //         </div>
// //       </div>
      
// //       {showExplanation && (
// //         <div style={{ 
// //           backgroundColor: '#f8f9fa', 
// //           padding: '15px', 
// //           borderRadius: '6px',
// //           fontSize: '14px',
// //           lineHeight: '1.6'
// //         }}>
// //           <strong>Mathematical Reasoning:</strong><br/>
// //           {getExplanation(selectedFunction, selectedQuadrant)}
// //         </div>
// //       )}
// //     </div>
// //   </div>
// // ));

// // const FunctionSummary = memo(({ selectedQuadrant, selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => (
// //   <div style={{ 
// //     border: '1px solid #ddd', 
// //     borderRadius: '8px', 
// //     backgroundColor: 'white'
// //   }}>
// //     <div style={{ 
// //       backgroundColor: '#f8f9fa', 
// //       padding: '12px', 
// //       borderBottom: '1px solid #ddd'
// //     }}>
// //       <h4 style={{ margin: '0', fontSize: '16px' }}>
// //         All Functions in Quadrant {selectedQuadrant}
// //       </h4>
// //     </div>
// //     <div style={{ padding: '15px' }}>
// //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '10px' }}>
// //         {functions.map(func => (
// //           <div
// //             key={func}
// //             onClick={() => onFunctionSelect(func)}
// //             style={{
// //               padding: '10px',
// //               textAlign: 'center',
// //               border: selectedFunction === func ? '2px solid #333' : '1px solid #ddd',
// //               borderRadius: '6px',
// //               cursor: 'pointer',
// //               backgroundColor: selectedFunction === func ? '#f8f9fa' : 'white',
// //               transition: 'all 0.2s ease'
// //             }}
// //             role="button"
// //             tabIndex={0}
// //             onKeyDown={(e) => e.key === 'Enter' && onFunctionSelect(func)}
// //             aria-label={`${func} function: ${QUADRANT_DATA[selectedQuadrant].signs[func]}`}
// //           >
// //             <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{func}</div>
// //             <div style={{ fontSize: '18px', ...getSignStyle(QUADRANT_DATA[selectedQuadrant].signs[func]) }}>
// //               {QUADRANT_DATA[selectedQuadrant].signs[func]}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </div>
// // ));

// // const MemoryAid = memo(() => (
// //   <div style={{ 
// //     marginTop: '30px', 
// //     padding: '20px', 
// //     backgroundColor: '#f8f9fa', 
// //     borderRadius: '8px',
// //     border: '1px solid #ddd'
// //   }}>
// //     <h4 style={{ margin: '0 0 15px 0', color: '#333' }}>Key Concepts</h4>
// //     <div style={{ 
// //       display: 'grid', 
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
// //       gap: '15px', 
// //       fontSize: '14px' 
// //     }}>
// //       <div>
// //         <strong>Fundamental Definitions:</strong><br/>
// //         • sin θ = y/r, cos θ = x/r, tan θ = y/x<br/>
// //         • csc θ = r/y, sec θ = r/x, cot θ = x/y
// //       </div>
// //       <div>
// //         <strong>Memory Aid "ASTC":</strong><br/>
// //         • Quadrant I: <strong>A</strong>ll positive<br/>
// //         • Quadrant II: <strong>S</strong>ine positive<br/>
// //         • Quadrant III: <strong>T</strong>angent positive<br/>
// //         • Quadrant IV: <strong>C</strong>osine positive
// //       </div>
// //     </div>
// //   </div>
// // ));

// // // Main App Component
// // const TrigonometryApp = ({ functions = FUNCTIONS }) => {
// //   const {
// //     selectedQuadrant,
// //     selectedFunction,
// //     showExplanation,
// //     currentQuadrantData,
// //     currentFunctionSign,
// //     handleQuadrantSelect,
// //     handleFunctionSelect,
// //     toggleExplanation
// //   } = useTrigonometry({ 
// //     initialFunction: functions[0],
// //     functions: functions
// //   });

// //   useKeyboardNavigation({ 
// //     onQuadrantSelect: handleQuadrantSelect, 
// //     onFunctionSelect: handleFunctionSelect,
// //     functions: functions
// //   });

// //   return (
// //     <div style={{ 
// //       fontFamily: 'system-ui, -apple-system, sans-serif', 
// //       padding: '20px', 
// //       maxWidth: '1200px', 
// //       margin: '0 auto',
// //       minHeight: '100vh'
// //     }}>
// //       <header style={{ textAlign: 'center', marginBottom: '30px' }}>
// //         <h1 style={{ 
// //           color: '#1f2937', 
// //           fontSize: 'clamp(24px, 4vw, 32px)',
// //           fontWeight: 'bold',
// //           margin: '0 0 10px 0'
// //         }}>
// //           Trigonometric Functions Signs
// //         </h1>
// //         <p style={{ 
// //           color: '#6b7280', 
// //           fontSize: '16px',
// //           margin: '0 0 20px 0'
// //         }}>
// //           Interactive visualization showing mathematical reasoning behind function signs
// //         </p>
        
// //         <button
// //           onClick={toggleExplanation}
// //           style={{
// //             backgroundColor: showExplanation ? '#64748b' : '#1e293b',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '6px',
// //             padding: '8px 16px',
// //             fontSize: '14px',
// //             cursor: 'pointer',
// //             transition: 'background-color 0.2s'
// //           }}
// //           aria-label={showExplanation ? 'Hide explanations' : 'Show explanations'}
// //         >
// //           {showExplanation ? 'Hide' : 'Show'} Explanations
// //         </button>
// //       </header>
      
// //       <main>
// //         <div style={{ 
// //           display: 'grid', 
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
// //           gap: '30px',
// //           alignItems: 'start'
// //         }}>
// //           <section aria-label="Unit circle and controls">
// //             <QuadrantSelector 
// //               selectedQuadrant={selectedQuadrant} 
// //               onQuadrantSelect={handleQuadrantSelect} 
// //             />
            
// //             <UnitCircle 
// //               selectedQuadrant={selectedQuadrant}
// //             />
            
// //             <CoordinateInfo
// //               quadrant={selectedQuadrant}
// //               coordinates={currentQuadrantData.coordinates}
// //               angles={currentQuadrantData.angles}
// //             />
// //           </section>

// //           <section aria-label="Function analysis">
// //             <FunctionSelector 
// //               selectedFunction={selectedFunction}
// //               onFunctionSelect={handleFunctionSelect}
// //               functions={functions}
// //             />

// //             <ExplanationPanel
// //               selectedFunction={selectedFunction}
// //               selectedQuadrant={selectedQuadrant}
// //               currentQuadrantData={currentQuadrantData}
// //               currentFunctionSign={currentFunctionSign}
// //               showExplanation={showExplanation}
// //             />

// //             <FunctionSummary
// //               selectedQuadrant={selectedQuadrant}
// //               selectedFunction={selectedFunction}
// //               onFunctionSelect={handleFunctionSelect}
// //               functions={functions}
// //             />
// //           </section>
// //         </div>

// //         <MemoryAid />
// //       </main>

// //       <footer style={{ 
// //         marginTop: '40px', 
// //         padding: '20px', 
// //         backgroundColor: '#f3f4f6',
// //         borderRadius: '8px',
// //         fontSize: '14px',
// //         color: '#4b5563'
// //       }}>
// //         <h4 style={{ margin: '0 0 10px 0' }}>Keyboard Navigation:</h4>
// //         <p style={{ margin: '0' }}>
// //           Press 1-4 to select quadrants • Use arrow keys to navigate functions • All interactive elements support keyboard and screen readers
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // };

// // // Export with Error Boundary
// // const Quadrants = ({ functions = FUNCTIONS }) => (
// //   <ErrorBoundary>
// //     <TrigonometryApp functions={functions} />
// //   </ErrorBoundary>
// // );

// // export default Quadrants;


// // import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';

// // // Constants
// // const FUNCTIONS = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];
// // const QUADRANT_COLORS = {
// //   1: '#3b82f6', 2: '#22c55e', 3: '#eab308', 4: '#8b5cf6'
// // };

// // const QUADRANT_DATA = {
// //   1: {
// //     coordinates: { x: '+', y: '+' },
// //     angles: { degrees: '0° to 90°', radians: '0 to π/2' },
// //     signs: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' }
// //   },
// //   2: {
// //     coordinates: { x: '−', y: '+' },
// //     angles: { degrees: '90° to 180°', radians: 'π/2 to π' },
// //     signs: { sin: '+', cos: '−', tan: '−', csc: '+', sec: '−', cot: '−' }
// //   },
// //   3: {
// //     coordinates: { x: '−', y: '−' },
// //     angles: { degrees: '180° to 270°', radians: 'π to 3π/2' },
// //     signs: { sin: '−', cos: '−', tan: '+', csc: '−', sec: '−', cot: '+' }
// //   },
// //   4: {
// //     coordinates: { x: '+', y: '−' },
// //     angles: { degrees: '270° to 360°', radians: '3π/2 to 2π' },
// //     signs: { sin: '−', cos: '+', tan: '−', csc: '−', sec: '+', cot: '−' }
// //   }
// // };

// // // Error Boundary
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }

// //   static getDerivedStateFromError(error) {
// //     return { hasError: true };
// //   }

// //   componentDidCatch(error, errorInfo) {
// //     console.error('Trigonometry App Error:', error, errorInfo);
// //   }

// //   render() {
// //     if (this.state.hasError) {
// //       return (
// //         <div style={{ 
// //           display: 'flex', 
// //           justifyContent: 'center', 
// //           alignItems: 'center', 
// //           minHeight: '400px',
// //           padding: '20px',
// //           fontFamily: 'system-ui, -apple-system, sans-serif'
// //         }}>
// //           <div style={{
// //             backgroundColor: 'white',
// //             borderRadius: '8px',
// //             padding: '32px',
// //             maxWidth: '500px',
// //             textAlign: 'center',
// //             border: '1px solid #e5e7eb',
// //             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
// //           }}>
// //             <h2 style={{ color: '#dc2626', marginBottom: '16px' }}>
// //               Something went wrong
// //             </h2>
// //             <p style={{ color: '#4b5563', marginBottom: '24px' }}>
// //               The trigonometry visualization encountered an error. Please refresh the page.
// //             </p>
// //             <button 
// //               onClick={() => window.location.reload()}
// //               style={{
// //                 backgroundColor: '#3b82f6',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '6px',
// //                 padding: '12px 24px',
// //                 cursor: 'pointer'
// //               }}
// //             >
// //               Refresh Page
// //             </button>
// //           </div>
// //         </div>
// //       );
// //     }
// //     return this.props.children;
// //   }
// // }

// // // Utility Functions
// // const getExplanation = (func, quadrant) => {
// //   const { coordinates, signs } = QUADRANT_DATA[quadrant];
// //   const { x: xSign, y: ySign } = coordinates;
// //   const funcSign = signs[func];
  
// //   const explanations = {
// //     sin: `sin θ = y/r. Since y is ${ySign === '+' ? 'positive' : 'negative'} and r is always positive, sin θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     cos: `cos θ = x/r. Since x is ${xSign === '+' ? 'positive' : 'negative'} and r is always positive, cos θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     tan: `tan θ = y/x. Since y is ${ySign === '+' ? 'positive' : 'negative'} and x is ${xSign === '+' ? 'positive' : 'negative'}, tan θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     csc: `csc θ = r/y = 1/sin θ. Since r is always positive and y is ${ySign === '+' ? 'positive' : 'negative'}, csc θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     sec: `sec θ = r/x = 1/cos θ. Since r is always positive and x is ${xSign === '+' ? 'positive' : 'negative'}, sec θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     cot: `cot θ = x/y. Since x is ${xSign === '+' ? 'positive' : 'negative'} and y is ${ySign === '+' ? 'positive' : 'negative'}, cot θ is ${funcSign === '+' ? 'positive' : 'negative'}.`
// //   };
  
// //   return explanations[func] || 'Explanation not available';
// // };

// // const getSignStyle = (sign) => ({
// //   color: sign === '+' ? '#22c55e' : '#ef4444',
// //   fontWeight: 'bold'
// // });

// // const getCirclePoint = (quadrant, center, radius) => {
// //   const angles = { 1: Math.PI / 4, 2: 3 * Math.PI / 4, 3: 5 * Math.PI / 4, 4: 7 * Math.PI / 4 };
// //   const angle = angles[quadrant];
  
// //   return {
// //     x: center + radius * Math.cos(angle),
// //     y: center - radius * Math.sin(angle)
// //   };
// // };

// // // Custom Hooks
// // const useTrigonometry = ({ initialQuadrant = 1, initialFunction = 'sin', functions = FUNCTIONS } = {}) => {
// //   const [selectedQuadrant, setSelectedQuadrant] = useState(initialQuadrant);
// //   const [selectedFunction, setSelectedFunction] = useState(
// //     functions.includes(initialFunction) ? initialFunction : functions[0]
// //   );
// //   const [showExplanation, setShowExplanation] = useState(true);

// //   const handleQuadrantSelect = useCallback((quadrant) => {
// //     if ([1, 2, 3, 4].includes(quadrant)) {
// //       setSelectedQuadrant(quadrant);
// //     }
// //   }, []);

// //   const handleFunctionSelect = useCallback((func) => {
// //     if (functions.includes(func)) {
// //       setSelectedFunction(func);
// //     }
// //   }, [functions]);

// //   const currentQuadrantData = useMemo(() => 
// //     QUADRANT_DATA[selectedQuadrant], 
// //     [selectedQuadrant]
// //   );

// //   const currentFunctionSign = useMemo(() => 
// //     currentQuadrantData?.signs[selectedFunction] || '+',
// //     [currentQuadrantData, selectedFunction]
// //   );

// //   return {
// //     selectedQuadrant,
// //     selectedFunction,
// //     showExplanation,
// //     currentQuadrantData,
// //     currentFunctionSign,
// //     handleQuadrantSelect,
// //     handleFunctionSelect,
// //     toggleExplanation: () => setShowExplanation(prev => !prev)
// //   };
// // };

// // const useKeyboardNavigation = ({ onQuadrantSelect, onFunctionSelect, functions = FUNCTIONS }) => {
// //   useEffect(() => {
// //     const handleKeyPress = (event) => {
// //       switch (event.key) {
// //         case '1':
// //         case '2':
// //         case '3':
// //         case '4':
// //           event.preventDefault();
// //           onQuadrantSelect(parseInt(event.key));
// //           break;
// //         case 'ArrowLeft':
// //         case 'ArrowRight':
// //           event.preventDefault();
// //           const currentIndex = functions.findIndex(f => f === event.target.dataset?.function);
// //           if (currentIndex >= 0) {
// //             const newIndex = event.key === 'ArrowLeft' 
// //               ? (currentIndex - 1 + functions.length) % functions.length
// //               : (currentIndex + 1) % functions.length;
// //             onFunctionSelect(functions[newIndex]);
// //           }
// //           break;
// //       }
// //     };

// //     document.addEventListener('keydown', handleKeyPress);
// //     return () => document.removeEventListener('keydown', handleKeyPress);
// //   }, [onQuadrantSelect, onFunctionSelect, functions]);
// // };

// // // Components
// // const QuadrantSelector = memo(({ selectedQuadrant, onQuadrantSelect }) => {
// //   return (
// //     <div style={{ 
// //       display: 'grid', 
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
// //       gap: '10px', 
// //       marginBottom: '20px' 
// //     }}>
// //       {[1, 2, 3, 4].map(q => (
// //         <button
// //           key={q}
// //           onClick={() => onQuadrantSelect(q)}
// //           onKeyDown={(e) => e.key === 'Enter' && onQuadrantSelect(q)}
// //           style={{
// //             padding: '12px',
// //             border: selectedQuadrant === q ? `2px solid ${QUADRANT_COLORS[q]}` : '1px solid #ccc',
// //             backgroundColor: selectedQuadrant === q ? QUADRANT_COLORS[q] : 'white',
// //             color: selectedQuadrant === q ? 'white' : '#333',
// //             borderRadius: '8px',
// //             cursor: 'pointer',
// //             fontSize: '14px',
// //             fontWeight: 'bold',
// //             transition: 'all 0.2s ease'
// //           }}
// //           aria-pressed={selectedQuadrant === q}
// //           aria-label={`Select quadrant ${q}: ${QUADRANT_DATA[q].angles.degrees}`}
// //         >
// //           Q{q}: {QUADRANT_DATA[q].angles.degrees}<br/>
// //           <span style={{ fontSize: '12px', opacity: '0.9' }}>({QUADRANT_DATA[q].angles.radians})</span>
// //         </button>
// //       ))}
// //     </div>
// //   );
// // });
// // QuadrantSelector.displayName = 'QuadrantSelector';

// // const UnitCircle = memo(({ selectedQuadrant, size = 320 }) => {
// //   const center = size / 2;
// //   const radius = (size - 40) / 2;
// //   const point = getCirclePoint(selectedQuadrant, center, radius);
// //   const selectedColor = QUADRANT_COLORS[selectedQuadrant];

// //   const quadrantPaths = [
// //     { quadrant: 1, d: `M ${center} ${center} L ${center} ${center - radius} A ${radius} ${radius} 0 0 1 ${center + radius} ${center} Z` },
// //     { quadrant: 2, d: `M ${center} ${center} L ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center - radius} Z` },
// //     { quadrant: 3, d: `M ${center} ${center} L ${center} ${center + radius} A ${radius} ${radius} 0 0 1 ${center - radius} ${center} Z` },
// //     { quadrant: 4, d: `M ${center} ${center} L ${center + radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center + radius} Z` }
// //   ];

// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
// //       <svg 
// //         width={size} 
// //         height={size} 
// //         viewBox={`0 0 ${size} ${size}`}
// //         role="img"
// //         aria-label={`Unit circle showing quadrant ${selectedQuadrant}`}
// //         style={{ border: '1px solid #ddd', maxWidth: '100%', height: 'auto' }}
// //       >
// //         <title>Unit Circle - Quadrant {selectedQuadrant}</title>
        
// //         <circle cx={center} cy={center} r={radius} fill="none" stroke="#333" strokeWidth="2" />
        
// //         <line x1={center} y1="20" x2={center} y2={size - 20} stroke="#666" strokeWidth="2" />
// //         <line x1="20" y1={center} x2={size - 20} y2={center} stroke="#666" strokeWidth="2" />
        
// //         {quadrantPaths.map(({ quadrant, d }) => (
// //           <path
// //             key={quadrant}
// //             d={d}
// //             fill={selectedQuadrant === quadrant ? `${QUADRANT_COLORS[quadrant]}20` : 'rgba(200, 200, 200, 0.1)'}
// //             stroke={selectedQuadrant === quadrant ? QUADRANT_COLORS[quadrant] : '#ccc'}
// //             strokeWidth={selectedQuadrant === quadrant ? '2' : '1'}
// //           />
// //         ))}
        
// //         <g>
// //           <line x1={center} y1={center} x2={point.x} y2={point.y} stroke={selectedColor} strokeWidth="3" />
// //           <circle cx={point.x} cy={point.y} r="4" fill={selectedColor} />
// //           <line x1={point.x} y1={point.y} x2={point.x} y2={center} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
// //           <line x1={point.x} y1={point.y} x2={center} y2={point.y} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
          
// //           <text x={point.x + 10} y={point.y - 5} fontSize="12" fontWeight="bold" fill={selectedColor}>(x, y)</text>
// //           <text x={point.x/2 + center/2} y={point.y/2 + center/2 + 5} fontSize="12" fontWeight="bold" fill={selectedColor}>r</text>
// //         </g>
        
// //         <text x={size - 15} y={center - 5} fontSize="12" fill="#666">+x</text>
// //         <text x={center + 5} y="15" fontSize="12" fill="#666">+y</text>
// //         <text x="5" y={center - 5} fontSize="12" fill="#666">-x</text>
// //         <text x={center + 5} y={size - 5} fontSize="12" fill="#666">-y</text>
        
// //         <text x={center + radius/2} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">I</text>
// //         <text x={center - radius/2 - 10} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">II</text>
// //         <text x={center - radius/2 - 10} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">III</text>
// //         <text x={center + radius/2} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">IV</text>
// //       </svg>
// //     </div>
// //   );
// // });
// // UnitCircle.displayName = 'UnitCircle';

// // const FunctionSelector = memo(({ selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
// //   return (
// //     <div style={{ 
// //       display: 'grid', 
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
// //       gap: '8px', 
// //       marginBottom: '20px' 
// //     }}>
// //       {functions.map(func => (
// //         <button
// //           key={func}
// //           onClick={() => onFunctionSelect(func)}
// //           data-function={func}
// //           style={{
// //             padding: '12px 8px',
// //             border: selectedFunction === func ? '2px solid #333' : '1px solid #ccc',
// //             backgroundColor: selectedFunction === func ? '#333' : 'white',
// //             color: selectedFunction === func ? 'white' : '#333',
// //             borderRadius: '6px',
// //             cursor: 'pointer',
// //             fontSize: '14px',
// //             fontWeight: 'bold',
// //             transition: 'all 0.2s ease'
// //           }}
// //           aria-pressed={selectedFunction === func}
// //           aria-label={`Select ${func} function`}
// //         >
// //           {func}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // });
// // FunctionSelector.displayName = 'FunctionSelector';

// // const CoordinateInfo = memo(({ quadrant, coordinates, angles }) => {
// //   return (
// //     <div style={{ 
// //       padding: '15px', 
// //       backgroundColor: '#f8f9fa', 
// //       borderRadius: '8px',
// //       border: '1px solid #ddd',
// //       marginBottom: '20px'
// //     }}>
// //       <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
// //         Quadrant {quadrant} Coordinates
// //       </h4>
// //       <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
// //         <div><strong>x-coordinate:</strong> <span style={getSignStyle(coordinates.x)}>{coordinates.x}</span></div>
// //         <div><strong>y-coordinate:</strong> <span style={getSignStyle(coordinates.y)}>{coordinates.y}</span></div>
// //         <div><strong>radius (r):</strong> <span style={{ color: '#22c55e', fontWeight: 'bold' }}>always +</span></div>
// //         <div><strong>Reference angle:</strong> {angles.degrees} ({angles.radians})</div>
// //       </div>
// //     </div>
// //   );
// // });
// // CoordinateInfo.displayName = 'CoordinateInfo';

// // const ExplanationPanel = memo(({ selectedFunction, selectedQuadrant, currentQuadrantData, currentFunctionSign, showExplanation }) => {
// //   return (
// //     <div style={{ 
// //       border: '1px solid #ddd', 
// //       borderRadius: '8px', 
// //       overflow: 'hidden',
// //       backgroundColor: 'white',
// //       marginBottom: '20px'
// //     }}>
// //       <div style={{ 
// //         backgroundColor: QUADRANT_COLORS[selectedQuadrant], 
// //         color: 'white',
// //         padding: '15px', 
// //         textAlign: 'center'
// //       }}>
// //         <h3 style={{ margin: '0', fontSize: '18px' }}>
// //           {selectedFunction}(θ) in Quadrant {selectedQuadrant}
// //         </h3>
// //       </div>
      
// //       <div style={{ padding: '20px' }}>
// //         <div style={{ textAlign: 'center', marginBottom: '20px' }}>
// //           <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
// //             Sign: <span style={{ fontSize: '32px', ...getSignStyle(currentFunctionSign) }}>
// //               {currentFunctionSign}
// //             </span>
// //           </div>
// //         </div>
        
// //         {showExplanation && (
// //           <div style={{ 
// //             backgroundColor: '#f8f9fa', 
// //             padding: '15px', 
// //             borderRadius: '6px',
// //             fontSize: '14px',
// //             lineHeight: '1.6'
// //           }}>
// //             <strong>Mathematical Reasoning:</strong><br/>
// //             {getExplanation(selectedFunction, selectedQuadrant)}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });
// // ExplanationPanel.displayName = 'ExplanationPanel';

// // const FunctionSummary = memo(({ selectedQuadrant, selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
// //   return (
// //     <div style={{ 
// //       border: '1px solid #ddd', 
// //       borderRadius: '8px', 
// //       backgroundColor: 'white'
// //     }}>
// //       <div style={{ 
// //         backgroundColor: '#f8f9fa', 
// //         padding: '12px', 
// //         borderBottom: '1px solid #ddd'
// //       }}>
// //         <h4 style={{ margin: '0', fontSize: '16px' }}>
// //           All Functions in Quadrant {selectedQuadrant}
// //         </h4>
// //       </div>
// //       <div style={{ padding: '15px' }}>
// //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '10px' }}>
// //           {functions.map(func => (
// //             <div
// //               key={func}
// //               onClick={() => onFunctionSelect(func)}
// //               style={{
// //                 padding: '10px',
// //                 textAlign: 'center',
// //                 border: selectedFunction === func ? '2px solid #333' : '1px solid #ddd',
// //                 borderRadius: '6px',
// //                 cursor: 'pointer',
// //                 backgroundColor: selectedFunction === func ? '#f8f9fa' : 'white',
// //                 transition: 'all 0.2s ease'
// //               }}
// //               role="button"
// //               tabIndex={0}
// //               onKeyDown={(e) => e.key === 'Enter' && onFunctionSelect(func)}
// //               aria-label={`${func} function: ${QUADRANT_DATA[selectedQuadrant].signs[func]}`}
// //             >
// //               <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{func}</div>
// //               <div style={{ fontSize: '18px', ...getSignStyle(QUADRANT_DATA[selectedQuadrant].signs[func]) }}>
// //                 {QUADRANT_DATA[selectedQuadrant].signs[func]}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // });
// // FunctionSummary.displayName = 'FunctionSummary';

// // const MemoryAid = memo(() => {
// //   return (
// //     <div style={{ 
// //       marginTop: '30px', 
// //       padding: '20px', 
// //       backgroundColor: '#f8f9fa', 
// //       borderRadius: '8px',
// //       border: '1px solid #ddd'
// //     }}>
// //       <h4 style={{ margin: '0 0 15px 0', color: '#333' }}>Key Concepts</h4>
// //       <div style={{ 
// //         display: 'grid', 
// //         gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
// //         gap: '15px', 
// //         fontSize: '14px' 
// //       }}>
// //         <div>
// //           <strong>Fundamental Definitions:</strong><br/>
// //           • sin θ = y/r, cos θ = x/r, tan θ = y/x<br/>
// //           • csc θ = r/y, sec θ = r/x, cot θ = x/y
// //         </div>
// //         <div>
// //           <strong>Memory Aid &ldquo;ASTC&rdquo;:</strong><br/>
// //           • Quadrant I: <strong>A</strong>ll positive<br/>
// //           • Quadrant II: <strong>S</strong>ine positive<br/>
// //           • Quadrant III: <strong>T</strong>angent positive<br/>
// //           • Quadrant IV: <strong>C</strong>osine positive
// //         </div>
// //       </div>
// //     </div>
// //   );
// // });
// // MemoryAid.displayName = 'MemoryAid';

// // // Main App Component
// // const TrigonometryApp = ({ functions = FUNCTIONS }) => {
// //   const {
// //     selectedQuadrant,
// //     selectedFunction,
// //     showExplanation,
// //     currentQuadrantData,
// //     currentFunctionSign,
// //     handleQuadrantSelect,
// //     handleFunctionSelect,
// //     toggleExplanation
// //   } = useTrigonometry({ 
// //     initialFunction: functions[0],
// //     functions: functions
// //   });

// //   useKeyboardNavigation({ 
// //     onQuadrantSelect: handleQuadrantSelect, 
// //     onFunctionSelect: handleFunctionSelect,
// //     functions: functions
// //   });

// //   return (
// //     <div style={{ 
// //       fontFamily: 'system-ui, -apple-system, sans-serif', 
// //       padding: '20px', 
// //       maxWidth: '1200px', 
// //       margin: '0 auto',
// //       minHeight: '100vh'
// //     }}>
// //       <header style={{ textAlign: 'center', marginBottom: '30px' }}>
// //         <h1 style={{ 
// //           color: '#1f2937', 
// //           fontSize: 'clamp(24px, 4vw, 32px)',
// //           fontWeight: 'bold',
// //           margin: '0 0 10px 0'
// //         }}>
// //           Trigonometric Functions Signs
// //         </h1>
// //         <p style={{ 
// //           color: '#6b7280', 
// //           fontSize: '16px',
// //           margin: '0 0 20px 0'
// //         }}>
// //           Interactive visualization showing mathematical reasoning behind function signs
// //         </p>
        
// //         <button
// //           onClick={toggleExplanation}
// //           style={{
// //             backgroundColor: showExplanation ? '#64748b' : '#1e293b',
// //             color: 'white',
// //             border: 'none',
// //             borderRadius: '6px',
// //             padding: '8px 16px',
// //             fontSize: '14px',
// //             cursor: 'pointer',
// //             transition: 'background-color 0.2s'
// //           }}
// //           aria-label={showExplanation ? 'Hide explanations' : 'Show explanations'}
// //         >
// //           {showExplanation ? 'Hide' : 'Show'} Explanations
// //         </button>
// //       </header>
      
// //       <main>
// //         <div style={{ 
// //           display: 'grid', 
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
// //           gap: '30px',
// //           alignItems: 'start'
// //         }}>
// //           <section aria-label="Unit circle and controls">
// //             <QuadrantSelector 
// //               selectedQuadrant={selectedQuadrant} 
// //               onQuadrantSelect={handleQuadrantSelect} 
// //             />
            
// //             <UnitCircle 
// //               selectedQuadrant={selectedQuadrant}
// //             />
            
// //             <CoordinateInfo
// //               quadrant={selectedQuadrant}
// //               coordinates={currentQuadrantData.coordinates}
// //               angles={currentQuadrantData.angles}
// //             />
// //           </section>

// //           <section aria-label="Function analysis">
// //             <FunctionSelector 
// //               selectedFunction={selectedFunction}
// //               onFunctionSelect={handleFunctionSelect}
// //               functions={functions}
// //             />

// //             <ExplanationPanel
// //               selectedFunction={selectedFunction}
// //               selectedQuadrant={selectedQuadrant}
// //               currentQuadrantData={currentQuadrantData}
// //               currentFunctionSign={currentFunctionSign}
// //               showExplanation={showExplanation}
// //             />

// //             <FunctionSummary
// //               selectedQuadrant={selectedQuadrant}
// //               selectedFunction={selectedFunction}
// //               onFunctionSelect={handleFunctionSelect}
// //               functions={functions}
// //             />
// //           </section>
// //         </div>

// //         <MemoryAid />
// //       </main>

// //       <footer style={{ 
// //         marginTop: '40px', 
// //         padding: '20px', 
// //         backgroundColor: '#f3f4f6',
// //         borderRadius: '8px',
// //         fontSize: '14px',
// //         color: '#4b5563'
// //       }}>
// //         <h4 style={{ margin: '0 0 10px 0' }}>Keyboard Navigation:</h4>
// //         <p style={{ margin: '0' }}>
// //           Press 1-4 to select quadrants • Use arrow keys to navigate functions • All interactive elements support keyboard and screen readers
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // };
// // TrigonometryApp.displayName = 'TrigonometryApp';

// // // Export with Error Boundary
// // const Quadrants = ({ functions = FUNCTIONS }) => (
// //   <ErrorBoundary>
// //     <TrigonometryApp functions={functions} />
// //   </ErrorBoundary>
// // );
// // Quadrants.displayName = 'Quadrants';

// // export default Quadrants;


// // import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';

// // // Constants
// // const FUNCTIONS = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];
// // const QUADRANT_COLORS = {
// //   1: '#3b82f6', 2: '#22c55e', 3: '#eab308', 4: '#8b5cf6'
// // };

// // const QUADRANT_DATA = {
// //   1: {
// //     coordinates: { x: '+', y: '+' },
// //     angles: { degrees: '0° to 90°', radians: '0 to π/2' },
// //     signs: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' }
// //   },
// //   2: {
// //     coordinates: { x: '−', y: '+' },
// //     angles: { degrees: '90° to 180°', radians: 'π/2 to π' },
// //     signs: { sin: '+', cos: '−', tan: '−', csc: '+', sec: '−', cot: '−' }
// //   },
// //   3: {
// //     coordinates: { x: '−', y: '−' },
// //     angles: { degrees: '180° to 270°', radians: 'π to 3π/2' },
// //     signs: { sin: '−', cos: '−', tan: '+', csc: '−', sec: '−', cot: '+' }
// //   },
// //   4: {
// //     coordinates: { x: '+', y: '−' },
// //     angles: { degrees: '270° to 360°', radians: '3π/2 to 2π' },
// //     signs: { sin: '−', cos: '+', tan: '−', csc: '−', sec: '+', cot: '−' }
// //   }
// // };

// // // Error Boundary
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }

// //   static getDerivedStateFromError(error) {
// //     return { hasError: true };
// //   }

// //   componentDidCatch(error, errorInfo) {
// //     console.error('Trigonometry App Error:', error, errorInfo);
// //   }

// //   render() {
// //     if (this.state.hasError) {
// //       return (
// //         <div style={{ 
// //           display: 'flex', 
// //           justifyContent: 'center', 
// //           alignItems: 'center', 
// //           minHeight: '400px',
// //           padding: '20px',
// //           fontFamily: 'system-ui, -apple-system, sans-serif'
// //         }}>
// //           <div style={{
// //             backgroundColor: 'white',
// //             borderRadius: '8px',
// //             padding: '32px',
// //             maxWidth: '500px',
// //             textAlign: 'center',
// //             border: '1px solid #e5e7eb',
// //             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
// //           }}>
// //             <h2 style={{ color: '#dc2626', marginBottom: '16px' }}>
// //               Something went wrong
// //             </h2>
// //             <p style={{ color: '#4b5563', marginBottom: '24px' }}>
// //               The trigonometry visualization encountered an error. Please refresh the page.
// //             </p>
// //             <button 
// //               onClick={() => window.location.reload()}
// //               style={{
// //                 backgroundColor: '#3b82f6',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '6px',
// //                 padding: '12px 24px',
// //                 cursor: 'pointer'
// //               }}
// //             >
// //               Refresh Page
// //             </button>
// //           </div>
// //         </div>
// //       );
// //     }
// //     return this.props.children;
// //   }
// // }

// // // Utility Functions
// // const getExplanation = (func, quadrant) => {
// //   const { coordinates, signs } = QUADRANT_DATA[quadrant];
// //   const { x: xSign, y: ySign } = coordinates;
// //   const funcSign = signs[func];
  
// //   const explanations = {
// //     sin: `sin θ = y/r. Since y is ${ySign === '+' ? 'positive' : 'negative'} and r is always positive, sin θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     cos: `cos θ = x/r. Since x is ${xSign === '+' ? 'positive' : 'negative'} and r is always positive, cos θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     tan: `tan θ = y/x. Since y is ${ySign === '+' ? 'positive' : 'negative'} and x is ${xSign === '+' ? 'positive' : 'negative'}, tan θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     csc: `csc θ = r/y = 1/sin θ. Since r is always positive and y is ${ySign === '+' ? 'positive' : 'negative'}, csc θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     sec: `sec θ = r/x = 1/cos θ. Since r is always positive and x is ${xSign === '+' ? 'positive' : 'negative'}, sec θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
// //     cot: `cot θ = x/y. Since x is ${xSign === '+' ? 'positive' : 'negative'} and y is ${ySign === '+' ? 'positive' : 'negative'}, cot θ is ${funcSign === '+' ? 'positive' : 'negative'}.`
// //   };
  
// //   return explanations[func] || 'Explanation not available';
// // };

// // const getSignStyle = (sign) => ({
// //   color: sign === '+' ? '#22c55e' : '#ef4444',
// //   fontWeight: 'bold'
// // });

// // const getCirclePoint = (quadrant, center, radius) => {
// //   const angles = { 1: Math.PI / 4, 2: 3 * Math.PI / 4, 3: 5 * Math.PI / 4, 4: 7 * Math.PI / 4 };
// //   const angle = angles[quadrant];
  
// //   return {
// //     x: center + radius * Math.cos(angle),
// //     y: center - radius * Math.sin(angle)
// //   };
// // };

// // // Custom Hooks
// // const useTrigonometry = ({ initialQuadrant = 1, initialFunction = 'sin', functions = FUNCTIONS } = {}) => {
// //   const [selectedQuadrant, setSelectedQuadrant] = useState(initialQuadrant);
// //   const [selectedFunction, setSelectedFunction] = useState(
// //     functions.includes(initialFunction) ? initialFunction : functions[0]
// //   );
// //   const [showExplanation, setShowExplanation] = useState(true);

// //   const handleQuadrantSelect = useCallback((quadrant) => {
// //     if ([1, 2, 3, 4].includes(quadrant)) {
// //       setSelectedQuadrant(quadrant);
// //     }
// //   }, []);

// //   const handleFunctionSelect = useCallback((func) => {
// //     if (functions.includes(func)) {
// //       setSelectedFunction(func);
// //     }
// //   }, [functions]);

// //   const currentQuadrantData = useMemo(() => 
// //     QUADRANT_DATA[selectedQuadrant], 
// //     [selectedQuadrant]
// //   );

// //   const currentFunctionSign = useMemo(() => 
// //     currentQuadrantData?.signs[selectedFunction] || '+',
// //     [currentQuadrantData, selectedFunction]
// //   );

// //   return {
// //     selectedQuadrant,
// //     selectedFunction,
// //     showExplanation,
// //     currentQuadrantData,
// //     currentFunctionSign,
// //     handleQuadrantSelect,
// //     handleFunctionSelect,
// //     toggleExplanation: () => setShowExplanation(prev => !prev)
// //   };
// // };

// // const useKeyboardNavigation = ({ onQuadrantSelect, onFunctionSelect, functions = FUNCTIONS }) => {
// //   useEffect(() => {
// //     const handleKeyPress = (event) => {
// //       switch (event.key) {
// //         case '1':
// //         case '2':
// //         case '3':
// //         case '4':
// //           event.preventDefault();
// //           onQuadrantSelect(parseInt(event.key));
// //           break;
// //         case 'ArrowLeft':
// //         case 'ArrowRight':
// //           event.preventDefault();
// //           const currentIndex = functions.findIndex(f => f === event.target.dataset?.function);
// //           if (currentIndex >= 0) {
// //             const newIndex = event.key === 'ArrowLeft' 
// //               ? (currentIndex - 1 + functions.length) % functions.length
// //               : (currentIndex + 1) % functions.length;
// //             onFunctionSelect(functions[newIndex]);
// //           }
// //           break;
// //       }
// //     };

// //     document.addEventListener('keydown', handleKeyPress);
// //     return () => document.removeEventListener('keydown', handleKeyPress);
// //   }, [onQuadrantSelect, onFunctionSelect, functions]);
// // };

// // // Components
// // const QuadrantSelector = memo(({ selectedQuadrant, onQuadrantSelect }) => {
// //   return (
// //     <div style={{ 
// //       display: 'grid', 
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
// //       gap: '10px', 
// //       marginBottom: '20px' 
// //     }}>
// //       {[1, 2, 3, 4].map(q => (
// //         <button
// //           key={q}
// //           onClick={() => onQuadrantSelect(q)}
// //           onKeyDown={(e) => e.key === 'Enter' && onQuadrantSelect(q)}
// //           style={{
// //             padding: '12px',
// //             border: selectedQuadrant === q ? `2px solid ${QUADRANT_COLORS[q]}` : '1px solid #ccc',
// //             backgroundColor: selectedQuadrant === q ? QUADRANT_COLORS[q] : 'white',
// //             color: selectedQuadrant === q ? 'white' : '#333',
// //             borderRadius: '8px',
// //             cursor: 'pointer',
// //             fontSize: '14px',
// //             fontWeight: 'bold',
// //             transition: 'all 0.2s ease'
// //           }}
// //           aria-pressed={selectedQuadrant === q}
// //           aria-label={`Select quadrant ${q}: ${QUADRANT_DATA[q].angles.degrees}`}
// //         >
// //           Q{q}: {QUADRANT_DATA[q].angles.degrees}<br/>
// //           <span style={{ fontSize: '12px', opacity: '0.9' }}>({QUADRANT_DATA[q].angles.radians})</span>
// //         </button>
// //       ))}
// //     </div>
// //   );
// // });
// // QuadrantSelector.displayName = 'QuadrantSelector';

// // const UnitCircle = memo(({ selectedQuadrant, size = 320 }) => {
// //   const center = size / 2;
// //   const radius = (size - 40) / 2;
// //   const point = getCirclePoint(selectedQuadrant, center, radius);
// //   const selectedColor = QUADRANT_COLORS[selectedQuadrant];

// //   const quadrantPaths = [
// //     { quadrant: 1, d: `M ${center} ${center} L ${center} ${center - radius} A ${radius} ${radius} 0 0 1 ${center + radius} ${center} Z` },
// //     { quadrant: 2, d: `M ${center} ${center} L ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center - radius} Z` },
// //     { quadrant: 3, d: `M ${center} ${center} L ${center} ${center + radius} A ${radius} ${radius} 0 0 1 ${center - radius} ${center} Z` },
// //     { quadrant: 4, d: `M ${center} ${center} L ${center + radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center + radius} Z` }
// //   ];

// //   return (
// //     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
// //       <svg 
// //         width={size} 
// //         height={size} 
// //         viewBox={`0 0 ${size} ${size}`}
// //         role="img"
// //         aria-label={`Unit circle showing quadrant ${selectedQuadrant}`}
// //         style={{ border: '1px solid #ddd', maxWidth: '100%', height: 'auto' }}
// //       >
// //         <title>Unit Circle - Quadrant {selectedQuadrant}</title>
        
// //         <circle cx={center} cy={center} r={radius} fill="none" stroke="#333" strokeWidth="2" />
        
// //         <line x1={center} y1="20" x2={center} y2={size - 20} stroke="#666" strokeWidth="2" />
// //         <line x1="20" y1={center} x2={size - 20} y2={center} stroke="#666" strokeWidth="2" />
        
// //         {quadrantPaths.map(({ quadrant, d }) => (
// //           <path
// //             key={quadrant}
// //             d={d}
// //             fill={selectedQuadrant === quadrant ? `${QUADRANT_COLORS[quadrant]}20` : 'rgba(200, 200, 200, 0.1)'}
// //             stroke={selectedQuadrant === quadrant ? QUADRANT_COLORS[quadrant] : '#ccc'}
// //             strokeWidth={selectedQuadrant === quadrant ? '2' : '1'}
// //           />
// //         ))}
        
// //         <g>
// //           <line x1={center} y1={center} x2={point.x} y2={point.y} stroke={selectedColor} strokeWidth="3" />
// //           <circle cx={point.x} cy={point.y} r="4" fill={selectedColor} />
// //           <line x1={point.x} y1={point.y} x2={point.x} y2={center} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
// //           <line x1={point.x} y1={point.y} x2={center} y2={point.y} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
          
// //           <text x={point.x + 10} y={point.y - 5} fontSize="12" fontWeight="bold" fill={selectedColor}>(x, y)</text>
// //           <text x={point.x/2 + center/2} y={point.y/2 + center/2 + 5} fontSize="12" fontWeight="bold" fill={selectedColor}>r</text>
// //         </g>
        
// //         <text x={size - 15} y={center - 5} fontSize="12" fill="#666">+x</text>
// //         <text x={center + 5} y="15" fontSize="12" fill="#666">+y</text>
// //         <text x="5" y={center - 5} fontSize="12" fill="#666">-x</text>
// //         <text x={center + 5} y={size - 5} fontSize="12" fill="#666">-y</text>
        
// //         <text x={center + radius/2} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">I</text>
// //         <text x={center - radius/2 - 10} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">II</text>
// //         <text x={center - radius/2 - 10} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">III</text>
// //         <text x={center + radius/2} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">IV</text>
// //       </svg>
// //     </div>
// //   );
// // });
// // UnitCircle.displayName = 'UnitCircle';

// // const FunctionSelector = memo(({ selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
// //   return (
// //     <div style={{ 
// //       display: 'grid', 
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
// //       gap: '8px', 
// //       marginBottom: '20px' 
// //     }}>
// //       {functions.map(func => (
// //         <button
// //           key={func}
// //           onClick={() => onFunctionSelect(func)}
// //           data-function={func}
// //           style={{
// //             padding: '12px 8px',
// //             border: selectedFunction === func ? '2px solid #333' : '1px solid #ccc',
// //             backgroundColor: selectedFunction === func ? '#333' : 'white',
// //             color: selectedFunction === func ? 'white' : '#333',
// //             borderRadius: '6px',
// //             cursor: 'pointer',
// //             fontSize: '14px',
// //             fontWeight: 'bold',
// //             transition: 'all 0.2s ease'
// //           }}
// //           aria-pressed={selectedFunction === func}
// //           aria-label={`Select ${func} function`}
// //         >
// //           {func}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // });
// // FunctionSelector.displayName = 'FunctionSelector';

// // const CoordinateInfo = memo(({ quadrant, coordinates, angles }) => {
// //   return (
// //     <div style={{ 
// //       padding: '15px', 
// //       backgroundColor: '#f8f9fa', 
// //       borderRadius: '8px',
// //       border: '1px solid #ddd',
// //       marginBottom: '20px'
// //     }}>
// //       <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
// //         Quadrant {quadrant} Coordinates
// //       </h4>
// //       <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
// //         <div><strong>x-coordinate:</strong> <span style={getSignStyle(coordinates.x)}>{coordinates.x}</span></div>
// //         <div><strong>y-coordinate:</strong> <span style={getSignStyle(coordinates.y)}>{coordinates.y}</span></div>
// //         <div><strong>radius (r):</strong> <span style={{ color: '#22c55e', fontWeight: 'bold' }}>always +</span></div>
// //         <div><strong>Reference angle:</strong> {angles.degrees} ({angles.radians})</div>
// //       </div>
// //     </div>
// //   );
// // });
// // CoordinateInfo.displayName = 'CoordinateInfo';

// // const ExplanationPanel = memo(({ selectedFunction, selectedQuadrant, currentQuadrantData, currentFunctionSign, showExplanation }) => {
// //   return (
// //     <div style={{ 
// //       border: '1px solid #ddd', 
// //       borderRadius: '8px', 
// //       overflow: 'hidden',
// //       backgroundColor: 'white',
// //       marginBottom: '20px'
// //     }}>
// //       <div style={{ 
// //         backgroundColor: QUADRANT_COLORS[selectedQuadrant], 
// //         color: 'white',
// //         padding: '15px', 
// //         textAlign: 'center'
// //       }}>
// //         <h3 style={{ margin: '0', fontSize: '18px' }}>
// //           {selectedFunction}(θ) in Quadrant {selectedQuadrant}
// //         </h3>
// //       </div>
      
// //       <div style={{ padding: '20px' }}>
// //         <div style={{ textAlign: 'center', marginBottom: '20px' }}>
// //           <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
// //             Sign: <span style={{ fontSize: '32px', ...getSignStyle(currentFunctionSign) }}>
// //               {currentFunctionSign}
// //             </span>
// //           </div>
// //         </div>
        
// //         {showExplanation && (
// //           <div style={{ 
// //             backgroundColor: '#f8f9fa', 
// //             padding: '15px', 
// //             borderRadius: '6px',
// //             fontSize: '14px',
// //             lineHeight: '1.6'
// //           }}>
// //             <strong>Mathematical Reasoning:</strong><br/>
// //             {getExplanation(selectedFunction, selectedQuadrant)}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });
// // ExplanationPanel.displayName = 'ExplanationPanel';

// // const FunctionSummary = memo(({ selectedQuadrant, selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
// //   return (
// //     <div style={{ 
// //       border: '1px solid #ddd', 
// //       borderRadius: '8px', 
// //       backgroundColor: 'white'
// //     }}>
// //       <div style={{ 
// //         backgroundColor: '#f8f9fa', 
// //         padding: '12px', 
// //         borderBottom: '1px solid #ddd'
// //       }}>
// //         <h4 style={{ margin: '0', fontSize: '16px' }}>
// //           All Functions in Quadrant {selectedQuadrant}
// //         </h4>
// //       </div>
// //       <div style={{ padding: '15px' }}>
// //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '10px' }}>
// //           {functions.map(func => (
// //             <div
// //               key={func}
// //               onClick={() => onFunctionSelect(func)}
// //               style={{
// //                 padding: '10px',
// //                 textAlign: 'center',
// //                 border: selectedFunction === func ? '2px solid #333' : '1px solid #ddd',
// //                 borderRadius: '6px',
// //                 cursor: 'pointer',
// //                 backgroundColor: selectedFunction === func ? '#f8f9fa' : 'white',
// //                 transition: 'all 0.2s ease'
// //               }}
// //               role="button"
// //               tabIndex={0}
// //               onKeyDown={(e) => e.key === 'Enter' && onFunctionSelect(func)}
// //               aria-label={`${func} function: ${QUADRANT_DATA[selectedQuadrant].signs[func]}`}
// //             >
// //               <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{func}</div>
// //               <div style={{ fontSize: '18px', ...getSignStyle(QUADRANT_DATA[selectedQuadrant].signs[func]) }}>
// //                 {QUADRANT_DATA[selectedQuadrant].signs[func]}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // });
// // FunctionSummary.displayName = 'FunctionSummary';

// // const MemoryAid = memo(() => {
// //   return (
// //     <div style={{ 
// //       marginTop: '30px', 
// //       padding: '20px', 
// //       backgroundColor: '#f8f9fa', 
// //       borderRadius: '8px',
// //       border: '1px solid #ddd'
// //     }}>
// //       <h4 style={{ margin: '0 0 15px 0', color: '#333' }}>Key Concepts</h4>
// //       <div style={{ 
// //         display: 'grid', 
// //         gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
// //         gap: '15px', 
// //         fontSize: '14px' 
// //       }}>
// //         <div>
// //           <strong>Fundamental Definitions:</strong><br/>
// //           • sin θ = y/r, cos θ = x/r, tan θ = y/x<br/>
// //           • csc θ = r/y, sec θ = r/x, cot θ = x/y
// //         </div>
// //         <div>
// //           <strong>Memory Aid &ldquo;ASTC&rdquo;:</strong><br/>
// //           • Quadrant I: <strong>A</strong>ll positive<br/>
// //           • Quadrant II: <strong>S</strong>ine positive<br/>
// //           • Quadrant III: <strong>T</strong>angent positive<br/>
// //           • Quadrant IV: <strong>C</strong>osine positive
// //         </div>
// //       </div>
// //     </div>
// //   );
// // });
// // MemoryAid.displayName = 'MemoryAid';

// // // Main App Component
// // const TrigonometryApp = ({ functions = FUNCTIONS }) => {
// //   const {
// //     selectedQuadrant,
// //     selectedFunction,
// //     showExplanation,
// //     currentQuadrantData,
// //     currentFunctionSign,
// //     handleQuadrantSelect,
// //     handleFunctionSelect,
// //     toggleExplanation
// //   } = useTrigonometry({ 
// //     initialFunction: functions[0],
// //     functions: functions
// //   });

// //   useKeyboardNavigation({ 
// //     onQuadrantSelect: handleQuadrantSelect, 
// //     onFunctionSelect: handleFunctionSelect,
// //     functions: functions
// //   });

// //   return (
// //     <div style={{ 
// //       fontFamily: 'system-ui, -apple-system, sans-serif', 
// //       padding: '20px', 
// //       maxWidth: '1200px', 
// //       margin: '0 auto',
// //       minHeight: '100vh'
// //     }}>
// //       {/* Moved navigation help to top */}
// //       {/* <div style={{ 
// //         padding: '12px 20px', 
// //         backgroundColor: '#e8f4fd',
// //         borderRadius: '8px',
// //         fontSize: '13px',
// //         color: '#1e40af',
// //         marginBottom: '20px',
// //         border: '1px solid #bfdbfe'
// //       }}>
// //         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
// //           <span><strong>Keyboard:</strong> Press 1-4 to select quadrants • Arrow keys for functions</span>
// //           <span><strong>Mouse:</strong> Click any element to interact</span>
// //           <span><strong>Accessibility:</strong> Full screen reader support</span>
// //           <span><strong>Visual:</strong> Color-coded quadrants • Real-time updates</span>
// //         </div>
// //       </div> */}

// //       <header style={{ marginBottom: '30px' }}>
// //         <h1 style={{ 
// //           color: '#1f2937', 
// //           fontSize: 'clamp(24px, 4vw, 32px)',
// //           fontWeight: 'bold',
// //           margin: '0 0 10px 0',
// //           textAlign: 'center'
// //         }}>
// //           Trigonometric Functions Signs
// //         </h1>
// //         <div style={{ 
// //           display: 'flex', 
// //           alignItems: 'center', 
// //           justifyContent: 'center',
// //           margin: '0',
// //           gap: '20px'
// //         }}>
// //           <button
// //             onClick={toggleExplanation}
// //             style={{
// //               backgroundColor: showExplanation ? '#64748b' : '#1e293b',
// //               color: 'white',
// //               border: 'none',
// //               borderRadius: '6px',
// //               padding: '8px 16px',
// //               fontSize: '14px',
// //               cursor: 'pointer',
// //               transition: 'background-color 0.2s'
// //             }}
// //             aria-label={showExplanation ? 'Hide explanations' : 'Show explanations'}
// //           >
// //             {showExplanation ? 'Hide' : 'Show'} Explanations
// //           </button>
// //           <div style={{ 
// //             padding: '10px 16px', 
// //             backgroundColor: '#f0f8ff',
// //             borderRadius: '6px',
// //             fontSize: '12px',
// //             color: '#1e40af',
// //             border: '1px solid #bfdbfe',
// //             display: 'flex',
// //             gap: '15px',
// //             flexWrap: 'wrap'
// //           }}>
// //               <span><strong>Keyboard:</strong> Press 1-4 to select quadrants • Arrow keys for functions</span>
// //           <span><strong>Mouse:</strong> Click any element to interact</span>
// //           <span><strong>Accessibility:</strong> Full screen reader support</span>
// //           <span><strong>Visual:</strong> Color-coded quadrants • Real-time updates</span>
// //             <span><strong>Keys:</strong> 1-4 for quadrants • Arrows for functions</span>
// //             <span><strong>Click:</strong> Any element to interact</span>
// //             <span><strong>Features:</strong> Color-coded • Real-time updates</span>
// //           </div>
// //           <p style={{ 
// //             color: '#6b7280', 
// //             fontSize: '16px',
// //             margin: '0'
// //           }}>
// //             Interactive visualization showing mathematical reasoning behind function signs
// //           </p>
// //         </div>
// //       </header>
      
// //       <main>
// //         <div style={{ 
// //           display: 'grid', 
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
// //           gap: '30px',
// //           alignItems: 'start'
// //         }}>
// //           <section aria-label="Unit circle and controls">
// //             <QuadrantSelector 
// //               selectedQuadrant={selectedQuadrant} 
// //               onQuadrantSelect={handleQuadrantSelect} 
// //             />
            
// //             <UnitCircle 
// //               selectedQuadrant={selectedQuadrant}
// //             />
            
// //             <CoordinateInfo
// //               quadrant={selectedQuadrant}
// //               coordinates={currentQuadrantData.coordinates}
// //               angles={currentQuadrantData.angles}
// //             />
// //           </section>

// //           <section aria-label="Function analysis">
// //             <FunctionSelector 
// //               selectedFunction={selectedFunction}
// //               onFunctionSelect={handleFunctionSelect}
// //               functions={functions}
// //             />

// //             <ExplanationPanel
// //               selectedFunction={selectedFunction}
// //               selectedQuadrant={selectedQuadrant}
// //               currentQuadrantData={currentQuadrantData}
// //               currentFunctionSign={currentFunctionSign}
// //               showExplanation={showExplanation}
// //             />

// //             <FunctionSummary
// //               selectedQuadrant={selectedQuadrant}
// //               selectedFunction={selectedFunction}
// //               onFunctionSelect={handleFunctionSelect}
// //               functions={functions}
// //             />
// //           </section>
// //         </div>

// //         <MemoryAid />
// //       </main>
// //     </div>
// //   );
// // };
// // TrigonometryApp.displayName = 'TrigonometryApp';

// // // Export with Error Boundary
// // const Quadrants = ({ functions = FUNCTIONS }) => (
// //   <ErrorBoundary>
// //     <TrigonometryApp functions={functions} />
// //   </ErrorBoundary>
// // );
// // Quadrants.displayName = 'Quadrants';

// // export default Quadrants;


// import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';

// // Constants
// const FUNCTIONS = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];
// const QUADRANT_COLORS = {
//   1: '#3b82f6', 2: '#22c55e', 3: '#eab308', 4: '#8b5cf6'
// };

// const QUADRANT_DATA = {
//   1: {
//     coordinates: { x: '+', y: '+' },
//     angles: { degrees: '0° to 90°', radians: '0 to π/2' },
//     signs: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' }
//   },
//   2: {
//     coordinates: { x: '−', y: '+' },
//     angles: { degrees: '90° to 180°', radians: 'π/2 to π' },
//     signs: { sin: '+', cos: '−', tan: '−', csc: '+', sec: '−', cot: '−' }
//   },
//   3: {
//     coordinates: { x: '−', y: '−' },
//     angles: { degrees: '180° to 270°', radians: 'π to 3π/2' },
//     signs: { sin: '−', cos: '−', tan: '+', csc: '−', sec: '−', cot: '+' }
//   },
//   4: {
//     coordinates: { x: '+', y: '−' },
//     angles: { degrees: '270° to 360°', radians: '3π/2 to 2π' },
//     signs: { sin: '−', cos: '+', tan: '−', csc: '−', sec: '+', cot: '−' }
//   }
// };

// // Error Boundary
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error('Trigonometry App Error:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div style={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center', 
//           minHeight: '400px',
//           padding: '20px',
//           fontFamily: 'system-ui, -apple-system, sans-serif'
//         }}>
//           <div style={{
//             backgroundColor: 'white',
//             borderRadius: '8px',
//             padding: '32px',
//             maxWidth: '500px',
//             textAlign: 'center',
//             border: '1px solid #e5e7eb',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
//           }}>
//             <h2 style={{ color: '#dc2626', marginBottom: '16px' }}>
//               Something went wrong
//             </h2>
//             <p style={{ color: '#4b5563', marginBottom: '24px' }}>
//               The trigonometry visualization encountered an error. Please refresh the page.
//             </p>
//             <button 
//               onClick={() => window.location.reload()}
//               style={{
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 padding: '12px 24px',
//                 cursor: 'pointer'
//               }}
//             >
//               Refresh Page
//             </button>
//           </div>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// // Utility Functions
// const getExplanation = (func, quadrant) => {
//   const { coordinates, signs } = QUADRANT_DATA[quadrant];
//   const { x: xSign, y: ySign } = coordinates;
//   const funcSign = signs[func];
  
//   const explanations = {
//     sin: `sin θ = y/r. Since y is ${ySign === '+' ? 'positive' : 'negative'} and r is always positive, sin θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
//     cos: `cos θ = x/r. Since x is ${xSign === '+' ? 'positive' : 'negative'} and r is always positive, cos θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
//     tan: `tan θ = y/x. Since y is ${ySign === '+' ? 'positive' : 'negative'} and x is ${xSign === '+' ? 'positive' : 'negative'}, tan θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
//     csc: `csc θ = r/y = 1/sin θ. Since r is always positive and y is ${ySign === '+' ? 'positive' : 'negative'}, csc θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
//     sec: `sec θ = r/x = 1/cos θ. Since r is always positive and x is ${xSign === '+' ? 'positive' : 'negative'}, sec θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
//     cot: `cot θ = x/y. Since x is ${xSign === '+' ? 'positive' : 'negative'} and y is ${ySign === '+' ? 'positive' : 'negative'}, cot θ is ${funcSign === '+' ? 'positive' : 'negative'}.`
//   };
  
//   return explanations[func] || 'Explanation not available';
// };

// const getSignStyle = (sign) => ({
//   color: sign === '+' ? '#22c55e' : '#ef4444',
//   fontWeight: 'bold'
// });

// const getCirclePoint = (quadrant, center, radius) => {
//   const angles = { 1: Math.PI / 4, 2: 3 * Math.PI / 4, 3: 5 * Math.PI / 4, 4: 7 * Math.PI / 4 };
//   const angle = angles[quadrant];
  
//   return {
//     x: center + radius * Math.cos(angle),
//     y: center - radius * Math.sin(angle)
//   };
// };

// // Custom Hooks
// const useTrigonometry = ({ initialQuadrant = 1, initialFunction = 'sin', functions = FUNCTIONS } = {}) => {
//   const [selectedQuadrant, setSelectedQuadrant] = useState(initialQuadrant);
//   const [selectedFunction, setSelectedFunction] = useState(
//     functions.includes(initialFunction) ? initialFunction : functions[0]
//   );
//   const [showExplanation, setShowExplanation] = useState(true);

//   const handleQuadrantSelect = useCallback((quadrant) => {
//     if ([1, 2, 3, 4].includes(quadrant)) {
//       setSelectedQuadrant(quadrant);
//     }
//   }, []);

//   const handleFunctionSelect = useCallback((func) => {
//     if (functions.includes(func)) {
//       setSelectedFunction(func);
//     }
//   }, [functions]);

//   const currentQuadrantData = useMemo(() => 
//     QUADRANT_DATA[selectedQuadrant], 
//     [selectedQuadrant]
//   );

//   const currentFunctionSign = useMemo(() => 
//     currentQuadrantData?.signs[selectedFunction] || '+',
//     [currentQuadrantData, selectedFunction]
//   );

//   return {
//     selectedQuadrant,
//     selectedFunction,
//     showExplanation,
//     currentQuadrantData,
//     currentFunctionSign,
//     handleQuadrantSelect,
//     handleFunctionSelect,
//     toggleExplanation: () => setShowExplanation(prev => !prev)
//   };
// };

// const useKeyboardNavigation = ({ onQuadrantSelect, onFunctionSelect, functions = FUNCTIONS }) => {
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       switch (event.key) {
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//           event.preventDefault();
//           onQuadrantSelect(parseInt(event.key));
//           break;
//         case 'ArrowLeft':
//         case 'ArrowRight':
//           event.preventDefault();
//           const currentIndex = functions.findIndex(f => f === event.target.dataset?.function);
//           if (currentIndex >= 0) {
//             const newIndex = event.key === 'ArrowLeft' 
//               ? (currentIndex - 1 + functions.length) % functions.length
//               : (currentIndex + 1) % functions.length;
//             onFunctionSelect(functions[newIndex]);
//           }
//           break;
//       }
//     };

//     document.addEventListener('keydown', handleKeyPress);
//     return () => document.removeEventListener('keydown', handleKeyPress);
//   }, [onQuadrantSelect, onFunctionSelect, functions]);
// };

// // Components
// const QuadrantSelector = memo(({ selectedQuadrant, onQuadrantSelect }) => {
//   return (
//     <div style={{ 
//       display: 'grid', 
//       gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
//       gap: '10px', 
//       marginBottom: '20px' 
//     }}>
//       {[1, 2, 3, 4].map(q => (
//         <button
//           key={q}
//           onClick={() => onQuadrantSelect(q)}
//           onKeyDown={(e) => e.key === 'Enter' && onQuadrantSelect(q)}
//           style={{
//             padding: '12px',
//             border: selectedQuadrant === q ? `2px solid ${QUADRANT_COLORS[q]}` : '1px solid #ccc',
//             backgroundColor: selectedQuadrant === q ? QUADRANT_COLORS[q] : 'white',
//             color: selectedQuadrant === q ? 'white' : '#333',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             fontWeight: 'bold',
//             transition: 'all 0.2s ease'
//           }}
//           aria-pressed={selectedQuadrant === q}
//           aria-label={`Select quadrant ${q}: ${QUADRANT_DATA[q].angles.degrees}`}
//         >
//           Q{q}: {QUADRANT_DATA[q].angles.degrees}<br/>
//           <span style={{ fontSize: '12px', opacity: '0.9' }}>({QUADRANT_DATA[q].angles.radians})</span>
//         </button>
//       ))}
//     </div>
//   );
// });
// QuadrantSelector.displayName = 'QuadrantSelector';

// const UnitCircle = memo(({ selectedQuadrant, size = 320 }) => {
//   const center = size / 2;
//   const radius = (size - 40) / 2;
//   const point = getCirclePoint(selectedQuadrant, center, radius);
//   const selectedColor = QUADRANT_COLORS[selectedQuadrant];

//   const quadrantPaths = [
//     { quadrant: 1, d: `M ${center} ${center} L ${center} ${center - radius} A ${radius} ${radius} 0 0 1 ${center + radius} ${center} Z` },
//     { quadrant: 2, d: `M ${center} ${center} L ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center - radius} Z` },
//     { quadrant: 3, d: `M ${center} ${center} L ${center} ${center + radius} A ${radius} ${radius} 0 0 1 ${center - radius} ${center} Z` },
//     { quadrant: 4, d: `M ${center} ${center} L ${center + radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center + radius} Z` }
//   ];

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//       <svg 
//         width={size} 
//         height={size} 
//         viewBox={`0 0 ${size} ${size}`}
//         role="img"
//         aria-label={`Unit circle showing quadrant ${selectedQuadrant}`}
//         style={{ border: '1px solid #ddd', maxWidth: '100%', height: 'auto' }}
//       >
//         <title>Unit Circle - Quadrant {selectedQuadrant}</title>
        
//         <circle cx={center} cy={center} r={radius} fill="none" stroke="#333" strokeWidth="2" />
        
//         <line x1={center} y1="20" x2={center} y2={size - 20} stroke="#666" strokeWidth="2" />
//         <line x1="20" y1={center} x2={size - 20} y2={center} stroke="#666" strokeWidth="2" />
        
//         {quadrantPaths.map(({ quadrant, d }) => (
//           <path
//             key={quadrant}
//             d={d}
//             fill={selectedQuadrant === quadrant ? `${QUADRANT_COLORS[quadrant]}20` : 'rgba(200, 200, 200, 0.1)'}
//             stroke={selectedQuadrant === quadrant ? QUADRANT_COLORS[quadrant] : '#ccc'}
//             strokeWidth={selectedQuadrant === quadrant ? '2' : '1'}
//           />
//         ))}
        
//         <g>
//           <line x1={center} y1={center} x2={point.x} y2={point.y} stroke={selectedColor} strokeWidth="3" />
//           <circle cx={point.x} cy={point.y} r="4" fill={selectedColor} />
//           <line x1={point.x} y1={point.y} x2={point.x} y2={center} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
//           <line x1={point.x} y1={point.y} x2={center} y2={point.y} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
          
//           <text x={point.x + 10} y={point.y - 5} fontSize="12" fontWeight="bold" fill={selectedColor}>(x, y)</text>
//           <text x={point.x/2 + center/2} y={point.y/2 + center/2 + 5} fontSize="12" fontWeight="bold" fill={selectedColor}>r</text>
//         </g>
        
//         <text x={size - 15} y={center - 5} fontSize="12" fill="#666">+x</text>
//         <text x={center + 5} y="15" fontSize="12" fill="#666">+y</text>
//         <text x="5" y={center - 5} fontSize="12" fill="#666">-x</text>
//         <text x={center + 5} y={size - 5} fontSize="12" fill="#666">-y</text>
        
//         <text x={center + radius/2} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">I</text>
//         <text x={center - radius/2 - 10} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">II</text>
//         <text x={center - radius/2 - 10} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">III</text>
//         <text x={center + radius/2} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">IV</text>
//       </svg>
//     </div>
//   );
// });
// UnitCircle.displayName = 'UnitCircle';

// const FunctionSelector = memo(({ selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
//   return (
//     <div style={{ 
//       display: 'grid', 
//       gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
//       gap: '8px', 
//       marginBottom: '20px' 
//     }}>
//       {functions.map(func => (
//         <button
//           key={func}
//           onClick={() => onFunctionSelect(func)}
//           data-function={func}
//           style={{
//             padding: '12px 8px',
//             border: selectedFunction === func ? '2px solid #333' : '1px solid #ccc',
//             backgroundColor: selectedFunction === func ? '#333' : 'white',
//             color: selectedFunction === func ? 'white' : '#333',
//             borderRadius: '6px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             fontWeight: 'bold',
//             transition: 'all 0.2s ease'
//           }}
//           aria-pressed={selectedFunction === func}
//           aria-label={`Select ${func} function`}
//         >
//           {func}
//         </button>
//       ))}
//     </div>
//   );
// });
// FunctionSelector.displayName = 'FunctionSelector';

// const CoordinateInfo = memo(({ quadrant, coordinates, angles }) => {
//   return (
//     <div style={{ 
//       padding: '15px', 
//       backgroundColor: '#f8f9fa', 
//       borderRadius: '8px',
//       border: '1px solid #ddd',
//       marginBottom: '20px'
//     }}>
//       <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
//         Quadrant {quadrant} Coordinates
//       </h4>
//       <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
//         <div><strong>x-coordinate:</strong> <span style={getSignStyle(coordinates.x)}>{coordinates.x}</span></div>
//         <div><strong>y-coordinate:</strong> <span style={getSignStyle(coordinates.y)}>{coordinates.y}</span></div>
//         <div><strong>radius (r):</strong> <span style={{ color: '#22c55e', fontWeight: 'bold' }}>always +</span></div>
//         <div><strong>Reference angle:</strong> {angles.degrees} ({angles.radians})</div>
//       </div>
//     </div>
//   );
// });
// CoordinateInfo.displayName = 'CoordinateInfo';

// const ExplanationPanel = memo(({ selectedFunction, selectedQuadrant, currentQuadrantData, currentFunctionSign, showExplanation }) => {
//   return (
//     <div style={{ 
//       border: '1px solid #ddd', 
//       borderRadius: '8px', 
//       overflow: 'hidden',
//       backgroundColor: 'white',
//       marginBottom: '20px'
//     }}>
//       <div style={{ 
//         backgroundColor: QUADRANT_COLORS[selectedQuadrant], 
//         color: 'white',
//         padding: '15px', 
//         textAlign: 'center'
//       }}>
//         <h3 style={{ margin: '0', fontSize: '18px' }}>
//           {selectedFunction}(θ) in Quadrant {selectedQuadrant}
//         </h3>
//       </div>
      
//       <div style={{ padding: '20px' }}>
//         <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//           <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
//             Sign: <span style={{ fontSize: '32px', ...getSignStyle(currentFunctionSign) }}>
//               {currentFunctionSign}
//             </span>
//           </div>
//         </div>
        
//         {showExplanation && (
//           <div style={{ 
//             backgroundColor: '#f8f9fa', 
//             padding: '15px', 
//             borderRadius: '6px',
//             fontSize: '14px',
//             lineHeight: '1.6'
//           }}>
//             <strong>Mathematical Reasoning:</strong><br/>
//             {getExplanation(selectedFunction, selectedQuadrant)}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });
// ExplanationPanel.displayName = 'ExplanationPanel';

// const FunctionSummary = memo(({ selectedQuadrant, selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
//   return (
//     <div style={{ 
//       border: '1px solid #ddd', 
//       borderRadius: '8px', 
//       backgroundColor: 'white'
//     }}>
//       <div style={{ 
//         backgroundColor: '#f8f9fa', 
//         padding: '12px', 
//         borderBottom: '1px solid #ddd'
//       }}>
//         <h4 style={{ margin: '0', fontSize: '16px' }}>
//           All Functions in Quadrant {selectedQuadrant}
//         </h4>
//       </div>
//       <div style={{ padding: '15px' }}>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '10px' }}>
//           {functions.map(func => (
//             <div
//               key={func}
//               onClick={() => onFunctionSelect(func)}
//               style={{
//                 padding: '10px',
//                 textAlign: 'center',
//                 border: selectedFunction === func ? '2px solid #333' : '1px solid #ddd',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 backgroundColor: selectedFunction === func ? '#f8f9fa' : 'white',
//                 transition: 'all 0.2s ease'
//               }}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => e.key === 'Enter' && onFunctionSelect(func)}
//               aria-label={`${func} function: ${QUADRANT_DATA[selectedQuadrant].signs[func]}`}
//             >
//               <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{func}</div>
//               <div style={{ fontSize: '18px', ...getSignStyle(QUADRANT_DATA[selectedQuadrant].signs[func]) }}>
//                 {QUADRANT_DATA[selectedQuadrant].signs[func]}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// });
// FunctionSummary.displayName = 'FunctionSummary';

// const MemoryAid = memo(() => {
//   return (
//     <div style={{ 
//       marginTop: '30px', 
//       padding: '20px', 
//       backgroundColor: '#f8f9fa', 
//       borderRadius: '8px',
//       border: '1px solid #ddd'
//     }}>
//       <h4 style={{ margin: '0 0 15px 0', color: '#333' }}>Key Concepts</h4>
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
//         gap: '15px', 
//         fontSize: '14px' 
//       }}>
//         <div>
//           <strong>Fundamental Definitions:</strong><br/>
//           • sin θ = y/r, cos θ = x/r, tan θ = y/x<br/>
//           • csc θ = r/y, sec θ = r/x, cot θ = x/y
//         </div>
//         <div>
//           <strong>Memory Aid &ldquo;ASTC&rdquo;:</strong><br/>
//           • Quadrant I: <strong>A</strong>ll positive<br/>
//           • Quadrant II: <strong>S</strong>ine positive<br/>
//           • Quadrant III: <strong>T</strong>angent positive<br/>
//           • Quadrant IV: <strong>C</strong>osine positive
//         </div>
//       </div>
//     </div>
//   );
// });
// MemoryAid.displayName = 'MemoryAid';

// // Main App Component
// const TrigonometryApp = ({ functions = FUNCTIONS }) => {
//   const {
//     selectedQuadrant,
//     selectedFunction,
//     showExplanation,
//     currentQuadrantData,
//     currentFunctionSign,
//     handleQuadrantSelect,
//     handleFunctionSelect,
//     toggleExplanation
//   } = useTrigonometry({ 
//     initialFunction: functions[0],
//     functions: functions
//   });

//   useKeyboardNavigation({ 
//     onQuadrantSelect: handleQuadrantSelect, 
//     onFunctionSelect: handleFunctionSelect,
//     functions: functions
//   });

//   return (
//     <div style={{ 
//       fontFamily: 'system-ui, -apple-system, sans-serif', 
//       padding: '20px', 
//       maxWidth: '1200px', 
//       margin: '0 auto',
//       minHeight: '100vh'
//     }}>
//       <header style={{ marginBottom: '25px' }}>
//         <h1 style={{ 
//           color: '#1f2937', 
//           fontSize: 'clamp(20px, 3.5vw, 28px)',
//           fontWeight: 'bold',
//           margin: '0 0 8px 0',
//           textAlign: 'center'
//         }}>
//           Trigonometric Functions Signs
//         </h1>
//         <p style={{ 
//           color: '#6b7280', 
//           fontSize: '14px',
//           margin: '0 0 15px 0',
//           textAlign: 'center'
//         }}>
//           Interactive visualization showing mathematical reasoning behind function signs
//         </p>
//         <div style={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center',
//           margin: '0',
//           gap: '15px'
//         }}>
//           <button
//             onClick={toggleExplanation}
//             style={{
//               backgroundColor: showExplanation ? '#64748b' : '#1e293b',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               padding: '6px 12px',
//               fontSize: '13px',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s'
//             }}
//             aria-label={showExplanation ? 'Hide explanations' : 'Show explanations'}
//           >
//             {showExplanation ? 'Hide' : 'Show'} Explanations
//           </button>
//           <div style={{ 
//             padding: '8px 12px', 
//             backgroundColor: '#f0f8ff',
//             borderRadius: '6px',
//             fontSize: '11px',
//             color: '#1e40af',
//             border: '1px solid #bfdbfe',
//             display: 'flex',
//             gap: '12px',
//             flexWrap: 'wrap'
//           }}>
//             <span><strong>Keys:</strong> 1-4 for quadrants • Arrows for functions</span>
//             <span><strong>Click:</strong> Any element to interact</span>
//             <span><strong>Features:</strong> Color-coded • Real-time updates</span>
//           </div>
//         </div>
//       </header>
      
//       <main>
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
//           gap: '30px',
//           alignItems: 'start'
//         }}>
//           <section aria-label="Unit circle and controls">
//             <QuadrantSelector 
//               selectedQuadrant={selectedQuadrant} 
//               onQuadrantSelect={handleQuadrantSelect} 
//             />
            
//             <UnitCircle 
//               selectedQuadrant={selectedQuadrant}
//             />
            
//             <CoordinateInfo
//               quadrant={selectedQuadrant}
//               coordinates={currentQuadrantData.coordinates}
//               angles={currentQuadrantData.angles}
//             />
//           </section>

//           <section aria-label="Function analysis">
//             <FunctionSelector 
//               selectedFunction={selectedFunction}
//               onFunctionSelect={handleFunctionSelect}
//               functions={functions}
//             />

//             <ExplanationPanel
//               selectedFunction={selectedFunction}
//               selectedQuadrant={selectedQuadrant}
//               currentQuadrantData={currentQuadrantData}
//               currentFunctionSign={currentFunctionSign}
//               showExplanation={showExplanation}
//             />

//             <FunctionSummary
//               selectedQuadrant={selectedQuadrant}
//               selectedFunction={selectedFunction}
//               onFunctionSelect={handleFunctionSelect}
//               functions={functions}
//             />
//           </section>
//         </div>

//         <MemoryAid />
//       </main>
//     </div>
//   );
// };
// TrigonometryApp.displayName = 'TrigonometryApp';

// // Export with Error Boundary
// const Quadrants = ({ functions = FUNCTIONS }) => (
//   <ErrorBoundary>
//     <TrigonometryApp functions={functions} />
//   </ErrorBoundary>
// );
// Quadrants.displayName = 'Quadrants';

// export default Quadrants;


import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';

// Constants
const FUNCTIONS = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];
const QUADRANT_COLORS = {
  1: '#3b82f6', 2: '#22c55e', 3: '#eab308', 4: '#8b5cf6'
};

const QUADRANT_DATA = {
  1: {
    coordinates: { x: '+', y: '+' },
    angles: { degrees: '0° to 90°', radians: '0 to π/2' },
    signs: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' }
  },
  2: {
    coordinates: { x: '−', y: '+' },
    angles: { degrees: '90° to 180°', radians: 'π/2 to π' },
    signs: { sin: '+', cos: '−', tan: '−', csc: '+', sec: '−', cot: '−' }
  },
  3: {
    coordinates: { x: '−', y: '−' },
    angles: { degrees: '180° to 270°', radians: 'π to 3π/2' },
    signs: { sin: '−', cos: '−', tan: '+', csc: '−', sec: '−', cot: '+' }
  },
  4: {
    coordinates: { x: '+', y: '−' },
    angles: { degrees: '270° to 360°', radians: '3π/2 to 2π' },
    signs: { sin: '−', cos: '+', tan: '−', csc: '−', sec: '+', cot: '−' }
  }
};

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Trigonometry App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '400px',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '32px',
            maxWidth: '500px',
            textAlign: 'center',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ color: '#dc2626', marginBottom: '16px' }}>
              Something went wrong
            </h2>
            <p style={{ color: '#4b5563', marginBottom: '24px' }}>
              The trigonometry visualization encountered an error. Please refresh the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '12px 24px',
                cursor: 'pointer'
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Utility Functions
const getExplanation = (func, quadrant) => {
  const { coordinates, signs } = QUADRANT_DATA[quadrant];
  const { x: xSign, y: ySign } = coordinates;
  const funcSign = signs[func];
  
  const explanations = {
    sin: `sin θ = y/r. Since y is ${ySign === '+' ? 'positive' : 'negative'} and r is always positive, sin θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
    cos: `cos θ = x/r. Since x is ${xSign === '+' ? 'positive' : 'negative'} and r is always positive, cos θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
    tan: `tan θ = y/x. Since y is ${ySign === '+' ? 'positive' : 'negative'} and x is ${xSign === '+' ? 'positive' : 'negative'}, tan θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
    csc: `csc θ = r/y = 1/sin θ. Since r is always positive and y is ${ySign === '+' ? 'positive' : 'negative'}, csc θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
    sec: `sec θ = r/x = 1/cos θ. Since r is always positive and x is ${xSign === '+' ? 'positive' : 'negative'}, sec θ is ${funcSign === '+' ? 'positive' : 'negative'}.`,
    cot: `cot θ = x/y. Since x is ${xSign === '+' ? 'positive' : 'negative'} and y is ${ySign === '+' ? 'positive' : 'negative'}, cot θ is ${funcSign === '+' ? 'positive' : 'negative'}.`
  };
  
  return explanations[func] || 'Explanation not available';
};

const getSignStyle = (sign) => ({
  color: sign === '+' ? '#22c55e' : '#ef4444',
  fontWeight: 'bold'
});

const getCirclePoint = (quadrant, center, radius) => {
  const angles = { 1: Math.PI / 4, 2: 3 * Math.PI / 4, 3: 5 * Math.PI / 4, 4: 7 * Math.PI / 4 };
  const angle = angles[quadrant];
  
  return {
    x: center + radius * Math.cos(angle),
    y: center - radius * Math.sin(angle)
  };
};

// Custom Hooks
const useTrigonometry = ({ initialQuadrant = 1, initialFunction = 'sin', functions = FUNCTIONS } = {}) => {
  const [selectedQuadrant, setSelectedQuadrant] = useState(initialQuadrant);
  const [selectedFunction, setSelectedFunction] = useState(
    functions.includes(initialFunction) ? initialFunction : functions[0]
  );
  const [showExplanation, setShowExplanation] = useState(true);

  const handleQuadrantSelect = useCallback((quadrant) => {
    if ([1, 2, 3, 4].includes(quadrant)) {
      setSelectedQuadrant(quadrant);
    }
  }, []);

  const handleFunctionSelect = useCallback((func) => {
    if (functions.includes(func)) {
      setSelectedFunction(func);
    }
  }, [functions]);

  const currentQuadrantData = useMemo(() => 
    QUADRANT_DATA[selectedQuadrant], 
    [selectedQuadrant]
  );

  const currentFunctionSign = useMemo(() => 
    currentQuadrantData?.signs[selectedFunction] || '+',
    [currentQuadrantData, selectedFunction]
  );

  return {
    selectedQuadrant,
    selectedFunction,
    showExplanation,
    currentQuadrantData,
    currentFunctionSign,
    handleQuadrantSelect,
    handleFunctionSelect,
    toggleExplanation: () => setShowExplanation(prev => !prev)
  };
};

const useKeyboardNavigation = ({ onQuadrantSelect, onFunctionSelect, functions = FUNCTIONS }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
          event.preventDefault();
          onQuadrantSelect(parseInt(event.key));
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          event.preventDefault();
          const currentIndex = functions.findIndex(f => f === event.target.dataset?.function);
          if (currentIndex >= 0) {
            const newIndex = event.key === 'ArrowLeft' 
              ? (currentIndex - 1 + functions.length) % functions.length
              : (currentIndex + 1) % functions.length;
            onFunctionSelect(functions[newIndex]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onQuadrantSelect, onFunctionSelect, functions]);
};

// Components
const QuadrantSelector = memo(({ selectedQuadrant, onQuadrantSelect }) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '10px', 
      marginBottom: '20px' 
    }}>
      {[1, 2, 3, 4].map(q => (
        <button
          key={q}
          onClick={() => onQuadrantSelect(q)}
          onKeyDown={(e) => e.key === 'Enter' && onQuadrantSelect(q)}
          style={{
            padding: '12px',
            border: selectedQuadrant === q ? `2px solid ${QUADRANT_COLORS[q]}` : '1px solid #ccc',
            backgroundColor: selectedQuadrant === q ? QUADRANT_COLORS[q] : 'white',
            color: selectedQuadrant === q ? 'white' : '#333',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease'
          }}
          aria-pressed={selectedQuadrant === q}
          aria-label={`Select quadrant ${q}: ${QUADRANT_DATA[q].angles.degrees}`}
        >
          Q{q}: {QUADRANT_DATA[q].angles.degrees}<br/>
          <span style={{ fontSize: '12px', opacity: '0.9' }}>({QUADRANT_DATA[q].angles.radians})</span>
        </button>
      ))}
    </div>
  );
});
QuadrantSelector.displayName = 'QuadrantSelector';

const UnitCircle = memo(({ selectedQuadrant, size = 320 }) => {
  const center = size / 2;
  const radius = (size - 40) / 2;
  const point = getCirclePoint(selectedQuadrant, center, radius);
  const selectedColor = QUADRANT_COLORS[selectedQuadrant];

  const quadrantPaths = [
    { quadrant: 1, d: `M ${center} ${center} L ${center} ${center - radius} A ${radius} ${radius} 0 0 1 ${center + radius} ${center} Z` },
    { quadrant: 2, d: `M ${center} ${center} L ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center - radius} Z` },
    { quadrant: 3, d: `M ${center} ${center} L ${center} ${center + radius} A ${radius} ${radius} 0 0 1 ${center - radius} ${center} Z` },
    { quadrant: 4, d: `M ${center} ${center} L ${center + radius} ${center} A ${radius} ${radius} 0 0 1 ${center} ${center + radius} Z` }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`Unit circle showing quadrant ${selectedQuadrant}`}
        style={{ border: '1px solid #ddd', maxWidth: '100%', height: 'auto' }}
      >
        <title>Unit Circle - Quadrant {selectedQuadrant}</title>
        
        <circle cx={center} cy={center} r={radius} fill="none" stroke="#333" strokeWidth="2" />
        
        <line x1={center} y1="20" x2={center} y2={size - 20} stroke="#666" strokeWidth="2" />
        <line x1="20" y1={center} x2={size - 20} y2={center} stroke="#666" strokeWidth="2" />
        
        {quadrantPaths.map(({ quadrant, d }) => (
          <path
            key={quadrant}
            d={d}
            fill={selectedQuadrant === quadrant ? `${QUADRANT_COLORS[quadrant]}20` : 'rgba(200, 200, 200, 0.1)'}
            stroke={selectedQuadrant === quadrant ? QUADRANT_COLORS[quadrant] : '#ccc'}
            strokeWidth={selectedQuadrant === quadrant ? '2' : '1'}
          />
        ))}
        
        <g>
          <line x1={center} y1={center} x2={point.x} y2={point.y} stroke={selectedColor} strokeWidth="3" />
          <circle cx={point.x} cy={point.y} r="4" fill={selectedColor} />
          <line x1={point.x} y1={point.y} x2={point.x} y2={center} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
          <line x1={point.x} y1={point.y} x2={center} y2={point.y} stroke="#666" strokeWidth="1" strokeDasharray="5,5" />
          
          <text x={point.x + 10} y={point.y - 5} fontSize="12" fontWeight="bold" fill={selectedColor}>(x, y)</text>
          <text x={point.x/2 + center/2} y={point.y/2 + center/2 + 5} fontSize="12" fontWeight="bold" fill={selectedColor}>r</text>
        </g>
        
        <text x={size - 15} y={center - 5} fontSize="12" fill="#666">+x</text>
        <text x={center + 5} y="15" fontSize="12" fill="#666">+y</text>
        <text x="5" y={center - 5} fontSize="12" fill="#666">-x</text>
        <text x={center + 5} y={size - 5} fontSize="12" fill="#666">-y</text>
        
        <text x={center + radius/2} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">I</text>
        <text x={center - radius/2 - 10} y={center - radius/2} fontSize="16" fontWeight="bold" fill="#666">II</text>
        <text x={center - radius/2 - 10} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">III</text>
        <text x={center + radius/2} y={center + radius/2 + 5} fontSize="16" fontWeight="bold" fill="#666">IV</text>
      </svg>
    </div>
  );
});
UnitCircle.displayName = 'UnitCircle';

const FunctionSelector = memo(({ selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
      gap: '8px', 
      marginBottom: '20px' 
    }}>
      {functions.map(func => (
        <button
          key={func}
          onClick={() => onFunctionSelect(func)}
          data-function={func}
          style={{
            padding: '12px 8px',
            border: selectedFunction === func ? '2px solid #333' : '1px solid #ccc',
            backgroundColor: selectedFunction === func ? '#333' : 'white',
            color: selectedFunction === func ? 'white' : '#333',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease'
          }}
          aria-pressed={selectedFunction === func}
          aria-label={`Select ${func} function`}
        >
          {func}
        </button>
      ))}
    </div>
  );
});
FunctionSelector.displayName = 'FunctionSelector';

const CoordinateInfo = memo(({ quadrant, coordinates, angles }) => {
  return (
    <div style={{ 
      padding: '15px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginBottom: '20px'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
        Quadrant {quadrant} Coordinates
      </h4>
      <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
        <div><strong>x-coordinate:</strong> <span style={getSignStyle(coordinates.x)}>{coordinates.x}</span></div>
        <div><strong>y-coordinate:</strong> <span style={getSignStyle(coordinates.y)}>{coordinates.y}</span></div>
        <div><strong>radius (r):</strong> <span style={{ color: '#22c55e', fontWeight: 'bold' }}>always +</span></div>
        <div><strong>Reference angle:</strong> {angles.degrees} ({angles.radians})</div>
      </div>
    </div>
  );
});
CoordinateInfo.displayName = 'CoordinateInfo';

const ExplanationPanel = memo(({ selectedFunction, selectedQuadrant, currentQuadrantData, currentFunctionSign, showExplanation }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      overflow: 'hidden',
      backgroundColor: 'white',
      marginBottom: '20px'
    }}>
      <div style={{ 
        backgroundColor: QUADRANT_COLORS[selectedQuadrant], 
        color: 'white',
        padding: '15px', 
        textAlign: 'center'
      }}>
        <h3 style={{ margin: '0', fontSize: '18px' }}>
          {selectedFunction}(θ) in Quadrant {selectedQuadrant}
        </h3>
      </div>
      
      <div style={{ padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>
            Sign: <span style={{ fontSize: '32px', ...getSignStyle(currentFunctionSign) }}>
              {currentFunctionSign}
            </span>
          </div>
        </div>
        
        {showExplanation && (
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '6px',
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
            <strong>Mathematical Reasoning:</strong><br/>
            {getExplanation(selectedFunction, selectedQuadrant)}
          </div>
        )}
      </div>
    </div>
  );
});
ExplanationPanel.displayName = 'ExplanationPanel';

const FunctionSummary = memo(({ selectedQuadrant, selectedFunction, onFunctionSelect, functions = FUNCTIONS }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      backgroundColor: 'white'
    }}>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '12px', 
        borderBottom: '1px solid #ddd'
      }}>
        <h4 style={{ margin: '0', fontSize: '16px' }}>
          All Functions in Quadrant {selectedQuadrant}
        </h4>
      </div>
      <div style={{ padding: '15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '10px' }}>
          {functions.map(func => (
            <div
              key={func}
              onClick={() => onFunctionSelect(func)}
              style={{
                padding: '10px',
                textAlign: 'center',
                border: selectedFunction === func ? '2px solid #333' : '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                backgroundColor: selectedFunction === func ? '#f8f9fa' : 'white',
                transition: 'all 0.2s ease'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onFunctionSelect(func)}
              aria-label={`${func} function: ${QUADRANT_DATA[selectedQuadrant].signs[func]}`}
            >
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{func}</div>
              <div style={{ fontSize: '18px', ...getSignStyle(QUADRANT_DATA[selectedQuadrant].signs[func]) }}>
                {QUADRANT_DATA[selectedQuadrant].signs[func]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
FunctionSummary.displayName = 'FunctionSummary';

const MemoryAid = memo(() => {
  return (
    <div style={{ 
      marginTop: '0px', 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '8px',
      border: '1px solid #ddd'
    }}>
      <h4 style={{ margin: '0 0 15px 0', color: '#333' }}>Key Concepts</h4>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '15px', 
        fontSize: '14px' 
      }}>
        <div>
          <strong>Fundamental Definitions:</strong><br/>
          • sin θ = y/r, cos θ = x/r, tan θ = y/x<br/>
          • csc θ = r/y, sec θ = r/x, cot θ = x/y
        </div>
        <div>
          <strong>Memory Aid &ldquo;ASTC&rdquo;:</strong><br/>
          • Quadrant I: <strong>A</strong>ll positive<br/>
          • Quadrant II: <strong>S</strong>ine positive<br/>
          • Quadrant III: <strong>T</strong>angent positive<br/>
          • Quadrant IV: <strong>C</strong>osine positive
        </div>
      </div>
    </div>
  );
});
MemoryAid.displayName = 'MemoryAid';

// Main App Component
const TrigonometryApp = ({ functions = FUNCTIONS }) => {
  const {
    selectedQuadrant,
    selectedFunction,
    showExplanation,
    currentQuadrantData,
    currentFunctionSign,
    handleQuadrantSelect,
    handleFunctionSelect,
    toggleExplanation
  } = useTrigonometry({ 
    initialFunction: functions[0],
    functions: functions
  });

  useKeyboardNavigation({ 
    onQuadrantSelect: handleQuadrantSelect, 
    onFunctionSelect: handleFunctionSelect,
    functions: functions
  });

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      padding: '20px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      <header style={{ marginBottom: '25px' }}>
        {/* <h1 style={{ 
          color: '#1f2937', 
          fontSize: 'clamp(20px, 3.5vw, 28px)',
          fontWeight: 'bold',
          margin: '0 0 8px 0',
          textAlign: 'center'
        }}>
          Trigonometric Functions Signs
        </h1> */}
        <p style={{ 
          color: '#6b7280', 
          fontSize: '14px',
          margin: '0 0 15px 0',
          textAlign: 'center'
        }}>
          Interactive visualization showing mathematical reasoning behind function signs
        </p>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '0',
          gap: '15px'
        }}>
          <button
            onClick={toggleExplanation}
            style={{
              backgroundColor: showExplanation ? '#64748b' : '#1e293b',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            aria-label={showExplanation ? 'Hide explanations' : 'Show explanations'}
          >
            {showExplanation ? 'Hide' : 'Show'} Explanations
          </button>

          <div style={{ 
            padding: '8px 12px', 
            backgroundColor: '#f0f8ff',
            borderRadius: '6px',
            fontSize: '11px',
            color: '#1e40af',
            border: '1px solid #bfdbfe'
          }}>
            <span><strong>Keyboard:</strong> Press 1-4 to select quadrants or click the corresponding button</span>
          </div>
          {/* <div style={{ 
            padding: '8px 12px', 
            backgroundColor: '#f0f8ff',
            borderRadius: '6px',
            fontSize: '11px',
            color: '#1e40af',
            border: '1px solid #bfdbfe',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <span><strong>Keyboard:</strong> Press 1-4 to select quadrants or clich the corresponding button </span>
         
        </div>
          </div> */}
        </div>
      </header>
      
      <main>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '25px',
          alignItems: 'start'
        }}>
          <section aria-label="Unit circle and controls">
            <QuadrantSelector 
              selectedQuadrant={selectedQuadrant} 
              onQuadrantSelect={handleQuadrantSelect} 
            />
            
            <UnitCircle 
              selectedQuadrant={selectedQuadrant}
            />
            
            <CoordinateInfo
              quadrant={selectedQuadrant}
              coordinates={currentQuadrantData.coordinates}
              angles={currentQuadrantData.angles}
            />
          </section>

          <section aria-label="Function analysis">
            <FunctionSelector 
              selectedFunction={selectedFunction}
              onFunctionSelect={handleFunctionSelect}
              functions={functions}
            />

            <ExplanationPanel
              selectedFunction={selectedFunction}
              selectedQuadrant={selectedQuadrant}
              currentQuadrantData={currentQuadrantData}
              currentFunctionSign={currentFunctionSign}
              showExplanation={showExplanation}
            />

            <FunctionSummary
              selectedQuadrant={selectedQuadrant}
              selectedFunction={selectedFunction}
              onFunctionSelect={handleFunctionSelect}
              functions={functions}
            />
          </section>
        </div>

        <MemoryAid />
      </main>
    </div>
  );
};
TrigonometryApp.displayName = 'TrigonometryApp';

// Export with Error Boundary
const Quadrants = ({ functions = FUNCTIONS }) => (
  <ErrorBoundary>
    <TrigonometryApp functions={functions} />
  </ErrorBoundary>
);
Quadrants.displayName = 'Quadrants';

export default Quadrants;