// // // // import React from 'react';

// // // // const styles = {
// // // //   container: {
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: '6px',
// // // //     border: '1px solid #ddd',
// // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // //     overflow: 'hidden',
// // // //     marginTop: '15px'
// // // //   },
// // // //   header: {
// // // //     padding: '12px 15px',
// // // //     backgroundColor: '#f5f5f5',
// // // //     borderBottom: '1px solid #ddd'
// // // //   },
// // // //   headerTitle: {
// // // //     margin: 0,
// // // //     fontSize: '16px',
// // // //     fontWeight: 'bold',
// // // //     color: '#333'
// // // //   },
// // // //   content: {
// // // //     padding: '15px',
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap',
// // // //     gap: '15px'
// // // //   },
// // // //   calcBox: {
// // // //     flex: '1 1 300px',
// // // //     padding: '12px',
// // // //     backgroundColor: '#f8f9ff',
// // // //     border: '1px solid #e0e0e0',
// // // //     borderRadius: '4px'
// // // //   },
// // // //   formula: {
// // // //     marginBottom: '8px',
// // // //     fontFamily: 'monospace',
// // // //     fontSize: '14px',
// // // //     color: '#666'
// // // //   },
// // // //   result: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     padding: '8px',
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: '4px',
// // // //     border: '1px solid #e0e0e0'
// // // //   },
// // // //   value: {
// // // //     fontWeight: 'bold',
// // // //     color: '#2196F3'
// // // //   },
// // // //   noSelection: {
// // // //     padding: '20px',
// // // //     textAlign: 'center',
// // // //     color: '#666'
// // // //   }
// // // // };

// // // // const calculateUnion = (probabilities, events) => {
// // // //   const { aAndB, aAndNotB, notAAndB, notAAndNotB } = probabilities;
// // // //   const pA = aAndB + aAndNotB;
// // // //   const pB = aAndB + notAAndB;
// // // //   return pA + pB - aAndB;
// // // // };

// // // // const calculateConditional = (probabilities, condition, given) => {
// // // //   const { aAndB, aAndNotB, notAAndB, notAAndNotB } = probabilities;
// // // //   const pAandB = aAndB;
// // // //   const pB = aAndB + notAAndB;
// // // //   return pAandB / pB;
// // // // };

// // // // const calculateOdds = (probabilities, event) => {
// // // //   const { aAndB, aAndNotB, notAAndB, notAAndNotB } = probabilities;
// // // //   const pA = aAndB + aAndNotB;
// // // //   const pNotA = notAAndB + notAAndNotB;
// // // //   return pA / pNotA;
// // // // };

// // // // const CalculationsDisplay = ({ 
// // // //   probabilities, 
// // // //   selectedOperations = [],
// // // //   width = '700px' 
// // // // }) => {
// // // //   if (!probabilities || selectedOperations.length === 0) {
// // // //     return (
// // // //       <div style={{ ...styles.container, width }}>
// // // //         <div style={styles.header}>
// // // //           <h3 style={styles.headerTitle}>Calculations Results</h3>
// // // //         </div>
// // // //         <div style={styles.noSelection}>
// // // //           Select operations to display calculations
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const getCalculation = (opId) => {
// // // //     switch(opId) {
// // // //       case 'AuB':
// // // //         return {
// // // //           formula: 'P(A ∪ B) = P(A) + P(B) - P(A∩B)',
// // // //           value: calculateUnion(probabilities).toFixed(3)
// // // //         };
// // // //       case 'AgivenB':
// // // //         return {
// // // //           formula: 'P(A|B) = P(A∩B)/P(B)',
// // // //           value: calculateConditional(probabilities, 'A', 'B').toFixed(3)
// // // //         };
// // // //       case 'oddsA':
// // // //         return {
// // // //           formula: 'Odds(A) = P(A)/P(Ā)',
// // // //           value: calculateOdds(probabilities, 'A').toFixed(3)
// // // //         };
// // // //       // Add other calculations...
// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ ...styles.container, width }}>
// // // //       <div style={styles.header}>
// // // //         <h3 style={styles.headerTitle}>Calculations Results</h3>
// // // //       </div>
// // // //       <div style={styles.content}>
// // // //         {selectedOperations.map(opId => {
// // // //           const calc = getCalculation(opId);
// // // //           if (!calc) return null;

// // // //           return (
// // // //             <div key={opId} style={styles.calcBox}>
// // // //               <div style={styles.formula}>{calc.formula}</div>
// // // //               <div style={styles.result}>
// // // //                 <span>Result:</span>
// // // //                 <span style={styles.value}>{calc.value}</span>
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CalculationsDisplay;
// // // import React from 'react';

// // // const styles = {
// // //   container: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: '6px',
// // //     border: '1px solid #ddd',
// // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // //     overflow: 'hidden',
// // //     marginTop: '15px'
// // //   },
// // //   header: {
// // //     padding: '12px 15px',
// // //     backgroundColor: '#f5f5f5',
// // //     borderBottom: '1px solid #ddd'
// // //   },
// // //   headerTitle: {
// // //     margin: 0,
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //     color: '#333'
// // //   },
// // //   content: {
// // //     padding: '15px',
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '15px'
// // //   },
// // //   calcBox: {
// // //     flex: '1 1 300px',
// // //     padding: '12px',
// // //     backgroundColor: '#f8f9ff',
// // //     border: '1px solid #e0e0e0',
// // //     borderRadius: '4px'
// // //   },
// // //   formula: {
// // //     marginBottom: '8px',
// // //     fontFamily: 'monospace',
// // //     fontSize: '14px',
// // //     color: '#666'
// // //   },
// // //   explanation: {
// // //     fontSize: '12px',
// // //     color: '#1976d2',
// // //     backgroundColor: '#e3f2fd',
// // //     padding: '8px',
// // //     borderRadius: '4px',
// // //     marginBottom: '8px'
// // //   },
// // //   result: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     padding: '8px',
// // //     backgroundColor: '#fff',
// // //     borderRadius: '4px',
// // //     border: '1px solid #e0e0e0'
// // //   },
// // //   value: {
// // //     fontWeight: 'bold',
// // //     color: '#2196F3'
// // //   },
// // //   noSelection: {
// // //     padding: '20px',
// // //     textAlign: 'center',
// // //     color: '#666'
// // //   }
// // // };

// // // const calculations = {
// // //   AuB: {
// // //     formula: 'P(A ∪ B) = P(A) + P(B) - P(A∩B)',
// // //     explanation: 'Union shows probability of either A or B (or both) occurring. Adding individual probabilities and subtracting intersection to avoid double counting.',
// // //     calculate: (p) => p.aAndB + p.aAndNotB + p.notAAndB - p.aAndB
// // //   },
// // //   AgivenB: {
// // //     formula: 'P(A|B) = P(A∩B)/P(B)',
// // //     explanation: 'Conditional probability shows likelihood of A occurring given that B has occurred. Calculated by dividing joint probability by probability of condition.',
// // //     calculate: (p) => p.aAndB / (p.aAndB + p.notAAndB)
// // //   },
// // //   BgivenA: {
// // //     formula: 'P(B|A) = P(A∩B)/P(A)',
// // //     explanation: 'Conditional probability shows likelihood of B occurring given that A has occurred. Calculated by dividing joint probability by probability of condition.',
// // //     calculate: (p) => p.aAndB / (p.aAndB + p.aAndNotB)
// // //   },
// // //   oddsA: {
// // //     formula: 'Odds(A) = P(A)/P(Ā)',
// // //     explanation: 'Odds represent the ratio of probability of A occurring to probability of A not occurring. Values above 1 indicate A is more likely than not.',
// // //     calculate: (p) => (p.aAndB + p.aAndNotB) / (p.notAAndB + p.notAAndNotB)
// // //   },
// // //   indepTest: {
// // //     formula: 'P(A∩B) = P(A)×P(B) if independent',
// // //     explanation: 'Independence test compares actual joint probability with product of individual probabilities. If equal, events are independent.',
// // //     calculate: (p) => ({
// // //       actual: p.aAndB,
// // //       expected: (p.aAndB + p.aAndNotB) * (p.aAndB + p.notAAndB)
// // //     })
// // //   }
// // // };

// // // const CalculationsDisplay = ({ 
// // //   probabilities, 
// // //   selectedOperations = [],
// // //   width = '700px' 
// // // }) => {
// // //   if (!probabilities || selectedOperations.length === 0) {
// // //     return (
// // //       <div style={{ ...styles.container, width }}>
// // //         <div style={styles.header}>
// // //           <h3 style={styles.headerTitle}>Calculations Results</h3>
// // //         </div>
// // //         <div style={styles.noSelection}>
// // //           Select operations to display calculations
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const formatValue = (value) => {
// // //     if (typeof value === 'object') {
// // //       return `Actual: ${value.actual.toFixed(3)}, Expected: ${value.expected.toFixed(3)}`;
// // //     }
// // //     return value.toFixed(3);
// // //   };

// // //   return (
// // //     <div style={{ ...styles.container, width }}>
// // //       <div style={styles.header}>
// // //         <h3 style={styles.headerTitle}>Calculations Results</h3>
// // //       </div>
// // //       <div style={styles.content}>
// // //         {selectedOperations.map(opId => {
// // //           const calc = calculations[opId];
// // //           if (!calc) return null;

// // //           const result = calc.calculate(probabilities);

// // //           return (
// // //             <div key={opId} style={styles.calcBox}>
// // //               <div style={styles.explanation}>{calc.explanation}</div>
// // //               <div style={styles.formula}>{calc.formula}</div>
// // //               <div style={styles.result}>
// // //                 <span>Result:</span>
// // //                 <span style={styles.value}>{formatValue(result)}</span>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CalculationsDisplay;


// // import React, { useState } from 'react';

// // const styles = {
// //   container: {
// //     backgroundColor: '#fff',
// //     borderRadius: '6px',
// //     border: '1px solid #ddd',
// //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// //     overflow: 'hidden',
// //     marginTop: '15px'
// //   },
// //   header: {
// //     padding: '12px 15px',
// //     backgroundColor: '#f5f5f5',
// //     borderBottom: '1px solid #ddd'
// //   },
// //   headerTitle: {
// //     margin: 0,
// //     fontSize: '16px',
// //     fontWeight: 'bold',
// //     color: '#333'
// //   },
// //   content: {
// //     padding: '15px',
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '15px'
// //   },
// //   calcBox: {
// //     flex: '1 1 300px',
// //     padding: '12px',
// //     backgroundColor: '#f8f9ff',
// //     border: '1px solid #e0e0e0',
// //     borderRadius: '4px'
// //   },
// //   formula: {
// //     marginBottom: '8px',
// //     fontFamily: 'monospace',
// //     fontSize: '14px',
// //     color: '#666'
// //   },
// //   result: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '8px',
// //     backgroundColor: '#fff',
// //     borderRadius: '4px',
// //     border: '1px solid #e0e0e0',
// //     marginBottom: '8px'
// //   },
// //   resultMain: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     flex: 1
// //   },
// //   value: {
// //     fontWeight: 'bold',
// //     color: '#2196F3'
// //   },
// //   infoIcon: {
// //     width: '20px',
// //     height: '20px',
// //     borderRadius: '50%',
// //     backgroundColor: '#e3f2fd',
// //     border: '1px solid #90caf9',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     cursor: 'pointer',
// //     color: '#1976d2',
// //     fontSize: '14px',
// //     position: 'relative'
// //   },
// //   tooltip: {
// //     position: 'absolute',
// //     top: '-30px',
// //     right: '0',
// //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// //     color: '#fff',
// //     padding: '4px 8px',
// //     borderRadius: '4px',
// //     fontSize: '12px',
// //     whiteSpace: 'nowrap',
// //     visibility: 'hidden',
// //     opacity: 0,
// //     transition: 'opacity 0.2s, visibility 0.2s'
// //   },
// //   explanationWrapper: {
// //     maxHeight: 0,
// //     overflow: 'hidden',
// //     transition: 'max-height 0.3s ease-out',
// //     position: 'relative',
// //     backgroundColor: '#e3f2fd'
// //   },
// //   explanationWrapperOpen: {
// //     maxHeight: '200px'
// //   },
// //   explanation: {
// //     fontSize: '14px',
// //     color: '#1976d2',
// //     padding: '12px',
// //     paddingTop: '20px'
// //   },
// //   closeButton: {
// //     position: 'absolute',
// //     top: '8px',
// //     left: '8px',
// //     padding: '4px 8px',
// //     fontSize: '14px',
// //     backgroundColor: 'transparent',
// //     border: 'none',
// //     cursor: 'pointer',
// //     color: '#666'
// //   },
// //   noSelection: {
// //     padding: '20px',
// //     textAlign: 'center',
// //     color: '#666'
// //   }
// // };

// // const calculations = {
// //   AuB: {
// //     formula: 'P(A ∪ B) = P(A) + P(B) - P(A∩B)',
// //     explanation: 'Union shows probability of either A or B (or both) occurring. Adding individual probabilities and subtracting intersection to avoid double counting.',
// //     calculate: (p) => p.aAndB + p.aAndNotB + p.notAAndB - p.aAndB
// //   },
// //   AgivenB: {
// //     formula: 'P(A|B) = P(A∩B)/P(B)',
// //     explanation: 'Conditional probability shows likelihood of A occurring given that B has occurred. Calculated by dividing joint probability by probability of condition.',
// //     calculate: (p) => p.aAndB / (p.aAndB + p.notAAndB)
// //   },
// //   BgivenA: {
// //     formula: 'P(B|A) = P(A∩B)/P(A)',
// //     explanation: 'Conditional probability shows likelihood of B occurring given that A has occurred. Calculated by dividing joint probability by probability of condition.',
// //     calculate: (p) => p.aAndB / (p.aAndB + p.aAndNotB)
// //   },
// //   oddsA: {
// //     formula: 'Odds(A) = P(A)/P(Ā)',
// //     explanation: 'Odds represent the ratio of probability of A occurring to probability of A not occurring. Values above 1 indicate A is more likely than not.',
// //     calculate: (p) => (p.aAndB + p.aAndNotB) / (p.notAAndB + p.notAAndNotB)
// //   },
// //   indepTest: {
// //     formula: 'P(A∩B) = P(A)×P(B) if independent',
// //     explanation: 'Independence test compares actual joint probability with product of individual probabilities. If equal, events are independent.',
// //     calculate: (p) => ({
// //       actual: p.aAndB,
// //       expected: (p.aAndB + p.aAndNotB) * (p.aAndB + p.notAAndB)
// //     })
// //   }
// // };

// // const CalculationBox = ({ calculation, result }) => {
// //   const [isExplanationVisible, setIsExplanationVisible] = useState(false);
// //   const [showTooltip, setShowTooltip] = useState(false);

// //   return (
// //     <div style={styles.calcBox}>
// //       <div style={styles.formula}>{calculation.formula}</div>
// //       <div style={styles.result}>
// //         <div style={styles.resultMain}>
// //           <span>Result:</span>
// //           <span style={styles.value}>
// //             {typeof result === 'object' 
// //               ? `Actual: ${result.actual.toFixed(3)}, Expected: ${result.expected.toFixed(3)}`
// //               : result.toFixed(3)}
// //           </span>
// //         </div>
// //         <div 
// //           style={styles.infoIcon}
// //           onClick={() => setIsExplanationVisible(!isExplanationVisible)}
// //           onMouseEnter={() => setShowTooltip(true)}
// //           onMouseLeave={() => setShowTooltip(false)}
// //         >
// //           {isExplanationVisible ? '−' : '?'}
// //           <div style={{
// //             ...styles.tooltip,
// //             visibility: showTooltip ? 'visible' : 'hidden',
// //             opacity: showTooltip ? 1 : 0
// //           }}>
// //             Click to see explanation
// //           </div>
// //         </div>
// //       </div>
// //       <div style={{
// //         ...styles.explanationWrapper,
// //         ...(isExplanationVisible ? styles.explanationWrapperOpen : {})
// //       }}>
// //         <button 
// //           style={styles.closeButton}
// //           onClick={() => setIsExplanationVisible(false)}
// //         >
// //           ×
// //         </button>
// //         <div style={styles.explanation}>
// //           {calculation.explanation}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const CalculationsDisplay = ({ 
// //   probabilities, 
// //   selectedOperations = [],
// //   width = '700px' 
// // }) => {
// //   if (!probabilities || selectedOperations.length === 0) {
// //     return (
// //       <div style={{ ...styles.container, width }}>
// //         <div style={styles.header}>
// //           <h3 style={styles.headerTitle}>Calculations Results</h3>
// //         </div>
// //         <div style={styles.noSelection}>
// //           Select operations to display calculations
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{ ...styles.container, width }}>
// //       <div style={styles.header}>
// //         <h3 style={styles.headerTitle}>Calculations Results</h3>
// //       </div>
// //       <div style={styles.content}>
// //         {selectedOperations.map(opId => {
// //           const calc = calculations[opId];
// //           if (!calc) return null;

// //           const result = calc.calculate(probabilities);

// //           return (
// //             <CalculationBox 
// //               key={opId}
// //               calculation={calc}
// //               result={result}
// //             />
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CalculationsDisplay;

// import React, { useState } from 'react';

// const styles = {
//   container: {
//     backgroundColor: '#fff',
//     borderRadius: '6px',
//     border: '1px solid #ddd',
//     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     marginTop: '15px'
//   },
//   header: {
//     padding: '12px 15px',
//     backgroundColor: '#f5f5f5',
//     borderBottom: '1px solid #ddd'
//   },
//   headerTitle: {
//     margin: 0,
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#333'
//   },
//   content: {
//     padding: '15px',
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '15px'
//   },
//   calcBox: {
//     flex: '1 1 300px',
//     padding: '12px',
//     backgroundColor: '#f8f9ff',
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px'
//   },
//   formula: {
//     marginBottom: '8px',
//     fontFamily: 'monospace',
//     fontSize: '14px',
//     color: '#666'
//   },
//   result: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '8px',
//     backgroundColor: '#fff',
//     borderRadius: '4px',
//     border: '1px solid #e0e0e0',
//     marginBottom: '8px'
//   },
//   resultMain: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     flex: 1
//   },
//   value: {
//     fontWeight: 'bold',
//     color: '#2196F3'
//   },
//   infoIcon: {
//     width: '20px',
//     height: '20px',
//     borderRadius: '50%',
//     backgroundColor: '#e3f2fd',
//     border: '1px solid #90caf9',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     color: '#1976d2',
//     fontSize: '14px',
//     position: 'relative'
//   },
//   explanationWrapper: {
//     maxHeight: 0,
//     overflow: 'hidden',
//     transition: 'max-height 0.3s ease-out',
//     position: 'relative',
//     backgroundColor: '#e3f2fd'
//   },
//   explanationWrapperOpen: {
//     maxHeight: '200px'
//   },
//   explanation: {
//     fontSize: '14px',
//     color: '#1976d2',
//     padding: '12px',
//     paddingTop: '20px'
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '8px',
//     left: '8px',
//     padding: '4px 8px',
//     fontSize: '14px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     color: '#666'
//   }
// };

// const CalculationsDisplay = ({ calculationResults }) => {
//   if (!calculationResults || calculationResults.length === 0) {
//     return (
//       <div style={styles.container}>
//         <div style={styles.header}>
//           <h3 style={styles.headerTitle}>Calculation Results</h3>
//         </div>
//         <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
//           No calculations performed yet
//         </div>
//       </div>
//     );
//   }

//   const [expandedResults, setExpandedResults] = useState({});

//   const toggleExplanation = (id) => {
//     setExpandedResults(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const getResultDisplay = (result) => {
//     if (typeof result === 'object') {
//       return (
//         <div>
//           <div>Actual: {result.actual.toFixed(3)}</div>
//           <div>Expected: {result.expected.toFixed(3)}</div>
//           <div>Verdict: {Math.abs(result.actual - result.expected) < 0.0001 ? 'Independent' : 'Dependent'}</div>
//         </div>
//       );
//     }
//     return result.toFixed(3);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h3 style={styles.headerTitle}>Calculation Results</h3>
//       </div>
//       <div style={styles.content}>
//         {calculationResults.map(({ id, result }) => (
//           <div key={id} style={styles.calcBox}>
//             <div style={styles.result}>
//               <div style={styles.resultMain}>
//                 <span>Result:</span>
//                 <span style={styles.value}>{getResultDisplay(result)}</span>
//               </div>
//               <div 
//                 style={styles.infoIcon}
//                 onClick={() => toggleExplanation(id)}
//               >
//                 {expandedResults[id] ? '−' : '+'}
//               </div>
//             </div>
//             <div style={{
//               ...styles.explanationWrapper,
//               ...(expandedResults[id] ? styles.explanationWrapperOpen : {})
//             }}>
//               {expandedResults[id] && (
//                 <>
//                   <button 
//                     style={styles.closeButton}
//                     onClick={() => toggleExplanation(id)}
//                   >
//                     ×
//                   </button>
//                   <div style={styles.explanation}>
//                     <div>{id} = {result}</div>
//                     {typeof result === 'object' && (
//                       <div>
//                         Difference: {Math.abs(result.actual - result.expected).toFixed(3)}
//                       </div>
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalculationsDisplay;

// import React, { useState } from 'react';

// const styles = {
//   container: {
//     backgroundColor: '#fff',
//     borderRadius: '6px',
//     border: '1px solid #ddd',
//     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     marginTop: '15px'
//   },
//   header: {
//     padding: '12px 15px',
//     backgroundColor: '#f5f5f5',
//     borderBottom: '1px solid #ddd'
//   },
//   headerTitle: {
//     margin: 0,
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#333'
//   },
//   content: {
//     padding: '15px',
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '15px'
//   },
//   calcBox: {
//     flex: '1 1 300px',
//     padding: '12px',
//     backgroundColor: '#f8f9ff',
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px'
//   },
//   formula: {
//     marginBottom: '8px',
//     fontFamily: 'monospace',
//     fontSize: '14px',
//     color: '#666'
//   },
//   label: {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: '8px'
//   },
//   result: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '8px',
//     backgroundColor: '#fff',
//     borderRadius: '4px',
//     border: '1px solid #e0e0e0',
//     marginBottom: '8px'
//   },
//   resultMain: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     flex: 1
//   },
//   value: {
//     fontWeight: 'bold',
//     color: '#2196F3'
//   },
//   infoIcon: {
//     width: '20px',
//     height: '20px',
//     borderRadius: '50%',
//     backgroundColor: '#e3f2fd',
//     border: '1px solid #90caf9',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     color: '#1976d2',
//     fontSize: '14px',
//     position: 'relative'
//   },
//   tooltip: {
//     position: 'absolute',
//     top: '-30px',
//     right: '0',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     color: '#fff',
//     padding: '4px 8px',
//     borderRadius: '4px',
//     fontSize: '12px',
//     whiteSpace: 'nowrap',
//     visibility: 'hidden',
//     opacity: 0,
//     transition: 'opacity 0.2s, visibility 0.2s'
//   },
//   explanationWrapper: {
//     maxHeight: 0,
//     overflow: 'hidden',
//     transition: 'max-height 0.3s ease-out',
//     position: 'relative',
//     backgroundColor: '#e3f2fd'
//   },
//   explanationWrapperOpen: {
//     maxHeight: '200px'
//   },
//   explanation: {
//     fontSize: '14px',
//     color: '#1976d2',
//     padding: '12px',
//     paddingTop: '20px'
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '8px',
//     left: '8px',
//     padding: '4px 8px',
//     fontSize: '14px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     color: '#666'
//   },
//   noSelection: {
//     padding: '20px',
//     textAlign: 'center',
//     color: '#666'
//   }
// };

// const operations = {
//   AuB: {
//     label: 'P(A ∪ B)',
//     formula: 'P(A ∪ B) = P(A) + P(B) - P(A∩B)',
//     explanation: 'Union shows probability of either A or B (or both) occurring. Result represents the chance that at least one of the events happens. Calculated by adding individual probabilities and subtracting intersection to avoid counting overlap twice.',
//     calculate: (p) => p.aAndB + p.aAndNotB + p.notAAndB - p.aAndB
//   },
//   AuNotB: {
//     label: 'P(A ∪ B̄)',
//     formula: 'P(A ∪ B̄) = P(A) + P(B̄) - P(A∩B̄)',
//     explanation: 'Union of A with complement of B. Shows probability of either A occurring or B not occurring (or both). Calculated similarly to regular union but using complement probability for B.',
//     calculate: (p) => p.aAndB + p.aAndNotB + p.notAAndNotB - p.aAndNotB
//   },
//   NotAuB: {
//     label: 'P(Ā ∪ B)',
//     formula: 'P(Ā ∪ B) = P(Ā) + P(B) - P(Ā∩B)',
//     explanation: 'Union of complement of A with B. Shows probability of either A not occurring or B occurring (or both). Calculated using complement probability for A.',
//     calculate: (p) => p.notAAndB + p.notAAndNotB + p.aAndB - p.notAAndB
//   },
//   AgivenB: {
//     label: 'P(A|B)',
//     formula: 'P(A|B) = P(A∩B)/P(B)',
//     explanation: 'Conditional probability shows likelihood of A occurring when B is known to have occurred. Result is the proportion of B cases where A also occurs. Calculated by dividing joint probability by probability of the condition.',
//     calculate: (p) => p.aAndB / (p.aAndB + p.notAAndB)
//   },
//   BgivenA: {
//     label: 'P(B|A)',
//     formula: 'P(B|A) = P(A∩B)/P(A)',
//     explanation: 'Conditional probability shows likelihood of B occurring when A is known to have occurred. Result is the proportion of A cases where B also occurs. Calculated by dividing joint probability by probability of the condition.',
//     calculate: (p) => p.aAndB / (p.aAndB + p.aAndNotB)
//   },
//   indepTest: {
//     label: 'Independence Test',
//     formula: 'P(A∩B) = P(A)×P(B) if independent',
//     explanation: 'Tests whether events A and B are independent. Compares actual joint probability with expected probability if events were independent. If actual equals expected (or very close), events are independent. Significant difference indicates dependence.',
//     calculate: (p) => {
//       const pA = p.aAndB + p.aAndNotB;
//       const pB = p.aAndB + p.notAAndB;
//       return {
//         actual: p.aAndB,
//         expected: pA * pB
//       };
//     }
//   },
//   oddsA: {
//     label: 'Odds of A',
//     formula: 'Odds(A) = P(A)/P(Ā)',
//     explanation: 'Odds represent how much more likely event A is to occur than not occur. Result above 1 means A is more likely to happen than not. Result below 1 means A is less likely to happen than not.',
//     calculate: (p) => (p.aAndB + p.aAndNotB) / (p.notAAndB + p.notAAndNotB)
//   },
//   oddsB: {
//     label: 'Odds of B',
//     formula: 'Odds(B) = P(B)/P(B̄)',
//     explanation: 'Odds represent how much more likely event B is to occur than not occur. Result above 1 means B is more likely to happen than not. Result below 1 means B is less likely to happen than not.',
//     calculate: (p) => (p.aAndB + p.notAAndB) / (p.aAndNotB + p.notAAndNotB)
//   }
// };

// const CalculationBox = ({ operation, result }) => {
//   const [isExplanationVisible, setIsExplanationVisible] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);

//   return (
//     <div style={styles.calcBox}>
//       <div style={styles.label}>{operation.label}</div>
//       <div style={styles.formula}>{operation.formula}</div>
//       <div style={styles.result}>
//         <div style={styles.resultMain}>
//           <span>Result:</span>
//           <span style={styles.value}>
//             {typeof result === 'object' 
//               ? `Actual: ${result.actual.toFixed(3)}, Expected: ${result.expected.toFixed(3)}`
//               : result.toFixed(3)}
//           </span>
//         </div>
//         <div 
//           style={styles.infoIcon}
//           onClick={() => setIsExplanationVisible(!isExplanationVisible)}
//           onMouseEnter={() => setShowTooltip(true)}
//           onMouseLeave={() => setShowTooltip(false)}
//         >
//           {isExplanationVisible ? '−' : '?'}
//           <div style={{
//             ...styles.tooltip,
//             visibility: showTooltip ? 'visible' : 'hidden',
//             opacity: showTooltip ? 1 : 0
//           }}>
//             Click to see explanation
//           </div>
//         </div>
//       </div>
//       <div style={{
//         ...styles.explanationWrapper,
//         ...(isExplanationVisible ? styles.explanationWrapperOpen : {})
//       }}>
//         <button 
//           style={styles.closeButton}
//           onClick={() => setIsExplanationVisible(false)}
//         >
//           ×
//         </button>
//         <div style={styles.explanation}>
//           {operation.explanation}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CalculationsDisplay = ({ 
//   calculationResults,
//   width = '700px'
// }) => {
//   if (!calculationResults || calculationResults.length === 0) {
//     return (
//       <div style={{ ...styles.container, width }}>
//         <div style={styles.header}>
//           <h3 style={styles.headerTitle}>Calculations Results</h3>
//         </div>
//         <div style={styles.noSelection}>
//           Select operations and click Calculate to see results
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ ...styles.container, width }}>
//       <div style={styles.header}>
//         <h3 style={styles.headerTitle}>Calculations Results</h3>
//       </div>
//       <div style={styles.content}>
//         {calculationResults.map(({ id, result }) => {
//           const operation = operations[id];
//           if (!operation) return null;

//           return (
//             <CalculationBox 
//               key={id}
//               operation={operation}
//               result={result}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CalculationsDisplay;
import React, { useState } from 'react';
import probabilityOperations from './probabilityOperations';

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginTop: '15px'
  },
  header: {
    padding: '12px 15px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd'
  },
  headerTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    padding: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px'
  },
  calcBox: {
    flex: '1 1 300px',
    padding: '12px',
    backgroundColor: '#f8f9ff',
    border: '1px solid #e0e0e0',
    borderRadius: '4px'
  },
  formula: {
    marginBottom: '8px',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#666'
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px'
  },
  result: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
    marginBottom: '8px'
  },
  resultMain: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: 1
  },
  value: {
    fontWeight: 'bold',
    color: '#2196F3'
  },
  infoIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#e3f2fd',
    border: '1px solid #90caf9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#1976d2',
    fontSize: '14px',
    position: 'relative'
  },
  tooltip: {
    position: 'absolute',
    top: '-30px',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 0.2s, visibility 0.2s'
  },
  explanationWrapper: {
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-out',
    position: 'relative',
    backgroundColor: '#e3f2fd'
  },
  explanationWrapperOpen: {
    maxHeight: '200px'
  },
  explanation: {
    fontSize: '14px',
    color: '#1976d2',
    padding: '12px',
    paddingTop: '20px'
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    padding: '4px 8px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#666'
  },
  noSelection: {
    padding: '20px',
    textAlign: 'center',
    color: '#666'
  }
};

const CalculationBox = ({ operation, result }) => {
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div style={styles.calcBox}>
      <div style={styles.label}>{operation.label}</div>
      <div style={styles.formula}>{operation.formula}</div>
      <div style={styles.result}>
        <div style={styles.resultMain}>
          <span>Result:</span>
          <span style={styles.value}>
            {typeof result === 'object' 
              ? `Actual: ${result.actual.toFixed(3)}, Expected: ${result.expected.toFixed(3)}`
              : result.toFixed(3)}
          </span>
        </div>
        <div 
          style={styles.infoIcon}
          onClick={() => setIsExplanationVisible(!isExplanationVisible)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {isExplanationVisible ? '−' : '?'}
          <div style={{
            ...styles.tooltip,
            visibility: showTooltip ? 'visible' : 'hidden',
            opacity: showTooltip ? 1 : 0
          }}>
            Click to see explanation
          </div>
        </div>
      </div>
      <div style={{
        ...styles.explanationWrapper,
        ...(isExplanationVisible ? styles.explanationWrapperOpen : {})
      }}>
        <button 
          style={styles.closeButton}
          onClick={() => setIsExplanationVisible(false)}
        >
          ×
        </button>
        <div style={styles.explanation}>
          {operation.explanation}
        </div>
      </div>
    </div>
  );
};

const CalculationsDisplay = ({ 
  calculationResults,
  width = '650px'
}) => {
  if (!calculationResults || calculationResults.length === 0) {
    return (
      <div style={{ ...styles.container, width }}>
        <div style={styles.header}>
          <h3 style={styles.headerTitle}>Calculations Results</h3>
        </div>
        <div style={styles.noSelection}>
          Select operations and click Calculate to see results
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...styles.container, width }}>
      <div style={styles.header}>
        <h3 style={styles.headerTitle}>Calculations Results</h3>
      </div>
      <div style={styles.content}>
        {calculationResults.map(({ id, result }) => {
          const operation = probabilityOperations[id];
          if (!operation) return null;

          return (
            <CalculationBox 
              key={id}
              operation={operation}
              result={result}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalculationsDisplay;