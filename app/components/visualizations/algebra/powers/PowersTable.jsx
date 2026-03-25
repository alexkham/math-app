// import React, { useState, useMemo, useId } from 'react';

// const PowerTable = () => {
//   const [base, setBase] = useState(2);
//   const [maxPower, setMaxPower] = useState(10);
//   const [baseInput, setBaseInput] = useState('2');
//   const [powerInput, setPowerInput] = useState('10');
//   const [baseError, setBaseError] = useState('');
//   const [powerError, setPowerError] = useState('');
//   const [showPowerTooltip, setShowPowerTooltip] = useState(false);

//   const handleReset = () => {
//     setBase(2);
//     setMaxPower(10);
//     setBaseInput('2');
//     setPowerInput('10');
//     setBaseError('');
//     setPowerError('');
//   };

//   const baseInputId = useId();
//   const powerInputId = useId();

//   const getMaxAllowedPower = (b) => {
//     if (b <= 4) return 16;
//     return 10;
//   };

//   const maxAllowed = getMaxAllowedPower(base);

//   const renderExpression = (b, p) => {
//     if (p === 0) return '1';
//     if (p === 1) return String(b);
//     if (p <= 10) {
//       return Array(p).fill(b).join(' × ');
//     }
//     return `${b} × ${b} × ... × ${b} (${p} times)`;
//   };

//   const calculatePower = (b, p) => {
//     return BigInt(b) ** BigInt(p);
//   };

//   const formatBigInt = (value) => {
//     return value.toLocaleString();
//   };

//   const handleBaseChange = (e) => {
//     const inputVal = e.target.value;
//     setBaseInput(inputVal);

//     if (inputVal === '') {
//       setBaseError('Please enter a base');
//       return;
//     }

//     const num = parseInt(inputVal);
    
//     if (isNaN(num)) {
//       setBaseError('Must be a number');
//       return;
//     }
    
//     if (num < 2) {
//       setBaseError('Minimum base is 2');
//       return;
//     }
    
//     if (num > 10) {
//       setBaseError('Maximum base is 10');
//       return;
//     }

//     setBaseError('');
//     setBase(num);
    
//     const newMax = getMaxAllowedPower(num);
//     if (maxPower > newMax) {
//       setMaxPower(newMax);
//       setPowerInput(String(newMax));
//       setPowerError('');
//     }
//   };

//   const handlePowerChange = (e) => {
//     const inputVal = e.target.value;
//     setPowerInput(inputVal);

//     if (inputVal === '') {
//       setPowerError('Please enter a power');
//       return;
//     }

//     const num = parseInt(inputVal);
    
//     if (isNaN(num)) {
//       setPowerError('Must be a number');
//       return;
//     }
    
//     if (num < 0) {
//       setPowerError('Minimum power is 0');
//       return;
//     }
    
//     if (num > maxAllowed) {
//       setPowerError(`Maximum power is ${maxAllowed} for base ${base}`);
//       return;
//     }

//     setPowerError('');
//     setMaxPower(num);
//   };

