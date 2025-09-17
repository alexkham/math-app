// 'use client';

// import { useState, useEffect, useMemo } from 'react';

// const MultiplicationTables = () => {
//   const [selectedNumber, setSelectedNumber] = useState(5);
//   const [numberInput, setNumberInput] = useState('5');
//   const [tableRange, setTableRange] = useState(12);
//   const [rangeInput, setRangeInput] = useState('12');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [numberError, setNumberError] = useState('');
//   const [rangeError, setRangeError] = useState('');
  
//   const rowsPerPage = 20;

//   // Generate multiplication table data
//   const multiplicationData = useMemo(() => {
//     return Array.from({ length: tableRange }, (_, i) => {
//       const multiplier = i + 1;
//       const result = selectedNumber * multiplier;
//       return {
//         multiplier,
//         equation: `${selectedNumber} × ${multiplier} = ${result}`,
//         result
//       };
//     });
//   }, [selectedNumber, tableRange]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedNumber, tableRange]);

//   const totalPages = Math.ceil(multiplicationData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentPageData = multiplicationData.slice(startIndex, startIndex + rowsPerPage);

//   const handleNumberChange = (value) => {
//     setNumberInput(value);
    
//     if (value === '') {
//       setNumberError('');
//       return;
//     }
    
//     const num = parseInt(value);
    
//     if (num < 1 || num > 999 || isNaN(num)) {
//       setNumberError('Number must be between 1 and 999');
//       return;
//     }
    
//     setNumberError('');
//     setSelectedNumber(num);
//   };

//   const handleRangeChange = (value) => {
//     setRangeInput(value);
    
//     if (value === '') {
//       setRangeError('');
//       return;
//     }
    
//     const range = parseInt(value);
    
//     if (range < 1 || range > 100 || isNaN(range)) {
//       setRangeError('Range must be between 1 and 100');
//       return;
//     }
    
//     setRangeError('');
//     setTableRange(range);
//   };

//   const resetNumber = () => {
//     setSelectedNumber(5);
//     setNumberInput('5');
//     setNumberError('');
//   };

//   const resetRange = () => {
//     setTableRange(12);
//     setRangeInput('12');
//     setRangeError('');
//   };

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>✖️ Multiplication Table Generator</h1>
//         <p style={styles.subtitle}>Create multiplication tables for any Multiplicand (up to 999)</p>
//       </div>
      
//       <div style={styles.controls}>
//         <div style={styles.controlGroup}>
//           <label style={styles.label}>Multiplicand (1-999):</label>
//           <div style={styles.inputGroup}>
//             <input
//               type="number"
//               min="1"
//               max="999"
//               value={numberInput}
//               onChange={(e) => handleNumberChange(e.target.value)}
//               placeholder="Enter number"
//               style={styles.input}
//             />
//             <button 
//               onClick={resetNumber}
//               style={styles.resetButton}
//               title="Reset to 5"
//               onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
//               onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
//             >
//               Reset
//             </button>
//           </div>
//           {numberError && <div style={styles.error}>{numberError}</div>}
//         </div>
        
//         <div style={styles.controlGroup}>
//           <label style={styles.label}>Table Range (1-100):</label>
//           <div style={styles.inputGroup}>
//             <input
//               type="number"
//               min="1"
//               max="100"
//               value={rangeInput}
//               onChange={(e) => handleRangeChange(e.target.value)}
//               placeholder="Enter range"
//               style={styles.input}
//             />
//             <button 
//               onClick={resetRange}
//               style={styles.resetButton}
//               title="Reset to 12"
//               onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
//               onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
//             >
//               Reset
//             </button>
//           </div>
//           {rangeError && <div style={styles.error}>{rangeError}</div>}
//         </div>
//       </div>
      
//       <div style={styles.tableContainer}>
//         <div style={styles.info}>
//           Multiplication Table of {selectedNumber} | Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, multiplicationData.length)} of {multiplicationData.length} entries
//         </div>
        
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Multiplier</th>
//               <th style={styles.th}>Equation</th>
//               <th style={styles.th}>Result</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentPageData.map((item, index) => (
//               <tr 
//                 key={item.multiplier}
//                 style={{
//                   ...styles.tr,
//                   ...(index % 2 === 0 ? styles.trEven : {}),
//                 }}
//                 onMouseEnter={(e) => e.target.parentElement.style.background = '#eff6ff'}
//                 onMouseLeave={(e) => e.target.parentElement.style.background = index % 2 === 0 ? '#f8fafc' : 'white'}
//               >
//                 <td style={{...styles.td, ...styles.multiplierCol}}>{item.multiplier}</td>
//                 <td style={{...styles.td, ...styles.equationCol}}>{item.equation}</td>
//                 <td style={{...styles.td, ...styles.resultCol}}>{item.result}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         {totalPages > 1 && (
//           <div style={styles.pagination}>
//             <button
//               onClick={() => goToPage(1)}
//               disabled={currentPage === 1}
//               style={{
//                 ...styles.paginationButton,
//                 ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
//               }}
//             >
//               First
//             </button>
//             <button
//               onClick={() => goToPage(currentPage - 1)}
//               disabled={currentPage === 1}
//               style={{
//                 ...styles.paginationButton,
//                 ...(currentPage === 1 ? styles.paginationButtonDisabled : {})
//               }}
//             >
//               Previous
//             </button>
//             <span style={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
//             <button
//               onClick={() => goToPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               style={{
//                 ...styles.paginationButton,
//                 ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
//               }}
//             >
//               Next
//             </button>
//             <button
//               onClick={() => goToPage(totalPages)}
//               disabled={currentPage === totalPages}
//               style={{
//                 ...styles.paginationButton,
//                 ...(currentPage === totalPages ? styles.paginationButtonDisabled : {})
//               }}
//             >
//               Last
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '1000px',
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
//     gap: '30px',
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
//     border: '1px solid #3b82f6',
//     background: '#3b82f6',
//     color: 'white',
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
//     fontWeight: 500,
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
//     padding: '15px 20px',
//     fontWeight: 600,
//     textAlign: 'center',
//     position: 'sticky',
//     top: 0,
//     zIndex: 10,
//   },
//   td: {
//     padding: '15px 20px',
//     borderBottom: '1px solid #e2e8f0',
//     textAlign: 'center',
//     fontSize: '18px',
//     fontWeight: 600,
//   },
//   tr: {
//     background: 'white',
//   },
//   trEven: {
//     background: '#f8fafc',
//   },
//   multiplierCol: {
//     fontWeight: 600,
//     color: '#059669',
//     fontFamily: "'Courier New', monospace",
//   },
//   equationCol: {
//     fontWeight: 600,
//     color: '#1e40af',
//     fontFamily: "'Courier New', monospace",
//     fontSize: '20px',
//   },
//   resultCol: {
//     fontWeight: 700,
//     color: '#dc2626',
//     fontFamily: "'Courier New', monospace",
//     background: '#fef2f2',
//     fontSize: '20px',
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
//     border: '1px solid #10b981',
//     background: 'white',
//     color: '#10b981',
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

// export default MultiplicationTables;


'use client';

import { useState, useEffect, useMemo } from 'react';

const MultiplicationTables = () => {
  const [selectedNumber, setSelectedNumber] = useState(5);
  const [numberInput, setNumberInput] = useState('5');
  const [tableRange, setTableRange] = useState(12);
  const [rangeInput, setRangeInput] = useState('12');
  const [currentPage, setCurrentPage] = useState(1);
  const [numberError, setNumberError] = useState('');
  const [rangeError, setRangeError] = useState('');
  
  const rowsPerPage = 20;

  // Generate multiplication table data
  const multiplicationData = useMemo(() => {
    return Array.from({ length: tableRange }, (_, i) => {
      const multiplier = i + 1;
      const result = selectedNumber * multiplier;
      return {
        multiplier,
        equation: `${selectedNumber} × ${multiplier} = ${result}`,
        result
      };
    });
  }, [selectedNumber, tableRange]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedNumber, tableRange]);

  const totalPages = Math.ceil(multiplicationData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPageData = multiplicationData.slice(startIndex, startIndex + rowsPerPage);

  const handleNumberChange = (value) => {
    setNumberInput(value);
    
    if (value === '') {
      setNumberError('');
      return;
    }
    
    const num = parseInt(value);
    
    if (num < 1 || num > 999 || isNaN(num)) {
      setNumberError('Number must be between 1 and 999');
      return;
    }
    
    setNumberError('');
    setSelectedNumber(num);
  };

  const handleRangeChange = (value) => {
    setRangeInput(value);
    
    if (value === '') {
      setRangeError('');
      return;
    }
    
    const range = parseInt(value);
    
    if (range < 1 || range > 100 || isNaN(range)) {
      setRangeError('Range must be between 1 and 100');
      return;
    }
    
    setRangeError('');
    setTableRange(range);
  };

  const resetNumber = () => {
    setSelectedNumber(5);
    setNumberInput('5');
    setNumberError('');
  };

  const resetRange = () => {
    setTableRange(12);
    setRangeInput('12');
    setRangeError('');
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>✖️ Multiplication Table Generator</h1>
        <p style={styles.subtitle}>Create multiplication tables for any Multiplicand (up to 999)</p>
      </div>
      
      <div style={styles.controls}>
        <div style={styles.controlGroup}>
          <label style={styles.label}>Multiplicand (1-999):</label>
          <div style={styles.inputGroup}>
            <input
              type="number"
              min="1"
              max="999"
              value={numberInput}
              onChange={(e) => handleNumberChange(e.target.value)}
              placeholder="Enter number"
              style={styles.input}
            />
            <button 
              onClick={resetNumber}
              style={styles.resetButton}
              title="Reset to 5"
              onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
            >
              Reset
            </button>
          </div>
          {numberError && <div style={styles.error}>{numberError}</div>}
        </div>
        
        <div style={styles.controlGroup}>
          <label style={styles.label}>Table Range (1-100):</label>
          <div style={styles.inputGroup}>
            <input
              type="number"
              min="1"
              max="100"
              value={rangeInput}
              onChange={(e) => handleRangeChange(e.target.value)}
              placeholder="Enter range"
              style={styles.input}
            />
            <button 
              onClick={resetRange}
              style={styles.resetButton}
              title="Reset to 12"
              onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
            >
              Reset
            </button>
          </div>
          {rangeError && <div style={styles.error}>{rangeError}</div>}
        </div>
      </div>
      
      <div style={styles.tableContainer}>
        <div style={styles.info}>
          Multiplication Table of {selectedNumber} | Showing {startIndex + 1}-{Math.min(startIndex + rowsPerPage, multiplicationData.length)} of {multiplicationData.length} entries
        </div>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Multiplier</th>
              <th style={styles.th}>Equation</th>
              <th style={styles.th}>Result</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <tr 
                key={item.multiplier}
                style={{
                  ...styles.tr,
                  ...(index % 2 === 0 ? styles.trEven : {}),
                }}
                onMouseEnter={(e) => e.target.parentElement.style.background = '#eff6ff'}
                onMouseLeave={(e) => e.target.parentElement.style.background = index % 2 === 0 ? '#f8fafc' : 'white'}
              >
                <td style={{...styles.td, ...styles.multiplierCol}}>{item.multiplier}</td>
                <td style={{...styles.td, ...styles.equationCol}}>{item.equation}</td>
                <td style={{...styles.td, ...styles.resultCol}}>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {totalPages > 1 && (
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
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
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
    gap: '30px',
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
    fontWeight: 500,
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
    padding: '15px 20px',
    fontWeight: 600,
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  td: {
    padding: '15px 20px',
    borderBottom: '1px solid #e2e8f0',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 600,
  },
  tr: {
    background: 'white',
  },
  trEven: {
    background: '#f8fafc',
  },
  multiplierCol: {
    fontWeight: 600,
    color: '#059669',
    fontFamily: "'Courier New', monospace",
  },
  equationCol: {
    fontWeight: 600,
    color: '#1e40af',
    fontFamily: "'Courier New', monospace",
    fontSize: '20px',
  },
  resultCol: {
    fontWeight: 600,
    color: '#0369a1',
    background: '#eff6ff',
    fontFamily: "'Courier New', monospace",
    fontSize: '18px',
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

export default MultiplicationTables;