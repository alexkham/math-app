// // import React, { useState } from 'react';

// // export default function SingleEventProbabilityCalculator() {
// //   const [favorableOutcomes, setFavorableOutcomes] = useState('');
// //   const [totalOutcomes, setTotalOutcomes] = useState('');
// //   const [result, setResult] = useState(null);
// //   const [error, setError] = useState('');

// //   const calculateProbability = () => {
// //     setError('');
    
// //     const favorableStr = favorableOutcomes.trim();
// //     const totalStr = totalOutcomes.trim();

// //     if (favorableStr === '' || totalStr === '') {
// //       setError('Please fill in both fields');
// //       return;
// //     }

// //     if (isNaN(favorableStr) || isNaN(totalStr)) {
// //       setError('Please enter valid numbers only');
// //       return;
// //     }

// //     const favorable = parseFloat(favorableStr);
// //     const total = parseFloat(totalStr);

// //     if (!Number.isInteger(favorable) || !Number.isInteger(total)) {
// //       setError('Please enter whole numbers only (no decimals)');
// //       return;
// //     }

// //     if (favorable < 0 || total < 0) {
// //       setError('Please enter positive numbers only');
// //       return;
// //     }

// //     if (total === 0) {
// //       setError('Total outcomes must be greater than zero');
// //       return;
// //     }

// //     let probability;
// //     let complement;
    
// //     if (favorable > total) {
// //       probability = 0;
// //       complement = 1;
// //     } else {
// //       probability = favorable / total;
// //       complement = 1 - probability;
// //     }

// //     const percentage = (probability * 100).toFixed(2);
// //     const complementPercentage = (complement * 100).toFixed(2);
    
// //     let oddsInFavor, oddsAgainst;
// //     if (favorable === 0) {
// //       oddsInFavor = '0:' + total;
// //       oddsAgainst = total + ':0';
// //     } else if (favorable > total) {
// //       oddsInFavor = 'N/A';
// //       oddsAgainst = 'N/A';
// //     } else {
// //       oddsInFavor = `${favorable}:${total - favorable}`;
// //       oddsAgainst = `${total - favorable}:${favorable}`;
// //     }

// //     const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
// //     let simplifiedFraction;
    
// //     if (favorable > total) {
// //       simplifiedFraction = '0/1';
// //     } else if (favorable === 0) {
// //       simplifiedFraction = '0/' + total;
// //     } else {
// //       const divisor = gcd(favorable, total);
// //       simplifiedFraction = `${favorable / divisor}/${total / divisor}`;
// //     }

// //     setResult({
// //       probability: probability.toFixed(4),
// //       complement: complement.toFixed(4),
// //       percentage,
// //       complementPercentage,
// //       oddsInFavor,
// //       oddsAgainst,
// //       fraction: simplifiedFraction
// //     });
// //   };

// //   const handleReset = () => {
// //     setFavorableOutcomes('');
// //     setTotalOutcomes('');
// //     setResult(null);
// //     setError('');
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.calculator}>
// //         <header style={styles.header}>
// //           <h1 style={styles.title}>Single Event Probability Calculator</h1>
// //           <p style={styles.subtitle}>Calculate the probability of a single event occurring</p>
// //         </header>

// //         <div style={styles.inputSection}>
// //           {error && (
// //             <div style={styles.errorBox}>
// //               {error}
// //             </div>
// //           )}

// //           <div style={styles.inputGroup}>
// //             <label style={styles.label}>Number of Favorable Outcomes</label>
// //             <input
// //               type="text"
// //               value={favorableOutcomes}
// //               onChange={(e) => setFavorableOutcomes(e.target.value)}
// //               placeholder="e.g., 1"
// //               style={styles.input}
// //             />
// //           </div>

// //           <div style={styles.inputGroup}>
// //             <label style={styles.label}>Total Number of Possible Outcomes</label>
// //             <input
// //               type="text"
// //               value={totalOutcomes}
// //               onChange={(e) => setTotalOutcomes(e.target.value)}
// //               placeholder="e.g., 6"
// //               style={styles.input}
// //             />
// //           </div>

// //           <div style={styles.buttonGroup}>
// //             <button onClick={calculateProbability} style={styles.calculateButton}>
// //               Calculate
// //             </button>
// //             <button onClick={handleReset} style={styles.resetButton}>
// //               Reset
// //             </button>
// //           </div>
// //         </div>

// //         {result && (
// //           <div style={styles.resultSection}>
// //             <h2 style={styles.resultTitle}>Result</h2>
            
// //             <div style={styles.resultGrid}>
// //               <div style={styles.resultCard}>
// //                 <div style={styles.cardHeader}>Probability of Event A</div>
// //                 <div style={styles.cardContent}>
// //                   <div style={styles.mainValue}>P(A) = {result.fraction}</div>
// //                   <div style={styles.secondaryValue}>= {result.probability}</div>
// //                   <div style={styles.percentage}>{result.percentage}%</div>
// //                 </div>
// //               </div>