//   const rows = useMemo(() => {
//     const result = [];
//     for (let p = 0; p <= maxPower; p++) {
//       result.push({
//         power: p,
//         expression: renderExpression(base, p),
//         value: calculatePower(base, p)
//       });
//     }
//     return result;
//   }, [base, maxPower]);

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #f8faff 0%, #eef4ff 100%)',
//       fontFamily: '"Source Serif 4", Georgia, serif',
//       padding: '40px 20px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     },
//     innerContainer: {
//       maxWidth: '700px',
//       width: '100%'
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '32px'
//     },
//     title: {
//       fontFamily: '"Source Serif 4", Georgia, serif',
//       fontSize: '2rem',
//       fontWeight: 700,
//       color: '#1a365d',
//       margin: '0 0 8px 0'
//     },
//     subtitle: {
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '1rem',
//       color: '#4a6fa5',
//       margin: 0
//     },
//     controls: {
//       display: 'flex',
//       gap: '32px',
//       justifyContent: 'center',
//       marginBottom: '32px',
//       flexWrap: 'wrap'
//     },
//     controlWrapper: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       gap: '6px'
//     },
//     controlGroup: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       background: '#fff',
//       padding: '12px 20px',
//       borderRadius: '10px',
//       border: '1px solid #c8e0ff'
//     },
//     controlGroupError: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       background: '#fff',
//       padding: '12px 20px',
//       borderRadius: '10px',
//       border: '2px solid #e53e3e'
//     },
//     controlLabel: {
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '0.9rem',
//       color: '#4a6fa5',
//       fontWeight: 500
//     },
//     controlInput: {
//       fontFamily: '"Source Serif 4", Georgia, serif',
//       fontSize: '1.3rem',
//       fontWeight: 600,
//       width: '70px',
//       textAlign: 'center',
//       padding: '8px',
//       border: '2px solid #c8e0ff',
//       borderRadius: '8px',
//       background: '#f8faff',
//       color: '#1a365d',
//       outline: 'none'
//     },
//     controlInputError: {
//       fontFamily: '"Source Serif 4", Georgia, serif',
//       fontSize: '1.3rem',
//       fontWeight: 600,
//       width: '70px',
//       textAlign: 'center',
//       padding: '8px',
//       border: '2px solid #e53e3e',
//       borderRadius: '8px',
//       background: '#fff5f5',
//       color: '#c53030',
//       outline: 'none'
//     },
//     errorMessage: {
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '0.8rem',
//       color: '#e53e3e',
//       margin: 0,
//       minHeight: '1.2em'
//     },
//     tooltipWrapper: {
//       position: 'relative',
//       display: 'inline-flex',
//       alignItems: 'center'
//     },
//     tooltipIcon: {
//       width: '18px',
//       height: '18px',
//       borderRadius: '50%',
//       background: '#4a6fa5',
//       color: '#fff',
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '12px',
//       fontWeight: 600,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       cursor: 'pointer',
//       marginLeft: '8px',
//       border: 'none'
//     },
//     tooltipBox: {
//       position: 'absolute',
//       top: '100%',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       marginTop: '8px',
//       padding: '12px 16px',
//       background: '#1a365d',
//       color: '#fff',
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '0.85rem',
//       lineHeight: 1.5,
//       borderRadius: '8px',
//       width: '240px',
//       textAlign: 'left',
//       zIndex: 100,
//       boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
//     },
//     tooltipArrow: {
//       position: 'absolute',
//       top: '-6px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       width: 0,
//       height: 0,
//       borderLeft: '6px solid transparent',
//       borderRight: '6px solid transparent',
//       borderBottom: '6px solid #1a365d'
//     },
//     tableContainer: {
//       background: '#fff',
//       borderRadius: '12px',
//       overflow: 'hidden',
//       border: '1px solid #c8e0ff',
//       boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)'
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'collapse'
//     },
//     thead: {
//       background: '#2563eb'
//     },
//     th: {
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '0.95rem',
//       fontWeight: 600,
//       color: '#fff',
//       padding: '16px 20px',
//       textAlign: 'center'
//     },
//     td: {
//       padding: '14px 20px',
//       textAlign: 'center',
//       borderBottom: '1px solid #e0efff'
//     },
//     powerCell: {
//       fontFamily: '"Source Serif 4", Georgia, serif',
//       fontSize: '1.3rem',
//       fontWeight: 600,
//       color: '#2563eb'
//     },
//     expressionCell: {
//       fontFamily: '"Source Serif 4", Georgia, serif',
//       fontSize: '1rem',
//       color: '#1a365d',
//       letterSpacing: '0.5px'
//     },
//     valueCell: {
//       fontFamily: '"Source Serif 4", Georgia, serif',
//       fontSize: '1.2rem',
//       fontWeight: 700,
//       color: '#1a365d'
//     },
//     patternNote: {
//       marginTop: '24px',
//       padding: '16px 20px',
//       background: '#fff',
//       borderRadius: '10px',
//       border: '1px solid #c8e0ff',
//       textAlign: 'center'
//     },
//     patternText: {
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '0.95rem',
//       color: '#4a6fa5',
//       margin: 0
//     },
//     patternStrong: {
//       color: '#2563eb'
//     },
//     resetButton: {
//       fontFamily: '"IBM Plex Sans", sans-serif',
//       fontSize: '0.9rem',
//       fontWeight: 500,
//       padding: '12px 24px',
//       background: 'transparent',
//       color: '#4a6fa5',
//       border: '2px solid #c8e0ff',
//       borderRadius: '10px',
//       cursor: 'pointer',
//       transition: 'all 0.15s ease'
//     },
//     resetButtonHover: {
//       background: '#f0f7ff',
//       borderColor: '#2563eb',
//       color: '#2563eb'
//     }
//   };

//   const getRowStyle = (index, isLast) => ({
//     ...styles.td,
//     borderBottom: isLast ? 'none' : '1px solid #e0efff',
//     background: index % 2 === 1 ? '#f8faff' : 'transparent'
//   });

//   return (
//     <div style={styles.container}>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
//         rel="stylesheet"
//       />

//       <div style={styles.innerContainer}>
//         <div style={styles.header}>
//           <h1 style={styles.title}>Power Table</h1>
//           <p style={styles.subtitle}>See the pattern as powers grow</p>
//         </div>

//         <div style={styles.controls}>
//           <div style={styles.controlWrapper}>
//             <div style={baseError ? styles.controlGroupError : styles.controlGroup}>
//               <label htmlFor={baseInputId} style={styles.controlLabel}>
//                 Base
//               </label>
//               <input
//                 id={baseInputId}
//                 type="number"
//                 style={baseError ? styles.controlInputError : styles.controlInput}
//                 value={baseInput}
//                 onChange={handleBaseChange}
//                 min="2"
//                 max="10"
//                 aria-invalid={!!baseError}
//                 aria-describedby={baseError ? `${baseInputId}-error` : undefined}
//               />
//             </div>
//             <p 
//               id={`${baseInputId}-error`} 
//               style={styles.errorMessage}
//               role="alert"
//             >
//               {baseError || '\u00A0'}
//             </p>
//           </div>

//           <div style={styles.controlWrapper}>
//             <div style={powerError ? styles.controlGroupError : styles.controlGroup}>
//               <label htmlFor={powerInputId} style={styles.controlLabel}>
//                 Max Power
//               </label>
//               <input
//                 id={powerInputId}
//                 type="number"
//                 style={powerError ? styles.controlInputError : styles.controlInput}
//                 value={powerInput}
//                 onChange={handlePowerChange}
//                 min="0"
//                 max={maxAllowed}
//                 aria-invalid={!!powerError}
//                 aria-describedby={powerError ? `${powerInputId}-error` : undefined}
//               />
//               <div style={styles.tooltipWrapper}>
//                 <button
//                   type="button"
//                   style={styles.tooltipIcon}
//                   onMouseEnter={() => setShowPowerTooltip(true)}
//                   onMouseLeave={() => setShowPowerTooltip(false)}
//                   onFocus={() => setShowPowerTooltip(true)}
//                   onBlur={() => setShowPowerTooltip(false)}
//                   aria-label="Why is there a maximum power?"
//                 >
//                   ?
//                 </button>
//                 {showPowerTooltip && (
//                   <div style={styles.tooltipBox} role="tooltip">
//                     <div style={styles.tooltipArrow}></div>
//                     <strong>Why the limit?</strong><br />
//                     Bases 2–4 allow powers up to 16.<br />
//                     Bases 5–10 are capped at power 10.<br /><br />
//                     Higher powers produce extremely large numbers that become hard to display.
//                   </div>
//                 )}
//               </div>
//             </div>
//             <p 
//               id={`${powerInputId}-error`} 
//               style={styles.errorMessage}
//               role="alert"
//             >
//               {powerError || '\u00A0'}
//             </p>
//           </div>

//           <div style={styles.controlWrapper}>
//             <button
//               type="button"
//               style={styles.resetButton}
//               onClick={handleReset}
//               onMouseEnter={(e) => {
//                 e.target.style.background = '#f0f7ff';
//                 e.target.style.borderColor = '#2563eb';
//                 e.target.style.color = '#2563eb';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'transparent';
//                 e.target.style.borderColor = '#c8e0ff';
//                 e.target.style.color = '#4a6fa5';
//               }}
//             >
//               Reset All
//             </button>
//             <p style={styles.errorMessage}>{'\u00A0'}</p>
//           </div>
//         </div>

//         <div style={styles.tableContainer}>
//           <table style={styles.table} aria-live="polite" aria-atomic="true">
//             <thead style={styles.thead}>
//               <tr>
//                 <th style={styles.th} scope="col">Power</th>
//                 <th style={styles.th} scope="col">Expression</th>
//                 <th style={styles.th} scope="col">Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row, index) => (
//                 <tr key={row.power}>
//                   <td style={{ ...getRowStyle(index, index === rows.length - 1), ...styles.powerCell }}>
//                     {base}<sup>{row.power}</sup>
//                   </td>
//                   <td style={{ ...getRowStyle(index, index === rows.length - 1), ...styles.expressionCell }}>
//                     {row.expression}
//                   </td>
//                   <td style={{ ...getRowStyle(index, index === rows.length - 1), ...styles.valueCell }}>
//                     {formatBigInt(row.value)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div style={styles.patternNote}>
//           <p style={styles.patternText}>
//             Each row is <strong style={styles.patternStrong}>×{base}</strong> the row above it — that is the power of exponents!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PowerTable;


import React, { useState, useMemo, useId } from 'react';
import { Source_Serif_4, IBM_Plex_Sans } from 'next/font/google';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const serifFont = sourceSerif.style.fontFamily;
const sansFont = ibmPlex.style.fontFamily;

