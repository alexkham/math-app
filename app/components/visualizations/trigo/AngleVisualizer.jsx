// import React, { useState, useRef, useEffect } from 'react';

// export default function AngleVisualizer() {
//   const [angle, setAngle] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [lastAngle, setLastAngle] = useState(0);
//   const [useRadians, setUseRadians] = useState(false);
//   const canvasRef = useRef(null);

//   const toRadians = (degrees) => (degrees * Math.PI / 180).toFixed(2);
//   const toDegrees = (radians) => (radians * 180 / Math.PI);
//   const roundAngle = (value) => Math.round(value * 100) / 100;

//   const calculateRawAngle = (x, y, centerX, centerY) => {
//     const deltaX = x - centerX;
//     const deltaY = centerY - y;
//     let angleRad = Math.atan2(deltaY, deltaX);
//     let angleDeg = angleRad * (180 / Math.PI);
//     if (angleDeg < 0) angleDeg += 360;
//     return angleDeg;
//   };

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
    
//     const rawAngle = calculateRawAngle(x, y, centerX, centerY);
//     setLastAngle(rawAngle);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
    
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
    
//     const rawAngle = calculateRawAngle(x, y, centerX, centerY);
//     let delta = rawAngle - lastAngle;
    
//     // Handle crossing 0/360 boundary
//     if (delta > 180) {
//       delta -= 360;
//     } else if (delta < -180) {
//       delta += 360;
//     }
    
//     setAngle(prev => roundAngle(prev + delta));
//     setLastAngle(rawAngle);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const downloadSVG = () => {
//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("width", "500");
//     svg.setAttribute("height", "500");
//     svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    
//     const centerX = 250;
//     const centerY = 250;
//     const radius = 150;
    
//     // Background
//     const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//     rect.setAttribute("width", "500");
//     rect.setAttribute("height", "500");
//     rect.setAttribute("fill", "white");
//     svg.appendChild(rect);
    
//     // Outer circle
//     const outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     outerCircle.setAttribute("cx", centerX);
//     outerCircle.setAttribute("cy", centerY);
//     outerCircle.setAttribute("r", radius);
//     outerCircle.setAttribute("fill", "none");
//     outerCircle.setAttribute("stroke", "#d1d5db");
//     outerCircle.setAttribute("stroke-width", "3");
//     svg.appendChild(outerCircle);
    
//     // Inner circles
//     const innerCircle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     innerCircle1.setAttribute("cx", centerX);
//     innerCircle1.setAttribute("cy", centerY);
//     innerCircle1.setAttribute("r", radius * 0.66);
//     innerCircle1.setAttribute("fill", "none");
//     innerCircle1.setAttribute("stroke", "#e5e7eb");
//     innerCircle1.setAttribute("stroke-width", "1");
//     svg.appendChild(innerCircle1);
    
//     const innerCircle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     innerCircle2.setAttribute("cx", centerX);
//     innerCircle2.setAttribute("cy", centerY);
//     innerCircle2.setAttribute("r", radius * 0.33);
//     innerCircle2.setAttribute("fill", "none");
//     innerCircle2.setAttribute("stroke", "#e5e7eb");
//     innerCircle2.setAttribute("stroke-width", "1");
//     svg.appendChild(innerCircle2);
    
//     // X-axis
//     const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     xAxis.setAttribute("x1", centerX - radius - 20);
//     xAxis.setAttribute("y1", centerY);
//     xAxis.setAttribute("x2", centerX + radius + 20);
//     xAxis.setAttribute("y2", centerY);
//     xAxis.setAttribute("stroke", "#9ca3af");
//     xAxis.setAttribute("stroke-width", "2");
//     svg.appendChild(xAxis);
    
//     // Y-axis
//     const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     yAxis.setAttribute("x1", centerX);
//     yAxis.setAttribute("y1", centerY - radius - 20);
//     yAxis.setAttribute("x2", centerX);
//     yAxis.setAttribute("y2", centerY + radius + 20);
//     yAxis.setAttribute("stroke", "#9ca3af");
//     yAxis.setAttribute("stroke-width", "2");
//     svg.appendChild(yAxis);
    
//     // Axis arrows
//     const xArrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
//     xArrow.setAttribute("points", `${centerX + radius + 20},${centerY} ${centerX + radius + 10},${centerY - 5} ${centerX + radius + 10},${centerY + 5}`);
//     xArrow.setAttribute("fill", "#9ca3af");
//     svg.appendChild(xArrow);
    
//     const yArrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
//     yArrow.setAttribute("points", `${centerX},${centerY - radius - 20} ${centerX - 5},${centerY - radius - 10} ${centerX + 5},${centerY - radius - 10}`);
//     yArrow.setAttribute("fill", "#9ca3af");
//     svg.appendChild(yArrow);
    
//     // Angle marks
//     for (let i = 0; i < 360; i += 30) {
//       const rad = i * (Math.PI / 180);
//       const x = centerX + (radius + 30) * Math.cos(rad);
//       const y = centerY - (radius + 30) * Math.sin(rad);
      
//       const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
//       text.setAttribute("x", x);
//       text.setAttribute("y", y);
//       text.setAttribute("text-anchor", "middle");
//       text.setAttribute("dominant-baseline", "middle");
//       text.setAttribute("fill", "#6b7280");
//       text.setAttribute("font-size", "12");
//       text.setAttribute("font-family", "system-ui");
//       text.textContent = useRadians ? (i * Math.PI / 180).toFixed(2) : i + '°';
//       svg.appendChild(text);
      
//       const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
//       tick.setAttribute("x1", centerX + radius * Math.cos(rad));
//       tick.setAttribute("y1", centerY - radius * Math.sin(rad));
//       tick.setAttribute("x2", centerX + (radius + 10) * Math.cos(rad));
//       tick.setAttribute("y2", centerY - (radius + 10) * Math.sin(rad));
//       tick.setAttribute("stroke", "#9ca3af");
//       tick.setAttribute("stroke-width", "2");
//       svg.appendChild(tick);
//     }
    
//     // Angle area fill
//     const angleRad = (angle % 360) * (Math.PI / 180);
//     const endX = centerX + radius * Math.cos(angleRad);
//     const endY = centerY - radius * Math.sin(angleRad);
    
//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     const largeArc = Math.abs(angleRad) > Math.PI ? 1 : 0;
//     const sweep = angleRad < 0 ? 1 : 0;
//     path.setAttribute("d", `M ${centerX} ${centerY} L ${centerX + radius} ${centerY} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${endX} ${endY} Z`);
//     path.setAttribute("fill", "rgba(59, 130, 246, 0.15)");
//     svg.appendChild(path);
    
//     // Angle line
//     const angleLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
//     angleLine.setAttribute("x1", centerX);
//     angleLine.setAttribute("y1", centerY);
//     angleLine.setAttribute("x2", endX);
//     angleLine.setAttribute("y2", endY);
//     angleLine.setAttribute("stroke", "#3b82f6");
//     angleLine.setAttribute("stroke-width", "3");
//     svg.appendChild(angleLine);
    
//     // Angle arc
//     const arcPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     const arcEndX = centerX + 50 * Math.cos(angleRad);
//     const arcEndY = centerY - 50 * Math.sin(angleRad);
//     const arcLargeArc = Math.abs(angleRad) > Math.PI ? 1 : 0;
//     const arcSweep = angleRad < 0 ? 1 : 0;
//     arcPath.setAttribute("d", `M ${centerX + 50} ${centerY} A 50 50 0 ${arcLargeArc} ${arcSweep} ${arcEndX} ${arcEndY}`);
//     arcPath.setAttribute("fill", "none");
//     arcPath.setAttribute("stroke", "#3b82f6");
//     arcPath.setAttribute("stroke-width", "2");
//     svg.appendChild(arcPath);
    
//     // Arrow
//     const angle1 = angleRad + Math.PI + 0.3;
//     const angle2 = angleRad + Math.PI - 0.3;
//     const arrowLength = 15;
//     const arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
//     arrow.setAttribute("points", `${endX},${endY} ${endX + arrowLength * Math.cos(angle1)},${endY - arrowLength * Math.sin(angle1)} ${endX + arrowLength * Math.cos(angle2)},${endY - arrowLength * Math.sin(angle2)}`);
//     arrow.setAttribute("fill", "#3b82f6");
//     svg.appendChild(arrow);
    
//     // Center point
//     const centerPoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//     centerPoint.setAttribute("cx", centerX);
//     centerPoint.setAttribute("cy", centerY);
//     centerPoint.setAttribute("r", "4");
//     centerPoint.setAttribute("fill", "#1f2937");
//     svg.appendChild(centerPoint);
    
//     // Angle text
//     const angleText = document.createElementNS("http://www.w3.org/2000/svg", "text");
//     angleText.setAttribute("x", centerX);
//     angleText.setAttribute("y", centerY - 70);
//     angleText.setAttribute("text-anchor", "middle");
//     angleText.setAttribute("dominant-baseline", "middle");
//     angleText.setAttribute("fill", "#1f2937");
//     angleText.setAttribute("font-size", "20");
//     angleText.setAttribute("font-weight", "bold");
//     angleText.setAttribute("font-family", "system-ui");
//     angleText.textContent = 'θ = ' + displayAngle + unit;
//     svg.appendChild(angleText);
    
//     // Download
//     const svgData = new XMLSerializer().serializeToString(svg);
//     const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
//     const svgUrl = URL.createObjectURL(svgBlob);
//     const downloadLink = document.createElement("a");
//     downloadLink.href = svgUrl;
//     downloadLink.download = `angle-${angle.toFixed(2)}-degrees.svg`;
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//     URL.revokeObjectURL(svgUrl);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     const radius = 150;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw outer circle
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//     ctx.strokeStyle = '#d1d5db';
//     ctx.lineWidth = 3;
//     ctx.stroke();

//     // Draw inner circles
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius * 0.66, 0, 2 * Math.PI);
//     ctx.strokeStyle = '#e5e7eb';
//     ctx.lineWidth = 1;
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius * 0.33, 0, 2 * Math.PI);
//     ctx.strokeStyle = '#e5e7eb';
//     ctx.lineWidth = 1;
//     ctx.stroke();

//     // Draw axis lines (X and Y)
//     ctx.strokeStyle = '#9ca3af';
//     ctx.lineWidth = 2;
    
//     // X-axis
//     ctx.beginPath();
//     ctx.moveTo(centerX - radius - 20, centerY);
//     ctx.lineTo(centerX + radius + 20, centerY);
//     ctx.stroke();
    
//     // Y-axis
//     ctx.beginPath();
//     ctx.moveTo(centerX, centerY - radius - 20);
//     ctx.lineTo(centerX, centerY + radius + 20);
//     ctx.stroke();

//     // Draw axis arrows
//     const arrowSize = 10;
    
//     // X-axis arrow
//     ctx.beginPath();
//     ctx.moveTo(centerX + radius + 20, centerY);
//     ctx.lineTo(centerX + radius + 20 - arrowSize, centerY - arrowSize/2);
//     ctx.lineTo(centerX + radius + 20 - arrowSize, centerY + arrowSize/2);
//     ctx.closePath();
//     ctx.fillStyle = '#9ca3af';
//     ctx.fill();
    
//     // Y-axis arrow
//     ctx.beginPath();
//     ctx.moveTo(centerX, centerY - radius - 20);
//     ctx.lineTo(centerX - arrowSize/2, centerY - radius - 20 + arrowSize);
//     ctx.lineTo(centerX + arrowSize/2, centerY - radius - 20 + arrowSize);
//     ctx.closePath();
//     ctx.fill();

//     // Draw angle marks every 30 degrees
//     ctx.fillStyle = '#6b7280';
//     ctx.font = '12px system-ui';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
    
//     for (let i = 0; i < 360; i += 30) {
//       const rad = i * (Math.PI / 180);
//       const x = centerX + (radius + 30) * Math.cos(rad);
//       const y = centerY - (radius + 30) * Math.sin(rad);
      
//       if (useRadians) {
//         const radValue = (i * Math.PI / 180).toFixed(2);
//         ctx.fillText(radValue, x, y);
//       } else {
//         ctx.fillText(i + '°', x, y);
//       }
      
//       // Draw tick marks
//       ctx.beginPath();
//       ctx.moveTo(centerX + radius * Math.cos(rad), centerY - radius * Math.sin(rad));
//       ctx.lineTo(centerX + (radius + 10) * Math.cos(rad), centerY - (radius + 10) * Math.sin(rad));
//       ctx.strokeStyle = '#9ca3af';
//       ctx.lineWidth = 2;
//       ctx.stroke();
//     }

//     // Draw angle line
//     const angleRad = (angle % 360) * (Math.PI / 180);
//     const endX = centerX + radius * Math.cos(angleRad);
//     const endY = centerY - radius * Math.sin(angleRad);

//     // Fill the angle area with light blue
//     ctx.beginPath();
//     ctx.moveTo(centerX, centerY);
//     ctx.arc(centerX, centerY, radius, 0, -angleRad, true);
//     ctx.closePath();
//     ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(centerX, centerY);
//     ctx.lineTo(endX, endY);
//     ctx.strokeStyle = '#3b82f6';
//     ctx.lineWidth = 3;
//     ctx.stroke();

//     // Draw angle arc
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, 50, 0, -angleRad, true);
//     ctx.strokeStyle = '#3b82f6';
//     ctx.lineWidth = 2;
//     ctx.stroke();

//     // Draw arrow at end of angle line
//     const arrowLength = 15;
    
//     const angle1 = angleRad + Math.PI + 0.3;
//     const angle2 = angleRad + Math.PI - 0.3;
    
//     ctx.beginPath();
//     ctx.moveTo(endX, endY);
//     ctx.lineTo(
//       endX + arrowLength * Math.cos(angle1),
//       endY - arrowLength * Math.sin(angle1)
//     );
//     ctx.lineTo(
//       endX + arrowLength * Math.cos(angle2),
//       endY - arrowLength * Math.sin(angle2)
//     );
//     ctx.closePath();
//     ctx.fillStyle = '#3b82f6';
//     ctx.fill();

//     // Draw angle notation inside circle
//     ctx.fillStyle = '#1f2937';
//     ctx.font = 'bold 20px system-ui';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.fillText('θ = ' + displayAngle + unit, centerX, centerY - 70);

//     // Draw center point
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
//     ctx.fillStyle = '#1f2937';
//     ctx.fill();
//   }, [angle, useRadians]);

//   useEffect(() => {
//     window.addEventListener('mouseup', handleMouseUp);
//     return () => window.removeEventListener('mouseup', handleMouseUp);
//   }, []);

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '40px',
//     fontFamily: 'system-ui, -apple-system, sans-serif',
//     backgroundColor: '#f9fafb',
//     minHeight: '100vh',
//     position: 'relative'
//   };

//   const downloadButtonStyle = {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     padding: '10px 20px',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: 'white',
//     backgroundColor: '#3b82f6',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s'
//   };

//   const mainContentStyle = {
//     display: 'flex',
//     gap: '40px',
//     alignItems: 'flex-start'
//   };

//   const sideInfoStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//     maxWidth: '250px'
//   };

//   const infoBoxStyle = {
//     padding: '20px',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     border: '2px solid #e5e7eb',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
//   };

//   const infoTitleStyle = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#1f2937',
//     marginBottom: '8px'
//   };

//   const infoTextStyle = {
//     fontSize: '13px',
//     color: '#6b7280',
//     lineHeight: '1.5'
//   };

//   const roundDisplayStyle = {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#3b82f6',
//     marginBottom: '5px'
//   };

//   const titleStyle = {
//     fontSize: '32px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     color: '#1f2937'
//   };

//   const angleDisplayStyle = {
//     fontSize: '48px',
//     fontWeight: 'bold',
//     color: '#3b82f6',
//     marginBottom: '30px'
//   };

//   const rotationsStyle = {
//     fontSize: '16px',
//     color: '#6b7280',
//     marginBottom: '20px'
//   };

//   const rounds = Math.floor(angle / 360);
//   const rotations = Math.floor(Math.abs(angle) / 360);
//   const displayRotations = rotations > 0 ? `(${rotations} full rotation${rotations > 1 ? 's' : ''})` : '';
//   const displayRounds = `Round: ${rounds}`;
  
//   // Calculate proper position in circle (0-359)
//   let positionInCircle = angle % 360;
//   if (positionInCircle < 0) {
//     positionInCircle = 360 + positionInCircle;
//   }
  
//   const displayAngle = useRadians ? toRadians(angle) : angle.toFixed(2);
//   const displayPosition = useRadians ? toRadians(positionInCircle) : positionInCircle.toFixed(2);
//   const unit = useRadians ? ' rad' : '°';

//   const canvasStyle = {
//     border: '2px solid #e5e7eb',
//     borderRadius: '8px',
//     backgroundColor: 'white',
//     cursor: isDragging ? 'grabbing' : 'grab',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
//   };

//   const instructionStyle = {
//     marginTop: '20px',
//     fontSize: '16px',
//     color: '#6b7280',
//     textAlign: 'center'
//   };

//   const controlsStyle = {
//     marginTop: '30px',
//     display: 'flex',
//     gap: '20px',
//     alignItems: 'center'
//   };

//   const sliderStyle = {
//     width: '300px',
//     height: '6px',
//     borderRadius: '3px',
//     outline: 'none',
//     cursor: 'pointer'
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: 'white',
//     backgroundColor: '#3b82f6',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s'
//   };

//   return (
//     <div style={containerStyle}>
//       <button
//         style={downloadButtonStyle}
//         onClick={downloadSVG}
//         onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
//         onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
//       >
//         Download SVG
//       </button>
      
//       <h1 style={titleStyle}>Angle Visualizer</h1>
//       <div style={angleDisplayStyle}>{displayAngle}{unit}</div>
      
//       <div style={mainContentStyle}>
//         <div style={sideInfoStyle}>
//           <div style={infoBoxStyle}>
//             <div style={infoTitleStyle}>Round Count</div>
//             <div style={roundDisplayStyle}>{rounds}</div>
//             <div style={infoTextStyle}>
//               <strong>Breakdown:</strong><br/>
//               {displayAngle}{unit} = ({rounds} × {useRadians ? '2π' : '360°'}) + {displayPosition}{unit}
//               <br/><br/>
//               Position in circle: {displayPosition}{unit}
//             </div>
//           </div>
          
//           <div style={infoBoxStyle}>
//             <div style={infoTitleStyle}>About Rounds</div>
//             <div style={infoTextStyle}>
//               Each complete {useRadians ? '2π' : '360°'} rotation counts as one round. You can rotate infinitely in either direction.
//             </div>
//           </div>
//         </div>
        
//         <canvas
//           ref={canvasRef}
//           width={500}
//           height={500}
//           style={canvasStyle}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//         />
//       </div>
      
//       <p style={instructionStyle}>
//         Drag anywhere on the canvas to adjust the angle
//       </p>
      
//       <div style={controlsStyle}>
//         <input
//           type="number"
//           value={useRadians ? toRadians(angle) : angle.toFixed(2)}
//           onChange={(e) => {
//             const val = parseFloat(e.target.value) || 0;
//             setAngle(useRadians ? toDegrees(val) : val);
//           }}
//           step={useRadians ? "0.01" : "1"}
//           style={{
//             width: '120px',
//             padding: '10px',
//             fontSize: '16px',
//             border: '2px solid #e5e7eb',
//             borderRadius: '6px',
//             textAlign: 'center'
//           }}
//         />
//         <button
//           style={{
//             ...buttonStyle,
//             backgroundColor: useRadians ? '#10b981' : '#6b7280'
//           }}
//           onClick={() => setUseRadians(!useRadians)}
//           onMouseEnter={(e) => e.target.style.backgroundColor = useRadians ? '#059669' : '#4b5563'}
//           onMouseLeave={(e) => e.target.style.backgroundColor = useRadians ? '#10b981' : '#6b7280'}
//         >
//           {useRadians ? 'Switch to Degrees' : 'Switch to Radians'}
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => setAngle(0)}
//           onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
//           onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';

export default function AngleVisualizer() {
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastAngle, setLastAngle] = useState(0);
  const [useRadians, setUseRadians] = useState(false);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);

  const toRadians = (degrees) => (degrees * Math.PI / 180);
  const toDegrees = (radians) => (radians * 180 / Math.PI);
  const roundAngle = (value) => Math.round(value * 100) / 100;

  const calculateRawAngle = (x, y, centerX, centerY) => {
    const deltaX = x - centerX;
    const deltaY = centerY - y;
    let angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = angleRad * (180 / Math.PI);
    if (angleDeg < 0) angleDeg += 360;
    return angleDeg;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const rawAngle = calculateRawAngle(x, y, centerX, centerY);
    setLastAngle(rawAngle);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const rawAngle = calculateRawAngle(x, y, centerX, centerY);
    let delta = rawAngle - lastAngle;
    
    // Handle crossing 0/360 boundary
    if (delta > 180) {
      delta -= 360;
    } else if (delta < -180) {
      delta += 360;
    }
    
    setAngle(prev => roundAngle(prev + delta));
    setLastAngle(rawAngle);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const downloadSVG = () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "500");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    
    const centerX = 250;
    const centerY = 250;
    const radius = 150;
    
    // Background
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "500");
    rect.setAttribute("height", "500");
    rect.setAttribute("fill", "white");
    svg.appendChild(rect);
    
    // Outer circle
    const outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outerCircle.setAttribute("cx", centerX);
    outerCircle.setAttribute("cy", centerY);
    outerCircle.setAttribute("r", radius);
    outerCircle.setAttribute("fill", "none");
    outerCircle.setAttribute("stroke", "#d1d5db");
    outerCircle.setAttribute("stroke-width", "3");
    svg.appendChild(outerCircle);
    
    // Inner circles
    const innerCircle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    innerCircle1.setAttribute("cx", centerX);
    innerCircle1.setAttribute("cy", centerY);
    innerCircle1.setAttribute("r", radius * 0.66);
    innerCircle1.setAttribute("fill", "none");
    innerCircle1.setAttribute("stroke", "#e5e7eb");
    innerCircle1.setAttribute("stroke-width", "1");
    svg.appendChild(innerCircle1);
    
    const innerCircle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    innerCircle2.setAttribute("cx", centerX);
    innerCircle2.setAttribute("cy", centerY);
    innerCircle2.setAttribute("r", radius * 0.33);
    innerCircle2.setAttribute("fill", "none");
    innerCircle2.setAttribute("stroke", "#e5e7eb");
    innerCircle2.setAttribute("stroke-width", "1");
    svg.appendChild(innerCircle2);
    
    // X-axis
    const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxis.setAttribute("x1", centerX - radius - 20);
    xAxis.setAttribute("y1", centerY);
    xAxis.setAttribute("x2", centerX + radius + 20);
    xAxis.setAttribute("y2", centerY);
    xAxis.setAttribute("stroke", "#9ca3af");
    xAxis.setAttribute("stroke-width", "2");
    svg.appendChild(xAxis);
    
    // Y-axis
    const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yAxis.setAttribute("x1", centerX);
    yAxis.setAttribute("y1", centerY - radius - 20);
    yAxis.setAttribute("x2", centerX);
    yAxis.setAttribute("y2", centerY + radius + 20);
    yAxis.setAttribute("stroke", "#9ca3af");
    yAxis.setAttribute("stroke-width", "2");
    svg.appendChild(yAxis);
    
    // Axis arrows
    const xArrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    xArrow.setAttribute("points", `${centerX + radius + 20},${centerY} ${centerX + radius + 10},${centerY - 5} ${centerX + radius + 10},${centerY + 5}`);
    xArrow.setAttribute("fill", "#9ca3af");
    svg.appendChild(xArrow);
    
    const yArrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    yArrow.setAttribute("points", `${centerX},${centerY - radius - 20} ${centerX - 5},${centerY - radius - 10} ${centerX + 5},${centerY - radius - 10}`);
    yArrow.setAttribute("fill", "#9ca3af");
    svg.appendChild(yArrow);
    
    // Angle marks
    for (let i = 0; i < 360; i += 30) {
      const rad = i * (Math.PI / 180);
      const x = centerX + (radius + 30) * Math.cos(rad);
      const y = centerY - (radius + 30) * Math.sin(rad);
      
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", x);
      text.setAttribute("y", y);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.setAttribute("fill", "#6b7280");
      text.setAttribute("font-size", "12");
      text.setAttribute("font-family", "system-ui");
      text.textContent = useRadians ? (i * Math.PI / 180).toFixed(2) : i + '°';
      svg.appendChild(text);
      
      const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
      tick.setAttribute("x1", centerX + radius * Math.cos(rad));
      tick.setAttribute("y1", centerY - radius * Math.sin(rad));
      tick.setAttribute("x2", centerX + (radius + 10) * Math.cos(rad));
      tick.setAttribute("y2", centerY - (radius + 10) * Math.sin(rad));
      tick.setAttribute("stroke", "#9ca3af");
      tick.setAttribute("stroke-width", "2");
      svg.appendChild(tick);
    }
    
    // Angle area fill
    const angleRad = (angle % 360) * (Math.PI / 180);
    const endX = centerX + radius * Math.cos(angleRad);
    const endY = centerY - radius * Math.sin(angleRad);
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const largeArc = Math.abs(angleRad) > Math.PI ? 1 : 0;
    const sweep = angleRad < 0 ? 1 : 0;
    path.setAttribute("d", `M ${centerX} ${centerY} L ${centerX + radius} ${centerY} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${endX} ${endY} Z`);
    path.setAttribute("fill", "rgba(59, 130, 246, 0.15)");
    svg.appendChild(path);
    
    // Angle line
    const angleLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    angleLine.setAttribute("x1", centerX);
    angleLine.setAttribute("y1", centerY);
    angleLine.setAttribute("x2", endX);
    angleLine.setAttribute("y2", endY);
    angleLine.setAttribute("stroke", "#3b82f6");
    angleLine.setAttribute("stroke-width", "3");
    svg.appendChild(angleLine);
    
    // Angle arc
    const arcPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const arcEndX = centerX + 50 * Math.cos(angleRad);
    const arcEndY = centerY - 50 * Math.sin(angleRad);
    const arcLargeArc = Math.abs(angleRad) > Math.PI ? 1 : 0;
    const arcSweep = angleRad < 0 ? 1 : 0;
    arcPath.setAttribute("d", `M ${centerX + 50} ${centerY} A 50 50 0 ${arcLargeArc} ${arcSweep} ${arcEndX} ${arcEndY}`);
    arcPath.setAttribute("fill", "none");
    arcPath.setAttribute("stroke", "#3b82f6");
    arcPath.setAttribute("stroke-width", "2");
    svg.appendChild(arcPath);
    
    // Arrow
    const angle1 = angleRad + Math.PI + 0.3;
    const angle2 = angleRad + Math.PI - 0.3;
    const arrowLength = 15;
    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arrow.setAttribute("points", `${endX},${endY} ${endX + arrowLength * Math.cos(angle1)},${endY - arrowLength * Math.sin(angle1)} ${endX + arrowLength * Math.cos(angle2)},${endY - arrowLength * Math.sin(angle2)}`);
    arrow.setAttribute("fill", "#3b82f6");
    svg.appendChild(arrow);
    
    // Center point
    const centerPoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    centerPoint.setAttribute("cx", centerX);
    centerPoint.setAttribute("cy", centerY);
    centerPoint.setAttribute("r", "4");
    centerPoint.setAttribute("fill", "#1f2937");
    svg.appendChild(centerPoint);
    
    // Angle text
    const angleText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    angleText.setAttribute("x", centerX);
    angleText.setAttribute("y", centerY - 70);
    angleText.setAttribute("text-anchor", "middle");
    angleText.setAttribute("dominant-baseline", "middle");
    angleText.setAttribute("fill", "#1f2937");
    angleText.setAttribute("font-size", "20");
    angleText.setAttribute("font-weight", "bold");
    angleText.setAttribute("font-family", "system-ui");
    angleText.textContent = 'θ = ' + displayAngle + unit;
    svg.appendChild(angleText);
    
    // Download
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `angle-${angle.toFixed(2)}-degrees.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw inner circles
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.66, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.33, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw axis lines (X and Y)
    ctx.strokeStyle = '#9ca3af';
    ctx.lineWidth = 2;
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(centerX - radius - 20, centerY);
    ctx.lineTo(centerX + radius + 20, centerY);
    ctx.stroke();
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - 20);
    ctx.lineTo(centerX, centerY + radius + 20);
    ctx.stroke();

    // Draw axis arrows
    const arrowSize = 10;
    
    // X-axis arrow
    ctx.beginPath();
    ctx.moveTo(centerX + radius + 20, centerY);
    ctx.lineTo(centerX + radius + 20 - arrowSize, centerY - arrowSize/2);
    ctx.lineTo(centerX + radius + 20 - arrowSize, centerY + arrowSize/2);
    ctx.closePath();
    ctx.fillStyle = '#9ca3af';
    ctx.fill();
    
    // Y-axis arrow
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - 20);
    ctx.lineTo(centerX - arrowSize/2, centerY - radius - 20 + arrowSize);
    ctx.lineTo(centerX + arrowSize/2, centerY - radius - 20 + arrowSize);
    ctx.closePath();
    ctx.fill();

    // Draw angle marks every 30 degrees
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < 360; i += 30) {
      const rad = i * (Math.PI / 180);
      const x = centerX + (radius + 30) * Math.cos(rad);
      const y = centerY - (radius + 30) * Math.sin(rad);
      
      if (useRadians) {
        const radValue = (i * Math.PI / 180).toFixed(2);
        ctx.fillText(radValue, x, y);
      } else {
        ctx.fillText(i + '°', x, y);
      }
      
      // Draw tick marks
      ctx.beginPath();
      ctx.moveTo(centerX + radius * Math.cos(rad), centerY - radius * Math.sin(rad));
      ctx.lineTo(centerX + (radius + 10) * Math.cos(rad), centerY - (radius + 10) * Math.sin(rad));
      ctx.strokeStyle = '#9ca3af';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw angle line
    const angleRad = (angle % 360) * (Math.PI / 180);
    const endX = centerX + radius * Math.cos(angleRad);
    const endY = centerY - radius * Math.sin(angleRad);

    // Fill the angle area with light blue
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, -angleRad, true);
    ctx.closePath();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw angle arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, -angleRad, true);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw arrow at end of angle line
    const arrowLength = 15;
    
    const angle1 = angleRad + Math.PI + 0.3;
    const angle2 = angleRad + Math.PI - 0.3;
    
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(
      endX + arrowLength * Math.cos(angle1),
      endY - arrowLength * Math.sin(angle1)
    );
    ctx.lineTo(
      endX + arrowLength * Math.cos(angle2),
      endY - arrowLength * Math.sin(angle2)
    );
    ctx.closePath();
    ctx.fillStyle = '#3b82f6';
    ctx.fill();

    // Draw angle notation inside circle
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 20px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('θ = ' + displayAngle + unit, centerX, centerY - 70);

    // Draw center point
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#1f2937';
    ctx.fill();
  }, [angle, useRadians]);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  useEffect(() => {
    if (inputRef.current && !inputRef.current.matches(':focus')) {
      inputRef.current.value = useRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2);
    }
  }, [angle, useRadians]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    position: 'relative'
  };

  const downloadButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#3b82f6',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  const mainContentStyle = {
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start'
  };

  const sideInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '250px'
  };

  const infoBoxStyle = {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '2px solid #e5e7eb',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };

  const infoTitleStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const infoTextStyle = {
    fontSize: '13px',
    color: '#6b7280',
    lineHeight: '1.5'
  };

  const roundDisplayStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: '5px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#1f2937'
  };

  const angleDisplayStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: '30px'
  };

  const rotationsStyle = {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '20px'
  };

  const rounds = Math.floor(angle / 360);
  const rotations = Math.floor(Math.abs(angle) / 360);
  const displayRotations = rotations > 0 ? `(${rotations} full rotation${rotations > 1 ? 's' : ''})` : '';
  const displayRounds = `Round: ${rounds}`;
  
  // Calculate proper position in circle (0-359)
  let positionInCircle = angle % 360;
  if (positionInCircle < 0) {
    positionInCircle = 360 + positionInCircle;
  }
  
  const displayAngle = useRadians ? toRadians(angle) : angle.toFixed(2);
  const displayPosition = useRadians ? toRadians(positionInCircle) : positionInCircle.toFixed(2);
  const unit = useRadians ? ' rad' : '°';

  const canvasStyle = {
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: 'white',
    cursor: isDragging ? 'grabbing' : 'grab',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const instructionStyle = {
    marginTop: '20px',
    fontSize: '16px',
    color: '#6b7280',
    textAlign: 'center'
  };

  const controlsStyle = {
    marginTop: '30px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  };

  const sliderStyle = {
    width: '300px',
    height: '6px',
    borderRadius: '3px',
    outline: 'none',
    cursor: 'pointer'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#3b82f6',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={containerStyle}>
      <button
        style={downloadButtonStyle}
        onClick={downloadSVG}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
      >
        Download SVG
      </button>
      
      <h1 style={titleStyle}>Angle Visualizer</h1>
      <div style={angleDisplayStyle}>{displayAngle}{unit}</div>
      
      <div style={mainContentStyle}>
        <div style={sideInfoStyle}>
          <div style={infoBoxStyle}>
            <div style={infoTitleStyle}>Round Count</div>
            <div style={roundDisplayStyle}>{rounds}</div>
            <div style={infoTextStyle}>
              <strong>Breakdown:</strong><br/>
              {displayAngle}{unit} = ({rounds} × {useRadians ? '2π' : '360°'}) + {displayPosition}{unit}
              <br/><br/>
              Position in circle: {displayPosition}{unit}
            </div>
          </div>
          
          <div style={infoBoxStyle}>
            <div style={infoTitleStyle}>About Rounds</div>
            <div style={infoTextStyle}>
              Each complete {useRadians ? '2π' : '360°'} rotation counts as one round. You can rotate infinitely in either direction.
            </div>
          </div>
        </div>
        
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          style={canvasStyle}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        />
      </div>
      
      <p style={instructionStyle}>
        Drag anywhere on the canvas to adjust the angle
      </p>
      
      <div style={controlsStyle}>
        <input
          key={useRadians ? 'rad' : 'deg'}
          ref={inputRef}
          type="number"
          defaultValue={useRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2)}
          onChange={(e) => {
            const val = e.target.value === '' || e.target.value === '-' ? 0 : parseFloat(e.target.value);
            if (!isNaN(val)) {
              setAngle(roundAngle(useRadians ? toDegrees(val) : val));
            }
          }}
          step="0.01"
          style={{
            width: '120px',
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #e5e7eb',
            borderRadius: '6px',
            textAlign: 'center'
          }}
        />
        <button
          style={{
            ...buttonStyle,
            backgroundColor: useRadians ? '#10b981' : '#6b7280'
          }}
          onClick={() => setUseRadians(!useRadians)}
          onMouseEnter={(e) => e.target.style.backgroundColor = useRadians ? '#059669' : '#4b5563'}
          onMouseLeave={(e) => e.target.style.backgroundColor = useRadians ? '#10b981' : '#6b7280'}
        >
          {useRadians ? 'Switch to Degrees' : 'Switch to Radians'}
        </button>
        <button
          style={buttonStyle}
          onClick={() => setAngle(0)}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}