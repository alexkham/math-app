// import { useState, useMemo } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// export function GenericDistributionVisualization({ distribution }) {
//   const [activeTab, setActiveTab] = useState('pmf');
//   const [calcTab, setCalcTab] = useState('point');
//   const [pointK, setPointK] = useState('');
//   const [cumulativeK, setCumulativeK] = useState('');
//   const [strictLessK, setStrictLessK] = useState('');
//   const [greaterEqualK, setGreaterEqualK] = useState('');
//   const [strictGreaterK, setStrictGreaterK] = useState('');
//   const [rangeA, setRangeA] = useState('');
//   const [rangeB, setRangeB] = useState('');
//   const [strictRangeA, setStrictRangeA] = useState('');
//   const [strictRangeB, setStrictRangeB] = useState('');
//   const [leftIncRangeA, setLeftIncRangeA] = useState('');
//   const [leftIncRangeB, setLeftIncRangeB] = useState('');
//   const [rightIncRangeA, setRightIncRangeA] = useState('');
//   const [rightIncRangeB, setRightIncRangeB] = useState('');
//   const [showFormulas, setShowFormulas] = useState(false);
//   const [expandedProperty, setExpandedProperty] = useState(null);

//   const calculatePointProb = () => {
//     const k = parseInt(pointK);
//     if (!isNaN(k)) {
//       return distribution.onCalculatePointProbability(k);
//     }
//     return null;
//   };

//   const calculateCumulativeProb = () => {
//     const k = parseInt(cumulativeK);
//     if (!isNaN(k)) {
//       return distribution.onCalculateCumulativeProbability(k);
//     }
//     return null;
//   };

//   const calculateStrictLessProb = () => {
//     const k = parseInt(strictLessK);
//     if (!isNaN(k)) {
//       return distribution.onCalculateStrictLessProbability(k);
//     }
//     return null;
//   };

//   const calculateGreaterEqualProb = () => {
//     const k = parseInt(greaterEqualK);
//     if (!isNaN(k)) {
//       return distribution.onCalculateGreaterEqualProbability(k);
//     }
//     return null;
//   };

//   const calculateStrictGreaterProb = () => {
//     const k = parseInt(strictGreaterK);
//     if (!isNaN(k)) {
//       return distribution.onCalculateStrictGreaterProbability(k);
//     }
//     return null;
//   };

//   const calculateRangeProb = () => {
//     const a = parseInt(rangeA);
//     const b = parseInt(rangeB);
//     if (!isNaN(a) && !isNaN(b) && a <= b) {
//       return distribution.onCalculateRangeProbability(a, b);
//     }
//     return null;
//   };

//   const calculateStrictRangeProb = () => {
//     const a = parseInt(strictRangeA);
//     const b = parseInt(strictRangeB);
//     if (!isNaN(a) && !isNaN(b) && a < b) {
//       return distribution.onCalculateStrictRangeProbability(a, b);
//     }
//     return null;
//   };

//   const calculateLeftIncRangeProb = () => {
//     const a = parseInt(leftIncRangeA);
//     const b = parseInt(leftIncRangeB);
//     if (!isNaN(a) && !isNaN(b) && a < b) {
//       return distribution.onCalculateLeftIncRangeProbability(a, b);
//     }
//     return null;
//   };

//   const calculateRightIncRangeProb = () => {
//     const a = parseInt(rightIncRangeA);
//     const b = parseInt(rightIncRangeB);
//     if (!isNaN(a) && !isNaN(b) && a < b) {
//       return distribution.onCalculateRightIncRangeProbability(a, b);
//     }
//     return null;
//   };

//   return (
//     <div style={{
//       padding: '20px',
//       maxWidth: '1800px',
//       margin: '0 auto',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       height: '100vh',
//       display: 'flex',
//       flexDirection: 'column'
//     }}>
//       <h1 style={{
//         textAlign: 'center',
//         color: '#2c3e50',
//         marginBottom: '5px',
//         fontSize: '28px',
//         margin: '0 0 5px 0'
//       }}>{distribution.title}</h1>
//       <p style={{
//         textAlign: 'center',
//         color: '#7f8c8d',
//         marginBottom: '15px',
//         fontStyle: 'italic',
//         fontSize: '14px',
//         margin: '0 0 15px 0'
//       }}>{distribution.description}</p>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: '315px 1fr 315px',
//         gap: '15px',
//         flex: 1,
//         overflow: 'hidden'
//       }}>
//         {/* LEFT COLUMN - Parameters and Statistics */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'auto' }}>
//           <div style={{
//             background: 'white',
//             borderRadius: '8px',
//             padding: '15px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//           }}>
//             <h3 style={{
//               fontSize: '16px',
//               fontWeight: '700',
//               color: '#2c3e50',
//               marginBottom: '12px',
//               paddingBottom: '8px',
//               borderBottom: '2px solid #f0f0f0',
//               margin: '0 0 12px 0'
//             }}>Parameters</h3>
//             <div style={{
//               background: '#f8f9fa',
//               padding: '15px',
//               borderRadius: '8px'
//             }}>
//               {distribution.controls}
//             </div>
//             {distribution.parameters && distribution.parameters.length > 0 && (
//               <div style={{ display: 'grid', gap: '12px', marginTop: '15px' }}>
//                 {distribution.parameters.map((param, idx) => (
//                   <div key={idx} style={{
//                     padding: '10px',
//                     background: '#f8f9fa',
//                     borderRadius: '6px',
//                     borderLeft: '4px solid #677ae4'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       marginBottom: '4px'
//                     }}>
//                       <div>
//                         <span style={{ fontWeight: '600', color: '#2c3e50', fontSize: '13px' }}>{param.name}</span>
//                         {param.symbol && <span style={{ color: '#677ae4', fontStyle: 'italic', fontSize: '12px' }}> ({param.symbol})</span>}
//                       </div>
//                       <span style={{ fontWeight: '700', color: '#677ae4', fontSize: '14px' }}>{param.value}</span>
//                     </div>
//                     <p style={{ fontSize: '11px', color: '#7f8c8d', margin: 0 }}>{param.explanation}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div style={{
//             background: 'white',
//             borderRadius: '8px',
//             padding: '15px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//           }}>
//             <h3 style={{
//               fontSize: '16px',
//               fontWeight: '700',
//               color: '#2c3e50',
//               marginBottom: '12px',
//               paddingBottom: '8px',
//               borderBottom: '2px solid #f0f0f0',
//               margin: '0 0 12px 0'
//             }}>Statistics</h3>
//             <div style={{ textAlign: 'center', marginBottom: '12px' }}>
//               <button onClick={() => setShowFormulas(!showFormulas)} style={{
//                 background: '#677ae4',
//                 color: 'white',
//                 border: 'none',
//                 padding: '6px 12px',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontSize: '11px',
//                 fontWeight: '600'
//               }}>
//                 {showFormulas ? 'Hide Formulas' : 'Show Formulas'}
//               </button>
//             </div>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '10px'
//             }}>
//               <div style={{
//                 padding: '12px',
//                 background: '#f8f9fa',
//                 borderRadius: '6px',
//                 textAlign: 'center'
//               }}>
//                 <div style={{
//                   fontSize: '10px',
//                   color: '#7f8c8d',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.5px',
//                   marginBottom: '4px'
//                 }}>Expected Value</div>
//                 <div style={{
//                   fontSize: '20px',
//                   fontWeight: '700',
//                   color: '#677ae4',
//                   marginBottom: '4px'
//                 }}>{distribution.statistics.mean.toFixed(4)}</div>
//                 {showFormulas && <div style={{
//                   fontSize: '9px',
//                   color: '#95a5a6',
//                   fontFamily: '"Courier New", monospace',
//                   marginTop: '4px'
//                 }}>{distribution.statistics.meanFormula}</div>}
//               </div>
//               <div style={{
//                 padding: '12px',
//                 background: '#f8f9fa',
//                 borderRadius: '6px',
//                 textAlign: 'center'
//               }}>
//                 <div style={{
//                   fontSize: '10px',
//                   color: '#7f8c8d',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.5px',
//                   marginBottom: '4px'
//                 }}>Variance</div>
//                 <div style={{
//                   fontSize: '20px',
//                   fontWeight: '700',
//                   color: '#677ae4',
//                   marginBottom: '4px'
//                 }}>{distribution.statistics.variance.toFixed(4)}</div>
//                 {showFormulas && <div style={{
//                   fontSize: '9px',
//                   color: '#95a5a6',
//                   fontFamily: '"Courier New", monospace',
//                   marginTop: '4px'
//                 }}>{distribution.statistics.varianceFormula}</div>}
//               </div>
//               <div style={{
//                 padding: '12px',
//                 background: '#f8f9fa',
//                 borderRadius: '6px',
//                 textAlign: 'center'
//               }}>
//                 <div style={{
//                   fontSize: '10px',
//                   color: '#7f8c8d',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.5px',
//                   marginBottom: '4px'
//                 }}>Std Deviation</div>
//                 <div style={{
//                   fontSize: '20px',
//                   fontWeight: '700',
//                   color: '#677ae4',
//                   marginBottom: '4px'
//                 }}>{distribution.statistics.stdDev.toFixed(4)}</div>
//                 {showFormulas && <div style={{
//                   fontSize: '9px',
//                   color: '#95a5a6',
//                   fontFamily: '"Courier New", monospace',
//                   marginTop: '4px'
//                 }}>{distribution.statistics.stdDevFormula}</div>}
//               </div>
//               <div style={{
//                 padding: '12px',
//                 background: '#f8f9fa',
//                 borderRadius: '6px',
//                 textAlign: 'center'
//               }}>
//                 <div style={{
//                   fontSize: '10px',
//                   color: '#7f8c8d',
//                   textTransform: 'uppercase',
//                   letterSpacing: '0.5px',
//                   marginBottom: '4px'
//                 }}>Mode</div>
//                 <div style={{
//                   fontSize: '20px',
//                   fontWeight: '700',
//                   color: '#677ae4',
//                   marginBottom: '4px'
//                 }}>{distribution.statistics.mode}</div>
//                 {showFormulas && <div style={{
//                   fontSize: '9px',
//                   color: '#95a5a6',
//                   fontFamily: '"Courier New", monospace',
//                   marginTop: '4px'
//                 }}>{distribution.statistics.modeFormula}</div>}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MIDDLE COLUMN - Graphs and Calculator */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'auto' }}>
//           <div style={{
//             background: 'white',
//             borderRadius: '8px',
//             padding: '15px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//           }}>
//             <div style={{
//               display: 'flex',
//               gap: '8px',
//               marginBottom: '15px',
//               borderBottom: '2px solid #f0f0f0'
//             }}>
//               <button
//                 onClick={() => setActiveTab('pmf')}
//                 style={{
//                   padding: '10px 20px',
//                   background: 'transparent',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '13px',
//                   color: activeTab === 'pmf' ? '#677ae4' : '#7f8c8d',
//                   borderBottom: activeTab === 'pmf' ? '3px solid #677ae4' : '3px solid transparent',
//                   transition: 'all 0.3s'
//                 }}
//               >
//                 PMF
//               </button>
//               <button
//                 onClick={() => setActiveTab('cdf')}
//                 style={{
//                   padding: '10px 20px',
//                   background: 'transparent',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '13px',
//                   color: activeTab === 'cdf' ? '#677ae4' : '#7f8c8d',
//                   borderBottom: activeTab === 'cdf' ? '3px solid #677ae4' : '3px solid transparent',
//                   transition: 'all 0.3s'
//                 }}
//               >
//                 CDF
//               </button>
//               <button
//                 onClick={() => setActiveTab('table')}
//                 style={{
//                   padding: '10px 20px',
//                   background: 'transparent',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '13px',
//                   color: activeTab === 'table' ? '#677ae4' : '#7f8c8d',
//                   borderBottom: activeTab === 'table' ? '3px solid #677ae4' : '3px solid transparent',
//                   transition: 'all 0.3s'
//                 }}
//               >
//                 Table
//               </button>
//             </div>

//             {activeTab === 'pmf' && (
//               <div style={{
//                 background: '#fafbfc',
//                 padding: '15px',
//                 borderRadius: '8px'
//               }}>
//                 <ResponsiveContainer width="100%" height={350}>
//                   <BarChart data={distribution.pmfData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis 
//                       dataKey="x"
//                       type="number"
//                       domain={[distribution.pmfData[0].x - 0.5, distribution.pmfData[distribution.pmfData.length - 1].x + 0.5]}
//                       ticks={distribution.pmfData.map(d => d.x)}
//                       label={{ value: 'Value (k)', position: 'insideBottom', offset: -5 }}
//                     />
//                     <YAxis 
//                       label={{ value: 'Probability P(X = k)', angle: -90, position: 'insideLeft' }}
//                     />
//                     <Tooltip 
//                       formatter={(value) => value.toFixed(6)}
//                       labelFormatter={(label) => `k = ${label}`}
//                     />
//                     <Bar dataKey="probability" fill="#677ae4" barSize={40} />
//                     <ReferenceLine 
//                       x={distribution.statistics.mean} 
//                       stroke="#e74c3c" 
//                       strokeWidth={3}
//                       label={{ 
//                         value: `E[X]=${distribution.statistics.mean.toFixed(2)}`, 
//                         position: 'top',
//                         fill: '#e74c3c',
//                         fontSize: 11,
//                         fontWeight: 'bold',
//                         offset: 10
//                       }}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             )}

//             {activeTab === 'cdf' && (
//               <div style={{
//                 background: '#fafbfc',
//                 padding: '15px',
//                 borderRadius: '8px'
//               }}>
//                 <ResponsiveContainer width="100%" height={350}>
//                   <BarChart data={distribution.cdfData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis 
//                       dataKey="x"
//                       type="number"
//                       domain={[distribution.cdfData[0].x - 0.5, distribution.cdfData[distribution.cdfData.length - 1].x + 0.5]}
//                       ticks={distribution.cdfData.map(d => d.x)}
//                       label={{ value: 'Value (k)', position: 'insideBottom', offset: -5 }}
//                     />
//                     <YAxis 
//                       label={{ value: 'Cumulative Probability P(X ≤ k)', angle: -90, position: 'insideLeft' }}
//                       domain={[0, 1]}
//                     />
//                     <Tooltip 
//                       formatter={(value) => value.toFixed(6)}
//                       labelFormatter={(label) => `k = ${label}`}
//                     />
//                     <Bar dataKey="cumulativeProbability" fill="#677ae4" barSize={40} />
//                     <ReferenceLine 
//                       x={distribution.statistics.mean} 
//                       stroke="#e74c3c" 
//                       strokeWidth={3}
//                       label={{ 
//                         value: `E[X]=${distribution.statistics.mean.toFixed(2)}`, 
//                         position: 'top',
//                         fill: '#e74c3c',
//                         fontSize: 11,
//                         fontWeight: 'bold',
//                         offset: 10
//                       }}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             )}

//             {activeTab === 'table' && (
//               <div style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto' }}>
//                 <table style={{
//                   width: '100%',
//                   borderCollapse: 'collapse',
//                   fontSize: '12px'
//                 }}>
//                   <thead>
//                     <tr>
//                       <th style={{
//                         background: '#f8f9fa',
//                         padding: '8px',
//                         textAlign: 'center',
//                         fontWeight: '600',
//                         color: '#2c3e50',
//                         border: '1px solid #e0e0e0'
//                       }}>k</th>
//                       <th style={{
//                         background: '#f8f9fa',
//                         padding: '8px',
//                         textAlign: 'center',
//                         fontWeight: '600',
//                         color: '#2c3e50',
//                         border: '1px solid #e0e0e0'
//                       }}>P(X = k)</th>
//                       <th style={{
//                         background: '#f8f9fa',
//                         padding: '8px',
//                         textAlign: 'center',
//                         fontWeight: '600',
//                         color: '#2c3e50',
//                         border: '1px solid #e0e0e0'
//                       }}>P(X ≤ k)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {distribution.pmfData.map((row, idx) => (
//                       <tr key={idx}>
//                         <td style={{
//                           padding: '6px',
//                           textAlign: 'center',
//                           border: '1px solid #e0e0e0'
//                         }}>{row.x}</td>
//                         <td style={{
//                           padding: '6px',
//                           textAlign: 'center',
//                           border: '1px solid #e0e0e0'
//                         }}>{row.probability.toFixed(6)}</td>
//                         <td style={{
//                           padding: '6px',
//                           textAlign: 'center',
//                           border: '1px solid #e0e0e0'
//                         }}>{distribution.cdfData[idx]?.cumulativeProbability.toFixed(6)}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>

//           <div style={{
//             background: 'white',
//             borderRadius: '8px',
//             padding: '15px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//           }}>
//             <h3 style={{
//               fontSize: '16px',
//               fontWeight: '700',
//               color: '#2c3e50',
//               marginBottom: '12px',
//               paddingBottom: '8px',
//               borderBottom: '2px solid #f0f0f0',
//               margin: '0 0 12px 0'
//             }}>Probability Calculator</h3>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
//               <button
//                 onClick={() => setCalcTab('point')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'point' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'point' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(X = k)
//               </button>
//               <button
//                 onClick={() => setCalcTab('strictless')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'strictless' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'strictless' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(X &lt; k)
//               </button>
//               <button
//                 onClick={() => setCalcTab('cumulative')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'cumulative' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'cumulative' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(X ≤ k)
//               </button>
//               <button
//                 onClick={() => setCalcTab('strictgreater')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'strictgreater' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'strictgreater' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(X &gt; k)
//               </button>
//               <button
//                 onClick={() => setCalcTab('greaterequal')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'greaterequal' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'greaterequal' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(X ≥ k)
//               </button>
//               <button
//                 onClick={() => setCalcTab('range')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'range' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'range' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(a ≤ X ≤ b)
//               </button>
//               <button
//                 onClick={() => setCalcTab('strictrange')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'strictrange' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'strictrange' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(a &lt; X &lt; b)
//               </button>
//               <button
//                 onClick={() => setCalcTab('leftinc')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'leftinc' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'leftinc' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(a ≤ X &lt; b)
//               </button>
//               <button
//                 onClick={() => setCalcTab('rightinc')}
//                 style={{
//                   padding: '5px 8px',
//                   background: calcTab === 'rightinc' ? '#677ae4' : '#f0f0f0',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontWeight: '600',
//                   fontSize: '11px',
//                   borderRadius: '4px',
//                   color: calcTab === 'rightinc' ? 'white' : '#7f8c8d'
//                 }}
//               >
//                 P(a &lt; X ≤ b)
//               </button>
//             </div>

//             <div style={{
//               padding: '12px',
//               background: '#f8f9fa',
//               borderRadius: '6px'
//             }}>
//               {calcTab === 'point' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter value k:</label>
//                     <input
//                       type="number"
//                       value={pointK}
//                       onChange={(e) => setPointK(e.target.value)}
//                       placeholder="Enter k"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {pointK !== '' && calculatePointProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P(X = {pointK})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculatePointProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'strictless' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter value k:</label>
//                     <input
//                       type="number"
//                       value={strictLessK}
//                       onChange={(e) => setStrictLessK(e.target.value)}
//                       placeholder="Enter k"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {strictLessK !== '' && calculateStrictLessProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P(X &lt; {strictLessK})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateStrictLessProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'cumulative' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter value k:</label>
//                     <input
//                       type="number"
//                       value={cumulativeK}
//                       onChange={(e) => setCumulativeK(e.target.value)}
//                       placeholder="Enter k"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {cumulativeK !== '' && calculateCumulativeProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P(X ≤ {cumulativeK})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateCumulativeProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'strictgreater' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter value k:</label>
//                     <input
//                       type="number"
//                       value={strictGreaterK}
//                       onChange={(e) => setStrictGreaterK(e.target.value)}
//                       placeholder="Enter k"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {strictGreaterK !== '' && calculateStrictGreaterProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P(X &gt; {strictGreaterK})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateStrictGreaterProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'greaterequal' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter value k:</label>
//                     <input
//                       type="number"
//                       value={greaterEqualK}
//                       onChange={(e) => setGreaterEqualK(e.target.value)}
//                       placeholder="Enter k"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {greaterEqualK !== '' && calculateGreaterEqualProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P(X ≥ {greaterEqualK})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateGreaterEqualProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'range' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter lower bound a:</label>
//                     <input
//                       type="number"
//                       value={rangeA}
//                       onChange={(e) => setRangeA(e.target.value)}
//                       placeholder="Enter a"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter upper bound b:</label>
//                     <input
//                       type="number"
//                       value={rangeB}
//                       onChange={(e) => setRangeB(e.target.value)}
//                       placeholder="Enter b"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {rangeA !== '' && rangeB !== '' && calculateRangeProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P({rangeA} ≤ X ≤ {rangeB})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateRangeProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'strictrange' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter lower bound a:</label>
//                     <input
//                       type="number"
//                       value={strictRangeA}
//                       onChange={(e) => setStrictRangeA(e.target.value)}
//                       placeholder="Enter a"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter upper bound b:</label>
//                     <input
//                       type="number"
//                       value={strictRangeB}
//                       onChange={(e) => setStrictRangeB(e.target.value)}
//                       placeholder="Enter b"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {strictRangeA !== '' && strictRangeB !== '' && calculateStrictRangeProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P({strictRangeA} &lt; X &lt; {strictRangeB})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateStrictRangeProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'leftinc' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter lower bound a:</label>
//                     <input
//                       type="number"
//                       value={leftIncRangeA}
//                       onChange={(e) => setLeftIncRangeA(e.target.value)}
//                       placeholder="Enter a"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter upper bound b:</label>
//                     <input
//                       type="number"
//                       value={leftIncRangeB}
//                       onChange={(e) => setLeftIncRangeB(e.target.value)}
//                       placeholder="Enter b"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {leftIncRangeA !== '' && leftIncRangeB !== '' && calculateLeftIncRangeProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P({leftIncRangeA} ≤ X &lt; {leftIncRangeB})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateLeftIncRangeProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {calcTab === 'rightinc' && (
//                 <>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter lower bound a:</label>
//                     <input
//                       type="number"
//                       value={rightIncRangeA}
//                       onChange={(e) => setRightIncRangeA(e.target.value)}
//                       placeholder="Enter a"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   <div style={{ marginBottom: '12px' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '12px',
//                       fontWeight: '600',
//                       color: '#2c3e50',
//                       marginBottom: '4px'
//                     }}>Enter upper bound b:</label>
//                     <input
//                       type="number"
//                       value={rightIncRangeB}
//                       onChange={(e) => setRightIncRangeB(e.target.value)}
//                       placeholder="Enter b"
//                       style={{
//                         width: '100%',
//                         padding: '8px',
//                         border: '2px solid #ddd',
//                         borderRadius: '4px',
//                         fontSize: '13px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   {rightIncRangeA !== '' && rightIncRangeB !== '' && calculateRightIncRangeProb() !== null && (
//                     <div style={{
//                       marginTop: '12px',
//                       padding: '12px',
//                       background: 'white',
//                       borderRadius: '6px',
//                       borderLeft: '4px solid #677ae4'
//                     }}>
//                       <div style={{
//                         fontSize: '11px',
//                         color: '#7f8c8d',
//                         textTransform: 'uppercase',
//                         letterSpacing: '0.5px',
//                         marginBottom: '4px'
//                       }}>P({rightIncRangeA} &lt; X ≤ {rightIncRangeB})</div>
//                       <div style={{
//                         fontSize: '20px',
//                         fontWeight: '700',
//                         color: '#677ae4'
//                       }}>{calculateRightIncRangeProb().toFixed(6)}</div>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN - Key Properties and Applications */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'hidden' }}>
//           <div style={{
//             background: 'white',
//             borderRadius: '8px',
//             padding: '15px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//           }}>
//             <h3 style={{
//               fontSize: '16px',
//               fontWeight: '700',
//               color: '#2c3e50',
//               marginBottom: '12px',
//               paddingBottom: '8px',
//               borderBottom: '2px solid #f0f0f0',
//               margin: '0 0 12px 0'
//             }}>Key Properties</h3>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//               {distribution.properties.map((prop, idx) => (
//                 <div key={idx} style={{
//                   background: '#f8f9fa',
//                   borderRadius: '4px',
//                   overflow: 'hidden'
//                 }}>
//                   <button
//                     onClick={() => setExpandedProperty(expandedProperty === idx ? null : idx)}
//                     style={{
//                       width: '100%',
//                       padding: '10px',
//                       background: 'transparent',
//                       border: 'none',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       fontSize: '12px',
//                       color: '#2c3e50',
//                       fontWeight: '500',
//                       textAlign: 'left'
//                     }}
//                   >
//                     <span>{prop.title}</span>
//                     <span style={{
//                       fontSize: '14px',
//                       fontWeight: '700',
//                       color: '#677ae4',
//                       transition: 'transform 0.3s',
//                       transform: expandedProperty === idx ? 'rotate(180deg)' : 'rotate(0deg)',
//                       display: 'inline-block'
//                     }}>▼</span>
//                   </button>
//                   {expandedProperty === idx && (
//                     <div style={{
//                       padding: '10px',
//                       paddingTop: '0',
//                       fontSize: '11px',
//                       color: '#555',
//                       lineHeight: '1.6',
//                       borderTop: '1px solid #e0e0e0',
//                       marginTop: '5px',
//                       paddingTop: '10px'
//                     }}>
//                       {prop.explanation}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div style={{
//             background: 'white',
//             borderRadius: '8px',
//             padding: '15px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//           }}>
//             <h3 style={{
//               fontSize: '16px',
//               fontWeight: '700',
//               color: '#2c3e50',
//               marginBottom: '12px',
//               paddingBottom: '8px',
//               borderBottom: '2px solid #f0f0f0',
//               margin: '0 0 12px 0'
//             }}>Real-World Applications</h3>
//             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//               {distribution.examples.map((example, idx) => (
//                 <li key={idx} style={{
//                   padding: '10px',
//                   background: '#f8f9fa',
//                   borderRadius: '4px',
//                   marginBottom: idx < distribution.examples.length - 1 ? '8px' : '0',
//                   fontSize: '12px',
//                   color: '#2c3e50',
//                   borderLeft: '3px solid #677ae4',
//                   lineHeight: '1.4'
//                 }}>{example}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function GenericDistributionVisualization({ distribution }) {
  const [activeTab, setActiveTab] = useState('pmf');
  const [calcTab, setCalcTab] = useState('point');
  const [pointK, setPointK] = useState('');
  const [cumulativeK, setCumulativeK] = useState('');
  const [strictLessK, setStrictLessK] = useState('');
  const [greaterEqualK, setGreaterEqualK] = useState('');
  const [strictGreaterK, setStrictGreaterK] = useState('');
  const [rangeA, setRangeA] = useState('');
  const [rangeB, setRangeB] = useState('');
  const [strictRangeA, setStrictRangeA] = useState('');
  const [strictRangeB, setStrictRangeB] = useState('');
  const [leftIncRangeA, setLeftIncRangeA] = useState('');
  const [leftIncRangeB, setLeftIncRangeB] = useState('');
  const [rightIncRangeA, setRightIncRangeA] = useState('');
  const [rightIncRangeB, setRightIncRangeB] = useState('');
  const [showFormulas, setShowFormulas] = useState(false);
  const [expandedProperty, setExpandedProperty] = useState(null);

  const calculatePointProb = () => {
    const k = parseInt(pointK);
    if (!isNaN(k)) {
      return distribution.onCalculatePointProbability(k);
    }
    return null;
  };

  const calculateCumulativeProb = () => {
    const k = parseInt(cumulativeK);
    if (!isNaN(k)) {
      return distribution.onCalculateCumulativeProbability(k);
    }
    return null;
  };

  const calculateStrictLessProb = () => {
    const k = parseInt(strictLessK);
    if (!isNaN(k)) {
      return distribution.onCalculateStrictLessProbability(k);
    }
    return null;
  };

  const calculateGreaterEqualProb = () => {
    const k = parseInt(greaterEqualK);
    if (!isNaN(k)) {
      return distribution.onCalculateGreaterEqualProbability(k);
    }
    return null;
  };

  const calculateStrictGreaterProb = () => {
    const k = parseInt(strictGreaterK);
    if (!isNaN(k)) {
      return distribution.onCalculateStrictGreaterProbability(k);
    }
    return null;
  };

  const calculateRangeProb = () => {
    const a = parseInt(rangeA);
    const b = parseInt(rangeB);
    if (!isNaN(a) && !isNaN(b) && a <= b) {
      return distribution.onCalculateRangeProbability(a, b);
    }
    return null;
  };

  const calculateStrictRangeProb = () => {
    const a = parseInt(strictRangeA);
    const b = parseInt(strictRangeB);
    if (!isNaN(a) && !isNaN(b) && a < b) {
      return distribution.onCalculateStrictRangeProbability(a, b);
    }
    return null;
  };

  const calculateLeftIncRangeProb = () => {
    const a = parseInt(leftIncRangeA);
    const b = parseInt(leftIncRangeB);
    if (!isNaN(a) && !isNaN(b) && a < b) {
      return distribution.onCalculateLeftIncRangeProbability(a, b);
    }
    return null;
  };

  const calculateRightIncRangeProb = () => {
    const a = parseInt(rightIncRangeA);
    const b = parseInt(rightIncRangeB);
    if (!isNaN(a) && !isNaN(b) && a < b) {
      return distribution.onCalculateRightIncRangeProbability(a, b);
    }
    return null;
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1800px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '5px',
        fontSize: '28px',
        margin: '0 0 5px 0'
      }}>{distribution.title}</h1>
      <p style={{
        textAlign: 'center',
        color: '#7f8c8d',
        marginBottom: '15px',
        fontStyle: 'italic',
        fontSize: '14px',
        margin: '0 0 15px 0'
      }}>{distribution.description}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '315px 1fr 315px',
        gap: '15px',
        flex: 1,
        overflow: 'hidden'
      }}>
        {/* LEFT COLUMN - Parameters and Statistics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'auto' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Parameters</h3>
            <div style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px'
            }}>
              {distribution.controls}
            </div>
            {distribution.parameters && distribution.parameters.length > 0 && (
              <div style={{ display: 'grid', gap: '12px', marginTop: '15px' }}>
                {distribution.parameters.map((param, idx) => (
                  <div key={idx} style={{
                    padding: '10px',
                    background: '#f8f9fa',
                    borderRadius: '6px',
                    borderLeft: '4px solid #677ae4'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '4px'
                    }}>
                      <div>
                        <span style={{ fontWeight: '600', color: '#2c3e50', fontSize: '13px' }}>{param.name}</span>
                        {param.symbol && <span style={{ color: '#677ae4', fontStyle: 'italic', fontSize: '12px' }}> ({param.symbol})</span>}
                      </div>
                      <span style={{ fontWeight: '700', color: '#677ae4', fontSize: '14px' }}>{param.value}</span>
                    </div>
                    <p style={{ fontSize: '11px', color: '#7f8c8d', margin: 0 }}>{param.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Statistics</h3>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <button onClick={() => setShowFormulas(!showFormulas)} style={{
                background: '#677ae4',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '11px',
                fontWeight: '600'
              }}>
                {showFormulas ? 'Hide Formulas' : 'Show Formulas'}
              </button>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px'
            }}>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Expected Value</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{distribution.statistics.mean.toFixed(4)}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.meanFormula}</div>}
              </div>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Variance</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{distribution.statistics.variance.toFixed(4)}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.varianceFormula}</div>}
              </div>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Std Deviation</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{distribution.statistics.stdDev.toFixed(4)}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.stdDevFormula}</div>}
              </div>
              <div style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '10px',
                  color: '#7f8c8d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '4px'
                }}>Mode</div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#677ae4',
                  marginBottom: '4px'
                }}>{distribution.statistics.mode}</div>
                {showFormulas && <div style={{
                  fontSize: '9px',
                  color: '#95a5a6',
                  fontFamily: '"Courier New", monospace',
                  marginTop: '4px'
                }}>{distribution.statistics.modeFormula}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN - Graphs and Calculator */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'auto' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '15px',
              borderBottom: '2px solid #f0f0f0'
            }}>
              <button
                onClick={() => setActiveTab('pmf')}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeTab === 'pmf' ? '#677ae4' : '#7f8c8d',
                  borderBottom: activeTab === 'pmf' ? '3px solid #677ae4' : '3px solid transparent',
                  transition: 'all 0.3s'
                }}
              >
                PMF
              </button>
              <button
                onClick={() => setActiveTab('cdf')}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeTab === 'cdf' ? '#677ae4' : '#7f8c8d',
                  borderBottom: activeTab === 'cdf' ? '3px solid #677ae4' : '3px solid transparent',
                  transition: 'all 0.3s'
                }}
              >
                CDF
              </button>
              <button
                onClick={() => setActiveTab('table')}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                  color: activeTab === 'table' ? '#677ae4' : '#7f8c8d',
                  borderBottom: activeTab === 'table' ? '3px solid #677ae4' : '3px solid transparent',
                  transition: 'all 0.3s'
                }}
              >
                Table
              </button>
            </div>

            {activeTab === 'pmf' && (
              <div style={{
                background: '#fafbfc',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={distribution.pmfData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="x"
                      type="number"
                      domain={[distribution.pmfData[0].x - 0.5, distribution.pmfData[distribution.pmfData.length - 1].x + 0.5]}
                      ticks={distribution.pmfData.map(d => d.x)}
                      label={{ value: 'Value (k)', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      label={{ value: 'Probability P(X = k)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value) => value.toFixed(6)}
                      labelFormatter={(label) => `k = ${label}`}
                    />
                    <Bar dataKey="probability" fill="#677ae4" barSize={40} />
                    <ReferenceLine 
                      x={distribution.statistics.mean} 
                      stroke="#e74c3c" 
                      strokeWidth={3}
                      label={{ 
                        value: `E[X]=${distribution.statistics.mean.toFixed(2)}`, 
                        position: 'top',
                        fill: '#e74c3c',
                        fontSize: 11,
                        fontWeight: 'bold',
                        offset: 10
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeTab === 'cdf' && (
              <div style={{
                background: '#fafbfc',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={distribution.cdfData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="x"
                      type="number"
                      domain={[distribution.cdfData[0].x - 0.5, distribution.cdfData[distribution.cdfData.length - 1].x + 0.5]}
                      ticks={distribution.cdfData.map(d => d.x)}
                      label={{ value: 'Value (k)', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      label={{ value: 'Cumulative Probability P(X ≤ k)', angle: -90, position: 'insideLeft' }}
                      domain={[0, 1]}
                    />
                    <Tooltip 
                      formatter={(value) => value.toFixed(6)}
                      labelFormatter={(label) => `k = ${label}`}
                    />
                    <Bar dataKey="cumulativeProbability" fill="#677ae4" barSize={40} />
                    <ReferenceLine 
                      x={distribution.statistics.mean} 
                      stroke="#e74c3c" 
                      strokeWidth={3}
                      label={{ 
                        value: `E[X]=${distribution.statistics.mean.toFixed(2)}`, 
                        position: 'top',
                        fill: '#e74c3c',
                        fontSize: 11,
                        fontWeight: 'bold',
                        offset: 10
                      }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeTab === 'table' && (
              <div style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '12px'
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        background: '#f8f9fa',
                        padding: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#2c3e50',
                        border: '1px solid #e0e0e0'
                      }}>k</th>
                      <th style={{
                        background: '#f8f9fa',
                        padding: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#2c3e50',
                        border: '1px solid #e0e0e0'
                      }}>P(X = k)</th>
                      <th style={{
                        background: '#f8f9fa',
                        padding: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#2c3e50',
                        border: '1px solid #e0e0e0'
                      }}>P(X ≤ k)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distribution.pmfData.map((row, idx) => (
                      <tr key={idx}>
                        <td style={{
                          padding: '6px',
                          textAlign: 'center',
                          border: '1px solid #e0e0e0'
                        }}>{row.x}</td>
                        <td style={{
                          padding: '6px',
                          textAlign: 'center',
                          border: '1px solid #e0e0e0'
                        }}>{row.probability.toFixed(6)}</td>
                        <td style={{
                          padding: '6px',
                          textAlign: 'center',
                          border: '1px solid #e0e0e0'
                        }}>{distribution.cdfData[idx]?.cumulativeProbability.toFixed(6)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Probability Calculator</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
              <button
                onClick={() => setCalcTab('point')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'point' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'point' ? 'white' : '#7f8c8d'
                }}
              >
                P(X = k)
              </button>
              <button
                onClick={() => setCalcTab('strictless')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'strictless' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'strictless' ? 'white' : '#7f8c8d'
                }}
              >
                P(X &lt; k)
              </button>
              <button
                onClick={() => setCalcTab('cumulative')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'cumulative' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'cumulative' ? 'white' : '#7f8c8d'
                }}
              >
                P(X ≤ k)
              </button>
              <button
                onClick={() => setCalcTab('strictgreater')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'strictgreater' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'strictgreater' ? 'white' : '#7f8c8d'
                }}
              >
                P(X &gt; k)
              </button>
              <button
                onClick={() => setCalcTab('greaterequal')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'greaterequal' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'greaterequal' ? 'white' : '#7f8c8d'
                }}
              >
                P(X ≥ k)
              </button>
              <button
                onClick={() => setCalcTab('range')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'range' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'range' ? 'white' : '#7f8c8d'
                }}
              >
                P(a ≤ X ≤ b)
              </button>
              <button
                onClick={() => setCalcTab('strictrange')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'strictrange' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'strictrange' ? 'white' : '#7f8c8d'
                }}
              >
                P(a &lt; X &lt; b)
              </button>
              <button
                onClick={() => setCalcTab('leftinc')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'leftinc' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'leftinc' ? 'white' : '#7f8c8d'
                }}
              >
                P(a ≤ X &lt; b)
              </button>
              <button
                onClick={() => setCalcTab('rightinc')}
                style={{
                  padding: '5px 8px',
                  background: calcTab === 'rightinc' ? '#677ae4' : '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '11px',
                  borderRadius: '4px',
                  color: calcTab === 'rightinc' ? 'white' : '#7f8c8d'
                }}
              >
                P(a &lt; X ≤ b)
              </button>
            </div>

            <div style={{
              padding: '12px',
              background: '#f8f9fa',
              borderRadius: '6px'
            }}>
              {calcTab === 'point' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value k:</label>
                    <input
                      type="number"
                      value={pointK}
                      onChange={(e) => setPointK(e.target.value)}
                      placeholder="Enter k"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {pointK !== '' && calculatePointProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X = {pointK})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculatePointProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'strictless' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value k:</label>
                    <input
                      type="number"
                      value={strictLessK}
                      onChange={(e) => setStrictLessK(e.target.value)}
                      placeholder="Enter k"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {strictLessK !== '' && calculateStrictLessProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X &lt; {strictLessK})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateStrictLessProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'cumulative' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value k:</label>
                    <input
                      type="number"
                      value={cumulativeK}
                      onChange={(e) => setCumulativeK(e.target.value)}
                      placeholder="Enter k"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {cumulativeK !== '' && calculateCumulativeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X ≤ {cumulativeK})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateCumulativeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'strictgreater' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value k:</label>
                    <input
                      type="number"
                      value={strictGreaterK}
                      onChange={(e) => setStrictGreaterK(e.target.value)}
                      placeholder="Enter k"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {strictGreaterK !== '' && calculateStrictGreaterProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X &gt; {strictGreaterK})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateStrictGreaterProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'greaterequal' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter value k:</label>
                    <input
                      type="number"
                      value={greaterEqualK}
                      onChange={(e) => setGreaterEqualK(e.target.value)}
                      placeholder="Enter k"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {greaterEqualK !== '' && calculateGreaterEqualProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P(X ≥ {greaterEqualK})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateGreaterEqualProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'range' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      value={rangeA}
                      onChange={(e) => setRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      value={rangeB}
                      onChange={(e) => setRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {rangeA !== '' && rangeB !== '' && calculateRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({rangeA} ≤ X ≤ {rangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'strictrange' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      value={strictRangeA}
                      onChange={(e) => setStrictRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      value={strictRangeB}
                      onChange={(e) => setStrictRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {strictRangeA !== '' && strictRangeB !== '' && calculateStrictRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({strictRangeA} &lt; X &lt; {strictRangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateStrictRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'leftinc' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      value={leftIncRangeA}
                      onChange={(e) => setLeftIncRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      value={leftIncRangeB}
                      onChange={(e) => setLeftIncRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {leftIncRangeA !== '' && leftIncRangeB !== '' && calculateLeftIncRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({leftIncRangeA} ≤ X &lt; {leftIncRangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateLeftIncRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}

              {calcTab === 'rightinc' && (
                <>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter lower bound a:</label>
                    <input
                      type="number"
                      value={rightIncRangeA}
                      onChange={(e) => setRightIncRangeA(e.target.value)}
                      placeholder="Enter a"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '4px'
                    }}>Enter upper bound b:</label>
                    <input
                      type="number"
                      value={rightIncRangeB}
                      onChange={(e) => setRightIncRangeB(e.target.value)}
                      placeholder="Enter b"
                      style={{
                        width: '100%',
                        padding: '8px',
                        border: '2px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  {rightIncRangeA !== '' && rightIncRangeB !== '' && calculateRightIncRangeProb() !== null && (
                    <div style={{
                      marginTop: '12px',
                      padding: '12px',
                      background: 'white',
                      borderRadius: '6px',
                      borderLeft: '4px solid #677ae4'
                    }}>
                      <div style={{
                        fontSize: '11px',
                        color: '#7f8c8d',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '4px'
                      }}>P({rightIncRangeA} &lt; X ≤ {rightIncRangeB})</div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#677ae4'
                      }}>{calculateRightIncRangeProb().toFixed(6)}</div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Key Properties and Applications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'hidden' }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Key Properties</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {distribution.properties.map((prop, idx) => (
                <div key={idx} style={{
                  background: '#f8f9fa',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <button
                    onClick={() => setExpandedProperty(expandedProperty === idx ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '12px',
                      color: '#2c3e50',
                      fontWeight: '500',
                      textAlign: 'left'
                    }}
                  >
                    <span>{prop.title}</span>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#677ae4',
                      transition: 'transform 0.3s',
                      transform: expandedProperty === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'inline-block'
                    }}>▼</span>
                  </button>
                  {expandedProperty === idx && (
                    <div style={{
                      padding: '10px',
                      paddingTop: '0',
                      fontSize: '11px',
                      color: '#555',
                      lineHeight: '1.6',
                      borderTop: '1px solid #e0e0e0',
                      marginTop: '5px',
                      paddingTop: '10px'
                    }}>
                      {prop.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '2px solid #f0f0f0',
              margin: '0 0 12px 0'
            }}>Real-World Applications</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {distribution.examples.map((example, idx) => (
                <li key={idx} style={{
                  padding: '10px',
                  background: '#f8f9fa',
                  borderRadius: '4px',
                  marginBottom: idx < distribution.examples.length - 1 ? '8px' : '0',
                  fontSize: '12px',
                  color: '#2c3e50',
                  borderLeft: '3px solid #677ae4',
                  lineHeight: '1.4'
                }}>{example}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}