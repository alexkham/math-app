// // // // 'use client'

// // // // import React, { useState } from 'react';
// // // // import { capitalizeWords, range } from '@/app/utils/utils-functions';
// // // // import './TrigoCalculator.css';

// // // // const buttonStyle1 = {
// // // //     backgroundColor: '#1d6bd8',
// // // //     color: 'white',
// // // //     height: '2.3rem',
// // // //     fontSize: '0.875rem',
// // // //     fontWeight: '500',
// // // //     padding: '0.4rem 0.5rem',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //     margin: '5px',
// // // //     outerHeight: '2rem',
// // // //     border: 'solid 1px black'
// // // // };

// // // // const buttonStyle2 = {
// // // //     backgroundColor: '#555556',
// // // //     color: 'white',
// // // //     innerHeight: '2rem',
// // // //     height: '2.3rem',
// // // //     fontWeight: '500',
// // // //     padding: '0.4rem 1rem',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //     margin: '5px',
// // // //     border: 'solid 1px black'
// // // // };

// // // // const InverseTrigoCalculator = ({ explanations }) => {
// // // //     const [ratio, setRatio] = useState('');
// // // //     const [trigoData, setTrigoData] = useState({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
// // // //     const [loading, setLoading] = useState(false);
// // // //     const [error, setError] = useState('');
// // // //     const [units, setUnits] = useState('degrees');
// // // //     const [decimalPlaces, setDecimalPlaces] = useState(5);
// // // //     const [selectedFunction, setSelectedFunction] = useState(null);

// // // //     const calculateInverseTrig = (ratio) => {
// // // //         const val = parseFloat(ratio);
        
// // // //         if (isNaN(val)) return { arcsin: NaN, arccos: NaN, arctan: NaN };
        
// // // //         const withinDomain = val >= -1 && val <= 1;
        
// // // //         let results = {
// // // //             arcsin: withinDomain ? Math.asin(val) : null,
// // // //             arccos: withinDomain ? Math.acos(val) : null,
// // // //             arctan: Math.atan(val)
// // // //         };

// // // //         if (units === 'degrees') {
// // // //             Object.keys(results).forEach(key => {
// // // //                 if (results[key] !== null) {
// // // //                     results[key] = results[key] * (180/Math.PI);
// // // //                 }
// // // //             });
// // // //         }
        
// // // //         return results;
// // // //     };

// // // //     const handleCalculate = (e) => {
// // // //         e.preventDefault();
// // // //         setLoading(true);
// // // //         setError('');
// // // //         try {
// // // //             const ratioVal = ratio || 0;
// // // //             const results = calculateInverseTrig(ratioVal);
// // // //             setTrigoData(results);
// // // //             setRatio('');
// // // //         } catch (err) {
// // // //             setError('Error calculating results');
// // // //             console.error('Error details:', err);
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     const handleUnitChange = (event) => {
// // // //         const selectedUnit = event.target.value;
// // // //         setUnits(selectedUnit);
// // // //     };

// // // //     const handlePrecision = (e) => {
// // // //         setDecimalPlaces(e.target.value);
// // // //     };

// // // //     const resetAll = () => {
// // // //         setRatio('');
// // // //         setUnits('degrees');
// // // //         setDecimalPlaces(5);
// // // //         setTrigoData({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
// // // //         setSelectedFunction(null);
// // // //     };

// // // //     const copyToClipboard = (value) => {
// // // //         navigator.clipboard.writeText(value);
// // // //     };

// // // //     const handleFunctionClick = (func) => {
// // // //         setSelectedFunction(func);
// // // //     };

// // // //     const validateRatio = (value) => {
// // // //         const num = parseFloat(value);
// // // //         return (num >= -1 && num <= 1) || value === '' || value === '-';
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <legend>
// // // //                 <div className="legend-container">
// // // //                     <div className="calculator-left">
// // // //                         <div className='upper-container'>
// // // //                             <form onSubmit={handleCalculate}>
// // // //                                 <div className='input-container'>
// // // //                                     <label>Ratio :</label>
// // // //                                     <input
// // // //                                         className='my-input'
// // // //                                         type="number"
// // // //                                         step="any"
// // // //                                         value={ratio}
// // // //                                         onChange={(e) => {
// // // //                                             if (validateRatio(e.target.value)) {
// // // //                                                 setRatio(e.target.value);
// // // //                                             }
// // // //                                         }}
// // // //                                         placeholder="Enter ratio (-1 to 1 for arcsin/arccos)"
// // // //                                     />
// // // //                                 </div>
// // // //                                 <div className='input-container'>
// // // //                                     <label htmlFor='units'>Select Units: </label>
// // // //                                     <select
// // // //                                         className='my-input'
// // // //                                         name='units'
// // // //                                         id='units'
// // // //                                         value={units}
// // // //                                         onChange={handleUnitChange}
// // // //                                     >
// // // //                                         <option value={'radians'}>Radians</option>
// // // //                                         <option value={'degrees'}>Degrees</option>
// // // //                                     </select>
// // // //                                 </div>
// // // //                                 <div className='input-container'>
// // // //                                     <label htmlFor='decimal'>Select Precision Level : </label>
// // // //                                     <select
// // // //                                         className='my-input'
// // // //                                         name='decimal'
// // // //                                         id='decimal'
// // // //                                         value={decimalPlaces}
// // // //                                         onChange={handlePrecision}
// // // //                                     >
// // // //                                         {range(1, 15).map((num, index) => (
// // // //                                             <option key={index} value={num}>{num + "  Decimal Places"}</option>
// // // //                                         ))}
// // // //                                     </select>
// // // //                                 </div>
// // // //                                 <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// // // //                                 <button onClick={resetAll} style={buttonStyle2}>Reset</button>
// // // //                             </form>
// // // //                         </div>
// // // //                         <br /><br />

// // // //                         {trigoData && (
// // // //                             <table className="my-table">
// // // //                                 <thead>
// // // //                                     <tr>
// // // //                                         {Object.keys(trigoData).map((key, index) => (
// // // //                                             <th key={index} onClick={() => handleFunctionClick(key)}>
// // // //                                                 {key}
// // // //                                                 <span className="tooltip">Click for Explanation</span>
// // // //                                             </th>
// // // //                                         ))}
// // // //                                     </tr>
// // // //                                 </thead>
// // // //                                 <tbody>
// // // //                                     <tr>
// // // //                                         {Object.values(trigoData).map((value, index) => {
// // // //                                             if (value === null) {
// // // //                                                 return (
// // // //                                                     <td key={index}>
// // // //                                                         Undefined
// // // //                                                         <button onClick={() => copyToClipboard("Undefined")}>
// // // //                                                             Copy
// // // //                                                         </button>
// // // //                                                     </td>
// // // //                                                 );
// // // //                                             }
// // // //                                             if (Number.isNaN(value)) {
// // // //                                                 return (
// // // //                                                     <td key={index}>
// // // //                                                         ...
// // // //                                                         <button onClick={() => copyToClipboard("...")}>
// // // //                                                             Copy
// // // //                                                         </button>
// // // //                                                     </td>
// // // //                                                 );
// // // //                                             }

// // // //                                             const numericValue = parseFloat(value);
// // // //                                             const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
// // // //                                             return (
// // // //                                                 <td key={index}>
// // // //                                                     {displayValue}
// // // //                                                     <button onClick={() => copyToClipboard(displayValue)}>
// // // //                                                         Copy
// // // //                                                     </button>
// // // //                                                 </td>
// // // //                                             );
// // // //                                         })}
// // // //                                     </tr>
// // // //                                 </tbody>
// // // //                             </table>
// // // //                         )}
// // // //                     </div>
// // // //                     {selectedFunction && explanations[selectedFunction] && (
// // // //                         <div className="explanation-content">
// // // //                             <h3>{selectedFunction.toUpperCase()}</h3>
// // // //                             <p>{explanations[selectedFunction].description}</p>
// // // //                             {explanations[selectedFunction].link && (
// // // //                                 <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
// // // //                                     Learn more
// // // //                                 </a>
// // // //                             )}
// // // //                         </div>
// // // //                     )}
// // // //                 </div>
// // // //             </legend>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default InverseTrigoCalculator;

// // // 'use client'

// // // import React, { useState } from 'react';
// // // import { capitalizeWords, range } from '@/app/utils/utils-functions';
// // // import './TrigoCalculator.css';

// // // const buttonStyle1 = {
// // //     backgroundColor: '#1d6bd8',
// // //     color: 'white',
// // //     height: '2.3rem',
// // //     fontSize: '0.875rem',
// // //     fontWeight: '500',
// // //     padding: '0.4rem 0.5rem',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     margin: '5px',
// // //     outerHeight: '2rem',
// // //     border: 'solid 1px black'
// // // };

// // // const buttonStyle2 = {
// // //     backgroundColor: '#555556',
// // //     color: 'white',
// // //     innerHeight: '2rem',
// // //     height: '2.3rem',
// // //     fontWeight: '500',
// // //     padding: '0.4rem 1rem',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     margin: '5px',
// // //     border: 'solid 1px black'
// // // };

// // // const InverseTrigoCalculator = ({ explanations }) => {
// // //     const [ratio, setRatio] = useState('');
// // //     const [trigoData, setTrigoData] = useState({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
// // //     const [loading, setLoading] = useState(false);
// // //     const [error, setError] = useState('');
// // //     const [units, setUnits] = useState('degrees');
// // //     const [decimalPlaces, setDecimalPlaces] = useState(5);
// // //     const [selectedFunction, setSelectedFunction] = useState(null);

// // //     const calculateInverseTrig = (ratio) => {
// // //         const val = parseFloat(ratio);
        
// // //         if (isNaN(val)) return { arcsin: NaN, arccos: NaN, arctan: NaN };
        
// // //         let results = {
// // //             arcsin: null,
// // //             arccos: null,
// // //             arctan: Math.atan(val) // arctan works for any input
// // //         };

// // //         // Handle arcsin and arccos with domain validation
// // //         if (val >= -1 && val <= 1) {
// // //             results.arcsin = Math.asin(val);
// // //             results.arccos = Math.acos(val);
// // //         }

// // //         // Convert to degrees if needed
// // //         if (units === 'degrees') {
// // //             Object.keys(results).forEach(key => {
// // //                 if (results[key] !== null) {
// // //                     results[key] = results[key] * (180/Math.PI);
// // //                 }
// // //             });
// // //         }
        
// // //         return results;
// // //     };

// // //     const handleCalculate = (e) => {
// // //         e.preventDefault();
// // //         setLoading(true);
// // //         setError('');
// // //         try {
// // //             const ratioVal = ratio || 0;
// // //             const val = parseFloat(ratioVal);
            
// // //             // Error message for invalid input but only for arcsin/arccos
// // //             if (Math.abs(val) > 1) {
// // //                 setError('Input must be between -1 and 1 for arcsin and arccos. Arctan will still calculate.');
// // //             }
            
// // //             const results = calculateInverseTrig(ratioVal);
// // //             setTrigoData(results);
// // //             setRatio('');
// // //         } catch (err) {
// // //             setError('Error calculating results');
// // //             console.error('Error details:', err);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     const handleUnitChange = (event) => {
// // //         const selectedUnit = event.target.value;
// // //         setUnits(selectedUnit);
// // //     };

// // //     const handlePrecision = (e) => {
// // //         setDecimalPlaces(e.target.value);
// // //     };

// // //     const resetAll = () => {
// // //         setRatio('');
// // //         setUnits('degrees');
// // //         setDecimalPlaces(5);
// // //         setTrigoData({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
// // //         setSelectedFunction(null);
// // //         setError('');
// // //     };

// // //     const copyToClipboard = (value) => {
// // //         navigator.clipboard.writeText(value);
// // //     };

// // //     const handleFunctionClick = (func) => {
// // //         setSelectedFunction(func);
// // //     };

// // //     return (
// // //         <div>
// // //             <legend>
// // //                 <div className="legend-container">
// // //                     <div className="calculator-left">
// // //                         <div className='upper-container'>
// // //                             <form onSubmit={handleCalculate}>
// // //                                 <div className='input-container'>
// // //                                     <label>Ratio :</label>
// // //                                     <input
// // //                                         className='my-input'
// // //                                         type="number"
// // //                                         step="any"
// // //                                         value={ratio}
// // //                                         onChange={(e) => setRatio(e.target.value)}
// // //                                         placeholder="Enter ratio (any number for arctan, -1 to 1 for arcsin/arccos)"
// // //                                     />
// // //                                 </div>
// // //                                 <div className='input-container'>
// // //                                     <label htmlFor='units'>Select Output Units: </label>
// // //                                     <select
// // //                                         className='my-input'
// // //                                         name='units'
// // //                                         id='units'
// // //                                         value={units}
// // //                                         onChange={handleUnitChange}
// // //                                     >
// // //                                         <option value={'radians'}>Radians</option>
// // //                                         <option value={'degrees'}>Degrees</option>
// // //                                     </select>
// // //                                 </div>
// // //                                 <div className='input-container'>
// // //                                     <label htmlFor='decimal'>Select Precision Level : </label>
// // //                                     <select
// // //                                         className='my-input'
// // //                                         name='decimal'
// // //                                         id='decimal'
// // //                                         value={decimalPlaces}
// // //                                         onChange={handlePrecision}
// // //                                     >
// // //                                         {range(1, 15).map((num, index) => (
// // //                                             <option key={index} value={num}>{num + "  Decimal Places"}</option>
// // //                                         ))}
// // //                                     </select>
// // //                                 </div>
// // //                                 <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// // //                                 <button onClick={resetAll} style={buttonStyle2}>Reset</button>
// // //                             </form>
// // //                             {error && <div className="error-message" style={{color: 'red', margin: '10px 0'}}>{error}</div>}
// // //                         </div>
// // //                         <br /><br />

// // //                         {trigoData && (
// // //                             <table className="my-table">
// // //                                 <thead>
// // //                                     <tr>
// // //                                         {Object.keys(trigoData).map((key, index) => (
// // //                                             <th key={index} onClick={() => handleFunctionClick(key)}>
// // //                                                 {key}
// // //                                                 <span className="tooltip">Click for Explanation</span>
// // //                                             </th>
// // //                                         ))}
// // //                                     </tr>
// // //                                 </thead>
// // //                                 <tbody>
// // //                                     <tr>
// // //                                         {Object.values(trigoData).map((value, index) => {
// // //                                             if (value === null) {
// // //                                                 return (
// // //                                                     <td key={index}>
// // //                                                         Undefined
// // //                                                         <button onClick={() => copyToClipboard("Undefined")}>
// // //                                                             Copy
// // //                                                         </button>
// // //                                                     </td>
// // //                                                 );
// // //                                             }
// // //                                             if (Number.isNaN(value)) {
// // //                                                 return (
// // //                                                     <td key={index}>
// // //                                                         ...
// // //                                                         <button onClick={() => copyToClipboard("...")}>
// // //                                                             Copy
// // //                                                         </button>
// // //                                                     </td>
// // //                                                 );
// // //                                             }

// // //                                             const numericValue = parseFloat(value);
// // //                                             const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
// // //                                             return (
// // //                                                 <td key={index}>
// // //                                                     {displayValue}
// // //                                                     <button onClick={() => copyToClipboard(displayValue)}>
// // //                                                         Copy
// // //                                                     </button>
// // //                                                 </td>
// // //                                             );
// // //                                         })}
// // //                                     </tr>
// // //                                 </tbody>
// // //                             </table>
// // //                         )}
// // //                     </div>
// // //                     {selectedFunction && explanations[selectedFunction] && (
// // //                         <div className="explanation-content">
// // //                             <h3>{selectedFunction.toUpperCase()}</h3>
// // //                             <p>{explanations[selectedFunction].description}</p>
// // //                             {explanations[selectedFunction].link && (
// // //                                 <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
// // //                                     Learn more
// // //                                 </a>
// // //                             )}
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //             </legend>
// // //         </div>
// // //     );
// // // };

// // // export default InverseTrigoCalculator;
// // 'use client'

// // import React, { useState } from 'react';
// // import { capitalizeWords, range } from '@/app/utils/utils-functions';
// // import './InverseTrigoCalculator.css';

// // const buttonStyle1 = {
// //     backgroundColor: '#1d6bd8',
// //     color: 'white',
// //     height: '2.3rem',
// //     fontSize: '0.875rem',
// //     fontWeight: '500',
// //     padding: '0.4rem 0.5rem',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     margin: '5px',
// //     outerHeight: '2rem',
// //     border: 'solid 1px black'
// // };

// // const buttonStyle2 = {
// //     backgroundColor: '#555556',
// //     color: 'white',
// //     innerHeight: '2rem',
// //     height: '2.3rem',
// //     fontWeight: '500',
// //     padding: '0.4rem 1rem',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     margin: '5px',
// //     border: 'solid 1px black'
// // };

// // const InverseTrigoCalculator = ({ explanations }) => {
// //     const [ratio, setRatio] = useState('');
// //     const [trigoData, setTrigoData] = useState({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState('');
// //     const [decimalPlaces, setDecimalPlaces] = useState(5);
// //     const [selectedFunction, setSelectedFunction] = useState(null);

// //     const validateAndCalculate = (ratio) => {
// //         const val = parseFloat(ratio);
// //         if (isNaN(val)) return { arcsin: NaN, arccos: NaN, arctan: NaN };
        
// //         return {
// //             arcsin: (val >= -1 && val <= 1) ? Math.asin(val) : null,
// //             arccos: (val >= -1 && val <= 1) ? Math.acos(val) : null,
// //             arctan: Math.atan(val)
// //         };
// //     };

// //     const handleCalculate = (e) => {
// //         e.preventDefault();
// //         setLoading(true);
// //         setError('');
// //         try {
// //             const ratioVal = ratio || 0;
// //             const val = parseFloat(ratioVal);
            
// //             if (Math.abs(val) > 1) {
// //                 setError('Value outside [-1,1] range: arcsin/arccos undefined, arctan calculated');
// //             }
            
// //             const results = validateAndCalculate(ratioVal);
// //             setTrigoData(results);
// //             setRatio('');
// //         } catch (err) {
// //             setError('Calculation error');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const handlePrecision = (e) => {
// //         setDecimalPlaces(e.target.value);
// //     };

// //     const resetAll = () => {
// //         setRatio('');
// //         setDecimalPlaces(5);
// //         setTrigoData({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
// //         setSelectedFunction(null);
// //         setError('');
// //     };

// //     const copyToClipboard = (value) => {
// //         navigator.clipboard.writeText(value);
// //     };

// //     const handleFunctionClick = (func) => {
// //         setSelectedFunction(func);
// //     };

// //     return (
// //         <div className="calculator-container">
// //             <div className="calculator-main">
// //                 <div className="input-section">
// //                     <form onSubmit={handleCalculate}>
// //                         <div className='input-container'>
// //                             <label>Ratio :</label>
// //                             <input
// //                                 className='my-input'
// //                                 type="number"
// //                                 step="any"
// //                                 value={ratio}
// //                                 onChange={(e) => setRatio(e.target.value)}
// //                                 placeholder="Enter ratio"
// //                             />
// //                         </div>
// //                         <div className='input-container'>
// //                             <label htmlFor='decimal'>Precision Level : </label>
// //                             <select
// //                                 className='my-input'
// //                                 name='decimal'
// //                                 id='decimal'
// //                                 value={decimalPlaces}
// //                                 onChange={handlePrecision}
// //                             >
// //                                 {range(1, 15).map((num, index) => (
// //                                     <option key={index} value={num}>{num + "  Decimal Places"}</option>
// //                                 ))}
// //                             </select>
// //                         </div>
// //                         <div className="button-container">
// //                             <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// //                             <button onClick={resetAll} style={buttonStyle2}>Reset</button>
// //                         </div>
// //                     </form>
// //                     {error && <div className="error-container">{error}</div>}
// //                 </div>

// //                 {trigoData && (
// //                     <div className="results-section">
// //                         <table className="my-table">
// //                             <thead>
// //                                 <tr>
// //                                     {Object.keys(trigoData).map((key, index) => (
// //                                         <th key={index} onClick={() => handleFunctionClick(key)}>
// //                                             {key}
// //                                             <span className="tooltip">Click for Explanation</span>
// //                                         </th>
// //                                     ))}
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 <tr>
// //                                     {Object.values(trigoData).map((value, index) => {
// //                                         if (value === null) {
// //                                             return (
// //                                                 <td key={index}>
// //                                                     Undefined
// //                                                     <button onClick={() => copyToClipboard("Undefined")}>
// //                                                         Copy
// //                                                     </button>
// //                                                 </td>
// //                                             );
// //                                         }
// //                                         if (Number.isNaN(value)) {
// //                                             return (
// //                                                 <td key={index}>
// //                                                     ...
// //                                                     <button onClick={() => copyToClipboard("...")}>
// //                                                         Copy
// //                                                     </button>
// //                                                 </td>
// //                                             );
// //                                         }

// //                                         const numericValue = parseFloat(value);
// //                                         const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
// //                                         return (
// //                                             <td key={index}>
// //                                                 {displayValue}
// //                                                 <button onClick={() => copyToClipboard(displayValue)}>
// //                                                     Copy
// //                                                 </button>
// //                                             </td>
// //                                         );
// //                                     })}
// //                                 </tr>
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                 )}
// //             </div>

// //             {selectedFunction && explanations[selectedFunction] && (
// //                 <div className="explanation-section">
// //                     <h3>{selectedFunction.toUpperCase()}</h3>
// //                     <p>{explanations[selectedFunction].description}</p>
// //                     {explanations[selectedFunction].link && (
// //                         <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
// //                             Learn more
// //                         </a>
// //                     )}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default InverseTrigoCalculator;
// 'use client'

// import React, { useState } from 'react';
// import { capitalizeWords, range } from '@/app/utils/utils-functions';
// import './TrigoCalculator.css';

// const buttonStyle1 = {
//     backgroundColor: '#1d6bd8',
//     color: 'white',
//     height: '2.3rem',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     padding: '0.4rem 0.5rem',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     margin: '5px',
//     outerHeight: '2rem',
//     border: 'solid 1px black'
// };

// const buttonStyle2 = {
//     backgroundColor: '#555556',
//     color: 'white',
//     innerHeight: '2rem',
//     height: '2.3rem',
//     fontWeight: '500',
//     padding: '0.4rem 1rem',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     margin: '5px',
//     border: 'solid 1px black'
// };

// const InverseTrigoCalculator = ({ explanations }) => {
//     const [ratio, setRatio] = useState('');
//     const [trigoData, setTrigoData] = useState({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [decimalPlaces, setDecimalPlaces] = useState(5);
//     const [selectedFunction, setSelectedFunction] = useState(null);

//     const calculateInverseTrig = (ratio) => {
//         const val = parseFloat(ratio);
//         if (isNaN(val)) return { arcsin: NaN, arccos: NaN, arctan: NaN };
        
//         return {
//             arcsin: (val >= -1 && val <= 1) ? Math.asin(val) : null,
//             arccos: (val >= -1 && val <= 1) ? Math.acos(val) : null,
//             arctan: Math.atan(val)
//         };
//     };

//     const handleCalculate = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         try {
//             const ratioVal = ratio || 0;
//             const val = parseFloat(ratioVal);
            
//             if (Math.abs(val) > 1) {
//                 setError('Value outside [-1,1] range: arcsin/arccos undefined, arctan calculated');
//             }
            
//             const results = calculateInverseTrig(ratioVal);
//             setTrigoData(results);
//         } catch (err) {
//             setError('Calculation error');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handlePrecision = (e) => {
//         setDecimalPlaces(e.target.value);
//     };

//     const resetAll = () => {
//         setRatio('');
//         setDecimalPlaces(5);
//         setTrigoData({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
//         setSelectedFunction(null);
//         setError('');
//     };

//     const copyToClipboard = (value) => {
//         navigator.clipboard.writeText(value);
//     };

//     const handleFunctionClick = (func) => {
//         setSelectedFunction(func);
//     };

//     return (
//         <div>
//             <legend>
//                 <div className="legend-container">
//                     <div className="calculator-left">
//                         <div className='upper-container'>
//                             <form onSubmit={handleCalculate}>
//                                 <div className='input-container'>
//                                     <label>Ratio :</label>
//                                     <input
//                                         className='my-input'
//                                         type="number"
//                                         step="any"
//                                         value={ratio}
//                                         onChange={(e) => setRatio(e.target.value)}
//                                         placeholder={ratio || "Enter ratio"}
//                                     />
//                                 </div>
//                                 <div className='input-container'>
//                                     <label htmlFor='decimal'>Select Precision Level : </label>
//                                     <select
//                                         className='my-input'
//                                         name='decimal'
//                                         id='decimal'
//                                         value={decimalPlaces}
//                                         onChange={handlePrecision}
//                                     >
//                                         {range(1, 15).map((num, index) => (
//                                             <option key={index} value={num}>{num + "  Decimal Places"}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
//                                 <button onClick={resetAll} style={buttonStyle2}>Reset</button>
//                             </form>
//                             <br/>
//                             {error && <div className="error-message">{error}</div>}
//                         </div>
//                         <br /><br />

//                         {trigoData && (
//                             <table className="my-table">
//                                 <thead>
//                                     <tr>
//                                         {Object.keys(trigoData).map((key, index) => (
//                                             <th key={index} onClick={() => handleFunctionClick(key)}>
//                                                 {key}
//                                                 <span className="tooltip">Click for Explanation</span>
//                                             </th>
//                                         ))}
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         {Object.values(trigoData).map((value, index) => {
//                                             if (value === null) {
//                                                 return (
//                                                     <td key={index}>
//                                                         Undefined
//                                                         <button onClick={() => copyToClipboard("Undefined")}>
//                                                             Copy
//                                                         </button>
//                                                     </td>
//                                                 );
//                                             }
//                                             if (Number.isNaN(value)) {
//                                                 return (
//                                                     <td key={index}>
//                                                         ...
//                                                         <button onClick={() => copyToClipboard("...")}>
//                                                             Copy
//                                                         </button>
//                                                     </td>
//                                                 );
//                                             }

//                                             const numericValue = parseFloat(value);
//                                             const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
//                                             return (
//                                                 <td key={index}>
//                                                     {displayValue}
//                                                     <button onClick={() => copyToClipboard(displayValue)}>
//                                                         Copy
//                                                     </button>
//                                                 </td>
//                                             );
//                                         })}
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         )}
//                     </div>
//                     <div className="calculator-right">
//                         {selectedFunction && explanations[selectedFunction] && (
//                             <div className="explanation-content">
//                                 <h3>{selectedFunction.toUpperCase()}</h3>
//                                 <p>{explanations[selectedFunction].description}</p>
//                                 {explanations[selectedFunction].link && (
//                                     <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
//                                         Learn more
//                                     </a>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </legend>
//         </div>
//     );
// };

// export default InverseTrigoCalculator;
// 'use client'

// import React, { useState } from 'react';
// import { capitalizeWords, range } from '@/app/utils/utils-functions';
// import './InverseTrigoCalculator.css';

// const buttonStyle1 = {
//     backgroundColor: '#1d6bd8',
//     color: 'white',
//     height: '2.3rem',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     padding: '0.4rem 0.5rem',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     margin: '5px',
//     outerHeight: '2rem',
//     border: 'solid 1px black'
// };

// const buttonStyle2 = {
//     backgroundColor: '#555556',
//     color: 'white',
//     innerHeight: '2rem',
//     height: '2.3rem',
//     fontWeight: '500',
//     padding: '0.4rem 1rem',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     margin: '5px',
//     border: 'solid 1px black'
// };

// const InverseTrigoCalculator = ({ explanations }) => {
//     const [ratio, setRatio] = useState('');
//     const [trigoData, setTrigoData] = useState({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [decimalPlaces, setDecimalPlaces] = useState(5);
//     const [selectedFunction, setSelectedFunction] = useState(null);

//     const calculateInverseTrig = (ratio) => {
//         const val = parseFloat(ratio);
//         if (isNaN(val)) return { arcsin: NaN, arccos: NaN, arctan: NaN };
        
//         return {
//             arcsin: (val >= -1 && val <= 1) ? Math.asin(val) : null,
//             arccos: (val >= -1 && val <= 1) ? Math.acos(val) : null,
//             arctan: Math.atan(val)
//         };
//     };

//     const handleCalculate = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         try {
//             const ratioVal = ratio || 0;
//             const val = parseFloat(ratioVal);
            
//             if (Math.abs(val) > 1) {
//                 setError('Value outside [-1,1] range: arcsin/arccos undefined, arctan calculated');
//             }
            
//             const results = calculateInverseTrig(ratioVal);
//             setTrigoData(results);
//         } catch (err) {
//             setError('Calculation error');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handlePrecision = (e) => {
//         setDecimalPlaces(e.target.value);
//     };

//     const resetAll = () => {
//         setRatio('');
//         setDecimalPlaces(5);
//         setTrigoData({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
//         setSelectedFunction(null);
//         setError('');
//     };

//     const copyToClipboard = (value) => {
//         navigator.clipboard.writeText(value);
//     };

//     const handleFunctionClick = (func) => {
//         setSelectedFunction(func);
//     };

//     return (
//         <div>
//             <legend>
//                 <div className="legend-container">
//                     <div className="calculator-left">
//                         <div className='upper-container'>
//                             <form onSubmit={handleCalculate}>
//                                 <div className='input-container'>
//                                     <label>Ratio :</label>
//                                     <input
//                                         className='my-input'
//                                         type="number"
//                                         step="any"
//                                         value={ratio}
//                                         onChange={(e) => setRatio(e.target.value)}
//                                         placeholder={ratio || "Enter ratio"}
//                                     />
//                                 </div>
//                                 <div className='input-container'>
//                                     <label htmlFor='decimal'>Select Precision Level : </label>
//                                     <select
//                                         className='my-input'
//                                         name='decimal'
//                                         id='decimal'
//                                         value={decimalPlaces}
//                                         onChange={handlePrecision}
//                                     >
//                                         {range(1, 15).map((num, index) => (
//                                             <option key={index} value={num}>{num + "  Decimal Places"}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
//                                 <button onClick={resetAll} style={buttonStyle2}>Reset</button>
//                             </form>
//                             <div className="calculator-right">
//                         {selectedFunction && explanations[selectedFunction] && (
//                             <div className="explanation-content">
//                                 <h3>{selectedFunction.toUpperCase()}</h3>
//                                 <p>{explanations[selectedFunction].description}</p>
//                                 {explanations[selectedFunction].link && (
//                                     <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
//                                         Learn more
//                                     </a>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                         </div>
//                         <div className='error-envelope' >
//                         {error && <div className="error-container">{error}</div>}
//                         </div>
//                         <br /><br />

//                         {trigoData && (
//                             <table className="my-table">
//                                 <thead>
//                                     <tr>
//                                         {Object.keys(trigoData).map((key, index) => (
//                                             <th key={index} onClick={() => handleFunctionClick(key)}>
//                                                 {key}
//                                                 <span className="tooltip">Click for Explanation</span>
//                                             </th>
//                                         ))}
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         {Object.values(trigoData).map((value, index) => {
//                                             if (value === null) {
//                                                 return (
//                                                     <td key={index}>
//                                                         Undefined
//                                                         <button onClick={() => copyToClipboard("Undefined")}>
//                                                             Copy
//                                                         </button>
//                                                     </td>
//                                                 );
//                                             }
//                                             if (Number.isNaN(value)) {
//                                                 return (
//                                                     <td key={index}>
//                                                         ...
//                                                         <button onClick={() => copyToClipboard("...")}>
//                                                             Copy
//                                                         </button>
//                                                     </td>
//                                                 );
//                                             }

//                                             const numericValue = parseFloat(value);
//                                             const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
//                                             return (
//                                                 <td key={index}>
//                                                     {displayValue}
//                                                     <button onClick={() => copyToClipboard(displayValue)}>
//                                                         Copy
//                                                     </button>
//                                                 </td>
//                                             );
//                                         })}
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         )}
//                     </div>
//                     {/* <div className="calculator-right">
//                         {selectedFunction && explanations[selectedFunction] && (
//                             <div className="explanation-content">
//                                 <h3>{selectedFunction.toUpperCase()}</h3>
//                                 <p>{explanations[selectedFunction].description}</p>
//                                 {explanations[selectedFunction].link && (
//                                     <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
//                                         Learn more
//                                     </a>
//                                 )}
//                             </div>
//                         )}
//                     </div> */}
//                 </div>
//             </legend>
//         </div>
//     );
// };

// export default InverseTrigoCalculator;
'use client'

import React, { useState } from 'react';
import { capitalizeWords, range } from '@/app/utils/utils-functions';
import './InverseTrigoCalculator.css';
import Link from 'next/link';

const buttonStyle1 = {
   backgroundColor: '#1d6bd8',
   color: 'white',
   height: '2.3rem',
   fontSize: '0.875rem',
   fontWeight: '500',
   padding: '0.4rem 0.5rem',
   borderRadius: '5px',
   cursor: 'pointer',
   margin: '5px',
   outerHeight: '2rem',
   border: 'solid 1px black'
};

const buttonStyle2 = {
   backgroundColor: '#555556',
   color: 'white',
   innerHeight: '2rem',
   height: '2.3rem',
   fontWeight: '500',
   padding: '0.4rem 1rem',
   borderRadius: '5px',
   cursor: 'pointer',
   margin: '5px',
   border: 'solid 1px black'
};

const InverseTrigoCalculator = ({ explanations }) => {
   const [ratio, setRatio] = useState('');
   const [trigoData, setTrigoData] = useState({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [decimalPlaces, setDecimalPlaces] = useState(5);
   const [selectedFunction, setSelectedFunction] = useState(null);
   const [angleUnit, setAngleUnit] = useState('radians');

   const calculateInverseTrig = (ratio) => {
       const val = parseFloat(ratio);
       if (isNaN(val)) return { arcsin: NaN, arccos: NaN, arctan: NaN };
       
       const results = {
           arcsin: (val >= -1 && val <= 1) ? Math.asin(val) : null,
           arccos: (val >= -1 && val <= 1) ? Math.acos(val) : null,
           arctan: Math.atan(val)
       };

       if (angleUnit === 'degrees') {
           Object.keys(results).forEach(key => {
               if (results[key] !== null) {
                   results[key] = results[key] * (180/Math.PI);
               }
           });
       }

       return results;
   };

   const handleCalculate = (e) => {
       e.preventDefault();
       setLoading(true);
       setError('');
       try {
           const ratioVal = ratio || 0;
           const val = parseFloat(ratioVal);
           
           if (Math.abs(val) > 1) {
               setError('Value outside [-1,1] range: arcsin/arccos undefined, arctan calculated');
           }
           
           const results = calculateInverseTrig(ratioVal);
           setTrigoData(results);
       } catch (err) {
           setError('Calculation error');
       } finally {
           setLoading(false);
       }
   };

   const handlePrecision = (e) => {
       setDecimalPlaces(e.target.value);
   };

   const resetAll = () => {
       setRatio('');
       setDecimalPlaces(5);
       setTrigoData({ "arcsin": NaN, "arccos": NaN, "arctan": NaN });
       setSelectedFunction(null);
       setError('');
       setAngleUnit('radians');
   };

   const copyToClipboard = (value) => {
       navigator.clipboard.writeText(value);
   };

   const handleFunctionClick = (func) => {
       setSelectedFunction(func);
   };

   return (
       <div>
           <legend>
               <div className="legend-container">
                   <div className="calculator-left">
                       <div className='upper-container'>
                           <form onSubmit={handleCalculate}>
                               <div className='input-container'>
                                   <label>Ratio :</label>
                                   <input
                                       className='my-input'
                                       type="number"
                                       step="any"
                                       value={ratio}
                                       onChange={(e) => setRatio(e.target.value)}
                                       placeholder={ratio || "Enter ratio"}
                                   />
                               </div>
                               <div className='input-container' >
                                   <label>Angle Unit :</label>
                                   <select
                                       className='my-input'
                                       value={angleUnit}
                                       onChange={(e) => setAngleUnit(e.target.value)}
                                       style={{width: '140px'}}
                                   >
                                       <option value="radians">Radians</option>
                                       <option value="degrees">Degrees</option>
                                   </select>
                                
                                   <a
                                       href="/converters/degree-radians" 
                                       style={{
                                           marginLeft: '150px',
                                           color: '#1d6bd8',
                                           textDecoration: 'none',
                                           fontWeight: 500,
                                           display: 'inline-flex',
                                           alignItems: 'center'
                                       }}
                                   >
                                       Angle Converter →
                                   </a>
                               </div>
                               <div className='input-container'>
                                   <label htmlFor='decimal'>Select Precision Level : </label>
                                   <select
                                       className='my-input'
                                       name='decimal'
                                       id='decimal'
                                       value={decimalPlaces}
                                       onChange={handlePrecision}
                                   >
                                       {range(1, 15).map((num, index) => (
                                           <option key={index} value={num}>{num + "  Decimal Places"}</option>
                                       ))}
                                   </select>
                               </div>
                               <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
                               <button onClick={resetAll} style={buttonStyle2}>Reset</button>
                           </form>
                           <div className="calculator-right">
                               {selectedFunction && explanations[selectedFunction] && (
                                   <div className="explanation-content">
                                       <h3>{selectedFunction.toUpperCase()}</h3>
                                       <p>{explanations[selectedFunction].description}</p>
                                       {explanations[selectedFunction].link && (
                                           <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
                                               Learn more
                                           </a>
                                       )}
                                   </div>
                               )}
                           </div>
                       </div>
                       <div className='error-envelope' >
                           {error && <div className="error-container">{error}</div>}
                       </div>
                       <br /><br />

                       {trigoData && (
                           <table className="my-table">
                               <thead>
                                   <tr>
                                       {Object.keys(trigoData).map((key, index) => (
                                           <th key={index} onClick={() => handleFunctionClick(key)}>
                                               {key}
                                               <span className="tooltip">Click for Explanation</span>
                                           </th>
                                       ))}
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       {Object.values(trigoData).map((value, index) => {
                                           if (value === null) {
                                               return (
                                                   <td key={index}>
                                                       Undefined
                                                       <button onClick={() => copyToClipboard("Undefined")}>
                                                           Copy
                                                       </button>
                                                   </td>
                                               );
                                           }
                                           if (Number.isNaN(value)) {
                                               return (
                                                   <td key={index}>
                                                       ...
                                                       <button onClick={() => copyToClipboard("...")}>
                                                           Copy
                                                       </button>
                                                   </td>
                                               );
                                           }

                                           const numericValue = parseFloat(value);
                                           const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
                                           return (
                                               <td key={index}>
                                                   {displayValue}
                                                   <button onClick={() => copyToClipboard(displayValue)}>
                                                       Copy
                                                   </button>
                                               </td>
                                           );
                                       })}
                                   </tr>
                               </tbody>
                           </table>
                       )}
                   </div>
                   {/* <div className="calculator-right">
                       {selectedFunction && explanations[selectedFunction] && (
                           <div className="explanation-content">
                               <h3>{selectedFunction.toUpperCase()}</h3>
                               <p>{explanations[selectedFunction].description}</p>
                               {explanations[selectedFunction].link && (
                                   <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
                                       Learn more
                                   </a>
                               )}
                           </div>
                       )}
                   </div> */}
               </div>
           </legend>
       </div>
   );
};

export default InverseTrigoCalculator;