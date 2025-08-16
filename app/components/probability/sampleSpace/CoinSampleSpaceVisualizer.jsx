// // import React, { useState, useMemo } from 'react';

// // const CoinSampleSpaceVisualizer = () => {
// //   const [numCoins, setNumCoins] = useState(3);
// //   const [highlightCondition, setHighlightCondition] = useState('none');
// //   const [headsCondition, setHeadsCondition] = useState('atLeast');
// //   const [headsCount, setHeadsCount] = useState(2);
// //   const [runLength, setRunLength] = useState(3);
// //   const [runType, setRunType] = useState('heads');
// //   const [showProbabilities, setShowProbabilities] = useState(true);

// //   // Generate all possible outcomes
// //   const sampleSpace = useMemo(() => {
// //     const outcomes = [];
// //     const totalOutcomes = Math.pow(2, numCoins);
    
// //     for (let i = 0; i < totalOutcomes; i++) {
// //       const outcome = [];
// //       for (let j = numCoins - 1; j >= 0; j--) {
// //         outcome.push((i >> j) & 1 ? 'H' : 'T');
// //       }
// //       outcomes.push(outcome);
// //     }
    
// //     return outcomes;
// //   }, [numCoins]);

// //   // Check if outcome matches highlight condition
// //   const shouldHighlight = (outcome) => {
// //     const headsCountInOutcome = outcome.filter(coin => coin === 'H').length;
// //     const tailsCount = numCoins - headsCountInOutcome;
    
// //     switch (highlightCondition) {
// //       case 'headsCount':
// //         return checkHeadsCondition(headsCountInOutcome);
// //       case 'runs':
// //         return hasRun(outcome, runLength, runType);
// //       case 'majority':
// //         return headsCountInOutcome > tailsCount;
// //       case 'equal':
// //         return headsCountInOutcome === tailsCount;
// //       case 'alternating':
// //         return isAlternating(outcome);
// //       case 'allSame':
// //         return new Set(outcome).size === 1;
// //       default:
// //         return false;
// //     }
// //   };

// //   // Check heads count condition
// //   const checkHeadsCondition = (count) => {
// //     switch (headsCondition) {
// //       case 'exactly':
// //         return count === headsCount;
// //       case 'atLeast':
// //         return count >= headsCount;
// //       case 'atMost':
// //         return count <= headsCount;
// //       case 'moreThan':
// //         return count > headsCount;
// //       case 'lessThan':
// //         return count < headsCount;
// //       default:
// //         return false;
// //     }
// //   };

// //   // Check for runs/streaks
// //   const hasRun = (outcome, length, type) => {
// //     const target = type === 'heads' ? 'H' : 'T';
// //     let currentRun = 0;
    
// //     for (let i = 0; i < outcome.length; i++) {
// //       if (outcome[i] === target) {
// //         currentRun++;
// //         if (currentRun >= length) {
// //           return true;
// //         }
// //       } else {
// //         currentRun = 0;
// //       }
// //     }
// //     return false;
// //   };

// //   // Check for alternating pattern
// //   const isAlternating = (outcome) => {
// //     if (outcome.length < 2) return false;
    
// //     for (let i = 1; i < outcome.length; i++) {
// //       if (outcome[i] === outcome[i - 1]) {
// //         return false;
// //       }
// //     }
// //     return true;
// //   };

// //   // Calculate statistics
// //   const totalOutcomes = sampleSpace.length;
// //   const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
// //   const probability = highlightedOutcomes.length / totalOutcomes;

// //   // Create coin visual
// //   const CoinVisual = ({ value, size = 35 }) => {
// //     const isHeads = value === 'H';
    
// //     return (
// //       <div 
// //         style={{
// //           width: size,
// //           height: size,
// //           border: '2px solid #333',
// //           borderRadius: '50%',
// //           backgroundColor: isHeads ? '#FFD700' : '#C0C0C0',
// //           display: 'inline-flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           margin: '2px',
// //           fontWeight: 'bold',
// //           fontSize: '14px',
// //           color: '#333'
// //         }}
// //       >
// //         {value}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// //       <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
// //         Coin Sample Space Visualizer
// //       </h2>
      
// //       {/* Controls */}
// //       <div style={{ 
// //         backgroundColor: '#f5f5f5', 
// //         padding: '20px', 
// //         borderRadius: '8px', 
// //         marginBottom: '20px',
// //         display: 'flex',
// //         flexWrap: 'wrap',
// //         gap: '15px',
// //         alignItems: 'center'
// //       }}>
// //         <div>
// //           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Coins:</label>
// //           <select 
// //             value={numCoins} 
// //             onChange={(e) => setNumCoins(parseInt(e.target.value))}
// //             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// //           >
// //             {[1, 2, 3, 4, 5, 6].map(n => (
// //               <option key={n} value={n}>{n}</option>
// //             ))}
// //           </select>
// //         </div>
        
// //         <div>
// //           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Highlight:</label>
// //           <select 
// //             value={highlightCondition} 
// //             onChange={(e) => setHighlightCondition(e.target.value)}
// //             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// //           >
// //             <option value="none">None</option>
// //             <option value="headsCount">Heads count</option>
// //             <option value="runs">Runs/Streaks</option>
// //             <option value="majority">More heads than tails</option>
// //             <option value="equal">Equal heads and tails</option>
// //             <option value="alternating">Alternating pattern</option>
// //             <option value="allSame">All same</option>
// //           </select>
// //         </div>
        
// //         {highlightCondition === 'headsCount' && (
// //           <>
// //             <div>
// //               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Condition:</label>
// //               <select 
// //                 value={headsCondition} 
// //                 onChange={(e) => setHeadsCondition(e.target.value)}
// //                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// //               >
// //                 <option value="exactly">Exactly</option>
// //                 <option value="atLeast">At least</option>
// //                 <option value="atMost">At most</option>
// //                 <option value="moreThan">More than</option>
// //                 <option value="lessThan">Less than</option>
// //               </select>
// //             </div>
            
// //             <div>
// //               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Count:</label>
// //               <input 
// //                 type="number" 
// //                 value={headsCount} 
// //                 onChange={(e) => setHeadsCount(parseInt(e.target.value))}
// //                 min={0}
// //                 max={numCoins}
// //                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// //               />
// //             </div>
// //           </>
// //         )}
        
// //         {highlightCondition === 'runs' && (
// //           <>
// //             <div>
// //               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Run type:</label>
// //               <select 
// //                 value={runType} 
// //                 onChange={(e) => setRunType(e.target.value)}
// //                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// //               >
// //                 <option value="heads">Heads</option>
// //                 <option value="tails">Tails</option>
// //               </select>
// //             </div>
            
// //             <div>
// //               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Length:</label>
// //               <input 
// //                 type="number" 
// //                 value={runLength} 
// //                 onChange={(e) => setRunLength(parseInt(e.target.value))}
// //                 min={2}
// //                 max={numCoins}
// //                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// //               />
// //             </div>
// //           </>
// //         )}
        
// //         <div>
// //           <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
// //             <input 
// //               type="checkbox" 
// //               checked={showProbabilities} 
// //               onChange={(e) => setShowProbabilities(e.target.checked)}
// //               style={{ marginRight: '8px' }}
// //             />
// //             Show Probabilities
// //           </label>
// //         </div>
// //       </div>

// //       {/* Statistics */}
// //       {highlightCondition !== 'none' && (
// //         <div style={{ 
// //           backgroundColor: '#e8f4fd', 
// //           padding: '15px', 
// //           borderRadius: '8px', 
// //           marginBottom: '20px',
// //           border: '1px solid #b3d9ff'
// //         }}>
// //           <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Probability Analysis</h3>
// //           <p style={{ margin: '5px 0' }}>
// //             <strong>Favorable outcomes:</strong> {highlightedOutcomes.length} out of {totalOutcomes}
// //           </p>
// //           <p style={{ margin: '5px 0' }}>
// //             <strong>Probability:</strong> {highlightedOutcomes.length}/{totalOutcomes} = {(probability * 100).toFixed(2)}%
// //           </p>
// //           <p style={{ margin: '5px 0' }}>
// //             <strong>Decimal:</strong> {probability.toFixed(4)}
// //           </p>
// //         </div>
// //       )}

// //       {/* Sample Space Display */}
// //       <div style={{ 
// //         backgroundColor: '#fff', 
// //         border: '1px solid #ddd', 
// //         borderRadius: '8px', 
// //         padding: '20px' 
// //       }}>
// //         <h3 style={{ marginTop: '0', color: '#333' }}>
// //           Sample Space ({totalOutcomes} total outcomes)
// //         </h3>
        
// //         <div style={{ 
// //           display: 'grid', 
// //           gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
// //           gap: '10px',
// //           padding: '10px'
// //         }}>
// //           {sampleSpace.map((outcome, index) => {
// //             const isHighlighted = shouldHighlight(outcome);
// //             const headsCountInOutcome = outcome.filter(coin => coin === 'H').length;
            
// //             return (
// //               <div
// //                 key={index}
// //                 style={{
// //                   padding: '10px',
// //                   border: '2px solid',
// //                   borderColor: isHighlighted ? '#4A90E2' : '#ddd',
// //                   borderRadius: '6px',
// //                   backgroundColor: isHighlighted ? '#E3F2FD' : '#fff',
// //                   textAlign: 'center',
// //                   transition: 'all 0.2s ease'
// //                 }}
// //               >
// //                 <div style={{ marginBottom: '8px' }}>
// //                   {outcome.map((value, i) => (
// //                     <CoinVisual key={i} value={value} size={30} />
// //                   ))}
// //                 </div>
// //                 {showProbabilities && (
// //                   <div style={{ fontSize: '12px', color: '#666' }}>
// //                     H: {headsCountInOutcome}, T: {numCoins - headsCountInOutcome}
// //                     <br />
// //                     P = 1/{totalOutcomes}
// //                   </div>
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoinSampleSpaceVisualizer;


// import React, { useState, useMemo } from 'react';

// function CoinSampleSpaceVisualizer() {
//   const [numCoins, setNumCoins] = useState(3);
//   const [highlightCondition, setHighlightCondition] = useState('none');
//   const [headsCondition, setHeadsCondition] = useState('atLeast');
//   const [headsCount, setHeadsCount] = useState(2);
//   const [runLength, setRunLength] = useState(3);
//   const [runType, setRunType] = useState('heads');
//   const [showProbabilities, setShowProbabilities] = useState(true);

//   // Generate all possible outcomes
//   const sampleSpace = useMemo(() => {
//     const outcomes = [];
//     const totalOutcomes = Math.pow(2, numCoins);
    
//     for (let i = 0; i < totalOutcomes; i++) {
//       const outcome = [];
//       for (let j = numCoins - 1; j >= 0; j--) {
//         outcome.push((i >> j) & 1 ? 'H' : 'T');
//       }
//       outcomes.push(outcome);
//     }
    
//     return outcomes;
//   }, [numCoins]);

//   // Check heads count condition
//   const checkHeadsCondition = (count) => {
//     switch (headsCondition) {
//       case 'exactly':
//         return count === headsCount;
//       case 'atLeast':
//         return count >= headsCount;
//       case 'atMost':
//         return count <= headsCount;
//       case 'moreThan':
//         return count > headsCount;
//       case 'lessThan':
//         return count < headsCount;
//       default:
//         return false;
//     }
//   };

//   // Check for runs/streaks
//   const hasRun = (outcome, length, type) => {
//     const target = type === 'heads' ? 'H' : 'T';
//     let currentRun = 0;
    
//     for (let i = 0; i < outcome.length; i++) {
//       if (outcome[i] === target) {
//         currentRun++;
//         if (currentRun >= length) {
//           return true;
//         }
//       } else {
//         currentRun = 0;
//       }
//     }
//     return false;
//   };

//   // Check for alternating pattern
//   const isAlternating = (outcome) => {
//     if (outcome.length < 2) return false;
    
//     for (let i = 1; i < outcome.length; i++) {
//       if (outcome[i] === outcome[i - 1]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   // Check if outcome matches highlight condition
//   const shouldHighlight = (outcome) => {
//     const headsCountInOutcome = outcome.filter(coin => coin === 'H').length;
//     const tailsCount = numCoins - headsCountInOutcome;
    
//     switch (highlightCondition) {
//       case 'headsCount':
//         return checkHeadsCondition(headsCountInOutcome);
//       case 'runs':
//         return hasRun(outcome, runLength, runType);
//       case 'majority':
//         return headsCountInOutcome > tailsCount;
//       case 'equal':
//         return headsCountInOutcome === tailsCount;
//       case 'alternating':
//         return isAlternating(outcome);
//       case 'allSame':
//         return new Set(outcome).size === 1;
//       default:
//         return false;
//     }
//   };

//   // Calculate statistics
//   const totalOutcomes = sampleSpace.length;
//   const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
//   const probability = highlightedOutcomes.length / totalOutcomes;

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
//         Coin Sample Space Visualizer
//       </h2>
      
//       {/* Controls */}
//       <div style={{ 
//         backgroundColor: '#f5f5f5', 
//         padding: '20px', 
//         borderRadius: '8px', 
//         marginBottom: '20px',
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '15px',
//         alignItems: 'center'
//       }}>
//         <div>
//           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Coins:</label>
//           <select 
//             value={numCoins} 
//             onChange={(e) => setNumCoins(parseInt(e.target.value))}
//             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
//           >
//             {[1, 2, 3, 4, 5, 6].map(n => (
//               <option key={n} value={n}>{n}</option>
//             ))}
//           </select>
//         </div>
        
//         <div>
//           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Highlight:</label>
//           <select 
//             value={highlightCondition} 
//             onChange={(e) => setHighlightCondition(e.target.value)}
//             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
//           >
//             <option value="none">None</option>
//             <option value="headsCount">Heads count</option>
//             <option value="runs">Runs/Streaks</option>
//             <option value="majority">More heads than tails</option>
//             <option value="equal">Equal heads and tails</option>
//             <option value="alternating">Alternating pattern</option>
//             <option value="allSame">All same</option>
//           </select>
//         </div>
        
//         {highlightCondition === 'headsCount' && (
//           <>
//             <div>
//               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Condition:</label>
//               <select 
//                 value={headsCondition} 
//                 onChange={(e) => setHeadsCondition(e.target.value)}
//                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
//               >
//                 <option value="exactly">Exactly</option>
//                 <option value="atLeast">At least</option>
//                 <option value="atMost">At most</option>
//                 <option value="moreThan">More than</option>
//                 <option value="lessThan">Less than</option>
//               </select>
//             </div>
            
//             <div>
//               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Count:</label>
//               <input 
//                 type="number" 
//                 value={headsCount} 
//                 onChange={(e) => setHeadsCount(parseInt(e.target.value))}
//                 min={0}
//                 max={numCoins}
//                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
//               />
//             </div>
//           </>
//         )}
        
//         {highlightCondition === 'runs' && (
//           <>
//             <div>
//               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Run type:</label>
//               <select 
//                 value={runType} 
//                 onChange={(e) => setRunType(e.target.value)}
//                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
//               >
//                 <option value="heads">Heads</option>
//                 <option value="tails">Tails</option>
//               </select>
//             </div>
            
//             <div>
//               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Length:</label>
//               <input 
//                 type="number" 
//                 value={runLength} 
//                 onChange={(e) => setRunLength(parseInt(e.target.value))}
//                 min={2}
//                 max={numCoins}
//                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
//               />
//             </div>
//           </>
//         )}
        
//         <div>
//           <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
//             <input 
//               type="checkbox" 
//               checked={showProbabilities} 
//               onChange={(e) => setShowProbabilities(e.target.checked)}
//               style={{ marginRight: '8px' }}
//             />
//             Show Probabilities
//           </label>
//         </div>
//       </div>

//       {/* Statistics */}
//       {highlightCondition !== 'none' && (
//         <div style={{ 
//           backgroundColor: '#e8f4fd', 
//           padding: '15px', 
//           borderRadius: '8px', 
//           marginBottom: '20px',
//           border: '1px solid #b3d9ff'
//         }}>
//           <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Probability Analysis</h3>
//           <p style={{ margin: '5px 0' }}>
//             <strong>Favorable outcomes:</strong> {highlightedOutcomes.length} out of {totalOutcomes}
//           </p>
//           <p style={{ margin: '5px 0' }}>
//             <strong>Probability:</strong> {highlightedOutcomes.length}/{totalOutcomes} = {(probability * 100).toFixed(2)}%
//           </p>
//           <p style={{ margin: '5px 0' }}>
//             <strong>Decimal:</strong> {probability.toFixed(4)}
//           </p>
//         </div>
//       )}

//       {/* Sample Space Display */}
//       <div style={{ 
//         backgroundColor: '#fff', 
//         border: '1px solid #ddd', 
//         borderRadius: '8px', 
//         padding: '20px' 
//       }}>
//         <h3 style={{ marginTop: '0', color: '#333' }}>
//           Sample Space ({totalOutcomes} total outcomes)
//         </h3>
        
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
//           gap: '10px',
//           padding: '10px'
//         }}>
//           {sampleSpace.map((outcome, index) => {
//             const isHighlighted = shouldHighlight(outcome);
//             const headsCountInOutcome = outcome.filter(coin => coin === 'H').length;
            
//             return (
//               <div
//                 key={index}
//                 style={{
//                   padding: '10px',
//                   border: '2px solid',
//                   borderColor: isHighlighted ? '#4A90E2' : '#ddd',
//                   borderRadius: '6px',
//                   backgroundColor: isHighlighted ? '#E3F2FD' : '#fff',
//                   textAlign: 'center',
//                   transition: 'all 0.2s ease'
//                 }}
//               >
//                 <div style={{ marginBottom: '8px' }}>
//                   {outcome.map((value, i) => (
//                     <div 
//                       key={i}
//                       style={{
//                         width: 30,
//                         height: 30,
//                         border: '2px solid #333',
//                         borderRadius: '50%',
//                         backgroundColor: value === 'H' ? '#FFD700' : '#C0C0C0',
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         margin: '2px',
//                         fontWeight: 'bold',
//                         fontSize: '14px',
//                         color: '#333'
//                       }}
//                     >
//                       {value}
//                     </div>
//                   ))}
//                 </div>
//                 {showProbabilities && (
//                   <div style={{ fontSize: '12px', color: '#666' }}>
//                     H: {headsCountInOutcome}, T: {numCoins - headsCountInOutcome}
//                     <br />
//                     P = 1/{totalOutcomes}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CoinSampleSpaceVisualizer;


import React, { useState, useMemo } from 'react';

function CoinSampleSpaceVisualizer() {
  const [numCoins, setNumCoins] = useState(3);
  const [highlightCondition, setHighlightCondition] = useState('none');
  const [headsCondition, setHeadsCondition] = useState('atLeast');
  const [headsCount, setHeadsCount] = useState(2);
  const [runLength, setRunLength] = useState(3);
  const [runType, setRunType] = useState('heads');
  const [showProbabilities, setShowProbabilities] = useState(true);

  // Generate all possible outcomes
  const sampleSpace = useMemo(() => {
    const outcomes = [];
    const totalOutcomes = Math.pow(2, numCoins);
    
    for (let i = 0; i < totalOutcomes; i++) {
      const outcome = [];
      for (let j = numCoins - 1; j >= 0; j--) {
        outcome.push((i >> j) & 1 ? 'H' : 'T');
      }
      outcomes.push(outcome);
    }
    
    return outcomes;
  }, [numCoins]);

  // Check heads count condition
  const checkHeadsCondition = (count) => {
    switch (headsCondition) {
      case 'exactly':
        return count === headsCount;
      case 'atLeast':
        return count >= headsCount;
      case 'atMost':
        return count <= headsCount;
      case 'moreThan':
        return count > headsCount;
      case 'lessThan':
        return count < headsCount;
      default:
        return false;
    }
  };

  // Check for runs/streaks
  const hasRun = (outcome, length, type) => {
    const target = type === 'heads' ? 'H' : 'T';
    let currentRun = 0;
    
    for (let i = 0; i < outcome.length; i++) {
      if (outcome[i] === target) {
        currentRun++;
        if (currentRun >= length) {
          return true;
        }
      } else {
        currentRun = 0;
      }
    }
    return false;
  };

  // Check for alternating pattern
  const isAlternating = (outcome) => {
    if (outcome.length < 2) return false;
    
    for (let i = 1; i < outcome.length; i++) {
      if (outcome[i] === outcome[i - 1]) {
        return false;
      }
    }
    return true;
  };

  // Check if outcome matches highlight condition
  const shouldHighlight = (outcome) => {
    const headsCountInOutcome = outcome.filter(coin => coin === 'H').length;
    const tailsCount = numCoins - headsCountInOutcome;
    
    switch (highlightCondition) {
      case 'headsCount':
        return checkHeadsCondition(headsCountInOutcome);
      case 'runs':
        return hasRun(outcome, runLength, runType);
      case 'majority':
        return headsCountInOutcome > tailsCount;
      case 'tailsMajority':
        return tailsCount > headsCountInOutcome;
      case 'equal':
        return headsCountInOutcome === tailsCount;
      case 'alternating':
        return isAlternating(outcome);
      case 'allSame':
        return new Set(outcome).size === 1;
      default:
        return false;
    }
  };

  // Calculate statistics
  const totalOutcomes = sampleSpace.length;
  const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
  const probability = highlightedOutcomes.length / totalOutcomes;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Coin Sample Space Visualizer
      </h2>
      
      {/* Controls */}
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        alignItems: 'center'
      }}>
        <div>
          <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Coins:</label>
          <select 
            value={numCoins} 
            onChange={(e) => setNumCoins(parseInt(e.target.value))}
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Highlight:</label>
          <select 
            value={highlightCondition} 
            onChange={(e) => setHighlightCondition(e.target.value)}
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="none">None</option>
            <option value="headsCount">Heads count</option>
            <option value="runs">Runs/Streaks</option>
            <option value="majority">More heads than tails</option>
            <option value="tailsMajority">More tails than heads</option>
            <option value="equal">Equal heads and tails</option>
            <option value="alternating">Alternating pattern</option>
            <option value="allSame">All same</option>
          </select>
        </div>
        
        {highlightCondition === 'headsCount' && (
          <>
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Condition:</label>
              <select 
                value={headsCondition} 
                onChange={(e) => setHeadsCondition(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value="exactly">Exactly</option>
                <option value="atLeast">At least</option>
                <option value="atMost">At most</option>
                <option value="moreThan">More than</option>
                <option value="lessThan">Less than</option>
              </select>
            </div>
            
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Count:</label>
              <input 
                type="number" 
                value={headsCount} 
                onChange={(e) => setHeadsCount(parseInt(e.target.value))}
                min={0}
                max={numCoins}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
              />
            </div>
          </>
        )}
        
        {highlightCondition === 'runs' && (
          <>
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Run type:</label>
              <select 
                value={runType} 
                onChange={(e) => setRunType(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value="heads">Heads</option>
                <option value="tails">Tails</option>
              </select>
            </div>
            
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Length:</label>
              <input 
                type="number" 
                value={runLength} 
                onChange={(e) => setRunLength(parseInt(e.target.value))}
                min={2}
                max={numCoins}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
              />
            </div>
          </>
        )}
        
        <div>
          <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <input 
              type="checkbox" 
              checked={showProbabilities} 
              onChange={(e) => setShowProbabilities(e.target.checked)}
              style={{ marginRight: '8px' }}
            />
            Show Probabilities
          </label>
        </div>
      </div>

      {/* Statistics */}
      {highlightCondition !== 'none' && (
        <div style={{ 
          backgroundColor: '#e8f4fd', 
          padding: '15px', 
          borderRadius: '8px', 
          marginBottom: '20px',
          border: '1px solid #b3d9ff'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Probability Analysis</h3>
          <p style={{ margin: '5px 0' }}>
            <strong>Favorable outcomes:</strong> {highlightedOutcomes.length} out of {totalOutcomes}
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Probability:</strong> {highlightedOutcomes.length}/{totalOutcomes} = {(probability * 100).toFixed(2)}%
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Decimal:</strong> {probability.toFixed(4)}
          </p>
        </div>
      )}

      {/* Sample Space Display */}
      <div style={{ 
        backgroundColor: '#fff', 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '20px' 
      }}>
        <h3 style={{ marginTop: '0', color: '#333' }}>
          Sample Space ({totalOutcomes} total outcomes)
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
          gap: '10px',
          padding: '10px'
        }}>
          {sampleSpace.map((outcome, index) => {
            const isHighlighted = shouldHighlight(outcome);
            const headsCountInOutcome = outcome.filter(coin => coin === 'H').length;
            
            return (
              <div
                key={index}
                style={{
                  padding: '10px',
                  border: '2px solid',
                  borderColor: isHighlighted ? '#4A90E2' : '#ddd',
                  borderRadius: '6px',
                  backgroundColor: isHighlighted ? '#E3F2FD' : '#fff',
                  textAlign: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ marginBottom: '8px' }}>
                  {outcome.map((value, i) => (
                    <div 
                      key={i}
                      style={{
                        width: 30,
                        height: 30,
                        border: '2px solid #333',
                        borderRadius: '50%',
                        backgroundColor: value === 'H' ? '#FFD700' : '#C0C0C0',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '2px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        color: '#333'
                      }}
                    >
                      {value}
                    </div>
                  ))}
                </div>
                {showProbabilities && (
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    H: {headsCountInOutcome}, T: {numCoins - headsCountInOutcome}
                    <br />
                    P = 1/{totalOutcomes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoinSampleSpaceVisualizer;