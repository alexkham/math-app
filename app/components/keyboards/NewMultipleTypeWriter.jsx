// // // // // // 'use client'
// // // // // // import React, { useState, useRef } from 'react';
// // // // // // import data from './math_symbols_data';
// // // // // // import { superscripts, subscripts } from './super_sub_scripts';

// // // // // // const styles = {
// // // // // //   container: {
// // // // // //     maxWidth: '1400px',
// // // // // //     margin: '0 auto',
// // // // // //     padding: '20px',
// // // // // //     fontFamily: 'Arial, sans-serif',
// // // // // //   },
// // // // // //   header: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: '20px',
// // // // // //     gap: '10px',
// // // // // //     flexWrap: 'wrap',
// // // // // //   },
// // // // // //   navButtons: {
// // // // // //     display: 'flex',
// // // // // //     gap: '10px',
// // // // // //   },
// // // // // //   navBtn: {
// // // // // //     padding: '8px 16px',
// // // // // //     backgroundColor: '#666',
// // // // // //     color: 'white',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '14px',
// // // // // //   },
// // // // // //   selectorGrid: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// // // // // //     gap: '10px',
// // // // // //     marginBottom: '20px',
// // // // // //   },
// // // // // //   categoryBtn: {
// // // // // //     padding: '12px',
// // // // // //     backgroundColor: '#e0e0e0',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '14px',
// // // // // //     fontWeight: '500',
// // // // // //     transition: 'all 0.2s',
// // // // // //   },
// // // // // //   categoryBtnActive: {
// // // // // //     backgroundColor: '#004134',
// // // // // //     color: 'white',
// // // // // //   },
// // // // // //   mainArea: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: '1fr 400px',
// // // // // //     gap: '20px',
// // // // // //     marginBottom: '20px',
// // // // // //   },
// // // // // //   keyboardSection: {
// // // // // //     backgroundColor: '#f5f5f5',
// // // // // //     padding: '20px',
// // // // // //     borderRadius: '8px',
// // // // // //   },
// // // // // //   keyboardTitle: {
// // // // // //     margin: '0 0 15px 0',
// // // // // //     fontSize: '18px',
// // // // // //     color: '#333',
// // // // // //   },
// // // // // //   keyboardGrid: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
// // // // // //     gap: '8px',
// // // // // //   },
// // // // // //   keyBtn: {
// // // // // //     padding: '12px 8px',
// // // // // //     backgroundColor: 'white',
// // // // // //     border: '1px solid #ddd',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '18px',
// // // // // //     minHeight: '50px',
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'center',
// // // // // //     transition: 'all 0.2s',
// // // // // //     position: 'relative',
// // // // // //   },
// // // // // //   keyBtnSpecial: {
// // // // // //     backgroundColor: '#004134',
// // // // // //     color: 'white',
// // // // // //     fontSize: '12px',
// // // // // //   },
// // // // // //   tooltip: {
// // // // // //     position: 'absolute',
// // // // // //     bottom: '100%',
// // // // // //     left: '50%',
// // // // // //     transform: 'translateX(-50%)',
// // // // // //     backgroundColor: '#333',
// // // // // //     color: 'white',
// // // // // //     padding: '4px 8px',
// // // // // //     borderRadius: '4px',
// // // // // //     fontSize: '11px',
// // // // // //     whiteSpace: 'nowrap',
// // // // // //     marginBottom: '5px',
// // // // // //     opacity: 0,
// // // // // //     pointerEvents: 'none',
// // // // // //     transition: 'opacity 0.2s',
// // // // // //     zIndex: 1000,
// // // // // //   },
// // // // // //   textSection: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     gap: '10px',
// // // // // //   },
// // // // // //   modeControls: {
// // // // // //     display: 'flex',
// // // // // //     gap: '8px',
// // // // // //   },
// // // // // //   modeBtn: {
// // // // // //     flex: 1,
// // // // // //     padding: '8px',
// // // // // //     backgroundColor: '#e0e0e0',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '12px',
// // // // // //   },
// // // // // //   modeBtnActive: {
// // // // // //     backgroundColor: '#037f61',
// // // // // //     color: 'white',
// // // // // //   },
// // // // // //   textarea: {
// // // // // //     width: '100%',
// // // // // //     minHeight: '300px',
// // // // // //     padding: '15px',
// // // // // //     fontSize: '16px',
// // // // // //     border: '2px solid #ddd',
// // // // // //     borderRadius: '4px',
// // // // // //     resize: 'vertical',
// // // // // //     fontFamily: 'monospace',
// // // // // //   },
// // // // // //   actionButtons: {
// // // // // //     display: 'flex',
// // // // // //     gap: '10px',
// // // // // //   },
// // // // // //   copyBtn: {
// // // // // //     flex: 1,
// // // // // //     padding: '10px',
// // // // // //     backgroundColor: '#037f61',
// // // // // //     color: 'white',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '14px',
// // // // // //     fontWeight: '500',
// // // // // //   },
// // // // // //   clearBtn: {
// // // // // //     flex: 1,
// // // // // //     padding: '10px',
// // // // // //     backgroundColor: '#dc3545',
// // // // // //     color: 'white',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '14px',
// // // // // //     fontWeight: '500',
// // // // // //   },
// // // // // //   '@media (max-width: 1024px)': {
// // // // // //     mainArea: {
// // // // // //       gridTemplateColumns: '1fr',
// // // // // //     },
// // // // // //   },
// // // // // // };

// // // // // // export default function NewMultipleTypeWriter() {
// // // // // //   const [input, setInput] = useState("");
// // // // // //   const [activeCategory, setActiveCategory] = useState(null);
// // // // // //   const [mode, setMode] = useState('regular');
// // // // // //   const [hoveredKey, setHoveredKey] = useState(null);
// // // // // //   const textareaRef = useRef(null);

// // // // // //   const categories = Object.keys(data);

// // // // // //   const handleKeyClick = (keyObj) => {
// // // // // //     let char = keyObj.symbol;
    
// // // // // //     if (['space', 'enter', 'backspace', 'done'].includes(char)) {
// // // // // //       if (char === 'backspace') setInput(prev => prev.slice(0, -1));
// // // // // //       else if (char === 'space') setInput(prev => prev + ' ');
// // // // // //       else if (char === 'enter') setInput(prev => prev + '\n');
// // // // // //       return;
// // // // // //     }

// // // // // //     if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
// // // // // //     else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

// // // // // //     setInput(prev => prev + char);
// // // // // //     textareaRef.current?.focus();
// // // // // //   };

// // // // // //   const copyToClipboard = () => {
// // // // // //     navigator.clipboard.writeText(input);
// // // // // //   };

// // // // // //   const getKeyStyle = (symbol) => {
// // // // // //     const isSpecial = ['space', 'enter', 'backspace', 'done'].includes(symbol);
// // // // // //     return {
// // // // // //       ...styles.keyBtn,
// // // // // //       ...(isSpecial ? styles.keyBtnSpecial : {}),
// // // // // //     };
// // // // // //   };

// // // // // //   const getCategoryLabel = (key) => {
// // // // // //     return key.split('_').map(word => 
// // // // // //       word.charAt(0).toUpperCase() + word.slice(1)
// // // // // //     ).join(' ');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <div style={styles.header}>
// // // // // //         <div style={styles.navButtons}>
// // // // // //           <button 
// // // // // //             style={styles.navBtn}
// // // // // //             onClick={() => window.location.href = '/'}
// // // // // //           >
// // // // // //             Home
// // // // // //           </button>
// // // // // //           <button 
// // // // // //             style={styles.navBtn}
// // // // // //             onClick={() => window.history.back()}
// // // // // //           >
// // // // // //             Go Back
// // // // // //           </button>
// // // // // //         </div>
// // // // // //         <span style={{fontSize: '14px', color: '#666'}}>
// // // // // //           Current mode: {mode}
// // // // // //         </span>
// // // // // //       </div>

// // // // // //       <div style={styles.selectorGrid}>
// // // // // //         {categories.map((category, idx) => (
// // // // // //           <button
// // // // // //             key={idx}
// // // // // //             style={{
// // // // // //               ...styles.categoryBtn,
// // // // // //               ...(activeCategory === category ? styles.categoryBtnActive : {}),
// // // // // //             }}
// // // // // //             onClick={() => setActiveCategory(category)}
// // // // // //             onMouseEnter={(e) => e.target.style.backgroundColor = activeCategory === category ? '#037f61' : '#d0d0d0'}
// // // // // //             onMouseLeave={(e) => e.target.style.backgroundColor = activeCategory === category ? '#004134' : '#e0e0e0'}
// // // // // //           >
// // // // // //             {getCategoryLabel(category)}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <div style={styles.mainArea}>
// // // // // //         <div style={styles.keyboardSection}>
// // // // // //           <h3 style={styles.keyboardTitle}>
// // // // // //             {activeCategory ? getCategoryLabel(activeCategory) : 'Select a category'}
// // // // // //           </h3>
// // // // // //           {activeCategory && (
// // // // // //             <div style={styles.keyboardGrid}>
// // // // // //               {data[activeCategory].map((keyObj, idx) => (
// // // // // //                 <button
// // // // // //                   key={idx}
// // // // // //                   style={getKeyStyle(keyObj.symbol)}
// // // // // //                   onClick={() => handleKeyClick(keyObj)}
// // // // // //                   onMouseEnter={(e) => {
// // // // // //                     setHoveredKey(idx);
// // // // // //                     e.target.style.backgroundColor = keyObj.symbol.match(/space|enter|backspace|done/) ? '#037f61' : '#f0f0f0';
// // // // // //                   }}
// // // // // //                   onMouseLeave={(e) => {
// // // // // //                     setHoveredKey(null);
// // // // // //                     e.target.style.backgroundColor = keyObj.symbol.match(/space|enter|backspace|done/) ? '#004134' : 'white';
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {keyObj.symbol}
// // // // // //                   {hoveredKey === idx && keyObj.explanation && (
// // // // // //                     <span style={{...styles.tooltip, opacity: 1}}>
// // // // // //                       {keyObj.explanation}
// // // // // //                     </span>
// // // // // //                   )}
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <div style={styles.textSection}>
// // // // // //           <div style={styles.modeControls}>
// // // // // //             {['regular', 'subscript', 'superscript'].map(m => (
// // // // // //               <button
// // // // // //                 key={m}
// // // // // //                 style={{
// // // // // //                   ...styles.modeBtn,
// // // // // //                   ...(mode === m ? styles.modeBtnActive : {}),
// // // // // //                 }}
// // // // // //                 onClick={() => setMode(m)}
// // // // // //                 onMouseEnter={(e) => mode !== m && (e.target.style.backgroundColor = '#d0d0d0')}
// // // // // //                 onMouseLeave={(e) => mode !== m && (e.target.style.backgroundColor = '#e0e0e0')}
// // // // // //               >
// // // // // //                 {m} {mode === m ? '✓' : ''}
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <textarea
// // // // // //             ref={textareaRef}
// // // // // //             style={styles.textarea}
// // // // // //             value={input}
// // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // //             placeholder="Click symbols to type, or use your keyboard..."
// // // // // //           />

// // // // // //           <div style={styles.actionButtons}>
// // // // // //             <button
// // // // // //               style={styles.copyBtn}
// // // // // //               onClick={copyToClipboard}
// // // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#026b52'}
// // // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#037f61'}
// // // // // //             >
// // // // // //               Copy
// // // // // //             </button>
// // // // // //             <button
// // // // // //               style={styles.clearBtn}
// // // // // //               onClick={() => setInput('')}
// // // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
// // // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
// // // // // //             >
// // // // // //               Clear
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // 'use client'
// // // // // import React, { useState, useRef } from 'react';
// // // // // import data from './math_symbols_data';
// // // // // import { superscripts, subscripts } from './super_sub_scripts';

// // // // // const styles = {
// // // // //   container: {
// // // // //     maxWidth: 'calc(100% - 200px)',
// // // // //     marginLeft: '20px',
// // // // //     padding: '40px',
// // // // //     fontFamily: 'Arial, sans-serif',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '32px',
// // // // //     fontWeight: '700',
// // // // //     color: '#1a1a1a',
// // // // //     marginBottom: '10px',
// // // // //   },
// // // // //   subtitle: {
// // // // //     fontSize: '16px',
// // // // //     color: '#666',
// // // // //     lineHeight: '1.6',
// // // // //     marginBottom: '30px',
// // // // //     maxWidth: '900px',
// // // // //   },
// // // // //   header: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: '25px',
// // // // //     gap: '10px',
// // // // //     flexWrap: 'wrap',
// // // // //   },
// // // // //   navButtons: {
// // // // //     display: 'flex',
// // // // //     gap: '10px',
// // // // //   },
// // // // //   navBtn: {
// // // // //     padding: '10px 20px',
// // // // //     backgroundColor: '#5B6EF5',
// // // // //     color: 'white',
// // // // //     border: 'none',
// // // // //     borderRadius: '6px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '14px',
// // // // //     fontWeight: '500',
// // // // //     transition: 'all 0.2s',
// // // // //   },
// // // // //   selectorGrid: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
// // // // //     gap: '12px',
// // // // //     marginBottom: '30px',
// // // // //   },
// // // // //   categoryBtn: {
// // // // //     padding: '14px 16px',
// // // // //     backgroundColor: 'white',
// // // // //     border: '2px solid #e5e7eb',
// // // // //     borderRadius: '8px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '14px',
// // // // //     fontWeight: '500',
// // // // //     transition: 'all 0.2s',
// // // // //     color: '#374151',
// // // // //   },
// // // // //   categoryBtnActive: {
// // // // //     backgroundColor: '#5B6EF5',
// // // // //     color: 'white',
// // // // //     borderColor: '#5B6EF5',
// // // // //   },
// // // // //   mainArea: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: '1fr 450px',
// // // // //     gap: '30px',
// // // // //     marginBottom: '20px',
// // // // //   },
// // // // //   keyboardSection: {
// // // // //     backgroundColor: 'white',
// // // // //     padding: '30px',
// // // // //     borderRadius: '12px',
// // // // //     border: '1px solid #e5e7eb',
// // // // //     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// // // // //   },
// // // // //   keyboardTitle: {
// // // // //     margin: '0 0 20px 0',
// // // // //     fontSize: '20px',
// // // // //     fontWeight: '600',
// // // // //     color: '#1a1a1a',
// // // // //   },
// // // // //   keyboardGrid: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(65px, 1fr))',
// // // // //     gap: '10px',
// // // // //   },
// // // // //   keyBtn: {
// // // // //     padding: '14px 10px',
// // // // //     backgroundColor: '#f9fafb',
// // // // //     border: '1px solid #e5e7eb',
// // // // //     borderRadius: '6px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '20px',
// // // // //     minHeight: '55px',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     transition: 'all 0.2s',
// // // // //     position: 'relative',
// // // // //     color: '#1a1a1a',
// // // // //   },
// // // // //   keyBtnSpecial: {
// // // // //     backgroundColor: '#5B6EF5',
// // // // //     color: 'white',
// // // // //     fontSize: '11px',
// // // // //     fontWeight: '500',
// // // // //   },
// // // // //   tooltip: {
// // // // //     position: 'absolute',
// // // // //     bottom: '100%',
// // // // //     left: '50%',
// // // // //     transform: 'translateX(-50%)',
// // // // //     backgroundColor: '#1a1a1a',
// // // // //     color: 'white',
// // // // //     padding: '6px 10px',
// // // // //     borderRadius: '6px',
// // // // //     fontSize: '12px',
// // // // //     whiteSpace: 'nowrap',
// // // // //     marginBottom: '8px',
// // // // //     opacity: 0,
// // // // //     pointerEvents: 'none',
// // // // //     transition: 'opacity 0.2s',
// // // // //     zIndex: 1000,
// // // // //   },
// // // // //   textSection: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     gap: '12px',
// // // // //   },
// // // // //   modeControls: {
// // // // //     display: 'flex',
// // // // //     gap: '10px',
// // // // //     backgroundColor: 'white',
// // // // //     padding: '8px',
// // // // //     borderRadius: '8px',
// // // // //     border: '1px solid #e5e7eb',
// // // // //   },
// // // // //   modeBtn: {
// // // // //     flex: 1,
// // // // //     padding: '10px',
// // // // //     backgroundColor: 'transparent',
// // // // //     border: 'none',
// // // // //     borderRadius: '6px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '13px',
// // // // //     fontWeight: '500',
// // // // //     color: '#6b7280',
// // // // //     transition: 'all 0.2s',
// // // // //   },
// // // // //   modeBtnActive: {
// // // // //     backgroundColor: '#5B6EF5',
// // // // //     color: 'white',
// // // // //   },
// // // // //   textarea: {
// // // // //     width: '100%',
// // // // //     minHeight: '320px',
// // // // //     padding: '20px',
// // // // //     fontSize: '16px',
// // // // //     border: '1px solid #e5e7eb',
// // // // //     borderRadius: '8px',
// // // // //     resize: 'vertical',
// // // // //     fontFamily: 'monospace',
// // // // //     backgroundColor: 'white',
// // // // //     boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
// // // // //   },
// // // // //   actionButtons: {
// // // // //     display: 'flex',
// // // // //     gap: '12px',
// // // // //   },
// // // // //   copyBtn: {
// // // // //     flex: 1,
// // // // //     padding: '12px',
// // // // //     backgroundColor: '#5B6EF5',
// // // // //     color: 'white',
// // // // //     border: 'none',
// // // // //     borderRadius: '8px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '14px',
// // // // //     fontWeight: '600',
// // // // //     transition: 'all 0.2s',
// // // // //   },
// // // // //   clearBtn: {
// // // // //     flex: 1,
// // // // //     padding: '12px',
// // // // //     backgroundColor: '#ef4444',
// // // // //     color: 'white',
// // // // //     border: 'none',
// // // // //     borderRadius: '8px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '14px',
// // // // //     fontWeight: '600',
// // // // //     transition: 'all 0.2s',
// // // // //   },
// // // // //   modeIndicator: {
// // // // //     fontSize: '13px',
// // // // //     color: '#6b7280',
// // // // //     padding: '8px 16px',
// // // // //     backgroundColor: 'white',
// // // // //     borderRadius: '6px',
// // // // //     border: '1px solid #e5e7eb',
// // // // //   },
// // // // // };

// // // // // export default function NewMultipleTypeWriter() {
// // // // //   const [input, setInput] = useState("");
// // // // //   const [activeCategory, setActiveCategory] = useState(null);
// // // // //   const [mode, setMode] = useState('regular');
// // // // //   const [hoveredKey, setHoveredKey] = useState(null);
// // // // //   const textareaRef = useRef(null);

// // // // //   const categories = Object.keys(data);

// // // // //   const handleKeyClick = (keyObj) => {
// // // // //     let char = keyObj.symbol;
    
// // // // //     if (['space', 'enter', 'backspace', 'done'].includes(char)) {
// // // // //       if (char === 'backspace') setInput(prev => prev.slice(0, -1));
// // // // //       else if (char === 'space') setInput(prev => prev + ' ');
// // // // //       else if (char === 'enter') setInput(prev => prev + '\n');
// // // // //       return;
// // // // //     }

// // // // //     if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
// // // // //     else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

// // // // //     setInput(prev => prev + char);
// // // // //     textareaRef.current?.focus();
// // // // //   };

// // // // //   const copyToClipboard = () => {
// // // // //     navigator.clipboard.writeText(input);
// // // // //   };

// // // // //   const getKeyStyle = (symbol) => {
// // // // //     const isSpecial = ['space', 'enter', 'backspace', 'done'].includes(symbol);
// // // // //     return {
// // // // //       ...styles.keyBtn,
// // // // //       ...(isSpecial ? styles.keyBtnSpecial : {}),
// // // // //     };
// // // // //   };

// // // // //   const getCategoryLabel = (key) => {
// // // // //     return key.split('_').map(word => 
// // // // //       word.charAt(0).toUpperCase() + word.slice(1)
// // // // //     ).join(' ');
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <h1 style={styles.title}>Mathematical Keyboard</h1>
// // // // //       <p style={styles.subtitle}>
// // // // //         Type mathematical symbols, Greek letters, and special characters with ease. Select a category below to access specialized keyboards, 
// // // // //         choose between regular, subscript, or superscript modes, and click symbols to insert them into your text. Perfect for writing mathematical 
// // // // //         equations, scientific notation, or any content requiring special characters.
// // // // //       </p>

// // // // //       <div style={styles.header}>
// // // // //         <div style={styles.navButtons}>
// // // // //           <button 
// // // // //             style={styles.navBtn}
// // // // //             onClick={() => window.location.href = '/'}
// // // // //             onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // // // //             onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // // // //           >
// // // // //             Home
// // // // //           </button>
// // // // //           <button 
// // // // //             style={styles.navBtn}
// // // // //             onClick={() => window.history.back()}
// // // // //             onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // // // //             onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // // // //           >
// // // // //             Go Back
// // // // //           </button>
// // // // //         </div>
// // // // //         <div style={styles.modeIndicator}>
// // // // //           Mode: <strong>{mode}</strong>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div style={styles.selectorGrid}>
// // // // //         {categories.map((category, idx) => (
// // // // //           <button
// // // // //             key={idx}
// // // // //             style={{
// // // // //               ...styles.categoryBtn,
// // // // //               ...(activeCategory === category ? styles.categoryBtnActive : {}),
// // // // //             }}
// // // // //             onClick={() => setActiveCategory(category)}
// // // // //             onMouseEnter={(e) => {
// // // // //               if (activeCategory === category) {
// // // // //                 e.target.style.backgroundColor = '#4c5fd4';
// // // // //               } else {
// // // // //                 e.target.style.backgroundColor = '#f9fafb';
// // // // //                 e.target.style.borderColor = '#5B6EF5';
// // // // //               }
// // // // //             }}
// // // // //             onMouseLeave={(e) => {
// // // // //               if (activeCategory === category) {
// // // // //                 e.target.style.backgroundColor = '#5B6EF5';
// // // // //               } else {
// // // // //                 e.target.style.backgroundColor = 'white';
// // // // //                 e.target.style.borderColor = '#e5e7eb';
// // // // //               }
// // // // //             }}
// // // // //           >
// // // // //             {getCategoryLabel(category)}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       <div style={styles.mainArea}>
// // // // //         <div style={styles.keyboardSection}>
// // // // //           <h3 style={styles.keyboardTitle}>
// // // // //             {activeCategory ? getCategoryLabel(activeCategory) : 'Select a category to begin'}
// // // // //           </h3>
// // // // //           {activeCategory && (
// // // // //             <div style={styles.keyboardGrid}>
// // // // //               {data[activeCategory].map((keyObj, idx) => (
// // // // //                 <button
// // // // //                   key={idx}
// // // // //                   style={getKeyStyle(keyObj.symbol)}
// // // // //                   onClick={() => handleKeyClick(keyObj)}
// // // // //                   onMouseEnter={(e) => {
// // // // //                     setHoveredKey(idx);
// // // // //                     if (keyObj.symbol.match(/space|enter|backspace|done/)) {
// // // // //                       e.target.style.backgroundColor = '#4c5fd4';
// // // // //                     } else {
// // // // //                       e.target.style.backgroundColor = '#e5e7eb';
// // // // //                     }
// // // // //                   }}
// // // // //                   onMouseLeave={(e) => {
// // // // //                     setHoveredKey(null);
// // // // //                     if (keyObj.symbol.match(/space|enter|backspace|done/)) {
// // // // //                       e.target.style.backgroundColor = '#5B6EF5';
// // // // //                     } else {
// // // // //                       e.target.style.backgroundColor = '#f9fafb';
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   {keyObj.symbol}
// // // // //                   {hoveredKey === idx && keyObj.explanation && (
// // // // //                     <span style={{...styles.tooltip, opacity: 1}}>
// // // // //                       {keyObj.explanation}
// // // // //                     </span>
// // // // //                   )}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         <div style={styles.textSection}>
// // // // //           <div style={styles.modeControls}>
// // // // //             {['regular', 'subscript', 'superscript'].map(m => (
// // // // //               <button
// // // // //                 key={m}
// // // // //                 style={{
// // // // //                   ...styles.modeBtn,
// // // // //                   ...(mode === m ? styles.modeBtnActive : {}),
// // // // //                 }}
// // // // //                 onClick={() => setMode(m)}
// // // // //                 onMouseEnter={(e) => {
// // // // //                   if (mode !== m) {
// // // // //                     e.target.style.backgroundColor = '#f3f4f6';
// // // // //                   }
// // // // //                 }}
// // // // //                 onMouseLeave={(e) => {
// // // // //                   if (mode !== m) {
// // // // //                     e.target.style.backgroundColor = 'transparent';
// // // // //                   }
// // // // //                 }}
// // // // //               >
// // // // //                 {m.charAt(0).toUpperCase() + m.slice(1)} {mode === m ? '✓' : ''}
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>

// // // // //           <textarea
// // // // //             ref={textareaRef}
// // // // //             style={styles.textarea}
// // // // //             value={input}
// // // // //             onChange={(e) => setInput(e.target.value)}
// // // // //             placeholder="Click symbols to insert, or type directly..."
// // // // //           />

// // // // //           <div style={styles.actionButtons}>
// // // // //             <button
// // // // //               style={styles.copyBtn}
// // // // //               onClick={copyToClipboard}
// // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // // // //             >
// // // // //               Copy to Clipboard
// // // // //             </button>
// // // // //             <button
// // // // //               style={styles.clearBtn}
// // // // //               onClick={() => setInput('')}
// // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
// // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
// // // // //             >
// // // // //               Clear
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // 'use client'
// // // // import React, { useState, useRef } from 'react';
// // // // import data from './math_symbols_data';
// // // // import { superscripts, subscripts } from './super_sub_scripts';

// // // // const styles = {
// // // //   container: {
// // // //     maxWidth: '1400px',
// // // //     margin: '0 auto',
// // // //     padding: '40px 20px',
// // // //     fontFamily: 'Arial, sans-serif',
// // // //   },
// // // //   title: {
// // // //     fontSize: '32px',
// // // //     fontWeight: '700',
// // // //     color: '#1a1a1a',
// // // //     marginBottom: '10px',
// // // //   },
// // // //   explanationBox: {
// // // //     fontSize: '15px',
// // // //     color: '#4b5563',
// // // //     lineHeight: '1.6',
// // // //     marginBottom: '25px',
// // // //     padding: '16px 20px',
// // // //     backgroundColor: '#f9fafb',
// // // //     border: '1px solid #e5e7eb',
// // // //     borderRadius: '8px',
// // // //   },
// // // //   header: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: '20px',
// // // //     gap: '10px',
// // // //   },
// // // //   navButtons: {
// // // //     display: 'flex',
// // // //     gap: '10px',
// // // //   },
// // // //   navBtn: {
// // // //     padding: '8px 16px',
// // // //     backgroundColor: '#5B6EF5',
// // // //     color: 'white',
// // // //     border: 'none',
// // // //     borderRadius: '6px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '13px',
// // // //     fontWeight: '500',
// // // //     transition: 'all 0.2s',
// // // //   },
// // // //   modeIndicator: {
// // // //     fontSize: '13px',
// // // //     color: '#6b7280',
// // // //     padding: '6px 14px',
// // // //     backgroundColor: 'white',
// // // //     borderRadius: '6px',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   categoriesWrapper: {
// // // //     backgroundColor: '#fafbfc',
// // // //     padding: '16px',
// // // //     borderRadius: '8px',
// // // //     marginBottom: '20px',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   selectorGrid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// // // //     gap: '10px',
// // // //   },
// // // //   categoryBtn: {
// // // //     padding: '10px 12px',
// // // //     backgroundColor: 'white',
// // // //     border: '2px solid #e5e7eb',
// // // //     borderRadius: '6px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '13px',
// // // //     fontWeight: '500',
// // // //     transition: 'all 0.2s',
// // // //     color: '#374151',
// // // //     position: 'relative',
// // // //   },
// // // //   categoryBtnActive: {
// // // //     backgroundColor: '#5B6EF5',
// // // //     color: 'white',
// // // //     borderColor: '#5B6EF5',
// // // //   },
// // // //   tooltip: {
// // // //     position: 'absolute',
// // // //     bottom: '100%',
// // // //     left: '50%',
// // // //     transform: 'translateX(-50%)',
// // // //     backgroundColor: '#1a1a1a',
// // // //     color: 'white',
// // // //     padding: '8px 12px',
// // // //     borderRadius: '6px',
// // // //     fontSize: '12px',
// // // //     whiteSpace: 'nowrap',
// // // //     marginBottom: '8px',
// // // //     opacity: 0,
// // // //     pointerEvents: 'none',
// // // //     transition: 'opacity 0.2s',
// // // //     zIndex: 1000,
// // // //     maxWidth: '250px',
// // // //     whiteSpace: 'normal',
// // // //     textAlign: 'center',
// // // //   },
// // // //   mainArea: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: '1fr 1fr',
// // // //     gap: '20px',
// // // //     height: '480px',
// // // //   },
// // // //   keyboardSection: {
// // // //     backgroundColor: 'white',
// // // //     padding: '20px',
// // // //     borderRadius: '12px',
// // // //     border: '1px solid #e5e7eb',
// // // //     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// // // //     overflow: 'auto',
// // // //   },
// // // //   keyboardTitle: {
// // // //     margin: '0 0 16px 0',
// // // //     fontSize: '18px',
// // // //     fontWeight: '600',
// // // //     color: '#1a1a1a',
// // // //   },
// // // //   keyboardGrid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(55px, 1fr))',
// // // //     gap: '8px',
// // // //   },
// // // //   keyBtn: {
// // // //     padding: '10px 6px',
// // // //     backgroundColor: '#f9fafb',
// // // //     border: '1px solid #e5e7eb',
// // // //     borderRadius: '6px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '18px',
// // // //     minHeight: '45px',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     transition: 'all 0.2s',
// // // //     position: 'relative',
// // // //     color: '#1a1a1a',
// // // //   },
// // // //   keyBtnSpecial: {
// // // //     backgroundColor: '#5B6EF5',
// // // //     color: 'white',
// // // //     fontSize: '11px',
// // // //     fontWeight: '500',
// // // //   },
// // // //   textSection: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '12px',
// // // //   },
// // // //   modeControls: {
// // // //     display: 'flex',
// // // //     gap: '8px',
// // // //     backgroundColor: 'white',
// // // //     padding: '6px',
// // // //     borderRadius: '8px',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   modeBtn: {
// // // //     flex: 1,
// // // //     padding: '8px',
// // // //     backgroundColor: 'transparent',
// // // //     border: 'none',
// // // //     borderRadius: '6px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '13px',
// // // //     fontWeight: '500',
// // // //     color: '#6b7280',
// // // //     transition: 'all 0.2s',
// // // //   },
// // // //   modeBtnActive: {
// // // //     backgroundColor: '#5B6EF5',
// // // //     color: 'white',
// // // //   },
// // // //   textarea: {
// // // //     width: '100%',
// // // //     flex: 1,
// // // //     padding: '16px',
// // // //     fontSize: '15px',
// // // //     border: '1px solid #e5e7eb',
// // // //     borderRadius: '8px',
// // // //     resize: 'none',
// // // //     fontFamily: 'monospace',
// // // //     backgroundColor: 'white',
// // // //     boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
// // // //   },
// // // //   actionButtons: {
// // // //     display: 'flex',
// // // //     gap: '10px',
// // // //   },
// // // //   copyBtn: {
// // // //     flex: 1,
// // // //     padding: '10px',
// // // //     backgroundColor: '#5B6EF5',
// // // //     color: 'white',
// // // //     border: 'none',
// // // //     borderRadius: '8px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '14px',
// // // //     fontWeight: '600',
// // // //     transition: 'all 0.2s',
// // // //   },
// // // //   clearBtn: {
// // // //     flex: 1,
// // // //     padding: '10px',
// // // //     backgroundColor: '#ef4444',
// // // //     color: 'white',
// // // //     border: 'none',
// // // //     borderRadius: '8px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '14px',
// // // //     fontWeight: '600',
// // // //     transition: 'all 0.2s',
// // // //   },
// // // // };

// // // // const categoryTooltips = {
// // // //   arithmetic_symbols: "Basic math: +, −, ×, ÷, =, √",
// // // //   basic_binary_operators: "Operators: ∧, ∨, ⊕, ⊗",
// // // //   advanced_binary_operators: "Advanced: ∔, ∸, ⋉, ⋊",
// // // //   geometry_symbols: "Geometry: ∠, ⊥, ∥, △",
// // // //   basic_n_ary_operators: "N-ary: ∑, ∫, ∏, ⋃",
// // // //   math_letter_like_symbols: "Letters: ℝ, ℕ, ℤ, ∂",
// // // //   relational_operators: "Relations: ≤, ≥, ≈, ≡",
// // // //   brackets: "Brackets: (, [, {, ⟨",
// // // //   negation_symbols: "Negations: ≠, ≮, ∉",
// // // //   arrow_symbols: "Arrows: →, ⇒, ↔, ⇔",
// // // //   greek_letters: "Greek: α, β, γ, Δ, Σ, Ω",
// // // //   latin_letters: "Latin: a-z, A-Z",
// // // //   set_theory_symbols: "Sets: ∈, ⊂, ∪, ∩, ∅",
// // // //   trigonometry_symbols: "Trig: sin, cos, tan, π, θ",
// // // //   combinatorics_symbols: "Combinatorics: !, P(n,k), C(n,k)",
// // // //   probability_symbols: "Probability: P(A), E(X), σ, μ",
// // // // };

// // // // export default function NewMultipleTypeWriter() {
// // // //   const [input, setInput] = useState("");
// // // //   const [activeCategory, setActiveCategory] = useState(null);
// // // //   const [mode, setMode] = useState('regular');
// // // //   const [hoveredKey, setHoveredKey] = useState(null);
// // // //   const [hoveredCategory, setHoveredCategory] = useState(null);
// // // //   const textareaRef = useRef(null);

// // // //   const categories = Object.keys(data);

// // // //   const handleKeyClick = (keyObj) => {
// // // //     let char = keyObj.symbol;
    
// // // //     if (['space', 'enter', 'backspace', 'done'].includes(char)) {
// // // //       if (char === 'backspace') setInput(prev => prev.slice(0, -1));
// // // //       else if (char === 'space') setInput(prev => prev + ' ');
// // // //       else if (char === 'enter') setInput(prev => prev + '\n');
// // // //       return;
// // // //     }

// // // //     if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
// // // //     else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

// // // //     setInput(prev => prev + char);
// // // //     textareaRef.current?.focus();
// // // //   };

// // // //   const copyToClipboard = () => {
// // // //     navigator.clipboard.writeText(input);
// // // //   };

// // // //   const getCategoryLabel = (key) => {
// // // //     return key.split('_').map(word => 
// // // //       word.charAt(0).toUpperCase() + word.slice(1)
// // // //     ).join(' ');
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h1 style={styles.title}>Mathematical Keyboard</h1>
// // // //       <div style={styles.explanationBox}>
// // // //         Type mathematical symbols, Greek letters, and special characters with ease. Select a category below to access specialized keyboards, 
// // // //         choose between regular, subscript, or superscript modes, and click symbols to insert them into your text. Perfect for writing mathematical 
// // // //         equations, scientific notation, or any content requiring special characters.
// // // //       </div>

// // // //       <div style={styles.header}>
// // // //         {/* <div style={styles.navButtons}>
// // // //           <button 
// // // //             style={styles.navBtn}
// // // //             onClick={() => window.location.href = '/'}
// // // //             onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // // //             onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // // //           >
// // // //             Home
// // // //           </button>
// // // //           <button 
// // // //             style={styles.navBtn}
// // // //             onClick={() => window.history.back()}
// // // //             onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // // //             onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // // //           >
// // // //             Go Back
// // // //           </button>
// // // //         </div> */}
// // // //         <div style={styles.modeIndicator}>
// // // //           Mode: <strong>{mode}</strong>
// // // //         </div>
// // // //       </div>

// // // //       <div style={styles.categoriesWrapper}>
// // // //         <div style={styles.selectorGrid}>
// // // //           {categories.map((category, idx) => (
// // // //             <button
// // // //               key={idx}
// // // //               style={{
// // // //                 ...styles.categoryBtn,
// // // //                 ...(activeCategory === category ? styles.categoryBtnActive : {}),
// // // //               }}
// // // //               onClick={() => setActiveCategory(category)}
// // // //               onMouseEnter={(e) => {
// // // //                 setHoveredCategory(idx);
// // // //                 if (activeCategory === category) {
// // // //                   e.target.style.backgroundColor = '#4c5fd4';
// // // //                 } else {
// // // //                   e.target.style.backgroundColor = '#f9fafb';
// // // //                   e.target.style.borderColor = '#5B6EF5';
// // // //                 }
// // // //               }}
// // // //               onMouseLeave={(e) => {
// // // //                 setHoveredCategory(null);
// // // //                 if (activeCategory === category) {
// // // //                   e.target.style.backgroundColor = '#5B6EF5';
// // // //                 } else {
// // // //                   e.target.style.backgroundColor = 'white';
// // // //                   e.target.style.borderColor = '#e5e7eb';
// // // //                 }
// // // //               }}
// // // //             >
// // // //               {getCategoryLabel(category)}
// // // //               {hoveredCategory === idx && categoryTooltips[category] && (
// // // //                 <span style={{...styles.tooltip, opacity: 1}}>
// // // //                   {categoryTooltips[category]}
// // // //                 </span>
// // // //               )}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <div style={styles.mainArea}>
// // // //         <div style={styles.keyboardSection}>
// // // //           <h3 style={styles.keyboardTitle}>
// // // //             {activeCategory ? getCategoryLabel(activeCategory) : 'Select a category'}
// // // //           </h3>
// // // //           {activeCategory && (
// // // //             <div style={styles.keyboardGrid}>
// // // //               {data[activeCategory].map((keyObj, idx) => (
// // // //                 <button
// // // //                   key={idx}
// // // //                   style={{
// // // //                     ...styles.keyBtn,
// // // //                     ...(['space', 'enter', 'backspace', 'done'].includes(keyObj.symbol) ? styles.keyBtnSpecial : {}),
// // // //                   }}
// // // //                   onClick={() => handleKeyClick(keyObj)}
// // // //                   onMouseEnter={(e) => {
// // // //                     setHoveredKey(idx);
// // // //                     e.target.style.backgroundColor = keyObj.symbol.match(/space|enter|backspace|done/) ? '#4c5fd4' : '#e5e7eb';
// // // //                   }}
// // // //                   onMouseLeave={(e) => {
// // // //                     setHoveredKey(null);
// // // //                     e.target.style.backgroundColor = keyObj.symbol.match(/space|enter|backspace|done/) ? '#5B6EF5' : '#f9fafb';
// // // //                   }}
// // // //                 >
// // // //                   {keyObj.symbol}
// // // //                   {hoveredKey === idx && keyObj.explanation && (
// // // //                     <span style={{...styles.tooltip, opacity: 1}}>
// // // //                       {keyObj.explanation}
// // // //                     </span>
// // // //                   )}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div style={styles.textSection}>
// // // //           <div style={styles.modeControls}>
// // // //             {['regular', 'subscript', 'superscript'].map(m => (
// // // //               <button
// // // //                 key={m}
// // // //                 style={{
// // // //                   ...styles.modeBtn,
// // // //                   ...(mode === m ? styles.modeBtnActive : {}),
// // // //                 }}
// // // //                 onClick={() => setMode(m)}
// // // //                 onMouseEnter={(e) => mode !== m && (e.target.style.backgroundColor = '#f3f4f6')}
// // // //                 onMouseLeave={(e) => mode !== m && (e.target.style.backgroundColor = 'transparent')}
// // // //               >
// // // //                 {m.charAt(0).toUpperCase() + m.slice(1)} {mode === m ? '✓' : ''}
// // // //               </button>
// // // //             ))}
// // // //           </div>

// // // //           <textarea
// // // //             ref={textareaRef}
// // // //             style={styles.textarea}
// // // //             value={input}
// // // //             onChange={(e) => setInput(e.target.value)}
// // // //             placeholder="Click symbols to insert, or type directly..."
// // // //           />

// // // //           <div style={styles.actionButtons}>
// // // //             <button
// // // //               style={styles.copyBtn}
// // // //               onClick={copyToClipboard}
// // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // // //             >
// // // //               Copy to Clipboard
// // // //             </button>
// // // //             <button
// // // //               style={styles.clearBtn}
// // // //               onClick={() => setInput('')}
// // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
// // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
// // // //             >
// // // //               Clear
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // 'use client'
// // // import React, { useState, useRef } from 'react';
// // // import data from './math_symbols_data';
// // // import { superscripts, subscripts } from './super_sub_scripts';

// // // const styles = {
// // //   container: {
// // //     maxWidth: '1400px',
// // //     margin: '0 auto',
// // //     padding: '40px 20px',
// // //     fontFamily: 'Arial, sans-serif',
// // //   },
// // //   title: {
// // //     fontSize: '32px',
// // //     fontWeight: '700',
// // //     color: '#1a1a1a',
// // //     marginBottom: '10px',
// // //   },
// // //   explanationBox: {
// // //     fontSize: '15px',
// // //     color: '#4b5563',
// // //     lineHeight: '1.6',
// // //     marginBottom: '25px',
// // //     padding: '16px 20px',
// // //     backgroundColor: '#f9fafb',
// // //     border: '1px solid #e5e7eb',
// // //     borderRadius: '8px',
// // //   },
// // //   header: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: '20px',
// // //     gap: '10px',
// // //   },
// // //   navButtons: {
// // //     display: 'flex',
// // //     gap: '10px',
// // //   },
// // //   navBtn: {
// // //     padding: '8px 16px',
// // //     backgroundColor: '#5B6EF5',
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '6px',
// // //     cursor: 'pointer',
// // //     fontSize: '13px',
// // //     fontWeight: '500',
// // //     transition: 'all 0.2s',
// // //   },
// // //   modeIndicator: {
// // //     fontSize: '13px',
// // //     color: '#6b7280',
// // //     padding: '6px 14px',
// // //     backgroundColor: 'white',
// // //     borderRadius: '6px',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   categoriesWrapper: {
// // //     backgroundColor: '#fafbfc',
// // //     padding: '16px',
// // //     borderRadius: '8px',
// // //     marginBottom: '20px',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   selectorGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// // //     gap: '10px',
// // //   },
// // //   categoryBtn: {
// // //     padding: '10px 12px',
// // //     backgroundColor: 'white',
// // //     border: '2px solid #e5e7eb',
// // //     borderRadius: '6px',
// // //     cursor: 'pointer',
// // //     fontSize: '13px',
// // //     fontWeight: '500',
// // //     transition: 'all 0.2s',
// // //     color: '#374151',
// // //     position: 'relative',
// // //   },
// // //   categoryBtnActive: {
// // //     backgroundColor: '#5B6EF5',
// // //     color: 'white',
// // //     borderColor: '#5B6EF5',
// // //   },
// // //   tooltip: {
// // //     position: 'absolute',
// // //     bottom: '100%',
// // //     left: '50%',
// // //     transform: 'translateX(-50%)',
// // //     backgroundColor: '#1a1a1a',
// // //     color: 'white',
// // //     padding: '8px 12px',
// // //     borderRadius: '6px',
// // //     fontSize: '12px',
// // //     whiteSpace: 'nowrap',
// // //     marginBottom: '8px',
// // //     opacity: 0,
// // //     pointerEvents: 'none',
// // //     transition: 'opacity 0.2s',
// // //     zIndex: 1000,
// // //     maxWidth: '250px',
// // //     whiteSpace: 'normal',
// // //     textAlign: 'center',
// // //   },
// // //   mainArea: {
// // //     display: 'grid',
// // //     gridTemplateColumns: '1fr 1fr',
// // //     gap: '20px',
// // //     height: '500px',
// // //   },
// // //   keyboardSection: {
// // //     backgroundColor: 'white',
// // //     padding: '20px',
// // //     borderRadius: '12px',
// // //     border: '1px solid #e5e7eb',
// // //     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// // //     overflow: 'auto',
// // //     height: '100%',
// // //   },
// // //   keyboardTitle: {
// // //     margin: '0 0 16px 0',
// // //     fontSize: '18px',
// // //     fontWeight: '600',
// // //     color: '#1a1a1a',
// // //   },
// // //   keyboardGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fill, minmax(55px, 1fr))',
// // //     gap: '8px',
// // //   },
// // //   keyBtn: {
// // //     padding: '10px 6px',
// // //     backgroundColor: '#f9fafb',
// // //     border: '1px solid #e5e7eb',
// // //     borderRadius: '6px',
// // //     cursor: 'pointer',
// // //     fontSize: '18px',
// // //     minHeight: '45px',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     transition: 'all 0.2s',
// // //     position: 'relative',
// // //     color: '#1a1a1a',
// // //   },
// // //   keyBtnSpecial: {
// // //     backgroundColor: '#5B6EF5',
// // //     color: 'white',
// // //     fontSize: '11px',
// // //     fontWeight: '500',
// // //   },
// // //   textSection: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '12px',
// // //     height: '100%',
// // //   },
// // //   modeControls: {
// // //     display: 'flex',
// // //     gap: '8px',
// // //     backgroundColor: 'white',
// // //     padding: '6px',
// // //     borderRadius: '8px',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   modeBtn: {
// // //     flex: 1,
// // //     padding: '8px',
// // //     backgroundColor: 'transparent',
// // //     border: 'none',
// // //     borderRadius: '6px',
// // //     cursor: 'pointer',
// // //     fontSize: '13px',
// // //     fontWeight: '500',
// // //     color: '#6b7280',
// // //     transition: 'all 0.2s',
// // //   },
// // //   modeBtnActive: {
// // //     backgroundColor: '#5B6EF5',
// // //     color: 'white',
// // //   },
// // //   textarea: {
// // //     width: '100%',
// // //     height: '380px',
// // //     padding: '16px',
// // //     fontSize: '15px',
// // //     border: '1px solid #e5e7eb',
// // //     borderRadius: '8px',
// // //     resize: 'none',
// // //     fontFamily: 'monospace',
// // //     backgroundColor: 'white',
// // //     boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
// // //   },
// // //   actionButtons: {
// // //     display: 'flex',
// // //     gap: '10px',
// // //   },
// // //   copyBtn: {
// // //     flex: 1,
// // //     padding: '12px',
// // //     backgroundColor: '#5B6EF5',
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '8px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     fontWeight: '600',
// // //     transition: 'all 0.2s',
// // //   },
// // //   clearBtn: {
// // //     flex: 1,
// // //     padding: '12px',
// // //     backgroundColor: '#ef4444',
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '8px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     fontWeight: '600',
// // //     transition: 'all 0.2s',
// // //   },
// // // };

// // // const categoryTooltips = {
// // //   arithmetic_symbols: "Basic math: +, −, ×, ÷, =, √",
// // //   basic_binary_operators: "Operators: ∧, ∨, ⊕, ⊗",
// // //   advanced_binary_operators: "Advanced: ∔, ∸, ⋉, ⋊",
// // //   geometry_symbols: "Geometry: ∠, ⊥, ∥, △",
// // //   basic_n_ary_operators: "N-ary: ∑, ∫, ∏, ⋃",
// // //   math_letter_like_symbols: "Letters: ℝ, ℕ, ℤ, ∂",
// // //   relational_operators: "Relations: ≤, ≥, ≈, ≡",
// // //   brackets: "Brackets: (, [, {, ⟨",
// // //   negation_symbols: "Negations: ≠, ≮, ∉",
// // //   arrow_symbols: "Arrows: →, ⇒, ↔, ⇔",
// // //   greek_letters: "Greek: α, β, γ, Δ, Σ, Ω",
// // //   latin_letters: "Latin: a-z, A-Z",
// // //   set_theory_symbols: "Sets: ∈, ⊂, ∪, ∩, ∅",
// // //   trigonometry_symbols: "Trig: sin, cos, tan, π, θ",
// // //   combinatorics_symbols: "Combinatorics: !, P(n,k), C(n,k)",
// // //   probability_symbols: "Probability: P(A), E(X), σ, μ",
// // // };

// // // export default function NewMultipleTypeWriter() {
// // //   const [input, setInput] = useState("");
// // //   const [activeCategory, setActiveCategory] = useState(null);
// // //   const [mode, setMode] = useState('regular');
// // //   const [hoveredKey, setHoveredKey] = useState(null);
// // //   const [hoveredCategory, setHoveredCategory] = useState(null);
// // //   const textareaRef = useRef(null);

// // //   const categories = Object.keys(data);

// // //   const handleKeyClick = (keyObj) => {
// // //     let char = keyObj.symbol;
    
// // //     if (['space', 'enter', 'backspace', 'done'].includes(char)) {
// // //       if (char === 'backspace') setInput(prev => prev.slice(0, -1));
// // //       else if (char === 'space') setInput(prev => prev + ' ');
// // //       else if (char === 'enter') setInput(prev => prev + '\n');
// // //       return;
// // //     }

// // //     if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
// // //     else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

// // //     setInput(prev => prev + char);
// // //     textareaRef.current?.focus();
// // //   };

// // //   const copyToClipboard = () => {
// // //     navigator.clipboard.writeText(input);
// // //   };

// // //   const getCategoryLabel = (key) => {
// // //     return key.split('_').map(word => 
// // //       word.charAt(0).toUpperCase() + word.slice(1)
// // //     ).join(' ');
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       {/* <h1 style={styles.title}>Mathematical Keyboard</h1> */}
// // //       <div style={styles.explanationBox}>
// // //         Type mathematical symbols, Greek letters, and special characters with ease. Select a category below to access specialized keyboards, 
// // //         choose between regular, subscript, or superscript modes, and click symbols to insert them into your text. Perfect for writing mathematical 
// // //         equations, scientific notation, or any content requiring special characters.
// // //       </div>

// // //       <div style={styles.header}>
// // //         {/* <div style={styles.navButtons}>
// // //           <button 
// // //             style={styles.navBtn}
// // //             onClick={() => window.location.href = '/'}
// // //             onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // //             onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // //           >
// // //             Home
// // //           </button>
// // //           <button 
// // //             style={styles.navBtn}
// // //             onClick={() => window.history.back()}
// // //             onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // //             onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // //           >
// // //             Go Back
// // //           </button>
// // //         </div> */}
// // //         <div style={styles.modeIndicator}>
// // //           Mode: <strong>{mode}</strong>
// // //         </div>
// // //       </div>

// // //       <div style={styles.categoriesWrapper}>
// // //         <div style={styles.selectorGrid}>
// // //           {categories.map((category, idx) => (
// // //             <button
// // //               key={idx}
// // //               style={{
// // //                 ...styles.categoryBtn,
// // //                 ...(activeCategory === category ? styles.categoryBtnActive : {}),
// // //               }}
// // //               onClick={() => setActiveCategory(category)}
// // //               onMouseEnter={(e) => {
// // //                 setHoveredCategory(idx);
// // //                 if (activeCategory === category) {
// // //                   e.target.style.backgroundColor = '#4c5fd4';
// // //                 } else {
// // //                   e.target.style.backgroundColor = '#f9fafb';
// // //                   e.target.style.borderColor = '#5B6EF5';
// // //                 }
// // //               }}
// // //               onMouseLeave={(e) => {
// // //                 setHoveredCategory(null);
// // //                 if (activeCategory === category) {
// // //                   e.target.style.backgroundColor = '#5B6EF5';
// // //                 } else {
// // //                   e.target.style.backgroundColor = 'white';
// // //                   e.target.style.borderColor = '#e5e7eb';
// // //                 }
// // //               }}
// // //             >
// // //               {getCategoryLabel(category)}
// // //               {hoveredCategory === idx && categoryTooltips[category] && (
// // //                 <span style={{...styles.tooltip, opacity: 1}}>
// // //                   {categoryTooltips[category]}
// // //                 </span>
// // //               )}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div style={styles.mainArea}>
// // //         <div style={styles.keyboardSection}>
// // //           <h3 style={styles.keyboardTitle}>
// // //             {activeCategory ? getCategoryLabel(activeCategory) : 'Select a category'}
// // //           </h3>
// // //           {activeCategory && (
// // //             <div style={styles.keyboardGrid}>
// // //               {data[activeCategory].map((keyObj, idx) => (
// // //                 <button
// // //                   key={idx}
// // //                   style={{
// // //                     ...styles.keyBtn,
// // //                     ...(['space', 'enter', 'backspace', 'done'].includes(keyObj.symbol) ? styles.keyBtnSpecial : {}),
// // //                   }}
// // //                   onClick={() => handleKeyClick(keyObj)}
// // //                   onMouseEnter={(e) => {
// // //                     setHoveredKey(idx);
// // //                     e.target.style.backgroundColor = keyObj.symbol.match(/space|enter|backspace|done/) ? '#4c5fd4' : '#e5e7eb';
// // //                   }}
// // //                   onMouseLeave={(e) => {
// // //                     setHoveredKey(null);
// // //                     e.target.style.backgroundColor = keyObj.symbol.match(/space|enter|backspace|done/) ? '#5B6EF5' : '#f9fafb';
// // //                   }}
// // //                 >
// // //                   {keyObj.symbol}
// // //                   {hoveredKey === idx && keyObj.explanation && (
// // //                     <span style={{...styles.tooltip, opacity: 1}}>
// // //                       {keyObj.explanation}
// // //                     </span>
// // //                   )}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div style={styles.textSection}>
// // //           <div style={styles.modeControls}>
// // //             {['regular', 'subscript', 'superscript'].map(m => (
// // //               <button
// // //                 key={m}
// // //                 style={{
// // //                   ...styles.modeBtn,
// // //                   ...(mode === m ? styles.modeBtnActive : {}),
// // //                 }}
// // //                 onClick={() => setMode(m)}
// // //                 onMouseEnter={(e) => mode !== m && (e.target.style.backgroundColor = '#f3f4f6')}
// // //                 onMouseLeave={(e) => mode !== m && (e.target.style.backgroundColor = 'transparent')}
// // //               >
// // //                 {m.charAt(0).toUpperCase() + m.slice(1)} {mode === m ? '✓' : ''}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <textarea
// // //             ref={textareaRef}
// // //             style={styles.textarea}
// // //             value={input}
// // //             onChange={(e) => setInput(e.target.value)}
// // //             placeholder="Click symbols to insert, or type directly..."
// // //           />

// // //           <div style={styles.actionButtons}>
// // //             <button
// // //               style={styles.copyBtn}
// // //               onClick={copyToClipboard}
// // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#4c5fd4'}
// // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#5B6EF5'}
// // //             >
// // //               Copy to Clipboard
// // //             </button>
// // //             <button
// // //               style={styles.clearBtn}
// // //               onClick={() => setInput('')}
// // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
// // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
// // //             >
// // //               Clear
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // 'use client'
// // import React, { useState, useRef } from 'react';
// // import data from './math_symbols_data';
// // import { superscripts, subscripts } from './super_sub_scripts';

// // const styles = {
// //   container: {
// //     maxWidth: '1400px',
// //     margin: '0 auto',
// //     padding: '30px 20px',
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   explanationBox: {
// //     fontSize: '14px',
// //     color: '#475569',
// //     lineHeight: '1.5',
// //     marginBottom: '20px',
// //     padding: '14px 18px',
// //     backgroundColor: '#f0f9ff',
// //     border: '2px solid #3498db',
// //     borderLeft: '5px solid #3498db',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 4px rgba(52,152,219,0.1)',
// //   },
// //   header: {
// //     display: 'flex',
// //     justifyContent: 'flex-end',
// //     marginBottom: '15px',
// //   },
// //   modeIndicator: {
// //     fontSize: '13px',
// //     color: '#475569',
// //     padding: '6px 14px',
// //     backgroundColor: 'white',
// //     borderRadius: '6px',
// //     border: '2px solid #cbd5e1',
// //     fontWeight: '500',
// //   },
// //   categoriesWrapper: {
// //     backgroundColor: '#f8fafc',
// //     padding: '12px',
// //     borderRadius: '8px',
// //     marginBottom: '18px',
// //     border: '2px solid #cbd5e1',
// //   },
// //   selectorGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
// //     gap: '8px',
// //   },
// //   categoryBtn: {
// //     padding: '8px 10px',
// //     backgroundColor: 'white',
// //     border: '2px solid #cbd5e1',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     transition: 'all 0.2s',
// //     color: '#334155',
// //     position: 'relative',
// //   },
// //   categoryBtnActive: {
// //     backgroundColor: '#3498db',
// //     color: 'white',
// //     borderColor: '#3498db',
// //     boxShadow: '0 2px 6px rgba(52,152,219,0.3)',
// //   },
// //   tooltip: {
// //     position: 'absolute',
// //     bottom: '100%',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     backgroundColor: '#1e293b',
// //     color: 'white',
// //     padding: '8px 12px',
// //     borderRadius: '6px',
// //     fontSize: '11px',
// //     whiteSpace: 'nowrap',
// //     marginBottom: '8px',
// //     opacity: 0,
// //     pointerEvents: 'none',
// //     transition: 'opacity 0.2s',
// //     zIndex: 1000,
// //     maxWidth: '250px',
// //     whiteSpace: 'normal',
// //     textAlign: 'center',
// //   },
// //   mainArea: {
// //     display: 'grid',
// //     gridTemplateColumns: '1fr 1fr',
// //     gap: '20px',
// //     height: '480px',
// //   },
// //   keyboardSection: {
// //     backgroundColor: 'white',
// //     padding: '18px',
// //     borderRadius: '10px',
// //     border: '2px solid #cbd5e1',
// //     boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
// //     overflow: 'auto',
// //     height: '100%',
// //   },
// //   keyboardTitle: {
// //     margin: '0 0 14px 0',
// //     fontSize: '17px',
// //     fontWeight: '700',
// //     color: '#1e293b',
// //   },
// //   keyboardGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
// //     gap: '7px',
// //   },
// //   keyBtn: {
// //     padding: '10px 6px',
// //     backgroundColor: '#f8fafc',
// //     border: '2px solid #cbd5e1',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     fontSize: '18px',
// //     minHeight: '44px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     transition: 'all 0.2s',
// //     position: 'relative',
// //     color: '#1e293b',
// //     fontWeight: '500',
// //   },
// //   keyBtnSpecial: {
// //     backgroundColor: '#3498db',
// //     color: 'white',
// //     fontSize: '11px',
// //     fontWeight: '600',
// //     borderColor: '#3498db',
// //   },
// //   textSection: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '10px',
// //     height: '100%',
// //   },
// //   modeControls: {
// //     display: 'flex',
// //     gap: '6px',
// //     backgroundColor: 'white',
// //     padding: '4px',
// //     borderRadius: '8px',
// //     border: '2px solid #cbd5e1',
// //   },
// //   modeBtn: {
// //     flex: 1,
// //     padding: '7px',
// //     backgroundColor: 'transparent',
// //     border: 'none',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     color: '#64748b',
// //     transition: 'all 0.2s',
// //   },
// //   modeBtnActive: {
// //     backgroundColor: '#3498db',
// //     color: 'white',
// //     boxShadow: '0 2px 4px rgba(52,152,219,0.3)',
// //   },
// //   textarea: {
// //     width: '100%',
// //     height: '345px',
// //     padding: '14px',
// //     fontSize: '15px',
// //     border: '2px solid #cbd5e1',
// //     borderRadius: '8px',
// //     resize: 'none',
// //     fontFamily: 'monospace',
// //     backgroundColor: 'white',
// //     boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
// //     color: '#1e293b',
// //   },
// //   actionButtons: {
// //     display: 'flex',
// //     gap: '10px',
// //   },
// //   copyBtn: {
// //     flex: 1,
// //     padding: '11px',
// //     backgroundColor: '#3498db',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '8px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     fontWeight: '700',
// //     transition: 'all 0.2s',
// //     boxShadow: '0 2px 6px rgba(52,152,219,0.3)',
// //   },
// //   clearBtn: {
// //     flex: 1,
// //     padding: '11px',
// //     backgroundColor: '#ef4444',
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '8px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     fontWeight: '700',
// //     transition: 'all 0.2s',
// //     boxShadow: '0 2px 6px rgba(239,68,68,0.3)',
// //   },
// // };

// // const categoryTooltips = {
// //   arithmetic_symbols: "Basic math: +, −, ×, ÷, =, √",
// //   basic_binary_operators: "Operators: ∧, ∨, ⊕, ⊗",
// //   advanced_binary_operators: "Advanced: ∔, ∸, ⋉, ⋊",
// //   geometry_symbols: "Geometry: ∠, ⊥, ∥, △",
// //   basic_n_ary_operators: "N-ary: ∑, ∫, ∏, ⋃",
// //   math_letter_like_symbols: "Letters: ℝ, ℕ, ℤ, ∂",
// //   relational_operators: "Relations: ≤, ≥, ≈, ≡",
// //   brackets: "Brackets: (, [, {, ⟨",
// //   negation_symbols: "Negations: ≠, ≮, ∉",
// //   arrow_symbols: "Arrows: →, ⇒, ↔, ⇔",
// //   greek_letters: "Greek: α, β, γ, Δ, Σ, Ω",
// //   latin_letters: "Latin: a-z, A-Z",
// //   set_theory_symbols: "Sets: ∈, ⊂, ∪, ∩, ∅",
// //   trigonometry_symbols: "Trig: sin, cos, tan, π, θ",
// //   combinatorics_symbols: "Combinatorics: !, P(n,k), C(n,k)",
// //   probability_symbols: "Probability: P(A), E(X), σ, μ",
// // };

// // export default function NewMultipleTypeWriter() {
// //   const [input, setInput] = useState("");
// //   const [activeCategory, setActiveCategory] = useState(null);
// //   const [mode, setMode] = useState('regular');
// //   const [hoveredKey, setHoveredKey] = useState(null);
// //   const [hoveredCategory, setHoveredCategory] = useState(null);
// //   const textareaRef = useRef(null);

// //   const categories = Object.keys(data);

// //   const handleKeyClick = (keyObj) => {
// //     let char = keyObj.symbol;
    
// //     if (['space', 'enter', 'backspace', 'done'].includes(char)) {
// //       if (char === 'backspace') setInput(prev => prev.slice(0, -1));
// //       else if (char === 'space') setInput(prev => prev + ' ');
// //       else if (char === 'enter') setInput(prev => prev + '\n');
// //       return;
// //     }

// //     if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
// //     else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

// //     setInput(prev => prev + char);
// //     textareaRef.current?.focus();
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(input);
// //   };

// //   const getCategoryLabel = (key) => {
// //     return key.split('_').map(word => 
// //       word.charAt(0).toUpperCase() + word.slice(1)
// //     ).join(' ');
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.explanationBox}>
// //         Type mathematical symbols, Greek letters, and special characters with ease. Select a category below to access specialized keyboards, 
// //         choose between regular, subscript, or superscript modes, and click symbols to insert them into your text.
// //       </div>

// //       <div style={styles.header}>
// //         <div style={styles.modeIndicator}>
// //           Mode: <strong>{mode}</strong>
// //         </div>
// //       </div>

// //       <div style={styles.categoriesWrapper}>
// //         <div style={styles.selectorGrid}>
// //           {categories.map((category, idx) => (
// //             <button
// //               key={idx}
// //               style={{
// //                 ...styles.categoryBtn,
// //                 ...(activeCategory === category ? styles.categoryBtnActive : {}),
// //               }}
// //               onClick={() => setActiveCategory(category)}
// //               onMouseEnter={(e) => {
// //                 setHoveredCategory(idx);
// //                 if (activeCategory === category) {
// //                   e.target.style.backgroundColor = '#2980b9';
// //                   e.target.style.transform = 'translateY(-1px)';
// //                 } else {
// //                   e.target.style.backgroundColor = '#f0f9ff';
// //                   e.target.style.borderColor = '#3498db';
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 setHoveredCategory(null);
// //                 if (activeCategory === category) {
// //                   e.target.style.backgroundColor = '#3498db';
// //                   e.target.style.transform = 'translateY(0)';
// //                 } else {
// //                   e.target.style.backgroundColor = 'white';
// //                   e.target.style.borderColor = '#cbd5e1';
// //                 }
// //               }}
// //             >
// //               {getCategoryLabel(category)}
// //               {hoveredCategory === idx && categoryTooltips[category] && (
// //                 <span style={{...styles.tooltip, opacity: 1}}>
// //                   {categoryTooltips[category]}
// //                 </span>
// //               )}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div style={styles.mainArea}>
// //         <div style={styles.keyboardSection}>
// //           <h3 style={styles.keyboardTitle}>
// //             {activeCategory ? getCategoryLabel(activeCategory) : 'Select a category'}
// //           </h3>
// //           {activeCategory && (
// //             <div style={styles.keyboardGrid}>
// //               {data[activeCategory].map((keyObj, idx) => (
// //                 <button
// //                   key={idx}
// //                   style={{
// //                     ...styles.keyBtn,
// //                     ...(['space', 'enter', 'backspace', 'done'].includes(keyObj.symbol) ? styles.keyBtnSpecial : {}),
// //                   }}
// //                   onClick={() => handleKeyClick(keyObj)}
// //                   onMouseEnter={(e) => {
// //                     setHoveredKey(idx);
// //                     if (keyObj.symbol.match(/space|enter|backspace|done/)) {
// //                       e.target.style.backgroundColor = '#2980b9';
// //                       e.target.style.transform = 'scale(1.05)';
// //                     } else {
// //                       e.target.style.backgroundColor = '#e0f2fe';
// //                       e.target.style.borderColor = '#3498db';
// //                       e.target.style.transform = 'scale(1.05)';
// //                     }
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     setHoveredKey(null);
// //                     if (keyObj.symbol.match(/space|enter|backspace|done/)) {
// //                       e.target.style.backgroundColor = '#3498db';
// //                       e.target.style.transform = 'scale(1)';
// //                     } else {
// //                       e.target.style.backgroundColor = '#f8fafc';
// //                       e.target.style.borderColor = '#cbd5e1';
// //                       e.target.style.transform = 'scale(1)';
// //                     }
// //                   }}
// //                 >
// //                   {keyObj.symbol}
// //                   {hoveredKey === idx && keyObj.explanation && (
// //                     <span style={{...styles.tooltip, opacity: 1}}>
// //                       {keyObj.explanation}
// //                     </span>
// //                   )}
// //                 </button>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         <div style={styles.textSection}>
// //           <div style={styles.modeControls}>
// //             {['regular', 'subscript', 'superscript'].map(m => (
// //               <button
// //                 key={m}
// //                 style={{
// //                   ...styles.modeBtn,
// //                   ...(mode === m ? styles.modeBtnActive : {}),
// //                 }}
// //                 onClick={() => setMode(m)}
// //                 onMouseEnter={(e) => {
// //                   if (mode !== m) {
// //                     e.target.style.backgroundColor = '#f0f9ff';
// //                   }
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   if (mode !== m) {
// //                     e.target.style.backgroundColor = 'transparent';
// //                   }
// //                 }}
// //               >
// //                 {m.charAt(0).toUpperCase() + m.slice(1)} {mode === m ? '✓' : ''}
// //               </button>
// //             ))}
// //           </div>

// //           <textarea
// //             ref={textareaRef}
// //             style={styles.textarea}
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             placeholder="Click symbols to insert, or type directly..."
// //           />

// //           <div style={styles.actionButtons}>
// //             <button
// //               style={styles.copyBtn}
// //               onClick={copyToClipboard}
// //               onMouseEnter={(e) => {
// //                 e.target.style.backgroundColor = '#2980b9';
// //                 e.target.style.transform = 'translateY(-2px)';
// //                 e.target.style.boxShadow = '0 4px 12px rgba(52,152,219,0.4)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.backgroundColor = '#3498db';
// //                 e.target.style.transform = 'translateY(0)';
// //                 e.target.style.boxShadow = '0 2px 6px rgba(52,152,219,0.3)';
// //               }}
// //             >
// //               Copy to Clipboard
// //             </button>
// //             <button
// //               style={styles.clearBtn}
// //               onClick={() => setInput('')}
// //               onMouseEnter={(e) => {
// //                 e.target.style.backgroundColor = '#dc2626';
// //                 e.target.style.transform = 'translateY(-2px)';
// //                 e.target.style.boxShadow = '0 4px 12px rgba(239,68,68,0.4)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.backgroundColor = '#ef4444';
// //                 e.target.style.transform = 'translateY(0)';
// //                 e.target.style.boxShadow = '0 2px 6px rgba(239,68,68,0.3)';
// //               }}
// //             >
// //               Clear
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// 'use client'
// import React, { useState, useRef } from 'react';
// import data from './math_symbols_data';
// import { superscripts, subscripts } from './super_sub_scripts';

// const qwertyLayout = [
//   "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//   "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//   "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//   "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//   "space", "done"
// ];

// const styles = {
//   container: {
//     maxWidth: '1400px',
//     margin: '0 auto',
//     padding: '30px 20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   explanationBox: {
//     fontSize: '14px',
//     color: '#475569',
//     lineHeight: '1.5',
//     marginBottom: '20px',
//     padding: '14px 18px',
//     backgroundColor: '#f0f9ff',
//     border: '2px solid #3498db',
//     borderLeft: '5px solid #3498db',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(52,152,219,0.1)',
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginBottom: '15px',
//   },
//   modeIndicator: {
//     fontSize: '13px',
//     color: '#475569',
//     padding: '6px 14px',
//     backgroundColor: 'white',
//     borderRadius: '6px',
//     border: '2px solid #cbd5e1',
//     fontWeight: '500',
//   },
//   categoriesWrapper: {
//     backgroundColor: '#f8fafc',
//     padding: '12px',
//     borderRadius: '8px',
//     marginBottom: '18px',
//     border: '2px solid #cbd5e1',
//   },
//   selectorGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
//     gap: '8px',
//   },
//   categoryBtn: {
//     padding: '8px 10px',
//     backgroundColor: 'white',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '12px',
//     fontWeight: '600',
//     transition: 'all 0.2s',
//     color: '#334155',
//     position: 'relative',
//   },
//   categoryBtnActive: {
//     backgroundColor: '#3498db',
//     color: 'white',
//     borderColor: '#3498db',
//     boxShadow: '0 2px 6px rgba(52,152,219,0.3)',
//   },
//   tooltip: {
//     position: 'absolute',
//     bottom: '100%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: '#1e293b',
//     color: 'white',
//     padding: '8px 12px',
//     borderRadius: '6px',
//     fontSize: '11px',
//     whiteSpace: 'nowrap',
//     marginBottom: '8px',
//     opacity: 0,
//     pointerEvents: 'none',
//     transition: 'opacity 0.2s',
//     zIndex: 1000,
//     maxWidth: '250px',
//     whiteSpace: 'normal',
//     textAlign: 'center',
//   },
//   mainArea: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//     height: '480px',
//   },
//   keyboardSection: {
//     backgroundColor: 'white',
//     padding: '18px',
//     borderRadius: '10px',
//     border: '2px solid #cbd5e1',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
//     overflow: 'auto',
//     height: '100%',
//   },
//   keyboardTitle: {
//     margin: '0 0 14px 0',
//     fontSize: '17px',
//     fontWeight: '700',
//     color: '#1e293b',
//   },
//   keyboardGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
//     gap: '7px',
//   },
//   qwertyGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(11, 1fr)',
//     gap: '7px',
//   },
//   keyBtn: {
//     padding: '10px 6px',
//     backgroundColor: '#f8fafc',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '18px',
//     minHeight: '44px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//     position: 'relative',
//     color: '#1e293b',
//     fontWeight: '500',
//   },
//   keyBtnSpecial: {
//     backgroundColor: '#3498db',
//     color: 'white',
//     fontSize: '11px',
//     fontWeight: '600',
//     borderColor: '#3498db',
//   },
//   textSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     height: '100%',
//   },
//   modeControls: {
//     display: 'flex',
//     gap: '6px',
//     backgroundColor: 'white',
//     padding: '4px',
//     borderRadius: '8px',
//     border: '2px solid #cbd5e1',
//   },
//   modeBtn: {
//     flex: 1,
//     padding: '7px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#64748b',
//     transition: 'all 0.2s',
//   },
//   modeBtnActive: {
//     backgroundColor: '#3498db',
//     color: 'white',
//     boxShadow: '0 2px 4px rgba(52,152,219,0.3)',
//   },
//   textarea: {
//     width: '100%',
//     height: '345px',
//     padding: '14px',
//     fontSize: '15px',
//     border: '2px solid #cbd5e1',
//     borderRadius: '8px',
//     resize: 'none',
//     fontFamily: 'monospace',
//     backgroundColor: 'white',
//     boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
//     color: '#1e293b',
//   },
//   actionButtons: {
//     display: 'flex',
//     gap: '10px',
//   },
//   copyBtn: {
//     flex: 1,
//     padding: '11px',
//     backgroundColor: '#3498db',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '700',
//     transition: 'all 0.2s',
//     boxShadow: '0 2px 6px rgba(52,152,219,0.3)',
//   },
//   clearBtn: {
//     flex: 1,
//     padding: '11px',
//     backgroundColor: '#ef4444',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '700',
//     transition: 'all 0.2s',
//     boxShadow: '0 2px 6px rgba(239,68,68,0.3)',
//   },
// };

// const categoryTooltips = {
//   qwerty: "Standard QWERTY keyboard",
//   arithmetic_symbols: "Basic math: +, −, ×, ÷, =, √",
//   basic_binary_operators: "Operators: ∧, ∨, ⊕, ⊗",
//   advanced_binary_operators: "Advanced: ∔, ∸, ⋉, ⋊",
//   geometry_symbols: "Geometry: ∠, ⊥, ∥, △",
//   basic_n_ary_operators: "N-ary: ∑, ∫, ∏, ⋃",
//   math_letter_like_symbols: "Letters: ℝ, ℕ, ℤ, ∂",
//   relational_operators: "Relations: ≤, ≥, ≈, ≡",
//   brackets: "Brackets: (, [, {, ⟨",
//   negation_symbols: "Negations: ≠, ≮, ∉",
//   arrow_symbols: "Arrows: →, ⇒, ↔, ⇔",
//   greek_letters: "Greek: α, β, γ, Δ, Σ, Ω",
//   latin_letters: "Latin: a-z, A-Z",
//   set_theory_symbols: "Sets: ∈, ⊂, ∪, ∩, ∅",
//   trigonometry_symbols: "Trig: sin, cos, tan, π, θ",
//   combinatorics_symbols: "Combinatorics: !, P(n,k), C(n,k)",
//   probability_symbols: "Probability: P(A), E(X), σ, μ",
// };

// export default function NewMultipleTypeWriter() {
//   const [input, setInput] = useState("");
//   const [activeCategory, setActiveCategory] = useState('qwerty');
//   const [mode, setMode] = useState('regular');
//   const [hoveredKey, setHoveredKey] = useState(null);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [capsLock, setCapsLock] = useState(false);
//   const textareaRef = useRef(null);

//   const categories = ['qwerty', ...Object.keys(data)];

//   const handleKeyClick = (key) => {
//     if (activeCategory === 'qwerty') {
//       if (key === 'backspace') setInput(prev => prev.slice(0, -1));
//       else if (key === 'caps') setCapsLock(!capsLock);
//       else if (key === 'enter') setInput(prev => prev + '\n');
//       else if (key === 'space') setInput(prev => prev + ' ');
//       else if (key === 'done') return;
//       else {
//         let char = key.length === 1 ? (capsLock ? key.toUpperCase() : key) : key;
//         if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
//         else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];
//         setInput(prev => prev + char);
//       }
//     } else {
//       let char = key.symbol;
      
//       if (['space', 'enter', 'backspace', 'done'].includes(char)) {
//         if (char === 'backspace') setInput(prev => prev.slice(0, -1));
//         else if (char === 'space') setInput(prev => prev + ' ');
//         else if (char === 'enter') setInput(prev => prev + '\n');
//         return;
//       }

//       if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
//       else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

//       setInput(prev => prev + char);
//     }
//     textareaRef.current?.focus();
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(input);
//   };

//   const getCategoryLabel = (key) => {
//     if (key === 'qwerty') return 'QWERTY Keyboard';
//     return key.split('_').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
//   };

//   const renderKeyboard = () => {
//     if (activeCategory === 'qwerty') {
//       return (
//         <div style={styles.qwertyGrid}>
//           {qwertyLayout.map((key, idx) => (
//             <button
//               key={idx}
//               style={{
//                 ...styles.keyBtn,
//                 ...(['space', 'enter', 'backspace', 'done', 'caps'].includes(key) ? styles.keyBtnSpecial : {}),
//                 ...(key === 'space' ? { gridColumn: 'span 4' } : {}),
//                 ...(key === 'backspace' ? { gridColumn: 'span 2' } : {}),
//                 ...(key === 'caps' || key === 'enter' ? { gridColumn: 'span 2' } : {}),
//               }}
//               onClick={() => handleKeyClick(key)}
//               onMouseEnter={(e) => {
//                 setHoveredKey(idx);
//                 if (['space', 'enter', 'backspace', 'done', 'caps'].includes(key)) {
//                   e.target.style.backgroundColor = '#2980b9';
//                   e.target.style.transform = 'scale(1.05)';
//                 } else {
//                   e.target.style.backgroundColor = '#e0f2fe';
//                   e.target.style.borderColor = '#3498db';
//                   e.target.style.transform = 'scale(1.05)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 setHoveredKey(null);
//                 if (['space', 'enter', 'backspace', 'done', 'caps'].includes(key)) {
//                   e.target.style.backgroundColor = '#3498db';
//                   e.target.style.transform = 'scale(1)';
//                 } else {
//                   e.target.style.backgroundColor = '#f8fafc';
//                   e.target.style.borderColor = '#cbd5e1';
//                   e.target.style.transform = 'scale(1)';
//                 }
//               }}
//             >
//               {key === 'space' ? 'space' : key === 'backspace' ? 'backspace' : key === 'caps' ? 'caps' : key === 'enter' ? 'enter' : key === 'done' ? 'done' : key}
//             </button>
//           ))}
//         </div>
//       );
//     }

//     return (
//       <div style={styles.keyboardGrid}>
//         {data[activeCategory].map((keyObj, idx) => (
//           <button
//             key={idx}
//             style={{
//               ...styles.keyBtn,
//               ...(['space', 'enter', 'backspace', 'done'].includes(keyObj.symbol) ? styles.keyBtnSpecial : {}),
//             }}
//             onClick={() => handleKeyClick(keyObj)}
//             onMouseEnter={(e) => {
//               setHoveredKey(idx);
//               if (keyObj.symbol.match(/space|enter|backspace|done/)) {
//                 e.target.style.backgroundColor = '#2980b9';
//                 e.target.style.transform = 'scale(1.05)';
//               } else {
//                 e.target.style.backgroundColor = '#e0f2fe';
//                 e.target.style.borderColor = '#3498db';
//                 e.target.style.transform = 'scale(1.05)';
//               }
//             }}
//             onMouseLeave={(e) => {
//               setHoveredKey(null);
//               if (keyObj.symbol.match(/space|enter|backspace|done/)) {
//                 e.target.style.backgroundColor = '#3498db';
//                 e.target.style.transform = 'scale(1)';
//               } else {
//                 e.target.style.backgroundColor = '#f8fafc';
//                 e.target.style.borderColor = '#cbd5e1';
//                 e.target.style.transform = 'scale(1)';
//               }
//             }}
//           >
//             {keyObj.symbol}
//             {hoveredKey === idx && keyObj.explanation && (
//               <span style={{...styles.tooltip, opacity: 1}}>
//                 {keyObj.explanation}
//               </span>
//             )}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.explanationBox}>
//         Type mathematical symbols, Greek letters, and special characters with ease. Select a category below to access specialized keyboards, 
//         choose between regular, subscript, or superscript modes, and click symbols to insert them into your text.
//       </div>

//       <div style={styles.header}>
//         <div style={styles.modeIndicator}>
//           Mode: <strong>{mode}</strong>
//         </div>
//       </div>

//       <div style={styles.categoriesWrapper}>
//         <div style={styles.selectorGrid}>
//           {categories.map((category, idx) => (
//             <button
//               key={idx}
//               style={{
//                 ...styles.categoryBtn,
//                 ...(activeCategory === category ? styles.categoryBtnActive : {}),
//               }}
//               onClick={() => setActiveCategory(category)}
//               onMouseEnter={(e) => {
//                 setHoveredCategory(idx);
//                 if (activeCategory === category) {
//                   e.target.style.backgroundColor = '#2980b9';
//                   e.target.style.transform = 'translateY(-1px)';
//                 } else {
//                   e.target.style.backgroundColor = '#f0f9ff';
//                   e.target.style.borderColor = '#3498db';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 setHoveredCategory(null);
//                 if (activeCategory === category) {
//                   e.target.style.backgroundColor = '#3498db';
//                   e.target.style.transform = 'translateY(0)';
//                 } else {
//                   e.target.style.backgroundColor = 'white';
//                   e.target.style.borderColor = '#cbd5e1';
//                 }
//               }}
//             >
//               {getCategoryLabel(category)}
//               {hoveredCategory === idx && categoryTooltips[category] && (
//                 <span style={{...styles.tooltip, opacity: 1}}>
//                   {categoryTooltips[category]}
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div style={styles.mainArea}>
//         <div style={styles.keyboardSection}>
//           <h3 style={styles.keyboardTitle}>
//             {getCategoryLabel(activeCategory)}
//           </h3>
//           {renderKeyboard()}
//         </div>

//         <div style={styles.textSection}>
//           <div style={styles.modeControls}>
//             {['regular', 'subscript', 'superscript'].map(m => (
//               <button
//                 key={m}
//                 style={{
//                   ...styles.modeBtn,
//                   ...(mode === m ? styles.modeBtnActive : {}),
//                 }}
//                 onClick={() => setMode(m)}
//                 onMouseEnter={(e) => {
//                   if (mode !== m) {
//                     e.target.style.backgroundColor = '#f0f9ff';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (mode !== m) {
//                     e.target.style.backgroundColor = 'transparent';
//                   }
//                 }}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)} {mode === m ? '✓' : ''}
//               </button>
//             ))}
//           </div>

//           <textarea
//             ref={textareaRef}
//             style={styles.textarea}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Click symbols to insert, or type directly..."
//           />

//           <div style={styles.actionButtons}>
//             <button
//               style={styles.copyBtn}
//               onClick={copyToClipboard}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#2980b9';
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 4px 12px rgba(52,152,219,0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = '#3498db';
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 2px 6px rgba(52,152,219,0.3)';
//               }}
//             >
//               Copy to Clipboard
//             </button>
//             <button
//               style={styles.clearBtn}
//               onClick={() => setInput('')}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#dc2626';
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 4px 12px rgba(239,68,68,0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = '#ef4444';
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 2px 6px rgba(239,68,68,0.3)';
//               }}
//             >
//               Clear
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client'
// import React, { useState, useRef } from 'react';
// import data from './math_symbols_data';
// import { superscripts, subscripts } from './super_sub_scripts';

// const qwertyLayout = [
//   "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//   "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//   "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//   "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//   "space", "done"
// ];

// const styles = {
//   container: {
//     maxWidth: '1400px',
//     margin: '0 auto',
//     padding: '30px 20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   explanationBox: {
//     fontSize: '14px',
//     color: '#475569',
//     lineHeight: '1.5',
//     marginBottom: '20px',
//     padding: '14px 18px',
//     backgroundColor: '#f0f9ff',
//     border: '2px solid #3498db',
//     borderLeft: '5px solid #3498db',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(52,152,219,0.1)',
//   },
//   categoriesWrapper: {
//     backgroundColor: '#f8fafc',
//     padding: '12px',
//     borderRadius: '8px',
//     marginBottom: '18px',
//     border: '2px solid #cbd5e1',
//     position: 'relative',
//   },
//   selectorGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
//     gap: '8px',
//   },
//   categoryBtn: {
//     padding: '8px 10px',
//     backgroundColor: 'white',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '12px',
//     fontWeight: '600',
//     transition: 'all 0.2s',
//     color: '#334155',
//     position: 'relative',
//   },
//   categoryBtnActive: {
//     backgroundColor: '#3498db',
//     color: 'white',
//     borderColor: '#3498db',
//     boxShadow: '0 2px 6px rgba(52,152,219,0.3)',
//   },
//   modeIndicator: {
//     padding: '8px 14px',
//     backgroundColor: '#fff3cd',
//     border: '2px solid #ffc107',
//     borderRadius: '6px',
//     fontSize: '11px',
//     fontWeight: '600',
//     color: '#856404',
//     textAlign: 'center',
//     boxShadow: '0 1px 3px rgba(255,193,7,0.2)',
//     pointerEvents: 'none',
//   },
//   tooltip: {
//     position: 'absolute',
//     bottom: '100%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: '#1e293b',
//     color: 'white',
//     padding: '8px 12px',
//     borderRadius: '6px',
//     fontSize: '11px',
//     whiteSpace: 'nowrap',
//     marginBottom: '8px',
//     opacity: 0,
//     pointerEvents: 'none',
//     transition: 'opacity 0.2s',
//     zIndex: 1000,
//     maxWidth: '250px',
//     whiteSpace: 'normal',
//     textAlign: 'center',
//   },
//   mainArea: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//     height: '480px',
//   },
//   keyboardSection: {
//     backgroundColor: 'white',
//     padding: '18px',
//     borderRadius: '10px',
//     border: '2px solid #cbd5e1',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
//     overflow: 'auto',
//     height: '100%',
//   },
//   keyboardTitle: {
//     margin: '0 0 14px 0',
//     fontSize: '17px',
//     fontWeight: '700',
//     color: '#1e293b',
//   },
//   keyboardGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
//     gap: '7px',
//   },
//   qwertyGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(11, 1fr)',
//     gap: '7px',
//   },
//   keyBtn: {
//     padding: '10px 6px',
//     backgroundColor: '#f8fafc',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '18px',
//     minHeight: '44px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//     position: 'relative',
//     color: '#1e293b',
//     fontWeight: '500',
//   },
//   keyBtnSpecial: {
//     backgroundColor: '#3498db',
//     color: 'white',
//     fontSize: '11px',
//     fontWeight: '600',
//     borderColor: '#3498db',
//   },
//   textSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     height: '100%',
//   },
//   modeControls: {
//     display: 'flex',
//     gap: '6px',
//     backgroundColor: 'white',
//     padding: '4px',
//     borderRadius: '8px',
//     border: '2px solid #cbd5e1',
//   },
//   modeBtn: {
//     flex: 1,
//     padding: '7px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#64748b',
//     transition: 'all 0.2s',
//   },
//   modeBtnActive: {
//     backgroundColor: '#3498db',
//     color: 'white',
//     boxShadow: '0 2px 4px rgba(52,152,219,0.3)',
//   },
//   textarea: {
//     width: '100%',
//     height: '345px',
//     padding: '14px',
//     fontSize: '15px',
//     border: '2px solid #cbd5e1',
//     borderRadius: '8px',
//     resize: 'none',
//     fontFamily: 'monospace',
//     backgroundColor: 'white',
//     boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
//     color: '#1e293b',
//   },
//   actionButtons: {
//     display: 'flex',
//     gap: '10px',
//   },
//   copyBtn: {
//     flex: 1,
//     padding: '11px',
//     backgroundColor: '#3498db',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '700',
//     transition: 'all 0.2s',
//     boxShadow: '0 2px 6px rgba(52,152,219,0.3)',
//   },
//   clearBtn: {
//     flex: 1,
//     padding: '11px',
//     backgroundColor: '#ef4444',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '700',
//     transition: 'all 0.2s',
//     boxShadow: '0 2px 6px rgba(239,68,68,0.3)',
//   },
// };

// const categoryTooltips = {
//   qwerty: "Standard QWERTY keyboard",
//   arithmetic_symbols: "Basic math: +, −, ×, ÷, =, √",
//   basic_binary_operators: "Operators: ∧, ∨, ⊕, ⊗",
//   advanced_binary_operators: "Advanced: ∔, ∸, ⋉, ⋊",
//   geometry_symbols: "Geometry: ∠, ⊥, ∥, △",
//   basic_n_ary_operators: "N-ary: ∑, ∫, ∏, ⋃",
//   math_letter_like_symbols: "Letters: ℝ, ℕ, ℤ, ∂",
//   relational_operators: "Relations: ≤, ≥, ≈, ≡",
//   brackets: "Brackets: (, [, {, ⟨",
//   negation_symbols: "Negations: ≠, ≮, ∉",
//   arrow_symbols: "Arrows: →, ⇒, ↔, ⇔",
//   greek_letters: "Greek: α, β, γ, Δ, Σ, Ω",
//   latin_letters: "Latin: a-z, A-Z",
//   set_theory_symbols: "Sets: ∈, ⊂, ∪, ∩, ∅",
//   trigonometry_symbols: "Trig: sin, cos, tan, π, θ",
//   combinatorics_symbols: "Combinatorics: !, P(n,k), C(n,k)",
//   probability_symbols: "Probability: P(A), E(X), σ, μ",
// };

// export default function NewMultipleTypeWriter() {
//   const [input, setInput] = useState("");
//   const [activeCategory, setActiveCategory] = useState('qwerty');
//   const [mode, setMode] = useState('regular');
//   const [hoveredKey, setHoveredKey] = useState(null);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [capsLock, setCapsLock] = useState(false);
//   const textareaRef = useRef(null);

//   const categories = ['qwerty', ...Object.keys(data)];

//   const handleKeyClick = (key) => {
//     if (activeCategory === 'qwerty') {
//       if (key === 'backspace') setInput(prev => prev.slice(0, -1));
//       else if (key === 'caps') setCapsLock(!capsLock);
//       else if (key === 'enter') setInput(prev => prev + '\n');
//       else if (key === 'space') setInput(prev => prev + ' ');
//       else if (key === 'done') return;
//       else {
//         let char = key.length === 1 ? (capsLock ? key.toUpperCase() : key) : key;
//         if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
//         else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];
//         setInput(prev => prev + char);
//       }
//     } else {
//       let char = key.symbol;
      
//       if (['space', 'enter', 'backspace', 'done'].includes(char)) {
//         if (char === 'backspace') setInput(prev => prev.slice(0, -1));
//         else if (char === 'space') setInput(prev => prev + ' ');
//         else if (char === 'enter') setInput(prev => prev + '\n');
//         return;
//       }

//       if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
//       else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

//       setInput(prev => prev + char);
//     }
//     textareaRef.current?.focus();
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(input);
//   };

//   const getCategoryLabel = (key) => {
//     if (key === 'qwerty') return 'QWERTY Keyboard';
//     return key.split('_').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
//   };

//   const renderKeyboard = () => {
//     if (activeCategory === 'qwerty') {
//       return (
//         <div style={styles.qwertyGrid}>
//           {qwertyLayout.map((key, idx) => (
//             <button
//               key={idx}
//               style={{
//                 ...styles.keyBtn,
//                 ...(['space', 'enter', 'backspace', 'done', 'caps'].includes(key) ? styles.keyBtnSpecial : {}),
//                 ...(key === 'space' ? { gridColumn: 'span 4' } : {}),
//                 ...(key === 'backspace' ? { gridColumn: 'span 2' } : {}),
//                 ...(key === 'caps' || key === 'enter' ? { gridColumn: 'span 2' } : {}),
//               }}
//               onClick={() => handleKeyClick(key)}
//               onMouseEnter={(e) => {
//                 setHoveredKey(idx);
//                 if (['space', 'enter', 'backspace', 'done', 'caps'].includes(key)) {
//                   e.target.style.backgroundColor = '#2980b9';
//                   e.target.style.transform = 'scale(1.05)';
//                 } else {
//                   e.target.style.backgroundColor = '#e0f2fe';
//                   e.target.style.borderColor = '#3498db';
//                   e.target.style.transform = 'scale(1.05)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 setHoveredKey(null);
//                 if (['space', 'enter', 'backspace', 'done', 'caps'].includes(key)) {
//                   e.target.style.backgroundColor = '#3498db';
//                   e.target.style.transform = 'scale(1)';
//                 } else {
//                   e.target.style.backgroundColor = '#f8fafc';
//                   e.target.style.borderColor = '#cbd5e1';
//                   e.target.style.transform = 'scale(1)';
//                 }
//               }}
//             >
//               {key === 'space' ? 'space' : key === 'backspace' ? 'backspace' : key === 'caps' ? 'caps' : key === 'enter' ? 'enter' : key === 'done' ? 'done' : key}
//             </button>
//           ))}
//         </div>
//       );
//     }

//     return (
//       <div style={styles.keyboardGrid}>
//         {data[activeCategory].map((keyObj, idx) => (
//           <button
//             key={idx}
//             style={{
//               ...styles.keyBtn,
//               ...(['space', 'enter', 'backspace', 'done'].includes(keyObj.symbol) ? styles.keyBtnSpecial : {}),
//             }}
//             onClick={() => handleKeyClick(keyObj)}
//             onMouseEnter={(e) => {
//               setHoveredKey(idx);
//               if (keyObj.symbol.match(/space|enter|backspace|done/)) {
//                 e.target.style.backgroundColor = '#2980b9';
//                 e.target.style.transform = 'scale(1.05)';
//               } else {
//                 e.target.style.backgroundColor = '#e0f2fe';
//                 e.target.style.borderColor = '#3498db';
//                 e.target.style.transform = 'scale(1.05)';
//               }
//             }}
//             onMouseLeave={(e) => {
//               setHoveredKey(null);
//               if (keyObj.symbol.match(/space|enter|backspace|done/)) {
//                 e.target.style.backgroundColor = '#3498db';
//                 e.target.style.transform = 'scale(1)';
//               } else {
//                 e.target.style.backgroundColor = '#f8fafc';
//                 e.target.style.borderColor = '#cbd5e1';
//                 e.target.style.transform = 'scale(1)';
//               }
//             }}
//           >
//             {keyObj.symbol}
//             {hoveredKey === idx && keyObj.explanation && (
//               <span style={{...styles.tooltip, opacity: 1}}>
//                 {keyObj.explanation}
//               </span>
//             )}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.explanationBox}>
//         Type mathematical symbols, Greek letters, and special characters with ease. Select a category below to access specialized keyboards, 
//         choose between regular, subscript, or superscript modes, and click symbols to insert them into your text.
//       </div>

//       <div style={styles.categoriesWrapper}>
//         <div style={styles.selectorGrid}>
//           {categories.map((category, idx) => (
//             <button
//               key={idx}
//               style={{
//                 ...styles.categoryBtn,
//                 ...(activeCategory === category ? styles.categoryBtnActive : {}),
//               }}
//               onClick={() => setActiveCategory(category)}
//               onMouseEnter={(e) => {
//                 setHoveredCategory(idx);
//                 if (activeCategory === category) {
//                   e.target.style.backgroundColor = '#2980b9';
//                   e.target.style.transform = 'translateY(-1px)';
//                 } else {
//                   e.target.style.backgroundColor = '#f0f9ff';
//                   e.target.style.borderColor = '#3498db';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 setHoveredCategory(null);
//                 if (activeCategory === category) {
//                   e.target.style.backgroundColor = '#3498db';
//                   e.target.style.transform = 'translateY(0)';
//                 } else {
//                   e.target.style.backgroundColor = 'white';
//                   e.target.style.borderColor = '#cbd5e1';
//                 }
//               }}
//             >
//               {getCategoryLabel(category)}
//               {hoveredCategory === idx && categoryTooltips[category] && (
//                 <span style={{...styles.tooltip, opacity: 1}}>
//                   {categoryTooltips[category]}
//                 </span>
//               )}
//             </button>
//           ))}
//           <div style={styles.modeIndicator}>
//             Mode: {mode.toUpperCase()}
//           </div>
//         </div>
//       </div>

//       <div style={styles.mainArea}>
//         <div style={styles.keyboardSection}>
//           <h3 style={styles.keyboardTitle}>
//             {getCategoryLabel(activeCategory)}
//           </h3>
//           {renderKeyboard()}
//         </div>

//         <div style={styles.textSection}>
//           <div style={styles.modeControls}>
//             {['regular', 'subscript', 'superscript'].map(m => (
//               <button
//                 key={m}
//                 style={{
//                   ...styles.modeBtn,
//                   ...(mode === m ? styles.modeBtnActive : {}),
//                 }}
//                 onClick={() => setMode(m)}
//                 onMouseEnter={(e) => {
//                   if (mode !== m) {
//                     e.target.style.backgroundColor = '#f0f9ff';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (mode !== m) {
//                     e.target.style.backgroundColor = 'transparent';
//                   }
//                 }}
//               >
//                 {m.charAt(0).toUpperCase() + m.slice(1)} {mode === m ? '✓' : ''}
//               </button>
//             ))}
//           </div>

//           <textarea
//             ref={textareaRef}
//             style={styles.textarea}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Click symbols to insert, or type directly..."
//           />

//           <div style={styles.actionButtons}>
//             <button
//               style={styles.copyBtn}
//               onClick={copyToClipboard}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#2980b9';
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 4px 12px rgba(52,152,219,0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = '#3498db';
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 2px 6px rgba(52,152,219,0.3)';
//               }}
//             >
//               Copy to Clipboard
//             </button>
//             <button
//               style={styles.clearBtn}
//               onClick={() => setInput('')}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#dc2626';
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 4px 12px rgba(239,68,68,0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = '#ef4444';
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 2px 6px rgba(239,68,68,0.3)';
//               }}
//             >
//               Clear
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'
import React, { useState, useRef } from 'react';
import data from './math_symbols_data';
import { superscripts, subscripts } from './super_sub_scripts';

const qwertyLayout = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
  "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
  "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
  "space", "done"
];

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '30px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  explanationBox: {
    fontSize: '14px',
    color: '#1e293b',
    lineHeight: '1.5',
    marginBottom: '20px',
    padding: '18px 22px',
    background: 'linear-gradient(120deg, #ebf4ff 0%, #e0ecff 100%)',
    border: '2px solid #245de1',
    borderLeft: '6px solid #245de1',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(36,93,225,0.1)',
  },
  categoriesWrapper: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '6px',
    marginBottom: '18px',
    border: '2px solid #cbd5e1',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    position: 'relative',
  },
  selectorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
    gap: '10px',
  },
  categoryBtn: {
    padding: '11px 14px',
    backgroundColor: '#fafbfc',
    border: '2px solid #cbd5e1',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'all 0.2s',
    color: '#475569',
    position: 'relative',
  },
  categoryBtnActive: {
    backgroundColor: '#245de1',
    color: 'white',
    borderColor: '#245de1',
    boxShadow: '0 4px 14px rgba(36,93,225,0.3)',
  },
  modeIndicator: {
    padding: '10px 14px',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    border: '2px solid #0284c7',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 3px 10px rgba(14,165,233,0.3)',
    letterSpacing: '0.3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    pointerEvents: 'none',
  },
  modeIndicatorIcon: {
    fontSize: '16px',
    fontWeight: '900',
    background: 'rgba(255,255,255,0.3)',
    width: '22px',
    height: '22px',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.4)',
  },
  tooltip: {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '11px',
    whiteSpace: 'nowrap',
    marginBottom: '8px',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.2s',
    zIndex: 1000,
    maxWidth: '250px',
    whiteSpace: 'normal',
    textAlign: 'center',
  },
  mainArea: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    height: '480px',
  },
  keyboardSection: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '6px',
    border: '2px solid #cbd5e1',
    boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
    overflow: 'auto',
    height: '100%',
  },
  keyboardTitle: {
    margin: '0 0 14px 0',
    fontSize: '18px',
    fontWeight: '700',
    color: '#1e293b',
  },
  keyboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
    gap: '8px',
  },
  qwertyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(11, 1fr)',
    gap: '7px',
  },
  keyBtn: {
    padding: '12px 8px',
    background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
    border: '2px solid #e2e8f0',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    minHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    position: 'relative',
    color: '#334155',
    fontWeight: '500',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
  keyBtnSpecial: {
    background: 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)',
    color: 'white',
    fontSize: '11px',
    fontWeight: '700',
    borderColor: '#1e4fc7',
    boxShadow: '0 3px 8px rgba(36,93,225,0.3)',
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    height: '100%',
  },
  modeControls: {
    display: 'flex',
    gap: '6px',
    backgroundColor: 'white',
    padding: '6px',
    borderRadius: '6px',
    border: '2px solid #cbd5e1',
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
  },
  modeBtn: {
    flex: 1,
    padding: '9px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b',
    transition: 'all 0.2s',
  },
  modeBtnActive: {
    backgroundColor: '#245de1',
    color: 'white',
    boxShadow: '0 3px 10px rgba(36,93,225,0.25)',
  },
  textarea: {
    width: '100%',
    height: '345px',
    padding: '16px',
    fontSize: '15px',
    border: '2px solid #cbd5e1',
    borderRadius: '6px',
    resize: 'none',
    fontFamily: 'monospace',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    color: '#1e293b',
  },
  actionButtons: {
    display: 'flex',
    gap: '12px',
  },
  copyBtn: {
    flex: 1,
    padding: '14px',
    background: 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)',
    color: 'white',
    border: '2px solid #1e4fc7',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    transition: 'all 0.2s',
    boxShadow: '0 4px 12px rgba(36,93,225,0.3)',
  },
  clearBtn: {
    flex: 1,
    padding: '14px',
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: 'white',
    border: '2px solid #dc2626',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    transition: 'all 0.2s',
    boxShadow: '0 4px 12px rgba(239,68,68,0.3)',
  },
};

const categoryTooltips = {
  qwerty: "Standard QWERTY keyboard",
  arithmetic_symbols: "Basic math: +, −, ×, ÷, =, √",
  basic_binary_operators: "Operators: ∧, ∨, ⊕, ⊗",
  advanced_binary_operators: "Advanced: ∔, ∸, ⋉, ⋊",
  geometry_symbols: "Geometry: ∠, ⊥, ∥, △",
  basic_n_ary_operators: "N-ary: ∑, ∫, ∏, ⋃",
  math_letter_like_symbols: "Letters: ℝ, ℕ, ℤ, ∂",
  relational_operators: "Relations: ≤, ≥, ≈, ≡",
  brackets: "Brackets: (, [, {, ⟨",
  negation_symbols: "Negations: ≠, ≮, ∉",
  arrow_symbols: "Arrows: →, ⇒, ↔, ⇔",
  greek_letters: "Greek: α, β, γ, Δ, Σ, Ω",
  latin_letters: "Latin: a-z, A-Z",
  set_theory_symbols: "Sets: ∈, ⊂, ∪, ∩, ∅",
  trigonometry_symbols: "Trig: sin, cos, tan, π, θ",
  combinatorics_symbols: "Combinatorics: !, P(n,k), C(n,k)",
  probability_symbols: "Probability: P(A), E(X), σ, μ",
};

export default function NewMultipleTypeWriter() {
  const [input, setInput] = useState("");
  const [activeCategory, setActiveCategory] = useState('qwerty');
  const [mode, setMode] = useState('regular');
  const [hoveredKey, setHoveredKey] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [capsLock, setCapsLock] = useState(false);
  const textareaRef = useRef(null);

  const categories = ['qwerty', ...Object.keys(data)];

  const handleKeyClick = (key) => {
    if (activeCategory === 'qwerty') {
      if (key === 'backspace') setInput(prev => prev.slice(0, -1));
      else if (key === 'caps') setCapsLock(!capsLock);
      else if (key === 'enter') setInput(prev => prev + '\n');
      else if (key === 'space') setInput(prev => prev + ' ');
      else if (key === 'done') return;
      else {
        let char = key.length === 1 ? (capsLock ? key.toUpperCase() : key) : key;
        if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
        else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];
        setInput(prev => prev + char);
      }
    } else {
      let char = key.symbol;
      
      if (['space', 'enter', 'backspace', 'done'].includes(char)) {
        if (char === 'backspace') setInput(prev => prev.slice(0, -1));
        else if (char === 'space') setInput(prev => prev + ' ');
        else if (char === 'enter') setInput(prev => prev + '\n');
        return;
      }

      if (mode === 'subscript' && subscripts[char]) char = subscripts[char];
      else if (mode === 'superscript' && superscripts[char]) char = superscripts[char];

      setInput(prev => prev + char);
    }
    textareaRef.current?.focus();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
  };

  const getCategoryLabel = (key) => {
    if (key === 'qwerty') return 'QWERTY Keyboard';
    return key.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const renderKeyboard = () => {
    if (activeCategory === 'qwerty') {
      return (
        <div style={styles.qwertyGrid}>
          {qwertyLayout.map((key, idx) => (
            <button
              key={idx}
              style={{
                ...styles.keyBtn,
                ...(['space', 'enter', 'backspace', 'done', 'caps'].includes(key) ? styles.keyBtnSpecial : {}),
                ...(key === 'space' ? { gridColumn: 'span 4' } : {}),
                ...(key === 'backspace' ? { gridColumn: 'span 2' } : {}),
                ...(key === 'caps' || key === 'enter' ? { gridColumn: 'span 2' } : {}),
              }}
              onClick={() => handleKeyClick(key)}
              onMouseEnter={(e) => {
                setHoveredKey(idx);
                if (['space', 'enter', 'backspace', 'done', 'caps'].includes(key)) {
                  e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 14px rgba(36,93,225,0.4)';
                } else {
                  e.target.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
                  e.target.style.borderColor = '#245de1';
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 12px rgba(36,93,225,0.15)';
                }
              }}
              onMouseLeave={(e) => {
                setHoveredKey(null);
                if (['space', 'enter', 'backspace', 'done', 'caps'].includes(key)) {
                  e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 3px 8px rgba(36,93,225,0.3)';
                } else {
                  e.target.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
                }
              }}
            >
              {key === 'space' ? 'space' : key === 'backspace' ? 'backspace' : key === 'caps' ? 'caps' : key === 'enter' ? 'enter' : key === 'done' ? 'done' : key}
            </button>
          ))}
        </div>
      );
    }

    return (
      <div style={styles.keyboardGrid}>
        {data[activeCategory].map((keyObj, idx) => (
          <button
            key={idx}
            style={{
              ...styles.keyBtn,
              ...(['space', 'enter', 'backspace', 'done'].includes(keyObj.symbol) ? styles.keyBtnSpecial : {}),
            }}
            onClick={() => handleKeyClick(keyObj)}
            onMouseEnter={(e) => {
              setHoveredKey(idx);
              if (keyObj.symbol.match(/space|enter|backspace|done/)) {
                e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 14px rgba(36,93,225,0.4)';
              } else {
                e.target.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
                e.target.style.borderColor = '#245de1';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 12px rgba(36,93,225,0.15)';
              }
            }}
            onMouseLeave={(e) => {
              setHoveredKey(null);
              if (keyObj.symbol.match(/space|enter|backspace|done/)) {
                e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 3px 8px rgba(36,93,225,0.3)';
              } else {
                e.target.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
              }
            }}
          >
            {keyObj.symbol}
            {hoveredKey === idx && keyObj.explanation && (
              <span style={{...styles.tooltip, opacity: 1}}>
                {keyObj.explanation}
              </span>
            )}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.explanationBox}>
        Type mathematical symbols, Greek letters, and special characters with ease. Select a category below to access specialized keyboards, 
        choose between regular, subscript, or superscript modes, and click symbols to insert them into your text.
      </div>

      <div style={styles.categoriesWrapper}>
        <div style={styles.selectorGrid}>
          {categories.map((category, idx) => (
            <button
              key={idx}
              style={{
                ...styles.categoryBtn,
                ...(activeCategory === category ? styles.categoryBtnActive : {}),
              }}
              onClick={() => setActiveCategory(category)}
              onMouseEnter={(e) => {
                setHoveredCategory(idx);
                if (activeCategory === category) {
                  e.target.style.backgroundColor = '#1e4fc7';
                  e.target.style.transform = 'translateY(-1px)';
                } else {
                  e.target.style.backgroundColor = '#eff6ff';
                  e.target.style.borderColor = '#60a5fa';
                }
              }}
              onMouseLeave={(e) => {
                setHoveredCategory(null);
                if (activeCategory === category) {
                  e.target.style.backgroundColor = '#245de1';
                  e.target.style.transform = 'translateY(0)';
                } else {
                  e.target.style.backgroundColor = '#fafbfc';
                  e.target.style.borderColor = '#cbd5e1';
                }
              }}
            >
              {getCategoryLabel(category)}
              {hoveredCategory === idx && categoryTooltips[category] && (
                <span style={{...styles.tooltip, opacity: 1}}>
                  {categoryTooltips[category]}
                </span>
              )}
            </button>
          ))}
          <div style={styles.modeIndicator}>
            <span style={styles.modeIndicatorIcon}>ℹ</span>
            Mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </div>
        </div>
      </div>

      <div style={styles.mainArea}>
        <div style={styles.keyboardSection}>
          <h3 style={styles.keyboardTitle}>
            {getCategoryLabel(activeCategory)}
          </h3>
          {renderKeyboard()}
        </div>

        <div style={styles.textSection}>
          <div style={styles.modeControls}>
            {['regular', 'subscript', 'superscript'].map(m => (
              <button
                key={m}
                style={{
                  ...styles.modeBtn,
                  ...(mode === m ? styles.modeBtnActive : {}),
                }}
                onClick={() => setMode(m)}
                onMouseEnter={(e) => {
                  if (mode !== m) {
                    e.target.style.backgroundColor = '#f1f5f9';
                  }
                }}
                onMouseLeave={(e) => {
                  if (mode !== m) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)} {mode === m ? '✓' : ''}
              </button>
            ))}
          </div>

          <textarea
            ref={textareaRef}
            style={styles.textarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={(e) => {
              e.target.style.outline = 'none';
              e.target.style.borderColor = '#245de1';
              e.target.style.boxShadow = '0 0 0 4px rgba(36,93,225,0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#cbd5e1';
              e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            }}
            placeholder="Click symbols to insert, or type directly..."
          />

          <div style={styles.actionButtons}>
            <button
              style={styles.copyBtn}
              onClick={copyToClipboard}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 18px rgba(36,93,225,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(36,93,225,0.3)';
              }}
            >
              Copy to Clipboard
            </button>
            <button
              style={styles.clearBtn}
              onClick={() => setInput('')}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 18px rgba(239,68,68,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(239,68,68,0.3)';
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}