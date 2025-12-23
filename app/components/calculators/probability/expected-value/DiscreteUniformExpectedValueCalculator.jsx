// import { useState, useMemo } from 'react';

// const DiscreteUniformExpectedValueCalculator = () => {
//   const [a, setA] = useState(1);
//   const [b, setB] = useState(6);
//   const [activeTab, setActiveTab] = useState('distribution');

//   const handleReset = () => {
//     setA(1);
//     setB(6);
//     setActiveTab('distribution');
//   };

//   const updateA = (value) => {
//     if (value === '' || value === '-') {
//       setA('');
//     } else {
//       const num = parseInt(value);
//       if (!isNaN(num)) {
//         setA(num);
//       }
//     }
//   };

//   const updateB = (value) => {
//     if (value === '' || value === '-') {
//       setB('');
//     } else {
//       const num = parseInt(value);
//       if (!isNaN(num)) {
//         setB(num);
//       }
//     }
//   };

//   const calculations = useMemo(() => {
//     const aVal = typeof a === 'string' ? parseInt(a) : a;
//     const bVal = typeof b === 'string' ? parseInt(b) : b;

//     if (isNaN(aVal) || isNaN(bVal) || bVal < aVal) {
//       return {
//         isValid: false,
//         a: aVal,
//         b: bVal,
//         outcomes: [],
//         expectedValue: 0,
//         variance: 0,
//         standardDeviation: 0,
//         contributions: []
//       };
//     }

//     // Generate all outcomes
//     const n = bVal - aVal + 1;
//     const probability = 1 / n;
    
//     const outcomes = [];
//     for (let k = aVal; k <= bVal; k++) {
//       outcomes.push({
//         value: k,
//         probability: probability,
//         contribution: k * probability
//       });
//     }

//     // Calculate expected value
//     const expectedValue = (aVal + bVal) / 2;

//     // Calculate variance: ((b - a + 1)² - 1) / 12
//     const variance = (Math.pow(n, 2) - 1) / 12;
//     const standardDeviation = Math.sqrt(variance);

//     return {
//       isValid: true,
//       a: aVal,
//       b: bVal,
//       n: n,
//       outcomes,
//       expectedValue,
//       variance,
//       standardDeviation,
//       contributions: outcomes.map(o => ({
//         value: o.value,
//         probability: o.probability,
//         contribution: o.contribution
//       }))
//     };
//   }, [a, b]);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.h2}>Expected Value Calculator - Discrete Uniform Distribution</h2>
      
//       <div style={styles.intro}>
//         <p style={styles.introText}>
//           The <strong>discrete uniform distribution</strong> describes a scenario where all outcomes are equally likely. 
//           Common examples include rolling a fair die, picking a random integer from a range, or selecting lottery numbers. 
//           Each value has the same probability of occurring.
//         </p>
//       </div>

//       <div style={styles.mainLayout}>
//         {/* LEFT COLUMN - INPUT */}
//         <div style={styles.leftColumn}>
//           <div style={styles.inputSection}>
//             <div style={styles.inputHeader}>
//               <h3 style={styles.h3}>Distribution Parameters</h3>
//               <button onClick={handleReset} style={styles.resetBtn}>
//                 Reset
//               </button>
//             </div>
            
//             <div style={styles.parameterGrid}>
//               <div style={styles.parameterItem}>
//                 <label style={styles.parameterLabel}>
//                   <strong>a</strong> (Minimum Value)
//                 </label>
//                 <input
//                   type="number"
//                   value={a}
//                   onChange={(e) => updateA(e.target.value)}
//                   style={{
//                     ...styles.parameterInput,
//                     ...(a !== '' && (isNaN(parseInt(a)) || (b !== '' && parseInt(a) > parseInt(b))) ? styles.inputInvalid : {})
//                   }}
//                   step="1"
//                 />
//                 <span style={styles.parameterDescription}>Smallest possible outcome</span>
//               </div>

//               <div style={styles.parameterItem}>
//                 <label style={styles.parameterLabel}>
//                   <strong>b</strong> (Maximum Value)
//                 </label>
//                 <input
//                   type="number"
//                   value={b}
//                   onChange={(e) => updateB(e.target.value)}
//                   style={{
//                     ...styles.parameterInput,
//                     ...(b !== '' && (isNaN(parseInt(b)) || (a !== '' && parseInt(b) < parseInt(a))) ? styles.inputInvalid : {})
//                   }}
//                   step="1"
//                 />
//                 <span style={styles.parameterDescription}>Largest possible outcome</span>
//               </div>
//             </div>

//             {!calculations.isValid && a !== '' && b !== '' && (
//               <div style={styles.errorMessage}>
//                 ⚠ Maximum value (b) must be greater than or equal to minimum value (a)
//               </div>
//             )}

//             {calculations.isValid && (
//               <div style={styles.infoBox}>
//                 <div style={styles.infoRow}>
//                   <span><strong>Number of outcomes:</strong></span>
//                   <span>{calculations.n}</span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span><strong>Probability each:</strong></span>
//                   <span>1/{calculations.n} = {(1/calculations.n).toFixed(4)}</span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span><strong>Formula:</strong></span>
//                   <span>E(X) = (a + b) / 2</span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {calculations.isValid && calculations.n <= 20 && (
//             <div style={styles.outcomesSection}>
//               <h3 style={styles.h3}>All Outcomes</h3>
//               <div style={styles.outcomesTable}>
//                 <div style={styles.outcomesHeader}>
//                   <span>Value</span>
//                   <span>Probability</span>
//                   <span>Contribution</span>
//                 </div>
//                 {calculations.outcomes.map((outcome, index) => (
//                   <div key={index} style={styles.outcomesRow}>
//                     <span style={styles.outcomeValue}>{outcome.value}</span>
//                     <span style={styles.outcomeProbability}>{outcome.probability.toFixed(4)}</span>
//                     <span style={styles.outcomeContribution}>{outcome.contribution.toFixed(4)}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {calculations.isValid && calculations.n > 20 && (
//             <div style={styles.largeRangeNote}>
//               <strong>Note:</strong> Range contains {calculations.n} outcomes. Individual values not displayed for ranges larger than 20.
//             </div>
//           )}
//         </div>

//         {/* RIGHT COLUMN - RESULTS & VISUALIZATIONS */}
//         <div style={styles.rightColumn}>
//           {calculations.isValid ? (
//             <>
//               <div style={styles.resultsSection}>
//                 <div style={styles.resultCard}>
//                   <div style={styles.resultLabel}>Expected Value E(X)</div>
//                   <div style={styles.resultValue}>
//                     {calculations.expectedValue.toFixed(4)}
//                   </div>
//                   <div style={styles.resultFormula}>
//                     ({calculations.a} + {calculations.b}) / 2
//                   </div>
//                 </div>

//                 <div style={styles.resultCard}>
//                   <div style={styles.resultLabel}>Variance Var(X)</div>
//                   <div style={styles.resultValue}>
//                     {calculations.variance.toFixed(4)}
//                   </div>
//                   <div style={styles.resultFormula}>
//                     ({calculations.n}² - 1) / 12
//                   </div>
//                 </div>

//                 <div style={styles.resultCard}>
//                   <div style={styles.resultLabel}>Standard Deviation σ</div>
//                   <div style={styles.resultValue}>
//                     {calculations.standardDeviation.toFixed(4)}
//                   </div>
//                 </div>
//               </div>

//               <div style={styles.visualization}>
//                 <div style={styles.tabContainer}>
//                   <button
//                     onClick={() => setActiveTab('distribution')}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === 'distribution' ? styles.tabActive : {})
//                     }}
//                   >
//                     Probability Distribution
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('breakdown')}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === 'breakdown' ? styles.tabActive : {})
//                     }}
//                   >
//                     Calculation Breakdown
//                   </button>
//                   {calculations.n <= 20 && (
//                     <button
//                       onClick={() => setActiveTab('contributions')}
//                       style={{
//                         ...styles.tab,
//                         ...(activeTab === 'contributions' ? styles.tabActive : {})
//                       }}
//                     >
//                       Contributions
//                     </button>
//                   )}
//                 </div>

//                 {activeTab === 'distribution' && (
//                   <div style={styles.chart}>
//                     {calculations.n <= 30 ? (
//                       <ProbabilityDistributionChart 
//                         contributions={calculations.contributions}
//                         expectedValue={calculations.expectedValue}
//                       />
//                     ) : (
//                       <div style={styles.largeRangeChart}>
//                         <p>Range too large to display individual bars ({calculations.n} outcomes)</p>
//                         <div style={styles.summaryStats}>
//                           <div><strong>All values from {calculations.a} to {calculations.b}</strong></div>
//                           <div>Each with probability: 1/{calculations.n} = {(1/calculations.n).toFixed(6)}</div>
//                           <div style={styles.expectedValueHighlight}>
//                             Expected Value E(X) = {calculations.expectedValue.toFixed(4)}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {activeTab === 'breakdown' && (
//                   <div style={styles.breakdownTab}>
//                     <div style={styles.formula}>
//                       <strong>Formula:</strong> E(X) = (a + b) / 2
//                     </div>
                    
//                     <div style={styles.steps}>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Minimum (a):</span>
//                         <span style={styles.stepCalc}>{calculations.a}</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Maximum (b):</span>
//                         <span style={styles.stepCalc}>{calculations.b}</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Number of outcomes:</span>
//                         <span style={styles.stepCalc}>b - a + 1 = {calculations.n}</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Probability each:</span>
//                         <span style={styles.stepCalc}>1/{calculations.n} = {(1/calculations.n).toFixed(6)}</span>
//                       </div>
                      
//                       <div style={styles.stepTotal}>
//                         <span style={styles.stepTotalLabel}>Expected Value:</span>
//                         <span style={styles.stepTotalCalc}>
//                           ({calculations.a} + {calculations.b}) / 2 = {calculations.expectedValue.toFixed(4)}
//                         </span>
//                       </div>
//                     </div>

//                     <div style={styles.note}>
//                       <strong>Alternative calculation:</strong> Since all outcomes are equally likely, E(X) is simply 
//                       the average of the minimum and maximum values.
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'contributions' && calculations.n <= 20 && (
//                   <div style={styles.chart}>
//                     <ContributionsChart contributions={calculations.contributions} />
//                   </div>
//                 )}
//               </div>
//             </>
//           ) : (
//             <div style={styles.resultsPlaceholder}>
//               <h3 style={styles.h3}>Results</h3>
//               <p style={styles.placeholderText}>
//                 Enter valid parameters where b ≥ a to see results
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       <div style={styles.explanation}>
//         <h3 style={styles.h3}>Understanding Discrete Uniform Distribution</h3>
        
//         <div style={styles.explainGrid}>
//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>What is Discrete Uniform Distribution?</h4>
//             <p style={styles.p}>
//               A discrete uniform distribution occurs when all outcomes in a finite set are equally likely. 
//               Each value has the same probability: 1 / (number of outcomes). This is the fairest possible distribution.
//             </p>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Key Properties</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Equal probability:</strong> P(X = k) = 1/(b - a + 1) for all k</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Expected value:</strong> E(X) = (a + b) / 2 (midpoint)</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Variance:</strong> Var(X) = ((b - a + 1)² - 1) / 12</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Symmetric:</strong> Distribution is symmetric around E(X)</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Common Examples</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Fair die:</strong> Rolling 1-6, each has probability 1/6</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Random selection:</strong> Picking a number from 1 to 100</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Lottery:</strong> Drawing numbers from a finite set</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Random assignment:</strong> Assigning people to equal groups</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Real-World Applications</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Games:</strong> Fair dice, card draws, spinners</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Sampling:</strong> Random selection from a list</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Simulations:</strong> Generating random integers</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Cryptography:</strong> Random number generation</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Probability Distribution Chart Component
// const ProbabilityDistributionChart = ({ contributions, expectedValue }) => {
//   const sortedContributions = [...contributions].sort((a, b) => a.value - b.value);
//   const maxProb = Math.max(...sortedContributions.map(c => c.probability));
//   const minValue = Math.min(...sortedContributions.map(c => c.value));
//   const maxValue = Math.max(...sortedContributions.map(c => c.value));
//   const valueRange = maxValue - minValue;
  
//   return (
//     <div style={styles.distributionChart}>
//       <div style={styles.chartArea}>
//         <div style={styles.yAxisLabel}>Probability</div>
        
//         <div style={styles.chartContent}>
//           {valueRange > 0 && (
//             <div 
//               style={{
//                 ...styles.dashedLine,
//                 left: `${((expectedValue - minValue) / valueRange) * 100}%`
//               }}
//             >
//               <div style={styles.sideLabel}>
//                 E(X) = {expectedValue.toFixed(2)}
//               </div>
//             </div>
//           )}
          
//           <div style={styles.barsContainer}>
//             {sortedContributions.map((contrib, index) => {
//               const barHeight = maxProb > 0 ? (contrib.probability / maxProb) * 100 : 0;
              
//               return (
//                 <div key={index} style={styles.barWrapper}>
//                   <div style={styles.barColumn}>
//                     <div 
//                       style={{
//                         ...styles.distributionBar,
//                         height: `${barHeight}%`
//                       }}
//                     >
//                       <span style={styles.distributionBarLabel}>
//                         {contrib.probability.toFixed(3)}
//                       </span>
//                     </div>
//                   </div>
//                   <div style={styles.xAxisLabel}>{contrib.value}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
        
//         <div style={styles.xAxisTitle}>Value</div>
//       </div>
//     </div>
//   );
// };

// // Contributions Chart Component
// const ContributionsChart = ({ contributions }) => {
//   const maxAbsContribution = Math.max(...contributions.map(c => Math.abs(c.contribution)));
  
//   return (
//     <div>
//       {contributions.map((contrib, index) => {
//         const barWidth = maxAbsContribution > 0 ? (Math.abs(contrib.contribution) / maxAbsContribution) * 100 : 0;
        
//         return (
//           <div key={index} style={styles.barRow}>
//             <div style={styles.barLabel}>
//               Value {contrib.value}
//             </div>
//             <div style={styles.barContainer}>
//               <div 
//                 style={{
//                   ...styles.bar,
//                   ...styles.barPositive,
//                   width: `${barWidth}%`
//                 }}
//               >
//                 <span style={styles.barValue}>{contrib.contribution.toFixed(4)}</span>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '1400px',
//     margin: '0 auto',
//     padding: '20px',
//   },
//   h2: {
//     fontSize: '2rem',
//     marginBottom: '20px',
//     color: '#1a1a1a',
//   },
//   h3: {
//     fontSize: '1.3rem',
//     marginBottom: '15px',
//     color: '#2c3e50',
//   },
//   h4: {
//     fontSize: '1.1rem',
//     marginBottom: '10px',
//     color: '#495057',
//   },
//   intro: {
//     background: '#f8f9fa',
//     padding: '20px',
//     borderRadius: '8px',
//     marginBottom: '30px',
//     borderLeft: '4px solid #007bff',
//   },
//   introText: {
//     margin: 0,
//     lineHeight: 1.6,
//     color: '#333',
//   },
//   mainLayout: {
//     display: 'grid',
//     gridTemplateColumns: '550px 1fr',
//     gap: '30px',
//     marginBottom: '40px',
//   },
//   leftColumn: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   rightColumn: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   inputSection: {
//     padding: '20px',
//     background: '#fff',
//     borderRadius: '8px',
//     border: '1px solid #dee2e6',
//   },
//   inputHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   resetBtn: {
//     padding: '8px 16px',
//     background: '#6c757d',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '0.9rem',
//     cursor: 'pointer',
//     fontWeight: 500,
//   },
//   parameterGrid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr',
//     gap: '20px',
//   },
//   parameterItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   parameterLabel: {
//     fontSize: '1rem',
//     color: '#2c3e50',
//   },
//   parameterInput: {
//     padding: '12px',
//     border: '1px solid #ced4da',
//     borderRadius: '4px',
//     fontSize: '1.1rem',
//     width: '100%',
//   },
//   inputInvalid: {
//     borderColor: '#dc3545',
//     background: '#fff5f5',
//   },
//   parameterDescription: {
//     fontSize: '0.85rem',
//     color: '#6c757d',
//     fontStyle: 'italic',
//   },
//   errorMessage: {
//     marginTop: '15px',
//     padding: '12px',
//     background: '#fff3cd',
//     border: '1px solid #ffc107',
//     borderRadius: '4px',
//     color: '#856404',
//     fontSize: '0.9rem',
//   },
//   infoBox: {
//     marginTop: '20px',
//     padding: '15px',
//     background: '#e7f3ff',
//     borderRadius: '4px',
//     border: '1px solid #007bff',
//   },
//   infoRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '8px 0',
//     borderBottom: '1px solid #cce5ff',
//     fontSize: '0.95rem',
//   },
//   outcomesSection: {
//     padding: '20px',
//     background: '#fff',
//     borderRadius: '8px',
//     border: '1px solid #dee2e6',
//   },
//   outcomesTable: {
//     width: '100%',
//   },
//   outcomesHeader: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr 1fr',
//     gap: '10px',
//     padding: '10px',
//     background: '#f1f3f5',
//     borderRadius: '4px',
//     fontWeight: 600,
//     marginBottom: '8px',
//     color: '#495057',
//     fontSize: '0.9rem',
//   },
//   outcomesRow: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr 1fr',
//     gap: '10px',
//     padding: '8px 10px',
//     borderBottom: '1px solid #e9ecef',
//     fontSize: '0.9rem',
//   },
//   outcomeValue: {
//     fontWeight: 600,
//     color: '#007bff',
//   },
//   outcomeProbability: {
//     textAlign: 'center',
//     fontFamily: "'Courier New', monospace",
//   },
//   outcomeContribution: {
//     textAlign: 'right',
//     fontFamily: "'Courier New', monospace",
//   },
//   largeRangeNote: {
//     padding: '15px',
//     background: '#fff3cd',
//     border: '1px solid #ffc107',
//     borderRadius: '4px',
//     fontSize: '0.9rem',
//     color: '#856404',
//   },
//   resultsSection: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '15px',
//   },
//   resultCard: {
//     background: 'linear-gradient(135deg, #007bff 0%, #204bc2 100%)',
//     color: 'white',
//     padding: '20px',
//     borderRadius: '8px',
//     textAlign: 'center',
//   },
//   resultLabel: {
//     fontSize: '0.85rem',
//     opacity: 0.9,
//     marginBottom: '8px',
//   },
//   resultValue: {
//     fontSize: '1.8rem',
//     fontWeight: 700,
//     marginBottom: '4px',
//   },
//   resultFormula: {
//     fontSize: '0.8rem',
//     opacity: 0.8,
//     fontFamily: "'Courier New', monospace",
//   },
//   visualization: {
//     background: '#fff',
//     borderRadius: '8px',
//     border: '1px solid #dee2e6',
//     overflow: 'hidden',
//   },
//   tabContainer: {
//     display: 'flex',
//     borderBottom: '2px solid #dee2e6',
//   },
//   tab: {
//     flex: 1,
//     padding: '12px 20px',
//     background: '#f8f9fa',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '0.95rem',
//     fontWeight: 500,
//     color: '#495057',
//     transition: 'all 0.2s',
//   },
//   tabActive: {
//     background: 'white',
//     color: '#007bff',
//     borderBottom: '2px solid #007bff',
//     marginBottom: '-2px',
//   },
//   chart: {
//     padding: '20px',
//     background: 'white',
//   },
//   largeRangeChart: {
//     padding: '40px',
//     textAlign: 'center',
//   },
//   summaryStats: {
//     marginTop: '20px',
//     padding: '20px',
//     background: '#f8f9fa',
//     borderRadius: '4px',
//   },
//   expectedValueHighlight: {
//     marginTop: '15px',
//     padding: '10px',
//     background: '#007bff',
//     color: 'white',
//     borderRadius: '4px',
//     fontSize: '1.1rem',
//     fontWeight: 600,
//   },
//   breakdownTab: {
//     padding: '20px',
//     background: 'white',
//   },
//   formula: {
//     padding: '12px',
//     background: '#f8f9fa',
//     borderLeft: '4px solid #007bff',
//     marginBottom: '15px',
//     fontSize: '1rem',
//   },
//   steps: {
//     background: '#f8f9fa',
//     padding: '15px',
//     borderRadius: '4px',
//     marginBottom: '15px',
//   },
//   step: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '8px',
//     borderBottom: '1px solid #e9ecef',
//     fontSize: '0.9rem',
//   },
//   stepLabel: {
//     fontWeight: 600,
//     color: '#495057',
//   },
//   stepCalc: {
//     fontFamily: "'Courier New', monospace",
//     color: '#212529',
//   },
//   stepTotal: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '12px 8px 8px',
//     marginTop: '8px',
//     borderTop: '2px solid #007bff',
//     fontSize: '1rem',
//   },
//   stepTotalLabel: {
//     color: '#007bff',
//     fontWeight: 600,
//   },
//   stepTotalCalc: {
//     color: '#007bff',
//     fontWeight: 700,
//     fontFamily: "'Courier New', monospace",
//   },
//   note: {
//     padding: '12px',
//     background: '#e7f3ff',
//     borderRadius: '4px',
//     fontSize: '0.9rem',
//   },
//   distributionChart: {
//     width: '100%',
//   },
//   chartArea: {
//     position: 'relative',
//   },
//   yAxisLabel: {
//     position: 'absolute',
//     left: '-30px',
//     top: '50%',
//     transform: 'translateY(-50%) rotate(-90deg)',
//     fontSize: '0.85rem',
//     fontWeight: 600,
//     color: '#495057',
//   },
//   chartContent: {
//     position: 'relative',
//     marginLeft: '10px',
//   },
//   dashedLine: {
//     position: 'absolute',
//     top: 0,
//     bottom: '40px',
//     width: '2px',
//     borderLeft: '3px dashed #dc3545',
//     zIndex: 10,
//   },
//   sideLabel: {
//     position: 'absolute',
//     top: '50%',
//     right: '-110px',
//     transform: 'translateY(-50%)',
//     background: '#dc3545',
//     color: 'white',
//     padding: '6px 12px',
//     borderRadius: '4px',
//     fontWeight: 600,
//     fontSize: '0.85rem',
//     whiteSpace: 'nowrap',
//   },
//   barsContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'flex-end',
//     height: '250px',
//     gap: '10px',
//     overflowX: 'auto',
//   },
//   barWrapper: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     minWidth: '40px',
//     maxWidth: '80px',
//   },
//   barColumn: {
//     width: '100%',
//     height: '200px',
//     display: 'flex',
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   distributionBar: {
//     width: '80%',
//     background: 'linear-gradient(180deg, #007bff, #204bc2)',
//     borderRadius: '4px 4px 0 0',
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     paddingTop: '8px',
//     minHeight: '30px',
//   },
//   distributionBarLabel: {
//     color: 'white',
//     fontSize: '0.75rem',
//     fontWeight: 600,
//   },
//   xAxisLabel: {
//     marginTop: '8px',
//     fontSize: '0.85rem',
//     fontWeight: 600,
//     color: '#495057',
//   },
//   xAxisTitle: {
//     textAlign: 'center',
//     marginTop: '15px',
//     fontSize: '0.85rem',
//     fontWeight: 600,
//     color: '#495057',
//   },
//   barRow: {
//     marginBottom: '12px',
//   },
//   barLabel: {
//     fontWeight: 600,
//     marginBottom: '4px',
//     color: '#495057',
//     fontSize: '0.9rem',
//   },
//   barContainer: {
//     position: 'relative',
//     height: '35px',
//     background: '#f1f3f5',
//     borderRadius: '4px',
//     overflow: 'hidden',
//   },
//   bar: {
//     height: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingRight: '10px',
//     transition: 'width 0.3s ease',
//     minWidth: '60px',
//   },
//   barPositive: {
//     background: 'linear-gradient(90deg, #007bff, #204bc2)',
//   },
//   barValue: {
//     color: 'white',
//     fontWeight: 600,
//     fontSize: '0.85rem',
//   },
//   resultsPlaceholder: {
//     padding: '30px',
//     background: '#f8f9fa',
//     borderRadius: '8px',
//     border: '2px dashed #dee2e6',
//     textAlign: 'center',
//   },
//   placeholderText: {
//     color: '#6c757d',
//     margin: 0,
//   },
//   explanation: {
//     background: 'white',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '30px',
//   },
//   explainGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '30px',
//   },
//   explainSection: {
//   },
//   p: {
//     lineHeight: 1.6,
//     color: '#333',
//     marginBottom: '10px',
//     fontSize: '0.95rem',
//   },
//   ul: {
//     margin: '10px 0',
//     paddingLeft: '20px',
//   },
//   li: {
//     marginBottom: '6px',
//     lineHeight: 1.6,
//     color: '#333',
//     fontSize: '0.95rem',
//   },
//   liStrong: {
//     color: '#007bff',
//   },
// };

// export default DiscreteUniformExpectedValueCalculator;



import { useState, useMemo } from 'react';

const DiscreteUniformExpectedValueCalculator = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(6);
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonA, setComparisonA] = useState(2);
  const [comparisonB, setComparisonB] = useState(10);

  const handleReset = () => {
    setA(1);
    setB(6);
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const updateA = (value) => {
    if (value === '' || value === '-') {
      setA('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num)) {
        setA(num);
      }
    }
  };

  const updateB = (value) => {
    if (value === '' || value === '-') {
      setB('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num)) {
        setB(num);
      }
    }
  };

  const calculations = useMemo(() => {
    const aVal = typeof a === 'string' ? parseInt(a) : a;
    const bVal = typeof b === 'string' ? parseInt(b) : b;

    if (isNaN(aVal) || isNaN(bVal) || bVal < aVal) {
      return {
        isValid: false,
        a: aVal,
        b: bVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    const n = bVal - aVal + 1;
    const probability = 1 / n;
    
    const outcomes = [];
    for (let k = aVal; k <= bVal; k++) {
      outcomes.push({
        value: k,
        probability: probability,
        contribution: k * probability
      });
    }

    const expectedValue = (aVal + bVal) / 2;
    const variance = (Math.pow(n, 2) - 1) / 12;
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      a: aVal,
      b: bVal,
      n: n,
      outcomes,
      expectedValue,
      variance,
      standardDeviation,
      contributions: outcomes.map(o => ({
        value: o.value,
        probability: o.probability,
        contribution: o.contribution
      }))
    };
  }, [a, b]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonA) || isNaN(comparisonB) || comparisonB < comparisonA) {
      return { isValid: false, expectedValue: 0 };
    }
    return {
      isValid: true,
      expectedValue: (comparisonA + comparisonB) / 2
    };
  }, [comparisonA, comparisonB]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const a = calculations.a;
    const b = calculations.b;

    // Generate contextual examples
    if (a === 1 && b === 6) {
      return {
        scenario: "Fair 6-sided die",
        examples: [
          `Rolling once? Expect ${ev.toFixed(1)} on average`,
          `Rolling 100 times? Expect total ≈ ${(ev * 100).toFixed(0)} (${ev.toFixed(1)} × 100)`,
          `Rolling 1000 times? Expect total ≈ ${(ev * 1000).toFixed(0)}`
        ]
      };
    } else if (a >= 1 && b <= 100 && (b - a) >= 10) {
      return {
        scenario: "Random selection",
        examples: [
          `Selecting one number? Expect ${ev.toFixed(1)} on average`,
          `If values represent dollars: Expected value = $${ev.toFixed(2)}`,
          `Over ${calculations.n} selections (with replacement)? Total ≈ ${(ev * calculations.n).toFixed(0)}`
        ]
      };
    } else {
      return {
        scenario: "General uniform distribution",
        examples: [
          `Single outcome? Expect ${ev.toFixed(2)} on average`,
          `10 trials? Expect total ≈ ${(ev * 10).toFixed(1)}`,
          `100 trials? Expect total ≈ ${(ev * 100).toFixed(0)}`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      {/* <h2 style={styles.h2}>Expected Value Calculator - Discrete Uniform Distribution</h2> */}
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average outcome) for a discrete uniform distribution where 
          all outcomes are equally likely. Perfect for fair dice, random integer selection, or any scenario with equal probabilities.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} means on average you get {calculations.expectedValue.toFixed(2)} per trial. 
            Over many trials, your outcomes will average to this value.
          </div>
        </div>
      )}

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Parameters</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.parameterGrid}>
              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>a</strong> (Minimum Value)
                </label>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  value={typeof a === 'string' ? 0 : a}
                  onChange={(e) => setA(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={a}
                  onChange={(e) => updateA(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(a !== '' && (isNaN(parseInt(a)) || (b !== '' && parseInt(a) > parseInt(b))) ? styles.inputInvalid : {})
                  }}
                  step="1"
                />
              </div>

              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>b</strong> (Maximum Value)
                </label>
                <input
                  type="range"
                  min="-50"
                  max="100"
                  value={typeof b === 'string' ? 0 : b}
                  onChange={(e) => setB(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={b}
                  onChange={(e) => updateB(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(b !== '' && (isNaN(parseInt(b)) || (a !== '' && parseInt(b) < parseInt(a))) ? styles.inputInvalid : {})
                  }}
                  step="1"
                />
              </div>
            </div>

            {!calculations.isValid && a !== '' && b !== '' && (
              <div style={styles.errorMessage}>
                ⚠ Maximum value (b) must be ≥ minimum value (a)
              </div>
            )}

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Number of outcomes:</span>
                  <span><strong>{calculations.n}</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Probability each:</span>
                  <span><strong>1/{calculations.n}</strong></span>
                </div>
              </div>
            )}
          </div>

          {/* COMPARISON FEATURE */}
          {calculations.isValid && (
            <div style={styles.comparisonSection}>
              <button 
                onClick={() => setShowComparison(!showComparison)}
                style={styles.comparisonToggle}
              >
                {showComparison ? '▼' : '▶'} Compare with Different Values
              </button>
              {showComparison && (
                <div style={styles.comparisonContent}>
                  <div style={styles.comparisonInputs}>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative a:</label>
                      <input
                        type="number"
                        value={comparisonA}
                        onChange={(e) => setComparisonA(parseInt(e.target.value) || 0)}
                        style={styles.comparisonInputField}
                      />
                    </div>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative b:</label>
                      <input
                        type="number"
                        value={comparisonB}
                        onChange={(e) => setComparisonB(parseInt(e.target.value) || 0)}
                        style={styles.comparisonInputField}
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          <strong>Current:</strong> a={calculations.a}, b={calculations.b}
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          <strong>Alternative:</strong> a={comparisonA}, b={comparisonB}
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% higher
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% lower
                          </span>
                        ) : (
                          <span>Same expected value</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {calculations.isValid && calculations.n <= 20 && (
            <div style={styles.contributionsSection}>
              <h3 style={styles.h3}>Contribution to E(X)</h3>
              <div style={styles.contributionsTable}>
                <div style={styles.contributionsHeader}>
                  <span>Value</span>
                  <span>Probability</span>
                  <span>Contribution</span>
                </div>
                {calculations.outcomes.map((outcome, index) => (
                  <div key={index} style={styles.contributionsRow}>
                    <span style={styles.contributionValue}>{outcome.value}</span>
                    <span style={styles.contributionProbability}>{outcome.probability.toFixed(4)}</span>
                    <span style={styles.contributionAmount}>{outcome.contribution.toFixed(4)}</span>
                  </div>
                ))}
                <div style={styles.contributionsTotal}>
                  <span><strong>E(X) =</strong></span>
                  <span></span>
                  <span><strong>{calculations.expectedValue.toFixed(4)}</strong></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - EXPECTED VALUE FOCUS */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              {/* HERO: Giant Expected Value Display */}
              <div style={styles.heroExpectedValue}>
                <div style={styles.heroLabel}>Expected Value</div>
                <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(4)}</div>
                <div style={styles.heroFormula}>
                  Formula: (a + b) / 2 = ({calculations.a} + {calculations.b}) / 2
                </div>
                <div style={styles.heroInterpretation}>
                  <strong>Interpretation:</strong> On average, you can expect an outcome of {calculations.expectedValue.toFixed(2)}
                </div>
              </div>

              {/* REAL-WORLD EXAMPLES */}
              {realExample && (
                <div style={styles.examplesSection}>
                  <div style={styles.examplesHeader}>
                    <span style={styles.examplesIcon}>📊</span>
                    <span style={styles.examplesTitle}>E(X) in Context: {realExample.scenario}</span>
                  </div>
                  <ul style={styles.examplesList}>
                    {realExample.examples.map((example, index) => (
                      <li key={index} style={styles.exampleItem}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Statistics - Collapsed by default */}
              <div style={styles.additionalStats}>
                <button 
                  onClick={() => setShowAdditionalStats(!showAdditionalStats)}
                  style={styles.additionalStatsToggle}
                >
                  {showAdditionalStats ? '▼' : '▶'} Additional Statistics
                </button>
                {showAdditionalStats && (
                  <div style={styles.additionalStatsContent}>
                    <div style={styles.statRow}>
                      <span>Variance:</span>
                      <span>{calculations.variance.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Standard Deviation:</span>
                      <span>{calculations.standardDeviation.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Range:</span>
                      <span>[{calculations.a}, {calculations.b}]</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs focused on E(X) */}
              <div style={styles.visualization}>
                <div style={styles.tabContainer}>
                  <button
                    onClick={() => setActiveTab('visualization')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'visualization' ? styles.tabActive : {})
                    }}
                  >
                    E(X) Visualization
                  </button>
                  <button
                    onClick={() => setActiveTab('calculation')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'calculation' ? styles.tabActive : {})
                    }}
                  >
                    How E(X) is Calculated
                  </button>
                  {calculations.n <= 20 && (
                    <button
                      onClick={() => setActiveTab('breakdown')}
                      style={{
                        ...styles.tab,
                        ...(activeTab === 'breakdown' ? styles.tabActive : {})
                      }}
                    >
                      Individual Contributions
                    </button>
                  )}
                </div>

                {activeTab === 'visualization' && (
                  <div style={styles.chart}>
                    {calculations.n <= 30 ? (
                      <VisualizationChart 
                        contributions={calculations.contributions}
                        expectedValue={calculations.expectedValue}
                      />
                    ) : (
                      <div style={styles.largeRangeChart}>
                        <p>Range contains {calculations.n} outcomes - too many to display individual bars</p>
                        <div style={styles.summaryStats}>
                          <div><strong>All values from {calculations.a} to {calculations.b} are equally likely</strong></div>
                          <div>Each outcome has probability: 1/{calculations.n}</div>
                          <div style={styles.expectedValueHighlight}>
                            The expected value is the midpoint: E(X) = {calculations.expectedValue.toFixed(4)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'calculation' && (
                  <div style={styles.calculationTab}>
                    <div style={styles.formulaBox}>
                      <div style={styles.formulaTitle}>Expected Value Formula</div>
                      <div style={styles.formulaMain}>E(X) = (a + b) / 2</div>
                      <div style={styles.formulaDescription}>
                        For uniform distributions, the expected value is simply the midpoint between the minimum and maximum values.
                      </div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Step-by-Step Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          <strong>Identify parameters:</strong> a = {calculations.a}, b = {calculations.b}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          <strong>Apply formula:</strong> E(X) = ({calculations.a} + {calculations.b}) / 2
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>Calculate:</strong> E(X) = {calculations.a + calculations.b} / 2 = {calculations.expectedValue.toFixed(4)}
                        </span>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why this works:</strong> Since all {calculations.n} outcomes are equally likely (probability = 1/{calculations.n}), 
                      the expected value equals the arithmetic mean of all possible values, which is the midpoint.
                    </div>
                  </div>
                )}

                {activeTab === 'breakdown' && calculations.n <= 20 && (
                  <div style={styles.chart}>
                    <ContributionsChart contributions={calculations.contributions} />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={styles.resultsPlaceholder}>
              <div style={styles.placeholderIcon}>E(X)</div>
              <p style={styles.placeholderText}>
                Enter valid parameters where b ≥ a to calculate expected value
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Discrete Uniform Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average outcome you would get if you repeated this random 
              experiment many times. For a discrete uniform distribution with equally likely outcomes, E(X) is 
              simply the midpoint between the minimum and maximum values.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Over many trials, outcomes average to {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}</li>
              <li style={styles.li}>This is the &apos;center&apos; of the distribution</li>
              <li style={styles.li}>All values are equally likely, so E(X) is the midpoint</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Fair die (1-6):</strong> E(X) = 3.5 average per roll</li>
              <li style={styles.li}><strong style={styles.liStrong}>Random selection (1-100):</strong> E(X) = 50.5 on average</li>
              <li style={styles.li}><strong style={styles.liStrong}>Lottery numbers (10-20):</strong> E(X) = 15 expected value</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = (a + b) / 2</h4>
            <p style={styles.p}>
              Because every outcome has equal probability (1/n), the expected value calculation simplifies to 
              the arithmetic mean of all values. The sum of integers from a to b equals n(a+b)/2, and dividing 
              by n gives us (a+b)/2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Visualization Chart Component
const VisualizationChart = ({ contributions, expectedValue }) => {
  const sortedContributions = [...contributions].sort((a, b) => a.value - b.value);
  const maxProb = Math.max(...sortedContributions.map(c => c.probability));
  const minValue = Math.min(...sortedContributions.map(c => c.value));
  const maxValue = Math.max(...sortedContributions.map(c => c.value));
  const valueRange = maxValue - minValue;
  
  return (
    <div style={styles.distributionChart}>
      <div style={styles.chartTitle}>Probability Distribution with E(X) = {expectedValue.toFixed(2)}</div>
      <div style={styles.chartArea}>
        <div style={styles.yAxisLabel}>Probability</div>
        
        <div style={styles.chartContent}>
          {valueRange > 0 && (
            <div 
              style={{
                ...styles.dashedLine,
                left: `${((expectedValue - minValue) / valueRange) * 100}%`
              }}
            >
              <div style={styles.sideLabel}>
                E(X) = {expectedValue.toFixed(2)}
              </div>
            </div>
          )}
          
          <div style={styles.barsContainer}>
            {sortedContributions.map((contrib, index) => {
              const barHeight = maxProb > 0 ? (contrib.probability / maxProb) * 100 : 0;
              
              return (
                <div key={index} style={styles.barWrapper}>
                  <div style={styles.barColumn}>
                    <div 
                      style={{
                        ...styles.distributionBar,
                        height: `${barHeight}%`
                      }}
                    >
                      <span style={styles.distributionBarLabel}>
                        {contrib.probability.toFixed(3)}
                      </span>
                    </div>
                  </div>
                  <div style={styles.xAxisLabel}>{contrib.value}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={styles.xAxisTitle}>Outcome Value</div>
      </div>
    </div>
  );
};

// Contributions Chart Component
const ContributionsChart = ({ contributions }) => {
  const maxAbsContribution = Math.max(...contributions.map(c => Math.abs(c.contribution)));
  
  return (
    <div>
      <div style={styles.contributionsChartTitle}>How Each Outcome Contributes to E(X)</div>
      {contributions.map((contrib, index) => {
        const barWidth = maxAbsContribution > 0 ? (Math.abs(contrib.contribution) / maxAbsContribution) * 100 : 0;
        
        return (
          <div key={index} style={styles.barRow}>
            <div style={styles.barLabel}>
              Value {contrib.value}
            </div>
            <div style={styles.barContainer}>
              <div 
                style={{
                  ...styles.bar,
                  ...styles.barPositive,
                  width: `${barWidth}%`
                }}
              >
                <span style={styles.barValue}>+{contrib.contribution.toFixed(4)}</span>
              </div>
            </div>
          </div>
        );
      })}
      <div style={styles.contributionsSummary}>
        Sum of all contributions = E(X)
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0px',
  },
  h2: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#1a1a1a',
  },
  h3: {
    fontSize: '1.3rem',
    marginBottom: '15px',
    color: '#2c3e50',
  },
  h4: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#495057',
  },
  intro: {
    background: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    borderLeft: '4px solid #007bff',
  },
  introText: {
    margin: 0,
    lineHeight: 1.6,
    color: '#333',
  },
  keyInsight: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
    border: '2px solid #ffc107',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 8px rgba(255,193,7,0.2)',
  },
  keyInsightIcon: {
    fontSize: '2rem',
    lineHeight: 1,
  },
  keyInsightContent: {
    flex: 1,
    fontSize: '1.05rem',
    lineHeight: 1.6,
    color: '#856404',
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '450px 1fr',
    gap: '30px',
    marginBottom: '40px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputSection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  inputHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  resetBtn: {
    padding: '8px 16px',
    background: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    fontWeight: 500,
  },
  parameterGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  parameterItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  parameterLabel: {
    fontSize: '1rem',
    color: '#2c3e50',
  },
  slider: {
    width: '100%',
    height: '6px',
    borderRadius: '3px',
    outline: 'none',
    WebkitAppearance: 'none',
    background: '#ddd',
  },
  parameterInput: {
    padding: '12px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '1.1rem',
    width: '100%',
  },
  inputInvalid: {
    borderColor: '#dc3545',
    background: '#fff5f5',
  },
  errorMessage: {
    marginTop: '15px',
    padding: '12px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    color: '#856404',
    fontSize: '0.9rem',
  },
  infoBox: {
    marginTop: '20px',
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '4px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    fontSize: '0.95rem',
    borderBottom: '1px solid #e9ecef',
  },
  comparisonSection: {
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    overflow: 'hidden',
  },
  comparisonToggle: {
    width: '100%',
    padding: '12px 20px',
    background: '#f8f9fa',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#495057',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  comparisonContent: {
    padding: '20px',
    background: 'white',
  },
  comparisonInputs: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '15px',
  },
  comparisonInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  comparisonLabel: {
    fontSize: '0.9rem',
    color: '#495057',
    fontWeight: 500,
  },
  comparisonInputField: {
    padding: '8px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.95rem',
  },
  comparisonResults: {
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '4px',
  },
  comparisonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.95rem',
  },
  comparisonCurrent: {
    color: '#495057',
  },
  comparisonCurrentValue: {
    fontWeight: 600,
    color: '#007bff',
  },
  comparisonAlt: {
    color: '#495057',
  },
  comparisonAltValue: {
    fontWeight: 600,
    color: '#6c757d',
  },
  comparisonDiff: {
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: '2px solid #007bff',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 600,
  },
  comparisonHigher: {
    color: '#28a745',
  },
  comparisonLower: {
    color: '#dc3545',
  },
  contributionsSection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  contributionsTable: {
    width: '100%',
  },
  contributionsHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '10px',
    background: '#f1f3f5',
    borderRadius: '4px',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#495057',
    fontSize: '0.9rem',
  },
  contributionsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '8px 10px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  contributionValue: {
    fontWeight: 600,
    color: '#007bff',
  },
  contributionProbability: {
    textAlign: 'center',
    fontFamily: "'Courier New', monospace",
  },
  contributionAmount: {
    textAlign: 'right',
    fontFamily: "'Courier New', monospace",
    fontWeight: 600,
    color: '#28a745',
  },
  contributionsTotal: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '12px 10px',
    borderTop: '3px solid #007bff',
    marginTop: '8px',
    fontSize: '1rem',
    background: '#e7f3ff',
    fontWeight: 600,
    color: '#007bff',
  },
  heroExpectedValue: {
    background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
    color: 'white',
    padding: '40px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
  },
  heroLabel: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '10px',
    fontWeight: 500,
  },
  heroValue: {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: '15px',
    letterSpacing: '-1px',
  },
  heroFormula: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginBottom: '20px',
    fontFamily: "'Courier New', monospace",
  },
  heroInterpretation: {
    fontSize: '1rem',
    opacity: 0.95,
    padding: '15px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '6px',
    lineHeight: 1.6,
  },
  examplesSection: {
    background: '#e7f3ff',
    border: '2px solid #007bff',
    borderRadius: '8px',
    padding: '20px',
  },
  examplesHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  examplesIcon: {
    fontSize: '1.5rem',
  },
  examplesTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#007bff',
  },
  examplesList: {
    margin: 0,
    paddingLeft: '25px',
  },
  exampleItem: {
    marginBottom: '10px',
    lineHeight: 1.6,
    color: '#495057',
    fontSize: '0.95rem',
  },
  additionalStats: {
    background: '#f8f9fa',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  additionalStatsToggle: {
    width: '100%',
    padding: '12px 20px',
    background: '#f8f9fa',
    border: 'none',
    borderBottom: '1px solid #dee2e6',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#495057',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  additionalStatsContent: {
    padding: '15px 20px',
    background: 'white',
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  visualization: {
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    overflow: 'hidden',
  },
  tabContainer: {
    display: 'flex',
    borderBottom: '2px solid #dee2e6',
  },
  tab: {
    flex: 1,
    padding: '12px 20px',
    background: '#f8f9fa',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#495057',
    transition: 'all 0.2s',
  },
  tabActive: {
    background: 'white',
    color: '#007bff',
    borderBottom: '2px solid #007bff',
    marginBottom: '-2px',
  },
  chart: {
    padding: '20px',
    background: 'white',
  },
  chartTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '15px',
    textAlign: 'center',
  },
  largeRangeChart: {
    padding: '40px',
    textAlign: 'center',
  },
  summaryStats: {
    marginTop: '20px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '4px',
    lineHeight: 2,
  },
  expectedValueHighlight: {
    marginTop: '15px',
    padding: '15px',
    background: '#007bff',
    color: 'white',
    borderRadius: '4px',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  calculationTab: {
    padding: '20px',
    background: 'white',
  },
  formulaBox: {
    padding: '20px',
    background: '#e7f3ff',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '2px solid #007bff',
  },
  formulaTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#007bff',
    marginBottom: '10px',
  },
  formulaMain: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#007bff',
    marginBottom: '10px',
    fontFamily: "'Courier New', monospace",
  },
  formulaDescription: {
    fontSize: '0.95rem',
    color: '#495057',
    lineHeight: 1.6,
  },
  steps: {
    background: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  stepTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#2c3e50',
  },
  step: {
    display: 'flex',
    gap: '15px',
    padding: '12px 0',
    borderBottom: '1px solid #e9ecef',
  },
  stepNumber: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#007bff',
    minWidth: '30px',
  },
  stepContent: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#333',
  },
  insightBox: {
    padding: '15px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#856404',
  },
  contributionsChartTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '15px',
  },
  contributionsSummary: {
    marginTop: '15px',
    padding: '12px',
    background: '#e7f3ff',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 600,
    color: '#007bff',
  },
  resultsPlaceholder: {
    padding: '60px 30px',
    background: '#f8f9fa',
    borderRadius: '8px',
    border: '2px dashed #dee2e6',
    textAlign: 'center',
  },
  placeholderIcon: {
    fontSize: '4rem',
    color: '#dee2e6',
    fontWeight: 700,
    marginBottom: '20px',
  },
  placeholderText: {
    color: '#6c757d',
    margin: 0,
    fontSize: '1.1rem',
  },
  explanation: {
    background: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '30px',
  },
  explainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
  },
  explainSection: {
  },
  p: {
    lineHeight: 1.6,
    color: '#333',
    marginBottom: '10px',
    fontSize: '0.95rem',
  },
  ul: {
    margin: '10px 0',
    paddingLeft: '20px',
  },
  li: {
    marginBottom: '6px',
    lineHeight: 1.6,
    color: '#333',
    fontSize: '0.95rem',
  },
  liStrong: {
    color: '#007bff',
  },
  distributionChart: {
    width: '100%',
  },
  chartArea: {
    position: 'relative',
  },
  yAxisLabel: {
    position: 'absolute',
    left: '-30px',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  chartContent: {
    position: 'relative',
    marginLeft: '10px',
  },
  dashedLine: {
    position: 'absolute',
    top: 0,
    bottom: '40px',
    width: '4px',
    background: '#dc3545',
    zIndex: 10,
    boxShadow: '0 0 8px rgba(220,53,69,0.5)',
  },
  sideLabel: {
    position: 'absolute',
    top: '50%',
    right: '-130px',
    transform: 'translateY(-50%)',
    background: '#dc3545',
    color: 'white',
    padding: '8px 14px',
    borderRadius: '6px',
    fontWeight: 700,
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(220,53,69,0.3)',
  },
  barsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '250px',
    gap: '10px',
    overflowX: 'auto',
  },
  barWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '40px',
    maxWidth: '80px',
  },
  barColumn: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
  },
  distributionBar: {
    width: '80%',
    background: 'linear-gradient(180deg, #007bff, #204bc2)',
    borderRadius: '4px 4px 0 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '8px',
    minHeight: '30px',
  },
  distributionBarLabel: {
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  xAxisLabel: {
    marginTop: '8px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  xAxisTitle: {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  barRow: {
    marginBottom: '12px',
  },
  barLabel: {
    fontWeight: 600,
    marginBottom: '4px',
    color: '#495057',
    fontSize: '0.9rem',
  },
  barContainer: {
    position: 'relative',
    height: '35px',
    background: '#f1f3f5',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '10px',
    transition: 'width 0.3s ease',
    minWidth: '60px',
  },
  barPositive: {
    background: 'linear-gradient(90deg, #007bff, #204bc2)',
  },
  barValue: {
    color: 'white',
    fontWeight: 600,
    fontSize: '0.85rem',
  },
};

export default DiscreteUniformExpectedValueCalculator;