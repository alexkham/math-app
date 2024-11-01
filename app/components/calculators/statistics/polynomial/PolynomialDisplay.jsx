// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import katex from 'katex';
// // // // // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // // // // //   const [degree, setDegree] = useState(8);
// // // // // // // // // // //   const [coefficients, setCoefficients] = useState(Array(9).fill(''));
// // // // // // // // // // //   const [latexExpression, setLatexExpression] = useState('');

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     setCoefficients(Array(degree + 1).fill(''));
// // // // // // // // // // //   }, [degree]);

// // // // // // // // // // //   const handleDegreeChange = (e) => {
// // // // // // // // // // //     const newDegree = Math.max(0, Math.min(20, parseInt(e.target.value) || 0));
// // // // // // // // // // //     setDegree(newDegree);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // // // // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // // // // // // // //     const newCoefficients = [...coefficients];
// // // // // // // // // // //     newCoefficients[index] = value;
// // // // // // // // // // //     setCoefficients(newCoefficients);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleReset = () => {
// // // // // // // // // // //     setDegree(8);
// // // // // // // // // // //     setCoefficients(Array(9).fill(''));
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     let latex = '';
// // // // // // // // // // //     for (let i = degree; i >= 0; i--) {
// // // // // // // // // // //       const coef = coefficients[i] || '';
// // // // // // // // // // //       if (coef && coef !== '0') {
// // // // // // // // // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // // // // // // // // //         if (coef === '-') latex += ' - ';
// // // // // // // // // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // // // // // // // // //         else if (coef === '-1') latex += '-';
// // // // // // // // // // //         if (i > 0) {
// // // // // // // // // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // // // // // // // // //           latex += 'x';
// // // // // // // // // // //           if (i > 1) latex += `^{${i}}`;
// // // // // // // // // // //         }
// // // // // // // // // // //       }
// // // // // // // // // // //     }
// // // // // // // // // // //     setLatexExpression(latex || '0');
// // // // // // // // // // //   }, [coefficients, degree]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // // // // // // // // //       throwOnError: false,
// // // // // // // // // // //       displayMode: true
// // // // // // // // // // //     });
// // // // // // // // // // //   }, [latexExpression]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // // // // // // //       <h2 style={{ textAlign: 'center' }}>Polynomial Input and Display</h2>
// // // // // // // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // // // // // // //         <label>
// // // // // // // // // // //           Polynomial Degree:
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="number"
// // // // // // // // // // //             value={degree}
// // // // // // // // // // //             onChange={handleDegreeChange}
// // // // // // // // // // //             min="0"
// // // // // // // // // // //             max="20"
// // // // // // // // // // //             style={{ marginLeft: '10px', width: '60px' }}
// // // // // // // // // // //           />
// // // // // // // // // // //         </label>
// // // // // // // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
// // // // // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // // // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // // // // // // //             <label style={{ marginRight: '10px', minWidth: '30px' }}>
// // // // // // // // // // //               x<sup>{power}</sup>:
// // // // // // // // // // //             </label>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="text"
// // // // // // // // // // //               value={coefficients[power] || ''}
// // // // // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // // // // //               placeholder={`Coefficient for x^${power}`}
// // // // // // // // // // //               style={{ width: '100%', padding: '5px' }}
// // // // // // // // // // //               inputMode="numeric"
// // // // // // // // // // //               pattern="-?\d*"
// // // // // // // // // // //             />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <h3>Polynomial:</h3>
// // // // // // // // // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default PolynomialInputDisplay;
// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import katex from 'katex';
// // // // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // // // //   const [degree, setDegree] = useState(8);
// // // // // // // // // //   const [coefficients, setCoefficients] = useState(Array(9).fill(''));
// // // // // // // // // //   const [latexExpression, setLatexExpression] = useState('');

// // // // // // // // // //   const handleDegreeChange = (e) => {
// // // // // // // // // //     const newDegree = Math.max(0, Math.min(20, parseInt(e.target.value) || 0));
// // // // // // // // // //     setDegree(newDegree);
// // // // // // // // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // // // // // // // //   };

// // // // // // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // // // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // // // // // // //     const newCoefficients = [...coefficients];
// // // // // // // // // //     newCoefficients[index] = value;
// // // // // // // // // //     setCoefficients(newCoefficients);
// // // // // // // // // //   };

// // // // // // // // // //   const handleReset = () => {
// // // // // // // // // //     setDegree(8);
// // // // // // // // // //     setCoefficients(Array(9).fill(''));
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     let latex = '';
// // // // // // // // // //     for (let i = degree; i >= 0; i--) {
// // // // // // // // // //       const coef = coefficients[i] || '';
// // // // // // // // // //       if (coef && coef !== '0') {
// // // // // // // // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // // // // // // // //         if (coef === '-') latex += ' - ';
// // // // // // // // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // // // // // // // //         else if (coef === '-1') latex += '-';
// // // // // // // // // //         if (i > 0) {
// // // // // // // // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // // // // // // // //           latex += 'x';
// // // // // // // // // //           if (i > 1) latex += `^{${i}}`;
// // // // // // // // // //         }
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //     setLatexExpression(latex || '0');
// // // // // // // // // //   }, [coefficients, degree]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // // // // // // // //       throwOnError: false,
// // // // // // // // // //       displayMode: true
// // // // // // // // // //     });
// // // // // // // // // //   }, [latexExpression]);

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // // // // // //       <h2 style={{ textAlign: 'center' }}>Polynomial Input and Display</h2>
// // // // // // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // // // // // //         <label>
// // // // // // // // // //           Polynomial Degree:
// // // // // // // // // //           <input
// // // // // // // // // //             type="number"
// // // // // // // // // //             value={degree}
// // // // // // // // // //             onChange={handleDegreeChange}
// // // // // // // // // //             min="0"
// // // // // // // // // //             max="20"
// // // // // // // // // //             style={{ marginLeft: '10px', width: '60px' }}
// // // // // // // // // //           />
// // // // // // // // // //         </label>
// // // // // // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // // // // // //       </div>
// // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
// // // // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // // // // // //             <label style={{ marginRight: '10px', minWidth: '30px' }}>
// // // // // // // // // //               x<sup>{power}</sup>:
// // // // // // // // // //             </label>
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               value={coefficients[power] || ''}
// // // // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // // // //               placeholder={`Coefficient for x^${power}`}
// // // // // // // // // //               style={{ width: '100%', padding: '5px' }}
// // // // // // // // // //               inputMode="numeric"
// // // // // // // // // //               pattern="-?\d*"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //       <div>
// // // // // // // // // //         <h3>Polynomial:</h3>
// // // // // // // // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default PolynomialInputDisplay;
// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import katex from 'katex';
// // // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // // //   const [degree, setDegree] = useState(2);
// // // // // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // // // // //   const [latexExpression, setLatexExpression] = useState('');

// // // // // // // // //   const handleDegreeChange = (newDegree) => {
// // // // // // // // //     setDegree(newDegree);
// // // // // // // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // // // // // // //   };

// // // // // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // // // // // //     const newCoefficients = [...coefficients];
// // // // // // // // //     newCoefficients[index] = value;
// // // // // // // // //     setCoefficients(newCoefficients);
// // // // // // // // //   };

// // // // // // // // //   const handleReset = () => {
// // // // // // // // //     setDegree(2);
// // // // // // // // //     setCoefficients(Array(3).fill(''));
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     let latex = '';
// // // // // // // // //     for (let i = degree; i >= 0; i--) {
// // // // // // // // //       const coef = coefficients[i] || '';
// // // // // // // // //       if (coef && coef !== '0') {
// // // // // // // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // // // // // // //         if (coef === '-') latex += ' - ';
// // // // // // // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // // // // // // //         else if (coef === '-1') latex += '-';
// // // // // // // // //         if (i > 0) {
// // // // // // // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // // // // // // //           latex += 'x';
// // // // // // // // //           if (i > 1) latex += `^{${i}}`;
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //     setLatexExpression(latex || '0');
// // // // // // // // //   }, [coefficients, degree]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // // // // // // //       throwOnError: false,
// // // // // // // // //       displayMode: true
// // // // // // // // //     });
// // // // // // // // //   }, [latexExpression]);

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // // // // //       <h2 style={{ textAlign: 'center' }}>Polynomial Input and Display</h2>
// // // // // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // // // // //         <div>
// // // // // // // // //           Polynomial Degree:
// // // // // // // // //           {[...Array(9)].map((_, i) => (
// // // // // // // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // // // // // // //               <input
// // // // // // // // //                 type="radio"
// // // // // // // // //                 value={i + 2}
// // // // // // // // //                 checked={degree === i + 2}
// // // // // // // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // // // // // // //               />
// // // // // // // // //               {i + 2}
// // // // // // // // //             </label>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // // // // //       </div>
// // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
// // // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // // // // //             <label style={{ marginRight: '10px', minWidth: '30px' }}>
// // // // // // // // //               x<sup>{power}</sup>:
// // // // // // // // //             </label>
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               value={coefficients[power] || ''}
// // // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // // //               placeholder={`Coefficient for x^${power}`}
// // // // // // // // //               style={{ width: '100%', padding: '5px' }}
// // // // // // // // //               inputMode="numeric"
// // // // // // // // //               pattern="-?\d*"
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //       <div>
// // // // // // // // //         <h3>Polynomial:</h3>
// // // // // // // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PolynomialInputDisplay;

// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import katex from 'katex';
// // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // const superscriptNotations = [
// // // // // // // //   "x⁰",
// // // // // // // //   "x¹",
// // // // // // // //   "x²",
// // // // // // // //   "x³",
// // // // // // // //   "x⁴",
// // // // // // // //   "x⁵",
// // // // // // // //   "x⁶",
// // // // // // // //   "x⁷",
// // // // // // // //   "x⁸",
// // // // // // // //   "x⁹",
// // // // // // // //   "x¹⁰"
// // // // // // // // ];

// // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // //   const [degree, setDegree] = useState(2);
// // // // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // // // //   const [latexExpression, setLatexExpression] = useState('');

// // // // // // // //   const handleDegreeChange = (newDegree) => {
// // // // // // // //     setDegree(newDegree);
// // // // // // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // // // // // //   };

// // // // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // // // // //     const newCoefficients = [...coefficients];
// // // // // // // //     newCoefficients[index] = value;
// // // // // // // //     setCoefficients(newCoefficients);
// // // // // // // //   };

// // // // // // // //   const handleReset = () => {
// // // // // // // //     setDegree(2);
// // // // // // // //     setCoefficients(Array(3).fill(''));
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     let latex = '';
// // // // // // // //     for (let i = degree; i >= 0; i--) {
// // // // // // // //       const coef = coefficients[i] || '';
// // // // // // // //       if (coef && coef !== '0') {
// // // // // // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // // // // // //         if (coef === '-') latex += ' - ';
// // // // // // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // // // // // //         else if (coef === '-1') latex += '-';
// // // // // // // //         if (i > 0) {
// // // // // // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // // // // // //           latex += 'x';
// // // // // // // //           if (i > 1) latex += `^{${i}}`;
// // // // // // // //         }
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //     setLatexExpression(latex || '0');
// // // // // // // //   }, [coefficients, degree]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // // // // // //       throwOnError: false,
// // // // // // // //       displayMode: true
// // // // // // // //     });
// // // // // // // //   }, [latexExpression]);

// // // // // // // //   return (
// // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // // // //       <h2 style={{ textAlign: 'center' }}>Polynomial Input and Display</h2>
// // // // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // // // //         <div>
// // // // // // // //           Polynomial Degree:
// // // // // // // //           {[...Array(9)].map((_, i) => (
// // // // // // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // // // // // //               <input
// // // // // // // //                 type="radio"
// // // // // // // //                 value={i + 2}
// // // // // // // //                 checked={degree === i + 2}
// // // // // // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // // // // // //               />
// // // // // // // //               {i + 2}
// // // // // // // //             </label>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // // // //       </div>
// // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
// // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // // // //             <label style={{ marginRight: '10px', minWidth: '30px' }}>
// // // // // // // //               x<sup>{power}</sup>:
// // // // // // // //             </label>
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               value={coefficients[power] || ''}
// // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // //               placeholder={`Coefficient for ${superscriptNotations[power]}`}
// // // // // // // //               style={{ width: '100%', padding: '5px' }}
// // // // // // // //               inputMode="numeric"
// // // // // // // //               pattern="-?\d*"
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       <div>
// // // // // // // //         <h3>Polynomial:</h3>
// // // // // // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PolynomialInputDisplay;
// // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // import katex from 'katex';
// // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // const superscriptNotations = [
// // // // // // //   "x⁰",
// // // // // // //   "x¹",
// // // // // // //   "x²",
// // // // // // //   "x³",
// // // // // // //   "x⁴",
// // // // // // //   "x⁵",
// // // // // // //   "x⁶",
// // // // // // //   "x⁷",
// // // // // // //   "x⁸",
// // // // // // //   "x⁹",
// // // // // // //   "x¹⁰"
// // // // // // // ];

// // // // // // // const PolynomialInputDisplay = () => {
// // // // // // //   const [degree, setDegree] = useState(2);
// // // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // // //   const [latexExpression, setLatexExpression] = useState('');
// // // // // // //   const labelRefs = useRef([]);

// // // // // // //   const handleDegreeChange = (newDegree) => {
// // // // // // //     setDegree(newDegree);
// // // // // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // // // // //   };

// // // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // // // //     const newCoefficients = [...coefficients];
// // // // // // //     newCoefficients[index] = value;
// // // // // // //     setCoefficients(newCoefficients);
// // // // // // //   };

// // // // // // //   const handleReset = () => {
// // // // // // //     setDegree(2);
// // // // // // //     setCoefficients(Array(3).fill(''));
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     let latex = '';
// // // // // // //     for (let i = degree; i >= 0; i--) {
// // // // // // //       const coef = coefficients[i] || '';
// // // // // // //       if (coef && coef !== '0') {
// // // // // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // // // // //         if (coef === '-') latex += ' - ';
// // // // // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // // // // //         else if (coef === '-1') latex += '-';
// // // // // // //         if (i > 0) {
// // // // // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // // // // //           latex += 'x';
// // // // // // //           if (i > 1) latex += `^{${i}}`;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
// // // // // // //     setLatexExpression(latex || '0');
// // // // // // //   }, [coefficients, degree]);

// // // // // // //   useEffect(() => {
// // // // // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // // // // //       throwOnError: false,
// // // // // // //       displayMode: true
// // // // // // //     });

// // // // // // //     labelRefs.current.forEach((ref, index) => {
// // // // // // //       if (ref) {
// // // // // // //         katex.render(`x^{${index}}:`, ref, {
// // // // // // //           throwOnError: false
// // // // // // //         });
// // // // // // //       }
// // // // // // //     });
// // // // // // //   }, [latexExpression, degree]);

// // // // // // //   return (
// // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // // //       <h2 style={{ textAlign: 'center' }}>Polynomial Input and Display</h2>
// // // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // // //         <div>
// // // // // // //           Polynomial Degree:
// // // // // // //           {[...Array(9)].map((_, i) => (
// // // // // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // // // // //               <input
// // // // // // //                 type="radio"
// // // // // // //                 value={i + 2}
// // // // // // //                 checked={degree === i + 2}
// // // // // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // // // // //               />
// // // // // // //               {i + 2}
// // // // // // //             </label>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // // //       </div>
// // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
// // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // // //             <label 
// // // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // // //               style={{ marginRight: '10px', minWidth: '30px' }}
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               value={coefficients[power] || ''}
// // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // //               placeholder={`Coefficient for ${superscriptNotations[power]}`}
// // // // // // //               style={{ width: '100%', padding: '5px' }}
// // // // // // //               inputMode="numeric"
// // // // // // //               pattern="-?\d*"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //       <div>
// // // // // // //         <h3>Polynomial:</h3>
// // // // // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PolynomialInputDisplay;
// // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // import katex from 'katex';
// // // // // // import 'katex/dist/katex.min.css';

// // // // // // const superscriptNotations = [
// // // // // //   "x⁰",
// // // // // //   "x¹",
// // // // // //   "x²",
// // // // // //   "x³",
// // // // // //   "x⁴",
// // // // // //   "x⁵",
// // // // // //   "x⁶",
// // // // // //   "x⁷",
// // // // // //   "x⁸",
// // // // // //   "x⁹",
// // // // // //   "x¹⁰"
// // // // // // ];

// // // // // // const PolynomialInputDisplay = () => {
// // // // // //   const [degree, setDegree] = useState(2);
// // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // //   const [latexExpression, setLatexExpression] = useState('');
// // // // // //   const labelRefs = useRef([]);

// // // // // //   const handleDegreeChange = (newDegree) => {
// // // // // //     setDegree(newDegree);
// // // // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // // // //   };

// // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // // //     const newCoefficients = [...coefficients];
// // // // // //     newCoefficients[index] = value;
// // // // // //     setCoefficients(newCoefficients);
// // // // // //   };

// // // // // //   const handleReset = () => {
// // // // // //     setDegree(2);
// // // // // //     setCoefficients(Array(3).fill(''));
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     let latex = '';
// // // // // //     for (let i = degree; i >= 0; i--) {
// // // // // //       const coef = coefficients[i] || '';
// // // // // //       if (coef && coef !== '0') {
// // // // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // // // //         if (coef === '-') latex += ' - ';
// // // // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // // // //         else if (coef === '-1') latex += '-';
// // // // // //         if (i > 0) {
// // // // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // // // //           latex += 'x';
// // // // // //           if (i > 1) latex += `^{${i}}`;
// // // // // //         }
// // // // // //       }
// // // // // //     }
// // // // // //     setLatexExpression(latex || '0');
// // // // // //   }, [coefficients, degree]);

// // // // // //   useEffect(() => {
// // // // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // // // //       throwOnError: false,
// // // // // //       displayMode: true
// // // // // //     });

// // // // // //     labelRefs.current.forEach((ref, index) => {
// // // // // //       if (ref) {
// // // // // //         katex.render(`x^{${index}}`, ref, {
// // // // // //           throwOnError: false
// // // // // //         });
// // // // // //       }
// // // // // //     });
// // // // // //   }, [latexExpression, degree]);

// // // // // //   return (
// // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // //         <div>
// // // // // //           Polynomial Degree:
// // // // // //           {[...Array(9)].map((_, i) => (
// // // // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // // // //               <input
// // // // // //                 type="radio"
// // // // // //                 value={i + 2}
// // // // // //                 checked={degree === i + 2}
// // // // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // // // //               />
// // // // // //               {i + 2}
// // // // // //             </label>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // //       </div>
// // // // // //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
// // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={coefficients[power] || ''}
// // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // //               placeholder={`Coefficient for ${superscriptNotations[power]}`}
// // // // // //               style={{ width: '100%', padding: '5px', marginRight: '10px' }}
// // // // // //               inputMode="numeric"
// // // // // //               pattern="-?\d*"
// // // // // //             />
// // // // // //             <label 
// // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // //               style={{ minWidth: '30px' }}
// // // // // //             />
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //       <div>
// // // // // //         <h3>Polynomial:</h3>
// // // // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PolynomialInputDisplay;
// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import katex from 'katex';
// // // // // import 'katex/dist/katex.min.css';

// // // // // const superscriptNotations = [
// // // // //   "x⁰",
// // // // //   "x¹",
// // // // //   "x²",
// // // // //   "x³",
// // // // //   "x⁴",
// // // // //   "x⁵",
// // // // //   "x⁶",
// // // // //   "x⁷",
// // // // //   "x⁸",
// // // // //   "x⁹",
// // // // //   "x¹⁰"
// // // // // ];

// // // // // const PolynomialInputDisplay = () => {
// // // // //   const [degree, setDegree] = useState(2);
// // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // //   const [latexExpression, setLatexExpression] = useState('');
// // // // //   const labelRefs = useRef([]);

// // // // //   const handleDegreeChange = (newDegree) => {
// // // // //     setDegree(newDegree);
// // // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // // //   };

// // // // //   const handleCoefficientChange = (index, value) => {
// // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // //     const newCoefficients = [...coefficients];
// // // // //     newCoefficients[index] = value;
// // // // //     setCoefficients(newCoefficients);
// // // // //   };

// // // // //   const handleReset = () => {
// // // // //     setDegree(2);
// // // // //     setCoefficients(Array(3).fill(''));
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     let latex = '';
// // // // //     for (let i = degree; i >= 0; i--) {
// // // // //       const coef = coefficients[i] || '';
// // // // //       if (coef && coef !== '0') {
// // // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // // //         if (coef === '-') latex += ' - ';
// // // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // // //         else if (coef === '-1') latex += '-';
// // // // //         if (i > 0) {
// // // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // // //           latex += 'x';
// // // // //           if (i > 1) latex += `^{${i}}`;
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //     setLatexExpression(latex || '0');
// // // // //   }, [coefficients, degree]);

// // // // //   useEffect(() => {
// // // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // // //       throwOnError: false,
// // // // //       displayMode: true
// // // // //     });

// // // // //     labelRefs.current.forEach((ref, index) => {
// // // // //       if (ref) {
// // // // //         katex.render(`x^{${index}}`, ref, {
// // // // //           throwOnError: false
// // // // //         });
// // // // //       }
// // // // //     });
// // // // //   }, [latexExpression, degree]);

// // // // //   return (
// // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // //         <div>
// // // // //           Polynomial Degree:
// // // // //           {[...Array(9)].map((_, i) => (
// // // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // // //               <input
// // // // //                 type="radio"
// // // // //                 value={i + 2}
// // // // //                 checked={degree === i + 2}
// // // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // // //               />
// // // // //               {i + 2}
// // // // //             </label>
// // // // //           ))}
// // // // //         </div>
// // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // //       </div>
// // // // //       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '10px', marginBottom: '20px', overflowX: 'auto' }}>
// // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // //           <div key={power} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={coefficients[power] || ''}
// // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // //               placeholder={superscriptNotations[power]}
// // // // //               style={{ width: '50px', padding: '5px', marginBottom: '5px' }}
// // // // //               inputMode="numeric"
// // // // //               pattern="-?\d*"
// // // // //             />
// // // // //             <label 
// // // // //               ref={el => labelRefs.current[power] = el}
// // // // //               style={{ minWidth: '30px' }}
// // // // //             />
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div>
// // // // //         <h3>Polynomial:</h3>
// // // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PolynomialInputDisplay;
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import katex from 'katex';
// // // // import 'katex/dist/katex.min.css';

// // // // const superscriptNotations = [
// // // //   "x⁰",
// // // //   "x¹",
// // // //   "x²",
// // // //   "x³",
// // // //   "x⁴",
// // // //   "x⁵",
// // // //   "x⁶",
// // // //   "x⁷",
// // // //   "x⁸",
// // // //   "x⁹",
// // // //   "x¹⁰"
// // // // ];

// // // // const PolynomialInputDisplay = () => {
// // // //   const [degree, setDegree] = useState(2);
// // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // //   const [latexExpression, setLatexExpression] = useState('');
// // // //   const labelRefs = useRef([]);

// // // //   const handleDegreeChange = (newDegree) => {
// // // //     setDegree(newDegree);
// // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // //   };

// // // //   const handleCoefficientChange = (index, value) => {
// // // //     if (!/^-?\d*$/.test(value)) return;
// // // //     const newCoefficients = [...coefficients];
// // // //     newCoefficients[index] = value;
// // // //     setCoefficients(newCoefficients);
// // // //   };

// // // //   const handleReset = () => {
// // // //     setDegree(2);
// // // //     setCoefficients(Array(3).fill(''));
// // // //   };

// // // //   useEffect(() => {
// // // //     let latex = '';
// // // //     for (let i = degree; i >= 0; i--) {
// // // //       const coef = coefficients[i] || '';
// // // //       if (coef && coef !== '0') {
// // // //         if (latex && coef[0] !== '-') latex += ' + ';
// // // //         if (coef === '-') latex += ' - ';
// // // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // // //         else if (coef === '-1') latex += '-';
// // // //         if (i > 0) {
// // // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // // //           latex += 'x';
// // // //           if (i > 1) latex += `^{${i}}`;
// // // //         }
// // // //       }
// // // //     }
// // // //     setLatexExpression(latex || '0');
// // // //   }, [coefficients, degree]);

// // // //   useEffect(() => {
// // // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // // //       throwOnError: false,
// // // //       displayMode: true
// // // //     });

// // // //     labelRefs.current.forEach((ref, index) => {
// // // //       if (ref) {
// // // //         katex.render(`x^{${index}}`, ref, {
// // // //           throwOnError: false
// // // //         });
// // // //       }
// // // //     });
// // // //   }, [latexExpression, degree]);

// // // //   return (
// // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // //         <div>
// // // //           Polynomial Degree:
// // // //           {[...Array(9)].map((_, i) => (
// // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // //               <input
// // // //                 type="radio"
// // // //                 value={i + 2}
// // // //                 checked={degree === i + 2}
// // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // //               />
// // // //               {i + 2}
// // // //             </label>
// // // //           ))}
// // // //         </div>
// // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // //       </div>
// // // //       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto' }}>
// // // //         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
// // // //           <div key={power} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // //             <input
// // // //               type="text"
// // // //               value={coefficients[power] || ''}
// // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // //               placeholder={superscriptNotations[power]}
// // // //               style={{ width: '50px', padding: '5px', marginBottom: '5px' }}
// // // //               inputMode="numeric"
// // // //               pattern="-?\d*"
// // // //             />
// // // //             <label 
// // // //               ref={el => labelRefs.current[power] = el}
// // // //               style={{ minWidth: '30px' }}
// // // //             />
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //       <div>
// // // //         <h3>Polynomial:</h3>
// // // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PolynomialInputDisplay;
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import katex from 'katex';
// // // import 'katex/dist/katex.min.css';

// // // const superscriptNotations = [
// // //   "x⁰", "x¹", "x²", "x³", "x⁴", "x⁵", "x⁶", "x⁷", "x⁸", "x⁹", "x¹⁰"
// // // ];

// // // const PolynomialInputDisplay = () => {
// // //   const [degree, setDegree] = useState(2);
// // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // //   const [latexExpression, setLatexExpression] = useState('');
// // //   const labelRefs = useRef([]);

// // //   const handleDegreeChange = (newDegree) => {
// // //     setDegree(newDegree);
// // //     setCoefficients(Array(newDegree + 1).fill(''));
// // //   };

// // //   const handleCoefficientChange = (index, value) => {
// // //     if (!/^-?\d*$/.test(value)) return;
// // //     const newCoefficients = [...coefficients];
// // //     newCoefficients[index] = value;
// // //     setCoefficients(newCoefficients);
// // //   };

// // //   const handleReset = () => {
// // //     setDegree(2);
// // //     setCoefficients(Array(3).fill(''));
// // //   };

// // //   useEffect(() => {
// // //     let latex = '';
// // //     for (let i = degree; i >= 0; i--) {
// // //       const coef = coefficients[i] || '';
// // //       if (coef && coef !== '0') {
// // //         if (latex && coef[0] !== '-') latex += ' + ';
// // //         if (coef === '-') latex += ' - ';
// // //         else if (coef !== '1' && coef !== '-1') latex += coef;
// // //         else if (coef === '-1') latex += '-';
// // //         if (i > 0) {
// // //           if (coef !== '1' && coef !== '-1') latex += ' ';
// // //           latex += 'x';
// // //           if (i > 1) latex += `^{${i}}`;
// // //         }
// // //       }
// // //     }
// // //     setLatexExpression(latex || '0');
// // //   }, [coefficients, degree]);

// // //   useEffect(() => {
// // //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// // //       throwOnError: false,
// // //       displayMode: true
// // //     });

// // //     labelRefs.current.forEach((ref, index) => {
// // //       if (ref) {
// // //         katex.render(`x^{${index}}`, ref, {
// // //           throwOnError: false
// // //         });
// // //       }
// // //     });
// // //   }, [latexExpression, degree]);

// // //   return (
// // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // //         <div>
// // //           Polynomial Degree:
// // //           {[...Array(9)].map((_, i) => (
// // //             <label key={i} style={{ marginLeft: '10px' }}>
// // //               <input
// // //                 type="radio"
// // //                 value={i + 2}
// // //                 checked={degree === i + 2}
// // //                 onChange={() => handleDegreeChange(i + 2)}
// // //               />
// // //               {i + 2}
// // //             </label>
// // //           ))}
// // //         </div>
// // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // //       </div>
// // //       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '10px', marginBottom: '20px', overflowX: 'auto' }}>
// // //         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
// // //           <div key={power} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // //             <input
// // //               type="text"
// // //               value={coefficients[power] || ''}
// // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // //               placeholder={superscriptNotations[power]}
// // //               style={{ width: '50px', padding: '5px', marginBottom: '5px' }}
// // //               inputMode="numeric"
// // //               pattern="-?\d*"
// // //             />
// // //             <label 
// // //               ref={el => labelRefs.current[power] = el}
// // //               style={{ minWidth: '30px' }}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div>
// // //         <h3>Polynomial:</h3>
// // //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PolynomialInputDisplay;
// // import React, { useState, useEffect, useRef } from 'react';
// // import katex from 'katex';
// // import 'katex/dist/katex.min.css';

// // const PolynomialInputDisplay = () => {
// //   const [degree, setDegree] = useState(2);
// //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// //   const [latexExpression, setLatexExpression] = useState('');
// //   const labelRefs = useRef([]);

// //   const handleDegreeChange = (newDegree) => {
// //     setDegree(newDegree);
// //     setCoefficients(Array(newDegree + 1).fill(''));
// //   };

// //   const handleCoefficientChange = (index, value) => {
// //     if (!/^-?\d*$/.test(value)) return;
// //     const newCoefficients = [...coefficients];
// //     newCoefficients[index] = value;
// //     setCoefficients(newCoefficients);
// //   };

// //   const handleReset = () => {
// //     setDegree(2);
// //     setCoefficients(Array(3).fill(''));
// //   };

// //   useEffect(() => {
// //     let latex = '';
// //     for (let i = degree; i >= 0; i--) {
// //       const coef = coefficients[i] || '';
// //       if (coef && coef !== '0') {
// //         if (latex && coef[0] !== '-') latex += ' + ';
// //         if (coef === '-') latex += ' - ';
// //         else if (coef !== '1' && coef !== '-1') latex += coef;
// //         else if (coef === '-1') latex += '-';
// //         if (i > 0) {
// //           if (coef !== '1' && coef !== '-1') latex += ' ';
// //           latex += 'x';
// //           if (i > 1) latex += `^{${i}}`;
// //         }
// //       }
// //     }
// //     setLatexExpression(latex || '0');
// //   }, [coefficients, degree]);

// //   useEffect(() => {
// //     katex.render(latexExpression, document.getElementById('polynomial-display'), {
// //       throwOnError: false,
// //       displayMode: true
// //     });

// //     labelRefs.current.forEach((ref, index) => {
// //       if (ref) {
// //         katex.render(`x^{${index}}`, ref, {
// //           throwOnError: false
// //         });
// //       }
// //     });
// //   }, [latexExpression, degree]);

// //   return (
// //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
// //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //         <div>
// //           Polynomial Degree:
// //           {[...Array(9)].map((_, i) => (
// //             <label key={i} style={{ marginLeft: '10px' }}>
// //               <input
// //                 type="radio"
// //                 value={i + 2}
// //                 checked={degree === i + 2}
// //                 onChange={() => handleDegreeChange(i + 2)}
// //               />
// //               {i + 2}
// //             </label>
// //           ))}
// //         </div>
// //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// //       </div>
// //       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '5px', marginBottom: '20px' }}>
// //         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
// //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// //             <input
// //               type="text"
// //               value={coefficients[power] || ''}
// //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// //               style={{ width: '40px', padding: '5px', marginRight: '2px' }}
// //               inputMode="numeric"
// //               pattern="-?\d*"
// //             />
// //             <label 
// //               ref={el => labelRefs.current[power] = el}
// //               style={{ fontWeight: 'bold', fontSize: '18px' }}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //       <div>
// //         <h3>Polynomial:</h3>
// //         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PolynomialInputDisplay;
// import React, { useState, useEffect, useRef } from 'react';
// import katex from 'katex';
// import 'katex/dist/katex.min.css';

// const superscriptNotations = [
//   "x⁰",
//   "x¹",
//   "x²",
//   "x³",
//   "x⁴",
//   "x⁵",
//   "x⁶",
//   "x⁷",
//   "x⁸",
//   "x⁹",
//   "x¹⁰"
// ];

// const PolynomialInputDisplay = () => {
//   const [degree, setDegree] = useState(2);
//   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
//   const [latexExpression, setLatexExpression] = useState('');
//   const labelRefs = useRef([]);

//   const handleDegreeChange = (newDegree) => {
//     setDegree(newDegree);
//     setCoefficients(Array(newDegree + 1).fill(''));
//   };

//   const handleCoefficientChange = (index, value) => {
//     if (!/^-?\d*$/.test(value)) return;
//     const newCoefficients = [...coefficients];
//     newCoefficients[index] = value;
//     setCoefficients(newCoefficients);
//   };

//   const handleReset = () => {
//     setDegree(2);
//     setCoefficients(Array(3).fill(''));
//   };

//   useEffect(() => {
//     let latex = '';
//     for (let i = degree; i >= 0; i--) {
//       const coef = coefficients[i] || '';
//       if (coef && coef !== '0') {
//         if (latex && coef[0] !== '-') latex += ' + ';
//         if (coef === '-') latex += ' - ';
//         else if (coef !== '1' && coef !== '-1') latex += coef;
//         else if (coef === '-1') latex += '-';
//         if (i > 0) {
//           if (coef !== '1' && coef !== '-1') latex += ' ';
//           latex += 'x';
//           if (i > 1) latex += `^{${i}}`;
//         }
//       }
//     }
//     setLatexExpression(latex || '0');
//   }, [coefficients, degree]);

//   useEffect(() => {
//     katex.render(latexExpression, document.getElementById('polynomial-display'), {
//       throwOnError: false,
//       displayMode: true
//     });

//     labelRefs.current.forEach((ref, index) => {
//       if (ref) {
//         katex.render(`x^{${index}}`, ref, {
//           throwOnError: false
//         });
//       }
//     });
//   }, [latexExpression, degree]);

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
//       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div>
//           Polynomial Degree:
//           {[...Array(9)].map((_, i) => (
//             <label key={i} style={{ marginLeft: '10px' }}>
//               <input
//                 type="radio"
//                 value={i + 2}
//                 checked={degree === i + 2}
//                 onChange={() => handleDegreeChange(i + 2)}
//               />
//               {i + 2}
//             </label>
//           ))}
//         </div>
//         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '5px', marginBottom: '20px' }}>
//         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
//           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               value={coefficients[power] || ''}
//               onChange={(e) => handleCoefficientChange(power, e.target.value)}
//               placeholder={superscriptNotations[power]}
//               style={{ width: '40px', padding: '5px', marginRight: '2px' }}
//               inputMode="numeric"
//               pattern="-?\d*"
//             />
//             <label 
//               ref={el => labelRefs.current[power] = el}
//               style={{ fontWeight: 'bold', fontSize: '18px' }}
//             />
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3>Polynomial:</h3>
//         <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
//       </div>
//     </div>
//   );
// };

// export default PolynomialInputDisplay;
import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const superscriptNotations = [
  "x⁰", "x¹", "x²", "x³", "x⁴", "x⁵", "x⁶", "x⁷", "x⁸", "x⁹", "x¹⁰"
];

const PolynomialInputDisplay = () => {
  const [degree, setDegree] = useState(2);
  const [coefficients, setCoefficients] = useState(Array(3).fill(''));
  const [latexExpression, setLatexExpression] = useState('');
  const labelRefs = useRef([]);

  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
    setCoefficients(Array(newDegree + 1).fill(''));
  };

  const handleCoefficientChange = (index, value) => {
    if (!/^-?\d*$/.test(value)) return;
    const newCoefficients = [...coefficients];
    newCoefficients[index] = value;
    setCoefficients(newCoefficients);
  };

  const handleReset = () => {
    setDegree(2);
    setCoefficients(Array(3).fill(''));
  };

  useEffect(() => {
    let latex = '';
    for (let i = degree; i >= 0; i--) {
      const coef = coefficients[i] || '';
      if (coef && coef !== '0') {
        if (latex && coef[0] !== '-') latex += ' + ';
        if (coef === '-') latex += ' - ';
        else if (coef !== '1' && coef !== '-1') latex += coef;
        else if (coef === '-1') latex += '-';
        if (i > 0) {
          if (coef !== '1' && coef !== '-1') latex += ' ';
          latex += 'x';
          if (i > 1) latex += `^{${i}}`;
        }
      }
    }
    setLatexExpression(latex || '0');
  }, [coefficients, degree]);

  useEffect(() => {
    katex.render(latexExpression, document.getElementById('polynomial-display'), {
      throwOnError: false,
      displayMode: true
    });

    labelRefs.current.forEach((ref, index) => {
      if (ref) {
        katex.render(`x^{${index}}`, ref, {
          throwOnError: false
        });
      }
    });
  }, [latexExpression, degree]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        Polynomial Degree:
        {[...Array(9)].map((_, i) => (
          <label key={i} style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              value={i + 2}
              checked={degree === i + 2}
              onChange={() => handleDegreeChange(i + 2)}
            />
            {i + 2}
          </label>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={handleReset} style={{ padding: '5px 10px', marginRight: '15px' }}>Reset</button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
            <React.Fragment key={power}>
              {index > 0 && <span style={{ margin: '0 5px', fontSize: '18px', fontWeight: 'bold' }}>+</span>}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  value={coefficients[power] || ''}
                  onChange={(e) => handleCoefficientChange(power, e.target.value)}
                  // placeholder={superscriptNotations[power]}
                  style={{ width: '40px', padding: '5px', marginRight: '2px' }}
                  inputMode="numeric"
                  pattern="-?\d*"
                />
                <label 
                  ref={el => labelRefs.current[power] = el}
                  style={{ fontWeight: 'bold', fontSize: '18px' }}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        <h3>Polynomial:</h3>
        <div id="polynomial-display" style={{ fontSize: '1.2em', marginTop: '10px' }}></div>
      </div>
    </div>
  );
};

export default PolynomialInputDisplay;