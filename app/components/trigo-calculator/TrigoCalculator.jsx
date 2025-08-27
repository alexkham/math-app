
// // // 'use client'

// // // import React, { useState } from 'react';
// // // import { capitalizeWords ,range} from '@/app/utils/utils-functions';
// // // import './TrigoCalculator.css';
// // // import Link from 'next/link';

// // // const buttonStyle1 = {
// // //     backgroundColor: '#1d6bd8',
// // //     color: 'white',
// // //     height:'2.3rem',
// // //     fontSize: '0.875rem',
// // //     fontWeight: '500',
// // //     padding: '0.4rem 0.5rem',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     margin :'5px',
// // //     outerHeight:'2rem',
// // //     border:'solid 1px black'   
// // // };

// // // const buttonStyle2 = {
// // //     backgroundColor: '#555556',
// // //     color: 'white',    
// // //     innerHeight:'2rem',
// // //     height:'2.3rem',
// // //     fontWeight: '500',
// // //     padding: '0.4rem 1rem',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     margin :'5px',
// // //     border:'solid 1px black'
// // // };

// // // const copyButtonStyle = {
// // //     padding: '2px 5px',
// // //     marginLeft: '5px',
// // //     fontSize: '0.7rem',
// // //     cursor: 'pointer',
// // //     backgroundColor: '#eee',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '3px'
// // // };

// // // const TrigoCalculator = ({explanations}) => {
// // //   const [angle, setAngle] = useState('0');
// // //   const [trigoData, setTrigoData] = useState({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [units,setUnits]=useState('degrees');
// // //   const [decimalPlaces,setDecimalPlaces]=useState(5);
// // //   const [selectedFunction, setSelectedFunction] = useState(null);

// // //   const API_URL = 'https://pickjourney.com/trigo/all_trigo/';

// // //   const handleCalculate = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError('');
// // //     const angleVal=angle||0
// // //     try {
// // //       const response = await fetch(`${API_URL}${angleVal}/?unit=${units}`);
// // //       if (!response.ok) {
// // //         throw new Error('Network response was not ok');
// // //       }
// // //       const data = await response.json();
// // //       const fixedData = {
// // //         ...data,
// // //         cot: data.tan === 0 ? null : data.tan === null ? 0 : 1/data.tan
// // //       };
// // //       setTrigoData(fixedData);
// // //       // setAngle('')
// // //     } catch (err) {
// // //       setError('Failed to fetch data');
// // //       console.error('Error details:', err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleUnitChange = (event) => {
// // //     const selectedUnit = event.target.value;
// // //     setUnits(selectedUnit);
// // //   };

// // //   const handlePrecision=(e)=>{
// // //     setDecimalPlaces(e.target.value)
// // //   };

// // //   const resetAll=()=>{
// // //     setAngle('');
// // //     setUnits('degrees');
// // //     setDecimalPlaces(5);
// // //     setTrigoData({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
// // //     setSelectedFunction(null);
// // //   };

// // //   const copyToClipboard = (value) => {
// // //     navigator.clipboard.writeText(value);
// // //   };

// // //   const handleFunctionClick = (func) => {
// // //     setSelectedFunction(func);
// // //   };

// // //   return (
// // //     <div>
// // //       <legend>
// // //         <div className="legend-container">
// // //           <div className="calculator-left">
// // //             <div className='upper-container'>
// // //             <form onSubmit={handleCalculate}>
// // //               <div className='input-container'>
// // //                 <label>Angle :</label>
// // //                 <input
// // //                   className='my-input' 
// // //                   type="number" 
// // //                   value={angle} 
// // //                   onChange={(e) => setAngle(e.target.value)} 
// // //                   placeholder={angle||`Enter Angle in ${capitalizeWords(units)}`}
// // //                 />
// // //               </div>
// // //               <div className='input-container'>
// // //                 <label htmlFor='units'>Select Units: </label>
// // //                 <select 
// // //                   className='my-input'
// // //                   name='units' 
// // //                   id='units'
// // //                   value={units}
// // //                   onChange={handleUnitChange}
// // //                   style={{width:'140px'}}
// // //                 >
// // //                   <option value={'radians'}>Radians</option>
// // //                   <option value={'degrees'}>Degrees</option>
// // //                 </select>
// // //                 <Link
// // //                                        href="/converters/degree-radians" 
// // //                                        style={{
// // //                                            marginLeft: '150px',
// // //                                            color: '#1d6bd8',
// // //                                            textDecoration: 'none',
// // //                                            fontWeight: 500,
// // //                                            display: 'inline-flex',
// // //                                            alignItems: 'center'
// // //                                        }}
// // //                                    >
// // //                                        Angle Converter →
// // //                                    </Link>
// // //               </div>
// // //               <div className='input-container'>
// // //                 <label htmlFor='decimal'>Select Precision Level : </label>
// // //                 <select 
// // //                   className='my-input'
// // //                   name='decimal' 
// // //                   id='decimal'
// // //                   value={decimalPlaces}
// // //                   onChange={handlePrecision}
// // //                 >
// // //                   {range(1,15).map((num, index)=>(
// // //                     <option key={index} value={num}>{num+"  Decimal Places"}</option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //               <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// // //               <button onClick={resetAll} style={buttonStyle2}>Reset</button>
// // //             </form>
// // //             <div className="calculator-right">
// // //             {selectedFunction && explanations[selectedFunction] && (
// // //               <div className="explanation-content">
// // //                 <h3>{selectedFunction.toUpperCase()}</h3>
// // //                 <p>{explanations[selectedFunction].description}</p>
// // //                 {explanations[selectedFunction].link && (
// // //                   <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
// // //                     Learn more
// // //                   </a>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </div>
// // //           </div>
// // //             <br/><br/>
            
// // //             {trigoData && (
// // //               <table className="my-table">
// // //                 <thead>
// // //                   <tr>
// // //                     {Object.keys(trigoData).map((key, index) => (
// // //                       <th key={index} onClick={() => handleFunctionClick(key)}>
// // //                         {key}
// // //                         <span className="tooltip">Click for Explanation</span>
// // //                       </th>
// // //                     ))}
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   <tr>
// // //                     {Object.values(trigoData).map((value, index) => {
// // //                       if (value === null) {
// // //                         return (
// // //                           <td key={index}>
// // //                             Undefined
// // //                             <button onClick={() => copyToClipboard("Undefined")}>
// // //                               Copy
// // //                             </button>
// // //                           </td>
// // //                         );
// // //                       }
// // //                       if (Number.isNaN(value)) {
// // //                         return (
// // //                           <td key={index}>
// // //                             ...
// // //                             <button onClick={() => copyToClipboard("...")}>
// // //                               Copy
// // //                             </button>
// // //                           </td>
// // //                         );
// // //                       }

// // //                       const numericValue = parseFloat(value);
// // //                       const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
// // //                       return (
// // //                         <td key={index}>
// // //                           {displayValue}
// // //                           <button onClick={() => copyToClipboard(displayValue)}>
// // //                             Copy
// // //                           </button>
// // //                         </td>
// // //                       );
// // //                     })}
// // //                   </tr>
// // //                 </tbody>
// // //               </table>
// // //             )}
// // //           </div>
// // //           {/* <div className="calculator-right">
// // //             {selectedFunction && explanations[selectedFunction] && (
// // //               <div className="explanation-content">
// // //                 <h3>{selectedFunction.toUpperCase()}</h3>
// // //                 <p>{explanations[selectedFunction].description}</p>
// // //                 {explanations[selectedFunction].link && (
// // //                   <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
// // //                     Learn more
// // //                   </a>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </div> */}
// // //         </div>
// // //       </legend>
// // //     </div>
// // //   );
// // // };

// // // export default TrigoCalculator;

// // 'use client'

// // import React, { useState } from 'react';
// // import { capitalizeWords ,range} from '@/app/utils/utils-functions';
// // import './TrigoCalculator.css';
// // import Link from 'next/link';

// // const buttonStyle1 = {
// //     backgroundColor: '#1d6bd8',
// //     color: 'white',
// //     height:'2.3rem',
// //     fontSize: '0.875rem',
// //     fontWeight: '500',
// //     padding: '0.4rem 0.5rem',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     margin :'5px',
// //     outerHeight:'2rem',
// //     border:'solid 1px black'   
// // };

// // const buttonStyle2 = {
// //     backgroundColor: '#555556',
// //     color: 'white',    
// //     innerHeight:'2rem',
// //     height:'2.3rem',
// //     fontWeight: '500',
// //     padding: '0.4rem 1rem',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     margin :'5px',
// //     border:'solid 1px black'
// // };

// // const copyButtonStyle = {
// //     padding: '2px 5px',
// //     marginLeft: '5px',
// //     fontSize: '0.7rem',
// //     cursor: 'pointer',
// //     backgroundColor: '#eee',
// //     border: '1px solid #ddd',
// //     borderRadius: '3px'
// // };

// // const TrigoCalculator = ({explanations}) => {
// //   const [angle, setAngle] = useState('0');
// //   const [trigoData, setTrigoData] = useState({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [units,setUnits]=useState('degrees');
// //   const [decimalPlaces,setDecimalPlaces]=useState(5);
// //   const [selectedFunction, setSelectedFunction] = useState('sin'); // Default to 'sin'

// //   const API_URL = 'https://pickjourney.com/trigo/all_trigo/';

// //   const handleCalculate = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');
// //     const angleVal=angle||0
// //     try {
// //       const response = await fetch(`${API_URL}${angleVal}/?unit=${units}`);
// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }
// //       const data = await response.json();
// //       const fixedData = {
// //         ...data,
// //         cot: data.tan === 0 ? null : data.tan === null ? 0 : 1/data.tan
// //       };
// //       setTrigoData(fixedData);
// //       // setAngle('')
// //     } catch (err) {
// //       setError('Failed to fetch data');
// //       console.error('Error details:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleUnitChange = (event) => {
// //     const selectedUnit = event.target.value;
// //     setUnits(selectedUnit);
// //   };

// //   const handlePrecision=(e)=>{
// //     setDecimalPlaces(e.target.value)
// //   };

// //   const resetAll=()=>{
// //     setAngle('');
// //     setUnits('degrees');
// //     setDecimalPlaces(5);
// //     setTrigoData({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
// //     setSelectedFunction('sin'); // Reset to default
// //   };

// //   const copyToClipboard = (value) => {
// //     navigator.clipboard.writeText(value);
// //   };

// //   const handleFunctionClick = (func) => {
// //     console.log('Clicked function:', func); // Debug log
// //     setSelectedFunction(func);
// //   };

// //   const getHeaderStyle = (func) => {
// //     return {
// //       backgroundColor: selectedFunction === func ? '#1d6bd8 !important' : '#4a90e2 !important',
// //       color: 'white !important',
// //       cursor: 'pointer !important',
// //       padding: '12px !important',
// //       transition: 'background-color 0.2s ease'
// //     };
// //   };

// //   return (
// //     <div>
// //       <legend>
// //         <div className="legend-container">
// //           <div className="calculator-left">
// //             <div className='upper-container'>
// //             <form onSubmit={handleCalculate}>
// //               <div className='input-container'>
// //                 <label>Angle :</label>
// //                 <input
// //                   className='my-input' 
// //                   type="number" 
// //                   value={angle} 
// //                   onChange={(e) => setAngle(e.target.value)} 
// //                   placeholder={angle||`Enter Angle in ${capitalizeWords(units)}`}
// //                 />
// //               </div>
// //               <div className='input-container'>
// //                 <label htmlFor='units'>Select Units: </label>
// //                 <select 
// //                   className='my-input'
// //                   name='units' 
// //                   id='units'
// //                   value={units}
// //                   onChange={handleUnitChange}
// //                   style={{width:'140px'}}
// //                 >
// //                   <option value={'radians'}>Radians</option>
// //                   <option value={'degrees'}>Degrees</option>
// //                 </select>
// //                 <Link
// //                                        href="/converters/degree-radians" 
// //                                        style={{
// //                                            marginLeft: '150px',
// //                                            color: '#1d6bd8',
// //                                            textDecoration: 'none',
// //                                            fontWeight: 500,
// //                                            display: 'inline-flex',
// //                                            alignItems: 'center'
// //                                        }}
// //                                    >
// //                                        Angle Converter →
// //                                    </Link>
// //               </div>
// //               <div className='input-container'>
// //                 <label htmlFor='decimal'>Select Precision Level : </label>
// //                 <select 
// //                   className='my-input'
// //                   name='decimal' 
// //                   id='decimal'
// //                   value={decimalPlaces}
// //                   onChange={handlePrecision}
// //                 >
// //                   {range(1,15).map((num, index)=>(
// //                     <option key={index} value={num}>{num+"  Decimal Places"}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// //               <button onClick={resetAll} style={buttonStyle2}>Reset</button>
// //             </form>
// //             <div className="calculator-right">
// //               {explanations && explanations[selectedFunction] ? (
// //                 <div className="explanation-content">
// //                   <h3>{selectedFunction.toUpperCase()}</h3>
// //                   <p>{explanations[selectedFunction].description}</p>
// //                   {explanations[selectedFunction].link && (
// //                     <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
// //                       Learn more
// //                     </a>
// //                   )}
// //                 </div>
// //               ) : (
// //                 <div className="explanation-content">
// //                   <h3>Click a function header</h3>
// //                   <p>Click on any blue header (sin, cos, tan, etc.) to see its explanation.</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //             <br/><br/>
            
// //             {trigoData && (
// //               <table className="my-table">
// //                 <thead>
// //                   <tr>
// //                     {Object.keys(trigoData).map((key, index) => (
// //                       <th 
// //                         key={index} 
// //                         onClick={() => handleFunctionClick(key)}
// //                         style={getHeaderStyle(key)}
// //                       >
// //                         {key}
// //                         <span className="tooltip">Click for Explanation</span>
// //                       </th>
// //                     ))}
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     {Object.values(trigoData).map((value, index) => {
// //                       if (value === null) {
// //                         return (
// //                           <td key={index}>
// //                             Undefined
// //                             <button onClick={() => copyToClipboard("Undefined")}>
// //                               Copy
// //                             </button>
// //                           </td>
// //                         );
// //                       }
// //                       if (Number.isNaN(value)) {
// //                         return (
// //                           <td key={index}>
// //                             ...
// //                             <button onClick={() => copyToClipboard("...")}>
// //                               Copy
// //                             </button>
// //                           </td>
// //                         );
// //                       }

// //                       const numericValue = parseFloat(value);
// //                       const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
// //                       return (
// //                         <td key={index}>
// //                           {displayValue}
// //                           <button onClick={() => copyToClipboard(displayValue)}>
// //                             Copy
// //                           </button>
// //                         </td>
// //                       );
// //                     })}
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             )}
// //           </div>
// //         </div>
// //       </legend>
// //     </div>
// //   );
// // };

// // export default TrigoCalculator;


// 'use client'

// import React, { useState } from 'react';
// import { capitalizeWords ,range} from '@/app/utils/utils-functions';
// import './TrigoCalculator.css';
// import Link from 'next/link';

// const buttonStyle1 = {
//     backgroundColor: '#1d6bd8',
//     color: 'white',
//     height:'2.3rem',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     padding: '0.4rem 0.5rem',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     margin :'5px',
//     outerHeight:'2rem',
//     border:'solid 1px black'   
// };

// const buttonStyle2 = {
//     backgroundColor: '#555556',
//     color: 'white',    
//     innerHeight:'2rem',
//     height:'2.3rem',
//     fontWeight: '500',
//     padding: '0.4rem 1rem',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     margin :'5px',
//     border:'solid 1px black'
// };

// const copyButtonStyle = {
//     padding: '2px 5px',
//     marginLeft: '5px',
//     fontSize: '0.7rem',
//     cursor: 'pointer',
//     backgroundColor: '#eee',
//     border: '1px solid #ddd',
//     borderRadius: '3px'
// };

// const TrigoCalculator = ({explanations}) => {
//   const [angle, setAngle] = useState('0');
//   const [trigoData, setTrigoData] = useState({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [units,setUnits]=useState('degrees');
//   const [decimalPlaces,setDecimalPlaces]=useState(5);
//   const [selectedFunction, setSelectedFunction] = useState('sin'); // Default to 'sin'

//   const API_URL = 'https://pickjourney.com/trigo/all_trigo/';

//   const handleCalculate = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     const angleVal=angle||0
//     try {
//       const response = await fetch(`${API_URL}${angleVal}/?unit=${units}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       const fixedData = {
//         ...data,
//         cot: data.tan === 0 ? null : data.tan === null ? 0 : 1/data.tan
//       };
//       setTrigoData(fixedData);
//       // setAngle('')
//     } catch (err) {
//       setError('Failed to fetch data');
//       console.error('Error details:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUnitChange = (event) => {
//     const selectedUnit = event.target.value;
//     setUnits(selectedUnit);
//   };

//   const handlePrecision=(e)=>{
//     setDecimalPlaces(e.target.value)
//   };

//   const resetAll=()=>{
//     setAngle('');
//     setUnits('degrees');
//     setDecimalPlaces(5);
//     setTrigoData({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
//     setSelectedFunction('sin'); // Reset to default
//   };

//   const copyToClipboard = (value) => {
//     navigator.clipboard.writeText(value);
//   };

//   const handleFunctionClick = (func) => {
//     console.log('Clicked function:', func); // Debug log
//     setSelectedFunction(func);
//   };

//   const getHeaderStyle = (func) => {
//     return {
//       backgroundColor: selectedFunction === func ? '#1d6bd8' : '#4a90e2',
//       color: 'white',
//       cursor: 'pointer',
//       padding: '12px',
//       transition: 'background-color 0.2s ease'
//     };
//   };

//   return (
//     <div>
//       <legend>
//         <div className="legend-container">
//           <div className="calculator-left">
//             <div className='upper-container'>
//             <form onSubmit={handleCalculate}>
//               <div className='input-container'>
//                 <label>Angle :</label>
//                 <input
//                   className='my-input' 
//                   type="number" 
//                   value={angle} 
//                   onChange={(e) => setAngle(e.target.value)} 
//                   placeholder={angle||`Enter Angle in ${capitalizeWords(units)}`}
//                 />
//               </div>
//               <div className='input-container'>
//                 <label htmlFor='units'>Select Units: </label>
//                 <select 
//                   className='my-input'
//                   name='units' 
//                   id='units'
//                   value={units}
//                   onChange={handleUnitChange}
//                   style={{width:'140px'}}
//                 >
//                   <option value={'radians'}>Radians</option>
//                   <option value={'degrees'}>Degrees</option>
//                 </select>
//                 <Link
//                                        href="/converters/degree-radians" 
//                                        style={{
//                                            marginLeft: '150px',
//                                            color: '#1d6bd8',
//                                            textDecoration: 'none',
//                                            fontWeight: 500,
//                                            display: 'inline-flex',
//                                            alignItems: 'center'
//                                        }}
//                                    >
//                                        Angle Converter →
//                                    </Link>
//               </div>
//               <div className='input-container'>
//                 <label htmlFor='decimal'>Select Precision Level : </label>
//                 <select 
//                   className='my-input'
//                   name='decimal' 
//                   id='decimal'
//                   value={decimalPlaces}
//                   onChange={handlePrecision}
//                 >
//                   {range(1,15).map((num, index)=>(
//                     <option key={index} value={num}>{num+"  Decimal Places"}</option>
//                   ))}
//                 </select>
//               </div>
//               <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
//               <button onClick={resetAll} style={buttonStyle2}>Reset</button>
//             </form>
//             <div className="calculator-right">
//               {explanations && explanations[selectedFunction] ? (
//                 <div className="explanation-content">
//                   <h3>{selectedFunction.toUpperCase()}</h3>
//                   <p>{explanations[selectedFunction].description}</p>
//                   {explanations[selectedFunction].link && (
//                     <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
//                       Learn more
//                     </a>
//                   )}
//                 </div>
//               ) : (
//                 <div className="explanation-content">
//                   <h3>Click a function header</h3>
//                   <p>Click on any blue header (sin, cos, tan, etc.) to see its explanation.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//             <br/><br/>
            
//             {trigoData && (
//               <table className="my-table">
//                 <thead>
//                   <tr>
//                     {Object.keys(trigoData).map((key, index) => (
//                       <th 
//                         key={index} 
//                         onClick={() => handleFunctionClick(key)}
//                         style={getHeaderStyle(key)}
//                       >
//                         {key}
//                         <span className="tooltip">Click for Explanation</span>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     {Object.values(trigoData).map((value, index) => {
//                       if (value === null) {
//                         return (
//                           <td key={index}>
//                             Undefined
//                             <button onClick={() => copyToClipboard("Undefined")}>
//                               Copy
//                             </button>
//                           </td>
//                         );
//                       }
//                       if (Number.isNaN(value)) {
//                         return (
//                           <td key={index}>
//                             ...
//                             <button onClick={() => copyToClipboard("...")}>
//                               Copy
//                             </button>
//                           </td>
//                         );
//                       }

//                       const numericValue = parseFloat(value);
//                       const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
//                       return (
//                         <td key={index}>
//                           {displayValue}
//                           <button onClick={() => copyToClipboard(displayValue)}>
//                             Copy
//                           </button>
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </legend>
//     </div>
//   );
// };

// export default TrigoCalculator;


'use client'

import React, { useState } from 'react';
import { capitalizeWords ,range} from '@/app/utils/utils-functions';
import './TrigoCalculator.css';
import Link from 'next/link';

const buttonStyle1 = {
    backgroundColor: '#1d6bd8',
    color: 'white',
    height:'2.3rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    padding: '0.4rem 0.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    margin :'5px',
    outerHeight:'2rem',
    border:'solid 1px black'   
};

const buttonStyle2 = {
    backgroundColor: '#555556',
    color: 'white',    
    innerHeight:'2rem',
    height:'2.3rem',
    fontWeight: '500',
    padding: '0.4rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    margin :'5px',
    border:'solid 1px black'
};

const copyButtonStyle = {
    padding: '2px 5px',
    marginLeft: '5px',
    fontSize: '0.7rem',
    cursor: 'pointer',
    backgroundColor: '#eee',
    border: '1px solid #ddd',
    borderRadius: '3px'
};

const TrigoCalculator = ({explanations}) => {
  const [angle, setAngle] = useState('0');
  const [trigoData, setTrigoData] = useState({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [units,setUnits]=useState('degrees');
  const [decimalPlaces,setDecimalPlaces]=useState(5);
  const [selectedFunction, setSelectedFunction] = useState('sin'); // Default to 'sin'

  const API_URL = 'https://pickjourney.com/trigo/all_trigo/';

  const handleCalculate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const angleVal=angle||0
    try {
      const response = await fetch(`${API_URL}${angleVal}/?unit=${units}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const fixedData = {
        ...data,
        cot: data.tan === 0 ? null : data.tan === null ? 0 : 1/data.tan
      };
      setTrigoData(fixedData);
      // setAngle('')
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUnitChange = (event) => {
    const selectedUnit = event.target.value;
    setUnits(selectedUnit);
  };

  const handlePrecision=(e)=>{
    setDecimalPlaces(e.target.value)
  };

  const resetAll=()=>{
    setAngle('');
    setUnits('degrees');
    setDecimalPlaces(5);
    setTrigoData({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
    setSelectedFunction('sin'); // Reset to default
  };

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
  };

  const handleFunctionClick = (func) => {
    console.log('Clicked function:', func); // Debug log
    setSelectedFunction(func);
  };

  const getHeaderStyle = (func) => {
    return {
      backgroundColor: selectedFunction === func ? '#1d6bd8' : '#4a90e2',
      color: 'white',
      cursor: 'pointer',
      padding: '12px',
      transition: 'background-color 0.2s ease'
    };
  };

  return (
    <div>
      <legend>
        <div className="legend-container">
          <div className="calculator-left">
            <div className='upper-container'>
            <form onSubmit={handleCalculate}>
              <div className='input-container'>
                <label>Angle :</label>
                <input
                  className='my-input' 
                  type="number" 
                  value={angle} 
                  onChange={(e) => setAngle(e.target.value)} 
                  placeholder={angle||`Enter Angle in ${capitalizeWords(units)}`}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='units'>Select Units: </label>
                <select 
                  className='my-input'
                  name='units' 
                  id='units'
                  value={units}
                  onChange={handleUnitChange}
                  style={{width:'140px'}}
                >
                  <option value={'radians'}>Radians</option>
                  <option value={'degrees'}>Degrees</option>
                </select>
                <Link
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
                                   </Link>
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
                  {range(1,15).map((num, index)=>(
                    <option key={index} value={num}>{num+"  Decimal Places"}</option>
                  ))}
                </select>
              </div>
              <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
              <button onClick={resetAll} style={buttonStyle2}>Reset</button>
            </form>
            <div className="calculator-right">
              {explanations && explanations[selectedFunction] ? (
                <div className="explanation-content">
                  <h3>{selectedFunction.toUpperCase()}</h3>
                  <p>{explanations[selectedFunction].description}</p>
                  {explanations[selectedFunction].link && (
                    <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
                      Learn more
                    </a>
                  )}
                </div>
              ) : (
                <div className="explanation-content">
                  <h3>Click a function header</h3>
                  <p>Click on any blue header (sin, cos, tan, etc.) to see its explanation.</p>
                </div>
              )}
            </div>
          </div>
            <br/><br/>
            
            {trigoData && (
              <table className="my-table">
                <thead>
                  <tr>
                    {Object.keys(trigoData).map((key, index) => (
                      <th 
                        key={index} 
                        onClick={() => handleFunctionClick(key)}
                        style={getHeaderStyle(key)}
                      >
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
        </div>
      </legend>
    </div>
  );
};

export default TrigoCalculator;