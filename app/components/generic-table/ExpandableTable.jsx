// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import styles from './ExpandableTable.module.css';
// // // // // // // // // import { ChevronDown, ChevronRight } from 'lucide-react';

// // // // // // // // // // Sample data structure
// // // // // // // // // const sampleData = [
// // // // // // // // //   {
// // // // // // // // //     id: 1,
// // // // // // // // //     name: "John Doe",
// // // // // // // // //     email: "john@example.com",
// // // // // // // // //     role: "Developer",
// // // // // // // // //     content: {
// // // // // // // // //       profile: {
// // // // // // // // //         bio: "Full-stack developer with 5 years experience",
// // // // // // // // //         skills: ["React", "Node.js", "Python"]
// // // // // // // // //       },
// // // // // // // // //       projects: {
// // // // // // // // //         current: "E-commerce Platform",
// // // // // // // // //         completed: ["CRM System", "Mobile App"]
// // // // // // // // //       },
// // // // // // // // //       performance: {
// // // // // // // // //         rating: 4.8,
// // // // // // // // //         metrics: "Completed 95% of tasks on time"
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 2,
// // // // // // // // //     name: "John Doe",
// // // // // // // // //     email: "john@example.com",
// // // // // // // // //     role: "Developer",
// // // // // // // // //     content: {
// // // // // // // // //       profile: {
// // // // // // // // //         bio: "Full-stack developer with 5 years experience",
// // // // // // // // //         skills: ["React", "Node.js", "Python"]
// // // // // // // // //       },
// // // // // // // // //       projects: {
// // // // // // // // //         current: "E-commerce Platform",
// // // // // // // // //         completed: ["CRM System", "Mobile App"]
// // // // // // // // //       },
// // // // // // // // //       performance: {
// // // // // // // // //         rating: 4.8,
// // // // // // // // //         metrics: "Completed 95% of tasks on time"
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     id: 3,
// // // // // // // // //     name: "John Doe",
// // // // // // // // //     email: "john@example.com",
// // // // // // // // //     role: "Developer",
// // // // // // // // //     content: {
// // // // // // // // //       profile: {
// // // // // // // // //         bio: "Full-stack developer with 5 years experience",
// // // // // // // // //         skills: ["React", "Node.js", "Python"]
// // // // // // // // //       },
// // // // // // // // //       projects: {
// // // // // // // // //         current: "E-commerce Platform",
// // // // // // // // //         completed: ["CRM System", "Mobile App"]
// // // // // // // // //       },
// // // // // // // // //       performance: {
// // // // // // // // //         rating: 4.8,
// // // // // // // // //         metrics: "Completed 95% of tasks on time"
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   }
// // // // // // // // // ];

// // // // // // // // // const ExpandableTable = ({ data = sampleData }) => {
// // // // // // // // //   const [expandedRows, setExpandedRows] = useState(new Set());
// // // // // // // // //   const [activeTab, setActiveTab] = useState({});

// // // // // // // // //   const toggleRow = (id) => {
// // // // // // // // //     const newExpanded = new Set(expandedRows);
// // // // // // // // //     if (newExpanded.has(id)) {
// // // // // // // // //       newExpanded.delete(id);
// // // // // // // // //     } else {
// // // // // // // // //       newExpanded.add(id);
// // // // // // // // //     }
// // // // // // // // //     setExpandedRows(newExpanded);
// // // // // // // // //   };

// // // // // // // // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));
// // // // // // // // //   const contentFields = data[0].content ? Object.keys(data[0].content) : [];

// // // // // // // // //   const handleTabClick = (rowId, tab) => {
// // // // // // // // //     setActiveTab(prev => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [rowId]: tab
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.tableContainer}>
// // // // // // // // //       <table className={styles.table}>
// // // // // // // // //         <thead>
// // // // // // // // //           <tr>
// // // // // // // // //             <th className={styles.iconCell}></th>
// // // // // // // // //             {mainFields.map((field) => (
// // // // // // // // //               <th key={field} className={styles.headerCell}>
// // // // // // // // //                 {field}
// // // // // // // // //               </th>
// // // // // // // // //             ))}
// // // // // // // // //           </tr>
// // // // // // // // //         </thead>
// // // // // // // // //         <tbody>
// // // // // // // // //           {data.map((row) => (
// // // // // // // // //             <React.Fragment key={row.id}>
// // // // // // // // //               <tr 
// // // // // // // // //                 className={styles.tableRow}
// // // // // // // // //                 onClick={() => toggleRow(row.id)}
// // // // // // // // //               >
// // // // // // // // //                 <td className={styles.iconCell}>
// // // // // // // // //                   {expandedRows.has(row.id) ? (
// // // // // // // // //                     <ChevronDown className={styles.icon} />
// // // // // // // // //                   ) : (
// // // // // // // // //                     <ChevronRight className={styles.icon} />
// // // // // // // // //                   )}
// // // // // // // // //                 </td>
// // // // // // // // //                 {mainFields.map((field) => (
// // // // // // // // //                   <td key={field} className={styles.tableCell}>
// // // // // // // // //                     {row[field]}
// // // // // // // // //                   </td>
// // // // // // // // //                 ))}
// // // // // // // // //               </tr>
// // // // // // // // //               {expandedRows.has(row.id) && (
// // // // // // // // //                 <tr>
// // // // // // // // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // // // // // // // //                     <div className={styles.tabContainer}>
// // // // // // // // //                       <div className={styles.tabList}>
// // // // // // // // //                         {contentFields.map((tab) => (
// // // // // // // // //                           <button
// // // // // // // // //                             key={tab}
// // // // // // // // //                             className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // // // // // // // //                             onClick={() => handleTabClick(row.id, tab)}
// // // // // // // // //                           >
// // // // // // // // //                             {tab}
// // // // // // // // //                           </button>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                       <div className={styles.tabContent}>
// // // // // // // // //                         {contentFields.map((tab) => (
// // // // // // // // //                           <div
// // // // // // // // //                             key={tab}
// // // // // // // // //                             className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // // // // // // // //                           >
// // // // // // // // //                             {Object.entries(row.content[tab]).map(([key, value]) => (
// // // // // // // // //                               <div key={key} className={styles.contentItem}>
// // // // // // // // //                                 <div className={styles.contentLabel}>
// // // // // // // // //                                   {key}:
// // // // // // // // //                                 </div>
// // // // // // // // //                                 <div className={styles.contentValue}>
// // // // // // // // //                                   {Array.isArray(value) 
// // // // // // // // //                                     ? value.join(", ")
// // // // // // // // //                                     : value.toString()}
// // // // // // // // //                                 </div>
// // // // // // // // //                               </div>
// // // // // // // // //                             ))}
// // // // // // // // //                           </div>
// // // // // // // // //                         ))}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   </td>
// // // // // // // // //                 </tr>
// // // // // // // // //               )}
// // // // // // // // //             </React.Fragment>
// // // // // // // // //           ))}
// // // // // // // // //         </tbody>
// // // // // // // // //       </table>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ExpandableTable;


// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import styles from './ExpandableTable.module.css';
// // // // // // // // import { ChevronDown, ChevronRight } from 'lucide-react';

// // // // // // // // // Sample data structure remains the same
// // // // // // // // const sampleData = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     name: "John Doe",
// // // // // // // //     email: "john@example.com",
// // // // // // // //     role: "Developer",
// // // // // // // //     content: {
// // // // // // // //       profile: {
// // // // // // // //         bio: "Full-stack developer with 5 years experience",
// // // // // // // //         skills: ["React", "Node.js", "Python"]
// // // // // // // //       },
// // // // // // // //       projects: {
// // // // // // // //         current: "E-commerce Platform",
// // // // // // // //         completed: ["CRM System", "Mobile App"]
// // // // // // // //       },
// // // // // // // //       performance: {
// // // // // // // //         rating: 4.8,
// // // // // // // //         metrics: "Completed 95% of tasks on time"
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   }
// // // // // // // // ];

// // // // // // // // const ExpandableTable = ({ data = sampleData }) => {
// // // // // // // //   const [expandedRows, setExpandedRows] = useState(new Set());
// // // // // // // //   const [activeTab, setActiveTab] = useState({});
// // // // // // // //   const contentFields = data[0].content ? Object.keys(data[0].content) : [];
// // // // // // // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));

// // // // // // // //   // Set initial active tab when row is expanded
// // // // // // // //   useEffect(() => {
// // // // // // // //     expandedRows.forEach(rowId => {
// // // // // // // //       if (!activeTab[rowId]) {
// // // // // // // //         setActiveTab(prev => ({
// // // // // // // //           ...prev,
// // // // // // // //           [rowId]: contentFields[0]
// // // // // // // //         }));
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   }, [expandedRows]);

// // // // // // // //   const toggleRow = (id) => {
// // // // // // // //     const newExpanded = new Set(expandedRows);
// // // // // // // //     if (newExpanded.has(id)) {
// // // // // // // //       newExpanded.delete(id);
// // // // // // // //     } else {
// // // // // // // //       newExpanded.add(id);
// // // // // // // //       // Set initial active tab when expanding
// // // // // // // //       setActiveTab(prev => ({
// // // // // // // //         ...prev,
// // // // // // // //         [id]: contentFields[0]
// // // // // // // //       }));
// // // // // // // //     }
// // // // // // // //     setExpandedRows(newExpanded);
// // // // // // // //   };

// // // // // // // //   const handleTabClick = (rowId, tab) => {
// // // // // // // //     setActiveTab(prev => ({
// // // // // // // //       ...prev,
// // // // // // // //       [rowId]: tab
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.tableContainer}>
// // // // // // // //       <table className={styles.table}>
// // // // // // // //         <thead>
// // // // // // // //           <tr>
// // // // // // // //             <th className={styles.iconCell}></th>
// // // // // // // //             {mainFields.map((field) => (
// // // // // // // //               <th key={field} className={styles.headerCell}>
// // // // // // // //                 {field}
// // // // // // // //               </th>
// // // // // // // //             ))}
// // // // // // // //           </tr>
// // // // // // // //         </thead>
// // // // // // // //         <tbody>
// // // // // // // //           {data.map((row) => (
// // // // // // // //             <React.Fragment key={row.id}>
// // // // // // // //               <tr 
// // // // // // // //                 className={styles.tableRow}
// // // // // // // //                 onClick={() => toggleRow(row.id)}
// // // // // // // //               >
// // // // // // // //                 <td className={styles.iconCell}>
// // // // // // // //                   {expandedRows.has(row.id) ? (
// // // // // // // //                     <ChevronDown className={styles.icon} />
// // // // // // // //                   ) : (
// // // // // // // //                     <ChevronRight className={styles.icon} />
// // // // // // // //                   )}
// // // // // // // //                 </td>
// // // // // // // //                 {mainFields.map((field) => (
// // // // // // // //                   <td key={field} className={styles.tableCell}>
// // // // // // // //                     {row[field]}
// // // // // // // //                   </td>
// // // // // // // //                 ))}
// // // // // // // //               </tr>
// // // // // // // //               {expandedRows.has(row.id) && (
// // // // // // // //                 <tr>
// // // // // // // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // // // // // // //                     <div className={styles.tabContainer}>
// // // // // // // //                       <div className={styles.tabList}>
// // // // // // // //                         {contentFields.map((tab) => (
// // // // // // // //                           <button
// // // // // // // //                             key={tab}
// // // // // // // //                             className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // // // // // // //                             onClick={() => handleTabClick(row.id, tab)}
// // // // // // // //                           >
// // // // // // // //                             {tab}
// // // // // // // //                           </button>
// // // // // // // //                         ))}
// // // // // // // //                       </div>
// // // // // // // //                       <div className={styles.tabContent}>
// // // // // // // //                         {contentFields.map((tab) => (
// // // // // // // //                           <div
// // // // // // // //                             key={tab}
// // // // // // // //                             className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // // // // // // //                           >
// // // // // // // //                             {Object.entries(row.content[tab]).map(([key, value]) => (
// // // // // // // //                               <div key={key} className={styles.contentItem}>
// // // // // // // //                                 <div className={styles.contentLabel}>
// // // // // // // //                                   {key}:
// // // // // // // //                                 </div>
// // // // // // // //                                 <div className={styles.contentValue}>
// // // // // // // //                                   {Array.isArray(value) 
// // // // // // // //                                     ? value.join(", ")
// // // // // // // //                                     : value.toString()}
// // // // // // // //                                 </div>
// // // // // // // //                               </div>
// // // // // // // //                             ))}
// // // // // // // //                           </div>
// // // // // // // //                         ))}
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   </td>
// // // // // // // //                 </tr>
// // // // // // // //               )}
// // // // // // // //             </React.Fragment>
// // // // // // // //           ))}
// // // // // // // //         </tbody>
// // // // // // // //       </table>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ExpandableTable;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import styles from './ExpandableTable.module.css';
// // // // // // // import { ChevronDown, ChevronRight } from 'lucide-react';
// // // // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // // // // Sample data structure remains the same
// // // // // // // const sampleData = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     name: "John Doe",
// // // // // // //     email: "john@example.com",
// // // // // // //     role: "Developer",
// // // // // // //     content: {
// // // // // // //       profile: {
// // // // // // //         bio: "Full-stack developer with 5 years experience",
// // // // // // //         skills: ["React", "Node.js", "Python"]
// // // // // // //       },
// // // // // // //       projects: {
// // // // // // //         current: "E-commerce Platform",
// // // // // // //         completed: ["CRM System", "Mobile App"]
// // // // // // //       },
// // // // // // //       performance: {
// // // // // // //         rating: 4.8,
// // // // // // //         metrics: "Completed 95% of tasks on time"
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }
// // // // // // // ];

// // // // // // // const ExpandableTable = ({ data = sampleData }) => {
// // // // // // //   const [expandedRows, setExpandedRows] = useState(new Set());
// // // // // // //   const [activeTab, setActiveTab] = useState({});
// // // // // // //   const contentFields = data[0].content ? Object.keys(data[0].content) : [];
// // // // // // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));

// // // // // // //   useEffect(() => {
// // // // // // //     expandedRows.forEach(rowId => {
// // // // // // //       if (!activeTab[rowId]) {
// // // // // // //         setActiveTab(prev => ({
// // // // // // //           ...prev,
// // // // // // //           [rowId]: contentFields[0]
// // // // // // //         }));
// // // // // // //       }
// // // // // // //     });
// // // // // // //   }, [expandedRows]);

// // // // // // //   const toggleRow = (id) => {
// // // // // // //     const newExpanded = new Set(expandedRows);
// // // // // // //     if (newExpanded.has(id)) {
// // // // // // //       newExpanded.delete(id);
// // // // // // //     } else {
// // // // // // //       newExpanded.add(id);
// // // // // // //       setActiveTab(prev => ({
// // // // // // //         ...prev,
// // // // // // //         [id]: contentFields[0]
// // // // // // //       }));
// // // // // // //     }
// // // // // // //     setExpandedRows(newExpanded);
// // // // // // //   };

// // // // // // //   const handleTabClick = (rowId, tab) => {
// // // // // // //     setActiveTab(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [rowId]: tab
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   // Function to handle array or string values
// // // // // // //   const formatValue = (value) => {
// // // // // // //     if (Array.isArray(value)) {
// // // // // // //       return value.join(", ");
// // // // // // //     }
// // // // // // //     return String(value);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={styles.tableContainer}>
// // // // // // //       <table className={styles.table}>
// // // // // // //         <thead>
// // // // // // //           <tr>
// // // // // // //             <th className={styles.iconCell}></th>
// // // // // // //             {mainFields.map((field) => (
// // // // // // //               <th key={field} className={styles.headerCell}>
// // // // // // //                 {processContent(field)}
// // // // // // //               </th>
// // // // // // //             ))}
// // // // // // //           </tr>
// // // // // // //         </thead>
// // // // // // //         <tbody>
// // // // // // //           {data.map((row) => (
// // // // // // //             <React.Fragment key={row.id}>
// // // // // // //               <tr 
// // // // // // //                 className={styles.tableRow}
// // // // // // //                 onClick={() => toggleRow(row.id)}
// // // // // // //               >
// // // // // // //                 <td className={styles.iconCell}>
// // // // // // //                   {expandedRows.has(row.id) ? (
// // // // // // //                     <ChevronDown className={styles.icon} />
// // // // // // //                   ) : (
// // // // // // //                     <ChevronRight className={styles.icon} />
// // // // // // //                   )}
// // // // // // //                 </td>
// // // // // // //                 {mainFields.map((field) => (
// // // // // // //                   <td key={field} className={styles.tableCell}>
// // // // // // //                     {processContent(formatValue(row[field]))}
// // // // // // //                   </td>
// // // // // // //                 ))}
// // // // // // //               </tr>
// // // // // // //               {expandedRows.has(row.id) && (
// // // // // // //                 <tr>
// // // // // // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // // // // // //                     <div className={styles.tabContainer}>
// // // // // // //                       <div className={styles.tabList}>
// // // // // // //                         {contentFields.map((tab) => (
// // // // // // //                           <button
// // // // // // //                             key={tab}
// // // // // // //                             className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // // // // // //                             onClick={() => handleTabClick(row.id, tab)}
// // // // // // //                           >
// // // // // // //                             {processContent(tab)}
// // // // // // //                           </button>
// // // // // // //                         ))}
// // // // // // //                       </div>
// // // // // // //                       <div className={styles.tabContent}>
// // // // // // //                         {contentFields.map((tab) => (
// // // // // // //                           <div
// // // // // // //                             key={tab}
// // // // // // //                             className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // // // // // //                           >
// // // // // // //                             {Object.entries(row.content[tab]).map(([key, value]) => (
// // // // // // //                               <div key={key} className={styles.contentItem}>
// // // // // // //                                 <div className={styles.contentLabel}>
// // // // // // //                                   {processContent(key)}:
// // // // // // //                                 </div>
// // // // // // //                                 <div className={styles.contentValue}>
// // // // // // //                                   {processContent(formatValue(value))}
// // // // // // //                                 </div>
// // // // // // //                               </div>
// // // // // // //                             ))}
// // // // // // //                           </div>
// // // // // // //                         ))}
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </td>
// // // // // // //                 </tr>
// // // // // // //               )}
// // // // // // //             </React.Fragment>
// // // // // // //           ))}
// // // // // // //         </tbody>
// // // // // // //       </table>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ExpandableTable;

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import styles from './ExpandableTable.module.css';
// // // // // // import { ChevronDown, ChevronRight } from 'lucide-react';
// // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // const ExpandableTable = ({ data }) => {
// // // // // //   const [expandedRows, setExpandedRows] = useState(new Set());
// // // // // //   const [activeTab, setActiveTab] = useState({});
  
// // // // // //   // Get fields excluding 'content' and 'id'
// // // // // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));

// // // // // //   const toggleRow = (id) => {
// // // // // //     const newExpanded = new Set(expandedRows);
// // // // // //     if (newExpanded.has(id)) {
// // // // // //       newExpanded.delete(id);
// // // // // //     } else {
// // // // // //       newExpanded.add(id);
// // // // // //       // Only set active tab if content is an object with properties
// // // // // //       const rowContent = data.find(row => row.id === id)?.content;
// // // // // //       if (rowContent && typeof rowContent === 'object' && Object.keys(rowContent).length > 0) {
// // // // // //         setActiveTab(prev => ({
// // // // // //           ...prev,
// // // // // //           [id]: Object.keys(rowContent)[0]
// // // // // //         }));
// // // // // //       }
// // // // // //     }
// // // // // //     setExpandedRows(newExpanded);
// // // // // //   };

// // // // // //   const handleTabClick = (rowId, tab) => {
// // // // // //     setActiveTab(prev => ({
// // // // // //       ...prev,
// // // // // //       [rowId]: tab
// // // // // //     }));
// // // // // //   };

// // // // // //   // Helper function to check if row is expandable
// // // // // //   const isExpandable = (row) => {
// // // // // //     return row.hasOwnProperty('content') && row.content !== null && row.content !== undefined;
// // // // // //   };

// // // // // //   // Helper function to check if content should have tabs
// // // // // //   const shouldHaveTabs = (content) => {
// // // // // //     return typeof content === 'object' && content !== null && Object.keys(content).length > 0;
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.tableContainer}>
// // // // // //       <table className={styles.table}>
// // // // // //         <thead>
// // // // // //           <tr>
// // // // // //             <th className={styles.iconCell}></th>
// // // // // //             {mainFields.map((field) => (
// // // // // //               <th key={field} className={styles.headerCell}>
// // // // // //                 {processContent(field)}
// // // // // //               </th>
// // // // // //             ))}
// // // // // //           </tr>
// // // // // //         </thead>
// // // // // //         <tbody>
// // // // // //           {data.map((row) => (
// // // // // //             <React.Fragment key={row.id}>
// // // // // //               <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
// // // // // //                 <td className={styles.iconCell}>
// // // // // //                   {isExpandable(row) && (
// // // // // //                     <span onClick={() => toggleRow(row.id)}>
// // // // // //                       {expandedRows.has(row.id) ? (
// // // // // //                         <ChevronDown className={styles.icon} />
// // // // // //                       ) : (
// // // // // //                         <ChevronRight className={styles.icon} />
// // // // // //                       )}
// // // // // //                     </span>
// // // // // //                   )}
// // // // // //                 </td>
// // // // // //                 {mainFields.map((field) => (
// // // // // //                   <td 
// // // // // //                     key={field} 
// // // // // //                     className={styles.tableCell}
// // // // // //                     onClick={() => isExpandable(row) && toggleRow(row.id)}
// // // // // //                   >
// // // // // //                     {processContent(row[field]?.toString() || '')}
// // // // // //                   </td>
// // // // // //                 ))}
// // // // // //               </tr>
// // // // // //               {isExpandable(row) && expandedRows.has(row.id) && (
// // // // // //                 <tr>
// // // // // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // // // // //                     {shouldHaveTabs(row.content) ? (
// // // // // //                       // Tabbed content
// // // // // //                       <div className={styles.tabContainer}>
// // // // // //                         <div className={styles.tabList}>
// // // // // //                           {Object.keys(row.content).map((tab) => (
// // // // // //                             <button
// // // // // //                               key={tab}
// // // // // //                               className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // // // // //                               onClick={() => handleTabClick(row.id, tab)}
// // // // // //                             >
// // // // // //                               {processContent(tab)}
// // // // // //                             </button>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                         <div className={styles.tabContent}>
// // // // // //                           {Object.keys(row.content).map((tab) => (
// // // // // //                             <div
// // // // // //                               key={tab}
// // // // // //                               className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // // // // //                             >
// // // // // //                               {Object.entries(row.content[tab]).map(([key, value]) => (
// // // // // //                                 <div key={key} className={styles.contentItem}>
// // // // // //                                   <div className={styles.contentLabel}>
// // // // // //                                     {processContent(key)}:
// // // // // //                                   </div>
// // // // // //                                   <div className={styles.contentValue}>
// // // // // //                                     {processContent(Array.isArray(value) ? value.join(", ") : value.toString())}
// // // // // //                                   </div>
// // // // // //                                 </div>
// // // // // //                               ))}
// // // // // //                             </div>
// // // // // //                           ))}
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     ) : (
// // // // // //                       // Simple content
// // // // // //                       <div className={styles.simpleContent}>
// // // // // //                         {processContent(row.content.toString())}
// // // // // //                       </div>
// // // // // //                     )}
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               )}
// // // // // //             </React.Fragment>
// // // // // //           ))}
// // // // // //         </tbody>
// // // // // //       </table>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ExpandableTable;

// // // // // import React, { useState } from 'react';
// // // // // import styles from './ExpandableTable.module.css';
// // // // // import { ChevronDown, ChevronRight } from 'lucide-react';
// // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // const ExpandableTable = ({ data }) => {
// // // // //   const [expandedRowId, setExpandedRowId] = useState(null);
// // // // //   const [activeTab, setActiveTab] = useState({});
  
// // // // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));

// // // // //   const toggleRow = (id) => {
// // // // //     // If clicking the same row, close it
// // // // //     if (expandedRowId === id) {
// // // // //       setExpandedRowId(null);
// // // // //     } else {
// // // // //       // If clicking a different row, close the current one and open the new one
// // // // //       setExpandedRowId(id);
      
// // // // //       // Set active tab for the new expanded row if it has complex content
// // // // //       const rowContent = data.find(row => row.id === id)?.content;
// // // // //       if (rowContent && typeof rowContent === 'object' && Object.keys(rowContent).length > 0) {
// // // // //         setActiveTab(prev => ({
// // // // //           ...prev,
// // // // //           [id]: Object.keys(rowContent)[0]
// // // // //         }));
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const handleTabClick = (rowId, tab) => {
// // // // //     setActiveTab(prev => ({
// // // // //       ...prev,
// // // // //       [rowId]: tab
// // // // //     }));
// // // // //   };

// // // // //   const isExpandable = (row) => {
// // // // //     return row.hasOwnProperty('content') && row.content !== null && row.content !== undefined;
// // // // //   };

// // // // //   const shouldHaveTabs = (content) => {
// // // // //     return typeof content === 'object' && content !== null && Object.keys(content).length > 0;
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.tableContainer}>
// // // // //       <table className={styles.table}>
// // // // //         <thead>
// // // // //           <tr>
// // // // //             <th className={styles.iconCell}></th>
// // // // //             {mainFields.map((field) => (
// // // // //               <th key={field} className={styles.headerCell}>
// // // // //                 {processContent(field)}
// // // // //               </th>
// // // // //             ))}
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           {data.map((row) => (
// // // // //             <React.Fragment key={row.id}>
// // // // //               <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
// // // // //                 <td className={styles.iconCell}>
// // // // //                   {isExpandable(row) && (
// // // // //                     <span onClick={() => toggleRow(row.id)}>
// // // // //                       {expandedRowId === row.id ? (
// // // // //                         <ChevronDown className={styles.icon} />
// // // // //                       ) : (
// // // // //                         <ChevronRight className={styles.icon} />
// // // // //                       )}
// // // // //                     </span>
// // // // //                   )}
// // // // //                 </td>
// // // // //                 {mainFields.map((field) => (
// // // // //                   <td 
// // // // //                     key={field} 
// // // // //                     className={styles.tableCell}
// // // // //                     onClick={() => isExpandable(row) && toggleRow(row.id)}
// // // // //                   >
// // // // //                     {processContent(row[field]?.toString() || '')}
// // // // //                   </td>
// // // // //                 ))}
// // // // //               </tr>
// // // // //               {isExpandable(row) && expandedRowId === row.id && (
// // // // //                 <tr>
// // // // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // // // //                     {shouldHaveTabs(row.content) ? (
// // // // //                       <div className={styles.tabContainer}>
// // // // //                         <div className={styles.tabList}>
// // // // //                           {Object.keys(row.content).map((tab) => (
// // // // //                             <button
// // // // //                               key={tab}
// // // // //                               className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // // // //                               onClick={() => handleTabClick(row.id, tab)}
// // // // //                             >
// // // // //                               {processContent(tab)}
// // // // //                             </button>
// // // // //                           ))}
// // // // //                         </div>
// // // // //                         <div className={styles.tabContent}>
// // // // //                           {Object.keys(row.content).map((tab) => (
// // // // //                             <div
// // // // //                               key={tab}
// // // // //                               className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // // // //                             >
// // // // //                               {Object.entries(row.content[tab]).map(([key, value]) => (
// // // // //                                 <div key={key} className={styles.contentItem}>
// // // // //                                   <div className={styles.contentLabel}>
// // // // //                                     {processContent(key)}:
// // // // //                                   </div>
// // // // //                                   <div className={styles.contentValue}>
// // // // //                                     {processContent(Array.isArray(value) ? value.join(", ") : value.toString())}
// // // // //                                   </div>
// // // // //                                 </div>
// // // // //                               ))}
// // // // //                             </div>
// // // // //                           ))}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     ) : (
// // // // //                       <div className={styles.simpleContent}>
// // // // //                         {processContent(row.content.toString())}
// // // // //                       </div>
// // // // //                     )}
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               )}
// // // // //             </React.Fragment>
// // // // //           ))}
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ExpandableTable;

// // // // import React, { useState } from 'react';
// // // // import styles from './ExpandableTable.module.css';
// // // // import { ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
// // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // const ExpandableTable = ({ 
// // // //   data,
// // // //   copyableFields = [] 
// // // // }) => {
// // // //   const [expandedRowId, setExpandedRowId] = useState(null);
// // // //   const [activeTab, setActiveTab] = useState({});
// // // //   const [copiedStates, setCopiedStates] = useState({});
  
// // // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));

// // // //   const handleCopy = async (content, fieldName, rowId) => {
// // // //     try {
// // // //       await navigator.clipboard.writeText(content);
// // // //       const stateKey = `${rowId}-${fieldName}`;
// // // //       setCopiedStates(prev => ({
// // // //         ...prev,
// // // //         [stateKey]: true
// // // //       }));
// // // //       setTimeout(() => {
// // // //         setCopiedStates(prev => ({
// // // //           ...prev,
// // // //           [stateKey]: false
// // // //         }));
// // // //       }, 2000);
// // // //     } catch (err) {
// // // //       console.error('Failed to copy:', err);
// // // //     }
// // // //   };

// // // //   const toggleRow = (id) => {
// // // //     if (expandedRowId === id) {
// // // //       setExpandedRowId(null);
// // // //     } else {
// // // //       setExpandedRowId(id);
// // // //       const rowContent = data.find(row => row.id === id)?.content;
// // // //       if (rowContent && typeof rowContent === 'object' && Object.keys(rowContent).length > 0) {
// // // //         setActiveTab(prev => ({
// // // //           ...prev,
// // // //           [id]: Object.keys(rowContent)[0]
// // // //         }));
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleTabClick = (rowId, tab) => {
// // // //     setActiveTab(prev => ({
// // // //       ...prev,
// // // //       [rowId]: tab
// // // //     }));
// // // //   };

// // // //   const isExpandable = (row) => {
// // // //     return row.hasOwnProperty('content') && row.content !== null && row.content !== undefined;
// // // //   };

// // // //   const shouldHaveTabs = (content) => {
// // // //     return typeof content === 'object' && content !== null && Object.keys(content).length > 0;
// // // //   };

// // // //   return (
// // // //     <div className={styles.tableContainer}>
// // // //       <table className={styles.table}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th className={styles.iconCell}></th>
// // // //             {mainFields.map((field) => (
// // // //               <th key={field} className={styles.headerCell}>
// // // //                 {processContent(field)}
// // // //               </th>
// // // //             ))}
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {data.map((row) => (
// // // //             <React.Fragment key={row.id}>
// // // //               <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
// // // //                 <td className={styles.iconCell}>
// // // //                   {isExpandable(row) && (
// // // //                     <span onClick={() => toggleRow(row.id)}>
// // // //                       {expandedRowId === row.id ? (
// // // //                         <ChevronDown className={styles.icon} />
// // // //                       ) : (
// // // //                         <ChevronRight className={styles.icon} />
// // // //                       )}
// // // //                     </span>
// // // //                   )}
// // // //                 </td>
// // // //                 {mainFields.map((field) => {
// // // //                   const stateKey = `${row.id}-${field}`;
// // // //                   const isCopied = copiedStates[stateKey];
                  
// // // //                   return (
// // // //                     <td 
// // // //                       key={field} 
// // // //                       className={`${styles.tableCell} ${copyableFields.includes(field) ? styles.copyableCell : ''}`}
// // // //                       onClick={(e) => {
// // // //                         if (e.target.closest(`.${styles.copyButton}`)) return;
// // // //                         isExpandable(row) && toggleRow(row.id);
// // // //                       }}
// // // //                     >
// // // //                       <div className={styles.cellContent}>
// // // //                         {processContent(row[field]?.toString() || '')}
// // // //                         {copyableFields.includes(field) && (
// // // //                           <button
// // // //                             className={`${styles.copyButton} ${isCopied ? styles.copied : ''}`}
// // // //                             onClick={() => handleCopy(row[field]?.toString() || '', field, row.id)}
// // // //                             title="Copy to clipboard"
// // // //                           >
// // // //                             {isCopied ? (
// // // //                               <Check className={styles.copyIcon} />
// // // //                             ) : (
// // // //                               <Copy className={styles.copyIcon} />
// // // //                             )}
// // // //                           </button>
// // // //                         )}
// // // //                       </div>
// // // //                     </td>
// // // //                   );
// // // //                 })}
// // // //               </tr>
// // // //               {isExpandable(row) && expandedRowId === row.id && (
// // // //                 <tr>
// // // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // // //                     {shouldHaveTabs(row.content) ? (
// // // //                       <div className={styles.tabContainer}>
// // // //                         <div className={styles.tabList}>
// // // //                           {Object.keys(row.content).map((tab) => (
// // // //                             <button
// // // //                               key={tab}
// // // //                               className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // // //                               onClick={() => handleTabClick(row.id, tab)}
// // // //                             >
// // // //                               {processContent(tab)}
// // // //                             </button>
// // // //                           ))}
// // // //                         </div>
// // // //                         <div className={styles.tabContent}>
// // // //                           {Object.keys(row.content).map((tab) => (
// // // //                             <div
// // // //                               key={tab}
// // // //                               className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // // //                             >
// // // //                               {Object.entries(row.content[tab]).map(([key, value]) => (
// // // //                                 <div key={key} className={styles.contentItem}>
// // // //                                   <div className={styles.contentLabel}>
// // // //                                     {processContent(key)}:
// // // //                                   </div>
// // // //                                   <div className={styles.contentValue}>
// // // //                                     {processContent(Array.isArray(value) ? value.join(", ") : value.toString())}
// // // //                                   </div>
// // // //                                 </div>
// // // //                               ))}
// // // //                             </div>
// // // //                           ))}
// // // //                         </div>
// // // //                       </div>
// // // //                     ) : (
// // // //                       <div className={styles.simpleContent}>
// // // //                         {processContent(row.content.toString())}
// // // //                       </div>
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //               )}
// // // //             </React.Fragment>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ExpandableTable;

// // // // import React, { useState } from 'react';
// // // // import styles from './ExpandableTable.module.css';
// // // // import { ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';

// // // // const ExpandableTable = ({ data, copyableFields = [] }) => {
// // // //   const [expandedRowId, setExpandedRowId] = useState(null);
// // // //   const [activeTab, setActiveTab] = useState({});
// // // //   const [copiedStates, setCopiedStates] = useState({});
  
// // // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));

// // // //   const handleCopy = async (content, fieldName, rowId) => {
// // // //     try {
// // // //       await navigator.clipboard.writeText(content);
// // // //       const stateKey = `${rowId}-${fieldName}`;
// // // //       setCopiedStates(prev => ({
// // // //         ...prev,
// // // //         [stateKey]: true
// // // //       }));
// // // //       setTimeout(() => {
// // // //         setCopiedStates(prev => ({
// // // //           ...prev,
// // // //           [stateKey]: false
// // // //         }));
// // // //       }, 2000);
// // // //     } catch (err) {
// // // //       console.error('Failed to copy:', err);
// // // //     }
// // // //   };

// // // //   const toggleRow = (id) => {
// // // //     if (expandedRowId === id) {
// // // //       setExpandedRowId(null);
// // // //     } else {
// // // //       setExpandedRowId(id);
// // // //       const rowContent = data.find(row => row.id === id)?.content;
// // // //       if (rowContent && typeof rowContent === 'object' && Object.keys(rowContent).length > 0) {
// // // //         setActiveTab(prev => ({
// // // //           ...prev,
// // // //           [id]: Object.keys(rowContent)[0]
// // // //         }));
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleTabClick = (rowId, tab) => {
// // // //     setActiveTab(prev => ({
// // // //       ...prev,
// // // //       [rowId]: tab
// // // //     }));
// // // //   };

// // // //   const isExpandable = (row) => {
// // // //     return row.hasOwnProperty('content') && row.content !== null && row.content !== undefined;
// // // //   };

// // // //   const shouldHaveTabs = (content) => {
// // // //     return typeof content === 'object' && content !== null && Object.keys(content).length > 0;
// // // //   };

// // // //   return (
// // // //     <div className={styles.tableContainer}>
// // // //       <table className={styles.table}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th className={styles.iconCell}></th>
// // // //             {mainFields.map((field) => (
// // // //               <th key={field} className={styles.headerCell}>
// // // //                 {field}
// // // //               </th>
// // // //             ))}
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {data.map((row) => (
// // // //             <React.Fragment key={row.id}>
// // // //               <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
// // // //                 <td className={styles.iconCell}>
// // // //                   {isExpandable(row) && (
// // // //                    <span onClick={() => toggleRow(row.id)}>
// // // //                    {expandedRowId === row.id ? (
// // // //                      <ChevronDown className={styles.icon} />
// // // //                    ) : (
// // // //                      <ChevronRight className={styles.icon} />
// // // //                    )}
// // // //                  </span>
// // // //                   )}
// // // //                 </td>
// // // //                 {mainFields.map((field) => (
// // // //                   <td 
// // // //                     key={field} 
// // // //                     className={styles.tableCell}
// // // //                     onClick={(e) => {
// // // //                       if (e.target.tagName === 'BUTTON') return;
// // // //                       isExpandable(row) && toggleRow(row.id);
// // // //                     }}
// // // //                   >
// // // //                     <div className={styles.cellContent}>
// // // //                       <span>{row[field]?.toString() || ''}</span>
// // // //                       {copyableFields.includes(field) && (
// // // //                         <button
// // // //                           className={`${styles.copyButton} ${copiedStates[`${row.id}-${field}`] ? styles.copied : ''}`}
// // // //                           onClick={() => handleCopy(row[field]?.toString() || '', field, row.id)}
// // // //                         >
// // // //                           {copiedStates[`${row.id}-${field}`] ? '✓' : 'Copy'}
// // // //                         </button>
// // // //                       )}
// // // //                     </div>
// // // //                   </td>
// // // //                 ))}
// // // //               </tr>
// // // //               {isExpandable(row) && expandedRowId === row.id && (
// // // //                 <tr>
// // // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // // //                     {shouldHaveTabs(row.content) ? (
// // // //                       <div className={styles.tabContainer}>
// // // //                         <div className={styles.tabList}>
// // // //                           {Object.keys(row.content).map((tab) => (
// // // //                             <button
// // // //                               key={tab}
// // // //                               className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // // //                               onClick={() => handleTabClick(row.id, tab)}
// // // //                             >
// // // //                               {tab}
// // // //                             </button>
// // // //                           ))}
// // // //                         </div>
// // // //                         <div className={styles.tabContent}>
// // // //                           {Object.keys(row.content).map((tab) => (
// // // //                             <div
// // // //                               key={tab}
// // // //                               className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // // //                             >
// // // //                               {Object.entries(row.content[tab]).map(([key, value]) => (
// // // //                                 <div key={key} className={styles.contentItem}>
// // // //                                   <div className={styles.contentLabel}>
// // // //                                     {key}:
// // // //                                   </div>
// // // //                                   <div className={styles.contentValue}>
// // // //                                     {Array.isArray(value) ? value.join(", ") : value.toString()}
// // // //                                   </div>
// // // //                                 </div>
// // // //                               ))}
// // // //                             </div>
// // // //                           ))}
// // // //                         </div>
// // // //                       </div>
// // // //                     ) : (
// // // //                       <div className={styles.simpleContent}>
// // // //                         {row.content.toString()}
// // // //                       </div>
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //               )}
// // // //             </React.Fragment>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ExpandableTable;

// // // import React, { useState } from 'react';
// // // import styles from './ExpandableTable.module.css';
// // // import { ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
// // // import { processContent } from '@/app/utils/contentProcessor';

// // // const ExpandableTable = ({ data, copyableFields = [] }) => {
// // //   const [expandedRowId, setExpandedRowId] = useState(null);
// // //   const [activeTab, setActiveTab] = useState({});
// // //   const [copiedStates, setCopiedStates] = useState({});
  
// // //   const mainFields = Object.keys(data[0]).filter(key => !['content', 'id'].includes(key));

// // //   const handleCopy = async (content, fieldName, rowId) => {
// // //     try {
// // //       await navigator.clipboard.writeText(content);
// // //       const stateKey = `${rowId}-${fieldName}`;
// // //       setCopiedStates(prev => ({
// // //         ...prev,
// // //         [stateKey]: true
// // //       }));
// // //       setTimeout(() => {
// // //         setCopiedStates(prev => ({
// // //           ...prev,
// // //           [stateKey]: false
// // //         }));
// // //       }, 2000);
// // //     } catch (err) {
// // //       console.error('Failed to copy:', err);
// // //     }
// // //   };

// // //   const toggleRow = (id) => {
// // //     if (expandedRowId === id) {
// // //       setExpandedRowId(null);
// // //     } else {
// // //       setExpandedRowId(id);
// // //       const rowContent = data.find(row => row.id === id)?.content;
// // //       if (rowContent && typeof rowContent === 'object' && Object.keys(rowContent).length > 0) {
// // //         setActiveTab(prev => ({
// // //           ...prev,
// // //           [id]: Object.keys(rowContent)[0]
// // //         }));
// // //       }
// // //     }
// // //   };

// // //   const handleTabClick = (rowId, tab) => {
// // //     setActiveTab(prev => ({
// // //       ...prev,
// // //       [rowId]: tab
// // //     }));
// // //   };

// // //   const isExpandable = (row) => {
// // //     return row.hasOwnProperty('content') && row.content !== null && row.content !== undefined;
// // //   };

// // //   const shouldHaveTabs = (content) => {
// // //     return typeof content === 'object' && content !== null && Object.keys(content).length > 0;
// // //   };

// // //   return (
// // //     <div className={styles.tableContainer}>
// // //       <table className={styles.table}>
// // //         <thead>
// // //           <tr>
// // //             <th className={styles.iconCell}></th>
// // //             {mainFields.map((field) => (
// // //               <th key={field} className={styles.headerCell}>
// // //                 {processContent(field)}
// // //               </th>
// // //             ))}
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {data.map((row) => (
// // //             <React.Fragment key={row.id}>
// // //               <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
// // //                 <td className={styles.iconCell}>
// // //                   {isExpandable(row) && (
// // //                    <span onClick={() => toggleRow(row.id)}>
// // //                    {expandedRowId === row.id ? (
// // //                      <ChevronDown className={styles.icon} />
// // //                    ) : (
// // //                      <ChevronRight className={styles.icon} />
// // //                    )}
// // //                  </span>
// // //                   )}
// // //                 </td>
// // //                 {mainFields.map((field) => (
// // //                   <td 
// // //                     key={field} 
// // //                     className={styles.tableCell}
// // //                     onClick={(e) => {
// // //                       if (e.target.tagName === 'BUTTON') return;
// // //                       isExpandable(row) && toggleRow(row.id);
// // //                     }}
// // //                   >
// // //                     <div className={styles.cellContent}>
// // //                       <span>{processContent(row[field]?.toString() || '')}</span>
// // //                       {copyableFields.includes(field) && (
// // //                         <button
// // //                           className={`${styles.copyButton} ${copiedStates[`${row.id}-${field}`] ? styles.copied : ''}`}
// // //                           onClick={() => handleCopy(row[field]?.toString() || '', field, row.id)}
// // //                         >
// // //                           {copiedStates[`${row.id}-${field}`] ? '✓' : 'Copy'}
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   </td>
// // //                 ))}
// // //               </tr>
// // //               {isExpandable(row) && expandedRowId === row.id && (
// // //                 <tr>
// // //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// // //                     {shouldHaveTabs(row.content) ? (
// // //                       <div className={styles.tabContainer}>
// // //                         <div className={styles.tabList}>
// // //                           {Object.keys(row.content).map((tab) => (
// // //                             <button
// // //                               key={tab}
// // //                               className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// // //                               onClick={() => handleTabClick(row.id, tab)}
// // //                             >
// // //                               {processContent(tab)}
// // //                             </button>
// // //                           ))}
// // //                         </div>
// // //                         <div className={styles.tabContent}>
// // //                           {Object.keys(row.content).map((tab) => (
// // //                             <div
// // //                               key={tab}
// // //                               className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// // //                             >
// // //                               {Object.entries(row.content[tab]).map(([key, value]) => (
// // //                                 <div key={key} className={styles.contentItem}>
// // //                                   <div className={styles.contentLabel}>
// // //                                     {processContent(key)}:
// // //                                   </div>
// // //                                   <div className={styles.contentValue}>
// // //                                     {processContent(Array.isArray(value) ? value.join(", ") : value.toString())}
// // //                                   </div>
// // //                                 </div>
// // //                               ))}
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     ) : (
// // //                       <div className={styles.simpleContent}>
// // //                         {processContent(row.content.toString())}
// // //                       </div>
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </React.Fragment>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default ExpandableTable;

// // import React, { useState } from 'react';
// // import styles from './ExpandableTable.module.css';
// // import { ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const ExpandableTable = ({ 
// //   data, 
// //   copyableFields = [],
// //   nestedCopyableFields = [],
// //   excludedFields = []
// // }) => {
// //   const [expandedRowId, setExpandedRowId] = useState(null);
// //   const [activeTab, setActiveTab] = useState({});
// //   const [copiedStates, setCopiedStates] = useState({});
  
// //   const mainFields = Object.keys(data[0]).filter(key => 
// //     !['content', 'id'].includes(key) && 
// //     !excludedFields.includes(key)
// //   );

// //   const filterNestedFields = (content) => {
// //     if (!content) return {};
// //     return Object.keys(content).reduce((acc, key) => {
// //       if (!excludedFields.includes(key)) {
// //         acc[key] = content[key];
// //       }
// //       return acc;
// //     }, {});
// //   };

// //   const handleCopy = async (content, fieldName, rowId) => {
// //     try {
// //       await navigator.clipboard.writeText(content);
// //       const stateKey = `${rowId}-${fieldName}`;
// //       setCopiedStates(prev => ({
// //         ...prev,
// //         [stateKey]: true
// //       }));
// //       setTimeout(() => {
// //         setCopiedStates(prev => ({
// //           ...prev,
// //           [stateKey]: false
// //         }));
// //       }, 2000);
// //     } catch (err) {
// //       console.error('Failed to copy:', err);
// //     }
// //   };

// //   const toggleRow = (id) => {
// //     if (expandedRowId === id) {
// //       setExpandedRowId(null);
// //     } else {
// //       setExpandedRowId(id);
// //       const rowContent = data.find(row => row.id === id)?.content;
// //       if (rowContent && typeof rowContent === 'object' && Object.keys(rowContent).length > 0) {
// //         setActiveTab(prev => ({
// //           ...prev,
// //           [id]: Object.keys(rowContent)[0]
// //         }));
// //       }
// //     }
// //   };

// //   const handleTabClick = (rowId, tab) => {
// //     setActiveTab(prev => ({
// //       ...prev,
// //       [rowId]: tab
// //     }));
// //   };

// //   const isExpandable = (row) => {
// //     return row.hasOwnProperty('content') && row.content !== null && row.content !== undefined;
// //   };

// //   const shouldHaveTabs = (content) => {
// //     return typeof content === 'object' && content !== null && Object.keys(content).length > 0;
// //   };

// //   return (
// //     <div className={styles.tableContainer}>
// //       <table className={styles.table}>
// //         <thead>
// //           <tr>
// //             <th className={styles.iconCell}></th>
// //             {mainFields.map((field) => (
// //               <th key={field} className={styles.headerCell}>
// //                 {processContent(field)}
// //               </th>
// //             ))}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((row) => (
// //             <React.Fragment key={row.id}>
// //               <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
// //                 <td className={styles.iconCell}>
// //                   {isExpandable(row) && (
// //                    <span onClick={() => toggleRow(row.id)}>
// //                    {expandedRowId === row.id ? (
// //                      <ChevronDown className={styles.icon} />
// //                    ) : (
// //                      <ChevronRight className={styles.icon} />
// //                    )}
// //                  </span>
// //                   )}
// //                 </td>
// //                 {mainFields.map((field) => (
// //                   <td 
// //                     key={field} 
// //                     className={styles.tableCell}
// //                     onClick={(e) => {
// //                       if (e.target.tagName === 'BUTTON') return;
// //                       isExpandable(row) && toggleRow(row.id);
// //                     }}
// //                   >
// //                     <div className={styles.cellContent}>
// //                       <span>{processContent(row[field]?.toString() || '')}</span>
// //                       {copyableFields.includes(field) && (
// //                         <button
// //                           className={`${styles.copyButton} ${copiedStates[`${row.id}-${field}`] ? styles.copied : ''}`}
// //                           onClick={() => handleCopy(row[field]?.toString() || '', field, row.id)}
// //                         >
// //                           {copiedStates[`${row.id}-${field}`] ? '✓' : 'Copy'}
// //                         </button>
// //                       )}
// //                     </div>
// //                   </td>
// //                 ))}
// //               </tr>
// //               {isExpandable(row) && expandedRowId === row.id && (
// //                 <tr>
// //                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
// //                     {shouldHaveTabs(row.content) ? (
// //                       <div className={styles.tabContainer}>
// //                         <div className={styles.tabList}>
// //                           {Object.keys(row.content).map((tab) => (
// //                             <button
// //                               key={tab}
// //                               className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
// //                               onClick={() => handleTabClick(row.id, tab)}
// //                             >
// //                               {processContent(tab)}
// //                             </button>
// //                           ))}
// //                         </div>
// //                         <div className={styles.tabContent}>
// //                           {Object.keys(row.content).map((tab) => (
// //                             <div
// //                               key={tab}
// //                               className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
// //                             >
// //                               {Object.entries(filterNestedFields(row.content[tab])).map(([key, value]) => (
// //                                 <div key={key} className={styles.contentItem}>
// //                                   <div className={styles.contentLabel}>
// //                                     {processContent(key)}:
// //                                   </div>
// //                                   <div className={styles.contentValue}>
// //                                     <div className={styles.cellContent}>
// //                                       <span>
// //                                         {processContent(Array.isArray(value) ? value.join(", ") : value.toString())}
// //                                       </span>
// //                                       {nestedCopyableFields.includes(key) && (
// //                                         <button
// //                                           className={`${styles.copyButton} ${copiedStates[`${row.id}-${tab}-${key}`] ? styles.copied : ''}`}
// //                                           onClick={() => handleCopy(
// //                                             Array.isArray(value) ? value.join(", ") : value.toString(),
// //                                             `${tab}-${key}`,
// //                                             row.id
// //                                           )}
// //                                         >
// //                                           {copiedStates[`${row.id}-${tab}-${key}`] ? '✓' : 'Copy'}
// //                                         </button>
// //                                       )}
// //                                     </div>
// //                                   </div>
// //                                 </div>
// //                               ))}
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     ) : (
// //                       <div className={styles.simpleContent}>
// //                         {processContent(row.content.toString())}
// //                       </div>
// //                     )}
// //                   </td>
// //                 </tr>
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default ExpandableTable;

// import React, { useState } from 'react';
// import styles from './ExpandableTable.module.css';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import { processContent } from '@/app/utils/contentProcessor';

// const ExpandableTable = ({ 
//   data, 
//   copyableFields = [],
//   nestedCopyableFields = [],
//   excludedFields = []
// }) => {
//   const [expandedRowId, setExpandedRowId] = useState(null);
//   const [activeTab, setActiveTab] = useState({});
//   const [copiedStates, setCopiedStates] = useState({});
  
//   const mainFields = Object.keys(data[0]).filter(key => 
//     !['content', 'id'].includes(key) && 
//     !excludedFields.includes(key)
//   );

//   const handleCopy = async (content, fieldName, rowId) => {
//     try {
//       await navigator.clipboard.writeText(content);
//       const stateKey = `${rowId}-${fieldName}`;
//       setCopiedStates(prev => ({
//         ...prev,
//         [stateKey]: true
//       }));
//       setTimeout(() => {
//         setCopiedStates(prev => ({
//           ...prev,
//           [stateKey]: false
//         }));
//       }, 2000);
//     } catch (err) {
//       console.error('Failed to copy:', err);
//     }
//   };

//   const toggleRow = (id) => {
//     if (expandedRowId === id) {
//       setExpandedRowId(null);
//     } else {
//       setExpandedRowId(id);
//       const rowContent = data.find(row => row.id === id)?.content;
//       if (typeof rowContent === 'object') {
//         setActiveTab(prev => ({
//           ...prev,
//           [id]: Object.keys(rowContent)[0]
//         }));
//       }
//     }
//   };

//   const handleTabClick = (rowId, tab) => {
//     setActiveTab(prev => ({
//       ...prev,
//       [rowId]: tab
//     }));
//   };

//   const isExpandable = (row) => {
//     return row.hasOwnProperty('content') && row.content !== null && row.content !== undefined;
//   };

//   const shouldHaveTabs = (content) => {
//     return typeof content === 'object';
//   };

//   return (
//     <div className={styles.tableContainer}>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th className={styles.iconCell}></th>
//             {mainFields.map((field) => (
//               <th key={field} className={styles.headerCell}>
//                 {processContent(field)}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <React.Fragment key={row.id}>
//               <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
//                 <td className={styles.iconCell}>
//                   {isExpandable(row) && (
//                    <span onClick={() => toggleRow(row.id)}>
//                    {expandedRowId === row.id ? (
//                      <ChevronDown className={styles.icon} />
//                    ) : (
//                      <ChevronRight className={styles.icon} />
//                    )}
//                  </span>
//                   )}
//                 </td>
//                 {mainFields.map((field) => (
//                   <td 
//                     key={field} 
//                     className={styles.tableCell}
//                     onClick={(e) => {
//                       if (e.target.tagName === 'BUTTON') return;
//                       isExpandable(row) && toggleRow(row.id);
//                     }}
//                   >
//                     <div className={styles.cellContent}>
//                       <span>{processContent(row[field]?.toString() || '')}</span>
//                       {copyableFields.includes(field) && (
//                         <button
//                           className={`${styles.copyButton} ${copiedStates[`${row.id}-${field}`] ? styles.copied : ''}`}
//                           onClick={() => handleCopy(row[field]?.toString() || '', field, row.id)}
//                         >
//                           {copiedStates[`${row.id}-${field}`] ? '✓' : 'Copy'}
//                         </button>
//                       )}
//                     </div>
//                   </td>
//                 ))}
//               </tr>
//               {isExpandable(row) && expandedRowId === row.id && (
//                 <tr>
//                   <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
//                     {shouldHaveTabs(row.content) ? (
//                       <div className={styles.tabContainer}>
//                         <div className={styles.tabList}>
//                           {Object.keys(row.content).map((tab) => (
//                             <button
//                               key={tab}
//                               className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
//                               onClick={() => handleTabClick(row.id, tab)}
//                             >
//                               {processContent(tab)}
//                             </button>
//                           ))}
//                         </div>
//                         <div className={styles.tabContent}>
//                           {Object.keys(row.content).map((tab) => (
//                             <div
//                               key={tab}
//                               className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
//                             >
//                               <div className={styles.contentValue}>
//                                 <div className={styles.cellContent}>
//                                   <span>{processContent(row.content[tab].toString())}</span>
//                                   {nestedCopyableFields.includes(tab) && (
//                                     <button
//                                       className={`${styles.copyButton} ${copiedStates[`${row.id}-${tab}`] ? styles.copied : ''}`}
//                                       onClick={() => handleCopy(
//                                         row.content[tab].toString(),
//                                         tab,
//                                         row.id
//                                       )}
//                                     >
//                                       {copiedStates[`${row.id}-${tab}`] ? '✓' : 'Copy'}
//                                     </button>
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ) : (
//                       <div className={styles.simpleContent}>
//                         <div className={styles.cellContent}>
//                           <span>{processContent(row.content.toString())}</span>
//                           {nestedCopyableFields.includes('content') && (
//                             <button
//                               className={`${styles.copyButton} ${copiedStates[`${row.id}-content`] ? styles.copied : ''}`}
//                               onClick={() => handleCopy(row.content.toString(), 'content', row.id)}
//                             >
//                               {copiedStates[`${row.id}-content`] ? '✓' : 'Copy'}
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExpandableTable;

import React, { useState } from 'react';
import styles from './ExpandableTable.module.css';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { processContent } from '@/app/utils/contentProcessor';

const ExpandableTable = ({ 
  data = [], 
  copyableFields = [],
  nestedCopyableFields = [],
  includedFields = [],
}) => {
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [activeTab, setActiveTab] = useState({});
  const [copiedStates, setCopiedStates] = useState({});
  
  
  // Validate and sanitize input data
  const sanitizedData = data.map(row => ({
    id: row?.id || Math.random().toString(36).substr(2, 9),
    ...row
  }));

  // Use included fields instead of excludedi
  const mainFields = includedFields.length > 0 
    ? includedFields.filter(field => !['content', 'id'].includes(field))
    : Object.keys(sanitizedData[0] || {}).filter(key => !['content', 'id'].includes(key));

  const handleCopy = async (content, fieldName, rowId) => {
    console.log(copiedStates);
   
    if (!content) return;
    try {
      await navigator.clipboard.writeText(content);
      const stateKey = `${rowId}-${fieldName}`;
      setCopiedStates(prev => ({
        ...prev,
        [stateKey]: true
      }));
      setTimeout(() => {
        setCopiedStates(prev => ({
          ...prev,
          [stateKey]: false
        }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleRow = (id) => {
    if (expandedRowId === id) {
      setExpandedRowId(null);
    } else {
      setExpandedRowId(id);
      const rowContent = sanitizedData.find(row => row.id === id)?.content;
      if (typeof rowContent === 'object' && rowContent !== null) {
        setActiveTab(prev => ({
          ...prev,
          [id]: Object.keys(rowContent)[0]
        }));
      }
    }
  };

  const handleTabClick = (rowId, tab) => {
    setActiveTab(prev => ({
      ...prev,
      [rowId]: tab
    }));
  };

  const isExpandable = (row) => {
    return row?.content != null;
  };

  const shouldHaveTabs = (content) => {
    return typeof content === 'object' && content !== null;
  };

  if (!sanitizedData.length || !mainFields.length) {
    return <div className={styles.noData}>No data available</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.iconCell}></th>
            {mainFields.map((field) => (
              <th key={field} className={styles.headerCell}>
                {processContent(field)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sanitizedData.map((row) => (
            <React.Fragment key={row.id}>
              <tr className={isExpandable(row) ? styles.tableRow : styles.simpleRow}>
                <td className={styles.iconCell}>
                  {isExpandable(row) && (
                    <span onClick={() => toggleRow(row.id)}>
                      {expandedRowId === row.id ? (
                        <ChevronDown className={styles.icon} />
                      ) : (
                        <ChevronRight className={styles.icon} />
                      )}
                    </span>
                  )}
                </td>
                {mainFields.map((field) => (
                  <td 
                    key={field} 
                    className={styles.tableCell}
                    onClick={(e) => {
                      if (e.target.tagName === 'BUTTON') return;
                      isExpandable(row) && toggleRow(row.id);
                    }}
                  >
                    <div className={styles.cellContent}>
                      <span>{processContent(row[field]?.toString() || '')}</span>
                      {copyableFields.includes(field) && row[field] && (
                        <button
                          className={`${styles.copyButton} ${copiedStates[`${row.id}-${field}`] ? styles.copied : ''}`}
                          onClick={() => handleCopy(row[field]?.toString(), field, row.id)}
                        >
                          {copiedStates[`${row.id}-${field}`] ? '✓' : 'Copy'}
                          {/* {copy?'✓':'Copy'} */}
                        </button>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
              {isExpandable(row) && expandedRowId === row.id && (
                <tr>
                  <td colSpan={mainFields.length + 1} className={styles.expandedContent}>
                    {shouldHaveTabs(row.content) ? (
                      <div className={styles.tabContainer}>
                        <div className={styles.tabList}>
                          {Object.keys(row.content).map((tab) => (
                            <button
                              key={tab}
                              className={`${styles.tabButton} ${activeTab[row.id] === tab ? styles.activeTab : ''}`}
                              onClick={() => handleTabClick(row.id, tab)}
                            >
                              {processContent(tab)}
                            </button>
                          ))}
                        </div>
                        <div className={styles.tabContent}>
                          {Object.keys(row.content).map((tab) => (
                            <div
                              key={tab}
                              className={`${styles.tabPanel} ${activeTab[row.id] === tab ? styles.activePanel : styles.hiddenPanel}`}
                            >
                              <div className={styles.contentValue}>
                                <div className={styles.cellContent}>
                                  <span>{processContent(row.content[tab]?.toString() || '')}</span>
                                  {nestedCopyableFields.includes(tab) && row.content[tab] && (
                                    <button
                                      className={`${styles.copyButton} ${copiedStates[`${row.id}-${tab}`] ? styles.copied : ''}`}
                                      onClick={() => handleCopy(
                                        row.content[tab].toString(),
                                        tab,
                                        row.id
                                      )}
                                    >
                                      {copiedStates[`${row.id}-${tab}`] ? '✓' : 'Copy'}
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={styles.simpleContent}>
                        <div className={styles.cellContent}>
                          <span>{processContent(row.content?.toString() || '')}</span>
                          {nestedCopyableFields.includes('content') && row.content && (
                            <button
                              className={`${styles.copyButton} ${copiedStates[`${row.id}-content`] ? styles.copied : ''}`}
                              onClick={() => handleCopy(row.content.toString(), 'content', row.id)}
                            >
                              {copiedStates[`${row.id}-content`] ? '✓' : 'Copy'}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;