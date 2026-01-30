// // 'use client';

// // import React, { useState } from 'react';

// // const VennDiagramExplorer = ({ explorerData }) => {
// //   // Use provided data or fallback to defaults
// //   const frame = explorerData?.frame || {
// //     title: "Set Theory Explorer",
// //     subtitle: "Interactive Venn Diagram Visualizations"
// //   };
  
// //   const scenarios = explorerData?.scenarios || defaultScenarios;
  
// //   const [currentState, setCurrentState] = useState(scenarios[0]?.id || 'intersection');
  
// //   // Group scenarios by their group field
// //   const groupedScenarios = scenarios.reduce((acc, scenario) => {
// //     const group = scenario.group || 'Other';
// //     if (!acc[group]) {
// //       acc[group] = [];
// //     }
// //     acc[group].push(scenario);
// //     return acc;
// //   }, {});
  
// //   const groupOrder = [
// //     'Intersection & Union',
// //     'Exclusive Regions',
// //     'Complements',
// //     'Symmetric Difference',
// //     "De Morgan's Laws",
// //     'Subset Relationships'
// //   ];
  
// //   const sortedGroups = groupOrder.filter(g => groupedScenarios[g]);
  
// //   const currentScenario = scenarios.find(s => s.id === currentState) || scenarios[0];
// //   const currentIndex = scenarios.findIndex(s => s.id === currentState);
  
// //   const goToPrevious = () => {
// //     const newIndex = currentIndex > 0 ? currentIndex - 1 : scenarios.length - 1;
// //     setCurrentState(scenarios[newIndex].id);
// //   };
  
// //   const goToNext = () => {
// //     const newIndex = currentIndex < scenarios.length - 1 ? currentIndex + 1 : 0;
// //     setCurrentState(scenarios[newIndex].id);
// //   };
  
// //   return (
// //     <div style={styles.container}>
// //       {/* Header */}
// //       <div style={styles.header}>
// //         <h1 style={styles.title}>{frame.title}</h1>
// //         <p style={styles.subtitle}>{frame.subtitle}</p>
// //       </div>
      
// //       {/* Controls Panel - Compact */}
// //       <div style={styles.controlsPanel}>
// //         {/* Left: Grouped Buttons */}
// //         <div style={styles.buttonGroupsContainer}>
// //           {sortedGroups.map(groupName => (
// //             <div key={groupName} style={styles.buttonGroup}>
// //               <span style={styles.groupLabel}>{groupName}</span>
// //               <div style={styles.groupButtons}>
// //                 {groupedScenarios[groupName].map(scenario => (
// //                   <button
// //                     key={scenario.id}
// //                     style={{
// //                       ...styles.quickButton,
// //                       ...(currentState === scenario.id ? styles.quickButtonActive : {})
// //                     }}
// //                     onClick={() => setCurrentState(scenario.id)}
// //                     title={scenario.equivalences?.length 
// //                       ? `${scenario.name}\n≡ ${scenario.equivalences.join('\n≡ ')}`
// //                       : scenario.name
// //                     }
// //                   >
// //                     {scenario.symbol}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
        
// //         {/* Right: Dropdown */}
// //         <div style={styles.dropdownContainer}>
// //           <span style={styles.groupLabel}>Jump to</span>
// //           <select 
// //             style={styles.dropdown}
// //             value={currentState}
// //             onChange={(e) => setCurrentState(e.target.value)}
// //           >
// //             {sortedGroups.map(groupName => (
// //               <optgroup key={groupName} label={groupName}>
// //                 {groupedScenarios[groupName].map(scenario => (
// //                   <option key={scenario.id} value={scenario.id}>
// //                     {scenario.symbol} — {scenario.name}
// //                   </option>
// //                 ))}
// //               </optgroup>
// //             ))}
// //           </select>
// //         </div>
// //       </div>
      
// //       {/* Main Content */}
// //       <div style={styles.mainContent}>
// //         {/* Left Panel - Diagram */}
// //         <div style={styles.diagramPanel}>
// //           <div style={styles.panelHeader}>
// //             <span style={styles.panelTitle}>Diagram</span>
// //             <span style={styles.panelBadge}>{currentScenario?.symbol}</span>
// //           </div>
// //           <div style={styles.diagramContainer}>
// //             {/* Placeholder for UnifiedVennDiagram2 */}
// //             <div style={styles.diagramPlaceholder}>
// //               <div style={styles.placeholderIcon}>◉</div>
// //               <p style={styles.placeholderText}>UnifiedVennDiagram2</p>
// //               <p style={styles.placeholderSubtext}>State: {currentState}</p>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Right Panel - Explanation */}
// //         <div style={styles.explanationPanel}>
// //           <div style={styles.panelHeader}>
// //             <span style={styles.panelTitle}>Explanation</span>
// //           </div>
          
// //           <div style={styles.explanationContent}>
// //             {/* State Title */}
// //             <div style={styles.stateTitle}>
// //               <h2 style={styles.stateName}>{currentScenario?.name}</h2>
// //               <div style={styles.symbolDisplay}>{currentScenario?.symbol}</div>
// //             </div>
            
// //             {/* Equivalences */}
// //             {currentScenario?.equivalences?.length > 0 && (
// //               <div style={styles.section}>
// //                 <h3 style={styles.sectionTitle}>Equivalences</h3>
// //                 <div style={styles.equivalencesBox}>
// //                   {currentScenario.equivalences.map((eq, i) => (
// //                     <code key={i} style={styles.equivalence}>≡ {eq}</code>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
            
// //             {/* Definition */}
// //             <div style={styles.section}>
// //               <h3 style={styles.sectionTitle}>Definition</h3>
// //               <p style={styles.sectionText}>
// //                 {currentScenario?.definition || 'Definition placeholder...'}
// //               </p>
// //             </div>
            
// //             {/* Formula */}
// //             <div style={styles.section}>
// //               <h3 style={styles.sectionTitle}>Formula</h3>
// //               <div style={styles.formulaBox}>
// //                 <code style={styles.formula}>{currentScenario?.symbol}</code>
// //               </div>
// //             </div>
            
// //             {/* Example */}
// //             <div style={styles.section}>
// //               <h3 style={styles.sectionTitle}>Example</h3>
// //               <p style={styles.sectionText}>
// //                 {currentScenario?.example || 'Example placeholder...'}
// //               </p>
// //             </div>
            
// //             {/* Properties */}
// //             {currentScenario?.properties?.length > 0 && (
// //               <div style={styles.section}>
// //                 <h3 style={styles.sectionTitle}>Properties</h3>
// //                 <ul style={styles.propertiesList}>
// //                   {currentScenario.properties.map((prop, i) => (
// //                     <li key={i} style={styles.propertyItem}>{prop}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Navigation Panel - Bottom */}
// //       <div style={styles.navigationPanel}>
// //         <button style={styles.navButton} onClick={goToPrevious}>
// //           ← Previous
// //         </button>
// //         <span style={styles.stateCounter}>
// //           {currentIndex + 1} / {scenarios.length}
// //         </span>
// //         <button style={styles.navButton} onClick={goToNext}>
// //           Next →
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Default scenarios (fallback)
// // const defaultScenarios = [
// //   { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', equivalences: [], definition: '', example: '', properties: [] },
// //   { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', equivalences: [], definition: '', example: '', properties: [] },
// // ];

// // const styles = {
// //   container: {
// //     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     padding: '24px',
// //     backgroundColor: '#f8fafc',
// //     minHeight: '100vh',
// //   },
  
// //   // Header
// //   header: {
// //     textAlign: 'center',
// //     marginBottom: '20px',
// //     padding: '16px 20px',
// //     backgroundColor: '#245de1',
// //     borderRadius: '12px',
// //     color: '#ffffff',
// //     boxShadow: '0 4px 20px rgba(36, 93, 225, 0.3)',
// //   },
// //   title: {
// //     margin: '0 0 4px 0',
// //     fontSize: '28px',
// //     fontWeight: '700',
// //     letterSpacing: '-0.5px',
// //   },
// //   subtitle: {
// //     margin: 0,
// //     fontSize: '14px',
// //     opacity: 0.9,
// //   },
  
// //   // Controls Panel - Compact
// //   controlsPanel: {
// //     backgroundColor: '#ffffff',
// //     borderRadius: '12px',
// //     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// //     padding: '16px 20px',
// //     marginBottom: '20px',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'flex-start',
// //     gap: '24px',
// //     flexWrap: 'wrap',
// //   },
// //   buttonGroupsContainer: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '16px',
// //     flex: '1',
// //   },
// //   buttonGroup: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '6px',
// //   },
// //   groupLabel: {
// //     fontSize: '10px',
// //     fontWeight: '600',
// //     color: '#94a3b8',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //   },
// //   groupButtons: {
// //     display: 'flex',
// //     gap: '4px',
// //     flexWrap: 'wrap',
// //   },
// //   quickButton: {
// //     padding: '6px 10px',
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     color: '#64748b',
// //     backgroundColor: '#f1f5f9',
// //     border: '2px solid transparent',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //     fontFamily: "'Cambria Math', 'Times New Roman', serif",
// //     whiteSpace: 'nowrap',
// //   },
// //   quickButtonActive: {
// //     color: '#245de1',
// //     backgroundColor: '#e8effd',
// //     borderColor: '#245de1',
// //   },
// //   dropdownContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '6px',
// //     minWidth: '200px',
// //   },
// //   dropdown: {
// //     width: '100%',
// //     padding: '8px 12px',
// //     fontSize: '13px',
// //     fontWeight: '500',
// //     color: '#334155',
// //     backgroundColor: '#f8fafc',
// //     border: '2px solid #e2e8f0',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     outline: 'none',
// //   },
  
// //   // Main Content
// //   mainContent: {
// //     display: 'flex',
// //     gap: '20px',
// //     marginBottom: '20px',
// //   },
  
// //   // Diagram Panel
// //   diagramPanel: {
// //     flex: '1 1 55%',
// //     backgroundColor: '#ffffff',
// //     borderRadius: '12px',
// //     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// //     overflow: 'hidden',
// //   },
// //   panelHeader: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '12px 16px',
// //     borderBottom: '1px solid #e2e8f0',
// //     backgroundColor: '#f8fafc',
// //   },
// //   panelTitle: {
// //     fontSize: '12px',
// //     fontWeight: '600',
// //     color: '#64748b',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //   },
// //   panelBadge: {
// //     padding: '3px 10px',
// //     backgroundColor: '#245de1',
// //     color: '#ffffff',
// //     borderRadius: '12px',
// //     fontSize: '12px',
// //     fontWeight: '600',
// //   },
// //   diagramContainer: {
// //     padding: '16px',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     minHeight: '380px',
// //   },
// //   diagramPlaceholder: {
// //     width: '100%',
// //     height: '380px',
// //     backgroundColor: '#f1f5f9',
// //     borderRadius: '8px',
// //     border: '2px dashed #cbd5e1',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     color: '#94a3b8',
// //   },
// //   placeholderIcon: {
// //     fontSize: '40px',
// //     marginBottom: '8px',
// //   },
// //   placeholderText: {
// //     fontSize: '16px',
// //     fontWeight: '600',
// //     margin: '0 0 4px 0',
// //   },
// //   placeholderSubtext: {
// //     fontSize: '13px',
// //     margin: 0,
// //   },
  
// //   // Explanation Panel
// //   explanationPanel: {
// //     flex: '1 1 45%',
// //     backgroundColor: '#ffffff',
// //     borderRadius: '12px',
// //     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// //     overflow: 'hidden',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     maxHeight: '500px',
// //   },
// //   explanationContent: {
// //     padding: '20px',
// //     flex: 1,
// //     overflowY: 'auto',
// //   },
// //   stateTitle: {
// //     marginBottom: '20px',
// //     paddingBottom: '12px',
// //     borderBottom: '2px solid #e2e8f0',
// //   },
// //   stateName: {
// //     margin: '0 0 6px 0',
// //     fontSize: '20px',
// //     fontWeight: '700',
// //     color: '#1e293b',
// //   },
// //   symbolDisplay: {
// //     display: 'inline-block',
// //     padding: '6px 12px',
// //     backgroundColor: '#f1f5f9',
// //     borderRadius: '6px',
// //     fontSize: '18px',
// //     fontWeight: '600',
// //     color: '#245de1',
// //     fontFamily: "'Cambria Math', 'Times New Roman', serif",
// //   },
// //   section: {
// //     marginBottom: '16px',
// //   },
// //   sectionTitle: {
// //     margin: '0 0 6px 0',
// //     fontSize: '11px',
// //     fontWeight: '600',
// //     color: '#64748b',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.5px',
// //   },
// //   sectionText: {
// //     margin: 0,
// //     fontSize: '14px',
// //     lineHeight: '1.6',
// //     color: '#475569',
// //   },
// //   equivalencesBox: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '4px',
// //   },
// //   equivalence: {
// //     fontSize: '14px',
// //     fontWeight: '500',
// //     color: '#334155',
// //     fontFamily: "'Cambria Math', 'Times New Roman', serif",
// //   },
// //   formulaBox: {
// //     padding: '12px',
// //     backgroundColor: '#f8fafc',
// //     borderRadius: '6px',
// //     border: '1px solid #e2e8f0',
// //     textAlign: 'center',
// //   },
// //   formula: {
// //     fontSize: '20px',
// //     fontWeight: '600',
// //     color: '#334155',
// //     fontFamily: "'Cambria Math', 'Times New Roman', serif",
// //   },
// //   propertiesList: {
// //     margin: 0,
// //     paddingLeft: '18px',
// //   },
// //   propertyItem: {
// //     fontSize: '14px',
// //     lineHeight: '1.7',
// //     color: '#475569',
// //   },
  
// //   // Navigation Panel - Bottom
// //   navigationPanel: {
// //     backgroundColor: '#ffffff',
// //     borderRadius: '12px',
// //     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
// //     padding: '12px 20px',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: '16px',
// //   },
// //   navButton: {
// //     padding: '8px 20px',
// //     fontSize: '13px',
// //     fontWeight: '600',
// //     color: '#ffffff',
// //     backgroundColor: '#245de1',
// //     border: 'none',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //   },
// //   stateCounter: {
// //     fontSize: '13px',
// //     fontWeight: '600',
// //     color: '#64748b',
// //     minWidth: '70px',
// //     textAlign: 'center',
// //   },
// // };

// // export default VennDiagramExplorer;


// 'use client';

// import React, { useState, useMemo } from 'react';

// const VennDiagramExplorer = ({ explorerData, DiagramComponent }) => {
//   // Use provided data or fallback to defaults
//   const frame = explorerData?.frame || {
//     title: "Set Theory Explorer",
//     subtitle: "Interactive Venn Diagram Visualizations"
//   };
  
//   const diagramDefaults = explorerData?.diagramDefaults || {};
//   const scenarios = explorerData?.scenarios || defaultScenarios;
  
//   const [currentState, setCurrentState] = useState(scenarios[0]?.id || 'intersection');
  
//   // Group scenarios by their group field
//   const groupedScenarios = scenarios.reduce((acc, scenario) => {
//     const group = scenario.group || 'Other';
//     if (!acc[group]) {
//       acc[group] = [];
//     }
//     acc[group].push(scenario);
//     return acc;
//   }, {});
  
//   const groupOrder = [
//     'Intersection & Union',
//     'Exclusive Regions',
//     'Complements',
//     'Symmetric Difference',
//     "De Morgan's Laws",
//     'Subset Relationships'
//   ];
  
//   const sortedGroups = groupOrder.filter(g => groupedScenarios[g]);
  
//   const currentScenario = scenarios.find(s => s.id === currentState) || scenarios[0];
//   const currentIndex = scenarios.findIndex(s => s.id === currentState);
  
//   // Merge diagramDefaults with current scenario's highlightRegions
//   const mergedDiagramConfig = useMemo(() => {
//     if (!currentScenario) return diagramDefaults;
    
//     const baseRegions = diagramDefaults.baseRegions || {};
//     const highlightRegions = currentScenario.highlightRegions || {};
    
//     // Deep merge: base regions + highlight overrides
//     const mergedRegions = {};
//     Object.keys(baseRegions).forEach(key => {
//       mergedRegions[key] = {
//         ...baseRegions[key],
//         ...(highlightRegions[key] || {})
//       };
//     });
    
//     // Build final config
//     return {
//       width: diagramDefaults.width,
//       height: diagramDefaults.height,
//       backgroundColor: diagramDefaults.backgroundColor,
//       showUniverse: diagramDefaults.showUniverse,
//       showTooltip: diagramDefaults.showTooltip,
//       showLegend: diagramDefaults.showLegend,
//       enableHover: diagramDefaults.enableHover,
//       universe: diagramDefaults.universe,
//       circles: diagramDefaults.circles,
//       regions: mergedRegions,
//       legendItems: currentScenario.legendItems || []
//     };
//   }, [diagramDefaults, currentScenario]);
  
//   const goToPrevious = () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : scenarios.length - 1;
//     setCurrentState(scenarios[newIndex].id);
//   };
  
//   const goToNext = () => {
//     const newIndex = currentIndex < scenarios.length - 1 ? currentIndex + 1 : 0;
//     setCurrentState(scenarios[newIndex].id);
//   };
  
//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <div style={styles.header}>
//         <h1 style={styles.title}>{frame.title}</h1>
//         <p style={styles.subtitle}>{frame.subtitle}</p>
//       </div>
      
//       {/* Controls Panel - Compact */}
//       <div style={styles.controlsPanel}>
//         {/* Left: Grouped Buttons */}
//         <div style={styles.buttonGroupsContainer}>
//           {sortedGroups.map(groupName => (
//             <div key={groupName} style={styles.buttonGroup}>
//               <span style={styles.groupLabel}>{groupName}</span>
//               <div style={styles.groupButtons}>
//                 {groupedScenarios[groupName].map(scenario => (
//                   <button
//                     key={scenario.id}
//                     style={{
//                       ...styles.quickButton,
//                       ...(currentState === scenario.id ? styles.quickButtonActive : {})
//                     }}
//                     onClick={() => setCurrentState(scenario.id)}
//                     title={scenario.equivalences?.length 
//                       ? `${scenario.name}\n≡ ${scenario.equivalences.join('\n≡ ')}`
//                       : scenario.name
//                     }
//                   >
//                     {scenario.symbol}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Right: Dropdown */}
//         <div style={styles.dropdownContainer}>
//           <span style={styles.groupLabel}>Jump to</span>
//           <select 
//             style={styles.dropdown}
//             value={currentState}
//             onChange={(e) => setCurrentState(e.target.value)}
//           >
//             {sortedGroups.map(groupName => (
//               <optgroup key={groupName} label={groupName}>
//                 {groupedScenarios[groupName].map(scenario => (
//                   <option key={scenario.id} value={scenario.id}>
//                     {scenario.symbol} — {scenario.name}
//                   </option>
//                 ))}
//               </optgroup>
//             ))}
//           </select>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div style={styles.mainContent}>
//         {/* Left Panel - Diagram */}
//         <div style={styles.diagramPanel}>
//           <div style={styles.panelHeader}>
//             <span style={styles.panelTitle}>Diagram</span>
//             <span style={styles.panelBadge}>{currentScenario?.symbol}</span>
//           </div>
//           <div style={styles.diagramContainer}>
//             {DiagramComponent ? (
//               <DiagramComponent {...mergedDiagramConfig} />
//             ) : (
//               <div style={styles.diagramPlaceholder}>
//                 <div style={styles.placeholderIcon}>◉</div>
//                 <p style={styles.placeholderText}>No Diagram Component</p>
//                 <p style={styles.placeholderSubtext}>Pass DiagramComponent prop</p>
//               </div>
//             )}
//           </div>
//         </div>
        
//         {/* Right Panel - Explanation */}
//         <div style={styles.explanationPanel}>
//           <div style={styles.panelHeader}>
//             <span style={styles.panelTitle}>Explanation</span>
//           </div>
          
//           <div style={styles.explanationContent}>
//             {/* State Title */}
//             <div style={styles.stateTitle}>
//               <h2 style={styles.stateName}>{currentScenario?.name}</h2>
//               <div style={styles.symbolDisplay}>{currentScenario?.symbol}</div>
//             </div>
            
//             {/* Equivalences */}
//             {currentScenario?.equivalences?.length > 0 && (
//               <div style={styles.section}>
//                 <h3 style={styles.sectionTitle}>Equivalences</h3>
//                 <div style={styles.equivalencesBox}>
//                   {currentScenario.equivalences.map((eq, i) => (
//                     <code key={i} style={styles.equivalence}>≡ {eq}</code>
//                   ))}
//                 </div>
//               </div>
//             )}
            
//             {/* Definition */}
//             <div style={styles.section}>
//               <h3 style={styles.sectionTitle}>Definition</h3>
//               <p style={styles.sectionText}>
//                 {currentScenario?.definition || 'Definition placeholder...'}
//               </p>
//             </div>
            
//             {/* Formula */}
//             <div style={styles.section}>
//               <h3 style={styles.sectionTitle}>Formula</h3>
//               <div style={styles.formulaBox}>
//                 <code style={styles.formula}>{currentScenario?.symbol}</code>
//               </div>
//             </div>
            
//             {/* Example */}
//             <div style={styles.section}>
//               <h3 style={styles.sectionTitle}>Example</h3>
//               <p style={styles.sectionText}>
//                 {currentScenario?.example || 'Example placeholder...'}
//               </p>
//             </div>
            
//             {/* Properties */}
//             {currentScenario?.properties?.length > 0 && (
//               <div style={styles.section}>
//                 <h3 style={styles.sectionTitle}>Properties</h3>
//                 <ul style={styles.propertiesList}>
//                   {currentScenario.properties.map((prop, i) => (
//                     <li key={i} style={styles.propertyItem}>{prop}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* Navigation Panel - Bottom */}
//       <div style={styles.navigationPanel}>
//         <button style={styles.navButton} onClick={goToPrevious}>
//           ← Previous
//         </button>
//         <span style={styles.stateCounter}>
//           {currentIndex + 1} / {scenarios.length}
//         </span>
//         <button style={styles.navButton} onClick={goToNext}>
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// };

// // Default scenarios (fallback)
// const defaultScenarios = [
//   { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', equivalences: [], definition: '', example: '', properties: [] },
//   { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', equivalences: [], definition: '', example: '', properties: [] },
// ];

// const styles = {
//   container: {
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '24px',
//     backgroundColor: '#f8fafc',
//     minHeight: '100vh',
//   },
  
//   // Header
//   header: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     padding: '16px 20px',
//     backgroundColor: '#245de1',
//     borderRadius: '12px',
//     color: '#ffffff',
//     boxShadow: '0 4px 20px rgba(36, 93, 225, 0.3)',
//   },
//   title: {
//     margin: '0 0 4px 0',
//     fontSize: '28px',
//     fontWeight: '700',
//     letterSpacing: '-0.5px',
//   },
//   subtitle: {
//     margin: 0,
//     fontSize: '14px',
//     opacity: 0.9,
//   },
  
//   // Controls Panel - Compact
//   controlsPanel: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//     padding: '16px 20px',
//     marginBottom: '20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     gap: '24px',
//     flexWrap: 'wrap',
//   },
//   buttonGroupsContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '16px',
//     flex: '1',
//   },
//   buttonGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '6px',
//   },
//   groupLabel: {
//     fontSize: '10px',
//     fontWeight: '600',
//     color: '#94a3b8',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//   },
//   groupButtons: {
//     display: 'flex',
//     gap: '4px',
//     flexWrap: 'wrap',
//   },
//   quickButton: {
//     padding: '6px 10px',
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#64748b',
//     backgroundColor: '#f1f5f9',
//     border: '2px solid transparent',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     fontFamily: "'Cambria Math', 'Times New Roman', serif",
//     whiteSpace: 'nowrap',
//   },
//   quickButtonActive: {
//     color: '#245de1',
//     backgroundColor: '#e8effd',
//     borderColor: '#245de1',
//   },
//   dropdownContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '6px',
//     minWidth: '200px',
//   },
//   dropdown: {
//     width: '100%',
//     padding: '8px 12px',
//     fontSize: '13px',
//     fontWeight: '500',
//     color: '#334155',
//     backgroundColor: '#f8fafc',
//     border: '2px solid #e2e8f0',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     outline: 'none',
//   },
  
//   // Main Content
//   mainContent: {
//     display: 'flex',
//     gap: '20px',
//     marginBottom: '20px',
//   },
  
//   // Diagram Panel
//   diagramPanel: {
//     flex: '1 1 55%',
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//     overflow: 'hidden',
//   },
//   panelHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '12px 16px',
//     borderBottom: '1px solid #e2e8f0',
//     backgroundColor: '#f8fafc',
//   },
//   panelTitle: {
//     fontSize: '12px',
//     fontWeight: '600',
//     color: '#64748b',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//   },
//   panelBadge: {
//     padding: '3px 10px',
//     backgroundColor: '#245de1',
//     color: '#ffffff',
//     borderRadius: '12px',
//     fontSize: '12px',
//     fontWeight: '600',
//   },
//   diagramContainer: {
//     padding: '16px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '380px',
//   },
//   diagramPlaceholder: {
//     width: '100%',
//     height: '380px',
//     backgroundColor: '#f1f5f9',
//     borderRadius: '8px',
//     border: '2px dashed #cbd5e1',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: '#94a3b8',
//   },
//   placeholderIcon: {
//     fontSize: '40px',
//     marginBottom: '8px',
//   },
//   placeholderText: {
//     fontSize: '16px',
//     fontWeight: '600',
//     margin: '0 0 4px 0',
//   },
//   placeholderSubtext: {
//     fontSize: '13px',
//     margin: 0,
//   },
  
//   // Explanation Panel
//   explanationPanel: {
//     flex: '1 1 45%',
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'column',
//     maxHeight: '500px',
//   },
//   explanationContent: {
//     padding: '20px',
//     flex: 1,
//     overflowY: 'auto',
//   },
//   stateTitle: {
//     marginBottom: '20px',
//     paddingBottom: '12px',
//     borderBottom: '2px solid #e2e8f0',
//   },
//   stateName: {
//     margin: '0 0 6px 0',
//     fontSize: '20px',
//     fontWeight: '700',
//     color: '#1e293b',
//   },
//   symbolDisplay: {
//     display: 'inline-block',
//     padding: '6px 12px',
//     backgroundColor: '#f1f5f9',
//     borderRadius: '6px',
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#245de1',
//     fontFamily: "'Cambria Math', 'Times New Roman', serif",
//   },
//   section: {
//     marginBottom: '16px',
//   },
//   sectionTitle: {
//     margin: '0 0 6px 0',
//     fontSize: '11px',
//     fontWeight: '600',
//     color: '#64748b',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//   },
//   sectionText: {
//     margin: 0,
//     fontSize: '14px',
//     lineHeight: '1.6',
//     color: '#475569',
//   },
//   equivalencesBox: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '4px',
//   },
//   equivalence: {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#334155',
//     fontFamily: "'Cambria Math', 'Times New Roman', serif",
//   },
//   formulaBox: {
//     padding: '12px',
//     backgroundColor: '#f8fafc',
//     borderRadius: '6px',
//     border: '1px solid #e2e8f0',
//     textAlign: 'center',
//   },
//   formula: {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#334155',
//     fontFamily: "'Cambria Math', 'Times New Roman', serif",
//   },
//   propertiesList: {
//     margin: 0,
//     paddingLeft: '18px',
//   },
//   propertyItem: {
//     fontSize: '14px',
//     lineHeight: '1.7',
//     color: '#475569',
//   },
  
//   // Navigation Panel - Bottom
//   navigationPanel: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//     padding: '12px 20px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '16px',
//   },
//   navButton: {
//     padding: '8px 20px',
//     fontSize: '13px',
//     fontWeight: '600',
//     color: '#ffffff',
//     backgroundColor: '#245de1',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//   },
//   stateCounter: {
//     fontSize: '13px',
//     fontWeight: '600',
//     color: '#64748b',
//     minWidth: '70px',
//     textAlign: 'center',
//   },
// };

// export default VennDiagramExplorer;


'use client';

import React, { useState, useMemo } from 'react';

const VennDiagramExplorer = ({ explorerData, DiagramComponent }) => {
  // Use provided data or fallback to defaults
  const frame = explorerData?.frame || {
    title: "Set Theory Explorer",
    subtitle: "Interactive Venn Diagram Visualizations"
  };
  
  const diagramDefaults = explorerData?.diagramDefaults || {};
  const scenarios = explorerData?.scenarios || defaultScenarios;
  
  const [currentState, setCurrentState] = useState(scenarios[0]?.id || 'intersection');
  
  // Group scenarios by their group field
  const groupedScenarios = scenarios.reduce((acc, scenario) => {
    const group = scenario.group || 'Other';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(scenario);
    return acc;
  }, {});
  
  const groupOrder = [
    'Intersection & Union',
    'Exclusive Regions',
    'Complements',
    'Symmetric Difference',
    "De Morgan's Laws",
    'Subset Relationships'
  ];
  
  const sortedGroups = groupOrder.filter(g => groupedScenarios[g]);
  
  const currentScenario = scenarios.find(s => s.id === currentState) || scenarios[0];
  const currentIndex = scenarios.findIndex(s => s.id === currentState);
  
  // Merge diagramDefaults with current scenario's highlightRegions
  const mergedDiagramConfig = useMemo(() => {
    if (!currentScenario) return diagramDefaults;
    
    const baseRegions = diagramDefaults.baseRegions || {};
    const highlightRegions = currentScenario.highlightRegions || {};
    
    // Deep merge: base regions + highlight overrides
    const mergedRegions = {};
    Object.keys(baseRegions).forEach(key => {
      mergedRegions[key] = {
        ...baseRegions[key],
        ...(highlightRegions[key] || {})
      };
    });
    
    // Build final config
    return {
      width: diagramDefaults.width,
      height: diagramDefaults.height,
      backgroundColor: diagramDefaults.backgroundColor,
      showUniverse: diagramDefaults.showUniverse,
      showTooltip: diagramDefaults.showTooltip,
      showLegend: diagramDefaults.showLegend,
      enableHover: diagramDefaults.enableHover,
      universe: diagramDefaults.universe,
      circles: diagramDefaults.circles,
      regions: mergedRegions,
      legendItems: currentScenario.legendItems || []
    };
  }, [diagramDefaults, currentScenario]);
  
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : scenarios.length - 1;
    setCurrentState(scenarios[newIndex].id);
  };
  
  const goToNext = () => {
    const newIndex = currentIndex < scenarios.length - 1 ? currentIndex + 1 : 0;
    setCurrentState(scenarios[newIndex].id);
  };
  
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>{frame.title}</h1>
        <p style={styles.subtitle}>{frame.subtitle}</p>
      </div>
      
      {/* Controls Panel - Compact */}
      <div style={styles.controlsPanel}>
        {/* Left: Grouped Buttons */}
        <div style={styles.buttonGroupsContainer}>
          {sortedGroups.map(groupName => (
            <div key={groupName} style={styles.buttonGroup}>
              <span style={styles.groupLabel}>{groupName}</span>
              <div style={styles.groupButtons}>
                {groupedScenarios[groupName].map(scenario => (
                  <button
                    key={scenario.id}
                    style={{
                      ...styles.quickButton,
                      ...(currentState === scenario.id ? styles.quickButtonActive : {})
                    }}
                    onClick={() => setCurrentState(scenario.id)}
                    title={scenario.equivalences?.length 
                      ? `${scenario.name}\n≡ ${scenario.equivalences.join('\n≡ ')}`
                      : scenario.name
                    }
                  >
                    {scenario.symbol}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Right: Dropdown */}
        <div style={styles.dropdownContainer}>
          <span style={styles.groupLabel}>Jump to</span>
          <select 
            style={styles.dropdown}
            value={currentState}
            onChange={(e) => setCurrentState(e.target.value)}
          >
            {sortedGroups.map(groupName => (
              <optgroup key={groupName} label={groupName}>
                {groupedScenarios[groupName].map(scenario => (
                  <option key={scenario.id} value={scenario.id}>
                    {scenario.symbol} — {scenario.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Column - Diagram + Navigation */}
        <div style={styles.diagramColumn}>
          {/* Diagram Panel */}
          <div style={styles.diagramPanel}>
            <div style={styles.panelHeader}>
              <span style={styles.panelTitle}>Diagram</span>
              <span style={styles.panelBadge}>{currentScenario?.symbol}</span>
            </div>
            <div style={styles.diagramContainer}>
              {DiagramComponent ? (
                <DiagramComponent {...mergedDiagramConfig} />
              ) : (
                <div style={styles.diagramPlaceholder}>
                  <div style={styles.placeholderIcon}>◉</div>
                  <p style={styles.placeholderText}>No Diagram Component</p>
                  <p style={styles.placeholderSubtext}>Pass DiagramComponent prop</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Navigation Panel - Same width as diagram */}
          <div style={styles.navigationPanel}>
            <button style={styles.navButton} onClick={goToPrevious}>
              ← Previous
            </button>
            <span style={styles.stateCounter}>
              {currentIndex + 1} / {scenarios.length}
            </span>
            <button style={styles.navButton} onClick={goToNext}>
              Next →
            </button>
          </div>
        </div>
        
        {/* Right Column - Explanation */}
        <div style={styles.explanationPanel}>
          <div style={styles.panelHeader}>
            <span style={styles.panelTitle}>Explanation</span>
          </div>
          
          <div style={styles.explanationContent}>
            {/* State Title */}
            <div style={styles.stateTitle}>
              <h2 style={styles.stateName}>{currentScenario?.name}</h2>
              <div style={styles.symbolDisplay}>{currentScenario?.symbol}</div>
            </div>
            
            {/* Equivalences */}
            {currentScenario?.equivalences?.length > 0 && (
              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Equivalences</h3>
                <div style={styles.equivalencesBox}>
                  {currentScenario.equivalences.map((eq, i) => (
                    <code key={i} style={styles.equivalence}>≡ {eq}</code>
                  ))}
                </div>
              </div>
            )}
            
            {/* Definition */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Definition</h3>
              <p style={styles.sectionText}>
                {currentScenario?.definition || 'Definition placeholder...'}
              </p>
            </div>
            
            {/* Formula */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Formula</h3>
              <div style={styles.formulaBox}>
                <code style={styles.formula}>{currentScenario?.symbol}</code>
              </div>
            </div>
            
            {/* Example */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Example</h3>
              <p style={styles.sectionText}>
                {currentScenario?.example || 'Example placeholder...'}
              </p>
            </div>
            
            {/* Properties */}
            {currentScenario?.properties?.length > 0 && (
              <div style={styles.section}>
                <h3 style={styles.sectionTitle}>Properties</h3>
                <ul style={styles.propertiesList}>
                  {currentScenario.properties.map((prop, i) => (
                    <li key={i} style={styles.propertyItem}>{prop}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default scenarios (fallback)
const defaultScenarios = [
  { id: 'intersection', group: 'Intersection & Union', name: 'Intersection', symbol: 'A ∩ B', equivalences: [], definition: '', example: '', properties: [] },
  { id: 'union', group: 'Intersection & Union', name: 'Union', symbol: 'A ∪ B', equivalences: [], definition: '', example: '', properties: [] },
];

const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  
  // Header
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '16px 20px',
    backgroundColor: '#245de1',
    borderRadius: '12px',
    color: '#ffffff',
    boxShadow: '0 4px 20px rgba(36, 93, 225, 0.3)',
  },
  title: {
    margin: '0 0 4px 0',
    fontSize: '28px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    margin: 0,
    fontSize: '14px',
    opacity: 0.9,
  },
  
  // Controls Panel - Compact
  controlsPanel: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    padding: '16px 20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '24px',
    flexWrap: 'wrap',
  },
  buttonGroupsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    flex: '1',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  groupLabel: {
    fontSize: '10px',
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  groupButtons: {
    display: 'flex',
    gap: '4px',
    flexWrap: 'wrap',
  },
  quickButton: {
    padding: '6px 10px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#64748b',
    backgroundColor: '#f1f5f9',
    border: '2px solid transparent',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: "'Cambria Math', 'Times New Roman', serif",
    whiteSpace: 'nowrap',
  },
  quickButtonActive: {
    color: '#245de1',
    backgroundColor: '#e8effd',
    borderColor: '#245de1',
  },
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    minWidth: '200px',
  },
  dropdown: {
    width: '100%',
    padding: '8px 12px',
    fontSize: '13px',
    fontWeight: '500',
    color: '#334155',
    backgroundColor: '#f8fafc',
    border: '2px solid #e2e8f0',
    borderRadius: '6px',
    cursor: 'pointer',
    outline: 'none',
  },
  
  // Main Content
  mainContent: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  
  // Diagram Column (65%)
  diagramColumn: {
    flex: '0 0 65%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  
  // Diagram Panel
  diagramPanel: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
  },
  panelTitle: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  panelBadge: {
    padding: '3px 10px',
    backgroundColor: '#245de1',
    color: '#ffffff',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
  },
  diagramContainer: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '380px',
  },
  diagramPlaceholder: {
    width: '100%',
    height: '380px',
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    border: '2px dashed #cbd5e1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#94a3b8',
  },
  placeholderIcon: {
    fontSize: '40px',
    marginBottom: '8px',
  },
  placeholderText: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
  },
  placeholderSubtext: {
    fontSize: '13px',
    margin: 0,
  },
  
  // Navigation Panel - Within diagram column
  navigationPanel: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  },
  navButton: {
    padding: '8px 20px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#245de1',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  stateCounter: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b',
    minWidth: '70px',
    textAlign: 'center',
  },
  
  // Explanation Panel (35%)
  explanationPanel: {
    flex: '0 0 35%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  explanationContent: {
    padding: '20px',
  },
  stateTitle: {
    marginBottom: '20px',
    paddingBottom: '12px',
    borderBottom: '2px solid #e2e8f0',
  },
  stateName: {
    margin: '0 0 6px 0',
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
  },
  symbolDisplay: {
    display: 'inline-block',
    padding: '6px 12px',
    backgroundColor: '#f1f5f9',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#245de1',
    fontFamily: "'Cambria Math', 'Times New Roman', serif",
  },
  section: {
    marginBottom: '16px',
  },
  sectionTitle: {
    margin: '0 0 6px 0',
    fontSize: '11px',
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  sectionText: {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#475569',
  },
  equivalencesBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  equivalence: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#334155',
    fontFamily: "'Cambria Math', 'Times New Roman', serif",
  },
  formulaBox: {
    padding: '12px',
    backgroundColor: '#f8fafc',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
  },
  formula: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#334155',
    fontFamily: "'Cambria Math', 'Times New Roman', serif",
  },
  propertiesList: {
    margin: 0,
    paddingLeft: '18px',
  },
  propertyItem: {
    fontSize: '14px',
    lineHeight: '1.7',
    color: '#475569',
  },
};

export default VennDiagramExplorer;