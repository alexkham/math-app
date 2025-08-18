// // // import React, { useState } from 'react';

// // // const ModuloNumberLine = () => {
// // //   const [modulus, setModulus] = useState(7);
// // //   const [targetNumber, setTargetNumber] = useState(-3);
// // //   const [showCalculation, setShowCalculation] = useState(true);

// // //   // Calculate the last smaller multiple and the modulo result
// // //   const lastMultiple = Math.floor(targetNumber / modulus) * modulus;
// // //   const moduloResult = targetNumber - lastMultiple;

// // //   // Define the range of numbers to show on the x-axis - focused on target number
// // //   const rangeSize = Math.max(15, modulus * 3); // Ensure we see enough context
// // //   const minRange = targetNumber - Math.floor(rangeSize / 2);
// // //   const maxRange = targetNumber + Math.ceil(rangeSize / 2);
  
// // //   // Generate multiples of the modulus in our range
// // //   const multiples = [];
// // //   for (let i = Math.floor(minRange / modulus) * modulus; i <= maxRange; i += modulus) {
// // //     multiples.push(i);
// // //   }

// // //   const containerStyle = {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: '20px',
// // //     fontFamily: 'Arial, sans-serif',
// // //     maxWidth: '1000px',
// // //     margin: '0 auto',
// // //     backgroundColor: '#f8fafc'
// // //   };

// // //   const controlsStyle = {
// // //     display: 'flex',
// // //     gap: '20px',
// // //     marginBottom: '30px',
// // //     padding: '20px',
// // //     backgroundColor: 'white',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // //     alignItems: 'center',
// // //     flexWrap: 'wrap',
// // //     justifyContent: 'center'
// // //   };

// // //   const controlGroupStyle = {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     gap: '5px'
// // //   };

// // //   const labelStyle = {
// // //     fontSize: '14px',
// // //     fontWeight: 'bold',
// // //     color: '#374151'
// // //   };

// // //   const inputStyle = {
// // //     padding: '8px 12px',
// // //     border: '2px solid #d1d5db',
// // //     borderRadius: '6px',
// // //     fontSize: '16px',
// // //     textAlign: 'center',
// // //     width: '100px'
// // //   };

// // //   const numberLineStyle = {
// // //     width: '100%',
// // //     height: '200px',
// // //     backgroundColor: 'white',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // //     padding: '20px',
// // //     overflow: 'auto'
// // //   };

// // //   const resultStyle = {
// // //     marginTop: '20px',
// // //     padding: '20px',
// // //     backgroundColor: 'white',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// // //     textAlign: 'center'
// // //   };

// // //   // Calculate positions for SVG
// // //   const svgWidth = Math.max(800, (maxRange - minRange) * 40);
// // //   const svgHeight = 160;
// // //   const scale = (svgWidth - 80) / (maxRange - minRange);
// // //   const getX = (num) => 40 + (num - minRange) * scale;

// // //   return (
// // //     <div style={containerStyle}>
// // //       <h1 style={{ color: '#1f2937', marginBottom: '10px', fontSize: '32px' }}>
// // //         Modulo as Distance Visualization
// // //       </h1>
// // //       <p style={{ color: '#6b7280', marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}>
// // //         Modulo is the distance from the last smaller multiple. Watch how the target number relates to multiples of the modulus.
// // //       </p>
      
// // //       <div style={controlsStyle}>
// // //         <div style={controlGroupStyle}>
// // //           <label style={labelStyle}>Modulus (n)</label>
// // //           <input
// // //             type="number"
// // //             value={modulus}
// // //             onChange={(e) => setModulus(parseInt(e.target.value) || 7)}
// // //             min="2"
// // //             max="15"
// // //             style={inputStyle}
// // //           />
// // //         </div>
        
// // //         <div style={controlGroupStyle}>
// // //           <label style={labelStyle}>Target Number</label>
// // //           <input
// // //             type="number"
// // //             value={targetNumber}
// // //             onChange={(e) => setTargetNumber(parseInt(e.target.value) || 0)}
// // //             min="-50"
// // //             max="50"
// // //             style={inputStyle}
// // //           />
// // //         </div>
        
// // //         <div style={controlGroupStyle}>
// // //           <label style={labelStyle}>
// // //             <input
// // //               type="checkbox"
// // //               checked={showCalculation}
// // //               onChange={(e) => setShowCalculation(e.target.checked)}
// // //               style={{ marginRight: '8px' }}
// // //             />
// // //             Show Calculation
// // //           </label>
// // //         </div>
// // //       </div>

// // //       <div style={numberLineStyle}>
// // //         <svg width={svgWidth} height={svgHeight} style={{ display: 'block', margin: '0 auto' }}>
// // //           {/* Main x-axis line */}
// // //           <line
// // //             x1="40"
// // //             y1="80"
// // //             x2={svgWidth - 40}
// // //             y2="80"
// // //             stroke="#374151"
// // //             strokeWidth="2"
// // //           />
          
// // //           {/* Tick marks for numbers in our focused range */}
// // //           {Array.from({ length: maxRange - minRange + 1 }, (_, i) => {
// // //             const num = minRange + i;
// // //             const x = getX(num);
// // //             const isMultiple = num % modulus === 0;
// // //             const isTarget = num === targetNumber;
// // //             const isLastMultiple = num === lastMultiple;
            
// // //             return (
// // //               <g key={num}>
// // //                 {/* Tick mark */}
// // //                 <line
// // //                   x1={x}
// // //                   y1={isMultiple ? 60 : isTarget ? 65 : 72}
// // //                   x2={x}
// // //                   y2={isMultiple ? 100 : isTarget ? 95 : 88}
// // //                   stroke={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#d1d5db"}
// // //                   strokeWidth={isTarget ? 4 : isLastMultiple ? 3 : isMultiple ? 2 : 1}
// // //                 />
                
// // //                 {/* Number labels - show more numbers when focused */}
// // //                 {(isMultiple || isTarget || num % 2 === 0) && (
// // //                   <text
// // //                     x={x}
// // //                     y={isMultiple || isTarget ? 115 : 125}
// // //                     textAnchor="middle"
// // //                     fontSize={isTarget || isLastMultiple ? "14" : isMultiple ? "12" : "10"}
// // //                     fill={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#9ca3af"}
// // //                     fontWeight={isTarget || isLastMultiple ? "bold" : "normal"}
// // //                   >
// // //                     {num}
// // //                   </text>
// // //                 )}
// // //               </g>
// // //             );
// // //           })}
          
// // //           {/* Distance arrow */}
// // //           {lastMultiple !== targetNumber && (
// // //             <g>
// // //               {/* Arrow line */}
// // //               <line
// // //                 x1={getX(lastMultiple)}
// // //                 y1="40"
// // //                 x2={getX(targetNumber)}
// // //                 y2="40"
// // //                 stroke="#f59e0b"
// // //                 strokeWidth="3"
// // //               />
              
// // //               {/* Arrow head */}
// // //               <polygon
// // //                 points={`${getX(targetNumber)-5},35 ${getX(targetNumber)+5},35 ${getX(targetNumber)},45`}
// // //                 fill="#f59e0b"
// // //               />
              
// // //               {/* Distance label */}
// // //               <text
// // //                 x={(getX(lastMultiple) + getX(targetNumber)) / 2}
// // //                 y="30"
// // //                 textAnchor="middle"
// // //                 fontSize="14"
// // //                 fill="#f59e0b"
// // //                 fontWeight="bold"
// // //               >
// // //                 Distance: {moduloResult}
// // //               </text>
// // //             </g>
// // //           )}
          
// // //           {/* Legend */}
// // //           <g>
// // //             <circle cx="50" cy="140" r="3" fill="#3b82f6" />
// // //             <text x="60" y="145" fontSize="12" fill="#374151">Multiples of {modulus}</text>
            
// // //             <circle cx="200" cy="140" r="3" fill="#10b981" />
// // //             <text x="210" y="145" fontSize="12" fill="#374151">Last smaller multiple ({lastMultiple})</text>
            
// // //             <circle cx="400" cy="140" r="3" fill="#ef4444" />
// // //             <text x="410" y="145" fontSize="12" fill="#374151">Target number ({targetNumber})</text>
// // //           </g>
// // //         </svg>
// // //       </div>

// // //       {showCalculation && (
// // //         <div style={resultStyle}>
// // //           <h3 style={{ color: '#1f2937', marginTop: 0 }}>Step-by-Step Calculation:</h3>
// // //           <div style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6' }}>
// // //             <p>
// // //               <strong>1. Find the last smaller multiple of {modulus}:</strong><br />
// // //               floor({targetNumber} ÷ {modulus}) × {modulus} = floor({(targetNumber / modulus).toFixed(2)}) × {modulus} = {Math.floor(targetNumber / modulus)} × {modulus} = <span style={{ color: '#10b981', fontWeight: 'bold' }}>{lastMultiple}</span>
// // //             </p>
// // //             <p>
// // //               <strong>2. Calculate the distance:</strong><br />
// // //               {targetNumber} - ({lastMultiple}) = {targetNumber} {lastMultiple >= 0 ? '-' : '+'} {Math.abs(lastMultiple)} = <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{moduloResult}</span>
// // //             </p>
// // //             <p style={{ fontSize: '24px', color: '#1f2937', fontWeight: 'bold', marginTop: '20px' }}>
// // //               Therefore: {targetNumber} mod {modulus} = {moduloResult}
// // //             </p>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <div style={{ ...resultStyle, textAlign: 'left', marginTop: '20px' }}>
// // //         <h3 style={{ color: '#1f2937', marginTop: 0 }}>Quick Examples:</h3>
// // //         <div style={{ color: '#374151', fontSize: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
// // //           <div>17 mod 7 = 3<br /><small>17 - 14 = 3</small></div>
// // //           <div>-3 mod 7 = 4<br /><small>-3 - (-7) = 4</small></div>
// // //           <div>-15 mod 7 = 6<br /><small>-15 - (-21) = 6</small></div>
// // //           <div>25 mod 7 = 4<br /><small>25 - 21 = 4</small></div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ModuloNumberLine;

// // import React, { useState } from 'react';

// // const ModuloNumberLine = () => {
// //   const [modulus, setModulus] = useState(7);
// //   const [targetNumber, setTargetNumber] = useState(-3);
// //   const [showCalculation, setShowCalculation] = useState(true);

// //   // Calculate the last smaller multiple and the modulo result
// //   const lastMultiple = Math.floor(targetNumber / modulus) * modulus;
// //   const moduloResult = targetNumber - lastMultiple;

// //   // Define the range of numbers to show on the x-axis - focused on target number
// //   const rangeSize = Math.max(15, modulus * 3); // Ensure we see enough context
// //   const minRange = targetNumber - Math.floor(rangeSize / 2);
// //   const maxRange = targetNumber + Math.ceil(rangeSize / 2);
  
// //   // Generate multiples of the modulus in our range
// //   const multiples = [];
// //   for (let i = Math.floor(minRange / modulus) * modulus; i <= maxRange; i += modulus) {
// //     multiples.push(i);
// //   }

// //   const containerStyle = {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: '20px',
// //     fontFamily: 'Arial, sans-serif',
// //     maxWidth: '1400px',
// //     margin: '0 auto',
// //     backgroundColor: '#f8fafc'
// //   };

// //   const mainContentStyle = {
// //     display: 'flex',
// //     gap: '30px',
// //     width: '100%',
// //     alignItems: 'flex-start'
// //   };

// //   const leftSectionStyle = {
// //     flex: '2',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center'
// //   };

// //   const rightSectionStyle = {
// //     flex: '1',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '20px'
// //   };

// //   const controlsStyle = {
// //     display: 'flex',
// //     gap: '20px',
// //     marginBottom: '30px',
// //     padding: '20px',
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //     alignItems: 'center',
// //     flexWrap: 'wrap',
// //     justifyContent: 'center'
// //   };

// //   const controlGroupStyle = {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     gap: '5px'
// //   };

// //   const labelStyle = {
// //     fontSize: '14px',
// //     fontWeight: 'bold',
// //     color: '#374151'
// //   };

// //   const inputStyle = {
// //     padding: '8px 12px',
// //     border: '2px solid #d1d5db',
// //     borderRadius: '6px',
// //     fontSize: '16px',
// //     textAlign: 'center',
// //     width: '100px'
// //   };

// //   const numberLineStyle = {
// //     width: '100%',
// //     height: '200px',
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //     padding: '20px',
// //     overflow: 'auto'
// //   };

// //   const resultStyle = {
// //     marginTop: '20px',
// //     padding: '20px',
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //     textAlign: 'center'
// //   };

// //   // Calculate positions for SVG
// //   const svgWidth = Math.max(800, (maxRange - minRange) * 40);
// //   const svgHeight = 160;
// //   const scale = (svgWidth - 80) / (maxRange - minRange);
// //   const getX = (num) => 40 + (num - minRange) * scale;

// //   return (
// //     <div style={containerStyle}>
// //       <h1 style={{ color: '#1f2937', marginBottom: '10px', fontSize: '32px' }}>
// //         Modulo as Distance Visualization
// //       </h1>
// //       <p style={{ color: '#6b7280', marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}>
// //         Modulo is the distance from the last smaller multiple. Watch how the target number relates to multiples of the modulus.
// //       </p>
      
// //       <div style={controlsStyle}>
// //         <div style={controlGroupStyle}>
// //           <label style={labelStyle}>Modulus (n)</label>
// //           <input
// //             type="number"
// //             value={modulus}
// //             onChange={(e) => setModulus(parseInt(e.target.value) || 7)}
// //             min="2"
// //             max="15"
// //             style={inputStyle}
// //           />
// //         </div>
        
// //         <div style={controlGroupStyle}>
// //           <label style={labelStyle}>Target Number</label>
// //           <input
// //             type="number"
// //             value={targetNumber}
// //             onChange={(e) => setTargetNumber(parseInt(e.target.value) || 0)}
// //             min="-50"
// //             max="50"
// //             style={inputStyle}
// //           />
// //         </div>
        
// //         <div style={controlGroupStyle}>
// //           <label style={labelStyle}>
// //             <input
// //               type="checkbox"
// //               checked={showCalculation}
// //               onChange={(e) => setShowCalculation(e.target.checked)}
// //               style={{ marginRight: '8px' }}
// //             />
// //             Show Calculation
// //           </label>
// //         </div>
// //       </div>

// //       <div style={mainContentStyle}>
// //         <div style={leftSectionStyle}>
// //           <div style={numberLineStyle}>
// //             <svg width={svgWidth} height={svgHeight} style={{ display: 'block', margin: '0 auto' }}>
// //               {/* Main x-axis line */}
// //               <line
// //                 x1="40"
// //                 y1="80"
// //                 x2={svgWidth - 40}
// //                 y2="80"
// //                 stroke="#374151"
// //                 strokeWidth="2"
// //               />
              
// //               {/* Tick marks for numbers in our focused range */}
// //               {Array.from({ length: maxRange - minRange + 1 }, (_, i) => {
// //                 const num = minRange + i;
// //                 const x = getX(num);
// //                 const isMultiple = num % modulus === 0;
// //                 const isTarget = num === targetNumber;
// //                 const isLastMultiple = num === lastMultiple;
                
// //                 return (
// //                   <g key={num}>
// //                     {/* Tick mark */}
// //                     <line
// //                       x1={x}
// //                       y1={isMultiple ? 60 : isTarget ? 65 : 72}
// //                       x2={x}
// //                       y2={isMultiple ? 100 : isTarget ? 95 : 88}
// //                       stroke={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#d1d5db"}
// //                       strokeWidth={isTarget ? 4 : isLastMultiple ? 3 : isMultiple ? 2 : 1}
// //                     />
                    
// //                     {/* Number labels - show more numbers when focused */}
// //                     {(isMultiple || isTarget || num % 2 === 0) && (
// //                       <text
// //                         x={x}
// //                         y={isMultiple || isTarget ? 115 : 125}
// //                         textAnchor="middle"
// //                         fontSize={isTarget || isLastMultiple ? "14" : isMultiple ? "12" : "10"}
// //                         fill={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#9ca3af"}
// //                         fontWeight={isTarget || isLastMultiple ? "bold" : "normal"}
// //                       >
// //                         {num}
// //                       </text>
// //                     )}
// //                   </g>
// //                 );
// //               })}
              
// //               {/* Distance arrow */}
// //               {lastMultiple !== targetNumber && (
// //                 <g>
// //                   {/* Arrow line */}
// //                   <line
// //                     x1={getX(lastMultiple)}
// //                     y1="40"
// //                     x2={getX(targetNumber)}
// //                     y2="40"
// //                     stroke="#f59e0b"
// //                     strokeWidth="3"
// //                   />
                  
// //                   {/* Arrow head */}
// //                   <polygon
// //                     points={`${getX(targetNumber)-5},35 ${getX(targetNumber)+5},35 ${getX(targetNumber)},45`}
// //                     fill="#f59e0b"
// //                   />
                  
// //                   {/* Distance label */}
// //                   <text
// //                     x={(getX(lastMultiple) + getX(targetNumber)) / 2}
// //                     y="30"
// //                     textAnchor="middle"
// //                     fontSize="14"
// //                     fill="#f59e0b"
// //                     fontWeight="bold"
// //                   >
// //                     Distance: {moduloResult}
// //                   </text>
// //                 </g>
// //               )}
              
// //               {/* Legend */}
// //               <g>
// //                 <circle cx="50" cy="140" r="3" fill="#3b82f6" />
// //                 <text x="60" y="145" fontSize="12" fill="#374151">Multiples of {modulus}</text>
                
// //                 <circle cx="200" cy="140" r="3" fill="#10b981" />
// //                 <text x="210" y="145" fontSize="12" fill="#374151">Last smaller multiple ({lastMultiple})</text>
                
// //                 <circle cx="400" cy="140" r="3" fill="#ef4444" />
// //                 <text x="410" y="145" fontSize="12" fill="#374151">Target number ({targetNumber})</text>
// //               </g>
// //             </svg>
// //           </div>
// //         </div>

// //         <div style={rightSectionStyle}>
// //           {showCalculation && (
// //             <div style={resultStyle}>
// //               <h3 style={{ color: '#1f2937', marginTop: 0 }}>Step-by-Step Calculation:</h3>
// //               <div style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6' }}>
// //                 <p>
// //                   <strong>1. Find the last smaller multiple of {modulus}:</strong><br />
// //                   floor({targetNumber} ÷ {modulus}) × {modulus} = floor({(targetNumber / modulus).toFixed(2)}) × {modulus} = {Math.floor(targetNumber / modulus)} × {modulus} = <span style={{ color: '#10b981', fontWeight: 'bold' }}>{lastMultiple}</span>
// //                 </p>
// //                 <p>
// //                   <strong>2. Calculate the distance:</strong><br />
// //                   {targetNumber} - ({lastMultiple}) = {targetNumber} {lastMultiple >= 0 ? '-' : '+'} {Math.abs(lastMultiple)} = <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{moduloResult}</span>
// //                 </p>
// //                 <p style={{ fontSize: '20px', color: '#1f2937', fontWeight: 'bold', marginTop: '20px' }}>
// //                   Therefore: {targetNumber} mod {modulus} = {moduloResult}
// //                 </p>
// //               </div>
// //             </div>
// //           )}

// //           <div style={{ ...resultStyle, textAlign: 'left' }}>
// //             <h3 style={{ color: '#1f2937', marginTop: 0 }}>Quick Examples:</h3>
// //             <div style={{ color: '#374151', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
// //               <div>17 mod 7 = 3<br /><small>17 - 14 = 3</small></div>
// //               <div>-3 mod 7 = 4<br /><small>-3 - (-7) = 4</small></div>
// //               <div>-15 mod 7 = 6<br /><small>-15 - (-21) = 6</small></div>
// //               <div>25 mod 7 = 4<br /><small>25 - 21 = 4</small></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ModuloNumberLine;

// import React, { useState } from 'react';

// const ModuloNumberLine = () => {
//   const [modulus, setModulus] = useState(7);
//   const [targetNumber, setTargetNumber] = useState(-3);
//   const [showCalculation, setShowCalculation] = useState(true);

//   // Calculate the last smaller multiple and the modulo result
//   const lastMultiple = Math.floor(targetNumber / modulus) * modulus;
//   const moduloResult = targetNumber - lastMultiple;

//   // Define the range of numbers to show on the x-axis - focused on target number
//   const rangeSize = Math.max(15, modulus * 3); // Ensure we see enough context
//   const minRange = targetNumber - Math.floor(rangeSize / 2);
//   const maxRange = targetNumber + Math.ceil(rangeSize / 2);
  
//   // Generate multiples of the modulus in our range
//   const multiples = [];
//   for (let i = Math.floor(minRange / modulus) * modulus; i <= maxRange; i += modulus) {
//     multiples.push(i);
//   }

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//     maxWidth: '1400px',
//     margin: '0 auto',
//     backgroundColor: '#f8fafc'
//   };

//   const mainContentStyle = {
//     display: 'flex',
//     gap: '20px',
//     width: '100%',
//     alignItems: 'flex-start',
//     height: '500px'
//   };

//   const leftSectionStyle = {
//     flex: '0 0 70%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column'
//   };

//   const rightSectionStyle = {
//     flex: '0 0 28%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px'
//   };

//   const controlsStyle = {
//     display: 'flex',
//     gap: '20px',
//     marginBottom: '30px',
//     padding: '20px',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     justifyContent: 'center'
//   };

//   const controlGroupStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '5px'
//   };

//   const labelStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#374151'
//   };

//   const inputStyle = {
//     padding: '8px 12px',
//     border: '2px solid #d1d5db',
//     borderRadius: '6px',
//     fontSize: '16px',
//     textAlign: 'center',
//     width: '100px'
//   };

//   const numberLineStyle = {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     padding: '15px',
//     overflow: 'auto'
//   };

//   const resultStyle = {
//     flex: '1',
//     padding: '15px',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     overflow: 'auto'
//   };

//   // Calculate positions for SVG
//   const svgWidth = Math.max(800, (maxRange - minRange) * 40);
//   const svgHeight = 160;
//   const scale = (svgWidth - 80) / (maxRange - minRange);
//   const getX = (num) => 40 + (num - minRange) * scale;

//   return (
//     <div style={containerStyle}>
//       <h1 style={{ color: '#1f2937', marginBottom: '10px', fontSize: '32px' }}>
//         Modulo as Distance Visualization
//       </h1>
//       <p style={{ color: '#6b7280', marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}>
//         Modulo is the distance from the last smaller multiple. Watch how the target number relates to multiples of the modulus.
//       </p>
      
//       <div style={controlsStyle}>
//         <div style={controlGroupStyle}>
//           <label style={labelStyle}>Modulus (n)</label>
//           <input
//             type="number"
//             value={modulus}
//             onChange={(e) => setModulus(parseInt(e.target.value) || 7)}
//             min="2"
//             max="15"
//             style={inputStyle}
//           />
//         </div>
        
//         <div style={controlGroupStyle}>
//           <label style={labelStyle}>Target Number</label>
//           <input
//             type="number"
//             value={targetNumber}
//             onChange={(e) => setTargetNumber(parseInt(e.target.value) || 0)}
//             min="-50"
//             max="50"
//             style={inputStyle}
//           />
//         </div>
        
//         <div style={controlGroupStyle}>
//           <label style={labelStyle}>
//             <input
//               type="checkbox"
//               checked={showCalculation}
//               onChange={(e) => setShowCalculation(e.target.checked)}
//               style={{ marginRight: '8px' }}
//             />
//             Show Calculation
//           </label>
//         </div>
//       </div>

//       <div style={mainContentStyle}>
//         <div style={leftSectionStyle}>
//           <div style={numberLineStyle}>
//             <svg width={svgWidth} height={svgHeight} style={{ display: 'block', margin: '0 auto' }}>
//               {/* Main x-axis line */}
//               <line
//                 x1="40"
//                 y1="80"
//                 x2={svgWidth - 40}
//                 y2="80"
//                 stroke="#374151"
//                 strokeWidth="2"
//               />
              
//               {/* Tick marks for numbers in our focused range */}
//               {Array.from({ length: maxRange - minRange + 1 }, (_, i) => {
//                 const num = minRange + i;
//                 const x = getX(num);
//                 const isMultiple = num % modulus === 0;
//                 const isTarget = num === targetNumber;
//                 const isLastMultiple = num === lastMultiple;
                
//                 return (
//                   <g key={num}>
//                     {/* Tick mark */}
//                     <line
//                       x1={x}
//                       y1={isMultiple ? 60 : isTarget ? 65 : 72}
//                       x2={x}
//                       y2={isMultiple ? 100 : isTarget ? 95 : 88}
//                       stroke={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#d1d5db"}
//                       strokeWidth={isTarget ? 4 : isLastMultiple ? 3 : isMultiple ? 2 : 1}
//                     />
                    
//                     {/* Number labels - show more numbers when focused */}
//                     {(isMultiple || isTarget || num % 2 === 0) && (
//                       <text
//                         x={x}
//                         y={isMultiple || isTarget ? 115 : 125}
//                         textAnchor="middle"
//                         fontSize={isTarget || isLastMultiple ? "14" : isMultiple ? "12" : "10"}
//                         fill={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#9ca3af"}
//                         fontWeight={isTarget || isLastMultiple ? "bold" : "normal"}
//                       >
//                         {num}
//                       </text>
//                     )}
//                   </g>
//                 );
//               })}
              
//               {/* Distance arrow */}
//               {lastMultiple !== targetNumber && (
//                 <g>
//                   {/* Arrow line */}
//                   <line
//                     x1={getX(lastMultiple)}
//                     y1="40"
//                     x2={getX(targetNumber)}
//                     y2="40"
//                     stroke="#f59e0b"
//                     strokeWidth="3"
//                   />
                  
//                   {/* Arrow head */}
//                   <polygon
//                     points={`${getX(targetNumber)-5},35 ${getX(targetNumber)+5},35 ${getX(targetNumber)},45`}
//                     fill="#f59e0b"
//                   />
                  
//                   {/* Distance label */}
//                   <text
//                     x={(getX(lastMultiple) + getX(targetNumber)) / 2}
//                     y="30"
//                     textAnchor="middle"
//                     fontSize="14"
//                     fill="#f59e0b"
//                     fontWeight="bold"
//                   >
//                     Distance: {moduloResult}
//                   </text>
//                 </g>
//               )}
              
//               {/* Legend */}
//               <g>
//                 <circle cx="50" cy="140" r="3" fill="#3b82f6" />
//                 <text x="60" y="145" fontSize="12" fill="#374151">Multiples of {modulus}</text>
                
//                 <circle cx="200" cy="140" r="3" fill="#10b981" />
//                 <text x="210" y="145" fontSize="12" fill="#374151">Last smaller multiple ({lastMultiple})</text>
                
//                 <circle cx="400" cy="140" r="3" fill="#ef4444" />
//                 <text x="410" y="145" fontSize="12" fill="#374151">Target number ({targetNumber})</text>
//               </g>
//             </svg>
//           </div>
//         </div>

//         <div style={rightSectionStyle}>
//           {showCalculation && (
//             <div style={resultStyle}>
//               <h3 style={{ color: '#1f2937', marginTop: 0, fontSize: '16px' }}>Step-by-Step Calculation:</h3>
//               <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.4' }}>
//                 <p style={{ marginBottom: '10px' }}>
//                   <strong>1. Find last smaller multiple:</strong><br />
//                   floor({targetNumber} ÷ {modulus}) × {modulus} = {Math.floor(targetNumber / modulus)} × {modulus} = <span style={{ color: '#10b981', fontWeight: 'bold' }}>{lastMultiple}</span>
//                 </p>
//                 <p style={{ marginBottom: '10px' }}>
//                   <strong>2. Calculate distance:</strong><br />
//                   {targetNumber} - ({lastMultiple}) = <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{moduloResult}</span>
//                 </p>
//                 <p style={{ fontSize: '16px', color: '#1f2937', fontWeight: 'bold', marginBottom: 0 }}>
//                   {targetNumber} mod {modulus} = {moduloResult}
//                 </p>
//               </div>
//             </div>
//           )}

//           <div style={resultStyle}>
//             <h3 style={{ color: '#1f2937', marginTop: 0, fontSize: '16px' }}>Quick Examples:</h3>
//             <div style={{ color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
//               <div><strong>17 mod 7 = 3</strong><br /><small>17 - 14 = 3</small></div>
//               <div><strong>-3 mod 7 = 4</strong><br /><small>-3 - (-7) = 4</small></div>
//               <div><strong>-15 mod 7 = 6</strong><br /><small>-15 - (-21) = 6</small></div>
//               <div><strong>25 mod 7 = 4</strong><br /><small>25 - 21 = 4</small></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModuloNumberLine;

import React, { useState } from 'react';

const ModuloNumberLine = () => {
  const [modulus, setModulus] = useState(7);
  const [targetNumber, setTargetNumber] = useState(-3);
  const [showCalculation, setShowCalculation] = useState(true);

  // Calculate the last smaller multiple and the modulo result
  const lastMultiple = Math.floor(targetNumber / modulus) * modulus;
  const moduloResult = targetNumber - lastMultiple;

  // Define the range of numbers to show on the x-axis - focused on target number
  const rangeSize = Math.max(15, modulus * 3); // Ensure we see enough context
  const minRange = targetNumber - Math.floor(rangeSize / 2);
  const maxRange = targetNumber + Math.ceil(rangeSize / 2);
  
  // Generate multiples of the modulus in our range
  const multiples = [];
  for (let i = Math.floor(minRange / modulus) * modulus; i <= maxRange; i += modulus) {
    multiples.push(i);
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor:  '#1e293b'
  };

  const mainContentStyle = {
    display: 'flex',
    gap: '20px',
    width: '100%',
    alignItems: 'flex-start',
    height: '500px'
  };

  const leftSectionStyle = {
    flex: '0 0 70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const rightSectionStyle = {
    flex: '0 0 28%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const controlsStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#3b82f6',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    border: '1px solid #2563eb',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const controlGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px'
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#ffffff'
  };

  const inputStyle = {
    padding: '8px 12px',
    border: '2px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '16px',
    textAlign: 'center',
    width: '100px',
    backgroundColor: '#ffffff',
    transition: 'border-color 0.2s',
    outline: 'none'
  };

  const numberLineStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '2px solid black',
    padding: '15px',
    overflow: 'auto'
  };

  const resultStyle = {
    flex: '1',
    padding: '15px',
    backgroundColor: '#fef3c7',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '2px solid #f59e0b',
    overflow: 'auto'
  };

  // Calculate positions for SVG
  const svgWidth = Math.max(800, (maxRange - minRange) * 40);
  const svgHeight = 160;
  const scale = (svgWidth - 80) / (maxRange - minRange);
  const getX = (num) => 40 + (num - minRange) * scale;

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#ffffff', marginBottom: '10px', fontSize: '32px' }}>
        Modulo as Distance Visualization
      </h1>
      <p style={{ color: '#cbd5e1', marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}>
        Modulo is the distance from the last smaller multiple. Watch how the target number relates to multiples of the modulus.
      </p>
      
      <div style={controlsStyle}>
        <div style={controlGroupStyle}>
          <label style={labelStyle}>Modulus (n)</label>
          <input
            type="number"
            value={modulus}
            onChange={(e) => setModulus(parseInt(e.target.value) || 7)}
            min="2"
            max="15"
            style={inputStyle}
          />
        </div>
        
        <div style={controlGroupStyle}>
          <label style={labelStyle}>Target Number</label>
          <input
            type="number"
            value={targetNumber}
            onChange={(e) => setTargetNumber(parseInt(e.target.value) || 0)}
            min="-50"
            max="50"
            style={inputStyle}
          />
        </div>
        
        <div style={controlGroupStyle}>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={showCalculation}
              onChange={(e) => setShowCalculation(e.target.checked)}
              style={{ marginRight: '8px' }}
            />
            Show Calculation
          </label>
        </div>
      </div>

      <div style={mainContentStyle}>
        <div style={leftSectionStyle}>
          <div style={numberLineStyle}>
            <svg width={svgWidth} height={svgHeight} style={{ display: 'block', margin: '0 auto' }}>
              {/* Main x-axis line */}
              <line
                x1="40"
                y1="80"
                x2={svgWidth - 40}
                y2="80"
                stroke="#374151"
                strokeWidth="2"
              />
              
              {/* Tick marks for numbers in our focused range */}
              {Array.from({ length: maxRange - minRange + 1 }, (_, i) => {
                const num = minRange + i;
                const x = getX(num);
                const isMultiple = num % modulus === 0;
                const isTarget = num === targetNumber;
                const isLastMultiple = num === lastMultiple;
                
                return (
                  <g key={num}>
                    {/* Tick mark */}
                    <line
                      x1={x}
                      y1={isMultiple ? 60 : isTarget ? 65 : 72}
                      x2={x}
                      y2={isMultiple ? 100 : isTarget ? 95 : 88}
                      stroke={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#d1d5db"}
                      strokeWidth={isTarget ? 4 : isLastMultiple ? 3 : isMultiple ? 2 : 1}
                    />
                    
                    {/* Number labels - show more numbers when focused */}
                    {(isMultiple || isTarget || num % 2 === 0) && (
                      <text
                        x={x}
                        y={isMultiple || isTarget ? 115 : 125}
                        textAnchor="middle"
                        fontSize={isTarget || isLastMultiple ? "14" : isMultiple ? "12" : "10"}
                        fill={isTarget ? "#ef4444" : isLastMultiple ? "#10b981" : isMultiple ? "#3b82f6" : "#9ca3af"}
                        fontWeight={isTarget || isLastMultiple ? "bold" : "normal"}
                      >
                        {num}
                      </text>
                    )}
                  </g>
                );
              })}
              
              {/* Distance arrow */}
              {lastMultiple !== targetNumber && (
                <g>
                  {/* Arrow line */}
                  <line
                    x1={getX(lastMultiple)}
                    y1="40"
                    x2={getX(targetNumber)}
                    y2="40"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                  
                  {/* Arrow head */}
                  <polygon
                    points={`${getX(targetNumber)-5},35 ${getX(targetNumber)+5},35 ${getX(targetNumber)},45`}
                    fill="#f59e0b"
                  />
                  
                  {/* Distance label */}
                  <text
                    x={(getX(lastMultiple) + getX(targetNumber)) / 2}
                    y="30"
                    textAnchor="middle"
                    fontSize="14"
                    fill="#f59e0b"
                    fontWeight="bold"
                  >
                    Distance: {moduloResult}
                  </text>
                </g>
              )}
              
              {/* Legend */}
              <g>
                <circle cx="50" cy="140" r="3" fill="#3b82f6" />
                <text x="60" y="145" fontSize="12" fill="#374151">Multiples of {modulus}</text>
                
                <circle cx="200" cy="140" r="3" fill="#10b981" />
                <text x="210" y="145" fontSize="12" fill="#374151">Last smaller multiple ({lastMultiple})</text>
                
                <circle cx="400" cy="140" r="3" fill="#ef4444" />
                <text x="410" y="145" fontSize="12" fill="#374151">Target number ({targetNumber})</text>
              </g>
            </svg>
          </div>
        </div>

        <div style={rightSectionStyle}>
          {showCalculation && (
            <div style={resultStyle}>
              <h3 style={{ color: '#1f2937', marginTop: 0, fontSize: '16px' }}>Step-by-Step Calculation:</h3>
              <div style={{ fontSize: '13px', color: '#374151', lineHeight: '1.4' }}>
                <p style={{ marginBottom: '10px' }}>
                  <strong>1. Find last smaller multiple:</strong><br />
                  floor({targetNumber} ÷ {modulus}) × {modulus} = {Math.floor(targetNumber / modulus)} × {modulus} = <span style={{ color: '#10b981', fontWeight: 'bold' }}>{lastMultiple}</span>
                </p>
                <p style={{ marginBottom: '10px' }}>
                  <strong>2. Calculate distance:</strong><br />
                  {targetNumber} - ({lastMultiple}) = <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{moduloResult}</span>
                </p>
                <p style={{ fontSize: '16px', color: '#1f2937', fontWeight: 'bold', marginBottom: 0 }}>
                  {targetNumber} mod {modulus} = {moduloResult}
                </p>
              </div>
            </div>
          )}

          <div style={resultStyle}>
            <h3 style={{ color: '#1f2937', marginTop: 0, fontSize: '16px' }}>Quick Examples:</h3>
            <div style={{ color: '#374151', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div><strong>17 mod 7 = 3</strong><br /><small>17 - 14 = 3</small></div>
              <div><strong>-3 mod 7 = 4</strong><br /><small>-3 - (-7) = 4</small></div>
              <div><strong>-15 mod 7 = 6</strong><br /><small>-15 - (-21) = 6</small></div>
              <div><strong>25 mod 7 = 4</strong><br /><small>25 - 21 = 4</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuloNumberLine;