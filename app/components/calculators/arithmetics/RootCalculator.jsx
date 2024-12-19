
// // 'use client'
// // import React, { useState } from 'react';
// // import Big from 'big.js';
// // import styles from './Arithmetics.module.css';

// // function RootCalculator() {
// //   const [value, setValue] = useState('');
// //   const [rootType, setRootType] = useState('square');
// //   const [nthValue, setNthValue] = useState('');
// //   const [result, setResult] = useState('');
// //   const [activeTooltip, setActiveTooltip] = useState(null);

// //   const handleChangeValue = (event) => {
// //     setValue(event.target.value);
// //   };

// //   const handleChangeNthValue = (event) => {
// //     setNthValue(event.target.value);
// //   };

// //   const toggleRootType = (event) => {
// //     setRootType(event.target.value);
// //     if (event.target.value !== 'nth') {
// //       setNthValue('');
// //     }
// //   };

// //   const isBigNumberNeeded = (num) => {
// //     const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
// //     const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
// //     return num > MAX_SAFE_INTEGER || num < MIN_SAFE_INTEGER || num % 1 !== 0;
// //   };

// //   const calculateRoot = () => {
// //     const num = parseFloat(value);
// //     if (isNaN(num) || num < 0) {
// //       setResult('Error: Invalid input');
// //       return;
// //     }

// //     try {
// //       let rootResult;
// //       if (isBigNumberNeeded(num)) {
// //         const bigNum = new Big(num);
// //         switch (rootType) {
// //           case 'square':
// //             rootResult = bigNum.sqrt();
// //             break;
// //           case 'cube':
// //             rootResult = bigNum.cbrt();
// //             break;
// //           case 'nth':
// //             const n = parseFloat(nthValue);
// //             if (isNaN(n) || n <= 0) {
// //               setResult('Error: Invalid nth root');
// //               return;
// //             }
// //             rootResult = bigNum.pow(Big(1).div(n));
// //             break;
// //           default:
// //             setResult('Error: Invalid root type');
// //             return;
// //         }
// //       } else {
// //         switch (rootType) {
// //           case 'square':
// //             rootResult = Math.sqrt(num);
// //             break;
// //           case 'cube':
// //             rootResult = Math.cbrt(num);
// //             break;
// //           case 'nth':
// //             const n = parseFloat(nthValue);
// //             if (isNaN(n) || n <= 0) {
// //               setResult('Error: Invalid nth root');
// //               return;
// //             }
// //             rootResult = Math.pow(num, 1 / n);
// //             break;
// //           default:
// //             setResult('Error: Invalid root type');
// //             return;
// //         }
// //       }

// //       setResult(typeof rootResult === 'number' ? rootResult.toFixed(4) : rootResult.toFixed(4));
// //     } catch (error) {
// //       setResult('Error: Calculation failed');
// //     }
// //   };

// //   const resetAll = () => {
// //     setValue('');
// //     setRootType('square');
// //     setNthValue('');
// //     setResult('');
// //   };

// //   const showTooltip = (tooltipId) => {
// //     setActiveTooltip(tooltipId);
// //   };

// //   const hideTooltip = () => {
// //     setActiveTooltip(null);
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.baseSelection}>
// //         <label>Choose Root Type</label>
// //         <div className={styles.radio_container}>
// //           <input 
// //             type="radio" 
// //             checked={rootType === 'square'} 
// //             value="square" 
// //             onChange={toggleRootType} 
// //             id="square"
// //           />
// //           <label htmlFor="square">Square Root</label>
// //           <input 
// //             type="radio" 
// //             checked={rootType === 'cube'} 
// //             value="cube" 
// //             onChange={toggleRootType} 
// //             id="cube"
// //           />
// //           <label htmlFor="cube">Cube Root</label>
// //           <input 
// //             type="radio" 
// //             checked={rootType === 'nth'} 
// //             value="nth" 
// //             onChange={toggleRootType} 
// //             id="nth"
// //           />
// //           <label htmlFor="nth">Nth Root</label>
// //         </div>
// //       </div>
// //       <div className={styles.calculatorBodyWrapper}>
// //         <div className={styles.calculatorBody}>
// //           <table className={styles.calcTable}>
// //             <tbody>
// //               <tr>
// //                 <td className={styles.nthValueCell}>
// //                   {rootType === 'nth' && (
// //                     <div className={styles.inputWrapper}>
// //                       <input
// //                         className={styles.nthInput}
// //                         type="text"
// //                         value={nthValue}
// //                         onChange={handleChangeNthValue}
// //                         placeholder="n"
// //                       />
// //                       <span 
// //                         className={styles.tooltipTrigger}
// //                         onMouseEnter={() => showTooltip('nth')}
// //                         onMouseLeave={hideTooltip}
// //                       >
// //                         ?
// //                         {activeTooltip === 'nth' && (
// //                           <span className={styles.tooltip}>
// //                             Enter the value of n for the nth root
// //                           </span>
// //                         )}
// //                       </span>
// //                     </div>
// //                   )}
// //                 </td>
// //                 <td rowSpan="2" className={styles.rootSymbolCell}>
// //                   <span className={styles.rootSymbol}>
// //                     {rootType === 'cube' ? '∛' : '√'}
// //                   </span>
// //                 </td>
// //                 <td rowSpan="2">
// //                   <div className={styles.inputWrapper}>
// //                     <input  
// //                       className={styles.valueInput} 
// //                       type="text" 
// //                       value={value} 
// //                       onChange={handleChangeValue} 
// //                       placeholder="Enter number"
// //                     />
// //                     <span 
// //                       className={styles.tooltipTrigger} 
// //                       onMouseEnter={() => showTooltip('value')}
// //                       onMouseLeave={hideTooltip}
// //                     >
// //                       ?
// //                       {activeTooltip === 'value' && (
// //                         <span className={styles.tooltip}>
// //                           Enter the number to calculate the root of
// //                         </span>
// //                       )}
// //                     </span>
// //                   </div>
// //                 </td>
// //                 <td rowSpan="2" className={styles.resultCell}>
// //                   = {result}
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td className={styles.nthValueCell}></td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //       <div className={styles.buttonContainer}>
// //         <button 
// //           onClick={calculateRoot}
// //           className={styles.calculateButton}
// //         >
// //           Calculate
// //         </button>
// //         <button 
// //           onClick={resetAll}
// //           className={styles.resetButton}
// //         >
// //           Reset
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default RootCalculator;


// 'use client'
// import React, { useState } from 'react';
// import Big from 'big.js';
// import styles from './Arithmetics.module.css';

// function RootCalculator({ explanations }) {
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

//   const isBigNumberNeeded = (num) => {
//     const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
//     const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
//     return num > MAX_SAFE_INTEGER || num < MIN_SAFE_INTEGER || num % 1 !== 0;
//   };

//   const calculateRoot = () => {
//     const num = parseFloat(value);
//     if (isNaN(num) || num < 0) {
//       setResult('Error: Invalid input');
//       return;
//     }

//     try {
//       let rootResult;
//       if (isBigNumberNeeded(num)) {
//         const bigNum = new Big(num);
//         switch (rootType) {
//           case 'square':
//             rootResult = bigNum.sqrt();
//             break;
//           case 'cube':
//             rootResult = bigNum.cbrt();
//             break;
//           case 'nth':
//             const n = parseFloat(nthValue);
//             if (isNaN(n) || n <= 0) {
//               setResult('Error: Invalid nth root');
//               return;
//             }
//             rootResult = bigNum.pow(Big(1).div(n));
//             break;
//           default:
//             setResult('Error: Invalid root type');
//             return;
//         }
//       } else {
//         switch (rootType) {
//           case 'square':
//             rootResult = Math.sqrt(num);
//             break;
//           case 'cube':
//             rootResult = Math.cbrt(num);
//             break;
//           case 'nth':
//             const n = parseFloat(nthValue);
//             if (isNaN(n) || n <= 0) {
//               setResult('Error: Invalid nth root');
//               return;
//             }
//             rootResult = Math.pow(num, 1 / n);
//             break;
//           default:
//             setResult('Error: Invalid root type');
//             return;
//         }
//       }

//       setResult(typeof rootResult === 'number' ? rootResult.toFixed(4) : rootResult.toFixed(4));
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

//   const showTooltip = (tooltipId) => {
//     setActiveTooltip(tooltipId);
//   };

//   const hideTooltip = () => {
//     setActiveTooltip(null);
//   };

//   return (
//     <div className={styles.pageLayout}>
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
//                       <a href={link.link} target="_blank" rel="noopener noreferrer" className={styles.explanationLink}>
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

'use client'
import React, { useState } from 'react';
import Decimal from 'decimal.js';
import styles from './Arithmetics.module.css';
import ExplanationDetails from '@/app/components/ExplanationDetails';

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
    if (isNaN(num) || num < 0) {
      setResult('Error: Invalid input');
      return;
    }

    try {
      let rootResult;
      const decNum = new Decimal(num);

      switch (rootType) {
        case 'square':
          rootResult = decNum.sqrt();
          break;
        case 'cube':
          rootResult = decNum.pow(new Decimal(1).div(3));
          break;
        case 'nth':
          const n = parseFloat(nthValue);
          if (isNaN(n) || n <= 0) {
            setResult('Error: Invalid nth root');
            return;
          }
          rootResult = decNum.pow(new Decimal(1).div(n));
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

  // Rest of the component remains the same
  const resetAll = () => {
    setValue('');
    setRootType('square');
    setNthValue('');
    setResult('');
  };

  const showTooltip = (tooltipId) => {
    setActiveTooltip(tooltipId);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div className={styles.pageLayout}>
      <ExplanationDetails 
        title="How to use Root Calculator" 
        instructions={detailInstructions}
      />
      <div className={styles.container}>
        <div className={styles.baseSelection}>
          <label>Choose Root Type</label>
          <div className={styles.radio_container}>
            <input 
              type="radio" 
              checked={rootType === 'square'} 
              value="square" 
              onChange={toggleRootType} 
              id="square"
            />
            <label htmlFor="square">Square Root</label>
            <input 
              type="radio" 
              checked={rootType === 'cube'} 
              value="cube" 
              onChange={toggleRootType} 
              id="cube"
            />
            <label htmlFor="cube">Cube Root</label>
            <input 
              type="radio" 
              checked={rootType === 'nth'} 
              value="nth" 
              onChange={toggleRootType} 
              id="nth"
            />
            <label htmlFor="nth">Nth Root</label>
          </div>
        </div>

        <div className={styles.calculatorBodyWrapper}>
          <div className={styles.calculatorBody}>
            <table className={styles.calcTable}>
              <tbody>
                <tr>
                  <td className={styles.nthValueCell}>
                    {rootType === 'nth' && (
                      <div className={styles.inputWrapper}>
                        <input
                          className={styles.nthInput}
                          type="text"
                          value={nthValue}
                          onChange={handleChangeNthValue}
                          placeholder="n"
                        />
                        <span 
                          className={styles.tooltipTrigger}
                          onMouseEnter={() => showTooltip('nth')}
                          onMouseLeave={hideTooltip}
                        >
                          ?
                          {activeTooltip === 'nth' && (
                            <span className={styles.tooltip}>
                              Enter the value of n for the nth root
                            </span>
                          )}
                        </span>
                      </div>
                    )}
                  </td>
                  <td rowSpan="2" className={styles.rootSymbolCell}>
                    <span className={styles.rootSymbol}>
                      {rootType === 'cube' ? '∛' : '√'}
                    </span>
                  </td>
                  <td rowSpan="2">
                    <div className={styles.inputWrapper}>
                      <input  
                        className={styles.valueInput} 
                        type="text" 
                        value={value} 
                        onChange={handleChangeValue} 
                        placeholder="Enter number"
                      />
                      <span 
                        className={styles.tooltipTrigger} 
                        onMouseEnter={() => showTooltip('value')}
                        onMouseLeave={hideTooltip}
                      >
                        ?
                        {activeTooltip === 'value' && (
                          <span className={styles.tooltip}>
                            Enter the number to calculate the root of
                          </span>
                        )}
                      </span>
                    </div>
                  </td>
                  <td rowSpan="2" className={styles.resultCell}>
                    = {result}
                  </td>
                </tr>
                <tr>
                  <td className={styles.nthValueCell}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button 
            onClick={calculateRoot}
            className={styles.calculateButton}
          >
            Calculate
          </button>
          <button 
            onClick={resetAll}
            className={styles.resetButton}
          >
            Reset
          </button>
        </div>
      </div>
      
      {explanations && explanations[rootType] && (
        <div className={styles.explanationContainer}>
          <div className={styles.explanationContent}>
            <p className={styles.explanationText}>
              {explanations[rootType].text}
            </p>
            {explanations[rootType].links && (
              <div className={styles.explanationLinks}>
                <p className={styles.linksTitle}>Learn more:</p>
                <ul className={styles.linksList}>
                  {explanations[rootType].links.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} rel="noopener noreferrer" className={styles.explanationLink}>
                      {/* target="_blank" use for external links */}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RootCalculator;