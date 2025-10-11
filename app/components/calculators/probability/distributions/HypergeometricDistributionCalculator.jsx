// import React, { useState } from 'react';

// export default function HypergeometricCalculator({ links }) {
//   const [N, setN] = useState('');
//   const [K, setK] = useState('');
//   const [n, setNSmall] = useState('');
//   const [results, setResults] = useState(null);
//   const [errors, setErrors] = useState({ N: '', K: '', n: '' });

//   const validateN = (value) => {
//     if (value === '') {
//       setErrors(prev => ({ ...prev, N: '' }));
//       return true;
//     }
    
//     if (!/^\d+$/.test(value)) {
//       setErrors(prev => ({ ...prev, N: 'Must be a positive integer' }));
//       return false;
//     }
    
//     const num = parseInt(value);
//     if (num <= 0) {
//       setErrors(prev => ({ ...prev, N: 'Must be greater than 0' }));
//       return false;
//     }
    
//     setErrors(prev => ({ ...prev, N: '' }));
//     return true;
//   };

//   const validateK = (value) => {
//     if (value === '') {
//       setErrors(prev => ({ ...prev, K: '' }));
//       return true;
//     }
    
//     if (!/^\d+$/.test(value)) {
//       setErrors(prev => ({ ...prev, K: 'Must be a non-negative integer' }));
//       return false;
//     }
    
//     setErrors(prev => ({ ...prev, K: '' }));
//     return true;
//   };

//   const validateNSmall = (value) => {
//     if (value === '') {
//       setErrors(prev => ({ ...prev, n: '' }));
//       return true;
//     }
    
//     if (!/^\d+$/.test(value)) {
//       setErrors(prev => ({ ...prev, n: 'Must be a positive integer' }));
//       return false;
//     }
    
//     const num = parseInt(value);
//     if (num <= 0) {
//       setErrors(prev => ({ ...prev, n: 'Must be greater than 0' }));
//       return false;
//     }
    
//     setErrors(prev => ({ ...prev, n: '' }));
//     return true;
//   };

//   const handleNChange = (value) => {
//     setN(value);
//     validateN(value);
//   };

//   const handleKChange = (value) => {
//     setK(value);
//     validateK(value);
//   };

//   const handleNSmallChange = (value) => {
//     setNSmall(value);
//     validateNSmall(value);
//   };

//   const binomialCoefficient = (n, k) => {
//     if (k > n || k < 0) return 0;
//     if (k === 0 || k === n) return 1;
    
//     let result = 1;
//     for (let i = 0; i < Math.min(k, n - k); i++) {
//       result *= (n - i);
//       result /= (i + 1);
//     }
//     return result;
//   };

//   const hypergeometricPMF = (k, N, K, n) => {
//     // P(X = k) = C(K, k) * C(N-K, n-k) / C(N, n)
//     return (binomialCoefficient(K, k) * binomialCoefficient(N - K, n - k)) / binomialCoefficient(N, n);
//   };

//   const calculate = () => {
//     if (N === '' || K === '' || n === '') {
//       return;
//     }

//     const NVal = parseInt(N);
//     const KVal = parseInt(K);
//     const nVal = parseInt(n);

//     if (isNaN(NVal) || isNaN(KVal) || isNaN(nVal) || NVal <= 0 || KVal < 0 || nVal <= 0) {
//       return;
//     }

//     if (KVal > NVal) {
//       setErrors(prev => ({ ...prev, K: 'K cannot exceed N' }));
//       return;
//     }

//     if (nVal > NVal) {
//       setErrors(prev => ({ ...prev, n: 'n cannot exceed N' }));
//       return;
//     }

//     const mean = (nVal * KVal) / NVal;
//     const variance = (nVal * KVal * (NVal - KVal) * (NVal - nVal)) / (NVal * NVal * (NVal - 1));
//     const stdDev = Math.sqrt(variance);

//     const pmfValues = [];
//     const minK = Math.max(0, nVal - (NVal - KVal));
//     const maxK = Math.min(nVal, KVal);
    
//     for (let k = minK; k <= maxK; k++) {
//       const prob = hypergeometricPMF(k, NVal, KVal, nVal);
//       pmfValues.push({
//         k: k,
//         probability: prob
//       });
//     }

//     setResults({
//       N: NVal,
//       K: KVal,
//       n: nVal,
//       mean: mean,
//       variance: variance,
//       stdDev: stdDev,
//       pmf: pmfValues
//     });
//   };

//   const reset = () => {
//     setN('');
//     setK('');
//     setNSmall('');
//     setResults(null);
//     setErrors({ N: '', K: '', n: '' });
//   };

