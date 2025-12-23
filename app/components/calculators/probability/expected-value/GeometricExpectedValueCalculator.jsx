// import { useState, useMemo } from 'react';

// const GeometricExpectedValueCalculator = () => {
//   const [p, setP] = useState(0.2);
//   const [activeTab, setActiveTab] = useState('distribution');
//   const [maxDisplay, setMaxDisplay] = useState(20);

//   const handleReset = () => {
//     setP(0.2);
//     setActiveTab('distribution');
//     setMaxDisplay(20);
//   };

//   const updateP = (value) => {
//     if (value === '' || value === '.') {
//       setP(value);
//     } else {
//       const num = parseFloat(value);
//       if (!isNaN(num)) {
//         setP(Math.max(0.0001, Math.min(1, num))); // Avoid p=0
//       }
//     }
//   };

//   // Geometric PMF: P(X = k) = (1-p)^(k-1) * p
//   const geometricPMF = (k, p) => {
//     return Math.pow(1 - p, k - 1) * p;
//   };

//   const calculations = useMemo(() => {
//     const pVal = typeof p === 'string' ? parseFloat(p) : p;

//     if (isNaN(pVal) || pVal <= 0 || pVal > 1) {
//       return {
//         isValid: false,
//         p: pVal,
//         outcomes: [],
//         expectedValue: 0,
//         variance: 0,
//         standardDeviation: 0,
//         contributions: []
//       };
//     }

//     // Generate outcomes up to maxDisplay or until cumulative prob > 0.999
//     const outcomes = [];
//     let cumulativeProb = 0;
//     let k = 1;
    
//     while (k <= maxDisplay && cumulativeProb < 0.999) {
//       const probability = geometricPMF(k, pVal);
//       outcomes.push({
//         value: k,
//         probability: probability,
//         contribution: k * probability
//       });
//       cumulativeProb += probability;
//       k++;
//     }

//     // Calculate expected value: E(X) = 1/p
//     const expectedValue = 1 / pVal;

//     // Calculate variance: Var(X) = (1-p) / p^2
//     const variance = (1 - pVal) / Math.pow(pVal, 2);
//     const standardDeviation = Math.sqrt(variance);

//     return {
//       isValid: true,
//       p: pVal,
//       q: 1 - pVal,
//       outcomes,
//       expectedValue,
//       variance,
//       standardDeviation,
//       cumulativeProb,
//       contributions: outcomes.map(o => ({
//         value: o.value,
//         probability: o.probability,
//         contribution: o.contribution
//       }))
//     };
//   }, [p, maxDisplay]);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.h2}>Expected Value Calculator - Geometric Distribution</h2>
      
//       <div style={styles.intro}>
//         <p style={styles.introText}>
//           The <strong>geometric distribution</strong> models the number of trials needed to get the first success 
//           in a sequence of independent Bernoulli trials. Common examples include the number of coin flips until 
//           the first heads, the number of sales calls until the first sale, or the number of attempts until passing a test.
//         </p>
//       </div>

//       <div style={styles.mainLayout}>
//         {/* LEFT COLUMN - INPUT */}
//         <div style={styles.leftColumn}>
//           <div style={styles.inputSection}>
//             <div style={styles.inputHeader}>
//               <h3 style={styles.h3}>Distribution Parameter</h3>
//               <button onClick={handleReset} style={styles.resetBtn}>
//                 Reset
//               </button>
//             </div>
            
//             <div style={styles.parameterGrid}>
//               <div style={styles.parameterItem}>
//                 <label style={styles.parameterLabel}>
//                   <strong>p</strong> (Success Probability)
//                 </label>
//                 <input
//                   type="number"
//                   value={p}
//                   onChange={(e) => updateP(e.target.value)}
//                   style={{
//                     ...styles.parameterInput,
//                     ...(p !== '' && p !== '.' && (isNaN(parseFloat(p)) || parseFloat(p) <= 0 || parseFloat(p) > 1) ? styles.inputInvalid : {})
//                   }}
//                   min="0.0001"
//                   max="1"
//                   step="0.01"
//                 />
//                 <span style={styles.parameterDescription}>Probability of success on each trial (0 &lt; p ≤ 1)</span>
//               </div>
//             </div>

//             {calculations.isValid && (
//               <div style={styles.infoBox}>
//                 <div style={styles.infoRow}>
//                   <span><strong>Success probability (p):</strong></span>
//                   <span>{calculations.p}</span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span><strong>Failure probability (q):</strong></span>
//                   <span>{calculations.q.toFixed(4)}</span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span><strong>Support:</strong></span>
//                   <span>k = 1, 2, 3, ... (infinite)</span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span><strong>Formula:</strong></span>
//                   <span>E(X) = 1 / p</span>
//                 </div>
//               </div>
//             )}

//             {calculations.isValid && (
//               <div style={styles.displayControl}>
//                 <label style={styles.displayLabel}>
//                   <strong>Display outcomes:</strong>
//                 </label>
//                 <select 
//                   value={maxDisplay} 
//                   onChange={(e) => setMaxDisplay(parseInt(e.target.value))}
//                   style={styles.displaySelect}
//                 >
//                   <option value="10">First 10 outcomes</option>
//                   <option value="20">First 20 outcomes</option>
//                   <option value="30">First 30 outcomes</option>
//                   <option value="50">First 50 outcomes</option>
//                 </select>
//                 <span style={styles.displayNote}>
//                   Showing {calculations.outcomes.length} outcomes (cumulative prob: {(calculations.cumulativeProb * 100).toFixed(2)}%)
//                 </span>
//               </div>
//             )}
//           </div>

//           {calculations.isValid && calculations.outcomes.length <= 20 && (
//             <div style={styles.outcomesSection}>
//               <h3 style={styles.h3}>Probability Mass Function</h3>
//               <div style={styles.outcomesTable}>
//                 <div style={styles.outcomesHeader}>
//                   <span>Trial k</span>
//                   <span>P(X = k)</span>
//                   <span>Contribution</span>
//                 </div>
//                 {calculations.outcomes.map((outcome, index) => (
//                   <div key={index} style={styles.outcomesRow}>
//                     <span style={styles.outcomeValue}>{outcome.value}</span>
//                     <span style={styles.outcomeProbability}>{outcome.probability.toFixed(6)}</span>
//                     <span style={styles.outcomeContribution}>{outcome.contribution.toFixed(6)}</span>
//                   </div>
//                 ))}
//               </div>
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
//                     1 / {calculations.p} = {calculations.expectedValue.toFixed(2)}
//                   </div>
//                 </div>

//                 <div style={styles.resultCard}>
//                   <div style={styles.resultLabel}>Variance Var(X)</div>
//                   <div style={styles.resultValue}>
//                     {calculations.variance.toFixed(4)}
//                   </div>
//                   <div style={styles.resultFormula}>
//                     (1-p) / p² = {calculations.variance.toFixed(2)}
//                   </div>
//                 </div>

//                 <div style={styles.resultCard}>
//                   <div style={styles.resultLabel}>Standard Deviation σ</div>
//                   <div style={styles.resultValue}>
//                     {calculations.standardDeviation.toFixed(4)}
//                   </div>
//                   <div style={styles.resultFormula}>
//                     √{calculations.variance.toFixed(2)} = {calculations.standardDeviation.toFixed(2)}
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
//                   {calculations.outcomes.length <= 20 && (
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
//                     <ProbabilityDistributionChart 
//                       contributions={calculations.contributions}
//                       expectedValue={calculations.expectedValue}
//                     />
//                   </div>
//                 )}

//                 {activeTab === 'breakdown' && (
//                   <div style={styles.breakdownTab}>
//                     <div style={styles.formula}>
//                       <strong>Formula:</strong> E(X) = 1 / p
//                     </div>
                    
//                     <div style={styles.steps}>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Success probability (p):</span>
//                         <span style={styles.stepCalc}>{calculations.p}</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Failure probability (q):</span>
//                         <span style={styles.stepCalc}>1 - p = {calculations.q.toFixed(6)}</span>
//                       </div>
                      
//                       <div style={styles.stepTotal}>
//                         <span style={styles.stepTotalLabel}>Expected Value:</span>
//                         <span style={styles.stepTotalCalc}>
//                           1 / {calculations.p} = {calculations.expectedValue.toFixed(4)}
//                         </span>
//                       </div>

//                       <div style={styles.stepDivider}></div>

//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Variance formula:</span>
//                         <span style={styles.stepCalc}>Var(X) = (1 - p) / p²</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Variance calculation:</span>
//                         <span style={styles.stepCalc}>
//                           {calculations.q.toFixed(4)} / {Math.pow(calculations.p, 2).toFixed(4)} = {calculations.variance.toFixed(4)}
//                         </span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Standard deviation:</span>
//                         <span style={styles.stepCalc}>
//                           √{calculations.variance.toFixed(4)} = {calculations.standardDeviation.toFixed(4)}
//                         </span>
//                       </div>
//                     </div>

//                     <div style={styles.note}>
//                       <strong>Interpretation:</strong> On average, you will need {calculations.expectedValue.toFixed(2)} trials 
//                       to get the first success, with typical variation of ±{calculations.standardDeviation.toFixed(2)} trials. 
//                       The distribution is right-skewed, meaning there's always a chance of needing many more trials than expected.
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'contributions' && calculations.outcomes.length <= 20 && (
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
//                 Enter valid parameter: 0 &lt; p ≤ 1
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       <div style={styles.explanation}>
//         <h3 style={styles.h3}>Understanding Geometric Distribution</h3>
        
//         <div style={styles.explainGrid}>
//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>What is Geometric Distribution?</h4>
//             <p style={styles.p}>
//               The geometric distribution models the number of independent trials needed to achieve the first success. 
//               Each trial is independent with the same probability of success (p). The distribution is memoryless - 
//               past failures don't affect future trials.
//             </p>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Key Properties</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Expected value:</strong> E(X) = 1 / p</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Variance:</strong> Var(X) = (1 - p) / p²</li>
//               <li style={styles.li}><strong style={styles.liStrong}>PMF:</strong> P(X = k) = (1-p)^(k-1) × p</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Memoryless:</strong> Past trials don't affect future probability</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Common Examples</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Coin flips:</strong> Flips until first heads</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Sales:</strong> Calls until first sale</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Testing:</strong> Attempts until passing an exam</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Manufacturing:</strong> Items inspected until first defect</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>When to Use Geometric Distribution</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>First success:</strong> Counting trials until first success</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Binary outcomes:</strong> Each trial is success or failure</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Independent trials:</strong> Each trial doesn't affect others</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Constant probability:</strong> p stays the same for all trials</li>
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
//           {valueRange > 0 && expectedValue <= maxValue && (
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
//                       {contrib.probability > 0.01 && (
//                         <span style={styles.distributionBarLabel}>
//                           {contrib.probability.toFixed(3)}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <div style={styles.xAxisLabel}>{contrib.value}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
        
//         <div style={styles.xAxisTitle}>Number of Trials</div>
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
//               Trial {contrib.value}
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
//   displayControl: {
//     marginTop: '20px',
//     padding: '15px',
//     background: '#f8f9fa',
//     borderRadius: '4px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   displayLabel: {
//     fontSize: '0.95rem',
//     color: '#495057',
//   },
//   displaySelect: {
//     padding: '8px',
//     border: '1px solid #ced4da',
//     borderRadius: '4px',
//     fontSize: '0.95rem',
//   },
//   displayNote: {
//     fontSize: '0.85rem',
//     color: '#6c757d',
//     fontStyle: 'italic',
//   },
//   outcomesSection: {
//     padding: '20px',
//     background: '#fff',
//     borderRadius: '8px',
//     border: '1px solid #dee2e6',
//     maxHeight: '400px',
//     overflowY: 'auto',
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
//     position: 'sticky',
//     top: 0,
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
//   stepDivider: {
//     height: '1px',
//     background: '#007bff',
//     margin: '10px 0',
//   },
//   note: {
//     padding: '12px',
//     background: '#e7f3ff',
//     borderRadius: '4px',
//     fontSize: '0.9rem',
//     lineHeight: 1.6,
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
//     justifyContent: 'flex-start',
//     alignItems: 'flex-end',
//     height: '250px',
//     gap: '5px',
//     overflowX: 'auto',
//   },
//   barWrapper: {
//     flex: '0 0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '35px',
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
//     width: '100%',
//     background: 'linear-gradient(180deg, #007bff, #204bc2)',
//     borderRadius: '4px 4px 0 0',
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     paddingTop: '8px',
//     minHeight: '5px',
//   },
//   distributionBarLabel: {
//     color: 'white',
//     fontSize: '0.7rem',
//     fontWeight: 600,
//   },
//   xAxisLabel: {
//     marginTop: '8px',
//     fontSize: '0.8rem',
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

// export default GeometricExpectedValueCalculator;


import { useState, useMemo } from 'react';

const GeometricExpectedValueCalculator = () => {
  const [p, setP] = useState(0.2);
  const [activeTab, setActiveTab] = useState('visualization');
  const [maxDisplay, setMaxDisplay] = useState(20);
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonP, setComparisonP] = useState(0.5);

  const handleReset = () => {
    setP(0.2);
    setActiveTab('visualization');
    setMaxDisplay(20);
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const updateP = (value) => {
    if (value === '' || value === '.') {
      setP(value);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setP(Math.max(0.0001, Math.min(1, num))); // Avoid p=0
      }
    }
  };

  // Geometric PMF: P(X = k) = (1-p)^(k-1) * p
  const geometricPMF = (k, p) => {
    return Math.pow(1 - p, k - 1) * p;
  };

  const calculations = useMemo(() => {
    const pVal = typeof p === 'string' ? parseFloat(p) : p;

    if (isNaN(pVal) || pVal <= 0 || pVal > 1) {
      return {
        isValid: false,
        p: pVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Generate outcomes up to maxDisplay or until cumulative prob > 0.999
    const outcomes = [];
    let cumulativeProb = 0;
    let k = 1;
    
    while (k <= maxDisplay && cumulativeProb < 0.999) {
      const probability = geometricPMF(k, pVal);
      outcomes.push({
        value: k,
        probability: probability,
        contribution: k * probability
      });
      cumulativeProb += probability;
      k++;
    }

    // Calculate expected value: E(X) = 1/p
    const expectedValue = 1 / pVal;

    // Calculate variance: Var(X) = (1-p) / p^2
    const variance = (1 - pVal) / Math.pow(pVal, 2);
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      p: pVal,
      q: 1 - pVal,
      outcomes,
      expectedValue,
      variance,
      standardDeviation,
      cumulativeProb,
      contributions: outcomes.map(o => ({
        value: o.value,
        probability: o.probability,
        contribution: o.contribution
      }))
    };
  }, [p, maxDisplay]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonP) || comparisonP <= 0 || comparisonP > 1) {
      return { isValid: false, expectedValue: 0 };
    }
    return {
      isValid: true,
      expectedValue: 1 / comparisonP
    };
  }, [comparisonP]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const p = calculations.p;

    // Generate contextual examples based on p value
    if (p === 0.5) {
      return {
        scenario: "Fair coin (50% success rate)",
        examples: [
          `Flipping until first heads? Expect ${ev.toFixed(1)} flips on average`,
          `Repeat this 100 times? Expect total ≈ ${(ev * 100).toFixed(0)} flips`,
          `About ${(p * 100).toFixed(0)}% chance of success on first try`
        ]
      };
    } else if (p <= 0.1) {
      return {
        scenario: "Rare success (difficult task)",
        examples: [
          `With ${(p * 100).toFixed(1)}% success rate? Expect ${ev.toFixed(1)} attempts until first success`,
          `100 such scenarios? Expect total ≈ ${(ev * 100).toFixed(0)} attempts`,
          `Typical range: ${Math.max(1, ev - calculations.standardDeviation).toFixed(0)} to ${(ev + calculations.standardDeviation).toFixed(0)} attempts`
        ]
      };
    } else if (p >= 0.8) {
      return {
        scenario: "High success rate (easy task)",
        examples: [
          `With ${(p * 100).toFixed(0)}% success rate? Expect ${ev.toFixed(2)} attempts`,
          `Very likely to succeed within first ${Math.ceil(ev + calculations.standardDeviation)} attempts`,
          `${(p * 100).toFixed(0)}% chance of succeeding on first try`
        ]
      };
    } else {
      return {
        scenario: "Moderate success rate",
        examples: [
          `${(p * 100).toFixed(0)}% success rate? Expect ${ev.toFixed(1)} attempts until first success`,
          `100 experiments? Expect total ≈ ${(ev * 100).toFixed(0)} attempts`,
          `Typical range: ${Math.max(1, ev - calculations.standardDeviation).toFixed(0)} to ${(ev + calculations.standardDeviation).toFixed(0)} attempts`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Geometric Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average number of trials until first success) for a geometric distribution. 
          Perfect for modeling attempts until success: coin flips, sales calls, quality tests, or any "try until you succeed" scenario.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} means on average you need {calculations.expectedValue.toFixed(2)} trials 
            to get your first success. This is how many attempts you should expect before succeeding.
          </div>
        </div>
      )}

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Parameter</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.parameterGrid}>
              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>p</strong> (Success Probability)
                </label>
                <input
                  type="range"
                  min="0.01"
                  max="1"
                  step="0.01"
                  value={typeof p === 'string' ? 0.2 : p}
                  onChange={(e) => setP(parseFloat(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={p}
                  onChange={(e) => updateP(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(p !== '' && p !== '.' && (isNaN(parseFloat(p)) || parseFloat(p) <= 0 || parseFloat(p) > 1) ? styles.inputInvalid : {})
                  }}
                  min="0.0001"
                  max="1"
                  step="0.01"
                />
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = 1 / p</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Success rate:</span>
                  <span><strong>{(calculations.p * 100).toFixed(1)}%</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Failure rate:</span>
                  <span>{(calculations.q * 100).toFixed(1)}%</span>
                </div>
              </div>
            )}

            {calculations.isValid && (
              <div style={styles.displayControl}>
                <label style={styles.displayLabel}>
                  <strong>Display outcomes:</strong>
                </label>
                <select 
                  value={maxDisplay} 
                  onChange={(e) => setMaxDisplay(parseInt(e.target.value))}
                  style={styles.displaySelect}
                >
                  <option value="10">First 10 outcomes</option>
                  <option value="20">First 20 outcomes</option>
                  <option value="30">First 30 outcomes</option>
                  <option value="50">First 50 outcomes</option>
                </select>
                <span style={styles.displayNote}>
                  Showing {calculations.outcomes.length} outcomes (≈{(calculations.cumulativeProb * 100).toFixed(1)}% of distribution)
                </span>
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
                {showComparison ? '▼' : '▶'} Compare with Different Success Rate
              </button>
              {showComparison && (
                <div style={styles.comparisonContent}>
                  <div style={styles.comparisonInputs}>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative p:</label>
                      <input
                        type="number"
                        value={comparisonP}
                        onChange={(e) => setComparisonP(parseFloat(e.target.value) || 0.01)}
                        style={styles.comparisonInputField}
                        min="0.01"
                        max="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          <strong>Current:</strong> p={calculations.p} ({(calculations.p * 100).toFixed(0)}% success rate)
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)} trials
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          <strong>Alternative:</strong> p={comparisonP} ({(comparisonP * 100).toFixed(0)}% success rate)
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)} trials
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% more trials needed (lower success rate)
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% fewer trials needed (higher success rate)
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

          {calculations.isValid && calculations.outcomes.length <= 20 && (
            <div style={styles.contributionsSection}>
              <h3 style={styles.h3}>Contribution to E(X)</h3>
              <div style={styles.contributionsTable}>
                <div style={styles.contributionsHeader}>
                  <span>Trial k</span>
                  <span>Probability</span>
                  <span>Contribution</span>
                </div>
                {calculations.outcomes.map((outcome, index) => (
                  <div key={index} style={styles.contributionsRow}>
                    <span style={styles.contributionValue}>{outcome.value}</span>
                    <span style={styles.contributionProbability}>{outcome.probability.toFixed(6)}</span>
                    <span style={styles.contributionAmount}>{outcome.contribution.toFixed(6)}</span>
                  </div>
                ))}
                <div style={styles.contributionsTotal}>
                  <span><strong>E(X) ≈</strong></span>
                  <span></span>
                  <span><strong>{calculations.contributions.reduce((sum, c) => sum + c.contribution, 0).toFixed(4)}</strong></span>
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
                <div style={styles.heroLabel}>Expected Value (Trials Until First Success)</div>
                <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(4)}</div>
                <div style={styles.heroFormula}>
                  Formula: 1 / p = 1 / {calculations.p} = {calculations.expectedValue.toFixed(2)}
                </div>
                <div style={styles.heroInterpretation}>
                  <strong>Interpretation:</strong> On average, you need {calculations.expectedValue.toFixed(2)} attempts to get your first success
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
                      <span>Median:</span>
                      <span>{Math.ceil(Math.log(0.5) / Math.log(1 - calculations.p))} trials</span>
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
                  {calculations.outcomes.length <= 20 && (
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
                    <VisualizationChart 
                      contributions={calculations.contributions}
                      expectedValue={calculations.expectedValue}
                    />
                  </div>
                )}

                {activeTab === 'calculation' && (
                  <div style={styles.calculationTab}>
                    <div style={styles.formulaBox}>
                      <div style={styles.formulaTitle}>Expected Value Formula</div>
                      <div style={styles.formulaMain}>E(X) = 1 / p</div>
                      <div style={styles.formulaDescription}>
                        For geometric distributions, the expected number of trials until the first success 
                        is simply the reciprocal of the success probability.
                      </div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Step-by-Step Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          <strong>Identify parameter:</strong> p = {calculations.p} ({(calculations.p * 100).toFixed(1)}% success rate)
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          <strong>Apply formula:</strong> E(X) = 1 / {calculations.p}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>Calculate:</strong> E(X) = {calculations.expectedValue.toFixed(4)} trials
                        </span>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why this works:</strong> If each trial has probability p of success, then on average you need 
                      to try 1/p times before succeeding. For example, with p=0.2 (20% success), you expect 1/0.2 = 5 trials. 
                      This is the memoryless property - each trial is independent.
                    </div>
                  </div>
                )}

                {activeTab === 'breakdown' && calculations.outcomes.length <= 20 && (
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
                Enter valid parameter: 0 &lt; p ≤ 1
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Geometric Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average number of trials you need until you get your first success. 
              It's how many attempts you should expect before achieving success when each trial is independent.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Expect {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'} trials until first success on average</li>
              <li style={styles.li}>Half the time you'll succeed within {calculations.isValid ? Math.ceil(Math.log(0.5) / Math.log(1 - calculations.p)) : '___'} trials (median)</li>
              <li style={styles.li}>Each trial has the same probability - past failures don't affect future chances</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Coin flips (p=0.5):</strong> E(X) = 2 flips until heads</li>
              <li style={styles.li}><strong style={styles.liStrong}>Sales calls (p=0.1):</strong> E(X) = 10 calls until first sale</li>
              <li style={styles.li}><strong style={styles.liStrong}>Quality test (p=0.02):</strong> E(X) = 50 items until first defect</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = 1 / p</h4>
            <p style={styles.p}>
              The geometric distribution is memoryless - each trial is independent with success probability p. 
              The expected waiting time is simply the reciprocal: if you have a 20% chance each trial (p=0.2), 
              you expect to wait 1/0.2 = 5 trials on average.
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
          {valueRange > 0 && expectedValue <= maxValue && (
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
                      {contrib.probability > 0.01 && (
                        <span style={styles.distributionBarLabel}>
                          {contrib.probability.toFixed(3)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={styles.xAxisLabel}>{contrib.value}</div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={styles.xAxisTitle}>Number of Trials</div>
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
              Trial {contrib.value}
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
        Sum of all contributions ≈ E(X)
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
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
  displayControl: {
    marginTop: '20px',
    padding: '15px',
    background: '#f8f9fa',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  displayLabel: {
    fontSize: '0.95rem',
    color: '#495057',
  },
  displaySelect: {
    padding: '8px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    fontSize: '0.95rem',
  },
  displayNote: {
    fontSize: '0.85rem',
    color: '#6c757d',
    fontStyle: 'italic',
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
    gridTemplateColumns: '1fr',
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
    fontSize: '0.9rem',
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
    fontSize: '0.95rem',
    fontWeight: 600,
  },
  comparisonHigher: {
    color: '#dc3545',
  },
  comparisonLower: {
    color: '#28a745',
  },
  contributionsSection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    maxHeight: '400px',
    overflowY: 'auto',
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
    position: 'sticky',
    top: 0,
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
    fontSize: '1rem',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: '250px',
    gap: '5px',
    overflowX: 'auto',
  },
  barWrapper: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '35px',
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
    width: '100%',
    background: 'linear-gradient(180deg, #007bff, #204bc2)',
    borderRadius: '4px 4px 0 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '8px',
    minHeight: '5px',
  },
  distributionBarLabel: {
    color: 'white',
    fontSize: '0.7rem',
    fontWeight: 600,
  },
  xAxisLabel: {
    marginTop: '8px',
    fontSize: '0.8rem',
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

export default GeometricExpectedValueCalculator;