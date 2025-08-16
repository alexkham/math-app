

// // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // import katex from 'katex';
// // // // // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // // // // const superscriptNotations = [
// // // // // // // // // // //   "x⁰",
// // // // // // // // // // //   "x¹",
// // // // // // // // // // //   "x²",
// // // // // // // // // // //   "x³",
// // // // // // // // // // //   "x⁴",
// // // // // // // // // // //   "x⁵",
// // // // // // // // // // //   "x⁶",
// // // // // // // // // // //   "x⁷",
// // // // // // // // // // //   "x⁸",
// // // // // // // // // // //   "x⁹",
// // // // // // // // // // //   "x¹⁰"
// // // // // // // // // // // ];

// // // // // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // // // // //   const [degree, setDegree] = useState(2);
// // // // // // // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // // // // // // //   const [latexExpression, setLatexExpression] = useState('');
// // // // // // // // // // //   const labelRefs = useRef([]);

// // // // // // // // // // //   const handleDegreeChange = (newDegree) => {
// // // // // // // // // // //     setDegree(newDegree);
// // // // // // // // // // //     setCoefficients(Array(newDegree + 1).fill(''));
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleCoefficientChange = (index, value) => {
// // // // // // // // // // //     if (!/^-?\d*$/.test(value)) return;
// // // // // // // // // // //     const newCoefficients = [...coefficients];
// // // // // // // // // // //     newCoefficients[index] = value;
// // // // // // // // // // //     setCoefficients(newCoefficients);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleReset = () => {
// // // // // // // // // // //     setDegree(2);
// // // // // // // // // // //     setCoefficients(Array(3).fill(''));
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

// // // // // // // // // // //     labelRefs.current.forEach((ref, index) => {
// // // // // // // // // // //       if (ref) {
// // // // // // // // // // //         katex.render(`x^{${index}}`, ref, {
// // // // // // // // // // //           throwOnError: false
// // // // // // // // // // //         });
// // // // // // // // // // //       }
// // // // // // // // // // //     });
// // // // // // // // // // //   }, [latexExpression, degree]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // // // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           Polynomial Degree:
// // // // // // // // // // //           {[...Array(9)].map((_, i) => (
// // // // // // // // // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // // // // // // // // //               <input
// // // // // // // // // // //                 type="radio"
// // // // // // // // // // //                 value={i + 2}
// // // // // // // // // // //                 checked={degree === i + 2}
// // // // // // // // // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // // // // // // // // //               />
// // // // // // // // // // //               {i + 2}
// // // // // // // // // // //             </label>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
// // // // // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // // // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // // // // // // //             <input
// // // // // // // // // // //               type="text"
// // // // // // // // // // //               value={coefficients[power] || ''}
// // // // // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // // // // //               placeholder={`Coefficient for ${superscriptNotations[power]}`}
// // // // // // // // // // //               style={{ width: '100%', padding: '5px', marginRight: '10px' }}
// // // // // // // // // // //               inputMode="numeric"
// // // // // // // // // // //               pattern="-?\d*"
// // // // // // // // // // //             />
// // // // // // // // // // //             <label 
// // // // // // // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // // // // // // //               style={{ minWidth: '30px' }}
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
// // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // import katex from 'katex';
// // // // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // // // const superscriptNotations = [
// // // // // // // // // //   "x⁰",
// // // // // // // // // //   "x¹",
// // // // // // // // // //   "x²",
// // // // // // // // // //   "x³",
// // // // // // // // // //   "x⁴",
// // // // // // // // // //   "x⁵",
// // // // // // // // // //   "x⁶",
// // // // // // // // // //   "x⁷",
// // // // // // // // // //   "x⁸",
// // // // // // // // // //   "x⁹",
// // // // // // // // // //   "x¹⁰"
// // // // // // // // // // ];

// // // // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // // // //   const [degree, setDegree] = useState(2);
// // // // // // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // // // // // //   const [latexExpression, setLatexExpression] = useState('');
// // // // // // // // // //   const labelRefs = useRef([]);

// // // // // // // // // //   const handleDegreeChange = (newDegree) => {
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
// // // // // // // // // //     setDegree(2);
// // // // // // // // // //     setCoefficients(Array(3).fill(''));
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

// // // // // // // // // //     labelRefs.current.forEach((ref, index) => {
// // // // // // // // // //       if (ref) {
// // // // // // // // // //         katex.render(`x^{${index}}`, ref, {
// // // // // // // // // //           throwOnError: false
// // // // // // // // // //         });
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //   }, [latexExpression, degree]);

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// // // // // // // // // //       <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // // // // // // //         <div>
// // // // // // // // // //           Polynomial Degree:
// // // // // // // // // //           {[...Array(9)].map((_, i) => (
// // // // // // // // // //             <label key={i} style={{ marginLeft: '10px' }}>
// // // // // // // // // //               <input
// // // // // // // // // //                 type="radio"
// // // // // // // // // //                 value={i + 2}
// // // // // // // // // //                 checked={degree === i + 2}
// // // // // // // // // //                 onChange={() => handleDegreeChange(i + 2)}
// // // // // // // // // //               />
// // // // // // // // // //               {i + 2}
// // // // // // // // // //             </label>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //         <button onClick={handleReset} style={{ padding: '5px 10px' }}>Reset</button>
// // // // // // // // // //       </div>
// // // // // // // // // //       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '10px', marginBottom: '20px', overflowX: 'auto' }}>
// // // // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power) => (
// // // // // // // // // //           <div key={power} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // // // // // // // //             <input
// // // // // // // // // //               type="text"
// // // // // // // // // //               value={coefficients[power] || ''}
// // // // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // // // //               placeholder={superscriptNotations[power]}
// // // // // // // // // //               style={{ width: '50px', padding: '5px', marginBottom: '5px' }}
// // // // // // // // // //               inputMode="numeric"
// // // // // // // // // //               pattern="-?\d*"
// // // // // // // // // //             />
// // // // // // // // // //             <label 
// // // // // // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // // // // // //               style={{ minWidth: '30px' }}
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
// // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // import katex from 'katex';
// // // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // // const superscriptNotations = [
// // // // // // // // //   "x⁰",
// // // // // // // // //   "x¹",
// // // // // // // // //   "x²",
// // // // // // // // //   "x³",
// // // // // // // // //   "x⁴",
// // // // // // // // //   "x⁵",
// // // // // // // // //   "x⁶",
// // // // // // // // //   "x⁷",
// // // // // // // // //   "x⁸",
// // // // // // // // //   "x⁹",
// // // // // // // // //   "x¹⁰"
// // // // // // // // // ];

// // // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // // //   const [degree, setDegree] = useState(2);
// // // // // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // // // // //   const [latexExpression, setLatexExpression] = useState('');
// // // // // // // // //   const labelRefs = useRef([]);

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

// // // // // // // // //     labelRefs.current.forEach((ref, index) => {
// // // // // // // // //       if (ref) {
// // // // // // // // //         katex.render(`x^{${index}}`, ref, {
// // // // // // // // //           throwOnError: false
// // // // // // // // //         });
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //   }, [latexExpression, degree]);

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
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
// // // // // // // // //       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto' }}>
// // // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
// // // // // // // // //           <div key={power} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               value={coefficients[power] || ''}
// // // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // // //               placeholder={superscriptNotations[power]}
// // // // // // // // //               style={{ width: '50px', padding: '5px', marginBottom: '5px' }}
// // // // // // // // //               inputMode="numeric"
// // // // // // // // //               pattern="-?\d*"
// // // // // // // // //             />
// // // // // // // // //             <label 
// // // // // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // // // // //               style={{ minWidth: '30px' }}
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
// // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // import katex from 'katex';
// // // // // // // // import 'katex/dist/katex.min.css';

// // // // // // // // const superscriptNotations = [
// // // // // // // //   "x⁰", "x¹", "x²", "x³", "x⁴", "x⁵", "x⁶", "x⁷", "x⁸", "x⁹", "x¹⁰"
// // // // // // // // ];

// // // // // // // // const PolynomialInputDisplay = () => {
// // // // // // // //   const [degree, setDegree] = useState(2);
// // // // // // // //   const [coefficients, setCoefficients] = useState(Array(3).fill(''));
// // // // // // // //   const [latexExpression, setLatexExpression] = useState('');
// // // // // // // //   const labelRefs = useRef([]);

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

// // // // // // // //     labelRefs.current.forEach((ref, index) => {
// // // // // // // //       if (ref) {
// // // // // // // //         katex.render(`x^{${index}}`, ref, {
// // // // // // // //           throwOnError: false
// // // // // // // //         });
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   }, [latexExpression, degree]);

// // // // // // // //   return (
// // // // // // // //     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
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
// // // // // // // //       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '10px', marginBottom: '20px', overflowX: 'auto' }}>
// // // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
// // // // // // // //           <div key={power} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               value={coefficients[power] || ''}
// // // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // // //               placeholder={superscriptNotations[power]}
// // // // // // // //               style={{ width: '50px', padding: '5px', marginBottom: '5px' }}
// // // // // // // //               inputMode="numeric"
// // // // // // // //               pattern="-?\d*"
// // // // // // // //             />
// // // // // // // //             <label 
// // // // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // // // //               style={{ minWidth: '30px' }}
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
// // // // // // //         katex.render(`x^{${index}}`, ref, {
// // // // // // //           throwOnError: false
// // // // // // //         });
// // // // // // //       }
// // // // // // //     });
// // // // // // //   }, [latexExpression, degree]);

// // // // // // //   return (
// // // // // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
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
// // // // // // //       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '5px', marginBottom: '20px' }}>
// // // // // // //         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
// // // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               value={coefficients[power] || ''}
// // // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // // //               style={{ width: '40px', padding: '5px', marginRight: '2px' }}
// // // // // // //               inputMode="numeric"
// // // // // // //               pattern="-?\d*"
// // // // // // //             />
// // // // // // //             <label 
// // // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // // //               style={{ fontWeight: 'bold', fontSize: '18px' }}
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
// // // // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
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
// // // // // //       <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '5px', marginBottom: '20px' }}>
// // // // // //         {Array.from({ length: degree + 1 }, (_, i) => i).map((power) => (
// // // // // //           <div key={power} style={{ display: 'flex', alignItems: 'center' }}>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={coefficients[power] || ''}
// // // // // //               onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // // //               placeholder={superscriptNotations[power]}
// // // // // //               style={{ width: '40px', padding: '5px', marginRight: '2px' }}
// // // // // //               inputMode="numeric"
// // // // // //               pattern="-?\d*"
// // // // // //             />
// // // // // //             <label 
// // // // // //               ref={el => labelRefs.current[power] = el}
// // // // // //               style={{ fontWeight: 'bold', fontSize: '18px' }}
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
// // // // //   "x⁰", "x¹", "x²", "x³", "x⁴", "x⁵", "x⁶", "x⁷", "x⁸", "x⁹", "x¹⁰"
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
// // // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
// // // // //       <div style={{ marginBottom: '20px' }}>
// // // // //         Polynomial Degree:
// // // // //         {[...Array(9)].map((_, i) => (
// // // // //           <label key={i} style={{ marginLeft: '10px' }}>
// // // // //             <input
// // // // //               type="radio"
// // // // //               value={i + 2}
// // // // //               checked={degree === i + 2}
// // // // //               onChange={() => handleDegreeChange(i + 2)}
// // // // //             />
// // // // //             {i + 2}
// // // // //           </label>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
// // // // //         <button onClick={handleReset} style={{ padding: '5px 10px', marginRight: '15px' }}>Reset</button>
// // // // //         <div style={{ display: 'flex', alignItems: 'center' }}>
// // // // //           {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
// // // // //             <React.Fragment key={power}>
// // // // //               {index > 0 && <span style={{ margin: '0 5px', fontSize: '18px', fontWeight: 'bold' }}>+</span>}
// // // // //               <div style={{ display: 'flex', alignItems: 'center' }}>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   value={coefficients[power] || ''}
// // // // //                   onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // // //                   // placeholder={superscriptNotations[power]}
// // // // //                   style={{ width: '40px', padding: '5px', marginRight: '2px' }}
// // // // //                   inputMode="numeric"
// // // // //                   pattern="-?\d*"
// // // // //                 />
// // // // //                 <label 
// // // // //                   ref={el => labelRefs.current[power] = el}
// // // // //                   style={{ fontWeight: 'bold', fontSize: '18px' }}
// // // // //                 />
// // // // //               </div>
// // // // //             </React.Fragment>
// // // // //           ))}
// // // // //         </div>
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
// // // // import './PolynomialInputDisplay.css'; // For styling the button group

// // // // const PolynomialInputDisplay = () => {
// // // //   const [degree, setDegree] = useState(null); // Initially, no degree selected
// // // //   const [coefficients, setCoefficients] = useState([]);
// // // //   const [latexExpression, setLatexExpression] = useState('');
// // // //   const labelRefs = useRef([]);

// // // //   const handleDegreeChange = (newDegree) => {
// // // //     setDegree(newDegree);
// // // //     setCoefficients(Array(newDegree + 1).fill('')); // Reset coefficients
// // // //   };

// // // //   const handleCoefficientChange = (index, value) => {
// // // //     if (!/^-?\d*$/.test(value)) return; // Restrict to numeric input (allowing "-")
// // // //     const newCoefficients = [...coefficients];
// // // //     newCoefficients[index] = value;
// // // //     setCoefficients(newCoefficients);
// // // //   };

// // // //   const handleReset = () => {
// // // //     setDegree(null);
// // // //     setCoefficients([]);
// // // //     setLatexExpression('');
// // // //   };

// // // //   const handleGenerateRandom = () => {
// // // //     const randomCoefficients = Array(degree + 1)
// // // //       .fill(0)
// // // //       .map(() => Math.floor(Math.random() * 21) - 10); // Generate random values from -10 to 10
// // // //     setCoefficients(randomCoefficients);
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
// // // //       displayMode: true,
// // // //     });

// // // //     labelRefs.current.forEach((ref, index) => {
// // // //       if (ref) {
// // // //         katex.render(`x^{${index}}`, ref, {
// // // //           throwOnError: false,
// // // //         });
// // // //       }
// // // //     });
// // // //   }, [latexExpression, degree]);

// // // //   return (
// // // //     <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
// // // //       <div style={{ marginBottom: '20px' }}>
// // // //         <h3>Polynomial Degree:</h3>
// // // //         <div className="button-group">
// // // //           {[...Array(9)].map((_, i) => (
// // // //             <button
// // // //               key={i}
// // // //               className={`button-group-item ${degree === i + 2 ? 'active' : ''}`}
// // // //               onClick={() => handleDegreeChange(i + 2)}
// // // //             >
// // // //               {i + 2}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //       {degree !== null && (
// // // //         <>
// // // //           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
// // // //             <button onClick={handleReset} style={{ padding: '5px 10px', marginRight: '15px' }}>
// // // //               Reset
// // // //             </button>
// // // //             <button
// // // //               onClick={handleGenerateRandom}
// // // //               style={{
// // // //                 padding: '5px 10px',
// // // //                 marginRight: '15px',
// // // //                 backgroundColor: '#007bff',
// // // //                 color: 'white',
// // // //                 border: 'none',
// // // //                 borderRadius: '4px',
// // // //                 cursor: 'pointer',
// // // //               }}
// // // //             >
// // // //               Create Random
// // // //             </button>
// // // //           </div>
// // // //           <div style={{ display: 'flex', alignItems: 'center' }}>
// // // //             {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
// // // //               <React.Fragment key={power}>
// // // //                 {index > 0 && <span style={{ margin: '0 5px', fontSize: '18px', fontWeight: 'bold' }}>+</span>}
// // // //                 <div style={{ display: 'flex', alignItems: 'center' }}>
// // // //                   <input
// // // //                     type="text"
// // // //                     value={coefficients[power] || ''}
// // // //                     onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // // //                     style={{ width: '40px', padding: '5px', marginRight: '2px' }}
// // // //                   />
// // // //                   <label
// // // //                     ref={(el) => (labelRefs.current[power] = el)}
// // // //                     style={{ fontWeight: 'bold', fontSize: '18px' }}
// // // //                   />
// // // //                 </div>
// // // //               </React.Fragment>
// // // //             ))}
// // // //           </div>
// // // //         </>
// // // //       )}
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
// // // import './PolynomialInputDisplay.css'; // Import updated styles

// // // const PolynomialInputDisplay = () => {
// // //   const [degree, setDegree] = useState(null); // Initially, no degree selected
// // //   const [coefficients, setCoefficients] = useState([]);
// // //   const [latexExpression, setLatexExpression] = useState('');
// // //   const labelRefs = useRef([]);

// // //   const handleDegreeChange = (newDegree) => {
// // //     setDegree(newDegree);
// // //     setCoefficients(Array(newDegree + 1).fill('')); // Reset coefficients
// // //   };

// // //   const handleCoefficientChange = (index, value) => {
// // //     if (!/^-?\d*$/.test(value)) return; // Restrict to numeric input
// // //     const newCoefficients = [...coefficients];
// // //     newCoefficients[index] = value;
// // //     setCoefficients(newCoefficients);
// // //   };

// // //   const handleReset = () => {
// // //     setDegree(null);
// // //     setCoefficients([]);
// // //     setLatexExpression('');
// // //   };

// // //   const handleGenerateRandom = () => {
// // //     const randomCoefficients = Array(degree + 1)
// // //       .fill(0)
// // //       .map(() => Math.floor(Math.random() * 21) - 10); // Generate random coefficients (-10 to 10)
// // //     setCoefficients(randomCoefficients);
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
// // //       displayMode: true,
// // //     });

// // //     labelRefs.current.forEach((ref, index) => {
// // //       if (ref) {
// // //         katex.render(`x^{${index}}`, ref, {
// // //           throwOnError: false,
// // //         });
// // //       }
// // //     });
// // //   }, [latexExpression, degree]);

// // //   return (
// // //     <div className="polynomial-container">
// // //       <div className="degree-section">
// // //         <h3>Select Polynomial Degree</h3>
// // //         <div className="button-group">
// // //           {[...Array(9)].map((_, i) => (
// // //             <button
// // //               key={i}
// // //               className={`button-group-item ${degree === i + 2 ? 'active' : ''}`}
// // //               onClick={() => handleDegreeChange(i + 2)}
// // //             >
// // //               {i + 2}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       {degree !== null && (
// // //         <>
// // //           <div className="control-buttons">
// // //             <button className="reset-button" onClick={handleReset}>
// // //               Reset
// // //             </button>
// // //             <button className="generate-button" onClick={handleGenerateRandom}>
// // //               Create Random
// // //             </button>
// // //           </div>
// // //           <div className="coefficients-section">
// // //             {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
// // //               <React.Fragment key={power}>
// // //                 {index > 0 && <span className="plus-sign">+</span>}
// // //                 <div className="coefficient-input-group">
// // //                   <input
// // //                     type="text"
// // //                     value={coefficients[power] || ''}
// // //                     onChange={(e) => handleCoefficientChange(power, e.target.value)}
// // //                     className="coefficient-input"
// // //                   />
// // //                   <label
// // //                     ref={(el) => (labelRefs.current[power] = el)}
// // //                     className="exponent-label"
// // //                   />
// // //                 </div>
// // //               </React.Fragment>
// // //             ))}
// // //           </div>
// // //         </>
// // //       )}
// // //       <div className="polynomial-display-section">
// // //         <h3>Your Polynomial:</h3>
// // //         <div id="polynomial-display" className="polynomial-display"></div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PolynomialInputDisplay;


// // import React, { useState, useEffect, useRef } from 'react';
// // import katex from 'katex';
// // import 'katex/dist/katex.min.css';
// // import './PolynomialInputDisplay.css'; // Import updated styles

// // const PolynomialInputDisplay = () => {
// //   const [degree, setDegree] = useState(null); // Initially, no degree selected
// //   const [coefficients, setCoefficients] = useState([]);
// //   const [latexExpression, setLatexExpression] = useState('');
// //   const labelRefs = useRef([]);

// //   const handleDegreeChange = (newDegree) => {
// //     setDegree(newDegree);
// //     setCoefficients(Array(newDegree + 1).fill('')); // Reset coefficients
// //   };

// //   const handleCoefficientChange = (index, value) => {
// //     if (!/^-?\d*$/.test(value)) return; // Restrict to numeric input
// //     const newCoefficients = [...coefficients];
// //     newCoefficients[index] = value;
// //     setCoefficients(newCoefficients);
// //   };

// //   const handleReset = () => {
// //     setDegree(null);
// //     setCoefficients([]);
// //     setLatexExpression('');
// //   };

// //   const handleGenerateRandom = () => {
// //     const randomCoefficients = Array(degree + 1)
// //       .fill(0)
// //       .map(() => Math.floor(Math.random() * 21) - 10); // Generate random coefficients (-10 to 10)
// //     setCoefficients(randomCoefficients);
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
// //       displayMode: true,
// //     });

// //     labelRefs.current.forEach((ref, index) => {
// //       if (ref) {
// //         katex.render(`x^{${index}}`, ref, {
// //           throwOnError: false,
// //         });
// //       }
// //     });
// //   }, [latexExpression, degree]);

// //   return (
// //     <div className="polynomial-container">
// //       <div className="degree-section">
// //         <h3 className='h3'>Select Polynomial Degree</h3>
// //         <div className="button-group">
// //           {[...Array(9)].map((_, i) => (
// //             <button
// //               key={i}
// //               className={`button-group-item ${degree === i + 2 ? 'active' : ''}`}
// //               onClick={() => handleDegreeChange(i + 2)}
// //             >
// //               {i + 2}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //       {degree !== null && (
// //         <>
// //           <div className="control-buttons">
// //             <button className="reset-button" onClick={handleReset}>
// //               Reset
// //             </button>
// //             <button className="generate-button" onClick={handleGenerateRandom}>
// //               Create Random
// //             </button>
// //           </div>
// //           <div className="coefficients-section">
// //             {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
// //               <React.Fragment key={power}>
// //                 {index > 0 && <span className="plus-sign">+</span>}
// //                 <div className="coefficient-input-group">
// //                   <input
// //                     type="text"
// //                     value={coefficients[power] || ''}
// //                     onChange={(e) => handleCoefficientChange(power, e.target.value)}
// //                     className="coefficient-input"
// //                   />
// //                   <label
// //                     ref={(el) => (labelRefs.current[power] = el)}
// //                     className="exponent-label"
// //                   />
// //                 </div>
// //               </React.Fragment>
// //             ))}
// //           </div>
// //         </>
// //       )}
// //       <div className="polynomial-display-section">
// //         <h3>Your Polynomial:</h3>
// //         <div id="polynomial-display" className="polynomial-display"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PolynomialInputDisplay;


// // import React, { useState, useEffect, useRef } from 'react';
// // import katex from 'katex';
// // import 'katex/dist/katex.min.css';
// // import './PolynomialInputDisplay.css';

// // const PolynomialInputDisplay = () => {
// //   const [degree, setDegree] = useState(null); // Initially, no degree selected
// //   const [coefficients, setCoefficients] = useState([]);
// //   const [latexExpression, setLatexExpression] = useState('');
// //   const labelRefs = useRef([]);

// //   const handleDegreeChange = (newDegree) => {
// //     setDegree(newDegree);
// //     setCoefficients(Array(newDegree + 1).fill('')); // Reset coefficients
// //   };

// //   const handleCoefficientChange = (index, value) => {
// //     if (!/^-?\d*$/.test(value)) return; // Restrict to numeric input
// //     const newCoefficients = [...coefficients];
// //     newCoefficients[index] = value;
// //     setCoefficients(newCoefficients);
// //   };

// //   const handleReset = () => {
// //     setDegree(null);
// //     setCoefficients([]);
// //     setLatexExpression('');
// //   };

// //   const handleGenerateRandom = () => {
// //     const randomCoefficients = Array(degree + 1)
// //       .fill(0)
// //       .map(() => Math.floor(Math.random() * 21) - 10); // Generate random coefficients (-10 to 10)
// //     setCoefficients(randomCoefficients);
// //   };

// //   // useEffect(() => {
// //   //   let latex = '';
// //   //   for (let i = degree; i >= 0; i--) {
// //   //     const coef = coefficients[i] || '';
// //   //     if (coef && coef !== '0') {
// //   //       if (latex && coef[0] !== '-') latex += ' + ';
// //   //       if (coef === '-') latex += ' - ';
// //   //       else if (coef !== '1' && coef !== '-1') latex += coef;
// //   //       else if (coef === '-1') latex += '-';
// //   //       if (i > 0) {
// //   //         if (coef !== '1' && coef !== '-1') latex += ' ';
// //   //         latex += 'x';
// //   //         if (i > 1) latex += `^{${i}}`;
// //   //       }
// //   //     }
// //   //   }
// //   //   setLatexExpression(latex || '0');
// //   // }, [coefficients, degree]);

// //   useEffect(() => {
// //     let latex = '';
// //     for (let i = degree; i >= 0; i--) {
// //       const coef = coefficients[i];
  
// //       if (coef !== 0 && coef !== '' && coef !== undefined) {
// //         if (latex) {
// //           // Add "+" for positive coefficients only
// //           latex += coef > 0 ? ' + ' : ' ';
// //         }
  
// //         // Append coefficient, skip 1/-1 for non-constant terms
// //         if (i > 0) {
// //           if (coef === -1) {
// //             latex += '-';
// //           } else if (coef !== 1) {
// //             latex += coef;
// //           }
// //           latex += 'x'; // Append "x"
// //           if (i > 1) latex += `^{${i}}`; // Add exponent for x > 1
// //         } else {
// //           // For the constant term
// //           latex += coef;
// //         }
// //       }
// //     }
  
// //     setLatexExpression(latex || '0');
// //   }, [coefficients, degree]);
  
 
 
// //   useEffect(() => {
// //     const displayElement = document.getElementById('polynomial-display');
// //     if (displayElement) {
// //       katex.render(latexExpression, displayElement, {
// //         throwOnError: false,
// //         displayMode: true,
// //       });
// //     }
// //   }, [latexExpression, degree]);

// //   useEffect(() => {
// //     labelRefs.current.forEach((ref, index) => {
// //       if (ref) {
// //         katex.render(`x^{${index}}`, ref, {
// //           throwOnError: false,
// //         });
// //       }
// //     });
// //   }, [degree]);

// //   return (
// //     <div className="polynomial-container">
// //       <div className="degree-section">
       
// //         <div className="button-group">
// //         <h4 >Select Polynomial Degree : </h4>
// //           {[...Array(9)].map((_, i) => (
// //             <button
// //               key={i}
// //               className={`button-group-item ${degree === i + 2 ? 'active' : ''}`}
// //               onClick={() => handleDegreeChange(i + 2)}
// //             >
// //               {i + 2}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //       {degree !== null && (
// //         <>
// //           <div className="control-buttons">
// //             <button className="reset-button" onClick={handleReset}>
// //               Reset
// //             </button>
// //             <button className="generate-button" onClick={handleGenerateRandom}>
// //               Create Random
// //             </button>
// //           </div>
// //           <div className="coefficients-section">
// //             {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
// //               <React.Fragment key={power}>
// //                 {index > 0 && <span className="plus-sign">+</span>}
// //                 <div className="coefficient-input-group">
// //                   <input
// //                     type="text"
// //                     value={coefficients[power] || ''}
// //                     onChange={(e) => handleCoefficientChange(power, e.target.value)}
// //                     className="coefficient-input"
// //                   />
// //                   <label
// //                     ref={(el) => (labelRefs.current[power] = el)}
// //                     className="exponent-label"
// //                   />
// //                 </div>
// //               </React.Fragment>
// //             ))}
// //           </div>
// //         </>
// //       )}
// //       {degree !== null && coefficients.some((coef) => coef !== '') && (
// //         <div className="polynomial-display-section">
// //           <h4>Your Polynomial:</h4>
// //           <div id="polynomial-display" className="polynomial-display"></div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PolynomialInputDisplay;


// import React, { useState, useEffect, useRef } from 'react';
// import katex from 'katex';
// import 'katex/dist/katex.min.css';
// import './PolynomialInputDisplay.css';

// const PolynomialInputDisplay = ({ onChange }) => {
//   const [degree, setDegree] = useState(null); // Initially, no degree selected
//   const [coefficients, setCoefficients] = useState([]);
//   const [latexExpression, setLatexExpression] = useState('');
//   const labelRefs = useRef([]);

//   const handleDegreeChange = (newDegree) => {
//     setDegree(newDegree);
//     const newCoefficients = Array(newDegree + 1).fill(''); // Reset coefficients
//     setCoefficients(newCoefficients);
//     if (typeof onChange === 'function') onChange(newCoefficients); // Notify parent of updated coefficients
//   };

//   const handleCoefficientChange = (index, value) => {
//     if (!/^-?\d*$/.test(value)) return; // Restrict to numeric input
//     const newCoefficients = [...coefficients];
//     newCoefficients[index] = value;
//     setCoefficients(newCoefficients);
//     if (typeof onChange === 'function') onChange(newCoefficients); // Notify parent of updated coefficients
//   };

//   const handleReset = () => {
//     setDegree(null);
//     setCoefficients([]);
//     setLatexExpression('');
//     if (typeof onChange === 'function') onChange([]); // Notify parent of reset coefficients
//   };

//   const handleGenerateRandom = () => {
//     const randomCoefficients = Array(degree + 1)
//       .fill(0)
//       .map(() => Math.floor(Math.random() * 21) - 10); // Generate random coefficients (-10 to 10)
//     setCoefficients(randomCoefficients);
//     if (typeof onChange === 'function') onChange(randomCoefficients); // Notify parent of updated coefficients
//   };

//   useEffect(() => {
//     let latex = '';
//     for (let i = degree; i >= 0; i--) {
//       const coef = coefficients[i];

//       if (coef !== 0 && coef !== '' && coef !== undefined) {
//         if (latex) {
//           // Add "+" for positive coefficients only
//           latex += coef > 0 ? ' + ' : ' ';
//         }

//         // Append coefficient, skip 1/-1 for non-constant terms
//         if (i > 0) {
//           if (coef === -1) {
//             latex += '-';
//           } else if (coef !== 1) {
//             latex += coef;
//           }
//           latex += 'x'; // Append "x"
//           if (i > 1) latex += `^{${i}}`; // Add exponent for x > 1
//         } else {
//           // For the constant term
//           latex += coef;
//         }
//       }
//     }

//     setLatexExpression(latex || '0');
//   }, [coefficients, degree]);

//   useEffect(() => {
//     const displayElement = document.getElementById('polynomial-display');
//     if (displayElement) {
//       katex.render(latexExpression, displayElement, {
//         throwOnError: false,
//         displayMode: true,
//       });
//     }
//   }, [latexExpression, degree]);

//   useEffect(() => {
//     labelRefs.current.forEach((ref, index) => {
//       if (ref) {
//         katex.render(`x^{${index}}`, ref, {
//           throwOnError: false,
//         });
//       }
//     });
//   }, [degree]);

//   return (
//     <div className="polynomial-container">
//       <div className="degree-section">
//         <div className="button-group">
//           <h4>Select Polynomial Degree:</h4>
//           {[...Array(9)].map((_, i) => (
//             <button
//               key={i}
//               className={`button-group-item ${degree === i + 2 ? 'active' : ''}`}
//               onClick={() => handleDegreeChange(i + 2)}
//             >
//               {i + 2}
//             </button>
//           ))}
//         </div>
//       </div>
//       {degree !== null && (
//         <>
//           <div className="control-buttons">
//             <button className="reset-button" onClick={handleReset}>
//               Reset
//             </button>
//             <button className="generate-button" onClick={handleGenerateRandom}>
//               Create Random
//             </button>
//           </div>
//           <div className="coefficients-section">
//             {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
//               <React.Fragment key={power}>
//                 {index > 0 && <span className="plus-sign">+</span>}
//                 <div className="coefficient-input-group">
//                   <input
//                     type="text"
//                     value={coefficients[power] || ''}
//                     onChange={(e) => handleCoefficientChange(power, e.target.value)}
//                     className="coefficient-input"
//                   />
//                   <label
//                     ref={(el) => (labelRefs.current[power] = el)}
//                     className="exponent-label"
//                   />
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </>
//       )}
//       {degree !== null && coefficients.some((coef) => coef !== '') && (
//         <div className="polynomial-display-section">
//           <h4>Your Polynomial:</h4>
//           <div id="polynomial-display" className="polynomial-display"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PolynomialInputDisplay;
// import React, { useState, useEffect, useRef } from 'react';
// import katex from 'katex';
// import 'katex/dist/katex.min.css';
// import './PolynomialInputDisplay.css';

// const PolynomialInputDisplay = ({ onChange, isParent = true }) => {
//   const [degree, setDegree] = useState(null); // Initially, no degree selected
//   const [coefficients, setCoefficients] = useState([]);
//   const [latexExpression, setLatexExpression] = useState('');
//   const labelRefs = useRef([]);

//   const handleDegreeChange = (newDegree) => {
//     setDegree(newDegree);
//     const newCoefficients = Array(newDegree + 1).fill(''); // Reset coefficients
//     setCoefficients(newCoefficients);
//     if (typeof onChange === 'function') onChange(newCoefficients); // Notify parent of updated coefficients
//   };

//   const handleCoefficientChange = (index, value) => {
//     if (!/^-?\d*$/.test(value)) return; // Restrict to numeric input
//     const newCoefficients = [...coefficients];
//     newCoefficients[index] = value;
//     setCoefficients(newCoefficients);
//     if (typeof onChange === 'function') onChange(newCoefficients); // Notify parent of updated coefficients
//   };

//   const handleReset = () => {
//     setDegree(null);
//     setCoefficients([]);
//     setLatexExpression('');
//     if (typeof onChange === 'function') onChange([]); // Notify parent of reset coefficients
//   };

//   const handleGenerateRandom = () => {
//     const randomCoefficients = Array(degree + 1)
//       .fill(0)
//       .map(() => Math.floor(Math.random() * 21) - 10); // Generate random coefficients (-10 to 10)
//     setCoefficients(randomCoefficients);
//     if (typeof onChange === 'function') onChange(randomCoefficients); // Notify parent of updated coefficients
//   };

//   useEffect(() => {
//     let latex = '';
//     for (let i = degree; i >= 0; i--) {
//       const coef = coefficients[i];

//       if (coef !== 0 && coef !== '' && coef !== undefined) {
//         if (latex) {
//           // Add "+" for positive coefficients only
//           latex += coef > 0 ? ' + ' : ' ';
//         }

//         // Append coefficient, skip 1/-1 for non-constant terms
//         if (i > 0) {
//           if (coef === -1) {
//             latex += '-';
//           } else if (coef !== 1) {
//             latex += coef;
//           }
//           latex += 'x'; // Append "x"
//           if (i > 1) latex += `^{${i}}`; // Add exponent for x > 1
//         } else {
//           // For the constant term
//           latex += coef;
//         }
//       }
//     }

//     setLatexExpression(latex || '0');
//   }, [coefficients, degree]);

//   useEffect(() => {
//     if (isParent) {
//       const displayElement = document.getElementById('polynomial-display');
//       if (displayElement) {
//         katex.render(latexExpression, displayElement, {
//           throwOnError: false,
//           displayMode: true,
//         });
//       }
//     }
//   }, [latexExpression, degree, isParent]);

//   useEffect(() => {
//     labelRefs.current.forEach((ref, index) => {
//       if (ref) {
//         katex.render(`x^{${index}}`, ref, {
//           throwOnError: false,
//         });
//       }
//     });
//   }, [degree]);

//   return (
//     <div className="polynomial-container">
//       <div className="degree-section">
//         <div className="button-group">
//           <h4>Select Polynomial Degree:</h4>
//           {[...Array(9)].map((_, i) => (
//             <button
//               key={i}
//               className={`button-group-item ${degree === i + 2 ? 'active' : ''}`}
//               onClick={() => handleDegreeChange(i + 2)}
//             >
//               {i + 2}
//             </button>
//           ))}
//         </div>
//       </div>
//       {degree !== null && (
//         <>
//           <div className="control-buttons">
//             <button className="reset-button" onClick={handleReset}>
//               Reset
//             </button>
//             <button className="generate-button" onClick={handleGenerateRandom}>
//               Create Random
//             </button>
//           </div>
//           <div className="coefficients-section">
//             {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
//               <React.Fragment key={power}>
//                 {index > 0 && <span className="plus-sign">+</span>}
//                 <div className="coefficient-input-group">
//                   <input
//                     type="text"
//                     value={coefficients[power] || ''}
//                     onChange={(e) => handleCoefficientChange(power, e.target.value)}
//                     className="coefficient-input"
//                   />
//                   <label
//                     ref={(el) => (labelRefs.current[power] = el)}
//                     className="exponent-label"
//                   />
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>
//         </>
//       )}
//       {/* Render the polynomial only if isParent is true */}
//       {isParent && degree !== null && coefficients.some((coef) => coef !== '') && (
//         <div className="polynomial-display-section">
//           <h4>Your Polynomial:</h4>
//           <div id="polynomial-display" className="polynomial-display"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PolynomialInputDisplay;



import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import './PolynomialInputDisplay.css';

const PolynomialInputDisplay = ({ onChange, isParent = true }) => {
  const [degree, setDegree] = useState(null);
  const [coefficients, setCoefficients] = useState([]);
  const [latexExpression, setLatexExpression] = useState('');
  const labelRefs = useRef([]);

  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
    const newCoefficients = Array(newDegree + 1).fill('');
    setCoefficients(newCoefficients);
    if (typeof onChange === 'function') onChange(newCoefficients);
  };

  // const handleCoefficientChange = (index, value) => {
  //   if (!/^-?\d*$/.test(value)) return;
  //   const newCoefficients = [...coefficients];
  //   newCoefficients[index] = value;
  //   setCoefficients(newCoefficients);
  //   console.log(coefficients)
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };


  

  const handleReset = () => {
    setDegree(null);
    setCoefficients([]);
    setLatexExpression('');
    if (typeof onChange === 'function') onChange([]);
  };

  // const handleGenerateRandom = () => {
  //   const randomCoefficients = Array(degree + 1)
  //     .fill(0)
  //     .map(() => Math.floor(Math.random() * 21) - 10);
  //   setCoefficients(randomCoefficients);
  //   if (typeof onChange === 'function') onChange(randomCoefficients);
  // };

  // const handleGenerateRandom = () => {
  //   // First create array of empty strings
  //   const newCoefficients = Array(degree + 1).fill('');
    
  //   // Then generate random numbers, ensuring at least one non-zero coefficient
  //   let allZeros = true;
  //   do {
  //     for (let i = 0; i <= degree; i++) {
  //       const randomCoef = Math.floor(Math.random() * 21) - 10;
  //       newCoefficients[i] = randomCoef === 0 ? '' : randomCoef.toString();
  //       if (randomCoef !== 0) allZeros = false;
  //     }
  //   } while (allZeros);
  
  //   setCoefficients(newCoefficients);
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };
 

  // const handleGenerateRandom = () => {
  //   // First create array of empty strings
  //   const newCoefficients = Array(degree + 1).fill('');
    
  //   // Then generate random numbers, ensuring at least one non-zero coefficient
  //   let allZeros = true;
  //   do {
  //     for (let i = 0; i <= degree; i++) {
  //       const randomCoef = Math.floor(Math.random() * 21) - 10;
  //       // Handle the -0 case by converting it to empty string
  //       newCoefficients[i] = (randomCoef === 0 || randomCoef === -0) ? '' : randomCoef.toString();
  //       if (randomCoef !== 0 && randomCoef !== -0) allZeros = false;
  //     }
  //   } while (allZeros);
  
  //   setCoefficients(newCoefficients);
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };
 
  // const handleGenerateRandom = () => {
  //   const newCoefficients = Array(degree + 1).fill('');
  //   let allZeros = true;
    
  //   do {
  //     for (let i = 0; i <= degree; i++) {
  //       const randomValue = Math.floor(Math.random() * 21) - 10;
  //       // Convert to string first to catch the -0 case
  //       const stringValue = randomValue.toString();
  //       // Check if it's -0 specifically
  //       if (stringValue === '0' || stringValue === '-0') {
  //         newCoefficients[i] = '';
  //       } else {
  //         newCoefficients[i] = stringValue;
  //         allZeros = false;
  //       }
  //     }
  //   } while (allZeros);

  //   console.log(newCoefficients)
  
  //   setCoefficients(newCoefficients);
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };


  const handleGenerateRandom = () => {
    const newCoefficients = Array(degree + 1).fill('');
    let allZeros = true;
    
    do {
      for (let i = 0; i <= degree; i++) {
        const randomValue = Math.floor(Math.random() * 21) - 10;
        const stringValue = randomValue.toString();
        if (stringValue === '0' || stringValue === '-0') {
          newCoefficients[i] = '';
        } else {
          newCoefficients[i] = stringValue;
          allZeros = false;
        }
      }
    } while (allZeros);
  
    setCoefficients(newCoefficients);
    if (typeof onChange === 'function') onChange(newCoefficients);
  };
  
  // const handleCoefficientChange = (index, value) => {
  //   if (!/^-?\d*$/.test(value)) return;
    
  //   const newCoefficients = [...coefficients];
  //   // Handle the special cases
  //   if (value === '-' || value === '-0' || value === '0') {
  //     newCoefficients[index] = value === '-' ? '-' : '';
  //   } else {
  //     newCoefficients[index] = value;
  //   }
    
  //   setCoefficients(newCoefficients);
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };
 
 
  // const handleCoefficientChange = (index, value) => {
  //   if (!/^-?\d*$/.test(value)) return;
    
  //   const newCoefficients = [...coefficients];
  //   // Here's where we need to handle it - right when setting the value
  //   newCoefficients[index] = (value === '-0' || value === '0') ? '' : value;
  //   setCoefficients(newCoefficients);
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };
  


  // const handleCoefficientChange = (index, value) => {
  //   if (!/^-?\d*$/.test(value)) return;
    
  //   const newCoefficients = [...coefficients];
  //   // Allow typing '-' and continue typing
  //   if (value === '-') {
  //     newCoefficients[index] = value;
  //   } 
  //   // When user completes typing -0, convert to empty
  //   else if (value === '-0') {
  //     newCoefficients[index] = '';
  //   }
  //   // When user types just 0, convert to empty
  //   else if (value === '0') {
  //     newCoefficients[index] = '';
  //   }
  //   // For all other numbers, keep as is
  //   else {
  //     newCoefficients[index] = value;
  //   }
    
  //   setCoefficients(newCoefficients);
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };


  // const handleCoefficientChange = (index, value) => {
  //   if (!/^-?\d*$/.test(value)) return;
  //   const newCoefficients = [...coefficients];
  //   newCoefficients[index] = value;  // Accept ANY valid input including 0 and -0
  //   setCoefficients(newCoefficients);
  //   if (typeof onChange === 'function') onChange(newCoefficients);
  // };


  const handleCoefficientChange = (index, value) => {
    if (!/^-?\d*$/.test(value)) return;
    
    const newCoefficients = [...coefficients];
    // Allow typing the minus sign, this is how -0 starts!
    if (value === '-' || value === '0' || value === '-0' ||value ==='00') {
      newCoefficients[index] = '0';  // Keep showing exactly what user types
    } else {
      newCoefficients[index] = value;  // All other values as normal
    }
    console.log(coefficients)
    setCoefficients(newCoefficients);
    if (typeof onChange === 'function') onChange(newCoefficients);
  };
  
  useEffect(() => {
    let latex = '';
    for (let i = degree; i >= 0; i--) {
      const coef = coefficients[i];

      if (coef !== 0 && coef !== '' && coef !== undefined) {
        if (latex) {
          latex += coef > 0 ? ' + ' : ' ';
        }

        if (i > 0) {
          if (coef === -1) {
            latex += '-';
          } else if (coef !== 1) {
            latex += coef;
          }
          latex += 'x';
          if (i > 1) latex += `^{${i}}`;
        } else {
          latex += coef;
        }
      }
    }

    setLatexExpression(latex || '0');
  }, [coefficients, degree]);

  useEffect(() => {
    if (isParent) {
      const displayElement = document.getElementById('polynomial-display');
      if (displayElement) {
        katex.render(latexExpression, displayElement, {
          throwOnError: false,
          displayMode: true,
        });
      }
    }
  }, [latexExpression, degree, isParent]);

  useEffect(() => {
    labelRefs.current.forEach((ref, index) => {
      if (ref) {
        katex.render(`x^{${index}}`, ref, {
          throwOnError: false,
        });
      }
    });
  }, [degree]);

  return (
    <div className="polynomial-container">
      <div className="degree-section">
        <div className="button-group">
          <h4>Select Polynomial Degree:</h4>
          {[...Array(9)].map((_, i) => (
            <button
              key={i}
              className={`button-group-item ${degree === i + 2 ? 'active' : ''}`}
              onClick={() => handleDegreeChange(i + 2)}
            >
              {i + 2}
            </button>
          ))}
          {degree !== null && (
            <>
              <button className="reset-button" onClick={handleReset}>
                Reset
              </button>
              <button className="generate-button" onClick={handleGenerateRandom}>
                Create Random
              </button>
            </>
          )}
        </div>
      </div>
      {degree !== null && (
        <div className="coefficients-section">
          {Array.from({ length: degree + 1 }, (_, i) => degree - i).map((power, index) => (
            <React.Fragment key={power}>
              {index > 0 && <span className="plus-sign">+</span>}
              <div className="coefficient-input-group">
                <input
                  type="text"
                  value={coefficients[power] || ''}
                  onChange={(e) => handleCoefficientChange(power, e.target.value)}
                  className="coefficient-input"
                />
                <label
                  ref={(el) => (labelRefs.current[power] = el)}
                  className="exponent-label"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      )}

{degree !== null && (
  <p className="input-instruction">
    Enter coefficients or generate random polynomial. The coefficients may be edited at any stage by inputing numbers at corresponding fields.
  </p>
)}
      {isParent && degree !== null && coefficients.some((coef) => coef !== '') && (
        <div className="polynomial-display-section">
          <h4>Your Polynomial:</h4>
          <div id="polynomial-display" className="polynomial-display"></div>
        </div>
      )}
    </div>
  );
};

export default PolynomialInputDisplay;