// //               <div style={{...styles.resultCard, ...styles.complementCard}}>
// //                 <div style={styles.cardHeader}>Probability of Event NOT Occurring</div>
// //                 <div style={styles.cardContent}>
// //                   <div style={styles.mainValue}>P(A') = {result.complement}</div>
// //                   <div style={styles.percentage}>{result.complementPercentage}%</div>
// //                 </div>
// //               </div>

// //               <div style={styles.resultCard}>
// //                 <div style={styles.cardHeader}>Odds in Favor</div>
// //                 <div style={styles.cardContent}>
// //                   <div style={styles.oddsValue}>{result.oddsInFavor}</div>
// //                 </div>
// //               </div>

// //               <div style={styles.resultCard}>
// //                 <div style={styles.cardHeader}>Odds Against</div>
// //                 <div style={styles.cardContent}>
// //                   <div style={styles.oddsValue}>{result.oddsAgainst}</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         <div style={styles.examplesSection}>
// //           <h3 style={styles.examplesTitle}>Examples:</h3>
// //           <ul style={styles.examplesList}>
// //             <li style={styles.exampleItem}>Rolling a 3 on a standard die: 1 favorable, 6 total</li>
// //             <li style={styles.exampleItem}>Drawing an Ace from a deck: 4 favorable, 52 total</li>
// //             <li style={styles.exampleItem}>Getting heads on a coin flip: 1 favorable, 2 total</li>
// //             <li style={styles.exampleItem}>Drawing a red ball from 5 red and 3 blue: 5 favorable, 8 total</li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     minHeight: '100vh',
// //     // background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
// //     padding: '40px 20px',
// //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
// //   },
// //   calculator: {
// //     maxWidth: '900px',
// //     margin: '0 auto',
// //     background: 'white',
// //     borderRadius: '20px',
// //     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
// //     overflow: 'hidden'
// //   },
// //   header: {
// //     background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
// //     color: 'white',
// //     padding: '40px 30px',
// //     textAlign: 'center'
// //   },
// //   title: {
// //     margin: '0 0 10px 0',
// //     fontSize: '32px',
// //     fontWeight: '700'
// //   },
// //   subtitle: {
// //     margin: '0',
// //     fontSize: '16px',
// //     opacity: '0.9'
// //   },
// //   inputSection: {
// //     padding: '40px 30px'
// //   },
// //   errorBox: {
// //     background: '#fef2f2',
// //     border: '1px solid #fca5a5',
// //     borderRadius: '8px',
// //     padding: '12px 16px',
// //     marginBottom: '20px',
// //     color: '#b91c1c',
// //     fontWeight: '500',
// //     fontSize: '14px'
// //   },
// //   inputGroup: {
// //     marginBottom: '25px'
// //   },
// //   label: {
// //     display: 'block',
// //     marginBottom: '8px',
// //     fontSize: '15px',
// //     fontWeight: '600',
// //     color: '#2d3748'
// //   },
// //   input: {
// //     width: '100%',
// //     padding: '14px 16px',
// //     fontSize: '16px',
// //     border: '2px solid #e2e8f0',
// //     borderRadius: '10px',
// //     boxSizing: 'border-box',
// //     outline: 'none'
// //   },
// //   buttonGroup: {
// //     display: 'flex',
// //     gap: '15px',
// //     marginTop: '30px'
// //   },
// //   calculateButton: {
// //     flex: '1',
// //     padding: '16px 32px',
// //     fontSize: '16px',
// //     fontWeight: '600',
// //     color: 'white',
// //     background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
// //     border: 'none',
// //     borderRadius: '10px',
// //     cursor: 'pointer',
// //     boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
// //   },
// //   resetButton: {
// //     flex: '1',
// //     padding: '16px 32px',
// //     fontSize: '16px',
// //     fontWeight: '600',
// //     color: '#3b82f6',
// //     background: 'white',
// //     border: '2px solid #3b82f6',
// //     borderRadius: '10px',
// //     cursor: 'pointer'
// //   },
// //   resultSection: {
// //     padding: '40px 30px',
// //     background: '#f7fafc',
// //     borderTop: '1px solid #e2e8f0'
// //   },
// //   resultTitle: {
// //     margin: '0 0 25px 0',
// //     fontSize: '24px',
// //     fontWeight: '700',
// //     color: '#2d3748',
// //     textAlign: 'center'
// //   },
// //   resultGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
// //     gap: '20px'
// //   },
// //   resultCard: {
// //     background: 'white',
// //     borderRadius: '12px',
// //     padding: '20px',
// //     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
// //     border: '2px solid #3b82f6'
// //   },
// //   complementCard: {
// //     border: '2px solid #f56565'
// //   },
// //   cardHeader: {
// //     fontSize: '13px',
// //     fontWeight: '600',
// //     color: '#718096',
// //     marginBottom: '12px',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px'
// //   },
// //   cardContent: {
// //     textAlign: 'center'
// //   },
// //   mainValue: {
// //     fontSize: '20px',
// //     fontWeight: '700',
// //     color: '#2d3748',
// //     marginBottom: '8px'
// //   },
// //   secondaryValue: {
// //     fontSize: '16px',
// //     color: '#4a5568',
// //     marginBottom: '8px'
// //   },
// //   percentage: {
// //     fontSize: '24px',
// //     fontWeight: '700',
// //     color: '#3b82f6',
// //     marginTop: '8px'
// //   },
// //   oddsValue: {
// //     fontSize: '28px',
// //     fontWeight: '700',
// //     color: '#3b82f6',
// //     textAlign: 'center'
// //   },
// //   examplesSection: {
// //     padding: '30px',
// //     background: 'white',
// //     borderTop: '1px solid #e2e8f0'
// //   },
// //   examplesTitle: {
// //     margin: '0 0 15px 0',
// //     fontSize: '18px',
// //     fontWeight: '600',
// //     color: '#2d3748'
// //   },
// //   examplesList: {
// //     margin: '0',
// //     paddingLeft: '20px'
// //   },
// //   exampleItem: {
// //     margin: '8px 0',
// //     color: '#4a5568',
// //     fontSize: '15px',
// //     lineHeight: '1.6'
// //   }
// // };



