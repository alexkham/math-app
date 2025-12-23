// import { useState, useMemo } from 'react';

// const ContinuousUniformExpectedValueCalculator = () => {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(10);
//   const [activeTab, setActiveTab] = useState('visualization');
//   const [showAdditionalStats, setShowAdditionalStats] = useState(false);
//   const [showComparison, setShowComparison] = useState(false);
//   const [comparisonA, setComparisonA] = useState(5);
//   const [comparisonB, setComparisonB] = useState(15);

//   const handleReset = () => {
//     setA(0);
//     setB(10);
//     setActiveTab('visualization');
//     setShowAdditionalStats(false);
//     setShowComparison(false);
//   };

//   const updateA = (value) => {
//     if (value === '' || value === '-') {
//       setA(value);
//     } else {
//       const num = parseFloat(value);
//       if (!isNaN(num)) {
//         setA(num);
//       }
//     }
//   };

//   const updateB = (value) => {
//     if (value === '' || value === '-') {
//       setB(value);
//     } else {
//       const num = parseFloat(value);
//       if (!isNaN(num)) {
//         setB(num);
//       }
//     }
//   };

//   const calculations = useMemo(() => {
//     const aVal = typeof a === 'string' ? parseFloat(a) : a;
//     const bVal = typeof b === 'string' ? parseFloat(b) : b;

//     if (isNaN(aVal) || isNaN(bVal) || aVal >= bVal) {
//       return {
//         isValid: false,
//         a: aVal,
//         b: bVal,
//         expectedValue: 0,
//         variance: 0,
//         standardDeviation: 0,
//         range: 0
//       };
//     }

//     // Calculate expected value: E(X) = (a + b) / 2
//     const expectedValue = (aVal + bVal) / 2;

//     // Calculate variance: Var(X) = (b - a)^2 / 12
//     const variance = Math.pow(bVal - aVal, 2) / 12;
//     const standardDeviation = Math.sqrt(variance);

//     return {
//       isValid: true,
//       a: aVal,
//       b: bVal,
//       expectedValue,
//       variance,
//       standardDeviation,
//       range: bVal - aVal,
//       pdfHeight: 1 / (bVal - aVal),
//       median: (aVal + bVal) / 2,
//       q1: aVal + (bVal - aVal) * 0.25,
//       q3: aVal + (bVal - aVal) * 0.75
//     };
//   }, [a, b]);

//   const comparisonCalc = useMemo(() => {
//     if (isNaN(comparisonA) || isNaN(comparisonB) || comparisonA >= comparisonB) {
//       return { isValid: false, expectedValue: 0 };
//     }
//     return {
//       isValid: true,
//       expectedValue: (comparisonA + comparisonB) / 2
//     };
//   }, [comparisonA, comparisonB]);

//   const getRealExample = () => {
//     if (!calculations.isValid) return null;

//     const ev = calculations.expectedValue;
//     const a = calculations.a;
//     const b = calculations.b;
//     const range = calculations.range;

//     // Generate contextual examples based on parameters
//     if (a === 0 && b <= 1) {
//       return {
//         scenario: "Uniform random number (0 to 1)",
//         examples: [
//           `Generate random numbers from ${a} to ${b}? Average value is ${ev.toFixed(3)}`,
//           `Perfect for random proportions, probabilities, or percentages`,
//           `Any value in [${a}, ${b}] is equally likely`
//         ]
//       };
//     } else if (range <= 10) {
//       return {
//         scenario: "Small uniform range",
//         examples: [
//           `Values uniformly distributed from ${a} to ${b}? Expect ${ev.toFixed(2)} on average`,
//           `Over 100 samples? Expect total ≈ ${(ev * 100).toFixed(0)}`,
//           `Middle value ${ev.toFixed(2)} is both mean and median`
//         ]
//       };
//     } else if (range <= 100) {
//       return {
//         scenario: "Moderate uniform range",
//         examples: [
//           `Uniform from ${a} to ${b}? Average is ${ev.toFixed(1)}`,
//           `Standard deviation: ±${calculations.standardDeviation.toFixed(2)} from mean`,
//           `50% of values fall between ${calculations.q1.toFixed(1)} and ${calculations.q3.toFixed(1)}`
//         ]
//       };
//     } else {
//       return {
//         scenario: "Wide uniform range",
//         examples: [
//           `Large range [${a}, ${b}] has midpoint ${ev.toFixed(1)}`,
//           `Spread: ${range.toFixed(0)} units, std dev: ${calculations.standardDeviation.toFixed(1)}`,
//           `Perfectly symmetric around E(X) = ${ev.toFixed(1)}`
//         ]
//       };
//     }
//   };

//   const realExample = getRealExample();

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.h2}>Expected Value Calculator - Continuous Uniform Distribution</h2>
      
//       <div style={styles.intro}>
//         <p style={styles.introText}>
//           Calculate the <strong>expected value</strong> (average value) for a continuous uniform distribution. 
//           Perfect for modeling scenarios where all values in a range are equally likely: random numbers, 
//           waiting times, or any situation with equal probability across an interval.
//         </p>
//       </div>

//       {/* KEY INSIGHT BOX */}
//       {calculations.isValid && (
//         <div style={styles.keyInsight}>
//           <div style={styles.keyInsightIcon}>💡</div>
//           <div style={styles.keyInsightContent}>
//             <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} is simply the midpoint of your range [{calculations.a}, {calculations.b}]. 
//             For uniform distributions, the expected value is always the average of the endpoints: (a + b) / 2.
//           </div>
//         </div>
//       )}

//       <div style={styles.mainLayout}>
//         {/* LEFT COLUMN - INPUT */}
//         <div style={styles.leftColumn}>
//           <div style={styles.inputSection}>
//             <div style={styles.inputHeader}>
//               <h3 style={styles.h3}>Parameters</h3>
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
//                   type="range"
//                   min="-50"
//                   max="50"
//                   step="0.5"
//                   value={typeof a === 'string' ? 0 : a}
//                   onChange={(e) => setA(parseFloat(e.target.value))}
//                   style={styles.slider}
//                 />
//                 <input
//                   type="number"
//                   value={a}
//                   onChange={(e) => updateA(e.target.value)}
//                   style={{
//                     ...styles.parameterInput,
//                     ...(a !== '' && a !== '-' && b !== '' && b !== '-' && 
//                         (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b)) && parseFloat(a) >= parseFloat(b)) ? styles.inputInvalid : {})
//                   }}
//                   step="0.1"
//                 />
//               </div>

//               <div style={styles.parameterItem}>
//                 <label style={styles.parameterLabel}>
//                   <strong>b</strong> (Maximum Value)
//                 </label>
//                 <input
//                   type="range"
//                   min="-50"
//                   max="100"
//                   step="0.5"
//                   value={typeof b === 'string' ? 10 : b}
//                   onChange={(e) => setB(parseFloat(e.target.value))}
//                   style={styles.slider}
//                 />
//                 <input
//                   type="number"
//                   value={b}
//                   onChange={(e) => updateB(e.target.value)}
//                   style={{
//                     ...styles.parameterInput,
//                     ...(a !== '' && a !== '-' && b !== '' && b !== '-' && 
//                         (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b)) && parseFloat(a) >= parseFloat(b)) ? styles.inputInvalid : {})
//                   }}
//                   step="0.1"
//                 />
//               </div>
//             </div>

//             {calculations.isValid && (
//               <div style={styles.infoBox}>
//                 <div style={styles.infoRow}>
//                   <span>Formula:</span>
//                   <span><strong>E(X) = (a + b) / 2</strong></span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span>Range:</span>
//                   <span><strong>{calculations.range.toFixed(2)} units</strong></span>
//                 </div>
//                 <div style={styles.infoRow}>
//                   <span>PDF height:</span>
//                   <span>1/{calculations.range.toFixed(2)} = {calculations.pdfHeight.toFixed(4)}</span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* COMPARISON FEATURE */}
//           {calculations.isValid && (
//             <div style={styles.comparisonSection}>
//               <button 
//                 onClick={() => setShowComparison(!showComparison)}
//                 style={styles.comparisonToggle}
//               >
//                 {showComparison ? '▼' : '▶'} Compare with Different Range
//               </button>
//               {showComparison && (
//                 <div style={styles.comparisonContent}>
//                   <div style={styles.comparisonInputs}>
//                     <div style={styles.comparisonInput}>
//                       <label style={styles.comparisonLabel}>Alternative a:</label>
//                       <input
//                         type="number"
//                         value={comparisonA}
//                         onChange={(e) => setComparisonA(parseFloat(e.target.value) || 0)}
//                         style={styles.comparisonInputField}
//                         step="0.1"
//                       />
//                     </div>
//                     <div style={styles.comparisonInput}>
//                       <label style={styles.comparisonLabel}>Alternative b:</label>
//                       <input
//                         type="number"
//                         value={comparisonB}
//                         onChange={(e) => setComparisonB(parseFloat(e.target.value) || 0)}
//                         style={styles.comparisonInputField}
//                         step="0.1"
//                       />
//                     </div>
//                   </div>
//                   {comparisonCalc.isValid && (
//                     <div style={styles.comparisonResults}>
//                       <div style={styles.comparisonRow}>
//                         <span style={styles.comparisonCurrent}>
//                           <strong>Current:</strong> [{calculations.a}, {calculations.b}]
//                         </span>
//                         <span style={styles.comparisonCurrentValue}>
//                           E(X) = {calculations.expectedValue.toFixed(2)}
//                         </span>
//                       </div>
//                       <div style={styles.comparisonRow}>
//                         <span style={styles.comparisonAlt}>
//                           <strong>Alternative:</strong> [{comparisonA}, {comparisonB}]
//                         </span>
//                         <span style={styles.comparisonAltValue}>
//                           E(X) = {comparisonCalc.expectedValue.toFixed(2)}
//                         </span>
//                       </div>
//                       <div style={styles.comparisonDiff}>
//                         {comparisonCalc.expectedValue > calculations.expectedValue ? (
//                           <span style={styles.comparisonHigher}>
//                             ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / Math.abs(calculations.expectedValue) * 100).toFixed(1)}% higher
//                           </span>
//                         ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
//                           <span style={styles.comparisonLower}>
//                             ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / Math.abs(calculations.expectedValue) * 100).toFixed(1)}% lower
//                           </span>
//                         ) : (
//                           <span>Same expected value</span>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           )}

//           {/* KEY PERCENTILES */}
//           {calculations.isValid && (
//             <div style={styles.percentilesSection}>
//               <h3 style={styles.h3}>Key Percentiles</h3>
//               <div style={styles.percentilesTable}>
//                 <div style={styles.percentileRow}>
//                   <span style={styles.percentileLabel}>Minimum (0%):</span>
//                   <span style={styles.percentileValue}>{calculations.a.toFixed(2)}</span>
//                 </div>
//                 <div style={styles.percentileRow}>
//                   <span style={styles.percentileLabel}>Q1 (25%):</span>
//                   <span style={styles.percentileValue}>{calculations.q1.toFixed(2)}</span>
//                 </div>
//                 <div style={styles.percentileRow}>
//                   <span style={styles.percentileLabel}>Median (50%):</span>
//                   <span style={styles.percentileValue}>{calculations.median.toFixed(2)}</span>
//                 </div>
//                 <div style={styles.percentileRow}>
//                   <span style={styles.percentileLabel}>Q3 (75%):</span>
//                   <span style={styles.percentileValue}>{calculations.q3.toFixed(2)}</span>
//                 </div>
//                 <div style={styles.percentileRow}>
//                   <span style={styles.percentileLabel}>Maximum (100%):</span>
//                   <span style={styles.percentileValue}>{calculations.b.toFixed(2)}</span>
//                 </div>
//                 <div style={styles.percentileNote}>
//                   For uniform distributions, percentiles are evenly spaced
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* RIGHT COLUMN - EXPECTED VALUE FOCUS */}
//         <div style={styles.rightColumn}>
//           {calculations.isValid ? (
//             <>
//               {/* HERO: Giant Expected Value Display */}
//               <div style={styles.heroExpectedValue}>
//                 <div style={styles.heroLabel}>Expected Value (Midpoint)</div>
//                 <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(4)}</div>
//                 <div style={styles.heroFormula}>
//                   Formula: (a + b) / 2 = ({calculations.a} + {calculations.b}) / 2 = {calculations.expectedValue.toFixed(2)}
//                 </div>
//                 <div style={styles.heroInterpretation}>
//                   <strong>Interpretation:</strong> The expected value is the midpoint of the range. 
//                   On average, uniformly distributed values equal {calculations.expectedValue.toFixed(2)}.
//                 </div>
//               </div>

//               {/* REAL-WORLD EXAMPLES */}
//               {realExample && (
//                 <div style={styles.examplesSection}>
//                   <div style={styles.examplesHeader}>
//                     <span style={styles.examplesIcon}>📊</span>
//                     <span style={styles.examplesTitle}>E(X) in Context: {realExample.scenario}</span>
//                   </div>
//                   <ul style={styles.examplesList}>
//                     {realExample.examples.map((example, index) => (
//                       <li key={index} style={styles.exampleItem}>{example}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Additional Statistics - Collapsed by default */}
//               <div style={styles.additionalStats}>
//                 <button 
//                   onClick={() => setShowAdditionalStats(!showAdditionalStats)}
//                   style={styles.additionalStatsToggle}
//                 >
//                   {showAdditionalStats ? '▼' : '▶'} Additional Statistics
//                 </button>
//                 {showAdditionalStats && (
//                   <div style={styles.additionalStatsContent}>
//                     <div style={styles.statRow}>
//                       <span>Variance:</span>
//                       <span>{calculations.variance.toFixed(4)}</span>
//                     </div>
//                     <div style={styles.statRow}>
//                       <span>Standard Deviation:</span>
//                       <span>{calculations.standardDeviation.toFixed(4)}</span>
//                     </div>
//                     <div style={styles.statRow}>
//                       <span>Interquartile Range (IQR):</span>
//                       <span>{(calculations.q3 - calculations.q1).toFixed(4)}</span>
//                     </div>
//                     <div style={styles.statRow}>
//                       <span>68% range (E ± 0.58σ):</span>
//                       <span>[{(calculations.expectedValue - 0.58 * calculations.standardDeviation).toFixed(2)}, {(calculations.expectedValue + 0.58 * calculations.standardDeviation).toFixed(2)}]</span>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Tabs focused on E(X) */}
//               <div style={styles.visualization}>
//                 <div style={styles.tabContainer}>
//                   <button
//                     onClick={() => setActiveTab('visualization')}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === 'visualization' ? styles.tabActive : {})
//                     }}
//                   >
//                     E(X) Visualization
//                   </button>
//                   <button
//                     onClick={() => setActiveTab('calculation')}
//                     style={{
//                       ...styles.tab,
//                       ...(activeTab === 'calculation' ? styles.tabActive : {})
//                     }}
//                   >
//                     How E(X) is Calculated
//                   </button>
//                 </div>

//                 {activeTab === 'visualization' && (
//                   <div style={styles.chart}>
//                     <PDFVisualization 
//                       a={calculations.a}
//                       b={calculations.b}
//                       expectedValue={calculations.expectedValue}
//                       standardDeviation={calculations.standardDeviation}
//                       pdfHeight={calculations.pdfHeight}
//                     />
//                   </div>
//                 )}

//                 {activeTab === 'calculation' && (
//                   <div style={styles.calculationTab}>
//                     <div style={styles.formulaBox}>
//                       <div style={styles.formulaTitle}>Expected Value Formula</div>
//                       <div style={styles.formulaMain}>E(X) = (a + b) / 2</div>
//                       <div style={styles.formulaDescription}>
//                         For continuous uniform distributions, the expected value is simply the midpoint of the interval. 
//                         This comes from integrating x × f(x) over [a, b] where f(x) = 1/(b-a).
//                       </div>
//                     </div>
                    
//                     <div style={styles.steps}>
//                       <div style={styles.stepTitle}>Step-by-Step Calculation:</div>
//                       <div style={styles.step}>
//                         <span style={styles.stepNumber}>1.</span>
//                         <span style={styles.stepContent}>
//                           <strong>Identify parameters:</strong> a = {calculations.a}, b = {calculations.b}
//                         </span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepNumber}>2.</span>
//                         <span style={styles.stepContent}>
//                           <strong>Apply formula:</strong> E(X) = (a + b) / 2
//                         </span>
//                       </div>
//                       <div style={styles.step}>
//                         <span style={styles.stepNumber}>3.</span>
//                         <span style={styles.stepContent}>
//                           <strong>Calculate:</strong> E(X) = ({calculations.a} + {calculations.b}) / 2 = {calculations.expectedValue.toFixed(4)}
//                         </span>
//                       </div>
//                     </div>

//                     <div style={styles.integralBox}>
//                       <div style={styles.integralTitle}>📐 Integration Derivation</div>
//                       <div style={styles.integralStep}>
//                         <strong>PDF:</strong> f(x) = 1/(b-a) = 1/{calculations.range.toFixed(2)} for x ∈ [{calculations.a}, {calculations.b}]
//                       </div>
//                       <div style={styles.integralStep}>
//                         <strong>Expected Value:</strong> E(X) = ∫<sub>a</sub><sup>b</sup> x · f(x) dx
//                       </div>
//                       <div style={styles.integralStep}>
//                         = ∫<sub>{calculations.a}</sub><sup>{calculations.b}</sup> x · (1/{calculations.range.toFixed(2)}) dx
//                       </div>
//                       <div style={styles.integralStep}>
//                         = (1/{calculations.range.toFixed(2)}) · [x²/2]<sub>{calculations.a}</sub><sup>{calculations.b}</sup>
//                       </div>
//                       <div style={styles.integralStep}>
//                         = (1/{calculations.range.toFixed(2)}) · ({calculations.b}² - {calculations.a}²) / 2
//                       </div>
//                       <div style={styles.integralStep}>
//                         = (b + a)(b - a) / (2(b - a))
//                       </div>
//                       <div style={styles.integralStep}>
//                         <strong>= (a + b) / 2 = {calculations.expectedValue.toFixed(4)}</strong>
//                       </div>
//                     </div>

//                     <div style={styles.insightBox}>
//                       <strong>Why this works:</strong> Since the PDF is constant (flat) across [a, b], 
//                       the "center of mass" is exactly at the midpoint. Every value is equally likely, 
//                       so the average is simply halfway between the endpoints. Simple and elegant!
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </>
//           ) : (
//             <div style={styles.resultsPlaceholder}>
//               <div style={styles.placeholderIcon}>E(X)</div>
//               <p style={styles.placeholderText}>
//                 Enter valid parameters: a &lt; b
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       <div style={styles.explanation}>
//         <h3 style={styles.h3}>Understanding Expected Value for Continuous Uniform Distribution</h3>
        
//         <div style={styles.explainGrid}>
//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>What Does E(X) Mean?</h4>
//             <p style={styles.p}>
//               The expected value E(X) represents the average value of the distribution - the "center of mass" 
//               of the PDF. For uniform distributions, this is simply the midpoint of the interval [a, b].
//             </p>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Interpreting Your Result</h4>
//             <p style={styles.p}>
//               With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
//             </p>
//             <ul style={styles.ul}>
//               <li style={styles.li}>The average value across the distribution is {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}</li>
//               <li style={styles.li}>This equals the median and mode (all the same for uniform)</li>
//               <li style={styles.li}>Values are evenly distributed around this center point</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Real-World Examples</h4>
//             <ul style={styles.ul}>
//               <li style={styles.li}><strong style={styles.liStrong}>Random number [0, 1]:</strong> E(X) = 0.5</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Arrival time [0, 60] min:</strong> E(X) = 30 minutes</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Temperature [20, 30]°C:</strong> E(X) = 25°C</li>
//               <li style={styles.li}><strong style={styles.liStrong}>Duration [5, 15] sec:</strong> E(X) = 10 seconds</li>
//             </ul>
//           </div>

//           <div style={styles.explainSection}>
//             <h4 style={styles.h4}>Why E(X) = (a + b) / 2</h4>
//             <p style={styles.p}>
//               The continuous uniform distribution has constant probability density across [a, b]. 
//               When you integrate x · f(x), you're finding the weighted average where all weights are equal. 
//               This naturally gives you the midpoint. It's the same as averaging two numbers: (a + b) / 2.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // PDF Visualization Component
// const PDFVisualization = ({ a, b, expectedValue, standardDeviation, pdfHeight }) => {
//   const padding = (b - a) * 0.2;
//   const xMin = a - padding;
//   const xMax = b + padding;
//   const xRange = xMax - xMin;
  
//   // Calculate positions
//   const aPos = ((a - xMin) / xRange) * 100;
//   const bPos = ((b - xMin) / xRange) * 100;
//   const evPos = ((expectedValue - xMin) / xRange) * 100;
//   const minusSigmaPos = ((expectedValue - standardDeviation - xMin) / xRange) * 100;
//   const plusSigmaPos = ((expectedValue + standardDeviation - xMin) / xRange) * 100;

//   return (
//     <div style={styles.pdfChart}>
//       <div style={styles.chartTitle}>Probability Density Function with E(X) = {expectedValue.toFixed(2)}</div>
      
//       <div style={styles.pdfContainer}>
//         <div style={styles.yAxisLabelPDF}>Density</div>
        
//         <div style={styles.pdfContent}>
//           {/* Shaded region for ±σ */}
//           {expectedValue - standardDeviation >= a && expectedValue + standardDeviation <= b && (
//             <div 
//               style={{
//                 ...styles.shadedRegion,
//                 left: `${minusSigmaPos}%`,
//                 width: `${plusSigmaPos - minusSigmaPos}%`
//               }}
//             />
//           )}
          
//           {/* Vertical line at E(X) */}
//           <div 
//             style={{
//               ...styles.evLine,
//               left: `${evPos}%`
//             }}
//           >
//             <div style={styles.evLineLabel}>
//               E(X) = {expectedValue.toFixed(2)}
//             </div>
//           </div>
          
//           {/* PDF rectangle */}
//           <div style={styles.pdfArea}>
//             <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
//               {/* Axes */}
//               <line x1="0" y1="250" x2="1000" y2="250" stroke="#333" strokeWidth="2" />
              
//               {/* PDF rectangle - flat top */}
//               <rect 
//                 x={aPos * 10} 
//                 y="50" 
//                 width={(bPos - aPos) * 10} 
//                 height="200" 
//                 fill="rgba(0, 123, 255, 0.3)" 
//                 stroke="#007bff" 
//                 strokeWidth="3"
//               />
              
//               {/* Zero density outside [a,b] */}
//               <line 
//                 x1="0" 
//                 y1="250" 
//                 x2={aPos * 10} 
//                 y2="250" 
//                 stroke="#007bff" 
//                 strokeWidth="3"
//               />
//               <line 
//                 x1={bPos * 10} 
//                 y1="250" 
//                 x2="1000" 
//                 y2="250" 
//                 stroke="#007bff" 
//                 strokeWidth="3"
//               />
              
//               {/* Vertical drops at a and b */}
//               <line 
//                 x1={aPos * 10} 
//                 y1="50" 
//                 x2={aPos * 10} 
//                 y2="250" 
//                 stroke="#007bff" 
//                 strokeWidth="3"
//                 strokeDasharray="5,5"
//               />
//               <line 
//                 x1={bPos * 10} 
//                 y1="50" 
//                 x2={bPos * 10} 
//                 y2="250" 
//                 stroke="#007bff" 
//                 strokeWidth="3"
//                 strokeDasharray="5,5"
//               />
//             </svg>
//           </div>
          
//           {/* X-axis labels */}
//           <div style={styles.xAxisLabels}>
//             <span style={{...styles.xLabel, left: `${aPos}%`}}>a = {a.toFixed(2)}</span>
//             <span style={{...styles.xLabel, left: `${evPos}%`}}>E(X) = {expectedValue.toFixed(2)}</span>
//             <span style={{...styles.xLabel, left: `${bPos}%`}}>b = {b.toFixed(2)}</span>
//           </div>
//         </div>
//       </div>
      
//       <div style={styles.pdfNote}>
//         <strong>Note:</strong> The PDF is constant at height {pdfHeight.toFixed(4)} across [{a}, {b}]. 
//         Total area under the curve = 1. 
//         {expectedValue - standardDeviation >= a && expectedValue + standardDeviation <= b && 
//           ` Shaded region shows E(X) ± σ (≈57.7% of distribution).`
//         }
//       </div>
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
//     marginBottom: '20px',
//     borderLeft: '4px solid #007bff',
//   },
//   introText: {
//     margin: 0,
//     lineHeight: 1.6,
//     color: '#333',
//   },
//   keyInsight: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '15px',
//     background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
//     border: '2px solid #ffc107',
//     padding: '20px',
//     borderRadius: '8px',
//     marginBottom: '30px',
//     boxShadow: '0 2px 8px rgba(255,193,7,0.2)',
//   },
//   keyInsightIcon: {
//     fontSize: '2rem',
//     lineHeight: 1,
//   },
//   keyInsightContent: {
//     flex: 1,
//     fontSize: '1.05rem',
//     lineHeight: 1.6,
//     color: '#856404',
//   },
//   mainLayout: {
//     display: 'grid',
//     gridTemplateColumns: '450px 1fr',
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
//   slider: {
//     width: '100%',
//     height: '6px',
//     borderRadius: '3px',
//     outline: 'none',
//     WebkitAppearance: 'none',
//     background: '#ddd',
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
//   infoBox: {
//     marginTop: '20px',
//     padding: '15px',
//     background: '#f8f9fa',
//     borderRadius: '4px',
//   },
//   infoRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '8px 0',
//     fontSize: '0.95rem',
//     borderBottom: '1px solid #e9ecef',
//   },
//   comparisonSection: {
//     background: '#fff',
//     borderRadius: '8px',
//     border: '1px solid #dee2e6',
//     overflow: 'hidden',
//   },
//   comparisonToggle: {
//     width: '100%',
//     padding: '12px 20px',
//     background: '#f8f9fa',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '0.95rem',
//     fontWeight: 500,
//     color: '#495057',
//     textAlign: 'left',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   comparisonContent: {
//     padding: '20px',
//     background: 'white',
//   },
//   comparisonInputs: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '15px',
//     marginBottom: '15px',
//   },
//   comparisonInput: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '5px',
//   },
//   comparisonLabel: {
//     fontSize: '0.9rem',
//     color: '#495057',
//     fontWeight: 500,
//   },
//   comparisonInputField: {
//     padding: '8px',
//     border: '1px solid #ced4da',
//     borderRadius: '4px',
//     fontSize: '0.95rem',
//   },
//   comparisonResults: {
//     padding: '15px',
//     background: '#f8f9fa',
//     borderRadius: '4px',
//   },
//   comparisonRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px 0',
//     borderBottom: '1px solid #e9ecef',
//     fontSize: '0.9rem',
//   },
//   comparisonCurrent: {
//     color: '#495057',
//   },
//   comparisonCurrentValue: {
//     fontWeight: 600,
//     color: '#007bff',
//   },
//   comparisonAlt: {
//     color: '#495057',
//   },
//   comparisonAltValue: {
//     fontWeight: 600,
//     color: '#6c757d',
//   },
//   comparisonDiff: {
//     marginTop: '10px',
//     paddingTop: '10px',
//     borderTop: '2px solid #007bff',
//     textAlign: 'center',
//     fontSize: '1rem',
//     fontWeight: 600,
//   },
//   comparisonHigher: {
//     color: '#28a745',
//   },
//   comparisonLower: {
//     color: '#dc3545',
//   },
//   percentilesSection: {
//     padding: '20px',
//     background: '#fff',
//     borderRadius: '8px',
//     border: '1px solid #dee2e6',
//   },
//   percentilesTable: {
//     width: '100%',
//   },
//   percentileRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px 0',
//     borderBottom: '1px solid #e9ecef',
//     fontSize: '0.95rem',
//   },
//   percentileLabel: {
//     color: '#495057',
//   },
//   percentileValue: {
//     fontWeight: 600,
//     color: '#007bff',
//     fontFamily: "'Courier New', monospace",
//   },
//   percentileNote: {
//     marginTop: '15px',
//     padding: '10px',
//     background: '#e7f3ff',
//     borderRadius: '4px',
//     fontSize: '0.85rem',
//     color: '#004085',
//     fontStyle: 'italic',
//   },
//   heroExpectedValue: {
//     background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
//     color: 'white',
//     padding: '40px',
//     borderRadius: '12px',
//     textAlign: 'center',
//     boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
//   },
//   heroLabel: {
//     fontSize: '1rem',
//     opacity: 0.9,
//     marginBottom: '10px',
//     fontWeight: 500,
//   },
//   heroValue: {
//     fontSize: '3.5rem',
//     fontWeight: 700,
//     marginBottom: '15px',
//     letterSpacing: '-1px',
//   },
//   heroFormula: {
//     fontSize: '1.1rem',
//     opacity: 0.9,
//     marginBottom: '20px',
//     fontFamily: "'Courier New', monospace",
//   },
//   heroInterpretation: {
//     fontSize: '1rem',
//     opacity: 0.95,
//     padding: '15px',
//     background: 'rgba(255,255,255,0.15)',
//     borderRadius: '6px',
//     lineHeight: 1.6,
//   },
//   examplesSection: {
//     background: '#e7f3ff',
//     border: '2px solid #007bff',
//     borderRadius: '8px',
//     padding: '20px',
//   },
//   examplesHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     marginBottom: '15px',
//   },
//   examplesIcon: {
//     fontSize: '1.5rem',
//   },
//   examplesTitle: {
//     fontSize: '1.1rem',
//     fontWeight: 600,
//     color: '#007bff',
//   },
//   examplesList: {
//     margin: 0,
//     paddingLeft: '25px',
//   },
//   exampleItem: {
//     marginBottom: '10px',
//     lineHeight: 1.6,
//     color: '#495057',
//     fontSize: '0.95rem',
//   },
//   additionalStats: {
//     background: '#f8f9fa',
//     borderRadius: '8px',
//     overflow: 'hidden',
//   },
//   additionalStatsToggle: {
//     width: '100%',
//     padding: '12px 20px',
//     background: '#f8f9fa',
//     border: 'none',
//     borderBottom: '1px solid #dee2e6',
//     cursor: 'pointer',
//     fontSize: '0.95rem',
//     fontWeight: 500,
//     color: '#495057',
//     textAlign: 'left',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   additionalStatsContent: {
//     padding: '15px 20px',
//     background: 'white',
//   },
//   statRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '8px 0',
//     borderBottom: '1px solid #e9ecef',
//     fontSize: '0.9rem',
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
//   chartTitle: {
//     fontSize: '1rem',
//     fontWeight: 600,
//     color: '#2c3e50',
//     marginBottom: '20px',
//     textAlign: 'center',
//   },
//   calculationTab: {
//     padding: '20px',
//     background: 'white',
//   },
//   formulaBox: {
//     padding: '20px',
//     background: '#e7f3ff',
//     borderRadius: '8px',
//     marginBottom: '20px',
//     border: '2px solid #007bff',
//   },
//   formulaTitle: {
//     fontSize: '1.1rem',
//     fontWeight: 600,
//     color: '#007bff',
//     marginBottom: '10px',
//   },
//   formulaMain: {
//     fontSize: '2rem',
//     fontWeight: 700,
//     color: '#007bff',
//     marginBottom: '10px',
//     fontFamily: "'Courier New', monospace",
//   },
//   formulaDescription: {
//     fontSize: '0.95rem',
//     color: '#495057',
//     lineHeight: 1.6,
//   },
//   steps: {
//     background: '#f8f9fa',
//     padding: '20px',
//     borderRadius: '8px',
//     marginBottom: '20px',
//   },
//   stepTitle: {
//     fontSize: '1rem',
//     fontWeight: 600,
//     marginBottom: '15px',
//     color: '#2c3e50',
//   },
//   step: {
//     display: 'flex',
//     gap: '15px',
//     padding: '12px 0',
//     borderBottom: '1px solid #e9ecef',
//   },
//   stepNumber: {
//     fontSize: '1.2rem',
//     fontWeight: 700,
//     color: '#007bff',
//     minWidth: '30px',
//   },
//   stepContent: {
//     fontSize: '0.95rem',
//     lineHeight: 1.6,
//     color: '#333',
//   },
//   integralBox: {
//     padding: '20px',
//     background: '#fff3cd',
//     border: '2px solid #ffc107',
//     borderRadius: '8px',
//     marginBottom: '20px',
//   },
//   integralTitle: {
//     fontSize: '1.1rem',
//     fontWeight: 600,
//     color: '#856404',
//     marginBottom: '15px',
//   },
//   integralStep: {
//     fontSize: '0.95rem',
//     lineHeight: 2,
//     color: '#856404',
//     fontFamily: "'Courier New', monospace",
//   },
//   insightBox: {
//     padding: '15px',
//     background: '#d4edda',
//     border: '1px solid #28a745',
//     borderRadius: '4px',
//     fontSize: '0.95rem',
//     lineHeight: 1.6,
//     color: '#155724',
//   },
//   resultsPlaceholder: {
//     padding: '60px 30px',
//     background: '#f8f9fa',
//     borderRadius: '8px',
//     border: '2px dashed #dee2e6',
//     textAlign: 'center',
//   },
//   placeholderIcon: {
//     fontSize: '4rem',
//     color: '#dee2e6',
//     fontWeight: 700,
//     marginBottom: '20px',
//   },
//   placeholderText: {
//     color: '#6c757d',
//     margin: 0,
//     fontSize: '1.1rem',
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
//   pdfChart: {
//     width: '100%',
//   },
//   pdfContainer: {
//     position: 'relative',
//     marginBottom: '20px',
//   },
//   yAxisLabelPDF: {
//     position: 'absolute',
//     left: '-40px',
//     top: '50%',
//     transform: 'translateY(-50%) rotate(-90deg)',
//     fontSize: '0.85rem',
//     fontWeight: 600,
//     color: '#495057',
//   },
//   pdfContent: {
//     position: 'relative',
//     marginLeft: '10px',
//   },
//   shadedRegion: {
//     position: 'absolute',
//     top: '50px',
//     height: '200px',
//     background: 'rgba(40, 167, 69, 0.15)',
//     border: '2px dashed #28a745',
//     zIndex: 5,
//   },
//   evLine: {
//     position: 'absolute',
//     top: 0,
//     bottom: '60px',
//     width: '3px',
//     background: '#dc3545',
//     zIndex: 10,
//     boxShadow: '0 0 8px rgba(220,53,69,0.5)',
//   },
//   evLineLabel: {
//     position: 'absolute',
//     top: '20px',
//     left: '8px',
//     background: '#dc3545',
//     color: 'white',
//     padding: '6px 10px',
//     borderRadius: '4px',
//     fontWeight: 700,
//     fontSize: '0.9rem',
//     whiteSpace: 'nowrap',
//     boxShadow: '0 2px 8px rgba(220,53,69,0.3)',
//   },
//   pdfArea: {
//     height: '300px',
//     marginBottom: '10px',
//   },
//   xAxisLabels: {
//     position: 'relative',
//     height: '30px',
//     marginTop: '10px',
//   },
//   xLabel: {
//     position: 'absolute',
//     transform: 'translateX(-50%)',
//     fontSize: '0.85rem',
//     fontWeight: 600,
//     color: '#495057',
//     whiteSpace: 'nowrap',
//   },
//   pdfNote: {
//     marginTop: '15px',
//     padding: '12px',
//     background: '#e7f3ff',
//     borderRadius: '4px',
//     fontSize: '0.9rem',
//     color: '#004085',
//     lineHeight: 1.6,
//   },
// };

// export default ContinuousUniformExpectedValueCalculator;


import { useState, useMemo } from 'react';

const ContinuousUniformExpectedValueCalculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(10);
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonA, setComparisonA] = useState(5);
  const [comparisonB, setComparisonB] = useState(15);

  const handleReset = () => {
    setA(0);
    setB(10);
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const updateA = (value) => {
    if (value === '' || value === '-') {
      setA(value);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setA(num);
      }
    }
  };

  const updateB = (value) => {
    if (value === '' || value === '-') {
      setB(value);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setB(num);
      }
    }
  };

  const calculations = useMemo(() => {
    const aVal = typeof a === 'string' ? parseFloat(a) : a;
    const bVal = typeof b === 'string' ? parseFloat(b) : b;

    if (isNaN(aVal) || isNaN(bVal) || aVal >= bVal) {
      return {
        isValid: false,
        a: aVal,
        b: bVal,
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        range: 0
      };
    }

    // Calculate expected value: E(X) = (a + b) / 2
    const expectedValue = (aVal + bVal) / 2;

    // Calculate variance: Var(X) = (b - a)^2 / 12
    const variance = Math.pow(bVal - aVal, 2) / 12;
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      a: aVal,
      b: bVal,
      expectedValue,
      variance,
      standardDeviation,
      range: bVal - aVal,
      pdfHeight: 1 / (bVal - aVal),
      median: (aVal + bVal) / 2,
      q1: aVal + (bVal - aVal) * 0.25,
      q3: aVal + (bVal - aVal) * 0.75
    };
  }, [a, b]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonA) || isNaN(comparisonB) || comparisonA >= comparisonB) {
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
    const range = calculations.range;

    // Generate contextual examples based on parameters
    if (a === 0 && b <= 1) {
      return {
        scenario: "Uniform random number (0 to 1)",
        examples: [
          `Generate random numbers from ${a} to ${b}? Average value is ${ev.toFixed(3)}`,
          `Perfect for random proportions, probabilities, or percentages`,
          `Any value in [${a}, ${b}] is equally likely`
        ]
      };
    } else if (range <= 10) {
      return {
        scenario: "Small uniform range",
        examples: [
          `Values uniformly distributed from ${a} to ${b}? Expect ${ev.toFixed(2)} on average`,
          `Over 100 samples? Expect total ≈ ${(ev * 100).toFixed(0)}`,
          `Middle value ${ev.toFixed(2)} is both mean and median`
        ]
      };
    } else if (range <= 100) {
      return {
        scenario: "Moderate uniform range",
        examples: [
          `Uniform from ${a} to ${b}? Average is ${ev.toFixed(1)}`,
          `Standard deviation: ±${calculations.standardDeviation.toFixed(2)} from mean`,
          `50% of values fall between ${calculations.q1.toFixed(1)} and ${calculations.q3.toFixed(1)}`
        ]
      };
    } else {
      return {
        scenario: "Wide uniform range",
        examples: [
          `Large range [${a}, ${b}] has midpoint ${ev.toFixed(1)}`,
          `Spread: ${range.toFixed(0)} units, std dev: ${calculations.standardDeviation.toFixed(1)}`,
          `Perfectly symmetric around E(X) = ${ev.toFixed(1)}`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Continuous Uniform Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average value) for a continuous uniform distribution. 
          Perfect for modeling scenarios where all values in a range are equally likely: random numbers, 
          waiting times, or any situation with equal probability across an interval.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} is simply the midpoint of your range [{calculations.a}, {calculations.b}]. 
            For uniform distributions, the expected value is always the average of the endpoints: (a + b) / 2.
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
                  <strong>a</strong> (Minimum)
                </label>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="0.5"
                  value={typeof a === 'string' ? 0 : a}
                  onChange={(e) => setA(parseFloat(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={a}
                  onChange={(e) => updateA(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(a !== '' && a !== '-' && b !== '' && b !== '-' && 
                        (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b)) && parseFloat(a) >= parseFloat(b)) ? styles.inputInvalid : {})
                  }}
                  step="0.1"
                />
              </div>

              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>b</strong> (Maximum)
                </label>
                <input
                  type="range"
                  min="-50"
                  max="100"
                  step="0.5"
                  value={typeof b === 'string' ? 10 : b}
                  onChange={(e) => setB(parseFloat(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={b}
                  onChange={(e) => updateB(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(a !== '' && a !== '-' && b !== '' && b !== '-' && 
                        (!isNaN(parseFloat(a)) && !isNaN(parseFloat(b)) && parseFloat(a) >= parseFloat(b)) ? styles.inputInvalid : {})
                  }}
                  step="0.1"
                />
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = (a + b) / 2</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Range:</span>
                  <span><strong>{calculations.range.toFixed(2)}</strong></span>
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
                {showComparison ? '▼' : '▶'} Compare
              </button>
              {showComparison && (
                <div style={styles.comparisonContent}>
                  <div style={styles.comparisonInputs}>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alt a:</label>
                      <input
                        type="number"
                        value={comparisonA}
                        onChange={(e) => setComparisonA(parseFloat(e.target.value) || 0)}
                        style={styles.comparisonInputField}
                        step="0.1"
                      />
                    </div>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alt b:</label>
                      <input
                        type="number"
                        value={comparisonB}
                        onChange={(e) => setComparisonB(parseFloat(e.target.value) || 0)}
                        style={styles.comparisonInputField}
                        step="0.1"
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          Current: [{calculations.a}, {calculations.b}]
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          {calculations.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          Alt: [{comparisonA}, {comparisonB}]
                        </span>
                        <span style={styles.comparisonAltValue}>
                          {comparisonCalc.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / Math.abs(calculations.expectedValue) * 100).toFixed(1)}%
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / Math.abs(calculations.expectedValue) * 100).toFixed(1)}%
                          </span>
                        ) : (
                          <span>Same</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* KEY PERCENTILES */}
          {calculations.isValid && (
            <div style={styles.percentilesSection}>
              <h3 style={styles.h3}>Percentiles</h3>
              <div style={styles.percentilesTable}>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Min:</span>
                  <span style={styles.percentileValue}>{calculations.a.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Q1:</span>
                  <span style={styles.percentileValue}>{calculations.q1.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Median:</span>
                  <span style={styles.percentileValue}>{calculations.median.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Q3:</span>
                  <span style={styles.percentileValue}>{calculations.q3.toFixed(2)}</span>
                </div>
                <div style={styles.percentileRow}>
                  <span style={styles.percentileLabel}>Max:</span>
                  <span style={styles.percentileValue}>{calculations.b.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - HERO, EXAMPLES & TABS */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              {/* HERO: Giant Expected Value Display */}
              <div style={styles.heroExpectedValue}>
                <div style={styles.heroLabel}>Expected Value</div>
                <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(3)}</div>
                <div style={styles.heroFormula}>
                  ({calculations.a} + {calculations.b}) / 2
                </div>
                <div style={styles.heroInterpretation}>
                  The midpoint of [{calculations.a}, {calculations.b}]
                </div>
              </div>

              {/* Additional Statistics - NOW ABOVE TABS */}
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
                      <span>Std Dev:</span>
                      <span>{calculations.standardDeviation.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>IQR:</span>
                      <span>{(calculations.q3 - calculations.q1).toFixed(4)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs & Visualization */}
              <div style={styles.visualization}>
                <div style={styles.tabContainer}>
                  <button
                    onClick={() => setActiveTab('visualization')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'visualization' ? styles.tabActive : {})
                    }}
                  >
                    Visualization
                  </button>
                  <button
                    onClick={() => setActiveTab('calculation')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'calculation' ? styles.tabActive : {})
                    }}
                  >
                    Calculation
                  </button>
                </div>

                {activeTab === 'visualization' && (
                  <div style={styles.chart}>
                    <PDFVisualization 
                      a={calculations.a}
                      b={calculations.b}
                      expectedValue={calculations.expectedValue}
                      standardDeviation={calculations.standardDeviation}
                      pdfHeight={calculations.pdfHeight}
                    />
                  </div>
                )}

                {activeTab === 'calculation' && (
                  <div style={styles.calculationTab}>
                    <div style={styles.formulaBox}>
                      <div style={styles.formulaTitle}>Expected Value</div>
                      <div style={styles.formulaMain}>E(X) = (a + b) / 2</div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          a = {calculations.a}, b = {calculations.b}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          E(X) = ({calculations.a} + {calculations.b}) / 2
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>E(X) = {calculations.expectedValue.toFixed(4)}</strong>
                        </span>
                      </div>
                    </div>

                    <div style={styles.integralBox}>
                      <div style={styles.integralTitle}>Integration</div>
                      <div style={styles.integralStep}>
                        E(X) = ∫<sub>a</sub><sup>b</sup> x · f(x) dx
                      </div>
                      <div style={styles.integralStep}>
                        = (1/{calculations.range.toFixed(2)}) · [x²/2]<sub>{calculations.a}</sub><sup>{calculations.b}</sup>
                      </div>
                      <div style={styles.integralStep}>
                        <strong>= (a + b) / 2</strong>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why:</strong> Constant PDF means center of mass is at midpoint!
                    </div>
                  </div>
                )}
              </div>

              {/* REAL-WORLD EXAMPLES - Moved below visualization */}
              {realExample && (
                <div style={styles.examplesSection}>
                  <div style={styles.examplesHeader}>
                    <span style={styles.examplesIcon}>📊</span>
                    <span style={styles.examplesTitle}>{realExample.scenario}</span>
                  </div>
                  <ul style={styles.examplesList}>
                    {realExample.examples.map((example, index) => (
                      <li key={index} style={styles.exampleItem}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div style={styles.resultsPlaceholder}>
              <div style={styles.placeholderIcon}>E(X)</div>
              <p style={styles.placeholderText}>
                Enter valid: a &lt; b
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Continuous Uniform Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average value of the distribution - the &apos;center of mass&apos; 
              of the PDF. For uniform distributions, this is simply the midpoint of the interval [a, b].
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>The average value across the distribution is {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}</li>
              <li style={styles.li}>This equals the median and mode (all the same for uniform)</li>
              <li style={styles.li}>Values are evenly distributed around this center point</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Random number [0, 1]:</strong> E(X) = 0.5</li>
              <li style={styles.li}><strong style={styles.liStrong}>Arrival time [0, 60] min:</strong> E(X) = 30 minutes</li>
              <li style={styles.li}><strong style={styles.liStrong}>Temperature [20, 30]°C:</strong> E(X) = 25°C</li>
              <li style={styles.li}><strong style={styles.liStrong}>Duration [5, 15] sec:</strong> E(X) = 10 seconds</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = (a + b) / 2</h4>
            <p style={styles.p}>
              The continuous uniform distribution has constant probability density across [a, b]. 
              When you integrate x · f(x), you are finding the weighted average where all weights are equal. 
              This naturally gives you the midpoint. It is the same as averaging two numbers: (a + b) / 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// PDF Visualization Component
const PDFVisualization = ({ a, b, expectedValue, standardDeviation, pdfHeight }) => {
  const padding = (b - a) * 0.2;
  const xMin = a - padding;
  const xMax = b + padding;
  const xRange = xMax - xMin;
  
  // Calculate positions
  const aPos = ((a - xMin) / xRange) * 100;
  const bPos = ((b - xMin) / xRange) * 100;
  const evPos = ((expectedValue - xMin) / xRange) * 100;
  const minusSigmaPos = ((expectedValue - standardDeviation - xMin) / xRange) * 100;
  const plusSigmaPos = ((expectedValue + standardDeviation - xMin) / xRange) * 100;

  return (
    <div style={styles.pdfChart}>
      <div style={styles.chartTitle}>Probability Density Function with E(X) = {expectedValue.toFixed(2)}</div>
      
      <div style={styles.pdfContainer}>
        <div style={styles.yAxisLabelPDF}>Density</div>
        
        <div style={styles.pdfContent}>
          {/* Shaded region for ±σ */}
          {expectedValue - standardDeviation >= a && expectedValue + standardDeviation <= b && (
            <div 
              style={{
                ...styles.shadedRegion,
                left: `${minusSigmaPos}%`,
                width: `${plusSigmaPos - minusSigmaPos}%`
              }}
            />
          )}
          
          {/* Vertical line at E(X) */}
          <div 
            style={{
              ...styles.evLine,
              left: `${evPos}%`
            }}
          >
            <div style={styles.evLineLabel}>
              E(X) = {expectedValue.toFixed(2)}
            </div>
          </div>
          
          {/* PDF rectangle */}
          <div style={styles.pdfArea}>
            <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
              {/* Axes */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="#333" strokeWidth="2" />
              
              {/* PDF rectangle - flat top */}
              <rect 
                x={aPos * 10} 
                y="50" 
                width={(bPos - aPos) * 10} 
                height="200" 
                fill="rgba(0, 123, 255, 0.3)" 
                stroke="#007bff" 
                strokeWidth="3"
              />
              
              {/* Zero density outside [a,b] */}
              <line 
                x1="0" 
                y1="250" 
                x2={aPos * 10} 
                y2="250" 
                stroke="#007bff" 
                strokeWidth="3"
              />
              <line 
                x1={bPos * 10} 
                y1="250" 
                x2="1000" 
                y2="250" 
                stroke="#007bff" 
                strokeWidth="3"
              />
              
              {/* Vertical drops at a and b */}
              <line 
                x1={aPos * 10} 
                y1="50" 
                x2={aPos * 10} 
                y2="250" 
                stroke="#007bff" 
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <line 
                x1={bPos * 10} 
                y1="50" 
                x2={bPos * 10} 
                y2="250" 
                stroke="#007bff" 
                strokeWidth="3"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
          
          {/* X-axis labels */}
          <div style={styles.xAxisLabels}>
            <span style={{...styles.xLabel, left: `${aPos}%`}}>a = {a.toFixed(2)}</span>
            <span style={{...styles.xLabel, left: `${evPos}%`}}>E(X) = {expectedValue.toFixed(2)}</span>
            <span style={{...styles.xLabel, left: `${bPos}%`}}>b = {b.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div style={styles.pdfNote}>
        <strong>Note:</strong> The PDF is constant at height {pdfHeight.toFixed(4)} across [{a}, {b}]. 
        Total area under the curve = 1. 
        {expectedValue - standardDeviation >= a && expectedValue + standardDeviation <= b && 
          ` Shaded region shows E(X) ± σ (≈57.7% of distribution).`
        }
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
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  h4: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#495057',
  },
  intro: {
    background: '#f8f9fa',
    padding: '12px 15px',
    borderRadius: '8px',
    marginBottom: '15px',
    borderLeft: '4px solid #007bff',
  },
  introText: {
    margin: 0,
    lineHeight: 1.4,
    color: '#333',
    fontSize: '0.9rem',
  },
  keyInsight: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
    border: '2px solid #ffc107',
    padding: '12px 15px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: '0 2px 8px rgba(255,193,7,0.2)',
  },
  keyInsightIcon: {
    fontSize: '1.5rem',
    lineHeight: 1,
  },
  keyInsightContent: {
    flex: 1,
    fontSize: '0.9rem',
    lineHeight: 1.4,
    color: '#856404',
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '380px 1fr',
    gap: '20px',
    marginBottom: '40px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputSection: {
    padding: '15px',
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
    fontSize: '1rem',
    fontWeight: 600,
  },
  comparisonHigher: {
    color: '#28a745',
  },
  comparisonLower: {
    color: '#dc3545',
  },
  percentilesSection: {
    padding: '15px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
  },
  percentilesTable: {
    width: '100%',
  },
  percentileRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 0',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.85rem',
  },
  percentileLabel: {
    color: '#495057',
  },
  percentileValue: {
    fontWeight: 600,
    color: '#007bff',
    fontFamily: "'Courier New', monospace",
  },
  percentileNote: {
    marginTop: '15px',
    padding: '10px',
    background: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '0.85rem',
    color: '#004085',
    fontStyle: 'italic',
  },
  heroExpectedValue: {
    background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
  },
  heroLabel: {
    fontSize: '0.8rem',
    opacity: 0.9,
    marginBottom: '5px',
    fontWeight: 500,
  },
  heroValue: {
    fontSize: '2.2rem',
    fontWeight: 700,
    marginBottom: '6px',
    letterSpacing: '-1px',
  },
  heroFormula: {
    fontSize: '0.85rem',
    opacity: 0.9,
    marginBottom: '8px',
    fontFamily: "'Courier New', monospace",
  },
  heroInterpretation: {
    fontSize: '0.75rem',
    opacity: 0.95,
    padding: '6px 8px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '4px',
    lineHeight: 1.2,
  },
  examplesSection: {
    background: '#e7f3ff',
    border: '2px solid #007bff',
    borderRadius: '8px',
    padding: '10px 12px',
  },
  examplesHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '6px',
  },
  examplesIcon: {
    fontSize: '1rem',
  },
  examplesTitle: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#007bff',
  },
  examplesList: {
    margin: 0,
    paddingLeft: '16px',
  },
  exampleItem: {
    marginBottom: '4px',
    lineHeight: 1.25,
    color: '#495057',
    fontSize: '0.75rem',
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
    padding: '15px 15px 15px 50px',
    background: 'white',
  },
  chartTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  },
  calculationTab: {
    padding: '15px',
    background: 'white',
  },
  formulaBox: {
    padding: '15px',
    background: '#e7f3ff',
    borderRadius: '8px',
    marginBottom: '15px',
    border: '2px solid #007bff',
  },
  formulaTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#007bff',
    marginBottom: '8px',
  },
  formulaMain: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#007bff',
    marginBottom: '8px',
    fontFamily: "'Courier New', monospace",
  },
  formulaDescription: {
    fontSize: '0.95rem',
    color: '#495057',
    lineHeight: 1.6,
  },
  steps: {
    background: '#f8f9fa',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  stepTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#2c3e50',
  },
  step: {
    display: 'flex',
    gap: '10px',
    padding: '6px 0',
    borderBottom: '1px solid #e9ecef',
  },
  stepNumber: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#007bff',
    minWidth: '25px',
  },
  stepContent: {
    fontSize: '0.85rem',
    lineHeight: 1.4,
    color: '#333',
  },
  integralBox: {
    padding: '12px',
    background: '#fff3cd',
    border: '2px solid #ffc107',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  integralTitle: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#856404',
    marginBottom: '10px',
  },
  integralStep: {
    fontSize: '0.8rem',
    lineHeight: 1.6,
    color: '#856404',
    fontFamily: "'Courier New', monospace",
  },
  insightBox: {
    padding: '12px',
    background: '#d4edda',
    border: '1px solid #28a745',
    borderRadius: '4px',
    fontSize: '0.85rem',
    lineHeight: 1.4,
    color: '#155724',
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
  pdfChart: {
    width: '100%',
  },
  pdfContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  yAxisLabelPDF: {
    position: 'absolute',
    left: '-40px',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  pdfContent: {
    position: 'relative',
    marginLeft: '10px',
  },
  shadedRegion: {
    position: 'absolute',
    top: '50px',
    height: '200px',
    background: 'rgba(40, 167, 69, 0.15)',
    border: '2px dashed #28a745',
    zIndex: 5,
  },
  evLine: {
    position: 'absolute',
    top: 0,
    bottom: '60px',
    width: '3px',
    background: '#dc3545',
    zIndex: 10,
    boxShadow: '0 0 8px rgba(220,53,69,0.5)',
  },
  evLineLabel: {
    position: 'absolute',
    top: '20px',
    left: '8px',
    background: '#dc3545',
    color: 'white',
    padding: '6px 10px',
    borderRadius: '4px',
    fontWeight: 700,
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(220,53,69,0.3)',
  },
  pdfArea: {
    height: '300px',
    marginBottom: '10px',
  },
  xAxisLabels: {
    position: 'relative',
    height: '30px',
    marginTop: '10px',
  },
  xLabel: {
    position: 'absolute',
    transform: 'translateX(-50%)',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
    whiteSpace: 'nowrap',
  },
  pdfNote: {
    marginTop: '15px',
    padding: '12px',
    background: '#e7f3ff',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#004085',
    lineHeight: 1.6,
  },
};

export default ContinuousUniformExpectedValueCalculator;