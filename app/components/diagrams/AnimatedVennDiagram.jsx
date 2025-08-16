// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { motion } from 'framer-motion';
// // // // // // import styles from './AnimatedVennDiagram.module.css';

// // // // // // const AnimatedVennDiagram = () => {
// // // // // //   const [animate, setAnimate] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setTimeout(() => setAnimate(true), 500);
// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, []);

// // // // // //   const circleVariants = {
// // // // // //     hidden: { scale: 0, opacity: 0 },
// // // // // //     visible: { 
// // // // // //       scale: 1, 
// // // // // //       opacity: 1,
// // // // // //       transition: { duration: 1, ease: "easeOut" }
// // // // // //     }
// // // // // //   };

// // // // // //   const pathVariants = {
// // // // // //     hidden: { pathLength: 0, opacity: 0 },
// // // // // //     visible: { 
// // // // // //       pathLength: 1, 
// // // // // //       opacity: 1,
// // // // // //       transition: { duration: 2, ease: "easeInOut" }
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <svg width="400" height="300" viewBox="0 0 400 300">
// // // // // //         <motion.circle
// // // // // //           cx="150"
// // // // // //           cy="150"
// // // // // //           r="100"
// // // // // //           fill="rgba(255, 0, 0, 0.3)"
// // // // // //           stroke="red"
// // // // // //           strokeWidth="2"
// // // // // //           variants={circleVariants}
// // // // // //           initial="hidden"
// // // // // //           animate={animate ? "visible" : "hidden"}
// // // // // //         />
// // // // // //         <motion.circle
// // // // // //           cx="250"
// // // // // //           cy="150"
// // // // // //           r="100"
// // // // // //           fill="rgba(0, 0, 255, 0.3)"
// // // // // //           stroke="blue"
// // // // // //           strokeWidth="2"
// // // // // //           variants={circleVariants}
// // // // // //           initial="hidden"
// // // // // //           animate={animate ? "visible" : "hidden"}
// // // // // //         />
// // // // // //         <motion.path
// // // // // //           d="M200 150 C 200 100, 250 50, 300 50 S 400 100, 400 150 S 350 250, 300 250 S 200 200, 200 150"
// // // // // //           fill="none"
// // // // // //           stroke="purple"
// // // // // //           strokeWidth="2"
// // // // // //           variants={pathVariants}
// // // // // //           initial="hidden"
// // // // // //           animate={animate ? "visible" : "hidden"}
// // // // // //         />
// // // // // //       </svg>
// // // // // //       <button onClick={() => setAnimate(!animate)} className={styles.button}>
// // // // // //         {animate ? 'Reset' : 'Animate'}
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AnimatedVennDiagram;
// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // import styles from './AnimatedVennDiagram.module.css';

// // // // // const AnimatedVennDiagram = () => {
// // // // //   const [currentFrame, setCurrentFrame] = useState(0);
// // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // //   const animationRef = useRef(null);

// // // // //   const frames = [
// // // // //     { // Frame 0: Initial state
// // // // //       circle1: { cx: 150, cy: 150, r: 0, fill: "rgba(255, 0, 0, 0.3)" },
// // // // //       circle2: { cx: 250, cy: 150, r: 0, fill: "rgba(0, 0, 255, 0.3)" },
// // // // //       intersection: { d: "M 200 150 L 200 150" }
// // // // //     },
// // // // //     { // Frame 1: Circles appear
// // // // //       circle1: { cx: 150, cy: 150, r: 100, fill: "rgba(255, 0, 0, 0.3)" },
// // // // //       circle2: { cx: 250, cy: 150, r: 100, fill: "rgba(0, 0, 255, 0.3)" },
// // // // //       intersection: { d: "M 200 150 L 200 150" }
// // // // //     },
// // // // //     { // Frame 2: Intersection appears
// // // // //       circle1: { cx: 150, cy: 150, r: 100, fill: "rgba(255, 0, 0, 0.3)" },
// // // // //       circle2: { cx: 250, cy: 150, r: 100, fill: "rgba(0, 0, 255, 0.3)" },
// // // // //       intersection: { d: "M 200 150 C 200 100, 250 50, 300 50 S 400 100, 400 150 S 350 250, 300 250 S 200 200, 200 150" }
// // // // //     },
// // // // //     { // Frame 3: Circles separate
// // // // //       circle1: { cx: 100, cy: 150, r: 100, fill: "rgba(255, 0, 0, 0.3)" },
// // // // //       circle2: { cx: 300, cy: 150, r: 100, fill: "rgba(0, 0, 255, 0.3)" },
// // // // //       intersection: { d: "M 200 150 L 200 150" }
// // // // //     }
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     if (isPlaying) {
// // // // //       animationRef.current = requestAnimationFrame(animate);
// // // // //     } else {
// // // // //       cancelAnimationFrame(animationRef.current);
// // // // //     }

// // // // //     return () => cancelAnimationFrame(animationRef.current);
// // // // //   }, [isPlaying, currentFrame]);

// // // // //   const animate = () => {
// // // // //     setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
// // // // //   };

// // // // //   const handlePlayPause = () => {
// // // // //     setIsPlaying(!isPlaying);
// // // // //   };

// // // // //   const handleNextFrame = () => {
// // // // //     setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
// // // // //   };

// // // // //   const handlePrevFrame = () => {
// // // // //     setCurrentFrame((prevFrame) => (prevFrame - 1 + frames.length) % frames.length);
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <svg width="400" height="300" viewBox="0 0 400 300">
// // // // //         <AnimatePresence>
// // // // //           <motion.circle
// // // // //             key="circle1"
// // // // //             initial={frames[0].circle1}
// // // // //             animate={frames[currentFrame].circle1}
// // // // //             transition={{ duration: 0.5 }}
// // // // //             stroke="red"
// // // // //             strokeWidth="2"
// // // // //           />
// // // // //           <motion.circle
// // // // //             key="circle2"
// // // // //             initial={frames[0].circle2}
// // // // //             animate={frames[currentFrame].circle2}
// // // // //             transition={{ duration: 0.5 }}
// // // // //             stroke="blue"
// // // // //             strokeWidth="2"
// // // // //           />
// // // // //           <motion.path
// // // // //             key="intersection"
// // // // //             initial={frames[0].intersection}
// // // // //             animate={frames[currentFrame].intersection}
// // // // //             transition={{ duration: 0.5 }}
// // // // //             fill="none"
// // // // //             stroke="purple"
// // // // //             strokeWidth="2"
// // // // //           />
// // // // //         </AnimatePresence>
// // // // //       </svg>
// // // // //       <div className={styles.controls}>
// // // // //         <button onClick={handlePrevFrame}>Previous</button>
// // // // //         <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
// // // // //         <button onClick={handleNextFrame}>Next</button>
// // // // //       </div>
// // // // //       <div className={styles.frameInfo}>
// // // // //         Current Frame: {currentFrame + 1} / {frames.length}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AnimatedVennDiagram;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { motion, useAnimation } from 'framer-motion';
// // // // import styles from './AnimatedVennDiagram.module.css';

// // // // const AnimatedVennDiagram = () => {
// // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // //   const controls = useAnimation();

// // // //   useEffect(() => {
// // // //     if (isPlaying) {
// // // //       controls.start("animate");
// // // //     } else {
// // // //       controls.stop();
// // // //     }
// // // //   }, [isPlaying, controls]);

// // // //   const handlePlayPause = () => {
// // // //     setIsPlaying(!isPlaying);
// // // //   };

// // // //   const circle1Variants = {
// // // //     initial: { cx: 150, cy: 150, r: 0, opacity: 0 },
// // // //     animate: {
// // // //       cx: 150,
// // // //       cy: 150,
// // // //       r: 100,
// // // //       opacity: 1,
// // // //       transition: { duration: 2, ease: "easeInOut" }
// // // //     }
// // // //   };

// // // //   const circle2Variants = {
// // // //     initial: { cx: 250, cy: 150, r: 0, opacity: 0 },
// // // //     animate: {
// // // //       cx: 250,
// // // //       cy: 150,
// // // //       r: 100,
// // // //       opacity: 1,
// // // //       transition: { duration: 2, ease: "easeInOut", delay: 1 }
// // // //     }
// // // //   };

// // // //   const intersectionVariants = {
// // // //     initial: { opacity: 0 },
// // // //     animate: {
// // // //       opacity: 1,
// // // //       transition: { duration: 1, ease: "easeInOut", delay: 3 }
// // // //     }
// // // //   };

// // // //   const labelVariants = {
// // // //     initial: { opacity: 0 },
// // // //     animate: { opacity: 1, transition: { duration: 1, delay: 4 } }
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <svg width="400" height="300" viewBox="0 0 400 300">
// // // //         <motion.circle
// // // //           variants={circle1Variants}
// // // //           initial="initial"
// // // //           animate={controls}
// // // //           fill="rgba(255, 0, 0, 0.3)"
// // // //           stroke="red"
// // // //           strokeWidth="2"
// // // //         />
// // // //         <motion.circle
// // // //           variants={circle2Variants}
// // // //           initial="initial"
// // // //           animate={controls}
// // // //           fill="rgba(0, 0, 255, 0.3)"
// // // //           stroke="blue"
// // // //           strokeWidth="2"
// // // //         />
// // // //         <motion.path
// // // //           d="M 200 150 C 185 115, 215 85, 250 85 S 315 115, 300 150 S 285 185, 250 215 S 185 185, 200 150"
// // // //           fill="rgba(128, 0, 128, 0.5)"
// // // //           stroke="purple"
// // // //           strokeWidth="2"
// // // //           variants={intersectionVariants}
// // // //           initial="initial"
// // // //           animate={controls}
// // // //         />
// // // //         <motion.text x="120" y="150" variants={labelVariants} initial="initial" animate={controls}>Set A</motion.text>
// // // //         <motion.text x="280" y="150" variants={labelVariants} initial="initial" animate={controls}>Set B</motion.text>
// // // //         <motion.text x="200" y="150" variants={labelVariants} initial="initial" animate={controls}>A ∩ B</motion.text>
// // // //       </svg>
// // // //       <div className={styles.controls}>
// // // //         <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AnimatedVennDiagram;
// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import styles from './AnimatedVennDiagram.module.css';

// // // const AnimatedVennDiagram = () => {
// // //   const [stage, setStage] = useState(0);
// // //   const [isPlaying, setIsPlaying] = useState(false);

// // //   const handleNext = () => {
// // //     setStage(prev => Math.min(prev + 1, 3));
// // //     setIsPlaying(false);
// // //   };

// // //   const handlePrevious = () => {
// // //     setStage(prev => Math.max(prev - 1, 0));
// // //     setIsPlaying(false);
// // //   };

// // //   const handleReset = () => {
// // //     setStage(0);
// // //     setIsPlaying(false);
// // //   };

// // //   const handlePlayPause = () => {
// // //     setIsPlaying(!isPlaying);
// // //   };

// // //   const circle1Variants = {
// // //     hidden: { cx: 150, cy: 150, r: 0, opacity: 0 },
// // //     visible: { cx: 150, cy: 150, r: 100, opacity: 1 },
// // //   };

// // //   const circle2Variants = {
// // //     hidden: { cx: 250, cy: 150, r: 0, opacity: 0 },
// // //     visible: { cx: 250, cy: 150, r: 100, opacity: 1 },
// // //   };

// // //   const intersectionVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1 },
// // //   };

// // //   const labelVariants = {
// // //     hidden: { opacity: 0 },
// // //     visible: { opacity: 1 },
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <svg width="400" height="300" viewBox="0 0 400 300">
// // //         <AnimatePresence>
// // //           {stage >= 1 && (
// // //             <motion.circle
// // //               key="circle1"
// // //               variants={circle1Variants}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="hidden"
// // //               transition={{ duration: 1 }}
// // //               fill="rgba(255, 0, 0, 0.3)"
// // //               stroke="red"
// // //               strokeWidth="2"
// // //             />
// // //           )}
// // //           {stage >= 2 && (
// // //             <motion.circle
// // //               key="circle2"
// // //               variants={circle2Variants}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="hidden"
// // //               transition={{ duration: 1 }}
// // //               fill="rgba(0, 0, 255, 0.3)"
// // //               stroke="blue"
// // //               strokeWidth="2"
// // //             />
// // //           )}
// // //           {stage >= 3 && (
// // //             <motion.path
// // //               key="intersection"
// // //               d="M 200 150 C 185 115, 215 85, 250 85 S 315 115, 300 150 S 285 185, 250 215 S 185 185, 200 150"
// // //               fill="rgba(128, 0, 128, 0.5)"
// // //               stroke="purple"
// // //               strokeWidth="2"
// // //               variants={intersectionVariants}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="hidden"
// // //               transition={{ duration: 1 }}
// // //             />
// // //           )}
// // //           {stage >= 3 && (
// // //             <>
// // //               <motion.text x="120" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">Set A</motion.text>
// // //               <motion.text x="280" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">Set B</motion.text>
// // //               <motion.text x="200" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">A ∩ B</motion.text>
// // //             </>
// // //           )}
// // //         </AnimatePresence>
// // //       </svg>
// // //       <div className={styles.controls}>
// // //         <button onClick={handlePrevious} disabled={stage === 0}>Previous</button>
// // //         <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
// // //         <button onClick={handleNext} disabled={stage === 3}>Next</button>
// // //         <button onClick={handleReset}>Reset</button>
// // //       </div>
// // //       <div className={styles.stageInfo}>
// // //         Stage: {stage} / 3
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AnimatedVennDiagram;
// // import React, { useState, useEffect, useCallback } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import styles from './AnimatedVennDiagram.module.css';

// // const AnimatedVennDiagram = () => {
// //   const [stage, setStage] = useState(0);
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   const nextStage = useCallback(() => {
// //     setStage(prev => Math.min(prev + 1, 3));
// //   }, []);

// //   const previousStage = useCallback(() => {
// //     setStage(prev => Math.max(prev - 1, 0));
// //   }, []);

// //   const handleReset = useCallback(() => {
// //     setStage(0);
// //     setIsPlaying(false);
// //   }, []);

// //   const handlePlayPause = useCallback(() => {
// //     setIsPlaying(prev => !prev);
// //   }, []);

// //   useEffect(() => {
// //     let intervalId;
// //     if (isPlaying) {
// //       intervalId = setInterval(() => {
// //         setStage(prev => {
// //           if (prev < 3) {
// //             return prev + 1;
// //           } else {
// //             setIsPlaying(false);
// //             return prev;
// //           }
// //         });
// //       }, 2000); // Change stage every 2 seconds
// //     }
// //     return () => clearInterval(intervalId);
// //   }, [isPlaying]);

// //   const circle1Variants = {
// //     hidden: { cx: 150, cy: 150, r: 0, opacity: 0 },
// //     visible: { cx: 150, cy: 150, r: 100, opacity: 1 },
// //   };

// //   const circle2Variants = {
// //     hidden: { cx: 250, cy: 150, r: 0, opacity: 0 },
// //     visible: { cx: 250, cy: 150, r: 100, opacity: 1 },
// //   };

// //   const intersectionVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1 },
// //   };

// //   const labelVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { opacity: 1 },
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <svg width="400" height="300" viewBox="0 0 400 300">
// //         <AnimatePresence>
// //           {stage >= 1 && (
// //             <motion.circle
// //               key="circle1"
// //               variants={circle1Variants}
// //               initial="hidden"
// //               animate="visible"
// //               exit="hidden"
// //               transition={{ duration: 1 }}
// //               fill="rgba(255, 0, 0, 0.3)"
// //               stroke="red"
// //               strokeWidth="2"
// //             />
// //           )}
// //           {stage >= 2 && (
// //             <motion.circle
// //               key="circle2"
// //               variants={circle2Variants}
// //               initial="hidden"
// //               animate="visible"
// //               exit="hidden"
// //               transition={{ duration: 1 }}
// //               fill="rgba(0, 0, 255, 0.3)"
// //               stroke="blue"
// //               strokeWidth="2"
// //             />
// //           )}
// //           {stage >= 3 && (
// //             <motion.path
// //               key="intersection"
// //               d="M 200 150 C 185 115, 215 85, 250 85 S 315 115, 300 150 S 285 185, 250 215 S 185 185, 200 150"
// //               fill="rgba(128, 0, 128, 0.5)"
// //               stroke="purple"
// //               strokeWidth="2"
// //               variants={intersectionVariants}
// //               initial="hidden"
// //               animate="visible"
// //               exit="hidden"
// //               transition={{ duration: 1 }}
// //             />
// //           )}
// //           {stage >= 3 && (
// //             <>
// //               <motion.text x="120" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">Set A</motion.text>
// //               <motion.text x="280" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">Set B</motion.text>
// //               <motion.text x="200" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">A ∩ B</motion.text>
// //             </>
// //           )}
// //         </AnimatePresence>
// //       </svg>
// //       <div className={styles.controls}>
// //         <button onClick={previousStage} disabled={stage === 0}>Previous</button>
// //         <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
// //         <button onClick={nextStage} disabled={stage === 3}>Next</button>
// //         <button onClick={handleReset}>Reset</button>
// //       </div>
// //       <div className={styles.stageInfo}>
// //         Stage: {stage} / 3
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnimatedVennDiagram;
// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './AnimatedVennDiagram.module.css';

// const AnimatedVennDiagram = () => {
//   const [stage, setStage] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [circle1, setCircle1] = useState({ radius: 100, color: '#FF0000', label: 'Set A' });
//   const [circle2, setCircle2] = useState({ radius: 100, color: '#0000FF', label: 'Set B' });

//   const nextStage = useCallback(() => {
//     setStage(prev => Math.min(prev + 1, 3));
//   }, []);

//   const previousStage = useCallback(() => {
//     setStage(prev => Math.max(prev - 1, 0));
//   }, []);

//   const handleReset = useCallback(() => {
//     setStage(0);
//     setIsPlaying(false);
//   }, []);

//   const handlePlayPause = useCallback(() => {
//     setIsPlaying(prev => !prev);
//   }, []);

//   useEffect(() => {
//     let intervalId;
//     if (isPlaying) {
//       intervalId = setInterval(() => {
//         setStage(prev => {
//           if (prev < 3) {
//             return prev + 1;
//           } else {
//             setIsPlaying(false);
//             return prev;
//           }
//         });
//       }, 2000);
//     }
//     return () => clearInterval(intervalId);
//   }, [isPlaying]);

//   const circle1Variants = {
//     hidden: { cx: 150, cy: 150, r: 0, opacity: 0 },
//     visible: { cx: 150, cy: 150, r: circle1.radius, opacity: 1 },
//   };

//   const circle2Variants = {
//     hidden: { cx: 250, cy: 150, r: 0, opacity: 0 },
//     visible: { cx: 250, cy: 150, r: circle2.radius, opacity: 1 },
//   };

//   const intersectionVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const labelVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   return (
//     <div className={styles.container}>
//       <svg width="400" height="300" viewBox="0 0 400 300">
//         <AnimatePresence>
//           {stage >= 1 && (
//             <motion.circle
//               key="circle1"
//               variants={circle1Variants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               transition={{ duration: 1 }}
//               fill={`${circle1.color}4D`}
//               stroke={circle1.color}
//               strokeWidth="2"
//             />
//           )}
//           {stage >= 2 && (
//             <motion.circle
//               key="circle2"
//               variants={circle2Variants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               transition={{ duration: 1 }}
//               fill={`${circle2.color}4D`}
//               stroke={circle2.color}
//               strokeWidth="2"
//             />
//           )}
//           {stage >= 3 && (
//             <motion.path
//               key="intersection"
//               d={`M ${200 - circle1.radius/2} 150 C ${185 - circle1.radius/2} ${115 - circle1.radius/2}, ${215 + circle2.radius/2} ${85 - circle2.radius/2}, ${250 + circle2.radius/2} ${85 - circle2.radius/2} S ${315 + circle2.radius/2} ${115 - circle2.radius/2}, ${300 + circle2.radius/2} 150 S ${285 + circle2.radius/2} ${185 + circle2.radius/2}, ${250 + circle2.radius/2} ${215 + circle2.radius/2} S ${185 - circle1.radius/2} ${185 + circle1.radius/2}, ${200 - circle1.radius/2} 150`}
//               fill="rgba(128, 0, 128, 0.5)"
//               stroke="purple"
//               strokeWidth="2"
//               variants={intersectionVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               transition={{ duration: 1 }}
//             />
//           )}
//           {stage >= 3 && (
//             <>
//               <motion.text x="120" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">{circle1.label}</motion.text>
//               <motion.text x="280" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">{circle2.label}</motion.text>
//               <motion.text x="200" y="150" variants={labelVariants} initial="hidden" animate="visible" exit="hidden">A ∩ B</motion.text>
//             </>
//           )}
//         </AnimatePresence>
//       </svg>
//       <div className={styles.controls}>
//         <button onClick={previousStage} disabled={stage === 0}>Previous</button>
//         <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
//         <button onClick={nextStage} disabled={stage === 3}>Next</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//       <div className={styles.stageInfo}>
//         Stage: {stage} / 3
//       </div>
//       <div className={styles.customizationControls}>
//         <div>
//           <label>Set A Radius:</label>
//           <input 
//             type="range" 
//             min="50" 
//             max="150" 
//             value={circle1.radius} 
//             onChange={(e) => setCircle1({...circle1, radius: Number(e.target.value)})}
//           />
//         </div>
//         <div>
//           <label>Set A Color:</label>
//           <input 
//             type="color" 
//             value={circle1.color} 
//             onChange={(e) => setCircle1({...circle1, color: e.target.value})}
//           />
//         </div>
//         <div>
//           <label>Set A Label:</label>
//           <input 
//             type="text" 
//             value={circle1.label} 
//             onChange={(e) => setCircle1({...circle1, label: e.target.value})}
//           />
//         </div>
//         <div>
//           <label>Set B Radius:</label>
//           <input 
//             type="range" 
//             min="50" 
//             max="150" 
//             value={circle2.radius} 
//             onChange={(e) => setCircle2({...circle2, radius: Number(e.target.value)})}
//           />
//         </div>
//         <div>
//           <label>Set B Color:</label>
//           <input 
//             type="color" 
//             value={circle2.color} 
//             onChange={(e) => setCircle2({...circle2, color: e.target.value})}
//           />
//         </div>
//         <div>
//           <label>Set B Label:</label>
//           <input 
//             type="text" 
//             value={circle2.label} 
//             onChange={(e) => setCircle2({...circle2, label: e.target.value})}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedVennDiagram;
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AnimatedVennDiagram.module.css';

const AnimatedVennDiagram = () => {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [circle1, setCircle1] = useState({ cx: 150, cy: 150, radius: 80, color: '#FF0000', label: 'Set A' });
  const [circle2, setCircle2] = useState({ cx: 250, cy: 150, radius: 80, color: '#0000FF', label: 'Set B' });

  const nextStage = useCallback(() => {
    setStage(prev => Math.min(prev + 1, 3));
  }, []);

  const previousStage = useCallback(() => {
    setStage(prev => Math.max(prev - 1, 0));
  }, []);

  const handleReset = useCallback(() => {
    setStage(0);
    setIsPlaying(false);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setStage(prev => {
          if (prev < 3) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const calculateIntersection = useCallback(() => {
    const dx = circle2.cx - circle1.cx;
    const dy = circle2.cy - circle1.cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > circle1.radius + circle2.radius) {
      return null; // Circles don't intersect
    }

    const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + distance * distance) / (2 * distance);
    const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

    const cx = circle1.cx + (a * dx) / distance;
    const cy = circle1.cy + (a * dy) / distance;

    const intersectionX1 = cx + (h * dy) / distance;
    const intersectionY1 = cy - (h * dx) / distance;
    const intersectionX2 = cx - (h * dy) / distance;
    const intersectionY2 = cy + (h * dx) / distance;

    return `M ${intersectionX1} ${intersectionY1} A ${circle1.radius} ${circle1.radius} 0 0 1 ${intersectionX2} ${intersectionY2} A ${circle2.radius} ${circle2.radius} 0 0 1 ${intersectionX1} ${intersectionY1}`;
  }, [circle1, circle2]);

  const intersectionPath = calculateIntersection();

  const circle1Variants = {
    hidden: { ...circle1, r: 0, opacity: 0 },
    visible: { ...circle1, r: circle1.radius, opacity: 1 },
  };

  const circle2Variants = {
    hidden: { ...circle2, r: 0, opacity: 0 },
    visible: { ...circle2, r: circle2.radius, opacity: 1 },
  };

  const intersectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.container}>
      <svg width="400" height="300" viewBox="0 0 400 300">
        <AnimatePresence>
          {stage >= 1 && (
            <motion.circle
              key="circle1"
              variants={circle1Variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              fill={`${circle1.color}4D`}
              stroke={circle1.color}
              strokeWidth="2"
            />
          )}
          {stage >= 2 && (
            <motion.circle
              key="circle2"
              variants={circle2Variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              fill={`${circle2.color}4D`}
              stroke={circle2.color}
              strokeWidth="2"
            />
          )}
          {stage >= 3 && intersectionPath && (
            <motion.path
              key="intersection"
              d={intersectionPath}
              fill="rgba(128, 0, 128, 0.5)"
              stroke="purple"
              strokeWidth="2"
              variants={intersectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
            />
          )}
          {stage >= 3 && (
            <>
              <motion.text x={circle1.cx - 30} y={circle1.cy} variants={labelVariants} initial="hidden" animate="visible" exit="hidden">{circle1.label}</motion.text>
              <motion.text x={circle2.cx + 30} y={circle2.cy} variants={labelVariants} initial="hidden" animate="visible" exit="hidden">{circle2.label}</motion.text>
              <motion.text x={(circle1.cx + circle2.cx) / 2} y={circle1.cy + 30} variants={labelVariants} initial="hidden" animate="visible" exit="hidden">A ∩ B</motion.text>
            </>
          )}
        </AnimatePresence>
      </svg>
      <div className={styles.controls}>
        <button onClick={previousStage} disabled={stage === 0}>Previous</button>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={nextStage} disabled={stage === 3}>Next</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={styles.stageInfo}>
        Stage: {stage} / 3
      </div>
      <div className={styles.customizationControls}>
        <div>
          <label>Set A Radius:</label>
          <input 
            type="range" 
            min="50" 
            max="120" 
            value={circle1.radius} 
            onChange={(e) => setCircle1({...circle1, radius: Number(e.target.value)})}
          />
        </div>
        <div>
          <label>Set A Color:</label>
          <input 
            type="color" 
            value={circle1.color} 
            onChange={(e) => setCircle1({...circle1, color: e.target.value})}
          />
        </div>
        <div>
          <label>Set A Label:</label>
          <input 
            type="text" 
            value={circle1.label} 
            onChange={(e) => setCircle1({...circle1, label: e.target.value})}
          />
        </div>
        <div>
          <label>Set B Radius:</label>
          <input 
            type="range" 
            min="50" 
            max="120" 
            value={circle2.radius} 
            onChange={(e) => setCircle2({...circle2, radius: Number(e.target.value)})}
          />
        </div>
        <div>
          <label>Set B Color:</label>
          <input 
            type="color" 
            value={circle2.color} 
            onChange={(e) => setCircle2({...circle2, color: e.target.value})}
          />
        </div>
        <div>
          <label>Set B Label:</label>
          <input 
            type="text" 
            value={circle2.label} 
            onChange={(e) => setCircle2({...circle2, label: e.target.value})}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedVennDiagram;