// // import React, { useState, useEffect, useCallback, useRef } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import styles from './AnimatedTriangle.module.css';

// // const AnimatedTriangle = ({ scenario }) => {
// //   const [stage, setStage] = useState(0);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const svgRef = useRef(null);

// //   useEffect(() => {
// //     if (scenario && scenario.stages) {
// //       setStage(0);
// //       setIsPlaying(false);
// //     }
// //   }, [scenario]);

// //   const nextStage = useCallback(() => {
// //     setStage((prev) => Math.min(prev + 1, (scenario.stages?.length || 1) - 1));
// //   }, [scenario.stages]);

// //   const previousStage = useCallback(() => {
// //     setStage((prev) => Math.max(prev - 1, 0));
// //   }, [scenario.stages]);

// //   const handleReset = useCallback(() => {
// //     setStage(0);
// //     setIsPlaying(false);
// //   }, []);

// //   const handlePlayPause = useCallback(() => {
// //     setIsPlaying((prev) => !prev);
// //   }, []);

// //   useEffect(() => {
// //     let intervalId;
// //     if (isPlaying) {
// //       intervalId = setInterval(() => {
// //         setStage((prev) => {
// //           if (prev < (scenario.stages?.length || 1) - 1) {
// //             return prev + 1;
// //           } else {
// //             setIsPlaying(false);
// //             return 0;
// //           }
// //         });
// //       }, scenario.timing || 2000);
// //     }
// //     return () => clearInterval(intervalId);
// //   }, [isPlaying, scenario.stages, scenario.timing]);

// //   const handleDownload = useCallback(() => {
// //     if (svgRef.current) {
// //       const svgData = new XMLSerializer().serializeToString(svgRef.current);
// //       const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
// //       const url = URL.createObjectURL(blob);
// //       const downloadLink = document.createElement('a');
// //       downloadLink.href = url;
// //       downloadLink.download = `triangle_stage_${stage + 1}.svg`;
// //       document.body.appendChild(downloadLink);
// //       downloadLink.click();
// //       document.body.removeChild(downloadLink);
// //       URL.revokeObjectURL(url);
// //     }
// //   }, [stage]);

// //   const calculateTriangleProperties = useCallback(() => {
// //     if (!scenario.vertices) return {};
    
// //     const { A, B, C } = scenario.vertices;
// //     const opposite = Math.abs(C.y - A.y);
// //     const adjacent = Math.abs(B.x - A.x);
// //     const hypotenuse = Math.sqrt(Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2));
    
// //     const thetaRad = Math.atan(opposite / adjacent);
// //     const alphaRad = Math.atan(adjacent / opposite);
// //     const thetaDeg = thetaRad * (180 / Math.PI);
// //     const alphaDeg = alphaRad * (180 / Math.PI);
    
// //     return {
// //       opposite,
// //       adjacent,
// //       hypotenuse,
// //       thetaRad,
// //       alphaRad,
// //       thetaDeg,
// //       alphaDeg,
// //       sinTheta: opposite / hypotenuse,
// //       cosTheta: adjacent / hypotenuse,
// //       tanTheta: opposite / adjacent
// //     };
// //   }, [scenario.vertices]);

// //   const renderCurrentStage = useCallback(() => {
// //     if (!scenario.stages || !scenario.stages[stage] || !scenario.vertices) return null;
    
// //     const currentStage = scenario.stages[stage];
// //     const { A, B, C } = scenario.vertices;
// //     const props = calculateTriangleProperties();
// //     const elements = [];

// //     // Triangle sides
// //     if (currentStage.showBase) {
// //       elements.push(
// //         <motion.line
// //           key="base"
// //           x1={A.x} y1={A.y} x2={B.x} y2={B.y}
// //           stroke="#000" strokeWidth="1"
// //           initial={{ pathLength: 0 }}
// //           animate={{ pathLength: 1 }}
// //           transition={{ duration: 0.8 }}
// //         />
// //       );
// //     }

// //     if (currentStage.showHeight) {
// //       elements.push(
// //         <motion.line
// //           key="height"
// //           x1={A.x} y1={A.y} x2={C.x} y2={C.y}
// //           stroke="#000" strokeWidth="1"
// //           initial={{ pathLength: 0 }}
// //           animate={{ pathLength: 1 }}
// //           transition={{ duration: 0.8, delay: 0.3 }}
// //         />
// //       );
// //     }

// //     if (currentStage.showHypotenuse) {
// //       elements.push(
// //         <motion.line
// //           key="hypotenuse"
// //           x1={B.x} y1={B.y} x2={C.x} y2={C.y}
// //           stroke="#000" strokeWidth="1"
// //           initial={{ pathLength: 0 }}
// //           animate={{ pathLength: 1 }}
// //           transition={{ duration: 0.8, delay: 0.6 }}
// //         />
// //       );
// //     }

// //     // Right angle indicator
// //     if (currentStage.showRightAngle) {
// //       elements.push(
// //         <motion.path
// //           key="right-angle"
// //           d={`M ${A.x + 15} ${A.y} L ${A.x + 15} ${A.y - 15} L ${A.x} ${A.y - 15}`}
// //           fill="none" stroke="#000" strokeWidth="1"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5, delay: 0.8 }}
// //         />
// //       );
// //     }

// //     // Angles
// //     if (currentStage.showThetaAngle && props.thetaRad) {
// //       const arcRadius = 25;
// //       elements.push(
// //         <motion.path
// //           key="theta-angle"
// //           d={`M ${B.x - arcRadius} ${B.y} A ${arcRadius} ${arcRadius} 0 0 1 ${B.x - arcRadius * Math.cos(props.thetaRad)} ${B.y - arcRadius * Math.sin(props.thetaRad)}`}
// //           fill="none" stroke="#000" strokeWidth="1"
// //           initial={{ pathLength: 0 }}
// //           animate={{ pathLength: 1 }}
// //           transition={{ duration: 0.8, delay: 1 }}
// //         />
// //       );
// //     }

// //     if (currentStage.showAlphaAngle && props.alphaRad) {
// //       const arcRadius = 25;
// //       elements.push(
// //         <motion.path
// //           key="alpha-angle"
// //           d={`M ${C.x + arcRadius} ${C.y} A ${arcRadius} ${arcRadius} 0 0 1 ${C.x + arcRadius * Math.cos(Math.PI - props.alphaRad)} ${C.y + arcRadius * Math.sin(Math.PI - props.alphaRad)}`}
// //           fill="none" stroke="#000" strokeWidth="1"
// //           initial={{ pathLength: 0 }}
// //           animate={{ pathLength: 1 }}
// //           transition={{ duration: 0.8, delay: 1.2 }}
// //         />
// //       );
// //     }

// //     // Labels
// //     if (currentStage.showVertexLabels) {
// //       elements.push(
// //         <motion.g key="vertex-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
// //           <text x={A.x - 15} y={A.y + 15} fill="#000" fontSize="12">{scenario.labels?.vertexA || 'A'}</text>
// //           <text x={B.x + 5} y={B.y + 15} fill="#000" fontSize="12">{scenario.labels?.vertexB || 'B'}</text>
// //           <text x={C.x - 15} y={C.y - 5} fill="#000" fontSize="12">{scenario.labels?.vertexC || 'C'}</text>
// //         </motion.g>
// //       );
// //     }

// //     if (currentStage.showAngleLabels) {
// //       elements.push(
// //         <motion.g key="angle-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
// //           <text x={B.x - 35} y={B.y - 8} fill="#000" fontSize="14">{scenario.labels?.theta || 'θ'}</text>
// //           <text x={C.x + 30} y={C.y + 15} fill="#000" fontSize="14">{scenario.labels?.alpha || 'α'}</text>
// //           <text x={A.x + 20} y={A.y - 20} fill="#000" fontSize="12">90°</text>
// //         </motion.g>
// //       );
// //     }

// //     if (currentStage.showSideLabels) {
// //       elements.push(
// //         <motion.g key="side-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
// //           <text x={A.x - 40} y={(A.y + C.y) / 2} fill="#000" fontSize="12" textAnchor="middle">
// //             {scenario.labels?.opposite || 'opposite'}
// //           </text>
// //           <text x={(A.x + B.x) / 2} y={A.y + 20} fill="#000" fontSize="12" textAnchor="middle">
// //             {scenario.labels?.adjacent || 'adjacent'}
// //           </text>
// //           <text x={(B.x + C.x) / 2 + 20} y={(B.y + C.y) / 2} fill="#000" fontSize="12" textAnchor="middle">
// //             {scenario.labels?.hypotenuse || 'hypotenuse'}
// //           </text>
// //         </motion.g>
// //       );
// //     }

// //     if (currentStage.showMeasurements) {
// //       elements.push(
// //         <motion.g key="measurements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
// //           <text x={A.x - 60} y={(A.y + C.y) / 2} fill="#666" fontSize="10">
// //             {props.opposite?.toFixed(0)}
// //           </text>
// //           <text x={(A.x + B.x) / 2} y={A.y + 35} fill="#666" fontSize="10">
// //             {props.adjacent?.toFixed(0)}
// //           </text>
// //           <text x={(B.x + C.x) / 2 + 35} y={(B.y + C.y) / 2} fill="#666" fontSize="10">
// //             {props.hypotenuse?.toFixed(1)}
// //           </text>
// //         </motion.g>
// //       );
// //     }

// //     // Highlight elements
// //     if (currentStage.highlightOpposite) {
// //       elements.push(
// //         <motion.line
// //           key="highlight-opposite"
// //           x1={A.x} y1={A.y} x2={C.x} y2={C.y}
// //           stroke="#666" strokeWidth="3" opacity="0.7"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 0.7 }}
// //           transition={{ duration: 0.5 }}
// //         />
// //       );
// //     }

// //     if (currentStage.highlightAdjacent) {
// //       elements.push(
// //         <motion.line
// //           key="highlight-adjacent"
// //           x1={A.x} y1={A.y} x2={B.x} y2={B.y}
// //           stroke="#666" strokeWidth="3" opacity="0.7"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 0.7 }}
// //           transition={{ duration: 0.5 }}
// //         />
// //       );
// //     }

// //     if (currentStage.highlightHypotenuse) {
// //       elements.push(
// //         <motion.line
// //           key="highlight-hypotenuse"
// //           x1={B.x} y1={B.y} x2={C.x} y2={C.y}
// //           stroke="#666" strokeWidth="3" opacity="0.7"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 0.7 }}
// //           transition={{ duration: 0.5 }}
// //         />
// //       );
// //     }

// //     return elements;
// //   }, [scenario, stage, calculateTriangleProperties]);

// //   if (!scenario || !scenario.stages) {
// //     return <div>No scenario data available</div>;
// //   }

// //   const currentStage = scenario.stages[stage];
// //   const props = calculateTriangleProperties();

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.leftColumn}>
// //         <h4>{scenario.title}</h4>
        
// //         <div className={styles.svgContainer}>
// //           <svg
// //             ref={svgRef}
// //             width="100%"
// //             height="400"
// //             viewBox="0 0 500 400"
// //           >
// //             <AnimatePresence>
// //               {renderCurrentStage()}
// //             </AnimatePresence>
// //           </svg>
// //         </div>
        
// //         <div className={styles.controls}>
// //           <button onClick={previousStage} disabled={stage === 0}>
// //             Previous
// //           </button>
// //           <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
// //           <button onClick={nextStage} disabled={stage === scenario.stages.length - 1}>
// //             Next
// //           </button>
// //           <button onClick={handleReset}>Reset</button>
// //         </div>
        
// //         <button className={styles.downloadBtn} onClick={handleDownload}>
// //           Download
// //         </button>
        
// //         <div className={styles.stageInfo}>
// //           Stage: {stage + 1} / {scenario.stages.length}
// //         </div>
// //       </div>
      
// //       <div className={styles.rightColumn}>
// //         <div className={styles.description}>
// //           <h4>Description</h4>
// //           <p>{scenario.description}</p>
// //           {currentStage && currentStage.explanation && (
// //             <div className={styles.stageExplanation}>
// //               <h5>Current Stage:</h5>
// //               <p>{currentStage.explanation}</p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Formulas panel */}
// //         {props.sinTheta && (
// //           <div className={styles.formulas}>
// //             <h4>Trigonometric Ratios</h4>
// //             {currentStage.showSineFormula && (
// //               <div className={`${styles.formula} ${currentStage.highlightSine ? styles.highlighted : ''}`}>
// //                 <strong>sin θ = opposite / hypotenuse</strong><br/>
// //                 sin θ = {props.opposite?.toFixed(0)} / {props.hypotenuse?.toFixed(1)} = {props.sinTheta?.toFixed(3)}
// //               </div>
// //             )}
// //             {currentStage.showCosineFormula && (
// //               <div className={`${styles.formula} ${currentStage.highlightCosine ? styles.highlighted : ''}`}>
// //                 <strong>cos θ = adjacent / hypotenuse</strong><br/>
// //                 cos θ = {props.adjacent?.toFixed(0)} / {props.hypotenuse?.toFixed(1)} = {props.cosTheta?.toFixed(3)}
// //               </div>
// //             )}
// //             {currentStage.showTangentFormula && (
// //               <div className={`${styles.formula} ${currentStage.highlightTangent ? styles.highlighted : ''}`}>
// //                 <strong>tan θ = opposite / adjacent</strong><br/>
// //                 tan θ = {props.opposite?.toFixed(0)} / {props.adjacent?.toFixed(0)} = {props.tanTheta?.toFixed(3)}
// //               </div>
// //             )}
// //             {currentStage.showPythagorean && (
// //               <div className={styles.identity}>
// //                 <strong>sin²θ + cos²θ = 1</strong><br/>
// //                 {props.sinTheta?.toFixed(3)}² + {props.cosTheta?.toFixed(3)}² = {(props.sinTheta*props.sinTheta + props.cosTheta*props.cosTheta)?.toFixed(3)}
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnimatedTriangle;


// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './AnimatedTriangle.module.css';

// const AnimatedTriangle = ({ scenario }) => {
//   const [stage, setStage] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const svgRef = useRef(null);

//   useEffect(() => {
//     if (scenario && scenario.stages) {
//       setStage(0);
//       setIsPlaying(false);
//     }
//   }, [scenario]);

//   const nextStage = useCallback(() => {
//     setStage((prev) => Math.min(prev + 1, (scenario.stages?.length || 1) - 1));
//   }, [scenario.stages]);

//   const previousStage = useCallback(() => {
//     setStage((prev) => Math.max(prev - 1, 0));
//   }, [scenario.stages]);

//   const handleReset = useCallback(() => {
//     setStage(0);
//     setIsPlaying(false);
//   }, []);

//   const handlePlayPause = useCallback(() => {
//     setIsPlaying((prev) => !prev);
//   }, []);

//   useEffect(() => {
//     let intervalId;
//     if (isPlaying) {
//       intervalId = setInterval(() => {
//         setStage((prev) => {
//           if (prev < (scenario.stages?.length || 1) - 1) {
//             return prev + 1;
//           } else {
//             setIsPlaying(false);
//             return 0;
//           }
//         });
//       }, scenario.timing || 2000);
//     }
//     return () => clearInterval(intervalId);
//   }, [isPlaying, scenario.stages, scenario.timing]);

//   const handleDownload = useCallback(() => {
//     if (svgRef.current) {
//       const svgData = new XMLSerializer().serializeToString(svgRef.current);
//       const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//       const url = URL.createObjectURL(blob);
//       const downloadLink = document.createElement('a');
//       downloadLink.href = url;
//       downloadLink.download = `triangle_stage_${stage + 1}.svg`;
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//       URL.revokeObjectURL(url);
//     }
//   }, [stage]);

//   const calculateTriangleProperties = useCallback(() => {
//     if (!scenario.vertices) return {};
    
//     const { A, B, C } = scenario.vertices;
//     const opposite = Math.abs(C.y - A.y);
//     const adjacent = Math.abs(B.x - A.x);
//     const hypotenuse = Math.sqrt(Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2));
    
//     const thetaRad = Math.atan(opposite / adjacent);
//     const alphaRad = Math.atan(adjacent / opposite);
//     const thetaDeg = thetaRad * (180 / Math.PI);
//     const alphaDeg = alphaRad * (180 / Math.PI);
    
//     return {
//       opposite,
//       adjacent,
//       hypotenuse,
//       thetaRad,
//       alphaRad,
//       thetaDeg,
//       alphaDeg,
//       sinTheta: opposite / hypotenuse,
//       cosTheta: adjacent / hypotenuse,
//       tanTheta: opposite / adjacent
//     };
//   }, [scenario.vertices]);

//   const renderCurrentStage = useCallback(() => {
//     if (!scenario.stages || !scenario.stages[stage] || !scenario.vertices) return null;
    
//     const currentStage = scenario.stages[stage];
//     const { A, B, C } = scenario.vertices;
//     const props = calculateTriangleProperties();
//     const elements = [];

//     // Triangle sides
//     if (currentStage.showBase) {
//       elements.push(
//         <motion.line
//           key="base"
//           x1={A.x} y1={A.y} x2={B.x} y2={B.y}
//           stroke="#000" strokeWidth="1"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.8 }}
//         />
//       );
//     }

//     if (currentStage.showHeight) {
//       elements.push(
//         <motion.line
//           key="height"
//           x1={A.x} y1={A.y} x2={C.x} y2={C.y}
//           stroke="#000" strokeWidth="1"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         />
//       );
//     }

//     if (currentStage.showHypotenuse) {
//       elements.push(
//         <motion.line
//           key="hypotenuse"
//           x1={B.x} y1={B.y} x2={C.x} y2={C.y}
//           stroke="#000" strokeWidth="1"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         />
//       );
//     }

//     // Right angle indicator
//     if (currentStage.showRightAngle) {
//       elements.push(
//         <motion.path
//           key="right-angle"
//           d={`M ${A.x + 15} ${A.y} L ${A.x + 15} ${A.y - 15} L ${A.x} ${A.y - 15}`}
//           fill="none" stroke="#000" strokeWidth="1"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.8 }}
//         />
//       );
//     }

//     // Angles
//     if (currentStage.showThetaAngle && props.thetaRad) {
//       const arcRadius = 25;
//       elements.push(
//         <motion.path
//           key="theta-angle"
//           d={`M ${B.x - arcRadius} ${B.y} A ${arcRadius} ${arcRadius} 0 0 1 ${B.x - arcRadius * Math.cos(props.thetaRad)} ${B.y - arcRadius * Math.sin(props.thetaRad)}`}
//           fill="none" stroke="#000" strokeWidth="1"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//         />
//       );
//     }

//     if (currentStage.showAlphaAngle && props.alphaRad) {
//       const arcRadius = 25;
//       const startX = C.x;
//       const startY = C.y + arcRadius;
//       const endX = C.x + arcRadius * Math.sin(props.alphaRad);
//       const endY = C.y + arcRadius * Math.cos(props.alphaRad);
      
//       elements.push(
//         <motion.path
//           key="alpha-angle"
//           d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 0 1 ${endX} ${endY}`}
//           fill="none" stroke="#000" strokeWidth="1"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//         />
//       );
//     }

//     // Labels
//     if (currentStage.showVertexLabels) {
//       elements.push(
//         <motion.g key="vertex-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//           <text x={A.x - 15} y={A.y + 15} fill="#000" fontSize="12">{scenario.labels?.vertexA || 'A'}</text>
//           <text x={B.x + 5} y={B.y + 15} fill="#000" fontSize="12">{scenario.labels?.vertexB || 'B'}</text>
//           <text x={C.x - 15} y={C.y - 5} fill="#000" fontSize="12">{scenario.labels?.vertexC || 'C'}</text>
//         </motion.g>
//       );
//     }

//     if (currentStage.showAngleLabels) {
//       elements.push(
//         <motion.g key="angle-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
//           <text x={B.x - 35} y={B.y - 8} fill="#000" fontSize="14">{scenario.labels?.theta || 'θ'}</text>
//           <text x={C.x + 30} y={C.y + 15} fill="#000" fontSize="14">{scenario.labels?.alpha || 'α'}</text>
//           <text x={A.x + 20} y={A.y - 20} fill="#000" fontSize="12">90°</text>
//         </motion.g>
//       );
//     }

//     if (currentStage.showSideLabels) {
//       elements.push(
//         <motion.g key="side-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
//           <text x={A.x - 40} y={(A.y + C.y) / 2} fill="#000" fontSize="12" textAnchor="middle">
//             {scenario.labels?.opposite || 'opposite'}
//           </text>
//           <text x={(A.x + B.x) / 2} y={A.y + 20} fill="#000" fontSize="12" textAnchor="middle">
//             {scenario.labels?.adjacent || 'adjacent'}
//           </text>
//           <text x={(B.x + C.x) / 2 + 20} y={(B.y + C.y) / 2} fill="#000" fontSize="12" textAnchor="middle">
//             {scenario.labels?.hypotenuse || 'hypotenuse'}
//           </text>
//         </motion.g>
//       );
//     }

//     if (currentStage.showMeasurements) {
//       elements.push(
//         <motion.g key="measurements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
//           <text x={A.x - 60} y={(A.y + C.y) / 2} fill="#666" fontSize="10">
//             {props.opposite?.toFixed(0)}
//           </text>
//           <text x={(A.x + B.x) / 2} y={A.y + 35} fill="#666" fontSize="10">
//             {props.adjacent?.toFixed(0)}
//           </text>
//           <text x={(B.x + C.x) / 2 + 35} y={(B.y + C.y) / 2} fill="#666" fontSize="10">
//             {props.hypotenuse?.toFixed(1)}
//           </text>
//         </motion.g>
//       );
//     }

//     // Highlight elements
//     if (currentStage.highlightOpposite) {
//       elements.push(
//         <motion.line
//           key="highlight-opposite"
//           x1={A.x} y1={A.y} x2={C.x} y2={C.y}
//           stroke="#666" strokeWidth="3" opacity="0.7"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.7 }}
//           transition={{ duration: 0.5 }}
//         />
//       );
//     }

//     if (currentStage.highlightAdjacent) {
//       elements.push(
//         <motion.line
//           key="highlight-adjacent"
//           x1={A.x} y1={A.y} x2={B.x} y2={B.y}
//           stroke="#666" strokeWidth="3" opacity="0.7"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.7 }}
//           transition={{ duration: 0.5 }}
//         />
//       );
//     }

//     if (currentStage.highlightHypotenuse) {
//       elements.push(
//         <motion.line
//           key="highlight-hypotenuse"
//           x1={B.x} y1={B.y} x2={C.x} y2={C.y}
//           stroke="#666" strokeWidth="3" opacity="0.7"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.7 }}
//           transition={{ duration: 0.5 }}
//         />
//       );
//     }

//     return elements;
//   }, [scenario, stage, calculateTriangleProperties]);

//   if (!scenario || !scenario.stages) {
//     return <div>No scenario data available</div>;
//   }

//   const currentStage = scenario.stages[stage];
//   const props = calculateTriangleProperties();

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftColumn}>
//         <h4>{scenario.title}</h4>
        
//         <div className={styles.svgContainer}>
//           <svg
//             ref={svgRef}
//             width="100%"
//             height="400"
//             viewBox="0 0 500 400"
//           >
//             <AnimatePresence>
//               {renderCurrentStage()}
//             </AnimatePresence>
//           </svg>
//         </div>
        
//         <div className={styles.controls}>
//           <button onClick={previousStage} disabled={stage === 0}>
//             Previous
//           </button>
//           <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
//           <button onClick={nextStage} disabled={stage === scenario.stages.length - 1}>
//             Next
//           </button>
//           <button onClick={handleReset}>Reset</button>
//         </div>
        
//         <button className={styles.downloadBtn} onClick={handleDownload}>
//           Download
//         </button>
        
//         <div className={styles.stageInfo}>
//           Stage: {stage + 1} / {scenario.stages.length}
//         </div>
//       </div>
      
//       <div className={styles.rightColumn}>
//         <div className={styles.description}>
//           <h4>Description</h4>
//           <p>{scenario.description}</p>
//           {currentStage && currentStage.explanation && (
//             <div className={styles.stageExplanation}>
//               <h5>Current Stage:</h5>
//               <p>{currentStage.explanation}</p>
//             </div>
//           )}
//         </div>

//         {/* Formulas panel */}
//         {props.sinTheta && (
//           <div className={styles.formulas}>
//             <h4>Trigonometric Ratios</h4>
//             {currentStage.showSineFormula && (
//               <div className={`${styles.formula} ${currentStage.highlightSine ? styles.highlighted : ''}`}>
//                 <strong>sin θ = opposite / hypotenuse</strong><br/>
//                 sin θ = {props.opposite?.toFixed(0)} / {props.hypotenuse?.toFixed(1)} = {props.sinTheta?.toFixed(3)}
//               </div>
//             )}
//             {currentStage.showCosineFormula && (
//               <div className={`${styles.formula} ${currentStage.highlightCosine ? styles.highlighted : ''}`}>
//                 <strong>cos θ = adjacent / hypotenuse</strong><br/>
//                 cos θ = {props.adjacent?.toFixed(0)} / {props.hypotenuse?.toFixed(1)} = {props.cosTheta?.toFixed(3)}
//               </div>
//             )}
//             {currentStage.showTangentFormula && (
//               <div className={`${styles.formula} ${currentStage.highlightTangent ? styles.highlighted : ''}`}>
//                 <strong>tan θ = opposite / adjacent</strong><br/>
//                 tan θ = {props.opposite?.toFixed(0)} / {props.adjacent?.toFixed(0)} = {props.tanTheta?.toFixed(3)}
//               </div>
//             )}
//             {currentStage.showPythagorean && (
//               <div className={styles.identity}>
//                 <strong>sin²θ + cos²θ = 1</strong><br/>
//                 {props.sinTheta?.toFixed(3)}² + {props.cosTheta?.toFixed(3)}² = {(props.sinTheta*props.sinTheta + props.cosTheta*props.cosTheta)?.toFixed(3)}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AnimatedTriangle;


import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AnimatedTriangle.module.css';

const AnimatedTriangle = ({ scenario }) => {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    if (scenario && scenario.stages) {
      setStage(0);
      setIsPlaying(false);
    }
  }, [scenario]);

  const nextStage = useCallback(() => {
    setStage((prev) => Math.min(prev + 1, (scenario.stages?.length || 1) - 1));
  }, [scenario.stages]);

  const previousStage = useCallback(() => {
    setStage((prev) => Math.max(prev - 1, 0));
  }, [scenario.stages]);

  const handleReset = useCallback(() => {
    setStage(0);
    setIsPlaying(false);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setStage((prev) => {
          if (prev < (scenario.stages?.length || 1) - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0;
          }
        });
      }, scenario.timing || 2000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, scenario.stages, scenario.timing]);

  const handleDownload = useCallback(() => {
    if (svgRef.current) {
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `triangle_stage_${stage + 1}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
    }
  }, [stage]);

  const calculateTriangleProperties = useCallback(() => {
    if (!scenario.vertices) return {};
    
    const { A, B, C } = scenario.vertices;
    const opposite = Math.abs(C.y - A.y);
    const adjacent = Math.abs(B.x - A.x);
    const hypotenuse = Math.sqrt(Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2));
    
    const thetaRad = Math.atan(opposite / adjacent);
    const alphaRad = Math.atan(adjacent / opposite);
    const thetaDeg = thetaRad * (180 / Math.PI);
    const alphaDeg = alphaRad * (180 / Math.PI);
    
    return {
      opposite,
      adjacent,
      hypotenuse,
      thetaRad,
      alphaRad,
      thetaDeg,
      alphaDeg,
      sinTheta: opposite / hypotenuse,
      cosTheta: adjacent / hypotenuse,
      tanTheta: opposite / adjacent
    };
  }, [scenario.vertices]);

  const renderCurrentStage = useCallback(() => {
    if (!scenario.stages || !scenario.stages[stage] || !scenario.vertices) return null;
    
    const currentStage = scenario.stages[stage];
    const { A, B, C } = scenario.vertices;
    const props = calculateTriangleProperties();
    const elements = [];

    // Triangle sides
    if (currentStage.showBase) {
      elements.push(
        <motion.line
          key="base"
          x1={A.x} y1={A.y} x2={B.x} y2={B.y}
          stroke="#000" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
      );
    }

    if (currentStage.showHeight) {
      elements.push(
        <motion.line
          key="height"
          x1={A.x} y1={A.y} x2={C.x} y2={C.y}
          stroke="#000" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      );
    }

    if (currentStage.showHypotenuse) {
      elements.push(
        <motion.line
          key="hypotenuse"
          x1={B.x} y1={B.y} x2={C.x} y2={C.y}
          stroke="#000" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      );
    }

    // Right angle indicator
    if (currentStage.showRightAngle) {
      elements.push(
        <motion.path
          key="right-angle"
          d={`M ${A.x + 15} ${A.y} L ${A.x + 15} ${A.y - 15} L ${A.x} ${A.y - 15}`}
          fill="none" stroke="#000" strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      );
    }

    // Angles
    if (currentStage.showThetaAngle && props.thetaRad) {
      const arcRadius = 25;
      elements.push(
        <motion.path
          key="theta-angle"
          d={`M ${B.x - arcRadius} ${B.y} A ${arcRadius} ${arcRadius} 0 0 1 ${B.x - arcRadius * Math.cos(props.thetaRad)} ${B.y - arcRadius * Math.sin(props.thetaRad)}`}
          fill="none" stroke="#000" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      );
    }

    if (currentStage.showAlphaAngle && props.alphaRad) {
      const arcRadius = 25;
      const startX = C.x;
      const startY = C.y + arcRadius;
      const endX = C.x + arcRadius * Math.sin(props.alphaRad);
      const endY = C.y + arcRadius * Math.cos(props.alphaRad);
      
      elements.push(
        <motion.path
          key="alpha-angle"
          d={`M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 0 0 ${endX} ${endY}`}
          fill="none" stroke="#000" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      );
    }

    // Labels
    if (currentStage.showVertexLabels) {
      elements.push(
        <motion.g key="vertex-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <text x={A.x - 15} y={A.y + 15} fill="#000" fontSize="12">{scenario.labels?.vertexA || 'A'}</text>
          <text x={B.x + 5} y={B.y + 15} fill="#000" fontSize="12">{scenario.labels?.vertexB || 'B'}</text>
          <text x={C.x - 15} y={C.y - 5} fill="#000" fontSize="12">{scenario.labels?.vertexC || 'C'}</text>
        </motion.g>
      );
    }

    if (currentStage.showAngleLabels) {
      elements.push(
        <motion.g key="angle-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <text x={B.x - 35} y={B.y - 8} fill="#000" fontSize="14">{scenario.labels?.theta || 'θ'}</text>
          <text x={C.x + 30} y={C.y + 15} fill="#000" fontSize="14">{scenario.labels?.alpha || 'α'}</text>
          <text x={A.x + 20} y={A.y - 20} fill="#000" fontSize="12">90°</text>
        </motion.g>
      );
    }

    if (currentStage.showSideLabels) {
      elements.push(
        <motion.g key="side-labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <text x={A.x - 40} y={(A.y + C.y) / 2} fill="#000" fontSize="12" textAnchor="middle">
            {scenario.labels?.opposite || 'opposite'}
          </text>
          <text x={(A.x + B.x) / 2} y={A.y + 20} fill="#000" fontSize="12" textAnchor="middle">
            {scenario.labels?.adjacent || 'adjacent'}
          </text>
          <text x={(B.x + C.x) / 2 + 20} y={(B.y + C.y) / 2} fill="#000" fontSize="12" textAnchor="middle">
            {scenario.labels?.hypotenuse || 'hypotenuse'}
          </text>
        </motion.g>
      );
    }

    if (currentStage.showMeasurements) {
      elements.push(
        <motion.g key="measurements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <text x={A.x - 60} y={(A.y + C.y) / 2} fill="#666" fontSize="10">
            {props.opposite?.toFixed(0)}
          </text>
          <text x={(A.x + B.x) / 2} y={A.y + 35} fill="#666" fontSize="10">
            {props.adjacent?.toFixed(0)}
          </text>
          <text x={(B.x + C.x) / 2 + 35} y={(B.y + C.y) / 2} fill="#666" fontSize="10">
            {props.hypotenuse?.toFixed(1)}
          </text>
        </motion.g>
      );
    }

    // Highlight elements
    if (currentStage.highlightOpposite) {
      elements.push(
        <motion.line
          key="highlight-opposite"
          x1={A.x} y1={A.y} x2={C.x} y2={C.y}
          stroke="#666" strokeWidth="3" opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
        />
      );
    }

    if (currentStage.highlightAdjacent) {
      elements.push(
        <motion.line
          key="highlight-adjacent"
          x1={A.x} y1={A.y} x2={B.x} y2={B.y}
          stroke="#666" strokeWidth="3" opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
        />
      );
    }

    if (currentStage.highlightHypotenuse) {
      elements.push(
        <motion.line
          key="highlight-hypotenuse"
          x1={B.x} y1={B.y} x2={C.x} y2={C.y}
          stroke="#666" strokeWidth="3" opacity="0.7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
        />
      );
    }

    return elements;
  }, [scenario, stage, calculateTriangleProperties]);

  if (!scenario || !scenario.stages) {
    return <div>No scenario data available</div>;
  }

  const currentStage = scenario.stages[stage];
  const props = calculateTriangleProperties();

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h4>{scenario.title}</h4>
        
        <div className={styles.svgContainer}>
          <svg
            ref={svgRef}
            width="100%"
            height="400"
            viewBox="0 0 500 400"
          >
            <AnimatePresence>
              {renderCurrentStage()}
            </AnimatePresence>
          </svg>
        </div>
        
        <div className={styles.controls}>
          <button onClick={previousStage} disabled={stage === 0}>
            Previous
          </button>
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={nextStage} disabled={stage === scenario.stages.length - 1}>
            Next
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
        
        <button className={styles.downloadBtn} onClick={handleDownload}>
          Download
        </button>
        
        <div className={styles.stageInfo}>
          Stage: {stage + 1} / {scenario.stages.length}
        </div>
      </div>
      
      <div className={styles.rightColumn}>
        <div className={styles.description}>
          <h4>Description</h4>
          <p>{scenario.description}</p>
          {currentStage && currentStage.explanation && (
            <div className={styles.stageExplanation}>
              <h5>Current Stage:</h5>
              <p>{currentStage.explanation}</p>
            </div>
          )}
        </div>

        {/* Formulas panel */}
        {props.sinTheta && (
          <div className={styles.formulas}>
            <h4>Trigonometric Ratios</h4>
            {currentStage.showSineFormula && (
              <div className={`${styles.formula} ${currentStage.highlightSine ? styles.highlighted : ''}`}>
                <strong>sin θ = opposite / hypotenuse</strong><br/>
                sin θ = {props.opposite?.toFixed(0)} / {props.hypotenuse?.toFixed(1)} = {props.sinTheta?.toFixed(3)}
              </div>
            )}
            {currentStage.showCosineFormula && (
              <div className={`${styles.formula} ${currentStage.highlightCosine ? styles.highlighted : ''}`}>
                <strong>cos θ = adjacent / hypotenuse</strong><br/>
                cos θ = {props.adjacent?.toFixed(0)} / {props.hypotenuse?.toFixed(1)} = {props.cosTheta?.toFixed(3)}
              </div>
            )}
            {currentStage.showTangentFormula && (
              <div className={`${styles.formula} ${currentStage.highlightTangent ? styles.highlighted : ''}`}>
                <strong>tan θ = opposite / adjacent</strong><br/>
                tan θ = {props.opposite?.toFixed(0)} / {props.adjacent?.toFixed(0)} = {props.tanTheta?.toFixed(3)}
              </div>
            )}
            {currentStage.showPythagorean && (
              <div className={styles.identity}>
                <strong>sin²θ + cos²θ = 1</strong><br/>
                {props.sinTheta?.toFixed(3)}² + {props.cosTheta?.toFixed(3)}² = {(props.sinTheta*props.sinTheta + props.cosTheta*props.cosTheta)?.toFixed(3)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedTriangle;