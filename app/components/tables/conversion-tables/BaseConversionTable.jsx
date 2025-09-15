// // // // 'use client';

// // // // import { useState, useEffect, useMemo } from 'react';

// // // // const BaseConversionTable = () => {
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [customBase, setCustomBase] = useState(5);
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [baseError, setBaseError] = useState('');
  
// // // //   const rowsPerPage = 20;
// // // //   const totalNumbers = 1001; // 0 to 1000

// // // //   // Generate filtered data based on search query
// // // //   const filteredData = useMemo(() => {
// // // //     const allNumbers = Array.from({ length: totalNumbers }, (_, i) => i);
    
// // // //     if (!searchQuery.trim()) {
// // // //       return allNumbers;
// // // //     }
    
// // // //     const searchNum = parseInt(searchQuery);
// // // //     if (!isNaN(searchNum) && searchNum >= 0 && searchNum <= 1000) {
// // // //       return [searchNum];
// // // //     }
    
// // // //     // Search for numbers containing the query as substring
// // // //     return allNumbers.filter(num => num.toString().includes(searchQuery.trim()));
// // // //   }, [searchQuery]);

// // // //   // Reset to first page when search changes
// // // //   useEffect(() => {
// // // //     setCurrentPage(1);
// // // //   }, [searchQuery]);

// // // //   // Calculate pagination
// // // //   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
// // // //   const startIndex = (currentPage - 1) * rowsPerPage;
// // // //   const currentPageData = filteredData.slice(startIndex, startIndex + rowsPerPage);

// // // //   // Convert number to specified base
// // // //   const convertToBase = (number, base) => {
// // // //     if (base < 2 || base > 36) return 'Invalid Base';
// // // //     return number.toString(base).toUpperCase();
// // // //   };

// // // //   // Handle base change
// // // //   const handleBaseChange = (value) => {
// // // //     const base = parseInt(value);
    
// // // //     if (base < 2 || base > 36 || isNaN(base)) {
// // // //       setBaseError('Base must be between 2 and 36');
// // // //       return;
// // // //     }
    
// // // //     setBaseError('');
// // // //     setCustomBase(base);
// // // //   };

// // // //   // Handle search
// // // //   const handleSearch = (value) => {
// // // //     setSearchQuery(value);
// // // //   };

// // // //   // Pagination handlers
// // // //   const goToPage = (page) => {
// // // //     if (page >= 1 && page <= totalPages) {
// // // //       setCurrentPage(page);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <div style={styles.header}>
// // // //         <h1 style={styles.title}>🔢 Base Conversion Table</h1>
// // // //         <p style={styles.subtitle}>Interactive number base converter for 0-1000</p>
// // // //       </div>
      
// // // //       <div style={styles.controls}>
// // // //         <div style={styles.controlGroup}>
// // // //           <label style={styles.label}>Custom Base (2-36):</label>
// // // //           <input
// // // //             type="number"
// // // //             min="2"
// // // //             max="36"
// // // //             value={customBase}
// // // //             onChange={(e) => handleBaseChange(e.target.value)}
// // // //             placeholder="Enter base"
// // // //             style={styles.input}
// // // //           />
// // // //           {baseError && <div style={styles.error}>{baseError}</div>}
// // // //         </div>
        
// // // //         <div style={styles.controlGroup}>
// // // //           <label style={styles.label}>Search Number:</label>
// // // //           <input
// // // //             type="text"
// // // //             value={searchQuery}
// // // //             onChange={(e) => handleSearch(e.target.value)}
// // // //             placeholder="Enter decimal number"
// // // //             style={styles.input}
// // // //           />
// // // //         </div>
// // // //       </div>
      
// // // //       <div style={styles.tableContainer}>
// // // //         <div style={styles.info}>
// // // //           Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredData.length)} of {filteredData.length} numbers | Custom Base: {customBase}
// // // //         </div>
        
// // // //         <table style={styles.table}>
// // // //           <thead>
// // // //             <tr>
// // // //               <th style={styles.th}>Decimal</th>
// // // //               <th style={styles.th}>Binary (Base 2)</th>
// // // //               <th style={styles.th}>Octal (Base 8)</th>
// // // //               <th style={styles.th}>Hexadecimal (Base 16)</th>
// // // //               <th style={styles.th}>Custom Base ({customBase})</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {currentPageData.map((num, index) => (
// // // //               <tr 
// // // //                 key={num}
// // // //                 style={{
// // // //                   ...styles.tr,
// // // //                   ...(index % 2 === 0 ? styles.trEven : {}),
// // // //                 }}
// // // //                 onMouseEnter={(e) => e.target.parentElement.style.background = '#eff6ff'}
// // // //                 onMouseLeave={(e) => e.target.parentElement.style.background = index % 2 === 0 ? '#f8fafc' : 'white'}
// // // //               >
// // // //                 <td style={{...styles.td, ...styles.decimalCol}}>{num}</td>
// // // //                 <td style={{...styles.td, ...styles.binaryCol}}>{convertToBase(num, 2)}</td>
// // // //                 <td style={{...styles.td, ...styles.octalCol}}>{convertToBase(num, 8)}</td>
// // // //                 <td style={{...styles.td, ...styles.hexCol}}>{convertToBase(num, 16)}</td>
// // // //                 <td style={{...styles.td, ...styles.customCol}}>{convertToBase(num, customBase)}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
        
// // // //         <div style={styles.pagination}>
// // // //           <button
// // // //             onClick={() => goToPage(1)}
// // // //             disabled={currentPage === 1}
// // // //             style={{
// // // //               ...styles.paginationButton,
// // // //               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
// // // //             }}
// // // //           >
// // // //             First
// // // //           </button>
// // // //           <button
// // // //             onClick={() => goToPage(currentPage - 1)}
// // // //             disabled={currentPage === 1}
// // // //             style={{
// // // //               ...styles.paginationButton,
// // // //               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
// // // //             }}
// // // //           >
// // // //             Previous
// // // //           </button>
// // // //           <span style={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
// // // //           <button
// // // //             onClick={() => goToPage(currentPage + 1)}
// // // //             disabled={currentPage === totalPages}
// // // //             style={{
// // // //               ...styles.paginationButton,
// // // //               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
// // // //             }}
// // // //           >
// // // //             Next
// // // //           </button>
// // // //           <button
// // // //             onClick={() => goToPage(totalPages)}
// // // //             disabled={currentPage === totalPages}
// // // //             style={{
// // // //               ...styles.paginationButton,
// // // //               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
// // // //             }}
// // // //           >
// // // //             Last
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   container: {
// // // //     maxWidth: '1200px',
// // // //     margin: '0 auto',
// // // //     background: 'white',
// // // //     borderRadius: '10px',
// // // //     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
// // // //     overflow: 'hidden',
// // // //     border: '1px solid #e2e8f0',
// // // //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// // // //   },
// // // //   header: {
// // // //     background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
// // // //     color: 'white',
// // // //     padding: '30px',
// // // //     textAlign: 'center',
// // // //   },
// // // //   title: {
// // // //     fontSize: '2.2rem',
// // // //     marginBottom: '10px',
// // // //     margin: 0,
// // // //   },
// // // //   subtitle: {
// // // //     margin: 0,
// // // //     opacity: 0.9,
// // // //   },
// // // //   controls: {
// // // //     padding: '30px',
// // // //     background: '#f8fafc',
// // // //     borderBottom: '1px solid #e2e8f0',
// // // //     display: 'flex',
// // // //     gap: '20px',
// // // //     flexWrap: 'wrap',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   controlGroup: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '8px',
// // // //   },
// // // //   label: {
// // // //     fontWeight: 600,
// // // //     color: '#334155',
// // // //     fontSize: '0.9rem',
// // // //   },
// // // //   input: {
// // // //     padding: '12px 15px',
// // // //     border: '2px solid #cbd5e1',
// // // //     borderRadius: '6px',
// // // //     fontSize: '16px',
// // // //     transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
// // // //     width: '200px',
// // // //   },
// // // //   error: {
// // // //     color: '#dc2626',
// // // //     fontSize: '0.8rem',
// // // //     marginTop: '5px',
// // // //   },
// // // //   tableContainer: {
// // // //     padding: '30px',
// // // //     overflowX: 'auto',
// // // //   },
// // // //   info: {
// // // //     textAlign: 'center',
// // // //     marginBottom: '20px',
// // // //     color: '#64748b',
// // // //     fontSize: '0.9rem',
// // // //   },
// // // //   table: {
// // // //     width: '100%',
// // // //     borderCollapse: 'collapse',
// // // //     fontSize: '18px',
// // // //     background: 'white',
// // // //     fontWeight:'600',
// // // //   },
// // // //   th: {
// // // //     background: '#475569',
// // // //     color: 'white',
// // // //     padding: '15px 10px',
// // // //     fontWeight: 600,
// // // //     textAlign: 'center',
// // // //     position: 'sticky',
// // // //     top: 0,
// // // //     zIndex: 10,
// // // //   },
// // // //   td: {
// // // //     padding: '12px 10px',
// // // //     borderBottom: '1px solid #e2e8f0',
// // // //     textAlign: 'center',
// // // //     fontFamily: "'Courier New', monospace",
// // // //   },
// // // //   tr: {
// // // //     background: 'white',
// // // //   },
// // // //   trEven: {
// // // //     background: '#f8fafc',
// // // //   },
// // // //   decimalCol: {
// // // //     fontWeight: 600,
// // // //     color: '#1e40af',
// // // //   },
// // // //   binaryCol: {
// // // //     color: '#059669',
// // // //   },
// // // //   octalCol: {
// // // //     color: '#7c3aed',
// // // //   },
// // // //   hexCol: {
// // // //     color: '#dc2626',
// // // //   },
// // // //   customCol: {
// // // //     fontWeight: 600,
// // // //     color: '#0369a1',
// // // //     background: '#eff6ff',
// // // //   },
// // // //   pagination: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     gap: '10px',
// // // //     marginTop: '30px',
// // // //     paddingBottom: '30px',
// // // //     alignItems: 'center',
// // // //   },
// // // //   paginationButton: {
// // // //     padding: '10px 15px',
// // // //     border: '1px solid #3b82f6',
// // // //     background: 'white',
// // // //     color: '#3b82f6',
// // // //     borderRadius: '6px',
// // // //     cursor: 'pointer',
// // // //     fontWeight: 500,
// // // //     transition: 'all 0.2s ease',
// // // //   },
// // // //   paginationButtonDisabled: {
// // // //     opacity: 0.5,
// // // //     cursor: 'not-allowed',
// // // //   },
// // // //   pageInfo: {
// // // //     color: '#64748b',
// // // //     fontWeight: 500,
// // // //   },
// // // // };

// // // // export default BaseConversionTable;


// // // 'use client';

// // // import { useState, useEffect, useMemo } from 'react';

// // // const BaseConversionTable = () => {
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [customBase, setCustomBase] = useState(5);
// // //   const [customBaseInput, setCustomBaseInput] = useState('5');
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [baseError, setBaseError] = useState('');
  
// // //   const rowsPerPage = 20;
// // //   const totalNumbers = 1001; // 0 to 1000

// // //   // Generate filtered data based on search query
// // //   const filteredData = useMemo(() => {
// // //     const allNumbers = Array.from({ length: totalNumbers }, (_, i) => i);
    
// // //     if (!searchQuery.trim()) {
// // //       return allNumbers;
// // //     }
    
// // //     const searchNum = parseInt(searchQuery);
// // //     if (!isNaN(searchNum) && searchNum >= 0 && searchNum <= 1000) {
// // //       return [searchNum];
// // //     }
    
// // //     return allNumbers.filter(num => num.toString().includes(searchQuery.trim()));
// // //   }, [searchQuery]);

// // //   useEffect(() => {
// // //     setCurrentPage(1);
// // //   }, [searchQuery]);

// // //   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
// // //   const startIndex = (currentPage - 1) * rowsPerPage;
// // //   const currentPageData = filteredData.slice(startIndex, startIndex + rowsPerPage);

// // //   const convertToBase = (number, base) => {
// // //     if (base < 2 || base > 36) return 'Invalid Base';
// // //     return number.toString(base).toUpperCase();
// // //   };

// // //   const handleBaseChange = (value) => {
// // //     setCustomBaseInput(value);
    
// // //     if (value === '') {
// // //       setBaseError('');
// // //       return;
// // //     }
    
// // //     const base = parseInt(value);
    
// // //     if (base < 2 || base > 36 || isNaN(base)) {
// // //       setBaseError('Base must be between 2 and 36');
// // //       return;
// // //     }
    
// // //     setBaseError('');
// // //     setCustomBase(base);
// // //   };

// // //   const handleSearch = (value) => {
// // //     setSearchQuery(value);
// // //   };

// // //   const goToPage = (page) => {
// // //     if (page >= 1 && page <= totalPages) {
// // //       setCurrentPage(page);
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <div style={styles.header}>
// // //         <h1 style={styles.title}>🔢 Base Conversion Table</h1>
// // //         <p style={styles.subtitle}>Interactive number base converter for 0-1000</p>
// // //       </div>
      
// // //       <div style={styles.controls}>
// // //         <div style={styles.controlGroup}>
// // //           <label style={styles.label}>Custom Base (2-36):</label>
// // //           <input
// // //             type="number"
// // //             min="2"
// // //             max="36"
// // //             value={customBaseInput}
// // //             onChange={(e) => handleBaseChange(e.target.value)}
// // //             placeholder="Enter base"
// // //             style={styles.input}
// // //           />
// // //           {baseError && <div style={styles.error}>{baseError}</div>}
// // //         </div>
        
// // //         <div style={styles.controlGroup}>
// // //           <label style={styles.label}>Search Number:</label>
// // //           <input
// // //             type="text"
// // //             value={searchQuery}
// // //             onChange={(e) => handleSearch(e.target.value)}
// // //             placeholder="Enter decimal number"
// // //             style={styles.input}
// // //           />
// // //         </div>
// // //       </div>
      
// // //       <div style={styles.tableContainer}>
// // //         <div style={styles.info}>
// // //           Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredData.length)} of {filteredData.length} numbers | Custom Base: {customBase}
// // //         </div>
        
// // //         <table style={styles.table}>
// // //           <thead>
// // //             <tr>
// // //               <th style={styles.th}>Decimal</th>
// // //               <th style={styles.th}>Binary (Base 2)</th>
// // //               <th style={styles.th}>Octal (Base 8)</th>
// // //               <th style={styles.th}>Hexadecimal (Base 16)</th>
// // //               <th style={styles.th}>Custom Base ({customBase})</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {currentPageData.map((num, index) => (
// // //               <tr 
// // //                 key={num}
// // //                 style={{
// // //                   ...styles.tr,
// // //                   ...(index % 2 === 0 ? styles.trEven : {}),
// // //                 }}
// // //                 onMouseEnter={(e) => e.target.parentElement.style.background = '#eff6ff'}
// // //                 onMouseLeave={(e) => e.target.parentElement.style.background = index % 2 === 0 ? '#f8fafc' : 'white'}
// // //               >
// // //                 <td style={{...styles.td, ...styles.decimalCol}}>{num}</td>
// // //                 <td style={{...styles.td, ...styles.binaryCol}}>{convertToBase(num, 2)}</td>
// // //                 <td style={{...styles.td, ...styles.octalCol}}>{convertToBase(num, 8)}</td>
// // //                 <td style={{...styles.td, ...styles.hexCol}}>{convertToBase(num, 16)}</td>
// // //                 <td style={{...styles.td, ...styles.customCol}}>{convertToBase(num, customBase)}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
        
// // //         <div style={styles.pagination}>
// // //           <button
// // //             onClick={() => goToPage(1)}
// // //             disabled={currentPage === 1}
// // //             style={{
// // //               ...styles.paginationButton,
// // //               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
// // //             }}
// // //           >
// // //             First
// // //           </button>
// // //           <button
// // //             onClick={() => goToPage(currentPage - 1)}
// // //             disabled={currentPage === 1}
// // //             style={{
// // //               ...styles.paginationButton,
// // //               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
// // //             }}
// // //           >
// // //             Previous
// // //           </button>
// // //           <span style={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
// // //           <button
// // //             onClick={() => goToPage(currentPage + 1)}
// // //             disabled={currentPage === totalPages}
// // //             style={{
// // //               ...styles.paginationButton,
// // //               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
// // //             }}
// // //           >
// // //             Next
// // //           </button>
// // //           <button
// // //             onClick={() => goToPage(totalPages)}
// // //             disabled={currentPage === totalPages}
// // //             style={{
// // //               ...styles.paginationButton,
// // //               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
// // //             }}
// // //           >
// // //             Last
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     maxWidth: '1200px',
// // //     margin: '0 auto',
// // //     background: 'white',
// // //     borderRadius: '10px',
// // //     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
// // //     overflow: 'hidden',
// // //     border: '1px solid #e2e8f0',
// // //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// // //   },
// // //   header: {
// // //     background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
// // //     color: 'white',
// // //     padding: '30px',
// // //     textAlign: 'center',
// // //   },
// // //   title: {
// // //     fontSize: '2.2rem',
// // //     marginBottom: '10px',
// // //     margin: 0,
// // //   },
// // //   subtitle: {
// // //     margin: 0,
// // //     opacity: 0.9,
// // //   },
// // //   controls: {
// // //     padding: '30px',
// // //     background: '#f8fafc',
// // //     borderBottom: '1px solid #e2e8f0',
// // //     display: 'flex',
// // //     gap: '20px',
// // //     flexWrap: 'wrap',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // //   controlGroup: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '8px',
// // //   },
// // //   label: {
// // //     fontWeight: 600,
// // //     color: '#334155',
// // //     fontSize: '0.9rem',
// // //   },
// // //   input: {
// // //     padding: '12px 15px',
// // //     border: '2px solid #cbd5e1',
// // //     borderRadius: '6px',
// // //     fontSize: '16px',
// // //     transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
// // //     width: '200px',
// // //   },
// // //   error: {
// // //     color: '#dc2626',
// // //     fontSize: '0.8rem',
// // //     marginTop: '5px',
// // //   },
// // //   tableContainer: {
// // //     padding: '30px',
// // //     overflowX: 'auto',
// // //   },
// // //   info: {
// // //     textAlign: 'center',
// // //     marginBottom: '20px',
// // //     color: '#64748b',
// // //     fontSize: '0.9rem',
// // //   },
// // //   table: {
// // //     width: '100%',
// // //     borderCollapse: 'collapse',
// // //     fontSize: '14px',
// // //     background: 'white',
// // //   },
// // //   th: {
// // //     background: '#475569',
// // //     color: 'white',
// // //     padding: '15px 10px',
// // //     fontWeight: 600,
// // //     textAlign: 'center',
// // //     position: 'sticky',
// // //     top: 0,
// // //     zIndex: 10,
// // //   },
// // //   td: {
// // //     padding: '12px 10px',
// // //     borderBottom: '1px solid #e2e8f0',
// // //     textAlign: 'center',
// // //     fontFamily: "'Courier New', monospace",
// // //     fontSize: '18px',
// // //     fontWeight: 600,
// // //   },
// // //   tr: {
// // //     background: 'white',
// // //   },
// // //   trEven: {
// // //     background: '#f8fafc',
// // //   },
// // //   decimalCol: {
// // //     fontWeight: 600,
// // //     color: '#1e40af',
// // //   },
// // //   binaryCol: {
// // //     color: '#059669',
// // //   },
// // //   octalCol: {
// // //     color: '#7c3aed',
// // //   },
// // //   hexCol: {
// // //     color: '#dc2626',
// // //   },
// // //   customCol: {
// // //     fontWeight: 600,
// // //     color: '#0369a1',
// // //     background: '#eff6ff',
// // //   },
// // //   pagination: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     gap: '10px',
// // //     marginTop: '30px',
// // //     paddingBottom: '30px',
// // //     alignItems: 'center',
// // //   },
// // //   paginationButton: {
// // //     padding: '10px 15px',
// // //     border: '1px solid #3b82f6',
// // //     background: 'white',
// // //     color: '#3b82f6',
// // //     borderRadius: '6px',
// // //     cursor: 'pointer',
// // //     fontWeight: 500,
// // //     transition: 'all 0.2s ease',
// // //   },
// // //   paginationButtonDisabled: {
// // //     opacity: 0.5,
// // //     cursor: 'not-allowed',
// // //   },
// // //   pageInfo: {
// // //     color: '#64748b',
// // //     fontWeight: 500,
// // //   },
// // // };

// // // export default BaseConversionTable;

// // 'use client';

// // import { useState, useEffect, useMemo } from 'react';

// // const BaseConversionTable = () => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [customBase, setCustomBase] = useState(5);
// //   const [customBaseInput, setCustomBaseInput] = useState('5');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [baseError, setBaseError] = useState('');
// //   const [searchError, setSearchError] = useState('');
  
// //   const rowsPerPage = 20;
// //   const totalNumbers = 1001; // 0 to 1000

// //   // Generate filtered data based on search query
// //   const filteredData = useMemo(() => {
// //     const allNumbers = Array.from({ length: totalNumbers }, (_, i) => i);
    
// //     if (!searchQuery.trim()) {
// //       return allNumbers;
// //     }
    
// //     const searchNum = parseInt(searchQuery);
// //     if (!isNaN(searchNum) && searchNum >= 0 && searchNum <= 1000) {
// //       return [searchNum];
// //     }
    
// //     return allNumbers.filter(num => num.toString().includes(searchQuery.trim()));
// //   }, [searchQuery]);

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [searchQuery]);

// //   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
// //   const startIndex = (currentPage - 1) * rowsPerPage;
// //   const currentPageData = filteredData.slice(startIndex, startIndex + rowsPerPage);

// //   const convertToBase = (number, base) => {
// //     if (base < 2 || base > 36) return 'Invalid Base';
// //     return number.toString(base).toUpperCase();
// //   };

// //   const handleBaseChange = (value) => {
// //     setCustomBaseInput(value);
    
// //     if (value === '') {
// //       setBaseError('');
// //       return;
// //     }
    
// //     const base = parseInt(value);
    
// //     if (base < 2 || base > 36 || isNaN(base)) {
// //       setBaseError('Base must be between 2 and 36');
// //       return;
// //     }
    
// //     setBaseError('');
// //     setCustomBase(base);
// //   };

// //   const handleSearch = (value) => {
// //     setSearchQuery(value);
    
// //     if (value === '') {
// //       setSearchError('');
// //       return;
// //     }
    
// //     const searchNum = parseInt(value);
    
// //     if (isNaN(searchNum) || searchNum < 0 || searchNum > 1000) {
// //       setSearchError('Number must be between 0 and 1000');
// //       return;
// //     }
    
// //     setSearchError('');
// //   };

// //   const resetCustomBase = () => {
// //     setCustomBase(5);
// //     setCustomBaseInput('5');
// //     setBaseError('');
// //   };

// //   const resetSearch = () => {
// //     setSearchQuery('');
// //     setSearchError('');
// //   };

// //   const goToPage = (page) => {
// //     if (page >= 1 && page <= totalPages) {
// //       setCurrentPage(page);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.header}>
// //         <h1 style={styles.title}>🔢 Base Conversion Table</h1>
// //         <p style={styles.subtitle}>Interactive number base converter for 0-1000</p>
// //       </div>
      
// //       <div style={styles.controls}>
// //         <div style={styles.controlGroup}>
// //           <label style={styles.label}>Custom Base (2-36):</label>
// //           <div style={styles.inputGroup}>
// //             <input
// //               type="number"
// //               min="2"
// //               max="36"
// //               value={customBaseInput}
// //               onChange={(e) => handleBaseChange(e.target.value)}
// //               placeholder="Enter base"
// //               style={styles.input}
// //             />
// //             <button 
// //               onClick={resetCustomBase}
// //               style={styles.resetButton}
// //               title="Reset to base 5"
// //             >
// //               Reset
// //             </button>
// //           </div>
// //           {baseError && <div style={styles.error}>{baseError}</div>}
// //         </div>
        
// //         <div style={styles.controlGroup}>
// //           <label style={styles.label}>Search Number:</label>
// //           <div style={styles.inputGroup}>
// //             <input
// //               type="text"
// //               value={searchQuery}
// //               onChange={(e) => handleSearch(e.target.value)}
// //               placeholder="Enter decimal number (0-1000)"
// //               style={styles.input}
// //             />
// //             <button 
// //               onClick={resetSearch}
// //               style={styles.resetButton}
// //               title="Clear search"
// //             >
// //               Reset
// //             </button>
// //           </div>
// //           {searchError && <div style={styles.error}>{searchError}</div>}
// //         </div>
// //       </div>
      
// //       <div style={styles.tableContainer}>
// //         <div style={styles.info}>
// //           Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredData.length)} of {filteredData.length} numbers | Custom Base: {customBase}
// //         </div>
        
// //         <table style={styles.table}>
// //           <thead>
// //             <tr>
// //               <th style={styles.th}>Decimal</th>
// //               <th style={styles.th}>Binary (Base 2)</th>
// //               <th style={styles.th}>Octal (Base 8)</th>
// //               <th style={styles.th}>Hexadecimal (Base 16)</th>
// //               <th style={styles.th}>Custom Base ({customBase})</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {currentPageData.map((num, index) => (
// //               <tr 
// //                 key={num}
// //                 style={{
// //                   ...styles.tr,
// //                   ...(index % 2 === 0 ? styles.trEven : {}),
// //                 }}
// //                 onMouseEnter={(e) => e.target.parentElement.style.background = '#eff6ff'}
// //                 onMouseLeave={(e) => e.target.parentElement.style.background = index % 2 === 0 ? '#f8fafc' : 'white'}
// //               >
// //                 <td style={{...styles.td, ...styles.decimalCol}}>{num}</td>
// //                 <td style={{...styles.td, ...styles.binaryCol}}>{convertToBase(num, 2)}</td>
// //                 <td style={{...styles.td, ...styles.octalCol}}>{convertToBase(num, 8)}</td>
// //                 <td style={{...styles.td, ...styles.hexCol}}>{convertToBase(num, 16)}</td>
// //                 <td style={{...styles.td, ...styles.customCol}}>{convertToBase(num, customBase)}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
        
// //         <div style={styles.pagination}>
// //           <button
// //             onClick={() => goToPage(1)}
// //             disabled={currentPage === 1}
// //             style={{
// //               ...styles.paginationButton,
// //               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
// //             }}
// //           >
// //             First
// //           </button>
// //           <button
// //             onClick={() => goToPage(currentPage - 1)}
// //             disabled={currentPage === 1}
// //             style={{
// //               ...styles.paginationButton,
// //               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
// //             }}
// //           >
// //             Previous
// //           </button>
// //           <span style={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
// //           <button
// //             onClick={() => goToPage(currentPage + 1)}
// //             disabled={currentPage === totalPages}
// //             style={{
// //               ...styles.paginationButton,
// //               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
// //             }}
// //           >
// //             Next
// //           </button>
// //           <button
// //             onClick={() => goToPage(totalPages)}
// //             disabled={currentPage === totalPages}
// //             style={{
// //               ...styles.paginationButton,
// //               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
// //             }}
// //           >
// //             Last
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     background: 'white',
// //     borderRadius: '10px',
// //     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
// //     overflow: 'hidden',
// //     border: '1px solid #e2e8f0',
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //   },
// //   header: {
// //     background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
// //     color: 'white',
// //     padding: '30px',
// //     textAlign: 'center',
// //   },
// //   title: {
// //     fontSize: '2.2rem',
// //     marginBottom: '10px',
// //     margin: 0,
// //   },
// //   subtitle: {
// //     margin: 0,
// //     opacity: 0.9,
// //   },
// //   controls: {
// //     padding: '30px',
// //     background: '#f8fafc',
// //     borderBottom: '1px solid #e2e8f0',
// //     display: 'flex',
// //     gap: '20px',
// //     flexWrap: 'wrap',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   controlGroup: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //   },
// //   label: {
// //     fontWeight: 600,
// //     color: '#334155',
// //     fontSize: '0.9rem',
// //   },
// //   inputGroup: {
// //     display: 'flex',
// //     gap: '8px',
// //     alignItems: 'flex-start',
// //   },
// //   input: {
// //     padding: '12px 15px',
// //     border: '2px solid #cbd5e1',
// //     borderRadius: '6px',
// //     fontSize: '16px',
// //     transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
// //     width: '200px',
// //     flex: 1,
// //   },
// //   resetButton: {
// //     padding: '12px 16px',
// //     border: '1px solid #6b7280',
// //     background: '#f9fafb',
// //     color: '#374151',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     fontWeight: 500,
// //     transition: 'all 0.2s ease',
// //     whiteSpace: 'nowrap',
// //   },
// //   error: {
// //     color: '#dc2626',
// //     fontSize: '0.8rem',
// //     marginTop: '5px',
// //   },
// //   tableContainer: {
// //     padding: '30px',
// //     overflowX: 'auto',
// //   },
// //   info: {
// //     textAlign: 'center',
// //     marginBottom: '20px',
// //     color: '#64748b',
// //     fontSize: '0.9rem',
// //   },
// //   table: {
// //     width: '100%',
// //     borderCollapse: 'collapse',
// //     fontSize: '14px',
// //     background: 'white',
// //   },
// //   th: {
// //     background: '#475569',
// //     color: 'white',
// //     padding: '15px 10px',
// //     fontWeight: 600,
// //     textAlign: 'center',
// //     position: 'sticky',
// //     top: 0,
// //     zIndex: 10,
// //   },
// //   td: {
// //     padding: '12px 10px',
// //     borderBottom: '1px solid #e2e8f0',
// //     textAlign: 'center',
// //     fontFamily: "'Courier New', monospace",
// //     fontSize: '18px',
// //     fontWeight: 600,
// //   },
// //   tr: {
// //     background: 'white',
// //   },
// //   trEven: {
// //     background: '#f8fafc',
// //   },
// //   decimalCol: {
// //     fontWeight: 600,
// //     color: '#1e40af',
// //   },
// //   binaryCol: {
// //     color: '#059669',
// //   },
// //   octalCol: {
// //     color: '#7c3aed',
// //   },
// //   hexCol: {
// //     color: '#dc2626',
// //   },
// //   customCol: {
// //     fontWeight: 600,
// //     color: '#0369a1',
// //     background: '#eff6ff',
// //   },
// //   pagination: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     gap: '10px',
// //     marginTop: '30px',
// //     paddingBottom: '30px',
// //     alignItems: 'center',
// //   },
// //   paginationButton: {
// //     padding: '10px 15px',
// //     border: '1px solid #3b82f6',
// //     background: 'white',
// //     color: '#3b82f6',
// //     borderRadius: '6px',
// //     cursor: 'pointer',
// //     fontWeight: 500,
// //     transition: 'all 0.2s ease',
// //   },
// //   paginationButtonDisabled: {
// //     opacity: 0.5,
// //     cursor: 'not-allowed',
// //   },
// //   pageInfo: {
// //     color: '#64748b',
// //     fontWeight: 500,
// //   },
// // };

// // export default BaseConversionTable;

// 'use client';

// import { useState, useEffect, useMemo } from 'react';

// const BaseConversionTable = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [customBase, setCustomBase] = useState(5);
//   const [customBaseInput, setCustomBaseInput] = useState('5');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [baseError, setBaseError] = useState('');
//   const [searchError, setSearchError] = useState('');
  
//   const rowsPerPage = 20;
//   const totalNumbers = 1001; // 0 to 1000

//   // Generate filtered data based on search query
//   const filteredData = useMemo(() => {
//     const allNumbers = Array.from({ length: totalNumbers }, (_, i) => i);
    
//     if (!searchQuery.trim()) {
//       return allNumbers;
//     }
    
//     const searchNum = parseInt(searchQuery);
//     if (!isNaN(searchNum) && searchNum >= 0 && searchNum <= 1000) {
//       return [searchNum];
//     }
    
//     return allNumbers.filter(num => num.toString().includes(searchQuery.trim()));
//   }, [searchQuery]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery]);

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentPageData = filteredData.slice(startIndex, startIndex + rowsPerPage);

//   const convertToBase = (number, base) => {
//     if (base < 2 || base > 36) return 'Invalid Base';
//     return number.toString(base).toUpperCase();
//   };

//   const handleBaseChange = (value) => {
//     setCustomBaseInput(value);
    
//     if (value === '') {
//       setBaseError('');
//       return;
//     }
    
//     const base = parseInt(value);
    
//     if (base < 2 || base > 36 || isNaN(base)) {
//       setBaseError('Base must be between 2 and 36');
//       return;
//     }
    
//     setBaseError('');
//     setCustomBase(base);
//   };

//   const handleSearch = (value) => {
//     setSearchQuery(value);
    
//     if (value === '') {
//       setSearchError('');
//       return;
//     }
    
//     const searchNum = parseInt(value);
    
//     if (isNaN(searchNum) || searchNum < 0 || searchNum > 1000) {
//       setSearchError('Number must be between 0 and 1000');
//       return;
//     }
    
//     setSearchError('');
//   };

//   const resetCustomBase = () => {
//     setCustomBase(5);
//     setCustomBaseInput('5');
//     setBaseError('');
//   };

//   const resetSearch = () => {
//     setSearchQuery('');
//     setSearchError('');
//   };

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>🔢 Base Conversion Table</h1>
//         <p style={styles.subtitle}>Interactive number base converter for 0-1000</p>
//       </div>
      
//       <div style={styles.controls}>
//         <div style={styles.controlGroup}>
//           <label style={styles.label}>Custom Base (2-36):</label>
//           <div style={styles.inputGroup}>
//             <input
//               type="number"
//               min="2"
//               max="36"
//               value={customBaseInput}
//               onChange={(e) => handleBaseChange(e.target.value)}
//               placeholder="Enter base"
//               style={styles.input}
//             />
//             <button 
//               onClick={resetCustomBase}
//               style={styles.resetButton}
//               title="Reset to base 5"
//             >
//               Reset
//             </button>
//           </div>
//           {baseError && <div style={styles.error}>{baseError}</div>}
//         </div>
        
//         <div style={styles.controlGroup}>
//           <label style={styles.label}>Search Number:</label>
//           <div style={styles.inputGroup}>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => handleSearch(e.target.value)}
//               placeholder="Enter decimal number (0-1000)"
//               style={styles.input}
//             />
//             <button 
//               onClick={resetSearch}
//               style={styles.resetButton}
//               title="Clear search"
//             >
//               Reset
//             </button>
//           </div>
//           {searchError && <div style={styles.error}>{searchError}</div>}
//         </div>
//       </div>
      
//       <div style={styles.tableContainer}>
//         <div style={styles.info}>
//           Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredData.length)} of {filteredData.length} numbers | Custom Base: {customBase}
//         </div>
        
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Decimal</th>
//               <th style={styles.th}>Binary (Base 2)</th>
//               <th style={styles.th}>Octal (Base 8)</th>
//               <th style={styles.th}>Hexadecimal (Base 16)</th>
//               <th style={styles.th}>Custom Base ({customBase})</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentPageData.map((num, index) => (
//               <tr 
//                 key={num}
//                 style={{
//                   ...styles.tr,
//                   ...(index % 2 === 0 ? styles.trEven : {}),
//                 }}
//                 onMouseEnter={(e) => e.target.parentElement.style.background = '#eff6ff'}
//                 onMouseLeave={(e) => e.target.parentElement.style.background = index % 2 === 0 ? '#f8fafc' : 'white'}
//               >
//                 <td style={{...styles.td, ...styles.decimalCol}}>{num}</td>
//                 <td style={{...styles.td, ...styles.binaryCol}}>{convertToBase(num, 2)}</td>
//                 <td style={{...styles.td, ...styles.octalCol}}>{convertToBase(num, 8)}</td>
//                 <td style={{...styles.td, ...styles.hexCol}}>{convertToBase(num, 16)}</td>
//                 <td style={{...styles.td, ...styles.customCol}}>{convertToBase(num, customBase)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         <div style={styles.pagination}>
//           <button
//             onClick={() => goToPage(1)}
//             disabled={currentPage === 1}
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
//             }}
//           >
//             First
//           </button>
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
//             }}
//           >
//             Previous
//           </button>
//           <span style={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
//             }}
//           >
//             Next
//           </button>
//           <button
//             onClick={() => goToPage(totalPages)}
//             disabled={currentPage === totalPages}
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
//             }}
//           >
//             Last
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     background: 'white',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     overflow: 'hidden',
//     border: '1px solid #e2e8f0',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   header: {
//     background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
//     color: 'white',
//     padding: '30px',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '2.2rem',
//     marginBottom: '10px',
//     margin: 0,
//   },
//   subtitle: {
//     margin: 0,
//     opacity: 0.9,
//   },
//   controls: {
//     padding: '30px',
//     background: '#f8fafc',
//     borderBottom: '1px solid #e2e8f0',
//     display: 'flex',
//     gap: '20px',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   controlGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   label: {
//     fontWeight: 600,
//     color: '#334155',
//     fontSize: '0.9rem',
//   },
//   inputGroup: {
//     display: 'flex',
//     gap: '8px',
//     alignItems: 'flex-start',
//   },
//   input: {
//     padding: '12px 15px',
//     border: '2px solid #cbd5e1',
//     borderRadius: '6px',
//     fontSize: '16px',
//     transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
//     width: '200px',
//     flex: 1,
//   },
//   resetButton: {
//     padding: '12px 16px',
//     border: '1px solid #6b7280',
//     background: '#f9fafb',
//     color: '#374151',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 500,
//     transition: 'all 0.2s ease',
//     whiteSpace: 'nowrap',
//   },
//   error: {
//     color: '#dc2626',
//     fontSize: '0.8rem',
//     marginTop: '5px',
//   },
//   tableContainer: {
//     padding: '30px',
//     overflowX: 'auto',
//   },
//   info: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#64748b',
//     fontSize: '0.9rem',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     fontSize: '14px',
//     background: 'white',
//   },
//   th: {
//     background: '#475569',
//     color: 'white',
//     padding: '15px 10px',
//     fontWeight: 600,
//     textAlign: 'center',
//     position: 'sticky',
//     top: 0,
//     zIndex: 10,
//   },
//   td: {
//     padding: '12px 10px',
//     borderBottom: '1px solid #e2e8f0',
//     textAlign: 'center',
//     fontFamily: "'Courier New', monospace",
//     fontSize: '18px',
//     fontWeight: 600,
//   },
//   tr: {
//     background: 'white',
//   },
//   trEven: {
//     background: '#f8fafc',
//   },
//   decimalCol: {
//     fontWeight: 600,
//     color: '#1e40af',
//   },
//   binaryCol: {
//     color: '#059669',
//   },
//   octalCol: {
//     color: '#7c3aed',
//   },
//   hexCol: {
//     color: '#dc2626',
//   },
//   customCol: {
//     fontWeight: 600,
//     color: '#0369a1',
//     background: '#eff6ff',
//   },
//   pagination: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',
//     marginTop: '30px',
//     paddingBottom: '30px',
//     alignItems: 'center',
//   },
//   paginationButton: {
//     padding: '10px 15px',
//     border: '1px solid #3b82f6',
//     background: 'white',
//     color: '#3b82f6',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontWeight: 500,
//     transition: 'all 0.2s ease',
//   },
//   paginationButtonDisabled: {
//     opacity: 0.5,
//     cursor: 'not-allowed',
//   },
//   pageInfo: {
//     color: '#64748b',
//     fontWeight: 500,
//   },
// };

// export default BaseConversionTable;


'use client';

import { useState, useEffect, useMemo } from 'react';

const BaseConversionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [customBase, setCustomBase] = useState(5);
  const [customBaseInput, setCustomBaseInput] = useState('5');
  const [searchQuery, setSearchQuery] = useState('');
  const [baseError, setBaseError] = useState('');
  const [searchError, setSearchError] = useState('');
  
  const rowsPerPage = 20;
  const totalNumbers = 1001; // 0 to 1000

  // Generate filtered data based on search query
  const filteredData = useMemo(() => {
    const allNumbers = Array.from({ length: totalNumbers }, (_, i) => i);
    
    if (!searchQuery.trim()) {
      return allNumbers;
    }
    
    const searchNum = parseInt(searchQuery);
    if (!isNaN(searchNum) && searchNum >= 0 && searchNum <= 1000) {
      return [searchNum];
    }
    
    return allNumbers.filter(num => num.toString().includes(searchQuery.trim()));
  }, [searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPageData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const convertToBase = (number, base) => {
    if (base < 2 || base > 36) return 'Invalid Base';
    return number.toString(base).toUpperCase();
  };

  const handleBaseChange = (value) => {
    setCustomBaseInput(value);
    
    if (value === '') {
      setBaseError('');
      return;
    }
    
    const base = parseInt(value);
    
    if (base < 2 || base > 36 || isNaN(base)) {
      setBaseError('Base must be between 2 and 36');
      return;
    }
    
    setBaseError('');
    setCustomBase(base);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    
    if (value === '') {
      setSearchError('');
      return;
    }
    
    const searchNum = parseInt(value);
    
    if (isNaN(searchNum) || searchNum < 0 || searchNum > 1000) {
      setSearchError('Number must be between 0 and 1000');
      return;
    }
    
    setSearchError('');
  };

  const resetCustomBase = () => {
    setCustomBase(5);
    setCustomBaseInput('5');
    setBaseError('');
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSearchError('');
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🔢 Base Conversion Table</h1>
        <p style={styles.subtitle}>Interactive number base converter for 0-1000</p>
      </div>
      
      <div style={styles.controls}>
        <div style={styles.controlGroup}>
          <label style={styles.label}>Custom Base (2-36):</label>
          <div style={styles.inputGroup}>
            <input
              type="number"
              min="2"
              max="36"
              value={customBaseInput}
              onChange={(e) => handleBaseChange(e.target.value)}
              placeholder="Enter base"
              style={styles.input}
            />
            <button 
              onClick={resetCustomBase}
              style={styles.resetButton}
              title="Reset to base 5"
              onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
            >
              Reset
            </button>
          </div>
          {baseError && <div style={styles.error}>{baseError}</div>}
        </div>
        
        <div style={styles.controlGroup}>
          <label style={styles.label}>Search Number:</label>
          <div style={styles.inputGroup}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Enter decimal number (0-1000)"
              style={styles.input}
            />
            <button 
              onClick={resetSearch}
              style={styles.resetButton}
              title="Clear search"
              onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
            >
              Reset
            </button>
          </div>
          {searchError && <div style={styles.error}>{searchError}</div>}
        </div>
      </div>
      
      <div style={styles.tableContainer}>
        <div style={styles.info}>
          Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredData.length)} of {filteredData.length} numbers | Custom Base: {customBase}
        </div>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Decimal</th>
              <th style={styles.th}>Binary (Base 2)</th>
              <th style={styles.th}>Octal (Base 8)</th>
              <th style={styles.th}>Hexadecimal (Base 16)</th>
              <th style={styles.th}>Custom Base ({customBase})</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((num, index) => (
              <tr 
                key={num}
                style={{
                  ...styles.tr,
                  ...(index % 2 === 0 ? styles.trEven : {}),
                }}
                onMouseEnter={(e) => e.target.parentElement.style.background = '#eff6ff'}
                onMouseLeave={(e) => e.target.parentElement.style.background = index % 2 === 0 ? '#f8fafc' : 'white'}
              >
                <td style={{...styles.td, ...styles.decimalCol}}>{num}</td>
                <td style={{...styles.td, ...styles.binaryCol}}>{convertToBase(num, 2)}</td>
                <td style={{...styles.td, ...styles.octalCol}}>{convertToBase(num, 8)}</td>
                <td style={{...styles.td, ...styles.hexCol}}>{convertToBase(num, 16)}</td>
                <td style={{...styles.td, ...styles.customCol}}>{convertToBase(num, customBase)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div style={styles.pagination}>
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            style={{
              ...styles.paginationButton,
              ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
            }}
          >
            First
          </button>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              ...styles.paginationButton,
              ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
            }}
          >
            Previous
          </button>
          <span style={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              ...styles.paginationButton,
              ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
            }}
          >
            Next
          </button>
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            style={{
              ...styles.paginationButton,
              ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
            }}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    color: 'white',
    padding: '30px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '10px',
    margin: 0,
  },
  subtitle: {
    margin: 0,
    opacity: 0.9,
  },
  controls: {
    padding: '30px',
    background: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontWeight: 600,
    color: '#334155',
    fontSize: '0.9rem',
  },
  inputGroup: {
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-start',
  },
  input: {
    padding: '12px 15px',
    border: '2px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '16px',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    width: '200px',
    flex: 1,
  },
  resetButton: {
    padding: '12px 16px',
    border: '1px solid #3b82f6',
    background: '#3b82f6',
    color: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
  error: {
    color: '#dc2626',
    fontSize: '0.8rem',
    marginTop: '5px',
  },
  tableContainer: {
    padding: '30px',
    overflowX: 'auto',
  },
  info: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#64748b',
    fontSize: '0.9rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
    background: 'white',
  },
  th: {
    background: '#475569',
    color: 'white',
    padding: '15px 10px',
    fontWeight: 600,
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  td: {
    padding: '12px 10px',
    borderBottom: '1px solid #e2e8f0',
    textAlign: 'center',
    fontFamily: "'Courier New', monospace",
    fontSize: '18px',
    fontWeight: 600,
  },
  tr: {
    background: 'white',
  },
  trEven: {
    background: '#f8fafc',
  },
  decimalCol: {
    fontWeight: 600,
    color: '#1e40af',
  },
  binaryCol: {
    color: '#059669',
  },
  octalCol: {
    color: '#7c3aed',
  },
  hexCol: {
    color: '#dc2626',
  },
  customCol: {
    fontWeight: 600,
    color: '#0369a1',
    background: '#eff6ff',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '30px',
    paddingBottom: '30px',
    alignItems: 'center',
  },
  paginationButton: {
    padding: '10px 15px',
    border: '1px solid #3b82f6',
    background: 'white',
    color: '#3b82f6',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },
  paginationButtonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  pageInfo: {
    color: '#64748b',
    fontWeight: 500,
  },
};

export default BaseConversionTable;