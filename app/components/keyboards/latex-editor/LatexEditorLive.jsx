

// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { createPortal } from 'react-dom';
// import latexData from './latex_data';

// // MathLive registers <math-field> as a custom element on import.
// // The import must happen client-side only, which is why this file is 'use client'.

// const LINE_ROW_APPROX_HEIGHT = 64;
// const VISIBLE_LINES = 6;

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
//   hintLine: {
//     marginTop: '8px',
//     fontSize: '13px',
//     color: '#334155',
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
//     width: '100%',
//   },
//   categoryBtnActive: {
//     backgroundColor: '#245de1',
//     color: 'white',
//     borderColor: '#245de1',
//     boxShadow: '0 4px 14px rgba(36,93,225,0.3)',
//   },
//   mainArea: {
//     display: 'grid',
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
//   subgroupLabel: {
//     margin: '14px 0 8px 0',
//     fontSize: '13px',
//     fontWeight: '700',
//     color: '#64748b',
//     textTransform: 'uppercase',
//     letterSpacing: '0.05em',
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
//     width: '100%',
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
//   editorSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   // The outer container holds the scrolling lines area + the always-visible "+ Add line"
//   linesContainer: {
//     backgroundColor: 'white',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   // The inner scrollable region holds the line rows only
//   linesScroller: {
//     padding: '12px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//     maxHeight: `${LINE_ROW_APPROX_HEIGHT * VISIBLE_LINES + 24}px`,
//     overflowY: 'auto',
//     scrollbarWidth: 'none',
//     msOverflowStyle: 'none',
//   },
//   // Footer area outside the scroller, so "+ Add line" is always visible
//   linesFooter: {
//     borderTop: '1px solid #e2e8f0',
//     padding: '10px 12px',
//     backgroundColor: '#fafbfc',
//     borderBottomLeftRadius: '4px',
//     borderBottomRightRadius: '4px',
//   },
//   lineRow: {
//     display: 'flex',
//     alignItems: 'stretch',
//     gap: '6px',
//     padding: '6px',
//     borderRadius: '5px',
//     border: '2px solid transparent',
//     transition: 'border-color 0.15s, background-color 0.15s',
//     flexShrink: 0,
//   },
//   lineRowActive: {
//     borderColor: '#245de1',
//     backgroundColor: '#f0f6ff',
//   },
//   lineNumber: {
//     minWidth: '28px',
//     fontSize: '12px',
//     fontWeight: '700',
//     color: '#94a3b8',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'monospace',
//   },
//   mathFieldHost: {
//     flex: 1,
//     minHeight: '50px',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   mathField: {
//     width: '100%',
//     minHeight: '40px',
//     fontSize: '22px',
//     outline: 'none',
//     display: 'block',
//   },
//   lineActionBtn: {
//     width: '32px',
//     minHeight: '32px',
//     alignSelf: 'center',
//     padding: '0',
//     backgroundColor: '#f1f5f9',
//     border: '1px solid #cbd5e1',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '700',
//     color: '#475569',
//     transition: 'all 0.15s',
//   },
//   lineClearBtn: {
//     width: '32px',
//     minHeight: '32px',
//     alignSelf: 'center',
//     padding: '0',
//     backgroundColor: '#fef3c7',
//     border: '1px solid #fbbf24',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     fontWeight: '700',
//     color: '#92400e',
//     transition: 'all 0.15s',
//   },
//   lineRemoveBtn: {
//     width: '32px',
//     minHeight: '32px',
//     alignSelf: 'center',
//     padding: '0',
//     backgroundColor: '#fee2e2',
//     border: '1px solid #ef4444',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     fontWeight: '700',
//     color: '#b91c1c',
//     transition: 'all 0.15s',
//   },
//   addLineBtn: {
//     padding: '8px 14px',
//     backgroundColor: '#f0f6ff',
//     color: '#245de1',
//     border: '2px dashed #245de1',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '13px',
//     fontWeight: '600',
//     transition: 'all 0.2s',
//   },
//   sourceWrapper: {
//     position: 'relative',
//     backgroundColor: '#f8fafc',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     padding: '40px 16px 16px 16px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
//   },
//   sourceLabel: {
//     position: 'absolute',
//     top: '12px',
//     left: '20px',
//     fontSize: '14px',
//     fontWeight: '700',
//     color: '#1e293b',
//   },
//   sourceCode: {
//     width: '100%',
//     minHeight: '70px',
//     fontSize: '14px',
//     fontFamily: 'monospace',
//     color: '#1e293b',
//     backgroundColor: 'white',
//     border: '1px solid #e2e8f0',
//     borderRadius: '4px',
//     padding: '12px',
//     boxSizing: 'border-box',
//     whiteSpace: 'pre-wrap',
//     wordBreak: 'break-word',
//     margin: 0,
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
//   actionButtons: {
//     display: 'flex',
//     gap: '8px',
//     flexWrap: 'wrap',
//   },
//   navBtn: {
//     flex: 1,
//     minWidth: '50px',
//     padding: '10px 14px',
//     background: 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)',
//     color: 'white',
//     border: '2px solid #1e4fc7',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     fontWeight: '700',
//     transition: 'all 0.2s',
//     boxShadow: '0 3px 8px rgba(36,93,225,0.3)',
//   },
//   clearBtn: {
//     flex: 1,
//     minWidth: '80px',
//     padding: '10px',
//     background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
//     color: 'white',
//     border: '2px solid #dc2626',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '700',
//     transition: 'all 0.2s',
//     boxShadow: '0 3px 8px rgba(239,68,68,0.3)',
//   },

//   portalTooltip: {
//     position: 'fixed',
//     backgroundColor: '#1e293b',
//     color: '#f8fafc',
//     padding: '8px 12px',
//     borderRadius: '6px',
//     fontSize: '12px',
//     lineHeight: '1.4',
//     fontWeight: '500',
//     whiteSpace: 'normal',
//     width: 'max-content',
//     maxWidth: '260px',
//     textAlign: 'center',
//     boxShadow: '0 8px 24px rgba(15,23,42,0.18), 0 2px 6px rgba(15,23,42,0.12)',
//     pointerEvents: 'none',
//     zIndex: 10000,
//     fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
//     letterSpacing: '0.01em',
//     transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
//   },
// };

// function Tooltip({ text, children, delay = 250 }) {
//   const [visible, setVisible] = useState(false);
//   const [pos, setPos] = useState(null);
//   const timerRef = useRef(null);
//   const triggerRef = useRef(null);

//   const computePosition = () => {
//     const el = triggerRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const tooltipApproxHeight = 36;
//     const margin = 8;
//     const spaceAbove = rect.top;
//     const placement = spaceAbove >= tooltipApproxHeight + margin ? 'above' : 'below';
//     const top = placement === 'above' ? rect.top - margin : rect.bottom + margin;
//     const centerX = rect.left + rect.width / 2;
//     setPos({ top, left: centerX, placement });
//   };

//   const show = () => {
//     clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(() => {
//       computePosition();
//       setVisible(true);
//     }, delay);
//   };
//   const hide = () => {
//     clearTimeout(timerRef.current);
//     setVisible(false);
//   };

//   useEffect(() => () => clearTimeout(timerRef.current), []);

//   useEffect(() => {
//     if (!visible) return;
//     const onUpdate = () => computePosition();
//     window.addEventListener('scroll', onUpdate, true);
//     window.addEventListener('resize', onUpdate);
//     return () => {
//       window.removeEventListener('scroll', onUpdate, true);
//       window.removeEventListener('resize', onUpdate);
//     };
//   }, [visible]);

//   if (!text || !React.isValidElement(children)) return children;

//   const childProps = children.props || {};

//   const setRef = (el) => {
//     triggerRef.current = el;
//     const childRef = children.ref;
//     if (typeof childRef === 'function') childRef(el);
//     else if (childRef && typeof childRef === 'object') childRef.current = el;
//   };

//   const mergedOnMouseEnter = (e) => {
//     show();
//     if (childProps.onMouseEnter) childProps.onMouseEnter(e);
//   };
//   const mergedOnMouseLeave = (e) => {
//     hide();
//     if (childProps.onMouseLeave) childProps.onMouseLeave(e);
//   };
//   const mergedOnFocus = (e) => {
//     show();
//     if (childProps.onFocus) childProps.onFocus(e);
//   };
//   const mergedOnBlur = (e) => {
//     hide();
//     if (childProps.onBlur) childProps.onBlur(e);
//   };

//   const cloned = React.cloneElement(children, {
//     ref: setRef,
//     onMouseEnter: mergedOnMouseEnter,
//     onMouseLeave: mergedOnMouseLeave,
//     onFocus: mergedOnFocus,
//     onBlur: mergedOnBlur,
//   });

//   const tooltipNode = visible && pos && typeof document !== 'undefined'
//     ? createPortal(
//         <div
//           role="tooltip"
//           style={{
//             ...styles.portalTooltip,
//             top: pos.top,
//             left: pos.left,
//             transform: pos.placement === 'above'
//               ? 'translate(-50%, -100%)'
//               : 'translate(-50%, 0)',
//           }}
//         >
//           {text}
//         </div>,
//         document.body
//       )
//     : null;

//   return (
//     <>
//       {cloned}
//       {tooltipNode}
//     </>
//   );
// }

// let lineIdCounter = 1;
// const makeLine = (latex = '') => ({ id: lineIdCounter++, latex });

// export default function LatexEditorLive() {
//   const [lines, setLines] = useState(() => [makeLine()]);
//   const [activeLineId, setActiveLineId] = useState(() => 1);
//   const [activeCategory, setActiveCategory] = useState('basic');
//   const [copiedLatex, setCopiedLatex] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mathLiveReady, setMathLiveReady] = useState(false);

//   const fieldRefs = useRef(new Map());
//   const linesScrollerRef = useRef(null);

//   useEffect(() => {
//     let cancelled = false;
//     import('mathlive')
//       .then(() => { if (!cancelled) setMathLiveReady(true); })
//       .catch((err) => { console.error('Failed to load MathLive:', err); });
//     return () => { cancelled = true; };
//   }, []);

//   useEffect(() => {
//     const mq = window.matchMedia('(max-width: 900px)');
//     const update = () => setIsMobile(mq.matches);
//     update();
//     mq.addEventListener('change', update);
//     return () => mq.removeEventListener('change', update);
//   }, []);

//   const setFieldRef = useCallback((id) => (el) => {
//     if (el) fieldRefs.current.set(id, el);
//     else fieldRefs.current.delete(id);
//   }, []);

//   useEffect(() => {
//     if (!mathLiveReady) return;
//     const cleanups = [];

//     lines.forEach((line) => {
//       const field = fieldRefs.current.get(line.id);
//       if (!field) return;
//       if (field.value !== line.latex) field.value = line.latex;

//       const handleInput = (evt) => {
//         const value = evt.target.value;
//         setLines((prev) => prev.map((l) => (l.id === line.id ? { ...l, latex: value } : l)));
//       };
//       const handleFocus = () => setActiveLineId(line.id);

//       field.addEventListener('input', handleInput);
//       field.addEventListener('focus', handleFocus);

//       cleanups.push(() => {
//         field.removeEventListener('input', handleInput);
//         field.removeEventListener('focus', handleFocus);
//       });
//     });

//     return () => { cleanups.forEach((fn) => fn()); };
//   }, [mathLiveReady, lines]);

//   useEffect(() => {
//     if (!mathLiveReady) return;
//     const scroller = linesScrollerRef.current;
//     if (!scroller) return;
//     const field = fieldRefs.current.get(activeLineId);
//     if (!field) return;
//     const row = field.closest('[data-line-row="true"]');
//     if (!row) return;

//     const scrollerRect = scroller.getBoundingClientRect();
//     const rowRect = row.getBoundingClientRect();
//     if (rowRect.bottom > scrollerRect.bottom) {
//       scroller.scrollTop += rowRect.bottom - scrollerRect.bottom + 8;
//     } else if (rowRect.top < scrollerRect.top) {
//       scroller.scrollTop -= scrollerRect.top - rowRect.top + 8;
//     }
//   }, [activeLineId, lines.length, mathLiveReady]);

//   const categories = Object.keys(latexData);
//   const getActiveField = () => fieldRefs.current.get(activeLineId);

//   const insertLatex = (code) => {
//     const field = getActiveField();
//     if (!field) return;
//     let mlCode = code;
//     if (mlCode.includes('[]')) {
//       mlCode = mlCode.replace('[]', '[#?]').replace('{}', '{#?}');
//     } else if (mlCode.includes('{}{}')) {
//       mlCode = mlCode.replace('{}{}', '{#?}{#?}');
//     } else {
//       mlCode = mlCode.replace(/\{\}/g, '{#?}');
//     }
//     field.executeCommand(['insert', mlCode, { selectionMode: 'placeholder', focus: true }]);
//   };

//   const moveCaret = (direction) => {
//     const field = getActiveField();
//     if (!field) return;
//     field.focus();
//     field.executeCommand(direction === 'left' ? 'moveToPreviousChar' : 'moveToNextChar');
//   };

//   const handleBackspace = () => {
//     const field = getActiveField();
//     if (!field) return;
//     field.focus();
//     field.executeCommand('deleteBackward');
//   };

//   const handleNewLine = () => {
//     const newLine = makeLine();
//     setLines((prev) => {
//       const idx = prev.findIndex((l) => l.id === activeLineId);
//       if (idx === -1) return [...prev, newLine];
//       const next = [...prev];
//       next.splice(idx + 1, 0, newLine);
//       return next;
//     });
//     setActiveLineId(newLine.id);
//     setTimeout(() => {
//       const field = fieldRefs.current.get(newLine.id);
//       if (field && field.focus) field.focus();
//     }, 0);
//   };

//   const addLine = () => {
//     const newLine = makeLine();
//     setLines((prev) => [...prev, newLine]);
//     setActiveLineId(newLine.id);
//     setTimeout(() => {
//       const field = fieldRefs.current.get(newLine.id);
//       if (field && field.focus) field.focus();
//     }, 0);
//   };

//   const clearLine = (id) => {
//     setLines((prev) => prev.map((l) => (l.id === id ? { ...l, latex: '' } : l)));
//     const field = fieldRefs.current.get(id);
//     if (field) field.value = '';
//     setActiveLineId(id);
//     setTimeout(() => {
//       if (field && field.focus) field.focus();
//     }, 0);
//   };

//   const removeLine = (id) => {
//     setLines((prev) => {
//       if (prev.length <= 1) return prev;
//       const next = prev.filter((l) => l.id !== id);
//       if (id === activeLineId) {
//         const removedIdx = prev.findIndex((l) => l.id === id);
//         const newActive = next[Math.max(0, removedIdx - 1)];
//         if (newActive) {
//           setActiveLineId(newActive.id);
//           setTimeout(() => {
//             const field = fieldRefs.current.get(newActive.id);
//             if (field && field.focus) field.focus();
//           }, 0);
//         }
//       }
//       return next;
//     });
//   };

//   const moveLine = (id, direction) => {
//     setLines((prev) => {
//       const idx = prev.findIndex((l) => l.id === id);
//       if (idx === -1) return prev;
//       const swapWith = direction === 'up' ? idx - 1 : idx + 1;
//       if (swapWith < 0 || swapWith >= prev.length) return prev;
//       const next = [...prev];
//       [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
//       return next;
//     });
//   };

//   const handleClearAll = () => {
//     const fresh = makeLine();
//     setLines([fresh]);
//     setActiveLineId(fresh.id);
//     fieldRefs.current.forEach((field) => { field.value = ''; });
//   };

//   const combinedLatex = lines
//     .map((l) => l.latex)
//     .filter((s) => s !== undefined)
//     .join(' \\\\\n');

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

//   const currentCategoryData = latexData[activeCategory];
//   const isGrouped = !Array.isArray(currentCategoryData);

//   const renderButtonGrid = (items) => (
//     <div style={styles.buttonGrid}>
//       {items.map((item, idx) => (
//         <Tooltip key={idx} text={item.tooltip || item.label}>
//           <button
//             style={styles.latexBtn}
//             onClick={() => insertLatex(item.latex)}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
//               e.currentTarget.style.borderColor = '#245de1';
//               e.currentTarget.style.transform = 'scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
//               e.currentTarget.style.borderColor = '#e2e8f0';
//               e.currentTarget.style.transform = 'scale(1)';
//             }}
//           >
//             <span dangerouslySetInnerHTML={{ __html: item.display }} />
//             <span style={styles.latexBtnLabel}>{item.label}</span>
//           </button>
//         </Tooltip>
//       ))}
//     </div>
//   );

//   const mainAreaStyle = {
//     ...styles.mainArea,
//     gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//   };

//   const onlyOneLine = lines.length === 1;

//   return (
//     <div style={styles.container}>
//       <style>{`
//         [data-lines-scroller="true"]::-webkit-scrollbar { width: 0; height: 0; display: none; }
//       `}</style>

//       <div style={styles.explanationBox}>
//         Click buttons to build LaTeX formulas. Each line is its own equation; the active line (highlighted) receives button inserts.
//         <div style={styles.hintLine}>
//           <strong>Per line:</strong> use the amber <strong>&#8634;</strong> button to clear a line and the red <strong>&times;</strong> to remove it.
//           The up/down arrows reorder lines. Click <strong>+ Add line</strong> for a new equation.
//           The combined LaTeX source below joins all lines with <code>\\</code>. Hover any button for a short description.
//         </div>
//       </div>

//       <div style={styles.categoriesWrapper}>
//         <div style={styles.selectorGrid}>
//           {categories.map((category, idx) => (
//             <Tooltip key={idx} text={`Show ${getCategoryLabel(category)} symbols`}>
//               <button
//                 style={{
//                   ...styles.categoryBtn,
//                   ...(activeCategory === category ? styles.categoryBtnActive : {}),
//                 }}
//                 onClick={() => setActiveCategory(category)}
//                 onMouseEnter={(e) => {
//                   if (activeCategory !== category) {
//                     e.currentTarget.style.backgroundColor = '#eff6ff';
//                     e.currentTarget.style.borderColor = '#60a5fa';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (activeCategory !== category) {
//                     e.currentTarget.style.backgroundColor = '#fafbfc';
//                     e.currentTarget.style.borderColor = '#cbd5e1';
//                   }
//                 }}
//               >
//                 {getCategoryLabel(category)}
//               </button>
//             </Tooltip>
//           ))}
//         </div>
//       </div>

//       <div style={mainAreaStyle}>
//         <div style={styles.keyboardSection}>
//           <h3 style={styles.keyboardTitle}>
//             {getCategoryLabel(activeCategory)}
//           </h3>
//           {isGrouped ? (
//             Object.keys(currentCategoryData).map((subKey) => (
//               <div key={subKey}>
//                 <div style={styles.subgroupLabel}>{getCategoryLabel(subKey)}</div>
//                 {renderButtonGrid(currentCategoryData[subKey])}
//               </div>
//             ))
//           ) : (
//             renderButtonGrid(currentCategoryData)
//           )}
//         </div>

//         <div style={styles.editorSection}>
//           {/* Container: scrollable lines on top, always-visible "+ Add line" footer below */}
//           <div style={styles.linesContainer}>
//             <div
//               style={styles.linesScroller}
//               ref={linesScrollerRef}
//               data-lines-scroller="true"
//             >
//               {!mathLiveReady && (
//                 <div style={{ color: '#94a3b8', fontStyle: 'italic', padding: '12px' }}>
//                   Loading math editor&hellip;
//                 </div>
//               )}
//               {mathLiveReady && lines.map((line, idx) => {
//                 const isActive = line.id === activeLineId;
//                 const rowStyle = { ...styles.lineRow, ...(isActive ? styles.lineRowActive : {}) };
//                 return (
//                   <div
//                     key={line.id}
//                     style={rowStyle}
//                     data-line-row="true"
//                     onClick={() => setActiveLineId(line.id)}
//                   >
//                     <div style={styles.lineNumber}>{idx + 1}</div>
//                     <div style={styles.mathFieldHost}>
//                       {React.createElement('math-field', {
//                         ref: setFieldRef(line.id),
//                         style: styles.mathField,
//                         'virtual-keyboard-mode': 'off',
//                         'default-mode': 'math',
//                       })}
//                     </div>
//                     <Tooltip text="Move this line up">
//                       <button
//                         style={styles.lineActionBtn}
//                         onClick={(e) => { e.stopPropagation(); moveLine(line.id, 'up'); }}
//                         disabled={idx === 0}
//                       >
//                         &uarr;
//                       </button>
//                     </Tooltip>
//                     <Tooltip text="Move this line down">
//                       <button
//                         style={styles.lineActionBtn}
//                         onClick={(e) => { e.stopPropagation(); moveLine(line.id, 'down'); }}
//                         disabled={idx === lines.length - 1}
//                       >
//                         &darr;
//                       </button>
//                     </Tooltip>
//                     <Tooltip text="Clear this line (empty its contents, keep the row)">
//                       <button
//                         style={styles.lineClearBtn}
//                         onClick={(e) => { e.stopPropagation(); clearLine(line.id); }}
//                       >
//                         &#8634;
//                       </button>
//                     </Tooltip>
//                     {!onlyOneLine && (
//                       <Tooltip text="Remove this line entirely">
//                         <button
//                           style={styles.lineRemoveBtn}
//                           onClick={(e) => { e.stopPropagation(); removeLine(line.id); }}
//                         >
//                           &times;
//                         </button>
//                       </Tooltip>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Footer pinned outside the scroller — always visible */}
//             {mathLiveReady && (
//               <div style={styles.linesFooter}>
//                 <Tooltip text="Add a new equation line at the end">
//                   <button
//                     style={styles.addLineBtn}
//                     onClick={addLine}
//                     onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dbeafe'; }}
//                     onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f0f6ff'; }}
//                   >
//                     + Add line
//                   </button>
//                 </Tooltip>
//               </div>
//             )}
//           </div>

//           <div style={styles.sourceWrapper}>
//             <div style={styles.sourceLabel}>LaTeX Source</div>
//             <Tooltip text="Copy the combined LaTeX source to clipboard">
//               <button
//                 style={{
//                   ...styles.copyBtnInField,
//                   backgroundColor: copiedLatex ? '#10b981' : '#245de1',
//                 }}
//                 onClick={() => copyToClipboard(combinedLatex, setCopiedLatex)}
//               >
//                 {copiedLatex ? 'Copied!' : 'Copy'}
//               </button>
//             </Tooltip>
//             <pre style={styles.sourceCode}>
//               {combinedLatex || <span style={{ color: '#94a3b8' }}>LaTeX source appears here&hellip;</span>}
//             </pre>
//           </div>

//           <div style={styles.actionButtons}>
//             <Tooltip text="Move caret one position to the left">
//               <button
//                 style={styles.navBtn}
//                 onClick={() => moveCaret('left')}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                   e.currentTarget.style.transform = 'translateY(-1px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 &larr;
//               </button>
//             </Tooltip>
//             <Tooltip text="Move caret one position to the right">
//               <button
//                 style={styles.navBtn}
//                 onClick={() => moveCaret('right')}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                   e.currentTarget.style.transform = 'translateY(-1px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 &rarr;
//               </button>
//             </Tooltip>
//             <Tooltip text="Delete the character before the caret">
//               <button
//                 style={styles.navBtn}
//                 onClick={handleBackspace}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                   e.currentTarget.style.transform = 'translateY(-1px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 &#9003;
//               </button>
//             </Tooltip>
//             <Tooltip text="Insert a new line below this one">
//               <button
//                 style={styles.navBtn}
//                 onClick={handleNewLine}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
//                   e.currentTarget.style.transform = 'translateY(-1px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 &crarr;
//               </button>
//             </Tooltip>
//             <Tooltip text="Remove all lines and start over">
//               <button
//                 style={styles.clearBtn}
//                 onClick={handleClearAll}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
//                   e.currentTarget.style.transform = 'translateY(-1px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Clear all
//               </button>
//             </Tooltip>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import latexData from './latex_data';

// MathLive registers <math-field> as a custom element on import.
// The import must happen client-side only, which is why this file is 'use client'.

const LINE_ROW_APPROX_HEIGHT = 64;
const VISIBLE_LINES = 6;

const SCROLLBAR_HIDE_CSS = `
[data-lines-scroller="true"]::-webkit-scrollbar { width: 0; height: 0; display: none; }
`;

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
  hintLine: {
    marginTop: '8px',
    fontSize: '13px',
    color: '#334155',
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
    width: '100%',
  },
  categoryBtnActive: {
    backgroundColor: '#245de1',
    color: 'white',
    borderColor: '#245de1',
    boxShadow: '0 4px 14px rgba(36,93,225,0.3)',
  },
  mainArea: {
    display: 'grid',
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
  subgroupLabel: {
    margin: '14px 0 8px 0',
    fontSize: '13px',
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
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
    width: '100%',
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
  // The outer container holds the scrolling lines area + the always-visible "+ Add line"
  linesContainer: {
    backgroundColor: 'white',
    border: '2px solid #cbd5e1',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
  },
  // The inner scrollable region holds the line rows only
  linesScroller: {
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxHeight: `${LINE_ROW_APPROX_HEIGHT * VISIBLE_LINES + 24}px`,
    overflowY: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  // Footer area outside the scroller, so "+ Add line" is always visible
  linesFooter: {
    borderTop: '1px solid #e2e8f0',
    padding: '10px 12px',
    backgroundColor: '#fafbfc',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
  },
  lineRow: {
    display: 'flex',
    alignItems: 'stretch',
    gap: '6px',
    padding: '6px',
    borderRadius: '5px',
    border: '2px solid transparent',
    transition: 'border-color 0.15s, background-color 0.15s',
    flexShrink: 0,
  },
  lineRowActive: {
    borderColor: '#245de1',
    backgroundColor: '#f0f6ff',
  },
  lineNumber: {
    minWidth: '28px',
    fontSize: '12px',
    fontWeight: '700',
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
  },
  mathFieldHost: {
    flex: 1,
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  mathField: {
    width: '100%',
    minHeight: '40px',
    fontSize: '22px',
    outline: 'none',
    display: 'block',
  },
  lineActionBtn: {
    width: '32px',
    minHeight: '32px',
    alignSelf: 'center',
    padding: '0',
    backgroundColor: '#f1f5f9',
    border: '1px solid #cbd5e1',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    color: '#475569',
    transition: 'all 0.15s',
  },
  lineClearBtn: {
    width: '32px',
    minHeight: '32px',
    alignSelf: 'center',
    padding: '0',
    backgroundColor: '#fef3c7',
    border: '1px solid #fbbf24',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    color: '#92400e',
    transition: 'all 0.15s',
  },
  lineRemoveBtn: {
    width: '32px',
    minHeight: '32px',
    alignSelf: 'center',
    padding: '0',
    backgroundColor: '#fee2e2',
    border: '1px solid #ef4444',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    color: '#b91c1c',
    transition: 'all 0.15s',
  },
  addLineBtn: {
    padding: '8px 14px',
    backgroundColor: '#f0f6ff',
    color: '#245de1',
    border: '2px dashed #245de1',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'all 0.2s',
  },
  sourceWrapper: {
    position: 'relative',
    backgroundColor: '#f8fafc',
    border: '2px solid #cbd5e1',
    borderRadius: '6px',
    padding: '40px 16px 16px 16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },
  sourceLabel: {
    position: 'absolute',
    top: '12px',
    left: '20px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#1e293b',
  },
  sourceCode: {
    width: '100%',
    minHeight: '70px',
    fontSize: '14px',
    fontFamily: 'monospace',
    color: '#1e293b',
    backgroundColor: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '4px',
    padding: '12px',
    boxSizing: 'border-box',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    margin: 0,
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
  actionButtons: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  navBtn: {
    flex: 1,
    minWidth: '50px',
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
    minWidth: '80px',
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

  portalTooltip: {
    position: 'fixed',
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    lineHeight: '1.4',
    fontWeight: '500',
    whiteSpace: 'normal',
    width: 'max-content',
    maxWidth: '260px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(15,23,42,0.18), 0 2px 6px rgba(15,23,42,0.12)',
    pointerEvents: 'none',
    zIndex: 10000,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    letterSpacing: '0.01em',
    transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
  },
};

function Tooltip({ text, children, delay = 250 }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState(null);
  const timerRef = useRef(null);
  const triggerRef = useRef(null);

  const computePosition = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const tooltipApproxHeight = 36;
    const margin = 8;
    const spaceAbove = rect.top;
    const placement = spaceAbove >= tooltipApproxHeight + margin ? 'above' : 'below';
    const top = placement === 'above' ? rect.top - margin : rect.bottom + margin;
    const centerX = rect.left + rect.width / 2;
    setPos({ top, left: centerX, placement });
  };

  const show = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      computePosition();
      setVisible(true);
    }, delay);
  };
  const hide = () => {
    clearTimeout(timerRef.current);
    setVisible(false);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (!visible) return;
    const onUpdate = () => computePosition();
    window.addEventListener('scroll', onUpdate, true);
    window.addEventListener('resize', onUpdate);
    return () => {
      window.removeEventListener('scroll', onUpdate, true);
      window.removeEventListener('resize', onUpdate);
    };
  }, [visible]);

  if (!text || !React.isValidElement(children)) return children;

  const childProps = children.props || {};

  const setRef = (el) => {
    triggerRef.current = el;
    const childRef = children.ref;
    if (typeof childRef === 'function') childRef(el);
    else if (childRef && typeof childRef === 'object') childRef.current = el;
  };

  const mergedOnMouseEnter = (e) => {
    show();
    if (childProps.onMouseEnter) childProps.onMouseEnter(e);
  };
  const mergedOnMouseLeave = (e) => {
    hide();
    if (childProps.onMouseLeave) childProps.onMouseLeave(e);
  };
  const mergedOnFocus = (e) => {
    show();
    if (childProps.onFocus) childProps.onFocus(e);
  };
  const mergedOnBlur = (e) => {
    hide();
    if (childProps.onBlur) childProps.onBlur(e);
  };

  const cloned = React.cloneElement(children, {
    ref: setRef,
    onMouseEnter: mergedOnMouseEnter,
    onMouseLeave: mergedOnMouseLeave,
    onFocus: mergedOnFocus,
    onBlur: mergedOnBlur,
  });

  const tooltipNode = visible && pos && typeof document !== 'undefined'
    ? createPortal(
        <div
          role="tooltip"
          style={{
            ...styles.portalTooltip,
            top: pos.top,
            left: pos.left,
            transform: pos.placement === 'above'
              ? 'translate(-50%, -100%)'
              : 'translate(-50%, 0)',
          }}
        >
          {text}
        </div>,
        document.body
      )
    : null;

  return (
    <>
      {cloned}
      {tooltipNode}
    </>
  );
}

let lineIdCounter = 1;
const makeLine = (latex = '') => ({ id: lineIdCounter++, latex });

export default function LatexEditorLive() {
  const [lines, setLines] = useState(() => [makeLine()]);
  const [activeLineId, setActiveLineId] = useState(() => 1);
  const [activeCategory, setActiveCategory] = useState('basic');
  const [copiedLatex, setCopiedLatex] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mathLiveReady, setMathLiveReady] = useState(false);

  const fieldRefs = useRef(new Map());
  const linesScrollerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    import('mathlive')
      .then(() => { if (!cancelled) setMathLiveReady(true); })
      .catch((err) => { console.error('Failed to load MathLive:', err); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const setFieldRef = useCallback((id) => (el) => {
    if (el) fieldRefs.current.set(id, el);
    else fieldRefs.current.delete(id);
  }, []);

  useEffect(() => {
    if (!mathLiveReady) return;
    const cleanups = [];

    lines.forEach((line) => {
      const field = fieldRefs.current.get(line.id);
      if (!field) return;
      if (field.value !== line.latex) field.value = line.latex;

      const handleInput = (evt) => {
        const value = evt.target.value;
        setLines((prev) => prev.map((l) => (l.id === line.id ? { ...l, latex: value } : l)));
      };
      const handleFocus = () => setActiveLineId(line.id);

      field.addEventListener('input', handleInput);
      field.addEventListener('focus', handleFocus);

      cleanups.push(() => {
        field.removeEventListener('input', handleInput);
        field.removeEventListener('focus', handleFocus);
      });
    });

    return () => { cleanups.forEach((fn) => fn()); };
  }, [mathLiveReady, lines]);

  useEffect(() => {
    if (!mathLiveReady) return;
    const scroller = linesScrollerRef.current;
    if (!scroller) return;
    const field = fieldRefs.current.get(activeLineId);
    if (!field) return;
    const row = field.closest('[data-line-row="true"]');
    if (!row) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    if (rowRect.bottom > scrollerRect.bottom) {
      scroller.scrollTop += rowRect.bottom - scrollerRect.bottom + 8;
    } else if (rowRect.top < scrollerRect.top) {
      scroller.scrollTop -= scrollerRect.top - rowRect.top + 8;
    }
  }, [activeLineId, lines.length, mathLiveReady]);

  const categories = Object.keys(latexData);
  const getActiveField = () => fieldRefs.current.get(activeLineId);

  const insertLatex = (code) => {
    const field = getActiveField();
    if (!field) return;
    let mlCode = code;
    if (mlCode.includes('[]')) {
      mlCode = mlCode.replace('[]', '[#?]').replace('{}', '{#?}');
    } else if (mlCode.includes('{}{}')) {
      mlCode = mlCode.replace('{}{}', '{#?}{#?}');
    } else {
      mlCode = mlCode.replace(/\{\}/g, '{#?}');
    }
    field.executeCommand(['insert', mlCode, { selectionMode: 'placeholder', focus: true }]);
  };

  const moveCaret = (direction) => {
    const field = getActiveField();
    if (!field) return;
    field.focus();
    field.executeCommand(direction === 'left' ? 'moveToPreviousChar' : 'moveToNextChar');
  };

  const handleBackspace = () => {
    const field = getActiveField();
    if (!field) return;
    field.focus();
    field.executeCommand('deleteBackward');
  };

  const handleNewLine = () => {
    const newLine = makeLine();
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.id === activeLineId);
      if (idx === -1) return [...prev, newLine];
      const next = [...prev];
      next.splice(idx + 1, 0, newLine);
      return next;
    });
    setActiveLineId(newLine.id);
    setTimeout(() => {
      const field = fieldRefs.current.get(newLine.id);
      if (field && field.focus) field.focus();
    }, 0);
  };

  const addLine = () => {
    const newLine = makeLine();
    setLines((prev) => [...prev, newLine]);
    setActiveLineId(newLine.id);
    setTimeout(() => {
      const field = fieldRefs.current.get(newLine.id);
      if (field && field.focus) field.focus();
    }, 0);
  };

  const clearLine = (id) => {
    setLines((prev) => prev.map((l) => (l.id === id ? { ...l, latex: '' } : l)));
    const field = fieldRefs.current.get(id);
    if (field) field.value = '';
    setActiveLineId(id);
    setTimeout(() => {
      if (field && field.focus) field.focus();
    }, 0);
  };

  const removeLine = (id) => {
    setLines((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.filter((l) => l.id !== id);
      if (id === activeLineId) {
        const removedIdx = prev.findIndex((l) => l.id === id);
        const newActive = next[Math.max(0, removedIdx - 1)];
        if (newActive) {
          setActiveLineId(newActive.id);
          setTimeout(() => {
            const field = fieldRefs.current.get(newActive.id);
            if (field && field.focus) field.focus();
          }, 0);
        }
      }
      return next;
    });
  };

  const moveLine = (id, direction) => {
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.id === id);
      if (idx === -1) return prev;
      const swapWith = direction === 'up' ? idx - 1 : idx + 1;
      if (swapWith < 0 || swapWith >= prev.length) return prev;
      const next = [...prev];
      [next[idx], next[swapWith]] = [next[swapWith], next[idx]];
      return next;
    });
  };

  const handleClearAll = () => {
    const fresh = makeLine();
    setLines([fresh]);
    setActiveLineId(fresh.id);
    fieldRefs.current.forEach((field) => { field.value = ''; });
  };

  const combinedLatex = lines
    .map((l) => l.latex)
    .filter((s) => s !== undefined)
    .join(' \\\\\n');

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  const getCategoryLabel = (key) => {
    return key.split('_').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const currentCategoryData = latexData[activeCategory];
  const isGrouped = !Array.isArray(currentCategoryData);

  const renderButtonGrid = (items) => (
    <div style={styles.buttonGrid}>
      {items.map((item, idx) => (
        <Tooltip key={idx} text={item.tooltip || item.label}>
          <button
            style={styles.latexBtn}
            onClick={() => insertLatex(item.latex)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)';
              e.currentTarget.style.borderColor = '#245de1';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: item.display }} />
            <span style={styles.latexBtnLabel}>{item.label}</span>
          </button>
        </Tooltip>
      ))}
    </div>
  );

  const mainAreaStyle = {
    ...styles.mainArea,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
  };

  const onlyOneLine = lines.length === 1;

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: SCROLLBAR_HIDE_CSS }} />

      <div style={styles.explanationBox}>
        Click buttons to build LaTeX formulas. Each line is its own equation; the active line (highlighted) receives button inserts.
        <div style={styles.hintLine}>
          <strong>Per line:</strong> use the amber <strong>&#8634;</strong> button to clear a line and the red <strong>&times;</strong> to remove it.
          The up/down arrows reorder lines. Click <strong>+ Add line</strong> for a new equation.
          The combined LaTeX source below joins all lines with <code>\\</code>. Hover any button for a short description.
        </div>
      </div>

      <div style={styles.categoriesWrapper}>
        <div style={styles.selectorGrid}>
          {categories.map((category, idx) => (
            <Tooltip key={idx} text={`Show ${getCategoryLabel(category)} symbols`}>
              <button
                style={{
                  ...styles.categoryBtn,
                  ...(activeCategory === category ? styles.categoryBtnActive : {}),
                }}
                onClick={() => setActiveCategory(category)}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#eff6ff';
                    e.currentTarget.style.borderColor = '#60a5fa';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#fafbfc';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }
                }}
              >
                {getCategoryLabel(category)}
              </button>
            </Tooltip>
          ))}
        </div>
      </div>

      <div style={mainAreaStyle}>
        <div style={styles.keyboardSection}>
          <h3 style={styles.keyboardTitle}>
            {getCategoryLabel(activeCategory)}
          </h3>
          {isGrouped ? (
            Object.keys(currentCategoryData).map((subKey) => (
              <div key={subKey}>
                <div style={styles.subgroupLabel}>{getCategoryLabel(subKey)}</div>
                {renderButtonGrid(currentCategoryData[subKey])}
              </div>
            ))
          ) : (
            renderButtonGrid(currentCategoryData)
          )}
        </div>

        <div style={styles.editorSection}>
          {/* Container: scrollable lines on top, always-visible "+ Add line" footer below */}
          <div style={styles.linesContainer}>
            <div
              style={styles.linesScroller}
              ref={linesScrollerRef}
              data-lines-scroller="true"
            >
              {!mathLiveReady && (
                <div style={{ color: '#94a3b8', fontStyle: 'italic', padding: '12px' }}>
                  Loading math editor&hellip;
                </div>
              )}
              {mathLiveReady && lines.map((line, idx) => {
                const isActive = line.id === activeLineId;
                const rowStyle = { ...styles.lineRow, ...(isActive ? styles.lineRowActive : {}) };
                return (
                  <div
                    key={line.id}
                    style={rowStyle}
                    data-line-row="true"
                    onClick={() => setActiveLineId(line.id)}
                  >
                    <div style={styles.lineNumber}>{idx + 1}</div>
                    <div style={styles.mathFieldHost}>
                      {React.createElement('math-field', {
                        ref: setFieldRef(line.id),
                        style: styles.mathField,
                        'virtual-keyboard-mode': 'off',
                        'default-mode': 'math',
                      })}
                    </div>
                    <Tooltip text="Move this line up">
                      <button
                        style={styles.lineActionBtn}
                        onClick={(e) => { e.stopPropagation(); moveLine(line.id, 'up'); }}
                        disabled={idx === 0}
                      >
                        &uarr;
                      </button>
                    </Tooltip>
                    <Tooltip text="Move this line down">
                      <button
                        style={styles.lineActionBtn}
                        onClick={(e) => { e.stopPropagation(); moveLine(line.id, 'down'); }}
                        disabled={idx === lines.length - 1}
                      >
                        &darr;
                      </button>
                    </Tooltip>
                    <Tooltip text="Clear this line (empty its contents, keep the row)">
                      <button
                        style={styles.lineClearBtn}
                        onClick={(e) => { e.stopPropagation(); clearLine(line.id); }}
                      >
                        &#8634;
                      </button>
                    </Tooltip>
                    {!onlyOneLine && (
                      <Tooltip text="Remove this line entirely">
                        <button
                          style={styles.lineRemoveBtn}
                          onClick={(e) => { e.stopPropagation(); removeLine(line.id); }}
                        >
                          &times;
                        </button>
                      </Tooltip>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer pinned outside the scroller — always visible */}
            {mathLiveReady && (
              <div style={styles.linesFooter}>
                <Tooltip text="Add a new equation line at the end">
                  <button
                    style={styles.addLineBtn}
                    onClick={addLine}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dbeafe'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f0f6ff'; }}
                  >
                    + Add line
                  </button>
                </Tooltip>
              </div>
            )}
          </div>

          <div style={styles.sourceWrapper}>
            <div style={styles.sourceLabel}>LaTeX Source</div>
            <Tooltip text="Copy the combined LaTeX source to clipboard">
              <button
                style={{
                  ...styles.copyBtnInField,
                  backgroundColor: copiedLatex ? '#10b981' : '#245de1',
                }}
                onClick={() => copyToClipboard(combinedLatex, setCopiedLatex)}
              >
                {copiedLatex ? 'Copied!' : 'Copy'}
              </button>
            </Tooltip>
            <pre style={styles.sourceCode}>
              {combinedLatex || <span style={{ color: '#94a3b8' }}>LaTeX source appears here&hellip;</span>}
            </pre>
          </div>

          <div style={styles.actionButtons}>
            <Tooltip text="Move caret one position to the left">
              <button
                style={styles.navBtn}
                onClick={() => moveCaret('left')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                &larr;
              </button>
            </Tooltip>
            <Tooltip text="Move caret one position to the right">
              <button
                style={styles.navBtn}
                onClick={() => moveCaret('right')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                &rarr;
              </button>
            </Tooltip>
            <Tooltip text="Delete the character before the caret">
              <button
                style={styles.navBtn}
                onClick={handleBackspace}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                &#9003;
              </button>
            </Tooltip>
            <Tooltip text="Insert a new line below this one">
              <button
                style={styles.navBtn}
                onClick={handleNewLine}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1e4fc7 0%, #1842a6 100%)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #245de1 0%, #1e4fc7 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                &crarr;
              </button>
            </Tooltip>
            <Tooltip text="Remove all lines and start over">
              <button
                style={styles.clearBtn}
                onClick={handleClearAll}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Clear all
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}