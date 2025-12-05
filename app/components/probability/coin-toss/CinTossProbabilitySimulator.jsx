// // import React, { useState, useRef } from 'react';

// // function CoinFlipperSimulator() {
// //   const [state, setState] = useState({
// //     totalFlips: 0,
// //     headsCount: 0,
// //     flipHistory: [],
// //     currentFlip: null,
// //     currentStreak: { type: null, count: 0 },
// //     longestHeadsStreak: 0,
// //     longestTailsStreak: 0,
// //     convergenceData: []
// //   });
  
// //   const [isFlipping, setIsFlipping] = useState(false);
// //   const [probHeads, setProbHeads] = useState(0.5);
// //   const [isContinuous, setIsContinuous] = useState(false);
// //   const [speed, setSpeed] = useState(100);
  
// //   const continuousInterval = useRef(null);
// //   const animationTimeout = useRef(null);

// //   const { totalFlips, headsCount, flipHistory, currentFlip, currentStreak, longestHeadsStreak, longestTailsStreak, convergenceData } = state;
// //   const tailsCount = totalFlips - headsCount;
// //   const headsProportion = totalFlips > 0 ? headsCount / totalFlips : 0;
// //   const expectedHeads = totalFlips * probHeads;
// //   const distanceFromExpected = totalFlips > 0 ? Math.abs(headsProportion - probHeads) : 0;
// //   const percentageHeads = totalFlips > 0 ? (headsProportion * 100).toFixed(2) : 0;
// //   const withinOnePercent = distanceFromExpected < 0.01;
// //   const withinFivePercent = distanceFromExpected < 0.05;
  
// //   const variance = totalFlips > 0 ? totalFlips * probHeads * (1 - probHeads) : 0;
// //   const standardDeviation = Math.sqrt(variance);
// //   const zScore = totalFlips > 0 && standardDeviation > 0 ? (headsCount - expectedHeads) / standardDeviation : 0;

// //   const doFlips = (count) => {
// //     const newFlips = [];
// //     let newHeads = headsCount;
// //     let streakType = currentStreak.type;
// //     let streakCount = currentStreak.count;
// //     let maxH = longestHeadsStreak;
// //     let maxT = longestTailsStreak;
    
// //     for (let i = 0; i < count; i++) {
// //       const result = Math.random() < probHeads ? 'H' : 'T';
// //       newFlips.push(result);
      
// //       if (result === 'H') newHeads++;
      
// //       if (streakType === result) {
// //         streakCount++;
// //         if (result === 'H' && streakCount > maxH) maxH = streakCount;
// //         if (result === 'T' && streakCount > maxT) maxT = streakCount;
// //       } else {
// //         streakType = result;
// //         streakCount = 1;
// //       }
// //     }
    
// //     const newTotal = totalFlips + count;
// //     const newProportion = newHeads / newTotal;
// //     const newHistory = [...newFlips.reverse(), ...flipHistory].slice(0, 50);
    
// //     const newConvergenceData = [...convergenceData, { flip: newTotal, proportion: newProportion }];
    
// //     setState({
// //       totalFlips: newTotal,
// //       headsCount: newHeads,
// //       flipHistory: newHistory,
// //       currentFlip: newFlips[newFlips.length - 1],
// //       currentStreak: { type: streakType, count: streakCount },
// //       longestHeadsStreak: maxH,
// //       longestTailsStreak: maxT,
// //       convergenceData: newConvergenceData
// //     });
// //   };

// //   const flipOnce = () => {
// //     if (isFlipping) return;
// //     setIsFlipping(true);
// //     doFlips(1);
// //     animationTimeout.current = setTimeout(() => setIsFlipping(false), 600);
// //   };

// //   const flipBatch = (count) => {
// //     if (isFlipping) return;
// //     setIsFlipping(true);
// //     doFlips(count);
// //     animationTimeout.current = setTimeout(() => setIsFlipping(false), 400);
// //   };

// //   const toggleContinuous = () => {
// //     if (isContinuous) {
// //       setIsContinuous(false);
// //       if (continuousInterval.current) {
// //         clearInterval(continuousInterval.current);
// //         continuousInterval.current = null;
// //       }
// //     } else {
// //       setIsContinuous(true);
// //       continuousInterval.current = setInterval(() => doFlips(1), speed);
// //     }
// //   };

// //   const reset = () => {
// //     if (continuousInterval.current) clearInterval(continuousInterval.current);
// //     if (animationTimeout.current) clearTimeout(animationTimeout.current);
// //     setState({
// //       totalFlips: 0,
// //       headsCount: 0,
// //       flipHistory: [],
// //       currentFlip: null,
// //       currentStreak: { type: null, count: 0 },
// //       longestHeadsStreak: 0,
// //       longestTailsStreak: 0,
// //       convergenceData: []
// //     });
// //     setIsContinuous(false);
// //     setIsFlipping(false);
// //   };

// //   const ConvergenceGraph = () => {
// //     const width = 550;
// //     const height = 400;
// //     const padding = 40;
    
// //     if (convergenceData.length === 0) {
// //       return (
// //         <div style={{ width: '100%', height, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', color: '#999' }}>
// //           Start flipping to see convergence
// //         </div>
// //       );
// //     }
    
// //     const maxFlip = Math.max(...convergenceData.map(d => d.flip));
// //     const scaleX = (flip) => padding + ((flip / maxFlip) * (width - 2 * padding));
// //     const scaleY = (proportion) => height - padding - ((proportion) * (height - 2 * padding));
    
// //     const pathData = convergenceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.proportion)}`).join(' ');
    
// //     const confidenceBands = convergenceData.map(d => {
// //       const se = Math.sqrt((probHeads * (1 - probHeads)) / d.flip);
// //       return { flip: d.flip, upper: Math.min(1, probHeads + 2 * se), lower: Math.max(0, probHeads - 2 * se) };
// //     });
    
// //     const upperPath = confidenceBands.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.upper)}`).join(' ');
// //     const lowerPath = confidenceBands.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.lower)}`).join(' ');
    
// //     return (
// //       <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
// //         {[0, 0.25, 0.5, 0.75, 1].map(val => (
// //           <g key={val}>
// //             <line x1={padding} y1={scaleY(val)} x2={width - padding} y2={scaleY(val)} stroke="#e0e0e0" strokeWidth="1" />
// //             <text x={padding - 10} y={scaleY(val) + 5} textAnchor="end" fontSize="11" fill="#666">{val.toFixed(2)}</text>
// //           </g>
// //         ))}
// //         <path d={upperPath} fill="none" stroke="#b3d9ff" strokeWidth="1" strokeDasharray="3,3" />
// //         <path d={lowerPath} fill="none" stroke="#b3d9ff" strokeWidth="1" strokeDasharray="3,3" />
// //         <line x1={padding} y1={scaleY(probHeads)} x2={width - padding} y2={scaleY(probHeads)} stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
// //         <path d={pathData} fill="none" stroke="#4A90E2" strokeWidth="2.5" />
// //         <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#333" strokeWidth="2" />
// //         <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#333" strokeWidth="2" />
// //         <text x={width / 2} y={height - 5} textAnchor="middle" fontSize="12" fill="#333">Number of Flips</text>
// //         <text x={12} y={height / 2} textAnchor="middle" fontSize="12" fill="#333" transform={`rotate(-90, 12, ${height / 2})`}>Proportion of Heads</text>
// //         <g transform={`translate(${width - padding - 130}, ${padding + 5})`}>
// //           <line x1="0" y1="0" x2="25" y2="0" stroke="#4A90E2" strokeWidth="2.5" />
// //           <text x="30" y="4" fontSize="11" fill="#333">Actual</text>
// //           <line x1="0" y1="15" x2="25" y2="15" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
// //           <text x="30" y="19" fontSize="11" fill="#333">Expected</text>
// //         </g>
// //       </svg>
// //     );
// //   };

// //   return (
// //     <div style={{ padding: '15px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', height: '100vh', overflow: 'hidden' }}>
// //       {/* <h1 style={{ textAlign: 'center', color: '#333', margin: '0 0 5px 0', fontSize: '24px' }}>Interactive Coin Flipper Simulator</h1>
// //       <p style={{ textAlign: 'center', color: '#666', margin: '0 0 15px 0', fontSize: '13px' }}>Law of Large Numbers Demonstration</p> */}

// //       <div style={{ display: 'grid', gridTemplateColumns: '600px 1fr', gap: '15px', height: 'calc(100vh - 100px)' }}>
// //         {/* Left Column */}
// //         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
// //           {/* Coin & Controls Combined */}
// //           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px' }}>
// //             <div style={{ display: 'flex', gap: '15px' }}>
// //               {/* Coin */}
// //               <div style={{ flex: '0 0 120px', textAlign: 'center' }}>
// //                 <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
// //                   <div style={{
// //                     width: '100%', height: '100%', borderRadius: '50%', border: '3px solid #333',
// //                     backgroundColor: currentFlip === 'H' ? '#FFD700' : currentFlip === 'T' ? '#C0C0C0' : '#e0e0e0',
// //                     display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#333',
// //                     boxShadow: '0 3px 6px rgba(0,0,0,0.2)', transform: isFlipping ? 'rotateY(720deg)' : 'rotateY(0deg)',
// //                     transition: 'transform 0.6s ease, background-color 0.3s ease'
// //                   }}>{currentFlip || '?'}</div>
// //                 </div>
// //                 {currentFlip && <div style={{ fontSize: '16px', color: '#333', fontWeight: 'bold', marginTop: '5px' }}>{currentFlip === 'H' ? 'HEADS' : 'TAILS'}</div>}
// //               </div>
              
// //               {/* Controls */}
// //               <div style={{ flex: '1' }}>
// //                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
// //                   {[
// //                     { label: 'Flip 1', count: 1 },
// //                     { label: 'Flip 10', count: 10 },
// //                     { label: 'Flip 100', count: 100 },
// //                     { label: 'Flip 1K', count: 1000 },
// //                     { label: 'Flip 10K', count: 10000, span: true }
// //                   ].map(btn => (
// //                     <button key={btn.count} onClick={() => btn.count === 1 ? flipOnce() : flipBatch(btn.count)} disabled={isFlipping || isContinuous}
// //                       style={{ padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#4A90E2', color: 'white', border: 'none', borderRadius: '4px',
// //                         cursor: isFlipping || isContinuous ? 'not-allowed' : 'pointer', opacity: isFlipping || isContinuous ? 0.5 : 1, gridColumn: btn.span ? 'span 2' : 'auto' }}>
// //                       {btn.label}
// //                     </button>
// //                   ))}
// //                 </div>
                
// //                 <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
// //                   <button onClick={toggleContinuous} style={{ flex: '1', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: isContinuous ? '#d9534f' : '#f0ad4e',
// //                     color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{isContinuous ? 'Stop' : 'Auto'}</button>
// //                   <div style={{ flex: '1' }}>
// //                     <input type="range" min="10" max="500" step="10" value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} disabled={isContinuous} style={{ width: '100%' }} />
// //                     <div style={{ fontSize: '10px', color: '#666', textAlign: 'center' }}>{speed}ms</div>
// //                   </div>
// //                 </div>
                
// //                 <button onClick={reset} style={{ width: '100%', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#d9534f',
// //                   color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reset</button>
// //               </div>
// //             </div>
            
// //             {/* Coin Config */}
// //             <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #ddd' }}>
// //               <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#555' }}>P(Heads): {(probHeads * 100).toFixed(0)}%</label>
// //               <input type="range" min="0" max="1" step="0.01" value={probHeads} onChange={(e) => setProbHeads(parseFloat(e.target.value))} disabled={totalFlips > 0} style={{ width: '100%' }} />
// //               {totalFlips > 0 && <p style={{ fontSize: '10px', color: '#d9534f', margin: '3px 0 0 0' }}>Reset to change</p>}
// //             </div>
// //           </div>

// //           {/* Statistics */}
// //           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
// //             <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Statistics</h3>
// //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px', marginBottom: '10px' }}>
// //               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
// //                 <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>{totalFlips.toLocaleString()}</div>
// //                 <div style={{ fontSize: '11px', color: '#666' }}>Total</div>
// //               </div>
// //               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#fff3cd', borderRadius: '6px' }}>
// //                 <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#856404' }}>{percentageHeads}%</div>
// //                 <div style={{ fontSize: '11px', color: '#856404' }}>Heads %</div>
// //               </div>
// //               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#fff', border: '2px solid #FFD700', borderRadius: '6px' }}>
// //                 <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{headsCount.toLocaleString()}</div>
// //                 <div style={{ fontSize: '11px', color: '#666' }}>Heads</div>
// //               </div>
// //               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#fff', border: '2px solid #C0C0C0', borderRadius: '6px' }}>
// //                 <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{tailsCount.toLocaleString()}</div>
// //                 <div style={{ fontSize: '11px', color: '#666' }}>Tails</div>
// //               </div>
// //             </div>
            
// //             <div style={{ fontSize: '12px', color: '#666', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '6px' }}>
// //               <div style={{ marginBottom: '4px' }}><strong>Expected:</strong> {expectedHeads.toFixed(1)} | <strong>Distance:</strong> {(distanceFromExpected * 100).toFixed(2)}%</div>
// //               {totalFlips > 0 && (
// //                 <>
// //                   <div style={{ marginBottom: '4px' }}><strong>Variance:</strong> {variance.toFixed(2)} | <strong>SD:</strong> {standardDeviation.toFixed(2)}</div>
// //                   <div><strong>Z-Score:</strong> {zScore.toFixed(3)} {Math.abs(zScore) > 2 ? '(Unusual!)' : '(Normal)'}</div>
// //                 </>
// //               )}
// //             </div>
// //           </div>

// //           {/* Streaks */}
// //           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
// //             <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Streaks</h3>
// //             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
// //               {currentStreak.type && (
// //                 <div style={{ textAlign: 'center', padding: '8px', backgroundColor: currentStreak.type === 'H' ? '#fff8e1' : '#f5f5f5', borderRadius: '6px',
// //                   border: '2px solid', borderColor: currentStreak.type === 'H' ? '#FFD700' : '#C0C0C0' }}>
// //                   <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{currentStreak.count}</div>
// //                   <div style={{ fontSize: '11px', color: '#666' }}>Current {currentStreak.type}</div>
// //                 </div>
// //               )}
// //               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#fff8e1', borderRadius: '6px', border: '1px solid #FFD700' }}>
// //                 <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{longestHeadsStreak}</div>
// //                 <div style={{ fontSize: '11px', color: '#666' }}>Longest H</div>
// //               </div>
// //               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '6px', border: '1px solid #C0C0C0' }}>
// //                 <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{longestTailsStreak}</div>
// //                 <div style={{ fontSize: '11px', color: '#666' }}>Longest T</div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Recent Flips */}
// //           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
// //             <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Recent Flips (Last {Math.min(flipHistory.length, 50)})</h3>
// //             {flipHistory.length === 0 ? (
// //               <div style={{ textAlign: 'center', color: '#999', padding: '15px', fontSize: '12px' }}>No flips yet</div>
// //             ) : (
// //               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4px' }}>
// //                 {flipHistory.slice(0, 50).map((flip, i) => (
// //                   <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: flip === 'H' ? '#FFD700' : '#C0C0C0',
// //                     display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold',
// //                     color: '#333', border: '2px solid #333' }}>{flip}</div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Right Column - Graph */}
// //         <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
// //           <h3 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '16px' }}>Convergence to Expected Probability</h3>
// //           <p style={{ fontSize: '12px', color: '#666', margin: '0 0 12px 0' }}>
// //             Watch the proportion converge to {(probHeads * 100).toFixed(0)}% as flips increase. Blue dashed lines show ±2 standard error confidence bands.
// //           </p>
// //           <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //             <ConvergenceGraph />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CoinFlipperSimulator;


// import React, { useState, useRef } from 'react';

// function CoinFlipperSimulator() {
//   const [state, setState] = useState({
//     totalFlips: 0,
//     headsCount: 0,
//     flipHistory: [],
//     currentFlip: null,
//     currentStreak: { type: null, count: 0 },
//     longestHeadsStreak: 0,
//     longestTailsStreak: 0,
//     convergenceData: []
//   });
  
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [probHeads, setProbHeads] = useState(0.5);
//   const [isContinuous, setIsContinuous] = useState(false);
//   const [speed, setSpeed] = useState(100);
  
