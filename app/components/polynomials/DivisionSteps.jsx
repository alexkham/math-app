// // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // // // // // // // // import './DivisionSteps.css';

// // // // // // // // // // // // // // const DivisionSteps = ({ dividend, divisor, quotient }) => {
// // // // // // // // // // // // // //   const formatPolynomial = (coeffs, topLevel = false) => {
// // // // // // // // // // // // // //     let latex = '';
// // // // // // // // // // // // // //     coeffs.forEach((coef, i) => {
// // // // // // // // // // // // // //       const power = coeffs.length - 1 - i;
// // // // // // // // // // // // // //       if (coef !== 0) {
// // // // // // // // // // // // // //         if (latex && coef > 0) latex += ' + ';
// // // // // // // // // // // // // //         if (coef < 0) latex += ' - ';
// // // // // // // // // // // // // //         const absCoef = Math.abs(coef);
// // // // // // // // // // // // // //         if (absCoef !== 1 || power === 0) latex += absCoef;
// // // // // // // // // // // // // //         if (power > 0) {
// // // // // // // // // // // // // //           latex += 'x';
// // // // // // // // // // // // // //           if (power > 1) latex += `^${power}`;
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //     return latex || '0';
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const steps = [];
// // // // // // // // // // // // // //   let currentTerm = dividend[0];
// // // // // // // // // // // // // //   const divisorRoot = -divisor[1] / divisor[0];

// // // // // // // // // // // // // //   for (let i = 0; i < dividend.length; i++) {
// // // // // // // // // // // // // //     if (i > 0) {
// // // // // // // // // // // // // //       currentTerm = dividend[i] + currentTerm * divisorRoot;
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     steps.push({
// // // // // // // // // // // // // //       term: currentTerm,
// // // // // // // // // // // // // //       power: dividend.length - 1 - i
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="division-container">
// // // // // // // // // // // // // //       <div className="division-header">
// // // // // // // // // // // // // //         <BlockMath math={`${formatPolynomial(quotient)}`} />
// // // // // // // // // // // // // //       </div>
      
// // // // // // // // // // // // // //       <div className="division-main">
// // // // // // // // // // // // // //         <div className="divisor">
// // // // // // // // // // // // // //           <BlockMath math={`${formatPolynomial(divisor)}`} />
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //         <div className="division-line"></div>
// // // // // // // // // // // // // //         <div className="dividend">
// // // // // // // // // // // // // //           <BlockMath math={`${formatPolynomial(dividend)}`} />
// // // // // // // // // // // // // //         </div>
        
// // // // // // // // // // // // // //         <div className="steps">
// // // // // // // // // // // // // //           {steps.map((step, idx) => (
// // // // // // // // // // // // // //             <div key={idx} className="step">
// // // // // // // // // // // // // //               <BlockMath math={`${step.term !== 0 ? `${step.term}x^${step.power}` : '0'}`} />
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <div className="remainder">
// // // // // // // // // // // // // //         <BlockMath math={`\\text{Remainder: } ${steps[steps.length - 1].term}`} />
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default DivisionSteps;

// // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // // // // // // // import './DivisionSteps.css';

// // // // // // // // // // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // // // // // // // // // //   const formatPolynomial = (coeffs) => {
// // // // // // // // // // // // //     let terms = [];
// // // // // // // // // // // // //     for(let i = 0; i < coeffs.length; i++) {
// // // // // // // // // // // // //       const power = coeffs.length - 1 - i;
// // // // // // // // // // // // //       let coef = coeffs[i];
// // // // // // // // // // // // //       if (power > 0) {
// // // // // // // // // // // // //         terms.push(`${coef}x^{${power}}`);
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         terms.push(`${coef}`);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     return terms.join(' + ');
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="division-wrapper">
// // // // // // // // // // // // //       <div className="divisor">
// // // // // // // // // // // // //         <BlockMath math={formatPolynomial(divisor)} />
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //       <div className="division-structure">|</div>
// // // // // // // // // // // // //       <div className="dividend">
// // // // // // // // // // // // //         <BlockMath math={formatPolynomial(dividend)} />
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default DivisionSteps;

// // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // // // // // // import './DivisionSteps.css';

// // // // // // // // // // // // const DivisionSteps = () => {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="synthetic-division">
// // // // // // // // // // // //       <div className="quotient-line">
// // // // // // // // // // // //         <BlockMath math="" /> {/* Empty quotient initially */}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       <div className="division-layout">
// // // // // // // // // // // //         <div className="divisor">
// // // // // // // // // // // //           <BlockMath math="x - 3" />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="vertical-line">|</div>
// // // // // // // // // // // //         <div className="coefficients">
// // // // // // // // // // // //           <BlockMath math="1x^3 - 2x^2 - 5x + 6" />
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="horizontal-line"></div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default DivisionSteps;

// // // // // // // // // // // import React from 'react';
// // // // // // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // // // // // import './DivisionSteps.css';

// // // // // // // // // // // const DivisionSteps = () => {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="synthetic-division">
// // // // // // // // // // //       <div className="quotient-line">
// // // // // // // // // // //         <BlockMath math="" />
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <div className="division-layout">
// // // // // // // // // // //         <div className="divisor">
// // // // // // // // // // //           <BlockMath math="x - 3" />
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="division-structure">
// // // // // // // // // // //           <div className="vertical-line"></div>
// // // // // // // // // // //           <div className="top-line"></div>
// // // // // // // // // // //           <div className="dividend">
// // // // // // // // // // //             <BlockMath math="1x^3 - 2x^2 - 5x + 6" />
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="multiplication-space"></div>
// // // // // // // // // // //           <div className="bottom-line"></div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default DivisionSteps;

// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // // // // import './DivisionSteps.css';

// // // // // // // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // // // // // // //   const [currentStep, setCurrentStep] = useState(0);
  
// // // // // // // // // //   const steps = [
// // // // // // // // // //     // Initial setup
// // // // // // // // // //     {
// // // // // // // // // //       stage: 'setup',
// // // // // // // // // //       display: [
// // // // // // // // // //         { type: 'divisor', value: '3' },
// // // // // // // // // //         { type: 'line', value: '|' },
// // // // // // // // // //         { type: 'row', values: ['1', '-2', '-5', '6'] }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     // First multiply
// // // // // // // // // //     {
// // // // // // // // // //       stage: 'multiply',
// // // // // // // // // //       display: [
// // // // // // // // // //         { type: 'divisor', value: '3' },
// // // // // // // // // //         { type: 'line', value: '|' },
// // // // // // // // // //         { type: 'row', values: ['1', '-2', '-5', '6'] },
// // // // // // // // // //         { type: 'arrow', position: 0 },
// // // // // // // // // //         { type: 'multiply', values: ['3'] }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     // First bring down
// // // // // // // // // //     {
// // // // // // // // // //       stage: 'bring-down',
// // // // // // // // // //       display: [
// // // // // // // // // //         { type: 'divisor', value: '3' },
// // // // // // // // // //         { type: 'line', value: '|' },
// // // // // // // // // //         { type: 'row', values: ['1', '-2', '-5', '6'] },
// // // // // // // // // //         { type: 'arrow', position: 0 },
// // // // // // // // // //         { type: 'multiply', values: ['3'] },
// // // // // // // // // //         { type: 'line', value: '_' },
// // // // // // // // // //         { type: 'result', values: ['1'] }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     // Continue process
// // // // // // // // // //     {
// // // // // // // // // //       stage: 'next-multiply',
// // // // // // // // // //       display: [
// // // // // // // // // //         { type: 'divisor', value: '3' },
// // // // // // // // // //         { type: 'line', value: '|' },
// // // // // // // // // //         { type: 'row', values: ['1', '-2', '-5', '6'] },
// // // // // // // // // //         { type: 'arrow', position: 1 },
// // // // // // // // // //         { type: 'multiply', values: ['3', '3'] },
// // // // // // // // // //         { type: 'line', value: '_' },
// // // // // // // // // //         { type: 'result', values: ['1', '1'] }
// // // // // // // // // //       ]
// // // // // // // // // //     },
// // // // // // // // // //     // And so on for each step...
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="division-steps">
// // // // // // // // // //       <div className="synthetic-division">
// // // // // // // // // //         {steps[currentStep].display.map((item, index) => {
// // // // // // // // // //           switch(item.type) {
// // // // // // // // // //             case 'divisor':
// // // // // // // // // //               return <div key={index} className="divisor">{item.value}</div>;
// // // // // // // // // //             case 'line':
// // // // // // // // // //               return <div key={index} className={`line ${item.value === '|' ? 'vertical' : 'horizontal'}`}>{item.value}</div>;
// // // // // // // // // //             case 'row':
// // // // // // // // // //               return (
// // // // // // // // // //                 <div key={index} className="coefficient-row">
// // // // // // // // // //                   {item.values.map((val, i) => <span key={i} className="coefficient">{val}</span>)}
// // // // // // // // // //                 </div>
// // // // // // // // // //               );
// // // // // // // // // //             case 'arrow':
// // // // // // // // // //               return <div key={index} className="arrow" style={{left: `${item.position * 50}px`}}>↓</div>;
// // // // // // // // // //             case 'multiply':
// // // // // // // // // //               return (
// // // // // // // // // //                 <div key={index} className="multiply-row">
// // // // // // // // // //                   {item.values.map((val, i) => <span key={i} className="multiplication">{val}</span>)}
// // // // // // // // // //                 </div>
// // // // // // // // // //               );
// // // // // // // // // //             case 'result':
// // // // // // // // // //               return (
// // // // // // // // // //                 <div key={index} className="result-row">
// // // // // // // // // //                   {item.values.map((val, i) => <span key={i} className="result">{val}</span>)}
// // // // // // // // // //                 </div>
// // // // // // // // // //               );
// // // // // // // // // //             default:
// // // // // // // // // //               return null;
// // // // // // // // // //           }
// // // // // // // // // //         })}
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className="controls">
// // // // // // // // // //         <button 
// // // // // // // // // //           onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
// // // // // // // // // //           disabled={currentStep === 0}
// // // // // // // // // //         >
// // // // // // // // // //           Previous
// // // // // // // // // //         </button>
// // // // // // // // // //         <span>Step {currentStep + 1} of {steps.length}</span>
// // // // // // // // // //         <button 
// // // // // // // // // //           onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
// // // // // // // // // //           disabled={currentStep === steps.length - 1}
// // // // // // // // // //         >
// // // // // // // // // //           Next
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default DivisionSteps;


// // // // // // // // // import React from 'react';
// // // // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // // // import './DivisionSteps.css';

// // // // // // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // // // // // //   // Format polynomial from coefficients
// // // // // // // // //   const formatPolynomial = (coeffs) => {
// // // // // // // // //     let latex = '';
// // // // // // // // //     coeffs.forEach((coef, i) => {
// // // // // // // // //       const power = coeffs.length - 1 - i;
// // // // // // // // //       if (coef !== 0) {
// // // // // // // // //         if (latex && coef > 0) latex += '+';
// // // // // // // // //         if (coef === -1 && power > 0) latex += '-';
// // // // // // // // //         else if (coef !== 1 || power === 0) latex += coef;
// // // // // // // // //         if (power > 0) {
// // // // // // // // //           latex += 'x';
// // // // // // // // //           if (power > 1) latex += `^{${power}}`;
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //     return latex || '0';
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="division-steps">
// // // // // // // // //       <div className="division-layout">
// // // // // // // // //         <div className="divisor">
// // // // // // // // //           <BlockMath math={formatPolynomial(divisor)} />
// // // // // // // // //         </div>
// // // // // // // // //         <div className="vertical-line"></div>
// // // // // // // // //         <div className="horizontal-line"></div>
// // // // // // // // //         <div className="dividend">
// // // // // // // // //           <BlockMath math={formatPolynomial(dividend)} />
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default DivisionSteps;

// // // // // // // // import React from 'react';
// // // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // // import './DivisionSteps.css';

// // // // // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // // // // //   const formatPolynomial = (coeffs) => {
// // // // // // // //     let latex = '';
// // // // // // // //     coeffs.forEach((coef, i) => {
// // // // // // // //       const power = coeffs.length - 1 - i;
// // // // // // // //       if (coef !== 0) {
// // // // // // // //         if (latex && coef > 0) latex += '+';
// // // // // // // //         if (coef === -1 && power > 0) latex += '-';
// // // // // // // //         else if (coef !== 1 || power === 0) latex += coef;
// // // // // // // //         if (power > 0) {
// // // // // // // //           latex += 'x';
// // // // // // // //           if (power > 1) latex += `^{${power}}`;
// // // // // // // //         }
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //     return latex || '0';
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="main-container">
// // // // // // // //       <div className="division-steps">
// // // // // // // //         <div className="division-layout">
// // // // // // // //           <div className="divisor">
// // // // // // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // // // // // //           </div>
// // // // // // // //           <div className="vertical-line"></div>
// // // // // // // //           <div className="horizontal-line"></div>
// // // // // // // //           <div className="dividend">
// // // // // // // //             <BlockMath math={formatPolynomial(dividend)} />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //       <div className="explanation-section">
// // // // // // // //         <h3>Step Explanation</h3>
// // // // // // // //         <p>Initial setup: We start by writing the division in standard form.</p>
// // // // // // // //         <ul>
// // // // // // // //           <li>Divisor: <BlockMath math={formatPolynomial(divisor)} /> on the left</li>
// // // // // // // //           <li>Dividend: <BlockMath math={formatPolynomial(dividend)} /> on the right</li>
// // // // // // // //         </ul>
// // // // // // // //         <p>Next, we'll perform synthetic division step by step.</p>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default DivisionSteps;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { BlockMath } from 'react-katex';
// // // // // // // import './DivisionSteps.css';

// // // // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // // // //   const [currentStep, setCurrentStep] = useState(0);
// // // // // // //   const [quotient, setQuotient] = useState([]);

// // // // // // //   const getDegree = coeffs => coeffs.length - 1;
  
// // // // // // //   const formatPolynomial = (coeffs) => {
// // // // // // //     let latex = '';
// // // // // // //     coeffs.forEach((coef, i) => {
// // // // // // //       const power = coeffs.length - 1 - i;
// // // // // // //       if (coef !== 0) {
// // // // // // //         if (latex && coef > 0) latex += '+';
// // // // // // //         if (coef === -1 && power > 0) latex += '-';
// // // // // // //         else if (coef !== 1 || power === 0) latex += coef;
// // // // // // //         if (power > 0) {
// // // // // // //           latex += 'x';
// // // // // // //           if (power > 1) latex += `^{${power}}`;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     });
// // // // // // //     return latex || '0';
// // // // // // //   };

// // // // // // //   const calculateFirstStep = () => {
// // // // // // //     const dividendDegree = getDegree(dividend);
// // // // // // //     const divisorDegree = getDegree(divisor);
// // // // // // //     const resultDegree = dividendDegree - divisorDegree;

// // // // // // //     const firstStepData = {
// // // // // // //       elementDivision: {
// // // // // // //         dividend: `x^{${dividendDegree}}`,
// // // // // // //         divisor: `x^{${divisorDegree}}`,
// // // // // // //         result: `x^{${resultDegree}}`
// // // // // // //       },
// // // // // // //       coefficientResult: dividend[0] / divisor[0]
// // // // // // //     };

// // // // // // //     return firstStepData;
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="division-steps">
// // // // // // //       <div className="step-display">
// // // // // // //         <div className="division-layout">
// // // // // // //           <div className="divisor">
// // // // // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // // // // //           </div>
// // // // // // //           <div className="division-line" />
// // // // // // //           <div className="dividend">
// // // // // // //             <BlockMath math={formatPolynomial(dividend)} />
// // // // // // //           </div>
// // // // // // //         </div>
        
// // // // // // //         <div className="first-step">
// // // // // // //           <BlockMath math={calculateFirstStep().elementDivision.result} />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="explanation-section">
// // // // // // //         <h3>Step 1 Explanation</h3>
// // // // // // //         <p>Dividing first elements:</p>
// // // // // // //         <BlockMath 
// // // // // // //           math={`\\frac{${calculateFirstStep().elementDivision.dividend}}{${calculateFirstStep().elementDivision.divisor}} = ${calculateFirstStep().elementDivision.result}`} 
// // // // // // //         />
// // // // // // //         <p>Next we'll multiply the divisor by this result and subtract from the dividend.</p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default DivisionSteps;

// // // // // // import React from 'react';
// // // // // // import { BlockMath } from 'react-katex';
// // // // // // import './DivisionSteps.css';

// // // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // // //   const formatPolynomial = (coeffs) => {
// // // // // //     let latex = '';
// // // // // //     coeffs.forEach((coef, i) => {
// // // // // //       const power = coeffs.length - 1 - i;
// // // // // //       if (coef !== 0) {
// // // // // //         if (latex && coef > 0) latex += '+';
// // // // // //         if (coef === -1 && power > 0) latex += '-';
// // // // // //         else if (coef !== 1 || power === 0) latex += coef;
// // // // // //         if (power > 0) {
// // // // // //           latex += 'x';
// // // // // //           if (power > 1) latex += `^{${power}}`;
// // // // // //         }
// // // // // //       }
// // // // // //     });
// // // // // //     return latex || '0';
// // // // // //   };

// // // // // //   const getDegree = coeffs => coeffs.length - 1;
  
// // // // // //   // Calculate first term of quotient
// // // // // //   const firstQuotientTerm = `x^{${getDegree(dividend) - getDegree(divisor)}}`;

// // // // // //   return (
// // // // // //     <div className="division-wrapper">
// // // // // //       <div className="division-content">
// // // // // //         <div className="quotient">
// // // // // //           <BlockMath math={firstQuotientTerm} />
// // // // // //         </div>
// // // // // //         <div className="division-box">
// // // // // //           <div className="divisor">
// // // // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // // // //           </div>
// // // // // //           <div className="vertical-line"></div>
// // // // // //           <div className="division-steps">
// // // // // //             <div className="top-line"></div>
// // // // // //             <div className="dividend">
// // // // // //               <BlockMath math={formatPolynomial(dividend)} />
// // // // // //             </div>
// // // // // //             <div className="bottom-line"></div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
      
// // // // // //       <div className="explanation-section">
// // // // // //         <h3>Step 1 Explanation</h3>
// // // // // //         <p>Dividing first elements:</p>
// // // // // //         <BlockMath 
// // // // // //           math={`\\frac{${`x^{${getDegree(dividend)}}`}}{${`x^{${getDegree(divisor)}}`}} = ${firstQuotientTerm}`} 
// // // // // //         />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DivisionSteps;


// // // // // import React from 'react';
// // // // // import { BlockMath } from 'react-katex';
// // // // // import './DivisionSteps.css';

// // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // //   const formatPolynomial = (coeffs) => {
// // // // //     let latex = '';
// // // // //     coeffs.forEach((coef, i) => {
// // // // //       const power = coeffs.length - 1 - i;
// // // // //       if (coef !== 0) {
// // // // //         if (latex && coef > 0) latex += '+';
// // // // //         if (coef === -1 && power > 0) latex += '-';
// // // // //         else if (coef !== 1 || power === 0) latex += coef;
// // // // //         if (power > 0) {
// // // // //           latex += 'x';
// // // // //           if (power > 1) latex += `^{${power}}`;
// // // // //         }
// // // // //       }
// // // // //     });
// // // // //     return latex || '0';
// // // // //   };

// // // // //   const getDegree = coeffs => coeffs.length - 1;
// // // // //   const firstQuotientTerm = `x^{${getDegree(dividend) - getDegree(divisor)}}`;

// // // // //   return (
// // // // //     <div className="main-layout">
// // // // //       <div className="division-container">
// // // // //         <div className="top-part">
// // // // //           <BlockMath math={firstQuotientTerm} />
// // // // //         </div>
// // // // //         <div className="division-box">
// // // // //           <div className="divisor">
// // // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // // //           </div>
// // // // //           <div className="division-structure">
// // // // //             <div className="horizontal-line"></div>
// // // // //             <div className="vertical-line"></div>
// // // // //             <div className="dividend">
// // // // //               <BlockMath math={formatPolynomial(dividend)} />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
      
// // // // //       <div className="explanation">
// // // // //         <h3>Step 1 Explanation</h3>
// // // // //         <p>Dividing first elements:</p>
// // // // //         <BlockMath 
// // // // //           math={`\\frac{x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${firstQuotientTerm}`}
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DivisionSteps;


// // // // // import React from 'react';
// // // // // import { BlockMath } from 'react-katex';
// // // // // import './DivisionSteps.css';

// // // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // // //   const formatPolynomial = (coeffs) => {
// // // // //     let latex = '';
// // // // //     coeffs.forEach((coef, i) => {
// // // // //       const power = coeffs.length - 1 - i;
// // // // //       if (coef !== 0) {
// // // // //         if (latex && coef > 0) latex += '+';
// // // // //         if (coef === -1 && power > 0) latex += '-';
// // // // //         else if (coef !== 1 || power === 0) latex += coef;
// // // // //         if (power > 0) {
// // // // //           latex += 'x';
// // // // //           if (power > 1) latex += `^{${power}}`;
// // // // //         }
// // // // //       }
// // // // //     });
// // // // //     return latex || '0';
// // // // //   };

// // // // //   const getDegree = coeffs => coeffs.length - 1;
// // // // // //   const firstQuotientTerm = `x^{${getDegree(dividend) - getDegree(divisor)}}`;

// // // // // const firstCoefficient = dividend[0] / divisor[0]; // Divide the leading coefficients
// // // // // const degreeDifference = getDegree(dividend) - getDegree(divisor); // Subtract degrees
// // // // // const firstQuotientTerm = `${firstCoefficient}x^{${degreeDifference}}`; // Combine coefficient and power


// // // // //   return (
// // // // //     <div className="main-layout">
// // // // //       <div className="division-section">
// // // // //         <div className="division-container">
// // // // //           <div className="divisor">
// // // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // // //           </div>
// // // // //           <div className="content-wrapper">
// // // // //             <div className="quotient">
// // // // //               <BlockMath math={firstQuotientTerm} />
// // // // //             </div>
// // // // //             <div className="dividend-part">
// // // // //               <div className="division-line"></div>
// // // // //               <div className="dividend">
// // // // //                 <BlockMath math={formatPolynomial(dividend)} />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="explanation">
// // // // //         <h3>Step 1 Explanation</h3>
// // // // //         <p>Dividing first elements:</p>
// // // // //         <BlockMath 
// // // // //           math={`\\frac{x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${firstQuotientTerm}`}
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DivisionSteps;

// // // // import React from 'react';
// // // // import { BlockMath } from 'react-katex';
// // // // import './DivisionSteps.css';

// // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // //   const formatTerm = (coef, power) => {
// // // //     if (coef === 0) return '';
// // // //     let term = '';
// // // //     if (coef === -1 && power > 0) term += '-';
// // // //     else if (coef !== 1 || power === 0) term += coef;
// // // //     if (power > 0) {
// // // //       term += 'x';
// // // //       if (power > 1) term += `^{${power}}`;
// // // //     }
// // // //     return term;
// // // //   };

// // // //   const formatPolynomial = (coeffs) => {
// // // //     let latex = '';
// // // //     coeffs.forEach((coef, i) => {
// // // //       const power = coeffs.length - 1 - i;
// // // //       if (coef !== 0) {
// // // //         if (latex && coef > 0) latex += '+';
// // // //         if (coef === -1 && power > 0) latex += '-';
// // // //         else if (coef !== 1 || power === 0) latex += coef;
// // // //         if (power > 0) {
// // // //           latex += 'x';
// // // //           if (power > 1) latex += `^{${power}}`;
// // // //         }
// // // //       }
// // // //     });
// // // //     return latex || '0';
// // // //   };

// // // //   const getDegree = coeffs => coeffs.length - 1;
// // // //   const firstCoefficient = dividend[0] / divisor[0];
// // // //   const degreeDifference = getDegree(dividend) - getDegree(divisor);
// // // //   const firstQuotientTerm = `${firstCoefficient}x^{${degreeDifference}}`;

// // // //   return (
// // // //     <div className="main-layout">
// // // //       <div className="division-section">
// // // //         <div className="division-container">
// // // //           <div className="divisor">
// // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // //           </div>
// // // //           <div className="content-wrapper">
// // // //             <div className="quotient">
// // // //               <BlockMath math={firstQuotientTerm} />
// // // //             </div>
// // // //             <div className="dividend-part">
// // // //               <div className="division-line"></div>
// // // //               <div className="dividend" style={{ display: 'flex', alignItems: 'center' }}>
// // // //                 {dividend.map((coef, i) => {
// // // //                   const power = dividend.length - 1 - i;
// // // //                   const term = formatTerm(coef, power);
// // // //                   if (!term) return null;
// // // //                   return (
// // // //                     <React.Fragment key={i}>
// // // //                       <BlockMath math={term} />
// // // //                       {i < dividend.length - 1 && coef !== 0 && <BlockMath math="+" />}
// // // //                     </React.Fragment>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="explanation">
// // // //         <h3>Step 1 Explanation</h3>
// // // //         <p>Dividing first elements:</p>
// // // //         <BlockMath
// // // //           math={`\\frac{x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${firstQuotientTerm}`}
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DivisionSteps;

// // // // import React from 'react';
// // // // import { BlockMath } from 'react-katex';
// // // // import './DivisionSteps.css';

// // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // //   const formatTerm = (coef, power, isFirst) => {
// // // //     if (coef === 0) return '';
// // // //     let term = '';
    
// // // //     // Handle sign
// // // //     if (!isFirst) {
// // // //       term += coef > 0 ? '+' : '-';
// // // //     } else if (coef < 0) {
// // // //       term += '-';
// // // //     }

// // // //     // Handle coefficient
// // // //     const absCoef = Math.abs(coef);
// // // //     if (absCoef !== 1 || power === 0) {
// // // //       term += absCoef;
// // // //     }
    
// // // //     // Handle variable and power
// // // //     if (power > 0) {
// // // //       term += 'x';
// // // //       if (power > 1) {
// // // //         term += `^{${power}}`;
// // // //       }
// // // //     }

// // // //     return term;
// // // //   };

// // // //   const formatPolynomial = (coeffs) => {
// // // //     let latex = '';
// // // //     coeffs.forEach((coef, i) => {
// // // //       const power = coeffs.length - 1 - i;
// // // //       if (coef !== 0) {
// // // //         const term = formatTerm(coef, power, latex === '');
// // // //         latex += term;
// // // //       }
// // // //     });
// // // //     return latex || '0';
// // // //   };

// // // //   const getDegree = coeffs => coeffs.length - 1;
// // // //   const firstCoefficient = dividend[0] / divisor[0];
// // // //   const degreeDifference = getDegree(dividend) - getDegree(divisor);
// // // //   const firstQuotientTerm = `${firstCoefficient}x^{${degreeDifference}}`;

// // // //   return (
// // // //     <div className="main-layout">
// // // //       <div className="division-section">
// // // //         <div className="division-container">
// // // //           <div className="divisor">
// // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // //           </div>
// // // //           <div className="content-wrapper">
// // // //             <div className="quotient">
// // // //               <BlockMath math={firstQuotientTerm} />
// // // //             </div>
// // // //             <div className="dividend-part">
// // // //               <div className="division-line"></div>
// // // //               <div className="dividend">
// // // //                 <BlockMath math={formatPolynomial(dividend)} />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="explanation">
// // // //         <h3>Step 1 Explanation</h3>
// // // //         <p>Dividing first elements:</p>
// // // //         <BlockMath
// // // //           math={`\\frac{x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${firstQuotientTerm}`}
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DivisionSteps;


// // // // import React from 'react';
// // // // import { BlockMath } from 'react-katex';
// // // // import './DivisionSteps.css';

// // // // const DivisionSteps = ({ dividend, divisor }) => {
// // // //   const formatTerm = (coef, power, isFirst) => {
// // // //     let term = '';
    
// // // //     // Handle sign
// // // //     if (!isFirst) {
// // // //       term += coef > 0 ? '+' : '-';
// // // //     } else if (coef < 0) {
// // // //       term += '-';
// // // //     }

// // // //     // Handle coefficient
// // // //     const absCoef = Math.abs(coef);
// // // //     if (absCoef !== 1 || power === 0) {
// // // //       term += absCoef;
// // // //     }
    
// // // //     // Handle variable and power
// // // //     term += 'x';
// // // //     term += `^{${power}}`;

// // // //     return term;
// // // //   };

// // // //   const formatPolynomial = (coeffs) => {
// // // //     let latex = '';
// // // //     coeffs.forEach((coef, i) => {
// // // //       const power = coeffs.length - 1 - i;
// // // //       const term = formatTerm(coef, power, latex === '');
// // // //       latex += term;
// // // //     });
// // // //     return latex || '0';
// // // //   };

// // // //   const getDegree = coeffs => coeffs.length - 1;
// // // //   const firstCoefficient = dividend[0] / divisor[0];
// // // //   const degreeDifference = getDegree(dividend) - getDegree(divisor);
// // // //   const firstQuotientTerm = `${firstCoefficient}x^{${degreeDifference}}`;

// // // //   return (
// // // //     <div className="main-layout">
// // // //       <div className="division-section">
// // // //         <div className="division-container">
// // // //           <div className="divisor">
// // // //             <BlockMath math={formatPolynomial(divisor)} />
// // // //           </div>
// // // //           <div className="content-wrapper">
// // // //             <div className="quotient">
// // // //               <BlockMath math={firstQuotientTerm} />
// // // //             </div>
// // // //             <div className="dividend-part">
// // // //               <div className="division-line"></div>
// // // //               <div className="dividend">
// // // //                 <BlockMath math={formatPolynomial(dividend)} />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="explanation">
// // // //         <h3>Step 1 Explanation</h3>
// // // //         <p>Dividing first elements:</p>
// // // //         <BlockMath
// // // //         //   math={`\\frac{x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${firstQuotientTerm}`}
// // // //         math={`\\frac{${dividend[0]}x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${firstQuotientTerm}`}
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DivisionSteps;

// // // import React, { useState } from 'react';
// // // import { BlockMath } from 'react-katex';
// // // import './DivisionSteps.css';

// // // const DivisionSteps = ({ dividend, divisor }) => {
// // //   const [currentStep, setCurrentStep] = useState(0);

// // //   const formatTerm = (coef, power, isFirst) => {
// // //     let term = '';
    
// // //     // Handle sign
// // //     if (!isFirst) {
// // //       term += coef > 0 ? '+' : '-';
// // //     } else if (coef < 0) {
// // //       term += '-';
// // //     }

// // //     // Handle coefficient
// // //     const absCoef = Math.abs(coef);
// // //     if (absCoef !== 1 || power === 0) {
// // //       term += absCoef;
// // //     }
    
// // //     // Handle variable and power
// // //     term += 'x';
// // //     term += `^{${power}}`;

// // //     return term;
// // //   };

// // //   const formatPolynomial = (coeffs) => {
// // //     const terms = [];
// // //     coeffs.forEach((coef, i) => {
// // //       const power = coeffs.length - 1 - i;
// // //       const term = formatTerm(coef, power, i === 0);
// // //       terms.push(term);
// // //     });
// // //     return terms;
// // //   };

// // //   const getDegree = coeffs => coeffs.length - 1;
// // //   const firstCoefficient = dividend[0] / divisor[0];
// // //   const degreeDifference = getDegree(dividend) - getDegree(divisor);
// // //   const firstQuotientTerm = `${firstCoefficient}x^{${degreeDifference}}`;

// // //   const dividendTerms = formatPolynomial(dividend);
// // //   const divisorTerms = formatPolynomial(divisor);

// // //   const getStepExplanation = (step) => {
// // //     switch(step) {
// // //       case 1:
// // //         return "This is the first term of the dividend";
// // //       case 2:
// // //         return "We divide by the first term of the divisor";
// // //       case 3:
// // //         return "This gives us our first quotient term";
// // //       default:
// // //         return "Dividing first elements:";
// // //     }
// // //   };

// // //   return (
// // //     <div className="main-layout">
// // //       <div className="division-section">
// // //         <div className="division-container">
// // //           <div className="divisor">
// // //             <span className={currentStep >= 2 ? 'highlight-red' : ''}>
// // //               <BlockMath math={divisorTerms[0]} />
// // //             </span>
// // //             {divisorTerms.slice(1).map((term, i) => (
// // //               <BlockMath key={i} math={term} />
// // //             ))}
// // //           </div>
// // //           <div className="content-wrapper">
// // //             <div className="quotient">
// // //               <span className={currentStep >= 3 ? 'highlight-yellow' : ''}>
// // //                 <BlockMath math={firstQuotientTerm} />
// // //               </span>
// // //             </div>
// // //             <div className="dividend-part">
// // //               <div className="division-line"></div>
// // //               <div className="dividend">
// // //                 <span className={currentStep >= 1 ? 'highlight-green' : ''}>
// // //                   <BlockMath math={dividendTerms[0]} />
// // //                 </span>
// // //                 {dividendTerms.slice(1).map((term, i) => (
// // //                   <BlockMath key={i} math={term} />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="explanation">
// // //         <h3>Step 1 Explanation</h3>
// // //         <p>{getStepExplanation(currentStep)}</p>
// // //         <BlockMath
// // //           math={`\\frac{${dividend[0]}x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${firstQuotientTerm}`}
// // //         />
// // //         <button 
// // //           onClick={() => setCurrentStep(prev => prev < 3 ? prev + 1 : prev)}
// // //           className="next-step"
// // //         >
// // //           Next Step
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DivisionSteps;


// // import React, { useState } from 'react';
// // import { BlockMath } from 'react-katex';
// // import './DivisionSteps.css';

// // const DivisionSteps = ({ dividend, divisor }) => {
// //   const [currentStep, setCurrentStep] = useState(0);

// //   const formatTerm = (coef, power, isFirst) => {
// //     let term = '';
    
// //     if (!isFirst) {
// //       term += coef > 0 ? '+' : '-';
// //     } else if (coef < 0) {
// //       term += '-';
// //     }

// //     const absCoef = Math.abs(coef);
// //     if (absCoef !== 1 || power === 0) {
// //       term += absCoef;
// //     }
    
// //     term += 'x';
// //     term += `^{${power}}`;

// //     return term;
// //   };

// //   const formatPolynomial = (coeffs) => {
// //     const terms = [];
// //     coeffs.forEach((coef, i) => {
// //       const power = coeffs.length - 1 - i;
// //       const term = formatTerm(coef, power, i === 0);
// //       terms.push(term);
// //     });
// //     return terms;
// //   };

// //   const getDegree = coeffs => coeffs.length - 1;
// //   const firstCoefficient = dividend[0] / divisor[0];
// //   const degreeDifference = getDegree(dividend) - getDegree(divisor);
// //   const quotientTerms = formatPolynomial([firstCoefficient]);

// //   const dividendTerms = formatPolynomial(dividend);
// //   const divisorTerms = formatPolynomial(divisor);

// //   const getStepExplanation = (step) => {
// //     switch(step) {
// //       case 1:
// //         return "This is the first term of the dividend";
// //       case 2:
// //         return "We divide by the first term of the divisor";
// //       case 3:
// //         return "This gives us our first quotient term";
// //       default:
// //         return "Dividing first elements:";
// //     }
// //   };

// //   return (
// //     <div className="main-layout">
// //       <div className="division-section">
// //         <div className="division-container">
// //           <div className="divisor">
// //             <span className={currentStep >= 2 ? 'highlight-red' : ''}>
// //               <BlockMath math={divisorTerms[0]} />
// //             </span>
// //             {divisorTerms.slice(1).map((term, i) => (
// //               <BlockMath key={i} math={term} />
// //             ))}
// //           </div>
// //           <div className="content-wrapper">
// //             <div className="quotient">
// //               <span className={currentStep >= 3 ? 'highlight-yellow' : ''}>
// //                 <BlockMath math={quotientTerms[0]} />
// //               </span>
// //             </div>
// //             <div className="dividend-part">
// //               <div className="division-line"></div>
// //               <div className="dividend">
// //                 <span className={currentStep >= 1 ? 'highlight-green' : ''}>
// //                   <BlockMath math={dividendTerms[0]} />
// //                 </span>
// //                 {dividendTerms.slice(1).map((term, i) => (
// //                   <BlockMath key={i} math={term} />
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="explanation">
// //         <h3>Step 1 Explanation</h3>
// //         <p>{getStepExplanation(currentStep)}</p>
// //         <BlockMath
// //           math={`\\frac{${dividend[0]}x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${quotientTerms[0]}`}
// //         />
// //         <button 
// //           onClick={() => setCurrentStep(prev => prev < 3 ? prev + 1 : prev)}
// //           className="next-step"
// //         >
// //           Next Step
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DivisionSteps;


// import React, { useState } from 'react';
// import { BlockMath } from 'react-katex';
// import './DivisionSteps.css';

// const DivisionSteps = ({ dividend, divisor }) => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const formatTerm = (coef, power, isFirst) => {
//     let term = '';
    
//     if (!isFirst) {
//       term += coef > 0 ? '+' : '-';
//     } else if (coef < 0) {
//       term += '-';
//     }

//     const absCoef = Math.abs(coef);
//     if (absCoef !== 1 || power === 0) {
//       term += absCoef;
//     }
    
//     term += 'x';
//     term += `^{${power}}`;

//     return term;
//   };

//   const formatPolynomial = (coeffs) => {
//     const terms = [];
//     coeffs.forEach((coef, i) => {
//       const power = coeffs.length - 1 - i;
//       const term = formatTerm(coef, power, i === 0);
//       terms.push(term);
//     });
//     return terms;
//   };

//   const getDegree = coeffs => coeffs.length - 1;
//   const firstCoefficient = dividend[0] / divisor[0];
//   const degreeDifference = getDegree(dividend) - getDegree(divisor);
//   const quotientTerm = formatTerm(firstCoefficient, degreeDifference, true);

//   const dividendTerms = formatPolynomial(dividend);
//   const divisorTerms = formatPolynomial(divisor);

//   const getStepExplanation = (step) => {
//     switch(step) {
//       case 1:
//         return "This is the first term of the dividend";
//       case 2:
//         return "We divide by the first term of the divisor";
//       case 3:
//         return "This gives us our first quotient term";
//       default:
//         return "Dividing first elements:";
//     }
//   };

//   return (
//     <div className="main-layout">
//       <div className="division-section">
//         <div className="division-container">
//           <div className="divisor">
//             <div className={currentStep >= 2 ? 'highlight-red' : ''}>
//               <BlockMath math={divisorTerms[0]} />
//             </div>
//             {divisorTerms.slice(1).map((term, i) => (
//               <BlockMath key={i} math={term} />
//             ))}
//           </div>
//           <div className="content-wrapper">
//             <div className="quotient">
//               <div className={currentStep >= 3 ? 'highlight-yellow' : ''}>
//                 <BlockMath math={quotientTerm} />
//               </div>
//             </div>
//             <div className="dividend-part">
//               <div className="division-line"></div>
//               <div className="dividend">
//                 <div className={currentStep >= 1 ? 'highlight-green' : ''}>
//                   <BlockMath math={dividendTerms[0]} />
//                 </div>
//                 {dividendTerms.slice(1).map((term, i) => (
//                   <BlockMath key={i} math={term} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="explanation">
//         <h3>Step 1 Explanation</h3>
//         <p>{getStepExplanation(currentStep)}</p>
//         <BlockMath
//           math={`\\frac{${dividend[0]}x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${quotientTerm}`}
//         />
//         <button 
//           onClick={() => setCurrentStep(prev => prev < 3 ? prev + 1 : prev)}
//           className="next-step"
//         >
//           Next Step
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DivisionSteps;


import React, { useState, useRef, useEffect } from 'react';
import { BlockMath } from 'react-katex';
import './DivisionSteps.css';

const DivisionSteps = ({ dividend, divisor }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playTimer = useRef(null);

  useEffect(() => {
    if (isPlaying && currentStep < 3) {
      playTimer.current = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1000);
    } else if (currentStep >= 3) {
      setIsPlaying(false);
    }
    return () => clearTimeout(playTimer.current);
  }, [isPlaying, currentStep]);

  const formatTerm = (coef, power, isFirst) => {
    let term = '';
    
    if (!isFirst) {
      term += coef > 0 ? '+' : '-';
    } else if (coef < 0) {
      term += '-';
    }

    const absCoef = Math.abs(coef);
    if (absCoef !== 1 || power === 0) {
      term += absCoef;
    }
    
    term += 'x';
    term += `^{${power}}`;

    return term;
  };

  const formatPolynomial = (coeffs) => {
    const terms = [];
    coeffs.forEach((coef, i) => {
      const power = coeffs.length - 1 - i;
      const term = formatTerm(coef, power, i === 0);
      terms.push(term);
    });
    return terms;
  };

  const getDegree = coeffs => coeffs.length - 1;
  const firstCoefficient = dividend[0] / divisor[0];
  const degreeDifference = getDegree(dividend) - getDegree(divisor);
  const quotientTerm = formatTerm(firstCoefficient, degreeDifference, true);

  const dividendTerms = formatPolynomial(dividend);
  const divisorTerms = formatPolynomial(divisor);

  const getStepExplanation = (step) => {
    switch(step) {
      case 1:
        return "This is the first term of the dividend";
      case 2:
        return "We divide by the first term of the divisor";
      case 3:
        return "This gives us our first quotient term";
      default:
        return "Dividing first elements:";
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev > 0 ? prev - 1 : prev);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="main-layout">
      <div className="division-section">
        <div className="division-container">
          <div className="divisor">
            <div className={currentStep >= 2 ? 'highlight-red' : ''}>
              <BlockMath math={divisorTerms[0]} />
            </div>
            {divisorTerms.slice(1).map((term, i) => (
              <BlockMath key={i} math={term} />
            ))}
          </div>
          <div className="content-wrapper">
            <div className="quotient">
              <div className={currentStep >= 3 ? 'highlight-yellow' : ''}>
                <BlockMath math={quotientTerm} />
              </div>
            </div>
            <div className="dividend-part">
              <div className="division-line"></div>
              <div className="dividend">
                <div className={currentStep >= 1 ? 'highlight-green' : ''}>
                  <BlockMath math={dividendTerms[0]} />
                </div>
                {dividendTerms.slice(1).map((term, i) => (
                  <BlockMath key={i} math={term} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="explanation">
        <h3>Step 1 Explanation</h3>
        <p>{getStepExplanation(currentStep)}</p>
        <BlockMath
          math={`\\frac{${dividend[0]}x^{${getDegree(dividend)}}}{x^{${getDegree(divisor)}}} = ${quotientTerm}`}
        />
        <div className="controls">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleBack}>Back</button>
          <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={() => setCurrentStep(prev => prev < 3 ? prev + 1 : prev)}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default DivisionSteps;