// // // // // // import React, { useState } from 'react';

// // // // // // const AngleExplorer = () => {
// // // // // //   const [angle, setAngle] = useState(45);
// // // // // //   const [unit, setUnit] = useState('degrees');
// // // // // //   const [showArc, setShowArc] = useState(true);
// // // // // //   const [showReference, setShowReference] = useState(true);
// // // // // //   const [showComplementary, setShowComplementary] = useState(false);
// // // // // //   const [showSupplementary, setShowSupplementary] = useState(false);

// // // // // //   const centerX = 200;
// // // // // //   const centerY = 200;
// // // // // //   const radius = 120;

// // // // // //   // Convert angle to radians for calculations
// // // // // //   const angleRad = unit === 'degrees' ? (angle * Math.PI) / 180 : angle;
// // // // // //   const angleDeg = unit === 'degrees' ? angle : (angle * 180) / Math.PI;

// // // // // //   // Calculate angle properties
// // // // // //   const complementary = 90 - angleDeg;
// // // // // //   const supplementary = 180 - angleDeg;
// // // // // //   const reflex = 360 - angleDeg;
// // // // // //   const coterminalPos = angleDeg + 360;
// // // // // //   const coterminalNeg = angleDeg - 360;

// // // // // //   // Determine quadrant
// // // // // //   const normalizedAngle = ((angleDeg % 360) + 360) % 360;
// // // // // //   let quadrant = 1;
// // // // // //   if (normalizedAngle > 90 && normalizedAngle <= 180) quadrant = 2;
// // // // // //   else if (normalizedAngle > 180 && normalizedAngle <= 270) quadrant = 3;
// // // // // //   else if (normalizedAngle > 270 && normalizedAngle < 360) quadrant = 4;

// // // // // //   // Reference angle
// // // // // //   let referenceAngle = normalizedAngle;
// // // // // //   if (quadrant === 2) referenceAngle = 180 - normalizedAngle;
// // // // // //   else if (quadrant === 3) referenceAngle = normalizedAngle - 180;
// // // // // //   else if (quadrant === 4) referenceAngle = 360 - normalizedAngle;

// // // // // //   // Angle type
// // // // // //   let angleType = 'acute';
// // // // // //   if (angleDeg === 90) angleType = 'right';
// // // // // //   else if (angleDeg > 90 && angleDeg < 180) angleType = 'obtuse';
// // // // // //   else if (angleDeg === 180) angleType = 'straight';
// // // // // //   else if (angleDeg > 180 && angleDeg < 360) angleType = 'reflex';

// // // // // //   // Arc endpoint
// // // // // //   const arcEndX = centerX + radius * Math.cos(angleRad);
// // // // // //   const arcEndY = centerY - radius * Math.sin(angleRad);

// // // // // //   return (
// // // // // //     <div style={{ 
// // // // // //       maxWidth: '1000px', 
// // // // // //       margin: '0 auto', 
// // // // // //       padding: '20px',
// // // // // //       fontFamily: 'Arial, sans-serif'
// // // // // //     }}>
// // // // // //       <h2 style={{ textAlign: 'center', color: '#000' }}>Angle Explorer</h2>
      
// // // // // //       <div style={{ display: 'flex', gap: '30px' }}>
// // // // // //         {/* Controls Panel */}
// // // // // //         <div style={{ flex: '1', background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
// // // // // //           <h3 style={{ margin: '0 0 20px 0', color: '#0066cc' }}>Controls</h3>
          
// // // // // //           <div style={{ marginBottom: '20px' }}>
// // // // // //             <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
// // // // // //               Angle Value:
// // // // // //             </label>
// // // // // //             <input 
// // // // // //               type="number" 
// // // // // //               value={angle} 
// // // // // //               onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
// // // // // //               style={{ width: '100px', padding: '5px', marginRight: '10px' }}
// // // // // //             />
// // // // // //             <select 
// // // // // //               value={unit} 
// // // // // //               onChange={(e) => setUnit(e.target.value)}
// // // // // //               style={{ padding: '5px' }}
// // // // // //             >
// // // // // //               <option value="degrees">Degrees</option>
// // // // // //               <option value="radians">Radians</option>
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           <div style={{ marginBottom: '20px' }}>
// // // // // //             <h4 style={{ margin: '0 0 10px 0' }}>Quick Angles:</h4>
// // // // // //             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
// // // // // //               {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map(deg => (
// // // // // //                 <button
// // // // // //                   key={deg}
// // // // // //                   onClick={() => {setAngle(unit === 'degrees' ? deg : deg * Math.PI / 180)}}
// // // // // //                   style={{
// // // // // //                     padding: '5px 8px',
// // // // // //                     border: '1px solid #ddd',
// // // // // //                     borderRadius: '3px',
// // // // // //                     background: 'white',
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontSize: '12px'
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {deg}°
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //               <button
// // // // // //                 onClick={() => {setAngle(0)}}
// // // // // //                 style={{
// // // // // //                   padding: '5px 8px',
// // // // // //                   border: '1px solid #dc3545',
// // // // // //                   borderRadius: '3px',
// // // // // //                   background: '#dc3545',
// // // // // //                   color: 'white',
// // // // // //                   cursor: 'pointer',
// // // // // //                   fontSize: '12px',
// // // // // //                   fontWeight: 'bold'
// // // // // //                 }}
// // // // // //               >
// // // // // //                 Reset
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div style={{ marginBottom: '20px' }}>
// // // // // //             <h4 style={{ margin: '0 0 10px 0' }}>Display Options:</h4>
// // // // // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// // // // // //               <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // // // //                 <input type="checkbox" checked={showArc} onChange={(e) => setShowArc(e.target.checked)} />
// // // // // //                 Show Angle Arc
// // // // // //               </label>
// // // // // //               <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // // // //                 <input type="checkbox" checked={showReference} onChange={(e) => setShowReference(e.target.checked)} />
// // // // // //                 Show Reference Lines
// // // // // //               </label>
// // // // // //               <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // // // //                 <input type="checkbox" checked={showComplementary} onChange={(e) => setShowComplementary(e.target.checked)} />
// // // // // //                 Show Complementary Angle
// // // // // //               </label>
// // // // // //               <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // // // //                 <input type="checkbox" checked={showSupplementary} onChange={(e) => setShowSupplementary(e.target.checked)} />
// // // // // //                 Show Supplementary Angle
// // // // // //               </label>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Angle Diagram */}
// // // // // //         <div style={{ flex: '1' }}>
// // // // // //           <svg width="400" height="400" viewBox="0 0 400 400" 
// // // // // //                style={{ border: '1px solid #ccc', background: 'white' }}>
            
// // // // // //             {/* Reference grid */}
// // // // // //             {showReference && (
// // // // // //               <g opacity="0.3">
// // // // // //                 <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="1" />
// // // // // //                 <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} stroke="#ddd" />
// // // // // //                 <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} stroke="#ddd" />
                
// // // // // //                 {/* Quadrant labels */}
// // // // // //                 <text x={centerX + 60} y={centerY - 60} fill="#999" fontSize="12">I</text>
// // // // // //                 <text x={centerX - 70} y={centerY - 60} fill="#999" fontSize="12">II</text>
// // // // // //                 <text x={centerX - 70} y={centerY + 70} fill="#999" fontSize="12">III</text>
// // // // // //                 <text x={centerX + 60} y={centerY + 70} fill="#999" fontSize="12">IV</text>
// // // // // //               </g>
// // // // // //             )}
            
// // // // // //             {/* Initial ray (horizontal) */}
// // // // // //             <line x1={centerX} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
// // // // // //                   stroke="#000" strokeWidth="2" />
            
// // // // // //             {/* Terminal ray */}
// // // // // //             <line x1={centerX} y1={centerY} x2={arcEndX} y2={arcEndY} 
// // // // // //                   stroke="#000" strokeWidth="2" />
            
// // // // // //             {/* Angle arc */}
// // // // // //             {showArc && (
// // // // // //               <path
// // // // // //                 d={`M ${centerX + 40} ${centerY} A 40 40 0 ${Math.abs(angleRad) > Math.PI ? 1 : 0} ${angleRad >= 0 ? 0 : 1} ${centerX + 40 * Math.cos(angleRad)} ${centerY - 40 * Math.sin(angleRad)}`}
// // // // // //                 fill="none"
// // // // // //                 stroke="#0066cc"
// // // // // //                 strokeWidth="3"
// // // // // //               />
// // // // // //             )}
            
// // // // // //             {/* Complementary angle arc (90° - θ, shown from terminal ray to vertical) */}
// // // // // //             {showComplementary && complementary >= 0 && complementary <= 90 && (
// // // // // //               <>
// // // // // //                 {/* Vertical ray for complementary angle */}
// // // // // //                 <line x1={centerX} y1={centerY} x2={centerX} y2={centerY - radius} 
// // // // // //                       stroke="#28a745" strokeWidth="2" strokeDasharray="8,4" />
                      
// // // // // //                 <path
// // // // // //                   d={`M ${centerX + 50 * Math.cos(angleRad)} ${centerY - 50 * Math.sin(angleRad)} A 50 50 0 0 ${angleRad < Math.PI/2 ? 0 : 1} ${centerX} ${centerY - 50}`}
// // // // // //                   fill="none"
// // // // // //                   stroke="#28a745"
// // // // // //                   strokeWidth="2"
// // // // // //                   strokeDasharray="5,5"
// // // // // //                 />
// // // // // //                 <text x={centerX + 30} y={centerY - 80} fill="#28a745" fontSize="14" fontWeight="bold">
// // // // // //                   {complementary.toFixed(1)}°
// // // // // //                 </text>
// // // // // //               </>
// // // // // //             )}
            
// // // // // //             {/* Supplementary angle arc (180° - θ, shown from terminal ray to negative x-axis) */}
// // // // // //             {showSupplementary && supplementary > 0 && supplementary <= 180 && (
// // // // // //               <>
// // // // // //                 {/* Negative x-axis ray for supplementary angle */}
// // // // // //                 <line x1={centerX} y1={centerY} x2={centerX - radius} y2={centerY} 
// // // // // //                       stroke="#dc3545" strokeWidth="2" strokeDasharray="8,4" />
                      
// // // // // //                 <path
// // // // // //                   d={`M ${centerX + 70 * Math.cos(angleRad)} ${centerY - 70 * Math.sin(angleRad)} A 70 70 0 0 0 ${centerX - 70} ${centerY}`}
// // // // // //                   fill="none"
// // // // // //                   stroke="#dc3545"
// // // // // //                   strokeWidth="2"
// // // // // //                   strokeDasharray="3,3"
// // // // // //                 />
// // // // // //                 <text x={centerX - 110} y={centerY - 10} fill="#dc3545" fontSize="14" fontWeight="bold">
// // // // // //                   {supplementary.toFixed(1)}°
// // // // // //                 </text>
// // // // // //               </>
// // // // // //             )}
            
// // // // // //             {/* Angle label */}
// // // // // //             <text x={centerX + 50} y={centerY - 10} fill="#0066cc" fontSize="16" fontWeight="bold">
// // // // // //               {angleDeg.toFixed(1)}°
// // // // // //             </text>
            
// // // // // //             {/* Vertex point */}
// // // // // //             <circle cx={centerX} cy={centerY} r="4" fill="#000" />
// // // // // //           </svg>
          
// // // // // //           {/* Trigonometric Values Table */}
// // // // // //           <div style={{ marginTop: '20px', background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
// // // // // //             <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Trigonometric Values</h4>
// // // // // //             <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
// // // // // //               <thead>
// // // // // //                 <tr style={{ borderBottom: '2px solid #ddd' }}>
// // // // // //                   <th style={{ padding: '5px', textAlign: 'center' }}>sin θ</th>
// // // // // //                   <th style={{ padding: '5px', textAlign: 'center' }}>cos θ</th>
// // // // // //                   <th style={{ padding: '5px', textAlign: 'center' }}>tan θ</th>
// // // // // //                 </tr>
// // // // // //               </thead>
// // // // // //               <tbody>
// // // // // //                 <tr>
// // // // // //                   <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #ddd' }}>
// // // // // //                     {(() => {
// // // // // //                       const normalizedDeg = Math.round(((angleDeg % 360) + 360) % 360);
// // // // // //                       const specialValues = {
// // // // // //                         0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1",
// // // // // //                         120: "√3/2", 135: "√2/2", 150: "1/2", 180: "0",
// // // // // //                         210: "-1/2", 225: "-√2/2", 240: "-√3/2", 270: "-1",
// // // // // //                         300: "-√3/2", 315: "-√2/2", 330: "-1/2", 360: "0"
// // // // // //                       };
// // // // // //                       return specialValues[normalizedDeg] || Math.sin(angleRad).toFixed(3);
// // // // // //                     })()}
// // // // // //                   </td>
// // // // // //                   <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #ddd' }}>
// // // // // //                     {(() => {
// // // // // //                       const normalizedDeg = Math.round(((angleDeg % 360) + 360) % 360);
// // // // // //                       const specialValues = {
// // // // // //                         0: "1", 30: "√3/2", 45: "√2/2", 60: "1/2", 90: "0",
// // // // // //                         120: "-1/2", 135: "-√2/2", 150: "-√3/2", 180: "-1",
// // // // // //                         210: "-√3/2", 225: "-√2/2", 240: "-1/2", 270: "0",
// // // // // //                         300: "1/2", 315: "√2/2", 330: "√3/2", 360: "1"
// // // // // //                       };
// // // // // //                       return specialValues[normalizedDeg] || Math.cos(angleRad).toFixed(3);
// // // // // //                     })()}
// // // // // //                   </td>
// // // // // //                   <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #ddd' }}>
// // // // // //                     {(() => {
// // // // // //                       const normalizedDeg = Math.round(((angleDeg % 360) + 360) % 360);
// // // // // //                       const specialValues = {
// // // // // //                         0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "∞",
// // // // // //                         120: "-√3", 135: "-1", 150: "-√3/3", 180: "0",
// // // // // //                         210: "√3/3", 225: "1", 240: "√3", 270: "∞",
// // // // // //                         300: "-√3", 315: "-1", 330: "-√3/3", 360: "0"
// // // // // //                       };
// // // // // //                       const tan = Math.tan(angleRad);
// // // // // //                       return specialValues[normalizedDeg] || (Math.abs(tan) > 1000 ? "∞" : tan.toFixed(3));
// // // // // //                     })()}
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               </tbody>
// // // // // //             </table>
            
// // // // // //             <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', marginTop: '10px' }}>
// // // // // //               <thead>
// // // // // //                 <tr style={{ borderBottom: '2px solid #ddd' }}>
// // // // // //                   <th style={{ padding: '5px', textAlign: 'center' }}>csc θ</th>
// // // // // //                   <th style={{ padding: '5px', textAlign: 'center' }}>sec θ</th>
// // // // // //                   <th style={{ padding: '5px', textAlign: 'center' }}>cot θ</th>
// // // // // //                 </tr>
// // // // // //               </thead>
// // // // // //               <tbody>
// // // // // //                 <tr>
// // // // // //                   <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #ddd' }}>
// // // // // //                     {(() => {
// // // // // //                       const normalizedDeg = Math.round(((angleDeg % 360) + 360) % 360);
// // // // // //                       const specialValues = {
// // // // // //                         0: "∞", 30: "2", 45: "√2", 60: "2√3/3", 90: "1",
// // // // // //                         120: "2√3/3", 135: "√2", 150: "2", 180: "∞",
// // // // // //                         210: "-2", 225: "-√2", 240: "-2√3/3", 270: "-1",
// // // // // //                         300: "-2√3/3", 315: "-√2", 330: "-2", 360: "∞"
// // // // // //                       };
// // // // // //                       const sin = Math.sin(angleRad);
// // // // // //                       return specialValues[normalizedDeg] || (Math.abs(sin) < 0.001 ? "∞" : (1/sin).toFixed(3));
// // // // // //                     })()}
// // // // // //                   </td>
// // // // // //                   <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #ddd' }}>
// // // // // //                     {(() => {
// // // // // //                       const normalizedDeg = Math.round(((angleDeg % 360) + 360) % 360);
// // // // // //                       const specialValues = {
// // // // // //                         0: "1", 30: "2√3/3", 45: "√2", 60: "2", 90: "∞",
// // // // // //                         120: "-2", 135: "-√2", 150: "-2√3/3", 180: "-1",
// // // // // //                         210: "-2√3/3", 225: "-√2", 240: "-2", 270: "∞",
// // // // // //                         300: "2", 315: "√2", 330: "2√3/3", 360: "1"
// // // // // //                       };
// // // // // //                       const cos = Math.cos(angleRad);
// // // // // //                       return specialValues[normalizedDeg] || (Math.abs(cos) < 0.001 ? "∞" : (1/cos).toFixed(3));
// // // // // //                     })()}
// // // // // //                   </td>
// // // // // //                   <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #ddd' }}>
// // // // // //                     {(() => {
// // // // // //                       const normalizedDeg = Math.round(((angleDeg % 360) + 360) % 360);
// // // // // //                       const specialValues = {
// // // // // //                         0: "∞", 30: "√3", 45: "1", 60: "√3/3", 90: "0",
// // // // // //                         120: "-√3/3", 135: "-1", 150: "-√3", 180: "∞",
// // // // // //                         210: "√3", 225: "1", 240: "√3/3", 270: "0",
// // // // // //                         300: "-√3/3", 315: "-1", 330: "-√3", 360: "∞"
// // // // // //                       };
// // // // // //                       const tan = Math.tan(angleRad);
// // // // // //                       return specialValues[normalizedDeg] || (Math.abs(tan) < 0.001 ? "∞" : (1/tan).toFixed(3));
// // // // // //                     })()}
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               </tbody>
// // // // // //             </table>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Properties Panel */}
// // // // // //         <div style={{ flex: '1', background: '#f0f8ff', padding: '20px', borderRadius: '8px' }}>
// // // // // //           <h3 style={{ margin: '0 0 20px 0', color: '#0066cc' }}>Angle Properties</h3>
          