//   const continuousInterval = useRef(null);
//   const animationTimeout = useRef(null);

//   const { totalFlips, headsCount, flipHistory, currentFlip, currentStreak, longestHeadsStreak, longestTailsStreak, convergenceData } = state;
//   const tailsCount = totalFlips - headsCount;
//   const headsProportion = totalFlips > 0 ? headsCount / totalFlips : 0;
//   const expectedHeads = totalFlips * probHeads;
//   const distanceFromExpected = totalFlips > 0 ? Math.abs(headsProportion - probHeads) : 0;
//   const percentageHeads = totalFlips > 0 ? (headsProportion * 100).toFixed(2) : 0;
//   const withinOnePercent = distanceFromExpected < 0.01;
//   const withinFivePercent = distanceFromExpected < 0.05;
  
//   const variance = totalFlips > 0 ? totalFlips * probHeads * (1 - probHeads) : 0;
//   const standardDeviation = Math.sqrt(variance);
//   const zScore = totalFlips > 0 && standardDeviation > 0 ? (headsCount - expectedHeads) / standardDeviation : 0;

//   const doFlips = (count) => {
//     const newFlips = [];
//     let newHeads = headsCount;
//     let streakType = currentStreak.type;
//     let streakCount = currentStreak.count;
//     let maxH = longestHeadsStreak;
//     let maxT = longestTailsStreak;
    
//     for (let i = 0; i < count; i++) {
//       const result = Math.random() < probHeads ? 'H' : 'T';
//       newFlips.push(result);
      
//       if (result === 'H') newHeads++;
      
//       if (streakType === result) {
//         streakCount++;
//         if (result === 'H' && streakCount > maxH) maxH = streakCount;
//         if (result === 'T' && streakCount > maxT) maxT = streakCount;
//       } else {
//         streakType = result;
//         streakCount = 1;
//       }
//     }
    
//     const newTotal = totalFlips + count;
//     const newProportion = newHeads / newTotal;
//     const newHistory = [...newFlips.reverse(), ...flipHistory].slice(0, 50);
    
//     const newConvergenceData = [...convergenceData, { flip: newTotal, proportion: newProportion }];
    
//     setState({
//       totalFlips: newTotal,
//       headsCount: newHeads,
//       flipHistory: newHistory,
//       currentFlip: newFlips[newFlips.length - 1],
//       currentStreak: { type: streakType, count: streakCount },
//       longestHeadsStreak: maxH,
//       longestTailsStreak: maxT,
//       convergenceData: newConvergenceData
//     });
//   };

//   const flipOnce = () => {
//     if (isFlipping) return;
//     setIsFlipping(true);
//     doFlips(1);
//     animationTimeout.current = setTimeout(() => setIsFlipping(false), 600);
//   };

//   const flipBatch = (count) => {
//     if (isFlipping) return;
//     setIsFlipping(true);
//     doFlips(count);
//     animationTimeout.current = setTimeout(() => setIsFlipping(false), 400);
//   };

//   const toggleContinuous = () => {
//     if (isContinuous) {
//       setIsContinuous(false);
//       if (continuousInterval.current) {
//         clearInterval(continuousInterval.current);
//         continuousInterval.current = null;
//       }
//     } else {
//       setIsContinuous(true);
//       continuousInterval.current = setInterval(() => doFlips(1), speed);
//     }
//   };

//   const reset = () => {
//     if (continuousInterval.current) clearInterval(continuousInterval.current);
//     if (animationTimeout.current) clearTimeout(animationTimeout.current);
//     setState({
//       totalFlips: 0,
//       headsCount: 0,
//       flipHistory: [],
//       currentFlip: null,
//       currentStreak: { type: null, count: 0 },
//       longestHeadsStreak: 0,
//       longestTailsStreak: 0,
//       convergenceData: []
//     });
//     setIsContinuous(false);
//     setIsFlipping(false);
//   };

//   const ConvergenceGraph = () => {
//     const width = 550;
//     const height = 400;
//     const padding = 40;
    
//     if (convergenceData.length === 0) {
//       return (
//         <div style={{ width: '100%', height, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', color: '#999' }}>
//           Start flipping to see convergence
//         </div>
//       );
//     }
    
//     const maxFlip = Math.max(...convergenceData.map(d => d.flip));
//     const scaleX = (flip) => padding + ((flip / maxFlip) * (width - 2 * padding));
//     const scaleY = (proportion) => height - padding - ((proportion) * (height - 2 * padding));
    
//     const pathData = convergenceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.proportion)}`).join(' ');
    
//     const confidenceBands = convergenceData.map(d => {
//       const se = Math.sqrt((probHeads * (1 - probHeads)) / d.flip);
//       return { flip: d.flip, upper: Math.min(1, probHeads + 2 * se), lower: Math.max(0, probHeads - 2 * se) };
//     });
    
//     const upperPath = confidenceBands.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.upper)}`).join(' ');
//     const lowerPath = confidenceBands.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.lower)}`).join(' ');
    
//     return (
//       <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
//         {[0, 0.25, 0.5, 0.75, 1].map(val => (
//           <g key={val}>
//             <line x1={padding} y1={scaleY(val)} x2={width - padding} y2={scaleY(val)} stroke="#e0e0e0" strokeWidth="1" />
//             <text x={padding - 10} y={scaleY(val) + 5} textAnchor="end" fontSize="11" fill="#666">{val.toFixed(2)}</text>
//           </g>
//         ))}
//         <path d={upperPath} fill="none" stroke="#b3d9ff" strokeWidth="1" strokeDasharray="3,3" />
//         <path d={lowerPath} fill="none" stroke="#b3d9ff" strokeWidth="1" strokeDasharray="3,3" />
//         <line x1={padding} y1={scaleY(probHeads)} x2={width - padding} y2={scaleY(probHeads)} stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
//         <path d={pathData} fill="none" stroke="#4A90E2" strokeWidth="2.5" />
//         <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#333" strokeWidth="2" />
//         <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#333" strokeWidth="2" />
//         <text x={width / 2} y={height - 5} textAnchor="middle" fontSize="12" fill="#333">Number of Flips</text>
//         <text x={12} y={height / 2} textAnchor="middle" fontSize="12" fill="#333" transform={`rotate(-90, 12, ${height / 2})`}>Proportion of Heads</text>
//         <g transform={`translate(${width - padding - 130}, ${padding + 5})`}>
//           <line x1="0" y1="0" x2="25" y2="0" stroke="#4A90E2" strokeWidth="2.5" />
//           <text x="30" y="4" fontSize="11" fill="#333">Actual</text>
//           <line x1="0" y1="15" x2="25" y2="15" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
//           <text x="30" y="19" fontSize="11" fill="#333">Expected</text>
//         </g>
//       </svg>
//     );
//   };

//   return (
//     <div style={{ padding: '15px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', height: '100vh', overflow: 'hidden' }}>
//       <div style={{ display: 'grid', gridTemplateColumns: '600px 1fr', gap: '15px', height: 'calc(100vh - 100px)' }}>
//         {/* Left Column */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
//           {/* Coin & Controls Combined */}
//           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px' }}>
//             <div style={{ display: 'flex', gap: '15px' }}>
//               {/* Coin */}
//               <div style={{ flex: '0 0 120px', textAlign: 'center' }}>
//                 <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
//                   <div style={{
//                     width: '100%', height: '100%', borderRadius: '50%', border: '3px solid #333',
//                     backgroundColor: currentFlip === 'H' ? '#FFD700' : currentFlip === 'T' ? '#C0C0C0' : '#e0e0e0',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#333',
//                     boxShadow: '0 3px 6px rgba(0,0,0,0.2)', transform: isFlipping ? 'rotateY(720deg)' : 'rotateY(0deg)',
//                     transition: 'transform 0.6s ease, background-color 0.3s ease'
//                   }}>{currentFlip || '?'}</div>
//                 </div>
//                 {currentFlip && <div style={{ fontSize: '16px', color: '#333', fontWeight: 'bold', marginTop: '5px' }}>{currentFlip === 'H' ? 'HEADS' : 'TAILS'}</div>}
//               </div>
              
//               {/* Controls */}
//               <div style={{ flex: '1' }}>
//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
//                   {[
//                     { label: 'Flip 1', count: 1 },
//                     { label: 'Flip 10', count: 10 },
//                     { label: 'Flip 100', count: 100 },
//                     { label: 'Flip 1K', count: 1000 },
//                     { label: 'Flip 10K', count: 10000, span: true }
//                   ].map(btn => (
//                     <button key={btn.count} onClick={() => btn.count === 1 ? flipOnce() : flipBatch(btn.count)} disabled={isFlipping || isContinuous}
//                       style={{ padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#4A90E2', color: 'white', border: 'none', borderRadius: '4px',
//                         cursor: isFlipping || isContinuous ? 'not-allowed' : 'pointer', opacity: isFlipping || isContinuous ? 0.5 : 1, gridColumn: btn.span ? 'span 2' : 'auto' }}>
//                       {btn.label}
//                     </button>
//                   ))}
//                 </div>
                
//                 <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
//                   <button onClick={toggleContinuous} style={{ flex: '1', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: isContinuous ? '#d9534f' : '#f0ad4e',
//                     color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{isContinuous ? 'Stop' : 'Auto'}</button>
//                   <div style={{ flex: '1' }}>
//                     <input type="range" min="10" max="500" step="10" value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} disabled={isContinuous} style={{ width: '100%' }} />
//                     <div style={{ fontSize: '10px', color: '#666', textAlign: 'center' }}>{speed}ms</div>
//                   </div>
//                 </div>
                
//                 <button onClick={reset} style={{ width: '100%', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#d9534f',
//                   color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reset</button>
//               </div>
//             </div>
            
//             {/* Coin Config */}
//             <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #ddd' }}>
//               <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#555' }}>P(Heads): {(probHeads * 100).toFixed(0)}%</label>
//               <input type="range" min="0" max="1" step="0.01" value={probHeads} onChange={(e) => setProbHeads(parseFloat(e.target.value))} disabled={totalFlips > 0} style={{ width: '100%' }} />
//               {totalFlips > 0 && <p style={{ fontSize: '10px', color: '#d9534f', margin: '3px 0 0 0' }}>Reset to change</p>}
//             </div>
//           </div>

//           {/* Streaks */}
//           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
//             <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Streaks</h3>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
//               {currentStreak.type && (
//                 <div style={{ textAlign: 'center', padding: '8px', backgroundColor: currentStreak.type === 'H' ? '#fff8e1' : '#f5f5f5', borderRadius: '6px',
//                   border: '2px solid', borderColor: currentStreak.type === 'H' ? '#FFD700' : '#C0C0C0' }}>
//                   <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{currentStreak.count}</div>
//                   <div style={{ fontSize: '11px', color: '#666' }}>Current {currentStreak.type}</div>
//                 </div>
//               )}
//               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#fff8e1', borderRadius: '6px', border: '1px solid #FFD700' }}>
//                 <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{longestHeadsStreak}</div>
//                 <div style={{ fontSize: '11px', color: '#666' }}>Longest H</div>
//               </div>
//               <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '6px', border: '1px solid #C0C0C0' }}>
//                 <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{longestTailsStreak}</div>
//                 <div style={{ fontSize: '11px', color: '#666' }}>Longest T</div>
//               </div>
//             </div>
//           </div>

//           {/* Recent Flips */}
//           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
//             <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Recent Flips (Last {Math.min(flipHistory.length, 50)})</h3>
//             {flipHistory.length === 0 ? (
//               <div style={{ textAlign: 'center', color: '#999', padding: '15px', fontSize: '12px' }}>No flips yet</div>
//             ) : (
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4px' }}>
//                 {flipHistory.slice(0, 50).map((flip, i) => (
//                   <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: flip === 'H' ? '#FFD700' : '#C0C0C0',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold',
//                     color: '#333', border: '2px solid #333' }}>{flip}</div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Column - Graph and Statistics */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto' }}>
//           {/* Graph Section */}
//           <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px' }}>
//             <h3 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '16px' }}>Convergence to Expected Probability</h3>
//             <p style={{ fontSize: '12px', color: '#666', margin: '0 0 10px 0' }}>
//               Watch the proportion converge to {(probHeads * 100).toFixed(0)}% as flips increase. Blue dashed lines show ±2 standard error confidence bands.
//             </p>
//             <ConvergenceGraph />
//           </div>

//           {/* Statistics - Moved Below Graph */}
//           <div style={{ backgroundColor: '#e3f2fd', border: '2px solid #90caf9', borderRadius: '8px', padding: '15px' }}>
//             <h3 style={{ margin: '0 0 15px 0', color: '#1976d2', fontSize: '18px' }}>Statistics</h3>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
//               <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//                 <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>{totalFlips.toLocaleString()}</div>
//                 <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Total</div>
//               </div>
//               <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//                 <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1976d2' }}>{percentageHeads}%</div>
//                 <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Heads %</div>
//               </div>
//               <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '2px solid #FFD700', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//                 <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#333' }}>{headsCount.toLocaleString()}</div>
//                 <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Heads</div>
//               </div>
//               <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '2px solid #C0C0C0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//                 <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#333' }}>{tailsCount.toLocaleString()}</div>
//                 <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Tails</div>
//               </div>
//             </div>
            
//             <div style={{ fontSize: '14px', color: '#1565c0', backgroundColor: '#bbdefb', padding: '12px', borderRadius: '8px' }}>
//               <div style={{ marginBottom: '6px' }}><strong>Expected:</strong> {expectedHeads.toFixed(1)} | <strong>Distance:</strong> {(distanceFromExpected * 100).toFixed(2)}%</div>
//               {totalFlips > 0 && (
//                 <>
//                   <div style={{ marginBottom: '6px' }}><strong>Variance:</strong> {variance.toFixed(2)} | <strong>SD:</strong> {standardDeviation.toFixed(2)}</div>
//                   <div><strong>Z-Score:</strong> {zScore.toFixed(3)} {Math.abs(zScore) > 2 ? '(Unusual!)' : '(Normal)'}</div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CoinFlipperSimulator;


import React, { useState, useRef } from 'react';

function CoinFlipperSimulator() {
  const [state, setState] = useState({
    totalFlips: 0,
    headsCount: 0,
    flipHistory: [],
    currentFlip: null,
    currentStreak: { type: null, count: 0 },
    longestHeadsStreak: 0,
    longestTailsStreak: 0,
    convergenceData: []
  });
  
  const [isFlipping, setIsFlipping] = useState(false);
  const [probHeads, setProbHeads] = useState(0.5);
  const [isContinuous, setIsContinuous] = useState(false);
  const [speed, setSpeed] = useState(100);
  
  const continuousInterval = useRef(null);
  const animationTimeout = useRef(null);

  const { totalFlips, headsCount, flipHistory, currentFlip, currentStreak, longestHeadsStreak, longestTailsStreak, convergenceData } = state;
  const tailsCount = totalFlips - headsCount;
  const headsProportion = totalFlips > 0 ? headsCount / totalFlips : 0;
  const expectedHeads = totalFlips * probHeads;
  const distanceFromExpected = totalFlips > 0 ? Math.abs(headsProportion - probHeads) : 0;
  const percentageHeads = totalFlips > 0 ? (headsProportion * 100).toFixed(2) : 0;
  const withinOnePercent = distanceFromExpected < 0.01;
  const withinFivePercent = distanceFromExpected < 0.05;
  
  const variance = totalFlips > 0 ? totalFlips * probHeads * (1 - probHeads) : 0;
  const standardDeviation = Math.sqrt(variance);
  const zScore = totalFlips > 0 && standardDeviation > 0 ? (headsCount - expectedHeads) / standardDeviation : 0;

  const doFlips = (count) => {
    const newFlips = [];
    let newHeads = headsCount;
    let streakType = currentStreak.type;
    let streakCount = currentStreak.count;
    let maxH = longestHeadsStreak;
    let maxT = longestTailsStreak;
    
    for (let i = 0; i < count; i++) {
      const result = Math.random() < probHeads ? 'H' : 'T';
      newFlips.push(result);
      
      if (result === 'H') newHeads++;
      
      if (streakType === result) {
        streakCount++;
        if (result === 'H' && streakCount > maxH) maxH = streakCount;
        if (result === 'T' && streakCount > maxT) maxT = streakCount;
      } else {
        streakType = result;
        streakCount = 1;
      }
    }
    
    const newTotal = totalFlips + count;
    const newProportion = newHeads / newTotal;
    const newHistory = [...newFlips.reverse(), ...flipHistory].slice(0, 50);
    
    const newConvergenceData = [...convergenceData, { flip: newTotal, proportion: newProportion }];
    
    setState({
      totalFlips: newTotal,
      headsCount: newHeads,
      flipHistory: newHistory,
      currentFlip: newFlips[newFlips.length - 1],
      currentStreak: { type: streakType, count: streakCount },
      longestHeadsStreak: maxH,
      longestTailsStreak: maxT,
      convergenceData: newConvergenceData
    });
  };

  const flipOnce = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    doFlips(1);
    animationTimeout.current = setTimeout(() => setIsFlipping(false), 600);
  };

  const flipBatch = (count) => {
    if (isFlipping) return;
    setIsFlipping(true);
    doFlips(count);
    animationTimeout.current = setTimeout(() => setIsFlipping(false), 400);
  };

  const toggleContinuous = () => {
    if (isContinuous) {
      setIsContinuous(false);
      if (continuousInterval.current) {
        clearInterval(continuousInterval.current);
        continuousInterval.current = null;
      }
    } else {
      setIsContinuous(true);
      continuousInterval.current = setInterval(() => doFlips(1), speed);
    }
  };

  const reset = () => {
    if (continuousInterval.current) clearInterval(continuousInterval.current);
    if (animationTimeout.current) clearTimeout(animationTimeout.current);
    setState({
      totalFlips: 0,
      headsCount: 0,
      flipHistory: [],
      currentFlip: null,
      currentStreak: { type: null, count: 0 },
      longestHeadsStreak: 0,
      longestTailsStreak: 0,
      convergenceData: []
    });
    setIsContinuous(false);
    setIsFlipping(false);
  };

  const ConvergenceGraph = () => {
    const width = 550;
    const height = 370;
    const padding = 40;
    
    if (convergenceData.length === 0) {
      return (
        <div style={{ width: '100%', height, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', color: '#999' }}>
          Start flipping to see convergence
        </div>
      );
    }
    
    const maxFlip = Math.max(...convergenceData.map(d => d.flip));
    const scaleX = (flip) => padding + ((flip / maxFlip) * (width - 2 * padding));
    const scaleY = (proportion) => height - padding - ((proportion) * (height - 2 * padding));
    
    const pathData = convergenceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.proportion)}`).join(' ');
    
    const confidenceBands = convergenceData.map(d => {
      const se = Math.sqrt((probHeads * (1 - probHeads)) / d.flip);
      return { flip: d.flip, upper: Math.min(1, probHeads + 2 * se), lower: Math.max(0, probHeads - 2 * se) };
    });
    
    const upperPath = confidenceBands.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.upper)}`).join(' ');
    const lowerPath = confidenceBands.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.flip)} ${scaleY(d.lower)}`).join(' ');
    
    return (
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
        {[0, 0.25, 0.5, 0.75, 1].map(val => (
          <g key={val}>
            <line x1={padding} y1={scaleY(val)} x2={width - padding} y2={scaleY(val)} stroke="#e0e0e0" strokeWidth="1" />
            <text x={padding - 10} y={scaleY(val) + 5} textAnchor="end" fontSize="11" fill="#666">{val.toFixed(2)}</text>
          </g>
        ))}
        <path d={upperPath} fill="none" stroke="#b3d9ff" strokeWidth="1" strokeDasharray="3,3" />
        <path d={lowerPath} fill="none" stroke="#b3d9ff" strokeWidth="1" strokeDasharray="3,3" />
        <line x1={padding} y1={scaleY(probHeads)} x2={width - padding} y2={scaleY(probHeads)} stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
        <path d={pathData} fill="none" stroke="#4A90E2" strokeWidth="2.5" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#333" strokeWidth="2" />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#333" strokeWidth="2" />
        <text x={width / 2} y={height - 5} textAnchor="middle" fontSize="12" fill="#333">Number of Flips</text>
        <text x={12} y={height / 2} textAnchor="middle" fontSize="12" fill="#333" transform={`rotate(-90, 12, ${height / 2})`}>Proportion of Heads</text>
        <g transform={`translate(${width - padding - 130}, ${padding + 5})`}>
          <line x1="0" y1="0" x2="25" y2="0" stroke="#4A90E2" strokeWidth="2.5" />
          <text x="30" y="4" fontSize="11" fill="#333">Actual</text>
          <line x1="0" y1="15" x2="25" y2="15" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
          <text x="30" y="19" fontSize="11" fill="#333">Expected</text>
        </g>
      </svg>
    );
  };

  return (
    <div style={{ padding: '15px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', height: '100vh', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '600px 1fr', gap: '15px', height: 'calc(100vh - 100px)' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          {/* Coin & Controls Combined */}
          <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              {/* Coin */}
              <div style={{ flex: '0 0 120px', textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
                  <div style={{
                    width: '100%', height: '100%', borderRadius: '50%', border: '3px solid #333',
                    backgroundColor: currentFlip === 'H' ? '#FFD700' : currentFlip === 'T' ? '#C0C0C0' : '#e0e0e0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', color: '#333',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.2)', transform: isFlipping ? 'rotateY(720deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.6s ease, background-color 0.3s ease'
                  }}>{currentFlip || '?'}</div>
                </div>
                {currentFlip && <div style={{ fontSize: '16px', color: '#333', fontWeight: 'bold', marginTop: '5px' }}>{currentFlip === 'H' ? 'HEADS' : 'TAILS'}</div>}
              </div>
              
              {/* Controls */}
              <div style={{ flex: '1' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
                  {[
                    { label: 'Flip 1', count: 1 },
                    { label: 'Flip 10', count: 10 },
                    { label: 'Flip 100', count: 100 },
                    { label: 'Flip 1K', count: 1000 },
                    { label: 'Flip 10K', count: 10000, span: true }
                  ].map(btn => (
                    <button key={btn.count} onClick={() => btn.count === 1 ? flipOnce() : flipBatch(btn.count)} disabled={isFlipping || isContinuous}
                      style={{ padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#4A90E2', color: 'white', border: 'none', borderRadius: '4px',
                        cursor: isFlipping || isContinuous ? 'not-allowed' : 'pointer', opacity: isFlipping || isContinuous ? 0.5 : 1, gridColumn: btn.span ? 'span 2' : 'auto' }}>
                      {btn.label}
                    </button>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                  <button onClick={toggleContinuous} style={{ flex: '1', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: isContinuous ? '#d9534f' : '#f0ad4e',
                    color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{isContinuous ? 'Stop' : 'Auto'}</button>
                  <div style={{ flex: '1' }}>
                    <input type="range" min="10" max="500" step="10" value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} disabled={isContinuous} style={{ width: '100%' }} />
                    <div style={{ fontSize: '10px', color: '#666', textAlign: 'center' }}>{speed}ms</div>
                  </div>
                </div>
                
                <button onClick={reset} style={{ width: '100%', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#d9534f',
                  color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reset</button>
              </div>
            </div>
            
            {/* Coin Config */}
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #ddd' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#555' }}>P(Heads): {(probHeads * 100).toFixed(0)}%</label>
              <input type="range" min="0" max="1" step="0.01" value={probHeads} onChange={(e) => setProbHeads(parseFloat(e.target.value))} disabled={totalFlips > 0} style={{ width: '100%' }} />
              {totalFlips > 0 && <p style={{ fontSize: '10px', color: '#d9534f', margin: '3px 0 0 0' }}>Reset to change</p>}
            </div>
          </div>

          {/* Streaks */}
          <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Streaks</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {currentStreak.type && (
                <div style={{ textAlign: 'center', padding: '8px', backgroundColor: currentStreak.type === 'H' ? '#fff8e1' : '#f5f5f5', borderRadius: '6px',
                  border: '2px solid', borderColor: currentStreak.type === 'H' ? '#FFD700' : '#C0C0C0' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{currentStreak.count}</div>
                  <div style={{ fontSize: '11px', color: '#666' }}>Current {currentStreak.type}</div>
                </div>
              )}
              <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#fff8e1', borderRadius: '6px', border: '1px solid #FFD700' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{longestHeadsStreak}</div>
                <div style={{ fontSize: '11px', color: '#666' }}>Longest H</div>
              </div>
              <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '6px', border: '1px solid #C0C0C0' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{longestTailsStreak}</div>
                <div style={{ fontSize: '11px', color: '#666' }}>Longest T</div>
              </div>
            </div>
          </div>

          {/* Recent Flips */}
          <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Recent Flips (Last {Math.min(flipHistory.length, 50)})</h3>
            {flipHistory.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#999', padding: '15px', fontSize: '12px' }}>No flips yet</div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '4px' }}>
                {flipHistory.slice(0, 50).map((flip, i) => (
                  <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: flip === 'H' ? '#FFD700' : '#C0C0C0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold',
                    color: '#333', border: '2px solid #333' }}>{flip}</div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Graph and Statistics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto' }}>
          {/* Graph Section */}
          <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '16px' }}>Convergence to Expected Probability</h3>
            <p style={{ fontSize: '12px', color: '#666', margin: '0 0 10px 0' }}>
              Watch the proportion converge to {(probHeads * 100).toFixed(0)}% as flips increase. Blue dashed lines show ±2 standard error confidence bands.
            </p>
            <ConvergenceGraph />
          </div>

          {/* Statistics - Moved Below Graph */}
          <div style={{ backgroundColor: '#e3f2fd', border: '2px solid #90caf9', borderRadius: '8px', padding: '15px' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#1976d2', fontSize: '18px' }}>Statistics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px', marginBottom: '15px' }}>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>{totalFlips.toLocaleString()}</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Total</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1976d2' }}>{percentageHeads}%</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Heads %</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '2px solid #FFD700', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#333' }}>{headsCount.toLocaleString()}</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Heads</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', border: '2px solid #C0C0C0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#333' }}>{tailsCount.toLocaleString()}</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Tails</div>
              </div>
            </div>
            
            <div style={{ fontSize: '14px', color: '#1565c0', backgroundColor: '#bbdefb', padding: '12px', borderRadius: '8px' }}>
              <div style={{ marginBottom: '6px' }}><strong>Expected:</strong> {expectedHeads.toFixed(1)} | <strong>Distance:</strong> {(distanceFromExpected * 100).toFixed(2)}%</div>
              {totalFlips > 0 && (
                <>
                  <div style={{ marginBottom: '6px' }}><strong>Variance:</strong> {variance.toFixed(2)} | <strong>SD:</strong> {standardDeviation.toFixed(2)}</div>
                  <div><strong>Z-Score:</strong> {zScore.toFixed(3)} {Math.abs(zScore) > 2 ? '(Unusual!)' : '(Normal)'}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinFlipperSimulator;