// // // 'use client'

// // // import React, { useState } from 'react';
// // // import { capitalizeWords ,range} from '@/app/utils/utils-functions';
// // // import './TrigoCalculator.css';


// // // const buttonStyle1 = {
// // //     backgroundColor: '#1d6bd8', // Default background color (you can change it)
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
    
// // //   };
// // //   const buttonStyle2 = {
// // //     backgroundColor: '#555556', // Default background color (you can change it)
// // //     color: 'white',    
// // //     innerHeight:'2rem',
// // //     height:'2.3rem',
// // //     fontWeight: '500',
// // //     padding: '0.4rem 1rem',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     margin :'5px',
// // //     border:'solid 1px black'
  
    
// // //   };

  

// // // const TrigoCalculator = () => {
// // //   const [angle, setAngle] = useState('0');
// // //   const [trigoData, setTrigoData] = useState({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [units,setUnits]=useState('degrees')
// // //   const [decimalPlaces,setDecimalPlaces]=useState(5)

// // //   const API_URL = 'https://pickjourney.com/trigo/all_trigo/'; // Adjust as needed

// // // const handleCalculate = async (e) => {
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
// // //       setTrigoData(data);
// // //       setAngle('')
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
// // //   }


// // //   const resetAll=()=>{
// // //     setAngle('')
// // //     setUnits('degrees')
// // //     setDecimalPlaces(5)
// // //     setTrigoData({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN })
// // //   }

// // //   return (
// // //     <div>
        
// // //       <legend style={{border:'solid 1px black',padding:'30px',borderRadius:'7px'}} >
// // //       <form onSubmit={handleCalculate}
// // //       style={{width:'600px'}}>
// // //         <div className='input-container'>
// // //         <label style={{width:'100px'}}>Angle :</label>
// // //         <input
// // //           style={{maxWidth:'460px',width:'300px'}}
// // //           className='my-input' 
// // //           type="number" 
// // //           value={angle} 
// // //           onChange={(e) => setAngle(e.target.value)} 
// // //           placeholder={`Enter Angle in ${capitalizeWords(units)}`}
// // //         />
// // //         </div>
// // //         <div className='input-container'>
// // //         <label for='units' style={{width:'120px'}}>Select Units: </label>
// // //         <select 
// // //         style={{maxWidth:'460px',width:'300px'}}
// // //         className='my-input'
// // //         name='units' 
// // //         id='units'
// // //         value={units}
// // //         onChange={handleUnitChange}
// // //         >Select Units
// // //             <option value={'radians'}>Radians</option>
// // //             <option value={'degrees'}>Degrees</option>
// // //         </select>
// // //         </div>
// // //         <div className='input-container'>
// // //         <label for='units' style={{width:'200px'}}>Select Precision Level : </label>
// // //         <select 
// // //         style={{maxWidth:'460px',width:'300px'}}
// // //         className='my-input'
// // //         name='decimal' 
// // //         id='decimal'
// // //         value={decimalPlaces}
// // //         onChange={handlePrecision}
// // //         >
          
// // //           {range(1,15).map((num, index)=>(
// // //             <option key={index} value={num}>{num+"  Decimal Places"}</option>

// // //           ))}
            
            
// // //         </select>
// // //         </div>
// // //         <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// // //         {/* <p>{units}</p> */}
// // //         <button
// // //         onClick={resetAll}
// // //         style={buttonStyle2}>Reset</button>
        
// // //       </form>
// // //       <br></br>
// // //       <br></br>
      
      

// // //       {trigoData && (
// // //         <table className="my-table">
// // //           <thead>
// // //             <tr>
// // //               {Object.keys(trigoData).map((key, index) => (
// // //                 <th key={index}>{key}</th>
// // //               ))}
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {/* <tr>
// // //               {Object.values(trigoData).map((value, index) => (
// // //                 <td key={index}>{value===null?"Undefined":(parseFloat(value)===0?0:value===NaN?'_':parseFloat(value).toFixed(decimalPlaces))}</td>
// // //               ))}
// // //             </tr> */}
// // //             <tr>
// // //                 {Object.values(trigoData).map((value, index) => {
// // //                     // First, check if the value is null or NaN
// // //                     if (value === null) {
// // //                     return <td key={index}>Undefined</td>;
// // //                     }
// // //                     if (Number.isNaN(value)) {
// // //                     return <td key={index}>...</td>;
// // //                     }

// // //                     // Parse the value to a float and round it
// // //                     const numericValue = parseFloat(value);
// // //                     return (
// // //                     <td key={index}>
// // //                         {numericValue === 0 ? 0 : numericValue.toFixed(decimalPlaces)}
// // //                     </td>
// // //                     );
// // //                 })}
// // //             </tr>

// // //           </tbody>
// // //         </table>
// // //       )}
// // //       {/* {error && <p className="error">{error}</p>} */}
// // //       </legend>
     
// // //     </div>
// // //   );
// // // };

// // // export default TrigoCalculator;
// // 'use client'

// // import React, { useState } from 'react';
// // import { capitalizeWords ,range} from '@/app/utils/utils-functions';
// // import './TrigoCalculator.css';

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

// // const TrigoCalculator = () => {
// //   const [angle, setAngle] = useState('0');
// //   const [trigoData, setTrigoData] = useState({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [units,setUnits]=useState('degrees')
// //   const [decimalPlaces,setDecimalPlaces]=useState(5)

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
// //       setAngle('')
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
// //   }

// //   const resetAll=()=>{
// //     setAngle('')
// //     setUnits('degrees')
// //     setDecimalPlaces(5)
// //     setTrigoData({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN })
// //   }

// //   return (
// //     <div>
// //       <legend style={{border:'solid 1px black',padding:'30px',borderRadius:'7px'}} >
// //       <form onSubmit={handleCalculate}
// //       style={{width:'600px'}}>
// //         <div className='input-container'>
// //         <label style={{width:'100px'}}>Angle :</label>
// //         <input
// //           style={{maxWidth:'460px',width:'300px'}}
// //           className='my-input' 
// //           type="number" 
// //           value={angle} 
// //           onChange={(e) => setAngle(e.target.value)} 
// //           placeholder={`Enter Angle in ${capitalizeWords(units)}`}
// //         />
// //         </div>
// //         <div className='input-container'>
// //         <label htmlFor='units' style={{width:'120px'}}>Select Units: </label>
// //         <select 
// //         style={{maxWidth:'460px',width:'300px'}}
// //         className='my-input'
// //         name='units' 
// //         id='units'
// //         value={units}
// //         onChange={handleUnitChange}
// //         >
// //             <option value={'radians'}>Radians</option>
// //             <option value={'degrees'}>Degrees</option>
// //         </select>
// //         </div>
// //         <div className='input-container'>
// //         <label htmlFor='decimal' style={{width:'200px'}}>Select Precision Level : </label>
// //         <select 
// //         style={{maxWidth:'460px',width:'300px'}}
// //         className='my-input'
// //         name='decimal' 
// //         id='decimal'
// //         value={decimalPlaces}
// //         onChange={handlePrecision}
// //         >
// //           {range(1,15).map((num, index)=>(
// //             <option key={index} value={num}>{num+"  Decimal Places"}</option>
// //           ))}
// //         </select>
// //         </div>
// //         <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// //         <button
// //         onClick={resetAll}
// //         style={buttonStyle2}>Reset</button>
// //       </form>
// //       <br></br>
// //       <br></br>
      
// //       {trigoData && (
// //         <table className="my-table">
// //           <thead>
// //             <tr>
// //               {Object.keys(trigoData).map((key, index) => (
// //                 <th key={index}>{key}</th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //                 {Object.values(trigoData).map((value, index) => {
// //                     if (value === null) {
// //                     return <td key={index}>Undefined</td>;
// //                     }
// //                     if (Number.isNaN(value)) {
// //                     return <td key={index}>...</td>;
// //                     }

// //                     const numericValue = parseFloat(value);
// //                     return (
// //                     <td key={index}>
// //                         {numericValue === 0 ? 0 : numericValue.toFixed(decimalPlaces)}
// //                     </td>
// //                     );
// //                 })}
// //             </tr>
// //           </tbody>
// //         </table>
// //       )}
// //       </legend>
// //     </div>
// //   );
// // };

// // export default TrigoCalculator;
// // 'use client'

// // import React, { useState } from 'react';
// // import { capitalizeWords ,range} from '@/app/utils/utils-functions';
// // import './TrigoCalculator.css';

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

// // const TrigoCalculator = () => {
// //   const [angle, setAngle] = useState('0');
// //   const [trigoData, setTrigoData] = useState({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [units,setUnits]=useState('degrees')
// //   const [decimalPlaces,setDecimalPlaces]=useState(5)

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
// //       setAngle('')
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
// //   }

// //   const resetAll=()=>{
// //     setAngle('')
// //     setUnits('degrees')
// //     setDecimalPlaces(5)
// //     setTrigoData({"sin":NaN,"cos":NaN,"tan":NaN,"csc":NaN,"sec":NaN,"cot":NaN })
// //   }

// //   const copyToClipboard = (value) => {
// //     navigator.clipboard.writeText(value);
// //   };

// //   return (
// //     <div>
// //       <legend style={{border:'solid 1px black',padding:'30px',borderRadius:'7px'}} >
// //       <form onSubmit={handleCalculate}
// //       style={{width:'600px'}}>
// //         <div className='input-container'>
// //         <label style={{width:'100px'}}>Angle :</label>
// //         <input
// //           style={{maxWidth:'460px',width:'300px'}}
// //           className='my-input' 
// //           type="number" 
// //           value={angle} 
// //           onChange={(e) => setAngle(e.target.value)} 
// //           placeholder={`Enter Angle in ${capitalizeWords(units)}`}
// //         />
// //         </div>
// //         <div className='input-container'>
// //         <label htmlFor='units' style={{width:'120px'}}>Select Units: </label>
// //         <select 
// //         style={{maxWidth:'460px',width:'300px'}}
// //         className='my-input'
// //         name='units' 
// //         id='units'
// //         value={units}
// //         onChange={handleUnitChange}
// //         >
// //             <option value={'radians'}>Radians</option>
// //             <option value={'degrees'}>Degrees</option>
// //         </select>
// //         </div>
// //         <div className='input-container'>
// //         <label htmlFor='decimal' style={{width:'200px'}}>Select Precision Level : </label>
// //         <select 
// //         style={{maxWidth:'460px',width:'300px'}}
// //         className='my-input'
// //         name='decimal' 
// //         id='decimal'
// //         value={decimalPlaces}
// //         onChange={handlePrecision}
// //         >
// //           {range(1,15).map((num, index)=>(
// //             <option key={index} value={num}>{num+"  Decimal Places"}</option>
// //           ))}
// //         </select>
// //         </div>
// //         <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
// //         <button
// //         onClick={resetAll}
// //         style={buttonStyle2}>Reset</button>
// //       </form>
// //       <br></br>
// //       <br></br>
      
// //       {trigoData && (
// //         <table className="my-table">
// //           <thead>
// //             <tr>
// //               {Object.keys(trigoData).map((key, index) => (
// //                 <th key={index}>{key}</th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //                 {Object.values(trigoData).map((value, index) => {
// //                     if (value === null) {
// //                       return (
// //                         <td key={index}>
// //                           Undefined
// //                           <button 
// //                             onClick={() => copyToClipboard("Undefined")}
// //                             style={copyButtonStyle}
// //                           >
// //                             Copy
// //                           </button>
// //                         </td>
// //                       );
// //                     }
// //                     if (Number.isNaN(value)) {
// //                       return (
// //                         <td key={index}>
// //                           ...
// //                           <button 
// //                             onClick={() => copyToClipboard("...")}
// //                             style={copyButtonStyle}
// //                           >
// //                             Copy
// //                           </button>
// //                         </td>
// //                       );
// //                     }

// //                     const numericValue = parseFloat(value);
// //                     const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
// //                     return (
// //                       <td key={index}>
// //                         {displayValue}
// //                         <button 
// //                           onClick={() => copyToClipboard(displayValue)}
// //                           style={copyButtonStyle}
// //                         >
// //                           Copy
// //                         </button>
// //                       </td>
// //                     );
// //                 })}
// //             </tr>
// //           </tbody>
// //         </table>
// //       )}
// //       </legend>
// //     </div>
// //   );
// // };

// // export default TrigoCalculator;
// 'use client'

// import React, { useState } from 'react';
// import { capitalizeWords ,range} from '@/app/utils/utils-functions';
// import './TrigoCalculator.css';

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
//   const [selectedFunction, setSelectedFunction] = useState(null);

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
//       setAngle('')
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
//     setSelectedFunction(null);
//   };

//   const copyToClipboard = (value) => {
//     navigator.clipboard.writeText(value);
//   };

//   const handleFunctionClick = (func) => {
//     setSelectedFunction(func);
//   };

//   return (
//     <div className="calculator-container">
//       <div className="calculator-main">
//         <legend>
//           <form onSubmit={handleCalculate}>
//             <div className='input-container'>
//               <label>Angle :</label>
//               <input
//                 className='my-input' 
//                 type="number" 
//                 value={angle} 
//                 onChange={(e) => setAngle(e.target.value)} 
//                 placeholder={`Enter Angle in ${capitalizeWords(units)}`}
//               />
//             </div>
//             <div className='input-container'>
//               <label htmlFor='units'>Select Units: </label>
//               <select 
//                 className='my-input'
//                 name='units' 
//                 id='units'
//                 value={units}
//                 onChange={handleUnitChange}
//               >
//                 <option value={'radians'}>Radians</option>
//                 <option value={'degrees'}>Degrees</option>
//               </select>
//             </div>
//             <div className='input-container'>
//               <label htmlFor='decimal'>Select Precision Level : </label>
//               <select 
//                 className='my-input'
//                 name='decimal' 
//                 id='decimal'
//                 value={decimalPlaces}
//                 onChange={handlePrecision}
//               >
//                 {range(1,15).map((num, index)=>(
//                   <option key={index} value={num}>{num+"  Decimal Places"}</option>
//                 ))}
//               </select>
//             </div>
//             <button style={buttonStyle1} type="submit" disabled={loading}>Calculate</button>
//             <button onClick={resetAll} style={buttonStyle2}>Reset</button>
//           </form>
//           <br/><br/>
          
//           {trigoData && (
//             <table className="my-table">
//               <thead>
//                 <tr>
//                   {Object.keys(trigoData).map((key, index) => (
//                     <th key={index} onClick={() => handleFunctionClick(key)}>
//                       {key}
//                       <span className="tooltip">Click for explanation</span>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   {Object.values(trigoData).map((value, index) => {
//                     if (value === null) {
//                       return (
//                         <td key={index}>
//                           Undefined
//                           <button onClick={() => copyToClipboard("Undefined")}>
//                             Copy
//                           </button>
//                         </td>
//                       );
//                     }
//                     if (Number.isNaN(value)) {
//                       return (
//                         <td key={index}>
//                           ...
//                           <button onClick={() => copyToClipboard("...")}>
//                             Copy
//                           </button>
//                         </td>
//                       );
//                     }

//                     const numericValue = parseFloat(value);
//                     const displayValue = numericValue === 0 ? '0' : numericValue.toFixed(decimalPlaces);
//                     return (
//                       <td key={index}>
//                         {displayValue}
//                         <button onClick={() => copyToClipboard(displayValue)}>
//                           Copy
//                         </button>
//                       </td>
//                     );
//                   })}
//                 </tr>
//               </tbody>
//             </table>
//           )}
//         </legend>
//       </div>
//       <div className="explanation-area">
//         {selectedFunction && explanations[selectedFunction] && (
//           <div className="explanation-content">
//             <h3>{selectedFunction.toUpperCase()}</h3>
//             <p>{explanations[selectedFunction].description}</p>
//             {explanations[selectedFunction].link && (
//               <a href={explanations[selectedFunction].link} target="_blank" rel="noopener noreferrer">
//                 Learn more
//               </a>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TrigoCalculator;
'use client'

import React, { useState } from 'react';
import { capitalizeWords ,range} from '@/app/utils/utils-functions';
import './TrigoCalculator.css';

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
  const [selectedFunction, setSelectedFunction] = useState(null);

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
    setSelectedFunction(null);
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
                  {range(1,15).map((num, index)=>(
                    <option key={index} value={num}>{num+"  Decimal Places"}</option>
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
            <br/><br/>
            
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

export default TrigoCalculator;