//   const DistributionChart = ({ pmf }) => {
//     const width = 500;
//     const height = 220;
//     const padding = 35;
//     const chartWidth = width - 2 * padding;
//     const chartHeight = height - 2 * padding;
    
//     const maxProb = Math.max(...pmf.map(item => item.probability));
//     const barWidth = Math.min(chartWidth / pmf.length, 25);
//     const spacing = chartWidth / pmf.length;

//     return (
//       <svg width={width} height={height} style={{ background: 'white', borderRadius: '6px' }}>
//         <line 
//           x1={padding} 
//           y1={height - padding} 
//           x2={width - padding} 
//           y2={height - padding} 
//           stroke="#333" 
//           strokeWidth="1.5"
//         />
//         <line 
//           x1={padding} 
//           y1={padding} 
//           x2={padding} 
//           y2={height - padding} 
//           stroke="#333" 
//           strokeWidth="1.5"
//         />
        
//         <text 
//           x={width / 2} 
//           y={height - 5} 
//           textAnchor="middle" 
//           fontSize="11" 
//           fill="#333"
//           fontWeight="600"
//         >
//           Number of Successes (k)
//         </text>
        
//         <text 
//           x={12} 
//           y={height / 2} 
//           textAnchor="middle" 
//           fontSize="11" 
//           fill="#333"
//           fontWeight="600"
//           transform={`rotate(-90, 12, ${height / 2})`}
//         >
//           P(X = k)
//         </text>

//         {pmf.map((item, i) => {
//           const barHeight = (item.probability / maxProb) * (chartHeight - 15);
//           const x = padding + i * spacing + (spacing - barWidth) / 2;
//           const y = height - padding - barHeight;
          
//           return (
//             <g key={i}>
//               <rect
//                 x={x}
//                 y={y}
//                 width={barWidth}
//                 height={barHeight}
//                 fill="#7fa8f5"
//                 stroke="#245de1"
//                 strokeWidth="1"
//               />
              
//               {(pmf.length <= 15 || i % Math.ceil(pmf.length / 15) === 0) && (
//                 <text
//                   x={x + barWidth / 2}
//                   y={height - padding + 15}
//                   textAnchor="middle"
//                   fontSize="9"
//                   fill="#333"
//                 >
//                   {item.k}
//                 </text>
//               )}
//             </g>
//           );
//         })}
        
//         <text
//           x={padding - 5}
//           y={height - padding + 3}
//           textAnchor="end"
//           fontSize="9"
//           fill="#333"
//         >
//           0
//         </text>
        
//         <text
//           x={padding - 5}
//           y={padding + 3}
//           textAnchor="end"
//           fontSize="9"
//           fill="#333"
//         >
//           {maxProb.toFixed(2)}
//         </text>
//       </svg>
//     );
//   };

//   const getLink = (key) => {
//     if (!links || !links[key]) return null;
//     return `${window.location.pathname}${window.location.search}#${links[key]}`;
//   };

//   const canCalculate = N !== '' && K !== '' && n !== '' && !errors.N && !errors.K && !errors.n;

//   return (
//     <div style={{
//       minHeight: '100vh',
//       padding: '20px',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     }}>
//       <div style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         background: 'white',
//         borderRadius: '12px',
//         overflow: 'hidden',
//         border: 'solid 1.5px lightgray'
//       }}>
//         <div style={{
//           background: '#245de1',
//           padding: '20px',
//           textAlign: 'center',
//           color: 'white'
//         }}>
//           <h1 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: '600' }}>
//             Hypergeometric Distribution Calculator
//           </h1>
//           <p style={{ margin: 0, fontSize: '13px', opacity: 0.95 }}>
//             Sampling without replacement - Enter N, K, and n
//           </p>
//         </div>

//         <div style={{ padding: '20px' }}>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: results ? '280px 1fr' : '1fr',
//             gap: '20px',
//             alignItems: 'start'
//           }}>
//             <div>
//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '14px',
//                 borderRadius: '8px',
//                 border: N !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
//                 marginBottom: '12px'
//               }}>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '15px',
//                   fontWeight: '600',
//                   marginBottom: '5px',
//                   color: '#2d3748'
//                 }}>
//                   N (population size)
//                 </label>
//                 <p style={{
//                   fontSize: '12px',
//                   color: '#718096',
//                   marginBottom: '8px'
//                 }}>
//                   Total number of items in population
//                 </p>
//                 <input
//                   type="text"
//                   placeholder="e.g., 52"
//                   value={N}
//                   onChange={(e) => handleNChange(e.target.value)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     fontSize: '15px',
//                     border: errors.N ? '2px solid #e53e3e' : '2px solid #e2e8f0',
//                     borderRadius: '6px',
//                     outline: 'none',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//                 {errors.N && (
//                   <div style={{
//                     color: '#e53e3e',
//                     fontSize: '11px',
//                     marginTop: '5px',
//                     fontWeight: '500'
//                   }}>
//                     {errors.N}
//                   </div>
//                 )}
//               </div>

//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '14px',
//                 borderRadius: '8px',
//                 border: K !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
//                 marginBottom: '12px'
//               }}>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '15px',
//                   fontWeight: '600',
//                   marginBottom: '5px',
//                   color: '#2d3748'
//                 }}>
//                   K (success states)
//                 </label>
//                 <p style={{
//                   fontSize: '12px',
//                   color: '#718096',
//                   marginBottom: '8px'
//                 }}>
//                   Number of success items in population
//                 </p>
//                 <input
//                   type="text"
//                   placeholder="e.g., 13"
//                   value={K}
//                   onChange={(e) => handleKChange(e.target.value)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     fontSize: '15px',
//                     border: errors.K ? '2px solid #e53e3e' : '2px solid #e2e8f0',
//                     borderRadius: '6px',
//                     outline: 'none',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//                 {errors.K && (
//                   <div style={{
//                     color: '#e53e3e',
//                     fontSize: '11px',
//                     marginTop: '5px',
//                     fontWeight: '500'
//                   }}>
//                     {errors.K}
//                   </div>
//                 )}
//               </div>

//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '14px',
//                 borderRadius: '8px',
//                 border: n !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
//                 marginBottom: '12px'
//               }}>
//                 <label style={{
//                   display: 'block',
//                   fontSize: '15px',
//                   fontWeight: '600',
//                   marginBottom: '5px',
//                   color: '#2d3748'
//                 }}>
//                   n (sample size)
//                 </label>
//                 <p style={{
//                   fontSize: '12px',
//                   color: '#718096',
//                   marginBottom: '8px'
//                 }}>
//                   Number of items drawn
//                 </p>
//                 <input
//                   type="text"
//                   placeholder="e.g., 5"
//                   value={n}
//                   onChange={(e) => handleNSmallChange(e.target.value)}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     fontSize: '15px',
//                     border: errors.n ? '2px solid #e53e3e' : '2px solid #e2e8f0',
//                     borderRadius: '6px',
//                     outline: 'none',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//                 {errors.n && (
//                   <div style={{
//                     color: '#e53e3e',
//                     fontSize: '11px',
//                     marginTop: '5px',
//                     fontWeight: '500'
//                   }}>
//                     {errors.n}
//                   </div>
//                 )}
//               </div>

//               <div style={{
//                 display: 'flex',
//                 gap: '10px',
//                 marginBottom: '12px'
//               }}>
//                 <button
//                   onClick={calculate}
//                   disabled={!canCalculate}
//                   style={{
//                     flex: 1,
//                     background: canCalculate ? '#245de1' : '#cbd5e0',
//                     color: 'white',
//                     border: 'none',
//                     padding: '10px',
//                     fontSize: '14px',
//                     fontWeight: '600',
//                     borderRadius: '6px',
//                     cursor: canCalculate ? 'pointer' : 'not-allowed'
//                   }}
//                 >
//                   Calculate
//                 </button>
//                 <button
//                   onClick={reset}
//                   style={{
//                     flex: 1,
//                     background: 'white',
//                     color: '#245de1',
//                     border: '2px solid #245de1',
//                     padding: '10px',
//                     fontSize: '14px',
//                     fontWeight: '600',
//                     borderRadius: '6px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Reset
//                 </button>
//               </div>

//               {results && (
//                 <div style={{
//                   padding: '12px',
//                   background: '#e6f2ff',
//                   borderRadius: '8px',
//                   border: '2px solid #245de1'
//                 }}>
//                   <h3 style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#245de1' }}>
//                     Distribution Info
//                   </h3>
//                   <p style={{ margin: '3px 0', fontSize: '11px', color: '#2d3748', lineHeight: '1.4' }}>
//                     PMF: P(X = k) = C(K,k) × C(N-K,n-k) / C(N,n)
//                   </p>
//                   <p style={{ margin: '3px 0', fontSize: '11px', color: '#2d3748', lineHeight: '1.4' }}>
//                     Models sampling without replacement
//                   </p>
//                 </div>
//               )}
//             </div>

//             {results && (
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 520px',
//                 gap: '20px',
//                 alignItems: 'start'
//               }}>
//                 <div>
//                   <div style={{
//                     display: 'grid',
//                     gap: '10px',
//                     marginBottom: '15px'
//                   }}>
//                     <div style={{
//                       background: '#f8f9fa',
//                       padding: '12px',
//                       borderRadius: '8px',
//                       border: '1.5px solid #e2e8f0'
//                     }}>
//                       <div style={{ 
//                         display: 'flex', 
//                         alignItems: 'center',
//                         marginBottom: getLink('mean') ? '8px' : '0'
//                       }}>
//                         <div style={{ flex: 1 }}>
//                           <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
//                             Mean (μ)
//                           </div>
//                           <div style={{ fontSize: '11px', color: '#718096' }}>
//                             Expected successes: nK / N
//                           </div>
//                         </div>
//                         <div style={{
//                           fontSize: '20px',
//                           fontWeight: '700',
//                           color: '#245de1',
//                           marginLeft: '15px'
//                         }}>
//                           {results.mean.toFixed(4)}
//                         </div>
//                       </div>
//                       {getLink('mean') && (
//                         <a 
//                           href={getLink('mean')} 
//                           style={{ 
//                             fontSize: '11px', 
//                             color: '#245de1',
//                             textDecoration: 'none',
//                             fontWeight: '600',
//                             display: 'block'
//                           }}
//                         >
//                           Learn more →
//                         </a>
//                       )}
//                     </div>

//                     <div style={{
//                       background: '#f8f9fa',
//                       padding: '12px',
//                       borderRadius: '8px',
//                       border: '1.5px solid #e2e8f0'
//                     }}>
//                       <div style={{ 
//                         display: 'flex', 
//                         alignItems: 'center',
//                         marginBottom: getLink('variance') ? '8px' : '0'
//                       }}>
//                         <div style={{ flex: 1 }}>
//                           <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
//                             Variance (σ²)
//                           </div>
//                           <div style={{ fontSize: '11px', color: '#718096' }}>
//                             nK(N-K)(N-n) / [N²(N-1)]
//                           </div>
//                         </div>
//                         <div style={{
//                           fontSize: '20px',
//                           fontWeight: '700',
//                           color: '#245de1',
//                           marginLeft: '15px'
//                         }}>
//                           {results.variance.toFixed(4)}
//                         </div>
//                       </div>
//                       {getLink('variance') && (
//                         <a 
//                           href={getLink('variance')} 
//                           style={{ 
//                             fontSize: '11px', 
//                             color: '#245de1',
//                             textDecoration: 'none',
//                             fontWeight: '600',
//                             display: 'block'
//                           }}
//                         >
//                           Learn more →
//                         </a>
//                       )}
//                     </div>

//                     <div style={{
//                       background: '#f8f9fa',
//                       padding: '12px',
//                       borderRadius: '8px',
//                       border: '1.5px solid #e2e8f0'
//                     }}>
//                       <div style={{ 
//                         display: 'flex', 
//                         alignItems: 'center',
//                         marginBottom: getLink('stdDev') ? '8px' : '0'
//                       }}>
//                         <div style={{ flex: 1 }}>
//                           <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
//                             Standard Deviation (σ)
//                           </div>
//                           <div style={{ fontSize: '11px', color: '#718096' }}>
//                             Square root of variance
//                           </div>
//                         </div>
//                         <div style={{
//                           fontSize: '20px',
//                           fontWeight: '700',
//                           color: '#245de1',
//                           marginLeft: '15px'
//                         }}>
//                           {results.stdDev.toFixed(4)}
//                         </div>
//                       </div>
//                       {getLink('stdDev') && (
//                         <a 
//                           href={getLink('stdDev')} 
//                           style={{ 
//                             fontSize: '11px', 
//                             color: '#245de1',
//                             textDecoration: 'none',
//                             fontWeight: '600',
//                             display: 'block'
//                           }}
//                         >
//                           Learn more →
//                         </a>
//                       )}
//                     </div>
//                   </div>

//                   <div style={{
//                     background: '#f8f9fa',
//                     padding: '12px',
//                     borderRadius: '8px',
//                     border: '1.5px solid #e2e8f0',
//                     maxHeight: '330px',
//                     overflowY: 'auto'
//                   }}>
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
//                       <h3 style={{ margin: 0, fontSize: '14px', color: '#2d3748' }}>
//                         Probability Mass Function
//                       </h3>
//                       {getLink('pmf') && (
//                         <a 
//                           href={getLink('pmf')} 
//                           style={{ 
//                             fontSize: '11px', 
//                             color: '#245de1',
//                             textDecoration: 'none',
//                             fontWeight: '600',
//                             whiteSpace: 'nowrap'
//                           }}
//                         >
//                           Learn more →
//                         </a>
//                       )}
//                     </div>
//                     <div style={{ display: 'grid', gap: '5px' }}>
//                       {results.pmf.map((item) => (
//                         <div key={item.k} style={{
//                           display: 'flex',
//                           justifyContent: 'space-between',
//                           padding: '6px 10px',
//                           background: 'white',
//                           borderRadius: '4px',
//                           fontSize: '12px'
//                         }}>
//                           <span style={{ fontWeight: '600', color: '#2d3748' }}>
//                             P(X = {item.k})
//                           </span>
//                           <span style={{ color: '#245de1', fontWeight: '600' }}>
//                             {item.probability.toFixed(6)}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <DistributionChart pmf={results.pmf} />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function HypergeometricCalculator({ links }) {
  const [N, setN] = useState('');
  const [K, setK] = useState('');
  const [n, setNSmall] = useState('');
  const [k, setKSmall] = useState('');
  const [queryType, setQueryType] = useState('all');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({ N: '', K: '', n: '', k: '' });

  const validateN = (value) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, N: '' }));
      return true;
    }
    
    if (!/^\d+$/.test(value)) {
      setErrors(prev => ({ ...prev, N: 'Must be a positive integer' }));
      return false;
    }
    
    const num = parseInt(value);
    if (num <= 0) {
      setErrors(prev => ({ ...prev, N: 'Must be greater than 0' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, N: '' }));
    return true;
  };

  const validateK = (value) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, K: '' }));
      return true;
    }
    
    if (!/^\d+$/.test(value)) {
      setErrors(prev => ({ ...prev, K: 'Must be a non-negative integer' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, K: '' }));
    return true;
  };

  const validateNSmall = (value) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, n: '' }));
      return true;
    }
    
    if (!/^\d+$/.test(value)) {
      setErrors(prev => ({ ...prev, n: 'Must be a positive integer' }));
      return false;
    }
    
    const num = parseInt(value);
    if (num <= 0) {
      setErrors(prev => ({ ...prev, n: 'Must be greater than 0' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, n: '' }));
    return true;
  };

  const validateKSmall = (value) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, k: '' }));
      return true;
    }
    
    if (!/^\d+$/.test(value)) {
      setErrors(prev => ({ ...prev, k: 'Must be a non-negative integer' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, k: '' }));
    return true;
  };

  const handleNChange = (value) => {
    setN(value);
    validateN(value);
  };

  const handleKChange = (value) => {
    setK(value);
    validateK(value);
  };

  const handleNSmallChange = (value) => {
    setNSmall(value);
    validateNSmall(value);
  };

  const handleKSmallChange = (value) => {
    setKSmall(value);
    validateKSmall(value);
  };

  const handleQueryTypeChange = (value) => {
    setQueryType(value);
    setResults(null);
    setKSmall('');
    setErrors({ N: '', K: '', n: '', k: '' });
  };

  const binomialCoefficient = (n, k) => {
    if (k > n || k < 0) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 0; i < Math.min(k, n - k); i++) {
      result *= (n - i);
      result /= (i + 1);
    }
    return result;
  };

  const hypergeometricPMF = (k, N, K, n) => {
    return (binomialCoefficient(K, k) * binomialCoefficient(N - K, n - k)) / binomialCoefficient(N, n);
  };

  const calculate = () => {
    if (N === '' || K === '' || n === '') {
      return;
    }

    if (queryType !== 'all' && k === '') {
      return;
    }

    const NVal = parseInt(N);
    const KVal = parseInt(K);
    const nVal = parseInt(n);

    if (isNaN(NVal) || isNaN(KVal) || isNaN(nVal) || NVal <= 0 || KVal < 0 || nVal <= 0) {
      return;
    }

    if (KVal > NVal) {
      setErrors(prev => ({ ...prev, K: 'K cannot exceed N' }));
      return;
    }

    if (nVal > NVal) {
      setErrors(prev => ({ ...prev, n: 'n cannot exceed N' }));
      return;
    }

    const mean = (nVal * KVal) / NVal;
    const variance = (nVal * KVal * (NVal - KVal) * (NVal - nVal)) / (NVal * NVal * (NVal - 1));
    const stdDev = Math.sqrt(variance);

    const pmfValues = [];
    const minK = Math.max(0, nVal - (NVal - KVal));
    const maxK = Math.min(nVal, KVal);
    
    for (let i = minK; i <= maxK; i++) {
      const prob = hypergeometricPMF(i, NVal, KVal, nVal);
      pmfValues.push({
        k: i,
        probability: prob
      });
    }

    let queryResult = null;

    if (queryType !== 'all') {
      const kVal = parseInt(k);
      if (isNaN(kVal) || kVal < 0) {
        return;
      }

      if (kVal < minK || kVal > maxK) {
        setErrors(prev => ({ ...prev, k: `k must be between ${minK} and ${maxK}` }));
        return;
      }

      let prob = 0;
      switch(queryType) {
        case 'equal':
          prob = hypergeometricPMF(kVal, NVal, KVal, nVal);
          break;
        case 'less':
          for (let i = minK; i < kVal; i++) {
            prob += hypergeometricPMF(i, NVal, KVal, nVal);
          }
          break;
        case 'lessEqual':
          for (let i = minK; i <= kVal; i++) {
            prob += hypergeometricPMF(i, NVal, KVal, nVal);
          }
          break;
        case 'greater':
          for (let i = kVal + 1; i <= maxK; i++) {
            prob += hypergeometricPMF(i, NVal, KVal, nVal);
          }
          break;
        case 'greaterEqual':
          for (let i = kVal; i <= maxK; i++) {
            prob += hypergeometricPMF(i, NVal, KVal, nVal);
          }
          break;
      }

      queryResult = {
        type: queryType,
        k: kVal,
        probability: prob
      };
    }

    setResults({
      N: NVal,
      K: KVal,
      n: nVal,
      mean: mean,
      variance: variance,
      stdDev: stdDev,
      pmf: pmfValues,
      query: queryResult
    });
  };

  const reset = () => {
    setN('');
    setK('');
    setNSmall('');
    setKSmall('');
    setResults(null);
    setErrors({ N: '', K: '', n: '', k: '' });
  };

  const DistributionChart = ({ pmf }) => {
    const width = 500;
    const height = 220;
    const padding = 35;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    const maxProb = Math.max(...pmf.map(item => item.probability));
    const barWidth = Math.min(chartWidth / pmf.length, 25);
    const spacing = chartWidth / pmf.length;

    return (
      <svg width={width} height={height} style={{ background: 'white', borderRadius: '6px' }}>
        <line 
          x1={padding} 
          y1={height - padding} 
          x2={width - padding} 
          y2={height - padding} 
          stroke="#333" 
          strokeWidth="1.5"
        />
        <line 
          x1={padding} 
          y1={padding} 
          x2={padding} 
          y2={height - padding} 
          stroke="#333" 
          strokeWidth="1.5"
        />
        
        <text 
          x={width / 2} 
          y={height - 5} 
          textAnchor="middle" 
          fontSize="11" 
          fill="#333"
          fontWeight="600"
        >
          Number of Successes (k)
        </text>
        
        <text 
          x={12} 
          y={height / 2} 
          textAnchor="middle" 
          fontSize="11" 
          fill="#333"
          fontWeight="600"
          transform={`rotate(-90, 12, ${height / 2})`}
        >
          P(X = k)
        </text>

        {pmf.map((item, i) => {
          const barHeight = (item.probability / maxProb) * (chartHeight - 15);
          const x = padding + i * spacing + (spacing - barWidth) / 2;
          const y = height - padding - barHeight;
          
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="#7fa8f5"
                stroke="#245de1"
                strokeWidth="1"
              />
              
              {(pmf.length <= 15 || i % Math.ceil(pmf.length / 15) === 0) && (
                <text
                  x={x + barWidth / 2}
                  y={height - padding + 15}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#333"
                >
                  {item.k}
                </text>
              )}
            </g>
          );
        })}
        
        <text
          x={padding - 5}
          y={height - padding + 3}
          textAnchor="end"
          fontSize="9"
          fill="#333"
        >
          0
        </text>
        
        <text
          x={padding - 5}
          y={padding + 3}
          textAnchor="end"
          fontSize="9"
          fill="#333"
        >
          {maxProb.toFixed(2)}
        </text>
      </svg>
    );
  };

  const getLink = (key) => {
    if (!links || !links[key]) return null;
    return `${window.location.pathname}${window.location.search}#${links[key]}`;
  };

  const getQueryLabel = () => {
    if (!results || !results.query) return '';
    switch(results.query.type) {
      case 'equal': return `P(X = ${results.query.k})`;
      case 'less': return `P(X < ${results.query.k})`;
      case 'lessEqual': return `P(X ≤ ${results.query.k})`;
      case 'greater': return `P(X > ${results.query.k})`;
      case 'greaterEqual': return `P(X ≥ ${results.query.k})`;
      default: return '';
    }
  };

  const canCalculate = N !== '' && K !== '' && n !== '' && !errors.N && !errors.K && !errors.n &&
    (queryType === 'all' || (k !== '' && !errors.k));

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        border: 'solid 1.5px lightgray'
      }}>
        <div style={{
          background: '#245de1',
          padding: '20px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: '600' }}>
            Hypergeometric Distribution Calculator
          </h1>
          <p style={{ margin: 0, fontSize: '13px', opacity: 0.95 }}>
            Calculate probabilities and distribution properties
          </p>
        </div>

        <div style={{ padding: '20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: results ? '280px 1fr' : '1fr',
            gap: '20px',
            alignItems: 'start'
          }}>
            <div>
              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#2d3748'
                }}>
                  Probability Type
                </label>
                <select
                  value={queryType}
                  onChange={(e) => handleQueryTypeChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    background: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">All values (full distribution)</option>
                  <option value="equal">P(X = k)</option>
                  <option value="less">P(X &lt; k)</option>
                  <option value="lessEqual">P(X ≤ k)</option>
                  <option value="greater">P(X &gt; k)</option>
                  <option value="greaterEqual">P(X ≥ k)</option>
                </select>
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: N !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  N (population size)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Total number of items in population
                </p>
                <input
                  type="text"
                  placeholder="e.g., 52"
                  value={N}
                  onChange={(e) => handleNChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.N ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.N && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.N}
                  </div>
                )}
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: K !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  K (success states)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Number of success items in population
                </p>
                <input
                  type="text"
                  placeholder="e.g., 13"
                  value={K}
                  onChange={(e) => handleKChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.K ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.K && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.K}
                  </div>
                )}
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '14px',
                borderRadius: '8px',
                border: n !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '12px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px',
                  color: '#2d3748'
                }}>
                  n (sample size)
                </label>
                <p style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginBottom: '8px'
                }}>
                  Number of items drawn
                </p>
                <input
                  type="text"
                  placeholder="e.g., 5"
                  value={n}
                  onChange={(e) => handleNSmallChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '15px',
                    border: errors.n ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.n && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '11px',
                    marginTop: '5px',
                    fontWeight: '500'
                  }}>
                    {errors.n}
                  </div>
                )}
              </div>

              {queryType !== 'all' && (
                <div style={{
                  background: '#f8f9fa',
                  padding: '14px',
                  borderRadius: '8px',
                  border: k !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                  marginBottom: '12px'
                }}>
                  <label style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: '600',
                    marginBottom: '5px',
                    color: '#2d3748'
                  }}>
                    k (number of successes)
                  </label>
                  <p style={{
                    fontSize: '12px',
                    color: '#718096',
                    marginBottom: '8px'
                  }}>
                    Target number of successes in sample
                  </p>
                  <input
                    type="text"
                    placeholder="e.g., 3"
                    value={k}
                    onChange={(e) => handleKSmallChange(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      fontSize: '15px',
                      border: errors.k ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                      borderRadius: '6px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  {errors.k && (
                    <div style={{
                      color: '#e53e3e',
                      fontSize: '11px',
                      marginTop: '5px',
                      fontWeight: '500'
                    }}>
                      {errors.k}
                    </div>
                  )}
                </div>
              )}

              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '12px'
              }}>
                <button
                  onClick={calculate}
                  disabled={!canCalculate}
                  style={{
                    flex: 1,
                    background: canCalculate ? '#245de1' : '#cbd5e0',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '6px',
                    cursor: canCalculate ? 'pointer' : 'not-allowed'
                  }}
                >
                  Calculate
                </button>
                <button
                  onClick={reset}
                  style={{
                    flex: 1,
                    background: 'white',
                    color: '#245de1',
                    border: '2px solid #245de1',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Reset
                </button>
              </div>

              {results && (
                <div style={{
                  padding: '12px',
                  background: '#e6f2ff',
                  borderRadius: '8px',
                  border: '2px solid #245de1'
                }}>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#245de1' }}>
                    Distribution Info
                  </h3>
                  <p style={{ margin: '3px 0', fontSize: '11px', color: '#2d3748', lineHeight: '1.4' }}>
                    PMF: P(X = k) = C(K,k) × C(N-K,n-k) / C(N,n)
                  </p>
                  <p style={{ margin: '3px 0', fontSize: '11px', color: '#2d3748', lineHeight: '1.4' }}>
                    Models sampling without replacement
                  </p>
                </div>
              )}
            </div>

            {results && (
              <div>
                {results.query && (
                  <div style={{
                    background: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '12px',
                    border: '2px solid #245de1',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748', marginBottom: '12px' }}>
                      {getQueryLabel()}
                    </div>
                    <div style={{
                      fontSize: '48px',
                      fontWeight: '700',
                      color: '#245de1',
                      marginBottom: '8px'
                    }}>
                      {results.query.probability.toFixed(6)}
                    </div>
                  </div>
                )}

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: queryType === 'all' ? '1fr 520px' : '1fr 1fr',
                  gap: '20px',
                  alignItems: 'start'
                }}>
                  <div>
                    <div style={{
                      display: 'grid',
                      gap: '10px',
                      marginBottom: queryType === 'all' ? '15px' : '0'
                    }}>
                      <div style={{
                        background: '#f8f9fa',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1.5px solid #e2e8f0'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          marginBottom: getLink('mean') ? '8px' : '0'
                        }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
                              Mean (μ)
                            </div>
                            <div style={{ fontSize: '11px', color: '#718096' }}>
                              Expected successes: nK / N
                            </div>
                          </div>
                          <div style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#245de1',
                            marginLeft: '15px'
                          }}>
                            {results.mean.toFixed(4)}
                          </div>
                        </div>
                        {getLink('mean') && (
                          <a 
                            href={getLink('mean')} 
                            style={{ 
                              fontSize: '11px', 
                              color: '#245de1',
                              textDecoration: 'none',
                              fontWeight: '600',
                              display: 'block'
                            }}
                          >
                            Learn more →
                          </a>
                        )}
                      </div>

                      <div style={{
                        background: '#f8f9fa',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1.5px solid #e2e8f0'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          marginBottom: getLink('variance') ? '8px' : '0'
                        }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
                              Variance (σ²)
                            </div>
                            <div style={{ fontSize: '11px', color: '#718096' }}>
                              nK(N-K)(N-n) / [N²(N-1)]
                            </div>
                          </div>
                          <div style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#245de1',
                            marginLeft: '15px'
                          }}>
                            {results.variance.toFixed(4)}
                          </div>
                        </div>
                        {getLink('variance') && (
                          <a 
                            href={getLink('variance')} 
                            style={{ 
                              fontSize: '11px', 
                              color: '#245de1',
                              textDecoration: 'none',
                              fontWeight: '600',
                              display: 'block'
                            }}
                          >
                            Learn more →
                          </a>
                        )}
                      </div>

                      <div style={{
                        background: '#f8f9fa',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1.5px solid #e2e8f0'
                      }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          marginBottom: getLink('stdDev') ? '8px' : '0'
                        }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '2px' }}>
                              Standard Deviation (σ)
                            </div>
                            <div style={{ fontSize: '11px', color: '#718096' }}>
                              Square root of variance
                            </div>
                          </div>
                          <div style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#245de1',
                            marginLeft: '15px'
                          }}>
                            {results.stdDev.toFixed(4)}
                          </div>
                        </div>
                        {getLink('stdDev') && (
                          <a 
                            href={getLink('stdDev')} 
                            style={{ 
                              fontSize: '11px', 
                              color: '#245de1',
                              textDecoration: 'none',
                              fontWeight: '600',
                              display: 'block'
                            }}
                          >
                            Learn more →
                          </a>
                        )}
                      </div>
                    </div>

                    {queryType === 'all' && (
                      <div style={{
                        background: '#f8f9fa',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1.5px solid #e2e8f0',
                        maxHeight: '330px',
                        overflowY: 'auto'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <h3 style={{ margin: 0, fontSize: '14px', color: '#2d3748' }}>
                            Probability Mass Function
                          </h3>
                          {getLink('pmf') && (
                            <a 
                              href={getLink('pmf')} 
                              style={{ 
                                fontSize: '11px', 
                                color: '#245de1',
                                textDecoration: 'none',
                                fontWeight: '600',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              Learn more →
                            </a>
                          )}
                        </div>
                        <div style={{ display: 'grid', gap: '5px' }}>
                          {results.pmf.map((item) => (
                            <div key={item.k} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              padding: '6px 10px',
                              background: 'white',
                              borderRadius: '4px',
                              fontSize: '12px'
                            }}>
                              <span style={{ fontWeight: '600', color: '#2d3748' }}>
                                P(X = {item.k})
                              </span>
                              <span style={{ color: '#245de1', fontWeight: '600' }}>
                                {item.probability.toFixed(6)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {queryType === 'all' && (
                    <div>
                      <DistributionChart pmf={results.pmf} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}