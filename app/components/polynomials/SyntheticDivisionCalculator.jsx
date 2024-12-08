// // // // // // // 'use client';
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import styles from './SyntheticDivisionCalculator.module.css';

// // // // // // // const SyntheticDivisionCalculator = () => {
// // // // // // //   const [dividend, setDividend] = useState([1, -3, 2]); // Example: x^2 - 3x + 2
// // // // // // //   const [divisorRoot, setDivisorRoot] = useState(1); // Example: (x - 1)
// // // // // // //   const [quotient, setQuotient] = useState([]);
// // // // // // //   const [remainder, setRemainder] = useState(0);
// // // // // // //   const [steps, setSteps] = useState([]);
// // // // // // //   const [currentStep, setCurrentStep] = useState(0);
// // // // // // //   const [error, setError] = useState('');

// // // // // // //   // Reset state on input change
// // // // // // //   const resetCalculation = () => {
// // // // // // //     setQuotient([]);
// // // // // // //     setRemainder(0);
// // // // // // //     setSteps([]);
// // // // // // //     setCurrentStep(0);
// // // // // // //     setError('');
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     resetCalculation();
// // // // // // //   }, [dividend, divisorRoot]);

// // // // // // //   const handleSyntheticDivision = () => {
// // // // // // //     if (dividend.length === 0 || isNaN(divisorRoot)) {
// // // // // // //       setError('Please provide valid inputs.');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const steps = [];
// // // // // // //     const result = [...dividend];
// // // // // // //     const n = dividend.length;

// // // // // // //     for (let i = 1; i < n; i++) {
// // // // // // //       result[i] += result[i - 1] * divisorRoot;
// // // // // // //       steps.push({
// // // // // // //         currentRow: [...result],
// // // // // // //         highlight: [i], // Highlight current step
// // // // // // //       });
// // // // // // //     }

// // // // // // //     setQuotient(result.slice(0, -1)); // Exclude last term (remainder)
// // // // // // //     setRemainder(result[result.length - 1]);
// // // // // // //     setSteps(steps);
// // // // // // //     setCurrentStep(0);
// // // // // // //     setError('');
// // // // // // //   };

// // // // // // //   const nextStep = () => {
// // // // // // //     if (currentStep < steps.length - 1) {
// // // // // // //       setCurrentStep(currentStep + 1);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const prevStep = () => {
// // // // // // //     if (currentStep > 0) {
// // // // // // //       setCurrentStep(currentStep - 1);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // // //     const updatedDividend = [...dividend];
// // // // // // //     updatedDividend[index] = value === '' ? 0 : Number(value);
// // // // // // //     setDividend(updatedDividend);
// // // // // // //     resetCalculation();
// // // // // // //   };

// // // // // // //   const addCoefficient = () => {
// // // // // // //     setDividend([...dividend, 0]);
// // // // // // //   };

// // // // // // //   const removeCoefficient = () => {
// // // // // // //     if (dividend.length > 1) {
// // // // // // //       setDividend(dividend.slice(0, -1));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       <h1>Synthetic Division Calculator</h1>

// // // // // // //       {/* Polynomial Input */}
// // // // // // //       <div className={styles.inputSection}>
// // // // // // //         <h3>Dividend Polynomial Coefficients</h3>
// // // // // // //         <div className={styles.coefficientInputs}>
// // // // // // //           {dividend.map((coeff, index) => (
// // // // // // //             <input
// // // // // // //               key={index}
// // // // // // //               type="number"
// // // // // // //               value={coeff}
// // // // // // //               onChange={(e) => handleCoefficientChange(index, e.target.value)}
// // // // // // //               className={styles.coefficientInput}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //         <button onClick={addCoefficient} className={styles.addButton}>
// // // // // // //           Add Coefficient
// // // // // // //         </button>
// // // // // // //         <button onClick={removeCoefficient} className={styles.removeButton}>
// // // // // // //           Remove Coefficient
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Divisor Input */}
// // // // // // //       <div className={styles.inputSection}>
// // // // // // //         <h3>Divisor Root (x - c): c =</h3>
// // // // // // //         <input
// // // // // // //           type="number"
// // // // // // //           value={divisorRoot}
// // // // // // //           onChange={(e) => setDivisorRoot(Number(e.target.value))}
// // // // // // //           className={styles.divisorInput}
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       {/* Controls */}
// // // // // // //       <div className={styles.controls}>
// // // // // // //         <button onClick={handleSyntheticDivision} className={styles.calculateButton}>
// // // // // // //           Calculate
// // // // // // //         </button>
// // // // // // //         <button onClick={resetCalculation} className={styles.resetButton}>
// // // // // // //           Reset
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Step-by-Step Visualization */}
// // // // // // //       {steps.length > 0 && (
// // // // // // //         <div className={styles.stepsContainer}>
// // // // // // //           <h3>Steps</h3>
// // // // // // //           <table className={styles.stepTable}>
// // // // // // //             <thead>
// // // // // // //               <tr>
// // // // // // //                 {dividend.map((_, i) => (
// // // // // // //                   <th key={i}>x^{dividend.length - 1 - i}</th>
// // // // // // //                 ))}
// // // // // // //               </tr>
// // // // // // //             </thead>
// // // // // // //             <tbody>
// // // // // // //               <tr>
// // // // // // //                 {steps[currentStep].currentRow.map((value, index) => (
// // // // // // //                   <td
// // // // // // //                     key={index}
// // // // // // //                     className={steps[currentStep].highlight.includes(index) ? styles.highlighted : ''}
// // // // // // //                   >
// // // // // // //                     {value}
// // // // // // //                   </td>
// // // // // // //                 ))}
// // // // // // //               </tr>
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //           <div className={styles.stepControls}>
// // // // // // //             <button onClick={prevStep} disabled={currentStep === 0}>
// // // // // // //               ❮ Previous
// // // // // // //             </button>
// // // // // // //             <span>
// // // // // // //               Step {currentStep + 1} of {steps.length}
// // // // // // //             </span>
// // // // // // //             <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
// // // // // // //               Next ❯
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Results */}
// // // // // // //       {quotient.length > 0 && (
// // // // // // //         <div className={styles.results}>
// // // // // // //           <h3>Results</h3>
// // // // // // //           <p>
// // // // // // //             Quotient: {quotient.map((q, i) => `${q}x^${quotient.length - 1 - i}`).join(' + ')}
// // // // // // //           </p>
// // // // // // //           <p>Remainder: {remainder}</p>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Error */}
// // // // // // //       {error && <p className={styles.error}>{error}</p>}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SyntheticDivisionCalculator;


// // // // // // 'use client';
// // // // // // import React, { useState } from 'react';
// // // // // // import PolynomialInputDisplay from './PolynomialDisplay';

// // // // // // const SyntheticDivisionCalculator = () => {
// // // // // //   const [dividendCoefficients, setDividendCoefficients] = useState([]);
// // // // // //   const [divisorRoot, setDivisorRoot] = useState(null); // Root of (x - c)
// // // // // //   const [quotient, setQuotient] = useState([]);
// // // // // //   const [remainder, setRemainder] = useState(null);
// // // // // //   const [error, setError] = useState('');

// // // // // //   const handleDivide = () => {
// // // // // //     // Validate inputs
// // // // // //     if (!dividendCoefficients.length) {
// // // // // //       setError('Please input the dividend polynomial.');
// // // // // //       return;
// // // // // //     }
// // // // // //     if (divisorRoot === null || divisorRoot === '') {
// // // // // //       setError('Please input the root of the divisor (x - c).');
// // // // // //       return;
// // // // // //     }

// // // // // //     setError(''); // Clear any previous error

// // // // // //     // Perform synthetic division
// // // // // //     const result = [...dividendCoefficients];
// // // // // //     const quotientArray = [];
// // // // // //     let current = result[0]; // Start with the first coefficient

// // // // // //     quotientArray.push(current);

// // // // // //     for (let i = 1; i < result.length; i++) {
// // // // // //       current = result[i] + current * divisorRoot;
// // // // // //       if (i < result.length - 1) {
// // // // // //         quotientArray.push(current);
// // // // // //       }
// // // // // //     }

// // // // // //     setQuotient(quotientArray);
// // // // // //     setRemainder(current);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
// // // // // //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Synthetic Division Calculator</h1>

// // // // // //       {/* Input for the dividend polynomial */}
// // // // // //       <div style={{ marginBottom: '30px' }}>
// // // // // //         <h3>Enter the Dividend Polynomial:</h3>
// // // // // //         <PolynomialInputDisplay
// // // // // //           degree={4} // Default degree for the dividend polynomial
// // // // // //           onChange={(coefficients) => setDividendCoefficients(coefficients)}
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Input for the divisor polynomial (x - c) */}
// // // // // //       <div style={{ marginBottom: '30px' }}>
// // // // // //         <h3>Enter the Root of the Divisor (x - c):</h3>
// // // // // //         <input
// // // // // //           type="number"
// // // // // //           value={divisorRoot || ''}
// // // // // //           onChange={(e) => setDivisorRoot(Number(e.target.value))}
// // // // // //           style={{
// // // // // //             width: '200px',
// // // // // //             padding: '10px',
// // // // // //             fontSize: '16px',
// // // // // //             border: '1px solid #ddd',
// // // // // //             borderRadius: '4px',
// // // // // //           }}
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Divide Button */}
// // // // // //       <button
// // // // // //         onClick={handleDivide}
// // // // // //         style={{
// // // // // //           display: 'block',
// // // // // //           margin: '20px auto',
// // // // // //           padding: '10px 20px',
// // // // // //           backgroundColor: '#007bff',
// // // // // //           color: 'white',
// // // // // //           fontSize: '16px',
// // // // // //           border: 'none',
// // // // // //           borderRadius: '4px',
// // // // // //           cursor: 'pointer',
// // // // // //         }}
// // // // // //       >
// // // // // //         Divide
// // // // // //       </button>

// // // // // //       {/* Error Message */}
// // // // // //       {error && (
// // // // // //         <p
// // // // // //           style={{
// // // // // //             color: 'red',
// // // // // //             textAlign: 'center',
// // // // // //             fontWeight: 'bold',
// // // // // //             marginTop: '20px',
// // // // // //           }}
// // // // // //         >
// // // // // //           {error}
// // // // // //         </p>
// // // // // //       )}

// // // // // //       {/* Results */}
// // // // // //       {quotient.length > 0 && (
// // // // // //         <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
// // // // // //           <h3>Result:</h3>
// // // // // //           <p>
// // // // // //             <strong>Quotient:</strong>{' '}
// // // // // //             {quotient.map((q, i) => (i === quotient.length - 1 ? `${q}` : `${q}x^${quotient.length - 1 - i}`)).join(' + ')}
// // // // // //           </p>
// // // // // //           <p>
// // // // // //             <strong>Remainder:</strong> {remainder}
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SyntheticDivisionCalculator;



// // // // // import React, { useState } from 'react';
// // // // // import PolynomialInputDisplay from './PolynomialInputDisplay';

// // // // // const SyntheticDivisionCalculator = () => {
// // // // //   // States to track user inputs
// // // // //   const [dividendCoefficients, setDividendCoefficients] = useState([]);
// // // // //   const [divisorCoefficients, setDivisorCoefficients] = useState([]);
// // // // //   const [showDividendInput, setShowDividendInput] = useState(false); // Show dividend input
// // // // //   const [showDivisorInput, setShowDivisorInput] = useState(false); // Show divisor input
// // // // //   const [quotient, setQuotient] = useState([]);
// // // // //   const [remainder, setRemainder] = useState([]);
// // // // //   const [error, setError] = useState('');

// // // // //   // Perform synthetic division
// // // // //   const handleDivide = () => {
// // // // //     if (!dividendCoefficients.length) {
// // // // //       setError('Please input the dividend polynomial.');
// // // // //       return;
// // // // //     }

// // // // //     if (!divisorCoefficients.length) {
// // // // //       setError('Please input the divisor polynomial.');
// // // // //       return;
// // // // //     }

// // // // //     if (divisorCoefficients.length !== 2) {
// // // // //       setError('Synthetic division requires a divisor of degree 1 (e.g., x - c).');
// // // // //       return;
// // // // //     }

// // // // //     setError('');

// // // // //     // Synthetic division algorithm
// // // // //     const result = [...dividendCoefficients];
// // // // //     const divisorRoot = -divisorCoefficients[1] / divisorCoefficients[0]; // Find the root of the divisor
// // // // //     const quotientArray = [];
// // // // //     let current = result[0];

// // // // //     quotientArray.push(current);

// // // // //     for (let i = 1; i < result.length; i++) {
// // // // //       current = result[i] + current * divisorRoot;
// // // // //       if (i < result.length - 1) {
// // // // //         quotientArray.push(current);
// // // // //       }
// // // // //     }

// // // // //     setQuotient(quotientArray);
// // // // //     setRemainder(current);
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
// // // // //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Synthetic Division Calculator</h1>

// // // // //       {/* Step 1: Choose input mode */}
// // // // //       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
// // // // //         {!showDividendInput && (
// // // // //           <button
// // // // //             onClick={() => setShowDividendInput(true)}
// // // // //             style={{
// // // // //               padding: '10px 20px',
// // // // //               margin: '10px',
// // // // //               backgroundColor: '#007bff',
// // // // //               color: 'white',
// // // // //               border: 'none',
// // // // //               borderRadius: '4px',
// // // // //               cursor: 'pointer',
// // // // //             }}
// // // // //           >
// // // // //             Input Dividend Polynomial
// // // // //           </button>
// // // // //         )}

// // // // //         {showDividendInput && !showDivisorInput && (
// // // // //           <button
// // // // //             onClick={() => setShowDivisorInput(true)}
// // // // //             style={{
// // // // //               padding: '10px 20px',
// // // // //               margin: '10px',
// // // // //               backgroundColor: '#007bff',
// // // // //               color: 'white',
// // // // //               border: 'none',
// // // // //               borderRadius: '4px',
// // // // //               cursor: 'pointer',
// // // // //             }}
// // // // //           >
// // // // //             Input Divisor Polynomial
// // // // //           </button>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Step 2: Render polynomial inputs conditionally */}
// // // // //       {showDividendInput && (
// // // // //         <div style={{ marginBottom: '30px' }}>
// // // // //           <h3>Enter the Dividend Polynomial:</h3>
// // // // //           <PolynomialInputDisplay
// // // // //             onChange={(updatedCoefficients) => setDividendCoefficients(updatedCoefficients)}
// // // // //           />
// // // // //         </div>
// // // // //       )}

// // // // //       {showDivisorInput && (
// // // // //         <div style={{ marginBottom: '30px' }}>
// // // // //           <h3>Enter the Divisor Polynomial:</h3>
// // // // //           <PolynomialInputDisplay
// // // // //             onChange={(updatedCoefficients) => setDivisorCoefficients(updatedCoefficients)}
// // // // //           />
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Step 3: Perform division */}
// // // // //       {showDividendInput && showDivisorInput && (
// // // // //         <div style={{ textAlign: 'center', marginTop: '20px' }}>
// // // // //           <button
// // // // //             onClick={handleDivide}
// // // // //             style={{
// // // // //               padding: '10px 20px',
// // // // //               backgroundColor: '#28a745',
// // // // //               color: 'white',
// // // // //               fontSize: '16px',
// // // // //               border: 'none',
// // // // //               borderRadius: '4px',
// // // // //               cursor: 'pointer',
// // // // //             }}
// // // // //           >
// // // // //             Divide
// // // // //           </button>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Error Message */}
// // // // //       {error && (
// // // // //         <p
// // // // //           style={{
// // // // //             color: 'red',
// // // // //             textAlign: 'center',
// // // // //             fontWeight: 'bold',
// // // // //             marginTop: '20px',
// // // // //           }}
// // // // //         >
// // // // //           {error}
// // // // //         </p>
// // // // //       )}

// // // // //       {/* Results */}
// // // // //       {quotient.length > 0 && (
// // // // //         <div
// // // // //           style={{
// // // // //             marginTop: '30px',
// // // // //             padding: '20px',
// // // // //             border: '1px solid #ddd',
// // // // //             borderRadius: '8px',
// // // // //             backgroundColor: '#f9f9f9',
// // // // //           }}
// // // // //         >
// // // // //           <h3>Results:</h3>
// // // // //           <p>
// // // // //             <strong>Quotient:</strong>{' '}
// // // // //             {quotient
// // // // //               .map((q, i) =>
// // // // //                 i === quotient.length - 1 ? `${q}` : `${q}x^${quotient.length - 1 - i}`
// // // // //               )
// // // // //               .join(' + ')}
// // // // //           </p>
// // // // //           <p>
// // // // //             <strong>Remainder:</strong> {remainder}
// // // // //           </p>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SyntheticDivisionCalculator;


// // // // // import React, { useState } from 'react';
// // // // // import PolynomialInputDisplay from './PolynomialInputDisplay';
// // // // // import './SyntheticDivisionCalculator.css'

// // // // // const SyntheticDivisionCalculator = () => {
// // // // //   const [dividendCoefficients, setDividendCoefficients] = useState([]);
// // // // //   const [divisorCoefficients, setDivisorCoefficients] = useState([]);
// // // // //   const [quotient, setQuotient] = useState([]);
// // // // //   const [remainder, setRemainder] = useState([]);
// // // // //   const [error, setError] = useState('');

// // // // //   const handleDivide = () => {
// // // // //     if (!dividendCoefficients.length) {
// // // // //       setError('Please input the dividend polynomial.');
// // // // //       return;
// // // // //     }

// // // // //     if (!divisorCoefficients.length) {
// // // // //       setError('Please input the divisor polynomial.');
// // // // //       return;
// // // // //     }

// // // // //     if (divisorCoefficients.length !== 2) {
// // // // //       setError('The divisor must be a polynomial of degree 1 (e.g., x - c).');
// // // // //       return;
// // // // //     }

// // // // //     setError('');

// // // // //     // Synthetic division logic
// // // // //     const divisorRoot = -divisorCoefficients[1] / divisorCoefficients[0]; // Root of divisor
// // // // //     const result = [...dividendCoefficients];
// // // // //     const quotientArray = [];
// // // // //     let current = result[0];

// // // // //     quotientArray.push(current);

// // // // //     for (let i = 1; i < result.length; i++) {
// // // // //       current = result[i] + current * divisorRoot;
// // // // //       if (i < result.length - 1) {
// // // // //         quotientArray.push(current);
// // // // //       }
// // // // //     }

// // // // //     setQuotient(quotientArray);
// // // // //     setRemainder(current);
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ maxWidth: '1200px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
// // // // //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Synthetic Division Calculator</h1>

// // // // //       <div className='inputResult'>
// // // // //         <h3>Dividend Polynomial:</h3>
// // // // //         {dividendCoefficients.length > 0 ? (
// // // // //           <p>{dividendCoefficients.map((coef, i) => `${coef}x^${dividendCoefficients.length - 1 - i}`).join(' + ')}</p>
// // // // //         ) : (
// // // // //           <p>Not entered yet.</p>
// // // // //         )}
// // // // //       </div>

// // // // //       <div className='inputResult'>
// // // // //         <h3>Divisor Polynomial:</h3>
// // // // //         {divisorCoefficients.length > 0 ? (
// // // // //           <p>{divisorCoefficients.map((coef, i) => `${coef}x^${divisorCoefficients.length - 1 - i}`).join(' + ')}</p>
// // // // //         ) : (
// // // // //           <p>Not entered yet.</p>
// // // // //         )}
// // // // //       </div>

// // // // //       <PolynomialInputDisplay
// // // // //         isParent={false}
// // // // //         onChange={(coefficients) => setDividendCoefficients(coefficients)}
// // // // //       />
// // // // //       <PolynomialInputDisplay
// // // // //         isParent={false}
// // // // //         onChange={(coefficients) => setDivisorCoefficients(coefficients)}
// // // // //       />

// // // // //       <button
// // // // //         onClick={handleDivide}
// // // // //         style={{
// // // // //           display: 'block',
// // // // //           margin: '20px auto',
// // // // //           padding: '10px 20px',
// // // // //           backgroundColor: '#28a745',
// // // // //           color: 'white',
// // // // //           border: 'none',
// // // // //           borderRadius: '4px',
// // // // //         }}
// // // // //       >
// // // // //         Divide
// // // // //       </button>

// // // // //       {error && <p style={{ color: 'red' }}>{error}</p>}

// // // // //       {quotient.length > 0 && (
// // // // //         <div>
// // // // //           <h3>Quotient:</h3>
// // // // //           <p>{quotient.map((coef, i) => `${coef}x^${quotient.length - 1 - i}`).join(' + ')}</p>
// // // // //           <h3>Remainder:</h3>
// // // // //           <p>{remainder}</p>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SyntheticDivisionCalculator;


// // // // import React, { useState } from 'react';
// // // // import { BlockMath } from 'react-katex';
// // // // import 'katex/dist/katex.min.css';
// // // // import PolynomialInputDisplay from './PolynomialInputDisplay';
// // // // import './SyntheticDivisionCalculator.css'

// // // // const SyntheticDivisionCalculator = () => {
// // // //   const [dividendCoefficients, setDividendCoefficients] = useState([]);
// // // //   const [divisorCoefficients, setDivisorCoefficients] = useState([]);
// // // //   const [quotient, setQuotient] = useState([]);
// // // //   const [remainder, setRemainder] = useState([]);
// // // //   const [error, setError] = useState('');

// // // //   const handleDivide = () => {
// // // //     if (!dividendCoefficients.length) {
// // // //       setError('Please input the dividend polynomial.');
// // // //       return;
// // // //     }

// // // //     if (!divisorCoefficients.length) {
// // // //       setError('Please input the divisor polynomial.');
// // // //       return;
// // // //     }

// // // //     if (divisorCoefficients.length !== 2) {
// // // //       setError('The divisor must be a polynomial of degree 1 (e.g., x - c).');
// // // //       return;
// // // //     }

// // // //     setError('');

// // // //     // Synthetic division logic
// // // //     const divisorRoot = -divisorCoefficients[1] / divisorCoefficients[0]; // Root of divisor
// // // //     const result = [...dividendCoefficients];
// // // //     const quotientArray = [];
// // // //     let current = result[0];

// // // //     quotientArray.push(current);

// // // //     for (let i = 1; i < result.length; i++) {
// // // //       current = result[i] + current * divisorRoot;
// // // //       if (i < result.length - 1) {
// // // //         quotientArray.push(current);
// // // //       }
// // // //     }

// // // //     setQuotient(quotientArray);
// // // //     setRemainder(current);
// // // //   };

// // // //   const generatePolynomialLatex = (coefficients) => {
// // // //     if (!coefficients.some(coef => coef !== '')) return '';
    
// // // //     let latex = '';
// // // //     const degree = coefficients.length - 1;
    
// // // //     for (let i = degree; i >= 0; i--) {
// // // //       const coef = coefficients[i];
// // // //       if (coef !== '' && coef !== '0') {
// // // //         if (latex && coef > 0) latex += ' + ';
// // // //         if (coef < 0) latex += ' - ';
        
// // // //         const absCoef = Math.abs(coef);
// // // //         if (i > 0) {
// // // //           if (absCoef !== 1) latex += absCoef;
// // // //           latex += 'x';
// // // //           if (i > 1) latex += `^{${i}}`;
// // // //         } else {
// // // //           latex += absCoef;
// // // //         }
// // // //       }
// // // //     }
    
// // // //     return latex || '0';
// // // //   };

// // // //   return (
// // // //     <div style={{ maxWidth: '1200px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
// // // //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Synthetic Division Calculator</h1>

// // // //       <div className='inputResult'>
// // // //         <h3>Dividend Polynomial:</h3>
// // // //         {dividendCoefficients.some(c => c !== '') ? (
// // // //           <BlockMath math={generatePolynomialLatex(dividendCoefficients)} />
// // // //         ) : (
// // // //           <p>Not entered yet.</p>
// // // //         )}
// // // //       </div>

// // // //       {/* <div className='inputResult'>
// // // //         <h3>Divisor Polynomial:</h3>
// // // //         {divisorCoefficients.some(c => c !== '') ? (
// // // //           <BlockMath math={generatePolynomialLatex(divisorCoefficients)} />
// // // //         ) : (
// // // //           <p>Not entered yet.</p>
// // // //         )}
// // // //       </div> */}

// // // //       <PolynomialInputDisplay
// // // //         isParent={false}
// // // //         onChange={(coefficients) => setDividendCoefficients(coefficients)}
// // // //       />

// // // // <div className='inputResult'>
// // // //         <h3>Divisor Polynomial:</h3>
// // // //         {divisorCoefficients.some(c => c !== '') ? (
// // // //           <BlockMath math={generatePolynomialLatex(divisorCoefficients)} />
// // // //         ) : (
// // // //           <p>Not entered yet.</p>
// // // //         )}
// // // //       </div>
// // // //       <PolynomialInputDisplay
// // // //         isParent={false}
// // // //         onChange={(coefficients) => setDivisorCoefficients(coefficients)}
// // // //       />

// // // //       <button
// // // //         onClick={handleDivide}
// // // //         style={{
// // // //           display: 'block',
// // // //           margin: '20px auto',
// // // //           padding: '10px 20px',
// // // //           backgroundColor: '#28a745',
// // // //           color: 'white',
// // // //           border: 'none',
// // // //           borderRadius: '4px',
// // // //         }}
// // // //       >
// // // //         Divide
// // // //       </button>

// // // //       {error && <p style={{ color: 'red' }}>{error}</p>}

// // // //       {quotient.length > 0 && (
// // // //         <div>
// // // //           <h3>Quotient:</h3>
// // // //           <BlockMath math={generatePolynomialLatex(quotient)} />
// // // //           <h3>Remainder:</h3>
// // // //           <BlockMath math={remainder.toString()} />
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SyntheticDivisionCalculator;


// // // import React, { useState } from 'react';
// // // import { BlockMath } from 'react-katex';
// // // import PolynomialInputDisplay from './PolynomialInputDisplay';
// // // import './SyntheticDivisionCalculator.css'

// // // const SyntheticDivisionCalculator = () => {
// // //   const [dividendCoefficients, setDividendCoefficients] = useState([]);
// // //   const [divisorCoefficients, setDivisorCoefficients] = useState([]);
// // //   const [quotient, setQuotient] = useState([]);
// // //   const [remainder, setRemainder] = useState([]);
// // //   const [error, setError] = useState('');
// // //   const [showDividendInput, setShowDividendInput] = useState(false);
// // //   const [showDivisorInput, setShowDivisorInput] = useState(false);
// // //   const [dividendApproved, setDividendApproved] = useState(false);
// // //   const [divisorApproved, setDivisorApproved] = useState(false);

// // //   const generatePolynomialLatex = (coefficients) => {
// // //     if (!coefficients.some(coef => coef !== '')) return '';
// // //     let latex = '';
// // //     const degree = coefficients.length - 1;
    
// // //     for (let i = degree; i >= 0; i--) {
// // //       const coef = coefficients[i];
// // //       if (coef !== '' && coef !== '0') {
// // //         if (latex && coef > 0) latex += ' + ';
// // //         if (coef < 0) latex += ' - ';
        
// // //         const absCoef = Math.abs(coef);
// // //         if (i > 0) {
// // //           if (absCoef !== 1) latex += absCoef;
// // //           latex += 'x';
// // //           if (i > 1) latex += `^{${i}}`;
// // //         } else {
// // //           latex += absCoef;
// // //         }
// // //       }
// // //     }
// // //     return latex || '0';
// // //   };

// // //   const handleDivide = () => {
// // //     if (!dividendCoefficients.length) {
// // //       setError('Please input the dividend polynomial.');
// // //       return;
// // //     }

// // //     if (!divisorCoefficients.length) {
// // //       setError('Please input the divisor polynomial.');
// // //       return;
// // //     }

// // //     if (divisorCoefficients.length !== 2) {
// // //       setError('The divisor must be a polynomial of degree 1 (e.g., x - c).');
// // //       return;
// // //     }

// // //     setError('');
// // //     const divisorRoot = -divisorCoefficients[1] / divisorCoefficients[0];
// // //     const result = [...dividendCoefficients];
// // //     const quotientArray = [];
// // //     let current = result[0];

// // //     quotientArray.push(current);
// // //     for (let i = 1; i < result.length; i++) {
// // //       current = result[i] + current * divisorRoot;
// // //       if (i < result.length - 1) {
// // //         quotientArray.push(current);
// // //       }
// // //     }

// // //     setQuotient(quotientArray);
// // //     setRemainder(current);
// // //   };

// // //   return (
// // //     <div className="main-container">
// // //       <div className="content-section">
// // //         <h1>Synthetic Division Calculator</h1>

// // //         <div className="polynomial-section">
// // //           <div className="polynomial-header">
// // //             <h3>Dividend Polynomial</h3>
// // //             {!showDividendInput && !dividendApproved && (
// // //               <button className="generate-button" onClick={() => setShowDividendInput(true)}>
// // //                 Generate Dividend
// // //               </button>
// // //             )}
// // //             {showDividendInput && !dividendApproved && (
// // //               <button className="approve-button" onClick={() => {
// // //                 setDividendApproved(true);
// // //                 setShowDividendInput(false);
// // //               }}>
// // //                 Approve
// // //               </button>
// // //             )}
// // //             {dividendApproved && (
// // //               <button className="edit-button" onClick={() => {
// // //                 setDividendApproved(false);
// // //                 setShowDividendInput(true);
// // //               }}>
// // //                 Edit
// // //               </button>
// // //             )}
// // //           </div>
          
// // //           {dividendCoefficients.some(c => c !== '') && (
// // //             <BlockMath math={generatePolynomialLatex(dividendCoefficients)} />
// // //           )}
          
// // //           {showDividendInput && (
// // //             <div className="input-panel">
// // //               <PolynomialInputDisplay
// // //                 isParent={false}
// // //                 onChange={(coefficients) => setDividendCoefficients(coefficients)}
// // //               />
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div className="polynomial-section">
// // //           <div className="polynomial-header">
// // //             <h3>Divisor Polynomial</h3>
// // //             {!showDivisorInput && !divisorApproved && (
// // //               <button className="generate-button" onClick={() => setShowDivisorInput(true)}>
// // //                 Generate Divisor
// // //               </button>
// // //             )}
// // //             {showDivisorInput && !divisorApproved && (
// // //               <button className="approve-button" onClick={() => {
// // //                 setDivisorApproved(true);
// // //                 setShowDivisorInput(false);
// // //               }}>
// // //                 Approve
// // //               </button>
// // //             )}
// // //             {divisorApproved && (
// // //               <button className="edit-button" onClick={() => {
// // //                 setDivisorApproved(false);
// // //                 setShowDivisorInput(true);
// // //               }}>
// // //                 Edit
// // //               </button>
// // //             )}
// // //           </div>
          
// // //           {divisorCoefficients.some(c => c !== '') && (
// // //             <BlockMath math={generatePolynomialLatex(divisorCoefficients)} />
// // //           )}
          
// // //           {showDivisorInput && (
// // //             <div className="input-panel">
// // //               <PolynomialInputDisplay
// // //                 isParent={false}
// // //                 onChange={(coefficients) => setDivisorCoefficients(coefficients)}
// // //               />
// // //             </div>
// // //           )}
// // //         </div>

// // //         {dividendApproved && divisorApproved && (
// // //           <button className="divide-button" onClick={handleDivide}>
// // //             Divide
// // //           </button>
// // //         )}

// // //         {error && <p className="error">{error}</p>}

// // //         {quotient.length > 0 && (
// // //           <div className="results">
// // //             <h3>Quotient:</h3>
// // //             <BlockMath math={generatePolynomialLatex(quotient)} />
// // //             <h3>Remainder:</h3>
// // //             <BlockMath math={remainder.toString()} />
// // //           </div>
// // //         )}
// // //       </div>
      
// // //       <div className="explanation-section">
// // //         <h2>How to Use</h2>
// // //         <ol>
// // //           <li>Click "Generate Dividend" to create your dividend polynomial</li>
// // //           <li>Select degree and enter coefficients or use random generation</li>
// // //           <li>Click "Approve" when satisfied</li>
// // //           <li>Repeat the same process for divisor polynomial</li>
// // //           <li>Click "Divide" to see the result</li>
// // //         </ol>
// // //         <p className="note">You can edit polynomials at any time by clicking the "Edit" button</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SyntheticDivisionCalculator;

// // import React, { useState } from 'react';
// // import { BlockMath } from 'react-katex';
// // import PolynomialInputDisplay from './PolynomialInputDisplay';
// // import './SyntheticDivisionCalculator.css'

// // const SyntheticDivisionCalculator = () => {
// //   const [dividendCoefficients, setDividendCoefficients] = useState([]);
// //   const [divisorCoefficients, setDivisorCoefficients] = useState([]);
// //   const [quotient, setQuotient] = useState([]);
// //   const [remainder, setRemainder] = useState([]);
// //   const [error, setError] = useState('');
// //   const [showDividendInput, setShowDividendInput] = useState(false);
// //   const [showDivisorInput, setShowDivisorInput] = useState(false);
// //   const [dividendApproved, setDividendApproved] = useState(false);
// //   const [divisorApproved, setDivisorApproved] = useState(false);

// //   const resetAll = () => {
// //     setDividendCoefficients([]);
// //     setDivisorCoefficients([]);
// //     setQuotient([]);
// //     setRemainder([]);
// //     setError('');
// //     setShowDividendInput(false);
// //     setShowDivisorInput(false);
// //     setDividendApproved(false);
// //     setDivisorApproved(false);
// //   };

// //   const resetDividend = () => {
// //     setDividendCoefficients([]);
// //     setShowDividendInput(false);
// //     setDividendApproved(false);
// //   };

// //   const resetDivisor = () => {
// //     setDivisorCoefficients([]);
// //     setShowDivisorInput(false);
// //     setDivisorApproved(false);
// //   };

// //   const generatePolynomialLatex = (coefficients) => {
// //     if (!coefficients.some(coef => coef !== '')) return '';
// //     let latex = '';
// //     const degree = coefficients.length - 1;
    
// //     for (let i = degree; i >= 0; i--) {
// //       const coef = coefficients[i];
// //       if (coef !== '' && coef !== '0') {
// //         if (latex && coef > 0) latex += ' + ';
// //         if (coef < 0) latex += ' - ';
        
// //         const absCoef = Math.abs(coef);
// //         if (i > 0) {
// //           if (absCoef !== 1) latex += absCoef;
// //           latex += 'x';
// //           if (i > 1) latex += `^{${i}}`;
// //         } else {
// //           latex += absCoef;
// //         }
// //       }
// //     }
// //     return latex || '0';
// //   };

// //   const handleDivide = () => {
// //     if (!dividendCoefficients.length) {
// //       setError('Please input the dividend polynomial.');
// //       return;
// //     }

// //     if (!divisorCoefficients.length) {
// //       setError('Please input the divisor polynomial.');
// //       return;
// //     }

// //     if (divisorCoefficients.length !== 2) {
// //       setError('The divisor must be a polynomial of degree 1 (e.g., x - c).');
// //       return;
// //     }

// //     setError('');
// //     const divisorRoot = -divisorCoefficients[1] / divisorCoefficients[0];
// //     const result = [...dividendCoefficients];
// //     const quotientArray = [];
// //     let current = result[0];

// //     quotientArray.push(current);
// //     for (let i = 1; i < result.length; i++) {
// //       current = result[i] + current * divisorRoot;
// //       if (i < result.length - 1) {
// //         quotientArray.push(current);
// //       }
// //     }

// //     setQuotient(quotientArray);
// //     setRemainder(current);
// //   };

// //   return (
// //     <div className="main-container">
// //       <div className="content-section">
// //         <div className="header-section">
// //           <h1>Synthetic Division Calculator</h1>
// //           <button className="reset-all-button" onClick={resetAll}>Reset All</button>
// //         </div>

// //         <div className="polynomial-section">
// //           <div className="polynomial-header">
// //             <h3>Dividend Polynomial</h3>
// //             {!showDividendInput && !dividendApproved && (
// //               <>
// //                 <button className="action-button" onClick={() => setShowDividendInput(true)}>
// //                   Generate Dividend
// //                 </button>
// //                 <button className="reset-button" onClick={resetDividend}>Reset</button>
// //               </>
// //             )}
// //             {showDividendInput && !dividendApproved && (
// //               <button className="action-button" onClick={() => {
// //                 setDividendApproved(true);
// //                 setShowDividendInput(false);
// //               }}>
// //                 OK
// //               </button>
// //             )}
// //             {dividendApproved && (
// //               <>
// //                 <button className="edit-button" onClick={() => {
// //                   setDividendApproved(false);
// //                   setShowDividendInput(true);
// //                 }}>
// //                   Edit
// //                 </button>
// //                 <button className="reset-button" onClick={resetDividend}>Reset</button>
// //               </>
// //             )}
// //           </div>
          
// //           {dividendCoefficients.some(c => c !== '') && (
// //             <BlockMath math={generatePolynomialLatex(dividendCoefficients)} />
// //           )}
          
// //           {showDividendInput && (
// //             <div className="input-panel">
// //               <PolynomialInputDisplay
// //                 isParent={false}
// //                 onChange={(coefficients) => setDividendCoefficients(coefficients)}
// //               />
// //             </div>
// //           )}
// //         </div>

// //         <div className="polynomial-section">
// //           <div className="polynomial-header">
// //             <h3>Divisor Polynomial</h3>
// //             {!showDivisorInput && !divisorApproved && (
// //               <>
// //                 <button className="action-button" onClick={() => setShowDivisorInput(true)}>
// //                   Generate Divisor
// //                 </button>
// //                 <button className="reset-button" onClick={resetDivisor}>Reset</button>
// //               </>
// //             )}
// //             {showDivisorInput && !divisorApproved && (
// //               <button className="action-button" onClick={() => {
// //                 setDivisorApproved(true);
// //                 setShowDivisorInput(false);
// //               }}>
// //                 OK
// //               </button>
// //             )}
// //             {divisorApproved && (
// //               <>
// //                 <button className="edit-button" onClick={() => {
// //                   setDivisorApproved(false);
// //                   setShowDivisorInput(true);
// //                 }}>
// //                   Edit
// //                 </button>
// //                 <button className="reset-button" onClick={resetDivisor}>Reset</button>
// //               </>
// //             )}
// //           </div>
          
// //           {divisorCoefficients.some(c => c !== '') && (
// //             <BlockMath math={generatePolynomialLatex(divisorCoefficients)} />
// //           )}
          
// //           {showDivisorInput && (
// //             <div className="input-panel">
// //               <PolynomialInputDisplay
// //                 isParent={false}
// //                 onChange={(coefficients) => setDivisorCoefficients(coefficients)}
// //               />
// //             </div>
// //           )}
// //         </div>

// //         {dividendApproved && divisorApproved && (
// //           <button className="divide-button" onClick={handleDivide}>
// //             Divide
// //           </button>
// //         )}

// //         {error && <p className="error">{error}</p>}

// //         {quotient.length > 0 && (
// //           <div className="results">
// //             <h3>Quotient:</h3>
// //             <BlockMath math={generatePolynomialLatex(quotient)} />
// //             <h3>Remainder:</h3>
// //             <BlockMath math={remainder.toString()} />
// //           </div>
// //         )}
// //       </div>
      
// //       <div className="explanation-section">
// //         <h2>How to Use</h2>
// //         <ol>
// //           <li>Click "Generate Dividend" to create your dividend polynomial</li>
// //           <li>Select degree and enter coefficients or use random generation</li>
// //           <li>Click "OK" when satisfied</li>
// //           <li>Repeat the same process for divisor polynomial</li>
// //           <li>Click "Divide" to see the result</li>
// //         </ol>
// //         <p className="note">You can edit polynomials at any time by clicking the "Edit" button</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SyntheticDivisionCalculator;

// import React, { useState } from 'react';
// import { BlockMath } from 'react-katex';
// import PolynomialInputDisplay from './PolynomialInputDisplay';
// import './SyntheticDivisionCalculator.css'

// const SyntheticDivisionCalculator = () => {
//   const [dividendCoefficients, setDividendCoefficients] = useState([]);
//   const [divisorCoefficients, setDivisorCoefficients] = useState([]);
//   const [quotient, setQuotient] = useState([]);
//   const [remainder, setRemainder] = useState([]);
//   const [error, setError] = useState('');
//   const [showDividendInput, setShowDividendInput] = useState(false);
//   const [showDivisorInput, setShowDivisorInput] = useState(false);
//   const [dividendApproved, setDividendApproved] = useState(false);
//   const [divisorApproved, setDivisorApproved] = useState(false);

//   const resetAll = () => {
//     setDividendCoefficients([]);
//     setDivisorCoefficients([]);
//     setQuotient([]);
//     setRemainder([]);
//     setError('');
//     setShowDividendInput(false);
//     setShowDivisorInput(false);
//     setDividendApproved(false);
//     setDivisorApproved(false);
//   };

//   const resetDividend = () => {
//     setDividendCoefficients([]);
//     setShowDividendInput(false);
//     setDividendApproved(false);
//   };

//   const resetDivisor = () => {
//     setDivisorCoefficients([]);
//     setShowDivisorInput(false);
//     setDivisorApproved(false);
//   };

//   const generatePolynomialLatex = (coefficients) => {
//     if (!coefficients.some(coef => coef !== '')) return '';
//     let latex = '';
//     const degree = coefficients.length - 1;
    
//     for (let i = degree; i >= 0; i--) {
//       const coef = coefficients[i];
//       if (coef !== '' && coef !== '0') {
//         if (latex && coef > 0) latex += ' + ';
//         if (coef < 0) latex += ' - ';
        
//         const absCoef = Math.abs(coef);
//         if (i > 0) {
//           if (absCoef !== 1) latex += absCoef;
//           latex += 'x';
//           if (i > 1) latex += `^{${i}}`;
//         } else {
//           latex += absCoef;
//         }
//       }
//     }
//     return latex || '0';
//   };

//   const handleDivide = () => {
//     if (!dividendCoefficients.length) {
//       setError('Please input the dividend polynomial.');
//       return;
//     }

//     if (!divisorCoefficients.length) {
//       setError('Please input the divisor polynomial.');
//       return;
//     }

//     if (divisorCoefficients.length !== 2) {
//       setError('The divisor must be a polynomial of degree 1 (e.g., x - c).');
//       return;
//     }

//     setError('');
//     const divisorRoot = -divisorCoefficients[1] / divisorCoefficients[0];
//     const result = [...dividendCoefficients];
//     const quotientArray = [];
//     let current = result[0];

//     quotientArray.push(current);
//     for (let i = 1; i < result.length; i++) {
//       current = result[i] + current * divisorRoot;
//       if (i < result.length - 1) {
//         quotientArray.push(current);
//       }
//     }

//     setQuotient(quotientArray);
//     setRemainder(current);
//   };

//   return (
//     <div className="main-container">
//       <div className="content-section">
//         <div className="header-section">
//           <h1>Synthetic Division Calculator</h1>
//           <button className="reset-all-button" onClick={resetAll}>Reset All</button>
//         </div>

//         <div className="polynomial-section">
//           <div className="polynomial-row">
//             <h3>Dividend <br/> Polynomial:</h3>
//             <div className="polynomial-display">
//               {dividendCoefficients.some(c => c !== '') ? (
//                 <BlockMath math={generatePolynomialLatex(dividendCoefficients)} />
//               ) : (
//                 <span className="not-entered">Not entered yet.</span>
//               )}
//             </div>
//             <div className="button-group">
//               {!showDividendInput && !dividendApproved && (
//                 <>
//                   <button className="action-button" onClick={() => setShowDividendInput(true)}>
//                     Generate Dividend
//                   </button>
//                   <button className="reset-button" onClick={resetDividend}>Reset</button>
//                 </>
//               )}
//               {showDividendInput && !dividendApproved && (
//                 <button className="action-button" onClick={() => {
//                   setDividendApproved(true);
//                   setShowDividendInput(false);
//                 }}>
//                   OK
//                 </button>
//               )}
//               {dividendApproved && (
//                 <>
//                   <button className="edit-button" onClick={() => {
//                     setDividendApproved(false);
//                     setShowDividendInput(true);
//                   }}>
//                     Edit
//                   </button>
//                   <button className="reset-button" onClick={resetDividend}>Reset</button>
//                 </>
//               )}
//             </div>
//           </div>
          
//           {showDividendInput && (
//             <div className="input-panel">
//               <PolynomialInputDisplay
//                 isParent={false}
//                 onChange={(coefficients) => setDividendCoefficients(coefficients)}
//               />
//             </div>
//           )}
//         </div>

//         <div className="polynomial-section">
//           <div className="polynomial-row">
//             <h3>Divisor<br/> Polynomial:</h3>
//             <div className="polynomial-display">
//               {divisorCoefficients.some(c => c !== '') ? (
//                 <BlockMath math={generatePolynomialLatex(divisorCoefficients)} />
//               ) : (
//                 <span className="not-entered">Not entered yet.</span>
//               )}
//             </div>
//             <div className="button-group">
//               {!showDivisorInput && !divisorApproved && (
//                 <>
//                   <button className="action-button" onClick={() => setShowDivisorInput(true)}>
//                     Generate Divisor
//                   </button>
//                   <button className="reset-button" onClick={resetDivisor}>Reset</button>
//                 </>
//               )}
//               {showDivisorInput && !divisorApproved && (
//                 <button className="action-button" onClick={() => {
//                   setDivisorApproved(true);
//                   setShowDivisorInput(false);
//                 }}>
//                   OK
//                 </button>
//               )}
//               {divisorApproved && (
//                 <>
//                   <button className="edit-button" onClick={() => {
//                     setDivisorApproved(false);
//                     setShowDivisorInput(true);
//                   }}>
//                     Edit
//                   </button>
//                   <button className="reset-button" onClick={resetDivisor}>Reset</button>
//                 </>
//               )}
//             </div>
//           </div>
          
//           {showDivisorInput && (
//             <div className="input-panel">
//               <PolynomialInputDisplay
//                 isParent={false}
//                 onChange={(coefficients) => setDivisorCoefficients(coefficients)}
//               />
//             </div>
//           )}
//         </div>

//         {dividendApproved && divisorApproved && (
//           <button className="divide-button" onClick={handleDivide}>
//             Divide
//           </button>
//         )}

//         {error && <p className="error">{error}</p>}

//         {quotient.length > 0 && (
//           <div className="results">
//             <h3>Quotient:</h3>
//             <BlockMath math={generatePolynomialLatex(quotient)} />
//             <h3>Remainder:</h3>
//             <BlockMath math={remainder.toString()} />
//           </div>
//         )}
//       </div>
      
//       <div className="explanation-section">
//         <h2>How to Use</h2>
//         <ol>
//           <li>Click "Generate Dividend" to create your dividend polynomial</li>
//           <li>Select degree and enter coefficients or use random generation</li>
//           <li>Click "OK" when satisfied</li>
//           <li>Repeat the same process for divisor polynomial</li>
//           <li>Click "Divide" to see the result</li>
//         </ol>
//         <p className="note">You can edit polynomials at any time by clicking the "Edit" button</p>
//       </div>
//     </div>
//   );
// };

// export default SyntheticDivisionCalculator;

import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import PolynomialInputDisplay from './PolynomialInputDisplay';
import ExplanationDetails from '../ExplanationDetails';
import './SyntheticDivisionCalculator.css';

const SyntheticDivisionCalculator = () => {
  const [dividendCoefficients, setDividendCoefficients] = useState([]);
  const [divisorCoefficients, setDivisorCoefficients] = useState([]);
  const [quotient, setQuotient] = useState([]);
  const [remainder, setRemainder] = useState([]);
  const [error, setError] = useState('');
  const [showDividendInput, setShowDividendInput] = useState(false);
  const [showDivisorInput, setShowDivisorInput] = useState(false);
  const [dividendApproved, setDividendApproved] = useState(false);
  const [divisorApproved, setDivisorApproved] = useState(false);

  const instructions = [
    'Click "Generate Dividend" to create your dividend polynomial',
    'Select degree and enter coefficients or use random generation',
    'Click "OK" when satisfied',
    'Repeat the same process for divisor polynomial',
    'Click "Divide" to see the result'
  ];

  const resetAll = () => {
    setDividendCoefficients([]);
    setDivisorCoefficients([]);
    setQuotient([]);
    setRemainder([]);
    setError('');
    setShowDividendInput(false);
    setShowDivisorInput(false);
    setDividendApproved(false);
    setDivisorApproved(false);
  };

  const resetDividend = () => {
    setDividendCoefficients([]);
    setShowDividendInput(false);
    setDividendApproved(false);
  };

  const resetDivisor = () => {
    setDivisorCoefficients([]);
    setShowDivisorInput(false);
    setDivisorApproved(false);
  };

  const generatePolynomialLatex = (coefficients) => {
    if (!coefficients.some(coef => coef !== '')) return '';
    let latex = '';
    const degree = coefficients.length - 1;
    
    for (let i = degree; i >= 0; i--) {
      const coef = coefficients[i];
      if (coef !== '' && coef !== '0') {
        if (latex && coef > 0) latex += ' + ';
        if (coef < 0) latex += ' - ';
        
        const absCoef = Math.abs(coef);
        if (i > 0) {
          if (absCoef !== 1) latex += absCoef;
          latex += 'x';
          if (i > 1) latex += `^{${i}}`;
        } else {
          latex += absCoef;
        }
      }
    }
    return latex || '0';
  };

  const handleDivide = () => {
    if (!dividendCoefficients.length) {
      setError('Please input the dividend polynomial.');
      return;
    }

    if (!divisorCoefficients.length) {
      setError('Please input the divisor polynomial.');
      return;
    }

    if (divisorCoefficients.length !== 2) {
      setError('The divisor must be a polynomial of degree 1 (e.g., x - c).');
      return;
    }

    setError('');
    const divisorRoot = -divisorCoefficients[1] / divisorCoefficients[0];
    const result = [...dividendCoefficients];
    const quotientArray = [];
    let current = result[0];

    quotientArray.push(current);
    for (let i = 1; i < result.length; i++) {
      current = result[i] + current * divisorRoot;
      if (i < result.length - 1) {
        quotientArray.push(current);
      }
    }

    setQuotient(quotientArray);
    setRemainder(current);
  };

  return (
    <div className="main-container">
      <div className="content-section">
        <div className="header-section">
          {/* <h1>Synthetic Division Calculator</h1> */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ transform: 'scale(0.85)', transformOrigin: 'right center' }}>
              <ExplanationDetails 
                title="How to use calculator"
                instructions={instructions}
              />
            </div>
            <button className="reset-all-button" onClick={resetAll}>Reset All</button>
          </div>
        </div>

        <div className="polynomial-section">
          <div className="polynomial-row">
            <h3>Dividend <br/> Polynomial:</h3>
            <div className="polynomial-display">
              {dividendCoefficients.some(c => c !== '') ? (
                <BlockMath math={generatePolynomialLatex(dividendCoefficients)} />
              ) : (
                <span className="not-entered">Not entered yet.</span>
              )}
            </div>
            <div className="button-group">
              {!showDividendInput && !dividendApproved && (
                <>
                  <button className="action-button" onClick={() => setShowDividendInput(true)}>
                    Generate Dividend
                  </button>
                  <button className="reset-button" onClick={resetDividend}>Reset</button>
                </>
              )}
              {showDividendInput && !dividendApproved && (
                <button className="action-button" onClick={() => {
                  setDividendApproved(true);
                  setShowDividendInput(false);
                }}>
                  OK
                </button>
              )}
              {dividendApproved && (
                <>
                  <button className="edit-button" onClick={() => {
                    setDividendApproved(false);
                    setShowDividendInput(true);
                  }}>
                    Edit
                  </button>
                  <button className="reset-button" onClick={resetDividend}>Reset</button>
                </>
              )}
            </div>
          </div>
          
          {showDividendInput && (
            <div className="input-panel">
              <PolynomialInputDisplay
                isParent={false}
                onChange={(coefficients) => setDividendCoefficients(coefficients)}
              />
            </div>
          )}
        </div>

        <div className="polynomial-section">
          <div className="polynomial-row">
            <h3>Divisor<br/> Polynomial:</h3>
            <div className="polynomial-display">
              {divisorCoefficients.some(c => c !== '') ? (
                <BlockMath math={generatePolynomialLatex(divisorCoefficients)} />
              ) : (
                <span className="not-entered">Not entered yet.</span>
              )}
            </div>
            <div className="button-group">
              {!showDivisorInput && !divisorApproved && (
                <>
                  <button className="action-button" onClick={() => setShowDivisorInput(true)}>
                    Generate Divisor
                  </button>
                  <button className="reset-button" onClick={resetDivisor}>Reset</button>
                </>
              )}
              {showDivisorInput && !divisorApproved && (
                <button className="action-button" onClick={() => {
                  setDivisorApproved(true);
                  setShowDivisorInput(false);
                }}>
                  OK
                </button>
              )}
              {divisorApproved && (
                <>
                  <button className="edit-button" onClick={() => {
                    setDivisorApproved(false);
                    setShowDivisorInput(true);
                  }}>
                    Edit
                  </button>
                  <button className="reset-button" onClick={resetDivisor}>Reset</button>
                </>
              )}
            </div>
          </div>
          
          {showDivisorInput && (
            <div className="input-panel">
              <PolynomialInputDisplay
                isParent={false}
                onChange={(coefficients) => setDivisorCoefficients(coefficients)}
              />
            </div>
          )}
        </div>

        {dividendApproved && divisorApproved && (
          <button className="divide-button" onClick={handleDivide}>
            Divide
          </button>
        )}

        {error && <p className="error">{error}</p>}

        {quotient.length > 0 && (
          <div className="results">
            <h3>Quotient:</h3>
            <BlockMath math={generatePolynomialLatex(quotient)} />
            <h3>Remainder:</h3>
            <BlockMath math={remainder.toString()} />
          </div>
        )}
      </div>
      
      <div className="explanation-section">
        {/* Reserved for operation explanations */}
      </div>
    </div>
  );
};

export default SyntheticDivisionCalculator;