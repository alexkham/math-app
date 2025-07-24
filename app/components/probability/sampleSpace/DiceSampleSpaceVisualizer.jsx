// // // // import React, { useState, useMemo } from 'react';

// // // // const DiceSampleSpaceVisualizer = () => {
// // // //   const [numDice, setNumDice] = useState(2);
// // // //   const [diceSides] = useState(6);
// // // //   const [highlightCondition, setHighlightCondition] = useState('none');
// // // //   const [sumCondition, setSumCondition] = useState('equals');
// // // //   const [customSum, setCustomSum] = useState(7);
// // // //   const [sumRangeMin, setSumRangeMin] = useState(7);
// // // //   const [sumRangeMax, setSumRangeMax] = useState(10);
// // // //   const [sumMultiple, setSumMultiple] = useState(3);
// // // //   const [showProbabilities, setShowProbabilities] = useState(true);

// // // //   // Generate all possible outcomes
// // // //   const sampleSpace = useMemo(() => {
// // // //     const outcomes = [];
    
// // // //     const generateOutcomes = (currentOutcome, remainingDice) => {
// // // //       if (remainingDice === 0) {
// // // //         outcomes.push([...currentOutcome]);
// // // //         return;
// // // //       }
      
// // // //       for (let i = 1; i <= diceSides; i++) {
// // // //         generateOutcomes([...currentOutcome, i], remainingDice - 1);
// // // //       }
// // // //     };
    
// // // //     generateOutcomes([], numDice);
// // // //     return outcomes;
// // // //   }, [numDice, diceSides]);

// // // //   // Check if outcome matches highlight condition
// // // //   const shouldHighlight = (outcome) => {
// // // //     const sum = outcome.reduce((a, b) => a + b, 0);
// // // //     const hasDoubles = new Set(outcome).size < outcome.length;
// // // //     const allSame = new Set(outcome).size === 1;
    
// // // //     switch (highlightCondition) {
// // // //       case 'sumIs':
// // // //         return checkSumCondition(sum);
// // // //       case 'doubles':
// // // //         return hasDoubles;
// // // //       case 'allSame':
// // // //         return allSame;
// // // //       case 'even':
// // // //         return sum % 2 === 0;
// // // //       case 'odd':
// // // //         return sum % 2 === 1;
// // // //       default:
// // // //         return false;
// // // //     }
// // // //   };

// // // //   // Check sum condition based on selected type
// // // //   const checkSumCondition = (sum) => {
// // // //     switch (sumCondition) {
// // // //       case 'equals':
// // // //         return sum === customSum;
// // // //       case 'greaterThan':
// // // //         return sum > customSum;
// // // //       case 'lessThan':
// // // //         return sum < customSum;
// // // //       case 'between':
// // // //         return sum >= sumRangeMin && sum <= sumRangeMax;
// // // //       case 'prime':
// // // //         return isPrime(sum);
// // // //       case 'perfectSquare':
// // // //         return isPerfectSquare(sum);
// // // //       case 'multipleOf':
// // // //         return sum % sumMultiple === 0;
// // // //       default:
// // // //         return false;
// // // //     }
// // // //   };

// // // //   // Helper function to check if number is prime
// // // //   const isPrime = (num) => {
// // // //     if (num < 2) return false;
// // // //     for (let i = 2; i <= Math.sqrt(num); i++) {
// // // //       if (num % i === 0) return false;
// // // //     }
// // // //     return true;
// // // //   };

// // // //   // Helper function to check if number is perfect square
// // // //   const isPerfectSquare = (num) => {
// // // //     const sqrt = Math.sqrt(num);
// // // //     return sqrt === Math.floor(sqrt);
// // // //   };

// // // //   // Calculate statistics
// // // //   const totalOutcomes = sampleSpace.length;
// // // //   const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
// // // //   const probability = highlightedOutcomes.length / totalOutcomes;

// // // //   // Create dice visual
// // // //   const DiceVisual = ({ value, size = 40 }) => {
// // // //     const dots = [];
// // // //     const dotPositions = {
// // // //       1: [[50, 50]],
// // // //       2: [[25, 25], [75, 75]],
// // // //       3: [[25, 25], [50, 50], [75, 75]],
// // // //       4: [[25, 25], [75, 25], [25, 75], [75, 75]],
// // // //       5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
// // // //       6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
// // // //     };

// // // //     const positions = dotPositions[value] || [];
    
// // // //     return (
// // // //       <div 
// // // //         style={{
// // // //           width: size,
// // // //           height: size,
// // // //           border: '2px solid #333',
// // // //           borderRadius: '6px',
// // // //           backgroundColor: '#fff',
// // // //           position: 'relative',
// // // //           display: 'inline-block',
// // // //           margin: '2px'
// // // //         }}
// // // //       >
// // // //         {positions.map((pos, i) => (
// // // //           <div
// // // //             key={i}
// // // //             style={{
// // // //               position: 'absolute',
// // // //               left: `${pos[0]}%`,
// // // //               top: `${pos[1]}%`,
// // // //               width: '6px',
// // // //               height: '6px',
// // // //               backgroundColor: '#333',
// // // //               borderRadius: '50%',
// // // //               transform: 'translate(-50%, -50%)'
// // // //             }}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // //       <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
// // // //         Dice Sample Space Visualizer
// // // //       </h2>
      
// // // //       {/* Controls */}
// // // //       <div style={{ 
// // // //         backgroundColor: '#f5f5f5', 
// // // //         padding: '20px', 
// // // //         borderRadius: '8px', 
// // // //         marginBottom: '20px',
// // // //         display: 'flex',
// // // //         flexWrap: 'wrap',
// // // //         gap: '15px',
// // // //         alignItems: 'center'
// // // //       }}>
// // // //         <div>
// // // //           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Dice:</label>
// // // //           <select 
// // // //             value={numDice} 
// // // //             onChange={(e) => setNumDice(parseInt(e.target.value))}
// // // //             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// // // //           >
// // // //             {[1, 2, 3, 4].map(n => (
// // // //               <option key={n} value={n}>{n}</option>
// // // //             ))}
// // // //           </select>
// // // //         </div>
        

        
// // // //         <div>
// // // //           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Highlight:</label>
// // // //           <select 
// // // //             value={highlightCondition} 
// // // //             onChange={(e) => setHighlightCondition(e.target.value)}
// // // //             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// // // //           >
// // // //             <option value="none">None</option>
// // // //             <option value="sumIs">Sum is...</option>
// // // //             <option value="doubles">Any Doubles</option>
// // // //             <option value="allSame">All Same</option>
// // // //             <option value="even">Even Sum</option>
// // // //             <option value="odd">Odd Sum</option>
// // // //           </select>
// // // //         </div>
        
// // // //         {highlightCondition === 'sumIs' && (
// // // //           <>
// // // //             <div>
// // // //               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Sum Condition:</label>
// // // //               <select 
// // // //                 value={sumCondition} 
// // // //                 onChange={(e) => setSumCondition(e.target.value)}
// // // //                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// // // //               >
// // // //                 <option value="equals">Equals</option>
// // // //                 <option value="greaterThan">Greater than</option>
// // // //                 <option value="lessThan">Less than</option>
// // // //                 <option value="between">Between</option>
// // // //                 <option value="prime">Prime number</option>
// // // //                 <option value="perfectSquare">Perfect square</option>
// // // //                 <option value="multipleOf">Multiple of</option>
// // // //               </select>
// // // //             </div>
            
// // // //             {(sumCondition === 'equals' || sumCondition === 'greaterThan' || sumCondition === 'lessThan') && (
// // // //               <div>
// // // //                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Value:</label>
// // // //                 <input 
// // // //                   type="number" 
// // // //                   value={customSum} 
// // // //                   onChange={(e) => setCustomSum(parseInt(e.target.value))}
// // // //                   min={numDice}
// // // //                   max={numDice * diceSides}
// // // //                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // // //                 />
// // // //               </div>
// // // //             )}
            
// // // //             {sumCondition === 'between' && (
// // // //               <>
// // // //                 <div>
// // // //                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Min:</label>
// // // //                   <input 
// // // //                     type="number" 
// // // //                     value={sumRangeMin} 
// // // //                     onChange={(e) => setSumRangeMin(parseInt(e.target.value))}
// // // //                     min={numDice}
// // // //                     max={numDice * diceSides}
// // // //                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Max:</label>
// // // //                   <input 
// // // //                     type="number" 
// // // //                     value={sumRangeMax} 
// // // //                     onChange={(e) => setSumRangeMax(parseInt(e.target.value))}
// // // //                     min={numDice}
// // // //                     max={numDice * diceSides}
// // // //                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // // //                   />
// // // //                 </div>
// // // //               </>
// // // //             )}
            
// // // //             {sumCondition === 'multipleOf' && (
// // // //               <div>
// // // //                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Multiple of:</label>
// // // //                 <input 
// // // //                   type="number" 
// // // //                   value={sumMultiple} 
// // // //                   onChange={(e) => setSumMultiple(parseInt(e.target.value))}
// // // //                   min={2}
// // // //                   max={10}
// // // //                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // // //                 />
// // // //               </div>
// // // //             )}
// // // //           </>
// // // //         )}
        
// // // //         <div>
// // // //           <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
// // // //             <input 
// // // //               type="checkbox" 
// // // //               checked={showProbabilities} 
// // // //               onChange={(e) => setShowProbabilities(e.target.checked)}
// // // //               style={{ marginRight: '8px' }}
// // // //             />
// // // //             Show Probabilities
// // // //           </label>
// // // //         </div>
// // // //       </div>

// // // //       {/* Statistics */}
// // // //       {highlightCondition !== 'none' && (
// // // //         <div style={{ 
// // // //           backgroundColor: '#e8f4fd', 
// // // //           padding: '15px', 
// // // //           borderRadius: '8px', 
// // // //           marginBottom: '20px',
// // // //           border: '1px solid #b3d9ff'
// // // //         }}>
// // // //           <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Probability Analysis</h3>
// // // //           <p style={{ margin: '5px 0' }}>
// // // //             <strong>Favorable outcomes:</strong> {highlightedOutcomes.length} out of {totalOutcomes}
// // // //           </p>
// // // //           <p style={{ margin: '5px 0' }}>
// // // //             <strong>Probability:</strong> {highlightedOutcomes.length}/{totalOutcomes} = {(probability * 100).toFixed(2)}%
// // // //           </p>
// // // //           <p style={{ margin: '5px 0' }}>
// // // //             <strong>Decimal:</strong> {probability.toFixed(4)}
// // // //           </p>
// // // //         </div>
// // // //       )}

// // // //       {/* Sample Space Display */}
// // // //       <div style={{ 
// // // //         backgroundColor: '#fff', 
// // // //         border: '1px solid #ddd', 
// // // //         borderRadius: '8px', 
// // // //         padding: '20px' 
// // // //       }}>
// // // //         <h3 style={{ marginTop: '0', color: '#333' }}>
// // // //           Sample Space ({totalOutcomes} total outcomes)
// // // //         </h3>
        
// // // //         <div style={{ 
// // // //           display: 'grid', 
// // // //           gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
// // // //           gap: '10px',
// // // //           maxHeight: '400px',
// // // //           overflowY: 'auto',
// // // //           padding: '10px'
// // // //         }}>
// // // //           {sampleSpace.map((outcome, index) => {
// // // //             const isHighlighted = shouldHighlight(outcome);
// // // //             const sum = outcome.reduce((a, b) => a + b, 0);
            
// // // //             return (
// // // //               <div
// // // //                 key={index}
// // // //                 style={{
// // // //                   padding: '10px',
// // // //                   border: '2px solid',
// // // //                   borderColor: isHighlighted ? '#4A90E2' : '#ddd',
// // // //                   borderRadius: '6px',
// // // //                   backgroundColor: isHighlighted ? '#E3F2FD' : '#fff',
// // // //                   textAlign: 'center',
// // // //                   transition: 'all 0.2s ease'
// // // //                 }}
// // // //               >
// // // //                 <div style={{ marginBottom: '8px' }}>
// // // //                   {outcome.map((value, i) => (
// // // //                     <DiceVisual key={i} value={value} size={30} />
// // // //                   ))}
// // // //                 </div>
// // // //                 {showProbabilities && (
// // // //                   <div style={{ fontSize: '12px', color: '#666' }}>
// // // //                     Sum: {sum}
// // // //                     <br />
// // // //                     P = 1/{totalOutcomes}
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DiceSampleSpaceVisualizer;


// // // import React, { useState, useMemo } from 'react';

// // // const DiceSampleSpaceVisualizer = () => {
// // //   const [numDice, setNumDice] = useState(2);
// // //   const [diceSides] = useState(6);
// // //   const [highlightCondition, setHighlightCondition] = useState('none');
// // //   const [sumCondition, setSumCondition] = useState('equals');
// // //   const [customSum, setCustomSum] = useState(7);
// // //   const [sumRangeMin, setSumRangeMin] = useState(7);
// // //   const [sumRangeMax, setSumRangeMax] = useState(10);
// // //   const [sumMultiple, setSumMultiple] = useState(3);
// // //   const [showProbabilities, setShowProbabilities] = useState(true);

// // //   // Generate all possible outcomes
// // //   const sampleSpace = useMemo(() => {
// // //     const outcomes = [];
    
// // //     const generateOutcomes = (currentOutcome, remainingDice) => {
// // //       if (remainingDice === 0) {
// // //         outcomes.push([...currentOutcome]);
// // //         return;
// // //       }
      
// // //       for (let i = 1; i <= diceSides; i++) {
// // //         generateOutcomes([...currentOutcome, i], remainingDice - 1);
// // //       }
// // //     };
    
// // //     generateOutcomes([], numDice);
// // //     return outcomes;
// // //   }, [numDice, diceSides]);

// // //   // Check if outcome matches highlight condition
// // //   const shouldHighlight = (outcome) => {
// // //     const sum = outcome.reduce((a, b) => a + b, 0);
// // //     const hasDoubles = new Set(outcome).size < outcome.length;
// // //     const allSame = new Set(outcome).size === 1;
    
// // //     switch (highlightCondition) {
// // //       case 'sumIs':
// // //         return checkSumCondition(sum);
// // //       case 'doubles':
// // //         return hasDoubles;
// // //       case 'allSame':
// // //         return allSame;
// // //       case 'even':
// // //         return sum % 2 === 0;
// // //       case 'odd':
// // //         return sum % 2 === 1;
// // //       default:
// // //         return false;
// // //     }
// // //   };

// // //   // Check sum condition based on selected type
// // //   const checkSumCondition = (sum) => {
// // //     switch (sumCondition) {
// // //       case 'equals':
// // //         return sum === customSum;
// // //       case 'greaterThan':
// // //         return sum > customSum;
// // //       case 'lessThan':
// // //         return sum < customSum;
// // //       case 'between':
// // //         return sum >= sumRangeMin && sum <= sumRangeMax;
// // //       case 'prime':
// // //         return isPrime(sum);
// // //       case 'perfectSquare':
// // //         return isPerfectSquare(sum);
// // //       case 'multipleOf':
// // //         return sum % sumMultiple === 0;
// // //       default:
// // //         return false;
// // //     }
// // //   };

// // //   // Helper function to check if number is prime
// // //   const isPrime = (num) => {
// // //     if (num < 2) return false;
// // //     for (let i = 2; i <= Math.sqrt(num); i++) {
// // //       if (num % i === 0) return false;
// // //     }
// // //     return true;
// // //   };

// // //   // Helper function to check if number is perfect square
// // //   const isPerfectSquare = (num) => {
// // //     const sqrt = Math.sqrt(num);
// // //     return sqrt === Math.floor(sqrt);
// // //   };

// // //   // Calculate statistics
// // //   const totalOutcomes = sampleSpace.length;
// // //   const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
// // //   const probability = highlightedOutcomes.length / totalOutcomes;

// // //   // Create dice visual
// // //   const DiceVisual = ({ value, size = 40 }) => {
// // //     const dots = [];
// // //     const dotPositions = {
// // //       1: [[50, 50]],
// // //       2: [[25, 25], [75, 75]],
// // //       3: [[25, 25], [50, 50], [75, 75]],
// // //       4: [[25, 25], [75, 25], [25, 75], [75, 75]],
// // //       5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
// // //       6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
// // //     };

// // //     const positions = dotPositions[value] || [];
    
// // //     return (
// // //       <div 
// // //         style={{
// // //           width: size,
// // //           height: size,
// // //           border: '2px solid #333',
// // //           borderRadius: '6px',
// // //           backgroundColor: '#fff',
// // //           position: 'relative',
// // //           display: 'inline-block',
// // //           margin: '2px'
// // //         }}
// // //       >
// // //         {positions.map((pos, i) => (
// // //           <div
// // //             key={i}
// // //             style={{
// // //               position: 'absolute',
// // //               left: `${pos[0]}%`,
// // //               top: `${pos[1]}%`,
// // //               width: '6px',
// // //               height: '6px',
// // //               backgroundColor: '#333',
// // //               borderRadius: '50%',
// // //               transform: 'translate(-50%, -50%)'
// // //             }}
// // //           />
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // //       <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
// // //         Dice Sample Space Visualizer
// // //       </h2>
      
// // //       {/* Controls */}
// // //       <div style={{ 
// // //         backgroundColor: '#f5f5f5', 
// // //         padding: '20px', 
// // //         borderRadius: '8px', 
// // //         marginBottom: '20px',
// // //         display: 'flex',
// // //         flexWrap: 'wrap',
// // //         gap: '15px',
// // //         alignItems: 'center'
// // //       }}>
// // //         <div>
// // //           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Dice:</label>
// // //           <select 
// // //             value={numDice} 
// // //             onChange={(e) => setNumDice(parseInt(e.target.value))}
// // //             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// // //           >
// // //             {[1, 2, 3, 4].map(n => (
// // //               <option key={n} value={n}>{n}</option>
// // //             ))}
// // //           </select>
// // //         </div>
        

        
// // //         <div>
// // //           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Highlight:</label>
// // //           <select 
// // //             value={highlightCondition} 
// // //             onChange={(e) => setHighlightCondition(e.target.value)}
// // //             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// // //           >
// // //             <option value="none">None</option>
// // //             <option value="sumIs">Sum is...</option>
// // //             <option value="doubles">Any Doubles</option>
// // //             <option value="allSame">All Same</option>
// // //             <option value="even">Even Sum</option>
// // //             <option value="odd">Odd Sum</option>
// // //           </select>
// // //         </div>
        
// // //         {highlightCondition === 'sumIs' && (
// // //           <>
// // //             <div>
// // //               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Sum Condition:</label>
// // //               <select 
// // //                 value={sumCondition} 
// // //                 onChange={(e) => setSumCondition(e.target.value)}
// // //                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// // //               >
// // //                 <option value="equals">Equals</option>
// // //                 <option value="greaterThan">Greater than</option>
// // //                 <option value="lessThan">Less than</option>
// // //                 <option value="between">Between</option>
// // //                 <option value="prime">Prime number</option>
// // //                 <option value="perfectSquare">Perfect square</option>
// // //                 <option value="multipleOf">Multiple of</option>
// // //               </select>
// // //             </div>
            
// // //             {(sumCondition === 'equals' || sumCondition === 'greaterThan' || sumCondition === 'lessThan') && (
// // //               <div>
// // //                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Value:</label>
// // //                 <input 
// // //                   type="number" 
// // //                   value={customSum} 
// // //                   onChange={(e) => setCustomSum(parseInt(e.target.value))}
// // //                   min={numDice}
// // //                   max={numDice * diceSides}
// // //                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // //                 />
// // //               </div>
// // //             )}
            
