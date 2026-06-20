// // // // import { useState, useEffect, useCallback, useRef } from 'react';

// // // // // =========================================================
// // // // //   QuizWidget
// // // // //   Generic quiz UI with two modes (mutually exclusive):
// // // // //     - generator: () => ({ question, options, correct })
// // // // //     - data:      [{ question, options, correct }, ...]
// // // // //
// // // // //   Props:
// // // // //     generator      function   on-the-spot question producer
// // // // //     data           array      pre-authored question bank
// // // // //     allowBack      bool       show back button (default true)
// // // // //     allowReset     bool       show reset button (default true)
// // // // //     shuffleData    bool       reshuffle data on init/reset (default true)
// // // // //     historyLimit   number     max stored questions (default 50)
// // // // //     title          string     section title
// // // // //     subtitle       string     section subtitle
// // // // // =========================================================

// // // // const C = {
// // // //   primary:        '#4f46e5',
// // // //   primaryDark:    '#3730a3',
// // // //   primaryLight:   '#eef2ff',
// // // //   bg:             '#fafbff',
// // // //   border:         '#e0e7ff',
// // // //   borderSoft:     '#eef0f7',
// // // //   text:           '#1e1b4b',
// // // //   textMuted:      '#64748b',
// // // //   success:        '#10b981',
// // // //   successBg:      '#d1fae5',
// // // //   successText:    '#065f46',
// // // //   error:          '#ef4444',
// // // //   errorBg:        '#fee2e2',
// // // //   errorText:      '#991b1b',
// // // //   warn:           '#f59e0b',
// // // //   warnBg:         '#fef3c7',
// // // //   warnText:       '#92400e',
// // // //   shadowSm:       '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// // // //   shadowMd:       '0 4px 12px rgba(15,23,42,0.08)',
// // // // };

// // // // const S = {
// // // //   card: {
// // // //     background: 'linear-gradient(135deg, #eef2ff 0%, #fdf4ff 100%)',
// // // //     border: `1px solid ${C.border}`,
// // // //     borderRadius: '22px',
// // // //     padding: '32px',
// // // //     boxShadow: C.shadowMd,
// // // //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
// // // //     color: C.text,
// // // //   },
// // // //   header: { marginBottom: '18px' },
// // // //   title: {
// // // //     fontFamily: "'Crimson Pro', Georgia, serif",
// // // //     fontSize: '24px',
// // // //     fontWeight: 700,
// // // //     color: C.primaryDark,
// // // //     margin: 0,
// // // //     marginBottom: '4px',
// // // //   },
// // // //   subtitle: {
// // // //     color: C.textMuted,
// // // //     fontSize: '14px',
// // // //     margin: 0,
// // // //   },
// // // //   toolbar: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'space-between',
// // // //     flexWrap: 'wrap',
// // // //     gap: '12px',
// // // //     marginBottom: '20px',
// // // //   },
// // // //   scorePill: {
// // // //     display: 'inline-flex',
// // // //     alignItems: 'center',
// // // //     background: 'white',
// // // //     padding: '7px 18px',
// // // //     borderRadius: '9999px',
// // // //     fontSize: '14px',
// // // //     fontWeight: 700,
// // // //     color: C.primaryDark,
// // // //     boxShadow: C.shadowSm,
// // // //   },
// // // //   scoreMeta: {
// // // //     marginLeft: '10px',
// // // //     color: C.textMuted,
// // // //     fontWeight: 500,
// // // //     fontSize: '13px',
// // // //   },
// // // //   controls: { display: 'flex', gap: '8px' },
// // // //   iconBtn: {
// // // //     background: 'white',
// // // //     border: `1px solid ${C.border}`,
// // // //     color: C.text,
// // // //     padding: '7px 14px',
// // // //     borderRadius: '9999px',
// // // //     fontSize: '13px',
// // // //     fontWeight: 600,
// // // //     cursor: 'pointer',
// // // //     fontFamily: 'inherit',
// // // //     display: 'inline-flex',
// // // //     alignItems: 'center',
// // // //     gap: '6px',
// // // //     transition: 'all 0.15s',
// // // //   },
// // // //   iconBtnDisabled: {
// // // //     opacity: 0.4,
// // // //     cursor: 'not-allowed',
// // // //   },
// // // //   question: {
// // // //     fontFamily: "'Crimson Pro', Georgia, serif",
// // // //     fontSize: '25px',
// // // //     fontWeight: 600,
// // // //     textAlign: 'center',
// // // //     marginBottom: '24px',
// // // //     color: C.text,
// // // //     minHeight: '34px',
// // // //     lineHeight: 1.3,
// // // //   },
// // // //   reviewBadge: {
// // // //     display: 'inline-block',
// // // //     background: C.warnBg,
// // // //     color: C.warnText,
// // // //     padding: '4px 10px',
// // // //     borderRadius: '9999px',
// // // //     fontSize: '11px',
// // // //     fontWeight: 700,
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '0.6px',
// // // //     marginLeft: '10px',
// // // //     verticalAlign: 'middle',
// // // //   },
// // // //   optionsGrid: {
// // // //     display: 'grid',
// // // //     gap: '12px',
// // // //     marginBottom: '16px',
// // // //   },
// // // //   option: {
// // // //     padding: '14px',
// // // //     background: 'white',
// // // //     border: `2px solid ${C.border}`,
// // // //     borderRadius: '11px',
// // // //     fontSize: '16px',
// // // //     fontWeight: 700,
// // // //     cursor: 'pointer',
// // // //     fontFamily: 'inherit',
// // // //     color: C.text,
// // // //     transition: 'all 0.15s',
// // // //     textAlign: 'center',
// // // //   },
// // // //   optionCorrect: {
// // // //     background: C.successBg,
// // // //     borderColor: C.success,
// // // //     color: C.successText,
// // // //   },
// // // //   optionWrong: {
// // // //     background: C.errorBg,
// // // //     borderColor: C.error,
// // // //     color: C.errorText,
// // // //   },
// // // //   feedback: {
// // // //     textAlign: 'center',
// // // //     fontWeight: 600,
// // // //     marginBottom: '16px',
// // // //     minHeight: '22px',
// // // //     fontSize: '15px',
// // // //   },
// // // //   feedbackCorrect: { color: C.success },
// // // //   feedbackWrong:   { color: C.error },
// // // //   nextBtn: {
// // // //     display: 'block',
// // // //     margin: '0 auto',
// // // //     padding: '11px 32px',
// // // //     background: C.primary,
// // // //     color: 'white',
// // // //     border: 'none',
// // // //     borderRadius: '11px',
// // // //     fontWeight: 600,
// // // //     cursor: 'pointer',
// // // //     fontSize: '15px',
// // // //     fontFamily: 'inherit',
// // // //     transition: 'background 0.15s',
// // // //   },
// // // //   nextBtnDisabled: {
// // // //     background: '#94a3b8',
// // // //     cursor: 'not-allowed',
// // // //   },
// // // //   completion: {
// // // //     textAlign: 'center',
// // // //     padding: '20px 0 10px',
// // // //   },
// // // //   completionTitle: {
// // // //     fontFamily: "'Crimson Pro', Georgia, serif",
// // // //     fontSize: '32px',
// // // //     fontWeight: 700,
// // // //     color: C.primaryDark,
// // // //     marginBottom: '8px',
// // // //   },
// // // //   completionScore: {
// // // //     fontSize: '18px',
// // // //     color: C.text,
// // // //     marginBottom: '24px',
// // // //     fontWeight: 600,
// // // //   },
// // // //   completionSub: {
// // // //     fontSize: '14px',
// // // //     color: C.textMuted,
// // // //     marginBottom: '20px',
// // // //   },
// // // //   confirm: {
// // // //     position: 'fixed',
// // // //     top: 0, left: 0, right: 0, bottom: 0,
// // // //     background: 'rgba(15,23,42,0.45)',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     zIndex: 1000,
// // // //     padding: '20px',
// // // //   },
// // // //   confirmBox: {
// // // //     background: 'white',
// // // //     borderRadius: '14px',
// // // //     padding: '24px',
// // // //     maxWidth: '400px',
// // // //     width: '100%',
// // // //     boxShadow: '0 20px 50px rgba(15,23,42,0.25)',
// // // //   },
// // // //   confirmTitle: {
// // // //     fontSize: '18px',
// // // //     fontWeight: 700,
// // // //     color: C.text,
// // // //     marginBottom: '8px',
// // // //   },
// // // //   confirmText: {
// // // //     fontSize: '14px',
// // // //     color: C.textMuted,
// // // //     marginBottom: '22px',
// // // //     lineHeight: 1.55,
// // // //   },
// // // //   confirmActions: {
// // // //     display: 'flex',
// // // //     gap: '10px',
// // // //     justifyContent: 'flex-end',
// // // //   },
// // // //   confirmCancel: {
// // // //     padding: '9px 18px',
// // // //     background: 'white',
// // // //     color: C.text,
// // // //     border: `1px solid ${C.border}`,
// // // //     borderRadius: '9px',
// // // //     fontWeight: 600,
// // // //     fontSize: '14px',
// // // //     cursor: 'pointer',
// // // //     fontFamily: 'inherit',
// // // //   },
// // // //   confirmOk: {
// // // //     padding: '9px 18px',
// // // //     background: C.error,
// // // //     color: 'white',
// // // //     border: 'none',
// // // //     borderRadius: '9px',
// // // //     fontWeight: 600,
// // // //     fontSize: '14px',
// // // //     cursor: 'pointer',
// // // //     fontFamily: 'inherit',
// // // //   },
// // // //   errorBox: {
// // // //     padding: '14px 16px',
// // // //     background: C.errorBg,
// // // //     border: `1px solid ${C.error}`,
// // // //     borderRadius: '10px',
// // // //     color: C.errorText,
// // // //     fontSize: '14px',
// // // //     fontWeight: 600,
// // // //   },
// // // // };

// // // // function shuffleArray(arr) {
// // // //   const a = [...arr];
// // // //   for (let i = a.length - 1; i > 0; i--) {
// // // //     const j = Math.floor(Math.random() * (i + 1));
// // // //     [a[i], a[j]] = [a[j], a[i]];
// // // //   }
// // // //   return a;
// // // // }

// // // // function isValidQuestion(q) {
// // // //   return q && typeof q === 'object'
// // // //     && typeof q.question === 'string' && q.question.length > 0
// // // //     && Array.isArray(q.options) && q.options.length >= 2
// // // //     && q.correct !== undefined && q.correct !== null;
// // // // }

// // // // const QuizWidget = ({
// // // //   generator,
// // // //   data,
// // // //   allowBack = true,
// // // //   allowReset = true,
// // // //   shuffleData = true,
// // // //   historyLimit = 50,
// // // //   title = 'Test yourself',
// // // //   subtitle = '',
// // // // }) => {
// // // //   const hasGenerator = typeof generator === 'function';
// // // //   const hasData = Array.isArray(data) && data.length > 0;

// // // //   let configError = null;
// // // //   if (!hasGenerator && !hasData) {
// // // //     configError = 'QuizWidget requires either a generator function or a data array.';
// // // //   } else if (hasGenerator && hasData) {
// // // //     configError = 'QuizWidget accepts either generator or data, not both.';
// // // //   }

// // // //   const [dataPool, setDataPool] = useState(() =>
// // // //     hasData ? (shuffleData ? shuffleArray(data) : [...data]) : []
// // // //   );
// // // //   const [dataIndex, setDataIndex] = useState(0);
// // // //   const [history, setHistory] = useState([]);
// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const [score, setScore] = useState(0);
// // // //   const [attempts, setAttempts] = useState(0);
// // // //   const [isCompleted, setIsCompleted] = useState(false);
// // // //   const [showConfirm, setShowConfirm] = useState(false);

// // // //   const seenRef = useRef(new Set());

// // // //   const fetchQuestion = useCallback(() => {
// // // //     if (hasGenerator) {
// // // //       let q = null;
// // // //       for (let i = 0; i < 5; i++) {
// // // //         const candidate = generator();
// // // //         if (!isValidQuestion(candidate)) continue;
// // // //         if (!seenRef.current.has(candidate.question)) {
// // // //           q = candidate;
// // // //           break;
// // // //         }
// // // //         q = candidate;
// // // //       }
// // // //       if (q && isValidQuestion(q)) {
// // // //         seenRef.current.add(q.question);
// // // //         if (seenRef.current.size > historyLimit) {
// // // //           seenRef.current = new Set([...seenRef.current].slice(-historyLimit));
// // // //         }
// // // //         return q;
// // // //       }
// // // //       return null;
// // // //     }
// // // //     if (hasData) {
// // // //       if (dataIndex >= dataPool.length) return null;
// // // //       const q = dataPool[dataIndex];
// // // //       setDataIndex(dataIndex + 1);
// // // //       return isValidQuestion(q) ? q : null;
// // // //     }
// // // //     return null;
// // // //   }, [hasGenerator, hasData, generator, dataPool, dataIndex, historyLimit]);

// // // //   // Initialize first question
// // // //   useEffect(() => {
// // // //     if (configError) return;
// // // //     if (history.length > 0) return;
// // // //     const q = fetchQuestion();
// // // //     if (q) {
// // // //       setHistory([{ ...q, userAnswer: null, isCorrect: null }]);
// // // //       setCurrentIndex(0);
// // // //     }
// // // //   }, [configError, history.length, fetchQuestion]);

// // // //   const handleAnswer = (option) => {
// // // //     if (configError || isCompleted) return;
// // // //     const item = history[currentIndex];
// // // //     if (!item || item.userAnswer !== null) return;

// // // //     const isCorrect = String(option) === String(item.correct);
// // // //     const updated = { ...item, userAnswer: option, isCorrect };
// // // //     const newHistory = [...history];
// // // //     newHistory[currentIndex] = updated;
// // // //     setHistory(newHistory);
// // // //     setAttempts(attempts + 1);
// // // //     if (isCorrect) setScore(score + 1);
// // // //   };

// // // //   const handleNext = () => {
// // // //     if (configError) return;

// // // //     // Forward through history
// // // //     if (currentIndex < history.length - 1) {
// // // //       setCurrentIndex(currentIndex + 1);
// // // //       return;
// // // //     }

// // // //     const item = history[currentIndex];
// // // //     if (!item || item.userAnswer === null) return;

// // // //     // Data mode end-of-quiz
// // // //     if (hasData && dataIndex >= dataPool.length) {
// // // //       setIsCompleted(true);
// // // //       return;
// // // //     }

// // // //     const next = fetchQuestion();
// // // //     if (!next) {
// // // //       if (hasData) setIsCompleted(true);
// // // //       return;
// // // //     }

// // // //     const appended = [...history, { ...next, userAnswer: null, isCorrect: null }];
// // // //     let trimmed = appended;
// // // //     let newIdx = appended.length - 1;
// // // //     if (appended.length > historyLimit) {
// // // //       const overflow = appended.length - historyLimit;
// // // //       trimmed = appended.slice(overflow);
// // // //       newIdx = trimmed.length - 1;
// // // //     }
// // // //     setHistory(trimmed);
// // // //     setCurrentIndex(newIdx);
// // // //   };

// // // //   const handleBack = () => {
// // // //     if (configError) return;
// // // //     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
// // // //   };

// // // //   const handleResetClick = () => {
// // // //     if (attempts > 0) setShowConfirm(true);
// // // //     else doReset();
// // // //   };

// // // //   const doReset = () => {
// // // //     setHistory([]);
// // // //     setCurrentIndex(0);
// // // //     setScore(0);
// // // //     setAttempts(0);
// // // //     setIsCompleted(false);
// // // //     setShowConfirm(false);
// // // //     seenRef.current = new Set();
// // // //     if (hasData) {
// // // //       setDataPool(shuffleData ? shuffleArray(data) : [...data]);
// // // //       setDataIndex(0);
// // // //     }
// // // //   };

// // // //   // ---------- Render ----------

// // // //   if (configError) {
// // // //     return (
// // // //       <div style={S.card}>
// // // //         <div style={S.errorBox}>{configError}</div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (isCompleted) {
// // // //     const pct = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
// // // //     return (
// // // //       <div style={S.card}>
// // // //         <div style={S.completion}>
// // // //           <div style={S.completionTitle}>Quiz complete</div>
// // // //           <div style={S.completionScore}>{score} / {attempts} correct &middot; {pct}%</div>
// // // //           <div style={S.completionSub}>Start over to try a fresh shuffle.</div>
// // // //           <button style={S.nextBtn} onClick={doReset}>Start new quiz</button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const item = history[currentIndex];
// // // //   if (!item) {
// // // //     return (
// // // //       <div style={S.card}>
// // // //         <div style={S.feedback}>Loading...</div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const isReview    = currentIndex < history.length - 1;
// // // //   const isAnswered  = item.userAnswer !== null;
// // // //   const canGoBack   = allowBack && currentIndex > 0;
// // // //   const canGoFwd    = currentIndex < history.length - 1 || isAnswered;
// // // //   const optCount    = item.options ? item.options.length : 0;

// // // //   const optionsGridStyle = {
// // // //     ...S.optionsGrid,
// // // //     gridTemplateColumns: optCount === 2 ? '1fr 1fr' : 'repeat(2, 1fr)',
// // // //   };

// // // //   let nextLabel = 'Next question \u2192';
// // // //   if (isReview) nextLabel = 'Forward \u2192';
// // // //   if (hasData && !isReview && isAnswered && dataIndex >= dataPool.length) {
// // // //     nextLabel = 'See results';
// // // //   }

// // // //   const correctStr = String(item.correct);
// // // //   const userStr    = item.userAnswer !== null ? String(item.userAnswer) : null;

// // // //   return (
// // // //     <div style={S.card}>
// // // //       <div style={S.header}>
// // // //         <h2 style={S.title}>{title}</h2>
// // // //         {subtitle && <p style={S.subtitle}>{subtitle}</p>}
// // // //       </div>

// // // //       <div style={S.toolbar}>
// // // //         <div style={S.scorePill}>
// // // //           Score: {score} / {attempts}
// // // //           {hasData && (
// // // //             <span style={S.scoreMeta}>
// // // //               &middot; Question {Math.min(dataIndex, dataPool.length)} of {dataPool.length}
// // // //             </span>
// // // //           )}
// // // //         </div>
// // // //         <div style={S.controls}>
// // // //           {allowBack && (
// // // //             <button
// // // //               type="button"
// // // //               style={{ ...S.iconBtn, ...(canGoBack ? {} : S.iconBtnDisabled) }}
// // // //               onClick={handleBack}
// // // //               disabled={!canGoBack}
// // // //               title="Previous question"
// // // //             >
// // // //               &larr; Back
// // // //             </button>
// // // //           )}
// // // //           {allowReset && (
// // // //             <button
// // // //               type="button"
// // // //               style={S.iconBtn}
// // // //               onClick={handleResetClick}
// // // //               title="Reset quiz"
// // // //             >
// // // //               &#x21BA; Reset
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       <div style={S.question}>
// // // //         <span dangerouslySetInnerHTML={{ __html: item.question }} />
// // // //         {isReview && <span style={S.reviewBadge}>Reviewing</span>}
// // // //       </div>

// // // //       <div style={optionsGridStyle}>
// // // //         {item.options.map((opt, i) => {
// // // //           const optStr = String(opt);
// // // //           let style = { ...S.option };
// // // //           if (isAnswered) {
// // // //             if (optStr === correctStr) style = { ...style, ...S.optionCorrect };
// // // //             else if (optStr === userStr) style = { ...style, ...S.optionWrong };
// // // //             style = { ...style, cursor: 'default' };
// // // //           }
// // // //           return (
// // // //             <button
// // // //               key={i}
// // // //               type="button"
// // // //               style={style}
// // // //               onClick={() => handleAnswer(opt)}
// // // //               disabled={isAnswered}
// // // //               dangerouslySetInnerHTML={{ __html: optStr }}
// // // //             />
// // // //           );
// // // //         })}
// // // //       </div>

// // // //       <div
// // // //         style={{
// // // //           ...S.feedback,
// // // //           ...(isAnswered ? (item.isCorrect ? S.feedbackCorrect : S.feedbackWrong) : {}),
// // // //         }}
// // // //       >
// // // //         {isAnswered && item.isCorrect && <span>&check; Correct!</span>}
// // // //         {isAnswered && !item.isCorrect && (
// // // //           <span>
// // // //             &times; The answer is{' '}
// // // //             <span dangerouslySetInnerHTML={{ __html: correctStr }} />.
// // // //           </span>
// // // //         )}
// // // //       </div>

// // // //       <button
// // // //         type="button"
// // // //         style={{ ...S.nextBtn, ...(canGoFwd ? {} : S.nextBtnDisabled) }}
// // // //         onClick={handleNext}
// // // //         disabled={!canGoFwd}
// // // //       >
// // // //         {nextLabel}
// // // //       </button>

// // // //       {showConfirm && (
// // // //         <div style={S.confirm} onClick={() => setShowConfirm(false)}>
// // // //           <div style={S.confirmBox} onClick={(e) => e.stopPropagation()}>
// // // //             <div style={S.confirmTitle}>Reset quiz?</div>
// // // //             <div style={S.confirmText}>
// // // //               Your current score ({score} / {attempts}) and history will be cleared.
// // // //               This can&apos;t be undone.
// // // //             </div>
// // // //             <div style={S.confirmActions}>
// // // //               <button
// // // //                 type="button"
// // // //                 style={S.confirmCancel}
// // // //                 onClick={() => setShowConfirm(false)}
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //               <button type="button" style={S.confirmOk} onClick={doReset}>
// // // //                 Reset
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QuizWidget;


// // // import { useState, useEffect, useCallback, useRef } from 'react';

// // // // =========================================================
// // // //   QuizWidget
// // // //   Generic quiz UI with two modes (mutually exclusive):
// // // //     - generator: () => ({ question, options, correct })
// // // //     - data:      [{ question, options, correct }, ...]
// // // //
// // // //   Props:
// // // //     generator      function   on-the-spot question producer
// // // //     data           array      pre-authored question bank
// // // //     allowBack      bool       show back button (default true)
// // // //     allowReset     bool       show reset button (default true)
// // // //     shuffleData    bool       reshuffle data on init/reset (default true)
// // // //     historyLimit   number     max stored questions (default 50)
// // // //     title          string     section title
// // // //     subtitle       string     section subtitle
// // // // =========================================================

// // // const C = {
// // //   primary:        '#4f46e5',
// // //   primaryDark:    '#3730a3',
// // //   primaryLight:   '#eef2ff',
// // //   bg:             '#fafbff',
// // //   border:         '#e0e7ff',
// // //   borderSoft:     '#eef0f7',
// // //   text:           '#1e1b4b',
// // //   textMuted:      '#64748b',
// // //   success:        '#10b981',
// // //   successBg:      '#d1fae5',
// // //   successText:    '#065f46',
// // //   error:          '#ef4444',
// // //   errorBg:        '#fee2e2',
// // //   errorText:      '#991b1b',
// // //   warn:           '#f59e0b',
// // //   warnBg:         '#fef3c7',
// // //   warnText:       '#92400e',
// // //   shadowSm:       '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// // //   shadowMd:       '0 4px 12px rgba(15,23,42,0.08)',
// // // };

// // // const S = {
// // //   card: {
// // //     background: 'linear-gradient(135deg, #eef2ff 0%, #fdf4ff 100%)',
// // //     border: `1px solid ${C.border}`,
// // //     borderRadius: '22px',
// // //     padding: '32px',
// // //     boxShadow: C.shadowMd,
// // //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
// // //     color: C.text,
// // //   },
// // //   header: { marginBottom: '18px' },
// // //   title: {
// // //     fontFamily: "'Crimson Pro', Georgia, serif",
// // //     fontSize: '24px',
// // //     fontWeight: 700,
// // //     color: C.primaryDark,
// // //     margin: 0,
// // //     marginBottom: '4px',
// // //   },
// // //   subtitle: {
// // //     color: C.textMuted,
// // //     fontSize: '14px',
// // //     margin: 0,
// // //   },
// // //   toolbar: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     flexWrap: 'wrap',
// // //     gap: '12px',
// // //     marginBottom: '20px',
// // //   },
// // //   scorePill: {
// // //     display: 'inline-flex',
// // //     alignItems: 'center',
// // //     background: 'white',
// // //     padding: '7px 18px',
// // //     borderRadius: '9999px',
// // //     fontSize: '14px',
// // //     fontWeight: 700,
// // //     color: C.primaryDark,
// // //     boxShadow: C.shadowSm,
// // //   },
// // //   scoreMeta: {
// // //     marginLeft: '10px',
// // //     color: C.textMuted,
// // //     fontWeight: 500,
// // //     fontSize: '13px',
// // //   },
// // //   controls: { display: 'flex', gap: '8px' },
// // //   iconBtn: {
// // //     background: 'white',
// // //     border: `1px solid ${C.border}`,
// // //     color: C.text,
// // //     padding: '7px 14px',
// // //     borderRadius: '9999px',
// // //     fontSize: '13px',
// // //     fontWeight: 600,
// // //     cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //     display: 'inline-flex',
// // //     alignItems: 'center',
// // //     gap: '6px',
// // //     transition: 'all 0.15s',
// // //   },
// // //   iconBtnDisabled: {
// // //     opacity: 0.4,
// // //     cursor: 'not-allowed',
// // //   },
// // //   question: {
// // //     fontFamily: "'Crimson Pro', Georgia, serif",
// // //     fontSize: '25px',
// // //     fontWeight: 600,
// // //     textAlign: 'center',
// // //     marginBottom: '24px',
// // //     color: C.text,
// // //     minHeight: '34px',
// // //     lineHeight: 1.3,
// // //   },
// // //   reviewBadge: {
// // //     display: 'inline-block',
// // //     background: C.warnBg,
// // //     color: C.warnText,
// // //     padding: '4px 10px',
// // //     borderRadius: '9999px',
// // //     fontSize: '11px',
// // //     fontWeight: 700,
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '0.6px',
// // //     marginLeft: '10px',
// // //     verticalAlign: 'middle',
// // //   },
// // //   optionsGrid: {
// // //     display: 'grid',
// // //     gap: '12px',
// // //     marginBottom: '16px',
// // //   },
// // //   option: {
// // //     padding: '14px',
// // //     background: 'white',
// // //     border: `2px solid ${C.border}`,
// // //     borderRadius: '11px',
// // //     fontSize: '16px',
// // //     fontWeight: 700,
// // //     cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //     color: C.text,
// // //     transition: 'all 0.15s',
// // //     textAlign: 'center',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     minHeight: '52px',
// // //     lineHeight: 1.2,
// // //   },
// // //   optionCorrect: {
// // //     background: C.successBg,
// // //     borderColor: C.success,
// // //     color: C.successText,
// // //   },
// // //   optionWrong: {
// // //     background: C.errorBg,
// // //     borderColor: C.error,
// // //     color: C.errorText,
// // //   },
// // //   feedback: {
// // //     textAlign: 'center',
// // //     fontWeight: 600,
// // //     marginBottom: '16px',
// // //     minHeight: '22px',
// // //     fontSize: '15px',
// // //   },
// // //   feedbackCorrect: { color: C.success },
// // //   feedbackWrong:   { color: C.error },
// // //   nextBtn: {
// // //     display: 'block',
// // //     margin: '0 auto',
// // //     padding: '11px 32px',
// // //     background: C.primary,
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '11px',
// // //     fontWeight: 600,
// // //     cursor: 'pointer',
// // //     fontSize: '15px',
// // //     fontFamily: 'inherit',
// // //     transition: 'background 0.15s',
// // //   },
// // //   nextBtnDisabled: {
// // //     background: '#94a3b8',
// // //     cursor: 'not-allowed',
// // //   },
// // //   completion: {
// // //     textAlign: 'center',
// // //     padding: '20px 0 10px',
// // //   },
// // //   completionTitle: {
// // //     fontFamily: "'Crimson Pro', Georgia, serif",
// // //     fontSize: '32px',
// // //     fontWeight: 700,
// // //     color: C.primaryDark,
// // //     marginBottom: '8px',
// // //   },
// // //   completionScore: {
// // //     fontSize: '18px',
// // //     color: C.text,
// // //     marginBottom: '24px',
// // //     fontWeight: 600,
// // //   },
// // //   completionSub: {
// // //     fontSize: '14px',
// // //     color: C.textMuted,
// // //     marginBottom: '20px',
// // //   },
// // //   confirm: {
// // //     position: 'fixed',
// // //     top: 0, left: 0, right: 0, bottom: 0,
// // //     background: 'rgba(15,23,42,0.45)',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     zIndex: 1000,
// // //     padding: '20px',
// // //   },
// // //   confirmBox: {
// // //     background: 'white',
// // //     borderRadius: '14px',
// // //     padding: '24px',
// // //     maxWidth: '400px',
// // //     width: '100%',
// // //     boxShadow: '0 20px 50px rgba(15,23,42,0.25)',
// // //   },
// // //   confirmTitle: {
// // //     fontSize: '18px',
// // //     fontWeight: 700,
// // //     color: C.text,
// // //     marginBottom: '8px',
// // //   },
// // //   confirmText: {
// // //     fontSize: '14px',
// // //     color: C.textMuted,
// // //     marginBottom: '22px',
// // //     lineHeight: 1.55,
// // //   },
// // //   confirmActions: {
// // //     display: 'flex',
// // //     gap: '10px',
// // //     justifyContent: 'flex-end',
// // //   },
// // //   confirmCancel: {
// // //     padding: '9px 18px',
// // //     background: 'white',
// // //     color: C.text,
// // //     border: `1px solid ${C.border}`,
// // //     borderRadius: '9px',
// // //     fontWeight: 600,
// // //     fontSize: '14px',
// // //     cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //   },
// // //   confirmOk: {
// // //     padding: '9px 18px',
// // //     background: C.error,
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '9px',
// // //     fontWeight: 600,
// // //     fontSize: '14px',
// // //     cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //   },
// // //   errorBox: {
// // //     padding: '14px 16px',
// // //     background: C.errorBg,
// // //     border: `1px solid ${C.error}`,
// // //     borderRadius: '10px',
// // //     color: C.errorText,
// // //     fontSize: '14px',
// // //     fontWeight: 600,
// // //   },
// // // };

// // // function shuffleArray(arr) {
// // //   const a = [...arr];
// // //   for (let i = a.length - 1; i > 0; i--) {
// // //     const j = Math.floor(Math.random() * (i + 1));
// // //     [a[i], a[j]] = [a[j], a[i]];
// // //   }
// // //   return a;
// // // }

// // // function isValidQuestion(q) {
// // //   return q && typeof q === 'object'
// // //     && typeof q.question === 'string' && q.question.length > 0
// // //     && Array.isArray(q.options) && q.options.length >= 2
// // //     && q.correct !== undefined && q.correct !== null;
// // // }

// // // const QuizWidget = ({
// // //   generator,
// // //   data,
// // //   allowBack = true,
// // //   allowReset = true,
// // //   shuffleData = true,
// // //   historyLimit = 50,
// // //   title = 'Test yourself',
// // //   subtitle = '',
// // // }) => {
// // //   const hasGenerator = typeof generator === 'function';
// // //   const hasData = Array.isArray(data) && data.length > 0;

// // //   let configError = null;
// // //   if (!hasGenerator && !hasData) {
// // //     configError = 'QuizWidget requires either a generator function or a data array.';
// // //   } else if (hasGenerator && hasData) {
// // //     configError = 'QuizWidget accepts either generator or data, not both.';
// // //   }

// // //   const [dataPool, setDataPool] = useState(() =>
// // //     hasData ? (shuffleData ? shuffleArray(data) : [...data]) : []
// // //   );
// // //   const [dataIndex, setDataIndex] = useState(0);
// // //   const [history, setHistory] = useState([]);
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [score, setScore] = useState(0);
// // //   const [attempts, setAttempts] = useState(0);
// // //   const [isCompleted, setIsCompleted] = useState(false);
// // //   const [showConfirm, setShowConfirm] = useState(false);

// // //   const seenRef = useRef(new Set());

// // //   const fetchQuestion = useCallback(() => {
// // //     if (hasGenerator) {
// // //       let q = null;
// // //       for (let i = 0; i < 5; i++) {
// // //         const candidate = generator();
// // //         if (!isValidQuestion(candidate)) continue;
// // //         if (!seenRef.current.has(candidate.question)) {
// // //           q = candidate;
// // //           break;
// // //         }
// // //         q = candidate;
// // //       }
// // //       if (q && isValidQuestion(q)) {
// // //         seenRef.current.add(q.question);
// // //         if (seenRef.current.size > historyLimit) {
// // //           seenRef.current = new Set([...seenRef.current].slice(-historyLimit));
// // //         }
// // //         return q;
// // //       }
// // //       return null;
// // //     }
// // //     if (hasData) {
// // //       if (dataIndex >= dataPool.length) return null;
// // //       const q = dataPool[dataIndex];
// // //       setDataIndex(dataIndex + 1);
// // //       return isValidQuestion(q) ? q : null;
// // //     }
// // //     return null;
// // //   }, [hasGenerator, hasData, generator, dataPool, dataIndex, historyLimit]);

// // //   // Initialize first question
// // //   useEffect(() => {
// // //     if (configError) return;
// // //     if (history.length > 0) return;
// // //     const q = fetchQuestion();
// // //     if (q) {
// // //       setHistory([{ ...q, userAnswer: null, isCorrect: null }]);
// // //       setCurrentIndex(0);
// // //     }
// // //   }, [configError, history.length, fetchQuestion]);

// // //   const handleAnswer = (option) => {
// // //     if (configError || isCompleted) return;
// // //     const item = history[currentIndex];
// // //     if (!item || item.userAnswer !== null) return;

// // //     const isCorrect = String(option) === String(item.correct);
// // //     const updated = { ...item, userAnswer: option, isCorrect };
// // //     const newHistory = [...history];
// // //     newHistory[currentIndex] = updated;
// // //     setHistory(newHistory);
// // //     setAttempts(attempts + 1);
// // //     if (isCorrect) setScore(score + 1);
// // //   };

// // //   const handleNext = () => {
// // //     if (configError) return;

// // //     // Forward through history
// // //     if (currentIndex < history.length - 1) {
// // //       setCurrentIndex(currentIndex + 1);
// // //       return;
// // //     }

// // //     const item = history[currentIndex];
// // //     if (!item || item.userAnswer === null) return;

// // //     // Data mode end-of-quiz
// // //     if (hasData && dataIndex >= dataPool.length) {
// // //       setIsCompleted(true);
// // //       return;
// // //     }

// // //     const next = fetchQuestion();
// // //     if (!next) {
// // //       if (hasData) setIsCompleted(true);
// // //       return;
// // //     }

// // //     const appended = [...history, { ...next, userAnswer: null, isCorrect: null }];
// // //     let trimmed = appended;
// // //     let newIdx = appended.length - 1;
// // //     if (appended.length > historyLimit) {
// // //       const overflow = appended.length - historyLimit;
// // //       trimmed = appended.slice(overflow);
// // //       newIdx = trimmed.length - 1;
// // //     }
// // //     setHistory(trimmed);
// // //     setCurrentIndex(newIdx);
// // //   };

// // //   const handleBack = () => {
// // //     if (configError) return;
// // //     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
// // //   };

// // //   const handleResetClick = () => {
// // //     if (attempts > 0) setShowConfirm(true);
// // //     else doReset();
// // //   };

// // //   const doReset = () => {
// // //     setHistory([]);
// // //     setCurrentIndex(0);
// // //     setScore(0);
// // //     setAttempts(0);
// // //     setIsCompleted(false);
// // //     setShowConfirm(false);
// // //     seenRef.current = new Set();
// // //     if (hasData) {
// // //       setDataPool(shuffleData ? shuffleArray(data) : [...data]);
// // //       setDataIndex(0);
// // //     }
// // //   };

// // //   // ---------- Render ----------

// // //   if (configError) {
// // //     return (
// // //       <div style={S.card}>
// // //         <div style={S.errorBox}>{configError}</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (isCompleted) {
// // //     const pct = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
// // //     return (
// // //       <div style={S.card}>
// // //         <div style={S.completion}>
// // //           <div style={S.completionTitle}>Quiz complete</div>
// // //           <div style={S.completionScore}>{score} / {attempts} correct &middot; {pct}%</div>
// // //           <div style={S.completionSub}>Start over to try a fresh shuffle.</div>
// // //           <button style={S.nextBtn} onClick={doReset}>Start new quiz</button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const item = history[currentIndex];
// // //   if (!item) {
// // //     return (
// // //       <div style={S.card}>
// // //         <div style={S.feedback}>Loading...</div>
// // //       </div>
// // //     );
// // //   }

// // //   const isReview    = currentIndex < history.length - 1;
// // //   const isAnswered  = item.userAnswer !== null;
// // //   const canGoBack   = allowBack && currentIndex > 0;
// // //   const canGoFwd    = currentIndex < history.length - 1 || isAnswered;
// // //   const optCount    = item.options ? item.options.length : 0;

// // //   const optionsGridStyle = {
// // //     ...S.optionsGrid,
// // //     gridTemplateColumns: optCount === 2 ? '1fr 1fr' : 'repeat(2, 1fr)',
// // //   };

// // //   let nextLabel = 'Next question \u2192';
// // //   if (isReview) nextLabel = 'Forward \u2192';
// // //   if (hasData && !isReview && isAnswered && dataIndex >= dataPool.length) {
// // //     nextLabel = 'See results';
// // //   }

// // //   const correctStr = String(item.correct);
// // //   const userStr    = item.userAnswer !== null ? String(item.userAnswer) : null;

// // //   return (
// // //     <div style={S.card}>
// // //       <div style={S.header}>
// // //         <h2 style={S.title}>{title}</h2>
// // //         {subtitle && <p style={S.subtitle}>{subtitle}</p>}
// // //       </div>

// // //       <div style={S.toolbar}>
// // //         <div style={S.scorePill}>
// // //           Score: {score} / {attempts}
// // //           {hasData && (
// // //             <span style={S.scoreMeta}>
// // //               &middot; Question {Math.min(dataIndex, dataPool.length)} of {dataPool.length}
// // //             </span>
// // //           )}
// // //         </div>
// // //         <div style={S.controls}>
// // //           {allowBack && (
// // //             <button
// // //               type="button"
// // //               style={{ ...S.iconBtn, ...(canGoBack ? {} : S.iconBtnDisabled) }}
// // //               onClick={handleBack}
// // //               disabled={!canGoBack}
// // //               title="Previous question"
// // //             >
// // //               {'\u2190'} Back
// // //             </button>
// // //           )}
// // //           {allowReset && (
// // //             <button
// // //               type="button"
// // //               style={S.iconBtn}
// // //               onClick={handleResetClick}
// // //               title="Reset quiz"
// // //             >
// // //               {'\u21BA'} Reset
// // //             </button>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div style={S.question}>
// // //         <span dangerouslySetInnerHTML={{ __html: item.question }} />
// // //         {isReview && <span style={S.reviewBadge}>Reviewing</span>}
// // //       </div>

// // //       <div style={optionsGridStyle}>
// // //         {item.options.map((opt, i) => {
// // //           const optStr = String(opt);
// // //           let style = { ...S.option };
// // //           if (isAnswered) {
// // //             if (optStr === correctStr) style = { ...style, ...S.optionCorrect };
// // //             else if (optStr === userStr) style = { ...style, ...S.optionWrong };
// // //             style = { ...style, cursor: 'default' };
// // //           }
// // //           return (
// // //             <button
// // //               key={i}
// // //               type="button"
// // //               style={style}
// // //               onClick={() => handleAnswer(opt)}
// // //               disabled={isAnswered}
// // //               dangerouslySetInnerHTML={{ __html: optStr }}
// // //             />
// // //           );
// // //         })}
// // //       </div>

// // //       <div
// // //         style={{
// // //           ...S.feedback,
// // //           ...(isAnswered ? (item.isCorrect ? S.feedbackCorrect : S.feedbackWrong) : {}),
// // //         }}
// // //       >
// // //         {isAnswered && item.isCorrect && <span>{'\u2713'} Correct!</span>}
// // //         {isAnswered && !item.isCorrect && (
// // //           <span>
// // //             {'\u2717'} The answer is{' '}
// // //             <span dangerouslySetInnerHTML={{ __html: correctStr }} />.
// // //           </span>
// // //         )}
// // //       </div>

// // //       <button
// // //         type="button"
// // //         style={{ ...S.nextBtn, ...(canGoFwd ? {} : S.nextBtnDisabled) }}
// // //         onClick={handleNext}
// // //         disabled={!canGoFwd}
// // //       >
// // //         {nextLabel}
// // //       </button>

// // //       {showConfirm && (
// // //         <div style={S.confirm} onClick={() => setShowConfirm(false)}>
// // //           <div style={S.confirmBox} onClick={(e) => e.stopPropagation()}>
// // //             <div style={S.confirmTitle}>Reset quiz?</div>
// // //             <div style={S.confirmText}>
// // //               Your current score ({score} / {attempts}) and history will be cleared.
// // //               This can&apos;t be undone.
// // //             </div>
// // //             <div style={S.confirmActions}>
// // //               <button
// // //                 type="button"
// // //                 style={S.confirmCancel}
// // //                 onClick={() => setShowConfirm(false)}
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button type="button" style={S.confirmOk} onClick={doReset}>
// // //                 Reset
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default QuizWidget;


// // import { useState, useEffect, useCallback, useRef } from 'react';

// // // =========================================================
// // //   QuizWidget
// // //   Generic quiz UI with two modes (mutually exclusive):
// // //     - generator: () => ({ question, options, correct })
// // //     - data:      [{ question, options, correct }, ...]
// // //
// // //   Props:
// // //     generator      function   on-the-spot question producer
// // //     data           array      pre-authored question bank
// // //     allowBack      bool       show back button (default true)
// // //     allowReset     bool       show reset button (default true)
// // //     shuffleData    bool       reshuffle data on init/reset (default true)
// // //     historyLimit   number     max stored questions (default 50)
// // //     title          string     section title
// // //     subtitle       string     section subtitle
// // // =========================================================

// // const C = {
// //   primary:        '#4f46e5',
// //   primaryDark:    '#3730a3',
// //   primaryLight:   '#eef2ff',
// //   bg:             '#fafbff',
// //   border:         '#e0e7ff',
// //   borderSoft:     '#eef0f7',
// //   text:           '#1e1b4b',
// //   textMuted:      '#64748b',
// //   success:        '#10b981',
// //   successBg:      '#d1fae5',
// //   successText:    '#065f46',
// //   error:          '#ef4444',
// //   errorBg:        '#fee2e2',
// //   errorText:      '#991b1b',
// //   warn:           '#f59e0b',
// //   warnBg:         '#fef3c7',
// //   warnText:       '#92400e',
// //   shadowSm:       '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// //   shadowMd:       '0 4px 12px rgba(15,23,42,0.08)',
// // };

// // const S = {
// //   card: {
// //     background: 'linear-gradient(135deg, #eef2ff 0%, #fdf4ff 100%)',
// //     border: `1px solid ${C.border}`,
// //     borderRadius: '22px',
// //     padding: '32px',
// //     boxShadow: C.shadowMd,
// //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
// //     color: C.text,
// //   },
// //   header: { marginBottom: '18px' },
// //   title: {
// //     fontFamily: "'Crimson Pro', Georgia, serif",
// //     fontSize: '24px',
// //     fontWeight: 700,
// //     color: C.primaryDark,
// //     margin: 0,
// //     marginBottom: '4px',
// //   },
// //   subtitle: {
// //     color: C.textMuted,
// //     fontSize: '14px',
// //     margin: 0,
// //   },
// //   toolbar: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     flexWrap: 'wrap',
// //     gap: '12px',
// //     marginBottom: '20px',
// //   },
// //   scorePill: {
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     background: 'white',
// //     padding: '7px 18px',
// //     borderRadius: '9999px',
// //     fontSize: '14px',
// //     fontWeight: 700,
// //     color: C.primaryDark,
// //     boxShadow: C.shadowSm,
// //   },
// //   scoreMeta: {
// //     marginLeft: '10px',
// //     color: C.textMuted,
// //     fontWeight: 500,
// //     fontSize: '13px',
// //   },
// //   controls: { display: 'flex', gap: '8px' },
// //   iconBtn: {
// //     background: 'white',
// //     border: `1px solid ${C.border}`,
// //     color: C.text,
// //     padding: '7px 14px',
// //     borderRadius: '9999px',
// //     fontSize: '13px',
// //     fontWeight: 600,
// //     cursor: 'pointer',
// //     fontFamily: 'inherit',
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     gap: '6px',
// //     transition: 'all 0.15s',
// //     lineHeight: 1.2,
// //     minHeight: '32px',
// //   },
// //   iconBtnDisabled: {
// //     opacity: 0.4,
// //     cursor: 'not-allowed',
// //   },
// //   question: {
// //     fontFamily: "'Crimson Pro', Georgia, serif",
// //     fontSize: '25px',
// //     fontWeight: 600,
// //     textAlign: 'center',
// //     marginBottom: '24px',
// //     color: C.text,
// //     minHeight: '34px',
// //     lineHeight: 1.3,
// //   },
// //   reviewBadge: {
// //     display: 'inline-block',
// //     background: C.warnBg,
// //     color: C.warnText,
// //     padding: '4px 10px',
// //     borderRadius: '9999px',
// //     fontSize: '11px',
// //     fontWeight: 700,
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.6px',
// //     marginLeft: '10px',
// //     verticalAlign: 'middle',
// //   },
// //   optionsGrid: {
// //     display: 'grid',
// //     gap: '12px',
// //     marginBottom: '16px',
// //   },
// //   option: {
// //     padding: '14px',
// //     background: 'white',
// //     border: `2px solid ${C.border}`,
// //     borderRadius: '11px',
// //     fontSize: '16px',
// //     fontWeight: 700,
// //     cursor: 'pointer',
// //     fontFamily: 'inherit',
// //     color: C.text,
// //     transition: 'all 0.15s',
// //     textAlign: 'center',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     minHeight: '52px',
// //     lineHeight: 1.2,
// //   },
// //   optionCorrect: {
// //     background: C.successBg,
// //     borderColor: C.success,
// //     color: C.successText,
// //   },
// //   optionWrong: {
// //     background: C.errorBg,
// //     borderColor: C.error,
// //     color: C.errorText,
// //   },
// //   feedback: {
// //     textAlign: 'center',
// //     fontWeight: 600,
// //     marginBottom: '16px',
// //     minHeight: '22px',
// //     fontSize: '15px',
// //   },
// //   feedbackCorrect: { color: C.success },
// //   feedbackWrong:   { color: C.error },
// //   nextBtn: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     margin: '0 auto',
// //     width: 'fit-content',
// //     padding: '11px 32px',
// //     background: C.primary,
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '11px',
// //     fontWeight: 600,
// //     cursor: 'pointer',
// //     fontSize: '15px',
// //     fontFamily: 'inherit',
// //     transition: 'background 0.15s',
// //     lineHeight: 1.2,
// //     minHeight: '44px',
// //   },
// //   nextBtnDisabled: {
// //     background: '#94a3b8',
// //     cursor: 'not-allowed',
// //   },
// //   completion: {
// //     textAlign: 'center',
// //     padding: '20px 0 10px',
// //   },
// //   completionTitle: {
// //     fontFamily: "'Crimson Pro', Georgia, serif",
// //     fontSize: '32px',
// //     fontWeight: 700,
// //     color: C.primaryDark,
// //     marginBottom: '8px',
// //   },
// //   completionScore: {
// //     fontSize: '18px',
// //     color: C.text,
// //     marginBottom: '24px',
// //     fontWeight: 600,
// //   },
// //   completionSub: {
// //     fontSize: '14px',
// //     color: C.textMuted,
// //     marginBottom: '20px',
// //   },
// //   confirm: {
// //     position: 'fixed',
// //     top: 0, left: 0, right: 0, bottom: 0,
// //     background: 'rgba(15,23,42,0.45)',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     zIndex: 1000,
// //     padding: '20px',
// //   },
// //   confirmBox: {
// //     background: 'white',
// //     borderRadius: '14px',
// //     padding: '24px',
// //     maxWidth: '400px',
// //     width: '100%',
// //     boxShadow: '0 20px 50px rgba(15,23,42,0.25)',
// //   },
// //   confirmTitle: {
// //     fontSize: '18px',
// //     fontWeight: 700,
// //     color: C.text,
// //     marginBottom: '8px',
// //   },
// //   confirmText: {
// //     fontSize: '14px',
// //     color: C.textMuted,
// //     marginBottom: '22px',
// //     lineHeight: 1.55,
// //   },
// //   confirmActions: {
// //     display: 'flex',
// //     gap: '10px',
// //     justifyContent: 'flex-end',
// //   },
// //   confirmCancel: {
// //     padding: '9px 18px',
// //     background: 'white',
// //     color: C.text,
// //     border: `1px solid ${C.border}`,
// //     borderRadius: '9px',
// //     fontWeight: 600,
// //     fontSize: '14px',
// //     cursor: 'pointer',
// //     fontFamily: 'inherit',
// //   },
// //   confirmOk: {
// //     padding: '9px 18px',
// //     background: C.error,
// //     color: 'white',
// //     border: 'none',
// //     borderRadius: '9px',
// //     fontWeight: 600,
// //     fontSize: '14px',
// //     cursor: 'pointer',
// //     fontFamily: 'inherit',
// //   },
// //   errorBox: {
// //     padding: '14px 16px',
// //     background: C.errorBg,
// //     border: `1px solid ${C.error}`,
// //     borderRadius: '10px',
// //     color: C.errorText,
// //     fontSize: '14px',
// //     fontWeight: 600,
// //   },
// // };

// // function shuffleArray(arr) {
// //   const a = [...arr];
// //   for (let i = a.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     [a[i], a[j]] = [a[j], a[i]];
// //   }
// //   return a;
// // }

// // function isValidQuestion(q) {
// //   return q && typeof q === 'object'
// //     && typeof q.question === 'string' && q.question.length > 0
// //     && Array.isArray(q.options) && q.options.length >= 2
// //     && q.correct !== undefined && q.correct !== null;
// // }

// // const QuizWidget = ({
// //   generator,
// //   data,
// //   allowBack = true,
// //   allowReset = true,
// //   shuffleData = true,
// //   historyLimit = 50,
// //   title = 'Test yourself',
// //   subtitle = '',
// // }) => {
// //   const hasGenerator = typeof generator === 'function';
// //   const hasData = Array.isArray(data) && data.length > 0;

// //   let configError = null;
// //   if (!hasGenerator && !hasData) {
// //     configError = 'QuizWidget requires either a generator function or a data array.';
// //   } else if (hasGenerator && hasData) {
// //     configError = 'QuizWidget accepts either generator or data, not both.';
// //   }

// //   const [dataPool, setDataPool] = useState(() =>
// //     hasData ? (shuffleData ? shuffleArray(data) : [...data]) : []
// //   );
// //   const [dataIndex, setDataIndex] = useState(0);
// //   const [history, setHistory] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [attempts, setAttempts] = useState(0);
// //   const [isCompleted, setIsCompleted] = useState(false);
// //   const [showConfirm, setShowConfirm] = useState(false);

// //   const seenRef = useRef(new Set());

// //   const fetchQuestion = useCallback(() => {
// //     if (hasGenerator) {
// //       let q = null;
// //       for (let i = 0; i < 5; i++) {
// //         const candidate = generator();
// //         if (!isValidQuestion(candidate)) continue;
// //         if (!seenRef.current.has(candidate.question)) {
// //           q = candidate;
// //           break;
// //         }
// //         q = candidate;
// //       }
// //       if (q && isValidQuestion(q)) {
// //         seenRef.current.add(q.question);
// //         if (seenRef.current.size > historyLimit) {
// //           seenRef.current = new Set([...seenRef.current].slice(-historyLimit));
// //         }
// //         return q;
// //       }
// //       return null;
// //     }
// //     if (hasData) {
// //       if (dataIndex >= dataPool.length) return null;
// //       const q = dataPool[dataIndex];
// //       setDataIndex(dataIndex + 1);
// //       return isValidQuestion(q) ? q : null;
// //     }
// //     return null;
// //   }, [hasGenerator, hasData, generator, dataPool, dataIndex, historyLimit]);

// //   // Initialize first question
// //   useEffect(() => {
// //     if (configError) return;
// //     if (history.length > 0) return;
// //     const q = fetchQuestion();
// //     if (q) {
// //       setHistory([{ ...q, userAnswer: null, isCorrect: null }]);
// //       setCurrentIndex(0);
// //     }
// //   }, [configError, history.length, fetchQuestion]);

// //   const handleAnswer = (option) => {
// //     if (configError || isCompleted) return;
// //     const item = history[currentIndex];
// //     if (!item || item.userAnswer !== null) return;

// //     const isCorrect = String(option) === String(item.correct);
// //     const updated = { ...item, userAnswer: option, isCorrect };
// //     const newHistory = [...history];
// //     newHistory[currentIndex] = updated;
// //     setHistory(newHistory);
// //     setAttempts(attempts + 1);
// //     if (isCorrect) setScore(score + 1);
// //   };

// //   const handleNext = () => {
// //     if (configError) return;

// //     // Forward through history
// //     if (currentIndex < history.length - 1) {
// //       setCurrentIndex(currentIndex + 1);
// //       return;
// //     }

// //     const item = history[currentIndex];
// //     if (!item || item.userAnswer === null) return;

// //     // Data mode end-of-quiz
// //     if (hasData && dataIndex >= dataPool.length) {
// //       setIsCompleted(true);
// //       return;
// //     }

// //     const next = fetchQuestion();
// //     if (!next) {
// //       if (hasData) setIsCompleted(true);
// //       return;
// //     }

// //     const appended = [...history, { ...next, userAnswer: null, isCorrect: null }];
// //     let trimmed = appended;
// //     let newIdx = appended.length - 1;
// //     if (appended.length > historyLimit) {
// //       const overflow = appended.length - historyLimit;
// //       trimmed = appended.slice(overflow);
// //       newIdx = trimmed.length - 1;
// //     }
// //     setHistory(trimmed);
// //     setCurrentIndex(newIdx);
// //   };

// //   const handleBack = () => {
// //     if (configError) return;
// //     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
// //   };

// //   const handleResetClick = () => {
// //     if (attempts > 0) setShowConfirm(true);
// //     else doReset();
// //   };

// //   const doReset = () => {
// //     setHistory([]);
// //     setCurrentIndex(0);
// //     setScore(0);
// //     setAttempts(0);
// //     setIsCompleted(false);
// //     setShowConfirm(false);
// //     seenRef.current = new Set();
// //     if (hasData) {
// //       setDataPool(shuffleData ? shuffleArray(data) : [...data]);
// //       setDataIndex(0);
// //     }
// //   };

// //   // ---------- Render ----------

// //   if (configError) {
// //     return (
// //       <div style={S.card}>
// //         <div style={S.errorBox}>{configError}</div>
// //       </div>
// //     );
// //   }

// //   if (isCompleted) {
// //     const pct = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
// //     return (
// //       <div style={S.card}>
// //         <div style={S.completion}>
// //           <div style={S.completionTitle}>Quiz complete</div>
// //           <div style={S.completionScore}>{score} / {attempts} correct &middot; {pct}%</div>
// //           <div style={S.completionSub}>Start over to try a fresh shuffle.</div>
// //           <button style={S.nextBtn} onClick={doReset}>Start new quiz</button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const item = history[currentIndex];
// //   if (!item) {
// //     return (
// //       <div style={S.card}>
// //         <div style={S.feedback}>Loading...</div>
// //       </div>
// //     );
// //   }

// //   const isReview    = currentIndex < history.length - 1;
// //   const isAnswered  = item.userAnswer !== null;
// //   const canGoBack   = allowBack && currentIndex > 0;
// //   const canGoFwd    = currentIndex < history.length - 1 || isAnswered;
// //   const optCount    = item.options ? item.options.length : 0;

// //   const optionsGridStyle = {
// //     ...S.optionsGrid,
// //     gridTemplateColumns: optCount === 2 ? '1fr 1fr' : 'repeat(2, 1fr)',
// //   };

// //   let nextLabel = 'Next question \u2192';
// //   if (isReview) nextLabel = 'Forward \u2192';
// //   if (hasData && !isReview && isAnswered && dataIndex >= dataPool.length) {
// //     nextLabel = 'See results';
// //   }

// //   const correctStr = String(item.correct);
// //   const userStr    = item.userAnswer !== null ? String(item.userAnswer) : null;

// //   return (
// //     <div style={S.card}>
// //       <div style={S.header}>
// //         <h2 style={S.title}>{title}</h2>
// //         {subtitle && <p style={S.subtitle}>{subtitle}</p>}
// //       </div>

// //       <div style={S.toolbar}>
// //         <div style={S.scorePill}>
// //           Score: {score} / {attempts}
// //           {hasData && (
// //             <span style={S.scoreMeta}>
// //               &middot; Question {Math.min(dataIndex, dataPool.length)} of {dataPool.length}
// //             </span>
// //           )}
// //         </div>
// //         <div style={S.controls}>
// //           {allowBack && (
// //             <button
// //               type="button"
// //               style={{ ...S.iconBtn, ...(canGoBack ? {} : S.iconBtnDisabled) }}
// //               onClick={handleBack}
// //               disabled={!canGoBack}
// //               title="Previous question"
// //             >
// //               {'\u2190'} Back
// //             </button>
// //           )}
// //           {allowReset && (
// //             <button
// //               type="button"
// //               style={S.iconBtn}
// //               onClick={handleResetClick}
// //               title="Reset quiz"
// //             >
// //               {'\u21BA'} Reset
// //             </button>
// //           )}
// //         </div>
// //       </div>

// //       <div style={S.question}>
// //         <span dangerouslySetInnerHTML={{ __html: item.question }} />
// //         {isReview && <span style={S.reviewBadge}>Reviewing</span>}
// //       </div>

// //       <div style={optionsGridStyle}>
// //         {item.options.map((opt, i) => {
// //           const optStr = String(opt);
// //           let style = { ...S.option };
// //           if (isAnswered) {
// //             if (optStr === correctStr) style = { ...style, ...S.optionCorrect };
// //             else if (optStr === userStr) style = { ...style, ...S.optionWrong };
// //             style = { ...style, cursor: 'default' };
// //           }
// //           return (
// //             <button
// //               key={i}
// //               type="button"
// //               style={style}
// //               onClick={() => handleAnswer(opt)}
// //               disabled={isAnswered}
// //               dangerouslySetInnerHTML={{ __html: optStr }}
// //             />
// //           );
// //         })}
// //       </div>

// //       <div
// //         style={{
// //           ...S.feedback,
// //           ...(isAnswered ? (item.isCorrect ? S.feedbackCorrect : S.feedbackWrong) : {}),
// //         }}
// //       >
// //         {isAnswered && item.isCorrect && <span>{'\u2713'} Correct!</span>}
// //         {isAnswered && !item.isCorrect && (
// //           <span>
// //             {'\u2717'} The answer is{' '}
// //             <span dangerouslySetInnerHTML={{ __html: correctStr }} />.
// //           </span>
// //         )}
// //       </div>

// //       <button
// //         type="button"
// //         style={{ ...S.nextBtn, ...(canGoFwd ? {} : S.nextBtnDisabled) }}
// //         onClick={handleNext}
// //         disabled={!canGoFwd}
// //       >
// //         {nextLabel}
// //       </button>

// //       {showConfirm && (
// //         <div style={S.confirm} onClick={() => setShowConfirm(false)}>
// //           <div style={S.confirmBox} onClick={(e) => e.stopPropagation()}>
// //             <div style={S.confirmTitle}>Reset quiz?</div>
// //             <div style={S.confirmText}>
// //               Your current score ({score} / {attempts}) and history will be cleared.
// //               This can&apos;t be undone.
// //             </div>
// //             <div style={S.confirmActions}>
// //               <button
// //                 type="button"
// //                 style={S.confirmCancel}
// //                 onClick={() => setShowConfirm(false)}
// //               >
// //                 Cancel
// //               </button>
// //               <button type="button" style={S.confirmOk} onClick={doReset}>
// //                 Reset
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default QuizWidget;



// import { useState, useEffect, useCallback, useRef } from 'react';
// import { processContent } from '../../../utils/contentProcessor';

// // =========================================================
// //   QuizWidget
// //   Generic quiz UI with two modes (mutually exclusive):
// //     - generator: () => ({ question, options, correct })
// //     - data:      [{ question, options, correct }, ...]
// //
// //   Question, options, and correct answer strings are passed
// //   through processContent, so they may contain LaTeX
// //   ($...$, $$...$$), markdown bold, links, etc.
// //
// //   Props:
// //     generator      function   on-the-spot question producer
// //     data           array      pre-authored question bank
// //     allowBack      bool       show back button (default true)
// //     allowReset     bool       show reset button (default true)
// //     shuffleData    bool       reshuffle data on init/reset (default true)
// //     historyLimit   number     max stored questions (default 50)
// //     title          string     section title
// //     subtitle       string     section subtitle
// // =========================================================

// const C = {
//   primary:        '#4f46e5',
//   primaryDark:    '#3730a3',
//   primaryLight:   '#eef2ff',
//   bg:             '#fafbff',
//   border:         '#e0e7ff',
//   borderSoft:     '#eef0f7',
//   text:           '#1e1b4b',
//   textMuted:      '#64748b',
//   success:        '#10b981',
//   successBg:      '#d1fae5',
//   successText:    '#065f46',
//   error:          '#ef4444',
//   errorBg:        '#fee2e2',
//   errorText:      '#991b1b',
//   warn:           '#f59e0b',
//   warnBg:         '#fef3c7',
//   warnText:       '#92400e',
//   shadowSm:       '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
//   shadowMd:       '0 4px 12px rgba(15,23,42,0.08)',
// };

// const S = {
//   card: {
//     background: 'linear-gradient(135deg, #eef2ff 0%, #fdf4ff 100%)',
//     border: `1px solid ${C.border}`,
//     borderRadius: '22px',
//     padding: '32px',
//     boxShadow: C.shadowMd,
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//     color: C.text,
//   },
//   header: { marginBottom: '18px' },
//   title: {
//     fontFamily: "'Crimson Pro', Georgia, serif",
//     fontSize: '24px',
//     fontWeight: 700,
//     color: C.primaryDark,
//     margin: 0,
//     marginBottom: '4px',
//   },
//   subtitle: {
//     color: C.textMuted,
//     fontSize: '14px',
//     margin: 0,
//   },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: '12px',
//     marginBottom: '20px',
//   },
//   scorePill: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     background: 'white',
//     padding: '7px 18px',
//     borderRadius: '9999px',
//     fontSize: '14px',
//     fontWeight: 700,
//     color: C.primaryDark,
//     boxShadow: C.shadowSm,
//   },
//   scoreMeta: {
//     marginLeft: '10px',
//     color: C.textMuted,
//     fontWeight: 500,
//     fontSize: '13px',
//   },
//   controls: { display: 'flex', gap: '8px' },
//   iconBtn: {
//     background: 'white',
//     border: `1px solid ${C.border}`,
//     color: C.text,
//     padding: '7px 14px',
//     borderRadius: '9999px',
//     fontSize: '13px',
//     fontWeight: 600,
//     cursor: 'pointer',
//     fontFamily: 'inherit',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '6px',
//     transition: 'all 0.15s',
//     lineHeight: 1.2,
//     minHeight: '32px',
//   },
//   iconBtnDisabled: {
//     opacity: 0.4,
//     cursor: 'not-allowed',
//   },
//   question: {
//     fontFamily: "'Crimson Pro', Georgia, serif",
//     fontSize: '25px',
//     fontWeight: 600,
//     textAlign: 'center',
//     marginBottom: '24px',
//     color: C.text,
//     minHeight: '34px',
//     lineHeight: 1.3,
//   },
//   reviewBadge: {
//     display: 'inline-block',
//     background: C.warnBg,
//     color: C.warnText,
//     padding: '4px 10px',
//     borderRadius: '9999px',
//     fontSize: '11px',
//     fontWeight: 700,
//     textTransform: 'uppercase',
//     letterSpacing: '0.6px',
//     marginLeft: '10px',
//     verticalAlign: 'middle',
//   },
//   optionsGrid: {
//     display: 'grid',
//     gap: '12px',
//     marginBottom: '16px',
//   },
//   option: {
//     padding: '14px',
//     background: 'white',
//     border: `2px solid ${C.border}`,
//     borderRadius: '11px',
//     fontSize: '16px',
//     fontWeight: 700,
//     cursor: 'pointer',
//     fontFamily: 'inherit',
//     color: C.text,
//     transition: 'all 0.15s',
//     textAlign: 'center',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '52px',
//     lineHeight: 1.2,
//   },
//   optionCorrect: {
//     background: C.successBg,
//     borderColor: C.success,
//     color: C.successText,
//   },
//   optionWrong: {
//     background: C.errorBg,
//     borderColor: C.error,
//     color: C.errorText,
//   },
//   feedback: {
//     textAlign: 'center',
//     fontWeight: 600,
//     marginBottom: '16px',
//     minHeight: '22px',
//     fontSize: '15px',
//   },
//   feedbackCorrect: { color: C.success },
//   feedbackWrong:   { color: C.error },
//   nextBtn: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '0 auto',
//     width: 'fit-content',
//     padding: '11px 32px',
//     background: C.primary,
//     color: 'white',
//     border: 'none',
//     borderRadius: '11px',
//     fontWeight: 600,
//     cursor: 'pointer',
//     fontSize: '15px',
//     fontFamily: 'inherit',
//     transition: 'background 0.15s',
//     lineHeight: 1.2,
//     minHeight: '44px',
//   },
//   nextBtnDisabled: {
//     background: '#94a3b8',
//     cursor: 'not-allowed',
//   },
//   completion: {
//     textAlign: 'center',
//     padding: '20px 0 10px',
//   },
//   completionTitle: {
//     fontFamily: "'Crimson Pro', Georgia, serif",
//     fontSize: '32px',
//     fontWeight: 700,
//     color: C.primaryDark,
//     marginBottom: '8px',
//   },
//   completionScore: {
//     fontSize: '18px',
//     color: C.text,
//     marginBottom: '24px',
//     fontWeight: 600,
//   },
//   completionSub: {
//     fontSize: '14px',
//     color: C.textMuted,
//     marginBottom: '20px',
//   },
//   confirm: {
//     position: 'fixed',
//     top: 0, left: 0, right: 0, bottom: 0,
//     background: 'rgba(15,23,42,0.45)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//     padding: '20px',
//   },
//   confirmBox: {
//     background: 'white',
//     borderRadius: '14px',
//     padding: '24px',
//     maxWidth: '400px',
//     width: '100%',
//     boxShadow: '0 20px 50px rgba(15,23,42,0.25)',
//   },
//   confirmTitle: {
//     fontSize: '18px',
//     fontWeight: 700,
//     color: C.text,
//     marginBottom: '8px',
//   },
//   confirmText: {
//     fontSize: '14px',
//     color: C.textMuted,
//     marginBottom: '22px',
//     lineHeight: 1.55,
//   },
//   confirmActions: {
//     display: 'flex',
//     gap: '10px',
//     justifyContent: 'flex-end',
//   },
//   confirmCancel: {
//     padding: '9px 18px',
//     background: 'white',
//     color: C.text,
//     border: `1px solid ${C.border}`,
//     borderRadius: '9px',
//     fontWeight: 600,
//     fontSize: '14px',
//     cursor: 'pointer',
//     fontFamily: 'inherit',
//   },
//   confirmOk: {
//     padding: '9px 18px',
//     background: C.error,
//     color: 'white',
//     border: 'none',
//     borderRadius: '9px',
//     fontWeight: 600,
//     fontSize: '14px',
//     cursor: 'pointer',
//     fontFamily: 'inherit',
//   },
//   errorBox: {
//     padding: '14px 16px',
//     background: C.errorBg,
//     border: `1px solid ${C.error}`,
//     borderRadius: '10px',
//     color: C.errorText,
//     fontSize: '14px',
//     fontWeight: 600,
//   },
// };

// function shuffleArray(arr) {
//   const a = [...arr];
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }

// function isValidQuestion(q) {
//   return q && typeof q === 'object'
//     && typeof q.question === 'string' && q.question.length > 0
//     && Array.isArray(q.options) && q.options.length >= 2
//     && q.correct !== undefined && q.correct !== null;
// }

// const QuizWidget = ({
//   generator,
//   data,
//   allowBack = true,
//   allowReset = true,
//   shuffleData = true,
//   historyLimit = 50,
//   title = 'Test yourself',
//   subtitle = '',
// }) => {
//   const hasGenerator = typeof generator === 'function';
//   const hasData = Array.isArray(data) && data.length > 0;

//   let configError = null;
//   if (!hasGenerator && !hasData) {
//     configError = 'QuizWidget requires either a generator function or a data array.';
//   } else if (hasGenerator && hasData) {
//     configError = 'QuizWidget accepts either generator or data, not both.';
//   }

//   const [dataPool, setDataPool] = useState(() =>
//     hasData ? (shuffleData ? shuffleArray(data) : [...data]) : []
//   );
//   const [dataIndex, setDataIndex] = useState(0);
//   const [history, setHistory] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [attempts, setAttempts] = useState(0);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const seenRef = useRef(new Set());

//   const fetchQuestion = useCallback(() => {
//     if (hasGenerator) {
//       let q = null;
//       for (let i = 0; i < 5; i++) {
//         const candidate = generator();
//         if (!isValidQuestion(candidate)) continue;
//         if (!seenRef.current.has(candidate.question)) {
//           q = candidate;
//           break;
//         }
//         q = candidate;
//       }
//       if (q && isValidQuestion(q)) {
//         seenRef.current.add(q.question);
//         if (seenRef.current.size > historyLimit) {
//           seenRef.current = new Set([...seenRef.current].slice(-historyLimit));
//         }
//         return q;
//       }
//       return null;
//     }
//     if (hasData) {
//       if (dataIndex >= dataPool.length) return null;
//       const q = dataPool[dataIndex];
//       setDataIndex(dataIndex + 1);
//       return isValidQuestion(q) ? q : null;
//     }
//     return null;
//   }, [hasGenerator, hasData, generator, dataPool, dataIndex, historyLimit]);

//   // Initialize first question
//   useEffect(() => {
//     if (configError) return;
//     if (history.length > 0) return;
//     const q = fetchQuestion();
//     if (q) {
//       setHistory([{ ...q, userAnswer: null, isCorrect: null }]);
//       setCurrentIndex(0);
//     }
//   }, [configError, history.length, fetchQuestion]);

//   const handleAnswer = (option) => {
//     if (configError || isCompleted) return;
//     const item = history[currentIndex];
//     if (!item || item.userAnswer !== null) return;

//     const isCorrect = String(option) === String(item.correct);
//     const updated = { ...item, userAnswer: option, isCorrect };
//     const newHistory = [...history];
//     newHistory[currentIndex] = updated;
//     setHistory(newHistory);
//     setAttempts(attempts + 1);
//     if (isCorrect) setScore(score + 1);
//   };

//   const handleNext = () => {
//     if (configError) return;

//     // Forward through history
//     if (currentIndex < history.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       return;
//     }

//     const item = history[currentIndex];
//     if (!item || item.userAnswer === null) return;

//     // Data mode end-of-quiz
//     if (hasData && dataIndex >= dataPool.length) {
//       setIsCompleted(true);
//       return;
//     }

//     const next = fetchQuestion();
//     if (!next) {
//       if (hasData) setIsCompleted(true);
//       return;
//     }

//     const appended = [...history, { ...next, userAnswer: null, isCorrect: null }];
//     let trimmed = appended;
//     let newIdx = appended.length - 1;
//     if (appended.length > historyLimit) {
//       const overflow = appended.length - historyLimit;
//       trimmed = appended.slice(overflow);
//       newIdx = trimmed.length - 1;
//     }
//     setHistory(trimmed);
//     setCurrentIndex(newIdx);
//   };

//   const handleBack = () => {
//     if (configError) return;
//     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//   };

//   const handleResetClick = () => {
//     if (attempts > 0) setShowConfirm(true);
//     else doReset();
//   };

//   const doReset = () => {
//     setHistory([]);
//     setCurrentIndex(0);
//     setScore(0);
//     setAttempts(0);
//     setIsCompleted(false);
//     setShowConfirm(false);
//     seenRef.current = new Set();
//     if (hasData) {
//       setDataPool(shuffleData ? shuffleArray(data) : [...data]);
//       setDataIndex(0);
//     }
//   };

//   // ---------- Render ----------

//   if (configError) {
//     return (
//       <div style={S.card}>
//         <div style={S.errorBox}>{configError}</div>
//       </div>
//     );
//   }

//   if (isCompleted) {
//     const pct = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
//     return (
//       <div style={S.card}>
//         <div style={S.completion}>
//           <div style={S.completionTitle}>Quiz complete</div>
//           <div style={S.completionScore}>{score} / {attempts} correct &middot; {pct}%</div>
//           <div style={S.completionSub}>Start over to try a fresh shuffle.</div>
//           <button style={S.nextBtn} onClick={doReset}>Start new quiz</button>
//         </div>
//       </div>
//     );
//   }

//   const item = history[currentIndex];
//   if (!item) {
//     return (
//       <div style={S.card}>
//         <div style={S.feedback}>Loading...</div>
//       </div>
//     );
//   }

//   const isReview    = currentIndex < history.length - 1;
//   const isAnswered  = item.userAnswer !== null;
//   const canGoBack   = allowBack && currentIndex > 0;
//   const canGoFwd    = currentIndex < history.length - 1 || isAnswered;
//   const optCount    = item.options ? item.options.length : 0;

//   const optionsGridStyle = {
//     ...S.optionsGrid,
//     gridTemplateColumns: optCount === 2 ? '1fr 1fr' : 'repeat(2, 1fr)',
//   };

//   let nextLabel = 'Next question \u2192';
//   if (isReview) nextLabel = 'Forward \u2192';
//   if (hasData && !isReview && isAnswered && dataIndex >= dataPool.length) {
//     nextLabel = 'See results';
//   }

//   const correctStr = String(item.correct);
//   const userStr    = item.userAnswer !== null ? String(item.userAnswer) : null;

//   return (
//     <div style={S.card}>
//       <div style={S.header}>
//         <h2 style={S.title}>{title}</h2>
//         {subtitle && <p style={S.subtitle}>{subtitle}</p>}
//       </div>

//       <div style={S.toolbar}>
//         <div style={S.scorePill}>
//           Score: {score} / {attempts}
//           {hasData && (
//             <span style={S.scoreMeta}>
//               &middot; Question {Math.min(dataIndex, dataPool.length)} of {dataPool.length}
//             </span>
//           )}
//         </div>
//         <div style={S.controls}>
//           {allowBack && (
//             <button
//               type="button"
//               style={{ ...S.iconBtn, ...(canGoBack ? {} : S.iconBtnDisabled) }}
//               onClick={handleBack}
//               disabled={!canGoBack}
//               title="Previous question"
//             >
//               {'\u2190'} Back
//             </button>
//           )}
//           {allowReset && (
//             <button
//               type="button"
//               style={S.iconBtn}
//               onClick={handleResetClick}
//               title="Reset quiz"
//             >
//               {'\u21BA'} Reset
//             </button>
//           )}
//         </div>
//       </div>

//       <div style={S.question}>
//         <span>{processContent(item.question)}</span>
//         {isReview && <span style={S.reviewBadge}>Reviewing</span>}
//       </div>

//       <div style={optionsGridStyle}>
//         {item.options.map((opt, i) => {
//           const optStr = String(opt);
//           let style = { ...S.option };
//           if (isAnswered) {
//             if (optStr === correctStr) style = { ...style, ...S.optionCorrect };
//             else if (optStr === userStr) style = { ...style, ...S.optionWrong };
//             style = { ...style, cursor: 'default' };
//           }
//           return (
//             <button
//               key={i}
//               type="button"
//               style={style}
//               onClick={() => handleAnswer(opt)}
//               disabled={isAnswered}
//             >
//               {processContent(optStr)}
//             </button>
//           );
//         })}
//       </div>

//       <div
//         style={{
//           ...S.feedback,
//           ...(isAnswered ? (item.isCorrect ? S.feedbackCorrect : S.feedbackWrong) : {}),
//         }}
//       >
//         {isAnswered && item.isCorrect && <span>{'\u2713'} Correct!</span>}
//         {isAnswered && !item.isCorrect && (
//           <span>
//             {'\u2717'} The answer is{' '}
//             <span>{processContent(correctStr)}</span>.
//           </span>
//         )}
//       </div>

//       <button
//         type="button"
//         style={{ ...S.nextBtn, ...(canGoFwd ? {} : S.nextBtnDisabled) }}
//         onClick={handleNext}
//         disabled={!canGoFwd}
//       >
//         {nextLabel}
//       </button>

//       {showConfirm && (
//         <div style={S.confirm} onClick={() => setShowConfirm(false)}>
//           <div style={S.confirmBox} onClick={(e) => e.stopPropagation()}>
//             <div style={S.confirmTitle}>Reset quiz?</div>
//             <div style={S.confirmText}>
//               Your current score ({score} / {attempts}) and history will be cleared.
//               This can&apos;t be undone.
//             </div>
//             <div style={S.confirmActions}>
//               <button
//                 type="button"
//                 style={S.confirmCancel}
//                 onClick={() => setShowConfirm(false)}
//               >
//                 Cancel
//               </button>
//               <button type="button" style={S.confirmOk} onClick={doReset}>
//                 Reset
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizWidget;


import { useState, useEffect, useCallback, useRef } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// =========================================================
//   QuizWidget
//   Generic quiz UI. Question source (any combination):
//     - data:      [{ question, options, correct }, ...]   pre-authored bank
//     - generator: () => ({ question, options, correct })   on-the-spot producer
//
//   When BOTH are passed, the bank is drained first
//   (curated questions), then the generator takes over for
//   unlimited follow-up. Quiz only "completes" if data is
//   the sole source and it has been exhausted.
//
//   Question, options, and correct answer strings are passed
//   through processContent, so they may contain LaTeX
//   ($...$, $$...$$), markdown bold, links, etc.
//
//   Props:
//     generator      function   on-the-spot question producer
//     data           array      pre-authored question bank
//     allowBack      bool       show back button (default true)
//     allowReset     bool       show reset button (default true)
//     shuffleData    bool       reshuffle data on init/reset (default true)
//     historyLimit   number     max stored questions (default 50)
//     title          string     section title
//     subtitle       string     section subtitle
// =========================================================

const C = {
  primary:        '#4f46e5',
  primaryDark:    '#3730a3',
  primaryLight:   '#eef2ff',
  bg:             '#fafbff',
  border:         '#e0e7ff',
  borderSoft:     '#eef0f7',
  text:           '#1e1b4b',
  textMuted:      '#64748b',
  success:        '#10b981',
  successBg:      '#d1fae5',
  successText:    '#065f46',
  error:          '#ef4444',
  errorBg:        '#fee2e2',
  errorText:      '#991b1b',
  warn:           '#f59e0b',
  warnBg:         '#fef3c7',
  warnText:       '#92400e',
  shadowSm:       '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
  shadowMd:       '0 4px 12px rgba(15,23,42,0.08)',
};

const S = {
  card: {
    background: 'linear-gradient(135deg, #eef2ff 0%, #fdf4ff 100%)',
    border: `1px solid ${C.border}`,
    borderRadius: '22px',
    padding: '32px',
    boxShadow: C.shadowMd,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: C.text,
  },
  header: { marginBottom: '18px' },
  title: {
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: '24px',
    fontWeight: 700,
    color: C.primaryDark,
    margin: 0,
    marginBottom: '4px',
  },
  subtitle: {
    color: C.textMuted,
    fontSize: '14px',
    margin: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '20px',
  },
  scorePill: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'white',
    padding: '7px 18px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: 700,
    color: C.primaryDark,
    boxShadow: C.shadowSm,
  },
  scoreMeta: {
    marginLeft: '10px',
    color: C.textMuted,
    fontWeight: 500,
    fontSize: '13px',
  },
  controls: { display: 'flex', gap: '8px' },
  iconBtn: {
    background: 'white',
    border: `1px solid ${C.border}`,
    color: C.text,
    padding: '7px 14px',
    borderRadius: '9999px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    transition: 'all 0.15s',
    lineHeight: 1.2,
    minHeight: '32px',
  },
  iconBtnDisabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  question: {
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: '25px',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '24px',
    color: C.text,
    minHeight: '34px',
    lineHeight: 1.3,
  },
  reviewBadge: {
    display: 'inline-block',
    background: C.warnBg,
    color: C.warnText,
    padding: '4px 10px',
    borderRadius: '9999px',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    marginLeft: '10px',
    verticalAlign: 'middle',
  },
  optionsGrid: {
    display: 'grid',
    gap: '12px',
    marginBottom: '16px',
  },
  option: {
    padding: '14px',
    background: 'white',
    border: `2px solid ${C.border}`,
    borderRadius: '11px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'inherit',
    color: C.text,
    transition: 'all 0.15s',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '52px',
    lineHeight: 1.2,
  },
  optionCorrect: {
    background: C.successBg,
    borderColor: C.success,
    color: C.successText,
  },
  optionWrong: {
    background: C.errorBg,
    borderColor: C.error,
    color: C.errorText,
  },
  feedback: {
    textAlign: 'center',
    fontWeight: 600,
    marginBottom: '16px',
    minHeight: '22px',
    fontSize: '15px',
  },
  feedbackCorrect: { color: C.success },
  feedbackWrong:   { color: C.error },
  nextBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: 'fit-content',
    padding: '11px 32px',
    background: C.primary,
    color: 'white',
    border: 'none',
    borderRadius: '11px',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '15px',
    fontFamily: 'inherit',
    transition: 'background 0.15s',
    lineHeight: 1.2,
    minHeight: '44px',
  },
  nextBtnDisabled: {
    background: '#94a3b8',
    cursor: 'not-allowed',
  },
  completion: {
    textAlign: 'center',
    padding: '20px 0 10px',
  },
  completionTitle: {
    fontFamily: "'Crimson Pro', Georgia, serif",
    fontSize: '32px',
    fontWeight: 700,
    color: C.primaryDark,
    marginBottom: '8px',
  },
  completionScore: {
    fontSize: '18px',
    color: C.text,
    marginBottom: '24px',
    fontWeight: 600,
  },
  completionSub: {
    fontSize: '14px',
    color: C.textMuted,
    marginBottom: '20px',
  },
  confirm: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(15,23,42,0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  confirmBox: {
    background: 'white',
    borderRadius: '14px',
    padding: '24px',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 20px 50px rgba(15,23,42,0.25)',
  },
  confirmTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: C.text,
    marginBottom: '8px',
  },
  confirmText: {
    fontSize: '14px',
    color: C.textMuted,
    marginBottom: '22px',
    lineHeight: 1.55,
  },
  confirmActions: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  confirmCancel: {
    padding: '9px 18px',
    background: 'white',
    color: C.text,
    border: `1px solid ${C.border}`,
    borderRadius: '9px',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  confirmOk: {
    padding: '9px 18px',
    background: C.error,
    color: 'white',
    border: 'none',
    borderRadius: '9px',
    fontWeight: 600,
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  errorBox: {
    padding: '14px 16px',
    background: C.errorBg,
    border: `1px solid ${C.error}`,
    borderRadius: '10px',
    color: C.errorText,
    fontSize: '14px',
    fontWeight: 600,
  },
};

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isValidQuestion(q) {
  return q && typeof q === 'object'
    && typeof q.question === 'string' && q.question.length > 0
    && Array.isArray(q.options) && q.options.length >= 2
    && q.correct !== undefined && q.correct !== null;
}

const QuizWidget = ({
  generator,
  data,
  allowBack = true,
  allowReset = true,
  shuffleData = true,
  historyLimit = 50,
  title = 'Test yourself',
  subtitle = '',
}) => {
  const hasGenerator = typeof generator === 'function';
  const hasData      = Array.isArray(data) && data.length > 0;

  const configError = (!hasGenerator && !hasData)
    ? 'QuizWidget requires a generator function or a data array (or both).'
    : null;

  const [dataPool, setDataPool] = useState(() =>
    hasData ? (shuffleData ? shuffleArray(data) : [...data]) : []
  );
  const [dataIndex, setDataIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const seenRef = useRef(new Set());

  const fetchQuestion = useCallback(() => {
    // 1) Drain the data bank first.
    if (hasData && dataIndex < dataPool.length) {
      const q = dataPool[dataIndex];
      setDataIndex(dataIndex + 1);
      return isValidQuestion(q) ? q : null;
    }
    // 2) Fall back to the generator for unlimited follow-up.
    if (hasGenerator) {
      let q = null;
      for (let i = 0; i < 5; i++) {
        const candidate = generator();
        if (!isValidQuestion(candidate)) continue;
        if (!seenRef.current.has(candidate.question)) {
          q = candidate;
          break;
        }
        q = candidate;
      }
      if (q && isValidQuestion(q)) {
        seenRef.current.add(q.question);
        if (seenRef.current.size > historyLimit) {
          seenRef.current = new Set([...seenRef.current].slice(-historyLimit));
        }
        return q;
      }
      return null;
    }
    return null;
  }, [hasGenerator, hasData, generator, dataPool, dataIndex, historyLimit]);

  // Initialize first question
  useEffect(() => {
    if (configError) return;
    if (history.length > 0) return;
    const q = fetchQuestion();
    if (q) {
      setHistory([{ ...q, userAnswer: null, isCorrect: null }]);
      setCurrentIndex(0);
    }
  }, [configError, history.length, fetchQuestion]);

  const handleAnswer = (option) => {
    if (configError || isCompleted) return;
    const item = history[currentIndex];
    if (!item || item.userAnswer !== null) return;

    const isCorrect = String(option) === String(item.correct);
    const updated = { ...item, userAnswer: option, isCorrect };
    const newHistory = [...history];
    newHistory[currentIndex] = updated;
    setHistory(newHistory);
    setAttempts(attempts + 1);
    if (isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    if (configError) return;

    // Forward through history
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }

    const item = history[currentIndex];
    if (!item || item.userAnswer === null) return;

    // Pure-data end-of-quiz: only complete when there is NO generator fallback.
    if (hasData && !hasGenerator && dataIndex >= dataPool.length) {
      setIsCompleted(true);
      return;
    }

    const next = fetchQuestion();
    if (!next) {
      // Safety net: data exhausted and generator returned nothing.
      if (hasData && !hasGenerator) setIsCompleted(true);
      return;
    }

    const appended = [...history, { ...next, userAnswer: null, isCorrect: null }];
    let trimmed = appended;
    let newIdx = appended.length - 1;
    if (appended.length > historyLimit) {
      const overflow = appended.length - historyLimit;
      trimmed = appended.slice(overflow);
      newIdx = trimmed.length - 1;
    }
    setHistory(trimmed);
    setCurrentIndex(newIdx);
  };

  const handleBack = () => {
    if (configError) return;
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleResetClick = () => {
    if (attempts > 0) setShowConfirm(true);
    else doReset();
  };

  const doReset = () => {
    setHistory([]);
    setCurrentIndex(0);
    setScore(0);
    setAttempts(0);
    setIsCompleted(false);
    setShowConfirm(false);
    seenRef.current = new Set();
    if (hasData) {
      setDataPool(shuffleData ? shuffleArray(data) : [...data]);
      setDataIndex(0);
    }
  };

  // ---------- Render ----------

  if (configError) {
    return (
      <div style={S.card}>
        <div style={S.errorBox}>{configError}</div>
      </div>
    );
  }

  if (isCompleted) {
    const pct = attempts > 0 ? Math.round((score / attempts) * 100) : 0;
    return (
      <div style={S.card}>
        <div style={S.completion}>
          <div style={S.completionTitle}>Quiz complete</div>
          <div style={S.completionScore}>{score} / {attempts} correct &middot; {pct}%</div>
          <div style={S.completionSub}>Start over to try a fresh shuffle.</div>
          <button style={S.nextBtn} onClick={doReset}>Start new quiz</button>
        </div>
      </div>
    );
  }

  const item = history[currentIndex];
  if (!item) {
    return (
      <div style={S.card}>
        <div style={S.feedback}>Loading...</div>
      </div>
    );
  }

  const isReview    = currentIndex < history.length - 1;
  const isAnswered  = item.userAnswer !== null;
  const canGoBack   = allowBack && currentIndex > 0;
  const canGoFwd    = currentIndex < history.length - 1 || isAnswered;
  const optCount    = item.options ? item.options.length : 0;

  // Counter shows progress through the data bank only.
  // Once the bank is drained, generator phase has no counter.
  const inDataPhase = hasData && dataIndex <= dataPool.length && dataIndex > 0
                      && (dataIndex < dataPool.length || (!hasGenerator));

  const optionsGridStyle = {
    ...S.optionsGrid,
    gridTemplateColumns: optCount === 2 ? '1fr 1fr' : 'repeat(2, 1fr)',
  };

  let nextLabel = 'Next question \u2192';
  if (isReview) nextLabel = 'Forward \u2192';
  if (hasData && !hasGenerator && !isReview && isAnswered
      && dataIndex >= dataPool.length) {
    nextLabel = 'See results';
  }

  const correctStr = String(item.correct);
  const userStr    = item.userAnswer !== null ? String(item.userAnswer) : null;

  return (
    <div style={S.card}>
      <div style={S.header}>
        <h2 style={S.title}>{title}</h2>
        {subtitle && <p style={S.subtitle}>{subtitle}</p>}
      </div>

      <div style={S.toolbar}>
        <div style={S.scorePill}>
          Score: {score} / {attempts}
          {inDataPhase && (
            <span style={S.scoreMeta}>
              &middot; Question {Math.min(dataIndex, dataPool.length)} of {dataPool.length}
            </span>
          )}
        </div>
        <div style={S.controls}>
          {allowBack && (
            <button
              type="button"
              style={{ ...S.iconBtn, ...(canGoBack ? {} : S.iconBtnDisabled) }}
              onClick={handleBack}
              disabled={!canGoBack}
              title="Previous question"
            >
              {'\u2190'} Back
            </button>
          )}
          {allowReset && (
            <button
              type="button"
              style={S.iconBtn}
              onClick={handleResetClick}
              title="Reset quiz"
            >
              {'\u21BA'} Reset
            </button>
          )}
        </div>
      </div>

      <div style={S.question}>
        <span>{processContent(item.question)}</span>
        {isReview && <span style={S.reviewBadge}>Reviewing</span>}
      </div>

      <div style={optionsGridStyle}>
        {item.options.map((opt, i) => {
          const optStr = String(opt);
          let style = { ...S.option };
          if (isAnswered) {
            if (optStr === correctStr) style = { ...style, ...S.optionCorrect };
            else if (optStr === userStr) style = { ...style, ...S.optionWrong };
            style = { ...style, cursor: 'default' };
          }
          return (
            <button
              key={i}
              type="button"
              style={style}
              onClick={() => handleAnswer(opt)}
              disabled={isAnswered}
            >
              {processContent(optStr)}
            </button>
          );
        })}
      </div>

      <div
        style={{
          ...S.feedback,
          ...(isAnswered ? (item.isCorrect ? S.feedbackCorrect : S.feedbackWrong) : {}),
        }}
      >
        {isAnswered && item.isCorrect && <span>{'\u2713'} Correct!</span>}
        {isAnswered && !item.isCorrect && (
          <span>
            {'\u2717'} The answer is{' '}
            <span>{processContent(correctStr)}</span>.
          </span>
        )}
      </div>

      <button
        type="button"
        style={{ ...S.nextBtn, ...(canGoFwd ? {} : S.nextBtnDisabled) }}
        onClick={handleNext}
        disabled={!canGoFwd}
      >
        {nextLabel}
      </button>

      {showConfirm && (
        <div style={S.confirm} onClick={() => setShowConfirm(false)}>
          <div style={S.confirmBox} onClick={(e) => e.stopPropagation()}>
            <div style={S.confirmTitle}>Reset quiz?</div>
            <div style={S.confirmText}>
              Your current score ({score} / {attempts}) and history will be cleared.
              This can&apos;t be undone.
            </div>
            <div style={S.confirmActions}>
              <button
                type="button"
                style={S.confirmCancel}
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button type="button" style={S.confirmOk} onClick={doReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizWidget;