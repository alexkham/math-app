// import { useState, useMemo } from 'react';

// const BinomialExpectedValueCalculator = () => {
//   const [n, setN] = useState(10);
//   const [p, setP] = useState(0.5);
//   const [activeTab, setActiveTab] = useState('distribution');

//   const handleReset = () => {
//     setN(10);
//     setP(0.5);
//     setActiveTab('distribution');
//   };

//   const updateN = (value) => {
//     if (value === '') {
//       setN('');
//     } else {
//       const num = parseInt(value);
//       if (!isNaN(num) && num > 0) {
//         setN(num);
//       }
//     }
//   };

//   const updateP = (value) => {
//     if (value === '' || value === '.') {
//       setP(value);
//     } else {
//       const num = parseFloat(value);
//       if (!isNaN(num)) {
//         setP(Math.max(0, Math.min(1, num)));
//       }
//     }
//   };

//   // Binomial coefficient: n! / (k! * (n-k)!)
//   const binomialCoefficient = (n, k) => {
//     if (k < 0 || k > n) return 0;
//     if (k === 0 || k === n) return 1;
    
//     let result = 1;
//     for (let i = 1; i <= k; i++) {
//       result *= (n - k + i) / i;
//     }
//     return result;
//   };

//   // Binomial PMF: P(X = k) = C(n,k) * p^k * (1-p)^(n-k)
//   const binomialPMF = (n, k, p) => {
//     return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
//   };

//   const calculations = useMemo(() => {
//     const nVal = typeof n === 'string' ? parseInt(n) : n;
//     const pVal = typeof p === 'string' ? parseFloat(p) : p;

//     if (isNaN(nVal) || isNaN(pVal) || nVal <= 0 || pVal < 0 || pVal > 1) {
//       return {
//         isValid: false,
//         n: nVal,
//         p: pVal,
//         outcomes: [],
//         expectedValue: 0,
//         variance: 0,
//         standardDeviation: 0,
//         contributions: []
//       };
//     }

//     // Generate outcomes (only show if n is reasonable for display)
//     const outcomes = [];
//     const maxDisplay = 50;
//     const shouldGenerateOutcomes = nVal <= maxDisplay;

//     if (shouldGenerateOutcomes) {
//       for (let k = 0; k <= nVal; k++) {
//         const probability = binomialPMF(nVal, k, pVal);
//         outcomes.push({
//           value: k,
//           probability: probability,
//           contribution: k * probability
//         });
//       }
//     }

//     // Calculate expected value: E(X) = n * p
//     const expectedValue = nVal * pVal;

//     // Calculate variance: Var(X) = n * p * (1 - p)
//     const variance = nVal * pVal * (1 - pVal);
//     const standardDeviation = Math.sqrt(variance);

//     return {
//       isValid: true,
//       n: nVal,
//       p: pVal,
//       q: 1 - pVal,
//       outcomes,
//       expectedValue,
//       variance,
//       standardDeviation,
//       shouldShowOutcomes: shouldGenerateOutcomes,
//       contributions: outcomes.map(o => ({
//         value: o.value,
//         probability: o.probability,
//         contribution: o.contribution
//       }))
//     };
//   }, [n, p]);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.h2}>Expected Value Calculator - Binomial Distribution</h2>
      
//       <div style={styles.intro}>
//         <p style={styles.introText}>
//           The <strong>binomial distribution</strong> models the number of successes in a fixed number of independent trials, 
//           where each trial has the same probability of success. Common examples include coin flips, quality control testing, 
//           or any scenario with repeated yes/no outcomes.
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
//                   <strong>n</strong> (Number of Trials)
//                 </label>
//                 <input
//                   type="number"
//                   value={n}
//                   onChange={(e) => updateN(e.target.value)}
//                   style={{
//                     ...styles.parameterInput,
//                     ...(n !== '' && (isNaN(parseInt(n)) || parseInt(n) <= 0) ? styles.inputInvalid : {})
//                   }}
//                   min="1"
//                   step="1"
//                 />
//                 <span style={styles.parameterDescription}>Number of independent trials (positive integer)</span>
//               </div>

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
//                     ...(p !== '' && p !== '.' && (isNaN(parseFloat(p)) || parseFloat(p) < 0 || parseFloat(p) > 1) ? styles.inputInvalid : {})
//                   }}
//                   min="0"
//                   max="1"
//                   step="0.01"
//                 />
//                 <span style={styles.parameterDescription}>Probability of success on each trial (0 to 1)</span>
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
//                   <span><strong>Possible outcomes:</strong></span>
//                   <span>0 to {calculations.n} successes</span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span><strong>Formula:</strong></span>
//                   <span>E(X) = n × p</span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {calculations.isValid && calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
//             <div style={styles.outcomesSection}>
//               <h3 style={styles.h3}>Probability Mass Function</h3>
//               <div style={styles.outcomesTable}>
//                 <div style={styles.outcomesHeader}>
//                   <span>k Successes</span>
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

//           {calculations.isValid && !calculations.shouldShowOutcomes && (
//             <div style={styles.largeRangeNote}>
//               <strong>Note:</strong> With n = {calculations.n}, there are {calculations.n + 1} possible outcomes (0 to {calculations.n} successes). 
//               Individual probabilities not displayed for n &gt; 50, but calculations remain accurate.
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
//                     {calculations.n} × {calculations.p} = {calculations.expectedValue.toFixed(2)}
//                   </div>
//                 </div>

//                 <div style={styles.resultCard}>
//                   <div style={styles.resultLabel}>Variance Var(X)</div>
//                   <div style={styles.resultValue}>
//                     {calculations.variance.toFixed(4)}
//                   </div>
//                   <div style={styles.resultFormula}>
//                     n × p × q = {calculations.variance.toFixed(2)}
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
//                   {calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
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
//                     {calculations.shouldShowOutcomes ? (
//                       <ProbabilityDistributionChart 
//                         contributions={calculations.contributions}
//                         expectedValue={calculations.expectedValue}
//                       />
//                     ) : (
//                       <div style={styles.largeRangeChart}>
//                         <p>Distribution has {calculations.n + 1} outcomes (too many to display individually)</p>
//                         <div style={styles.summaryStats}>
//                           <div><strong>Number of trials (n):</strong> {calculations.n}</div>
//                           <div><strong>Success probability (p):</strong> {calculations.p}</div>
//                           <div><strong>Possible outcomes:</strong> 0 to {calculations.n} successes</div>
//                           <div style={styles.expectedValueHighlight}>
//                             Expected Value E(X) = {calculations.expectedValue.toFixed(4)}
//                           </div>
//                           <div style={styles.varianceInfo}>
//                             Most likely outcomes are near E(X) ± σ<br/>
//                             Range: [{Math.max(0, Math.round(calculations.expectedValue - calculations.standardDeviation))}, {Math.min(calculations.n, Math.round(calculations.expectedValue + calculations.standardDeviation))}]
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {activeTab === 'breakdown' && (
//                   <div style={styles.breakdownTab}>
//                     <div style={styles.formula}>
//                       <strong>Formula:</strong> E(X) = n × p
//                     </div>
                    
//                     <div style={styles.steps}>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Number of trials (n):</span>
//                         <span style={styles.stepCalc}>{calculations.n}</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Success probability (p):</span>
//                         <span style={styles.stepCalc}>{calculations.p}</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Failure probability (q):</span>
//                         <span style={styles.stepCalc}>1 - p = {calculations.q.toFixed(4)}</span>
//                       </div>
                      
//                       <div style={styles.stepTotal}>
//                         <span style={styles.stepTotalLabel}>Expected Value:</span>
//                         <span style={styles.stepTotalCalc}>
//                           {calculations.n} × {calculations.p} = {calculations.expectedValue.toFixed(4)}
//                         </span>
//                       </div>

//                       <div style={styles.stepDivider}></div>

//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Variance formula:</span>
//                         <span style={styles.stepCalc}>Var(X) = n × p × (1 - p)</span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepLabel}>Variance calculation:</span>
//                         <span style={styles.stepCalc}>
//                           {calculations.n} × {calculations.p} × {calculations.q.toFixed(4)} = {calculations.variance.toFixed(4)}
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
//                       <strong>Interpretation:</strong> On average, you can expect {calculations.expectedValue.toFixed(2)} successes 
//                       out of {calculations.n} trials, with typical variation of ±{calculations.standardDeviation.toFixed(2)} successes.
//                     </div>
//                   </div>
//                 )}

//                 {activeTab === 'contributions' && calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
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
//                 Enter valid parameters: n &gt; 0 (integer) and 0 ≤ p ≤ 1
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       <div style={styles.explanation}>
//         <h3 style={styles.h3}>Understanding Binomial Distribution</h3>
        
//         <div style={styles.explainGrid}>
//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>What is Binomial Distribution?</h4>
//             <p style={styles.p}>
//               The binomial distribution models the number of successes in n independent trials, where each trial 
//               has exactly two outcomes (success/failure) and the probability of success (p) remains constant across all trials.
//             </p>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Key Properties</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Expected value:</strong> E(X) = n × p</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Variance:</strong> Var(X) = n × p × (1 - p)</li>
//               <li style={styles.li}><strong style={styles.liStrong}>PMF:</strong> P(X = k) = C(n,k) × p^k × (1-p)^(n-k)</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Mode:</strong> Most likely outcome near n × p</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Common Examples</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Coin flips:</strong> Number of heads in 10 flips</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Quality control:</strong> Defective items in a batch</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Medical trials:</strong> Patients responding to treatment</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Survey responses:</strong> "Yes" answers in fixed sample</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>When to Use Binomial Distribution</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Fixed number of trials:</strong> n is predetermined</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Binary outcomes:</strong> Success or failure only</li>
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
        
//         <div style={styles.xAxisTitle}>Number of Successes</div>
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
//               k = {contrib.value}
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
//   largeRangeNote: {
//     padding: '15px',
//     background: '#fff3cd',
//     border: '1px solid #ffc107',
//     borderRadius: '4px',
//     fontSize: '0.9rem',
//     color: '#856404',
//     lineHeight: 1.6,
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
//     lineHeight: 2,
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
//   varianceInfo: {
//     marginTop: '10px',
//     fontSize: '0.95rem',
//     color: '#495057',
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
//     justifyContent: 'space-around',
//     alignItems: 'flex-end',
//     height: '250px',
//     gap: '5px',
//     overflowX: 'auto',
//   },
//   barWrapper: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     minWidth: '30px',
//     maxWidth: '60px',
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

// export default BinomialExpectedValueCalculator;


import { useState, useMemo } from 'react';

const BinomialExpectedValueCalculator = () => {
  const [n, setN] = useState(10);
  const [p, setP] = useState(0.5);
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonN, setComparisonN] = useState(20);
  const [comparisonP, setComparisonP] = useState(0.6);

  const handleReset = () => {
    setN(10);
    setP(0.5);
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const updateN = (value) => {
    if (value === '') {
      setN('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num) && num > 0) {
        setN(num);
      }
    }
  };

  const updateP = (value) => {
    if (value === '' || value === '.') {
      setP(value);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setP(Math.max(0, Math.min(1, num)));
      }
    }
  };

  // Binomial coefficient: n! / (k! * (n-k)!)
  const binomialCoefficient = (n, k) => {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - k + i) / i;
    }
    return result;
  };

  // Binomial PMF: P(X = k) = C(n,k) * p^k * (1-p)^(n-k)
  const binomialPMF = (n, k, p) => {
    return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  };

  const calculations = useMemo(() => {
    const nVal = typeof n === 'string' ? parseInt(n) : n;
    const pVal = typeof p === 'string' ? parseFloat(p) : p;

    if (isNaN(nVal) || isNaN(pVal) || nVal <= 0 || pVal < 0 || pVal > 1) {
      return {
        isValid: false,
        n: nVal,
        p: pVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Generate outcomes (only show if n is reasonable for display)
    const outcomes = [];
    const maxDisplay = 50;
    const shouldGenerateOutcomes = nVal <= maxDisplay;

    if (shouldGenerateOutcomes) {
      for (let k = 0; k <= nVal; k++) {
        const probability = binomialPMF(nVal, k, pVal);
        outcomes.push({
          value: k,
          probability: probability,
          contribution: k * probability
        });
      }
    }

    // Calculate expected value: E(X) = n * p
    const expectedValue = nVal * pVal;

    // Calculate variance: Var(X) = n * p * (1 - p)
    const variance = nVal * pVal * (1 - pVal);
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      n: nVal,
      p: pVal,
      q: 1 - pVal,
      outcomes,
      expectedValue,
      variance,
      standardDeviation,
      shouldShowOutcomes: shouldGenerateOutcomes,
      contributions: outcomes.map(o => ({
        value: o.value,
        probability: o.probability,
        contribution: o.contribution
      }))
    };
  }, [n, p]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonN) || isNaN(comparisonP) || comparisonN <= 0 || comparisonP < 0 || comparisonP > 1) {
      return { isValid: false, expectedValue: 0 };
    }
    return {
      isValid: true,
      expectedValue: comparisonN * comparisonP
    };
  }, [comparisonN, comparisonP]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const n = calculations.n;
    const p = calculations.p;

    // Generate contextual examples based on parameters
    if (p === 0.5 && n <= 20) {
      return {
        scenario: "Fair coin flips",
        examples: [
          `Flipping ${n} coins? Expect ${ev.toFixed(1)} heads on average`,
          `Repeat this ${n}-flip experiment 100 times? Expect total ≈ ${(ev * 100).toFixed(0)} heads`,
          `Each trial gives ${ev.toFixed(1)} ± ${calculations.standardDeviation.toFixed(1)} heads typically`
        ]
      };
    } else if (p <= 0.1) {
      return {
        scenario: "Rare events (quality control, defects)",
        examples: [
          `Testing ${n} items with ${(p * 100).toFixed(0)}% defect rate? Expect ${ev.toFixed(2)} defects`,
          `In 1000 such batches? Expect total ≈ ${(ev * 1000).toFixed(0)} defects`,
          `Typical range: ${Math.max(0, ev - calculations.standardDeviation).toFixed(1)} to ${(ev + calculations.standardDeviation).toFixed(1)} defects`
        ]
      };
    } else if (p >= 0.9) {
      return {
        scenario: "High success rate",
        examples: [
          `With ${(p * 100).toFixed(0)}% success rate in ${n} trials? Expect ${ev.toFixed(1)} successes`,
          `Repeat 100 times? Expect total ≈ ${(ev * 100).toFixed(0)} successes`,
          `Typical variation: ±${calculations.standardDeviation.toFixed(1)} successes`
        ]
      };
    } else {
      return {
        scenario: "General binomial scenario",
        examples: [
          `${n} trials at ${(p * 100).toFixed(0)}% success rate? Expect ${ev.toFixed(1)} successes`,
          `100 such experiments? Expect total ≈ ${(ev * 100).toFixed(0)} successes`,
          `Typical range: ${Math.max(0, ev - calculations.standardDeviation).toFixed(1)} to ${Math.min(n, ev + calculations.standardDeviation).toFixed(1)} successes`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Binomial Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average number of successes) for a binomial distribution. 
          Perfect for coin flips, quality control, success rates, or any scenario with repeated yes/no trials.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} means on average you get {calculations.expectedValue.toFixed(2)} successes 
            out of {calculations.n} trials. This is your expected count of successes per experiment.
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
                  <strong>n</strong> (Number of Trials)
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={typeof n === 'string' ? 10 : n}
                  onChange={(e) => setN(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={n}
                  onChange={(e) => updateN(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(n !== '' && (isNaN(parseInt(n)) || parseInt(n) <= 0) ? styles.inputInvalid : {})
                  }}
                  min="1"
                  step="1"
                />
              </div>

              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>p</strong> (Success Probability)
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={typeof p === 'string' ? 0.5 : p}
                  onChange={(e) => setP(parseFloat(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={p}
                  onChange={(e) => updateP(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(p !== '' && p !== '.' && (isNaN(parseFloat(p)) || parseFloat(p) < 0 || parseFloat(p) > 1) ? styles.inputInvalid : {})
                  }}
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = n × p</strong></span>
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
                      <label style={styles.comparisonLabel}>Alternative n:</label>
                      <input
                        type="number"
                        value={comparisonN}
                        onChange={(e) => setComparisonN(parseInt(e.target.value) || 1)}
                        style={styles.comparisonInputField}
                        min="1"
                      />
                    </div>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative p:</label>
                      <input
                        type="number"
                        value={comparisonP}
                        onChange={(e) => setComparisonP(parseFloat(e.target.value) || 0)}
                        style={styles.comparisonInputField}
                        min="0"
                        max="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          <strong>Current:</strong> n={calculations.n}, p={calculations.p}
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          <strong>Alternative:</strong> n={comparisonN}, p={comparisonP}
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% more successes expected
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% fewer successes expected
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

          {calculations.isValid && calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
            <div style={styles.contributionsSection}>
              <h3 style={styles.h3}>Contribution to E(X)</h3>
              <div style={styles.contributionsTable}>
                <div style={styles.contributionsHeader}>
                  <span>k Successes</span>
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
                  <span><strong>E(X) =</strong></span>
                  <span></span>
                  <span><strong>{calculations.expectedValue.toFixed(4)}</strong></span>
                </div>
              </div>
            </div>
          )}

          {calculations.isValid && !calculations.shouldShowOutcomes && (
            <div style={styles.largeRangeNote}>
              <strong>Note:</strong> With n = {calculations.n}, individual outcome probabilities not displayed (n &gt; 50), 
              but E(X) calculation remains accurate.
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
                  Formula: n × p = {calculations.n} × {calculations.p} = {calculations.expectedValue.toFixed(2)}
                </div>
                <div style={styles.heroInterpretation}>
                  <strong>Interpretation:</strong> On average, expect {calculations.expectedValue.toFixed(2)} successes out of {calculations.n} trials
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
                      <span>Typical Range:</span>
                      <span>[{Math.max(0, Math.round(calculations.expectedValue - calculations.standardDeviation))}, {Math.min(calculations.n, Math.round(calculations.expectedValue + calculations.standardDeviation))}] successes</span>
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
                  {calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
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
                    {calculations.shouldShowOutcomes ? (
                      <VisualizationChart 
                        contributions={calculations.contributions}
                        expectedValue={calculations.expectedValue}
                      />
                    ) : (
                      <div style={styles.largeRangeChart}>
                        <p>Distribution has {calculations.n + 1} outcomes (too many to display individually)</p>
                        <div style={styles.summaryStats}>
                          <div><strong>Number of trials (n):</strong> {calculations.n}</div>
                          <div><strong>Success probability (p):</strong> {calculations.p}</div>
                          <div><strong>Possible outcomes:</strong> 0 to {calculations.n} successes</div>
                          <div style={styles.expectedValueHighlight}>
                            Expected Value E(X) = {calculations.expectedValue.toFixed(4)}
                          </div>
                          <div style={styles.varianceInfo}>
                            Most outcomes fall near E(X) ± σ<br/>
                            Typical range: [{Math.max(0, Math.round(calculations.expectedValue - calculations.standardDeviation))}, {Math.min(calculations.n, Math.round(calculations.expectedValue + calculations.standardDeviation))}] successes
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
                      <div style={styles.formulaMain}>E(X) = n × p</div>
                      <div style={styles.formulaDescription}>
                        For binomial distributions, the expected value equals the number of trials multiplied by the probability of success.
                      </div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Step-by-Step Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          <strong>Identify parameters:</strong> n = {calculations.n} trials, p = {calculations.p} success rate
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          <strong>Apply formula:</strong> E(X) = {calculations.n} × {calculations.p}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>Calculate:</strong> E(X) = {calculations.expectedValue.toFixed(4)}
                        </span>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why this works:</strong> If each trial has probability p of success, then across n trials, 
                      you expect n × p successes on average. For example, if p = 0.5 (coin flip), you expect half the trials to succeed.
                    </div>
                  </div>
                )}

                {activeTab === 'breakdown' && calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
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
                Enter valid parameters: n &gt; 0 and 0 ≤ p ≤ 1
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Binomial Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average number of successes you would get if you repeated 
              this n-trial experiment many times. It's the "center" of the distribution and the most likely outcome range.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Expect {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'} successes per experiment on average</li>
              <li style={styles.li}>Over many experiments, successes average to {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}</li>
              <li style={styles.li}>This is your "break-even" point for planning or prediction</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>10 coin flips (p=0.5):</strong> E(X) = 5 heads expected</li>
              <li style={styles.li}><strong style={styles.liStrong}>100 quality tests (p=0.02):</strong> E(X) = 2 defects expected</li>
              <li style={styles.li}><strong style={styles.liStrong}>20 sales calls (p=0.3):</strong> E(X) = 6 sales expected</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = n × p</h4>
            <p style={styles.p}>
              Each of the n trials contributes p successes on average. Since trials are independent, 
              you simply add up these contributions: n × p. This is the fundamental property of linearity of expectation.
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
        
        <div style={styles.xAxisTitle}>Number of Successes</div>
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
              {contrib.value} successes
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
  largeRangeNote: {
    padding: '15px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#856404',
    lineHeight: 1.6,
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
  varianceInfo: {
    marginTop: '10px',
    fontSize: '0.95rem',
    color: '#495057',
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
    gap: '5px',
    overflowX: 'auto',
  },
  barWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '30px',
    maxWidth: '60px',
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

export default BinomialExpectedValueCalculator;