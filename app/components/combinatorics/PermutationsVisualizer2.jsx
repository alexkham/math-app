// // // 'use client'
// // // import React, { useState, useEffect, useCallback } from 'react';
// // // import styles from './PermutationsVisualizer2.module.css';

// // // const PermutationVisualizer2 = () => {
// // //   const [n, setN] = useState(5);
// // //   const [inputValue, setInputValue] = useState('5');
// // //   const [colors, setColors] = useState([]);
// // //   const [step, setStep] = useState(0);
// // //   const [partialPermutations, setPartialPermutations] = useState([]);
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [useColors, setUseColors] = useState(true);

// // //   const generateDistinctColors = (count) => {
// // //     const hueStep = 360 / count;
// // //     return Array.from({ length: count }, (_, i) => {
// // //       const hue = i * hueStep;
// // //       const saturation = 70 + Math.random() * 30;
// // //       const lightness = 40 + Math.random() * 20;
// // //       return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// // //     });
// // //   };

// // //   const getDilutedColor = (color) => {
// // //     const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
// // //     if (match) {
// // //       const [, h, s, l] = match;
// // //       return `hsl(${h}, ${Math.min(parseInt(s), 30)}%, 95%)`;
// // //     }
// // //     return color;
// // //   };

// // //   const factorial = (num) => {
// // //     let result = 1;
// // //     for (let i = 2; i <= num; i++) {
// // //       result *= i;
// // //     }
// // //     return result;
// // //   };

// // //   const generateNextStep = useCallback(() => {
// // //     setStep(prevStep => {
// // //       if (prevStep < n) {
// // //         setPartialPermutations(prevPermutations => {
// // //           const newPermutations = [];
// // //           prevPermutations.forEach(perm => {
// // //             for (let i = 0; i < n; i++) {
// // //               if (!perm.includes(i)) {
// // //                 newPermutations.push([...perm, i]);
// // //               }
// // //             }
// // //           });
// // //           return newPermutations.sort((a, b) => {
// // //             for (let i = 0; i < a.length; i++) {
// // //               if (a[i] !== b[i]) return a[i] - b[i];
// // //             }
// // //             return 0;
// // //           });
// // //         });
// // //         return prevStep + 1;
// // //       }
// // //       return prevStep;
// // //     });
// // //   }, [n]);

// // //   const generatePreviousStep = useCallback(() => {
// // //     setStep(prevStep => {
// // //       if (prevStep > 0) {
// // //         setPartialPermutations(prevPermutations => {
// // //           return prevPermutations
// // //             .map(perm => perm.slice(0, -1))
// // //             .filter((perm, index, self) => 
// // //               index === self.findIndex(t => t.toString() === perm.toString())
// // //             )
// // //             .sort((a, b) => {
// // //               for (let i = 0; i < a.length; i++) {
// // //                 if (a[i] !== b[i]) return a[i] - b[i];
// // //               }
// // //               return 0;
// // //             });
// // //         });
// // //         return prevStep - 1;
// // //       }
// // //       return prevStep;
// // //     });
// // //   }, []);

// // //   useEffect(() => {
// // //     setColors(generateDistinctColors(n));
// // //     setStep(0);
// // //     setPartialPermutations([[]]);
// // //     setIsPlaying(false);
// // //   }, [n]);

// // //   useEffect(() => {
// // //     let timer;
// // //     if (isPlaying && step < n) {
// // //       timer = setTimeout(generateNextStep, 2000);
// // //     }
// // //     return () => clearTimeout(timer);
// // //   }, [isPlaying, step, n, generateNextStep]);

// // //   const handleInputChange = (e) => {
// // //     const value = e.target.value;
// // //     setInputValue(value);
// // //     const parsedValue = parseInt(value, 10);
// // //     if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 7) {
// // //       setN(parsedValue);
// // //     }
// // //   };

// // //   const renderBalls = () => (
// // //     <div className={styles.ballsContainer}>
// // //       {colors.map((color, index) => (
// // //         <div
// // //           key={index}
// // //           className={styles.ball}
// // //           style={{
// // //             backgroundColor: useColors ? color : '#f0f0f0',
// // //             color: useColors ? 'transparent' : 'black',
// // //             border: useColors ? 'none' : '1px solid black'
// // //           }}
// // //         >
// // //           {useColors ? '' : String.fromCharCode(65 + index)}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );

// // //   const renderPartialPermutations = () => {
// // //     const groupedPermutations = partialPermutations.reduce((acc, perm) => {
// // //       const key = perm[0] !== undefined ? perm[0] : 'empty';
// // //       if (!acc[key]) acc[key] = [];
// // //       acc[key].push(perm);
// // //       return acc;
// // //     }, {});

// // //     return (
// // //       <div className={styles.permutationsContainer}>
// // //         {Object.entries(groupedPermutations).map(([key, perms]) => (
// // //           <div key={key} className={styles.rowContainer} style={{
// // //             backgroundColor: key !== 'empty' ? getDilutedColor(colors[parseInt(key)]) : '#f9f9f9'
// // //           }}>
// // //             <div className={styles.permutationRow}>
// // //               {perms.map((perm, index) => (
// // //                 <div key={index} className={styles.permutationGroup}>
// // //                   {perm.map((item, itemIndex) => (
// // //                     <div
// // //                       key={itemIndex}
// // //                       className={styles.ball}
// // //                       style={{
// // //                         backgroundColor: useColors ? colors[item] : '#f0f0f0',
// // //                         color: useColors ? 'transparent' : 'black',
// // //                         border: useColors ? 'none' : '1px solid black'
// // //                       }}
// // //                     >
// // //                       {useColors ? '' : String.fromCharCode(65 + item)}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   const renderControls = () => (
// // //     <div className={styles.controlsContainer}>
// // //       <button className={styles.button} onClick={() => { setStep(0); setPartialPermutations([[]]) }}>Reset</button>
// // //       <button className={styles.button} onClick={generatePreviousStep} disabled={step === 0}>Back</button>
// // //       <button className={styles.button} onClick={() => setIsPlaying(!isPlaying)}>
// // //         {isPlaying ? 'Pause' : 'Play'}
// // //       </button>
// // //       <button className={styles.button} onClick={generateNextStep} disabled={step === n}>Forward</button>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className={styles.card}>
// // //       <div className={styles.cardHeader}>
// // //         <h2 className={styles.cardTitle}>Permutations Visualizer</h2>
// // //         <p className={styles.instructions}>
// // //           Watch as we build permutations step by step.<br />
// // //           Each step adds one more item to the permutations.
// // //         </p>
// // //       </div>
// // //       <div className={styles.cardContent}>
// // //         <div className={styles.inputGroup}>
// // //           <label htmlFor="n-input">Number of items (n):</label>
// // //           <input
// // //             id="n-input"
// // //             type="number"
// // //             min="1"
// // //             max="7"
// // //             value={inputValue}
// // //             onChange={handleInputChange}
// // //             className={styles.input}
// // //           />
// // //         </div>
// // //         <div className={styles.switchContainer}>
// // //           <label className={styles.switch}>
// // //             <input
// // //               type="checkbox"
// // //               checked={useColors}
// // //               onChange={() => setUseColors(!useColors)}
// // //               className={styles.switchInput}
// // //             />
// // //             <span className={styles.switchSlider}>
// // //               <span className={styles.switchSliderBefore}></span>
// // //             </span>
// // //           </label>
// // //           <span>{useColors ? "Use Letters" : "Use Colors"}</span>
// // //         </div>
// // //         {renderBalls()}
// // //         <div className={styles.infoContainer}>
// // //           <p>Step: {step} of {n}</p>
// // //           <p>Number of partial permutations: {partialPermutations.length}</p>
// // //           <p>Total number of permutations: {factorial(n)}</p>
// // //           {renderControls()}
// // //         </div>
// // //         {renderPartialPermutations()}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PermutationVisualizer2;
// // 'use client'
// // import React, { useState, useEffect, useCallback } from 'react';
// // import styles from './PermutationsVisualizer2.module.css';

// // const PermutationVisualizer2 = () => {
// //   const [n, setN] = useState(5);
// //   const [inputValue, setInputValue] = useState('5');
// //   const [colors, setColors] = useState([]);
// //   const [step, setStep] = useState(0);
// //   const [partialPermutations, setPartialPermutations] = useState([]);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [useColors, setUseColors] = useState(true);
// //   const [warning, setWarning] = useState('');

// //   const MAX_SAFE_N = 6;
// //   const MAX_SAFE_PERMUTATIONS = 720; // 6!

// //   const generateDistinctColors = (count) => {
// //     const hueStep = 360 / count;
// //     return Array.from({ length: count }, (_, i) => {
// //       const hue = i * hueStep;
// //       const saturation = 70 + Math.random() * 30;
// //       const lightness = 40 + Math.random() * 20;
// //       return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// //     });
// //   };

// //   const getDilutedColor = (color) => {
// //     const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
// //     if (match) {
// //       const [, h, s] = match;
// //       return `hsl(${h}, ${Math.min(parseInt(s), 30)}%, 95%)`;
// //     }
// //     return color;
// //   };

// //   const factorial = (num) => {
// //     let result = 1;
// //     for (let i = 2; i <= num; i++) {
// //       result *= i;
// //     }
// //     return result;
// //   };

// //   const generateNextStep = useCallback(() => {
// //     setStep(prevStep => {
// //       if (prevStep < n) {
// //         setPartialPermutations(prevPermutations => {
// //           const newPermutations = [];
// //           prevPermutations.forEach(perm => {
// //             for (let i = 0; i < n; i++) {
// //               if (!perm.includes(i)) {
// //                 newPermutations.push([...perm, i]);
// //               }
// //             }
// //           });
// //           return newPermutations.sort((a, b) => {
// //             for (let i = 0; i < a.length; i++) {
// //               if (a[i] !== b[i]) return a[i] - b[i];
// //             }
// //             return 0;
// //           });
// //         });
// //         return prevStep + 1;
// //       }
// //       return prevStep;
// //     });
// //   }, [n]);

// //   const generatePreviousStep = useCallback(() => {
// //     setStep(prevStep => {
// //       if (prevStep > 0) {
// //         setPartialPermutations(prevPermutations => {
// //           return prevPermutations
// //             .map(perm => perm.slice(0, -1))
// //             .filter((perm, index, self) => 
// //               index === self.findIndex(t => t.toString() === perm.toString())
// //             )
// //             .sort((a, b) => {
// //               for (let i = 0; i < a.length; i++) {
// //                 if (a[i] !== b[i]) return a[i] - b[i];
// //               }
// //               return 0;
// //             });
// //         });
// //         return prevStep - 1;
// //       }
// //       return prevStep;
// //     });
// //   }, []);

// //   useEffect(() => {
// //     setColors(generateDistinctColors(n));
// //     setStep(0);
// //     setPartialPermutations([[]]);
// //     setIsPlaying(false);

// //     if (n > MAX_SAFE_N) {
// //       setWarning(`Generating permutations for n > ${MAX_SAFE_N} may affect performance. Please use a smaller number.`);
// //       setPartialPermutations([]);
// //     } else {
// //       const totalPermutations = factorial(n);
// //       if (totalPermutations > MAX_SAFE_PERMUTATIONS) {
// //         setWarning(`Generating ${totalPermutations} permutations may affect performance. Consider using a smaller number.`);
// //         setPartialPermutations([]);
// //       } else {
// //         setWarning('');
// //       }
// //     }
// //   }, [n]);

// //   useEffect(() => {
// //     let timer;
// //     if (isPlaying && step < n) {
// //       timer = setTimeout(generateNextStep, 2000);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [isPlaying, step, n, generateNextStep]);

// //   const handleInputChange = (e) => {
// //     const value = e.target.value;
// //     setInputValue(value);
// //     const parsedValue = parseInt(value, 10);
// //     if (!isNaN(parsedValue) && parsedValue >= 1) {
// //       setN(parsedValue);
// //     }
// //   };

// //   const renderBalls = () => (
// //     <div className={styles.ballsContainer}>
// //       {colors.map((color, index) => (
// //         <div
// //           key={index}
// //           className={styles.ball}
// //           style={{
// //             backgroundColor: useColors ? color : '#f0f0f0',
// //             color: useColors ? 'transparent' : 'black',
// //             border: useColors ? 'none' : '1px solid black'
// //           }}
// //         >
// //           {useColors ? '' : String.fromCharCode(65 + index)}
// //         </div>
// //       ))}
// //     </div>
// //   );

// //   const renderPartialPermutations = () => {
// //     const groupedPermutations = partialPermutations.reduce((acc, perm) => {
// //       const key = perm[0] !== undefined ? perm[0] : 'empty';
// //       if (!acc[key]) acc[key] = [];
// //       acc[key].push(perm);
// //       return acc;
// //     }, {});

// //     return (
// //       <div className={styles.permutationsContainer}>
// //         {Object.entries(groupedPermutations).map(([key, perms]) => (
// //           <div key={key} className={styles.rowContainer} style={{
// //             backgroundColor: key !== 'empty' ? getDilutedColor(colors[parseInt(key)]) : '#f9f9f9'
// //           }}>
// //             <div className={styles.permutationRow}>
// //               {perms.map((perm, index) => (
// //                 <div key={index} className={styles.permutationGroup}>
// //                   {perm.map((item, itemIndex) => (
// //                     <div
// //                       key={itemIndex}
// //                       className={styles.ball}
// //                       style={{
// //                         backgroundColor: useColors ? colors[item] : '#f0f0f0',
// //                         color: useColors ? 'transparent' : 'black',
// //                         border: useColors ? 'none' : '1px solid black'
// //                       }}
// //                     >
// //                       {useColors ? '' : String.fromCharCode(65 + item)}
// //                     </div>
// //                   ))}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   const renderControls = () => (
// //     <div className={styles.controlsContainer}>
// //       <button className={styles.button} onClick={() => { setStep(0); setPartialPermutations([[]]) }}>Reset</button>
// //       <button className={styles.button} onClick={generatePreviousStep} disabled={step === 0}>Back</button>
// //       <button className={styles.button} onClick={() => setIsPlaying(!isPlaying)}>
// //         {isPlaying ? 'Pause' : 'Play'}
// //       </button>
// //       <button className={styles.button} onClick={generateNextStep} disabled={step === n}>Forward</button>
// //     </div>
// //   );

// //   return (
// //     <div className={styles.card}>
// //       <div className={styles.cardHeader}>
// //         <h2 className={styles.cardTitle}>Permutations Visualizer</h2>
// //         <p className={styles.instructions}>
// //           Watch as we build permutations step by step.<br />
// //           Each step adds one more item to the permutations.
// //         </p>
// //       </div>
// //       <div className={styles.cardContent}>
// //         <div className={styles.inputGroup}>
// //           <label htmlFor="n-input">Number of items (n):</label>
// //           <input
// //             id="n-input"
// //             type="number"
// //             min="1"
// //             value={inputValue}
// //             onChange={handleInputChange}
// //             className={styles.input}
// //           />
// //         </div>
// //         {warning && (
// //           <div className={styles.alert}>
// //             {warning}
// //           </div>
// //         )}
// //         <div className={styles.switchContainer}>
// //           <label className={styles.switch}>
// //             <input
// //               type="checkbox"
// //               checked={useColors}
// //               onChange={() => setUseColors(!useColors)}
// //               className={styles.switchInput}
// //             />
// //             <span className={styles.switchSlider}>
// //               <span className={styles.switchSliderBefore}></span>
// //             </span>
// //           </label>
// //           <span>{useColors ? "Use Letters" : "Use Colors"}</span>
// //         </div>
// //         {renderBalls()}
// //         <div className={styles.infoContainer}>
// //           <p>Step: {step} of {n}</p>
// //           <p>Number of partial permutations: {partialPermutations.length}</p>
// //           <p>Total number of permutations: {factorial(n)}</p>
// //           {renderControls()}
// //         </div>
// //         {renderPartialPermutations()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PermutationVisualizer2;
// 'use client'
// import React, { useState, useEffect, useCallback } from 'react';
// import styles from './PermutationsVisualizer2.module.css';

// const PermutationVisualizer2 = () => {
//   const [n, setN] = useState(0);
//   const [inputValue, setInputValue] = useState('');
//   const [colors, setColors] = useState([]);
//   const [step, setStep] = useState(0);
//   const [partialPermutations, setPartialPermutations] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [useColors, setUseColors] = useState(true);
//   const [warning, setWarning] = useState('');

//   const MAX_SAFE_N = 6;
//   const MAX_SAFE_PERMUTATIONS = 720; // 6!

//   const generateDistinctColors = (count) => {
//     const hueStep = 360 / count;
//     return Array.from({ length: count }, (_, i) => {
//       const hue = i * hueStep;
//       const saturation = 70 + Math.random() * 30;
//       const lightness = 40 + Math.random() * 20;
//       return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//     });
//   };

// //   const getDilutedColor = (color) => {
// //     const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
// //     if (match) {
// //       const [, h, s] = match;
// //       return `hsl(${h}, ${Math.min(parseInt(s), 30)}%, 95%)`;
// //     }
// //     return color;
// //   };

// // const getDilutedColor = (color) => {
// //     const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
// //     if (match) {
// //       const [, h, s] = match;
// //       return `hsla(${h}, ${Math.min(parseInt(s), 30)}%, 95%, 0.3)`;  // Added alpha for transparency
// //     }
// //     return `rgba(249, 249, 249, 0.3)`;  // Fallback to very light gray with transparency
// //   };

// const getDilutedColor = (color) => {
//     const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
//     if (match) {
//       const [, h, s, l] = match;
//       const newSaturation = Math.min(parseInt(s) * 0.3, 30); // Reduce saturation
//       const newLightness = Math.min(parseInt(l) + 30, 95);   // Increase lightness
//       return `hsla(${h}, ${newSaturation}%, ${newLightness}%, 0.3)`;
//     }
//     return `rgba(249, 249, 249, 0.3)`;  // Fallback to very light gray with transparency
//   };

//   const factorial = (num) => {
//     if (num === 0 || num === 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   };

//   const generateNextStep = useCallback(() => {
//     setStep(prevStep => {
//       if (prevStep < n) {
//         setPartialPermutations(prevPermutations => {
//           const newPermutations = [];
//           prevPermutations.forEach(perm => {
//             for (let i = 0; i < n; i++) {
//               if (!perm.includes(i)) {
//                 newPermutations.push([...perm, i]);
//               }
//             }
//           });
//           return newPermutations.sort((a, b) => {
//             for (let i = 0; i < a.length; i++) {
//               if (a[i] !== b[i]) return a[i] - b[i];
//             }
//             return 0;
//           });
//         });
//         return prevStep + 1;
//       }
//       return prevStep;
//     });
//   }, [n]);

//   const generatePreviousStep = useCallback(() => {
//     setStep(prevStep => {
//       if (prevStep > 0) {
//         setPartialPermutations(prevPermutations => {
//           return prevPermutations
//             .map(perm => perm.slice(0, -1))
//             .filter((perm, index, self) => 
//               index === self.findIndex(t => t.toString() === perm.toString())
//             )
//             .sort((a, b) => {
//               for (let i = 0; i < a.length; i++) {
//                 if (a[i] !== b[i]) return a[i] - b[i];
//               }
//               return 0;
//             });
//         });
//         return prevStep - 1;
//       }
//       return prevStep;
//     });
//   }, []);

//   const resetVisualization = () => {
//     setN(0);
//     setInputValue('');
//     setColors([]);
//     setStep(0);
//     setPartialPermutations([]);
//     setIsPlaying(false);
//     setWarning('');
//   };

//   useEffect(() => {
//     resetVisualization();
//   }, []);

//   useEffect(() => {
//     if (n === 0) {
//       resetVisualization();
//       return;
//     }

//     setColors(generateDistinctColors(n));
//     setStep(0);
//     setPartialPermutations([[]]);
//     setIsPlaying(false);

//     if (n > MAX_SAFE_N) {
//       setWarning(`Generating permutations for n > ${MAX_SAFE_N} may affect performance. Please use a smaller number.`);
//       setPartialPermutations([]);
//     } else {
//       const totalPermutations = factorial(n);
//       if (totalPermutations > MAX_SAFE_PERMUTATIONS) {
//         setWarning(`Generating ${totalPermutations} permutations may affect performance. Consider using a smaller number.`);
//         setPartialPermutations([]);
//       } else {
//         setWarning('');
//       }
//     }
//   }, [n]);

//   useEffect(() => {
//     let timer;
//     if (isPlaying && step < n) {
//       timer = setTimeout(generateNextStep, 2000);
//     }
//     return () => clearTimeout(timer);
//   }, [isPlaying, step, n, generateNextStep]);

// //   const handleInputChange = (e) => {
// //     const value = e.target.value;
// //     setInputValue(value);
// //     const parsedValue = parseInt(value, 10);
// //     if (!isNaN(parsedValue) && parsedValue >= 0) {
// //       setN(parsedValue);
// //     }
// //   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     if (value === '') {
//       setN(0);
//     } else {
//       const parsedValue = parseInt(value, 10);
//       if (!isNaN(parsedValue) && parsedValue >= 0) {
//         setN(parsedValue);
//       }
//     }
//   };

//   const renderBalls = () => (
//     <div className={styles.ballsContainer}>
//       {colors.map((color, index) => (
//         <div
//           key={index}
//           className={styles.ball}
//           style={{
//             backgroundColor: useColors ? color : '#f0f0f0',
//             color: useColors ? 'transparent' : 'black',
//             border: useColors ? 'none' : '1px solid black'
//           }}
//         >
//           {useColors ? '' : String.fromCharCode(65 + index)}
//         </div>
//       ))}
//     </div>
//   );

//   const renderPartialPermutations = () => {
//     const groupedPermutations = partialPermutations.reduce((acc, perm) => {
//       const key = perm[0] !== undefined ? perm[0] : 'empty';
//       if (!acc[key]) acc[key] = [];
//       acc[key].push(perm);
//       return acc;
//     }, {});

//     return (
//       <div className={styles.permutationsContainer}>
//         {Object.entries(groupedPermutations).map(([key, perms]) => (
//           <div key={key} className={styles.rowContainer} style={{
//             backgroundColor: key !== 'empty' ? getDilutedColor(colors[parseInt(key)]) : '#f9f9f9'
//           }}>
//             <div className={styles.permutationRow}>
//               {perms.map((perm, index) => (
//                 <div key={index} className={styles.permutationGroup}>
//                   {perm.map((item, itemIndex) => (
//                     <div
//                       key={itemIndex}
//                       className={styles.ball}
//                       style={{
//                         backgroundColor: useColors ? colors[item] : '#f0f0f0',
//                         color: useColors ? 'transparent' : 'black',
//                         border: useColors ? 'none' : '1px solid black'
//                       }}
//                     >
//                       {useColors ? '' : String.fromCharCode(65 + item)}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderControls = () => (
//     <div className={styles.controlsContainer}>
//       <button className={styles.button} onClick={resetVisualization}>Reset</button>
//       <button className={styles.button} onClick={generatePreviousStep} disabled={step === 0}>Back</button>
//       <button className={styles.button} onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <button className={styles.button} onClick={generateNextStep} disabled={step === n}>Forward</button>
//     </div>
//   );

//   return (
//     <div className={styles.card}>
//       <div className={styles.cardHeader}>
//         <h2 className={styles.cardTitle}>Permutations Visualizer</h2>
//         <p className={styles.instructions}>
//           Watch as we build permutations step by step.<br />
//           Each step adds one more item to the permutations.
//         </p>
//       </div>
//       <div className={styles.cardContent}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="n-input">Number of items (n):</label>
//           <input
//             id="n-input"
//             type="number"
//             min="0"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={styles.input}
//           />
//         </div>
//         {warning && (
//           <div className={styles.alert}>
//             {warning}
//           </div>
//         )}
//         {n > 0 && (
//           <>
//             <div className={styles.switchContainer}>
//               <label className={styles.switch}>
//                 <input
//                   type="checkbox"
//                   checked={useColors}
//                   onChange={() => setUseColors(!useColors)}
//                   className={styles.switchInput}
//                 />
//                 <span className={styles.switchSlider}>
//                   <span className={styles.switchSliderBefore}></span>
//                 </span>
//               </label>
//               <span>{useColors ? "Use Letters" : "Use Colors"}</span>
//             </div>
//             {renderBalls()}
//             <div className={styles.infoContainer}>
//               <p>Step: {step} of {n}</p>
//               <p>Number of partial permutations: {partialPermutations.length}</p>
//               <p>Total number of permutations: {factorial(n)}</p>
//               {renderControls()}
//             </div>
//             {renderPartialPermutations()}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PermutationVisualizer2;
'use client'
import React, { useState, useEffect, useCallback } from 'react';
import styles from './PermutationsVisualizer2.module.css';

const PermutationVisualizer2 = () => {
  const [n, setN] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [colors, setColors] = useState([]);
  const [step, setStep] = useState(0);
  const [partialPermutations, setPartialPermutations] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [useColors, setUseColors] = useState(true);
  const [warning, setWarning] = useState('');

  const MAX_SAFE_N = 6;
  const MAX_SAFE_PERMUTATIONS = 720; // 6!

  const generateDistinctColors = (count) => {
    const hueStep = 360 / count;
    return Array.from({ length: count }, (_, i) => {
      const hue = i * hueStep;
      const saturation = 70 + Math.random() * 30;
      const lightness = 40 + Math.random() * 20;
      return {
        color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        hue,
        saturation,
        lightness
      };
    });
  };

  const getDilutedColor = (colorObj) => {
    const { hue, saturation, lightness } = colorObj;
    const newSaturation = Math.min(saturation * 0.7, 45);
    const newLightness = Math.min(lightness + 30, 95);
    return `hsla(${hue}, ${newSaturation}%, ${newLightness}%, 0.3)`;
  };

  const renderExplanationTable = () => {
    return (
      <table className={styles.explanationTable}>
        <thead>
          <tr>
            <th>Step</th>
            <th>Action</th>
            <th>Possibilities</th>
            <th>Total Permutations</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({length: step}, (_, i) => {
            const totalForStep = Array.from({length: i + 1}, (_, j) => n - j).reduce((acc, val) => acc * val, 1);
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{`Choosing ${i === 0 ? 'first' : i === 1 ? 'second' : i === 2 ? 'third' : `${i+1}th`} ${useColors?'color': 'letter'}`}</td>
                <td>{n - i}</td>
                <td>
                  {totalForStep}
                  <span className={styles.multiplication}>
                    {` (${Array.from({length: i + 1}, (_, j) => n - j).join(' × ')})`}
                  </span>
                </td>
                <td style={{minWidth:'200px'}}>
                  {i === 0 
                    ? `As there is ${n} options to choose first ${useColors ? 'color' : 'letter'} - ${n} groups of 1 ${useColors ? 'color' : 'letter'} created`
                    : `For each group created in previous step there is ${n - i} options left to choose next ${useColors ? 'color' : 'letter'} so total number of groups created here is ${totalForStep} (${Array.from({length: i + 1}, (_, j) => n - j).join(' × ')})`
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };


  const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const generateNextStep = useCallback(() => {
    setStep(prevStep => {
      if (prevStep < n) {
        setPartialPermutations(prevPermutations => {
          const newPermutations = [];
          prevPermutations.forEach(perm => {
            for (let i = 0; i < n; i++) {
              if (!perm.includes(i)) {
                newPermutations.push([...perm, i]);
              }
            }
          });
          return newPermutations.sort((a, b) => {
            for (let i = 0; i < a.length; i++) {
              if (a[i] !== b[i]) return a[i] - b[i];
            }
            return 0;
          });
        });
        return prevStep + 1;
      }
      return prevStep;
    });
  }, [n]);

  const generatePreviousStep = useCallback(() => {
    setStep(prevStep => {
      if (prevStep > 0) {
        setPartialPermutations(prevPermutations => {
          return prevPermutations
            .map(perm => perm.slice(0, -1))
            .filter((perm, index, self) => 
              index === self.findIndex(t => t.toString() === perm.toString())
            )
            .sort((a, b) => {
              for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return a[i] - b[i];
              }
              return 0;
            });
        });
        return prevStep - 1;
      }
      return prevStep;
    });
  }, []);

  const resetVisualization = () => {
    setN(0);
    setInputValue('');
    setColors([]);
    setStep(0);
    setPartialPermutations([]);
    setIsPlaying(false);
    setWarning('');
  };

  useEffect(() => {
    resetVisualization();
  }, []);

  useEffect(() => {
    if (n === 0) {
      resetVisualization();
      return;
    }

    setColors(generateDistinctColors(n));
    setStep(0);
    setPartialPermutations([[]]);
    setIsPlaying(false);

    if (n > MAX_SAFE_N) {
      setWarning(`Generating permutations for n > ${MAX_SAFE_N} may affect performance. Please use a smaller number.`);
      setPartialPermutations([]);
    } else {
      const totalPermutations = factorial(n);
      if (totalPermutations > MAX_SAFE_PERMUTATIONS) {
        setWarning(`Generating ${totalPermutations} permutations may affect performance. Consider using a smaller number.`);
        setPartialPermutations([]);
      } else {
        setWarning('');
      }
    }
  }, [n]);

  useEffect(() => {
    let timer;
    if (isPlaying && step < n) {
      timer = setTimeout(generateNextStep, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, n, generateNextStep]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === '') {
      setN(0);
    } else {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue) && parsedValue >= 0) {
        setN(parsedValue);
      }
    }
  };

  const renderBalls = () => (
    <div className={styles.ballsContainer}>
      {colors.map(({color}, index) => (
        <div
          key={index}
          className={styles.ball}
          style={{
            backgroundColor: useColors ? color : '#f0f0f0',
            color: useColors ? 'transparent' : 'black',
            border: useColors ? 'none' : '1px solid black'
          }}
        >
          {useColors ? '' : String.fromCharCode(65 + index)}
        </div>
      ))}
    </div>
  );

  const renderPartialPermutations = () => {
    const groupedPermutations = partialPermutations.reduce((acc, perm) => {
      const key = perm[0] !== undefined ? perm[0] : 'empty';
      if (!acc[key]) acc[key] = [];
      acc[key].push(perm);
      return acc;
    }, {});

    return (
      <div className={styles.permutationsContainer}>
        {Object.entries(groupedPermutations).map(([key, perms]) => (
          <div 
            key={key} 
            className={styles.rowContainer} 
            style={{
              backgroundColor: key !== 'empty' ? getDilutedColor(colors[parseInt(key)]) : 'rgba(249, 249, 249, 0.3)'
            }}
          >
            <div className={styles.permutationRow}>
              {perms.map((perm, index) => (
                <div key={index} className={styles.permutationGroup}>
                  {perm.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={styles.ball}
                      style={{
                        backgroundColor: useColors ? colors[item].color : '#f0f0f0',
                        color: useColors ? 'transparent' : 'black',
                        border: useColors ? 'none' : '1px solid black'
                      }}
                    >
                      {useColors ? '' : String.fromCharCode(65 + item)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderControls = () => (
    <div className={styles.controlsContainer}>
      <button className={styles.button} onClick={resetVisualization}>Reset</button>
      <button className={styles.button} onClick={generatePreviousStep} disabled={step === 0}>Back</button>
      <button className={styles.button} onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button className={styles.button} onClick={generateNextStep} disabled={step === n}>Forward</button>
    </div>
  );

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {/* <h2 className={styles.cardTitle}>Permutations Visualizer</h2> */}
        <p className={styles.instructions}>
          Watch as we build permutations step by step.<br />
          Each step adds one more item to the permutations.<br/>
          Enter number of items to start.
        </p>
      </div>
      <div className={styles.controlsArea}>
  <div className={styles.inputGroup}>
    <label htmlFor="n-input">Number of items (n):</label>
    <input
      id="n-input"
      type="number"
      min="0"
      value={inputValue}
      onChange={handleInputChange}
      className={styles.input}
    />
  </div>
  {warning && (
    <div className={styles.alert}>
      {warning}
    </div>
  )}
  {n > 0 && (
    <div className={styles.controlsContent}>
      <div className={styles.leftControls}>
        <div className={styles.switchContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={useColors}
              onChange={() => setUseColors(!useColors)}
              className={styles.switchInput}
            />
            <span className={styles.switchSlider}>
              <span className={styles.switchSliderBefore}></span>
            </span>
          </label>
          <span>{useColors ? "Use Letters" : "Use Colors"}</span>
        </div>
        {renderBalls()}
      </div>
      <div className={styles.rightControls}>
        <div className={styles.infoContainer}>
          <p>Step: {step} of {n}</p>
          <p>Number of partial permutations: {partialPermutations.length}</p>
          <p>Total number of permutations: {factorial(n)}</p>
        </div>
        {renderControls()}
      </div>
    </div>
  )}
</div>

      {n > 0 && (
        <div className={styles.visualizationWrapper}>
          <div className={styles.permutationsArea}>
            {renderPartialPermutations()}
          </div>
          <div className={styles.explanationArea}>
            {step > 0 && renderExplanationTable()}
            {/* Future place for additional explanations */}
          </div>
        </div>
      )}
    </div>
  );



};

export default PermutationVisualizer2;