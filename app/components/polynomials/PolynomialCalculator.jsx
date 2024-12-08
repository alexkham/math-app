// import React, { useState } from 'react';
// import { BlockMath } from 'react-katex';
// import PolynomialInputDisplay from './PolynomialInputDisplay';
// import './SyntheticDivisionCalculator.css';

// const PolynomialCalculator = () => {
//   const [operation, setOperation] = useState('addition');
//   const [polynomial1Coefficients, setPolynomial1Coefficients] = useState([]);
//   const [polynomial2Coefficients, setPolynomial2Coefficients] = useState([]);
//   const [result, setResult] = useState([]);
//   const [error, setError] = useState('');
//   const [showPoly1Input, setShowPoly1Input] = useState(false);
//   const [showPoly2Input, setShowPoly2Input] = useState(false);
//   const [poly1Approved, setPoly1Approved] = useState(false);
//   const [poly2Approved, setPoly2Approved] = useState(false);

//   const resetAll = () => {
//     setPolynomial1Coefficients([]);
//     setPolynomial2Coefficients([]);
//     setResult([]);
//     setError('');
//     setShowPoly1Input(false);
//     setShowPoly2Input(false);
//     setPoly1Approved(false);
//     setPoly2Approved(false);
//   };

//   const resetPoly1 = () => {
//     setPolynomial1Coefficients([]);
//     setShowPoly1Input(false);
//     setPoly1Approved(false);
//   };

//   const resetPoly2 = () => {
//     setPolynomial2Coefficients([]);
//     setShowPoly2Input(false);
//     setPoly2Approved(false);
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

// //   const performOperation = () => {
// //     if (!polynomial1Coefficients.length || !polynomial2Coefficients.length) {
// //       setError('Please input both polynomials.');
// //       return;
// //     }

// //     setError('');
// //     const maxLength = Math.max(polynomial1Coefficients.length, polynomial2Coefficients.length);
// //     const padded1 = [...polynomial1Coefficients].reverse()
// //       .concat(Array(maxLength - polynomial1Coefficients.length).fill(0));
// //     const padded2 = [...polynomial2Coefficients].reverse()
// //       .concat(Array(maxLength - polynomial2Coefficients.length).fill(0));

// //     const resultArray = padded1.map((coef, idx) => {
// //       if (operation === 'addition') {
// //         return Number(coef) + Number(padded2[idx]);
// //       } else {
// //         return Number(coef) - Number(padded2[idx]);
// //       }
// //     }).reverse();

// //     setResult(resultArray);
// //   };

// const performOperation = () => {
//     if (!polynomial1Coefficients.length || !polynomial2Coefficients.length) {
//       setError('Please input both polynomials.');
//       return;
//     }
  
//     setError('');
    
//     // Get the highest degree between both polynomials
//     const maxDegree = Math.max(
//       polynomial1Coefficients.length - 1, 
//       polynomial2Coefficients.length - 1
//     );
  
//     // Create normalized arrays (filling missing coefficients with 0)
//     const normalized1 = new Array(maxDegree + 1).fill(0);
//     const normalized2 = new Array(maxDegree + 1).fill(0);
  
//     // Fill in the actual coefficients, from right to left (lowest to highest degree)
//     for (let i = 0; i < polynomial1Coefficients.length; i++) {
//       normalized1[i] = Number(polynomial1Coefficients[i]) || 0;
//     }
//     for (let i = 0; i < polynomial2Coefficients.length; i++) {
//       normalized2[i] = Number(polynomial2Coefficients[i]) || 0;
//     }
  
//     // Perform the operation on normalized polynomials
//     const resultArray = normalized1.map((coef, idx) => {
//       return operation === 'addition' 
//         ? coef + normalized2[idx] 
//         : coef - normalized2[idx];
//     });
  
//     // Remove trailing zeros if any
//     while (resultArray.length > 1 && resultArray[resultArray.length - 1] === 0) {
//       resultArray.pop();
//     }
  
//     setResult(resultArray);
//   };


//   return (
//     <div className="main-container">
//       <div className="content-section">
//         <div className="header-section">
//           <div className="operation-selector">
//             <label>
//               <input
//                 type="radio"
//                 value="addition"
//                 checked={operation === 'addition'}
//                 onChange={(e) => setOperation(e.target.value)}
//               /> Addition
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="subtraction"
//                 checked={operation === 'subtraction'}
//                 onChange={(e) => setOperation(e.target.value)}
//               /> Subtraction
//             </label>
//           </div>
//           <button className="reset-all-button" onClick={resetAll}>Reset All</button>
//         </div>

//         <div className="polynomial-section">
//           <div className="polynomial-row">
//             <h3>First<br/>Polynomial:</h3>
//             <div className="polynomial-display">
//               {polynomial1Coefficients.some(c => c !== '') ? (
//                 <BlockMath math={generatePolynomialLatex(polynomial1Coefficients)} />
//               ) : (
//                 <span className="not-entered">Not entered yet.</span>
//               )}
//             </div>
//             <div className="button-group">
//               {!showPoly1Input && !poly1Approved && (
//                 <>
//                   <button className="action-button" onClick={() => setShowPoly1Input(true)}>
//                     Enter Polynomial
//                   </button>
//                   <button className="reset-button" onClick={resetPoly1}>Reset</button>
//                 </>
//               )}
//               {showPoly1Input && !poly1Approved && (
//                 <button className="action-button" onClick={() => {
//                   setPoly1Approved(true);
//                   setShowPoly1Input(false);
//                 }}>
//                   OK
//                 </button>
//               )}
//               {poly1Approved && (
//                 <>
//                   <button className="edit-button" onClick={() => {
//                     setPoly1Approved(false);
//                     setShowPoly1Input(true);
//                   }}>
//                     Edit
//                   </button>
//                   <button className="reset-button" onClick={resetPoly1}>Reset</button>
//                 </>
//               )}
//             </div>
//           </div>
          
//           {showPoly1Input && (
//             <div className="input-panel" style={{ transform: 'scale(0.9)', transformOrigin: 'left top' }}>
//               <PolynomialInputDisplay
//                 isParent={false}
//                 onChange={(coefficients) => setPolynomial1Coefficients(coefficients)}
//               />
//             </div>
//           )}
//         </div>

//         <div className="polynomial-section">
//           <div className="polynomial-row">
//             <h3>Second<br/>Polynomial:</h3>
//             <div className="polynomial-display">
//               {polynomial2Coefficients.some(c => c !== '') ? (
//                 <BlockMath math={generatePolynomialLatex(polynomial2Coefficients)} />
//               ) : (
//                 <span className="not-entered">Not entered yet.</span>
//               )}
//             </div>
//             <div className="button-group">
//               {!showPoly2Input && !poly2Approved && (
//                 <>
//                   <button className="action-button" onClick={() => setShowPoly2Input(true)}>
//                     Enter Polynomial
//                   </button>
//                   <button className="reset-button" onClick={resetPoly2}>Reset</button>
//                 </>
//               )}
//               {showPoly2Input && !poly2Approved && (
//                 <button className="action-button" onClick={() => {
//                   setPoly2Approved(true);
//                   setShowPoly2Input(false);
//                 }}>
//                   OK
//                 </button>
//               )}
//               {poly2Approved && (
//                 <>
//                   <button className="edit-button" onClick={() => {
//                     setPoly2Approved(false);
//                     setShowPoly2Input(true);
//                   }}>
//                     Edit
//                   </button>
//                   <button className="reset-button" onClick={resetPoly2}>Reset</button>
//                 </>
//               )}
//             </div>
//           </div>
          
//           {showPoly2Input && (
//             <div className="input-panel" style={{ transform: 'scale(0.8)', transformOrigin: 'left top' }}>
//               <PolynomialInputDisplay
//                 isParent={false}
//                 onChange={(coefficients) => setPolynomial2Coefficients(coefficients)}
//               />
//             </div>
//           )}
//         </div>

//         {poly1Approved && poly2Approved && (
//           <button className="divide-button" onClick={performOperation}>
//             Calculate
//           </button>
//         )}

//         {error && <p className="error">{error}</p>}

//         {result.length > 0 && (
//           <div className="results">
//             <h3>Result:</h3>
//             <BlockMath math={generatePolynomialLatex(result)} />
//           </div>
//         )}
//       </div>
      
//       <div className="explanation-section">
//         <h2>How to Use</h2>
//         <ol>
//           <li>Select the desired operation (Addition or Subtraction)</li>
//           <li>Enter coefficients for the first polynomial</li>
//           <li>Enter coefficients for the second polynomial</li>
//           <li>Click "Calculate" to see the result</li>
//         </ol>
//         <p className="note">You can edit polynomials at any time by clicking the "Edit" button</p>
//       </div>
//     </div>
//   );
// };

// export default PolynomialCalculator;


import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import PolynomialInputDisplay from './PolynomialInputDisplay';
import ExplanationDetails from '../ExplanationDetails';
import './SyntheticDivisionCalculator.css';

const PolynomialCalculator = ({instructions=[]}) => {
  const [operation, setOperation] = useState('addition');
  const [polynomial1Coefficients, setPolynomial1Coefficients] = useState([]);
  const [polynomial2Coefficients, setPolynomial2Coefficients] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');
  const [showPoly1Input, setShowPoly1Input] = useState(false);
  const [showPoly2Input, setShowPoly2Input] = useState(false);
  const [poly1Approved, setPoly1Approved] = useState(false);
  const [poly2Approved, setPoly2Approved] = useState(false);

//   const instructions = [
//     'Select the desired operation (Addition or Subtraction)',
//     'Set up your first polynomial:press "Enter Polynomial", select a degree and then enter coefficients or press "Create Random".You may edit it by pressing "Edit" button later or dismiss by "Reset" button. ',
//     'Set up the second polynomial (if needed)',
//     'Click "Calculate" to see the result'
//   ];

// const instructions = [
//     'Select the desired operation (Addition or Subtraction)',
//     'Press \"Enter Polynomial\" to start setting up your first polynomial',
//     'Select a degree for your polynomial',
//     'Enter coefficients manually or press \"Create Random\" to generate them (you may use both ways)',
//     'Click \"OK\" when done (you can edit later via \"Edit\" button or reset with \"Reset\" button)',
//     'Repeat the same steps for the second polynomial (if needed for chosen operation)',
//     'Click \"Calculate\" to see the result'
//   ];

  const resetAll = () => {
    setPolynomial1Coefficients([]);
    setPolynomial2Coefficients([]);
    setResult([]);
    setError('');
    setShowPoly1Input(false);
    setShowPoly2Input(false);
    setPoly1Approved(false);
    setPoly2Approved(false);
  };

  const resetPoly1 = () => {
    setPolynomial1Coefficients([]);
    setShowPoly1Input(false);
    setPoly1Approved(false);
  };

  const resetPoly2 = () => {
    setPolynomial2Coefficients([]);
    setShowPoly2Input(false);
    setPoly2Approved(false);
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


  const performOperation = () => {
    if (!polynomial1Coefficients.length || !polynomial2Coefficients.length) {
      setError('Please input both polynomials.');
      return;
    }
  
    setError('');
    
    const maxDegree = Math.max(
      polynomial1Coefficients.length - 1, 
      polynomial2Coefficients.length - 1
    );
  
    const normalized1 = new Array(maxDegree + 1).fill('');  // Initialize with empty strings
    const normalized2 = new Array(maxDegree + 1).fill('');  // Initialize with empty strings
  
    // Preserve string values including '0' and '-0'
    for (let i = 0; i < polynomial1Coefficients.length; i++) {
      normalized1[i] = polynomial1Coefficients[i];
    }
    for (let i = 0; i < polynomial2Coefficients.length; i++) {
      normalized2[i] = polynomial2Coefficients[i];
    }
  
    const resultArray = normalized1.map((coef, idx) => {
      const val1 = coef === '' || coef === '0' || coef === '-0' ? 0 : Number(coef);
      const val2 = normalized2[idx] === '' || normalized2[idx] === '0' || normalized2[idx] === '-0' ? 0 : Number(normalized2[idx]);
      
      const result = operation === 'addition' ? val1 + val2 : val1 - val2;
      return result === 0 ? '' : result.toString();  // Convert zero results to empty string
    });
  
    // Clean up trailing empty strings
    while (resultArray.length > 1 && resultArray[resultArray.length - 1] === '') {
      resultArray.pop();
    }
  
    setResult(resultArray);
  };

//   const performOperation = () => {
//     if (!polynomial1Coefficients.length || !polynomial2Coefficients.length) {
//       setError('Please input both polynomials.');
//       return;
//     }
  
//     setError('');
    
//     const maxDegree = Math.max(
//       polynomial1Coefficients.length - 1, 
//       polynomial2Coefficients.length - 1
//     );
  
//     const normalized1 = new Array(maxDegree + 1).fill(0);
//     const normalized2 = new Array(maxDegree + 1).fill(0);
  
//     for (let i = 0; i < polynomial1Coefficients.length; i++) {
//       normalized1[i] = Number(polynomial1Coefficients[i]) || 0;
//     }
//     for (let i = 0; i < polynomial2Coefficients.length; i++) {
//       normalized2[i] = Number(polynomial2Coefficients[i]) || 0;
//     }
  
//     const resultArray = normalized1.map((coef, idx) => {
//       return operation === 'addition' 
//         ? coef + normalized2[idx] 
//         : coef - normalized2[idx];
//     });
  
//     while (resultArray.length > 1 && resultArray[resultArray.length - 1] === 0) {
//       resultArray.pop();
//     }
  
//     setResult(resultArray);
//   };

  return (
    <div className="main-container">
      <div className="content-section">
        {/* <div className="header-section">
          <div className="operation-selector" style={{ display: 'flex', gap: '20px' }}>
            <label>
              <input
                type="radio"
                value="addition"
                checked={operation === 'addition'}
                onChange={(e) => setOperation(e.target.value)}
              /> Addition
            </label>
            <label>
              <input
                type="radio"
                value="subtraction"
                checked={operation === 'subtraction'}
                onChange={(e) => setOperation(e.target.value)}
              /> Subtraction
            </label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ transform: 'scale(0.85)', transformOrigin: 'right center' }}>
              <ExplanationDetails 
                title="How to use calculator"
                instructions={instructions}
              />
            </div>
            <button className="reset-all-button" onClick={resetAll}>Reset All</button>
          </div>
        </div> */}


{/* <div className="header-section">
  <div className="top-controls">
    <div className="operation-selector">
      <label>
        <input
          type="radio"
          value="addition"
          checked={operation === 'addition'}
          onChange={(e) => setOperation(e.target.value)}
        />
        <span>Addition</span>
      </label>
      <label>
        <input
          type="radio"
          value="subtraction"
          checked={operation === 'subtraction'}
          onChange={(e) => setOperation(e.target.value)}
        />
        <span>Subtraction</span>
      </label>
    </div>
    <button className="reset-all-button" onClick={resetAll}>Reset All</button>
  </div>
  <ExplanationDetails 
    title="How to use calculator"
    instructions={instructions}
  />
</div> */}

{/* 
<div className="header-section">
  <div className="explanation-container">
    <ExplanationDetails 
      title="How to use calculator"
      instructions={instructions}
    />
  </div>
  <div className="controls-row">
    <div className="operation-selector">
      <label>
        <input
          type="radio"
          value="addition"
          checked={operation === 'addition'}
          onChange={(e) => setOperation(e.target.value)}
        />
        <span>Addition</span>
      </label>
      <label>
        <input
          type="radio"
          value="subtraction"
          checked={operation === 'subtraction'}
          onChange={(e) => setOperation(e.target.value)}
        />
        <span>Subtraction</span>
      </label>
    </div>
    <button className="reset-all-button" onClick={resetAll}>Reset All</button>
  </div>
</div> */}


<div className="header-section">
  {instructions&&<div className="explanation-container">
    <ExplanationDetails 
      title="How to use this calculator"
      instructions={instructions}
    />
  </div>}
  <div className="buttons-container">
    <div className="operation-selector">
      <input
        type="radio"
        id="addition"
        value="addition"
        checked={operation === 'addition'}
        onChange={(e) => setOperation(e.target.value)}
      />
      <label htmlFor="addition">Addition</label>
      <input
        type="radio"
        id="subtraction"
        value="subtraction"
        checked={operation === 'subtraction'}
        onChange={(e) => setOperation(e.target.value)}
      />
      <label htmlFor="subtraction">Subtraction</label>
    </div>
    <button className="reset-all-button" onClick={resetAll}>Reset All</button>
  </div>
</div>

        <div className="polynomial-section">
          <div className="polynomial-row">
            <h3 >First<br/>Polynomial:</h3>
            <div className="polynomial-display">
              {polynomial1Coefficients.some(c => c !== '') ? (
                <BlockMath math={generatePolynomialLatex(polynomial1Coefficients)} />
              ) : (
                <span className="not-entered">Not entered yet.</span>
              )}
            </div>
            <div className="button-group">
              {!showPoly1Input && !poly1Approved && (
                <>
                  <button className="action-button" onClick={() => setShowPoly1Input(true)}>
                    Enter Polynomial
                  </button>
                  <button className="reset-button" onClick={resetPoly1}>Reset</button>
                </>
              )}
              {showPoly1Input && !poly1Approved && (
                <button className="action-button" onClick={() => {
                  setPoly1Approved(true);
                  setShowPoly1Input(false);
                }}>
                  OK
                </button>
              )}
              {poly1Approved && (
                <>
                  <button className="edit-button" onClick={() => {
                    setPoly1Approved(false);
                    setShowPoly1Input(true);
                  }}>
                    Edit
                  </button>
                  <button className="reset-button" onClick={resetPoly1}>Reset</button>
                </>
              )}
            </div>
          </div>
          
          {showPoly1Input && (
            <div className="input-panel" style={{ transform: 'scale(0.9)', transformOrigin: 'left top' }}>
              <PolynomialInputDisplay
                isParent={false}
                onChange={(coefficients) => setPolynomial1Coefficients(coefficients)}
              />
            </div>
          )}
        </div>

        <div className="polynomial-section">
          <div className="polynomial-row">
            <h3 >Second<br/>Polynomial:</h3>
            <div className="polynomial-display">
              {polynomial2Coefficients.some(c => c !== '') ? (
                <BlockMath math={generatePolynomialLatex(polynomial2Coefficients)} />
              ) : (
                <span className="not-entered">Not entered yet.</span>
              )}
            </div>
            <div className="button-group">
              {!showPoly2Input && !poly2Approved && (
                <>
                  <button className="action-button" onClick={() => setShowPoly2Input(true)}>
                    Enter Polynomial
                  </button>
                  <button className="reset-button" onClick={resetPoly2}>Reset</button>
                </>
              )}
              {showPoly2Input && !poly2Approved && (
                <button className="action-button" onClick={() => {
                  setPoly2Approved(true);
                  setShowPoly2Input(false);
                }}>
                  OK
                </button>
              )}
              {poly2Approved && (
                <>
                  <button className="edit-button" onClick={() => {
                    setPoly2Approved(false);
                    setShowPoly2Input(true);
                  }}>
                    Edit
                  </button>
                  <button className="reset-button" onClick={resetPoly2}>Reset</button>
                </>
              )}
            </div>
          </div>
          
          {showPoly2Input && (
            <div className="input-panel" style={{ transform: 'scale(0.8)', transformOrigin: 'left top' }}>
              <PolynomialInputDisplay
                isParent={false}
                onChange={(coefficients) => setPolynomial2Coefficients(coefficients)}
              />
            </div>
          )}
        </div>

        {poly1Approved && poly2Approved && (
          <button className="divide-button" onClick={performOperation}>
            Calculate
          </button>
        )}

        {error && <p className="error">{error}</p>}

        {result.length > 0 && (
          <div className="results">
            <h3>Result:</h3>
            <BlockMath math={generatePolynomialLatex(result)} />
          </div>
        )}
      </div>
      
      <div className="explanation-section">
        {/* Reserved for operation explanations */}
      </div>
    </div>
  );
};

export default PolynomialCalculator;