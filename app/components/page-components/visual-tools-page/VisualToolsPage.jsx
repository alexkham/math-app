
// // // // // // /**
// // // // // //  * VisualToolsPage — v12
// // // // // //  *
// // // // // //  * customItems prop: insert extra items (single tools or groups) at specific positions.
// // // // // //  *   customItems = [
// // // // // //  *     { at: 0,       title, ..., hasViews, views },   // first
// // // // // //  *     { at: 'end',   title, ..., hasViews: false },   // last
// // // // // //  *     { at: 2,       title, ... },                     // at index 2 of merged list
// // // // // //  *     { at: 'start', title, ... },                     // first (alias of 0)
// // // // // //  *   ]
// // // // // //  * Item shape is identical to auto-pulled tools.
// // // // // //  */

// // // // // // import React, { useMemo, useState, useEffect, useRef } from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import Image from 'next/image';
// // // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // // import { getTheme } from './visualToolsPageThemes';

// // // // // // const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';

// // // // // // const NAVBAR_HEIGHT = 55;
// // // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // // const SIDEBAR_EXPANDED = 290;

// // // // // // const hexToRgba = (hex, alpha) => {
// // // // // //   const h = hex.replace('#', '');
// // // // // //   const r = parseInt(h.substring(0, 2), 16);
// // // // // //   const g = parseInt(h.substring(2, 4), 16);
// // // // // //   const b = parseInt(h.substring(4, 6), 16);
// // // // // //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // // // // // };

// // // // // // const generateShortTitle = (title) =>
// // // // // //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // // // // // const isValidImagePath = (val) => {
// // // // // //   if (typeof val !== 'string') return false;
// // // // // //   const v = val.trim();
// // // // // //   if (!v) return false;
// // // // // //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // // // // // };

// // // // // // const isValidSvg = (val) =>
// // // // // //   typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');

// // // // // // const constrainSvg = (svg) =>
// // // // // //   svg.replace(
// // // // // //     /<svg\b([^>]*)>/i,
// // // // // //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// // // // // //   );

// // // // // // const wrapFormula = (f) => {
// // // // // //   if (!f) return '';
// // // // // //   const t = String(f).trim();
// // // // // //   if (!t) return '';
// // // // // //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// // // // // //   return `$${t}$`;
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    MERGE AUTO + CUSTOM ITEMS
// // // // // //    ================================================================ */

// // // // // // const mergeWithCustomItems = (autoList, customItems) => {
// // // // // //   if (!Array.isArray(customItems) || customItems.length === 0) return autoList;

// // // // // //   // Pair each custom item with its resolved index, preserving relative order
// // // // // //   // for ties. We resolve 'start' → 0, 'end' → +Infinity so end items always
// // // // // //   // come after numeric ones.
// // // // // //   const decorated = customItems.map((item, i) => {
// // // // // //     const { at, ...rest } = item;
// // // // // //     let pos;
// // // // // //     if (at === 'start') pos = 0;
// // // // // //     else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
// // // // // //     else if (typeof at === 'number') pos = at;
// // // // // //     else pos = Number.POSITIVE_INFINITY;
// // // // // //     return { item: rest, pos, order: i };
// // // // // //   });

// // // // // //   // Sort: lower pos first; ties keep original order
// // // // // //   decorated.sort((a, b) => (a.pos - b.pos) || (a.order - b.order));

// // // // // //   // Splice into a copy of autoList
// // // // // //   const result = [...autoList];
// // // // // //   decorated.forEach(({ item, pos }) => {
// // // // // //     if (pos === Number.POSITIVE_INFINITY) {
// // // // // //       result.push(item);
// // // // // //     } else {
// // // // // //       const clamped = Math.max(0, Math.min(pos, result.length));
// // // // // //       result.splice(clamped, 0, item);
// // // // // //     }
// // // // // //   });

// // // // // //   return result;
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    ICON
// // // // // //    ================================================================ */

// // // // // // const SidebarIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // // // //   if (!icon) return null;
// // // // // //   if (typeof icon === 'string') {
// // // // // //     if (icon.trim().startsWith('<svg')) {
// // // // // //       return <span style={{ width: size, height: size, display: 'inline-flex' }} dangerouslySetInnerHTML={{ __html: icon }} />;
// // // // // //     }
// // // // // //     return <span style={{ fontSize: size, color, lineHeight: 1 }}>{icon}</span>;
// // // // // //   }
// // // // // //   return null;
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    SIDEBAR
// // // // // //    ================================================================ */

// // // // // // const Sidebar = ({ groups, brandName, brandSub, open, onToggle, theme }) => {
// // // // // //   const ref = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // // //     document.addEventListener('click', handler);
// // // // // //     return () => document.removeEventListener('click', handler);
// // // // // //   }, [open, onToggle]);

// // // // // //   const flatLinks = useMemo(() => groups.flatMap((g) => g.links || []), [groups]);

// // // // // //   return (
// // // // // //     <aside
// // // // // //       ref={ref}
// // // // // //       style={{
// // // // // //         position: 'fixed',
// // // // // //         left: 0,
// // // // // //         top: NAVBAR_HEIGHT,
// // // // // //         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
// // // // // //         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // // //         background: theme.sidebarBg,
// // // // // //         zIndex: 90,
// // // // // //         display: 'flex',
// // // // // //         flexDirection: 'column',
// // // // // //         transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // //         overflow: 'hidden',
// // // // // //         boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // // //         fontFamily: FONT_FAMILY,
// // // // // //       }}
// // // // // //     >
// // // // // //       <style dangerouslySetInnerHTML={{ __html: `.vtp-sb-nav::-webkit-scrollbar { display: none; }` }} />

// // // // // //       <button
// // // // // //         onClick={() => onToggle(!open)}
// // // // // //         aria-label="Toggle sidebar"
// // // // // //         style={{
// // // // // //           width: '100%', height: 44,
// // // // // //           display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // // //           background: 'none', border: 'none', cursor: 'pointer',
// // // // // //           color: theme.sidebarTextMuted,
// // // // // //           flexShrink: 0,
// // // // // //           borderBottom: `1px solid ${theme.sidebarDivider}`,
// // // // // //         }}
// // // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
// // // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
// // // // // //       >
// // // // // //         <svg
// // // // // //           style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
// // // // // //           viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
// // // // // //         >
// // // // // //           <polyline points="9 18 15 12 9 6" />
// // // // // //         </svg>
// // // // // //       </button>

// // // // // //       {(brandName || brandSub) && (
// // // // // //         <div style={{
// // // // // //           padding: '14px 20px 10px',
// // // // // //           opacity: open ? 1 : 0,
// // // // // //           transition: 'opacity 0.15s',
// // // // // //           transitionDelay: open ? '0.1s' : '0s',
// // // // // //           whiteSpace: 'nowrap',
// // // // // //         }}>
// // // // // //           {brandName && <span style={{ fontSize: 18, fontWeight: 700, color: theme.sidebarText, display: 'block', marginBottom: 2 }}>{brandName}</span>}
// // // // // //           {brandSub && <span style={{ fontSize: 12, color: theme.sidebarTextMuted, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 0' }}>
// // // // // //         {flatLinks.slice(0, 12).map((lnk, i) => (
// // // // // //           <SidebarDot key={i} label={lnk.label} href={lnk.href} theme={theme} />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <nav
// // // // // //         className="vtp-sb-nav"
// // // // // //         style={{
// // // // // //           display: open ? 'flex' : 'none',
// // // // // //           flexDirection: 'column',
// // // // // //           padding: '8px 0',
// // // // // //           flex: 1,
// // // // // //           overflowY: 'auto',
// // // // // //           overflowX: 'hidden',
// // // // // //           scrollbarWidth: 'none',
// // // // // //           msOverflowStyle: 'none',
// // // // // //         }}
// // // // // //       >
// // // // // //         {groups.map((group, gi) => (
// // // // // //           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
// // // // // //         ))}
// // // // // //       </nav>
// // // // // //     </aside>
// // // // // //   );
// // // // // // };

// // // // // // const SidebarDot = ({ label, href, theme }) => {
// // // // // //   const [h, setH] = useState(false);
// // // // // //   return (
// // // // // //     <Link
// // // // // //       href={href || '#'}
// // // // // //       style={{ position: 'relative', display: 'inline-block' }}
// // // // // //       onMouseEnter={() => setH(true)}
// // // // // //       onMouseLeave={() => setH(false)}
// // // // // //     >
// // // // // //       <span style={{
// // // // // //         display: 'block',
// // // // // //         width: 8, height: 8,
// // // // // //         borderRadius: '50%',
// // // // // //         background: h ? theme.sidebarText : theme.sidebarTextMuted,
// // // // // //         transition: 'all 0.2s',
// // // // // //         transform: h ? 'scale(1.5)' : 'scale(1)',
// // // // // //       }} />
// // // // // //       <span style={{
// // // // // //         position: 'absolute',
// // // // // //         left: 22, top: '50%',
// // // // // //         transform: 'translateY(-50%)',
// // // // // //         background: theme.text, color: '#fff',
// // // // // //         fontSize: 13, padding: '4px 10px',
// // // // // //         borderRadius: 4, whiteSpace: 'nowrap',
// // // // // //         opacity: h ? 1 : 0, pointerEvents: 'none',
// // // // // //         transition: 'opacity 0.15s', zIndex: 10,
// // // // // //       }}>{label}</span>
// // // // // //     </Link>
// // // // // //   );
// // // // // // };

// // // // // // const SidebarGroup = ({ group, theme, isFirst }) => (
// // // // // //   <div style={{ marginTop: isFirst ? 0 : 12 }}>
// // // // // //     {!isFirst && <div style={{ height: 1, background: theme.sidebarDivider, margin: '0 20px 12px' }} />}
// // // // // //     {(group.title || group.icon) && (
// // // // // //       <div style={{
// // // // // //         display: 'flex', alignItems: 'center', gap: 8,
// // // // // //         padding: '8px 20px',
// // // // // //         fontSize: 11, fontWeight: 700,
// // // // // //         textTransform: 'uppercase', letterSpacing: 1.2,
// // // // // //         color: theme.sidebarTextMuted,
// // // // // //       }}>
// // // // // //         {group.icon && <SidebarIcon icon={group.icon} size={14} color={theme.sidebarTextMuted} />}
// // // // // //         {group.title && <span>{group.title}</span>}
// // // // // //       </div>
// // // // // //     )}
// // // // // //     {(group.links || []).map((lnk, i) => (
// // // // // //       <SidebarLink key={i} link={lnk} theme={theme} />
// // // // // //     ))}
// // // // // //   </div>
// // // // // // );

// // // // // // const SidebarLink = ({ link, theme }) => {
// // // // // //   const [h, setH] = useState(false);
// // // // // //   return (
// // // // // //     <Link
// // // // // //       href={link.href || '#'}
// // // // // //       style={{
// // // // // //         display: 'flex',
// // // // // //         alignItems: 'center',
// // // // // //         gap: 10,
// // // // // //         padding: '9px 20px',
// // // // // //         fontSize: 14,
// // // // // //         fontWeight: 500,
// // // // // //         color: h ? theme.sidebarText : theme.sidebarTextMuted,
// // // // // //         textDecoration: 'none',
// // // // // //         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
// // // // // //         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
// // // // // //         paddingLeft: h ? 17 : 20,
// // // // // //         transition: 'all 0.15s',
// // // // // //         lineHeight: 1.4,
// // // // // //       }}
// // // // // //       onMouseEnter={() => setH(true)}
// // // // // //       onMouseLeave={() => setH(false)}
// // // // // //     >
// // // // // //       {link.icon && (
// // // // // //         <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // // // //           <SidebarIcon icon={link.icon} size={15} color={h ? theme.sidebarText : theme.sidebarTextMuted} />
// // // // // //         </span>
// // // // // //       )}
// // // // // //       <span style={{ flex: 1, minWidth: 0 }}>{link.label}</span>
// // // // // //     </Link>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    QUICK NAV
// // // // // //    ================================================================ */

// // // // // // const QuickNav = ({ items, dropdownLabel, theme, onJump }) => {
// // // // // //   const [open, setOpen] = useState(false);
// // // // // //   if (!items.length) return null;

// // // // // //   return (
// // // // // //     <nav style={{
// // // // // //       maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px',
// // // // // //       background: theme.bgSubtle, borderRadius: 12,
// // // // // //       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
// // // // // //     }}>
// // // // // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
// // // // // //         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
// // // // // //           <div
// // // // // //             style={{ position: 'relative' }}
// // // // // //             onMouseEnter={() => setOpen(true)}
// // // // // //             onMouseLeave={() => setOpen(false)}
// // // // // //           >
// // // // // //             <button style={{
// // // // // //               display: 'flex', alignItems: 'center', gap: 6,
// // // // // //               padding: '9px 16px', border: 'none', borderRadius: 8,
// // // // // //               background: open ? theme.accentHover : theme.accent,
// // // // // //               color: '#fff', fontSize: '1rem', fontWeight: 600,
// // // // // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // // // // //               cursor: 'pointer', transition: 'background 0.2s ease',
// // // // // //             }}>
// // // // // //               {dropdownLabel}
// // // // // //               <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
// // // // // //                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
// // // // // //               </svg>
// // // // // //             </button>
// // // // // //             <div style={{
// // // // // //               position: 'absolute', top: 'calc(100% + 6px)', left: 0,
// // // // // //               minWidth: 320, background: '#fff',
// // // // // //               border: `1px solid ${theme.border}`, borderRadius: 10,
// // // // // //               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
// // // // // //               transition: 'all 0.2s ease', zIndex: 100,
// // // // // //               maxHeight: 400, overflowY: 'auto',
// // // // // //               opacity: open ? 1 : 0,
// // // // // //               visibility: open ? 'visible' : 'hidden',
// // // // // //               transform: open ? 'translateY(0)' : 'translateY(-8px)',
// // // // // //             }}>
// // // // // //               {items.map((it, i) => (
// // // // // //                 <a key={i} href={`#group-${i}`}
// // // // // //                   style={{
// // // // // //                     display: 'block', padding: '13px 18px',
// // // // // //                     textDecoration: 'none', color: theme.text,
// // // // // //                     fontSize: '1.05rem', fontWeight: 500,
// // // // // //                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
// // // // // //                     borderBottom: `1px solid ${theme.bgSubtle}`,
// // // // // //                     transition: 'all 0.15s ease',
// // // // // //                   }}
// // // // // //                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(i); }}
// // // // // //                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
// // // // // //                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
// // // // // //                   {it.title}
// // // // // //                 </a>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <span style={{ fontSize: '1.05rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
// // // // // //         </div>
// // // // // //         <span style={{
// // // // // //           fontSize: '1rem', color: theme.text,
// // // // // //           background: theme.chipBg, padding: '6px 16px',
// // // // // //           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
// // // // // //         }}>{items.length} tools</span>
// // // // // //       </div>
// // // // // //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
// // // // // //         {items.map((it, i) => (
// // // // // //           <a key={i} href={`#group-${i}`}
// // // // // //             style={{
// // // // // //               padding: '10px 20px', border: 'none', borderRadius: 22,
// // // // // //               textDecoration: 'none', color: '#fff',
// // // // // //               fontSize: '1.05rem', fontWeight: 500,
// // // // // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // // // // //               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
// // // // // //               background: theme.accent,
// // // // // //             }}
// // // // // //             onClick={(e) => { e.preventDefault(); onJump(i); }}
// // // // // //             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
// // // // // //             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
// // // // // //             {generateShortTitle(it.title)}
// // // // // //           </a>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    TOOLS PAGE HEADER
// // // // // //    ================================================================ */

// // // // // // const ToolsHeader = ({ items, intro, icon, article, theme }) => {
// // // // // //   const stats = useMemo(() => {
// // // // // //     const toolsCount = items.length;
// // // // // //     const cats = new Set(items.map((i) => i.category).filter(Boolean));
// // // // // //     return { toolsCount, categoriesCount: cats.size };
// // // // // //   }, [items]);

// // // // // //   if (!items.length) return null;

// // // // // //   return (
// // // // // //     <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
// // // // // //       <div style={{
// // // // // //         background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
// // // // // //         border: `2px solid ${theme.border}`,
// // // // // //         padding: '34px 38px',
// // // // // //         borderRadius: article ? '16px 16px 0 0' : 16,
// // // // // //         borderBottom: article ? 'none' : `2px solid ${theme.border}`,
// // // // // //       }}>
// // // // // //         {intro && (
// // // // // //           <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
// // // // // //             <div style={{
// // // // // //               width: 64, height: 64, borderRadius: 14,
// // // // // //               display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // // //               fontSize: '1.85rem', flexShrink: 0,
// // // // // //               background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
// // // // // //             }}>{icon}</div>
// // // // // //             <div style={{ flex: 1 }}>
// // // // // //               {intro.title && <h2 style={{
// // // // // //                 fontSize: '1.65rem', fontWeight: 600, color: theme.text,
// // // // // //                 fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
// // // // // //                 margin: '0 0 10px 0', lineHeight: 1.3,
// // // // // //               }}>{intro.title}</h2>}
// // // // // //               {intro.description && <p style={{
// // // // // //                 fontSize: '1.2rem', color: theme.textSecondary,
// // // // // //                 fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
// // // // // //                 lineHeight: 1.55, margin: 0,
// // // // // //               }}>{intro.description}</p>}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //         {intro?.tip && (
// // // // // //           <div style={{
// // // // // //             background: theme.tipBg,
// // // // // //             border: `1px solid ${theme.border}`,
// // // // // //             borderLeft: `4px solid ${theme.accent}`,
// // // // // //             borderRadius: 8, padding: '17px 22px', marginBottom: 24,
// // // // // //             display: 'flex', alignItems: 'center', gap: 14,
// // // // // //             fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400,
// // // // // //             letterSpacing: '0.005em', color: theme.tipText,
// // // // // //           }}>
// // // // // //             <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
// // // // // //             <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
// // // // // //           </div>
// // // // // //         )}
// // // // // //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
// // // // // //           <div style={{ display: 'flex', gap: 28 }}>
// // // // // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // // // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.toolsCount}</span>
// // // // // //               <span>Tools</span>
// // // // // //             </div>
// // // // // //             {stats.categoriesCount > 0 && (
// // // // // //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // // // //                 <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.categoriesCount}</span>
// // // // // //                 <span>Categories</span>
// // // // // //               </div>
// // // // // //             )}
// // // // // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // // // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>100%</span>
// // // // // //               <span>Free</span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       {article && (
// // // // // //         <div style={{
// // // // // //           background: theme.bgMuted,
// // // // // //           border: `2px solid ${theme.border}`,
// // // // // //           borderTop: 'none',
// // // // // //           borderRadius: '0 0 16px 16px',
// // // // // //           padding: 24,
// // // // // //         }}>
// // // // // //           <div style={{
// // // // // //             background: theme.bgSubtle,
// // // // // //             border: `2px solid ${theme.borderStrong}`,
// // // // // //             borderRadius: 12,
// // // // // //             padding: '28px 32px',
// // // // // //           }}>
// // // // // //             <div style={{
// // // // // //               fontSize: '1.08rem',
// // // // // //               fontFamily: 'Georgia, "Times New Roman", serif',
// // // // // //               fontWeight: 500, color: theme.text,
// // // // // //               lineHeight: 1.85, letterSpacing: '0.01em',
// // // // // //             }}>
// // // // // //               {processContent(article)}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    BIG CARD
// // // // // //    ================================================================ */

// // // // // // const BigCard = ({ item, theme }) => {
// // // // // //   const [imgFailed, setImgFailed] = useState(false);
// // // // // //   const hasImage = isValidImagePath(item.image) && !imgFailed;
// // // // // //   const hasSvg = !hasImage && isValidSvg(item.svg);
// // // // // //   const hasVisual = hasImage || hasSvg;

// // // // // //   return (
// // // // // //     <div className="vtp-card" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
// // // // // //       {hasImage && (
// // // // // //         <div className="vtp-image-container">
// // // // // //           <Image src={item.image} alt={item.imageAlt || item.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// // // // // //         </div>
// // // // // //       )}
// // // // // //       {hasSvg && (
// // // // // //         <div className="vtp-image-container vtp-svg-host">
// // // // // //           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <div className={`vtp-content ${hasVisual ? 'vtp-content-with-image' : 'vtp-content-full'}`}>
// // // // // //         <div>
// // // // // //           <div className="vtp-title-row">
// // // // // //             <h3 className="vtp-title" style={{ color: theme.cardText }}>{item.title}</h3>
// // // // // //           </div>
// // // // // //           <p className="vtp-description" style={{ color: theme.cardText, opacity: 0.9 }}>{item.description}</p>
// // // // // //         </div>
// // // // // //         <div className="vtp-footer">
// // // // // //           <Link
// // // // // //             href={item.href || '#'}
// // // // // //             className="vtp-view-button"
// // // // // //             style={{ color: theme.cardText, borderColor: theme.cardText }}
// // // // // //           >View Details</Link>
// // // // // //           <button className="vtp-menu-button" aria-label="More">
// // // // // //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// // // // // //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// // // // // //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    VIEW MINI-CARD
// // // // // //    ================================================================ */

// // // // // // const ViewMiniCard = ({ view, theme }) => {
// // // // // //   const [imgFailed, setImgFailed] = useState(false);
// // // // // //   const hasImage = isValidImagePath(view.image) && !imgFailed;
// // // // // //   const hasSvg = !hasImage && isValidSvg(view.svg);
// // // // // //   const hasVisual = hasImage || hasSvg;

// // // // // //   return (
// // // // // //     <Link href={view.href || '#'} className="vtp-mini" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
// // // // // //       {hasImage && (
// // // // // //         <div className="vtp-mini-visual">
// // // // // //           <Image src={view.image} alt={view.imageAlt || view.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// // // // // //         </div>
// // // // // //       )}
// // // // // //       {hasSvg && (
// // // // // //         <div className="vtp-mini-visual vtp-svg-host">
// // // // // //           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(view.svg) }} />
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <div className={`vtp-mini-content ${hasVisual ? 'vtp-mini-content-with-visual' : 'vtp-mini-content-full'}`}>
// // // // // //         <div className="vtp-mini-title" style={{ color: theme.cardText }}>{view.title}</div>
// // // // // //         {view.formula && (
// // // // // //           <div className="vtp-mini-formula" style={{ color: theme.cardText, opacity: 0.95 }}>
// // // // // //             {processContent(wrapFormula(view.formula))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //         {!view.formula && view.shortDescription && (
// // // // // //           <div className="vtp-mini-desc" style={{ color: theme.cardText, opacity: 0.9 }}>
// // // // // //             {processContent(view.shortDescription)}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </Link>
// // // // // //   );
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    GROUP PANEL — variant B
// // // // // //    ================================================================ */

// // // // // // const GroupPanel = ({ group, theme, anchorId }) => (
// // // // // //   <section
// // // // // //     id={anchorId}
// // // // // //     style={{
// // // // // //       background: hexToRgba(theme.accent, 0.06),
// // // // // //       borderRadius: 12,
// // // // // //       overflow: 'hidden',
// // // // // //       boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
// // // // // //       marginBottom: '3rem',
// // // // // //     }}
// // // // // //   >
// // // // // //     <div style={{ background: theme.accent, height: 4 }} />

// // // // // //     <div style={{ padding: '22px 24px' }}>
// // // // // //       <div style={{
// // // // // //         display: 'flex',
// // // // // //         alignItems: 'baseline',
// // // // // //         justifyContent: 'space-between',
// // // // // //         gap: '1rem',
// // // // // //         flexWrap: 'wrap',
// // // // // //         marginBottom: 18,
// // // // // //       }}>
// // // // // //         <div>
// // // // // //           <div style={{
// // // // // //             fontSize: 11,
// // // // // //             fontWeight: 700,
// // // // // //             textTransform: 'uppercase',
// // // // // //             letterSpacing: 1,
// // // // // //             color: theme.accent,
// // // // // //             marginBottom: 4,
// // // // // //             fontFamily: FONT_FAMILY,
// // // // // //           }}>
// // // // // //             {group.views.length} {group.views.length === 1 ? 'tool' : 'tools'}
// // // // // //           </div>
// // // // // //           <div style={{
// // // // // //             fontSize: '1.5rem',
// // // // // //             fontWeight: 600,
// // // // // //             color: theme.text,
// // // // // //             fontFamily: FONT_FAMILY,
// // // // // //             letterSpacing: '-0.01em',
// // // // // //           }}>
// // // // // //             {group.title}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <Link
// // // // // //           href={group.href || '#'}
// // // // // //           style={{
// // // // // //             fontSize: '0.9rem',
// // // // // //             fontWeight: 500,
// // // // // //             color: theme.accent,
// // // // // //             border: `1px solid ${theme.accent}`,
// // // // // //             padding: '4px 12px',
// // // // // //             borderRadius: 999,
// // // // // //             textDecoration: 'none',
// // // // // //             fontFamily: FONT_FAMILY,
// // // // // //             whiteSpace: 'nowrap',
// // // // // //             transition: 'all 0.2s ease',
// // // // // //           }}
// // // // // //           onMouseEnter={(e) => { e.currentTarget.style.background = hexToRgba(theme.accent, 0.1); }}
// // // // // //           onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
// // // // // //         >
// // // // // //           View All →
// // // // // //         </Link>
// // // // // //       </div>

// // // // // //       <div className="vtp-mini-grid">
// // // // // //         {group.views.map((view, vi) => (
// // // // // //           <ViewMiniCard key={vi} view={view} theme={theme} />
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   </section>
// // // // // // );


// // // // // // /* ================================================================
// // // // // //    STYLES
// // // // // //    ================================================================ */

// // // // // // const PAGE_CSS = `
// // // // // // .vtp-section {
// // // // // //   width: 90%; max-width: 1200px;
// // // // // //   margin: 0 auto 3rem; padding: 0 1rem;
// // // // // // }
// // // // // // .vtp-mini-grid {
// // // // // //   display: grid;
// // // // // //   grid-template-columns: repeat(3, minmax(0, 1fr));
// // // // // //   grid-auto-rows: 1fr;
// // // // // //   gap: 1rem;
// // // // // // }
// // // // // // @media (max-width: 768px) { .vtp-mini-grid { grid-template-columns: 1fr; } }
// // // // // // .vtp-mini {
// // // // // //   display: flex; flex-direction: column; border-radius: 0.5rem;
// // // // // //   overflow: hidden; text-decoration: none;
// // // // // //   height: 100%;
// // // // // //   min-height: 140px;
// // // // // //   transition: transform 0.2s ease, box-shadow 0.2s ease;
// // // // // // }
// // // // // // .vtp-mini:hover {
// // // // // //   transform: translateY(-2px); box-shadow: 0 8px 16px -4px rgba(0,0,0,0.15);
// // // // // // }
// // // // // // .vtp-mini-visual {
// // // // // //   width: 100%; height: 110px; position: relative;
// // // // // //   flex-shrink: 0; overflow: hidden;
// // // // // // }
// // // // // // .vtp-mini-content {
// // // // // //   padding: 12px 14px; flex: 1;
// // // // // //   display: flex; flex-direction: column; justify-content: center;
// // // // // // }
// // // // // // .vtp-mini-content-full { min-height: 100%; }
// // // // // // .vtp-mini-title {
// // // // // //   font-size: 0.95rem; font-weight: 600; font-family: ${FONT_FAMILY};
// // // // // //   margin: 0 0 4px; line-height: 1.3;
// // // // // // }
// // // // // // .vtp-mini-formula { font-size: 0.9rem; margin: 0; }
// // // // // // .vtp-mini-formula .katex { color: inherit; }
// // // // // // .vtp-mini-desc {
// // // // // //   font-size: 0.8rem; font-family: ${FONT_FAMILY};
// // // // // //   margin: 0; line-height: 1.4;
// // // // // // }
// // // // // // .vtp-svg-host {
// // // // // //   display: flex; align-items: center; justify-content: center;
// // // // // //   background: rgba(255,255,255,0.06); overflow: hidden;
// // // // // // }
// // // // // // .vtp-svg-inner {
// // // // // //   width: 80%; height: 80%;
// // // // // //   display: flex; align-items: center; justify-content: center; overflow: hidden;
// // // // // // }
// // // // // // .vtp-svg-inner > svg {
// // // // // //   max-width: 100%; max-height: 100%; width: auto; height: auto; display: block;
// // // // // // }
// // // // // // .vtp-grid {
// // // // // //   display: grid; gap: 2rem; grid-template-columns: repeat(2, minmax(0, 1fr));
// // // // // // }
// // // // // // .vtp-grid > :last-child:nth-child(2n-1) {
// // // // // //   grid-column: 1 / -1; margin: 0 auto;
// // // // // //   max-width: calc(50% - 1rem); width: 100%;
// // // // // // }
// // // // // // .vtp-card {
// // // // // //   border-radius: 0.5rem; overflow: hidden; display: flex;
// // // // // //   min-height: 200px; transition: box-shadow 0.3s ease;
// // // // // // }
// // // // // // .vtp-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
// // // // // // .vtp-image-container {
// // // // // //   width: 50%; position: relative; border: solid 1px lightgray;
// // // // // //   flex-shrink: 0; overflow: hidden;
// // // // // // }
// // // // // // .vtp-content {
// // // // // //   padding: 1.5rem; display: flex; flex-direction: column;
// // // // // //   justify-content: space-between;
// // // // // // }
// // // // // // .vtp-content-full { width: 100%; }
// // // // // // .vtp-content-with-image { width: 50%; }
// // // // // // .vtp-title-row {
// // // // // //   display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;
// // // // // // }
// // // // // // .vtp-title {
// // // // // //   font-size: 1.25rem; font-weight: 600; line-height: 1.3;
// // // // // //   font-family: ${FONT_FAMILY}; margin: 0;
// // // // // // }
// // // // // // .vtp-description {
// // // // // //   font-size: 0.9rem; line-height: 1.5;
// // // // // //   font-family: ${FONT_FAMILY}; margin: 0.5rem 0 0;
// // // // // // }
// // // // // // .vtp-footer {
// // // // // //   display: flex; justify-content: space-between;
// // // // // //   align-items: center; margin-top: 1rem;
// // // // // // }
// // // // // // .vtp-view-button {
// // // // // //   font-weight: 500; font-size: 0.875rem;
// // // // // //   padding: 0.5rem 1rem; border: 1px solid;
// // // // // //   border-radius: 9999px; background: transparent; cursor: pointer;
// // // // // //   transition: all 0.2s ease; text-decoration: none; font-family: ${FONT_FAMILY};
// // // // // // }
// // // // // // .vtp-view-button:hover { background: rgba(255,255,255,0.15); }
// // // // // // .vtp-menu-button {
// // // // // //   padding: 0.5rem; background: none; border: none; cursor: pointer;
// // // // // //   display: flex; flex-direction: column; gap: 0.25rem;
// // // // // //   opacity: 0.5; transition: opacity 0.2s ease;
// // // // // // }
// // // // // // .vtp-menu-button:hover { opacity: 1; }
// // // // // // .vtp-menu-dot { width: 4px; height: 4px; border-radius: 50%; }
// // // // // // @media (max-width: 768px) {
// // // // // //   .vtp-grid { grid-template-columns: 1fr; }
// // // // // //   .vtp-grid > :last-child:nth-child(2n-1) { grid-column: 1; max-width: 100%; }
// // // // // //   .vtp-image-container { width: 100%; height: 180px; }
// // // // // //   .vtp-content-with-image { width: 100%; }
// // // // // //   .vtp-card { flex-direction: column; }
// // // // // // }
// // // // // // `;


// // // // // // /* ================================================================
// // // // // //    AUTO-PULL SIDEBAR GROUPS
// // // // // //    ================================================================ */

// // // // // // const buildAutoSidebarGroups = (list) => {
// // // // // //   const groups = [];
// // // // // //   const standalone = [];
// // // // // //   list.forEach((tool) => {
// // // // // //     if (tool.hasViews && Array.isArray(tool.views) && tool.views.length > 0) {
// // // // // //       groups.push({
// // // // // //         title: tool.title,
// // // // // //         links: tool.views.map((v) => ({ label: v.title, href: v.href })),
// // // // // //       });
// // // // // //     } else {
// // // // // //       standalone.push({ label: tool.title, href: tool.href });
// // // // // //     }
// // // // // //   });
// // // // // //   if (standalone.length > 0) groups.push({ title: 'Tools', links: standalone });
// // // // // //   return groups;
// // // // // // };


// // // // // // /* ================================================================
// // // // // //    MAIN
// // // // // //    ================================================================ */

// // // // // // const VisualToolsPage = ({
// // // // // //   tools,
// // // // // //   pageTitle = 'Visual Tools',
// // // // // //   intro = null,
// // // // // //   article = null,
// // // // // //   icon = '🔍',
// // // // // //   dropdownLabel = 'All Tools',
// // // // // //   bodyOffsetTop = 60,

// // // // // //   theme = 'deepBlue',
// // // // // //   themeOverrides = null,

// // // // // //   sidebar = false,
// // // // // //   sidebarBrandName = null,
// // // // // //   sidebarBrandSub = null,

// // // // // //   // Custom items merged into the auto-pulled list at specified positions.
// // // // // //   customItems = null,
// // // // // // }) => {
// // // // // //   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);

// // // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // // //   const autoList = Array.isArray(tools)
// // // // // //     ? tools
// // // // // //     : (tools && Array.isArray(tools.children) ? tools.children : []);

// // // // // //   // Merge in customItems, then split groups vs standalone
// // // // // //   const list = useMemo(
// // // // // //     () => mergeWithCustomItems(autoList, customItems),
// // // // // //     [autoList, customItems]
// // // // // //   );

// // // // // //   const handleJump = (i) => {
// // // // // //     const el = document.getElementById(`group-${i}`);
// // // // // //     if (!el) return;
// // // // // //     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
// // // // // //     window.scrollTo({ top: y, behavior: 'smooth' });
// // // // // //   };

// // // // // //   const groupsWithViews = list.filter((x) => x.hasViews && Array.isArray(x.views) && x.views.length > 0);
// // // // // //   const standalone = list.filter((x) => !x.hasViews || !Array.isArray(x.views) || x.views.length === 0);

// // // // // //   const sidebarGroups = useMemo(() => {
// // // // // //     if (!sidebar) return null;
// // // // // //     if (Array.isArray(sidebar)) return sidebar;
// // // // // //     if (sidebar === true) return buildAutoSidebarGroups(list);
// // // // // //     return null;
// // // // // //   }, [sidebar, list]);

// // // // // //   const showSidebar = !!sidebarGroups && sidebarGroups.length > 0;
// // // // // //   const contentMarginLeft = showSidebar
// // // // // //     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
// // // // // //     : 0;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

// // // // // //       {showSidebar && (
// // // // // //         <Sidebar
// // // // // //           groups={sidebarGroups}
// // // // // //           brandName={sidebarBrandName || pageTitle}
// // // // // //           brandSub={sidebarBrandSub}
// // // // // //           open={sidebarOpen}
// // // // // //           onToggle={setSidebarOpen}
// // // // // //           theme={t}
// // // // // //         />
// // // // // //       )}

// // // // // //       <div style={{
// // // // // //         marginLeft: contentMarginLeft,
// // // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // // //       }}>
// // // // // //         <h1 style={{
// // // // // //           fontFamily: "'Source Serif 4', Georgia, serif",
// // // // // //           fontSize: '2.4rem',
// // // // // //           fontWeight: 700,
// // // // // //           color: t.pageTitle,
// // // // // //           textAlign: 'center',
// // // // // //           margin: '0 0 24px',
// // // // // //         }}>
// // // // // //           {pageTitle}
// // // // // //         </h1>

// // // // // //         <QuickNav
// // // // // //           items={list}
// // // // // //           dropdownLabel={dropdownLabel}
// // // // // //           theme={t}
// // // // // //           onJump={handleJump}
// // // // // //         />

// // // // // //         <ToolsHeader
// // // // // //           items={list}
// // // // // //           intro={intro}
// // // // // //           icon={icon}
// // // // // //           article={article}
// // // // // //           theme={t}
// // // // // //         />

// // // // // //         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
// // // // // //           {groupsWithViews.map((group) => {
// // // // // //             const indexInList = list.indexOf(group);
// // // // // //             return (
// // // // // //               <div key={`g-${indexInList}`} className="vtp-section">
// // // // // //                 <GroupPanel group={group} theme={t} anchorId={`group-${indexInList}`} />
// // // // // //               </div>
// // // // // //             );
// // // // // //           })}

// // // // // //           {standalone.length > 0 && (
// // // // // //             <section className="vtp-section">
// // // // // //               <div className="vtp-grid">
// // // // // //                 {standalone.map((tool) => {
// // // // // //                   const indexInList = list.indexOf(tool);
// // // // // //                   return (
// // // // // //                     <div key={`s-${indexInList}`} id={`group-${indexInList}`}>
// // // // // //                       <BigCard item={tool} theme={t} />
// // // // // //                     </div>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </div>
// // // // // //             </section>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <div style={{ height: 60 }} />
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default VisualToolsPage;


// // // // // /**
// // // // //  * VisualToolsPage — v13
// // // // //  *
// // // // //  * Fixes vs v12:
// // // // //  * 1. mergeWithCustomItems: insert from highest pos to lowest so numeric
// // // // //  *    `at` indices refer to positions in the original autoList, not the
// // // // //  *    growing array. Stable for ties.
// // // // //  * 2. Removed O(n²) list.indexOf() in render. Index is captured when
// // // // //  *    splitting into groupsWithViews / standalone.
// // // // //  * 6. BigCard / ViewMiniCard: reset imgFailed when item.image changes
// // // // //  *    (useEffect on the URL).
// // // // //  * 8. Sidebar: hidden below 768px via CSS; content margin removed on
// // // // //  *    mobile so body uses full width.
// // // // //  */

// // // // // import React, { useMemo, useState, useEffect, useRef } from 'react';
// // // // // import Link from 'next/link';
// // // // // import Image from 'next/image';
// // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // import { getTheme } from './visualToolsPageThemes';

// // // // // const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';

// // // // // const NAVBAR_HEIGHT = 55;
// // // // // const SIDEBAR_COLLAPSED = 68;
// // // // // const SIDEBAR_EXPANDED = 290;
// // // // // const MOBILE_BREAKPOINT = 768;

// // // // // const hexToRgba = (hex, alpha) => {
// // // // //   const h = hex.replace('#', '');
// // // // //   const r = parseInt(h.substring(0, 2), 16);
// // // // //   const g = parseInt(h.substring(2, 4), 16);
// // // // //   const b = parseInt(h.substring(4, 6), 16);
// // // // //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // // // // };

// // // // // const generateShortTitle = (title) =>
// // // // //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // // // // const isValidImagePath = (val) => {
// // // // //   if (typeof val !== 'string') return false;
// // // // //   const v = val.trim();
// // // // //   if (!v) return false;
// // // // //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // // // // };

// // // // // const isValidSvg = (val) =>
// // // // //   typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');

// // // // // const constrainSvg = (svg) =>
// // // // //   svg.replace(
// // // // //     /<svg\b([^>]*)>/i,
// // // // //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// // // // //   );

// // // // // const wrapFormula = (f) => {
// // // // //   if (!f) return '';
// // // // //   const t = String(f).trim();
// // // // //   if (!t) return '';
// // // // //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// // // // //   return `$${t}$`;
// // // // // };


// // // // // /* ================================================================
// // // // //    USE MEDIA QUERY
// // // // //    ================================================================ */

// // // // // const useIsMobile = () => {
// // // // //   const [isMobile, setIsMobile] = useState(false);
// // // // //   useEffect(() => {
// // // // //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
// // // // //     const update = () => setIsMobile(mql.matches);
// // // // //     update();
// // // // //     mql.addEventListener('change', update);
// // // // //     return () => mql.removeEventListener('change', update);
// // // // //   }, []);
// // // // //   return isMobile;
// // // // // };


// // // // // /* ================================================================
// // // // //    MERGE AUTO + CUSTOM ITEMS
// // // // //    FIX 1: insert from highest pos to lowest so numeric `at` values
// // // // //    refer to positions in the ORIGINAL autoList. Stable on ties.
// // // // //    ================================================================ */

// // // // // const mergeWithCustomItems = (autoList, customItems) => {
// // // // //   if (!Array.isArray(customItems) || customItems.length === 0) return autoList;

// // // // //   const decorated = customItems.map((item, i) => {
// // // // //     const { at, ...rest } = item;
// // // // //     let pos;
// // // // //     if (at === 'start') pos = 0;
// // // // //     else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
// // // // //     else if (typeof at === 'number') pos = at;
// // // // //     else pos = Number.POSITIVE_INFINITY;
// // // // //     return { item: rest, pos, order: i };
// // // // //   });

// // // // //   // Sort: HIGHEST pos first; on ties, LATER original order first.
// // // // //   // Splicing from the back means earlier (lower-pos / earlier-order)
// // // // //   // items don't get shifted by later inserts, so their indices stay
// // // // //   // anchored to the original autoList.
// // // // //   decorated.sort((a, b) => {
// // // // //     if (a.pos !== b.pos) return b.pos - a.pos;
// // // // //     return b.order - a.order;
// // // // //   });

// // // // //   const result = [...autoList];
// // // // //   decorated.forEach(({ item, pos }) => {
// // // // //     if (pos === Number.POSITIVE_INFINITY) {
// // // // //       result.push(item);
// // // // //     } else {
// // // // //       const clamped = Math.max(0, Math.min(pos, result.length));
// // // // //       result.splice(clamped, 0, item);
// // // // //     }
// // // // //   });

// // // // //   return result;
// // // // // };


// // // // // /* ================================================================
// // // // //    ICON
// // // // //    ================================================================ */

// // // // // const SidebarIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // // //   if (!icon) return null;
// // // // //   if (typeof icon === 'string') {
// // // // //     if (icon.trim().startsWith('<svg')) {
// // // // //       return <span style={{ width: size, height: size, display: 'inline-flex' }} dangerouslySetInnerHTML={{ __html: icon }} />;
// // // // //     }
// // // // //     return <span style={{ fontSize: size, color, lineHeight: 1 }}>{icon}</span>;
// // // // //   }
// // // // //   return null;
// // // // // };


// // // // // /* ================================================================
// // // // //    SIDEBAR
// // // // //    FIX 8: hidden below mobile breakpoint via inline style driven by
// // // // //    useIsMobile(). When mobile, sidebar is not rendered at all.
// // // // //    ================================================================ */

// // // // // const Sidebar = ({ groups, brandName, brandSub, open, onToggle, theme }) => {
// // // // //   const ref = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // // //     document.addEventListener('click', handler);
// // // // //     return () => document.removeEventListener('click', handler);
// // // // //   }, [open, onToggle]);

// // // // //   const flatLinks = useMemo(() => groups.flatMap((g) => g.links || []), [groups]);

// // // // //   return (
// // // // //     <aside
// // // // //       ref={ref}
// // // // //       style={{
// // // // //         position: 'fixed',
// // // // //         left: 0,
// // // // //         top: NAVBAR_HEIGHT,
// // // // //         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
// // // // //         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // // //         background: theme.sidebarBg,
// // // // //         zIndex: 90,
// // // // //         display: 'flex',
// // // // //         flexDirection: 'column',
// // // // //         transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // //         overflow: 'hidden',
// // // // //         boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // // //         fontFamily: FONT_FAMILY,
// // // // //       }}
// // // // //     >
// // // // //       <style dangerouslySetInnerHTML={{ __html: `.vtp-sb-nav::-webkit-scrollbar { display: none; }` }} />

// // // // //       <button
// // // // //         onClick={() => onToggle(!open)}
// // // // //         aria-label="Toggle sidebar"
// // // // //         style={{
// // // // //           width: '100%', height: 44,
// // // // //           display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // //           background: 'none', border: 'none', cursor: 'pointer',
// // // // //           color: theme.sidebarTextMuted,
// // // // //           flexShrink: 0,
// // // // //           borderBottom: `1px solid ${theme.sidebarDivider}`,
// // // // //         }}
// // // // //         onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
// // // // //         onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
// // // // //       >
// // // // //         <svg
// // // // //           style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
// // // // //           viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
// // // // //         >
// // // // //           <polyline points="9 18 15 12 9 6" />
// // // // //         </svg>
// // // // //       </button>

// // // // //       {(brandName || brandSub) && (
// // // // //         <div style={{
// // // // //           padding: '14px 20px 10px',
// // // // //           opacity: open ? 1 : 0,
// // // // //           transition: 'opacity 0.15s',
// // // // //           transitionDelay: open ? '0.1s' : '0s',
// // // // //           whiteSpace: 'nowrap',
// // // // //         }}>
// // // // //           {brandName && <span style={{ fontSize: 18, fontWeight: 700, color: theme.sidebarText, display: 'block', marginBottom: 2 }}>{brandName}</span>}
// // // // //           {brandSub && <span style={{ fontSize: 12, color: theme.sidebarTextMuted, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // // //         </div>
// // // // //       )}

// // // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 0' }}>
// // // // //         {flatLinks.slice(0, 12).map((lnk, i) => (
// // // // //           <SidebarDot key={i} label={lnk.label} href={lnk.href} theme={theme} />
// // // // //         ))}
// // // // //       </div>

// // // // //       <nav
// // // // //         className="vtp-sb-nav"
// // // // //         style={{
// // // // //           display: open ? 'flex' : 'none',
// // // // //           flexDirection: 'column',
// // // // //           padding: '8px 0',
// // // // //           flex: 1,
// // // // //           overflowY: 'auto',
// // // // //           overflowX: 'hidden',
// // // // //           scrollbarWidth: 'none',
// // // // //           msOverflowStyle: 'none',
// // // // //         }}
// // // // //       >
// // // // //         {groups.map((group, gi) => (
// // // // //           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
// // // // //         ))}
// // // // //       </nav>
// // // // //     </aside>
// // // // //   );
// // // // // };

// // // // // const SidebarDot = ({ label, href, theme }) => {
// // // // //   const [h, setH] = useState(false);
// // // // //   return (
// // // // //     <Link
// // // // //       href={href || '#'}
// // // // //       style={{ position: 'relative', display: 'inline-block' }}
// // // // //       onMouseEnter={() => setH(true)}
// // // // //       onMouseLeave={() => setH(false)}
// // // // //     >
// // // // //       <span style={{
// // // // //         display: 'block',
// // // // //         width: 8, height: 8,
// // // // //         borderRadius: '50%',
// // // // //         background: h ? theme.sidebarText : theme.sidebarTextMuted,
// // // // //         transition: 'all 0.2s',
// // // // //         transform: h ? 'scale(1.5)' : 'scale(1)',
// // // // //       }} />
// // // // //       <span style={{
// // // // //         position: 'absolute',
// // // // //         left: 22, top: '50%',
// // // // //         transform: 'translateY(-50%)',
// // // // //         background: theme.text, color: '#fff',
// // // // //         fontSize: 13, padding: '4px 10px',
// // // // //         borderRadius: 4, whiteSpace: 'nowrap',
// // // // //         opacity: h ? 1 : 0, pointerEvents: 'none',
// // // // //         transition: 'opacity 0.15s', zIndex: 10,
// // // // //       }}>{label}</span>
// // // // //     </Link>
// // // // //   );
// // // // // };

// // // // // const SidebarGroup = ({ group, theme, isFirst }) => (
// // // // //   <div style={{ marginTop: isFirst ? 0 : 12 }}>
// // // // //     {!isFirst && <div style={{ height: 1, background: theme.sidebarDivider, margin: '0 20px 12px' }} />}
// // // // //     {(group.title || group.icon) && (
// // // // //       <div style={{
// // // // //         display: 'flex', alignItems: 'center', gap: 8,
// // // // //         padding: '8px 20px',
// // // // //         fontSize: 11, fontWeight: 700,
// // // // //         textTransform: 'uppercase', letterSpacing: 1.2,
// // // // //         color: theme.sidebarTextMuted,
// // // // //       }}>
// // // // //         {group.icon && <SidebarIcon icon={group.icon} size={14} color={theme.sidebarTextMuted} />}
// // // // //         {group.title && <span>{group.title}</span>}
// // // // //       </div>
// // // // //     )}
// // // // //     {(group.links || []).map((lnk, i) => (
// // // // //       <SidebarLink key={i} link={lnk} theme={theme} />
// // // // //     ))}
// // // // //   </div>
// // // // // );

// // // // // const SidebarLink = ({ link, theme }) => {
// // // // //   const [h, setH] = useState(false);
// // // // //   return (
// // // // //     <Link
// // // // //       href={link.href || '#'}
// // // // //       style={{
// // // // //         display: 'flex',
// // // // //         alignItems: 'center',
// // // // //         gap: 10,
// // // // //         padding: '9px 20px',
// // // // //         fontSize: 14,
// // // // //         fontWeight: 500,
// // // // //         color: h ? theme.sidebarText : theme.sidebarTextMuted,
// // // // //         textDecoration: 'none',
// // // // //         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
// // // // //         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
// // // // //         paddingLeft: h ? 17 : 20,
// // // // //         transition: 'all 0.15s',
// // // // //         lineHeight: 1.4,
// // // // //       }}
// // // // //       onMouseEnter={() => setH(true)}
// // // // //       onMouseLeave={() => setH(false)}
// // // // //     >
// // // // //       {link.icon && (
// // // // //         <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // // //           <SidebarIcon icon={link.icon} size={15} color={h ? theme.sidebarText : theme.sidebarTextMuted} />
// // // // //         </span>
// // // // //       )}
// // // // //       <span style={{ flex: 1, minWidth: 0 }}>{link.label}</span>
// // // // //     </Link>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    QUICK NAV
// // // // //    ================================================================ */

// // // // // const QuickNav = ({ items, dropdownLabel, theme, onJump }) => {
// // // // //   const [open, setOpen] = useState(false);
// // // // //   if (!items.length) return null;

// // // // //   return (
// // // // //     <nav style={{
// // // // //       maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px',
// // // // //       background: theme.bgSubtle, borderRadius: 12,
// // // // //       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
// // // // //     }}>
// // // // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
// // // // //         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
// // // // //           <div
// // // // //             style={{ position: 'relative' }}
// // // // //             onMouseEnter={() => setOpen(true)}
// // // // //             onMouseLeave={() => setOpen(false)}
// // // // //           >
// // // // //             <button style={{
// // // // //               display: 'flex', alignItems: 'center', gap: 6,
// // // // //               padding: '9px 16px', border: 'none', borderRadius: 8,
// // // // //               background: open ? theme.accentHover : theme.accent,
// // // // //               color: '#fff', fontSize: '1rem', fontWeight: 600,
// // // // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // // // //               cursor: 'pointer', transition: 'background 0.2s ease',
// // // // //             }}>
// // // // //               {dropdownLabel}
// // // // //               <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
// // // // //                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
// // // // //               </svg>
// // // // //             </button>
// // // // //             <div style={{
// // // // //               position: 'absolute', top: 'calc(100% + 6px)', left: 0,
// // // // //               minWidth: 320, background: '#fff',
// // // // //               border: `1px solid ${theme.border}`, borderRadius: 10,
// // // // //               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
// // // // //               transition: 'all 0.2s ease', zIndex: 100,
// // // // //               maxHeight: 400, overflowY: 'auto',
// // // // //               opacity: open ? 1 : 0,
// // // // //               visibility: open ? 'visible' : 'hidden',
// // // // //               transform: open ? 'translateY(0)' : 'translateY(-8px)',
// // // // //             }}>
// // // // //               {items.map((it, i) => (
// // // // //                 <a key={i} href={`#group-${i}`}
// // // // //                   style={{
// // // // //                     display: 'block', padding: '13px 18px',
// // // // //                     textDecoration: 'none', color: theme.text,
// // // // //                     fontSize: '1.05rem', fontWeight: 500,
// // // // //                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
// // // // //                     borderBottom: `1px solid ${theme.bgSubtle}`,
// // // // //                     transition: 'all 0.15s ease',
// // // // //                   }}
// // // // //                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(i); }}
// // // // //                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
// // // // //                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
// // // // //                   {it.title}
// // // // //                 </a>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //           <span style={{ fontSize: '1.05rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
// // // // //         </div>
// // // // //         <span style={{
// // // // //           fontSize: '1rem', color: theme.text,
// // // // //           background: theme.chipBg, padding: '6px 16px',
// // // // //           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
// // // // //         }}>{items.length} tools</span>
// // // // //       </div>
// // // // //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
// // // // //         {items.map((it, i) => (
// // // // //           <a key={i} href={`#group-${i}`}
// // // // //             style={{
// // // // //               padding: '10px 20px', border: 'none', borderRadius: 22,
// // // // //               textDecoration: 'none', color: '#fff',
// // // // //               fontSize: '1.05rem', fontWeight: 500,
// // // // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // // // //               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
// // // // //               background: theme.accent,
// // // // //             }}
// // // // //             onClick={(e) => { e.preventDefault(); onJump(i); }}
// // // // //             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
// // // // //             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
// // // // //             {generateShortTitle(it.title)}
// // // // //           </a>
// // // // //         ))}
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    TOOLS PAGE HEADER
// // // // //    ================================================================ */

// // // // // const ToolsHeader = ({ items, intro, icon, article, theme }) => {
// // // // //   const stats = useMemo(() => {
// // // // //     const toolsCount = items.length;
// // // // //     const cats = new Set(items.map((i) => i.category).filter(Boolean));
// // // // //     return { toolsCount, categoriesCount: cats.size };
// // // // //   }, [items]);

// // // // //   if (!items.length) return null;

// // // // //   return (
// // // // //     <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
// // // // //       <div style={{
// // // // //         background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
// // // // //         border: `2px solid ${theme.border}`,
// // // // //         padding: '34px 38px',
// // // // //         borderRadius: article ? '16px 16px 0 0' : 16,
// // // // //         borderBottom: article ? 'none' : `2px solid ${theme.border}`,
// // // // //       }}>
// // // // //         {intro && (
// // // // //           <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
// // // // //             <div style={{
// // // // //               width: 64, height: 64, borderRadius: 14,
// // // // //               display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // // //               fontSize: '1.85rem', flexShrink: 0,
// // // // //               background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
// // // // //             }}>{icon}</div>
// // // // //             <div style={{ flex: 1 }}>
// // // // //               {intro.title && <h2 style={{
// // // // //                 fontSize: '1.65rem', fontWeight: 600, color: theme.text,
// // // // //                 fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
// // // // //                 margin: '0 0 10px 0', lineHeight: 1.3,
// // // // //               }}>{intro.title}</h2>}
// // // // //               {intro.description && <p style={{
// // // // //                 fontSize: '1.2rem', color: theme.textSecondary,
// // // // //                 fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
// // // // //                 lineHeight: 1.55, margin: 0,
// // // // //               }}>{intro.description}</p>}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //         {intro?.tip && (
// // // // //           <div style={{
// // // // //             background: theme.tipBg,
// // // // //             border: `1px solid ${theme.border}`,
// // // // //             borderLeft: `4px solid ${theme.accent}`,
// // // // //             borderRadius: 8, padding: '17px 22px', marginBottom: 24,
// // // // //             display: 'flex', alignItems: 'center', gap: 14,
// // // // //             fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400,
// // // // //             letterSpacing: '0.005em', color: theme.tipText,
// // // // //           }}>
// // // // //             <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
// // // // //             <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
// // // // //           </div>
// // // // //         )}
// // // // //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
// // // // //           <div style={{ display: 'flex', gap: 28 }}>
// // // // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.toolsCount}</span>
// // // // //               <span>Tools</span>
// // // // //             </div>
// // // // //             {stats.categoriesCount > 0 && (
// // // // //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // // //                 <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.categoriesCount}</span>
// // // // //                 <span>Categories</span>
// // // // //               </div>
// // // // //             )}
// // // // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>100%</span>
// // // // //               <span>Free</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //       {article && (
// // // // //         <div style={{
// // // // //           background: theme.bgMuted,
// // // // //           border: `2px solid ${theme.border}`,
// // // // //           borderTop: 'none',
// // // // //           borderRadius: '0 0 16px 16px',
// // // // //           padding: 24,
// // // // //         }}>
// // // // //           <div style={{
// // // // //             background: theme.bgSubtle,
// // // // //             border: `2px solid ${theme.borderStrong}`,
// // // // //             borderRadius: 12,
// // // // //             padding: '28px 32px',
// // // // //           }}>
// // // // //             <div style={{
// // // // //               fontSize: '1.08rem',
// // // // //               fontFamily: 'Georgia, "Times New Roman", serif',
// // // // //               fontWeight: 500, color: theme.text,
// // // // //               lineHeight: 1.85, letterSpacing: '0.01em',
// // // // //             }}>
// // // // //               {processContent(article)}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    BIG CARD
// // // // //    FIX 6: reset imgFailed when item.image changes.
// // // // //    ================================================================ */

// // // // // const BigCard = ({ item, theme }) => {
// // // // //   const [imgFailed, setImgFailed] = useState(false);
// // // // //   useEffect(() => { setImgFailed(false); }, [item.image]);

// // // // //   const hasImage = isValidImagePath(item.image) && !imgFailed;
// // // // //   const hasSvg = !hasImage && isValidSvg(item.svg);
// // // // //   const hasVisual = hasImage || hasSvg;

// // // // //   return (
// // // // //     <div className="vtp-card" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
// // // // //       {hasImage && (
// // // // //         <div className="vtp-image-container">
// // // // //           <Image src={item.image} alt={item.imageAlt || item.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// // // // //         </div>
// // // // //       )}
// // // // //       {hasSvg && (
// // // // //         <div className="vtp-image-container vtp-svg-host">
// // // // //           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
// // // // //         </div>
// // // // //       )}
// // // // //       <div className={`vtp-content ${hasVisual ? 'vtp-content-with-image' : 'vtp-content-full'}`}>
// // // // //         <div>
// // // // //           <div className="vtp-title-row">
// // // // //             <h3 className="vtp-title" style={{ color: theme.cardText }}>{item.title}</h3>
// // // // //           </div>
// // // // //           <p className="vtp-description" style={{ color: theme.cardText, opacity: 0.9 }}>{item.description}</p>
// // // // //         </div>
// // // // //         <div className="vtp-footer">
// // // // //           <Link
// // // // //             href={item.href || '#'}
// // // // //             className="vtp-view-button"
// // // // //             style={{ color: theme.cardText, borderColor: theme.cardText }}
// // // // //           >View Details</Link>
// // // // //           <button className="vtp-menu-button" aria-label="More">
// // // // //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// // // // //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// // // // //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    VIEW MINI-CARD
// // // // //    FIX 6: reset imgFailed when view.image changes.
// // // // //    ================================================================ */

// // // // // const ViewMiniCard = ({ view, theme }) => {
// // // // //   const [imgFailed, setImgFailed] = useState(false);
// // // // //   useEffect(() => { setImgFailed(false); }, [view.image]);

// // // // //   const hasImage = isValidImagePath(view.image) && !imgFailed;
// // // // //   const hasSvg = !hasImage && isValidSvg(view.svg);
// // // // //   const hasVisual = hasImage || hasSvg;

// // // // //   return (
// // // // //     <Link href={view.href || '#'} className="vtp-mini" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
// // // // //       {hasImage && (
// // // // //         <div className="vtp-mini-visual">
// // // // //           <Image src={view.image} alt={view.imageAlt || view.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// // // // //         </div>
// // // // //       )}
// // // // //       {hasSvg && (
// // // // //         <div className="vtp-mini-visual vtp-svg-host">
// // // // //           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(view.svg) }} />
// // // // //         </div>
// // // // //       )}
// // // // //       <div className={`vtp-mini-content ${hasVisual ? 'vtp-mini-content-with-visual' : 'vtp-mini-content-full'}`}>
// // // // //         <div className="vtp-mini-title" style={{ color: theme.cardText }}>{view.title}</div>
// // // // //         {view.formula && (
// // // // //           <div className="vtp-mini-formula" style={{ color: theme.cardText, opacity: 0.95 }}>
// // // // //             {processContent(wrapFormula(view.formula))}
// // // // //           </div>
// // // // //         )}
// // // // //         {!view.formula && view.shortDescription && (
// // // // //           <div className="vtp-mini-desc" style={{ color: theme.cardText, opacity: 0.9 }}>
// // // // //             {processContent(view.shortDescription)}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </Link>
// // // // //   );
// // // // // };


// // // // // /* ================================================================
// // // // //    GROUP PANEL
// // // // //    ================================================================ */

// // // // // const GroupPanel = ({ group, theme, anchorId }) => (
// // // // //   <section
// // // // //     id={anchorId}
// // // // //     style={{
// // // // //       background: hexToRgba(theme.accent, 0.06),
// // // // //       borderRadius: 12,
// // // // //       overflow: 'hidden',
// // // // //       boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
// // // // //       marginBottom: '3rem',
// // // // //     }}
// // // // //   >
// // // // //     <div style={{ background: theme.accent, height: 4 }} />

// // // // //     <div style={{ padding: '22px 24px' }}>
// // // // //       <div style={{
// // // // //         display: 'flex',
// // // // //         alignItems: 'baseline',
// // // // //         justifyContent: 'space-between',
// // // // //         gap: '1rem',
// // // // //         flexWrap: 'wrap',
// // // // //         marginBottom: 18,
// // // // //       }}>
// // // // //         <div>
// // // // //           <div style={{
// // // // //             fontSize: 11,
// // // // //             fontWeight: 700,
// // // // //             textTransform: 'uppercase',
// // // // //             letterSpacing: 1,
// // // // //             color: theme.accent,
// // // // //             marginBottom: 4,
// // // // //             fontFamily: FONT_FAMILY,
// // // // //           }}>
// // // // //             {group.views.length} {group.views.length === 1 ? 'tool' : 'tools'}
// // // // //           </div>
// // // // //           <div style={{
// // // // //             fontSize: '1.5rem',
// // // // //             fontWeight: 600,
// // // // //             color: theme.text,
// // // // //             fontFamily: FONT_FAMILY,
// // // // //             letterSpacing: '-0.01em',
// // // // //           }}>
// // // // //             {group.title}
// // // // //           </div>
// // // // //         </div>
// // // // //         <Link
// // // // //           href={group.href || '#'}
// // // // //           style={{
// // // // //             fontSize: '0.9rem',
// // // // //             fontWeight: 500,
// // // // //             color: theme.accent,
// // // // //             border: `1px solid ${theme.accent}`,
// // // // //             padding: '4px 12px',
// // // // //             borderRadius: 999,
// // // // //             textDecoration: 'none',
// // // // //             fontFamily: FONT_FAMILY,
// // // // //             whiteSpace: 'nowrap',
// // // // //             transition: 'all 0.2s ease',
// // // // //           }}
// // // // //           onMouseEnter={(e) => { e.currentTarget.style.background = hexToRgba(theme.accent, 0.1); }}
// // // // //           onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
// // // // //         >
// // // // //           View All →
// // // // //         </Link>
// // // // //       </div>

// // // // //       <div className="vtp-mini-grid">
// // // // //         {group.views.map((view, vi) => (
// // // // //           <ViewMiniCard key={vi} view={view} theme={theme} />
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   </section>
// // // // // );


// // // // // /* ================================================================
// // // // //    STYLES
// // // // //    ================================================================ */

// // // // // const PAGE_CSS = `
// // // // // .vtp-section {
// // // // //   width: 90%; max-width: 1200px;
// // // // //   margin: 0 auto 3rem; padding: 0 1rem;
// // // // // }
// // // // // .vtp-mini-grid {
// // // // //   display: grid;
// // // // //   grid-template-columns: repeat(3, minmax(0, 1fr));
// // // // //   grid-auto-rows: 1fr;
// // // // //   gap: 1rem;
// // // // // }
// // // // // @media (max-width: 768px) { .vtp-mini-grid { grid-template-columns: 1fr; } }
// // // // // .vtp-mini {
// // // // //   display: flex; flex-direction: column; border-radius: 0.5rem;
// // // // //   overflow: hidden; text-decoration: none;
// // // // //   height: 100%;
// // // // //   min-height: 140px;
// // // // //   transition: transform 0.2s ease, box-shadow 0.2s ease;
// // // // // }
// // // // // .vtp-mini:hover {
// // // // //   transform: translateY(-2px); box-shadow: 0 8px 16px -4px rgba(0,0,0,0.15);
// // // // // }
// // // // // .vtp-mini-visual {
// // // // //   width: 100%; height: 110px; position: relative;
// // // // //   flex-shrink: 0; overflow: hidden;
// // // // // }
// // // // // .vtp-mini-content {
// // // // //   padding: 12px 14px; flex: 1;
// // // // //   display: flex; flex-direction: column; justify-content: center;
// // // // // }
// // // // // .vtp-mini-content-full { min-height: 100%; }
// // // // // .vtp-mini-title {
// // // // //   font-size: 0.95rem; font-weight: 600; font-family: ${FONT_FAMILY};
// // // // //   margin: 0 0 4px; line-height: 1.3;
// // // // // }
// // // // // .vtp-mini-formula { font-size: 0.9rem; margin: 0; }
// // // // // .vtp-mini-formula .katex { color: inherit; }
// // // // // .vtp-mini-desc {
// // // // //   font-size: 0.8rem; font-family: ${FONT_FAMILY};
// // // // //   margin: 0; line-height: 1.4;
// // // // // }
// // // // // .vtp-svg-host {
// // // // //   display: flex; align-items: center; justify-content: center;
// // // // //   background: rgba(255,255,255,0.06); overflow: hidden;
// // // // // }
// // // // // .vtp-svg-inner {
// // // // //   width: 80%; height: 80%;
// // // // //   display: flex; align-items: center; justify-content: center; overflow: hidden;
// // // // // }
// // // // // .vtp-svg-inner > svg {
// // // // //   max-width: 100%; max-height: 100%; width: auto; height: auto; display: block;
// // // // // }
// // // // // .vtp-grid {
// // // // //   display: grid; gap: 2rem; grid-template-columns: repeat(2, minmax(0, 1fr));
// // // // // }
// // // // // .vtp-grid > :last-child:nth-child(2n-1) {
// // // // //   grid-column: 1 / -1; margin: 0 auto;
// // // // //   max-width: calc(50% - 1rem); width: 100%;
// // // // // }
// // // // // .vtp-card {
// // // // //   border-radius: 0.5rem; overflow: hidden; display: flex;
// // // // //   min-height: 200px; transition: box-shadow 0.3s ease;
// // // // // }
// // // // // .vtp-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
// // // // // .vtp-image-container {
// // // // //   width: 50%; position: relative; border: solid 1px lightgray;
// // // // //   flex-shrink: 0; overflow: hidden;
// // // // // }
// // // // // .vtp-content {
// // // // //   padding: 1.5rem; display: flex; flex-direction: column;
// // // // //   justify-content: space-between;
// // // // // }
// // // // // .vtp-content-full { width: 100%; }
// // // // // .vtp-content-with-image { width: 50%; }
// // // // // .vtp-title-row {
// // // // //   display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;
// // // // // }
// // // // // .vtp-title {
// // // // //   font-size: 1.25rem; font-weight: 600; line-height: 1.3;
// // // // //   font-family: ${FONT_FAMILY}; margin: 0;
// // // // // }
// // // // // .vtp-description {
// // // // //   font-size: 0.9rem; line-height: 1.5;
// // // // //   font-family: ${FONT_FAMILY}; margin: 0.5rem 0 0;
// // // // // }
// // // // // .vtp-footer {
// // // // //   display: flex; justify-content: space-between;
// // // // //   align-items: center; margin-top: 1rem;
// // // // // }
// // // // // .vtp-view-button {
// // // // //   font-weight: 500; font-size: 0.875rem;
// // // // //   padding: 0.5rem 1rem; border: 1px solid;
// // // // //   border-radius: 9999px; background: transparent; cursor: pointer;
// // // // //   transition: all 0.2s ease; text-decoration: none; font-family: ${FONT_FAMILY};
// // // // // }
// // // // // .vtp-view-button:hover { background: rgba(255,255,255,0.15); }
// // // // // .vtp-menu-button {
// // // // //   padding: 0.5rem; background: none; border: none; cursor: pointer;
// // // // //   display: flex; flex-direction: column; gap: 0.25rem;
// // // // //   opacity: 0.5; transition: opacity 0.2s ease;
// // // // // }
// // // // // .vtp-menu-button:hover { opacity: 1; }
// // // // // .vtp-menu-dot { width: 4px; height: 4px; border-radius: 50%; }
// // // // // @media (max-width: 768px) {
// // // // //   .vtp-grid { grid-template-columns: 1fr; }
// // // // //   .vtp-grid > :last-child:nth-child(2n-1) { grid-column: 1; max-width: 100%; }
// // // // //   .vtp-image-container { width: 100%; height: 180px; }
// // // // //   .vtp-content-with-image { width: 100%; }
// // // // //   .vtp-card { flex-direction: column; }
// // // // // }
// // // // // `;


// // // // // /* ================================================================
// // // // //    AUTO-PULL SIDEBAR GROUPS
// // // // //    ================================================================ */

// // // // // const buildAutoSidebarGroups = (list) => {
// // // // //   const groups = [];
// // // // //   const standalone = [];
// // // // //   list.forEach((tool) => {
// // // // //     if (tool.hasViews && Array.isArray(tool.views) && tool.views.length > 0) {
// // // // //       groups.push({
// // // // //         title: tool.title,
// // // // //         links: tool.views.map((v) => ({ label: v.title, href: v.href })),
// // // // //       });
// // // // //     } else {
// // // // //       standalone.push({ label: tool.title, href: tool.href });
// // // // //     }
// // // // //   });
// // // // //   if (standalone.length > 0) groups.push({ title: 'Tools', links: standalone });
// // // // //   return groups;
// // // // // };


// // // // // /* ================================================================
// // // // //    MAIN
// // // // //    FIX 2: split list into groupsWithViews / standalone with their
// // // // //    original index captured in one pass — no more O(n²) indexOf.
// // // // //    FIX 8: hide sidebar entirely on mobile via useIsMobile().
// // // // //    ================================================================ */

// // // // // const VisualToolsPage = ({
// // // // //   tools,
// // // // //   pageTitle = 'Visual Tools',
// // // // //   intro = null,
// // // // //   article = null,
// // // // //   icon = '🔍',
// // // // //   dropdownLabel = 'All Tools',
// // // // //   bodyOffsetTop = 60,

// // // // //   theme = 'deepBlue',
// // // // //   themeOverrides = null,

// // // // //   sidebar = false,
// // // // //   sidebarBrandName = null,
// // // // //   sidebarBrandSub = null,

// // // // //   customItems = null,
// // // // // }) => {
// // // // //   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);
// // // // //   const isMobile = useIsMobile();

// // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // //   const autoList = Array.isArray(tools)
// // // // //     ? tools
// // // // //     : (tools && Array.isArray(tools.children) ? tools.children : []);

// // // // //   const list = useMemo(
// // // // //     () => mergeWithCustomItems(autoList, customItems),
// // // // //     [autoList, customItems]
// // // // //   );

// // // // //   const handleJump = (i) => {
// // // // //     const el = document.getElementById(`group-${i}`);
// // // // //     if (!el) return;
// // // // //     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
// // // // //     window.scrollTo({ top: y, behavior: 'smooth' });
// // // // //   };

// // // // //   // Single-pass split with captured original indices.
// // // // //   const { groupsWithViews, standalone } = useMemo(() => {
// // // // //     const g = [];
// // // // //     const s = [];
// // // // //     list.forEach((item, idx) => {
// // // // //       if (item.hasViews && Array.isArray(item.views) && item.views.length > 0) {
// // // // //         g.push({ item, indexInList: idx });
// // // // //       } else {
// // // // //         s.push({ item, indexInList: idx });
// // // // //       }
// // // // //     });
// // // // //     return { groupsWithViews: g, standalone: s };
// // // // //   }, [list]);

// // // // //   const sidebarGroups = useMemo(() => {
// // // // //     if (!sidebar) return null;
// // // // //     if (Array.isArray(sidebar)) return sidebar;
// // // // //     if (sidebar === true) return buildAutoSidebarGroups(list);
// // // // //     return null;
// // // // //   }, [sidebar, list]);

// // // // //   const showSidebar = !isMobile && !!sidebarGroups && sidebarGroups.length > 0;
// // // // //   const contentMarginLeft = showSidebar
// // // // //     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
// // // // //     : 0;

// // // // //   return (
// // // // //     <>
// // // // //       <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

// // // // //       {showSidebar && (
// // // // //         <Sidebar
// // // // //           groups={sidebarGroups}
// // // // //           brandName={sidebarBrandName || pageTitle}
// // // // //           brandSub={sidebarBrandSub}
// // // // //           open={sidebarOpen}
// // // // //           onToggle={setSidebarOpen}
// // // // //           theme={t}
// // // // //         />
// // // // //       )}

// // // // //       <div style={{
// // // // //         marginLeft: contentMarginLeft,
// // // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // // //       }}>
// // // // //         <h1 style={{
// // // // //           fontFamily: "'Source Serif 4', Georgia, serif",
// // // // //           fontSize: '2.4rem',
// // // // //           fontWeight: 700,
// // // // //           color: t.pageTitle,
// // // // //           textAlign: 'center',
// // // // //           margin: '0 0 24px',
// // // // //         }}>
// // // // //           {pageTitle}
// // // // //         </h1>

// // // // //         <QuickNav
// // // // //           items={list}
// // // // //           dropdownLabel={dropdownLabel}
// // // // //           theme={t}
// // // // //           onJump={handleJump}
// // // // //         />

// // // // //         <ToolsHeader
// // // // //           items={list}
// // // // //           intro={intro}
// // // // //           icon={icon}
// // // // //           article={article}
// // // // //           theme={t}
// // // // //         />

// // // // //         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
// // // // //           {groupsWithViews.map(({ item: group, indexInList }) => (
// // // // //             <div key={`g-${indexInList}`} className="vtp-section">
// // // // //               <GroupPanel group={group} theme={t} anchorId={`group-${indexInList}`} />
// // // // //             </div>
// // // // //           ))}

// // // // //           {standalone.length > 0 && (
// // // // //             <section className="vtp-section">
// // // // //               <div className="vtp-grid">
// // // // //                 {standalone.map(({ item: tool, indexInList }) => (
// // // // //                   <div key={`s-${indexInList}`} id={`group-${indexInList}`}>
// // // // //                     <BigCard item={tool} theme={t} />
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </section>
// // // // //           )}
// // // // //         </div>

// // // // //         <div style={{ height: 60 }} />
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default VisualToolsPage;



// // // // /**
// // // //  * VisualToolsPage — v15 (single-file build)
// // // //  *
// // // //  * Combines: gridLayout utilities + card variants (V1..V4 mini, B1..B3 big) +
// // // //  * sub-group blocks (default + tabs) + group panel + sidebar + quick nav +
// // // //  * tools header + main page.
// // // //  *
// // // //  * Helper `buildToolIndexData` lives in its own file (buildToolsPageData.js).
// // // //  *
// // // //  * Card rules:
// // // //  *   - Every card has a visible CTA ("Open tool →" / "View Details").
// // // //  *   - The entire card is also a single Link (clicking anywhere navigates).
// // // //  *   - The CTA exists for affordance — users see the card IS clickable.
// // // //  *
// // // //  * Variant resolution (cascading, last wins):
// // // //  *   - per-card: item.cardVariant
// // // //  *   - per-group: groupVariants[item.category]
// // // //  *   - global: miniCardVariant / bigCardVariant
// // // //  * Auto-fallback when an item lacks a visual:
// // // //  *   V1/V2 → V3,  V4 (no formula) → V1,  B1/B2 → B3.
// // // //  */

// // // // import React, { useMemo, useState, useEffect, useRef } from 'react';
// // // // import Link from 'next/link';
// // // // import Image from 'next/image';
// // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // import { getTheme } from './visualToolsPageThemes';


// // // // /* ================================================================
// // // //    CONSTANTS
// // // //    ================================================================ */

// // // // const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// // // // const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// // // // const NAVBAR_HEIGHT = 55;
// // // // const SIDEBAR_COLLAPSED = 68;
// // // // const SIDEBAR_EXPANDED = 290;
// // // // const MOBILE_BREAKPOINT = 768;

// // // // const UNCATEGORIZED_LABEL = 'Other';
// // // // const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// // // // const CTA_OPEN = 'Open tool →';
// // // // const CTA_VIEW = 'View Details';


// // // // /* ================================================================
// // // //    GENERIC UTILITIES
// // // //    ================================================================ */

// // // // const hexToRgba = (hex, alpha) => {
// // // //   const h = hex.replace('#', '');
// // // //   const r = parseInt(h.substring(0, 2), 16);
// // // //   const g = parseInt(h.substring(2, 4), 16);
// // // //   const b = parseInt(h.substring(4, 6), 16);
// // // //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // // // };

// // // // const generateShortTitle = (title = '') =>
// // // //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // // // function slugify(s) {
// // // //   return String(s || '').toLowerCase().trim()
// // // //     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// // // // }

// // // // function isValidImagePath(val) {
// // // //   if (typeof val !== 'string') return false;
// // // //   const v = val.trim();
// // // //   if (!v) return false;
// // // //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // // // }

// // // // function isValidSvg(val) {
// // // //   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// // // // }

// // // // function isValidIcon(val) {
// // // //   if (typeof val !== 'string') return false;
// // // //   const v = val.trim();
// // // //   if (!v) return false;
// // // //   if (v.startsWith('/') || v.startsWith('http')) return false;
// // // //   if (v.toLowerCase().startsWith('<svg')) return false;
// // // //   return true;
// // // // }

// // // // function constrainSvg(svg) {
// // // //   return svg.replace(
// // // //     /<svg\b([^>]*)>/i,
// // // //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// // // //   );
// // // // }

// // // // function wrapFormula(f) {
// // // //   if (!f) return '';
// // // //   const t = String(f).trim();
// // // //   if (!t) return '';
// // // //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// // // //   return `$${t}$`;
// // // // }

// // // // function getVisualType(item) {
// // // //   if (!item) return null;
// // // //   if (isValidImagePath(item.image)) return 'image';
// // // //   if (isValidSvg(item.svg)) return 'svg';
// // // //   if (isValidIcon(item.icon)) return 'icon';
// // // //   return null;
// // // // }


// // // // /* ================================================================
// // // //    USE-IS-MOBILE HOOK
// // // //    ================================================================ */

// // // // const useIsMobile = () => {
// // // //   const [isMobile, setIsMobile] = useState(false);
// // // //   useEffect(() => {
// // // //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
// // // //     const update = () => setIsMobile(mql.matches);
// // // //     update();
// // // //     mql.addEventListener('change', update);
// // // //     return () => mql.removeEventListener('change', update);
// // // //   }, []);
// // // //   return isMobile;
// // // // };


// // // // /* ================================================================
// // // //    GRID LAYOUT (algorithmic)
// // // //    - max 3 per row, min 2 (except total N === 1)
// // // //    - 3 → 1/3 width, 2 → 1/2 width, 1 → 1/2 centered
// // // //    ================================================================ */

// // // // function rowSizes(N) {
// // // //   if (!Number.isFinite(N) || N <= 0) return [];
// // // //   if (N === 1) return [1];
// // // //   if (N % 3 === 1 && N >= 4) {
// // // //     const fullThrees = (N - 4) / 3;
// // // //     return [...Array(fullThrees).fill(3), 2, 2];
// // // //   }
// // // //   if (N % 3 === 2) {
// // // //     const fullThrees = (N - 2) / 3;
// // // //     return [...Array(fullThrees).fill(3), 2];
// // // //   }
// // // //   return Array(N / 3).fill(3);
// // // // }

// // // // function getGridColumn(rowSize, posInRow) {
// // // //   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;   // cols 1,3,5
// // // //   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;   // cols 1,4
// // // //   if (rowSize === 1) return '2 / span 3';                      // centered
// // // //   return 'auto';
// // // // }

// // // // function buildPlacements(items) {
// // // //   const list = Array.isArray(items) ? items : [];
// // // //   const rows = rowSizes(list.length);
// // // //   const out = [];
// // // //   let idx = 0;
// // // //   for (const rowSize of rows) {
// // // //     for (let pos = 0; pos < rowSize; pos++) {
// // // //       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos) });
// // // //       idx += 1;
// // // //     }
// // // //   }
// // // //   return out;
// // // // }


// // // // /* ================================================================
// // // //    VARIANT RESOLVERS (auto-fallback)
// // // //    ================================================================ */

// // // // const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// // // // const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// // // // function resolveMiniVariant(requested, item) {
// // // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
// // // //   if (!VALID_MINI.has(v)) v = 'v1';
// // // //   const hasVisual  = getVisualType(item) !== null;
// // // //   const hasFormula = !!(item && item.formula);
// // // //   if (v === 'v4' && !hasFormula) v = 'v1';
// // // //   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
// // // //   return v;
// // // // }

// // // // function resolveBigVariant(requested, item) {
// // // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
// // // //   if (!VALID_BIG.has(v)) v = 'b1';
// // // //   const hasVisual = getVisualType(item) !== null;
// // // //   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
// // // //   return v;
// // // // }


// // // // /* ================================================================
// // // //    VISUAL — image / svg / icon, with image-failure fallback
// // // //    ================================================================ */

// // // // const Visual = ({ item, height, mode = 'banner' }) => {
// // // //   const [imgFailed, setImgFailed] = useState(false);
// // // //   useEffect(() => { setImgFailed(false); }, [item && item.image]);

// // // //   const v = getVisualType(item);

// // // //   if (v === 'image' && !imgFailed) {
// // // //     return (
// // // //       <div style={{
// // // //         width: '100%', height, position: 'relative',
// // // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // // //       }}>
// // // //         <Image
// // // //           src={item.image}
// // // //           alt={item.imageAlt || item.title || ''}
// // // //           fill
// // // //           style={{ objectFit: 'cover' }}
// // // //           onError={() => setImgFailed(true)}
// // // //         />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(item.svg))) {
// // // //     return (
// // // //       <div style={{
// // // //         width: '100%', height,
// // // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // // //       }}>
// // // //         <div style={{
// // // //           width: '80%', height: '80%',
// // // //           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
// // // //         }}
// // // //         dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(item.icon))) {
// // // //     return (
// // // //       <div style={{
// // // //         width: '100%', height,
// // // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //         background: 'rgba(255,255,255,0.06)',
// // // //         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
// // // //         opacity: 0.85, flexShrink: 0,
// // // //       }}>
// // // //         {item.icon}
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return null;
// // // // };


// // // // /* ================================================================
// // // //    SHARED CTA STYLES
// // // //    ================================================================ */

// // // // const ctaTextStyle = (theme) => ({
// // // //   fontSize: '0.78rem', fontWeight: 600,
// // // //   color: theme.cardText, opacity: 0.9,
// // // //   textTransform: 'uppercase', letterSpacing: '0.5px',
// // // //   fontFamily: FONT_FAMILY,
// // // // });

// // // // const ctaPillStyle = (theme) => ({
// // // //   display: 'inline-block',
// // // //   border: `1px solid ${theme.cardText}`,
// // // //   padding: '8px 18px', borderRadius: 999,
// // // //   fontSize: '0.88rem', fontWeight: 500,
// // // //   color: theme.cardText, alignSelf: 'flex-start',
// // // //   fontFamily: FONT_FAMILY,
// // // // });


// // // // /* ================================================================
// // // //    MINI · V1 — image top, text bottom
// // // //    ================================================================ */

// // // // const MiniV1 = ({ item, theme }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'column',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 8, overflow: 'hidden', minHeight: 280,
// // // //     textDecoration: 'none', height: '100%',
// // // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //     fontFamily: FONT_FAMILY,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <Visual item={item} height={140} mode="banner" />
// // // //     <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
// // // //       <h3 style={{
// // // //         fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 6,
// // // //         color: theme.cardText, lineHeight: 1.3,
// // // //       }}>{item.title}</h3>
// // // //       {item.description && (
// // // //         <p style={{
// // // //           fontSize: '0.85rem', lineHeight: 1.5, margin: 0,
// // // //           color: theme.cardText, opacity: 0.88, flex: 1,
// // // //         }}>{item.description}</p>
// // // //       )}
// // // //       <div style={{ marginTop: 12, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // // //     </div>
// // // //   </Link>
// // // // );


// // // // /* ================================================================
// // // //    MINI · V2 — image left, text right (now with CTA)
// // // //    ================================================================ */

// // // // const MiniV2 = ({ item, theme }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'row',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 8, overflow: 'hidden', minHeight: 180,
// // // //     textDecoration: 'none', height: '100%',
// // // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //     fontFamily: FONT_FAMILY,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <div style={{ width: '40%', flexShrink: 0 }}>
// // // //       <Visual item={item} height="100%" mode="side" />
// // // //     </div>
// // // //     <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
// // // //       <h3 style={{
// // // //         fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6,
// // // //         color: theme.cardText, lineHeight: 1.3,
// // // //       }}>{item.title}</h3>
// // // //       {item.description && (
// // // //         <p style={{
// // // //           fontSize: '0.82rem', lineHeight: 1.45, margin: 0,
// // // //           color: theme.cardText, opacity: 0.88, flex: 1,
// // // //         }}>{item.description}</p>
// // // //       )}
// // // //       <div style={{ marginTop: 12, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // // //     </div>
// // // //   </Link>
// // // // );


// // // // /* ================================================================
// // // //    MINI · V3 — icon + text (no banner)
// // // //    ================================================================ */

// // // // const MiniV3 = ({ item, theme }) => {
// // // //   const hasIcon = isValidIcon(item.icon);
// // // //   return (
// // // //     <Link href={item.href || '#'} style={{
// // // //       display: 'flex', flexDirection: 'column', gap: 10,
// // // //       background: theme.cardBg, color: theme.cardText,
// // // //       borderRadius: 8, padding: '20px 22px', minHeight: 180,
// // // //       textDecoration: 'none', height: '100%',
// // // //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //       fontFamily: FONT_FAMILY,
// // // //     }}
// // // //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //     >
// // // //       <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
// // // //         {hasIcon && (
// // // //           <div style={{
// // // //             width: 44, height: 44, borderRadius: 10,
// // // //             background: 'rgba(255,255,255,0.15)',
// // // //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //             fontSize: '1.3rem', flexShrink: 0,
// // // //           }}>{item.icon}</div>
// // // //         )}
// // // //         <h3 style={{
// // // //           fontSize: '1.05rem', fontWeight: 600, margin: 0,
// // // //           color: theme.cardText, lineHeight: 1.3,
// // // //         }}>{item.title}</h3>
// // // //       </div>
// // // //       {item.description && (
// // // //         <p style={{
// // // //           fontSize: '0.86rem', lineHeight: 1.5, margin: 0,
// // // //           color: theme.cardText, opacity: 0.88, flex: 1,
// // // //         }}>{item.description}</p>
// // // //       )}
// // // //       <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
// // // //     </Link>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    MINI · V4 — formula prominent (now with CTA)
// // // //    ================================================================ */

// // // // const MiniV4 = ({ item, theme }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'column',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 8, overflow: 'hidden', minHeight: 260,
// // // //     textDecoration: 'none', height: '100%',
// // // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //     fontFamily: FONT_FAMILY,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <div style={{
// // // //       background: 'rgba(255,255,255,0.08)',
// // // //       padding: '28px 16px', textAlign: 'center',
// // // //       fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic',
// // // //       color: theme.cardText, opacity: 0.95, flexShrink: 0,
// // // //     }}>
// // // //       {processContent(wrapFormula(item.formula))}
// // // //     </div>
// // // //     <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
// // // //       <h3 style={{
// // // //         fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4,
// // // //         color: theme.cardText,
// // // //       }}>{item.title}</h3>
// // // //       {item.description && (
// // // //         <p style={{
// // // //           fontSize: '0.82rem', lineHeight: 1.45, margin: 0,
// // // //           color: theme.cardText, opacity: 0.85, flex: 1,
// // // //         }}>{item.description}</p>
// // // //       )}
// // // //       <div style={{ marginTop: 12, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // // //     </div>
// // // //   </Link>
// // // // );


// // // // /* ================================================================
// // // //    BIG · B1 — image left, text right
// // // //    ================================================================ */

// // // // const BigB1 = ({ item, theme }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'row',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 10, overflow: 'hidden', minHeight: 220,
// // // //     textDecoration: 'none', height: '100%',
// // // //     transition: 'box-shadow 0.3s ease',
// // // //     fontFamily: FONT_FAMILY,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <div style={{ width: '45%', flexShrink: 0 }}>
// // // //       <Visual item={item} height="100%" mode="side" />
// // // //     </div>
// // // //     <div style={{
// // // //       padding: '24px 28px', flex: 1,
// // // //       display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
// // // //     }}>
// // // //       <div>
// // // //         <h3 style={{
// // // //           fontSize: '1.4rem', fontWeight: 600, margin: 0, marginBottom: 10,
// // // //           color: theme.cardText, lineHeight: 1.3,
// // // //         }}>{item.title}</h3>
// // // //         {item.description && (
// // // //           <p style={{
// // // //             fontSize: '0.95rem', lineHeight: 1.55, margin: 0,
// // // //             color: theme.cardText, opacity: 0.9,
// // // //           }}>{item.description}</p>
// // // //         )}
// // // //       </div>
// // // //       <div style={{ marginTop: 16, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // // //     </div>
// // // //   </Link>
// // // // );


// // // // /* ================================================================
// // // //    BIG · B2 — image top, text bottom
// // // //    ================================================================ */

// // // // const BigB2 = ({ item, theme }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'column',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 10, overflow: 'hidden', minHeight: 320,
// // // //     textDecoration: 'none', height: '100%',
// // // //     transition: 'box-shadow 0.3s ease',
// // // //     fontFamily: FONT_FAMILY,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <Visual item={item} height={180} mode="banner" />
// // // //     <div style={{
// // // //       padding: '22px 26px', flex: 1,
// // // //       display: 'flex', flexDirection: 'column',
// // // //     }}>
// // // //       <h3 style={{
// // // //         fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8,
// // // //         color: theme.cardText, lineHeight: 1.3,
// // // //       }}>{item.title}</h3>
// // // //       {item.description && (
// // // //         <p style={{
// // // //           fontSize: '0.95rem', lineHeight: 1.55, margin: 0,
// // // //           color: theme.cardText, opacity: 0.9, flex: 1,
// // // //         }}>{item.description}</p>
// // // //       )}
// // // //       <div style={{ marginTop: 16, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // // //     </div>
// // // //   </Link>
// // // // );


// // // // /* ================================================================
// // // //    BIG · B3 — text-led with inline icon
// // // //    ================================================================ */

// // // // const BigB3 = ({ item, theme }) => {
// // // //   const hasIcon = isValidIcon(item.icon);
// // // //   return (
// // // //     <Link href={item.href || '#'} style={{
// // // //       display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
// // // //       background: theme.cardBg, color: theme.cardText,
// // // //       borderRadius: 10, padding: '28px 32px', minHeight: 200,
// // // //       textDecoration: 'none', height: '100%',
// // // //       transition: 'box-shadow 0.3s ease',
// // // //       fontFamily: FONT_FAMILY,
// // // //     }}
// // // //     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // // //     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // // //     >
// // // //       <div>
// // // //         <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
// // // //           {hasIcon && (
// // // //             <div style={{
// // // //               width: 52, height: 52, borderRadius: 12,
// // // //               background: 'rgba(255,255,255,0.15)',
// // // //               display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //               fontSize: '1.6rem', flexShrink: 0,
// // // //             }}>{item.icon}</div>
// // // //           )}
// // // //           <h3 style={{
// // // //             fontSize: '1.4rem', fontWeight: 600, margin: 0,
// // // //             color: theme.cardText, lineHeight: 1.3,
// // // //           }}>{item.title}</h3>
// // // //         </div>
// // // //         {item.description && (
// // // //           <p style={{
// // // //             fontSize: '1rem', lineHeight: 1.6, margin: 0, marginBottom: 18,
// // // //             color: theme.cardText, opacity: 0.9,
// // // //           }}>{item.description}</p>
// // // //         )}
// // // //       </div>
// // // //       <div style={ctaPillStyle(theme)}>{CTA_VIEW}</div>
// // // //     </Link>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    CARD DISPATCHERS
// // // //    ================================================================ */

// // // // const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// // // // const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// // // // const MiniCard = ({ item, theme, variant = 'v1' }) => {
// // // //   const resolved = resolveMiniVariant(variant, item);
// // // //   const Component = MINI_MAP[resolved] || MiniV1;
// // // //   return <Component item={item} theme={theme} />;
// // // // };

// // // // const BigCard = ({ item, theme, variant = 'b1' }) => {
// // // //   const resolved = resolveBigVariant(variant, item);
// // // //   const Component = BIG_MAP[resolved] || BigB1;
// // // //   return <Component item={item} theme={theme} />;
// // // // };


// // // // /* ================================================================
// // // //    ALGORITHMIC GRID WRAPPER
// // // //    ================================================================ */

// // // // const AlgorithmicGrid = ({ items, renderItem }) => {
// // // //   const placements = useMemo(() => buildPlacements(items), [items]);
// // // //   if (!placements.length) return null;
// // // //   return (
// // // //     <div style={{
// // // //       display: 'grid',
// // // //       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
// // // //       gap: '1rem',
// // // //     }}>
// // // //       {placements.map(({ item, gridColumn }, i) => (
// // // //         <div key={i} className="vtp-algo-cell" style={{ gridColumn, minWidth: 0 }}>
// // // //           {renderItem(item)}
// // // //         </div>
// // // //       ))}
// // // //       <style dangerouslySetInnerHTML={{ __html: `
// // // //         @media (max-width: ${MOBILE_BREAKPOINT}px) {
// // // //           .vtp-algo-cell { grid-column: 1 / -1 !important; }
// // // //         }
// // // //       ` }} />
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    INPUT NORMALIZATION
// // // //    ================================================================ */

// // // // const flattenInput = (input) => {
// // // //   if (Array.isArray(input)) return input;
// // // //   if (input && Array.isArray(input.items)) return input.items;
// // // //   if (input && Array.isArray(input.children)) {
// // // //     const out = [];
// // // //     for (const child of input.children) {
// // // //       if (child && child.hasViews && Array.isArray(child.views) && child.views.length > 0) {
// // // //         const inferredCat = child.category || child.title || null;
// // // //         for (const v of child.views) out.push({ ...v, category: v.category || inferredCat });
// // // //       } else if (child) {
// // // //         out.push(child);
// // // //       }
// // // //     }
// // // //     return out;
// // // //   }
// // // //   return [];
// // // // };


// // // // /* ================================================================
// // // //    MERGE CUSTOM ITEMS
// // // //    ================================================================ */

// // // // const mergeWithCustomItems = (autoList, customItems) => {
// // // //   if (!Array.isArray(customItems) || customItems.length === 0) return autoList;
// // // //   const decorated = customItems.map((item, i) => {
// // // //     const { at, ...rest } = item;
// // // //     let pos;
// // // //     if (at === 'start') pos = 0;
// // // //     else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
// // // //     else if (typeof at === 'number') pos = at;
// // // //     else pos = Number.POSITIVE_INFINITY;
// // // //     return { item: rest, pos, order: i };
// // // //   });
// // // //   decorated.sort((a, b) => {
// // // //     if (a.pos !== b.pos) return b.pos - a.pos;
// // // //     return b.order - a.order;
// // // //   });
// // // //   const result = [...autoList];
// // // //   decorated.forEach(({ item, pos }) => {
// // // //     if (pos === Number.POSITIVE_INFINITY) result.push(item);
// // // //     else {
// // // //       const clamped = Math.max(0, Math.min(pos, result.length));
// // // //       result.splice(clamped, 0, item);
// // // //     }
// // // //   });
// // // //   return result;
// // // // };


// // // // /* ================================================================
// // // //    GROUPING
// // // //    ================================================================ */

// // // // const groupItems = (flatList) => {
// // // //   const standalone = [];
// // // //   const catMap = new Map();
// // // //   const catOrder = [];

// // // //   for (const item of flatList) {
// // // //     if (!item) continue;
// // // //     if (!item.category) { standalone.push(item); continue; }
// // // //     if (!catMap.has(item.category)) {
// // // //       catMap.set(item.category, { ungrouped: [], subMap: new Map(), subOrder: [] });
// // // //       catOrder.push(item.category);
// // // //     }
// // // //     const cat = catMap.get(item.category);
// // // //     if (!item.subCategory) cat.ungrouped.push(item);
// // // //     else {
// // // //       if (!cat.subMap.has(item.subCategory)) {
// // // //         cat.subMap.set(item.subCategory, []);
// // // //         cat.subOrder.push(item.subCategory);
// // // //       }
// // // //       cat.subMap.get(item.subCategory).push(item);
// // // //     }
// // // //   }

// // // //   const categories = catOrder.map((catName) => {
// // // //     const cat = catMap.get(catName);
// // // //     const subGroups = cat.subOrder.map((sub) => ({
// // // //       name: sub, items: cat.subMap.get(sub),
// // // //     }));
// // // //     const totalCount = cat.ungrouped.length + subGroups.reduce((s, g) => s + g.items.length, 0);
// // // //     return { category: catName, ungrouped: cat.ungrouped, subGroups, totalCount };
// // // //   });

// // // //   return { categories, standalone };
// // // // };


// // // // /* ================================================================
// // // //    SUB-GROUP BLOCK (default style)
// // // //    ================================================================ */

// // // // const SubGroupBlock = ({ name, items, theme, variantResolver }) => (
// // // //   <div style={{
// // // //     paddingLeft: 16,
// // // //     borderLeft: `3px solid ${theme.accent}`,
// // // //     marginTop: 24,
// // // //   }}>
// // // //     <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
// // // //       <span style={{
// // // //         background: theme.accent, color: '#fff',
// // // //         padding: '4px 14px', borderRadius: 999,
// // // //         fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.3px',
// // // //         fontFamily: FONT_FAMILY,
// // // //       }}>{name}</span>
// // // //       <span style={{
// // // //         fontSize: '0.78rem', color: theme.textMuted, fontFamily: FONT_FAMILY,
// // // //       }}>{items.length} {items.length === 1 ? 'tool' : 'tools'}</span>
// // // //     </div>
// // // //     <AlgorithmicGrid
// // // //       items={items}
// // // //       renderItem={(item) => (
// // // //         <MiniCard item={item} theme={theme} variant={variantResolver(item)} />
// // // //       )}
// // // //     />
// // // //   </div>
// // // // );


// // // // /* ================================================================
// // // //    SUB-GROUP TABS
// // // //    ================================================================ */

// // // // const SubGroupTabs = ({ ungrouped, subGroups, theme, variantResolver }) => {
// // // //   const tabs = [
// // // //     ...(ungrouped.length > 0 ? [{ name: UNCATEGORIZED_LABEL, items: ungrouped }] : []),
// // // //     ...subGroups,
// // // //   ];
// // // //   const [active, setActive] = useState(0);
// // // //   if (tabs.length === 0) return null;
// // // //   const activeTab = tabs[Math.min(active, tabs.length - 1)];
// // // //   return (
// // // //     <div>
// // // //       <div style={{
// // // //         display: 'flex', gap: 4, flexWrap: 'wrap',
// // // //         borderBottom: `2px solid ${hexToRgba(theme.accent, 0.15)}`,
// // // //         marginBottom: 18,
// // // //       }}>
// // // //         {tabs.map((tab, i) => {
// // // //           const isActive = i === active;
// // // //           return (
// // // //             <button
// // // //               key={i}
// // // //               onClick={() => setActive(i)}
// // // //               style={{
// // // //                 padding: '8px 16px', fontSize: '0.9rem', fontWeight: 600,
// // // //                 background: 'transparent',
// // // //                 color: isActive ? theme.accent : theme.textMuted,
// // // //                 border: 'none',
// // // //                 borderBottom: `2px solid ${isActive ? theme.accent : 'transparent'}`,
// // // //                 marginBottom: -2, cursor: 'pointer',
// // // //                 fontFamily: FONT_FAMILY,
// // // //               }}
// // // //             >
// // // //               {tab.name}
// // // //               <span style={{
// // // //                 background: hexToRgba(theme.accent, 0.12), color: theme.accent,
// // // //                 fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999,
// // // //                 marginLeft: 6, fontWeight: 700,
// // // //               }}>{tab.items.length}</span>
// // // //             </button>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //       <AlgorithmicGrid
// // // //         items={activeTab.items}
// // // //         renderItem={(item) => (
// // // //           <MiniCard item={item} theme={theme} variant={variantResolver(item)} />
// // // //         )}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    GROUP PANEL (one category)
// // // //    ================================================================ */

// // // // const GroupPanel = ({
// // // //   group, theme, anchorId, subGroupStyle, variantResolver,
// // // // }) => {
// // // //   const hasSub = group.subGroups.length > 0;
// // // //   const hasUngrouped = group.ungrouped.length > 0;
// // // //   return (
// // // //     <section
// // // //       id={anchorId}
// // // //       style={{
// // // //         background: hexToRgba(theme.accent, 0.06),
// // // //         borderRadius: 12, overflow: 'hidden',
// // // //         boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
// // // //         marginBottom: '3rem',
// // // //       }}
// // // //     >
// // // //       <div style={{ background: theme.accent, height: 4 }} />
// // // //       <div style={{ padding: '22px 24px' }}>
// // // //         <div style={{
// // // //           display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
// // // //           gap: '1rem', flexWrap: 'wrap', marginBottom: 18,
// // // //         }}>
// // // //           <div>
// // // //             <div style={{
// // // //               fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
// // // //               letterSpacing: 1, color: theme.accent, marginBottom: 4,
// // // //               fontFamily: FONT_FAMILY,
// // // //             }}>
// // // //               {group.totalCount} {group.totalCount === 1 ? 'tool' : 'tools'}
// // // //               {hasSub && ` · ${group.subGroups.length} ${group.subGroups.length === 1 ? 'sub-group' : 'sub-groups'}`}
// // // //             </div>
// // // //             <div style={{
// // // //               fontSize: '1.5rem', fontWeight: 600, color: theme.text,
// // // //               fontFamily: FONT_FAMILY, letterSpacing: '-0.01em',
// // // //             }}>{group.category}</div>
// // // //           </div>
// // // //         </div>

// // // //         {subGroupStyle === 'tabs' && (hasSub || hasUngrouped) ? (
// // // //           <SubGroupTabs
// // // //             ungrouped={group.ungrouped}
// // // //             subGroups={group.subGroups}
// // // //             theme={theme}
// // // //             variantResolver={variantResolver}
// // // //           />
// // // //         ) : (
// // // //           <>
// // // //             {hasUngrouped && (
// // // //               <div>
// // // //                 {hasSub && (
// // // //                   <div style={{
// // // //                     fontSize: '0.7rem', fontWeight: 600, color: theme.textMuted,
// // // //                     letterSpacing: '0.5px', marginBottom: 8,
// // // //                     fontFamily: FONT_FAMILY, textTransform: 'uppercase',
// // // //                   }}>{UNCATEGORIZED_LABEL}</div>
// // // //                 )}
// // // //                 <AlgorithmicGrid
// // // //                   items={group.ungrouped}
// // // //                   renderItem={(item) => (
// // // //                     <MiniCard item={item} theme={theme} variant={variantResolver(item)} />
// // // //                   )}
// // // //                 />
// // // //               </div>
// // // //             )}
// // // //             {group.subGroups.map((sg) => (
// // // //               <SubGroupBlock
// // // //                 key={sg.name}
// // // //                 name={sg.name}
// // // //                 items={sg.items}
// // // //                 theme={theme}
// // // //                 variantResolver={variantResolver}
// // // //               />
// // // //             ))}
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    QUICK NAV
// // // //    ================================================================ */

// // // // const QuickNav = ({ categories, standaloneCount, dropdownLabel, theme, onJump }) => {
// // // //   const [open, setOpen] = useState(false);
// // // //   const items = [
// // // //     ...categories.map((c) => ({ id: `cat-${slugify(c.category)}`, label: c.category })),
// // // //     ...(standaloneCount > 0 ? [{ id: 'standalone', label: 'Other tools' }] : []),
// // // //   ];
// // // //   if (!items.length) return null;
// // // //   const totalToolsCount = categories.reduce((s, c) => s + c.totalCount, 0) + standaloneCount;

// // // //   return (
// // // //     <nav style={{
// // // //       maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px',
// // // //       background: theme.bgSubtle, borderRadius: 12,
// // // //       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
// // // //     }}>
// // // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
// // // //         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
// // // //           <div
// // // //             style={{ position: 'relative' }}
// // // //             onMouseEnter={() => setOpen(true)}
// // // //             onMouseLeave={() => setOpen(false)}
// // // //           >
// // // //             <button style={{
// // // //               display: 'flex', alignItems: 'center', gap: 6,
// // // //               padding: '9px 16px', border: 'none', borderRadius: 8,
// // // //               background: open ? theme.accentHover : theme.accent,
// // // //               color: '#fff', fontSize: '1rem', fontWeight: 600,
// // // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // // //               cursor: 'pointer', transition: 'background 0.2s ease',
// // // //             }}>
// // // //               {dropdownLabel}
// // // //               <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
// // // //                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
// // // //               </svg>
// // // //             </button>
// // // //             <div style={{
// // // //               position: 'absolute', top: 'calc(100% + 6px)', left: 0,
// // // //               minWidth: 320, background: '#fff',
// // // //               border: `1px solid ${theme.border}`, borderRadius: 10,
// // // //               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
// // // //               transition: 'all 0.2s ease', zIndex: 100,
// // // //               maxHeight: 400, overflowY: 'auto',
// // // //               opacity: open ? 1 : 0,
// // // //               visibility: open ? 'visible' : 'hidden',
// // // //               transform: open ? 'translateY(0)' : 'translateY(-8px)',
// // // //             }}>
// // // //               {items.map((it, i) => (
// // // //                 <a key={i} href={`#${it.id}`}
// // // //                   style={{
// // // //                     display: 'block', padding: '13px 18px',
// // // //                     textDecoration: 'none', color: theme.text,
// // // //                     fontSize: '1.05rem', fontWeight: 500,
// // // //                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
// // // //                     borderBottom: `1px solid ${theme.bgSubtle}`,
// // // //                     transition: 'all 0.15s ease',
// // // //                   }}
// // // //                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(it.id); }}
// // // //                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
// // // //                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
// // // //                   {it.label}
// // // //                 </a>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //           <span style={{ fontSize: '1.05rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
// // // //         </div>
// // // //         <span style={{
// // // //           fontSize: '1rem', color: theme.text,
// // // //           background: theme.chipBg, padding: '6px 16px',
// // // //           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
// // // //         }}>{totalToolsCount} tools</span>
// // // //       </div>
// // // //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
// // // //         {items.map((it, i) => (
// // // //           <a key={i} href={`#${it.id}`}
// // // //             style={{
// // // //               padding: '10px 20px', border: 'none', borderRadius: 22,
// // // //               textDecoration: 'none', color: '#fff',
// // // //               fontSize: '1.05rem', fontWeight: 500,
// // // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // // //               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
// // // //               background: theme.accent,
// // // //             }}
// // // //             onClick={(e) => { e.preventDefault(); onJump(it.id); }}
// // // //             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
// // // //             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
// // // //             {generateShortTitle(it.label)}
// // // //           </a>
// // // //         ))}
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    TOOLS HEADER
// // // //    ================================================================ */

// // // // const ToolsHeader = ({ totalCount, categoriesCount, intro, icon, article, theme }) => {
// // // //   if (!totalCount) return null;
// // // //   return (
// // // //     <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
// // // //       <div style={{
// // // //         background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
// // // //         border: `2px solid ${theme.border}`,
// // // //         padding: '34px 38px',
// // // //         borderRadius: article ? '16px 16px 0 0' : 16,
// // // //         borderBottom: article ? 'none' : `2px solid ${theme.border}`,
// // // //       }}>
// // // //         {intro && (
// // // //           <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
// // // //             <div style={{
// // // //               width: 64, height: 64, borderRadius: 14,
// // // //               display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //               fontSize: '1.85rem', flexShrink: 0,
// // // //               background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
// // // //             }}>{icon}</div>
// // // //             <div style={{ flex: 1 }}>
// // // //               {intro.title && <h2 style={{
// // // //                 fontSize: '1.65rem', fontWeight: 600, color: theme.text,
// // // //                 fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
// // // //                 margin: '0 0 10px 0', lineHeight: 1.3,
// // // //               }}>{intro.title}</h2>}
// // // //               {intro.description && <p style={{
// // // //                 fontSize: '1.2rem', color: theme.textSecondary,
// // // //                 fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
// // // //                 lineHeight: 1.55, margin: 0,
// // // //               }}>{intro.description}</p>}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         {intro && intro.tip && (
// // // //           <div style={{
// // // //             background: theme.tipBg,
// // // //             border: `1px solid ${theme.border}`,
// // // //             borderLeft: `4px solid ${theme.accent}`,
// // // //             borderRadius: 8, padding: '17px 22px', marginBottom: 24,
// // // //             display: 'flex', alignItems: 'center', gap: 14,
// // // //             fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400,
// // // //             letterSpacing: '0.005em', color: theme.tipText,
// // // //           }}>
// // // //             <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
// // // //             <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
// // // //           </div>
// // // //         )}
// // // //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
// // // //           <div style={{ display: 'flex', gap: 28 }}>
// // // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{totalCount}</span>
// // // //               <span>Tools</span>
// // // //             </div>
// // // //             {categoriesCount > 0 && (
// // // //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // //                 <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{categoriesCount}</span>
// // // //                 <span>Categories</span>
// // // //               </div>
// // // //             )}
// // // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>100%</span>
// // // //               <span>Free</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       {article && (
// // // //         <div style={{
// // // //           background: theme.bgMuted,
// // // //           border: `2px solid ${theme.border}`,
// // // //           borderTop: 'none',
// // // //           borderRadius: '0 0 16px 16px',
// // // //           padding: 24,
// // // //         }}>
// // // //           <div style={{
// // // //             background: theme.bgSubtle,
// // // //             border: `2px solid ${theme.borderStrong}`,
// // // //             borderRadius: 12,
// // // //             padding: '28px 32px',
// // // //           }}>
// // // //             <div style={{
// // // //               fontSize: '1.08rem',
// // // //               fontFamily: 'Georgia, "Times New Roman", serif',
// // // //               fontWeight: 500, color: theme.text,
// // // //               lineHeight: 1.85, letterSpacing: '0.01em',
// // // //             }}>
// // // //               {processContent(article)}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    SIDEBAR
// // // //    ================================================================ */

// // // // const SidebarIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // // //   if (!icon) return null;
// // // //   if (typeof icon === 'string') {
// // // //     if (icon.trim().startsWith('<svg')) {
// // // //       return <span style={{ width: size, height: size, display: 'inline-flex' }} dangerouslySetInnerHTML={{ __html: icon }} />;
// // // //     }
// // // //     return <span style={{ fontSize: size, color, lineHeight: 1 }}>{icon}</span>;
// // // //   }
// // // //   return null;
// // // // };

// // // // const SidebarLink = ({ link, theme }) => {
// // // //   const [h, setH] = useState(false);
// // // //   return (
// // // //     <Link
// // // //       href={link.href || '#'}
// // // //       style={{
// // // //         display: 'flex', alignItems: 'center', gap: 10,
// // // //         padding: '9px 20px', fontSize: 14, fontWeight: 500,
// // // //         color: h ? theme.sidebarText : theme.sidebarTextMuted,
// // // //         textDecoration: 'none',
// // // //         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
// // // //         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
// // // //         paddingLeft: h ? 17 : 20, transition: 'all 0.15s', lineHeight: 1.4,
// // // //       }}
// // // //       onMouseEnter={() => setH(true)}
// // // //       onMouseLeave={() => setH(false)}
// // // //     >
// // // //       {link.icon && (
// // // //         <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // // //           <SidebarIcon icon={link.icon} size={15} color={h ? theme.sidebarText : theme.sidebarTextMuted} />
// // // //         </span>
// // // //       )}
// // // //       <span style={{ flex: 1, minWidth: 0 }}>{link.label}</span>
// // // //     </Link>
// // // //   );
// // // // };

// // // // const SidebarGroup = ({ group, theme, isFirst }) => (
// // // //   <div style={{ marginTop: isFirst ? 0 : 12 }}>
// // // //     {!isFirst && <div style={{ height: 1, background: theme.sidebarDivider, margin: '0 20px 12px' }} />}
// // // //     {(group.title || group.icon) && (
// // // //       <div style={{
// // // //         display: 'flex', alignItems: 'center', gap: 8,
// // // //         padding: '8px 20px',
// // // //         fontSize: 11, fontWeight: 700,
// // // //         textTransform: 'uppercase', letterSpacing: 1.2,
// // // //         color: theme.sidebarTextMuted,
// // // //       }}>
// // // //         {group.icon && <SidebarIcon icon={group.icon} size={14} color={theme.sidebarTextMuted} />}
// // // //         {group.title && <span>{group.title}</span>}
// // // //       </div>
// // // //     )}
// // // //     {(group.links || []).map((lnk, i) => (
// // // //       <SidebarLink key={i} link={lnk} theme={theme} />
// // // //     ))}
// // // //   </div>
// // // // );

// // // // const SidebarDot = ({ label, href, theme }) => {
// // // //   const [h, setH] = useState(false);
// // // //   return (
// // // //     <Link
// // // //       href={href || '#'}
// // // //       style={{ position: 'relative', display: 'inline-block' }}
// // // //       onMouseEnter={() => setH(true)}
// // // //       onMouseLeave={() => setH(false)}
// // // //     >
// // // //       <span style={{
// // // //         display: 'block', width: 8, height: 8, borderRadius: '50%',
// // // //         background: h ? theme.sidebarText : theme.sidebarTextMuted,
// // // //         transition: 'all 0.2s', transform: h ? 'scale(1.5)' : 'scale(1)',
// // // //       }} />
// // // //       <span style={{
// // // //         position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)',
// // // //         background: theme.text, color: '#fff', fontSize: 13, padding: '4px 10px',
// // // //         borderRadius: 4, whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none',
// // // //         transition: 'opacity 0.15s', zIndex: 10,
// // // //       }}>{label}</span>
// // // //     </Link>
// // // //   );
// // // // };

// // // // const Sidebar = ({ groups, brandName, brandSub, open, onToggle, theme }) => {
// // // //   const ref = useRef(null);
// // // //   useEffect(() => {
// // // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // // //     document.addEventListener('click', handler);
// // // //     return () => document.removeEventListener('click', handler);
// // // //   }, [open, onToggle]);

// // // //   const flatLinks = useMemo(() => groups.flatMap((g) => g.links || []), [groups]);

// // // //   return (
// // // //     <aside
// // // //       ref={ref}
// // // //       style={{
// // // //         position: 'fixed', left: 0, top: NAVBAR_HEIGHT,
// // // //         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
// // // //         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // // //         background: theme.sidebarBg, zIndex: 90,
// // // //         display: 'flex', flexDirection: 'column',
// // // //         transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // //         overflow: 'hidden',
// // // //         boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // // //         fontFamily: FONT_FAMILY,
// // // //       }}
// // // //     >
// // // //       <style dangerouslySetInnerHTML={{ __html: `.vtp-sb-nav::-webkit-scrollbar { display: none; }` }} />
// // // //       <button
// // // //         onClick={() => onToggle(!open)}
// // // //         aria-label="Toggle sidebar"
// // // //         style={{
// // // //           width: '100%', height: 44,
// // // //           display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //           background: 'none', border: 'none', cursor: 'pointer',
// // // //           color: theme.sidebarTextMuted, flexShrink: 0,
// // // //           borderBottom: `1px solid ${theme.sidebarDivider}`,
// // // //         }}
// // // //         onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
// // // //         onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
// // // //       >
// // // //         <svg
// // // //           style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
// // // //           viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
// // // //         >
// // // //           <polyline points="9 18 15 12 9 6" />
// // // //         </svg>
// // // //       </button>
// // // //       {(brandName || brandSub) && (
// // // //         <div style={{
// // // //           padding: '14px 20px 10px',
// // // //           opacity: open ? 1 : 0,
// // // //           transition: 'opacity 0.15s',
// // // //           transitionDelay: open ? '0.1s' : '0s',
// // // //           whiteSpace: 'nowrap',
// // // //         }}>
// // // //           {brandName && <span style={{ fontSize: 18, fontWeight: 700, color: theme.sidebarText, display: 'block', marginBottom: 2 }}>{brandName}</span>}
// // // //           {brandSub && <span style={{ fontSize: 12, color: theme.sidebarTextMuted, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // // //         </div>
// // // //       )}
// // // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 0' }}>
// // // //         {flatLinks.slice(0, 12).map((lnk, i) => (
// // // //           <SidebarDot key={i} label={lnk.label} href={lnk.href} theme={theme} />
// // // //         ))}
// // // //       </div>
// // // //       <nav
// // // //         className="vtp-sb-nav"
// // // //         style={{
// // // //           display: open ? 'flex' : 'none',
// // // //           flexDirection: 'column',
// // // //           padding: '8px 0', flex: 1,
// // // //           overflowY: 'auto', overflowX: 'hidden',
// // // //           scrollbarWidth: 'none', msOverflowStyle: 'none',
// // // //         }}
// // // //       >
// // // //         {groups.map((group, gi) => (
// // // //           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
// // // //         ))}
// // // //       </nav>
// // // //     </aside>
// // // //   );
// // // // };

// // // // const buildAutoSidebarGroups = ({ categories, standalone }) => {
// // // //   const groups = [];
// // // //   for (const cat of categories) {
// // // //     const links = [];
// // // //     for (const u of cat.ungrouped) links.push({ label: u.title, href: u.href });
// // // //     for (const sg of cat.subGroups) {
// // // //       for (const it of sg.items) links.push({ label: it.title, href: it.href });
// // // //     }
// // // //     if (links.length > 0) groups.push({ title: cat.category, links });
// // // //   }
// // // //   if (standalone.length > 0) {
// // // //     groups.push({
// // // //       title: 'Other tools',
// // // //       links: standalone.map((t) => ({ label: t.title, href: t.href })),
// // // //     });
// // // //   }
// // // //   return groups;
// // // // };


// // // // /* ================================================================
// // // //    MAIN
// // // //    ================================================================ */

// // // // const VisualToolsPage = ({
// // // //   tools,
// // // //   pageTitle = 'Visual Tools',
// // // //   intro = null,
// // // //   article = null,
// // // //   icon = '🔍',
// // // //   dropdownLabel = 'All Tools',
// // // //   bodyOffsetTop = 60,

// // // //   theme = 'deepBlue',
// // // //   themeOverrides = null,

// // // //   sidebar = false,
// // // //   sidebarBrandName = null,
// // // //   sidebarBrandSub = null,

// // // //   customItems = null,

// // // //   miniCardVariant = 'v1',
// // // //   bigCardVariant = 'b1',
// // // //   groupVariants = null,

// // // //   subGroupStyle = 'default',
// // // // }) => {
// // // //   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);
// // // //   const isMobile = useIsMobile();
// // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // //   const flatList = useMemo(() => {
// // // //     const base = flattenInput(tools);
// // // //     return mergeWithCustomItems(base, customItems);
// // // //   }, [tools, customItems]);

// // // //   const grouped = useMemo(() => groupItems(flatList), [flatList]);

// // // //   const miniVariantFor = (item) => {
// // // //     if (item && item.cardVariant) return item.cardVariant;
// // // //     if (item && item.category && groupVariants && groupVariants[item.category]) {
// // // //       return groupVariants[item.category];
// // // //     }
// // // //     return miniCardVariant;
// // // //   };
// // // //   const bigVariantFor = (item) => {
// // // //     if (item && item.cardVariant) return item.cardVariant;
// // // //     return bigCardVariant;
// // // //   };

// // // //   const totalCount = useMemo(
// // // //     () => grouped.categories.reduce((s, c) => s + c.totalCount, 0) + grouped.standalone.length,
// // // //     [grouped]
// // // //   );

// // // //   const handleJump = (id) => {
// // // //     const el = document.getElementById(id);
// // // //     if (!el) return;
// // // //     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
// // // //     window.scrollTo({ top: y, behavior: 'smooth' });
// // // //   };

// // // //   const sidebarGroups = useMemo(() => {
// // // //     if (!sidebar) return null;
// // // //     if (Array.isArray(sidebar)) return sidebar;
// // // //     if (sidebar === true) return buildAutoSidebarGroups(grouped);
// // // //     return null;
// // // //   }, [sidebar, grouped]);

// // // //   const showSidebar = !isMobile && !!sidebarGroups && sidebarGroups.length > 0;
// // // //   const contentMarginLeft = showSidebar
// // // //     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
// // // //     : 0;

// // // //   return (
// // // //     <>
// // // //       {showSidebar && (
// // // //         <Sidebar
// // // //           groups={sidebarGroups}
// // // //           brandName={sidebarBrandName || pageTitle}
// // // //           brandSub={sidebarBrandSub}
// // // //           open={sidebarOpen}
// // // //           onToggle={setSidebarOpen}
// // // //           theme={t}
// // // //         />
// // // //       )}

// // // //       <div style={{
// // // //         marginLeft: contentMarginLeft,
// // // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // // //       }}>
// // // //         <h1 style={{
// // // //           fontFamily: SERIF_FAMILY,
// // // //           fontSize: '2.4rem', fontWeight: 700,
// // // //           color: t.pageTitle, textAlign: 'center',
// // // //           margin: '0 0 24px',
// // // //         }}>
// // // //           {pageTitle}
// // // //         </h1>

// // // //         <QuickNav
// // // //           categories={grouped.categories}
// // // //           standaloneCount={grouped.standalone.length}
// // // //           dropdownLabel={dropdownLabel}
// // // //           theme={t}
// // // //           onJump={handleJump}
// // // //         />

// // // //         <ToolsHeader
// // // //           totalCount={totalCount}
// // // //           categoriesCount={grouped.categories.length}
// // // //           intro={intro}
// // // //           icon={icon}
// // // //           article={article}
// // // //           theme={t}
// // // //         />

// // // //         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
// // // //           {grouped.categories.map((group) => (
// // // //             <div key={group.category} style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}>
// // // //               <GroupPanel
// // // //                 group={group}
// // // //                 theme={t}
// // // //                 anchorId={`cat-${slugify(group.category)}`}
// // // //                 subGroupStyle={subGroupStyle}
// // // //                 variantResolver={miniVariantFor}
// // // //               />
// // // //             </div>
// // // //           ))}

// // // //           {grouped.standalone.length > 0 && (
// // // //             <section
// // // //               id="standalone"
// // // //               style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}
// // // //             >
// // // //               <AlgorithmicGrid
// // // //                 items={grouped.standalone}
// // // //                 renderItem={(item) => (
// // // //                   <BigCard item={item} theme={t} variant={bigVariantFor(item)} />
// // // //                 )}
// // // //               />
// // // //             </section>
// // // //           )}
// // // //         </div>

// // // //         <div style={{ height: 60 }} />
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default VisualToolsPage;


// // // /**
// // //  * VisualToolsPage — v16
// // //  *
// // //  * Fixes vs v15:
// // //  *   1. AlgorithmicGrid: `align-items: start` so cards don't stretch to the
// // //  *      tallest in their row. Each card uses its natural content height —
// // //  *      no more huge empty space inside short cards.
// // //  *   2. QuickNav (both dropdown and pill row) now lists each standalone
// // //  *      tool individually instead of collapsing them into a single
// // //  *      "Other tools" entry. Categories still appear as one entry each.
// // //  *   3. Each standalone card gets its own DOM id so quick-jump works.
// // //  *   4. CTA placement on cards: removed `flex: 1` from descriptions; CTA
// // //  *      sits at natural position right after the description (no longer
// // //  *      stretched into the middle of the card).
// // //  */

// // // import React, { useMemo, useState, useEffect, useRef } from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';
// // // import { processContent } from '@/app/utils/contentProcessor';
// // // import { getTheme } from './visualToolsPageThemes';


// // // /* ================================================================
// // //    CONSTANTS
// // //    ================================================================ */

// // // const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// // // const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// // // const NAVBAR_HEIGHT = 55;
// // // const SIDEBAR_COLLAPSED = 68;
// // // const SIDEBAR_EXPANDED = 290;
// // // const MOBILE_BREAKPOINT = 768;

// // // const UNCATEGORIZED_LABEL = 'Other';
// // // const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// // // const CTA_OPEN = 'Open tool →';
// // // const CTA_VIEW = 'View Details';


// // // /* ================================================================
// // //    GENERIC UTILITIES
// // //    ================================================================ */

// // // const hexToRgba = (hex, alpha) => {
// // //   const h = hex.replace('#', '');
// // //   const r = parseInt(h.substring(0, 2), 16);
// // //   const g = parseInt(h.substring(2, 4), 16);
// // //   const b = parseInt(h.substring(4, 6), 16);
// // //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // // };

// // // const generateShortTitle = (title = '') =>
// // //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // // function slugify(s) {
// // //   return String(s || '').toLowerCase().trim()
// // //     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// // // }

// // // function isValidImagePath(val) {
// // //   if (typeof val !== 'string') return false;
// // //   const v = val.trim();
// // //   if (!v) return false;
// // //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // // }

// // // function isValidSvg(val) {
// // //   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// // // }

// // // function isValidIcon(val) {
// // //   if (typeof val !== 'string') return false;
// // //   const v = val.trim();
// // //   if (!v) return false;
// // //   if (v.startsWith('/') || v.startsWith('http')) return false;
// // //   if (v.toLowerCase().startsWith('<svg')) return false;
// // //   return true;
// // // }

// // // function constrainSvg(svg) {
// // //   return svg.replace(
// // //     /<svg\b([^>]*)>/i,
// // //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// // //   );
// // // }

// // // function wrapFormula(f) {
// // //   if (!f) return '';
// // //   const t = String(f).trim();
// // //   if (!t) return '';
// // //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// // //   return `$${t}$`;
// // // }

// // // function getVisualType(item) {
// // //   if (!item) return null;
// // //   if (isValidImagePath(item.image)) return 'image';
// // //   if (isValidSvg(item.svg)) return 'svg';
// // //   if (isValidIcon(item.icon)) return 'icon';
// // //   return null;
// // // }

// // // // Build a stable DOM id for a standalone item so QuickNav can jump to it.
// // // function standaloneIdFor(item, idx) {
// // //   if (item && item.id) return `tool-${slugify(item.id)}`;
// // //   if (item && item.title) return `tool-${slugify(item.title)}`;
// // //   return `tool-${idx}`;
// // // }


// // // /* ================================================================
// // //    USE-IS-MOBILE HOOK
// // //    ================================================================ */

// // // const useIsMobile = () => {
// // //   const [isMobile, setIsMobile] = useState(false);
// // //   useEffect(() => {
// // //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
// // //     const update = () => setIsMobile(mql.matches);
// // //     update();
// // //     mql.addEventListener('change', update);
// // //     return () => mql.removeEventListener('change', update);
// // //   }, []);
// // //   return isMobile;
// // // };


// // // /* ================================================================
// // //    GRID LAYOUT (algorithmic)
// // //    - max 3 per row, min 2 (except total N === 1)
// // //    - 3 → 1/3 width, 2 → 1/2 width, 1 → 1/2 centered
// // //    ================================================================ */

// // // function rowSizes(N) {
// // //   if (!Number.isFinite(N) || N <= 0) return [];
// // //   if (N === 1) return [1];
// // //   if (N % 3 === 1 && N >= 4) {
// // //     const fullThrees = (N - 4) / 3;
// // //     return [...Array(fullThrees).fill(3), 2, 2];
// // //   }
// // //   if (N % 3 === 2) {
// // //     const fullThrees = (N - 2) / 3;
// // //     return [...Array(fullThrees).fill(3), 2];
// // //   }
// // //   return Array(N / 3).fill(3);
// // // }

// // // function getGridColumn(rowSize, posInRow) {
// // //   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
// // //   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
// // //   if (rowSize === 1) return '2 / span 3';
// // //   return 'auto';
// // // }

// // // function buildPlacements(items) {
// // //   const list = Array.isArray(items) ? items : [];
// // //   const rows = rowSizes(list.length);
// // //   const out = [];
// // //   let idx = 0;
// // //   for (const rowSize of rows) {
// // //     for (let pos = 0; pos < rowSize; pos++) {
// // //       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
// // //       idx += 1;
// // //     }
// // //   }
// // //   return out;
// // // }


// // // /* ================================================================
// // //    VARIANT RESOLVERS (auto-fallback)
// // //    ================================================================ */

// // // const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// // // const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// // // function resolveMiniVariant(requested, item) {
// // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
// // //   if (!VALID_MINI.has(v)) v = 'v1';
// // //   const hasVisual  = getVisualType(item) !== null;
// // //   const hasFormula = !!(item && item.formula);
// // //   if (v === 'v4' && !hasFormula) v = 'v1';
// // //   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
// // //   return v;
// // // }

// // // function resolveBigVariant(requested, item) {
// // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
// // //   if (!VALID_BIG.has(v)) v = 'b1';
// // //   const hasVisual = getVisualType(item) !== null;
// // //   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
// // //   return v;
// // // }


// // // /* ================================================================
// // //    VISUAL — image / svg / icon, with image-failure fallback
// // //    ================================================================ */

// // // const Visual = ({ item, height, mode = 'banner' }) => {
// // //   const [imgFailed, setImgFailed] = useState(false);
// // //   useEffect(() => { setImgFailed(false); }, [item && item.image]);

// // //   const v = getVisualType(item);

// // //   if (v === 'image' && !imgFailed) {
// // //     return (
// // //       <div style={{
// // //         width: '100%', height, position: 'relative',
// // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // //       }}>
// // //         <Image
// // //           src={item.image}
// // //           alt={item.imageAlt || item.title || ''}
// // //           fill
// // //           style={{ objectFit: 'cover' }}
// // //           onError={() => setImgFailed(true)}
// // //         />
// // //       </div>
// // //     );
// // //   }

// // //   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(item.svg))) {
// // //     return (
// // //       <div style={{
// // //         width: '100%', height,
// // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // //       }}>
// // //         <div style={{
// // //           width: '80%', height: '80%',
// // //           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
// // //         }}
// // //         dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
// // //       </div>
// // //     );
// // //   }

// // //   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(item.icon))) {
// // //     return (
// // //       <div style={{
// // //         width: '100%', height,
// // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //         background: 'rgba(255,255,255,0.06)',
// // //         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
// // //         opacity: 0.85, flexShrink: 0,
// // //       }}>
// // //         {item.icon}
// // //       </div>
// // //     );
// // //   }

// // //   return null;
// // // };


// // // /* ================================================================
// // //    SHARED CTA STYLES
// // //    ================================================================ */

// // // const ctaTextStyle = (theme) => ({
// // //   fontSize: '0.78rem', fontWeight: 600,
// // //   color: theme.cardText, opacity: 0.9,
// // //   textTransform: 'uppercase', letterSpacing: '0.5px',
// // //   fontFamily: FONT_FAMILY,
// // // });

// // // const ctaPillStyle = (theme) => ({
// // //   display: 'inline-block',
// // //   border: `1px solid ${theme.cardText}`,
// // //   padding: '8px 18px', borderRadius: 999,
// // //   fontSize: '0.88rem', fontWeight: 500,
// // //   color: theme.cardText, alignSelf: 'flex-start',
// // //   fontFamily: FONT_FAMILY,
// // // });


// // // /* ================================================================
// // //    MINI · V1 — image top, text bottom
// // //    ================================================================ */

// // // const MiniV1 = ({ item, theme }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'column',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 8, overflow: 'hidden', minHeight: 280,
// // //     textDecoration: 'none', height: '100%',
// // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //     fontFamily: FONT_FAMILY,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <Visual item={item} height={140} mode="banner" />
// // //     <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column' }}>
// // //       <h3 style={{
// // //         fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 6,
// // //         color: theme.cardText, lineHeight: 1.3,
// // //       }}>{item.title}</h3>
// // //       {item.description && (
// // //         <p style={{
// // //           fontSize: '0.85rem', lineHeight: 1.5, margin: 0,
// // //           color: theme.cardText, opacity: 0.88,
// // //         }}>{item.description}</p>
// // //       )}
// // //       <div style={{ marginTop: 12, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // //     </div>
// // //   </Link>
// // // );


// // // /* ================================================================
// // //    MINI · V2 — image left, text right
// // //    ================================================================ */

// // // const MiniV2 = ({ item, theme }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'row',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 8, overflow: 'hidden', minHeight: 180,
// // //     textDecoration: 'none', height: '100%',
// // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //     fontFamily: FONT_FAMILY,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <div style={{ width: '40%', flexShrink: 0 }}>
// // //       <Visual item={item} height="100%" mode="side" />
// // //     </div>
// // //     <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column' }}>
// // //       <h3 style={{
// // //         fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6,
// // //         color: theme.cardText, lineHeight: 1.3,
// // //       }}>{item.title}</h3>
// // //       {item.description && (
// // //         <p style={{
// // //           fontSize: '0.82rem', lineHeight: 1.45, margin: 0,
// // //           color: theme.cardText, opacity: 0.88,
// // //         }}>{item.description}</p>
// // //       )}
// // //       <div style={{ marginTop: 12, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // //     </div>
// // //   </Link>
// // // );


// // // /* ================================================================
// // //    MINI · V3 — icon + text (no banner)
// // //    ================================================================ */

// // // const MiniV3 = ({ item, theme }) => {
// // //   const hasIcon = isValidIcon(item.icon);
// // //   return (
// // //     <Link href={item.href || '#'} style={{
// // //       display: 'flex', flexDirection: 'column', gap: 10,
// // //       background: theme.cardBg, color: theme.cardText,
// // //       borderRadius: 8, padding: '20px 22px', minHeight: 180,
// // //       textDecoration: 'none', height: '100%',
// // //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //       fontFamily: FONT_FAMILY,
// // //     }}
// // //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //     >
// // //       <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
// // //         {hasIcon && (
// // //           <div style={{
// // //             width: 44, height: 44, borderRadius: 10,
// // //             background: 'rgba(255,255,255,0.15)',
// // //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //             fontSize: '1.3rem', flexShrink: 0,
// // //           }}>{item.icon}</div>
// // //         )}
// // //         <h3 style={{
// // //           fontSize: '1.05rem', fontWeight: 600, margin: 0,
// // //           color: theme.cardText, lineHeight: 1.3,
// // //         }}>{item.title}</h3>
// // //       </div>
// // //       {item.description && (
// // //         <p style={{
// // //           fontSize: '0.86rem', lineHeight: 1.5, margin: 0,
// // //           color: theme.cardText, opacity: 0.88,
// // //         }}>{item.description}</p>
// // //       )}
// // //       <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
// // //     </Link>
// // //   );
// // // };


// // // /* ================================================================
// // //    MINI · V4 — formula prominent
// // //    ================================================================ */

// // // const MiniV4 = ({ item, theme }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'column',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 8, overflow: 'hidden', minHeight: 260,
// // //     textDecoration: 'none', height: '100%',
// // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //     fontFamily: FONT_FAMILY,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <div style={{
// // //       background: 'rgba(255,255,255,0.08)',
// // //       padding: '28px 16px', textAlign: 'center',
// // //       fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic',
// // //       color: theme.cardText, opacity: 0.95, flexShrink: 0,
// // //     }}>
// // //       {processContent(wrapFormula(item.formula))}
// // //     </div>
// // //     <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column' }}>
// // //       <h3 style={{
// // //         fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4,
// // //         color: theme.cardText,
// // //       }}>{item.title}</h3>
// // //       {item.description && (
// // //         <p style={{
// // //           fontSize: '0.82rem', lineHeight: 1.45, margin: 0,
// // //           color: theme.cardText, opacity: 0.85,
// // //         }}>{item.description}</p>
// // //       )}
// // //       <div style={{ marginTop: 12, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // //     </div>
// // //   </Link>
// // // );


// // // /* ================================================================
// // //    BIG · B1 — image left, text right
// // //    ================================================================ */

// // // const BigB1 = ({ item, theme }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'row',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 10, overflow: 'hidden', minHeight: 220,
// // //     textDecoration: 'none', height: '100%',
// // //     transition: 'box-shadow 0.3s ease',
// // //     fontFamily: FONT_FAMILY,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <div style={{ width: '45%', flexShrink: 0 }}>
// // //       <Visual item={item} height="100%" mode="side" />
// // //     </div>
// // //     <div style={{
// // //       padding: '24px 28px',
// // //       display: 'flex', flexDirection: 'column',
// // //     }}>
// // //       <h3 style={{
// // //         fontSize: '1.4rem', fontWeight: 600, margin: 0, marginBottom: 10,
// // //         color: theme.cardText, lineHeight: 1.3,
// // //       }}>{item.title}</h3>
// // //       {item.description && (
// // //         <p style={{
// // //           fontSize: '0.95rem', lineHeight: 1.55, margin: 0,
// // //           color: theme.cardText, opacity: 0.9,
// // //         }}>{item.description}</p>
// // //       )}
// // //       <div style={{ marginTop: 16, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // //     </div>
// // //   </Link>
// // // );


// // // /* ================================================================
// // //    BIG · B2 — image top, text bottom
// // //    ================================================================ */

// // // const BigB2 = ({ item, theme }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'column',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 10, overflow: 'hidden', minHeight: 320,
// // //     textDecoration: 'none', height: '100%',
// // //     transition: 'box-shadow 0.3s ease',
// // //     fontFamily: FONT_FAMILY,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <Visual item={item} height={180} mode="banner" />
// // //     <div style={{
// // //       padding: '22px 26px',
// // //       display: 'flex', flexDirection: 'column',
// // //     }}>
// // //       <h3 style={{
// // //         fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8,
// // //         color: theme.cardText, lineHeight: 1.3,
// // //       }}>{item.title}</h3>
// // //       {item.description && (
// // //         <p style={{
// // //           fontSize: '0.95rem', lineHeight: 1.55, margin: 0,
// // //           color: theme.cardText, opacity: 0.9,
// // //         }}>{item.description}</p>
// // //       )}
// // //       <div style={{ marginTop: 16, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // //     </div>
// // //   </Link>
// // // );


// // // /* ================================================================
// // //    BIG · B3 — text-led with inline icon
// // //    ================================================================ */

// // // const BigB3 = ({ item, theme }) => {
// // //   const hasIcon = isValidIcon(item.icon);
// // //   return (
// // //     <Link href={item.href || '#'} style={{
// // //       display: 'flex', flexDirection: 'column',
// // //       background: theme.cardBg, color: theme.cardText,
// // //       borderRadius: 10, padding: '28px 32px', minHeight: 200,
// // //       textDecoration: 'none', height: '100%',
// // //       transition: 'box-shadow 0.3s ease',
// // //       fontFamily: FONT_FAMILY,
// // //     }}
// // //     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // //     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // //     >
// // //       <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
// // //         {hasIcon && (
// // //           <div style={{
// // //             width: 52, height: 52, borderRadius: 12,
// // //             background: 'rgba(255,255,255,0.15)',
// // //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //             fontSize: '1.6rem', flexShrink: 0,
// // //           }}>{item.icon}</div>
// // //         )}
// // //         <h3 style={{
// // //           fontSize: '1.4rem', fontWeight: 600, margin: 0,
// // //           color: theme.cardText, lineHeight: 1.3,
// // //         }}>{item.title}</h3>
// // //       </div>
// // //       {item.description && (
// // //         <p style={{
// // //           fontSize: '1rem', lineHeight: 1.6, margin: 0, marginBottom: 18,
// // //           color: theme.cardText, opacity: 0.9,
// // //         }}>{item.description}</p>
// // //       )}
// // //       <div style={ctaPillStyle(theme)}>{CTA_VIEW}</div>
// // //     </Link>
// // //   );
// // // };


// // // /* ================================================================
// // //    CARD DISPATCHERS
// // //    ================================================================ */

// // // const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// // // const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// // // const MiniCard = ({ item, theme, variant = 'v1' }) => {
// // //   const resolved = resolveMiniVariant(variant, item);
// // //   const Component = MINI_MAP[resolved] || MiniV1;
// // //   return <Component item={item} theme={theme} />;
// // // };

// // // const BigCard = ({ item, theme, variant = 'b1' }) => {
// // //   const resolved = resolveBigVariant(variant, item);
// // //   const Component = BIG_MAP[resolved] || BigB1;
// // //   return <Component item={item} theme={theme} />;
// // // };


// // // /* ================================================================
// // //    ALGORITHMIC GRID WRAPPER
// // //    align-items: start so cards keep natural height per cell.
// // //    ================================================================ */

// // // const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
// // //   const placements = useMemo(() => buildPlacements(items), [items]);
// // //   if (!placements.length) return null;
// // //   return (
// // //     <div style={{
// // //       display: 'grid',
// // //       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
// // //       gap: '1rem',
// // //       alignItems: 'start',
// // //     }}>
// // //       {placements.map(({ item, gridColumn, index }, i) => (
// // //         <div
// // //           key={i}
// // //           id={getCellId ? getCellId(item, index) : undefined}
// // //           className="vtp-algo-cell"
// // //           style={{ gridColumn, minWidth: 0 }}
// // //         >
// // //           {renderItem(item)}
// // //         </div>
// // //       ))}
// // //       <style dangerouslySetInnerHTML={{ __html: `
// // //         @media (max-width: ${MOBILE_BREAKPOINT}px) {
// // //           .vtp-algo-cell { grid-column: 1 / -1 !important; }
// // //         }
// // //       ` }} />
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    INPUT NORMALIZATION
// // //    ================================================================ */

// // // const flattenInput = (input) => {
// // //   if (Array.isArray(input)) return input;
// // //   if (input && Array.isArray(input.items)) return input.items;
// // //   if (input && Array.isArray(input.children)) {
// // //     const out = [];
// // //     for (const child of input.children) {
// // //       if (child && child.hasViews && Array.isArray(child.views) && child.views.length > 0) {
// // //         const inferredCat = child.category || child.title || null;
// // //         for (const v of child.views) out.push({ ...v, category: v.category || inferredCat });
// // //       } else if (child) {
// // //         out.push(child);
// // //       }
// // //     }
// // //     return out;
// // //   }
// // //   return [];
// // // };


// // // /* ================================================================
// // //    MERGE CUSTOM ITEMS
// // //    ================================================================ */

// // // const mergeWithCustomItems = (autoList, customItems) => {
// // //   if (!Array.isArray(customItems) || customItems.length === 0) return autoList;
// // //   const decorated = customItems.map((item, i) => {
// // //     const { at, ...rest } = item;
// // //     let pos;
// // //     if (at === 'start') pos = 0;
// // //     else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
// // //     else if (typeof at === 'number') pos = at;
// // //     else pos = Number.POSITIVE_INFINITY;
// // //     return { item: rest, pos, order: i };
// // //   });
// // //   decorated.sort((a, b) => {
// // //     if (a.pos !== b.pos) return b.pos - a.pos;
// // //     return b.order - a.order;
// // //   });
// // //   const result = [...autoList];
// // //   decorated.forEach(({ item, pos }) => {
// // //     if (pos === Number.POSITIVE_INFINITY) result.push(item);
// // //     else {
// // //       const clamped = Math.max(0, Math.min(pos, result.length));
// // //       result.splice(clamped, 0, item);
// // //     }
// // //   });
// // //   return result;
// // // };


// // // /* ================================================================
// // //    GROUPING
// // //    ================================================================ */

// // // const groupItems = (flatList) => {
// // //   const standalone = [];
// // //   const catMap = new Map();
// // //   const catOrder = [];

// // //   for (const item of flatList) {
// // //     if (!item) continue;
// // //     if (!item.category) { standalone.push(item); continue; }
// // //     if (!catMap.has(item.category)) {
// // //       catMap.set(item.category, { ungrouped: [], subMap: new Map(), subOrder: [] });
// // //       catOrder.push(item.category);
// // //     }
// // //     const cat = catMap.get(item.category);
// // //     if (!item.subCategory) cat.ungrouped.push(item);
// // //     else {
// // //       if (!cat.subMap.has(item.subCategory)) {
// // //         cat.subMap.set(item.subCategory, []);
// // //         cat.subOrder.push(item.subCategory);
// // //       }
// // //       cat.subMap.get(item.subCategory).push(item);
// // //     }
// // //   }

// // //   const categories = catOrder.map((catName) => {
// // //     const cat = catMap.get(catName);
// // //     const subGroups = cat.subOrder.map((sub) => ({
// // //       name: sub, items: cat.subMap.get(sub),
// // //     }));
// // //     const totalCount = cat.ungrouped.length + subGroups.reduce((s, g) => s + g.items.length, 0);
// // //     return { category: catName, ungrouped: cat.ungrouped, subGroups, totalCount };
// // //   });

// // //   return { categories, standalone };
// // // };


// // // /* ================================================================
// // //    SUB-GROUP BLOCK (default style)
// // //    ================================================================ */

// // // const SubGroupBlock = ({ name, items, theme, variantResolver }) => (
// // //   <div style={{
// // //     paddingLeft: 16,
// // //     borderLeft: `3px solid ${theme.accent}`,
// // //     marginTop: 24,
// // //   }}>
// // //     <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
// // //       <span style={{
// // //         background: theme.accent, color: '#fff',
// // //         padding: '4px 14px', borderRadius: 999,
// // //         fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.3px',
// // //         fontFamily: FONT_FAMILY,
// // //       }}>{name}</span>
// // //       <span style={{
// // //         fontSize: '0.78rem', color: theme.textMuted, fontFamily: FONT_FAMILY,
// // //       }}>{items.length} {items.length === 1 ? 'tool' : 'tools'}</span>
// // //     </div>
// // //     <AlgorithmicGrid
// // //       items={items}
// // //       renderItem={(item) => (
// // //         <MiniCard item={item} theme={theme} variant={variantResolver(item)} />
// // //       )}
// // //     />
// // //   </div>
// // // );


// // // /* ================================================================
// // //    SUB-GROUP TABS
// // //    ================================================================ */

// // // const SubGroupTabs = ({ ungrouped, subGroups, theme, variantResolver }) => {
// // //   const tabs = [
// // //     ...(ungrouped.length > 0 ? [{ name: UNCATEGORIZED_LABEL, items: ungrouped }] : []),
// // //     ...subGroups,
// // //   ];
// // //   const [active, setActive] = useState(0);
// // //   if (tabs.length === 0) return null;
// // //   const activeTab = tabs[Math.min(active, tabs.length - 1)];
// // //   return (
// // //     <div>
// // //       <div style={{
// // //         display: 'flex', gap: 4, flexWrap: 'wrap',
// // //         borderBottom: `2px solid ${hexToRgba(theme.accent, 0.15)}`,
// // //         marginBottom: 18,
// // //       }}>
// // //         {tabs.map((tab, i) => {
// // //           const isActive = i === active;
// // //           return (
// // //             <button
// // //               key={i}
// // //               onClick={() => setActive(i)}
// // //               style={{
// // //                 padding: '8px 16px', fontSize: '0.9rem', fontWeight: 600,
// // //                 background: 'transparent',
// // //                 color: isActive ? theme.accent : theme.textMuted,
// // //                 border: 'none',
// // //                 borderBottom: `2px solid ${isActive ? theme.accent : 'transparent'}`,
// // //                 marginBottom: -2, cursor: 'pointer',
// // //                 fontFamily: FONT_FAMILY,
// // //               }}
// // //             >
// // //               {tab.name}
// // //               <span style={{
// // //                 background: hexToRgba(theme.accent, 0.12), color: theme.accent,
// // //                 fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999,
// // //                 marginLeft: 6, fontWeight: 700,
// // //               }}>{tab.items.length}</span>
// // //             </button>
// // //           );
// // //         })}
// // //       </div>
// // //       <AlgorithmicGrid
// // //         items={activeTab.items}
// // //         renderItem={(item) => (
// // //           <MiniCard item={item} theme={theme} variant={variantResolver(item)} />
// // //         )}
// // //       />
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    GROUP PANEL (one category)
// // //    ================================================================ */

// // // const GroupPanel = ({
// // //   group, theme, anchorId, subGroupStyle, variantResolver,
// // // }) => {
// // //   const hasSub = group.subGroups.length > 0;
// // //   const hasUngrouped = group.ungrouped.length > 0;
// // //   return (
// // //     <section
// // //       id={anchorId}
// // //       style={{
// // //         background: hexToRgba(theme.accent, 0.06),
// // //         borderRadius: 12, overflow: 'hidden',
// // //         boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
// // //         marginBottom: '3rem',
// // //       }}
// // //     >
// // //       <div style={{ background: theme.accent, height: 4 }} />
// // //       <div style={{ padding: '22px 24px' }}>
// // //         <div style={{
// // //           display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
// // //           gap: '1rem', flexWrap: 'wrap', marginBottom: 18,
// // //         }}>
// // //           <div>
// // //             <div style={{
// // //               fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
// // //               letterSpacing: 1, color: theme.accent, marginBottom: 4,
// // //               fontFamily: FONT_FAMILY,
// // //             }}>
// // //               {group.totalCount} {group.totalCount === 1 ? 'tool' : 'tools'}
// // //               {hasSub && ` · ${group.subGroups.length} ${group.subGroups.length === 1 ? 'sub-group' : 'sub-groups'}`}
// // //             </div>
// // //             <div style={{
// // //               fontSize: '1.5rem', fontWeight: 600, color: theme.text,
// // //               fontFamily: FONT_FAMILY, letterSpacing: '-0.01em',
// // //             }}>{group.category}</div>
// // //           </div>
// // //         </div>

// // //         {subGroupStyle === 'tabs' && (hasSub || hasUngrouped) ? (
// // //           <SubGroupTabs
// // //             ungrouped={group.ungrouped}
// // //             subGroups={group.subGroups}
// // //             theme={theme}
// // //             variantResolver={variantResolver}
// // //           />
// // //         ) : (
// // //           <>
// // //             {hasUngrouped && (
// // //               <div>
// // //                 {hasSub && (
// // //                   <div style={{
// // //                     fontSize: '0.7rem', fontWeight: 600, color: theme.textMuted,
// // //                     letterSpacing: '0.5px', marginBottom: 8,
// // //                     fontFamily: FONT_FAMILY, textTransform: 'uppercase',
// // //                   }}>{UNCATEGORIZED_LABEL}</div>
// // //                 )}
// // //                 <AlgorithmicGrid
// // //                   items={group.ungrouped}
// // //                   renderItem={(item) => (
// // //                     <MiniCard item={item} theme={theme} variant={variantResolver(item)} />
// // //                   )}
// // //                 />
// // //               </div>
// // //             )}
// // //             {group.subGroups.map((sg) => (
// // //               <SubGroupBlock
// // //                 key={sg.name}
// // //                 name={sg.name}
// // //                 items={sg.items}
// // //                 theme={theme}
// // //                 variantResolver={variantResolver}
// // //               />
// // //             ))}
// // //           </>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };


// // // /* ================================================================
// // //    QUICK NAV
// // //    Buttons = one per category + one per standalone tool.
// // //    ================================================================ */

// // // const QuickNav = ({ categories, standaloneItems, dropdownLabel, theme, onJump }) => {
// // //   const [open, setOpen] = useState(false);

// // //   const items = [
// // //     ...categories.map((c) => ({
// // //       id: `cat-${slugify(c.category)}`,
// // //       label: c.category,
// // //     })),
// // //     ...standaloneItems.map((it, idx) => ({
// // //       id: standaloneIdFor(it, idx),
// // //       label: it.title,
// // //     })),
// // //   ];

// // //   if (!items.length) return null;
// // //   const totalToolsCount =
// // //     categories.reduce((s, c) => s + c.totalCount, 0) + standaloneItems.length;

// // //   return (
// // //     <nav style={{
// // //       maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px',
// // //       background: theme.bgSubtle, borderRadius: 12,
// // //       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
// // //     }}>
// // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
// // //         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
// // //           <div
// // //             style={{ position: 'relative' }}
// // //             onMouseEnter={() => setOpen(true)}
// // //             onMouseLeave={() => setOpen(false)}
// // //           >
// // //             <button style={{
// // //               display: 'flex', alignItems: 'center', gap: 6,
// // //               padding: '9px 16px', border: 'none', borderRadius: 8,
// // //               background: open ? theme.accentHover : theme.accent,
// // //               color: '#fff', fontSize: '1rem', fontWeight: 600,
// // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // //               cursor: 'pointer', transition: 'background 0.2s ease',
// // //             }}>
// // //               {dropdownLabel}
// // //               <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
// // //                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
// // //               </svg>
// // //             </button>
// // //             <div style={{
// // //               position: 'absolute', top: 'calc(100% + 6px)', left: 0,
// // //               minWidth: 320, background: '#fff',
// // //               border: `1px solid ${theme.border}`, borderRadius: 10,
// // //               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
// // //               transition: 'all 0.2s ease', zIndex: 100,
// // //               maxHeight: 400, overflowY: 'auto',
// // //               opacity: open ? 1 : 0,
// // //               visibility: open ? 'visible' : 'hidden',
// // //               transform: open ? 'translateY(0)' : 'translateY(-8px)',
// // //             }}>
// // //               {items.map((it, i) => (
// // //                 <a key={i} href={`#${it.id}`}
// // //                   style={{
// // //                     display: 'block', padding: '13px 18px',
// // //                     textDecoration: 'none', color: theme.text,
// // //                     fontSize: '1.05rem', fontWeight: 500,
// // //                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
// // //                     borderBottom: `1px solid ${theme.bgSubtle}`,
// // //                     transition: 'all 0.15s ease',
// // //                   }}
// // //                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(it.id); }}
// // //                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
// // //                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
// // //                   {it.label}
// // //                 </a>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <span style={{ fontSize: '1.05rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
// // //         </div>
// // //         <span style={{
// // //           fontSize: '1rem', color: theme.text,
// // //           background: theme.chipBg, padding: '6px 16px',
// // //           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
// // //         }}>{totalToolsCount} tools</span>
// // //       </div>
// // //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
// // //         {items.map((it, i) => (
// // //           <a key={i} href={`#${it.id}`}
// // //             style={{
// // //               padding: '10px 20px', border: 'none', borderRadius: 22,
// // //               textDecoration: 'none', color: '#fff',
// // //               fontSize: '1.05rem', fontWeight: 500,
// // //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// // //               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
// // //               background: theme.accent,
// // //             }}
// // //             onClick={(e) => { e.preventDefault(); onJump(it.id); }}
// // //             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
// // //             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
// // //             {generateShortTitle(it.label)}
// // //           </a>
// // //         ))}
// // //       </div>
// // //     </nav>
// // //   );
// // // };


// // // /* ================================================================
// // //    TOOLS HEADER
// // //    ================================================================ */

// // // const ToolsHeader = ({ totalCount, categoriesCount, intro, icon, article, theme }) => {
// // //   if (!totalCount) return null;
// // //   return (
// // //     <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
// // //       <div style={{
// // //         background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
// // //         border: `2px solid ${theme.border}`,
// // //         padding: '34px 38px',
// // //         borderRadius: article ? '16px 16px 0 0' : 16,
// // //         borderBottom: article ? 'none' : `2px solid ${theme.border}`,
// // //       }}>
// // //         {intro && (
// // //           <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
// // //             <div style={{
// // //               width: 64, height: 64, borderRadius: 14,
// // //               display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //               fontSize: '1.85rem', flexShrink: 0,
// // //               background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
// // //             }}>{icon}</div>
// // //             <div style={{ flex: 1 }}>
// // //               {intro.title && <h2 style={{
// // //                 fontSize: '1.65rem', fontWeight: 600, color: theme.text,
// // //                 fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
// // //                 margin: '0 0 10px 0', lineHeight: 1.3,
// // //               }}>{intro.title}</h2>}
// // //               {intro.description && <p style={{
// // //                 fontSize: '1.2rem', color: theme.textSecondary,
// // //                 fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
// // //                 lineHeight: 1.55, margin: 0,
// // //               }}>{intro.description}</p>}
// // //             </div>
// // //           </div>
// // //         )}
// // //         {intro && intro.tip && (
// // //           <div style={{
// // //             background: theme.tipBg,
// // //             border: `1px solid ${theme.border}`,
// // //             borderLeft: `4px solid ${theme.accent}`,
// // //             borderRadius: 8, padding: '17px 22px', marginBottom: 24,
// // //             display: 'flex', alignItems: 'center', gap: 14,
// // //             fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400,
// // //             letterSpacing: '0.005em', color: theme.tipText,
// // //           }}>
// // //             <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
// // //             <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
// // //           </div>
// // //         )}
// // //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
// // //           <div style={{ display: 'flex', gap: 28 }}>
// // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{totalCount}</span>
// // //               <span>Tools</span>
// // //             </div>
// // //             {categoriesCount > 0 && (
// // //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // //                 <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{categoriesCount}</span>
// // //                 <span>Categories</span>
// // //               </div>
// // //             )}
// // //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// // //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>100%</span>
// // //               <span>Free</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {article && (
// // //         <div style={{
// // //           background: theme.bgMuted,
// // //           border: `2px solid ${theme.border}`,
// // //           borderTop: 'none',
// // //           borderRadius: '0 0 16px 16px',
// // //           padding: 24,
// // //         }}>
// // //           <div style={{
// // //             background: theme.bgSubtle,
// // //             border: `2px solid ${theme.borderStrong}`,
// // //             borderRadius: 12,
// // //             padding: '28px 32px',
// // //           }}>
// // //             <div style={{
// // //               fontSize: '1.08rem',
// // //               fontFamily: 'Georgia, "Times New Roman", serif',
// // //               fontWeight: 500, color: theme.text,
// // //               lineHeight: 1.85, letterSpacing: '0.01em',
// // //             }}>
// // //               {processContent(article)}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    SIDEBAR
// // //    ================================================================ */

// // // const SidebarIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// // //   if (!icon) return null;
// // //   if (typeof icon === 'string') {
// // //     if (icon.trim().startsWith('<svg')) {
// // //       return <span style={{ width: size, height: size, display: 'inline-flex' }} dangerouslySetInnerHTML={{ __html: icon }} />;
// // //     }
// // //     return <span style={{ fontSize: size, color, lineHeight: 1 }}>{icon}</span>;
// // //   }
// // //   return null;
// // // };

// // // const SidebarLink = ({ link, theme }) => {
// // //   const [h, setH] = useState(false);
// // //   return (
// // //     <Link
// // //       href={link.href || '#'}
// // //       style={{
// // //         display: 'flex', alignItems: 'center', gap: 10,
// // //         padding: '9px 20px', fontSize: 14, fontWeight: 500,
// // //         color: h ? theme.sidebarText : theme.sidebarTextMuted,
// // //         textDecoration: 'none',
// // //         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
// // //         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
// // //         paddingLeft: h ? 17 : 20, transition: 'all 0.15s', lineHeight: 1.4,
// // //       }}
// // //       onMouseEnter={() => setH(true)}
// // //       onMouseLeave={() => setH(false)}
// // //     >
// // //       {link.icon && (
// // //         <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// // //           <SidebarIcon icon={link.icon} size={15} color={h ? theme.sidebarText : theme.sidebarTextMuted} />
// // //         </span>
// // //       )}
// // //       <span style={{ flex: 1, minWidth: 0 }}>{link.label}</span>
// // //     </Link>
// // //   );
// // // };

// // // const SidebarGroup = ({ group, theme, isFirst }) => (
// // //   <div style={{ marginTop: isFirst ? 0 : 12 }}>
// // //     {!isFirst && <div style={{ height: 1, background: theme.sidebarDivider, margin: '0 20px 12px' }} />}
// // //     {(group.title || group.icon) && (
// // //       <div style={{
// // //         display: 'flex', alignItems: 'center', gap: 8,
// // //         padding: '8px 20px',
// // //         fontSize: 11, fontWeight: 700,
// // //         textTransform: 'uppercase', letterSpacing: 1.2,
// // //         color: theme.sidebarTextMuted,
// // //       }}>
// // //         {group.icon && <SidebarIcon icon={group.icon} size={14} color={theme.sidebarTextMuted} />}
// // //         {group.title && <span>{group.title}</span>}
// // //       </div>
// // //     )}
// // //     {(group.links || []).map((lnk, i) => (
// // //       <SidebarLink key={i} link={lnk} theme={theme} />
// // //     ))}
// // //   </div>
// // // );

// // // const SidebarDot = ({ label, href, theme }) => {
// // //   const [h, setH] = useState(false);
// // //   return (
// // //     <Link
// // //       href={href || '#'}
// // //       style={{ position: 'relative', display: 'inline-block' }}
// // //       onMouseEnter={() => setH(true)}
// // //       onMouseLeave={() => setH(false)}
// // //     >
// // //       <span style={{
// // //         display: 'block', width: 8, height: 8, borderRadius: '50%',
// // //         background: h ? theme.sidebarText : theme.sidebarTextMuted,
// // //         transition: 'all 0.2s', transform: h ? 'scale(1.5)' : 'scale(1)',
// // //       }} />
// // //       <span style={{
// // //         position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)',
// // //         background: theme.text, color: '#fff', fontSize: 13, padding: '4px 10px',
// // //         borderRadius: 4, whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none',
// // //         transition: 'opacity 0.15s', zIndex: 10,
// // //       }}>{label}</span>
// // //     </Link>
// // //   );
// // // };

// // // const Sidebar = ({ groups, brandName, brandSub, open, onToggle, theme }) => {
// // //   const ref = useRef(null);
// // //   useEffect(() => {
// // //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// // //     document.addEventListener('click', handler);
// // //     return () => document.removeEventListener('click', handler);
// // //   }, [open, onToggle]);

// // //   const flatLinks = useMemo(() => groups.flatMap((g) => g.links || []), [groups]);

// // //   return (
// // //     <aside
// // //       ref={ref}
// // //       style={{
// // //         position: 'fixed', left: 0, top: NAVBAR_HEIGHT,
// // //         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
// // //         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// // //         background: theme.sidebarBg, zIndex: 90,
// // //         display: 'flex', flexDirection: 'column',
// // //         transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// // //         overflow: 'hidden',
// // //         boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// // //         fontFamily: FONT_FAMILY,
// // //       }}
// // //     >
// // //       <style dangerouslySetInnerHTML={{ __html: `.vtp-sb-nav::-webkit-scrollbar { display: none; }` }} />
// // //       <button
// // //         onClick={() => onToggle(!open)}
// // //         aria-label="Toggle sidebar"
// // //         style={{
// // //           width: '100%', height: 44,
// // //           display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //           background: 'none', border: 'none', cursor: 'pointer',
// // //           color: theme.sidebarTextMuted, flexShrink: 0,
// // //           borderBottom: `1px solid ${theme.sidebarDivider}`,
// // //         }}
// // //         onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
// // //         onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
// // //       >
// // //         <svg
// // //           style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
// // //           viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
// // //         >
// // //           <polyline points="9 18 15 12 9 6" />
// // //         </svg>
// // //       </button>
// // //       {(brandName || brandSub) && (
// // //         <div style={{
// // //           padding: '14px 20px 10px',
// // //           opacity: open ? 1 : 0,
// // //           transition: 'opacity 0.15s',
// // //           transitionDelay: open ? '0.1s' : '0s',
// // //           whiteSpace: 'nowrap',
// // //         }}>
// // //           {brandName && <span style={{ fontSize: 18, fontWeight: 700, color: theme.sidebarText, display: 'block', marginBottom: 2 }}>{brandName}</span>}
// // //           {brandSub && <span style={{ fontSize: 12, color: theme.sidebarTextMuted, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// // //         </div>
// // //       )}
// // //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 0' }}>
// // //         {flatLinks.slice(0, 12).map((lnk, i) => (
// // //           <SidebarDot key={i} label={lnk.label} href={lnk.href} theme={theme} />
// // //         ))}
// // //       </div>
// // //       <nav
// // //         className="vtp-sb-nav"
// // //         style={{
// // //           display: open ? 'flex' : 'none',
// // //           flexDirection: 'column',
// // //           padding: '8px 0', flex: 1,
// // //           overflowY: 'auto', overflowX: 'hidden',
// // //           scrollbarWidth: 'none', msOverflowStyle: 'none',
// // //         }}
// // //       >
// // //         {groups.map((group, gi) => (
// // //           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
// // //         ))}
// // //       </nav>
// // //     </aside>
// // //   );
// // // };

// // // const buildAutoSidebarGroups = ({ categories, standalone }) => {
// // //   const groups = [];
// // //   for (const cat of categories) {
// // //     const links = [];
// // //     for (const u of cat.ungrouped) links.push({ label: u.title, href: u.href });
// // //     for (const sg of cat.subGroups) {
// // //       for (const it of sg.items) links.push({ label: it.title, href: it.href });
// // //     }
// // //     if (links.length > 0) groups.push({ title: cat.category, links });
// // //   }
// // //   if (standalone.length > 0) {
// // //     groups.push({
// // //       title: 'Other tools',
// // //       links: standalone.map((t) => ({ label: t.title, href: t.href })),
// // //     });
// // //   }
// // //   return groups;
// // // };


// // // /* ================================================================
// // //    MAIN
// // //    ================================================================ */

// // // const VisualToolsPage = ({
// // //   tools,
// // //   pageTitle = 'Visual Tools',
// // //   intro = null,
// // //   article = null,
// // //   icon = '🔍',
// // //   dropdownLabel = 'All Tools',
// // //   bodyOffsetTop = 60,

// // //   theme = 'deepBlue',
// // //   themeOverrides = null,

// // //   sidebar = false,
// // //   sidebarBrandName = null,
// // //   sidebarBrandSub = null,

// // //   customItems = null,

// // //   miniCardVariant = 'v1',
// // //   bigCardVariant = 'b1',
// // //   groupVariants = null,

// // //   subGroupStyle = 'default',
// // // }) => {
// // //   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);
// // //   const isMobile = useIsMobile();
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // //   const flatList = useMemo(() => {
// // //     const base = flattenInput(tools);
// // //     return mergeWithCustomItems(base, customItems);
// // //   }, [tools, customItems]);

// // //   const grouped = useMemo(() => groupItems(flatList), [flatList]);

// // //   const miniVariantFor = (item) => {
// // //     if (item && item.cardVariant) return item.cardVariant;
// // //     if (item && item.category && groupVariants && groupVariants[item.category]) {
// // //       return groupVariants[item.category];
// // //     }
// // //     return miniCardVariant;
// // //   };
// // //   const bigVariantFor = (item) => {
// // //     if (item && item.cardVariant) return item.cardVariant;
// // //     return bigCardVariant;
// // //   };

// // //   const totalCount = useMemo(
// // //     () => grouped.categories.reduce((s, c) => s + c.totalCount, 0) + grouped.standalone.length,
// // //     [grouped]
// // //   );

// // //   const handleJump = (id) => {
// // //     const el = document.getElementById(id);
// // //     if (!el) return;
// // //     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
// // //     window.scrollTo({ top: y, behavior: 'smooth' });
// // //   };

// // //   const sidebarGroups = useMemo(() => {
// // //     if (!sidebar) return null;
// // //     if (Array.isArray(sidebar)) return sidebar;
// // //     if (sidebar === true) return buildAutoSidebarGroups(grouped);
// // //     return null;
// // //   }, [sidebar, grouped]);

// // //   const showSidebar = !isMobile && !!sidebarGroups && sidebarGroups.length > 0;
// // //   const contentMarginLeft = showSidebar
// // //     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
// // //     : 0;

// // //   return (
// // //     <>
// // //       {showSidebar && (
// // //         <Sidebar
// // //           groups={sidebarGroups}
// // //           brandName={sidebarBrandName || pageTitle}
// // //           brandSub={sidebarBrandSub}
// // //           open={sidebarOpen}
// // //           onToggle={setSidebarOpen}
// // //           theme={t}
// // //         />
// // //       )}

// // //       <div style={{
// // //         marginLeft: contentMarginLeft,
// // //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// // //       }}>
// // //         <h1 style={{
// // //           fontFamily: SERIF_FAMILY,
// // //           fontSize: '2.4rem', fontWeight: 700,
// // //           color: t.pageTitle, textAlign: 'center',
// // //           margin: '0 0 24px',
// // //         }}>
// // //           {pageTitle}
// // //         </h1>

// // //         <QuickNav
// // //           categories={grouped.categories}
// // //           standaloneItems={grouped.standalone}
// // //           dropdownLabel={dropdownLabel}
// // //           theme={t}
// // //           onJump={handleJump}
// // //         />

// // //         <ToolsHeader
// // //           totalCount={totalCount}
// // //           categoriesCount={grouped.categories.length}
// // //           intro={intro}
// // //           icon={icon}
// // //           article={article}
// // //           theme={t}
// // //         />

// // //         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
// // //           {grouped.categories.map((group) => (
// // //             <div key={group.category} style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}>
// // //               <GroupPanel
// // //                 group={group}
// // //                 theme={t}
// // //                 anchorId={`cat-${slugify(group.category)}`}
// // //                 subGroupStyle={subGroupStyle}
// // //                 variantResolver={miniVariantFor}
// // //               />
// // //             </div>
// // //           ))}

// // //           {grouped.standalone.length > 0 && (
// // //             <section
// // //               id="standalone"
// // //               style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}
// // //             >
// // //               <AlgorithmicGrid
// // //                 items={grouped.standalone}
// // //                 getCellId={(item, idx) => standaloneIdFor(item, idx)}
// // //                 renderItem={(item) => (
// // //                   <BigCard item={item} theme={t} variant={bigVariantFor(item)} />
// // //                 )}
// // //               />
// // //             </section>
// // //           )}
// // //         </div>

// // //         <div style={{ height: 60 }} />
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default VisualToolsPage;


// // /**
// //  * VisualToolsPage — v17
// //  *
// //  * New in v17:
// //  *   1. Per-variant FIXED card heights. All cards using the same variant on
// //  *      the page render at identical height; rows align cleanly across the
// //  *      whole page.
// //  *      Defaults (px):
// //  *        v1: 320,  v2: 200,  v3: 220,  v4: 300,
// //  *        b1: 280,  b2: 360,  b3: 240
// //  *   2. Description container takes leftover vertical space, scrolls
// //  *      without a visible scrollbar, and has a bottom mask-fade so long
// //  *      content visually trails off (signals "more on click").
// //  *   3. Heights overridable via:
// //  *        prop `cardHeights={{ v1: 340, b3: 260 }}` (global per-page)
// //  *        per-card `cardHeight` field on the item (one card override)
// //  *
// //  * Inherited from v16: stretch fix (align-items: start), QuickNav per-
// //  * standalone, standalone DOM ids, no flex:1 on descriptions.
// //  */

// // import React, { useMemo, useState, useEffect, useRef } from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import { getTheme } from './visualToolsPageThemes';


// // /* ================================================================
// //    CONSTANTS
// //    ================================================================ */

// // const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// // const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// // const NAVBAR_HEIGHT = 55;
// // const SIDEBAR_COLLAPSED = 68;
// // const SIDEBAR_EXPANDED = 290;
// // const MOBILE_BREAKPOINT = 768;

// // const UNCATEGORIZED_LABEL = 'Other';
// // const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// // const CTA_OPEN = 'Open tool →';
// // const CTA_VIEW = 'View Details';

// // const DEFAULT_CARD_HEIGHTS = {
// //   v1: 320, v2: 200, v3: 220, v4: 300,
// //   b1: 280, b2: 360, b3: 240,
// // };

// // const FADE_PX = 28;


// // /* ================================================================
// //    GENERIC UTILITIES
// //    ================================================================ */

// // const hexToRgba = (hex, alpha) => {
// //   const h = hex.replace('#', '');
// //   const r = parseInt(h.substring(0, 2), 16);
// //   const g = parseInt(h.substring(2, 4), 16);
// //   const b = parseInt(h.substring(4, 6), 16);
// //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // };

// // const generateShortTitle = (title = '') =>
// //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // function slugify(s) {
// //   return String(s || '').toLowerCase().trim()
// //     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// // }

// // function isValidImagePath(val) {
// //   if (typeof val !== 'string') return false;
// //   const v = val.trim();
// //   if (!v) return false;
// //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // }

// // function isValidSvg(val) {
// //   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// // }

// // function isValidIcon(val) {
// //   if (typeof val !== 'string') return false;
// //   const v = val.trim();
// //   if (!v) return false;
// //   if (v.startsWith('/') || v.startsWith('http')) return false;
// //   if (v.toLowerCase().startsWith('<svg')) return false;
// //   return true;
// // }

// // function constrainSvg(svg) {
// //   return svg.replace(
// //     /<svg\b([^>]*)>/i,
// //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// //   );
// // }

// // function wrapFormula(f) {
// //   if (!f) return '';
// //   const t = String(f).trim();
// //   if (!t) return '';
// //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// //   return `$${t}$`;
// // }

// // function getVisualType(item) {
// //   if (!item) return null;
// //   if (isValidImagePath(item.image)) return 'image';
// //   if (isValidSvg(item.svg)) return 'svg';
// //   if (isValidIcon(item.icon)) return 'icon';
// //   return null;
// // }

// // function standaloneIdFor(item, idx) {
// //   if (item && item.id) return `tool-${slugify(item.id)}`;
// //   if (item && item.title) return `tool-${slugify(item.title)}`;
// //   return `tool-${idx}`;
// // }

// // // Final card height = item.cardHeight ?? cardHeights[variant] ?? DEFAULT
// // function resolveCardHeight(item, variant, cardHeights) {
// //   if (item && Number.isFinite(item.cardHeight)) return item.cardHeight;
// //   if (cardHeights && Number.isFinite(cardHeights[variant])) return cardHeights[variant];
// //   return DEFAULT_CARD_HEIGHTS[variant];
// // }


// // /* ================================================================
// //    USE-IS-MOBILE HOOK
// //    ================================================================ */

// // const useIsMobile = () => {
// //   const [isMobile, setIsMobile] = useState(false);
// //   useEffect(() => {
// //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
// //     const update = () => setIsMobile(mql.matches);
// //     update();
// //     mql.addEventListener('change', update);
// //     return () => mql.removeEventListener('change', update);
// //   }, []);
// //   return isMobile;
// // };


// // /* ================================================================
// //    GRID LAYOUT (algorithmic)
// //    ================================================================ */

// // function rowSizes(N) {
// //   if (!Number.isFinite(N) || N <= 0) return [];
// //   if (N === 1) return [1];
// //   if (N % 3 === 1 && N >= 4) {
// //     const fullThrees = (N - 4) / 3;
// //     return [...Array(fullThrees).fill(3), 2, 2];
// //   }
// //   if (N % 3 === 2) {
// //     const fullThrees = (N - 2) / 3;
// //     return [...Array(fullThrees).fill(3), 2];
// //   }
// //   return Array(N / 3).fill(3);
// // }

// // function getGridColumn(rowSize, posInRow) {
// //   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
// //   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
// //   if (rowSize === 1) return '2 / span 3';
// //   return 'auto';
// // }

// // function buildPlacements(items) {
// //   const list = Array.isArray(items) ? items : [];
// //   const rows = rowSizes(list.length);
// //   const out = [];
// //   let idx = 0;
// //   for (const rowSize of rows) {
// //     for (let pos = 0; pos < rowSize; pos++) {
// //       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
// //       idx += 1;
// //     }
// //   }
// //   return out;
// // }


// // /* ================================================================
// //    VARIANT RESOLVERS
// //    ================================================================ */

// // const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// // const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// // function resolveMiniVariant(requested, item) {
// //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
// //   if (!VALID_MINI.has(v)) v = 'v1';
// //   const hasVisual  = getVisualType(item) !== null;
// //   const hasFormula = !!(item && item.formula);
// //   if (v === 'v4' && !hasFormula) v = 'v1';
// //   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
// //   return v;
// // }

// // function resolveBigVariant(requested, item) {
// //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
// //   if (!VALID_BIG.has(v)) v = 'b1';
// //   const hasVisual = getVisualType(item) !== null;
// //   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
// //   return v;
// // }


// // /* ================================================================
// //    VISUAL
// //    ================================================================ */

// // const Visual = ({ item, height, mode = 'banner' }) => {
// //   const [imgFailed, setImgFailed] = useState(false);
// //   useEffect(() => { setImgFailed(false); }, [item && item.image]);

// //   const v = getVisualType(item);

// //   if (v === 'image' && !imgFailed) {
// //     return (
// //       <div style={{
// //         width: '100%', height, position: 'relative',
// //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// //       }}>
// //         <Image
// //           src={item.image}
// //           alt={item.imageAlt || item.title || ''}
// //           fill
// //           style={{ objectFit: 'cover' }}
// //           onError={() => setImgFailed(true)}
// //         />
// //       </div>
// //     );
// //   }

// //   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(item.svg))) {
// //     return (
// //       <div style={{
// //         width: '100%', height,
// //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// //       }}>
// //         <div style={{
// //           width: '80%', height: '80%',
// //           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
// //         }}
// //         dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
// //       </div>
// //     );
// //   }

// //   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(item.icon))) {
// //     return (
// //       <div style={{
// //         width: '100%', height,
// //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// //         background: 'rgba(255,255,255,0.06)',
// //         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
// //         opacity: 0.85, flexShrink: 0,
// //       }}>
// //         {item.icon}
// //       </div>
// //     );
// //   }

// //   return null;
// // };


// // /* ================================================================
// //    DESCRIPTION BLOCK — fixed-area, hidden scrollbar, bottom fade
// //    ================================================================ */

// // const fadeMask = `linear-gradient(to bottom, black calc(100% - ${FADE_PX}px), transparent 100%)`;

// // const FadingDescription = ({ children, fontSize, lineHeight, color, opacity }) => (
// //   <div
// //     className="vtp-desc-scroll"
// //     style={{
// //       flex: 1,
// //       minHeight: 0,
// //       overflowY: 'auto',
// //       overflowX: 'hidden',
// //       scrollbarWidth: 'none',
// //       msOverflowStyle: 'none',
// //       WebkitMaskImage: fadeMask,
// //       maskImage: fadeMask,
// //     }}
// //   >
// //     <p style={{
// //       margin: 0,
// //       fontSize,
// //       lineHeight,
// //       color,
// //       opacity,
// //       paddingBottom: FADE_PX,
// //     }}>
// //       {children}
// //     </p>
// //   </div>
// // );


// // /* ================================================================
// //    CTA STYLES
// //    ================================================================ */

// // const ctaTextStyle = (theme) => ({
// //   fontSize: '0.78rem', fontWeight: 600,
// //   color: theme.cardText, opacity: 0.9,
// //   textTransform: 'uppercase', letterSpacing: '0.5px',
// //   fontFamily: FONT_FAMILY,
// //   flexShrink: 0,
// // });

// // const ctaPillStyle = (theme) => ({
// //   display: 'inline-block',
// //   border: `1px solid ${theme.cardText}`,
// //   padding: '8px 18px', borderRadius: 999,
// //   fontSize: '0.88rem', fontWeight: 500,
// //   color: theme.cardText, alignSelf: 'flex-start',
// //   fontFamily: FONT_FAMILY,
// //   flexShrink: 0,
// // });


// // /* ================================================================
// //    MINI · V1 — image top, text bottom
// //    ================================================================ */

// // const MiniV1 = ({ item, theme, height }) => {
// //   const visualHeight = Math.max(110, Math.round(height * 0.42));
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column',
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 8, overflow: 'hidden',
// //       height, textDecoration: 'none',
// //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //       fontFamily: FONT_FAMILY,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <Visual item={item} height={visualHeight} mode="banner" />
// //       <div style={{
// //         padding: '14px 18px 14px',
// //         display: 'flex', flexDirection: 'column',
// //         flex: 1, minHeight: 0,
// //       }}>
// //         <h3 style={{
// //           fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 6,
// //           color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// //         }}>{item.title}</h3>
// //         {item.description && (
// //           <FadingDescription
// //             fontSize="0.85rem" lineHeight={1.5}
// //             color={theme.cardText} opacity={0.88}
// //           >{item.description}</FadingDescription>
// //         )}
// //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// //       </div>
// //     </Link>
// //   );
// // };


// // /* ================================================================
// //    MINI · V2 — image left, text right
// //    ================================================================ */

// // const MiniV2 = ({ item, theme, height }) => (
// //   <Link href={item.href || '#'} style={{
// //     display: 'flex', flexDirection: 'row',
// //     background: theme.cardBg, color: theme.cardText,
// //     borderRadius: 8, overflow: 'hidden',
// //     height, textDecoration: 'none',
// //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //     fontFamily: FONT_FAMILY,
// //   }}
// //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //   >
// //     <div style={{ width: '40%', flexShrink: 0 }}>
// //       <Visual item={item} height="100%" mode="side" />
// //     </div>
// //     <div style={{
// //       padding: '14px 16px',
// //       display: 'flex', flexDirection: 'column',
// //       flex: 1, minHeight: 0,
// //     }}>
// //       <h3 style={{
// //         fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6,
// //         color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// //       }}>{item.title}</h3>
// //       {item.description && (
// //         <FadingDescription
// //           fontSize="0.82rem" lineHeight={1.45}
// //           color={theme.cardText} opacity={0.88}
// //         >{item.description}</FadingDescription>
// //       )}
// //       <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// //     </div>
// //   </Link>
// // );


// // /* ================================================================
// //    MINI · V3 — icon + text (no banner)
// //    ================================================================ */

// // const MiniV3 = ({ item, theme, height }) => {
// //   const hasIcon = isValidIcon(item.icon);
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column', gap: 10,
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 8, padding: '20px 22px',
// //       height, textDecoration: 'none',
// //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //       fontFamily: FONT_FAMILY, minHeight: 0,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
// //         {hasIcon && (
// //           <div style={{
// //             width: 44, height: 44, borderRadius: 10,
// //             background: 'rgba(255,255,255,0.15)',
// //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// //             fontSize: '1.3rem', flexShrink: 0,
// //           }}>{item.icon}</div>
// //         )}
// //         <h3 style={{
// //           fontSize: '1.05rem', fontWeight: 600, margin: 0,
// //           color: theme.cardText, lineHeight: 1.3,
// //         }}>{item.title}</h3>
// //       </div>
// //       {item.description && (
// //         <FadingDescription
// //           fontSize="0.86rem" lineHeight={1.5}
// //           color={theme.cardText} opacity={0.88}
// //         >{item.description}</FadingDescription>
// //       )}
// //       <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
// //     </Link>
// //   );
// // };


// // /* ================================================================
// //    MINI · V4 — formula prominent
// //    ================================================================ */

// // const MiniV4 = ({ item, theme, height }) => {
// //   const formulaHeight = Math.max(80, Math.round(height * 0.32));
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column',
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 8, overflow: 'hidden',
// //       height, textDecoration: 'none',
// //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //       fontFamily: FONT_FAMILY,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <div style={{
// //         background: 'rgba(255,255,255,0.08)',
// //         height: formulaHeight,
// //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// //         textAlign: 'center', padding: '0 16px',
// //         fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic',
// //         color: theme.cardText, opacity: 0.95, flexShrink: 0,
// //       }}>
// //         {processContent(wrapFormula(item.formula))}
// //       </div>
// //       <div style={{
// //         padding: '14px 18px',
// //         display: 'flex', flexDirection: 'column',
// //         flex: 1, minHeight: 0,
// //       }}>
// //         <h3 style={{
// //           fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4,
// //           color: theme.cardText, flexShrink: 0,
// //         }}>{item.title}</h3>
// //         {item.description && (
// //           <FadingDescription
// //             fontSize="0.82rem" lineHeight={1.45}
// //             color={theme.cardText} opacity={0.85}
// //           >{item.description}</FadingDescription>
// //         )}
// //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// //       </div>
// //     </Link>
// //   );
// // };


// // /* ================================================================
// //    BIG · B1 — image left, text right
// //    ================================================================ */

// // const BigB1 = ({ item, theme, height }) => (
// //   <Link href={item.href || '#'} style={{
// //     display: 'flex', flexDirection: 'row',
// //     background: theme.cardBg, color: theme.cardText,
// //     borderRadius: 10, overflow: 'hidden',
// //     height, textDecoration: 'none',
// //     transition: 'box-shadow 0.3s ease',
// //     fontFamily: FONT_FAMILY,
// //   }}
// //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// //   >
// //     <div style={{ width: '45%', flexShrink: 0 }}>
// //       <Visual item={item} height="100%" mode="side" />
// //     </div>
// //     <div style={{
// //       padding: '22px 26px',
// //       display: 'flex', flexDirection: 'column',
// //       flex: 1, minHeight: 0,
// //     }}>
// //       <h3 style={{
// //         fontSize: '1.4rem', fontWeight: 600, margin: 0, marginBottom: 10,
// //         color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// //       }}>{item.title}</h3>
// //       {item.description && (
// //         <FadingDescription
// //           fontSize="0.95rem" lineHeight={1.55}
// //           color={theme.cardText} opacity={0.9}
// //         >{item.description}</FadingDescription>
// //       )}
// //       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// //     </div>
// //   </Link>
// // );


// // /* ================================================================
// //    BIG · B2 — image top, text bottom
// //    ================================================================ */

// // const BigB2 = ({ item, theme, height }) => {
// //   const visualHeight = Math.max(140, Math.round(height * 0.5));
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column',
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 10, overflow: 'hidden',
// //       height, textDecoration: 'none',
// //       transition: 'box-shadow 0.3s ease',
// //       fontFamily: FONT_FAMILY,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <Visual item={item} height={visualHeight} mode="banner" />
// //       <div style={{
// //         padding: '18px 22px',
// //         display: 'flex', flexDirection: 'column',
// //         flex: 1, minHeight: 0,
// //       }}>
// //         <h3 style={{
// //           fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8,
// //           color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// //         }}>{item.title}</h3>
// //         {item.description && (
// //           <FadingDescription
// //             fontSize="0.95rem" lineHeight={1.55}
// //             color={theme.cardText} opacity={0.9}
// //           >{item.description}</FadingDescription>
// //         )}
// //         <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// //       </div>
// //     </Link>
// //   );
// // };


// // /* ================================================================
// //    BIG · B3 — text-led with inline icon
// //    ================================================================ */

// // const BigB3 = ({ item, theme, height }) => {
// //   const hasIcon = isValidIcon(item.icon);
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column',
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 10, padding: '24px 28px',
// //       height, textDecoration: 'none',
// //       transition: 'box-shadow 0.3s ease',
// //       fontFamily: FONT_FAMILY, minHeight: 0,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexShrink: 0 }}>
// //         {hasIcon && (
// //           <div style={{
// //             width: 52, height: 52, borderRadius: 12,
// //             background: 'rgba(255,255,255,0.15)',
// //             display: 'flex', alignItems: 'center', justifyContent: 'center',
// //             fontSize: '1.6rem', flexShrink: 0,
// //           }}>{item.icon}</div>
// //         )}
// //         <h3 style={{
// //           fontSize: '1.4rem', fontWeight: 600, margin: 0,
// //           color: theme.cardText, lineHeight: 1.3,
// //         }}>{item.title}</h3>
// //       </div>
// //       {item.description && (
// //         <FadingDescription
// //           fontSize="1rem" lineHeight={1.6}
// //           color={theme.cardText} opacity={0.9}
// //         >{item.description}</FadingDescription>
// //       )}
// //       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// //     </Link>
// //   );
// // };


// // /* ================================================================
// //    CARD DISPATCHERS
// //    ================================================================ */

// // const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// // const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// // const MiniCard = ({ item, theme, variant = 'v1', cardHeights }) => {
// //   const resolved = resolveMiniVariant(variant, item);
// //   const Component = MINI_MAP[resolved] || MiniV1;
// //   const height = resolveCardHeight(item, resolved, cardHeights);
// //   return <Component item={item} theme={theme} height={height} />;
// // };

// // const BigCard = ({ item, theme, variant = 'b1', cardHeights }) => {
// //   const resolved = resolveBigVariant(variant, item);
// //   const Component = BIG_MAP[resolved] || BigB1;
// //   const height = resolveCardHeight(item, resolved, cardHeights);
// //   return <Component item={item} theme={theme} height={height} />;
// // };


// // /* ================================================================
// //    ALGORITHMIC GRID
// //    ================================================================ */

// // const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
// //   const placements = useMemo(() => buildPlacements(items), [items]);
// //   if (!placements.length) return null;
// //   return (
// //     <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
// //       gap: '1rem',
// //       alignItems: 'start',
// //     }}>
// //       {placements.map(({ item, gridColumn, index }, i) => (
// //         <div
// //           key={i}
// //           id={getCellId ? getCellId(item, index) : undefined}
// //           className="vtp-algo-cell"
// //           style={{ gridColumn, minWidth: 0 }}
// //         >
// //           {renderItem(item)}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    GLOBAL STYLE — kill scrollbar in description containers
// //    ================================================================ */

// // const GlobalStyles = () => (
// //   <style dangerouslySetInnerHTML={{ __html: `
// //     .vtp-desc-scroll::-webkit-scrollbar { display: none; width: 0; height: 0; }
// //     @media (max-width: ${MOBILE_BREAKPOINT}px) {
// //       .vtp-algo-cell { grid-column: 1 / -1 !important; }
// //     }
// //   ` }} />
// // );


// // /* ================================================================
// //    INPUT NORMALIZATION
// //    ================================================================ */

// // const flattenInput = (input) => {
// //   if (Array.isArray(input)) return input;
// //   if (input && Array.isArray(input.items)) return input.items;
// //   if (input && Array.isArray(input.children)) {
// //     const out = [];
// //     for (const child of input.children) {
// //       if (child && child.hasViews && Array.isArray(child.views) && child.views.length > 0) {
// //         const inferredCat = child.category || child.title || null;
// //         for (const v of child.views) out.push({ ...v, category: v.category || inferredCat });
// //       } else if (child) {
// //         out.push(child);
// //       }
// //     }
// //     return out;
// //   }
// //   return [];
// // };


// // /* ================================================================
// //    MERGE CUSTOM ITEMS
// //    ================================================================ */

// // const mergeWithCustomItems = (autoList, customItems) => {
// //   if (!Array.isArray(customItems) || customItems.length === 0) return autoList;
// //   const decorated = customItems.map((item, i) => {
// //     const { at, ...rest } = item;
// //     let pos;
// //     if (at === 'start') pos = 0;
// //     else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
// //     else if (typeof at === 'number') pos = at;
// //     else pos = Number.POSITIVE_INFINITY;
// //     return { item: rest, pos, order: i };
// //   });
// //   decorated.sort((a, b) => {
// //     if (a.pos !== b.pos) return b.pos - a.pos;
// //     return b.order - a.order;
// //   });
// //   const result = [...autoList];
// //   decorated.forEach(({ item, pos }) => {
// //     if (pos === Number.POSITIVE_INFINITY) result.push(item);
// //     else {
// //       const clamped = Math.max(0, Math.min(pos, result.length));
// //       result.splice(clamped, 0, item);
// //     }
// //   });
// //   return result;
// // };


// // /* ================================================================
// //    GROUPING
// //    ================================================================ */

// // const groupItems = (flatList) => {
// //   const standalone = [];
// //   const catMap = new Map();
// //   const catOrder = [];

// //   for (const item of flatList) {
// //     if (!item) continue;
// //     if (!item.category) { standalone.push(item); continue; }
// //     if (!catMap.has(item.category)) {
// //       catMap.set(item.category, { ungrouped: [], subMap: new Map(), subOrder: [] });
// //       catOrder.push(item.category);
// //     }
// //     const cat = catMap.get(item.category);
// //     if (!item.subCategory) cat.ungrouped.push(item);
// //     else {
// //       if (!cat.subMap.has(item.subCategory)) {
// //         cat.subMap.set(item.subCategory, []);
// //         cat.subOrder.push(item.subCategory);
// //       }
// //       cat.subMap.get(item.subCategory).push(item);
// //     }
// //   }

// //   const categories = catOrder.map((catName) => {
// //     const cat = catMap.get(catName);
// //     const subGroups = cat.subOrder.map((sub) => ({
// //       name: sub, items: cat.subMap.get(sub),
// //     }));
// //     const totalCount = cat.ungrouped.length + subGroups.reduce((s, g) => s + g.items.length, 0);
// //     return { category: catName, ungrouped: cat.ungrouped, subGroups, totalCount };
// //   });

// //   return { categories, standalone };
// // };


// // /* ================================================================
// //    SUB-GROUP BLOCK
// //    ================================================================ */

// // const SubGroupBlock = ({ name, items, theme, variantResolver, cardHeights }) => (
// //   <div style={{
// //     paddingLeft: 16,
// //     borderLeft: `3px solid ${theme.accent}`,
// //     marginTop: 24,
// //   }}>
// //     <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
// //       <span style={{
// //         background: theme.accent, color: '#fff',
// //         padding: '4px 14px', borderRadius: 999,
// //         fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.3px',
// //         fontFamily: FONT_FAMILY,
// //       }}>{name}</span>
// //       <span style={{
// //         fontSize: '0.78rem', color: theme.textMuted, fontFamily: FONT_FAMILY,
// //       }}>{items.length} {items.length === 1 ? 'tool' : 'tools'}</span>
// //     </div>
// //     <AlgorithmicGrid
// //       items={items}
// //       renderItem={(item) => (
// //         <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
// //       )}
// //     />
// //   </div>
// // );


// // /* ================================================================
// //    SUB-GROUP TABS
// //    ================================================================ */

// // const SubGroupTabs = ({ ungrouped, subGroups, theme, variantResolver, cardHeights }) => {
// //   const tabs = [
// //     ...(ungrouped.length > 0 ? [{ name: UNCATEGORIZED_LABEL, items: ungrouped }] : []),
// //     ...subGroups,
// //   ];
// //   const [active, setActive] = useState(0);
// //   if (tabs.length === 0) return null;
// //   const activeTab = tabs[Math.min(active, tabs.length - 1)];
// //   return (
// //     <div>
// //       <div style={{
// //         display: 'flex', gap: 4, flexWrap: 'wrap',
// //         borderBottom: `2px solid ${hexToRgba(theme.accent, 0.15)}`,
// //         marginBottom: 18,
// //       }}>
// //         {tabs.map((tab, i) => {
// //           const isActive = i === active;
// //           return (
// //             <button
// //               key={i}
// //               onClick={() => setActive(i)}
// //               style={{
// //                 padding: '8px 16px', fontSize: '0.9rem', fontWeight: 600,
// //                 background: 'transparent',
// //                 color: isActive ? theme.accent : theme.textMuted,
// //                 border: 'none',
// //                 borderBottom: `2px solid ${isActive ? theme.accent : 'transparent'}`,
// //                 marginBottom: -2, cursor: 'pointer',
// //                 fontFamily: FONT_FAMILY,
// //               }}
// //             >
// //               {tab.name}
// //               <span style={{
// //                 background: hexToRgba(theme.accent, 0.12), color: theme.accent,
// //                 fontSize: '0.7rem', padding: '2px 8px', borderRadius: 999,
// //                 marginLeft: 6, fontWeight: 700,
// //               }}>{tab.items.length}</span>
// //             </button>
// //           );
// //         })}
// //       </div>
// //       <AlgorithmicGrid
// //         items={activeTab.items}
// //         renderItem={(item) => (
// //           <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
// //         )}
// //       />
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    GROUP PANEL
// //    ================================================================ */

// // const GroupPanel = ({
// //   group, theme, anchorId, subGroupStyle, variantResolver, cardHeights,
// // }) => {
// //   const hasSub = group.subGroups.length > 0;
// //   const hasUngrouped = group.ungrouped.length > 0;
// //   return (
// //     <section
// //       id={anchorId}
// //       style={{
// //         background: hexToRgba(theme.accent, 0.06),
// //         borderRadius: 12, overflow: 'hidden',
// //         boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
// //         marginBottom: '3rem',
// //       }}
// //     >
// //       <div style={{ background: theme.accent, height: 4 }} />
// //       <div style={{ padding: '22px 24px' }}>
// //         <div style={{
// //           display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
// //           gap: '1rem', flexWrap: 'wrap', marginBottom: 18,
// //         }}>
// //           <div>
// //             <div style={{
// //               fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
// //               letterSpacing: 1, color: theme.accent, marginBottom: 4,
// //               fontFamily: FONT_FAMILY,
// //             }}>
// //               {group.totalCount} {group.totalCount === 1 ? 'tool' : 'tools'}
// //               {hasSub && ` · ${group.subGroups.length} ${group.subGroups.length === 1 ? 'sub-group' : 'sub-groups'}`}
// //             </div>
// //             <div style={{
// //               fontSize: '1.5rem', fontWeight: 600, color: theme.text,
// //               fontFamily: FONT_FAMILY, letterSpacing: '-0.01em',
// //             }}>{group.category}</div>
// //           </div>
// //         </div>

// //         {subGroupStyle === 'tabs' && (hasSub || hasUngrouped) ? (
// //           <SubGroupTabs
// //             ungrouped={group.ungrouped}
// //             subGroups={group.subGroups}
// //             theme={theme}
// //             variantResolver={variantResolver}
// //             cardHeights={cardHeights}
// //           />
// //         ) : (
// //           <>
// //             {hasUngrouped && (
// //               <div>
// //                 {hasSub && (
// //                   <div style={{
// //                     fontSize: '0.7rem', fontWeight: 600, color: theme.textMuted,
// //                     letterSpacing: '0.5px', marginBottom: 8,
// //                     fontFamily: FONT_FAMILY, textTransform: 'uppercase',
// //                   }}>{UNCATEGORIZED_LABEL}</div>
// //                 )}
// //                 <AlgorithmicGrid
// //                   items={group.ungrouped}
// //                   renderItem={(item) => (
// //                     <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
// //                   )}
// //                 />
// //               </div>
// //             )}
// //             {group.subGroups.map((sg) => (
// //               <SubGroupBlock
// //                 key={sg.name}
// //                 name={sg.name}
// //                 items={sg.items}
// //                 theme={theme}
// //                 variantResolver={variantResolver}
// //                 cardHeights={cardHeights}
// //               />
// //             ))}
// //           </>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };


// // /* ================================================================
// //    QUICK NAV
// //    ================================================================ */

// // const QuickNav = ({ categories, standaloneItems, dropdownLabel, theme, onJump }) => {
// //   const [open, setOpen] = useState(false);

// //   const items = [
// //     ...categories.map((c) => ({
// //       id: `cat-${slugify(c.category)}`,
// //       label: c.category,
// //     })),
// //     ...standaloneItems.map((it, idx) => ({
// //       id: standaloneIdFor(it, idx),
// //       label: it.title,
// //     })),
// //   ];

// //   if (!items.length) return null;
// //   const totalToolsCount =
// //     categories.reduce((s, c) => s + c.totalCount, 0) + standaloneItems.length;

// //   return (
// //     <nav style={{
// //       maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px',
// //       background: theme.bgSubtle, borderRadius: 12,
// //       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
// //     }}>
// //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
// //         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
// //           <div
// //             style={{ position: 'relative' }}
// //             onMouseEnter={() => setOpen(true)}
// //             onMouseLeave={() => setOpen(false)}
// //           >
// //             <button style={{
// //               display: 'flex', alignItems: 'center', gap: 6,
// //               padding: '9px 16px', border: 'none', borderRadius: 8,
// //               background: open ? theme.accentHover : theme.accent,
// //               color: '#fff', fontSize: '1rem', fontWeight: 600,
// //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// //               cursor: 'pointer', transition: 'background 0.2s ease',
// //             }}>
// //               {dropdownLabel}
// //               <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
// //                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
// //               </svg>
// //             </button>
// //             <div style={{
// //               position: 'absolute', top: 'calc(100% + 6px)', left: 0,
// //               minWidth: 320, background: '#fff',
// //               border: `1px solid ${theme.border}`, borderRadius: 10,
// //               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
// //               transition: 'all 0.2s ease', zIndex: 100,
// //               maxHeight: 400, overflowY: 'auto',
// //               opacity: open ? 1 : 0,
// //               visibility: open ? 'visible' : 'hidden',
// //               transform: open ? 'translateY(0)' : 'translateY(-8px)',
// //             }}>
// //               {items.map((it, i) => (
// //                 <a key={i} href={`#${it.id}`}
// //                   style={{
// //                     display: 'block', padding: '13px 18px',
// //                     textDecoration: 'none', color: theme.text,
// //                     fontSize: '1.05rem', fontWeight: 500,
// //                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
// //                     borderBottom: `1px solid ${theme.bgSubtle}`,
// //                     transition: 'all 0.15s ease',
// //                   }}
// //                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(it.id); }}
// //                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
// //                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
// //                   {it.label}
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //           <span style={{ fontSize: '1.05rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
// //         </div>
// //         <span style={{
// //           fontSize: '1rem', color: theme.text,
// //           background: theme.chipBg, padding: '6px 16px',
// //           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
// //         }}>{totalToolsCount} tools</span>
// //       </div>
// //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
// //         {items.map((it, i) => (
// //           <a key={i} href={`#${it.id}`}
// //             style={{
// //               padding: '10px 20px', border: 'none', borderRadius: 22,
// //               textDecoration: 'none', color: '#fff',
// //               fontSize: '1.05rem', fontWeight: 500,
// //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// //               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
// //               background: theme.accent,
// //             }}
// //             onClick={(e) => { e.preventDefault(); onJump(it.id); }}
// //             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
// //             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
// //             {generateShortTitle(it.label)}
// //           </a>
// //         ))}
// //       </div>
// //     </nav>
// //   );
// // };


// // /* ================================================================
// //    TOOLS HEADER
// //    ================================================================ */

// // const ToolsHeader = ({ totalCount, categoriesCount, intro, icon, article, theme }) => {
// //   if (!totalCount) return null;
// //   return (
// //     <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
// //       <div style={{
// //         background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
// //         border: `2px solid ${theme.border}`,
// //         padding: '34px 38px',
// //         borderRadius: article ? '16px 16px 0 0' : 16,
// //         borderBottom: article ? 'none' : `2px solid ${theme.border}`,
// //       }}>
// //         {intro && (
// //           <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
// //             <div style={{
// //               width: 64, height: 64, borderRadius: 14,
// //               display: 'flex', alignItems: 'center', justifyContent: 'center',
// //               fontSize: '1.85rem', flexShrink: 0,
// //               background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
// //             }}>{icon}</div>
// //             <div style={{ flex: 1 }}>
// //               {intro.title && <h2 style={{
// //                 fontSize: '1.65rem', fontWeight: 600, color: theme.text,
// //                 fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
// //                 margin: '0 0 10px 0', lineHeight: 1.3,
// //               }}>{intro.title}</h2>}
// //               {intro.description && <p style={{
// //                 fontSize: '1.2rem', color: theme.textSecondary,
// //                 fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
// //                 lineHeight: 1.55, margin: 0,
// //               }}>{intro.description}</p>}
// //             </div>
// //           </div>
// //         )}
// //         {intro && intro.tip && (
// //           <div style={{
// //             background: theme.tipBg,
// //             border: `1px solid ${theme.border}`,
// //             borderLeft: `4px solid ${theme.accent}`,
// //             borderRadius: 8, padding: '17px 22px', marginBottom: 24,
// //             display: 'flex', alignItems: 'center', gap: 14,
// //             fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400,
// //             letterSpacing: '0.005em', color: theme.tipText,
// //           }}>
// //             <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
// //             <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
// //           </div>
// //         )}
// //         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
// //           <div style={{ display: 'flex', gap: 28 }}>
// //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{totalCount}</span>
// //               <span>Tools</span>
// //             </div>
// //             {categoriesCount > 0 && (
// //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// //                 <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{categoriesCount}</span>
// //                 <span>Categories</span>
// //               </div>
// //             )}
// //             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>100%</span>
// //               <span>Free</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {article && (
// //         <div style={{
// //           background: theme.bgMuted,
// //           border: `2px solid ${theme.border}`,
// //           borderTop: 'none',
// //           borderRadius: '0 0 16px 16px',
// //           padding: 24,
// //         }}>
// //           <div style={{
// //             background: theme.bgSubtle,
// //             border: `2px solid ${theme.borderStrong}`,
// //             borderRadius: 12,
// //             padding: '28px 32px',
// //           }}>
// //             <div style={{
// //               fontSize: '1.08rem',
// //               fontFamily: 'Georgia, "Times New Roman", serif',
// //               fontWeight: 500, color: theme.text,
// //               lineHeight: 1.85, letterSpacing: '0.01em',
// //             }}>
// //               {processContent(article)}
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    SIDEBAR
// //    ================================================================ */

// // const SidebarIcon = ({ icon, size = 16, color = 'currentColor' }) => {
// //   if (!icon) return null;
// //   if (typeof icon === 'string') {
// //     if (icon.trim().startsWith('<svg')) {
// //       return <span style={{ width: size, height: size, display: 'inline-flex' }} dangerouslySetInnerHTML={{ __html: icon }} />;
// //     }
// //     return <span style={{ fontSize: size, color, lineHeight: 1 }}>{icon}</span>;
// //   }
// //   return null;
// // };

// // const SidebarLink = ({ link, theme }) => {
// //   const [h, setH] = useState(false);
// //   return (
// //     <Link
// //       href={link.href || '#'}
// //       style={{
// //         display: 'flex', alignItems: 'center', gap: 10,
// //         padding: '9px 20px', fontSize: 14, fontWeight: 500,
// //         color: h ? theme.sidebarText : theme.sidebarTextMuted,
// //         textDecoration: 'none',
// //         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
// //         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
// //         paddingLeft: h ? 17 : 20, transition: 'all 0.15s', lineHeight: 1.4,
// //       }}
// //       onMouseEnter={() => setH(true)}
// //       onMouseLeave={() => setH(false)}
// //     >
// //       {link.icon && (
// //         <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
// //           <SidebarIcon icon={link.icon} size={15} color={h ? theme.sidebarText : theme.sidebarTextMuted} />
// //         </span>
// //       )}
// //       <span style={{ flex: 1, minWidth: 0 }}>{link.label}</span>
// //     </Link>
// //   );
// // };

// // const SidebarGroup = ({ group, theme, isFirst }) => (
// //   <div style={{ marginTop: isFirst ? 0 : 12 }}>
// //     {!isFirst && <div style={{ height: 1, background: theme.sidebarDivider, margin: '0 20px 12px' }} />}
// //     {(group.title || group.icon) && (
// //       <div style={{
// //         display: 'flex', alignItems: 'center', gap: 8,
// //         padding: '8px 20px',
// //         fontSize: 11, fontWeight: 700,
// //         textTransform: 'uppercase', letterSpacing: 1.2,
// //         color: theme.sidebarTextMuted,
// //       }}>
// //         {group.icon && <SidebarIcon icon={group.icon} size={14} color={theme.sidebarTextMuted} />}
// //         {group.title && <span>{group.title}</span>}
// //       </div>
// //     )}
// //     {(group.links || []).map((lnk, i) => (
// //       <SidebarLink key={i} link={lnk} theme={theme} />
// //     ))}
// //   </div>
// // );

// // const SidebarDot = ({ label, href, theme }) => {
// //   const [h, setH] = useState(false);
// //   return (
// //     <Link
// //       href={href || '#'}
// //       style={{ position: 'relative', display: 'inline-block' }}
// //       onMouseEnter={() => setH(true)}
// //       onMouseLeave={() => setH(false)}
// //     >
// //       <span style={{
// //         display: 'block', width: 8, height: 8, borderRadius: '50%',
// //         background: h ? theme.sidebarText : theme.sidebarTextMuted,
// //         transition: 'all 0.2s', transform: h ? 'scale(1.5)' : 'scale(1)',
// //       }} />
// //       <span style={{
// //         position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)',
// //         background: theme.text, color: '#fff', fontSize: 13, padding: '4px 10px',
// //         borderRadius: 4, whiteSpace: 'nowrap', opacity: h ? 1 : 0, pointerEvents: 'none',
// //         transition: 'opacity 0.15s', zIndex: 10,
// //       }}>{label}</span>
// //     </Link>
// //   );
// // };

// // const Sidebar = ({ groups, brandName, brandSub, open, onToggle, theme }) => {
// //   const ref = useRef(null);
// //   useEffect(() => {
// //     const handler = (e) => { if (open && ref.current && !ref.current.contains(e.target)) onToggle(false); };
// //     document.addEventListener('click', handler);
// //     return () => document.removeEventListener('click', handler);
// //   }, [open, onToggle]);

// //   const flatLinks = useMemo(() => groups.flatMap((g) => g.links || []), [groups]);

// //   return (
// //     <aside
// //       ref={ref}
// //       style={{
// //         position: 'fixed', left: 0, top: NAVBAR_HEIGHT,
// //         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
// //         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// //         background: theme.sidebarBg, zIndex: 90,
// //         display: 'flex', flexDirection: 'column',
// //         transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
// //         overflow: 'hidden',
// //         boxShadow: open ? '4px 0 24px rgba(0,0,0,0.15)' : 'none',
// //         fontFamily: FONT_FAMILY,
// //       }}
// //     >
// //       <style dangerouslySetInnerHTML={{ __html: `.vtp-sb-nav::-webkit-scrollbar { display: none; }` }} />
// //       <button
// //         onClick={() => onToggle(!open)}
// //         aria-label="Toggle sidebar"
// //         style={{
// //           width: '100%', height: 44,
// //           display: 'flex', alignItems: 'center', justifyContent: 'center',
// //           background: 'none', border: 'none', cursor: 'pointer',
// //           color: theme.sidebarTextMuted, flexShrink: 0,
// //           borderBottom: `1px solid ${theme.sidebarDivider}`,
// //         }}
// //         onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
// //         onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
// //       >
// //         <svg
// //           style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
// //           viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
// //         >
// //           <polyline points="9 18 15 12 9 6" />
// //         </svg>
// //       </button>
// //       {(brandName || brandSub) && (
// //         <div style={{
// //           padding: '14px 20px 10px',
// //           opacity: open ? 1 : 0,
// //           transition: 'opacity 0.15s',
// //           transitionDelay: open ? '0.1s' : '0s',
// //           whiteSpace: 'nowrap',
// //         }}>
// //           {brandName && <span style={{ fontSize: 18, fontWeight: 700, color: theme.sidebarText, display: 'block', marginBottom: 2 }}>{brandName}</span>}
// //           {brandSub && <span style={{ fontSize: 12, color: theme.sidebarTextMuted, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{brandSub}</span>}
// //         </div>
// //       )}
// //       <div style={{ display: open ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 0' }}>
// //         {flatLinks.slice(0, 12).map((lnk, i) => (
// //           <SidebarDot key={i} label={lnk.label} href={lnk.href} theme={theme} />
// //         ))}
// //       </div>
// //       <nav
// //         className="vtp-sb-nav"
// //         style={{
// //           display: open ? 'flex' : 'none',
// //           flexDirection: 'column',
// //           padding: '8px 0', flex: 1,
// //           overflowY: 'auto', overflowX: 'hidden',
// //           scrollbarWidth: 'none', msOverflowStyle: 'none',
// //         }}
// //       >
// //         {groups.map((group, gi) => (
// //           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
// //         ))}
// //       </nav>
// //     </aside>
// //   );
// // };

// // const buildAutoSidebarGroups = ({ categories, standalone }) => {
// //   const groups = [];
// //   for (const cat of categories) {
// //     const links = [];
// //     for (const u of cat.ungrouped) links.push({ label: u.title, href: u.href });
// //     for (const sg of cat.subGroups) {
// //       for (const it of sg.items) links.push({ label: it.title, href: it.href });
// //     }
// //     if (links.length > 0) groups.push({ title: cat.category, links });
// //   }
// //   if (standalone.length > 0) {
// //     groups.push({
// //       title: 'Other tools',
// //       links: standalone.map((t) => ({ label: t.title, href: t.href })),
// //     });
// //   }
// //   return groups;
// // };


// // /* ================================================================
// //    MAIN
// //    ================================================================ */

// // const VisualToolsPage = ({
// //   tools,
// //   pageTitle = 'Visual Tools',
// //   intro = null,
// //   article = null,
// //   icon = '🔍',
// //   dropdownLabel = 'All Tools',
// //   bodyOffsetTop = 60,

// //   theme = 'deepBlue',
// //   themeOverrides = null,

// //   sidebar = false,
// //   sidebarBrandName = null,
// //   sidebarBrandSub = null,

// //   customItems = null,

// //   miniCardVariant = 'v1',
// //   bigCardVariant = 'b1',
// //   groupVariants = null,

// //   subGroupStyle = 'default',

// //   // Per-variant card height overrides; merged on top of DEFAULT_CARD_HEIGHTS.
// //   // e.g. cardHeights={{ v1: 340, b3: 260 }}
// //   cardHeights = null,
// // }) => {
// //   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);
// //   const isMobile = useIsMobile();
// //   const [sidebarOpen, setSidebarOpen] = useState(false);

// //   const mergedCardHeights = useMemo(
// //     () => ({ ...DEFAULT_CARD_HEIGHTS, ...(cardHeights || {}) }),
// //     [cardHeights]
// //   );

// //   const flatList = useMemo(() => {
// //     const base = flattenInput(tools);
// //     return mergeWithCustomItems(base, customItems);
// //   }, [tools, customItems]);

// //   const grouped = useMemo(() => groupItems(flatList), [flatList]);

// //   const miniVariantFor = (item) => {
// //     if (item && item.cardVariant) return item.cardVariant;
// //     if (item && item.category && groupVariants && groupVariants[item.category]) {
// //       return groupVariants[item.category];
// //     }
// //     return miniCardVariant;
// //   };
// //   const bigVariantFor = (item) => {
// //     if (item && item.cardVariant) return item.cardVariant;
// //     return bigCardVariant;
// //   };

// //   const totalCount = useMemo(
// //     () => grouped.categories.reduce((s, c) => s + c.totalCount, 0) + grouped.standalone.length,
// //     [grouped]
// //   );

// //   const handleJump = (id) => {
// //     const el = document.getElementById(id);
// //     if (!el) return;
// //     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
// //     window.scrollTo({ top: y, behavior: 'smooth' });
// //   };

// //   const sidebarGroups = useMemo(() => {
// //     if (!sidebar) return null;
// //     if (Array.isArray(sidebar)) return sidebar;
// //     if (sidebar === true) return buildAutoSidebarGroups(grouped);
// //     return null;
// //   }, [sidebar, grouped]);

// //   const showSidebar = !isMobile && !!sidebarGroups && sidebarGroups.length > 0;
// //   const contentMarginLeft = showSidebar
// //     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
// //     : 0;

// //   return (
// //     <>
// //       <GlobalStyles />

// //       {showSidebar && (
// //         <Sidebar
// //           groups={sidebarGroups}
// //           brandName={sidebarBrandName || pageTitle}
// //           brandSub={sidebarBrandSub}
// //           open={sidebarOpen}
// //           onToggle={setSidebarOpen}
// //           theme={t}
// //         />
// //       )}

// //       <div style={{
// //         marginLeft: contentMarginLeft,
// //         transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
// //       }}>
// //         <h1 style={{
// //           fontFamily: SERIF_FAMILY,
// //           fontSize: '2.4rem', fontWeight: 700,
// //           color: t.pageTitle, textAlign: 'center',
// //           margin: '0 0 24px',
// //         }}>
// //           {pageTitle}
// //         </h1>

// //         <QuickNav
// //           categories={grouped.categories}
// //           standaloneItems={grouped.standalone}
// //           dropdownLabel={dropdownLabel}
// //           theme={t}
// //           onJump={handleJump}
// //         />

// //         <ToolsHeader
// //           totalCount={totalCount}
// //           categoriesCount={grouped.categories.length}
// //           intro={intro}
// //           icon={icon}
// //           article={article}
// //           theme={t}
// //         />

// //         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
// //           {grouped.categories.map((group) => (
// //             <div key={group.category} style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}>
// //               <GroupPanel
// //                 group={group}
// //                 theme={t}
// //                 anchorId={`cat-${slugify(group.category)}`}
// //                 subGroupStyle={subGroupStyle}
// //                 variantResolver={miniVariantFor}
// //                 cardHeights={mergedCardHeights}
// //               />
// //             </div>
// //           ))}

// //           {grouped.standalone.length > 0 && (
// //             <section
// //               id="standalone"
// //               style={{ width: '90%', maxWidth: 1200, margin: '0 auto 3rem', padding: '0 1rem' }}
// //             >
// //               <AlgorithmicGrid
// //                 items={grouped.standalone}
// //                 getCellId={(item, idx) => standaloneIdFor(item, idx)}
// //                 renderItem={(item) => (
// //                   <BigCard item={item} theme={t} variant={bigVariantFor(item)} cardHeights={mergedCardHeights} />
// //                 )}
// //               />
// //             </section>
// //           )}
// //         </div>

// //         <div style={{ height: 60 }} />
// //       </div>
// //     </>
// //   );
// // };

// // export default VisualToolsPage;


// /**
//  * VisualToolsPage — v18
//  *
//  * New in v18:
//  *   1. Optional `article` prop — page-level article block (eyebrow/title/content),
//  *      rendered between ToolsHeader and categories. Old `article` field passed
//  *      inside ToolsHeader (top-level prop) still works as a fallback when no
//  *      separate article block is rendered.
//  *   2. Optional `videos` prop — page-level video set with 4 layouts:
//  *      'above' | 'beside' | 'below' | 'strip'. Mounts a click-to-play modal.
//  *   3. Optional per-category overrides:
//  *        categoryArticles = { 'Functions': { eyebrow, title, content } }
//  *        categoryVideos   = { 'Functions': { videos: [...], layout: 'beside' } }
//  *      Each renders inside its category panel, before the cards grid.
//  *   4. Reduced fonts in QuickNav and ToolsHeader (intro / tip / stats).
//  *
//  * Everything new is OPTIONAL with safe fallbacks — missing/empty input
//  * skips the block entirely. Nothing crashes.
//  */

// import React, { useMemo, useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { processContent } from '@/app/utils/contentProcessor';
// import { getTheme } from './visualToolsPageThemes';


// /* ================================================================
//    CONSTANTS
//    ================================================================ */

// const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// const NAVBAR_HEIGHT = 55;
// const SIDEBAR_COLLAPSED = 68;
// const SIDEBAR_EXPANDED = 290;
// const MOBILE_BREAKPOINT = 768;

// const UNCATEGORIZED_LABEL = 'Other';
// const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// const CTA_OPEN = 'Open tool →';
// const CTA_VIEW = 'View Details';

// const DEFAULT_CARD_HEIGHTS = {
//   v1: 320, v2: 200, v3: 220, v4: 300,
//   b1: 280, b2: 360, b3: 240,
// };

// const FADE_PX = 28;

// const VALID_VIDEO_LAYOUTS = new Set(['above', 'beside', 'below', 'strip']);


// /* ================================================================
//    GENERIC UTILITIES
//    ================================================================ */

// const hexToRgba = (hex, alpha) => {
//   const h = hex.replace('#', '');
//   const r = parseInt(h.substring(0, 2), 16);
//   const g = parseInt(h.substring(2, 4), 16);
//   const b = parseInt(h.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// const generateShortTitle = (title = '') =>
//   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// function slugify(s) {
//   return String(s || '').toLowerCase().trim()
//     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// }

// function isValidImagePath(val) {
//   if (typeof val !== 'string') return false;
//   const v = val.trim();
//   if (!v) return false;
//   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// }

// function isValidSvg(val) {
//   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// }

// function isValidIcon(val) {
//   if (typeof val !== 'string') return false;
//   const v = val.trim();
//   if (!v) return false;
//   if (v.startsWith('/') || v.startsWith('http')) return false;
//   if (v.toLowerCase().startsWith('<svg')) return false;
//   return true;
// }

// function constrainSvg(svg) {
//   return svg.replace(
//     /<svg\b([^>]*)>/i,
//     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
//   );
// }

// function wrapFormula(f) {
//   if (!f) return '';
//   const t = String(f).trim();
//   if (!t) return '';
//   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
//   return `$${t}$`;
// }

// function getVisualType(item) {
//   if (!item) return null;
//   if (isValidImagePath(item.image)) return 'image';
//   if (isValidSvg(item.svg)) return 'svg';
//   if (isValidIcon(item.icon)) return 'icon';
//   return null;
// }

// function standaloneIdFor(item, idx) {
//   if (item && item.id) return `tool-${slugify(item.id)}`;
//   if (item && item.title) return `tool-${slugify(item.title)}`;
//   return `tool-${idx}`;
// }

// function resolveCardHeight(item, variant, cardHeights) {
//   if (item && Number.isFinite(item.cardHeight)) return item.cardHeight;
//   if (cardHeights && Number.isFinite(cardHeights[variant])) return cardHeights[variant];
//   return DEFAULT_CARD_HEIGHTS[variant];
// }

// // True when article object has at least one renderable field.
// function hasArticleContent(a) {
//   if (!a || typeof a !== 'object') return false;
//   return !!(a.eyebrow || a.title || a.content);
// }

// // Returns sanitized array of video objects, or [].
// function sanitizeVideos(videos) {
//   if (!Array.isArray(videos)) return [];
//   return videos.filter((v) => v && (v.embedUrl || v.title));
// }

// function sanitizeVideoLayout(layout) {
//   if (typeof layout !== 'string') return 'beside';
//   const l = layout.toLowerCase();
//   return VALID_VIDEO_LAYOUTS.has(l) ? l : 'beside';
// }


// /* ================================================================
//    USE-IS-MOBILE HOOK
//    ================================================================ */

// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
//     const update = () => setIsMobile(mql.matches);
//     update();
//     mql.addEventListener('change', update);
//     return () => mql.removeEventListener('change', update);
//   }, []);
//   return isMobile;
// };


// /* ================================================================
//    GRID LAYOUT (algorithmic)
//    ================================================================ */

// function rowSizes(N) {
//   if (!Number.isFinite(N) || N <= 0) return [];
//   if (N === 1) return [1];
//   if (N % 3 === 1 && N >= 4) {
//     const fullThrees = (N - 4) / 3;
//     return [...Array(fullThrees).fill(3), 2, 2];
//   }
//   if (N % 3 === 2) {
//     const fullThrees = (N - 2) / 3;
//     return [...Array(fullThrees).fill(3), 2];
//   }
//   return Array(N / 3).fill(3);
// }

// function getGridColumn(rowSize, posInRow) {
//   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
//   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
//   if (rowSize === 1) return '2 / span 3';
//   return 'auto';
// }

// function buildPlacements(items) {
//   const list = Array.isArray(items) ? items : [];
//   const rows = rowSizes(list.length);
//   const out = [];
//   let idx = 0;
//   for (const rowSize of rows) {
//     for (let pos = 0; pos < rowSize; pos++) {
//       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
//       idx += 1;
//     }
//   }
//   return out;
// }


// /* ================================================================
//    VARIANT RESOLVERS
//    ================================================================ */

// const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// function resolveMiniVariant(requested, item) {
//   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
//   if (!VALID_MINI.has(v)) v = 'v1';
//   const hasVisual  = getVisualType(item) !== null;
//   const hasFormula = !!(item && item.formula);
//   if (v === 'v4' && !hasFormula) v = 'v1';
//   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
//   return v;
// }

// function resolveBigVariant(requested, item) {
//   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
//   if (!VALID_BIG.has(v)) v = 'b1';
//   const hasVisual = getVisualType(item) !== null;
//   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
//   return v;
// }


// /* ================================================================
//    VISUAL
//    ================================================================ */

// const Visual = ({ item, height, mode = 'banner' }) => {
//   const [imgFailed, setImgFailed] = useState(false);
//   useEffect(() => { setImgFailed(false); }, [item && item.image]);

//   const v = getVisualType(item);

//   if (v === 'image' && !imgFailed) {
//     return (
//       <div style={{
//         width: '100%', height, position: 'relative',
//         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
//       }}>
//         <Image
//           src={item.image}
//           alt={item.imageAlt || item.title || ''}
//           fill
//           style={{ objectFit: 'cover' }}
//           onError={() => setImgFailed(true)}
//         />
//       </div>
//     );
//   }

//   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(item.svg))) {
//     return (
//       <div style={{
//         width: '100%', height,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
//       }}>
//         <div style={{
//           width: '80%', height: '80%',
//           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
//         }}
//         dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
//       </div>
//     );
//   }

//   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(item.icon))) {
//     return (
//       <div style={{
//         width: '100%', height,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         background: 'rgba(255,255,255,0.06)',
//         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
//         opacity: 0.85, flexShrink: 0,
//       }}>
//         {item.icon}
//       </div>
//     );
//   }

//   return null;
// };


// /* ================================================================
//    FADING DESCRIPTION
//    ================================================================ */

// const fadeMask = `linear-gradient(to bottom, black calc(100% - ${FADE_PX}px), transparent 100%)`;

// const FadingDescription = ({ children, fontSize, lineHeight, color, opacity }) => (
//   <div
//     className="vtp-desc-scroll"
//     style={{
//       flex: 1,
//       minHeight: 0,
//       overflowY: 'auto',
//       overflowX: 'hidden',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none',
//       WebkitMaskImage: fadeMask,
//       maskImage: fadeMask,
//     }}
//   >
//     <p style={{
//       margin: 0, fontSize, lineHeight, color, opacity,
//       paddingBottom: FADE_PX,
//     }}>
//       {children}
//     </p>
//   </div>
// );


// /* ================================================================
//    CTA STYLES
//    ================================================================ */

// const ctaTextStyle = (theme) => ({
//   fontSize: '0.78rem', fontWeight: 600,
//   color: theme.cardText, opacity: 0.9,
//   textTransform: 'uppercase', letterSpacing: '0.5px',
//   fontFamily: FONT_FAMILY, flexShrink: 0,
// });

// const ctaPillStyle = (theme) => ({
//   display: 'inline-block',
//   border: `1px solid ${theme.cardText}`,
//   padding: '8px 18px', borderRadius: 999,
//   fontSize: '0.88rem', fontWeight: 500,
//   color: theme.cardText, alignSelf: 'flex-start',
//   fontFamily: FONT_FAMILY, flexShrink: 0,
// });


// /* ================================================================
//    CARD VARIANTS — V1..V4 mini, B1..B3 big (unchanged from v17)
//    ================================================================ */

// const MiniV1 = ({ item, theme, height }) => {
//   const visualHeight = Math.max(110, Math.round(height * 0.42));
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column',
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 8, overflow: 'hidden',
//       height, textDecoration: 'none',
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//       fontFamily: FONT_FAMILY,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <Visual item={item} height={visualHeight} mode="banner" />
//       <div style={{ padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//         <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 6, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
//         {item.description && (
//           <FadingDescription fontSize="0.85rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
//         )}
//         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
//       </div>
//     </Link>
//   );
// };

// const MiniV2 = ({ item, theme, height }) => (
//   <Link href={item.href || '#'} style={{
//     display: 'flex', flexDirection: 'row',
//     background: theme.cardBg, color: theme.cardText,
//     borderRadius: 8, overflow: 'hidden',
//     height, textDecoration: 'none',
//     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//     fontFamily: FONT_FAMILY,
//   }}
//   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//   >
//     <div style={{ width: '40%', flexShrink: 0 }}>
//       <Visual item={item} height="100%" mode="side" />
//     </div>
//     <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//       <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
//       {item.description && (
//         <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
//       )}
//       <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
//     </div>
//   </Link>
// );

// const MiniV3 = ({ item, theme, height }) => {
//   const hasIcon = isValidIcon(item.icon);
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column', gap: 10,
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 8, padding: '20px 22px',
//       height, textDecoration: 'none',
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//       fontFamily: FONT_FAMILY, minHeight: 0,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
//         {hasIcon && (
//           <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</div>
//         )}
//         <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
//       </div>
//       {item.description && (
//         <FadingDescription fontSize="0.86rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
//       )}
//       <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
//     </Link>
//   );
// };

// const MiniV4 = ({ item, theme, height }) => {
//   const formulaHeight = Math.max(80, Math.round(height * 0.32));
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column',
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 8, overflow: 'hidden',
//       height, textDecoration: 'none',
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//       fontFamily: FONT_FAMILY,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <div style={{ background: 'rgba(255,255,255,0.08)', height: formulaHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 16px', fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic', color: theme.cardText, opacity: 0.95, flexShrink: 0 }}>
//         {processContent(wrapFormula(item.formula))}
//       </div>
//       <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//         <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4, color: theme.cardText, flexShrink: 0 }}>{item.title}</h3>
//         {item.description && (
//           <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.85}>{item.description}</FadingDescription>
//         )}
//         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
//       </div>
//     </Link>
//   );
// };

// const BigB1 = ({ item, theme, height }) => (
//   <Link href={item.href || '#'} style={{
//     display: 'flex', flexDirection: 'row',
//     background: theme.cardBg, color: theme.cardText,
//     borderRadius: 10, overflow: 'hidden',
//     height, textDecoration: 'none',
//     transition: 'box-shadow 0.3s ease',
//     fontFamily: FONT_FAMILY,
//   }}
//   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
//   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
//   >
//     <div style={{ width: '45%', flexShrink: 0 }}>
//       <Visual item={item} height="100%" mode="side" />
//     </div>
//     <div style={{ padding: '22px 26px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//       <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, marginBottom: 10, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
//       {item.description && (
//         <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
//       )}
//       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
//     </div>
//   </Link>
// );

// const BigB2 = ({ item, theme, height }) => {
//   const visualHeight = Math.max(140, Math.round(height * 0.5));
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column',
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 10, overflow: 'hidden',
//       height, textDecoration: 'none',
//       transition: 'box-shadow 0.3s ease',
//       fontFamily: FONT_FAMILY,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <Visual item={item} height={visualHeight} mode="banner" />
//       <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//         <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
//         {item.description && (
//           <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
//         )}
//         <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
//       </div>
//     </Link>
//   );
// };

// const BigB3 = ({ item, theme, height }) => {
//   const hasIcon = isValidIcon(item.icon);
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column',
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 10, padding: '24px 28px',
//       height, textDecoration: 'none',
//       transition: 'box-shadow 0.3s ease',
//       fontFamily: FONT_FAMILY, minHeight: 0,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexShrink: 0 }}>
//         {hasIcon && (
//           <div style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0 }}>{item.icon}</div>
//         )}
//         <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
//       </div>
//       {item.description && (
//         <FadingDescription fontSize="1rem" lineHeight={1.6} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
//       )}
//       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
//     </Link>
//   );
// };

// const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// const MiniCard = ({ item, theme, variant = 'v1', cardHeights }) => {
//   const resolved = resolveMiniVariant(variant, item);
//   const Component = MINI_MAP[resolved] || MiniV1;
//   const height = resolveCardHeight(item, resolved, cardHeights);
//   return <Component item={item} theme={theme} height={height} />;
// };

// const BigCard = ({ item, theme, variant = 'b1', cardHeights }) => {
//   const resolved = resolveBigVariant(variant, item);
//   const Component = BIG_MAP[resolved] || BigB1;
//   const height = resolveCardHeight(item, resolved, cardHeights);
//   return <Component item={item} theme={theme} height={height} />;
// };


// /* ================================================================
//    ALGORITHMIC GRID
//    ================================================================ */

// const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
//   const placements = useMemo(() => buildPlacements(items), [items]);
//   if (!placements.length) return null;
//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
//       gap: '1rem',
//       alignItems: 'start',
//     }}>
//       {placements.map(({ item, gridColumn, index }, i) => (
//         <div
//           key={i}
//           id={getCellId ? getCellId(item, index) : undefined}
//           className="vtp-algo-cell"
//           style={{ gridColumn, minWidth: 0 }}
//         >
//           {renderItem(item)}
//         </div>
//       ))}
//     </div>
//   );
// };


// /* ================================================================
//    ARTICLE BLOCK
//    ================================================================ */

// const ArticleBlock = ({ article, theme, compact = false }) => {
//   if (!hasArticleContent(article)) return null;
//   return (
//     <div style={{
//       background: theme.cardBg || '#fff',
//       border: `1px solid ${theme.border}`,
//       borderRadius: 12,
//       padding: compact ? '20px 24px' : '28px 32px',
//       fontFamily: SERIF_FAMILY,
//       color: theme.text,
//       lineHeight: 1.7,
//       fontSize: compact ? '0.92rem' : '0.98rem',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//     }}>
//       {article.eyebrow && (
//         <p style={{
//           fontFamily: FONT_FAMILY,
//           fontSize: '0.7rem', fontWeight: 600,
//           textTransform: 'uppercase', letterSpacing: '1.4px',
//           color: theme.textMuted, margin: '0 0 6px',
//         }}>{article.eyebrow}</p>
//       )}
//       {article.title && (
//         <h2 style={{
//           fontFamily: SERIF_FAMILY,
//           fontSize: compact ? '1.2rem' : '1.45rem', fontWeight: 600,
//           color: theme.accent, margin: '0 0 16px',
//           lineHeight: 1.3,
//         }}>{article.title}</h2>
//       )}
//       {article.content && processContent(article.content)}
//     </div>
//   );
// };


// /* ================================================================
//    VIDEO PLAYER (mock thumbnail with click → modal)
//    ================================================================ */

// const VideoPlayerThumb = ({ video, theme, onClick }) => {
//   if (!video) return null;
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       style={{
//         position: 'relative', width: '100%', aspectRatio: '16 / 9',
//         background: `linear-gradient(135deg, #1f4577 0%, ${theme.accent} 100%)`,
//         borderRadius: 8, overflow: 'hidden', cursor: 'pointer',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         border: 'none', padding: 0,
//       }}
//     >
//       {video.thumbnail && (
//         <img src={video.thumbnail} alt="" style={{
//           position: 'absolute', inset: 0, width: '100%', height: '100%',
//           objectFit: 'cover', opacity: 0.7,
//         }} />
//       )}
//       <div style={{
//         position: 'relative', zIndex: 2,
//         width: 56, height: 56, borderRadius: '50%',
//         background: 'rgba(255,255,255,0.95)',
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
//       }}>
//         <div style={{
//           width: 0, height: 0,
//           borderLeft: `14px solid ${theme.accent}`,
//           borderTop: '9px solid transparent',
//           borderBottom: '9px solid transparent',
//           marginLeft: 4,
//         }} />
//       </div>
//       <div style={{
//         position: 'absolute', bottom: 12, left: 14, right: 14, zIndex: 2,
//         color: '#fff', textAlign: 'left', fontFamily: FONT_FAMILY,
//       }}>
//         <p style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>{video.title || 'Video'}</p>
//         {video.duration && <p style={{ fontSize: '0.78rem', opacity: 0.85, margin: '2px 0 0' }}>{video.duration}</p>}
//       </div>
//     </button>
//   );
// };


// /* ================================================================
//    PLAYLISTS (vertical / horizontal / strip-grid)
//    ================================================================ */

// const VerticalPlaylist = ({ videos, activeIdx, onSelect, theme, heading }) => (
//   <div style={{
//     background: '#fff',
//     border: `1px solid ${theme.border}`,
//     borderRadius: 8, overflow: 'hidden',
//     maxHeight: 360, overflowY: 'auto',
//     marginTop: 12,
//   }}>
//     <div style={{
//       padding: '10px 14px',
//       borderBottom: `1px solid ${theme.border}`,
//       background: theme.bgSubtle,
//       fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase',
//       letterSpacing: '1.2px', color: theme.textMuted,
//       fontFamily: FONT_FAMILY,
//       display: 'flex', justifyContent: 'space-between',
//     }}>
//       <span>{heading}</span>
//       <span style={{ color: theme.accent, textTransform: 'none', letterSpacing: 0 }}>{videos.length} videos</span>
//     </div>
//     {videos.map((v, idx) => {
//       const isActive = idx === activeIdx;
//       return (
//         <button
//           key={v.id || idx}
//           type="button"
//           onClick={() => onSelect(idx)}
//           style={{
//             display: 'flex', alignItems: 'center', gap: 10,
//             padding: '10px 12px', width: '100%', textAlign: 'left',
//             border: 'none',
//             borderBottom: `1px solid ${theme.border}`,
//             borderLeft: `3px solid ${isActive ? theme.accent : 'transparent'}`,
//             background: isActive ? hexToRgba(theme.accent, 0.06) : 'transparent',
//             cursor: 'pointer',
//             fontFamily: FONT_FAMILY,
//           }}
//         >
//           <div style={{
//             width: 56, height: 32, borderRadius: 4, flexShrink: 0,
//             background: `linear-gradient(135deg, #1f4577, ${theme.accent})`,
//             position: 'relative', overflow: 'hidden',
//           }}>
//             {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
//           </div>
//           <div style={{ flex: 1, minWidth: 0 }}>
//             <p style={{
//               fontSize: '0.8rem', fontWeight: 500, margin: 0,
//               color: isActive ? theme.accent : theme.text,
//               whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
//             }}>{v.title || 'Video'}</p>
//             {v.duration && <p style={{ fontSize: '0.72rem', color: theme.textMuted, margin: '2px 0 0' }}>{v.duration}</p>}
//           </div>
//         </button>
//       );
//     })}
//   </div>
// );

// const HorizontalPlaylist = ({ videos, activeIdx, onSelect, theme, heading, open, onToggle }) => (
//   <div style={{
//     background: '#fff',
//     border: `1px solid ${theme.border}`,
//     borderRadius: 8, overflow: 'hidden',
//     marginTop: 12,
//   }}>
//     <button
//       type="button"
//       onClick={onToggle}
//       style={{
//         width: '100%', padding: '10px 14px',
//         background: theme.bgSubtle, border: 'none',
//         borderBottom: open ? `1px solid ${theme.border}` : 'none',
//         fontSize: '0.78rem', fontWeight: 600,
//         textTransform: 'uppercase', letterSpacing: '1.2px',
//         color: theme.textMuted, fontFamily: FONT_FAMILY,
//         cursor: 'pointer', textAlign: 'left',
//         display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//       }}
//     >
//       <span>
//         {heading}
//         <span style={{ marginLeft: 6, color: theme.accent, textTransform: 'none', letterSpacing: 0, fontSize: '0.75rem' }}>{videos.length} videos</span>
//       </span>
//       <span style={{
//         width: 0, height: 0,
//         borderLeft: '5px solid transparent',
//         borderRight: '5px solid transparent',
//         borderTop: `6px solid ${theme.textMuted}`,
//         transform: open ? 'rotate(0deg)' : 'rotate(-90deg)',
//         transition: 'transform 0.2s',
//       }} />
//     </button>
//     <div style={{
//       display: open ? 'grid' : 'none',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
//       gap: 10, padding: 14,
//     }}>
//       {videos.map((v, idx) => {
//         const isActive = idx === activeIdx;
//         return (
//           <button
//             key={v.id || idx}
//             type="button"
//             onClick={() => onSelect(idx)}
//             style={{
//               cursor: 'pointer', borderRadius: 6, padding: 4,
//               border: `2px solid ${isActive ? theme.accent : 'transparent'}`,
//               background: isActive ? hexToRgba(theme.accent, 0.06) : 'transparent',
//               textAlign: 'left', fontFamily: FONT_FAMILY,
//             }}
//           >
//             <div style={{
//               width: '100%', aspectRatio: '16 / 9',
//               background: `linear-gradient(135deg, #1f4577, ${theme.accent})`,
//               borderRadius: 4, marginBottom: 6,
//               position: 'relative', overflow: 'hidden',
//             }}>
//               {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
//             </div>
//             <p style={{
//               fontSize: '0.78rem', fontWeight: 500,
//               color: isActive ? theme.accent : theme.text,
//               margin: 0, lineHeight: 1.3,
//             }}>{v.title || 'Video'}</p>
//             {v.duration && <p style={{ fontSize: '0.7rem', color: theme.textMuted, margin: '2px 0 0' }}>{v.duration}</p>}
//           </button>
//         );
//       })}
//     </div>
//   </div>
// );

// const StripGrid = ({ videos, theme, title, onSelect }) => (
//   <div style={{
//     background: '#fff',
//     border: `1px solid ${theme.border}`,
//     borderRadius: 12, padding: '20px 24px',
//   }}>
//     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
//       <h3 style={{
//         fontFamily: SERIF_FAMILY, fontSize: '1.05rem', fontWeight: 600,
//         color: theme.accent, margin: 0,
//       }}>{title}</h3>
//       <span style={{
//         fontFamily: FONT_FAMILY, fontSize: '0.75rem',
//         color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '1.2px',
//       }}>{videos.length} videos</span>
//     </div>
//     <div style={{
//       display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12,
//     }}>
//       {videos.map((v, idx) => (
//         <button
//           key={v.id || idx}
//           type="button"
//           onClick={() => onSelect(idx)}
//           style={{
//             cursor: 'pointer', borderRadius: 6, padding: 4,
//             border: '2px solid transparent', background: 'transparent',
//             textAlign: 'left', fontFamily: FONT_FAMILY,
//           }}
//         >
//           <div style={{
//             width: '100%', aspectRatio: '16 / 9',
//             background: `linear-gradient(135deg, #1f4577, ${theme.accent})`,
//             borderRadius: 4, marginBottom: 6,
//             position: 'relative', overflow: 'hidden',
//           }}>
//             {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
//           </div>
//           <p style={{ fontSize: '0.78rem', fontWeight: 500, color: theme.text, margin: 0, lineHeight: 1.3 }}>{v.title || 'Video'}</p>
//           {v.duration && <p style={{ fontSize: '0.7rem', color: theme.textMuted, margin: '2px 0 0' }}>{v.duration}</p>}
//         </button>
//       ))}
//     </div>
//   </div>
// );


// /* ================================================================
//    ARTICLE-VIDEO BLOCK ORCHESTRATOR
//    ================================================================ */

// const ArticleVideoBlock = ({
//   article, videos, layout, theme,
//   videosHeading, videosCtaLabel, videosStripTitle,
//   onOpenModal, compact = false,
// }) => {
//   const cleanVideos = sanitizeVideos(videos);
//   const cleanLayout = sanitizeVideoLayout(layout);
//   const hasArt = hasArticleContent(article);
//   const hasVid = cleanVideos.length > 0;

//   const [activeIdx, setActiveIdx] = useState(0);
//   const [playlistOpen, setPlaylistOpen] = useState(true);

//   if (!hasArt && !hasVid) return null;

//   const activeVideo = hasVid ? cleanVideos[Math.min(activeIdx, cleanVideos.length - 1)] : null;
//   const handleSelect = (idx) => {
//     setActiveIdx(idx);
//     if (cleanVideos[idx]) onOpenModal(cleanVideos[idx]);
//   };

//   // Videos only, no article
//   if (!hasArt && hasVid) {
//     if (cleanLayout === 'strip') {
//       return (
//         <StripGrid
//           videos={cleanVideos}
//           theme={theme}
//           title={videosStripTitle}
//           onSelect={handleSelect}
//         />
//       );
//     }
//     return (
//       <div>
//         <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
//         {cleanVideos.length > 1 && (
//           <HorizontalPlaylist
//             videos={cleanVideos}
//             activeIdx={activeIdx}
//             onSelect={handleSelect}
//             theme={theme}
//             heading={videosHeading}
//             open={playlistOpen}
//             onToggle={() => setPlaylistOpen((o) => !o)}
//           />
//         )}
//       </div>
//     );
//   }

//   // Article only
//   if (hasArt && !hasVid) {
//     return <ArticleBlock article={article} theme={theme} compact={compact} />;
//   }

//   // Both
//   if (cleanLayout === 'strip') {
//     return (
//       <>
//         <div style={{ marginBottom: 18 }}>
//           <ArticleBlock article={article} theme={theme} compact={compact} />
//         </div>
//         <StripGrid
//           videos={cleanVideos}
//           theme={theme}
//           title={videosStripTitle}
//           onSelect={handleSelect}
//         />
//       </>
//     );
//   }

//   if (cleanLayout === 'above') {
//     return (
//       <div>
//         <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
//         {cleanVideos.length > 1 && (
//           <HorizontalPlaylist
//             videos={cleanVideos}
//             activeIdx={activeIdx}
//             onSelect={handleSelect}
//             theme={theme}
//             heading={videosHeading}
//             open={playlistOpen}
//             onToggle={() => setPlaylistOpen((o) => !o)}
//           />
//         )}
//         <div style={{ marginTop: 18 }}>
//           <ArticleBlock article={article} theme={theme} compact={compact} />
//         </div>
//       </div>
//     );
//   }

//   if (cleanLayout === 'beside') {
//     return (
//       <div className="vtp-beside-grid" style={{
//         display: 'grid', gridTemplateColumns: '1.4fr 1fr',
//         gap: 28, alignItems: 'start',
//       }}>
//         <ArticleBlock article={article} theme={theme} compact={compact} />
//         <div className="vtp-beside-vid" style={{ position: 'sticky', top: 20 }}>
//           <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
//           {cleanVideos.length > 1 && (
//             <VerticalPlaylist
//               videos={cleanVideos}
//               activeIdx={activeIdx}
//               onSelect={handleSelect}
//               theme={theme}
//               heading={videosHeading}
//             />
//           )}
//         </div>
//       </div>
//     );
//   }

//   // 'below' (default)
//   return (
//     <div style={{
//       background: theme.cardBg || '#fff',
//       border: `1px solid ${theme.border}`,
//       borderRadius: 12,
//       padding: compact ? '20px 24px' : '28px 32px',
//       fontFamily: SERIF_FAMILY,
//       color: theme.text,
//       lineHeight: 1.7,
//       fontSize: compact ? '0.92rem' : '0.98rem',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//     }}>
//       {article.eyebrow && (
//         <p style={{ fontFamily: FONT_FAMILY, fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.4px', color: theme.textMuted, margin: '0 0 6px' }}>{article.eyebrow}</p>
//       )}
//       {article.title && (
//         <h2 style={{ fontFamily: SERIF_FAMILY, fontSize: compact ? '1.2rem' : '1.45rem', fontWeight: 600, color: theme.accent, margin: '0 0 16px', lineHeight: 1.3 }}>{article.title}</h2>
//       )}
//       {article.content && processContent(article.content)}
//       <div style={{ marginTop: 22, paddingTop: 22, borderTop: `1px solid ${theme.border}` }}>
//         <p style={{ fontFamily: FONT_FAMILY, fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.4px', color: theme.textMuted, margin: '0 0 12px' }}>{videosCtaLabel}</p>
//         <VideoPlayerThumb video={activeVideo} theme={theme} onClick={() => onOpenModal(activeVideo)} />
//         {cleanVideos.length > 1 && (
//           <HorizontalPlaylist
//             videos={cleanVideos}
//             activeIdx={activeIdx}
//             onSelect={handleSelect}
//             theme={theme}
//             heading={videosHeading}
//             open={playlistOpen}
//             onToggle={() => setPlaylistOpen((o) => !o)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };


// /* ================================================================
//    VIDEO MODAL
//    ================================================================ */

// const VideoModal = ({ video, onClose }) => {
//   useEffect(() => {
//     if (!video) return undefined;
//     const handler = (e) => { if (e.key === 'Escape') onClose(); };
//     document.addEventListener('keydown', handler);
//     return () => document.removeEventListener('keydown', handler);
//   }, [video, onClose]);

//   if (!video) return null;
//   return (
//     <div
//       style={{
//         position: 'fixed', inset: 0,
//         background: 'rgba(10, 22, 40, 0.85)',
//         zIndex: 9999,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         padding: 24,
//       }}
//       onClick={onClose}
//       role="dialog"
//       aria-modal="true"
//     >
//       <div
//         style={{
//           position: 'relative', width: '100%', maxWidth: 960,
//           aspectRatio: '16 / 9', background: '#000',
//           borderRadius: 8, overflow: 'hidden',
//           boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Close video"
//           style={{
//             position: 'absolute', top: -44, right: 0,
//             background: 'transparent', border: 'none',
//             color: '#fff', fontSize: '1.6rem',
//             cursor: 'pointer', padding: '4px 12px', lineHeight: 1,
//           }}
//         >✕</button>
//         {video.embedUrl ? (
//           <iframe
//             src={video.embedUrl}
//             style={{ width: '100%', height: '100%', border: 'none' }}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title={video.title || 'Video'}
//           />
//         ) : (
//           <div style={{ color: '#fff', padding: 40, textAlign: 'center' }}>
//             No embedUrl provided for this video.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


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
//    INPUT NORMALIZATION + GROUPING + MERGE
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

// const SubGroupBlock = ({ name, items, theme, variantResolver, cardHeights }) => (
//   <div style={{ paddingLeft: 16, borderLeft: `3px solid ${theme.accent}`, marginTop: 24 }}>
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
//               key={i}
//               onClick={() => setActive(i)}
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
//         renderItem={(item) => (
//           <MiniCard item={item} theme={theme} variant={variantResolver(item)} cardHeights={cardHeights} />
//         )}
//       />
//     </div>
//   );
// };


// /* ================================================================
//    GROUP PANEL — now accepts categoryArticle + categoryVideos
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
//    QUICK NAV — reduced fonts
//    ================================================================ */

// const QuickNav = ({ categories, standaloneItems, dropdownLabel, theme, onJump }) => {
//   const [open, setOpen] = useState(false);

//   const items = [
//     ...categories.map((c) => ({ id: `cat-${slugify(c.category)}`, label: c.category })),
//     ...standaloneItems.map((it, idx) => ({ id: standaloneIdFor(it, idx), label: it.title })),
//   ];

//   if (!items.length) return null;
//   const totalToolsCount =
//     categories.reduce((s, c) => s + c.totalCount, 0) + standaloneItems.length;

//   return (
//     <nav style={{
//       maxWidth: 1200, margin: '0 auto 32px', padding: '14px 20px',
//       background: theme.bgSubtle, borderRadius: 12,
//       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
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
//               minWidth: 280, background: '#fff',
//               border: `1px solid ${theme.border}`, borderRadius: 10,
//               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
//               transition: 'all 0.2s ease', zIndex: 100,
//               maxHeight: 400, overflowY: 'auto',
//               opacity: open ? 1 : 0,
//               visibility: open ? 'visible' : 'hidden',
//               transform: open ? 'translateY(0)' : 'translateY(-8px)',
//             }}>
//               {items.map((it, i) => (
//                 <a key={i} href={`#${it.id}`}
//                   style={{
//                     display: 'block', padding: '11px 16px',
//                     textDecoration: 'none', color: theme.text,
//                     fontSize: '0.92rem', fontWeight: 500,
//                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
//                     borderBottom: `1px solid ${theme.bgSubtle}`,
//                     transition: 'all 0.15s ease',
//                   }}
//                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(it.id); }}
//                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '20px'; }}
//                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '16px'; }}>
//                   {it.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <span style={{ fontSize: '0.85rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
//         </div>
//         <span style={{
//           fontSize: '0.8rem', color: theme.text,
//           background: theme.chipBg, padding: '5px 13px',
//           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
//         }}>{totalToolsCount} tools</span>
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
//         {items.map((it, i) => (
//           <a key={i} href={`#${it.id}`}
//             style={{
//               padding: '7px 16px', border: 'none', borderRadius: 22,
//               textDecoration: 'none', color: '#fff',
//               fontSize: '0.85rem', fontWeight: 500,
//               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
//               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
//               background: theme.accent,
//             }}
//             onClick={(e) => { e.preventDefault(); onJump(it.id); }}
//             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
//             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
//             {generateShortTitle(it.label)}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };


// /* ================================================================
//    TOOLS HEADER — reduced fonts
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
//    SIDEBAR (unchanged)
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
//   article: legacyArticleString = null,   // OLD: passed inside ToolsHeader
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

//   // NEW v18 — page-level article + videos
//   pageArticle = null,                    // { eyebrow, title, content }
//   videos = null,                         // [{ id, title, duration, embedUrl, thumbnail }]
//   videoLayout = 'beside',                // 'above' | 'beside' | 'below' | 'strip'
//   videosHeading = 'Walkthroughs',
//   videosCtaLabel = 'Watch the walkthrough',
//   videosStripTitle = 'Watch a quick intro for any topic',

//   // NEW v18 — per-category
//   categoryArticles = null,               // { 'CategoryName': { eyebrow, title, content } }
//   categoryVideos = null,                 // { 'CategoryName': { videos: [...], layout: 'beside' } }
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

//   // Page-level A/V block
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

//         {/* NEW: page-level article + videos block */}
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
//                   anchorId={`cat-${slugify(catName)}`}
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
//                 getCellId={(item, idx) => standaloneIdFor(item, idx)}
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




/**
 * VisualToolsPage v19 — file 3 of 3 (VisualToolsPage.jsx)
 *
 * Main page composition:
 *   - input flatten/group/merge
 *   - SubGroupBlock, SubGroupTabs, GroupPanel
 *   - QuickNav (refactored: hierarchical dropdown + two-tier pills)
 *   - ToolsHeader (reduced fonts)
 *   - Sidebar
 *   - default export VisualToolsPage
 */

import React, { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { processContent } from '@/app/utils/contentProcessor';
import { getTheme } from './VisualToolsPageThemes';

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
   QUICK NAV — refactored
   - dropdown: hierarchical (categories → sub-categories → tools)
   - pills: tier1 (cat filled + sub-cat outlined), tier2 (every tool)
   ================================================================ */

const QuickNav = ({ categories, standaloneItems, dropdownLabel, theme, onJump }) => {
  const [open, setOpen] = useState(false);

  const tier1 = useMemo(() => {
    const out = [];
    for (const cat of categories) {
      out.push({ kind: 'cat', id: categoryId(cat.category), label: cat.category });
      for (const sg of cat.subGroups) {
        out.push({
          kind: 'sub',
          id: subGroupId(cat.category, sg.name),
          label: sg.name,
        });
      }
    }
    return out;
  }, [categories]);

  const tier2 = useMemo(() => {
    const out = [];
    for (const cat of categories) {
      for (const u of cat.ungrouped) out.push({ id: toolIdFor(u), label: u.title });
      for (const sg of cat.subGroups) {
        for (const it of sg.items) out.push({ id: toolIdFor(it), label: it.title });
      }
    }
    for (const it of standaloneItems) out.push({ id: toolIdFor(it), label: it.title });
    return out;
  }, [categories, standaloneItems]);

  const totalToolsCount = useMemo(
    () => categories.reduce((s, c) => s + c.totalCount, 0) + standaloneItems.length,
    [categories, standaloneItems]
  );
  const totalCatsCount = categories.length;

  if (tier1.length === 0 && tier2.length === 0) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    onJump(id);
  };

  return (
    <nav style={{
      maxWidth: 1200, margin: '0 auto 32px', padding: '14px 20px',
      background: theme.bgSubtle, borderRadius: 12,
      border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 13px', border: 'none', borderRadius: 6,
              background: open ? theme.accentHover : theme.accent,
              color: '#fff', fontSize: '0.88rem', fontWeight: 600,
              fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
              cursor: 'pointer', transition: 'background 0.2s ease',
            }}>
              {dropdownLabel}
              <svg width="11" height="11" viewBox="0 0 12 12" style={{ marginLeft: 4, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>

            <div style={{
              position: 'absolute', top: 'calc(100% + 6px)', left: 0,
              minWidth: 320, background: '#fff',
              border: `1px solid ${theme.border}`, borderRadius: 10,
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease', zIndex: 100,
              maxHeight: 460, overflowY: 'auto',
              opacity: open ? 1 : 0,
              visibility: open ? 'visible' : 'hidden',
              transform: open ? 'translateY(0)' : 'translateY(-8px)',
              textAlign: 'left',
            }}>
              {categories.map((cat, ci) => (
                <div key={`cat-${ci}`}>
                  <a
                    href={`#${categoryId(cat.category)}`}
                    onClick={(e) => handleClick(e, categoryId(cat.category))}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '10px 16px', textDecoration: 'none',
                      fontSize: '0.78rem', fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '1px',
                      color: theme.accent,
                      borderTop: ci > 0 ? `1px solid ${theme.bgSubtle}` : 'none',
                      background: '#fff', transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; }}
                  >
                    <span>{cat.category}</span>
                    <span style={{
                      background: hexToRgba(theme.accent, 0.12), color: theme.accent,
                      padding: '2px 8px', borderRadius: 999,
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: 0,
                    }}>{cat.totalCount}</span>
                  </a>

                  {cat.ungrouped.map((it, i) => (
                    <a
                      key={`u-${i}`}
                      href={`#${toolIdFor(it, i)}`}
                      onClick={(e) => handleClick(e, toolIdFor(it, i))}
                      style={{
                        display: 'block', padding: '7px 16px 7px 28px',
                        textDecoration: 'none', color: theme.text,
                        fontSize: '0.88rem', fontWeight: 500,
                        transition: 'background 0.15s, color 0.15s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; }}
                    >{it.title}</a>
                  ))}

                  {cat.subGroups.map((sg, si) => (
                    <div key={`sg-${si}`}>
                      <a
                        href={`#${subGroupId(cat.category, sg.name)}`}
                        onClick={(e) => handleClick(e, subGroupId(cat.category, sg.name))}
                        style={{
                          display: 'block', padding: '6px 16px 6px 28px',
                          textDecoration: 'none', color: theme.textMuted,
                          fontSize: '0.72rem', fontWeight: 600,
                          textTransform: 'uppercase', letterSpacing: '0.5px',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                      >{sg.name}</a>
                      {sg.items.map((it, i) => (
                        <a
                          key={`sg-${si}-i-${i}`}
                          href={`#${toolIdFor(it, i)}`}
                          onClick={(e) => handleClick(e, toolIdFor(it, i))}
                          style={{
                            display: 'block', padding: '7px 16px 7px 40px',
                            textDecoration: 'none', color: theme.text,
                            fontSize: '0.88rem', fontWeight: 500,
                            transition: 'background 0.15s, color 0.15s',
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; }}
                        >{it.title}</a>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              {standaloneItems.length > 0 && (
                <>
                  <div style={{
                    padding: '10px 16px',
                    borderTop: categories.length > 0 ? `1px solid ${theme.bgSubtle}` : 'none',
                    fontSize: '0.78rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '1px',
                    color: theme.textMuted,
                  }}>Other tools</div>
                  {standaloneItems.map((it, i) => (
                    <a
                      key={`st-${i}`}
                      href={`#${toolIdFor(it, i)}`}
                      onClick={(e) => handleClick(e, toolIdFor(it, i))}
                      style={{
                        display: 'block', padding: '7px 16px 7px 28px',
                        textDecoration: 'none', color: theme.text,
                        fontSize: '0.88rem', fontWeight: 500,
                        transition: 'background 0.15s, color 0.15s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; }}
                    >{it.title}</a>
                  ))}
                </>
              )}
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
        </div>
        <span style={{
          fontSize: '0.8rem', color: theme.text,
          background: theme.chipBg, padding: '5px 13px',
          borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
        }}>
          {totalToolsCount} tools{totalCatsCount > 0 && ` · ${totalCatsCount} categories`}
        </span>
      </div>

      {tier1.length > 0 && (
        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8,
          padding: '8px 0',
          borderBottom: tier2.length > 0 ? `1px dashed ${theme.border}` : 'none',
        }}>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '1px', color: theme.textMuted,
            width: 92, flexShrink: 0,
          }}>Categories</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1 }}>
            {tier1.map((it, i) => (
              <a
                key={i}
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                style={
                  it.kind === 'cat'
                    ? {
                        background: theme.accent, color: '#fff',
                        padding: '7px 16px', borderRadius: 22,
                        fontSize: '0.85rem', fontWeight: 600,
                        textDecoration: 'none', whiteSpace: 'nowrap',
                        transition: 'all 0.2s',
                      }
                    : {
                        background: 'transparent', color: theme.accent,
                        border: `1.5px solid ${theme.accent}`,
                        padding: '5px 13px', borderRadius: 22,
                        fontSize: '0.78rem', fontWeight: 600,
                        textDecoration: 'none', whiteSpace: 'nowrap',
                        transition: 'all 0.2s',
                      }
                }
                onMouseEnter={(e) => {
                  if (it.kind === 'cat') {
                    e.currentTarget.style.background = theme.accentHover;
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  } else {
                    e.currentTarget.style.background = hexToRgba(theme.accent, 0.08);
                  }
                }}
                onMouseLeave={(e) => {
                  if (it.kind === 'cat') {
                    e.currentTarget.style.background = theme.accent;
                    e.currentTarget.style.transform = 'translateY(0)';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >{it.label}</a>
            ))}
          </div>
        </div>
      )}

      {tier2.length > 0 && (
        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8,
          padding: '8px 0',
        }}>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '1px', color: theme.textMuted,
            width: 92, flexShrink: 0,
          }}>Tools</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1 }}>
            {tier2.map((it, i) => (
              <a
                key={i}
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                style={{
                  background: hexToRgba(theme.accent, 0.1),
                  color: theme.accent,
                  padding: '6px 14px', borderRadius: 22,
                  fontSize: '0.8rem', fontWeight: 500,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  border: '1px solid transparent',
                  transition: 'all 0.2s',
                  fontFamily: FONT_FAMILY,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.accent;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = hexToRgba(theme.accent, 0.1);
                  e.currentTarget.style.color = theme.accent;
                }}
              >{generateShortTitle(it.label)}</a>
            ))}
          </div>
        </div>
      )}
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


// // seoData: {
// //   // existing
// //   title, description, name, url, image, imageAlt,

// //   // new
// //   hubDescription: '...',     // long-form prose for hub cards (preferred over description)
// //   category: 'Functions',     // groups the tool into a category panel
// //   subCategory: 'Graphs',     // optional, sub-groups inside the category
// //   cardVariant: 'v1',         // optional, 'v1'|'v2'|'v3'|'v4'|'b1'|'b2'|'b3'
// //   icon: '∿',                 // optional, emoji/short string for V3/B3 cards
// //   formula: 'sin^2θ + cos^2θ = 1',  // optional, required for V4
// // }