// // //             {sumCondition === 'between' && (
// // //               <>
// // //                 <div>
// // //                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Min:</label>
// // //                   <input 
// // //                     type="number" 
// // //                     value={sumRangeMin} 
// // //                     onChange={(e) => setSumRangeMin(parseInt(e.target.value))}
// // //                     min={numDice}
// // //                     max={numDice * diceSides}
// // //                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Max:</label>
// // //                   <input 
// // //                     type="number" 
// // //                     value={sumRangeMax} 
// // //                     onChange={(e) => setSumRangeMax(parseInt(e.target.value))}
// // //                     min={numDice}
// // //                     max={numDice * diceSides}
// // //                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // //                   />
// // //                 </div>
// // //               </>
// // //             )}
            
// // //             {sumCondition === 'multipleOf' && (
// // //               <div>
// // //                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Multiple of:</label>
// // //                 <input 
// // //                   type="number" 
// // //                   value={sumMultiple} 
// // //                   onChange={(e) => setSumMultiple(parseInt(e.target.value))}
// // //                   min={2}
// // //                   max={10}
// // //                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// // //                 />
// // //               </div>
// // //             )}
// // //           </>
// // //         )}
        
// // //         <div>
// // //           <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
// // //             <input 
// // //               type="checkbox" 
// // //               checked={showProbabilities} 
// // //               onChange={(e) => setShowProbabilities(e.target.checked)}
// // //               style={{ marginRight: '8px' }}
// // //             />
// // //             Show Probabilities
// // //           </label>
// // //         </div>
// // //       </div>

// // //       {/* Statistics */}
// // //       {highlightCondition !== 'none' && (
// // //         <div style={{ 
// // //           backgroundColor: '#e8f4fd', 
// // //           padding: '15px', 
// // //           borderRadius: '8px', 
// // //           marginBottom: '20px',
// // //           border: '1px solid #b3d9ff'
// // //         }}>
// // //           <h3 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Probability Analysis</h3>
// // //           <p style={{ margin: '5px 0' }}>
// // //             <strong>Favorable outcomes:</strong> {highlightedOutcomes.length} out of {totalOutcomes}
// // //           </p>
// // //           <p style={{ margin: '5px 0' }}>
// // //             <strong>Probability:</strong> {highlightedOutcomes.length}/{totalOutcomes} = {(probability * 100).toFixed(2)}%
// // //           </p>
// // //           <p style={{ margin: '5px 0' }}>
// // //             <strong>Decimal:</strong> {probability.toFixed(4)}
// // //           </p>
// // //         </div>
// // //       )}

// // //       {/* Sample Space Display */}
// // //       <div style={{ 
// // //         backgroundColor: '#fff', 
// // //         border: '1px solid #ddd', 
// // //         borderRadius: '8px', 
// // //         padding: '20px' 
// // //       }}>
// // //         <h3 style={{ marginTop: '0', color: '#333' }}>
// // //           Sample Space ({totalOutcomes} total outcomes)
// // //         </h3>
        
// // //         <div style={{ 
// // //           display: 'grid', 
// // //           gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
// // //           gap: '10px',
// // //           padding: '10px'
// // //         }}>
// // //           {sampleSpace.map((outcome, index) => {
// // //             const isHighlighted = shouldHighlight(outcome);
// // //             const sum = outcome.reduce((a, b) => a + b, 0);
            
// // //             return (
// // //               <div
// // //                 key={index}
// // //                 style={{
// // //                   padding: '10px',
// // //                   border: '2px solid',
// // //                   borderColor: isHighlighted ? '#4A90E2' : '#ddd',
// // //                   borderRadius: '6px',
// // //                   backgroundColor: isHighlighted ? '#E3F2FD' : '#fff',
// // //                   textAlign: 'center',
// // //                   transition: 'all 0.2s ease'
// // //                 }}
// // //               >
// // //                 <div style={{ marginBottom: '8px' }}>
// // //                   {outcome.map((value, i) => (
// // //                     <DiceVisual key={i} value={value} size={30} />
// // //                   ))}
// // //                 </div>
// // //                 {showProbabilities && (
// // //                   <div style={{ fontSize: '12px', color: '#666' }}>
// // //                     Sum: {sum}
// // //                     <br />
// // //                     P = 1/{totalOutcomes}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DiceSampleSpaceVisualizer;


// // import React, { useState, useMemo } from 'react';

// // const DiceSampleSpaceVisualizer = () => {
// //   const [numDice, setNumDice] = useState(2);
// //   const [diceSides] = useState(6);
// //   const [highlightCondition, setHighlightCondition] = useState('none');
// //   const [sumCondition, setSumCondition] = useState('equals');
// //   const [customSum, setCustomSum] = useState(7);
// //   const [sumRangeMin, setSumRangeMin] = useState(7);
// //   const [sumRangeMax, setSumRangeMax] = useState(10);
// //   const [sumMultiple, setSumMultiple] = useState(3);
// //   const [showProbabilities, setShowProbabilities] = useState(true);

// //   // Generate all possible outcomes
// //   const sampleSpace = useMemo(() => {
// //     const outcomes = [];
    
// //     const generateOutcomes = (currentOutcome, remainingDice) => {
// //       if (remainingDice === 0) {
// //         outcomes.push([...currentOutcome]);
// //         return;
// //       }
      
// //       for (let i = 1; i <= diceSides; i++) {
// //         generateOutcomes([...currentOutcome, i], remainingDice - 1);
// //       }
// //     };
    
// //     generateOutcomes([], numDice);
// //     return outcomes;
// //   }, [numDice, diceSides]);

// //   // Check if outcome matches highlight condition
// //   const shouldHighlight = (outcome) => {
// //     const sum = outcome.reduce((a, b) => a + b, 0);
// //     const hasDoubles = new Set(outcome).size < outcome.length;
// //     const allSame = new Set(outcome).size === 1;
    
// //     switch (highlightCondition) {
// //       case 'sumIs':
// //         return checkSumCondition(sum);
// //       case 'doubles':
// //         return hasDoubles;
// //       case 'allSame':
// //         return allSame;
// //       case 'even':
// //         return sum % 2 === 0;
// //       case 'odd':
// //         return sum % 2 === 1;
// //       default:
// //         return false;
// //     }
// //   };

// //   // Check sum condition based on selected type
// //   const checkSumCondition = (sum) => {
// //     switch (sumCondition) {
// //       case 'equals':
// //         return sum === customSum;
// //       case 'greaterThan':
// //         return sum > customSum;
// //       case 'lessThan':
// //         return sum < customSum;
// //       case 'atLeast':
// //         return sum >= customSum;
// //       case 'atMost':
// //         return sum <= customSum;
// //       case 'between':
// //         return sum >= sumRangeMin && sum <= sumRangeMax;
// //       case 'prime':
// //         return isPrime(sum);
// //       case 'perfectSquare':
// //         return isPerfectSquare(sum);
// //       case 'multipleOf':
// //         return sum % sumMultiple === 0;
// //       default:
// //         return false;
// //     }
// //   };

// //   // Helper function to check if number is prime
// //   const isPrime = (num) => {
// //     if (num < 2) return false;
// //     for (let i = 2; i <= Math.sqrt(num); i++) {
// //       if (num % i === 0) return false;
// //     }
// //     return true;
// //   };

// //   // Helper function to check if number is perfect square
// //   const isPerfectSquare = (num) => {
// //     const sqrt = Math.sqrt(num);
// //     return sqrt === Math.floor(sqrt);
// //   };

// //   // Calculate statistics
// //   const totalOutcomes = sampleSpace.length;
// //   const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
// //   const probability = highlightedOutcomes.length / totalOutcomes;

// //   // Create dice visual
// //   const DiceVisual = ({ value, size = 40 }) => {
// //     const dots = [];
// //     const dotPositions = {
// //       1: [[50, 50]],
// //       2: [[25, 25], [75, 75]],
// //       3: [[25, 25], [50, 50], [75, 75]],
// //       4: [[25, 25], [75, 25], [25, 75], [75, 75]],
// //       5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
// //       6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
// //     };

// //     const positions = dotPositions[value] || [];
    
// //     return (
// //       <div 
// //         style={{
// //           width: size,
// //           height: size,
// //           border: '2px solid #333',
// //           borderRadius: '6px',
// //           backgroundColor: '#fff',
// //           position: 'relative',
// //           display: 'inline-block',
// //           margin: '2px'
// //         }}
// //       >
// //         {positions.map((pos, i) => (
// //           <div
// //             key={i}
// //             style={{
// //               position: 'absolute',
// //               left: `${pos[0]}%`,
// //               top: `${pos[1]}%`,
// //               width: '6px',
// //               height: '6px',
// //               backgroundColor: '#333',
// //               borderRadius: '50%',
// //               transform: 'translate(-50%, -50%)'
// //             }}
// //           />
// //         ))}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// //       <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
// //         Dice Sample Space Visualizer
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
// //           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Dice:</label>
// //           <select 
// //             value={numDice} 
// //             onChange={(e) => setNumDice(parseInt(e.target.value))}
// //             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// //           >
// //             {[1, 2, 3, 4].map(n => (
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
// //             <option value="sumIs">Sum is...</option>
// //             <option value="doubles">Any Doubles</option>
// //             <option value="allSame">All Same</option>
// //             <option value="even">Even Sum</option>
// //             <option value="odd">Odd Sum</option>
// //           </select>
// //         </div>
        
// //         {highlightCondition === 'sumIs' && (
// //           <>
// //             <div>
// //               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Sum Condition:</label>
// //               <select 
// //                 value={sumCondition} 
// //                 onChange={(e) => setSumCondition(e.target.value)}
// //                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
// //               >
// //                 <option value="equals">Equals</option>
// //                 <option value="greaterThan">Greater than</option>
// //                 <option value="lessThan">Less than</option>
// //                 <option value="atLeast">At least</option>
// //                 <option value="atMost">At most</option>
// //                 <option value="between">Between</option>
// //                 <option value="prime">Prime number</option>
// //                 <option value="perfectSquare">Perfect square</option>
// //                 <option value="multipleOf">Multiple of</option>
// //               </select>
// //             </div>
            
// //             {(sumCondition === 'equals' || sumCondition === 'greaterThan' || sumCondition === 'lessThan' || sumCondition === 'atLeast' || sumCondition === 'atMost') && (
// //               <div>
// //                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Value:</label>
// //                 <input 
// //                   type="number" 
// //                   value={customSum} 
// //                   onChange={(e) => setCustomSum(parseInt(e.target.value))}
// //                   min={numDice}
// //                   max={numDice * diceSides}
// //                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// //                 />
// //               </div>
// //             )}
            
// //             {sumCondition === 'between' && (
// //               <>
// //                 <div>
// //                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Min:</label>
// //                   <input 
// //                     type="number" 
// //                     value={sumRangeMin} 
// //                     onChange={(e) => setSumRangeMin(parseInt(e.target.value))}
// //                     min={numDice}
// //                     max={numDice * diceSides}
// //                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// //                   />
// //                 </div>
// //                 <div>
// //                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Max:</label>
// //                   <input 
// //                     type="number" 
// //                     value={sumRangeMax} 
// //                     onChange={(e) => setSumRangeMax(parseInt(e.target.value))}
// //                     min={numDice}
// //                     max={numDice * diceSides}
// //                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// //                   />
// //                 </div>
// //               </>
// //             )}
            
// //             {sumCondition === 'multipleOf' && (
// //               <div>
// //                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Multiple of:</label>
// //                 <input 
// //                   type="number" 
// //                   value={sumMultiple} 
// //                   onChange={(e) => setSumMultiple(parseInt(e.target.value))}
// //                   min={2}
// //                   max={10}
// //                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
// //                 />
// //               </div>
// //             )}
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
// //             const sum = outcome.reduce((a, b) => a + b, 0);
            
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
// //                     <DiceVisual key={i} value={value} size={30} />
// //                   ))}
// //                 </div>
// //                 {showProbabilities && (
// //                   <div style={{ fontSize: '12px', color: '#666' }}>
// //                     Sum: {sum}
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

// // export default DiceSampleSpaceVisualizer;


// import React, { useState, useMemo } from 'react';

// const DiceSampleSpaceVisualizer = () => {
//   const [numDice, setNumDice] = useState(2);
//   const [diceSides] = useState(6);
//   const [highlightCondition, setHighlightCondition] = useState('none');
//   const [sumCondition, setSumCondition] = useState('equals');
//   const [customSum, setCustomSum] = useState(7);
//   const [sumRangeMin, setSumRangeMin] = useState(7);
//   const [sumRangeMax, setSumRangeMax] = useState(10);
//   const [sumMultiple, setSumMultiple] = useState(3);
//   const [showProbabilities, setShowProbabilities] = useState(true);

//   // Generate all possible outcomes
//   const sampleSpace = useMemo(() => {
//     const outcomes = [];
    
//     const generateOutcomes = (currentOutcome, remainingDice) => {
//       if (remainingDice === 0) {
//         outcomes.push([...currentOutcome]);
//         return;
//       }
      
//       for (let i = 1; i <= diceSides; i++) {
//         generateOutcomes([...currentOutcome, i], remainingDice - 1);
//       }
//     };
    
//     generateOutcomes([], numDice);
//     return outcomes;
//   }, [numDice, diceSides]);

//   // Check if outcome matches highlight condition
//   const shouldHighlight = (outcome) => {
//     const sum = outcome.reduce((a, b) => a + b, 0);
//     const hasDoubles = new Set(outcome).size < outcome.length;
//     const allSame = new Set(outcome).size === 1;
    
//     switch (highlightCondition) {
//       case 'sumIs':
//         return checkSumCondition(sum);
//       case 'consecutive':
//         return hasConsecutiveNumbers(outcome);
//       case 'doubles':
//         return hasDoubles;
//       case 'allSame':
//         return allSame;
//       case 'even':
//         return sum % 2 === 0;
//       case 'odd':
//         return sum % 2 === 1;
//       default:
//         return false;
//     }
//   };

//   // Check sum condition based on selected type
//   const checkSumCondition = (sum) => {
//     switch (sumCondition) {
//       case 'equals':
//         return sum === customSum;
//       case 'greaterThan':
//         return sum > customSum;
//       case 'lessThan':
//         return sum < customSum;
//       case 'atLeast':
//         return sum >= customSum;
//       case 'atMost':
//         return sum <= customSum;
//       case 'between':
//         return sum >= sumRangeMin && sum <= sumRangeMax;
//       case 'prime':
//         return isPrime(sum);
//       case 'perfectSquare':
//         return isPerfectSquare(sum);
//       case 'multipleOf':
//         return sum % sumMultiple === 0;
//       default:
//         return false;
//     }
//   };

//   // Helper function to check if number is prime
//   const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   // Helper function to check if number is perfect square
//   const isPerfectSquare = (num) => {
//     const sqrt = Math.sqrt(num);
//     return sqrt === Math.floor(sqrt);
//   };

//   // Helper function to check for consecutive numbers
//   const hasConsecutiveNumbers = (outcome) => {
//     const uniqueNumbers = [...new Set(outcome)].sort((a, b) => a - b);
    
//     // Check if all unique numbers are consecutive
//     if (uniqueNumbers.length === outcome.length) {
//       // All numbers are different, check if they form a sequence
//       for (let i = 0; i < uniqueNumbers.length - 1; i++) {
//         if (uniqueNumbers[i + 1] - uniqueNumbers[i] !== 1) {
//           return false;
//         }
//       }
//       return uniqueNumbers.length > 1; // Need at least 2 numbers to be consecutive
//     }
    
//     // If there are duplicates, check if any subset forms consecutive numbers
//     // For example, [3,3,4,5] should be true because it contains 3,4,5
//     for (let length = Math.min(uniqueNumbers.length, outcome.length); length >= 2; length--) {
//       for (let start = 0; start <= uniqueNumbers.length - length; start++) {
//         const subset = uniqueNumbers.slice(start, start + length);
//         let isConsecutive = true;
//         for (let i = 0; i < subset.length - 1; i++) {
//           if (subset[i + 1] - subset[i] !== 1) {
//             isConsecutive = false;
//             break;
//           }
//         }
//         if (isConsecutive) {
//           return true;
//         }
//       }
//     }
    
//     return false;
//   };

//   // Calculate statistics
//   const totalOutcomes = sampleSpace.length;
//   const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
//   const probability = highlightedOutcomes.length / totalOutcomes;

//   // Create dice visual
//   const DiceVisual = ({ value, size = 40 }) => {
//     const dots = [];
//     const dotPositions = {
//       1: [[50, 50]],
//       2: [[25, 25], [75, 75]],
//       3: [[25, 25], [50, 50], [75, 75]],
//       4: [[25, 25], [75, 25], [25, 75], [75, 75]],
//       5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
//       6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
//     };

//     const positions = dotPositions[value] || [];
    
//     return (
//       <div 
//         style={{
//           width: size,
//           height: size,
//           border: '2px solid #333',
//           borderRadius: '6px',
//           backgroundColor: '#fff',
//           position: 'relative',
//           display: 'inline-block',
//           margin: '2px'
//         }}
//       >
//         {positions.map((pos, i) => (
//           <div
//             key={i}
//             style={{
//               position: 'absolute',
//               left: `${pos[0]}%`,
//               top: `${pos[1]}%`,
//               width: '6px',
//               height: '6px',
//               backgroundColor: '#333',
//               borderRadius: '50%',
//               transform: 'translate(-50%, -50%)'
//             }}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
//         Dice Sample Space Visualizer
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
//           <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Dice:</label>
//           <select 
//             value={numDice} 
//             onChange={(e) => setNumDice(parseInt(e.target.value))}
//             style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
//           >
//             {[1, 2, 3, 4].map(n => (
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
//             <option value="sumIs">Sum is...</option>
//             <option value="consecutive">Consecutive numbers</option>
//             <option value="doubles">Any Doubles</option>
//             <option value="allSame">All Same</option>
//             <option value="even">Even Sum</option>
//             <option value="odd">Odd Sum</option>
//           </select>
//         </div>
        
//         {highlightCondition === 'sumIs' && (
//           <>
//             <div>
//               <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Sum Condition:</label>
//               <select 
//                 value={sumCondition} 
//                 onChange={(e) => setSumCondition(e.target.value)}
//                 style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
//               >
//                 <option value="equals">Equals</option>
//                 <option value="greaterThan">Greater than</option>
//                 <option value="lessThan">Less than</option>
//                 <option value="atLeast">At least</option>
//                 <option value="atMost">At most</option>
//                 <option value="between">Between</option>
//                 <option value="prime">Prime number</option>
//                 <option value="perfectSquare">Perfect square</option>
//                 <option value="multipleOf">Multiple of</option>
//               </select>
//             </div>
            
//             {(sumCondition === 'equals' || sumCondition === 'greaterThan' || sumCondition === 'lessThan' || sumCondition === 'atLeast' || sumCondition === 'atMost') && (
//               <div>
//                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Value:</label>
//                 <input 
//                   type="number" 
//                   value={customSum} 
//                   onChange={(e) => setCustomSum(parseInt(e.target.value))}
//                   min={numDice}
//                   max={numDice * diceSides}
//                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
//                 />
//               </div>
//             )}
            
//             {sumCondition === 'between' && (
//               <>
//                 <div>
//                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Min:</label>
//                   <input 
//                     type="number" 
//                     value={sumRangeMin} 
//                     onChange={(e) => setSumRangeMin(parseInt(e.target.value))}
//                     min={numDice}
//                     max={numDice * diceSides}
//                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
//                   />
//                 </div>
//                 <div>
//                   <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Max:</label>
//                   <input 
//                     type="number" 
//                     value={sumRangeMax} 
//                     onChange={(e) => setSumRangeMax(parseInt(e.target.value))}
//                     min={numDice}
//                     max={numDice * diceSides}
//                     style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
//                   />
//                 </div>
//               </>
//             )}
            
//             {sumCondition === 'multipleOf' && (
//               <div>
//                 <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Multiple of:</label>
//                 <input 
//                   type="number" 
//                   value={sumMultiple} 
//                   onChange={(e) => setSumMultiple(parseInt(e.target.value))}
//                   min={2}
//                   max={10}
//                   style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
//                 />
//               </div>
//             )}
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
//             const sum = outcome.reduce((a, b) => a + b, 0);
            
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
//                     <DiceVisual key={i} value={value} size={30} />
//                   ))}
//                 </div>
//                 {showProbabilities && (
//                   <div style={{ fontSize: '12px', color: '#666' }}>
//                     Sum: {sum}
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
// };

// export default DiceSampleSpaceVisualizer;

import React, { useState, useMemo } from 'react';

const DiceSampleSpaceVisualizer = () => {
  const [numDice, setNumDice] = useState(2);
  const [diceSides] = useState(6);
  const [highlightCondition, setHighlightCondition] = useState('none');
  const [sumCondition, setSumCondition] = useState('equals');
  const [customSum, setCustomSum] = useState(7);
  const [sumRangeMin, setSumRangeMin] = useState(7);
  const [sumRangeMax, setSumRangeMax] = useState(10);
  const [sumMultiple, setSumMultiple] = useState(3);
  const [specificNumber, setSpecificNumber] = useState(6);
  const [numberCondition, setNumberCondition] = useState('atLeastOne');
  const [exactCount, setExactCount] = useState(2);
  const [extremeValue, setExtremeValue] = useState(5);
  const [extremeType, setExtremeType] = useState('maximum');
  const [relationshipType, setRelationshipType] = useState('firstGreaterSecond');
  const [targetDifference, setTargetDifference] = useState(2);
  const [showProbabilities, setShowProbabilities] = useState(true);

  // Generate all possible outcomes
  const sampleSpace = useMemo(() => {
    const outcomes = [];
    
    const generateOutcomes = (currentOutcome, remainingDice) => {
      if (remainingDice === 0) {
        outcomes.push([...currentOutcome]);
        return;
      }
      
      for (let i = 1; i <= diceSides; i++) {
        generateOutcomes([...currentOutcome, i], remainingDice - 1);
      }
    };
    
    generateOutcomes([], numDice);
    return outcomes;
  }, [numDice, diceSides]);

  // Check if outcome matches highlight condition
  const shouldHighlight = (outcome) => {
    const sum = outcome.reduce((a, b) => a + b, 0);
    const hasDoubles = new Set(outcome).size < outcome.length;
    const allSame = new Set(outcome).size === 1;
    
    switch (highlightCondition) {
      case 'sumIs':
        return checkSumCondition(sum);
      case 'specificNumbers':
        return checkSpecificNumbers(outcome);
      case 'extremeValues':
        return checkExtremeValues(outcome);
      case 'allDifferent':
        return new Set(outcome).size === outcome.length;
      case 'diceRelationships':
        return checkDiceRelationships(outcome);
      case 'difference':
        return checkDifferenceCondition(outcome);
      case 'majority':
        return checkMajorityCondition(outcome);
      case 'consecutive':
        return hasConsecutiveNumbers(outcome);
      case 'doubles':
        return hasDoubles;
      case 'allSame':
        return allSame;
      case 'even':
        return sum % 2 === 0;
      case 'odd':
        return sum % 2 === 1;
      default:
        return false;
    }
  };

  // Check sum condition based on selected type
  const checkSumCondition = (sum) => {
    switch (sumCondition) {
      case 'equals':
        return sum === customSum;
      case 'greaterThan':
        return sum > customSum;
      case 'lessThan':
        return sum < customSum;
      case 'atLeast':
        return sum >= customSum;
      case 'atMost':
        return sum <= customSum;
      case 'between':
        return sum >= sumRangeMin && sum <= sumRangeMax;
      case 'prime':
        return isPrime(sum);
      case 'perfectSquare':
        return isPerfectSquare(sum);
      case 'multipleOf':
        return sum % sumMultiple === 0;
      default:
        return false;
    }
  };

  // Helper function to check if number is prime
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Helper function to check if number is perfect square
  const isPerfectSquare = (num) => {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
  };

  // Helper function to check for consecutive numbers
  const hasConsecutiveNumbers = (outcome) => {
    const uniqueNumbers = [...new Set(outcome)].sort((a, b) => a - b);
    
    // Check if all unique numbers are consecutive
    if (uniqueNumbers.length === outcome.length) {
      // All numbers are different, check if they form a sequence
      for (let i = 0; i < uniqueNumbers.length - 1; i++) {
        if (uniqueNumbers[i + 1] - uniqueNumbers[i] !== 1) {
          return false;
        }
      }
      return uniqueNumbers.length > 1; // Need at least 2 numbers to be consecutive
    }
    
    // If there are duplicates, check if any subset forms consecutive numbers
    // For example, [3,3,4,5] should be true because it contains 3,4,5
    for (let length = Math.min(uniqueNumbers.length, outcome.length); length >= 2; length--) {
      for (let start = 0; start <= uniqueNumbers.length - length; start++) {
        const subset = uniqueNumbers.slice(start, start + length);
        let isConsecutive = true;
        for (let i = 0; i < subset.length - 1; i++) {
          if (subset[i + 1] - subset[i] !== 1) {
            isConsecutive = false;
            break;
          }
        }
        if (isConsecutive) {
          return true;
        }
      }
    }
    
    return false;
  };

  // Helper function to check specific number conditions
  const checkSpecificNumbers = (outcome) => {
    const count = outcome.filter(die => die === specificNumber).length;
    
    switch (numberCondition) {
      case 'atLeastOne':
        return count >= 1;
      case 'none':
        return count === 0;
      case 'exactly':
        return count === exactCount;
      default:
        return false;
    }
  };

  // Helper function to check extreme values (max/min)
  const checkExtremeValues = (outcome) => {
    const max = Math.max(...outcome);
    const min = Math.min(...outcome);
    
    switch (extremeType) {
      case 'maximum':
        return max === extremeValue;
      case 'minimum':
        return min === extremeValue;
      default:
        return false;
    }
  };

  // Helper function to check dice relationships
  const checkDiceRelationships = (outcome) => {
    switch (relationshipType) {
      case 'firstGreaterSecond':
        return outcome.length >= 2 && outcome[0] > outcome[1];
      case 'ascending':
        for (let i = 0; i < outcome.length - 1; i++) {
          if (outcome[i] > outcome[i + 1]) {
            return false;
          }
        }
        return true;
      case 'descending':
        for (let i = 0; i < outcome.length - 1; i++) {
          if (outcome[i] < outcome[i + 1]) {
            return false;
          }
        }
        return true;
      case 'strictAscending':
        for (let i = 0; i < outcome.length - 1; i++) {
          if (outcome[i] >= outcome[i + 1]) {
            return false;
          }
        }
        return true;
      case 'strictDescending':
        for (let i = 0; i < outcome.length - 1; i++) {
          if (outcome[i] <= outcome[i + 1]) {
            return false;
          }
        }
        return true;
      default:
        return false;
    }
  };

  // Helper function to check difference conditions
  const checkDifferenceCondition = (outcome) => {
    const max = Math.max(...outcome);
    const min = Math.min(...outcome);
    return (max - min) === targetDifference;
  };

  // Helper function to check majority conditions
  const checkMajorityCondition = (outcome) => {
    const evenCount = outcome.filter(die => die % 2 === 0).length;
    const oddCount = outcome.length - evenCount;
    return evenCount > oddCount;
  };

  // Calculate statistics
  const totalOutcomes = sampleSpace.length;
  const highlightedOutcomes = sampleSpace.filter(shouldHighlight);
  const probability = highlightedOutcomes.length / totalOutcomes;

  // Create dice visual
  const DiceVisual = ({ value, size = 40 }) => {
    const dots = [];
    const dotPositions = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [75, 25], [25, 75], [75, 75]],
      5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
      6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
    };

    const positions = dotPositions[value] || [];
    
    return (
      <div 
        style={{
          width: size,
          height: size,
          border: '2px solid #333',
          borderRadius: '6px',
          backgroundColor: '#fff',
          position: 'relative',
          display: 'inline-block',
          margin: '2px'
        }}
      >
        {positions.map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${pos[0]}%`,
              top: `${pos[1]}%`,
              width: '6px',
              height: '6px',
              backgroundColor: '#333',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Dice Sample Space Visualizer
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
          <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number of Dice:</label>
          <select 
            value={numDice} 
            onChange={(e) => setNumDice(parseInt(e.target.value))}
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            {[1, 2, 3, 4].map(n => (
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
            <option value="sumIs">Sum is...</option>
            <option value="specificNumbers">Specific numbers</option>
            <option value="extremeValues">Highest/Lowest value</option>
            <option value="allDifferent">All different numbers</option>
            <option value="diceRelationships">Dice relationships</option>
            <option value="difference">Difference conditions</option>
            <option value="majority">Majority conditions</option>
            <option value="consecutive">Consecutive numbers</option>
            <option value="doubles">Any Doubles</option>
            <option value="allSame">All Same</option>
            <option value="even">Even Sum</option>
            <option value="odd">Odd Sum</option>
          </select>
        </div>
        
        {highlightCondition === 'sumIs' && (
          <>
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Sum Condition:</label>
              <select 
                value={sumCondition} 
                onChange={(e) => setSumCondition(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value="equals">Equals</option>
                <option value="greaterThan">Greater than</option>
                <option value="lessThan">Less than</option>
                <option value="atLeast">At least</option>
                <option value="atMost">At most</option>
                <option value="between">Between</option>
                <option value="prime">Prime number</option>
                <option value="perfectSquare">Perfect square</option>
                <option value="multipleOf">Multiple of</option>
              </select>
            </div>
            
            {(sumCondition === 'equals' || sumCondition === 'greaterThan' || sumCondition === 'lessThan' || sumCondition === 'atLeast' || sumCondition === 'atMost') && (
              <div>
                <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Value:</label>
                <input 
                  type="number" 
                  value={customSum} 
                  onChange={(e) => setCustomSum(parseInt(e.target.value))}
                  min={numDice}
                  max={numDice * diceSides}
                  style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
                />
              </div>
            )}
            
            {sumCondition === 'between' && (
              <>
                <div>
                  <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Min:</label>
                  <input 
                    type="number" 
                    value={sumRangeMin} 
                    onChange={(e) => setSumRangeMin(parseInt(e.target.value))}
                    min={numDice}
                    max={numDice * diceSides}
                    style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
                  />
                </div>
                <div>
                  <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Max:</label>
                  <input 
                    type="number" 
                    value={sumRangeMax} 
                    onChange={(e) => setSumRangeMax(parseInt(e.target.value))}
                    min={numDice}
                    max={numDice * diceSides}
                    style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
                  />
                </div>
              </>
            )}
            
            {sumCondition === 'multipleOf' && (
              <div>
                <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Multiple of:</label>
                <input 
                  type="number" 
                  value={sumMultiple} 
                  onChange={(e) => setSumMultiple(parseInt(e.target.value))}
                  min={2}
                  max={10}
                  style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
                />
              </div>
            )}
          </>
        )}
        
        {highlightCondition === 'specificNumbers' && (
          <>
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Number:</label>
              <select 
                value={specificNumber} 
                onChange={(e) => setSpecificNumber(parseInt(e.target.value))}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Condition:</label>
              <select 
                value={numberCondition} 
                onChange={(e) => setNumberCondition(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value="atLeastOne">At least one</option>
                <option value="none">None (zero)</option>
                <option value="exactly">Exactly</option>
              </select>
            </div>
            
            {numberCondition === 'exactly' && (
              <div>
                <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Count:</label>
                <input 
                  type="number" 
                  value={exactCount} 
                  onChange={(e) => setExactCount(parseInt(e.target.value))}
                  min={0}
                  max={numDice}
                  style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
                />
              </div>
            )}
          </>
        )}
        
        {highlightCondition === 'extremeValues' && (
          <>
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Type:</label>
              <select 
                value={extremeType} 
                onChange={(e) => setExtremeType(e.target.value)}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option value="maximum">Maximum die shows</option>
                <option value="minimum">Minimum die shows</option>
              </select>
            </div>
            
            <div>
              <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Value:</label>
              <select 
                value={extremeValue} 
                onChange={(e) => setExtremeValue(parseInt(e.target.value))}
                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </>
        )}
        
        {highlightCondition === 'diceRelationships' && (
          <div>
            <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Relationship:</label>
            <select 
              value={relationshipType} 
              onChange={(e) => setRelationshipType(e.target.value)}
              style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="firstGreaterSecond">First die &gt; Second die</option>
              <option value="ascending">Non-decreasing order</option>
              <option value="descending">Non-increasing order</option>
              <option value="strictAscending">Strictly ascending</option>
              <option value="strictDescending">Strictly descending</option>
            </select>
          </div>
        )}
        
        {highlightCondition === 'difference' && (
          <div>
            <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Difference (max - min):</label>
            <input 
              type="number" 
              value={targetDifference} 
              onChange={(e) => setTargetDifference(parseInt(e.target.value))}
              min={0}
              max={5}
              style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', width: '60px' }}
            />
          </div>
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
            const sum = outcome.reduce((a, b) => a + b, 0);
            
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
                    <DiceVisual key={i} value={value} size={30} />
                  ))}
                </div>
                {showProbabilities && (
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Sum: {sum}
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
};

export default DiceSampleSpaceVisualizer;