// import React, { useState } from 'react';

// export default function SingleEventProbabilityCalculator() {
//   const [favorableOutcomes, setFavorableOutcomes] = useState('');
//   const [totalOutcomes, setTotalOutcomes] = useState('');
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('visualization');

//   const calculateProbability = () => {
//     setError('');
    
//     const favorableStr = favorableOutcomes.trim();
//     const totalStr = totalOutcomes.trim();

//     if (favorableStr === '' || totalStr === '') {
//       setError('Please fill in both fields');
//       return;
//     }

//     if (isNaN(favorableStr) || isNaN(totalStr)) {
//       setError('Please enter valid numbers only');
//       return;
//     }

//     const favorable = parseFloat(favorableStr);
//     const total = parseFloat(totalStr);

//     if (!Number.isInteger(favorable) || !Number.isInteger(total)) {
//       setError('Please enter whole numbers only (no decimals)');
//       return;
//     }

//     if (favorable < 0 || total < 0) {
//       setError('Please enter positive numbers only');
//       return;
//     }

//     if (total === 0) {
//       setError('Total outcomes must be greater than zero');
//       return;
//     }

//     let probability;
//     let complement;
    
//     if (favorable > total) {
//       probability = 0;
//       complement = 1;
//     } else {
//       probability = favorable / total;
//       complement = 1 - probability;
//     }

//     const percentage = (probability * 100).toFixed(2);
//     const complementPercentage = (complement * 100).toFixed(2);
    
//     let oddsInFavor, oddsAgainst;
//     if (favorable === 0) {
//       oddsInFavor = '0:' + total;
//       oddsAgainst = total + ':0';
//     } else if (favorable > total) {
//       oddsInFavor = 'N/A';
//       oddsAgainst = 'N/A';
//     } else {
//       oddsInFavor = `${favorable}:${total - favorable}`;
//       oddsAgainst = `${total - favorable}:${favorable}`;
//     }

//     const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
//     let simplifiedFraction;
    
//     if (favorable > total) {
//       simplifiedFraction = '0/1';
//     } else if (favorable === 0) {
//       simplifiedFraction = '0/' + total;
//     } else {
//       const divisor = gcd(favorable, total);
//       simplifiedFraction = `${favorable / divisor}/${total / divisor}`;
//     }

//     setResult({
//       probability: probability.toFixed(4),
//       complement: complement.toFixed(4),
//       percentage,
//       complementPercentage,
//       oddsInFavor,
//       oddsAgainst,
//       fraction: simplifiedFraction,
//       favorable: favorable,
//       total: total
//     });
//   };

//   const handleReset = () => {
//     setFavorableOutcomes('');
//     setTotalOutcomes('');
//     setResult(null);
//     setError('');
//   };

//   const createArc = (startAngle, endAngle, radius, centerX, centerY) => {
//     const start = polarToCartesian(centerX, centerY, radius, endAngle);
//     const end = polarToCartesian(centerX, centerY, radius, startAngle);
//     const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
//     return [
//       "M", centerX, centerY,
//       "L", start.x, start.y,
//       "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
//       "Z"
//     ].join(" ");
//   };
  
//   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
//     return {
//       x: centerX + (radius * Math.cos(angleInRadians)),
//       y: centerY + (radius * Math.sin(angleInRadians))
//     };
//   };

//   const renderVisualization = () => {
//     if (!result) return <div style={styles.emptyState}>Calculate a probability to see visualization</div>;

