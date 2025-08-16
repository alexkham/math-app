// // // // // // // // // // JointProbabilityTable.jsx
// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import 'katex/dist/katex.min.css';
// // // // // // // // // import { InlineMath } from 'react-katex';

// // // // // // // // // const INITIAL_STATE = {
// // // // // // // // //   aAndB: 0.25,
// // // // // // // // //   aAndNotB: 0.25,
// // // // // // // // //   notAAndB: 0.15,
// // // // // // // // //   notAAndNotB: 0.35,
// // // // // // // // // };

// // // // // // // // // const JointProbabilityTable = () => {
// // // // // // // // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // // // // // // // //   const [isValid, setIsValid] = useState(true);

// // // // // // // // //   const calculateMarginals = () => {
// // // // // // // // //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // // // // // // // //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // // // // // // // //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // // // // // // // //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // // // // // // // //     const total = pA + pNotA;
    
// // // // // // // // //     return { pA, pNotA, pB, pNotB, total };
// // // // // // // // //   };

// // // // // // // // //   const resetTable = () => {
// // // // // // // // //     setProbabilities(INITIAL_STATE);
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// // // // // // // // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // // // // // // // //   }, [probabilities]);

// // // // // // // // //   const handleChange = (key, value) => {
// // // // // // // // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // // // // // // // //     setProbabilities(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [key]: numValue
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   const marginals = calculateMarginals();

// // // // // // // // //   return (
// // // // // // // // //     <div className="max-w-3xl mx-auto p-4">
// // // // // // // // //       <div className="bg-white rounded-lg shadow-md p-6">
// // // // // // // // //         <div className="flex justify-between items-center mb-4">
// // // // // // // // //           <h2 className="text-xl font-bold">Joint Probability Table Calculator</h2>
// // // // // // // // //           <button 
// // // // // // // // //             onClick={resetTable}
// // // // // // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // // // // //           >
// // // // // // // // //             Reset
// // // // // // // // //           </button>
// // // // // // // // //         </div>

// // // // // // // // //         {!isValid && (
// // // // // // // // //           <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
// // // // // // // // //             All probabilities must sum to 1
// // // // // // // // //           </div>
// // // // // // // // //         )}
        
// // // // // // // // //         <div className="overflow-x-auto">
// // // // // // // // //           <table className="w-full border-collapse">
// // // // // // // // //             <thead>
// // // // // // // // //               <tr>
// // // // // // // // //                 <th className="p-2 border"></th>
// // // // // // // // //                 <th className="p-2 border">
// // // // // // // // //                   <InlineMath math="A" />
// // // // // // // // //                 </th>
// // // // // // // // //                 <th className="p-2 border">
// // // // // // // // //                   <InlineMath math="\bar{A}" />
// // // // // // // // //                 </th>
// // // // // // // // //                 <th className="p-2 border">
// // // // // // // // //                   <InlineMath math="P(B)" />
// // // // // // // // //                 </th>
// // // // // // // // //               </tr>
// // // // // // // // //             </thead>
// // // // // // // // //             <tbody>
// // // // // // // // //               <tr>
// // // // // // // // //                 <td className="p-2 border font-medium">
// // // // // // // // //                   <InlineMath math="B" />
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border">
// // // // // // // // //                   <div className="flex flex-col items-center gap-1">
// // // // // // // // //                     <InlineMath math="P(A \cap B)" />
// // // // // // // // //                     <input 
// // // // // // // // //                       type="number"
// // // // // // // // //                       min="0"
// // // // // // // // //                       max="1"
// // // // // // // // //                       step="0.01"
// // // // // // // // //                       value={probabilities.aAndB}
// // // // // // // // //                       onChange={(e) => handleChange('aAndB', e.target.value)}
// // // // // // // // //                       className="w-24 px-2 py-1 border rounded"
// // // // // // // // //                     />
// // // // // // // // //                   </div>
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border">
// // // // // // // // //                   <div className="flex flex-col items-center gap-1">
// // // // // // // // //                     <InlineMath math="P(\bar{A} \cap B)" />
// // // // // // // // //                     <input 
// // // // // // // // //                       type="number"
// // // // // // // // //                       min="0"
// // // // // // // // //                       max="1"
// // // // // // // // //                       step="0.01"
// // // // // // // // //                       value={probabilities.notAAndB}
// // // // // // // // //                       onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // // // // // // //                       className="w-24 px-2 py-1 border rounded"
// // // // // // // // //                     />
// // // // // // // // //                   </div>
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border text-center font-medium">
// // // // // // // // //                   {marginals.pB.toFixed(3)}
// // // // // // // // //                 </td>
// // // // // // // // //               </tr>
// // // // // // // // //               <tr>
// // // // // // // // //                 <td className="p-2 border font-medium">
// // // // // // // // //                   <InlineMath math="\bar{B}" />
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border">
// // // // // // // // //                   <div className="flex flex-col items-center gap-1">
// // // // // // // // //                     <InlineMath math="P(A \cap \bar{B})" />
// // // // // // // // //                     <input 
// // // // // // // // //                       type="number"
// // // // // // // // //                       min="0"
// // // // // // // // //                       max="1"
// // // // // // // // //                       step="0.01"
// // // // // // // // //                       value={probabilities.aAndNotB}
// // // // // // // // //                       onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // // // // // // //                       className="w-24 px-2 py-1 border rounded"
// // // // // // // // //                     />
// // // // // // // // //                   </div>
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border">
// // // // // // // // //                   <div className="flex flex-col items-center gap-1">
// // // // // // // // //                     <InlineMath math="P(\bar{A} \cap \bar{B})" />
// // // // // // // // //                     <input 
// // // // // // // // //                       type="number"
// // // // // // // // //                       min="0"
// // // // // // // // //                       max="1"
// // // // // // // // //                       step="0.01"
// // // // // // // // //                       value={probabilities.notAAndNotB}
// // // // // // // // //                       onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // // // // // // //                       className="w-24 px-2 py-1 border rounded"
// // // // // // // // //                     />
// // // // // // // // //                   </div>
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border text-center font-medium">
// // // // // // // // //                   {marginals.pNotB.toFixed(3)}
// // // // // // // // //                 </td>
// // // // // // // // //               </tr>
// // // // // // // // //               <tr>
// // // // // // // // //                 <td className="p-2 border font-medium">
// // // // // // // // //                   <InlineMath math="P(A)" />
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border text-center font-medium">
// // // // // // // // //                   {marginals.pA.toFixed(3)}
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border text-center font-medium">
// // // // // // // // //                   {marginals.pNotA.toFixed(3)}
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border text-center font-medium">
// // // // // // // // //                   {marginals.total.toFixed(3)}
// // // // // // // // //                 </td>
// // // // // // // // //               </tr>
// // // // // // // // //             </tbody>
// // // // // // // // //           </table>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default JointProbabilityTable;

// // // // // // // // // JointProbabilityTable.jsx
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import 'katex/dist/katex.min.css';
// // // // // // // // import { InlineMath } from 'react-katex';

// // // // // // // // const INITIAL_STATE = {
// // // // // // // //   aAndB: 0.25,
// // // // // // // //   aAndNotB: 0.25,
// // // // // // // //   notAAndB: 0.15,
// // // // // // // //   notAAndNotB: 0.35,
// // // // // // // // };

// // // // // // // // const JointProbabilityTable = () => {
// // // // // // // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // // // // // // //   const [isValid, setIsValid] = useState(true);

// // // // // // // //   const calculateMarginals = () => {
// // // // // // // //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // // // // // // //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // // // // // // //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // // // // // // //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // // // // // // //     const total = pA + pNotA;
    
// // // // // // // //     return { pA, pNotA, pB, pNotB, total };
// // // // // // // //   };

// // // // // // // //   const generateRandomProbabilities = () => {
// // // // // // // //     // Generate three random numbers between 0 and 1
// // // // // // // //     let p1 = Math.random();
// // // // // // // //     let p2 = Math.random() * (1 - p1);
// // // // // // // //     let p3 = Math.random() * (1 - p1 - p2);
// // // // // // // //     // The fourth number is whatever is left to sum to 1
// // // // // // // //     let p4 = 1 - p1 - p2 - p3;
    
// // // // // // // //     // Round to 3 decimal places
// // // // // // // //     p1 = Number(p1.toFixed(3));
// // // // // // // //     p2 = Number(p2.toFixed(3));
// // // // // // // //     p3 = Number(p3.toFixed(3));
// // // // // // // //     p4 = Number(p4.toFixed(3));

// // // // // // // //     setProbabilities({
// // // // // // // //       aAndB: p1,
// // // // // // // //       aAndNotB: p2,
// // // // // // // //       notAAndB: p3,
// // // // // // // //       notAAndNotB: p4,
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const resetTable = () => {
// // // // // // // //     setProbabilities(INITIAL_STATE);
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// // // // // // // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // // // // // // //   }, [probabilities]);

// // // // // // // //   const handleChange = (key, value) => {
// // // // // // // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // // // // // // //     setProbabilities(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [key]: numValue
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const marginals = calculateMarginals();

// // // // // // // //   return (
// // // // // // // //     <div className="max-w-4xl mx-auto p-6">
// // // // // // // //       <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
// // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // //           <h2 className="text-2xl font-bold text-gray-800">Joint Probability Table Calculator</h2>
// // // // // // // //           <div className="space-x-3">
// // // // // // // //             <button 
// // // // // // // //               onClick={generateRandomProbabilities}
// // // // // // // //               className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
// // // // // // // //             >
// // // // // // // //               Random
// // // // // // // //             </button>
// // // // // // // //             <button 
// // // // // // // //               onClick={resetTable}
// // // // // // // //               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
// // // // // // // //             >
// // // // // // // //               Reset
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {!isValid && (
// // // // // // // //           <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
// // // // // // // //             All probabilities must sum to 1
// // // // // // // //           </div>
// // // // // // // //         )}
        
// // // // // // // //         <div className="overflow-x-auto">
// // // // // // // //           <table className="w-full border-collapse bg-white">
// // // // // // // //             <thead>
// // // // // // // //               <tr className="bg-gray-50">
// // // // // // // //                 <th className="p-3 border border-gray-200"></th>
// // // // // // // //                 <th className="p-3 border border-gray-200">
// // // // // // // //                   <InlineMath math="A" />
// // // // // // // //                 </th>
// // // // // // // //                 <th className="p-3 border border-gray-200">
// // // // // // // //                   <InlineMath math="\bar{A}" />
// // // // // // // //                 </th>
// // // // // // // //                 <th className="p-3 border border-gray-200">
// // // // // // // //                   <InlineMath math="P(B)" />
// // // // // // // //                 </th>
// // // // // // // //               </tr>
// // // // // // // //             </thead>
// // // // // // // //             <tbody>
// // // // // // // //               <tr>
// // // // // // // //                 <td className="p-3 border border-gray-200 font-medium bg-gray-50">
// // // // // // // //                   <InlineMath math="B" />
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200">
// // // // // // // //                   <div className="flex flex-col items-center gap-2">
// // // // // // // //                     <div className="text-gray-600">
// // // // // // // //                       <InlineMath math="P(A \cap B)" />
// // // // // // // //                     </div>
// // // // // // // //                     <input 
// // // // // // // //                       type="number"
// // // // // // // //                       min="0"
// // // // // // // //                       max="1"
// // // // // // // //                       step="0.001"
// // // // // // // //                       value={probabilities.aAndB}
// // // // // // // //                       onChange={(e) => handleChange('aAndB', e.target.value)}
// // // // // // // //                       className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200">
// // // // // // // //                   <div className="flex flex-col items-center gap-2">
// // // // // // // //                     <div className="text-gray-600">
// // // // // // // //                       <InlineMath math="P(\bar{A} \cap B)" />
// // // // // // // //                     </div>
// // // // // // // //                     <input 
// // // // // // // //                       type="number"
// // // // // // // //                       min="0"
// // // // // // // //                       max="1"
// // // // // // // //                       step="0.001"
// // // // // // // //                       value={probabilities.notAAndB}
// // // // // // // //                       onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // // // // // //                       className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200 text-center font-medium bg-gray-50">
// // // // // // // //                   {marginals.pB.toFixed(3)}
// // // // // // // //                 </td>
// // // // // // // //               </tr>
// // // // // // // //               <tr>
// // // // // // // //                 <td className="p-3 border border-gray-200 font-medium bg-gray-50">
// // // // // // // //                   <InlineMath math="\bar{B}" />
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200">
// // // // // // // //                   <div className="flex flex-col items-center gap-2">
// // // // // // // //                     <div className="text-gray-600">
// // // // // // // //                       <InlineMath math="P(A \cap \bar{B})" />
// // // // // // // //                     </div>
// // // // // // // //                     <input 
// // // // // // // //                       type="number"
// // // // // // // //                       min="0"
// // // // // // // //                       max="1"
// // // // // // // //                       step="0.001"
// // // // // // // //                       value={probabilities.aAndNotB}
// // // // // // // //                       onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // // // // // //                       className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200">
// // // // // // // //                   <div className="flex flex-col items-center gap-2">
// // // // // // // //                     <div className="text-gray-600">
// // // // // // // //                       <InlineMath math="P(\bar{A} \cap \bar{B})" />
// // // // // // // //                     </div>
// // // // // // // //                     <input 
// // // // // // // //                       type="number"
// // // // // // // //                       min="0"
// // // // // // // //                       max="1"
// // // // // // // //                       step="0.001"
// // // // // // // //                       value={probabilities.notAAndNotB}
// // // // // // // //                       onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // // // // // //                       className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200 text-center font-medium bg-gray-50">
// // // // // // // //                   {marginals.pNotB.toFixed(3)}
// // // // // // // //                 </td>
// // // // // // // //               </tr>
// // // // // // // //               <tr className="bg-gray-50">
// // // // // // // //                 <td className="p-3 border border-gray-200 font-medium">
// // // // // // // //                   <InlineMath math="P(A)" />
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200 text-center font-medium">
// // // // // // // //                   {marginals.pA.toFixed(3)}
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200 text-center font-medium">
// // // // // // // //                   {marginals.pNotA.toFixed(3)}
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-3 border border-gray-200 text-center font-medium">
// // // // // // // //                   {marginals.total.toFixed(3)}
// // // // // // // //                 </td>
// // // // // // // //               </tr>
// // // // // // // //             </tbody>
// // // // // // // //           </table>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default JointProbabilityTable;
// // // // // // // // JointProbabilityTable.jsx
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import 'katex/dist/katex.min.css';
// // // // // // // import { InlineMath } from 'react-katex';

// // // // // // // const styles = {
// // // // // // //   calculator: {
// // // // // // //     maxWidth: '800px',
// // // // // // //     margin: '20px auto',
// // // // // // //     padding: '20px',
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     borderRadius: '8px',
// // // // // // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: '20px'
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: '24px',
// // // // // // //     color: '#333'
// // // // // // //   },
// // // // // // //   buttons: {
// // // // // // //     display: 'flex',
// // // // // // //     gap: '10px'
// // // // // // //   },
// // // // // // //   button: {
// // // // // // //     padding: '8px 16px',
// // // // // // //     border: 'none',
// // // // // // //     borderRadius: '4px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     fontSize: '14px',
// // // // // // //     color: '#fff'
// // // // // // //   },
// // // // // // //   randomBtn: {
// // // // // // //     backgroundColor: '#4CAF50'
// // // // // // //   },
// // // // // // //   resetBtn: {
// // // // // // //     backgroundColor: '#2196F3'
// // // // // // //   },
// // // // // // //   error: {
// // // // // // //     padding: '10px',
// // // // // // //     backgroundColor: '#ffebee',
// // // // // // //     color: '#c62828',
// // // // // // //     borderRadius: '4px',
// // // // // // //     marginBottom: '20px'
// // // // // // //   },
// // // // // // //   table: {
// // // // // // //     width: '100%',
// // // // // // //     borderCollapse: 'collapse',
// // // // // // //     marginTop: '10px'
// // // // // // //   },
// // // // // // //   th: {
// // // // // // //     padding: '12px',
// // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // //     border: '1px solid #ddd'
// // // // // // //   },
// // // // // // //   td: {
// // // // // // //     padding: '12px',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     textAlign: 'center'
// // // // // // //   },
// // // // // // //   cell: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     alignItems: 'center',
// // // // // // //     gap: '8px'
// // // // // // //   },
// // // // // // //   input: {
// // // // // // //     width: '100px',
// // // // // // //     padding: '8px',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     borderRadius: '4px',
// // // // // // //     textAlign: 'center'
// // // // // // //   },
// // // // // // //   result: {
// // // // // // //     fontWeight: 'bold',
// // // // // // //     backgroundColor: '#f5f5f5'
// // // // // // //   }
// // // // // // // };

// // // // // // // const INITIAL_STATE = {
// // // // // // //   aAndB: 0.25,
// // // // // // //   aAndNotB: 0.25,
// // // // // // //   notAAndB: 0.15,
// // // // // // //   notAAndNotB: 0.35,
// // // // // // // };

// // // // // // // const JointProbabilityTable = () => {
// // // // // // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // // // // // //   const [isValid, setIsValid] = useState(true);

// // // // // // //   const calculateMarginals = () => {
// // // // // // //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // // // // // //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // // // // // //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // // // // // //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // // // // // //     const total = pA + pNotA;
// // // // // // //     return { pA, pNotA, pB, pNotB, total };
// // // // // // //   };

// // // // // // //   const generateRandomProbabilities = () => {
// // // // // // //     let p1 = Math.random();
// // // // // // //     let p2 = Math.random() * (1 - p1);
// // // // // // //     let p3 = Math.random() * (1 - p1 - p2);
// // // // // // //     let p4 = 1 - p1 - p2 - p3;
    
// // // // // // //     setProbabilities({
// // // // // // //       aAndB: Number(p1.toFixed(3)),
// // // // // // //       aAndNotB: Number(p2.toFixed(3)),
// // // // // // //       notAAndB: Number(p3.toFixed(3)),
// // // // // // //       notAAndNotB: Number(p4.toFixed(3)),
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const resetTable = () => setProbabilities(INITIAL_STATE);

// // // // // // //   useEffect(() => {
// // // // // // //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// // // // // // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // // // // // //   }, [probabilities]);

// // // // // // //   const handleChange = (key, value) => {
// // // // // // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // // // // // //     setProbabilities(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [key]: numValue
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const marginals = calculateMarginals();

// // // // // // //   return (
// // // // // // //     <div style={styles.calculator}>
// // // // // // //       <div style={styles.header}>
// // // // // // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // // // // // //         <div style={styles.buttons}>
// // // // // // //           <button 
// // // // // // //             onClick={generateRandomProbabilities} 
// // // // // // //             style={{...styles.button, ...styles.randomBtn}}
// // // // // // //           >
// // // // // // //             Random
// // // // // // //           </button>
// // // // // // //           <button 
// // // // // // //             onClick={resetTable} 
// // // // // // //             style={{...styles.button, ...styles.resetBtn}}
// // // // // // //           >
// // // // // // //             Reset
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {!isValid && (
// // // // // // //         <div style={styles.error}>
// // // // // // //           All probabilities must sum to 1
// // // // // // //         </div>
// // // // // // //       )}
      
// // // // // // //       <table style={styles.table}>
// // // // // // //         <thead>
// // // // // // //           <tr>
// // // // // // //             <th style={styles.th}></th>
// // // // // // //             <th style={styles.th}><InlineMath math="A" /></th>
// // // // // // //             <th style={styles.th}><InlineMath math="\bar{A}" /></th>
// // // // // // //             <th style={styles.th}><InlineMath math="P(B)" /></th>
// // // // // // //           </tr>
// // // // // // //         </thead>
// // // // // // //         <tbody>
// // // // // // //           <tr>
// // // // // // //             <td style={styles.td}><InlineMath math="B" /></td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(A \cap B)" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.aAndB}
// // // // // // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(\bar{A} \cap B)" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.notAAndB}
// // // // // // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>{marginals.pB.toFixed(3)}</td>
// // // // // // //           </tr>
// // // // // // //           <tr>
// // // // // // //             <td style={styles.td}><InlineMath math="\bar{B}" /></td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(A \cap \bar{B})" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.aAndNotB}
// // // // // // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(\bar{A} \cap \bar{B})" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.notAAndNotB}
// // // // // // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>{marginals.pNotB.toFixed(3)}</td>
// // // // // // //           </tr>
// // // // // // //           <tr>
// // // // // // //             <td style={styles.td}><InlineMath math="P(A)" /></td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>{marginals.pA.toFixed(3)}</td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>{marginals.pNotA.toFixed(3)}</td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>{marginals.total.toFixed(3)}</td>
// // // // // // //           </tr>
// // // // // // //         </tbody>
// // // // // // //       </table>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default JointProbabilityTable;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import 'katex/dist/katex.min.css';
// // // // // // // import { InlineMath } from 'react-katex';

// // // // // // // const styles = {
// // // // // // //   calculator: {
// // // // // // //     maxWidth: '800px',
// // // // // // //     margin: '20px auto',
// // // // // // //     padding: '20px',
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     borderRadius: '8px',
// // // // // // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: '20px'
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: '24px',
// // // // // // //     color: '#333'
// // // // // // //   },
// // // // // // //   buttons: {
// // // // // // //     display: 'flex',
// // // // // // //     gap: '10px'
// // // // // // //   },
// // // // // // //   button: {
// // // // // // //     padding: '8px 16px',
// // // // // // //     border: 'none',
// // // // // // //     borderRadius: '4px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     fontSize: '14px',
// // // // // // //     color: '#fff'
// // // // // // //   },
// // // // // // //   randomBtn: {
// // // // // // //     backgroundColor: '#4CAF50'
// // // // // // //   },
// // // // // // //   resetBtn: {
// // // // // // //     backgroundColor: '#2196F3'
// // // // // // //   },
// // // // // // //   error: {
// // // // // // //     padding: '10px',
// // // // // // //     backgroundColor: '#ffebee',
// // // // // // //     color: '#c62828',
// // // // // // //     borderRadius: '4px',
// // // // // // //     marginBottom: '20px'
// // // // // // //   },
// // // // // // //   table: {
// // // // // // //     width: '100%',
// // // // // // //     borderCollapse: 'collapse',
// // // // // // //     marginTop: '10px'
// // // // // // //   },
// // // // // // //   th: {
// // // // // // //     padding: '12px',
// // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     minWidth: '150px'
// // // // // // //   },
// // // // // // //   td: {
// // // // // // //     padding: '12px',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     textAlign: 'center'
// // // // // // //   },
// // // // // // //   cell: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     alignItems: 'center',
// // // // // // //     gap: '8px'
// // // // // // //   },
// // // // // // //   input: {
// // // // // // //     width: '100px',
// // // // // // //     padding: '8px',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     borderRadius: '4px',
// // // // // // //     textAlign: 'center'
// // // // // // //   },
// // // // // // //   result: {
// // // // // // //     fontWeight: 'bold',
// // // // // // //     backgroundColor: '#f8f9fa'
// // // // // // //   }
// // // // // // // };

// // // // // // // const INITIAL_STATE = {
// // // // // // //   aAndB: 0.25,
// // // // // // //   aAndNotB: 0.25,
// // // // // // //   notAAndB: 0.15,
// // // // // // //   notAAndNotB: 0.35,
// // // // // // // };

// // // // // // // const JointProbabilityTable = () => {
// // // // // // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // // // // // //   const [isValid, setIsValid] = useState(true);

// // // // // // //   const calculateMarginals = () => {
// // // // // // //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // // // // // //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // // // // // //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // // // // // //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // // // // // //     const total = pA + pNotA;
// // // // // // //     return { pA, pNotA, pB, pNotB, total };
// // // // // // //   };

// // // // // // //   const generateRandomProbabilities = () => {
// // // // // // //     let vals = Array(4).fill().map(() => Math.random());
// // // // // // //     const sum = vals.reduce((a, b) => a + b, 0);
// // // // // // //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// // // // // // //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// // // // // // //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// // // // // // //     setProbabilities({
// // // // // // //       aAndB: vals[0],
// // // // // // //       aAndNotB: vals[1],
// // // // // // //       notAAndB: vals[2],
// // // // // // //       notAAndNotB: vals[3]
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const resetTable = () => setProbabilities(INITIAL_STATE);

// // // // // // //   useEffect(() => {
// // // // // // //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// // // // // // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // // // // // //   }, [probabilities]);

// // // // // // //   const handleChange = (key, value) => {
// // // // // // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // // // // // //     setProbabilities(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [key]: numValue
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const marginals = calculateMarginals();

// // // // // // //   return (
// // // // // // //     <div style={styles.calculator}>
// // // // // // //       <div style={styles.header}>
// // // // // // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // // // // // //         <div style={styles.buttons}>
// // // // // // //           <button 
// // // // // // //             onClick={generateRandomProbabilities} 
// // // // // // //             style={{...styles.button, ...styles.randomBtn}}
// // // // // // //           >
// // // // // // //             Random
// // // // // // //           </button>
// // // // // // //           <button 
// // // // // // //             onClick={resetTable} 
// // // // // // //             style={{...styles.button, ...styles.resetBtn}}
// // // // // // //           >
// // // // // // //             Reset
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {!isValid && (
// // // // // // //         <div style={styles.error}>
// // // // // // //           All probabilities must sum to 1
// // // // // // //         </div>
// // // // // // //       )}
      
// // // // // // //       <table style={styles.table}>
// // // // // // //         <thead>
// // // // // // //           <tr>
// // // // // // //             <th style={styles.th}></th>
// // // // // // //             <th style={styles.th}><InlineMath math="A" /></th>
// // // // // // //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// // // // // // //             <th style={styles.th}><InlineMath math="Marginal" /></th>
// // // // // // //           </tr>
// // // // // // //         </thead>
// // // // // // //         <tbody>
// // // // // // //           <tr>
// // // // // // //             <td style={{...styles.td, ...styles.th}}>
// // // // // // //               <InlineMath math="B" />
// // // // // // //             </td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(A \cap B)" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.aAndB}
// // // // // // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(\overline{A} \cap B)" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.notAAndB}
// // // // // // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>
// // // // // // //               <InlineMath math={`P(B)=${marginals.pB.toFixed(3)}`} />
// // // // // // //             </td>
// // // // // // //           </tr>
// // // // // // //           <tr>
// // // // // // //             <td style={{...styles.td, ...styles.th}}>
// // // // // // //               <InlineMath math="\overline{B}" />
// // // // // // //             </td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(A \cap \overline{B})" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.aAndNotB}
// // // // // // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={styles.td}>
// // // // // // //               <div style={styles.cell}>
// // // // // // //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// // // // // // //                 <input 
// // // // // // //                   type="number"
// // // // // // //                   min="0"
// // // // // // //                   max="1"
// // // // // // //                   step="0.001"
// // // // // // //                   value={probabilities.notAAndNotB}
// // // // // // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // // // // //                   style={styles.input}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             </td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>
// // // // // // //               <InlineMath math={`P(\\overline{B})=${marginals.pNotB.toFixed(3)}`} />
// // // // // // //             </td>
// // // // // // //           </tr>
// // // // // // //           <tr>
// // // // // // //             <td style={{...styles.td, ...styles.th}}>
// // // // // // //               <InlineMath math="Marginal" />
// // // // // // //             </td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>
// // // // // // //               <InlineMath math={`P(A)=${marginals.pA.toFixed(3)}`} />
// // // // // // //             </td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>
// // // // // // //               <InlineMath math={`P(\\overline{A})=${marginals.pNotA.toFixed(3)}`} />
// // // // // // //             </td>
// // // // // // //             <td style={{...styles.td, ...styles.result}}>
// // // // // // //               <InlineMath math={`\\Sigma=${marginals.total.toFixed(3)}`} />
// // // // // // //             </td>
// // // // // // //           </tr>
// // // // // // //         </tbody>
// // // // // // //       </table>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default JointProbabilityTable;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import 'katex/dist/katex.min.css';
// // // // // // import { InlineMath } from 'react-katex';

// // // // // // const styles = {
// // // // // //   calculator: {
// // // // // //     maxWidth: '900px',
// // // // // //     margin: '20px auto',
// // // // // //     padding: '20px',
// // // // // //     backgroundColor: '#fff',
// // // // // //     borderRadius: '8px',
// // // // // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// // // // // //   },
// // // // // //   header: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: '20px'
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: '24px',
// // // // // //     color: '#333'
// // // // // //   },
// // // // // //   buttons: {
// // // // // //     display: 'flex',
// // // // // //     gap: '10px'
// // // // // //   },
// // // // // //   button: {
// // // // // //     padding: '8px 16px',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '14px',
// // // // // //     color: '#fff'
// // // // // //   },
// // // // // //   randomBtn: {
// // // // // //     backgroundColor: '#4CAF50'
// // // // // //   },
// // // // // //   resetBtn: {
// // // // // //     backgroundColor: '#2196F3'
// // // // // //   },
// // // // // //   error: {
// // // // // //     padding: '10px',
// // // // // //     backgroundColor: '#ffebee',
// // // // // //     color: '#c62828',
// // // // // //     borderRadius: '4px',
// // // // // //     marginBottom: '20px'
// // // // // //   },
// // // // // //   table: {
// // // // // //     width: '100%',
// // // // // //     borderCollapse: 'collapse',
// // // // // //     marginTop: '10px'
// // // // // //   },
// // // // // //   th: {
// // // // // //     padding: '12px',
// // // // // //     backgroundColor: '#f5f5f5',
// // // // // //     border: '1px solid #ddd',
// // // // // //     fontWeight: 'bold',
// // // // // //     minWidth: '150px'
// // // // // //   },
// // // // // //   td: {
// // // // // //     padding: '12px',
// // // // // //     border: '1px solid #ddd',
// // // // // //     textAlign: 'center'
// // // // // //   },
// // // // // //   cell: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '8px'
// // // // // //   },
// // // // // //   input: {
// // // // // //     width: '100px',
// // // // // //     padding: '8px',
// // // // // //     border: '1px solid #ddd',
// // // // // //     borderRadius: '4px',
// // // // // //     textAlign: 'center'
// // // // // //   },
// // // // // //   marginalCell: {
// // // // // //     backgroundColor: '#e3f2fd',
// // // // // //   },
// // // // // //   marginalInput: {
// // // // // //     backgroundColor: '#f8f9fa',
// // // // // //     border: '2px solid #90caf9'
// // // // // //   }
// // // // // // };

// // // // // // const INITIAL_STATE = {
// // // // // //   aAndB: 0.25,
// // // // // //   aAndNotB: 0.25,
// // // // // //   notAAndB: 0.15,
// // // // // //   notAAndNotB: 0.35,
// // // // // //   marginalA: 0.50,
// // // // // //   marginalNotA: 0.50,
// // // // // //   marginalB: 0.40,
// // // // // //   marginalNotB: 0.60,
// // // // // // };

// // // // // // const JointProbabilityTable = () => {
// // // // // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // // // // //   const [isValid, setIsValid] = useState(true);

// // // // // //   const calculateMarginals = () => {
// // // // // //     const marginalA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // // // // //     const marginalNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // // // // //     const marginalB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // // // // //     const marginalNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // // // // //     const total = marginalA + marginalNotA;

// // // // // //     setProbabilities(prev => ({
// // // // // //       ...prev,
// // // // // //       marginalA,
// // // // // //       marginalNotA,
// // // // // //       marginalB,
// // // // // //       marginalNotB
// // // // // //     }));

// // // // // //     return { marginalA, marginalNotA, marginalB, marginalNotB, total };
// // // // // //   };

// // // // // //   const generateRandomProbabilities = () => {
// // // // // //     let vals = Array(4).fill().map(() => Math.random());
// // // // // //     const sum = vals.reduce((a, b) => a + b, 0);
// // // // // //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// // // // // //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// // // // // //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// // // // // //     setProbabilities({
// // // // // //       ...INITIAL_STATE,
// // // // // //       aAndB: vals[0],
// // // // // //       aAndNotB: vals[1],
// // // // // //       notAAndB: vals[2],
// // // // // //       notAAndNotB: vals[3]
// // // // // //     });
// // // // // //   };

// // // // // //   const resetTable = () => setProbabilities(INITIAL_STATE);

// // // // // //   useEffect(() => {
// // // // // //     const sum = Object.values(probabilities)
// // // // // //       .filter((_, idx) => idx < 4)
// // // // // //       .reduce((acc, val) => acc + Number(val), 0);
// // // // // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // // // // //   }, [probabilities]);

// // // // // //   const handleChange = (key, value) => {
// // // // // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // // // // //     setProbabilities(prev => ({
// // // // // //       ...prev,
// // // // // //       [key]: numValue
// // // // // //     }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={styles.calculator}>
// // // // // //       <div style={styles.header}>
// // // // // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // // // // //         <div style={styles.buttons}>
// // // // // //           <button 
// // // // // //             onClick={generateRandomProbabilities} 
// // // // // //             style={{...styles.button, ...styles.randomBtn}}
// // // // // //           >
// // // // // //             Random
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             onClick={resetTable} 
// // // // // //             style={{...styles.button, ...styles.resetBtn}}
// // // // // //           >
// // // // // //             Reset
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {!isValid && (
// // // // // //         <div style={styles.error}>
// // // // // //           All probabilities must sum to 1
// // // // // //         </div>
// // // // // //       )}
      
// // // // // //       <table style={styles.table}>
// // // // // //         <thead>
// // // // // //           <tr>
// // // // // //             <th style={styles.th}></th>
// // // // // //             <th style={styles.th}><InlineMath math="A" /></th>
// // // // // //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// // // // // //             <th style={{...styles.th, ...styles.marginalCell}}>
// // // // // //               <InlineMath math="\text{Marginal Probability for B}" />
// // // // // //             </th>
// // // // // //           </tr>
// // // // // //         </thead>
// // // // // //         <tbody>
// // // // // //           <tr>
// // // // // //             <td style={styles.th}>
// // // // // //               <InlineMath math="B" />
// // // // // //             </td>
// // // // // //             <td style={styles.td}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(A\text{ cap }B)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.aAndB}
// // // // // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // // // // //                   style={styles.input}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //             <td style={styles.td}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(\text{overline}A\text{ cap }B)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.notAAndB}
// // // // // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // // // //                   style={styles.input}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(B)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.marginalB}
// // // // // //                   onChange={(e) => handleChange('marginalB', e.target.value)}
// // // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //           </tr>
// // // // // //           <tr>
// // // // // //             <td style={styles.th}>
// // // // // //               <InlineMath math="\text{overline}B" />
// // // // // //             </td>
// // // // // //             <td style={styles.td}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(A\text{ cap }\text{overline}B)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.aAndNotB}
// // // // // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // // // //                   style={styles.input}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //             <td style={styles.td}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(\text{overline}A\text{ cap }\text{overline}B)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.notAAndNotB}
// // // // // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // // // //                   style={styles.input}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(\text{overline}B)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.marginalNotB}
// // // // // //                   onChange={(e) => handleChange('marginalNotB', e.target.value)}
// // // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //           </tr>
// // // // // //           <tr>
// // // // // //             <td style={{...styles.th, ...styles.marginalCell}}>
// // // // // //               <InlineMath math="\text{Marginal Probability for A}" />
// // // // // //             </td>
// // // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(A)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.marginalA}
// // // // // //                   onChange={(e) => handleChange('marginalA', e.target.value)}
// // // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // // //               <div style={styles.cell}>
// // // // // //                 <InlineMath math="P(\\text{overline}A)" />
// // // // // //                 <input 
// // // // // //                   type="number"
// // // // // //                   min="0"
// // // // // //                   max="1"
// // // // // //                   step="0.001"
// // // // // //                   value={probabilities.marginalNotA}
// // // // // //                   onChange={(e) => handleChange('marginalNotA', e.target.value)}
// // // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </td>
// // // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // // //               <InlineMath math="\sum = 1" />
// // // // // //             </td>
// // // // // //           </tr>
// // // // // //         </tbody>
// // // // // //       </table>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default JointProbabilityTable;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import 'katex/dist/katex.min.css';
// // // // // import { InlineMath } from 'react-katex';

// // // // // const styles = {
// // // // //   calculator: {
// // // // //     maxWidth: '900px',
// // // // //     margin: '20px auto',
// // // // //     padding: '20px',
// // // // //     backgroundColor: '#fff',
// // // // //     borderRadius: '8px',
// // // // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// // // // //   },
// // // // //   header: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: '20px'
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '24px',
// // // // //     color: '#333'
// // // // //   },
// // // // //   buttons: {
// // // // //     display: 'flex',
// // // // //     gap: '10px'
// // // // //   },
// // // // //   button: {
// // // // //     padding: '8px 16px',
// // // // //     border: 'none',
// // // // //     borderRadius: '4px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '14px',
// // // // //     color: '#fff'
// // // // //   },
// // // // //   randomBtn: {
// // // // //     backgroundColor: '#4CAF50'
// // // // //   },
// // // // //   resetBtn: {
// // // // //     backgroundColor: '#2196F3'
// // // // //   },
// // // // //   error: {
// // // // //     padding: '10px',
// // // // //     backgroundColor: '#ffebee',
// // // // //     color: '#c62828',
// // // // //     borderRadius: '4px',
// // // // //     marginBottom: '20px'
// // // // //   },
// // // // //   table: {
// // // // //     width: '100%',
// // // // //     borderCollapse: 'collapse',
// // // // //     marginTop: '10px'
// // // // //   },
// // // // //   th: {
// // // // //     padding: '12px',
// // // // //     backgroundColor: '#f5f5f5',
// // // // //     border: '1px solid #ddd',
// // // // //     fontWeight: 'bold',
// // // // //     minWidth: '150px'
// // // // //   },
// // // // //   td: {
// // // // //     padding: '12px',
// // // // //     border: '1px solid #ddd',
// // // // //     textAlign: 'center'
// // // // //   },
// // // // //   cell: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     alignItems: 'center',
// // // // //     gap: '8px'
// // // // //   },
// // // // //   input: {
// // // // //     width: '100px',
// // // // //     padding: '8px',
// // // // //     border: '1px solid #ddd',
// // // // //     borderRadius: '4px',
// // // // //     textAlign: 'center'
// // // // //   },
// // // // //   marginalCell: {
// // // // //     backgroundColor: '#e3f2fd',
// // // // //   },
// // // // //   marginalInput: {
// // // // //     backgroundColor: '#f8f9fa',
// // // // //     border: '2px solid #90caf9'
// // // // //   }
// // // // // };

// // // // // const INITIAL_STATE = {
// // // // //   aAndB: 0.25,
// // // // //   aAndNotB: 0.25,
// // // // //   notAAndB: 0.15,
// // // // //   notAAndNotB: 0.35,
// // // // //   marginalA: 0.50,
// // // // //   marginalNotA: 0.50,
// // // // //   marginalB: 0.40,
// // // // //   marginalNotB: 0.60,
// // // // // };

// // // // // const JointProbabilityTable = () => {
// // // // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // // // //   const [isValid, setIsValid] = useState(true);

// // // // //   const calculateMarginals = () => {
// // // // //     const marginalA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // // // //     const marginalNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // // // //     const marginalB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // // // //     const marginalNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // // // //     const total = marginalA + marginalNotA;

// // // // //     setProbabilities(prev => ({
// // // // //       ...prev,
// // // // //       marginalA,
// // // // //       marginalNotA,
// // // // //       marginalB,
// // // // //       marginalNotB
// // // // //     }));

// // // // //     return { marginalA, marginalNotA, marginalB, marginalNotB, total };
// // // // //   };

// // // // //   const generateRandomProbabilities = () => {
// // // // //     let vals = Array(4).fill().map(() => Math.random());
// // // // //     const sum = vals.reduce((a, b) => a + b, 0);
// // // // //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// // // // //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// // // // //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// // // // //     setProbabilities({
// // // // //       ...INITIAL_STATE,
// // // // //       aAndB: vals[0],
// // // // //       aAndNotB: vals[1],
// // // // //       notAAndB: vals[2],
// // // // //       notAAndNotB: vals[3]
// // // // //     });
// // // // //   };

// // // // //   const resetTable = () => setProbabilities(INITIAL_STATE);

// // // // //   useEffect(() => {
// // // // //     const sum = Object.values(probabilities)
// // // // //       .filter((_, idx) => idx < 4)
// // // // //       .reduce((acc, val) => acc + Number(val), 0);
// // // // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // // // //   }, [probabilities]);

// // // // //   const handleChange = (key, value) => {
// // // // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // // // //     setProbabilities(prev => ({
// // // // //       ...prev,
// // // // //       [key]: numValue
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.calculator}>
// // // // //       <div style={styles.header}>
// // // // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // // // //         <div style={styles.buttons}>
// // // // //           <button 
// // // // //             onClick={generateRandomProbabilities} 
// // // // //             style={{...styles.button, ...styles.randomBtn}}
// // // // //           >
// // // // //             Random
// // // // //           </button>
// // // // //           <button 
// // // // //             onClick={resetTable} 
// // // // //             style={{...styles.button, ...styles.resetBtn}}
// // // // //           >
// // // // //             Reset
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {!isValid && (
// // // // //         <div style={styles.error}>
// // // // //           All probabilities must sum to 1
// // // // //         </div>
// // // // //       )}
      
// // // // //       <table style={styles.table}>
// // // // //         <thead>
// // // // //           <tr>
// // // // //             <th style={styles.th}></th>
// // // // //             <th style={styles.th}><InlineMath math="A" /></th>
// // // // //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// // // // //             <th style={{...styles.th, ...styles.marginalCell}}>
// // // // //               <InlineMath math="\text{Marginal Probability for }B" />
// // // // //             </th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           <tr>
// // // // //             <td style={styles.th}>
// // // // //               <InlineMath math="B" />
// // // // //             </td>
// // // // //             <td style={styles.td}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(A \cap B)" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.aAndB}
// // // // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // // // //                   style={styles.input}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //             <td style={styles.td}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(\overline{A} \cap B)" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.notAAndB}
// // // // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // // //                   style={styles.input}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(B)" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.marginalB}
// // // // //                   onChange={(e) => handleChange('marginalB', e.target.value)}
// // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //           </tr>
// // // // //           <tr>
// // // // //             <td style={styles.th}>
// // // // //               <InlineMath math="\overline{B}" />
// // // // //             </td>
// // // // //             <td style={styles.td}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(A \cap \overline{B})" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.aAndNotB}
// // // // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // // //                   style={styles.input}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //             <td style={styles.td}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.notAAndNotB}
// // // // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // // //                   style={styles.input}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(\overline{B})" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.marginalNotB}
// // // // //                   onChange={(e) => handleChange('marginalNotB', e.target.value)}
// // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //           </tr>
// // // // //           <tr>
// // // // //             <td style={{...styles.th, ...styles.marginalCell}}>
// // // // //               <InlineMath math="\text{Marginal Probability for }A" />
// // // // //             </td>
// // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(A)" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.marginalA}
// // // // //                   onChange={(e) => handleChange('marginalA', e.target.value)}
// // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // //               <div style={styles.cell}>
// // // // //                 <InlineMath math="P(\overline{A})" />
// // // // //                 <input 
// // // // //                   type="number"
// // // // //                   min="0"
// // // // //                   max="1"
// // // // //                   step="0.001"
// // // // //                   value={probabilities.marginalNotA}
// // // // //                   onChange={(e) => handleChange('marginalNotA', e.target.value)}
// // // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // // //                 />
// // // // //               </div>
// // // // //             </td>
// // // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // // //               <InlineMath math="\sum = 1" />
// // // // //             </td>
// // // // //           </tr>
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default JointProbabilityTable;

// // // // import React, { useState, useEffect } from 'react';
// // // // import 'katex/dist/katex.min.css';
// // // // import { InlineMath } from 'react-katex';

// // // // const styles = {
// // // //   calculator: {
// // // //     maxWidth: '900px',
// // // //     margin: '20px auto',
// // // //     padding: '20px',
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: '8px',
// // // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// // // //   },
// // // //   header: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: '20px'
// // // //   },
// // // //   title: {
// // // //     fontSize: '24px',
// // // //     color: '#333'
// // // //   },
// // // //   buttons: {
// // // //     display: 'flex',
// // // //     gap: '10px'
// // // //   },
// // // //   button: {
// // // //     padding: '8px 16px',
// // // //     border: 'none',
// // // //     borderRadius: '4px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '14px',
// // // //     color: '#fff'
// // // //   },
// // // //   randomBtn: {
// // // //     backgroundColor: '#4CAF50'
// // // //   },
// // // //   resetBtn: {
// // // //     backgroundColor: '#2196F3'
// // // //   },
// // // //   error: {
// // // //     padding: '10px',
// // // //     backgroundColor: '#ffebee',
// // // //     color: '#c62828',
// // // //     borderRadius: '4px',
// // // //     marginBottom: '20px'
// // // //   },
// // // //   table: {
// // // //     width: '100%',
// // // //     borderCollapse: 'collapse',
// // // //     marginTop: '10px'
// // // //   },
// // // //   th: {
// // // //     padding: '12px',
// // // //     backgroundColor: '#f5f5f5',
// // // //     border: '1px solid #ddd',
// // // //     fontWeight: 'bold',
// // // //     minWidth: '150px'
// // // //   },
// // // //   td: {
// // // //     padding: '12px',
// // // //     border: '1px solid #ddd',
// // // //     textAlign: 'center'
// // // //   },
// // // //   cell: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'center',
// // // //     gap: '8px'
// // // //   },
// // // //   input: {
// // // //     width: '100px',
// // // //     padding: '8px',
// // // //     border: '1px solid #ddd',
// // // //     borderRadius: '4px',
// // // //     textAlign: 'center'
// // // //   },
// // // //   marginalCell: {
// // // //     backgroundColor: '#e3f2fd',
// // // //   },
// // // //   marginalInput: {
// // // //     backgroundColor: '#f8f9fa',
// // // //     border: '2px solid #90caf9'
// // // //   }
// // // // };

// // // // const INITIAL_STATE = {
// // // //   aAndB: 0.25,
// // // //   aAndNotB: 0.25,
// // // //   notAAndB: 0.15,
// // // //   notAAndNotB: 0.35
// // // // };

// // // // const JointProbabilityTable = () => {
// // // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // // //   const [isValid, setIsValid] = useState(true);
// // // //   const [marginals, setMarginals] = useState({
// // // //     pA: 0.5,
// // // //     pNotA: 0.5,
// // // //     pB: 0.4,
// // // //     pNotB: 0.6
// // // //   });

// // // //   useEffect(() => {
// // // //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // // //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // // //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // // //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
    
// // // //     setMarginals({ pA, pNotA, pB, pNotB });

// // // //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// // // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // // //   }, [probabilities]);

// // // //   const generateRandomProbabilities = () => {
// // // //     let vals = Array(4).fill().map(() => Math.random());
// // // //     const sum = vals.reduce((a, b) => a + b, 0);
// // // //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// // // //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// // // //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// // // //     setProbabilities({
// // // //       aAndB: vals[0],
// // // //       aAndNotB: vals[1],
// // // //       notAAndB: vals[2],
// // // //       notAAndNotB: vals[3]
// // // //     });
// // // //   };

// // // //   const resetTable = () => setProbabilities(INITIAL_STATE);

// // // //   const handleChange = (key, value) => {
// // // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // // //     setProbabilities(prev => ({
// // // //       ...prev,
// // // //       [key]: numValue
// // // //     }));
// // // //   };

// // // //   return (
// // // //     <div style={styles.calculator}>
// // // //       <div style={styles.header}>
// // // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // // //         <div style={styles.buttons}>
// // // //           <button 
// // // //             onClick={generateRandomProbabilities} 
// // // //             style={{...styles.button, ...styles.randomBtn}}
// // // //           >
// // // //             Random
// // // //           </button>
// // // //           <button 
// // // //             onClick={resetTable} 
// // // //             style={{...styles.button, ...styles.resetBtn}}
// // // //           >
// // // //             Reset
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {!isValid && (
// // // //         <div style={styles.error}>
// // // //           All probabilities must sum to 1
// // // //         </div>
// // // //       )}
      
// // // //       <table style={styles.table}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th style={styles.th}></th>
// // // //             <th style={styles.th}><InlineMath math="A" /></th>
// // // //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// // // //             <th style={{...styles.th, ...styles.marginalCell}}>
// // // //               <InlineMath math="\text{Marginal Probability for }B" />
// // // //             </th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           <tr>
// // // //             <td style={styles.th}>
// // // //               <InlineMath math="B" />
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(A \cap B)" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.aAndB}
// // // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(\overline{A} \cap B)" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.notAAndB}
// // // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math={`P(B)=${marginals.pB.toFixed(3)}`} />
// // // //               </div>
// // // //             </td>
// // // //           </tr>
// // // //           <tr>
// // // //             <td style={styles.th}>
// // // //               <InlineMath math="\overline{B}" />
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(A \cap \overline{B})" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.aAndNotB}
// // // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.notAAndNotB}
// // // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math={`P(\overline{B})=${marginals.pNotB.toFixed(3)}`} />
// // // //               </div>
// // // //             </td>
// // // //           </tr>
// // // //           <tr>
// // // //             <td style={{...styles.th, ...styles.marginalCell}}>
// // // //               <InlineMath math="\text{Marginal Probability for }A" />
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math={`P(A)=${marginals.pA.toFixed(3)}`} />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math={`P(\overline{A})=${marginals.pNotA.toFixed(3)}`} />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // //               <InlineMath math="\sum = 1" />
// // // //             </td>
// // // //           </tr>
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default JointProbabilityTable;

// // // import React, { useState, useEffect } from 'react';
// // // import 'katex/dist/katex.min.css';
// // // import { InlineMath } from 'react-katex';

// // // const styles = {
// // //   calculator: {
// // //     maxWidth: '900px',
// // //     margin: '20px auto',
// // //     padding: '20px',
// // //     backgroundColor: '#fff',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// // //   },
// // //   header: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: '20px'
// // //   },
// // //   title: {
// // //     fontSize: '24px',
// // //     color: '#333'
// // //   },
// // //   buttons: {
// // //     display: 'flex',
// // //     gap: '10px'
// // //   },
// // //   button: {
// // //     padding: '8px 16px',
// // //     border: 'none',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#fff'
// // //   },
// // //   randomBtn: {
// // //     backgroundColor: '#4CAF50'
// // //   },
// // //   resetBtn: {
// // //     backgroundColor: '#2196F3'
// // //   },
// // //   error: {
// // //     padding: '10px',
// // //     backgroundColor: '#ffebee',
// // //     color: '#c62828',
// // //     borderRadius: '4px',
// // //     marginBottom: '20px'
// // //   },
// // //   table: {
// // //     width: '100%',
// // //     borderCollapse: 'collapse',
// // //     marginTop: '10px'
// // //   },
// // //   th: {
// // //     padding: '12px',
// // //     backgroundColor: '#f5f5f5',
// // //     border: '1px solid #ddd',
// // //     fontWeight: 'bold',
// // //     minWidth: '100px'
// // //   },
// // //   td: {
// // //     padding: '12px',
// // //     border: '1px solid #ddd',
// // //     textAlign: 'center'
// // //   },
// // //   cell: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     gap: '8px'
// // //   },
// // //   input: {
// // //     width: '100px',
// // //     padding: '8px',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     textAlign: 'center'
// // //   },
// // //   marginalCell: {
// // //     backgroundColor: '#e3f2fd',
// // //   },
// // //   marginalInput: {
// // //     backgroundColor: '#f8f9fa',
// // //     border: '2px solid #90caf9'
// // //   }
// // // };

// // // const INITIAL_STATE = {
// // //   aAndB: 0.25,
// // //   aAndNotB: 0.25,
// // //   notAAndB: 0.15,
// // //   notAAndNotB: 0.35
// // // };

// // // const JointProbabilityTable = () => {
// // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // //   const [isValid, setIsValid] = useState(true);

// // //   const calculateMarginals = () => {
// // //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // //     const total = pA + pNotA;
// // //     return { pA, pNotA, pB, pNotB, total };
// // //   };

// // //   const generateRandomProbabilities = () => {
// // //     let vals = Array(4).fill().map(() => Math.random());
// // //     const sum = vals.reduce((a, b) => a + b, 0);
// // //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// // //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// // //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// // //     setProbabilities({
// // //       aAndB: vals[0],
// // //       aAndNotB: vals[1],
// // //       notAAndB: vals[2],
// // //       notAAndNotB: vals[3]
// // //     });
// // //   };

// // //   const resetTable = () => setProbabilities(INITIAL_STATE);

// // //   useEffect(() => {
// // //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // //   }, [probabilities]);

// // //   const handleChange = (key, value) => {
// // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // //     setProbabilities(prev => ({
// // //       ...prev,
// // //       [key]: numValue
// // //     }));
// // //   };

// // //   const marginals = calculateMarginals();

// // //   return (
// // //     <div style={styles.calculator}>
// // //       <div style={styles.header}>
// // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // //         <div style={styles.buttons}>
// // //           <button 
// // //             onClick={generateRandomProbabilities} 
// // //             style={{...styles.button, ...styles.randomBtn}}
// // //           >
// // //             Random
// // //           </button>
// // //           <button 
// // //             onClick={resetTable} 
// // //             style={{...styles.button, ...styles.resetBtn}}
// // //           >
// // //             Reset
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {!isValid && (
// // //         <div style={styles.error}>
// // //           All probabilities must sum to 1
// // //         </div>
// // //       )}
      
// // //       <table style={styles.table}>
// // //         <thead>
// // //           <tr>
// // //             <th style={styles.th}></th>
// // //             <th style={styles.th}><InlineMath math="A" /></th>
// // //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// // //             <th style={{...styles.th, ...styles.marginalCell}}>
// // //               <InlineMath math="\text{Marginal Probability for }B" />
// // //             </th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           <tr>
// // //             <td style={styles.th}>
// // //               <InlineMath math="B" />
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(A \cap B)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.aAndB}
// // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{A} \cap B)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.notAAndB}
// // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(B)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pB.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //           </tr>
// // //           <tr>
// // //             <td style={styles.th}>
// // //               <InlineMath math="\overline{B}" />
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(A \cap \overline{B})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.aAndNotB}
// // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.notAAndNotB}
// // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{B})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pNotB.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //           </tr>
// // //           <tr>
// // //             <td style={{...styles.th, ...styles.marginalCell}}>
// // //               <InlineMath math="\text{Marginal Probability for }A" />
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(A)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pA.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{A})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pNotA.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // //               <InlineMath math="\sum = 1" />
// // //             </td>
// // //           </tr>
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default JointProbabilityTable;

// // // import React, { useState, useEffect } from 'react';
// // // import 'katex/dist/katex.min.css';
// // // import { InlineMath } from 'react-katex';

// // // const styles = {
// // //   calculator: {
// // //     maxWidth: '900px',
// // //     margin: '20px auto',
// // //     padding: '20px',
// // //     backgroundColor: '#fff',
// // //     borderRadius: '8px',
// // //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// // //   },
// // //   header: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: '20px'
// // //   },
// // //   title: {
// // //     fontSize: '24px',
// // //     color: '#333'
// // //   },
// // //   buttons: {
// // //     display: 'flex',
// // //     gap: '10px'
// // //   },
// // //   button: {
// // //     padding: '8px 16px',
// // //     border: 'none',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#fff'
// // //   },
// // //   randomBtn: {
// // //     backgroundColor: '#4CAF50'
// // //   },
// // //   resetBtn: {
// // //     backgroundColor: '#2196F3'
// // //   },
// // //   error: {
// // //     padding: '10px',
// // //     backgroundColor: '#ffebee',
// // //     color: '#c62828',
// // //     borderRadius: '4px',
// // //     marginBottom: '20px'
// // //   },
// // //   table: {
// // //     width: '100%',
// // //     borderCollapse: 'collapse',
// // //     marginTop: '10px'
// // //   },
// // //   th: {
// // //     padding: '12px',
// // //     backgroundColor: '#f5f5f5',
// // //     border: '1px solid #ddd',
// // //     fontWeight: 'bold',
// // //     minWidth: '50px'
// // //   },
// // //   td: {
// // //     padding: '12px',
// // //     border: '1px solid #ddd',
// // //     textAlign: 'center'
// // //   },
// // //   cell: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     gap: '8px'
// // //   },
// // //   input: {
// // //     width: '100px',
// // //     padding: '8px',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     textAlign: 'center'
// // //   },
// // //   marginalCell: {
// // //     backgroundColor: '#e3f2fd',
// // //     fontWeight:'bolder',
// // //     width:'50px'
// // //   },
// // //   marginalInput: {
// // //     backgroundColor: '#f8f9fa',
// // //     border: '2px solid #90caf9'
// // //   },
// // //   marginalHeader: {
// // //     fontSize: '14px',
// // //     lineHeight: '1.2',
// // //     wordWrap: 'break-word',
// // //     maxWidth: '100px'
// // //   },
// // //   bottomRow: {
// // //     padding: '8px'
// // //   }
// // // };

// // // const INITIAL_STATE = {
// // //   aAndB: 0.25,
// // //   aAndNotB: 0.25,
// // //   notAAndB: 0.15,
// // //   notAAndNotB: 0.35
// // // };

// // // const JointProbabilityTable = () => {
// // //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// // //   const [isValid, setIsValid] = useState(true);

// // //   const calculateMarginals = () => {
// // //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// // //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// // //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// // //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// // //     const total = pA + pNotA;
// // //     return { pA, pNotA, pB, pNotB, total };
// // //   };

// // //   const generateRandomProbabilities = () => {
// // //     let vals = Array(4).fill().map(() => Math.random());
// // //     const sum = vals.reduce((a, b) => a + b, 0);
// // //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// // //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// // //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// // //     setProbabilities({
// // //       aAndB: vals[0],
// // //       aAndNotB: vals[1],
// // //       notAAndB: vals[2],
// // //       notAAndNotB: vals[3]
// // //     });
// // //   };

// // //   const resetTable = () => setProbabilities(INITIAL_STATE);

// // //   useEffect(() => {
// // //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// // //     setIsValid(Math.abs(sum - 1) < 0.0001);
// // //   }, [probabilities]);

// // //   const handleChange = (key, value) => {
// // //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// // //     setProbabilities(prev => ({
// // //       ...prev,
// // //       [key]: numValue
// // //     }));
// // //   };

// // //   const marginals = calculateMarginals();


// // //   return (
// // //     <div style={styles.calculator}>
// // //       <div style={styles.header}>
// // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // //         <div style={styles.buttons}>
// // //           <button 
// // //             onClick={generateRandomProbabilities} 
// // //             style={{...styles.button, ...styles.randomBtn}}
// // //           >
// // //             Random
// // //           </button>
// // //           <button 
// // //             onClick={resetTable} 
// // //             style={{...styles.button, ...styles.resetBtn}}
// // //           >
// // //             Reset
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {!isValid && (
// // //         <div style={styles.error}>
// // //           All probabilities must sum to 1
// // //         </div>
// // //       )}
      
// // //       <table style={styles.table}>
// // //         <thead>
// // //           <tr>
// // //             <th style={{...styles.th, width:'50px'}}></th>
// // //             <th style={styles.th}><InlineMath math="A" /></th>
// // //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// // //             <th style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader}}>
// // //               <InlineMath math="\text{Marginal }B" />
// // //             </th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           <tr>
// // //             <td style={{...styles.th, width:'50px'}}>
// // //               <InlineMath math="B" />
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(A \cap B)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.aAndB}
// // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{A} \cap B)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.notAAndB}
// // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(B)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pB.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //           </tr>
// // //           <tr>
// // //             <td style={{...styles.th, width:'50px'}}>
// // //               <InlineMath math="\overline{B}" />
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(A \cap \overline{B})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.aAndNotB}
// // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={styles.td}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={probabilities.notAAndNotB}
// // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // //                   style={styles.input}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{B})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pNotB.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //           </tr>
// // //           <tr>
// // //             <td style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader, ...styles.bottomRow, width:'50px'}}>
// // //               <InlineMath math="\text{Marginal }A" />
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(A)" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pA.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// // //               <div style={styles.cell}>
// // //                 <InlineMath math="P(\overline{A})" />
// // //                 <input 
// // //                   type="number"
// // //                   min="0"
// // //                   max="1"
// // //                   step="0.001"
// // //                   value={marginals.pNotA.toFixed(3)}
// // //                   readOnly
// // //                   style={{...styles.input, ...styles.marginalInput}}
// // //                 />
// // //               </div>
// // //             </td>
// // //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// // //               <InlineMath math="\sum = 1" />
// // //             </td>
// // //           </tr>
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );

// // // //   return (
// // // //     <div style={styles.calculator}>
// // // //       <div style={styles.header}>
// // // //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// // // //         <div style={styles.buttons}>
// // // //           <button 
// // // //             onClick={generateRandomProbabilities} 
// // // //             style={{...styles.button, ...styles.randomBtn}}
// // // //           >
// // // //             Random
// // // //           </button>
// // // //           <button 
// // // //             onClick={resetTable} 
// // // //             style={{...styles.button, ...styles.resetBtn}}
// // // //           >
// // // //             Reset
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {!isValid && (
// // // //         <div style={styles.error}>
// // // //           All probabilities must sum to 1
// // // //         </div>
// // // //       )}
      
// // // //       <table style={styles.table}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th style={{...styles.th,width:'50px'}}></th>
// // // //             <th style={styles.th}><InlineMath math="A" /></th>
// // // //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// // // //             <th style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader}}>
// // // //               <InlineMath math="\text{Marginal }B" />
// // // //             </th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           <tr>
// // // //             <td style={{...styles.th,width:'50px'}}>
// // // //               <InlineMath math="B" />
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(A \cap B)" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.aAndB}
// // // //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(\overline{A} \cap B)" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.notAAndB}
// // // //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(B)" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={marginals.pB.toFixed(3)}
// // // //                   readOnly
// // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //           </tr>
// // // //           <tr>
// // // //             <td style={styles.th}>
// // // //               <InlineMath math="\overline{B}" />
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(A \cap \overline{B})" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.aAndNotB}
// // // //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={styles.td}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={probabilities.notAAndNotB}
// // // //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// // // //                   style={styles.input}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(\overline{B})" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={marginals.pNotB.toFixed(3)}
// // // //                   readOnly
// // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //           </tr>
// // // //           <tr>
// // // //             <td style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader, ...styles.bottomRow}}>
// // // //               <InlineMath math="\text{Marginal }A" />
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(A)" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={marginals.pA.toFixed(3)}
// // // //                   readOnly
// // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// // // //               <div style={styles.cell}>
// // // //                 <InlineMath math="P(\overline{A})" />
// // // //                 <input 
// // // //                   type="number"
// // // //                   min="0"
// // // //                   max="1"
// // // //                   step="0.001"
// // // //                   value={marginals.pNotA.toFixed(3)}
// // // //                   readOnly
// // // //                   style={{...styles.input, ...styles.marginalInput}}
// // // //                 />
// // // //               </div>
// // // //             </td>
// // // //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// // // //               <InlineMath math="\sum = 1" />
// // // //             </td>
// // // //           </tr>
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // };

// // // export default JointProbabilityTable;

// // import React, { useState, useEffect } from 'react';
// // import 'katex/dist/katex.min.css';
// // import { InlineMath } from 'react-katex';

// // const styles = {
// //   calculator: {
// //     maxWidth: '900px',
// //     margin: '20px auto',
// //     padding: '20px',
// //     backgroundColor: '#fff',
// //     borderRadius: '8px',
// //     boxShadow: '0 0 10px rgba(0,0,0,0.1)'
// //   },
// //   header: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: '20px'
// //   },
// //   title: {
// //     fontSize: '24px',
// //     color: '#333'
// //   },
// //   buttons: {
// //     display: 'flex',
// //     gap: '10px'
// //   },
// //   button: {
// //     padding: '8px 16px',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     color: '#fff'
// //   },
// //   randomBtn: {
// //     backgroundColor: '#4CAF50'
// //   },
// //   resetBtn: {
// //     backgroundColor: '#2196F3'
// //   },
// //   error: {
// //     padding: '10px',
// //     backgroundColor: '#ffebee',
// //     color: '#c62828',
// //     borderRadius: '4px',
// //     marginBottom: '20px'
// //   },
// //   table: {
// //     width: '100%',
// //     borderCollapse: 'collapse',
// //     marginTop: '10px'
// //   },
// //   th: {
// //     padding: '12px',
// //     backgroundColor: '#f5f5f5',
// //     border: '1px solid #ddd',
// //     fontWeight: 'bold',
// //     minWidth: '60px'  // Base minimum width for all header cells
// //   },
// //   firstColumn: {
// //     width: '60px',    // Width for first column
// //     minWidth: '60px'  // Minimum width for first column
// //   },
// //   td: {
// //     padding: '12px',
// //     border: '1px solid #ddd',
// //     textAlign: 'center'
// //   },
// //   cell: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     gap: '8px'
// //   },
// //   input: {
// //     width: '100px',
// //     padding: '8px',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     textAlign: 'center'
// //   },
// //   marginalCell: {
// //     backgroundColor: '#e3f2fd',
// //     fontWeight: 'bolder'
// //   },
// //   marginalInput: {
// //     backgroundColor: '#f8f9fa',
// //     border: '2px solid #90caf9'
// //   },
// //   marginalHeader: {
// //     fontSize: '14px',
// //     lineHeight: '1.2',
// //     wordWrap: 'break-word'
// //   },
// //   bottomRow: {
// //     padding: '8px'
// //   }
// // };

// // const INITIAL_STATE = {
// //   aAndB: 0.25,
// //   aAndNotB: 0.25,
// //   notAAndB: 0.15,
// //   notAAndNotB: 0.35
// // };

// // const JointProbabilityTable = () => {
// //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// //   const [isValid, setIsValid] = useState(true);

// //   const calculateMarginals = () => {
// //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// //     const total = pA + pNotA;
// //     return { pA, pNotA, pB, pNotB, total };
// //   };

// //   const generateRandomProbabilities = () => {
// //     let vals = Array(4).fill().map(() => Math.random());
// //     const sum = vals.reduce((a, b) => a + b, 0);
// //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// //     setProbabilities({
// //       aAndB: vals[0],
// //       aAndNotB: vals[1],
// //       notAAndB: vals[2],
// //       notAAndNotB: vals[3]
// //     });
// //   };

// //   const resetTable = () => setProbabilities(INITIAL_STATE);

// //   useEffect(() => {
// //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// //     setIsValid(Math.abs(sum - 1) < 0.0001);
// //   }, [probabilities]);

// //   const handleChange = (key, value) => {
// //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// //     setProbabilities(prev => ({
// //       ...prev,
// //       [key]: numValue
// //     }));
// //   };

// //   const marginals = calculateMarginals();

// //   return (
// //     <div style={styles.calculator}>
// //       <div style={styles.header}>
// //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// //         <div style={styles.buttons}>
// //           <button 
// //             onClick={generateRandomProbabilities} 
// //             style={{...styles.button, ...styles.randomBtn}}
// //           >
// //             Random
// //           </button>
// //           <button 
// //             onClick={resetTable} 
// //             style={{...styles.button, ...styles.resetBtn}}
// //           >
// //             Reset
// //           </button>
// //         </div>
// //       </div>

// //       {!isValid && (
// //         <div style={styles.error}>
// //           All probabilities must sum to 1
// //         </div>
// //       )}
      
// //       <table style={styles.table}>
// //         <thead>
// //           <tr>
// //             <th style={{...styles.th, ...styles.firstColumn}}></th>
// //             <th style={styles.th}><InlineMath math="A" /></th>
// //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// //             <th style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader}}>
// //               <InlineMath math="\textbf{Marginal }" />
// //             </th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           <tr>
// //             <td style={{...styles.th, ...styles.firstColumn}}>
// //               <InlineMath math="B" />
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(A \cap B)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.aAndB}
// //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{A} \cap B)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.notAAndB}
// //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(B)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pB.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //           </tr>
// //           <tr>
// //             <td style={{...styles.th, ...styles.firstColumn}}>
// //               <InlineMath math="\overline{B}" />
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(A \cap \overline{B})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.aAndNotB}
// //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.notAAndNotB}
// //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{B})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pNotB.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //           </tr>
// //           <tr>
// //             <td style={{...styles.th, ...styles.firstColumn, ...styles.marginalCell, ...styles.marginalHeader, ...styles.bottomRow,fontWeight:'900'}}>
// //               <InlineMath math="\textbf{Marginal }" style={{fontWeight:'900'}} />
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(A)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pA.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{A})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pNotA.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// //               <InlineMath math="\sum = 1" />
// //             </td>
// //           </tr>
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default JointProbabilityTable;
// // import React, { useState, useEffect } from 'react';
// // import 'katex/dist/katex.min.css';
// // import { InlineMath } from 'react-katex';

// // const styles = {
// //   calculator: {
// //     maxWidth: '700px',
// //     margin: '15px auto',
// //     padding: '15px',
// //     backgroundColor: '#fff',
// //     borderRadius: '6px',
// //     boxShadow: '0 0 8px rgba(0,0,0,0.1)'
// //   },
// //   header: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: '15px'
// //   },
// //   title: {
// //     fontSize: '20px',
// //     color: '#333'
// //   },
// //   buttons: {
// //     display: 'flex',
// //     gap: '8px'
// //   },
// //   button: {
// //     padding: '6px 12px',
// //     border: 'none',
// //     borderRadius: '3px',
// //     cursor: 'pointer',
// //     fontSize: '12px',
// //     color: '#fff'
// //   },
// //   randomBtn: {
// //     backgroundColor: '#4CAF50'
// //   },
// //   resetBtn: {
// //     backgroundColor: '#2196F3'
// //   },
// // //   error: {
// // //     padding: '8px',
// // //     backgroundColor: '#ffebee',
// // //     color: '#c62828',
// // //     borderRadius: '3px',
// // //     marginBottom: '15px'
// // //   },


// // messageContainer: {
// //     height: '37px',
// //     marginBottom: '10px',
// //     padding: '8px',
// //     borderRadius: '3px',
// //   },
// //   hint: {
// //     backgroundColor: '#e3f2fd',  // Light blue like marginals
// //     color: '#1976d2'
// //   },
// //   error: {
// //     backgroundColor: '#ffebee',
// //     color: '#c62828'
// //   },
// //   table: {
// //     width: '100%',
// //     borderCollapse: 'collapse',
// //     marginTop: '8px'
// //   },
// //   th: {
// //     padding: '8px',
// //     backgroundColor: '#f5f5f5',
// //     border: '1px solid #ddd',
// //     fontWeight: 'bold',
// //     minWidth: '45px'
// //   },
// //   firstColumn: {
// //     width: '45px',
// //     minWidth: '45px'
// //   },
// //   td: {
// //     padding: '8px',
// //     border: '1px solid #ddd',
// //     textAlign: 'center'
// //   },
// //   cell: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     gap: '6px'
// //   },
// //   input: {
// //     width: '75px',
// //     padding: '6px',
// //     border: '1px solid #ddd',
// //     borderRadius: '3px',
// //     textAlign: 'center',
// //     fontSize: '12px'
// //   },
// //   marginalCell: {
// //     backgroundColor: '#b0ddfb',
// //     fontWeight: 'bolder',
   
// //   },
// //   marginalInput: {
// //     backgroundColor: '#f8f9fa',
// //     border: '2px solid #90caf9'
// //   },
// //   marginalHeader: {
// //     fontSize: '12px',
// //     lineHeight: '1.2',
// //     wordWrap: 'break-word'
// //   },
// //   bottomRow: {
// //     padding: '6px'
// //   }
// // };

// // const INITIAL_STATE = {
// //   aAndB: 0.25,
// //   aAndNotB: 0.25,
// //   notAAndB: 0.15,
// //   notAAndNotB: 0.35
// // };

// // const JointProbabilityTable = () => {
// //   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
// //   const [isValid, setIsValid] = useState(true);

// //   const calculateMarginals = () => {
// //     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
// //     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
// //     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
// //     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
// //     const total = pA + pNotA;
// //     return { pA, pNotA, pB, pNotB, total };
// //   };

// //   const generateRandomProbabilities = () => {
// //     let vals = Array(4).fill().map(() => Math.random());
// //     const sum = vals.reduce((a, b) => a + b, 0);
// //     vals = vals.map(v => Number((v / sum).toFixed(3)));
// //     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
// //     vals[3] = Number((1 - currentSum).toFixed(3));
    
// //     setProbabilities({
// //       aAndB: vals[0],
// //       aAndNotB: vals[1],
// //       notAAndB: vals[2],
// //       notAAndNotB: vals[3]
// //     });
// //   };

// //   const resetTable = () => setProbabilities(INITIAL_STATE);

// //   useEffect(() => {
// //     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
// //     setIsValid(Math.abs(sum - 1) < 0.0001);
// //   }, [probabilities]);

// //   const handleChange = (key, value) => {
// //     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
// //     setProbabilities(prev => ({
// //       ...prev,
// //       [key]: numValue
// //     }));
// //   };

// //   const marginals = calculateMarginals();

// //   return (
// //     <div style={styles.calculator}>
// //       <div style={styles.header}>
// //         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
// //         <div style={styles.buttons}>
// //           <button 
// //             onClick={generateRandomProbabilities} 
// //             style={{...styles.button, ...styles.randomBtn}}
// //           >
// //             Random
// //           </button>
// //           <button 
// //             onClick={resetTable} 
// //             style={{...styles.button, ...styles.resetBtn}}
// //           >
// //             Reset
// //           </button>
// //         </div>
// //       </div>

// //       {/* {!isValid && (
// //         <div style={styles.error}>
// //           All probabilities must sum to 1
// //         </div>
// //       )} */}


// // {/* <div style={styles.errorContainer}>
// //   {!isValid && (
// //     <div style={styles.error}>
// //       All probabilities must sum to 1
// //     </div>
// //   )}
// // </div> */}

// // <div style={styles.messageContainer}>
// //   {isValid ? (
// //     <div style={{...styles.messageContainer, ...styles.hint}}>
// //       Tip: All probabilities in a joint distribution must sum to 1
// //     </div>
// //   ) : (
// //     <div style={{...styles.messageContainer, ...styles.error}}>
// //       All probabilities must sum to 1
// //     </div>
// //   )}
// // </div>
      
// //       <table style={styles.table}>
// //         <thead>
// //           <tr>
// //             <th style={{...styles.th, ...styles.firstColumn}}></th>
// //             <th style={styles.th}><InlineMath math="A" /></th>
// //             <th style={styles.th}><InlineMath math="\overline{A}" /></th>
// //             <th style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader}}>
// //               <InlineMath math="\textbf{Marginal }B" />
// //             </th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           <tr>
// //             <td style={{...styles.th, ...styles.firstColumn}}>
// //               <InlineMath math="B" />
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(A \cap B)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.aAndB}
// //                   onChange={(e) => handleChange('aAndB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{A} \cap B)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.notAAndB}
// //                   onChange={(e) => handleChange('notAAndB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(B)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pB.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //           </tr>
// //           <tr>
// //             <td style={{...styles.th, ...styles.firstColumn}}>
// //               <InlineMath math="\overline{B}" />
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(A \cap \overline{B})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.aAndNotB}
// //                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={styles.td}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{A} \cap \overline{B})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={probabilities.notAAndNotB}
// //                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
// //                   style={styles.input}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{B})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pNotB.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //           </tr>
// //           <tr>
// //             <td style={{...styles.th, ...styles.firstColumn, ...styles.marginalCell, ...styles.marginalHeader, ...styles.bottomRow}}>
// //               <InlineMath math="\textbf{Marginal }A" />
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(A)" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pA.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// //               <div style={styles.cell}>
// //                 <InlineMath math="P(\overline{A})" />
// //                 <input 
// //                   type="number"
// //                   min="0"
// //                   max="1"
// //                   step="0.001"
// //                   value={marginals.pNotA.toFixed(3)}
// //                   readOnly
// //                   style={{...styles.input, ...styles.marginalInput}}
// //                 />
// //               </div>
// //             </td>
// //             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
// //               <InlineMath math="\sum = 1" />
// //             </td>
// //           </tr>
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default JointProbabilityTable;
// import React, { useState, useEffect } from 'react';
// import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

// const styles = {
//   calculator: {
//     maxWidth: '700px',
//     margin: '15px auto',
//     padding: '15px',
//     backgroundColor: '#fff',
//     borderRadius: '6px',
//     boxShadow: '0 0 8px rgba(0,0,0,0.1)'
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '15px'
//   },
//   title: {
//     fontSize: '20px',
//     color: '#333'
//   },
//   buttons: {
//     display: 'flex',
//     gap: '8px'
//   },
//   button: {
//     padding: '6px 12px',
//     border: 'none',
//     borderRadius: '3px',
//     cursor: 'pointer',
//     fontSize: '12px',
//     color: '#fff'
//   },
//   randomBtn: {
//     backgroundColor: '#4CAF50'
//   },
//   resetBtn: {
//     backgroundColor: '#2196F3'
//   },
//   messageContainer: {
//     height: '37px',
//     marginBottom: '10px',
//     padding: '8px',
//     borderRadius: '3px',
//   },
//   hint: {
//     backgroundColor: '#e3f2fd',
//     color: '#1976d2'
//   },
//   error: {
//     backgroundColor: '#ffebee',
//     color: '#c62828'
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '8px'
//   },
//   th: {
//     padding: '8px',
//     backgroundColor: '#f5f5f5',
//     border: '1px solid #ddd',
//     fontWeight: 'bold',
//     minWidth: '45px'
//   },
//   firstColumn: {
//     width: '45px',
//     minWidth: '45px'
//   },
//   td: {
//     padding: '8px',
//     border: '1px solid #ddd',
//     textAlign: 'center'
//   },
//   cell: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '6px'
//   },
//   input: {
//     width: '75px',
//     padding: '6px',
//     border: '1px solid #ddd',
//     borderRadius: '3px',
//     textAlign: 'center',
//     fontSize: '12px'
//   },
//   marginalCell: {
//     backgroundColor: '#b0ddfb',
//     fontWeight: 'bolder',
//   },
//   marginalInput: {
//     backgroundColor: '#f8f9fa',
//     border: '2px solid #90caf9'
//   },
//   marginalHeader: {
//     fontSize: '12px',
//     lineHeight: '1.2',
//     wordWrap: 'break-word'
//   },
//   bottomRow: {
//     padding: '6px'
//   },
//   tooltipContainer: {
//     position: 'relative',
//     display: 'inline-block'
//   },
//   tooltip: {
//     visibility: 'hidden',
//     position: 'absolute',
//     bottom: '100%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     color: 'white',
//     padding: '5px 10px',
//     borderRadius: '4px',
//     fontSize: '12px',
//     whiteSpace: 'nowrap',
//     zIndex: 1000,
//     marginBottom: '5px',
//     width: 'max-content'
//   }
// };

// const MathWithTooltip = ({ math, tooltip }) => (
//   <div style={styles.tooltipContainer}
//        onMouseEnter={e => e.currentTarget.querySelector('.tooltip').style.visibility = 'visible'}
//        onMouseLeave={e => e.currentTarget.querySelector('.tooltip').style.visibility = 'hidden'}>
//     <InlineMath math={math} />
//     <div className="tooltip" style={styles.tooltip}>{tooltip}</div>
//   </div>
// );

// const INITIAL_STATE = {
//   aAndB: 0.25,
//   aAndNotB: 0.25,
//   notAAndB: 0.15,
//   notAAndNotB: 0.35
// };

// const JointProbabilityTable = () => {
//   const [probabilities, setProbabilities] = useState(INITIAL_STATE);
//   const [isValid, setIsValid] = useState(true);

//   const calculateMarginals = () => {
//     const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
//     const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
//     const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
//     const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
//     const total = pA + pNotA;
//     return { pA, pNotA, pB, pNotB, total };
//   };

//   const generateRandomProbabilities = () => {
//     let vals = Array(4).fill().map(() => Math.random());
//     const sum = vals.reduce((a, b) => a + b, 0);
//     vals = vals.map(v => Number((v / sum).toFixed(3)));
//     const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
//     vals[3] = Number((1 - currentSum).toFixed(3));
    
//     setProbabilities({
//       aAndB: vals[0],
//       aAndNotB: vals[1],
//       notAAndB: vals[2],
//       notAAndNotB: vals[3]
//     });
//   };

//   const resetTable = () => setProbabilities(INITIAL_STATE);

//   useEffect(() => {
//     const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
//     setIsValid(Math.abs(sum - 1) < 0.0001);
//   }, [probabilities]);

//   const handleChange = (key, value) => {
//     const numValue = Math.max(0, Math.min(1, Number(value) || 0));
//     setProbabilities(prev => ({
//       ...prev,
//       [key]: numValue
//     }));
//   };

//   const marginals = calculateMarginals();

//   return (
//     <div style={styles.calculator}>
//       <div style={styles.header}>
//         <h2 style={styles.title}>Joint Probability Table Calculator</h2>
//         <div style={styles.buttons}>
//           <button 
//             onClick={generateRandomProbabilities} 
//             style={{...styles.button, ...styles.randomBtn}}
//           >
//             Random
//           </button>
//           <button 
//             onClick={resetTable} 
//             style={{...styles.button, ...styles.resetBtn}}
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       <div style={styles.messageContainer}>
//         {isValid ? (
//           <div style={{...styles.messageContainer, ...styles.hint}}>
//             Tip: All probabilities in a joint distribution must sum to 1
//           </div>
//         ) : (
//           <div style={{...styles.messageContainer, ...styles.error}}>
//             All probabilities must sum to 1
//           </div>
//         )}
//       </div>
      
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={{...styles.th, ...styles.firstColumn}}></th>
//             <th style={styles.th}>
//               <MathWithTooltip math="A" tooltip="Event A" />
//             </th>
//             <th style={styles.th}>
//               <MathWithTooltip math="\overline{A}" tooltip="Complement of event A (not A)" />
//             </th>
//             <th style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader}}>
//               <MathWithTooltip math="\textbf{Marginal }B" tooltip="Total probability for event B (sum of row)" />
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{...styles.th, ...styles.firstColumn}}>
//               <MathWithTooltip math="B" tooltip="Event B" />
//             </td>
//             <td style={styles.td}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(A \cap B)" tooltip="Probability of both A and B occurring" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={probabilities.aAndB}
//                   onChange={(e) => handleChange('aAndB', e.target.value)}
//                   style={styles.input}
//                 />
//               </div>
//             </td>
//             <td style={styles.td}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(\overline{A} \cap B)" tooltip="Probability of not A and B occurring" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={probabilities.notAAndB}
//                   onChange={(e) => handleChange('notAAndB', e.target.value)}
//                   style={styles.input}
//                 />
//               </div>
//             </td>
//             <td style={{...styles.td, ...styles.marginalCell}}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(B)" tooltip="Marginal probability of event B" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={marginals.pB.toFixed(3)}
//                   readOnly
//                   style={{...styles.input, ...styles.marginalInput}}
//                 />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td style={{...styles.th, ...styles.firstColumn}}>
//               <MathWithTooltip math="\overline{B}" tooltip="Complement of event B (not B)" />
//             </td>
//             <td style={styles.td}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(A \cap \overline{B})" tooltip="Probability of A and not B occurring" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={probabilities.aAndNotB}
//                   onChange={(e) => handleChange('aAndNotB', e.target.value)}
//                   style={styles.input}
//                 />
//               </div>
//             </td>
//             <td style={styles.td}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(\overline{A} \cap \overline{B})" tooltip="Probability of neither A nor B occurring" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={probabilities.notAAndNotB}
//                   onChange={(e) => handleChange('notAAndNotB', e.target.value)}
//                   style={styles.input}
//                 />
//               </div>
//             </td>
//             <td style={{...styles.td, ...styles.marginalCell}}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(\overline{B})" tooltip="Marginal probability of not B" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={marginals.pNotB.toFixed(3)}
//                   readOnly
//                   style={{...styles.input, ...styles.marginalInput}}
//                 />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td style={{...styles.th, ...styles.firstColumn, ...styles.marginalCell, ...styles.marginalHeader, ...styles.bottomRow}}>
//               <MathWithTooltip math="\textbf{Marginal }A" tooltip="Total probability for event A (sum of column)" />
//             </td>
//             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(A)" tooltip="Marginal probability of event A" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={marginals.pA.toFixed(3)}
//                   readOnly
//                   style={{...styles.input, ...styles.marginalInput}}
//                 />
//               </div>
//             </td>
//             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
//               <div style={styles.cell}>
//                 <MathWithTooltip math="P(\overline{A})" tooltip="Marginal probability of not A" />
//                 <input 
//                   type="number"
//                   min="0"
//                   max="1"
//                   step="0.001"
//                   value={marginals.pNotA.toFixed(3)}
//                   readOnly
//                   style={{...styles.input, ...styles.marginalInput}}
//                 />
//               </div>
//             </td>
//             <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
//               <MathWithTooltip math="\sum = 1" tooltip="Total sum of all probabilities" />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default JointProbabilityTable;

import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const styles = {
  calculator: {
    maxWidth: '700px',
    margin: '-15px auto',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px'
  },
  title: {
    fontSize: '20px',
    color: '#333'
  },
  buttons: {
    display: 'flex',
    gap: '8px'
  },
  button: {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '12px',
    color: '#fff'
  },
  randomBtn: {
    backgroundColor: '#4CAF50'
  },
  resetBtn: {
    backgroundColor: '#2196F3'
  },
  messageContainer: {
    height: '37px',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '3px',
  },
  hint: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2'
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#c62828'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '8px'
  },
  th: {
    padding: '8px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    fontWeight: 'bold',
    minWidth: '45px'
  },
  firstColumn: {
    width: '45px',
    minWidth: '45px'
  },
  td: {
    padding: '8px',
    border: '1px solid #ddd',
    textAlign: 'center',
    
   
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    position: 'relative'
  },
  input: {
    width: '75px',
    padding: '6px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    textAlign: 'center',
    fontSize: '12px'
  },
  marginalCell: {
    backgroundColor: '#ffffcc',
    fontWeight: 'bolder',
  },
  marginalInput: {
    backgroundColor: '#f8f9fa',
    border: '2px solid #90caf9'
  },
  marginalHeader: {
    fontSize: '12px',
    lineHeight: '1.2',
    wordWrap: 'break-word'
  },
  bottomRow: {
    padding: '6px'
  },
  tooltipContainer: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: '4px',
    textAlign:'center',
    marginLeft:'10px'
  },
  questionMark: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    color: '#666',
    fontSize: '11px',
    cursor: 'help',
    marginLeft: '4px',
    border:'blue solid 0.2px'
  },
  tooltip: {
    visibility: 'hidden',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    marginBottom: '5px',
    width: 'max-content'
  }
};

const MathWithTooltip = ({ math, tooltip }) => (
  <div style={styles.tooltipContainer}>
    <InlineMath math={math} />
    <div style={styles.questionMark}
         onMouseEnter={e => e.currentTarget.querySelector('.tooltip').style.visibility = 'visible'}
         onMouseLeave={e => e.currentTarget.querySelector('.tooltip').style.visibility = 'hidden'}>
      ?
      <div className="tooltip" style={styles.tooltip}>{tooltip}</div>
    </div>
  </div>
);

const INITIAL_STATE = {
  aAndB: 0.25,
  aAndNotB: 0.25,
  notAAndB: 0.15,
  notAAndNotB: 0.35
};

const JointProbabilityTable = () => {
  const [probabilities, setProbabilities] = useState(INITIAL_STATE);
  const [isValid, setIsValid] = useState(true);

  const calculateMarginals = () => {
    const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
    const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
    const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
    const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
    const total = pA + pNotA;
    return { pA, pNotA, pB, pNotB, total };
  };

  const generateRandomProbabilities = () => {
    let vals = Array(4).fill().map(() => Math.random());
    const sum = vals.reduce((a, b) => a + b, 0);
    vals = vals.map(v => Number((v / sum).toFixed(3)));
    const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
    vals[3] = Number((1 - currentSum).toFixed(3));
    
    setProbabilities({
      aAndB: vals[0],
      aAndNotB: vals[1],
      notAAndB: vals[2],
      notAAndNotB: vals[3]
    });
  };

  const resetTable = () => setProbabilities(INITIAL_STATE);

  useEffect(() => {
    const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
    setIsValid(Math.abs(sum - 1) < 0.0001);
  }, [probabilities]);

  const handleChange = (key, value) => {
    const numValue = Math.max(0, Math.min(1, Number(value) || 0));
    setProbabilities(prev => ({
      ...prev,
      [key]: numValue
    }));
  };

  const marginals = calculateMarginals();

  return (
    <div style={styles.calculator}>
      <div style={styles.header}>
        <h2 style={styles.title}>Joint Probability Table Calculator</h2>
        <div style={styles.buttons}>
          <button 
            onClick={generateRandomProbabilities} 
            style={{...styles.button, ...styles.randomBtn}}
          >
            Random
          </button>
          <button 
            onClick={resetTable} 
            style={{...styles.button, ...styles.resetBtn}}
          >
            Reset
          </button>
        </div>
      </div>

      <div style={styles.messageContainer}>
        {isValid ? (
          <div style={{...styles.messageContainer, ...styles.hint}}>
            Tip: All probabilities in a joint distribution must sum to 1
          </div>
        ) : (
          <div style={{...styles.messageContainer, ...styles.error}}>
            All probabilities must sum to 1
          </div>
        )}
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{...styles.th, ...styles.firstColumn}}></th>
            <th style={styles.th}>
              <MathWithTooltip math="A" tooltip="Event A" />
            </th>
            <th style={styles.th}>
              <MathWithTooltip math="\overline{A}" tooltip="Complement of event A (not A)" />
            </th>
            <th style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader}}>
              <MathWithTooltip math="\textbf{Marginal }B" tooltip="Total probability for event B (sum of row)" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{...styles.th, ...styles.firstColumn}}>
              <MathWithTooltip math="B" tooltip="Event B" />
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(A \cap B)" tooltip="Probability of both A and B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.aAndB}
                  onChange={(e) => handleChange('aAndB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{A} \cap B)" tooltip="Probability of not A and B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.notAAndB}
                  onChange={(e) => handleChange('notAAndB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(B)" tooltip="Marginal probability of event B" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pB.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{...styles.th, ...styles.firstColumn}}>
              <MathWithTooltip math="\overline{B}" tooltip="Complement of event B (not B)" />
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(A \cap \overline{B})" tooltip="Probability of A and not B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.aAndNotB}
                  onChange={(e) => handleChange('aAndNotB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{A} \cap \overline{B})" tooltip="Probability of neither A nor B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.notAAndNotB}
                  onChange={(e) => handleChange('notAAndNotB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{B})" tooltip="Marginal probability of not B" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pNotB.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{...styles.th, ...styles.firstColumn, ...styles.marginalCell, ...styles.marginalHeader, ...styles.bottomRow}}>
              <MathWithTooltip math="\textbf{Marginal }A" tooltip="Total probability for event A (sum of column)" />
            </td>
            <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(A)" tooltip="Marginal probability of event A" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pA.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{A})" tooltip="Marginal probability of not A" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pNotA.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
              <MathWithTooltip math="\sum = 1" tooltip="Total sum of all probabilities" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JointProbabilityTable;