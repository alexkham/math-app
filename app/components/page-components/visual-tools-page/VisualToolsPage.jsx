// /**
//  * VisualToolsPage v19 — file 3 of 3 (VisualToolsPage.jsx)
//  *
//  * Main page composition:
//  *   - input flatten/group/merge
//  *   - SubGroupBlock, SubGroupTabs, GroupPanel
//  *   - QuickNav (refactored: hierarchical dropdown + two-tier pills)
//  *   - ToolsHeader (reduced fonts)
//  *   - Sidebar
//  *   - default export VisualToolsPage
//  */

// import React, { useMemo, useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { processContent } from '@/app/utils/contentProcessor';
// import { getTheme } from './visualToolsPageThemes';

// import {
//   FONT_FAMILY, SERIF_FAMILY,
//   NAVBAR_HEIGHT, SIDEBAR_COLLAPSED, SIDEBAR_EXPANDED, MOBILE_BREAKPOINT,
//   UNCATEGORIZED_LABEL, DEFAULT_CARD_HEIGHTS,
//   hexToRgba, generateShortTitle, slugify,
//   toolIdFor, subGroupId, categoryId,
//   hasArticleContent, sanitizeVideos, sanitizeVideoLayout,
//   useIsMobile,
//   MiniCard, BigCard, AlgorithmicGrid,
// } from './VisualToolsCards';

// import { ArticleVideoBlock, VideoModal } from './VisualToolsBlocks';


// /* ================================================================
//    GLOBAL STYLES
//    ================================================================ */

// const GlobalStyles = () => (
//   <style dangerouslySetInnerHTML={{ __html: `
//     .vtp-desc-scroll::-webkit-scrollbar { display: none; width: 0; height: 0; }
//     @media (max-width: ${MOBILE_BREAKPOINT}px) {
//       .vtp-algo-cell { grid-column: 1 / -1 !important; }
//       .vtp-beside-grid { grid-template-columns: 1fr !important; }
//       .vtp-beside-vid { position: static !important; }
//     }
//   ` }} />
// );


// /* ================================================================
//    INPUT NORMALIZATION
//    ================================================================ */

// const flattenInput = (input) => {
//   if (Array.isArray(input)) return input;
//   if (input && Array.isArray(input.items)) return input.items;
//   if (input && Array.isArray(input.children)) {
//     const out = [];
//     for (const child of input.children) {
//       if (child && child.hasViews && Array.isArray(child.views) && child.views.length > 0) {
//         const inferredCat = child.category || child.title || null;
//         for (const v of child.views) out.push({ ...v, category: v.category || inferredCat });
//       } else if (child) {
//         out.push(child);
//       }
//     }
//     return out;
//   }
//   return [];
// };

// const mergeWithCustomItems = (autoList, customItems) => {
//   if (!Array.isArray(customItems) || customItems.length === 0) return autoList;
//   const decorated = customItems.map((item, i) => {
//     const { at, ...rest } = item;
//     let pos;
//     if (at === 'start') pos = 0;
//     else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
//     else if (typeof at === 'number') pos = at;
//     else pos = Number.POSITIVE_INFINITY;
//     return { item: rest, pos, order: i };
//   });
//   decorated.sort((a, b) => {
//     if (a.pos !== b.pos) return b.pos - a.pos;
//     return b.order - a.order;
//   });
//   const result = [...autoList];
//   decorated.forEach(({ item, pos }) => {
//     if (pos === Number.POSITIVE_INFINITY) result.push(item);
//     else {
//       const clamped = Math.max(0, Math.min(pos, result.length));
//       result.splice(clamped, 0, item);
//     }
//   });
//   return result;
// };

// const groupItems = (flatList) => {
//   const standalone = [];
//   const catMap = new Map();
//   const catOrder = [];

//   for (const item of flatList) {
//     if (!item) continue;
//     if (!item.category) { standalone.push(item); continue; }
//     if (!catMap.has(item.category)) {
//       catMap.set(item.category, { ungrouped: [], subMap: new Map(), subOrder: [] });
//       catOrder.push(item.category);
//     }
//     const cat = catMap.get(item.category);
//     if (!item.subCategory) cat.ungrouped.push(item);
//     else {
//       if (!cat.subMap.has(item.subCategory)) {
//         cat.subMap.set(item.subCategory, []);
//         cat.subOrder.push(item.subCategory);
//       }
//       cat.subMap.get(item.subCategory).push(item);
//     }
//   }

//   const categories = catOrder.map((catName) => {
//     const cat = catMap.get(catName);
//     const subGroups = cat.subOrder.map((sub) => ({ name: sub, items: cat.subMap.get(sub) }));
//     const totalCount = cat.ungrouped.length + subGroups.reduce((s, g) => s + g.items.length, 0);
//     return { category: catName, ungrouped: cat.ungrouped, subGroups, totalCount };
//   });

//   return { categories, standalone };
// };


// /* ================================================================
//    SUB-GROUP COMPONENTS
//    ================================================================ */

// const SubGroupBlock = ({ name, parentCategory, items, theme, variantResolver, cardHeights }) => (
//   <div
//     id={subGroupId(parentCategory, name)}
//     style={{
//       paddingLeft: 16,
//       borderLeft: `3px solid ${theme.accent}`,
//       marginTop: 24,
//       scrollMarginTop: '100px',
//     }}
//   >
//     <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
//       <span style={{
//         background: theme.accent, color: '#fff',
//         padding: '4px 14px', borderRadius: 999,
//         fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.3px',
//         fontFamily: FONT_FAMILY,
//       }}>{name}</span>
//       <span style={{ fontSize: '0.78rem', color: theme.textMuted, fontFamily: FONT_FAMILY }}>
//         {items.length} {items.length === 1 ? 'tool' : 'tools'}
//       </span>
//     </div>
//     <AlgorithmicGrid
//       items={items}
//       getCellId={(item, idx) => toolIdFor(item, idx)}
//       renderItem={(item) => (
//         <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
//       )}
//     />
//   </div>
// );

// const SubGroupTabs = ({ ungrouped, subGroups, theme, variantResolver, cardHeights }) => {
//   const tabs = [
//     ...(ungrouped.length > 0 ? [{ name: UNCATEGORIZED_LABEL, items: ungrouped }] : []),
//     ...subGroups,
//   ];
//   const [active, setActive] = useState(0);
//   if (tabs.length === 0) return null;
//   const activeTab = tabs[Math.min(active, tabs.length - 1)];
//   return (
//     <div>
//       <div style={{
//         display: 'flex', gap: 4, flexWrap: 'wrap',
//         borderBottom: `2px solid ${hexToRgba(theme.accent, 0.15)}`,
//         marginBottom: 18,
//       }}>
//         {tabs.map((tab, i) => {
//           const isActive = i === active;
//           return (
//             <button
//               key={i} onClick={() => setActive(i)}
//               style={{
//                 padding: '8px 16px', fontSize: '0.9rem', fontWeight: 600,
//                 background: 'transparent',
//                 color: isActive ? theme.accent : theme.textMuted,
//                 border: 'none',
//                 borderBottom: `2px solid ${isActive ? theme.accent : 'transparent'}`,
//                 marginBottom: -2, cursor: 'pointer',
//                 fontFamily: FONT_FAMILY,
//               }}
//             >
//               {tab.name}
//               <span style={{
//                 background: hexToRgba(theme.accent, 0.12), color: theme.accent,
//                 fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999,
//                 marginLeft: 6, fontWeight: 700,
//               }}>{tab.items.length}</span>
//             </button>
//           );
//         })}
//       </div>
//       <AlgorithmicGrid
//         items={activeTab.items}
//         getCellId={(item, idx) => toolIdFor(item, idx)}
//         renderItem={(item) => (
//           <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
//         )}
//       />
//     </div>
//   );
// };


// /* ================================================================
//    GROUP PANEL
//    ================================================================ */

// const GroupPanel = ({
//   group, theme, anchorId, subGroupStyle, variantResolver, cardHeights,
//   categoryArticle, categoryVideosEntry,
//   videosHeading, videosCtaLabel, videosStripTitle,
//   onOpenModal,
// }) => {
//   const hasSub = group.subGroups.length > 0;
//   const hasUngrouped = group.ungrouped.length > 0;

//   const catVideos = categoryVideosEntry && Array.isArray(categoryVideosEntry.videos)
//     ? sanitizeVideos(categoryVideosEntry.videos) : [];
//   const catLayout = sanitizeVideoLayout(categoryVideosEntry && categoryVideosEntry.layout);

//   const showAvBlock = hasArticleContent(categoryArticle) || catVideos.length > 0;

//   return (
//     <section
//       id={anchorId}
//       style={{
//         background: hexToRgba(theme.accent, 0.06),
//         borderRadius: 12, overflow: 'hidden',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
//         marginBottom: '3rem',
//         scrollMarginTop: '100px',
//       }}
//     >
//       <div style={{ background: theme.accent, height: 4 }} />
//       <div style={{ padding: '22px 24px' }}>
//         <div style={{
//           display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
//           gap: '1rem', flexWrap: 'wrap', marginBottom: 18,
//         }}>
//           <div>
//             <div style={{
//               fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
//               letterSpacing: 1, color: theme.accent, marginBottom: 4,
//               fontFamily: FONT_FAMILY,
//             }}>
//               {group.totalCount} {group.totalCount === 1 ? 'tool' : 'tools'}
//               {hasSub && ` · ${group.subGroups.length} ${group.subGroups.length === 1 ? 'sub-group' : 'sub-groups'}`}
//             </div>
//             <div style={{
//               fontSize: '1.5rem', fontWeight: 600, color: theme.text,
//               fontFamily: FONT_FAMILY, letterSpacing: '-0.01em',
//             }}>{group.category}</div>
//           </div>
//         </div>

//         {showAvBlock && (
//           <div style={{ marginBottom: 22 }}>
//             <ArticleVideoBlock
//               article={categoryArticle}
//               videos={catVideos}
//               layout={catLayout}
//               theme={theme}
//               videosHeading={videosHeading}
//               videosCtaLabel={videosCtaLabel}
//               videosStripTitle={videosStripTitle}
//               onOpenModal={onOpenModal}
//               compact
//             />
//           </div>
//         )}

//         {subGroupStyle === 'tabs' && (hasSub || hasUngrouped) ? (
//           <SubGroupTabs
//             ungrouped={group.ungrouped}
//             subGroups={group.subGroups}
//             theme={theme}
//             variantResolver={variantResolver}
//             cardHeights={cardHeights}
//           />
//         ) : (
//           <>
//             {hasUngrouped && (
//               <div>
//                 {hasSub && (
//                   <div style={{
//                     fontSize: '0.7rem', fontWeight: 600, color: theme.textMuted,
//                     letterSpacing: '0.5px', marginBottom: 8,
//                     fontFamily: FONT_FAMILY, textTransform: 'uppercase',
//                   }}>{UNCATEGORIZED_LABEL}</div>
//                 )}
//                 <AlgorithmicGrid
//                   items={group.ungrouped}
//                   getCellId={(item, idx) => toolIdFor(item, idx)}
//                   renderItem={(item) => (
//                     <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
//                   )}
//                 />
//               </div>
//             )}
//             {group.subGroups.map((sg) => (
//               <SubGroupBlock
//                 key={sg.name}
//                 name={sg.name}
//                 parentCategory={group.category}
//                 items={sg.items}
//                 theme={theme}
//                 variantResolver={variantResolver}
//                 cardHeights={cardHeights}
//               />
//             ))}
//           </>
//         )}
//       </div>
//     </section>
//   );
// };


// /* ================================================================
//    QUICK NAV — refactored
//    - dropdown: hierarchical (categories → sub-categories → tools)
//    - pills: tier1 (cat filled + sub-cat outlined), tier2 (every tool)
//    ================================================================ */

// const QuickNav = ({ categories, standaloneItems, dropdownLabel, theme, onJump }) => {
//   const [open, setOpen] = useState(false);

//   const tier1 = useMemo(() => {
//     const out = [];
//     for (const cat of categories) {
//       out.push({ kind: 'cat', id: categoryId(cat.category), label: cat.category });
//       for (const sg of cat.subGroups) {
//         out.push({
//           kind: 'sub',
//           id: subGroupId(cat.category, sg.name),
//           label: sg.name,
//         });
//       }
//     }
//     return out;
//   }, [categories]);

//   const tier2 = useMemo(() => {
//     const out = [];
//     for (const cat of categories) {
//       for (const u of cat.ungrouped) out.push({ id: toolIdFor(u), label: u.title });
//       for (const sg of cat.subGroups) {
//         for (const it of sg.items) out.push({ id: toolIdFor(it), label: it.title });
//       }
//     }
//     for (const it of standaloneItems) out.push({ id: toolIdFor(it), label: it.title });
//     return out;
//   }, [categories, standaloneItems]);

//   const totalToolsCount = useMemo(
//     () => categories.reduce((s, c) => s + c.totalCount, 0) + standaloneItems.length,
//     [categories, standaloneItems]
//   );
//   const totalCatsCount = categories.length;

//   if (tier1.length === 0 && tier2.length === 0) return null;

//   const handleClick = (e, id) => {
//     e.preventDefault();
//     setOpen(false);
//     onJump(id);
//   };

//   return (
//     <nav style={{
//       maxWidth: 1200, margin: '0 auto 32px', padding: '14px 20px',
//       background: theme.bgSubtle, borderRadius: 12,
//       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//           <div
//             style={{ position: 'relative' }}
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <button style={{
//               display: 'flex', alignItems: 'center', gap: 6,
//               padding: '7px 13px', border: 'none', borderRadius: 6,
//               background: open ? theme.accentHover : theme.accent,
//               color: '#fff', fontSize: '0.88rem', fontWeight: 600,
//               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
//               cursor: 'pointer', transition: 'background 0.2s ease',
//             }}>
//               {dropdownLabel}
//               <svg width="11" height="11" viewBox="0 0 12 12" style={{ marginLeft: 4, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
//                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
//               </svg>
//             </button>

//             <div style={{
//               position: 'absolute', top: 'calc(100% + 6px)', left: 0,
//               minWidth: 320, background: '#fff',
//               border: `1px solid ${theme.border}`, borderRadius: 10,
//               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
//               transition: 'all 0.2s ease', zIndex: 100,
//               maxHeight: 460, overflowY: 'auto',
//               opacity: open ? 1 : 0,
//               visibility: open ? 'visible' : 'hidden',
//               transform: open ? 'translateY(0)' : 'translateY(-8px)',
//               textAlign: 'left',
//             }}>
//               {categories.map((cat, ci) => (
//                 <div key={`cat-${ci}`}>
//                   <a
//                     href={`#${categoryId(cat.category)}`}
//                     onClick={(e) => handleClick(e, categoryId(cat.category))}
//                     style={{
//                       display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//                       padding: '10px 16px', textDecoration: 'none',
//                       fontSize: '0.78rem', fontWeight: 700,
//                       textTransform: 'uppercase', letterSpacing: '1px',
//                       color: theme.accent,
//                       borderTop: ci > 0 ? `1px solid ${theme.bgSubtle}` : 'none',
//                       background: '#fff', transition: 'background 0.15s',
//                     }}
//                     onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; }}
//                     onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; }}
//                   >
//                     <span>{cat.category}</span>
//                     <span style={{
//                       background: hexToRgba(theme.accent, 0.12), color: theme.accent,
//                       padding: '2px 8px', borderRadius: 999,
//                       fontSize: '0.65rem', fontWeight: 700, letterSpacing: 0,
//                     }}>{cat.totalCount}</span>
//                   </a>

//                   {cat.ungrouped.map((it, i) => (
//                     <a
//                       key={`u-${i}`}
//                       href={`#${toolIdFor(it, i)}`}
//                       onClick={(e) => handleClick(e, toolIdFor(it, i))}
//                       style={{
//                         display: 'block', padding: '7px 16px 7px 28px',
//                         textDecoration: 'none', color: theme.text,
//                         fontSize: '0.88rem', fontWeight: 500,
//                         transition: 'background 0.15s, color 0.15s',
//                       }}
//                       onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; }}
//                       onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; }}
//                     >{it.title}</a>
//                   ))}

//                   {cat.subGroups.map((sg, si) => (
//                     <div key={`sg-${si}`}>
//                       <a
//                         href={`#${subGroupId(cat.category, sg.name)}`}
//                         onClick={(e) => handleClick(e, subGroupId(cat.category, sg.name))}
//                         style={{
//                           display: 'block', padding: '6px 16px 6px 28px',
//                           textDecoration: 'none', color: theme.textMuted,
//                           fontSize: '0.72rem', fontWeight: 600,
//                           textTransform: 'uppercase', letterSpacing: '0.5px',
//                           transition: 'background 0.15s',
//                         }}
//                         onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; }}
//                         onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
//                       >{sg.name}</a>
//                       {sg.items.map((it, i) => (
//                         <a
//                           key={`sg-${si}-i-${i}`}
//                           href={`#${toolIdFor(it, i)}`}
//                           onClick={(e) => handleClick(e, toolIdFor(it, i))}
//                           style={{
//                             display: 'block', padding: '7px 16px 7px 40px',
//                             textDecoration: 'none', color: theme.text,
//                             fontSize: '0.88rem', fontWeight: 500,
//                             transition: 'background 0.15s, color 0.15s',
//                           }}
//                           onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; }}
//                           onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; }}
//                         >{it.title}</a>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               ))}

//               {standaloneItems.length > 0 && (
//                 <>
//                   <div style={{
//                     padding: '10px 16px',
//                     borderTop: categories.length > 0 ? `1px solid ${theme.bgSubtle}` : 'none',
//                     fontSize: '0.78rem', fontWeight: 700,
//                     textTransform: 'uppercase', letterSpacing: '1px',
//                     color: theme.textMuted,
//                   }}>Other tools</div>
//                   {standaloneItems.map((it, i) => (
//                     <a
//                       key={`st-${i}`}
//                       href={`#${toolIdFor(it, i)}`}
//                       onClick={(e) => handleClick(e, toolIdFor(it, i))}
//                       style={{
//                         display: 'block', padding: '7px 16px 7px 28px',
//                         textDecoration: 'none', color: theme.text,
//                         fontSize: '0.88rem', fontWeight: 500,
//                         transition: 'background 0.15s, color 0.15s',
//                       }}
//                       onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; }}
//                       onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; }}
//                     >{it.title}</a>
//                   ))}
//                 </>
//               )}
//             </div>
//           </div>
//           <span style={{ fontSize: '0.85rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
//         </div>
//         <span style={{
//           fontSize: '0.8rem', color: theme.text,
//           background: theme.chipBg, padding: '5px 13px',
//           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
//         }}>
//           {totalToolsCount} tools{totalCatsCount > 0 && ` · ${totalCatsCount} categories`}
//         </span>
//       </div>

//       {tier1.length > 0 && (
//         <div style={{
//           display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8,
//           padding: '8px 0',
//           borderBottom: tier2.length > 0 ? `1px dashed ${theme.border}` : 'none',
//         }}>
//           <span style={{
//             fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
//             letterSpacing: '1px', color: theme.textMuted,
//             width: 92, flexShrink: 0,
//           }}>Categories</span>
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1 }}>
//             {tier1.map((it, i) => (
//               <a
//                 key={i}
//                 href={`#${it.id}`}
//                 onClick={(e) => handleClick(e, it.id)}
//                 style={
//                   it.kind === 'cat'
//                     ? {
//                         background: theme.accent, color: '#fff',
//                         padding: '7px 16px', borderRadius: 22,
//                         fontSize: '0.85rem', fontWeight: 600,
//                         textDecoration: 'none', whiteSpace: 'nowrap',
//                         transition: 'all 0.2s',
//                       }
//                     : {
//                         background: 'transparent', color: theme.accent,
//                         border: `1.5px solid ${theme.accent}`,
//                         padding: '5px 13px', borderRadius: 22,
//                         fontSize: '0.78rem', fontWeight: 600,
//                         textDecoration: 'none', whiteSpace: 'nowrap',
//                         transition: 'all 0.2s',
//                       }
//                 }
//                 onMouseEnter={(e) => {
//                   if (it.kind === 'cat') {
//                     e.currentTarget.style.background = theme.accentHover;
//                     e.currentTarget.style.transform = 'translateY(-1px)';
//                   } else {
//                     e.currentTarget.style.background = hexToRgba(theme.accent, 0.08);
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (it.kind === 'cat') {
//                     e.currentTarget.style.background = theme.accent;
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   } else {
//                     e.currentTarget.style.background = 'transparent';
//                   }
//                 }}
//               >{it.label}</a>
//             ))}
//           </div>
//         </div>
//       )}

//       {tier2.length > 0 && (
//         <div style={{
//           display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8,
//           padding: '8px 0',
//         }}>
//           <span style={{
//             fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
//             letterSpacing: '1px', color: theme.textMuted,
//             width: 92, flexShrink: 0,
//           }}>Tools</span>
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1 }}>
//             {tier2.map((it, i) => (
//               <a
//                 key={i}
//                 href={`#${it.id}`}
//                 onClick={(e) => handleClick(e, it.id)}
//                 style={{
//                   background: hexToRgba(theme.accent, 0.1),
//                   color: theme.accent,
//                   padding: '6px 14px', borderRadius: 22,
//                   fontSize: '0.8rem', fontWeight: 500,
//                   textDecoration: 'none', whiteSpace: 'nowrap',
//                   border: '1px solid transparent',
//                   transition: 'all 0.2s',
//                   fontFamily: FONT_FAMILY,
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = theme.accent;
//                   e.currentTarget.style.color = '#fff';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = hexToRgba(theme.accent, 0.1);
//                   e.currentTarget.style.color = theme.accent;
//                 }}
//               >{generateShortTitle(it.label)}</a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };


// /* ================================================================
//    TOOLS HEADER (reduced fonts)
//    ================================================================ */

// const ToolsHeader = ({ totalCount, categoriesCount, intro, icon, article, theme }) => {
//   if (!totalCount) return null;
//   return (
//     <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
//       <div style={{
//         background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
//         border: `2px solid ${theme.border}`,
//         padding: '24px 28px',
//         borderRadius: article ? '14px 14px 0 0' : 14,
//         borderBottom: article ? 'none' : `2px solid ${theme.border}`,
//       }}>
//         {intro && (
//           <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 16 }}>
//             <div style={{
//               width: 52, height: 52, borderRadius: 12,
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               fontSize: '1.5rem', flexShrink: 0,
//               background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
//             }}>{icon}</div>
//             <div style={{ flex: 1 }}>
//               {intro.title && <h2 style={{
//                 fontSize: '1.25rem', fontWeight: 600, color: theme.text,
//                 fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
//                 margin: '0 0 6px 0', lineHeight: 1.3,
//               }}>{intro.title}</h2>}
//               {intro.description && <p style={{
//                 fontSize: '0.95rem', color: theme.textSecondary,
//                 fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
//                 lineHeight: 1.55, margin: 0,
//               }}>{intro.description}</p>}
//             </div>
//           </div>
//         )}
//         {intro && intro.tip && (
//           <div style={{
//             background: theme.tipBg,
//             border: `1px solid ${theme.border}`,
//             borderLeft: `4px solid ${theme.accent}`,
//             borderRadius: 8, padding: '12px 18px', marginBottom: 16,
//             display: 'flex', alignItems: 'center', gap: 12,
//             fontSize: '0.9rem', fontFamily: FONT_FAMILY, fontWeight: 400,
//             letterSpacing: '0.005em', color: theme.tipText,
//           }}>
//             <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>💡</span>
//             <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
//           </div>
//         )}
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
//           <div style={{ display: 'flex', gap: 22 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
//               <span style={{ fontWeight: 700, fontSize: '1.15rem', color: theme.accent }}>{totalCount}</span>
//               <span>Tools</span>
//             </div>
//             {categoriesCount > 0 && (
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
//                 <span style={{ fontWeight: 700, fontSize: '1.15rem', color: theme.accent }}>{categoriesCount}</span>
//                 <span>Categories</span>
//               </div>
//             )}
//             <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
//               <span style={{ fontWeight: 700, fontSize: '1.15rem', color: theme.accent }}>100%</span>
//               <span>Free</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {article && (
//         <div style={{
//           background: theme.bgMuted,
//           border: `2px solid ${theme.border}`,
//           borderTop: 'none',
//           borderRadius: '0 0 14px 14px',
//           padding: 20,
//         }}>
//           <div style={{
//             background: theme.bgSubtle,
//             border: `2px solid ${theme.borderStrong}`,
//             borderRadius: 12,
//             padding: '24px 28px',
//           }}>
//             <div style={{
//               fontSize: '1rem',
//               fontFamily: 'Georgia, "Times New Roman", serif',
//               fontWeight: 500, color: theme.text,
//               lineHeight: 1.85, letterSpacing: '0.01em',
//             }}>
//               {processContent(article)}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// /* ================================================================
//    SIDEBAR
//    ================================================================ */

// const SidebarIcon = ({ icon, size = 16, color = 'currentColor' }) => {
//   if (!icon) return null;
//   if (typeof icon === 'string') {
//     if (icon.trim().startsWith('<svg')) {
//       return <span style={{ width: size, height: size, display: 'inline-flex' }} dangerouslySetInnerHTML={{ __html: icon }} />;
//     }
//     return <span style={{ fontSize: size, color, lineHeight: 1 }}>{icon}</span>;
//   }
//   return null;
// };

// const SidebarLink = ({ link, theme }) => {
//   const [h, setH] = useState(false);
//   return (
//     <Link
//       href={link.href || '#'}
//       style={{
//         display: 'flex', alignItems: 'center', gap: 10,
//         padding: '9px 20px', fontSize: 14, fontWeight: 500,
//         color: h ? theme.sidebarText : theme.sidebarTextMuted,
//         textDecoration: 'none',
//         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
//         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
//         paddingLeft: h ? 17 : 20, transition: 'all 0.15s', lineHeight: 1.4,
//       }}
//       onMouseEnter={() => setH(true)}
//       onMouseLeave={() => setH(false)}
//     >
//       {link.icon && (
//         <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//           <SidebarIcon icon={link.icon} size={15} color={h ? theme.sidebarText : theme.sidebarTextMuted} />
//         </span>
//       )}
//       <span style={{ flex: 1, minWidth: 0 }}>{link.label}</span>
//     </Link>
//   );
// };

// const SidebarGroup = ({ group, theme, isFirst }) => (
//   <div style={{ marginTop: isFirst ? 0 : 12 }}>
//     {!isFirst && <div style={{ height: 1, background: theme.sidebarDivider, margin: '0 20px 12px' }} />}
//     {(group.title || group.icon) && (
//       <div style={{
//         display: 'flex', alignItems: 'center', gap: 8,
//         padding: '8px 20px',
//         fontSize: 11, fontWeight: 700,
//         textTransform: 'uppercase', letterSpacing: 1.2,
//         color: theme.sidebarTextMuted,
//       }}>
//         {group.icon && <SidebarIcon icon={group.icon} size={14} color={theme.sidebarTextMuted} />}
//         {group.title && <span>{group.title}</span>}
//       </div>
//     )}
//     {(group.links || []).map((lnk, i) => (
//       <SidebarLink key={i} link={lnk} theme={theme} />
//     ))}
//   </div>
// );

// const SidebarDot = ({ label, href, theme }) => {
//   const [h, setH] = useState(false);
//   return (
//     <Link
//       href={href || '#'}
//       style={{ position: 'relative', display: 'inline-block' }}
//       onMouseEnter={() => setH(true)}
//       onMouseLeave={() => setH(false)}
//     >
//       <span style={{
//         display: 'block', width: 8, height: 8, borderRadius: '50%',
//         background: h ? theme.sidebarText : theme.sidebarTextMuted,
//         transition: 'all 0.2s', transform: h ? 'scale(1.5)' : 'scale(1)',
//       }} />
//       <span style={{
//         position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)',
//         background: theme.text, color: '#fff', fontSize: 13, padding: '4px 10px',
//         borderRadius: 4, whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none',
//         transition: 'opacity 0.15s', zIndex: 10,
//       }}>{label}</span>
//     </Link>
//   );
// };

// const Sidebar = ({ groups, brandName, brandSub, open, onToggle, theme }) => {
//   const ref = useRef(null);
//   useEffect(() => {
//     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
//     document.addEventListener('click', handler);
//     return () => document.removeEventListener('click', handler);
//   }, [open, onToggle]);

//   const flatLinks = useMemo(() => groups.flatMap((g) => g.links || []), [groups]);

//   return (
//     <aside
//       ref={ref}
//       style={{
//         position: 'fixed', left: 0, top: NAVBAR_HEIGHT,
//         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
//         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
//         background: theme.sidebarBg, zIndex: 90,
//         display: 'flex', flexDirection: 'column',
//         transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
//         overflow: 'hidden',
//         boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
//         fontFamily: FONT_FAMILY,
//       }}
//     >
//       <style dangerouslySetInnerHTML={{ __html: `.vtp-sb-nav::-webkit-scrollbar { display: none; }` }} />
//       <button
//         onClick={() => onToggle(!open)}
//         aria-label="Toggle sidebar"
//         style={{
//           width: '100%', height: 44,
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           background: 'none', border: 'none', cursor: 'pointer',
//           color: theme.sidebarTextMuted, flexShrink: 0,
//           borderBottom: `1px solid ${theme.sidebarDivider}`,
//         }}
//         onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
//         onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
//       >
//         <svg style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
//           viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <polyline points="9 18 15 12 9 6" />
//         </svg>
//       </button>
//       {(brandName || brandSub) && (
//         <div style={{
//           padding: '14px 20px 10px',
//           opacity: open ? 1 : 0,
//           transition: 'opacity 0.15s',
//           transitionDelay: open ? '0.1s' : '0s',
//           whiteSpace: 'nowrap',
//         }}>
//           {brandName && <span style={{ fontSize: 18, fontWeight: 700, color: theme.sidebarText, display: 'block', marginBottom: 2 }}>{brandName}</span>}
//           {brandSub && <span style={{ fontSize: 12, color: theme.sidebarTextMuted, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
//         </div>
//       )}
//       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 0' }}>
//         {flatLinks.slice(0, 12).map((lnk, i) => (
//           <SidebarDot key={i} label={lnk.label} href={lnk.href} theme={theme} />
//         ))}
//       </div>
//       <nav
//         className="vtp-sb-nav"
//         style={{
//           display: open ? 'flex' : 'none',
//           flexDirection: 'column',
//           padding: '8px 0', flex: 1,
//           overflowY: 'auto', overflowX: 'hidden',
//           scrollbarWidth: 'none', msOverflowStyle: 'none',
//         }}
//       >
//         {groups.map((group, gi) => (
//           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
//         ))}
//       </nav>
//     </aside>
//   );
// };

// const buildAutoSidebarGroups = ({ categories, standalone }) => {
//   const groups = [];
//   for (const cat of categories) {
//     const links = [];
//     for (const u of cat.ungrouped) links.push({ label: u.title, href: u.href });
//     for (const sg of cat.subGroups) {
//       for (const it of sg.items) links.push({ label: it.title, href: it.href });
//     }
//     if (links.length > 0) groups.push({ title: cat.category, links });
//   }
//   if (standalone.length > 0) {
//     groups.push({
//       title: 'Other tools',
//       links: standalone.map((t) => ({ label: t.title, href: t.href })),
//     });
//   }
//   return groups;
// };


// /* ================================================================
//    MAIN
//    ================================================================ */

// const VisualToolsPage = ({
//   tools,
//   pageTitle = 'Visual Tools',
//   intro = null,
//   article: legacyArticleString = null,
//   icon = '🔍',
//   dropdownLabel = 'All Tools',
//   bodyOffsetTop = 60,

//   theme = 'deepBlue',
//   themeOverrides = null,

//   sidebar = false,
//   sidebarBrandName = null,
//   sidebarBrandSub = null,

//   customItems = null,

//   miniCardVariant = 'v1',
//   bigCardVariant = 'b1',
//   groupVariants = null,

//   subGroupStyle = 'default',
//   cardHeights = null,

//   pageArticle = null,
//   videos = null,
//   videoLayout = 'beside',
//   videosHeading = 'Walkthroughs',
//   videosCtaLabel = 'Watch the walkthrough',
//   videosStripTitle = 'Watch a quick intro for any topic',

//   categoryArticles = null,
//   categoryVideos = null,
// }) => {
//   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);
//   const isMobile = useIsMobile();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [modalVideo, setModalVideo] = useState(null);

//   const mergedCardHeights = useMemo(
//     () => ({ ...DEFAULT_CARD_HEIGHTS, ...(cardHeights || {}) }),
//     [cardHeights]
//   );

//   const flatList = useMemo(() => {
//     const base = flattenInput(tools);
//     return mergeWithCustomItems(base, customItems);
//   }, [tools, customItems]);

//   const grouped = useMemo(() => groupItems(flatList), [flatList]);

//   const miniVariantFor = (item) => {
//     if (item && item.cardVariant) return item.cardVariant;
//     if (item && item.category && groupVariants && groupVariants[item.category]) {
//       return groupVariants[item.category];
//     }
//     return miniCardVariant;
//   };
//   const bigVariantFor = (item) => {
//     if (item && item.cardVariant) return item.cardVariant;
//     return bigCardVariant;
//   };

//   const totalCount = useMemo(
//     () => grouped.categories.reduce((s, c) => s + c.totalCount, 0) + grouped.standalone.length,
//     [grouped]
//   );

//   const handleJump = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
//     window.scrollTo({ top: y, behavior: 'smooth' });
//   };

//   const sidebarGroups = useMemo(() => {
//     if (!sidebar) return null;
//     if (Array.isArray(sidebar)) return sidebar;
//     if (sidebar === true) return buildAutoSidebarGroups(grouped);
//     return null;
//   }, [sidebar, grouped]);

//   const showSidebar = !isMobile && !!sidebarGroups && sidebarGroups.length > 0;
//   const contentMarginLeft = showSidebar
//     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
//     : 0;

//   const pageVideosClean = sanitizeVideos(videos);
//   const showPageAvBlock = hasArticleContent(pageArticle) || pageVideosClean.length > 0;

//   return (
//     <>
//       <GlobalStyles />

//       {showSidebar && (
//         <Sidebar
//           groups={sidebarGroups}
//           brandName={sidebarBrandName || pageTitle}
//           brandSub={sidebarBrandSub}
//           open={sidebarOpen}
//           onToggle={setSidebarOpen}
//           theme={t}
//         />
//       )}

//       <div style={{
//         marginLeft: contentMarginLeft,
//         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
//       }}>
//         <h1 style={{
//           fontFamily: SERIF_FAMILY,
//           fontSize: '2rem', fontWeight: 700,
//           color: t.pageTitle, textAlign: 'center',
//           margin: '0 0 20px',
//         }}>
//           {pageTitle}
//         </h1>

//         <QuickNav
//           categories={grouped.categories}
//           standaloneItems={grouped.standalone}
//           dropdownLabel={dropdownLabel}
//           theme={t}
//           onJump={handleJump}
//         />

//         <ToolsHeader
//           totalCount={totalCount}
//           categoriesCount={grouped.categories.length}
//           intro={intro}
//           icon={icon}
//           article={legacyArticleString}
//           theme={t}
//         />

//         {showPageAvBlock && (
//           <div style={{ width: '90%', maxWidth: 1200, margin: '32px auto 0', padding: '0 1rem' }}>
//             <ArticleVideoBlock
//               article={pageArticle}
//               videos={pageVideosClean}
//               layout={videoLayout}
//               theme={t}
//               videosHeading={videosHeading}
//               videosCtaLabel={videosCtaLabel}
//               videosStripTitle={videosStripTitle}
//               onOpenModal={setModalVideo}
//             />
//           </div>
//         )}

//         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
//           {grouped.categories.map((group) => {
//             const catName = group.category;
//             const catArt = (categoryArticles && categoryArticles[catName]) || null;
//             const catVidEntry = (categoryVideos && categoryVideos[catName]) || null;
//             return (
//               <div key={catName} style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}>
//                 <GroupPanel
//                   group={group}
//                   theme={t}
//                   anchorId={categoryId(catName)}
//                   subGroupStyle={subGroupStyle}
//                   variantResolver={miniVariantFor}
//                   cardHeights={mergedCardHeights}
//                   categoryArticle={catArt}
//                   categoryVideosEntry={catVidEntry}
//                   videosHeading={videosHeading}
//                   videosCtaLabel={videosCtaLabel}
//                   videosStripTitle={videosStripTitle}
//                   onOpenModal={setModalVideo}
//                 />
//               </div>
//             );
//           })}

//           {grouped.standalone.length > 0 && (
//             <section
//               id="standalone"
//               style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}
//             >
//               <AlgorithmicGrid
//                 items={grouped.standalone}
//                 getCellId={(item, idx) => toolIdFor(item, idx)}
//                 renderItem={(item) => (
//                   <BigCard item={item} theme={t} variant={bigVariantFor(item)} cardHeights={mergedCardHeights} />
//                 )}
//               />
//             </section>
//           )}
//         </div>

//         <div style={{ height: 60 }} />
//       </div>

//       <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
//     </>
//   );
// };

// export default VisualToolsPage;


// // // seoData: {
// // //   // existing
// // //   title, description, name, url, image, imageAlt,

// // //   // new
// // //   hubDescription: '...',     // long-form prose for hub cards (preferred over description)
// // //   category: 'Functions',     // groups the tool into a category panel
// // //   subCategory: 'Graphs',     // optional, sub-groups inside the category
// // //   cardVariant: 'v1',         // optional, 'v1'|'v2'|'v3'|'v4'|'b1'|'b2'|'b3'
// // //   icon: '∿',                 // optional, emoji/short string for V3/B3 cards
// // //   formula: 'sin^2θ + cos^2θ = 1',  // optional, required for V4
// // // }



/**
 * VisualToolsPage v20 — file 3 of 3 (VisualToolsPage.jsx)
 *
 * Changes vs v19:
 *   - QuickNav rewritten: tab strip (one per category) + panel with
 *     sub-category cards containing vertical tool lists.
 *     Replaces the old dropdown + tier1/tier2 pill mess.
 *   - dropdownLabel prop is accepted for backwards compatibility but
 *     no longer used (no dropdown trigger).
 *
 * Everything else unchanged.
 */

import React, { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { processContent } from '@/app/utils/contentProcessor';
import { getTheme } from './visualToolsPageThemes';

import {
  FONT_FAMILY, SERIF_FAMILY,
  NAVBAR_HEIGHT, SIDEBAR_COLLAPSED, SIDEBAR_EXPANDED, MOBILE_BREAKPOINT,
  UNCATEGORIZED_LABEL, DEFAULT_CARD_HEIGHTS,
  hexToRgba, generateShortTitle, slugify,
  toolIdFor, subGroupId, categoryId,
  hasArticleContent, sanitizeVideos, sanitizeVideoLayout,
  useIsMobile,
  MiniCard, BigCard, AlgorithmicGrid,
} from './VisualToolsCards';

import { ArticleVideoBlock, VideoModal } from './VisualToolsBlocks';


/* ================================================================
   GLOBAL STYLES
   ================================================================ */

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .vtp-desc-scroll::-webkit-scrollbar { display: none; width: 0; height: 0; }
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      .vtp-algo-cell { grid-column: 1 / -1 !important; }
      .vtp-beside-grid { grid-template-columns: 1fr !important; }
      .vtp-beside-vid { position: static !important; }
      .vtp-qn-panel { padding: 16px !important; }
      .vtp-qn-tab { padding: 10px 16px !important; font-size: 0.92rem !important; }
    }
    .vtp-qn-tool-link:hover {
      background: var(--vtp-qn-tool-hover-bg) !important;
      color: var(--vtp-qn-tool-hover-color) !important;
      padding-left: 14px !important;
    }
  ` }} />
);


/* ================================================================
   INPUT NORMALIZATION
   ================================================================ */

const flattenInput = (input) => {
  if (Array.isArray(input)) return input;
  if (input && Array.isArray(input.items)) return input.items;
  if (input && Array.isArray(input.children)) {
    const out = [];
    for (const child of input.children) {
      if (child && child.hasViews && Array.isArray(child.views) && child.views.length > 0) {
        const inferredCat = child.category || child.title || null;
        for (const v of child.views) out.push({ ...v, category: v.category || inferredCat });
      } else if (child) {
        out.push(child);
      }
    }
    return out;
  }
  return [];
};

const mergeWithCustomItems = (autoList, customItems) => {
  if (!Array.isArray(customItems) || customItems.length === 0) return autoList;
  const decorated = customItems.map((item, i) => {
    const { at, ...rest } = item;
    let pos;
    if (at === 'start') pos = 0;
    else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
    else if (typeof at === 'number') pos = at;
    else pos = Number.POSITIVE_INFINITY;
    return { item: rest, pos, order: i };
  });
  decorated.sort((a, b) => {
    if (a.pos !== b.pos) return b.pos - a.pos;
    return b.order - a.order;
  });
  const result = [...autoList];
  decorated.forEach(({ item, pos }) => {
    if (pos === Number.POSITIVE_INFINITY) result.push(item);
    else {
      const clamped = Math.max(0, Math.min(pos, result.length));
      result.splice(clamped, 0, item);
    }
  });
  return result;
};

const groupItems = (flatList) => {
  const standalone = [];
  const catMap = new Map();
  const catOrder = [];

  for (const item of flatList) {
    if (!item) continue;
    if (!item.category) { standalone.push(item); continue; }
    if (!catMap.has(item.category)) {
      catMap.set(item.category, { ungrouped: [], subMap: new Map(), subOrder: [] });
      catOrder.push(item.category);
    }
    const cat = catMap.get(item.category);
    if (!item.subCategory) cat.ungrouped.push(item);
    else {
      if (!cat.subMap.has(item.subCategory)) {
        cat.subMap.set(item.subCategory, []);
        cat.subOrder.push(item.subCategory);
      }
      cat.subMap.get(item.subCategory).push(item);
    }
  }

  const categories = catOrder.map((catName) => {
    const cat = catMap.get(catName);
    const subGroups = cat.subOrder.map((sub) => ({ name: sub, items: cat.subMap.get(sub) }));
    const totalCount = cat.ungrouped.length + subGroups.reduce((s, g) => s + g.items.length, 0);
    return { category: catName, ungrouped: cat.ungrouped, subGroups, totalCount };
  });

  return { categories, standalone };
};


/* ================================================================
   SUB-GROUP COMPONENTS
   ================================================================ */

const SubGroupBlock = ({ name, parentCategory, items, theme, variantResolver, cardHeights }) => (
  <div
    id={subGroupId(parentCategory, name)}
    style={{
      paddingLeft: 16,
      borderLeft: `3px solid ${theme.accent}`,
      marginTop: 24,
      scrollMarginTop: '100px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <span style={{
        background: theme.accent, color: '#fff',
        padding: '4px 14px', borderRadius: 999,
        fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.3px',
        fontFamily: FONT_FAMILY,
      }}>{name}</span>
      <span style={{ fontSize: '0.78rem', color: theme.textMuted, fontFamily: FONT_FAMILY }}>
        {items.length} {items.length === 1 ? 'tool' : 'tools'}
      </span>
    </div>
    <AlgorithmicGrid
      items={items}
      getCellId={(item, idx) => toolIdFor(item, idx)}
      renderItem={(item) => (
        <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
      )}
    />
  </div>
);

const SubGroupTabs = ({ ungrouped, subGroups, theme, variantResolver, cardHeights }) => {
  const tabs = [
    ...(ungrouped.length > 0 ? [{ name: UNCATEGORIZED_LABEL, items: ungrouped }] : []),
    ...subGroups,
  ];
  const [active, setActive] = useState(0);
  if (tabs.length === 0) return null;
  const activeTab = tabs[Math.min(active, tabs.length - 1)];
  return (
    <div>
      <div style={{
        display: 'flex', gap: 4, flexWrap: 'wrap',
        borderBottom: `2px solid ${hexToRgba(theme.accent, 0.15)}`,
        marginBottom: 18,
      }}>
        {tabs.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={i} onClick={() => setActive(i)}
              style={{
                padding: '8px 16px', fontSize: '0.9rem', fontWeight: 600,
                background: 'transparent',
                color: isActive ? theme.accent : theme.textMuted,
                border: 'none',
                borderBottom: `2px solid ${isActive ? theme.accent : 'transparent'}`,
                marginBottom: -2, cursor: 'pointer',
                fontFamily: FONT_FAMILY,
              }}
            >
              {tab.name}
              <span style={{
                background: hexToRgba(theme.accent, 0.12), color: theme.accent,
                fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999,
                marginLeft: 6, fontWeight: 700,
              }}>{tab.items.length}</span>
            </button>
          );
        })}
      </div>
      <AlgorithmicGrid
        items={activeTab.items}
        getCellId={(item, idx) => toolIdFor(item, idx)}
        renderItem={(item) => (
          <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
        )}
      />
    </div>
  );
};


/* ================================================================
   GROUP PANEL
   ================================================================ */

const GroupPanel = ({
  group, theme, anchorId, subGroupStyle, variantResolver, cardHeights,
  categoryArticle, categoryVideosEntry,
  videosHeading, videosCtaLabel, videosStripTitle,
  onOpenModal,
}) => {
  const hasSub = group.subGroups.length > 0;
  const hasUngrouped = group.ungrouped.length > 0;

  const catVideos = categoryVideosEntry && Array.isArray(categoryVideosEntry.videos)
    ? sanitizeVideos(categoryVideosEntry.videos) : [];
  const catLayout = sanitizeVideoLayout(categoryVideosEntry && categoryVideosEntry.layout);

  const showAvBlock = hasArticleContent(categoryArticle) || catVideos.length > 0;

  return (
    <section
      id={anchorId}
      style={{
        background: hexToRgba(theme.accent, 0.06),
        borderRadius: 12, overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        marginBottom: '3rem',
        scrollMarginTop: '100px',
      }}
    >
      <div style={{ background: theme.accent, height: 4 }} />
      <div style={{ padding: '22px 24px' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          gap: '1rem', flexWrap: 'wrap', marginBottom: 18,
        }}>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: 1, color: theme.accent, marginBottom: 4,
              fontFamily: FONT_FAMILY,
            }}>
              {group.totalCount} {group.totalCount === 1 ? 'tool' : 'tools'}
              {hasSub && ` · ${group.subGroups.length} ${group.subGroups.length === 1 ? 'sub-group' : 'sub-groups'}`}
            </div>
            <div style={{
              fontSize: '1.5rem', fontWeight: 600, color: theme.text,
              fontFamily: FONT_FAMILY, letterSpacing: '-0.01em',
            }}>{group.category}</div>
          </div>
        </div>

        {showAvBlock && (
          <div style={{ marginBottom: 22 }}>
            <ArticleVideoBlock
              article={categoryArticle}
              videos={catVideos}
              layout={catLayout}
              theme={theme}
              videosHeading={videosHeading}
              videosCtaLabel={videosCtaLabel}
              videosStripTitle={videosStripTitle}
              onOpenModal={onOpenModal}
              compact
            />
          </div>
        )}

        {subGroupStyle === 'tabs' && (hasSub || hasUngrouped) ? (
          <SubGroupTabs
            ungrouped={group.ungrouped}
            subGroups={group.subGroups}
            theme={theme}
            variantResolver={variantResolver}
            cardHeights={cardHeights}
          />
        ) : (
          <>
            {hasUngrouped && (
              <div>
                {hasSub && (
                  <div style={{
                    fontSize: '0.7rem', fontWeight: 600, color: theme.textMuted,
                    letterSpacing: '0.5px', marginBottom: 8,
                    fontFamily: FONT_FAMILY, textTransform: 'uppercase',
                  }}>{UNCATEGORIZED_LABEL}</div>
                )}
                <AlgorithmicGrid
                  items={group.ungrouped}
                  getCellId={(item, idx) => toolIdFor(item, idx)}
                  renderItem={(item) => (
                    <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
                  )}
                />
              </div>
            )}
            {group.subGroups.map((sg) => (
              <SubGroupBlock
                key={sg.name}
                name={sg.name}
                parentCategory={group.category}
                items={sg.items}
                theme={theme}
                variantResolver={variantResolver}
                cardHeights={cardHeights}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};


/* ================================================================
   QUICK NAV — v20 hybrid: tabs + sub-card lists

   Structure:
     [stats row]
     [tabs row — one per category, plus optional 'Other tools']
     [panel — auto-fit grid of sub-cards; each card is a labeled
              vertical list of tool links]

   - Tab click: switches active panel (no scroll).
   - Sub-card name click: scrolls to that sub-group anchor.
   - Tool link click: scrolls to that tool anchor.
   ================================================================ */

const QuickNav = ({ categories, standaloneItems, dropdownLabel, theme, onJump }) => {
  // build tab list: one tab per category, plus standalone if present
  const tabs = useMemo(() => {
    const out = categories.map((cat, i) => ({
      kind: 'cat',
      key: `cat-${i}`,
      label: cat.category,
      cat,
    }));
    if (standaloneItems.length > 0) {
      out.push({
        kind: 'standalone',
        key: 'standalone',
        label: 'Other tools',
      });
    }
    return out;
  }, [categories, standaloneItems]);

  const [activeKey, setActiveKey] = useState(tabs[0] ? tabs[0].key : null);

  // if the active key disappears (e.g. data change), fall back to first
  useEffect(() => {
    if (!tabs.find((t) => t.key === activeKey) && tabs[0]) {
      setActiveKey(tabs[0].key);
    }
  }, [tabs, activeKey]);

  const totalToolsCount = useMemo(
    () => categories.reduce((s, c) => s + c.totalCount, 0) + standaloneItems.length,
    [categories, standaloneItems]
  );
  const totalCatsCount = categories.length;

  if (tabs.length === 0) return null;

  const activeTab = tabs.find((t) => t.key === activeKey) || tabs[0];

  // colors derived from theme
  const tabInactiveBorder = hexToRgba(theme.accent, 0.25);
  const tabActiveBorder = hexToRgba(theme.accent, 0.45);
  const tabActiveBg = hexToRgba(theme.accent, 0.15);
  const panelBg = hexToRgba(theme.accent, 0.06);
  const subCardBorder = hexToRgba(theme.accent, 0.2);
  const subCardDivider = hexToRgba(theme.accent, 0.2);
  const toolHoverBg = hexToRgba(theme.accent, 0.15);

  const renderSubCard = (name, items, anchorId, key, single) => (
    <div
      key={key}
      style={{
        background: '#ffffff',
        border: `1px solid ${subCardBorder}`,
        borderRadius: 10,
        padding: '16px 18px',
        boxShadow: `0 1px 3px ${hexToRgba(theme.accent, 0.05)}`,
        gridColumn: single ? '1 / -1' : undefined,
      }}
    >
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 12, paddingBottom: 10,
          borderBottom: `2px solid ${subCardDivider}`,
        }}
      >
        {name ? (
          <a
            href={`#${anchorId}`}
            onClick={(e) => { e.preventDefault(); onJump(anchorId); }}
            style={{
              fontSize: '0.82rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '1.2px',
              color: theme.accent, textDecoration: 'none',
              fontFamily: FONT_FAMILY,
            }}
          >{name}</a>
        ) : <span />}
        <span style={{
          fontSize: '0.7rem', fontWeight: 600,
          color: theme.textMuted, fontFamily: FONT_FAMILY,
        }}>
          {items.length} {items.length === 1 ? 'tool' : 'tools'}
        </span>
      </div>
      <ul
        style={{
          listStyle: 'none', padding: 0, margin: 0,
          ...(single ? {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 2,
          } : {}),
        }}
      >
        {items.map((it, i) => {
          const id = toolIdFor(it, i);
          return (
            <li key={i}>
              <a
                className="vtp-qn-tool-link"
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); onJump(id); }}
                style={{
                  display: 'block',
                  padding: '7px 10px',
                  color: theme.text,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderRadius: 6,
                  fontFamily: FONT_FAMILY,
                  transition: 'background 0.12s, color 0.12s, padding-left 0.12s',
                }}
              >{it.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const renderPanelContent = () => {
    if (activeTab.kind === 'standalone') {
      return renderSubCard(null, standaloneItems, 'standalone', 'standalone-card', true);
    }
    const cat = activeTab.cat;
    const groups = [
      ...(cat.ungrouped.length > 0
        ? [{ name: UNCATEGORIZED_LABEL, items: cat.ungrouped, anchorId: categoryId(cat.category), key: 'ungrouped' }]
        : []),
      ...cat.subGroups.map((sg, i) => ({
        name: sg.name,
        items: sg.items,
        anchorId: subGroupId(cat.category, sg.name),
        key: `sg-${i}`,
      })),
    ];
    const single = groups.length === 1;
    return groups.map((g) => renderSubCard(g.name, g.items, g.anchorId, g.key, single));
  };

  return (
    <nav
      style={{
        maxWidth: 1200, margin: '0 auto 32px',
        padding: '22px 24px',
        background: '#ffffff',
        border: `2px solid ${tabInactiveBorder}`,
        borderRadius: 14,
        boxShadow: `0 2px 12px ${hexToRgba(theme.accent, 0.05)}`,
        fontFamily: FONT_FAMILY,
        '--vtp-qn-tool-hover-bg': toolHoverBg,
        '--vtp-qn-tool-hover-color': theme.accent,
      }}
    >
      {/* stats row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12, marginBottom: 18,
      }}>
        <span style={{
          fontSize: '0.7rem', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '1.5px',
          color: theme.textMuted,
        }}>Browse by category</span>
        <span style={{
          background: tabActiveBg, color: theme.accent,
          padding: '5px 14px', borderRadius: 999,
          fontSize: '0.8rem', fontWeight: 700,
        }}>
          {totalToolsCount} tools{totalCatsCount > 0 && ` · ${totalCatsCount} categories`}
        </span>
      </div>

      {/* tabs */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeKey;
          return (
            <button
              key={tab.key}
              className="vtp-qn-tab"
              onClick={() => setActiveKey(tab.key)}
              style={{
                background: isActive ? tabActiveBg : '#ffffff',
                color: isActive ? theme.accent : theme.text,
                border: `2px solid ${isActive ? tabActiveBorder : tabInactiveBorder}`,
                borderBottom: isActive ? `2px solid ${tabActiveBg}` : 'none',
                padding: '12px 24px',
                fontFamily: FONT_FAMILY,
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                borderRadius: '10px 10px 0 0',
                position: 'relative',
                bottom: -2,
                transition: 'background 0.15s, color 0.15s',
                zIndex: isActive ? 2 : 1,
              }}
            >{tab.label}</button>
          );
        })}
      </div>

      {/* panel */}
      <div
        className="vtp-qn-panel"
        style={{
          background: panelBg,
          border: `2px solid ${tabActiveBorder}`,
          borderRadius: '0 12px 12px 12px',
          padding: 24,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 18,
        }}
      >
        {renderPanelContent()}
      </div>
    </nav>
  );
};


/* ================================================================
   TOOLS HEADER (reduced fonts)
   ================================================================ */

const ToolsHeader = ({ totalCount, categoriesCount, intro, icon, article, theme }) => {
  if (!totalCount) return null;
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
      <div style={{
        background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
        border: `2px solid ${theme.border}`,
        padding: '24px 28px',
        borderRadius: article ? '14px 14px 0 0' : 14,
        borderBottom: article ? 'none' : `2px solid ${theme.border}`,
      }}>
        {intro && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 16 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', flexShrink: 0,
              background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
            }}>{icon}</div>
            <div style={{ flex: 1 }}>
              {intro.title && <h2 style={{
                fontSize: '1.25rem', fontWeight: 600, color: theme.text,
                fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
                margin: '0 0 6px 0', lineHeight: 1.3,
              }}>{intro.title}</h2>}
              {intro.description && <p style={{
                fontSize: '0.95rem', color: theme.textSecondary,
                fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
                lineHeight: 1.55, margin: 0,
              }}>{intro.description}</p>}
            </div>
          </div>
        )}
        {intro && intro.tip && (
          <div style={{
            background: theme.tipBg,
            border: `1px solid ${theme.border}`,
            borderLeft: `4px solid ${theme.accent}`,
            borderRadius: 8, padding: '12px 18px', marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 12,
            fontSize: '0.9rem', fontFamily: FONT_FAMILY, fontWeight: 400,
            letterSpacing: '0.005em', color: theme.tipText,
          }}>
            <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>💡</span>
            <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
          <div style={{ display: 'flex', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
              <span style={{ fontWeight: 700, fontSize: '1.15rem', color: theme.accent }}>{totalCount}</span>
              <span>Tools</span>
            </div>
            {categoriesCount > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
                <span style={{ fontWeight: 700, fontSize: '1.15rem', color: theme.accent }}>{categoriesCount}</span>
                <span>Categories</span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
              <span style={{ fontWeight: 700, fontSize: '1.15rem', color: theme.accent }}>100%</span>
              <span>Free</span>
            </div>
          </div>
        </div>
      </div>
      {article && (
        <div style={{
          background: theme.bgMuted,
          border: `2px solid ${theme.border}`,
          borderTop: 'none',
          borderRadius: '0 0 14px 14px',
          padding: 20,
        }}>
          <div style={{
            background: theme.bgSubtle,
            border: `2px solid ${theme.borderStrong}`,
            borderRadius: 12,
            padding: '24px 28px',
          }}>
            <div style={{
              fontSize: '1rem',
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 500, color: theme.text,
              lineHeight: 1.85, letterSpacing: '0.01em',
            }}>
              {processContent(article)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


/* ================================================================
   SIDEBAR
   ================================================================ */

const SidebarIcon = ({ icon, size = 16, color = 'currentColor' }) => {
  if (!icon) return null;
  if (typeof icon === 'string') {
    if (icon.trim().startsWith('<svg')) {
      return <span style={{ width: size, height: size, display: 'inline-flex' }} dangerouslySetInnerHTML={{ __html: icon }} />;
    }
    return <span style={{ fontSize: size, color, lineHeight: 1 }}>{icon}</span>;
  }
  return null;
};

const SidebarLink = ({ link, theme }) => {
  const [h, setH] = useState(false);
  return (
    <Link
      href={link.href || '#'}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '9px 20px', fontSize: 14, fontWeight: 500,
        color: h ? theme.sidebarText : theme.sidebarTextMuted,
        textDecoration: 'none',
        backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
        borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
        paddingLeft: h ? 17 : 20, transition: 'all 0.15s', lineHeight: 1.4,
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {link.icon && (
        <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <SidebarIcon icon={link.icon} size={15} color={h ? theme.sidebarText : theme.sidebarTextMuted} />
        </span>
      )}
      <span style={{ flex: 1, minWidth: 0 }}>{link.label}</span>
    </Link>
  );
};

const SidebarGroup = ({ group, theme, isFirst }) => (
  <div style={{ marginTop: isFirst ? 0 : 12 }}>
    {!isFirst && <div style={{ height: 1, background: theme.sidebarDivider, margin: '0 20px 12px' }} />}
    {(group.title || group.icon) && (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '8px 20px',
        fontSize: 11, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: 1.2,
        color: theme.sidebarTextMuted,
      }}>
        {group.icon && <SidebarIcon icon={group.icon} size={14} color={theme.sidebarTextMuted} />}
        {group.title && <span>{group.title}</span>}
      </div>
    )}
    {(group.links || []).map((lnk, i) => (
      <SidebarLink key={i} link={lnk} theme={theme} />
    ))}
  </div>
);

const SidebarDot = ({ label, href, theme }) => {
  const [h, setH] = useState(false);
  return (
    <Link
      href={href || '#'}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <span style={{
        display: 'block', width: 8, height: 8, borderRadius: '50%',
        background: h ? theme.sidebarText : theme.sidebarTextMuted,
        transition: 'all 0.2s', transform: h ? 'scale(1.5)' : 'scale(1)',
      }} />
      <span style={{
        position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)',
        background: theme.text, color: '#fff', fontSize: 13, padding: '4px 10px',
        borderRadius: 4, whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none',
        transition: 'opacity 0.15s', zIndex: 10,
      }}>{label}</span>
    </Link>
  );
};

const Sidebar = ({ groups, brandName, brandSub, open, onToggle, theme }) => {
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [open, onToggle]);

  const flatLinks = useMemo(() => groups.flatMap((g) => g.links || []), [groups]);

  return (
    <aside
      ref={ref}
      style={{
        position: 'fixed', left: 0, top: NAVBAR_HEIGHT,
        width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        background: theme.sidebarBg, zIndex: 90,
        display: 'flex', flexDirection: 'column',
        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
        overflow: 'hidden',
        boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
        fontFamily: FONT_FAMILY,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `.vtp-sb-nav::-webkit-scrollbar { display: none; }` }} />
      <button
        onClick={() => onToggle(!open)}
        aria-label="Toggle sidebar"
        style={{
          width: '100%', height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'none', border: 'none', cursor: 'pointer',
          color: theme.sidebarTextMuted, flexShrink: 0,
          borderBottom: `1px solid ${theme.sidebarDivider}`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
      >
        <svg style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {(brandName || brandSub) && (
        <div style={{
          padding: '14px 20px 10px',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.15s',
          transitionDelay: open ? '0.1s' : '0s',
          whiteSpace: 'nowrap',
        }}>
          {brandName && <span style={{ fontSize: 18, fontWeight: 700, color: theme.sidebarText, display: 'block', marginBottom: 2 }}>{brandName}</span>}
          {brandSub && <span style={{ fontSize: 12, color: theme.sidebarTextMuted, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
        </div>
      )}
      <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 0' }}>
        {flatLinks.slice(0, 12).map((lnk, i) => (
          <SidebarDot key={i} label={lnk.label} href={lnk.href} theme={theme} />
        ))}
      </div>
      <nav
        className="vtp-sb-nav"
        style={{
          display: open ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '8px 0', flex: 1,
          overflowY: 'auto', overflowX: 'hidden',
          scrollbarWidth: 'none', msOverflowStyle: 'none',
        }}
      >
        {groups.map((group, gi) => (
          <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
        ))}
      </nav>
    </aside>
  );
};

const buildAutoSidebarGroups = ({ categories, standalone }) => {
  const groups = [];
  for (const cat of categories) {
    const links = [];
    for (const u of cat.ungrouped) links.push({ label: u.title, href: u.href });
    for (const sg of cat.subGroups) {
      for (const it of sg.items) links.push({ label: it.title, href: it.href });
    }
    if (links.length > 0) groups.push({ title: cat.category, links });
  }
  if (standalone.length > 0) {
    groups.push({
      title: 'Other tools',
      links: standalone.map((t) => ({ label: t.title, href: t.href })),
    });
  }
  return groups;
};


/* ================================================================
   MAIN
   ================================================================ */

const VisualToolsPage = ({
  tools,
  pageTitle = 'Visual Tools',
  intro = null,
  article: legacyArticleString = null,
  icon = '🔍',
  dropdownLabel = 'All Tools',
  bodyOffsetTop = 60,

  theme = 'deepBlue',
  themeOverrides = null,

  sidebar = false,
  sidebarBrandName = null,
  sidebarBrandSub = null,

  customItems = null,

  miniCardVariant = 'v1',
  bigCardVariant = 'b1',
  groupVariants = null,

  subGroupStyle = 'default',
  cardHeights = null,

  pageArticle = null,
  videos = null,
  videoLayout = 'beside',
  videosHeading = 'Walkthroughs',
  videosCtaLabel = 'Watch the walkthrough',
  videosStripTitle = 'Watch a quick intro for any topic',

  categoryArticles = null,
  categoryVideos = null,
}) => {
  const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState(null);

  const mergedCardHeights = useMemo(
    () => ({ ...DEFAULT_CARD_HEIGHTS, ...(cardHeights || {}) }),
    [cardHeights]
  );

  const flatList = useMemo(() => {
    const base = flattenInput(tools);
    return mergeWithCustomItems(base, customItems);
  }, [tools, customItems]);

  const grouped = useMemo(() => groupItems(flatList), [flatList]);

  const miniVariantFor = (item) => {
    if (item && item.cardVariant) return item.cardVariant;
    if (item && item.category && groupVariants && groupVariants[item.category]) {
      return groupVariants[item.category];
    }
    return miniCardVariant;
  };
  const bigVariantFor = (item) => {
    if (item && item.cardVariant) return item.cardVariant;
    return bigCardVariant;
  };

  const totalCount = useMemo(
    () => grouped.categories.reduce((s, c) => s + c.totalCount, 0) + grouped.standalone.length,
    [grouped]
  );

  const handleJump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const sidebarGroups = useMemo(() => {
    if (!sidebar) return null;
    if (Array.isArray(sidebar)) return sidebar;
    if (sidebar === true) return buildAutoSidebarGroups(grouped);
    return null;
  }, [sidebar, grouped]);

  const showSidebar = !isMobile && !!sidebarGroups && sidebarGroups.length > 0;
  const contentMarginLeft = showSidebar
    ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
    : 0;

  const pageVideosClean = sanitizeVideos(videos);
  const showPageAvBlock = hasArticleContent(pageArticle) || pageVideosClean.length > 0;

  return (
    <>
      <GlobalStyles />

      {showSidebar && (
        <Sidebar
          groups={sidebarGroups}
          brandName={sidebarBrandName || pageTitle}
          brandSub={sidebarBrandSub}
          open={sidebarOpen}
          onToggle={setSidebarOpen}
          theme={t}
        />
      )}

      <div style={{
        marginLeft: contentMarginLeft,
        transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <h1 style={{
          fontFamily: SERIF_FAMILY,
          fontSize: '2rem', fontWeight: 700,
          color: t.pageTitle, textAlign: 'center',
          margin: '0 0 20px',
        }}>
          {pageTitle}
        </h1>

        <QuickNav
          categories={grouped.categories}
          standaloneItems={grouped.standalone}
          dropdownLabel={dropdownLabel}
          theme={t}
          onJump={handleJump}
        />

        <ToolsHeader
          totalCount={totalCount}
          categoriesCount={grouped.categories.length}
          intro={intro}
          icon={icon}
          article={legacyArticleString}
          theme={t}
        />

        {showPageAvBlock && (
          <div style={{ width: '90%', maxWidth: 1200, margin: '32px auto 0', padding: '0 1rem' }}>
            <ArticleVideoBlock
              article={pageArticle}
              videos={pageVideosClean}
              layout={videoLayout}
              theme={t}
              videosHeading={videosHeading}
              videosCtaLabel={videosCtaLabel}
              videosStripTitle={videosStripTitle}
              onOpenModal={setModalVideo}
            />
          </div>
        )}

        <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
          {grouped.categories.map((group) => {
            const catName = group.category;
            const catArt = (categoryArticles && categoryArticles[catName]) || null;
            const catVidEntry = (categoryVideos && categoryVideos[catName]) || null;
            return (
              <div key={catName} style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}>
                <GroupPanel
                  group={group}
                  theme={t}
                  anchorId={categoryId(catName)}
                  subGroupStyle={subGroupStyle}
                  variantResolver={miniVariantFor}
                  cardHeights={mergedCardHeights}
                  categoryArticle={catArt}
                  categoryVideosEntry={catVidEntry}
                  videosHeading={videosHeading}
                  videosCtaLabel={videosCtaLabel}
                  videosStripTitle={videosStripTitle}
                  onOpenModal={setModalVideo}
                />
              </div>
            );
          })}

          {grouped.standalone.length > 0 && (
            <section
              id="standalone"
              style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}
            >
              <AlgorithmicGrid
                items={grouped.standalone}
                getCellId={(item, idx) => toolIdFor(item, idx)}
                renderItem={(item) => (
                  <BigCard item={item} theme={t} variant={bigVariantFor(item)} cardHeights={mergedCardHeights} />
                )}
              />
            </section>
          )}
        </div>

        <div style={{ height: 60 }} />
      </div>

      <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
    </>
  );
};

export default VisualToolsPage;