
// 'use client';
// import { useState, useEffect, useMemo, useRef } from 'react';
// import { processContent } from '../../../utils/contentProcessor';
// import QuizWidget from '../../examples/quiz/QuizWidget';
// import TablePuzzle2 from '../../puzzles/TablePuzzle2'
// import DERIVATIVES_DATASET from './data/derivativeDataset';


// const C = {
//   primary:      '#4f46e5',
//   primaryDark:  '#3730a3',
//   primaryLight: '#eef2ff',
//   bg:           '#fafbff',
//   border:       '#e0e7ff',
//   borderSoft:   '#eef0f7',
//   cardBorder:   '#c7d2fe',
//   text:         '#1e1b4b',
//   textMuted:    '#64748b',
//   success:      '#10b981',
//   error:        '#ef4444',
//   errorBg:      '#fee2e2',
//   errorText:    '#991b1b',
//   warn:         '#f59e0b',
//   warnBg:       '#fef3c7',
//   warnText:     '#92400e',
//   shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
//   shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
// };

// function normalize(s) {
//   return String(s).toLowerCase()
//     .replace(/\\/g, '')
//     .replace(/[\s\u00B7]/g, '')
//     .replace(/[{}]/g, '')
//     .replace(/operatorname/g, '');
// }
// function matchAgainst(items, query, mainKey, altKey) {
//   const q = normalize(query);
//   if (!q) return [];
//   return items.filter((d) => {
//     const main  = normalize(d[mainKey] ?? '');
//     const title = normalize(d.title ?? '');
//     const alts  = (d[altKey] || []).map(normalize);
//     return main.includes(q) || title.includes(q) || alts.some((a) => a.includes(q));
//   });
// }
// function getResponsiveCols() {
//   if (typeof window === 'undefined') return 3;
//   const w = window.innerWidth;
//   if (w <= 600) return 1;
//   if (w <= 900) return 2;
//   return 3;
// }

// const S = {
//   container: {
//     maxWidth: '1000px', margin: '0 auto', padding: '28px 24px 80px',
//     position: 'relative',
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
//     color: C.text,
//   },
//   pageLayout: { position: 'relative' },
//   sidebar: {
//     position: 'absolute', top: 0, right: '100%',
//     width: '240px', height: '100%', marginRight: '40px',
//   },
//   sidebarSticky: {
//     position: 'sticky', top: '20px',
//     maxHeight: 'calc(100vh - 40px)', overflowY: 'auto',
//     paddingRight: '4px',
//   },
//   sidebarBlock: { marginBottom: '32px' },
//   sidebarLabel: {
//     fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.2px',
//     color: C.textMuted, fontWeight: 700, marginBottom: '14px', paddingLeft: '14px',
//   },
//   tocList: { listStyle: 'none', margin: 0, padding: 0 },
//   tocLinkBase: {
//     display: 'flex', alignItems: 'center', gap: '10px',
//     padding: '9px 0 9px 14px', borderLeft: `2px solid ${C.borderSoft}`,
//     color: C.textMuted, textDecoration: 'none', fontSize: '14px',
//     lineHeight: 1.3, cursor: 'pointer', transition: 'all 0.15s',
//   },
//   tocNumBase: {
//     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//     width: '22px', height: '22px', borderRadius: '50%',
//     background: C.borderSoft, color: C.textMuted,
//     fontSize: '11px', fontWeight: 700, flexShrink: 0, transition: 'all 0.15s',
//   },
//   relatedMini: {
//     display: 'block', padding: '11px 14px', background: 'white',
//     border: `1px solid ${C.borderSoft}`, borderRadius: '9px',
//     textDecoration: 'none', color: 'inherit',
//     marginBottom: '8px', transition: 'all 0.15s', cursor: 'pointer',
//   },
//   relatedMiniTitle: { fontWeight: 600, color: C.primaryDark, fontSize: '13px', marginBottom: '2px' },
//   relatedMiniSub: { fontSize: '12px', color: C.textMuted },
//   mainCol: { minWidth: 0, width: '100%' },

//   pageIntro: {
//     textAlign: 'center', color: C.textMuted, fontSize: '15px',
//     margin: '0 auto 32px', maxWidth: '620px',
//   },
//   pageIntroLink: { color: C.primary, textDecoration: 'none', fontWeight: 600 },

//   toolSection: {
//     background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
//     border: `1px solid ${C.border}`, borderRadius: '20px',
//     padding: '28px 32px 36px', marginBottom: '36px',
//   },
//   toolH2: {
//     fontFamily: "'Crimson Pro', serif", fontSize: '26px',
//     color: C.primaryDark, margin: '0 0 4px', fontWeight: 700,
//   },
//   toolSub: { color: C.textMuted, fontSize: '14px', margin: '0 0 18px' },
//   modeTabsWrap: {
//     display: 'inline-flex', background: 'white', borderRadius: '12px',
//     padding: '4px', marginBottom: '14px',
//     border: `1px solid ${C.border}`, boxShadow: C.shadowSm,
//     gap: '2px', flexWrap: 'wrap',
//   },
//   modeTabBase: {
//     padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
//     fontWeight: 600, cursor: 'pointer', background: 'transparent',
//     border: 'none', transition: 'all 0.18s',
//     fontFamily: 'inherit', color: C.textMuted,
//   },
//   modeTabActive: {
//     background: C.primary, color: 'white',
//     boxShadow: '0 2px 6px rgba(79,70,229,0.30)',
//   },
//   inputBlock: {
//     display: 'grid',
//     gridTemplateColumns: 'minmax(0, 1fr) auto',
//     gap: '10px', marginBottom: '8px',
//     alignItems: 'center',
//   },
//   inputFieldWrap: {
//     position: 'relative', minWidth: 0,
//   },
//   inputField: {
//     width: '100%', boxSizing: 'border-box',
//     minWidth: 0, padding: '13px 18px',
//     border: `2px solid ${C.border}`, borderRadius: '11px',
//     fontSize: '15px', outline: 'none', background: 'white',
//     fontFamily: 'inherit', color: C.text,
//     transition: 'border-color 0.15s, box-shadow 0.15s',
//   },
//   inputFieldWithReset: { paddingRight: '48px' },
//   inputReset: {
//     position: 'absolute', right: '10px', top: '50%',
//     transform: 'translateY(-50%)',
//     width: '28px', height: '28px',
//     border: `1.5px solid ${C.border}`, borderRadius: '50%',
//     background: 'white', color: C.text,
//     fontSize: '18px', fontWeight: 700, cursor: 'pointer',
//     fontFamily: 'inherit', lineHeight: 1, padding: 0,
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     transition: 'background 0.15s, color 0.15s, border-color 0.15s',
//     zIndex: 2,
//     boxShadow: C.shadowSm,
//   },
//   inputResetBtn: {
//     padding: '13px 22px', background: 'white', color: C.text,
//     border: `2px solid ${C.border}`, borderRadius: '11px',
//     fontWeight: 600, fontSize: '15px', cursor: 'pointer',
//     fontFamily: 'inherit', whiteSpace: 'nowrap',
//     transition: 'background 0.15s, color 0.15s, border-color 0.15s',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   toolStatus: {
//     marginTop: '12px', padding: '11px 14px',
//     background: 'rgba(255,255,255,0.75)',
//     border: `1px solid ${C.border}`, borderRadius: '10px',
//     display: 'flex', alignItems: 'center', gap: '10px',
//     fontSize: '14px', color: C.text, lineHeight: 1.55,
//   },
//   statusIcon: {
//     width: '22px', height: '22px', borderRadius: '50%',
//     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//     color: 'white', fontSize: '13px', fontWeight: 700,
//     flexShrink: 0,
//   },
//   statusText: { flex: 1, minWidth: 0 },
//   goBtn: {
//     marginLeft: 'auto', flexShrink: 0,
//     padding: '6px 14px',
//     background: C.primary, color: 'white',
//     border: 'none', borderRadius: '7px',
//     fontSize: '13px', fontWeight: 600, cursor: 'pointer',
//     fontFamily: 'inherit', whiteSpace: 'nowrap',
//     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
//     gap: '4px',
//     transition: 'background 0.15s',
//   },

//   legend: {
//     background: 'white', borderRadius: '16px', padding: '18px 22px',
//     marginBottom: '22px', border: `1px solid ${C.borderSoft}`,
//     boxShadow: C.shadowSm,
//     display: 'flex', flexWrap: 'wrap', gap: '18px',
//     alignItems: 'center', justifyContent: 'space-between',
//   },
//   legendLeft: { display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '540px' },
//   legendTitle: {
//     fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
//     color: C.textMuted, fontWeight: 700,
//   },
//   legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
//   viewToggle: {
//     display: 'inline-flex', background: C.bg, borderRadius: '10px', padding: '3px',
//     border: `1px solid ${C.border}`, gap: '2px',
//   },
//   viewBtnBase: {
//     padding: '7px 16px', borderRadius: '7px',
//     fontSize: '13px', fontWeight: 600, cursor: 'pointer',
//     background: 'transparent', border: 'none', fontFamily: 'inherit',
//     color: C.textMuted, transition: 'all 0.15s',
//   },
//   viewBtnActive: {
//     background: C.primary, color: 'white',
//     boxShadow: '0 2px 4px rgba(79,70,229,0.25)',
//   },

//   filterStatus: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//     padding: '12px 18px',
//     background: 'linear-gradient(90deg, #fef3c7 0%, #fffbeb 100%)',
//     border: `1px solid ${C.warn}`, borderRadius: '10px',
//     marginBottom: '16px', fontSize: '14px',
//   },
//   filterStatusText: { color: C.warnText, fontWeight: 600 },
//   filterClear: {
//     background: 'white', border: `1px solid ${C.warn}`,
//     color: C.warnText, padding: '5px 12px', borderRadius: '7px',
//     fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
//   },

//   refGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '14px', marginBottom: '36px',
//   },
//   itemCard: {
//     background: 'white',
//     border: `1.5px solid ${C.cardBorder}`,
//     borderRadius: '12px',
//     padding: '18px 14px 14px',
//     cursor: 'pointer',
//     transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
//     position: 'relative',
//     display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
//     boxShadow: C.shadowSm,
//   },
//   catBadge: {
//     position: 'absolute', top: '8px', right: '8px',
//     fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
//     letterSpacing: '0.5px', padding: '2px 7px', borderRadius: '4px',
//   },
//   cardLeft: {
//     fontSize: '15px', marginTop: '14px',
//     color: C.text, textAlign: 'center', lineHeight: 1.2,
//   },
//   cardTitle: {
//     fontSize: '11px', fontWeight: 700, color: C.textMuted,
//     textTransform: 'uppercase', letterSpacing: '0.6px',
//     textAlign: 'center', marginTop: '6px', marginBottom: '0',
//     lineHeight: 1.3, padding: '0 4px',
//   },
//   cardArrow: { color: C.primary, fontSize: '14px', fontWeight: 700 },
//   cardRight: {
//     fontSize: '18px', fontWeight: 700,
//     color: C.primaryDark, textAlign: 'center', lineHeight: 1.2,
//   },

//   inlineDetails: {
//     gridColumn: '1 / -1',
//     background: 'linear-gradient(135deg, #f0f9ff 0%, #eef2ff 100%)',
//     border: `1.5px solid ${C.primary}`,
//     borderRadius: '14px',
//     padding: '22px 26px 20px',
//     position: 'relative',
//     boxShadow: C.shadowMd,
//     margin: '4px 0',
//   },
//   inlineDetailsHeader: {
//     display: 'flex', alignItems: 'flex-start',
//     justifyContent: 'space-between', gap: '16px',
//     marginBottom: '14px',
//   },
//   inlineDetailsTitle: {
//     fontSize: '22px',
//     color: C.primaryDark, fontWeight: 700,
//     margin: 0, flex: 1, minWidth: 0,
//   },
//   inlineDetailsSubtitle: {
//     fontSize: '12px', fontWeight: 700,
//     textTransform: 'uppercase', letterSpacing: '0.8px',
//     color: C.textMuted, marginBottom: '6px', lineHeight: 1.3,
//   },
//   inlineDetailsClose: {
//     display: 'inline-flex', alignItems: 'center', gap: '6px',
//     padding: '8px 14px',
//     background: 'white', color: C.text,
//     border: `1.5px solid ${C.border}`, borderRadius: '10px',
//     cursor: 'pointer', fontFamily: 'inherit',
//     fontSize: '13px', fontWeight: 600,
//     transition: 'all 0.15s',
//     boxShadow: C.shadowSm,
//     flexShrink: 0,
//   },
//   inlineDetailsCloseX: { fontSize: '18px', lineHeight: 1, fontWeight: 700 },
//   inlineDetailsTip: {
//     color: C.text, fontSize: '14px',
//     lineHeight: 1.6, marginBottom: '14px',
//   },
//   inlineDetailsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
//     gap: '10px', marginBottom: '14px',
//   },
//   inlineDetailItem: {
//     padding: '10px 14px', background: 'white',
//     borderRadius: '8px', border: `1px solid ${C.border}`,
//   },
//   inlineDetailLabel: {
//     fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.8px',
//     color: C.textMuted, marginBottom: '4px', fontWeight: 700,
//   },
//   inlineDetailValue: { fontSize: '15px', fontWeight: 700, color: C.text },
//   inlineLearnMore: {
//     display: 'inline-block', color: 'white', textDecoration: 'none',
//     fontWeight: 600, fontSize: '13px',
//     padding: '8px 16px', background: C.primary, borderRadius: '8px',
//     transition: 'background 0.15s',
//   },

//   sectionH: {
//     fontFamily: "'Crimson Pro', serif", fontSize: '30px',
//     color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
//     margin: '0 0 8px',
//   },
//   sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },

//   filtersDisabledNote: {
//     marginBottom: '16px', padding: '10px 16px',
//     background: C.bg, border: `1px dashed ${C.border}`,
//     borderRadius: '8px', color: C.textMuted,
//     fontSize: '13px', textAlign: 'center',
//   },
//   filterGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//     gap: '16px', marginBottom: '40px',
//   },
//   filterCard: {
//     background: 'white', border: `2px solid ${C.borderSoft}`,
//     borderRadius: '14px', padding: '20px',
//     cursor: 'pointer', transition: 'all 0.18s',
//     position: 'relative', boxShadow: C.shadowSm,
//   },
//   filterIcon: {
//     width: '44px', height: '44px',
//     background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
//     color: 'white', borderRadius: '12px',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontSize: '14px', fontWeight: 700,
//     marginBottom: '14px',
//     boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
//   },
//   filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
//   filterCardP: { color: C.textMuted, fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 },
//   filterCardFooter: {
//     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//     paddingTop: '12px', borderTop: `1px solid ${C.borderSoft}`,
//   },
//   filterCount: { fontSize: '13px', fontWeight: 700, color: C.primaryDark },
//   filterAction: {
//     fontSize: '12px', color: C.textMuted,
//     textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600,
//   },

//   propertiesSection: { marginTop: '32px' },
//   propertyGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//     gap: '16px',
//   },
//   propertyCard: {
//     background: 'white', border: `1px solid ${C.borderSoft}`,
//     borderRadius: '14px', padding: '22px', boxShadow: C.shadowSm,
//   },
//   propertyCardIcon: {
//     width: '36px', height: '36px',
//     background: C.primaryLight, color: C.primaryDark, borderRadius: '9px',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     fontSize: '17px', fontWeight: 700, marginBottom: '12px',
//   },
//   propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
//   propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.6, margin: 0 },
//   propertyCardExample: {
//     background: C.bg, padding: '10px 14px', borderRadius: '6px',
//     fontSize: '14px', marginTop: '10px',
//     color: C.primaryDark, textAlign: 'center',
//     border: `1px solid ${C.borderSoft}`,
//   },
//   quizSection: { marginTop: '56px' },
// };

// const CSS = `
// .ge-toc-link:hover { color: ${C.primary}; }
// .ge-related-mini:hover {
//   border-color: ${C.primary} !important;
//   transform: translateX(2px);
//   box-shadow: ${C.shadowSm};
// }
// .ge-input-field:focus {
//   border-color: ${C.primary} !important;
//   box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
// }
// .ge-input-reset:hover { background: ${C.error} !important; color: white !important; border-color: ${C.error} !important; }
// .ge-input-reset-btn:hover {
//   background: ${C.errorBg} !important;
//   color: ${C.errorText} !important;
//   border-color: ${C.error} !important;
// }
// .ge-go-btn:hover { background: ${C.primaryDark} !important; }
// .ge-mode-tab:not(.active):hover { color: ${C.primary} !important; }
// .ge-view-btn:not(.active):hover { color: ${C.primary}; }

// .ge-item-card:hover {
//   transform: translateY(-2px);
//   box-shadow: 0 6px 16px rgba(15,23,42,0.10);
//   border-color: ${C.primary};
// }
// .ge-item-card.active {
//   border-color: ${C.primary} !important;
//   box-shadow: 0 0 0 3px ${C.primaryLight}, 0 6px 16px rgba(79,70,229,0.18) !important;
//   transform: translateY(-2px);
// }
// .ge-item-card.highlight {
//   border-color: ${C.warn} !important;
//   box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25) !important;
//   transform: scale(1.05);
// }
// .ge-item-card.filter-match {
//   border-color: ${C.warn} !important;
//   box-shadow: 0 4px 14px rgba(245,158,11,0.35) !important;
//   transform: scale(1.04);
// }
// .ge-item-card.filter-dim { opacity: 0.25; }

// .ge-filter-card:hover {
//   transform: translateY(-3px);
//   box-shadow: ${C.shadowMd};
//   border-color: ${C.border} !important;
// }
// .ge-filter-card.active {
//   border-color: ${C.warn} !important;
//   background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
//   box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
// }
// .ge-filter-card.active::after {
//   content: '\u25CF Active';
//   position: absolute; top: 12px; right: 14px;
//   font-size: 11px; font-weight: 700;
//   color: ${C.warnText}; letter-spacing: 0.5px;
// }
// .ge-filter-card.active .ge-filter-icon {
//   background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
//   box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
// }
// .ge-filter-card.active .ge-filter-count,
// .ge-filter-card.active .ge-filter-action {
//   color: ${C.warnText} !important;
// }
// .ge-filter-card.disabled {
//   opacity: 0.5; cursor: not-allowed; pointer-events: none;
// }

// .ge-inline-details-close:hover {
//   background: ${C.errorBg} !important;
//   color: ${C.errorText} !important;
//   border-color: ${C.error} !important;
// }
// .ge-inline-learn-more:hover { background: ${C.primaryDark} !important; }
// @keyframes geDetailsExpand {
//   from { opacity: 0; transform: translateY(-6px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
// .ge-inline-details { animation: geDetailsExpand 0.25s ease; }

// .ge-sidebar-sticky::-webkit-scrollbar { width: 4px; }
// .ge-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }

// @media (max-width: 1320px) {
//   .ge-sidebar { display: none !important; }
// }
// @media (max-width: 900px) {
//   .ge-ref-grid { grid-template-columns: repeat(2, 1fr) !important; }
// }
// @media (max-width: 600px) {
//   .ge-ref-grid { grid-template-columns: 1fr !important; }
//   .ge-input-block { grid-template-columns: 1fr !important; }
//   .ge-input-block input, .ge-input-block button, .ge-input-block select { width: 100% !important; }
//   .ge-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
// }
// `;

// const GenericExplorer = ({
//   dataset = DERIVATIVES_DATASET,
//   quizGenerator,
//   relatedReferences = [],
// }) => {
//   // Safe extraction — hooks below must always run.
//   const safe         = dataset || {};
//   const items        = Array.isArray(safe.items) ? safe.items : [];
//   const categories   = safe.categories   || {};
//   const extraFilters = Array.isArray(safe.extraFilters) ? safe.extraFilters : [];
//   const properties   = Array.isArray(safe.properties)   ? safe.properties   : [];
//   const templates    = safe.templates    || {};
//   const searchModes  = Array.isArray(safe.searchModes)  ? safe.searchModes  : [];
//   const meta         = safe.meta         || {};
//   const theme        = safe.theme        || null;

//   // Filter defs auto-derived from categories + extraFilters
//   const FILTER_DEFS = useMemo(() => ([
//     ...Object.entries(categories).map(([id, c]) => ({
//       id,
//       icon:  c.icon,
//       title: c.label,
//       desc:  c.desc,
//       match: (d) => d.cat === id,
//     })),
//     ...extraFilters,
//   ]), [categories, extraFilters]);

//   const filterCounts = useMemo(() => {
//     const counts = {};
//     FILTER_DEFS.forEach((f) => { counts[f.id] = items.filter(f.match).length; });
//     return counts;
//   }, [FILTER_DEFS, items]);

//   // TOC items, labels derived from meta with sensible defaults
//   const TOC_ITEMS = useMemo(() => {
//     const out = [
//       { id: 'sec-tool',       label: meta.toolTitle       || 'Tool' },
//       { id: 'sec-table',      label: 'The table' },
//       { id: 'sec-patterns',   label: meta.categoriesTitle || 'Categories' },
//     ];
//     if (properties.length > 0)            out.push({ id: 'sec-properties', label: meta.propertiesTitle || 'Rules' });
//     if (typeof quizGenerator === 'function') out.push({ id: 'sec-quiz', label: 'Test yourself' });
//     return out;
//   }, [meta.toolTitle, meta.categoriesTitle, meta.propertiesTitle, properties.length, quizGenerator]);

//   const detailLabels = (templates && templates.detailLabels) || { left: 'left', right: 'right' };

//   // Built-in modes: "By name" (if any item has title) and "By category" (always when categories exist).
//   // Dataset's own searchModes are kept in the middle.
//   const effectiveSearchModes = useMemo(() => {
//     const result = [];
//     if (items.some((d) => typeof d.title === 'string' && d.title.length > 0)) {
//       result.push({
//         id: '__byTitle__',
//         label: 'By name',
//         placeholder: 'Search by name (e.g., chain rule)',
//         mainKey: 'title',
//         altKey: null,
//       });
//     }
//     result.push(...searchModes);
//     const catIds = Object.keys(categories);
//     if (catIds.length > 0) {
//       result.push({
//         id: '__byCategory__',
//         label: 'By category',
//         isCategoryPicker: true,
//       });
//     }
//     return result;
//   }, [items, searchModes, categories]);

//   const initialModeId = (effectiveSearchModes[0] && effectiveSearchModes[0].id) || null;

//   // State
//   const [viewMode, setViewMode] = useState('reference');
//   const [searchMode, setSearchMode] = useState(initialModeId);
//   const [inputs, setInputs] = useState(() => {
//     const o = {}; effectiveSearchModes.forEach((m) => { o[m.id] = ''; }); return o;
//   });

//   const [statusKind, setStatusKind] = useState(null);
//   const [statusIcon, setStatusIcon] = useState('');
//   const [statusContent, setStatusContent] = useState(null);

//   const [highlightedIds, setHighlightedIds] = useState(() => new Set());
//   const [activeFilter, setActiveFilter] = useState(null);
//   const [detailsId, setDetailsId] = useState(null);

//   const [activeSection, setActiveSection] = useState('sec-tool');
//   const [pendingScroll, setPendingScroll] = useState(null);
//   const [cols, setCols] = useState(3);

//   const cardRefs = useRef({});
//   const sectionRefs = useRef({});

//   useEffect(() => {
//     setCols(getResponsiveCols());
//     const onResize = () => setCols(getResponsiveCols());
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   useEffect(() => {
//     if (!pendingScroll) return;
//     let el = null;
//     if (pendingScroll.type === 'card') el = cardRefs.current[pendingScroll.id];
//     else if (pendingScroll.type === 'section') el = sectionRefs.current[pendingScroll.id];
//     if (el) el.scrollIntoView({
//       behavior: 'smooth',
//       block: pendingScroll.type === 'section' ? 'start' : 'center',
//     });
//     setPendingScroll(null);
//   }, [pendingScroll]);

//   useEffect(() => {
//     const sections = TOC_ITEMS.map((it) => sectionRefs.current[it.id]).filter(Boolean);
//     if (sections.length === 0) return;
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
//     }, { rootMargin: '-25% 0px -65% 0px' });
//     sections.forEach((s) => obs.observe(s));
//     return () => obs.disconnect();
//   }, [TOC_ITEMS]);

//   useEffect(() => {
//     if (detailsId === null) return;
//     const onKey = (e) => { if (e.key === 'Escape') setDetailsId(null); };
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [detailsId]);

//   // Helpers
//   const setStatus = (kind, icon, content) => {
//     setStatusKind(kind); setStatusIcon(icon); setStatusContent(content);
//   };
//   const hideStatus = () => { setStatusKind(null); setStatusIcon(''); setStatusContent(null); };

//   const handleViewChange = (next) => {
//     setViewMode(next);
//     if (next === 'puzzle') {
//       setActiveFilter(null);
//       setHighlightedIds(new Set());
//       setDetailsId(null);
//       hideStatus();
//     }
//   };

//   // Instant search: runs on every keystroke or category change. No scrolling.
//   // Empty input → silent clear (no highlights, no status). Non-empty → match + status.
//   const runInstantSearch = (modeId, value) => {
//     const mode = effectiveSearchModes.find((m) => m.id === modeId);
//     if (!mode) return;

//     // Category picker mode
//     if (mode.isCategoryPicker) {
//       if (!value) {
//         setHighlightedIds(new Set());
//         hideStatus();
//         return;
//       }
//       if (viewMode === 'puzzle') setViewMode('reference');
//       setActiveFilter(null);
//       setDetailsId(null);
//       const matches = items.filter((d) => d.cat === value);
//       setHighlightedIds(new Set(matches.map((d) => d.id)));
//       const catLabel = (categories[value] && categories[value].label) || value;
//       if (matches.length === 0) {
//         setStatus('info', '\u2211', `No entries in ${catLabel}.`);
//       } else {
//         setStatus('success', '\u2211',
//           `${matches.length} ${catLabel} entr${matches.length === 1 ? 'y' : 'ies'} highlighted below.`);
//       }
//       return;
//     }

//     // Text search mode
//     const q = value.trim();
//     if (!q) {
//       setHighlightedIds(new Set());
//       hideStatus();
//       return;
//     }
//     if (viewMode === 'puzzle') setViewMode('reference');
//     setActiveFilter(null);
//     setDetailsId(null);
//     const matches = matchAgainst(items, q, mode.mainKey, mode.altKey);
//     setHighlightedIds(new Set(matches.map((d) => d.id)));
//     if (matches.length === 0) {
//       setStatus('info', '\u2211', `No entries match "${q}".`);
//     } else if (matches.length === 1) {
//       const d = matches[0];
//       const label = d.title || `entry #${d.id}`;
//       setStatus('success', '\u2713', `Found: ${label}.`);
//     } else {
//       setStatus('success', '\u2211', `${matches.length} matches highlighted below.`);
//     }
//   };

//   const handleSearchModeChange = (next) => {
//     setSearchMode(next);
//     runInstantSearch(next, inputs[next] || '');
//   };

//   // Full reset: clears current input, highlights, active filter, details, and status.
//   const runReset = (modeId) => {
//     setInputs({ ...inputs, [modeId]: '' });
//     setHighlightedIds(new Set());
//     setActiveFilter(null);
//     setDetailsId(null);
//     hideStatus();
//   };

//   const toggleFilter = (id) => {
//     setHighlightedIds(new Set());
//     setDetailsId(null);
//     if (activeFilter === id) { setActiveFilter(null); hideStatus(); }
//     else { setActiveFilter(id); hideStatus(); setPendingScroll({ type: 'section', id: 'sec-table' }); }
//   };
//   const handleClearHighlights = () => {
//     setActiveFilter(null); setHighlightedIds(new Set()); setDetailsId(null); hideStatus();
//   };

//   const handleCardClick = (id) => {
//     if (detailsId === id) { setDetailsId(null); return; }
//     setDetailsId(id);
//     setHighlightedIds(new Set([id]));
//     setActiveFilter(null);
//     setPendingScroll({ type: 'card', id });
//   };

//   const tocLinkStyle = (id) => {
//     const base = { ...S.tocLinkBase };
//     if (activeSection === id) {
//       base.color = C.primaryDark;
//       base.borderLeftColor = C.primary;
//       base.fontWeight = 600;
//       base.background = `linear-gradient(90deg, ${C.primaryLight} 0%, transparent 100%)`;
//     }
//     return base;
//   };
//   const tocNumStyle = (id) => {
//     const base = { ...S.tocNumBase };
//     if (activeSection === id) { base.background = C.primary; base.color = 'white'; }
//     return base;
//   };

//   let bannerText = '';
//   if (activeFilter) {
//     const def = FILTER_DEFS.find((f) => f.id === activeFilter);
//     if (def) bannerText = `Filtering: ${def.title} \u2014 ${filterCounts[def.id]} match${filterCounts[def.id] === 1 ? '' : 'es'} highlighted`;
//   } else if (highlightedIds.size > 0) {
//     bannerText = `${highlightedIds.size} entr${highlightedIds.size === 1 ? 'y' : 'ies'} highlighted by tool`;
//   }
//   const showBanner = (activeFilter !== null || highlightedIds.size > 0) && viewMode === 'reference';

//   const statusIconBg = ({ success: C.success, error: C.error, info: C.primary })[statusKind] || C.primary;

//   // Renderers
//   const renderItemCard = (d) => {
//     const cls = ['ge-item-card'];
//     if (detailsId === d.id) cls.push('active');
//     if (highlightedIds.has(d.id)) cls.push('highlight');
//     if (activeFilter) {
//       const def = FILTER_DEFS.find((f) => f.id === activeFilter);
//       if (def && def.match(d)) cls.push('filter-match');
//       else cls.push('filter-dim');
//     }
//     const cat = categories[d.cat];
//     return (
//       <div
//         key={d.id}
//         ref={(el) => { cardRefs.current[d.id] = el; }}
//         className={cls.join(' ')}
//         style={S.itemCard}
//         onClick={() => handleCardClick(d.id)}
//       >
//         {cat && (
//           <span style={{ ...S.catBadge, background: cat.bg, color: cat.fg }}>{cat.label}</span>
//         )}
//         <div style={S.cardLeft}>{processContent(templates.left(d))}</div>
//         {d.title && <div style={S.cardTitle}>{d.title}</div>}
//         <div style={S.cardArrow}>&darr;</div>
//         <div style={S.cardRight}>{processContent(templates.right(d))}</div>
//       </div>
//     );
//   };

//   const renderInlineDetails = (d) => {
//     const cat = categories[d.cat];
//     return (
//       <div
//         key={`details-${d.id}`}
//         className="ge-inline-details"
//         style={S.inlineDetails}
//       >
//         <div style={S.inlineDetailsHeader}>
//           <div style={{ flex: 1, minWidth: 0 }}>
//             {d.title && <div style={S.inlineDetailsSubtitle}>{d.title}</div>}
//             <div style={S.inlineDetailsTitle}>
//               {processContent(templates.full(d))}
//             </div>
//           </div>
//           <button
//             type="button"
//             className="ge-inline-details-close"
//             style={S.inlineDetailsClose}
//             onClick={() => setDetailsId(null)}
//             title="Close (Esc)"
//           >
//             <span style={S.inlineDetailsCloseX}>&times;</span>
//             <span>Close</span>
//           </button>
//         </div>
//         {d.tip && <div style={S.inlineDetailsTip}>{processContent(d.tip)}</div>}
//         <div style={S.inlineDetailsGrid}>
//           <div style={S.inlineDetailItem}>
//             <div style={S.inlineDetailLabel}>{detailLabels.left}</div>
//             <div style={S.inlineDetailValue}>{processContent(templates.input ? templates.input(d) : templates.left(d))}</div>
//           </div>
//           <div style={S.inlineDetailItem}>
//             <div style={S.inlineDetailLabel}>{detailLabels.right}</div>
//             <div style={S.inlineDetailValue}>{processContent(templates.right(d))}</div>
//           </div>
//           {cat && (
//             <div style={S.inlineDetailItem}>
//               <div style={S.inlineDetailLabel}>Category</div>
//               <div style={S.inlineDetailValue}>{cat.label}</div>
//             </div>
//           )}
//         </div>
//         {d.link && (
//           <a
//             className="ge-inline-learn-more"
//             style={S.inlineLearnMore}
//             href={d.link}
//           >
//             Read more &rarr;
//           </a>
//         )}
//       </div>
//     );
//   };

//   const renderRefGrid = () => {
//     const activeIdx = detailsId !== null
//       ? items.findIndex((dd) => dd.id === detailsId)
//       : -1;
//     const activeRow = activeIdx >= 0 ? Math.floor(activeIdx / cols) : -1;
//     const detailsItem = activeIdx >= 0 ? items[activeIdx] : null;

//     return (
//       <div className="ge-ref-grid" style={S.refGrid}>
//         {items.flatMap((d, idx) => {
//           const elements = [renderItemCard(d)];
//           if (detailsItem) {
//             const thisRow = Math.floor(idx / cols);
//             const isLastInRow = ((idx + 1) % cols === 0) || (idx === items.length - 1);
//             if (thisRow === activeRow && isLastInRow) {
//               elements.push(renderInlineDetails(detailsItem));
//             }
//           }
//           return elements;
//         })}
//       </div>
//     );
//   };

//   // TablePuzzle2 items
//   const puzzleItems = useMemo(() => items.map((d) => ({
//     id:    d.id,
//     left:  templates.left(d),
//     right: templates.right(d),
//     tip:   d.tip,
//     link:  d.link,
//   })), [items, templates]);

//   const currentSearchMode = effectiveSearchModes.find((m) => m.id === searchMode);

//   // Validate after all hooks have run.
//   const valid = items.length > 0
//     && typeof templates.left  === 'function'
//     && typeof templates.right === 'function';
//   if (!valid) return null;

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: CSS }} />
//       <div style={S.container}>
//         {(meta.intro || meta.articleHref) && (
//           <p style={S.pageIntro}>
//             {meta.intro && processContent(meta.intro)}{' '}
//             {meta.articleHref && meta.introLinkText && (
//               <a href={meta.articleHref} style={S.pageIntroLink}>{meta.introLinkText}</a>
//             )}
//           </p>
//         )}

//         <div className="ge-layout" style={S.pageLayout}>
//           <aside className="ge-sidebar" style={S.sidebar}>
//             <div className="ge-sidebar-sticky" style={S.sidebarSticky}>
//               <div style={S.sidebarBlock}>
//                 <div style={S.sidebarLabel}>On this page</div>
//                 <ul style={S.tocList}>
//                   {TOC_ITEMS.map((item, idx) => (
//                     <li key={item.id}>
//                       <a
//                         className={`ge-toc-link ${activeSection === item.id ? 'active' : ''}`}
//                         style={tocLinkStyle(item.id)}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           const t = sectionRefs.current[item.id];
//                           if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                         }}
//                       >
//                         <span style={tocNumStyle(item.id)}>{idx + 1}</span>
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               {relatedReferences && relatedReferences.length > 0 && (
//                 <div style={S.sidebarBlock}>
//                   <div style={S.sidebarLabel}>Related references</div>
//                   {relatedReferences.map((ref, idx) => (
//                     <a key={idx} href={ref.href} className="ge-related-mini" style={S.relatedMini}>
//                       <div style={S.relatedMiniTitle}>{ref.title}</div>
//                       {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </aside>

//           <div style={S.mainCol}>
//             {effectiveSearchModes.length > 0 && (
//               <section
//                 id="sec-tool"
//                 ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
//                 style={S.toolSection}
//               >
//                 <h2 style={S.toolH2}>{meta.toolTitle || 'Search'}</h2>
//                 {meta.toolSubtitle && <p style={S.toolSub}>{meta.toolSubtitle}</p>}
//                 {effectiveSearchModes.length > 1 && (
//                   <div style={S.modeTabsWrap}>
//                     {effectiveSearchModes.map((tab) => {
//                       const isActive = searchMode === tab.id;
//                       return (
//                         <button
//                           key={tab.id} type="button"
//                           className={`ge-mode-tab ${isActive ? 'active' : ''}`}
//                           style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
//                           onClick={() => handleSearchModeChange(tab.id)}
//                         >
//                           {tab.label}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 )}
//                 {currentSearchMode && (
//                   <div className="ge-input-block" style={S.inputBlock}>
//                     <div style={S.inputFieldWrap}>
//                       {currentSearchMode.isCategoryPicker ? (
//                         <select
//                           className="ge-input-field"
//                           style={S.inputField}
//                           value={inputs[currentSearchMode.id] || ''}
//                           onChange={(e) => {
//                             const v = e.target.value;
//                             setInputs({ ...inputs, [currentSearchMode.id]: v });
//                             runInstantSearch(currentSearchMode.id, v);
//                           }}
//                         >
//                           <option value="">{'\u2014 Choose a category \u2014'}</option>
//                           {Object.entries(categories).map(([id, c]) => (
//                             <option key={id} value={id}>{c.label}</option>
//                           ))}
//                         </select>
//                       ) : (
//                         <>
//                           <input
//                             type="text" className="ge-input-field"
//                             style={{
//                               ...S.inputField,
//                               ...(inputs[currentSearchMode.id] ? S.inputFieldWithReset : {}),
//                             }}
//                             placeholder={currentSearchMode.placeholder || ''}
//                             value={inputs[currentSearchMode.id] || ''}
//                             onChange={(e) => {
//                               const v = e.target.value;
//                               setInputs({ ...inputs, [currentSearchMode.id]: v });
//                               runInstantSearch(currentSearchMode.id, v);
//                             }}
//                           />
//                           {inputs[currentSearchMode.id] && (
//                             <button
//                               type="button"
//                               className="ge-input-reset"
//                               style={S.inputReset}
//                               title="Clear"
//                               onClick={() => {
//                                 setInputs({ ...inputs, [currentSearchMode.id]: '' });
//                                 runInstantSearch(currentSearchMode.id, '');
//                               }}
//                             >
//                               &times;
//                             </button>
//                           )}
//                         </>
//                       )}
//                     </div>
//                     <button type="button" className="ge-input-reset-btn" style={S.inputResetBtn}
//                       onClick={() => runReset(currentSearchMode.id)}
//                       title="Clear input, highlights, filter and status">Reset</button>
//                   </div>
//                 )}
//                 {statusKind && (
//                   <div style={S.toolStatus}>
//                     <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
//                     <span style={S.statusText}>{statusContent}</span>
//                     {statusKind === 'success' && highlightedIds.size > 0 && (
//                       <button
//                         type="button"
//                         className="ge-go-btn"
//                         style={S.goBtn}
//                         onClick={() => setPendingScroll(
//                           highlightedIds.size === 1
//                             ? { type: 'card', id: [...highlightedIds][0] }
//                             : { type: 'section', id: 'sec-table' }
//                         )}
//                         title={highlightedIds.size === 1 ? 'Scroll to result' : 'Scroll to table'}
//                       >
//                         Go &rarr;
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </section>
//             )}

//             <section id="sec-table" ref={(el) => { sectionRefs.current['sec-table'] = el; }}>
//               <div style={S.legend}>
//                 <div style={S.legendLeft}>
//                   <div style={S.legendTitle}>View</div>
//                   <p style={S.legendNote}>
//                     {viewMode === 'reference'
//                       ? (meta.referenceModeNote || 'Reference mode: click any card to see the explanation.')
//                       : (meta.puzzleModeNote    || 'Puzzle mode: drag tiles into the matching slot.')}
//                   </p>
//                 </div>
//                 <div style={S.viewToggle}>
//                   {['reference', 'puzzle'].map((v) => {
//                     const isActive = viewMode === v;
//                     return (
//                       <button
//                         key={v} type="button"
//                         className={`ge-view-btn ${isActive ? 'active' : ''}`}
//                         style={{ ...S.viewBtnBase, ...(isActive ? S.viewBtnActive : {}) }}
//                         onClick={() => handleViewChange(v)}
//                       >
//                         {v === 'reference' ? 'Reference' : 'Puzzle'}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {showBanner && (
//                 <div style={S.filterStatus}>
//                   <span style={S.filterStatusText}>{bannerText}</span>
//                   <button type="button" style={S.filterClear} onClick={handleClearHighlights}>
//                     Clear highlight
//                   </button>
//                 </div>
//               )}

//               {viewMode === 'reference' && renderRefGrid()}

//               {viewMode === 'puzzle' && (
//                 <TablePuzzle2 items={puzzleItems} theme={theme} />
//               )}
//             </section>

//             {FILTER_DEFS.length > 0 && (
//               <section id="sec-patterns" ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}>
//                 <h2 style={S.sectionH}>{meta.categoriesTitle || 'Categories'}</h2>
//                 {meta.categoriesSubtitle && (
//                   <p style={S.sectionSub}>{meta.categoriesSubtitle}</p>
//                 )}
//                 {viewMode === 'puzzle' && (
//                   <div style={S.filtersDisabledNote}>
//                     Filters are available in <strong>Reference</strong> view.
//                   </div>
//                 )}
//                 <div style={S.filterGrid}>
//                   {FILTER_DEFS.map((f) => {
//                     const isActive = activeFilter === f.id;
//                     const disabled = viewMode === 'puzzle';
//                     const cls = ['ge-filter-card'];
//                     if (isActive) cls.push('active');
//                     if (disabled) cls.push('disabled');
//                     return (
//                       <div key={f.id} className={cls.join(' ')} style={S.filterCard}
//                         onClick={() => !disabled && toggleFilter(f.id)}>
//                         <div className="ge-filter-icon" style={S.filterIcon}>{f.icon}</div>
//                         <h3 style={S.filterCardH3}>{f.title}</h3>
//                         {f.desc && (
//                           <p style={S.filterCardP}>{processContent(f.desc)}</p>
//                         )}
//                         <div style={S.filterCardFooter}>
//                           <span className="ge-filter-count" style={S.filterCount}>
//                             {filterCounts[f.id]} match{filterCounts[f.id] === 1 ? '' : 'es'}
//                           </span>
//                           <span className="ge-filter-action" style={S.filterAction}>
//                             Click to highlight
//                           </span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}

//             {properties.length > 0 && (
//               <section
//                 id="sec-properties"
//                 ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
//                 style={S.propertiesSection}
//               >
//                 <h2 style={S.sectionH}>{meta.propertiesTitle || 'Rules'}</h2>
//                 {meta.propertiesSubtitle && (
//                   <p style={S.sectionSub}>{meta.propertiesSubtitle}</p>
//                 )}
//                 <div style={S.propertyGrid}>
//                   {properties.map((card, i) => (
//                     <div key={i} style={S.propertyCard}>
//                       <div style={S.propertyCardIcon}>{card.icon}</div>
//                       <h4 style={S.propertyCardH4}>{card.title}</h4>
//                       <p style={S.propertyCardP}>{processContent(card.body)}</p>
//                       {card.example && (
//                         <div style={S.propertyCardExample}>{processContent(card.example)}</div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             )}

//             {typeof quizGenerator === 'function' && (
//               <section
//                 id="sec-quiz"
//                 ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
//                 style={S.quizSection}
//               >
//                 <QuizWidget
//                   generator={quizGenerator}
//                   title="Test yourself"
//                   subtitle="Three question types, rotated at random."
//                   allowReset={true}
//                   historyLimit={30}
//                 />
//               </section>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default GenericExplorer;


'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import { processContent } from '../../../utils/contentProcessor';
import QuizWidget from '../../examples/quiz/QuizWidget';
import TablePuzzle2 from '../../puzzles/TablePuzzle2'
import DERIVATIVES_DATASET from './data/derivativeDataset';


const C = {
  primary:      '#4f46e5',
  primaryDark:  '#3730a3',
  primaryLight: '#eef2ff',
  bg:           '#fafbff',
  border:       '#e0e7ff',
  borderSoft:   '#eef0f7',
  cardBorder:   '#c7d2fe',
  text:         '#1e1b4b',
  textMuted:    '#64748b',
  success:      '#10b981',
  error:        '#ef4444',
  errorBg:      '#fee2e2',
  errorText:    '#991b1b',
  warn:         '#f59e0b',
  warnBg:       '#fef3c7',
  warnText:     '#92400e',
  shadowSm:     '0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)',
  shadowMd:     '0 4px 12px rgba(15,23,42,0.08)',
};

function normalize(s) {
  return String(s).toLowerCase()
    .replace(/\\/g, '')
    .replace(/[\s\u00B7]/g, '')
    .replace(/[{}]/g, '')
    .replace(/operatorname/g, '');
}
function matchAgainst(items, query, mainKey, altKey) {
  const q = normalize(query);
  if (!q) return [];
  return items.filter((d) => {
    const main  = normalize(d[mainKey] ?? '');
    const title = normalize(d.title ?? '');
    const alts  = (d[altKey] || []).map(normalize);
    return main.includes(q) || title.includes(q) || alts.some((a) => a.includes(q));
  });
}
function getResponsiveCols() {
  if (typeof window === 'undefined') return 3;
  const w = window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 900) return 2;
  return 3;
}

const S = {
  container: {
    maxWidth: '1000px', margin: '0 auto', padding: '28px 24px 80px',
    position: 'relative',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: C.text,
  },
  pageLayout: { position: 'relative' },
  sidebar: {
    position: 'absolute', top: 0, right: '100%',
    width: '240px', height: '100%', marginRight: '40px',
  },
  sidebarSticky: {
    position: 'sticky', top: '20px',
    maxHeight: 'calc(100vh - 40px)', overflowY: 'auto',
    paddingRight: '4px',
  },
  sidebarBlock: { marginBottom: '32px' },
  sidebarLabel: {
    fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.2px',
    color: C.textMuted, fontWeight: 700, marginBottom: '14px', paddingLeft: '14px',
  },
  tocList: { listStyle: 'none', margin: 0, padding: 0 },
  tocLinkBase: {
    display: 'flex', alignItems: 'center', gap: '10px',
    padding: '9px 0 9px 14px', borderLeft: `2px solid ${C.borderSoft}`,
    color: C.textMuted, textDecoration: 'none', fontSize: '14px',
    lineHeight: 1.3, cursor: 'pointer', transition: 'all 0.15s',
  },
  tocNumBase: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: '22px', height: '22px', borderRadius: '50%',
    background: C.borderSoft, color: C.textMuted,
    fontSize: '11px', fontWeight: 700, flexShrink: 0, transition: 'all 0.15s',
  },
  relatedMini: {
    display: 'block', padding: '11px 14px', background: 'white',
    border: `1px solid ${C.borderSoft}`, borderRadius: '9px',
    textDecoration: 'none', color: 'inherit',
    marginBottom: '8px', transition: 'all 0.15s', cursor: 'pointer',
  },
  relatedMiniTitle: { fontWeight: 600, color: C.primaryDark, fontSize: '13px', marginBottom: '2px' },
  relatedMiniSub: { fontSize: '12px', color: C.textMuted },
  mainCol: { minWidth: 0, width: '100%' },

  pageIntro: {
    textAlign: 'center', color: C.textMuted, fontSize: '15px',
    margin: '0 auto 32px', maxWidth: '620px',
  },
  pageIntroLink: { color: C.primary, textDecoration: 'none', fontWeight: 600 },

  toolSection: {
    background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%)',
    border: `1px solid ${C.border}`, borderRadius: '20px',
    padding: '28px 32px 36px', marginBottom: '36px',
  },
  toolH2: {
    fontFamily: "'Crimson Pro', serif", fontSize: '26px',
    color: C.primaryDark, margin: '0 0 4px', fontWeight: 700,
  },
  toolSub: { color: C.textMuted, fontSize: '14px', margin: '0 0 18px' },
  modeTabsWrap: {
    display: 'inline-flex', background: 'white', borderRadius: '12px',
    padding: '4px', marginBottom: '14px',
    border: `1px solid ${C.border}`, boxShadow: C.shadowSm,
    gap: '2px', flexWrap: 'wrap',
  },
  modeTabBase: {
    padding: '9px 18px', borderRadius: '9px', fontSize: '14px',
    fontWeight: 600, cursor: 'pointer', background: 'transparent',
    border: 'none', transition: 'all 0.18s',
    fontFamily: 'inherit', color: C.textMuted,
  },
  modeTabActive: {
    background: C.primary, color: 'white',
    boxShadow: '0 2px 6px rgba(79,70,229,0.30)',
  },
  inputBlock: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gap: '10px', marginBottom: '8px',
    alignItems: 'center',
  },
  inputFieldWrap: {
    position: 'relative', minWidth: 0,
  },
  inputField: {
    width: '100%', boxSizing: 'border-box',
    minWidth: 0, padding: '13px 18px',
    border: `2px solid ${C.border}`, borderRadius: '11px',
    fontSize: '15px', outline: 'none', background: 'white',
    fontFamily: 'inherit', color: C.text,
    transition: 'border-color 0.15s, box-shadow 0.15s',
  },
  inputFieldWithReset: { paddingRight: '48px' },
  inputReset: {
    position: 'absolute', right: '10px', top: '50%',
    transform: 'translateY(-50%)',
    width: '28px', height: '28px',
    border: `1.5px solid ${C.border}`, borderRadius: '50%',
    background: 'white', color: C.text,
    fontSize: '18px', fontWeight: 700, cursor: 'pointer',
    fontFamily: 'inherit', lineHeight: 1, padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
    zIndex: 2,
    boxShadow: C.shadowSm,
  },
  inputResetBtn: {
    padding: '13px 22px', background: 'white', color: C.text,
    border: `2px solid ${C.border}`, borderRadius: '11px',
    fontWeight: 600, fontSize: '15px', cursor: 'pointer',
    fontFamily: 'inherit', whiteSpace: 'nowrap',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolStatus: {
    marginTop: '12px', padding: '11px 14px',
    background: 'rgba(255,255,255,0.75)',
    border: `1px solid ${C.border}`, borderRadius: '10px',
    display: 'flex', alignItems: 'center', gap: '10px',
    fontSize: '14px', color: C.text, lineHeight: 1.55,
  },
  statusIcon: {
    width: '22px', height: '22px', borderRadius: '50%',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    color: 'white', fontSize: '13px', fontWeight: 700,
    flexShrink: 0,
  },
  statusText: { flex: 1, minWidth: 0 },
  goBtn: {
    marginLeft: 'auto', flexShrink: 0,
    padding: '6px 14px',
    background: C.primary, color: 'white',
    border: 'none', borderRadius: '7px',
    fontSize: '13px', fontWeight: 600, cursor: 'pointer',
    fontFamily: 'inherit', whiteSpace: 'nowrap',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: '4px',
    transition: 'background 0.15s',
  },

  legend: {
    background: 'white', borderRadius: '16px', padding: '18px 22px',
    marginBottom: '22px', border: `1px solid ${C.borderSoft}`,
    boxShadow: C.shadowSm,
    display: 'flex', flexWrap: 'wrap', gap: '18px',
    alignItems: 'center', justifyContent: 'space-between',
  },
  legendLeft: { display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '540px' },
  legendTitle: {
    fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px',
    color: C.textMuted, fontWeight: 700,
  },
  legendNote: { fontSize: '14px', color: C.textMuted, margin: 0 },
  viewToggle: {
    display: 'inline-flex', background: C.bg, borderRadius: '10px', padding: '3px',
    border: `1px solid ${C.border}`, gap: '2px',
  },
  viewBtnBase: {
    padding: '7px 16px', borderRadius: '7px',
    fontSize: '13px', fontWeight: 600, cursor: 'pointer',
    background: 'transparent', border: 'none', fontFamily: 'inherit',
    color: C.textMuted, transition: 'all 0.15s',
  },
  viewBtnActive: {
    background: C.primary, color: 'white',
    boxShadow: '0 2px 4px rgba(79,70,229,0.25)',
  },

  filterStatus: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '12px 18px',
    background: 'linear-gradient(90deg, #fef3c7 0%, #fffbeb 100%)',
    border: `1px solid ${C.warn}`, borderRadius: '10px',
    marginBottom: '16px', fontSize: '14px',
  },
  filterStatusText: { color: C.warnText, fontWeight: 600 },
  filterClear: {
    background: 'white', border: `1px solid ${C.warn}`,
    color: C.warnText, padding: '5px 12px', borderRadius: '7px',
    fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
  },

  refGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '14px', marginBottom: '36px',
  },
  itemCard: {
    background: 'white',
    border: `1.5px solid ${C.cardBorder}`,
    borderRadius: '12px',
    padding: '18px 14px 14px',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s, opacity 0.2s',
    position: 'relative',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
    boxShadow: C.shadowSm,
  },
  catBadge: {
    position: 'absolute', top: '8px', right: '8px',
    fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.5px', padding: '2px 7px', borderRadius: '4px',
  },
  cardLeft: {
    fontSize: '15px', marginTop: '14px',
    color: C.text, textAlign: 'center', lineHeight: 1.2,
  },
  cardTitle: {
    fontSize: '11px', fontWeight: 700, color: C.textMuted,
    textTransform: 'uppercase', letterSpacing: '0.6px',
    textAlign: 'center', marginTop: '6px', marginBottom: '0',
    lineHeight: 1.3, padding: '0 4px',
  },
  cardArrow: { color: C.primary, fontSize: '14px', fontWeight: 700 },
  cardRight: {
    fontSize: '18px', fontWeight: 700,
    color: C.primaryDark, textAlign: 'center', lineHeight: 1.2,
  },

  inlineDetails: {
    gridColumn: '1 / -1',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #eef2ff 100%)',
    border: `1.5px solid ${C.primary}`,
    borderRadius: '14px',
    padding: '22px 26px 20px',
    position: 'relative',
    boxShadow: C.shadowMd,
    margin: '4px 0',
  },
  inlineDetailsHeader: {
    display: 'flex', alignItems: 'flex-start',
    justifyContent: 'space-between', gap: '16px',
    marginBottom: '14px',
  },
  inlineDetailsTitle: {
    fontSize: '22px',
    color: C.primaryDark, fontWeight: 700,
    margin: 0, flex: 1, minWidth: 0,
  },
  inlineDetailsSubtitle: {
    fontSize: '12px', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.8px',
    color: C.textMuted, marginBottom: '6px', lineHeight: 1.3,
  },
  inlineDetailsClose: {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '8px 14px',
    background: 'white', color: C.text,
    border: `1.5px solid ${C.border}`, borderRadius: '10px',
    cursor: 'pointer', fontFamily: 'inherit',
    fontSize: '13px', fontWeight: 600,
    transition: 'all 0.15s',
    boxShadow: C.shadowSm,
    flexShrink: 0,
  },
  inlineDetailsCloseX: { fontSize: '18px', lineHeight: 1, fontWeight: 700 },
  inlineDetailsTip: {
    color: C.text, fontSize: '14px',
    lineHeight: 1.6, marginBottom: '14px',
  },
  inlineDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '10px', marginBottom: '14px',
  },
  inlineDetailItem: {
    padding: '10px 14px', background: 'white',
    borderRadius: '8px', border: `1px solid ${C.border}`,
  },
  inlineDetailLabel: {
    fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.8px',
    color: C.textMuted, marginBottom: '4px', fontWeight: 700,
  },
  inlineDetailValue: { fontSize: '15px', fontWeight: 700, color: C.text },
  inlineLearnMore: {
    display: 'inline-block', color: 'white', textDecoration: 'none',
    fontWeight: 600, fontSize: '13px',
    padding: '8px 16px', background: C.primary, borderRadius: '8px',
    transition: 'background 0.15s',
  },

  sectionH: {
    fontFamily: "'Crimson Pro', serif", fontSize: '30px',
    color: '#1e3a8a', fontWeight: 700, letterSpacing: '-0.3px',
    margin: '0 0 8px',
  },
  sectionSub: { color: C.textMuted, marginBottom: '26px', fontSize: '15px' },

  filtersDisabledNote: {
    marginBottom: '16px', padding: '10px 16px',
    background: C.bg, border: `1px dashed ${C.border}`,
    borderRadius: '8px', color: C.textMuted,
    fontSize: '13px', textAlign: 'center',
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px', marginBottom: '40px',
  },
  filterCard: {
    background: 'white', border: `2px solid ${C.borderSoft}`,
    borderRadius: '14px', padding: '20px',
    cursor: 'pointer', transition: 'all 0.18s',
    position: 'relative', boxShadow: C.shadowSm,
  },
  filterIcon: {
    width: '44px', height: '44px',
    background: `linear-gradient(135deg, ${C.primary} 0%, #6366f1 100%)`,
    color: 'white', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '14px', fontWeight: 700,
    marginBottom: '14px',
    boxShadow: '0 4px 10px rgba(79,70,229,0.25)',
  },
  filterCardH3: { fontSize: '16px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
  filterCardP: { color: C.textMuted, fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 },
  filterCardFooter: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: '12px', borderTop: `1px solid ${C.borderSoft}`,
  },
  filterCount: { fontSize: '13px', fontWeight: 700, color: C.primaryDark },
  filterAction: {
    fontSize: '12px', color: C.textMuted,
    textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600,
  },

  propertiesSection: { marginTop: '32px' },
  propertyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px',
  },
  propertyCard: {
    background: 'white', border: `1px solid ${C.borderSoft}`,
    borderRadius: '14px', padding: '22px', boxShadow: C.shadowSm,
  },
  propertyCardIcon: {
    width: '36px', height: '36px',
    background: C.primaryLight, color: C.primaryDark, borderRadius: '9px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '17px', fontWeight: 700, marginBottom: '12px',
  },
  propertyCardH4: { fontSize: '15px', fontWeight: 700, color: C.text, margin: '0 0 6px' },
  propertyCardP: { color: C.textMuted, fontSize: '13px', lineHeight: 1.6, margin: 0 },
  propertyCardExample: {
    background: C.bg, padding: '10px 14px', borderRadius: '6px',
    fontSize: '14px', marginTop: '10px',
    color: C.primaryDark, textAlign: 'center',
    border: `1px solid ${C.borderSoft}`,
  },
  quizSection: { marginTop: '56px' },
};

const CSS = `
.ge-toc-link:hover { color: ${C.primary}; }
.ge-related-mini:hover {
  border-color: ${C.primary} !important;
  transform: translateX(2px);
  box-shadow: ${C.shadowSm};
}
.ge-input-field:focus {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 4px rgba(79,70,229,0.12);
}
.ge-input-reset:hover { background: ${C.error} !important; color: white !important; border-color: ${C.error} !important; }
.ge-input-reset-btn:hover {
  background: ${C.errorBg} !important;
  color: ${C.errorText} !important;
  border-color: ${C.error} !important;
}
.ge-go-btn:hover { background: ${C.primaryDark} !important; }
.ge-mode-tab:not(.active):hover { color: ${C.primary} !important; }
.ge-view-btn:not(.active):hover { color: ${C.primary}; }

.ge-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(15,23,42,0.10);
  border-color: ${C.primary};
}
.ge-item-card.active {
  border-color: ${C.primary} !important;
  box-shadow: 0 0 0 3px ${C.primaryLight}, 0 6px 16px rgba(79,70,229,0.18) !important;
  transform: translateY(-2px);
}
.ge-item-card.highlight {
  border-color: ${C.warn} !important;
  box-shadow: 0 0 0 3px rgba(245,158,11,0.35), 0 6px 16px rgba(245,158,11,0.25) !important;
  transform: scale(1.05);
}
.ge-item-card.filter-match {
  border-color: ${C.warn} !important;
  box-shadow: 0 4px 14px rgba(245,158,11,0.35) !important;
  transform: scale(1.04);
}
.ge-item-card.filter-dim { opacity: 0.25; }

.ge-filter-card:hover {
  transform: translateY(-3px);
  box-shadow: ${C.shadowMd};
  border-color: ${C.border} !important;
}
.ge-filter-card.active {
  border-color: ${C.warn} !important;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%) !important;
  box-shadow: 0 0 0 4px rgba(245,158,11,0.18), ${C.shadowMd};
}
.ge-filter-card.active::after {
  content: '\u25CF Active';
  position: absolute; top: 12px; right: 14px;
  font-size: 11px; font-weight: 700;
  color: ${C.warnText}; letter-spacing: 0.5px;
}
.ge-filter-card.active .ge-filter-icon {
  background: linear-gradient(135deg, ${C.warn} 0%, #fb923c 100%) !important;
  box-shadow: 0 4px 10px rgba(245,158,11,0.3) !important;
}
.ge-filter-card.active .ge-filter-count,
.ge-filter-card.active .ge-filter-action {
  color: ${C.warnText} !important;
}
.ge-filter-card.disabled {
  opacity: 0.5; cursor: not-allowed; pointer-events: none;
}

.ge-inline-details-close:hover {
  background: ${C.errorBg} !important;
  color: ${C.errorText} !important;
  border-color: ${C.error} !important;
}
.ge-inline-learn-more:hover { background: ${C.primaryDark} !important; }
@keyframes geDetailsExpand {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.ge-inline-details { animation: geDetailsExpand 0.25s ease; }

.ge-sidebar-sticky::-webkit-scrollbar { width: 4px; }
.ge-sidebar-sticky::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 4px; }

@media (max-width: 1320px) {
  .ge-sidebar { display: none !important; }
}
@media (max-width: 900px) {
  .ge-ref-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 600px) {
  .ge-ref-grid { grid-template-columns: 1fr !important; }
  .ge-input-block { grid-template-columns: 1fr !important; }
  .ge-input-block input, .ge-input-block button, .ge-input-block select { width: 100% !important; }
  .ge-mode-tab { padding: 9px 14px !important; font-size: 13px !important; }
}
`;

const GenericExplorer = ({
  dataset = DERIVATIVES_DATASET,
  quizGenerator,
  relatedReferences = [],
}) => {
  // Safe extraction — hooks below must always run.
  const safe         = dataset || {};
  const items        = Array.isArray(safe.items) ? safe.items : [];
  const categories   = safe.categories   || {};
  const extraFilters = Array.isArray(safe.extraFilters) ? safe.extraFilters : [];
  const properties   = Array.isArray(safe.properties)   ? safe.properties   : [];
  const templates    = safe.templates    || {};
  const searchModes  = Array.isArray(safe.searchModes)  ? safe.searchModes  : [];
  const meta         = safe.meta         || {};
  const theme        = safe.theme        || null;

  // Filter defs auto-derived from categories + extraFilters
  const FILTER_DEFS = useMemo(() => ([
    ...Object.entries(categories).map(([id, c]) => ({
      id,
      icon:  c.icon,
      title: c.label,
      desc:  c.desc,
      match: (d) => d.cat === id,
    })),
    ...extraFilters,
  ]), [categories, extraFilters]);

  const filterCounts = useMemo(() => {
    const counts = {};
    FILTER_DEFS.forEach((f) => { counts[f.id] = items.filter(f.match).length; });
    return counts;
  }, [FILTER_DEFS, items]);

  // TOC items, labels derived from meta with sensible defaults
  const TOC_ITEMS = useMemo(() => {
    const out = [
      { id: 'sec-tool',       label: meta.toolTitle       || 'Tool' },
      { id: 'sec-table',      label: 'The table' },
      { id: 'sec-patterns',   label: meta.categoriesTitle || 'Categories' },
    ];
    if (properties.length > 0)            out.push({ id: 'sec-properties', label: meta.propertiesTitle || 'Rules' });
    if (typeof quizGenerator === 'function') out.push({ id: 'sec-quiz', label: 'Test yourself' });
    return out;
  }, [meta.toolTitle, meta.categoriesTitle, meta.propertiesTitle, properties.length, quizGenerator]);

  const detailLabels = (templates && templates.detailLabels) || { left: 'left', right: 'right' };

  // Built-in modes: "By name" (if any item has title) and "By category" (always when categories exist).
  // Dataset's own searchModes are kept in the middle.
  const effectiveSearchModes = useMemo(() => {
    const result = [];
    if (items.some((d) => typeof d.title === 'string' && d.title.length > 0)) {
      result.push({
        id: '__byTitle__',
        label: 'By name',
        placeholder: 'Search by name (e.g., chain rule)',
        mainKey: 'title',
        altKey: null,
      });
    }
    result.push(...searchModes);
    const catIds = Object.keys(categories);
    if (catIds.length > 0) {
      result.push({
        id: '__byCategory__',
        label: 'By category',
        isCategoryPicker: true,
      });
    }
    return result;
  }, [items, searchModes, categories]);

  const initialModeId = (effectiveSearchModes[0] && effectiveSearchModes[0].id) || null;

  // State
  const [viewMode, setViewMode] = useState('reference');
  const [searchMode, setSearchMode] = useState(initialModeId);
  const [inputs, setInputs] = useState(() => {
    const o = {}; effectiveSearchModes.forEach((m) => { o[m.id] = ''; }); return o;
  });

  const [statusKind, setStatusKind] = useState(null);
  const [statusIcon, setStatusIcon] = useState('');
  const [statusContent, setStatusContent] = useState(null);

  const [highlightedIds, setHighlightedIds] = useState(() => new Set());
  const [activeFilter, setActiveFilter] = useState(null);
  const [detailsId, setDetailsId] = useState(null);

  const [activeSection, setActiveSection] = useState('sec-tool');
  const [pendingScroll, setPendingScroll] = useState(null);
  const [cols, setCols] = useState(3);

  const cardRefs = useRef({});
  const sectionRefs = useRef({});

  useEffect(() => {
    setCols(getResponsiveCols());
    const onResize = () => setCols(getResponsiveCols());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Deep-linking via URL hash. On mount, if the hash matches a known
  // category or extra-filter id (e.g. /…/identities#inverse), pre-apply
  // that filter and scroll the table into view. Enables redirected
  // legacy URLs like /tables/trigonometry/inverse to land users on the
  // unified page already filtered to the right family.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;
    const matched = FILTER_DEFS.find((f) => f.id === hash);
    if (!matched) return;
    setActiveFilter(hash);
    setPendingScroll({ type: 'section', id: 'sec-table' });
    // FILTER_DEFS is captured at mount; we intentionally do not re-run.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!pendingScroll) return;
    let el = null;
    if (pendingScroll.type === 'card') el = cardRefs.current[pendingScroll.id];
    else if (pendingScroll.type === 'section') el = sectionRefs.current[pendingScroll.id];
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: pendingScroll.type === 'section' ? 'start' : 'center',
    });
    setPendingScroll(null);
  }, [pendingScroll]);

  useEffect(() => {
    const sections = TOC_ITEMS.map((it) => sectionRefs.current[it.id]).filter(Boolean);
    if (sections.length === 0) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [TOC_ITEMS]);

  useEffect(() => {
    if (detailsId === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setDetailsId(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [detailsId]);

  // Helpers
  const setStatus = (kind, icon, content) => {
    setStatusKind(kind); setStatusIcon(icon); setStatusContent(content);
  };
  const hideStatus = () => { setStatusKind(null); setStatusIcon(''); setStatusContent(null); };

  const handleViewChange = (next) => {
    setViewMode(next);
    if (next === 'puzzle') {
      setActiveFilter(null);
      setHighlightedIds(new Set());
      setDetailsId(null);
      hideStatus();
    }
  };

  // Instant search: runs on every keystroke or category change. No scrolling.
  // Empty input → silent clear (no highlights, no status). Non-empty → match + status.
  const runInstantSearch = (modeId, value) => {
    const mode = effectiveSearchModes.find((m) => m.id === modeId);
    if (!mode) return;

    // Category picker mode
    if (mode.isCategoryPicker) {
      if (!value) {
        setHighlightedIds(new Set());
        hideStatus();
        return;
      }
      if (viewMode === 'puzzle') setViewMode('reference');
      setActiveFilter(null);
      setDetailsId(null);
      const matches = items.filter((d) => d.cat === value);
      setHighlightedIds(new Set(matches.map((d) => d.id)));
      const catLabel = (categories[value] && categories[value].label) || value;
      if (matches.length === 0) {
        setStatus('info', '\u2211', `No entries in ${catLabel}.`);
      } else {
        setStatus('success', '\u2211',
          `${matches.length} ${catLabel} entr${matches.length === 1 ? 'y' : 'ies'} highlighted below.`);
      }
      return;
    }

    // Text search mode
    const q = value.trim();
    if (!q) {
      setHighlightedIds(new Set());
      hideStatus();
      return;
    }
    if (viewMode === 'puzzle') setViewMode('reference');
    setActiveFilter(null);
    setDetailsId(null);
    const matches = matchAgainst(items, q, mode.mainKey, mode.altKey);
    setHighlightedIds(new Set(matches.map((d) => d.id)));
    if (matches.length === 0) {
      setStatus('info', '\u2211', `No entries match "${q}".`);
    } else if (matches.length === 1) {
      const d = matches[0];
      const label = d.title || `entry #${d.id}`;
      setStatus('success', '\u2713', `Found: ${label}.`);
    } else {
      setStatus('success', '\u2211', `${matches.length} matches highlighted below.`);
    }
  };

  const handleSearchModeChange = (next) => {
    setSearchMode(next);
    runInstantSearch(next, inputs[next] || '');
  };

  // Full reset: clears current input, highlights, active filter, details, and status.
  const runReset = (modeId) => {
    setInputs({ ...inputs, [modeId]: '' });
    setHighlightedIds(new Set());
    setActiveFilter(null);
    setDetailsId(null);
    hideStatus();
  };

  const toggleFilter = (id) => {
    setHighlightedIds(new Set());
    setDetailsId(null);
    if (activeFilter === id) { setActiveFilter(null); hideStatus(); }
    else { setActiveFilter(id); hideStatus(); setPendingScroll({ type: 'section', id: 'sec-table' }); }
  };
  const handleClearHighlights = () => {
    setActiveFilter(null); setHighlightedIds(new Set()); setDetailsId(null); hideStatus();
  };

  const handleCardClick = (id) => {
    if (detailsId === id) { setDetailsId(null); return; }
    setDetailsId(id);
    setHighlightedIds(new Set([id]));
    setActiveFilter(null);
    setPendingScroll({ type: 'card', id });
  };

  const tocLinkStyle = (id) => {
    const base = { ...S.tocLinkBase };
    if (activeSection === id) {
      base.color = C.primaryDark;
      base.borderLeftColor = C.primary;
      base.fontWeight = 600;
      base.background = `linear-gradient(90deg, ${C.primaryLight} 0%, transparent 100%)`;
    }
    return base;
  };
  const tocNumStyle = (id) => {
    const base = { ...S.tocNumBase };
    if (activeSection === id) { base.background = C.primary; base.color = 'white'; }
    return base;
  };

  let bannerText = '';
  if (activeFilter) {
    const def = FILTER_DEFS.find((f) => f.id === activeFilter);
    if (def) bannerText = `Filtering: ${def.title} \u2014 ${filterCounts[def.id]} match${filterCounts[def.id] === 1 ? '' : 'es'} highlighted`;
  } else if (highlightedIds.size > 0) {
    bannerText = `${highlightedIds.size} entr${highlightedIds.size === 1 ? 'y' : 'ies'} highlighted by tool`;
  }
  const showBanner = (activeFilter !== null || highlightedIds.size > 0) && viewMode === 'reference';

  const statusIconBg = ({ success: C.success, error: C.error, info: C.primary })[statusKind] || C.primary;

  // Renderers
  const renderItemCard = (d) => {
    const cls = ['ge-item-card'];
    if (detailsId === d.id) cls.push('active');
    if (highlightedIds.has(d.id)) cls.push('highlight');
    if (activeFilter) {
      const def = FILTER_DEFS.find((f) => f.id === activeFilter);
      if (def && def.match(d)) cls.push('filter-match');
      else cls.push('filter-dim');
    }
    const cat = categories[d.cat];
    return (
      <div
        key={d.id}
        ref={(el) => { cardRefs.current[d.id] = el; }}
        className={cls.join(' ')}
        style={S.itemCard}
        onClick={() => handleCardClick(d.id)}
      >
        {cat && (
          <span style={{ ...S.catBadge, background: cat.bg, color: cat.fg }}>{cat.label}</span>
        )}
        <div style={S.cardLeft}>{processContent(templates.left(d))}</div>
        {d.title && <div style={S.cardTitle}>{d.title}</div>}
        <div style={S.cardArrow}>&darr;</div>
        <div style={S.cardRight}>{processContent(templates.right(d))}</div>
      </div>
    );
  };

  const renderInlineDetails = (d) => {
    const cat = categories[d.cat];
    return (
      <div
        key={`details-${d.id}`}
        className="ge-inline-details"
        style={S.inlineDetails}
      >
        <div style={S.inlineDetailsHeader}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {d.title && <div style={S.inlineDetailsSubtitle}>{d.title}</div>}
            <div style={S.inlineDetailsTitle}>
              {processContent(templates.full(d))}
            </div>
          </div>
          <button
            type="button"
            className="ge-inline-details-close"
            style={S.inlineDetailsClose}
            onClick={() => setDetailsId(null)}
            title="Close (Esc)"
          >
            <span style={S.inlineDetailsCloseX}>&times;</span>
            <span>Close</span>
          </button>
        </div>
        {d.tip && <div style={S.inlineDetailsTip}>{processContent(d.tip)}</div>}
        <div style={S.inlineDetailsGrid}>
          <div style={S.inlineDetailItem}>
            <div style={S.inlineDetailLabel}>{detailLabels.left}</div>
            <div style={S.inlineDetailValue}>{processContent(templates.input ? templates.input(d) : templates.left(d))}</div>
          </div>
          <div style={S.inlineDetailItem}>
            <div style={S.inlineDetailLabel}>{detailLabels.right}</div>
            <div style={S.inlineDetailValue}>{processContent(templates.right(d))}</div>
          </div>
          {cat && (
            <div style={S.inlineDetailItem}>
              <div style={S.inlineDetailLabel}>Category</div>
              <div style={S.inlineDetailValue}>{cat.label}</div>
            </div>
          )}
        </div>
        {d.link && (
          <a
            className="ge-inline-learn-more"
            style={S.inlineLearnMore}
            href={d.link}
          >
            Read more &rarr;
          </a>
        )}
      </div>
    );
  };

  const renderRefGrid = () => {
    const activeIdx = detailsId !== null
      ? items.findIndex((dd) => dd.id === detailsId)
      : -1;
    const activeRow = activeIdx >= 0 ? Math.floor(activeIdx / cols) : -1;
    const detailsItem = activeIdx >= 0 ? items[activeIdx] : null;

    return (
      <div className="ge-ref-grid" style={S.refGrid}>
        {items.flatMap((d, idx) => {
          const elements = [renderItemCard(d)];
          if (detailsItem) {
            const thisRow = Math.floor(idx / cols);
            const isLastInRow = ((idx + 1) % cols === 0) || (idx === items.length - 1);
            if (thisRow === activeRow && isLastInRow) {
              elements.push(renderInlineDetails(detailsItem));
            }
          }
          return elements;
        })}
      </div>
    );
  };

  // TablePuzzle2 items
  const puzzleItems = useMemo(() => items.map((d) => ({
    id:    d.id,
    left:  templates.left(d),
    right: templates.right(d),
    tip:   d.tip,
    link:  d.link,
  })), [items, templates]);

  const currentSearchMode = effectiveSearchModes.find((m) => m.id === searchMode);

  // Validate after all hooks have run.
  const valid = items.length > 0
    && typeof templates.left  === 'function'
    && typeof templates.right === 'function';
  if (!valid) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={S.container}>
        {(meta.intro || meta.articleHref) && (
          <p style={S.pageIntro}>
            {meta.intro && processContent(meta.intro)}{' '}
            {meta.articleHref && meta.introLinkText && (
              <a href={meta.articleHref} style={S.pageIntroLink}>{meta.introLinkText}</a>
            )}
          </p>
        )}

        <div className="ge-layout" style={S.pageLayout}>
          <aside className="ge-sidebar" style={S.sidebar}>
            <div className="ge-sidebar-sticky" style={S.sidebarSticky}>
              <div style={S.sidebarBlock}>
                <div style={S.sidebarLabel}>On this page</div>
                <ul style={S.tocList}>
                  {TOC_ITEMS.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        className={`ge-toc-link ${activeSection === item.id ? 'active' : ''}`}
                        style={tocLinkStyle(item.id)}
                        onClick={(e) => {
                          e.preventDefault();
                          const t = sectionRefs.current[item.id];
                          if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                      >
                        <span style={tocNumStyle(item.id)}>{idx + 1}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {relatedReferences && relatedReferences.length > 0 && (
                <div style={S.sidebarBlock}>
                  <div style={S.sidebarLabel}>Related references</div>
                  {relatedReferences.map((ref, idx) => (
                    <a key={idx} href={ref.href} className="ge-related-mini" style={S.relatedMini}>
                      <div style={S.relatedMiniTitle}>{ref.title}</div>
                      {ref.sub && <div style={S.relatedMiniSub}>{ref.sub}</div>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </aside>

          <div style={S.mainCol}>
            {effectiveSearchModes.length > 0 && (
              <section
                id="sec-tool"
                ref={(el) => { sectionRefs.current['sec-tool'] = el; }}
                style={S.toolSection}
              >
                <h2 style={S.toolH2}>{meta.toolTitle || 'Search'}</h2>
                {meta.toolSubtitle && <p style={S.toolSub}>{meta.toolSubtitle}</p>}
                {effectiveSearchModes.length > 1 && (
                  <div style={S.modeTabsWrap}>
                    {effectiveSearchModes.map((tab) => {
                      const isActive = searchMode === tab.id;
                      return (
                        <button
                          key={tab.id} type="button"
                          className={`ge-mode-tab ${isActive ? 'active' : ''}`}
                          style={{ ...S.modeTabBase, ...(isActive ? S.modeTabActive : {}) }}
                          onClick={() => handleSearchModeChange(tab.id)}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                )}
                {currentSearchMode && (
                  <div className="ge-input-block" style={S.inputBlock}>
                    <div style={S.inputFieldWrap}>
                      {currentSearchMode.isCategoryPicker ? (
                        <select
                          className="ge-input-field"
                          style={S.inputField}
                          value={inputs[currentSearchMode.id] || ''}
                          onChange={(e) => {
                            const v = e.target.value;
                            setInputs({ ...inputs, [currentSearchMode.id]: v });
                            runInstantSearch(currentSearchMode.id, v);
                          }}
                        >
                          <option value="">{'\u2014 Choose a category \u2014'}</option>
                          {Object.entries(categories).map(([id, c]) => (
                            <option key={id} value={id}>{c.label}</option>
                          ))}
                        </select>
                      ) : (
                        <>
                          <input
                            type="text" className="ge-input-field"
                            style={{
                              ...S.inputField,
                              ...(inputs[currentSearchMode.id] ? S.inputFieldWithReset : {}),
                            }}
                            placeholder={currentSearchMode.placeholder || ''}
                            value={inputs[currentSearchMode.id] || ''}
                            onChange={(e) => {
                              const v = e.target.value;
                              setInputs({ ...inputs, [currentSearchMode.id]: v });
                              runInstantSearch(currentSearchMode.id, v);
                            }}
                          />
                          {inputs[currentSearchMode.id] && (
                            <button
                              type="button"
                              className="ge-input-reset"
                              style={S.inputReset}
                              title="Clear"
                              onClick={() => {
                                setInputs({ ...inputs, [currentSearchMode.id]: '' });
                                runInstantSearch(currentSearchMode.id, '');
                              }}
                            >
                              &times;
                            </button>
                          )}
                        </>
                      )}
                    </div>
                    <button type="button" className="ge-input-reset-btn" style={S.inputResetBtn}
                      onClick={() => runReset(currentSearchMode.id)}
                      title="Clear input, highlights, filter and status">Reset</button>
                  </div>
                )}
                {statusKind && (
                  <div style={S.toolStatus}>
                    <span style={{ ...S.statusIcon, background: statusIconBg }}>{statusIcon}</span>
                    <span style={S.statusText}>{statusContent}</span>
                    {statusKind === 'success' && highlightedIds.size > 0 && (
                      <button
                        type="button"
                        className="ge-go-btn"
                        style={S.goBtn}
                        onClick={() => setPendingScroll(
                          highlightedIds.size === 1
                            ? { type: 'card', id: [...highlightedIds][0] }
                            : { type: 'section', id: 'sec-table' }
                        )}
                        title={highlightedIds.size === 1 ? 'Scroll to result' : 'Scroll to table'}
                      >
                        Go &rarr;
                      </button>
                    )}
                  </div>
                )}
              </section>
            )}

            <section id="sec-table" ref={(el) => { sectionRefs.current['sec-table'] = el; }}>
              <div style={S.legend}>
                <div style={S.legendLeft}>
                  <div style={S.legendTitle}>View</div>
                  <p style={S.legendNote}>
                    {viewMode === 'reference'
                      ? (meta.referenceModeNote || 'Reference mode: click any card to see the explanation.')
                      : (meta.puzzleModeNote    || 'Puzzle mode: drag tiles into the matching slot.')}
                  </p>
                </div>
                <div style={S.viewToggle}>
                  {['reference', 'puzzle'].map((v) => {
                    const isActive = viewMode === v;
                    return (
                      <button
                        key={v} type="button"
                        className={`ge-view-btn ${isActive ? 'active' : ''}`}
                        style={{ ...S.viewBtnBase, ...(isActive ? S.viewBtnActive : {}) }}
                        onClick={() => handleViewChange(v)}
                      >
                        {v === 'reference' ? 'Reference' : 'Puzzle'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {showBanner && (
                <div style={S.filterStatus}>
                  <span style={S.filterStatusText}>{bannerText}</span>
                  <button type="button" style={S.filterClear} onClick={handleClearHighlights}>
                    Clear highlight
                  </button>
                </div>
              )}

              {viewMode === 'reference' && renderRefGrid()}

              {viewMode === 'puzzle' && (
                <TablePuzzle2 items={puzzleItems} theme={theme} />
              )}
            </section>

            {FILTER_DEFS.length > 0 && (
              <section id="sec-patterns" ref={(el) => { sectionRefs.current['sec-patterns'] = el; }}>
                <h2 style={S.sectionH}>{meta.categoriesTitle || 'Categories'}</h2>
                {meta.categoriesSubtitle && (
                  <p style={S.sectionSub}>{meta.categoriesSubtitle}</p>
                )}
                {viewMode === 'puzzle' && (
                  <div style={S.filtersDisabledNote}>
                    Filters are available in <strong>Reference</strong> view.
                  </div>
                )}
                <div style={S.filterGrid}>
                  {FILTER_DEFS.map((f) => {
                    const isActive = activeFilter === f.id;
                    const disabled = viewMode === 'puzzle';
                    const cls = ['ge-filter-card'];
                    if (isActive) cls.push('active');
                    if (disabled) cls.push('disabled');
                    return (
                      <div key={f.id} className={cls.join(' ')} style={S.filterCard}
                        onClick={() => !disabled && toggleFilter(f.id)}>
                        <div className="ge-filter-icon" style={S.filterIcon}>{f.icon}</div>
                        <h3 style={S.filterCardH3}>{f.title}</h3>
                        {f.desc && (
                          <p style={S.filterCardP}>{processContent(f.desc)}</p>
                        )}
                        <div style={S.filterCardFooter}>
                          <span className="ge-filter-count" style={S.filterCount}>
                            {filterCounts[f.id]} match{filterCounts[f.id] === 1 ? '' : 'es'}
                          </span>
                          <span className="ge-filter-action" style={S.filterAction}>
                            Click to highlight
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {properties.length > 0 && (
              <section
                id="sec-properties"
                ref={(el) => { sectionRefs.current['sec-properties'] = el; }}
                style={S.propertiesSection}
              >
                <h2 style={S.sectionH}>{meta.propertiesTitle || 'Rules'}</h2>
                {meta.propertiesSubtitle && (
                  <p style={S.sectionSub}>{meta.propertiesSubtitle}</p>
                )}
                <div style={S.propertyGrid}>
                  {properties.map((card, i) => (
                    <div key={i} style={S.propertyCard}>
                      <div style={S.propertyCardIcon}>{card.icon}</div>
                      <h4 style={S.propertyCardH4}>{card.title}</h4>
                      <p style={S.propertyCardP}>{processContent(card.body)}</p>
                      {card.example && (
                        <div style={S.propertyCardExample}>{processContent(card.example)}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {typeof quizGenerator === 'function' && (
              <section
                id="sec-quiz"
                ref={(el) => { sectionRefs.current['sec-quiz'] = el; }}
                style={S.quizSection}
              >
                <QuizWidget
                  generator={quizGenerator}
                  title="Test yourself"
                  subtitle="Three question types, rotated at random."
                  allowReset={true}
                  historyLimit={30}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GenericExplorer;