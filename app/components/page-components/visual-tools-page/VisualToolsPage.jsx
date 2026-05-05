
// // // /**
// // //  * VisualToolsPage — v7
// // //  *
// // //  * Wraps groups+standalone in a single div with margin-top: -30px.
// // //  * Removes top spacer entirely.
// // //  */

// // // import React, { useMemo, useState } from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';

// // // const hexToRgba = (hex, alpha) => {
// // //   const h = hex.replace('#', '');
// // //   const r = parseInt(h.substring(0, 2), 16);
// // //   const g = parseInt(h.substring(2, 4), 16);
// // //   const b = parseInt(h.substring(4, 6), 16);
// // //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // // };

// // // const generateShortTitle = (title) =>
// // //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // // const isValidImagePath = (val) => {
// // //   if (typeof val !== 'string') return false;
// // //   const v = val.trim();
// // //   if (!v) return false;
// // //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // // };

// // // const isValidSvg = (val) =>
// // //   typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');

// // // const constrainSvg = (svg) =>
// // //   svg.replace(
// // //     /<svg\b([^>]*)>/i,
// // //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// // //   );

// // // const wrapFormula = (f) => {
// // //   if (!f) return '';
// // //   const t = String(f).trim();
// // //   if (!t) return '';
// // //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// // //   return `$${t}$`;
// // // };


// // // const QuickNav = ({ items, dropdownLabel, accentColor, accentColorHover, onJump }) => {
// // //   const [open, setOpen] = useState(false);
// // //   if (!items.length) return null;

// // //   return (
// // //     <nav style={qStyles.wrapper}>
// // //       <div style={qStyles.header}>
// // //         <div style={qStyles.headerLeft}>
// // //           <div
// // //             style={{ position: 'relative' }}
// // //             onMouseEnter={() => setOpen(true)}
// // //             onMouseLeave={() => setOpen(false)}
// // //           >
// // //             <button style={{ ...qStyles.dropdownBtn, background: open ? accentColorHover : accentColor }}>
// // //               {dropdownLabel}
// // //               <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
// // //                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
// // //               </svg>
// // //             </button>
// // //             <div style={{
// // //               ...qStyles.dropdownMenu,
// // //               opacity: open ? 1 : 0,
// // //               visibility: open ? 'visible' : 'hidden',
// // //               transform: open ? 'translateY(0)' : 'translateY(-8px)',
// // //             }}>
// // //               {items.map((it, i) => (
// // //                 <a key={i} href={`#group-${i}`} style={qStyles.dropdownItem}
// // //                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(i); }}
// // //                   onMouseEnter={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = accentColor; e.currentTarget.style.paddingLeft = '22px'; }}
// // //                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.paddingLeft = '18px'; }}>
// // //                   {it.title}
// // //                 </a>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <span style={qStyles.label}>or quick jump:</span>
// // //         </div>
// // //         <span style={qStyles.count}>{items.length} tools</span>
// // //       </div>
// // //       <div style={qStyles.pills}>
// // //         {items.map((it, i) => (
// // //           <a key={i} href={`#group-${i}`}
// // //             style={{ ...qStyles.pill, background: accentColor }}
// // //             onClick={(e) => { e.preventDefault(); onJump(i); }}
// // //             onMouseEnter={(e) => { e.currentTarget.style.background = accentColorHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(accentColor, 0.35)}`; }}
// // //             onMouseLeave={(e) => { e.currentTarget.style.background = accentColor; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
// // //             {generateShortTitle(it.title)}
// // //           </a>
// // //         ))}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // const qStyles = {
// // //   wrapper: { maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px', background: '#f8fafc', borderRadius: 12, border: '2px solid #94a3b8', fontFamily: FONT_FAMILY },
// // //   header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 },
// // //   headerLeft: { display: 'flex', alignItems: 'center', gap: 14 },
// // //   dropdownBtn: { display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', border: 'none', borderRadius: 8, color: 'white', fontSize: '1rem', fontWeight: 600, fontFamily: FONT_FAMILY, letterSpacing: '0.01em', cursor: 'pointer', transition: 'background 0.2s ease' },
// // //   dropdownMenu: { position: 'absolute', top: 'calc(100% + 6px)', left: 0, minWidth: 320, background: 'white', border: '1px solid #cbd5e1', borderRadius: 10, boxShadow: '0 10px 40px rgba(0,0,0,0.15)', transition: 'all 0.2s ease', zIndex: 100, maxHeight: 400, overflowY: 'auto' },
// // //   dropdownItem: { display: 'block', padding: '13px 18px', textDecoration: 'none', color: '#334155', fontSize: '1.05rem', fontWeight: 500, fontFamily: FONT_FAMILY, letterSpacing: '0.005em', borderBottom: '1px solid #f1f5f9', transition: 'all 0.15s ease' },
// // //   label: { fontSize: '1.05rem', color: '#475569', fontWeight: 500, fontFamily: FONT_FAMILY, letterSpacing: '0.005em' },
// // //   count: { fontSize: '1rem', color: '#334155', background: '#e2e8f0', padding: '6px 16px', borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY, letterSpacing: '0.01em' },
// // //   pills: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 },
// // //   pill: { padding: '10px 20px', border: 'none', borderRadius: 22, textDecoration: 'none', color: 'white', fontSize: '1.05rem', fontWeight: 500, fontFamily: FONT_FAMILY, letterSpacing: '0.01em', transition: 'all 0.2s ease', whiteSpace: 'nowrap' },
// // // };


// // // const ToolsHeader = ({ items, intro, icon, article, accentColor, accentColorSecondary }) => {
// // //   const stats = useMemo(() => {
// // //     const toolsCount = items.length;
// // //     const cats = new Set(items.map((i) => i.category).filter(Boolean));
// // //     return { toolsCount, categoriesCount: cats.size };
// // //   }, [items]);

// // //   if (!items.length) return null;

// // //   return (
// // //     <div style={hStyles.container}>
// // //       <div style={{ ...hStyles.introWrapper, borderRadius: article ? '16px 16px 0 0' : 16, borderBottom: article ? 'none' : '2px solid #cbd5e1' }}>
// // //         {intro && (
// // //           <div style={hStyles.header}>
// // //             <div style={{ ...hStyles.iconBox, background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColorSecondary} 100%)` }}>{icon}</div>
// // //             <div style={{ flex: 1 }}>
// // //               {intro.title && <h2 style={hStyles.title}>{intro.title}</h2>}
// // //               {intro.description && <p style={hStyles.description}>{intro.description}</p>}
// // //             </div>
// // //           </div>
// // //         )}
// // //         {intro?.tip && (
// // //           <div style={{ ...hStyles.tipBox, borderLeft: `4px solid ${accentColor}` }}>
// // //             <span style={hStyles.tipIcon}>💡</span>
// // //             <span style={hStyles.tipText}><strong>Tip:</strong> {intro.tip}</span>
// // //           </div>
// // //         )}
// // //         <div style={hStyles.bottom}>
// // //           <div style={hStyles.stats}>
// // //             <div style={hStyles.statItem}>
// // //               <span style={{ ...hStyles.statValue, color: accentColor }}>{stats.toolsCount}</span>
// // //               <span style={{ color: '#64748b' }}>Tools</span>
// // //             </div>
// // //             {stats.categoriesCount > 0 && (
// // //               <div style={hStyles.statItem}>
// // //                 <span style={{ ...hStyles.statValue, color: accentColor }}>{stats.categoriesCount}</span>
// // //                 <span style={{ color: '#64748b' }}>Categories</span>
// // //               </div>
// // //             )}
// // //             <div style={hStyles.statItem}>
// // //               <span style={{ ...hStyles.statValue, color: accentColor }}>100%</span>
// // //               <span style={{ color: '#64748b' }}>Free</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {article && (
// // //         <div style={hStyles.articleWrapper}>
// // //           <div style={hStyles.articleInner}>
// // //             <div style={hStyles.articleContent}>
// // //               {processContent(article)}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const hStyles = {
// // //   container: { maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY },
// // //   introWrapper: { background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', border: '2px solid #cbd5e1', padding: '34px 38px' },
// // //   header: { display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 },
// // //   iconBox: { width: 64, height: 64, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.85rem', flexShrink: 0 },
// // //   title: { fontSize: '1.65rem', fontWeight: 600, color: '#1e293b', fontFamily: FONT_FAMILY, letterSpacing: '-0.015em', margin: '0 0 10px 0', lineHeight: 1.3 },
// // //   description: { fontSize: '1.2rem', color: '#64748b', fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em', lineHeight: 1.55, margin: 0 },
// // //   tipBox: { background: 'white', border: '1px solid #e2e8f0', borderRadius: 8, padding: '17px 22px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14, fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em', color: '#475569' },
// // //   tipIcon: { fontSize: '1.5rem', flexShrink: 0 },
// // //   tipText: { lineHeight: 1.5 },
// // //   bottom: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 },
// // //   stats: { display: 'flex', gap: 28 },
// // //   statItem: { display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em', color: '#64748b' },
// // //   statValue: { fontWeight: 700, fontSize: '1.45rem', fontFamily: FONT_FAMILY, letterSpacing: '-0.01em' },
// // //   articleWrapper: { background: '#e2e8f0', borderLeft: '2px solid #cbd5e1', borderRight: '2px solid #cbd5e1', borderBottom: '2px solid #cbd5e1', borderRadius: '0 0 16px 16px', padding: 24 },
// // //   articleInner: { background: '#f8fafc', border: '2px solid #94a3b8', borderRadius: 12, padding: '28px 32px' },
// // //   articleContent: { fontSize: '1.08rem', fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500, color: '#1e293b', lineHeight: 1.85, letterSpacing: '0.01em' },
// // // };


// // // const BigCard = ({ item, cardBg, cardText }) => {
// // //   const [imgFailed, setImgFailed] = useState(false);
// // //   const hasImage = isValidImagePath(item.image) && !imgFailed;
// // //   const hasSvg = !hasImage && isValidSvg(item.svg);
// // //   const hasVisual = hasImage || hasSvg;

// // //   return (
// // //     <div className="vtp-card" style={{ backgroundColor: cardBg, color: cardText }}>
// // //       {hasImage && (
// // //         <div className="vtp-image-container">
// // //           <Image src={item.image} alt={item.imageAlt || item.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// // //         </div>
// // //       )}
// // //       {hasSvg && (
// // //         <div className="vtp-image-container vtp-svg-host">
// // //           <div
// // //             className="vtp-svg-inner"
// // //             dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }}
// // //           />
// // //         </div>
// // //       )}
// // //       <div className={`vtp-content ${hasVisual ? 'vtp-content-with-image' : 'vtp-content-full'}`}>
// // //         <div>
// // //           <div className="vtp-title-row">
// // //             <h3 className="vtp-title" style={{ color: cardText }}>{item.title}</h3>
// // //           </div>
// // //           <p className="vtp-description" style={{ color: cardText, opacity: 0.9 }}>{item.description}</p>
// // //         </div>
// // //         <div className="vtp-footer">
// // //           <Link href={item.href || '#'} className="vtp-view-button">View Details</Link>
// // //           <button className="vtp-menu-button" aria-label="More">
// // //             <span className="vtp-menu-dot" style={{ background: cardText }} />
// // //             <span className="vtp-menu-dot" style={{ background: cardText }} />
// // //             <span className="vtp-menu-dot" style={{ background: cardText }} />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };


// // // const ViewMiniCard = ({ view, cardBg, cardText }) => {
// // //   const [imgFailed, setImgFailed] = useState(false);
// // //   const hasImage = isValidImagePath(view.image) && !imgFailed;
// // //   const hasSvg = !hasImage && isValidSvg(view.svg);
// // //   const hasVisual = hasImage || hasSvg;

// // //   return (
// // //     <Link href={view.href || '#'} className="vtp-mini" style={{ backgroundColor: cardBg, color: cardText }}>
// // //       {hasImage && (
// // //         <div className="vtp-mini-visual">
// // //           <Image src={view.image} alt={view.imageAlt || view.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// // //         </div>
// // //       )}
// // //       {hasSvg && (
// // //         <div className="vtp-mini-visual vtp-svg-host">
// // //           <div
// // //             className="vtp-svg-inner"
// // //             dangerouslySetInnerHTML={{ __html: constrainSvg(view.svg) }}
// // //           />
// // //         </div>
// // //       )}
// // //       <div className={`vtp-mini-content ${hasVisual ? 'vtp-mini-content-with-visual' : 'vtp-mini-content-full'}`}>
// // //         <div className="vtp-mini-title" style={{ color: cardText }}>{view.title}</div>
// // //         {view.formula && (
// // //           <div className="vtp-mini-formula" style={{ color: cardText, opacity: 0.95 }}>
// // //             {processContent(wrapFormula(view.formula))}
// // //           </div>
// // //         )}
// // //         {!view.formula && view.shortDescription && (
// // //           <div className="vtp-mini-desc" style={{ color: cardText, opacity: 0.9 }}>
// // //             {processContent(view.shortDescription)}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </Link>
// // //   );
// // // };


// // // const GroupHeader = ({ item, accentColor }) => (
// // //   <div className="vtp-group-header" style={{ borderLeftColor: accentColor }}>
// // //     <div className="vtp-group-title-row">
// // //       <h2 className="vtp-group-title">{item.title}</h2>
// // //       <Link href={item.href || '#'} className="vtp-group-link" style={{ color: accentColor, borderColor: accentColor }}>
// // //         View All →
// // //       </Link>
// // //     </div>
// // //     {item.shortDescription && (
// // //       <p className="vtp-group-description">{item.shortDescription}</p>
// // //     )}
// // //   </div>
// // // );


// // // const PAGE_CSS = `
// // // .vtp-body {
// // //   margin-top: -30px;
// // //   position: relative;
// // // }
// // // .vtp-section {
// // //   width: 90%;
// // //   max-width: 1200px;
// // //   margin: 0 auto 3rem;
// // //   padding: 0 1rem;
// // // }

// // // .vtp-group-header {
// // //   border-left: 4px solid #2c5d99;
// // //   padding: 6px 0 8px 16px;
// // //   margin-bottom: 1.25rem;
// // // }
// // // .vtp-group-title-row {
// // //   display: flex;
// // //   align-items: baseline;
// // //   justify-content: space-between;
// // //   gap: 1rem;
// // //   flex-wrap: wrap;
// // // }
// // // .vtp-group-title {
// // //   font-size: 1.5rem;
// // //   font-weight: 600;
// // //   color: #1e293b;
// // //   margin: 0;
// // //   font-family: ${FONT_FAMILY};
// // //   letter-spacing: -0.01em;
// // // }
// // // .vtp-group-link {
// // //   font-size: 0.9rem;
// // //   font-weight: 500;
// // //   text-decoration: none;
// // //   padding: 4px 12px;
// // //   border: 1px solid;
// // //   border-radius: 999px;
// // //   font-family: ${FONT_FAMILY};
// // //   transition: all 0.2s ease;
// // //   white-space: nowrap;
// // // }
// // // .vtp-group-link:hover { background: #f1f5f9; }
// // // .vtp-group-description {
// // //   font-size: 1rem;
// // //   color: #64748b;
// // //   margin: 6px 0 0;
// // //   font-family: ${FONT_FAMILY};
// // //   line-height: 1.5;
// // // }

// // // .vtp-mini-grid {
// // //   display: grid;
// // //   grid-template-columns: repeat(3, minmax(0, 1fr));
// // //   gap: 1rem;
// // // }
// // // @media (max-width: 768px) {
// // //   .vtp-mini-grid { grid-template-columns: 1fr; }
// // // }

// // // .vtp-mini {
// // //   display: flex;
// // //   flex-direction: column;
// // //   border-radius: 0.5rem;
// // //   overflow: hidden;
// // //   text-decoration: none;
// // //   min-height: 140px;
// // //   transition: transform 0.2s ease, box-shadow 0.2s ease;
// // // }
// // // .vtp-mini:hover {
// // //   transform: translateY(-2px);
// // //   box-shadow: 0 8px 16px -4px rgba(0,0,0,0.15);
// // // }
// // // .vtp-mini-visual {
// // //   width: 100%;
// // //   height: 110px;
// // //   position: relative;
// // //   flex-shrink: 0;
// // //   overflow: hidden;
// // // }
// // // .vtp-mini-content {
// // //   padding: 12px 14px;
// // //   flex: 1;
// // //   display: flex;
// // //   flex-direction: column;
// // //   justify-content: center;
// // // }
// // // .vtp-mini-content-full { min-height: 100%; }
// // // .vtp-mini-title {
// // //   font-size: 0.95rem;
// // //   font-weight: 600;
// // //   font-family: ${FONT_FAMILY};
// // //   margin: 0 0 4px;
// // //   line-height: 1.3;
// // // }
// // // .vtp-mini-formula {
// // //   font-size: 0.9rem;
// // //   margin: 0;
// // // }
// // // .vtp-mini-formula .katex { color: inherit; }
// // // .vtp-mini-desc {
// // //   font-size: 0.8rem;
// // //   font-family: ${FONT_FAMILY};
// // //   margin: 0;
// // //   line-height: 1.4;
// // // }

// // // .vtp-svg-host {
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   background: rgba(255,255,255,0.06);
// // //   overflow: hidden;
// // // }
// // // .vtp-svg-inner {
// // //   width: 80%;
// // //   height: 80%;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   overflow: hidden;
// // // }
// // // .vtp-svg-inner > svg {
// // //   max-width: 100%;
// // //   max-height: 100%;
// // //   width: auto;
// // //   height: auto;
// // //   display: block;
// // // }

// // // .vtp-grid {
// // //   display: grid;
// // //   gap: 2rem;
// // //   grid-template-columns: repeat(2, minmax(0, 1fr));
// // // }
// // // .vtp-grid > :last-child:nth-child(2n-1) {
// // //   grid-column: 1 / -1;
// // //   margin: 0 auto;
// // //   max-width: calc(50% - 1rem);
// // //   width: 100%;
// // // }
// // // .vtp-card {
// // //   border-radius: 0.5rem;
// // //   overflow: hidden;
// // //   display: flex;
// // //   min-height: 200px;
// // //   transition: box-shadow 0.3s ease;
// // // }
// // // .vtp-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
// // // .vtp-image-container {
// // //   width: 50%;
// // //   position: relative;
// // //   border: solid 1px lightgray;
// // //   flex-shrink: 0;
// // //   overflow: hidden;
// // // }
// // // .vtp-content {
// // //   padding: 1.5rem;
// // //   display: flex;
// // //   flex-direction: column;
// // //   justify-content: space-between;
// // // }
// // // .vtp-content-full { width: 100%; }
// // // .vtp-content-with-image { width: 50%; }
// // // .vtp-title-row {
// // //   display: flex;
// // //   align-items: center;
// // //   gap: 0.75rem;
// // //   margin-bottom: 0.5rem;
// // // }
// // // .vtp-title {
// // //   font-size: 1.25rem;
// // //   font-weight: 600;
// // //   line-height: 1.3;
// // //   font-family: ${FONT_FAMILY};
// // //   margin: 0;
// // // }
// // // .vtp-description {
// // //   font-size: 0.9rem;
// // //   line-height: 1.5;
// // //   font-family: ${FONT_FAMILY};
// // //   margin: 0.5rem 0 0;
// // // }
// // // .vtp-footer {
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // //   margin-top: 1rem;
// // // }
// // // .vtp-view-button {
// // //   color: #f8fafc;
// // //   font-weight: 500;
// // //   font-size: 0.875rem;
// // //   padding: 0.5rem 1rem;
// // //   border: 1px solid #f8fafc;
// // //   border-radius: 9999px;
// // //   background: transparent;
// // //   cursor: pointer;
// // //   transition: all 0.2s ease;
// // //   text-decoration: none;
// // //   font-family: ${FONT_FAMILY};
// // // }
// // // .vtp-view-button:hover { background: #f8fafc; color: #4F46E5; }
// // // .vtp-menu-button {
// // //   padding: 0.5rem;
// // //   background: none;
// // //   border: none;
// // //   cursor: pointer;
// // //   display: flex;
// // //   flex-direction: column;
// // //   gap: 0.25rem;
// // //   opacity: 0.5;
// // //   transition: opacity 0.2s ease;
// // // }
// // // .vtp-menu-button:hover { opacity: 1; }
// // // .vtp-menu-dot { width: 4px; height: 4px; border-radius: 50%; }

// // // @media (max-width: 768px) {
// // //   .vtp-grid { grid-template-columns: 1fr; }
// // //   .vtp-grid > :last-child:nth-child(2n-1) { grid-column: 1; max-width: 100%; }
// // //   .vtp-image-container { width: 100%; height: 180px; }
// // //   .vtp-content-with-image { width: 100%; }
// // //   .vtp-card { flex-direction: column; }
// // // }
// // // `;


// // // const VisualToolsPage = ({
// // //   tools,
// // //   pageTitle = 'Visual Tools',
// // //   intro = null,
// // //   article = null,
// // //   icon = '🔍',
// // //   accentColor = '#2c5d99',
// // //   accentColorSecondary = '#3a72b8',
// // //   accentColorHover = '#1e4170',
// // //   dropdownLabel = 'All Tools',
// // //   cardBackgroundColor = null,
// // //   cardTextColor = '#ffffff',
// // //   bodyOffsetTop = 60,
// // // }) => {
// // //   const cardBg = cardBackgroundColor || accentColor;

// // //   const list = Array.isArray(tools)
// // //     ? tools
// // //     : (tools && Array.isArray(tools.children) ? tools.children : []);

// // //   // const handleJump = (i) => {
// // //   //   const el = document.getElementById(`group-${i}`);
// // //   //   if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // //   // };


// // //   const handleJump = (i) => {
// // //   const el = document.getElementById(`group-${i}`);
// // //   if (!el) return;
// // //   const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
// // //   window.scrollTo({ top: y, behavior: 'smooth' });
// // // };

// // //   const groupsWithViews = list.filter((t) => t.hasViews && Array.isArray(t.views) && t.views.length > 0);
// // //   const standalone = list.filter((t) => !t.hasViews || !Array.isArray(t.views) || t.views.length === 0);

// // //   return (
// // //     <>
// // //       <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

// // //       <h1 style={{
// // //         fontFamily: "'Source Serif 4', Georgia, serif",
// // //         fontSize: '2.4rem',
// // //         fontWeight: 700,
// // //         color: '#143a66',
// // //         textAlign: 'center',
// // //         margin: '0 0 24px',
// // //       }}>
// // //         {pageTitle}
// // //       </h1>

// // //       <QuickNav
// // //         items={list}
// // //         dropdownLabel={dropdownLabel}
// // //         accentColor={accentColor}
// // //         accentColorHover={accentColorHover}
// // //         onJump={handleJump}
// // //       />

// // //       <ToolsHeader
// // //         items={list}
// // //         intro={intro}
// // //         icon={icon}
// // //         article={article}
// // //         accentColor={accentColor}
// // //         accentColorSecondary={accentColorSecondary}
// // //       />

// // //       <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
// // //         {groupsWithViews.map((group, gi) => {
// // //           const indexInList = list.indexOf(group);
// // //           return (
// // //             <section key={`g-${gi}`} id={`group-${indexInList}`} className="vtp-section">
// // //               <GroupHeader item={group} accentColor={accentColor} />
// // //               <div className="vtp-mini-grid">
// // //                 {group.views.map((view, vi) => (
// // //                   <ViewMiniCard key={vi} view={view} cardBg={cardBg} cardText={cardTextColor} />
// // //                 ))}
// // //               </div>
// // //             </section>
// // //           );
// // //         })}

// // //         {standalone.length > 0 && (
// // //           <section className="vtp-section">
// // //             <div className="vtp-grid">
// // //               {standalone.map((tool, si) => {
// // //                 const indexInList = list.indexOf(tool);
// // //                 return (
// // //                   <div key={`s-${si}`} id={`group-${indexInList}`}>
// // //                     <BigCard item={tool} cardBg={cardBg} cardText={cardTextColor} />
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </section>
// // //         )}
// // //       </div>

// // //       <div style={{ height: 60 }} />
// // //     </>
// // //   );
// // // };

// // // export default VisualToolsPage;



// // /**
// //  * VisualToolsPage — v10
// //  *
// //  * Single source of truth for color: `theme` prop.
// //  *   theme="deepBlue" | "slate" | "emerald" | ...   (preset name)
// //  *   theme={{ accent: '#...', ... }}                 (custom object)
// //  *   themeOverrides={{ accent: '#...' }}             (override individual fields)
// //  */

// // import React, { useMemo, useState, useEffect, useRef } from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import { getTheme } from './visualToolsPageThemes';

// // const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';

// // const NAVBAR_HEIGHT = 55;
// // const SIDEBAR_COLLAPSED = 68;
// // const SIDEBAR_EXPANDED = 290;

// // const hexToRgba = (hex, alpha) => {
// //   const h = hex.replace('#', '');
// //   const r = parseInt(h.substring(0, 2), 16);
// //   const g = parseInt(h.substring(2, 4), 16);
// //   const b = parseInt(h.substring(4, 6), 16);
// //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // };

// // const generateShortTitle = (title) =>
// //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // const isValidImagePath = (val) => {
// //   if (typeof val !== 'string') return false;
// //   const v = val.trim();
// //   if (!v) return false;
// //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // };

// // const isValidSvg = (val) =>
// //   typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');

// // const constrainSvg = (svg) =>
// //   svg.replace(
// //     /<svg\b([^>]*)>/i,
// //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// //   );

// // const wrapFormula = (f) => {
// //   if (!f) return '';
// //   const t = String(f).trim();
// //   if (!t) return '';
// //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// //   return `$${t}$`;
// // };


// // /* ================================================================
// //    ICON
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


// // /* ================================================================
// //    SIDEBAR
// //    ================================================================ */

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
// //         position: 'fixed',
// //         left: 0,
// //         top: NAVBAR_HEIGHT,
// //         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
// //         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
// //         background: theme.sidebarBg,
// //         zIndex: 90,
// //         display: 'flex',
// //         flexDirection: 'column',
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
// //           color: theme.sidebarTextMuted,
// //           flexShrink: 0,
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
// //           padding: '8px 0',
// //           flex: 1,
// //           overflowY: 'auto',
// //           overflowX: 'hidden',
// //           scrollbarWidth: 'none',
// //           msOverflowStyle: 'none',
// //         }}
// //       >
// //         {groups.map((group, gi) => (
// //           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
// //         ))}
// //       </nav>
// //     </aside>
// //   );
// // };

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
// //         display: 'block',
// //         width: 8, height: 8,
// //         borderRadius: '50%',
// //         background: h ? theme.sidebarText : theme.sidebarTextMuted,
// //         transition: 'all 0.2s',
// //         transform: h ? 'scale(1.5)' : 'scale(1)',
// //       }} />
// //       <span style={{
// //         position: 'absolute',
// //         left: 22, top: '50%',
// //         transform: 'translateY(-50%)',
// //         background: theme.text, color: '#fff',
// //         fontSize: 13, padding: '4px 10px',
// //         borderRadius: 4, whiteSpace: 'nowrap',
// //         opacity: h ? 1 : 0, pointerEvents: 'none',
// //         transition: 'opacity 0.15s', zIndex: 10,
// //       }}>{label}</span>
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

// // const SidebarLink = ({ link, theme }) => {
// //   const [h, setH] = useState(false);
// //   return (
// //     <Link
// //       href={link.href || '#'}
// //       style={{
// //         display: 'flex',
// //         alignItems: 'center',
// //         gap: 10,
// //         padding: '9px 20px',
// //         fontSize: 14,
// //         fontWeight: 500,
// //         color: h ? theme.sidebarText : theme.sidebarTextMuted,
// //         textDecoration: 'none',
// //         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
// //         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
// //         paddingLeft: h ? 17 : 20,
// //         transition: 'all 0.15s',
// //         lineHeight: 1.4,
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


// // /* ================================================================
// //    QUICK NAV
// //    ================================================================ */

// // const QuickNav = ({ items, dropdownLabel, theme, onJump }) => {
// //   const [open, setOpen] = useState(false);
// //   if (!items.length) return null;

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
// //                 <a key={i} href={`#group-${i}`}
// //                   style={{
// //                     display: 'block', padding: '13px 18px',
// //                     textDecoration: 'none', color: theme.text,
// //                     fontSize: '1.05rem', fontWeight: 500,
// //                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
// //                     borderBottom: `1px solid ${theme.bgSubtle}`,
// //                     transition: 'all 0.15s ease',
// //                   }}
// //                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(i); }}
// //                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
// //                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
// //                   {it.title}
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
// //         }}>{items.length} tools</span>
// //       </div>
// //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
// //         {items.map((it, i) => (
// //           <a key={i} href={`#group-${i}`}
// //             style={{
// //               padding: '10px 20px', border: 'none', borderRadius: 22,
// //               textDecoration: 'none', color: '#fff',
// //               fontSize: '1.05rem', fontWeight: 500,
// //               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
// //               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
// //               background: theme.accent,
// //             }}
// //             onClick={(e) => { e.preventDefault(); onJump(i); }}
// //             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
// //             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
// //             {generateShortTitle(it.title)}
// //           </a>
// //         ))}
// //       </div>
// //     </nav>
// //   );
// // };


// // /* ================================================================
// //    TOOLS PAGE HEADER
// //    ================================================================ */

// // const ToolsHeader = ({ items, intro, icon, article, theme }) => {
// //   const stats = useMemo(() => {
// //     const toolsCount = items.length;
// //     const cats = new Set(items.map((i) => i.category).filter(Boolean));
// //     return { toolsCount, categoriesCount: cats.size };
// //   }, [items]);

// //   if (!items.length) return null;

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
// //         {intro?.tip && (
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
// //               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.toolsCount}</span>
// //               <span>Tools</span>
// //             </div>
// //             {stats.categoriesCount > 0 && (
// //               <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
// //                 <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.categoriesCount}</span>
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
// //    BIG CARD
// //    ================================================================ */

// // const BigCard = ({ item, theme }) => {
// //   const [imgFailed, setImgFailed] = useState(false);
// //   const hasImage = isValidImagePath(item.image) && !imgFailed;
// //   const hasSvg = !hasImage && isValidSvg(item.svg);
// //   const hasVisual = hasImage || hasSvg;

// //   return (
// //     <div className="vtp-card" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
// //       {hasImage && (
// //         <div className="vtp-image-container">
// //           <Image src={item.image} alt={item.imageAlt || item.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// //         </div>
// //       )}
// //       {hasSvg && (
// //         <div className="vtp-image-container vtp-svg-host">
// //           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
// //         </div>
// //       )}
// //       <div className={`vtp-content ${hasVisual ? 'vtp-content-with-image' : 'vtp-content-full'}`}>
// //         <div>
// //           <div className="vtp-title-row">
// //             <h3 className="vtp-title" style={{ color: theme.cardText }}>{item.title}</h3>
// //           </div>
// //           <p className="vtp-description" style={{ color: theme.cardText, opacity: 0.9 }}>{item.description}</p>
// //         </div>
// //         <div className="vtp-footer">
// //           <Link
// //             href={item.href || '#'}
// //             className="vtp-view-button"
// //             style={{ color: theme.cardText, borderColor: theme.cardText }}
// //           >View Details</Link>
// //           <button className="vtp-menu-button" aria-label="More">
// //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// //             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    VIEW MINI-CARD
// //    ================================================================ */

// // const ViewMiniCard = ({ view, theme }) => {
// //   const [imgFailed, setImgFailed] = useState(false);
// //   const hasImage = isValidImagePath(view.image) && !imgFailed;
// //   const hasSvg = !hasImage && isValidSvg(view.svg);
// //   const hasVisual = hasImage || hasSvg;

// //   return (
// //     <Link href={view.href || '#'} className="vtp-mini" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
// //       {hasImage && (
// //         <div className="vtp-mini-visual">
// //           <Image src={view.image} alt={view.imageAlt || view.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
// //         </div>
// //       )}
// //       {hasSvg && (
// //         <div className="vtp-mini-visual vtp-svg-host">
// //           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(view.svg) }} />
// //         </div>
// //       )}
// //       <div className={`vtp-mini-content ${hasVisual ? 'vtp-mini-content-with-visual' : 'vtp-mini-content-full'}`}>
// //         <div className="vtp-mini-title" style={{ color: theme.cardText }}>{view.title}</div>
// //         {view.formula && (
// //           <div className="vtp-mini-formula" style={{ color: theme.cardText, opacity: 0.95 }}>
// //             {processContent(wrapFormula(view.formula))}
// //           </div>
// //         )}
// //         {!view.formula && view.shortDescription && (
// //           <div className="vtp-mini-desc" style={{ color: theme.cardText, opacity: 0.9 }}>
// //             {processContent(view.shortDescription)}
// //           </div>
// //         )}
// //       </div>
// //     </Link>
// //   );
// // };


// // /* ================================================================
// //    GROUP HEADER
// //    ================================================================ */

// // const GroupHeader = ({ item, theme }) => (
// //   <div className="vtp-group-header" style={{ borderLeftColor: theme.accent }}>
// //     <div className="vtp-group-title-row">
// //       <h2 className="vtp-group-title" style={{ color: theme.text }}>{item.title}</h2>
// //       <Link
// //         href={item.href || '#'}
// //         className="vtp-group-link"
// //         style={{ color: theme.accent, borderColor: theme.accent }}
// //       >View All →</Link>
// //     </div>
// //     {item.shortDescription && (
// //       <p className="vtp-group-description" style={{ color: theme.textSecondary }}>{item.shortDescription}</p>
// //     )}
// //   </div>
// // );


// // /* ================================================================
// //    STYLES
// //    ================================================================ */

// // const PAGE_CSS = `
// // .vtp-section {
// //   width: 90%; max-width: 1200px;
// //   margin: 0 auto 3rem; padding: 0 1rem;
// // }
// // .vtp-group-header {
// //   border-left: 4px solid; padding: 6px 0 8px 16px;
// //   margin-bottom: 1.25rem;
// // }
// // .vtp-group-title-row {
// //   display: flex; align-items: baseline;
// //   justify-content: space-between; gap: 1rem; flex-wrap: wrap;
// // }
// // .vtp-group-title {
// //   font-size: 1.5rem; font-weight: 600; margin: 0;
// //   font-family: ${FONT_FAMILY}; letter-spacing: -0.01em;
// // }
// // .vtp-group-link {
// //   font-size: 0.9rem; font-weight: 500; text-decoration: none;
// //   padding: 4px 12px; border: 1px solid; border-radius: 999px;
// //   font-family: ${FONT_FAMILY}; transition: all 0.2s ease; white-space: nowrap;
// // }
// // .vtp-group-link:hover { background: rgba(0,0,0,0.04); }
// // .vtp-group-description {
// //   font-size: 1rem; margin: 6px 0 0;
// //   font-family: ${FONT_FAMILY}; line-height: 1.5;
// // }
// // .vtp-mini-grid {
// //   display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem;
// // }
// // @media (max-width: 768px) { .vtp-mini-grid { grid-template-columns: 1fr; } }
// // .vtp-mini {
// //   display: flex; flex-direction: column; border-radius: 0.5rem;
// //   overflow: hidden; text-decoration: none; min-height: 140px;
// //   transition: transform 0.2s ease, box-shadow 0.2s ease;
// // }
// // .vtp-mini:hover {
// //   transform: translateY(-2px); box-shadow: 0 8px 16px -4px rgba(0,0,0,0.15);
// // }
// // .vtp-mini-visual {
// //   width: 100%; height: 110px; position: relative;
// //   flex-shrink: 0; overflow: hidden;
// // }
// // .vtp-mini-content {
// //   padding: 12px 14px; flex: 1;
// //   display: flex; flex-direction: column; justify-content: center;
// // }
// // .vtp-mini-content-full { min-height: 100%; }
// // .vtp-mini-title {
// //   font-size: 0.95rem; font-weight: 600; font-family: ${FONT_FAMILY};
// //   margin: 0 0 4px; line-height: 1.3;
// // }
// // .vtp-mini-formula { font-size: 0.9rem; margin: 0; }
// // .vtp-mini-formula .katex { color: inherit; }
// // .vtp-mini-desc {
// //   font-size: 0.8rem; font-family: ${FONT_FAMILY};
// //   margin: 0; line-height: 1.4;
// // }
// // .vtp-svg-host {
// //   display: flex; align-items: center; justify-content: center;
// //   background: rgba(255,255,255,0.06); overflow: hidden;
// // }
// // .vtp-svg-inner {
// //   width: 80%; height: 80%;
// //   display: flex; align-items: center; justify-content: center; overflow: hidden;
// // }
// // .vtp-svg-inner > svg {
// //   max-width: 100%; max-height: 100%; width: auto; height: auto; display: block;
// // }
// // .vtp-grid {
// //   display: grid; gap: 2rem; grid-template-columns: repeat(2, minmax(0, 1fr));
// // }
// // .vtp-grid > :last-child:nth-child(2n-1) {
// //   grid-column: 1 / -1; margin: 0 auto;
// //   max-width: calc(50% - 1rem); width: 100%;
// // }
// // .vtp-card {
// //   border-radius: 0.5rem; overflow: hidden; display: flex;
// //   min-height: 200px; transition: box-shadow 0.3s ease;
// // }
// // .vtp-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
// // .vtp-image-container {
// //   width: 50%; position: relative; border: solid 1px lightgray;
// //   flex-shrink: 0; overflow: hidden;
// // }
// // .vtp-content {
// //   padding: 1.5rem; display: flex; flex-direction: column;
// //   justify-content: space-between;
// // }
// // .vtp-content-full { width: 100%; }
// // .vtp-content-with-image { width: 50%; }
// // .vtp-title-row {
// //   display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;
// // }
// // .vtp-title {
// //   font-size: 1.25rem; font-weight: 600; line-height: 1.3;
// //   font-family: ${FONT_FAMILY}; margin: 0;
// // }
// // .vtp-description {
// //   font-size: 0.9rem; line-height: 1.5;
// //   font-family: ${FONT_FAMILY}; margin: 0.5rem 0 0;
// // }
// // .vtp-footer {
// //   display: flex; justify-content: space-between;
// //   align-items: center; margin-top: 1rem;
// // }
// // .vtp-view-button {
// //   font-weight: 500; font-size: 0.875rem;
// //   padding: 0.5rem 1rem; border: 1px solid;
// //   border-radius: 9999px; background: transparent; cursor: pointer;
// //   transition: all 0.2s ease; text-decoration: none; font-family: ${FONT_FAMILY};
// // }
// // .vtp-view-button:hover { background: rgba(255,255,255,0.15); }
// // .vtp-menu-button {
// //   padding: 0.5rem; background: none; border: none; cursor: pointer;
// //   display: flex; flex-direction: column; gap: 0.25rem;
// //   opacity: 0.5; transition: opacity 0.2s ease;
// // }
// // .vtp-menu-button:hover { opacity: 1; }
// // .vtp-menu-dot { width: 4px; height: 4px; border-radius: 50%; }
// // @media (max-width: 768px) {
// //   .vtp-grid { grid-template-columns: 1fr; }
// //   .vtp-grid > :last-child:nth-child(2n-1) { grid-column: 1; max-width: 100%; }
// //   .vtp-image-container { width: 100%; height: 180px; }
// //   .vtp-content-with-image { width: 100%; }
// //   .vtp-card { flex-direction: column; }
// // }
// // `;


// // /* ================================================================
// //    AUTO-PULL SIDEBAR GROUPS
// //    ================================================================ */

// // const buildAutoSidebarGroups = (list) => {
// //   const groups = [];
// //   const standalone = [];
// //   list.forEach((tool) => {
// //     if (tool.hasViews && Array.isArray(tool.views) && tool.views.length > 0) {
// //       groups.push({
// //         title: tool.title,
// //         links: tool.views.map((v) => ({ label: v.title, href: v.href })),
// //       });
// //     } else {
// //       standalone.push({ label: tool.title, href: tool.href });
// //     }
// //   });
// //   if (standalone.length > 0) groups.push({ title: 'Tools', links: standalone });
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

// //   // Theme
// //   theme = 'deepBlue',
// //   themeOverrides = null,

// //   // Sidebar
// //   sidebar = false,
// //   sidebarBrandName = null,
// //   sidebarBrandSub = null,
// // }) => {
// //   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);

// //   const [sidebarOpen, setSidebarOpen] = useState(false);

// //   const list = Array.isArray(tools)
// //     ? tools
// //     : (tools && Array.isArray(tools.children) ? tools.children : []);

// //   const handleJump = (i) => {
// //     const el = document.getElementById(`group-${i}`);
// //     if (!el) return;
// //     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
// //     window.scrollTo({ top: y, behavior: 'smooth' });
// //   };

// //   const groupsWithViews = list.filter((x) => x.hasViews && Array.isArray(x.views) && x.views.length > 0);
// //   const standalone = list.filter((x) => !x.hasViews || !Array.isArray(x.views) || x.views.length === 0);

// //   const sidebarGroups = useMemo(() => {
// //     if (!sidebar) return null;
// //     if (Array.isArray(sidebar)) return sidebar;
// //     if (sidebar === true) return buildAutoSidebarGroups(list);
// //     return null;
// //   }, [sidebar, list]);

// //   const showSidebar = !!sidebarGroups && sidebarGroups.length > 0;
// //   const contentMarginLeft = showSidebar
// //     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
// //     : 0;

// //   return (
// //     <>
// //       <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

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
// //           fontFamily: "'Source Serif 4', Georgia, serif",
// //           fontSize: '2.4rem',
// //           fontWeight: 700,
// //           color: t.pageTitle,
// //           textAlign: 'center',
// //           margin: '0 0 24px',
// //         }}>
// //           {pageTitle}
// //         </h1>

// //         <QuickNav
// //           items={list}
// //           dropdownLabel={dropdownLabel}
// //           theme={t}
// //           onJump={handleJump}
// //         />

// //         <ToolsHeader
// //           items={list}
// //           intro={intro}
// //           icon={icon}
// //           article={article}
// //           theme={t}
// //         />

// //         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
// //           {groupsWithViews.map((group, gi) => {
// //             const indexInList = list.indexOf(group);
// //             return (
// //               <section key={`g-${gi}`} id={`group-${indexInList}`} className="vtp-section">
// //                 <GroupHeader item={group} theme={t} />
// //                 <div className="vtp-mini-grid">
// //                   {group.views.map((view, vi) => (
// //                     <ViewMiniCard key={vi} view={view} theme={t} />
// //                   ))}
// //                 </div>
// //               </section>
// //             );
// //           })}

// //           {standalone.length > 0 && (
// //             <section className="vtp-section">
// //               <div className="vtp-grid">
// //                 {standalone.map((tool, si) => {
// //                   const indexInList = list.indexOf(tool);
// //                   return (
// //                     <div key={`s-${si}`} id={`group-${indexInList}`}>
// //                       <BigCard item={tool} theme={t} />
// //                     </div>
// //                   );
// //                 })}
// //               </div>
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
//  * VisualToolsPage — v11
//  * Group panel = variant B (top accent strip + tinted bg + eyebrow + equal-height cards)
//  */

// import React, { useMemo, useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { processContent } from '@/app/utils/contentProcessor';
// import { getTheme } from './visualToolsPageThemes';

// const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';

// const NAVBAR_HEIGHT = 55;
// const SIDEBAR_COLLAPSED = 68;
// const SIDEBAR_EXPANDED = 290;

// const hexToRgba = (hex, alpha) => {
//   const h = hex.replace('#', '');
//   const r = parseInt(h.substring(0, 2), 16);
//   const g = parseInt(h.substring(2, 4), 16);
//   const b = parseInt(h.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// const generateShortTitle = (title) =>
//   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// const isValidImagePath = (val) => {
//   if (typeof val !== 'string') return false;
//   const v = val.trim();
//   if (!v) return false;
//   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// };

// const isValidSvg = (val) =>
//   typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');

// const constrainSvg = (svg) =>
//   svg.replace(
//     /<svg\b([^>]*)>/i,
//     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
//   );

// const wrapFormula = (f) => {
//   if (!f) return '';
//   const t = String(f).trim();
//   if (!t) return '';
//   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
//   return `$${t}$`;
// };


// /* ================================================================
//    ICON
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


// /* ================================================================
//    SIDEBAR
//    ================================================================ */

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
//         position: 'fixed',
//         left: 0,
//         top: NAVBAR_HEIGHT,
//         width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
//         height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
//         background: theme.sidebarBg,
//         zIndex: 90,
//         display: 'flex',
//         flexDirection: 'column',
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
//           color: theme.sidebarTextMuted,
//           flexShrink: 0,
//           borderBottom: `1px solid ${theme.sidebarDivider}`,
//         }}
//         onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
//         onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
//       >
//         <svg
//           style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
//           viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//         >
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
//           padding: '8px 0',
//           flex: 1,
//           overflowY: 'auto',
//           overflowX: 'hidden',
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none',
//         }}
//       >
//         {groups.map((group, gi) => (
//           <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
//         ))}
//       </nav>
//     </aside>
//   );
// };

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
//         display: 'block',
//         width: 8, height: 8,
//         borderRadius: '50%',
//         background: h ? theme.sidebarText : theme.sidebarTextMuted,
//         transition: 'all 0.2s',
//         transform: h ? 'scale(1.5)' : 'scale(1)',
//       }} />
//       <span style={{
//         position: 'absolute',
//         left: 22, top: '50%',
//         transform: 'translateY(-50%)',
//         background: theme.text, color: '#fff',
//         fontSize: 13, padding: '4px 10px',
//         borderRadius: 4, whiteSpace: 'nowrap',
//         opacity: h ? 1 : 0, pointerEvents: 'none',
//         transition: 'opacity 0.15s', zIndex: 10,
//       }}>{label}</span>
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

// const SidebarLink = ({ link, theme }) => {
//   const [h, setH] = useState(false);
//   return (
//     <Link
//       href={link.href || '#'}
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: 10,
//         padding: '9px 20px',
//         fontSize: 14,
//         fontWeight: 500,
//         color: h ? theme.sidebarText : theme.sidebarTextMuted,
//         textDecoration: 'none',
//         backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
//         borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
//         paddingLeft: h ? 17 : 20,
//         transition: 'all 0.15s',
//         lineHeight: 1.4,
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


// /* ================================================================
//    QUICK NAV
//    ================================================================ */

// const QuickNav = ({ items, dropdownLabel, theme, onJump }) => {
//   const [open, setOpen] = useState(false);
//   if (!items.length) return null;

//   return (
//     <nav style={{
//       maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px',
//       background: theme.bgSubtle, borderRadius: 12,
//       border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
//           <div
//             style={{ position: 'relative' }}
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <button style={{
//               display: 'flex', alignItems: 'center', gap: 6,
//               padding: '9px 16px', border: 'none', borderRadius: 8,
//               background: open ? theme.accentHover : theme.accent,
//               color: '#fff', fontSize: '1rem', fontWeight: 600,
//               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
//               cursor: 'pointer', transition: 'background 0.2s ease',
//             }}>
//               {dropdownLabel}
//               <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
//                 <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
//               </svg>
//             </button>
//             <div style={{
//               position: 'absolute', top: 'calc(100% + 6px)', left: 0,
//               minWidth: 320, background: '#fff',
//               border: `1px solid ${theme.border}`, borderRadius: 10,
//               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
//               transition: 'all 0.2s ease', zIndex: 100,
//               maxHeight: 400, overflowY: 'auto',
//               opacity: open ? 1 : 0,
//               visibility: open ? 'visible' : 'hidden',
//               transform: open ? 'translateY(0)' : 'translateY(-8px)',
//             }}>
//               {items.map((it, i) => (
//                 <a key={i} href={`#group-${i}`}
//                   style={{
//                     display: 'block', padding: '13px 18px',
//                     textDecoration: 'none', color: theme.text,
//                     fontSize: '1.05rem', fontWeight: 500,
//                     fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
//                     borderBottom: `1px solid ${theme.bgSubtle}`,
//                     transition: 'all 0.15s ease',
//                   }}
//                   onClick={(e) => { e.preventDefault(); setOpen(false); onJump(i); }}
//                   onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
//                   onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
//                   {it.title}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <span style={{ fontSize: '1.05rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
//         </div>
//         <span style={{
//           fontSize: '1rem', color: theme.text,
//           background: theme.chipBg, padding: '6px 16px',
//           borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
//         }}>{items.length} tools</span>
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
//         {items.map((it, i) => (
//           <a key={i} href={`#group-${i}`}
//             style={{
//               padding: '10px 20px', border: 'none', borderRadius: 22,
//               textDecoration: 'none', color: '#fff',
//               fontSize: '1.05rem', fontWeight: 500,
//               fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
//               transition: 'all 0.2s ease', whiteSpace: 'nowrap',
//               background: theme.accent,
//             }}
//             onClick={(e) => { e.preventDefault(); onJump(i); }}
//             onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
//             onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
//             {generateShortTitle(it.title)}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };


// /* ================================================================
//    TOOLS PAGE HEADER
//    ================================================================ */

// const ToolsHeader = ({ items, intro, icon, article, theme }) => {
//   const stats = useMemo(() => {
//     const toolsCount = items.length;
//     const cats = new Set(items.map((i) => i.category).filter(Boolean));
//     return { toolsCount, categoriesCount: cats.size };
//   }, [items]);

//   if (!items.length) return null;

//   return (
//     <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
//       <div style={{
//         background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
//         border: `2px solid ${theme.border}`,
//         padding: '34px 38px',
//         borderRadius: article ? '16px 16px 0 0' : 16,
//         borderBottom: article ? 'none' : `2px solid ${theme.border}`,
//       }}>
//         {intro && (
//           <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
//             <div style={{
//               width: 64, height: 64, borderRadius: 14,
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               fontSize: '1.85rem', flexShrink: 0,
//               background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
//             }}>{icon}</div>
//             <div style={{ flex: 1 }}>
//               {intro.title && <h2 style={{
//                 fontSize: '1.65rem', fontWeight: 600, color: theme.text,
//                 fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
//                 margin: '0 0 10px 0', lineHeight: 1.3,
//               }}>{intro.title}</h2>}
//               {intro.description && <p style={{
//                 fontSize: '1.2rem', color: theme.textSecondary,
//                 fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
//                 lineHeight: 1.55, margin: 0,
//               }}>{intro.description}</p>}
//             </div>
//           </div>
//         )}
//         {intro?.tip && (
//           <div style={{
//             background: theme.tipBg,
//             border: `1px solid ${theme.border}`,
//             borderLeft: `4px solid ${theme.accent}`,
//             borderRadius: 8, padding: '17px 22px', marginBottom: 24,
//             display: 'flex', alignItems: 'center', gap: 14,
//             fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400,
//             letterSpacing: '0.005em', color: theme.tipText,
//           }}>
//             <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
//             <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
//           </div>
//         )}
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
//           <div style={{ display: 'flex', gap: 28 }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
//               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.toolsCount}</span>
//               <span>Tools</span>
//             </div>
//             {stats.categoriesCount > 0 && (
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
//                 <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.categoriesCount}</span>
//                 <span>Categories</span>
//               </div>
//             )}
//             <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
//               <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>100%</span>
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
//           borderRadius: '0 0 16px 16px',
//           padding: 24,
//         }}>
//           <div style={{
//             background: theme.bgSubtle,
//             border: `2px solid ${theme.borderStrong}`,
//             borderRadius: 12,
//             padding: '28px 32px',
//           }}>
//             <div style={{
//               fontSize: '1.08rem',
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
//    BIG CARD
//    ================================================================ */

// const BigCard = ({ item, theme }) => {
//   const [imgFailed, setImgFailed] = useState(false);
//   const hasImage = isValidImagePath(item.image) && !imgFailed;
//   const hasSvg = !hasImage && isValidSvg(item.svg);
//   const hasVisual = hasImage || hasSvg;

//   return (
//     <div className="vtp-card" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
//       {hasImage && (
//         <div className="vtp-image-container">
//           <Image src={item.image} alt={item.imageAlt || item.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
//         </div>
//       )}
//       {hasSvg && (
//         <div className="vtp-image-container vtp-svg-host">
//           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
//         </div>
//       )}
//       <div className={`vtp-content ${hasVisual ? 'vtp-content-with-image' : 'vtp-content-full'}`}>
//         <div>
//           <div className="vtp-title-row">
//             <h3 className="vtp-title" style={{ color: theme.cardText }}>{item.title}</h3>
//           </div>
//           <p className="vtp-description" style={{ color: theme.cardText, opacity: 0.9 }}>{item.description}</p>
//         </div>
//         <div className="vtp-footer">
//           <Link
//             href={item.href || '#'}
//             className="vtp-view-button"
//             style={{ color: theme.cardText, borderColor: theme.cardText }}
//           >View Details</Link>
//           <button className="vtp-menu-button" aria-label="More">
//             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
//             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
//             <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// /* ================================================================
//    VIEW MINI-CARD
//    ================================================================ */

// const ViewMiniCard = ({ view, theme }) => {
//   const [imgFailed, setImgFailed] = useState(false);
//   const hasImage = isValidImagePath(view.image) && !imgFailed;
//   const hasSvg = !hasImage && isValidSvg(view.svg);
//   const hasVisual = hasImage || hasSvg;

//   return (
//     <Link href={view.href || '#'} className="vtp-mini" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
//       {hasImage && (
//         <div className="vtp-mini-visual">
//           <Image src={view.image} alt={view.imageAlt || view.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
//         </div>
//       )}
//       {hasSvg && (
//         <div className="vtp-mini-visual vtp-svg-host">
//           <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(view.svg) }} />
//         </div>
//       )}
//       <div className={`vtp-mini-content ${hasVisual ? 'vtp-mini-content-with-visual' : 'vtp-mini-content-full'}`}>
//         <div className="vtp-mini-title" style={{ color: theme.cardText }}>{view.title}</div>
//         {view.formula && (
//           <div className="vtp-mini-formula" style={{ color: theme.cardText, opacity: 0.95 }}>
//             {processContent(wrapFormula(view.formula))}
//           </div>
//         )}
//         {!view.formula && view.shortDescription && (
//           <div className="vtp-mini-desc" style={{ color: theme.cardText, opacity: 0.9 }}>
//             {processContent(view.shortDescription)}
//           </div>
//         )}
//       </div>
//     </Link>
//   );
// };


// /* ================================================================
//    GROUP PANEL — variant B
//    ================================================================ */

// const GroupPanel = ({ group, theme, anchorId }) => (
//   <section
//     id={anchorId}
//     style={{
//       background: hexToRgba(theme.accent, 0.06),
//       borderRadius: 12,
//       overflow: 'hidden',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
//       marginBottom: '3rem',
//     }}
//   >
//     {/* top accent strip */}
//     <div style={{ background: theme.accent, height: 4 }} />

//     <div style={{ padding: '22px 24px' }}>
//       {/* header */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'baseline',
//         justifyContent: 'space-between',
//         gap: '1rem',
//         flexWrap: 'wrap',
//         marginBottom: 18,
//       }}>
//         <div>
//           <div style={{
//             fontSize: 11,
//             fontWeight: 700,
//             textTransform: 'uppercase',
//             letterSpacing: 1,
//             color: theme.accent,
//             marginBottom: 4,
//             fontFamily: FONT_FAMILY,
//           }}>
//             {/* Group · {group.views.length} {group.views.length === 1 ? 'tool' : 'tools'} */}
//           {group.views.length} {group.views.length === 1 ? 'tool' : 'tools'}
          
//           </div>
//           <div style={{
//             fontSize: '1.5rem',
//             fontWeight: 600,
//             color: theme.text,
//             fontFamily: FONT_FAMILY,
//             letterSpacing: '-0.01em',
//           }}>
//             {group.title}
//           </div>
//         </div>
//         <Link
//           href={group.href || '#'}
//           style={{
//             fontSize: '0.9rem',
//             fontWeight: 500,
//             color: theme.accent,
//             border: `1px solid ${theme.accent}`,
//             padding: '4px 12px',
//             borderRadius: 999,
//             textDecoration: 'none',
//             fontFamily: FONT_FAMILY,
//             whiteSpace: 'nowrap',
//             transition: 'all 0.2s ease',
//           }}
//           onMouseEnter={(e) => { e.currentTarget.style.background = hexToRgba(theme.accent, 0.1); }}
//           onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
//         >
//           View All →
//         </Link>
//       </div>

//       {/* equal-height sub-grid */}
//       <div className="vtp-mini-grid">
//         {group.views.map((view, vi) => (
//           <ViewMiniCard key={vi} view={view} theme={theme} />
//         ))}
//       </div>
//     </div>
//   </section>
// );


// /* ================================================================
//    STYLES
//    ================================================================ */

// const PAGE_CSS = `
// .vtp-section {
//   width: 90%; max-width: 1200px;
//   margin: 0 auto 3rem; padding: 0 1rem;
// }
// .vtp-mini-grid {
//   display: grid;
//   grid-template-columns: repeat(3, minmax(0, 1fr));
//   grid-auto-rows: 1fr;
//   gap: 1rem;
// }
// @media (max-width: 768px) { .vtp-mini-grid { grid-template-columns: 1fr; } }
// .vtp-mini {
//   display: flex; flex-direction: column; border-radius: 0.5rem;
//   overflow: hidden; text-decoration: none;
//   height: 100%;
//   min-height: 140px;
//   transition: transform 0.2s ease, box-shadow 0.2s ease;
// }
// .vtp-mini:hover {
//   transform: translateY(-2px); box-shadow: 0 8px 16px -4px rgba(0,0,0,0.15);
// }
// .vtp-mini-visual {
//   width: 100%; height: 110px; position: relative;
//   flex-shrink: 0; overflow: hidden;
// }
// .vtp-mini-content {
//   padding: 12px 14px; flex: 1;
//   display: flex; flex-direction: column; justify-content: center;
// }
// .vtp-mini-content-full { min-height: 100%; }
// .vtp-mini-title {
//   font-size: 0.95rem; font-weight: 600; font-family: ${FONT_FAMILY};
//   margin: 0 0 4px; line-height: 1.3;
// }
// .vtp-mini-formula { font-size: 0.9rem; margin: 0; }
// .vtp-mini-formula .katex { color: inherit; }
// .vtp-mini-desc {
//   font-size: 0.8rem; font-family: ${FONT_FAMILY};
//   margin: 0; line-height: 1.4;
// }
// .vtp-svg-host {
//   display: flex; align-items: center; justify-content: center;
//   background: rgba(255,255,255,0.06); overflow: hidden;
// }
// .vtp-svg-inner {
//   width: 80%; height: 80%;
//   display: flex; align-items: center; justify-content: center; overflow: hidden;
// }
// .vtp-svg-inner > svg {
//   max-width: 100%; max-height: 100%; width: auto; height: auto; display: block;
// }
// .vtp-grid {
//   display: grid; gap: 2rem; grid-template-columns: repeat(2, minmax(0, 1fr));
// }
// .vtp-grid > :last-child:nth-child(2n-1) {
//   grid-column: 1 / -1; margin: 0 auto;
//   max-width: calc(50% - 1rem); width: 100%;
// }
// .vtp-card {
//   border-radius: 0.5rem; overflow: hidden; display: flex;
//   min-height: 200px; transition: box-shadow 0.3s ease;
// }
// .vtp-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
// .vtp-image-container {
//   width: 50%; position: relative; border: solid 1px lightgray;
//   flex-shrink: 0; overflow: hidden;
// }
// .vtp-content {
//   padding: 1.5rem; display: flex; flex-direction: column;
//   justify-content: space-between;
// }
// .vtp-content-full { width: 100%; }
// .vtp-content-with-image { width: 50%; }
// .vtp-title-row {
//   display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;
// }
// .vtp-title {
//   font-size: 1.25rem; font-weight: 600; line-height: 1.3;
//   font-family: ${FONT_FAMILY}; margin: 0;
// }
// .vtp-description {
//   font-size: 0.9rem; line-height: 1.5;
//   font-family: ${FONT_FAMILY}; margin: 0.5rem 0 0;
// }
// .vtp-footer {
//   display: flex; justify-content: space-between;
//   align-items: center; margin-top: 1rem;
// }
// .vtp-view-button {
//   font-weight: 500; font-size: 0.875rem;
//   padding: 0.5rem 1rem; border: 1px solid;
//   border-radius: 9999px; background: transparent; cursor: pointer;
//   transition: all 0.2s ease; text-decoration: none; font-family: ${FONT_FAMILY};
// }
// .vtp-view-button:hover { background: rgba(255,255,255,0.15); }
// .vtp-menu-button {
//   padding: 0.5rem; background: none; border: none; cursor: pointer;
//   display: flex; flex-direction: column; gap: 0.25rem;
//   opacity: 0.5; transition: opacity 0.2s ease;
// }
// .vtp-menu-button:hover { opacity: 1; }
// .vtp-menu-dot { width: 4px; height: 4px; border-radius: 50%; }
// @media (max-width: 768px) {
//   .vtp-grid { grid-template-columns: 1fr; }
//   .vtp-grid > :last-child:nth-child(2n-1) { grid-column: 1; max-width: 100%; }
//   .vtp-image-container { width: 100%; height: 180px; }
//   .vtp-content-with-image { width: 100%; }
//   .vtp-card { flex-direction: column; }
// }
// `;


// /* ================================================================
//    AUTO-PULL SIDEBAR GROUPS
//    ================================================================ */

// const buildAutoSidebarGroups = (list) => {
//   const groups = [];
//   const standalone = [];
//   list.forEach((tool) => {
//     if (tool.hasViews && Array.isArray(tool.views) && tool.views.length > 0) {
//       groups.push({
//         title: tool.title,
//         links: tool.views.map((v) => ({ label: v.title, href: v.href })),
//       });
//     } else {
//       standalone.push({ label: tool.title, href: tool.href });
//     }
//   });
//   if (standalone.length > 0) groups.push({ title: 'Tools', links: standalone });
//   return groups;
// };


// /* ================================================================
//    MAIN
//    ================================================================ */

// const VisualToolsPage = ({
//   tools,
//   pageTitle = 'Visual Tools',
//   intro = null,
//   article = null,
//   icon = '🔍',
//   dropdownLabel = 'All Tools',
//   bodyOffsetTop = 60,

//   theme = 'deepBlue',
//   themeOverrides = null,

//   sidebar = false,
//   sidebarBrandName = null,
//   sidebarBrandSub = null,
// }) => {
//   const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const list = Array.isArray(tools)
//     ? tools
//     : (tools && Array.isArray(tools.children) ? tools.children : []);

//   const handleJump = (i) => {
//     const el = document.getElementById(`group-${i}`);
//     if (!el) return;
//     const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
//     window.scrollTo({ top: y, behavior: 'smooth' });
//   };

//   const groupsWithViews = list.filter((x) => x.hasViews && Array.isArray(x.views) && x.views.length > 0);
//   const standalone = list.filter((x) => !x.hasViews || !Array.isArray(x.views) || x.views.length === 0);

//   const sidebarGroups = useMemo(() => {
//     if (!sidebar) return null;
//     if (Array.isArray(sidebar)) return sidebar;
//     if (sidebar === true) return buildAutoSidebarGroups(list);
//     return null;
//   }, [sidebar, list]);

//   const showSidebar = !!sidebarGroups && sidebarGroups.length > 0;
//   const contentMarginLeft = showSidebar
//     ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
//     : 0;

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

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
//           fontFamily: "'Source Serif 4', Georgia, serif",
//           fontSize: '2.4rem',
//           fontWeight: 700,
//           color: t.pageTitle,
//           textAlign: 'center',
//           margin: '0 0 24px',
//         }}>
//           {pageTitle}
//         </h1>

//         <QuickNav
//           items={list}
//           dropdownLabel={dropdownLabel}
//           theme={t}
//           onJump={handleJump}
//         />

//         <ToolsHeader
//           items={list}
//           intro={intro}
//           icon={icon}
//           article={article}
//           theme={t}
//         />

//         <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
//           {groupsWithViews.map((group) => {
//             const indexInList = list.indexOf(group);
//             return (
//               <div key={`g-${indexInList}`} className="vtp-section">
//                 <GroupPanel group={group} theme={t} anchorId={`group-${indexInList}`} />
//               </div>
//             );
//           })}

//           {standalone.length > 0 && (
//             <section className="vtp-section">
//               <div className="vtp-grid">
//                 {standalone.map((tool) => {
//                   const indexInList = list.indexOf(tool);
//                   return (
//                     <div key={`s-${indexInList}`} id={`group-${indexInList}`}>
//                       <BigCard item={tool} theme={t} />
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>
//           )}
//         </div>

//         <div style={{ height: 60 }} />
//       </div>
//     </>
//   );
// };

// export default VisualToolsPage;


/**
 * VisualToolsPage — v12
 *
 * customItems prop: insert extra items (single tools or groups) at specific positions.
 *   customItems = [
 *     { at: 0,       title, ..., hasViews, views },   // first
 *     { at: 'end',   title, ..., hasViews: false },   // last
 *     { at: 2,       title, ... },                     // at index 2 of merged list
 *     { at: 'start', title, ... },                     // first (alias of 0)
 *   ]
 * Item shape is identical to auto-pulled tools.
 */

import React, { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { processContent } from '@/app/utils/contentProcessor';
import { getTheme } from './visualToolsPageThemes';

const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';

const NAVBAR_HEIGHT = 55;
const SIDEBAR_COLLAPSED = 68;
const SIDEBAR_EXPANDED = 290;

const hexToRgba = (hex, alpha) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const generateShortTitle = (title) =>
  title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

const isValidImagePath = (val) => {
  if (typeof val !== 'string') return false;
  const v = val.trim();
  if (!v) return false;
  return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
};

const isValidSvg = (val) =>
  typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');

const constrainSvg = (svg) =>
  svg.replace(
    /<svg\b([^>]*)>/i,
    '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
  );

const wrapFormula = (f) => {
  if (!f) return '';
  const t = String(f).trim();
  if (!t) return '';
  if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
  return `$${t}$`;
};


/* ================================================================
   MERGE AUTO + CUSTOM ITEMS
   ================================================================ */

const mergeWithCustomItems = (autoList, customItems) => {
  if (!Array.isArray(customItems) || customItems.length === 0) return autoList;

  // Pair each custom item with its resolved index, preserving relative order
  // for ties. We resolve 'start' → 0, 'end' → +Infinity so end items always
  // come after numeric ones.
  const decorated = customItems.map((item, i) => {
    const { at, ...rest } = item;
    let pos;
    if (at === 'start') pos = 0;
    else if (at === 'end' || at == null) pos = Number.POSITIVE_INFINITY;
    else if (typeof at === 'number') pos = at;
    else pos = Number.POSITIVE_INFINITY;
    return { item: rest, pos, order: i };
  });

  // Sort: lower pos first; ties keep original order
  decorated.sort((a, b) => (a.pos - b.pos) || (a.order - b.order));

  // Splice into a copy of autoList
  const result = [...autoList];
  decorated.forEach(({ item, pos }) => {
    if (pos === Number.POSITIVE_INFINITY) {
      result.push(item);
    } else {
      const clamped = Math.max(0, Math.min(pos, result.length));
      result.splice(clamped, 0, item);
    }
  });

  return result;
};


/* ================================================================
   ICON
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


/* ================================================================
   SIDEBAR
   ================================================================ */

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
        position: 'fixed',
        left: 0,
        top: NAVBAR_HEIGHT,
        width: open ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        background: theme.sidebarBg,
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
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
          color: theme.sidebarTextMuted,
          flexShrink: 0,
          borderBottom: `1px solid ${theme.sidebarDivider}`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = theme.sidebarText; e.currentTarget.style.background = theme.sidebarHoverBg; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = theme.sidebarTextMuted; e.currentTarget.style.background = 'none'; }}
      >
        <svg
          style={{ width: 20, height: 20, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
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
          padding: '8px 0',
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {groups.map((group, gi) => (
          <SidebarGroup key={gi} group={group} theme={theme} isFirst={gi === 0} />
        ))}
      </nav>
    </aside>
  );
};

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
        display: 'block',
        width: 8, height: 8,
        borderRadius: '50%',
        background: h ? theme.sidebarText : theme.sidebarTextMuted,
        transition: 'all 0.2s',
        transform: h ? 'scale(1.5)' : 'scale(1)',
      }} />
      <span style={{
        position: 'absolute',
        left: 22, top: '50%',
        transform: 'translateY(-50%)',
        background: theme.text, color: '#fff',
        fontSize: 13, padding: '4px 10px',
        borderRadius: 4, whiteSpace: 'nowrap',
        opacity: h ? 1 : 0, pointerEvents: 'none',
        transition: 'opacity 0.15s', zIndex: 10,
      }}>{label}</span>
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

const SidebarLink = ({ link, theme }) => {
  const [h, setH] = useState(false);
  return (
    <Link
      href={link.href || '#'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 20px',
        fontSize: 14,
        fontWeight: 500,
        color: h ? theme.sidebarText : theme.sidebarTextMuted,
        textDecoration: 'none',
        backgroundColor: h ? theme.sidebarHoverBg : 'transparent',
        borderLeft: h ? `3px solid ${theme.accent}` : '3px solid transparent',
        paddingLeft: h ? 17 : 20,
        transition: 'all 0.15s',
        lineHeight: 1.4,
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


/* ================================================================
   QUICK NAV
   ================================================================ */

const QuickNav = ({ items, dropdownLabel, theme, onJump }) => {
  const [open, setOpen] = useState(false);
  if (!items.length) return null;

  return (
    <nav style={{
      maxWidth: 1200, margin: '0 auto 40px', padding: '20px 26px',
      background: theme.bgSubtle, borderRadius: 12,
      border: `2px solid ${theme.borderStrong}`, fontFamily: FONT_FAMILY,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '9px 16px', border: 'none', borderRadius: 8,
              background: open ? theme.accentHover : theme.accent,
              color: '#fff', fontSize: '1rem', fontWeight: 600,
              fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
              cursor: 'pointer', transition: 'background 0.2s ease',
            }}>
              {dropdownLabel}
              <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginLeft: 6, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div style={{
              position: 'absolute', top: 'calc(100% + 6px)', left: 0,
              minWidth: 320, background: '#fff',
              border: `1px solid ${theme.border}`, borderRadius: 10,
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease', zIndex: 100,
              maxHeight: 400, overflowY: 'auto',
              opacity: open ? 1 : 0,
              visibility: open ? 'visible' : 'hidden',
              transform: open ? 'translateY(0)' : 'translateY(-8px)',
            }}>
              {items.map((it, i) => (
                <a key={i} href={`#group-${i}`}
                  style={{
                    display: 'block', padding: '13px 18px',
                    textDecoration: 'none', color: theme.text,
                    fontSize: '1.05rem', fontWeight: 500,
                    fontFamily: FONT_FAMILY, letterSpacing: '0.005em',
                    borderBottom: `1px solid ${theme.bgSubtle}`,
                    transition: 'all 0.15s ease',
                  }}
                  onClick={(e) => { e.preventDefault(); setOpen(false); onJump(i); }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = theme.bgSubtle; e.currentTarget.style.color = theme.accent; e.currentTarget.style.paddingLeft = '22px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = theme.text; e.currentTarget.style.paddingLeft = '18px'; }}>
                  {it.title}
                </a>
              ))}
            </div>
          </div>
          <span style={{ fontSize: '1.05rem', color: theme.textMuted, fontWeight: 500, fontFamily: FONT_FAMILY }}>or quick jump:</span>
        </div>
        <span style={{
          fontSize: '1rem', color: theme.text,
          background: theme.chipBg, padding: '6px 16px',
          borderRadius: 20, fontWeight: 600, fontFamily: FONT_FAMILY,
        }}>{items.length} tools</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
        {items.map((it, i) => (
          <a key={i} href={`#group-${i}`}
            style={{
              padding: '10px 20px', border: 'none', borderRadius: 22,
              textDecoration: 'none', color: '#fff',
              fontSize: '1.05rem', fontWeight: 500,
              fontFamily: FONT_FAMILY, letterSpacing: '0.01em',
              transition: 'all 0.2s ease', whiteSpace: 'nowrap',
              background: theme.accent,
            }}
            onClick={(e) => { e.preventDefault(); onJump(i); }}
            onMouseEnter={(e) => { e.currentTarget.style.background = theme.accentHover; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = `0 4px 12px ${hexToRgba(theme.accent, 0.35)}`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = theme.accent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            {generateShortTitle(it.title)}
          </a>
        ))}
      </div>
    </nav>
  );
};


/* ================================================================
   TOOLS PAGE HEADER
   ================================================================ */

const ToolsHeader = ({ items, intro, icon, article, theme }) => {
  const stats = useMemo(() => {
    const toolsCount = items.length;
    const cats = new Set(items.map((i) => i.category).filter(Boolean));
    return { toolsCount, categoriesCount: cats.size };
  }, [items]);

  if (!items.length) return null;

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', fontFamily: FONT_FAMILY }}>
      <div style={{
        background: `linear-gradient(135deg, ${theme.bgSubtle} 0%, ${theme.bgMuted} 100%)`,
        border: `2px solid ${theme.border}`,
        padding: '34px 38px',
        borderRadius: article ? '16px 16px 0 0' : 16,
        borderBottom: article ? 'none' : `2px solid ${theme.border}`,
      }}>
        {intro && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.85rem', flexShrink: 0,
              background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
            }}>{icon}</div>
            <div style={{ flex: 1 }}>
              {intro.title && <h2 style={{
                fontSize: '1.65rem', fontWeight: 600, color: theme.text,
                fontFamily: FONT_FAMILY, letterSpacing: '-0.015em',
                margin: '0 0 10px 0', lineHeight: 1.3,
              }}>{intro.title}</h2>}
              {intro.description && <p style={{
                fontSize: '1.2rem', color: theme.textSecondary,
                fontFamily: FONT_FAMILY, fontWeight: 400, letterSpacing: '0.005em',
                lineHeight: 1.55, margin: 0,
              }}>{intro.description}</p>}
            </div>
          </div>
        )}
        {intro?.tip && (
          <div style={{
            background: theme.tipBg,
            border: `1px solid ${theme.border}`,
            borderLeft: `4px solid ${theme.accent}`,
            borderRadius: 8, padding: '17px 22px', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 14,
            fontSize: '1.15rem', fontFamily: FONT_FAMILY, fontWeight: 400,
            letterSpacing: '0.005em', color: theme.tipText,
          }}>
            <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
            <span style={{ lineHeight: 1.5 }}><strong>Tip:</strong> {intro.tip}</span>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18 }}>
          <div style={{ display: 'flex', gap: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
              <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.toolsCount}</span>
              <span>Tools</span>
            </div>
            {stats.categoriesCount > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
                <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>{stats.categoriesCount}</span>
                <span>Categories</span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', fontFamily: FONT_FAMILY, color: theme.textSecondary }}>
              <span style={{ fontWeight: 700, fontSize: '1.45rem', color: theme.accent }}>100%</span>
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
          borderRadius: '0 0 16px 16px',
          padding: 24,
        }}>
          <div style={{
            background: theme.bgSubtle,
            border: `2px solid ${theme.borderStrong}`,
            borderRadius: 12,
            padding: '28px 32px',
          }}>
            <div style={{
              fontSize: '1.08rem',
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
   BIG CARD
   ================================================================ */

const BigCard = ({ item, theme }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = isValidImagePath(item.image) && !imgFailed;
  const hasSvg = !hasImage && isValidSvg(item.svg);
  const hasVisual = hasImage || hasSvg;

  return (
    <div className="vtp-card" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
      {hasImage && (
        <div className="vtp-image-container">
          <Image src={item.image} alt={item.imageAlt || item.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
        </div>
      )}
      {hasSvg && (
        <div className="vtp-image-container vtp-svg-host">
          <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(item.svg) }} />
        </div>
      )}
      <div className={`vtp-content ${hasVisual ? 'vtp-content-with-image' : 'vtp-content-full'}`}>
        <div>
          <div className="vtp-title-row">
            <h3 className="vtp-title" style={{ color: theme.cardText }}>{item.title}</h3>
          </div>
          <p className="vtp-description" style={{ color: theme.cardText, opacity: 0.9 }}>{item.description}</p>
        </div>
        <div className="vtp-footer">
          <Link
            href={item.href || '#'}
            className="vtp-view-button"
            style={{ color: theme.cardText, borderColor: theme.cardText }}
          >View Details</Link>
          <button className="vtp-menu-button" aria-label="More">
            <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
            <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
            <span className="vtp-menu-dot" style={{ background: theme.cardText }} />
          </button>
        </div>
      </div>
    </div>
  );
};


/* ================================================================
   VIEW MINI-CARD
   ================================================================ */

const ViewMiniCard = ({ view, theme }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = isValidImagePath(view.image) && !imgFailed;
  const hasSvg = !hasImage && isValidSvg(view.svg);
  const hasVisual = hasImage || hasSvg;

  return (
    <Link href={view.href || '#'} className="vtp-mini" style={{ backgroundColor: theme.cardBg, color: theme.cardText }}>
      {hasImage && (
        <div className="vtp-mini-visual">
          <Image src={view.image} alt={view.imageAlt || view.title} fill style={{ objectFit: 'cover' }} onError={() => setImgFailed(true)} />
        </div>
      )}
      {hasSvg && (
        <div className="vtp-mini-visual vtp-svg-host">
          <div className="vtp-svg-inner" dangerouslySetInnerHTML={{ __html: constrainSvg(view.svg) }} />
        </div>
      )}
      <div className={`vtp-mini-content ${hasVisual ? 'vtp-mini-content-with-visual' : 'vtp-mini-content-full'}`}>
        <div className="vtp-mini-title" style={{ color: theme.cardText }}>{view.title}</div>
        {view.formula && (
          <div className="vtp-mini-formula" style={{ color: theme.cardText, opacity: 0.95 }}>
            {processContent(wrapFormula(view.formula))}
          </div>
        )}
        {!view.formula && view.shortDescription && (
          <div className="vtp-mini-desc" style={{ color: theme.cardText, opacity: 0.9 }}>
            {processContent(view.shortDescription)}
          </div>
        )}
      </div>
    </Link>
  );
};


/* ================================================================
   GROUP PANEL — variant B
   ================================================================ */

const GroupPanel = ({ group, theme, anchorId }) => (
  <section
    id={anchorId}
    style={{
      background: hexToRgba(theme.accent, 0.06),
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      marginBottom: '3rem',
    }}
  >
    <div style={{ background: theme.accent, height: 4 }} />

    <div style={{ padding: '22px 24px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: 18,
      }}>
        <div>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: theme.accent,
            marginBottom: 4,
            fontFamily: FONT_FAMILY,
          }}>
            {group.views.length} {group.views.length === 1 ? 'tool' : 'tools'}
          </div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: theme.text,
            fontFamily: FONT_FAMILY,
            letterSpacing: '-0.01em',
          }}>
            {group.title}
          </div>
        </div>
        <Link
          href={group.href || '#'}
          style={{
            fontSize: '0.9rem',
            fontWeight: 500,
            color: theme.accent,
            border: `1px solid ${theme.accent}`,
            padding: '4px 12px',
            borderRadius: 999,
            textDecoration: 'none',
            fontFamily: FONT_FAMILY,
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = hexToRgba(theme.accent, 0.1); }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          View All →
        </Link>
      </div>

      <div className="vtp-mini-grid">
        {group.views.map((view, vi) => (
          <ViewMiniCard key={vi} view={view} theme={theme} />
        ))}
      </div>
    </div>
  </section>
);


/* ================================================================
   STYLES
   ================================================================ */

const PAGE_CSS = `
.vtp-section {
  width: 90%; max-width: 1200px;
  margin: 0 auto 3rem; padding: 0 1rem;
}
.vtp-mini-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  gap: 1rem;
}
@media (max-width: 768px) { .vtp-mini-grid { grid-template-columns: 1fr; } }
.vtp-mini {
  display: flex; flex-direction: column; border-radius: 0.5rem;
  overflow: hidden; text-decoration: none;
  height: 100%;
  min-height: 140px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.vtp-mini:hover {
  transform: translateY(-2px); box-shadow: 0 8px 16px -4px rgba(0,0,0,0.15);
}
.vtp-mini-visual {
  width: 100%; height: 110px; position: relative;
  flex-shrink: 0; overflow: hidden;
}
.vtp-mini-content {
  padding: 12px 14px; flex: 1;
  display: flex; flex-direction: column; justify-content: center;
}
.vtp-mini-content-full { min-height: 100%; }
.vtp-mini-title {
  font-size: 0.95rem; font-weight: 600; font-family: ${FONT_FAMILY};
  margin: 0 0 4px; line-height: 1.3;
}
.vtp-mini-formula { font-size: 0.9rem; margin: 0; }
.vtp-mini-formula .katex { color: inherit; }
.vtp-mini-desc {
  font-size: 0.8rem; font-family: ${FONT_FAMILY};
  margin: 0; line-height: 1.4;
}
.vtp-svg-host {
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.06); overflow: hidden;
}
.vtp-svg-inner {
  width: 80%; height: 80%;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.vtp-svg-inner > svg {
  max-width: 100%; max-height: 100%; width: auto; height: auto; display: block;
}
.vtp-grid {
  display: grid; gap: 2rem; grid-template-columns: repeat(2, minmax(0, 1fr));
}
.vtp-grid > :last-child:nth-child(2n-1) {
  grid-column: 1 / -1; margin: 0 auto;
  max-width: calc(50% - 1rem); width: 100%;
}
.vtp-card {
  border-radius: 0.5rem; overflow: hidden; display: flex;
  min-height: 200px; transition: box-shadow 0.3s ease;
}
.vtp-card:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.vtp-image-container {
  width: 50%; position: relative; border: solid 1px lightgray;
  flex-shrink: 0; overflow: hidden;
}
.vtp-content {
  padding: 1.5rem; display: flex; flex-direction: column;
  justify-content: space-between;
}
.vtp-content-full { width: 100%; }
.vtp-content-with-image { width: 50%; }
.vtp-title-row {
  display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;
}
.vtp-title {
  font-size: 1.25rem; font-weight: 600; line-height: 1.3;
  font-family: ${FONT_FAMILY}; margin: 0;
}
.vtp-description {
  font-size: 0.9rem; line-height: 1.5;
  font-family: ${FONT_FAMILY}; margin: 0.5rem 0 0;
}
.vtp-footer {
  display: flex; justify-content: space-between;
  align-items: center; margin-top: 1rem;
}
.vtp-view-button {
  font-weight: 500; font-size: 0.875rem;
  padding: 0.5rem 1rem; border: 1px solid;
  border-radius: 9999px; background: transparent; cursor: pointer;
  transition: all 0.2s ease; text-decoration: none; font-family: ${FONT_FAMILY};
}
.vtp-view-button:hover { background: rgba(255,255,255,0.15); }
.vtp-menu-button {
  padding: 0.5rem; background: none; border: none; cursor: pointer;
  display: flex; flex-direction: column; gap: 0.25rem;
  opacity: 0.5; transition: opacity 0.2s ease;
}
.vtp-menu-button:hover { opacity: 1; }
.vtp-menu-dot { width: 4px; height: 4px; border-radius: 50%; }
@media (max-width: 768px) {
  .vtp-grid { grid-template-columns: 1fr; }
  .vtp-grid > :last-child:nth-child(2n-1) { grid-column: 1; max-width: 100%; }
  .vtp-image-container { width: 100%; height: 180px; }
  .vtp-content-with-image { width: 100%; }
  .vtp-card { flex-direction: column; }
}
`;


/* ================================================================
   AUTO-PULL SIDEBAR GROUPS
   ================================================================ */

const buildAutoSidebarGroups = (list) => {
  const groups = [];
  const standalone = [];
  list.forEach((tool) => {
    if (tool.hasViews && Array.isArray(tool.views) && tool.views.length > 0) {
      groups.push({
        title: tool.title,
        links: tool.views.map((v) => ({ label: v.title, href: v.href })),
      });
    } else {
      standalone.push({ label: tool.title, href: tool.href });
    }
  });
  if (standalone.length > 0) groups.push({ title: 'Tools', links: standalone });
  return groups;
};


/* ================================================================
   MAIN
   ================================================================ */

const VisualToolsPage = ({
  tools,
  pageTitle = 'Visual Tools',
  intro = null,
  article = null,
  icon = '🔍',
  dropdownLabel = 'All Tools',
  bodyOffsetTop = 60,

  theme = 'deepBlue',
  themeOverrides = null,

  sidebar = false,
  sidebarBrandName = null,
  sidebarBrandSub = null,

  // Custom items merged into the auto-pulled list at specified positions.
  customItems = null,
}) => {
  const t = useMemo(() => getTheme(theme, themeOverrides), [theme, themeOverrides]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const autoList = Array.isArray(tools)
    ? tools
    : (tools && Array.isArray(tools.children) ? tools.children : []);

  // Merge in customItems, then split groups vs standalone
  const list = useMemo(
    () => mergeWithCustomItems(autoList, customItems),
    [autoList, customItems]
  );

  const handleJump = (i) => {
    const el = document.getElementById(`group-${i}`);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const groupsWithViews = list.filter((x) => x.hasViews && Array.isArray(x.views) && x.views.length > 0);
  const standalone = list.filter((x) => !x.hasViews || !Array.isArray(x.views) || x.views.length === 0);

  const sidebarGroups = useMemo(() => {
    if (!sidebar) return null;
    if (Array.isArray(sidebar)) return sidebar;
    if (sidebar === true) return buildAutoSidebarGroups(list);
    return null;
  }, [sidebar, list]);

  const showSidebar = !!sidebarGroups && sidebarGroups.length > 0;
  const contentMarginLeft = showSidebar
    ? (sidebarOpen ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED)
    : 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

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
          fontFamily: "'Source Serif 4', Georgia, serif",
          fontSize: '2.4rem',
          fontWeight: 700,
          color: t.pageTitle,
          textAlign: 'center',
          margin: '0 0 24px',
        }}>
          {pageTitle}
        </h1>

        <QuickNav
          items={list}
          dropdownLabel={dropdownLabel}
          theme={t}
          onJump={handleJump}
        />

        <ToolsHeader
          items={list}
          intro={intro}
          icon={icon}
          article={article}
          theme={t}
        />

        <div className="vtp-body" style={{ marginTop: bodyOffsetTop }}>
          {groupsWithViews.map((group) => {
            const indexInList = list.indexOf(group);
            return (
              <div key={`g-${indexInList}`} className="vtp-section">
                <GroupPanel group={group} theme={t} anchorId={`group-${indexInList}`} />
              </div>
            );
          })}

          {standalone.length > 0 && (
            <section className="vtp-section">
              <div className="vtp-grid">
                {standalone.map((tool) => {
                  const indexInList = list.indexOf(tool);
                  return (
                    <div key={`s-${indexInList}`} id={`group-${indexInList}`}>
                      <BigCard item={tool} theme={t} />
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        <div style={{ height: 60 }} />
      </div>
    </>
  );
};

export default VisualToolsPage;