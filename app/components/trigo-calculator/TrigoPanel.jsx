// // // // // // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // // // // // const TrigonometricPanel = () => {
// // // // // // // // // // // // //   // Demo data - this would come from parent component
// // // // // // // // // // // // //   const [demoData] = useState({
// // // // // // // // // // // // //     sin: 0.5,
// // // // // // // // // // // // //     cos: 0.86603,
// // // // // // // // // // // // //     tan: 0.57735,
// // // // // // // // // // // // //     csc: 2.0,
// // // // // // // // // // // // //     sec: 1.1547,
// // // // // // // // // // // // //     cot: 1.73205
// // // // // // // // // // // // //   });
  
// // // // // // // // // // // // //   const [activeTab, setActiveTab] = useState('sin');

// // // // // // // // // // // // //   const functionInfo = {
// // // // // // // // // // // // //     sin: {
// // // // // // // // // // // // //       fullName: 'Sine',
// // // // // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // // // // // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // // // // // // // // //       derivative: 'cos(x)',
// // // // // // // // // // // // //       integral: '-cos(x) + C'
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     cos: {
// // // // // // // // // // // // //       fullName: 'Cosine',
// // // // // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // // // // //       maxima: '2nπ (360°n)',
// // // // // // // // // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // // // // // // // // //       derivative: '-sin(x)',
// // // // // // // // // // // // //       integral: 'sin(x) + C'
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     tan: {
// // // // // // // // // // // // //       fullName: 'Tangent',
// // // // // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // // // // // // // // //       derivative: 'sec²(x)',
// // // // // // // // // // // // //       integral: '-ln|cos(x)| + C'
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     csc: {
// // // // // // // // // // // // //       fullName: 'Cosecant',
// // // // // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // // //       zeros: 'None',
// // // // // // // // // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // // // // // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // // // // // // // // //       derivative: '-csc(x)cot(x)',
// // // // // // // // // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     sec: {
// // // // // // // // // // // // //       fullName: 'Secant',
// // // // // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // // //       zeros: 'None',
// // // // // // // // // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // // // // // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // // // // // // // // //       derivative: 'sec(x)tan(x)',
// // // // // // // // // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // // // // // // // // //     },
// // // // // // // // // // // // //     cot: {
// // // // // // // // // // // // //       fullName: 'Cotangent',
// // // // // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // // // // // // // // //       derivative: '-csc²(x)',
// // // // // // // // // // // // //       integral: 'ln|sin(x)| + C'
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const formatValue = (value) => {
// // // // // // // // // // // // //     if (value === null) return 'Undefined';
// // // // // // // // // // // // //     if (Number.isNaN(value)) return '...';
// // // // // // // // // // // // //     if (typeof value === 'number') {
// // // // // // // // // // // // //       return value === 0 ? '0' : value.toFixed(5);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     return value;
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const tabStyle = (isActive) => ({
// // // // // // // // // // // // //     padding: '12px 24px',
// // // // // // // // // // // // //     cursor: 'pointer',
// // // // // // // // // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // // // // // // // // //     color: isActive ? 'white' : '#333',
// // // // // // // // // // // // //     border: 'none',
// // // // // // // // // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // // // // // // // // //     fontSize: '1rem',
// // // // // // // // // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // // // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // // // // // // //     minWidth: '80px'
// // // // // // // // // // // // //   });

// // // // // // // // // // // // //   const activeInfo = functionInfo[activeTab];

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div style={{ 
// // // // // // // // // // // // //       width: '100%',
// // // // // // // // // // // // //       height: '50vh',
// // // // // // // // // // // // //       margin: '20px 0',
// // // // // // // // // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // // // // // // // // //       border: '1px solid #ddd',
// // // // // // // // // // // // //       borderRadius: '8px',
// // // // // // // // // // // // //       overflow: 'hidden'
// // // // // // // // // // // // //     }}>
// // // // // // // // // // // // //       {/* Tabs Bar */}
// // // // // // // // // // // // //       <div style={{
// // // // // // // // // // // // //         display: 'flex',
// // // // // // // // // // // // //         backgroundColor: '#f9f9f9',
// // // // // // // // // // // // //         borderBottom: '2px solid #1d6bd8'
// // // // // // // // // // // // //       }}>
// // // // // // // // // // // // //         {Object.keys(demoData).map((func) => (
// // // // // // // // // // // // //           <button
// // // // // // // // // // // // //             key={func}
// // // // // // // // // // // // //             style={tabStyle(activeTab === func)}
// // // // // // // // // // // // //             onClick={() => setActiveTab(func)}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {func.toUpperCase()}
// // // // // // // // // // // // //           </button>
// // // // // // // // // // // // //         ))}
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Content Area */}
// // // // // // // // // // // // //       <div style={{
// // // // // // // // // // // // //         padding: '24px',
// // // // // // // // // // // // //         height: 'calc(100% - 60px)',
// // // // // // // // // // // // //         overflow: 'auto',
// // // // // // // // // // // // //         backgroundColor: 'white'
// // // // // // // // // // // // //       }}>
// // // // // // // // // // // // //         {/* Header with function name and current value */}
// // // // // // // // // // // // //         <div style={{
// // // // // // // // // // // // //           display: 'flex',
// // // // // // // // // // // // //           justifyContent: 'space-between',
// // // // // // // // // // // // //           alignItems: 'center',
// // // // // // // // // // // // //           marginBottom: '24px',
// // // // // // // // // // // // //           borderBottom: '1px solid #eee',
// // // // // // // // // // // // //           paddingBottom: '16px'
// // // // // // // // // // // // //         }}>
// // // // // // // // // // // // //           <h2 style={{
// // // // // // // // // // // // //             margin: 0,
// // // // // // // // // // // // //             color: '#1d6bd8',
// // // // // // // // // // // // //             fontSize: '1.8rem'
// // // // // // // // // // // // //           }}>
// // // // // // // // // // // // //             {activeInfo.fullName} Function
// // // // // // // // // // // // //           </h2>
// // // // // // // // // // // // //           <div style={{
// // // // // // // // // // // // //             backgroundColor: '#1d6bd8',
// // // // // // // // // // // // //             color: 'white',
// // // // // // // // // // // // //             padding: '8px 16px',
// // // // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // // // //             fontSize: '1.2rem',
// // // // // // // // // // // // //             fontWeight: 'bold'
// // // // // // // // // // // // //           }}>
// // // // // // // // // // // // //             {activeTab}(θ) = {formatValue(demoData[activeTab])}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Function characteristics in grid */}
// // // // // // // // // // // // //         <div style={{
// // // // // // // // // // // // //           display: 'grid',
// // // // // // // // // // // // //           gridTemplateColumns: '1fr 1fr',
// // // // // // // // // // // // //           gap: '16px 32px',
// // // // // // // // // // // // //           fontSize: '1rem',
// // // // // // // // // // // // //           lineHeight: '1.6'
// // // // // // // // // // // // //         }}>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // // // // // // // // //             {activeInfo.domain}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // // // // // // // // //             {activeInfo.range}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // // // // // // // // //             {activeInfo.period}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // // // // // // // // //             {activeInfo.zeros}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // // // // // // // // //             {activeInfo.maxima}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // // // // // // // // //             {activeInfo.minima}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // // // // // // // // //             {activeInfo.asymptotes}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // // // // // // // // //             {activeInfo.evenOdd}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // // // // // // // // //             d/dx [{activeTab}(x)] = {activeInfo.derivative}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // // // // // // // // //             ∫ {activeTab}(x) dx = {activeInfo.integral}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Graph placeholder */}
// // // // // // // // // // // // //         <div style={{
// // // // // // // // // // // // //           marginTop: '24px',
// // // // // // // // // // // // //           padding: '20px',
// // // // // // // // // // // // //           backgroundColor: '#f8f9fa',
// // // // // // // // // // // // //           borderRadius: '6px',
// // // // // // // // // // // // //           textAlign: 'center',
// // // // // // // // // // // // //           border: '2px dashed #ddd'
// // // // // // // // // // // // //         }}>
// // // // // // // // // // // // //           <p style={{ margin: 0, color: '#666', fontSize: '1.1rem' }}>
// // // // // // // // // // // // //             📊 Graph visualization for {activeInfo.fullName} function will be added here
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default TrigonometricPanel;


// // // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // // // // // // // // //   const functionInfo = {
// // // // // // // // // // // //     sin: {
// // // // // // // // // // // //       fullName: 'Sine',
// // // // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // // // // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // // // // // // // //       derivative: 'cos(x)',
// // // // // // // // // // // //       integral: '-cos(x) + C'
// // // // // // // // // // // //     },
// // // // // // // // // // // //     cos: {
// // // // // // // // // // // //       fullName: 'Cosine',
// // // // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // // // //       maxima: '2nπ (360°n)',
// // // // // // // // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // // // // // // // //       derivative: '-sin(x)',
// // // // // // // // // // // //       integral: 'sin(x) + C'
// // // // // // // // // // // //     },
// // // // // // // // // // // //     tan: {
// // // // // // // // // // // //       fullName: 'Tangent',
// // // // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // // // // // // // //       derivative: 'sec²(x)',
// // // // // // // // // // // //       integral: '-ln|cos(x)| + C'
// // // // // // // // // // // //     },
// // // // // // // // // // // //     csc: {
// // // // // // // // // // // //       fullName: 'Cosecant',
// // // // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // //       zeros: 'None',
// // // // // // // // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // // // // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // // // // // // // //       derivative: '-csc(x)cot(x)',
// // // // // // // // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // // // // // // // //     },
// // // // // // // // // // // //     sec: {
// // // // // // // // // // // //       fullName: 'Secant',
// // // // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // // //       zeros: 'None',
// // // // // // // // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // // // // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // // // // // // // //       derivative: 'sec(x)tan(x)',
// // // // // // // // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // // // // // // // //     },
// // // // // // // // // // // //     cot: {
// // // // // // // // // // // //       fullName: 'Cotangent',
// // // // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // // // // // // // //       derivative: '-csc²(x)',
// // // // // // // // // // // //       integral: 'ln|sin(x)| + C'
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const formatValue = (value) => {
// // // // // // // // // // // //     if (value === null) return 'Undefined';
// // // // // // // // // // // //     if (Number.isNaN(value)) return '...';
// // // // // // // // // // // //     if (typeof value === 'number') {
// // // // // // // // // // // //       return value === 0 ? '0' : value.toFixed(5);
// // // // // // // // // // // //     }
// // // // // // // // // // // //     return value;
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const tabStyle = (isActive) => ({
// // // // // // // // // // // //     padding: '12px 24px',
// // // // // // // // // // // //     cursor: 'pointer',
// // // // // // // // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // // // // // // // //     color: isActive ? 'white' : '#333',
// // // // // // // // // // // //     border: 'none',
// // // // // // // // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // // // // // // // //     fontSize: '1rem',
// // // // // // // // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // // // // // //     minWidth: '80px',
// // // // // // // // // // // //     textTransform: 'uppercase'
// // // // // // // // // // // //   });

// // // // // // // // // // // //   const activeInfo = functionInfo[selectedFunction] || functionInfo.sin;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div style={{ 
// // // // // // // // // // // //       width: '100%',
// // // // // // // // // // // //       minHeight: '400px',
// // // // // // // // // // // //       margin: '20px 0',
// // // // // // // // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // // // // // // // //       border: '1px solid #ddd',
// // // // // // // // // // // //       borderRadius: '8px',
// // // // // // // // // // // //       overflow: 'hidden',
// // // // // // // // // // // //       backgroundColor: 'white'
// // // // // // // // // // // //     }}>
// // // // // // // // // // // //       {/* Tabs Bar */}
// // // // // // // // // // // //       <div style={{
// // // // // // // // // // // //         display: 'flex',
// // // // // // // // // // // //         backgroundColor: '#f9f9f9',
// // // // // // // // // // // //         borderBottom: '2px solid #1d6bd8',
// // // // // // // // // // // //         flexWrap: 'wrap'
// // // // // // // // // // // //       }}>
// // // // // // // // // // // //         {Object.keys(trigoData).map((func) => (
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             key={func}
// // // // // // // // // // // //             style={tabStyle(selectedFunction === func)}
// // // // // // // // // // // //             onClick={() => onFunctionSelect(func)}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {func}
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Content Area */}
// // // // // // // // // // // //       <div style={{
// // // // // // // // // // // //         padding: '24px',
// // // // // // // // // // // //         minHeight: '350px',
// // // // // // // // // // // //         overflow: 'auto',
// // // // // // // // // // // //         backgroundColor: 'white'
// // // // // // // // // // // //       }}>
// // // // // // // // // // // //         {/* Header with function name and current value */}
// // // // // // // // // // // //         <div style={{
// // // // // // // // // // // //           display: 'flex',
// // // // // // // // // // // //           justifyContent: 'space-between',
// // // // // // // // // // // //           alignItems: 'center',
// // // // // // // // // // // //           marginBottom: '24px',
// // // // // // // // // // // //           borderBottom: '1px solid #eee',
// // // // // // // // // // // //           paddingBottom: '16px',
// // // // // // // // // // // //           flexWrap: 'wrap',
// // // // // // // // // // // //           gap: '16px'
// // // // // // // // // // // //         }}>
// // // // // // // // // // // //           <h2 style={{
// // // // // // // // // // // //             margin: 0,
// // // // // // // // // // // //             color: '#1d6bd8',
// // // // // // // // // // // //             fontSize: '1.8rem'
// // // // // // // // // // // //           }}>
// // // // // // // // // // // //             {activeInfo.fullName} Function
// // // // // // // // // // // //           </h2>
// // // // // // // // // // // //           <div style={{
// // // // // // // // // // // //             backgroundColor: '#1d6bd8',
// // // // // // // // // // // //             color: 'white',
// // // // // // // // // // // //             padding: '8px 16px',
// // // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // // //             fontSize: '1.2rem',
// // // // // // // // // // // //             fontWeight: 'bold'
// // // // // // // // // // // //           }}>
// // // // // // // // // // // //             {selectedFunction}({angle || '0'}°) = {formatValue(trigoData[selectedFunction])}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Current angle display */}
// // // // // // // // // // // //         {angle && (
// // // // // // // // // // // //           <div style={{
// // // // // // // // // // // //             backgroundColor: '#f8f9fa',
// // // // // // // // // // // //             padding: '12px',
// // // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // // //             marginBottom: '20px',
// // // // // // // // // // // //             textAlign: 'center',
// // // // // // // // // // // //             fontSize: '1.1rem',
// // // // // // // // // // // //             color: '#555'
// // // // // // // // // // // //           }}>
// // // // // // // // // // // //             <strong>Current Angle:</strong> {angle} {units === 'degrees' ? '°' : 'rad'}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}

// // // // // // // // // // // //         {/* Function characteristics in grid */}
// // // // // // // // // // // //         <div style={{
// // // // // // // // // // // //           display: 'grid',
// // // // // // // // // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // // // // // // // // // // //           gap: '16px 32px',
// // // // // // // // // // // //           fontSize: '1rem',
// // // // // // // // // // // //           lineHeight: '1.6'
// // // // // // // // // // // //         }}>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // // // // // // // //             {activeInfo.domain}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // // // // // // // //             {activeInfo.range}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // // // // // // // //             {activeInfo.period}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // // // // // // // //             {activeInfo.zeros}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // // // // // // // //             {activeInfo.maxima}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // // // // // // // //             {activeInfo.minima}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // // // // // // // //             {activeInfo.asymptotes}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // // // // // // // //             {activeInfo.evenOdd}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // // // // // // // //             d/dx [{selectedFunction}(x)] = {activeInfo.derivative}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // // // // // // // //             ∫ {selectedFunction}(x) dx = {activeInfo.integral}
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Additional info for special cases */}
// // // // // // // // // // // //         {(selectedFunction === 'tan' || selectedFunction === 'cot') && (
// // // // // // // // // // // //           <div style={{
// // // // // // // // // // // //             marginTop: '20px',
// // // // // // // // // // // //             padding: '16px',
// // // // // // // // // // // //             backgroundColor: '#fff3cd',
// // // // // // // // // // // //             border: '1px solid #ffeaa7',
// // // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // // //             fontSize: '0.95rem'
// // // // // // // // // // // //           }}>
// // // // // // // // // // // //             <strong>⚠️ Note:</strong> This function has vertical asymptotes and is undefined at certain points.
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}

// // // // // // // // // // // //         {(selectedFunction === 'csc' || selectedFunction === 'sec') && (
// // // // // // // // // // // //           <div style={{
// // // // // // // // // // // //             marginTop: '20px',
// // // // // // // // // // // //             padding: '16px',
// // // // // // // // // // // //             backgroundColor: '#e3f2fd',
// // // // // // // // // // // //             border: '1px solid #bbdefb',
// // // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // // //             fontSize: '0.95rem'
// // // // // // // // // // // //           }}>
// // // // // // // // // // // //             <strong>ℹ️ Note:</strong> This reciprocal function has a restricted range and vertical asymptotes.
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default TrigoPanel;


// // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // // // // // // // //   const functionInfo = {
// // // // // // // // // // //     sin: {
// // // // // // // // // // //       fullName: 'Sine',
// // // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // // // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // // // // // // //       derivative: 'cos(x)',
// // // // // // // // // // //       integral: '-cos(x) + C'
// // // // // // // // // // //     },
// // // // // // // // // // //     cos: {
// // // // // // // // // // //       fullName: 'Cosine',
// // // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // // //       maxima: '2nπ (360°n)',
// // // // // // // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // // // // // // //       derivative: '-sin(x)',
// // // // // // // // // // //       integral: 'sin(x) + C'
// // // // // // // // // // //     },
// // // // // // // // // // //     tan: {
// // // // // // // // // // //       fullName: 'Tangent',
// // // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // // // // // // //       derivative: 'sec²(x)',
// // // // // // // // // // //       integral: '-ln|cos(x)| + C'
// // // // // // // // // // //     },
// // // // // // // // // // //     csc: {
// // // // // // // // // // //       fullName: 'Cosecant',
// // // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // //       zeros: 'None',
// // // // // // // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // // // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // // // // // // //       derivative: '-csc(x)cot(x)',
// // // // // // // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // // // // // // //     },
// // // // // // // // // // //     sec: {
// // // // // // // // // // //       fullName: 'Secant',
// // // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // // //       zeros: 'None',
// // // // // // // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // // // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // // // // // // //       derivative: 'sec(x)tan(x)',
// // // // // // // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // // // // // // //     },
// // // // // // // // // // //     cot: {
// // // // // // // // // // //       fullName: 'Cotangent',
// // // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // // // // // // //       derivative: '-csc²(x)',
// // // // // // // // // // //       integral: 'ln|sin(x)| + C'
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const formatValue = (value) => {
// // // // // // // // // // //     if (value === null) return 'Undefined';
// // // // // // // // // // //     if (Number.isNaN(value)) return '...';
// // // // // // // // // // //     if (typeof value === 'number') {
// // // // // // // // // // //       return value === 0 ? '0' : value.toFixed(5);
// // // // // // // // // // //     }
// // // // // // // // // // //     return value;
// // // // // // // // // // //   };

// // // // // // // // // // //   const tabStyle = (isActive) => ({
// // // // // // // // // // //     padding: '12px 24px',
// // // // // // // // // // //     cursor: 'pointer',
// // // // // // // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // // // // // // //     color: isActive ? 'white' : '#333',
// // // // // // // // // // //     border: 'none',
// // // // // // // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // // // // // // //     fontSize: '1rem',
// // // // // // // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // // // // //     minWidth: '80px',
// // // // // // // // // // //     textTransform: 'uppercase'
// // // // // // // // // // //   });

// // // // // // // // // // //   const activeInfo = functionInfo[selectedFunction] || functionInfo.sin;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ 
// // // // // // // // // // //       width: '100%',
// // // // // // // // // // //       height: '50vh',
// // // // // // // // // // //       margin: '20px 0',
// // // // // // // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // // // // // // //       border: '1px solid #ddd',
// // // // // // // // // // //       borderRadius: '8px',
// // // // // // // // // // //       overflow: 'hidden',
// // // // // // // // // // //       backgroundColor: 'white'
// // // // // // // // // // //     }}>
// // // // // // // // // // //       {/* Tabs Bar */}
// // // // // // // // // // //       <div style={{
// // // // // // // // // // //         display: 'flex',
// // // // // // // // // // //         backgroundColor: '#f9f9f9',
// // // // // // // // // // //         borderBottom: '2px solid #1d6bd8',
// // // // // // // // // // //         flexWrap: 'wrap'
// // // // // // // // // // //       }}>
// // // // // // // // // // //         {Object.keys(trigoData).map((func) => (
// // // // // // // // // // //           <button
// // // // // // // // // // //             key={func}
// // // // // // // // // // //             style={tabStyle(selectedFunction === func)}
// // // // // // // // // // //             onClick={() => onFunctionSelect(func)}
// // // // // // // // // // //           >
// // // // // // // // // // //             {func}
// // // // // // // // // // //           </button>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Content Area */}
// // // // // // // // // // //       <div style={{
// // // // // // // // // // //         padding: '24px',
// // // // // // // // // // //         height: 'calc(50vh - 60px)',
// // // // // // // // // // //         overflow: 'auto',
// // // // // // // // // // //         backgroundColor: 'white'
// // // // // // // // // // //       }}>
// // // // // // // // // // //         {/* Header with function name and current value */}
// // // // // // // // // // //         <div style={{
// // // // // // // // // // //           display: 'flex',
// // // // // // // // // // //           justifyContent: 'space-between',
// // // // // // // // // // //           alignItems: 'center',
// // // // // // // // // // //           marginBottom: '24px',
// // // // // // // // // // //           borderBottom: '1px solid #eee',
// // // // // // // // // // //           paddingBottom: '16px',
// // // // // // // // // // //           flexWrap: 'wrap',
// // // // // // // // // // //           gap: '16px'
// // // // // // // // // // //         }}>
// // // // // // // // // // //           <h2 style={{
// // // // // // // // // // //             margin: 0,
// // // // // // // // // // //             color: '#1d6bd8',
// // // // // // // // // // //             fontSize: '1.8rem'
// // // // // // // // // // //           }}>
// // // // // // // // // // //             {activeInfo.fullName} Function
// // // // // // // // // // //           </h2>
// // // // // // // // // // //           <div style={{
// // // // // // // // // // //             backgroundColor: '#1d6bd8',
// // // // // // // // // // //             color: 'white',
// // // // // // // // // // //             padding: '8px 16px',
// // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // //             fontSize: '1.2rem',
// // // // // // // // // // //             fontWeight: 'bold'
// // // // // // // // // // //           }}>
// // // // // // // // // // //             {selectedFunction}({angle || '0'}°) = {formatValue(trigoData[selectedFunction])}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Current angle display */}
// // // // // // // // // // //         {angle && (
// // // // // // // // // // //           <div style={{
// // // // // // // // // // //             backgroundColor: '#f8f9fa',
// // // // // // // // // // //             padding: '12px',
// // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // //             marginBottom: '20px',
// // // // // // // // // // //             textAlign: 'center',
// // // // // // // // // // //             fontSize: '1.1rem',
// // // // // // // // // // //             color: '#555'
// // // // // // // // // // //           }}>
// // // // // // // // // // //             <strong>Current Angle:</strong> {angle} {units === 'degrees' ? '°' : 'rad'}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}

// // // // // // // // // // //         {/* Function characteristics in grid */}
// // // // // // // // // // //         <div style={{
// // // // // // // // // // //           display: 'grid',
// // // // // // // // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // // // // // // // // // //           gap: '16px 32px',
// // // // // // // // // // //           fontSize: '1rem',
// // // // // // // // // // //           lineHeight: '1.6'
// // // // // // // // // // //         }}>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // // // // // // //             {activeInfo.domain}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // // // // // // //             {activeInfo.range}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // // // // // // //             {activeInfo.period}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // // // // // // //             {activeInfo.zeros}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // // // // // // //             {activeInfo.maxima}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // // // // // // //             {activeInfo.minima}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // // // // // // //             {activeInfo.asymptotes}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // // // // // // //             {activeInfo.evenOdd}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // // // // // // //             d/dx [{selectedFunction}(x)] = {activeInfo.derivative}
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // // // // // // //             ∫ {selectedFunction}(x) dx = {activeInfo.integral}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Additional info for special cases */}
// // // // // // // // // // //         {(selectedFunction === 'tan' || selectedFunction === 'cot') && (
// // // // // // // // // // //           <div style={{
// // // // // // // // // // //             marginTop: '20px',
// // // // // // // // // // //             padding: '16px',
// // // // // // // // // // //             backgroundColor: '#fff3cd',
// // // // // // // // // // //             border: '1px solid #ffeaa7',
// // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // //             fontSize: '0.95rem'
// // // // // // // // // // //           }}>
// // // // // // // // // // //             <strong>⚠️ Note:</strong> This function has vertical asymptotes and is undefined at certain points.
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}

// // // // // // // // // // //         {(selectedFunction === 'csc' || selectedFunction === 'sec') && (
// // // // // // // // // // //           <div style={{
// // // // // // // // // // //             marginTop: '20px',
// // // // // // // // // // //             padding: '16px',
// // // // // // // // // // //             backgroundColor: '#e3f2fd',
// // // // // // // // // // //             border: '1px solid #bbdefb',
// // // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // // //             fontSize: '0.95rem'
// // // // // // // // // // //           }}>
// // // // // // // // // // //             <strong>ℹ️ Note:</strong> This reciprocal function has a restricted range and vertical asymptotes.
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default TrigoPanel;


// // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // // // // // // //   const functionInfo = {
// // // // // // // // // //     sin: {
// // // // // // // // // //       fullName: 'Sine',
// // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // // // // // //       derivative: 'cos(x)',
// // // // // // // // // //       integral: '-cos(x) + C'
// // // // // // // // // //     },
// // // // // // // // // //     cos: {
// // // // // // // // // //       fullName: 'Cosine',
// // // // // // // // // //       domain: 'All real numbers',
// // // // // // // // // //       range: '[-1, 1]',
// // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // //       maxima: '2nπ (360°n)',
// // // // // // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // // // // // //       asymptotes: 'None',
// // // // // // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // // // // // //       derivative: '-sin(x)',
// // // // // // // // // //       integral: 'sin(x) + C'
// // // // // // // // // //     },
// // // // // // // // // //     tan: {
// // // // // // // // // //       fullName: 'Tangent',
// // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // // // // // //       derivative: 'sec²(x)',
// // // // // // // // // //       integral: '-ln|cos(x)| + C'
// // // // // // // // // //     },
// // // // // // // // // //     csc: {
// // // // // // // // // //       fullName: 'Cosecant',
// // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // //       zeros: 'None',
// // // // // // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // // // // // //       derivative: '-csc(x)cot(x)',
// // // // // // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // // // // // //     },
// // // // // // // // // //     sec: {
// // // // // // // // // //       fullName: 'Secant',
// // // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // // //       period: '2π (360°)',
// // // // // // // // // //       zeros: 'None',
// // // // // // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // // // // // //       derivative: 'sec(x)tan(x)',
// // // // // // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // // // // // //     },
// // // // // // // // // //     cot: {
// // // // // // // // // //       fullName: 'Cotangent',
// // // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // // //       range: 'All real numbers',
// // // // // // // // // //       period: 'π (180°)',
// // // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // // // // // //       derivative: '-csc²(x)',
// // // // // // // // // //       integral: 'ln|sin(x)| + C'
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const formatValue = (value) => {
// // // // // // // // // //     if (value === null) return 'Undefined';
// // // // // // // // // //     if (Number.isNaN(value)) return '...';
// // // // // // // // // //     if (typeof value === 'number') {
// // // // // // // // // //       return value === 0 ? '0' : value.toFixed(5);
// // // // // // // // // //     }
// // // // // // // // // //     return value;
// // // // // // // // // //   };

// // // // // // // // // //   const tabStyle = (isActive) => ({
// // // // // // // // // //     padding: '12px 24px',
// // // // // // // // // //     cursor: 'pointer',
// // // // // // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // // // // // //     color: isActive ? 'white' : '#333',
// // // // // // // // // //     border: 'none',
// // // // // // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // // // // // //     fontSize: '1rem',
// // // // // // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // // // //     minWidth: '80px',
// // // // // // // // // //     textTransform: 'uppercase'
// // // // // // // // // //   });

// // // // // // // // // //   const activeInfo = functionInfo[selectedFunction] || functionInfo.sin;

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ 
// // // // // // // // // //       width: '100%',
// // // // // // // // // //       height: '50vh',
// // // // // // // // // //       margin: '20px 0',
// // // // // // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // // // // // //       border: '1px solid #ddd',
// // // // // // // // // //       borderRadius: '8px',
// // // // // // // // // //       overflow: 'hidden',
// // // // // // // // // //       backgroundColor: 'white'
// // // // // // // // // //     }}>
// // // // // // // // // //       {/* Tabs Bar */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         backgroundColor: '#f9f9f9',
// // // // // // // // // //         borderBottom: '2px solid #1d6bd8',
// // // // // // // // // //         flexWrap: 'wrap'
// // // // // // // // // //       }}>
// // // // // // // // // //         {Object.keys(trigoData).map((func) => (
// // // // // // // // // //           <button
// // // // // // // // // //             key={func}
// // // // // // // // // //             style={tabStyle(selectedFunction === func)}
// // // // // // // // // //             onClick={() => onFunctionSelect(func)}
// // // // // // // // // //           >
// // // // // // // // // //             {func}
// // // // // // // // // //           </button>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Content Area */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         padding: '24px',
// // // // // // // // // //         height: 'calc(50vh - 60px)',
// // // // // // // // // //         overflow: 'hidden',
// // // // // // // // // //         backgroundColor: 'white'
// // // // // // // // // //       }}>
// // // // // // // // // //         {/* Header with function name and current value */}
// // // // // // // // // //         <div style={{
// // // // // // // // // //           display: 'flex',
// // // // // // // // // //           justifyContent: 'space-between',
// // // // // // // // // //           alignItems: 'center',
// // // // // // // // // //           marginBottom: '24px',
// // // // // // // // // //           borderBottom: '1px solid #eee',
// // // // // // // // // //           paddingBottom: '16px',
// // // // // // // // // //           flexWrap: 'wrap',
// // // // // // // // // //           gap: '16px'
// // // // // // // // // //         }}>
// // // // // // // // // //           <h2 style={{
// // // // // // // // // //             margin: 0,
// // // // // // // // // //             color: '#1d6bd8',
// // // // // // // // // //             fontSize: '1.8rem'
// // // // // // // // // //           }}>
// // // // // // // // // //             {activeInfo.fullName} Function
// // // // // // // // // //           </h2>
// // // // // // // // // //           <div style={{
// // // // // // // // // //             backgroundColor: '#1d6bd8',
// // // // // // // // // //             color: 'white',
// // // // // // // // // //             padding: '8px 16px',
// // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // //             fontSize: '1.2rem',
// // // // // // // // // //             fontWeight: 'bold'
// // // // // // // // // //           }}>
// // // // // // // // // //             {selectedFunction}({angle || '0'}°) = {formatValue(trigoData[selectedFunction])}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Current angle display */}
// // // // // // // // // //         {angle && (
// // // // // // // // // //           <div style={{
// // // // // // // // // //             backgroundColor: '#f8f9fa',
// // // // // // // // // //             padding: '12px',
// // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // //             marginBottom: '20px',
// // // // // // // // // //             textAlign: 'center',
// // // // // // // // // //             fontSize: '1.1rem',
// // // // // // // // // //             color: '#555'
// // // // // // // // // //           }}>
// // // // // // // // // //             <strong>Current Angle:</strong> {angle} {units === 'degrees' ? '°' : 'rad'}
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* Function characteristics in grid */}
// // // // // // // // // //         <div style={{
// // // // // // // // // //           display: 'grid',
// // // // // // // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
// // // // // // // // // //           gap: '16px 32px',
// // // // // // // // // //           fontSize: '1rem',
// // // // // // // // // //           lineHeight: '1.6'
// // // // // // // // // //         }}>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // // // // // //             {activeInfo.domain}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // // // // // //             {activeInfo.range}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // // // // // //             {activeInfo.period}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // // // // // //             {activeInfo.zeros}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // // // // // //             {activeInfo.maxima}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // // // // // //             {activeInfo.minima}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // // // // // //             {activeInfo.asymptotes}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // // // // // //             {activeInfo.evenOdd}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // // // // // //             d/dx [{selectedFunction}(x)] = {activeInfo.derivative}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div style={{ padding: '8px 0' }}>
// // // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // // // // // //             ∫ {selectedFunction}(x) dx = {activeInfo.integral}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Additional info for special cases */}
// // // // // // // // // //         {(selectedFunction === 'tan' || selectedFunction === 'cot') && (
// // // // // // // // // //           <div style={{
// // // // // // // // // //             marginTop: '20px',
// // // // // // // // // //             padding: '16px',
// // // // // // // // // //             backgroundColor: '#fff3cd',
// // // // // // // // // //             border: '1px solid #ffeaa7',
// // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // //             fontSize: '0.95rem'
// // // // // // // // // //           }}>
// // // // // // // // // //             <strong>⚠️ Note:</strong> This function has vertical asymptotes and is undefined at certain points.
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {(selectedFunction === 'csc' || selectedFunction === 'sec') && (
// // // // // // // // // //           <div style={{
// // // // // // // // // //             marginTop: '20px',
// // // // // // // // // //             padding: '16px',
// // // // // // // // // //             backgroundColor: '#e3f2fd',
// // // // // // // // // //             border: '1px solid #bbdefb',
// // // // // // // // // //             borderRadius: '6px',
// // // // // // // // // //             fontSize: '0.95rem'
// // // // // // // // // //           }}>
// // // // // // // // // //             <strong>ℹ️ Note:</strong> This reciprocal function has a restricted range and vertical asymptotes.
// // // // // // // // // //           </div>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default TrigoPanel;

// // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // // // // // //   const [innerTab, setInnerTab] = useState('angle-analysis'); // Inner tab state

// // // // // // // // //   const functionInfo = {
// // // // // // // // //     sin: {
// // // // // // // // //       fullName: 'Sine',
// // // // // // // // //       domain: 'All real numbers',
// // // // // // // // //       range: '[-1, 1]',
// // // // // // // // //       period: '2π (360°)',
// // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // // // // //       asymptotes: 'None',
// // // // // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // // // // //       derivative: 'cos(x)',
// // // // // // // // //       integral: '-cos(x) + C'
// // // // // // // // //     },
// // // // // // // // //     cos: {
// // // // // // // // //       fullName: 'Cosine',
// // // // // // // // //       domain: 'All real numbers',
// // // // // // // // //       range: '[-1, 1]',
// // // // // // // // //       period: '2π (360°)',
// // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // //       maxima: '2nπ (360°n)',
// // // // // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // // // // //       asymptotes: 'None',
// // // // // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // // // // //       derivative: '-sin(x)',
// // // // // // // // //       integral: 'sin(x) + C'
// // // // // // // // //     },
// // // // // // // // //     tan: {
// // // // // // // // //       fullName: 'Tangent',
// // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // //       range: 'All real numbers',
// // // // // // // // //       period: 'π (180°)',
// // // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // // // // //       derivative: 'sec²(x)',
// // // // // // // // //       integral: '-ln|cos(x)| + C'
// // // // // // // // //     },
// // // // // // // // //     csc: {
// // // // // // // // //       fullName: 'Cosecant',
// // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // //       period: '2π (360°)',
// // // // // // // // //       zeros: 'None',
// // // // // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // // // // //       derivative: '-csc(x)cot(x)',
// // // // // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // // // // //     },
// // // // // // // // //     sec: {
// // // // // // // // //       fullName: 'Secant',
// // // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // // //       period: '2π (360°)',
// // // // // // // // //       zeros: 'None',
// // // // // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // // // // //       derivative: 'sec(x)tan(x)',
// // // // // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // // // // //     },
// // // // // // // // //     cot: {
// // // // // // // // //       fullName: 'Cotangent',
// // // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // // //       range: 'All real numbers',
// // // // // // // // //       period: 'π (180°)',
// // // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // // //       minima: 'None (unbounded)',
// // // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // // // // //       derivative: '-csc²(x)',
// // // // // // // // //       integral: 'ln|sin(x)| + C'
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const getAngleSpecificData = (angleValue, unitType) => {
// // // // // // // // //     const num = parseFloat(angleValue);
// // // // // // // // //     if (isNaN(num)) return null;

// // // // // // // // //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// // // // // // // // //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// // // // // // // // //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// // // // // // // // //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// // // // // // // // //     const specialAngles = {
// // // // // // // // //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }},
// // // // // // // // //       30: { name: '30°', description: 'Special angle - π/6 radians, 30-60-90 triangle', exact: { sin: '1/2', cos: '√3/2', tan: '1/√3' }},
// // // // // // // // //       45: { name: '45°', description: 'Special angle - π/4 radians, 45-45-90 triangle', exact: { sin: '√2/2', cos: '√2/2', tan: '1' }},
// // // // // // // // //       60: { name: '60°', description: 'Special angle - π/3 radians, 30-60-90 triangle', exact: { sin: '√3/2', cos: '1/2', tan: '√3' }},
// // // // // // // // //       90: { name: '90°', description: 'Right angle - π/2 radians, on positive y-axis', exact: { sin: '1', cos: '0', tan: 'undefined' }},
// // // // // // // // //       120: { name: '120°', description: 'Special angle - 2π/3 radians, 180° - 60°', exact: { sin: '√3/2', cos: '-1/2', tan: '-√3' }},
// // // // // // // // //       135: { name: '135°', description: 'Special angle - 3π/4 radians, 180° - 45°', exact: { sin: '√2/2', cos: '-√2/2', tan: '-1' }},
// // // // // // // // //       150: { name: '150°', description: 'Special angle - 5π/6 radians, 180° - 30°', exact: { sin: '1/2', cos: '-√3/2', tan: '-1/√3' }},
// // // // // // // // //       180: { name: '180°', description: 'Straight angle - π radians, on negative x-axis', exact: { sin: '0', cos: '-1', tan: '0' }},
// // // // // // // // //       270: { name: '270°', description: 'Three-quarter turn - 3π/2 radians, on negative y-axis', exact: { sin: '-1', cos: '0', tan: 'undefined' }},
// // // // // // // // //       360: { name: '360°', description: 'Full rotation - 2π radians, back to positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }}
// // // // // // // // //     };

// // // // // // // // //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// // // // // // // // //     return {
// // // // // // // // //       originalAngle: angleValue,
// // // // // // // // //       degreeValue: degreeAngle.toFixed(2),
// // // // // // // // //       radianValue: radianAngle.toFixed(5),
// // // // // // // // //       normalizedDegree: normalizedDeg.toFixed(1),
// // // // // // // // //       quadrant,
// // // // // // // // //       isSpecial: !!isSpecialAngle,
// // // // // // // // //       specialInfo: isSpecialAngle,
// // // // // // // // //       complement: normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null,
// // // // // // // // //       supplement: normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null,
// // // // // // // // //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// // // // // // // // //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// // // // // // // // //       referenceAngle: (() => {
// // // // // // // // //         if (normalizedDeg <= 90) return normalizedDeg.toFixed(1);
// // // // // // // // //         if (normalizedDeg <= 180) return (180 - normalizedDeg).toFixed(1);
// // // // // // // // //         if (normalizedDeg <= 270) return (normalizedDeg - 180).toFixed(1);
// // // // // // // // //         return (360 - normalizedDeg).toFixed(1);
// // // // // // // // //       })(),
// // // // // // // // //       quadrantSigns: {
// // // // // // // // //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// // // // // // // // //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// // // // // // // // //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// // // // // // // // //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// // // // // // // // //       }[quadrant]
// // // // // // // // //     };
// // // // // // // // //   };

// // // // // // // // //   const formatValue = (value) => {
// // // // // // // // //     if (value === null) return 'Undefined';
// // // // // // // // //     if (Number.isNaN(value)) return '...';
// // // // // // // // //     return typeof value === 'number' ? value.toFixed(5) : value;
// // // // // // // // //   };

// // // // // // // // //   const mainTabStyle = (isActive) => ({
// // // // // // // // //     padding: '12px 24px',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // // // // //     color: isActive ? 'white' : '#333',
// // // // // // // // //     border: 'none',
// // // // // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // // // // //     fontSize: '1rem',
// // // // // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // // //     minWidth: '80px',
// // // // // // // // //     textTransform: 'uppercase'
// // // // // // // // //   });

// // // // // // // // //   const innerTabStyle = (isActive) => ({
// // // // // // // // //     padding: '8px 16px',
// // // // // // // // //     margin: '0 4px',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// // // // // // // // //     color: isActive ? 'white' : '#4a90e2',
// // // // // // // // //     border: isActive ? 'none' : '1px solid #4a90e2',
// // // // // // // // //     borderRadius: '20px',
// // // // // // // // //     fontSize: '0.9rem',
// // // // // // // // //     fontWeight: '500',
// // // // // // // // //     transition: 'all 0.2s ease'
// // // // // // // // //   });

// // // // // // // // //   const activeInfo = functionInfo[selectedFunction] || functionInfo.sin;
// // // // // // // // //   const angleData = getAngleSpecificData(angle, units);

// // // // // // // // //   // Reset inner tab when function changes
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     setInnerTab('angle-analysis');
// // // // // // // // //   }, [selectedFunction]);

// // // // // // // // //   const renderAngleAnalysis = () => {
// // // // // // // // //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// // // // // // // // //     return (
// // // // // // // // //       <div>
// // // // // // // // //         {/* Header like in your image */}
// // // // // // // // //         <div style={{
// // // // // // // // //           display: 'flex',
// // // // // // // // //           justifyContent: 'space-between',
// // // // // // // // //           alignItems: 'center',
// // // // // // // // //           marginBottom: '20px',
// // // // // // // // //           padding: '12px 20px',
// // // // // // // // //           backgroundColor: '#e8f4fd',
// // // // // // // // //           borderRadius: '12px',
// // // // // // // // //           border: '1px solid #1d6bd8'
// // // // // // // // //         }}>
// // // // // // // // //           <h3 style={{ margin: 0, color: '#1d6bd8', fontSize: '1.1rem' }}>
// // // // // // // // //             Angle: {angleData.originalAngle}° Analysis
// // // // // // // // //           </h3>
// // // // // // // // //           <div style={{
// // // // // // // // //             backgroundColor: '#1d6bd8',
// // // // // // // // //             color: 'white',
// // // // // // // // //             padding: '8px 16px',
// // // // // // // // //             borderRadius: '8px',
// // // // // // // // //             fontSize: '1.1rem',
// // // // // // // // //             fontWeight: 'bold'
// // // // // // // // //           }}>
// // // // // // // // //             {selectedFunction}({angleData.originalAngle}°) = {formatValue(trigoData[selectedFunction])}
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Special angle info */}
// // // // // // // // //         {angleData.isSpecial && (
// // // // // // // // //           <div style={{
// // // // // // // // //             padding: '15px',
// // // // // // // // //             backgroundColor: '#d4edda',
// // // // // // // // //             border: '1px solid #c3e6cb',
// // // // // // // // //             borderRadius: '6px',
// // // // // // // // //             marginBottom: '15px'
// // // // // // // // //           }}>
// // // // // // // // //             <h4 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h4>
// // // // // // // // //             <p style={{ margin: '0 0 8px 0' }}><strong>{angleData.specialInfo.description}</strong></p>
// // // // // // // // //             <p style={{ margin: 0 }}>
// // // // // // // // //               <strong>Exact value:</strong> {selectedFunction}({angleData.originalAngle}°) = {angleData.specialInfo.exact[selectedFunction] || 'N/A'}
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //         )}

// // // // // // // // //         {/* Angle data grid */}
// // // // // // // // //         <div style={{
// // // // // // // // //           display: 'grid',
// // // // // // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// // // // // // // // //           gap: '12px',
// // // // // // // // //           fontSize: '0.9rem'
// // // // // // // // //         }}>
// // // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// // // // // // // // //             Q{angleData.quadrant} - {selectedFunction} is <span style={{color: angleData.quadrantSigns[selectedFunction] === '+' ? 'green' : 'red', fontWeight: 'bold'}}>{angleData.quadrantSigns[selectedFunction] === '+' ? 'POSITIVE' : 'NEGATIVE'}</span>
// // // // // // // // //           </div>

// // // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// // // // // // // // //             {angleData.referenceAngle}°
// // // // // // // // //           </div>

// // // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Conversions:</strong><br />
// // // // // // // // //             {angleData.degreeValue}° = {angleData.radianValue} rad
// // // // // // // // //           </div>

// // // // // // // // //           {angleData.complement && (
// // // // // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // // //               <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// // // // // // // // //               {angleData.complement}°
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           {angleData.supplement && (
// // // // // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // // //               <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// // // // // // // // //               {angleData.supplement}°
// // // // // // // // //             </div>
// // // // // // // // //           )}

// // // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Coterminal:</strong><br />
// // // // // // // // //             {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   const renderGeneralInfo = () => (
// // // // // // // // //     <div style={{
// // // // // // // // //       display: 'grid',
// // // // // // // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // // // // // // //       gap: '16px',
// // // // // // // // //       fontSize: '0.95rem',
// // // // // // // // //       lineHeight: '1.6'
// // // // // // // // //     }}>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // // // // //         {activeInfo.domain}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // // // // //         {activeInfo.range}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // // // // //         {activeInfo.period}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // // // // //         {activeInfo.zeros}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // // // // //         {activeInfo.maxima}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // // // // //         {activeInfo.minima}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // // // // //         {activeInfo.asymptotes}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // // // // //         {activeInfo.evenOdd}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // // // // //         d/dx [{selectedFunction}(x)] = {activeInfo.derivative}
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // // // // //         ∫ {selectedFunction}(x) dx = {activeInfo.integral}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   const renderGraph = () => (
// // // // // // // // //     <div style={{
// // // // // // // // //       display: 'flex',
// // // // // // // // //       alignItems: 'center',
// // // // // // // // //       justifyContent: 'center',
// // // // // // // // //       height: '200px',
// // // // // // // // //       backgroundColor: '#f8f9fa',
// // // // // // // // //       borderRadius: '8px',
// // // // // // // // //       border: '2px dashed #ddd',
// // // // // // // // //       color: '#666',
// // // // // // // // //       fontSize: '1.1rem'
// // // // // // // // //     }}>
// // // // // // // // //       📊 {activeInfo.fullName} function graph will be displayed here
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ 
// // // // // // // // //       width: '100%',
// // // // // // // // //       height: '50vh',
// // // // // // // // //       margin: '20px 0',
// // // // // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // // // // //       border: '1px solid #ddd',
// // // // // // // // //       borderRadius: '8px',
// // // // // // // // //       overflow: 'hidden',
// // // // // // // // //       backgroundColor: 'white'
// // // // // // // // //     }}>
// // // // // // // // //       {/* Main function tabs */}
// // // // // // // // //       <div style={{
// // // // // // // // //         display: 'flex',
// // // // // // // // //         backgroundColor: '#f9f9f9',
// // // // // // // // //         borderBottom: '2px solid #1d6bd8',
// // // // // // // // //         flexWrap: 'wrap'
// // // // // // // // //       }}>
// // // // // // // // //         {Object.keys(trigoData).map((func) => (
// // // // // // // // //           <button
// // // // // // // // //             key={func}
// // // // // // // // //             style={mainTabStyle(selectedFunction === func)}
// // // // // // // // //             onClick={() => onFunctionSelect(func)}
// // // // // // // // //           >
// // // // // // // // //             {func}
// // // // // // // // //           </button>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Inner tabs */}
// // // // // // // // //       <div style={{
// // // // // // // // //         padding: '12px 20px',
// // // // // // // // //         backgroundColor: '#fafafa',
// // // // // // // // //         borderBottom: '1px solid #eee'
// // // // // // // // //       }}>
// // // // // // // // //         <button
// // // // // // // // //           style={innerTabStyle(innerTab === 'angle-analysis')}
// // // // // // // // //           onClick={() => setInnerTab('angle-analysis')}
// // // // // // // // //         >
// // // // // // // // //           Angle Analysis
// // // // // // // // //         </button>
// // // // // // // // //         <button
// // // // // // // // //           style={innerTabStyle(innerTab === 'general-info')}
// // // // // // // // //           onClick={() => setInnerTab('general-info')}
// // // // // // // // //         >
// // // // // // // // //           General Info
// // // // // // // // //         </button>
// // // // // // // // //         <button
// // // // // // // // //           style={innerTabStyle(innerTab === 'graph')}
// // // // // // // // //           onClick={() => setInnerTab('graph')}
// // // // // // // // //         >
// // // // // // // // //           Graph
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Content area */}
// // // // // // // // //       <div style={{
// // // // // // // // //         padding: '20px',
// // // // // // // // //         height: 'calc(50vh - 130px)',
// // // // // // // // //         overflow: 'hidden',
// // // // // // // // //         backgroundColor: 'white'
// // // // // // // // //       }}>
// // // // // // // // //         {innerTab === 'angle-analysis' && renderAngleAnalysis()}
// // // // // // // // //         {innerTab === 'general-info' && renderGeneralInfo()}
// // // // // // // // //         {innerTab === 'graph' && renderGraph()}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default TrigoPanel;


// // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // // // // //   const [innerTab, setInnerTab] = useState('angle-analysis'); // Inner tab state

// // // // // // // //   const functionInfo = {
// // // // // // // //     sin: {
// // // // // // // //       fullName: 'Sine',
// // // // // // // //       domain: 'All real numbers',
// // // // // // // //       range: '[-1, 1]',
// // // // // // // //       period: '2π (360°)',
// // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // // // //       asymptotes: 'None',
// // // // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // // // //       derivative: 'cos(x)',
// // // // // // // //       integral: '-cos(x) + C'
// // // // // // // //     },
// // // // // // // //     cos: {
// // // // // // // //       fullName: 'Cosine',
// // // // // // // //       domain: 'All real numbers',
// // // // // // // //       range: '[-1, 1]',
// // // // // // // //       period: '2π (360°)',
// // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // //       maxima: '2nπ (360°n)',
// // // // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // // // //       asymptotes: 'None',
// // // // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // // // //       derivative: '-sin(x)',
// // // // // // // //       integral: 'sin(x) + C'
// // // // // // // //     },
// // // // // // // //     tan: {
// // // // // // // //       fullName: 'Tangent',
// // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // //       range: 'All real numbers',
// // // // // // // //       period: 'π (180°)',
// // // // // // // //       zeros: 'nπ where n is integer',
// // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // //       minima: 'None (unbounded)',
// // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // // // //       derivative: 'sec²(x)',
// // // // // // // //       integral: '-ln|cos(x)| + C'
// // // // // // // //     },
// // // // // // // //     csc: {
// // // // // // // //       fullName: 'Cosecant',
// // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // //       period: '2π (360°)',
// // // // // // // //       zeros: 'None',
// // // // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // // // //       derivative: '-csc(x)cot(x)',
// // // // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // // // //     },
// // // // // // // //     sec: {
// // // // // // // //       fullName: 'Secant',
// // // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // // //       period: '2π (360°)',
// // // // // // // //       zeros: 'None',
// // // // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // // // //       derivative: 'sec(x)tan(x)',
// // // // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // // // //     },
// // // // // // // //     cot: {
// // // // // // // //       fullName: 'Cotangent',
// // // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // // //       range: 'All real numbers',
// // // // // // // //       period: 'π (180°)',
// // // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // // //       maxima: 'None (unbounded)',
// // // // // // // //       minima: 'None (unbounded)',
// // // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // // // //       derivative: '-csc²(x)',
// // // // // // // //       integral: 'ln|sin(x)| + C'
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const getAngleSpecificData = (angleValue, unitType) => {
// // // // // // // //     const num = parseFloat(angleValue);
// // // // // // // //     if (isNaN(num)) return null;

// // // // // // // //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// // // // // // // //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// // // // // // // //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// // // // // // // //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// // // // // // // //     const specialAngles = {
// // // // // // // //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }},
// // // // // // // //       30: { name: '30°', description: 'Special angle - π/6 radians, 30-60-90 triangle', exact: { sin: '1/2', cos: '√3/2', tan: '1/√3' }},
// // // // // // // //       45: { name: '45°', description: 'Special angle - π/4 radians, 45-45-90 triangle', exact: { sin: '√2/2', cos: '√2/2', tan: '1' }},
// // // // // // // //       60: { name: '60°', description: 'Special angle - π/3 radians, 30-60-90 triangle', exact: { sin: '√3/2', cos: '1/2', tan: '√3' }},
// // // // // // // //       90: { name: '90°', description: 'Right angle - π/2 radians, on positive y-axis', exact: { sin: '1', cos: '0', tan: 'undefined' }},
// // // // // // // //       120: { name: '120°', description: 'Special angle - 2π/3 radians, 180° - 60°', exact: { sin: '√3/2', cos: '-1/2', tan: '-√3' }},
// // // // // // // //       135: { name: '135°', description: 'Special angle - 3π/4 radians, 180° - 45°', exact: { sin: '√2/2', cos: '-√2/2', tan: '-1' }},
// // // // // // // //       150: { name: '150°', description: 'Special angle - 5π/6 radians, 180° - 30°', exact: { sin: '1/2', cos: '-√3/2', tan: '-1/√3' }},
// // // // // // // //       180: { name: '180°', description: 'Straight angle - π radians, on negative x-axis', exact: { sin: '0', cos: '-1', tan: '0' }},
// // // // // // // //       270: { name: '270°', description: 'Three-quarter turn - 3π/2 radians, on negative y-axis', exact: { sin: '-1', cos: '0', tan: 'undefined' }},
// // // // // // // //       360: { name: '360°', description: 'Full rotation - 2π radians, back to positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }}
// // // // // // // //     };

// // // // // // // //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// // // // // // // //     return {
// // // // // // // //       originalAngle: angleValue,
// // // // // // // //       degreeValue: degreeAngle.toFixed(2),
// // // // // // // //       radianValue: radianAngle.toFixed(5),
// // // // // // // //       normalizedDegree: normalizedDeg.toFixed(1),
// // // // // // // //       quadrant,
// // // // // // // //       isSpecial: !!isSpecialAngle,
// // // // // // // //       specialInfo: isSpecialAngle,
// // // // // // // //       complement: normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null,
// // // // // // // //       supplement: normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null,
// // // // // // // //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// // // // // // // //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// // // // // // // //       referenceAngle: (() => {
// // // // // // // //         if (normalizedDeg <= 90) return normalizedDeg.toFixed(1);
// // // // // // // //         if (normalizedDeg <= 180) return (180 - normalizedDeg).toFixed(1);
// // // // // // // //         if (normalizedDeg <= 270) return (normalizedDeg - 180).toFixed(1);
// // // // // // // //         return (360 - normalizedDeg).toFixed(1);
// // // // // // // //       })(),
// // // // // // // //       quadrantSigns: {
// // // // // // // //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// // // // // // // //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// // // // // // // //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// // // // // // // //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// // // // // // // //       }[quadrant]
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   const formatValue = (value) => {
// // // // // // // //     if (value === null) return 'Undefined';
// // // // // // // //     if (Number.isNaN(value)) return '...';
// // // // // // // //     return typeof value === 'number' ? value.toFixed(5) : value;
// // // // // // // //   };

// // // // // // // //   const mainTabStyle = (isActive) => ({
// // // // // // // //     padding: '12px 24px',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // // // //     color: isActive ? 'white' : '#333',
// // // // // // // //     border: 'none',
// // // // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // // // //     fontSize: '1rem',
// // // // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //     minWidth: '80px',
// // // // // // // //     textTransform: 'uppercase'
// // // // // // // //   });

// // // // // // // //   const innerTabStyle = (isActive) => ({
// // // // // // // //     padding: '8px 16px',
// // // // // // // //     margin: '0 4px',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// // // // // // // //     color: isActive ? 'white' : '#4a90e2',
// // // // // // // //     border: isActive ? 'none' : '1px solid #4a90e2',
// // // // // // // //     borderRadius: '20px',
// // // // // // // //     fontSize: '0.9rem',
// // // // // // // //     fontWeight: '500',
// // // // // // // //     transition: 'all 0.2s ease'
// // // // // // // //   });

// // // // // // // //   const activeInfo = functionInfo[selectedFunction] || functionInfo.sin;
// // // // // // // //   const angleData = getAngleSpecificData(angle, units);

// // // // // // // //   // Reset inner tab when function changes
// // // // // // // //   useEffect(() => {
// // // // // // // //     setInnerTab('angle-analysis');
// // // // // // // //   }, [selectedFunction]);

// // // // // // // //   const renderAngleAnalysis = () => {
// // // // // // // //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// // // // // // // //     return (
// // // // // // // //       <div>
// // // // // // // //         {/* Current angle header - exact format from document */}
// // // // // // // //         <div style={{
// // // // // // // //           display: 'flex',
// // // // // // // //           justifyContent: 'space-between',
// // // // // // // //           alignItems: 'center',
// // // // // // // //           marginBottom: '20px',
// // // // // // // //           padding: '15px',
// // // // // // // //           backgroundColor: '#e8f4fd',
// // // // // // // //           borderRadius: '8px',
// // // // // // // //           border: '1px solid #1d6bd8'
// // // // // // // //         }}>
// // // // // // // //           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
// // // // // // // //             Angle: {angleData.originalAngle}° Analysis
// // // // // // // //           </h2>
// // // // // // // //           <div style={{
// // // // // // // //             backgroundColor: '#1d6bd8',
// // // // // // // //             color: 'white',
// // // // // // // //             padding: '8px 16px',
// // // // // // // //             borderRadius: '6px',
// // // // // // // //             fontSize: '1.2rem',
// // // // // // // //             fontWeight: 'bold'
// // // // // // // //           }}>
// // // // // // // //             {selectedFunction}({angleData.originalAngle}°) = {formatValue(trigoData[selectedFunction])}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Special angle info */}
// // // // // // // //         {angleData.isSpecial && (
// // // // // // // //           <div style={{
// // // // // // // //             padding: '15px',
// // // // // // // //             backgroundColor: '#d4edda',
// // // // // // // //             border: '1px solid #c3e6cb',
// // // // // // // //             borderRadius: '6px',
// // // // // // // //             marginBottom: '15px'
// // // // // // // //           }}>
// // // // // // // //             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
// // // // // // // //             <p style={{ margin: '0 0 8px 0' }}><strong>{angleData.specialInfo.description}</strong></p>
// // // // // // // //             <p style={{ margin: 0 }}>
// // // // // // // //               <strong>Exact value:</strong> {selectedFunction}({angleData.originalAngle}°) = {angleData.specialInfo.exact[selectedFunction]}
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Key angle data in grid - exact format from document */}
// // // // // // // //         <div style={{
// // // // // // // //           display: 'grid',
// // // // // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// // // // // // // //           gap: '15px',
// // // // // // // //           fontSize: '0.95rem'
// // // // // // // //         }}>
// // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// // // // // // // //             Q{angleData.quadrant} - All {selectedFunction} values are <span style={{color: angleData.quadrantSigns[selectedFunction] === '+' ? 'green' : 'red', fontWeight: 'bold'}}>{angleData.quadrantSigns[selectedFunction] === '+' ? 'POSITIVE' : 'NEGATIVE'}</span>
// // // // // // // //           </div>

// // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// // // // // // // //             {angleData.referenceAngle}° (acute equivalent)
// // // // // // // //           </div>

// // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
// // // // // // // //             {angleData.degreeValue}° = {angleData.radianValue} rad
// // // // // // // //           </div>

// // // // // // // //           {angleData.complement && (
// // // // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // //               <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// // // // // // // //               90° - {angleData.originalAngle}° = {angleData.complement}°
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           {angleData.supplement && (
// // // // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // //               <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// // // // // // // //               180° - {angleData.originalAngle}° = {angleData.supplement}°
// // // // // // // //             </div>
// // // // // // // //           )}

// // // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // // //             <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
// // // // // // // //             {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Function-specific insight - from document */}
// // // // // // // //         <div style={{
// // // // // // // //           marginTop: '15px',
// // // // // // // //           padding: '12px',
// // // // // // // //           backgroundColor: '#fff3cd',
// // // // // // // //           border: '1px solid #ffeaa7',
// // // // // // // //           borderRadius: '6px'
// // // // // // // //         }}>
// // // // // // // //           <strong>💡 Insight:</strong> At {angleData.originalAngle}°, {selectedFunction} = {formatValue(trigoData[selectedFunction])} because you're in quadrant {angleData.quadrant} where {selectedFunction} is {angleData.quadrantSigns[selectedFunction] === '+' ? 'positive' : 'negative'}.
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   const renderGeneralInfo = () => (
// // // // // // // //     <div style={{
// // // // // // // //       display: 'grid',
// // // // // // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // // // // // //       gap: '16px',
// // // // // // // //       fontSize: '0.95rem',
// // // // // // // //       lineHeight: '1.6'
// // // // // // // //     }}>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // // // //         {activeInfo.domain}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // // // //         {activeInfo.range}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // // // //         {activeInfo.period}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // // // //         {activeInfo.zeros}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // // // //         {activeInfo.maxima}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // // // //         {activeInfo.minima}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // // // //         {activeInfo.asymptotes}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // // // //         {activeInfo.evenOdd}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // // // //         d/dx [{selectedFunction}(x)] = {activeInfo.derivative}
// // // // // // // //       </div>
// // // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // // //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // // // //         ∫ {selectedFunction}(x) dx = {activeInfo.integral}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );

// // // // // // // //   const renderGraph = () => (
// // // // // // // //     <div style={{
// // // // // // // //       display: 'flex',
// // // // // // // //       alignItems: 'center',
// // // // // // // //       justifyContent: 'center',
// // // // // // // //       height: '200px',
// // // // // // // //       backgroundColor: '#f8f9fa',
// // // // // // // //       borderRadius: '8px',
// // // // // // // //       border: '2px dashed #ddd',
// // // // // // // //       color: '#666',
// // // // // // // //       fontSize: '1.1rem'
// // // // // // // //     }}>
// // // // // // // //       📊 {activeInfo.fullName} function graph will be displayed here
// // // // // // // //     </div>
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <div style={{ 
// // // // // // // //       width: '100%',
// // // // // // // //       height: '50vh',
// // // // // // // //       margin: '20px 0',
// // // // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // // // //       border: '1px solid #ddd',
// // // // // // // //       borderRadius: '8px',
// // // // // // // //       overflow: 'hidden',
// // // // // // // //       backgroundColor: 'white'
// // // // // // // //     }}>
// // // // // // // //       {/* Main function tabs */}
// // // // // // // //       <div style={{
// // // // // // // //         display: 'flex',
// // // // // // // //         backgroundColor: '#f9f9f9',
// // // // // // // //         borderBottom: '2px solid #1d6bd8',
// // // // // // // //         flexWrap: 'wrap'
// // // // // // // //       }}>
// // // // // // // //         {Object.keys(trigoData).map((func) => (
// // // // // // // //           <button
// // // // // // // //             key={func}
// // // // // // // //             style={mainTabStyle(selectedFunction === func)}
// // // // // // // //             onClick={() => onFunctionSelect(func)}
// // // // // // // //           >
// // // // // // // //             {func}
// // // // // // // //           </button>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Inner tabs */}
// // // // // // // //       <div style={{
// // // // // // // //         padding: '12px 20px',
// // // // // // // //         backgroundColor: '#fafafa',
// // // // // // // //         borderBottom: '1px solid #eee'
// // // // // // // //       }}>
// // // // // // // //         <button
// // // // // // // //           style={innerTabStyle(innerTab === 'angle-analysis')}
// // // // // // // //           onClick={() => setInnerTab('angle-analysis')}
// // // // // // // //         >
// // // // // // // //           Angle Analysis
// // // // // // // //         </button>
// // // // // // // //         <button
// // // // // // // //           style={innerTabStyle(innerTab === 'general-info')}
// // // // // // // //           onClick={() => setInnerTab('general-info')}
// // // // // // // //         >
// // // // // // // //           General Info
// // // // // // // //         </button>
// // // // // // // //         <button
// // // // // // // //           style={innerTabStyle(innerTab === 'graph')}
// // // // // // // //           onClick={() => setInnerTab('graph')}
// // // // // // // //         >
// // // // // // // //           Graph
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Content area */}
// // // // // // // //       <div style={{
// // // // // // // //         padding: '20px',
// // // // // // // //         height: 'calc(50vh - 130px)',
// // // // // // // //         overflow: 'hidden',
// // // // // // // //         backgroundColor: 'white'
// // // // // // // //       }}>
// // // // // // // //         {innerTab === 'angle-analysis' && renderAngleAnalysis()}
// // // // // // // //         {innerTab === 'general-info' && renderGeneralInfo()}
// // // // // // // //         {innerTab === 'graph' && renderGraph()}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default TrigoPanel;


// // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // // // //   const [outerTab, setOuterTab] = useState('sin'); // Outer tab includes functions + angle-analysis
// // // // // // //   const [innerTab, setInnerTab] = useState('general-info'); // Inner tab for function-specific content

// // // // // // //   const functionInfo = {
// // // // // // //     sin: {
// // // // // // //       fullName: 'Sine',
// // // // // // //       domain: 'All real numbers',
// // // // // // //       range: '[-1, 1]',
// // // // // // //       period: '2π (360°)',
// // // // // // //       zeros: 'nπ where n is integer',
// // // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // // //       asymptotes: 'None',
// // // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // // //       derivative: 'cos(x)',
// // // // // // //       integral: '-cos(x) + C'
// // // // // // //     },
// // // // // // //     cos: {
// // // // // // //       fullName: 'Cosine',
// // // // // // //       domain: 'All real numbers',
// // // // // // //       range: '[-1, 1]',
// // // // // // //       period: '2π (360°)',
// // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // //       maxima: '2nπ (360°n)',
// // // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // // //       asymptotes: 'None',
// // // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // // //       derivative: '-sin(x)',
// // // // // // //       integral: 'sin(x) + C'
// // // // // // //     },
// // // // // // //     tan: {
// // // // // // //       fullName: 'Tangent',
// // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // //       range: 'All real numbers',
// // // // // // //       period: 'π (180°)',
// // // // // // //       zeros: 'nπ where n is integer',
// // // // // // //       maxima: 'None (unbounded)',
// // // // // // //       minima: 'None (unbounded)',
// // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // // //       derivative: 'sec²(x)',
// // // // // // //       integral: '-ln|cos(x)| + C'
// // // // // // //     },
// // // // // // //     csc: {
// // // // // // //       fullName: 'Cosecant',
// // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // //       period: '2π (360°)',
// // // // // // //       zeros: 'None',
// // // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // // //       derivative: '-csc(x)cot(x)',
// // // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // // //     },
// // // // // // //     sec: {
// // // // // // //       fullName: 'Secant',
// // // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // // //       period: '2π (360°)',
// // // // // // //       zeros: 'None',
// // // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // // //       derivative: 'sec(x)tan(x)',
// // // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // // //     },
// // // // // // //     cot: {
// // // // // // //       fullName: 'Cotangent',
// // // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // // //       range: 'All real numbers',
// // // // // // //       period: 'π (180°)',
// // // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // // //       maxima: 'None (unbounded)',
// // // // // // //       minima: 'None (unbounded)',
// // // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // // //       derivative: '-csc²(x)',
// // // // // // //       integral: 'ln|sin(x)| + C'
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const getAngleSpecificData = (angleValue, unitType) => {
// // // // // // //     const num = parseFloat(angleValue);
// // // // // // //     if (isNaN(num)) return null;

// // // // // // //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// // // // // // //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// // // // // // //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// // // // // // //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// // // // // // //     const specialAngles = {
// // // // // // //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }},
// // // // // // //       30: { name: '30°', description: 'Special angle - π/6 radians, 30-60-90 triangle', exact: { sin: '1/2', cos: '√3/2', tan: '1/√3' }},
// // // // // // //       45: { name: '45°', description: 'Special angle - π/4 radians, 45-45-90 triangle', exact: { sin: '√2/2', cos: '√2/2', tan: '1' }},
// // // // // // //       60: { name: '60°', description: 'Special angle - π/3 radians, 30-60-90 triangle', exact: { sin: '√3/2', cos: '1/2', tan: '√3' }},
// // // // // // //       90: { name: '90°', description: 'Right angle - π/2 radians, on positive y-axis', exact: { sin: '1', cos: '0', tan: 'undefined' }},
// // // // // // //       120: { name: '120°', description: 'Special angle - 2π/3 radians, 180° - 60°', exact: { sin: '√3/2', cos: '-1/2', tan: '-√3' }},
// // // // // // //       135: { name: '135°', description: 'Special angle - 3π/4 radians, 180° - 45°', exact: { sin: '√2/2', cos: '-√2/2', tan: '-1' }},
// // // // // // //       150: { name: '150°', description: 'Special angle - 5π/6 radians, 180° - 30°', exact: { sin: '1/2', cos: '-√3/2', tan: '-1/√3' }},
// // // // // // //       180: { name: '180°', description: 'Straight angle - π radians, on negative x-axis', exact: { sin: '0', cos: '-1', tan: '0' }},
// // // // // // //       270: { name: '270°', description: 'Three-quarter turn - 3π/2 radians, on negative y-axis', exact: { sin: '-1', cos: '0', tan: 'undefined' }},
// // // // // // //       360: { name: '360°', description: 'Full rotation - 2π radians, back to positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }}
// // // // // // //     };

// // // // // // //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// // // // // // //     return {
// // // // // // //       originalAngle: angleValue,
// // // // // // //       degreeValue: degreeAngle.toFixed(2),
// // // // // // //       radianValue: radianAngle.toFixed(5),
// // // // // // //       normalizedDegree: normalizedDeg.toFixed(1),
// // // // // // //       quadrant,
// // // // // // //       isSpecial: !!isSpecialAngle,
// // // // // // //       specialInfo: isSpecialAngle,
// // // // // // //       complement: normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null,
// // // // // // //       supplement: normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null,
// // // // // // //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// // // // // // //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// // // // // // //       referenceAngle: (() => {
// // // // // // //         if (normalizedDeg <= 90) return normalizedDeg.toFixed(1);
// // // // // // //         if (normalizedDeg <= 180) return (180 - normalizedDeg).toFixed(1);
// // // // // // //         if (normalizedDeg <= 270) return (normalizedDeg - 180).toFixed(1);
// // // // // // //         return (360 - normalizedDeg).toFixed(1);
// // // // // // //       })(),
// // // // // // //       quadrantSigns: {
// // // // // // //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// // // // // // //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// // // // // // //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// // // // // // //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// // // // // // //       }[quadrant]
// // // // // // //     };
// // // // // // //   };

// // // // // // //   const formatValue = (value) => {
// // // // // // //     if (value === null) return 'Undefined';
// // // // // // //     if (Number.isNaN(value)) return '...';
// // // // // // //     return typeof value === 'number' ? value.toFixed(5) : value;
// // // // // // //   };

// // // // // // //   const outerTabStyle = (isActive) => ({
// // // // // // //     padding: '12px 24px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // // //     color: isActive ? 'white' : '#333',
// // // // // // //     border: 'none',
// // // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // // //     fontSize: '1rem',
// // // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //     minWidth: '80px',
// // // // // // //     textTransform: 'uppercase'
// // // // // // //   });

// // // // // // //   const innerTabStyle = (isActive) => ({
// // // // // // //     padding: '8px 16px',
// // // // // // //     margin: '0 4px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// // // // // // //     color: isActive ? 'white' : '#4a90e2',
// // // // // // //     border: isActive ? 'none' : '1px solid #4a90e2',
// // // // // // //     borderRadius: '20px',
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     fontWeight: '500',
// // // // // // //     transition: 'all 0.2s ease'
// // // // // // //   });

// // // // // // //   const activeInfo = functionInfo[outerTab] || functionInfo.sin;
// // // // // // //   const angleData = getAngleSpecificData(angle, units);

// // // // // // //   // Reset inner tab when outer tab changes to a function
// // // // // // //   useEffect(() => {
// // // // // // //     if (outerTab !== 'angle-analysis') {
// // // // // // //       setInnerTab('general-info');
// // // // // // //     }
// // // // // // //   }, [outerTab]);

// // // // // // //   // Sync with parent component selection
// // // // // // //   useEffect(() => {
// // // // // // //     if (selectedFunction && outerTab !== 'angle-analysis') {
// // // // // // //       setOuterTab(selectedFunction);
// // // // // // //     }
// // // // // // //   }, [selectedFunction]);

// // // // // // //   const handleOuterTabClick = (tab) => {
// // // // // // //     setOuterTab(tab);
// // // // // // //     if (tab !== 'angle-analysis') {
// // // // // // //       onFunctionSelect(tab);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const renderAngleAnalysis = () => {
// // // // // // //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// // // // // // //     return (
// // // // // // //       <div>
// // // // // // //         <div style={{
// // // // // // //           display: 'flex',
// // // // // // //           justifyContent: 'space-between',
// // // // // // //           alignItems: 'center',
// // // // // // //           marginBottom: '20px',
// // // // // // //           padding: '15px',
// // // // // // //           backgroundColor: '#e8f4fd',
// // // // // // //           borderRadius: '8px',
// // // // // // //           border: '1px solid #1d6bd8'
// // // // // // //         }}>
// // // // // // //           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
// // // // // // //             Angle: {angleData.originalAngle}° Analysis
// // // // // // //           </h2>
// // // // // // //           <div style={{
// // // // // // //             backgroundColor: '#1d6bd8',
// // // // // // //             color: 'white',
// // // // // // //             padding: '8px 16px',
// // // // // // //             borderRadius: '6px',
// // // // // // //             fontSize: '1.2rem',
// // // // // // //             fontWeight: 'bold'
// // // // // // //           }}>
// // // // // // //             Current angle: {angleData.originalAngle}°
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {angleData.isSpecial && (
// // // // // // //           <div style={{
// // // // // // //             padding: '15px',
// // // // // // //             backgroundColor: '#d4edda',
// // // // // // //             border: '1px solid #c3e6cb',
// // // // // // //             borderRadius: '6px',
// // // // // // //             marginBottom: '15px'
// // // // // // //           }}>
// // // // // // //             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
// // // // // // //             <p style={{ margin: '0 0 8px 0' }}><strong>{angleData.specialInfo.description}</strong></p>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         <div style={{
// // // // // // //           display: 'grid',
// // // // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// // // // // // //           gap: '15px',
// // // // // // //           fontSize: '0.95rem'
// // // // // // //         }}>
// // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // //             <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// // // // // // //             Q{angleData.quadrant}
// // // // // // //           </div>

// // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // //             <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// // // // // // //             {angleData.referenceAngle}° (acute equivalent)
// // // // // // //           </div>

// // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // //             <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
// // // // // // //             {angleData.degreeValue}° = {angleData.radianValue} rad
// // // // // // //           </div>

// // // // // // //           {angleData.complement && (
// // // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // //               <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// // // // // // //               90° - {angleData.originalAngle}° = {angleData.complement}°
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {angleData.supplement && (
// // // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // //               <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// // // // // // //               180° - {angleData.originalAngle}° = {angleData.supplement}°
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // // // // //             <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
// // // // // // //             {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div style={{
// // // // // // //           marginTop: '15px',
// // // // // // //           padding: '12px',
// // // // // // //           backgroundColor: '#fff3cd',
// // // // // // //           border: '1px solid #ffeaa7',
// // // // // // //           borderRadius: '6px'
// // // // // // //         }}>
// // // // // // //           <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const renderGeneralInfo = () => (
// // // // // // //     <div style={{
// // // // // // //       display: 'grid',
// // // // // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // // // // //       gap: '16px',
// // // // // // //       fontSize: '0.95rem',
// // // // // // //       lineHeight: '1.6'
// // // // // // //     }}>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // // //         {activeInfo.domain}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // // //         {activeInfo.range}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // // //         {activeInfo.period}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // // //         {activeInfo.zeros}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // // //         {activeInfo.maxima}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // // //         {activeInfo.minima}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // // //         {activeInfo.asymptotes}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // // //         {activeInfo.evenOdd}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // // //         d/dx [{outerTab}(x)] = {activeInfo.derivative}
// // // // // // //       </div>
// // // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // // //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // // //         ∫ {outerTab}(x) dx = {activeInfo.integral}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   const renderGraph = () => (
// // // // // // //     <div style={{
// // // // // // //       display: 'flex',
// // // // // // //       alignItems: 'center',
// // // // // // //       justifyContent: 'center',
// // // // // // //       height: '200px',
// // // // // // //       backgroundColor: '#f8f9fa',
// // // // // // //       borderRadius: '8px',
// // // // // // //       border: '2px dashed #ddd',
// // // // // // //       color: '#666',
// // // // // // //       fontSize: '1.1rem'
// // // // // // //     }}>
// // // // // // //       📊 {activeInfo.fullName} function graph will be displayed here
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div style={{ 
// // // // // // //       width: '100%',
// // // // // // //       height: '50vh',
// // // // // // //       margin: '20px 0',
// // // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // // //       border: '1px solid #ddd',
// // // // // // //       borderRadius: '8px',
// // // // // // //       overflow: 'hidden',
// // // // // // //       backgroundColor: 'white'
// // // // // // //     }}>
// // // // // // //       {/* Outer tabs: functions + angle analysis */}
// // // // // // //       <div style={{
// // // // // // //         display: 'flex',
// // // // // // //         backgroundColor: '#f9f9f9',
// // // // // // //         borderBottom: '2px solid #1d6bd8',
// // // // // // //         flexWrap: 'wrap'
// // // // // // //       }}>
// // // // // // //         {Object.keys(trigoData).map((func) => (
// // // // // // //           <button
// // // // // // //             key={func}
// // // // // // //             style={outerTabStyle(outerTab === func)}
// // // // // // //             onClick={() => handleOuterTabClick(func)}
// // // // // // //           >
// // // // // // //             {func}
// // // // // // //           </button>
// // // // // // //         ))}
// // // // // // //         <button
// // // // // // //           style={outerTabStyle(outerTab === 'angle-analysis')}
// // // // // // //           onClick={() => handleOuterTabClick('angle-analysis')}
// // // // // // //         >
// // // // // // //           ANGLE ANALYSIS
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Inner tabs - only show for functions, not angle analysis */}
// // // // // // //       {outerTab !== 'angle-analysis' && (
// // // // // // //         <div style={{
// // // // // // //           padding: '12px 20px',
// // // // // // //           backgroundColor: '#fafafa',
// // // // // // //           borderBottom: '1px solid #eee'
// // // // // // //         }}>
// // // // // // //           <button
// // // // // // //             style={innerTabStyle(innerTab === 'general-info')}
// // // // // // //             onClick={() => setInnerTab('general-info')}
// // // // // // //           >
// // // // // // //             General Info
// // // // // // //           </button>
// // // // // // //           <button
// // // // // // //             style={innerTabStyle(innerTab === 'graph')}
// // // // // // //             onClick={() => setInnerTab('graph')}
// // // // // // //           >
// // // // // // //             Graph
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Content area */}
// // // // // // //       <div style={{
// // // // // // //         padding: '20px',
// // // // // // //         height: outerTab === 'angle-analysis' ? 'calc(50vh - 80px)' : 'calc(50vh - 130px)',
// // // // // // //         overflow: 'hidden',
// // // // // // //         backgroundColor: 'white'
// // // // // // //       }}>
// // // // // // //         {outerTab === 'angle-analysis' ? renderAngleAnalysis() : (
// // // // // // //           <>
// // // // // // //             {innerTab === 'general-info' && renderGeneralInfo()}
// // // // // // //             {innerTab === 'graph' && renderGraph()}
// // // // // // //           </>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TrigoPanel;


// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import Link from 'next/link';

// // // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // // //   const [outerTab, setOuterTab] = useState('sin'); // Outer tab includes functions + angle-analysis
// // // // // //   const [innerTab, setInnerTab] = useState('general-info'); // Inner tab for function-specific content

// // // // // //   const functionInfo = {
// // // // // //     sin: {
// // // // // //       fullName: 'Sine',
// // // // // //       domain: 'All real numbers',
// // // // // //       range: '[-1, 1]',
// // // // // //       period: '2π (360°)',
// // // // // //       zeros: 'nπ where n is integer',
// // // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // // //       asymptotes: 'None',
// // // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // // //       derivative: 'cos(x)',
// // // // // //       integral: '-cos(x) + C'
// // // // // //     },
// // // // // //     cos: {
// // // // // //       fullName: 'Cosine',
// // // // // //       domain: 'All real numbers',
// // // // // //       range: '[-1, 1]',
// // // // // //       period: '2π (360°)',
// // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // //       maxima: '2nπ (360°n)',
// // // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // // //       asymptotes: 'None',
// // // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // // //       derivative: '-sin(x)',
// // // // // //       integral: 'sin(x) + C'
// // // // // //     },
// // // // // //     tan: {
// // // // // //       fullName: 'Tangent',
// // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // //       range: 'All real numbers',
// // // // // //       period: 'π (180°)',
// // // // // //       zeros: 'nπ where n is integer',
// // // // // //       maxima: 'None (unbounded)',
// // // // // //       minima: 'None (unbounded)',
// // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // // //       derivative: 'sec²(x)',
// // // // // //       integral: '-ln|cos(x)| + C'
// // // // // //     },
// // // // // //     csc: {
// // // // // //       fullName: 'Cosecant',
// // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // //       period: '2π (360°)',
// // // // // //       zeros: 'None',
// // // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // // //       derivative: '-csc(x)cot(x)',
// // // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // // //     },
// // // // // //     sec: {
// // // // // //       fullName: 'Secant',
// // // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // // //       period: '2π (360°)',
// // // // // //       zeros: 'None',
// // // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // // //       derivative: 'sec(x)tan(x)',
// // // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // // //     },
// // // // // //     cot: {
// // // // // //       fullName: 'Cotangent',
// // // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // // //       range: 'All real numbers',
// // // // // //       period: 'π (180°)',
// // // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // // //       maxima: 'None (unbounded)',
// // // // // //       minima: 'None (unbounded)',
// // // // // //       asymptotes: 'x = nπ (vertical)',
// // // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // // //       derivative: '-csc²(x)',
// // // // // //       integral: 'ln|sin(x)| + C'
// // // // // //     }
// // // // // //   };

// // // // // //   const getAngleSpecificData = (angleValue, unitType) => {
// // // // // //     const num = parseFloat(angleValue);
// // // // // //     if (isNaN(num)) return null;

// // // // // //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// // // // // //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// // // // // //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// // // // // //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// // // // // //     const specialAngles = {
// // // // // //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }},
// // // // // //       30: { name: '30°', description: 'Special angle - π/6 radians, 30-60-90 triangle', exact: { sin: '1/2', cos: '√3/2', tan: '1/√3' }},
// // // // // //       45: { name: '45°', description: 'Special angle - π/4 radians, 45-45-90 triangle', exact: { sin: '√2/2', cos: '√2/2', tan: '1' }},
// // // // // //       60: { name: '60°', description: 'Special angle - π/3 radians, 30-60-90 triangle', exact: { sin: '√3/2', cos: '1/2', tan: '√3' }},
// // // // // //       90: { name: '90°', description: 'Right angle - π/2 radians, on positive y-axis', exact: { sin: '1', cos: '0', tan: 'undefined' }},
// // // // // //       120: { name: '120°', description: 'Special angle - 2π/3 radians, 180° - 60°', exact: { sin: '√3/2', cos: '-1/2', tan: '-√3' }},
// // // // // //       135: { name: '135°', description: 'Special angle - 3π/4 radians, 180° - 45°', exact: { sin: '√2/2', cos: '-√2/2', tan: '-1' }},
// // // // // //       150: { name: '150°', description: 'Special angle - 5π/6 radians, 180° - 30°', exact: { sin: '1/2', cos: '-√3/2', tan: '-1/√3' }},
// // // // // //       180: { name: '180°', description: 'Straight angle - π radians, on negative x-axis', exact: { sin: '0', cos: '-1', tan: '0' }},
// // // // // //       270: { name: '270°', description: 'Three-quarter turn - 3π/2 radians, on negative y-axis', exact: { sin: '-1', cos: '0', tan: 'undefined' }},
// // // // // //       360: { name: '360°', description: 'Full rotation - 2π radians, back to positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }}
// // // // // //     };

// // // // // //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// // // // // //     return {
// // // // // //       originalAngle: angleValue,
// // // // // //       degreeValue: degreeAngle.toFixed(2),
// // // // // //       radianValue: radianAngle.toFixed(5),
// // // // // //       normalizedDegree: normalizedDeg.toFixed(1),
// // // // // //       quadrant,
// // // // // //       isSpecial: !!isSpecialAngle,
// // // // // //       specialInfo: isSpecialAngle,
// // // // // //       complement: normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null,
// // // // // //       supplement: normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null,
// // // // // //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// // // // // //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// // // // // //       referenceAngle: (() => {
// // // // // //         if (normalizedDeg <= 90) return normalizedDeg.toFixed(1);
// // // // // //         if (normalizedDeg <= 180) return (180 - normalizedDeg).toFixed(1);
// // // // // //         if (normalizedDeg <= 270) return (normalizedDeg - 180).toFixed(1);
// // // // // //         return (360 - normalizedDeg).toFixed(1);
// // // // // //       })(),
// // // // // //       quadrantSigns: {
// // // // // //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// // // // // //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// // // // // //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// // // // // //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// // // // // //       }[quadrant]
// // // // // //     };
// // // // // //   };

// // // // // //   const formatValue = (value) => {
// // // // // //     if (value === null) return 'Undefined';
// // // // // //     if (Number.isNaN(value)) return '...';
// // // // // //     return typeof value === 'number' ? value.toFixed(5) : value;
// // // // // //   };

// // // // // //   const outerTabStyle = (isActive) => ({
// // // // // //     padding: '12px 24px',
// // // // // //     cursor: 'pointer',
// // // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // // //     color: isActive ? 'white' : '#333',
// // // // // //     border: 'none',
// // // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // // //     fontSize: '1rem',
// // // // // //     fontWeight: isActive ? '600' : '400',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     minWidth: '80px',
// // // // // //     textTransform: 'uppercase'
// // // // // //   });

// // // // // //   const innerTabStyle = (isActive) => ({
// // // // // //     padding: '8px 16px',
// // // // // //     margin: '0 4px',
// // // // // //     cursor: 'pointer',
// // // // // //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// // // // // //     color: isActive ? 'white' : '#4a90e2',
// // // // // //     border: isActive ? 'none' : '1px solid #4a90e2',
// // // // // //     borderRadius: '20px',
// // // // // //     fontSize: '0.9rem',
// // // // // //     fontWeight: '500',
// // // // // //     transition: 'all 0.2s ease'
// // // // // //   });

// // // // // //   const activeInfo = functionInfo[outerTab] || functionInfo.sin;
// // // // // //   const angleData = getAngleSpecificData(angle, units);

// // // // // //   // Reset inner tab when outer tab changes to a function
// // // // // //   useEffect(() => {
// // // // // //     if (outerTab !== 'angle-analysis') {
// // // // // //       setInnerTab('general-info');
// // // // // //     }
// // // // // //   }, [outerTab]);

// // // // // //   // Sync with parent component selection
// // // // // //   useEffect(() => {
// // // // // //     if (selectedFunction && outerTab !== 'angle-analysis') {
// // // // // //       setOuterTab(selectedFunction);
// // // // // //     }
// // // // // //   }, [selectedFunction]);

// // // // // //   const handleOuterTabClick = (tab) => {
// // // // // //     setOuterTab(tab);
// // // // // //     if (tab !== 'angle-analysis') {
// // // // // //       onFunctionSelect(tab);
// // // // // //     }
// // // // // //   };

// // // // // //   const renderAngleAnalysis = () => {
// // // // // //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// // // // // //     return (
// // // // // //       <div>
// // // // // //         <div style={{
// // // // // //           display: 'flex',
// // // // // //           justifyContent: 'space-between',
// // // // // //           alignItems: 'center',
// // // // // //           marginBottom: '20px',
// // // // // //           padding: '15px',
// // // // // //           backgroundColor: '#e8f4fd',
// // // // // //           borderRadius: '8px',
// // // // // //           border: '1px solid #1d6bd8'
// // // // // //         }}>
// // // // // //           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
// // // // // //             Angle: {angleData.originalAngle}° Analysis
// // // // // //           </h2>
// // // // // //           <div style={{
// // // // // //             backgroundColor: '#1d6bd8',
// // // // // //             color: 'white',
// // // // // //             padding: '8px 16px',
// // // // // //             borderRadius: '6px',
// // // // // //             fontSize: '1.2rem',
// // // // // //             fontWeight: 'bold'
// // // // // //           }}>
// // // // // //             Current angle: {angleData.originalAngle}°
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {angleData.isSpecial && (
// // // // // //           <div style={{
// // // // // //             padding: '15px',
// // // // // //             backgroundColor: '#d4edda',
// // // // // //             border: '1px solid #c3e6cb',
// // // // // //             borderRadius: '6px',
// // // // // //             marginBottom: '15px'
// // // // // //           }}>
// // // // // //             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
// // // // // //             <p style={{ margin: '0 0 8px 0' }}><strong>{angleData.specialInfo.description}</strong></p>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         <div style={{
// // // // // //           display: 'grid',
// // // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// // // // // //           gap: '15px',
// // // // // //           fontSize: '0.95rem'
// // // // // //         }}>
// // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // // //             <div>
// // // // // //               <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// // // // // //               Q{angleData.quadrant}
// // // // // //             </div>
// // // // // //             {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // // //               Learn more →
// // // // // //             </Link> */}
// // // // // //           </div>

// // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // // //             <div>
// // // // // //               <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// // // // // //               {angleData.referenceAngle}° (acute equivalent)
// // // // // //             </div>
// // // // // //             {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // // //               Learn more →
// // // // // //             </Link> */}
// // // // // //           </div>

// // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // // //             <div>
// // // // // //               <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
// // // // // //               {angleData.degreeValue}° = {angleData.radianValue} rad
// // // // // //             </div>
// // // // // //             <Link href="/converters/degree-radians" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // // //               Learn more →
// // // // // //             </Link>
// // // // // //           </div>

// // // // // //           {angleData.complement && (
// // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // // //               <div>
// // // // // //                 <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// // // // // //                 90° - {angleData.originalAngle}° = {angleData.complement}°
// // // // // //               </div>
// // // // // //               {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // // //                 Learn more →
// // // // // //               </Link> */}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {angleData.supplement && (
// // // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // // //               <div>
// // // // // //                 <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// // // // // //                 180° - {angleData.originalAngle}° = {angleData.supplement}°
// // // // // //               </div>
// // // // // //               {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // // //                 Learn more →
// // // // // //               </Link> */}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // // //             <div>
// // // // // //               <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
// // // // // //               {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// // // // // //             </div>
// // // // // //             {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // // //               Learn more →
// // // // // //             </Link> */}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div style={{
// // // // // //           marginTop: '15px',
// // // // // //           padding: '12px',
// // // // // //           backgroundColor: '#fff3cd',
// // // // // //           border: '1px solid #ffeaa7',
// // // // // //           borderRadius: '6px'
// // // // // //         }}>
// // // // // //           <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   const renderGeneralInfo = () => (
// // // // // //     <div style={{
// // // // // //       display: 'grid',
// // // // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // // // //       gap: '16px',
// // // // // //       fontSize: '0.95rem',
// // // // // //       lineHeight: '1.6'
// // // // // //     }}>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // // //         {activeInfo.domain}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // // //         {activeInfo.range}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // // //         {activeInfo.period}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // // //         {activeInfo.zeros}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // // //         {activeInfo.maxima}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // // //         {activeInfo.minima}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // // //         {activeInfo.asymptotes}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // // //         {activeInfo.evenOdd}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // // //         d/dx [{outerTab}(x)] = {activeInfo.derivative}
// // // // // //       </div>
// // // // // //       <div style={{ padding: '8px 0' }}>
// // // // // //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // // //         ∫ {outerTab}(x) dx = {activeInfo.integral}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );

// // // // // //   const renderGraph = () => (
// // // // // //     <div style={{
// // // // // //       display: 'flex',
// // // // // //       alignItems: 'center',
// // // // // //       justifyContent: 'center',
// // // // // //       height: '200px',
// // // // // //       backgroundColor: '#f8f9fa',
// // // // // //       borderRadius: '8px',
// // // // // //       border: '2px dashed #ddd',
// // // // // //       color: '#666',
// // // // // //       fontSize: '1.1rem'
// // // // // //     }}>
// // // // // //       📊 {activeInfo.fullName} function graph will be displayed here
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div style={{ 
// // // // // //       width: '100%',
// // // // // //       height: '50vh',
// // // // // //       margin: '20px 0',
// // // // // //       fontFamily: 'Arial, sans-serif',
// // // // // //       border: '1px solid #ddd',
// // // // // //       borderRadius: '8px',
// // // // // //       overflow: 'hidden',
// // // // // //       backgroundColor: 'white'
// // // // // //     }}>
// // // // // //       {/* Outer tabs: angle analysis first, then functions */}
// // // // // //       <div style={{
// // // // // //         display: 'flex',
// // // // // //         backgroundColor: '#f9f9f9',
// // // // // //         borderBottom: '2px solid #1d6bd8',
// // // // // //         flexWrap: 'wrap'
// // // // // //       }}>
// // // // // //         <button
// // // // // //           style={outerTabStyle(outerTab === 'angle-analysis')}
// // // // // //           onClick={() => handleOuterTabClick('angle-analysis')}
// // // // // //         >
// // // // // //           ANGLE ANALYSIS
// // // // // //         </button>
// // // // // //         {Object.keys(trigoData).map((func) => (
// // // // // //           <button
// // // // // //             key={func}
// // // // // //             style={outerTabStyle(outerTab === func)}
// // // // // //             onClick={() => handleOuterTabClick(func)}
// // // // // //           >
// // // // // //             {func}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Inner tabs - only show for functions, not angle analysis */}
// // // // // //       {outerTab !== 'angle-analysis' && (
// // // // // //         <div style={{
// // // // // //           padding: '12px 20px',
// // // // // //           backgroundColor: '#fafafa',
// // // // // //           borderBottom: '1px solid #eee'
// // // // // //         }}>
// // // // // //           <button
// // // // // //             style={innerTabStyle(innerTab === 'general-info')}
// // // // // //             onClick={() => setInnerTab('general-info')}
// // // // // //           >
// // // // // //             General Info
// // // // // //           </button>
// // // // // //           {/* <button
// // // // // //             style={innerTabStyle(innerTab === 'graph')}
// // // // // //             onClick={() => setInnerTab('graph')}
// // // // // //           >
// // // // // //             Graph
// // // // // //           </button> */}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Content area */}
// // // // // //       <div style={{
// // // // // //         padding: '20px',
// // // // // //         height: outerTab === 'angle-analysis' ? 'calc(50vh - 80px)' : 'calc(50vh - 130px)',
// // // // // //         overflow: 'hidden',
// // // // // //         backgroundColor: 'white'
// // // // // //       }}>
// // // // // //         {outerTab === 'angle-analysis' ? renderAngleAnalysis() : (
// // // // // //           <>
// // // // // //             {innerTab === 'general-info' && renderGeneralInfo()}
// // // // // //             {innerTab === 'graph' && renderGraph()}
// // // // // //           </>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TrigoPanel;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // // //   const [outerTab, setOuterTab] = useState('angle-analysis'); // Default to angle analysis
// // // // //   const [innerTab, setInnerTab] = useState('general-info'); // Inner tab for function-specific content

// // // // //   const functionInfo = {
// // // // //     sin: {
// // // // //       fullName: 'Sine',
// // // // //       domain: 'All real numbers',
// // // // //       range: '[-1, 1]',
// // // // //       period: '2π (360°)',
// // // // //       zeros: 'nπ where n is integer',
// // // // //       maxima: 'π/2 + 2nπ (90° + 360°n)',
// // // // //       minima: '3π/2 + 2nπ (270° + 360°n)',
// // // // //       asymptotes: 'None',
// // // // //       evenOdd: 'Odd function: sin(-x) = -sin(x)',
// // // // //       derivative: 'cos(x)',
// // // // //       integral: '-cos(x) + C'
// // // // //     },
// // // // //     cos: {
// // // // //       fullName: 'Cosine',
// // // // //       domain: 'All real numbers',
// // // // //       range: '[-1, 1]',
// // // // //       period: '2π (360°)',
// // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // //       maxima: '2nπ (360°n)',
// // // // //       minima: 'π + 2nπ (180° + 360°n)',
// // // // //       asymptotes: 'None',
// // // // //       evenOdd: 'Even function: cos(-x) = cos(x)',
// // // // //       derivative: '-sin(x)',
// // // // //       integral: 'sin(x) + C'
// // // // //     },
// // // // //     tan: {
// // // // //       fullName: 'Tangent',
// // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // //       range: 'All real numbers',
// // // // //       period: 'π (180°)',
// // // // //       zeros: 'nπ where n is integer',
// // // // //       maxima: 'None (unbounded)',
// // // // //       minima: 'None (unbounded)',
// // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // //       evenOdd: 'Odd function: tan(-x) = -tan(x)',
// // // // //       derivative: 'sec²(x)',
// // // // //       integral: '-ln|cos(x)| + C'
// // // // //     },
// // // // //     csc: {
// // // // //       fullName: 'Cosecant',
// // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // //       period: '2π (360°)',
// // // // //       zeros: 'None',
// // // // //       maxima: 'At sin(x) minima: |csc(x)| = 1',
// // // // //       minima: 'At sin(x) maxima: |csc(x)| = 1',
// // // // //       asymptotes: 'x = nπ (vertical)',
// // // // //       evenOdd: 'Odd function: csc(-x) = -csc(x)',
// // // // //       derivative: '-csc(x)cot(x)',
// // // // //       integral: '-ln|csc(x) + cot(x)| + C'
// // // // //     },
// // // // //     sec: {
// // // // //       fullName: 'Secant',
// // // // //       domain: 'x ≠ π/2 + nπ (x ≠ 90° + 180°n)',
// // // // //       range: '(-∞, -1] ∪ [1, ∞)',
// // // // //       period: '2π (360°)',
// // // // //       zeros: 'None',
// // // // //       maxima: 'At cos(x) minima: |sec(x)| = 1',
// // // // //       minima: 'At cos(x) maxima: |sec(x)| = 1',
// // // // //       asymptotes: 'x = π/2 + nπ (vertical)',
// // // // //       evenOdd: 'Even function: sec(-x) = sec(x)',
// // // // //       derivative: 'sec(x)tan(x)',
// // // // //       integral: 'ln|sec(x) + tan(x)| + C'
// // // // //     },
// // // // //     cot: {
// // // // //       fullName: 'Cotangent',
// // // // //       domain: 'x ≠ nπ (x ≠ 180°n)',
// // // // //       range: 'All real numbers',
// // // // //       period: 'π (180°)',
// // // // //       zeros: 'π/2 + nπ where n is integer',
// // // // //       maxima: 'None (unbounded)',
// // // // //       minima: 'None (unbounded)',
// // // // //       asymptotes: 'x = nπ (vertical)',
// // // // //       evenOdd: 'Odd function: cot(-x) = -cot(x)',
// // // // //       derivative: '-csc²(x)',
// // // // //       integral: 'ln|sin(x)| + C'
// // // // //     }
// // // // //   };

// // // // //   const getAngleSpecificData = (angleValue, unitType) => {
// // // // //     const num = parseFloat(angleValue);
// // // // //     if (isNaN(num)) return null;

// // // // //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// // // // //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// // // // //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// // // // //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// // // // //     const specialAngles = {
// // // // //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }},
// // // // //       30: { name: '30°', description: 'Special angle - π/6 radians, 30-60-90 triangle', exact: { sin: '1/2', cos: '√3/2', tan: '1/√3' }},
// // // // //       45: { name: '45°', description: 'Special angle - π/4 radians, 45-45-90 triangle', exact: { sin: '√2/2', cos: '√2/2', tan: '1' }},
// // // // //       60: { name: '60°', description: 'Special angle - π/3 radians, 30-60-90 triangle', exact: { sin: '√3/2', cos: '1/2', tan: '√3' }},
// // // // //       90: { name: '90°', description: 'Right angle - π/2 radians, on positive y-axis', exact: { sin: '1', cos: '0', tan: 'undefined' }},
// // // // //       120: { name: '120°', description: 'Special angle - 2π/3 radians, 180° - 60°', exact: { sin: '√3/2', cos: '-1/2', tan: '-√3' }},
// // // // //       135: { name: '135°', description: 'Special angle - 3π/4 radians, 180° - 45°', exact: { sin: '√2/2', cos: '-√2/2', tan: '-1' }},
// // // // //       150: { name: '150°', description: 'Special angle - 5π/6 radians, 180° - 30°', exact: { sin: '1/2', cos: '-√3/2', tan: '-1/√3' }},
// // // // //       180: { name: '180°', description: 'Straight angle - π radians, on negative x-axis', exact: { sin: '0', cos: '-1', tan: '0' }},
// // // // //       270: { name: '270°', description: 'Three-quarter turn - 3π/2 radians, on negative y-axis', exact: { sin: '-1', cos: '0', tan: 'undefined' }},
// // // // //       360: { name: '360°', description: 'Full rotation - 2π radians, back to positive x-axis', exact: { sin: '0', cos: '1', tan: '0' }}
// // // // //     };

// // // // //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// // // // //     return {
// // // // //       originalAngle: angleValue,
// // // // //       degreeValue: degreeAngle.toFixed(2),
// // // // //       radianValue: radianAngle.toFixed(5),
// // // // //       normalizedDegree: normalizedDeg.toFixed(1),
// // // // //       quadrant,
// // // // //       isSpecial: !!isSpecialAngle,
// // // // //       specialInfo: isSpecialAngle,
// // // // //       complement: normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null,
// // // // //       supplement: normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null,
// // // // //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// // // // //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// // // // //       referenceAngle: (() => {
// // // // //         if (normalizedDeg <= 90) return normalizedDeg.toFixed(1);
// // // // //         if (normalizedDeg <= 180) return (180 - normalizedDeg).toFixed(1);
// // // // //         if (normalizedDeg <= 270) return (normalizedDeg - 180).toFixed(1);
// // // // //         return (360 - normalizedDeg).toFixed(1);
// // // // //       })(),
// // // // //       quadrantSigns: {
// // // // //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// // // // //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// // // // //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// // // // //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// // // // //       }[quadrant]
// // // // //     };
// // // // //   };

// // // // //   const formatValue = (value) => {
// // // // //     if (value === null) return 'Undefined';
// // // // //     if (Number.isNaN(value)) return '...';
// // // // //     return typeof value === 'number' ? value.toFixed(5) : value;
// // // // //   };

// // // // //   const outerTabStyle = (isActive) => ({
// // // // //     padding: '12px 24px',
// // // // //     cursor: 'pointer',
// // // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // // //     color: isActive ? 'white' : '#333',
// // // // //     border: 'none',
// // // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // // //     fontSize: '1rem',
// // // // //     fontWeight: isActive ? '600' : '400',
// // // // //     transition: 'all 0.2s ease',
// // // // //     minWidth: '80px',
// // // // //     textTransform: 'uppercase'
// // // // //   });

// // // // //   const innerTabStyle = (isActive) => ({
// // // // //     padding: '8px 16px',
// // // // //     margin: '0 4px',
// // // // //     cursor: 'pointer',
// // // // //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// // // // //     color: isActive ? 'white' : '#4a90e2',
// // // // //     border: isActive ? 'none' : '1px solid #4a90e2',
// // // // //     borderRadius: '20px',
// // // // //     fontSize: '0.9rem',
// // // // //     fontWeight: '500',
// // // // //     transition: 'all 0.2s ease'
// // // // //   });

// // // // //   const activeInfo = functionInfo[outerTab] || functionInfo.sin;
// // // // //   const angleData = getAngleSpecificData(angle, units);

// // // // //   // Reset inner tab when outer tab changes to a function
// // // // //   useEffect(() => {
// // // // //     if (outerTab !== 'angle-analysis') {
// // // // //       setInnerTab('general-info');
// // // // //     }
// // // // //   }, [outerTab]);

// // // // //   // Sync with parent component selection
// // // // //   useEffect(() => {
// // // // //     if (selectedFunction && outerTab !== 'angle-analysis') {
// // // // //       setOuterTab(selectedFunction);
// // // // //     }
// // // // //   }, [selectedFunction]);

// // // // //   const handleOuterTabClick = (tab) => {
// // // // //     setOuterTab(tab);
// // // // //     if (tab !== 'angle-analysis') {
// // // // //       onFunctionSelect(tab);
// // // // //     }
// // // // //   };

// // // // //   const renderAngleAnalysis = () => {
// // // // //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// // // // //     return (
// // // // //       <div>
// // // // //         <div style={{
// // // // //           display: 'flex',
// // // // //           justifyContent: 'space-between',
// // // // //           alignItems: 'center',
// // // // //           marginBottom: '20px',
// // // // //           padding: '15px',
// // // // //           backgroundColor: '#e8f4fd',
// // // // //           borderRadius: '8px',
// // // // //           border: '1px solid #1d6bd8'
// // // // //         }}>
// // // // //           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
// // // // //             Angle: {angleData.originalAngle}° Analysis
// // // // //           </h2>
// // // // //           <div style={{
// // // // //             backgroundColor: '#1d6bd8',
// // // // //             color: 'white',
// // // // //             padding: '8px 16px',
// // // // //             borderRadius: '6px',
// // // // //             fontSize: '1.2rem',
// // // // //             fontWeight: 'bold'
// // // // //           }}>
// // // // //             Current angle: {angleData.originalAngle}°
// // // // //           </div>
// // // // //         </div>

// // // // //         {angleData.isSpecial && (
// // // // //           <div style={{
// // // // //             padding: '15px',
// // // // //             backgroundColor: '#d4edda',
// // // // //             border: '1px solid #c3e6cb',
// // // // //             borderRadius: '6px',
// // // // //             marginBottom: '15px'
// // // // //           }}>
// // // // //             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
// // // // //             <p style={{ margin: '0 0 8px 0' }}><strong>{angleData.specialInfo.description}</strong></p>
// // // // //           </div>
// // // // //         )}

// // // // //         <div style={{
// // // // //           display: 'grid',
// // // // //           gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// // // // //           gap: '15px',
// // // // //           fontSize: '0.95rem'
// // // // //         }}>
// // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // //             <div>
// // // // //               <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// // // // //               Q{angleData.quadrant}
// // // // //             </div>
// // // // //             {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // //               Learn more →
// // // // //             </Link> */}
// // // // //           </div>

// // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // //             <div>
// // // // //               <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// // // // //               {angleData.referenceAngle}° (acute equivalent)
// // // // //             </div>
// // // // //             {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // //               Learn more →
// // // // //             </Link> */}
// // // // //           </div>

// // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // //             <div>
// // // // //               <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
// // // // //               {angleData.degreeValue}° = {angleData.radianValue} rad
// // // // //             </div>
// // // // //             <Link href="/converters/degree-radians" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // //               Learn more →
// // // // //             </Link>
// // // // //           </div>

// // // // //           {angleData.complement && (
// // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // //               <div>
// // // // //                 <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// // // // //                 90° - {angleData.originalAngle}° = {angleData.complement}°
// // // // //               </div>
// // // // //               {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // //                 Learn more →
// // // // //               </Link> */}
// // // // //             </div>
// // // // //           )}

// // // // //           {angleData.supplement && (
// // // // //             <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // //               <div>
// // // // //                 <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// // // // //                 180° - {angleData.originalAngle}° = {angleData.supplement}°
// // // // //               </div>
// // // // //               {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // //                 Learn more →
// // // // //               </Link> */}
// // // // //             </div>
// // // // //           )}

// // // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// // // // //             <div>
// // // // //               <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
// // // // //               {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// // // // //             </div>
// // // // //             {/* <Link href="#" style={{ fontSize: '0.8rem', color: '#1d6bd8', textDecoration: 'none', marginTop: '8px', display: 'block' }}>
// // // // //               Learn more →
// // // // //             </Link> */}
// // // // //           </div>
// // // // //         </div>

// // // // //         <div style={{
// // // // //           marginTop: '15px',
// // // // //           padding: '12px',
// // // // //           backgroundColor: '#fff3cd',
// // // // //           border: '1px solid #ffeaa7',
// // // // //           borderRadius: '6px'
// // // // //         }}>
// // // // //           <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   const renderGeneralInfo = () => (
// // // // //     <div style={{
// // // // //       display: 'grid',
// // // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // // //       gap: '16px',
// // // // //       fontSize: '0.95rem',
// // // // //       lineHeight: '1.6'
// // // // //     }}>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // // //         {activeInfo.domain}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // // //         {activeInfo.range}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // // //         {activeInfo.period}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // // //         {activeInfo.zeros}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // // //         {activeInfo.maxima}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // // //         {activeInfo.minima}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // // //         {activeInfo.asymptotes}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // // //         {activeInfo.evenOdd}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // // //         d/dx [{outerTab}(x)] = {activeInfo.derivative}
// // // // //       </div>
// // // // //       <div style={{ padding: '8px 0' }}>
// // // // //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // // //         ∫ {outerTab}(x) dx = {activeInfo.integral}
// // // // //       </div>
// // // // //     </div>
// // // // //   );

// // // // //   const renderGraph = () => (
// // // // //     <div style={{
// // // // //       display: 'flex',
// // // // //       alignItems: 'center',
// // // // //       justifyContent: 'center',
// // // // //       height: '200px',
// // // // //       backgroundColor: '#f8f9fa',
// // // // //       borderRadius: '8px',
// // // // //       border: '2px dashed #ddd',
// // // // //       color: '#666',
// // // // //       fontSize: '1.1rem'
// // // // //     }}>
// // // // //       📊 {activeInfo.fullName} function graph will be displayed here
// // // // //     </div>
// // // // //   );

// // // // //   return (
// // // // //     <div style={{ 
// // // // //       width: '100%',
// // // // //       height: '50vh',
// // // // //       margin: '20px 0',
// // // // //       fontFamily: 'Arial, sans-serif',
// // // // //       border: '1px solid #ddd',
// // // // //       borderRadius: '8px',
// // // // //       overflow: 'hidden',
// // // // //       backgroundColor: 'white'
// // // // //     }}>
// // // // //       {/* Outer tabs: angle analysis first, then functions */}
// // // // //       <div style={{
// // // // //         display: 'flex',
// // // // //         backgroundColor: '#f9f9f9',
// // // // //         borderBottom: '2px solid #1d6bd8',
// // // // //         flexWrap: 'wrap'
// // // // //       }}>
// // // // //         <button
// // // // //           style={outerTabStyle(outerTab === 'angle-analysis')}
// // // // //           onClick={() => handleOuterTabClick('angle-analysis')}
// // // // //         >
// // // // //           ANGLE ANALYSIS
// // // // //         </button>
// // // // //         {Object.keys(trigoData).map((func) => (
// // // // //           <button
// // // // //             key={func}
// // // // //             style={outerTabStyle(outerTab === func)}
// // // // //             onClick={() => handleOuterTabClick(func)}
// // // // //           >
// // // // //             {func}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Inner tabs - only show for functions, not angle analysis */}
// // // // //       {outerTab !== 'angle-analysis' && (
// // // // //         <div style={{
// // // // //           padding: '12px 20px',
// // // // //           backgroundColor: '#fafafa',
// // // // //           borderBottom: '1px solid #eee'
// // // // //         }}>
// // // // //           <button
// // // // //             style={innerTabStyle(innerTab === 'general-info')}
// // // // //             onClick={() => setInnerTab('general-info')}
// // // // //           >
// // // // //             General Info
// // // // //           </button>
// // // // //           {/* <button
// // // // //             style={innerTabStyle(innerTab === 'graph')}
// // // // //             onClick={() => setInnerTab('graph')}
// // // // //           >
// // // // //             Graph
// // // // //           </button> */}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Content area */}
// // // // //       <div style={{
// // // // //         padding: '20px',
// // // // //         height: outerTab === 'angle-analysis' ? 'calc(50vh - 80px)' : 'calc(50vh - 130px)',
// // // // //         overflow: 'hidden',
// // // // //         backgroundColor: 'white'
// // // // //       }}>
// // // // //         {outerTab === 'angle-analysis' ? renderAngleAnalysis() : (
// // // // //           <>
// // // // //             {innerTab === 'general-info' && renderGeneralInfo()}
// // // // //             {innerTab === 'graph' && renderGraph()}
// // // // //           </>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TrigoPanel;



// // // // import React, { useState, useEffect } from 'react';
// // // // import Link from 'next/link';
// // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // // //   const [outerTab, setOuterTab] = useState('angle-analysis');
// // // //   const [innerTab, setInnerTab] = useState('general-info');

// // // //   const functionInfo = {
// // // //     sin: {
// // // //       fullName: 'Sine',
// // // //       domain: 'All real numbers',
// // // //       range: '$[-1, 1]$',
// // // //       period: '$2\\pi$ (360°)',
// // // //       zeros: '$n\\pi$ where $n$ is integer',
// // // //       maxima: '$\\frac{\\pi}{2} + 2n\\pi$ (90° + 360°n)',
// // // //       minima: '$\\frac{3\\pi}{2} + 2n\\pi$ (270° + 360°n)',
// // // //       asymptotes: 'None',
// // // //       evenOdd: 'Odd function: $\\sin(-x) = -\\sin(x)$',
// // // //       derivative: '$\\cos(x)$',
// // // //       integral: '$-\\cos(x) + C$'
// // // //     },
// // // //     cos: {
// // // //       fullName: 'Cosine',
// // // //       domain: 'All real numbers',
// // // //       range: '$[-1, 1]$',
// // // //       period: '$2\\pi$ (360°)',
// // // //       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
// // // //       maxima: '$2n\\pi$ (360°n)',
// // // //       minima: '$\\pi + 2n\\pi$ (180° + 360°n)',
// // // //       asymptotes: 'None',
// // // //       evenOdd: 'Even function: $\\cos(-x) = \\cos(x)$',
// // // //       derivative: '$-\\sin(x)$',
// // // //       integral: '$\\sin(x) + C$'
// // // //     },
// // // //     tan: {
// // // //       fullName: 'Tangent',
// // // //       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
// // // //       range: 'All real numbers',
// // // //       period: '$\\pi$ (180°)',
// // // //       zeros: '$n\\pi$ where $n$ is integer',
// // // //       maxima: 'None (unbounded)',
// // // //       minima: 'None (unbounded)',
// // // //       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
// // // //       evenOdd: 'Odd function: $\\tan(-x) = -\\tan(x)$',
// // // //       derivative: '$\\sec^2(x)$',
// // // //       integral: '$-\\ln|\\cos(x)| + C$'
// // // //     },
// // // //     csc: {
// // // //       fullName: 'Cosecant',
// // // //       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
// // // //       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
// // // //       period: '$2\\pi$ (360°)',
// // // //       zeros: 'None',
// // // //       maxima: 'At $\\sin(x)$ minima: $|\\csc(x)| = 1$',
// // // //       minima: 'At $\\sin(x)$ maxima: $|\\csc(x)| = 1$',
// // // //       asymptotes: '$x = n\\pi$ (vertical)',
// // // //       evenOdd: 'Odd function: $\\csc(-x) = -\\csc(x)$',
// // // //       derivative: '$-\\csc(x)\\cot(x)$',
// // // //       integral: '$-\\ln|\\csc(x) + \\cot(x)| + C$'
// // // //     },
// // // //     sec: {
// // // //       fullName: 'Secant',
// // // //       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
// // // //       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
// // // //       period: '$2\\pi$ (360°)',
// // // //       zeros: 'None',
// // // //       maxima: 'At $\\cos(x)$ minima: $|\\sec(x)| = 1$',
// // // //       minima: 'At $\\cos(x)$ maxima: $|\\sec(x)| = 1$',
// // // //       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
// // // //       evenOdd: 'Even function: $\\sec(-x) = \\sec(x)$',
// // // //       derivative: '$\\sec(x)\\tan(x)$',
// // // //       integral: '$\\ln|\\sec(x) + \\tan(x)| + C$'
// // // //     },
// // // //     cot: {
// // // //       fullName: 'Cotangent',
// // // //       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
// // // //       range: 'All real numbers',
// // // //       period: '$\\pi$ (180°)',
// // // //       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
// // // //       maxima: 'None (unbounded)',
// // // //       minima: 'None (unbounded)',
// // // //       asymptotes: '$x = n\\pi$ (vertical)',
// // // //       evenOdd: 'Odd function: $\\cot(-x) = -\\cot(x)$',
// // // //       derivative: '$-\\csc^2(x)$',
// // // //       integral: '$\\ln|\\sin(x)| + C$'
// // // //     }
// // // //   };

// // // //   const calculateAngleData = (angleValue, unitType) => {
// // // //     const num = parseFloat(angleValue);
// // // //     if (isNaN(num)) return null;

// // // //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// // // //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// // // //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// // // //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// // // //     const specialAngles = {
// // // //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }},
// // // //       30: { name: '30°', description: 'Special angle - $\\frac{\\pi}{6}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{1}{2}$', cos: '$\\frac{\\sqrt{3}}{2}$', tan: '$\\frac{1}{\\sqrt{3}}$' }},
// // // //       45: { name: '45°', description: 'Special angle - $\\frac{\\pi}{4}$ radians, 45-45-90 triangle', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$\\frac{\\sqrt{2}}{2}$', tan: '$1$' }},
// // // //       60: { name: '60°', description: 'Special angle - $\\frac{\\pi}{3}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$\\frac{1}{2}$', tan: '$\\sqrt{3}$' }},
// // // //       90: { name: '90°', description: 'Right angle - $\\frac{\\pi}{2}$ radians, on positive y-axis', exact: { sin: '$1$', cos: '$0$', tan: 'undefined' }},
// // // //       120: { name: '120°', description: 'Special angle - $\\frac{2\\pi}{3}$ radians, 180° - 60°', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$-\\frac{1}{2}$', tan: '$-\\sqrt{3}$' }},
// // // //       135: { name: '135°', description: 'Special angle - $\\frac{3\\pi}{4}$ radians, 180° - 45°', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$-\\frac{\\sqrt{2}}{2}$', tan: '$-1$' }},
// // // //       150: { name: '150°', description: 'Special angle - $\\frac{5\\pi}{6}$ radians, 180° - 30°', exact: { sin: '$\\frac{1}{2}$', cos: '$-\\frac{\\sqrt{3}}{2}$', tan: '$-\\frac{1}{\\sqrt{3}}$' }},
// // // //       180: { name: '180°', description: 'Straight angle - $\\pi$ radians, on negative x-axis', exact: { sin: '$0$', cos: '$-1$', tan: '$0$' }},
// // // //       270: { name: '270°', description: 'Three-quarter turn - $\\frac{3\\pi}{2}$ radians, on negative y-axis', exact: { sin: '$-1$', cos: '$0$', tan: 'undefined' }},
// // // //       360: { name: '360°', description: 'Full rotation - $2\\pi$ radians, back to positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }}
// // // //     };

// // // //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// // // //     let referenceAngle;
// // // //     if (normalizedDeg <= 90) referenceAngle = normalizedDeg;
// // // //     else if (normalizedDeg <= 180) referenceAngle = 180 - normalizedDeg;
// // // //     else if (normalizedDeg <= 270) referenceAngle = normalizedDeg - 180;
// // // //     else referenceAngle = 360 - normalizedDeg;

// // // //     const complement = normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null;
// // // //     const supplement = normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null;

// // // //     return {
// // // //       originalAngle: angleValue,
// // // //       degreeValue: degreeAngle.toFixed(2),
// // // //       radianValue: radianAngle.toFixed(5),
// // // //       normalizedDegree: normalizedDeg.toFixed(1),
// // // //       quadrant,
// // // //       isSpecial: !!isSpecialAngle,
// // // //       specialInfo: isSpecialAngle,
// // // //       complement,
// // // //       supplement,
// // // //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// // // //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// // // //       referenceAngle: referenceAngle.toFixed(1),
// // // //       quadrantSigns: {
// // // //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// // // //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// // // //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// // // //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// // // //       }[quadrant]
// // // //     };
// // // //   };

// // // //   const formatValue = (value) => {
// // // //     if (value === null) return 'Undefined';
// // // //     if (Number.isNaN(value)) return '...';
// // // //     return typeof value === 'number' ? value.toFixed(5) : value;
// // // //   };

// // // //   const outerTabStyle = (isActive) => ({
// // // //     padding: '12px 24px',
// // // //     cursor: 'pointer',
// // // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // // //     color: isActive ? 'white' : '#333',
// // // //     border: 'none',
// // // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // // //     fontSize: '1rem',
// // // //     fontWeight: isActive ? '600' : '400',
// // // //     transition: 'all 0.2s ease',
// // // //     minWidth: '80px',
// // // //     textTransform: 'uppercase'
// // // //   });

// // // //   const innerTabStyle = (isActive) => ({
// // // //     padding: '8px 16px',
// // // //     margin: '0 4px',
// // // //     cursor: 'pointer',
// // // //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// // // //     color: isActive ? 'white' : '#4a90e2',
// // // //     border: isActive ? 'none' : '1px solid #4a90e2',
// // // //     borderRadius: '20px',
// // // //     fontSize: '0.9rem',
// // // //     fontWeight: '500',
// // // //     transition: 'all 0.2s ease'
// // // //   });

// // // //   const activeInfo = functionInfo[outerTab] || functionInfo.sin;
// // // //   const angleData = calculateAngleData(angle, units);

// // // //   useEffect(() => {
// // // //     if (outerTab !== 'angle-analysis') {
// // // //       setInnerTab('general-info');
// // // //     }
// // // //   }, [outerTab]);

// // // //   useEffect(() => {
// // // //     if (selectedFunction && outerTab !== 'angle-analysis') {
// // // //       setOuterTab(selectedFunction);
// // // //     }
// // // //   }, [selectedFunction]);

// // // //   const handleOuterTabClick = (tab) => {
// // // //     setOuterTab(tab);
// // // //     if (tab !== 'angle-analysis') {
// // // //       onFunctionSelect(tab);
// // // //     }
// // // //   };

// // // //   const renderAngleAnalysis = () => {
// // // //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// // // //     return (
// // // //       <div>
// // // //         <div style={{
// // // //           display: 'flex',
// // // //           justifyContent: 'space-between',
// // // //           alignItems: 'center',
// // // //           marginBottom: '20px',
// // // //           padding: '15px',
// // // //           backgroundColor: '#e8f4fd',
// // // //           borderRadius: '8px',
// // // //           border: '1px solid #1d6bd8'
// // // //         }}>
// // // //           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
// // // //             Angle: {angleData.originalAngle}° Analysis
// // // //           </h2>
// // // //           <div style={{
// // // //             backgroundColor: '#1d6bd8',
// // // //             color: 'white',
// // // //             padding: '8px 16px',
// // // //             borderRadius: '6px',
// // // //             fontSize: '1.2rem',
// // // //             fontWeight: 'bold'
// // // //           }}>
// // // //             Current angle: {angleData.originalAngle}°
// // // //           </div>
// // // //         </div>

// // // //         {angleData.isSpecial && (
// // // //           <div style={{
// // // //             padding: '15px',
// // // //             backgroundColor: '#d4edda',
// // // //             border: '1px solid #c3e6cb',
// // // //             borderRadius: '6px',
// // // //             marginBottom: '15px'
// // // //           }}>
// // // //             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
// // // //             <p style={{ margin: '0 0 8px 0' }}>
// // // //               <strong>{processContent(angleData.specialInfo.description)}</strong>
// // // //             </p>
// // // //           </div>
// // // //         )}

// // // //         <div style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(3, 1fr)',
// // // //           gap: '15px',
// // // //           fontSize: '0.95rem',
// // // //           marginBottom: '15px'
// // // //         }}>
// // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // //             <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// // // //             Q{angleData.quadrant}
// // // //           </div>

// // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // //             <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// // // //             {angleData.referenceAngle}° (acute equivalent)
// // // //           </div>

// // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// // // //             <div>
// // // //               <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
// // // //               {angleData.degreeValue}° = {angleData.radianValue} rad
// // // //             </div>
// // // //             <Link href="/converters/degree-radians" style={{ 
// // // //               fontSize: '0.8rem', 
// // // //               color: '#1d6bd8', 
// // // //               textDecoration: 'none',
// // // //               position: 'absolute',
// // // //               bottom: '8px',
// // // //               right: '10px'
// // // //             }}>
// // // //               Learn more →
// // // //             </Link>
// // // //           </div>

// // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // //             <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// // // //             {angleData.complement ? `90° - ${angleData.originalAngle}° = ${angleData.complement}°` : 'N/A (angle > 90°)'}
// // // //           </div>

// // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // //             <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// // // //             {angleData.supplement ? `180° - ${angleData.originalAngle}° = ${angleData.supplement}°` : 'N/A (angle > 180°)'}
// // // //           </div>

// // // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // // //             <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
// // // //             {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// // // //           </div>
// // // //         </div>

// // // //         <div style={{
// // // //           marginTop: '15px',
// // // //           padding: '12px',
// // // //           backgroundColor: '#fff3cd',
// // // //           border: '1px solid #ffeaa7',
// // // //           borderRadius: '6px'
// // // //         }}>
// // // //           <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   };

// // // //   const renderGeneralInfo = () => (
// // // //     <div style={{
// // // //       display: 'grid',
// // // //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // // //       gap: '16px',
// // // //       fontSize: '0.95rem',
// // // //       lineHeight: '1.6'
// // // //     }}>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // // //         {processContent(activeInfo.domain)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // // //         {processContent(activeInfo.range)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // // //         {processContent(activeInfo.period)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // // //         {processContent(activeInfo.zeros)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // // //         {processContent(activeInfo.maxima)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // // //         {processContent(activeInfo.minima)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // // //         {processContent(activeInfo.asymptotes)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // // //         {processContent(activeInfo.evenOdd)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // // //         {processContent(`d/dx [${outerTab}(x)] = ${activeInfo.derivative}`)}
// // // //       </div>
// // // //       <div style={{ padding: '8px 0' }}>
// // // //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // // //         {processContent(`∫ ${outerTab}(x) dx = ${activeInfo.integral}`)}
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div style={{ 
// // // //       width: '100%',
// // // //       height: '50vh',
// // // //       margin: '20px 0',
// // // //       fontFamily: 'Arial, sans-serif',
// // // //       border: '1px solid #ddd',
// // // //       borderRadius: '8px',
// // // //       overflow: 'hidden',
// // // //       backgroundColor: 'white'
// // // //     }}>
// // // //       <div style={{
// // // //         display: 'flex',
// // // //         backgroundColor: '#f9f9f9',
// // // //         borderBottom: '2px solid #1d6bd8',
// // // //         flexWrap: 'wrap'
// // // //       }}>
// // // //         <button
// // // //           style={outerTabStyle(outerTab === 'angle-analysis')}
// // // //           onClick={() => handleOuterTabClick('angle-analysis')}
// // // //         >
// // // //           ANGLE ANALYSIS
// // // //         </button>
// // // //         {Object.keys(trigoData).map((func) => (
// // // //           <button
// // // //             key={func}
// // // //             style={outerTabStyle(outerTab === func)}
// // // //             onClick={() => handleOuterTabClick(func)}
// // // //           >
// // // //             {func}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       {outerTab !== 'angle-analysis' && (
// // // //         <div style={{
// // // //           padding: '12px 20px',
// // // //           backgroundColor: '#fafafa',
// // // //           borderBottom: '1px solid #eee'
// // // //         }}>
// // // //           <button
// // // //             style={innerTabStyle(innerTab === 'general-info')}
// // // //             onClick={() => setInnerTab('general-info')}
// // // //           >
// // // //             General Info
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <div style={{
// // // //         padding: '20px',
// // // //         height: outerTab === 'angle-analysis' ? 'calc(50vh - 80px)' : 'calc(50vh - 130px)',
// // // //         overflow: 'hidden',
// // // //         backgroundColor: 'white'
// // // //       }}>
// // // //         {outerTab === 'angle-analysis' ? renderAngleAnalysis() : renderGeneralInfo()}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TrigoPanel;


// // // import React, { useState, useEffect } from 'react';
// // // import Link from 'next/link';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// // //   const [outerTab, setOuterTab] = useState('angle-analysis');
// // //   const [innerTab, setInnerTab] = useState('general-info');

// // //   const functionInfo = {
// // //     sin: {
// // //       fullName: 'Sine',
// // //       domain: 'All real numbers',
// // //       range: '$[-1, 1]$',
// // //       period: '$2\\pi$ (360°)',
// // //       zeros: '$n\\pi$ where $n$ is integer',
// // //       maxima: '$\\frac{\\pi}{2} + 2n\\pi$ (90° + 360°n)',
// // //       minima: '$\\frac{3\\pi}{2} + 2n\\pi$ (270° + 360°n)',
// // //       asymptotes: 'None',
// // //       evenOdd: 'Odd function: $\\sin(-x) = -\\sin(x)$',
// // //       derivative: '$\\cos(x)$',
// // //       integral: '$-\\cos(x) + C$'
// // //     },
// // //     cos: {
// // //       fullName: 'Cosine',
// // //       domain: 'All real numbers',
// // //       range: '$[-1, 1]$',
// // //       period: '$2\\pi$ (360°)',
// // //       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
// // //       maxima: '$2n\\pi$ (360°n)',
// // //       minima: '$\\pi + 2n\\pi$ (180° + 360°n)',
// // //       asymptotes: 'None',
// // //       evenOdd: 'Even function: $\\cos(-x) = \\cos(x)$',
// // //       derivative: '$-\\sin(x)$',
// // //       integral: '$\\sin(x) + C$'
// // //     },
// // //     tan: {
// // //       fullName: 'Tangent',
// // //       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
// // //       range: 'All real numbers',
// // //       period: '$\\pi$ (180°)',
// // //       zeros: '$n\\pi$ where $n$ is integer',
// // //       maxima: 'None (unbounded)',
// // //       minima: 'None (unbounded)',
// // //       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
// // //       evenOdd: 'Odd function: $\\tan(-x) = -\\tan(x)$',
// // //       derivative: '$\\sec^2(x)$',
// // //       integral: '$-\\ln|\\cos(x)| + C$'
// // //     },
// // //     csc: {
// // //       fullName: 'Cosecant',
// // //       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
// // //       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
// // //       period: '$2\\pi$ (360°)',
// // //       zeros: 'None',
// // //       maxima: 'At $\\sin(x)$ minima: $|\\csc(x)| = 1$',
// // //       minima: 'At $\\sin(x)$ maxima: $|\\csc(x)| = 1$',
// // //       asymptotes: '$x = n\\pi$ (vertical)',
// // //       evenOdd: 'Odd function: $\\csc(-x) = -\\csc(x)$',
// // //       derivative: '$-\\csc(x)\\cot(x)$',
// // //       integral: '$-\\ln|\\csc(x) + \\cot(x)| + C$'
// // //     },
// // //     sec: {
// // //       fullName: 'Secant',
// // //       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
// // //       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
// // //       period: '$2\\pi$ (360°)',
// // //       zeros: 'None',
// // //       maxima: 'At $\\cos(x)$ minima: $|\\sec(x)| = 1$',
// // //       minima: 'At $\\cos(x)$ maxima: $|\\sec(x)| = 1$',
// // //       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
// // //       evenOdd: 'Even function: $\\sec(-x) = \\sec(x)$',
// // //       derivative: '$\\sec(x)\\tan(x)$',
// // //       integral: '$\\ln|\\sec(x) + \\tan(x)| + C$'
// // //     },
// // //     cot: {
// // //       fullName: 'Cotangent',
// // //       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
// // //       range: 'All real numbers',
// // //       period: '$\\pi$ (180°)',
// // //       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
// // //       maxima: 'None (unbounded)',
// // //       minima: 'None (unbounded)',
// // //       asymptotes: '$x = n\\pi$ (vertical)',
// // //       evenOdd: 'Odd function: $\\cot(-x) = -\\cot(x)$',
// // //       derivative: '$-\\csc^2(x)$',
// // //       integral: '$\\ln|\\sin(x)| + C$'
// // //     }
// // //   };

// // //   const calculateAngleData = (angleValue, unitType) => {
// // //     const num = parseFloat(angleValue);
// // //     if (isNaN(num)) return null;

// // //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// // //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// // //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// // //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// // //     const specialAngles = {
// // //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }},
// // //       30: { name: '30°', description: 'Special angle - $\\frac{\\pi}{6}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{1}{2}$', cos: '$\\frac{\\sqrt{3}}{2}$', tan: '$\\frac{1}{\\sqrt{3}}$' }},
// // //       45: { name: '45°', description: 'Special angle - $\\frac{\\pi}{4}$ radians, 45-45-90 triangle', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$\\frac{\\sqrt{2}}{2}$', tan: '$1$' }},
// // //       60: { name: '60°', description: 'Special angle - $\\frac{\\pi}{3}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$\\frac{1}{2}$', tan: '$\\sqrt{3}$' }},
// // //       90: { name: '90°', description: 'Right angle - $\\frac{\\pi}{2}$ radians, on positive y-axis', exact: { sin: '$1$', cos: '$0$', tan: 'undefined' }},
// // //       120: { name: '120°', description: 'Special angle - $\\frac{2\\pi}{3}$ radians, 180° - 60°', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$-\\frac{1}{2}$', tan: '$-\\sqrt{3}$' }},
// // //       135: { name: '135°', description: 'Special angle - $\\frac{3\\pi}{4}$ radians, 180° - 45°', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$-\\frac{\\sqrt{2}}{2}$', tan: '$-1$' }},
// // //       150: { name: '150°', description: 'Special angle - $\\frac{5\\pi}{6}$ radians, 180° - 30°', exact: { sin: '$\\frac{1}{2}$', cos: '$-\\frac{\\sqrt{3}}{2}$', tan: '$-\\frac{1}{\\sqrt{3}}$' }},
// // //       180: { name: '180°', description: 'Straight angle - $\\pi$ radians, on negative x-axis', exact: { sin: '$0$', cos: '$-1$', tan: '$0$' }},
// // //       270: { name: '270°', description: 'Three-quarter turn - $\\frac{3\\pi}{2}$ radians, on negative y-axis', exact: { sin: '$-1$', cos: '$0$', tan: 'undefined' }},
// // //       360: { name: '360°', description: 'Full rotation - $2\\pi$ radians, back to positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }}
// // //     };

// // //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// // //     let referenceAngle;
// // //     if (normalizedDeg <= 90) referenceAngle = normalizedDeg;
// // //     else if (normalizedDeg <= 180) referenceAngle = 180 - normalizedDeg;
// // //     else if (normalizedDeg <= 270) referenceAngle = normalizedDeg - 180;
// // //     else referenceAngle = 360 - normalizedDeg;

// // //     const complement = normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null;
// // //     const supplement = normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null;

// // //     return {
// // //       originalAngle: angleValue,
// // //       degreeValue: degreeAngle.toFixed(2),
// // //       radianValue: radianAngle.toFixed(5),
// // //       normalizedDegree: normalizedDeg.toFixed(1),
// // //       quadrant,
// // //       isSpecial: !!isSpecialAngle,
// // //       specialInfo: isSpecialAngle,
// // //       complement,
// // //       supplement,
// // //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// // //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// // //       referenceAngle: referenceAngle.toFixed(1),
// // //       quadrantSigns: {
// // //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// // //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// // //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// // //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// // //       }[quadrant]
// // //     };
// // //   };

// // //   const formatValue = (value) => {
// // //     if (value === null) return 'Undefined';
// // //     if (Number.isNaN(value)) return '...';
// // //     return typeof value === 'number' ? value.toFixed(5) : value;
// // //   };

// // //   const outerTabStyle = (isActive) => ({
// // //     padding: '12px 24px',
// // //     cursor: 'pointer',
// // //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// // //     color: isActive ? 'white' : '#333',
// // //     border: 'none',
// // //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// // //     fontSize: '1rem',
// // //     fontWeight: isActive ? '600' : '400',
// // //     transition: 'all 0.2s ease',
// // //     minWidth: '80px',
// // //     textTransform: 'uppercase'
// // //   });

// // //   const innerTabStyle = (isActive) => ({
// // //     padding: '8px 16px',
// // //     margin: '0 4px',
// // //     cursor: 'pointer',
// // //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// // //     color: isActive ? 'white' : '#4a90e2',
// // //     border: isActive ? 'none' : '1px solid #4a90e2',
// // //     borderRadius: '20px',
// // //     fontSize: '0.9rem',
// // //     fontWeight: '500',
// // //     transition: 'all 0.2s ease'
// // //   });

// // //   const activeInfo = functionInfo[outerTab] || functionInfo.sin;
// // //   const angleData = calculateAngleData(angle, units);

// // //   useEffect(() => {
// // //     if (outerTab !== 'angle-analysis') {
// // //       setInnerTab('general-info');
// // //     }
// // //   }, [outerTab]);

// // //   useEffect(() => {
// // //     if (selectedFunction && outerTab !== 'angle-analysis') {
// // //       setOuterTab(selectedFunction);
// // //     }
// // //   }, [selectedFunction]);

// // //   const handleOuterTabClick = (tab) => {
// // //     setOuterTab(tab);
// // //     if (tab !== 'angle-analysis') {
// // //       onFunctionSelect(tab);
// // //     }
// // //   };

// // //   const renderAngleAnalysis = () => {
// // //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// // //     return (
// // //       <div>
// // //         <div style={{
// // //           display: 'flex',
// // //           justifyContent: 'space-between',
// // //           alignItems: 'center',
// // //           marginBottom: '20px',
// // //           padding: '15px',
// // //           backgroundColor: '#e8f4fd',
// // //           borderRadius: '8px',
// // //           border: '1px solid #1d6bd8'
// // //         }}>
// // //           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
// // //             Angle: {angleData.originalAngle}° Analysis
// // //           </h2>
// // //           <div style={{
// // //             backgroundColor: '#1d6bd8',
// // //             color: 'white',
// // //             padding: '8px 16px',
// // //             borderRadius: '6px',
// // //             fontSize: '1.2rem',
// // //             fontWeight: 'bold'
// // //           }}>
// // //             Current angle: {angleData.originalAngle}°
// // //           </div>
// // //         </div>

// // //         {angleData.isSpecial && (
// // //           <div style={{
// // //             padding: '15px',
// // //             backgroundColor: '#d4edda',
// // //             border: '1px solid #c3e6cb',
// // //             borderRadius: '6px',
// // //             marginBottom: '15px'
// // //           }}>
// // //             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
// // //             <p style={{ margin: '0 0 8px 0' }}>
// // //               <strong>{processContent(angleData.specialInfo.description)}</strong>
// // //             </p>
// // //           </div>
// // //         )}

// // //         <div style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(3, 1fr)',
// // //           gap: '15px',
// // //           fontSize: '0.95rem',
// // //           marginBottom: '15px'
// // //         }}>
// // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // //             <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// // //             Q{angleData.quadrant}
// // //           </div>

// // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // //             <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// // //             {angleData.referenceAngle}° (acute equivalent)
// // //           </div>

// // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// // //             <div>
// // //               <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
// // //               {angleData.degreeValue}° = {angleData.radianValue} rad
// // //             </div>
// // //             <Link href="/converters/degree-radians" style={{ 
// // //               fontSize: '0.95rem', 
// // //               color: 'white',
// // //               backgroundColor: '#1d6bd8',
// // //               textDecoration: 'none',
// // //               position: 'absolute',
// // //               bottom: '8px',
// // //               right: '10px',
// // //               padding: '6px 12px',
// // //               borderRadius: '6px',
// // //               fontWeight: '500'
// // //             }}>
// // //               Learn more →
// // //             </Link>
// // //           </div>

// // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // //             <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// // //             {angleData.complement ? `90° - ${angleData.originalAngle}° = ${angleData.complement}°` : 'N/A (angle > 90°)'}
// // //           </div>

// // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // //             <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// // //             {angleData.supplement ? `180° - ${angleData.originalAngle}° = ${angleData.supplement}°` : 'N/A (angle > 180°)'}
// // //           </div>

// // //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
// // //             <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
// // //             {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// // //           </div>
// // //         </div>

// // //         <div style={{
// // //           marginTop: '15px',
// // //           padding: '8px',
// // //           backgroundColor: '#fff3cd',
// // //           border: '1px solid #ffeaa7',
// // //           borderRadius: '6px',
          
// // //         }}>
// // //           <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const renderGeneralInfo = () => (
// // //     <div style={{
// // //       display: 'grid',
// // //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// // //       gap: '16px',
// // //       fontSize: '0.95rem',
// // //       lineHeight: '1.6'
// // //     }}>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// // //         {processContent(activeInfo.domain)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// // //         {processContent(activeInfo.range)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// // //         {processContent(activeInfo.period)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// // //         {processContent(activeInfo.zeros)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// // //         {processContent(activeInfo.maxima)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// // //         {processContent(activeInfo.minima)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// // //         {processContent(activeInfo.asymptotes)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// // //         {processContent(activeInfo.evenOdd)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// // //         {processContent(`d/dx [${outerTab}(x)] = ${activeInfo.derivative}`)}
// // //       </div>
// // //       <div style={{ padding: '8px 0' }}>
// // //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// // //         {processContent(`∫ ${outerTab}(x) dx = ${activeInfo.integral}`)}
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div style={{ 
// // //       width: '100%',
// // //       height: '50vh',
// // //       margin: '20px 0',
// // //       fontFamily: 'Arial, sans-serif',
// // //       border: '1px solid #ddd',
// // //       borderRadius: '8px',
// // //       overflow: 'hidden',
// // //       backgroundColor: 'white'
// // //     }}>
// // //       <div style={{
// // //         display: 'flex',
// // //         backgroundColor: '#f9f9f9',
// // //         borderBottom: '2px solid #1d6bd8',
// // //         flexWrap: 'wrap'
// // //       }}>
// // //         <button
// // //           style={outerTabStyle(outerTab === 'angle-analysis')}
// // //           onClick={() => handleOuterTabClick('angle-analysis')}
// // //         >
// // //           ANGLE ANALYSIS
// // //         </button>
// // //         {Object.keys(trigoData).map((func) => (
// // //           <button
// // //             key={func}
// // //             style={outerTabStyle(outerTab === func)}
// // //             onClick={() => handleOuterTabClick(func)}
// // //           >
// // //             {func}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {outerTab !== 'angle-analysis' && (
// // //         <div style={{
// // //           padding: '12px 20px',
// // //           backgroundColor: '#fafafa',
// // //           borderBottom: '1px solid #eee'
// // //         }}>
// // //           <button
// // //             style={innerTabStyle(innerTab === 'general-info')}
// // //             onClick={() => setInnerTab('general-info')}
// // //           >
// // //             General Info
// // //           </button>
// // //         </div>
// // //       )}

// // //       <div style={{
// // //         padding: '20px',
// // //         height: outerTab === 'angle-analysis' ? 'calc(50vh - 80px)' : 'calc(50vh - 130px)',
// // //         overflow: 'hidden',
// // //         backgroundColor: 'white'
// // //       }}>
// // //         {outerTab === 'angle-analysis' ? renderAngleAnalysis() : renderGeneralInfo()}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TrigoPanel;



// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
// //   const [outerTab, setOuterTab] = useState('angle-analysis');
// //   const [innerTab, setInnerTab] = useState('general-info');

// //   const functionInfo = {
// //     sin: {
// //       fullName: 'Sine',
// //       domain: 'All real numbers',
// //       range: '$[-1, 1]$',
// //       period: '$2\\pi$ (360°)',
// //       zeros: '$n\\pi$ where $n$ is integer',
// //       maxima: '$\\frac{\\pi}{2} + 2n\\pi$ (90° + 360°n)',
// //       minima: '$\\frac{3\\pi}{2} + 2n\\pi$ (270° + 360°n)',
// //       asymptotes: 'None',
// //       evenOdd: 'Odd function: $\\sin(-x) = -\\sin(x)$',
// //       derivative: '$\\cos(x)$',
// //       integral: '$-\\cos(x) + C$'
// //     },
// //     cos: {
// //       fullName: 'Cosine',
// //       domain: 'All real numbers',
// //       range: '$[-1, 1]$',
// //       period: '$2\\pi$ (360°)',
// //       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
// //       maxima: '$2n\\pi$ (360°n)',
// //       minima: '$\\pi + 2n\\pi$ (180° + 360°n)',
// //       asymptotes: 'None',
// //       evenOdd: 'Even function: $\\cos(-x) = \\cos(x)$',
// //       derivative: '$-\\sin(x)$',
// //       integral: '$\\sin(x) + C$'
// //     },
// //     tan: {
// //       fullName: 'Tangent',
// //       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
// //       range: 'All real numbers',
// //       period: '$\\pi$ (180°)',
// //       zeros: '$n\\pi$ where $n$ is integer',
// //       maxima: 'None (unbounded)',
// //       minima: 'None (unbounded)',
// //       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
// //       evenOdd: 'Odd function: $\\tan(-x) = -\\tan(x)$',
// //       derivative: '$\\sec^2(x)$',
// //       integral: '$-\\ln|\\cos(x)| + C$'
// //     },
// //     csc: {
// //       fullName: 'Cosecant',
// //       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
// //       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
// //       period: '$2\\pi$ (360°)',
// //       zeros: 'None',
// //       maxima: 'At $\\sin(x)$ minima: $|\\csc(x)| = 1$',
// //       minima: 'At $\\sin(x)$ maxima: $|\\csc(x)| = 1$',
// //       asymptotes: '$x = n\\pi$ (vertical)',
// //       evenOdd: 'Odd function: $\\csc(-x) = -\\csc(x)$',
// //       derivative: '$-\\csc(x)\\cot(x)$',
// //       integral: '$-\\ln|\\csc(x) + \\cot(x)| + C$'
// //     },
// //     sec: {
// //       fullName: 'Secant',
// //       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
// //       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
// //       period: '$2\\pi$ (360°)',
// //       zeros: 'None',
// //       maxima: 'At $\\cos(x)$ minima: $|\\sec(x)| = 1$',
// //       minima: 'At $\\cos(x)$ maxima: $|\\sec(x)| = 1$',
// //       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
// //       evenOdd: 'Even function: $\\sec(-x) = \\sec(x)$',
// //       derivative: '$\\sec(x)\\tan(x)$',
// //       integral: '$\\ln|\\sec(x) + \\tan(x)| + C$'
// //     },
// //     cot: {
// //       fullName: 'Cotangent',
// //       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
// //       range: 'All real numbers',
// //       period: '$\\pi$ (180°)',
// //       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
// //       maxima: 'None (unbounded)',
// //       minima: 'None (unbounded)',
// //       asymptotes: '$x = n\\pi$ (vertical)',
// //       evenOdd: 'Odd function: $\\cot(-x) = -\\cot(x)$',
// //       derivative: '$-\\csc^2(x)$',
// //       integral: '$\\ln|\\sin(x)| + C$'
// //     }
// //   };

// //   const calculateAngleData = (angleValue, unitType) => {
// //     const num = parseFloat(angleValue);
// //     if (isNaN(num)) return null;

// //     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
// //     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
// //     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
// //     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
// //     const specialAngles = {
// //       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }},
// //       30: { name: '30°', description: 'Special angle - $\\frac{\\pi}{6}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{1}{2}$', cos: '$\\frac{\\sqrt{3}}{2}$', tan: '$\\frac{1}{\\sqrt{3}}$' }},
// //       45: { name: '45°', description: 'Special angle - $\\frac{\\pi}{4}$ radians, 45-45-90 triangle', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$\\frac{\\sqrt{2}}{2}$', tan: '$1$' }},
// //       60: { name: '60°', description: 'Special angle - $\\frac{\\pi}{3}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$\\frac{1}{2}$', tan: '$\\sqrt{3}$' }},
// //       90: { name: '90°', description: 'Right angle - $\\frac{\\pi}{2}$ radians, on positive y-axis', exact: { sin: '$1$', cos: '$0$', tan: 'undefined' }},
// //       120: { name: '120°', description: 'Special angle - $\\frac{2\\pi}{3}$ radians, 180° - 60°', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$-\\frac{1}{2}$', tan: '$-\\sqrt{3}$' }},
// //       135: { name: '135°', description: 'Special angle - $\\frac{3\\pi}{4}$ radians, 180° - 45°', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$-\\frac{\\sqrt{2}}{2}$', tan: '$-1$' }},
// //       150: { name: '150°', description: 'Special angle - $\\frac{5\\pi}{6}$ radians, 180° - 30°', exact: { sin: '$\\frac{1}{2}$', cos: '$-\\frac{\\sqrt{3}}{2}$', tan: '$-\\frac{1}{\\sqrt{3}}$' }},
// //       180: { name: '180°', description: 'Straight angle - $\\pi$ radians, on negative x-axis', exact: { sin: '$0$', cos: '$-1$', tan: '$0$' }},
// //       270: { name: '270°', description: 'Three-quarter turn - $\\frac{3\\pi}{2}$ radians, on negative y-axis', exact: { sin: '$-1$', cos: '$0$', tan: 'undefined' }},
// //       360: { name: '360°', description: 'Full rotation - $2\\pi$ radians, back to positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }}
// //     };

// //     const isSpecialAngle = specialAngles[normalizedDeg];
    
// //     let referenceAngle;
// //     if (normalizedDeg <= 90) referenceAngle = normalizedDeg;
// //     else if (normalizedDeg <= 180) referenceAngle = 180 - normalizedDeg;
// //     else if (normalizedDeg <= 270) referenceAngle = normalizedDeg - 180;
// //     else referenceAngle = 360 - normalizedDeg;

// //     const complement = normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null;
// //     const supplement = normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null;

// //     return {
// //       originalAngle: angleValue,
// //       degreeValue: degreeAngle.toFixed(2),
// //       radianValue: radianAngle.toFixed(5),
// //       normalizedDegree: normalizedDeg.toFixed(1),
// //       quadrant,
// //       isSpecial: !!isSpecialAngle,
// //       specialInfo: isSpecialAngle,
// //       complement,
// //       supplement,
// //       coterminalPositive: (normalizedDeg + 360).toFixed(1),
// //       coterminalNegative: (normalizedDeg - 360).toFixed(1),
// //       referenceAngle: referenceAngle.toFixed(1),
// //       quadrantSigns: {
// //         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
// //         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
// //         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
// //         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
// //       }[quadrant]
// //     };
// //   };

// //   const formatValue = (value) => {
// //     if (value === null) return 'Undefined';
// //     if (Number.isNaN(value)) return '...';
// //     return typeof value === 'number' ? value.toFixed(5) : value;
// //   };

// //   const outerTabStyle = (isActive) => ({
// //     padding: '12px 24px',
// //     cursor: 'pointer',
// //     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
// //     color: isActive ? 'white' : '#333',
// //     border: 'none',
// //     borderBottom: isActive ? 'none' : '1px solid #ddd',
// //     fontSize: '1rem',
// //     fontWeight: isActive ? '600' : '400',
// //     transition: 'all 0.2s ease',
// //     minWidth: '80px',
// //     textTransform: 'uppercase'
// //   });

// //   const innerTabStyle = (isActive) => ({
// //     padding: '8px 16px',
// //     margin: '0 4px',
// //     cursor: 'pointer',
// //     backgroundColor: isActive ? '#4a90e2' : 'transparent',
// //     color: isActive ? 'white' : '#4a90e2',
// //     border: isActive ? 'none' : '1px solid #4a90e2',
// //     borderRadius: '20px',
// //     fontSize: '0.9rem',
// //     fontWeight: '500',
// //     transition: 'all 0.2s ease'
// //   });

// //   const activeInfo = functionInfo[outerTab] || functionInfo.sin;
// //   const angleData = calculateAngleData(angle, units);

// //   useEffect(() => {
// //     if (outerTab !== 'angle-analysis') {
// //       setInnerTab('general-info');
// //     }
// //   }, [outerTab]);

// //   useEffect(() => {
// //     if (selectedFunction && outerTab !== 'angle-analysis') {
// //       setOuterTab(selectedFunction);
// //     }
// //   }, [selectedFunction]);

// //   const handleOuterTabClick = (tab) => {
// //     setOuterTab(tab);
// //     if (tab !== 'angle-analysis') {
// //       onFunctionSelect(tab);
// //     }
// //   };

// //   const renderAngleAnalysis = () => {
// //     if (!angleData) return <div>Enter an angle to see analysis</div>;

// //     return (
// //       <div>
// //         <div style={{
// //           display: 'flex',
// //           justifyContent: 'space-between',
// //           alignItems: 'center',
// //           marginBottom: '20px',
// //           padding: '15px',
// //           backgroundColor: '#e8f4fd',
// //           borderRadius: '8px',
// //           border: '1px solid #1d6bd8'
// //         }}>
// //           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
// //             Angle: {angleData.originalAngle}° Analysis
// //           </h2>
// //           <div style={{
// //             backgroundColor: '#1d6bd8',
// //             color: 'white',
// //             padding: '8px 16px',
// //             borderRadius: '6px',
// //             fontSize: '1.2rem',
// //             fontWeight: 'bold'
// //           }}>
// //             Current angle: {angleData.originalAngle}°
// //           </div>
// //         </div>

// //         {angleData.isSpecial && (
// //           <div style={{
// //             padding: '15px',
// //             backgroundColor: '#d4edda',
// //             border: '1px solid #c3e6cb',
// //             borderRadius: '6px',
// //             marginBottom: '15px'
// //           }}>
// //             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
// //             <p style={{ margin: '0 0 8px 0' }}>
// //               <strong>{processContent(angleData.specialInfo.description)}</strong>
// //             </p>
// //           </div>
// //         )}

// //         <div style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(3, 1fr)',
// //           gap: '15px',
// //           fontSize: '0.95rem'
// //         }}>
// //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// //             <div>
// //               <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
// //               Q{angleData.quadrant}
// //             </div>
// //             {/* <Link href="#" style={{ 
// //               fontSize: '0.95rem', 
// //               color: 'white',
// //               backgroundColor: '#1d6bd8',
// //               textDecoration: 'none',
// //               position: 'absolute',
// //               bottom: '8px',
// //               right: '10px',
// //               padding: '6px 12px',
// //               borderRadius: '6px',
// //               fontWeight: '500'
// //             }}>
// //               Learn more →
// //             </Link> */}
// //           </div>

// //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// //             <div>
// //               <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
// //               {angleData.referenceAngle}° (acute equivalent)
// //             </div>
// //             {/* <Link href="#" style={{ 
// //               fontSize: '0.95rem', 
// //               color: 'white',
// //               backgroundColor: '#1d6bd8',
// //               textDecoration: 'none',
// //               position: 'absolute',
// //               bottom: '8px',
// //               right: '10px',
// //               padding: '6px 12px',
// //               borderRadius: '6px',
// //               fontWeight: '500'
// //             }}>
// //               Learn more →
// //             </Link> */}
// //           </div>

// //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// //             <div>
// //               <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
// //               {angleData.degreeValue}° = {angleData.radianValue} rad
// //             </div>
// //             <Link href="/converters/degree-radians" style={{ 
// //               fontSize: '0.95rem', 
// //               color: 'white',
// //               backgroundColor: '#1d6bd8',
// //               textDecoration: 'none',
// //               position: 'absolute',
// //               bottom: '8px',
// //               right: '10px',
// //               padding: '6px 12px',
// //               borderRadius: '6px',
// //               fontWeight: '500'
// //             }}>
// //               Learn more →
// //             </Link>
// //           </div>

// //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// //             <div>
// //               <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
// //               {angleData.complement ? `90° - ${angleData.originalAngle}° = ${angleData.complement}°` : 'N/A (angle > 90°)'}
// //             </div>
// //             {/* <Link href="#" style={{ 
// //               fontSize: '0.95rem', 
// //               color: 'white',
// //               backgroundColor: '#1d6bd8',
// //               textDecoration: 'none',
// //               position: 'absolute',
// //               bottom: '8px',
// //               right: '10px',
// //               padding: '6px 12px',
// //               borderRadius: '6px',
// //               fontWeight: '500'
// //             }}>
// //               Learn more →
// //             </Link> */}
// //           </div>

// //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// //             <div>
// //               <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
// //               {angleData.supplement ? `180° - ${angleData.originalAngle}° = ${angleData.supplement}°` : 'N/A (angle > 180°)'}
// //             </div>
// //             {/* <Link href="#" style={{ 
// //               fontSize: '0.95rem', 
// //               color: 'white',
// //               backgroundColor: '#1d6bd8',
// //               textDecoration: 'none',
// //               position: 'absolute',
// //               bottom: '8px',
// //               right: '10px',
// //               padding: '6px 12px',
// //               borderRadius: '6px',
// //               fontWeight: '500'
// //             }}>
// //               Learn more →
// //             </Link> */}
// //           </div>

// //           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
// //             <div>
// //               <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
// //               {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
// //             </div>
// //             {/* <Link href="#" style={{ 
// //               fontSize: '0.95rem', 
// //               color: 'white',
// //               backgroundColor: '#1d6bd8',
// //               textDecoration: 'none',
// //               position: 'absolute',
// //               bottom: '8px',
// //               right: '10px',
// //               padding: '6px 12px',
// //               borderRadius: '6px',
// //               fontWeight: '500'
// //             }}>
// //               Learn more →
// //             </Link> */}
// //           </div>
// //         </div>

// //         <div style={{
// //           padding: '12px',
// //           backgroundColor: '#fff3cd',
// //           border: '1px solid #ffeaa7',
// //           borderRadius: '6px'
// //         }}>
// //           <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
// //         </div>
// //       </div>
// //     );
// //   };

// //   const renderGeneralInfo = () => (
// //     <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
// //       gap: '16px',
// //       fontSize: '0.95rem',
// //       lineHeight: '1.6'
// //     }}>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
// //         {processContent(activeInfo.domain)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
// //         {processContent(activeInfo.range)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
// //         {processContent(activeInfo.period)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
// //         {processContent(activeInfo.zeros)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
// //         {processContent(activeInfo.maxima)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
// //         {processContent(activeInfo.minima)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
// //         {processContent(activeInfo.asymptotes)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
// //         {processContent(activeInfo.evenOdd)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
// //         {processContent(`d/dx [${outerTab}(x)] = ${activeInfo.derivative}`)}
// //       </div>
// //       <div style={{ padding: '8px 0' }}>
// //         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
// //         {processContent(`∫ ${outerTab}(x) dx = ${activeInfo.integral}`)}
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div style={{ 
// //       width: '100%',
// //       height: '50vh',
// //       margin: '20px 0',
// //       fontFamily: 'Arial, sans-serif',
// //       border: '1px solid #ddd',
// //       borderRadius: '8px',
// //       overflow: 'hidden',
// //       backgroundColor: 'white'
// //     }}>
// //       <div style={{
// //         display: 'flex',
// //         backgroundColor: '#f9f9f9',
// //         borderBottom: '2px solid #1d6bd8',
// //         flexWrap: 'wrap'
// //       }}>
// //         <button
// //           style={outerTabStyle(outerTab === 'angle-analysis')}
// //           onClick={() => handleOuterTabClick('angle-analysis')}
// //         >
// //           ANGLE ANALYSIS
// //         </button>
// //         {Object.keys(trigoData).map((func) => (
// //           <button
// //             key={func}
// //             style={outerTabStyle(outerTab === func)}
// //             onClick={() => handleOuterTabClick(func)}
// //           >
// //             {func}
// //           </button>
// //         ))}
// //       </div>

// //       {outerTab !== 'angle-analysis' && (
// //         <div style={{
// //           padding: '12px 20px',
// //           backgroundColor: '#fafafa',
// //           borderBottom: '1px solid #eee'
// //         }}>
// //           <button
// //             style={innerTabStyle(innerTab === 'general-info')}
// //             onClick={() => setInnerTab('general-info')}
// //           >
// //             General Info
// //           </button>
// //         </div>
// //       )}

// //       <div style={{
// //         padding: '15px',
// //         height: outerTab === 'angle-analysis' ? 'calc(50vh - 85px)' : 'calc(50vh - 115px)',
// //         overflow: 'hidden',
// //         backgroundColor: 'white'
// //       }}>
// //         {outerTab === 'angle-analysis' ? renderAngleAnalysis() : renderGeneralInfo()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrigoPanel;


// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { processContent } from '@/app/utils/contentProcessor';

// const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
//   const [outerTab, setOuterTab] = useState('angle-analysis');
//   const [innerTab, setInnerTab] = useState('general-info');

//   const functionInfo = {
//     sin: {
//       fullName: 'Sine',
//       domain: 'All real numbers',
//       range: '$[-1, 1]$',
//       period: '$2\\pi$ (360°)',
//       zeros: '$n\\pi$ where $n$ is integer',
//       maxima: '$\\frac{\\pi}{2} + 2n\\pi$ (90° + 360°n)',
//       minima: '$\\frac{3\\pi}{2} + 2n\\pi$ (270° + 360°n)',
//       asymptotes: 'None',
//       evenOdd: 'Odd function: $\\sin(-x) = -\\sin(x)$',
//       derivative: '$\\cos(x)$',
//       integral: '$-\\cos(x) + C$'
//     },
//     cos: {
//       fullName: 'Cosine',
//       domain: 'All real numbers',
//       range: '$[-1, 1]$',
//       period: '$2\\pi$ (360°)',
//       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
//       maxima: '$2n\\pi$ (360°n)',
//       minima: '$\\pi + 2n\\pi$ (180° + 360°n)',
//       asymptotes: 'None',
//       evenOdd: 'Even function: $\\cos(-x) = \\cos(x)$',
//       derivative: '$-\\sin(x)$',
//       integral: '$\\sin(x) + C$'
//     },
//     tan: {
//       fullName: 'Tangent',
//       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
//       range: 'All real numbers',
//       period: '$\\pi$ (180°)',
//       zeros: '$n\\pi$ where $n$ is integer',
//       maxima: 'None (unbounded)',
//       minima: 'None (unbounded)',
//       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
//       evenOdd: 'Odd function: $\\tan(-x) = -\\tan(x)$',
//       derivative: '$\\sec^2(x)$',
//       integral: '$-\\ln|\\cos(x)| + C$'
//     },
//     csc: {
//       fullName: 'Cosecant',
//       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
//       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
//       period: '$2\\pi$ (360°)',
//       zeros: 'None',
//       maxima: 'At $\\sin(x)$ minima: $|\\csc(x)| = 1$',
//       minima: 'At $\\sin(x)$ maxima: $|\\csc(x)| = 1$',
//       asymptotes: '$x = n\\pi$ (vertical)',
//       evenOdd: 'Odd function: $\\csc(-x) = -\\csc(x)$',
//       derivative: '$-\\csc(x)\\cot(x)$',
//       integral: '$-\\ln|\\csc(x) + \\cot(x)| + C$'
//     },
//     sec: {
//       fullName: 'Secant',
//       domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
//       range: '$(-\\infty, -1] \\cup [1, \\infty)$',
//       period: '$2\\pi$ (360°)',
//       zeros: 'None',
//       maxima: 'At $\\cos(x)$ minima: $|\\sec(x)| = 1$',
//       minima: 'At $\\cos(x)$ maxima: $|\\sec(x)| = 1$',
//       asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
//       evenOdd: 'Even function: $\\sec(-x) = \\sec(x)$',
//       derivative: '$\\sec(x)\\tan(x)$',
//       integral: '$\\ln|\\sec(x) + \\tan(x)| + C$'
//     },
//     cot: {
//       fullName: 'Cotangent',
//       domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
//       range: 'All real numbers',
//       period: '$\\pi$ (180°)',
//       zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
//       maxima: 'None (unbounded)',
//       minima: 'None (unbounded)',
//       asymptotes: '$x = n\\pi$ (vertical)',
//       evenOdd: 'Odd function: $\\cot(-x) = -\\cot(x)$',
//       derivative: '$-\\csc^2(x)$',
//       integral: '$\\ln|\\sin(x)| + C$'
//     }
//   };

//   const calculateAngleData = (angleValue, unitType) => {
//     const num = parseFloat(angleValue);
//     if (isNaN(num)) return null;

//     const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
//     const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
//     const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
//     const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
//     const specialAngles = {
//       0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }},
//       30: { name: '30°', description: 'Special angle - $\\frac{\\pi}{6}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{1}{2}$', cos: '$\\frac{\\sqrt{3}}{2}$', tan: '$\\frac{1}{\\sqrt{3}}$' }},
//       45: { name: '45°', description: 'Special angle - $\\frac{\\pi}{4}$ radians, 45-45-90 triangle', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$\\frac{\\sqrt{2}}{2}$', tan: '$1$' }},
//       60: { name: '60°', description: 'Special angle - $\\frac{\\pi}{3}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$\\frac{1}{2}$', tan: '$\\sqrt{3}$' }},
//       90: { name: '90°', description: 'Right angle - $\\frac{\\pi}{2}$ radians, on positive y-axis', exact: { sin: '$1$', cos: '$0$', tan: 'undefined' }},
//       120: { name: '120°', description: 'Special angle - $\\frac{2\\pi}{3}$ radians, 180° - 60°', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$-\\frac{1}{2}$', tan: '$-\\sqrt{3}$' }},
//       135: { name: '135°', description: 'Special angle - $\\frac{3\\pi}{4}$ radians, 180° - 45°', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$-\\frac{\\sqrt{2}}{2}$', tan: '$-1$' }},
//       150: { name: '150°', description: 'Special angle - $\\frac{5\\pi}{6}$ radians, 180° - 30°', exact: { sin: '$\\frac{1}{2}$', cos: '$-\\frac{\\sqrt{3}}{2}$', tan: '$-\\frac{1}{\\sqrt{3}}$' }},
//       180: { name: '180°', description: 'Straight angle - $\\pi$ radians, on negative x-axis', exact: { sin: '$0$', cos: '$-1$', tan: '$0$' }},
//       270: { name: '270°', description: 'Three-quarter turn - $\\frac{3\\pi}{2}$ radians, on negative y-axis', exact: { sin: '$-1$', cos: '$0$', tan: 'undefined' }},
//       360: { name: '360°', description: 'Full rotation - $2\\pi$ radians, back to positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }}
//     };

//     const isSpecialAngle = specialAngles[normalizedDeg];
    
//     let referenceAngle;
//     if (normalizedDeg <= 90) referenceAngle = normalizedDeg;
//     else if (normalizedDeg <= 180) referenceAngle = 180 - normalizedDeg;
//     else if (normalizedDeg <= 270) referenceAngle = normalizedDeg - 180;
//     else referenceAngle = 360 - normalizedDeg;

//     const complement = normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null;
//     const supplement = normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null;

//     return {
//       originalAngle: angleValue,
//       degreeValue: degreeAngle.toFixed(2),
//       radianValue: radianAngle.toFixed(5),
//       normalizedDegree: normalizedDeg.toFixed(1),
//       quadrant,
//       isSpecial: !!isSpecialAngle,
//       specialInfo: isSpecialAngle,
//       complement,
//       supplement,
//       coterminalPositive: (normalizedDeg + 360).toFixed(1),
//       coterminalNegative: (normalizedDeg - 360).toFixed(1),
//       referenceAngle: referenceAngle.toFixed(1),
//       quadrantSigns: {
//         1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
//         2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
//         3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
//         4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
//       }[quadrant]
//     };
//   };

//   const formatValue = (value) => {
//     if (value === null) return 'Undefined';
//     if (Number.isNaN(value)) return '...';
//     return typeof value === 'number' ? value.toFixed(5) : value;
//   };

//   const outerTabStyle = (isActive) => ({
//     padding: '12px 24px',
//     cursor: 'pointer',
//     backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
//     color: isActive ? 'white' : '#333',
//     border: 'none',
//     borderBottom: isActive ? 'none' : '1px solid #ddd',
//     fontSize: '1rem',
//     fontWeight: isActive ? '600' : '400',
//     transition: 'all 0.2s ease',
//     minWidth: '80px',
//     textTransform: 'uppercase'
//   });

//   const innerTabStyle = (isActive) => ({
//     padding: '8px 16px',
//     margin: '0 4px',
//     cursor: 'pointer',
//     backgroundColor: isActive ? '#4a90e2' : 'transparent',
//     color: isActive ? 'white' : '#4a90e2',
//     border: isActive ? 'none' : '1px solid #4a90e2',
//     borderRadius: '20px',
//     fontSize: '0.9rem',
//     fontWeight: '500',
//     transition: 'all 0.2s ease'
//   });

//   const activeInfo = functionInfo[outerTab] || functionInfo.sin;
//   const angleData = calculateAngleData(angle, units);

//   useEffect(() => {
//     if (outerTab !== 'angle-analysis') {
//       setInnerTab('general-info');
//     }
//   }, [outerTab]);

//   useEffect(() => {
//     if (selectedFunction && outerTab !== 'angle-analysis') {
//       setOuterTab(selectedFunction);
//     }
//   }, [selectedFunction]);

//   const handleOuterTabClick = (tab) => {
//     setOuterTab(tab);
//     if (tab !== 'angle-analysis') {
//       onFunctionSelect(tab);
//     }
//   };

//   const renderAngleAnalysis = () => {
//     if (!angleData) return <div>Enter an angle to see analysis</div>;

//     return (
//       <div>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '20px',
//           padding: '15px',
//           backgroundColor: '#e8f4fd',
//           borderRadius: '8px',
//           border: '1px solid #1d6bd8'
//         }}>
//           <h2 style={{ margin: 0, color: '#1d6bd8' }}>
//             Angle: {angleData.originalAngle}° Analysis
//           </h2>
//           <div style={{
//             backgroundColor: '#1d6bd8',
//             color: 'white',
//             padding: '8px 16px',
//             borderRadius: '6px',
//             fontSize: '1.2rem',
//             fontWeight: 'bold'
//           }}>
//             Current angle: {angleData.originalAngle}°
//           </div>
//         </div>

//         {angleData.isSpecial && (
//           <div style={{
//             padding: '15px',
//             backgroundColor: '#d4edda',
//             border: '1px solid #c3e6cb',
//             borderRadius: '6px',
//             marginBottom: '15px'
//           }}>
//             <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
//             <p style={{ margin: '0 0 8px 0' }}>
//               <strong>{processContent(angleData.specialInfo.description)}</strong>
//             </p>
//           </div>
//         )}

//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: '15px',
//           fontSize: '0.95rem'
//         }}>
//           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
//             <div>
//               <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
//               Q{angleData.quadrant}
//             </div>
//             {/* <Link href="#" style={{ 
//               fontSize: '0.95rem', 
//               color: 'white',
//               backgroundColor: '#1d6bd8',
//               textDecoration: 'none',
//               position: 'absolute',
//               bottom: '8px',
//               right: '10px',
//               padding: '6px 12px',
//               borderRadius: '6px',
//               fontWeight: '500'
//             }}>
//               Learn more →
//             </Link> */}
//           </div>

//           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
//             <div>
//               <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
//               {angleData.referenceAngle}° (acute equivalent)
//             </div>
//             {/* <Link href="#" style={{ 
//               fontSize: '0.95rem', 
//               color: 'white',
//               backgroundColor: '#1d6bd8',
//               textDecoration: 'none',
//               position: 'absolute',
//               bottom: '8px',
//               right: '10px',
//               padding: '6px 12px',
//               borderRadius: '6px',
//               fontWeight: '500'
//             }}>
//               Learn more →
//             </Link> */}
//           </div>

//           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
//             <div>
//               <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
//               {angleData.degreeValue}° = {angleData.radianValue} rad
//             </div>
//             <Link href="/converters/degree-radians" style={{ 
//               fontSize: '0.95rem', 
//               color: 'white',
//               backgroundColor: '#1d6bd8',
//               textDecoration: 'none',
//               position: 'absolute',
//               bottom: '8px',
//               right: '10px',
//               padding: '6px 12px',
//               borderRadius: '6px',
//               fontWeight: '500'
//             }}>
//               Learn more →
//             </Link>
//           </div>

//           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
//             <div>
//               <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
//               {angleData.complement ? `90° - ${angleData.originalAngle}° = ${angleData.complement}°` : 'N/A (angle > 90°)'}
//             </div>
//             {/* <Link href="#" style={{ 
//               fontSize: '0.95rem', 
//               color: 'white',
//               backgroundColor: '#1d6bd8',
//               textDecoration: 'none',
//               position: 'absolute',
//               bottom: '8px',
//               right: '10px',
//               padding: '6px 12px',
//               borderRadius: '6px',
//               fontWeight: '500'
//             }}>
//               Learn more →
//             </Link> */}
//           </div>

//           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
//             <div>
//               <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
//               {angleData.supplement ? `180° - ${angleData.originalAngle}° = ${angleData.supplement}°` : 'N/A (angle > 180°)'}
//             </div>
//             {/* <Link href="#" style={{ 
//               fontSize: '0.95rem', 
//               color: 'white',
//               backgroundColor: '#1d6bd8',
//               textDecoration: 'none',
//               position: 'absolute',
//               bottom: '8px',
//               right: '10px',
//               padding: '6px 12px',
//               borderRadius: '6px',
//               fontWeight: '500'
//             }}>
//               Learn more →
//             </Link> */}
//           </div>

//           <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
//             <div>
//               <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
//               {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
//             </div>
//             {/* <Link href="#" style={{ 
//               fontSize: '0.95rem', 
//               color: 'white',
//               backgroundColor: '#1d6bd8',
//               textDecoration: 'none',
//               position: 'absolute',
//               bottom: '8px',
//               right: '10px',
//               padding: '6px 12px',
//               borderRadius: '6px',
//               fontWeight: '500'
//             }}>
//               Learn more →
//             </Link> */}
//           </div>
//         </div>

//         <div style={{
//           padding: '12px',
//           backgroundColor: '#fff3cd',
//           border: '1px solid #ffeaa7',
//           borderRadius: '6px'
//         }}>
//           <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
//         </div>
//       </div>
//     );
//   };

//   const renderGeneralInfo = () => (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '16px',
//       fontSize: '0.95rem',
//       lineHeight: '1.6'
//     }}>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
//         {processContent(activeInfo.domain)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
//         {processContent(activeInfo.range)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
//         {processContent(activeInfo.period)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
//         {processContent(activeInfo.zeros)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
//         {processContent(activeInfo.maxima)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
//         {processContent(activeInfo.minima)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
//         {processContent(activeInfo.asymptotes)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
//         {processContent(activeInfo.evenOdd)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
//         {processContent(`d/dx [${outerTab}(x)] = ${activeInfo.derivative}`)}
//       </div>
//       <div style={{ padding: '8px 0' }}>
//         <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
//         {processContent(`∫ ${outerTab}(x) dx = ${activeInfo.integral}`)}
//       </div>
//     </div>
//   );

//   return (
//     <div style={{ 
//       width: '100%',
//       height: '50vh',
//       margin: '20px 0',
//       fontFamily: 'Arial, sans-serif',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       overflow: 'hidden',
//       backgroundColor: 'white'
//     }}>
//       <div style={{
//         display: 'flex',
//         backgroundColor: '#f9f9f9',
//         borderBottom: '2px solid #1d6bd8',
//         flexWrap: 'wrap'
//       }}>
//         <button
//           style={outerTabStyle(outerTab === 'angle-analysis')}
//           onClick={() => handleOuterTabClick('angle-analysis')}
//         >
//           ANGLE ANALYSIS
//         </button>
//         {Object.keys(trigoData).map((func) => (
//           <button
//             key={func}
//             style={outerTabStyle(outerTab === func)}
//             onClick={() => handleOuterTabClick(func)}
//           >
//             {func}
//           </button>
//         ))}
//       </div>

//       {outerTab !== 'angle-analysis' && (
//         <div style={{
//           padding: '12px 20px',
//           backgroundColor: '#fafafa',
//           borderBottom: '1px solid #eee'
//         }}>
//           <button
//             style={innerTabStyle(innerTab === 'general-info')}
//             onClick={() => setInnerTab('general-info')}
//           >
//             General Info
//           </button>
//           <button
//             style={innerTabStyle(innerTab === 'graph')}
//             onClick={() => setInnerTab('graph')}
//           >
//             Graph
//           </button>
//         </div>
//       )}

//       <div style={{
//         padding: '15px',
//         height: outerTab === 'angle-analysis' ? 'calc(50vh - 85px)' : 'calc(50vh - 115px)',
//         overflow: 'hidden',
//         backgroundColor: 'white'
//       }}>
//         {outerTab === 'angle-analysis' ? renderAngleAnalysis() : renderGeneralInfo()}
//       </div>
//     </div>
//   );
// };

// export default TrigoPanel;


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { processContent } from '@/app/utils/contentProcessor';

const TrigoPanel = ({ trigoData, selectedFunction, onFunctionSelect, angle, units }) => {
  const [outerTab, setOuterTab] = useState('angle-analysis');
  const [innerTab, setInnerTab] = useState('general-info');

  const functionInfo = {
    sin: {
      fullName: 'Sine',
      domain: 'All real numbers',
      range: '$[-1, 1]$',
      period: '$2\\pi$ (360°)',
      zeros: '$n\\pi$ where $n$ is integer',
      maxima: '$\\frac{\\pi}{2} + 2n\\pi$ (90° + 360°n)',
      minima: '$\\frac{3\\pi}{2} + 2n\\pi$ (270° + 360°n)',
      asymptotes: 'None',
      evenOdd: 'Odd function: $\\sin(-x) = -\\sin(x)$',
      derivative: '$\\cos(x)$',
      integral: '$-\\cos(x) + C$'
    },
    cos: {
      fullName: 'Cosine',
      domain: 'All real numbers',
      range: '$[-1, 1]$',
      period: '$2\\pi$ (360°)',
      zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
      maxima: '$2n\\pi$ (360°n)',
      minima: '$\\pi + 2n\\pi$ (180° + 360°n)',
      asymptotes: 'None',
      evenOdd: 'Even function: $\\cos(-x) = \\cos(x)$',
      derivative: '$-\\sin(x)$',
      integral: '$\\sin(x) + C$'
    },
    tan: {
      fullName: 'Tangent',
      domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
      range: 'All real numbers',
      period: '$\\pi$ (180°)',
      zeros: '$n\\pi$ where $n$ is integer',
      maxima: 'None (unbounded)',
      minima: 'None (unbounded)',
      asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
      evenOdd: 'Odd function: $\\tan(-x) = -\\tan(x)$',
      derivative: '$\\sec^2(x)$',
      integral: '$-\\ln|\\cos(x)| + C$'
    },
    csc: {
      fullName: 'Cosecant',
      domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
      range: '$(-\\infty, -1] \\cup [1, \\infty)$',
      period: '$2\\pi$ (360°)',
      zeros: 'None',
      maxima: 'At $\\sin(x)$ minima: $|\\csc(x)| = 1$',
      minima: 'At $\\sin(x)$ maxima: $|\\csc(x)| = 1$',
      asymptotes: '$x = n\\pi$ (vertical)',
      evenOdd: 'Odd function: $\\csc(-x) = -\\csc(x)$',
      derivative: '$-\\csc(x)\\cot(x)$',
      integral: '$-\\ln|\\csc(x) + \\cot(x)| + C$'
    },
    sec: {
      fullName: 'Secant',
      domain: '$x \\neq \\frac{\\pi}{2} + n\\pi$ ($x \\neq$ 90° + 180°n)',
      range: '$(-\\infty, -1] \\cup [1, \\infty)$',
      period: '$2\\pi$ (360°)',
      zeros: 'None',
      maxima: 'At $\\cos(x)$ minima: $|\\sec(x)| = 1$',
      minima: 'At $\\cos(x)$ maxima: $|\\sec(x)| = 1$',
      asymptotes: '$x = \\frac{\\pi}{2} + n\\pi$ (vertical)',
      evenOdd: 'Even function: $\\sec(-x) = \\sec(x)$',
      derivative: '$\\sec(x)\\tan(x)$',
      integral: '$\\ln|\\sec(x) + \\tan(x)| + C$'
    },
    cot: {
      fullName: 'Cotangent',
      domain: '$x \\neq n\\pi$ ($x \\neq$ 180°n)',
      range: 'All real numbers',
      period: '$\\pi$ (180°)',
      zeros: '$\\frac{\\pi}{2} + n\\pi$ where $n$ is integer',
      maxima: 'None (unbounded)',
      minima: 'None (unbounded)',
      asymptotes: '$x = n\\pi$ (vertical)',
      evenOdd: 'Odd function: $\\cot(-x) = -\\cot(x)$',
      derivative: '$-\\csc^2(x)$',
      integral: '$\\ln|\\sin(x)| + C$'
    }
  };

  const calculateAngleData = (angleValue, unitType) => {
    const num = parseFloat(angleValue);
    if (isNaN(num)) return null;

    const degreeAngle = unitType === 'degrees' ? num : (num * 180) / Math.PI;
    const radianAngle = unitType === 'radians' ? num : (num * Math.PI) / 180;
    
    const normalizedDeg = ((degreeAngle % 360) + 360) % 360;
    const quadrant = Math.floor(normalizedDeg / 90) + 1;
    
    const specialAngles = {
      0: { name: '0°', description: 'Zero angle - on positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }},
      30: { name: '30°', description: 'Special angle - $\\frac{\\pi}{6}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{1}{2}$', cos: '$\\frac{\\sqrt{3}}{2}$', tan: '$\\frac{1}{\\sqrt{3}}$' }},
      45: { name: '45°', description: 'Special angle - $\\frac{\\pi}{4}$ radians, 45-45-90 triangle', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$\\frac{\\sqrt{2}}{2}$', tan: '$1$' }},
      60: { name: '60°', description: 'Special angle - $\\frac{\\pi}{3}$ radians, 30-60-90 triangle', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$\\frac{1}{2}$', tan: '$\\sqrt{3}$' }},
      90: { name: '90°', description: 'Right angle - $\\frac{\\pi}{2}$ radians, on positive y-axis', exact: { sin: '$1$', cos: '$0$', tan: 'undefined' }},
      120: { name: '120°', description: 'Special angle - $\\frac{2\\pi}{3}$ radians, 180° - 60°', exact: { sin: '$\\frac{\\sqrt{3}}{2}$', cos: '$-\\frac{1}{2}$', tan: '$-\\sqrt{3}$' }},
      135: { name: '135°', description: 'Special angle - $\\frac{3\\pi}{4}$ radians, 180° - 45°', exact: { sin: '$\\frac{\\sqrt{2}}{2}$', cos: '$-\\frac{\\sqrt{2}}{2}$', tan: '$-1$' }},
      150: { name: '150°', description: 'Special angle - $\\frac{5\\pi}{6}$ radians, 180° - 30°', exact: { sin: '$\\frac{1}{2}$', cos: '$-\\frac{\\sqrt{3}}{2}$', tan: '$-\\frac{1}{\\sqrt{3}}$' }},
      180: { name: '180°', description: 'Straight angle - $\\pi$ radians, on negative x-axis', exact: { sin: '$0$', cos: '$-1$', tan: '$0$' }},
      270: { name: '270°', description: 'Three-quarter turn - $\\frac{3\\pi}{2}$ radians, on negative y-axis', exact: { sin: '$-1$', cos: '$0$', tan: 'undefined' }},
      360: { name: '360°', description: 'Full rotation - $2\\pi$ radians, back to positive x-axis', exact: { sin: '$0$', cos: '$1$', tan: '$0$' }}
    };

    const isSpecialAngle = specialAngles[normalizedDeg];
    
    let referenceAngle;
    if (normalizedDeg <= 90) referenceAngle = normalizedDeg;
    else if (normalizedDeg <= 180) referenceAngle = 180 - normalizedDeg;
    else if (normalizedDeg <= 270) referenceAngle = normalizedDeg - 180;
    else referenceAngle = 360 - normalizedDeg;

    const complement = normalizedDeg < 90 ? (90 - normalizedDeg).toFixed(1) : null;
    const supplement = normalizedDeg < 180 ? (180 - normalizedDeg).toFixed(1) : null;

    return {
      originalAngle: angleValue,
      degreeValue: degreeAngle.toFixed(2),
      radianValue: radianAngle.toFixed(5),
      normalizedDegree: normalizedDeg.toFixed(1),
      quadrant,
      isSpecial: !!isSpecialAngle,
      specialInfo: isSpecialAngle,
      complement,
      supplement,
      coterminalPositive: (normalizedDeg + 360).toFixed(1),
      coterminalNegative: (normalizedDeg - 360).toFixed(1),
      referenceAngle: referenceAngle.toFixed(1),
      quadrantSigns: {
        1: { sin: '+', cos: '+', tan: '+', csc: '+', sec: '+', cot: '+' },
        2: { sin: '+', cos: '-', tan: '-', csc: '+', sec: '-', cot: '-' },
        3: { sin: '-', cos: '-', tan: '+', csc: '-', sec: '-', cot: '+' },
        4: { sin: '-', cos: '+', tan: '-', csc: '-', sec: '+', cot: '-' }
      }[quadrant]
    };
  };

  const formatValue = (value) => {
    if (value === null) return 'Undefined';
    if (Number.isNaN(value)) return '...';
    return typeof value === 'number' ? value.toFixed(5) : value;
  };

  const outerTabStyle = (isActive) => ({
    padding: '12px 24px',
    cursor: 'pointer',
    backgroundColor: isActive ? '#1d6bd8' : '#f5f5f5',
    color: isActive ? 'white' : '#333',
    border: 'none',
    borderBottom: isActive ? 'none' : '1px solid #ddd',
    fontSize: '1rem',
    fontWeight: isActive ? '600' : '400',
    transition: 'all 0.2s ease',
    minWidth: '80px',
    textTransform: 'uppercase'
  });

  const innerTabStyle = (isActive) => ({
    padding: '8px 16px',
    margin: '0 4px',
    cursor: 'pointer',
    backgroundColor: isActive ? '#4a90e2' : 'transparent',
    color: isActive ? 'white' : '#4a90e2',
    border: isActive ? 'none' : '1px solid #4a90e2',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  });

  const activeInfo = functionInfo[outerTab] || functionInfo.sin;
  const angleData = calculateAngleData(angle, units);

  useEffect(() => {
    if (outerTab !== 'angle-analysis') {
      setInnerTab('general-info');
    }
  }, [outerTab]);

  useEffect(() => {
    if (selectedFunction && outerTab !== 'angle-analysis') {
      setOuterTab(selectedFunction);
    }
  }, [selectedFunction]);

  const handleOuterTabClick = (tab) => {
    setOuterTab(tab);
    if (tab !== 'angle-analysis') {
      onFunctionSelect(tab);
    }
  };

  const renderGraph = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '2px dashed #ddd',
      color: '#666',
      fontSize: '1.1rem'
    }}>
      📊 {activeInfo.fullName} function graph will be displayed here
    </div>
  );

  const renderAngleAnalysis = () => {
    if (!angleData) return <div>Enter an angle to see analysis</div>;

    return (
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#e8f4fd',
          borderRadius: '8px',
          border: '1px solid #1d6bd8'
        }}>
          <h2 style={{ margin: 0, color: '#1d6bd8' }}>
            Angle: {angleData.originalAngle}° Analysis
          </h2>
          <div style={{
            backgroundColor: '#1d6bd8',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            Current angle: {angleData.originalAngle}°
          </div>
        </div>

        {angleData.isSpecial && (
          <div style={{
            padding: '15px',
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '6px',
            marginBottom: '15px'
          }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#155724' }}>🌟 Special Angle!</h3>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>{processContent(angleData.specialInfo.description)}</strong>
            </p>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          fontSize: '0.95rem'
        }}>
          <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
            <div>
              <strong style={{ color: '#1d6bd8' }}>Quadrant:</strong><br />
              Q{angleData.quadrant}
            </div>
            {/* <Link href="#" style={{ 
              fontSize: '0.95rem', 
              color: 'white',
              backgroundColor: '#1d6bd8',
              textDecoration: 'none',
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Learn more →
            </Link> */}
          </div>

          <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
            <div>
              <strong style={{ color: '#1d6bd8' }}>Reference Angle:</strong><br />
              {angleData.referenceAngle}° (acute equivalent)
            </div>
            {/* <Link href="#" style={{ 
              fontSize: '0.95rem', 
              color: 'white',
              backgroundColor: '#1d6bd8',
              textDecoration: 'none',
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Learn more →
            </Link> */}
          </div>

          <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
            <div>
              <strong style={{ color: '#1d6bd8' }}>Unit Conversion:</strong><br />
              {angleData.degreeValue}° = {angleData.radianValue} rad
            </div>
            <Link href="/converters/degree-radians" style={{ 
              fontSize: '0.95rem', 
              color: 'white',
              backgroundColor: '#1d6bd8',
              textDecoration: 'none',
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Learn more →
            </Link>
          </div>

          <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
            <div>
              <strong style={{ color: '#1d6bd8' }}>Complement:</strong><br />
              {angleData.complement ? `90° - ${angleData.originalAngle}° = ${angleData.complement}°` : 'N/A (angle > 90°)'}
            </div>
            {/* <Link href="#" style={{ 
              fontSize: '0.95rem', 
              color: 'white',
              backgroundColor: '#1d6bd8',
              textDecoration: 'none',
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Learn more →
            </Link> */}
          </div>

          <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
            <div>
              <strong style={{ color: '#1d6bd8' }}>Supplement:</strong><br />
              {angleData.supplement ? `180° - ${angleData.originalAngle}° = ${angleData.supplement}°` : 'N/A (angle > 180°)'}
            </div>
            {/* <Link href="#" style={{ 
              fontSize: '0.95rem', 
              color: 'white',
              backgroundColor: '#1d6bd8',
              textDecoration: 'none',
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Learn more →
            </Link> */}
          </div>

          <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px', position: 'relative' }}>
            <div>
              <strong style={{ color: '#1d6bd8' }}>Coterminal Angles:</strong><br />
              {angleData.coterminalPositive}°, {angleData.coterminalNegative}°
            </div>
            {/* <Link href="#" style={{ 
              fontSize: '0.95rem', 
              color: 'white',
              backgroundColor: '#1d6bd8',
              textDecoration: 'none',
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: '500'
            }}>
              Learn more →
            </Link> */}
          </div>
        </div>

        <div style={{
          padding: '12px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px'
        }}>
          <strong>💡 Function Signs in Q{angleData.quadrant}:</strong> sin is {angleData.quadrantSigns.sin === '+' ? 'positive' : 'negative'}, cos is {angleData.quadrantSigns.cos === '+' ? 'positive' : 'negative'}, tan is {angleData.quadrantSigns.tan === '+' ? 'positive' : 'negative'}
        </div>
      </div>
    );
  };

  const renderGeneralInfo = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      fontSize: '0.95rem',
      lineHeight: '1.6'
    }}>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Domain:</strong><br />
        {processContent(activeInfo.domain)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Range:</strong><br />
        {processContent(activeInfo.range)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Period:</strong><br />
        {processContent(activeInfo.period)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Zeros:</strong><br />
        {processContent(activeInfo.zeros)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Maximum Values:</strong><br />
        {processContent(activeInfo.maxima)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Minimum Values:</strong><br />
        {processContent(activeInfo.minima)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Asymptotes:</strong><br />
        {processContent(activeInfo.asymptotes)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Symmetry:</strong><br />
        {processContent(activeInfo.evenOdd)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Derivative:</strong><br />
        {processContent(`d/dx [${outerTab}(x)] = ${activeInfo.derivative}`)}
      </div>
      <div style={{ padding: '8px 0' }}>
        <strong style={{ color: '#1d6bd8' }}>Integral:</strong><br />
        {processContent(`∫ ${outerTab}(x) dx = ${activeInfo.integral}`)}
      </div>
    </div>
  );

  return (
    <div style={{ 
      width: '100%',
      height: '50vh',
      margin: '20px 0',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>
      <div style={{
        display: 'flex',
        backgroundColor: '#f9f9f9',
        borderBottom: '2px solid #1d6bd8',
        flexWrap: 'wrap'
      }}>
        <button
          style={outerTabStyle(outerTab === 'angle-analysis')}
          onClick={() => handleOuterTabClick('angle-analysis')}
        >
          ANGLE ANALYSIS
        </button>
        {Object.keys(trigoData).map((func) => (
          <button
            key={func}
            style={outerTabStyle(outerTab === func)}
            onClick={() => handleOuterTabClick(func)}
          >
            {func}
          </button>
        ))}
      </div>

      {outerTab !== 'angle-analysis' && (
        <div style={{
          padding: '12px 20px',
          backgroundColor: '#fafafa',
          borderBottom: '1px solid #eee'
        }}>
          <button
            style={innerTabStyle(innerTab === 'general-info')}
            onClick={() => setInnerTab('general-info')}
          >
            General Info
          </button>
          {/* <button
            style={innerTabStyle(innerTab === 'graph')}
            onClick={() => setInnerTab('graph')}
          >
            Graph
          </button> */}
        </div>
      )}

      <div style={{
        padding: '15px',
        height: outerTab === 'angle-analysis' ? 'calc(50vh - 85px)' : 'calc(50vh - 115px)',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
        {outerTab === 'angle-analysis' ? renderAngleAnalysis() : (
          <>
            {innerTab === 'general-info' && renderGeneralInfo()}
            {innerTab === 'graph' && renderGraph()}
          </>
        )}
      </div>
    </div>
  );
};

export default TrigoPanel;