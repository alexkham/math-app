// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './AnimatedUnitCircle.module.css';

// const AnimatedUnitCircle = ({ scenario }) => {
//   const [stage, setStage] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [angle, setAngle] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const svgRef = useRef(null);

//   const centerX = 200;
//   const centerY = 200;
//   const radius = 150;

//   useEffect(() => {
//     if (scenario && scenario.stages) {
//       setStage(0);
//       setIsPlaying(false);
//       if (scenario.stages[0] && scenario.stages[0].angle !== undefined) {
//         setAngle(scenario.stages[0].angle);
//       }
//     }
//   }, [scenario]);

//   const nextStage = useCallback(() => {
//     setStage((prev) => {
//       const newStage = Math.min(prev + 1, (scenario.stages?.length || 1) - 1);
//       if (scenario.stages[newStage] && scenario.stages[newStage].angle !== undefined) {
//         setAngle(scenario.stages[newStage].angle);
//       }
//       return newStage;
//     });
//   }, [scenario.stages]);

//   const previousStage = useCallback(() => {
//     setStage((prev) => {
//       const newStage = Math.max(prev - 1, 0);
//       if (scenario.stages[newStage] && scenario.stages[newStage].angle !== undefined) {
//         setAngle(scenario.stages[newStage].angle);
//       }
//       return newStage;
//     });
//   }, [scenario.stages]);

//   const handleReset = useCallback(() => {
//     setStage(0);
//     setIsPlaying(false);
//     if (scenario.stages[0] && scenario.stages[0].angle !== undefined) {
//       setAngle(scenario.stages[0].angle);
//     }
//   }, [scenario.stages]);

//   const handlePlayPause = useCallback(() => {
//     setIsPlaying((prev) => !prev);
//   }, []);

//   useEffect(() => {
//     let intervalId;
//     if (isPlaying) {
//       intervalId = setInterval(() => {
//         setStage((prev) => {
//           if (prev < (scenario.stages?.length || 1) - 1) {
//             const newStage = prev + 1;
//             if (scenario.stages[newStage] && scenario.stages[newStage].angle !== undefined) {
//               setAngle(scenario.stages[newStage].angle);
//             }
//             return newStage;
//           } else {
//             setIsPlaying(false);
//             return prev;
//           }
//         });
//       }, 2000);
//     }
//     return () => clearInterval(intervalId);
//   }, [isPlaying, scenario.stages]);

//   const handleMouseDown = useCallback((e) => {
//     if (scenario.interactive) {
//       setIsDragging(true);
//     }
//   }, [scenario.interactive]);

//   const handleMouseMove = useCallback((e) => {
//     if (isDragging && scenario.interactive) {
//       const rect = svgRef.current.getBoundingClientRect();
//       const x = e.clientX - rect.left - centerX;
//       const y = e.clientY - rect.top - centerY;
//       const newAngle = Math.atan2(-y, x);
//       setAngle(newAngle);
//     }
//   }, [isDragging, scenario.interactive]);

//   const handleMouseUp = useCallback(() => {
//     setIsDragging(false);
//   }, []);

//   useEffect(() => {
//     if (isDragging) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleMouseUp);
//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//         document.removeEventListener('mouseup', handleMouseUp);
//       };
//     }
//   }, [isDragging, handleMouseMove, handleMouseUp]);

//   const handleDownload = useCallback(() => {
//     if (svgRef.current) {
//       const svgData = new XMLSerializer().serializeToString(svgRef.current);
//       const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//       const url = URL.createObjectURL(blob);
//       const downloadLink = document.createElement('a');
//       downloadLink.href = url;
//       downloadLink.download = `unit_circle_stage_${stage + 1}.svg`;
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//       URL.revokeObjectURL(url);
//     }
//   }, [stage]);

//   const getPointOnCircle = useCallback((angleRad) => {
//     return {
//       x: centerX + radius * Math.cos(angleRad),
//       y: centerY - radius * Math.sin(angleRad)
//     };
//   }, []);

//   const formatAngle = useCallback((angleRad) => {
//     const degrees = ((angleRad * 180) / Math.PI + 360) % 360;
//     return Math.round(degrees);
//   }, []);

//   const getTrignometricValues = useCallback((angleRad) => {
//     return {
//       sin: Math.sin(angleRad),
//       cos: Math.cos(angleRad),
//       tan: Math.tan(angleRad)
//     };
//   }, []);

//   const renderGridLines = useCallback(() => {
//     if (!scenario.showGrid) return null;
    
//     const lines = [];
//     const step = 30;
    
//     // Vertical and horizontal lines
//     for (let i = -180; i <= 180; i += step) {
//       const x = centerX + (i / 180) * radius;
//       const y = centerY + (i / 180) * radius;
      
//       if (i >= -150 && i <= 150) {
//         lines.push(
//           <line key={`v-${i}`} x1={x} y1={centerY - radius} x2={x} y2={centerY + radius} 
//                 stroke="#e0e0e0" strokeWidth="0.5" />
//         );
//         lines.push(
//           <line key={`h-${i}`} x1={centerX - radius} y1={y} x2={centerX + radius} y2={y} 
//                 stroke="#e0e0e0" strokeWidth="0.5" />
//         );
//       }
//     }
    
//     return lines;
//   }, [scenario.showGrid]);

//   const renderAxes = useCallback(() => {
//     return (
//       <g>
//         {/* X-axis */}
//         <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
//               stroke="#333" strokeWidth="2" />
//         <polygon points={`${centerX + radius + 20},${centerY} ${centerX + radius + 15},${centerY - 5} ${centerX + radius + 15},${centerY + 5}`} 
//                  fill="#333" />
//         <text x={centerX + radius + 25} y={centerY + 5} fill="#333" fontSize="12">x</text>
        
//         {/* Y-axis */}
//         <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} 
//               stroke="#333" strokeWidth="2" />
//         <polygon points={`${centerX},${centerY - radius - 20} ${centerX - 5},${centerY - radius - 15} ${centerX + 5},${centerY - radius - 15}`} 
//                  fill="#333" />
//         <text x={centerX + 5} y={centerY - radius - 25} fill="#333" fontSize="12">y</text>
//       </g>
//     );
//   }, []);

//   const renderAngleMarkers = useCallback(() => {
//     if (!scenario.showAngleMarkers) return null;
    
//     const markers = [];
//     const angles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
    
//     angles.forEach(deg => {
//       const rad = (deg * Math.PI) / 180;
//       const point = getPointOnCircle(rad);
//       const labelPoint = {
//         x: centerX + (radius + 15) * Math.cos(rad),
//         y: centerY - (radius + 15) * Math.sin(rad) + 5
//       };
      
//       markers.push(
//         <g key={`marker-${deg}`}>
//           <circle cx={point.x} cy={point.y} r="2" fill="#666" />
//           <text x={labelPoint.x} y={labelPoint.y} fill="#666" fontSize="10" textAnchor="middle">
//             {deg}°
//           </text>
//         </g>
//       );
//     });
    
//     return markers;
//   }, [scenario.showAngleMarkers, getPointOnCircle]);

//   const renderCurrentStage = useCallback(() => {
//     if (!scenario.stages || !scenario.stages[stage]) return null;
    
//     const currentStage = scenario.stages[stage];
//     const point = getPointOnCircle(angle);
//     const trigValues = getTrignometricValues(angle);
    
//     const elements = [];
    
//     // Circle
//     if (currentStage.showCircle) {
//       elements.push(
//         <motion.circle
//           key="unit-circle"
//           cx={centerX}
//           cy={centerY}
//           r={radius}
//           fill="none"
//           stroke="#0066cc"
//           strokeWidth="3"
//           initial={{ opacity: 0, r: 0 }}
//           animate={{ opacity: 1, r: radius }}
//           transition={{ duration: 0.8 }}
//         />
//       );
//     }
    
//     // Radius line
//     if (currentStage.showRadius) {
//       elements.push(
//         <motion.line
//           key="radius"
//           x1={centerX}
//           y1={centerY}
//           x2={point.x}
//           y2={point.y}
//           stroke="#ff0000"
//           strokeWidth="2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         />
//       );
//     }
    
//     // Point on circle
//     if (currentStage.showPoint) {
//       elements.push(
//         <motion.circle
//           key="point"
//           cx={point.x}
//           cy={point.y}
//           r="6"
//           fill="#ff0000"
//           stroke="white"
//           strokeWidth="2"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           onMouseDown={handleMouseDown}
//           style={{ cursor: scenario.interactive ? 'pointer' : 'default' }}
//         />
//       );
//     }
    
//     // Coordinates
//     if (currentStage.showCoordinates) {
//       elements.push(
//         <motion.text
//           key="coordinates"
//           x={point.x + 10}
//           y={point.y - 10}
//           fill="#ff0000"
//           fontSize="12"
//           fontWeight="bold"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//         >
//           ({trigValues.cos.toFixed(3)}, {trigValues.sin.toFixed(3)})
//         </motion.text>
//       );
//     }
    
//     // Sine line (vertical projection)
//     if (currentStage.showSine) {
//       elements.push(
//         <motion.line
//           key="sine"
//           x1={point.x}
//           y1={centerY}
//           x2={point.x}
//           y2={point.y}
//           stroke="#00aa00"
//           strokeWidth="3"
//           strokeDasharray="5,5"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.9 }}
//         />
//       );
//     }
    
//     // Cosine line (horizontal projection)
//     if (currentStage.showCosine) {
//       elements.push(
//         <motion.line
//           key="cosine"
//           x1={centerX}
//           y1={point.y}
//           x2={point.x}
//           y2={point.y}
//           stroke="#0000aa"
//           strokeWidth="3"
//           strokeDasharray="5,5"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 1.1 }}
//         />
//       );
//     }
    
//     // Angle arc
//     if (currentStage.showAngle) {
//       const arcRadius = 30;
//       const startAngle = 0;
//       const endAngle = angle;
//       const largeArcFlag = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
//       const sweepFlag = endAngle > startAngle ? 1 : 0;
      
//       const startPoint = {
//         x: centerX + arcRadius * Math.cos(startAngle),
//         y: centerY - arcRadius * Math.sin(startAngle)
//       };
//       const endPoint = {
//         x: centerX + arcRadius * Math.cos(endAngle),
//         y: centerY - arcRadius * Math.sin(endAngle)
//       };
      
//       const pathData = `M ${startPoint.x} ${startPoint.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`;
      
//       elements.push(
//         <motion.path
//           key="angle-arc"
//           d={pathData}
//           fill="none"
//           stroke="#ff6600"
//           strokeWidth="2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 1.3 }}
//         />
//       );
//     }
    
//     return elements;
//   }, [scenario, stage, angle, getPointOnCircle, getTrignometricValues, handleMouseDown]);

//   if (!scenario || !scenario.stages) {
//     return <div>No scenario data available</div>;
//   }

//   const trigValues = getTrignometricValues(angle);

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftColumn}>
//         <h4>{scenario.title}</h4>
        
//         <div className={styles.svgContainer}>
//           <svg
//             ref={svgRef}
//             width="100%"
//             height="400"
//             viewBox="0 0 400 400"
//             onMouseMove={handleMouseMove}
//           >
//             {renderGridLines()}
//             {renderAxes()}
//             {renderAngleMarkers()}
//             <AnimatePresence>
//               {renderCurrentStage()}
//             </AnimatePresence>
//           </svg>
//         </div>
        
//         <div className={styles.values}>
//           <div className={styles.valueItem}>
//             <strong>Angle:</strong> {formatAngle(angle)}° ({angle.toFixed(3)} rad)
//           </div>
//           <div className={styles.valueItem}>
//             <strong>cos θ:</strong> {trigValues.cos.toFixed(3)}
//           </div>
//           <div className={styles.valueItem}>
//             <strong>sin θ:</strong> {trigValues.sin.toFixed(3)}
//           </div>
//           <div className={styles.valueItem}>
//             <strong>tan θ:</strong> {Math.abs(trigValues.tan) > 1000 ? '∞' : trigValues.tan.toFixed(3)}
//           </div>
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
//           {scenario.stages[stage] && scenario.stages[stage].explanation && (
//             <div className={styles.stageExplanation}>
//               <h5>Current Stage:</h5>
//               <p>{scenario.stages[stage].explanation}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedUnitCircle;


import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AnimatedUnitCircle.module.css';

const AnimatedUnitCircle = ({ scenario }) => {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef(null);

  const centerX = 200;
  const centerY = 200;
  const radius = 150;

  useEffect(() => {
    if (scenario && scenario.stages) {
      setStage(0);
      setIsPlaying(false);
      if (scenario.stages[0] && scenario.stages[0].angle !== undefined) {
        setAngle(scenario.stages[0].angle);
      }
    }
  }, [scenario]);

  const nextStage = useCallback(() => {
    setStage((prev) => {
      const newStage = Math.min(prev + 1, (scenario.stages?.length || 1) - 1);
      if (scenario.stages[newStage] && scenario.stages[newStage].angle !== undefined) {
        setAngle(scenario.stages[newStage].angle);
      }
      return newStage;
    });
  }, [scenario.stages]);

  const previousStage = useCallback(() => {
    setStage((prev) => {
      const newStage = Math.max(prev - 1, 0);
      if (scenario.stages[newStage] && scenario.stages[newStage].angle !== undefined) {
        setAngle(scenario.stages[newStage].angle);
      }
      return newStage;
    });
  }, [scenario.stages]);

  const handleReset = useCallback(() => {
    setStage(0);
    setIsPlaying(false);
    if (scenario.stages[0] && scenario.stages[0].angle !== undefined) {
      setAngle(scenario.stages[0].angle);
    }
  }, [scenario.stages]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setStage((prev) => {
          if (prev < (scenario.stages?.length || 1) - 1) {
            const newStage = prev + 1;
            if (scenario.stages[newStage] && scenario.stages[newStage].angle !== undefined) {
              setAngle(scenario.stages[newStage].angle);
            }
            return newStage;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, scenario.stages]);

  const handleMouseDown = useCallback((e) => {
    if (scenario.interactive) {
      setIsDragging(true);
    }
  }, [scenario.interactive]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging && scenario.interactive) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - centerX;
      const y = e.clientY - rect.top - centerY;
      const newAngle = Math.atan2(-y, x);
      setAngle(newAngle);
    }
  }, [isDragging, scenario.interactive]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleDownload = useCallback(() => {
    if (svgRef.current) {
      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `unit_circle_stage_${stage + 1}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
    }
  }, [stage]);

  const getPointOnCircle = useCallback((angleRad) => {
    return {
      x: centerX + radius * Math.cos(angleRad),
      y: centerY - radius * Math.sin(angleRad)
    };
  }, []);

  const formatAngle = useCallback((angleRad) => {
    const degrees = ((angleRad * 180) / Math.PI + 360) % 360;
    return Math.round(degrees);
  }, []);

  const getTrignometricValues = useCallback((angleRad) => {
    return {
      sin: Math.sin(angleRad),
      cos: Math.cos(angleRad),
      tan: Math.tan(angleRad)
    };
  }, []);

  const renderGridLines = useCallback(() => {
    if (!scenario.showGrid) return null;
    
    const lines = [];
    const step = 30;
    
    // Vertical and horizontal lines
    for (let i = -180; i <= 180; i += step) {
      const x = centerX + (i / 180) * radius;
      const y = centerY + (i / 180) * radius;
      
      if (i >= -150 && i <= 150) {
        lines.push(
          <line key={`v-${i}`} x1={x} y1={centerY - radius} x2={x} y2={centerY + radius} 
                stroke="#e0e0e0" strokeWidth="0.5" />
        );
        lines.push(
          <line key={`h-${i}`} x1={centerX - radius} y1={y} x2={centerX + radius} y2={y} 
                stroke="#e0e0e0" strokeWidth="0.5" />
        );
      }
    }
    
    return lines;
  }, [scenario.showGrid]);

  const renderAxes = useCallback(() => {
    return (
      <g>
        {/* X-axis */}
        <line x1={centerX - radius - 20} y1={centerY} x2={centerX + radius + 20} y2={centerY} 
              stroke="#333" strokeWidth="2" />
        <polygon points={`${centerX + radius + 20},${centerY} ${centerX + radius + 15},${centerY - 5} ${centerX + radius + 15},${centerY + 5}`} 
                 fill="#333" />
        <text x={centerX + radius + 25} y={centerY + 5} fill="#333" fontSize="12">x</text>
        
        {/* Y-axis */}
        <line x1={centerX} y1={centerY - radius - 20} x2={centerX} y2={centerY + radius + 20} 
              stroke="#333" strokeWidth="2" />
        <polygon points={`${centerX},${centerY - radius - 20} ${centerX - 5},${centerY - radius - 15} ${centerX + 5},${centerY - radius - 15}`} 
                 fill="#333" />
        <text x={centerX + 5} y={centerY - radius - 25} fill="#333" fontSize="12">y</text>
      </g>
    );
  }, []);

  const renderAngleMarkers = useCallback(() => {
    if (!scenario.showAngleMarkers) return null;
    
    const markers = [];
    const angles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
    
    angles.forEach(deg => {
      const rad = (deg * Math.PI) / 180;
      const point = getPointOnCircle(rad);
      const labelPoint = {
        x: centerX + (radius + 15) * Math.cos(rad),
        y: centerY - (radius + 15) * Math.sin(rad) + 5
      };
      
      markers.push(
        <g key={`marker-${deg}`}>
          <circle cx={point.x} cy={point.y} r="2" fill="#666" />
          <text x={labelPoint.x} y={labelPoint.y} fill="#666" fontSize="10" textAnchor="middle">
            {deg}°
          </text>
        </g>
      );
    });
    
    return markers;
  }, [scenario.showAngleMarkers, getPointOnCircle]);

  const renderCurrentStage = useCallback(() => {
    if (!scenario.stages || !scenario.stages[stage]) return null;
    
    const currentStage = scenario.stages[stage];
    const point = getPointOnCircle(angle);
    const trigValues = getTrignometricValues(angle);
    
    const elements = [];
    
    // Circle
    if (currentStage.showCircle) {
      elements.push(
        <motion.circle
          key="unit-circle"
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#0066cc"
          strokeWidth="3"
          initial={{ opacity: 0, r: 0 }}
          animate={{ opacity: 1, r: radius }}
          transition={{ duration: 0.8 }}
        />
      );
    }
    
    // Radius line
    if (currentStage.showRadius) {
      elements.push(
        <motion.line
          key="radius"
          x1={centerX}
          y1={centerY}
          x2={point.x}
          y2={point.y}
          stroke="#ff0000"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      );
    }
    
    // Point on circle
    if (currentStage.showPoint) {
      elements.push(
        <motion.circle
          key="point"
          cx={point.x}
          cy={point.y}
          r="6"
          fill="#ff0000"
          stroke="white"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onMouseDown={handleMouseDown}
          style={{ cursor: scenario.interactive ? 'pointer' : 'default' }}
        />
      );
    }
    
    // Coordinates
    if (currentStage.showCoordinates) {
      elements.push(
        <motion.text
          key="coordinates"
          x={point.x + 10}
          y={point.y - 10}
          fill="#ff0000"
          fontSize="12"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          ({trigValues.cos.toFixed(3)}, {trigValues.sin.toFixed(3)})
        </motion.text>
      );
    }
    
    // Sine line (vertical projection)
    if (currentStage.showSine) {
      elements.push(
        <motion.line
          key="sine"
          x1={point.x}
          y1={centerY}
          x2={point.x}
          y2={point.y}
          stroke="#00aa00"
          strokeWidth="3"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
      );
    }
    
    // Cosine line (horizontal projection)
    if (currentStage.showCosine) {
      elements.push(
        <motion.line
          key="cosine"
          x1={centerX}
          y1={point.y}
          x2={point.x}
          y2={point.y}
          stroke="#0000aa"
          strokeWidth="3"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />
      );
    }
    
    // Angle arc
    if (currentStage.showAngle && angle > 0) {
      const arcRadius = 50;
      const largeArcFlag = angle > Math.PI ? 1 : 0;
      const sweepFlag = 0; // Always counterclockwise
      
      const startPoint = {
        x: centerX + arcRadius,
        y: centerY
      };
      const endPoint = {
        x: centerX + arcRadius * Math.cos(angle),
        y: centerY - arcRadius * Math.sin(angle)
      };
      
      const pathData = `M ${startPoint.x} ${startPoint.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`;
      
      elements.push(
        <motion.path
          key="angle-arc"
          d={pathData}
          fill="none"
          stroke="#ff6600"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      );
    }
    
    return elements;
  }, [scenario, stage, angle, getPointOnCircle, getTrignometricValues, handleMouseDown]);

  if (!scenario || !scenario.stages) {
    return <div>No scenario data available</div>;
  }

  const trigValues = getTrignometricValues(angle);

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h4>{scenario.title}</h4>
        
        <div className={styles.svgContainer}>
          <svg
            ref={svgRef}
            width="100%"
            height="400"
            viewBox="0 0 400 400"
            onMouseMove={handleMouseMove}
          >
            {renderGridLines()}
            {renderAxes()}
            {renderAngleMarkers()}
            <AnimatePresence>
              {renderCurrentStage()}
            </AnimatePresence>
          </svg>
        </div>
        
        <div className={styles.values}>
          <div className={styles.valueItem}>
            <strong>Angle:</strong> {formatAngle(angle)}° ({angle.toFixed(3)} rad)
          </div>
          <div className={styles.valueItem}>
            <strong>cos θ:</strong> {trigValues.cos.toFixed(3)}
          </div>
          <div className={styles.valueItem}>
            <strong>sin θ:</strong> {trigValues.sin.toFixed(3)}
          </div>
          <div className={styles.valueItem}>
            <strong>tan θ:</strong> {Math.abs(trigValues.tan) > 1000 ? '∞' : trigValues.tan.toFixed(3)}
          </div>
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
          {scenario.stages[stage] && scenario.stages[stage].explanation && (
            <div className={styles.stageExplanation}>
              <h5>Current Stage:</h5>
              <p>{scenario.stages[stage].explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedUnitCircle;