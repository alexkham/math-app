// // // import React, { useState, useEffect, useRef } from 'react';

// // // const DerivativeAnimation = () => {
// // //   const [currentStep, setCurrentStep] = useState(0);
// // //   const [isAnimating, setIsAnimating] = useState(false);
// // //   const [isPaused, setIsPaused] = useState(false);
// // //   const [deltaX, setDeltaX] = useState(150);
// // //   const [slope, setSlope] = useState(0);
// // //   const animationRef = useRef();

// // //   const totalSteps = 100;

// // //   const f = (x) => {
// // //     if (x <= 300) {
// // //       const t = Math.max(0, Math.min(1, (x - 150) / 150));
// // //       const p0 = 400, p1 = 320, p2 = 250;
// // //       return p0 * (1 - t) ** 2 + 2 * p1 * (1 - t) * t + p2 * t ** 2;
// // //     } else if (x <= 450) {
// // //       const t = Math.max(0, Math.min(1, (x - 300) / 150));
// // //       const p0 = 250, p1 = 200, p2 = 180;
// // //       return p0 * (1 - t) ** 2 + 2 * p1 * (1 - t) * t + p2 * t ** 2;
// // //     } else {
// // //       const t = Math.max(0, Math.min(1, (x - 450) / 150));
// // //       const p0 = 180, p1 = 170, p2 = 200;
// // //       return p0 * (1 - t) ** 2 + 2 * p1 * (1 - t) * t + p2 * t ** 2;
// // //     }
// // //   };

// // //   const calculatePosition = (step) => {
// // //     const progress = step / totalSteps;
// // //     const startX = 450;
// // //     const endX = 300;
// // //     const currentX = startX - (startX - endX) * progress;
// // //     const qY = f(currentX);
// // //     const currentDeltaX = currentX - 300;
// // //     const currentSlope = currentDeltaX === 0 ? 0 : (qY - 250) / currentDeltaX;
// // //     return { currentX, qY, currentDeltaX, currentSlope };
// // //   };

// // //   const animate = () => {
// // //     if (isPaused) {
// // //       animationRef.current = requestAnimationFrame(animate);
// // //       return;
// // //     }
// // //     if (currentStep >= totalSteps) {
// // //       setIsAnimating(false);
// // //       return;
// // //     }
// // //     setCurrentStep((prev) => prev + 1);
// // //     animationRef.current = requestAnimationFrame(animate);
// // //   };

// // //   const startAnimation = () => {
// // //     if (isAnimating) return;
// // //     setIsAnimating(true);
// // //     setIsPaused(false);
// // //     setCurrentStep(0);
// // //     animationRef.current = requestAnimationFrame(animate); // ✅ NOW INCLUDED
// // //   };

// // //   const resetAnimation = () => {
// // //     if (animationRef.current) {
// // //       cancelAnimationFrame(animationRef.current);
// // //     }
// // //     setIsAnimating(false);
// // //     setIsPaused(false);
// // //     setCurrentStep(0);
// // //   };

// // //   const togglePause = () => {
// // //     if (!isAnimating) return;
// // //     setIsPaused((prev) => !prev);
// // //   };

// // //   const stepForward = () => {
// // //     if (currentStep >= totalSteps) return;
// // //     setCurrentStep((prev) => Math.min(prev + 5, totalSteps));
// // //     if (currentStep + 5 >= totalSteps) {
// // //       setIsAnimating(false);
// // //     }
// // //   };

// // //   const stepBackward = () => {
// // //     if (currentStep <= 0) return;
// // //     setCurrentStep((prev) => Math.max(prev - 5, 0));
// // //   };

// // //   const { currentX, qY, currentDeltaX, currentSlope } = calculatePosition(currentStep);

// // //   useEffect(() => {
// // //     setDeltaX(Math.abs(currentDeltaX));
// // //     setSlope(currentSlope);
// // //   }, [currentDeltaX, currentSlope]);

// // //   useEffect(() => {
// // //     if (isAnimating && !isPaused) {
// // //       animationRef.current = requestAnimationFrame(animate);
// // //     }
// // //     return () => {
// // //       if (animationRef.current) {
// // //         cancelAnimationFrame(animationRef.current);
// // //       }
// // //     };
// // //   }, [isAnimating, isPaused]);

// // //   // Your JSX remains the same — graph, buttons, layout etc.

// // //   return (
// // //     <div>
// // //       <h1>Derivative as a Limit</h1>
// // //       <div>
// // //         Δx = {deltaX.toFixed(2)} | Slope = {slope.toFixed(2)}
// // //       </div>
// // //       <div>
// // //         <button onClick={startAnimation}>Animate Approach</button>
// // //         <button onClick={resetAnimation}>Reset</button>
// // //         <button onClick={togglePause}>{isPaused ? 'Resume' : 'Pause'}</button>
// // //         <button onClick={stepForward}>Step Forward</button>
// // //         <button onClick={stepBackward}>Step Backward</button>
// // //       </div>
// // //       {/* SVG stays here — unchanged — to keep the visual */}
// // //     </div>
// // //   );
// // // };

// // // export default DerivativeAnimation;


// // import React, { useState, useEffect, useRef } from 'react';

// // const DerivativeAnimation = () => {
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [deltaX, setDeltaX] = useState(150);
// //   const [slope, setSlope] = useState(0);
// //   const animationRef = useRef();
  
// //   const totalSteps = 100;

// //   // Function that exactly matches our SVG curve
// //   const f = (x) => {
// //     if (x <= 300) {
// //       // First quadratic segment: from (150,400) through (220,320) to (300,250)
// //       const t = (x - 150) / 150;
// //       const p0 = 400, p1 = 320, p2 = 250;
// //       return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
// //     } else if (x <= 450) {
// //       // Second quadratic segment: from (300,250) through (380,200) to (450,180)
// //       const t = (x - 300) / 150;
// //       const p0 = 250, p1 = 200, p2 = 180;
// //       return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
// //     } else {
// //       // Third quadratic segment: from (450,180) through (520,170) to (600,200)
// //       const t = (x - 450) / 150;
// //       const p0 = 180, p1 = 170, p2 = 200;
// //       return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
// //     }
// //   };

// //   const calculatePosition = (step) => {
// //     const progress = step / totalSteps;
// //     const startX = 450;
// //     const endX = 300;
// //     // Make it actually approach 0 by going further
// //     const currentX = startX - (startX - endX) * (progress);
// //     const qY = f(currentX);
// //     const currentDeltaX = currentX - 300;
// //     const currentSlope = (qY - 250) / (currentX - 300);
    
// //     return { currentX, qY, currentDeltaX, currentSlope };
// //   };

// //   const animate = () => {
// //     if (isPaused) {
// //       animationRef.current = requestAnimationFrame(animate);
// //       return;
// //     }
    
// //     if (currentStep >= totalSteps) {
// //       setIsAnimating(false);
// //       return;
// //     }
    
// //     setCurrentStep(prev => prev + 1);
// //     animationRef.current = requestAnimationFrame(animate);
// //   };

// //   const startAnimation = () => {
// //     if (isAnimating) return;
// //     setIsAnimating(true);
// //     setIsPaused(false);
// //     setCurrentStep(0);
// //   };

// //   const resetAnimation = () => {
// //     if (animationRef.current) {
// //       cancelAnimationFrame(animationRef.current);
// //     }
// //     setIsAnimating(false);
// //     setIsPaused(false);
// //     setCurrentStep(0);
// //   };

// //   const togglePause = () => {
// //     if (!isAnimating) return;
// //     setIsPaused(!isPaused);
// //   };

// //   const stepForward = () => {
// //     if (currentStep >= totalSteps) return;
// //     setCurrentStep(prev => Math.min(prev + 5, totalSteps));
// //     if (currentStep + 5 >= totalSteps) {
// //       setIsAnimating(false);
// //     }
// //   };

// //   const stepBackward = () => {
// //     if (currentStep <= 0) return;
// //     setCurrentStep(prev => Math.max(prev - 5, 0));
// //   };

// //   // Calculate current position based on step
// //   const { currentX, qY, currentDeltaX, currentSlope } = calculatePosition(currentStep);

// //   useEffect(() => {
// //     setDeltaX(Math.abs(currentDeltaX));
// //     setSlope(currentSlope);
// //   }, [currentDeltaX, currentSlope]);

// //   useEffect(() => {
// //     if (isAnimating && !isPaused) {
// //       animationRef.current = requestAnimationFrame(animate);
// //     }
// //     return () => {
// //       if (animationRef.current) {
// //         cancelAnimationFrame(animationRef.current);
// //       }
// //     };
// //   }, [isAnimating, isPaused]);
// //   const x1 = 300, y1 = 250;
// //   const x2 = currentX, y2 = qY;
  
// //   // Secant line calculation
// //   const secantExtend = 100;
// //   const x1Extended = x1 - secantExtend;
// //   const y1Extended = y1 - slope * secantExtend;
// //   const x2Extended = x2 + secantExtend;
// //   const y2Extended = y2 + slope * secantExtend;
  
// //   // Tangent line (show when very close)
// //   const distance = Math.abs(x2 - x1);
// //   const showTangent = distance < 20;
// //   const tangentSlope = -0.4;
// //   const tangentOpacity = showTangent ? Math.max(0, (20 - distance) / 20) : 0;

// //   return (
// //     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h1 className="text-2xl font-bold text-center mb-4">Derivative as a Limit</h1>
      
// //       <div className="text-center mb-4 text-lg font-semibold">
// //         <span className="mr-4">Δx = {deltaX.toFixed(2)}</span>
// //         <span className="text-green-600">Slope = {slope.toFixed(2)}</span>
// //       </div>
      
// //       <div className="flex justify-center gap-2 mb-6 flex-wrap">
// //         <button 
// //           onClick={startAnimation}
// //           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
// //         >
// //           Animate Approach
// //         </button>
// //         <button 
// //           onClick={resetAnimation}
// //           className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
// //         >
// //           Reset
// //         </button>
// //         <button 
// //           onClick={togglePause}
// //           disabled={!isAnimating}
// //           className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white px-4 py-2 rounded"
// //         >
// //           {isPaused ? 'Resume' : 'Pause'}
// //         </button>
// //         <button 
// //           onClick={stepForward}
// //           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
// //         >
// //           Step Forward
// //         </button>
// //         <button 
// //           onClick={stepBackward}
// //           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
// //         >
// //           Step Backward
// //         </button>
// //       </div>

// //       <div className="flex justify-center">
// //         <svg width="800" height="600" viewBox="0 0 800 600" className="border border-gray-300">
// //           {/* Grid */}
// //           <defs>
// //             <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
// //               <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9ecef" strokeWidth="1"/>
// //             </pattern>
// //             <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
// //               <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
// //             </marker>
// //           </defs>
          
// //           <rect width="800" height="600" fill="url(#grid)"/>
          
// //           {/* Axes */}
// //           <line x1="80" y1="500" x2="720" y2="500" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
// //           <line x1="120" y1="520" x2="120" y2="80" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
// //           {/* Axis labels */}
// //           <text x="730" y="520" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">x</text>
// //           <text x="100" y="75" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">y</text>
          
// //           {/* Function curve */}
// //           <path d="M 150 400 Q 220 320 300 250 Q 380 200 450 180 Q 520 170 600 200" 
// //                 stroke="#2563eb" strokeWidth="3" fill="none"/>
          
// //           {/* Tangent line */}
// //           <line x1="250" y1={250 - tangentSlope * 50} x2="350" y2={250 + tangentSlope * 50} 
// //                 stroke="#22c55e" strokeWidth="2" strokeDasharray="8,4" opacity={tangentOpacity}/>
          
// //           {/* Secant line */}
// //           <line x1={x1Extended} y1={y1Extended} x2={x2Extended} y2={y2Extended} 
// //                 stroke="#059669" strokeWidth="2" strokeDasharray="5,5"/>
          
// //           {/* Points */}
// //           <circle cx="300" cy="250" r="5" fill="#dc2626"/>
// //           <circle cx={x2} cy={y2} r="5" fill="#dc2626"/>
          
// //           {/* Point labels */}
// //           <text x="285" y="240" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">P</text>
// //           <text x={x2 + 5} y={y2 - 10} fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">Q</text>
          
// //           {/* Projections */}
// //           <line x1="300" y1="250" x2="300" y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
// //           <line x1={x2} y1={y2} x2={x2} y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
// //           <line x1="300" y1="250" x2="120" y2="250" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
// //           <line x1={x2} y1={y2} x2="120" y2={y2} stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
          
// //           {/* Delta indicators */}
// //           <line x1="300" y1="480" x2={x2} y2="480" stroke="#7c3aed" strokeWidth="2"/>
// //           <line x1="300" y1="475" x2="300" y2="485" stroke="#7c3aed" strokeWidth="2"/>
// //           <line x1={x2} y1="475" x2={x2} y2="485" stroke="#7c3aed" strokeWidth="2"/>
// //           <text x={(300 + x2) / 2 - 10} y="470" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#7c3aed">Δx</text>
          
// //           <line x1="100" y1="250" x2="100" y2={y2} stroke="#dc2626" strokeWidth="2"/>
// //           <line x1="95" y1="250" x2="105" y2="250" stroke="#dc2626" strokeWidth="2"/>
// //           <line x1="95" y1={y2} x2="105" y2={y2} stroke="#dc2626" strokeWidth="2"/>
// //           <text x="75" y={(250 + y2) / 2 + 5} fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#dc2626">Δy</text>
          
// //           {/* Triangle */}
// //           <path d={`M 300 250 L ${x2} 250 L ${x2} ${y2} Z`} stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" fillOpacity="0.3"/>
          
// //           {/* Coordinates */}
// //           <text x="285" y="520" fontFamily="Arial, sans-serif" fontSize="12">x</text>
// //           <text x={x2 - 15} y="520" fontFamily="Arial, sans-serif" fontSize="12">x + Δx</text>
// //         </svg>
// //       </div>

// //       <div className="text-center mt-6 text-gray-600">
// //         <p className="mb-2">As Δx → 0, the secant line approaches the tangent line</p>
// //         <p>The slope approaches f'(x) = <span className="font-semibold text-green-600">0.47</span></p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DerivativeAnimation;


// // import React, { useState, useEffect, useRef } from 'react';

// // const DerivativeAnimation = () => {
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [deltaX, setDeltaX] = useState(150);
// //   const [slope, setSlope] = useState(0);
// //   const animationRef = useRef(null);
// //   const totalSteps = 100;

// //   const f = (x) => {
// //     let t, p0, p1, p2;
// //     if (x <= 300) {
// //       t = Math.max(0, Math.min(1, (x - 150) / 150));
// //       [p0, p1, p2] = [400, 320, 250];
// //     } else if (x <= 450) {
// //       t = Math.max(0, Math.min(1, (x - 300) / 150));
// //       [p0, p1, p2] = [250, 200, 180];
// //     } else {
// //       t = Math.max(0, Math.min(1, (x - 450) / 150));
// //       [p0, p1, p2] = [180, 170, 200];
// //     }
// //     return p0 * (1 - t) ** 2 + 2 * p1 * (1 - t) * t + p2 * t ** 2;
// //   };

// //   const calculatePosition = (step) => {
// //     const progress = step / totalSteps;
// //     const currentX = 450 - 150 * progress;
// //     const qY = f(currentX);
// //     const currentDeltaX = currentX - 300;
// //     const currentSlope = currentDeltaX === 0 ? 0 : (qY - 250) / currentDeltaX;
// //     return { currentX, qY, currentDeltaX, currentSlope };
// //   };

// //   const animate = () => {
// //     if (isPaused) {
// //       animationRef.current = requestAnimationFrame(animate);
// //       return;
// //     }
// //     setCurrentStep((prev) => {
// //       if (prev < totalSteps) {
// //         animationRef.current = requestAnimationFrame(animate);
// //         return prev + 1;
// //       } else {
// //         setIsAnimating(false);
// //         return prev;
// //       }
// //     });
// //   };

// //   const startAnimation = () => {
// //     if (isAnimating) return;
// //     setIsAnimating(true);
// //     setIsPaused(false);
// //     setCurrentStep(0);
// //     animationRef.current = requestAnimationFrame(animate);
// //   };

// //   const resetAnimation = () => {
// //     if (animationRef.current) cancelAnimationFrame(animationRef.current);
// //     setIsAnimating(false);
// //     setIsPaused(false);
// //     setCurrentStep(0);
// //   };

// //   const togglePause = () => {
// //     if (isAnimating) setIsPaused((p) => !p);
// //   };

// //   const stepForward = () => {
// //     setCurrentStep((prev) => Math.min(prev + 5, totalSteps));
// //     if (currentStep + 5 >= totalSteps) setIsAnimating(false);
// //   };

// //   const stepBackward = () => {
// //     setCurrentStep((prev) => Math.max(prev - 5, 0));
// //   };

// //   const { currentX, qY, currentDeltaX, currentSlope } = calculatePosition(currentStep);

// //   useEffect(() => {
// //     setDeltaX(Math.abs(currentDeltaX));
// //     setSlope(currentSlope);
// //   }, [currentDeltaX, currentSlope]);

// //   useEffect(() => {
// //     return () => {
// //       if (animationRef.current) cancelAnimationFrame(animationRef.current);
// //     };
// //   }, []);

// //   const x1 = 300, y1 = 250;
// //   const secantExtend = 100;
// //   const x1Ext = x1 - secantExtend;
// //   const y1Ext = y1 - currentSlope * secantExtend;
// //   const x2Ext = currentX + secantExtend;
// //   const y2Ext = qY + currentSlope * secantExtend;

// //   const distance = Math.abs(currentX - x1);
// //   const showTangent = distance < 20;
// //   const tangentSlope = -0.4;
// //   const tangentOpacity = showTangent ? (20 - distance) / 20 : 0;

// //   return (
// //     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h1 className="text-2xl font-bold text-center mb-4">Derivative as a Limit</h1>
// //       <div className="text-center mb-4 text-lg font-semibold">
// //         <span className="mr-4">Δx = {deltaX.toFixed(2)}</span>
// //         <span className="text-green-600">Slope = {slope.toFixed(2)}</span>
// //       </div>

// //       <div className="flex justify-center gap-2 mb-6 flex-wrap">
// //         <button onClick={startAnimation} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Animate Approach</button>
// //         <button onClick={resetAnimation} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">Reset</button>
// //         <button onClick={togglePause} disabled={!isAnimating} className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white px-4 py-2 rounded">{isPaused ? 'Resume' : 'Pause'}</button>
// //         <button onClick={stepForward} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Step Forward</button>
// //         <button onClick={stepBackward} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Step Backward</button>
// //       </div>

// //       <div className="flex justify-center">
// //         <svg width="800" height="600" viewBox="0 0 800 600" className="border border-gray-300">
// //           <defs>
// //             <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
// //               <path d="M20 0 L0 0 0 20" fill="none" stroke="#e9ecef" strokeWidth="1" />
// //             </pattern>
// //             <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
// //               <polygon points="0 0,10 3.5,0 7" fill="#000" />
// //             </marker>
// //           </defs>
// //           <rect width="800" height="600" fill="url(#grid)" />
// //           <line x1="80" y1="500" x2="720" y2="500" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
// //           <line x1="120" y1="520" x2="120" y2="80" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
// //           <text x="730" y="520" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">x</text>
// //           <text x="100" y="75" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">y</text>
// //           <path d="M150 400 Q220 320 300 250 Q380 200 450 180 Q520 170 600 200" stroke="#2563eb" strokeWidth="3" fill="none" />

// //           <line x1={x1Ext} y1={y1Ext} x2={x2Ext} y2={y2Ext} stroke="#059669" strokeWidth="2" strokeDasharray="5,5" />

// //           <line x1="250" y1={250 - tangentSlope * 50} x2="350" y2={250 + tangentSlope * 50} stroke="#22c55e" strokeWidth="2" strokeDasharray="8,4" opacity={tangentOpacity} />

// //           <circle cx="300" cy="250" r="5" fill="#dc2626" />
// //           <circle cx={currentX} cy={qY} r="5" fill="#dc2626" />
// //           <text x="285" y="240" fontFamily="Arial" fontSize="14" fontWeight="bold">P</text>
// //           <text x={currentX + 5} y={qY - 10} fontFamily="Arial" fontSize="14" fontWeight="bold">Q</text>

// //           <line x1="300" y1="250" x2="300" y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
// //           <line x1={currentX} y1={qY} x2={currentX} y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
// //           <line x1="300" y1="250" x2="120" y2="250" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />
// //           <line x1={currentX} y1={qY} x2="120" y2={qY} stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3" />

// //           <line x1="300" y1="480" x2={currentX} y2="480" stroke="#7c3aed" strokeWidth="2" />
// //           <line x1="300" y1="475" x2="300" y2="485" stroke="#7c3aed" strokeWidth="2" />
// //           <line x1={currentX} y1="475" x2={currentX} y2="485" stroke="#7c3aed" strokeWidth="2" />
// //           <text x={(300 + currentX)/2 - 10} y="470" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#7c3aed">Δx</text>

// //           <line x1="100" y1="250" x2="100" y2={qY} stroke="#dc2626" strokeWidth="2" />
// //           <line x1="95" y1="250" x2="105" y2="250" stroke="#dc2626" strokeWidth="2" />
// //           <line x1="95" y1={qY} x2="105" y2={qY} stroke="#dc2626" strokeWidth="2" />
// //           <text x="75" y={(250 + qY)/2 + 5} fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#dc2626">Δy</text>

// //           <path d={`M300 250 L${currentX} 250 L${currentX} ${qY}Z`} stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" fillOpacity="0.3"/>
// //           <text x="285" y="520" fontFamily="Arial" fontSize="12">x</text>
// //           <text x={currentX - 15} y="520" fontFamily="Arial" fontSize="12">x + Δx</text>
// //         </svg>
// //       </div>

// //       <div className="text-center mt-6 text-gray-600">
// //         <p className="mb-2">As Δx → 0, the secant line approaches the tangent line</p>
// //         <p>The slope approaches f&apos;(x) ≈ <span className="font-semibold text-green-600">0.47</span></p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DerivativeAnimation;



// import React, { useState, useEffect, useRef } from 'react';

// const DerivativeAnimation = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [deltaX, setDeltaX] = useState(150);
//   const [slope, setSlope] = useState(0);
//   const animationRef = useRef();
  
//   const totalSteps = 100;

//   // Function that exactly matches our SVG curve
//   const f = (x) => {
//     if (x <= 300) {
//       // First quadratic segment: from (150,400) through (220,320) to (300,250)
//       const t = (x - 150) / 150;
//       const p0 = 400, p1 = 320, p2 = 250;
//       return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
//     } else if (x <= 450) {
//       // Second quadratic segment: from (300,250) through (380,200) to (450,180)
//       const t = (x - 300) / 150;
//       const p0 = 250, p1 = 200, p2 = 180;
//       return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
//     } else {
//       // Third quadratic segment: from (450,180) through (520,170) to (600,200)
//       const t = (x - 450) / 150;
//       const p0 = 180, p1 = 170, p2 = 200;
//       return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
//     }
//   };

//   const calculatePosition = (step) => {
//     const progress = step / totalSteps;
//     const startX = 450;
//     const endX = 300;
//     // Make it actually approach 0 by going further
//     const currentX = startX - (startX - endX) * (progress);
//     const qY = f(currentX);
//     const currentDeltaX = currentX - 300;
//     const currentSlope = (qY - 250) / (currentX - 300);
    
//     return { currentX, qY, currentDeltaX, currentSlope };
//   };

//   const animate = () => {
//     if (isPaused) {
//       animationRef.current = requestAnimationFrame(animate);
//       return;
//     }
    
//     if (currentStep >= totalSteps) {
//       setIsAnimating(false);
//       return;
//     }
    
//     setCurrentStep(prev => prev + 1);
//     animationRef.current = requestAnimationFrame(animate);
//   };

//   const startAnimation = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setIsPaused(false);
//     setCurrentStep(0);
//   };

//   const resetAnimation = () => {
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
//     setIsAnimating(false);
//     setIsPaused(false);
//     setCurrentStep(0);
//   };

//   const togglePause = () => {
//     if (!isAnimating) return;
//     setIsPaused(!isPaused);
//   };

//   const stepForward = () => {
//     if (currentStep >= totalSteps) return;
//     setCurrentStep(prev => Math.min(prev + 5, totalSteps));
//     if (currentStep + 5 >= totalSteps) {
//       setIsAnimating(false);
//     }
//   };

//   const stepBackward = () => {
//     if (currentStep <= 0) return;
//     setCurrentStep(prev => Math.max(prev - 5, 0));
//   };

//   // Calculate current position based on step
//   const { currentX, qY, currentDeltaX, currentSlope } = calculatePosition(currentStep);

//   useEffect(() => {
//     setDeltaX(Math.abs(currentDeltaX));
//     setSlope(currentSlope);
//   }, [currentDeltaX, currentSlope]);

//   useEffect(() => {
//     if (isAnimating && !isPaused) {
//       animationRef.current = requestAnimationFrame(animate);
//     }
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isAnimating, isPaused]);
//   const x1 = 300, y1 = 250;
//   const x2 = currentX, y2 = qY;
  
//   // Secant line calculation
//   const secantExtend = 100;
//   const x1Extended = x1 - secantExtend;
//   const y1Extended = y1 - slope * secantExtend;
//   const x2Extended = x2 + secantExtend;
//   const y2Extended = y2 + slope * secantExtend;
  
//   // Tangent line (show when very close)
//   const distance = Math.abs(x2 - x1);
//   const showTangent = distance < 20;
//   const tangentSlope = -0.4;
//   const tangentOpacity = showTangent ? Math.max(0, (20 - distance) / 20) : 0;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-4">Derivative as a Limit</h1>
      
//       <div className="text-center mb-4 text-lg font-semibold">
//         <span className="mr-4">Δx = {deltaX.toFixed(2)}</span>
//         <span className="text-green-600">Slope = {-(slope.toFixed(2))}</span>
//       </div>
      
//       <div className="flex justify-center gap-2 mb-6 flex-wrap">
//         <button 
//           onClick={startAnimation}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//         >
//           Animate Approach
//         </button>
//         <button 
//           onClick={resetAnimation}
//           className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
//         >
//           Reset
//         </button>
//         <button 
//           onClick={togglePause}
//           disabled={!isAnimating}
//           className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white px-4 py-2 rounded"
//         >
//           {isPaused ? 'Resume' : 'Pause'}
//         </button>
//         <button 
//           onClick={stepForward}
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//         >
//           Step Forward
//         </button>
//         <button 
//           onClick={stepBackward}
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
//         >
//           Step Backward
//         </button>
//       </div>

//       <div className="flex justify-center">
//         <svg width="800" height="600" viewBox="0 0 800 600" className="border border-gray-300">
//           {/* Grid */}
//           <defs>
//             <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
//               <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9ecef" strokeWidth="1"/>
//             </pattern>
//             <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
//               <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
//             </marker>
//           </defs>
          
//           <rect width="800" height="600" fill="url(#grid)"/>
          
//           {/* Axes */}
//           <line x1="80" y1="500" x2="720" y2="500" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
//           <line x1="120" y1="520" x2="120" y2="80" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
//           {/* Axis labels */}
//           <text x="730" y="520" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">x</text>
//           <text x="100" y="75" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">y</text>
          
//           {/* Function curve */}
//           <path d="M 150 400 Q 220 320 300 250 Q 380 200 450 180 Q 520 170 600 200" 
//                 stroke="#2563eb" strokeWidth="3" fill="none"/>
          
//           {/* Tangent line */}
//           <line x1="250" y1={250 - tangentSlope * 50} x2="350" y2={250 + tangentSlope * 50} 
//                 stroke="#22c55e" strokeWidth="2" strokeDasharray="8,4" opacity={tangentOpacity}/>
          
//           {/* Secant line */}
//           <line x1={x1Extended} y1={y1Extended} x2={x2Extended} y2={y2Extended} 
//                 stroke="#059669" strokeWidth="2" strokeDasharray="5,5"/>
          
//           {/* Points */}
//           <circle cx="300" cy="250" r="5" fill="#dc2626"/>
//           <circle cx={x2} cy={y2} r="5" fill="#dc2626"/>
          
//           {/* Point labels */}
//           <text x="285" y="240" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">P</text>
//           <text x={x2 + 5} y={y2 - 10} fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">Q</text>
          
//           {/* Projections */}
//           <line x1="300" y1="250" x2="300" y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
//           <line x1={x2} y1={y2} x2={x2} y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
//           <line x1="300" y1="250" x2="120" y2="250" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
//           <line x1={x2} y1={y2} x2="120" y2={y2} stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
          
//           {/* Delta indicators */}
//           <line x1="300" y1="480" x2={x2} y2="480" stroke="#7c3aed" strokeWidth="2"/>
//           <line x1="300" y1="475" x2="300" y2="485" stroke="#7c3aed" strokeWidth="2"/>
//           <line x1={x2} y1="475" x2={x2} y2="485" stroke="#7c3aed" strokeWidth="2"/>
//           <text x={(300 + x2) / 2 - 10} y="470" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#7c3aed">Δx</text>
          
//           <line x1="100" y1="250" x2="100" y2={y2} stroke="#dc2626" strokeWidth="2"/>
//           <line x1="95" y1="250" x2="105" y2="250" stroke="#dc2626" strokeWidth="2"/>
//           <line x1="95" y1={y2} x2="105" y2={y2} stroke="#dc2626" strokeWidth="2"/>
//           <text x="75" y={(250 + y2) / 2 + 5} fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#dc2626">Δy</text>
          
//           {/* Triangle */}
//           <path d={`M 300 250 L ${x2} 250 L ${x2} ${y2} Z`} stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" fillOpacity="0.3"/>
          
//           {/* Coordinates */}
//           <text x="285" y="520" fontFamily="Arial, sans-serif" fontSize="12">x</text>
//           <text x={x2 - 15} y="520" fontFamily="Arial, sans-serif" fontSize="12">x + Δx</text>
//         </svg>
//       </div>

//       <div className="text-center mt-6 text-gray-600">
//         <p className="mb-2">As Δx → 0, the secant line approaches the tangent line</p>
//         <p>The slope approaches f'(x) = <span className="font-semibold text-green-600">0.47</span></p>
//       </div>
//     </div>
//   );
// };

// export default DerivativeAnimation;


import React, { useState, useEffect, useRef } from 'react';

const DerivativeAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [deltaX, setDeltaX] = useState(150);
  const [slope, setSlope] = useState(0);
  const animationRef = useRef();
  
  const totalSteps = 100;

  // Function that exactly matches our SVG curve
  const f = (x) => {
    if (x <= 300) {
      // First quadratic segment: from (150,400) through (220,320) to (300,250)
      const t = (x - 150) / 150;
      const p0 = 400, p1 = 320, p2 = 250;
      return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
    } else if (x <= 450) {
      // Second quadratic segment: from (300,250) through (380,200) to (450,180)
      const t = (x - 300) / 150;
      const p0 = 250, p1 = 200, p2 = 180;
      return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
    } else {
      // Third quadratic segment: from (450,180) through (520,170) to (600,200)
      const t = (x - 450) / 150;
      const p0 = 180, p1 = 170, p2 = 200;
      return p0 * (1-t) * (1-t) + 2 * p1 * (1-t) * t + p2 * t * t;
    }
  };

  const calculatePosition = (step) => {
    const progress = step / totalSteps;
    const startX = 450;
    const endX = 300;
    const currentX = startX - (startX - endX) * (1 - Math.exp(-progress * 4));
    const qY = f(currentX);
    const currentDeltaX = currentX - 300;
    const currentSlope = (qY - 250) / (currentX - 300);
    
    return { currentX, qY, currentDeltaX, currentSlope };
  };

  const animate = () => {
    if (isPaused) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    if (currentStep >= totalSteps) {
      setIsAnimating(false);
      return;
    }
    
    setCurrentStep(prev => prev + 1);
    animationRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsPaused(false);
    setCurrentStep(0);
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsAnimating(false);
    setIsPaused(false);
    setCurrentStep(0);
  };

  const togglePause = () => {
    if (!isAnimating) return;
    setIsPaused(!isPaused);
  };

  const stepForward = () => {
    if (currentStep >= totalSteps) return;
    setCurrentStep(prev => Math.min(prev + 5, totalSteps));
    if (currentStep + 5 >= totalSteps) {
      setIsAnimating(false);
    }
  };

  const stepBackward = () => {
    if (currentStep <= 0) return;
    setCurrentStep(prev => Math.max(prev - 5, 0));
  };

  // Calculate current position based on step
  const { currentX, qY, currentDeltaX, currentSlope } = calculatePosition(currentStep);

  useEffect(() => {
    setDeltaX(Math.abs(currentDeltaX));
    setSlope(currentSlope);
  }, [currentDeltaX, currentSlope]);

  useEffect(() => {
    if (isAnimating && !isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating, isPaused]);
  const x1 = 300, y1 = 250;
  const x2 = currentX, y2 = qY;
  
  // Secant line calculation
  const secantExtend = 100;
  const x1Extended = x1 - secantExtend;
  const y1Extended = y1 - slope * secantExtend;
  const x2Extended = x2 + secantExtend;
  const y2Extended = y2 + slope * secantExtend;
  
  // Tangent line (show when very close)
  const distance = Math.abs(x2 - x1);
  const showTangent = distance < 20;
  const tangentSlope = -0.4;
  const tangentOpacity = showTangent ? Math.max(0, (20 - distance) / 20) : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Derivative as a Limit</h1>
      
      <div className="text-center mb-4 text-lg font-semibold">
        <span className="mr-4">Δx = {deltaX.toFixed(2)}</span>
        <span className="text-green-600">Slope = {-(slope.toFixed(2))}</span>
      </div>
      
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        <button 
          onClick={startAnimation}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Animate Approach
        </button>
        <button 
          onClick={resetAnimation}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        <button 
          onClick={togglePause}
          disabled={!isAnimating}
          className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white px-4 py-2 rounded"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button 
          onClick={stepForward}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Step Forward
        </button>
        <button 
          onClick={stepBackward}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Step Backward
        </button>
      </div>

      <div className="flex justify-center">
        <svg width="800" height="600" viewBox="0 0 800 600" className="border border-gray-300">
          {/* Grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9ecef" strokeWidth="1"/>
            </pattern>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
            </marker>
          </defs>
          
          <rect width="800" height="600" fill="url(#grid)"/>
          
          {/* Axes */}
          <line x1="80" y1="500" x2="720" y2="500" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="120" y1="520" x2="120" y2="80" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          {/* Axis labels */}
          <text x="730" y="520" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">x</text>
          <text x="100" y="75" fontFamily="Arial, sans-serif" fontSize="16" fontStyle="italic">y</text>
          
          {/* Function curve */}
          <path d="M 150 400 Q 220 320 300 250 Q 380 200 450 180 Q 520 170 600 200" 
                stroke="#2563eb" strokeWidth="3" fill="none"/>
          
          {/* Tangent line */}
          <line x1="250" y1={250 - tangentSlope * 50} x2="350" y2={250 + tangentSlope * 50} 
                stroke="#22c55e" strokeWidth="2" strokeDasharray="8,4" opacity={tangentOpacity}/>
          
          {/* Secant line */}
          <line x1={x1Extended} y1={y1Extended} x2={x2Extended} y2={y2Extended} 
                stroke="#059669" strokeWidth="2" strokeDasharray="5,5"/>
          
          {/* Points */}
          <circle cx="300" cy="250" r="5" fill="#dc2626"/>
          <circle cx={x2} cy={y2} r="5" fill="#dc2626"/>
          
          {/* Point labels */}
          <text x="285" y="240" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">P</text>
          <text x={x2 + 5} y={y2 - 10} fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold">Q</text>
          
          {/* Projections */}
          <line x1="300" y1="250" x2="300" y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1={x2} y1={y2} x2={x2} y2="500" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="300" y1="250" x2="120" y2="250" stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1={x2} y1={y2} x2="120" y2={y2} stroke="#6b7280" strokeWidth="1" strokeDasharray="3,3"/>
          
          {/* Delta indicators */}
          <line x1="300" y1="480" x2={x2} y2="480" stroke="#7c3aed" strokeWidth="2"/>
          <line x1="300" y1="475" x2="300" y2="485" stroke="#7c3aed" strokeWidth="2"/>
          <line x1={x2} y1="475" x2={x2} y2="485" stroke="#7c3aed" strokeWidth="2"/>
          <text x={(300 + x2) / 2 - 10} y="470" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#7c3aed">Δx</text>
          
          <line x1="100" y1="250" x2="100" y2={y2} stroke="#dc2626" strokeWidth="2"/>
          <line x1="95" y1="250" x2="105" y2="250" stroke="#dc2626" strokeWidth="2"/>
          <line x1="95" y1={y2} x2="105" y2={y2} stroke="#dc2626" strokeWidth="2"/>
          <text x="75" y={(250 + y2) / 2 + 5} fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#dc2626">Δy</text>
          
          {/* Triangle */}
          <path d={`M 300 250 L ${x2} 250 L ${x2} ${y2} Z`} stroke="#f59e0b" strokeWidth="2" fill="#fef3c7" fillOpacity="0.3"/>
          
          {/* Coordinates */}
          <text x="285" y="520" fontFamily="Arial, sans-serif" fontSize="12">x</text>
          <text x={x2 - 15} y="520" fontFamily="Arial, sans-serif" fontSize="12">x + Δx</text>
        </svg>
      </div>

      <div className="text-center mt-6 text-gray-600">
        <p className="mb-2">As Δx → 0, the secant line approaches the tangent line</p>
        <p>The slope approaches f&apos;(x) = <span className="font-semibold text-green-600">-0.40</span></p>
      </div>
    </div>
  );
};

export default DerivativeAnimation;