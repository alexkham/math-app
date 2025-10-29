
// 'use client'
// import React, { useState } from 'react';
// import Decimal from 'decimal.js';
// import styles from './Arithmetics.module.css';
// import ExplanationDetails from '@/app/components/ExplanationDetails';

// function RootCalculator({ explanations, detailInstructions }) {
//   const [value, setValue] = useState('');
//   const [rootType, setRootType] = useState('square');
//   const [nthValue, setNthValue] = useState('');
//   const [result, setResult] = useState('');
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   const handleChangeValue = (event) => {
//     setValue(event.target.value);
//   };

//   const handleChangeNthValue = (event) => {
//     setNthValue(event.target.value);
//   };

//   const toggleRootType = (event) => {
//     setRootType(event.target.value);
//     if (event.target.value !== 'nth') {
//       setNthValue('');
//     }
//   };

//   const calculateRoot = () => {
//     const num = parseFloat(value);
//     if (isNaN(num) || num < 0) {
//       setResult('Error: Invalid input');
//       return;
//     }

//     try {
//       let rootResult;
//       const decNum = new Decimal(num);

//       switch (rootType) {
//         case 'square':
//           rootResult = decNum.sqrt();
//           break;
//         case 'cube':
//           rootResult = decNum.pow(new Decimal(1).div(3));
//           break;
//         case 'nth':
//           const n = parseFloat(nthValue);
//           if (isNaN(n) || n <= 0) {
//             setResult('Error: Invalid nth root');
//             return;
//           }
//           rootResult = decNum.pow(new Decimal(1).div(n));
//           break;
//         default:
//           setResult('Error: Invalid root type');
//           return;
//       }

//       setResult(rootResult.toFixed(4));
//     } catch (error) {
//       setResult('Error: Calculation failed');
//     }
//   };

//   // Rest of the component remains the same
//   const resetAll = () => {
//     setValue('');
//     setRootType('square');
//     setNthValue('');
//     setResult('');
//   };

//   const showTooltip = (tooltipId) => {
//     setActiveTooltip(tooltipId);
//   };

//   const hideTooltip = () => {
//     setActiveTooltip(null);
//   };

//   return (
//     <div className={styles.pageLayout}>
//       <ExplanationDetails 
//         title="How to use Root Calculator" 
//         instructions={detailInstructions}
//       />
//       <div className={styles.container}>
//         <div className={styles.baseSelection}>
//           <label>Choose Root Type</label>
//           <div className={styles.radio_container}>
//             <input 
//               type="radio" 
//               checked={rootType === 'square'} 
//               value="square" 
//               onChange={toggleRootType} 
//               id="square"
//             />
//             <label htmlFor="square">Square Root</label>
//             <input 
//               type="radio" 
//               checked={rootType === 'cube'} 
//               value="cube" 
//               onChange={toggleRootType} 
//               id="cube"
//             />
//             <label htmlFor="cube">Cube Root</label>
//             <input 
//               type="radio" 
//               checked={rootType === 'nth'} 
//               value="nth" 
//               onChange={toggleRootType} 
//               id="nth"
//             />
//             <label htmlFor="nth">Nth Root</label>
//           </div>
//         </div>

//         <div className={styles.calculatorBodyWrapper}>
//           <div className={styles.calculatorBody}>
//             <table className={styles.calcTable}>
//               <tbody>
//                 <tr>
//                   <td className={styles.nthValueCell}>
//                     {rootType === 'nth' && (
//                       <div className={styles.inputWrapper}>
//                         <input
//                           className={styles.nthInput}
//                           type="text"
//                           value={nthValue}
//                           onChange={handleChangeNthValue}
//                           placeholder="n"
//                         />
//                         <span 
//                           className={styles.tooltipTrigger}
//                           onMouseEnter={() => showTooltip('nth')}
//                           onMouseLeave={hideTooltip}
//                         >
//                           ?
//                           {activeTooltip === 'nth' && (
//                             <span className={styles.tooltip}>
//                               Enter the value of n for the nth root
//                             </span>
//                           )}
//                         </span>
//                       </div>
//                     )}
//                   </td>
//                   <td rowSpan="2" className={styles.rootSymbolCell}>
//                     <span className={styles.rootSymbol}>
//                       {rootType === 'cube' ? '∛' : '√'}
//                     </span>
//                   </td>
//                   <td rowSpan="2">
//                     <div className={styles.inputWrapper}>
//                       <input  
//                         className={styles.valueInput} 
//                         type="text" 
//                         value={value} 
//                         onChange={handleChangeValue} 
//                         placeholder="Enter number"
//                       />
//                       <span 
//                         className={styles.tooltipTrigger} 
//                         onMouseEnter={() => showTooltip('value')}
//                         onMouseLeave={hideTooltip}
//                       >
//                         ?
//                         {activeTooltip === 'value' && (
//                           <span className={styles.tooltip}>
//                             Enter the number to calculate the root of
//                           </span>
//                         )}
//                       </span>
//                     </div>
//                   </td>
//                   <td rowSpan="2" className={styles.resultCell}>
//                     = {result}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className={styles.nthValueCell}></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className={styles.buttonContainer}>
//           <button 
//             onClick={calculateRoot}
//             className={styles.calculateButton}
//           >
//             Calculate
//           </button>
//           <button 
//             onClick={resetAll}
//             className={styles.resetButton}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
      
//       {explanations && explanations[rootType] && (
//         <div className={styles.explanationContainer}>
//           <div className={styles.explanationContent}>
//             <p className={styles.explanationText}>
//               {explanations[rootType].text}
//             </p>
//             {explanations[rootType].links && (
//               <div className={styles.explanationLinks}>
//                 <p className={styles.linksTitle}>Learn more:</p>
//                 <ul className={styles.linksList}>
//                   {explanations[rootType].links.map((link, index) => (
//                     <li key={index}>
//                       <a href={link.link} rel="noopener noreferrer" className={styles.explanationLink}>
//                       {/* target="_blank" use for external links */}
//                         {link.title}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RootCalculator;


// import React, { useState } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// function RootCalculator({ explanations, detailInstructions }) {
//   const [value, setValue] = useState('');
//   const [rootType, setRootType] = useState('square');
//   const [nthValue, setNthValue] = useState('');
//   const [result, setResult] = useState('');
//   const [activeTooltip, setActiveTooltip] = useState(null);

//   const handleChangeValue = (event) => {
//     setValue(event.target.value);
//   };

//   const handleChangeNthValue = (event) => {
//     setNthValue(event.target.value);
//   };

//   const toggleRootType = (event) => {
//     setRootType(event.target.value);
//     if (event.target.value !== 'nth') {
//       setNthValue('');
//     }
//   };

//   const calculateRoot = () => {
//     const num = parseFloat(value);
//     if (isNaN(num) || num < 0) {
//       setResult('Error: Invalid input');
//       return;
//     }

//     try {
//       let rootResult;

//       switch (rootType) {
//         case 'square':
//           rootResult = Math.sqrt(num);
//           break;
//         case 'cube':
//           rootResult = Math.pow(num, 1/3);
//           break;
//         case 'nth':
//           const n = parseFloat(nthValue);
//           if (isNaN(n) || n <= 0) {
//             setResult('Error: Invalid nth root');
//             return;
//           }
//           rootResult = Math.pow(num, 1/n);
//           break;
//         default:
//           setResult('Error: Invalid root type');
//           return;
//       }

//       setResult(rootResult.toFixed(4));
//     } catch (error) {
//       setResult('Error: Calculation failed');
//     }
//   };

//   const resetAll = () => {
//     setValue('');
//     setRootType('square');
//     setNthValue('');
//     setResult('');
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       gap: '24px',
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '32px',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       backgroundColor: '#f5f5f5'
//     }}>
//       {/* Main Calculator Section */}
//       <div style={{
//         flex: '1',
//         backgroundColor: '#ffffff',
//         borderRadius: '8px',
//         padding: '32px',
//         border: '1px solid #e0e0e0'
//       }}>
//         {/* Root Type Selection */}
//         <div style={{ marginBottom: '32px' }}>
//           <div style={{
//             display: 'flex',
//             gap: '8px',
//             backgroundColor: '#ffffff',
//             padding: '4px',
//             borderRadius: '8px',
//             border: '1px solid #e0e0e0'
//           }}>
//             {[
//               { value: 'square', label: 'Square Root', symbol: '√' },
//               { value: 'cube', label: 'Cube Root', symbol: '∛' },
//               { value: 'nth', label: 'Nth Root', symbol: 'ⁿ√' }
//             ].map(option => (
//               <label key={option.value} style={{
//                 flex: '1',
//                 cursor: 'pointer'
//               }}>
//                 <input
//                   type="radio"
//                   checked={rootType === option.value}
//                   value={option.value}
//                   onChange={toggleRootType}
//                   style={{ display: 'none' }}
//                 />
//                 <div style={{
//                   padding: '12px 16px',
//                   borderRadius: '6px',
//                   textAlign: 'center',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   transition: 'all 0.2s ease',
//                   backgroundColor: rootType === option.value ? '#2563eb' : 'transparent',
//                   color: rootType === option.value ? '#ffffff' : '#6b7280',
//                   border: rootType === option.value ? 'none' : '1px solid transparent',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   gap: '4px'
//                 }}>
//                   <span style={{ fontSize: '24px' }}>{option.symbol}</span>
//                   <span>{option.label}</span>
//                 </div>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Blue Header Box */}
//         <div style={{
//           backgroundColor: '#2563eb',
//           borderRadius: '8px 8px 0 0',
//           padding: '24px',
//           marginBottom: '0'
//         }}>
//           {/* <h2 style={{
//             textAlign: 'center',
//             fontSize: '24px',
//             fontWeight: '600',
//             color: '#ffffff',
//             margin: '0'
//           }}>
//             Root Calculator
//           </h2> */}
//           <p style={{
//             textAlign: 'center',
//             fontSize: '14px',
//             color: 'rgba(255, 255, 255, 0.9)',
//             margin: '8px 0 0 0'
//           }}>
//             Calculate the {rootType === 'square' ? 'square' : rootType === 'cube' ? 'cube' : 'nth'} root of a number
//           </p>
//         </div>

//         {/* Calculator Display */}
//         <div style={{
//           backgroundColor: '#f9fafb',
//           borderRadius: '0 0 8px 8px',
//           padding: '32px 24px',
//           marginBottom: '24px',
//           minHeight: '140px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           border: '1px solid #e5e7eb',
//           borderTop: 'none'
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//             fontSize: '24px'
//           }}>
//             {/* Nth value input */}
//             {rootType === 'nth' && (
//               <div style={{ position: 'relative' }}>
//                 <input
//                   type="text"
//                   value={nthValue}
//                   onChange={handleChangeNthValue}
//                   placeholder="n"
//                   style={{
//                     width: '50px',
//                     height: '44px',
//                     fontSize: '18px',
//                     textAlign: 'center',
//                     border: '1px solid #d1d5db',
//                     borderRadius: '6px',
//                     outline: 'none',
//                     transition: 'border-color 0.2s ease',
//                     backgroundColor: 'white',
//                     fontWeight: '500',
//                     color: '#1f2937'
//                   }}
//                   onFocus={(e) => e.target.style.borderColor = '#2563eb'}
//                   onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
//                 />
//                 <button
//                   style={{
//                     position: 'absolute',
//                     top: '-8px',
//                     right: '-8px',
//                     width: '20px',
//                     height: '20px',
//                     borderRadius: '50%',
//                     backgroundColor: '#2563eb',
//                     color: 'white',
//                     border: 'none',
//                     fontSize: '12px',
//                     cursor: 'help',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 'bold'
//                   }}
//                   onMouseEnter={() => setActiveTooltip('nth')}
//                   onMouseLeave={() => setActiveTooltip(null)}
//                 >
//                   ?
//                 </button>
//                 {activeTooltip === 'nth' && (
//                   <div style={{
//                     position: 'absolute',
//                     bottom: '120%',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     backgroundColor: '#1f2937',
//                     color: 'white',
//                     padding: '8px 12px',
//                     borderRadius: '6px',
//                     fontSize: '12px',
//                     whiteSpace: 'nowrap',
//                     zIndex: 100
//                   }}>
//                     Enter the value of n for the nth root
//                     <div style={{
//                       position: 'absolute',
//                       top: '100%',
//                       left: '50%',
//                       marginLeft: '-5px',
//                       borderWidth: '5px',
//                       borderStyle: 'solid',
//                       borderColor: '#1f2937 transparent transparent transparent'
//                     }} />
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Root Symbol */}
//             <span style={{
//               fontSize: '48px',
//               color: '#2563eb',
//               lineHeight: '1',
//               fontWeight: '300'
//             }}>
//               {rootType === 'cube' ? '∛' : '√'}
//             </span>

