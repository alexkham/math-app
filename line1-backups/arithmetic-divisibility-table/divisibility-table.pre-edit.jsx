// // import React, { useState } from 'react';

// // const DivisibilityTable = () => {
// //   const [selectedDivisors, setSelectedDivisors] = useState([]);
// //   const [hoveredNumber, setHoveredNumber] = useState(null);
// //   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, height: 0 });

// //   const numbers = Array.from({ length: 101 }, (_, i) => i);
// //   const divisors = Array.from({ length: 12 }, (_, i) => i + 1);

// //   const toggleDivisor = (d) => {
// //     setSelectedDivisors(prev =>
// //       prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
// //     );
// //   };

// //   const isHighlighted = (num) => {
// //     if (selectedDivisors.length === 0) return false;
// //     return selectedDivisors.some(d => num % d === 0);
// //   };

// //   const getDivisorsOf = (num) => {
// //     if (num === 0) return divisors;
// //     return divisors.filter(d => num % d === 0);
// //   };

// //   const getExplanation = (num, divisor) => {
// //     if (num === 0) return "0 ÷ anything = 0";
    
// //     switch (divisor) {
// //       case 1:
// //         return "Every number ÷1";
// //       case 2:
// //         return `Last digit ${num % 10} is even`;
// //       case 3:
// //         const ds3 = String(num).split('').join('+');
// //         const sum3 = String(num).split('').reduce((s, d) => s + parseInt(d), 0);
// //         return `${ds3}=${sum3}, ÷3✓`;
// //       case 4:
// //         return `${num % 100} ÷ 4 = ${(num % 100) / 4}`;
// //       case 5:
// //         return `Ends in ${num % 10}`;
// //       case 6:
// //         return "÷2 and ÷3 both work";
// //       case 7:
// //         return `${num} ÷ 7 = ${num / 7}`;
// //       case 8:
// //         return `${num % 1000} ÷ 8 = ${(num % 1000) / 8}`;
// //       case 9:
// //         const ds9 = String(num).split('').join('+');
// //         const sum9 = String(num).split('').reduce((s, d) => s + parseInt(d), 0);
// //         return `${ds9}=${sum9}, ÷9✓`;
// //       case 10:
// //         return "Ends in 0";
// //       case 11:
// //         const digits = String(num).split('').map(Number);
// //         const altSum = digits.reduce((s, d, i) => s + (i % 2 === 0 ? d : -d), 0);
// //         return `Alt sum = ${altSum}, ÷11✓`;
// //       case 12:
// //         return "÷3 and ÷4 both work";
// //       default:
// //         return "";
// //     }
// //   };

// //   const handleMouseEnter = (num, e) => {
// //     const rect = e.target.getBoundingClientRect();
// //     setHoveredNumber(num);
// //     setTooltipPos({
// //       x: rect.left + rect.width / 2,
// //       y: rect.top,
// //       bottom: rect.bottom,
// //       height: rect.height
// //     });
// //   };

// //   const handleMouseLeave = () => {
// //     setHoveredNumber(null);
// //   };

// //   const divisorsOfHovered = hoveredNumber !== null ? getDivisorsOf(hoveredNumber) : [];
// //   const isZero = hoveredNumber === 0;

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.inner}>
// //         {/* Header */}
// //         <header style={styles.header}>
// //           {/* <h1 style={styles.title}>Divisibility Table</h1> */}
// //           <p style={styles.subtitle}>Select divisors to highlight • Hover any number for details</p>
// //         </header>

// //         {/* Divisor Selector */}
// //         <div style={styles.selectorCard}>
// //           <p style={styles.usageHint}>
// //             Click to select divisors • Click again to deselect • Mix and match!
// //           </p>
// //           <div style={styles.divisorRow}>
// //             {divisors.map(d => (
// //               <button
// //                 key={d}
// //                 onClick={() => toggleDivisor(d)}
// //                 style={{
// //                   ...styles.divisorBtn,
// //                   ...(selectedDivisors.includes(d) ? styles.divisorBtnActive : {})
// //                 }}
// //               >
// //                 ÷{d}
// //               </button>
// //             ))}
// //             {selectedDivisors.length > 0 && (
// //               <button 
// //                 onClick={() => setSelectedDivisors([])} 
// //                 style={styles.clearBtn}
// //               >
// //                 ✕
// //               </button>
// //             )}
// //           </div>
// //         </div>

// //         {/* Number Grid */}
// //         <div style={styles.gridCard}>
// //           <div style={styles.grid}>
// //             {numbers.map(num => (
// //               <div
// //                 key={num}
// //                 onMouseEnter={(e) => handleMouseEnter(num, e)}
// //                 onMouseLeave={handleMouseLeave}
// //                 style={{
// //                   ...styles.cell,
// //                   ...(isHighlighted(num) ? styles.cellHighlighted : {}),
// //                   ...(hoveredNumber === num ? styles.cellHovered : {})
// //                 }}
// //               >
// //                 {num}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Tooltip */}
// //         {hoveredNumber !== null && (
// //           <div
// //             style={{
// //               ...styles.tooltip,
// //               left: tooltipPos.x,
// //               ...(isZero 
// //                 ? { top: tooltipPos.bottom, transform: 'translate(-50%, 14px)' }
// //                 : { top: tooltipPos.y, transform: 'translate(-50%, -100%) translateY(-14px)' }
// //               )
// //             }}
// //           >
// //             {isZero && <div style={styles.tooltipArrowUp} />}
// //             <div style={styles.tooltipContent}>
// //               <div style={styles.tooltipHeader}>
// //                 <span style={styles.tooltipNumber}>{hoveredNumber}</span>
// //                 <span style={styles.tooltipTitle}>
// //                   {hoveredNumber === 0 
// //                     ? 'Divisible by all' 
// //                     : hoveredNumber === 1 
// //                       ? 'Only ÷1'
// //                       : `Divisible by: ${divisorsOfHovered.join(', ')}`
// //                   }
// //                 </span>
// //               </div>
// //               <div style={styles.tooltipBody}>
// //                 {divisorsOfHovered.map(d => (
// //                   <div key={d} style={styles.tooltipRow}>
// //                     <span style={styles.tooltipDivisor}>÷{d}</span>
// //                     <span style={styles.tooltipExplanation}>
// //                       {getExplanation(hoveredNumber, d)}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             {!isZero && <div style={styles.tooltipArrow} />}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     minHeight: '100vh',
// //     background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
// //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// //     color: '#1e3a5f',
// //     padding: '20px',
// //   },
// //   inner: {
// //     maxWidth: '1000px',
// //     margin: '0 auto',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     marginBottom: '16px',
// //   },
// //   title: {
// //     fontSize: '1.6rem',
// //     fontWeight: '700',
// //     color: '#1e3a5f',
// //     margin: '0 0 4px 0',
// //   },
// //   subtitle: {
// //     fontSize: '0.9rem',
// //     color: '#64748b',
// //     margin: 0,
// //   },
// //   selectorCard: {
// //     background: '#fff',
// //     borderRadius: '12px',
// //     padding: '12px 16px',
// //     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
// //     marginBottom: '16px',
// //   },
// //   usageHint: {
// //     textAlign: 'center',
// //     fontSize: '0.8rem',
// //     color: '#94a3b8',
// //     margin: '0 0 10px 0',
// //     fontStyle: 'italic',
// //   },
// //   divisorRow: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     flexWrap: 'wrap',
// //     gap: '6px',
// //   },
// //   divisorBtn: {
// //     padding: '6px 12px',
// //     fontSize: '0.85rem',
// //     fontWeight: '600',
// //     background: '#f8fafc',
// //     border: '2px solid #e2e8f0',
// //     borderRadius: '8px',
// //     color: '#64748b',
// //     cursor: 'pointer',
// //     transition: 'all 0.15s',
// //     fontFamily: 'inherit',
// //   },
// //   divisorBtnActive: {
// //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     borderColor: '#3b82f6',
// //     color: '#fff',
// //     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
// //   },
// //   clearBtn: {
// //     padding: '6px 10px',
// //     fontSize: '0.85rem',
// //     fontWeight: '600',
// //     background: '#fee2e2',
// //     border: '2px solid #fecaca',
// //     borderRadius: '8px',
// //     color: '#dc2626',
// //     cursor: 'pointer',
// //     fontFamily: 'inherit',
// //     marginLeft: '8px',
// //   },
// //   gridCard: {
// //     background: '#fff',
// //     borderRadius: '12px',
// //     padding: '16px',
// //     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
// //   },
// //   grid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(17, 1fr)',
// //     gap: '4px',
// //   },
// //   cell: {
// //     aspectRatio: '1',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     fontSize: '0.75rem',
// //     fontWeight: '500',
// //     color: '#64748b',
// //     background: '#f8fafc',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     transition: 'all 0.15s',
// //     border: '1px solid transparent',
// //   },
// //   cellHighlighted: {
// //     background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
// //     color: '#1e40af',
// //     fontWeight: '600',
// //     borderColor: '#93c5fd',
// //   },
// //   cellHovered: {
// //     transform: 'scale(1.15)',
// //     zIndex: 10,
// //     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
// //     borderColor: '#3b82f6',
// //     background: '#3b82f6',
// //     color: '#fff',
// //   },
// //   tooltip: {
// //     position: 'fixed',
// //     zIndex: 1000,
// //     pointerEvents: 'none',
// //   },
// //   tooltipContent: {
// //     background: '#1a1a2e',
// //     borderRadius: '10px',
// //     padding: '12px 14px',
// //     minWidth: '220px',
// //     maxWidth: '300px',
// //   },
// //   tooltipArrow: {
// //     position: 'absolute',
// //     bottom: '-8px',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     width: 0,
// //     height: 0,
// //     borderLeft: '10px solid transparent',
// //     borderRight: '10px solid transparent',
// //     borderTop: '10px solid #1a1a2e',
// //   },
// //   tooltipArrowUp: {
// //     position: 'absolute',
// //     top: '-8px',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     width: 0,
// //     height: 0,
// //     borderLeft: '10px solid transparent',
// //     borderRight: '10px solid transparent',
// //     borderBottom: '10px solid #1a1a2e',
// //   },
// //   tooltipHeader: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '10px',
// //     marginBottom: '10px',
// //     paddingBottom: '8px',
// //     borderBottom: '1px solid #3a3a5a',
// //   },
// //   tooltipNumber: {
// //     fontSize: '1.3rem',
// //     fontWeight: '700',
// //     color: '#60a5fa',
// //   },
// //   tooltipTitle: {
// //     fontSize: '0.8rem',
// //     color: '#94a3b8',
// //   },
// //   tooltipBody: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '6px',
// //   },
// //   tooltipRow: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //   },
// //   tooltipDivisor: {
// //     fontSize: '0.75rem',
// //     fontWeight: '700',
// //     color: '#60a5fa',
// //     background: '#2a2a4a',
// //     padding: '2px 6px',
// //     borderRadius: '4px',
// //     flexShrink: 0,
// //   },
// //   tooltipExplanation: {
// //     fontSize: '0.75rem',
// //     color: '#e2e8f0',
// //     lineHeight: '1.3',
// //   },
// // };

// // export default DivisibilityTable;

// import React, { useState } from 'react';

// const DivisibilityTable = () => {
//   const [selectedDivisors, setSelectedDivisors] = useState([]);
//   const [hoveredNumber, setHoveredNumber] = useState(null);
//   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, height: 0 });

//   const numbers = Array.from({ length: 101 }, (_, i) => i);
//   const divisors = Array.from({ length: 12 }, (_, i) => i + 1);

//   const toggleDivisor = (d) => {
//     setSelectedDivisors(prev =>
//       prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
//     );
//   };

//   const isHighlighted = (num) => {
//     if (selectedDivisors.length === 0) return false;
//     return selectedDivisors.some(d => num % d === 0);
//   };

//   const getDivisorsOf = (num) => {
//     if (num === 0) return divisors;
//     return divisors.filter(d => num % d === 0);
//   };

//   const getExplanation = (num, divisor) => {
//     if (num === 0) return "0 ÷ anything = 0";
    
//     switch (divisor) {
//       case 1:
//         return "Every number ÷1";
//       case 2:
//         return `Last digit ${num % 10} is even`;
//       case 3:
//         const ds3 = String(num).split('').join('+');
//         const sum3 = String(num).split('').reduce((s, d) => s + parseInt(d), 0);
//         return `${ds3}=${sum3}, ÷3✓`;
//       case 4:
//         return `${num % 100} ÷ 4 = ${(num % 100) / 4}`;
//       case 5:
//         return `Ends in ${num % 10}`;
//       case 6:
//         return "÷2 and ÷3 both work";
//       case 7:
//         return `${num} ÷ 7 = ${num / 7}`;
//       case 8:
//         return `${num % 1000} ÷ 8 = ${(num % 1000) / 8}`;
//       case 9:
//         const ds9 = String(num).split('').join('+');
//         const sum9 = String(num).split('').reduce((s, d) => s + parseInt(d), 0);
//         return `${ds9}=${sum9}, ÷9✓`;
//       case 10:
//         return "Ends in 0";
//       case 11:
//         const digits = String(num).split('').map(Number);
//         const altSum = digits.reduce((s, d, i) => s + (i % 2 === 0 ? d : -d), 0);
//         return `Alt sum = ${altSum}, ÷11✓`;
//       case 12:
//         return "÷3 and ÷4 both work";
//       default:
//         return "";
//     }
//   };

//   const handleMouseEnter = (num, e) => {
//     const rect = e.target.getBoundingClientRect();
//     setHoveredNumber(num);
//     setTooltipPos({
//       x: rect.left + rect.width / 2,
//       y: rect.top,
//       bottom: rect.bottom,
//       height: rect.height
//     });
//   };

//   const handleMouseLeave = () => {
//     setHoveredNumber(null);
//   };

//   const divisorsOfHovered = hoveredNumber !== null ? getDivisorsOf(hoveredNumber) : [];
//   const isZero = hoveredNumber === 0;

//   return (
//     <div style={styles.container}>
//       <div style={styles.inner}>
//         {/* Header */}
//         <header style={styles.header}>
//           {/* <h1 style={styles.title}>Divisibility Table</h1> */}
//           <p style={styles.subtitle}>Select divisors to highlight • Hover any number for details</p>
//         </header>

//         {/* Divisor Selector */}
//         <div style={styles.selectorCard}>
//           <p style={styles.usageHint}>
//             Click to select divisors • Click again to deselect • Mix and match!
//           </p>
//           <div style={styles.divisorRow}>
//             {divisors.map(d => (
//               <button
//                 key={d}
//                 onClick={() => toggleDivisor(d)}
//                 style={{
//                   ...styles.divisorBtn,
//                   ...(selectedDivisors.includes(d) ? styles.divisorBtnActive : {})
//                 }}
//               >
//                 ÷{d}
//               </button>
//             ))}
//             {selectedDivisors.length > 0 && (
//               <button 
//                 onClick={() => setSelectedDivisors([])} 
//                 style={styles.clearBtn}
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Number Grid */}
//         <div style={styles.gridCard}>
//           <div style={styles.grid}>
//             {numbers.map(num => (
//               <div
//                 key={num}
//                 onMouseEnter={(e) => handleMouseEnter(num, e)}
//                 onMouseLeave={handleMouseLeave}
//                 style={{
//                   ...styles.cell,
//                   ...(isHighlighted(num) ? styles.cellHighlighted : {}),
//                   ...(hoveredNumber === num ? styles.cellHovered : {})
//                 }}
//               >
//                 {num}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Tooltip */}
//         {hoveredNumber !== null && (
//           <div
//             style={{
//               ...styles.tooltip,
//               left: tooltipPos.x,
//               ...(isZero 
//                 ? { top: tooltipPos.bottom, transform: 'translate(-50%, 14px)' }
//                 : { top: tooltipPos.y, transform: 'translate(-50%, -100%) translateY(-14px)' }
//               )
//             }}
//           >
//             {isZero && <div style={styles.tooltipArrowUp} />}
//             <div style={styles.tooltipContent}>
//               <div style={styles.tooltipHeader}>
//                 <span style={styles.tooltipNumber}>{hoveredNumber}</span>
//                 <span style={styles.tooltipTitle}>
//                   {hoveredNumber === 0 
//                     ? 'Divisible by all' 
//                     : hoveredNumber === 1 
//                       ? 'Only ÷1'
//                       : `Divisible by: ${divisorsOfHovered.join(', ')}`
//                   }
//                 </span>
//               </div>
//               <div style={styles.tooltipBody}>
//                 {divisorsOfHovered.map(d => (
//                   <div key={d} style={styles.tooltipRow}>
//                     <span style={styles.tooltipDivisor}>÷{d}</span>
//                     <span style={styles.tooltipExplanation}>
//                       {getExplanation(hoveredNumber, d)}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {!isZero && <div style={styles.tooltipArrow} />}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     color: '#1e3a5f',
//     padding: '20px',
//   },
//   inner: {
//     maxWidth: '1000px',
//     margin: '0 auto',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '16px',
//   },
//   title: {
//     fontSize: '1.6rem',
//     fontWeight: '700',
//     color: '#1e3a5f',
//     margin: '0 0 4px 0',
//   },
//   subtitle: {
//     fontSize: '0.9rem',
//     color: '#64748b',
//     margin: 0,
//   },
//   selectorCard: {
//     background: '#fff',
//     borderRadius: '12px',
//     padding: '12px 16px',
//     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
//     marginBottom: '16px',
//   },
//   usageHint: {
//     textAlign: 'center',
//     fontSize: '0.8rem',
//     color: '#94a3b8',
//     margin: '0 0 10px 0',
//     fontStyle: 'italic',
//   },
//   divisorRow: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     gap: '6px',
//   },
//   divisorBtn: {
//     padding: '6px 12px',
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     background: '#f8fafc',
//     border: '2px solid #e2e8f0',
//     borderRadius: '8px',
//     color: '#64748b',
//     cursor: 'pointer',
//     transition: 'all 0.15s',
//     fontFamily: 'inherit',
//     outline: 'none',
//   },
//   divisorBtnActive: {
//     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     borderColor: '#3b82f6',
//     color: '#fff',
//     boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
//   },
//   clearBtn: {
//     padding: '6px 10px',
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     background: '#fee2e2',
//     border: '2px solid #fecaca',
//     borderRadius: '8px',
//     color: '#dc2626',
//     cursor: 'pointer',
//     fontFamily: 'inherit',
//     marginLeft: '8px',
//     outline: 'none',
//   },
//   gridCard: {
//     background: '#fff',
//     borderRadius: '12px',
//     padding: '16px',
//     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(17, 1fr)',
//     gap: '4px',
//   },
//   cell: {
//     aspectRatio: '1',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '0.75rem',
//     fontWeight: '500',
//     color: '#64748b',
//     background: '#f8fafc',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'all 0.15s',
//     border: '1px solid transparent',
//     outline: 'none',
//   },
//   cellHighlighted: {
//     background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
//     color: '#1e40af',
//     fontWeight: '600',
//     borderColor: '#93c5fd',
//   },
//   cellHovered: {
//     transform: 'scale(1.15)',
//     zIndex: 10,
//     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
//     borderColor: '#3b82f6',
//     background: '#3b82f6',
//     color: '#fff',
//   },
//   tooltip: {
//     position: 'fixed',
//     zIndex: 1000,
//     pointerEvents: 'none',
//   },
//   tooltipContent: {
//     background: '#1a1a2e',
//     borderRadius: '10px',
//     padding: '12px 14px',
//     minWidth: '220px',
//     maxWidth: '300px',
//   },
//   tooltipArrow: {
//     position: 'absolute',
//     bottom: '-8px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: 0,
//     height: 0,
//     borderLeft: '10px solid transparent',
//     borderRight: '10px solid transparent',
//     borderTop: '10px solid #1a1a2e',
//   },
//   tooltipArrowUp: {
//     position: 'absolute',
//     top: '-8px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: 0,
//     height: 0,
//     borderLeft: '10px solid transparent',
//     borderRight: '10px solid transparent',
//     borderBottom: '10px solid #1a1a2e',
//   },
//   tooltipHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     marginBottom: '10px',
//     paddingBottom: '8px',
//     borderBottom: '1px solid #3a3a5a',
//   },
//   tooltipNumber: {
//     fontSize: '1.3rem',
//     fontWeight: '700',
//     color: '#60a5fa',
//   },
//   tooltipTitle: {
//     fontSize: '0.8rem',
//     color: '#94a3b8',
//   },
//   tooltipBody: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '6px',
//   },
//   tooltipRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   tooltipDivisor: {
//     fontSize: '0.75rem',
//     fontWeight: '700',
//     color: '#60a5fa',
//     background: '#2a2a4a',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     flexShrink: 0,
//   },
//   tooltipExplanation: {
//     fontSize: '0.75rem',
//     color: '#e2e8f0',
//     lineHeight: '1.3',
//   },
// };

// export default DivisibilityTable;


import React, { useState } from 'react';

const DivisibilityTable = () => {
  const [selectedDivisors, setSelectedDivisors] = useState([]);
  const [hoveredNumber, setHoveredNumber] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, height: 0 });

  const numbers = Array.from({ length: 101 }, (_, i) => i);
  const divisors = Array.from({ length: 12 }, (_, i) => i + 1);

  const toggleDivisor = (d) => {
    setSelectedDivisors(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    );
  };

  const isHighlighted = (num) => {
    if (selectedDivisors.length === 0) return false;
    return selectedDivisors.some(d => num % d === 0);
  };

  const getDivisorsOf = (num) => {
    if (num === 0) return divisors;
    return divisors.filter(d => num % d === 0);
  };

  const getExplanation = (num, divisor) => {
    if (num === 0) return "0 ÷ anything = 0";
    
    switch (divisor) {
      case 1:
        return "Every number ÷1";
      case 2:
        return `Last digit ${num % 10} is even`;
      case 3:
        const ds3 = String(num).split('').join('+');
        const sum3 = String(num).split('').reduce((s, d) => s + parseInt(d), 0);
        return `${ds3}=${sum3}, ÷3✓`;
      case 4:
        return `${num % 100} ÷ 4 = ${(num % 100) / 4}`;
      case 5:
        return `Ends in ${num % 10}`;
      case 6:
        return "÷2 and ÷3 both work";
      case 7:
        return `${num} ÷ 7 = ${num / 7}`;
      case 8:
        return `${num % 1000} ÷ 8 = ${(num % 1000) / 8}`;
      case 9:
        const ds9 = String(num).split('').join('+');
        const sum9 = String(num).split('').reduce((s, d) => s + parseInt(d), 0);
        return `${ds9}=${sum9}, ÷9✓`;
      case 10:
        return "Ends in 0";
      case 11:
        const digits = String(num).split('').map(Number);
        const altSum = digits.reduce((s, d, i) => s + (i % 2 === 0 ? d : -d), 0);
        return `Alt sum = ${altSum}, ÷11✓`;
      case 12:
        return "÷3 and ÷4 both work";
      default:
        return "";
    }
  };

  const handleMouseEnter = (num, e) => {
    const rect = e.target.getBoundingClientRect();
    setHoveredNumber(num);
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top,
      bottom: rect.bottom,
      height: rect.height
    });
  };

  const handleMouseLeave = () => {
    setHoveredNumber(null);
  };

  const divisorsOfHovered = hoveredNumber !== null ? getDivisorsOf(hoveredNumber) : [];
  const isZero = hoveredNumber === 0;

  // Build button style explicitly each time
  const getDivisorBtnStyle = (d) => {
    const isSelected = selectedDivisors.includes(d);
    return {
      padding: '6px 12px',
      fontSize: '0.85rem',
      fontWeight: isSelected ? '600' : '600',
      background: isSelected ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : '#f8fafc',
      border: isSelected ? '2px solid #3b82f6' : '2px solid #e2e8f0',
      borderRadius: '8px',
      color: isSelected ? '#fff' : '#64748b',
      cursor: 'pointer',
      transition: 'all 0.15s',
      fontFamily: 'inherit',
      outline: 'none',
      boxShadow: isSelected ? '0 2px 8px rgba(59, 130, 246, 0.3)' : 'none',
    };
  };

  // Build cell style explicitly each time
  const getCellStyle = (num) => {
    const highlighted = isHighlighted(num);
    const hovered = hoveredNumber === num;
    
    if (hovered) {
      return {
        aspectRatio: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        fontWeight: '600',
        color: '#fff',
        background: '#3b82f6',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.15s',
        border: '1px solid #3b82f6',
        outline: 'none',
        transform: 'scale(1.15)',
        zIndex: 10,
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
      };
    }
    
    if (highlighted) {
      return {
        aspectRatio: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        fontWeight: '600',
        color: '#1e40af',
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.15s',
        border: '1px solid #93c5fd',
        outline: 'none',
        transform: 'none',
        zIndex: 'auto',
        boxShadow: 'none',
      };
    }
    
    return {
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem',
      fontWeight: '500',
      color: '#64748b',
      background: '#f8fafc',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.15s',
      border: '1px solid transparent',
      outline: 'none',
      transform: 'none',
      zIndex: 'auto',
      boxShadow: 'none',
    };
  };

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        {/* Header */}
        <header style={styles.header}>
          {/* <h1 style={styles.title}>Divisibility Table</h1> */}
          <p style={styles.subtitle}>Select divisors to highlight • Hover any number for details</p>
        </header>

        {/* Divisor Selector */}
        <div style={styles.selectorCard}>
          <p style={styles.usageHint}>
            Click to select divisors • Click again to deselect • Mix and match!
          </p>
          <div style={styles.divisorRow}>
            {divisors.map(d => (
              <button
                key={d}
                onClick={() => toggleDivisor(d)}
                style={getDivisorBtnStyle(d)}
              >
                ÷{d}
              </button>
            ))}
            {selectedDivisors.length > 0 && (
              <button 
                onClick={() => setSelectedDivisors([])} 
                style={styles.clearBtn}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Number Grid */}
        <div style={styles.gridCard}>
          <div style={styles.grid}>
            {numbers.map(num => (
              <div
                key={num}
                onMouseEnter={(e) => handleMouseEnter(num, e)}
                onMouseLeave={handleMouseLeave}
                style={getCellStyle(num)}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {hoveredNumber !== null && (
          <div
            style={{
              ...styles.tooltip,
              left: tooltipPos.x,
              ...(isZero 
                ? { top: tooltipPos.bottom, transform: 'translate(-50%, 14px)' }
                : { top: tooltipPos.y, transform: 'translate(-50%, -100%) translateY(-14px)' }
              )
            }}
          >
            {isZero && <div style={styles.tooltipArrowUp} />}
            <div style={styles.tooltipContent}>
              <div style={styles.tooltipHeader}>
                <span style={styles.tooltipNumber}>{hoveredNumber}</span>
                <span style={styles.tooltipTitle}>
                  {hoveredNumber === 0 
                    ? 'Divisible by all' 
                    : hoveredNumber === 1 
                      ? 'Only ÷1'
                      : `Divisible by: ${divisorsOfHovered.join(', ')}`
                  }
                </span>
              </div>
              <div style={styles.tooltipBody}>
                {divisorsOfHovered.map(d => (
                  <div key={d} style={styles.tooltipRow}>
                    <span style={styles.tooltipDivisor}>÷{d}</span>
                    <span style={styles.tooltipExplanation}>
                      {getExplanation(hoveredNumber, d)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {!isZero && <div style={styles.tooltipArrow} />}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: 'auto',
    background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1e3a5f',
    padding: '20px',
  },
  inner: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '16px',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#1e3a5f',
    margin: '0 0 4px 0',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#64748b',
    margin: 0,
  },
  selectorCard: {
    background: '#fff',
    borderRadius: '12px',
    padding: '12px 16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
    marginBottom: '16px',
  },
  usageHint: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#94a3b8',
    margin: '0 0 10px 0',
    fontStyle: 'italic',
  },
  divisorRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '6px',
  },
  clearBtn: {
    padding: '6px 10px',
    fontSize: '0.85rem',
    fontWeight: '600',
    background: '#fee2e2',
    border: '2px solid #fecaca',
    borderRadius: '8px',
    color: '#dc2626',
    cursor: 'pointer',
    fontFamily: 'inherit',
    marginLeft: '8px',
    outline: 'none',
  },
  gridCard: {
    background: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(17, 1fr)',
    gap: '4px',
  },
  tooltip: {
    position: 'fixed',
    zIndex: 1000,
    pointerEvents: 'none',
  },
  tooltipContent: {
    background: '#1a1a2e',
    borderRadius: '10px',
    padding: '12px 14px',
    minWidth: '220px',
    maxWidth: '300px',
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #1a1a2e',
  },
  tooltipArrowUp: {
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid #1a1a2e',
  },
  tooltipHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
    paddingBottom: '8px',
    borderBottom: '1px solid #3a3a5a',
  },
  tooltipNumber: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#60a5fa',
  },
  tooltipTitle: {
    fontSize: '0.8rem',
    color: '#94a3b8',
  },
  tooltipBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  tooltipRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  tooltipDivisor: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#60a5fa',
    background: '#2a2a4a',
    padding: '2px 6px',
    borderRadius: '4px',
    flexShrink: 0,
  },
  tooltipExplanation: {
    fontSize: '0.75rem',
    color: '#e2e8f0',
    lineHeight: '1.3',
  },
};

export default DivisibilityTable;