// import React, { useState, useRef } from 'react';

// const SP_STYLES = `
//   .sp-tab-bar {
//     display: flex;
//     gap: 2px;
//     background: var(--ms-tab-bg, #e2e8f0);
//     border-radius: 8px;
//     padding: 3px;
//     margin-bottom: 16px;
//   }
//   .sp-tab-btn {
//     flex: 1;
//     padding: 8px 16px;
//     border: none;
//     border-radius: 6px;
//     font-family: inherit;
//     font-size: 0.82rem;
//     font-weight: 500;
//     cursor: pointer;
//     background: transparent;
//     color: var(--ms-muted, #64748b);
//     transition: all 0.15s;
//     text-align: center;
//   }
//   .sp-tab-btn.active {
//     background: var(--ms-tab-active, #fff);
//     color: var(--ms-text, #1e3a5f);
//     box-shadow: 0 1px 3px rgba(0,0,0,0.06);
//   }
//   .sp-tab-btn:not(.active):hover {
//     color: var(--ms-text-secondary, #334155);
//   }
//   .sp-steps-title {
//     font-size: 0.72rem;
//     text-transform: uppercase;
//     letter-spacing: 1.8px;
//     color: var(--ms-faint, #94a3b8);
//     margin-bottom: 14px;
//     font-weight: 600;
//   }
//   .sp-step-card {
//     background: var(--ms-step-card, #f8fafc);
//     border: none;
//     border-left: 3px solid var(--ms-step-border, #3b82f6);
//     border-radius: 0 8px 8px 0;
//     padding: 16px 18px;
//     margin-bottom: 10px;
//     transition: background 0.25s;
//   }
//   .sp-step-header { margin-bottom: 6px; }
//   .sp-step-number {
//     font-size: 0.62rem;
//     text-transform: uppercase;
//     letter-spacing: 1.5px;
//     color: var(--ms-step-number, #3b82f6);
//     font-weight: 600;
//   }
//   .sp-step-rule {
//     font-weight: 600;
//     font-size: 0.95rem;
//     color: var(--ms-text, #1e3a5f);
//     margin-bottom: 2px;
//   }
//   .sp-step-description {
//     font-size: 0.82rem;
//     color: var(--ms-muted, #64748b);
//     line-height: 1.4;
//     margin-bottom: 4px;
//   }
//   .sp-step-content { margin-top: 8px; }
//   .sp-graph-container {
//     background: var(--ms-card, #fff);
//     border-radius: 8px;
//     padding: 20px;
//     transition: background 0.25s;
//   }
//   .sp-graph-label {
//     font-size: 0.68rem;
//     text-transform: uppercase;
//     letter-spacing: 1.2px;
//     color: var(--ms-faint, #94a3b8);
//     margin-bottom: 12px;
//     font-weight: 500;
//   }
//   .sp-graph-legend {
//     display: flex;
//     gap: 16px;
//     margin-top: 10px;
//     font-size: 0.75rem;
//     color: var(--ms-muted, #64748b);
//   }
//   .sp-graph-legend-dot {
//     display: inline-block;
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//     margin-right: 4px;
//     vertical-align: middle;
//   }
//   .sp-placeholder {
//     background: var(--ms-placeholder-bg, #f1f5f9);
//     border: 1px dashed var(--ms-placeholder-border, #cbd5e1);
//     border-radius: 8px;
//     padding: 40px 24px;
//     text-align: center;
//     font-size: 0.85rem;
//     color: var(--ms-faint, #94a3b8);
//     font-style: italic;
//     min-height: 200px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: background 0.25s, border-color 0.25s;
//   }
//   .sp-no-steps { color: var(--ms-faint, #94a3b8); font-style: italic; text-align: center; padding: 20px; font-size: 0.85rem; }
//   .sp-links {
//     margin-top: 16px;
//     padding-top: 14px;
//     border-top: 1px solid var(--ms-placeholder-border, #cbd5e1);
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//   }
//   .sp-links-heading {
//     font-size: 0.62rem;
//     text-transform: uppercase;
//     letter-spacing: 1.5px;
//     color: var(--ms-faint, #94a3b8);
//     font-weight: 600;
//     margin-bottom: 4px;
//   }
//   .sp-link {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     padding: 8px 12px;
//     border-radius: 8px;
//     background: var(--ms-placeholder-bg, #f1f5f9);
//     color: var(--ms-accent, #3b82f6);
//     text-decoration: none;
//     font-size: 0.82rem;
//     font-weight: 500;
//     transition: all 0.15s;
//     border: 1px solid transparent;
//   }
//   .sp-link:hover {
//     background: var(--ms-accent-light, #eff6ff);
//     border-color: var(--ms-accent, #3b82f6);
//   }
//   .sp-link-icon { font-size: 0.9em; flex-shrink: 0; opacity: 0.8; }
//   .sp-link-tag {
//     font-size: 0.65rem;
//     text-transform: uppercase;
//     letter-spacing: 0.8px;
//     font-weight: 600;
//     padding: 2px 7px;
//     border-radius: 4px;
//     background: var(--ms-accent, #3b82f6);
//     color: var(--ms-solve-text, #fff);
//     margin-left: auto;
//     flex-shrink: 0;
//   }
// `;

// function LinksSection({ links }) {
//   if (!links || links.length === 0) return null;
//   return (
//     <div className="sp-links">
//       <div className="sp-links-heading">Resources</div>
//       {links.map((link, i) => (
//         <a key={i} className="sp-link" href={link.url} target="_blank" rel="noopener noreferrer">
//           {link.icon && <span className="sp-link-icon">{link.icon}</span>}
//           <span>{link.label}</span>
//           {link.tag && <span className="sp-link-tag">{link.tag}</span>}
//         </a>
//       ))}
//     </div>
//   );
// }

// function SolutionPanel({
//   placeholder = 'Steps will appear here once you solve',
//   stepsTitle = 'Solution Steps',
//   stepsLinks = null,
//   showGraphs = true,
//   GraphComponent = null,
//   graphLabel = '',
//   graphLegend = [],
//   graphLinks = null,
//   stepCardClass = null,
//   renderStepContent = null,
//   tabs: customTabs = [],
//   steps = [],
//   graphData = null,
//   darkMode = false,
// }) {
//   const [activeTab, setActiveTab] = useState('steps');
//   const hasGraph = showGraphs && graphData && GraphComponent;
//   const hasSolved = steps.length > 0;

//   const prevStepsRef = useRef(steps);
//   if (steps !== prevStepsRef.current && steps.length > 0) {
//     prevStepsRef.current = steps;
//     if (activeTab !== 'steps') setActiveTab('steps');
//   }

//   const stepsTab = {
//     key: 'steps', label: stepsTitle || 'Steps', order: 0, visible: true, links: stepsLinks,
//     render: () => (
//       <div>
//         {steps.map((step, index) => {
//           const extra = stepCardClass ? stepCardClass(step) : '';
//           return (
//             <div key={index} className={`sp-step-card ${extra}`}>
//               <div className="sp-step-header">
//                 <span className="sp-step-number">Step {index + 1}</span>
//               </div>
//               <div className="sp-step-rule">{step.rule}</div>
//               <p className="sp-step-description">{step.description}</p>
//               {renderStepContent && (
//                 <div className="sp-step-content">{renderStepContent(step, index)}</div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     ),
//   };

//   const graphTab = {
//     key: 'graph', label: 'Graph', order: 20, visible: hasGraph, links: graphLinks,
//     render: () => (
//       <div className="sp-graph-container">
//         {graphLabel && <div className="sp-graph-label">{graphLabel}</div>}
//         <GraphComponent graphData={graphData} darkMode={darkMode} />
//         {graphLegend.length > 0 && (
//           <div className="sp-graph-legend">
//             {graphLegend.map((item, i) => (
//               <span key={i}>
//                 <span className="sp-graph-legend-dot" style={{ background: item.color }} />
//                 {item.label}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     ),
//   };

//   const allTabs = [stepsTab, graphTab, ...customTabs.map(t => ({
//     ...t, order: t.order !== undefined ? t.order : 10,
//     visible: t.visible !== undefined ? t.visible : true, links: t.links || null,
//   }))];

//   const visibleTabs = allTabs
//     .filter(t => typeof t.visible === 'function' ? t.visible() : t.visible)
//     .sort((a, b) => a.order - b.order);

//   const activeExists = visibleTabs.some(t => t.key === activeTab);
//   const effectiveTab = activeExists ? activeTab : (visibleTabs[0] ? visibleTabs[0].key : 'steps');

//   if (!hasSolved) {
//     return (
//       <div>
//         <style>{SP_STYLES}</style>
//         <div className="sp-placeholder"><p>{placeholder}</p></div>
//       </div>
//     );
//   }

//   const currentTab = visibleTabs.find(t => t.key === effectiveTab);
//   const showTabBar = visibleTabs.length > 1;

//   return (
//     <div>
//       <style>{SP_STYLES}</style>
//       {showTabBar && (
//         <div className="sp-tab-bar">
//           {visibleTabs.map(t => (
//             <button key={t.key} className={`sp-tab-btn${effectiveTab === t.key ? ' active' : ''}`}
//               onClick={() => setActiveTab(t.key)}>
//               {t.label}
//             </button>
//           ))}
//         </div>
//       )}
//       {!showTabBar && <div className="sp-steps-title">{stepsTitle}</div>}
//       {currentTab && currentTab.render()}
//       {currentTab && <LinksSection links={currentTab.links} />}
//     </div>
//   );
// }

// /* ---- Mock Graph ---- */

// function MockBarGraph({ graphData, darkMode }) {
//   const maxVal = Math.max(...graphData.values);
//   return (
//     <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 140, padding: '10px 0' }}>
//       {graphData.values.map((v, i) => (
//         <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
//           <div style={{
//             width: '100%', maxWidth: 48,
//             height: `${(v / maxVal) * 110}px`,
//             background: graphData.colors ? graphData.colors[i] : '#3b82f6',
//             borderRadius: '6px 6px 0 0',
//             transition: 'height 0.3s',
//           }} />
//           <span style={{ fontSize: '0.7rem', color: darkMode ? '#94a3b8' : '#64748b', marginTop: 6 }}>
//             {graphData.labels[i]}
//           </span>
//           <span style={{ fontSize: '0.68rem', fontWeight: 600, color: darkMode ? '#cbd5e1' : '#1e3a5f' }}>
//             {v}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

// /* ---- Mock Data ---- */

// const MOCK_STEPS = [
//   { rule: 'Divisibility by 2', description: 'Check if the last digit is even (0, 2, 4, 6, 8). The number 84 ends in 4, so it is divisible by 2.', result: 'divisible' },
//   { rule: 'Divisibility by 3', description: 'Sum the digits: 8 + 4 = 12. Since 12 is divisible by 3, the number 84 is divisible by 3.', result: 'divisible' },
//   { rule: 'Divisibility by 5', description: 'Check if the last digit is 0 or 5. The number 84 ends in 4, so it is NOT divisible by 5.', result: 'not-divisible' },
//   { rule: 'Divisibility by 7', description: 'Divide: 84 / 7 = 12. Since the result is a whole number, 84 is divisible by 7.', result: 'divisible' },
// ];

// const MOCK_GRAPH_DATA = {
//   labels: ['\u00F72', '\u00F73', '\u00F74', '\u00F75', '\u00F76', '\u00F77'],
//   values: [42, 28, 21, 0, 14, 12],
//   colors: ['#3b82f6', '#10b981', '#8b5cf6', '#ef4444', '#f59e0b', '#06b6d4'],
// };

// const MOCK_STEPS_LINKS = [
//   { label: 'Divisibility Rules Reference', url: '#', icon: '\u{1F4D8}', tag: 'Guide' },
//   { label: 'Practice Problems', url: '#', icon: '\u270F\uFE0F' },
// ];

// const MOCK_GRAPH_LINKS = [
//   { label: 'Factor Visualization Tool', url: '#', icon: '\u{1F4CA}', tag: 'Interactive' },
// ];

// const MOCK_CUSTOM_TAB_LINKS = [
//   { label: 'Number Theory Basics', url: '#', icon: '\u{1F522}' },
// ];

// /* ---- Demo ---- */

// export default function SolutionPanelDemo() {
//   const [showData, setShowData] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   const customTabs = [
//     {
//       key: 'summary',
//       label: 'Summary',
//       order: 10,
//       visible: showData,
//       links: MOCK_CUSTOM_TAB_LINKS,
//       render: () => (
//         <div style={{
//           background: darkMode ? '#1e293b' : '#f0fdf4',
//           border: `1px solid ${darkMode ? '#334155' : '#bbf7d0'}`,
//           borderRadius: 10,
//           padding: 20,
//         }}>
//           <div style={{ fontWeight: 700, fontSize: '1.6rem', color: darkMode ? '#4ade80' : '#16a34a', marginBottom: 6 }}>
//             84
//           </div>
//           <div style={{ fontSize: '0.82rem', color: darkMode ? '#94a3b8' : '#64748b', lineHeight: 1.5 }}>
//             Divisible by <strong>2, 3, 4, 6, 7, 12, 14, 21, 28, 42</strong>.
//             <br />
//             Not divisible by 5.
//             <br />
//             <span style={{ marginTop: 8, display: 'inline-block', fontSize: '0.78rem', color: darkMode ? '#64748b' : '#94a3b8' }}>
//               Total factors: 12 &nbsp;|&nbsp; Prime factorization: 2&sup2; &times; 3 &times; 7
//             </span>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   const stepCardClass = (step) => step.result === 'not-divisible' ? 'not-div' : '';

//   const renderStepContent = (step) => (
//     <span style={{
//       display: 'inline-block',
//       fontSize: '0.7rem',
//       fontWeight: 600,
//       letterSpacing: '0.5px',
//       padding: '3px 10px',
//       borderRadius: 5,
//       background: step.result === 'divisible'
//         ? (darkMode ? '#064e3b' : '#dcfce7')
//         : (darkMode ? '#7f1d1d' : '#fee2e2'),
//       color: step.result === 'divisible'
//         ? (darkMode ? '#6ee7b7' : '#16a34a')
//         : (darkMode ? '#fca5a5' : '#dc2626'),
//     }}>
//     {step.result === 'divisible' ? '\u2713 DIVISIBLE' : '\u2717 NOT DIVISIBLE'}
//     </span>
//   );

//   const wrapperStyle = {
//     fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//     background: darkMode ? '#0b1120' : '#f0f4f8',
//     display: 'flex',
//     justifyContent: 'center',
//     padding: '40px 20px',
//   };

//   const lightVars = {
//     '--ms-tab-bg': '#e2e8f0',
//     '--ms-tab-active': '#fff',
//     '--ms-text': '#1e3a5f',
//     '--ms-text-secondary': '#334155',
//     '--ms-muted': '#64748b',
//     '--ms-faint': '#94a3b8',
//     '--ms-step-card': '#f8fafc',
//     '--ms-step-border': '#3b82f6',
//     '--ms-step-number': '#3b82f6',
//     '--ms-card': '#fff',
//     '--ms-accent': '#3b82f6',
//     '--ms-accent-light': '#eff6ff',
//     '--ms-solve-text': '#fff',
//     '--ms-placeholder-bg': '#f1f5f9',
//     '--ms-placeholder-border': '#cbd5e1',
//   };

//   const darkVars = {
//     '--ms-tab-bg': '#1e293b',
//     '--ms-tab-active': '#334155',
//     '--ms-text': '#e2e8f0',
//     '--ms-text-secondary': '#cbd5e1',
//     '--ms-muted': '#94a3b8',
//     '--ms-faint': '#64748b',
//     '--ms-step-card': '#1e293b',
//     '--ms-step-border': '#60a5fa',
//     '--ms-step-number': '#60a5fa',
//     '--ms-card': '#1e293b',
//     '--ms-accent': '#60a5fa',
//     '--ms-accent-light': '#1e3a5f',
//     '--ms-solve-text': '#0f172a',
//     '--ms-placeholder-bg': '#1e293b',
//     '--ms-placeholder-border': '#334155',
//   };

//   const cssVars = darkMode ? darkVars : lightVars;

//   return (
//     <div style={{ ...wrapperStyle, ...cssVars }}>
//       <style>{`
//         .not-div { border-left-color: #ef4444 !important; }
//         .not-div .sp-step-number { color: #ef4444 !important; }
//       `}</style>

//       <div style={{ width: '100%', maxWidth: 520 }}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
//           <div style={{ fontSize: '1.1rem', fontWeight: 700, color: darkMode ? '#e2e8f0' : '#1e3a5f' }}>
//             SolutionPanel <span style={{ color: '#94a3b8', fontWeight: 400 }}>v3c</span>
//           </div>
//           <div style={{ display: 'flex', gap: 8 }}>
//             <button onClick={() => setShowData(!showData)} style={{
//               padding: '7px 14px', border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`,
//               borderRadius: 8, background: showData ? '#3b82f6' : (darkMode ? '#1e293b' : '#fff'),
//               fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: 500,
//               color: showData ? '#fff' : (darkMode ? '#94a3b8' : '#475569'), cursor: 'pointer',
//             }}>
//               {showData ? 'Clear' : 'Solve'}
//             </button>
//             <button onClick={() => setDarkMode(!darkMode)} style={{
//               padding: '7px 14px', border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`,
//               borderRadius: 8, background: darkMode ? '#3b82f6' : (darkMode ? '#1e293b' : '#fff'),
//               fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: 500,
//               color: darkMode ? '#fff' : '#475569', cursor: 'pointer',
//             }}>
//               {darkMode ? '\u2600\uFE0F' : '\u{1F319}'}
//             </button>
//           </div>
//         </div>

//         <div style={{
//           background: darkMode ? '#0f172a' : '#fff',
//           borderRadius: 14, padding: 24,
//           boxShadow: darkMode ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.06)',
//         }}>
//           <div style={{
//             fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1.5px',
//             color: '#94a3b8', marginBottom: 20, fontWeight: 600,
//           }}>
//             {showData ? 'Testing: Divisibility of 84' : 'Empty State'}
//           </div>

//           <SolutionPanel
//             placeholder="Enter a number and press Solve to see divisibility steps"
//             stepsTitle="Solution Steps"
//             stepsLinks={MOCK_STEPS_LINKS}
//             showGraphs={true}
//             GraphComponent={MockBarGraph}
//             graphLabel="Quotients by divisor"
//             graphLegend={[
//               { color: '#3b82f6', label: 'Divisible' },
//               { color: '#ef4444', label: 'Not divisible' },
//             ]}
//             graphLinks={MOCK_GRAPH_LINKS}
//             stepCardClass={stepCardClass}
//             renderStepContent={renderStepContent}
//             tabs={customTabs}
//             steps={showData ? MOCK_STEPS : []}
//             graphData={showData ? MOCK_GRAPH_DATA : null}
//             darkMode={darkMode}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useRef } from 'react';

/* =====================================================
   SOLUTION PANEL v3c

   Generic tab system with per-tab links support.
   
   Built-in tabs: Steps (order 0), Graph (order 20).
   Custom tabs via `tabs` array (default order 10).
   Each tab can have optional `links` array.

   STATIC CONFIG:
     placeholder      : string
     stepsTitle       : string
     stepsLinks       : LinkDef[]  — links for the Steps tab
     showGraphs       : boolean
     GraphComponent   : React.Component
     graphLabel       : string
     graphLegend      : [{color, label}]
     graphLinks       : LinkDef[]  — links for the Graph tab
     stepCardClass    : (step) => string
     renderStepContent: (step, idx) => ReactNode
     tabs             : TabDef[]

   DYNAMIC DATA:
     steps            : Step[]
     graphData        : object|null
     darkMode         : boolean

   TabDef: {
     key, label, render, visible?, order?, links?
   }

   LinkDef: {
     label : string
     url   : string
     icon  : string|ReactNode  (optional)
     tag   : string            (optional badge)
   }
   ===================================================== */

const SP_STYLES = `
  .sp-tab-bar {
    display: flex;
    gap: 2px;
    background: var(--ms-tab-bg, #e2e8f0);
    border-radius: 8px;
    padding: 3px;
    margin-bottom: 16px;
  }
  .sp-tab-btn {
    flex: 1;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.82rem;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    color: var(--ms-muted, #64748b);
    transition: all 0.15s;
    text-align: center;
  }
  .sp-tab-btn.active {
    background: var(--ms-tab-active, #fff);
    color: var(--ms-text, #1e3a5f);
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }
  .sp-tab-btn:not(.active):hover {
    color: var(--ms-text-secondary, #334155);
  }
  .sp-steps-title {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    color: var(--ms-faint, #94a3b8);
    margin-bottom: 14px;
    font-weight: 600;
  }
  .sp-step-card {
    background: var(--ms-step-card, #f8fafc);
    border: none;
    border-left: 3px solid var(--ms-step-border, #3b82f6);
    border-radius: 0 8px 8px 0;
    padding: 16px 18px;
    margin-bottom: 10px;
    transition: background 0.25s;
  }
  .sp-step-header {
    margin-bottom: 6px;
  }
  .sp-step-number {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--ms-step-number, #3b82f6);
    font-weight: 600;
  }
  .sp-step-rule {
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--ms-text, #1e3a5f);
    margin-bottom: 2px;
  }
  .sp-step-description {
    font-size: 0.82rem;
    color: var(--ms-muted, #64748b);
    line-height: 1.4;
    margin-bottom: 4px;
  }
  .sp-step-content {
    margin-top: 8px;
  }
  .sp-graph-container {
    background: var(--ms-card, #fff);
    border-radius: 8px;
    padding: 20px;
    transition: background 0.25s;
  }
  .sp-graph-label {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--ms-faint, #94a3b8);
    margin-bottom: 12px;
    font-weight: 500;
  }
  .sp-graph-legend {
    display: flex;
    gap: 16px;
    margin-top: 10px;
    font-size: 0.75rem;
    color: var(--ms-muted, #64748b);
  }
  .sp-graph-legend-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
    vertical-align: middle;
  }
  .sp-placeholder {
    background: var(--ms-placeholder-bg, #f1f5f9);
    border: 1px dashed var(--ms-placeholder-border, #cbd5e1);
    border-radius: 8px;
    padding: 40px 24px;
    text-align: center;
    font-size: 0.85rem;
    color: var(--ms-faint, #94a3b8);
    font-style: italic;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.25s, border-color 0.25s;
  }
  .sp-no-steps {
    color: var(--ms-faint, #94a3b8);
    font-style: italic;
    text-align: center;
    padding: 20px;
    font-size: 0.85rem;
  }
  .sp-links {
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid var(--ms-placeholder-border, #cbd5e1);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .sp-links-heading {
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--ms-faint, #94a3b8);
    font-weight: 600;
    margin-bottom: 4px;
  }
  .sp-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--ms-placeholder-bg, #f1f5f9);
    color: var(--ms-accent, #3b82f6);
    text-decoration: none;
    font-size: 0.82rem;
    font-weight: 500;
    transition: all 0.15s;
    border: 1px solid transparent;
  }
  .sp-link:hover {
    background: var(--ms-accent-light, #eff6ff);
    border-color: var(--ms-accent, #3b82f6);
  }
  .sp-link-icon {
    font-size: 0.9em;
    flex-shrink: 0;
    opacity: 0.8;
  }
  .sp-link-tag {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 4px;
    background: var(--ms-accent, #3b82f6);
    color: var(--ms-solve-text, #fff);
    margin-left: auto;
    flex-shrink: 0;
  }
`;

function LinksSection({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="sp-links">
      <div className="sp-links-heading">Resources</div>
      {links.map((link, i) => (
        <a
          key={i}
          className="sp-link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon && <span className="sp-link-icon">{link.icon}</span>}
          <span>{link.label}</span>
          {link.tag && <span className="sp-link-tag">{link.tag}</span>}
        </a>
      ))}
    </div>
  );
}

function SolutionPanel({
  /* static config */
  placeholder = 'Steps will appear here once you solve',
  stepsTitle = 'Solution Steps',
  stepsLinks = null,
  showGraphs = true,
  GraphComponent = null,
  graphLabel = '',
  graphLegend = [],
  graphLinks = null,
  stepCardClass = null,
  renderStepContent = null,
  tabs: customTabs = [],
  /* dynamic data */
  steps = [],
  graphData = null,
  darkMode = false,
}) {
  const [activeTab, setActiveTab] = useState('steps');
  const hasGraph = showGraphs && graphData && GraphComponent;
  const hasSolved = steps.length > 0;

  const prevStepsRef = useRef(steps);
  if (steps !== prevStepsRef.current && steps.length > 0) {
    prevStepsRef.current = steps;
    if (activeTab !== 'steps') setActiveTab('steps');
  }

  /* ---- Built-in tabs ---- */
  const stepsTab = {
    key: 'steps',
    label: stepsTitle || 'Steps',
    order: 0,
    visible: true,
    links: stepsLinks,
    render: () => (
      <div>
        {steps.map((step, index) => {
          const extra = stepCardClass ? stepCardClass(step) : '';
          return (
            <div key={index} className={`sp-step-card ${extra}`}>
              <div className="sp-step-header">
                <span className="sp-step-number">Step {index + 1}</span>
              </div>
              <div className="sp-step-rule">{step.rule}</div>
              <p className="sp-step-description">{step.description}</p>
              {renderStepContent && (
                <div className="sp-step-content">
                  {renderStepContent(step, index)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    ),
  };

  const graphTab = {
    key: 'graph',
    label: 'Graph',
    order: 20,
    visible: hasGraph,
    links: graphLinks,
    render: () => (
      <div className="sp-graph-container">
        {graphLabel && <div className="sp-graph-label">{graphLabel}</div>}
        <GraphComponent graphData={graphData} darkMode={darkMode} />
        {graphLegend.length > 0 && (
          <div className="sp-graph-legend">
            {graphLegend.map((item, i) => (
              <span key={i}>
                <span className="sp-graph-legend-dot" style={{ background: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
  };

  /* Merge built-in + custom, resolve visibility, sort */
  const allTabs = [stepsTab, graphTab, ...customTabs.map(t => ({
    ...t,
    order: t.order !== undefined ? t.order : 10,
    visible: t.visible !== undefined ? t.visible : true,
    links: t.links || null,
  }))];

  const visibleTabs = allTabs
    .filter(t => typeof t.visible === 'function' ? t.visible() : t.visible)
    .sort((a, b) => a.order - b.order);

  const activeExists = visibleTabs.some(t => t.key === activeTab);
  const effectiveTab = activeExists ? activeTab : (visibleTabs[0] ? visibleTabs[0].key : 'steps');

  if (!hasSolved) {
    return (
      <div>
        <style>{SP_STYLES}</style>
        <div className="sp-placeholder"><p>{placeholder}</p></div>
      </div>
    );
  }

  const currentTab = visibleTabs.find(t => t.key === effectiveTab);
  const showTabBar = visibleTabs.length > 1;

  return (
    <div>
      <style>{SP_STYLES}</style>

      {showTabBar && (
        <div className="sp-tab-bar">
          {visibleTabs.map(t => (
            <button
              key={t.key}
              className={`sp-tab-btn${effectiveTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {!showTabBar && <div className="sp-steps-title">{stepsTitle}</div>}

      {currentTab && currentTab.render()}
      {currentTab && <LinksSection links={currentTab.links} />}
    </div>
  );
}

export default SolutionPanel;