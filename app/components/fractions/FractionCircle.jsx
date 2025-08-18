


// // // import React, { useState, useEffect } from 'react';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // // Keep the existing CircleDisplay component
// // // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// // //   const radius = size * 0.45;
// // //   const center = size / 2;
// // //   const labelRadius = radius * 0.7;

// // //   const getFontSize = () => {
// // //     if (denominator <= 25) return 12;
// // //     if (denominator <= 50) return 10;
// // //     if (denominator <= 100) return 8;
// // //     return 6;
// // //   };

// // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // //     return {
// // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // //       y: centerY + (radius * Math.sin(angleInRadians))
// // //     };
// // //   };

// // //   const getDivisionLines = () => {
// // //     if (isFullCircle) return null;
// // //     const lines = [];
// // //     const angleStep = 360 / denominator;
    
// // //     for (let i = 0; i < denominator; i++) {
// // //       const angle = i * angleStep;
// // //       const radians = (angle - 90) * Math.PI / 180;
// // //       const x2 = center + radius * Math.cos(radians);
// // //       const y2 = center + radius * Math.sin(radians);
      
// // //       lines.push(
// // //         <line
// // //           key={i}
// // //           x1={center}
// // //           y1={center}
// // //           x2={x2}
// // //           y2={y2}
// // //           stroke="black"
// // //           strokeWidth="0.5"
// // //           strokeOpacity="0.5"
// // //         />
// // //       );
// // //     }
// // //     return lines;
// // //   };

// // //   const getSegmentNumbers = () => {
// // //     if (isFullCircle) return null;
// // //     const numbers = [];
// // //     const angleStep = 360 / denominator;
// // //     const fontSize = getFontSize();
    
// // //     for (let i = 0; i < denominator; i++) {
// // //       const angle = i * angleStep + (angleStep / 2);
// // //       const radians = (angle - 90) * Math.PI / 180;
// // //       const x = center + labelRadius * Math.cos(radians);
// // //       const y = center + labelRadius * Math.sin(radians);
      
// // //       numbers.push(
// // //         <text
// // //           key={i}
// // //           x={x}
// // //           y={y}
// // //           textAnchor="middle"
// // //           dominantBaseline="middle"
// // //           style={{ fontSize: `${fontSize}px` }}
// // //         >
// // //           {i + 1}
// // //         </text>
// // //       );
// // //     }
// // //     return numbers;
// // //   };

// // //   const getFilledSegments = () => {
// // //     if (isFullCircle) return null;
// // //     const segments = [];
// // //     const angleStep = 360 / denominator;
    
// // //     for (let i = 0; i < numerator; i++) {
// // //       const startAngle = i * angleStep;
// // //       const endAngle = (i + 1) * angleStep;
      
// // //       const start = polarToCartesian(center, center, radius, endAngle);
// // //       const end = polarToCartesian(center, center, radius, startAngle);
// // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // //       const path = [
// // //         'M', center, center,
// // //         'L', start.x, start.y,
// // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // //         'Z'
// // //       ].join(' ');
      
// // //       segments.push(
// // //         <path
// // //           key={i}
// // //           d={path}
// // //           fill="#3b82f6"
// // //           fillOpacity="0.3"
// // //         />
// // //       );
// // //     }
// // //     return segments;
// // //   };

// // //   return (
// // //     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
// // //       {isFullCircle && (
// // //         <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
// // //           {numerator} full circle{numerator > 1 ? 's' : ''}
// // //         </div>
// // //       )}
// // //       <svg width={size} height={size} aria-label={isFullCircle ? `${numerator} whole circles` : `${numerator}/${denominator} fraction circle`}>
// // //         <circle
// // //           cx={center}
// // //           cy={center}
// // //           r={radius}
// // //           fill={isFullCircle ? "#3b82f6" : "white"}
// // //           fillOpacity={isFullCircle ? 0.3 : 1}
// // //           stroke="black"
// // //           strokeWidth="1"
// // //         />
// // //         {getFilledSegments()}
// // //         {getDivisionLines()}
// // //         {getSegmentNumbers()}
// // //       </svg>
// // //     </div>
// // //   );
// // // };

// // // // Keep the existing DataTable component
// // // const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
// // //   const decimal = originalNum / originalDenom;
// // //   const percentage = (decimal * 100).toFixed(2);
  
// // //   const tableStyles = {
// // //     width: '100%',
// // //     maxWidth: '600px',
// // //     marginTop: '2rem',
// // //     borderCollapse: 'collapse',
// // //     border: '1px solid #e5e7eb',
// // //     borderRadius: '8px',
// // //     overflow: 'hidden'
// // //   };

// // //   const thStyles = {
// // //     padding: '12px 24px',
// // //     textAlign: 'left',
// // //     fontSize: '12px',
// // //     fontWeight: '500',
// // //     textTransform: 'uppercase',
// // //     backgroundColor: '#f9fafb',
// // //     color: '#6b7280',
// // //     borderBottom: '1px solid #e5e7eb'
// // //   };

// // //   const tdStyles = {
// // //     padding: '16px 24px',
// // //     fontSize: '14px',
// // //     color: '#111827',
// // //     borderBottom: '1px solid #e5e7eb'
// // //   };

// // //   return (
// // //     <table style={tableStyles}>
// // //       <thead>
// // //         <tr>
// // //           <th style={thStyles}>Input Fraction</th>
// // //           <th style={thStyles}>Normalized</th>
// // //           <th style={thStyles}>Decimal</th>
// // //           <th style={thStyles}>Percentage</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         <tr>
// // //           <td style={tdStyles}>{originalNum}/{originalDenom}</td>
// // //           <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
// // //           <td style={tdStyles}>{decimal.toFixed(3)}</td>
// // //           <td style={tdStyles}>{percentage}%</td>
// // //         </tr>
// // //       </tbody>
// // //     </table>
// // //   );
// // // };

// // // // Keep the existing FractionCircle component
// // // const FractionCircle = ({ numerator, denominator }) => {
// // //   const calculateGCD = (a, b) => {
// // //     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
// // //   };

// // //   const gcd = calculateGCD(numerator, denominator);
// // //   const normalizedNumerator = numerator / gcd;
// // //   const normalizedDenominator = denominator / gcd;

// // //   const getSize = () => {
// // //     if (normalizedDenominator <= 25) return 200;
// // //     if (normalizedDenominator <= 50) return 300;
// // //     if (normalizedDenominator <= 100) return 400;
// // //     return 500;
// // //   };

// // //   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
// // //   const remainingNumerator = normalizedNumerator % normalizedDenominator;
// // //   const size = getSize();

// // //   return (
// // //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// // //       <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '2rem', justifyContent: 'center'}}>
// // //         {wholeCircles > 0 && (
// // //           <div>
// // //             <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// // //           </div>
// // //         )}
// // //         {remainingNumerator > 0 && wholeCircles > 0 && (
// // //           <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
// // //         )}
// // //         {remainingNumerator > 0 && (
// // //           <div>
// // //             <CircleDisplay 
// // //               size={size} 
// // //               numerator={remainingNumerator} 
// // //               denominator={normalizedDenominator} 
// // //             />
// // //           </div>
// // //         )}
// // //       </div>
// // //       <DataTable 
// // //         originalNum={numerator}
// // //         originalDenom={denominator}
// // //         normalizedNum={normalizedNumerator}
// // //         normalizedDenom={normalizedDenominator}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
// // //   const [numerator, setNumerator] = useState(initialNumerator || 1);
// // //   const [denominator, setDenominator] = useState(initialDenominator || 4);
// // //   const [error, setError] = useState('');

// // //   // Auto-render on input change
// // //   useEffect(() => {
// // //     if (numerator && denominator) {
// // //       // Check for division by zero
// // //       if (Number(denominator) === 0) {
// // //         setError('Denominator cannot be zero');
// // //         return;
// // //       }
      
// // //       if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
// // //         setError('Both numerator and denominator must be integers');
// // //         return;
// // //       }
      
// // //       setError('');
// // //       onSubmit(Number(numerator), Number(denominator));
// // //     }
// // //   }, [numerator, denominator, onSubmit]);

// // //   const formStyles = {
// // //     width: '100%',
// // //     maxWidth: '400px',
// // //     marginBottom: '1rem',
// // //     padding: '1rem',
// // //     border: '1px solid #e5e7eb',
// // //     borderRadius: '8px',
// // //     backgroundColor: '#f9fafb'
// // //   };

// // //   const formContentStyles = {
// // //     display: 'flex',
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     gap: '1rem'
// // //   };

// // //   const inputGroupStyles = {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '0.5rem'
// // //   };

// // //   const labelStyles = {
// // //     fontSize: '14px',
// // //     fontWeight: '500'
// // //   };

// // //   const inputStyles = {
// // //     padding: '0.5rem',
// // //     border: '1px solid #d1d5db',
// // //     borderRadius: '4px',
// // //     width: '70px',
// // //     height: '20px'
// // //   };

// // //   const errorStyles = {
// // //     color: 'red',
// // //     fontSize: '14px',
// // //     marginBottom: '0.5rem'
// // //   };

// // //   const presetButtonStyles = {
// // //     padding: '0.25rem 0.5rem',
// // //     backgroundColor: '#3b82f6',
// // //     color: 'white',
// // //     border: '1px solid #2563eb',
// // //     borderRadius: '4px',
// // //     margin: '0.25rem',
// // //     cursor: 'pointer',
// // //     fontWeight: 'bold'
// // //   };

// // //   return (
// // //     <div style={formStyles}>
// // //       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Input Values Here</h3>
// // //       {error && <div style={errorStyles}>{error}</div>}
      
// // //       <div style={formContentStyles}>
// // //         <div style={inputGroupStyles}>
// // //           <label htmlFor="numerator" style={labelStyles}>Numerator</label>
// // //           <input
// // //             id="numerator"
// // //             type="number"
// // //             value={numerator}
// // //             onChange={(e) => setNumerator(e.target.value)}
// // //             style={inputStyles}
// // //             min="0"
// // //           />
// // //         </div>
        
// // //         <div style={inputGroupStyles}>
// // //           <label htmlFor="denominator" style={labelStyles}>Denominator</label>
// // //           <input
// // //             id="denominator"
// // //             type="number"
// // //             value={denominator}
// // //             onChange={(e) => setDenominator(e.target.value)}
// // //             style={inputStyles}
// // //             min="1"
// // //           />
// // //         </div>
// // //       </div>
      
// // //       <div style={{marginTop: '0.5rem'}}>
// // //         <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
// // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(2); }}>1/2</button>
// // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(3); }}>1/3</button>
// // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(2); setDenominator(3); }}>2/3</button>
// // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(4); }}>1/4</button>
// // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(4); }}>3/4</button>
// // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(5); }}>1/5</button>
// // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(5); }}>3/5</button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Add a new main App component to manage state
// // // const FractionCircleApp = () => {
// // //   const [fractionState, setFractionState] = useState({
// // //     numerator: 3,
// // //     denominator: 4,
// // //     showVisualization: true
// // //   });

// // //   const handleFractionSubmit = (numerator, denominator) => {
// // //     setFractionState({
// // //       numerator,
// // //       denominator,
// // //       showVisualization: true
// // //     });
// // //   };

// // //   return (
// // //     <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// // //       {/* <h1 style={{marginBottom: '2rem'}}>Fraction Circle Visualizer</h1> */}
// // //       <FractionInputForm 
// // //         onSubmit={handleFractionSubmit}
// // //         initialNumerator={fractionState.numerator}
// // //         initialDenominator={fractionState.denominator}
// // //       />
      
// // //       {fractionState.showVisualization && (
// // //         <FractionCircle 
// // //           numerator={fractionState.numerator} 
// // //           denominator={fractionState.denominator} 
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FractionCircleApp;


// // import React, { useState, useEffect } from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';

// // // Keep the existing CircleDisplay component
// // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// //   const radius = size * 0.45;
// //   const center = size / 2;
// //   const labelRadius = radius * 0.7;

// //   const getFontSize = () => {
// //     if (denominator <= 25) return 12;
// //     if (denominator <= 50) return 10;
// //     if (denominator <= 100) return 8;
// //     return 6;
// //   };

// //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// //     return {
// //       x: centerX + (radius * Math.cos(angleInRadians)),
// //       y: centerY + (radius * Math.sin(angleInRadians))
// //     };
// //   };

// //   const getDivisionLines = () => {
// //     if (isFullCircle) return null;
// //     const lines = [];
// //     const angleStep = 360 / denominator;
    
// //     for (let i = 0; i < denominator; i++) {
// //       const angle = i * angleStep;
// //       const radians = (angle - 90) * Math.PI / 180;
// //       const x2 = center + radius * Math.cos(radians);
// //       const y2 = center + radius * Math.sin(radians);
      
// //       lines.push(
// //         <line
// //           key={i}
// //           x1={center}
// //           y1={center}
// //           x2={x2}
// //           y2={y2}
// //           stroke="black"
// //           strokeWidth="0.5"
// //           strokeOpacity="0.5"
// //         />
// //       );
// //     }
// //     return lines;
// //   };

// //   const getSegmentNumbers = () => {
// //     if (isFullCircle) return null;
// //     const numbers = [];
// //     const angleStep = 360 / denominator;
// //     const fontSize = getFontSize();
    
// //     for (let i = 0; i < denominator; i++) {
// //       const angle = i * angleStep + (angleStep / 2);
// //       const radians = (angle - 90) * Math.PI / 180;
// //       const x = center + labelRadius * Math.cos(radians);
// //       const y = center + labelRadius * Math.sin(radians);
      
// //       numbers.push(
// //         <text
// //           key={i}
// //           x={x}
// //           y={y}
// //           textAnchor="middle"
// //           dominantBaseline="middle"
// //           style={{ fontSize: `${fontSize}px` }}
// //         >
// //           {i + 1}
// //         </text>
// //       );
// //     }
// //     return numbers;
// //   };

// //   const getFilledSegments = () => {
// //     if (isFullCircle) return null;
// //     const segments = [];
// //     const angleStep = 360 / denominator;
    
// //     for (let i = 0; i < numerator; i++) {
// //       const startAngle = i * angleStep;
// //       const endAngle = (i + 1) * angleStep;
      
// //       const start = polarToCartesian(center, center, radius, endAngle);
// //       const end = polarToCartesian(center, center, radius, startAngle);
// //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// //       const path = [
// //         'M', center, center,
// //         'L', start.x, start.y,
// //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// //         'Z'
// //       ].join(' ');
      
// //       segments.push(
// //         <path
// //           key={i}
// //           d={path}
// //           fill="#3b82f6"
// //           fillOpacity="0.3"
// //         />
// //       );
// //     }
// //     return segments;
// //   };

// //   return (
// //     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
// //       {isFullCircle && (
// //         <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
// //           {numerator} full circle{numerator > 1 ? 's' : ''}
// //         </div>
// //       )}
// //       <svg width={size} height={size} aria-label={isFullCircle ? `${numerator} whole circles` : `${numerator}/${denominator} fraction circle`}>
// //         <circle
// //           cx={center}
// //           cy={center}
// //           r={radius}
// //           fill={isFullCircle ? "#3b82f6" : "white"}
// //           fillOpacity={isFullCircle ? 0.3 : 1}
// //           stroke="black"
// //           strokeWidth="1"
// //         />
// //         {getFilledSegments()}
// //         {getDivisionLines()}
// //         {getSegmentNumbers()}
// //       </svg>
// //     </div>
// //   );
// // };

// // // Keep the existing DataTable component
// // const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
// //   const decimal = originalNum / originalDenom;
// //   const percentage = (decimal * 100).toFixed(2);
  
// //   const tableStyles = {
// //     width: '100%',
// //     maxWidth: '600px',
// //     marginTop: '2rem',
// //     borderCollapse: 'collapse',
// //     border: '1px solid #e5e7eb',
// //     borderRadius: '8px',
// //     overflow: 'hidden'
// //   };

// //   const thStyles = {
// //     padding: '12px 24px',
// //     textAlign: 'left',
// //     fontSize: '12px',
// //     fontWeight: '500',
// //     textTransform: 'uppercase',
// //     backgroundColor: '#f9fafb',
// //     color: '#6b7280',
// //     borderBottom: '1px solid #e5e7eb'
// //   };

// //   const tdStyles = {
// //     padding: '16px 24px',
// //     fontSize: '14px',
// //     color: '#111827',
// //     borderBottom: '1px solid #e5e7eb'
// //   };

// //   return (
// //     <table style={tableStyles}>
// //       <thead>
// //         <tr>
// //           <th style={thStyles}>Input Fraction</th>
// //           <th style={thStyles}>Normalized</th>
// //           <th style={thStyles}>Decimal</th>
// //           <th style={thStyles}>Percentage</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         <tr>
// //           <td style={tdStyles}>{originalNum}/{originalDenom}</td>
// //           <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
// //           <td style={tdStyles}>{decimal.toFixed(3)}</td>
// //           <td style={tdStyles}>{percentage}%</td>
// //         </tr>
// //       </tbody>
// //     </table>
// //   );
// // };

// // // Keep the existing FractionCircle component
// // const FractionCircle = ({ numerator, denominator }) => {
// //   const calculateGCD = (a, b) => {
// //     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
// //   };

// //   const gcd = calculateGCD(numerator, denominator);
// //   const normalizedNumerator = numerator / gcd;
// //   const normalizedDenominator = denominator / gcd;

// //   const getSize = () => {
// //     if (normalizedDenominator <= 25) return 200;
// //     if (normalizedDenominator <= 50) return 300;
// //     if (normalizedDenominator <= 100) return 400;
// //     return 500;
// //   };

// //   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
// //   const remainingNumerator = normalizedNumerator % normalizedDenominator;
// //   const size = getSize();

// //   return (
// //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// //       <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '2rem', justifyContent: 'center'}}>
// //         {wholeCircles > 0 && (
// //           <div>
// //             <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// //           </div>
// //         )}
// //         {remainingNumerator > 0 && wholeCircles > 0 && (
// //           <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
// //         )}
// //         {remainingNumerator > 0 && (
// //           <div>
// //             <CircleDisplay 
// //               size={size} 
// //               numerator={remainingNumerator} 
// //               denominator={normalizedDenominator} 
// //             />
// //           </div>
// //         )}
// //       </div>
// //       <DataTable 
// //         originalNum={numerator}
// //         originalDenom={denominator}
// //         normalizedNum={normalizedNumerator}
// //         normalizedDenom={normalizedDenominator}
// //       />
// //     </div>
// //   );
// // };

// // const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
// //   const [numerator, setNumerator] = useState(initialNumerator || 1);
// //   const [denominator, setDenominator] = useState(initialDenominator || 4);
// //   const [error, setError] = useState('');

// //   // Auto-render on input change
// //   useEffect(() => {
// //     if (numerator && denominator) {
// //       // Check for division by zero
// //       if (Number(denominator) === 0) {
// //         setError('Denominator cannot be zero');
// //         return;
// //       }
      
// //       if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
// //         setError('Both numerator and denominator must be integers');
// //         return;
// //       }
      
// //       setError('');
// //       onSubmit(Number(numerator), Number(denominator));
// //     }
// //   }, [numerator, denominator, onSubmit]);

// //   const formStyles = {
// //     width: '100%',
// //     maxWidth: '400px',
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     border: '1px solid #e5e7eb',
// //     borderRadius: '8px',
// //     backgroundColor: '#f9fafb'
// //   };

// //   const formContentStyles = {
// //     display: 'flex',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: '1rem'
// //   };

// //   const inputGroupStyles = {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '0.5rem'
// //   };

// //   const labelStyles = {
// //     fontSize: '14px',
// //     fontWeight: '500'
// //   };

// //   const inputStyles = {
// //     padding: '0.5rem',
// //     border: '1px solid #d1d5db',
// //     borderRadius: '4px',
// //     width: '70px',
// //     height: '20px'
// //   };

// //   const errorStyles = {
// //     color: 'red',
// //     fontSize: '14px',
// //     marginBottom: '0.5rem'
// //   };

// //   const presetButtonStyles = {
// //     padding: '0.25rem 0.5rem',
// //     backgroundColor: '#3b82f6',
// //     color: 'white',
// //     border: '1px solid #2563eb',
// //     borderRadius: '4px',
// //     margin: '0.25rem',
// //     cursor: 'pointer',
// //     fontWeight: 'bold'
// //   };

// //   return (
// //     <div style={formStyles}>
// //       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Input Values Here</h3>
// //       {error && <div style={errorStyles}>{error}</div>}
      
// //       <div style={formContentStyles}>
// //         <div style={inputGroupStyles}>
// //           <label htmlFor="numerator" style={labelStyles}>Numerator</label>
// //           <input
// //             id="numerator"
// //             type="number"
// //             value={numerator}
// //             onChange={(e) => setNumerator(e.target.value)}
// //             style={inputStyles}
// //             min="0"
// //           />
// //         </div>
        
// //         <div style={inputGroupStyles}>
// //           <label htmlFor="denominator" style={labelStyles}>Denominator</label>
// //           <input
// //             id="denominator"
// //             type="number"
// //             value={denominator}
// //             onChange={(e) => setDenominator(e.target.value)}
// //             style={inputStyles}
// //             min="1"
// //           />
// //         </div>
// //       </div>
      
// //       <div style={{marginTop: '0.5rem'}}>
// //         <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
// //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(2); }}>1/2</button>
// //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(3); }}>1/3</button>
// //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(2); setDenominator(3); }}>2/3</button>
// //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(4); }}>1/4</button>
// //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(4); }}>3/4</button>
// //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(5); }}>1/5</button>
// //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(5); }}>3/5</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ExplanationPanel component
// // const ExplanationPanel = ({ numerator, denominator, customContent = null }) => {
// //   const decimal = (numerator / denominator).toFixed(4);
// //   const percentage = ((numerator / denominator) * 100).toFixed(2);
  
// //   const calculateGCD = (a, b) => {
// //     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
// //   };

// //   const gcd = calculateGCD(numerator, denominator);
// //   const simplifiedNum = numerator / gcd;
// //   const simplifiedDenom = denominator / gcd;

// //   // Default content if none provided
// //   const getDefaultContent = () => {
// //     const isImproper = numerator > denominator;
// //     const wholeNumber = Math.floor(numerator / denominator);
// //     const remainder = numerator % denominator;
    
// //     return `
// // # Understanding Your Fraction

// // ## What You're Seeing

// // The circle visualization shows the **fraction ${numerator}/${denominator}**, which represents ${numerator} parts out of ${denominator} equal parts.

// // ${isImproper ? `Since this is an improper fraction (numerator > denominator), it equals ${wholeNumber} whole circle${wholeNumber > 1 ? 's' : ''}${remainder > 0 ? ` plus ${remainder}/${denominator}` : ''}.` : ''}

// // ## Fraction in Math

// // A **fraction** represents a part of a whole. In the fraction ${numerator}/${denominator}:
// // - **${numerator}** is the numerator (parts we have)
// // - **${denominator}** is the denominator (total equal parts)

// // ## Decimal and Percentage Forms

// // **Fraction to decimal**: ${numerator}/${denominator} = ${decimal}

// // **As a percentage**: ${percentage}%

// // ## Equivalent Fractions

// // ${numerator !== simplifiedNum || denominator !== simplifiedDenom 
// //   ? `Your fraction ${numerator}/${denominator} simplifies to **${simplifiedNum}/${simplifiedDenom}** by dividing both parts by ${gcd}.`
// //   : `Your fraction ${numerator}/${denominator} is already in its simplest form.`
// // }

// // Some equivalent fractions include:
// // - ${numerator}/${denominator}
// // - ${numerator * 2}/${denominator * 2}
// // - ${numerator * 3}/${denominator * 3}

// // ## Converting Fractions to Decimals

// // To convert any fraction to decimal:
// // 1. Divide the numerator by the denominator
// // 2. ${numerator} ÷ ${denominator} = ${decimal}

// // This visualization helps you understand how **fractions**, **decimals**, and **percentages** all represent the same mathematical concept in different forms.
// //     `;
// //   };

// //   const content = customContent || getDefaultContent();

// //   const panelStyles = {
// //     backgroundColor: '#f8f9fa',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     height: 'fit-content',
// //     fontSize: '16px',
// //     lineHeight: '1.5',
// //     borderLeft: '4px solid #3b82f6'
// //   };

// //   return (
// //     <div style={panelStyles}>
// //       {processContent(content)}
// //     </div>
// //   );
// // };

// // // Updated main App component with side-by-side layout
// // const FractionCircleApp = ({ explanationContent = null }) => {
// //   const [fractionState, setFractionState] = useState({
// //     numerator: 3,
// //     denominator: 4,
// //     showVisualization: true
// //   });

// //   const handleFractionSubmit = (numerator, denominator) => {
// //     setFractionState({
// //       numerator,
// //       denominator,
// //       showVisualization: true
// //     });
// //   };

// //   const containerStyles = {
// //     padding: '20px',
// //     backgroundColor: '#fff',
// //     borderRadius: '12px',
// //     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //     minHeight: '500px'
// //   };

// //   const mainContentStyles = {
// //     display: 'flex',
// //     gap: '30px',
// //     alignItems: 'start'
// //   };

// //   const visualizationSectionStyles = {
// //     flex: '1',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     paddingRight: '15px'
// //   };

// //   const explanationSectionStyles = {
// //     flex: '1',
// //     paddingLeft: '15px',
// //     borderLeft: '1px solid #e0e0e0'
// //   };

// //   return (
// //     <>
// //       <style>
// //         {`
// //           .explanation-content h1 {
// //             font-size: 24px !important;
// //             font-weight: bold !important;
// //             margin: 20px 0 15px 0 !important;
// //             color: #333 !important;
// //             line-height: 1.3 !important;
// //           }
// //           .explanation-content h2 {
// //             font-size: 20px !important;
// //             font-weight: bold !important;
// //             margin: 18px 0 12px 0 !important;
// //             color: #444 !important;
// //             line-height: 1.3 !important;
// //           }
// //           .explanation-content h3 {
// //             font-size: 18px !important;
// //             font-weight: bold !important;
// //             margin: 15px 0 10px 0 !important;
// //             color: #555 !important;
// //             line-height: 1.3 !important;
// //           }
// //           .explanation-content p {
// //             font-size: 16px !important;
// //             line-height: 1.5 !important;
// //             margin: 8px 0 !important;
// //             color: #666 !important;
// //           }
// //           .explanation-content ul, .explanation-content ol {
// //             margin: 8px 0 !important;
// //             padding-left: 20px !important;
// //           }
// //           .explanation-content li {
// //             font-size: 16px !important;
// //             line-height: 1.5 !important;
// //             margin: 4px 0 !important;
// //             color: #666 !important;
// //           }
// //           .explanation-content strong {
// //             font-weight: bold !important;
// //             color: #333 !important;
// //           }
// //         `}
// //       </style>
// //       <div style={containerStyles}>
// //         <div style={mainContentStyles}>
// //           <div style={visualizationSectionStyles}>
// //             <FractionInputForm 
// //               onSubmit={handleFractionSubmit}
// //               initialNumerator={fractionState.numerator}
// //               initialDenominator={fractionState.denominator}
// //             />
            
// //             {fractionState.showVisualization && (
// //               <FractionCircle 
// //                 numerator={fractionState.numerator} 
// //                 denominator={fractionState.denominator} 
// //               />
// //             )}
// //           </div>
          
// //           <div style={explanationSectionStyles}>
// //             <div className="explanation-content">
// //               <ExplanationPanel 
// //                 numerator={fractionState.numerator}
// //                 denominator={fractionState.denominator}
// //                 customContent={explanationContent}
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default FractionCircleApp;


// import React, { useState, useEffect } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// // Keep the existing CircleDisplay component
// const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
//   const radius = size * 0.45;
//   const center = size / 2;
//   const labelRadius = radius * 0.7;

//   const getFontSize = () => {
//     if (denominator <= 25) return 12;
//     if (denominator <= 50) return 10;
//     if (denominator <= 100) return 8;
//     return 6;
//   };

//   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
//     return {
//       x: centerX + (radius * Math.cos(angleInRadians)),
//       y: centerY + (radius * Math.sin(angleInRadians))
//     };
//   };

//   const getDivisionLines = () => {
//     if (isFullCircle) return null;
//     const lines = [];
//     const angleStep = 360 / denominator;
    
//     for (let i = 0; i < denominator; i++) {
//       const angle = i * angleStep;
//       const radians = (angle - 90) * Math.PI / 180;
//       const x2 = center + radius * Math.cos(radians);
//       const y2 = center + radius * Math.sin(radians);
      
//       lines.push(
//         <line
//           key={i}
//           x1={center}
//           y1={center}
//           x2={x2}
//           y2={y2}
//           stroke="black"
//           strokeWidth="0.5"
//           strokeOpacity="0.5"
//         />
//       );
//     }
//     return lines;
//   };

//   const getSegmentNumbers = () => {
//     if (isFullCircle) return null;
//     const numbers = [];
//     const angleStep = 360 / denominator;
//     const fontSize = getFontSize();
    
//     for (let i = 0; i < denominator; i++) {
//       const angle = i * angleStep + (angleStep / 2);
//       const radians = (angle - 90) * Math.PI / 180;
//       const x = center + labelRadius * Math.cos(radians);
//       const y = center + labelRadius * Math.sin(radians);
      
//       numbers.push(
//         <text
//           key={i}
//           x={x}
//           y={y}
//           textAnchor="middle"
//           dominantBaseline="middle"
//           style={{ fontSize: `${fontSize}px` }}
//         >
//           {i + 1}
//         </text>
//       );
//     }
//     return numbers;
//   };

//   const getFilledSegments = () => {
//     if (isFullCircle) return null;
//     const segments = [];
//     const angleStep = 360 / denominator;
    
//     for (let i = 0; i < numerator; i++) {
//       const startAngle = i * angleStep;
//       const endAngle = (i + 1) * angleStep;
      
//       const start = polarToCartesian(center, center, radius, endAngle);
//       const end = polarToCartesian(center, center, radius, startAngle);
//       const largeArcFlag = angleStep <= 180 ? 0 : 1;

//       const path = [
//         'M', center, center,
//         'L', start.x, start.y,
//         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
//         'Z'
//       ].join(' ');
      
//       segments.push(
//         <path
//           key={i}
//           d={path}
//           fill="#3b82f6"
//           fillOpacity="0.3"
//         />
//       );
//     }
//     return segments;
//   };

//   return (
//     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//       {isFullCircle && (
//         <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
//           {numerator} full circle{numerator > 1 ? 's' : ''}
//         </div>
//       )}
//       <svg width={size} height={size} aria-label={isFullCircle ? `${numerator} whole circles` : `${numerator}/${denominator} fraction circle`}>
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill={isFullCircle ? "#3b82f6" : "white"}
//           fillOpacity={isFullCircle ? 0.3 : 1}
//           stroke="black"
//           strokeWidth="1"
//         />
//         {getFilledSegments()}
//         {getDivisionLines()}
//         {getSegmentNumbers()}
//       </svg>
//     </div>
//   );
// };

// // Keep the existing DataTable component
// const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
//   const decimal = originalNum / originalDenom;
//   const percentage = (decimal * 100).toFixed(2);
  
//   const tableStyles = {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '2rem',
//     borderCollapse: 'collapse',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//     overflow: 'hidden'
//   };

//   const thStyles = {
//     padding: '12px 24px',
//     textAlign: 'left',
//     fontSize: '12px',
//     fontWeight: '500',
//     textTransform: 'uppercase',
//     backgroundColor: '#f9fafb',
//     color: '#6b7280',
//     borderBottom: '1px solid #e5e7eb'
//   };

//   const tdStyles = {
//     padding: '16px 24px',
//     fontSize: '14px',
//     color: '#111827',
//     borderBottom: '1px solid #e5e7eb'
//   };

//   return (
//     <table style={tableStyles}>
//       <thead>
//         <tr>
//           <th style={thStyles}>Input Fraction</th>
//           <th style={thStyles}>Normalized</th>
//           <th style={thStyles}>Decimal</th>
//           <th style={thStyles}>Percentage</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td style={tdStyles}>{originalNum}/{originalDenom}</td>
//           <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
//           <td style={tdStyles}>{decimal.toFixed(3)}</td>
//           <td style={tdStyles}>{percentage}%</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// // Keep the existing FractionCircle component
// const FractionCircle = ({ numerator, denominator }) => {
//   const calculateGCD = (a, b) => {
//     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
//   };

//   const gcd = calculateGCD(numerator, denominator);
//   const normalizedNumerator = numerator / gcd;
//   const normalizedDenominator = denominator / gcd;

//   const getSize = () => {
//     if (normalizedDenominator <= 25) return 200;
//     if (normalizedDenominator <= 50) return 300;
//     if (normalizedDenominator <= 100) return 400;
//     return 500;
//   };

//   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
//   const remainingNumerator = normalizedNumerator % normalizedDenominator;
//   const size = getSize();

//   return (
//     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//       <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '2rem', justifyContent: 'center'}}>
//         {wholeCircles > 0 && (
//           <div>
//             <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
//           </div>
//         )}
//         {remainingNumerator > 0 && wholeCircles > 0 && (
//           <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
//         )}
//         {remainingNumerator > 0 && (
//           <div>
//             <CircleDisplay 
//               size={size} 
//               numerator={remainingNumerator} 
//               denominator={normalizedDenominator} 
//             />
//           </div>
//         )}
//       </div>
//       <DataTable 
//         originalNum={numerator}
//         originalDenom={denominator}
//         normalizedNum={normalizedNumerator}
//         normalizedDenom={normalizedDenominator}
//       />
//     </div>
//   );
// };

// const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
//   const [numerator, setNumerator] = useState(initialNumerator || 1);
//   const [denominator, setDenominator] = useState(initialDenominator || 4);
//   const [error, setError] = useState('');

//   // Auto-render on input change
//   useEffect(() => {
//     if (numerator && denominator) {
//       // Check for division by zero
//       if (Number(denominator) === 0) {
//         setError('Denominator cannot be zero');
//         return;
//       }
      
//       if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
//         setError('Both numerator and denominator must be integers');
//         return;
//       }
      
//       setError('');
//       onSubmit(Number(numerator), Number(denominator));
//     }
//   }, [numerator, denominator, onSubmit]);

//   const formStyles = {
//     width: '100%',
//     maxWidth: '400px',
//     marginBottom: '1rem',
//     padding: '1rem',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//     backgroundColor: '#f9fafb'
//   };

//   const formContentStyles = {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '1rem'
//   };

//   const inputGroupStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '0.5rem'
//   };

//   const labelStyles = {
//     fontSize: '14px',
//     fontWeight: '500'
//   };

//   const inputStyles = {
//     padding: '0.5rem',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//     width: '70px',
//     height: '20px'
//   };

//   const errorStyles = {
//     color: 'red',
//     fontSize: '14px',
//     marginBottom: '0.5rem'
//   };

//   const presetButtonStyles = {
//     padding: '0.25rem 0.5rem',
//     backgroundColor: '#3b82f6',
//     color: 'white',
//     border: '1px solid #2563eb',
//     borderRadius: '4px',
//     margin: '0.25rem',
//     cursor: 'pointer',
//     fontWeight: 'bold'
//   };

//   return (
//     <div style={formStyles}>
//       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Input Values Here</h3>
//       {error && <div style={errorStyles}>{error}</div>}
      
//       <div style={formContentStyles}>
//         <div style={inputGroupStyles}>
//           <label htmlFor="numerator" style={labelStyles}>Numerator</label>
//           <input
//             id="numerator"
//             type="number"
//             value={numerator}
//             onChange={(e) => setNumerator(e.target.value)}
//             style={inputStyles}
//             min="0"
//           />
//         </div>
        
//         <div style={inputGroupStyles}>
//           <label htmlFor="denominator" style={labelStyles}>Denominator</label>
//           <input
//             id="denominator"
//             type="number"
//             value={denominator}
//             onChange={(e) => setDenominator(e.target.value)}
//             style={inputStyles}
//             min="1"
//           />
//         </div>
//       </div>
      
//       <div style={{marginTop: '0.5rem'}}>
//         <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(2); }}>1/2</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(3); }}>1/3</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(2); setDenominator(3); }}>2/3</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(4); }}>1/4</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(4); }}>3/4</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(5); }}>1/5</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(5); }}>3/5</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ExplanationPanel component
// const ExplanationPanel = ({ numerator, denominator, customContent = null }) => {
//   const decimal = (numerator / denominator).toFixed(4);
//   const percentage = ((numerator / denominator) * 100).toFixed(2);
  
//   const calculateGCD = (a, b) => {
//     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
//   };

//   const gcd = calculateGCD(numerator, denominator);
//   const simplifiedNum = numerator / gcd;
//   const simplifiedDenom = denominator / gcd;

//   // Default content if none provided
//   const getDefaultContent = () => {
//     const isImproper = numerator > denominator;
//     const wholeNumber = Math.floor(numerator / denominator);
//     const remainder = numerator % denominator;
    
//     return `
// # Understanding Your Fraction

// ## What You're Seeing

// The circle visualization shows the **fraction ${numerator}/${denominator}**, which represents ${numerator} parts out of ${denominator} equal parts.

// ${isImproper ? `Since this is an improper fraction (numerator > denominator), it equals ${wholeNumber} whole circle${wholeNumber > 1 ? 's' : ''}${remainder > 0 ? ` plus ${remainder}/${denominator}` : ''}.` : ''}

// ## Fraction in Math

// A **fraction** represents a part of a whole. In the fraction ${numerator}/${denominator}:
// - **${numerator}** is the numerator (parts we have)
// - **${denominator}** is the denominator (total equal parts)

// ## Decimal and Percentage Forms

// **Fraction to decimal**: ${numerator}/${denominator} = ${decimal}

// **As a percentage**: ${percentage}%

// ## Equivalent Fractions

// ${numerator !== simplifiedNum || denominator !== simplifiedDenom 
//   ? `Your fraction ${numerator}/${denominator} simplifies to **${simplifiedNum}/${simplifiedDenom}** by dividing both parts by ${gcd}.`
//   : `Your fraction ${numerator}/${denominator} is already in its simplest form.`
// }

// Some equivalent fractions include:
// - ${numerator}/${denominator}
// - ${numerator * 2}/${denominator * 2}
// - ${numerator * 3}/${denominator * 3}

// ## Converting Fractions to Decimals

// To convert any fraction to decimal:
// 1. Divide the numerator by the denominator
// 2. ${numerator} ÷ ${denominator} = ${decimal}

// This visualization helps you understand how **fractions**, **decimals**, and **percentages** all represent the same mathematical concept in different forms.
//     `;
//   };

//   const content = customContent || getDefaultContent();

//   const panelStyles = {
//     backgroundColor: '#f8f9fa',
//     padding: '20px',
//     borderRadius: '8px',
//     height: 'fit-content',
//     fontSize: '16px',
//     lineHeight: '1.5',
//     borderLeft: '4px solid #3b82f6'
//   };

//   return (
//     <div style={panelStyles}>
//       {processContent(content)}
//     </div>
//   );
// };

// // Updated main App component with side-by-side layout
// const FractionCircleApp = ({ explanationContent = null }) => {
//   const [fractionState, setFractionState] = useState({
//     numerator: 3,
//     denominator: 4,
//     showVisualization: true
//   });

//   const handleFractionSubmit = (numerator, denominator) => {
//     setFractionState({
//       numerator,
//       denominator,
//       showVisualization: true
//     });
//   };

//   const containerStyles = {
//     padding: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     minHeight: '500px'
//   };

//   const mainContentStyles = {
//     display: 'flex',
//     gap: '30px',
//     alignItems: 'start'
//   };

//   const visualizationSectionStyles = {
//     flex: '1',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingRight: '15px'
//   };

//   const explanationSectionStyles = {
//     flex: '1',
//     paddingLeft: '15px',
//     borderLeft: '1px solid #e0e0e0'
//   };

//   return (
//     <>
//       <style>
//         {`
//           .explanation-content h1 {
//             font-size: 22px !important;
//             font-weight: bold !important;
//             margin: 6px 0 4px 0 !important;
//             color: #333 !important;
//             line-height: 1.1 !important;
//           }
//           .explanation-content h2 {
//             font-size: 18px !important;
//             font-weight: bold !important;
//             margin: 5px 0 3px 0 !important;
//             color: #444 !important;
//             line-height: 1.1 !important;
//           }
//           .explanation-content h3 {
//             font-size: 16px !important;
//             font-weight: bold !important;
//             margin: 4px 0 2px 0 !important;
//             color: #555 !important;
//             line-height: 1.1 !important;
//           }
//           .explanation-content p {
//             font-size: 15px !important;
//             line-height: 1.2 !important;
//             margin: 2px 0 3px 0 !important;
//             color: #666 !important;
//           }
//           .explanation-content ul, .explanation-content ol {
//             margin: 2px 0 3px 0 !important;
//             padding-left: 18px !important;
//           }
//           .explanation-content li {
//             font-size: 15px !important;
//             line-height: 1.2 !important;
//             margin: 1px 0 !important;
//             color: #666 !important;
//           }
//           .explanation-content strong {
//             font-weight: bold !important;
//             color: #333 !important;
//           }
//         `}
//       </style>
//       <div style={containerStyles}>
//         <div style={mainContentStyles}>
//           <div style={visualizationSectionStyles}>
//             <FractionInputForm 
//               onSubmit={handleFractionSubmit}
//               initialNumerator={fractionState.numerator}
//               initialDenominator={fractionState.denominator}
//             />
            
//             {fractionState.showVisualization && (
//               <FractionCircle 
//                 numerator={fractionState.numerator} 
//                 denominator={fractionState.denominator} 
//               />
//             )}
//           </div>
          
//           <div style={explanationSectionStyles}>
//             <div className="explanation-content">
//               <ExplanationPanel 
//                 numerator={fractionState.numerator}
//                 denominator={fractionState.denominator}
//                 customContent={explanationContent}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FractionCircleApp;


// import React, { useState, useEffect } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// // Keep the existing CircleDisplay component
// const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
//   const radius = size * 0.45;
//   const center = size / 2;
//   const labelRadius = radius * 0.7;

//   const getFontSize = () => {
//     if (denominator <= 25) return 12;
//     if (denominator <= 50) return 10;
//     if (denominator <= 100) return 8;
//     return 6;
//   };

//   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
//     return {
//       x: centerX + (radius * Math.cos(angleInRadians)),
//       y: centerY + (radius * Math.sin(angleInRadians))
//     };
//   };

//   const getDivisionLines = () => {
//     if (isFullCircle) return null;
//     const lines = [];
//     const angleStep = 360 / denominator;
    
//     for (let i = 0; i < denominator; i++) {
//       const angle = i * angleStep;
//       const radians = (angle - 90) * Math.PI / 180;
//       const x2 = center + radius * Math.cos(radians);
//       const y2 = center + radius * Math.sin(radians);
      
//       lines.push(
//         <line
//           key={i}
//           x1={center}
//           y1={center}
//           x2={x2}
//           y2={y2}
//           stroke="black"
//           strokeWidth="0.5"
//           strokeOpacity="0.5"
//         />
//       );
//     }
//     return lines;
//   };

//   const getSegmentNumbers = () => {
//     if (isFullCircle) return null;
//     const numbers = [];
//     const angleStep = 360 / denominator;
//     const fontSize = getFontSize();
    
//     for (let i = 0; i < denominator; i++) {
//       const angle = i * angleStep + (angleStep / 2);
//       const radians = (angle - 90) * Math.PI / 180;
//       const x = center + labelRadius * Math.cos(radians);
//       const y = center + labelRadius * Math.sin(radians);
      
//       numbers.push(
//         <text
//           key={i}
//           x={x}
//           y={y}
//           textAnchor="middle"
//           dominantBaseline="middle"
//           style={{ fontSize: `${fontSize}px` }}
//         >
//           {i + 1}
//         </text>
//       );
//     }
//     return numbers;
//   };

//   const getFilledSegments = () => {
//     if (isFullCircle) return null;
//     const segments = [];
//     const angleStep = 360 / denominator;
    
//     for (let i = 0; i < numerator; i++) {
//       const startAngle = i * angleStep;
//       const endAngle = (i + 1) * angleStep;
      
//       const start = polarToCartesian(center, center, radius, endAngle);
//       const end = polarToCartesian(center, center, radius, startAngle);
//       const largeArcFlag = angleStep <= 180 ? 0 : 1;

//       const path = [
//         'M', center, center,
//         'L', start.x, start.y,
//         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
//         'Z'
//       ].join(' ');
      
//       segments.push(
//         <path
//           key={i}
//           d={path}
//           fill="#3b82f6"
//           fillOpacity="0.3"
//         />
//       );
//     }
//     return segments;
//   };

//   return (
//     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//       {isFullCircle && (
//         <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
//           {numerator} full circle{numerator > 1 ? 's' : ''}
//         </div>
//       )}
//       <svg width={size} height={size} aria-label={isFullCircle ? `${numerator} whole circles` : `${numerator}/${denominator} fraction circle`}>
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill={isFullCircle ? "#3b82f6" : "white"}
//           fillOpacity={isFullCircle ? 0.3 : 1}
//           stroke="black"
//           strokeWidth="1"
//         />
//         {getFilledSegments()}
//         {getDivisionLines()}
//         {getSegmentNumbers()}
//       </svg>
//     </div>
//   );
// };

// // Keep the existing DataTable component
// const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
//   const decimal = originalNum / originalDenom;
//   const percentage = (decimal * 100).toFixed(2);
  
//   const tableStyles = {
//     width: '100%',
//     maxWidth: '600px',
//     marginTop: '2rem',
//     borderCollapse: 'collapse',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//     overflow: 'hidden'
//   };

//   const thStyles = {
//     padding: '12px 24px',
//     textAlign: 'left',
//     fontSize: '12px',
//     fontWeight: '500',
//     textTransform: 'uppercase',
//     backgroundColor: '#f9fafb',
//     color: '#6b7280',
//     borderBottom: '1px solid #e5e7eb'
//   };

//   const tdStyles = {
//     padding: '16px 24px',
//     fontSize: '14px',
//     color: '#111827',
//     borderBottom: '1px solid #e5e7eb'
//   };

//   return (
//     <table style={tableStyles}>
//       <thead>
//         <tr>
//           <th style={thStyles}>Input Fraction</th>
//           <th style={thStyles}>Normalized</th>
//           <th style={thStyles}>Decimal</th>
//           <th style={thStyles}>Percentage</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td style={tdStyles}>{originalNum}/{originalDenom}</td>
//           <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
//           <td style={tdStyles}>{decimal.toFixed(3)}</td>
//           <td style={tdStyles}>{percentage}%</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// // Keep the existing FractionCircle component
// const FractionCircle = ({ numerator, denominator }) => {
//   const calculateGCD = (a, b) => {
//     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
//   };

//   const gcd = calculateGCD(numerator, denominator);
//   const normalizedNumerator = numerator / gcd;
//   const normalizedDenominator = denominator / gcd;

//   const getSize = () => {
//     if (normalizedDenominator <= 25) return 200;
//     if (normalizedDenominator <= 50) return 300;
//     if (normalizedDenominator <= 100) return 400;
//     return 500;
//   };

//   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
//   const remainingNumerator = normalizedNumerator % normalizedDenominator;
//   const size = getSize();

//   return (
//     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//       <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '2rem', justifyContent: 'center'}}>
//         {wholeCircles > 0 && (
//           <div>
//             <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
//           </div>
//         )}
//         {remainingNumerator > 0 && wholeCircles > 0 && (
//           <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
//         )}
//         {remainingNumerator > 0 && (
//           <div>
//             <CircleDisplay 
//               size={size} 
//               numerator={remainingNumerator} 
//               denominator={normalizedDenominator} 
//             />
//           </div>
//         )}
//       </div>
//       <DataTable 
//         originalNum={numerator}
//         originalDenom={denominator}
//         normalizedNum={normalizedNumerator}
//         normalizedDenom={normalizedDenominator}
//       />
//     </div>
//   );
// };

// const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
//   const [numerator, setNumerator] = useState(initialNumerator || 1);
//   const [denominator, setDenominator] = useState(initialDenominator || 4);
//   const [error, setError] = useState('');

//   // Auto-render on input change
//   useEffect(() => {
//     if (numerator && denominator) {
//       // Check for division by zero
//       if (Number(denominator) === 0) {
//         setError('Denominator cannot be zero');
//         return;
//       }
      
//       if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
//         setError('Both numerator and denominator must be integers');
//         return;
//       }
      
//       setError('');
//       onSubmit(Number(numerator), Number(denominator));
//     }
//   }, [numerator, denominator, onSubmit]);

//   const formStyles = {
//     width: '100%',
//     maxWidth: '400px',
//     marginBottom: '1rem',
//     padding: '1rem',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//     backgroundColor: '#f9fafb'
//   };

//   const formContentStyles = {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '1rem'
//   };

//   const inputGroupStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '0.5rem'
//   };

//   const labelStyles = {
//     fontSize: '14px',
//     fontWeight: '500'
//   };

//   const inputStyles = {
//     padding: '0.5rem',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//     width: '70px',
//     height: '20px'
//   };

//   const errorStyles = {
//     color: 'red',
//     fontSize: '14px',
//     marginBottom: '0.5rem'
//   };

//   const presetButtonStyles = {
//     padding: '0.25rem 0.5rem',
//     backgroundColor: '#3b82f6',
//     color: 'white',
//     border: '1px solid #2563eb',
//     borderRadius: '4px',
//     margin: '0.25rem',
//     cursor: 'pointer',
//     fontWeight: 'bold'
//   };

//   return (
//     <div style={formStyles}>
//       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Input Values Here</h3>
//       {error && <div style={errorStyles}>{error}</div>}
      
//       <div style={formContentStyles}>
//         <div style={inputGroupStyles}>
//           <label htmlFor="numerator" style={labelStyles}>Numerator</label>
//           <input
//             id="numerator"
//             type="number"
//             value={numerator}
//             onChange={(e) => setNumerator(e.target.value)}
//             style={inputStyles}
//             min="0"
//           />
//         </div>
        
//         <div style={inputGroupStyles}>
//           <label htmlFor="denominator" style={labelStyles}>Denominator</label>
//           <input
//             id="denominator"
//             type="number"
//             value={denominator}
//             onChange={(e) => setDenominator(e.target.value)}
//             style={inputStyles}
//             min="1"
//           />
//         </div>
//       </div>
      
//       <div style={{marginTop: '0.5rem'}}>
//         <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(2); }}>1/2</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(3); }}>1/3</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(2); setDenominator(3); }}>2/3</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(4); }}>1/4</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(4); }}>3/4</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(5); }}>1/5</button>
//           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(5); }}>3/5</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ExplanationPanel component
// const ExplanationPanel = ({ numerator, denominator, customContent = null }) => {
//   const decimal = (numerator / denominator).toFixed(4);
//   const percentage = ((numerator / denominator) * 100).toFixed(2);
  
//   const calculateGCD = (a, b) => {
//     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
//   };

//   const gcd = calculateGCD(numerator, denominator);
//   const simplifiedNum = numerator / gcd;
//   const simplifiedDenom = denominator / gcd;

//   // Default content if none provided
//   const getDefaultContent = () => {
//     const isImproper = numerator > denominator;
//     const wholeNumber = Math.floor(numerator / denominator);
//     const remainder = numerator % denominator;
    
//     return `
// # Understanding Your Fraction

// ## What You're Seeing

// The circle visualization shows the **fraction ${numerator}/${denominator}**, which represents ${numerator} parts out of ${denominator} equal parts.

// ${isImproper ? `Since this is an improper fraction (numerator > denominator), it equals ${wholeNumber} whole circle${wholeNumber > 1 ? 's' : ''}${remainder > 0 ? ` plus ${remainder}/${denominator}` : ''}.` : ''}

// ## Fraction in Math

// A **fraction** represents a part of a whole. In the fraction ${numerator}/${denominator}:
// - **${numerator}** is the numerator (parts we have)
// - **${denominator}** is the denominator (total equal parts)

// ## Decimal and Percentage Forms

// **Fraction to decimal**: ${numerator}/${denominator} = ${decimal}

// **As a percentage**: ${percentage}%

// ## Equivalent Fractions

// ${numerator !== simplifiedNum || denominator !== simplifiedDenom 
//   ? `Your fraction ${numerator}/${denominator} simplifies to **${simplifiedNum}/${simplifiedDenom}** by dividing both parts by ${gcd}.`
//   : `Your fraction ${numerator}/${denominator} is already in its simplest form.`
// }

// Some equivalent fractions include:
// - ${numerator}/${denominator}
// - ${numerator * 2}/${denominator * 2}
// - ${numerator * 3}/${denominator * 3}

// ## Converting Fractions to Decimals

// To convert any fraction to decimal:
// 1. Divide the numerator by the denominator
// 2. ${numerator} ÷ ${denominator} = ${decimal}

// This visualization helps you understand how **fractions**, **decimals**, and **percentages** all represent the same mathematical concept in different forms.
//     `;
//   };

//   const content = customContent || getDefaultContent();

//   const panelStyles = {
//     backgroundColor: '#f8f9fa',
//     padding: '20px',
//     borderRadius: '8px',
//     height: 'fit-content',
//     fontSize: '16px',
//     lineHeight: '1.5',
//     borderLeft: '4px solid #3b82f6'
//   };

//   return (
//     <div style={panelStyles}>
//       {processContent(content)}
//     </div>
//   );
// };

// // Updated main App component with side-by-side layout
// const FractionCircleApp = ({ explanationContent = null }) => {
//   const [fractionState, setFractionState] = useState({
//     numerator: 3,
//     denominator: 4,
//     showVisualization: true
//   });

//   const handleFractionSubmit = (numerator, denominator) => {
//     setFractionState({
//       numerator,
//       denominator,
//       showVisualization: true
//     });
//   };

//   const containerStyles = {
//     padding: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     minHeight: '500px'
//   };

//   const mainContentStyles = {
//     display: 'flex',
//     gap: '30px',
//     alignItems: 'start'
//   };

//   const visualizationSectionStyles = {
//     flex: '1',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingRight: '15px'
//   };

//   const explanationSectionStyles = {
//     flex: '1',
//     paddingLeft: '15px',
//     borderLeft: '1px solid #e0e0e0'
//   };

//   return (
//     <>
//       <style>
//         {`
//           .explanation-content * {
//             margin: 0 !important;
//             padding: 0 !important;
//           }
//           .explanation-content h1 {
//             font-size: 22px !important;
//             font-weight: bold !important;
//             margin: 8px 0 4px 0 !important;
//             color: #333 !important;
//             line-height: 1.1 !important;
//           }
//           .explanation-content h2 {
//             font-size: 18px !important;
//             font-weight: bold !important;
//             margin: 6px 0 3px 0 !important;
//             color: #444 !important;
//             line-height: 1.1 !important;
//           }
//           .explanation-content h3 {
//             font-size: 16px !important;
//             font-weight: bold !important;
//             margin: 4px 0 2px 0 !important;
//             color: #555 !important;
//             line-height: 1.1 !important;
//           }
//           .explanation-content p {
//             font-size: 15px !important;
//             line-height: 1.2 !important;
//             margin: 2px 0 !important;
//             color: #666 !important;
//           }
//           .explanation-content ul, .explanation-content ol {
//             margin: 2px 0 !important;
//             padding-left: 18px !important;
//           }
//           .explanation-content li {
//             font-size: 15px !important;
//             line-height: 1.2 !important;
//             margin: 1px 0 !important;
//             color: #666 !important;
//           }
//           .explanation-content strong {
//             font-weight: bold !important;
//             color: #333 !important;
//           }
//         `}
//       </style>
//       <div style={containerStyles}>
//         <div style={mainContentStyles}>
//           <div style={visualizationSectionStyles}>
//             <FractionInputForm 
//               onSubmit={handleFractionSubmit}
//               initialNumerator={fractionState.numerator}
//               initialDenominator={fractionState.denominator}
//             />
            
//             {fractionState.showVisualization && (
//               <FractionCircle 
//                 numerator={fractionState.numerator} 
//                 denominator={fractionState.denominator} 
//               />
//             )}
//           </div>
          
//           <div style={explanationSectionStyles}>
//             <div className="explanation-content">
//               <ExplanationPanel 
//                 numerator={fractionState.numerator}
//                 denominator={fractionState.denominator}
//                 customContent={explanationContent}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FractionCircleApp;


import React, { useState, useEffect } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
  const radius = size * 0.45;
  const center = size / 2;
  const labelRadius = radius * 0.7;

  const getFontSize = () => {
    if (denominator <= 25) return 12;
    if (denominator <= 50) return 10;
    if (denominator <= 100) return 8;
    return 6;
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const getDivisionLines = () => {
    if (isFullCircle) return null;
    const lines = [];
    const angleStep = 360 / denominator;
    
    for (let i = 0; i < denominator; i++) {
      const angle = i * angleStep;
      const radians = (angle - 90) * Math.PI / 180;
      const x2 = center + radius * Math.cos(radians);
      const y2 = center + radius * Math.sin(radians);
      
      lines.push(
        <line
          key={i}
          x1={center}
          y1={center}
          x2={x2}
          y2={y2}
          stroke="black"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
      );
    }
    return lines;
  };

  const getSegmentNumbers = () => {
    if (isFullCircle) return null;
    const numbers = [];
    const angleStep = 360 / denominator;
    const fontSize = getFontSize();
    
    for (let i = 0; i < denominator; i++) {
      const angle = i * angleStep + (angleStep / 2);
      const radians = (angle - 90) * Math.PI / 180;
      const x = center + labelRadius * Math.cos(radians);
      const y = center + labelRadius * Math.sin(radians);
      
      numbers.push(
        <text
          key={i}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: `${fontSize}px` }}
        >
          {i + 1}
        </text>
      );
    }
    return numbers;
  };

  const getFilledSegments = () => {
    if (isFullCircle) return null;
    const segments = [];
    const angleStep = 360 / denominator;
    
    for (let i = 0; i < numerator; i++) {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      
      const start = polarToCartesian(center, center, radius, endAngle);
      const end = polarToCartesian(center, center, radius, startAngle);
      const largeArcFlag = angleStep <= 180 ? 0 : 1;

      const path = [
        'M', center, center,
        'L', start.x, start.y,
        'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        'Z'
      ].join(' ');
      
      segments.push(
        <path
          key={i}
          d={path}
          fill="#3b82f6"
          fillOpacity="0.3"
        />
      );
    }
    return segments;
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {isFullCircle && (
        <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
          {numerator} full circle{numerator > 1 ? 's' : ''}
        </div>
      )}
      <svg width={size} height={size} aria-label={isFullCircle ? `${numerator} whole circles` : `${numerator}/${denominator} fraction circle`}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill={isFullCircle ? "#3b82f6" : "white"}
          fillOpacity={isFullCircle ? 0.3 : 1}
          stroke="black"
          strokeWidth="1"
        />
        {getFilledSegments()}
        {getDivisionLines()}
        {getSegmentNumbers()}
      </svg>
    </div>
  );
};

const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
  const decimal = originalNum / originalDenom;
  const percentage = (decimal * 100).toFixed(2);
  
  const tableStyles = {
    width: '100%',
    maxWidth: '600px',
    marginTop: '2rem',
    borderCollapse: 'collapse',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const thStyles = {
    padding: '12px 24px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'uppercase',
    backgroundColor: '#f9fafb',
    color: '#6b7280',
    borderBottom: '1px solid #e5e7eb'
  };

  const tdStyles = {
    padding: '16px 24px',
    fontSize: '14px',
    color: '#111827',
    borderBottom: '1px solid #e5e7eb'
  };

  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          <th style={thStyles}>Input Fraction</th>
          <th style={thStyles}>Normalized</th>
          <th style={thStyles}>Decimal</th>
          <th style={thStyles}>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyles}>{originalNum}/{originalDenom}</td>
          <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
          <td style={tdStyles}>{decimal.toFixed(3)}</td>
          <td style={tdStyles}>{percentage}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const FractionCircle = ({ numerator, denominator }) => {
  const calculateGCD = (a, b) => {
    return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
  };

  const gcd = calculateGCD(numerator, denominator);
  const normalizedNumerator = numerator / gcd;
  const normalizedDenominator = denominator / gcd;

  const getSize = () => {
    if (normalizedDenominator <= 25) return 200;
    if (normalizedDenominator <= 50) return 300;
    if (normalizedDenominator <= 100) return 400;
    return 500;
  };

  const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
  const remainingNumerator = normalizedNumerator % normalizedDenominator;
  const size = getSize();

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '2rem', justifyContent: 'center'}}>
        {wholeCircles > 0 && (
          <div>
            <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
          </div>
        )}
        {remainingNumerator > 0 && wholeCircles > 0 && (
          <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
        )}
        {remainingNumerator > 0 && (
          <div>
            <CircleDisplay 
              size={size} 
              numerator={remainingNumerator} 
              denominator={normalizedDenominator} 
            />
          </div>
        )}
      </div>
      <DataTable 
        originalNum={numerator}
        originalDenom={denominator}
        normalizedNum={normalizedNumerator}
        normalizedDenom={normalizedDenominator}
      />
    </div>
  );
};

const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
  const [numerator, setNumerator] = useState(initialNumerator || 1);
  const [denominator, setDenominator] = useState(initialDenominator || 4);
  const [error, setError] = useState('');

  useEffect(() => {
    if (numerator && denominator) {
      if (Number(denominator) === 0) {
        setError('Denominator cannot be zero');
        return;
      }
      
      if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
        setError('Both numerator and denominator must be integers');
        return;
      }
      
      setError('');
      onSubmit(Number(numerator), Number(denominator));
    }
  }, [numerator, denominator, onSubmit]);

  const formStyles = {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#f9fafb'
  };

  const formContentStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem'
  };

  const inputGroupStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyles = {
    fontSize: '14px',
    fontWeight: '500'
  };

  const inputStyles = {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    width: '70px',
    height: '20px'
  };

  const errorStyles = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '0.5rem'
  };

  const presetButtonStyles = {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: '1px solid #2563eb',
    borderRadius: '4px',
    margin: '0.25rem',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={formStyles}>
      <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Input Values Here</h3>
      {error && <div style={errorStyles}>{error}</div>}
      
      <div style={formContentStyles}>
        <div style={inputGroupStyles}>
          <label htmlFor="numerator" style={labelStyles}>Numerator</label>
          <input
            id="numerator"
            type="number"
            value={numerator}
            onChange={(e) => setNumerator(e.target.value)}
            style={inputStyles}
            min="0"
          />
        </div>
        
        <div style={inputGroupStyles}>
          <label htmlFor="denominator" style={labelStyles}>Denominator</label>
          <input
            id="denominator"
            type="number"
            value={denominator}
            onChange={(e) => setDenominator(e.target.value)}
            style={inputStyles}
            min="1"
          />
        </div>
      </div>
      
      <div style={{marginTop: '0.5rem'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
          <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(2); }}>1/2</button>
          <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(3); }}>1/3</button>
          <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(2); setDenominator(3); }}>2/3</button>
          <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(4); }}>1/4</button>
          <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(4); }}>3/4</button>
          <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(5); }}>1/5</button>
          <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(5); }}>3/5</button>
        </div>
      </div>
    </div>
  );
};

const ExplanationPanel = ({ numerator, denominator, customContent = null }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const panelStyles = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    height: 'fit-content',
    fontSize: '18px',
    lineHeight: '1.3',
    borderLeft: '4px solid #3b82f6',
    fontFamily: 'Inter', 
   background: '#f5f5f5',
  padding: '20px',
  width:'90%'
  };

  if (!mounted) {
    return <div style={panelStyles}>Loading...</div>;
  }

  if (customContent) {
    return (
      <div style={panelStyles}>
        {processContent(customContent)}
       
      </div>
    );
  }

  const decimal = (numerator / denominator).toFixed(3);
  const percentage = ((numerator / denominator) * 100).toFixed(1);
  
  const calculateGCD = (a, b) => {
    return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
  };

  const gcd = calculateGCD(numerator, denominator);
  const simplifiedNum = numerator / gcd;
  const simplifiedDenom = denominator / gcd;
  const isImproper = numerator > denominator;
  const wholeNumber = Math.floor(numerator / denominator);
  const remainder = numerator % denominator;

  const h1Style = { fontSize: '28px', fontWeight: '700', margin: '8px 0 4px 0', color: '#3b82f6;', fontFamily: 'Inter, sans-serif' };
  const h2Style = { fontSize: '22px', fontWeight: '600', margin: '6px 0 3px 0', color: '#3b82f6', fontFamily: 'Inter, sans-serif' };
  const pStyle = { fontSize: '15px', margin: '2px 0', color: '#3b82f6', fontFamily: 'Inter, sans-serif' };
  const strongStyle = { fontWeight: '600', color: '#1f2937' };
  const ulStyle = { margin: '2px 0', paddingLeft: '18px' };
  const liStyle = { fontSize: '15px', margin: '1px 0', color: '#374151', fontFamily: 'Inter, sans-serif' };

  return (
    <div style={panelStyles}>
      <h1 style={h1Style}>Understanding Your Fraction</h1>
      
      <h2 style={h2Style}>What You&apos;re Seeing</h2>
      <p style={pStyle}>
        The circle visualization shows the fraction {numerator}/{denominator}, which represents {numerator} parts out of {denominator} equal parts.
        {isImproper && ` Since this is an improper fraction, it equals ${wholeNumber} whole circle${wholeNumber > 1 ? 's' : ''}${remainder > 0 ? ` plus ${remainder}/${denominator}` : ''}.`}
      </p>

      <h2 style={h2Style}>Fraction in Math</h2>
      <p style={pStyle}>A fraction represents a part of a whole. In the fraction {numerator}/{denominator}:</p>
      <ul style={ulStyle}>
        <li style={liStyle}><span style={strongStyle}>{numerator}</span> is the numerator (parts we have)</li>
        <li style={liStyle}><span style={strongStyle}>{denominator}</span> is the denominator (total equal parts)</li>
      </ul>

      <h2 style={h2Style}>Decimal and Percentage Forms</h2>
      <p style={pStyle}><span style={strongStyle}>Fraction to decimal:</span> {numerator}/{denominator} = {decimal}</p>
      <p style={pStyle}><span style={strongStyle}>As a percentage:</span> {percentage}%</p>

      <h2 style={h2Style}>Equivalent Fractions</h2>
      <p style={pStyle}>
        {numerator !== simplifiedNum || denominator !== simplifiedDenom 
          ? `Your fraction ${numerator}/${denominator} simplifies to ${simplifiedNum}/${simplifiedDenom} by dividing both parts by ${gcd}.`
          : `Your fraction ${numerator}/${denominator} is already in its simplest form.`
        }
      </p>
      <p style={pStyle}>Some equivalent fractions: {numerator}/{denominator}, {numerator * 2}/{denominator * 2}, {numerator * 3}/{denominator * 3}</p>

      <h2 style={h2Style}>Converting Fractions to Decimals</h2>
      <p style={pStyle}>To convert any fraction to decimal:</p>
      <ol style={ulStyle}>
        <li style={liStyle}>Divide the numerator by the denominator</li>
        <li style={liStyle}>{numerator} ÷ {denominator} = {decimal}</li>
      </ol>
      
      <p style={{...pStyle, marginTop: '6px'}}>
        This visualization helps you understand how <span style={strongStyle}>fractions</span>, <span style={strongStyle}>decimals</span>, and <span style={strongStyle}>percentages</span> all represent the same mathematical concept.
      </p>
    </div>
  );
};

const FractionCircleApp = ({ explanationContent = null }) => {
  const [fractionState, setFractionState] = useState({
    numerator: 3,
    denominator: 4,
    showVisualization: true
  });

  const handleFractionSubmit = (numerator, denominator) => {
    setFractionState({
      numerator,
      denominator,
      showVisualization: true
    });
  };

  const containerStyles = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    minHeight: '500px'
  };

  const mainContentStyles = {
    display: 'flex',
    gap: '30px',
    alignItems: 'start'
  };

  const visualizationSectionStyles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: '15px'
  };

  const explanationSectionStyles = {
    flex: '1',
    paddingLeft: '15px',
    borderLeft: '1px solid #e0e0e0'
  };

  return (
    <div style={containerStyles}>
      <div style={mainContentStyles}>
        <div style={visualizationSectionStyles}>
          <FractionInputForm 
            onSubmit={handleFractionSubmit}
            initialNumerator={fractionState.numerator}
            initialDenominator={fractionState.denominator}
          />
          
          {fractionState.showVisualization && (
            <FractionCircle 
              numerator={fractionState.numerator} 
              denominator={fractionState.denominator} 
            />
          )}
        </div>
        
        <div style={explanationSectionStyles}>
          <ExplanationPanel 
            numerator={fractionState.numerator}
            denominator={fractionState.denominator}
            customContent={explanationContent}
          />
        </div>
      </div>
    </div>
  );
};

export default FractionCircleApp;