const PowerTable = () => {
  const [base, setBase] = useState(2);
  const [maxPower, setMaxPower] = useState(10);
  const [baseInput, setBaseInput] = useState('2');
  const [powerInput, setPowerInput] = useState('10');
  const [baseError, setBaseError] = useState('');
  const [powerError, setPowerError] = useState('');
  const [showPowerTooltip, setShowPowerTooltip] = useState(false);

  const handleReset = () => {
    setBase(2);
    setMaxPower(10);
    setBaseInput('2');
    setPowerInput('10');
    setBaseError('');
    setPowerError('');
  };

  const baseInputId = useId();
  const powerInputId = useId();

  const getMaxAllowedPower = (b) => {
    if (b <= 4) return 16;
    return 10;
  };

  const maxAllowed = getMaxAllowedPower(base);

  const renderExpression = (b, p) => {
    if (p === 0) return '1';
    if (p === 1) return String(b);
    if (p <= 10) {
      return Array(p).fill(b).join(' × ');
    }
    return `${b} × ${b} × ... × ${b} (${p} times)`;
  };

  const calculatePower = (b, p) => {
    return BigInt(b) ** BigInt(p);
  };

  const formatBigInt = (value) => {
    return value.toLocaleString();
  };

  const handleBaseChange = (e) => {
    const inputVal = e.target.value;
    setBaseInput(inputVal);

    if (inputVal === '') {
      setBaseError('Please enter a base');
      return;
    }

    const num = parseInt(inputVal);
    
    if (isNaN(num)) {
      setBaseError('Must be a number');
      return;
    }
    
    if (num < 2) {
      setBaseError('Minimum base is 2');
      return;
    }
    
    if (num > 10) {
      setBaseError('Maximum base is 10');
      return;
    }

    setBaseError('');
    setBase(num);
    
    const newMax = getMaxAllowedPower(num);
    if (maxPower > newMax) {
      setMaxPower(newMax);
      setPowerInput(String(newMax));
      setPowerError('');
    }
  };

  const handlePowerChange = (e) => {
    const inputVal = e.target.value;
    setPowerInput(inputVal);

    if (inputVal === '') {
      setPowerError('Please enter a power');
      return;
    }

    const num = parseInt(inputVal);
    
    if (isNaN(num)) {
      setPowerError('Must be a number');
      return;
    }
    
    if (num < 0) {
      setPowerError('Minimum power is 0');
      return;
    }
    
    if (num > maxAllowed) {
      setPowerError(`Maximum power is ${maxAllowed} for base ${base}`);
      return;
    }

    setPowerError('');
    setMaxPower(num);
  };

  const rows = useMemo(() => {
    const result = [];
    for (let p = 0; p <= maxPower; p++) {
      result.push({
        power: p,
        expression: renderExpression(base, p),
        value: calculatePower(base, p)
      });
    }
    return result;
  }, [base, maxPower]);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8faff 0%, #eef4ff 100%)',
      fontFamily: serifFont,
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    innerContainer: {
      maxWidth: '700px',
      width: '100%'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    title: {
      fontFamily: serifFont,
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1a365d',
      margin: '0 0 8px 0'
    },
    subtitle: {
      fontFamily: sansFont,
      fontSize: '1rem',
      color: '#4a6fa5',
      margin: 0
    },
    controls: {
      display: 'flex',
      gap: '32px',
      justifyContent: 'center',
      marginBottom: '32px',
      flexWrap: 'wrap'
    },
    controlWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    },
    controlGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: '#fff',
      padding: '12px 20px',
      borderRadius: '10px',
      border: '1px solid #c8e0ff'
    },
    controlGroupError: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: '#fff',
      padding: '12px 20px',
      borderRadius: '10px',
      border: '2px solid #e53e3e'
    },
    controlLabel: {
      fontFamily: sansFont,
      fontSize: '0.9rem',
      color: '#4a6fa5',
      fontWeight: 500
    },
    controlInput: {
      fontFamily: serifFont,
      fontSize: '1.3rem',
      fontWeight: 600,
      width: '70px',
      textAlign: 'center',
      padding: '8px',
      border: '2px solid #c8e0ff',
      borderRadius: '8px',
      background: '#f8faff',
      color: '#1a365d',
      outline: 'none'
    },
    controlInputError: {
      fontFamily: serifFont,
      fontSize: '1.3rem',
      fontWeight: 600,
      width: '70px',
      textAlign: 'center',
      padding: '8px',
      border: '2px solid #e53e3e',
      borderRadius: '8px',
      background: '#fff5f5',
      color: '#c53030',
      outline: 'none'
    },
    errorMessage: {
      fontFamily: sansFont,
      fontSize: '0.8rem',
      color: '#e53e3e',
      margin: 0,
      minHeight: '1.2em'
    },
    tooltipWrapper: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center'
    },
    tooltipIcon: {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: '#4a6fa5',
      color: '#fff',
      fontFamily: sansFont,
      fontSize: '12px',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      marginLeft: '8px',
      border: 'none'
    },
    tooltipBox: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px',
      padding: '12px 16px',
      background: '#1a365d',
      color: '#fff',
      fontFamily: sansFont,
      fontSize: '0.85rem',
      lineHeight: 1.5,
      borderRadius: '8px',
      width: '240px',
      textAlign: 'left',
      zIndex: 100,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
    },
    tooltipArrow: {
      position: 'absolute',
      top: '-6px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderBottom: '6px solid #1a365d'
    },
    tableContainer: {
      background: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #c8e0ff',
      boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    thead: {
      background: '#2563eb'
    },
    th: {
      fontFamily: sansFont,
      fontSize: '0.95rem',
      fontWeight: 600,
      color: '#fff',
      padding: '16px 20px',
      textAlign: 'center'
    },
    td: {
      padding: '14px 20px',
      textAlign: 'center',
      borderBottom: '1px solid #e0efff'
    },
    powerCell: {
      fontFamily: serifFont,
      fontSize: '1.3rem',
      fontWeight: 600,
      color: '#2563eb'
    },
    expressionCell: {
      fontFamily: serifFont,
      fontSize: '1rem',
      color: '#1a365d',
      letterSpacing: '0.5px'
    },
    valueCell: {
      fontFamily: serifFont,
      fontSize: '1.2rem',
      fontWeight: 700,
      color: '#1a365d'
    },
    patternNote: {
      marginTop: '24px',
      padding: '16px 20px',
      background: '#fff',
      borderRadius: '10px',
      border: '1px solid #c8e0ff',
      textAlign: 'center'
    },
    patternText: {
      fontFamily: sansFont,
      fontSize: '0.95rem',
      color: '#4a6fa5',
      margin: 0
    },
    patternStrong: {
      color: '#2563eb'
    },
    resetButton: {
      fontFamily: sansFont,
      fontSize: '0.9rem',
      fontWeight: 500,
      padding: '12px 24px',
      background: 'transparent',
      color: '#4a6fa5',
      border: '2px solid #c8e0ff',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.15s ease'
    },
    resetButtonHover: {
      background: '#f0f7ff',
      borderColor: '#2563eb',
      color: '#2563eb'
    }
  };

  const getRowStyle = (index, isLast) => ({
    ...styles.td,
    borderBottom: isLast ? 'none' : '1px solid #e0efff',
    background: index % 2 === 1 ? '#f8faff' : 'transparent'
  });

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.header}>
          {/* <h1 style={styles.title}>Power Table</h1> */}
          <p style={styles.subtitle}>See the pattern as powers grow</p>
        </div>

        <div style={styles.controls}>
          <div style={styles.controlWrapper}>
            <div style={baseError ? styles.controlGroupError : styles.controlGroup}>
              <label htmlFor={baseInputId} style={styles.controlLabel}>
                Base
              </label>
              <input
                id={baseInputId}
                type="number"
                style={baseError ? styles.controlInputError : styles.controlInput}
                value={baseInput}
                onChange={handleBaseChange}
                min="2"
                max="10"
                aria-invalid={!!baseError}
                aria-describedby={baseError ? `${baseInputId}-error` : undefined}
              />
            </div>
            <p 
              id={`${baseInputId}-error`} 
              style={styles.errorMessage}
              role="alert"
            >
              {baseError || '\u00A0'}
            </p>
          </div>

          <div style={styles.controlWrapper}>
            <div style={powerError ? styles.controlGroupError : styles.controlGroup}>
              <label htmlFor={powerInputId} style={styles.controlLabel}>
                Max Power
              </label>
              <input
                id={powerInputId}
                type="number"
                style={powerError ? styles.controlInputError : styles.controlInput}
                value={powerInput}
                onChange={handlePowerChange}
                min="0"
                max={maxAllowed}
                aria-invalid={!!powerError}
                aria-describedby={powerError ? `${powerInputId}-error` : undefined}
              />
              <div style={styles.tooltipWrapper}>
                <button
                  type="button"
                  style={styles.tooltipIcon}
                  onMouseEnter={() => setShowPowerTooltip(true)}
                  onMouseLeave={() => setShowPowerTooltip(false)}
                  onFocus={() => setShowPowerTooltip(true)}
                  onBlur={() => setShowPowerTooltip(false)}
                  aria-label="Why is there a maximum power?"
                >
                  ?
                </button>
                {showPowerTooltip && (
                  <div style={styles.tooltipBox} role="tooltip">
                    <div style={styles.tooltipArrow}></div>
                    <strong>Why the limit?</strong><br />
                    Bases 2–4 allow powers up to 16.<br />
                    Bases 5–10 are capped at power 10.<br /><br />
                    Higher powers produce extremely large numbers that become hard to display.
                  </div>
                )}
              </div>
            </div>
            <p 
              id={`${powerInputId}-error`} 
              style={styles.errorMessage}
              role="alert"
            >
              {powerError || '\u00A0'}
            </p>
          </div>

          <div style={styles.controlWrapper}>
            <button
              type="button"
              style={styles.resetButton}
              onClick={handleReset}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f7ff';
                e.target.style.borderColor = '#2563eb';
                e.target.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = '#c8e0ff';
                e.target.style.color = '#4a6fa5';
              }}
            >
              Reset All
            </button>
            <p style={styles.errorMessage}>{'\u00A0'}</p>
          </div>
        </div>

        <div style={styles.tableContainer}>
          <table style={styles.table} aria-live="polite" aria-atomic="true">
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th} scope="col">Power</th>
                <th style={styles.th} scope="col">Expression</th>
                <th style={styles.th} scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.power}>
                  <td style={{ ...getRowStyle(index, index === rows.length - 1), ...styles.powerCell }}>
                    {base}<sup>{row.power}</sup>
                  </td>
                  <td style={{ ...getRowStyle(index, index === rows.length - 1), ...styles.expressionCell }}>
                    {row.expression}
                  </td>
                  <td style={{ ...getRowStyle(index, index === rows.length - 1), ...styles.valueCell }}>
                    {formatBigInt(row.value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.patternNote}>
          <p style={styles.patternText}>
            Each row is <strong style={styles.patternStrong}>×{base}</strong> the row above it — that is the power of exponents!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerTable;