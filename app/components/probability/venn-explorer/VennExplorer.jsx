// // import React, { useState } from 'react';

// // const VennExplorer = ({ problemsData = [] }) => {
// //   const defaultProblems = [
// //     {
// //       name: "Demographics Study",
// //       events: ["Woman", "Unemployed", "Academic"],
// //       marginals: [0.5, 0.2, 0.62],
// //       constraints: [
// //         { display: "P(A ∩ Bᶜ) = 0.4" },
// //         { display: "P(A ∩ Cᶜ) = 0.18" }
// //       ],
// //       solution: [0.08, 0.02, 0.24, 0.16, 0.30, 0.10, 0.00, 0.10],
// //       explanations: [
// //         "Woman AND Unemployed AND Academic",
// //         "Woman AND Unemployed AND NOT Academic", 
// //         "Woman AND NOT Unemployed AND Academic",
// //         "Woman AND NOT Unemployed AND NOT Academic",
// //         "NOT Woman AND Unemployed AND Academic",
// //         "NOT Woman AND Unemployed AND NOT Academic",
// //         "NOT Woman AND NOT Unemployed AND Academic",
// //         "NOT Woman AND NOT Unemployed AND NOT Academic"
// //       ],
// //       calculations: {
// //         0: { step: "Let x = P(A∩B∩C)", formula: "Using system of equations, x = 0.08" },
// //         1: { step: "P(A∩B∩Cᶜ) = P(A∩B) - P(A∩B∩C)", formula: "= 0.1 - 0.08 = 0.02" },
// //         2: { step: "P(A∩Bᶜ∩C) = P(A∩C) - P(A∩B∩C)", formula: "= 0.32 - 0.08 = 0.24" },
// //         3: { step: "P(A∩Bᶜ∩Cᶜ) = P(A∩Bᶜ) - P(A∩Bᶜ∩C)", formula: "= 0.4 - 0.24 = 0.16" },
// //         4: { step: "P(Aᶜ∩B∩C) = P(B∩C) - P(A∩B∩C)", formula: "= 0.38 - 0.08 = 0.30" },
// //         5: { step: "P(Aᶜ∩B∩Cᶜ) = P(B) - P(A∩B) - P(Aᶜ∩B∩C)", formula: "= 0.2 - 0.1 - 0.0 = 0.10" },
// //         6: { step: "P(Aᶜ∩Bᶜ∩C) = P(C) - P(A∩C) - P(Aᶜ∩B∩C)", formula: "= 0.62 - 0.32 - 0.30 = 0.00" },
// //         7: { step: "P(Aᶜ∩Bᶜ∩Cᶜ) = 1 - sum of all other regions", formula: "= 1 - 0.9 = 0.10" }
// //       }
// //     }
// //   ];

// //   const problems = problemsData.length > 0 ? problemsData : defaultProblems;
// //   const [currentProblem, setCurrentProblem] = useState(0);
// //   const [selectedOutcome, setSelectedOutcome] = useState(null);
// //   const [hoveredOutcome, setHoveredOutcome] = useState(null);
// //   const [showCalculations, setShowCalculations] = useState(false);

// //   const problem = problems[currentProblem];
// //   const outcomes = ['A∩B∩C', 'A∩B∩Cᶜ', 'A∩Bᶜ∩C', 'A∩Bᶜ∩Cᶜ', 'Aᶜ∩B∩C', 'Aᶜ∩B∩Cᶜ', 'Aᶜ∩Bᶜ∩C', 'Aᶜ∩Bᶜ∩Cᶜ'];

// //   const MathText = ({ children }) => (
// //     <span style={{ fontFamily: 'Times, serif', fontStyle: 'italic' }}>{children}</span>
// //   );

// //   const VennSVG = ({ solution }) => {
// //     const segments = [
// //       { x: 250, y: 180 }, // 1: A∩B∩C - center
// //       { x: 250, y: 115 }, // 2: A∩B∩Cᶜ - top intersection
// //       { x: 195, y: 200 }, // 3: A∩Bᶜ∩C - left intersection
// //       { x: 170, y: 140 }, // 4: A∩Bᶜ∩Cᶜ - A only (left)
// //       { x: 305, y: 200 }, // 5: Aᶜ∩B∩C - right intersection
// //       { x: 330, y: 140 }, // 6: Aᶜ∩B∩Cᶜ - B only (right)
// //       { x: 250, y: 260 }, // 7: Aᶜ∩Bᶜ∩C - C only (bottom)
// //       { x: 400, y: 60 }   // 8: Aᶜ∩Bᶜ∩Cᶜ - outside all circles
// //     ];

// //     return (
// //       <div className="relative">
// //         <svg width="500" height="350" className="border rounded bg-white">
// //           <rect width="500" height="350" fill="#fafafa"/>
          
// //           {/* Omega symbol */}
// //           <text x="20" y="30" className="text-lg font-bold fill-gray-700">Ω</text>
          
// //           {/* Main circles */}
// //           <circle cx="200" cy="160" r="90" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="2"/>
// //           <circle cx="300" cy="160" r="90" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2"/>
// //           <circle cx="250" cy="220" r="90" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="2"/>

// //           {/* Clickable segments */}
// //           {segments.map((seg, i) => (
// //             <g key={i}>
// //               <rect 
// //                 x={seg.x - 15} y={seg.y - 10} width="30" height="20" 
// //                 fill={selectedOutcome === i ? "rgba(255,215,0,0.9)" : hoveredOutcome === i ? "rgba(255,255,0,0.6)" : "rgba(255,255,255,0.9)"}
// //                 stroke={selectedOutcome === i ? "#f59e0b" : "#333"} 
// //                 strokeWidth={selectedOutcome === i ? "2" : "1"} 
// //                 rx="3"
// //                 onMouseEnter={() => setHoveredOutcome(i)}
// //                 onMouseLeave={() => setHoveredOutcome(null)}
// //                 onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
// //                 style={{ cursor: 'pointer' }}
// //               />
// //               <text 
// //                 x={seg.x} y={seg.y + 3} 
// //                 textAnchor="middle" 
// //                 className="text-xs font-bold pointer-events-none"
// //               >
// //                 {i + 1}
// //               </text>
// //             </g>
// //           ))}

// //           {/* Event Labels */}
// //           <text x="130" y="120" className="text-xl font-bold fill-red-600">A</text>
// //           <text x="350" y="120" className="text-xl font-bold fill-green-600">B</text>
// //           <text x="245" y="300" className="text-xl font-bold fill-blue-600">C</text>
// //         </svg>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="max-w-5xl mx-auto p-6">
// //       <h1 className="text-2xl font-bold mb-6">3-Set Probability Problems</h1>
      
// //       {problems.length > 1 && (
// //         <div className="flex gap-2 mb-6 overflow-x-auto">
// //           {problems.map((p, i) => (
// //             <button 
// //               key={i}
// //               onClick={() => setCurrentProblem(i)}
// //               className={`px-4 py-2 rounded whitespace-nowrap ${
// //                 currentProblem === i ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
// //               }`}
// //             >
// //               {p.name}
// //             </button>
// //           ))}
// //         </div>
// //       )}
      
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //         <div>
// //           <h2 className="text-xl font-semibold mb-4">{problem.name}</h2>
          
// //           <div className="space-y-4">
// //             <div>
// //               <h3 className="font-medium mb-2">Events:</h3>
// //               {problem.events.map((event, i) => (
// //                 <div key={i} className="text-sm">
// //                   <MathText>{String.fromCharCode(65 + i)}</MathText>: {event} (<MathText>P = {problem.marginals[i]}</MathText>)
// //                 </div>
// //               ))}
// //             </div>

// //             <div>
// //               <h3 className="font-medium mb-2">Given Constraints:</h3>
// //               {problem.constraints.map((constraint, i) => (
// //                 <div key={i} className="text-sm bg-yellow-50 p-2 rounded">
// //                   <MathText>{constraint.display}</MathText>
// //                 </div>
// //               ))}
// //             </div>

// //             <div>
// //               <div className="flex justify-between items-center mb-2">
// //                 <h3 className="font-medium">8 Possible Outcomes:</h3>
// //                 <button 
// //                   onClick={() => setShowCalculations(!showCalculations)}
// //                   className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
// //                 >
// //                   {showCalculations ? 'Hide' : 'Show'} Calculations
// //                 </button>
// //               </div>
// //               <div className="space-y-1">
// //                 {outcomes.map((outcome, i) => (
// //                   <div 
// //                     key={i}
// //                     className={`p-2 border rounded text-sm ${
// //                       selectedOutcome === i ? 'bg-yellow-200 border-yellow-600' : hoveredOutcome === i ? 'bg-yellow-100 border-yellow-500' : 'bg-gray-50'
// //                     }`}
// //                     onMouseEnter={() => setHoveredOutcome(i)}
// //                     onMouseLeave={() => setHoveredOutcome(null)}
// //                     onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     <div className="flex justify-between items-center">
// //                       <div className="flex-1">
// //                         <span className="font-bold">#{i + 1}: </span>
// //                         <MathText>{outcome}</MathText>
// //                         <span className="text-gray-600 text-xs ml-2">= {problem.explanations[i]}</span>
// //                       </div>
// //                       <div className="font-mono font-bold ml-3">
// //                         {problem.solution[i]?.toFixed(3)}
// //                       </div>
// //                     </div>
// //                     {showCalculations && (
// //                       <div className="mt-2 p-2 bg-blue-50 rounded text-xs">
// //                         <div className="font-semibold mb-1">Calculation for #{i + 1}:</div>
// //                         <div className="text-gray-700 mb-1">{problem.calculations[i].step}</div>
// //                         <div className="font-mono text-blue-700">{problem.calculations[i].formula}</div>
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {showCalculations && (
// //               <div className="mt-4">
// //                 <h3 className="font-medium mb-2">General Solution Steps:</h3>
// //                 <div className="space-y-2 text-xs text-gray-600">
// //                   <div>1. Find P(A∩B) = P(A) - P(A∩Bᶜ) = 0.5 - 0.4 = 0.1</div>
// //                   <div>2. Find P(A∩C) = P(A) - P(A∩Cᶜ) = 0.5 - 0.18 = 0.32</div>
// //                   <div>3. Solve system of equations for all 8 regions</div>
// //                   <div>4. Click individual segments above to see specific calculations</div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         <div className="flex flex-col">
// //           <h3 className="text-lg font-semibold mb-4">Venn Diagram</h3>
// //           <VennSVG solution={problem.solution} />
// //           <div className="mt-4 text-sm text-gray-600">
// //             <p>• Click segments to select/deselect</p>
// //             <p>• Hover to preview outcomes</p>
// //             <p>• All 8 segments sum to 1.0</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VennExplorer;



// import React, { useState } from 'react';
// import styles from './VennExplorer.module.css';

// const VennExplorer = ({ problemsData = [] }) => {
//   const defaultProblems = [
//     {
//       name: "Demographics Study",
//       events: ["Woman", "Unemployed", "Academic"],
//       marginals: [0.5, 0.2, 0.62],
//       constraints: [
//         { display: "P(A ∩ Bᶜ) = 0.4" },
//         { display: "P(A ∩ Cᶜ) = 0.18" }
//       ],
//       solution: [0.08, 0.02, 0.24, 0.16, 0.30, 0.10, 0.00, 0.10],
//       explanations: [
//         "Woman AND Unemployed AND Academic",
//         "Woman AND Unemployed AND NOT Academic", 
//         "Woman AND NOT Unemployed AND Academic",
//         "Woman AND NOT Unemployed AND NOT Academic",
//         "NOT Woman AND Unemployed AND Academic",
//         "NOT Woman AND Unemployed AND NOT Academic",
//         "NOT Woman AND NOT Unemployed AND Academic",
//         "NOT Woman AND NOT Unemployed AND NOT Academic"
//       ],
//       calculations: {
//         0: { step: "Let x = P(A∩B∩C)", formula: "Using system of equations, x = 0.08" },
//         1: { step: "P(A∩B∩Cᶜ) = P(A∩B) - P(A∩B∩C)", formula: "= 0.1 - 0.08 = 0.02" },
//         2: { step: "P(A∩Bᶜ∩C) = P(A∩C) - P(A∩B∩C)", formula: "= 0.32 - 0.08 = 0.24" },
//         3: { step: "P(A∩Bᶜ∩Cᶜ) = P(A∩Bᶜ) - P(A∩Bᶜ∩C)", formula: "= 0.4 - 0.24 = 0.16" },
//         4: { step: "P(Aᶜ∩B∩C) = P(B∩C) - P(A∩B∩C)", formula: "= 0.38 - 0.08 = 0.30" },
//         5: { step: "P(Aᶜ∩B∩Cᶜ) = P(B) - P(A∩B) - P(Aᶜ∩B∩C)", formula: "= 0.2 - 0.1 - 0.0 = 0.10" },
//         6: { step: "P(Aᶜ∩Bᶜ∩C) = P(C) - P(A∩C) - P(Aᶜ∩B∩C)", formula: "= 0.62 - 0.32 - 0.30 = 0.00" },
//         7: { step: "P(Aᶜ∩Bᶜ∩Cᶜ) = 1 - sum of all other regions", formula: "= 1 - 0.9 = 0.10" }
//       }
//     }
//   ];

//   const problems = problemsData.length > 0 ? problemsData : defaultProblems;
//   const [currentProblem, setCurrentProblem] = useState(0);
//   const [selectedOutcome, setSelectedOutcome] = useState(null);
//   const [hoveredOutcome, setHoveredOutcome] = useState(null);
//   const [showCalculations, setShowCalculations] = useState(false);

//   const problem = problems[currentProblem];
//   const outcomes = ['A∩B∩C', 'A∩B∩Cᶜ', 'A∩Bᶜ∩C', 'A∩Bᶜ∩Cᶜ', 'Aᶜ∩B∩C', 'Aᶜ∩B∩Cᶜ', 'Aᶜ∩Bᶜ∩C', 'Aᶜ∩Bᶜ∩Cᶜ'];

//   const MathText = ({ children }) => (
//     <span className={styles.mathText}>{children}</span>
//   );

//   const VennSVG = ({ solution }) => {
//     const segments = [
//       { x: 250, y: 180 }, // 1: A∩B∩C - center
//       { x: 250, y: 115 }, // 2: A∩B∩Cᶜ - top intersection
//       { x: 195, y: 200 }, // 3: A∩Bᶜ∩C - left intersection
//       { x: 170, y: 140 }, // 4: A∩Bᶜ∩Cᶜ - A only (left)
//       { x: 305, y: 200 }, // 5: Aᶜ∩B∩C - right intersection
//       { x: 330, y: 140 }, // 6: Aᶜ∩B∩Cᶜ - B only (right)
//       { x: 250, y: 260 }, // 7: Aᶜ∩Bᶜ∩C - C only (bottom)
//       { x: 400, y: 60 }   // 8: Aᶜ∩Bᶜ∩Cᶜ - outside all circles
//     ];

//     return (
//       <div style={{ position: 'relative' }}>
//         <svg width="500" height="350" style={{ border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}>
//           <rect width="500" height="350" fill="#fafafa"/>
          
//           {/* Omega symbol */}
//           <text x="20" y="30" style={{ fontSize: '18px', fontWeight: 'bold', fill: '#374151' }}>Ω</text>
          
//           {/* Main circles */}
//           <circle cx="200" cy="160" r="90" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="2"/>
//           <circle cx="300" cy="160" r="90" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2"/>
//           <circle cx="250" cy="220" r="90" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="2"/>

//           {/* Clickable segments */}
//           {segments.map((seg, i) => (
//             <g key={i}>
//               <rect 
//                 x={seg.x - 15} y={seg.y - 10} width="30" height="20" 
//                 fill={selectedOutcome === i ? "rgba(255,215,0,0.9)" : hoveredOutcome === i ? "rgba(255,255,0,0.6)" : "rgba(255,255,255,0.9)"}
//                 stroke={selectedOutcome === i ? "#f59e0b" : "#333"} 
//                 strokeWidth={selectedOutcome === i ? "2" : "1"} 
//                 rx="3"
//                 onMouseEnter={() => setHoveredOutcome(i)}
//                 onMouseLeave={() => setHoveredOutcome(null)}
//                 onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
//                 style={{ cursor: 'pointer' }}
//               />
//               <text 
//                 x={seg.x} y={seg.y + 3} 
//                 textAnchor="middle" 
//                 style={{ fontSize: '12px', fontWeight: 'bold', pointerEvents: 'none' }}
//               >
//                 {i + 1}
//               </text>
//             </g>
//           ))}

//           {/* Event Labels */}
//           <text x="130" y="120" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#dc2626' }}>A</text>
//           <text x="350" y="120" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#16a34a' }}>B</text>
//           <text x="245" y="300" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#2563eb' }}>C</text>
//         </svg>
//       </div>
//     );
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>3-Set Probability Problems</h1>
      
//       {problems.length > 1 && (
//         <div className={styles.buttonContainer}>
//           {problems.map((p, i) => (
//             <button 
//               key={i}
//               onClick={() => setCurrentProblem(i)}
//               className={`${styles.button} ${currentProblem === i ? styles.buttonActive : styles.buttonInactive}`}
//             >
//               {p.name}
//             </button>
//           ))}
//         </div>
//       )}
      
//       <div className={styles.grid}>
//         <div>
//           <h2 className={styles.problemTitle}>{problem.name}</h2>
          
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//             <div className={styles.section}>
//               <h3 className={styles.sectionTitle}>Events:</h3>
//               {problem.events.map((event, i) => (
//                 <div key={i} className={styles.eventItem}>
//                   <MathText>{String.fromCharCode(65 + i)}</MathText>: {event} (<MathText>P = {problem.marginals[i]}</MathText>)
//                 </div>
//               ))}
//             </div>

//             <div className={styles.section}>
//               <h3 className={styles.sectionTitle}>Given Constraints:</h3>
//               {problem.constraints.map((constraint, i) => (
//                 <div key={i} className={styles.constraint}>
//                   <MathText>{constraint.display}</MathText>
//                 </div>
//               ))}
//             </div>

//             <div className={styles.section}>
//               <div className={styles.outcomeHeader}>
//                 <h3 className={styles.sectionTitle}>8 Possible Outcomes:</h3>
//                 <button 
//                   onClick={() => setShowCalculations(!showCalculations)}
//                   className={styles.calcButton}
//                 >
//                   {showCalculations ? 'Hide' : 'Show'} Calculations
//                 </button>
//               </div>
//               <div className={styles.outcomeList}>
//                 {outcomes.map((outcome, i) => (
//                   <div 
//                     key={i}
//                     className={`${styles.outcomeItem} ${selectedOutcome === i ? styles.outcomeActive : ''}`}
//                     onMouseEnter={() => setHoveredOutcome(i)}
//                     onMouseLeave={() => setHoveredOutcome(null)}
//                     onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
//                   >
//                     <div className={styles.outcomeContent}>
//                       <div className={styles.outcomeLeft}>
//                         <span className={styles.outcomeNumber}>#{i + 1}: </span>
//                         <MathText>{outcome}</MathText>
//                         <span className={styles.outcomeExplanation}>= {problem.explanations[i]}</span>
//                       </div>
//                       <div className={styles.probability}>
//                         {problem.solution[i]?.toFixed(3)}
//                       </div>
//                     </div>
//                     {showCalculations && (
//                       <div className={styles.calculation}>
//                         <div className={styles.calcTitle}>Calculation for #{i + 1}:</div>
//                         <div className={styles.calcStep}>{problem.calculations[i].step}</div>
//                         <div className={styles.calcFormula}>{problem.calculations[i].formula}</div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {showCalculations && (
//               <div className={styles.generalSteps}>
//                 <h3 className={styles.sectionTitle}>General Solution Steps:</h3>
//                 <div className={styles.stepsList}>
//                   <div>1. Find P(A∩B) = P(A) - P(A∩Bᶜ) = 0.5 - 0.4 = 0.1</div>
//                   <div>2. Find P(A∩C) = P(A) - P(A∩Cᶜ) = 0.5 - 0.18 = 0.32</div>
//                   <div>3. Solve system of equations for all 8 regions</div>
//                   <div>4. Click individual segments above to see specific calculations</div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className={styles.diagramContainer}>
//           <h3 className={styles.diagramTitle}>Venn Diagram</h3>
//           <VennSVG solution={problem.solution} />
//           <div className={styles.diagramNotes}>
//             <p>• Click segments to select/deselect</p>
//             <p>• Hover to preview outcomes</p>
//             <p>• All 8 segments sum to 1.0</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VennExplorer;


import React, { useState } from 'react';
import styles from './VennExplorer.module.css';

const VennExplorer = ({ problemsData = [] }) => {
  const defaultProblems = [
    {
      name: "Demographics Study",
      events: ["Woman", "Unemployed", "Academic"],
      marginals: [0.5, 0.2, 0.62],
      constraints: [
        { display: "P(A ∩ Bᶜ) = 0.4" },
        { display: "P(A ∩ Cᶜ) = 0.18" }
      ],
      solution: [0.08, 0.02, 0.24, 0.16, 0.30, 0.10, 0.00, 0.10],
      explanations: [
        "Woman AND Unemployed AND Academic",
        "Woman AND Unemployed AND NOT Academic", 
        "Woman AND NOT Unemployed AND Academic",
        "Woman AND NOT Unemployed AND NOT Academic",
        "NOT Woman AND Unemployed AND Academic",
        "NOT Woman AND Unemployed AND NOT Academic",
        "NOT Woman AND NOT Unemployed AND Academic",
        "NOT Woman AND NOT Unemployed AND NOT Academic"
      ],
      calculations: {
        0: { step: "Let x = P(A∩B∩C)", formula: "Using system of equations, x = 0.08" },
        1: { step: "P(A∩B∩Cᶜ) = P(A∩B) - P(A∩B∩C)", formula: "= 0.1 - 0.08 = 0.02" },
        2: { step: "P(A∩Bᶜ∩C) = P(A∩C) - P(A∩B∩C)", formula: "= 0.32 - 0.08 = 0.24" },
        3: { step: "P(A∩Bᶜ∩Cᶜ) = P(A∩Bᶜ) - P(A∩Bᶜ∩C)", formula: "= 0.4 - 0.24 = 0.16" },
        4: { step: "P(Aᶜ∩B∩C) = P(B∩C) - P(A∩B∩C)", formula: "= 0.38 - 0.08 = 0.30" },
        5: { step: "P(Aᶜ∩B∩Cᶜ) = P(B) - P(A∩B) - P(Aᶜ∩B∩C)", formula: "= 0.2 - 0.1 - 0.0 = 0.10" },
        6: { step: "P(Aᶜ∩Bᶜ∩C) = P(C) - P(A∩C) - P(Aᶜ∩B∩C)", formula: "= 0.62 - 0.32 - 0.30 = 0.00" },
        7: { step: "P(Aᶜ∩Bᶜ∩Cᶜ) = 1 - sum of all other regions", formula: "= 1 - 0.9 = 0.10" }
      }
    }
  ];

  const problems = problemsData.length > 0 ? problemsData : defaultProblems;
  const [currentProblem, setCurrentProblem] = useState(0);
  const [selectedOutcome, setSelectedOutcome] = useState(null);
  const [hoveredOutcome, setHoveredOutcome] = useState(null);
  const [showCalculations, setShowCalculations] = useState(false);

  const problem = problems[currentProblem];
  const outcomes = ['A∩B∩C', 'A∩B∩Cᶜ', 'A∩Bᶜ∩C', 'A∩Bᶜ∩Cᶜ', 'Aᶜ∩B∩C', 'Aᶜ∩B∩Cᶜ', 'Aᶜ∩Bᶜ∩C', 'Aᶜ∩Bᶜ∩Cᶜ'];

  const MathText = ({ children }) => (
    <span className={styles.mathText}>{children}</span>
  );

  const VennSVG = ({ solution }) => {
    const segments = [
      { x: 250, y: 180 }, // 1: A∩B∩C - center
      { x: 250, y: 115 }, // 2: A∩B∩Cᶜ - top intersection
      { x: 195, y: 200 }, // 3: A∩Bᶜ∩C - left intersection
      { x: 170, y: 140 }, // 4: A∩Bᶜ∩Cᶜ - A only (left)
      { x: 305, y: 200 }, // 5: Aᶜ∩B∩C - right intersection
      { x: 330, y: 140 }, // 6: Aᶜ∩B∩Cᶜ - B only (right)
      { x: 250, y: 260 }, // 7: Aᶜ∩Bᶜ∩C - C only (bottom)
      { x: 400, y: 60 }   // 8: Aᶜ∩Bᶜ∩Cᶜ - outside all circles
    ];

    return (
      <div style={{ position: 'relative' }}>
        <svg width="500" height="350" style={{ border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}>
          <rect width="500" height="350" fill="#fafafa"/>
          
          {/* Omega symbol */}
          <text x="20" y="30" style={{ fontSize: '18px', fontWeight: 'bold', fill: '#374151' }}>Ω</text>
          
          {/* Main circles */}
          <circle cx="200" cy="160" r="90" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="2"/>
          <circle cx="300" cy="160" r="90" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2"/>
          <circle cx="250" cy="220" r="90" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="2"/>

          {/* Clickable segments */}
          {segments.map((seg, i) => (
            <g key={i}>
              <rect 
                x={seg.x - 15} y={seg.y - 10} width="30" height="20" 
                fill={selectedOutcome === i ? "rgba(255,215,0,0.9)" : hoveredOutcome === i ? "rgba(255,255,0,0.6)" : "rgba(255,255,255,0.9)"}
                stroke={selectedOutcome === i ? "#f59e0b" : "#333"} 
                strokeWidth={selectedOutcome === i ? "2" : "1"} 
                rx="3"
                onMouseEnter={() => setHoveredOutcome(i)}
                onMouseLeave={() => setHoveredOutcome(null)}
                onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
                style={{ cursor: 'pointer' }}
              />
              <text 
                x={seg.x} y={seg.y + 3} 
                textAnchor="middle" 
                style={{ fontSize: '12px', fontWeight: 'bold', pointerEvents: 'none' }}
              >
                {i + 1}
              </text>
            </g>
          ))}

          {/* Event Labels */}
          <text x="130" y="120" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#dc2626' }}>A</text>
          <text x="350" y="120" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#16a34a' }}>B</text>
          <text x="245" y="300" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#2563eb' }}>C</text>
        </svg>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>3-Set Probability Problems</h1>
          {problems.length > 1 && (
            <div className={styles.buttonContainer}>
              {problems.map((p, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentProblem(i)}
                  className={`${styles.button} ${currentProblem === i ? styles.buttonActive : styles.buttonInactive}`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <h3 className={styles.diagramTitle}>Venn Diagram</h3>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <h2 className={styles.problemTitle}>{problem.name}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Events:</h3>
              {problem.events.map((event, i) => (
                <div key={i} className={styles.eventItem}>
                  <MathText>{String.fromCharCode(65 + i)}</MathText>: {event} (<MathText>P = {problem.marginals[i]}</MathText>)
                </div>
              ))}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Given Constraints:</h3>
              {problem.constraints.map((constraint, i) => (
                <div key={i} className={styles.constraint}>
                  <MathText>{constraint.display}</MathText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.middleColumn}>
          <div className={styles.section}>
            <div className={styles.outcomeHeader}>
              <h3 className={styles.sectionTitle}>8 Possible Outcomes:</h3>
              <button 
                onClick={() => setShowCalculations(!showCalculations)}
                className={styles.calcButton}
              >
                {showCalculations ? 'Hide' : 'Show'} Calculations
              </button>
            </div>
            <div className={styles.outcomeList}>
              {outcomes.map((outcome, i) => (
                <div 
                  key={i}
                  className={`${styles.outcomeItem} ${selectedOutcome === i ? styles.outcomeActive : ''}`}
                  onMouseEnter={() => setHoveredOutcome(i)}
                  onMouseLeave={() => setHoveredOutcome(null)}
                  onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
                >
                  <div className={styles.outcomeContent}>
                    <div className={styles.outcomeLeft}>
                      <span className={styles.outcomeNumber}>#{i + 1}: </span>
                      <MathText>{outcome}</MathText>
                      <span className={styles.outcomeExplanation}>= {problem.explanations[i]}</span>
                    </div>
                    <div className={styles.probability}>
                      {problem.solution[i]?.toFixed(3)}
                    </div>
                  </div>
                  {showCalculations && (
                    <div className={styles.calculation}>
                      <div className={styles.calcTitle}>Calculation for #{i + 1}:</div>
                      <div className={styles.calcStep}>{problem.calculations[i].step}</div>
                      <div className={styles.calcFormula}>{problem.calculations[i].formula}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {showCalculations && (
            <div className={styles.generalSteps}>
              <h3 className={styles.sectionTitle}>General Solution Steps:</h3>
              <div className={styles.stepsList}>
                <div>1. Find P(A∩B) = P(A) - P(A∩Bᶜ) = 0.5 - 0.4 = 0.1</div>
                <div>2. Find P(A∩C) = P(A) - P(A∩Cᶜ) = 0.5 - 0.18 = 0.32</div>
                <div>3. Solve system of equations for all 8 regions</div>
                <div>4. Click individual segments above to see specific calculations</div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.rightColumn}>
          <VennSVG solution={problem.solution} />
          <div className={styles.diagramNotes}>
            <p>• Click segments to select/deselect</p>
            <p>• Hover to preview outcomes</p>
            <p>• All 8 segments sum to 1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VennExplorer;