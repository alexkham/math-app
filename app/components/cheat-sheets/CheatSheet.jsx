
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { processContent } from '@/app/utils/contentProcessor';

// const CheatSheet = ({ 
//   type = 'compact', 
//   title, 
//   subtitle, 
//   data, 
//   showControls = false,
//   showFilters = false 
// }) => {
//   const [rechartsComponents, setRechartsComponents] = useState(null);
//   const contentRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSections, setSelectedSections] = useState(new Set());
//   const [filteredData, setFilteredData] = useState(data);

//   useEffect(() => {
//     import('recharts').then((recharts) => {
//       setRechartsComponents(recharts);
//     });
//   }, []);

//   useEffect(() => {
//     if (!showFilters) {
//       setFilteredData(data);
//       return;
//     }

//     let filtered = { ...data };

//     if (searchTerm) {
//       const search = searchTerm.toLowerCase();
      
//       if (type === 'compact') {
//         filtered = {
//           ...filtered,
//           columns: data.columns.map(col => ({
//             ...col,
//             sections: col.sections.map(section => ({
//               ...section,
//               rules: section.rules.filter(rule => 
//                 (rule.name && rule.name.toLowerCase().includes(search)) ||
//                 (rule.formula && rule.formula.toLowerCase().includes(search)) ||
//                 (rule.note && rule.note.toLowerCase().includes(search))
//               )
//             })).filter(section => section.rules.length > 0)
//           })).filter(col => col.sections.length > 0)
//         };
//       } else if (type === 'card') {
//         filtered = {
//           ...filtered,
//           categories: data.categories.map(cat => ({
//             ...cat,
//             items: cat.items.filter(item =>
//               (item.name && item.name.toLowerCase().includes(search)) ||
//               (item.formula && item.formula.toLowerCase().includes(search)) ||
//               (item.note && item.note.toLowerCase().includes(search))
//             )
//           })).filter(cat => cat.items.length > 0)
//         };
//       } else if (type === 'print') {
//         filtered = {
//           ...filtered,
//           columns: data.columns.map(col => ({
//             ...col,
//             sections: col.sections.map(section => ({
//               ...section,
//               topics: section.topics.filter(topic =>
//                 (topic.name && topic.name.toLowerCase().includes(search)) ||
//                 (topic.formula && topic.formula.toLowerCase().includes(search)) ||
//                 (topic.description && topic.description.toLowerCase().includes(search))
//               )
//             })).filter(section => section.topics.length > 0)
//           })).filter(col => col.sections.length > 0)
//         };
//       }
//     }

//     if (selectedSections.size > 0) {
//       if (type === 'compact' || type === 'print') {
//         filtered = {
//           ...filtered,
//           columns: filtered.columns.map(col => ({
//             ...col,
//             sections: col.sections.filter(section => selectedSections.has(section.title))
//           })).filter(col => col.sections.length > 0)
//         };
//       } else if (type === 'card') {
//         filtered = {
//           ...filtered,
//           categories: filtered.categories.filter(cat => selectedSections.has(cat.title))
//         };
//       }
//     }

//     setFilteredData(filtered);
//   }, [searchTerm, selectedSections, data, type, showFilters]);

//   const getAllSections = () => {
//     if (type === 'card') {
//       return data.categories?.map(cat => cat.title) || [];
//     }
//     const sections = new Set();
//     data.columns?.forEach(col => {
//       col.sections?.forEach(section => {
//         sections.add(section.title);
//       });
//     });
//     return Array.from(sections);
//   };

//   const toggleSection = (sectionTitle) => {
//     const newSelected = new Set(selectedSections);
//     if (newSelected.has(sectionTitle)) {
//       newSelected.delete(sectionTitle);
//     } else {
//       newSelected.add(sectionTitle);
//     }
//     setSelectedSections(newSelected);
//   };

//   const clearFilters = () => {
//     setSearchTerm('');
//     setSelectedSections(new Set());
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownload = () => {
//     const element = contentRef.current;
//     const htmlContent = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="UTF-8">
//           <title>${title || 'Cheat Sheet'}</title>
//           <style>
//             body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
//             @media print {
//               body { margin: 0; padding: 0; }
//             }
//           </style>
//         </head>
//         <body>
//           ${element.innerHTML}
//         </body>
//       </html>
//     `;
    
//     const blob = new Blob([htmlContent], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${(title || 'cheat-sheet').replace(/\s+/g, '-').toLowerCase()}.html`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const CanvasRenderer = ({ width, height, draw }) => {
//     const canvasRef = useRef(null);
    
//     useEffect(() => {
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');
//       draw(ctx);
//     }, [draw]);
    
//     return <canvas ref={canvasRef} width={width} height={height} />;
//   };

//   const GraphRenderer = ({ type: graphType, width, height, data: graphData, xKey, yKey, color }) => {
//     if (!rechartsComponents) return null;

//     const { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, AreaChart, Area } = rechartsComponents;
//     const chartProps = { width, height, data: graphData };
    
//     if (graphType === 'line') {
//       return (
//         <LineChart {...chartProps}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={xKey} />
//           <YAxis />
//           <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} dot={false} />
//         </LineChart>
//       );
//     }
    
//     if (graphType === 'bar') {
//       return (
//         <BarChart {...chartProps}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={xKey} />
//           <YAxis />
//           <Bar dataKey={yKey} fill={color} />
//         </BarChart>
//       );
//     }
    
//     if (graphType === 'area') {
//       return (
//         <AreaChart {...chartProps}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey={xKey} />
//           <YAxis />
//           <Area type="monotone" dataKey={yKey} stroke={color} fill={color} fillOpacity={0.3} />
//         </AreaChart>
//       );
//     }
    
//     return null;
//   };

//   const renderContentBlock = (item, styleSet) => {
//     return (
//       <>
//         {/* {item.name && (
//           <div style={styleSet.itemName}>{processContent(item.name)}</div>
//         )} */}
//         {item.formula && (
//           <div style={styleSet.formula}>{processContent(item.formula)}</div>
//         )}
//         {item.bullet_list && (
//           <ul style={styleSet.bulletList}>
//             {item.bullet_list.map((listItem, idx) => (
//               <li key={idx}>{processContent(listItem)}</li>
//             ))}
//           </ul>
//         )}
//         {item.ordered_list && (
//           <ol style={styleSet.orderedList}>
//             {item.ordered_list.map((listItem, idx) => (
//               <li key={idx}>{processContent(listItem)}</li>
//             ))}
//           </ol>
//         )}
//         {item.code_block && (
//           <div style={styleSet.codeBlock}>
//             <pre style={styleSet.codePre}>{item.code_block}</pre>
//           </div>
//         )}
//         {item.definition && (
//           <dl style={styleSet.definition}>
//             <dt style={styleSet.definitionTerm}>{processContent(item.definition.term)}</dt>
//             <dd style={styleSet.definitionDesc}>{processContent(item.definition.description)}</dd>
//           </dl>
//         )}
//         {item.alert_info && (
//           <div style={styleSet.alertInfo}>{processContent(item.alert_info)}</div>
//         )}
//         {item.alert_warning && (
//           <div style={styleSet.alertWarning}>{processContent(item.alert_warning)}</div>
//         )}
//         {item.alert_error && (
//           <div style={styleSet.alertError}>{processContent(item.alert_error)}</div>
//         )}
//         {item.alert_success && (
//           <div style={styleSet.alertSuccess}>{processContent(item.alert_success)}</div>
//         )}
//         {item.alert_gray && (
//           <div style={styleSet.alertGray}>{processContent(item.alert_gray)}</div>
//         )}
//         {item.blockquote && (
//           <div style={styleSet.blockquote}>{processContent(item.blockquote)}</div>
//         )}
//         {item.key_value && (
//           <div style={styleSet.keyValue}>
//             {item.key_value.map((kv, idx) => (
//               <div key={idx} style={styleSet.keyValueRow}>
//                 <div style={styleSet.keyValueKey}>{processContent(kv.key)}</div>
//                 <div style={styleSet.keyValueValue}>{processContent(kv.value)}</div>
//               </div>
//             ))}
//           </div>
//         )}
//         {item.two_column && (
//           <div style={styleSet.twoColumn}>
//             <div style={styleSet.column}>{processContent(item.two_column.left)}</div>
//             <div style={styleSet.column}>{processContent(item.two_column.right)}</div>
//           </div>
//         )}
//         {item.steps && (
//           <div style={styleSet.steps}>
//             {item.steps.map((step, idx) => (
//               <div key={idx} style={styleSet.step}>
//                 <div style={styleSet.stepNumber}>{idx + 1}</div>
//                 <div style={styleSet.stepContent}>{processContent(step)}</div>
//               </div>
//             ))}
//           </div>
//         )}
//         {item.comparison && (
//           <div style={styleSet.comparison}>
//             <div style={styleSet.comparisonLeft}>
//               <div style={styleSet.comparisonTitle}>{processContent(item.comparison.left.title)}</div>
//               {processContent(item.comparison.left.content)}
//             </div>
//             <div style={styleSet.comparisonRight}>
//               <div style={styleSet.comparisonTitle}>{processContent(item.comparison.right.title)}</div>
//               {processContent(item.comparison.right.content)}
//             </div>
//           </div>
//         )}
//         {item.highlight && (
//           <div style={styleSet.highlight}>{processContent(item.highlight)}</div>
//         )}
//         {item.graph && (
//           <div style={styleSet.visual}>
//             <GraphRenderer {...item.graph} />
//           </div>
//         )}
//         {item.component && (
//           <div style={styleSet.visual}>{item.component}</div>
//         )}
//         {item.svg && (
//           <div style={styleSet.visual}>{item.svg}</div>
//         )}
//         {item.canvas && (
//           <div style={styleSet.visual}>
//             <CanvasRenderer {...item.canvas} />
//           </div>
//         )}
//         {item.image && (
//           <div style={styleSet.visual}>
//             <Image 
//               src={item.image} 
//               alt={item.name || ''} 
//               width={item.imageWidth || 600}
//               height={item.imageHeight || 400}
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           </div>
//         )}
//         {item.note && (
//           <div style={styleSet.note}>{processContent(item.note)}</div>
//         )}
//       </>
//     );
//   };

//   const renderCompactStyle = () => {
//     return (
//       <div style={styles.compact.container}>
//         <header style={styles.compact.header}>
//           <h1 style={styles.compact.headerTitle}>{processContent(title)}</h1>
//           <p style={styles.compact.headerSubtitle}>{processContent(subtitle)}</p>
//         </header>
        
//         <div style={styles.compact.columns}>
//           {filteredData.columns?.map((column, colIndex) => (
//             <div key={colIndex} style={styles.compact.column}>
//               {column.sections.map((section, secIndex) => (
//                 <div key={secIndex} style={styles.compact.section}>
//                   <div style={styles.compact.sectionTitle}>{processContent(section.title)}</div>
//                   {section.rules.map((rule, ruleIndex) => (
//                     <div key={ruleIndex} style={styles.compact.rule}>
//                       {renderContentBlock(rule, styles.compact)}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderCardStyle = () => {
//     return (
//       <div style={styles.card.container}>
//         <header style={styles.card.header}>
//           <h1 style={styles.card.headerTitle}>{processContent(title)}</h1>
//           <p style={styles.card.headerSubtitle}>{processContent(subtitle)}</p>
//         </header>
        
//         {filteredData.categories?.map((category, catIndex) => (
//           <div key={catIndex} style={styles.card.category}>
//             <div style={styles.card.categoryHeader}>{processContent(category.title)}</div>
//             <div style={styles.card.cards}>
//               {category.items.map((item, itemIndex) => (
//                 <div 
//                   key={itemIndex} 
//                   style={{
//                     ...styles.card.cardBase,
//                     borderLeft: `4px solid ${item.color || '#3b82f6'}`
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = '#3b82f6';
//                     e.currentTarget.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.15)';
//                     e.currentTarget.style.transform = 'translateY(-2px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = '#e5e7eb';
//                     e.currentTarget.style.boxShadow = 'none';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   <div style={styles.card.cardTitle}>{processContent(item.name)}</div>
//                   {renderContentBlock(item, styles.card)}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {filteredData.unitCircle && (
//           <div style={styles.card.unitCircle}>
//             <div style={styles.card.unitCircleTitle}>{processContent(filteredData.unitCircle.title)}</div>
//             <div style={styles.card.angleValues}>
//               {filteredData.unitCircle.angles.map((angle, angleIndex) => (
//                 <div key={angleIndex} style={styles.card.angleBox}>
//                   <div style={styles.card.angleBoxAngle}>{processContent(angle.angle)}</div>
//                   <div style={styles.card.angleBoxValues}>
//                     {angle.values.map((value, valIndex) => (
//                       <div key={valIndex}>{processContent(value)}</div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const renderPrintStyle = () => {
//     return (
//       <div style={styles.print.container}>
//         <header style={styles.print.header}>
//           <h1 style={styles.print.headerTitle}>{processContent(title)}</h1>
//           <p style={styles.print.headerSubtitle}>{processContent(subtitle)}</p>
//         </header>
        
//         <div style={styles.print.twoColumns}>
//           {filteredData.columns?.map((column, colIndex) => (
//             <div key={colIndex}>
//               {column.sections.map((section, secIndex) => (
//                 <div key={secIndex} style={styles.print.section}>
//                   <div style={styles.print.sectionTitle}>{processContent(section.title)}</div>
//                   {section.topics.map((topic, topicIndex) => (
//                     <div key={topicIndex} style={styles.print.topic}>
//                       <div style={styles.print.topicName}>{processContent(topic.name)}</div>
//                       {renderContentBlock(topic, styles.print)}
//                       {topic.description && (
//                         <div style={styles.print.description}>{processContent(topic.description)}</div>
//                       )}
//                       {topic.example && (
//                         <div style={styles.print.example}>
//                           <div style={styles.print.exampleLabel}>Example:</div>
//                           {processContent(topic.example)}
//                         </div>
//                       )}
//                       {topic.table && (
//                         <table style={styles.print.table}>
//                           <thead>
//                             <tr>
//                               {topic.table.headers.map((header, hIndex) => (
//                                 <th key={hIndex} style={styles.print.tableHeader}>
//                                   {processContent(header)}
//                                 </th>
//                               ))}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {topic.table.rows.map((row, rIndex) => (
//                               <tr key={rIndex}>
//                                 {row.map((cell, cIndex) => (
//                                   <td key={cIndex} style={styles.print.tableCell}>
//                                     {processContent(cell)}
//                                   </td>
//                                 ))}
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderContent = () => {
//     switch(type) {
//       case 'compact':
//         return renderCompactStyle();
//       case 'card':
//         return renderCardStyle();
//       case 'print':
//         return renderPrintStyle();
//       default:
//         return renderCompactStyle();
//     }
//   };

//   const sections = getAllSections();

//   return (
//     <div style={styles.wrapper}>
//       {(showControls || showFilters) && (
//         <div style={styles.controlsWrapper} className="no-print">
//           {showFilters && (
//             <div style={styles.filters}>
//               <div style={styles.filterSection}>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   style={styles.searchInput}
//                 />
//               </div>
              
//               <div style={styles.filterSection}>
//                 <div style={styles.filterLabel}>Sections:</div>
//                 <div style={styles.checkboxGroup}>
//                   {sections.map((section, idx) => (
//                     <label key={idx} style={styles.checkboxLabel}>
//                       <input
//                         type="checkbox"
//                         checked={selectedSections.has(section)}
//                         onChange={() => toggleSection(section)}
//                         style={styles.checkbox}
//                       />
//                       <span style={styles.checkboxText}>{section}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {(searchTerm || selectedSections.size > 0) && (
//                 <button onClick={clearFilters} style={styles.clearButton}>
//                   Clear Filters
//                 </button>
//               )}
//             </div>
//           )}

//           {showControls && (
//             <div style={styles.controls}>
//               <button onClick={handlePrint} style={styles.button}>
//                 🖨️ Print
//               </button>
//               <button onClick={handleDownload} style={styles.button}>
//                 📥 Download HTML
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       <div ref={contentRef}>
//         {renderContent()}
//       </div>

//       <style jsx global>{`
//         @media print {
//           .no-print {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     fontFamily: 'Arial, sans-serif',
//     background: 'white',
//   },
//   controlsWrapper: {
//     maxWidth: '1200px',
//     margin: '0 auto 20px',
//     padding: '10px',
//   },
//   controls: {
//     display: 'flex',
//     gap: '10px',
//     justifyContent: 'flex-end',
//     marginTop: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '14px',
//     fontWeight: 600,
//     background: '#1e40af',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
//   filters: {
//     background: 'white',
//     border: '2px solid #e5e7eb',
//     borderRadius: '8px',
//     padding: '20px',
//     marginBottom: '10px',
//   },
//   filterSection: {
//     marginBottom: '15px',
//   },
//   filterLabel: {
//     fontWeight: 600,
//     color: '#1e40af',
//     marginBottom: '8px',
//     fontSize: '14px',
//   },
//   searchInput: {
//     width: '100%',
//     padding: '10px 15px',
//     fontSize: '14px',
//     border: '2px solid #e5e7eb',
//     borderRadius: '6px',
//     outline: 'none',
//   },
//   checkboxGroup: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '12px',
//   },
//   checkboxLabel: {
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
//   checkbox: {
//     marginRight: '6px',
//     cursor: 'pointer',
//   },
//   checkboxText: {
//     color: '#475569',
//   },
//   clearButton: {
//     padding: '8px 16px',
//     fontSize: '13px',
//     fontWeight: 600,
//     background: '#ef4444',
//     color: 'white',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
  
//   compact: {
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       border: '2px solid #1e40af',
//     },
//     header: {
//       background: '#1e40af',
//       color: 'white',
//       padding: '20px 30px',
//       textAlign: 'center',
//     },
//     headerTitle: {
//       fontSize: '32px',
//       marginBottom: '8px',
//       margin: 0,
//     },
//     headerSubtitle: {
//       fontSize: '16px',
//       opacity: 0.95,
//       margin: 0,
//     },
//     columns: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: 0,
//     },
//     column: {
//       padding: '25px',
//       borderRight: '1px solid #e5e7eb',
//     },
//     section: {
//       marginBottom: '25px',
//     },
//     sectionTitle: {
//       background: '#3b82f6',
//       color: 'white',
//       padding: '8px 12px',
//       fontSize: '14px',
//       fontWeight: 600,
//       marginBottom: '15px',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//     },
//     rule: {
//       marginBottom: '18px',
//       paddingBottom: '15px',
//       borderBottom: '1px dashed #e5e7eb',
//     },
//     itemName: {
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '13px',
//       marginBottom: '6px',
//     },
//     formula: {
//       fontFamily: 'Times New Roman, serif',
//       fontSize: '16px',
//       margin: '6px 0',
//       padding: '8px 12px',
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//     },
//     bulletList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     orderedList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     codeBlock: {
//       background: '#1e293b',
//       color: '#e2e8f0',
//       padding: '10px',
//       borderRadius: '4px',
//       margin: '8px 0',
//       fontSize: '12px',
//       overflowX: 'auto',
//     },
//     codePre: {
//       margin: 0,
//       fontFamily: 'Courier New, monospace',
//     },
//     definition: {
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//     },
//     definitionTerm: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '4px',
//       fontSize: '13px',
//     },
//     definitionDesc: {
//       margin: 0,
//       color: '#475569',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     alertInfo: {
//       background: '#dbeafe',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertWarning: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertError: {
//       background: '#fee2e2',
//       borderLeft: '3px solid #ef4444',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertSuccess: {
//       background: '#d1fae5',
//       borderLeft: '3px solid #10b981',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertGray: {
//       background: '#f1f5f9',
//       borderLeft: '3px solid #64748b',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     blockquote: {
//       borderLeft: '3px solid #cbd5e1',
//       paddingLeft: '15px',
//       margin: '8px 0',
//       color: '#64748b',
//       fontStyle: 'italic',
//       fontSize: '12px',
//     },
//     keyValue: {
//       margin: '10px 0',
//     },
//     keyValueRow: {
//       display: 'flex',
//       padding: '6px 0',
//       borderBottom: '1px solid #e5e7eb',
//       fontSize: '12px',
//     },
//     keyValueKey: {
//       fontWeight: 600,
//       color: '#1e40af',
//       minWidth: '100px',
//     },
//     keyValueValue: {
//       color: '#475569',
//       flex: 1,
//     },
//     twoColumn: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     column: {
//       padding: '10px',
//       background: '#f8fafc',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     steps: {
//       margin: '10px 0',
//     },
//     step: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       marginBottom: '10px',
//     },
//     stepNumber: {
//       background: '#3b82f6',
//       color: 'white',
//       width: '24px',
//       height: '24px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 600,
//       fontSize: '12px',
//       marginRight: '10px',
//       flexShrink: 0,
//     },
//     stepContent: {
//       color: '#1e293b',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     comparison: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     comparisonLeft: {
//       padding: '10px',
//       background: '#dbeafe',
//       border: '2px solid #3b82f6',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonRight: {
//       padding: '10px',
//       background: '#fef3c7',
//       border: '2px solid #eab308',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonTitle: {
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     highlight: {
//       background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
//       border: '2px solid #3b82f6',
//       padding: '12px',
//       borderRadius: '6px',
//       margin: '10px 0',
//       textAlign: 'center',
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '13px',
//     },
//     note: {
//       fontSize: '12px',
//       color: '#64748b',
//       fontStyle: 'italic',
//       marginTop: '5px',
//     },
//     visual: {
//       margin: '10px 0',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     image: {
//       maxWidth: '100%',
//       height: 'auto',
//     },
//   },
  
//   card: {
//     container: {
//       maxWidth: '1100px',
//       margin: '0 auto',
//       background: '#f0f4f8',
//       padding: '25px',
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '30px',
//     },
//     headerTitle: {
//       fontSize: '36px',
//       color: '#1e40af',
//       marginBottom: '8px',
//       margin: 0,
//     },
//     headerSubtitle: {
//       color: '#64748b',
//       fontSize: '16px',
//       margin: 0,
//     },
//     category: {
//       marginBottom: '30px',
//     },
//     categoryHeader: {
//       background: '#1e40af',
//       color: 'white',
//       padding: '10px 20px',
//       fontSize: '18px',
//       fontWeight: 600,
//       borderRadius: '8px 8px 0 0',
//     },
//     cards: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '15px',
//       background: 'white',
//       padding: '20px',
//       borderRadius: '0 0 8px 8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
//     },
//     cardBase: {
//       background: 'white',
//       border: '2px solid #e5e7eb',
//       borderRadius: '8px',
//       padding: '15px',
//       transition: 'all 0.2s',
//       cursor: 'default',
//     },
//     cardTitle: {
//       fontWeight: 600,
//       color: '#1e293b',
//       marginBottom: '10px',
//       fontSize: '14px',
//     },
//     itemName: {
//       fontWeight: 600,
//       color: '#1e293b',
//       marginBottom: '10px',
//       fontSize: '14px',
//     },
//     formula: {
//       fontFamily: 'Times New Roman, serif',
//       fontSize: '18px',
//       textAlign: 'center',
//       padding: '12px',
//       background: '#f8fafc',
//       borderRadius: '6px',
//       marginBottom: '8px',
//       color: '#1e40af',
//     },
//     bulletList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     orderedList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     codeBlock: {
//       background: '#1e293b',
//       color: '#e2e8f0',
//       padding: '12px',
//       borderRadius: '6px',
//       margin: '10px 0',
//       fontSize: '12px',
//       overflowX: 'auto',
//     },
//     codePre: {
//       margin: 0,
//       fontFamily: 'Courier New, monospace',
//     },
//     definition: {
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//       padding: '12px',
//       margin: '10px 0',
//       borderRadius: '4px',
//     },
//     definitionTerm: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '5px',
//       fontSize: '13px',
//     },
//     definitionDesc: {
//       margin: 0,
//       color: '#475569',
//       fontSize: '13px',
//       lineHeight: 1.5,
//     },
//     alertInfo: {
//       background: '#dbeafe',
//       borderLeft: '3px solid #3b82f6',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertWarning: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertError: {
//       background: '#fee2e2',
//       borderLeft: '3px solid #ef4444',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertSuccess: {
//       background: '#d1fae5',
//       borderLeft: '3px solid #10b981',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     alertGray: {
//       background: '#f1f5f9',
//       borderLeft: '3px solid #64748b',
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '13px',
//       borderRadius: '6px',
//     },
//     blockquote: {
//       borderLeft: '3px solid #cbd5e1',
//       paddingLeft: '15px',
//       margin: '10px 0',
//       color: '#64748b',
//       fontStyle: 'italic',
//       fontSize: '13px',
//     },
//     keyValue: {
//       margin: '10px 0',
//     },
//     keyValueRow: {
//       display: 'flex',
//       padding: '8px 0',
//       borderBottom: '1px solid #e5e7eb',
//       fontSize: '13px',
//     },
//     keyValueKey: {
//       fontWeight: 600,
//       color: '#1e40af',
//       minWidth: '120px',
//     },
//     keyValueValue: {
//       color: '#475569',
//       flex: 1,
//     },
//     twoColumn: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '12px',
//       margin: '10px 0',
//     },
//     column: {
//       padding: '12px',
//       background: '#f8fafc',
//       borderRadius: '6px',
//       fontSize: '13px',
//     },
//     steps: {
//       margin: '10px 0',
//     },
//     step: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       marginBottom: '12px',
//     },
//     stepNumber: {
//       background: '#3b82f6',
//       color: 'white',
//       width: '28px',
//       height: '28px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 600,
//       fontSize: '13px',
//       marginRight: '12px',
//       flexShrink: 0,
//     },
//     stepContent: {
//       color: '#1e293b',
//       fontSize: '13px',
//       lineHeight: 1.6,
//     },
//     comparison: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '12px',
//       margin: '10px 0',
//     },
//     comparisonLeft: {
//       padding: '12px',
//       background: '#dbeafe',
//       border: '2px solid #3b82f6',
//       borderRadius: '6px',
//       fontSize: '13px',
//     },
//     comparisonRight: {
//       padding: '12px',
//       background: '#fef3c7',
//       border: '2px solid #eab308',
//       borderRadius: '6px',
//       fontSize: '13px',
//     },
//     comparisonTitle: {
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     highlight: {
//       background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
//       border: '2px solid #3b82f6',
//       padding: '15px',
//       borderRadius: '8px',
//       margin: '10px 0',
//       textAlign: 'center',
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '14px',
//     },
//     note: {
//       fontSize: '12px',
//       color: '#64748b',
//       textAlign: 'center',
//     },
//     visual: {
//       margin: '10px 0',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     image: {
//       maxWidth: '100%',
//       height: 'auto',
//     },
//     unitCircle: {
//       background: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
//       marginTop: '20px',
//     },
//     unitCircleTitle: {
//       color: '#1e40af',
//       fontSize: '20px',
//       fontWeight: 600,
//       marginBottom: '15px',
//       textAlign: 'center',
//     },
//     angleValues: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(4, 1fr)',
//       gap: '12px',
//     },
//     angleBox: {
//       background: '#f8fafc',
//       border: '1px solid #e5e7eb',
//       borderRadius: '6px',
//       padding: '12px',
//       textAlign: 'center',
//     },
//     angleBoxAngle: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '6px',
//       fontSize: '14px',
//     },
//     angleBoxValues: {
//       fontSize: '12px',
//       color: '#475569',
//       lineHeight: 1.6,
//     },
//   },
  
//   print: {
//     container: {
//       maxWidth: '900px',
//       margin: '0 auto',
//       background: 'white',
//       padding: '30px 40px',
//     },
//     header: {
//       textAlign: 'center',
//       borderBottom: '3px solid #1e40af',
//       paddingBottom: '20px',
//       marginBottom: '30px',
//     },
//     headerTitle: {
//       fontSize: '32px',
//       color: '#1e40af',
//       marginBottom: '5px',
//       fontWeight: 700,
//       margin: 0,
//     },
//     headerSubtitle: {
//       color: '#64748b',
//       fontSize: '14px',
//       fontStyle: 'italic',
//       margin: 0,
//     },
//     twoColumns: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '30px',
//     },
//     section: {
//       marginBottom: '25px',
//     },
//     sectionTitle: {
//       color: '#1e40af',
//       fontSize: '18px',
//       fontWeight: 700,
//       borderBottom: '2px solid #3b82f6',
//       paddingBottom: '5px',
//       marginBottom: '12px',
//     },
//     topic: {
//       marginBottom: '15px',
//       padding: '10px',
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//     },
//     topicName: {
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '14px',
//       marginBottom: '6px',
//     },
//     itemName: {
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '14px',
//       marginBottom: '6px',
//     },
//     formula: {
//       fontFamily: 'Courier New, monospace',
//       background: 'white',
//       border: '1px solid #cbd5e1',
//       padding: '8px 12px',
//       margin: '8px 0',
//       fontSize: '14px',
//       textAlign: 'center',
//     },
//     bulletList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     orderedList: {
//       margin: '10px 0',
//       paddingLeft: '20px',
//       fontSize: '13px',
//       color: '#1e293b',
//       lineHeight: 1.6,
//     },
//     codeBlock: {
//       background: '#1e293b',
//       color: '#e2e8f0',
//       padding: '10px',
//       borderRadius: '4px',
//       margin: '8px 0',
//       fontSize: '12px',
//       overflowX: 'auto',
//     },
//     codePre: {
//       margin: 0,
//       fontFamily: 'Courier New, monospace',
//     },
//     definition: {
//       background: '#f8fafc',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//     },
//     definitionTerm: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '4px',
//       fontSize: '13px',
//     },
//     definitionDesc: {
//       margin: 0,
//       color: '#475569',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     alertInfo: {
//       background: '#dbeafe',
//       borderLeft: '3px solid #3b82f6',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertWarning: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertError: {
//       background: '#fee2e2',
//       borderLeft: '3px solid #ef4444',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertSuccess: {
//       background: '#d1fae5',
//       borderLeft: '3px solid #10b981',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     alertGray: {
//       background: '#f1f5f9',
//       borderLeft: '3px solid #64748b',
//       padding: '10px',
//       margin: '8px 0',
//       fontSize: '12px',
//       borderRadius: '4px',
//     },
//     blockquote: {
//       borderLeft: '3px solid #cbd5e1',
//       paddingLeft: '15px',
//       margin: '8px 0',
//       color: '#64748b',
//       fontStyle: 'italic',
//       fontSize: '12px',
//     },
//     keyValue: {
//       margin: '10px 0',
//     },
//     keyValueRow: {
//       display: 'flex',
//       padding: '6px 0',
//       borderBottom: '1px solid #e5e7eb',
//       fontSize: '12px',
//     },
//     keyValueKey: {
//       fontWeight: 600,
//       color: '#1e40af',
//       minWidth: '100px',
//     },
//     keyValueValue: {
//       color: '#475569',
//       flex: 1,
//     },
//     twoColumn: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     column: {
//       padding: '10px',
//       background: '#f8fafc',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     steps: {
//       margin: '10px 0',
//     },
//     step: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       marginBottom: '10px',
//     },
//     stepNumber: {
//       background: '#3b82f6',
//       color: 'white',
//       width: '24px',
//       height: '24px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 600,
//       fontSize: '12px',
//       marginRight: '10px',
//       flexShrink: 0,
//     },
//     stepContent: {
//       color: '#1e293b',
//       fontSize: '12px',
//       lineHeight: 1.5,
//     },
//     comparison: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '10px',
//       margin: '10px 0',
//     },
//     comparisonLeft: {
//       padding: '10px',
//       background: '#dbeafe',
//       border: '2px solid #3b82f6',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonRight: {
//       padding: '10px',
//       background: '#fef3c7',
//       border: '2px solid #eab308',
//       borderRadius: '4px',
//       fontSize: '12px',
//     },
//     comparisonTitle: {
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     highlight: {
//       background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
//       border: '2px solid #3b82f6',
//       padding: '12px',
//       borderRadius: '6px',
//       margin: '10px 0',
//       textAlign: 'center',
//       fontWeight: 600,
//       color: '#1e40af',
//       fontSize: '13px',
//     },
//     description: {
//       fontSize: '13px',
//       color: '#475569',
//       marginTop: '5px',
//       lineHeight: 1.5,
//     },
//     example: {
//       background: '#fef3c7',
//       borderLeft: '3px solid #eab308',
//       padding: '8px 10px',
//       marginTop: '8px',
//       fontSize: '12px',
//       color: '#1e40af',
//     },
//     exampleLabel: {
//       fontWeight: 600,
//       color: '#1e40af',
//       marginBottom: '3px',
//     },
//     visual: {
//       margin: '10px 0',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     image: {
//       maxWidth: '100%',
//       height: 'auto',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse',
//       margin: '10px 0',
//       fontSize: '12px',
//     },
//     tableHeader: {
//       background: '#1e40af',
//       color: 'white',
//       padding: '6px',
//       textAlign: 'left',
//     },
//     tableCell: {
//       border: '1px solid #cbd5e1',
//       padding: '6px',
//     },
//     note: {
//       fontSize: '12px',
//       color: '#64748b',
//       fontStyle: 'italic',
//       marginTop: '5px',
//     },
//   },
// };

// export default CheatSheet;


'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { processContent } from '@/app/utils/contentProcessor';
import canvasDrawRegistry from './canvasDrawRegistry';

const SCALE = 1.2;
const s = (v) => v * SCALE;

const CheatSheet = ({ 
  type = 'compact', 
  title, 
  subtitle, 
  data, 
  showControls = false,
  showFilters = false 
}) => {
  const [rechartsComponents, setRechartsComponents] = useState(null);
  const contentRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSections, setSelectedSections] = useState(new Set());
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    import('recharts').then((recharts) => {
      setRechartsComponents(recharts);
    });
  }, []);

  useEffect(() => {
    if (!showFilters) {
      setFilteredData(data);
      return;
    }

    let filtered = { ...data };

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      
      if (type === 'compact') {
        filtered = {
          ...filtered,
          columns: data.columns.map(col => ({
            ...col,
            sections: col.sections.map(section => ({
              ...section,
              rules: section.rules.filter(rule => 
                (rule.name && rule.name.toLowerCase().includes(search)) ||
                (rule.formula && rule.formula.toLowerCase().includes(search)) ||
                (rule.note && rule.note.toLowerCase().includes(search))
              )
            })).filter(section => section.rules.length > 0)
          })).filter(col => col.sections.length > 0)
        };
      } else if (type === 'card') {
        filtered = {
          ...filtered,
          categories: data.categories.map(cat => ({
            ...cat,
            items: cat.items.filter(item =>
              (item.name && item.name.toLowerCase().includes(search)) ||
              (item.formula && item.formula.toLowerCase().includes(search)) ||
              (item.note && item.note.toLowerCase().includes(search))
            )
          })).filter(cat => cat.items.length > 0)
        };
      } else if (type === 'print') {
        filtered = {
          ...filtered,
          columns: data.columns.map(col => ({
            ...col,
            sections: col.sections.map(section => ({
              ...section,
              topics: section.topics.filter(topic =>
                (topic.name && topic.name.toLowerCase().includes(search)) ||
                (topic.formula && topic.formula.toLowerCase().includes(search)) ||
                (topic.description && topic.description.toLowerCase().includes(search))
              )
            })).filter(section => section.topics.length > 0)
          })).filter(col => col.sections.length > 0)
        };
      }
    }

    if (selectedSections.size > 0) {
      if (type === 'compact' || type === 'print') {
        filtered = {
          ...filtered,
          columns: filtered.columns.map(col => ({
            ...col,
            sections: col.sections.filter(section => selectedSections.has(section.title))
          })).filter(col => col.sections.length > 0)
        };
      } else if (type === 'card') {
        filtered = {
          ...filtered,
          categories: filtered.categories.filter(cat => selectedSections.has(cat.title))
        };
      }
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedSections, data, type, showFilters]);

  const getAllSections = () => {
    if (type === 'card') {
      return data.categories?.map(cat => cat.title) || [];
    }
    const sections = new Set();
    data.columns?.forEach(col => {
      col.sections?.forEach(section => {
        sections.add(section.title);
      });
    });
    return Array.from(sections);
  };

  const toggleSection = (sectionTitle) => {
    const newSelected = new Set(selectedSections);
    if (newSelected.has(sectionTitle)) {
      newSelected.delete(sectionTitle);
    } else {
      newSelected.add(sectionTitle);
    }
    setSelectedSections(newSelected);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSections(new Set());
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = contentRef.current;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${title || 'Cheat Sheet'}</title>
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
            @media print {
              body { margin: 0; padding: 0; }
            }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(title || 'cheat-sheet').replace(/\s+/g, '-').toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // const CanvasRenderer = ({ width, height, draw }) => {
  //   const canvasRef = useRef(null);
    
  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext('2d');
  //     draw(ctx);
  //   }, [draw]);
    
  //   return <canvas ref={canvasRef} width={width} height={height} />;
  // };


  const CanvasRenderer = ({ width, height, draw, drawKey }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (drawKey && canvasDrawRegistry[drawKey]) {
      canvasDrawRegistry[drawKey](ctx);
    } else if (typeof draw === 'function') {
      draw(ctx);
    }
  }, [draw, drawKey]);
  return <canvas ref={canvasRef} width={width} height={height} />;
};
  const GraphRenderer = ({ type: graphType, width, height, data: graphData, xKey, yKey, color }) => {
    if (!rechartsComponents) return null;

    const { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, AreaChart, Area } = rechartsComponents;
    const chartProps = { width, height, data: graphData };
    
    if (graphType === 'line') {
      return (
        <LineChart {...chartProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      );
    }
    
    if (graphType === 'bar') {
      return (
        <BarChart {...chartProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Bar dataKey={yKey} fill={color} />
        </BarChart>
      );
    }
    
    if (graphType === 'area') {
      return (
        <AreaChart {...chartProps}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Area type="monotone" dataKey={yKey} stroke={color} fill={color} fillOpacity={0.3} />
        </AreaChart>
      );
    }
    
    return null;
  };

  const renderContentBlock = (item, styleSet) => {
    return (
      <>
        {item.formula && (
          <div style={styleSet.formula}>{processContent(item.formula)}</div>
        )}
        {item.bullet_list && (
          <ul style={styleSet.bulletList}>
            {item.bullet_list.map((listItem, idx) => (
              <li key={idx}>{processContent(listItem)}</li>
            ))}
          </ul>
        )}
        {item.ordered_list && (
          <ol style={styleSet.orderedList}>
            {item.ordered_list.map((listItem, idx) => (
              <li key={idx}>{processContent(listItem)}</li>
            ))}
          </ol>
        )}
        {item.code_block && (
          <div style={styleSet.codeBlock}>
            <pre style={styleSet.codePre}>{item.code_block}</pre>
          </div>
        )}
        {item.definition && (
          <dl style={styleSet.definition}>
            <dt style={styleSet.definitionTerm}>{processContent(item.definition.term)}</dt>
            <dd style={styleSet.definitionDesc}>{processContent(item.definition.description)}</dd>
          </dl>
        )}
        {item.alert_info && (
          <div style={styleSet.alertInfo}>{processContent(item.alert_info)}</div>
        )}
        {item.alert_warning && (
          <div style={styleSet.alertWarning}>{processContent(item.alert_warning)}</div>
        )}
        {item.alert_error && (
          <div style={styleSet.alertError}>{processContent(item.alert_error)}</div>
        )}
        {item.alert_success && (
          <div style={styleSet.alertSuccess}>{processContent(item.alert_success)}</div>
        )}
        {item.alert_gray && (
          <div style={styleSet.alertGray}>{processContent(item.alert_gray)}</div>
        )}
        {item.blockquote && (
          <div style={styleSet.blockquote}>{processContent(item.blockquote)}</div>
        )}
        {item.key_value && (
          <div style={styleSet.keyValue}>
            {item.key_value.map((kv, idx) => (
              <div key={idx} style={styleSet.keyValueRow}>
                <div style={styleSet.keyValueKey}>{processContent(kv.key)}</div>
                <div style={styleSet.keyValueValue}>{processContent(kv.value)}</div>
              </div>
            ))}
          </div>
        )}
        {item.two_column && (
          <div style={styleSet.twoColumn}>
            <div style={styleSet.twoColumnCol}>{processContent(item.two_column.left)}</div>
            <div style={styleSet.twoColumnCol}>{processContent(item.two_column.right)}</div>
          </div>
        )}
        {item.steps && (
          <div style={styleSet.steps}>
            {item.steps.map((step, idx) => (
              <div key={idx} style={styleSet.step}>
                <div style={styleSet.stepNumber}>{idx + 1}</div>
                <div style={styleSet.stepContent}>{processContent(step)}</div>
              </div>
            ))}
          </div>
        )}
        {item.comparison && (
          <div style={styleSet.comparison}>
            <div style={styleSet.comparisonLeft}>
              <div style={styleSet.comparisonTitle}>{processContent(item.comparison.left.title)}</div>
              {processContent(item.comparison.left.content)}
            </div>
            <div style={styleSet.comparisonRight}>
              <div style={styleSet.comparisonTitle}>{processContent(item.comparison.right.title)}</div>
              {processContent(item.comparison.right.content)}
            </div>
          </div>
        )}
        {item.highlight && (
          <div style={styleSet.highlight}>{processContent(item.highlight)}</div>
        )}
        {item.graph && (
          <div style={styleSet.visual}>
            <GraphRenderer {...item.graph} />
          </div>
        )}
        {item.component && (
          <div style={styleSet.visual}>{item.component}</div>
        )}
        {item.svg && (
          <div style={styleSet.visual}>{item.svg}</div>
        )}
        {item.canvas && (
          <div style={styleSet.visual}>
            <CanvasRenderer {...item.canvas} />
          </div>
        )}
        {item.image && (
          <div style={styleSet.visual}>
            <Image 
              src={item.image} 
              alt={item.name || ''} 
              width={item.imageWidth || 600}
              height={item.imageHeight || 400}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        )}
        {item.note && (
          <div style={styleSet.note}>{processContent(item.note)}</div>
        )}
      </>
    );
  };

  const renderCompactStyle = () => {
    return (
      <div style={styles.compact.container}>
        <header style={styles.compact.header}>
          <h1 style={styles.compact.headerTitle}>{processContent(title)}</h1>
          <p style={styles.compact.headerSubtitle}>{processContent(subtitle)}</p>
        </header>
        
        <div style={styles.compact.columns}>
          {filteredData.columns?.map((column, colIndex) => (
            <div key={colIndex} style={styles.compact.column}>
              {column.sections.map((section, secIndex) => (
                <div key={secIndex} style={styles.compact.section}>
                  <div style={styles.compact.sectionTitle}>{processContent(section.title)}</div>
                  {section.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} style={styles.compact.rule}>
                      {renderContentBlock(rule, styles.compact)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCardStyle = () => {
    return (
      <div style={styles.card.container}>
        <header style={styles.card.header}>
          <h1 style={styles.card.headerTitle}>{processContent(title)}</h1>
          <p style={styles.card.headerSubtitle}>{processContent(subtitle)}</p>
        </header>
        
        {filteredData.categories?.map((category, catIndex) => (
          <div key={catIndex} style={styles.card.category}>
            <div style={styles.card.categoryHeader}>{processContent(category.title)}</div>
            <div style={styles.card.cards}>
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  style={{
                    ...styles.card.cardBase,
                    borderLeft: `${s(4)}px solid ${item.color || '#3b82f6'}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6';
                    e.currentTarget.style.boxShadow = `0 ${s(4)}px ${s(8)}px rgba(59, 130, 246, 0.15)`;
                    e.currentTarget.style.transform = `translateY(-${s(2)}px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={styles.card.cardTitle}>{processContent(item.name)}</div>
                  {renderContentBlock(item, styles.card)}
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredData.unitCircle && (
          <div style={styles.card.unitCircle}>
            <div style={styles.card.unitCircleTitle}>{processContent(filteredData.unitCircle.title)}</div>
            <div style={styles.card.angleValues}>
              {filteredData.unitCircle.angles.map((angle, angleIndex) => (
                <div key={angleIndex} style={styles.card.angleBox}>
                  <div style={styles.card.angleBoxAngle}>{processContent(angle.angle)}</div>
                  <div style={styles.card.angleBoxValues}>
                    {angle.values.map((value, valIndex) => (
                      <div key={valIndex}>{processContent(value)}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPrintStyle = () => {
    return (
      <div style={styles.print.container}>
        <header style={styles.print.header}>
          <h1 style={styles.print.headerTitle}>{processContent(title)}</h1>
          <p style={styles.print.headerSubtitle}>{processContent(subtitle)}</p>
        </header>
        
        <div style={styles.print.twoColumns}>
          {filteredData.columns?.map((column, colIndex) => (
            <div key={colIndex}>
              {column.sections.map((section, secIndex) => (
                <div key={secIndex} style={styles.print.section}>
                  <div style={styles.print.sectionTitle}>{processContent(section.title)}</div>
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} style={styles.print.topic}>
                      <div style={styles.print.topicName}>{processContent(topic.name)}</div>
                      {renderContentBlock(topic, styles.print)}
                      {topic.description && (
                        <div style={styles.print.description}>{processContent(topic.description)}</div>
                      )}
                      {topic.example && (
                        <div style={styles.print.example}>
                          <div style={styles.print.exampleLabel}>Example:</div>
                          {processContent(topic.example)}
                        </div>
                      )}
                      {topic.table && (
                        <table style={styles.print.table}>
                          <thead>
                            <tr>
                              {topic.table.headers.map((header, hIndex) => (
                                <th key={hIndex} style={styles.print.tableHeader}>
                                  {processContent(header)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {topic.table.rows.map((row, rIndex) => (
                              <tr key={rIndex}>
                                {row.map((cell, cIndex) => (
                                  <td key={cIndex} style={styles.print.tableCell}>
                                    {processContent(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch(type) {
      case 'compact':
        return renderCompactStyle();
      case 'card':
        return renderCardStyle();
      case 'print':
        return renderPrintStyle();
      default:
        return renderCompactStyle();
    }
  };

  const sections = getAllSections();

  return (
    <div style={styles.wrapper}>
      {(showControls || showFilters) && (
        <div style={styles.controlsWrapper} className="no-print">
          {showFilters && (
            <div style={styles.filters}>
              <div style={styles.filterSection}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={styles.searchInput}
                />
              </div>
              
              <div style={styles.filterSection}>
                <div style={styles.filterLabel}>Sections:</div>
                <div style={styles.checkboxGroup}>
                  {sections.map((section, idx) => (
                    <label key={idx} style={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedSections.has(section)}
                        onChange={() => toggleSection(section)}
                        style={styles.checkbox}
                      />
                      <span style={styles.checkboxText}>{section}</span>
                    </label>
                  ))}
                </div>
              </div>

              {(searchTerm || selectedSections.size > 0) && (
                <button onClick={clearFilters} style={styles.clearButton}>
                  Clear Filters
                </button>
              )}
            </div>
          )}

          {showControls && (
            <div style={styles.controls}>
              <button onClick={handlePrint} style={styles.button}>
                🖨️ Print
              </button>
              {/* <button onClick={handleDownload} style={styles.button}>
                📥 Download HTML
              </button> */}
            </div>
          )}
        </div>
      )}

      <div ref={contentRef}>
        {renderContent()}
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: 'Arial, sans-serif',
    background: 'white',
  },
  controlsWrapper: {
    maxWidth: `${s(1200)}px`,
    margin: `0 auto ${s(20)}px`,
    padding: `${s(10)}px`,
  },
  controls: {
    display: 'flex',
    gap: `${s(10)}px`,
    justifyContent: 'flex-end',
    marginTop: `${s(10)}px`,
  },
  button: {
    padding: `${s(10)}px ${s(20)}px`,
    fontSize: `${s(14)}px`,
    fontWeight: 600,
    background: '#1e40af',
    color: 'white',
    border: 'none',
    borderRadius: `${s(6)}px`,
    cursor: 'pointer',
  },
  filters: {
    background: 'white',
    border: `${s(2)}px solid #e5e7eb`,
    borderRadius: `${s(8)}px`,
    padding: `${s(20)}px`,
    marginBottom: `${s(10)}px`,
  },
  filterSection: {
    marginBottom: `${s(15)}px`,
  },
  filterLabel: {
    fontWeight: 600,
    color: '#1e40af',
    marginBottom: `${s(8)}px`,
    fontSize: `${s(14)}px`,
  },
  searchInput: {
    width: '100%',
    padding: `${s(10)}px ${s(15)}px`,
    fontSize: `${s(14)}px`,
    border: `${s(2)}px solid #e5e7eb`,
    borderRadius: `${s(6)}px`,
    outline: 'none',
  },
  checkboxGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: `${s(12)}px`,
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: `${s(14)}px`,
  },
  checkbox: {
    marginRight: `${s(6)}px`,
    cursor: 'pointer',
  },
  checkboxText: {
    color: '#475569',
  },
  clearButton: {
    padding: `${s(8)}px ${s(16)}px`,
    fontSize: `${s(13)}px`,
    fontWeight: 600,
    background: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: `${s(6)}px`,
    cursor: 'pointer',
  },
  
  compact: {
    container: {
      maxWidth: `${s(1200)}px`,
      margin: '0 auto',
      border: `${s(2)}px solid #1e40af`,
    },
    header: {
      background: '#1e40af',
      color: 'white',
      padding: `${s(20)}px ${s(30)}px`,
      textAlign: 'center',
    },
    headerTitle: {
      fontSize: `${s(32)}px`,
      marginBottom: `${s(8)}px`,
      margin: 0,
    },
    headerSubtitle: {
      fontSize: `${s(16)}px`,
      opacity: 0.95,
      margin: 0,
    },
    columns: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0,
    },
    column: {
      padding: `${s(25)}px`,
      borderRight: '1px solid #e5e7eb',
    },
    section: {
      marginBottom: `${s(25)}px`,
    },
    sectionTitle: {
      background: '#3b82f6',
      color: 'white',
      padding: `${s(8)}px ${s(12)}px`,
      fontSize: `${s(14)}px`,
      fontWeight: 600,
      marginBottom: `${s(15)}px`,
      textTransform: 'uppercase',
      letterSpacing: `${s(0.5)}px`,
    },
    rule: {
      marginBottom: `${s(18)}px`,
      paddingBottom: `${s(15)}px`,
      borderBottom: '1px dashed #e5e7eb',
    },
    itemName: {
      fontWeight: 600,
      color: '#1e40af',
      fontSize: `${s(13)}px`,
      marginBottom: `${s(6)}px`,
    },
    formula: {
      fontFamily: 'Times New Roman, serif',
      fontSize: `${s(16)}px`,
      margin: `${s(6)}px 0`,
      padding: `${s(8)}px ${s(12)}px`,
      background: '#f8fafc',
      borderLeft: `${s(3)}px solid #3b82f6`,
    },
    bulletList: {
      margin: `${s(10)}px 0`,
      paddingLeft: `${s(20)}px`,
      fontSize: `${s(13)}px`,
      color: '#1e293b',
      lineHeight: 1.6,
    },
    orderedList: {
      margin: `${s(10)}px 0`,
      paddingLeft: `${s(20)}px`,
      fontSize: `${s(13)}px`,
      color: '#1e293b',
      lineHeight: 1.6,
    },
    codeBlock: {
      background: '#1e293b',
      color: '#e2e8f0',
      padding: `${s(10)}px`,
      borderRadius: `${s(4)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      overflowX: 'auto',
    },
    codePre: {
      margin: 0,
      fontFamily: 'Courier New, monospace',
    },
    definition: {
      background: '#f8fafc',
      borderLeft: `${s(3)}px solid #3b82f6`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
    },
    definitionTerm: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: `${s(4)}px`,
      fontSize: `${s(13)}px`,
    },
    definitionDesc: {
      margin: 0,
      color: '#475569',
      fontSize: `${s(12)}px`,
      lineHeight: 1.5,
    },
    alertInfo: {
      background: '#dbeafe',
      borderLeft: `${s(3)}px solid #3b82f6`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertWarning: {
      background: '#fef3c7',
      borderLeft: `${s(3)}px solid #eab308`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertError: {
      background: '#fee2e2',
      borderLeft: `${s(3)}px solid #ef4444`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertSuccess: {
      background: '#d1fae5',
      borderLeft: `${s(3)}px solid #10b981`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertGray: {
      background: '#f1f5f9',
      borderLeft: `${s(3)}px solid #64748b`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    blockquote: {
      borderLeft: `${s(3)}px solid #cbd5e1`,
      paddingLeft: `${s(15)}px`,
      margin: `${s(8)}px 0`,
      color: '#64748b',
      fontStyle: 'italic',
      fontSize: `${s(12)}px`,
    },
    keyValue: {
      margin: `${s(10)}px 0`,
    },
    keyValueRow: {
      display: 'flex',
      padding: `${s(6)}px 0`,
      borderBottom: '1px solid #e5e7eb',
      fontSize: `${s(12)}px`,
    },
    keyValueKey: {
      fontWeight: 600,
      color: '#1e40af',
      minWidth: `${s(100)}px`,
    },
    keyValueValue: {
      color: '#475569',
      flex: 1,
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: `${s(10)}px`,
      margin: `${s(10)}px 0`,
    },
    twoColumnCol: {
      padding: `${s(10)}px`,
      background: '#f8fafc',
      borderRadius: `${s(4)}px`,
      fontSize: `${s(12)}px`,
    },
    steps: {
      margin: `${s(10)}px 0`,
    },
    step: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: `${s(10)}px`,
    },
    stepNumber: {
      background: '#3b82f6',
      color: 'white',
      width: `${s(24)}px`,
      height: `${s(24)}px`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: `${s(12)}px`,
      marginRight: `${s(10)}px`,
      flexShrink: 0,
    },
    stepContent: {
      color: '#1e293b',
      fontSize: `${s(12)}px`,
      lineHeight: 1.5,
    },
    comparison: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: `${s(10)}px`,
      margin: `${s(10)}px 0`,
    },
    comparisonLeft: {
      padding: `${s(10)}px`,
      background: '#dbeafe',
      border: `${s(2)}px solid #3b82f6`,
      borderRadius: `${s(4)}px`,
      fontSize: `${s(12)}px`,
    },
    comparisonRight: {
      padding: `${s(10)}px`,
      background: '#fef3c7',
      border: `${s(2)}px solid #eab308`,
      borderRadius: `${s(4)}px`,
      fontSize: `${s(12)}px`,
    },
    comparisonTitle: {
      fontWeight: 600,
      marginBottom: `${s(6)}px`,
    },
    highlight: {
      background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
      border: `${s(2)}px solid #3b82f6`,
      padding: `${s(12)}px`,
      borderRadius: `${s(6)}px`,
      margin: `${s(10)}px 0`,
      textAlign: 'center',
      fontWeight: 600,
      color: '#1e40af',
      fontSize: `${s(13)}px`,
    },
    note: {
      fontSize: `${s(12)}px`,
      color: '#64748b',
      fontStyle: 'italic',
      marginTop: `${s(5)}px`,
    },
    visual: {
      margin: `${s(10)}px 0`,
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  
  card: {
    container: {
      maxWidth: `${s(1100)}px`,
      margin: '0 auto',
      background: '#f0f4f8',
      padding: `${s(25)}px`,
    },
    header: {
      textAlign: 'center',
      marginBottom: `${s(30)}px`,
    },
    headerTitle: {
      fontSize: `${s(36)}px`,
      color: '#1e40af',
      marginBottom: `${s(8)}px`,
      margin: 0,
    },
    headerSubtitle: {
      color: '#64748b',
      fontSize: `${s(16)}px`,
      margin: 0,
    },
    category: {
      marginBottom: `${s(30)}px`,
    },
    categoryHeader: {
      background: '#1e40af',
      color: 'white',
      padding: `${s(10)}px ${s(20)}px`,
      fontSize: `${s(18)}px`,
      fontWeight: 600,
      borderRadius: `${s(8)}px ${s(8)}px 0 0`,
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${s(250)}px, 1fr))`,
      gap: `${s(15)}px`,
      background: 'white',
      padding: `${s(20)}px`,
      borderRadius: `0 0 ${s(8)}px ${s(8)}px`,
      boxShadow: `0 ${s(2)}px ${s(4)}px rgba(0,0,0,0.08)`,
    },
    cardBase: {
      background: 'white',
      border: `${s(2)}px solid #e5e7eb`,
      borderRadius: `${s(8)}px`,
      padding: `${s(15)}px`,
      transition: 'all 0.2s',
      cursor: 'default',
    },
    cardTitle: {
      fontWeight: 600,
      color: '#1e293b',
      marginBottom: `${s(10)}px`,
      fontSize: `${s(14)}px`,
    },
    itemName: {
      fontWeight: 600,
      color: '#1e293b',
      marginBottom: `${s(10)}px`,
      fontSize: `${s(14)}px`,
    },
    formula: {
      fontFamily: 'Times New Roman, serif',
      fontSize: `${s(18)}px`,
      textAlign: 'center',
      padding: `${s(12)}px`,
      background: '#f8fafc',
      borderRadius: `${s(6)}px`,
      marginBottom: `${s(8)}px`,
      color: '#1e40af',
    },
    bulletList: {
      margin: `${s(10)}px 0`,
      paddingLeft: `${s(20)}px`,
      fontSize: `${s(13)}px`,
      color: '#1e293b',
      lineHeight: 1.6,
    },
    orderedList: {
      margin: `${s(10)}px 0`,
      paddingLeft: `${s(20)}px`,
      fontSize: `${s(13)}px`,
      color: '#1e293b',
      lineHeight: 1.6,
    },
    codeBlock: {
      background: '#1e293b',
      color: '#e2e8f0',
      padding: `${s(12)}px`,
      borderRadius: `${s(6)}px`,
      margin: `${s(10)}px 0`,
      fontSize: `${s(12)}px`,
      overflowX: 'auto',
    },
    codePre: {
      margin: 0,
      fontFamily: 'Courier New, monospace',
    },
    definition: {
      background: '#f8fafc',
      borderLeft: `${s(3)}px solid #3b82f6`,
      padding: `${s(12)}px`,
      margin: `${s(10)}px 0`,
      borderRadius: `${s(4)}px`,
    },
    definitionTerm: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: `${s(5)}px`,
      fontSize: `${s(13)}px`,
    },
    definitionDesc: {
      margin: 0,
      color: '#475569',
      fontSize: `${s(13)}px`,
      lineHeight: 1.5,
    },
    alertInfo: {
      background: '#dbeafe',
      borderLeft: `${s(3)}px solid #3b82f6`,
      padding: `${s(12)}px`,
      margin: `${s(10)}px 0`,
      fontSize: `${s(13)}px`,
      borderRadius: `${s(6)}px`,
    },
    alertWarning: {
      background: '#fef3c7',
      borderLeft: `${s(3)}px solid #eab308`,
      padding: `${s(12)}px`,
      margin: `${s(10)}px 0`,
      fontSize: `${s(13)}px`,
      borderRadius: `${s(6)}px`,
    },
    alertError: {
      background: '#fee2e2',
      borderLeft: `${s(3)}px solid #ef4444`,
      padding: `${s(12)}px`,
      margin: `${s(10)}px 0`,
      fontSize: `${s(13)}px`,
      borderRadius: `${s(6)}px`,
    },
    alertSuccess: {
      background: '#d1fae5',
      borderLeft: `${s(3)}px solid #10b981`,
      padding: `${s(12)}px`,
      margin: `${s(10)}px 0`,
      fontSize: `${s(13)}px`,
      borderRadius: `${s(6)}px`,
    },
    alertGray: {
      background: '#f1f5f9',
      borderLeft: `${s(3)}px solid #64748b`,
      padding: `${s(12)}px`,
      margin: `${s(10)}px 0`,
      fontSize: `${s(13)}px`,
      borderRadius: `${s(6)}px`,
    },
    blockquote: {
      borderLeft: `${s(3)}px solid #cbd5e1`,
      paddingLeft: `${s(15)}px`,
      margin: `${s(10)}px 0`,
      color: '#64748b',
      fontStyle: 'italic',
      fontSize: `${s(13)}px`,
    },
    keyValue: {
      margin: `${s(10)}px 0`,
    },
    keyValueRow: {
      display: 'flex',
      padding: `${s(8)}px 0`,
      borderBottom: '1px solid #e5e7eb',
      fontSize: `${s(13)}px`,
    },
    keyValueKey: {
      fontWeight: 600,
      color: '#1e40af',
      minWidth: `${s(120)}px`,
    },
    keyValueValue: {
      color: '#475569',
      flex: 1,
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: `${s(12)}px`,
      margin: `${s(10)}px 0`,
    },
    twoColumnCol: {
      padding: `${s(12)}px`,
      background: '#f8fafc',
      borderRadius: `${s(6)}px`,
      fontSize: `${s(13)}px`,
    },
    steps: {
      margin: `${s(10)}px 0`,
    },
    step: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: `${s(12)}px`,
    },
    stepNumber: {
      background: '#3b82f6',
      color: 'white',
      width: `${s(28)}px`,
      height: `${s(28)}px`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: `${s(13)}px`,
      marginRight: `${s(12)}px`,
      flexShrink: 0,
    },
    stepContent: {
      color: '#1e293b',
      fontSize: `${s(13)}px`,
      lineHeight: 1.6,
    },
    comparison: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: `${s(12)}px`,
      margin: `${s(10)}px 0`,
    },
    comparisonLeft: {
      padding: `${s(12)}px`,
      background: '#dbeafe',
      border: `${s(2)}px solid #3b82f6`,
      borderRadius: `${s(6)}px`,
      fontSize: `${s(13)}px`,
    },
    comparisonRight: {
      padding: `${s(12)}px`,
      background: '#fef3c7',
      border: `${s(2)}px solid #eab308`,
      borderRadius: `${s(6)}px`,
      fontSize: `${s(13)}px`,
    },
    comparisonTitle: {
      fontWeight: 600,
      marginBottom: `${s(6)}px`,
    },
    highlight: {
      background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
      border: `${s(2)}px solid #3b82f6`,
      padding: `${s(15)}px`,
      borderRadius: `${s(8)}px`,
      margin: `${s(10)}px 0`,
      textAlign: 'center',
      fontWeight: 600,
      color: '#1e40af',
      fontSize: `${s(14)}px`,
    },
    note: {
      fontSize: `${s(12)}px`,
      color: '#64748b',
      textAlign: 'center',
    },
    visual: {
      margin: `${s(10)}px 0`,
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
    unitCircle: {
      background: 'white',
      padding: `${s(20)}px`,
      borderRadius: `${s(8)}px`,
      boxShadow: `0 ${s(2)}px ${s(4)}px rgba(0,0,0,0.08)`,
      marginTop: `${s(20)}px`,
    },
    unitCircleTitle: {
      color: '#1e40af',
      fontSize: `${s(20)}px`,
      fontWeight: 600,
      marginBottom: `${s(15)}px`,
      textAlign: 'center',
    },
    angleValues: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: `${s(12)}px`,
    },
    angleBox: {
      background: '#f8fafc',
      border: '1px solid #e5e7eb',
      borderRadius: `${s(6)}px`,
      padding: `${s(12)}px`,
      textAlign: 'center',
    },
    angleBoxAngle: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: `${s(6)}px`,
      fontSize: `${s(14)}px`,
    },
    angleBoxValues: {
      fontSize: `${s(12)}px`,
      color: '#475569',
      lineHeight: 1.6,
    },
  },
  
  print: {
    container: {
      maxWidth: `${s(900)}px`,
      margin: '0 auto',
      background: 'white',
      padding: `${s(30)}px ${s(40)}px`,
    },
    header: {
      textAlign: 'center',
      borderBottom: `${s(3)}px solid #1e40af`,
      paddingBottom: `${s(20)}px`,
      marginBottom: `${s(30)}px`,
    },
    headerTitle: {
      fontSize: `${s(32)}px`,
      color: '#1e40af',
      marginBottom: `${s(5)}px`,
      fontWeight: 700,
      margin: 0,
    },
    headerSubtitle: {
      color: '#64748b',
      fontSize: `${s(14)}px`,
      fontStyle: 'italic',
      margin: 0,
    },
    twoColumns: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: `${s(30)}px`,
    },
    section: {
      marginBottom: `${s(25)}px`,
    },
    sectionTitle: {
      color: '#1e40af',
      fontSize: `${s(18)}px`,
      fontWeight: 700,
      borderBottom: `${s(2)}px solid #3b82f6`,
      paddingBottom: `${s(5)}px`,
      marginBottom: `${s(12)}px`,
    },
    topic: {
      marginBottom: `${s(15)}px`,
      padding: `${s(10)}px`,
      background: '#f8fafc',
      borderLeft: `${s(3)}px solid #3b82f6`,
    },
    topicName: {
      fontWeight: 600,
      color: '#1e40af',
      fontSize: `${s(14)}px`,
      marginBottom: `${s(6)}px`,
    },
    itemName: {
      fontWeight: 600,
      color: '#1e40af',
      fontSize: `${s(14)}px`,
      marginBottom: `${s(6)}px`,
    },
    formula: {
      fontFamily: 'Courier New, monospace',
      background: 'white',
      border: '1px solid #cbd5e1',
      padding: `${s(8)}px ${s(12)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(14)}px`,
      textAlign: 'center',
    },
    bulletList: {
      margin: `${s(10)}px 0`,
      paddingLeft: `${s(20)}px`,
      fontSize: `${s(13)}px`,
      color: '#1e293b',
      lineHeight: 1.6,
    },
    orderedList: {
      margin: `${s(10)}px 0`,
      paddingLeft: `${s(20)}px`,
      fontSize: `${s(13)}px`,
      color: '#1e293b',
      lineHeight: 1.6,
    },
    codeBlock: {
      background: '#1e293b',
      color: '#e2e8f0',
      padding: `${s(10)}px`,
      borderRadius: `${s(4)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      overflowX: 'auto',
    },
    codePre: {
      margin: 0,
      fontFamily: 'Courier New, monospace',
    },
    definition: {
      background: '#f8fafc',
      borderLeft: `${s(3)}px solid #3b82f6`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
    },
    definitionTerm: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: `${s(4)}px`,
      fontSize: `${s(13)}px`,
    },
    definitionDesc: {
      margin: 0,
      color: '#475569',
      fontSize: `${s(12)}px`,
      lineHeight: 1.5,
    },
    alertInfo: {
      background: '#dbeafe',
      borderLeft: `${s(3)}px solid #3b82f6`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertWarning: {
      background: '#fef3c7',
      borderLeft: `${s(3)}px solid #eab308`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertError: {
      background: '#fee2e2',
      borderLeft: `${s(3)}px solid #ef4444`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertSuccess: {
      background: '#d1fae5',
      borderLeft: `${s(3)}px solid #10b981`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    alertGray: {
      background: '#f1f5f9',
      borderLeft: `${s(3)}px solid #64748b`,
      padding: `${s(10)}px`,
      margin: `${s(8)}px 0`,
      fontSize: `${s(12)}px`,
      borderRadius: `${s(4)}px`,
    },
    blockquote: {
      borderLeft: `${s(3)}px solid #cbd5e1`,
      paddingLeft: `${s(15)}px`,
      margin: `${s(8)}px 0`,
      color: '#64748b',
      fontStyle: 'italic',
      fontSize: `${s(12)}px`,
    },
    keyValue: {
      margin: `${s(10)}px 0`,
    },
    keyValueRow: {
      display: 'flex',
      padding: `${s(6)}px 0`,
      borderBottom: '1px solid #e5e7eb',
      fontSize: `${s(12)}px`,
    },
    keyValueKey: {
      fontWeight: 600,
      color: '#1e40af',
      minWidth: `${s(100)}px`,
    },
    keyValueValue: {
      color: '#475569',
      flex: 1,
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: `${s(10)}px`,
      margin: `${s(10)}px 0`,
    },
    twoColumnCol: {
      padding: `${s(10)}px`,
      background: '#f8fafc',
      borderRadius: `${s(4)}px`,
      fontSize: `${s(12)}px`,
    },
    steps: {
      margin: `${s(10)}px 0`,
    },
    step: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: `${s(10)}px`,
    },
    stepNumber: {
      background: '#3b82f6',
      color: 'white',
      width: `${s(24)}px`,
      height: `${s(24)}px`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: `${s(12)}px`,
      marginRight: `${s(10)}px`,
      flexShrink: 0,
    },
    stepContent: {
      color: '#1e293b',
      fontSize: `${s(12)}px`,
      lineHeight: 1.5,
    },
    comparison: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: `${s(10)}px`,
      margin: `${s(10)}px 0`,
    },
    comparisonLeft: {
      padding: `${s(10)}px`,
      background: '#dbeafe',
      border: `${s(2)}px solid #3b82f6`,
      borderRadius: `${s(4)}px`,
      fontSize: `${s(12)}px`,
    },
    comparisonRight: {
      padding: `${s(10)}px`,
      background: '#fef3c7',
      border: `${s(2)}px solid #eab308`,
      borderRadius: `${s(4)}px`,
      fontSize: `${s(12)}px`,
    },
    comparisonTitle: {
      fontWeight: 600,
      marginBottom: `${s(6)}px`,
    },
    highlight: {
      background: 'linear-gradient(120deg, #dbeafe 0%, #e0e7ff 100%)',
      border: `${s(2)}px solid #3b82f6`,
      padding: `${s(12)}px`,
      borderRadius: `${s(6)}px`,
      margin: `${s(10)}px 0`,
      textAlign: 'center',
      fontWeight: 600,
      color: '#1e40af',
      fontSize: `${s(13)}px`,
    },
    description: {
      fontSize: `${s(13)}px`,
      color: '#475569',
      marginTop: `${s(5)}px`,
      lineHeight: 1.5,
    },
    example: {
      background: '#fef3c7',
      borderLeft: `${s(3)}px solid #eab308`,
      padding: `${s(8)}px ${s(10)}px`,
      marginTop: `${s(8)}px`,
      fontSize: `${s(12)}px`,
      color: '#1e40af',
    },
    exampleLabel: {
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: `${s(3)}px`,
    },
    visual: {
      margin: `${s(10)}px 0`,
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: `${s(10)}px 0`,
      fontSize: `${s(12)}px`,
    },
    tableHeader: {
      background: '#1e40af',
      color: 'white',
      padding: `${s(6)}px`,
      textAlign: 'left',
    },
    tableCell: {
      border: '1px solid #cbd5e1',
      padding: `${s(6)}px`,
    },
    note: {
      fontSize: `${s(12)}px`,
      color: '#64748b',
      fontStyle: 'italic',
      marginTop: `${s(5)}px`,
    },
  },
};

export default CheatSheet;