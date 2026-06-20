// // // 'use client';
// // // import { useState, useEffect, useRef, useMemo } from 'react';
// // // import { processContent } from '../../../utils/contentProcessor';

// // // // =========================================================
// // // //   DerivativesPuzzle
// // // //   - Mesh layout, drag/drop matching
// // // //   - Auto-scroll during drag
// // // //   - Help "?" + "see why" → tip popover (fixed: no overflow clip)
// // // //   - Slot raises z-index when its popover is open
// // // // =========================================================

// // // const C = {
// // //   primary:      '#4f46e5',
// // //   primaryDark:  '#3730a3',
// // //   primaryLight: '#eef2ff',
// // //   bg:           '#fafbff',
// // //   border:       '#e0e7ff',
// // //   borderSoft:   '#eef0f7',
// // //   textMuted:    '#64748b',
// // //   success:      '#10b981',
// // //   successBg:    '#d1fae5',
// // //   successText:  '#065f46',
// // //   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// // // };

// // // const PUZZLE_CSS = `
// // // .cdp-puzzle-board.solved {
// // //   box-shadow: 0 0 0 3px ${C.primary}, 0 0 30px 8px rgba(79,70,229,0.35);
// // // }
// // // .cdp-puzzle-btn:hover { background: ${C.primaryDark} !important; }

// // // /* When a slot's popover is open, raise it above neighbors so the popover paints on top */
// // // .cdp-puzzle-slot.has-popover { z-index: 50 !important; }

// // // .cdp-puzzle-slot.drag-over {
// // //   border-color: ${C.primary} !important;
// // //   background: ${C.primaryLight} !important;
// // // }
// // // .cdp-puzzle-tile:hover { background: ${C.primaryDark}; }
// // // .cdp-puzzle-tile:active { cursor: grabbing; }
// // // .cdp-puzzle-tile.dragging { opacity: 0.3; }
// // // .cdp-puzzle-tile.correct {
// // //   background: ${C.successBg} !important;
// // //   color: ${C.successText} !important;
// // //   border-color: ${C.success} !important;
// // //   cursor: default !important;
// // // }
// // // .cdp-puzzle-tile.correct:hover { background: ${C.successBg} !important; }
// // // .cdp-puzzle-tile.just-placed { animation: cdpTilePulse 0.7s ease; }
// // // @keyframes cdpTilePulse {
// // //   0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
// // //   40%  { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(16,185,129,0.45); }
// // //   100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
// // // }

// // // .cdp-tile-strip {
// // //   flex: 0 0 auto;
// // //   background: ${C.success};
// // //   color: white;
// // //   padding: 2px 10px;
// // //   border-radius: 4px;
// // //   font-size: 10px;
// // //   font-weight: 700;
// // //   letter-spacing: 0.4px;
// // //   text-transform: uppercase;
// // //   white-space: nowrap;
// // //   display: inline-flex;
// // //   align-items: center;
// // //   gap: 5px;
// // //   line-height: 1.4;
// // // }
// // // .cdp-see-why {
// // //   color: white;
// // //   text-decoration: underline;
// // //   background: none;
// // //   border: none;
// // //   padding: 0;
// // //   cursor: pointer;
// // //   font-family: inherit;
// // //   font-size: 10px;
// // //   font-weight: 700;
// // //   text-transform: uppercase;
// // //   letter-spacing: 0.4px;
// // // }
// // // .cdp-see-why:hover { color: rgba(255,255,255,0.85); }

// // // .cdp-help-btn {
// // //   position: absolute;
// // //   top: 4px;
// // //   left: 5px;
// // //   width: 18px;
// // //   height: 18px;
// // //   border-radius: 50%;
// // //   border: 1.5px solid white;
// // //   background: rgba(255,255,255,0.18);
// // //   color: white;
// // //   font-size: 11px;
// // //   font-weight: 700;
// // //   font-family: inherit;
// // //   cursor: pointer;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   padding: 0;
// // //   line-height: 1;
// // //   z-index: 4;
// // //   transition: background 0.15s;
// // // }
// // // .cdp-help-btn:hover { background: rgba(255,255,255,0.42); }

// // // .cdp-popover {
// // //   position: absolute;
// // //   bottom: calc(100% + 8px); left: 50%;
// // //   transform: translateX(-50%);
// // //   background: #0f172a; color: #f1f5f9;
// // //   border: 1px solid #334155;
// // //   border-radius: 8px;
// // //   padding: 12px 28px 12px 14px;
// // //   width: 260px;
// // //   font-size: 13px; line-height: 1.5;
// // //   font-family: 'Inter', sans-serif;
// // //   text-align: left;
// // //   box-shadow: 0 12px 30px rgba(0,0,0,0.35);
// // //   z-index: 100;
// // //   white-space: normal;
// // // }
// // // .cdp-popover-close {
// // //   position: absolute; top: 4px; right: 6px;
// // //   background: transparent; border: none;
// // //   color: #94a3b8; cursor: pointer;
// // //   font-size: 16px; padding: 0; line-height: 1;
// // //   font-family: inherit;
// // // }
// // // .cdp-popover a {
// // //   display: inline-block; margin-top: 8px;
// // //   color: #93c5fd; text-decoration: none; font-weight: 600;
// // // }
// // // .cdp-popover a:hover { text-decoration: underline; }

// // // .cdp-back-to-ref:hover { text-decoration: underline; }

// // // @media (max-width: 900px) {
// // //   .cdp-puzzle-board { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
// // // }
// // // @media (max-width: 600px) {
// // //   .cdp-puzzle-board { grid-template-columns: 1fr !important; }
// // // }
// // // `;

// // // const S = {
// // //   puzzleControls: {
// // //     display: 'flex', gap: '12px', marginBottom: '14px',
// // //     alignItems: 'center', flexWrap: 'wrap',
// // //   },
// // //   puzzleBtn: {
// // //     padding: '9px 18px', background: C.primary, color: 'white',
// // //     border: 'none', borderRadius: '9px',
// // //     fontWeight: 600, fontSize: '14px', cursor: 'pointer',
// // //     fontFamily: 'inherit',
// // //   },
// // //   puzzleProgress: { color: C.textMuted, fontSize: '14px', fontWeight: 500 },
// // //   puzzleBoard: {
// // //     background: 'white', border: `1px solid ${C.borderSoft}`,
// // //     borderRadius: '14px', padding: '14px',
// // //     marginBottom: '24px', boxShadow: C.shadowSm,
// // //     position: 'relative', transition: 'box-shadow 0.4s ease',
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
// // //     gap: '10px',
// // //   },
// // //   puzzlePair: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1.4fr)',
// // //     gap: '8px',
// // //     alignItems: 'stretch',
// // //   },
// // //   puzzleLhs: {
// // //     background: C.primaryLight, color: C.primaryDark,
// // //     borderRadius: '7px', padding: '6px 8px',
// // //     fontSize: '13px', fontWeight: 600,
// // //     display: 'flex', alignItems: 'center',
// // //     justifyContent: 'center',
// // //     overflow: 'hidden',
// // //   },
// // //   puzzleEquals: {
// // //     color: C.primary, fontWeight: 700, fontSize: '18px',
// // //     display: 'flex', alignItems: 'center', padding: '0 2px',
// // //   },
// // //   puzzleSlot: {
// // //     background: C.bg, border: `2px dashed ${C.border}`,
// // //     borderRadius: '7px', padding: '4px',
// // //     minHeight: '68px',
// // //     display: 'flex', alignItems: 'stretch',
// // //     transition: 'border-color 0.15s, background 0.15s',
// // //     position: 'relative',
// // //   },
// // //   puzzleTileBase: {
// // //     position: 'relative', background: C.primary, color: 'white',
// // //     border: '2px solid transparent', borderRadius: '6px',
// // //     padding: '8px 12px', fontSize: '16px',
// // //     cursor: 'grab', width: '100%',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center', justifyContent: 'center',
// // //     gap: '5px',
// // //     userSelect: 'none',
// // //     // NO overflow:hidden — popover must escape the tile to be visible
// // //     transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
// // //   },
// // //   backToRef: {
// // //     color: C.primary, textDecoration: 'none', fontWeight: 600,
// // //     marginLeft: '8px', cursor: 'pointer',
// // //   },
// // // };

// // // const DerivativesPuzzle = ({ derivatives, onExit }) => {
// // //   const [slots, setSlots] = useState(() => derivatives.map((d) => d.id));
// // //   const [prevCorrect, setPrevCorrect] = useState(() => new Set(derivatives.map((d) => d.id)));
// // //   const [justPlacedId, setJustPlacedId] = useState(null);
// // //   const [draggedFromSlot, setDraggedFromSlot] = useState(null);
// // //   const [dragOverSlot, setDragOverSlot] = useState(null);
// // //   const [openTipId, setOpenTipId] = useState(null);
// // //   const justPlacedTimer = useRef(null);

// // //   const isSolved = useMemo(
// // //     () => slots.every((tileId, slotIdx) => tileId === slotIdx),
// // //     [slots]
// // //   );
// // //   const correctCount = useMemo(
// // //     () => slots.filter((tileId, slotIdx) => tileId === slotIdx).length,
// // //     [slots]
// // //   );

// // //   const shufflePuzzle = () => {
// // //     const ids = derivatives.map((d) => d.id);
// // //     for (let i = ids.length - 1; i > 0; i--) {
// // //       const j = Math.floor(Math.random() * (i + 1));
// // //       [ids[i], ids[j]] = [ids[j], ids[i]];
// // //     }
// // //     setSlots(ids);
// // //     setOpenTipId(null);
// // //     setJustPlacedId(null);
// // //     setDraggedFromSlot(null);
// // //     setDragOverSlot(null);
// // //     const initialCorrect = new Set();
// // //     ids.forEach((tid, sidx) => { if (tid === sidx) initialCorrect.add(tid); });
// // //     setPrevCorrect(initialCorrect);
// // //   };

// // //   // Auto-shuffle on mount if everything is in place
// // //   useEffect(() => {
// // //     if (slots.every((t, i) => t === i)) shufflePuzzle();
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, []);

// // //   // Outside-click + Escape close the popover
// // //   useEffect(() => {
// // //     if (openTipId === null) return;
// // //     const onMouse = (e) => {
// // //       if (!e.target.closest('.cdp-popover') &&
// // //           !e.target.closest('.cdp-help-btn') &&
// // //           !e.target.closest('.cdp-see-why')) {
// // //         setOpenTipId(null);
// // //       }
// // //     };
// // //     const onKey = (e) => { if (e.key === 'Escape') setOpenTipId(null); };
// // //     document.addEventListener('mousedown', onMouse);
// // //     document.addEventListener('keydown', onKey);
// // //     return () => {
// // //       document.removeEventListener('mousedown', onMouse);
// // //       document.removeEventListener('keydown', onKey);
// // //     };
// // //   }, [openTipId]);

// // //   // Cleanup pulse timer
// // //   useEffect(() => () => {
// // //     if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// // //   }, []);

// // //   // Auto-scroll during drag
// // //   useEffect(() => {
// // //     if (draggedFromSlot === null) return;
// // //     const SCROLL_ZONE = 90;
// // //     const MAX_SPEED = 14;
// // //     let velocity = 0;
// // //     let rafId = null;
// // //     const update = (y) => {
// // //       const vh = window.innerHeight;
// // //       if (y < SCROLL_ZONE) {
// // //         const i = (SCROLL_ZONE - y) / SCROLL_ZONE;
// // //         velocity = -MAX_SPEED * Math.min(1, Math.max(0, i));
// // //       } else if (y > vh - SCROLL_ZONE) {
// // //         const i = (y - (vh - SCROLL_ZONE)) / SCROLL_ZONE;
// // //         velocity = MAX_SPEED * Math.min(1, Math.max(0, i));
// // //       } else {
// // //         velocity = 0;
// // //       }
// // //     };
// // //     const animate = () => {
// // //       if (velocity !== 0) window.scrollBy(0, velocity);
// // //       rafId = requestAnimationFrame(animate);
// // //     };
// // //     const onDoc = (e) => update(e.clientY);
// // //     document.addEventListener('dragover', onDoc);
// // //     rafId = requestAnimationFrame(animate);
// // //     return () => {
// // //       document.removeEventListener('dragover', onDoc);
// // //       if (rafId) cancelAnimationFrame(rafId);
// // //       velocity = 0;
// // //     };
// // //   }, [draggedFromSlot]);

// // //   const handleDragStart = (e, slotIdx) => {
// // //     if (e.target.closest && e.target.closest('.cdp-help-btn, .cdp-see-why')) {
// // //       e.preventDefault();
// // //       return;
// // //     }
// // //     if (slots[slotIdx] === slotIdx) return;
// // //     setDraggedFromSlot(slotIdx);
// // //     e.dataTransfer.effectAllowed = 'move';
// // //     setOpenTipId(null);
// // //   };
// // //   const handleDragEnd = () => {
// // //     setDraggedFromSlot(null);
// // //     setDragOverSlot(null);
// // //   };
// // //   const handleDragOver = (e, slotIdx) => {
// // //     if (draggedFromSlot === null) return;
// // //     if (slots[slotIdx] === slotIdx) return;
// // //     e.preventDefault();
// // //     e.dataTransfer.dropEffect = 'move';
// // //     if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
// // //   };
// // //   const handleDragLeave = (slotIdx) => {
// // //     if (dragOverSlot === slotIdx) setDragOverSlot(null);
// // //   };
// // //   const handleDrop = (e, slotIdx) => {
// // //     e.preventDefault();
// // //     setDragOverSlot(null);
// // //     if (draggedFromSlot === null) return;
// // //     if (slotIdx === draggedFromSlot) return;
// // //     if (slots[slotIdx] === slotIdx) return;
// // //     const newSlots = [...slots];
// // //     const tmp = newSlots[draggedFromSlot];
// // //     newSlots[draggedFromSlot] = newSlots[slotIdx];
// // //     newSlots[slotIdx] = tmp;
// // //     const movedTileId = newSlots[slotIdx];
// // //     const becameCorrect = (movedTileId === slotIdx) && !prevCorrect.has(movedTileId);
// // //     const newCorrect = new Set();
// // //     newSlots.forEach((tid, sidx) => { if (tid === sidx) newCorrect.add(tid); });
// // //     setSlots(newSlots);
// // //     setPrevCorrect(newCorrect);
// // //     setDraggedFromSlot(null);
// // //     if (becameCorrect) {
// // //       setJustPlacedId(movedTileId);
// // //       if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// // //       justPlacedTimer.current = setTimeout(() => {
// // //         setJustPlacedId(null);
// // //         justPlacedTimer.current = null;
// // //       }, 700);
// // //     }
// // //   };
// // //   const handleTipToggle = (tileId) => {
// // //     setOpenTipId(openTipId === tileId ? null : tileId);
// // //   };

// // //   const renderPair = (tileId, slotIdx) => {
// // //     const correctDeriv = derivatives[slotIdx];
// // //     const tile = derivatives[tileId];
// // //     const correct = tileId === slotIdx;
// // //     const justPlaced = correct && justPlacedId === tileId;
// // //     const dragging = draggedFromSlot === slotIdx;
// // //     const dragOver = dragOverSlot === slotIdx;
// // //     const tipOpen = openTipId === tileId;

// // //     const tileCls = ['cdp-puzzle-tile'];
// // //     if (correct) tileCls.push('correct');
// // //     if (justPlaced) tileCls.push('just-placed');
// // //     if (dragging) tileCls.push('dragging');

// // //     const slotCls = ['cdp-puzzle-slot'];
// // //     if (dragOver) slotCls.push('drag-over');
// // //     if (tipOpen) slotCls.push('has-popover');

// // //     return (
// // //       <div key={slotIdx} className="cdp-puzzle-pair" style={S.puzzlePair}>
// // //         <div className="cdp-puzzle-lhs" style={S.puzzleLhs}>
// // //           {processContent(`$\\frac{d}{dx}\\!\\left[${correctDeriv.fx}\\right]$`)}
// // //         </div>
// // //         <div className="cdp-puzzle-equals" style={S.puzzleEquals}>=</div>
// // //         <div
// // //           className={slotCls.join(' ')}
// // //           style={S.puzzleSlot}
// // //           data-slot={slotIdx}
// // //           onDragOver={(e) => handleDragOver(e, slotIdx)}
// // //           onDragLeave={() => handleDragLeave(slotIdx)}
// // //           onDrop={(e) => handleDrop(e, slotIdx)}
// // //         >
// // //           <div
// // //             className={tileCls.join(' ')}
// // //             style={S.puzzleTileBase}
// // //             draggable={!correct}
// // //             onDragStart={(e) => handleDragStart(e, slotIdx)}
// // //             onDragEnd={handleDragEnd}
// // //           >
// // //             {!correct && tile.tip && (
// // //               <button
// // //                 type="button"
// // //                 className="cdp-help-btn"
// // //                 title="Get a hint"
// // //                 draggable={false}
// // //                 onMouseDown={(e) => e.stopPropagation()}
// // //                 onPointerDown={(e) => e.stopPropagation()}
// // //                 onDragStart={(e) => e.preventDefault()}
// // //                 onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// // //               >
// // //                 ?
// // //               </button>
// // //             )}
// // //             <span>{processContent(`$${tile.dfx}$`)}</span>
// // //             {correct && (
// // //               <div className="cdp-tile-strip">
// // //                 <span>&#10003; In place</span>
// // //                 {tile.tip && (
// // //                   <>
// // //                     <span style={{ opacity: 0.6 }}>&mdash;</span>
// // //                     <button
// // //                       type="button"
// // //                       className="cdp-see-why"
// // //                       title="See why"
// // //                       draggable={false}
// // //                       onMouseDown={(e) => e.stopPropagation()}
// // //                       onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// // //                     >
// // //                       see why
// // //                     </button>
// // //                   </>
// // //                 )}
// // //               </div>
// // //             )}
// // //             {tipOpen && tile.tip && (
// // //               <div className="cdp-popover" onMouseDown={(e) => e.stopPropagation()}>
// // //                 <button
// // //                   type="button"
// // //                   className="cdp-popover-close"
// // //                   onClick={(e) => { e.stopPropagation(); setOpenTipId(null); }}
// // //                   aria-label="Close"
// // //                 >
// // //                   &times;
// // //                 </button>
// // //                 <div>{processContent(tile.tip)}</div>
// // //                 {tile.link && (
// // //                   <a href={tile.link} target="_blank" rel="noopener noreferrer">
// // //                     Learn more &rarr;
// // //                   </a>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       <style dangerouslySetInnerHTML={{ __html: PUZZLE_CSS }} />
// // //       <div style={S.puzzleControls}>
// // //         <button
// // //           type="button"
// // //           className="cdp-puzzle-btn"
// // //           style={S.puzzleBtn}
// // //           onClick={shufflePuzzle}
// // //         >
// // //           Shuffle
// // //         </button>
// // //         <span style={S.puzzleProgress}>
// // //           {isSolved ? (
// // //             <>
// // //               <strong style={{ color: C.primaryDark }}>&#10003; Solved!</strong>{' '}
// // //               All {derivatives.length} derivatives matched.{' '}
// // //               {onExit && (
// // //                 <a
// // //                   className="cdp-back-to-ref"
// // //                   style={S.backToRef}
// // //                   onClick={(e) => { e.preventDefault(); onExit(); }}
// // //                 >
// // //                   Back to reference view
// // //                 </a>
// // //               )}
// // //             </>
// // //           ) : (
// // //             <>
// // //               <strong style={{ color: C.primaryDark }}>{correctCount}</strong>
// // //               {' '}/ {derivatives.length} in place
// // //             </>
// // //           )}
// // //         </span>
// // //       </div>
// // //       <div
// // //         className={`cdp-puzzle-board ${isSolved ? 'solved' : ''}`}
// // //         style={S.puzzleBoard}
// // //       >
// // //         {slots.map(renderPair)}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default DerivativesPuzzle;


// // 'use client';
// // import { useState, useEffect, useRef, useMemo } from 'react';
// // import { processContent } from '../../../utils/contentProcessor';

// // // =========================================================
// // //   DerivativesPuzzle
// // //   - Mesh layout, drag/drop matching
// // //   - Auto-scroll during drag
// // //   - Help "?" + "see why" → tip popover (fixed: no overflow clip)
// // //   - Slot raises z-index when its popover is open
// // // =========================================================

// // const C = {
// //   primary:      '#4f46e5',
// //   primaryDark:  '#3730a3',
// //   primaryLight: '#eef2ff',
// //   bg:           '#fafbff',
// //   border:       '#e0e7ff',
// //   borderSoft:   '#eef0f7',
// //   textMuted:    '#64748b',
// //   success:      '#10b981',
// //   successBg:    '#d1fae5',
// //   successText:  '#065f46',
// //   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// // };

// // const PUZZLE_CSS = `
// // .cdp-puzzle-board.solved {
// //   box-shadow: 0 0 0 3px ${C.primary}, 0 0 30px 8px rgba(79,70,229,0.35);
// // }
// // .cdp-puzzle-btn:hover { background: ${C.primaryDark} !important; }

// // /* When a slot's popover is open, raise it above neighbors so the popover paints on top */
// // .cdp-puzzle-slot.has-popover { z-index: 50 !important; }

// // .cdp-puzzle-slot.drag-over {
// //   border-color: ${C.primary} !important;
// //   background: ${C.primaryLight} !important;
// // }
// // .cdp-puzzle-tile:hover { background: ${C.primaryDark}; }
// // .cdp-puzzle-tile:active { cursor: grabbing; }
// // .cdp-puzzle-tile.dragging { opacity: 0.3; }
// // .cdp-puzzle-tile.correct {
// //   background: ${C.successBg} !important;
// //   color: ${C.successText} !important;
// //   border-color: ${C.success} !important;
// //   cursor: default !important;
// // }
// // .cdp-puzzle-tile.correct:hover { background: ${C.successBg} !important; }
// // .cdp-puzzle-tile.just-placed { animation: cdpTilePulse 0.7s ease; }
// // @keyframes cdpTilePulse {
// //   0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
// //   40%  { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(16,185,129,0.45); }
// //   100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
// // }

// // .cdp-tile-strip {
// //   flex: 0 0 auto;
// //   background: ${C.success};
// //   color: white;
// //   padding: 2px 10px;
// //   border-radius: 4px;
// //   font-size: 10px;
// //   font-weight: 700;
// //   letter-spacing: 0.4px;
// //   text-transform: uppercase;
// //   white-space: nowrap;
// //   display: inline-flex;
// //   align-items: center;
// //   gap: 5px;
// //   line-height: 1.4;
// // }
// // .cdp-see-why {
// //   color: white;
// //   text-decoration: underline;
// //   background: none;
// //   border: none;
// //   padding: 0;
// //   cursor: pointer;
// //   font-family: inherit;
// //   font-size: 10px;
// //   font-weight: 700;
// //   text-transform: uppercase;
// //   letter-spacing: 0.4px;
// // }
// // .cdp-see-why:hover { color: rgba(255,255,255,0.85); }

// // .cdp-help-btn {
// //   position: absolute;
// //   top: 4px;
// //   left: 5px;
// //   width: 18px;
// //   height: 18px;
// //   border-radius: 50%;
// //   border: 1.5px solid white;
// //   background: rgba(255,255,255,0.18);
// //   color: white;
// //   font-size: 11px;
// //   font-weight: 700;
// //   font-family: inherit;
// //   cursor: pointer;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 0;
// //   line-height: 1;
// //   z-index: 4;
// //   transition: background 0.15s;
// // }
// // .cdp-help-btn:hover { background: rgba(255,255,255,0.42); }

// // .cdp-popover {
// //   position: absolute;
// //   bottom: calc(100% + 8px); left: 50%;
// //   transform: translateX(-50%);
// //   background: #0f172a; color: #f1f5f9;
// //   border: 1px solid #334155;
// //   border-radius: 8px;
// //   padding: 12px 28px 12px 14px;
// //   width: 260px;
// //   font-size: 13px; line-height: 1.5;
// //   font-family: 'Inter', sans-serif;
// //   text-align: left;
// //   box-shadow: 0 12px 30px rgba(0,0,0,0.35);
// //   z-index: 100;
// //   white-space: normal;
// // }
// // .cdp-popover-close {
// //   position: absolute; top: 4px; right: 6px;
// //   background: transparent; border: none;
// //   color: #94a3b8; cursor: pointer;
// //   font-size: 16px; padding: 0; line-height: 1;
// //   font-family: inherit;
// // }
// // .cdp-popover a {
// //   display: inline-block; margin-top: 8px;
// //   color: #93c5fd; text-decoration: none; font-weight: 600;
// // }
// // .cdp-popover a:hover { text-decoration: underline; }

// // .cdp-back-to-ref:hover { text-decoration: underline; }

// // @media (max-width: 900px) {
// //   .cdp-puzzle-board { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
// // }
// // @media (max-width: 600px) {
// //   .cdp-puzzle-board { grid-template-columns: 1fr !important; }
// // }
// // `;

// // const S = {
// //   puzzleControls: {
// //     display: 'flex', gap: '12px', marginBottom: '14px',
// //     alignItems: 'center', flexWrap: 'wrap',
// //   },
// //   puzzleBtn: {
// //     padding: '9px 18px', background: C.primary, color: 'white',
// //     border: 'none', borderRadius: '9px',
// //     fontWeight: 600, fontSize: '14px', cursor: 'pointer',
// //     fontFamily: 'inherit',
// //   },
// //   puzzleProgress: { color: C.textMuted, fontSize: '14px', fontWeight: 500 },
// //   puzzleBoard: {
// //     background: 'white', border: `1px solid ${C.borderSoft}`,
// //     borderRadius: '14px', padding: '14px',
// //     marginBottom: '24px', boxShadow: C.shadowSm,
// //     position: 'relative', transition: 'box-shadow 0.4s ease',
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
// //     gap: '10px',
// //   },
// //   puzzlePair: {
// //     display: 'grid',
// //     gridTemplateColumns: 'minmax(0, 0.85fr) auto minmax(0, 2fr)',
// //     gap: '8px',
// //     alignItems: 'stretch',
// //   },
// //   puzzleLhs: {
// //     background: C.primaryLight, color: C.primaryDark,
// //     borderRadius: '7px', padding: '6px 8px',
// //     fontSize: '13px', fontWeight: 600,
// //     display: 'flex', alignItems: 'center',
// //     justifyContent: 'center',
// //     overflow: 'hidden',
// //   },
// //   puzzleEquals: {
// //     color: C.primary, fontWeight: 700, fontSize: '18px',
// //     display: 'flex', alignItems: 'center', padding: '0 2px',
// //   },
// //   puzzleSlot: {
// //     background: C.bg, border: `2px dashed ${C.border}`,
// //     borderRadius: '7px', padding: '4px',
// //     minHeight: '68px',
// //     display: 'flex', alignItems: 'stretch',
// //     transition: 'border-color 0.15s, background 0.15s',
// //     position: 'relative',
// //   },
// //   puzzleTileBase: {
// //     position: 'relative', background: C.primary, color: 'white',
// //     border: '2px solid transparent', borderRadius: '6px',
// //     padding: '8px 12px', fontSize: '16px',
// //     cursor: 'grab', width: '100%',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center', justifyContent: 'center',
// //     gap: '5px',
// //     userSelect: 'none',
// //     // NO overflow:hidden — popover must escape the tile to be visible
// //     transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
// //   },
// //   backToRef: {
// //     color: C.primary, textDecoration: 'none', fontWeight: 600,
// //     marginLeft: '8px', cursor: 'pointer',
// //   },
// // };

// // const DerivativesPuzzle = ({ derivatives, onExit }) => {
// //   const [slots, setSlots] = useState(() => derivatives.map((d) => d.id));
// //   const [prevCorrect, setPrevCorrect] = useState(() => new Set(derivatives.map((d) => d.id)));
// //   const [justPlacedId, setJustPlacedId] = useState(null);
// //   const [draggedFromSlot, setDraggedFromSlot] = useState(null);
// //   const [dragOverSlot, setDragOverSlot] = useState(null);
// //   const [openTipId, setOpenTipId] = useState(null);
// //   const justPlacedTimer = useRef(null);

// //   const isSolved = useMemo(
// //     () => slots.every((tileId, slotIdx) => tileId === slotIdx),
// //     [slots]
// //   );
// //   const correctCount = useMemo(
// //     () => slots.filter((tileId, slotIdx) => tileId === slotIdx).length,
// //     [slots]
// //   );

// //   const shufflePuzzle = () => {
// //     const ids = derivatives.map((d) => d.id);
// //     for (let i = ids.length - 1; i > 0; i--) {
// //       const j = Math.floor(Math.random() * (i + 1));
// //       [ids[i], ids[j]] = [ids[j], ids[i]];
// //     }
// //     setSlots(ids);
// //     setOpenTipId(null);
// //     setJustPlacedId(null);
// //     setDraggedFromSlot(null);
// //     setDragOverSlot(null);
// //     const initialCorrect = new Set();
// //     ids.forEach((tid, sidx) => { if (tid === sidx) initialCorrect.add(tid); });
// //     setPrevCorrect(initialCorrect);
// //   };

// //   // Auto-shuffle on mount if everything is in place
// //   useEffect(() => {
// //     if (slots.every((t, i) => t === i)) shufflePuzzle();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   // Outside-click + Escape close the popover
// //   useEffect(() => {
// //     if (openTipId === null) return;
// //     const onMouse = (e) => {
// //       if (!e.target.closest('.cdp-popover') &&
// //           !e.target.closest('.cdp-help-btn') &&
// //           !e.target.closest('.cdp-see-why')) {
// //         setOpenTipId(null);
// //       }
// //     };
// //     const onKey = (e) => { if (e.key === 'Escape') setOpenTipId(null); };
// //     document.addEventListener('mousedown', onMouse);
// //     document.addEventListener('keydown', onKey);
// //     return () => {
// //       document.removeEventListener('mousedown', onMouse);
// //       document.removeEventListener('keydown', onKey);
// //     };
// //   }, [openTipId]);

// //   // Cleanup pulse timer
// //   useEffect(() => () => {
// //     if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// //   }, []);

// //   // Auto-scroll during drag
// //   useEffect(() => {
// //     if (draggedFromSlot === null) return;
// //     const SCROLL_ZONE = 90;
// //     const MAX_SPEED = 14;
// //     let velocity = 0;
// //     let rafId = null;
// //     const update = (y) => {
// //       const vh = window.innerHeight;
// //       if (y < SCROLL_ZONE) {
// //         const i = (SCROLL_ZONE - y) / SCROLL_ZONE;
// //         velocity = -MAX_SPEED * Math.min(1, Math.max(0, i));
// //       } else if (y > vh - SCROLL_ZONE) {
// //         const i = (y - (vh - SCROLL_ZONE)) / SCROLL_ZONE;
// //         velocity = MAX_SPEED * Math.min(1, Math.max(0, i));
// //       } else {
// //         velocity = 0;
// //       }
// //     };
// //     const animate = () => {
// //       if (velocity !== 0) window.scrollBy(0, velocity);
// //       rafId = requestAnimationFrame(animate);
// //     };
// //     const onDoc = (e) => update(e.clientY);
// //     document.addEventListener('dragover', onDoc);
// //     rafId = requestAnimationFrame(animate);
// //     return () => {
// //       document.removeEventListener('dragover', onDoc);
// //       if (rafId) cancelAnimationFrame(rafId);
// //       velocity = 0;
// //     };
// //   }, [draggedFromSlot]);

// //   const handleDragStart = (e, slotIdx) => {
// //     if (e.target.closest && e.target.closest('.cdp-help-btn, .cdp-see-why')) {
// //       e.preventDefault();
// //       return;
// //     }
// //     if (slots[slotIdx] === slotIdx) return;
// //     setDraggedFromSlot(slotIdx);
// //     e.dataTransfer.effectAllowed = 'move';
// //     setOpenTipId(null);
// //   };
// //   const handleDragEnd = () => {
// //     setDraggedFromSlot(null);
// //     setDragOverSlot(null);
// //   };
// //   const handleDragOver = (e, slotIdx) => {
// //     if (draggedFromSlot === null) return;
// //     if (slots[slotIdx] === slotIdx) return;
// //     e.preventDefault();
// //     e.dataTransfer.dropEffect = 'move';
// //     if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
// //   };
// //   const handleDragLeave = (slotIdx) => {
// //     if (dragOverSlot === slotIdx) setDragOverSlot(null);
// //   };
// //   const handleDrop = (e, slotIdx) => {
// //     e.preventDefault();
// //     setDragOverSlot(null);
// //     if (draggedFromSlot === null) return;
// //     if (slotIdx === draggedFromSlot) return;
// //     if (slots[slotIdx] === slotIdx) return;
// //     const newSlots = [...slots];
// //     const tmp = newSlots[draggedFromSlot];
// //     newSlots[draggedFromSlot] = newSlots[slotIdx];
// //     newSlots[slotIdx] = tmp;
// //     const movedTileId = newSlots[slotIdx];
// //     const becameCorrect = (movedTileId === slotIdx) && !prevCorrect.has(movedTileId);
// //     const newCorrect = new Set();
// //     newSlots.forEach((tid, sidx) => { if (tid === sidx) newCorrect.add(tid); });
// //     setSlots(newSlots);
// //     setPrevCorrect(newCorrect);
// //     setDraggedFromSlot(null);
// //     if (becameCorrect) {
// //       setJustPlacedId(movedTileId);
// //       if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
// //       justPlacedTimer.current = setTimeout(() => {
// //         setJustPlacedId(null);
// //         justPlacedTimer.current = null;
// //       }, 700);
// //     }
// //   };
// //   const handleTipToggle = (tileId) => {
// //     setOpenTipId(openTipId === tileId ? null : tileId);
// //   };

// //   const renderPair = (tileId, slotIdx) => {
// //     const correctDeriv = derivatives[slotIdx];
// //     const tile = derivatives[tileId];
// //     const correct = tileId === slotIdx;
// //     const justPlaced = correct && justPlacedId === tileId;
// //     const dragging = draggedFromSlot === slotIdx;
// //     const dragOver = dragOverSlot === slotIdx;
// //     const tipOpen = openTipId === tileId;

// //     const tileCls = ['cdp-puzzle-tile'];
// //     if (correct) tileCls.push('correct');
// //     if (justPlaced) tileCls.push('just-placed');
// //     if (dragging) tileCls.push('dragging');

// //     const slotCls = ['cdp-puzzle-slot'];
// //     if (dragOver) slotCls.push('drag-over');
// //     if (tipOpen) slotCls.push('has-popover');

// //     return (
// //       <div key={slotIdx} className="cdp-puzzle-pair" style={S.puzzlePair}>
// //         <div className="cdp-puzzle-lhs" style={S.puzzleLhs}>
// //           {processContent(`$\\frac{d}{dx}\\!\\left[${correctDeriv.fx}\\right]$`)}
// //         </div>
// //         <div className="cdp-puzzle-equals" style={S.puzzleEquals}>=</div>
// //         <div
// //           className={slotCls.join(' ')}
// //           style={S.puzzleSlot}
// //           data-slot={slotIdx}
// //           onDragOver={(e) => handleDragOver(e, slotIdx)}
// //           onDragLeave={() => handleDragLeave(slotIdx)}
// //           onDrop={(e) => handleDrop(e, slotIdx)}
// //         >
// //           <div
// //             className={tileCls.join(' ')}
// //             style={S.puzzleTileBase}
// //             draggable={!correct}
// //             onDragStart={(e) => handleDragStart(e, slotIdx)}
// //             onDragEnd={handleDragEnd}
// //           >
// //             {!correct && tile.tip && (
// //               <button
// //                 type="button"
// //                 className="cdp-help-btn"
// //                 title="Get a hint"
// //                 draggable={false}
// //                 onMouseDown={(e) => e.stopPropagation()}
// //                 onPointerDown={(e) => e.stopPropagation()}
// //                 onDragStart={(e) => e.preventDefault()}
// //                 onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// //               >
// //                 ?
// //               </button>
// //             )}
// //             <span>{processContent(`$${tile.dfx}$`)}</span>
// //             {correct && (
// //               <div className="cdp-tile-strip">
// //                 <span>&#10003; In place</span>
// //                 {tile.tip && (
// //                   <>
// //                     <span style={{ opacity: 0.6 }}>&mdash;</span>
// //                     <button
// //                       type="button"
// //                       className="cdp-see-why"
// //                       title="See why"
// //                       draggable={false}
// //                       onMouseDown={(e) => e.stopPropagation()}
// //                       onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
// //                     >
// //                       see why
// //                     </button>
// //                   </>
// //                 )}
// //               </div>
// //             )}
// //             {tipOpen && tile.tip && (
// //               <div className="cdp-popover" onMouseDown={(e) => e.stopPropagation()}>
// //                 <button
// //                   type="button"
// //                   className="cdp-popover-close"
// //                   onClick={(e) => { e.stopPropagation(); setOpenTipId(null); }}
// //                   aria-label="Close"
// //                 >
// //                   &times;
// //                 </button>
// //                 <div>{processContent(tile.tip)}</div>
// //                 {tile.link && (
// //                   <a href={tile.link} target="_blank" rel="noopener noreferrer">
// //                     Learn more &rarr;
// //                   </a>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <>
// //       <style dangerouslySetInnerHTML={{ __html: PUZZLE_CSS }} />
// //       <div style={S.puzzleControls}>
// //         <button
// //           type="button"
// //           className="cdp-puzzle-btn"
// //           style={S.puzzleBtn}
// //           onClick={shufflePuzzle}
// //         >
// //           Shuffle
// //         </button>
// //         <span style={S.puzzleProgress}>
// //           {isSolved ? (
// //             <>
// //               <strong style={{ color: C.primaryDark }}>&#10003; Solved!</strong>{' '}
// //               All {derivatives.length} derivatives matched.{' '}
// //               {onExit && (
// //                 <a
// //                   className="cdp-back-to-ref"
// //                   style={S.backToRef}
// //                   onClick={(e) => { e.preventDefault(); onExit(); }}
// //                 >
// //                   Back to reference view
// //                 </a>
// //               )}
// //             </>
// //           ) : (
// //             <>
// //               <strong style={{ color: C.primaryDark }}>{correctCount}</strong>
// //               {' '}/ {derivatives.length} in place
// //             </>
// //           )}
// //         </span>
// //       </div>
// //       <div
// //         className={`cdp-puzzle-board ${isSolved ? 'solved' : ''}`}
// //         style={S.puzzleBoard}
// //       >
// //         {slots.map(renderPair)}
// //       </div>
// //     </>
// //   );
// // };

// // export default DerivativesPuzzle;


// 'use client';
// import { useState, useEffect, useRef, useMemo } from 'react';
// import { processContent } from '../../../utils/contentProcessor';

// // =========================================================
// //   DerivativesPuzzle
// //   - Mesh layout, drag/drop matching
// //   - Auto-scroll during drag
// //   - Help "?" + "see why" → tip popover (fixed: no overflow clip)
// //   - Slot raises z-index when its popover is open
// // =========================================================

// const C = {
//   primary:      '#4f46e5',
//   primaryDark:  '#3730a3',
//   primaryLight: '#eef2ff',
//   bg:           '#fafbff',
//   border:       '#e0e7ff',
//   borderSoft:   '#eef0f7',
//   textMuted:    '#64748b',
//   success:      '#10b981',
//   successBg:    '#d1fae5',
//   successText:  '#065f46',
//   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
// };

// const PUZZLE_CSS = `
// .cdp-puzzle-board.solved {
//   box-shadow: 0 0 0 3px ${C.primary}, 0 0 30px 8px rgba(79,70,229,0.35);
// }
// .cdp-puzzle-btn:hover { background: ${C.primaryDark} !important; }

// /* When a slot's popover is open, raise it above neighbors so the popover paints on top */
// .cdp-puzzle-slot.has-popover { z-index: 50 !important; }
// .cdp-puzzle-pair.has-popover { z-index: 50 !important; }

// .cdp-puzzle-slot.drag-over {
//   border-color: ${C.primary} !important;
//   background: ${C.primaryLight} !important;
// }
// .cdp-puzzle-tile:hover { background: ${C.primaryDark}; }
// .cdp-puzzle-tile:active { cursor: grabbing; }
// .cdp-puzzle-tile.dragging { opacity: 0.3; }
// .cdp-puzzle-tile.correct {
//   background: ${C.successBg} !important;
//   color: ${C.successText} !important;
//   border-color: ${C.success} !important;
//   cursor: default !important;
// }
// .cdp-puzzle-tile.correct:hover { background: ${C.successBg} !important; }
// .cdp-puzzle-tile.just-placed { animation: cdpTilePulse 0.7s ease; }
// @keyframes cdpTilePulse {
//   0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
//   40%  { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(16,185,129,0.45); }
//   100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
// }

// .cdp-tile-strip {
//   flex: 0 0 auto;
//   background: ${C.success};
//   color: white;
//   padding: 2px 10px;
//   border-radius: 4px;
//   font-size: 10px;
//   font-weight: 700;
//   letter-spacing: 0.4px;
//   text-transform: uppercase;
//   white-space: nowrap;
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   line-height: 1.4;
// }
// .cdp-see-why {
//   color: white;
//   text-decoration: underline;
//   background: none;
//   border: none;
//   padding: 0;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 10px;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
// }
// .cdp-see-why:hover { color: rgba(255,255,255,0.85); }

// .cdp-help-btn {
//   position: absolute;
//   top: 4px;
//   left: 5px;
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   border: 1.5px solid white;
//   background: rgba(255,255,255,0.18);
//   color: white;
//   font-size: 11px;
//   font-weight: 700;
//   font-family: inherit;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0;
//   line-height: 1;
//   z-index: 4;
//   transition: background 0.15s;
// }
// .cdp-help-btn:hover { background: rgba(255,255,255,0.42); }

// .cdp-popover {
//   position: absolute;
//   bottom: calc(100% + 8px); left: 50%;
//   transform: translateX(-50%);
//   background: #0f172a; color: #f1f5f9;
//   border: 1px solid #334155;
//   border-radius: 8px;
//   padding: 12px 28px 12px 14px;
//   width: 260px;
//   font-size: 13px; line-height: 1.5;
//   font-family: 'Inter', sans-serif;
//   text-align: left;
//   box-shadow: 0 12px 30px rgba(0,0,0,0.35);
//   z-index: 100;
//   white-space: normal;
// }
// .cdp-popover-close {
//   position: absolute; top: 4px; right: 6px;
//   background: transparent; border: none;
//   color: #94a3b8; cursor: pointer;
//   font-size: 16px; padding: 0; line-height: 1;
//   font-family: inherit;
// }
// .cdp-popover a {
//   display: inline-block; margin-top: 8px;
//   color: #93c5fd; text-decoration: none; font-weight: 600;
// }
// .cdp-popover a:hover { text-decoration: underline; }

// .cdp-back-to-ref:hover { text-decoration: underline; }

// @media (max-width: 900px) {
//   .cdp-puzzle-board { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
// }
// @media (max-width: 600px) {
//   .cdp-puzzle-board { grid-template-columns: 1fr !important; }
// }
// `;

// const S = {
//   puzzleControls: {
//     display: 'flex', gap: '12px', marginBottom: '14px',
//     alignItems: 'center', flexWrap: 'wrap',
//   },
//   puzzleBtn: {
//     padding: '9px 18px', background: C.primary, color: 'white',
//     border: 'none', borderRadius: '9px',
//     fontWeight: 600, fontSize: '14px', cursor: 'pointer',
//     fontFamily: 'inherit',
//   },
//   puzzleProgress: { color: C.textMuted, fontSize: '14px', fontWeight: 500 },
//   puzzleBoard: {
//     background: 'white', border: `1px solid ${C.borderSoft}`,
//     borderRadius: '14px', padding: '14px',
//     marginBottom: '24px', boxShadow: C.shadowSm,
//     position: 'relative', transition: 'box-shadow 0.4s ease',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
//     gap: '10px',
//   },
//   puzzlePair: {
//     display: 'grid',
//     gridTemplateColumns: 'minmax(0, 0.85fr) auto minmax(0, 2fr)',
//     gap: '8px',
//     alignItems: 'stretch',
//     position: 'relative',
//   },
//   puzzleLhs: {
//     background: C.primaryLight, color: C.primaryDark,
//     borderRadius: '7px', padding: '6px 8px',
//     fontSize: '13px', fontWeight: 600,
//     display: 'flex', alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//   },
//   puzzleEquals: {
//     color: C.primary, fontWeight: 700, fontSize: '18px',
//     display: 'flex', alignItems: 'center', padding: '0 2px',
//   },
//   puzzleSlot: {
//     background: C.bg, border: `2px dashed ${C.border}`,
//     borderRadius: '7px', padding: '4px',
//     minHeight: '68px',
//     display: 'flex', alignItems: 'stretch',
//     transition: 'border-color 0.15s, background 0.15s',
//     position: 'relative',
//   },
//   puzzleTileBase: {
//     position: 'relative', background: C.primary, color: 'white',
//     border: '2px solid transparent', borderRadius: '6px',
//     padding: '8px 12px', fontSize: '16px',
//     cursor: 'grab', width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center', justifyContent: 'center',
//     gap: '5px',
//     userSelect: 'none',
//     // NO overflow:hidden — popover must escape the tile to be visible
//     transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
//   },
//   backToRef: {
//     color: C.primary, textDecoration: 'none', fontWeight: 600,
//     marginLeft: '8px', cursor: 'pointer',
//   },
// };

// const DerivativesPuzzle = ({ derivatives, onExit }) => {
//   const [slots, setSlots] = useState(() => derivatives.map((d) => d.id));
//   const [prevCorrect, setPrevCorrect] = useState(() => new Set(derivatives.map((d) => d.id)));
//   const [justPlacedId, setJustPlacedId] = useState(null);
//   const [draggedFromSlot, setDraggedFromSlot] = useState(null);
//   const [dragOverSlot, setDragOverSlot] = useState(null);
//   const [openTipId, setOpenTipId] = useState(null);
//   const justPlacedTimer = useRef(null);

//   const isSolved = useMemo(
//     () => slots.every((tileId, slotIdx) => tileId === slotIdx),
//     [slots]
//   );
//   const correctCount = useMemo(
//     () => slots.filter((tileId, slotIdx) => tileId === slotIdx).length,
//     [slots]
//   );

//   const shufflePuzzle = () => {
//     const ids = derivatives.map((d) => d.id);
//     for (let i = ids.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [ids[i], ids[j]] = [ids[j], ids[i]];
//     }
//     setSlots(ids);
//     setOpenTipId(null);
//     setJustPlacedId(null);
//     setDraggedFromSlot(null);
//     setDragOverSlot(null);
//     const initialCorrect = new Set();
//     ids.forEach((tid, sidx) => { if (tid === sidx) initialCorrect.add(tid); });
//     setPrevCorrect(initialCorrect);
//   };

//   // Auto-shuffle on mount if everything is in place
//   useEffect(() => {
//     if (slots.every((t, i) => t === i)) shufflePuzzle();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Outside-click + Escape close the popover
//   useEffect(() => {
//     if (openTipId === null) return;
//     const onMouse = (e) => {
//       if (!e.target.closest('.cdp-popover') &&
//           !e.target.closest('.cdp-help-btn') &&
//           !e.target.closest('.cdp-see-why')) {
//         setOpenTipId(null);
//       }
//     };
//     const onKey = (e) => { if (e.key === 'Escape') setOpenTipId(null); };
//     document.addEventListener('mousedown', onMouse);
//     document.addEventListener('keydown', onKey);
//     return () => {
//       document.removeEventListener('mousedown', onMouse);
//       document.removeEventListener('keydown', onKey);
//     };
//   }, [openTipId]);

//   // Cleanup pulse timer
//   useEffect(() => () => {
//     if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
//   }, []);

//   // Auto-scroll during drag
//   useEffect(() => {
//     if (draggedFromSlot === null) return;
//     const SCROLL_ZONE = 90;
//     const MAX_SPEED = 14;
//     let velocity = 0;
//     let rafId = null;
//     const update = (y) => {
//       const vh = window.innerHeight;
//       if (y < SCROLL_ZONE) {
//         const i = (SCROLL_ZONE - y) / SCROLL_ZONE;
//         velocity = -MAX_SPEED * Math.min(1, Math.max(0, i));
//       } else if (y > vh - SCROLL_ZONE) {
//         const i = (y - (vh - SCROLL_ZONE)) / SCROLL_ZONE;
//         velocity = MAX_SPEED * Math.min(1, Math.max(0, i));
//       } else {
//         velocity = 0;
//       }
//     };
//     const animate = () => {
//       if (velocity !== 0) window.scrollBy(0, velocity);
//       rafId = requestAnimationFrame(animate);
//     };
//     const onDoc = (e) => update(e.clientY);
//     document.addEventListener('dragover', onDoc);
//     rafId = requestAnimationFrame(animate);
//     return () => {
//       document.removeEventListener('dragover', onDoc);
//       if (rafId) cancelAnimationFrame(rafId);
//       velocity = 0;
//     };
//   }, [draggedFromSlot]);

//   const handleDragStart = (e, slotIdx) => {
//     if (e.target.closest && e.target.closest('.cdp-help-btn, .cdp-see-why')) {
//       e.preventDefault();
//       return;
//     }
//     if (slots[slotIdx] === slotIdx) return;
//     setDraggedFromSlot(slotIdx);
//     e.dataTransfer.effectAllowed = 'move';
//     setOpenTipId(null);
//   };
//   const handleDragEnd = () => {
//     setDraggedFromSlot(null);
//     setDragOverSlot(null);
//   };
//   const handleDragOver = (e, slotIdx) => {
//     if (draggedFromSlot === null) return;
//     if (slots[slotIdx] === slotIdx) return;
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//     if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
//   };
//   const handleDragLeave = (slotIdx) => {
//     if (dragOverSlot === slotIdx) setDragOverSlot(null);
//   };
//   const handleDrop = (e, slotIdx) => {
//     e.preventDefault();
//     setDragOverSlot(null);
//     if (draggedFromSlot === null) return;
//     if (slotIdx === draggedFromSlot) return;
//     if (slots[slotIdx] === slotIdx) return;
//     const newSlots = [...slots];
//     const tmp = newSlots[draggedFromSlot];
//     newSlots[draggedFromSlot] = newSlots[slotIdx];
//     newSlots[slotIdx] = tmp;
//     const movedTileId = newSlots[slotIdx];
//     const becameCorrect = (movedTileId === slotIdx) && !prevCorrect.has(movedTileId);
//     const newCorrect = new Set();
//     newSlots.forEach((tid, sidx) => { if (tid === sidx) newCorrect.add(tid); });
//     setSlots(newSlots);
//     setPrevCorrect(newCorrect);
//     setDraggedFromSlot(null);
//     if (becameCorrect) {
//       setJustPlacedId(movedTileId);
//       if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
//       justPlacedTimer.current = setTimeout(() => {
//         setJustPlacedId(null);
//         justPlacedTimer.current = null;
//       }, 700);
//     }
//   };
//   const handleTipToggle = (tileId) => {
//     setOpenTipId(openTipId === tileId ? null : tileId);
//   };

//   const renderPair = (tileId, slotIdx) => {
//     const correctDeriv = derivatives[slotIdx];
//     const tile = derivatives[tileId];
//     const correct = tileId === slotIdx;
//     const justPlaced = correct && justPlacedId === tileId;
//     const dragging = draggedFromSlot === slotIdx;
//     const dragOver = dragOverSlot === slotIdx;
//     const tipOpen = openTipId === tileId;

//     const tileCls = ['cdp-puzzle-tile'];
//     if (correct) tileCls.push('correct');
//     if (justPlaced) tileCls.push('just-placed');
//     if (dragging) tileCls.push('dragging');

//     const slotCls = ['cdp-puzzle-slot'];
//     if (dragOver) slotCls.push('drag-over');
//     if (tipOpen) slotCls.push('has-popover');

//     return (
//       <div key={slotIdx} className={`cdp-puzzle-pair ${tipOpen ? 'has-popover' : ''}`} style={S.puzzlePair}>
//         <div className="cdp-puzzle-lhs" style={S.puzzleLhs}>
//           {processContent(`$\\frac{d}{dx}\\!\\left[${correctDeriv.fx}\\right]$`)}
//         </div>
//         <div className="cdp-puzzle-equals" style={S.puzzleEquals}>=</div>
//         <div
//           className={slotCls.join(' ')}
//           style={S.puzzleSlot}
//           data-slot={slotIdx}
//           onDragOver={(e) => handleDragOver(e, slotIdx)}
//           onDragLeave={() => handleDragLeave(slotIdx)}
//           onDrop={(e) => handleDrop(e, slotIdx)}
//         >
//           <div
//             className={tileCls.join(' ')}
//             style={S.puzzleTileBase}
//             draggable={!correct}
//             onDragStart={(e) => handleDragStart(e, slotIdx)}
//             onDragEnd={handleDragEnd}
//           >
//             {!correct && tile.tip && (
//               <button
//                 type="button"
//                 className="cdp-help-btn"
//                 title="Get a hint"
//                 draggable={false}
//                 onMouseDown={(e) => e.stopPropagation()}
//                 onPointerDown={(e) => e.stopPropagation()}
//                 onDragStart={(e) => e.preventDefault()}
//                 onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
//               >
//                 ?
//               </button>
//             )}
//             <span>{processContent(`$${tile.dfx}$`)}</span>
//             {correct && (
//               <div className="cdp-tile-strip">
//                 <span>&#10003; In place</span>
//                 {tile.tip && (
//                   <>
//                     <span style={{ opacity: 0.6 }}>&mdash;</span>
//                     <button
//                       type="button"
//                       className="cdp-see-why"
//                       title="See why"
//                       draggable={false}
//                       onMouseDown={(e) => e.stopPropagation()}
//                       onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
//                     >
//                       see why
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}
//             {tipOpen && tile.tip && (
//               <div className="cdp-popover" onMouseDown={(e) => e.stopPropagation()}>
//                 <button
//                   type="button"
//                   className="cdp-popover-close"
//                   onClick={(e) => { e.stopPropagation(); setOpenTipId(null); }}
//                   aria-label="Close"
//                 >
//                   &times;
//                 </button>
//                 <div>{processContent(tile.tip)}</div>
//                 {tile.link && (
//                   <a href={tile.link} target="_blank" rel="noopener noreferrer">
//                     Learn more &rarr;
//                   </a>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: PUZZLE_CSS }} />
//       <div style={S.puzzleControls}>
//         <button
//           type="button"
//           className="cdp-puzzle-btn"
//           style={S.puzzleBtn}
//           onClick={shufflePuzzle}
//         >
//           Shuffle
//         </button>
//         <span style={S.puzzleProgress}>
//           {isSolved ? (
//             <>
//               <strong style={{ color: C.primaryDark }}>&#10003; Solved!</strong>{' '}
//               All {derivatives.length} derivatives matched.{' '}
//               {onExit && (
//                 <a
//                   className="cdp-back-to-ref"
//                   style={S.backToRef}
//                   onClick={(e) => { e.preventDefault(); onExit(); }}
//                 >
//                   Back to reference view
//                 </a>
//               )}
//             </>
//           ) : (
//             <>
//               <strong style={{ color: C.primaryDark }}>{correctCount}</strong>
//               {' '}/ {derivatives.length} in place
//             </>
//           )}
//         </span>
//       </div>
//       <div
//         className={`cdp-puzzle-board ${isSolved ? 'solved' : ''}`}
//         style={S.puzzleBoard}
//       >
//         {slots.map(renderPair)}
//       </div>
//     </>
//   );
// };

// export default DerivativesPuzzle;


'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { processContent } from '../../../utils/contentProcessor';

// =========================================================
//   DerivativesPuzzle
//   - Mesh layout, drag/drop matching
//   - Auto-scroll during drag
//   - Help "?" + "see why" → tip popover (fixed: no overflow clip)
//   - Slot raises z-index when its popover is open
// =========================================================

const C = {
  primary:      '#4f46e5',
  primaryDark:  '#3730a3',
  primaryLight: '#eef2ff',
  bg:           '#fafbff',
  border:       '#e0e7ff',
  borderSoft:   '#eef0f7',
  textMuted:    '#64748b',
  success:      '#10b981',
  successBg:    '#d1fae5',
  successText:  '#065f46',
  shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
};

const PUZZLE_CSS = `
.cdp-puzzle-board.solved {
  box-shadow: 0 0 0 3px ${C.primary}, 0 0 30px 8px rgba(79,70,229,0.35);
}
.cdp-puzzle-btn:hover { background: ${C.primaryDark} !important; }

/* When a slot's popover is open, raise it above neighbors so the popover paints on top */
.cdp-puzzle-slot.has-popover { z-index: 50 !important; }
.cdp-puzzle-pair.has-popover { z-index: 50 !important; }

.cdp-puzzle-slot.drag-over {
  border-color: ${C.primary} !important;
  background: ${C.primaryLight} !important;
}
.cdp-puzzle-tile:hover { background: ${C.primaryDark}; }
.cdp-puzzle-tile:active { cursor: grabbing; }
.cdp-puzzle-tile.dragging { opacity: 0.3; }
.cdp-puzzle-tile.correct {
  background: ${C.successBg} !important;
  color: ${C.successText} !important;
  border-color: ${C.success} !important;
  cursor: default !important;
}
.cdp-puzzle-tile.correct:hover { background: ${C.successBg} !important; }
.cdp-puzzle-tile.just-placed { animation: cdpTilePulse 0.7s ease; }
@keyframes cdpTilePulse {
  0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(16,185,129,0.45); }
  40%  { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(16,185,129,0.45); }
  100% { transform: scale(1);    box-shadow: 0 0 0 0 transparent; }
}

.cdp-tile-strip {
  flex: 0 0 auto;
  background: ${C.success};
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  line-height: 1.4;
}
.cdp-see-why {
  color: white;
  text-decoration: underline;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
.cdp-see-why:hover { color: rgba(255,255,255,0.85); }

.cdp-help-btn {
  position: absolute;
  top: 4px;
  left: 5px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid white;
  background: rgba(255,255,255,0.18);
  color: white;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;
  z-index: 4;
  transition: background 0.15s;
}
.cdp-help-btn::before {
  content: '';
  position: absolute;
  inset: -8px;
}
.cdp-help-btn:hover { background: rgba(255,255,255,0.42); }

.cdp-popover {
  position: absolute;
  bottom: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  background: #0f172a; color: #f1f5f9;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 12px 28px 12px 14px;
  width: 260px;
  font-size: 13px; line-height: 1.5;
  font-family: 'Inter', sans-serif;
  text-align: left;
  box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  z-index: 100;
  white-space: normal;
}
.cdp-popover-close {
  position: absolute; top: 4px; right: 6px;
  background: transparent; border: none;
  color: #94a3b8; cursor: pointer;
  font-size: 16px; padding: 0; line-height: 1;
  font-family: inherit;
}
.cdp-popover a {
  display: inline-block; margin-top: 8px;
  color: #93c5fd; text-decoration: none; font-weight: 600;
}
.cdp-popover a:hover { text-decoration: underline; }

.cdp-back-to-ref:hover { text-decoration: underline; }

@media (max-width: 900px) {
  .cdp-puzzle-board { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
}
@media (max-width: 600px) {
  .cdp-puzzle-board { grid-template-columns: 1fr !important; }
}
`;

const S = {
  puzzleControls: {
    display: 'flex', gap: '12px', marginBottom: '14px',
    alignItems: 'center', flexWrap: 'wrap',
  },
  puzzleBtn: {
    padding: '9px 18px', background: C.primary, color: 'white',
    border: 'none', borderRadius: '9px',
    fontWeight: 600, fontSize: '14px', cursor: 'pointer',
    fontFamily: 'inherit',
  },
  puzzleProgress: { color: C.textMuted, fontSize: '14px', fontWeight: 500 },
  puzzleBoard: {
    background: 'white', border: `1px solid ${C.borderSoft}`,
    borderRadius: '14px', padding: '14px',
    marginBottom: '24px', boxShadow: C.shadowSm,
    position: 'relative', transition: 'box-shadow 0.4s ease',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '10px',
  },
  puzzlePair: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.2fr) auto minmax(0, 2fr)',
    gap: '8px',
    alignItems: 'stretch',
    position: 'relative',
  },
  puzzleLhs: {
    background: C.primaryLight, color: C.primaryDark,
    borderRadius: '7px', padding: '6px 8px',
    fontSize: '13px', fontWeight: 600,
    display: 'flex', alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  puzzleEquals: {
    color: C.primary, fontWeight: 700, fontSize: '16px',
    display: 'flex', alignItems: 'center', padding: '0 2px',
  },
  puzzleSlot: {
    background: C.bg, border: `2px dashed ${C.border}`,
    borderRadius: '7px', padding: '4px',
    minHeight: '68px',
    display: 'flex', alignItems: 'stretch',
    transition: 'border-color 0.15s, background 0.15s',
    position: 'relative',
  },
  puzzleTileBase: {
    position: 'relative', background: C.primary, color: 'white',
    border: '2px solid transparent', borderRadius: '6px',
    padding: '8px 12px', fontSize: '16px',
    cursor: 'grab', width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    gap: '5px',
    userSelect: 'none',
    // NO overflow:hidden — popover must escape the tile to be visible
    transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
  },
  backToRef: {
    color: C.primary, textDecoration: 'none', fontWeight: 600,
    marginLeft: '8px', cursor: 'pointer',
  },
};

const DerivativesPuzzle = ({ derivatives, onExit }) => {
  const [slots, setSlots] = useState(() => derivatives.map((d) => d.id));
  const [prevCorrect, setPrevCorrect] = useState(() => new Set(derivatives.map((d) => d.id)));
  const [justPlacedId, setJustPlacedId] = useState(null);
  const [draggedFromSlot, setDraggedFromSlot] = useState(null);
  const [dragOverSlot, setDragOverSlot] = useState(null);
  const [openTipId, setOpenTipId] = useState(null);
  const justPlacedTimer = useRef(null);

  const isSolved = useMemo(
    () => slots.every((tileId, slotIdx) => tileId === slotIdx),
    [slots]
  );
  const correctCount = useMemo(
    () => slots.filter((tileId, slotIdx) => tileId === slotIdx).length,
    [slots]
  );

  const shufflePuzzle = () => {
    const ids = derivatives.map((d) => d.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    setSlots(ids);
    setOpenTipId(null);
    setJustPlacedId(null);
    setDraggedFromSlot(null);
    setDragOverSlot(null);
    const initialCorrect = new Set();
    ids.forEach((tid, sidx) => { if (tid === sidx) initialCorrect.add(tid); });
    setPrevCorrect(initialCorrect);
  };

  // Auto-shuffle on mount if everything is in place
  useEffect(() => {
    if (slots.every((t, i) => t === i)) shufflePuzzle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Outside-click + Escape close the popover
  useEffect(() => {
    if (openTipId === null) return;
    const onMouse = (e) => {
      if (!e.target.closest('.cdp-popover') &&
          !e.target.closest('.cdp-help-btn') &&
          !e.target.closest('.cdp-see-why')) {
        setOpenTipId(null);
      }
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpenTipId(null); };
    document.addEventListener('mousedown', onMouse);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onMouse);
      document.removeEventListener('keydown', onKey);
    };
  }, [openTipId]);

  // Cleanup pulse timer
  useEffect(() => () => {
    if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
  }, []);

  // Auto-scroll during drag
  useEffect(() => {
    if (draggedFromSlot === null) return;
    const SCROLL_ZONE = 90;
    const MAX_SPEED = 14;
    let velocity = 0;
    let rafId = null;
    const update = (y) => {
      const vh = window.innerHeight;
      if (y < SCROLL_ZONE) {
        const i = (SCROLL_ZONE - y) / SCROLL_ZONE;
        velocity = -MAX_SPEED * Math.min(1, Math.max(0, i));
      } else if (y > vh - SCROLL_ZONE) {
        const i = (y - (vh - SCROLL_ZONE)) / SCROLL_ZONE;
        velocity = MAX_SPEED * Math.min(1, Math.max(0, i));
      } else {
        velocity = 0;
      }
    };
    const animate = () => {
      if (velocity !== 0) window.scrollBy(0, velocity);
      rafId = requestAnimationFrame(animate);
    };
    const onDoc = (e) => update(e.clientY);
    document.addEventListener('dragover', onDoc);
    rafId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('dragover', onDoc);
      if (rafId) cancelAnimationFrame(rafId);
      velocity = 0;
    };
  }, [draggedFromSlot]);

  const handleDragStart = (e, slotIdx) => {
    if (e.target.closest && e.target.closest('.cdp-help-btn, .cdp-see-why')) {
      e.preventDefault();
      return;
    }
    if (slots[slotIdx] === slotIdx) return;
    setDraggedFromSlot(slotIdx);
    e.dataTransfer.effectAllowed = 'move';
    setOpenTipId(null);
  };
  const handleDragEnd = () => {
    setDraggedFromSlot(null);
    setDragOverSlot(null);
  };
  const handleDragOver = (e, slotIdx) => {
    if (draggedFromSlot === null) return;
    if (slots[slotIdx] === slotIdx) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
  };
  const handleDragLeave = (slotIdx) => {
    if (dragOverSlot === slotIdx) setDragOverSlot(null);
  };
  const handleDrop = (e, slotIdx) => {
    e.preventDefault();
    setDragOverSlot(null);
    if (draggedFromSlot === null) return;
    if (slotIdx === draggedFromSlot) return;
    if (slots[slotIdx] === slotIdx) return;
    const newSlots = [...slots];
    const tmp = newSlots[draggedFromSlot];
    newSlots[draggedFromSlot] = newSlots[slotIdx];
    newSlots[slotIdx] = tmp;
    const movedTileId = newSlots[slotIdx];
    const becameCorrect = (movedTileId === slotIdx) && !prevCorrect.has(movedTileId);
    const newCorrect = new Set();
    newSlots.forEach((tid, sidx) => { if (tid === sidx) newCorrect.add(tid); });
    setSlots(newSlots);
    setPrevCorrect(newCorrect);
    setDraggedFromSlot(null);
    if (becameCorrect) {
      setJustPlacedId(movedTileId);
      if (justPlacedTimer.current) clearTimeout(justPlacedTimer.current);
      justPlacedTimer.current = setTimeout(() => {
        setJustPlacedId(null);
        justPlacedTimer.current = null;
      }, 700);
    }
  };
  const handleTipToggle = (tileId) => {
    setOpenTipId(openTipId === tileId ? null : tileId);
  };

  const renderPair = (tileId, slotIdx) => {
    const correctDeriv = derivatives[slotIdx];
    const tile = derivatives[tileId];
    const correct = tileId === slotIdx;
    const justPlaced = correct && justPlacedId === tileId;
    const dragging = draggedFromSlot === slotIdx;
    const dragOver = dragOverSlot === slotIdx;
    const tipOpen = openTipId === tileId;

    const tileCls = ['cdp-puzzle-tile'];
    if (correct) tileCls.push('correct');
    if (justPlaced) tileCls.push('just-placed');
    if (dragging) tileCls.push('dragging');

    const slotCls = ['cdp-puzzle-slot'];
    if (dragOver) slotCls.push('drag-over');
    if (tipOpen) slotCls.push('has-popover');

    return (
      <div key={slotIdx} className={`cdp-puzzle-pair ${tipOpen ? 'has-popover' : ''}`} style={S.puzzlePair}>
        <div className="cdp-puzzle-lhs" style={S.puzzleLhs}>
          {processContent(`$\\frac{d}{dx}\\!\\left[${correctDeriv.fx}\\right]$`)}
        </div>
        <div className="cdp-puzzle-equals" style={S.puzzleEquals}>=</div>
        <div
          className={slotCls.join(' ')}
          style={S.puzzleSlot}
          data-slot={slotIdx}
          onDragOver={(e) => handleDragOver(e, slotIdx)}
          onDragLeave={() => handleDragLeave(slotIdx)}
          onDrop={(e) => handleDrop(e, slotIdx)}
        >
          <div
            className={tileCls.join(' ')}
            style={S.puzzleTileBase}
            draggable={!correct}
            onDragStart={(e) => handleDragStart(e, slotIdx)}
            onDragEnd={handleDragEnd}
          >
            {!correct && tile.tip && (
              <button
                type="button"
                className="cdp-help-btn"
                title="Get a hint"
                draggable={false}
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onDragStart={(e) => e.preventDefault()}
                onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
              >
                ?
              </button>
            )}
            <span>{processContent(`$${tile.dfx}$`)}</span>
            {correct && (
              <div className="cdp-tile-strip">
                <span>&#10003; In place</span>
                {tile.tip && (
                  <>
                    <span style={{ opacity: 0.6 }}>&mdash;</span>
                    <button
                      type="button"
                      className="cdp-see-why"
                      title="See why"
                      draggable={false}
                      onMouseDown={(e) => e.stopPropagation()}
                      onClick={(e) => { e.stopPropagation(); handleTipToggle(tile.id); }}
                    >
                      see why
                    </button>
                  </>
                )}
              </div>
            )}
            {tipOpen && tile.tip && (
              <div className="cdp-popover" onMouseDown={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="cdp-popover-close"
                  onClick={(e) => { e.stopPropagation(); setOpenTipId(null); }}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div>{processContent(tile.tip)}</div>
                {tile.link && (
                  <a href={tile.link} target="_blank" rel="noopener noreferrer">
                    Learn more &rarr;
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PUZZLE_CSS }} />
      <div style={S.puzzleControls}>
        <button
          type="button"
          className="cdp-puzzle-btn"
          style={S.puzzleBtn}
          onClick={shufflePuzzle}
        >
          Shuffle
        </button>
        <span style={S.puzzleProgress}>
          {isSolved ? (
            <>
              <strong style={{ color: C.primaryDark }}>&#10003; Solved!</strong>{' '}
              All {derivatives.length} derivatives matched.{' '}
              {onExit && (
                <a
                  className="cdp-back-to-ref"
                  style={S.backToRef}
                  onClick={(e) => { e.preventDefault(); onExit(); }}
                >
                  Back to reference view
                </a>
              )}
            </>
          ) : (
            <>
              <strong style={{ color: C.primaryDark }}>{correctCount}</strong>
              {' '}/ {derivatives.length} in place
            </>
          )}
        </span>
      </div>
      <div
        className={`cdp-puzzle-board ${isSolved ? 'solved' : ''}`}
        style={S.puzzleBoard}
      >
        {slots.map(renderPair)}
      </div>
    </>
  );
};

export default DerivativesPuzzle;