//             {/* Value Input */}
//             <div style={{ position: 'relative' }}>
//               <input
//                 type="text"
//                 value={value}
//                 onChange={handleChangeValue}
//                 placeholder="Enter number"
//                 style={{
//                   minWidth: '180px',
//                   height: '44px',
//                   fontSize: '18px',
//                   padding: '0 16px',
//                   border: '1px solid #d1d5db',
//                   borderRadius: '6px',
//                   outline: 'none',
//                   transition: 'border-color 0.2s ease',
//                   fontWeight: '500',
//                   backgroundColor: 'white',
//                   color: '#1f2937'
//                 }}
//                 onFocus={(e) => e.target.style.borderColor = '#2563eb'}
//                 onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
//               />
//               <button
//                 style={{
//                   position: 'absolute',
//                   top: '-8px',
//                   right: '-8px',
//                   width: '20px',
//                   height: '20px',
//                   borderRadius: '50%',
//                   backgroundColor: '#2563eb',
//                   color: 'white',
//                   border: 'none',
//                   fontSize: '12px',
//                   cursor: 'help',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontWeight: 'bold'
//                 }}
//                 onMouseEnter={() => setActiveTooltip('value')}
//                 onMouseLeave={() => setActiveTooltip(null)}
//               >
//                 ?
//               </button>
//               {activeTooltip === 'value' && (
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '120%',
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                   backgroundColor: '#1f2937',
//                   color: 'white',
//                   padding: '8px 12px',
//                   borderRadius: '6px',
//                   fontSize: '12px',
//                   whiteSpace: 'nowrap',
//                   zIndex: 100
//                 }}>
//                   Enter the number to calculate the root of
//                   <div style={{
//                     position: 'absolute',
//                     top: '100%',
//                     left: '50%',
//                     marginLeft: '-5px',
//                     borderWidth: '5px',
//                     borderStyle: 'solid',
//                     borderColor: '#1f2937 transparent transparent transparent'
//                   }} />
//                 </div>
//               )}
//             </div>

//             {/* Equals and Result */}
//             <span style={{
//               fontSize: '32px',
//               color: '#6b7280',
//               fontWeight: '300'
//             }}>
//               =
//             </span>

//             <div style={{
//               minWidth: '120px',
//               height: '44px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '22px',
//               fontWeight: '600',
//               color: result.includes('Error') ? '#dc2626' : '#059669',
//               backgroundColor: 'white',
//               borderRadius: '6px',
//               padding: '0 16px',
//               border: '1px solid #e5e7eb'
//             }}>
//               {result || '—'}
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div style={{
//           display: 'flex',
//           gap: '12px',
//           marginTop: '24px'
//         }}>
//           <button
//             onClick={calculateRoot}
//             style={{
//               flex: '1',
//               padding: '14px 24px',
//               backgroundColor: '#2563eb',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '16px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'background-color 0.2s ease'
//             }}
//             onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
//             onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
//           >
//             Calculate
//           </button>
//           <button
//             onClick={resetAll}
//             style={{
//               flex: '1',
//               padding: '14px 24px',
//               backgroundColor: 'white',
//               color: '#2563eb',
//               border: '2px solid #2563eb',
//               borderRadius: '6px',
//               fontSize: '16px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#2563eb';
//               e.target.style.color = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = 'white';
//               e.target.style.color = '#2563eb';
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* Explanation Panel */}
//       {explanations && explanations[rootType] && (
//         <div style={{
//           width: '360px',
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           padding: '24px',
//           border: '1px solid #e0e0e0',
//           height: 'fit-content',
//           position: 'sticky',
//           top: '24px'
//         }}>
//           <div style={{
//             display: 'inline-block',
//             backgroundColor: '#dbeafe',
//             color: '#1e40af',
//             padding: '6px 12px',
//             borderRadius: '4px',
//             fontSize: '12px',
//             fontWeight: '600',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//             marginBottom: '16px'
//           }}>
//             Explanation
//           </div>
          
//           <p style={{
//             fontSize: '15px',
//             lineHeight: '1.7',
//             color: '#374151',
//             marginBottom: '20px'
//           }}>
//             {processContent(explanations[rootType].text)}
//           </p>

//           {explanations[rootType].links && (
//             <div style={{
//               borderTop: '1px solid #e5e7eb',
//               paddingTop: '16px'
//             }}>
//               <p style={{
//                 fontSize: '13px',
//                 fontWeight: '600',
//                 color: '#6b7280',
//                 marginBottom: '12px'
//               }}>
//                 Learn more:
//               </p>
//               <ul style={{
//                 listStyle: 'none',
//                 padding: 0,
//                 margin: 0
//               }}>
//                 {explanations[rootType].links.map((link, index) => (
//                   <li key={index} style={{ marginBottom: '8px' }}>
//                     <a
//                       href={link.link}
//                       rel="noopener noreferrer"
//                       style={{
//                         color: '#2563eb',
//                         textDecoration: 'none',
//                         fontSize: '14px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '6px',
//                         transition: 'color 0.2s ease'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.target.style.color = '#1d4ed8';
//                         e.target.style.textDecoration = 'underline';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.color = '#2563eb';
//                         e.target.style.textDecoration = 'none';
//                       }}
//                     >
//                       <span>→</span>
//                       {link.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RootCalculator;


import React, { useState } from 'react';

function RootCalculator({ explanations, detailInstructions }) {
  const [value, setValue] = useState('');
  const [rootType, setRootType] = useState('square');
  const [nthValue, setNthValue] = useState('');
  const [result, setResult] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleChangeNthValue = (event) => {
    setNthValue(event.target.value);
  };

  const toggleRootType = (event) => {
    setRootType(event.target.value);
    if (event.target.value !== 'nth') {
      setNthValue('');
    }
  };

  const calculateRoot = () => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult('Error: Invalid input');
      return;
    }

    try {
      let rootResult;

      switch (rootType) {
        case 'square':
          if (num < 0) {
            setResult('Error: Cannot calculate square root of negative number');
            return;
          }
          rootResult = Math.sqrt(num);
          break;
        case 'cube':
          if (num < 0) {
            rootResult = -Math.pow(Math.abs(num), 1/3);
          } else {
            rootResult = Math.pow(num, 1/3);
          }
          break;
        case 'nth':
          const n = parseFloat(nthValue);
          if (isNaN(n) || n <= 0) {
            setResult('Error: Invalid nth root');
            return;
          }
          if (num < 0) {
            if (n % 2 === 0) {
              setResult('Error: Cannot calculate even root of negative number');
              return;
            } else {
              rootResult = -Math.pow(Math.abs(num), 1/n);
            }
          } else {
            rootResult = Math.pow(num, 1/n);
          }
          break;
        default:
          setResult('Error: Invalid root type');
          return;
      }

      setResult(rootResult.toFixed(4));
    } catch (error) {
      setResult('Error: Calculation failed');
    }
  };

  const resetAll = () => {
    setValue('');
    setRootType('square');
    setNthValue('');
    setResult('');
  };

  const processContent = (text) => text;

  const defaultExplanations = {
    square: {
      text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
      links: [
        { title: "Square Root Visualizer", link: "#" },
        { title: "Perfect Squares and Roots Table", link: "#" }
      ]
    },
    cube: {
      text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
      links: [
        { title: "Perfect Cubes and Cube Roots Table", link: "#" }
      ]
    },
    nth: {
      text: "An nth root of a number is a value that, when multiplied by itself n-1 times, gives the number. For example, the 4th root of 16 is 2, because 2 × 2 × 2 × 2 = 16."
    }
  };

  const displayExplanations = explanations || defaultExplanations;

  return (
    <div style={{
      display: 'flex',
      gap: '24px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#f5f5f5'
    }}>
      {/* Main Calculator Section */}
      <div style={{
        flex: '1',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '32px',
        border: '1px solid #e0e0e0'
      }}>
        {/* Root Type Selection */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            backgroundColor: '#ffffff',
            padding: '4px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0'
          }}>
            {[
              { value: 'square', label: 'Square Root', symbol: '√' },
              { value: 'cube', label: 'Cube Root', symbol: '∛' },
              { value: 'nth', label: 'Nth Root', symbol: 'ⁿ√' }
            ].map(option => (
              <label key={option.value} style={{
                flex: '1',
                cursor: 'pointer'
              }}>
                <input
                  type="radio"
                  checked={rootType === option.value}
                  value={option.value}
                  onChange={toggleRootType}
                  style={{ display: 'none' }}
                />
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                  backgroundColor: rootType === option.value ? '#2563eb' : 'transparent',
                  color: rootType === option.value ? '#ffffff' : '#6b7280',
                  border: rootType === option.value ? 'none' : '1px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ fontSize: '24px' }}>{option.symbol}</span>
                  <span>{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Blue Header Box */}
        <div style={{
          backgroundColor: '#2563eb',
          borderRadius: '8px 8px 0 0',
          padding: '24px',
          marginBottom: '0'
        }}>
          <p style={{
            textAlign: 'center',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '8px 0 0 0'
          }}>
            Calculate the {rootType === 'square' ? 'square' : rootType === 'cube' ? 'cube' : 'nth'} root of a number
          </p>
        </div>

        {/* Calculator Display */}
        <div style={{
          backgroundColor: '#f9fafb',
          borderRadius: '0 0 8px 8px',
          padding: '32px 24px',
          marginBottom: '24px',
          minHeight: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #e5e7eb',
          borderTop: 'none'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '24px'
          }}>
            {/* Nth value input */}
            {rootType === 'nth' && (
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={nthValue}
                  onChange={handleChangeNthValue}
                  placeholder="n"
                  style={{
                    width: '50px',
                    height: '44px',
                    fontSize: '18px',
                    textAlign: 'center',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    backgroundColor: 'white',
                    fontWeight: '500',
                    color: '#1f2937'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
                <button
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    fontSize: '12px',
                    cursor: 'help',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={() => setActiveTooltip('nth')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  ?
                </button>
                {activeTooltip === 'nth' && (
                  <div style={{
                    position: 'absolute',
                    bottom: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1f2937',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    zIndex: 100
                  }}>
                    Enter the value of n for the nth root
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      marginLeft: '-5px',
                      borderWidth: '5px',
                      borderStyle: 'solid',
                      borderColor: '#1f2937 transparent transparent transparent'
                    }} />
                  </div>
                )}
              </div>
            )}

            {/* Root Symbol */}
            <span style={{
              fontSize: '48px',
              color: '#2563eb',
              lineHeight: '1',
              fontWeight: '300'
            }}>
              {rootType === 'cube' ? '∛' : '√'}
            </span>

            {/* Value Input */}
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={value}
                onChange={handleChangeValue}
                placeholder="Enter number"
                style={{
                  minWidth: '180px',
                  height: '44px',
                  fontSize: '18px',
                  padding: '0 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  fontWeight: '500',
                  backgroundColor: 'white',
                  color: '#1f2937'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
              <button
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  fontSize: '12px',
                  cursor: 'help',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}
                onMouseEnter={() => setActiveTooltip('value')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                ?
              </button>
              {activeTooltip === 'value' && (
                <div style={{
                  position: 'absolute',
                  bottom: '120%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1f2937',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  zIndex: 100
                }}>
                  Enter the number to calculate the root of
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    marginLeft: '-5px',
                    borderWidth: '5px',
                    borderStyle: 'solid',
                    borderColor: '#1f2937 transparent transparent transparent'
                  }} />
                </div>
              )}
            </div>

            {/* Equals and Result */}
            <span style={{
              fontSize: '32px',
              color: '#6b7280',
              fontWeight: '300'
            }}>
              =
            </span>

            <div style={{
              minWidth: '120px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: '600',
              color: result.includes('Error') ? '#dc2626' : '#059669',
              backgroundColor: 'white',
              borderRadius: '6px',
              padding: '0 16px',
              border: '1px solid #e5e7eb'
            }}>
              {result || '—'}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '24px'
        }}>
          <button
            onClick={calculateRoot}
            style={{
              flex: '1',
              padding: '14px 24px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            Calculate
          </button>
          <button
            onClick={resetAll}
            style={{
              flex: '1',
              padding: '14px 24px',
              backgroundColor: '#dc2626',
              color: 'white',
              border: '1px solid lightgray',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f58585ff';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#dc2626';
              e.target.style.color = 'white';
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Explanation Panel */}
      {displayExplanations && displayExplanations[rootType] && (
        <div style={{
          width: '360px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '24px',
          border: '1px solid #e0e0e0',
          height: 'fit-content',
          position: 'sticky',
          top: '24px'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            padding: '6px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            Explanation
          </div>
          
          <p style={{
            fontSize: '15px',
            lineHeight: '1.7',
            color: '#374151',
            marginBottom: '20px'
          }}>
            {processContent(displayExplanations[rootType].text)}
          </p>

          {displayExplanations[rootType].links && (
            <div style={{
              borderTop: '1px solid #e5e7eb',
              paddingTop: '16px'
            }}>
              <p style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#6b7280',
                marginBottom: '12px'
              }}>
                Learn more:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {displayExplanations[rootType].links.map((link, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    <a
                      href={link.link}
                      rel="noopener noreferrer"
                      style={{
                        color: '#2563eb',
                        textDecoration: 'none',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#1d4ed8';
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#2563eb';
                        e.target.style.textDecoration = 'none';
                      }}
                    >
                      <span>→</span>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RootCalculator;