//     const probability = result.favorable / result.total;
//     const favorableAngle = probability * 360;
//     const complementAngle = (1 - probability) * 360;

//     const centerX = 150;
//     const centerY = 150;
//     const radius = 120;

//     const favPath = createArc(0, favorableAngle, radius, centerX, centerY);
//     const compPath = createArc(favorableAngle, 360, radius, centerX, centerY);

//     return (
//       <div style={styles.visualizationContent}>
//         <svg width="300" height="300" style={styles.svg}>
//           <path d={compPath} fill="#ef4444" stroke="white" strokeWidth="3" />
//           <path d={favPath} fill="#3b82f6" stroke="white" strokeWidth="3" />
//           <circle cx={centerX} cy={centerY} r="40" fill="white" stroke="#e5e7eb" strokeWidth="2" />
//           <text x={centerX} y={centerY - 5} textAnchor="middle" fontSize="18" fontWeight="bold" fill="#2d3748">
//             {result.fraction}
//           </text>
//           <text x={centerX} y={centerY + 18} textAnchor="middle" fontSize="14" fill="#718096">
//             {result.percentage}%
//           </text>
//         </svg>
//         <div style={styles.legend}>
//           <div style={styles.legendItem}>
//             <div style={{...styles.legendColor, background: '#3b82f6'}}></div>
//             <span style={styles.legendText}>P(A) = {result.percentage}%</span>
//           </div>
//           <div style={styles.legendItem}>
//             <div style={{...styles.legendColor, background: '#ef4444'}}></div>
//             <span style={styles.legendText}>P(A') = {result.complementPercentage}%</span>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderExplanations = () => {
//     return (
//       <div style={styles.explanationsContent}>
//         <h4 style={styles.explanationTitle}>Understanding Single Event Probability</h4>
//         <p style={styles.explanationText}>
//           Probability measures the likelihood of an event occurring, expressed as a ratio between 0 and 1 (or 0% to 100%).
//         </p>
        
//         <h4 style={styles.explanationTitle}>Key Concepts:</h4>
//         <ul style={styles.explanationList}>
//           <li style={styles.explanationItem}>
//             <strong>P(A)</strong> - Probability of event A occurring = Favorable outcomes / Total outcomes
//           </li>
//           <li style={styles.explanationItem}>
//             <strong>P(A')</strong> - Probability of event NOT occurring = 1 - P(A)
//           </li>
//           <li style={styles.explanationItem}>
//             <strong>Odds in Favor</strong> - Ratio of favorable to unfavorable outcomes
//           </li>
//           <li style={styles.explanationItem}>
//             <strong>Odds Against</strong> - Ratio of unfavorable to favorable outcomes
//           </li>
//         </ul>

//         <h4 style={styles.explanationTitle}>Examples:</h4>
//         <ul style={styles.explanationList}>
//           <li style={styles.explanationItem}>Rolling a 3 on a die: 1 favorable, 6 total = 1/6 ≈ 16.67%</li>
//           <li style={styles.explanationItem}>Drawing an Ace: 4 favorable, 52 total = 4/52 = 1/13 ≈ 7.69%</li>
//           <li style={styles.explanationItem}>Coin flip heads: 1 favorable, 2 total = 1/2 = 50%</li>
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.calculator}>
//         <header style={styles.header}>
//           <h1 style={styles.title}>Single Event Probability Calculator</h1>
//           <p style={styles.subtitle}>Calculate the probability of a single event occurring</p>
//         </header>

//         <div style={styles.mainContent}>
//           <div style={styles.leftSection}>
//             <div style={styles.inputSection}>
//               {error && (
//                 <div style={styles.errorBox}>
//                   {error}
//                 </div>
//               )}

//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Number of Favorable Outcomes</label>
//                 <input
//                   type="text"
//                   value={favorableOutcomes}
//                   onChange={(e) => setFavorableOutcomes(e.target.value)}
//                   placeholder="e.g., 1"
//                   style={styles.input}
//                 />
//               </div>

//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Total Number of Possible Outcomes</label>
//                 <input
//                   type="text"
//                   value={totalOutcomes}
//                   onChange={(e) => setTotalOutcomes(e.target.value)}
//                   placeholder="e.g., 6"
//                   style={styles.input}
//                 />
//               </div>

//               <div style={styles.buttonGroup}>
//                 <button onClick={calculateProbability} style={styles.calculateButton}>
//                   Calculate
//                 </button>
//                 <button onClick={handleReset} style={styles.resetButton}>
//                   Reset
//                 </button>
//               </div>
//             </div>

//             {result && (
//               <div style={styles.resultSection}>
//                 <h2 style={styles.resultTitle}>Result</h2>
                
//                 <div style={styles.resultGrid}>
//                   <div style={styles.resultCard}>
//                     <div style={styles.cardHeader}>Probability of Event A</div>
//                     <div style={styles.cardContent}>
//                       <div style={styles.mainValue}>P(A) = {result.fraction}</div>
//                       <div style={styles.secondaryValue}>= {result.probability}</div>
//                       <div style={styles.percentage}>{result.percentage}%</div>
//                     </div>
//                   </div>

//                   <div style={{...styles.resultCard, ...styles.complementCard}}>
//                     <div style={styles.cardHeader}>Probability of Event NOT Occurring</div>
//                     <div style={styles.cardContent}>
//                       <div style={styles.mainValue}>P(A') = {result.complement}</div>
//                       <div style={styles.percentage}>{result.complementPercentage}%</div>
//                     </div>
//                   </div>

//                   <div style={styles.resultCard}>
//                     <div style={styles.cardHeader}>Odds in Favor</div>
//                     <div style={styles.cardContent}>
//                       <div style={styles.oddsValue}>{result.oddsInFavor}</div>
//                     </div>
//                   </div>

//                   <div style={styles.resultCard}>
//                     <div style={styles.cardHeader}>Odds Against</div>
//                     <div style={styles.cardContent}>
//                       <div style={styles.oddsValue}>{result.oddsAgainst}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div style={styles.rightSection}>
//             <div style={styles.tabs}>
//               <button
//                 onClick={() => setActiveTab('visualization')}
//                 style={{
//                   ...styles.tab,
//                   ...(activeTab === 'visualization' ? styles.activeTab : {})
//                 }}
//               >
//                 Visualization
//               </button>
//               <button
//                 onClick={() => setActiveTab('explanations')}
//                 style={{
//                   ...styles.tab,
//                   ...(activeTab === 'explanations' ? styles.activeTab : {})
//                 }}
//               >
//                 Explanations
//               </button>
//             </div>
//             <div style={styles.tabContent}>
//               {activeTab === 'visualization' ? renderVisualization() : renderExplanations()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '40px 20px',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
//   },
//   calculator: {
//     maxWidth: '1400px',
//     margin: '0 auto',
//     background: 'white',
//     borderRadius: '20px',
//     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
//     overflow: 'hidden'
//   },
//   header: {
//     background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
//     color: 'white',
//     padding: '40px 30px',
//     textAlign: 'center'
//   },
//   title: {
//     margin: '0 0 10px 0',
//     fontSize: '32px',
//     fontWeight: '700'
//   },
//   subtitle: {
//     margin: '0',
//     fontSize: '16px',
//     opacity: '0.9'
//   },
//   mainContent: {
//     display: 'flex',
//     gap: '0'
//   },
//   leftSection: {
//     flex: '2',
//     borderRight: '1px solid #e2e8f0'
//   },
//   rightSection: {
//     flex: '1',
//     minWidth: '300px'
//   },
//   inputSection: {
//     padding: '40px 30px'
//   },
//   errorBox: {
//     background: '#fef2f2',
//     border: '1px solid #fca5a5',
//     borderRadius: '8px',
//     padding: '12px 16px',
//     marginBottom: '20px',
//     color: '#b91c1c',
//     fontWeight: '500',
//     fontSize: '14px'
//   },
//   inputGroup: {
//     marginBottom: '25px'
//   },
//   label: {
//     display: 'block',
//     marginBottom: '8px',
//     fontSize: '15px',
//     fontWeight: '600',
//     color: '#2d3748'
//   },
//   input: {
//     width: '100%',
//     padding: '14px 16px',
//     fontSize: '16px',
//     border: '2px solid #e2e8f0',
//     borderRadius: '10px',
//     boxSizing: 'border-box',
//     outline: 'none'
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '15px',
//     marginTop: '30px'
//   },
//   calculateButton: {
//     flex: '1',
//     padding: '16px 32px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: 'white',
//     background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
//     border: 'none',
//     borderRadius: '10px',
//     cursor: 'pointer',
//     boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
//   },
//   resetButton: {
//     flex: '1',
//     padding: '16px 32px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#3b82f6',
//     background: 'white',
//     border: '2px solid #3b82f6',
//     borderRadius: '10px',
//     cursor: 'pointer'
//   },
//   resultSection: {
//     padding: '40px 30px',
//     background: '#f7fafc',
//     borderTop: '1px solid #e2e8f0'
//   },
//   resultTitle: {
//     margin: '0 0 25px 0',
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#2d3748',
//     textAlign: 'center'
//   },
//   resultGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '20px'
//   },
//   resultCard: {
//     background: 'white',
//     borderRadius: '12px',
//     padding: '20px',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//     border: '2px solid #3b82f6'
//   },
//   complementCard: {
//     border: '2px solid #f56565'
//   },
//   cardHeader: {
//     fontSize: '13px',
//     fontWeight: '600',
//     color: '#718096',
//     marginBottom: '12px',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px'
//   },
//   cardContent: {
//     textAlign: 'center'
//   },
//   mainValue: {
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#2d3748',
//     marginBottom: '8px'
//   },
//   secondaryValue: {
//     fontSize: '16px',
//     color: '#4a5568',
//     marginBottom: '8px'
//   },
//   percentage: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#3b82f6',
//     marginTop: '8px'
//   },
//   oddsValue: {
//     fontSize: '28px',
//     fontWeight: '700',
//     color: '#3b82f6',
//     textAlign: 'center'
//   },
//   tabs: {
//     display: 'flex',
//     borderBottom: '1px solid #e2e8f0'
//   },
//   tab: {
//     flex: '1',
//     padding: '15px 20px',
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#718096',
//     background: 'white',
//     border: 'none',
//     cursor: 'pointer',
//     borderBottom: '3px solid transparent',
//     transition: 'all 0.2s'
//   },
//   activeTab: {
//     color: '#3b82f6',
//     borderBottom: '3px solid #3b82f6'
//   },
//   tabContent: {
//     padding: '30px',
//     minHeight: '400px'
//   },
//   emptyState: {
//     textAlign: 'center',
//     color: '#718096',
//     padding: '60px 20px',
//     fontSize: '15px'
//   },
//   visualizationContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '20px'
//   },
//   svg: {
//     display: 'block'
//   },
//   legend: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//     width: '100%'
//   },
//   legendItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px'
//   },
//   legendColor: {
//     width: '16px',
//     height: '16px',
//     borderRadius: '3px'
//   },
//   legendText: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#2d3748'
//   },
//   explanationsContent: {
//     fontSize: '14px',
//     lineHeight: '1.6'
//   },
//   explanationTitle: {
//     margin: '0 0 12px 0',
//     fontSize: '16px',
//     fontWeight: '700',
//     color: '#2d3748'
//   },
//   explanationText: {
//     margin: '0 0 20px 0',
//     color: '#4a5568'
//   },
//   explanationList: {
//     margin: '0 0 20px 0',
//     paddingLeft: '20px'
//   },
//   explanationItem: {
//     margin: '8px 0',
//     color: '#4a5568'
//   }
// };



import React, { useState, useEffect } from 'react';

export default function SingleEventProbabilityCalculator() {
  const [favorableOutcomes, setFavorableOutcomes] = useState('');
  const [totalOutcomes, setTotalOutcomes] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('visualization');

  // Clear results when inputs change
  useEffect(() => {
    setResult(null);
    setError('');
  }, [favorableOutcomes, totalOutcomes]);

  const calculateProbability = () => {
    setError('');
    
    const favorableStr = favorableOutcomes.trim();
    const totalStr = totalOutcomes.trim();

    if (favorableStr === '' || totalStr === '') {
      setError('Please fill in both fields');
      return;
    }

    if (isNaN(favorableStr) || isNaN(totalStr)) {
      setError('Please enter valid numbers only');
      return;
    }

    const favorable = parseFloat(favorableStr);
    const total = parseFloat(totalStr);

    if (!Number.isInteger(favorable) || !Number.isInteger(total)) {
      setError('Please enter whole numbers only (no decimals)');
      return;
    }

    if (favorable < 0 || total < 0) {
      setError('Please enter positive numbers only');
      return;
    }

    if (total === 0) {
      setError('Total outcomes must be greater than zero');
      return;
    }

    let probability;
    let complement;
    
    if (favorable > total) {
      probability = 0;
      complement = 1;
    } else {
      probability = favorable / total;
      complement = 1 - probability;
    }

    const percentage = (probability * 100).toFixed(2);
    const complementPercentage = (complement * 100).toFixed(2);
    
    let oddsInFavor, oddsAgainst;
    if (favorable === 0) {
      oddsInFavor = '0:' + total;
      oddsAgainst = total + ':0';
    } else if (favorable > total) {
      oddsInFavor = 'N/A';
      oddsAgainst = 'N/A';
    } else {
      oddsInFavor = `${favorable}:${total - favorable}`;
      oddsAgainst = `${total - favorable}:${favorable}`;
    }

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let simplifiedFraction;
    
    if (favorable > total) {
      simplifiedFraction = '0/1';
    } else if (favorable === 0) {
      simplifiedFraction = '0/' + total;
    } else {
      const divisor = gcd(favorable, total);
      simplifiedFraction = `${favorable / divisor}/${total / divisor}`;
    }

    setResult({
      probability: probability.toFixed(4),
      complement: complement.toFixed(4),
      percentage,
      complementPercentage,
      oddsInFavor,
      oddsAgainst,
      fraction: simplifiedFraction,
      favorable: favorable,
      total: total
    });
  };

  const handleReset = () => {
    setFavorableOutcomes('');
    setTotalOutcomes('');
    setResult(null);
    setError('');
  };

  const createArc = (startAngle, endAngle, radius, centerX, centerY) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };
  
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const renderVisualization = () => {
    if (!result) return <div style={styles.emptyState}>Calculate a probability to see visualization</div>;

    const probability = result.favorable / result.total;
    const favorableAngle = probability * 360;
    const complementAngle = (1 - probability) * 360;

    const centerX = 150;
    const centerY = 150;
    const radius = 120;

    const favPath = createArc(0, favorableAngle, radius, centerX, centerY);
    const compPath = createArc(favorableAngle, 360, radius, centerX, centerY);

    return (
      <div style={styles.visualizationContent}>
        <svg width="300" height="300" style={styles.svg}>
          <path d={compPath} fill="#ef4444" stroke="white" strokeWidth="3" />
          <path d={favPath} fill="#3b82f6" stroke="white" strokeWidth="3" />
          <circle cx={centerX} cy={centerY} r="40" fill="white" stroke="#e5e7eb" strokeWidth="2" />
          <text x={centerX} y={centerY - 5} textAnchor="middle" fontSize="18" fontWeight="bold" fill="#2d3748">
            {result.fraction}
          </text>
          <text x={centerX} y={centerY + 18} textAnchor="middle" fontSize="14" fill="#718096">
            {result.percentage}%
          </text>
        </svg>
        <div style={styles.legend}>
          <div style={styles.legendItem}>
            <div style={{...styles.legendColor, background: '#3b82f6'}}></div>
            <span style={styles.legendText}>P(A) = {result.percentage}%</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{...styles.legendColor, background: '#ef4444'}}></div>
            <span style={styles.legendText}>P(A') = {result.complementPercentage}%</span>
          </div>
        </div>
      </div>
    );
  };

  const renderExplanations = () => {
    return (
      <div style={styles.explanationsContent}>
        <h4 style={styles.explanationTitle}>Understanding Single Event Probability</h4>
        <p style={styles.explanationText}>
          Probability measures the likelihood of an event occurring, expressed as a ratio between 0 and 1 (or 0% to 100%).
        </p>
        
        <h4 style={styles.explanationTitle}>Key Concepts:</h4>
        <ul style={styles.explanationList}>
          <li style={styles.explanationItem}>
            <strong>P(A)</strong> - Probability of event A occurring = Favorable outcomes / Total outcomes
          </li>
          <li style={styles.explanationItem}>
            <strong>P(A')</strong> - Probability of event NOT occurring = 1 - P(A)
          </li>
          <li style={styles.explanationItem}>
            <strong>Odds in Favor</strong> - Ratio of favorable to unfavorable outcomes
          </li>
          <li style={styles.explanationItem}>
            <strong>Odds Against</strong> - Ratio of unfavorable to favorable outcomes
          </li>
        </ul>

        <h4 style={styles.explanationTitle}>Examples:</h4>
        <ul style={styles.explanationList}>
          <li style={styles.explanationItem}>Rolling a 3 on a die: 1 favorable, 6 total = 1/6 ≈ 16.67%</li>
          <li style={styles.explanationItem}>Drawing an Ace: 4 favorable, 52 total = 4/52 = 1/13 ≈ 7.69%</li>
          <li style={styles.explanationItem}>Coin flip heads: 1 favorable, 2 total = 1/2 = 50%</li>
        </ul>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <header style={styles.header}>
          <h1 style={styles.title}>Single Event Probability Calculator</h1>
          <p style={styles.subtitle}>Calculate the probability of a single event occurring</p>
        </header>

        <div style={styles.mainContent}>
          <div style={styles.leftSection}>
            <div style={styles.inputSection}>
              {error && (
                <div style={styles.errorBox}>
                  {error}
                </div>
              )}

              <div style={styles.inputGroup}>
                <label style={styles.label}>Number of Favorable Outcomes</label>
                <input
                  type="text"
                  value={favorableOutcomes}
                  onChange={(e) => setFavorableOutcomes(e.target.value)}
                  placeholder="e.g., 1"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Total Number of Possible Outcomes</label>
                <input
                  type="text"
                  value={totalOutcomes}
                  onChange={(e) => setTotalOutcomes(e.target.value)}
                  placeholder="e.g., 6"
                  style={styles.input}
                />
              </div>

              <div style={styles.buttonGroup}>
                <button onClick={calculateProbability} style={styles.calculateButton}>
                  Calculate
                </button>
                <button onClick={handleReset} style={styles.resetButton}>
                  Reset
                </button>
              </div>
            </div>

            {result && (
              <div style={styles.resultSection}>
                <h2 style={styles.resultTitle}>Result</h2>
                
                <div style={styles.resultGrid}>
                  <div style={styles.resultCard}>
                    <div style={styles.cardHeader}>Probability of Event A</div>
                    <div style={styles.cardContent}>
                      <div style={styles.mainValue}>P(A) = {result.fraction}</div>
                      <div style={styles.secondaryValue}>= {result.probability}</div>
                      <div style={styles.percentage}>{result.percentage}%</div>
                    </div>
                  </div>

                  <div style={{...styles.resultCard, ...styles.complementCard}}>
                    <div style={styles.cardHeader}>Probability of Event NOT Occurring</div>
                    <div style={styles.cardContent}>
                      <div style={styles.mainValue}>P(A') = {result.complement}</div>
                      <div style={styles.percentage}>{result.complementPercentage}%</div>
                    </div>
                  </div>

                  <div style={styles.resultCard}>
                    <div style={styles.cardHeader}>Odds in Favor</div>
                    <div style={styles.cardContent}>
                      <div style={styles.oddsValue}>{result.oddsInFavor}</div>
                    </div>
                  </div>

                  <div style={styles.resultCard}>
                    <div style={styles.cardHeader}>Odds Against</div>
                    <div style={styles.cardContent}>
                      <div style={styles.oddsValue}>{result.oddsAgainst}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div style={styles.rightSection}>
            <div style={styles.tabs}>
              <button
                onClick={() => setActiveTab('visualization')}
                style={{
                  ...styles.tab,
                  ...(activeTab === 'visualization' ? styles.activeTab : {})
                }}
              >
                Visualization
              </button>
              <button
                onClick={() => setActiveTab('explanations')}
                style={{
                  ...styles.tab,
                  ...(activeTab === 'explanations' ? styles.activeTab : {})
                }}
              >
                Explanations
              </button>
            </div>
            <div style={styles.tabContent}>
              {activeTab === 'visualization' ? renderVisualization() : renderExplanations()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    marginTop:'-20px'
  },
  calculator: {
    maxWidth: '1400px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '20px',
    // boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    border:'solid 1.5px lightgray'
  },
  header: {
    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    color: 'white',
    padding: '20px 20px',
    textAlign: 'center'
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '32px',
    fontWeight: '700'
  },
  subtitle: {
    margin: '0',
    fontSize: '16px',
    opacity: '0.9'
  },
  mainContent: {
    display: 'flex',
    gap: '0'
  },
  leftSection: {
    flex: '2',
    borderRight: '1px solid #e2e8f0'
  },
  rightSection: {
    flex: '1',
    minWidth: '300px'
  },
  inputSection: {
    padding: '20px 30px'
  },
  errorBox: {
    background: '#fef2f2',
    border: '1px solid #fca5a5',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '20px',
    color: '#b91c1c',
    fontWeight: '500',
    fontSize: '14px'
  },
  inputGroup: {
    marginBottom: '25px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#2d3748'
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '16px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    boxSizing: 'border-box',
    outline: 'none'
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px'
  },
  calculateButton: {
    flex: '1',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    color: 'white',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
  },
  resetButton: {
    flex: '1',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#3b82f6',
    background: 'white',
    border: '2px solid #3b82f6',
    borderRadius: '10px',
    cursor: 'pointer'
  },
  resultSection: {
    padding: '20px 20px',
    background: '#f7fafc',
    borderTop: '1px solid #e2e8f0'
  },
  resultTitle: {
    margin: '0 0 25px 0',
    fontSize: '24px',
    fontWeight: '700',
    color: '#2d3748',
    textAlign: 'center'
  },
  resultGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px'
  },
  resultCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid #3b82f6'
  },
  complementCard: {
    border: '2px solid #f56565'
  },
  cardHeader: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#718096',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  cardContent: {
    textAlign: 'center'
  },
  mainValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '8px'
  },
  secondaryValue: {
    fontSize: '16px',
    color: '#4a5568',
    marginBottom: '8px'
  },
  percentage: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#3b82f6',
    marginTop: '8px'
  },
  oddsValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#3b82f6',
    textAlign: 'center'
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid #e2e8f0'
  },
  tab: {
    flex: '1',
    padding: '15px 20px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#718096',
    background: 'white',
    border: 'none',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    transition: 'all 0.2s'
  },
  activeTab: {
    color: '#3b82f6',
    borderBottom: '3px solid #3b82f6'
  },
  tabContent: {
    padding: '30px',
    minHeight: '400px'
  },
  emptyState: {
    textAlign: 'center',
    color: '#718096',
    padding: '60px 20px',
    fontSize: '15px'
  },
  visualizationContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  svg: {
    display: 'block'
  },
  legend: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '100%'
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  legendColor: {
    width: '16px',
    height: '16px',
    borderRadius: '3px'
  },
  legendText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2d3748'
  },
  explanationsContent: {
    fontSize: '14px',
    lineHeight: '1.6'
  },
  explanationTitle: {
    margin: '0 0 12px 0',
    fontSize: '16px',
    fontWeight: '700',
    color: '#2d3748'
  },
  explanationText: {
    margin: '0 0 20px 0',
    color: '#4a5568'
  },
  explanationList: {
    margin: '0 0 20px 0',
    paddingLeft: '20px'
  },
  explanationItem: {
    margin: '8px 0',
    color: '#4a5568'
  }
};