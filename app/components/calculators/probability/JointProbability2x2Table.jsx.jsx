// // import React, { useState } from 'react';

// // export default function JointProbabilityTable() {
// //   const [eventAName, setEventAName] = useState('A');
// //   const [eventBName, setEventBName] = useState('B');
  
// //   const [probAB, setProbAB] = useState('');
// //   const [probANotB, setProbANotB] = useState('');
// //   const [probNotAB, setProbNotAB] = useState('');
// //   const [probNotANotB, setProbNotANotB] = useState('');
  
// //   const [marginalA, setMarginalA] = useState('');
// //   const [marginalB, setMarginalB] = useState('');
// //   const [jointAB, setJointAB] = useState('');

// //   const validateInput = (value) => {
// //     if (value === '') return { valid: true };
// //     const num = parseFloat(value);
// //     if (isNaN(num) || num < 0 || num > 1) return { valid: false };
// //     return { valid: true };
// //   };

// //   const computeFromMarginals = () => {
// //     if (marginalA === '' || marginalB === '' || jointAB === '') return;
    
// //     const pA = parseFloat(marginalA);
// //     const pB = parseFloat(marginalB);
// //     const pAB = parseFloat(jointAB);
    
// //     if (isNaN(pA) || isNaN(pB) || isNaN(pAB)) return;
    
// //     if (pAB > pA || pAB > pB) {
// //       return;
// //     }
    
// //     setProbAB(pAB.toFixed(3));
// //     setProbANotB((pA - pAB).toFixed(3));
// //     setProbNotAB((pB - pAB).toFixed(3));
// //     setProbNotANotB((1 - pA - pB + pAB).toFixed(3));
// //   };

// //   const validateSum = () => {
// //     const vals = [probAB, probANotB, probNotAB, probNotANotB];
// //     const hasAnyValue = vals.some(v => v !== '');
    
// //     if (!hasAnyValue) return { valid: true, message: '', type: '' };
    
// //     const sum = vals.reduce((acc, v) => acc + (v === '' ? 0 : parseFloat(v)), 0);
    
// //     if (sum > 1.001) {
// //       const excess = (sum - 1).toFixed(3);
// //       return { 
// //         valid: false, 
// //         message: `Sum of joint probabilities is ${sum.toFixed(3)}, which exceeds 1 by ${excess}. The four joint probabilities must sum to exactly 1. Please reduce one or more values.`,
// //         type: 'error'
// //       };
// //     }
    
// //     if (sum < 0.999 && vals.every(v => v !== '')) {
// //       const deficit = (1 - sum).toFixed(3);
// //       return { 
// //         valid: false, 
// //         message: `Sum of joint probabilities is ${sum.toFixed(3)}, which is ${deficit} short of 1. All four probabilities must sum to exactly 1. Please increase one or more values.`,
// //         type: 'warning'
// //       };
// //     }
    
// //     if (sum < 1 && vals.some(v => v === '')) {
// //       return {
// //         valid: true,
// //         message: `Current sum of joint probabilities: ${sum.toFixed(3)}. All four joint probabilities must sum to 1.`,
// //         type: 'info'
// //       };
// //     }
    
// //     const pA = parseFloat(marginalA) || 0;
// //     const pB = parseFloat(marginalB) || 0;
// //     const pAB = parseFloat(jointAB) || 0;
    
// //     if (pAB > pA && marginalA !== '') {
// //       return {
// //         valid: false,
// //         message: `P(${eventAName}∩${eventBName}) cannot exceed P(${eventAName}). Joint probability must be ≤ marginal probability.`,
// //         type: 'error'
// //       };
// //     }
    
// //     if (pAB > pB && marginalB !== '') {
// //       return {
// //         valid: false,
// //         message: `P(${eventAName}∩${eventBName}) cannot exceed P(${eventBName}). Joint probability must be ≤ marginal probability.`,
// //         type: 'error'
// //       };
// //     }
    
// //     return { valid: true, message: '', type: '' };
// //   };

// //   const validation = validateSum();

// //   const generateRandom = () => {
// //     const vals = [];
// //     let remaining = 1;
// //     for (let i = 0; i < 3; i++) {
// //       const val = Math.random() * remaining;
// //       vals.push(val);
// //       remaining -= val;
// //     }
// //     vals.push(remaining);
    
// //     setProbAB(vals[0].toFixed(3));
// //     setProbANotB(vals[1].toFixed(3));
// //     setProbNotAB(vals[2].toFixed(3));
// //     setProbNotANotB(vals[3].toFixed(3));
    
// //     setMarginalA('');
// //     setMarginalB('');
// //     setJointAB('');
// //   };

// //   const loadExample = () => {
// //     setProbAB('0.3');
// //     setProbANotB('0.2');
// //     setProbNotAB('0.15');
// //     setProbNotANotB('0.35');
    
// //     setMarginalA('');
// //     setMarginalB('');
// //     setJointAB('');
// //   };

// //   const clearAll = () => {
// //     setProbAB('');
// //     setProbANotB('');
// //     setProbNotAB('');
// //     setProbNotANotB('');
// //     setMarginalA('');
// //     setMarginalB('');
// //     setJointAB('');
// //     setEventAName('A');
// //     setEventBName('B');
// //   };

// //   const parseProb = (val) => val === '' ? 0 : parseFloat(val);
  
// //   const probA = parseProb(probAB) + parseProb(probANotB);
// //   const probNotA = parseProb(probNotAB) + parseProb(probNotANotB);
// //   const probB = parseProb(probAB) + parseProb(probNotAB);
// //   const probNotB = parseProb(probANotB) + parseProb(probNotANotB);
// //   const total = probA + probNotA;

// //   const hasData = probAB !== '' || probANotB !== '' || probNotAB !== '' || probNotANotB !== '';

// //   const getMessageStyle = (type) => {
// //     switch(type) {
// //       case 'error':
// //         return { background: '#fee2e2', border: '1px solid #ef4444', color: '#991b1b' };
// //       case 'warning':
// //         return { background: '#fef3c7', border: '1px solid #f59e0b', color: '#92400e' };
// //       case 'info':
// //         return { background: '#dbeafe', border: '1px solid #3b82f6', color: '#1e3a8a' };
// //       default:
// //         return {};
// //     }
// //   };

// //   return (
// //     <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1100px', margin: '0 auto', background: '#f8f9fa' }}>
// //       <h2 style={{ marginBottom: '25px', color: '#1e3a8a' }}>Joint Probability Table Calculator</h2>
      
// //       <div style={{ marginBottom: '25px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
// //         <div>
// //           <label style={{ marginRight: '8px', color: '#334155', fontWeight: '500' }}>Event 1:</label>
// //           <input 
// //             type="text" 
// //             value={eventAName} 
// //             onChange={(e) => setEventAName(e.target.value)}
// //             style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
// //           />
// //         </div>
// //         <div>
// //           <label style={{ marginRight: '8px', color: '#334155', fontWeight: '500' }}>Event 2:</label>
// //           <input 
// //             type="text" 
// //             value={eventBName} 
// //             onChange={(e) => setEventBName(e.target.value)}
// //             style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
// //           />
// //         </div>
// //         <button 
// //           onClick={generateRandom}
// //           style={{ padding: '7px 14px', border: '1px solid #3b82f6', background: '#3b82f6', color: 'white', cursor: 'pointer', borderRadius: '4px' }}
// //         >
// //           Generate Random
// //         </button>
// //         <button 
// //           onClick={loadExample}
// //           style={{ padding: '7px 14px', border: '1px solid #60a5fa', background: '#60a5fa', color: 'white', cursor: 'pointer', borderRadius: '4px' }}
// //         >
// //           Load Example
// //         </button>
// //         <button 
// //           onClick={clearAll}
// //           style={{ padding: '7px 14px', border: '1px solid #94a3b8', background: '#f1f5f9', color: '#334155', cursor: 'pointer', borderRadius: '4px' }}
// //         >
// //           Clear All
// //         </button>
// //       </div>

// //       {validation.message && (
// //         <div style={{ 
// //           padding: '12px 15px', 
// //           borderRadius: '4px', 
// //           marginBottom: '20px',
// //           ...getMessageStyle(validation.type)
// //         }}>
// //           <strong>{validation.type === 'error' ? '⚠️ Invalid: ' : validation.type === 'warning' ? '⚠️ Warning: ' : 'ℹ️ '}</strong>
// //           {validation.message}
// //         </div>
// //       )}

// //       {hasData && (
// //         <div style={{ marginBottom: '30px', background: 'white', padding: '20px', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
// //           <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #1e3a8a' }}>
// //             <thead>
// //               <tr>
// //                 <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe' }}></th>
// //                 <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', color: '#1e3a8a' }}>{eventAName}</th>
// //                 <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', color: '#1e3a8a' }}>{eventAName}̄</th>
// //                 <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#bfdbfe', color: '#1e3a8a', fontWeight: 'bold' }}>
// //                   Marginal
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', fontWeight: 'bold', color: '#1e3a8a' }}>{eventBName}</td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center' }}>
// //                   P({eventAName}∩{eventBName})<br/>{parseProb(probAB).toFixed(3)}
// //                 </td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center' }}>
// //                   P({eventAName}̄∩{eventBName})<br/>{parseProb(probNotAB).toFixed(3)}
// //                 </td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff', fontWeight: 'bold' }}>
// //                   P({eventBName})<br/>{probB.toFixed(3)}
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', fontWeight: 'bold', color: '#1e3a8a' }}>{eventBName}̄</td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center' }}>
// //                   P({eventAName}∩{eventBName}̄)<br/>{parseProb(probANotB).toFixed(3)}
// //                 </td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center' }}>
// //                   P({eventAName}̄∩{eventBName}̄)<br/>{parseProb(probNotANotB).toFixed(3)}
// //                 </td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff', fontWeight: 'bold' }}>
// //                   P({eventBName}̄)<br/>{probNotB.toFixed(3)}
// //                 </td>
// //               </tr>
// //               <tr>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#bfdbfe', fontWeight: 'bold', color: '#1e3a8a' }}>
// //                   Marginal
// //                 </td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff', fontWeight: 'bold' }}>
// //                   P({eventAName})<br/>{probA.toFixed(3)}
// //                 </td>
// //                 <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff', fontWeight: 'bold' }}>
// //                   P({eventAName}̄)<br/>{probNotA.toFixed(3)}
// //                 </td>
// //                 <td style={{ 
// //                   border: '1px solid #94a3b8', 
// //                   padding: '12px', 
// //                   textAlign: 'center', 
// //                   background: Math.abs(total - 1) < 0.001 ? '#bbf7d0' : '#fef3c7', 
// //                   fontWeight: 'bold',
// //                   color: '#1e3a8a'
// //                 }}>
// //                   Total<br/>{total.toFixed(3)}
// //                 </td>
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
// //         <div style={{ background: 'white', padding: '20px', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
// //           <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#1e3a8a' }}>Enter Joint Probabilities</h3>
// //           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
// //             <div>
// //               <label style={{ display: 'block', marginBottom: '5px', color: '#334155', fontWeight: '500' }}>P({eventAName}∩{eventBName}):</label>
// //               <input 
// //                 type="number" 
// //                 step="0.001"
// //                 min="0"
// //                 max="1"
// //                 value={probAB} 
// //                 onChange={(e) => {
// //                   const validation = validateInput(e.target.value);
// //                   if (validation.valid || e.target.value === '') {
// //                     setProbAB(e.target.value);
// //                   }
// //                 }}
// //                 style={{ padding: '8px', border: '1px solid #cbd5e1', width: '100%', borderRadius: '4px' }}
// //                 placeholder="0.000"
// //               />
// //             </div>
// //             <div>
// //               <label style={{ display: 'block', marginBottom: '5px', color: '#334155', fontWeight: '500' }}>P({eventAName}∩{eventBName}̄):</label>
// //               <input 
// //                 type="number" 
// //                 step="0.001"
// //                 min="0"
// //                 max="1"
// //                 value={probANotB} 
// //                 onChange={(e) => {
// //                   const validation = validateInput(e.target.value);
// //                   if (validation.valid || e.target.value === '') {
// //                     setProbANotB(e.target.value);
// //                   }
// //                 }}
// //                 style={{ padding: '8px', border: '1px solid #cbd5e1', width: '100%', borderRadius: '4px' }}
// //                 placeholder="0.000"
// //               />
// //             </div>
// //             <div>
// //               <label style={{ display: 'block', marginBottom: '5px', color: '#334155', fontWeight: '500' }}>P({eventAName}̄∩{eventBName}):</label>
// //               <input 
// //                 type="number" 
// //                 step="0.001"
// //                 min="0"
// //                 max="1"
// //                 value={probNotAB} 
// //                 onChange={(e) => {
// //                   const validation = validateInput(e.target.value);
// //                   if (validation.valid || e.target.value === '') {
// //                     setProbNotAB(e.target.value);
// //                   }
// //                 }}
// //                 style={{ padding: '8px', border: '1px solid #cbd5e1', width: '100%', borderRadius: '4px' }}
// //                 placeholder="0.000"
// //               />
// //             </div>
// //             <div>
// //               <label style={{ display: 'block', marginBottom: '5px', color: '#334155', fontWeight: '500' }}>P({eventAName}̄∩{eventBName}̄):</label>
// //               <input 
// //                 type="number" 
// //                 step="0.001"
// //                 min="0"
// //                 max="1"
// //                 value={probNotANotB} 
// //                 onChange={(e) => {
// //                   const validation = validateInput(e.target.value);
// //                   if (validation.valid || e.target.value === '') {
// //                     setProbNotANotB(e.target.value);
// //                   }
// //                 }}
// //                 style={{ padding: '8px', border: '1px solid #cbd5e1', width: '100%', borderRadius: '4px' }}
// //                 placeholder="0.000"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         <div style={{ background: 'white', padding: '20px', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
// //           <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#1e3a8a' }}>Or Enter Marginal Probabilities</h3>
// //           <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
// //             <div>
// //               <label style={{ display: 'block', marginBottom: '5px', color: '#334155', fontWeight: '500' }}>P({eventAName}):</label>
// //               <input 
// //                 type="number" 
// //                 step="0.001"
// //                 min="0"
// //                 max="1"
// //                 value={marginalA} 
// //                 onChange={(e) => {
// //                   const validation = validateInput(e.target.value);
// //                   if (validation.valid || e.target.value === '') {
// //                     setMarginalA(e.target.value);
// //                   }
// //                 }}
// //                 style={{ padding: '8px', border: '1px solid #cbd5e1', width: '100%', borderRadius: '4px' }}
// //                 placeholder="0.000"
// //               />
// //             </div>
// //             <div>
// //               <label style={{ display: 'block', marginBottom: '5px', color: '#334155', fontWeight: '500' }}>P({eventBName}):</label>
// //               <input 
// //                 type="number" 
// //                 step="0.001"
// //                 min="0"
// //                 max="1"
// //                 value={marginalB} 
// //                 onChange={(e) => {
// //                   const validation = validateInput(e.target.value);
// //                   if (validation.valid || e.target.value === '') {
// //                     setMarginalB(e.target.value);
// //                   }
// //                 }}
// //                 style={{ padding: '8px', border: '1px solid #cbd5e1', width: '100%', borderRadius: '4px' }}
// //                 placeholder="0.000"
// //               />
// //             </div>
// //             <div>
// //               <label style={{ display: 'block', marginBottom: '5px', color: '#334155', fontWeight: '500' }}>P({eventAName}∩{eventBName}):</label>
// //               <input 
// //                 type="number" 
// //                 step="0.001"
// //                 min="0"
// //                 max="1"
// //                 value={jointAB} 
// //                 onChange={(e) => {
// //                   const validation = validateInput(e.target.value);
// //                   if (validation.valid || e.target.value === '') {
// //                     setJointAB(e.target.value);
// //                   }
// //                 }}
// //                 style={{ padding: '8px', border: '1px solid #cbd5e1', width: '100%', borderRadius: '4px' }}
// //                 placeholder="0.000"
// //               />
// //             </div>
// //             <button 
// //               onClick={computeFromMarginals}
// //               style={{ padding: '10px 14px', border: '1px solid #3b82f6', background: '#3b82f6', color: 'white', cursor: 'pointer', borderRadius: '4px', fontWeight: '500' }}
// //             >
// //               Calculate Joint Probabilities
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';

// export default function JointProbability2x2Table() {
//   const [eventAName, setEventAName] = useState('A');
//   const [eventBName, setEventBName] = useState('B');
  
//   const [probAB, setProbAB] = useState('');
//   const [probANotB, setProbANotB] = useState('');
//   const [probNotAB, setProbNotAB] = useState('');
//   const [probNotANotB, setProbNotANotB] = useState('');
  
//   const [marginalA, setMarginalA] = useState('');
//   const [marginalNotA, setMarginalNotA] = useState('');
//   const [marginalB, setMarginalB] = useState('');
//   const [marginalNotB, setMarginalNotB] = useState('');
//   const [jointAB, setJointAB] = useState('');
  
//   const [marginalAManual, setMarginalAManual] = useState(false);
//   const [marginalNotAManual, setMarginalNotAManual] = useState(false);
//   const [marginalBManual, setMarginalBManual] = useState(false);
//   const [marginalNotBManual, setMarginalNotBManual] = useState(false);

//   const [hoveredTooltip, setHoveredTooltip] = useState(null);

//   const parseProb = (val) => val === '' ? null : parseFloat(val);

//   const validateNumericInput = (value) => {
//     if (value === '') return true;
//     // Allow digits, single decimal point, and values like "0." or ".5"
//     return /^(\d*\.?\d*)$/.test(value);
//   };

//   useEffect(() => {
//     const pAB = parseProb(probAB);
//     const pANotB = parseProb(probANotB);
//     const pNotAB = parseProb(probNotAB);
//     const pNotANotB = parseProb(probNotANotB);

//     // Auto-calculate complement marginals
//     if (marginalA !== '' && marginalNotA === '' && !marginalNotAManual) {
//       const mA = parseFloat(marginalA);
//       if (!isNaN(mA) && mA >= 0 && mA <= 1) {
//         const complement = 1 - mA;
//         if (complement >= 0 && complement <= 1) {
//           setMarginalNotA(complement.toFixed(3));
//         }
//       }
//     }
    
//     if (marginalNotA !== '' && marginalA === '' && !marginalAManual) {
//       const mNotA = parseFloat(marginalNotA);
//       if (!isNaN(mNotA) && mNotA >= 0 && mNotA <= 1) {
//         const complement = 1 - mNotA;
//         if (complement >= 0 && complement <= 1) {
//           setMarginalA(complement.toFixed(3));
//         }
//       }
//     }
    
//     if (marginalB !== '' && marginalNotB === '' && !marginalNotBManual) {
//       const mB = parseFloat(marginalB);
//       if (!isNaN(mB) && mB >= 0 && mB <= 1) {
//         const complement = 1 - mB;
//         if (complement >= 0 && complement <= 1) {
//           setMarginalNotB(complement.toFixed(3));
//         }
//       }
//     }
    
//     if (marginalNotB !== '' && marginalB === '' && !marginalBManual) {
//       const mNotB = parseFloat(marginalNotB);
//       if (!isNaN(mNotB) && mNotB >= 0 && mNotB <= 1) {
//         const complement = 1 - mNotB;
//         if (complement >= 0 && complement <= 1) {
//           setMarginalB(complement.toFixed(3));
//         }
//       }
//     }

//     // Auto-calculate marginal A when both cells in column are filled and not manually entered
//     if (pAB !== null && pANotB !== null && !isNaN(pAB) && !isNaN(pANotB) && !marginalAManual) {
//       const sum = pAB + pANotB;
//       setMarginalA(sum.toFixed(3));
//     }

//     // Auto-calculate marginal Ā when both cells in column are filled and not manually entered
//     if (pNotAB !== null && pNotANotB !== null && !isNaN(pNotAB) && !isNaN(pNotANotB) && !marginalNotAManual) {
//       const sum = pNotAB + pNotANotB;
//       setMarginalNotA(sum.toFixed(3));
//     }

//     // Auto-calculate marginal B when both cells in row are filled and not manually entered
//     if (pAB !== null && pNotAB !== null && !isNaN(pAB) && !isNaN(pNotAB) && !marginalBManual) {
//       const sum = pAB + pNotAB;
//       setMarginalB(sum.toFixed(3));
//     }

//     // Auto-calculate marginal B^c when both cells in row are filled and not manually entered
//     if (pANotB !== null && pNotANotB !== null && !isNaN(pANotB) && !isNaN(pNotANotB) && !marginalNotBManual) {
//       const sum = pANotB + pNotANotB;
//       setMarginalNotB(sum.toFixed(3));
//     }

//     // Auto-calculate cells when marginal and one cell are filled
//     const mA = parseProb(marginalA);
//     const mNotA = parseProb(marginalNotA);
//     const mB = parseProb(marginalB);
//     const mNotB = parseProb(marginalNotB);

//     // Column A calculations
//     if (mA !== null && pAB !== null && !isNaN(mA) && !isNaN(pAB) && probANotB === '') {
//       const calc = mA - pAB;
//       if (calc >= -0.001 && calc <= 1.001) setProbANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }
//     if (mA !== null && pANotB !== null && !isNaN(mA) && !isNaN(pANotB) && probAB === '') {
//       const calc = mA - pANotB;
//       if (calc >= -0.001 && calc <= 1.001) setProbAB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }

//     // Column Ā calculations
//     if (mNotA !== null && pNotAB !== null && !isNaN(mNotA) && !isNaN(pNotAB) && probNotANotB === '') {
//       const calc = mNotA - pNotAB;
//       if (calc >= -0.001 && calc <= 1.001) setProbNotANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }
//     if (mNotA !== null && pNotANotB !== null && !isNaN(mNotA) && !isNaN(pNotANotB) && probNotAB === '') {
//       const calc = mNotA - pNotANotB;
//       if (calc >= -0.001 && calc <= 1.001) setProbNotAB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }

//     // Row B calculations
//     if (mB !== null && pAB !== null && !isNaN(mB) && !isNaN(pAB) && probNotAB === '') {
//       const calc = mB - pAB;
//       if (calc >= -0.001 && calc <= 1.001) setProbNotAB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }
//     if (mB !== null && pNotAB !== null && !isNaN(mB) && !isNaN(pNotAB) && probAB === '') {
//       const calc = mB - pNotAB;
//       if (calc >= -0.001 && calc <= 1.001) setProbAB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }

//     // Row B^c calculations
//     if (mNotB !== null && pANotB !== null && !isNaN(mNotB) && !isNaN(pANotB) && probNotANotB === '') {
//       const calc = mNotB - pANotB;
//       if (calc >= -0.001 && calc <= 1.001) setProbNotANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }
//     if (mNotB !== null && pNotANotB !== null && !isNaN(mNotB) && !isNaN(pNotANotB) && probANotB === '') {
//       const calc = mNotB - pNotANotB;
//       if (calc >= -0.001 && calc <= 1.001) setProbANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
//     }
//   }, [probAB, probANotB, probNotAB, probNotANotB, marginalA, marginalNotA, marginalB, marginalNotB, marginalAManual, marginalNotAManual, marginalBManual, marginalNotBManual]);

//   const computeFromMarginals = () => {
//     let pA, pB, pAB;
    
//     if (marginalA !== '') {
//       pA = parseFloat(marginalA);
//     } else if (marginalNotA !== '') {
//       pA = 1 - parseFloat(marginalNotA);
//     } else {
//       return;
//     }
    
//     if (marginalB !== '') {
//       pB = parseFloat(marginalB);
//     } else if (marginalNotB !== '') {
//       pB = 1 - parseFloat(marginalNotB);
//     } else {
//       return;
//     }
    
//     if (probAB !== '') {
//       pAB = parseFloat(probAB);
//     } else if (probANotB !== '') {
//       pAB = pA - parseFloat(probANotB);
//     } else if (probNotAB !== '') {
//       pAB = pB - parseFloat(probNotAB);
//     } else if (probNotANotB !== '') {
//       pAB = pA + pB - 1 + parseFloat(probNotANotB);
//     } else {
//       return;
//     }
    
//     if (isNaN(pA) || isNaN(pB) || isNaN(pAB)) return;
//     if (pAB > pA || pAB > pB || pAB < 0) return;
    
//     setProbAB(pAB.toFixed(3));
//     setProbANotB((pA - pAB).toFixed(3));
//     setProbNotAB((pB - pAB).toFixed(3));
//     setProbNotANotB((1 - pA - pB + pAB).toFixed(3));
//   };

//   const probA = (parseProb(probAB) || 0) + (parseProb(probANotB) || 0);
//   const probNotA = (parseProb(probNotAB) || 0) + (parseProb(probNotANotB) || 0);
//   const probB = (parseProb(probAB) || 0) + (parseProb(probNotAB) || 0);
//   const probNotB = (parseProb(probANotB) || 0) + (parseProb(probNotANotB) || 0);
//   const total = (parseProb(probAB) || 0) + (parseProb(probANotB) || 0) + (parseProb(probNotAB) || 0) + (parseProb(probNotANotB) || 0);

//   const hasData = probAB !== '' || probANotB !== '' || probNotAB !== '' || probNotANotB !== '';
//   const allInnerCellsFilled = probAB !== '' && probANotB !== '' && probNotAB !== '' && probNotANotB !== '';
//   const innerCellStyle = allInnerCellsFilled ? { background: '#fef3c7' } : {};

//   const validateSum = () => {
//     const vals = [probAB, probANotB, probNotAB, probNotANotB];
    
//     // Check if joint probabilities exceed their marginals
//     const pAB = parseProb(probAB);
//     const pANotB = parseProb(probANotB);
//     const pNotAB = parseProb(probNotAB);
//     const pNotANotB = parseProb(probNotANotB);
//     const mA = parseProb(marginalA);
//     const mNotA = parseProb(marginalNotA);
//     const mB = parseProb(marginalB);
//     const mNotB = parseProb(marginalNotB);
    
//     if (pAB !== null && mA !== null && pAB > mA) {
//       return {
//         valid: false,
//         message: `P(${eventAName}∩${eventBName}) = ${pAB.toFixed(3)} cannot exceed P(${eventAName}) = ${mA.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     if (pAB !== null && mB !== null && pAB > mB) {
//       return {
//         valid: false,
//         message: `P(${eventAName}∩${eventBName}) = ${pAB.toFixed(3)} cannot exceed P(${eventBName}) = ${mB.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     if (pANotB !== null && mA !== null && pANotB > mA) {
//       return {
//         valid: false,
//         message: `P(${eventAName}∩${eventBName}^c) = ${pANotB.toFixed(3)} cannot exceed P(${eventAName}) = ${mA.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     if (pANotB !== null && mNotB !== null && pANotB > mNotB) {
//       return {
//         valid: false,
//         message: `P(${eventAName}∩${eventBName}^c) = ${pANotB.toFixed(3)} cannot exceed P(${eventBName}^c) = ${mNotB.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     if (pNotAB !== null && mNotA !== null && pNotAB > mNotA) {
//       return {
//         valid: false,
//         message: `P(${eventAName}^c∩${eventBName}) = ${pNotAB.toFixed(3)} cannot exceed P(${eventAName}^c) = ${mNotA.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     if (pNotAB !== null && mB !== null && pNotAB > mB) {
//       return {
//         valid: false,
//         message: `P(${eventAName}^c∩${eventBName}) = ${pNotAB.toFixed(3)} cannot exceed P(${eventBName}) = ${mB.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     if (pNotANotB !== null && mNotA !== null && pNotANotB > mNotA) {
//       return {
//         valid: false,
//         message: `P(${eventAName}^c∩${eventBName}^c) = ${pNotANotB.toFixed(3)} cannot exceed P(${eventAName}^c) = ${mNotA.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     if (pNotANotB !== null && mNotB !== null && pNotANotB > mNotB) {
//       return {
//         valid: false,
//         message: `P(${eventAName}^c∩${eventBName}^c) = ${pNotANotB.toFixed(3)} cannot exceed P(${eventBName}^c) = ${mNotB.toFixed(3)}.`,
//         type: 'error'
//       };
//     }
    
//     // Validate individual marginals are between 0 and 1
//     if (marginalA !== '') {
//       const mA = parseFloat(marginalA);
//       if (mA < 0 || mA > 1) {
//         return {
//           valid: false,
//           message: `P(${eventAName}) = ${mA.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalNotA !== '') {
//       const mNotA = parseFloat(marginalNotA);
//       if (mNotA < 0 || mNotA > 1) {
//         return {
//           valid: false,
//           message: `P(${eventAName}^c) = ${mNotA.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalB !== '') {
//       const mB = parseFloat(marginalB);
//       if (mB < 0 || mB > 1) {
//         return {
//           valid: false,
//           message: `P(${eventBName}) = ${mB.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalNotB !== '') {
//       const mNotB = parseFloat(marginalNotB);
//       if (mNotB < 0 || mNotB > 1) {
//         return {
//           valid: false,
//           message: `P(${eventBName}^c) = ${mNotB.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
//           type: 'error'
//         };
//       }
//     }
    
//     // Check if manually entered marginals conflict with filled cells
//     if (marginalAManual && pAB !== null && pANotB !== null) {
//       const cellSum = pAB + pANotB;
//       const mA = parseFloat(marginalA);
//       if (Math.abs(cellSum - mA) > 0.001) {
//         return {
//           valid: false,
//           message: `P(${eventAName}) entered as ${mA.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalNotAManual && pNotAB !== null && pNotANotB !== null) {
//       const cellSum = pNotAB + pNotANotB;
//       const mNotA = parseFloat(marginalNotA);
//       if (Math.abs(cellSum - mNotA) > 0.001) {
//         return {
//           valid: false,
//           message: `P(${eventAName}^c) entered as ${mNotA.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalBManual && pAB !== null && pNotAB !== null) {
//       const cellSum = pAB + pNotAB;
//       const mB = parseFloat(marginalB);
//       if (Math.abs(cellSum - mB) > 0.001) {
//         return {
//           valid: false,
//           message: `P(${eventBName}) entered as ${mB.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalNotBManual && pANotB !== null && pNotANotB !== null) {
//       const cellSum = pANotB + pNotANotB;
//       const mNotB = parseFloat(marginalNotB);
//       if (Math.abs(cellSum - mNotB) > 0.001) {
//         return {
//           valid: false,
//           message: `P(${eventBName}^c) entered as ${mNotB.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalA !== '' && marginalNotA !== '') {
//       const sumA = parseFloat(marginalA) + parseFloat(marginalNotA);
//       if (Math.abs(sumA - 1) > 0.002) {
//         return {
//           valid: false,
//           message: `P(${eventAName}) + P(${eventAName}^c) = ${sumA.toFixed(3)}, but must equal 1.000.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (marginalB !== '' && marginalNotB !== '') {
//       const sumB = parseFloat(marginalB) + parseFloat(marginalNotB);
//       if (Math.abs(sumB - 1) > 0.002) {
//         return {
//           valid: false,
//           message: `P(${eventBName}) + P(${eventBName}^c) = ${sumB.toFixed(3)}, but must equal 1.000.`,
//           type: 'error'
//         };
//       }
//     }
    
//     if (total > 1.002) {
//       const excess = (total - 1).toFixed(3);
//       return { 
//         valid: false, 
//         message: `Sum of joint probabilities is ${total.toFixed(3)}, which exceeds 1 by ${excess}. The four joint probabilities must sum to exactly 1.`,
//         type: 'error'
//       };
//     }
    
//     return { valid: true, message: '', type: '' };
//   };

//   const validation = validateSum();

//   const generateRandom = () => {
//     const vals = [];
//     let remaining = 1;
//     for (let i = 0; i < 3; i++) {
//       const val = Math.random() * remaining;
//       vals.push(val);
//       remaining -= val;
//     }
//     vals.push(remaining);
    
//     setProbAB(vals[0].toFixed(3));
//     setProbANotB(vals[1].toFixed(3));
//     setProbNotAB(vals[2].toFixed(3));
//     setProbNotANotB(vals[3].toFixed(3));
    
//     setMarginalA('');
//     setMarginalNotA('');
//     setMarginalB('');
//     setMarginalNotB('');
//     setJointAB('');
//     setMarginalAManual(false);
//     setMarginalNotAManual(false);
//     setMarginalBManual(false);
//     setMarginalNotBManual(false);
//   };

//   const loadExample = () => {
//     setProbAB('0.3');
//     setProbANotB('0.2');
//     setProbNotAB('0.15');
//     setProbNotANotB('0.35');
    
//     setMarginalA('');
//     setMarginalNotA('');
//     setMarginalB('');
//     setMarginalNotB('');
//     setJointAB('');
//     setMarginalAManual(false);
//     setMarginalNotAManual(false);
//     setMarginalBManual(false);
//     setMarginalNotBManual(false);
//   };

//   const clearAll = () => {
//     setProbAB('');
//     setProbANotB('');
//     setProbNotAB('');
//     setProbNotANotB('');
//     setMarginalA('');
//     setMarginalNotA('');
//     setMarginalB('');
//     setMarginalNotB('');
//     setJointAB('');
//     setEventAName('A');
//     setEventBName('B');
//     setMarginalAManual(false);
//     setMarginalNotAManual(false);
//     setMarginalBManual(false);
//     setMarginalNotBManual(false);
//   };

//   const getMessageStyle = (type) => {
//     switch(type) {
//       case 'error':
//         return { background: '#fee2e2', border: '1px solid #ef4444', color: '#991b1b' };
//       case 'warning':
//         return { background: '#fef3c7', border: '1px solid #f59e0b', color: '#92400e' };
//       case 'info':
//         return { background: '#dbeafe', border: '1px solid #3b82f6', color: '#1e3a8a' };
//       default:
//         return {};
//     }
//   };

//   return (
//     <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1100px', margin: '0 auto', background: '#f8f9fa' }}>
//       <h2 style={{ marginBottom: '25px', color: '#1e3a8a' }}>Joint Probability Table Calculator</h2>
      
//       <div style={{ marginBottom: '25px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
//         <div>
//           <label style={{ marginRight: '8px', color: '#334155', fontWeight: '500' }}>Event 1:</label>
//           <input 
//             type="text" 
//             value={eventAName} 
//             onChange={(e) => setEventAName(e.target.value)}
//             style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
//           />
//         </div>
//         <div>
//           <label style={{ marginRight: '8px', color: '#334155', fontWeight: '500' }}>Event 2:</label>
//           <input 
//             type="text" 
//             value={eventBName} 
//             onChange={(e) => setEventBName(e.target.value)}
//             style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
//           />
//         </div>
//         <button 
//           onClick={generateRandom}
//           style={{ padding: '7px 14px', border: '1px solid #3b82f6', background: '#3b82f6', color: 'white', cursor: 'pointer', borderRadius: '4px' }}
//         >
//           Generate Random Example
//         </button>
//       </div>
      
//       <div style={{ marginBottom: '25px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
//         <button 
//           onClick={computeFromMarginals}
//           style={{ padding: '7px 14px', border: '1px solid #16a34a', background: '#16a34a', color: 'white', cursor: 'pointer', borderRadius: '4px' }}
//         >
//           Calculate from Marginals
//         </button>
//         <button 
//           onClick={clearAll}
//           style={{ padding: '7px 14px', border: '1px solid #94a3b8', background: '#f1f5f9', color: '#334155', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
//           </svg>
//           Clear All
//         </button>
//       </div>

//       {validation.message && (
//         <div style={{ 
//           padding: '12px 15px', 
//           borderRadius: '4px', 
//           marginBottom: '20px',
//           ...getMessageStyle(validation.type)
//         }}>
//           <strong>{validation.type === 'error' ? '⚠️ Invalid: ' : validation.type === 'warning' ? '⚠️ Warning: ' : 'ℹ️ '}</strong>
//           {validation.message}
//         </div>
//       )}

//       <div style={{ marginBottom: '30px', background: 'white', padding: '20px', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', gap: '20px' }}>
//         <div style={{ flex: '0 0 68%' }}>
//           <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #1e3a8a' }}>
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe' }}></th>
//               <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', color: '#1e3a8a' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>{eventAName}</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #1e3a8a', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#1e3a8a',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('eventA')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'eventA' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold' }}>Event {eventAName}</div>
//                         <div style={{ marginTop: '4px' }}>Column for outcomes where {eventAName} occurs</div>
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </th>
//               <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', color: '#1e3a8a' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>{eventAName}<sup>c</sup></span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #1e3a8a', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#1e3a8a',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('eventNotA')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'eventNotA' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold' }}>Event {eventAName}<sup>c</sup> (Complement)</div>
//                         <div style={{ marginTop: '4px' }}>Column for outcomes where {eventAName} does NOT occur</div>
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </th>
//               <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#bfdbfe', color: '#1e3a8a', fontWeight: 'bold' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>Marginal<br/>P({eventBName})</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #1e3a8a', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#1e3a8a',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('marginalBHeader')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'marginalBHeader' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold' }}>Marginal Probabilities for {eventBName}</div>
//                         <div style={{ marginTop: '4px' }}>Sum of probabilities in each row</div>
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', fontWeight: 'bold', color: '#1e3a8a' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>{eventBName}</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #1e3a8a', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#1e3a8a',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('eventB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'eventB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold' }}>Event {eventBName}</div>
//                         <div style={{ marginTop: '4px' }}>Row for outcomes where {eventBName} occurs</div>
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>P({eventAName}∩{eventBName})</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('pAB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'pAB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
//                         <div>Both {eventAName} and {eventBName} occur</div>
//                         {probAB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probAB}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={probAB}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setProbAB(e.target.value);
//                       setJointAB(e.target.value);
//                       setMarginalAManual(false);
//                       setMarginalBManual(false);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center'
//                   }}
//                   placeholder="0.000"
//                 />
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>P({eventAName}<sup>c</sup>∩{eventBName})</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('pNotAB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'pNotAB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
//                         <div>{eventAName} does NOT occur and {eventBName} occurs</div>
//                         {probNotAB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probNotAB}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={probNotAB}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setProbNotAB(e.target.value);
//                       setMarginalNotAManual(false);
//                       setMarginalBManual(false);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center'
//                   }}
//                   placeholder="0.000"
//                 />
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
//                   <span>P({eventBName})</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('marginalB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'marginalB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
//                         <div>Probability that {eventBName} occurs</div>
//                         <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of row: P({eventAName}∩{eventBName}) + P({eventAName}<sup>c</sup>∩{eventBName})</div>
//                         {marginalB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalB}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={marginalB}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setMarginalB(e.target.value);
//                       setMarginalBManual(true);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center',
//                     background: '#dbeafe'
//                   }}
//                   placeholder="0.000"
//                 />
//                 {hasData && marginalB === '' && (
//                   <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
//                     = {probB.toFixed(3)}
//                   </div>
//                 )}
//               </td>
//             </tr>
//             <tr>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', fontWeight: 'bold', color: '#1e3a8a' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>{eventBName}<sup>c</sup></span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #1e3a8a', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#1e3a8a',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('eventNotB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'eventNotB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold' }}>Event {eventBName}<sup>c</sup> (Complement)</div>
//                         <div style={{ marginTop: '4px' }}>Row for outcomes where {eventBName} does NOT occur</div>
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>P({eventAName}∩{eventBName}<sup>c</sup>)</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('pANotB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'pANotB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
//                         <div>{eventAName} occurs and {eventBName} does NOT occur</div>
//                         {probANotB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probANotB}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={probANotB}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setProbANotB(e.target.value);
//                       setMarginalAManual(false);
//                       setMarginalNotBManual(false);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center'
//                   }}
//                   placeholder="0.000"
//                 />
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>P({eventAName}<sup>c</sup>∩{eventBName}<sup>c</sup>)</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('pNotANotB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'pNotANotB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
//                         <div>Neither {eventAName} nor {eventBName} occur</div>
//                         {probNotANotB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probNotANotB}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={probNotANotB}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setProbNotANotB(e.target.value);
//                       setMarginalNotAManual(false);
//                       setMarginalNotBManual(false);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center'
//                   }}
//                   placeholder="0.000"
//                 />
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
//                   <span>P({eventBName}<sup>c</sup>)</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('marginalNotB')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'marginalNotB' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
//                         <div>Probability that {eventBName} does NOT occur</div>
//                         <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of row: P({eventAName}∩{eventBName}<sup>c</sup>) + P({eventAName}<sup>c</sup>∩{eventBName}<sup>c</sup>)</div>
//                         {marginalNotB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalNotB}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={marginalNotB}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setMarginalNotB(e.target.value);
//                       setMarginalNotBManual(true);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center',
//                     background: '#dbeafe'
//                   }}
//                   placeholder="0.000"
//                 />
//                 {hasData && marginalNotB === '' && (
//                   <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
//                     = {probNotB.toFixed(3)}
//                   </div>
//                 )}
//               </td>
//             </tr>
//             <tr>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#bfdbfe', fontWeight: 'bold', color: '#1e3a8a' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>Marginal<br/>P({eventAName})</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #1e3a8a', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#1e3a8a',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('marginalAHeader')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'marginalAHeader' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold' }}>Marginal Probabilities for {eventAName}</div>
//                         <div style={{ marginTop: '4px' }}>Sum of probabilities in each column</div>
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
//                   <span>P({eventAName})</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('marginalA')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'marginalA' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
//                         <div>Probability that {eventAName} occurs</div>
//                         <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of column: P({eventAName}∩{eventBName}) + P({eventAName}∩{eventBName}<sup>c</sup>)</div>
//                         {marginalA !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalA}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={marginalA}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setMarginalA(e.target.value);
//                       setMarginalAManual(true);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center',
//                     background: '#dbeafe'
//                   }}
//                   placeholder="0.000"
//                 />
//                 {hasData && marginalA === '' && (
//                   <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
//                     = {probA.toFixed(3)}
//                   </div>
//                 )}
//               </td>
//               <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
//                   <span>P({eventAName}<sup>c</sup>)</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #64748b', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#64748b',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('marginalNotA')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'marginalNotA' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
//                         <div>Probability that {eventAName} does NOT occur</div>
//                         <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of column: P({eventAName}<sup>c</sup>∩{eventBName}) + P({eventAName}<sup>c</sup>∩{eventBName}<sup>c</sup>)</div>
//                         {marginalNotA !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalNotA}</div>}
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <input 
//                   type="text" 
//                   value={marginalNotA}
//                   onChange={(e) => {
//                     if (validateNumericInput(e.target.value)) {
//                       setMarginalNotA(e.target.value);
//                       setMarginalNotAManual(true);
//                     }
//                   }}
//                   style={{ 
//                     padding: '4px 8px', 
//                     border: '1px solid #cbd5e1', 
//                     width: '80px', 
//                     borderRadius: '4px',
//                     marginTop: '4px',
//                     textAlign: 'center',
//                     background: '#dbeafe'
//                   }}
//                   placeholder="0.000"
//                 />
//                 {hasData && marginalNotA === '' && (
//                   <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
//                     = {probNotA.toFixed(3)}
//                   </div>
//                 )}
//               </td>
//               <td style={{ 
//                 border: '1px solid #94a3b8', 
//                 padding: '12px', 
//                 textAlign: 'center', 
//                 background: '#bbf7d0',
//                 fontWeight: 'bold',
//                 color: '#1e3a8a'
//               }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
//                   <span>Total<br/>1.000</span>
//                   <div 
//                     style={{ 
//                       width: '16px', 
//                       height: '16px', 
//                       borderRadius: '50%', 
//                       border: '1px solid #1e3a8a', 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       justifyContent: 'center',
//                       fontSize: '11px',
//                       color: '#1e3a8a',
//                       cursor: 'pointer',
//                       flexShrink: 0,
//                       position: 'relative'
//                     }}
//                     onMouseEnter={() => setHoveredTooltip('total')}
//                     onMouseLeave={() => setHoveredTooltip(null)}
//                   >
//                     ?
//                     {hoveredTooltip === 'total' && (
//                       <div style={{
//                         position: 'absolute',
//                         bottom: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         marginBottom: '8px',
//                         background: '#1e293b',
//                         color: 'white',
//                         padding: '8px 12px',
//                         borderRadius: '6px',
//                         fontSize: '13px',
//                         whiteSpace: 'nowrap',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                         zIndex: 1000,
//                         pointerEvents: 'none'
//                       }}>
//                         <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Total Probability</div>
//                         <div>All joint probabilities must sum to 1</div>
//                         <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>This represents the entire sample space</div>
//                         <div style={{
//                           position: 'absolute',
//                           top: '100%',
//                           left: '50%',
//                           transform: 'translateX(-50%)',
//                           width: 0,
//                           height: 0,
//                           borderLeft: '6px solid transparent',
//                           borderRight: '6px solid transparent',
//                           borderTop: '6px solid #1e293b'
//                         }}></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
        
//         {allInnerCellsFilled && (
//           <div style={{ 
//             marginTop: '15px', 
//             padding: '10px 15px', 
//             background: '#fef3c7', 
//             borderRadius: '4px', 
//             borderLeft: '4px solid #f59e0b',
//             fontSize: '14px',
//             color: '#92400e'
//           }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//               <div style={{ 
//                 width: '20px', 
//                 height: '20px', 
//                 background: '#fef3c7', 
//                 border: '1px solid #f59e0b',
//                 borderRadius: '3px',
//                 flexShrink: 0
//               }}></div>
//               <div>Joint probabilities (highlighted) sum to {total.toFixed(3)}</div>
//             </div>
//           </div>
//         )}
        
//         <div style={{ marginTop: '15px', padding: '12px', background: '#f1f5f9', borderRadius: '4px', fontSize: '14px', color: '#475569' }}>
//           <strong>How to use:</strong>
//           <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
//             <li><strong>Direct Entry:</strong> Enter the four joint probabilities directly in the center cells. They must sum to 1.</li>
//             <li><strong>From Marginals:</strong> Enter marginal probabilities (P({eventAName}), P({eventBName})) AND one joint probability (e.g., P({eventAName}∩{eventBName})), then click "Calculate from Marginals" to compute the remaining three.</li>
//             <li><strong>Auto-calculation:</strong> When you enter 2 out of 3 values in any row or column, the third is automatically calculated.</li>
//             <li><strong>Complements:</strong> When you enter a marginal (e.g., P({eventAName})), its complement (P({eventAName}<sup>c</sup>)) is automatically calculated.</li>
//           </ul>
//         </div>
//         </div>

//         <div style={{ flex: '0 0 30%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
//           <div style={{ 
//             background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', 
//             color: 'white', 
//             padding: '20px', 
//             borderRadius: '8px',
//             boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//           }}>
//             <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 'bold' }}>What is Joint Probability?</h3>
//             <p style={{ margin: '0 0 10px 0', fontSize: '14px', lineHeight: '1.6' }}>
//               Joint probability measures the likelihood that two events occur together. For events {eventAName} and {eventBName}, 
//               P({eventAName}∩{eventBName}) represents the probability that both happen simultaneously.
//             </p>
//           </div>

//           <div style={{ 
//             background: '#f8fafc', 
//             border: '2px solid #e2e8f0',
//             padding: '16px', 
//             borderRadius: '8px'
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#1e3a8a' }}>Key Concepts</h4>
//             <div style={{ fontSize: '13px', lineHeight: '1.7', color: '#475569' }}>
//               <p style={{ margin: '0 0 10px 0' }}>
//                 <strong>Sample Space:</strong> All four joint probabilities represent mutually exclusive outcomes that cover the entire sample space.
//               </p>
//               <p style={{ margin: '0 0 10px 0' }}>
//                 <strong>Marginal Probabilities:</strong> The sum of joint probabilities across a row or column gives the probability of a single event.
//               </p>
//               <p style={{ margin: '0' }}>
//                 <strong>Complement:</strong> P({eventAName}<sup>c</sup>) = 1 - P({eventAName}) represents the probability that {eventAName} does NOT occur.
//               </p>
//             </div>
//           </div>

//           <div style={{ 
//             background: '#dbeafe', 
//             border: '2px solid #3b82f6',
//             borderLeft: '4px solid #1e3a8a',
//             padding: '16px', 
//             borderRadius: '8px'
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#1e3a8a' }}>The Law of Total Probability</h4>
//             <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#1e40af', margin: 0 }}>
//               The four joint probabilities partition the sample space into mutually exclusive and exhaustive events. Therefore, they must sum to exactly 1.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';

export default function JointProbability2x2Table() {
  const [eventAName, setEventAName] = useState('A');
  const [eventBName, setEventBName] = useState('B');
  
  const [probAB, setProbAB] = useState('');
  const [probANotB, setProbANotB] = useState('');
  const [probNotAB, setProbNotAB] = useState('');
  const [probNotANotB, setProbNotANotB] = useState('');
  
  const [marginalA, setMarginalA] = useState('');
  const [marginalNotA, setMarginalNotA] = useState('');
  const [marginalB, setMarginalB] = useState('');
  const [marginalNotB, setMarginalNotB] = useState('');
  const [jointAB, setJointAB] = useState('');
  
  const [marginalAManual, setMarginalAManual] = useState(false);
  const [marginalNotAManual, setMarginalNotAManual] = useState(false);
  const [marginalBManual, setMarginalBManual] = useState(false);
  const [marginalNotBManual, setMarginalNotBManual] = useState(false);

  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  const parseProb = (val) => val === '' ? null : parseFloat(val);

  const validateNumericInput = (value) => {
    if (value === '') return true;
    // Allow digits, single decimal point, and values like "0." or ".5"
    return /^(\d*\.?\d*)$/.test(value);
  };

  useEffect(() => {
    const pAB = parseProb(probAB);
    const pANotB = parseProb(probANotB);
    const pNotAB = parseProb(probNotAB);
    const pNotANotB = parseProb(probNotANotB);

    // Auto-calculate complement marginals
    if (marginalA !== '' && marginalNotA === '' && !marginalNotAManual) {
      const mA = parseFloat(marginalA);
      if (!isNaN(mA) && mA >= 0 && mA <= 1) {
        const complement = 1 - mA;
        if (complement >= 0 && complement <= 1) {
          setMarginalNotA(complement.toFixed(3));
        }
      }
    }
    
    if (marginalNotA !== '' && marginalA === '' && !marginalAManual) {
      const mNotA = parseFloat(marginalNotA);
      if (!isNaN(mNotA) && mNotA >= 0 && mNotA <= 1) {
        const complement = 1 - mNotA;
        if (complement >= 0 && complement <= 1) {
          setMarginalA(complement.toFixed(3));
        }
      }
    }
    
    if (marginalB !== '' && marginalNotB === '' && !marginalNotBManual) {
      const mB = parseFloat(marginalB);
      if (!isNaN(mB) && mB >= 0 && mB <= 1) {
        const complement = 1 - mB;
        if (complement >= 0 && complement <= 1) {
          setMarginalNotB(complement.toFixed(3));
        }
      }
    }
    
    if (marginalNotB !== '' && marginalB === '' && !marginalBManual) {
      const mNotB = parseFloat(marginalNotB);
      if (!isNaN(mNotB) && mNotB >= 0 && mNotB <= 1) {
        const complement = 1 - mNotB;
        if (complement >= 0 && complement <= 1) {
          setMarginalB(complement.toFixed(3));
        }
      }
    }

    // Auto-calculate marginal A when both cells in column are filled and not manually entered
    if (pAB !== null && pANotB !== null && !isNaN(pAB) && !isNaN(pANotB) && !marginalAManual) {
      const sum = pAB + pANotB;
      setMarginalA(sum.toFixed(3));
    }

    // Auto-calculate marginal Ā when both cells in column are filled and not manually entered
    if (pNotAB !== null && pNotANotB !== null && !isNaN(pNotAB) && !isNaN(pNotANotB) && !marginalNotAManual) {
      const sum = pNotAB + pNotANotB;
      setMarginalNotA(sum.toFixed(3));
    }

    // Auto-calculate marginal B when both cells in row are filled and not manually entered
    if (pAB !== null && pNotAB !== null && !isNaN(pAB) && !isNaN(pNotAB) && !marginalBManual) {
      const sum = pAB + pNotAB;
      setMarginalB(sum.toFixed(3));
    }

    // Auto-calculate marginal B^c when both cells in row are filled and not manually entered
    if (pANotB !== null && pNotANotB !== null && !isNaN(pANotB) && !isNaN(pNotANotB) && !marginalNotBManual) {
      const sum = pANotB + pNotANotB;
      setMarginalNotB(sum.toFixed(3));
    }

    // Auto-calculate cells when marginal and one cell are filled
    const mA = parseProb(marginalA);
    const mNotA = parseProb(marginalNotA);
    const mB = parseProb(marginalB);
    const mNotB = parseProb(marginalNotB);

    // Column A calculations
    if (mA !== null && pAB !== null && !isNaN(mA) && !isNaN(pAB) && probANotB === '') {
      const calc = mA - pAB;
      if (calc >= -0.001 && calc <= 1.001) setProbANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }
    if (mA !== null && pANotB !== null && !isNaN(mA) && !isNaN(pANotB) && probAB === '') {
      const calc = mA - pANotB;
      if (calc >= -0.001 && calc <= 1.001) setProbAB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }

    // Column Ā calculations
    if (mNotA !== null && pNotAB !== null && !isNaN(mNotA) && !isNaN(pNotAB) && probNotANotB === '') {
      const calc = mNotA - pNotAB;
      if (calc >= -0.001 && calc <= 1.001) setProbNotANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }
    if (mNotA !== null && pNotANotB !== null && !isNaN(mNotA) && !isNaN(pNotANotB) && probNotAB === '') {
      const calc = mNotA - pNotANotB;
      if (calc >= -0.001 && calc <= 1.001) setProbNotAB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }

    // Row B calculations
    if (mB !== null && pAB !== null && !isNaN(mB) && !isNaN(pAB) && probNotAB === '') {
      const calc = mB - pAB;
      if (calc >= -0.001 && calc <= 1.001) setProbNotAB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }
    if (mB !== null && pNotAB !== null && !isNaN(mB) && !isNaN(pNotAB) && probAB === '') {
      const calc = mB - pNotAB;
      if (calc >= -0.001 && calc <= 1.001) setProbAB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }

    // Row B^c calculations
    if (mNotB !== null && pANotB !== null && !isNaN(mNotB) && !isNaN(pANotB) && probNotANotB === '') {
      const calc = mNotB - pANotB;
      if (calc >= -0.001 && calc <= 1.001) setProbNotANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }
    if (mNotB !== null && pNotANotB !== null && !isNaN(mNotB) && !isNaN(pNotANotB) && probANotB === '') {
      const calc = mNotB - pNotANotB;
      if (calc >= -0.001 && calc <= 1.001) setProbANotB(Math.max(0, Math.min(1, calc)).toFixed(3));
    }
  }, [probAB, probANotB, probNotAB, probNotANotB, marginalA, marginalNotA, marginalB, marginalNotB, marginalAManual, marginalNotAManual, marginalBManual, marginalNotBManual]);

  const computeFromMarginals = () => {
    let pA, pB, pAB;
    
    if (marginalA !== '') {
      pA = parseFloat(marginalA);
    } else if (marginalNotA !== '') {
      pA = 1 - parseFloat(marginalNotA);
    } else {
      return;
    }
    
    if (marginalB !== '') {
      pB = parseFloat(marginalB);
    } else if (marginalNotB !== '') {
      pB = 1 - parseFloat(marginalNotB);
    } else {
      return;
    }
    
    if (probAB !== '') {
      pAB = parseFloat(probAB);
    } else if (probANotB !== '') {
      pAB = pA - parseFloat(probANotB);
    } else if (probNotAB !== '') {
      pAB = pB - parseFloat(probNotAB);
    } else if (probNotANotB !== '') {
      pAB = pA + pB - 1 + parseFloat(probNotANotB);
    } else {
      return;
    }
    
    if (isNaN(pA) || isNaN(pB) || isNaN(pAB)) return;
    if (pAB > pA || pAB > pB || pAB < 0) return;
    
    setProbAB(pAB.toFixed(3));
    setProbANotB((pA - pAB).toFixed(3));
    setProbNotAB((pB - pAB).toFixed(3));
    setProbNotANotB((1 - pA - pB + pAB).toFixed(3));
  };

  const probA = (parseProb(probAB) || 0) + (parseProb(probANotB) || 0);
  const probNotA = (parseProb(probNotAB) || 0) + (parseProb(probNotANotB) || 0);
  const probB = (parseProb(probAB) || 0) + (parseProb(probNotAB) || 0);
  const probNotB = (parseProb(probANotB) || 0) + (parseProb(probNotANotB) || 0);
  const total = (parseProb(probAB) || 0) + (parseProb(probANotB) || 0) + (parseProb(probNotAB) || 0) + (parseProb(probNotANotB) || 0);

  const hasData = probAB !== '' || probANotB !== '' || probNotAB !== '' || probNotANotB !== '';
  const allInnerCellsFilled = probAB !== '' && probANotB !== '' && probNotAB !== '' && probNotANotB !== '';
  const innerCellStyle = allInnerCellsFilled ? { background: '#fef3c7' } : {};

  const validateSum = () => {
    const vals = [probAB, probANotB, probNotAB, probNotANotB];
    
    // Check if joint probabilities exceed their marginals
    const pAB = parseProb(probAB);
    const pANotB = parseProb(probANotB);
    const pNotAB = parseProb(probNotAB);
    const pNotANotB = parseProb(probNotANotB);
    const mA = parseProb(marginalA);
    const mNotA = parseProb(marginalNotA);
    const mB = parseProb(marginalB);
    const mNotB = parseProb(marginalNotB);
    
    if (pAB !== null && mA !== null && pAB > mA) {
      return {
        valid: false,
        message: `P(${eventAName}∩${eventBName}) = ${pAB.toFixed(3)} cannot exceed P(${eventAName}) = ${mA.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    if (pAB !== null && mB !== null && pAB > mB) {
      return {
        valid: false,
        message: `P(${eventAName}∩${eventBName}) = ${pAB.toFixed(3)} cannot exceed P(${eventBName}) = ${mB.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    if (pANotB !== null && mA !== null && pANotB > mA) {
      return {
        valid: false,
        message: `P(${eventAName}∩${eventBName}^c) = ${pANotB.toFixed(3)} cannot exceed P(${eventAName}) = ${mA.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    if (pANotB !== null && mNotB !== null && pANotB > mNotB) {
      return {
        valid: false,
        message: `P(${eventAName}∩${eventBName}^c) = ${pANotB.toFixed(3)} cannot exceed P(${eventBName}^c) = ${mNotB.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    if (pNotAB !== null && mNotA !== null && pNotAB > mNotA) {
      return {
        valid: false,
        message: `P(${eventAName}^c∩${eventBName}) = ${pNotAB.toFixed(3)} cannot exceed P(${eventAName}^c) = ${mNotA.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    if (pNotAB !== null && mB !== null && pNotAB > mB) {
      return {
        valid: false,
        message: `P(${eventAName}^c∩${eventBName}) = ${pNotAB.toFixed(3)} cannot exceed P(${eventBName}) = ${mB.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    if (pNotANotB !== null && mNotA !== null && pNotANotB > mNotA) {
      return {
        valid: false,
        message: `P(${eventAName}^c∩${eventBName}^c) = ${pNotANotB.toFixed(3)} cannot exceed P(${eventAName}^c) = ${mNotA.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    if (pNotANotB !== null && mNotB !== null && pNotANotB > mNotB) {
      return {
        valid: false,
        message: `P(${eventAName}^c∩${eventBName}^c) = ${pNotANotB.toFixed(3)} cannot exceed P(${eventBName}^c) = ${mNotB.toFixed(3)}.`,
        type: 'error'
      };
    }
    
    // Validate individual marginals are between 0 and 1
    if (marginalA !== '') {
      const mA = parseFloat(marginalA);
      if (mA < 0 || mA > 1) {
        return {
          valid: false,
          message: `P(${eventAName}) = ${mA.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
          type: 'error'
        };
      }
    }
    
    if (marginalNotA !== '') {
      const mNotA = parseFloat(marginalNotA);
      if (mNotA < 0 || mNotA > 1) {
        return {
          valid: false,
          message: `P(${eventAName}^c) = ${mNotA.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
          type: 'error'
        };
      }
    }
    
    if (marginalB !== '') {
      const mB = parseFloat(marginalB);
      if (mB < 0 || mB > 1) {
        return {
          valid: false,
          message: `P(${eventBName}) = ${mB.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
          type: 'error'
        };
      }
    }
    
    if (marginalNotB !== '') {
      const mNotB = parseFloat(marginalNotB);
      if (mNotB < 0 || mNotB > 1) {
        return {
          valid: false,
          message: `P(${eventBName}^c) = ${mNotB.toFixed(3)} is invalid. Probabilities must be between 0 and 1.`,
          type: 'error'
        };
      }
    }
    
    // Check if manually entered marginals conflict with filled cells
    if (marginalAManual && pAB !== null && pANotB !== null) {
      const cellSum = pAB + pANotB;
      const mA = parseFloat(marginalA);
      if (Math.abs(cellSum - mA) > 0.001) {
        return {
          valid: false,
          message: `P(${eventAName}) entered as ${mA.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
          type: 'error'
        };
      }
    }
    
    if (marginalNotAManual && pNotAB !== null && pNotANotB !== null) {
      const cellSum = pNotAB + pNotANotB;
      const mNotA = parseFloat(marginalNotA);
      if (Math.abs(cellSum - mNotA) > 0.001) {
        return {
          valid: false,
          message: `P(${eventAName}^c) entered as ${mNotA.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
          type: 'error'
        };
      }
    }
    
    if (marginalBManual && pAB !== null && pNotAB !== null) {
      const cellSum = pAB + pNotAB;
      const mB = parseFloat(marginalB);
      if (Math.abs(cellSum - mB) > 0.001) {
        return {
          valid: false,
          message: `P(${eventBName}) entered as ${mB.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
          type: 'error'
        };
      }
    }
    
    if (marginalNotBManual && pANotB !== null && pNotANotB !== null) {
      const cellSum = pANotB + pNotANotB;
      const mNotB = parseFloat(marginalNotB);
      if (Math.abs(cellSum - mNotB) > 0.001) {
        return {
          valid: false,
          message: `P(${eventBName}^c) entered as ${mNotB.toFixed(3)} but sum of cells = ${cellSum.toFixed(3)}. Marginal must equal the sum of its cells.`,
          type: 'error'
        };
      }
    }
    
    if (marginalA !== '' && marginalNotA !== '') {
      const sumA = parseFloat(marginalA) + parseFloat(marginalNotA);
      if (Math.abs(sumA - 1) > 0.002) {
        return {
          valid: false,
          message: `P(${eventAName}) + P(${eventAName}^c) = ${sumA.toFixed(3)}, but must equal 1.000.`,
          type: 'error'
        };
      }
    }
    
    if (marginalB !== '' && marginalNotB !== '') {
      const sumB = parseFloat(marginalB) + parseFloat(marginalNotB);
      if (Math.abs(sumB - 1) > 0.002) {
        return {
          valid: false,
          message: `P(${eventBName}) + P(${eventBName}^c) = ${sumB.toFixed(3)}, but must equal 1.000.`,
          type: 'error'
        };
      }
    }
    
    if (total > 1.002) {
      const excess = (total - 1).toFixed(3);
      return { 
        valid: false, 
        message: `Sum of joint probabilities is ${total.toFixed(3)}, which exceeds 1 by ${excess}. The four joint probabilities must sum to exactly 1.`,
        type: 'error'
      };
    }
    
    return { valid: true, message: '', type: '' };
  };

  const validation = validateSum();

  const generateRandom = () => {
    const vals = [];
    let remaining = 1;
    for (let i = 0; i < 3; i++) {
      const val = Math.random() * remaining;
      vals.push(val);
      remaining -= val;
    }
    vals.push(remaining);
    
    setProbAB(vals[0].toFixed(3));
    setProbANotB(vals[1].toFixed(3));
    setProbNotAB(vals[2].toFixed(3));
    setProbNotANotB(vals[3].toFixed(3));
    
    setMarginalA('');
    setMarginalNotA('');
    setMarginalB('');
    setMarginalNotB('');
    setJointAB('');
    setMarginalAManual(false);
    setMarginalNotAManual(false);
    setMarginalBManual(false);
    setMarginalNotBManual(false);
  };

  const loadExample = () => {
    setProbAB('0.3');
    setProbANotB('0.2');
    setProbNotAB('0.15');
    setProbNotANotB('0.35');
    
    setMarginalA('');
    setMarginalNotA('');
    setMarginalB('');
    setMarginalNotB('');
    setJointAB('');
    setMarginalAManual(false);
    setMarginalNotAManual(false);
    setMarginalBManual(false);
    setMarginalNotBManual(false);
  };

  const clearAll = () => {
    setProbAB('');
    setProbANotB('');
    setProbNotAB('');
    setProbNotANotB('');
    setMarginalA('');
    setMarginalNotA('');
    setMarginalB('');
    setMarginalNotB('');
    setJointAB('');
    setEventAName('A');
    setEventBName('B');
    setMarginalAManual(false);
    setMarginalNotAManual(false);
    setMarginalBManual(false);
    setMarginalNotBManual(false);
  };

  const getMessageStyle = (type) => {
    switch(type) {
      case 'error':
        return { background: '#fee2e2', border: '1px solid #ef4444', color: '#991b1b' };
      case 'warning':
        return { background: '#fef3c7', border: '1px solid #f59e0b', color: '#92400e' };
      case 'info':
        return { background: '#dbeafe', border: '1px solid #3b82f6', color: '#1e3a8a' };
      default:
        return {};
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1100px', margin: '0 auto', background: '#f8f9fa' }}>
      {/* <h2 style={{ marginBottom: '25px', color: '#1e3a8a' }}>Joint Probability Table Calculator</h2> */}
      
      <div style={{ marginBottom: '25px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
          <label style={{ marginRight: '8px', color: '#334155', fontWeight: '500' }}>Event 1:</label>
          <input 
            type="text" 
            value={eventAName} 
            onChange={(e) => setEventAName(e.target.value)}
            style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label style={{ marginRight: '8px', color: '#334155', fontWeight: '500' }}>Event 2:</label>
          <input 
            type="text" 
            value={eventBName} 
            onChange={(e) => setEventBName(e.target.value)}
            style={{ padding: '6px 10px', border: '1px solid #cbd5e1', borderRadius: '4px' }}
          />
        </div>
        <button 
          onClick={generateRandom}
          style={{ padding: '7px 14px', border: '1px solid #3b82f6', background: '#3b82f6', color: 'white', cursor: 'pointer', borderRadius: '4px' }}
        >
          Generate Random Example
        </button>
      </div>
      
      <div style={{ marginBottom: '25px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={computeFromMarginals}
          style={{ padding: '7px 14px', border: '1px solid #16a34a', background: '#16a34a', color: 'white', cursor: 'pointer', borderRadius: '4px' }}
        >
          Calculate from Marginals
        </button>
        <button 
          onClick={clearAll}
          style={{ padding: '7px 14px', border: '1px solid #94a3b8', background: '#f1f5f9', color: '#334155', cursor: 'pointer', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
          </svg>
          Clear All
        </button>
      </div>

      {validation.message && (
        <div style={{ 
          padding: '12px 15px', 
          borderRadius: '4px', 
          marginBottom: '20px',
          ...getMessageStyle(validation.type)
        }}>
          <strong>{validation.type === 'error' ? '⚠️ Invalid: ' : validation.type === 'warning' ? '⚠️ Warning: ' : 'ℹ️ '}</strong>
          {validation.message}
        </div>
      )}

      <div style={{ marginBottom: '30px', background: 'white', padding: '20px', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', gap: '20px' }}>
        <div style={{ flex: '0 0 68%' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #1e3a8a' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe' }}></th>
              <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', color: '#1e3a8a' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>{eventAName}</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #1e3a8a', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#1e3a8a',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('eventA')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'eventA' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold' }}>Event {eventAName}</div>
                        <div style={{ marginTop: '4px' }}>Column for outcomes where {eventAName} occurs</div>
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </th>
              <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', color: '#1e3a8a' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>{eventAName}<sup>c</sup></span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #1e3a8a', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#1e3a8a',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('eventNotA')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'eventNotA' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold' }}>Event {eventAName}<sup>c</sup> (Complement)</div>
                        <div style={{ marginTop: '4px' }}>Column for outcomes where {eventAName} does NOT occur</div>
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </th>
              <th style={{ border: '1px solid #94a3b8', padding: '12px', background: '#bfdbfe', color: '#1e3a8a', fontWeight: 'bold' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>Marginal<br/>P({eventBName})</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #1e3a8a', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#1e3a8a',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('marginalBHeader')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'marginalBHeader' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold' }}>Marginal Probabilities for {eventBName}</div>
                        <div style={{ marginTop: '4px' }}>Sum of probabilities in each row</div>
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', fontWeight: 'bold', color: '#1e3a8a' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>{eventBName}</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #1e3a8a', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#1e3a8a',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('eventB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'eventB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold' }}>Event {eventBName}</div>
                        <div style={{ marginTop: '4px' }}>Row for outcomes where {eventBName} occurs</div>
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>P({eventAName}∩{eventBName})</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('pAB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'pAB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
                        <div>Both {eventAName} and {eventBName} occur</div>
                        {probAB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probAB}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={probAB}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setProbAB(e.target.value);
                      setJointAB(e.target.value);
                      setMarginalAManual(false);
                      setMarginalBManual(false);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center'
                  }}
                  placeholder="0.000"
                />
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>P({eventAName}<sup>c</sup>∩{eventBName})</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('pNotAB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'pNotAB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
                        <div>{eventAName} does NOT occur and {eventBName} occurs</div>
                        {probNotAB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probNotAB}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={probNotAB}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setProbNotAB(e.target.value);
                      setMarginalNotAManual(false);
                      setMarginalBManual(false);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center'
                  }}
                  placeholder="0.000"
                />
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
                  <span>P({eventBName})</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('marginalB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'marginalB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
                        <div>Probability that {eventBName} occurs</div>
                        <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of row: P({eventAName}∩{eventBName}) + P({eventAName}<sup>c</sup>∩{eventBName})</div>
                        {marginalB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalB}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={marginalB}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setMarginalB(e.target.value);
                      setMarginalBManual(true);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center',
                    background: '#dbeafe'
                  }}
                  placeholder="0.000"
                />
                {hasData && marginalB === '' && (
                  <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
                    = {probB.toFixed(3)}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#dbeafe', fontWeight: 'bold', color: '#1e3a8a' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>{eventBName}<sup>c</sup></span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #1e3a8a', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#1e3a8a',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('eventNotB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'eventNotB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold' }}>Event {eventBName}<sup>c</sup> (Complement)</div>
                        <div style={{ marginTop: '4px' }}>Row for outcomes where {eventBName} does NOT occur</div>
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>P({eventAName}∩{eventBName}<sup>c</sup>)</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('pANotB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'pANotB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
                        <div>{eventAName} occurs and {eventBName} does NOT occur</div>
                        {probANotB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probANotB}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={probANotB}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setProbANotB(e.target.value);
                      setMarginalAManual(false);
                      setMarginalNotBManual(false);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center'
                  }}
                  placeholder="0.000"
                />
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', ...innerCellStyle }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>P({eventAName}<sup>c</sup>∩{eventBName}<sup>c</sup>)</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('pNotANotB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'pNotANotB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Joint Probability</div>
                        <div>Neither {eventAName} nor {eventBName} occur</div>
                        {probNotANotB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {probNotANotB}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={probNotANotB}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setProbNotANotB(e.target.value);
                      setMarginalNotAManual(false);
                      setMarginalNotBManual(false);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center'
                  }}
                  placeholder="0.000"
                />
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
                  <span>P({eventBName}<sup>c</sup>)</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('marginalNotB')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'marginalNotB' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
                        <div>Probability that {eventBName} does NOT occur</div>
                        <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of row: P({eventAName}∩{eventBName}<sup>c</sup>) + P({eventAName}<sup>c</sup>∩{eventBName}<sup>c</sup>)</div>
                        {marginalNotB !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalNotB}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={marginalNotB}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setMarginalNotB(e.target.value);
                      setMarginalNotBManual(true);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center',
                    background: '#dbeafe'
                  }}
                  placeholder="0.000"
                />
                {hasData && marginalNotB === '' && (
                  <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
                    = {probNotB.toFixed(3)}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', background: '#bfdbfe', fontWeight: 'bold', color: '#1e3a8a' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>Marginal<br/>P({eventAName})</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #1e3a8a', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#1e3a8a',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('marginalAHeader')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'marginalAHeader' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold' }}>Marginal Probabilities for {eventAName}</div>
                        <div style={{ marginTop: '4px' }}>Sum of probabilities in each column</div>
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
                  <span>P({eventAName})</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('marginalA')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'marginalA' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
                        <div>Probability that {eventAName} occurs</div>
                        <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of column: P({eventAName}∩{eventBName}) + P({eventAName}∩{eventBName}<sup>c</sup>)</div>
                        {marginalA !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalA}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={marginalA}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setMarginalA(e.target.value);
                      setMarginalAManual(true);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center',
                    background: '#dbeafe'
                  }}
                  placeholder="0.000"
                />
                {hasData && marginalA === '' && (
                  <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
                    = {probA.toFixed(3)}
                  </div>
                )}
              </td>
              <td style={{ border: '1px solid #94a3b8', padding: '12px', textAlign: 'center', background: '#eff6ff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontWeight: 'bold' }}>
                  <span>P({eventAName}<sup>c</sup>)</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #64748b', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#64748b',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('marginalNotA')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'marginalNotA' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Marginal Probability</div>
                        <div>Probability that {eventAName} does NOT occur</div>
                        <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>Sum of column: P({eventAName}<sup>c</sup>∩{eventBName}) + P({eventAName}<sup>c</sup>∩{eventBName}<sup>c</sup>)</div>
                        {marginalNotA !== '' && <div style={{ marginTop: '4px', color: '#60a5fa' }}>Current: {marginalNotA}</div>}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
                <input 
                  type="text" 
                  value={marginalNotA}
                  onChange={(e) => {
                    if (validateNumericInput(e.target.value)) {
                      setMarginalNotA(e.target.value);
                      setMarginalNotAManual(true);
                    }
                  }}
                  style={{ 
                    padding: '4px 8px', 
                    border: '1px solid #cbd5e1', 
                    width: '80px', 
                    borderRadius: '4px',
                    marginTop: '4px',
                    textAlign: 'center',
                    background: '#dbeafe'
                  }}
                  placeholder="0.000"
                />
                {hasData && marginalNotA === '' && (
                  <div style={{ fontSize: '12px', marginTop: '4px', color: '#64748b' }}>
                    = {probNotA.toFixed(3)}
                  </div>
                )}
              </td>
              <td style={{ 
                border: '1px solid #94a3b8', 
                padding: '12px', 
                textAlign: 'center', 
                background: '#bbf7d0',
                fontWeight: 'bold',
                color: '#1e3a8a'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>Total<br/>1.000</span>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      borderRadius: '50%', 
                      border: '1px solid #1e3a8a', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '11px',
                      color: '#1e3a8a',
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={() => setHoveredTooltip('total')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    ?
                    {hoveredTooltip === 'total' && (
                      <div style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '8px',
                        background: '#1e293b',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        pointerEvents: 'none'
                      }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Total Probability</div>
                        <div>All joint probabilities must sum to 1</div>
                        <div style={{ marginTop: '4px', fontSize: '12px', color: '#94a3b8' }}>This represents the entire sample space</div>
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #1e293b'
                        }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        
        {allInnerCellsFilled && (
          <div style={{ 
            marginTop: '15px', 
            padding: '10px 15px', 
            background: '#fef3c7', 
            borderRadius: '4px', 
            borderLeft: '4px solid #f59e0b',
            fontSize: '14px',
            color: '#92400e'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ 
                width: '20px', 
                height: '20px', 
                background: '#fef3c7', 
                border: '1px solid #f59e0b',
                borderRadius: '3px',
                flexShrink: 0
              }}></div>
              <div>Joint probabilities (highlighted) sum to {total.toFixed(3)}</div>
            </div>
          </div>
        )}
        
        <div style={{ marginTop: '15px', padding: '12px', background: '#f1f5f9', borderRadius: '4px', fontSize: '14px', color: '#475569' }}>
          <strong>How to use:</strong>
          <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
            <li><strong>Direct Entry:</strong> Enter the four joint probabilities directly in the center cells. They must sum to 1.</li>
            <li><strong>From Marginals:</strong> Enter marginal probabilities (P({eventAName}), P({eventBName})) AND one joint probability (e.g., P({eventAName}∩{eventBName})), then click &quot;Calculate from Marginals&quot; to compute the remaining three.</li>
            <li><strong>Auto-calculation:</strong> When you enter 2 out of 3 values in any row or column, the third is automatically calculated.</li>
            <li><strong>Complements:</strong> When you enter a marginal (e.g., P({eventAName})), its complement (P({eventAName}<sup>c</sup>)) is automatically calculated.</li>
          </ul>
        </div>
        </div>

        <div style={{ flex: '0 0 30%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 'bold' }}>What is Joint Probability?</h3>
            <p style={{ margin: '0 0 10px 0', fontSize: '14px', lineHeight: '1.6' }}>
              Joint probability measures the likelihood that two events occur together. For events {eventAName} and {eventBName}, 
              P({eventAName}∩{eventBName}) represents the probability that both happen simultaneously.
            </p>
          </div>

          <div style={{ 
            background: '#f8fafc', 
            border: '2px solid #e2e8f0',
            padding: '16px', 
            borderRadius: '8px'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#1e3a8a' }}>Key Concepts</h4>
            <div style={{ fontSize: '13px', lineHeight: '1.7', color: '#475569' }}>
              <p style={{ margin: '0 0 10px 0' }}>
                <strong>Sample Space:</strong> All four joint probabilities represent mutually exclusive outcomes that cover the entire sample space.
              </p>
              <p style={{ margin: '0 0 10px 0' }}>
                <strong>Marginal Probabilities:</strong> The sum of joint probabilities across a row or column gives the probability of a single event.
              </p>
              <p style={{ margin: '0' }}>
                <strong>Complement:</strong> P({eventAName}<sup>c</sup>) = 1 - P({eventAName}) represents the probability that {eventAName} does NOT occur.
              </p>
            </div>
          </div>

          <div style={{ 
            background: '#dbeafe', 
            border: '2px solid #3b82f6',
            borderLeft: '4px solid #1e3a8a',
            padding: '16px', 
            borderRadius: '8px'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#1e3a8a' }}>The Law of Total Probability</h4>
            <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#1e40af', margin: 0 }}>
              The four joint probabilities partition the sample space into mutually exclusive and exhaustive events. Therefore, they must sum to exactly 1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}