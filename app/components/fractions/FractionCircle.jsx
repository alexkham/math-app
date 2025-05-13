
// // // // // // import React from 'react';

// // // // // // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// // // // // //   const radius = size * 0.45;
// // // // // //   const center = size / 2;
// // // // // //   const labelRadius = radius * 0.7;

// // // // // //   const getFontSize = () => {
// // // // // //     if (denominator <= 25) return 12;
// // // // // //     if (denominator <= 50) return 10;
// // // // // //     if (denominator <= 100) return 8;
// // // // // //     return 6;
// // // // // //   };

// // // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // // //     return {
// // // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // // //     };
// // // // // //   };

// // // // // //   const getDivisionLines = () => {
// // // // // //     if (isFullCircle) return null;
// // // // // //     const lines = [];
// // // // // //     const angleStep = 360 / denominator;
    
// // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // //       const angle = i * angleStep;
// // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // //       const x2 = center + radius * Math.cos(radians);
// // // // // //       const y2 = center + radius * Math.sin(radians);
      
// // // // // //       lines.push(
// // // // // //         <line
// // // // // //           key={i}
// // // // // //           x1={center}
// // // // // //           y1={center}
// // // // // //           x2={x2}
// // // // // //           y2={y2}
// // // // // //           stroke="black"
// // // // // //           strokeWidth="0.5"
// // // // // //           strokeOpacity="0.5"
// // // // // //         />
// // // // // //       );
// // // // // //     }
// // // // // //     return lines;
// // // // // //   };

// // // // // //   const getSegmentNumbers = () => {
// // // // // //     if (isFullCircle) return null;
// // // // // //     const numbers = [];
// // // // // //     const angleStep = 360 / denominator;
// // // // // //     const fontSize = getFontSize();
    
// // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // //       const angle = i * angleStep + (angleStep / 2);
// // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // //       const x = center + labelRadius * Math.cos(radians);
// // // // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // // // //       numbers.push(
// // // // // //         <text
// // // // // //           key={i}
// // // // // //           x={x}
// // // // // //           y={y}
// // // // // //           textAnchor="middle"
// // // // // //           dominantBaseline="middle"
// // // // // //           style={{ fontSize: `${fontSize}px` }}
// // // // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // // // //         >
// // // // // //           {i + 1}
// // // // // //         </text>
// // // // // //       );
// // // // // //     }
// // // // // //     return numbers;
// // // // // //   };

// // // // // //   const getFilledSegments = () => {
// // // // // //     if (isFullCircle) return null;
// // // // // //     const segments = [];
// // // // // //     const angleStep = 360 / denominator;
    
// // // // // //     for (let i = 0; i < numerator; i++) {
// // // // // //       const startAngle = i * angleStep;
// // // // // //       const endAngle = (i + 1) * angleStep;
      
// // // // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // // // //       const path = [
// // // // // //         'M', center, center,
// // // // // //         'L', start.x, start.y,
// // // // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // // //         'Z'
// // // // // //       ].join(' ');
      
// // // // // //       segments.push(
// // // // // //         <path
// // // // // //           key={i}
// // // // // //           d={path}
// // // // // //           fill="#3b82f6"
// // // // // //           fillOpacity="0.3"
// // // // // //         />
// // // // // //       );
// // // // // //     }
// // // // // //     return segments;
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
// // // // // //       {isFullCircle && (
// // // // // //         <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
// // // // // //           {numerator} full circle{numerator > 1 ? 's' : ''}
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <svg width={size} height={size}>
// // // // // //         <circle
// // // // // //           cx={center}
// // // // // //           cy={center}
// // // // // //           r={radius}
// // // // // //           fill={isFullCircle ? "#3b82f6" : "white"}
// // // // // //           fillOpacity={isFullCircle ? 0.3 : 1}
// // // // // //           stroke="black"
// // // // // //           strokeWidth="1"
// // // // // //         />
// // // // // //         {getFilledSegments()}
// // // // // //         {getDivisionLines()}
// // // // // //         {getSegmentNumbers()}
// // // // // //       </svg>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
// // // // // //   const decimal = originalNum / originalDenom;
// // // // // //   const percentage = (decimal * 100).toFixed(2);
  
// // // // // //   const tableStyles = {
// // // // // //     width: '100%',
// // // // // //     maxWidth: '600px',
// // // // // //     marginTop: '2rem',
// // // // // //     borderCollapse: 'collapse',
// // // // // //     border: '1px solid #e5e7eb',
// // // // // //     borderRadius: '8px',
// // // // // //     overflow: 'hidden'
// // // // // //   };

// // // // // //   const thStyles = {
// // // // // //     padding: '12px 24px',
// // // // // //     textAlign: 'left',
// // // // // //     fontSize: '12px',
// // // // // //     fontWeight: '500',
// // // // // //     textTransform: 'uppercase',
// // // // // //     backgroundColor: '#f9fafb',
// // // // // //     color: '#6b7280',
// // // // // //     borderBottom: '1px solid #e5e7eb'
// // // // // //   };

// // // // // //   const tdStyles = {
// // // // // //     padding: '16px 24px',
// // // // // //     fontSize: '14px',
// // // // // //     color: '#111827',
// // // // // //     borderBottom: '1px solid #e5e7eb'
// // // // // //   };

// // // // // //   return (
// // // // // //     <table style={tableStyles}>
// // // // // //       <thead>
// // // // // //         <tr>
// // // // // //           <th style={thStyles}>Input Fraction</th>
// // // // // //           <th style={thStyles}>Normalized</th>
// // // // // //           <th style={thStyles}>Decimal</th>
// // // // // //           <th style={thStyles}>Percentage</th>
// // // // // //         </tr>
// // // // // //       </thead>
// // // // // //       <tbody>
// // // // // //         <tr>
// // // // // //           <td style={tdStyles}>{originalNum}/{originalDenom}</td>
// // // // // //           <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
// // // // // //           <td style={tdStyles}>{decimal.toFixed(3)}</td>
// // // // // //           <td style={tdStyles}>{percentage}%</td>
// // // // // //         </tr>
// // // // // //       </tbody>
// // // // // //     </table>
// // // // // //   );
// // // // // // };

// // // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // // //   const calculateGCD = (a, b) => {
// // // // // //     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
// // // // // //   };

// // // // // //   const gcd = calculateGCD(numerator, denominator);
// // // // // //   const normalizedNumerator = numerator / gcd;
// // // // // //   const normalizedDenominator = denominator / gcd;

// // // // // //   const getSize = () => {
// // // // // //     if (normalizedDenominator <= 25) return 200;
// // // // // //     if (normalizedDenominator <= 50) return 300;
// // // // // //     if (normalizedDenominator <= 100) return 400;
// // // // // //     return 500;
// // // // // //   };

// // // // // //   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
// // // // // //   const remainingNumerator = normalizedNumerator % normalizedDenominator;
// // // // // //   const size = getSize();

// // // // // //   return (
// // // // // //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// // // // // //       <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem'}}>
// // // // // //         {wholeCircles > 0 && (
// // // // // //           <>
// // // // // //             <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// // // // // //             <span style={{fontSize: '64px', fontWeight: 'bold'}}>+</span>
// // // // // //           </>
// // // // // //         )}
// // // // // //         {(remainingNumerator > 0 || (!wholeCircles && remainingNumerator === 0)) && (
// // // // // //           <CircleDisplay 
// // // // // //             size={size} 
// // // // // //             numerator={remainingNumerator} 
// // // // // //             denominator={normalizedDenominator} 
// // // // // //           />
// // // // // //         )}
// // // // // //       </div>
// // // // // //       <DataTable 
// // // // // //         originalNum={numerator}
// // // // // //         originalDenom={denominator}
// // // // // //         normalizedNum={normalizedNumerator}
// // // // // //         normalizedDenom={normalizedDenominator}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default FractionCircle;


// // // // // import React, { useState } from 'react';

// // // // // // Keep the existing CircleDisplay component
// // // // // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// // // // //   const radius = size * 0.45;
// // // // //   const center = size / 2;
// // // // //   const labelRadius = radius * 0.7;

// // // // //   const getFontSize = () => {
// // // // //     if (denominator <= 25) return 12;
// // // // //     if (denominator <= 50) return 10;
// // // // //     if (denominator <= 100) return 8;
// // // // //     return 6;
// // // // //   };

// // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // //     return {
// // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // //     };
// // // // //   };

// // // // //   const getDivisionLines = () => {
// // // // //     if (isFullCircle) return null;
// // // // //     const lines = [];
// // // // //     const angleStep = 360 / denominator;
    
// // // // //     for (let i = 0; i < denominator; i++) {
// // // // //       const angle = i * angleStep;
// // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // //       const x2 = center + radius * Math.cos(radians);
// // // // //       const y2 = center + radius * Math.sin(radians);
      
// // // // //       lines.push(
// // // // //         <line
// // // // //           key={i}
// // // // //           x1={center}
// // // // //           y1={center}
// // // // //           x2={x2}
// // // // //           y2={y2}
// // // // //           stroke="black"
// // // // //           strokeWidth="0.5"
// // // // //           strokeOpacity="0.5"
// // // // //         />
// // // // //       );
// // // // //     }
// // // // //     return lines;
// // // // //   };

// // // // //   const getSegmentNumbers = () => {
// // // // //     if (isFullCircle) return null;
// // // // //     const numbers = [];
// // // // //     const angleStep = 360 / denominator;
// // // // //     const fontSize = getFontSize();
    
// // // // //     for (let i = 0; i < denominator; i++) {
// // // // //       const angle = i * angleStep + (angleStep / 2);
// // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // //       const x = center + labelRadius * Math.cos(radians);
// // // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // // //       numbers.push(
// // // // //         <text
// // // // //           key={i}
// // // // //           x={x}
// // // // //           y={y}
// // // // //           textAnchor="middle"
// // // // //           dominantBaseline="middle"
// // // // //           style={{ fontSize: `${fontSize}px` }}
// // // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // // //         >
// // // // //           {i + 1}
// // // // //         </text>
// // // // //       );
// // // // //     }
// // // // //     return numbers;
// // // // //   };

// // // // //   const getFilledSegments = () => {
// // // // //     if (isFullCircle) return null;
// // // // //     const segments = [];
// // // // //     const angleStep = 360 / denominator;
    
// // // // //     for (let i = 0; i < numerator; i++) {
// // // // //       const startAngle = i * angleStep;
// // // // //       const endAngle = (i + 1) * angleStep;
      
// // // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // // //       const path = [
// // // // //         'M', center, center,
// // // // //         'L', start.x, start.y,
// // // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // //         'Z'
// // // // //       ].join(' ');
      
// // // // //       segments.push(
// // // // //         <path
// // // // //           key={i}
// // // // //           d={path}
// // // // //           fill="#3b82f6"
// // // // //           fillOpacity="0.3"
// // // // //         />
// // // // //       );
// // // // //     }
// // // // //     return segments;
// // // // //   };

// // // // //   return (
// // // // //     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
// // // // //       {isFullCircle && (
// // // // //         <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
// // // // //           {numerator} full circle{numerator > 1 ? 's' : ''}
// // // // //         </div>
// // // // //       )}
// // // // //       <svg width={size} height={size} aria-label={isFullCircle ? `${numerator} whole circles` : `${numerator}/${denominator} fraction circle`}>
// // // // //         <circle
// // // // //           cx={center}
// // // // //           cy={center}
// // // // //           r={radius}
// // // // //           fill={isFullCircle ? "#3b82f6" : "white"}
// // // // //           fillOpacity={isFullCircle ? 0.3 : 1}
// // // // //           stroke="black"
// // // // //           strokeWidth="1"
// // // // //         />
// // // // //         {getFilledSegments()}
// // // // //         {getDivisionLines()}
// // // // //         {getSegmentNumbers()}
// // // // //       </svg>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Keep the existing DataTable component
// // // // // const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
// // // // //   const decimal = originalNum / originalDenom;
// // // // //   const percentage = (decimal * 100).toFixed(2);
  
// // // // //   const tableStyles = {
// // // // //     width: '100%',
// // // // //     maxWidth: '600px',
// // // // //     marginTop: '2rem',
// // // // //     borderCollapse: 'collapse',
// // // // //     border: '1px solid #e5e7eb',
// // // // //     borderRadius: '8px',
// // // // //     overflow: 'hidden'
// // // // //   };

// // // // //   const thStyles = {
// // // // //     padding: '12px 24px',
// // // // //     textAlign: 'left',
// // // // //     fontSize: '12px',
// // // // //     fontWeight: '500',
// // // // //     textTransform: 'uppercase',
// // // // //     backgroundColor: '#f9fafb',
// // // // //     color: '#6b7280',
// // // // //     borderBottom: '1px solid #e5e7eb'
// // // // //   };

// // // // //   const tdStyles = {
// // // // //     padding: '16px 24px',
// // // // //     fontSize: '14px',
// // // // //     color: '#111827',
// // // // //     borderBottom: '1px solid #e5e7eb'
// // // // //   };

// // // // //   return (
// // // // //     <table style={tableStyles}>
// // // // //       <thead>
// // // // //         <tr>
// // // // //           <th style={thStyles}>Input Fraction</th>
// // // // //           <th style={thStyles}>Normalized</th>
// // // // //           <th style={thStyles}>Decimal</th>
// // // // //           <th style={thStyles}>Percentage</th>
// // // // //         </tr>
// // // // //       </thead>
// // // // //       <tbody>
// // // // //         <tr>
// // // // //           <td style={tdStyles}>{originalNum}/{originalDenom}</td>
// // // // //           <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
// // // // //           <td style={tdStyles}>{decimal.toFixed(3)}</td>
// // // // //           <td style={tdStyles}>{percentage}%</td>
// // // // //         </tr>
// // // // //       </tbody>
// // // // //     </table>
// // // // //   );
// // // // // };

// // // // // // Keep the existing FractionCircle component
// // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // //   const calculateGCD = (a, b) => {
// // // // //     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
// // // // //   };

// // // // //   const gcd = calculateGCD(numerator, denominator);
// // // // //   const normalizedNumerator = numerator / gcd;
// // // // //   const normalizedDenominator = denominator / gcd;

// // // // //   const getSize = () => {
// // // // //     if (normalizedDenominator <= 25) return 200;
// // // // //     if (normalizedDenominator <= 50) return 300;
// // // // //     if (normalizedDenominator <= 100) return 400;
// // // // //     return 500;
// // // // //   };

// // // // //   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
// // // // //   const remainingNumerator = normalizedNumerator % normalizedDenominator;
// // // // //   const size = getSize();

// // // // //   return (
// // // // //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// // // // //       <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
// // // // //         {wholeCircles > 0 && (
// // // // //           <>
// // // // //             <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// // // // //             <span style={{fontSize: '64px', fontWeight: 'bold'}}>+</span>
// // // // //           </>
// // // // //         )}
// // // // //         {(remainingNumerator > 0 || (!wholeCircles && remainingNumerator === 0)) && (
// // // // //           <CircleDisplay 
// // // // //             size={size} 
// // // // //             numerator={remainingNumerator} 
// // // // //             denominator={normalizedDenominator} 
// // // // //           />
// // // // //         )}
// // // // //       </div>
// // // // //       <DataTable 
// // // // //         originalNum={numerator}
// // // // //         originalDenom={denominator}
// // // // //         normalizedNum={normalizedNumerator}
// // // // //         normalizedDenom={normalizedDenominator}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Add a new FractionInputForm component
// // // // // const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
// // // // //   const [numerator, setNumerator] = useState(initialNumerator || 1);
// // // // //   const [denominator, setDenominator] = useState(initialDenominator || 4);
// // // // //   const [error, setError] = useState('');

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
    
// // // // //     // Validate inputs
// // // // //     if (!numerator || !denominator) {
// // // // //       setError('Both numerator and denominator are required');
// // // // //       return;
// // // // //     }
    
// // // // //     if (denominator === 0) {
// // // // //       setError('Denominator cannot be zero');
// // // // //       return;
// // // // //     }

// // // // //     if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
// // // // //       setError('Both numerator and denominator must be integers');
// // // // //       return;
// // // // //     }

// // // // //     setError('');
// // // // //     onSubmit(Number(numerator), Number(denominator));
// // // // //   };

// // // // //   const formStyles = {
// // // // //     width: '100%',
// // // // //     maxWidth: '600px',
// // // // //     marginBottom: '2rem',
// // // // //     padding: '1.5rem',
// // // // //     border: '1px solid #e5e7eb',
// // // // //     borderRadius: '8px',
// // // // //     backgroundColor: '#f9fafb'
// // // // //   };

// // // // //   const inputGroupStyles = {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '1rem',
// // // // //     marginBottom: '1rem'
// // // // //   };

// // // // //   const labelStyles = {
// // // // //     fontSize: '14px',
// // // // //     fontWeight: '500',
// // // // //     width: '100px'
// // // // //   };

// // // // //   const inputStyles = {
// // // // //     padding: '0.5rem',
// // // // //     border: '1px solid #d1d5db',
// // // // //     borderRadius: '4px',
// // // // //     width: '100px'
// // // // //   };

// // // // //   const buttonStyles = {
// // // // //     padding: '0.5rem 1rem',
// // // // //     backgroundColor: '#3b82f6',
// // // // //     color: 'white',
// // // // //     border: 'none',
// // // // //     borderRadius: '4px',
// // // // //     cursor: 'pointer'
// // // // //   };

// // // // //   const errorStyles = {
// // // // //     color: 'red',
// // // // //     fontSize: '14px',
// // // // //     marginBottom: '1rem'
// // // // //   };

// // // // //   const presetButtonStyles = {
// // // // //     padding: '0.25rem 0.5rem',
// // // // //     backgroundColor: '#e5e7eb',
// // // // //     border: '1px solid #d1d5db',
// // // // //     borderRadius: '4px',
// // // // //     margin: '0.25rem',
// // // // //     cursor: 'pointer'
// // // // //   };

// // // // //   return (
// // // // //     <form style={formStyles} onSubmit={handleSubmit}>
// // // // //       <h2 style={{marginTop: 0, marginBottom: '1rem'}}>Fraction Circle Visualizer</h2>
// // // // //       {error && <div style={errorStyles}>{error}</div>}
      
// // // // //       <div style={inputGroupStyles}>
// // // // //         <label htmlFor="numerator" style={labelStyles}>Numerator:</label>
// // // // //         <input
// // // // //           id="numerator"
// // // // //           type="number"
// // // // //           value={numerator}
// // // // //           onChange={(e) => setNumerator(e.target.value)}
// // // // //           style={inputStyles}
// // // // //           min="0"
// // // // //         />
// // // // //       </div>
      
// // // // //       <div style={inputGroupStyles}>
// // // // //         <label htmlFor="denominator" style={labelStyles}>Denominator:</label>
// // // // //         <input
// // // // //           id="denominator"
// // // // //           type="number"
// // // // //           value={denominator}
// // // // //           onChange={(e) => setDenominator(e.target.value)}
// // // // //           style={inputStyles}
// // // // //           min="1"
// // // // //         />
// // // // //       </div>
      
// // // // //       <div style={{marginBottom: '1rem'}}>
// // // // //         <p style={{fontSize: '14px', marginBottom: '0.5rem'}}>Common fractions:</p>
// // // // //         <div>
// // // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(2); }}>1/2</button>
// // // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(3); }}>1/3</button>
// // // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(2); setDenominator(3); }}>2/3</button>
// // // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(4); }}>1/4</button>
// // // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(4); }}>3/4</button>
// // // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(5); }}>1/5</button>
// // // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(5); }}>3/5</button>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       <button type="submit" style={buttonStyles}>Visualize</button>
// // // // //     </form>
// // // // //   );
// // // // // };

// // // // // // Add a new main App component to manage state
// // // // // const FractionCircleApp = () => {
// // // // //   const [fractionState, setFractionState] = useState({
// // // // //     numerator: 3,
// // // // //     denominator: 4,
// // // // //     showVisualization: true
// // // // //   });

// // // // //   const handleFractionSubmit = (numerator, denominator) => {
// // // // //     setFractionState({
// // // // //       numerator,
// // // // //       denominator,
// // // // //       showVisualization: true
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// // // // //       <h1 style={{marginBottom: '2rem'}}>Fraction Circle Visualizer</h1>
// // // // //       <FractionInputForm 
// // // // //         onSubmit={handleFractionSubmit}
// // // // //         initialNumerator={fractionState.numerator}
// // // // //         initialDenominator={fractionState.denominator}
// // // // //       />
      
// // // // //       {fractionState.showVisualization && (
// // // // //         <FractionCircle 
// // // // //           numerator={fractionState.numerator} 
// // // // //           denominator={fractionState.denominator} 
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FractionCircleApp;

// // // // import React, { useState } from 'react';

// // // // // Keep the existing CircleDisplay component
// // // // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// // // //   const radius = size * 0.45;
// // // //   const center = size / 2;
// // // //   const labelRadius = radius * 0.7;

// // // //   const getFontSize = () => {
// // // //     if (denominator <= 25) return 12;
// // // //     if (denominator <= 50) return 10;
// // // //     if (denominator <= 100) return 8;
// // // //     return 6;
// // // //   };

// // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // //     return {
// // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // //     };
// // // //   };

// // // //   const getDivisionLines = () => {
// // // //     if (isFullCircle) return null;
// // // //     const lines = [];
// // // //     const angleStep = 360 / denominator;
    
// // // //     for (let i = 0; i < denominator; i++) {
// // // //       const angle = i * angleStep;
// // // //       const radians = (angle - 90) * Math.PI / 180;
// // // //       const x2 = center + radius * Math.cos(radians);
// // // //       const y2 = center + radius * Math.sin(radians);
      
// // // //       lines.push(
// // // //         <line
// // // //           key={i}
// // // //           x1={center}
// // // //           y1={center}
// // // //           x2={x2}
// // // //           y2={y2}
// // // //           stroke="black"
// // // //           strokeWidth="0.5"
// // // //           strokeOpacity="0.5"
// // // //         />
// // // //       );
// // // //     }
// // // //     return lines;
// // // //   };

// // // //   const getSegmentNumbers = () => {
// // // //     if (isFullCircle) return null;
// // // //     const numbers = [];
// // // //     const angleStep = 360 / denominator;
// // // //     const fontSize = getFontSize();
    
// // // //     for (let i = 0; i < denominator; i++) {
// // // //       const angle = i * angleStep + (angleStep / 2);
// // // //       const radians = (angle - 90) * Math.PI / 180;
// // // //       const x = center + labelRadius * Math.cos(radians);
// // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // //       numbers.push(
// // // //         <text
// // // //           key={i}
// // // //           x={x}
// // // //           y={y}
// // // //           textAnchor="middle"
// // // //           dominantBaseline="middle"
// // // //           style={{ fontSize: `${fontSize}px` }}
// // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // //         >
// // // //           {i + 1}
// // // //         </text>
// // // //       );
// // // //     }
// // // //     return numbers;
// // // //   };

// // // //   const getFilledSegments = () => {
// // // //     if (isFullCircle) return null;
// // // //     const segments = [];
// // // //     const angleStep = 360 / denominator;
    
// // // //     for (let i = 0; i < numerator; i++) {
// // // //       const startAngle = i * angleStep;
// // // //       const endAngle = (i + 1) * angleStep;
      
// // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // //       const path = [
// // // //         'M', center, center,
// // // //         'L', start.x, start.y,
// // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // //         'Z'
// // // //       ].join(' ');
      
// // // //       segments.push(
// // // //         <path
// // // //           key={i}
// // // //           d={path}
// // // //           fill="#3b82f6"
// // // //           fillOpacity="0.3"
// // // //         />
// // // //       );
// // // //     }
// // // //     return segments;
// // // //   };

// // // //   return (
// // // //     <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
// // // //       {isFullCircle && (
// // // //         <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
// // // //           {numerator} full circle{numerator > 1 ? 's' : ''}
// // // //         </div>
// // // //       )}
// // // //       <svg width={size} height={size} aria-label={isFullCircle ? `${numerator} whole circles` : `${numerator}/${denominator} fraction circle`}>
// // // //         <circle
// // // //           cx={center}
// // // //           cy={center}
// // // //           r={radius}
// // // //           fill={isFullCircle ? "#3b82f6" : "white"}
// // // //           fillOpacity={isFullCircle ? 0.3 : 1}
// // // //           stroke="black"
// // // //           strokeWidth="1"
// // // //         />
// // // //         {getFilledSegments()}
// // // //         {getDivisionLines()}
// // // //         {getSegmentNumbers()}
// // // //       </svg>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Keep the existing DataTable component
// // // // const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
// // // //   const decimal = originalNum / originalDenom;
// // // //   const percentage = (decimal * 100).toFixed(2);
  
// // // //   const tableStyles = {
// // // //     width: '100%',
// // // //     maxWidth: '600px',
// // // //     marginTop: '2rem',
// // // //     borderCollapse: 'collapse',
// // // //     border: '1px solid #e5e7eb',
// // // //     borderRadius: '8px',
// // // //     overflow: 'hidden'
// // // //   };

// // // //   const thStyles = {
// // // //     padding: '12px 24px',
// // // //     textAlign: 'left',
// // // //     fontSize: '12px',
// // // //     fontWeight: '500',
// // // //     textTransform: 'uppercase',
// // // //     backgroundColor: '#f9fafb',
// // // //     color: '#6b7280',
// // // //     borderBottom: '1px solid #e5e7eb'
// // // //   };

// // // //   const tdStyles = {
// // // //     padding: '16px 24px',
// // // //     fontSize: '14px',
// // // //     color: '#111827',
// // // //     borderBottom: '1px solid #e5e7eb'
// // // //   };

// // // //   return (
// // // //     <table style={tableStyles}>
// // // //       <thead>
// // // //         <tr>
// // // //           <th style={thStyles}>Input Fraction</th>
// // // //           <th style={thStyles}>Normalized</th>
// // // //           <th style={thStyles}>Decimal</th>
// // // //           <th style={thStyles}>Percentage</th>
// // // //         </tr>
// // // //       </thead>
// // // //       <tbody>
// // // //         <tr>
// // // //           <td style={tdStyles}>{originalNum}/{originalDenom}</td>
// // // //           <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
// // // //           <td style={tdStyles}>{decimal.toFixed(3)}</td>
// // // //           <td style={tdStyles}>{percentage}%</td>
// // // //         </tr>
// // // //       </tbody>
// // // //     </table>
// // // //   );
// // // // };

// // // // // Keep the existing FractionCircle component
// // // // const FractionCircle = ({ numerator, denominator }) => {
// // // //   const calculateGCD = (a, b) => {
// // // //     return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
// // // //   };

// // // //   const gcd = calculateGCD(numerator, denominator);
// // // //   const normalizedNumerator = numerator / gcd;
// // // //   const normalizedDenominator = denominator / gcd;

// // // //   const getSize = () => {
// // // //     if (normalizedDenominator <= 25) return 200;
// // // //     if (normalizedDenominator <= 50) return 300;
// // // //     if (normalizedDenominator <= 100) return 400;
// // // //     return 500;
// // // //   };

// // // //   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
// // // //   const remainingNumerator = normalizedNumerator % normalizedDenominator;
// // // //   const size = getSize();

// // // //   return (
// // // //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// // // //       <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', justifyContent: 'center'}}>
// // // //         {wholeCircles > 0 && (
// // // //           <>
// // // //             <div style={{display: 'flex', alignItems: 'center', height: size}}>
// // // //               <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// // // //             </div>
// // // //             <span style={{fontSize: '64px', fontWeight: 'bold'}}>+</span>
// // // //           </>
// // // //         )}
// // // //         {(remainingNumerator > 0 || (!wholeCircles && remainingNumerator === 0)) && (
// // // //           <div style={{display: 'flex', alignItems: 'center', height: size}}>
// // // //             <CircleDisplay 
// // // //               size={size} 
// // // //               numerator={remainingNumerator} 
// // // //               denominator={normalizedDenominator} 
// // // //             />
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //       <DataTable 
// // // //         originalNum={numerator}
// // // //         originalDenom={denominator}
// // // //         normalizedNum={normalizedNumerator}
// // // //         normalizedDenom={normalizedDenominator}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // // Add a new FractionInputForm component
// // // // const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
// // // //   const [numerator, setNumerator] = useState(initialNumerator || 1);
// // // //   const [denominator, setDenominator] = useState(initialDenominator || 4);
// // // //   const [error, setError] = useState('');

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
    
// // // //     // Validate inputs
// // // //     if (!numerator || !denominator) {
// // // //       setError('Both numerator and denominator are required');
// // // //       return;
// // // //     }
    
// // // //     if (denominator === 0) {
// // // //       setError('Denominator cannot be zero');
// // // //       return;
// // // //     }

// // // //     if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
// // // //       setError('Both numerator and denominator must be integers');
// // // //       return;
// // // //     }

// // // //     setError('');
// // // //     onSubmit(Number(numerator), Number(denominator));
// // // //   };

// // // //   const formStyles = {
// // // //     width: '100%',
// // // //     maxWidth: '400px',
// // // //     marginBottom: '1rem',
// // // //     padding: '1rem',
// // // //     border: '1px solid #e5e7eb',
// // // //     borderRadius: '8px',
// // // //     backgroundColor: '#f9fafb'
// // // //   };

// // // //   const formContentStyles = {
// // // //     display: 'flex',
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     gap: '1rem'
// // // //   };

// // // //   const inputGroupStyles = {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '0.5rem'
// // // //   };

// // // //   const labelStyles = {
// // // //     fontSize: '14px',
// // // //     fontWeight: '500'
// // // //   };

// // // //   const inputStyles = {
// // // //     padding: '0.5rem',
// // // //     border: '1px solid #d1d5db',
// // // //     borderRadius: '4px',
// // // //     width: '70px'
// // // //   };

// // // //   const buttonStyles = {
// // // //     padding: '0.5rem 1rem',
// // // //     backgroundColor: '#3b82f6',
// // // //     color: 'white',
// // // //     border: 'none',
// // // //     borderRadius: '4px',
// // // //     cursor: 'pointer',
// // // //     height: 'fit-content'
// // // //   };

// // // //   const errorStyles = {
// // // //     color: 'red',
// // // //     fontSize: '14px',
// // // //     marginBottom: '0.5rem'
// // // //   };

// // // //   const presetButtonStyles = {
// // // //     padding: '0.25rem 0.5rem',
// // // //     backgroundColor: '#3b82f6',
// // // //     color: 'white',
// // // //     border: '1px solid #2563eb',
// // // //     borderRadius: '4px',
// // // //     margin: '0.25rem',
// // // //     cursor: 'pointer',
// // // //     fontWeight: 'bold'
// // // //   };

// // // //   return (
// // // //     <form style={formStyles} onSubmit={handleSubmit}>
// // // //       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Fraction Circle Visualizer</h3>
// // // //       {error && <div style={errorStyles}>{error}</div>}
      
// // // //       <div style={formContentStyles}>
// // // //         <div style={inputGroupStyles}>
// // // //           <label htmlFor="numerator" style={labelStyles}>Numerator</label>
// // // //           <input
// // // //             id="numerator"
// // // //             type="number"
// // // //             value={numerator}
// // // //             onChange={(e) => setNumerator(e.target.value)}
// // // //             style={inputStyles}
// // // //             min="0"
// // // //           />
// // // //         </div>
        
// // // //         <div style={inputGroupStyles}>
// // // //           <label htmlFor="denominator" style={labelStyles}>Denominator</label>
// // // //           <input
// // // //             id="denominator"
// // // //             type="number"
// // // //             value={denominator}
// // // //             onChange={(e) => setDenominator(e.target.value)}
// // // //             style={inputStyles}
// // // //             min="1"
// // // //           />
// // // //         </div>
        
// // // //         <button type="submit" style={buttonStyles}>Visualize</button>
// // // //       </div>
      
// // // //       <div style={{marginTop: '0.5rem'}}>
// // // //         <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
// // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(2); }}>1/2</button>
// // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(3); }}>1/3</button>
// // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(2); setDenominator(3); }}>2/3</button>
// // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(4); }}>1/4</button>
// // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(4); }}>3/4</button>
// // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(1); setDenominator(5); }}>1/5</button>
// // // //           <button type="button" style={presetButtonStyles} onClick={() => { setNumerator(3); setDenominator(5); }}>3/5</button>
// // // //         </div>
// // // //       </div>
// // // //     </form>
// // // //   );
// // // // };

// // // // // Add a new main App component to manage state
// // // // const FractionCircleApp = () => {
// // // //   const [fractionState, setFractionState] = useState({
// // // //     numerator: 3,
// // // //     denominator: 4,
// // // //     showVisualization: true
// // // //   });

// // // //   const handleFractionSubmit = (numerator, denominator) => {
// // // //     setFractionState({
// // // //       numerator,
// // // //       denominator,
// // // //       showVisualization: true
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// // // //       <h1 style={{marginBottom: '2rem'}}>Fraction Circle Visualizer</h1>
// // // //       <FractionInputForm 
// // // //         onSubmit={handleFractionSubmit}
// // // //         initialNumerator={fractionState.numerator}
// // // //         initialDenominator={fractionState.denominator}
// // // //       />
      
// // // //       {fractionState.showVisualization && (
// // // //         <FractionCircle 
// // // //           numerator={fractionState.numerator} 
// // // //           denominator={fractionState.denominator} 
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FractionCircleApp;


// // // import React, { useState } from 'react';

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
// // //           transform={`rotate(${angle}, ${x}, ${y})`}
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
// // //           <>
// // //             <div>
// // //               <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// // //             </div>
// // //             <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
// // //           </>
// // //         )}
// // //         {(remainingNumerator > 0 || (!wholeCircles && remainingNumerator === 0)) && (
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

// // // // Add a new FractionInputForm component
// // // const FractionInputForm = ({ onSubmit, initialNumerator, initialDenominator }) => {
// // //   const [numerator, setNumerator] = useState(initialNumerator || 1);
// // //   const [denominator, setDenominator] = useState(initialDenominator || 4);
// // //   const [error, setError] = useState('');

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
    
// // //     // Validate inputs
// // //     if (!numerator || !denominator) {
// // //       setError('Both numerator and denominator are required');
// // //       return;
// // //     }
    
// // //     if (denominator === 0) {
// // //       setError('Denominator cannot be zero');
// // //       return;
// // //     }

// // //     if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
// // //       setError('Both numerator and denominator must be integers');
// // //       return;
// // //     }

// // //     setError('');
// // //     onSubmit(Number(numerator), Number(denominator));
// // //   };

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
// // //     width: '70px'
// // //   };

// // //   const buttonStyles = {
// // //     padding: '0.5rem 1rem',
// // //     backgroundColor: '#3b82f6',
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     height: 'fit-content'
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
// // //     <form style={formStyles} onSubmit={handleSubmit}>
// // //       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Fraction Circle Visualizer</h3>
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
        
// // //         <button type="submit" style={buttonStyles}>Visualize</button>
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
// // //     </form>
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
// // //       <h1 style={{marginBottom: '2rem'}}>Fraction Circle Visualizer</h1>
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


// // import React, { useState } from 'react';

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
// //           <>
// //             <div>
// //               <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// //             </div>
// //             <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
// //           </>
// //         )}
// //         {(remainingNumerator > 0 || (!wholeCircles && remainingNumerator === 0)) && (
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

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Validate inputs
// //     if (!numerator || !denominator) {
// //       setError('Both numerator and denominator are required');
// //       return;
// //     }
    
// //     if (denominator === 0) {
// //       setError('Denominator cannot be zero');
// //       return;
// //     }

// //     if (!Number.isInteger(Number(numerator)) || !Number.isInteger(Number(denominator))) {
// //       setError('Both numerator and denominator must be integers');
// //       return;
// //     }

// //     setError('');
// //     onSubmit(Number(numerator), Number(denominator));
// //   };

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

// //   const buttonStyles = {
// //     padding: '0.5rem 1rem',
// //     backgroundColor: '#3b82f6',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     height: '36px' // Match height of inputs
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
// //     <form style={formStyles} onSubmit={handleSubmit}>
// //       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Fraction Circle Visualizer</h3>
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
        
// //         <button type="submit" style={buttonStyles}>Visualize</button>
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
// //     </form>
// //   );
// // };

// // // Add a new main App component to manage state
// // const FractionCircleApp = () => {
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

// //   return (
// //     <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
// //       <h1 style={{marginBottom: '2rem'}}>Fraction Circle Visualizer</h1>
// //       <FractionInputForm 
// //         onSubmit={handleFractionSubmit}
// //         initialNumerator={fractionState.numerator}
// //         initialDenominator={fractionState.denominator}
// //       />
      
// //       {fractionState.showVisualization && (
// //         <FractionCircle 
// //           numerator={fractionState.numerator} 
// //           denominator={fractionState.denominator} 
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default FractionCircleApp;


// import React, { useState, useEffect } from 'react';

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
//           <>
//             <div>
//               <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
//             </div>
//             <span style={{fontSize: '64px', fontWeight: 'bold', marginBottom: size/2 - 32}}>+</span>
//           </>
//         )}
//         {(remainingNumerator > 0 || (!wholeCircles && remainingNumerator === 0)) && (
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
//     if (numerator && denominator && denominator !== 0 && 
//         Number.isInteger(Number(numerator)) && Number.isInteger(Number(denominator))) {
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
//       <h3 style={{margin: '0 0 0.5rem 0', fontSize: '16px'}}>Fraction Circle Visualizer</h3>
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

// // Add a new main App component to manage state
// const FractionCircleApp = () => {
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

//   return (
//     <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//       <h1 style={{marginBottom: '2rem'}}>Fraction Circle Visualizer</h1>
//       <FractionInputForm 
//         onSubmit={handleFractionSubmit}
//         initialNumerator={fractionState.numerator}
//         initialDenominator={fractionState.denominator}
//       />
      
//       {fractionState.showVisualization && (
//         <FractionCircle 
//           numerator={fractionState.numerator} 
//           denominator={fractionState.denominator} 
//         />
//       )}
//     </div>
//   );
// };

// export default FractionCircleApp;


import React, { useState, useEffect } from 'react';

// Keep the existing CircleDisplay component
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

// Keep the existing DataTable component
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

// Keep the existing FractionCircle component
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

  // Auto-render on input change
  useEffect(() => {
    if (numerator && denominator) {
      // Check for division by zero
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

// Add a new main App component to manage state
const FractionCircleApp = () => {
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

  return (
    <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {/* <h1 style={{marginBottom: '2rem'}}>Fraction Circle Visualizer</h1> */}
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
  );
};

export default FractionCircleApp;