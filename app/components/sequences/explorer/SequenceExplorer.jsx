// // // 'use client'
// // // import React, { useState } from 'react';

// // // // =====================================================
// // // // FAKE IMPORT — replace with your actual path.
// // // // processContent(content) takes a markdown + LaTeX string and
// // // // returns React elements with KaTeX-rendered math.
// // // // =====================================================
// // // import { processContent } from '../../../utils/contentProcessor';

// // // // =====================================================
// // // // DEFAULT EXPLANATIONS
// // // // Override via the `explanations` prop. May be moved to an
// // // // external file (e.g. ./explanations/triangular.js) and imported.
// // // // Each entry: { heading, content }. Content is a markdown+LaTeX
// // // // string passed through processContent for rendering.
// // // // =====================================================
// // // const defaultExplanations = [
// // //   {
// // //     heading: 'What are triangular numbers?',
// // //     content: 'Triangular numbers count the dots in equilateral triangles. The $n$-th triangular number is the sum of the first $n$ positive integers:\n\n$$T_n = 1 + 2 + 3 + \\cdots + n$$',
// // //   },
// // //   {
// // //     heading: 'Closed form',
// // //     content: 'Pairing terms from opposite ends gives a single-step formula:\n\n$$T_n = \\frac{n(n+1)}{2}$$\n\nNo summation needed.',
// // //   },
// // //   {
// // //     heading: 'Membership test',
// // //     content: 'A positive integer $m$ is triangular if and only if $8m + 1$ is a perfect square. When it is, the index is:\n\n$$n = \\frac{\\sqrt{8m + 1} - 1}{2}$$',
// // //   },
// // //   {
// // //     heading: 'Two consecutive triangulars make a square',
// // //     content: '$T_n + T_{n-1} = n^2$\n\nA triangle of side $n$ and its predecessor of side $n-1$ fit along the diagonal to form an $n \\times n$ square.',
// // //   },
// // // ];

// // // // =====================================================
// // // // Sequence math (triangular numbers)
// // // // =====================================================
// // // const fmt = (n) => n.toLocaleString('en-US');
// // // const T = (n) => n * (n + 1) / 2;
// // // const isT = (m) => {
// // //   if (!Number.isFinite(m) || !Number.isInteger(m) || m < 1) return null;
// // //   const d = 8 * m + 1;
// // //   const s = Math.sqrt(d);
// // //   const sr = Math.round(s);
// // //   if (sr * sr !== d) return null;
// // //   const n = (sr - 1) / 2;
// // //   if (!Number.isInteger(n) || n < 1) return null;
// // //   return n;
// // // };

// // // // =====================================================
// // // // Pure compute functions (validation + result) per mode
// // // // =====================================================
// // // function computeBrowse(rawN) {
// // //   const n = Math.max(1, Math.min(200, parseInt(rawN, 10) || 20));
// // //   const terms = [];
// // //   let sum = 0;
// // //   for (let i = 1; i <= n; i++) {
// // //     const t = T(i);
// // //     terms.push({ index: i, value: t });
// // //     sum += t;
// // //   }
// // //   return { count: n, sum, max: T(n), maxIndex: n, terms };
// // // }

// // // function computeRange(rawA, rawB) {
// // //   const a = parseInt(rawA, 10);
// // //   const b = parseInt(rawB, 10);
// // //   if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
// // //     return { error: 'Enter two positive integer indexes.' };
// // //   }
// // //   if (a > b) {
// // //     return { error: 'From-index must be less than or equal to to-index.' };
// // //   }
// // //   if (b - a > 199) {
// // //     return { error: 'Range too wide \u2014 cap is 200 terms.' };
// // //   }
// // //   const terms = [];
// // //   for (let i = a; i <= b; i++) {
// // //     terms.push({ index: i, value: T(i) });
// // //   }
// // //   return {
// // //     error: null,
// // //     terms,
// // //     count: b - a + 1,
// // //     min: T(a),
// // //     minIndex: a,
// // //     max: T(b),
// // //     maxIndex: b,
// // //   };
// // // }

// // // function computeMember(rawM) {
// // //   const m = parseInt(rawM, 10);
// // //   if (!Number.isInteger(m) || m < 1) {
// // //     return { error: 'Enter a positive integer.' };
// // //   }
// // //   const idx = isT(m);
// // //   if (idx !== null) {
// // //     return { error: null, isMember: true, value: m, index: idx };
// // //   }
// // //   const k = Math.floor((Math.sqrt(8 * m + 1) - 1) / 2);
// // //   return {
// // //     error: null,
// // //     isMember: false,
// // //     value: m,
// // //     nearestLow: { index: k, value: T(k) },
// // //     nearestHigh: { index: k + 1, value: T(k + 1) },
// // //   };
// // // }

// // // function computeLookup(rawN) {
// // //   const n = parseInt(rawN, 10);
// // //   if (!Number.isInteger(n) || n < 1) {
// // //     return { error: 'Enter a positive integer index.' };
// // //   }
// // //   return { error: null, index: n, value: T(n), nMul: n * (n + 1) };
// // // }

// // // // =====================================================
// // // // Styles. Uses your --ms-* variables where they exist,
// // // // with safe fallbacks. New tokens added: --ms-header-bg,
// // // // --ms-header-text, --ms-header-bg-hover, --ms-header-soft,
// // // // --ms-success-bg/text/border, --ms-error-bg/text/border.
// // // // =====================================================
// // // const SE_STYLES = `
// // //   .se-grid {
// // //     display: grid;
// // //     grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
// // //     gap: 24px;
// // //     align-items: start;
// // //   }
// // //   @media (max-width: 900px) {
// // //     .se-grid { grid-template-columns: minmax(0, 1fr); }
// // //   }
// // //   /* Main card */
// // //   .se-card {
// // //     background: var(--ms-card, #fff);
// // //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     border-radius: 12px;
// // //     overflow: hidden;
// // //   }
// // //   .se-card-header {
// // //     background: var(--ms-header-bg, #3B5BDB);
// // //     color: var(--ms-header-text, #fff);
// // //     padding: 20px 26px;
// // //     display: flex;
// // //     align-items: center;
// // //     justify-content: space-between;
// // //     gap: 16px;
// // //   }
// // //   .se-card-title {
// // //     margin: 0;
// // //     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
// // //     font-weight: 700;
// // //     font-size: 1.35rem;
// // //   }
// // //   .se-card-subtitle {
// // //     margin: 4px 0 0;
// // //     font-size: 0.8rem;
// // //     color: rgba(255, 255, 255, 0.82);
// // //   }
// // //   .se-badge {
// // //     font-size: 0.72rem;
// // //     background: rgba(255, 255, 255, 0.20);
// // //     padding: 5px 12px;
// // //     border-radius: 999px;
// // //     font-weight: 500;
// // //     white-space: nowrap;
// // //   }
// // //   .se-card-body { padding: 24px 26px; }

// // //   /* Tabs */
// // //   .se-tabs {
// // //     display: inline-flex;
// // //     background: var(--ms-tab-bg, #e2e8f0);
// // //     border-radius: 8px;
// // //     padding: 3px;
// // //     margin-bottom: 22px;
// // //   }
// // //   .se-tab {
// // //     padding: 8px 18px;
// // //     border: none;
// // //     border-radius: 6px;
// // //     font-family: inherit;
// // //     font-size: 0.82rem;
// // //     font-weight: 500;
// // //     cursor: pointer;
// // //     background: transparent;
// // //     color: var(--ms-muted, #64748b);
// // //     transition: all 0.15s;
// // //   }
// // //   .se-tab.active {
// // //     background: var(--ms-tab-active, #fff);
// // //     color: var(--ms-text, #1e3a5f);
// // //     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
// // //   }
// // //   .se-tab:not(.active):hover { color: var(--ms-text-secondary, #334155); }

// // //   /* Inputs */
// // //   .se-input-row {
// // //     display: flex;
// // //     align-items: end;
// // //     gap: 14px;
// // //     flex-wrap: wrap;
// // //     margin-bottom: 22px;
// // //   }
// // //   .se-field { display: flex; flex-direction: column; gap: 5px; }
// // //   .se-field label {
// // //     font-size: 0.78rem;
// // //     color: var(--ms-muted, #64748b);
// // //     font-weight: 500;
// // //   }
// // //   .se-input {
// // //     font-family: inherit;
// // //     font-size: 0.95rem;
// // //     padding: 9px 13px;
// // //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     border-radius: 8px;
// // //     width: 110px;
// // //     outline: none;
// // //     background: var(--ms-card, #fff);
// // //     color: var(--ms-text, #1e3a5f);
// // //     transition: border-color 0.15s, box-shadow 0.15s;
// // //   }
// // //   .se-input:focus {
// // //     border-color: var(--ms-accent, #3b82f6);
// // //     box-shadow: 0 0 0 3px var(--ms-accent-light, #eff6ff);
// // //   }
// // //   .se-suffix {
// // //     padding-bottom: 11px;
// // //     color: var(--ms-muted, #64748b);
// // //     font-size: 0.85rem;
// // //   }
// // //   .se-action {
// // //     font-family: inherit;
// // //     font-size: 0.85rem;
// // //     font-weight: 500;
// // //     padding: 10px 20px;
// // //     background: var(--ms-header-bg, #3B5BDB);
// // //     color: var(--ms-header-text, #fff);
// // //     border: none;
// // //     border-radius: 8px;
// // //     cursor: pointer;
// // //     transition: background 0.15s;
// // //   }
// // //   .se-action:hover { background: var(--ms-header-bg-hover, #2E48C7); }

// // //   /* Stats */
// // //   .se-stats {
// // //     display: grid;
// // //     grid-template-columns: repeat(3, 1fr);
// // //     gap: 12px;
// // //     margin-bottom: 22px;
// // //   }
// // //   .se-stats.two-col {
// // //     grid-template-columns: repeat(2, 1fr);
// // //     margin-bottom: 0;
// // //   }
// // //   .se-stat {
// // //     background: var(--ms-header-soft, #EEF1FB);
// // //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     border-radius: 8px;
// // //     padding: 12px 16px;
// // //   }
// // //   .se-stat-label {
// // //     font-size: 0.65rem;
// // //     color: var(--ms-muted, #64748b);
// // //     font-weight: 600;
// // //     text-transform: uppercase;
// // //     letter-spacing: 0.08em;
// // //     margin-bottom: 5px;
// // //   }
// // //   .se-stat-val {
// // //     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
// // //     font-size: 1.25rem;
// // //     font-weight: 700;
// // //     color: var(--ms-text, #1e3a5f);
// // //     line-height: 1.2;
// // //   }
// // //   .se-stat-val.accent { color: var(--ms-accent, #3b82f6); }

// // //   /* Section labels */
// // //   .se-section-label {
// // //     font-size: 0.65rem;
// // //     color: var(--ms-muted, #64748b);
// // //     text-transform: uppercase;
// // //     letter-spacing: 0.08em;
// // //     font-weight: 600;
// // //     margin-bottom: 10px;
// // //   }

// // //   /* Terms grid */
// // //   .se-terms-wrap {
// // //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     border-radius: 8px;
// // //     overflow: hidden;
// // //     background: var(--ms-card, #fff);
// // //   }
// // //   .se-terms-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
// // //   .se-term-cell {
// // //     display: flex;
// // //     align-items: baseline;
// // //     gap: 9px;
// // //     padding: 10px 16px;
// // //     border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     border-right: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
// // //   }
// // //   .se-term-cell:nth-child(5n) { border-right: none; }
// // //   .se-term-idx {
// // //     color: var(--ms-accent, #3b82f6);
// // //     font-size: 0.78rem;
// // //     font-weight: 500;
// // //     min-width: 28px;
// // //   }
// // //   .se-term-val {
// // //     color: var(--ms-text, #1e3a5f);
// // //     font-size: 0.95rem;
// // //     font-weight: 700;
// // //   }

// // //   /* Alerts */
// // //   .se-alert {
// // //     border-radius: 8px;
// // //     padding: 14px 18px;
// // //     display: flex;
// // //     align-items: center;
// // //     gap: 12px;
// // //     font-size: 0.9rem;
// // //     border: 1px solid;
// // //   }
// // //   .se-alert-yes {
// // //     background: var(--ms-success-bg, #E7F4EC);
// // //     color: var(--ms-success-text, #166534);
// // //     border-color: var(--ms-success-border, rgba(22, 101, 52, 0.2));
// // //   }
// // //   .se-alert-no {
// // //     background: var(--ms-placeholder-bg, #f1f5f9);
// // //     color: var(--ms-text, #1e3a5f);
// // //     border-color: var(--ms-placeholder-border, #cbd5e1);
// // //   }
// // //   .se-alert-err {
// // //     background: var(--ms-error-bg, #FBECEC);
// // //     color: var(--ms-error-text, #991B1B);
// // //     border-color: var(--ms-error-border, rgba(153, 27, 27, 0.2));
// // //   }
// // //   .se-alert-icon {
// // //     flex-shrink: 0;
// // //     width: 26px;
// // //     height: 26px;
// // //     border-radius: 50%;
// // //     display: flex;
// // //     align-items: center;
// // //     justify-content: center;
// // //     font-weight: 700;
// // //     font-size: 0.9rem;
// // //   }
// // //   .se-alert-yes .se-alert-icon { background: rgba(22, 101, 52, 0.15); }
// // //   .se-alert-no .se-alert-icon { background: rgba(0, 0, 0, 0.08); color: var(--ms-muted, #64748b); }
// // //   .se-alert-err .se-alert-icon { background: rgba(153, 27, 27, 0.15); }

// // //   /* Formula box (lookup mode) */
// // //   .se-formula {
// // //     background: var(--ms-header-soft, #EEF1FB);
// // //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     border-radius: 8px;
// // //     padding: 16px 22px;
// // //     margin-top: 18px;
// // //   }
// // //   .se-formula-row {
// // //     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
// // //     font-size: 1rem;
// // //     color: var(--ms-text, #1e3a5f);
// // //     padding: 4px 0;
// // //   }
// // //   .se-formula-row b {
// // //     color: var(--ms-accent, #3b82f6);
// // //     font-weight: 700;
// // //   }

// // //   /* Aside (explanation panel) */
// // //   .se-aside {
// // //     background: var(--ms-card, #fff);
// // //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //     border-radius: 12px;
// // //     padding: 24px 22px;
// // //   }
// // //   .se-aside-label {
// // //     font-size: 0.65rem;
// // //     color: var(--ms-faint, #94a3b8);
// // //     text-transform: uppercase;
// // //     letter-spacing: 0.1em;
// // //     font-weight: 600;
// // //     margin-bottom: 16px;
// // //   }
// // //   .se-aside-section {
// // //     padding: 16px 0;
// // //     border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
// // //   }
// // //   .se-aside-section:first-of-type { padding-top: 0; }
// // //   .se-aside-section:last-of-type { border-bottom: none; padding-bottom: 0; }
// // //   .se-aside-heading {
// // //     font-size: 0.95rem;
// // //     font-weight: 600;
// // //     color: var(--ms-text, #1e3a5f);
// // //     margin: 0 0 8px 0;
// // //   }
// // //   .se-aside-content {
// // //     font-size: 0.85rem;
// // //     color: var(--ms-text-secondary, #475569);
// // //     line-height: 1.6;
// // //   }
// // //   .se-aside-content p { margin: 6px 0; }
// // // `;

// // // function SequenceExplorer({ explanations = null }) {
// // //   const [activeTab, setActiveTab] = useState('browse');

// // //   // Browse
// // //   const [browseN, setBrowseN] = useState('20');
// // //   const [browseResult, setBrowseResult] = useState(() => computeBrowse('20'));

// // //   // Range
// // //   const [rangeA, setRangeA] = useState('5');
// // //   const [rangeB, setRangeB] = useState('15');
// // //   const [rangeResult, setRangeResult] = useState(() => computeRange('5', '15'));

// // //   // Member
// // //   const [memberM, setMemberM] = useState('120');
// // //   const [memberResult, setMemberResult] = useState(() => computeMember('120'));

// // //   // Lookup
// // //   const [lookupN, setLookupN] = useState('42');
// // //   const [lookupResult, setLookupResult] = useState(() => computeLookup('42'));

// // //   const sections = explanations || defaultExplanations;

// // //   const runBrowse = () => setBrowseResult(computeBrowse(browseN));
// // //   const runRange = () => setRangeResult(computeRange(rangeA, rangeB));
// // //   const runMember = () => setMemberResult(computeMember(memberM));
// // //   const runLookup = () => setLookupResult(computeLookup(lookupN));

// // //   const onKey = (handler) => (e) => { if (e.key === 'Enter') handler(); };

// // //   return (
// // //     <>
// // //       <style>{SE_STYLES}</style>
// // //       <div className="se-grid">

// // //         <div className="se-main">
// // //           <div className="se-card">

// // //             <div className="se-card-header">
// // //               <div>
// // //                 <h2 className="se-card-title">Triangular numbers</h2>
// // //                 <div className="se-card-subtitle">
// // //                   T<sub>n</sub> = n(n+1)/2 &middot; closed form &middot; unbounded
// // //                 </div>
// // //               </div>
// // //               <span className="se-badge">Sequence explorer</span>
// // //             </div>

// // //             <div className="se-card-body">

// // //               <div className="se-tabs" role="tablist">
// // //                 <button
// // //                   className={`se-tab${activeTab === 'browse' ? ' active' : ''}`}
// // //                   onClick={() => setActiveTab('browse')}
// // //                 >Browse</button>
// // //                 <button
// // //                   className={`se-tab${activeTab === 'range' ? ' active' : ''}`}
// // //                   onClick={() => setActiveTab('range')}
// // //                 >Range</button>
// // //                 <button
// // //                   className={`se-tab${activeTab === 'member' ? ' active' : ''}`}
// // //                   onClick={() => setActiveTab('member')}
// // //                 >Is it one?</button>
// // //                 <button
// // //                   className={`se-tab${activeTab === 'lookup' ? ' active' : ''}`}
// // //                   onClick={() => setActiveTab('lookup')}
// // //                 >n-th term</button>
// // //               </div>

// // //               {/* BROWSE */}
// // //               {activeTab === 'browse' && (
// // //                 <div>
// // //                   <div className="se-input-row">
// // //                     <div className="se-field">
// // //                       <label htmlFor="se-b-n">Show first</label>
// // //                       <input
// // //                         id="se-b-n"
// // //                         className="se-input"
// // //                         type="number"
// // //                         min="1"
// // //                         max="200"
// // //                         step="1"
// // //                         value={browseN}
// // //                         onChange={(e) => setBrowseN(e.target.value)}
// // //                         onKeyDown={onKey(runBrowse)}
// // //                       />
// // //                     </div>
// // //                     <span className="se-suffix">terms</span>
// // //                     <button className="se-action" onClick={runBrowse}>Update</button>
// // //                   </div>

// // //                   <div className="se-stats">
// // //                     <div className="se-stat">
// // //                       <div className="se-stat-label">Showing</div>
// // //                       <div className="se-stat-val">
// // //                         {browseResult.count} term{browseResult.count === 1 ? '' : 's'}
// // //                       </div>
// // //                     </div>
// // //                     <div className="se-stat">
// // //                       <div className="se-stat-label">Largest</div>
// // //                       <div className="se-stat-val accent">
// // //                         T<sub>{browseResult.maxIndex}</sub> = {fmt(browseResult.max)}
// // //                       </div>
// // //                     </div>
// // //                     <div className="se-stat">
// // //                       <div className="se-stat-label">Sum</div>
// // //                       <div className="se-stat-val">{fmt(browseResult.sum)}</div>
// // //                     </div>
// // //                   </div>

// // //                   <div className="se-section-label">First N terms</div>
// // //                   <div className="se-terms-wrap">
// // //                     <div className="se-terms-grid">
// // //                       {browseResult.terms.map((t) => (
// // //                         <div key={t.index} className="se-term-cell">
// // //                           <span className="se-term-idx">{t.index}</span>
// // //                           <span className="se-term-val">{fmt(t.value)}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {/* RANGE */}
// // //               {activeTab === 'range' && (
// // //                 <div>
// // //                   <div className="se-input-row">
// // //                     <div className="se-field">
// // //                       <label htmlFor="se-r-a">From index</label>
// // //                       <input
// // //                         id="se-r-a"
// // //                         className="se-input"
// // //                         type="number"
// // //                         min="1"
// // //                         step="1"
// // //                         value={rangeA}
// // //                         onChange={(e) => setRangeA(e.target.value)}
// // //                         onKeyDown={onKey(runRange)}
// // //                       />
// // //                     </div>
// // //                     <div className="se-field">
// // //                       <label htmlFor="se-r-b">To index</label>
// // //                       <input
// // //                         id="se-r-b"
// // //                         className="se-input"
// // //                         type="number"
// // //                         min="1"
// // //                         step="1"
// // //                         value={rangeB}
// // //                         onChange={(e) => setRangeB(e.target.value)}
// // //                         onKeyDown={onKey(runRange)}
// // //                       />
// // //                     </div>
// // //                     <button className="se-action" onClick={runRange}>List range</button>
// // //                   </div>

// // //                   {rangeResult.error ? (
// // //                     <div className="se-alert se-alert-err">
// // //                       <div className="se-alert-icon">!</div>
// // //                       <div>{rangeResult.error}</div>
// // //                     </div>
// // //                   ) : (
// // //                     <>
// // //                       <div className="se-stats">
// // //                         <div className="se-stat">
// // //                           <div className="se-stat-label">Count</div>
// // //                           <div className="se-stat-val">
// // //                             {rangeResult.count} term{rangeResult.count === 1 ? '' : 's'}
// // //                           </div>
// // //                         </div>
// // //                         <div className="se-stat">
// // //                           <div className="se-stat-label">Smallest</div>
// // //                           <div className="se-stat-val">
// // //                             T<sub>{rangeResult.minIndex}</sub> = {fmt(rangeResult.min)}
// // //                           </div>
// // //                         </div>
// // //                         <div className="se-stat">
// // //                           <div className="se-stat-label">Largest</div>
// // //                           <div className="se-stat-val accent">
// // //                             T<sub>{rangeResult.maxIndex}</sub> = {fmt(rangeResult.max)}
// // //                           </div>
// // //                         </div>
// // //                       </div>

// // //                       <div className="se-section-label">Terms in range</div>
// // //                       <div className="se-terms-wrap">
// // //                         <div className="se-terms-grid">
// // //                           {rangeResult.terms.map((t) => (
// // //                             <div key={t.index} className="se-term-cell">
// // //                               <span className="se-term-idx">{t.index}</span>
// // //                               <span className="se-term-val">{fmt(t.value)}</span>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               )}

// // //               {/* MEMBER */}
// // //               {activeTab === 'member' && (
// // //                 <div>
// // //                   <div className="se-input-row">
// // //                     <div className="se-field">
// // //                       <label htmlFor="se-m-n">Test number</label>
// // //                       <input
// // //                         id="se-m-n"
// // //                         className="se-input"
// // //                         type="number"
// // //                         min="1"
// // //                         step="1"
// // //                         style={{ width: 160 }}
// // //                         value={memberM}
// // //                         onChange={(e) => setMemberM(e.target.value)}
// // //                         onKeyDown={onKey(runMember)}
// // //                       />
// // //                     </div>
// // //                     <button className="se-action" onClick={runMember}>Check</button>
// // //                   </div>

// // //                   {memberResult.error ? (
// // //                     <div className="se-alert se-alert-err">
// // //                       <div className="se-alert-icon">!</div>
// // //                       <div>{memberResult.error}</div>
// // //                     </div>
// // //                   ) : memberResult.isMember ? (
// // //                     <div className="se-alert se-alert-yes">
// // //                       <div className="se-alert-icon">&#10003;</div>
// // //                       <div>
// // //                         <strong>{fmt(memberResult.value)}</strong> is triangular &mdash; this is T<sub>{memberResult.index}</sub> = {memberResult.index}({memberResult.index}+1)/2.
// // //                       </div>
// // //                     </div>
// // //                   ) : (
// // //                     <div className="se-alert se-alert-no">
// // //                       <div className="se-alert-icon">&times;</div>
// // //                       <div>
// // //                         <strong>{fmt(memberResult.value)}</strong> is not triangular. Nearest are T<sub>{memberResult.nearestLow.index}</sub> = {fmt(memberResult.nearestLow.value)} and T<sub>{memberResult.nearestHigh.index}</sub> = {fmt(memberResult.nearestHigh.value)}.
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               )}

// // //               {/* LOOKUP */}
// // //               {activeTab === 'lookup' && (
// // //                 <div>
// // //                   <div className="se-input-row">
// // //                     <div className="se-field">
// // //                       <label htmlFor="se-l-n">Index n</label>
// // //                       <input
// // //                         id="se-l-n"
// // //                         className="se-input"
// // //                         type="number"
// // //                         min="1"
// // //                         step="1"
// // //                         style={{ width: 160 }}
// // //                         value={lookupN}
// // //                         onChange={(e) => setLookupN(e.target.value)}
// // //                         onKeyDown={onKey(runLookup)}
// // //                       />
// // //                     </div>
// // //                     <button className="se-action" onClick={runLookup}>Get term</button>
// // //                   </div>

// // //                   {lookupResult.error ? (
// // //                     <div className="se-alert se-alert-err">
// // //                       <div className="se-alert-icon">!</div>
// // //                       <div>{lookupResult.error}</div>
// // //                     </div>
// // //                   ) : (
// // //                     <>
// // //                       <div className="se-stats two-col">
// // //                         <div className="se-stat">
// // //                           <div className="se-stat-label">Index</div>
// // //                           <div className="se-stat-val">n = {fmt(lookupResult.index)}</div>
// // //                         </div>
// // //                         <div className="se-stat">
// // //                           <div className="se-stat-label">Value</div>
// // //                           <div className="se-stat-val accent">
// // //                             T<sub>{lookupResult.index}</sub> = {fmt(lookupResult.value)}
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                       <div className="se-formula">
// // //                         <div className="se-formula-row">T<sub>n</sub> = n(n+1) / 2</div>
// // //                         <div className="se-formula-row">
// // //                           T<sub>{lookupResult.index}</sub> = {lookupResult.index} &times; {lookupResult.index + 1} / 2
// // //                         </div>
// // //                         <div className="se-formula-row">
// // //                           T<sub>{lookupResult.index}</sub> = {fmt(lookupResult.nMul)} / 2 = <b>{fmt(lookupResult.value)}</b>
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               )}

// // //             </div>
// // //           </div>
// // //         </div>

// // //         <aside className="se-aside">
// // //           <div className="se-aside-label">About this sequence</div>
// // //           {sections.map((s, i) => (
// // //             <section key={i} className="se-aside-section">
// // //               <h3 className="se-aside-heading">{s.heading}</h3>
// // //               <div className="se-aside-content">
// // //                 {processContent(s.content)}
// // //               </div>
// // //             </section>
// // //           ))}
// // //         </aside>

// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default SequenceExplorer;



// // 'use client'
// // import React, { useState } from 'react';

// // // FAKE IMPORT — replace with your actual path.
// // // processContent(content) takes a markdown + LaTeX string and
// // // returns React elements with KaTeX-rendered math.
// // import { processContent } from '../../../utils/contentProcessor';
// // import sequences from './sequences';

// // // Deterministic thousands-separator (avoids hydration mismatches).
// // const fmt = (n) => {
// //   if (!Number.isFinite(n)) return String(n);
// //   return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// // };

// // // =====================================================
// // // Pure compute functions per mode
// // // =====================================================
// // function computeBrowse(rawN, sequence, max) {
// //   const cap = max || 200;
// //   const n = Math.max(1, Math.min(cap, parseInt(rawN, 10) || 20));
// //   const terms = [];
// //   let sum = 0;
// //   for (let i = 1; i <= n; i++) {
// //     const t = sequence.getTerm(i);
// //     terms.push({ index: i, value: t });
// //     sum += t;
// //   }
// //   return { count: n, sum, max: sequence.getTerm(n), maxIndex: n, terms };
// // }

// // function computeRange(rawA, rawB, sequence, max) {
// //   const cap = max || 200;
// //   const a = parseInt(rawA, 10);
// //   const b = parseInt(rawB, 10);
// //   if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
// //     return { error: 'Enter two positive integer indexes.' };
// //   }
// //   if (a > b) {
// //     return { error: 'From-index must be less than or equal to to-index.' };
// //   }
// //   if (b - a > cap - 1) {
// //     return { error: `Range too wide \u2014 cap is ${cap} terms.` };
// //   }
// //   const terms = [];
// //   for (let i = a; i <= b; i++) {
// //     terms.push({ index: i, value: sequence.getTerm(i) });
// //   }
// //   return {
// //     error: null,
// //     terms,
// //     count: b - a + 1,
// //     min: sequence.getTerm(a),
// //     minIndex: a,
// //     max: sequence.getTerm(b),
// //     maxIndex: b,
// //   };
// // }

// // function computeMember(rawM, sequence) {
// //   const m = parseInt(rawM, 10);
// //   if (!Number.isInteger(m) || m < 1) {
// //     return { error: 'Enter a positive integer.' };
// //   }
// //   const idx = sequence.isMember(m);
// //   if (idx !== null && idx !== undefined) {
// //     return { error: null, isMember: true, value: m, index: idx };
// //   }
// //   const nearest = sequence.nearestNeighbors ? sequence.nearestNeighbors(m) : null;
// //   return { error: null, isMember: false, value: m, nearest };
// // }

// // function computeLookup(rawN, sequence) {
// //   const n = parseInt(rawN, 10);
// //   if (!Number.isInteger(n) || n < 1) {
// //     return { error: 'Enter a positive integer index.' };
// //   }
// //   return { error: null, index: n, value: sequence.getTerm(n) };
// // }

// // // =====================================================
// // // Styles
// // // =====================================================
// // const SE_STYLES = `
// //   .se-grid {
// //     display: grid;
// //     grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
// //     gap: 18px;
// //     align-items: start;
// //     width: 80%;
// //     max-width: 780px;
// //     margin: 0 auto;
// //   }
// //   @media (max-width: 720px) {
// //     .se-grid {
// //       grid-template-columns: minmax(0, 1fr);
// //       width: 95%;
// //     }
// //   }

// //   .se-card {
// //     background: var(--ms-card, #fff);
// //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //     border-radius: 12px;
// //     overflow: hidden;
// //   }
// //   .se-card-header {
// //     background: var(--ms-header-bg, #3B5BDB);
// //     color: var(--ms-header-text, #fff);
// //     padding: 13px 18px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: space-between;
// //     gap: 12px;
// //   }
// //   .se-card-title {
// //     margin: 0;
// //     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
// //     font-weight: 700;
// //     font-size: 1.15rem;
// //   }
// //   .se-card-subtitle {
// //     margin: 2px 0 0;
// //     font-size: 0.76rem;
// //     color: rgba(255, 255, 255, 0.82);
// //   }
// //   .se-badge {
// //     font-size: 0.68rem;
// //     background: rgba(255, 255, 255, 0.20);
// //     padding: 4px 10px;
// //     border-radius: 999px;
// //     font-weight: 500;
// //     white-space: nowrap;
// //   }
// //   .se-card-body { padding: 16px 18px; }

// //   .se-tabs {
// //     display: inline-flex;
// //     background: var(--ms-tab-bg, #e2e8f0);
// //     border-radius: 8px;
// //     padding: 3px;
// //     margin-bottom: 16px;
// //   }
// //   .se-tab {
// //     padding: 6px 13px;
// //     border: none;
// //     border-radius: 6px;
// //     font-family: inherit;
// //     font-size: 0.78rem;
// //     font-weight: 500;
// //     cursor: pointer;
// //     background: transparent;
// //     color: var(--ms-muted, #64748b);
// //     transition: all 0.15s;
// //   }
// //   .se-tab.active {
// //     background: var(--ms-tab-active, #fff);
// //     color: var(--ms-text, #1e3a5f);
// //     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
// //   }
// //   .se-tab:not(.active):hover { color: var(--ms-text-secondary, #334155); }

// //   .se-input-row {
// //     display: flex;
// //     align-items: end;
// //     gap: 10px;
// //     flex-wrap: wrap;
// //     margin-bottom: 16px;
// //   }
// //   .se-field { display: flex; flex-direction: column; gap: 4px; }
// //   .se-field label {
// //     font-size: 0.72rem;
// //     color: var(--ms-muted, #64748b);
// //     font-weight: 500;
// //   }
// //   .se-input {
// //     font-family: inherit;
// //     font-size: 0.88rem;
// //     padding: 7px 10px;
// //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //     border-radius: 7px;
// //     width: 90px;
// //     outline: none;
// //     background: var(--ms-card, #fff);
// //     color: var(--ms-text, #1e3a5f);
// //     transition: border-color 0.15s, box-shadow 0.15s;
// //   }
// //   .se-input:focus {
// //     border-color: var(--ms-accent, #3b82f6);
// //     box-shadow: 0 0 0 3px var(--ms-accent-light, #eff6ff);
// //   }
// //   .se-suffix {
// //     padding-bottom: 9px;
// //     color: var(--ms-muted, #64748b);
// //     font-size: 0.8rem;
// //   }
// //   .se-action {
// //     font-family: inherit;
// //     font-size: 0.8rem;
// //     font-weight: 500;
// //     padding: 8px 16px;
// //     background: var(--ms-header-bg, #3B5BDB);
// //     color: var(--ms-header-text, #fff);
// //     border: none;
// //     border-radius: 7px;
// //     cursor: pointer;
// //     transition: background 0.15s;
// //   }
// //   .se-action:hover { background: var(--ms-header-bg-hover, #2E48C7); }

// //   .se-stats {
// //     display: grid;
// //     grid-template-columns: repeat(3, 1fr);
// //     gap: 8px;
// //     margin-bottom: 16px;
// //   }
// //   .se-stats.two-col { grid-template-columns: repeat(2, 1fr); }
// //   .se-stat {
// //     background: var(--ms-header-soft, #EEF1FB);
// //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //     border-radius: 7px;
// //     padding: 8px 12px;
// //   }
// //   .se-stat-label {
// //     font-size: 0.6rem;
// //     color: var(--ms-muted, #64748b);
// //     font-weight: 600;
// //     text-transform: uppercase;
// //     letter-spacing: 0.08em;
// //     margin-bottom: 3px;
// //   }
// //   .se-stat-val {
// //     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
// //     font-size: 1rem;
// //     font-weight: 700;
// //     color: var(--ms-text, #1e3a5f);
// //     line-height: 1.2;
// //   }
// //   .se-stat-val.accent { color: var(--ms-accent, #3b82f6); }

// //   .se-section-label {
// //     font-size: 0.6rem;
// //     color: var(--ms-muted, #64748b);
// //     text-transform: uppercase;
// //     letter-spacing: 0.08em;
// //     font-weight: 600;
// //     margin-bottom: 6px;
// //   }

// //   .se-terms-wrap {
// //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //     border-radius: 7px;
// //     overflow: hidden;
// //     background: var(--ms-card, #fff);
// //   }
// //   .se-terms-grid {
// //     display: grid;
// //     grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
// //   }
// //   .se-term-cell {
// //     display: flex;
// //     align-items: baseline;
// //     gap: 7px;
// //     padding: 7px 11px;
// //     border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //     border-right: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
// //   }
// //   .se-term-idx {
// //     color: var(--ms-accent, #3b82f6);
// //     font-size: 0.7rem;
// //     font-weight: 500;
// //     min-width: 22px;
// //   }
// //   .se-term-val {
// //     color: var(--ms-text, #1e3a5f);
// //     font-size: 0.85rem;
// //     font-weight: 700;
// //   }

// //   .se-alert {
// //     border-radius: 7px;
// //     padding: 10px 14px;
// //     display: flex;
// //     align-items: center;
// //     gap: 10px;
// //     font-size: 0.85rem;
// //     border: 1px solid;
// //   }
// //   .se-alert-yes {
// //     background: var(--ms-success-bg, #E7F4EC);
// //     color: var(--ms-success-text, #166534);
// //     border-color: var(--ms-success-border, rgba(22, 101, 52, 0.2));
// //   }
// //   .se-alert-no {
// //     background: var(--ms-placeholder-bg, #f1f5f9);
// //     color: var(--ms-text, #1e3a5f);
// //     border-color: var(--ms-placeholder-border, #cbd5e1);
// //   }
// //   .se-alert-err {
// //     background: var(--ms-error-bg, #FBECEC);
// //     color: var(--ms-error-text, #991B1B);
// //     border-color: var(--ms-error-border, rgba(153, 27, 27, 0.2));
// //   }
// //   .se-alert-icon {
// //     flex-shrink: 0;
// //     width: 22px;
// //     height: 22px;
// //     border-radius: 50%;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     font-weight: 700;
// //     font-size: 0.8rem;
// //   }
// //   .se-alert-yes .se-alert-icon { background: rgba(22, 101, 52, 0.15); }
// //   .se-alert-no .se-alert-icon { background: rgba(0, 0, 0, 0.08); color: var(--ms-muted, #64748b); }
// //   .se-alert-err .se-alert-icon { background: rgba(153, 27, 27, 0.15); }

// //   .se-aside {
// //     background: var(--ms-card, #fff);
// //     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //     border-radius: 12px;
// //     padding: 14px 16px;
// //   }
// //   .se-aside-section {
// //     padding: 12px 0;
// //     border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
// //   }
// //   .se-aside-section:first-of-type { padding-top: 0; }
// //   .se-aside-section:last-of-type { border-bottom: none; padding-bottom: 0; }
// //   .se-aside-heading {
// //     font-size: 0.62rem;
// //     color: var(--ms-faint, #94a3b8);
// //     text-transform: uppercase;
// //     letter-spacing: 0.1em;
// //     font-weight: 600;
// //     margin: 0 0 8px 0;
// //   }
// //   .se-aside-content {
// //     font-size: 0.8rem;
// //     color: var(--ms-text-secondary, #475569);
// //     line-height: 1.55;
// //     overflow-x: auto;
// //   }
// //   .se-aside-content p { margin: 4px 0; }
// // `;

// // function SequenceExplorer({ name }) {
// //   const sequence = sequences[name];

// //   if (!sequence) {
// //     return <div>Unknown sequence: {name}</div>;
// //   }

// //   const inputs = sequence.initialInputs || {};

// //   const [activeTab, setActiveTab] = useState('browse');

// //   const [browseN, setBrowseN] = useState(inputs.browse || '20');
// //   const [browseResult, setBrowseResult] = useState(() =>
// //     computeBrowse(inputs.browse || '20', sequence, sequence.maxBrowseCount)
// //   );

// //   const [rangeA, setRangeA] = useState(inputs.rangeFrom || '5');
// //   const [rangeB, setRangeB] = useState(inputs.rangeTo || '15');
// //   const [rangeResult, setRangeResult] = useState(() =>
// //     computeRange(inputs.rangeFrom || '5', inputs.rangeTo || '15', sequence, sequence.maxRangeSpan)
// //   );

// //   const [memberM, setMemberM] = useState(inputs.member || '1');
// //   const [memberResult, setMemberResult] = useState(() =>
// //     computeMember(inputs.member || '1', sequence)
// //   );

// //   const [lookupN, setLookupN] = useState(inputs.lookup || '1');
// //   const [lookupResult, setLookupResult] = useState(() =>
// //     computeLookup(inputs.lookup || '1', sequence)
// //   );

// //   const runBrowse = () => setBrowseResult(computeBrowse(browseN, sequence, sequence.maxBrowseCount));
// //   const runRange = () => setRangeResult(computeRange(rangeA, rangeB, sequence, sequence.maxRangeSpan));
// //   const runMember = () => setMemberResult(computeMember(memberM, sequence));
// //   const runLookup = () => setLookupResult(computeLookup(lookupN, sequence));

// //   const onKey = (handler) => (e) => { if (e.key === 'Enter') handler(); };

// //   const N = sequence.notation;

// //   const currentResult = {
// //     browse: browseResult,
// //     range: rangeResult,
// //     member: memberResult,
// //     lookup: lookupResult,
// //   }[activeTab];

// //   const modeExp = sequence.modeExplanations && sequence.modeExplanations[activeTab];

// //   return (
// //     <>
// //       <style>{SE_STYLES}</style>
// //       <div className="se-grid">

// //         <div className="se-main">
// //           <div className="se-card">

// //             <div className="se-card-header">
// //               <div>
// //                 <h2 className="se-card-title">{sequence.name}</h2>
// //                 <div className="se-card-subtitle">
// //                   {sequence.formulaDisplay}
// //                   {sequence.meta && <> &middot; {sequence.meta}</>}
// //                 </div>
// //               </div>
// //               <span className="se-badge">Sequence explorer</span>
// //             </div>

// //             <div className="se-card-body">

// //               <div className="se-tabs" role="tablist">
// //                 <button className={`se-tab${activeTab === 'browse' ? ' active' : ''}`} onClick={() => setActiveTab('browse')}>Browse</button>
// //                 <button className={`se-tab${activeTab === 'range' ? ' active' : ''}`} onClick={() => setActiveTab('range')}>Range</button>
// //                 <button className={`se-tab${activeTab === 'member' ? ' active' : ''}`} onClick={() => setActiveTab('member')}>Is it one?</button>
// //                 <button className={`se-tab${activeTab === 'lookup' ? ' active' : ''}`} onClick={() => setActiveTab('lookup')}>n-th term</button>
// //               </div>

// //               {activeTab === 'browse' && (
// //                 <div>
// //                   <div className="se-input-row">
// //                     <div className="se-field">
// //                       <label htmlFor="se-b-n">Show first</label>
// //                       <input
// //                         id="se-b-n"
// //                         className="se-input"
// //                         type="number"
// //                         min="1"
// //                         max={sequence.maxBrowseCount || 200}
// //                         step="1"
// //                         value={browseN}
// //                         onChange={(e) => setBrowseN(e.target.value)}
// //                         onKeyDown={onKey(runBrowse)}
// //                       />
// //                     </div>
// //                     <span className="se-suffix">terms</span>
// //                     <button className="se-action" onClick={runBrowse}>Update</button>
// //                   </div>

// //                   <div className="se-stats">
// //                     <div className="se-stat">
// //                       <div className="se-stat-label">Showing</div>
// //                       <div className="se-stat-val">
// //                         {browseResult.count} term{browseResult.count === 1 ? '' : 's'}
// //                       </div>
// //                     </div>
// //                     <div className="se-stat">
// //                       <div className="se-stat-label">Largest</div>
// //                       <div className="se-stat-val accent">
// //                         {N}<sub>{browseResult.maxIndex}</sub> = {fmt(browseResult.max)}
// //                       </div>
// //                     </div>
// //                     <div className="se-stat">
// //                       <div className="se-stat-label">Sum</div>
// //                       <div className="se-stat-val">{fmt(browseResult.sum)}</div>
// //                     </div>
// //                   </div>

// //                   <div className="se-section-label">First N terms</div>
// //                   <div className="se-terms-wrap">
// //                     <div className="se-terms-grid">
// //                       {browseResult.terms.map((t) => (
// //                         <div key={t.index} className="se-term-cell">
// //                           <span className="se-term-idx">{t.index}</span>
// //                           <span className="se-term-val">{fmt(t.value)}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {activeTab === 'range' && (
// //                 <div>
// //                   <div className="se-input-row">
// //                     <div className="se-field">
// //                       <label htmlFor="se-r-a">From index</label>
// //                       <input id="se-r-a" className="se-input" type="number" min="1" step="1"
// //                         value={rangeA} onChange={(e) => setRangeA(e.target.value)} onKeyDown={onKey(runRange)} />
// //                     </div>
// //                     <div className="se-field">
// //                       <label htmlFor="se-r-b">To index</label>
// //                       <input id="se-r-b" className="se-input" type="number" min="1" step="1"
// //                         value={rangeB} onChange={(e) => setRangeB(e.target.value)} onKeyDown={onKey(runRange)} />
// //                     </div>
// //                     <button className="se-action" onClick={runRange}>List range</button>
// //                   </div>

// //                   {rangeResult.error ? (
// //                     <div className="se-alert se-alert-err">
// //                       <div className="se-alert-icon">!</div>
// //                       <div>{rangeResult.error}</div>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <div className="se-stats">
// //                         <div className="se-stat">
// //                           <div className="se-stat-label">Count</div>
// //                           <div className="se-stat-val">
// //                             {rangeResult.count} term{rangeResult.count === 1 ? '' : 's'}
// //                           </div>
// //                         </div>
// //                         <div className="se-stat">
// //                           <div className="se-stat-label">Smallest</div>
// //                           <div className="se-stat-val">
// //                             {N}<sub>{rangeResult.minIndex}</sub> = {fmt(rangeResult.min)}
// //                           </div>
// //                         </div>
// //                         <div className="se-stat">
// //                           <div className="se-stat-label">Largest</div>
// //                           <div className="se-stat-val accent">
// //                             {N}<sub>{rangeResult.maxIndex}</sub> = {fmt(rangeResult.max)}
// //                           </div>
// //                         </div>
// //                       </div>

// //                       <div className="se-section-label">Terms in range</div>
// //                       <div className="se-terms-wrap">
// //                         <div className="se-terms-grid">
// //                           {rangeResult.terms.map((t) => (
// //                             <div key={t.index} className="se-term-cell">
// //                               <span className="se-term-idx">{t.index}</span>
// //                               <span className="se-term-val">{fmt(t.value)}</span>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </>
// //                   )}
// //                 </div>
// //               )}

// //               {activeTab === 'member' && (
// //                 <div>
// //                   <div className="se-input-row">
// //                     <div className="se-field">
// //                       <label htmlFor="se-m-n">Test number</label>
// //                       <input id="se-m-n" className="se-input" type="number" min="1" step="1" style={{ width: 140 }}
// //                         value={memberM} onChange={(e) => setMemberM(e.target.value)} onKeyDown={onKey(runMember)} />
// //                     </div>
// //                     <button className="se-action" onClick={runMember}>Check</button>
// //                   </div>

// //                   {memberResult.error ? (
// //                     <div className="se-alert se-alert-err">
// //                       <div className="se-alert-icon">!</div>
// //                       <div>{memberResult.error}</div>
// //                     </div>
// //                   ) : memberResult.isMember ? (
// //                     <div className="se-alert se-alert-yes">
// //                       <div className="se-alert-icon">&#10003;</div>
// //                       <div>
// //                         <strong>{fmt(memberResult.value)}</strong> is {sequence.memberLabel} &mdash; this is{' '}
// //                         {N}<sub>{memberResult.index}</sub>.
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <div className="se-alert se-alert-no">
// //                       <div className="se-alert-icon">&times;</div>
// //                       <div>
// //                         <strong>{fmt(memberResult.value)}</strong> is not {sequence.memberLabel}.
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               )}

// //               {activeTab === 'lookup' && (
// //                 <div>
// //                   <div className="se-input-row">
// //                     <div className="se-field">
// //                       <label htmlFor="se-l-n">Index n</label>
// //                       <input id="se-l-n" className="se-input" type="number" min="1" step="1" style={{ width: 140 }}
// //                         value={lookupN} onChange={(e) => setLookupN(e.target.value)} onKeyDown={onKey(runLookup)} />
// //                     </div>
// //                     <button className="se-action" onClick={runLookup}>Get term</button>
// //                   </div>

// //                   {lookupResult.error ? (
// //                     <div className="se-alert se-alert-err">
// //                       <div className="se-alert-icon">!</div>
// //                       <div>{lookupResult.error}</div>
// //                     </div>
// //                   ) : (
// //                     <div className="se-stats two-col">
// //                       <div className="se-stat">
// //                         <div className="se-stat-label">Index</div>
// //                         <div className="se-stat-val">n = {fmt(lookupResult.index)}</div>
// //                       </div>
// //                       <div className="se-stat">
// //                         <div className="se-stat-label">Value</div>
// //                         <div className="se-stat-val accent">
// //                           {N}<sub>{lookupResult.index}</sub> = {fmt(lookupResult.value)}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               )}

// //             </div>
// //           </div>
// //         </div>

// //         <aside className="se-aside">
// //           {modeExp && (
// //             <>
// //               <section className="se-aside-section">
// //                 <h3 className="se-aside-heading">How it works</h3>
// //                 <div className="se-aside-content">{processContent(modeExp.theory)}</div>
// //               </section>
// //               <section className="se-aside-section">
// //                 <h3 className="se-aside-heading">Walkthrough</h3>
// //                 <div className="se-aside-content">{processContent(modeExp.renderWalkthrough(currentResult))}</div>
// //               </section>
// //             </>
// //           )}
// //         </aside>

// //       </div>
// //     </>
// //   );
// // }

// // export default SequenceExplorer;


// 'use client'
// import React, { useState } from 'react';

// // FAKE IMPORT — replace with your actual path.
// // processContent(content) takes a markdown + LaTeX string and
// // returns React elements with KaTeX-rendered math.
// import { processContent } from '../../../utils/contentProcessor';

// import sequences from './sequences';

// // Deterministic thousands-separator (avoids hydration mismatches).
// const fmt = (n) => {
//   if (!Number.isFinite(n)) return String(n);
//   return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// };

// // =====================================================
// // Pure compute functions per mode
// // =====================================================
// function computeBrowse(rawN, sequence, max) {
//   const cap = max || 200;
//   const n = Math.max(1, Math.min(cap, parseInt(rawN, 10) || 20));
//   const terms = [];
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     const t = sequence.getTerm(i);
//     terms.push({ index: i, value: t });
//     sum += t;
//   }
//   return { count: n, sum, max: sequence.getTerm(n), maxIndex: n, terms };
// }

// function computeRange(rawA, rawB, sequence, max) {
//   const cap = max || 200;
//   const a = parseInt(rawA, 10);
//   const b = parseInt(rawB, 10);
//   if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
//     return { error: 'Enter two positive integer indexes.' };
//   }
//   if (a > b) {
//     return { error: 'From-index must be less than or equal to to-index.' };
//   }
//   if (b - a > cap - 1) {
//     return { error: `Range too wide \u2014 cap is ${cap} terms.` };
//   }
//   const terms = [];
//   for (let i = a; i <= b; i++) {
//     terms.push({ index: i, value: sequence.getTerm(i) });
//   }
//   return {
//     error: null,
//     terms,
//     count: b - a + 1,
//     min: sequence.getTerm(a),
//     minIndex: a,
//     max: sequence.getTerm(b),
//     maxIndex: b,
//   };
// }

// function computeMember(rawM, sequence) {
//   const m = parseInt(rawM, 10);
//   if (!Number.isInteger(m) || m < 1) {
//     return { error: 'Enter a positive integer.' };
//   }
//   const idx = sequence.isMember(m);
//   if (idx !== null && idx !== undefined) {
//     return { error: null, isMember: true, value: m, index: idx };
//   }
//   const nearest = sequence.nearestNeighbors ? sequence.nearestNeighbors(m) : null;
//   return { error: null, isMember: false, value: m, nearest };
// }

// function computeLookup(rawN, sequence) {
//   const n = parseInt(rawN, 10);
//   if (!Number.isInteger(n) || n < 1) {
//     return { error: 'Enter a positive integer index.' };
//   }
//   return { error: null, index: n, value: sequence.getTerm(n) };
// }

// // =====================================================
// // Styles
// // =====================================================
// const SE_STYLES = `
//   .se-grid {
//     display: grid;
//     grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
//     gap: 18px;
//     align-items: start;
//     width: 80%;
//     max-width: 780px;
//     margin: 0 auto;
//   }
//   @media (max-width: 720px) {
//     .se-grid {
//       grid-template-columns: minmax(0, 1fr);
//       width: 95%;
//     }
//   }

//   .se-card {
//     background: var(--ms-card, #fff);
//     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     border-radius: 12px;
//     overflow: hidden;
//   }
//   .se-card-header {
//     background: var(--ms-header-bg, #3B5BDB);
//     color: var(--ms-header-text, #fff);
//     padding: 13px 18px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 12px;
//   }
//   .se-card-title {
//     margin: 0;
//     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
//     font-weight: 700;
//     font-size: 1.15rem;
//   }
//   .se-card-subtitle {
//     margin: 2px 0 0;
//     font-size: 0.76rem;
//     color: rgba(255, 255, 255, 0.82);
//   }
//   .se-badge {
//     font-size: 0.68rem;
//     background: rgba(255, 255, 255, 0.20);
//     padding: 4px 10px;
//     border-radius: 999px;
//     font-weight: 500;
//     white-space: nowrap;
//   }
//   .se-card-body { padding: 16px 18px; }

//   .se-tabs {
//     display: inline-flex;
//     background: var(--ms-tab-bg, #e2e8f0);
//     border-radius: 8px;
//     padding: 3px;
//     margin-bottom: 16px;
//   }
//   .se-tab {
//     padding: 6px 13px;
//     border: none;
//     border-radius: 6px;
//     font-family: inherit;
//     font-size: 0.78rem;
//     font-weight: 500;
//     cursor: pointer;
//     background: transparent;
//     color: var(--ms-muted, #64748b);
//     transition: all 0.15s;
//   }
//   .se-tab.active {
//     background: var(--ms-tab-active, #fff);
//     color: var(--ms-text, #1e3a5f);
//     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
//   }
//   .se-tab:not(.active):hover { color: var(--ms-text-secondary, #334155); }

//   .se-input-row {
//     display: flex;
//     align-items: end;
//     gap: 10px;
//     flex-wrap: wrap;
//     margin-bottom: 16px;
//   }
//   .se-field { display: flex; flex-direction: column; gap: 4px; }
//   .se-field label {
//     font-size: 0.72rem;
//     color: var(--ms-muted, #64748b);
//     font-weight: 500;
//   }
//   .se-input {
//     font-family: inherit;
//     font-size: 0.88rem;
//     padding: 7px 10px;
//     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     border-radius: 7px;
//     width: 90px;
//     outline: none;
//     background: var(--ms-card, #fff);
//     color: var(--ms-text, #1e3a5f);
//     transition: border-color 0.15s, box-shadow 0.15s;
//   }
//   .se-input:focus {
//     border-color: var(--ms-accent, #3b82f6);
//     box-shadow: 0 0 0 3px var(--ms-accent-light, #eff6ff);
//   }
//   .se-suffix {
//     padding-bottom: 9px;
//     color: var(--ms-muted, #64748b);
//     font-size: 0.8rem;
//   }
//   .se-action {
//     font-family: inherit;
//     font-size: 0.8rem;
//     font-weight: 500;
//     padding: 8px 16px;
//     background: var(--ms-header-bg, #3B5BDB);
//     color: var(--ms-header-text, #fff);
//     border: none;
//     border-radius: 7px;
//     cursor: pointer;
//     transition: background 0.15s;
//   }
//   .se-action:hover { background: var(--ms-header-bg-hover, #2E48C7); }

//   .se-stats {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 8px;
//     margin-bottom: 16px;
//   }
//   .se-stats.two-col { grid-template-columns: repeat(2, 1fr); }
//   .se-stat {
//     background: var(--ms-header-soft, #EEF1FB);
//     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     border-radius: 7px;
//     padding: 8px 12px;
//   }
//   .se-stat-label {
//     font-size: 0.6rem;
//     color: var(--ms-muted, #64748b);
//     font-weight: 600;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     margin-bottom: 3px;
//   }
//   .se-stat-val {
//     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
//     font-size: 1rem;
//     font-weight: 700;
//     color: var(--ms-text, #1e3a5f);
//     line-height: 1.2;
//   }
//   .se-stat-val.accent { color: var(--ms-accent, #3b82f6); }

//   .se-section-label {
//     font-size: 0.6rem;
//     color: var(--ms-muted, #64748b);
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     font-weight: 600;
//     margin-bottom: 6px;
//   }

//   .se-terms-wrap {
//     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     border-radius: 7px;
//     overflow: hidden;
//     background: var(--ms-card, #fff);
//   }
//   .se-terms-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
//   }
//   .se-term-cell {
//     display: flex;
//     align-items: baseline;
//     gap: 7px;
//     padding: 7px 11px;
//     border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     border-right: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
//   }
//   .se-term-idx {
//     color: var(--ms-accent, #3b82f6);
//     font-size: 0.7rem;
//     font-weight: 500;
//     min-width: 22px;
//   }
//   .se-term-val {
//     color: var(--ms-text, #1e3a5f);
//     font-size: 0.85rem;
//     font-weight: 700;
//   }

//   .se-alert {
//     border-radius: 7px;
//     padding: 10px 14px;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     font-size: 0.85rem;
//     border: 1px solid;
//   }
//   .se-alert-yes {
//     background: var(--ms-success-bg, #E7F4EC);
//     color: var(--ms-success-text, #166534);
//     border-color: var(--ms-success-border, rgba(22, 101, 52, 0.2));
//   }
//   .se-alert-no {
//     background: var(--ms-placeholder-bg, #f1f5f9);
//     color: var(--ms-text, #1e3a5f);
//     border-color: var(--ms-placeholder-border, #cbd5e1);
//   }
//   .se-alert-err {
//     background: var(--ms-error-bg, #FBECEC);
//     color: var(--ms-error-text, #991B1B);
//     border-color: var(--ms-error-border, rgba(153, 27, 27, 0.2));
//   }
//   .se-alert-icon {
//     flex-shrink: 0;
//     width: 22px;
//     height: 22px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-weight: 700;
//     font-size: 0.8rem;
//   }
//   .se-alert-yes .se-alert-icon { background: rgba(22, 101, 52, 0.15); }
//   .se-alert-no .se-alert-icon { background: rgba(0, 0, 0, 0.08); color: var(--ms-muted, #64748b); }
//   .se-alert-err .se-alert-icon { background: rgba(153, 27, 27, 0.15); }

//   .se-aside {
//     background: var(--ms-card, #fff);
//     border: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     border-radius: 12px;
//     padding: 14px 16px;
//   }
//   .se-aside-section {
//     padding: 12px 0;
//     border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
//   }
//   .se-aside-section:first-of-type { padding-top: 0; }
//   .se-aside-section:last-of-type { border-bottom: none; padding-bottom: 0; }
//   .se-aside-heading {
//     font-size: 0.62rem;
//     color: var(--ms-faint, #94a3b8);
//     text-transform: uppercase;
//     letter-spacing: 0.1em;
//     font-weight: 600;
//     margin: 0 0 8px 0;
//   }
//   .se-aside-content {
//     font-size: 0.8rem;
//     color: var(--ms-text-secondary, #475569);
//     line-height: 1.55;
//     overflow-x: auto;
//   }
//   .se-aside-content p { margin: 4px 0; }
// `;

// function SequenceExplorer({ name = 'triangular' }) {
//   const sequence = sequences[name] || sequences.triangular;

//   const inputs = sequence.initialInputs || {};

//   const [activeTab, setActiveTab] = useState('browse');

//   const [browseN, setBrowseN] = useState(inputs.browse || '20');
//   const [browseResult, setBrowseResult] = useState(() =>
//     computeBrowse(inputs.browse || '20', sequence, sequence.maxBrowseCount)
//   );

//   const [rangeA, setRangeA] = useState(inputs.rangeFrom || '5');
//   const [rangeB, setRangeB] = useState(inputs.rangeTo || '15');
//   const [rangeResult, setRangeResult] = useState(() =>
//     computeRange(inputs.rangeFrom || '5', inputs.rangeTo || '15', sequence, sequence.maxRangeSpan)
//   );

//   const [memberM, setMemberM] = useState(inputs.member || '1');
//   const [memberResult, setMemberResult] = useState(() =>
//     computeMember(inputs.member || '1', sequence)
//   );

//   const [lookupN, setLookupN] = useState(inputs.lookup || '1');
//   const [lookupResult, setLookupResult] = useState(() =>
//     computeLookup(inputs.lookup || '1', sequence)
//   );

//   const runBrowse = () => setBrowseResult(computeBrowse(browseN, sequence, sequence.maxBrowseCount));
//   const runRange = () => setRangeResult(computeRange(rangeA, rangeB, sequence, sequence.maxRangeSpan));
//   const runMember = () => setMemberResult(computeMember(memberM, sequence));
//   const runLookup = () => setLookupResult(computeLookup(lookupN, sequence));

//   const onKey = (handler) => (e) => { if (e.key === 'Enter') handler(); };

//   const N = sequence.notation;

//   const currentResult = {
//     browse: browseResult,
//     range: rangeResult,
//     member: memberResult,
//     lookup: lookupResult,
//   }[activeTab];

//   const modeExp = sequence.modeExplanations && sequence.modeExplanations[activeTab];

//   return (
//     <>
//       <style>{SE_STYLES}</style>
//       <div className="se-grid">

//         <div className="se-main">
//           <div className="se-card">

//             <div className="se-card-header">
//               <div>
//                 <h2 className="se-card-title">{sequence.name}</h2>
//                 <div className="se-card-subtitle">
//                   {sequence.formulaDisplay}
//                   {sequence.meta && <> &middot; {sequence.meta}</>}
//                 </div>
//               </div>
//               <span className="se-badge">Sequence explorer</span>
//             </div>

//             <div className="se-card-body">

//               <div className="se-tabs" role="tablist">
//                 <button className={`se-tab${activeTab === 'browse' ? ' active' : ''}`} onClick={() => setActiveTab('browse')}>Browse</button>
//                 <button className={`se-tab${activeTab === 'range' ? ' active' : ''}`} onClick={() => setActiveTab('range')}>Range</button>
//                 <button className={`se-tab${activeTab === 'member' ? ' active' : ''}`} onClick={() => setActiveTab('member')}>Is it one?</button>
//                 <button className={`se-tab${activeTab === 'lookup' ? ' active' : ''}`} onClick={() => setActiveTab('lookup')}>n-th term</button>
//               </div>

//               {activeTab === 'browse' && (
//                 <div>
//                   <div className="se-input-row">
//                     <div className="se-field">
//                       <label htmlFor="se-b-n">Show first</label>
//                       <input
//                         id="se-b-n"
//                         className="se-input"
//                         type="number"
//                         min="1"
//                         max={sequence.maxBrowseCount || 200}
//                         step="1"
//                         value={browseN}
//                         onChange={(e) => setBrowseN(e.target.value)}
//                         onKeyDown={onKey(runBrowse)}
//                       />
//                     </div>
//                     <span className="se-suffix">terms</span>
//                     <button className="se-action" onClick={runBrowse}>Update</button>
//                   </div>

//                   <div className="se-stats">
//                     <div className="se-stat">
//                       <div className="se-stat-label">Showing</div>
//                       <div className="se-stat-val">
//                         {browseResult.count} term{browseResult.count === 1 ? '' : 's'}
//                       </div>
//                     </div>
//                     <div className="se-stat">
//                       <div className="se-stat-label">Largest</div>
//                       <div className="se-stat-val accent">
//                         {N}<sub>{browseResult.maxIndex}</sub> = {fmt(browseResult.max)}
//                       </div>
//                     </div>
//                     <div className="se-stat">
//                       <div className="se-stat-label">Sum</div>
//                       <div className="se-stat-val">{fmt(browseResult.sum)}</div>
//                     </div>
//                   </div>

//                   <div className="se-section-label">First N terms</div>
//                   <div className="se-terms-wrap">
//                     <div className="se-terms-grid">
//                       {browseResult.terms.map((t) => (
//                         <div key={t.index} className="se-term-cell">
//                           <span className="se-term-idx">{t.index}</span>
//                           <span className="se-term-val">{fmt(t.value)}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeTab === 'range' && (
//                 <div>
//                   <div className="se-input-row">
//                     <div className="se-field">
//                       <label htmlFor="se-r-a">From index</label>
//                       <input id="se-r-a" className="se-input" type="number" min="1" step="1"
//                         value={rangeA} onChange={(e) => setRangeA(e.target.value)} onKeyDown={onKey(runRange)} />
//                     </div>
//                     <div className="se-field">
//                       <label htmlFor="se-r-b">To index</label>
//                       <input id="se-r-b" className="se-input" type="number" min="1" step="1"
//                         value={rangeB} onChange={(e) => setRangeB(e.target.value)} onKeyDown={onKey(runRange)} />
//                     </div>
//                     <button className="se-action" onClick={runRange}>List range</button>
//                   </div>

//                   {rangeResult.error ? (
//                     <div className="se-alert se-alert-err">
//                       <div className="se-alert-icon">!</div>
//                       <div>{rangeResult.error}</div>
//                     </div>
//                   ) : (
//                     <>
//                       <div className="se-stats">
//                         <div className="se-stat">
//                           <div className="se-stat-label">Count</div>
//                           <div className="se-stat-val">
//                             {rangeResult.count} term{rangeResult.count === 1 ? '' : 's'}
//                           </div>
//                         </div>
//                         <div className="se-stat">
//                           <div className="se-stat-label">Smallest</div>
//                           <div className="se-stat-val">
//                             {N}<sub>{rangeResult.minIndex}</sub> = {fmt(rangeResult.min)}
//                           </div>
//                         </div>
//                         <div className="se-stat">
//                           <div className="se-stat-label">Largest</div>
//                           <div className="se-stat-val accent">
//                             {N}<sub>{rangeResult.maxIndex}</sub> = {fmt(rangeResult.max)}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="se-section-label">Terms in range</div>
//                       <div className="se-terms-wrap">
//                         <div className="se-terms-grid">
//                           {rangeResult.terms.map((t) => (
//                             <div key={t.index} className="se-term-cell">
//                               <span className="se-term-idx">{t.index}</span>
//                               <span className="se-term-val">{fmt(t.value)}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}

//               {activeTab === 'member' && (
//                 <div>
//                   <div className="se-input-row">
//                     <div className="se-field">
//                       <label htmlFor="se-m-n">Test number</label>
//                       <input id="se-m-n" className="se-input" type="number" min="1" step="1" style={{ width: 140 }}
//                         value={memberM} onChange={(e) => setMemberM(e.target.value)} onKeyDown={onKey(runMember)} />
//                     </div>
//                     <button className="se-action" onClick={runMember}>Check</button>
//                   </div>

//                   {memberResult.error ? (
//                     <div className="se-alert se-alert-err">
//                       <div className="se-alert-icon">!</div>
//                       <div>{memberResult.error}</div>
//                     </div>
//                   ) : memberResult.isMember ? (
//                     <div className="se-alert se-alert-yes">
//                       <div className="se-alert-icon">&#10003;</div>
//                       <div>
//                         <strong>{fmt(memberResult.value)}</strong> is {sequence.memberLabel} &mdash; this is{' '}
//                         {N}<sub>{memberResult.index}</sub>.
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="se-alert se-alert-no">
//                       <div className="se-alert-icon">&times;</div>
//                       <div>
//                         <strong>{fmt(memberResult.value)}</strong> is not {sequence.memberLabel}.
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//               {activeTab === 'lookup' && (
//                 <div>
//                   <div className="se-input-row">
//                     <div className="se-field">
//                       <label htmlFor="se-l-n">Index n</label>
//                       <input id="se-l-n" className="se-input" type="number" min="1" step="1" style={{ width: 140 }}
//                         value={lookupN} onChange={(e) => setLookupN(e.target.value)} onKeyDown={onKey(runLookup)} />
//                     </div>
//                     <button className="se-action" onClick={runLookup}>Get term</button>
//                   </div>

//                   {lookupResult.error ? (
//                     <div className="se-alert se-alert-err">
//                       <div className="se-alert-icon">!</div>
//                       <div>{lookupResult.error}</div>
//                     </div>
//                   ) : (
//                     <div className="se-stats two-col">
//                       <div className="se-stat">
//                         <div className="se-stat-label">Index</div>
//                         <div className="se-stat-val">n = {fmt(lookupResult.index)}</div>
//                       </div>
//                       <div className="se-stat">
//                         <div className="se-stat-label">Value</div>
//                         <div className="se-stat-val accent">
//                           {N}<sub>{lookupResult.index}</sub> = {fmt(lookupResult.value)}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>

//         <aside className="se-aside">
//           {modeExp && (
//             <>
//               <section className="se-aside-section">
//                 <h3 className="se-aside-heading">How it works</h3>
//                 <div className="se-aside-content">{processContent(modeExp.theory)}</div>
//               </section>
//               <section className="se-aside-section">
//                 <h3 className="se-aside-heading">Walkthrough</h3>
//                 <div className="se-aside-content">{processContent(modeExp.renderWalkthrough(currentResult))}</div>
//               </section>
//             </>
//           )}
//         </aside>

//       </div>
//     </>
//   );
// }

// export default SequenceExplorer;



'use client'
import React, { useState } from 'react';

// FAKE IMPORT — replace with your actual path.
// processContent(content) takes a markdown + LaTeX string and
// returns React elements with KaTeX-rendered math.
import { processContent } from '../../../utils/contentProcessor';

import sequences from './sequences';

// Deterministic thousands-separator (avoids hydration mismatches).
const fmt = (n) => {
  if (!Number.isFinite(n)) return String(n);
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// =====================================================
// Pure compute functions per mode
// =====================================================
function computeBrowse(rawN, sequence, max) {
  const cap = max || 200;
  const n = Math.max(1, Math.min(cap, parseInt(rawN, 10) || 20));
  const terms = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    const t = sequence.getTerm(i);
    terms.push({ index: i, value: t });
    sum += t;
  }
  return { count: n, sum, max: sequence.getTerm(n), maxIndex: n, terms };
}

function computeRange(rawA, rawB, sequence, max) {
  const cap = max || 200;
  const a = parseInt(rawA, 10);
  const b = parseInt(rawB, 10);
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
    return { error: 'Enter two positive integer indexes.' };
  }
  if (a > b) {
    return { error: 'From-index must be less than or equal to to-index.' };
  }
  if (b - a > cap - 1) {
    return { error: `Range too wide \u2014 cap is ${cap} terms.` };
  }
  const terms = [];
  for (let i = a; i <= b; i++) {
    terms.push({ index: i, value: sequence.getTerm(i) });
  }
  return {
    error: null,
    terms,
    count: b - a + 1,
    min: sequence.getTerm(a),
    minIndex: a,
    max: sequence.getTerm(b),
    maxIndex: b,
  };
}

function computeMember(rawM, sequence) {
  const m = parseInt(rawM, 10);
  if (!Number.isInteger(m) || m < 1) {
    return { error: 'Enter a positive integer.' };
  }
  const idx = sequence.isMember(m);
  if (idx !== null && idx !== undefined) {
    return { error: null, isMember: true, value: m, index: idx };
  }
  const nearest = sequence.nearestNeighbors ? sequence.nearestNeighbors(m) : null;
  return { error: null, isMember: false, value: m, nearest };
}

function computeLookup(rawN, sequence) {
  const n = parseInt(rawN, 10);
  if (!Number.isInteger(n) || n < 1) {
    return { error: 'Enter a positive integer index.' };
  }
  return { error: null, index: n, value: sequence.getTerm(n) };
}

// =====================================================
// Styles
// =====================================================
const SE_STYLES = `
  .se-grid {
    display: grid;
    grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
    gap: 18px;
    align-items: start;
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media (max-width: 720px) {
    .se-grid {
      grid-template-columns: minmax(0, 1fr);
      width: 95%;
    }
  }

  .se-card {
    background: var(--ms-card, #fff);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 12px;
    overflow: hidden;
  }
  .se-card-header {
    background: var(--ms-header-bg, #3B5BDB);
    color: var(--ms-header-text, #fff);
    padding: 13px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .se-card-title {
    margin: 0;
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    font-weight: 700;
    font-size: 1.15rem;
  }
  .se-card-subtitle {
    margin: 2px 0 0;
    font-size: 0.76rem;
    color: rgba(255, 255, 255, 0.82);
  }
  .se-badge {
    font-size: 0.68rem;
    background: rgba(255, 255, 255, 0.20);
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 500;
    white-space: nowrap;
  }
  .se-card-body { padding: 16px 18px; }

  .se-tabs {
    display: inline-flex;
    background: var(--ms-tab-bg, #e2e8f0);
    border-radius: 8px;
    padding: 3px;
    margin-bottom: 16px;
  }
  .se-tab {
    padding: 6px 13px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.78rem;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    color: var(--ms-muted, #64748b);
    transition: all 0.15s;
  }
  .se-tab.active {
    background: var(--ms-tab-active, #fff);
    color: var(--ms-text, #1e3a5f);
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .se-tab:not(.active):hover { color: var(--ms-text-secondary, #334155); }

  .se-input-row {
    display: flex;
    align-items: end;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .se-field { display: flex; flex-direction: column; gap: 4px; }
  .se-field label {
    font-size: 0.72rem;
    color: var(--ms-muted, #64748b);
    font-weight: 500;
  }
  .se-input {
    font-family: inherit;
    font-size: 0.88rem;
    padding: 7px 10px;
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 7px;
    width: 90px;
    outline: none;
    background: var(--ms-card, #fff);
    color: var(--ms-text, #1e3a5f);
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .se-input:focus {
    border-color: var(--ms-accent, #3b82f6);
    box-shadow: 0 0 0 3px var(--ms-accent-light, #eff6ff);
  }
  .se-suffix {
    padding-bottom: 9px;
    color: var(--ms-muted, #64748b);
    font-size: 0.8rem;
  }
  .se-action {
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 8px 16px;
    background: var(--ms-header-bg, #3B5BDB);
    color: var(--ms-header-text, #fff);
    border: none;
    border-radius: 7px;
    cursor: pointer;
    transition: background 0.15s;
  }
  .se-action:hover { background: var(--ms-header-bg-hover, #2E48C7); }

  .se-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 16px;
  }
  .se-stats.two-col { grid-template-columns: repeat(2, 1fr); }
  .se-stat {
    background: var(--ms-header-soft, #EEF1FB);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 7px;
    padding: 8px 12px;
  }
  .se-stat-label {
    font-size: 0.6rem;
    color: var(--ms-muted, #64748b);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 3px;
  }
  .se-stat-val {
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
    font-size: 1rem;
    font-weight: 700;
    color: var(--ms-text, #1e3a5f);
    line-height: 1.2;
  }
  .se-stat-val.accent { color: var(--ms-accent, #3b82f6); }

  .se-section-label {
    font-size: 0.6rem;
    color: var(--ms-muted, #64748b);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .se-terms-wrap {
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 7px;
    overflow: hidden;
    background: var(--ms-card, #fff);
  }
  .se-terms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
  .se-term-cell {
    display: flex;
    align-items: baseline;
    gap: 7px;
    padding: 7px 11px;
    border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-right: 1px solid var(--ms-placeholder-border, #cbd5e1);
    font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
  }
  .se-term-idx {
    color: var(--ms-accent, #3b82f6);
    font-size: 0.7rem;
    font-weight: 500;
    min-width: 22px;
  }
  .se-term-val {
    color: var(--ms-text, #1e3a5f);
    font-size: 0.85rem;
    font-weight: 700;
  }

  .se-alert {
    border-radius: 7px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    border: 1px solid;
  }
  .se-alert-yes {
    background: var(--ms-success-bg, #E7F4EC);
    color: var(--ms-success-text, #166534);
    border-color: var(--ms-success-border, rgba(22, 101, 52, 0.2));
  }
  .se-alert-no {
    background: var(--ms-placeholder-bg, #f1f5f9);
    color: var(--ms-text, #1e3a5f);
    border-color: var(--ms-placeholder-border, #cbd5e1);
  }
  .se-alert-err {
    background: var(--ms-error-bg, #FBECEC);
    color: var(--ms-error-text, #991B1B);
    border-color: var(--ms-error-border, rgba(153, 27, 27, 0.2));
  }
  .se-alert-icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .se-alert-yes .se-alert-icon { background: rgba(22, 101, 52, 0.15); }
  .se-alert-no .se-alert-icon { background: rgba(0, 0, 0, 0.08); color: var(--ms-muted, #64748b); }
  .se-alert-err .se-alert-icon { background: rgba(153, 27, 27, 0.15); }

  .se-aside {
    background: var(--ms-card, #fff);
    border: 1px solid var(--ms-placeholder-border, #cbd5e1);
    border-radius: 12px;
    padding: 14px 16px;
  }
  .se-aside-section {
    padding: 12px 0;
    border-bottom: 1px solid var(--ms-placeholder-border, #cbd5e1);
  }
  .se-aside-section:first-of-type { padding-top: 0; }
  .se-aside-section:last-of-type { border-bottom: none; padding-bottom: 0; }
  .se-aside-heading {
    font-size: 0.62rem;
    color: var(--ms-faint, #94a3b8);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  .se-aside-content {
    font-size: 0.8rem;
    color: var(--ms-text-secondary, #475569);
    line-height: 1.55;
    overflow-x: auto;
  }
  .se-aside-content p { margin: 4px 0; }
`;

function SequenceExplorer({ name = 'triangular' }) {
  const sequence = sequences[name] || sequences.triangular;

  const inputs = sequence.initialInputs || {};

  const [activeTab, setActiveTab] = useState('browse');

  const [browseN, setBrowseN] = useState(inputs.browse || '20');
  const [browseResult, setBrowseResult] = useState(() =>
    computeBrowse(inputs.browse || '20', sequence, sequence.maxBrowseCount)
  );

  const [rangeA, setRangeA] = useState(inputs.rangeFrom || '5');
  const [rangeB, setRangeB] = useState(inputs.rangeTo || '15');
  const [rangeResult, setRangeResult] = useState(() =>
    computeRange(inputs.rangeFrom || '5', inputs.rangeTo || '15', sequence, sequence.maxRangeSpan)
  );

  const [memberM, setMemberM] = useState(inputs.member || '1');
  const [memberResult, setMemberResult] = useState(() =>
    computeMember(inputs.member || '1', sequence)
  );

  const [lookupN, setLookupN] = useState(inputs.lookup || '1');
  const [lookupResult, setLookupResult] = useState(() =>
    computeLookup(inputs.lookup || '1', sequence)
  );

  const runBrowse = () => setBrowseResult(computeBrowse(browseN, sequence, sequence.maxBrowseCount));
  const runRange = () => setRangeResult(computeRange(rangeA, rangeB, sequence, sequence.maxRangeSpan));
  const runMember = () => setMemberResult(computeMember(memberM, sequence));
  const runLookup = () => setLookupResult(computeLookup(lookupN, sequence));

  const onKey = (handler) => (e) => { if (e.key === 'Enter') handler(); };

  const N = sequence.notation;

  const currentResult = {
    browse: browseResult,
    range: rangeResult,
    member: memberResult,
    lookup: lookupResult,
  }[activeTab];

  const modeExp = sequence.modeExplanations && sequence.modeExplanations[activeTab];

  return (
    <>
      <style>{SE_STYLES}</style>
      <div className="se-grid">

        <div className="se-main">
          <div className="se-card">

            <div className="se-card-header">
              <div>
                <h2 className="se-card-title">{sequence.name}</h2>
                <div className="se-card-subtitle">
                  {sequence.formulaDisplay}
                  {sequence.meta && <> &middot; {sequence.meta}</>}
                </div>
              </div>
              <span className="se-badge">Sequence explorer</span>
            </div>

            <div className="se-card-body">

              <div className="se-tabs" role="tablist">
                <button className={`se-tab${activeTab === 'browse' ? ' active' : ''}`} onClick={() => setActiveTab('browse')}>Browse</button>
                <button className={`se-tab${activeTab === 'range' ? ' active' : ''}`} onClick={() => setActiveTab('range')}>Range</button>
                <button className={`se-tab${activeTab === 'member' ? ' active' : ''}`} onClick={() => setActiveTab('member')}>Is it one?</button>
                <button className={`se-tab${activeTab === 'lookup' ? ' active' : ''}`} onClick={() => setActiveTab('lookup')}>n-th term</button>
              </div>

              {activeTab === 'browse' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-b-n">Show first</label>
                      <input
                        id="se-b-n"
                        className="se-input"
                        type="number"
                        min="1"
                        max={sequence.maxBrowseCount || 200}
                        step="1"
                        value={browseN}
                        onChange={(e) => setBrowseN(e.target.value)}
                        onKeyDown={onKey(runBrowse)}
                      />
                    </div>
                    <span className="se-suffix">terms</span>
                    <button className="se-action" onClick={runBrowse}>Update</button>
                  </div>

                  <div className="se-stats">
                    <div className="se-stat">
                      <div className="se-stat-label">Showing</div>
                      <div className="se-stat-val">
                        {browseResult.count} term{browseResult.count === 1 ? '' : 's'}
                      </div>
                    </div>
                    <div className="se-stat">
                      <div className="se-stat-label">Largest</div>
                      <div className="se-stat-val accent">
                        {N}<sub>{browseResult.maxIndex}</sub> = {fmt(browseResult.max)}
                      </div>
                    </div>
                    <div className="se-stat">
                      <div className="se-stat-label">Sum</div>
                      <div className="se-stat-val">{fmt(browseResult.sum)}</div>
                    </div>
                  </div>

                  <div className="se-section-label">First N terms</div>
                  <div className="se-terms-wrap">
                    <div className="se-terms-grid">
                      {browseResult.terms.map((t) => (
                        <div key={t.index} className="se-term-cell">
                          <span className="se-term-idx">{t.index}</span>
                          <span className="se-term-val">{fmt(t.value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'range' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-r-a">From index</label>
                      <input id="se-r-a" className="se-input" type="number" min="1" step="1"
                        value={rangeA} onChange={(e) => setRangeA(e.target.value)} onKeyDown={onKey(runRange)} />
                    </div>
                    <div className="se-field">
                      <label htmlFor="se-r-b">To index</label>
                      <input id="se-r-b" className="se-input" type="number" min="1" step="1"
                        value={rangeB} onChange={(e) => setRangeB(e.target.value)} onKeyDown={onKey(runRange)} />
                    </div>
                    <button className="se-action" onClick={runRange}>List range</button>
                  </div>

                  {rangeResult.error ? (
                    <div className="se-alert se-alert-err">
                      <div className="se-alert-icon">!</div>
                      <div>{rangeResult.error}</div>
                    </div>
                  ) : (
                    <>
                      <div className="se-stats">
                        <div className="se-stat">
                          <div className="se-stat-label">Count</div>
                          <div className="se-stat-val">
                            {rangeResult.count} term{rangeResult.count === 1 ? '' : 's'}
                          </div>
                        </div>
                        <div className="se-stat">
                          <div className="se-stat-label">Smallest</div>
                          <div className="se-stat-val">
                            {N}<sub>{rangeResult.minIndex}</sub> = {fmt(rangeResult.min)}
                          </div>
                        </div>
                        <div className="se-stat">
                          <div className="se-stat-label">Largest</div>
                          <div className="se-stat-val accent">
                            {N}<sub>{rangeResult.maxIndex}</sub> = {fmt(rangeResult.max)}
                          </div>
                        </div>
                      </div>

                      <div className="se-section-label">Terms in range</div>
                      <div className="se-terms-wrap">
                        <div className="se-terms-grid">
                          {rangeResult.terms.map((t) => (
                            <div key={t.index} className="se-term-cell">
                              <span className="se-term-idx">{t.index}</span>
                              <span className="se-term-val">{fmt(t.value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'member' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-m-n">Test number</label>
                      <input id="se-m-n" className="se-input" type="number" min="1" step="1" style={{ width: 140 }}
                        value={memberM} onChange={(e) => setMemberM(e.target.value)} onKeyDown={onKey(runMember)} />
                    </div>
                    <button className="se-action" onClick={runMember}>Check</button>
                  </div>

                  {memberResult.error ? (
                    <div className="se-alert se-alert-err">
                      <div className="se-alert-icon">!</div>
                      <div>{memberResult.error}</div>
                    </div>
                  ) : memberResult.isMember ? (
                    <div className="se-alert se-alert-yes">
                      <div className="se-alert-icon">&#10003;</div>
                      <div>
                        <strong>{fmt(memberResult.value)}</strong> is {sequence.memberLabel} &mdash; this is{' '}
                        {N}<sub>{memberResult.index}</sub>.
                      </div>
                    </div>
                  ) : (
                    <div className="se-alert se-alert-no">
                      <div className="se-alert-icon">&times;</div>
                      <div>
                        <strong>{fmt(memberResult.value)}</strong> is not {sequence.memberLabel}.
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'lookup' && (
                <div>
                  <div className="se-input-row">
                    <div className="se-field">
                      <label htmlFor="se-l-n">Index n</label>
                      <input id="se-l-n" className="se-input" type="number" min="1" step="1" style={{ width: 140 }}
                        value={lookupN} onChange={(e) => setLookupN(e.target.value)} onKeyDown={onKey(runLookup)} />
                    </div>
                    <button className="se-action" onClick={runLookup}>Get term</button>
                  </div>

                  {lookupResult.error ? (
                    <div className="se-alert se-alert-err">
                      <div className="se-alert-icon">!</div>
                      <div>{lookupResult.error}</div>
                    </div>
                  ) : (
                    <div className="se-stats two-col">
                      <div className="se-stat">
                        <div className="se-stat-label">Index</div>
                        <div className="se-stat-val">n = {fmt(lookupResult.index)}</div>
                      </div>
                      <div className="se-stat">
                        <div className="se-stat-label">Value</div>
                        <div className="se-stat-val accent">
                          {N}<sub>{lookupResult.index}</sub> = {fmt(lookupResult.value)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        <aside className="se-aside">
          {modeExp && (
            <>
              <section className="se-aside-section">
                <h3 className="se-aside-heading">How it works</h3>
                <div className="se-aside-content">{processContent(modeExp.theory)}</div>
              </section>
              <section className="se-aside-section">
                <h3 className="se-aside-heading">Walkthrough</h3>
                <div className="se-aside-content">{processContent(modeExp.renderWalkthrough(currentResult))}</div>
              </section>
            </>
          )}
        </aside>

      </div>
    </>
  );
}

export default SequenceExplorer;