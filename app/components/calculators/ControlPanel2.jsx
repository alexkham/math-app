// // // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // // const styles = {
// // // // // // // // // //   panel: {
// // // // // // // // // //     maxWidth: '700px',
// // // // // // // // // //     margin: '15px auto',
// // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // //     borderRadius: '6px',
// // // // // // // // // //     border: '1px solid #ddd',
// // // // // // // // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // // // // // // // //     overflow: 'hidden'
// // // // // // // // // //   },
// // // // // // // // // //   header: {
// // // // // // // // // //     padding: '12px 15px',
// // // // // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // // // // //     borderBottom: '1px solid #ddd',
// // // // // // // // // //     display: 'flex',
// // // // // // // // // //     alignItems: 'center'
// // // // // // // // // //   },
// // // // // // // // // //   headerTitle: {
// // // // // // // // // //     margin: 0,
// // // // // // // // // //     fontSize: '16px',
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //     color: '#333'
// // // // // // // // // //   },
// // // // // // // // // //   mainButtons: {
// // // // // // // // // //     display: 'flex',
// // // // // // // // // //     gap: '8px',
// // // // // // // // // //     padding: '10px 15px',
// // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // //     borderBottom: '1px solid #ddd'
// // // // // // // // // //   },
// // // // // // // // // //   mainButton: {
// // // // // // // // // //     padding: '8px 12px',
// // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // //     border: '1px solid #ddd',
// // // // // // // // // //     borderRadius: '4px',
// // // // // // // // // //     cursor: 'pointer',
// // // // // // // // // //     fontSize: '14px',
// // // // // // // // // //     color: '#333',
// // // // // // // // // //     transition: 'all 0.2s ease'
// // // // // // // // // //   },
// // // // // // // // // //   mainButtonActive: {
// // // // // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // // // // //     borderColor: '#2196F3',
// // // // // // // // // //     color: '#1976d2'
// // // // // // // // // //   },
// // // // // // // // // //   content: {
// // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // //     transition: 'max-height 0.3s ease-out',
// // // // // // // // // //     maxHeight: '1000px',
// // // // // // // // // //     overflow: 'hidden'
// // // // // // // // // //   },
// // // // // // // // // //   contentHidden: {
// // // // // // // // // //     maxHeight: '0'
// // // // // // // // // //   },
// // // // // // // // // //   optionsPanel: {
// // // // // // // // // //     padding: '15px',
// // // // // // // // // //     display: 'flex',
// // // // // // // // // //     flexDirection: 'column',
// // // // // // // // // //     gap: '8px'
// // // // // // // // // //   },
// // // // // // // // // //   button: {
// // // // // // // // // //     padding: '8px 12px',
// // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // //     border: '1px solid #ddd',
// // // // // // // // // //     borderRadius: '4px',
// // // // // // // // // //     cursor: 'pointer',
// // // // // // // // // //     fontSize: '14px',
// // // // // // // // // //     color: '#333',
// // // // // // // // // //     transition: 'all 0.2s ease'
// // // // // // // // // //   },
// // // // // // // // // //   buttonActive: {
// // // // // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // // // // //     borderColor: '#2196F3',
// // // // // // // // // //     color: '#1976d2'
// // // // // // // // // //   }
// // // // // // // // // // };

// // // // // // // // // // const sections = [
// // // // // // // // // //   {
// // // // // // // // // //     id: 'unions',
// // // // // // // // // //     title: 'Unions',
// // // // // // // // // //     buttons: [
// // // // // // // // // //       { id: 'AuB', label: 'P(A ∪ B)' },
// // // // // // // // // //       { id: 'AuNotB', label: 'P(A ∪ B̄)' },
// // // // // // // // // //       { id: 'NotAuB', label: 'P(Ā ∪ B)' },
// // // // // // // // // //       { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
// // // // // // // // // //     ]
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 'conditional',
// // // // // // // // // //     title: 'Conditional',
// // // // // // // // // //     buttons: [
// // // // // // // // // //       { id: 'AgivenB', label: 'P(A|B)' },
// // // // // // // // // //       { id: 'AgivenNotB', label: 'P(A|B̄)' },
// // // // // // // // // //       { id: 'BgivenA', label: 'P(B|A)' },
// // // // // // // // // //       { id: 'BgivenNotA', label: 'P(B|Ā)' }
// // // // // // // // // //     ]
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 'independence',
// // // // // // // // // //     title: 'Independence',
// // // // // // // // // //     buttons: [
// // // // // // // // // //       { id: 'indepTest', label: 'Independence Test' },
// // // // // // // // // //       { id: 'correlation', label: 'Correlation Analysis' }
// // // // // // // // // //     ]
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     id: 'odds',
// // // // // // // // // //     title: 'Odds',
// // // // // // // // // //     buttons: [
// // // // // // // // // //       { id: 'oddsA', label: 'Odds of A' },
// // // // // // // // // //       { id: 'oddsB', label: 'Odds of B' },
// // // // // // // // // //       { id: 'oddsRatio', label: 'Odds Ratio' }
// // // // // // // // // //     ]
// // // // // // // // // //   }
// // // // // // // // // // ];

// // // // // // // // // // const ControlPanel2 = () => {
// // // // // // // // // //   const [activeSection, setActiveSection] = useState(null);
// // // // // // // // // //   const [activeButtons, setActiveButtons] = useState({});

// // // // // // // // // //   const toggleSection = (sectionId) => {
// // // // // // // // // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // // // // // // // // //   };

// // // // // // // // // //   const toggleButton = (buttonId) => {
// // // // // // // // // //     setActiveButtons(prev => ({
// // // // // // // // // //       ...prev,
// // // // // // // // // //       [buttonId]: !prev[buttonId]
// // // // // // // // // //     }));
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div style={styles.panel}>
// // // // // // // // // //       <div style={styles.header}>
// // // // // // // // // //         <h3 style={styles.headerTitle}>Probability Calculations</h3>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div style={styles.mainButtons}>
// // // // // // // // // //         {sections.map(section => (
// // // // // // // // // //           <button
// // // // // // // // // //             key={section.id}
// // // // // // // // // //             style={{
// // // // // // // // // //               ...styles.mainButton,
// // // // // // // // // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // // // // // // // // //             }}
// // // // // // // // // //             onClick={() => toggleSection(section.id)}
// // // // // // // // // //           >
// // // // // // // // // //             {section.title}
// // // // // // // // // //           </button>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {activeSection && (
// // // // // // // // // //         <div style={styles.optionsPanel}>
// // // // // // // // // //           {sections
// // // // // // // // // //             .find(section => section.id === activeSection)
// // // // // // // // // //             .buttons.map(button => (
// // // // // // // // // //               <button
// // // // // // // // // //                 key={button.id}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   ...styles.button,
// // // // // // // // // //                   ...(activeButtons[button.id] ? styles.buttonActive : {})
// // // // // // // // // //                 }}
// // // // // // // // // //                 onClick={() => toggleButton(button.id)}
// // // // // // // // // //               >
// // // // // // // // // //                 {button.label}
// // // // // // // // // //               </button>
// // // // // // // // // //             ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ControlPanel2;
// // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // const styles = {
// // // // // // // // //   panel: {
// // // // // // // // //     maxWidth: '700px',
// // // // // // // // //     margin: '15px auto',
// // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // //     borderRadius: '6px',
// // // // // // // // //     border: '1px solid #ddd',
// // // // // // // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // // // // // // //     overflow: 'hidden'
// // // // // // // // //   },
// // // // // // // // //   header: {
// // // // // // // // //     padding: '12px 15px',
// // // // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // // // //     borderBottom: '1px solid #ddd',
// // // // // // // // //     display: 'flex',
// // // // // // // // //     alignItems: 'center'
// // // // // // // // //   },
// // // // // // // // //   headerTitle: {
// // // // // // // // //     margin: 0,
// // // // // // // // //     fontSize: '16px',
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //     color: '#333'
// // // // // // // // //   },
// // // // // // // // //   mainButtons: {
// // // // // // // // //     display: 'flex',
// // // // // // // // //     gap: '8px',
// // // // // // // // //     padding: '10px 15px',
// // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // //     borderBottom: '1px solid #ddd'
// // // // // // // // //   },
// // // // // // // // //   mainButton: {
// // // // // // // // //     padding: '8px 12px',
// // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // //     border: '1px solid #ddd',
// // // // // // // // //     borderRadius: '4px',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     fontSize: '14px',
// // // // // // // // //     color: '#333',
// // // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // // //     display: 'flex',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // //     minWidth: '120px'  // Ensures stable button width
// // // // // // // // //   },
// // // // // // // // //   mainButtonActive: {
// // // // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // // // //     borderColor: '#2196F3',
// // // // // // // // //     color: '#1976d2'
// // // // // // // // //   },
// // // // // // // // //   optionsWrapper: {
// // // // // // // // //     height: '300px',  // Fixed height container
// // // // // // // // //     transition: 'all 0.3s ease',
// // // // // // // // //     backgroundColor: '#fff'
// // // // // // // // //   },
// // // // // // // // //   optionsWrapperHidden: {
// // // // // // // // //     height: '0'
// // // // // // // // //   },
// // // // // // // // //   optionsPanel: {
// // // // // // // // //     padding: '15px',
// // // // // // // // //     display: 'flex',
// // // // // // // // //     flexDirection: 'column',
// // // // // // // // //     gap: '8px'
// // // // // // // // //   },
// // // // // // // // //   button: {
// // // // // // // // //     padding: '8px 12px',
// // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // //     border: '1px solid #ddd',
// // // // // // // // //     borderRadius: '4px',
// // // // // // // // //     cursor: 'pointer',
// // // // // // // // //     fontSize: '14px',
// // // // // // // // //     color: '#333',
// // // // // // // // //     transition: 'all 0.2s ease'
// // // // // // // // //   },
// // // // // // // // //   buttonActive: {
// // // // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // // // //     borderColor: '#2196F3',
// // // // // // // // //     color: '#1976d2'
// // // // // // // // //   },
// // // // // // // // //   toggleSign: {
// // // // // // // // //     marginLeft: '8px',
// // // // // // // // //     fontWeight: 'bold'
// // // // // // // // //   }
// // // // // // // // // };

// // // // // // // // // const sections = [
// // // // // // // // //   {
// // // // // // // // //     id: 'unions',
// // // // // // // // //     title: 'Unions',
// // // // // // // // //     buttons: [
// // // // // // // // //       { id: 'AuB', label: 'P(A ∪ B)' },
// // // // // // // // //       { id: 'AuNotB', label: 'P(A ∪ B̄)' },
// // // // // // // // //       { id: 'NotAuB', label: 'P(Ā ∪ B)' },
// // // // // // // // //       { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
// // // // // // // // //     ]
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 'conditional',
// // // // // // // // //     title: 'Conditional',
// // // // // // // // //     buttons: [
// // // // // // // // //       { id: 'AgivenB', label: 'P(A|B)' },
// // // // // // // // //       { id: 'AgivenNotB', label: 'P(A|B̄)' },
// // // // // // // // //       { id: 'BgivenA', label: 'P(B|A)' },
// // // // // // // // //       { id: 'BgivenNotA', label: 'P(B|Ā)' }
// // // // // // // // //     ]
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 'independence',
// // // // // // // // //     title: 'Independence',
// // // // // // // // //     buttons: [
// // // // // // // // //       { id: 'indepTest', label: 'Independence Test' },
// // // // // // // // //       { id: 'correlation', label: 'Correlation Analysis' }
// // // // // // // // //     ]
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 'odds',
// // // // // // // // //     title: 'Odds',
// // // // // // // // //     buttons: [
// // // // // // // // //       { id: 'oddsA', label: 'Odds of A' },
// // // // // // // // //       { id: 'oddsB', label: 'Odds of B' },
// // // // // // // // //       { id: 'oddsRatio', label: 'Odds Ratio' }
// // // // // // // // //     ]
// // // // // // // // //   }
// // // // // // // // // ];

// // // // // // // // // const ControlPanel2 = () => {
// // // // // // // // //   const [activeSection, setActiveSection] = useState(null);
// // // // // // // // //   const [activeButtons, setActiveButtons] = useState({});

// // // // // // // // //   const toggleSection = (sectionId) => {
// // // // // // // // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // // // // // // // //   };

// // // // // // // // //   const toggleButton = (buttonId) => {
// // // // // // // // //     setActiveButtons(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [buttonId]: !prev[buttonId]
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={styles.panel}>
// // // // // // // // //       <div style={styles.header}>
// // // // // // // // //         <h3 style={styles.headerTitle}>Probability Calculations</h3>
// // // // // // // // //       </div>

// // // // // // // // //       <div style={styles.mainButtons}>
// // // // // // // // //         {sections.map(section => (
// // // // // // // // //           <button
// // // // // // // // //             key={section.id}
// // // // // // // // //             style={{
// // // // // // // // //               ...styles.mainButton,
// // // // // // // // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // // // // // // // //             }}
// // // // // // // // //             onClick={() => toggleSection(section.id)}
// // // // // // // // //           >
// // // // // // // // //             <span>{section.title}</span>
// // // // // // // // //             <span style={styles.toggleSign}>
// // // // // // // // //               {activeSection === section.id ? '−' : '+'}
// // // // // // // // //             </span>
// // // // // // // // //           </button>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       <div style={{
// // // // // // // // //         ...styles.optionsWrapper,
// // // // // // // // //         ...(activeSection ? {} : styles.optionsWrapperHidden)
// // // // // // // // //       }}>
// // // // // // // // //         {activeSection && (
// // // // // // // // //           <div style={styles.optionsPanel}>
// // // // // // // // //             {sections
// // // // // // // // //               .find(section => section.id === activeSection)
// // // // // // // // //               .buttons.map(button => (
// // // // // // // // //                 <button
// // // // // // // // //                   key={button.id}
// // // // // // // // //                   style={{
// // // // // // // // //                     ...styles.button,
// // // // // // // // //                     ...(activeButtons[button.id] ? styles.buttonActive : {})
// // // // // // // // //                   }}
// // // // // // // // //                   onClick={() => toggleButton(button.id)}
// // // // // // // // //                 >
// // // // // // // // //                   {button.label}
// // // // // // // // //                 </button>
// // // // // // // // //               ))}
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ControlPanel2;
// // // // // // // // import React, { useState } from 'react';

// // // // // // // // const styles = {
// // // // // // // //   panel: {
// // // // // // // //     maxWidth: '700px',
// // // // // // // //     margin: '15px auto',
// // // // // // // //     backgroundColor: '#fff',
// // // // // // // //     borderRadius: '6px',
// // // // // // // //     border: '1px solid #ddd',
// // // // // // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // // // // // //     overflow: 'hidden'
// // // // // // // //   },
// // // // // // // //   header: {
// // // // // // // //     padding: '12px 15px',
// // // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // // //     borderBottom: '1px solid #ddd',
// // // // // // // //     display: 'flex',
// // // // // // // //     alignItems: 'center'
// // // // // // // //   },
// // // // // // // //   headerTitle: {
// // // // // // // //     margin: 0,
// // // // // // // //     fontSize: '16px',
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#333'
// // // // // // // //   },
// // // // // // // //   mainButtons: {
// // // // // // // //     display: 'flex',
// // // // // // // //     gap: '8px',
// // // // // // // //     padding: '10px 15px',
// // // // // // // //     backgroundColor: '#fff',
// // // // // // // //     borderBottom: '1px solid #ddd'
// // // // // // // //   },
// // // // // // // //   mainButton: {
// // // // // // // //     padding: '8px 12px',
// // // // // // // //     backgroundColor: '#fff',
// // // // // // // //     border: '1px solid #ddd',
// // // // // // // //     borderRadius: '4px',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     fontSize: '14px',
// // // // // // // //     color: '#333',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //     display: 'flex',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     justifyContent: 'space-between',
// // // // // // // //     minWidth: '120px'
// // // // // // // //   },
// // // // // // // //   mainButtonActive: {
// // // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // // //     borderColor: '#2196F3',
// // // // // // // //     color: '#1976d2'
// // // // // // // //   },
// // // // // // // //   optionsWrapper: {
// // // // // // // //     height: '300px',
// // // // // // // //     transition: 'all 0.3s ease',
// // // // // // // //     backgroundColor: '#fff'
// // // // // // // //   },
// // // // // // // //   optionsWrapperHidden: {
// // // // // // // //     height: '0'
// // // // // // // //   },
// // // // // // // //   optionsPanel: {
// // // // // // // //     padding: '15px',
// // // // // // // //     display: 'flex',
// // // // // // // //     flexDirection: 'column',
// // // // // // // //     gap: '8px'
// // // // // // // //   },
// // // // // // // //   button: {
// // // // // // // //     padding: '8px 12px',
// // // // // // // //     backgroundColor: '#fff',
// // // // // // // //     border: '1px solid #ddd',
// // // // // // // //     borderRadius: '4px',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     fontSize: '14px',
// // // // // // // //     color: '#333',
// // // // // // // //     transition: 'all 0.2s ease'
// // // // // // // //   },
// // // // // // // //   buttonActive: {
// // // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // // //     borderColor: '#2196F3',
// // // // // // // //     color: '#1976d2'
// // // // // // // //   },
// // // // // // // //   toggleSign: {
// // // // // // // //     marginLeft: '8px',
// // // // // // // //     fontWeight: 'bold'
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // const sections = [
// // // // // // // //   {
// // // // // // // //     id: 'unions',
// // // // // // // //     title: 'Unions',
// // // // // // // //     buttons: [
// // // // // // // //       { id: 'AuB', label: 'P(A ∪ B)' },
// // // // // // // //       { id: 'AuNotB', label: 'P(A ∪ B̄)' },
// // // // // // // //       { id: 'NotAuB', label: 'P(Ā ∪ B)' },
// // // // // // // //       { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
// // // // // // // //     ]
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 'conditional',
// // // // // // // //     title: 'Conditional',
// // // // // // // //     buttons: [
// // // // // // // //       { id: 'AgivenB', label: 'P(A|B)' },
// // // // // // // //       { id: 'AgivenNotB', label: 'P(A|B̄)' },
// // // // // // // //       { id: 'BgivenA', label: 'P(B|A)' },
// // // // // // // //       { id: 'BgivenNotA', label: 'P(B|Ā)' }
// // // // // // // //     ]
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 'independence',
// // // // // // // //     title: 'Independence',
// // // // // // // //     buttons: [
// // // // // // // //       { id: 'indepTest', label: 'Independence Test' },
// // // // // // // //       { id: 'correlation', label: 'Correlation Analysis' }
// // // // // // // //     ]
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 'odds',
// // // // // // // //     title: 'Odds',
// // // // // // // //     buttons: [
// // // // // // // //       { id: 'oddsA', label: 'Odds of A' },
// // // // // // // //       { id: 'oddsB', label: 'Odds of B' },
// // // // // // // //       { id: 'oddsRatio', label: 'Odds Ratio' }
// // // // // // // //     ]
// // // // // // // //   }
// // // // // // // // ];

// // // // // // // // const ControlPanel2 = () => {
// // // // // // // //   const [activeSection, setActiveSection] = useState(null);
// // // // // // // //   const [selectedButtons, setSelectedButtons] = useState([]);

// // // // // // // //   const toggleSection = (sectionId) => {
// // // // // // // //     if (activeSection !== sectionId) {
// // // // // // // //       setSelectedButtons([]); // Clear selections when changing sections
// // // // // // // //     }
// // // // // // // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // // // // // // //   };

// // // // // // // //   const toggleButton = (buttonId) => {
// // // // // // // //     setSelectedButtons(prev => 
// // // // // // // //       prev.includes(buttonId)
// // // // // // // //         ? prev.filter(id => id !== buttonId)
// // // // // // // //         : [...prev, buttonId]
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={styles.panel}>
// // // // // // // //       <div style={styles.header}>
// // // // // // // //         <h3 style={styles.headerTitle}>Probability Calculations</h3>
// // // // // // // //       </div>

// // // // // // // //       <div style={styles.mainButtons}>
// // // // // // // //         {sections.map(section => (
// // // // // // // //           <button
// // // // // // // //             key={section.id}
// // // // // // // //             style={{
// // // // // // // //               ...styles.mainButton,
// // // // // // // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // // // // // // //             }}
// // // // // // // //             onClick={() => toggleSection(section.id)}
// // // // // // // //           >
// // // // // // // //             <span>{section.title}</span>
// // // // // // // //             <span style={styles.toggleSign}>
// // // // // // // //               {activeSection === section.id ? '−' : '+'}
// // // // // // // //             </span>
// // // // // // // //           </button>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       <div style={{
// // // // // // // //         ...styles.optionsWrapper,
// // // // // // // //         ...(activeSection ? {} : styles.optionsWrapperHidden)
// // // // // // // //       }}>
// // // // // // // //         {activeSection && (
// // // // // // // //           <div style={styles.optionsPanel}>
// // // // // // // //             {sections
// // // // // // // //               .find(section => section.id === activeSection)
// // // // // // // //               .buttons.map(button => (
// // // // // // // //                 <button
// // // // // // // //                   key={button.id}
// // // // // // // //                   style={{
// // // // // // // //                     ...styles.button,
// // // // // // // //                     ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // // // // // // //                   }}
// // // // // // // //                   onClick={() => toggleButton(button.id)}
// // // // // // // //                 >
// // // // // // // //                   {button.label}
// // // // // // // //                 </button>
// // // // // // // //               ))}
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ControlPanel2;
// // // // // // // import React, { useState } from 'react';

// // // // // // // const styles = {
// // // // // // //   panel: {
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     borderRadius: '6px',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // // // // //     overflow: 'hidden'
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     padding: '12px 15px',
// // // // // // //     backgroundColor: '#f5f5f5',
// // // // // // //     borderBottom: '1px solid #ddd',
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'space-between'
// // // // // // //   },
// // // // // // //   headerTitle: {
// // // // // // //     margin: 0,
// // // // // // //     fontSize: '16px',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     color: '#333'
// // // // // // //   },
// // // // // // //   mainButtons: {
// // // // // // //     display: 'flex',
// // // // // // //     flexWrap: 'wrap',
// // // // // // //     gap: '8px',
// // // // // // //     padding: '10px 15px',
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     borderBottom: '1px solid #ddd'
// // // // // // //   },
// // // // // // //   mainButton: {
// // // // // // //     padding: '8px 12px',
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     borderRadius: '4px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     fontSize: '14px',
// // // // // // //     color: '#333',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     minWidth: '120px',
// // // // // // //     flex: '0 1 auto'
// // // // // // //   },
// // // // // // //   mainButtonActive: {
// // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // //     borderColor: '#2196F3',
// // // // // // //     color: '#1976d2'
// // // // // // //   },
// // // // // // //   optionsWrapper: {
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     overflow: 'hidden',
// // // // // // //     transition: 'height 0.3s ease'
// // // // // // //   },
// // // // // // //   optionsPanel: {
// // // // // // //     padding: '15px',
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     gap: '8px'
// // // // // // //   },
// // // // // // //   optionsPanelHeader: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'flex-end',
// // // // // // //     marginBottom: '10px'
// // // // // // //   },
// // // // // // //   resetButton: {
// // // // // // //     padding: '4px 8px',
// // // // // // //     fontSize: '12px',
// // // // // // //     color: '#666',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     borderRadius: '4px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     backgroundColor: '#fff'
// // // // // // //   },
// // // // // // //   button: {
// // // // // // //     padding: '8px 12px',
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     border: '1px solid #ddd',
// // // // // // //     borderRadius: '4px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     fontSize: '14px',
// // // // // // //     color: '#333',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'center'
// // // // // // //   },
// // // // // // //   buttonActive: {
// // // // // // //     backgroundColor: '#e3f2fd',
// // // // // // //     borderColor: '#2196F3',
// // // // // // //     color: '#1976d2'
// // // // // // //   },
// // // // // // //   toggleSign: {
// // // // // // //     marginLeft: '8px',
// // // // // // //     fontWeight: 'bold'
// // // // // // //   },
// // // // // // //   checkMark: {
// // // // // // //     marginLeft: '8px',
// // // // // // //     fontSize: '14px',
// // // // // // //     fontWeight: 'bold'
// // // // // // //   }
// // // // // // // };

// // // // // // // const sections = [
// // // // // // //   {
// // // // // // //     id: 'unions',
// // // // // // //     title: 'Unions',
// // // // // // //     buttons: [
// // // // // // //       { id: 'AuB', label: 'P(A ∪ B)' },
// // // // // // //       { id: 'AuNotB', label: 'P(A ∪ B̄)' },
// // // // // // //       { id: 'NotAuB', label: 'P(Ā ∪ B)' },
// // // // // // //       { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'conditional',
// // // // // // //     title: 'Conditional',
// // // // // // //     buttons: [
// // // // // // //       { id: 'AgivenB', label: 'P(A|B)' },
// // // // // // //       { id: 'AgivenNotB', label: 'P(A|B̄)' },
// // // // // // //       { id: 'BgivenA', label: 'P(B|A)' },
// // // // // // //       { id: 'BgivenNotA', label: 'P(B|Ā)' }
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'independence',
// // // // // // //     title: 'Independence',
// // // // // // //     buttons: [
// // // // // // //       { id: 'indepTest', label: 'Independence Test' },
// // // // // // //       { id: 'correlation', label: 'Correlation Analysis' }
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 'odds',
// // // // // // //     title: 'Odds',
// // // // // // //     buttons: [
// // // // // // //       { id: 'oddsA', label: 'Odds of A' },
// // // // // // //       { id: 'oddsB', label: 'Odds of B' },
// // // // // // //       { id: 'oddsRatio', label: 'Odds Ratio' }
// // // // // // //     ]
// // // // // // //   }
// // // // // // // ];

// // // // // // // const ControlPanel2 = ({ width = '500px' }) => {
// // // // // // //   const [activeSection, setActiveSection] = useState(null);
// // // // // // //   const [selectedButtons, setSelectedButtons] = useState([]);

// // // // // // //   const toggleSection = (sectionId) => {
// // // // // // //     if (activeSection !== sectionId) {
// // // // // // //       setSelectedButtons([]); // Clear selections when changing sections
// // // // // // //     }
// // // // // // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // // // // // //   };

// // // // // // //   const toggleButton = (buttonId) => {
// // // // // // //     setSelectedButtons(prev => 
// // // // // // //       prev.includes(buttonId)
// // // // // // //         ? prev.filter(id => id !== buttonId)
// // // // // // //         : [...prev, buttonId]
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const resetSection = () => {
// // // // // // //     setSelectedButtons([]);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={{ ...styles.panel, width }}>
// // // // // // //       <div style={styles.header}>
// // // // // // //         <h3 style={styles.headerTitle}>Probability Calculations</h3>
// // // // // // //       </div>

// // // // // // //       <div style={styles.mainButtons}>
// // // // // // //         {sections.map(section => (
// // // // // // //           <button
// // // // // // //             key={section.id}
// // // // // // //             style={{
// // // // // // //               ...styles.mainButton,
// // // // // // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // // // // // //             }}
// // // // // // //             onClick={() => toggleSection(section.id)}
// // // // // // //           >
// // // // // // //             <span>{section.title}</span>
// // // // // // //             <span style={styles.toggleSign}>
// // // // // // //               {activeSection === section.id ? '−' : '+'}
// // // // // // //             </span>
// // // // // // //           </button>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {activeSection && (
// // // // // // //         <div style={styles.optionsWrapper}>
// // // // // // //           <div style={styles.optionsPanel}>
// // // // // // //             <div style={styles.optionsPanelHeader}>
// // // // // // //               <button 
// // // // // // //                 style={styles.resetButton}
// // // // // // //                 onClick={resetSection}
// // // // // // //               >
// // // // // // //                 Reset
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //             {sections
// // // // // // //               .find(section => section.id === activeSection)
// // // // // // //               .buttons.map(button => (
// // // // // // //                 <button
// // // // // // //                   key={button.id}
// // // // // // //                   style={{
// // // // // // //                     ...styles.button,
// // // // // // //                     ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // // // // // //                   }}
// // // // // // //                   onClick={() => toggleButton(button.id)}
// // // // // // //                 >
// // // // // // //                   <span>{button.label}</span>
// // // // // // //                   {selectedButtons.includes(button.id) && (
// // // // // // //                     <span style={styles.checkMark}>v</span>
// // // // // // //                   )}
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ControlPanel2;

// // // // // // import React, { useState } from 'react';

// // // // // // const styles = {
// // // // // //   panel: {
// // // // // //     backgroundColor: '#fff',
// // // // // //     borderRadius: '6px',
// // // // // //     border: '1px solid #ddd',
// // // // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // // // //     overflow: 'hidden'
// // // // // //   },
// // // // // //   header: {
// // // // // //     padding: '12px 15px',
// // // // // //     backgroundColor: '#f5f5f5',
// // // // // //     borderBottom: '1px solid #ddd',
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'space-between'
// // // // // //   },
// // // // // //   headerTitle: {
// // // // // //     margin: 0,
// // // // // //     fontSize: '16px',
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#333'
// // // // // //   },
// // // // // //   mainButtons: {
// // // // // //     display: 'flex',
// // // // // //     flexWrap: 'wrap',
// // // // // //     gap: '8px',
// // // // // //     padding: '10px 15px',
// // // // // //     backgroundColor: '#fff',
// // // // // //     borderBottom: '1px solid #ddd'
// // // // // //   },
// // // // // //   mainButton: {
// // // // // //     padding: '8px 12px',
// // // // // //     backgroundColor: '#fff',
// // // // // //     border: '1px solid #ddd',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '14px',
// // // // // //     color: '#333',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'space-between',
// // // // // //     flex: '1 1 0',
// // // // // //     minWidth: '120px'
// // // // // //   },
// // // // // //   mainButtonActive: {
// // // // // //     backgroundColor: '#e3f2fd',
// // // // // //     borderColor: '#2196F3',
// // // // // //     color: '#1976d2'
// // // // // //   },
// // // // // //   optionsWrapper: {
// // // // // //     backgroundColor: '#f5f9ff',
// // // // // //     overflow: 'hidden',
// // // // // //     transition: 'height 0.3s ease'
// // // // // //   },
// // // // // //   optionsPanel: {
// // // // // //     padding: '15px',
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     gap: '8px'
// // // // // //   },
// // // // // //   optionsPanelHeader: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'flex-end',
// // // // // //     marginBottom: '10px'
// // // // // //   },
// // // // // //   resetButton: {
// // // // // //     padding: '4px 12px',
// // // // // //     fontSize: '12px',
// // // // // //     color: '#fff',
// // // // // //     border: '1px solid #2196F3',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     backgroundColor: '#2196F3',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     '&:hover': {
// // // // // //       backgroundColor: '#1976d2'
// // // // // //     }
// // // // // //   },
// // // // // //   button: {
// // // // // //     padding: '8px 12px',
// // // // // //     backgroundColor: '#fff',
// // // // // //     border: '1px solid #ddd',
// // // // // //     borderRadius: '4px',
// // // // // //     cursor: 'pointer',
// // // // // //     fontSize: '14px',
// // // // // //     color: '#333',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     width: '100%'
// // // // // //   },
// // // // // //   buttonActive: {
// // // // // //     backgroundColor: '#e3f2fd',
// // // // // //     borderColor: '#2196F3',
// // // // // //     color: '#1976d2'
// // // // // //   },
// // // // // //   toggleSign: {
// // // // // //     marginLeft: '8px',
// // // // // //     fontWeight: 'bold'
// // // // // //   },
// // // // // //   checkMark: {
// // // // // //     marginLeft: '8px',
// // // // // //     fontSize: '14px',
// // // // // //     fontWeight: 'bold'
// // // // // //   }
// // // // // // };

// // // // // // const sections = [
// // // // // //   {
// // // // // //     id: 'unions',
// // // // // //     title: 'Unions',
// // // // // //     buttons: [
// // // // // //       { id: 'AuB', label: 'P(A ∪ B)' },
// // // // // //       { id: 'AuNotB', label: 'P(A ∪ B̄)' },
// // // // // //       { id: 'NotAuB', label: 'P(Ā ∪ B)' },
// // // // // //       { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'conditional',
// // // // // //     title: 'Conditional',
// // // // // //     buttons: [
// // // // // //       { id: 'AgivenB', label: 'P(A|B)' },
// // // // // //       { id: 'AgivenNotB', label: 'P(A|B̄)' },
// // // // // //       { id: 'BgivenA', label: 'P(B|A)' },
// // // // // //       { id: 'BgivenNotA', label: 'P(B|Ā)' }
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'independence',
// // // // // //     title: 'Independence',
// // // // // //     buttons: [
// // // // // //       { id: 'indepTest', label: 'Independence Test' },
// // // // // //       { id: 'correlation', label: 'Correlation Analysis' }
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'odds',
// // // // // //     title: 'Odds',
// // // // // //     buttons: [
// // // // // //       { id: 'oddsA', label: 'Odds of A' },
// // // // // //       { id: 'oddsB', label: 'Odds of B' },
// // // // // //       { id: 'oddsRatio', label: 'Odds Ratio' }
// // // // // //     ]
// // // // // //   }
// // // // // // ];

// // // // // // const ControlPanel2 = ({ width }) => {
// // // // // //   const [activeSection, setActiveSection] = useState(null);
// // // // // //   const [selectedButtons, setSelectedButtons] = useState([]);

// // // // // //   const toggleSection = (sectionId) => {
// // // // // //     if (activeSection !== sectionId) {
// // // // // //       setSelectedButtons([]); 
// // // // // //     }
// // // // // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // // // // //   };

// // // // // //   const toggleButton = (buttonId) => {
// // // // // //     setSelectedButtons(prev => 
// // // // // //       prev.includes(buttonId)
// // // // // //         ? prev.filter(id => id !== buttonId)
// // // // // //         : [...prev, buttonId]
// // // // // //     );
// // // // // //   };

// // // // // //   const resetSection = () => {
// // // // // //     setSelectedButtons([]);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ ...styles.panel, width: width || 'fit-content' }}>
// // // // // //       <div style={styles.header}>
// // // // // //         <h3 style={styles.headerTitle}>Probability Calculations</h3>
// // // // // //       </div>

// // // // // //       <div style={styles.mainButtons}>
// // // // // //         {sections.map(section => (
// // // // // //           <button
// // // // // //             key={section.id}
// // // // // //             style={{
// // // // // //               ...styles.mainButton,
// // // // // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // // // // //             }}
// // // // // //             onClick={() => toggleSection(section.id)}
// // // // // //           >
// // // // // //             <span>{section.title}</span>
// // // // // //             <span style={styles.toggleSign}>
// // // // // //               {activeSection === section.id ? '−' : '+'}
// // // // // //             </span>
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {activeSection && (
// // // // // //         <div style={styles.optionsWrapper}>
// // // // // //           <div style={styles.optionsPanel}>
// // // // // //             <div style={styles.optionsPanelHeader}>
// // // // // //               <button 
// // // // // //                 style={styles.resetButton}
// // // // // //                 onClick={resetSection}
// // // // // //               >
// // // // // //                 Reset
// // // // // //               </button>
// // // // // //             </div>
// // // // // //             {sections
// // // // // //               .find(section => section.id === activeSection)
// // // // // //               .buttons.map(button => (
// // // // // //                 <button
// // // // // //                   key={button.id}
// // // // // //                   style={{
// // // // // //                     ...styles.button,
// // // // // //                     ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // // // // //                   }}
// // // // // //                   onClick={() => toggleButton(button.id)}
// // // // // //                 >
// // // // // //                   <span>{button.label}</span>
// // // // // //                   {selectedButtons.includes(button.id) && (
// // // // // //                     <span style={styles.checkMark}>✓</span>
// // // // // //                   )}
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ControlPanel2;
// // // // // import React, { useState } from 'react';

// // // // // const styles = {
// // // // //   panel: {
// // // // //     backgroundColor: '#fff',
// // // // //     borderRadius: '6px',
// // // // //     border: '1px solid #ddd',
// // // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // // //     overflow: 'hidden'
// // // // //   },
// // // // //   header: {
// // // // //     padding: '12px 15px',
// // // // //     backgroundColor: '#f5f5f5',
// // // // //     borderBottom: '1px solid #ddd',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'space-between'
// // // // //   },
// // // // //   headerTitle: {
// // // // //     margin: 0,
// // // // //     fontSize: '16px',
// // // // //     fontWeight: 'bold',
// // // // //     color: '#333'
// // // // //   },
// // // // //   globalControls: {
// // // // //     display: 'flex',
// // // // //     gap: '8px'
// // // // //   },
// // // // //   infoText: {
// // // // //     padding: '8px 15px',
// // // // //     backgroundColor: '#e3f2fd',
// // // // //     color: '#1976d2',
// // // // //     fontSize: '12px',
// // // // //     borderBottom: '1px solid #ddd'
// // // // //   },
// // // // //   mainButtons: {
// // // // //     display: 'flex',
// // // // //     flexWrap: 'wrap',
// // // // //     gap: '8px',
// // // // //     padding: '10px 15px',
// // // // //     backgroundColor: '#fff',
// // // // //     borderBottom: '1px solid #ddd'
// // // // //   },
// // // // //   mainButton: {
// // // // //     padding: '8px 12px',
// // // // //     backgroundColor: '#fff',
// // // // //     border: '1px solid #ddd',
// // // // //     borderRadius: '4px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '14px',
// // // // //     color: '#333',
// // // // //     transition: 'all 0.2s ease',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'space-between',
// // // // //     flex: '1 1 0',
// // // // //     minWidth: '120px'
// // // // //   },
// // // // //   mainButtonActive: {
// // // // //     backgroundColor: '#e3f2fd',
// // // // //     borderColor: '#2196F3',
// // // // //     color: '#1976d2'
// // // // //   },
// // // // //   optionsWrapper: {
// // // // //     backgroundColor: '#f5f9ff',
// // // // //     overflow: 'hidden',
// // // // //     transition: 'height 0.3s ease'
// // // // //   },
// // // // //   optionsPanel: {
// // // // //     padding: '15px',
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     gap: '8px'
// // // // //   },
// // // // //   optionsPanelHeader: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'flex-end',
// // // // //     gap: '8px',
// // // // //     marginBottom: '10px'
// // // // //   },
// // // // //   resetButton: {
// // // // //     padding: '4px 12px',
// // // // //     fontSize: '12px',
// // // // //     color: '#fff',
// // // // //     border: '1px solid #2196F3',
// // // // //     borderRadius: '4px',
// // // // //     cursor: 'pointer',
// // // // //     backgroundColor: '#2196F3',
// // // // //     transition: 'all 0.2s ease'
// // // // //   },
// // // // //   button: {
// // // // //     padding: '8px 12px',
// // // // //     backgroundColor: '#fff',
// // // // //     border: '1px solid #ddd',
// // // // //     borderRadius: '4px',
// // // // //     cursor: 'pointer',
// // // // //     fontSize: '14px',
// // // // //     color: '#333',
// // // // //     transition: 'all 0.2s ease',
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     width: '100%'
// // // // //   },
// // // // //   buttonActive: {
// // // // //     backgroundColor: '#e3f2fd',
// // // // //     borderColor: '#2196F3',
// // // // //     color: '#1976d2'
// // // // //   },
// // // // //   toggleSign: {
// // // // //     marginLeft: '8px',
// // // // //     fontWeight: 'bold'
// // // // //   },
// // // // //   checkMark: {
// // // // //     marginLeft: '8px',
// // // // //     fontSize: '14px'
// // // // //   }
// // // // // };

// // // // // const sections = [
// // // // //   {
// // // // //     id: 'unions',
// // // // //     title: 'Unions',
// // // // //     buttons: [
// // // // //       { id: 'AuB', label: 'P(A ∪ B)' },
// // // // //       { id: 'AuNotB', label: 'P(A ∪ B̄)' },
// // // // //       { id: 'NotAuB', label: 'P(Ā ∪ B)' },
// // // // //       { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     id: 'conditional',
// // // // //     title: 'Conditional',
// // // // //     buttons: [
// // // // //       { id: 'AgivenB', label: 'P(A|B)' },
// // // // //       { id: 'AgivenNotB', label: 'P(A|B̄)' },
// // // // //       { id: 'BgivenA', label: 'P(B|A)' },
// // // // //       { id: 'BgivenNotA', label: 'P(B|Ā)' }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     id: 'independence',
// // // // //     title: 'Independence',
// // // // //     buttons: [
// // // // //       { id: 'indepTest', label: 'Independence Test' },
// // // // //       { id: 'correlation', label: 'Correlation Analysis' }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     id: 'odds',
// // // // //     title: 'Odds',
// // // // //     buttons: [
// // // // //       { id: 'oddsA', label: 'Odds of A' },
// // // // //       { id: 'oddsB', label: 'Odds of B' },
// // // // //       { id: 'oddsRatio', label: 'Odds Ratio' }
// // // // //     ]
// // // // //   }
// // // // // ];

// // // // // const ControlPanel2 = ({ width }) => {
// // // // //   const [activeSection, setActiveSection] = useState(null);
// // // // //   const [selectedButtons, setSelectedButtons] = useState([]);

// // // // //   const toggleSection = (sectionId) => {
// // // // //     if (activeSection !== sectionId) {
// // // // //       setSelectedButtons([]); 
// // // // //     }
// // // // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // // // //   };

// // // // //   const toggleButton = (buttonId) => {
// // // // //     setSelectedButtons(prev => 
// // // // //       prev.includes(buttonId)
// // // // //         ? prev.filter(id => id !== buttonId)
// // // // //         : [...prev, buttonId]
// // // // //     );
// // // // //   };

// // // // //   const resetSection = () => {
// // // // //     setSelectedButtons([]);
// // // // //   };

// // // // //   const selectAllInSection = () => {
// // // // //     const currentSection = sections.find(section => section.id === activeSection);
// // // // //     if (currentSection) {
// // // // //       const allSectionButtons = currentSection.buttons.map(button => button.id);
// // // // //       setSelectedButtons(allSectionButtons);
// // // // //     }
// // // // //   };

// // // // //   const selectAllGlobal = () => {
// // // // //     if (activeSection) {
// // // // //       selectAllInSection();
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ ...styles.panel, width: width || 'fit-content' }}>
// // // // //       <div style={styles.header}>
// // // // //         <h3 style={styles.headerTitle}>Probability Calculations</h3>
// // // // //         <div style={styles.globalControls}>
// // // // //           <button 
// // // // //             style={styles.resetButton}
// // // // //             onClick={selectAllGlobal}
// // // // //           >
// // // // //             Select All
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div style={styles.infoText}>
// // // // //         Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
// // // // //       </div>

// // // // //       <div style={styles.mainButtons}>
// // // // //         {sections.map(section => (
// // // // //           <button
// // // // //             key={section.id}
// // // // //             style={{
// // // // //               ...styles.mainButton,
// // // // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // // // //             }}
// // // // //             onClick={() => toggleSection(section.id)}
// // // // //           >
// // // // //             <span>{section.title}</span>
// // // // //             <span style={styles.toggleSign}>
// // // // //               {activeSection === section.id ? '−' : '+'}
// // // // //             </span>
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {activeSection && (
// // // // //         <div style={styles.optionsWrapper}>
// // // // //           <div style={styles.optionsPanel}>
// // // // //             <div style={styles.optionsPanelHeader}>
// // // // //               <button 
// // // // //                 style={styles.resetButton}
// // // // //                 onClick={selectAllInSection}
// // // // //               >
// // // // //                 Select All
// // // // //               </button>
// // // // //               <button 
// // // // //                 style={styles.resetButton}
// // // // //                 onClick={resetSection}
// // // // //               >
// // // // //                 Reset
// // // // //               </button>
// // // // //             </div>
// // // // //             {sections
// // // // //               .find(section => section.id === activeSection)
// // // // //               .buttons.map(button => (
// // // // //                 <button
// // // // //                   key={button.id}
// // // // //                   style={{
// // // // //                     ...styles.button,
// // // // //                     ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // // // //                   }}
// // // // //                   onClick={() => toggleButton(button.id)}
// // // // //                 >
// // // // //                   <span>{button.label}</span>
// // // // //                   {selectedButtons.includes(button.id) && (
// // // // //                     <span style={styles.checkMark}>✓</span>
// // // // //                   )}
// // // // //                 </button>
// // // // //               ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ControlPanel2;
// // // // import React, { useState, useEffect } from 'react';

// // // // const styles = {
// // // //   panel: {
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: '6px',
// // // //     border: '1px solid #ddd',
// // // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // // //     overflow: 'hidden'
// // // //   },
// // // //   header: {
// // // //     padding: '12px 15px',
// // // //     backgroundColor: '#f5f5f5',
// // // //     borderBottom: '1px solid #ddd',
// // // //     display: 'flex',
// // // //     alignItems: 'center'
// // // //   },
// // // //   headerTitle: {
// // // //     margin: 0,
// // // //     fontSize: '16px',
// // // //     fontWeight: 'bold',
// // // //     color: '#333'
// // // //   },
// // // //   mainButtons: {
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap',
// // // //     gap: '8px',
// // // //     padding: '10px 15px',
// // // //     backgroundColor: '#fff',
// // // //     borderBottom: '1px solid #ddd'
// // // //   },
// // // //   mainButton: {
// // // //     padding: '8px 12px',
// // // //     backgroundColor: '#fff',
// // // //     border: '1px solid #ddd',
// // // //     borderRadius: '4px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '14px',
// // // //     color: '#333',
// // // //     transition: 'all 0.2s ease',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'space-between',
// // // //     flex: '1 1 0',
// // // //     minWidth: '120px'
// // // //   },
// // // //   mainButtonActive: {
// // // //     backgroundColor: '#e3f2fd',
// // // //     borderColor: '#2196F3',
// // // //     color: '#1976d2'
// // // //   },
// // // //   optionsWrapper: {
// // // //     backgroundColor: '#f5f9ff',
// // // //     overflow: 'hidden',
// // // //     transition: 'height 0.3s ease'
// // // //   },
// // // //   optionsPanel: {
// // // //     padding: '15px',
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '8px'
// // // //   },
// // // //   explanation: {
// // // //     fontSize: '12px',
// // // //     color: '#666',
// // // //     marginBottom: '12px',
// // // //     padding: '8px',
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: '4px',
// // // //     border: '1px solid #e0e0e0'
// // // //   },
// // // //   optionsPanelHeader: {
// // // //     display: 'flex',
// // // //     justifyContent: 'flex-end',
// // // //     gap: '8px',
// // // //     marginBottom: '10px'
// // // //   },
// // // //   resetButton: {
// // // //     padding: '4px 12px',
// // // //     fontSize: '12px',
// // // //     color: '#fff',
// // // //     border: '1px solid #2196F3',
// // // //     borderRadius: '4px',
// // // //     cursor: 'pointer',
// // // //     backgroundColor: '#2196F3',
// // // //     transition: 'all 0.2s ease'
// // // //   },
// // // //   button: {
// // // //     padding: '8px 12px',
// // // //     backgroundColor: '#fff',
// // // //     border: '1px solid #ddd',
// // // //     borderRadius: '4px',
// // // //     cursor: 'pointer',
// // // //     fontSize: '14px',
// // // //     color: '#333',
// // // //     transition: 'all 0.2s ease',
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     width: '100%'
// // // //   },
// // // //   buttonActive: {
// // // //     backgroundColor: '#e3f2fd',
// // // //     borderColor: '#2196F3',
// // // //     color: '#1976d2'
// // // //   },
// // // //   toggleSign: {
// // // //     marginLeft: '8px',
// // // //     fontWeight: 'bold'
// // // //   },
// // // //   checkMark: {
// // // //     marginLeft: '8px',
// // // //     fontSize: '14px'
// // // //   }
// // // // };

// // // // const ControlPanel2 = ({ width, sections = [], title = 'Control Panel' }) => {
// // // //   if (!Array.isArray(sections) || sections.length === 0) return null;

// // // //   const [activeSection, setActiveSection] = useState(null);
// // // //   const [selectedButtons, setSelectedButtons] = useState([]);
// // // //   const [processedSections, setProcessedSections] = useState([]);

// // // //   useEffect(() => {
// // // //     if (sections[0]?.id === 'selectAll') {
// // // //       const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
// // // //       setProcessedSections([
// // // //         { ...sections[0], buttons: allButtons },
// // // //         ...sections.slice(1)
// // // //       ]);
// // // //     } else {
// // // //       setProcessedSections(sections);
// // // //     }
// // // //   }, [sections]);

// // // //   const toggleSection = (sectionId) => {
// // // //     if (activeSection !== sectionId) {
// // // //       setSelectedButtons([]);
// // // //     }
// // // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // // //   };

// // // //   const toggleButton = (buttonId) => {
// // // //     setSelectedButtons(prev => 
// // // //       prev.includes(buttonId)
// // // //         ? prev.filter(id => id !== buttonId)
// // // //         : [...prev, buttonId]
// // // //     );
// // // //   };

// // // //   const resetSection = () => {
// // // //     setSelectedButtons([]);
// // // //   };

// // // //   const selectAllInSection = () => {
// // // //     const currentSection = processedSections.find(section => section.id === activeSection);
// // // //     if (currentSection?.buttons) {
// // // //       setSelectedButtons(currentSection.buttons.map(button => button.id));
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ ...styles.panel, width: width || 'fit-content' }}>
// // // //       <div style={styles.header}>
// // // //         <h3 style={styles.headerTitle}>{title}</h3>
// // // //       </div>

// // // //       <div style={styles.mainButtons}>
// // // //         {processedSections.map(section => section && (
// // // //           <button
// // // //             key={section.id}
// // // //             style={{
// // // //               ...styles.mainButton,
// // // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // // //             }}
// // // //             onClick={() => toggleSection(section.id)}
// // // //           >
// // // //             <span>{section.title}</span>
// // // //             <span style={styles.toggleSign}>
// // // //               {activeSection === section.id ? '−' : '+'}
// // // //             </span>
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       {activeSection && (
// // // //         <div style={styles.optionsWrapper}>
// // // //           <div style={styles.optionsPanel}>
// // // //             {processedSections.find(section => section.id === activeSection)?.explanation && (
// // // //               <div style={styles.explanation}>
// // // //                 {processedSections.find(section => section.id === activeSection).explanation}
// // // //               </div>
// // // //             )}
// // // //             <div style={styles.optionsPanelHeader}>
// // // //               <button 
// // // //                 style={styles.resetButton}
// // // //                 onClick={selectAllInSection}
// // // //               >
// // // //                 Select All
// // // //               </button>
// // // //               <button 
// // // //                 style={styles.resetButton}
// // // //                 onClick={resetSection}
// // // //               >
// // // //                 Reset
// // // //               </button>
// // // //             </div>
// // // //             {processedSections
// // // //               .find(section => section.id === activeSection)
// // // //               ?.buttons?.map(button => button && (
// // // //                 <button
// // // //                   key={button.id}
// // // //                   style={{
// // // //                     ...styles.button,
// // // //                     ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // // //                   }}
// // // //                   onClick={() => toggleButton(button.id)}
// // // //                 >
// // // //                   <span>{button.label}</span>
// // // //                   {selectedButtons.includes(button.id) && (
// // // //                     <span style={styles.checkMark}>✓</span>
// // // //                   )}
// // // //                 </button>
// // // //               ))}
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ControlPanel2;

// // // import React, { useState, useEffect } from 'react';

// // // const styles = {
// // //   panel: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: '6px',
// // //     border: '1px solid #ddd',
// // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // //     overflow: 'hidden'
// // //   },
// // //   header: {
// // //     padding: '12px 15px',
// // //     backgroundColor: '#f5f5f5',
// // //     borderBottom: '1px solid #ddd',
// // //     display: 'flex',
// // //     alignItems: 'center'
// // //   },
// // //   headerTitle: {
// // //     margin: 0,
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //     color: '#333'
// // //   },
// // //   globalExplanation: {
// // //     padding: '8px 15px',
// // //     backgroundColor: '#e3f2fd',
// // //     color: '#1976d2',
// // //     fontSize: '12px',
// // //     borderBottom: '1px solid #ddd'
// // //   },
// // //   mainButtons: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     padding: '10px 15px',
// // //     backgroundColor: '#fff',
// // //     borderBottom: '1px solid #ddd',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   mainButton: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(25% - 6px)'
// // //   },
// // //   mainButtonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   optionsWrapper: {
// // //     backgroundColor: '#f5f9ff',
// // //     overflow: 'hidden',
// // //     transition: 'height 0.3s ease'
// // //   },
// // //   optionsPanel: {
// // //     padding: '15px',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '8px'
// // //   },
// // //   explanation: {
// // //     fontSize: '12px',
// // //     color: '#666',
// // //     marginBottom: '12px',
// // //     padding: '8px',
// // //     backgroundColor: '#fff',
// // //     borderRadius: '4px',
// // //     border: '1px solid #e0e0e0'
// // //   },
// // //   optionsPanelHeader: {
// // //     display: 'flex',
// // //     justifyContent: 'flex-end',
// // //     gap: '8px',
// // //     marginBottom: '10px'
// // //   },
// // //   resetButton: {
// // //     padding: '4px 12px',
// // //     fontSize: '12px',
// // //     color: '#fff',
// // //     border: '1px solid #2196F3',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     backgroundColor: '#2196F3',
// // //     transition: 'all 0.2s ease'
// // //   },
// // //   optionsContainer: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   button: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(33.333% - 6px)'
// // //   },
// // //   buttonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   toggleSign: {
// // //     marginLeft: '8px',
// // //     fontWeight: 'bold'
// // //   },
// // //   checkMark: {
// // //     marginLeft: '8px',
// // //     fontSize: '14px'
// // //   }
// // // };

// // // const ControlPanel2 = ({ width, sections = [], title = 'Control Panel' }) => {
// // //   if (!Array.isArray(sections) || sections.length === 0) return null;

// // //   const [activeSection, setActiveSection] = useState(null);
// // //   const [selectedButtons, setSelectedButtons] = useState([]);
// // //   const [processedSections, setProcessedSections] = useState([]);

// // //   useEffect(() => {
// // //     if (sections[0]?.id === 'selectAll') {
// // //       const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
// // //       setProcessedSections([
// // //         { ...sections[0], buttons: allButtons },
// // //         ...sections.slice(1)
// // //       ]);
// // //     } else {
// // //       setProcessedSections(sections);
// // //     }
// // //   }, [sections]);

// // //   const toggleSection = (sectionId) => {
// // //     if (activeSection !== sectionId) {
// // //       setSelectedButtons([]);
// // //     }
// // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // //   };

// // //   const toggleButton = (buttonId) => {
// // //     setSelectedButtons(prev => 
// // //       prev.includes(buttonId)
// // //         ? prev.filter(id => id !== buttonId)
// // //         : [...prev, buttonId]
// // //     );
// // //   };

// // //   const resetSection = () => {
// // //     setSelectedButtons([]);
// // //   };

// // //   const selectAllInSection = () => {
// // //     const currentSection = processedSections.find(section => section.id === activeSection);
// // //     if (currentSection?.buttons) {
// // //       setSelectedButtons(currentSection.buttons.map(button => button.id));
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ ...styles.panel, width: width || 'fit-content' }}>
// // //       <div style={styles.header}>
// // //         <h3 style={styles.headerTitle}>{title}</h3>
// // //       </div>

// // //       <div style={styles.globalExplanation}>
// // //         Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
// // //       </div>

// // //       <div style={styles.mainButtons}>
// // //         {processedSections.map(section => section && (
// // //           <button
// // //             key={section.id}
// // //             style={{
// // //               ...styles.mainButton,
// // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // //             }}
// // //             onClick={() => toggleSection(section.id)}
// // //           >
// // //             <span>{section.title}</span>
// // //             <span style={styles.toggleSign}>
// // //               {activeSection === section.id ? '−' : '+'}
// // //             </span>
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {activeSection && (
// // //         <div style={styles.optionsWrapper}>
// // //           <div style={styles.optionsPanel}>
// // //             {processedSections.find(section => section.id === activeSection)?.explanation && (
// // //               <div style={styles.explanation}>
// // //                 {processedSections.find(section => section.id === activeSection).explanation}
// // //               </div>
// // //             )}
// // //             <div style={styles.optionsPanelHeader}>
// // //               <button 
// // //                 style={styles.resetButton}
// // //                 onClick={selectAllInSection}
// // //               >
// // //                 Select All
// // //               </button>
// // //               <button 
// // //                 style={styles.resetButton}
// // //                 onClick={resetSection}
// // //               >
// // //                 Reset
// // //               </button>
// // //             </div>
// // //             <div style={styles.optionsContainer}>
// // //               {processedSections
// // //                 .find(section => section.id === activeSection)
// // //                 ?.buttons?.map(button => button && (
// // //                   <button
// // //                     key={button.id}
// // //                     style={{
// // //                       ...styles.button,
// // //                       ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // //                     }}
// // //                     onClick={() => toggleButton(button.id)}
// // //                   >
// // //                     <span>{button.label}</span>
// // //                     {selectedButtons.includes(button.id) && (
// // //                       <span style={styles.checkMark}>✓</span>
// // //                     )}
// // //                   </button>
// // //                 ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ControlPanel2;

// // // import React, { useState, useEffect } from 'react';

// // // const styles = {
// // //   panel: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: '6px',
// // //     border: '1px solid #ddd',
// // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // //     overflow: 'hidden'
// // //   },
// // //   header: {
// // //     padding: '12px 15px',
// // //     backgroundColor: '#f5f5f5',
// // //     borderBottom: '1px solid #ddd',
// // //     display: 'flex',
// // //     alignItems: 'center'
// // //   },
// // //   headerTitle: {
// // //     margin: 0,
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //     color: '#333'
// // //   },
// // //   globalExplanation: {
// // //     padding: '8px 15px',
// // //     backgroundColor: '#e3f2fd',
// // //     color: '#1976d2',
// // //     fontSize: '12px',
// // //     borderBottom: '1px solid #ddd'
// // //   },
// // //   mainButtons: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     padding: '10px 15px',
// // //     backgroundColor: '#fff',
// // //     borderBottom: '1px solid #ddd',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   mainButton: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(25% - 6px)',
// // //     position: 'relative'  // For tooltip positioning
// // //   },
// // //   mainButtonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   optionsWrapper: {
// // //     backgroundColor: '#f5f9ff',
// // //     overflow: 'hidden',
// // //     transition: 'height 0.3s ease',
// // //     position: 'relative'  // For close button
// // //   },
// // //   closeButton: {
// // //     position: 'absolute',
// // //     top: '15px',
// // //     left: '15px',
// // //     padding: '4px 8px',
// // //     fontSize: '14px',
// // //     backgroundColor: 'transparent',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     color: '#666',
// // //     zIndex: 2
// // //   },
// // //   optionsPanel: {
// // //     padding: '15px',
// // //     paddingTop: '45px',  // Space for close button
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '8px'
// // //   },
// // //   explanation: {
// // //     padding: '8px 15px',
// // //     backgroundColor: '#e3f2fd',
// // //     color: '#1976d2',
// // //     fontSize: '12px',
// // //     borderRadius: '4px',
// // //     marginBottom: '12px'
// // //   },
// // //   optionsPanelHeader: {
// // //     display: 'flex',
// // //     justifyContent: 'flex-end',
// // //     gap: '8px',
// // //     marginBottom: '10px'
// // //   },
// // //   resetButton: {
// // //     padding: '4px 12px',
// // //     fontSize: '12px',
// // //     color: '#fff',
// // //     border: '1px solid #2196F3',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     backgroundColor: '#2196F3',
// // //     transition: 'all 0.2s ease',
// // //     position: 'relative'  // For tooltip
// // //   },
// // //   optionsContainer: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   button: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(33.333% - 6px)',
// // //     position: 'relative'  // For tooltip
// // //   },
// // //   buttonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   toggleSign: {
// // //     marginLeft: '8px',
// // //     fontWeight: 'bold'
// // //   },
// // //   checkMark: {
// // //     marginLeft: '8px',
// // //     fontSize: '14px'
// // //   },
// // //   tooltip: {
// // //     position: 'absolute',
// // //     top: '-30px',
// // //     left: '50%',
// // //     transform: 'translateX(-50%)',
// // //     padding: '4px 8px',
// // //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // //     color: '#fff',
// // //     fontSize: '12px',
// // //     borderRadius: '4px',
// // //     whiteSpace: 'nowrap',
// // //     visibility: 'hidden',
// // //     opacity: 0,
// // //     transition: 'opacity 0.2s ease, visibility 0.2s ease',
// // //     zIndex: 1000
// // //   },
// // //   buttonWrapper: {
// // //     position: 'relative',
// // //     display: 'inline-block'
// // //   }
// // // };

// // // const TooltipButton = ({ children, tooltip, style, ...props }) => {
// // //   const [showTooltip, setShowTooltip] = useState(false);

// // //   return (
// // //     <div style={styles.buttonWrapper}>
// // //       <button
// // //         {...props}
// // //         style={style}
// // //         onMouseEnter={() => setShowTooltip(true)}
// // //         onMouseLeave={() => setShowTooltip(false)}
// // //       >
// // //         {children}
// // //       </button>
// // //       <div style={{
// // //         ...styles.tooltip,
// // //         visibility: showTooltip ? 'visible' : 'hidden',
// // //         opacity: showTooltip ? 1 : 0
// // //       }}>
// // //         {tooltip}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const ControlPanel2 = ({ width, sections = [], title = 'Control Panel' }) => {
// // //   if (!Array.isArray(sections) || sections.length === 0) return null;

// // //   const [activeSection, setActiveSection] = useState(null);
// // //   const [selectedButtons, setSelectedButtons] = useState([]);
// // //   const [processedSections, setProcessedSections] = useState([]);

// // //   useEffect(() => {
// // //     if (sections[0]?.id === 'selectAll') {
// // //       const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
// // //       setProcessedSections([
// // //         { ...sections[0], buttons: allButtons },
// // //         ...sections.slice(1)
// // //       ]);
// // //     } else {
// // //       setProcessedSections(sections);
// // //     }
// // //   }, [sections]);

// // //   const toggleSection = (sectionId) => {
// // //     if (activeSection !== sectionId) {
// // //       setSelectedButtons([]);
// // //     }
// // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // //   };

// // //   const closeSection = () => {
// // //     setActiveSection(null);
// // //     setSelectedButtons([]);
// // //   };

// // //   const toggleButton = (buttonId) => {
// // //     setSelectedButtons(prev => 
// // //       prev.includes(buttonId)
// // //         ? prev.filter(id => id !== buttonId)
// // //         : [...prev, buttonId]
// // //     );
// // //   };

// // //   const resetSection = () => {
// // //     setSelectedButtons([]);
// // //   };

// // //   const selectAllInSection = () => {
// // //     const currentSection = processedSections.find(section => section.id === activeSection);
// // //     if (currentSection?.buttons) {
// // //       setSelectedButtons(currentSection.buttons.map(button => button.id));
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ ...styles.panel, width: width || 'fit-content' }}>
// // //       <div style={styles.header}>
// // //         <h3 style={styles.headerTitle}>{title}</h3>
// // //       </div>

// // //       <div style={styles.globalExplanation}>
// // //         Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
// // //       </div>

// // //       <div style={styles.mainButtons}>
// // //         {processedSections.map(section => section && (
// // //           <TooltipButton
// // //             key={section.id}
// // //             tooltip={`Show ${section.title.toLowerCase()} operations`}
// // //             style={{
// // //               ...styles.mainButton,
// // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // //             }}
// // //             onClick={() => toggleSection(section.id)}
// // //           >
// // //             <span>{section.title}</span>
// // //             <span style={styles.toggleSign}>
// // //               {activeSection === section.id ? '−' : '+'}
// // //             </span>
// // //           </TooltipButton>
// // //         ))}
// // //       </div>

// // //       {activeSection && (
// // //         <div style={styles.optionsWrapper}>
// // //           <button 
// // //             style={styles.closeButton}
// // //             onClick={closeSection}
// // //           >
// // //             ×
// // //           </button>
// // //           <div style={styles.optionsPanel}>
// // //             <div style={styles.explanation}>
// // //               {processedSections.find(section => section.id === activeSection).explanation}
// // //             </div>
// // //             <div style={styles.optionsPanelHeader}>
// // //               <TooltipButton 
// // //                 style={styles.resetButton}
// // //                 onClick={selectAllInSection}
// // //                 tooltip="Select all operations in this category"
// // //               >
// // //                 Select All
// // //               </TooltipButton>
// // //               <TooltipButton 
// // //                 style={styles.resetButton}
// // //                 onClick={resetSection}
// // //                 tooltip="Clear all selections"
// // //               >
// // //                 Reset
// // //               </TooltipButton>
// // //             </div>
// // //             <div style={styles.optionsContainer}>
// // //               {processedSections
// // //                 .find(section => section.id === activeSection)
// // //                 ?.buttons?.map(button => button && (
// // //                   <TooltipButton
// // //                     key={button.id}
// // //                     tooltip={button.label}
// // //                     style={{
// // //                       ...styles.button,
// // //                       ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // //                     }}
// // //                     onClick={() => toggleButton(button.id)}
// // //                   >
// // //                     <span>{button.label}</span>
// // //                     {selectedButtons.includes(button.id) && (
// // //                       <span style={styles.checkMark}>✓</span>
// // //                     )}
// // //                   </TooltipButton>
// // //                 ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ControlPanel2;
// // // import React, { useState, useEffect } from 'react';

// // // const styles = {
// // //   panel: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: '6px',
// // //     border: '1px solid #ddd',
// // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // //     overflow: 'hidden'
// // //   },
// // //   header: {
// // //     padding: '12px 15px',
// // //     backgroundColor: '#f5f5f5',
// // //     borderBottom: '1px solid #ddd',
// // //     display: 'flex',
// // //     alignItems: 'center'
// // //   },
// // //   headerTitle: {
// // //     margin: 0,
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //     color: '#333'
// // //   },
// // //   globalExplanation: {
// // //     padding: '8px 15px',
// // //     backgroundColor: '#e3f2fd',
// // //     color: '#1976d2',
// // //     fontSize: '14px',
// // //     borderBottom: '1px solid #ddd'
// // //   },
// // //   mainButtons: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     padding: '10px 15px',
// // //     backgroundColor: '#fff',
// // //     borderBottom: '1px solid #ddd',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   mainButton: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(25% - 6px)',
// // //     position: 'relative'
// // //   },
// // //   mainButtonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   optionsWrapper: {
// // //     backgroundColor: '#f5f9ff',
// // //     overflow: 'hidden',
// // //     transition: 'height 0.3s ease',
// // //     position: 'relative'
// // //   },
// // //   closeButton: {
// // //     position: 'absolute',
// // //     top: '15px',
// // //     left: '15px',
// // //     padding: '4px 8px',
// // //     fontSize: '14px',
// // //     backgroundColor: 'transparent',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     color: '#666',
// // //     zIndex: 2
// // //   },
// // //   optionsPanel: {
// // //     padding: '15px',
// // //     paddingTop: '45px',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '8px'
// // //   },
// // //   explanation: {
// // //     padding: '8px 15px',
// // //     backgroundColor: '#e3f2fd',
// // //     color: '#1976d2',
// // //     fontSize: '14px',
// // //     borderRadius: '4px',
// // //     marginBottom: '12px'
// // //   },
// // //   optionsPanelHeader: {
// // //     display: 'flex',
// // //     justifyContent: 'flex-end',
// // //     gap: '8px',
// // //     marginBottom: '10px'
// // //   },
// // //   resetButton: {
// // //     padding: '4px 12px',
// // //     fontSize: '12px',
// // //     color: '#fff',
// // //     border: '1px solid #2196F3',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     backgroundColor: '#2196F3',
// // //     transition: 'all 0.2s ease',
// // //     position: 'relative'
// // //   },
// // //   optionsContainer: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   button: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(33.333% - 6px)',
// // //     position: 'relative'
// // //   },
// // //   buttonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   toggleSign: {
// // //     marginLeft: '8px',
// // //     fontWeight: 'bold'
// // //   },
// // //   checkMark: {
// // //     marginLeft: '8px',
// // //     fontSize: '14px'
// // //   },
// // //   tooltip: {
// // //     position: 'absolute',
// // //     top: '-30px',
// // //     left: '50%',
// // //     transform: 'translateX(-50%)',
// // //     padding: '4px 8px',
// // //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // //     color: '#fff',
// // //     fontSize: '12px',
// // //     borderRadius: '4px',
// // //     whiteSpace: 'nowrap',
// // //     visibility: 'hidden',
// // //     opacity: 0,
// // //     transition: 'opacity 0.2s ease, visibility 0.2s ease',
// // //     zIndex: 1000
// // //   },
// // //   buttonWrapper: {
// // //     position: 'relative',
// // //     display: 'inline-block'
// // //   }
// // // };

// // // const TooltipButton = ({ children, tooltip, style, ...props }) => {
// // //   const [showTooltip, setShowTooltip] = useState(false);
// // //   return (
// // //     <div style={styles.buttonWrapper}>
// // //       <button
// // //         {...props}
// // //         style={style}
// // //         onMouseEnter={() => setShowTooltip(true)}
// // //         onMouseLeave={() => setShowTooltip(false)}
// // //       >
// // //         {children}
// // //       </button>
// // //       <div style={{
// // //         ...styles.tooltip,
// // //         visibility: showTooltip ? 'visible' : 'hidden',
// // //         opacity: showTooltip ? 1 : 0
// // //       }}>
// // //         {tooltip}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const ControlPanel2 = ({ width, sections = [], title = 'Control Panel', onChange }) => {
// // //   if (!Array.isArray(sections) || sections.length === 0) return null;

// // //   const [activeSection, setActiveSection] = useState(null);
// // //   const [selectedButtons, setSelectedButtons] = useState([]);
// // //   const [processedSections, setProcessedSections] = useState([]);

// // //   useEffect(() => {
// // //     if (sections[0]?.id === 'selectAll') {
// // //       const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
// // //       setProcessedSections([
// // //         { ...sections[0], buttons: allButtons },
// // //         ...sections.slice(1)
// // //       ]);
// // //     } else {
// // //       setProcessedSections(sections);
// // //     }
// // //   }, [sections]);

// // //   const toggleSection = (sectionId) => {
// // //     if (activeSection !== sectionId) {
// // //       setSelectedButtons([]);
// // //       onChange?.([]);
// // //     }
// // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // //   };

// // //   const closeSection = () => {
// // //     setActiveSection(null);
// // //     setSelectedButtons([]);
// // //     onChange?.([]);
// // //   };

// // //   const toggleButton = (buttonId) => {
// // //     const newSelected = selectedButtons.includes(buttonId)
// // //       ? selectedButtons.filter(id => id !== buttonId)
// // //       : [...selectedButtons, buttonId];
    
// // //     setSelectedButtons(newSelected);
// // //     onChange?.(newSelected);
// // //   };

// // //   const resetSection = () => {
// // //     setSelectedButtons([]);
// // //     onChange?.([]);
// // //   };

// // //   const selectAllInSection = () => {
// // //     const currentSection = processedSections.find(section => section.id === activeSection);
// // //     if (currentSection?.buttons) {
// // //       const allButtons = currentSection.buttons.map(button => button.id);
// // //       setSelectedButtons(allButtons);
// // //       onChange?.(allButtons);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ ...styles.panel, width: width || 'fit-content' }}>
// // //       <div style={styles.header}>
// // //         <h3 style={styles.headerTitle}>{title}</h3>
// // //       </div>

// // //       <div style={styles.globalExplanation}>
// // //         Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
// // //       </div>

// // //       <div style={styles.mainButtons}>
// // //         {processedSections.map(section => section && (
// // //           <TooltipButton
// // //             key={section.id}
// // //             tooltip={`Show ${section.title.toLowerCase()} operations`}
// // //             style={{
// // //               ...styles.mainButton,
// // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // //             }}
// // //             onClick={() => toggleSection(section.id)}
// // //           >
// // //             <span>{section.title}</span>
// // //             <span style={styles.toggleSign}>
// // //               {activeSection === section.id ? '−' : '+'}
// // //             </span>
// // //           </TooltipButton>
// // //         ))}
// // //       </div>

// // //       {activeSection && (
// // //         <div style={styles.optionsWrapper}>
// // //           <button 
// // //             style={styles.closeButton}
// // //             onClick={closeSection}
// // //           >
// // //             ×
// // //           </button>
// // //           <div style={styles.optionsPanel}>
// // //             <div style={styles.explanation}>
// // //               {processedSections.find(section => section.id === activeSection).explanation}
// // //             </div>
// // //             <div style={styles.optionsPanelHeader}>
// // //               <TooltipButton 
// // //                 style={styles.resetButton}
// // //                 onClick={selectAllInSection}
// // //                 tooltip="Select all operations in this category"
// // //               >
// // //                 Select All
// // //               </TooltipButton>
// // //               <TooltipButton 
// // //                 style={styles.resetButton}
// // //                 onClick={resetSection}
// // //                 tooltip="Clear all selections"
// // //               >
// // //                 Reset
// // //               </TooltipButton>
// // //             </div>
// // //             <div style={styles.optionsContainer}>
// // //               {processedSections
// // //                 .find(section => section.id === activeSection)
// // //                 ?.buttons?.map(button => button && (
// // //                   <TooltipButton
// // //                     key={button.id}
// // //                     tooltip={button.label}
// // //                     style={{
// // //                       ...styles.button,
// // //                       ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // //                     }}
// // //                     onClick={() => toggleButton(button.id)}
// // //                   >
// // //                     <span>{button.label}</span>
// // //                     {selectedButtons.includes(button.id) && (
// // //                       <span style={styles.checkMark}>✓</span>
// // //                     )}
// // //                   </TooltipButton>
// // //                 ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ControlPanel2;

// // // import React, { useState, useEffect } from 'react';

// // // const styles = {
// // //   panel: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: '6px',
// // //     border: '1px solid #ddd',
// // //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// // //     overflow: 'hidden'
// // //   },
// // //   header: {
// // //     padding: '12px 15px',
// // //     backgroundColor: '#f5f5f5',
// // //     borderBottom: '1px solid #ddd',
// // //     display: 'flex',
// // //     alignItems: 'center'
// // //   },
// // //   headerTitle: {
// // //     margin: 0,
// // //     fontSize: '16px',
// // //     fontWeight: 'bold',
// // //     color: '#333'
// // //   },
// // //   globalExplanation: {
// // //     padding: '8px 15px',
// // //     backgroundColor: '#fff3cd',
// // //     color: '#856404',
// // //     fontSize: '14px',
// // //     borderBottom: '1px solid #ddd'
// // //   },
// // //   mainButtons: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     padding: '10px 15px',
// // //     backgroundColor: '#fff',
// // //     borderBottom: '1px solid #ddd',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   mainButton: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(25% - 6px)',
// // //     position: 'relative'
// // //   },
// // //   mainButtonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   optionsWrapper: {
// // //     backgroundColor: '#f5f9ff',
// // //     overflow: 'hidden',
// // //     transition: 'height 0.3s ease',
// // //     position: 'relative'
// // //   },
// // //   closeButton: {
// // //     position: 'absolute',
// // //     top: '-5px',
// // //     left: '-5px',
// // //     padding: '4px 8px',
// // //     fontSize: '22px',
// // //     backgroundColor: 'transparent',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     color: '#666',
// // //     zIndex: 2
// // //   },
// // //   optionsPanel: {
// // //     padding: '15px',
// // //     paddingTop: '15px', // Reduced from 45px
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '8px'
// // //   },
// // //   explanationContainer: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'space-between',
// // //     backgroundColor: '#fff3cd',
// // //     padding: '8px 15px',
// // //     borderRadius: '4px',
// // //     marginBottom: '12px'
// // //   },
// // //   explanation: {
// // //     color: '#856404',
// // //     fontSize: '14px',
// // //     flex: '1 1 auto',
// // //     marginRight: '16px'
// // //   },
// // //   buttonsGroup: {
// // //     display: 'flex',
// // //     gap: '8px',
// // //     flexShrink: 0
// // //   },
// // //   optionsContainer: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '8px',
// // //     justifyContent: 'flex-start'
// // //   },
// // //   button: {
// // //     padding: '8px 12px',
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //     color: '#333',
// // //     transition: 'all 0.2s ease',
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     flex: '0 1 auto',
// // //     minWidth: '120px',
// // //     maxWidth: 'calc(33.333% - 6px)',
// // //     position: 'relative'
// // //   },
// // //   buttonActive: {
// // //     backgroundColor: '#e3f2fd',
// // //     borderColor: '#2196F3',
// // //     color: '#1976d2'
// // //   },
// // //   resetButton: {
// // //     padding: '4px 12px',
// // //     fontSize: '12px',
// // //     color: '#fff',
// // //     border: '1px solid #2196F3',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //     backgroundColor: '#2196F3',
// // //     transition: 'all 0.2s ease',
// // //     position: 'relative'
// // //   },
// // //   toggleSign: {
// // //     marginLeft: '8px',
// // //     fontWeight: 'bold'
// // //   },
// // //   checkMark: {
// // //     marginLeft: '8px',
// // //     fontSize: '14px'
// // //   },
// // //   tooltip: {
// // //     position: 'absolute',
// // //     top: '-30px',
// // //     left: '50%',
// // //     transform: 'translateX(-50%)',
// // //     padding: '4px 8px',
// // //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // //     color: '#fff',
// // //     fontSize: '12px',
// // //     borderRadius: '4px',
// // //     whiteSpace: 'nowrap',
// // //     visibility: 'hidden',
// // //     opacity: 0,
// // //     transition: 'opacity 0.2s ease, visibility 0.2s ease',
// // //     zIndex: 1000
// // //   },
// // //   buttonWrapper: {
// // //     position: 'relative',
// // //     display: 'inline-block'
// // //   }
// // // };

// // // const TooltipButton = ({ children, tooltip, style, ...props }) => {
// // //   const [showTooltip, setShowTooltip] = useState(false);
// // //   return (
// // //     <div style={styles.buttonWrapper}>
// // //       <button
// // //         {...props}
// // //         style={style}
// // //         onMouseEnter={() => setShowTooltip(true)}
// // //         onMouseLeave={() => setShowTooltip(false)}
// // //       >
// // //         {children}
// // //       </button>
// // //       <div style={{
// // //         ...styles.tooltip,
// // //         visibility: showTooltip ? 'visible' : 'hidden',
// // //         opacity: showTooltip ? 1 : 0
// // //       }}>
// // //         {tooltip}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const ControlPanel2 = ({ width, sections = [], title = 'Control Panel', onChange }) => {
// // //   if (!Array.isArray(sections) || sections.length === 0) return null;

// // //   const [activeSection, setActiveSection] = useState(null);
// // //   const [selectedButtons, setSelectedButtons] = useState([]);
// // //   const [processedSections, setProcessedSections] = useState([]);

// // //   useEffect(() => {
// // //     if (sections[0]?.id === 'selectAll') {
// // //       const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
// // //       setProcessedSections([
// // //         { ...sections[0], buttons: allButtons },
// // //         ...sections.slice(1)
// // //       ]);
// // //     } else {
// // //       setProcessedSections(sections);
// // //     }
// // //   }, [sections]);

// // //   const toggleSection = (sectionId) => {
// // //     if (activeSection !== sectionId) {
// // //       setSelectedButtons([]);
// // //       onChange?.([]);
// // //     }
// // //     setActiveSection(activeSection === sectionId ? null : sectionId);
// // //   };

// // //   const closeSection = () => {
// // //     setActiveSection(null);
// // //     setSelectedButtons([]);
// // //     onChange?.([]);
// // //   };

// // //   const toggleButton = (buttonId) => {
// // //     const newSelected = selectedButtons.includes(buttonId)
// // //       ? selectedButtons.filter(id => id !== buttonId)
// // //       : [...selectedButtons, buttonId];
    
// // //     setSelectedButtons(newSelected);
// // //     onChange?.(newSelected);
// // //   };

// // //   const resetSection = () => {
// // //     setSelectedButtons([]);
// // //     onChange?.([]);
// // //   };

// // //   const selectAllInSection = () => {
// // //     const currentSection = processedSections.find(section => section.id === activeSection);
// // //     if (currentSection?.buttons) {
// // //       const allButtons = currentSection.buttons.map(button => button.id);
// // //       setSelectedButtons(allButtons);
// // //       onChange?.(allButtons);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{ ...styles.panel, width: width || 'fit-content' }}>
// // //       <div style={styles.header}>
// // //         <h3 style={styles.headerTitle}>{title}</h3>
// // //       </div>

// // //       <div style={styles.globalExplanation}>
// // //         Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
// // //       </div>

// // //       <div style={styles.mainButtons}>
// // //         {processedSections.map(section => section && (
// // //           <TooltipButton
// // //             key={section.id}
// // //             tooltip={`Show ${section.title.toLowerCase()} operations`}
// // //             style={{
// // //               ...styles.mainButton,
// // //               ...(activeSection === section.id ? styles.mainButtonActive : {})
// // //             }}
// // //             onClick={() => toggleSection(section.id)}
// // //           >
// // //             <span>{section.title}</span>
// // //             <span style={styles.toggleSign}>
// // //               {activeSection === section.id ? '−' : '+'}
// // //             </span>
// // //           </TooltipButton>
// // //         ))}
// // //       </div>

// // //       {activeSection && (
// // //         <div style={styles.optionsWrapper}>
// // //           <button 
// // //             style={styles.closeButton}
// // //             onClick={closeSection}
// // //           >
// // //             ×
// // //           </button>
// // //           <div style={styles.optionsPanel}>
// // //             <div style={styles.explanationContainer}>
// // //               <div style={styles.explanation}>
// // //                 {processedSections.find(section => section.id === activeSection).explanation}
// // //               </div>
// // //               <div style={styles.buttonsGroup}>
// // //                 <TooltipButton 
// // //                   style={styles.resetButton}
// // //                   onClick={selectAllInSection}
// // //                   tooltip="Select all operations in this category"
// // //                 >
// // //                   Select All
// // //                 </TooltipButton>
// // //                 <TooltipButton 
// // //                   style={styles.resetButton}
// // //                   onClick={resetSection}
// // //                   tooltip="Clear all selections"
// // //                 >
// // //                   Reset
// // //                 </TooltipButton>
// // //               </div>
// // //             </div>
// // //             <div style={styles.optionsContainer}>
// // //               {processedSections
// // //                 .find(section => section.id === activeSection)
// // //                 ?.buttons?.map(button => button && (
// // //                   <TooltipButton
// // //                     key={button.id}
// // //                     tooltip={button.label}
// // //                     style={{
// // //                       ...styles.button,
// // //                       ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// // //                     }}
// // //                     onClick={() => toggleButton(button.id)}
// // //                   >
// // //                     <span>{button.label}</span>
// // //                     {selectedButtons.includes(button.id) && (
// // //                       <span style={styles.checkMark}>✓</span>
// // //                     )}
// // //                   </TooltipButton>
// // //                 ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ControlPanel2;
// // import React, { useState, useEffect } from 'react';

// // const styles = {
// //   panel: {
// //     backgroundColor: '#fff',
// //     borderRadius: '6px',
// //     border: '1px solid #ddd',
// //     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
// //     overflow: 'hidden'
// //   },
// //   accordionHeader: {
// //     width: '100%',
// //     padding: '12px 15px',
// //     backgroundColor: '#f5f5f5',
// //     border: '1px solid #ddd',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center'
// //   },
// //   headerTitle: {
// //     margin: 0,
// //     fontSize: '16px',
// //     fontWeight: 'bold',
// //     color: '#333'
// //   },
// //   accordionContent: {
// //     backgroundColor: '#fff',
// //     borderRadius: '0 0 6px 6px',
// //     border: '1px solid #ddd',
// //     borderTop: 'none',
// //     overflow: 'hidden',
// //     transition: 'all 0.3s ease',
// //     maxHeight: '0',
// //     opacity: 0
// //   },
// //   accordionContentOpen: {
// //     maxHeight: '2000px',
// //     opacity: 1,
// //     borderTop: '1px solid #ddd'
// //   },
// //   globalExplanation: {
// //     padding: '8px 15px',
// //     backgroundColor: '#fff3cd',
// //     color: '#856404',
// //     fontSize: '14px',
// //     borderBottom: '1px solid #ddd'
// //   },
// //   mainButtons: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '8px',
// //     padding: '10px 15px',
// //     backgroundColor: '#fff',
// //     borderBottom: '1px solid #ddd',
// //     justifyContent: 'flex-start'
// //   },
// //   mainButton: {
// //     padding: '8px 12px',
// //     backgroundColor: '#fff',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     color: '#333',
// //     transition: 'all 0.2s ease',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     flex: '0 1 auto',
// //     minWidth: '120px',
// //     maxWidth: 'calc(25% - 6px)',
// //     position: 'relative'
// //   },
// //   mainButtonActive: {
// //     backgroundColor: '#e3f2fd',
// //     borderColor: '#2196F3',
// //     color: '#1976d2'
// //   },
// //   optionsWrapper: {
// //     backgroundColor: '#f5f9ff',
// //     overflow: 'hidden',
// //     transition: 'height 0.3s ease',
// //     position: 'relative'
// //   },
// //   closeButton: {
// //     position: 'absolute',
// //     top: '-5px',
// //     left: '-5px',
// //     padding: '4px 8px',
// //     fontSize: '22px',
// //     backgroundColor: 'transparent',
// //     border: 'none',
// //     cursor: 'pointer',
// //     color: '#666',
// //     zIndex: 2
// //   },
// //   optionsPanel: {
// //     padding: '15px',
// //     paddingTop: '15px',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px'
// //   },
// //   explanationContainer: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     backgroundColor: '#fff3cd',
// //     padding: '8px 15px',
// //     borderRadius: '4px',
// //     marginBottom: '12px'
// //   },
// //   explanation: {
// //     color: '#856404',
// //     fontSize: '14px',
// //     flex: '1 1 auto',
// //     marginRight: '16px'
// //   },
// //   buttonsGroup: {
// //     display: 'flex',
// //     gap: '8px',
// //     flexShrink: 0
// //   },
// //   optionsContainer: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '8px',
// //     justifyContent: 'flex-start'
// //   },
// //   button: {
// //     padding: '8px 12px',
// //     backgroundColor: '#fff',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     color: '#333',
// //     transition: 'all 0.2s ease',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     flex: '0 1 auto',
// //     minWidth: '120px',
// //     maxWidth: 'calc(33.333% - 6px)',
// //     position: 'relative'
// //   },
// //   buttonActive: {
// //     backgroundColor: '#e3f2fd',
// //     borderColor: '#2196F3',
// //     color: '#1976d2'
// //   },
// //   resetButton: {
// //     padding: '4px 12px',
// //     fontSize: '12px',
// //     color: '#fff',
// //     border: '1px solid #2196F3',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     backgroundColor: '#2196F3',
// //     transition: 'all 0.2s ease',
// //     position: 'relative'
// //   },
// //   toggleSign: {
// //     marginLeft: '8px',
// //     fontWeight: 'bold'
// //   },
// //   checkMark: {
// //     marginLeft: '8px',
// //     fontSize: '14px'
// //   },
// //   tooltip: {
// //     position: 'absolute',
// //     top: '-30px',
// //     left: '50%',
// //     transform: 'translateX(-50%)',
// //     padding: '4px 8px',
// //     backgroundColor: 'rgba(0, 0, 0, 0.8)',
// //     color: '#fff',
// //     fontSize: '12px',
// //     borderRadius: '4px',
// //     whiteSpace: 'nowrap',
// //     visibility: 'hidden',
// //     opacity: 0,
// //     transition: 'opacity 0.2s ease, visibility 0.2s ease',
// //     zIndex: 1000
// //   },
// //   buttonWrapper: {
// //     position: 'relative',
// //     display: 'inline-block'
// //   }
// // };

// // const TooltipButton = ({ children, tooltip, style, ...props }) => {
// //   const [showTooltip, setShowTooltip] = useState(false);
// //   return (
// //     <div style={styles.buttonWrapper}>
// //       <button
// //         {...props}
// //         style={style}
// //         onMouseEnter={() => setShowTooltip(true)}
// //         onMouseLeave={() => setShowTooltip(false)}
// //       >
// //         {children}
// //       </button>
// //       <div style={{
// //         ...styles.tooltip,
// //         visibility: showTooltip ? 'visible' : 'hidden',
// //         opacity: showTooltip ? 1 : 0
// //       }}>
// //         {tooltip}
// //       </div>
// //     </div>
// //   );
// // };

// // const ControlPanel2 = ({ width, sections = [], title = 'Control Panel', onChange }) => {
// //   if (!Array.isArray(sections) || sections.length === 0) return null;

// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState(null);
// //   const [selectedButtons, setSelectedButtons] = useState([]);
// //   const [processedSections, setProcessedSections] = useState([]);

// //   useEffect(() => {
// //     if (sections[0]?.id === 'selectAll') {
// //       const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
// //       setProcessedSections([
// //         { ...sections[0], buttons: allButtons },
// //         ...sections.slice(1)
// //       ]);
// //     } else {
// //       setProcessedSections(sections);
// //     }
// //   }, [sections]);

// //   const toggleSection = (sectionId) => {
// //     if (activeSection !== sectionId) {
// //       setSelectedButtons([]);
// //       onChange?.([]);
// //     }
// //     setActiveSection(activeSection === sectionId ? null : sectionId);
// //   };

// //   const closeSection = () => {
// //     setActiveSection(null);
// //     setSelectedButtons([]);
// //     onChange?.([]);
// //   };

// //   const toggleButton = (buttonId) => {
// //     const newSelected = selectedButtons.includes(buttonId)
// //       ? selectedButtons.filter(id => id !== buttonId)
// //       : [...selectedButtons, buttonId];
// //     setSelectedButtons(newSelected);
// //     onChange?.(newSelected);
// //   };

// //   const resetSection = () => {
// //     setSelectedButtons([]);
// //     onChange?.([]);
// //   };

// //   const selectAllInSection = () => {
// //     const currentSection = processedSections.find(section => section.id === activeSection);
// //     if (currentSection?.buttons) {
// //       const allButtons = currentSection.buttons.map(button => button.id);
// //       setSelectedButtons(allButtons);
// //       onChange?.(allButtons);
// //     }
// //   };

// //   return (
// //     <div style={{ width: width || 'fit-content' }}>
// //       <div 
// //         style={{
// //           ...styles.accordionHeader,
// //           borderBottomLeftRadius: isOpen ? '0' : '6px',
// //           borderBottomRightRadius: isOpen ? '0' : '6px'
// //         }}
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         <span style={styles.headerTitle}>Probability Calculations</span>
// //         <span style={styles.toggleSign}>{isOpen ? '−' : '+'}</span>
// //       </div>

// //       <div style={{
// //         ...styles.accordionContent,
// //         ...(isOpen ? styles.accordionContentOpen : {})
// //       }}>
// //         {isOpen && (
// //           <div style={styles.panel}>
// //             <div style={styles.globalExplanation}>
// //               Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
// //             </div>

// //             <div style={styles.mainButtons}>
// //               {processedSections.map(section => section && (
// //                 <TooltipButton
// //                   key={section.id}
// //                   tooltip={`Show ${section.title.toLowerCase()} operations`}
// //                   style={{
// //                     ...styles.mainButton,
// //                     ...(activeSection === section.id ? styles.mainButtonActive : {})
// //                   }}
// //                   onClick={() => toggleSection(section.id)}
// //                 >
// //                   <span>{section.title}</span>
// //                   <span style={styles.toggleSign}>
// //                     {activeSection === section.id ? '−' : '+'}
// //                   </span>
// //                 </TooltipButton>
// //               ))}
// //             </div>

// //             {activeSection && (
// //               <div style={styles.optionsWrapper}>
// //                 <button 
// //                   style={styles.closeButton}
// //                   onClick={closeSection}
// //                 >
// //                   ×
// //                 </button>
// //                 <div style={styles.optionsPanel}>
// //                   <div style={styles.explanationContainer}>
// //                     <div style={styles.explanation}>
// //                       {processedSections.find(section => section.id === activeSection).explanation}
// //                     </div>
// //                     <div style={styles.buttonsGroup}>
// //                       <TooltipButton 
// //                         style={styles.resetButton}
// //                         onClick={selectAllInSection}
// //                         tooltip="Select all operations in this category"
// //                       >
// //                         Select All
// //                       </TooltipButton>
// //                       <TooltipButton 
// //                         style={styles.resetButton}
// //                         onClick={resetSection}
// //                         tooltip="Clear all selections"
// //                       >
// //                         Reset
// //                       </TooltipButton>
// //                     </div>
// //                   </div>
// //                   <div style={styles.optionsContainer}>
// //                     {processedSections
// //                       .find(section => section.id === activeSection)
// //                       ?.buttons?.map(button => button && (
// //                         <TooltipButton
// //                           key={button.id}
// //                           tooltip={button.label}
// //                           style={{
// //                             ...styles.button,
// //                             ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
// //                           }}
// //                           onClick={() => toggleButton(button.id)}
// //                         >
// //                           <span>{button.label}</span>
// //                           {selectedButtons.includes(button.id) && (
// //                             <span style={styles.checkMark}>✓</span>
// //                           )}
// //                         </TooltipButton>
// //                       ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ControlPanel2;
// import React, { useState, useEffect } from 'react';

// const styles = {
//   panel: {
//     backgroundColor: '#fff',
//     borderRadius: '6px',
//     border: '1px solid #ddd',
//     boxShadow: '0 0 8px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     marginTop: '-30px',
//     width: '100%'
//   },
//   accordionHeader: {
//     width: '100%',
//     padding: '12px 15px',
//     backgroundColor: '#f5f5f5',
//     border: '1px solid #ddd',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   headerTitle: {
//     margin: 0,
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#333'
//   },
//   accordionContent: {
//     backgroundColor: '#fff',
//     borderRadius: '0 0 6px 6px',
//     border: '1px solid #ddd',
//     borderTop: 'none',
//     overflow: 'hidden',
//     transition: 'all 0.3s ease',
//     maxHeight: '0',
//     opacity: 0
//   },
//   accordionContentOpen: {
//     maxHeight: '2000px',
//     opacity: 1,
//     borderTop: '1px solid #ddd'
//   },
//   globalExplanation: {
//     padding: '8px 15px',
//     backgroundColor: '#fff3cd',
//     color: '#856404',
//     fontSize: '14px',
//     borderBottom: '1px solid #ddd'
//   },
//   mainButtons: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '8px',
//     padding: '10px 15px',
//     backgroundColor: '#fff',
//     borderBottom: '1px solid #ddd',
//     justifyContent: 'flex-start'
//   },
//   mainButton: {
//     padding: '8px 12px',
//     backgroundColor: '#fff',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     color: '#333',
//     transition: 'all 0.2s ease',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flex: '0 1 auto',
//     minWidth: '120px',
//     maxWidth: 'calc(25% - 6px)',
//     position: 'relative'
//   },
//   mainButtonActive: {
//     backgroundColor: '#e3f2fd',
//     borderColor: '#2196F3',
//     color: '#1976d2'
//   },
//   optionsWrapper: {
//     backgroundColor: '#f5f9ff',
//     overflow: 'hidden',
//     transition: 'height 0.3s ease',
//     position: 'relative'
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '-5px',
//     left: '-5px',
//     padding: '4px 8px',
//     fontSize: '22px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     cursor: 'pointer',
//     color: '#666',
//     zIndex: 2
//   },
//   optionsPanel: {
//     padding: '15px',
//     paddingTop: '15px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px'
//   },
//   explanationContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff3cd',
//     padding: '8px 15px',
//     borderRadius: '4px',
//     marginBottom: '12px'
//   },
//   explanation: {
//     color: '#856404',
//     fontSize: '14px',
//     flex: '1 1 auto',
//     marginRight: '16px',
    
//   },
//   buttonsGroup: {
//     display: 'flex',
//     gap: '8px',
//     flexShrink: 0
//   },
//   optionsContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '8px',
//     justifyContent: 'flex-start'
//   },
//   button: {
//     padding: '8px 12px',
//     backgroundColor: '#fff',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     color: '#333',
//     transition: 'all 0.2s ease',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flex: '0 1 auto',
//     minWidth: '120px',
//     maxWidth: 'calc(33.333% - 6px)',
//     position: 'relative'
//   },
//   buttonActive: {
//     backgroundColor: '#e3f2fd',
//     borderColor: '#2196F3',
//     color: '#1976d2'
//   },
//   resetButton: {
//     padding: '4px 12px',
//     fontSize: '12px',
//     color: '#fff',
//     border: '1px solid #2196F3',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     backgroundColor: '#2196F3',
//     transition: 'all 0.2s ease',
//     position: 'relative'
//   },
//   toggleSign: {
//     marginLeft: '8px',
//     fontWeight: 'bold'
//   },
//   checkMark: {
//     marginLeft: '8px',
//     fontSize: '14px'
//   },
//   tooltip: {
//     position: 'absolute',
//     top: '-30px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     padding: '4px 8px',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     color: '#fff',
//     fontSize: '12px',
//     borderRadius: '4px',
//     whiteSpace: 'nowrap',
//     visibility: 'hidden',
//     opacity: 0,
//     transition: 'opacity 0.2s ease, visibility 0.2s ease',
//     zIndex: 1000
//   },
//   buttonWrapper: {
//     position: 'relative',
//     display: 'inline-block'
//   }
// };

// const TooltipButton = ({ children, tooltip, style, ...props }) => {
//   const [showTooltip, setShowTooltip] = useState(false);
//   return (
//     <div style={styles.buttonWrapper}>
//       <button
//         {...props}
//         style={style}
//         onMouseEnter={() => setShowTooltip(true)}
//         onMouseLeave={() => setShowTooltip(false)}
//       >
//         {children}
//       </button>
//       <div style={{
//         ...styles.tooltip,
//         visibility: showTooltip ? 'visible' : 'hidden',
//         opacity: showTooltip ? 1 : 0
//       }}>
//         {tooltip}
//       </div>
//     </div>
//   );
// };

// const ControlPanel2 = ({ sections = [], onChange }) => {
//   if (!Array.isArray(sections) || sections.length === 0) return null;

//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(null);
//   const [selectedButtons, setSelectedButtons] = useState([]);
//   const [processedSections, setProcessedSections] = useState([]);

//   useEffect(() => {
//     if (sections[0]?.id === 'selectAll') {
//       const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
//       setProcessedSections([
//         { ...sections[0], buttons: allButtons },
//         ...sections.slice(1)
//       ]);
//     } else {
//       setProcessedSections(sections);
//     }
//   }, [sections]);

//   const closeAll = () => {
//     setActiveSection(null);
//     setSelectedButtons([]);
//     setIsOpen(false);
//     onChange?.([]);
//   };

//   const toggleSection = (sectionId) => {
//     if (activeSection !== sectionId) {
//       setSelectedButtons([]);
//       onChange?.([]);
//     }
//     setActiveSection(activeSection === sectionId ? null : sectionId);
//   };

//   const toggleButton = (buttonId) => {
//     const newSelected = selectedButtons.includes(buttonId)
//       ? selectedButtons.filter(id => id !== buttonId)
//       : [...selectedButtons, buttonId];
//     setSelectedButtons(newSelected);
//     onChange?.(newSelected);
//   };

//   const resetSection = () => {
//     setSelectedButtons([]);
//     onChange?.([]);
//   };

//   const selectAllInSection = () => {
//     const currentSection = processedSections.find(section => section.id === activeSection);
//     if (currentSection?.buttons) {
//       const allButtons = currentSection.buttons.map(button => button.id);
//       setSelectedButtons(allButtons);
//       onChange?.(allButtons);
//     }
//   };

//   const handleHeaderClick = () => {
//     if (isOpen) {
//       closeAll();
//     } else {
//       setIsOpen(true);
//     }
//   };

//   return (
//     <div style={styles.panel}>
//       <div 
//         style={{
//           ...styles.accordionHeader,
//           borderBottomLeftRadius: isOpen ? '0' : '6px',
//           borderBottomRightRadius: isOpen ? '0' : '6px'
//         }}
//         onClick={handleHeaderClick}
//       >
//         <span style={styles.headerTitle}>Probability Calculations</span>
//         <span style={styles.toggleSign}>{isOpen ? '−' : '+'}</span>
//       </div>

//       <div style={{
//         ...styles.accordionContent,
//         ...(isOpen ? styles.accordionContentOpen : {})
//       }}>
//         {isOpen && (
//           <div style={styles.panel}>
//             <br/>
//             <br/>
//             <div style={styles.globalExplanation}>
//               Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
//             </div>

//             <div style={styles.mainButtons}>
//               {processedSections.map(section => section && (
//                 <TooltipButton
//                   key={section.id}
//                   tooltip={`Show ${section.title.toLowerCase()} operations`}
//                   style={{
//                     ...styles.mainButton,
//                     ...(activeSection === section.id ? styles.mainButtonActive : {})
//                   }}
//                   onClick={() => toggleSection(section.id)}
//                 >
//                   <span>{section.title}</span>
//                   <span style={styles.toggleSign}>
//                     {activeSection === section.id ? '−' : '+'}
//                   </span>
//                 </TooltipButton>
//               ))}
//             </div>

//             {activeSection && (
//               <div style={styles.optionsWrapper}>
//                 <button 
//                   style={styles.closeButton}
//                   onClick={closeAll}
//                 >
//                   ×
//                 </button>
//                 <div style={styles.optionsPanel}>
//                   <div style={styles.explanationContainer}>
//                     <div style={styles.explanation}>
//                       {processedSections.find(section => section.id === activeSection).explanation}
//                     </div>
//                     <div style={styles.buttonsGroup}>
//                       <TooltipButton 
//                         style={styles.resetButton}
//                         onClick={selectAllInSection}
//                         tooltip="Select all operations in this category"
//                       >
//                         Select All
//                       </TooltipButton>
//                       <TooltipButton 
//                         style={styles.resetButton}
//                         onClick={resetSection}
//                         tooltip="Clear all selections"
//                       >
//                         Reset
//                       </TooltipButton>
//                     </div>
//                   </div>
//                   <div style={styles.optionsContainer}>
//                     {processedSections
//                       .find(section => section.id === activeSection)
//                       ?.buttons?.map(button => button && (
//                         <TooltipButton
//                           key={button.id}
//                           tooltip={button.label}
//                           style={{
//                             ...styles.button,
//                             ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
//                           }}
//                           onClick={() => toggleButton(button.id)}
//                         >
//                           <span>{button.label}</span>
//                           {selectedButtons.includes(button.id) && (
//                             <span style={styles.checkMark}>✓</span>
//                           )}
//                         </TooltipButton>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ControlPanel2;
import React, { useState, useEffect } from 'react';

const styles = {
  panel: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginTop: '-30px',
    width: '100%'
  },
  accordionHeader: {
    width: '100%',
    padding: '12px 15px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333'
  },
  accordionContent: {
    backgroundColor: '#fff',
    borderRadius: '0 0 6px 6px',
    border: '1px solid #ddd',
    borderTop: 'none',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    maxHeight: '0',
    opacity: 0
  },
  accordionContentOpen: {
    maxHeight: '2000px',
    opacity: 1,
    borderTop: '1px solid #ddd'
  },
  globalExplanation: {
    padding: '8px 15px',
    backgroundColor: '#fff3cd',
    color: '#856404',
    fontSize: '14px',
    borderBottom: '1px solid #ddd'
  },
  mainButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '10px 15px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    justifyContent: 'flex-start'
  },
  mainButton: {
    padding: '8px 12px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '0 1 auto',
    minWidth: '120px',
    maxWidth: 'calc(25% - 6px)',
    position: 'relative'
  },
  mainButtonActive: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196F3',
    color: '#1976d2'
  },
  optionsWrapper: {
    backgroundColor: '#f5f9ff',
    overflow: 'hidden',
    transition: 'height 0.3s ease',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    padding: '4px 8px',
    fontSize: '22px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#666',
    zIndex: 2
  },
  optionsPanel: {
    padding: '15px',
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  explanationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff3cd',
    padding: '8px 15px',
    borderRadius: '4px',
    marginBottom: '12px'
  },
  explanation: {
    color: '#856404',
    fontSize: '14px',
    flex: '1 1 auto',
    marginRight: '16px',
    
  },
  buttonsGroup: {
    display: 'flex',
    gap: '8px',
    flexShrink: 0
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'flex-start'
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
    transition: 'all 0.2s ease',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '0 1 auto',
    minWidth: '120px',
    maxWidth: 'calc(33.333% - 6px)',
    position: 'relative'
  },
  buttonActive: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196F3',
    color: '#1976d2'
  },
  resetButton: {
    padding: '4px 12px',
    fontSize: '12px',
    color: '#fff',
    border: '1px solid #2196F3',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#2196F3',
    transition: 'all 0.2s ease',
    position: 'relative'
  },
  toggleSign: {
    marginLeft: '8px',
    fontWeight: 'bold'
  },
  checkMark: {
    marginLeft: '8px',
    fontSize: '14px'
  },
  tooltip: {
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '4px 8px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    fontSize: '12px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 0.2s ease, visibility 0.2s ease',
    zIndex: 1000
  },
  buttonWrapper: {
    position: 'relative',
    display: 'inline-block'
  }
};

const TooltipButton = ({ children, tooltip, style, ...props }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div style={styles.buttonWrapper}>
      <button
        {...props}
        style={style}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </button>
      <div style={{
        ...styles.tooltip,
        visibility: showTooltip ? 'visible' : 'hidden',
        opacity: showTooltip ? 1 : 0
      }}>
        {tooltip}
      </div>
    </div>
  );
};

const ControlPanel2 = ({ sections = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [processedSections, setProcessedSections] = useState([]);

  useEffect(() => {
    if (sections[0]?.id === 'selectAll') {
      const allButtons = sections.slice(1).flatMap(section => section.buttons || []);
      setProcessedSections([
        { ...sections[0], buttons: allButtons },
        ...sections.slice(1)
      ]);
    } else {
      setProcessedSections(sections);
    }
  }, [sections]);

  if (!Array.isArray(sections) || sections.length === 0) return null;

  const closeAll = () => {
    setActiveSection(null);
    setSelectedButtons([]);
    setIsOpen(false);
    onChange?.([]);
  };

  const toggleSection = (sectionId) => {
    if (activeSection !== sectionId) {
      setSelectedButtons([]);
      onChange?.([]);
    }
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const toggleButton = (buttonId) => {
    const newSelected = selectedButtons.includes(buttonId)
      ? selectedButtons.filter(id => id !== buttonId)
      : [...selectedButtons, buttonId];
    setSelectedButtons(newSelected);
    onChange?.(newSelected);
  };

  const resetSection = () => {
    setSelectedButtons([]);
    onChange?.([]);
  };

  const selectAllInSection = () => {
    const currentSection = processedSections.find(section => section.id === activeSection);
    if (currentSection?.buttons) {
      const allButtons = currentSection.buttons.map(button => button.id);
      setSelectedButtons(allButtons);
      onChange?.(allButtons);
    }
  };

  const handleHeaderClick = () => {
    if (isOpen) {
      closeAll();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div style={styles.panel}>
      <div 
        style={{
          ...styles.accordionHeader,
          borderBottomLeftRadius: isOpen ? '0' : '6px',
          borderBottomRightRadius: isOpen ? '0' : '6px'
        }}
        onClick={handleHeaderClick}
      >
        <span style={styles.headerTitle}>Probability Calculations</span>
        <span style={styles.toggleSign}>{isOpen ? '−' : '+'}</span>
      </div>

      <div style={{
        ...styles.accordionContent,
        ...(isOpen ? styles.accordionContentOpen : {})
      }}>
        {isOpen && (
          <div style={styles.panel}>
            <br/>
            <br/>
            <div style={styles.globalExplanation}>
              Click category buttons to expand, select multiple operations within a category. Only one category can be active at a time.
            </div>

            <div style={styles.mainButtons}>
              {processedSections.map(section => section && (
                <TooltipButton
                  key={section.id}
                  tooltip={`Show ${section.title.toLowerCase()} operations`}
                  style={{
                    ...styles.mainButton,
                    ...(activeSection === section.id ? styles.mainButtonActive : {})
                  }}
                  onClick={() => toggleSection(section.id)}
                >
                  <span>{section.title}</span>
                  <span style={styles.toggleSign}>
                    {activeSection === section.id ? '−' : '+'}
                  </span>
                </TooltipButton>
              ))}
            </div>

            {activeSection && (
              <div style={styles.optionsWrapper}>
                <button 
                  style={styles.closeButton}
                  onClick={closeAll}
                >
                  ×
                </button>
                <div style={styles.optionsPanel}>
                  <div style={styles.explanationContainer}>
                    <div style={styles.explanation}>
                      {processedSections.find(section => section.id === activeSection).explanation}
                    </div>
                    <div style={styles.buttonsGroup}>
                      <TooltipButton 
                        style={styles.resetButton}
                        onClick={selectAllInSection}
                        tooltip="Select all operations in this category"
                      >
                        Select All
                      </TooltipButton>
                      <TooltipButton 
                        style={styles.resetButton}
                        onClick={resetSection}
                        tooltip="Clear all selections"
                      >
                        Reset
                      </TooltipButton>
                    </div>
                  </div>
                  <div style={styles.optionsContainer}>
                    {processedSections
                      .find(section => section.id === activeSection)
                      ?.buttons?.map(button => button && (
                        <TooltipButton
                          key={button.id}
                          tooltip={button.label}
                          style={{
                            ...styles.button,
                            ...(selectedButtons.includes(button.id) ? styles.buttonActive : {})
                          }}
                          onClick={() => toggleButton(button.id)}
                        >
                          <span>{button.label}</span>
                          {selectedButtons.includes(button.id) && (
                            <span style={styles.checkMark}>✓</span>
                          )}
                        </TooltipButton>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel2;