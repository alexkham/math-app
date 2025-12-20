// 'use client';

// import { useState, useEffect, useMemo } from 'react';

// export default function CLTSimulator({ customExplanations = null }) {
//   const [distributionType, setDistributionType] = useState('skewed');
//   const [sampleSize, setSampleSize] = useState(2);
//   const [numSamples, setNumSamples] = useState(2000);
//   const [sampleMeans, setSampleMeans] = useState([]);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [animationSpeed, setAnimationSpeed] = useState(500);
//   const [isMounted, setIsMounted] = useState(false);

//   // Random number generators
//   const randomUniform = () => Math.random();
  
//   const randomExponential = (lambda = 0.2) => -Math.log(1 - Math.random()) / lambda;
  
//   const randomBinomial = (n = 100, p = 0.05) => {
//     let successes = 0;
//     for (let i = 0; i < n; i++) {
//       if (Math.random() < p) successes++;
//     }
//     return successes;
//   };
  
//   const randomSkewed = () => {
//     const u = Math.random();
//     const alpha = 1.16;
//     return Math.pow(1 - u, -1/alpha) - 1;
//   };
  
//   const randomNormal = (mean = 0, stdDev = 1) => {
//     const u1 = Math.random();
//     const u2 = Math.random();
//     const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
//     return z0 * stdDev + mean;
//   };
  
//   const randomGeometric = (p = 0.3) => {
//     return Math.floor(Math.log(Math.random()) / Math.log(1 - p)) + 1;
//   };
  
//   const randomNegativeBinomial = (r = 5, p = 0.3) => {
//     let trials = 0;
//     let successes = 0;
//     while (successes < r) {
//       trials++;
//       if (Math.random() < p) successes++;
//     }
//     return trials;
//   };
  
//   const randomHypergeometric = (N = 50, K = 20, n = 10) => {
//     let successes = 0;
//     let population = K;
//     let remaining = N;
//     for (let i = 0; i < n; i++) {
//       if (Math.random() < population / remaining) {
//         successes++;
//         population--;
//       }
//       remaining--;
//     }
//     return successes;
//   };
  
//   const randomPoisson = (lambda = 3) => {
//     const L = Math.exp(-lambda);
//     let k = 0;
//     let p = 1;
//     do {
//       k++;
//       p *= Math.random();
//     } while (p > L);
//     return k - 1;
//   };
  
//   const randomDiscreteUniform = (min = 1, max = 10) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const generateValue = (type) => {
//     switch (type) {
//       case 'uniform': return randomUniform();
//       case 'exponential': return randomExponential();
//       case 'binomial': return randomBinomial();
//       case 'skewed': return randomSkewed();
//       case 'geometric': return randomGeometric();
//       case 'negativebinomial': return randomNegativeBinomial();
//       case 'hypergeometric': return randomHypergeometric();
//       case 'poisson': return randomPoisson();
//       case 'discreteuniform': return randomDiscreteUniform();
//       default: return randomUniform();
//     }
//   };

//   const generateSample = (type, size) => {
//     const sample = [];
//     const actualSize = Math.max(1, size);
//     for (let i = 0; i < actualSize; i++) {
//       sample.push(generateValue(type));
//     }
//     return sample;
//   };

//   const mean = (array) => array.reduce((sum, val) => sum + val, 0) / array.length;

//   const runSimulation = () => {
//     setIsRunning(true);
//     const means = [];
//     for (let i = 0; i < numSamples; i++) {
//       const sample = generateSample(distributionType, sampleSize);
//       means.push(mean(sample));
//     }
//     setSampleMeans(means);
//     setIsRunning(false);
//   };

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (isMounted) {
//       runSimulation();
//     }
//   }, [distributionType, sampleSize, numSamples, isMounted]);

//   useEffect(() => {
//     if (!isAnimating) return;
    
//     const timer = setInterval(() => {
//       setSampleSize(prev => {
//         if (prev >= 100) {
//           setIsAnimating(false);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, animationSpeed);

//     return () => clearInterval(timer);
//   }, [isAnimating, animationSpeed]);

//   const originalData = useMemo(() => {
//     if (!isMounted) return [];
//     const data = [];
//     for (let i = 0; i < 1000; i++) {
//       data.push(generateValue(distributionType));
//     }
//     return data;
//   }, [distributionType, isMounted]);

//   const createHistogram = (data, numBins = null) => {
//     if (data.length === 0) return { bins: [], binEdges: [] };
    
//     const min = Math.min(...data);
//     const max = Math.max(...data);
    
//     if (!numBins) {
//       numBins = Math.ceil(Math.log2(data.length) + 1);
//       numBins = Math.max(10, Math.min(numBins, 50));
//     }
    
//     const binWidth = (max - min) / numBins;
//     const bins = new Array(numBins).fill(0);
//     const binEdges = [];
    
//     for (let i = 0; i <= numBins; i++) {
//       binEdges.push(min + i * binWidth);
//     }
    
//     data.forEach(value => {
//       const binIndex = Math.min(Math.floor((value - min) / binWidth), numBins - 1);
//       if (binIndex >= 0 && binIndex < numBins) {
//         bins[binIndex]++;
//       }
//     });
    
//     return { bins, binEdges };
//   };

//   const originalHist = useMemo(() => createHistogram(originalData, 30), [originalData]);
//   const samplingHist = useMemo(() => createHistogram(sampleMeans), [sampleMeans]);

//   const stats = useMemo(() => {
//     if (sampleMeans.length === 0) return { mean: 0, stdDev: 0 };
//     const meanVal = mean(sampleMeans);
//     const variance = sampleMeans.reduce((sum, val) => sum + Math.pow(val - meanVal, 2), 0) / sampleMeans.length;
//     return { mean: meanVal, stdDev: Math.sqrt(variance) };
//   }, [sampleMeans]);

//   const normalPDF = (x, mean, stdDev) => {
//     const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
//     const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
//     return coefficient * Math.exp(exponent);
//   };

//   const normalCurve = useMemo(() => {
//     if (samplingHist.binEdges.length === 0) return [];
//     const min = samplingHist.binEdges[0];
//     const max = samplingHist.binEdges[samplingHist.binEdges.length - 1];
//     const curve = [];
//     const numPoints = 100;
    
//     for (let i = 0; i <= numPoints; i++) {
//       const x = min + (i / numPoints) * (max - min);
//       const y = normalPDF(x, stats.mean, stats.stdDev);
//       const scaledY = y * sampleMeans.length * (max - min) / samplingHist.bins.length;
//       curve.push({ x, y: scaledY });
//     }
//     return curve;
//   }, [samplingHist, stats, sampleMeans.length]);

//   const renderChart = (histData, title, subtitle, showNormal = false) => {
//     const width = 500;
//     const height = 300;
//     const padding = { top: 20, right: 20, bottom: 40, left: 50 };
//     const chartWidth = width - padding.left - padding.right;
//     const chartHeight = height - padding.top - padding.bottom;

//     const { bins, binEdges } = histData;
//     if (bins.length === 0) {
//       return (
//         <div style={styles.chartBox}>
//           <h3 style={styles.chartTitle}>{title}</h3>
//           <p style={styles.chartSubtitle}>{subtitle}</p>
//           <svg width={width} height={height}>
//             <text x={width / 2} y={height / 2} textAnchor="middle" fill="#999">No data</text>
//           </svg>
//         </div>
//       );
//     }

//     const maxCount = Math.max(...bins, ...normalCurve.map(p => p.y));
//     const binWidth = chartWidth / bins.length;

//     const xScale = (value) => {
//       const min = binEdges[0];
//       const max = binEdges[binEdges.length - 1];
//       return padding.left + ((value - min) / (max - min)) * chartWidth;
//     };

//     const yScale = (value) => {
//       return padding.top + chartHeight - (value / maxCount) * chartHeight;
//     };

//     return (
//       <div style={styles.chartBox}>
//         <h3 style={styles.chartTitle}>{title}</h3>
//         <p style={styles.chartSubtitle}>{subtitle}</p>
//         <svg width={width} height={height} style={styles.svg}>
//           <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="#666" strokeWidth="1" />
//           <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#666" strokeWidth="1" />

//           <text
//             x={padding.left - 35}
//             y={padding.top + chartHeight / 2}
//             fill="#666"
//             fontSize="12"
//             textAnchor="middle"
//             transform={`rotate(-90, ${padding.left - 35}, ${padding.top + chartHeight / 2})`}
//           >
//             Frequency
//           </text>

//           <text x={padding.left + chartWidth / 2} y={height - 10} fill="#666" fontSize="12" textAnchor="middle">
//             {showNormal ? 'Sample Mean' : 'Value'}
//           </text>

//           {bins.map((count, i) => {
//             const x = padding.left + i * binWidth;
//             const barHeight = (count / maxCount) * chartHeight;
//             const y = height - padding.bottom - barHeight;
//             return (
//               <rect
//                 key={i}
//                 x={x}
//                 y={y}
//                 width={binWidth - 1}
//                 height={barHeight}
//                 fill={showNormal ? '#34d399' : '#60a5fa'}
//                 opacity={showNormal ? 0.6 : 0.7}
//               />
//             );
//           })}

//           {showNormal && normalCurve.length > 0 && (
//             <path
//               d={normalCurve.map((point, i) => {
//                 const x = xScale(point.x);
//                 const y = yScale(point.y);
//                 return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
//               }).join(' ')}
//               fill="none"
//               stroke="#ef4444"
//               strokeWidth="2"
//             />
//           )}

//           {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
//             const value = binEdges[0] + fraction * (binEdges[binEdges.length - 1] - binEdges[0]);
//             const x = xScale(value);
//             return (
//               <g key={fraction}>
//                 <line x1={x} y1={height - padding.bottom} x2={x} y2={height - padding.bottom + 5} stroke="#666" strokeWidth="1" />
//                 <text x={x} y={height - padding.bottom + 18} fill="#666" fontSize="10" textAnchor="middle">
//                   {value.toFixed(showNormal ? 2 : 1)}
//                 </text>
//               </g>
//             );
//           })}

//           {showNormal && (
//             <g transform={`translate(${width - 150}, ${padding.top + 10})`}>
//               <rect x="0" y="0" width="20" height="12" fill="#34d399" opacity="0.6" />
//               <text x="25" y="10" fontSize="11" fill="#333">Sample means</text>
//               <line x1="0" y1="25" x2="20" y2="25" stroke="#ef4444" strokeWidth="2" />
//               <text x="25" y="28" fontSize="11" fill="#333">Normal curve</text>
//             </g>
//           )}

//           {showNormal && (
//             <text x={padding.left + 10} y={padding.top + 15} fontSize="11" fill="#333">
//               Mean: {stats.mean.toFixed(3)} | SD: {stats.stdDev.toFixed(3)}
//             </text>
//           )}
//         </svg>
//       </div>
//     );
//   };

//   const distributionNames = {
//     uniform: 'Uniform Distribution (continuous, flat)',
//     discreteuniform: 'Discrete Uniform Distribution (equal probability for 1-10)',
//     exponential: 'Exponential Distribution (right-skewed, λ=0.2)',
//     binomial: 'Binomial Distribution (left-skewed, n=100, p=0.05)',
//     geometric: 'Geometric Distribution (trials until first success, p=0.3)',
//     negativebinomial: 'Negative Binomial Distribution (trials until 5 successes, p=0.3)',
//     hypergeometric: 'Hypergeometric Distribution (sampling without replacement)',
//     poisson: 'Poisson Distribution (discrete, λ=3)',
//     skewed: 'Extreme Right-Skewed Distribution (Pareto-like heavy tail)',
//   };

//   const distributionShortNames = {
//     uniform: 'Uniform',
//     discreteuniform: 'Discrete Uniform',
//     exponential: 'Exponential',
//     binomial: 'Binomial',
//     geometric: 'Geometric',
//     negativebinomial: 'Negative Binomial',
//     hypergeometric: 'Hypergeometric',
//     poisson: 'Poisson',
//     skewed: 'Extreme Right-Skewed',
//   };

//   const distributionExplanations = {
//     uniform: "The uniform distribution is already symmetric, so it converges to normality very quickly—often by n=5-10. This demonstrates that symmetric distributions don't need large samples for the CLT to work.",
//     discreteuniform: "Like continuous uniform, discrete uniform is symmetric. Sample means converge to normal distribution rapidly, typically by n=10-15. Notice how the discrete jumps in the original distribution smooth out into a continuous bell curve.",
//     exponential: "Exponential distribution is heavily right-skewed with a long tail. At low n (2-10), sample means remain visibly skewed. The transformation to normality becomes clear around n=25-35, demonstrating the n≥30 rule of thumb.",
//     binomial: "This binomial distribution (n=100, p=0.05) is left-skewed. Watch how the skewness persists at small sample sizes but gradually disappears. By n=30-40, the sampling distribution becomes nearly symmetric and normal.",
//     geometric: "Geometric distribution is extremely right-skewed—most values are small, but occasional large values create a long tail. This requires larger sample sizes (n≥40-50) for good normal approximation. Perfect for seeing CLT in action on difficult distributions.",
//     negativebinomial: "Negative binomial shows moderate right skewness. Sample means begin to look normal around n=25-35. This distribution demonstrates how counting processes naturally lead to normal distributions when averaged.",
//     hypergeometric: "Hypergeometric distribution (sampling without replacement) behaves similarly to binomial. The sampling distribution converges to normality around n=30, showing that CLT works even for finite population sampling.",
//     poisson: "Poisson distribution with λ=3 is moderately right-skewed. Watch the transformation from skewed to symmetric as n increases. By n=30-35, the normal approximation becomes excellent, validating the rule of thumb.",
//     skewed: "This Pareto-like distribution has an extremely heavy right tail, making it one of the most challenging cases for CLT. Sample means remain noticeably skewed even at n=30-40. You may need n≥50-60 to see clear normality—demonstrating that extreme distributions require larger samples.",
//   };

//   // Use custom explanations if provided, otherwise use defaults
//   const explanations = customExplanations || distributionExplanations;

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h2 style={styles.title}>Central Limit Theorem Simulator</h2>
//         <p style={styles.subtitle}>Watch how sample means converge to a normal distribution</p>
//       </div>

//       <div style={styles.mainWrapper}>
//         <div style={styles.leftColumn}>
//           <div style={styles.controls}>
//             <div style={styles.controlGroup}>
//               <label style={styles.label}>Source Distribution</label>
//               <select value={distributionType} onChange={(e) => setDistributionType(e.target.value)} style={styles.select}>
//                 <option value="uniform">Uniform (continuous, 0-1)</option>
//                 <option value="discreteuniform">Discrete Uniform (1-10)</option>
//                 <option value="exponential">Exponential (λ=0.2)</option>
//                 <option value="binomial">Binomial (n=100, p=0.05)</option>
//                 <option value="geometric">Geometric (p=0.3)</option>
//                 <option value="negativebinomial">Negative Binomial (r=5, p=0.3)</option>
//                 <option value="hypergeometric">Hypergeometric (N=50, K=20, n=10)</option>
//                 <option value="poisson">Poisson (λ=3)</option>
//                 <option value="skewed">Extreme Right-Skewed</option>
//               </select>
//             </div>

//             <div style={styles.chartsContainer}>
//               {renderChart(originalHist, 'Original Distribution', distributionNames[distributionType], false)}
//               {renderChart(samplingHist, `Distribution of Sample Means for ${distributionShortNames[distributionType]}`, `${sampleMeans.length} samples of size n=${sampleSize}`, true)}
//             </div>

//             <button onClick={runSimulation} disabled={isRunning} style={styles.button}>
//               {isRunning ? 'Running...' : 'Run Simulation'}
//             </button>

//             <div style={styles.animationControls}>
//               <button 
//                 onClick={() => {
//                   if (isAnimating) {
//                     setIsAnimating(false);
//                   } else {
//                     if (sampleSize >= 100) setSampleSize(1);
//                     setIsAnimating(true);
//                   }
//                 }}
//                 style={styles.animButton}
//               >
//                 {isAnimating ? '⏸ Pause Animation' : '▶ Play Animation'}
//               </button>
//               <button 
//                 onClick={() => {
//                   setIsAnimating(false);
//                   setSampleSize(1);
//                 }}
//                 style={styles.animButton}
//               >
//                 ↺ Reset
//               </button>
//               <div style={styles.speedControl}>
//                 <label style={styles.speedLabel}>Speed:</label>
//                 <select 
//                   value={animationSpeed} 
//                   onChange={(e) => setAnimationSpeed(Number(e.target.value))}
//                   style={styles.speedSelect}
//                 >
//                   <option value="1000">Slow</option>
//                   <option value="500">Medium</option>
//                   <option value="200">Fast</option>
//                   <option value="100">Very Fast</option>
//                 </select>
//               </div>
//             </div>

//             <div style={styles.controlGroup}>
//               <label style={styles.label}>
//                 Sample Size (n): {sampleSize}
//                 {sampleSize >= 30 && <span style={styles.threshold}> ✓ CLT threshold reached</span>}
//               </label>
//               <input
//                 type="range"
//                 min="1"
//                 max="100"
//                 value={sampleSize}
//                 onChange={(e) => setSampleSize(Number(e.target.value))}
//                 disabled={isAnimating}
//                 style={{...styles.slider, opacity: isAnimating ? 0.5 : 1}}
//               />
//             </div>

//             <div style={styles.controlGroup}>
//               <label style={styles.label}>Number of Samples: {numSamples}</label>
//               <input
//                 type="range"
//                 min="100"
//                 max="5000"
//                 step="100"
//                 value={numSamples}
//                 onChange={(e) => setNumSamples(Number(e.target.value))}
//                 style={styles.slider}
//               />
//             </div>
//           </div>
//         </div>

//         <div style={styles.rightColumn}>
//           <div style={styles.explanation}>
//             <h3 style={styles.explanationTitle}>Understanding This Distribution</h3>
//             <p style={styles.explanationText}>
//               {explanations[distributionType]}
//             </p>
//             <div style={styles.divider} />
//             <p style={styles.explanationText}>
//               <strong>What you're seeing:</strong> The left chart shows the original distribution. 
//               The right chart shows the distribution of sample means. As sample size (n) increases, 
//               the distribution of means becomes more normal, regardless of the original distribution shape. 
//               This is the Central Limit Theorem in action.
//             </p>
//             <p style={{...styles.explanationText, marginBottom: 0}}>
//               <strong>Note:</strong> Sample size (n) is how many values you average together in each sample. The number of histogram 
//               bars (bins) is just how we display the results—they're not related to sample size.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '1400px',
//     margin: '0 auto',
//     padding: '20px',
//     fontFamily: 'system-ui, -apple-system, sans-serif',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '30px',
//   },
//   title: {
//     fontSize: '28px',
//     fontWeight: '600',
//     color: '#1a1a1a',
//     marginBottom: '8px',
//   },
//   subtitle: {
//     fontSize: '16px',
//     color: '#666',
//   },
//   mainWrapper: {
//     display: 'flex',
//     gap: '20px',
//   },
//   leftColumn: {
//     flex: '1 1 50%',
//   },
//   rightColumn: {
//     flex: '1 1 50%',
//   },
//   controls: {
//     backgroundColor: '#f8f9fa',
//     padding: '24px',
//     borderRadius: '8px',
//   },
//   controlGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: '8px',
//   },
//   threshold: {
//     color: '#16a34a',
//     fontSize: '13px',
//     fontWeight: '600',
//     marginLeft: '8px',
//   },
//   select: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '14px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     backgroundColor: 'white',
//     cursor: 'pointer',
//   },
//   slider: {
//     width: '100%',
//     height: '6px',
//     cursor: 'pointer',
//   },
//   button: {
//     width: '100%',
//     padding: '12px',
//     fontSize: '16px',
//     fontWeight: '500',
//     color: 'white',
//     backgroundColor: '#2563eb',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     marginBottom: '20px',
//   },
//   animationControls: {
//     display: 'flex',
//     gap: '12px',
//     alignItems: 'center',
//     marginBottom: '20px',
//     padding: '12px',
//     backgroundColor: '#f3f4f6',
//     borderRadius: '6px',
//   },
//   animButton: {
//     padding: '8px 16px',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: 'white',
//     backgroundColor: '#059669',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     whiteSpace: 'nowrap',
//   },
//   speedControl: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     marginLeft: 'auto',
//   },
//   speedLabel: {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#333',
//   },
//   speedSelect: {
//     padding: '6px 10px',
//     fontSize: '14px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     backgroundColor: 'white',
//     cursor: 'pointer',
//   },
//   chartsContainer: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//     marginTop: '20px',
//     marginBottom: '20px',
//   },
//   chartBox: {
//     backgroundColor: 'white',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//     padding: '20px',
//   },
//   chartTitle: {
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#1a1a1a',
//     marginBottom: '4px',
//   },
//   chartSubtitle: {
//     fontSize: '14px',
//     color: '#666',
//     marginBottom: '16px',
//   },
//   svg: {
//     border: '1px solid #e5e7eb',
//     borderRadius: '4px',
//     backgroundColor: 'white',
//   },
//   explanation: {
//     backgroundColor: '#f0f9ff',
//     border: '1px solid #bae6fd',
//     borderRadius: '8px',
//     padding: '16px',
//     position: 'sticky',
//     top: '20px',
//   },
//   explanationTitle: {
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#1e40af',
//     marginTop: 0,
//     marginBottom: '12px',
//   },
//   divider: {
//     height: '1px',
//     backgroundColor: '#bae6fd',
//     margin: '16px 0',
//   },
//   explanationText: {
//     fontSize: '14px',
//     color: '#1e40af',
//     lineHeight: '1.6',
//     marginTop: 0,
//     marginBottom: '12px',
//   },
// };


'use client';

import { useState, useEffect, useMemo } from 'react';

export default function CLTSimulator({ customExplanations = null }) {
  const [distributionType, setDistributionType] = useState('skewed');
  const [sampleSize, setSampleSize] = useState(2);
  const [numSamples, setNumSamples] = useState(2000);
  const [sampleMeans, setSampleMeans] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(500);
  const [isMounted, setIsMounted] = useState(false);

  // Random number generators
  const randomUniform = () => Math.random();
  
  const randomExponential = (lambda = 0.2) => -Math.log(1 - Math.random()) / lambda;
  
  const randomBinomial = (n = 100, p = 0.05) => {
    let successes = 0;
    for (let i = 0; i < n; i++) {
      if (Math.random() < p) successes++;
    }
    return successes;
  };
  
  const randomSkewed = () => {
    const u = Math.random();
    const alpha = 1.16;
    return Math.pow(1 - u, -1/alpha) - 1;
  };
  
  const randomNormal = (mean = 0, stdDev = 1) => {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    return z0 * stdDev + mean;
  };
  
  const randomGeometric = (p = 0.3) => {
    return Math.floor(Math.log(Math.random()) / Math.log(1 - p)) + 1;
  };
  
  const randomNegativeBinomial = (r = 5, p = 0.3) => {
    let trials = 0;
    let successes = 0;
    while (successes < r) {
      trials++;
      if (Math.random() < p) successes++;
    }
    return trials;
  };
  
  const randomHypergeometric = (N = 50, K = 20, n = 10) => {
    let successes = 0;
    let population = K;
    let remaining = N;
    for (let i = 0; i < n; i++) {
      if (Math.random() < population / remaining) {
        successes++;
        population--;
      }
      remaining--;
    }
    return successes;
  };
  
  const randomPoisson = (lambda = 3) => {
    const L = Math.exp(-lambda);
    let k = 0;
    let p = 1;
    do {
      k++;
      p *= Math.random();
    } while (p > L);
    return k - 1;
  };
  
  const randomDiscreteUniform = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateValue = (type) => {
    switch (type) {
      case 'uniform': return randomUniform();
      case 'exponential': return randomExponential();
      case 'binomial': return randomBinomial();
      case 'skewed': return randomSkewed();
      case 'geometric': return randomGeometric();
      case 'negativebinomial': return randomNegativeBinomial();
      case 'hypergeometric': return randomHypergeometric();
      case 'poisson': return randomPoisson();
      case 'discreteuniform': return randomDiscreteUniform();
      default: return randomUniform();
    }
  };

  const generateSample = (type, size) => {
    const sample = [];
    const actualSize = Math.max(1, size);
    for (let i = 0; i < actualSize; i++) {
      sample.push(generateValue(type));
    }
    return sample;
  };

  const mean = (array) => array.reduce((sum, val) => sum + val, 0) / array.length;

  const runSimulation = () => {
    setIsRunning(true);
    const means = [];
    for (let i = 0; i < numSamples; i++) {
      const sample = generateSample(distributionType, sampleSize);
      means.push(mean(sample));
    }
    setSampleMeans(means);
    setIsRunning(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      runSimulation();
    }
  }, [distributionType, sampleSize, numSamples, isMounted]);

  useEffect(() => {
    if (!isAnimating) return;
    
    const timer = setInterval(() => {
      setSampleSize(prev => {
        if (prev >= 100) {
          setIsAnimating(false);
          return 100;
        }
        return prev + 1;
      });
    }, animationSpeed);

    return () => clearInterval(timer);
  }, [isAnimating, animationSpeed]);

  const originalData = useMemo(() => {
    if (!isMounted) return [];
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push(generateValue(distributionType));
    }
    return data;
  }, [distributionType, isMounted]);

  const createHistogram = (data, numBins = null) => {
    if (data.length === 0) return { bins: [], binEdges: [] };
    
    const min = Math.min(...data);
    const max = Math.max(...data);
    
    if (!numBins) {
      numBins = Math.ceil(Math.log2(data.length) + 1);
      numBins = Math.max(10, Math.min(numBins, 50));
    }
    
    const binWidth = (max - min) / numBins;
    const bins = new Array(numBins).fill(0);
    const binEdges = [];
    
    for (let i = 0; i <= numBins; i++) {
      binEdges.push(min + i * binWidth);
    }
    
    data.forEach(value => {
      const binIndex = Math.min(Math.floor((value - min) / binWidth), numBins - 1);
      if (binIndex >= 0 && binIndex < numBins) {
        bins[binIndex]++;
      }
    });
    
    return { bins, binEdges };
  };

  const originalHist = useMemo(() => createHistogram(originalData, 30), [originalData]);
  const samplingHist = useMemo(() => createHistogram(sampleMeans), [sampleMeans]);

  const stats = useMemo(() => {
    if (sampleMeans.length === 0) return { mean: 0, stdDev: 0 };
    const meanVal = mean(sampleMeans);
    const variance = sampleMeans.reduce((sum, val) => sum + Math.pow(val - meanVal, 2), 0) / sampleMeans.length;
    return { mean: meanVal, stdDev: Math.sqrt(variance) };
  }, [sampleMeans]);

  const normalPDF = (x, mean, stdDev) => {
    const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
    const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2));
    return coefficient * Math.exp(exponent);
  };

  const normalCurve = useMemo(() => {
    if (samplingHist.binEdges.length === 0) return [];
    const min = samplingHist.binEdges[0];
    const max = samplingHist.binEdges[samplingHist.binEdges.length - 1];
    const curve = [];
    const numPoints = 100;
    
    for (let i = 0; i <= numPoints; i++) {
      const x = min + (i / numPoints) * (max - min);
      const y = normalPDF(x, stats.mean, stats.stdDev);
      const scaledY = y * sampleMeans.length * (max - min) / samplingHist.bins.length;
      curve.push({ x, y: scaledY });
    }
    return curve;
  }, [samplingHist, stats, sampleMeans.length]);

  const renderChart = (histData, title, subtitle, showNormal = false) => {
    const width = 500;
    const height = 300;
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const { bins, binEdges } = histData;
    if (bins.length === 0) {
      return (
        <div style={styles.chartBox}>
          <h3 style={styles.chartTitle}>{title}</h3>
          <p style={styles.chartSubtitle}>{subtitle}</p>
          <svg width={width} height={height}>
            <text x={width / 2} y={height / 2} textAnchor="middle" fill="#999">No data</text>
          </svg>
        </div>
      );
    }

    const maxCount = Math.max(...bins, ...normalCurve.map(p => p.y));
    const binWidth = chartWidth / bins.length;

    const xScale = (value) => {
      const min = binEdges[0];
      const max = binEdges[binEdges.length - 1];
      return padding.left + ((value - min) / (max - min)) * chartWidth;
    };

    const yScale = (value) => {
      return padding.top + chartHeight - (value / maxCount) * chartHeight;
    };

    return (
      <div style={styles.chartBox}>
        <h3 style={styles.chartTitle}>{title}</h3>
        <p style={styles.chartSubtitle}>{subtitle}</p>
        <svg width={width} height={height} style={styles.svg}>
          <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="#666" strokeWidth="1" />
          <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="#666" strokeWidth="1" />

          <text
            x={padding.left - 35}
            y={padding.top + chartHeight / 2}
            fill="#666"
            fontSize="12"
            textAnchor="middle"
            transform={`rotate(-90, ${padding.left - 35}, ${padding.top + chartHeight / 2})`}
          >
            Frequency
          </text>

          <text x={padding.left + chartWidth / 2} y={height - 10} fill="#666" fontSize="12" textAnchor="middle">
            {showNormal ? 'Sample Mean' : 'Value'}
          </text>

          {bins.map((count, i) => {
            const x = padding.left + i * binWidth;
            const barHeight = (count / maxCount) * chartHeight;
            const y = height - padding.bottom - barHeight;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={binWidth - 1}
                height={barHeight}
                fill={showNormal ? '#34d399' : '#60a5fa'}
                opacity={showNormal ? 0.6 : 0.7}
              />
            );
          })}

          {showNormal && normalCurve.length > 0 && (
            <path
              d={normalCurve.map((point, i) => {
                const x = xScale(point.x);
                const y = yScale(point.y);
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              }).join(' ')}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />
          )}

          {[0, 0.25, 0.5, 0.75, 1].map((fraction) => {
            const value = binEdges[0] + fraction * (binEdges[binEdges.length - 1] - binEdges[0]);
            const x = xScale(value);
            return (
              <g key={fraction}>
                <line x1={x} y1={height - padding.bottom} x2={x} y2={height - padding.bottom + 5} stroke="#666" strokeWidth="1" />
                <text x={x} y={height - padding.bottom + 18} fill="#666" fontSize="10" textAnchor="middle">
                  {value.toFixed(showNormal ? 2 : 1)}
                </text>
              </g>
            );
          })}

          {showNormal && (
            <g transform={`translate(${width - 150}, ${padding.top + 10})`}>
              <rect x="0" y="0" width="20" height="12" fill="#34d399" opacity="0.6" />
              <text x="25" y="10" fontSize="11" fill="#333">Sample means</text>
              <line x1="0" y1="25" x2="20" y2="25" stroke="#ef4444" strokeWidth="2" />
              <text x="25" y="28" fontSize="11" fill="#333">Normal curve</text>
            </g>
          )}

          {showNormal && (
            <text x={padding.left + 10} y={padding.top + 15} fontSize="11" fill="#333">
              Mean: {stats.mean.toFixed(3)} | SD: {stats.stdDev.toFixed(3)}
            </text>
          )}
        </svg>
      </div>
    );
  };

  const distributionNames = {
    uniform: 'Uniform Distribution (continuous, flat)',
    discreteuniform: 'Discrete Uniform Distribution (equal probability for 1-10)',
    exponential: 'Exponential Distribution (right-skewed, λ=0.2)',
    binomial: 'Binomial Distribution (left-skewed, n=100, p=0.05)',
    geometric: 'Geometric Distribution (trials until first success, p=0.3)',
    negativebinomial: 'Negative Binomial Distribution (trials until 5 successes, p=0.3)',
    hypergeometric: 'Hypergeometric Distribution (sampling without replacement)',
    poisson: 'Poisson Distribution (discrete, λ=3)',
    skewed: 'Extreme Right-Skewed Distribution (Pareto-like heavy tail)',
  };

  const distributionShortNames = {
    uniform: 'Uniform',
    discreteuniform: 'Discrete Uniform',
    exponential: 'Exponential',
    binomial: 'Binomial',
    geometric: 'Geometric',
    negativebinomial: 'Negative Binomial',
    hypergeometric: 'Hypergeometric',
    poisson: 'Poisson',
    skewed: 'Extreme Right-Skewed',
  };

  const distributionExplanations = {
    uniform: "The uniform distribution is already symmetric, so it converges to normality very quickly—often by n=5-10. This demonstrates that symmetric distributions don't need large samples for the CLT to work.",
    discreteuniform: "Like continuous uniform, discrete uniform is symmetric. Sample means converge to normal distribution rapidly, typically by n=10-15. Notice how the discrete jumps in the original distribution smooth out into a continuous bell curve.",
    exponential: "Exponential distribution is heavily right-skewed with a long tail. At low n (2-10), sample means remain visibly skewed. The transformation to normality becomes clear around n=25-35, demonstrating the n≥30 rule of thumb.",
    binomial: "This binomial distribution (n=100, p=0.05) is left-skewed. Watch how the skewness persists at small sample sizes but gradually disappears. By n=30-40, the sampling distribution becomes nearly symmetric and normal.",
    geometric: "Geometric distribution is extremely right-skewed—most values are small, but occasional large values create a long tail. This requires larger sample sizes (n≥40-50) for good normal approximation. Perfect for seeing CLT in action on difficult distributions.",
    negativebinomial: "Negative binomial shows moderate right skewness. Sample means begin to look normal around n=25-35. This distribution demonstrates how counting processes naturally lead to normal distributions when averaged.",
    hypergeometric: "Hypergeometric distribution (sampling without replacement) behaves similarly to binomial. The sampling distribution converges to normality around n=30, showing that CLT works even for finite population sampling.",
    poisson: "Poisson distribution with λ=3 is moderately right-skewed. Watch the transformation from skewed to symmetric as n increases. By n=30-35, the normal approximation becomes excellent, validating the rule of thumb.",
    skewed: "This Pareto-like distribution has an extremely heavy right tail, making it one of the most challenging cases for CLT. Sample means remain noticeably skewed even at n=30-40. You may need n≥50-60 to see clear normality—demonstrating that extreme distributions require larger samples.",
  };

  // Use custom explanations if provided, otherwise use defaults
  const explanations = customExplanations || distributionExplanations;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Central Limit Theorem Simulator</h2>
        <p style={styles.subtitle}>Watch how sample means converge to a normal distribution</p>
      </div>

      <div style={styles.mainWrapper}>
        <div style={styles.leftColumn}>
          <div style={styles.controls}>
            <div style={styles.controlGroup}>
              <label style={styles.label}>Source Distribution</label>
              <select value={distributionType} onChange={(e) => setDistributionType(e.target.value)} style={styles.select}>
                <option value="uniform">Uniform (continuous, 0-1)</option>
                <option value="discreteuniform">Discrete Uniform (1-10)</option>
                <option value="exponential">Exponential (λ=0.2)</option>
                <option value="binomial">Binomial (n=100, p=0.05)</option>
                <option value="geometric">Geometric (p=0.3)</option>
                <option value="negativebinomial">Negative Binomial (r=5, p=0.3)</option>
                <option value="hypergeometric">Hypergeometric (N=50, K=20, n=10)</option>
                <option value="poisson">Poisson (λ=3)</option>
                <option value="skewed">Extreme Right-Skewed</option>
              </select>
            </div>

            <div style={styles.chartsContainer}>
              {renderChart(originalHist, 'Original Distribution', distributionNames[distributionType], false)}
              {renderChart(samplingHist, `Distribution of Sample Means for ${distributionShortNames[distributionType]}`, `${sampleMeans.length} samples of size n=${sampleSize}`, true)}
            </div>

            <button onClick={runSimulation} disabled={isRunning} style={styles.button}>
              {isRunning ? 'Running...' : 'Run Simulation'}
            </button>

            <div style={styles.animationControls}>
              <button 
                onClick={() => {
                  if (isAnimating) {
                    setIsAnimating(false);
                  } else {
                    if (sampleSize >= 100) setSampleSize(1);
                    setIsAnimating(true);
                  }
                }}
                style={styles.animButton}
              >
                {isAnimating ? '⏸ Pause Animation' : '▶ Play Animation'}
              </button>
              <button 
                onClick={() => {
                  setIsAnimating(false);
                  setSampleSize(1);
                }}
                style={styles.animButton}
              >
                ↺ Reset
              </button>
              <div style={styles.speedControl}>
                <label style={styles.speedLabel}>Speed:</label>
                <select 
                  value={animationSpeed} 
                  onChange={(e) => setAnimationSpeed(Number(e.target.value))}
                  style={styles.speedSelect}
                >
                  <option value="1000">Slow</option>
                  <option value="500">Medium</option>
                  <option value="200">Fast</option>
                  <option value="100">Very Fast</option>
                </select>
              </div>
            </div>

            <div style={styles.controlGroup}>
              <label style={styles.label}>
                Sample Size (n): {sampleSize}
                {sampleSize >= 30 && <span style={styles.threshold}> ✓ CLT threshold reached</span>}
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={sampleSize}
                onChange={(e) => setSampleSize(Number(e.target.value))}
                disabled={isAnimating}
                style={{...styles.slider, opacity: isAnimating ? 0.5 : 1}}
              />
            </div>

            <div style={styles.controlGroup}>
              <label style={styles.label}>Number of Samples: {numSamples}</label>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={numSamples}
                onChange={(e) => setNumSamples(Number(e.target.value))}
                style={styles.slider}
              />
            </div>
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.explanation}>
            <h3 style={styles.explanationTitle}>Understanding This Distribution</h3>
            <p style={styles.explanationText}>
              {explanations[distributionType]}
            </p>
            <div style={styles.divider} />
            <p style={styles.explanationText}>
              <strong>What you're seeing:</strong> The left chart shows the original distribution. 
              The right chart shows the distribution of sample means. As sample size (n) increases, 
              the distribution of means becomes more normal, regardless of the original distribution shape. 
              This is the Central Limit Theorem in action.
            </p>
            <p style={{...styles.explanationText, marginBottom: 0}}>
              <strong>Note:</strong> Sample size (n) is how many values you average together in each sample. The number of histogram 
              bars (bins) is just how we display the results—they're not related to sample size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
  },
  mainWrapper: {
    display: 'flex',
    gap: '20px',
  },
  leftColumn: {
    flex: '1 1 55%',
  },
  rightColumn: {
    flex: '1 1 45%',
  },
  controls: {
    backgroundColor: '#f8f9fa',
    padding: '24px',
    borderRadius: '8px',
  },
  controlGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    marginBottom: '8px',
  },
  threshold: {
    color: '#16a34a',
    fontSize: '13px',
    fontWeight: '600',
    marginLeft: '8px',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  slider: {
    width: '100%',
    height: '6px',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  animationControls: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '12px',
    backgroundColor: '#f3f4f6',
    borderRadius: '6px',
  },
  animButton: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#059669',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  speedControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginLeft: 'auto',
  },
  speedLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
  },
  speedSelect: {
    padding: '6px 10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  chartsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  chartBox: {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
  },
  chartTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '4px',
  },
  chartSubtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '16px',
  },
  svg: {
    border: '1px solid #e5e7eb',
    borderRadius: '4px',
    backgroundColor: 'white',
  },
  explanation: {
    backgroundColor: '#f0f9ff',
    border: '1px solid #bae6fd',
    borderRadius: '8px',
    padding: '16px',
    position: 'sticky',
    top: '20px',
  },
  explanationTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e40af',
    marginTop: 0,
    marginBottom: '12px',
  },
  divider: {
    height: '1px',
    backgroundColor: '#bae6fd',
    margin: '16px 0',
  },
  explanationText: {
    fontSize: '14px',
    color: '#1e40af',
    lineHeight: '1.6',
    marginTop: 0,
    marginBottom: '12px',
  },
};