// // 'use client'
// // import React, { useState, useRef } from 'react';
// // import latexData from './latex_data';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const styles = {
// //   container: {
// //     maxWidth: '1400px',
// //     margin: '0 auto',
// //     padding: '30px 20px',
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   explanationBox: {
// //     fontSize: '14px',
// //     color: '#1e293b',
// //     lineHeight: '1.5',
// //     marginBottom: '20px',
// //     padding: '18px 22px',
// //     background: 'linear-gradient(120deg, #ebf4ff 0%, #e0ecff 100%)',
// //     border: '2px solid #245de1',
// //     borderLeft: '6px solid #245de1',
// //     borderRadius: '6px',
// //     boxShadow: '0 4px 12px rgba(36,93,225,0.1)',
// //   },
// //   categoriesWrapper: {
// //     backgroundColor: 'white',
// //     padding: '16px',
// //     borderRadius: '6px',
// //     marginBottom: '18px',
// //     border: '2px solid #cbd5e1',
// //     boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
// //   },
// //   selectorGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
// //     gap: '10px',
// //   },
// //   categoryBtn: {
// //     padding: '11px 14px',
// //     backgroundColor: '#fafbfc',
// //     border: '2px solid #cbd5e1',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     fontSize: '13px',
// //     fontWeight: '600',
// //     transition: 'all 0.2s',
// //     color: '#475569',
// //   },
// //   categoryBtnActive: {
// //     backgroundColor: '#245de1',
// //     color: 'white',
// //     borderColor: '#245de1',
// //     boxShadow: '0 4px 14px rgba(36,93,225,0.3)',
// //   },
// //   mainArea: {
// //     display: 'grid',
// //     gridTemplateColumns: '1fr 1fr',
// //     gap: '20px',
// //   },
// //   keyboardSection: {
// //     backgroundColor: 'white',
// //     padding: '20px',
// //     borderRadius: '6px',
// //     border: '2px solid #cbd5e1',
// //     boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
// //     overflow: 'auto',
// //     maxHeight: '600px',
// //   },
// //   keyboardTitle: {
// //     margin: '0 0 14px 0',
// //     fontSize: '18px',
// //     fontWeight: '700',
// //     color: '#1e293b',
// //   },
// //   buttonGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
// //     gap: '8px',
// //   },
// //   latexBtn: {
// //     padding: '12px 8px',
// //     background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
// //     border: '2px solid #e2e8f0',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// //     minHeight: '48px',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     transition: 'all 0.2s',
// //     color: '#334155',
// //     fontWeight: '500',
// //     boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
// //   },
// //   latexBtnLabel: {
// //     fontSize: '10px',
// //     color: '#64748b',
// //     marginTop: '4px',
// //   },
// //   editorSection: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //   },
// //   textarea: {
// //     width: '100%',
// //     height: '200px',
// //     padding: '16px',
// //     fontSize: '14px',
// //     border: '2px solid #cbd5e1',
// //     borderRadius: '6px',
// //     resize: 'vertical',
// //     fontFamily: 'monospace',
// //     backgroundColor: 'white',
// //     boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// //     color: '#1e293b',
// //   },
// //   previewSection: {
// //     backgroundColor: 'white',
// //     padding: '20px',
// //     borderRadius: '6px',
// //     border: '2px solid #cbd5e1',
// //     minHeight: '200px',
// //     boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// //   },
// //   previewTitle: {
// //     fontSize: '14px',
// //     fontWeight: '700',
// //     color: '#1e293b',
// //     marginBottom: '12px',
// //   },
// //   previewContent: {
// //     fontSize: '18px',
// //     padding: '16px',
// //     backgroundColor: '#f8fafc',
// //     borderRadius: '4px',
// //     minHeight: '150px',
// //     overflowX: 'auto',
// //   },
// //   actionButtons: {
// //     display: 'flex',
// //     gap: '12px',
// //   },
// //   copyBtn: {
// //     flex: 1,
// //     padding: '14px',
// //     background: 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)',
// //     color: 'white',
// //     border: '2px solid #1e4fc7',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     fontWeight: '700',
// //     transition: 'all 0.2s',
// //     boxShadow: '0 4px 12px rgba(36,93,225,0.3)',
// //   },
// //   clearBtn: {
// //     flex: 1,
// //     padding: '14px',
// //     background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
// //     color: 'white',
// //     border: '2px solid #dc2626',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     fontWeight: '700',
// //     transition: 'all 0.2s',
// //     boxShadow: '0 4px 12px rgba(239,68,68,0.3)',
// //   },
// // };

// // export default function LatexEditor() {
// //   const [latex, setLatex] = useState('');
// //   const [activeCategory, setActiveCategory] = useState('basic');
// //   const textareaRef = useRef(null);

// //   const categories = Object.keys(latexData);

// //   const insertLatex = (code, requiresSelection = false) => {
// //     const textarea = textareaRef.current;
// //     if (!textarea) return;

// //     const start = textarea.selectionStart;
// //     const end = textarea.selectionEnd;
// //     const selectedText = latex.substring(start, end);

// //     let newText = latex;
// //     let newCursorPos = start;

// //     if (requiresSelection && selectedText) {
// //       // Replace placeholder with selected text
// //       const replacement = code.replace('{}', `{${selectedText}}`);
// //       newText = latex.substring(0, start) + replacement + latex.substring(end);
// //       newCursorPos = start + replacement.length;
// //     } else if (code.includes('{}')) {
// //       // Position cursor inside braces
// //       const beforeBrace = code.indexOf('{}');
// //       newText = latex.substring(0, start) + code + latex.substring(end);
// //       newCursorPos = start + beforeBrace + 1;
// //     } else {
// //       // Simple insertion
// //       newText = latex.substring(0, start) + code + latex.substring(end);
// //       newCursorPos = start + code.length;
// //     }

// //     setLatex(newText);
    
// //     setTimeout(() => {
// //       textarea.focus();
// //       textarea.setSelectionRange(newCursorPos, newCursorPos);
// //     }, 0);
// //   };

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(latex);
// //   };

// //   const getCategoryLabel = (key) => {
// //     return key.split('_').map(word => 
// //       word.charAt(0).toUpperCase() + word.slice(1)
// //     ).join(' ');
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.explanationBox}>
// //         Build LaTeX formulas by clicking buttons to insert commands. Select text and click a button to wrap it with that command. 
// //         The preview shows rendered output using KaTeX.
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
// //                 if (activeCategory !== category) {
// //                   e.target.style.backgroundColor = '#eff6ff';
// //                   e.target.style.borderColor = '#60a5fa';
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 if (activeCategory !== category) {
// //                   e.target.style.backgroundColor = '#fafbfc';
// //                   e.target.style.borderColor = '#cbd5e1';
// //                 }
// //               }}
// //             >
// //               {getCategoryLabel(category)}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div style={styles.mainArea}>
// //         <div style={styles.keyboardSection}>
// //           <h3 style={styles.keyboardTitle}>
// //             {getCategoryLabel(activeCategory)}
// //           </h3>
// //           <div style={styles.buttonGrid}>
// //             {latexData[activeCategory].map((item, idx) => (
// //               <button
// //                 key={idx}
// //                 style={styles.latexBtn}
// //                 onClick={() => insertLatex(item.latex, item.requiresSelection)}
// //                 onMouseEnter={(e) => {
// //                   e.target.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
// //                   e.target.style.borderColor = '#245de1';
// //                   e.target.style.transform = 'scale(1.05)';
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.target.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
// //                   e.target.style.borderColor = '#e2e8f0';
// //                   e.target.style.transform = 'scale(1)';
// //                 }}
// //               >
// //                 <span dangerouslySetInnerHTML={{ __html: item.display }} />
// //                 <span style={styles.latexBtnLabel}>{item.label}</span>
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div style={styles.editorSection}>
// //           <textarea
// //             ref={textareaRef}
// //             style={styles.textarea}
// //             value={latex}
// //             onChange={(e) => setLatex(e.target.value)}
// //             onFocus={(e) => {
// //               e.target.style.borderColor = '#245de1';
// //               e.target.style.boxShadow = '0 0 0 4px rgba(36,93,225,0.1)';
// //             }}
// //             onBlur={(e) => {
// //               e.target.style.borderColor = '#cbd5e1';
// //               e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
// //             }}
// //             placeholder="LaTeX code appears here..."
// //           />

// //           <div style={styles.previewSection}>
// //             <div style={styles.previewTitle}>Preview</div>
// //             <div style={styles.previewContent}>
// //               {latex ? (
// //                 // <div dangerouslySetInnerHTML={{ 
// //                 //   __html: `\\(${latex}\\)` 
// //                 // }} />
// //                 <span>{processContent(`$`+latex+`$`)}</span>
// //               ) : (
// //                 <span style={{ color: '#94a3b8' }}>Preview will appear here...</span>
// //               )}
// //             </div>
// //           </div>

// //           <div style={styles.actionButtons}>
// //             <button
// //               style={styles.copyBtn}
// //               onClick={copyToClipboard}
// //               onMouseEnter={(e) => {
// //                 e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
// //                 e.target.style.transform = 'translateY(-2px)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
// //                 e.target.style.transform = 'translateY(0)';
// //               }}
// //             >
// //               Copy LaTeX
// //             </button>
// //             <button
// //               style={styles.clearBtn}
// //               onClick={() => setLatex('')}
// //               onMouseEnter={(e) => {
// //                 e.target.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
// //                 e.target.style.transform = 'translateY(-2px)';
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.target.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
// //                 e.target.style.transform = 'translateY(0)';
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
// import latexData from './latex_data';
// import { processContent } from '@/app/utils/contentProcessor';

// const styles = {
//   container: {
//     maxWidth: '1400px',
//     margin: '0 auto',
//     padding: '30px 20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   explanationBox: {
//     fontSize: '14px',
//     color: '#1e293b',
//     lineHeight: '1.5',
//     marginBottom: '20px',
//     padding: '18px 22px',
//     background: 'linear-gradient(120deg, #ebf4ff 0%, #e0ecff 100%)',
//     border: '2px solid #245de1',
//     borderLeft: '6px solid #245de1',
//     borderRadius: '6px',
//     boxShadow: '0 4px 12px rgba(36,93,225,0.1)',
//   },
//   categoriesWrapper: {
//     backgroundColor: 'white',
//     padding: '16px',
//     borderRadius: '6px',
//     marginBottom: '18px',
//     border: '2px solid #cbd5e1',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//   },
//   selectorGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
//     gap: '10px',
//   },
//   categoryBtn: {
//     padding: '11px 14px',
//     backgroundColor: '#fafbfc',
//     border: '2px solid #cbd5e1',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '13px',
//     fontWeight: '600',
//     transition: 'all 0.2s',
//     color: '#475569',
//   },
//   categoryBtnActive: {
//     backgroundColor: '#245de1',
//     color: 'white',
//     borderColor: '#245de1',
//     boxShadow: '0 4px 14px rgba(36,93,225,0.3)',
//   },
//   mainArea: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '20px',
//   },
//   keyboardSection: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '6px',
//     border: '2px solid #cbd5e1',
//     boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
//     overflow: 'auto',
//     maxHeight: '600px',
//   },
//   keyboardTitle: {
//     margin: '0 0 14px 0',
//     fontSize: '18px',
//     fontWeight: '700',
//     color: '#1e293b',
//   },
//   buttonGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
//     gap: '8px',
//   },
//   latexBtn: {
//     padding: '12px 8px',
//     background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
//     border: '2px solid #e2e8f0',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     minHeight: '48px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//     color: '#334155',
//     fontWeight: '500',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
//   },
//   latexBtnLabel: {
//     fontSize: '10px',
//     color: '#64748b',
//     marginTop: '4px',
//   },
//   controlBtn: {
//     padding: '10px 8px',
//     background: 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)',
//     border: '2px solid #1e4fc7',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '12px',
//     minHeight: '48px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transition: 'all 0.2s',
//     color: 'white',
//     fontWeight: '600',
//     boxShadow: '0 2px 6px rgba(36,93,225,0.3)',
//   },
//   editorSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   textareaWrapper: {
//     position: 'relative',
//   },
//   textarea: {
//     width: '100%',
//     height: '200px',
//     padding: '16px',
//     paddingTop: '40px',
//     fontSize: '14px',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     resize: 'vertical',
//     fontFamily: 'monospace',
//     backgroundColor: 'white',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
//     color: '#1e293b',
//   },
//   copyBtnInField: {
//     position: 'absolute',
//     top: '8px',
//     right: '8px',
//     padding: '6px 12px',
//     backgroundColor: '#245de1',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '11px',
//     fontWeight: '600',
//     transition: 'all 0.2s',
//     zIndex: 10,
//   },
//   previewSection: {
//     position: 'relative',
//     backgroundColor: 'white',
//     padding: '20px',
//     paddingTop: '40px',
//     borderRadius: '6px',
//     border: '2px solid #cbd5e1',
//     minHeight: '200px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
//   },
//   previewTitle: {
//     position: 'absolute',
//     top: '12px',
//     left: '20px',
//     fontSize: '14px',
//     fontWeight: '700',
//     color: '#1e293b',
//   },
//   previewContent: {
//     fontSize: '18px',
//     padding: '16px',
//     backgroundColor: '#f8fafc',
//     borderRadius: '4px',
//     minHeight: '150px',
//     overflowX: 'auto',
//   },
//   actionButtons: {
//     display: 'flex',
//     gap: '12px',
//   },
//   clearBtn: {
//     flex: 1,
//     padding: '14px',
//     background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
//     color: 'white',
//     border: '2px solid #dc2626',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '700',
//     transition: 'all 0.2s',
//     boxShadow: '0 4px 12px rgba(239,68,68,0.3)',
//   },
// };

// export default function LatexEditor() {
//   const [latex, setLatex] = useState('');
//   const [activeCategory, setActiveCategory] = useState('basic');
//   const [copiedLatex, setCopiedLatex] = useState(false);
//   const [copiedPreview, setCopiedPreview] = useState(false);
//   const textareaRef = useRef(null);

//   const categories = Object.keys(latexData);

//   const insertLatex = (code, requiresSelection = false) => {
//     const textarea = textareaRef.current;
//     if (!textarea) return;

//     const start = textarea.selectionStart;
//     const end = textarea.selectionEnd;
//     const selectedText = latex.substring(start, end);

//     let newText = latex;
//     let newCursorPos = start;

//     if (requiresSelection && selectedText) {
//       const replacement = code.replace('{}', `{${selectedText}}`);
//       newText = latex.substring(0, start) + replacement + latex.substring(end);
//       newCursorPos = start + replacement.length;
//     } else if (code.includes('{}')) {
//       const beforeBrace = code.indexOf('{}');
//       newText = latex.substring(0, start) + code + latex.substring(end);
//       newCursorPos = start + beforeBrace + 1;
//     } else {
//       newText = latex.substring(0, start) + code + latex.substring(end);
//       newCursorPos = start + code.length;
//     }

//     setLatex(newText);
    
//     setTimeout(() => {
//       textarea.focus();
//       textarea.setSelectionRange(newCursorPos, newCursorPos);
//     }, 0);
//   };

//   const handleBackspace = () => {
//     const textarea = textareaRef.current;
//     if (!textarea) return;

//     const start = textarea.selectionStart;
//     const end = textarea.selectionEnd;

//     if (start !== end) {
//       // Delete selection
//       setLatex(latex.substring(0, start) + latex.substring(end));
//       setTimeout(() => {
//         textarea.focus();
//         textarea.setSelectionRange(start, start);
//       }, 0);
//     } else if (start > 0) {
//       // Delete one character before cursor
//       setLatex(latex.substring(0, start - 1) + latex.substring(start));
//       setTimeout(() => {
//         textarea.focus();
//         textarea.setSelectionRange(start - 1, start - 1);
//       }, 0);
//     }
//   };

//   const handleNewLine = () => {
//     insertLatex('\n');
//   };

//   const moveCursor = (direction) => {
//     const textarea = textareaRef.current;
//     if (!textarea) return;

//     const pos = textarea.selectionStart;
//     const newPos = direction === 'left' ? Math.max(0, pos - 1) : Math.min(latex.length, pos + 1);
    
//     setTimeout(() => {
//       textarea.focus();
//       textarea.setSelectionRange(newPos, newPos);
//     }, 0);
//   };

//   const copyToClipboard = (text, setCopied) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 5000);
//   };

//   const getCategoryLabel = (key) => {
//     return key.split('_').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
//   };

//   // Get rendered preview text for copying
//   const getPreviewText = () => {
//     if (!latex) return '';
//     // Extract text content from processed content
//     const tempDiv = document.createElement('div');
//     const processed = processContent(`$${latex}$`);
//     if (typeof processed === 'string') {
//       tempDiv.innerHTML = processed;
//       return tempDiv.textContent || tempDiv.innerText || '';
//     }
//     return latex;
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.explanationBox}>
//         Build LaTeX formulas by clicking buttons to insert commands. Select text and click a button to wrap it with that command. 
//         Use control buttons for navigation, backspace, and new lines.
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
//                 if (activeCategory !== category) {
//                   e.target.style.backgroundColor = '#eff6ff';
//                   e.target.style.borderColor = '#60a5fa';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (activeCategory !== category) {
//                   e.target.style.backgroundColor = '#fafbfc';
//                   e.target.style.borderColor = '#cbd5e1';
//                 }
//               }}
//             >
//               {getCategoryLabel(category)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div style={styles.mainArea}>
//         <div style={styles.keyboardSection}>
//           <h3 style={styles.keyboardTitle}>
//             {getCategoryLabel(activeCategory)}
//           </h3>
//           <div style={styles.buttonGrid}>
//             {latexData[activeCategory].map((item, idx) => (
//               <button
//                 key={idx}
//                 style={styles.latexBtn}
//                 onClick={() => insertLatex(item.latex, item.requiresSelection)}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
//                   e.target.style.borderColor = '#245de1';
//                   e.target.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
//                   e.target.style.borderColor = '#e2e8f0';
//                   e.target.style.transform = 'scale(1)';
//                 }}
//               >
//                 <span dangerouslySetInnerHTML={{ __html: item.display }} />
//                 <span style={styles.latexBtnLabel}>{item.label}</span>
//               </button>
//             ))}
            
//             {/* Control buttons */}
//             <button
//               style={styles.controlBtn}
//               onClick={() => moveCursor('left')}
//               onMouseEnter={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                 e.target.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                 e.target.style.transform = 'scale(1)';
//               }}
//             >
//               ←
//             </button>
//             <button
//               style={styles.controlBtn}
//               onClick={() => moveCursor('right')}
//               onMouseEnter={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                 e.target.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                 e.target.style.transform = 'scale(1)';
//               }}
//             >
//               →
//             </button>
//             <button
//               style={styles.controlBtn}
//               onClick={handleBackspace}
//               onMouseEnter={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                 e.target.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                 e.target.style.transform = 'scale(1)';
//               }}
//             >
//               ⌫
//             </button>
//             <button
//               style={styles.controlBtn}
//               onClick={handleNewLine}
//               onMouseEnter={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                 e.target.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                 e.target.style.transform = 'scale(1)';
//               }}
//             >
//               ↵
//             </button>
//           </div>
//         </div>

//         <div style={styles.editorSection}>
//           <div style={styles.textareaWrapper}>
//             <button
//               style={{
//                 ...styles.copyBtnInField,
//                 backgroundColor: copiedLatex ? '#10b981' : '#245de1',
//               }}
//               onClick={() => copyToClipboard(latex, setCopiedLatex)}
//             >
//               {copiedLatex ? 'Copied!' : 'Copy'}
//             </button>
//             <textarea
//               ref={textareaRef}
//               style={styles.textarea}
//               value={latex}
//               onChange={(e) => setLatex(e.target.value)}
//               onFocus={(e) => {
//                 e.target.style.borderColor = '#245de1';
//                 e.target.style.boxShadow = '0 0 0 4px rgba(36,93,225,0.1)';
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = '#cbd5e1';
//                 e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
//               }}
//               placeholder="LaTeX code appears here..."
//             />
//           </div>

//           <div style={styles.previewSection}>
//             <div style={styles.previewTitle}>Preview</div>
//             <button
//               style={{
//                 ...styles.copyBtnInField,
//                 backgroundColor: copiedPreview ? '#10b981' : '#245de1',
//               }}
//               onClick={() => copyToClipboard(getPreviewText(), setCopiedPreview)}
//             >
//               {copiedPreview ? 'Copied!' : 'Copy'}
//             </button>
//             <div style={styles.previewContent}>
//               {latex ? (
//                 <span>{processContent(`$${latex}$`)}</span>
//               ) : (
//                 <span style={{ color: '#94a3b8' }}>Preview will appear here...</span>
//               )}
//             </div>
//           </div>

//           <div style={styles.actionButtons}>
//             <button
//               style={styles.clearBtn}
//               onClick={() => setLatex('')}
//               onMouseEnter={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
//                 e.target.style.transform = 'translateY(-2px)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
//                 e.target.style.transform = 'translateY(0)';
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
import latexData from './latex_data';
import { processContent } from '@/app/utils/contentProcessor';

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
  },
  categoryBtnActive: {
    backgroundColor: '#245de1',
    color: 'white',
    borderColor: '#245de1',
    boxShadow: '0 4px 14px rgba(36,93,225,0.3)',
  },
  mainArea: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  keyboardSection: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '6px',
    border: '2px solid #cbd5e1',
    boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
    overflow: 'auto',
    maxHeight: '600px',
  },
  keyboardTitle: {
    margin: '0 0 14px 0',
    fontSize: '18px',
    fontWeight: '700',
    color: '#1e293b',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
    gap: '8px',
  },
  latexBtn: {
    padding: '12px 8px',
    background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
    border: '2px solid #e2e8f0',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    minHeight: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    color: '#334155',
    fontWeight: '500',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  },
  latexBtnLabel: {
    fontSize: '10px',
    color: '#64748b',
    marginTop: '4px',
  },
  editorSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  textareaWrapper: {
    position: 'relative',
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '16px',
    paddingTop: '40px',
    fontSize: '14px',
    border: '2px solid #cbd5e1',
    borderRadius: '6px',
    resize: 'vertical',
    fontFamily: 'monospace',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    color: '#1e293b',
  },
  copyBtnInField: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '6px 12px',
    backgroundColor: '#245de1',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '11px',
    fontWeight: '600',
    transition: 'all 0.2s',
    zIndex: 10,
  },
  previewSection: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    paddingTop: '40px',
    borderRadius: '6px',
    border: '2px solid #cbd5e1',
    minHeight: '200px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  previewTitle: {
    position: 'absolute',
    top: '12px',
    left: '20px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#1e293b',
  },
  previewContent: {
    fontSize: '18px',
    padding: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '4px',
    minHeight: '150px',
    overflowX: 'auto',
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
  },
  navBtn: {
    padding: '10px 14px',
    background: 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)',
    color: 'white',
    border: '2px solid #1e4fc7',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'all 0.2s',
    boxShadow: '0 3px 8px rgba(36,93,225,0.3)',
  },
  clearBtn: {
    flex: 1,
    padding: '10px',
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: 'white',
    border: '2px solid #dc2626',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    transition: 'all 0.2s',
    boxShadow: '0 3px 8px rgba(239,68,68,0.3)',
  },
};

export default function LatexEditor() {
  const [latex, setLatex] = useState('');
  const [activeCategory, setActiveCategory] = useState('basic');
  const [copiedLatex, setCopiedLatex] = useState(false);
  const [copiedPreview, setCopiedPreview] = useState(false);
  const textareaRef = useRef(null);
  const previewRef = useRef(null);

  const categories = Object.keys(latexData);

  const insertLatex = (code, requiresSelection = false) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = latex.substring(start, end);

    let newText = latex;
    let newCursorPos = start;

    if (requiresSelection && selectedText) {
      const replacement = code.replace('{}', `{${selectedText}}`);
      newText = latex.substring(0, start) + replacement + latex.substring(end);
      newCursorPos = start + replacement.length;
    } else if (code.includes('{}')) {
      const beforeBrace = code.indexOf('{}');
      newText = latex.substring(0, start) + code + latex.substring(end);
      newCursorPos = start + beforeBrace + 1;
    } else {
      newText = latex.substring(0, start) + code + latex.substring(end);
      newCursorPos = start + code.length;
    }

    setLatex(newText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBackspace = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      setLatex(latex.substring(0, start) + latex.substring(end));
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start);
      }, 0);
    } else if (start > 0) {
      setLatex(latex.substring(0, start - 1) + latex.substring(start));
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start - 1, start - 1);
      }, 0);
    }
  };

  const handleNewLine = () => {
    insertLatex('\n');
  };

  const moveCursor = (direction) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const pos = textarea.selectionStart;
    const newPos = direction === 'left' ? Math.max(0, pos - 1) : Math.min(latex.length, pos + 1);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

//   const copyPreviewContent = () => {
//     // Get actual rendered text from preview div
//     const previewDiv = previewRef.current;
//     if (!previewDiv) return;
    
//     const text = previewDiv.innerText || previewDiv.textContent || '';
//     copyToClipboard(text, setCopiedPreview);
//   };

const copyPreviewContent = () => {
  const previewDiv = previewRef.current;
  if (!previewDiv) return;
  
  const fullText = previewDiv.innerText || previewDiv.textContent || '';
  const lines = fullText.split('\n').filter(line => line.trim());
  
  // Take second half (rendered output, skip LaTeX source)
  const renderedText = lines.slice(Math.ceil(lines.length / 2)).join('\n');
  
  copyToClipboard(renderedText || fullText, setCopiedPreview);
}; 


const getCategoryLabel = (key) => {
    return key.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div style={styles.container}>
      <div style={styles.explanationBox}>
        Build LaTeX formulas by clicking buttons to insert commands. Select text and click a button to wrap it with that command. 
        Use navigation buttons to move cursor, delete characters, and add new lines.
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
                if (activeCategory !== category) {
                  e.target.style.backgroundColor = '#eff6ff';
                  e.target.style.borderColor = '#60a5fa';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.backgroundColor = '#fafbfc';
                  e.target.style.borderColor = '#cbd5e1';
                }
              }}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.mainArea}>
        <div style={styles.keyboardSection}>
          <h3 style={styles.keyboardTitle}>
            {getCategoryLabel(activeCategory)}
          </h3>
          <div style={styles.buttonGrid}>
            {latexData[activeCategory].map((item, idx) => (
              <button
                key={idx}
                style={styles.latexBtn}
                onClick={() => insertLatex(item.latex, item.requiresSelection)}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
                  e.target.style.borderColor = '#245de1';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: item.display }} />
                <span style={styles.latexBtnLabel}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={styles.editorSection}>
          <div style={styles.textareaWrapper}>
            <button
              style={{
                ...styles.copyBtnInField,
                backgroundColor: copiedLatex ? '#10b981' : '#245de1',
              }}
              onClick={() => copyToClipboard(latex, setCopiedLatex)}
            >
              {copiedLatex ? 'Copied!' : 'Copy'}
            </button>
            <textarea
              ref={textareaRef}
              style={styles.textarea}
              value={latex}
              onChange={(e) => setLatex(e.target.value)}
              onFocus={(e) => {
                e.target.style.borderColor = '#245de1';
                e.target.style.boxShadow = '0 0 0 4px rgba(36,93,225,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#cbd5e1';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
              placeholder="LaTeX code appears here..."
            />
          </div>

          <div style={styles.previewSection}>
            <div style={styles.previewTitle}>Preview</div>
            {/* <button
              style={{
                ...styles.copyBtnInField,
                backgroundColor: copiedPreview ? '#10b981' : '#245de1',
              }}
              onClick={copyPreviewContent}
            >
              {copiedPreview ? 'Copied!' : 'Copy'}
            </button> */}
            <div style={styles.previewContent} ref={previewRef}>
              {latex ? (
                <span>{processContent(`$${latex}$`)}</span>
              ) : (
                <span style={{ color: '#94a3b8' }}>Preview will appear here...</span>
              )}
            </div>
          </div>

          <div style={styles.actionButtons}>
            <button
              style={styles.navBtn}
              onClick={() => moveCursor('left')}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              ←
            </button>
            <button
              style={styles.navBtn}
              onClick={() => moveCursor('right')}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              →
            </button>
            <button
              style={styles.navBtn}
              onClick={handleBackspace}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              ⌫
            </button>
            <button
              style={styles.navBtn}
              onClick={handleNewLine}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              ↵
            </button>
            <button
              style={styles.clearBtn}
              onClick={() => setLatex('')}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                e.target.style.transform = 'translateY(0)';
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