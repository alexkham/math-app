// // // FractionCalculator.js
// // import { useState } from 'react';
// // import styles from './FractionCalculator.module.css';

// // export default function FractionCalculator() {
// //   const [operation, setOperation] = useState('float_to_frac');
// //   const [input1, setInput1] = useState('');
// //   const [input2, setInput2] = useState('');
// //   const [num1, setNum1] = useState('');
// //   const [den1, setDen1] = useState('');
// //   const [num2, setNum2] = useState('');
// //   const [den2, setDen2] = useState('');
// //   const [fractionOp, setFractionOp] = useState('add');
// //   const [result, setResult] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
  
// //   const API_URL = 'https://www.pickjourney.com';

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);
    
// //     try {
// //       let url = '';
      
// //       switch (operation) {
// //         case 'float_to_frac':
// //           url = `${API_URL}/fractions/float_to_frac/${input1}/`;
// //           break;
// //         case 'float_to_mixed':
// //           url = `${API_URL}/fractions/float_to_mixed/${input1}`;
// //           break;
// //         case 'inverse':
// //           url = `${API_URL}/fractions/inverse/${input1}/`;
// //           break;
// //         case 'calculate_fraction':
// //           url = `${API_URL}/fractions/calculate_fraction?num1=${num1}&den1=${den1}&operation=${fractionOp}&num2=${num2}&den2=${den2}`;
// //           break;
// //         case 'mixed_to_float':
// //           url = `${API_URL}/fractions/mixed_to_float?x=${encodeURIComponent(input1)}`;
// //           break;
// //         case 'add_mixed':
// //           url = `${API_URL}/fractions/add_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
// //           break;
// //         case 'subtract_mixed':
// //           url = `${API_URL}/fractions/subtract_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
// //           break;
// //         case 'multiply_mixed':
// //           url = `${API_URL}/fractions/multiply_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
// //           break;
// //         case 'divide_mixed':
// //           url = `${API_URL}/fractions/divide_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
// //           break;
// //         default:
// //           throw new Error('Invalid operation');
// //       }
      
// //       const response = await fetch(url);
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }
      
// //       const data = await response.json();
// //       setResult(data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h1 className={styles.title}>Fraction Calculator</h1>
      
// //       <form onSubmit={handleSubmit} className={styles.form}>
// //         <div className={styles.formGroup}>
// //           <label className={styles.label}>Operation:</label>
// //           <select 
// //             value={operation} 
// //             onChange={(e) => setOperation(e.target.value)}
// //             className={styles.select}
// //           >
// //             <option value="float_to_frac">Convert Float to Fraction</option>
// //             <option value="float_to_mixed">Convert Float to Mixed Number</option>
// //             <option value="inverse">Find Inverse (1/x)</option>
// //             <option value="calculate_fraction">Basic Fraction Operations</option>
// //             <option value="mixed_to_float">Convert Mixed Number to Float</option>
// //             <option value="add_mixed">Add Mixed Numbers</option>
// //             <option value="subtract_mixed">Subtract Mixed Numbers</option>
// //             <option value="multiply_mixed">Multiply Mixed Numbers</option>
// //             <option value="divide_mixed">Divide Mixed Numbers</option>
// //           </select>
// //         </div>
        
// //         {operation === 'calculate_fraction' ? (
// //           <div className={styles.fractionCalculator}>
// //             <div className={styles.formGroup}>
// //               <label className={styles.label}>First Fraction:</label>
// //               <div className={styles.fractionInputs}>
// //                 <input
// //                   type="text"
// //                   value={num1}
// //                   onChange={(e) => setNum1(e.target.value)}
// //                   placeholder="Numerator"
// //                   className={styles.input}
// //                 />
// //                 <span className={styles.fractionDivider}>⁄</span>
// //                 <input
// //                   type="text"
// //                   value={den1}
// //                   onChange={(e) => setDen1(e.target.value)}
// //                   placeholder="Denominator"
// //                   className={styles.input}
// //                 />
// //               </div>
// //             </div>
            
// //             <div className={styles.formGroup}>
// //               <label className={styles.label}>Operation:</label>
// //               <select 
// //                 value={fractionOp} 
// //                 onChange={(e) => setFractionOp(e.target.value)}
// //                 className={styles.select}
// //               >
// //                 <option value="add">Add (+)</option>
// //                 <option value="subtract">Subtract (-)</option>
// //                 <option value="multiply">Multiply (×)</option>
// //                 <option value="divide">Divide (÷)</option>
// //               </select>
// //             </div>
            
// //             <div className={styles.formGroup}>
// //               <label className={styles.label}>Second Fraction:</label>
// //               <div className={styles.fractionInputs}>
// //                 <input
// //                   type="text"
// //                   value={num2}
// //                   onChange={(e) => setNum2(e.target.value)}
// //                   placeholder="Numerator"
// //                   className={styles.input}
// //                 />
// //                 <span className={styles.fractionDivider}>⁄</span>
// //                 <input
// //                   type="text"
// //                   value={den2}
// //                   onChange={(e) => setDen2(e.target.value)}
// //                   placeholder="Denominator"
// //                   className={styles.input}
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         ) : ['add_mixed', 'subtract_mixed', 'multiply_mixed', 'divide_mixed'].includes(operation) ? (
// //           <div className={styles.mixedNumbers}>
// //             <div className={styles.formGroup}>
// //               <label className={styles.label}>First Mixed Number:</label>
// //               <input
// //                 type="text"
// //                 value={input1}
// //                 onChange={(e) => setInput1(e.target.value)}
// //                 placeholder="e.g., 1 1/2"
// //                 className={styles.input}
// //               />
// //               <p className={styles.hint}>Format: whole number space fraction (e.g., "1 1/2")</p>
// //             </div>
            
// //             <div className={styles.formGroup}>
// //               <label className={styles.label}>Second Mixed Number:</label>
// //               <input
// //                 type="text"
// //                 value={input2}
// //                 onChange={(e) => setInput2(e.target.value)}
// //                 placeholder="e.g., 2 3/4"
// //                 className={styles.input}
// //               />
// //             </div>
// //           </div>
// //         ) : (
// //           <div className={styles.formGroup}>
// //             <label className={styles.label}>Input:</label>
// //             <input
// //               type="text"
// //               value={input1}
// //               onChange={(e) => setInput1(e.target.value)}
// //               placeholder={operation === 'mixed_to_float' ? "e.g., 1 1/2" : "e.g., 0.5"}
// //               className={styles.input}
// //             />
// //             {operation === 'mixed_to_float' && (
// //               <p className={styles.hint}>Format: whole number space fraction (e.g., "1 1/2")</p>
// //             )}
// //           </div>
// //         )}
        
// //         <button 
// //           type="submit" 
// //           disabled={loading}
// //           className={styles.button}
// //         >
// //           {loading ? 'Calculating...' : 'Calculate'}
// //         </button>
// //       </form>
      
// //       {error && (
// //         <div className={styles.error}>
// //           <p><strong>Error:</strong> {error}</p>
// //         </div>
// //       )}
      
// //       {result && (
// //         <div className={styles.result}>
// //           <h2 className={styles.resultTitle}>Result:</h2>
// //           {result.result && (
// //             <div className={styles.resultDisplay}>
// //               <span className={styles.resultValue}>{result.result}</span>
// //             </div>
// //           )}
// //           <pre className={styles.resultJson}>{JSON.stringify(result, null, 2)}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// // FractionCalculator.js
// import { useState } from 'react';
// import styles from './FractionCalculator.module.css';

// export default function FractionCalculator() {
//   const [operation, setOperation] = useState('calculate_fraction');
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [num1, setNum1] = useState('');
//   const [den1, setDen1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [den2, setDen2] = useState('');
//   const [fractionOp, setFractionOp] = useState('add');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
  
//   // const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

//   const API_URL = 'https://www.pickjourney.com';

//   const resetForm = () => {
//     setInput1('');
//     setInput2('');
//     setNum1('');
//     setDen1('');
//     setNum2('');
//     setDen2('');
//     setResult(null);
//     setError(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
    
//     try {
//       let url = '';
      
//       switch (operation) {
//         case 'float_to_frac':
//           url = `${API_URL}/fractions/float_to_frac/${input1}/`;
//           break;
//         case 'float_to_mixed':
//           url = `${API_URL}/fractions/float_to_mixed/${input1}`;
//           break;
//         case 'frac_to_float':
//           // Handle fraction to float manually
//           if (!num1 || !den1) {
//             throw new Error('Numerator and denominator required');
//           }
//           const floatResult = parseFloat(num1) / parseFloat(den1);
//           setResult({ result: floatResult.toString() });
//           setLoading(false);
//           return;
//         case 'inverse':
//           url = `${API_URL}/fractions/inverse/${input1}/`;
//           break;
//         case 'calculate_fraction':
//           url = `${API_URL}/fractions/calculate_fraction?num1=${num1}&den1=${den1}&operation=${fractionOp}&num2=${num2}&den2=${den2}`;
//           break;
//         case 'mixed_to_float':
//           url = `${API_URL}/fractions/mixed_to_float?x=${encodeURIComponent(input1)}`;
//           break;
//         case 'add_mixed':
//           url = `${API_URL}/fractions/add_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
//           break;
//         case 'subtract_mixed':
//           url = `${API_URL}/fractions/subtract_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
//           break;
//         case 'multiply_mixed':
//           url = `${API_URL}/fractions/multiply_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
//           break;
//         case 'divide_mixed':
//           url = `${API_URL}/fractions/divide_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
//           break;
//         default:
//           throw new Error('Invalid operation');
//       }
      
//       if (url) {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setResult(data);
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Fraction Calculator</h1>
      
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.formGroup}>
//           <label className={styles.label}>Operation:</label>
//           <select 
//             value={operation} 
//             onChange={(e) => {
//               setOperation(e.target.value);
//               resetForm();
//             }}
//             className={styles.select}
//           >
//             <option value="calculate_fraction">Basic Fraction Operations</option>
//             <option value="float_to_frac">Convert Float to Fraction</option>
//             <option value="float_to_mixed">Convert Float to Mixed Number</option>
//             <option value="frac_to_float">Convert Fraction to Decimal</option>
//             <option value="mixed_to_float">Convert Mixed Number to Float</option>
//             <option value="inverse">Find Inverse (1/x)</option>
//             <option value="add_mixed">Add Mixed Numbers</option>
//             <option value="subtract_mixed">Subtract Mixed Numbers</option>
//             <option value="multiply_mixed">Multiply Mixed Numbers</option>
//             <option value="divide_mixed">Divide Mixed Numbers</option>
//           </select>
//         </div>
        
//         {operation === 'calculate_fraction' ? (
//           <div className={styles.fractionCalculator}>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>First Fraction:</label>
//               <div className={styles.fractionInputs}>
//                 <input
//                   type="text"
//                   value={num1}
//                   onChange={(e) => setNum1(e.target.value)}
//                   placeholder="Numerator"
//                   className={styles.input}
//                 />
//                 <span className={styles.fractionDivider}>⁄</span>
//                 <input
//                   type="text"
//                   value={den1}
//                   onChange={(e) => setDen1(e.target.value)}
//                   placeholder="Denominator"
//                   className={styles.input}
//                 />
//               </div>
//             </div>
            
//             <div className={styles.formGroup}>
//               <label className={styles.label}>Operation:</label>
//               <select 
//                 value={fractionOp} 
//                 onChange={(e) => setFractionOp(e.target.value)}
//                 className={styles.select}
//               >
//                 <option value="add">Add (+)</option>
//                 <option value="subtract">Subtract (-)</option>
//                 <option value="multiply">Multiply (×)</option>
//                 <option value="divide">Divide (÷)</option>
//               </select>
//             </div>
            
//             <div className={styles.formGroup}>
//               <label className={styles.label}>Second Fraction:</label>
//               <div className={styles.fractionInputs}>
//                 <input
//                   type="text"
//                   value={num2}
//                   onChange={(e) => setNum2(e.target.value)}
//                   placeholder="Numerator"
//                   className={styles.input}
//                 />
//                 <span className={styles.fractionDivider}>⁄</span>
//                 <input
//                   type="text"
//                   value={den2}
//                   onChange={(e) => setDen2(e.target.value)}
//                   placeholder="Denominator"
//                   className={styles.input}
//                 />
//               </div>
//             </div>
//           </div>
//         ) : operation === 'frac_to_float' ? (
//           <div className={styles.fractionCalculator}>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>Fraction:</label>
//               <div className={styles.fractionInputs}>
//                 <input
//                   type="text"
//                   value={num1}
//                   onChange={(e) => setNum1(e.target.value)}
//                   placeholder="Numerator"
//                   className={styles.input}
//                 />
//                 <span className={styles.fractionDivider}>⁄</span>
//                 <input
//                   type="text"
//                   value={den1}
//                   onChange={(e) => setDen1(e.target.value)}
//                   placeholder="Denominator"
//                   className={styles.input}
//                 />
//               </div>
//             </div>
//           </div>
//         ) : ['add_mixed', 'subtract_mixed', 'multiply_mixed', 'divide_mixed'].includes(operation) ? (
//           <div className={styles.mixedNumbers}>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>First Mixed Number:</label>
//               <input
//                 type="text"
//                 value={input1}
//                 onChange={(e) => setInput1(e.target.value)}
//                 placeholder="e.g., 1 1/2"
//                 className={styles.input}
//               />
//               <p className={styles.hint}>Format: whole number space fraction (e.g., "1 1/2")</p>
//             </div>
            
//             <div className={styles.formGroup}>
//               <label className={styles.label}>Second Mixed Number:</label>
//               <input
//                 type="text"
//                 value={input2}
//                 onChange={(e) => setInput2(e.target.value)}
//                 placeholder="e.g., 2 3/4"
//                 className={styles.input}
//               />
//             </div>
//           </div>
//         ) : (
//           <div className={styles.formGroup}>
//             <label className={styles.label}>Input:</label>
//             <input
//               type="text"
//               value={input1}
//               onChange={(e) => setInput1(e.target.value)}
//               placeholder={operation === 'mixed_to_float' ? "e.g., 1 1/2" : "e.g., 0.5"}
//               className={styles.input}
//             />
//             {operation === 'mixed_to_float' && (
//               <p className={styles.hint}>Format: whole number space fraction (e.g., "1 1/2")</p>
//             )}
//           </div>
//         )}
        
//         <div className={styles.buttonGroup}>
//           <button 
//             type="submit" 
//             disabled={loading}
//             className={styles.button}
//           >
//             {loading ? 'Calculating...' : 'Calculate'}
//           </button>
          
//           <button 
//             type="button" 
//             onClick={resetForm}
//             className={`${styles.button} ${styles.resetButton}`}
//           >
//             Reset
//           </button>
//         </div>
//       </form>
      
//       {error && (
//         <div className={styles.error}>
//           <p><strong>Error:</strong> {error}</p>
//         </div>
//       )}
      
//       {result && (
//         <div className={styles.result}>
//           <h2 className={styles.resultTitle}>Result:</h2>
//           {result.result && (
//             <div className={styles.resultDisplay}>
//               <span className={styles.resultValue}>{result.result}</span>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }



// FractionCalculator.js
import { useState } from 'react';
import styles from './FractionCalculator.module.css';

export default function FractionCalculator() {
  const [operation, setOperation] = useState('calculate_fraction');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [num1, setNum1] = useState('');
  const [den1, setDen1] = useState('');
  const [num2, setNum2] = useState('');
  const [den2, setDen2] = useState('');
  const [fractionOp, setFractionOp] = useState('add');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const [apiError, setApiError] = useState(null);
  
  // const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  const API_URL = 'https://www.pickjourney.com';

  const resetForm = () => {
    setInput1('');
    setInput2('');
    setNum1('');
    setDen1('');
    setNum2('');
    setDen2('');
    setResult(null);
    setValidationError(null);
    setApiError(null);
  };

  const validateInputs = () => {
    switch (operation) {
      case 'float_to_frac':
      case 'float_to_mixed':
      case 'inverse':
        if (!input1 || isNaN(parseFloat(input1))) {
          setValidationError('Please enter a valid number.');
          return false;
        }
        break;
      case 'frac_to_float':
        if (!num1 || isNaN(parseInt(num1))) {
          setValidationError('Please enter a valid numerator.');
          return false;
        }
        if (!den1 || isNaN(parseInt(den1))) {
          setValidationError('Please enter a valid denominator.');
          return false;
        }
        if (parseInt(den1) === 0) {
          setValidationError('Denominator cannot be zero.');
          return false;
        }
        break;
      case 'calculate_fraction':
        if (!num1 || isNaN(parseInt(num1))) {
          setValidationError('Please enter a valid numerator for the first fraction.');
          return false;
        }
        if (!den1 || isNaN(parseInt(den1))) {
          setValidationError('Please enter a valid denominator for the first fraction.');
          return false;
        }
        if (parseInt(den1) === 0) {
          setValidationError('First denominator cannot be zero.');
          return false;
        }
        if (!num2 || isNaN(parseInt(num2))) {
          setValidationError('Please enter a valid numerator for the second fraction.');
          return false;
        }
        if (!den2 || isNaN(parseInt(den2))) {
          setValidationError('Please enter a valid denominator for the second fraction.');
          return false;
        }
        if (parseInt(den2) === 0) {
          setValidationError('Second denominator cannot be zero.');
          return false;
        }
        if (fractionOp === 'divide' && parseInt(num2) === 0) {
          setValidationError('Cannot divide by zero.');
          return false;
        }
        break;
      case 'mixed_to_float':
        const mixedPattern = /^-?\d+\s+\d+\/\d+$|^-?\d+\/\d+$/;
        if (!mixedPattern.test(input1)) {
          setValidationError('Please enter a valid mixed number (e.g., "1 1/2") or fraction (e.g., "3/4").');
          return false;
        }
        break;
      case 'add_mixed':
      case 'subtract_mixed':
      case 'multiply_mixed':
      case 'divide_mixed':
        const pattern = /^-?\d+\s+\d+\/\d+$|^-?\d+\/\d+$/;
        if (!pattern.test(input1)) {
          setValidationError('Please enter a valid first mixed number (e.g., "1 1/2") or fraction (e.g., "3/4").');
          return false;
        }
        if (!pattern.test(input2)) {
          setValidationError('Please enter a valid second mixed number (e.g., "2 3/4") or fraction (e.g., "1/2").');
          return false;
        }
        if (operation === 'divide_mixed' && input2 === '0' || input2 === '0/1') {
          setValidationError('Cannot divide by zero.');
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError(null);
    setApiError(null);
    
    if (!validateInputs()) {
      return;
    }
    
    setLoading(true);
    
    try {
      let url = '';
      
      switch (operation) {
        case 'float_to_frac':
          url = `${API_URL}/fractions/float_to_frac/${input1}/`;
          break;
        case 'float_to_mixed':
          url = `${API_URL}/fractions/float_to_mixed/${input1}`;
          break;
        case 'frac_to_float':
          // Handle fraction to float manually
          const floatResult = parseFloat(num1) / parseFloat(den1);
          setResult({ result: floatResult.toString() });
          setLoading(false);
          return;
        case 'inverse':
          url = `${API_URL}/fractions/inverse/${input1}/`;
          break;
        case 'calculate_fraction':
          url = `${API_URL}/fractions/calculate_fraction?num1=${num1}&den1=${den1}&operation=${fractionOp}&num2=${num2}&den2=${den2}`;
          break;
        case 'mixed_to_float':
          url = `${API_URL}/fractions/mixed_to_float?x=${encodeURIComponent(input1)}`;
          break;
        case 'add_mixed':
          url = `${API_URL}/fractions/add_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        case 'subtract_mixed':
          url = `${API_URL}/fractions/subtract_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        case 'multiply_mixed':
          url = `${API_URL}/fractions/multiply_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        case 'divide_mixed':
          url = `${API_URL}/fractions/divide_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        default:
          throw new Error('Invalid operation');
      }
      
      if (url) {
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          if (errorData.error) {
            setValidationError(errorData.error);
          } else {
            setApiError(`Server error: ${response.status} ${response.statusText}`);
          }
          return;
        }
        
        const data = await response.json();
        if (data.error) {
          setValidationError(data.error);
        } else {
          setResult(data);
        }
      }
    } catch (err) {
      setApiError(`Connection error: ${err.message}. Please check your network connection or try again later.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Fraction Calculator</h1> */}
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Operation:</label>
          <select 
            value={operation} 
            onChange={(e) => {
              setOperation(e.target.value);
              resetForm();
            }}
            className={styles.select}
          >
            <option value="calculate_fraction">Basic Fraction Operations</option>
            <option value="float_to_frac">Convert Float to Fraction</option>
            <option value="float_to_mixed">Convert Float to Mixed Number</option>
            <option value="frac_to_float">Convert Fraction to Decimal</option>
            <option value="mixed_to_float">Convert Mixed Number to Float</option>
            <option value="inverse">Find Inverse (1/x)</option>
            <option value="add_mixed">Add Mixed Numbers</option>
            <option value="subtract_mixed">Subtract Mixed Numbers</option>
            <option value="multiply_mixed">Multiply Mixed Numbers</option>
            <option value="divide_mixed">Divide Mixed Numbers</option>
          </select>
        </div>
        
        {operation === 'calculate_fraction' ? (
          <div className={styles.fractionCalculator}>
            <div className={styles.formGroup}>
              <label className={styles.label}>First Fraction:</label>
              <div className={styles.fractionInputs}>
                <input
                  type="text"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                  placeholder="Numerator"
                  className={styles.input}
                />
                <span className={styles.fractionDivider}>⁄</span>
                <input
                  type="text"
                  value={den1}
                  onChange={(e) => setDen1(e.target.value)}
                  placeholder="Denominator"
                  className={styles.input}
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Operation:</label>
              <select 
                value={fractionOp} 
                onChange={(e) => setFractionOp(e.target.value)}
                className={styles.select}
              >
                <option value="add">Add (+)</option>
                <option value="subtract">Subtract (-)</option>
                <option value="multiply">Multiply (×)</option>
                <option value="divide">Divide (÷)</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Second Fraction:</label>
              <div className={styles.fractionInputs}>
                <input
                  type="text"
                  value={num2}
                  onChange={(e) => setNum2(e.target.value)}
                  placeholder="Numerator"
                  className={styles.input}
                />
                <span className={styles.fractionDivider}>⁄</span>
                <input
                  type="text"
                  value={den2}
                  onChange={(e) => setDen2(e.target.value)}
                  placeholder="Denominator"
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        ) : operation === 'frac_to_float' ? (
          <div className={styles.fractionCalculator}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Fraction:</label>
              <div className={styles.fractionInputs}>
                <input
                  type="text"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                  placeholder="Numerator"
                  className={styles.input}
                />
                <span className={styles.fractionDivider}>⁄</span>
                <input
                  type="text"
                  value={den1}
                  onChange={(e) => setDen1(e.target.value)}
                  placeholder="Denominator"
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        ) : ['add_mixed', 'subtract_mixed', 'multiply_mixed', 'divide_mixed'].includes(operation) ? (
          <div className={styles.mixedNumbers}>
            <div className={styles.formGroup}>
              <label className={styles.label}>First Mixed Number:</label>
              <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="e.g., 1 1/2"
                className={styles.input}
              />
              <p className={styles.hint}>Format: whole number space fraction (e.g., "1 1/2")</p>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Second Mixed Number:</label>
              <input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="e.g., 2 3/4"
                className={styles.input}
              />
            </div>
          </div>
        ) : (
          <div className={styles.formGroup}>
            <label className={styles.label}>Input:</label>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder={operation === 'mixed_to_float' ? "e.g., 1 1/2" : "e.g., 0.5"}
              className={styles.input}
            />
            {operation === 'mixed_to_float' && (
              <p className={styles.hint}>Format: whole number space fraction (e.g., "1 1/2")</p>
            )}
          </div>
        )}
        
        <div className={styles.buttonGroup}>
          <button 
            type="submit" 
            disabled={loading}
            className={styles.button}
          >
            {loading ? 'Calculating...' : 'Calculate'}
          </button>
          
          <button 
            type="button" 
            onClick={resetForm}
            className={`${styles.button} ${styles.resetButton}`}
          >
            Reset
          </button>
        </div>
      </form>
      
      {validationError && (
        <div className={styles.validationError}>
          <p>{validationError}</p>
        </div>
      )}
      
      {apiError && (
        <div className={styles.apiError}>
          <p>{apiError}</p>
        </div>
      )}
      
      {result && (
        <div className={styles.result}>
          <h2 className={styles.resultTitle}>Result:</h2>
          {result.result && (
            <div className={styles.resultDisplay}>
              <span className={styles.resultValue}>{result.result}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}