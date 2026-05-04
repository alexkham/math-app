// // // import React, { useMemo, useState } from 'react';
// // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';


// // //  const functionDefinitions = {
// // //     sin: (x) => Math.sin(x),
// // //     cos: (x) => Math.cos(x),
// // //     tan: (x) => {
// // //       const val = Math.tan(x);
// // //       return Math.abs(val) > 10 ? null : val;
// // //     },
// // //     csc: (x) => {
// // //       const sinVal = Math.sin(x);
// // //       if (Math.abs(sinVal) < 0.01) return null;
// // //       const val = 1 / sinVal;
// // //       return Math.abs(val) > 10 ? null : val;
// // //     },
// // //     sec: (x) => {
// // //       const cosVal = Math.cos(x);
// // //       if (Math.abs(cosVal) < 0.01) return null;
// // //       const val = 1 / cosVal;
// // //       return Math.abs(val) > 10 ? null : val;
// // //     },
// // //     cot: (x) => {
// // //       const sinVal = Math.sin(x);
// // //       if (Math.abs(sinVal) < 0.01) return null;
// // //       const val = Math.cos(x) / sinVal;
// // //       return Math.abs(val) > 10 ? null : val;
// // //     }
// // //   };



// // // const TrigGraph = ({ functionType, currentValue, currentAngle = Math.PI/6 }) => {
// // //   const [zoomDomain, setZoomDomain] = useState([-2 * Math.PI, 2 * Math.PI]);
// // //   const [rangeDomain, setRangeDomain] = useState([-4, 4]);

 
// // //   const asymptotePositions = useMemo(() => {
// // //     if (functionType === 'tan' || functionType === 'sec') {
// // //       return Array.from({ length: 7 }, (_, i) => Math.PI/2 + (i-3) * Math.PI);
// // //     } else if (functionType === 'cot' || functionType === 'csc') {
// // //       return Array.from({ length: 5 }, (_, i) => (i-2) * Math.PI);
// // //     }
// // //     return [];
// // //   }, [functionType]);

// // //   const graphData = useMemo(() => {
// // //     const data = [];
// // //     const step = 0.02;
// // //     const func = functionDefinitions[functionType];
    
// // //     for (let x = zoomDomain[0]; x <= zoomDomain[1]; x += step) {
// // //       const y = func(x);
// // //       data.push({
// // //         x: x,
// // //         xLabel: x.toFixed(2),
// // //         y: y,
// // //         angle: x * (180 / Math.PI), // for tooltip
// // //         isCurrentPoint: Math.abs(x - currentAngle) < 0.05
// // //       });
// // //     }
// // //     return data;
// // //   }, [functionType, zoomDomain, currentAngle]);

// // //   const customTooltip = ({ active, payload, label }) => {
// // //     if (!active || !payload || !payload.length) return null;
    
// // //     const data = payload[0].payload;
// // //     const xVal = parseFloat(label);
// // //     const yVal = data.y;
    
// // //     return (
// // //       <div style={{
// // //         backgroundColor: 'white',
// // //         border: '2px solid #1d6bd8',
// // //         borderRadius: '8px',
// // //         padding: '12px',
// // //         boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
// // //         fontSize: '14px'
// // //       }}>
// // //         <div style={{ fontWeight: 'bold', color: '#1d6bd8', marginBottom: '4px' }}>
// // //           {functionType}({xVal.toFixed(3)})
// // //         </div>
// // //         <div>Value: <strong>{yVal?.toFixed(4) || 'undefined'}</strong></div>
// // //         <div>Angle: <strong>{data.angle.toFixed(1)}°</strong></div>
// // //         <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
// // //           Radians: {xVal.toFixed(3)}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const formatXTick = (value) => {
// // //     const piMultiple = value / Math.PI;
// // //     if (Math.abs(piMultiple) < 0.1) return '0';
// // //     if (Math.abs(piMultiple - 1) < 0.1) return 'π';
// // //     if (Math.abs(piMultiple + 1) < 0.1) return '-π';
// // //     if (Math.abs(piMultiple - 0.5) < 0.1) return 'π/2';
// // //     if (Math.abs(piMultiple + 0.5) < 0.1) return '-π/2';
// // //     if (Math.abs(piMultiple - 2) < 0.1) return '2π';
// // //     if (Math.abs(piMultiple + 2) < 0.1) return '-2π';
// // //     return (piMultiple).toFixed(1) + 'π';
// // //   };

// // //   const zoomIn = () => {
// // //     const range = zoomDomain[1] - zoomDomain[0];
// // //     const center = (zoomDomain[0] + zoomDomain[1]) / 2;
// // //     const newRange = range * 0.7;
// // //     setZoomDomain([center - newRange/2, center + newRange/2]);
// // //   };

// // //   const zoomOut = () => {
// // //     const range = zoomDomain[1] - zoomDomain[0];
// // //     const center = (zoomDomain[0] + zoomDomain[1]) / 2;
// // //     const newRange = Math.min(range * 1.4, 8 * Math.PI);
// // //     setZoomDomain([center - newRange/2, center + newRange/2]);
// // //   };

// // //   const resetZoom = () => {
// // //     setZoomDomain([-2 * Math.PI, 2 * Math.PI]);
// // //     setRangeDomain([-4, 4]);
// // //   };

// // //   return (
// // //     <div style={{
// // //       marginTop: '24px',
// // //       padding: '20px',
// // //       backgroundColor: '#f8f9fa',
// // //       borderRadius: '6px',
// // //       border: '1px solid #ddd'
// // //     }}>
// // //       {/* Header with controls */}
// // //       <div style={{
// // //         display: 'flex',
// // //         justifyContent: 'space-between',
// // //         alignItems: 'center',
// // //         marginBottom: '16px'
// // //       }}>
// // //         <h4 style={{ margin: 0, color: '#1d6bd8' }}>
// // //           Interactive Graph: {functionType}(x) = {currentValue?.toFixed(4) || 'undefined'}
// // //         </h4>
// // //         <div style={{ display: 'flex', gap: '8px' }}>
// // //           <button onClick={zoomIn} style={{
// // //             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
// // //             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
// // //           }}>
// // //             Zoom In
// // //           </button>
// // //           <button onClick={zoomOut} style={{
// // //             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
// // //             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
// // //           }}>
// // //             Zoom Out
// // //           </button>
// // //           <button onClick={resetZoom} style={{
// // //             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
// // //             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
// // //           }}>
// // //             Reset
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Legend */}
// // //       <div style={{
// // //         fontSize: '12px',
// // //         color: '#666',
// // //         marginBottom: '12px',
// // //         display: 'flex',
// // //         gap: '16px',
// // //         flexWrap: 'wrap'
// // //       }}>
// // //         <span style={{ color: '#1d6bd8' }}>● Function curve</span>
// // //         <span style={{ color: '#ff4757' }}>● Current point ({currentAngle.toFixed(3)} rad)</span>
// // //         {asymptotePositions.length > 0 && (
// // //           <span style={{ color: '#ff6b6b' }}>┊ Asymptotes</span>
// // //         )}
// // //         <span style={{ color: '#666' }}>💡 Hover for details, scroll to zoom</span>
// // //       </div>

// // //       {/* Graph */}
// // //       <div style={{ height: '400px', width: '100%' }}>
// // //         <ResponsiveContainer width="100%" height="100%">
// // //           <LineChart data={graphData}>
// // //             <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
// // //             <XAxis 
// // //               dataKey="x" 
// // //               type="number" 
// // //               scale="linear"
// // //               domain={zoomDomain}
// // //               tickFormatter={formatXTick}
// // //               stroke="#666"
// // //             />
// // //             <YAxis 
// // //               domain={rangeDomain}
// // //               stroke="#666"
// // //             />
// // //             <Tooltip content={customTooltip} />
            
// // //             {/* Asymptotes as reference lines */}
// // //             {asymptotePositions.map((pos, idx) => (
// // //               pos >= zoomDomain[0] && pos <= zoomDomain[1] && (
// // //                 <ReferenceLine 
// // //                   key={idx} 
// // //                   x={pos} 
// // //                   stroke="#ff6b6b" 
// // //                   strokeDasharray="5 5"
// // //                   strokeWidth={2}
// // //                 />
// // //               )
// // //             ))}
            
// // //             {/* Current angle reference line */}
// // //             <ReferenceLine 
// // //               x={currentAngle} 
// // //               stroke="#ff4757" 
// // //               strokeWidth={2}
// // //               strokeDasharray="8 4"
// // //             />
            
// // //             {/* Function line */}
// // //             <Line 
// // //               type="linear" 
// // //               dataKey="y" 
// // //               stroke="#1d6bd8" 
// // //               strokeWidth={3}
// // //               dot={false}
// // //               connectNulls={false}
// // //             />
            
// // //             {/* Highlight current point */}
// // //             <Line 
// // //               type="linear"
// // //               dataKey={(entry) => entry.isCurrentPoint ? entry.y : null}
// // //               stroke="#ff4757"
// // //               strokeWidth={0}
// // //               dot={{ fill: '#ff4757', strokeWidth: 2, r: 6 }}
// // //             />
// // //           </LineChart>
// // //         </ResponsiveContainer>
// // //       </div>

// // //       <div style={{
// // //         marginTop: '12px',
// // //         fontSize: '12px',
// // //         color: '#666',
// // //         textAlign: 'center'
// // //       }}>
// // //         Current domain: [{formatXTick(zoomDomain[0])} to {formatXTick(zoomDomain[1])}]
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TrigGraph;



// // import React, { useMemo, useState } from 'react';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';


// //  const functionDefinitions = {
// //     sin: (x) => Math.sin(x),
// //     cos: (x) => Math.cos(x),
// //     tan: (x) => {
// //       const val = Math.tan(x);
// //       return Math.abs(val) > 10 ? null : val;
// //     },
// //     csc: (x) => {
// //       const sinVal = Math.sin(x);
// //       if (Math.abs(sinVal) < 0.01) return null;
// //       const val = 1 / sinVal;
// //       return Math.abs(val) > 10 ? null : val;
// //     },
// //     sec: (x) => {
// //       const cosVal = Math.cos(x);
// //       if (Math.abs(cosVal) < 0.01) return null;
// //       const val = 1 / cosVal;
// //       return Math.abs(val) > 10 ? null : val;
// //     },
// //     cot: (x) => {
// //       const sinVal = Math.sin(x);
// //       if (Math.abs(sinVal) < 0.01) return null;
// //       const val = Math.cos(x) / sinVal;
// //       return Math.abs(val) > 10 ? null : val;
// //     }
// //   };



// // const TrigGraph = ({ functionType, currentValue, currentAngle = Math.PI/6 }) => {
// //   const [zoomDomain, setZoomDomain] = useState([-2 * Math.PI, 2 * Math.PI]);
// //   const [rangeDomain, setRangeDomain] = useState([-4, 4]);

// //   // Resolve function safely. Normalize the prop and fall back to sin if invalid.
// //   const resolvedType = useMemo(() => {
// //     const key = typeof functionType === 'string' ? functionType.toLowerCase().trim() : '';
// //     return functionDefinitions[key] ? key : 'sin';
// //   }, [functionType]);

// //   const isInvalidProp = resolvedType !== (typeof functionType === 'string' ? functionType.toLowerCase().trim() : '');

// //   const asymptotePositions = useMemo(() => {
// //     if (resolvedType === 'tan' || resolvedType === 'sec') {
// //       return Array.from({ length: 7 }, (_, i) => Math.PI/2 + (i-3) * Math.PI);
// //     } else if (resolvedType === 'cot' || resolvedType === 'csc') {
// //       return Array.from({ length: 5 }, (_, i) => (i-2) * Math.PI);
// //     }
// //     return [];
// //   }, [resolvedType]);

// //   const graphData = useMemo(() => {
// //     const data = [];
// //     const step = 0.02;
// //     const func = functionDefinitions[resolvedType];

// //     if (typeof func !== 'function') {
// //       return data;
// //     }

// //     for (let x = zoomDomain[0]; x <= zoomDomain[1]; x += step) {
// //       const y = func(x);
// //       data.push({
// //         x: x,
// //         xLabel: x.toFixed(2),
// //         y: y,
// //         angle: x * (180 / Math.PI), // for tooltip
// //         isCurrentPoint: Math.abs(x - currentAngle) < 0.05
// //       });
// //     }
// //     return data;
// //   }, [resolvedType, zoomDomain, currentAngle]);

// //   const customTooltip = ({ active, payload, label }) => {
// //     if (!active || !payload || !payload.length) return null;
    
// //     const data = payload[0].payload;
// //     const xVal = parseFloat(label);
// //     const yVal = data.y;
    
// //     return (
// //       <div style={{
// //         backgroundColor: 'white',
// //         border: '2px solid #1d6bd8',
// //         borderRadius: '8px',
// //         padding: '12px',
// //         boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
// //         fontSize: '14px'
// //       }}>
// //         <div style={{ fontWeight: 'bold', color: '#1d6bd8', marginBottom: '4px' }}>
// //           {resolvedType}({xVal.toFixed(3)})
// //         </div>
// //         <div>Value: <strong>{yVal?.toFixed(4) || 'undefined'}</strong></div>
// //         <div>Angle: <strong>{data.angle.toFixed(1)}&deg;</strong></div>
// //         <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
// //           Radians: {xVal.toFixed(3)}
// //         </div>
// //       </div>
// //     );
// //   };

// //   const formatXTick = (value) => {
// //     const piMultiple = value / Math.PI;
// //     if (Math.abs(piMultiple) < 0.1) return '0';
// //     if (Math.abs(piMultiple - 1) < 0.1) return 'π';
// //     if (Math.abs(piMultiple + 1) < 0.1) return '-π';
// //     if (Math.abs(piMultiple - 0.5) < 0.1) return 'π/2';
// //     if (Math.abs(piMultiple + 0.5) < 0.1) return '-π/2';
// //     if (Math.abs(piMultiple - 2) < 0.1) return '2π';
// //     if (Math.abs(piMultiple + 2) < 0.1) return '-2π';
// //     return (piMultiple).toFixed(1) + 'π';
// //   };

// //   const zoomIn = () => {
// //     const range = zoomDomain[1] - zoomDomain[0];
// //     const center = (zoomDomain[0] + zoomDomain[1]) / 2;
// //     const newRange = range * 0.7;
// //     setZoomDomain([center - newRange/2, center + newRange/2]);
// //   };

// //   const zoomOut = () => {
// //     const range = zoomDomain[1] - zoomDomain[0];
// //     const center = (zoomDomain[0] + zoomDomain[1]) / 2;
// //     const newRange = Math.min(range * 1.4, 8 * Math.PI);
// //     setZoomDomain([center - newRange/2, center + newRange/2]);
// //   };

// //   const resetZoom = () => {
// //     setZoomDomain([-2 * Math.PI, 2 * Math.PI]);
// //     setRangeDomain([-4, 4]);
// //   };

// //   return (
// //     <div style={{
// //       marginTop: '24px',
// //       padding: '20px',
// //       backgroundColor: '#f8f9fa',
// //       borderRadius: '6px',
// //       border: '1px solid #ddd'
// //     }}>
// //       {isInvalidProp && (
// //         <div style={{
// //           padding: '8px 12px',
// //           marginBottom: '12px',
// //           backgroundColor: '#fff3cd',
// //           border: '1px solid #ffc107',
// //           borderRadius: '4px',
// //           fontSize: '12px',
// //           color: '#856404'
// //         }}>
// //           Invalid or missing functionType prop ({String(functionType)}). Falling back to &quot;sin&quot;.
// //           Valid values: sin, cos, tan, csc, sec, cot.
// //         </div>
// //       )}

// //       {/* Header with controls */}
// //       <div style={{
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         marginBottom: '16px'
// //       }}>
// //         <h4 style={{ margin: 0, color: '#1d6bd8' }}>
// //           Interactive Graph: {resolvedType}(x) = {currentValue?.toFixed(4) || 'undefined'}
// //         </h4>
// //         <div style={{ display: 'flex', gap: '8px' }}>
// //           <button onClick={zoomIn} style={{
// //             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
// //             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
// //           }}>
// //             Zoom In
// //           </button>
// //           <button onClick={zoomOut} style={{
// //             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
// //             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
// //           }}>
// //             Zoom Out
// //           </button>
// //           <button onClick={resetZoom} style={{
// //             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
// //             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
// //           }}>
// //             Reset
// //           </button>
// //         </div>
// //       </div>

// //       {/* Legend */}
// //       <div style={{
// //         fontSize: '12px',
// //         color: '#666',
// //         marginBottom: '12px',
// //         display: 'flex',
// //         gap: '16px',
// //         flexWrap: 'wrap'
// //       }}>
// //         <span style={{ color: '#1d6bd8' }}>● Function curve</span>
// //         <span style={{ color: '#ff4757' }}>● Current point ({currentAngle.toFixed(3)} rad)</span>
// //         {asymptotePositions.length > 0 && (
// //           <span style={{ color: '#ff6b6b' }}>┊ Asymptotes</span>
// //         )}
// //         <span style={{ color: '#666' }}>💡 Hover for details, scroll to zoom</span>
// //       </div>

// //       {/* Graph */}
// //       <div style={{ height: '400px', width: '100%' }}>
// //         <ResponsiveContainer width="100%" height="100%">
// //           <LineChart data={graphData}>
// //             <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
// //             <XAxis 
// //               dataKey="x" 
// //               type="number" 
// //               scale="linear"
// //               domain={zoomDomain}
// //               tickFormatter={formatXTick}
// //               stroke="#666"
// //             />
// //             <YAxis 
// //               domain={rangeDomain}
// //               stroke="#666"
// //             />
// //             <Tooltip content={customTooltip} />
            
// //             {/* Asymptotes as reference lines */}
// //             {asymptotePositions.map((pos, idx) => (
// //               pos >= zoomDomain[0] && pos <= zoomDomain[1] && (
// //                 <ReferenceLine 
// //                   key={idx} 
// //                   x={pos} 
// //                   stroke="#ff6b6b" 
// //                   strokeDasharray="5 5"
// //                   strokeWidth={2}
// //                 />
// //               )
// //             ))}
            
// //             {/* Current angle reference line */}
// //             <ReferenceLine 
// //               x={currentAngle} 
// //               stroke="#ff4757" 
// //               strokeWidth={2}
// //               strokeDasharray="8 4"
// //             />
            
// //             {/* Function line */}
// //             <Line 
// //               type="linear" 
// //               dataKey="y" 
// //               stroke="#1d6bd8" 
// //               strokeWidth={3}
// //               dot={false}
// //               connectNulls={false}
// //             />
            
// //             {/* Highlight current point */}
// //             <Line 
// //               type="linear"
// //               dataKey={(entry) => entry.isCurrentPoint ? entry.y : null}
// //               stroke="#ff4757"
// //               strokeWidth={0}
// //               dot={{ fill: '#ff4757', strokeWidth: 2, r: 6 }}
// //             />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </div>

// //       <div style={{
// //         marginTop: '12px',
// //         fontSize: '12px',
// //         color: '#666',
// //         textAlign: 'center'
// //       }}>
// //         Current domain: [{formatXTick(zoomDomain[0])} to {formatXTick(zoomDomain[1])}]
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrigGraph;



// import React, { useMemo, useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Label } from 'recharts';


// const functionDefinitions = {
//   sin: (x) => Math.sin(x),
//   cos: (x) => Math.cos(x),
//   tan: (x) => {
//     const val = Math.tan(x);
//     return Math.abs(val) > 10 ? null : val;
//   },
//   csc: (x) => {
//     const sinVal = Math.sin(x);
//     if (Math.abs(sinVal) < 0.05) return null;
//     const val = 1 / sinVal;
//     return Math.abs(val) > 10 ? null : val;
//   },
//   sec: (x) => {
//     const cosVal = Math.cos(x);
//     if (Math.abs(cosVal) < 0.05) return null;
//     const val = 1 / cosVal;
//     return Math.abs(val) > 10 ? null : val;
//   },
//   cot: (x) => {
//     const sinVal = Math.sin(x);
//     if (Math.abs(sinVal) < 0.05) return null;
//     const val = Math.cos(x) / sinVal;
//     return Math.abs(val) > 10 ? null : val;
//   }
// };

// const defaultYDomainFor = (type) => {
//   if (type === 'sin' || type === 'cos') return [-1.5, 1.5];
//   return [-4, 4];
// };

// const defaultYRefsFor = (type) => {
//   if (type === 'sin' || type === 'cos') return [-1, 1];
//   return [-1, 1];
// };


// const TrigGraph = ({
//   functionType,
//   currentValue,
//   currentAngle = Math.PI / 2,
//   showAxes = true,
//   showYReferenceLines = true,
//   yDomain,
//   xTickStep = Math.PI / 2,
//   height = 400,
//   xUnit = 'rad',          // 'rad' | 'deg' — display unit only; data stays in radians
//   xAxisLabel,             // optional override; default depends on xUnit
//   yAxisLabel = 'y',
// }) => {

//   const resolvedType = useMemo(() => {
//     const key = typeof functionType === 'string' ? functionType.toLowerCase().trim() : '';
//     return functionDefinitions[key] ? key : 'sin';
//   }, [functionType]);

//   const isInvalidProp = typeof functionType === 'string'
//     ? !functionDefinitions[functionType.toLowerCase().trim()]
//     : true;

//   const initialYDomain = yDomain || defaultYDomainFor(resolvedType);

//   const [zoomDomain, setZoomDomain] = useState([-2 * Math.PI, 2 * Math.PI]);
//   const [rangeDomain, setRangeDomain] = useState(initialYDomain);

//   const xTicks = useMemo(() => {
//     const ticks = [];
//     const start = Math.ceil(zoomDomain[0] / xTickStep) * xTickStep;
//     for (let v = start; v <= zoomDomain[1]; v += xTickStep) {
//       ticks.push(Number(v.toFixed(6)));
//     }
//     return ticks;
//   }, [zoomDomain, xTickStep]);

//   const asymptotePositions = useMemo(() => {
//     let baseStep, baseOffset;
//     if (resolvedType === 'tan' || resolvedType === 'sec') {
//       baseStep = Math.PI;
//       baseOffset = Math.PI / 2;
//     } else if (resolvedType === 'cot' || resolvedType === 'csc') {
//       baseStep = Math.PI;
//       baseOffset = 0;
//     } else {
//       return [];
//     }

//     const positions = [];
//     const startK = Math.ceil((zoomDomain[0] - baseOffset) / baseStep);
//     const endK = Math.floor((zoomDomain[1] - baseOffset) / baseStep);
//     for (let k = startK; k <= endK; k++) {
//       positions.push(baseOffset + k * baseStep);
//     }
//     return positions;
//   }, [resolvedType, zoomDomain]);

//   const graphData = useMemo(() => {
//     const data = [];
//     const step = 0.02;
//     const func = functionDefinitions[resolvedType];

//     if (typeof func !== 'function') return data;

//     for (let x = zoomDomain[0]; x <= zoomDomain[1]; x += step) {
//       const y = func(x);
//       data.push({
//         x: x,
//         xLabel: x.toFixed(2),
//         y: y,
//         angle: x * (180 / Math.PI),
//       });
//     }
//     return data;
//   }, [resolvedType, zoomDomain]);

//   const currentPointValue = useMemo(() => {
//     const func = functionDefinitions[resolvedType];
//     return typeof func === 'function' ? func(currentAngle) : null;
//   }, [resolvedType, currentAngle]);

//   const customTooltip = ({ active, payload, label }) => {
//     if (!active || !payload || !payload.length) return null;
//     const data = payload[0].payload;
//     const xVal = parseFloat(label);
//     const yVal = data.y;
//     const xPrimary = xUnit === 'deg' ? `${data.angle.toFixed(1)}&deg;` : xVal.toFixed(3);
//     const xSecondary = xUnit === 'deg'
//       ? `Radians: ${xVal.toFixed(3)}`
//       : `Degrees: ${data.angle.toFixed(1)}\u00B0`;

//     return (
//       <div style={{
//         backgroundColor: 'white',
//         border: '2px solid #1d6bd8',
//         borderRadius: '8px',
//         padding: '12px',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//         fontSize: '14px'
//       }}>
//         <div style={{ fontWeight: 'bold', color: '#1d6bd8', marginBottom: '4px' }}>
//           {resolvedType}({xUnit === 'deg' ? data.angle.toFixed(1) + '\u00B0' : xVal.toFixed(3)})
//         </div>
//         <div>Value: <strong>{yVal != null ? yVal.toFixed(4) : 'undefined'}</strong></div>
//         <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
//           {xSecondary}
//         </div>
//       </div>
//     );
//   };

//   const formatRadianTick = (value) => {
//     const piMultiple = value / Math.PI;
//     if (Math.abs(piMultiple) < 0.01) return '0';
//     const denominators = [1, 2, 3, 4, 6];
//     for (const d of denominators) {
//       const numerator = piMultiple * d;
//       if (Math.abs(numerator - Math.round(numerator)) < 0.01) {
//         const n = Math.round(numerator);
//         if (n === 0) return '0';
//         const sign = n < 0 ? '-' : '';
//         const absN = Math.abs(n);
//         const num = absN === 1 ? '' : absN;
//         if (d === 1) return `${sign}${num}\u03C0`;
//         return `${sign}${num}\u03C0/${d}`;
//       }
//     }
//     return piMultiple.toFixed(2) + '\u03C0';
//   };

//   const formatDegreeTick = (value) => {
//     const deg = value * (180 / Math.PI);
//     if (Math.abs(deg) < 0.5) return '0\u00B0';
//     return `${Math.round(deg)}\u00B0`;
//   };

//   const formatXTick = xUnit === 'deg' ? formatDegreeTick : formatRadianTick;

//   const resolvedXAxisLabel = xAxisLabel || (xUnit === 'deg' ? 'x (degrees)' : 'x (radians)');

//   const zoomIn = () => {
//     const range = zoomDomain[1] - zoomDomain[0];
//     const center = (zoomDomain[0] + zoomDomain[1]) / 2;
//     const newRange = range * 0.7;
//     setZoomDomain([center - newRange / 2, center + newRange / 2]);
//   };

//   const zoomOut = () => {
//     const range = zoomDomain[1] - zoomDomain[0];
//     const center = (zoomDomain[0] + zoomDomain[1]) / 2;
//     const newRange = Math.min(range * 1.4, 8 * Math.PI);
//     setZoomDomain([center - newRange / 2, center + newRange / 2]);
//   };

//   const resetZoom = () => {
//     setZoomDomain([-2 * Math.PI, 2 * Math.PI]);
//     setRangeDomain(initialYDomain);
//   };

//   const yRefs = showYReferenceLines ? defaultYRefsFor(resolvedType) : [];

//   const headerAngleDisplay = xUnit === 'deg'
//     ? `${(currentAngle * 180 / Math.PI).toFixed(1)}\u00B0`
//     : currentAngle.toFixed(3);

//   return (
//     <div style={{
//       marginTop: '24px',
//       padding: '20px',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '6px',
//       border: '1px solid #ddd'
//     }}>
//       {isInvalidProp && (
//         <div style={{
//           padding: '8px 12px',
//           marginBottom: '12px',
//           backgroundColor: '#fff3cd',
//           border: '1px solid #ffc107',
//           borderRadius: '4px',
//           fontSize: '12px',
//           color: '#856404'
//         }}>
//           Invalid or missing functionType prop ({String(functionType)}). Falling back to &quot;sin&quot;.
//           Valid values: sin, cos, tan, csc, sec, cot.
//         </div>
//       )}

//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '16px'
//       }}>
//         <h4 style={{ margin: 0, color: '#1d6bd8' }}>
//           Interactive Graph: {resolvedType}({headerAngleDisplay}) = {currentPointValue != null ? currentPointValue.toFixed(4) : 'undefined'}
//         </h4>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <button onClick={zoomIn} style={{
//             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
//             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
//           }}>Zoom In</button>
//           <button onClick={zoomOut} style={{
//             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
//             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
//           }}>Zoom Out</button>
//           <button onClick={resetZoom} style={{
//             padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
//             border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
//           }}>Reset</button>
//         </div>
//       </div>

//       <div style={{
//         fontSize: '12px',
//         color: '#666',
//         marginBottom: '12px',
//         display: 'flex',
//         gap: '16px',
//         flexWrap: 'wrap'
//       }}>
//         <span style={{ color: '#1d6bd8' }}>● Function curve</span>
//         <span style={{ color: '#ff4757' }}>● Current point ({headerAngleDisplay})</span>
//         {asymptotePositions.length > 0 && (
//           <span style={{ color: '#ff6b6b' }}>┊ Asymptotes</span>
//         )}
//         {showYReferenceLines && yRefs.length > 0 && (
//           <span style={{ color: '#94a3b8' }}>--- y = {yRefs.join(', ')}</span>
//         )}
//       </div>

//       <div style={{ height: `${height}px`, width: '100%' }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={graphData} margin={{ top: 10, right: 30, bottom: 30, left: 20 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//             <XAxis
//               dataKey="x"
//               type="number"
//               scale="linear"
//               domain={zoomDomain}
//               ticks={xTicks}
//               tickFormatter={formatXTick}
//               stroke="#999"
//               strokeWidth={1}
//               allowDataOverflow={true}
//             >
//               <Label value={resolvedXAxisLabel} position="insideBottom" offset={-15} style={{ fontSize: 13, fill: '#444' }} />
//             </XAxis>
//             <YAxis
//               domain={rangeDomain}
//               stroke="#999"
//               strokeWidth={1}
//               allowDataOverflow={true}
//             >
//               <Label value={yAxisLabel} angle={-90} position="insideLeft" offset={10} style={{ fontSize: 13, fill: '#444', textAnchor: 'middle' }} />
//             </YAxis>
//             <Tooltip content={customTooltip} />

//             {showAxes && (
//               <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
//             )}
//             {showAxes && (
//               <ReferenceLine x={0} stroke="#333" strokeWidth={1} />
//             )}

//             {yRefs.map((y, idx) => (
//               <ReferenceLine
//                 key={`yref-${idx}`}
//                 y={y}
//                 stroke="#94a3b8"
//                 strokeDasharray="4 4"
//                 strokeWidth={1}
//               />
//             ))}

//             {asymptotePositions.map((pos, idx) => (
//               <ReferenceLine
//                 key={`asy-${idx}`}
//                 x={pos}
//                 stroke="#ff6b6b"
//                 strokeDasharray="5 5"
//                 strokeWidth={1.5}
//               />
//             ))}

//             <ReferenceLine
//               x={currentAngle}
//               stroke="#ff4757"
//               strokeWidth={1.5}
//               strokeDasharray="6 4"
//             />

//             <Line
//               type="monotone"
//               dataKey="y"
//               stroke="#1d6bd8"
//               strokeWidth={1.5}
//               dot={false}
//               connectNulls={false}
//               isAnimationActive={false}
//             />

//             {currentPointValue != null && (
//               <ReferenceDot
//                 x={currentAngle}
//                 y={currentPointValue}
//                 r={5}
//                 fill="#ff4757"
//                 stroke="white"
//                 strokeWidth={2}
//               />
//             )}
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       <div style={{
//         marginTop: '12px',
//         fontSize: '12px',
//         color: '#666',
//         textAlign: 'center'
//       }}>
//         Domain: [{formatXTick(zoomDomain[0])}, {formatXTick(zoomDomain[1])}] &nbsp;|&nbsp;
//         Range: [{rangeDomain[0]}, {rangeDomain[1]}]
//       </div>
//     </div>
//   );
// };

// export default TrigGraph;



import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Label } from 'recharts';


const functionDefinitions = {
  sin: (x) => Math.sin(x),
  cos: (x) => Math.cos(x),
  tan: (x) => {
    const val = Math.tan(x);
    return Math.abs(val) > 20 ? null : val;
  },
  csc: (x) => {
    const sinVal = Math.sin(x);
    if (Math.abs(sinVal) < 0.02) return null;
    const val = 1 / sinVal;
    return Math.abs(val) > 20 ? null : val;
  },
  sec: (x) => {
    const cosVal = Math.cos(x);
    if (Math.abs(cosVal) < 0.02) return null;
    const val = 1 / cosVal;
    return Math.abs(val) > 20 ? null : val;
  },
  cot: (x) => {
    const sinVal = Math.sin(x);
    if (Math.abs(sinVal) < 0.02) return null;
    const val = Math.cos(x) / sinVal;
    return Math.abs(val) > 20 ? null : val;
  }
};

const defaultYDomainFor = (type) => {
  if (type === 'sin' || type === 'cos') return [-1.5, 1.5];
  if (type === 'tan' || type === 'cot') return [-6, 6];
  if (type === 'csc' || type === 'sec') return [-6, 6];
  return [-4, 4];
};

const defaultYRefsFor = (type) => {
  return [-1, 1];
};


const TrigGraph = ({
  functionType,
  currentValue,
  currentAngle = Math.PI / 2,
  showAxes = true,
  showYReferenceLines = true,
  yDomain,
  xTickStep = Math.PI / 2,
  height = 400,
  xUnit = 'rad',
  xAxisLabel,
  yAxisLabel = 'y',
  enablePan = true,
  enableWheelZoom = true,
}) => {

  const resolvedType = useMemo(() => {
    const key = typeof functionType === 'string' ? functionType.toLowerCase().trim() : '';
    return functionDefinitions[key] ? key : 'sin';
  }, [functionType]);

  const isInvalidProp = typeof functionType === 'string'
    ? !functionDefinitions[functionType.toLowerCase().trim()]
    : true;

  const initialYDomain = useMemo(
    () => yDomain || defaultYDomainFor(resolvedType),
    [yDomain, resolvedType]
  );

  const [zoomDomain, setZoomDomain] = useState([-2 * Math.PI, 2 * Math.PI]);
  const [rangeDomain, setRangeDomain] = useState(initialYDomain);

  // When function changes, reset y-range to its smart default
  useEffect(() => {
    setRangeDomain(initialYDomain);
  }, [resolvedType, initialYDomain]);

  const xTicks = useMemo(() => {
    const ticks = [];
    const start = Math.ceil(zoomDomain[0] / xTickStep) * xTickStep;
    for (let v = start; v <= zoomDomain[1]; v += xTickStep) {
      ticks.push(Number(v.toFixed(6)));
    }
    return ticks;
  }, [zoomDomain, xTickStep]);

  const asymptotePositions = useMemo(() => {
    let baseStep, baseOffset;
    if (resolvedType === 'tan' || resolvedType === 'sec') {
      baseStep = Math.PI;
      baseOffset = Math.PI / 2;
    } else if (resolvedType === 'cot' || resolvedType === 'csc') {
      baseStep = Math.PI;
      baseOffset = 0;
    } else {
      return [];
    }

    const positions = [];
    const startK = Math.ceil((zoomDomain[0] - baseOffset) / baseStep);
    const endK = Math.floor((zoomDomain[1] - baseOffset) / baseStep);
    for (let k = startK; k <= endK; k++) {
      positions.push(baseOffset + k * baseStep);
    }
    return positions;
  }, [resolvedType, zoomDomain]);

  const graphData = useMemo(() => {
    const data = [];
    const span = zoomDomain[1] - zoomDomain[0];
    const step = span / 1000;
    const func = functionDefinitions[resolvedType];

    if (typeof func !== 'function') return data;

    for (let x = zoomDomain[0]; x <= zoomDomain[1]; x += step) {
      const y = func(x);
      data.push({
        x: x,
        xLabel: x.toFixed(2),
        y: y,
        angle: x * (180 / Math.PI),
      });
    }
    return data;
  }, [resolvedType, zoomDomain]);

  const currentPointValue = useMemo(() => {
    const func = functionDefinitions[resolvedType];
    return typeof func === 'function' ? func(currentAngle) : null;
  }, [resolvedType, currentAngle]);

  const customTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    const data = payload[0].payload;
    const xVal = parseFloat(label);
    const yVal = data.y;
    const xSecondary = xUnit === 'deg'
      ? `Radians: ${xVal.toFixed(3)}`
      : `Degrees: ${data.angle.toFixed(1)}\u00B0`;

    return (
      <div style={{
        backgroundColor: 'white',
        border: '2px solid #1d6bd8',
        borderRadius: '8px',
        padding: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontSize: '14px'
      }}>
        <div style={{ fontWeight: 'bold', color: '#1d6bd8', marginBottom: '4px' }}>
          {resolvedType}({xUnit === 'deg' ? data.angle.toFixed(1) + '\u00B0' : xVal.toFixed(3)})
        </div>
        <div>Value: <strong>{yVal != null ? yVal.toFixed(4) : 'undefined'}</strong></div>
        <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
          {xSecondary}
        </div>
      </div>
    );
  };

  const formatRadianTick = (value) => {
    const piMultiple = value / Math.PI;
    if (Math.abs(piMultiple) < 0.01) return '0';
    const denominators = [1, 2, 3, 4, 6];
    for (const d of denominators) {
      const numerator = piMultiple * d;
      if (Math.abs(numerator - Math.round(numerator)) < 0.01) {
        const n = Math.round(numerator);
        if (n === 0) return '0';
        const sign = n < 0 ? '-' : '';
        const absN = Math.abs(n);
        const num = absN === 1 ? '' : absN;
        if (d === 1) return `${sign}${num}\u03C0`;
        return `${sign}${num}\u03C0/${d}`;
      }
    }
    return piMultiple.toFixed(2) + '\u03C0';
  };

  const formatDegreeTick = (value) => {
    const deg = value * (180 / Math.PI);
    if (Math.abs(deg) < 0.5) return '0\u00B0';
    return `${Math.round(deg)}\u00B0`;
  };

  const formatXTick = xUnit === 'deg' ? formatDegreeTick : formatRadianTick;

  const resolvedXAxisLabel = xAxisLabel || (xUnit === 'deg' ? 'x (degrees)' : 'x (radians)');

  // ===========================================================
  // PAN + WHEEL ZOOM
  // ===========================================================
  const containerRef = useRef(null);
  const panState = useRef({ panning: false, startX: 0, startDomain: null });

  const MAX_SPAN = 16 * Math.PI;
  const MIN_SPAN = Math.PI / 4;

  const handleMouseDown = (e) => {
    if (!enablePan) return;
    panState.current = {
      panning: true,
      startX: e.clientX,
      startDomain: zoomDomain,
    };
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = useCallback((e) => {
    if (!panState.current.panning || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const dxPx = e.clientX - panState.current.startX;
    const span = panState.current.startDomain[1] - panState.current.startDomain[0];
    const dxData = -(dxPx / rect.width) * span;
    setZoomDomain([
      panState.current.startDomain[0] + dxData,
      panState.current.startDomain[1] + dxData,
    ]);
  }, []);

  const handleMouseUp = useCallback(() => {
    if (panState.current.panning) {
      panState.current.panning = false;
      if (containerRef.current) containerRef.current.style.cursor = enablePan ? 'grab' : 'default';
    }
  }, [enablePan]);

  useEffect(() => {
    if (!enablePan) return;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [enablePan, handleMouseMove, handleMouseUp]);

  const handleWheel = (e) => {
    if (!enableWheelZoom || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const cursorRatio = (e.clientX - rect.left) / rect.width;
    const cursorData = zoomDomain[0] + cursorRatio * (zoomDomain[1] - zoomDomain[0]);
    const factor = e.deltaY > 0 ? 1.15 : 1 / 1.15;
    let newSpan = (zoomDomain[1] - zoomDomain[0]) * factor;
    newSpan = Math.max(MIN_SPAN, Math.min(MAX_SPAN, newSpan));
    const newMin = cursorData - cursorRatio * newSpan;
    const newMax = newMin + newSpan;
    setZoomDomain([newMin, newMax]);
  };

  // Attach wheel via native listener (passive: false) so preventDefault works
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !enableWheelZoom) return;
    const wheelHandler = (e) => handleWheel(e);
    el.addEventListener('wheel', wheelHandler, { passive: false });
    return () => el.removeEventListener('wheel', wheelHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableWheelZoom, zoomDomain]);

  // ===========================================================
  // BUTTONS
  // ===========================================================
  const zoomIn = () => {
    const range = zoomDomain[1] - zoomDomain[0];
    const center = (zoomDomain[0] + zoomDomain[1]) / 2;
    const newRange = Math.max(MIN_SPAN, range * 0.7);
    setZoomDomain([center - newRange / 2, center + newRange / 2]);
  };

  const zoomOut = () => {
    const range = zoomDomain[1] - zoomDomain[0];
    const center = (zoomDomain[0] + zoomDomain[1]) / 2;
    const newRange = Math.min(MAX_SPAN, range * 1.4);
    setZoomDomain([center - newRange / 2, center + newRange / 2]);
  };

  const yZoomIn = () => {
    const r = rangeDomain[1] - rangeDomain[0];
    const c = (rangeDomain[0] + rangeDomain[1]) / 2;
    const newR = Math.max(0.5, r * 0.7);
    setRangeDomain([c - newR / 2, c + newR / 2]);
  };

  const yZoomOut = () => {
    const r = rangeDomain[1] - rangeDomain[0];
    const c = (rangeDomain[0] + rangeDomain[1]) / 2;
    const newR = Math.min(40, r * 1.4);
    setRangeDomain([c - newR / 2, c + newR / 2]);
  };

  const resetZoom = () => {
    setZoomDomain([-2 * Math.PI, 2 * Math.PI]);
    setRangeDomain(initialYDomain);
  };

  const yRefs = showYReferenceLines ? defaultYRefsFor(resolvedType) : [];

  const headerAngleDisplay = xUnit === 'deg'
    ? `${(currentAngle * 180 / Math.PI).toFixed(1)}\u00B0`
    : currentAngle.toFixed(3);

  const btn = {
    padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
    border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
  };

  return (
    <div style={{
      marginTop: '24px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '6px',
      // border: '1px solid #ddd'
    }}>
      {isInvalidProp && (
        <div style={{
          padding: '8px 12px',
          marginBottom: '12px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffc107',
          borderRadius: '4px',
          fontSize: '12px',
          color: '#856404'
        }}>
          Invalid or missing functionType prop ({String(functionType)}). Falling back to &quot;sin&quot;.
          Valid values: sin, cos, tan, csc, sec, cot.
        </div>
      )}

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <h4 style={{ margin: 0, color: '#1d6bd8' }}>
          {resolvedType}({headerAngleDisplay}) = {currentPointValue != null ? currentPointValue.toFixed(4) : 'undefined'}
        </h4>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <button onClick={zoomIn} style={btn} title="Zoom in (x)">x +</button>
          <button onClick={zoomOut} style={btn} title="Zoom out (x)">x &minus;</button>
          <button onClick={yZoomIn} style={btn} title="Zoom in (y)">y +</button>
          <button onClick={yZoomOut} style={btn} title="Zoom out (y)">y &minus;</button>
          <button onClick={resetZoom} style={btn}>Reset</button>
        </div>
      </div>

      <div style={{
        fontSize: '11px',
        color: '#666',
        marginBottom: '8px',
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <span style={{ color: '#1d6bd8' }}>&#9679; curve</span>
        <span style={{ color: '#ff4757' }}>&#9679; current point</span>
        {asymptotePositions.length > 0 && (
          <span style={{ color: '#ff6b6b' }}>&#9482; asymptotes</span>
        )}
        {showYReferenceLines && yRefs.length > 0 && (
          <span style={{ color: '#94a3b8' }}>&minus;&minus;&minus; y = {yRefs.join(', ')}</span>
        )}
        {(enablePan || enableWheelZoom) && (
          <span style={{ color: '#888', marginLeft: 'auto' }}>
            {enablePan && 'drag to pan'}{enablePan && enableWheelZoom && ' \u00B7 '}{enableWheelZoom && 'wheel to zoom'}
          </span>
        )}
      </div>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        style={{
          height: `${height}px`,
          width: '100%',
          cursor: enablePan ? 'grab' : 'default',
          userSelect: 'none',
          touchAction: 'none',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData} margin={{ top: 10, right: 30, bottom: 30, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="x"
              type="number"
              scale="linear"
              domain={zoomDomain}
              ticks={xTicks}
              tickFormatter={formatXTick}
              stroke="#999"
              strokeWidth={1}
              allowDataOverflow={true}
            >
              <Label value={resolvedXAxisLabel} position="insideBottom" offset={-15} style={{ fontSize: 13, fill: '#444' }} />
            </XAxis>
            <YAxis
              domain={rangeDomain}
              stroke="#999"
              strokeWidth={1}
              allowDataOverflow={true}
            >
              <Label value={yAxisLabel} angle={-90} position="insideLeft" offset={10} style={{ fontSize: 13, fill: '#444', textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip content={customTooltip} />

            {showAxes && <ReferenceLine y={0} stroke="#333" strokeWidth={1} />}
            {showAxes && <ReferenceLine x={0} stroke="#333" strokeWidth={1} />}

            {yRefs.map((y, idx) => (
              <ReferenceLine
                key={`yref-${idx}`}
                y={y}
                stroke="#94a3b8"
                strokeDasharray="4 4"
                strokeWidth={1}
              />
            ))}

            {asymptotePositions.map((pos, idx) => (
              <ReferenceLine
                key={`asy-${idx}`}
                x={pos}
                stroke="#ff6b6b"
                strokeDasharray="5 5"
                strokeWidth={1.5}
              />
            ))}

            <ReferenceLine
              x={currentAngle}
              stroke="#ff4757"
              strokeWidth={1.5}
              strokeDasharray="6 4"
            />

            <Line
              type="monotone"
              dataKey="y"
              stroke="#1d6bd8"
              strokeWidth={1.5}
              dot={false}
              connectNulls={false}
              isAnimationActive={false}
            />

            {currentPointValue != null && (
              <ReferenceDot
                x={currentAngle}
                y={currentPointValue}
                r={5}
                fill="#ff4757"
                stroke="white"
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        marginTop: '8px',
        fontSize: '11px',
        color: '#666',
        textAlign: 'center'
      }}>
        Domain: [{formatXTick(zoomDomain[0])}, {formatXTick(zoomDomain[1])}] &nbsp;|&nbsp;
        Range: [{rangeDomain[0].toFixed(1)}, {rangeDomain[1].toFixed(1)}]
      </div>
    </div>
  );
};

export default TrigGraph;