// // // // // //           <div style={{ marginBottom: '15px' }}>
// // // // // //             <strong>Current Angle:</strong><br/>
// // // // // //             {angleDeg.toFixed(2)}° = {angleRad.toFixed(3)} rad
// // // // // //           </div>
          
// // // // // //           <div style={{ marginBottom: '15px' }}>
// // // // // //             <strong>Type:</strong> {angleType}<br/>
// // // // // //             <strong>Quadrant:</strong> {quadrant}
// // // // // //           </div>
          
// // // // // //           <div style={{ marginBottom: '15px' }}>
// // // // // //             <strong>Reference Angle:</strong><br/>
// // // // // //             {referenceAngle.toFixed(1)}°
// // // // // //           </div>
          
// // // // // //           <div style={{ marginBottom: '15px' }}>
// // // // // //             <strong>Complementary:</strong><br/>
// // // // // //             {complementary >= 0 && complementary <= 90 ? `${complementary.toFixed(1)}°` : 'N/A (angle > 90°)'}
// // // // // //           </div>
          
// // // // // //           <div style={{ marginBottom: '15px' }}>
// // // // // //             <strong>Supplementary:</strong><br/>
// // // // // //             {supplementary > 0 ? `${supplementary.toFixed(1)}°` : 'N/A (angle > 180°)'}
// // // // // //           </div>
          
// // // // // //           <div style={{ marginBottom: '15px' }}>
// // // // // //             <strong>Reflex:</strong><br/>
// // // // // //             {reflex.toFixed(1)}°
// // // // // //           </div>
          
// // // // // //           <div style={{ marginBottom: '15px' }}>
// // // // // //             <strong>Coterminal Angles:</strong><br/>
// // // // // //             {coterminalPos.toFixed(1)}° (positive)<br/>
// // // // // //             {coterminalNeg.toFixed(1)}° (negative)
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AngleExplorer;


// // // // // import React, { useState } from 'react';
// // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // const AngleExplorer = () => {
// // // // //   const [angle, setAngle] = useState(45);
// // // // //   const [unit, setUnit] = useState('degrees');
// // // // //   const [showArc, setShowArc] = useState(true);
// // // // //   const [showReference, setShowReference] = useState(true);
// // // // //   const [showComplementary, setShowComplementary] = useState(false);
// // // // //   const [showSupplementary, setShowSupplementary] = useState(false);

// // // // //   const centerX = 200;
// // // // //   const centerY = 200;
// // // // //   const radius = 120;

// // // // //   // Convert angle to radians for calculations
// // // // //   const angleRad = unit === 'degrees' ? (angle * Math.PI) / 180 : angle;
// // // // //   const angleDeg = unit === 'degrees' ? angle : (angle * 180) / Math.PI;

// // // // //   // Calculate angle properties
// // // // //   const complementary = 90 - angleDeg;
// // // // //   const supplementary = 180 - angleDeg;
// // // // //   const reflex = 360 - angleDeg;
// // // // //   const coterminalPos = angleDeg + 360;
// // // // //   const coterminalNeg = angleDeg - 360;

// // // // //   // Determine quadrant
// // // // //   const normalizedAngle = ((angleDeg % 360) + 360) % 360;
// // // // //   let quadrant = 1;
// // // // //   if (normalizedAngle > 90 && normalizedAngle <= 180) quadrant = 2;
// // // // //   else if (normalizedAngle > 180 && normalizedAngle <= 270) quadrant = 3;
// // // // //   else if (normalizedAngle > 270 && normalizedAngle < 360) quadrant = 4;

// // // // //   // Reference angle
// // // // //   let referenceAngle = normalizedAngle;
// // // // //   if (quadrant === 2) referenceAngle = 180 - normalizedAngle;
// // // // //   else if (quadrant === 3) referenceAngle = normalizedAngle - 180;
// // // // //   else if (quadrant === 4) referenceAngle = 360 - normalizedAngle;

// // // // //   // Angle type
// // // // //   let angleType = 'acute';
// // // // //   if (angleDeg === 90) angleType = 'right';
// // // // //   else if (angleDeg > 90 && angleDeg < 180) angleType = 'obtuse';
// // // // //   else if (angleDeg === 180) angleType = 'straight';
// // // // //   else if (angleDeg > 180 && angleDeg < 360) angleType = 'reflex';

// // // // //   // Arc endpoint
// // // // //   const arcEndX = centerX + radius * Math.cos(angleRad);
// // // // //   const arcEndY = centerY - radius * Math.sin(angleRad);

// // // // //   // Get special trigonometric values
// // // // //   const getSpecialValue = (angle, func) => {
// // // // //     const normalizedDeg = Math.round(((angle % 360) + 360) % 360);
// // // // //     const specialValues = {
// // // // //       sin: {
// // // // //         0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1",
// // // // //         120: "√3/2", 135: "√2/2", 150: "1/2", 180: "0",
// // // // //         210: "-1/2", 225: "-√2/2", 240: "-√3/2", 270: "-1",
// // // // //         300: "-√3/2", 315: "-√2/2", 330: "-1/2", 360: "0"
// // // // //       },
// // // // //       cos: {
// // // // //         0: "1", 30: "√3/2", 45: "√2/2", 60: "1/2", 90: "0",
// // // // //         120: "-1/2", 135: "-√2/2", 150: "-√3/2", 180: "-1",
// // // // //         210: "-√3/2", 225: "-√2/2", 240: "-1/2", 270: "0",
// // // // //         300: "1/2", 315: "√2/2", 330: "√3/2", 360: "1"
// // // // //       },
// // // // //       tan: {
// // // // //         0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "∞",
// // // // //         120: "-√3", 135: "-1", 150: "-√3/3", 180: "0",
// // // // //         210: "√3/3", 225: "1", 240: "√3", 270: "∞",
// // // // //         300: "-√3", 315: "-1", 330: "-√3/3", 360: "0"
// // // // //       }
// // // // //     };
    
// // // // //     return specialValues[func][normalizedDeg];
// // // // //   };

// // // // //   const styles = {
// // // // //     body: {
// // // // //       fontFamily: 'Arial, sans-serif',
// // // // //       margin: 0,
// // // // //       padding: '20px',
// // // // //       backgroundColor: '#f5f5f5'
// // // // //     },
// // // // //     container: {
// // // // //       maxWidth: '1200px',
// // // // //       margin: '0 auto',
// // // // //       backgroundColor: 'white',
// // // // //       padding: '20px',
// // // // //       borderRadius: '10px',
// // // // //       boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
// // // // //     },
// // // // //     h2: {
// // // // //       textAlign: 'center',
// // // // //       color: '#333',
// // // // //       marginBottom: '30px'
// // // // //     },
// // // // //     mainContent: {
// // // // //       display: 'flex',
// // // // //       gap: '30px'
// // // // //     },
// // // // //     panel: {
// // // // //       flex: '1',
// // // // //       background: '#f8f9fa',
// // // // //       padding: '20px',
// // // // //       borderRadius: '8px'
// // // // //     },
// // // // //     diagramPanel: {
// // // // //       flex: '1'
// // // // //     },
// // // // //     panelTitle: {
// // // // //       margin: '0 0 20px 0',
// // // // //       color: '#0066cc'
// // // // //     },
// // // // //     controlGroup: {
// // // // //       marginBottom: '20px'
// // // // //     },
// // // // //     label: {
// // // // //       display: 'block',
// // // // //       marginBottom: '5px',
// // // // //       fontWeight: 'bold'
// // // // //     },
// // // // //     input: {
// // // // //       padding: '5px',
// // // // //       marginRight: '10px',
// // // // //       width: '100px'
// // // // //     },
// // // // //     select: {
// // // // //       padding: '5px'
// // // // //     },
// // // // //     quickAngles: {
// // // // //       display: 'flex',
// // // // //       flexWrap: 'wrap',
// // // // //       gap: '5px',
// // // // //       marginTop: '10px'
// // // // //     },
// // // // //     quickAngleButton: {
// // // // //       padding: '5px 8px',
// // // // //       border: '1px solid #ddd',
// // // // //       borderRadius: '3px',
// // // // //       background: 'white',
// // // // //       cursor: 'pointer',
// // // // //       fontSize: '12px'
// // // // //     },
// // // // //     resetButton: {
// // // // //       padding: '5px 8px',
// // // // //       border: '1px solid #dc3545',
// // // // //       borderRadius: '3px',
// // // // //       background: '#dc3545',
// // // // //       color: 'white',
// // // // //       cursor: 'pointer',
// // // // //       fontSize: '12px',
// // // // //       fontWeight: 'bold'
// // // // //     },
// // // // //     displayOptions: {
// // // // //       display: 'flex',
// // // // //       flexDirection: 'column',
// // // // //       gap: '8px'
// // // // //     },
// // // // //     checkboxLabel: {
// // // // //       display: 'flex',
// // // // //       alignItems: 'center',
// // // // //       gap: '5px',
// // // // //       fontWeight: 'normal'
// // // // //     },
// // // // //     svgContainer: {
// // // // //       border: '1px solid #ccc',
// // // // //       background: 'white',
// // // // //       borderRadius: '5px'
// // // // //     },
// // // // //     trigTable: {
// // // // //       marginTop: '20px',
// // // // //       background: '#f8f9fa',
// // // // //       padding: '15px',
// // // // //       borderRadius: '8px'
// // // // //     },
// // // // //     trigTableTitle: {
// // // // //       margin: '0 0 10px 0',
// // // // //       color: '#333'
// // // // //     },
// // // // //     table: {
// // // // //       width: '100%',
// // // // //       borderCollapse: 'collapse',
// // // // //       fontSize: '12px'
// // // // //     },
// // // // //     th: {
// // // // //       padding: '8px',
// // // // //       textAlign: 'center',
// // // // //       border: '1px solid #ddd',
// // // // //       background: '#e9ecef',
// // // // //       fontWeight: 'bold'
// // // // //     },
// // // // //     td: {
// // // // //       padding: '8px',
// // // // //       textAlign: 'center',
// // // // //       border: '1px solid #ddd'
// // // // //     },
// // // // //     propertyItem: {
// // // // //       marginBottom: '15px'
// // // // //     },
// // // // //     propertyStrong: {
// // // // //       color: '#333'
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.body}>
// // // // //       <div style={styles.container}>
// // // // //         {/* <h2 style={styles.h2}>Angle Explorer</h2> */}
        
// // // // //         <div style={styles.mainContent}>
// // // // //           {/* Controls Panel */}
// // // // //           <div style={styles.panel}>
// // // // //             <h3 style={styles.panelTitle}>Controls</h3>
            
// // // // //             <div style={styles.controlGroup}>
// // // // //               <label style={styles.label}>Angle Value:</label>
// // // // //               <input 
// // // // //                 type="number" 
// // // // //                 value={angle} 
// // // // //                 onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
// // // // //                 style={styles.input}
// // // // //               />
// // // // //               <select 
// // // // //                 value={unit} 
// // // // //                 onChange={(e) => setUnit(e.target.value)}
// // // // //                 style={styles.select}
// // // // //               >
// // // // //                 <option value="degrees">Degrees</option>
// // // // //                 <option value="radians">Radians</option>
// // // // //               </select>
// // // // //             </div>

// // // // //             <div style={styles.controlGroup}>
// // // // //               <h4 style={{ margin: '0 0 10px 0' }}>Quick Angles:</h4>
// // // // //               <div style={styles.quickAngles}>
// // // // //                 {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map(deg => (
// // // // //                   <button
// // // // //                     key={deg}
// // // // //                     onClick={() => {setAngle(unit === 'degrees' ? deg : deg * Math.PI / 180)}}
// // // // //                     style={styles.quickAngleButton}
// // // // //                     onMouseEnter={(e) => e.target.style.background = '#e9ecef'}
// // // // //                     onMouseLeave={(e) => e.target.style.background = 'white'}
// // // // //                   >
// // // // //                     {deg}°
// // // // //                   </button>
// // // // //                 ))}
// // // // //                 <button
// // // // //                   onClick={() => {setAngle(0)}}
// // // // //                   style={styles.resetButton}
// // // // //                 >
// // // // //                   Reset
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div style={styles.controlGroup}>
// // // // //               <h4 style={{ margin: '0 0 10px 0' }}>Display Options:</h4>
// // // // //               <div style={styles.displayOptions}>
// // // // //                 <label style={styles.checkboxLabel}>
// // // // //                   <input type="checkbox" checked={showArc} onChange={(e) => setShowArc(e.target.checked)} />
// // // // //                   Show Angle Arc
// // // // //                 </label>
// // // // //                 <label style={styles.checkboxLabel}>
// // // // //                   <input type="checkbox" checked={showReference} onChange={(e) => setShowReference(e.target.checked)} />
// // // // //                   Show Reference Lines
// // // // //                 </label>
// // // // //                 <label style={styles.checkboxLabel}>
// // // // //                   <input type="checkbox" checked={showComplementary} onChange={(e) => setShowComplementary(e.target.checked)} />
// // // // //                   Show Complementary Angle
// // // // //                 </label>
// // // // //                 <label style={styles.checkboxLabel}>
// // // // //                   <input type="checkbox" checked={showSupplementary} onChange={(e) => setShowSupplementary(e.target.checked)} />
// // // // //                   Show Supplementary Angle
// // // // //                 </label>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Diagram Panel */}
// // // // //           <div style={styles.diagramPanel}>
// // // // //             <svg width="400" height="400" viewBox="0 0 400 400" style={styles.svgContainer}>
              
// // // // //               {/* Reference grid */}
// // // // //               {showReference && (
// // // // //                 <g opacity="0.3">
// // // // //                   <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="1" />
// // // // //                   <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} stroke="#ddd" />
// // // // //                   <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} stroke="#ddd" />
                  
// // // // //                   {/* Quadrant labels */}
// // // // //                   <text x={centerX + 60} y={centerY - 60} fill="#999" fontSize="12">I</text>
// // // // //                   <text x={centerX - 70} y={centerY - 60} fill="#999" fontSize="12">II</text>
// // // // //                   <text x={centerX - 70} y={centerY + 70} fill="#999" fontSize="12">III</text>
// // // // //                   <text x={centerX + 60} y={centerY + 70} fill="#999" fontSize="12">IV</text>
// // // // //                 </g>
// // // // //               )}
              
// // // // //               {/* Initial ray (horizontal) */}
// // // // //               <line x1={centerX} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
// // // // //                     stroke="#000" strokeWidth="2" />
              
// // // // //               {/* Terminal ray */}
// // // // //               <line x1={centerX} y1={centerY} x2={arcEndX} y2={arcEndY} 
// // // // //                     stroke="#000" strokeWidth="2" />
              
// // // // //               {/* Angle arc */}
// // // // //               {showArc && (
// // // // //                 <path
// // // // //                   d={`M ${centerX + 40} ${centerY} A 40 40 0 ${Math.abs(angleRad) > Math.PI ? 1 : 0} ${angleRad >= 0 ? 0 : 1} ${centerX + 40 * Math.cos(angleRad)} ${centerY - 40 * Math.sin(angleRad)}`}
// // // // //                   fill="none"
// // // // //                   stroke="#0066cc"
// // // // //                   strokeWidth="3"
// // // // //                 />
// // // // //               )}
              
// // // // //               {/* Complementary angle arc */}
// // // // //               {showComplementary && complementary >= 0 && complementary <= 90 && (
// // // // //                 <>
// // // // //                   {/* Vertical ray for complementary angle */}
// // // // //                   <line x1={centerX} y1={centerY} x2={centerX} y2={centerY - radius} 
// // // // //                         stroke="#28a745" strokeWidth="2" strokeDasharray="8,4" />
                        
// // // // //                   <path
// // // // //                     d={`M ${centerX + 50 * Math.cos(angleRad)} ${centerY - 50 * Math.sin(angleRad)} A 50 50 0 0 ${angleRad < Math.PI/2 ? 0 : 1} ${centerX} ${centerY - 50}`}
// // // // //                     fill="none"
// // // // //                     stroke="#28a745"
// // // // //                     strokeWidth="2"
// // // // //                     strokeDasharray="5,5"
// // // // //                   />
// // // // //                   <text x={centerX + 30} y={centerY - 80} fill="#28a745" fontSize="14" fontWeight="bold">
// // // // //                     {complementary.toFixed(1)}°
// // // // //                   </text>
// // // // //                 </>
// // // // //               )}
              
// // // // //               {/* Supplementary angle arc */}
// // // // //               {showSupplementary && supplementary >= 0 && supplementary <= 180 && (
// // // // //                 <>
// // // // //                   {/* Negative x-axis ray for supplementary angle */}
// // // // //                   <line x1={centerX} y1={centerY} x2={centerX - radius} y2={centerY} 
// // // // //                         stroke="#dc3545" strokeWidth="2" strokeDasharray="8,4" />
                        
// // // // //                   <path
// // // // //                     d={`M ${centerX + 70 * Math.cos(angleRad)} ${centerY - 70 * Math.sin(angleRad)} A 70 70 0 0 0 ${centerX - 70} ${centerY}`}
// // // // //                     fill="none"
// // // // //                     stroke="#dc3545"
// // // // //                     strokeWidth="2"
// // // // //                     strokeDasharray="3,3"
// // // // //                   />
// // // // //                   <text x={centerX - 110} y={centerY - 10} fill="#dc3545" fontSize="14" fontWeight="bold">
// // // // //                     {supplementary.toFixed(1)}°
// // // // //                   </text>
// // // // //                 </>
// // // // //               )}
              
// // // // //               {/* Angle label */}
// // // // //               <text x={centerX + 50} y={centerY - 10} fill="#0066cc" fontSize="16" fontWeight="bold">
// // // // //                 {angleDeg.toFixed(1)}°
// // // // //               </text>
              
// // // // //               {/* Vertex point */}
// // // // //               <circle cx={centerX} cy={centerY} r="4" fill="#000" />
// // // // //             </svg>
            
// // // // //             {/* Trigonometric Values Table */}
// // // // //             <div style={styles.trigTable}>
// // // // //               <h4 style={styles.trigTableTitle}>Trigonometric Values</h4>
// // // // //               <table style={styles.table}>
// // // // //                 <thead>
// // // // //                   <tr>
// // // // //                     <th style={styles.th}>sin θ</th>
// // // // //                     <th style={styles.th}>cos θ</th>
// // // // //                     <th style={styles.th}>tan θ</th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                   <tr>
// // // // //                     <td style={styles.td}>
// // // // //                       {getSpecialValue(angleDeg, 'sin') || Math.sin(angleRad).toFixed(3)}
// // // // //                     </td>
// // // // //                     <td style={styles.td}>
// // // // //                       {getSpecialValue(angleDeg, 'cos') || Math.cos(angleRad).toFixed(3)}
// // // // //                     </td>
// // // // //                     <td style={styles.td}>
// // // // //                       {getSpecialValue(angleDeg, 'tan') || (Math.abs(Math.tan(angleRad)) > 1000 ? "∞" : Math.tan(angleRad).toFixed(3))}
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 </tbody>
// // // // //               </table>
              
// // // // //               <table style={{...styles.table, marginTop: '10px'}}>
// // // // //                 <thead>
// // // // //                   <tr>
// // // // //                     <th style={styles.th}>csc θ</th>
// // // // //                     <th style={styles.th}>sec θ</th>
// // // // //                     <th style={styles.th}>cot θ</th>
// // // // //                   </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                   <tr>
// // // // //                     <td style={styles.td}>
// // // // //                       {Math.abs(Math.sin(angleRad)) < 0.001 ? "∞" : (1/Math.sin(angleRad)).toFixed(3)}
// // // // //                     </td>
// // // // //                     <td style={styles.td}>
// // // // //                       {Math.abs(Math.cos(angleRad)) < 0.001 ? "∞" : (1/Math.cos(angleRad)).toFixed(3)}
// // // // //                     </td>
// // // // //                     <td style={styles.td}>
// // // // //                       {Math.abs(Math.tan(angleRad)) < 0.001 ? "∞" : (1/Math.tan(angleRad)).toFixed(3)}
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 </tbody>
// // // // //               </table>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Properties Panel */}
// // // // //           <div style={styles.panel}>
// // // // //             <h3 style={styles.panelTitle}>Angle Properties</h3>
            
// // // // //             <div style={styles.propertyItem}>
// // // // //               <strong style={styles.propertyStrong}>Current Angle:</strong><br/>
// // // // //               {angleDeg.toFixed(2)}° = {angleRad.toFixed(3)} rad
// // // // //             </div>
            
// // // // //             <div style={styles.propertyItem}>
// // // // //               <strong style={styles.propertyStrong}>Type:</strong> {angleType}<br/>
// // // // //               <strong style={styles.propertyStrong}>Quadrant:</strong> {quadrant}
// // // // //             </div>
            
// // // // //             <div style={styles.propertyItem}>
// // // // //               <strong style={styles.propertyStrong}>Reference Angle:</strong><br/>
// // // // //               {referenceAngle.toFixed(1)}°
// // // // //             </div>
            
// // // // //             <div style={styles.propertyItem}>
// // // // //               <strong style={styles.propertyStrong}>Complementary:</strong><br/>
// // // // //               {complementary >= 0 && complementary <= 90 ? `${complementary.toFixed(1)}°` : 'N/A (angle > 90°)'}
// // // // //             </div>
            
// // // // //             <div style={styles.propertyItem}>
// // // // //               <strong style={styles.propertyStrong}>Supplementary:</strong><br/>
// // // // //               {supplementary >= 0 && supplementary <= 180 ? `${supplementary.toFixed(1)}°` : 'N/A (angle > 180°)'}
// // // // //             </div>
            
// // // // //             <div style={styles.propertyItem}>
// // // // //               <strong style={styles.propertyStrong}>Reflex:</strong><br/>
// // // // //               {reflex.toFixed(1)}°
// // // // //             </div>
            
// // // // //             <div style={styles.propertyItem}>
// // // // //               <strong style={styles.propertyStrong}>Coterminal Angles:</strong><br/>
// // // // //               {coterminalPos.toFixed(1)}° (positive)<br/>
// // // // //               {coterminalNeg.toFixed(1)}° (negative)
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AngleExplorer;

// // // // import React, { useState } from 'react';
// // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // import angleExplanations from './angleExplanations';

// // // // const AngleExplorer = ({ explanations = angleExplanations }) => {
// // // //   const [angle, setAngle] = useState(45);
// // // //   const [unit, setUnit] = useState('degrees');
// // // //   const [showArc, setShowArc] = useState(true);
// // // //   const [showReference, setShowReference] = useState(true);
// // // //   const [showComplementary, setShowComplementary] = useState(false);
// // // //   const [showSupplementary, setShowSupplementary] = useState(false);

// // // //   const centerX = 200;
// // // //   const centerY = 200;
// // // //   const radius = 120;

// // // //   // Convert angle to radians for calculations
// // // //   const angleRad = unit === 'degrees' ? (angle * Math.PI) / 180 : angle;
// // // //   const angleDeg = unit === 'degrees' ? angle : (angle * 180) / Math.PI;

// // // //   // Calculate angle properties
// // // //   const complementary = 90 - angleDeg;
// // // //   const supplementary = 180 - angleDeg;
// // // //   const reflex = 360 - angleDeg;
// // // //   const coterminalPos = angleDeg + 360;
// // // //   const coterminalNeg = angleDeg - 360;

// // // //   // Determine quadrant
// // // //   const normalizedAngle = ((angleDeg % 360) + 360) % 360;
// // // //   let quadrant = 1;
// // // //   if (normalizedAngle > 90 && normalizedAngle <= 180) quadrant = 2;
// // // //   else if (normalizedAngle > 180 && normalizedAngle <= 270) quadrant = 3;
// // // //   else if (normalizedAngle > 270 && normalizedAngle < 360) quadrant = 4;

// // // //   // Reference angle
// // // //   let referenceAngle = normalizedAngle;
// // // //   if (quadrant === 2) referenceAngle = 180 - normalizedAngle;
// // // //   else if (quadrant === 3) referenceAngle = normalizedAngle - 180;
// // // //   else if (quadrant === 4) referenceAngle = 360 - normalizedAngle;

// // // //   // Angle type
// // // //   let angleType = 'acute';
// // // //   if (angleDeg === 90) angleType = 'right';
// // // //   else if (angleDeg > 90 && angleDeg < 180) angleType = 'obtuse';
// // // //   else if (angleDeg === 180) angleType = 'straight';
// // // //   else if (angleDeg > 180 && angleDeg < 360) angleType = 'reflex';

// // // //   // Arc endpoint
// // // //   const arcEndX = centerX + radius * Math.cos(angleRad);
// // // //   const arcEndY = centerY - radius * Math.sin(angleRad);

// // // //   // Get special trigonometric values
// // // //   const getSpecialValue = (angle, func) => {
// // // //     const normalizedDeg = Math.round(((angle % 360) + 360) % 360);
// // // //     const specialValues = {
// // // //       sin: {
// // // //         0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1",
// // // //         120: "√3/2", 135: "√2/2", 150: "1/2", 180: "0",
// // // //         210: "-1/2", 225: "-√2/2", 240: "-√3/2", 270: "-1",
// // // //         300: "-√3/2", 315: "-√2/2", 330: "-1/2", 360: "0"
// // // //       },
// // // //       cos: {
// // // //         0: "1", 30: "√3/2", 45: "√2/2", 60: "1/2", 90: "0",
// // // //         120: "-1/2", 135: "-√2/2", 150: "-√3/2", 180: "-1",
// // // //         210: "-√3/2", 225: "-√2/2", 240: "-1/2", 270: "0",
// // // //         300: "1/2", 315: "√2/2", 330: "√3/2", 360: "1"
// // // //       },
// // // //       tan: {
// // // //         0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "∞",
// // // //         120: "-√3", 135: "-1", 150: "-√3/3", 180: "0",
// // // //         210: "√3/3", 225: "1", 240: "√3", 270: "∞",
// // // //         300: "-√3", 315: "-1", 330: "-√3/3", 360: "0"
// // // //       }
// // // //     };
    
// // // //     return specialValues[func][normalizedDeg];
// // // //   };

// // // //   // Get dynamic explanations
// // // //   const getCurrentExplanations = () => {
// // // //     const currentExplanations = [];
// // // //     const roundedAngle = Math.round(normalizedAngle);
    
// // // //     // Add special angle explanation if it exists
// // // //     if (explanations.specialAngles[roundedAngle]) {
// // // //       currentExplanations.push(explanations.specialAngles[roundedAngle]);
// // // //     } else {
// // // //       // Add angle type explanation
// // // //       if (explanations.angleTypes[angleType]) {
// // // //         currentExplanations.push(explanations.angleTypes[angleType]);
// // // //       }
// // // //     }
    
// // // //     // Add quadrant explanation
// // // //     if (explanations.quadrants[quadrant]) {
// // // //       currentExplanations.push(explanations.quadrants[quadrant]);
// // // //     }
    
// // // //     // Add concept explanations based on toggles
// // // //     if (showComplementary && explanations.concepts.complementary) {
// // // //       currentExplanations.push(explanations.concepts.complementary);
// // // //     }
    
// // // //     if (showSupplementary && explanations.concepts.supplementary) {
// // // //       currentExplanations.push(explanations.concepts.supplementary);
// // // //     }
    
// // // //     if (showReference && explanations.concepts.reference) {
// // // //       currentExplanations.push(explanations.concepts.reference);
// // // //     }
    
// // // //     // Always show trigonometric explanation
// // // //     if (explanations.concepts.trigonometric) {
// // // //       currentExplanations.push(explanations.concepts.trigonometric);
// // // //     }
    
// // // //     // Fallback to general if no explanations found
// // // //     if (currentExplanations.length === 0 && explanations.general) {
// // // //       currentExplanations.push(explanations.general);
// // // //     }
    
// // // //     return currentExplanations;
// // // //   };

// // // //   const styles = {
// // // //     body: {
// // // //       fontFamily: 'Arial, sans-serif',
// // // //       margin: 0,
// // // //       padding: '20px',
// // // //       backgroundColor: '#f5f5f5'
// // // //     },
// // // //     container: {
// // // //       maxWidth: '1600px',
// // // //       margin: '0 auto',
// // // //       backgroundColor: 'white',
// // // //       padding: '20px',
// // // //       borderRadius: '10px',
// // // //       boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
// // // //     },
// // // //     mainContent: {
// // // //       display: 'flex',
// // // //       gap: '20px'
// // // //     },
// // // //     leftSection: {
// // // //       display: 'flex',
// // // //       gap: '20px',
// // // //       flex: '2'
// // // //     },
// // // //     rightSection: {
// // // //       flex: '1',
// // // //       background: '#f8f9fa',
// // // //       padding: '20px',
// // // //       borderRadius: '8px',
// // // //       maxHeight: '800px',
// // // //       overflowY: 'auto'
// // // //     },
// // // //     panel: {
// // // //       flex: '1',
// // // //       background: '#f8f9fa',
// // // //       padding: '20px',
// // // //       borderRadius: '8px'
// // // //     },
// // // //     diagramPanel: {
// // // //       flex: '1.2'
// // // //     },
// // // //     panelTitle: {
// // // //       margin: '0 0 20px 0',
// // // //       color: '#0066cc'
// // // //     },
// // // //     explanationsTitle: {
// // // //       margin: '0 0 20px 0',
// // // //       color: '#0066cc',
// // // //       borderBottom: '2px solid #0066cc',
// // // //       paddingBottom: '10px'
// // // //     },
// // // //     controlGroup: {
// // // //       marginBottom: '20px'
// // // //     },
// // // //     label: {
// // // //       display: 'block',
// // // //       marginBottom: '5px',
// // // //       fontWeight: 'bold'
// // // //     },
// // // //     input: {
// // // //       padding: '5px',
// // // //       marginRight: '10px',
// // // //       width: '100px'
// // // //     },
// // // //     select: {
// // // //       padding: '5px'
// // // //     },
// // // //     quickAngles: {
// // // //       display: 'flex',
// // // //       flexWrap: 'wrap',
// // // //       gap: '5px',
// // // //       marginTop: '10px'
// // // //     },
// // // //     quickAngleButton: {
// // // //       padding: '5px 8px',
// // // //       border: '1px solid #ddd',
// // // //       borderRadius: '3px',
// // // //       background: 'white',
// // // //       cursor: 'pointer',
// // // //       fontSize: '12px'
// // // //     },
// // // //     resetButton: {
// // // //       padding: '5px 8px',
// // // //       border: '1px solid #dc3545',
// // // //       borderRadius: '3px',
// // // //       background: '#dc3545',
// // // //       color: 'white',
// // // //       cursor: 'pointer',
// // // //       fontSize: '12px',
// // // //       fontWeight: 'bold'
// // // //     },
// // // //     displayOptions: {
// // // //       display: 'flex',
// // // //       flexDirection: 'column',
// // // //       gap: '8px'
// // // //     },
// // // //     checkboxLabel: {
// // // //       display: 'flex',
// // // //       alignItems: 'center',
// // // //       gap: '5px',
// // // //       fontWeight: 'normal'
// // // //     },
// // // //     svgContainer: {
// // // //       border: '1px solid #ccc',
// // // //       background: 'white',
// // // //       borderRadius: '5px'
// // // //     },
// // // //     trigTable: {
// // // //       marginTop: '20px',
// // // //       background: '#f8f9fa',
// // // //       padding: '15px',
// // // //       borderRadius: '8px'
// // // //     },
// // // //     trigTableTitle: {
// // // //       margin: '0 0 10px 0',
// // // //       color: '#333'
// // // //     },
// // // //     table: {
// // // //       width: '100%',
// // // //       borderCollapse: 'collapse',
// // // //       fontSize: '12px'
// // // //     },
// // // //     th: {
// // // //       padding: '8px',
// // // //       textAlign: 'center',
// // // //       border: '1px solid #ddd',
// // // //       background: '#e9ecef',
// // // //       fontWeight: 'bold'
// // // //     },
// // // //     td: {
// // // //       padding: '8px',
// // // //       textAlign: 'center',
// // // //       border: '1px solid #ddd'
// // // //     },
// // // //     propertyItem: {
// // // //       marginBottom: '15px'
// // // //     },
// // // //     propertyStrong: {
// // // //       color: '#333'
// // // //     },
// // // //     explanationItem: {
// // // //       marginBottom: '25px',
// // // //       padding: '15px',
// // // //       background: 'white',
// // // //       borderRadius: '8px',
// // // //       border: '1px solid #e0e0e0'
// // // //     },
// // // //     explanationTitle: {
// // // //       margin: '0 0 10px 0',
// // // //       color: '#0066cc',
// // // //       fontSize: '16px',
// // // //       fontWeight: 'bold'
// // // //     },
// // // //     explanationContent: {
// // // //       color: '#333',
// // // //       lineHeight: '1.5',
// // // //       fontSize: '14px'
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={styles.body}>
// // // //       <div style={styles.container}>
// // // //         <div style={styles.mainContent}>
// // // //           {/* Left Section - Controls and Diagram */}
// // // //           <div style={styles.leftSection}>
// // // //             {/* Controls Panel */}
// // // //             <div style={styles.panel}>
// // // //               <h3 style={styles.panelTitle}>Controls</h3>
              
// // // //               <div style={styles.controlGroup}>
// // // //                 <label style={styles.label}>Angle Value:</label>
// // // //                 <input 
// // // //                   type="number" 
// // // //                   value={angle} 
// // // //                   onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
// // // //                   style={styles.input}
// // // //                 />
// // // //                 <select 
// // // //                   value={unit} 
// // // //                   onChange={(e) => setUnit(e.target.value)}
// // // //                   style={styles.select}
// // // //                 >
// // // //                   <option value="degrees">Degrees</option>
// // // //                   <option value="radians">Radians</option>
// // // //                 </select>
// // // //               </div>

// // // //               <div style={styles.controlGroup}>
// // // //                 <h4 style={{ margin: '0 0 10px 0' }}>Quick Angles:</h4>
// // // //                 <div style={styles.quickAngles}>
// // // //                   {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map(deg => (
// // // //                     <button
// // // //                       key={deg}
// // // //                       onClick={() => {setAngle(unit === 'degrees' ? deg : deg * Math.PI / 180)}}
// // // //                       style={styles.quickAngleButton}
// // // //                       onMouseEnter={(e) => e.target.style.background = '#e9ecef'}
// // // //                       onMouseLeave={(e) => e.target.style.background = 'white'}
// // // //                     >
// // // //                       {deg}°
// // // //                     </button>
// // // //                   ))}
// // // //                   <button
// // // //                     onClick={() => {setAngle(0)}}
// // // //                     style={styles.resetButton}
// // // //                   >
// // // //                     Reset
// // // //                   </button>
// // // //                 </div>
// // // //               </div>

// // // //               <div style={styles.controlGroup}>
// // // //                 <h4 style={{ margin: '0 0 10px 0' }}>Display Options:</h4>
// // // //                 <div style={styles.displayOptions}>
// // // //                   <label style={styles.checkboxLabel}>
// // // //                     <input type="checkbox" checked={showArc} onChange={(e) => setShowArc(e.target.checked)} />
// // // //                     Show Angle Arc
// // // //                   </label>
// // // //                   <label style={styles.checkboxLabel}>
// // // //                     <input type="checkbox" checked={showReference} onChange={(e) => setShowReference(e.target.checked)} />
// // // //                     Show Reference Lines
// // // //                   </label>
// // // //                   <label style={styles.checkboxLabel}>
// // // //                     <input type="checkbox" checked={showComplementary} onChange={(e) => setShowComplementary(e.target.checked)} />
// // // //                     Show Complementary Angle
// // // //                   </label>
// // // //                   <label style={styles.checkboxLabel}>
// // // //                     <input type="checkbox" checked={showSupplementary} onChange={(e) => setShowSupplementary(e.target.checked)} />
// // // //                     Show Supplementary Angle
// // // //                   </label>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Properties Panel */}
// // // //               <div style={{ marginTop: '30px' }}>
// // // //                 <h3 style={styles.panelTitle}>Angle Properties</h3>
                
// // // //                 <div style={styles.propertyItem}>
// // // //                   <strong style={styles.propertyStrong}>Current Angle:</strong><br/>
// // // //                   {angleDeg.toFixed(2)}° = {angleRad.toFixed(3)} rad
// // // //                 </div>
                
// // // //                 <div style={styles.propertyItem}>
// // // //                   <strong style={styles.propertyStrong}>Type:</strong> {angleType}<br/>
// // // //                   <strong style={styles.propertyStrong}>Quadrant:</strong> {quadrant}
// // // //                 </div>
                
// // // //                 <div style={styles.propertyItem}>
// // // //                   <strong style={styles.propertyStrong}>Reference Angle:</strong><br/>
// // // //                   {referenceAngle.toFixed(1)}°
// // // //                 </div>
                
// // // //                 <div style={styles.propertyItem}>
// // // //                   <strong style={styles.propertyStrong}>Complementary:</strong><br/>
// // // //                   {complementary >= 0 && complementary <= 90 ? `${complementary.toFixed(1)}°` : 'N/A (angle > 90°)'}
// // // //                 </div>
                
// // // //                 <div style={styles.propertyItem}>
// // // //                   <strong style={styles.propertyStrong}>Supplementary:</strong><br/>
// // // //                   {supplementary >= 0 && supplementary <= 180 ? `${supplementary.toFixed(1)}°` : 'N/A (angle > 180°)'}
// // // //                 </div>
                
// // // //                 <div style={styles.propertyItem}>
// // // //                   <strong style={styles.propertyStrong}>Reflex:</strong><br/>
// // // //                   {reflex.toFixed(1)}°
// // // //                 </div>
                
// // // //                 <div style={styles.propertyItem}>
// // // //                   <strong style={styles.propertyStrong}>Coterminal Angles:</strong><br/>
// // // //                   {coterminalPos.toFixed(1)}° (positive)<br/>
// // // //                   {coterminalNeg.toFixed(1)}° (negative)
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Diagram Panel */}
// // // //             <div style={styles.diagramPanel}>
// // // //               <svg width="400" height="400" viewBox="0 0 400 400" style={styles.svgContainer}>
                
// // // //                 {/* Reference grid */}
// // // //                 {showReference && (
// // // //                   <g opacity="0.3">
// // // //                     <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="1" />
// // // //                     <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} stroke="#ddd" />
// // // //                     <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} stroke="#ddd" />
                    
// // // //                     {/* Quadrant labels */}
// // // //                     <text x={centerX + 60} y={centerY - 60} fill="#999" fontSize="12">I</text>
// // // //                     <text x={centerX - 70} y={centerY - 60} fill="#999" fontSize="12">II</text>
// // // //                     <text x={centerX - 70} y={centerY + 70} fill="#999" fontSize="12">III</text>
// // // //                     <text x={centerX + 60} y={centerY + 70} fill="#999" fontSize="12">IV</text>
// // // //                   </g>
// // // //                 )}
                
// // // //                 {/* Initial ray (horizontal) */}
// // // //                 <line x1={centerX} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
// // // //                       stroke="#000" strokeWidth="2" />
                
// // // //                 {/* Terminal ray */}
// // // //                 <line x1={centerX} y1={centerY} x2={arcEndX} y2={arcEndY} 
// // // //                       stroke="#000" strokeWidth="2" />
                
// // // //                 {/* Angle arc */}
// // // //                 {showArc && (
// // // //                   <path
// // // //                     d={`M ${centerX + 40} ${centerY} A 40 40 0 ${Math.abs(angleRad) > Math.PI ? 1 : 0} ${angleRad >= 0 ? 0 : 1} ${centerX + 40 * Math.cos(angleRad)} ${centerY - 40 * Math.sin(angleRad)}`}
// // // //                     fill="none"
// // // //                     stroke="#0066cc"
// // // //                     strokeWidth="3"
// // // //                   />
// // // //                 )}
                
// // // //                 {/* Complementary angle arc */}
// // // //                 {showComplementary && complementary >= 0 && complementary <= 90 && (
// // // //                   <>
// // // //                     {/* Vertical ray for complementary angle */}
// // // //                     <line x1={centerX} y1={centerY} x2={centerX} y2={centerY - radius} 
// // // //                           stroke="#28a745" strokeWidth="2" strokeDasharray="8,4" />
                          
// // // //                     <path
// // // //                       d={`M ${centerX + 50 * Math.cos(angleRad)} ${centerY - 50 * Math.sin(angleRad)} A 50 50 0 0 ${angleRad < Math.PI/2 ? 0 : 1} ${centerX} ${centerY - 50}`}
// // // //                       fill="none"
// // // //                       stroke="#28a745"
// // // //                       strokeWidth="2"
// // // //                       strokeDasharray="5,5"
// // // //                     />
// // // //                     <text x={centerX + 30} y={centerY - 80} fill="#28a745" fontSize="14" fontWeight="bold">
// // // //                       {complementary.toFixed(1)}°
// // // //                     </text>
// // // //                   </>
// // // //                 )}
                
// // // //                 {/* Supplementary angle arc */}
// // // //                 {showSupplementary && supplementary >= 0 && supplementary <= 180 && (
// // // //                   <>
// // // //                     {/* Negative x-axis ray for supplementary angle */}
// // // //                     <line x1={centerX} y1={centerY} x2={centerX - radius} y2={centerY} 
// // // //                           stroke="#dc3545" strokeWidth="2" strokeDasharray="8,4" />
                          
// // // //                     <path
// // // //                       d={`M ${centerX + 70 * Math.cos(angleRad)} ${centerY - 70 * Math.sin(angleRad)} A 70 70 0 0 0 ${centerX - 70} ${centerY}`}
// // // //                       fill="none"
// // // //                       stroke="#dc3545"
// // // //                       strokeWidth="2"
// // // //                       strokeDasharray="3,3"
// // // //                     />
// // // //                     <text x={centerX - 110} y={centerY - 10} fill="#dc3545" fontSize="14" fontWeight="bold">
// // // //                       {supplementary.toFixed(1)}°
// // // //                     </text>
// // // //                   </>
// // // //                 )}
                
// // // //                 {/* Angle label */}
// // // //                 <text x={centerX + 50} y={centerY - 10} fill="#0066cc" fontSize="16" fontWeight="bold">
// // // //                   {angleDeg.toFixed(1)}°
// // // //                 </text>
                
// // // //                 {/* Vertex point */}
// // // //                 <circle cx={centerX} cy={centerY} r="4" fill="#000" />
// // // //               </svg>
              
// // // //               {/* Trigonometric Values Table */}
// // // //               <div style={styles.trigTable}>
// // // //                 <h4 style={styles.trigTableTitle}>Trigonometric Values</h4>
// // // //                 <table style={styles.table}>
// // // //                   <thead>
// // // //                     <tr>
// // // //                       <th style={styles.th}>sin θ</th>
// // // //                       <th style={styles.th}>cos θ</th>
// // // //                       <th style={styles.th}>tan θ</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     <tr>
// // // //                       <td style={styles.td}>
// // // //                         {getSpecialValue(angleDeg, 'sin') || Math.sin(angleRad).toFixed(3)}
// // // //                       </td>
// // // //                       <td style={styles.td}>
// // // //                         {getSpecialValue(angleDeg, 'cos') || Math.cos(angleRad).toFixed(3)}
// // // //                       </td>
// // // //                       <td style={styles.td}>
// // // //                         {getSpecialValue(angleDeg, 'tan') || (Math.abs(Math.tan(angleRad)) > 1000 ? "∞" : Math.tan(angleRad).toFixed(3))}
// // // //                       </td>
// // // //                     </tr>
// // // //                   </tbody>
// // // //                 </table>
                
// // // //                 <table style={{...styles.table, marginTop: '10px'}}>
// // // //                   <thead>
// // // //                     <tr>
// // // //                       <th style={styles.th}>csc θ</th>
// // // //                       <th style={styles.th}>sec θ</th>
// // // //                       <th style={styles.th}>cot θ</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     <tr>
// // // //                       <td style={styles.td}>
// // // //                         {Math.abs(Math.sin(angleRad)) < 0.001 ? "∞" : (1/Math.sin(angleRad)).toFixed(3)}
// // // //                       </td>
// // // //                       <td style={styles.td}>
// // // //                         {Math.abs(Math.cos(angleRad)) < 0.001 ? "∞" : (1/Math.cos(angleRad)).toFixed(3)}
// // // //                       </td>
// // // //                       <td style={styles.td}>
// // // //                         {Math.abs(Math.tan(angleRad)) < 0.001 ? "∞" : (1/Math.tan(angleRad)).toFixed(3)}
// // // //                       </td>
// // // //                     </tr>
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Section - Explanations */}
// // // //           <div style={styles.rightSection}>
// // // //             <h3 style={styles.explanationsTitle}>Explanations</h3>
// // // //             {getCurrentExplanations().map((explanation, index) => (
// // // //               <div key={index} style={styles.explanationItem}>
// // // //                 <h4 style={styles.explanationTitle}>{explanation.title}</h4>
// // // //                 <div style={styles.explanationContent}>
// // // //                   {processContent(explanation.content)}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AngleExplorer;


// // // import React, { useState } from 'react';
// // // import { processContent } from '@/app/utils/contentProcessor';
// // // import angleExplanations from './angleExplanations';

// // // const AngleExplorer = ({ explanations = angleExplanations }) => {
// // //   const [angle, setAngle] = useState(45);
// // //   const [unit, setUnit] = useState('degrees');
// // //   const [showArc, setShowArc] = useState(true);
// // //   const [showReference, setShowReference] = useState(true);
// // //   const [showComplementary, setShowComplementary] = useState(false);
// // //   const [showSupplementary, setShowSupplementary] = useState(false);

// // //   const centerX = 200;
// // //   const centerY = 200;
// // //   const radius = 120;

// // //   // Convert angle to radians for calculations
// // //   const angleRad = unit === 'degrees' ? (angle * Math.PI) / 180 : angle;
// // //   const angleDeg = unit === 'degrees' ? angle : (angle * 180) / Math.PI;

// // //   // Calculate angle properties
// // //   const complementary = 90 - angleDeg;
// // //   const supplementary = 180 - angleDeg;
// // //   const reflex = 360 - angleDeg;
// // //   const coterminalPos = angleDeg + 360;
// // //   const coterminalNeg = angleDeg - 360;

// // //   // Determine quadrant
// // //   const normalizedAngle = ((angleDeg % 360) + 360) % 360;
// // //   let quadrant = 1;
// // //   if (normalizedAngle > 90 && normalizedAngle <= 180) quadrant = 2;
// // //   else if (normalizedAngle > 180 && normalizedAngle <= 270) quadrant = 3;
// // //   else if (normalizedAngle > 270 && normalizedAngle < 360) quadrant = 4;

// // //   // Reference angle
// // //   let referenceAngle = normalizedAngle;
// // //   if (quadrant === 2) referenceAngle = 180 - normalizedAngle;
// // //   else if (quadrant === 3) referenceAngle = normalizedAngle - 180;
// // //   else if (quadrant === 4) referenceAngle = 360 - normalizedAngle;

// // //   // Angle type
// // //   let angleType = 'acute';
// // //   if (angleDeg === 90) angleType = 'right';
// // //   else if (angleDeg > 90 && angleDeg < 180) angleType = 'obtuse';
// // //   else if (angleDeg === 180) angleType = 'straight';
// // //   else if (angleDeg > 180 && angleDeg < 360) angleType = 'reflex';

// // //   // Arc endpoint
// // //   const arcEndX = centerX + radius * Math.cos(angleRad);
// // //   const arcEndY = centerY - radius * Math.sin(angleRad);

// // //   // Get special trigonometric values
// // //   const getSpecialValue = (angle, func) => {
// // //     const normalizedDeg = Math.round(((angle % 360) + 360) % 360);
// // //     const specialValues = {
// // //       sin: {
// // //         0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1",
// // //         120: "√3/2", 135: "√2/2", 150: "1/2", 180: "0",
// // //         210: "-1/2", 225: "-√2/2", 240: "-√3/2", 270: "-1",
// // //         300: "-√3/2", 315: "-√2/2", 330: "-1/2", 360: "0"
// // //       },
// // //       cos: {
// // //         0: "1", 30: "√3/2", 45: "√2/2", 60: "1/2", 90: "0",
// // //         120: "-1/2", 135: "-√2/2", 150: "-√3/2", 180: "-1",
// // //         210: "-√3/2", 225: "-√2/2", 240: "-1/2", 270: "0",
// // //         300: "1/2", 315: "√2/2", 330: "√3/2", 360: "1"
// // //       },
// // //       tan: {
// // //         0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "∞",
// // //         120: "-√3", 135: "-1", 150: "-√3/3", 180: "0",
// // //         210: "√3/3", 225: "1", 240: "√3", 270: "∞",
// // //         300: "-√3", 315: "-1", 330: "-√3/3", 360: "0"
// // //       }
// // //     };
    
// // //     return specialValues[func][normalizedDeg];
// // //   };

// // //   // Get dynamic explanations
// // //   const getCurrentExplanations = () => {
// // //     const currentExplanations = [];
// // //     const roundedAngle = Math.round(normalizedAngle);
    
// // //     // Add special angle explanation if it exists
// // //     if (explanations.specialAngles[roundedAngle]) {
// // //       currentExplanations.push(explanations.specialAngles[roundedAngle]);
// // //     } else {
// // //       // Add angle type explanation
// // //       if (explanations.angleTypes[angleType]) {
// // //         currentExplanations.push(explanations.angleTypes[angleType]);
// // //       }
// // //     }
    
// // //     // Add quadrant explanation
// // //     if (explanations.quadrants[quadrant]) {
// // //       currentExplanations.push(explanations.quadrants[quadrant]);
// // //     }
    
// // //     // Add concept explanations based on toggles
// // //     if (showComplementary && explanations.concepts.complementary) {
// // //       currentExplanations.push(explanations.concepts.complementary);
// // //     }
    
// // //     if (showSupplementary && explanations.concepts.supplementary) {
// // //       currentExplanations.push(explanations.concepts.supplementary);
// // //     }
    
// // //     if (showReference && explanations.concepts.reference) {
// // //       currentExplanations.push(explanations.concepts.reference);
// // //     }
    
// // //     // Always show trigonometric explanation
// // //     if (explanations.concepts.trigonometric) {
// // //       currentExplanations.push(explanations.concepts.trigonometric);
// // //     }
    
// // //     // Fallback to general if no explanations found
// // //     if (currentExplanations.length === 0 && explanations.general) {
// // //       currentExplanations.push(explanations.general);
// // //     }
    
// // //     return currentExplanations;
// // //   };

// // //   const styles = {
// // //     body: {
// // //       fontFamily: 'Arial, sans-serif',
// // //       margin: 0,
// // //       padding: '10px',
// // //       backgroundColor: '#f5f5f5'
// // //     },
// // //     container: {
// // //       maxWidth: '1600px',
// // //       margin: '0 auto',
// // //       backgroundColor: 'white',
// // //       padding: '15px',
// // //       borderRadius: '10px',
// // //       boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
// // //     },
// // //     mainContent: {
// // //       display: 'flex',
// // //       gap: '20px'
// // //     },
// // //     leftSection: {
// // //       display: 'flex',
// // //       gap: '20px',
// // //       flex: '2'
// // //     },
// // //     rightSection: {
// // //       flex: '1',
// // //       background: '#f8f9fa',
// // //       padding: '20px',
// // //       borderRadius: '8px'
// // //     },
// // //     panel: {
// // //       flex: '1',
// // //       background: '#f8f9fa',
// // //       padding: '20px',
// // //       borderRadius: '8px'
// // //     },
// // //     diagramPanel: {
// // //       flex: '1.2'
// // //     },
// // //     panelTitle: {
// // //       margin: '0 0 20px 0',
// // //       color: '#0066cc'
// // //     },
// // //     explanationsTitle: {
// // //       margin: '0 0 20px 0',
// // //       color: '#0066cc',
// // //       borderBottom: '2px solid #0066cc',
// // //       paddingBottom: '10px'
// // //     },
// // //     controlGroup: {
// // //       marginBottom: '20px'
// // //     },
// // //     label: {
// // //       display: 'block',
// // //       marginBottom: '5px',
// // //       fontWeight: 'bold'
// // //     },
// // //     input: {
// // //       padding: '5px',
// // //       marginRight: '10px',
// // //       width: '100px'
// // //     },
// // //     select: {
// // //       padding: '5px'
// // //     },
// // //     quickAngles: {
// // //       display: 'flex',
// // //       flexWrap: 'wrap',
// // //       gap: '5px',
// // //       marginTop: '10px'
// // //     },
// // //     quickAngleButton: {
// // //       padding: '5px 8px',
// // //       border: '1px solid #ddd',
// // //       borderRadius: '3px',
// // //       background: 'white',
// // //       cursor: 'pointer',
// // //       fontSize: '12px'
// // //     },
// // //     resetButton: {
// // //       padding: '5px 8px',
// // //       border: '1px solid #dc3545',
// // //       borderRadius: '3px',
// // //       background: '#dc3545',
// // //       color: 'white',
// // //       cursor: 'pointer',
// // //       fontSize: '12px',
// // //       fontWeight: 'bold'
// // //     },
// // //     displayOptions: {
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       gap: '8px'
// // //     },
// // //     checkboxLabel: {
// // //       display: 'flex',
// // //       alignItems: 'center',
// // //       gap: '5px',
// // //       fontWeight: 'normal'
// // //     },
// // //     svgContainer: {
// // //       border: '1px solid #ccc',
// // //       background: 'white',
// // //       borderRadius: '5px'
// // //     },
// // //     trigTable: {
// // //       marginTop: '20px',
// // //       background: '#f8f9fa',
// // //       padding: '15px',
// // //       borderRadius: '8px'
// // //     },
// // //     trigTableTitle: {
// // //       margin: '0 0 10px 0',
// // //       color: '#333'
// // //     },
// // //     table: {
// // //       width: '100%',
// // //       borderCollapse: 'collapse',
// // //       fontSize: '12px'
// // //     },
// // //     th: {
// // //       padding: '8px',
// // //       textAlign: 'center',
// // //       border: '1px solid #ddd',
// // //       background: '#e9ecef',
// // //       fontWeight: 'bold'
// // //     },
// // //     td: {
// // //       padding: '8px',
// // //       textAlign: 'center',
// // //       border: '1px solid #ddd'
// // //     },
// // //     propertyItem: {
// // //       marginBottom: '15px'
// // //     },
// // //     propertyStrong: {
// // //       color: '#333'
// // //     },
// // //     explanationItem: {
// // //       marginBottom: '25px',
// // //       padding: '15px',
// // //       background: 'white',
// // //       borderRadius: '8px',
// // //       border: '1px solid #e0e0e0'
// // //     },
// // //     explanationTitle: {
// // //       margin: '0 0 10px 0',
// // //       color: '#0066cc',
// // //       fontSize: '16px',
// // //       fontWeight: 'bold'
// // //     },
// // //     explanationContent: {
// // //       color: '#333',
// // //       lineHeight: '1.5',
// // //       fontSize: '14px'
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.body}>
// // //       <div style={styles.container}>
// // //         <div style={styles.mainContent}>
// // //           {/* Left Section - Controls and Diagram */}
// // //           <div style={styles.leftSection}>
// // //             {/* Controls Panel */}
// // //             <div style={styles.panel}>
// // //               <h3 style={styles.panelTitle}>Controls</h3>
              
// // //               <div style={styles.controlGroup}>
// // //                 <label style={styles.label}>Angle Value:</label>
// // //                 <input 
// // //                   type="number" 
// // //                   value={angle} 
// // //                   onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
// // //                   style={styles.input}
// // //                 />
// // //                 <select 
// // //                   value={unit} 
// // //                   onChange={(e) => setUnit(e.target.value)}
// // //                   style={styles.select}
// // //                 >
// // //                   <option value="degrees">Degrees</option>
// // //                   <option value="radians">Radians</option>
// // //                 </select>
// // //               </div>

// // //               <div style={styles.controlGroup}>
// // //                 <h4 style={{ margin: '0 0 10px 0' }}>Quick Angles:</h4>
// // //                 <div style={styles.quickAngles}>
// // //                   {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map(deg => (
// // //                     <button
// // //                       key={deg}
// // //                       onClick={() => {setAngle(unit === 'degrees' ? deg : deg * Math.PI / 180)}}
// // //                       style={styles.quickAngleButton}
// // //                       onMouseEnter={(e) => e.target.style.background = '#e9ecef'}
// // //                       onMouseLeave={(e) => e.target.style.background = 'white'}
// // //                     >
// // //                       {deg}°
// // //                     </button>
// // //                   ))}
// // //                   <button
// // //                     onClick={() => {setAngle(0)}}
// // //                     style={styles.resetButton}
// // //                   >
// // //                     Reset
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               <div style={styles.controlGroup}>
// // //                 <h4 style={{ margin: '0 0 10px 0' }}>Display Options:</h4>
// // //                 <div style={styles.displayOptions}>
// // //                   <label style={styles.checkboxLabel}>
// // //                     <input type="checkbox" checked={showArc} onChange={(e) => setShowArc(e.target.checked)} />
// // //                     Show Angle Arc
// // //                   </label>
// // //                   <label style={styles.checkboxLabel}>
// // //                     <input type="checkbox" checked={showReference} onChange={(e) => setShowReference(e.target.checked)} />
// // //                     Show Reference Lines
// // //                   </label>
// // //                   <label style={styles.checkboxLabel}>
// // //                     <input type="checkbox" checked={showComplementary} onChange={(e) => setShowComplementary(e.target.checked)} />
// // //                     Show Complementary Angle
// // //                   </label>
// // //                   <label style={styles.checkboxLabel}>
// // //                     <input type="checkbox" checked={showSupplementary} onChange={(e) => setShowSupplementary(e.target.checked)} />
// // //                     Show Supplementary Angle
// // //                   </label>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Diagram Panel */}
// // //             <div style={styles.diagramPanel}>
// // //               <svg width="380" height="380" viewBox="0 0 400 400" style={styles.svgContainer}>
                
// // //                 {/* Reference grid */}
// // //                 {showReference && (
// // //                   <g opacity="0.3">
// // //                     <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="1" />
// // //                     <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} stroke="#ddd" />
// // //                     <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} stroke="#ddd" />
                    
// // //                     {/* Quadrant labels */}
// // //                     <text x={centerX + 60} y={centerY - 60} fill="#999" fontSize="12">I</text>
// // //                     <text x={centerX - 70} y={centerY - 60} fill="#999" fontSize="12">II</text>
// // //                     <text x={centerX - 70} y={centerY + 70} fill="#999" fontSize="12">III</text>
// // //                     <text x={centerX + 60} y={centerY + 70} fill="#999" fontSize="12">IV</text>
// // //                   </g>
// // //                 )}
                
// // //                 {/* Initial ray (horizontal) */}
// // //                 <line x1={centerX} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
// // //                       stroke="#000" strokeWidth="2" />
                
// // //                 {/* Terminal ray */}
// // //                 <line x1={centerX} y1={centerY} x2={arcEndX} y2={arcEndY} 
// // //                       stroke="#000" strokeWidth="2" />
                
// // //                 {/* Angle arc */}
// // //                 {showArc && (
// // //                   <path
// // //                     d={`M ${centerX + 40} ${centerY} A 40 40 0 ${Math.abs(angleRad) > Math.PI ? 1 : 0} ${angleRad >= 0 ? 0 : 1} ${centerX + 40 * Math.cos(angleRad)} ${centerY - 40 * Math.sin(angleRad)}`}
// // //                     fill="none"
// // //                     stroke="#0066cc"
// // //                     strokeWidth="3"
// // //                   />
// // //                 )}
                
// // //                 {/* Complementary angle arc */}
// // //                 {showComplementary && complementary >= 0 && complementary <= 90 && (
// // //                   <>
// // //                     {/* Vertical ray for complementary angle */}
// // //                     <line x1={centerX} y1={centerY} x2={centerX} y2={centerY - radius} 
// // //                           stroke="#28a745" strokeWidth="2" strokeDasharray="8,4" />
                          
// // //                     <path
// // //                       d={`M ${centerX + 50 * Math.cos(angleRad)} ${centerY - 50 * Math.sin(angleRad)} A 50 50 0 0 ${angleRad < Math.PI/2 ? 0 : 1} ${centerX} ${centerY - 50}`}
// // //                       fill="none"
// // //                       stroke="#28a745"
// // //                       strokeWidth="2"
// // //                       strokeDasharray="5,5"
// // //                     />
// // //                     <text x={centerX + 30} y={centerY - 80} fill="#28a745" fontSize="14" fontWeight="bold">
// // //                       {complementary.toFixed(1)}°
// // //                     </text>
// // //                   </>
// // //                 )}
                
// // //                 {/* Supplementary angle arc */}
// // //                 {showSupplementary && supplementary >= 0 && supplementary <= 180 && (
// // //                   <>
// // //                     {/* Negative x-axis ray for supplementary angle */}
// // //                     <line x1={centerX} y1={centerY} x2={centerX - radius} y2={centerY} 
// // //                           stroke="#dc3545" strokeWidth="2" strokeDasharray="8,4" />
                          
// // //                     <path
// // //                       d={`M ${centerX + 70 * Math.cos(angleRad)} ${centerY - 70 * Math.sin(angleRad)} A 70 70 0 0 0 ${centerX - 70} ${centerY}`}
// // //                       fill="none"
// // //                       stroke="#dc3545"
// // //                       strokeWidth="2"
// // //                       strokeDasharray="3,3"
// // //                     />
// // //                     <text x={centerX - 110} y={centerY - 10} fill="#dc3545" fontSize="14" fontWeight="bold">
// // //                       {supplementary.toFixed(1)}°
// // //                     </text>
// // //                   </>
// // //                 )}
                
// // //                 {/* Angle label */}
// // //                 <text x={centerX + 50} y={centerY - 10} fill="#0066cc" fontSize="16" fontWeight="bold">
// // //                   {angleDeg.toFixed(1)}°
// // //                 </text>
                
// // //                 {/* Vertex point */}
// // //                 <circle cx={centerX} cy={centerY} r="4" fill="#000" />
// // //               </svg>
              
// // //               {/* Trigonometric Values Table */}
// // //               <div style={styles.trigTable}>
// // //                 <h4 style={styles.trigTableTitle}>Trigonometric Values</h4>
// // //                 <table style={styles.table}>
// // //                   <thead>
// // //                     <tr>
// // //                       <th style={styles.th}>sin θ</th>
// // //                       <th style={styles.th}>cos θ</th>
// // //                       <th style={styles.th}>tan θ</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     <tr>
// // //                       <td style={styles.td}>
// // //                         {getSpecialValue(angleDeg, 'sin') || Math.sin(angleRad).toFixed(3)}
// // //                       </td>
// // //                       <td style={styles.td}>
// // //                         {getSpecialValue(angleDeg, 'cos') || Math.cos(angleRad).toFixed(3)}
// // //                       </td>
// // //                       <td style={styles.td}>
// // //                         {getSpecialValue(angleDeg, 'tan') || (Math.abs(Math.tan(angleRad)) > 1000 ? "∞" : Math.tan(angleRad).toFixed(3))}
// // //                       </td>
// // //                     </tr>
// // //                   </tbody>
// // //                 </table>
                
// // //                 <table style={{...styles.table, marginTop: '10px'}}>
// // //                   <thead>
// // //                     <tr>
// // //                       <th style={styles.th}>csc θ</th>
// // //                       <th style={styles.th}>sec θ</th>
// // //                       <th style={styles.th}>cot θ</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     <tr>
// // //                       <td style={styles.td}>
// // //                         {Math.abs(Math.sin(angleRad)) < 0.001 ? "∞" : (1/Math.sin(angleRad)).toFixed(3)}
// // //                       </td>
// // //                       <td style={styles.td}>
// // //                         {Math.abs(Math.cos(angleRad)) < 0.001 ? "∞" : (1/Math.cos(angleRad)).toFixed(3)}
// // //                       </td>
// // //                       <td style={styles.td}>
// // //                         {Math.abs(Math.tan(angleRad)) < 0.001 ? "∞" : (1/Math.tan(angleRad)).toFixed(3)}
// // //                       </td>
// // //                     </tr>
// // //                   </tbody>
// // //                 </table>
// // //               </div>
              
// // //               {/* Angle Properties Panel - moved below table */}
// // //               <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
// // //                 <div style={{...styles.trigTable, flex: '1'}}>
// // //                   <h4 style={styles.trigTableTitle}>Angle Properties</h4>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Current Angle:</strong><br/>
// // //                     {angleDeg.toFixed(2)}° = {angleRad.toFixed(3)} rad
// // //                   </div>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Type:</strong> {angleType}<br/>
// // //                     <strong style={styles.propertyStrong}>Quadrant:</strong> {quadrant}
// // //                   </div>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Reference Angle:</strong><br/>
// // //                     {referenceAngle.toFixed(1)}°
// // //                   </div>
// // //                 </div>
                
// // //                 <div style={{...styles.trigTable, flex: '1'}}>
// // //                   <h4 style={styles.trigTableTitle}>Related Angles</h4>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Complementary:</strong><br/>
// // //                     {complementary >= 0 && complementary <= 90 ? `${complementary.toFixed(1)}°` : 'N/A (angle > 90°)'}
// // //                   </div>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Supplementary:</strong><br/>
// // //                     {supplementary >= 0 && supplementary <= 180 ? `${supplementary.toFixed(1)}°` : 'N/A (angle > 180°)'}
// // //                   </div>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Reflex:</strong><br/>
// // //                     {reflex.toFixed(1)}°
// // //                   </div>
// // //                 </div>
                
// // //                 <div style={{...styles.trigTable, flex: '1'}}>
// // //                   <h4 style={styles.trigTableTitle}>Coterminal Angles</h4>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Positive:</strong><br/>
// // //                     {coterminalPos.toFixed(1)}°
// // //                   </div>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>Negative:</strong><br/>
// // //                     {coterminalNeg.toFixed(1)}°
// // //                   </div>
                  
// // //                   <div style={styles.propertyItem}>
// // //                     <strong style={styles.propertyStrong}>General Form:</strong><br/>
// // //                     θ + 360°n
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Section - Explanations */}
// // //           <div style={styles.rightSection}>
// // //             <h3 style={styles.explanationsTitle}>Explanations</h3>
// // //             {getCurrentExplanations().map((explanation, index) => (
// // //               <div key={index} style={styles.explanationItem}>
// // //                 <h4 style={styles.explanationTitle}>{explanation.title}</h4>
// // //                 <div style={styles.explanationContent}>
// // //                   {processContent(explanation.content)}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AngleExplorer;


// // import React, { useState } from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import angleExplanations from './angleExplanations';

// // const AngleExplorer = ({ explanations = angleExplanations }) => {
// //   const [angle, setAngle] = useState(45);
// //   const [unit, setUnit] = useState('degrees');
// //   const [showArc, setShowArc] = useState(true);
// //   const [showReference, setShowReference] = useState(true);
// //   const [showComplementary, setShowComplementary] = useState(false);
// //   const [showSupplementary, setShowSupplementary] = useState(false);

// //   const centerX = 200;
// //   const centerY = 200;
// //   const radius = 120;

// //   // Convert angle to radians for calculations
// //   const angleRad = unit === 'degrees' ? (angle * Math.PI) / 180 : angle;
// //   const angleDeg = unit === 'degrees' ? angle : (angle * 180) / Math.PI;

// //   // Calculate angle properties
// //   const complementary = 90 - angleDeg;
// //   const supplementary = 180 - angleDeg;
// //   const reflex = 360 - angleDeg;
// //   const coterminalPos = angleDeg + 360;
// //   const coterminalNeg = angleDeg - 360;

// //   // Determine quadrant
// //   const normalizedAngle = ((angleDeg % 360) + 360) % 360;
// //   let quadrant = 1;
// //   if (normalizedAngle > 90 && normalizedAngle <= 180) quadrant = 2;
// //   else if (normalizedAngle > 180 && normalizedAngle <= 270) quadrant = 3;
// //   else if (normalizedAngle > 270 && normalizedAngle < 360) quadrant = 4;

// //   // Reference angle
// //   let referenceAngle = normalizedAngle;
// //   if (quadrant === 2) referenceAngle = 180 - normalizedAngle;
// //   else if (quadrant === 3) referenceAngle = normalizedAngle - 180;
// //   else if (quadrant === 4) referenceAngle = 360 - normalizedAngle;

// //   // Angle type
// //   let angleType = 'acute';
// //   if (angleDeg === 90) angleType = 'right';
// //   else if (angleDeg > 90 && angleDeg < 180) angleType = 'obtuse';
// //   else if (angleDeg === 180) angleType = 'straight';
// //   else if (angleDeg > 180 && angleDeg < 360) angleType = 'reflex';

// //   // Arc endpoint
// //   const arcEndX = centerX + radius * Math.cos(angleRad);
// //   const arcEndY = centerY - radius * Math.sin(angleRad);

// //   // Get special trigonometric values
// //   const getSpecialValue = (angle, func) => {
// //     const normalizedDeg = Math.round(((angle % 360) + 360) % 360);
// //     const specialValues = {
// //       sin: {
// //         0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1",
// //         120: "√3/2", 135: "√2/2", 150: "1/2", 180: "0",
// //         210: "-1/2", 225: "-√2/2", 240: "-√3/2", 270: "-1",
// //         300: "-√3/2", 315: "-√2/2", 330: "-1/2", 360: "0"
// //       },
// //       cos: {
// //         0: "1", 30: "√3/2", 45: "√2/2", 60: "1/2", 90: "0",
// //         120: "-1/2", 135: "-√2/2", 150: "-√3/2", 180: "-1",
// //         210: "-√3/2", 225: "-√2/2", 240: "-1/2", 270: "0",
// //         300: "1/2", 315: "√2/2", 330: "√3/2", 360: "1"
// //       },
// //       tan: {
// //         0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "∞",
// //         120: "-√3", 135: "-1", 150: "-√3/3", 180: "0",
// //         210: "√3/3", 225: "1", 240: "√3", 270: "∞",
// //         300: "-√3", 315: "-1", 330: "-√3/3", 360: "0"
// //       }
// //     };
    
// //     return specialValues[func][normalizedDeg];
// //   };

// //   // Get dynamic explanations
// //   const getCurrentExplanations = () => {
// //     const currentExplanations = [];
// //     const roundedAngle = Math.round(normalizedAngle);
    
// //     // Add special angle explanation if it exists
// //     if (explanations.specialAngles[roundedAngle]) {
// //       currentExplanations.push(explanations.specialAngles[roundedAngle]);
// //     } else {
// //       // Add angle type explanation
// //       if (explanations.angleTypes[angleType]) {
// //         currentExplanations.push(explanations.angleTypes[angleType]);
// //       }
// //     }
    
// //     // Add quadrant explanation
// //     if (explanations.quadrants[quadrant]) {
// //       currentExplanations.push(explanations.quadrants[quadrant]);
// //     }
    
// //     // Add concept explanations based on toggles
// //     if (showComplementary && explanations.concepts.complementary) {
// //       currentExplanations.push(explanations.concepts.complementary);
// //     }
    
// //     if (showSupplementary && explanations.concepts.supplementary) {
// //       currentExplanations.push(explanations.concepts.supplementary);
// //     }
    
// //     if (showReference && explanations.concepts.reference) {
// //       currentExplanations.push(explanations.concepts.reference);
// //     }
    
// //     // Always show trigonometric explanation
// //     if (explanations.concepts.trigonometric) {
// //       currentExplanations.push(explanations.concepts.trigonometric);
// //     }
    
// //     // Fallback to general if no explanations found
// //     if (currentExplanations.length === 0 && explanations.general) {
// //       currentExplanations.push(explanations.general);
// //     }
    
// //     return currentExplanations;
// //   };

// //   const styles = {
// //     body: {
// //       fontFamily: 'Arial, sans-serif',
// //       margin: 0,
// //       padding: '10px',
// //       backgroundColor: '#f5f5f5'
// //     },
// //     container: {
// //       maxWidth: '1600px',
// //       margin: '0 auto',
// //       backgroundColor: 'white',
// //       padding: '15px',
// //       borderRadius: '10px',
// //       boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
// //     },
// //     mainContent: {
// //       display: 'flex',
// //       gap: '20px'
// //     },
// //     leftSection: {
// //       display: 'flex',
// //       gap: '20px',
// //       flex: '2'
// //     },
// //     rightSection: {
// //       flex: '1',
// //       background: '#f8f9fa',
// //       padding: '20px',
// //       borderRadius: '8px'
// //     },
// //     panel: {
// //       flex: '1',
// //       background: '#f8f9fa',
// //       padding: '20px',
// //       borderRadius: '8px'
// //     },
// //     diagramPanel: {
// //       flex: '1.2'
// //     },
// //     panelTitle: {
// //       margin: '0 0 20px 0',
// //       color: '#0066cc'
// //     },
// //     explanationsTitle: {
// //       margin: '0 0 20px 0',
// //       color: '#0066cc',
// //       borderBottom: '2px solid #0066cc',
// //       paddingBottom: '10px'
// //     },
// //     controlGroup: {
// //       marginBottom: '20px'
// //     },
// //     label: {
// //       display: 'block',
// //       marginBottom: '5px',
// //       fontWeight: 'bold'
// //     },
// //     input: {
// //       padding: '5px',
// //       marginRight: '10px',
// //       width: '100px'
// //     },
// //     select: {
// //       padding: '5px'
// //     },
// //     quickAngles: {
// //       display: 'flex',
// //       flexWrap: 'wrap',
// //       gap: '5px',
// //       marginTop: '10px'
// //     },
// //     quickAngleButton: {
// //       padding: '5px 8px',
// //       border: '1px solid #ddd',
// //       borderRadius: '3px',
// //       background: 'white',
// //       cursor: 'pointer',
// //       fontSize: '12px'
// //     },
// //     resetButton: {
// //       padding: '5px 8px',
// //       border: '1px solid #dc3545',
// //       borderRadius: '3px',
// //       background: '#dc3545',
// //       color: 'white',
// //       cursor: 'pointer',
// //       fontSize: '12px',
// //       fontWeight: 'bold'
// //     },
// //     displayOptions: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '8px'
// //     },
// //     checkboxLabel: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '5px',
// //       fontWeight: 'normal'
// //     },
// //     svgContainer: {
// //       border: '1px solid #ccc',
// //       background: 'white',
// //       borderRadius: '5px'
// //     },
// //     trigTable: {
// //       marginTop: '20px',
// //       background: '#f8f9fa',
// //       padding: '15px',
// //       borderRadius: '8px'
// //     },
// //     trigTableTitle: {
// //       margin: '0 0 10px 0',
// //       color: '#333'
// //     },
// //     table: {
// //       width: '100%',
// //       borderCollapse: 'collapse',
// //       fontSize: '12px'
// //     },
// //     th: {
// //       padding: '8px',
// //       textAlign: 'center',
// //       border: '1px solid #ddd',
// //       background: '#e9ecef',
// //       fontWeight: 'bold'
// //     },
// //     td: {
// //       padding: '8px',
// //       textAlign: 'center',
// //       border: '1px solid #ddd'
// //     },
// //     propertyItem: {
// //       marginBottom: '15px'
// //     },
// //     propertyStrong: {
// //       color: '#333'
// //     },
// //     explanationItem: {
// //       marginBottom: '25px',
// //       padding: '15px',
// //       background: 'white',
// //       borderRadius: '8px',
// //       border: '1px solid #e0e0e0'
// //     },
// //     explanationTitle: {
// //       margin: '0 0 10px 0',
// //       color: '#0066cc',
// //       fontSize: '16px',
// //       fontWeight: 'bold'
// //     },
// //     explanationContent: {
// //       color: '#333',
// //       lineHeight: '1.5',
// //       fontSize: '14px'
// //     }
// //   };

// //   return (
// //     <div style={styles.body}>
// //       <div style={styles.container}>
// //         <div style={styles.mainContent}>
// //           {/* Left Section - Controls and Diagram */}
// //           <div style={styles.leftSection}>
// //             {/* Controls Panel */}
// //             <div style={styles.panel}>
// //               <h3 style={styles.panelTitle}>Controls</h3>
              
// //               <div style={styles.controlGroup}>
// //                 <label style={styles.label}>Angle Value:</label>
// //                 <input 
// //                   type="number" 
// //                   value={angle} 
// //                   onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
// //                   style={styles.input}
// //                 />
// //                 <select 
// //                   value={unit} 
// //                   onChange={(e) => setUnit(e.target.value)}
// //                   style={styles.select}
// //                 >
// //                   <option value="degrees">Degrees</option>
// //                   <option value="radians">Radians</option>
// //                 </select>
// //               </div>

// //               <div style={styles.controlGroup}>
// //                 <h4 style={{ margin: '0 0 10px 0' }}>Quick Angles:</h4>
// //                 <div style={styles.quickAngles}>
// //                   {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map(deg => (
// //                     <button
// //                       key={deg}
// //                       onClick={() => {setAngle(unit === 'degrees' ? deg : deg * Math.PI / 180)}}
// //                       style={styles.quickAngleButton}
// //                       onMouseEnter={(e) => e.target.style.background = '#e9ecef'}
// //                       onMouseLeave={(e) => e.target.style.background = 'white'}
// //                     >
// //                       {deg}°
// //                     </button>
// //                   ))}
// //                   <button
// //                     onClick={() => {setAngle(0)}}
// //                     style={styles.resetButton}
// //                   >
// //                     Reset
// //                   </button>
// //                 </div>
// //               </div>

// //               <div style={styles.controlGroup}>
// //                 <h4 style={{ margin: '0 0 10px 0' }}>Display Options:</h4>
// //                 <div style={styles.displayOptions}>
// //                   <label style={styles.checkboxLabel}>
// //                     <input type="checkbox" checked={showArc} onChange={(e) => setShowArc(e.target.checked)} />
// //                     Show Angle Arc
// //                   </label>
// //                   <label style={styles.checkboxLabel}>
// //                     <input type="checkbox" checked={showReference} onChange={(e) => setShowReference(e.target.checked)} />
// //                     Show Reference Lines
// //                   </label>
// //                   <label style={styles.checkboxLabel}>
// //                     <input type="checkbox" checked={showComplementary} onChange={(e) => setShowComplementary(e.target.checked)} />
// //                     Show Complementary Angle
// //                   </label>
// //                   <label style={styles.checkboxLabel}>
// //                     <input type="checkbox" checked={showSupplementary} onChange={(e) => setShowSupplementary(e.target.checked)} />
// //                     Show Supplementary Angle
// //                   </label>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Diagram Panel */}
// //             <div style={styles.diagramPanel}>
// //               <svg width="380" height="380" viewBox="0 0 400 400" style={styles.svgContainer}>
                
// //                 {/* Reference grid */}
// //                 {showReference && (
// //                   <g opacity="0.3">
// //                     <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="1" />
// //                     <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} stroke="#ddd" />
// //                     <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} stroke="#ddd" />
                    
// //                     {/* Quadrant labels */}
// //                     <text x={centerX + 60} y={centerY - 60} fill="#999" fontSize="12">I</text>
// //                     <text x={centerX - 70} y={centerY - 60} fill="#999" fontSize="12">II</text>
// //                     <text x={centerX - 70} y={centerY + 70} fill="#999" fontSize="12">III</text>
// //                     <text x={centerX + 60} y={centerY + 70} fill="#999" fontSize="12">IV</text>
// //                   </g>
// //                 )}
                
// //                 {/* Initial ray (horizontal) */}
// //                 <line x1={centerX} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
// //                       stroke="#000" strokeWidth="2" />
                
// //                 {/* Terminal ray */}
// //                 <line x1={centerX} y1={centerY} x2={arcEndX} y2={arcEndY} 
// //                       stroke="#000" strokeWidth="2" />
                
// //                 {/* Angle arc */}
// //                 {showArc && (
// //                   <path
// //                     d={`M ${centerX + 40} ${centerY} A 40 40 0 ${Math.abs(angleRad) > Math.PI ? 1 : 0} ${angleRad >= 0 ? 0 : 1} ${centerX + 40 * Math.cos(angleRad)} ${centerY - 40 * Math.sin(angleRad)}`}
// //                     fill="none"
// //                     stroke="#0066cc"
// //                     strokeWidth="3"
// //                   />
// //                 )}
                
// //                 {/* Complementary angle arc */}
// //                 {showComplementary && complementary >= 0 && complementary <= 90 && (
// //                   <>
// //                     {/* Vertical ray for complementary angle */}
// //                     <line x1={centerX} y1={centerY} x2={centerX} y2={centerY - radius} 
// //                           stroke="#28a745" strokeWidth="2" strokeDasharray="8,4" />
                          
// //                     <path
// //                       d={`M ${centerX + 50 * Math.cos(angleRad)} ${centerY - 50 * Math.sin(angleRad)} A 50 50 0 0 ${angleRad < Math.PI/2 ? 0 : 1} ${centerX} ${centerY - 50}`}
// //                       fill="none"
// //                       stroke="#28a745"
// //                       strokeWidth="2"
// //                       strokeDasharray="5,5"
// //                     />
// //                     <text x={centerX + 30} y={centerY - 80} fill="#28a745" fontSize="14" fontWeight="bold">
// //                       {complementary.toFixed(1)}°
// //                     </text>
// //                   </>
// //                 )}
                
// //                 {/* Supplementary angle arc */}
// //                 {showSupplementary && supplementary >= 0 && supplementary <= 180 && (
// //                   <>
// //                     {/* Negative x-axis ray for supplementary angle */}
// //                     <line x1={centerX} y1={centerY} x2={centerX - radius} y2={centerY} 
// //                           stroke="#dc3545" strokeWidth="2" strokeDasharray="8,4" />
                          
// //                     <path
// //                       d={`M ${centerX + 70 * Math.cos(angleRad)} ${centerY - 70 * Math.sin(angleRad)} A 70 70 0 0 0 ${centerX - 70} ${centerY}`}
// //                       fill="none"
// //                       stroke="#dc3545"
// //                       strokeWidth="2"
// //                       strokeDasharray="3,3"
// //                     />
// //                     <text x={centerX - 110} y={centerY - 10} fill="#dc3545" fontSize="14" fontWeight="bold">
// //                       {supplementary.toFixed(1)}°
// //                     </text>
// //                   </>
// //                 )}
                
// //                 {/* Angle label */}
// //                 <text x={centerX + 50} y={centerY - 10} fill="#0066cc" fontSize="16" fontWeight="bold">
// //                   {angleDeg.toFixed(1)}°
// //                 </text>
                
// //                 {/* Vertex point */}
// //                 <circle cx={centerX} cy={centerY} r="4" fill="#000" />
// //               </svg>
              
// //               {/* Trigonometric Values Table */}
// //               <div style={styles.trigTable}>
// //                 <h4 style={styles.trigTableTitle}>Trigonometric Values</h4>
// //                 <table style={styles.table}>
// //                   <thead>
// //                     <tr>
// //                       <th style={styles.th}>sin θ</th>
// //                       <th style={styles.th}>cos θ</th>
// //                       <th style={styles.th}>tan θ</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     <tr>
// //                       <td style={styles.td}>
// //                         {getSpecialValue(angleDeg, 'sin') || Math.sin(angleRad).toFixed(3)}
// //                       </td>
// //                       <td style={styles.td}>
// //                         {getSpecialValue(angleDeg, 'cos') || Math.cos(angleRad).toFixed(3)}
// //                       </td>
// //                       <td style={styles.td}>
// //                         {getSpecialValue(angleDeg, 'tan') || (Math.abs(Math.tan(angleRad)) > 1000 ? "∞" : Math.tan(angleRad).toFixed(3))}
// //                       </td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
                
// //                 <table style={{...styles.table, marginTop: '10px'}}>
// //                   <thead>
// //                     <tr>
// //                       <th style={styles.th}>csc θ</th>
// //                       <th style={styles.th}>sec θ</th>
// //                       <th style={styles.th}>cot θ</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     <tr>
// //                       <td style={styles.td}>
// //                         {Math.abs(Math.sin(angleRad)) < 0.001 ? "∞" : (1/Math.sin(angleRad)).toFixed(3)}
// //                       </td>
// //                       <td style={styles.td}>
// //                         {Math.abs(Math.cos(angleRad)) < 0.001 ? "∞" : (1/Math.cos(angleRad)).toFixed(3)}
// //                       </td>
// //                       <td style={styles.td}>
// //                         {Math.abs(Math.tan(angleRad)) < 0.001 ? "∞" : (1/Math.tan(angleRad)).toFixed(3)}
// //                       </td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //               </div>
              
// //               {/* Angle Properties Panel - moved below table */}
// //               <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
// //                 <div style={{...styles.trigTable, flex: '1'}}>
// //                   <h4 style={styles.trigTableTitle}>Angle Properties</h4>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Current Angle:</strong><br/>
// //                     {angleDeg.toFixed(2)}° = {angleRad.toFixed(3)} rad
// //                   </div>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Type:</strong> {angleType}<br/>
// //                     <strong style={styles.propertyStrong}>Quadrant:</strong> {quadrant}
// //                   </div>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Reference Angle:</strong><br/>
// //                     {referenceAngle.toFixed(1)}°
// //                   </div>
// //                 </div>
                
// //                 <div style={{...styles.trigTable, flex: '1'}}>
// //                   <h4 style={styles.trigTableTitle}>Related Angles</h4>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Complementary:</strong><br/>
// //                     {complementary >= 0 && complementary <= 90 ? `${complementary.toFixed(1)}°` : 'N/A (angle > 90°)'}
// //                   </div>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Supplementary:</strong><br/>
// //                     {supplementary >= 0 && supplementary <= 180 ? `${supplementary.toFixed(1)}°` : 'N/A (angle > 180°)'}
// //                   </div>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Reflex:</strong><br/>
// //                     {reflex.toFixed(1)}°
// //                   </div>
// //                 </div>
                
// //                 <div style={{...styles.trigTable, flex: '1'}}>
// //                   <h4 style={styles.trigTableTitle}>Coterminal Angles</h4>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Positive:</strong><br/>
// //                     {coterminalPos.toFixed(1)}°
// //                   </div>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>Negative:</strong><br/>
// //                     {coterminalNeg.toFixed(1)}°
// //                   </div>
                  
// //                   <div style={styles.propertyItem}>
// //                     <strong style={styles.propertyStrong}>General Form:</strong><br/>
// //                     θ + 360°n
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Section - Explanations */}
// //           <div style={styles.rightSection}>
// //             <h3 style={styles.explanationsTitle}>Explanations</h3>
// //             {getCurrentExplanations().map((explanation, index) => (
// //               <div key={index} style={styles.explanationItem}>
// //                 <h4 style={styles.explanationTitle}>{explanation.title}</h4>
// //                 <div style={styles.explanationContent}>
// //                   {processContent(explanation.content)}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AngleExplorer;


// import React, { useState } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
// import angleExplanations from './angleExplanations';

// const AngleExplorer = ({ explanations = angleExplanations }) => {
//   const [angle, setAngle] = useState(45);
//   const [unit, setUnit] = useState('degrees');
//   const [showArc, setShowArc] = useState(true);
//   const [showReference, setShowReference] = useState(true);
//   const [showComplementary, setShowComplementary] = useState(false);
//   const [showSupplementary, setShowSupplementary] = useState(false);

//   const centerX = 200;
//   const centerY = 200;
//   const radius = 120;

//   // Convert angle to radians for calculations
//   const angleRad = unit === 'degrees' ? (angle * Math.PI) / 180 : angle;
//   const angleDeg = unit === 'degrees' ? angle : (angle * 180) / Math.PI;

//   // Calculate angle properties
//   const complementary = 90 - angleDeg;
//   const supplementary = 180 - angleDeg;
//   const reflex = 360 - angleDeg;
//   const coterminalPos = angleDeg + 360;
//   const coterminalNeg = angleDeg - 360;

//   // Determine quadrant
//   const normalizedAngle = ((angleDeg % 360) + 360) % 360;
//   let quadrant = 1;
//   if (normalizedAngle > 90 && normalizedAngle <= 180) quadrant = 2;
//   else if (normalizedAngle > 180 && normalizedAngle <= 270) quadrant = 3;
//   else if (normalizedAngle > 270 && normalizedAngle < 360) quadrant = 4;

//   // Reference angle
//   let referenceAngle = normalizedAngle;
//   if (quadrant === 2) referenceAngle = 180 - normalizedAngle;
//   else if (quadrant === 3) referenceAngle = normalizedAngle - 180;
//   else if (quadrant === 4) referenceAngle = 360 - normalizedAngle;

//   // Angle type
//   let angleType = 'acute';
//   if (angleDeg === 90) angleType = 'right';
//   else if (angleDeg > 90 && angleDeg < 180) angleType = 'obtuse';
//   else if (angleDeg === 180) angleType = 'straight';
//   else if (angleDeg > 180 && angleDeg < 360) angleType = 'reflex';

//   // Arc endpoint
//   const arcEndX = centerX + radius * Math.cos(angleRad);
//   const arcEndY = centerY - radius * Math.sin(angleRad);

//   // Get special trigonometric values
//   const getSpecialValue = (angle, func) => {
//     const normalizedDeg = Math.round(((angle % 360) + 360) % 360);
//     const specialValues = {
//       sin: {
//         0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1",
//         120: "√3/2", 135: "√2/2", 150: "1/2", 180: "0",
//         210: "-1/2", 225: "-√2/2", 240: "-√3/2", 270: "-1",
//         300: "-√3/2", 315: "-√2/2", 330: "-1/2", 360: "0"
//       },
//       cos: {
//         0: "1", 30: "√3/2", 45: "√2/2", 60: "1/2", 90: "0",
//         120: "-1/2", 135: "-√2/2", 150: "-√3/2", 180: "-1",
//         210: "-√3/2", 225: "-√2/2", 240: "-1/2", 270: "0",
//         300: "1/2", 315: "√2/2", 330: "√3/2", 360: "1"
//       },
//       tan: {
//         0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "∞",
//         120: "-√3", 135: "-1", 150: "-√3/3", 180: "0",
//         210: "√3/3", 225: "1", 240: "√3", 270: "∞",
//         300: "-√3", 315: "-1", 330: "-√3/3", 360: "0"
//       }
//     };
    
//     return specialValues[func][normalizedDeg];
//   };

//   // Get dynamic explanations
//   const getCurrentExplanations = () => {
//     const currentExplanations = [];
//     const roundedAngle = Math.round(normalizedAngle);
    
//     // Add special angle explanation if it exists
//     if (explanations.specialAngles[roundedAngle]) {
//       currentExplanations.push(explanations.specialAngles[roundedAngle]);
//     } else {
//       // Add angle type explanation
//       if (explanations.angleTypes[angleType]) {
//         currentExplanations.push(explanations.angleTypes[angleType]);
//       }
//     }
    
//     // Add quadrant explanation
//     if (explanations.quadrants[quadrant]) {
//       currentExplanations.push(explanations.quadrants[quadrant]);
//     }
    
//     // Add concept explanations based on toggles
//     if (showComplementary && explanations.concepts.complementary) {
//       currentExplanations.push(explanations.concepts.complementary);
//     }
    
//     if (showSupplementary && explanations.concepts.supplementary) {
//       currentExplanations.push(explanations.concepts.supplementary);
//     }
    
//     if (showReference && explanations.concepts.reference) {
//       currentExplanations.push(explanations.concepts.reference);
//     }
    
//     // Always show trigonometric explanation
//     if (explanations.concepts.trigonometric) {
//       currentExplanations.push(explanations.concepts.trigonometric);
//     }
    
//     // Fallback to general if no explanations found
//     if (currentExplanations.length === 0 && explanations.general) {
//       currentExplanations.push(explanations.general);
//     }
    
//     return currentExplanations;
//   };

//   const styles = {
//     body: {
//       fontFamily: 'Arial, sans-serif',
//       margin: 0,
//       padding: '10px',
//       backgroundColor: '#f5f5f5'
//     },
//     container: {
//       maxWidth: '1600px',
//       margin: '0 auto',
//       backgroundColor: 'white',
//       padding: '15px',
//       borderRadius: '10px',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
//     },
//     mainContent: {
//       display: 'flex',
//       gap: '20px'
//     },
//     leftSection: {
//       display: 'flex',
//       gap: '20px',
//       flex: '2'
//     },
//     rightSection: {
//       flex: '1',
//       background: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '8px'
//     },
//     panel: {
//       flex: '1',
//       background: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '8px'
//     },
//     diagramPanel: {
//       flex: '1.2'
//     },
//     panelTitle: {
//       margin: '0 0 20px 0',
//       color: '#0066cc'
//     },
//     explanationsTitle: {
//       margin: '0 0 20px 0',
//       color: '#0066cc',
//       borderBottom: '2px solid #0066cc',
//       paddingBottom: '10px'
//     },
//     controlGroup: {
//       marginBottom: '20px'
//     },
//     label: {
//       display: 'block',
//       marginBottom: '5px',
//       fontWeight: 'bold'
//     },
//     input: {
//       padding: '5px',
//       marginRight: '10px',
//       width: '100px'
//     },
//     select: {
//       padding: '5px'
//     },
//     quickAngles: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '5px',
//       marginTop: '10px'
//     },
//     quickAngleButton: {
//       padding: '5px 8px',
//       border: '1px solid #ddd',
//       borderRadius: '3px',
//       background: 'white',
//       cursor: 'pointer',
//       fontSize: '12px'
//     },
//     resetButton: {
//       padding: '5px 8px',
//       border: '1px solid #dc3545',
//       borderRadius: '3px',
//       background: '#dc3545',
//       color: 'white',
//       cursor: 'pointer',
//       fontSize: '12px',
//       fontWeight: 'bold'
//     },
//     displayOptions: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '8px'
//     },
//     checkboxLabel: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '5px',
//       fontWeight: 'normal'
//     },
//     svgContainer: {
//       border: '1px solid #ccc',
//       background: 'white',
//       borderRadius: '5px'
//     },
//     trigTable: {
//       marginTop: '20px',
//       background: '#f8f9fa',
//       padding: '15px',
//       borderRadius: '8px'
//     },
//     trigTableTitle: {
//       margin: '0 0 10px 0',
//       color: '#333'
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       fontSize: '12px'
//     },
//     th: {
//       padding: '8px',
//       textAlign: 'center',
//       border: '1px solid #ddd',
//       background: '#e9ecef',
//       fontWeight: 'bold'
//     },
//     td: {
//       padding: '8px',
//       textAlign: 'center',
//       border: '1px solid #ddd'
//     },
//     propertyItem: {
//       marginBottom: '15px'
//     },
//     propertyStrong: {
//       color: '#333'
//     },
//     explanationItem: {
//       marginBottom: '25px',
//       padding: '15px',
//       background: 'white',
//       borderRadius: '8px',
//       border: '1px solid #e0e0e0'
//     },
//     explanationTitle: {
//       margin: '0 0 10px 0',
//       color: '#0066cc',
//       fontSize: '16px',
//       fontWeight: 'bold'
//     },
//     propertyColumn: {
//       background: '#f8f9fa',
//       padding: '15px',
//       borderRadius: '8px',
//       fontSize: '12px'
//     },
//     propertyColumnTitle: {
//       margin: '0 0 10px 0',
//       color: '#333',
//       fontSize: '14px'
//     },
//     explanationContent: {
//       color: '#333',
//       lineHeight: '1.5',
//       fontSize: '14px'
//     }
//   };

//   return (
//     <div style={styles.body}>
//       <div style={styles.container}>
//         <div style={styles.mainContent}>
//           {/* Left Section - Controls and Diagram */}
//           <div style={styles.leftSection}>
//             {/* Controls Panel */}
//             <div style={styles.panel}>
//               <h3 style={styles.panelTitle}>Controls</h3>
              
//               <div style={styles.controlGroup}>
//                 <label style={styles.label}>Angle Value:</label>
//                 <input 
//                   type="number" 
//                   value={angle} 
//                   onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
//                   style={styles.input}
//                 />
//                 <select 
//                   value={unit} 
//                   onChange={(e) => setUnit(e.target.value)}
//                   style={styles.select}
//                 >
//                   <option value="degrees">Degrees</option>
//                   <option value="radians">Radians</option>
//                 </select>
//               </div>

//               <div style={styles.controlGroup}>
//                 <h4 style={{ margin: '0 0 10px 0' }}>Quick Angles:</h4>
//                 <div style={styles.quickAngles}>
//                   {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map(deg => (
//                     <button
//                       key={deg}
//                       onClick={() => {setAngle(unit === 'degrees' ? deg : deg * Math.PI / 180)}}
//                       style={styles.quickAngleButton}
//                       onMouseEnter={(e) => e.target.style.background = '#e9ecef'}
//                       onMouseLeave={(e) => e.target.style.background = 'white'}
//                     >
//                       {deg}°
//                     </button>
//                   ))}
//                   <button
//                     onClick={() => {setAngle(0)}}
//                     style={styles.resetButton}
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </div>

//               <div style={styles.controlGroup}>
//                 <h4 style={{ margin: '0 0 10px 0' }}>Display Options:</h4>
//                 <div style={styles.displayOptions}>
//                   <label style={styles.checkboxLabel}>
//                     <input type="checkbox" checked={showArc} onChange={(e) => setShowArc(e.target.checked)} />
//                     Show Angle Arc
//                   </label>
//                   <label style={styles.checkboxLabel}>
//                     <input type="checkbox" checked={showReference} onChange={(e) => setShowReference(e.target.checked)} />
//                     Show Reference Lines
//                   </label>
//                   <label style={styles.checkboxLabel}>
//                     <input type="checkbox" checked={showComplementary} onChange={(e) => setShowComplementary(e.target.checked)} />
//                     Show Complementary Angle
//                   </label>
//                   <label style={styles.checkboxLabel}>
//                     <input type="checkbox" checked={showSupplementary} onChange={(e) => setShowSupplementary(e.target.checked)} />
//                     Show Supplementary Angle
//                   </label>
//                 </div>
//               </div>

//               {/* Angle Properties - moved under display options */}
//               <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
//                 <div style={{...styles.propertyColumn, flex: '1'}}>
//                   <h4 style={styles.propertyColumnTitle}>Angle Properties</h4>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Current Angle:</strong><br/>
//                     {angleDeg.toFixed(2)}° = {angleRad.toFixed(3)} rad
//                   </div>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Type:</strong> {angleType}<br/>
//                     <strong style={styles.propertyStrong}>Quadrant:</strong> {quadrant}
//                   </div>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Reference Angle:</strong><br/>
//                     {referenceAngle.toFixed(1)}°
//                   </div>
//                 </div>
                
//                 <div style={{...styles.propertyColumn, flex: '1'}}>
//                   <h4 style={styles.propertyColumnTitle}>Related Angles</h4>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Complementary:</strong><br/>
//                     {complementary >= 0 && complementary <= 90 ? `${complementary.toFixed(1)}°` : 'N/A (angle > 90°)'}
//                   </div>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Supplementary:</strong><br/>
//                     {supplementary >= 0 && supplementary <= 180 ? `${supplementary.toFixed(1)}°` : 'N/A (angle > 180°)'}
//                   </div>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Reflex:</strong><br/>
//                     {reflex.toFixed(1)}°
//                   </div>
//                 </div>
                
//                 <div style={{...styles.propertyColumn, flex: '1'}}>
//                   <h4 style={styles.propertyColumnTitle}>Coterminal Angles</h4>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Positive:</strong><br/>
//                     {coterminalPos.toFixed(1)}°
//                   </div>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>Negative:</strong><br/>
//                     {coterminalNeg.toFixed(1)}°
//                   </div>
                  
//                   <div style={styles.propertyItem}>
//                     <strong style={styles.propertyStrong}>General Form:</strong><br/>
//                     θ + 360°n
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Diagram Panel */}
//             <div style={styles.diagramPanel}>
//               <svg width="380" height="380" viewBox="0 0 400 400" style={styles.svgContainer}>
                
//                 {/* Reference grid */}
//                 {showReference && (
//                   <g opacity="0.3">
//                     <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="1" />
//                     <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} stroke="#ddd" />
//                     <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} stroke="#ddd" />
                    
//                     {/* Quadrant labels */}
//                     <text x={centerX + 60} y={centerY - 60} fill="#999" fontSize="12">I</text>
//                     <text x={centerX - 70} y={centerY - 60} fill="#999" fontSize="12">II</text>
//                     <text x={centerX - 70} y={centerY + 70} fill="#999" fontSize="12">III</text>
//                     <text x={centerX + 60} y={centerY + 70} fill="#999" fontSize="12">IV</text>
//                   </g>
//                 )}
                
//                 {/* Initial ray (horizontal) */}
//                 <line x1={centerX} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
//                       stroke="#000" strokeWidth="2" />
                
//                 {/* Terminal ray */}
//                 <line x1={centerX} y1={centerY} x2={arcEndX} y2={arcEndY} 
//                       stroke="#000" strokeWidth="2" />
                
//                 {/* Angle arc */}
//                 {showArc && (
//                   <path
//                     d={`M ${centerX + 40} ${centerY} A 40 40 0 ${Math.abs(angleRad) > Math.PI ? 1 : 0} ${angleRad >= 0 ? 0 : 1} ${centerX + 40 * Math.cos(angleRad)} ${centerY - 40 * Math.sin(angleRad)}`}
//                     fill="none"
//                     stroke="#0066cc"
//                     strokeWidth="3"
//                   />
//                 )}
                
//                 {/* Complementary angle arc */}
//                 {showComplementary && complementary >= 0 && complementary <= 90 && (
//                   <>
//                     {/* Vertical ray for complementary angle */}
//                     <line x1={centerX} y1={centerY} x2={centerX} y2={centerY - radius} 
//                           stroke="#28a745" strokeWidth="2" strokeDasharray="8,4" />
                          
//                     <path
//                       d={`M ${centerX + 50 * Math.cos(angleRad)} ${centerY - 50 * Math.sin(angleRad)} A 50 50 0 0 ${angleRad < Math.PI/2 ? 0 : 1} ${centerX} ${centerY - 50}`}
//                       fill="none"
//                       stroke="#28a745"
//                       strokeWidth="2"
//                       strokeDasharray="5,5"
//                     />
//                     <text x={centerX + 30} y={centerY - 80} fill="#28a745" fontSize="14" fontWeight="bold">
//                       {complementary.toFixed(1)}°
//                     </text>
//                   </>
//                 )}
                
//                 {/* Supplementary angle arc */}
//                 {showSupplementary && supplementary >= 0 && supplementary <= 180 && (
//                   <>
//                     {/* Negative x-axis ray for supplementary angle */}
//                     <line x1={centerX} y1={centerY} x2={centerX - radius} y2={centerY} 
//                           stroke="#dc3545" strokeWidth="2" strokeDasharray="8,4" />
                          
//                     <path
//                       d={`M ${centerX + 70 * Math.cos(angleRad)} ${centerY - 70 * Math.sin(angleRad)} A 70 70 0 0 0 ${centerX - 70} ${centerY}`}
//                       fill="none"
//                       stroke="#dc3545"
//                       strokeWidth="2"
//                       strokeDasharray="3,3"
//                     />
//                     <text x={centerX - 110} y={centerY - 10} fill="#dc3545" fontSize="14" fontWeight="bold">
//                       {supplementary.toFixed(1)}°
//                     </text>
//                   </>
//                 )}
                
//                 {/* Angle label */}
//                 <text x={centerX + 50} y={centerY - 10} fill="#0066cc" fontSize="16" fontWeight="bold">
//                   {angleDeg.toFixed(1)}°
//                 </text>
                
//                 {/* Vertex point */}
//                 <circle cx={centerX} cy={centerY} r="4" fill="#000" />
//               </svg>
              
//               {/* Trigonometric Values Table */}
//               <div style={styles.trigTable}>
//                 <h4 style={styles.trigTableTitle}>Trigonometric Values</h4>
//                 <table style={styles.table}>
//                   <thead>
//                     <tr>
//                       <th style={styles.th}>sin θ</th>
//                       <th style={styles.th}>cos θ</th>
//                       <th style={styles.th}>tan θ</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td style={styles.td}>
//                         {getSpecialValue(angleDeg, 'sin') || Math.sin(angleRad).toFixed(3)}
//                       </td>
//                       <td style={styles.td}>
//                         {getSpecialValue(angleDeg, 'cos') || Math.cos(angleRad).toFixed(3)}
//                       </td>
//                       <td style={styles.td}>
//                         {getSpecialValue(angleDeg, 'tan') || (Math.abs(Math.tan(angleRad)) > 1000 ? "∞" : Math.tan(angleRad).toFixed(3))}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
                
//                 <table style={{...styles.table, marginTop: '10px'}}>
//                   <thead>
//                     <tr>
//                       <th style={styles.th}>csc θ</th>
//                       <th style={styles.th}>sec θ</th>
//                       <th style={styles.th}>cot θ</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td style={styles.td}>
//                         {Math.abs(Math.sin(angleRad)) < 0.001 ? "∞" : (1/Math.sin(angleRad)).toFixed(3)}
//                       </td>
//                       <td style={styles.td}>
//                         {Math.abs(Math.cos(angleRad)) < 0.001 ? "∞" : (1/Math.cos(angleRad)).toFixed(3)}
//                       </td>
//                       <td style={styles.td}>
//                         {Math.abs(Math.tan(angleRad)) < 0.001 ? "∞" : (1/Math.tan(angleRad)).toFixed(3)}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Explanations */}
//           <div style={styles.rightSection}>
//             <h3 style={styles.explanationsTitle}>Explanations</h3>
//             {getCurrentExplanations().map((explanation, index) => (
//               <div key={index} style={styles.explanationItem}>
//                 <h4 style={styles.explanationTitle}>{explanation.title}</h4>
//                 <div style={styles.explanationContent}>
//                   {processContent(explanation.content)}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AngleExplorer;


import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import angleExplanations from './angleExplanations';

const AngleExplorer = ({ explanations = angleExplanations }) => {
  const [angle, setAngle] = useState(45);
  const [unit, setUnit] = useState('degrees');
  const [showArc, setShowArc] = useState(true);
  const [showReference, setShowReference] = useState(true);
  const [showComplementary, setShowComplementary] = useState(false);
  const [showSupplementary, setShowSupplementary] = useState(false);

  const centerX = 200;
  const centerY = 200;
  const radius = 120;

  // Convert angle to radians for calculations
  const angleRad = unit === 'degrees' ? (angle * Math.PI) / 180 : angle;
  const angleDeg = unit === 'degrees' ? angle : (angle * 180) / Math.PI;

  // Calculate angle properties
  const complementary = 90 - angleDeg;
  const supplementary = 180 - angleDeg;
  const reflex = 360 - angleDeg;
  const coterminalPos = angleDeg + 360;
  const coterminalNeg = angleDeg - 360;

  // Determine quadrant
  const normalizedAngle = ((angleDeg % 360) + 360) % 360;
  let quadrant = 1;
  if (normalizedAngle > 90 && normalizedAngle <= 180) quadrant = 2;
  else if (normalizedAngle > 180 && normalizedAngle <= 270) quadrant = 3;
  else if (normalizedAngle > 270 && normalizedAngle < 360) quadrant = 4;

  // Reference angle
  let referenceAngle = normalizedAngle;
  if (quadrant === 2) referenceAngle = 180 - normalizedAngle;
  else if (quadrant === 3) referenceAngle = normalizedAngle - 180;
  else if (quadrant === 4) referenceAngle = 360 - normalizedAngle;

  // Angle type
  let angleType = 'acute';
  if (angleDeg === 90) angleType = 'right';
  else if (angleDeg > 90 && angleDeg < 180) angleType = 'obtuse';
  else if (angleDeg === 180) angleType = 'straight';
  else if (angleDeg > 180 && angleDeg < 360) angleType = 'reflex';

  // Arc endpoint
  const arcEndX = centerX + radius * Math.cos(angleRad);
  const arcEndY = centerY - radius * Math.sin(angleRad);

  // Get special trigonometric values
  const getSpecialValue = (angle, func) => {
    const normalizedDeg = Math.round(((angle % 360) + 360) % 360);
    const specialValues = {
      sin: {
        0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1",
        120: "√3/2", 135: "√2/2", 150: "1/2", 180: "0",
        210: "-1/2", 225: "-√2/2", 240: "-√3/2", 270: "-1",
        300: "-√3/2", 315: "-√2/2", 330: "-1/2", 360: "0"
      },
      cos: {
        0: "1", 30: "√3/2", 45: "√2/2", 60: "1/2", 90: "0",
        120: "-1/2", 135: "-√2/2", 150: "-√3/2", 180: "-1",
        210: "-√3/2", 225: "-√2/2", 240: "-1/2", 270: "0",
        300: "1/2", 315: "√2/2", 330: "√3/2", 360: "1"
      },
      tan: {
        0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "∞",
        120: "-√3", 135: "-1", 150: "-√3/3", 180: "0",
        210: "√3/3", 225: "1", 240: "√3", 270: "∞",
        300: "-√3", 315: "-1", 330: "-√3/3", 360: "0"
      }
    };
    
    return specialValues[func][normalizedDeg];
  };

  // Get dynamic explanations
  const getCurrentExplanations = () => {
    const currentExplanations = [];
    const roundedAngle = Math.round(normalizedAngle);
    
    // Add special angle explanation if it exists
    if (explanations.specialAngles[roundedAngle]) {
      currentExplanations.push(explanations.specialAngles[roundedAngle]);
    } else {
      // Add angle type explanation
      if (explanations.angleTypes[angleType]) {
        currentExplanations.push(explanations.angleTypes[angleType]);
      }
    }
    
    // Add quadrant explanation
    if (explanations.quadrants[quadrant]) {
      currentExplanations.push(explanations.quadrants[quadrant]);
    }
    
    // Add concept explanations based on toggles
    if (showComplementary && explanations.concepts.complementary) {
      currentExplanations.push(explanations.concepts.complementary);
    }
    
    if (showSupplementary && explanations.concepts.supplementary) {
      currentExplanations.push(explanations.concepts.supplementary);
    }
    
    if (showReference && explanations.concepts.reference) {
      currentExplanations.push(explanations.concepts.reference);
    }
    
    // Always show trigonometric explanation
    if (explanations.concepts.trigonometric) {
      currentExplanations.push(explanations.concepts.trigonometric);
    }
    
    // Fallback to general if no explanations found
    if (currentExplanations.length === 0 && explanations.general) {
      currentExplanations.push(explanations.general);
    }
    
    return currentExplanations;
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: '10px',
      backgroundColor: '#f5f5f5'
    },
    container: {
      maxWidth: '1600px',
      margin: '0 auto',
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    mainContent: {
      display: 'flex',
      gap: '20px'
    },
    leftSection: {
      display: 'flex',
      gap: '20px',
      flex: '2'
    },
    rightSection: {
      flex: '1',
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px'
    },
    panel: {
      flex: '1',
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px'
    },
    diagramPanel: {
      flex: '1.2'
    },
    panelTitle: {
      margin: '0 0 20px 0',
      color: '#0066cc'
    },
    explanationsTitle: {
      margin: '0 0 20px 0',
      color: '#0066cc',
      borderBottom: '2px solid #0066cc',
      paddingBottom: '10px'
    },
    controlGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      padding: '5px',
      marginRight: '10px',
      width: '100px'
    },
    select: {
      padding: '5px'
    },
    quickAngles: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '5px',
      marginTop: '10px'
    },
    quickAngleButton: {
      padding: '5px 8px',
      border: '1px solid #ddd',
      borderRadius: '3px',
      background: 'white',
      cursor: 'pointer',
      fontSize: '12px'
    },
    resetButton: {
      padding: '5px 8px',
      border: '1px solid #dc3545',
      borderRadius: '3px',
      background: '#dc3545',
      color: 'white',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: 'bold'
    },
    displayOptions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontWeight: 'normal'
    },
    svgContainer: {
      border: '1px solid #ccc',
      background: 'white',
      borderRadius: '5px'
    },
    trigTable: {
      marginTop: '20px',
      background: '#f8f9fa',
      padding: '15px',
      borderRadius: '8px'
    },
    trigTableTitle: {
      margin: '0 0 10px 0',
      color: '#333'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '12px'
    },
    th: {
      padding: '8px',
      textAlign: 'center',
      border: '1px solid #ddd',
      background: '#e9ecef',
      fontWeight: 'bold'
    },
    td: {
      padding: '8px',
      textAlign: 'center',
      border: '1px solid #ddd'
    },
    propertyItem: {
      marginBottom: '15px'
    },
    propertyStrong: {
      color: '#333'
    },
    explanationItem: {
      marginBottom: '25px',
      padding: '15px',
      background: 'white',
      borderRadius: '8px',
      border: '1px solid #e0e0e0'
    },
    explanationTitle: {
      margin: '0 0 10px 0',
      color: '#0066cc',
      fontSize: '16px',
      fontWeight: 'bold'
    },
    propertyColumn: {
      background: '#f8f9fa',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px'
    },
    propertyColumnTitle: {
      margin: '0 0 10px 0',
      color: '#0066cc',
      fontSize: '16px'
    },
    explanationContent: {
      color: '#333',
      lineHeight: '1.5',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.mainContent}>
          {/* Left Section - Controls and Diagram */}
          <div style={styles.leftSection}>
            {/* Controls Panel */}
            <div style={styles.panel}>
              <h3 style={styles.panelTitle}>Controls</h3>
              
              <div style={styles.controlGroup}>
                <label style={styles.label}>Angle Value:</label>
                <input 
                  type="number" 
                  value={angle} 
                  onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
                  style={styles.input}
                />
                <select 
                  value={unit} 
                  onChange={(e) => setUnit(e.target.value)}
                  style={styles.select}
                >
                  <option value="degrees">Degrees</option>
                  <option value="radians">Radians</option>
                </select>
              </div>

              <div style={styles.controlGroup}>
                <h4 style={{ margin: '0 0 10px 0' }}>Quick Angles:</h4>
                <div style={styles.quickAngles}>
                  {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map(deg => (
                    <button
                      key={deg}
                      onClick={() => {setAngle(unit === 'degrees' ? deg : deg * Math.PI / 180)}}
                      style={styles.quickAngleButton}
                      onMouseEnter={(e) => e.target.style.background = '#e9ecef'}
                      onMouseLeave={(e) => e.target.style.background = 'white'}
                    >
                      {deg}°
                    </button>
                  ))}
                  <button
                    onClick={() => {setAngle(0)}}
                    style={styles.resetButton}
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div style={styles.controlGroup}>
                <h4 style={{ margin: '0 0 10px 0' }}>Display Options:</h4>
                <div style={styles.displayOptions}>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked={showArc} onChange={(e) => setShowArc(e.target.checked)} />
                    Show Angle Arc
                  </label>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked={showReference} onChange={(e) => setShowReference(e.target.checked)} />
                    Show Reference Lines
                  </label>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked={showComplementary} onChange={(e) => setShowComplementary(e.target.checked)} />
                    Show Complementary Angle
                  </label>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" checked={showSupplementary} onChange={(e) => setShowSupplementary(e.target.checked)} />
                    Show Supplementary Angle
                  </label>
                </div>
              </div>

              {/* Angle Properties - moved under display options */}
              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <div style={{...styles.propertyColumn, flex: '1'}}>
                  <h4 style={styles.propertyColumnTitle}>Angle Properties</h4>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Current Angle:</strong><br/>
                    {angleDeg.toFixed(2)}° = {angleRad.toFixed(3)} rad
                  </div>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Type:</strong> {angleType}<br/>
                    <strong style={styles.propertyStrong}>Quadrant:</strong> {quadrant}
                  </div>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Reference Angle:</strong><br/>
                    {referenceAngle.toFixed(1)}°
                  </div>
                </div>
                
                <div style={{...styles.propertyColumn, flex: '1'}}>
                  <h4 style={styles.propertyColumnTitle}>Related Angles</h4>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Complementary:</strong><br/>
                    {complementary >= 0 && complementary <= 90 ? `${complementary.toFixed(1)}°` : 'N/A (angle > 90°)'}
                  </div>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Supplementary:</strong><br/>
                    {supplementary >= 0 && supplementary <= 180 ? `${supplementary.toFixed(1)}°` : 'N/A (angle > 180°)'}
                  </div>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Reflex:</strong><br/>
                    {reflex.toFixed(1)}°
                  </div>
                </div>
                
                <div style={{...styles.propertyColumn, flex: '1'}}>
                  <h4 style={styles.propertyColumnTitle}>Coterminal Angles</h4>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Positive:</strong><br/>
                    {coterminalPos.toFixed(1)}°
                  </div>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>Negative:</strong><br/>
                    {coterminalNeg.toFixed(1)}°
                  </div>
                  
                  <div style={styles.propertyItem}>
                    <strong style={styles.propertyStrong}>General Form:</strong><br/>
                    θ + 360°n
                  </div>
                </div>
              </div>
            </div>

            {/* Diagram Panel */}
            <div style={styles.diagramPanel}>
              <svg width="380" height="380" viewBox="0 0 400 400" style={styles.svgContainer}>
                
                {/* Reference grid */}
                {showReference && (
                  <g opacity="0.3">
                    <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#ddd" strokeWidth="1" />
                    <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} stroke="#ddd" />
                    <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} stroke="#ddd" />
                    
                    {/* Quadrant labels */}
                    <text x={centerX + 60} y={centerY - 60} fill="#999" fontSize="12">I</text>
                    <text x={centerX - 70} y={centerY - 60} fill="#999" fontSize="12">II</text>
                    <text x={centerX - 70} y={centerY + 70} fill="#999" fontSize="12">III</text>
                    <text x={centerX + 60} y={centerY + 70} fill="#999" fontSize="12">IV</text>
                  </g>
                )}
                
                {/* Initial ray (horizontal) */}
                <line x1={centerX} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
                      stroke="#000" strokeWidth="2" />
                
                {/* Terminal ray */}
                <line x1={centerX} y1={centerY} x2={arcEndX} y2={arcEndY} 
                      stroke="#000" strokeWidth="2" />
                
                {/* Angle arc */}
                {showArc && (
                  <path
                    d={`M ${centerX + 40} ${centerY} A 40 40 0 ${Math.abs(angleRad) > Math.PI ? 1 : 0} ${angleRad >= 0 ? 0 : 1} ${centerX + 40 * Math.cos(angleRad)} ${centerY - 40 * Math.sin(angleRad)}`}
                    fill="none"
                    stroke="#0066cc"
                    strokeWidth="3"
                  />
                )}
                
                {/* Complementary angle arc */}
                {showComplementary && complementary >= 0 && complementary <= 90 && (
                  <>
                    {/* Vertical ray for complementary angle */}
                    <line x1={centerX} y1={centerY} x2={centerX} y2={centerY - radius} 
                          stroke="#28a745" strokeWidth="2" strokeDasharray="8,4" />
                          
                    <path
                      d={`M ${centerX + 50 * Math.cos(angleRad)} ${centerY - 50 * Math.sin(angleRad)} A 50 50 0 0 ${angleRad < Math.PI/2 ? 0 : 1} ${centerX} ${centerY - 50}`}
                      fill="none"
                      stroke="#28a745"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <text x={centerX + 30} y={centerY - 80} fill="#28a745" fontSize="14" fontWeight="bold">
                      {complementary.toFixed(1)}°
                    </text>
                  </>
                )}
                
                {/* Supplementary angle arc */}
                {showSupplementary && supplementary >= 0 && supplementary <= 180 && (
                  <>
                    {/* Negative x-axis ray for supplementary angle */}
                    <line x1={centerX} y1={centerY} x2={centerX - radius} y2={centerY} 
                          stroke="#dc3545" strokeWidth="2" strokeDasharray="8,4" />
                          
                    <path
                      d={`M ${centerX + 70 * Math.cos(angleRad)} ${centerY - 70 * Math.sin(angleRad)} A 70 70 0 0 0 ${centerX - 70} ${centerY}`}
                      fill="none"
                      stroke="#dc3545"
                      strokeWidth="2"
                      strokeDasharray="3,3"
                    />
                    <text x={centerX - 110} y={centerY - 10} fill="#dc3545" fontSize="14" fontWeight="bold">
                      {supplementary.toFixed(1)}°
                    </text>
                  </>
                )}
                
                {/* Angle label */}
                <text x={centerX + 50} y={centerY - 10} fill="#0066cc" fontSize="16" fontWeight="bold">
                  {angleDeg.toFixed(1)}°
                </text>
                
                {/* Vertex point */}
                <circle cx={centerX} cy={centerY} r="4" fill="#000" />
              </svg>
              
              {/* Trigonometric Values Table */}
              <div style={styles.trigTable}>
                <h4 style={styles.trigTableTitle}>Trigonometric Values</h4>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>sin θ</th>
                      <th style={styles.th}>cos θ</th>
                      <th style={styles.th}>tan θ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={styles.td}>
                        {getSpecialValue(angleDeg, 'sin') || Math.sin(angleRad).toFixed(3)}
                      </td>
                      <td style={styles.td}>
                        {getSpecialValue(angleDeg, 'cos') || Math.cos(angleRad).toFixed(3)}
                      </td>
                      <td style={styles.td}>
                        {getSpecialValue(angleDeg, 'tan') || (Math.abs(Math.tan(angleRad)) > 1000 ? "∞" : Math.tan(angleRad).toFixed(3))}
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <table style={{...styles.table, marginTop: '10px'}}>
                  <thead>
                    <tr>
                      <th style={styles.th}>csc θ</th>
                      <th style={styles.th}>sec θ</th>
                      <th style={styles.th}>cot θ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={styles.td}>
                        {Math.abs(Math.sin(angleRad)) < 0.001 ? "∞" : (1/Math.sin(angleRad)).toFixed(3)}
                      </td>
                      <td style={styles.td}>
                        {Math.abs(Math.cos(angleRad)) < 0.001 ? "∞" : (1/Math.cos(angleRad)).toFixed(3)}
                      </td>
                      <td style={styles.td}>
                        {Math.abs(Math.tan(angleRad)) < 0.001 ? "∞" : (1/Math.tan(angleRad)).toFixed(3)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Section - Explanations */}
          <div style={styles.rightSection}>
            <h3 style={styles.explanationsTitle}>Explanations</h3>
            {getCurrentExplanations().map((explanation, index) => (
              <div key={index} style={styles.explanationItem}>
                <h4 style={styles.explanationTitle}>{explanation.title}</h4>
                <div style={styles.explanationContent}>
                  {processContent(explanation.content)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngleExplorer;