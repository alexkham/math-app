// // // // import React, { useState, useRef } from 'react';

// // // // const DegreeRadianConversionTable = () => {
// // // //  const tableRef = useRef(null);

// // // //  // Function to convert degrees to radians
// // // //  const degreesToRadians = (degrees) => {
// // // //    return degrees * (Math.PI / 180);
// // // //  };

// // // //  // Function to get pi form representation
// // // //  const getPiForm = (degrees) => {
// // // //    if (degrees === 0) return '0';
// // // //    if (degrees === 180) return 'π';
// // // //    if (degrees === 360) return '2π';
   
// // // //    const gcd = (a, b) => b ? gcd(b, a % b) : a;
// // // //    const numerator = degrees;
// // // //    const denominator = 180;
// // // //    const divisor = gcd(numerator, denominator);
   
// // // //    const simplifiedNumerator = numerator / divisor;
// // // //    const simplifiedDenominator = denominator / divisor;
   
// // // //    if (simplifiedNumerator === 1 && simplifiedDenominator === 1) return 'π';
// // // //    if (simplifiedNumerator === 2 && simplifiedDenominator === 1) return '2π';
   
// // // //    if (simplifiedNumerator === 1) {
// // // //      return `π/${simplifiedDenominator}`;
// // // //    } else {
// // // //      return `${simplifiedNumerator}π/${simplifiedDenominator}`;
// // // //    }
// // // //  };

// // // //  // Generate degrees from 0 to 360
// // // //  const degrees = Array.from({ length: 361 }, (_, i) => i);

// // // //  // Styling
// // // //  const styles = {
// // // //    container: {
// // // //      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
// // // //      maxWidth: '900px',
// // // //      margin: '40px auto',
// // // //      padding: '20px',
// // // //      backgroundColor: '#f9f9f9',
// // // //    },
// // // //    title: {
// // // //      color: '#2c3e50',
// // // //      textAlign: 'center',
// // // //      marginBottom: '30px',
// // // //      fontSize: '28px',
// // // //    },
// // // //    formula: {
// // // //      backgroundColor: '#edf7ff',
// // // //      padding: '15px',
// // // //      borderRadius: '5px',
// // // //      margin: '20px 0',
// // // //      borderLeft: '4px solid #3498db',
// // // //    },
// // // //    tableContainer: {
// // // //      maxHeight: '600px',
// // // //      overflowY: 'auto',
// // // //      marginBottom: '30px',
// // // //      position: 'relative',
// // // //      zIndex: 1,
// // // //    },
// // // //    table: {
// // // //      width: '100%',
// // // //      borderCollapse: 'separate',
// // // //      borderSpacing: 0,
// // // //      margin: '20px 0',
// // // //      backgroundColor: '#fff',
// // // //      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
// // // //      borderRadius: '8px',
// // // //      overflow: 'visible',
// // // //    },
// // // //    thead: {
// // // //      position: 'sticky',
// // // //      top: 0,
// // // //      zIndex: 2,
// // // //      display: 'table-header-group',
// // // //      WebkitPositionSticky: 'fixed',
// // // //      WebkitTransform: 'translateZ(0)',
// // // //    },
// // // //    th: {
// // // //      backgroundColor: '#3498db',
// // // //      color: '#fff',
// // // //      padding: '12px 15px',
// // // //      textAlign: 'center',
// // // //      fontWeight: '500',
// // // //    },
// // // //    td: {
// // // //      borderBottom: '1px solid #eee',
// // // //      padding: '10px 12px',
// // // //      textAlign: 'center',
// // // //    }
// // // //  };

// // // //  return (
// // // //    <div style={styles.container}>
// // // //      {/* <h1 style={styles.title}>Degree-Radian Conversion Table</h1> */}
     
// // // //      <div style={styles.formula}>
// // // //        <strong>Degrees to Radians:</strong> rad = deg × (π/180)<br />
// // // //        <strong>Radians to Degrees:</strong> deg = rad × (180/π)
// // // //      </div>
     
// // // //      <div style={styles.tableContainer}>
// // // //        <table style={styles.table} ref={tableRef}>
// // // //          <thead style={styles.thead}>
// // // //            <tr>
// // // //              <th style={styles.th}>Degrees</th>
// // // //              <th style={styles.th}>Radians (π form)</th>
// // // //              <th style={styles.th}>Radians (Decimal)</th>
// // // //            </tr>
// // // //          </thead>
// // // //          <tbody>
// // // //            {degrees.map((degree, index) => {
// // // //              const radian = degreesToRadians(degree);
// // // //              const piForm = getPiForm(degree);
             
// // // //              return (
// // // //                <tr 
// // // //                  key={degree} 
// // // //                  style={index % 2 ? { backgroundColor: '#f8f9fa' } : {}}
// // // //                >
// // // //                  <td style={styles.td}>{degree}°</td>
// // // //                  <td style={styles.td}>{piForm}</td>
// // // //                  <td style={styles.td}>{radian.toFixed(4)}</td>
// // // //                </tr>
// // // //              );
// // // //            })}
// // // //          </tbody>
// // // //        </table>
// // // //      </div>
// // // //    </div>
// // // //  );
// // // // };

// // // // export default DegreeRadianConversionTable;

// // // import React, { useState, useRef } from 'react';

// // // const DegreeRadianConversionTable = () => {
// // //  const tableRef = useRef(null);
// // //  const [searchQuery, setSearchQuery] = useState('');
// // //  const [searchType, setSearchType] = useState('degrees'); // 'degrees' or 'radians'
 
// // //  // Function to convert degrees to radians
// // //  const degreesToRadians = (degrees) => {
// // //    return degrees * (Math.PI / 180);
// // //  };

// // //  // Function to get pi form representation
// // //  const getPiForm = (degrees) => {
// // //    if (degrees === 0) return '0';
// // //    if (degrees === 180) return 'π';
// // //    if (degrees === 360) return '2π';
   
// // //    const gcd = (a, b) => b ? gcd(b, a % b) : a;
// // //    const numerator = degrees;
// // //    const denominator = 180;
// // //    const divisor = gcd(numerator, denominator);
   
// // //    const simplifiedNumerator = numerator / divisor;
// // //    const simplifiedDenominator = denominator / divisor;
   
// // //    if (simplifiedNumerator === 1 && simplifiedDenominator === 1) return 'π';
// // //    if (simplifiedNumerator === 2 && simplifiedDenominator === 1) return '2π';
   
// // //    if (simplifiedNumerator === 1) {
// // //      return `π/${simplifiedDenominator}`;
// // //    } else {
// // //      return `${simplifiedNumerator}π/${simplifiedDenominator}`;
// // //    }
// // //  };

// // //  // Generate degrees from 0 to 360
// // //  const degrees = Array.from({ length: 361 }, (_, i) => i);

// // //  // Filter the data based on search query
// // //  const filteredDegrees = degrees.filter(degree => {
// // //    if (!searchQuery) return true;
   
// // //    const radian = degreesToRadians(degree);
// // //    const piForm = getPiForm(degree);
   
// // //    if (searchType === 'degrees') {
// // //      return degree.toString().includes(searchQuery);
// // //    } else if (searchType === 'radians') {
// // //      return piForm.includes(searchQuery) || radian.toFixed(4).includes(searchQuery);
// // //    }
// // //    return true;
// // //  });

// // //  // Highlight the matched text
// // //  const highlightMatch = (text, query) => {
// // //    if (!query) return text;
   
// // //    const stringText = text.toString();
// // //    const index = stringText.toLowerCase().indexOf(query.toLowerCase());
   
// // //    if (index === -1) return stringText;
   
// // //    return (
// // //      <>
// // //        {stringText.substring(0, index)}
// // //        <span style={{ backgroundColor: '#ffff00', fontWeight: 'bold' }}>
// // //          {stringText.substring(index, index + query.length)}
// // //        </span>
// // //        {stringText.substring(index + query.length)}
// // //      </>
// // //    );
// // //  };

// // //  // Styling
// // //  const styles = {
// // //    container: {
// // //      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
// // //      maxWidth: '900px',
// // //      margin: '40px auto',
// // //      padding: '20px',
// // //      backgroundColor: '#f9f9f9',
// // //    },
// // //    title: {
// // //      color: '#2c3e50',
// // //      textAlign: 'center',
// // //      marginBottom: '30px',
// // //      fontSize: '28px',
// // //    },
// // //    formula: {
// // //      backgroundColor: '#edf7ff',
// // //      padding: '15px',
// // //      borderRadius: '5px',
// // //      margin: '20px 0',
// // //      borderLeft: '4px solid #3498db',
// // //    },
// // //    searchContainer: {
// // //      display: 'flex',
// // //      marginBottom: '20px',
// // //      gap: '10px',
// // //      alignItems: 'center',
// // //    },
// // //    searchInput: {
// // //      flex: 1,
// // //      padding: '8px 12px',
// // //      borderRadius: '4px',
// // //      border: '1px solid #ddd',
// // //      fontSize: '16px',
// // //    },
// // //    radioContainer: {
// // //      display: 'flex',
// // //      gap: '15px',
// // //    },
// // //    radioLabel: {
// // //      display: 'flex',
// // //      alignItems: 'center',
// // //      gap: '5px',
// // //      cursor: 'pointer',
// // //    },
// // //    tableContainer: {
// // //      maxHeight: '600px',
// // //      overflowY: 'auto',
// // //      marginBottom: '30px',
// // //      position: 'relative',
// // //      zIndex: 1,
// // //    },
// // //    table: {
// // //      width: '100%',
// // //      borderCollapse: 'separate',
// // //      borderSpacing: 0,
// // //      margin: '20px 0',
// // //      backgroundColor: '#fff',
// // //      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
// // //      borderRadius: '8px',
// // //      overflow: 'visible',
// // //    },
// // //    thead: {
// // //      position: 'sticky',
// // //      top: 0,
// // //      zIndex: 2,
// // //      display: 'table-header-group',
// // //      WebkitPositionSticky: 'fixed',
// // //      WebkitTransform: 'translateZ(0)',
// // //    },
// // //    th: {
// // //      backgroundColor: '#3498db',
// // //      color: '#fff',
// // //      padding: '12px 15px',
// // //      textAlign: 'center',
// // //      fontWeight: '500',
// // //    },
// // //    td: {
// // //      borderBottom: '1px solid #eee',
// // //      padding: '10px 12px',
// // //      textAlign: 'center',
// // //    },
// // //    highlight: {
// // //      backgroundColor: '#ffff00',
// // //      fontWeight: 'bold',
// // //    }
// // //  };

// // //  return (
// // //    <div style={styles.container}>
// // //      <h1 style={styles.title}>Degree-Radian Conversion Table</h1>
     
// // //      <div style={styles.formula}>
// // //        <strong>Degrees to Radians:</strong> rad = deg × (π/180)<br />
// // //        <strong>Radians to Degrees:</strong> deg = rad × (180/π)
// // //      </div>
     
// // //      <div style={styles.searchContainer}>
// // //        <input
// // //          type="text"
// // //          placeholder="Search..."
// // //          value={searchQuery}
// // //          onChange={(e) => setSearchQuery(e.target.value)}
// // //          style={styles.searchInput}
// // //        />
// // //        <div style={styles.radioContainer}>
// // //          <label style={styles.radioLabel}>
// // //            <input
// // //              type="radio"
// // //              name="searchType"
// // //              value="degrees"
// // //              checked={searchType === 'degrees'}
// // //              onChange={() => setSearchType('degrees')}
// // //            />
// // //            Search by Degrees
// // //          </label>
// // //          <label style={styles.radioLabel}>
// // //            <input
// // //              type="radio"
// // //              name="searchType"
// // //              value="radians"
// // //              checked={searchType === 'radians'}
// // //              onChange={() => setSearchType('radians')}
// // //            />
// // //            Search by Radians
// // //          </label>
// // //        </div>
// // //      </div>
     
// // //      <div style={styles.tableContainer}>
// // //        <table style={styles.table} ref={tableRef}>
// // //          <thead style={styles.thead}>
// // //            <tr>
// // //              <th style={styles.th}>Degrees</th>
// // //              <th style={styles.th}>Radians (π form)</th>
// // //              <th style={styles.th}>Radians (Decimal)</th>
// // //            </tr>
// // //          </thead>
// // //          <tbody>
// // //            {filteredDegrees.map((degree, index) => {
// // //              const radian = degreesToRadians(degree);
// // //              const piForm = getPiForm(degree);
             
// // //              return (
// // //                <tr 
// // //                  key={degree} 
// // //                  style={index % 2 ? { backgroundColor: '#f8f9fa' } : {}}
// // //                >
// // //                  <td style={styles.td}>
// // //                    {searchType === 'degrees' ? highlightMatch(degree + '°', searchQuery) : degree + '°'}
// // //                  </td>
// // //                  <td style={styles.td}>
// // //                    {searchType === 'radians' ? highlightMatch(piForm, searchQuery) : piForm}
// // //                  </td>
// // //                  <td style={styles.td}>
// // //                    {searchType === 'radians' ? highlightMatch(radian.toFixed(4), searchQuery) : radian.toFixed(4)}
// // //                  </td>
// // //                </tr>
// // //              );
// // //            })}
// // //          </tbody>
// // //        </table>
// // //      </div>
// // //    </div>
// // //  );
// // // };

// // // export default DegreeRadianConversionTable;


// // import React, { useState, useRef } from 'react';

// // const DegreeRadianConversionTable = () => {
// //  const tableRef = useRef(null);
// //  const [searchQuery, setSearchQuery] = useState('');
// //  const [searchType, setSearchType] = useState('degrees'); // 'degrees' or 'radians'
 
// //  // Function to convert degrees to radians
// //  const degreesToRadians = (degrees) => {
// //    return degrees * (Math.PI / 180);
// //  };

// //  // Function to get pi form representation
// //  const getPiForm = (degrees) => {
// //    if (degrees === 0) return '0';
// //    if (degrees === 180) return 'π';
// //    if (degrees === 360) return '2π';
   
// //    const gcd = (a, b) => b ? gcd(b, a % b) : a;
// //    const numerator = degrees;
// //    const denominator = 180;
// //    const divisor = gcd(numerator, denominator);
   
// //    const simplifiedNumerator = numerator / divisor;
// //    const simplifiedDenominator = denominator / divisor;
   
// //    if (simplifiedNumerator === 1 && simplifiedDenominator === 1) return 'π';
// //    if (simplifiedNumerator === 2 && simplifiedDenominator === 1) return '2π';
   
// //    if (simplifiedNumerator === 1) {
// //      return `π/${simplifiedDenominator}`;
// //    } else {
// //      return `${simplifiedNumerator}π/${simplifiedDenominator}`;
// //    }
// //  };

// //  // Generate degrees from 0 to 360
// //  const degrees = Array.from({ length: 361 }, (_, i) => i);

// //  // Filter the data based on search query
// //  const filteredDegrees = degrees.filter(degree => {
// //    if (!searchQuery) return true;
   
// //    const radian = degreesToRadians(degree);
// //    const piForm = getPiForm(degree);
   
// //    if (searchType === 'degrees') {
// //      return degree.toString().includes(searchQuery);
// //    } else if (searchType === 'radians') {
// //      return piForm.includes(searchQuery) || radian.toFixed(4).includes(searchQuery);
// //    }
// //    return true;
// //  });

// //  // Highlight the matched text
// //  const highlightMatch = (text, query) => {
// //    if (!query) return text;
   
// //    const stringText = text.toString();
// //    const index = stringText.toLowerCase().indexOf(query.toLowerCase());
   
// //    if (index === -1) return stringText;
   
// //    return (
// //      <>
// //        {stringText.substring(0, index)}
// //        <span style={{ backgroundColor: '#ffff00', fontWeight: 'bold' }}>
// //          {stringText.substring(index, index + query.length)}
// //        </span>
// //        {stringText.substring(index + query.length)}
// //      </>
// //    );
// //  };

// //  // Reset search
// //  const resetSearch = () => {
// //    setSearchQuery('');
// //  };

// //  // Styling
// //  const styles = {
// //    container: {
// //      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
// //      maxWidth: '900px',
// //      margin: '40px auto',
// //      padding: '20px',
// //      backgroundColor: '#f9f9f9',
// //    },
// //    title: {
// //      color: '#2c3e50',
// //      textAlign: 'center',
// //      marginBottom: '30px',
// //      fontSize: '28px',
// //    },
// //    formula: {
// //      backgroundColor: '#edf7ff',
// //      padding: '15px',
// //      borderRadius: '5px',
// //      margin: '20px 0',
// //      borderLeft: '4px solid #3498db',
// //    },
// //    searchContainer: {
// //      display: 'flex',
// //      marginBottom: '20px',
// //      flexDirection: 'column',
// //      gap: '10px',
// //    },
// //    searchInputWrapper: {
// //      position: 'relative',
// //      display: 'flex',
// //      width: '100%',
// //    },
// //    searchInput: {
// //      flex: 1,
// //      padding: '12px 40px 12px 16px',
// //      borderRadius: '6px',
// //      border: '1px solid #ddd',
// //      fontSize: '16px',
// //      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// //    },
// //    searchReset: {
// //      position: 'absolute',
// //      right: '12px',
// //      top: '50%',
// //      transform: 'translateY(-50%)',
// //      backgroundColor: 'transparent',
// //      border: 'none',
// //      fontSize: '18px',
// //      color: '#999',
// //      cursor: 'pointer',
// //      display: 'flex',
// //      alignItems: 'center',
// //      justifyContent: 'center',
// //      width: '24px',
// //      height: '24px',
// //      borderRadius: '50%',
// //    },
// //    radioContainer: {
// //      display: 'flex',
// //      gap: '15px',
// //      padding: '5px 0',
// //    },
// //    radioGroup: {
// //      display: 'flex',
// //      alignItems: 'center',
// //      padding: '8px 16px',
// //      backgroundColor: searchType === 'degrees' ? '#3498db' : 'transparent',
// //      color: searchType === 'degrees' ? 'white' : '#333',
// //      borderRadius: '20px',
// //      cursor: 'pointer',
// //      transition: 'all 0.2s ease',
// //      border: searchType === 'degrees' ? '1px solid #3498db' : '1px solid #ddd',
// //    },
// //    radioGroupRadians: {
// //      display: 'flex',
// //      alignItems: 'center',
// //      padding: '8px 16px',
// //      backgroundColor: searchType === 'radians' ? '#3498db' : 'transparent',
// //      color: searchType === 'radians' ? 'white' : '#333',
// //      borderRadius: '20px',
// //      cursor: 'pointer',
// //      transition: 'all 0.2s ease',
// //      border: searchType === 'radians' ? '1px solid #3498db' : '1px solid #ddd',
// //    },
// //    radioInput: {
// //      display: 'none', // Hide the default radio button
// //    },
// //    tableContainer: {
// //      maxHeight: '600px',
// //      overflowY: 'auto',
// //      marginBottom: '30px',
// //      position: 'relative',
// //      zIndex: 1,
// //    },
// //    table: {
// //      width: '100%',
// //      borderCollapse: 'separate',
// //      borderSpacing: 0,
// //      margin: '20px 0',
// //      backgroundColor: '#fff',
// //      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
// //      borderRadius: '8px',
// //      overflow: 'visible',
// //    },
// //    thead: {
// //      position: 'sticky',
// //      top: 0,
// //      zIndex: 2,
// //      display: 'table-header-group',
// //      WebkitPositionSticky: 'fixed',
// //      WebkitTransform: 'translateZ(0)',
// //    },
// //    th: {
// //      backgroundColor: '#3498db',
// //      color: '#fff',
// //      padding: '12px 15px',
// //      textAlign: 'center',
// //      fontWeight: '500',
// //    },
// //    td: {
// //      borderBottom: '1px solid #eee',
// //      padding: '10px 12px',
// //      textAlign: 'center',
// //    },
// //    highlight: {
// //      backgroundColor: '#ffff00',
// //      fontWeight: 'bold',
// //    }
// //  };

// //  return (
// //    <div style={styles.container}>
// //      <h1 style={styles.title}>Degree-Radian Conversion Table</h1>
     
// //      <div style={styles.formula}>
// //        <strong>Degrees to Radians:</strong> rad = deg × (π/180)<br />
// //        <strong>Radians to Degrees:</strong> deg = rad × (180/π)
// //      </div>
     
// //      <div style={styles.searchContainer}>
// //        <div style={styles.searchInputWrapper}>
// //          <input
// //            type="text"
// //            placeholder="Search..."
// //            value={searchQuery}
// //            onChange={(e) => setSearchQuery(e.target.value)}
// //            style={styles.searchInput}
// //          />
// //          {searchQuery && (
// //            <button 
// //              onClick={resetSearch} 
// //              style={styles.searchReset}
// //              title="Clear search"
// //            >
// //              ×
// //            </button>
// //          )}
// //        </div>
       
// //        <div style={styles.radioContainer}>
// //          <label style={styles.radioGroup}>
// //            <input
// //              type="radio"
// //              name="searchType"
// //              value="degrees"
// //              checked={searchType === 'degrees'}
// //              onChange={() => setSearchType('degrees')}
// //              style={styles.radioInput}
// //            />
// //            Search by Degrees
// //          </label>
// //          <label style={styles.radioGroupRadians}>
// //            <input
// //              type="radio"
// //              name="searchType"
// //              value="radians"
// //              checked={searchType === 'radians'}
// //              onChange={() => setSearchType('radians')}
// //              style={styles.radioInput}
// //            />
// //            Search by Radians
// //          </label>
// //        </div>
// //      </div>
     
// //      <div style={styles.tableContainer}>
// //        <table style={styles.table} ref={tableRef}>
// //          <thead style={styles.thead}>
// //            <tr>
// //              <th style={styles.th}>Degrees</th>
// //              <th style={styles.th}>Radians (π form)</th>
// //              <th style={styles.th}>Radians (Decimal)</th>
// //            </tr>
// //          </thead>
// //          <tbody>
// //            {filteredDegrees.map((degree, index) => {
// //              const radian = degreesToRadians(degree);
// //              const piForm = getPiForm(degree);
             
// //              return (
// //                <tr 
// //                  key={degree} 
// //                  style={index % 2 ? { backgroundColor: '#f8f9fa' } : {}}
// //                >
// //                  <td style={styles.td}>
// //                    {searchType === 'degrees' ? highlightMatch(degree + '°', searchQuery) : degree + '°'}
// //                  </td>
// //                  <td style={styles.td}>
// //                    {searchType === 'radians' ? highlightMatch(piForm, searchQuery) : piForm}
// //                  </td>
// //                  <td style={styles.td}>
// //                    {searchType === 'radians' ? highlightMatch(radian.toFixed(4), searchQuery) : radian.toFixed(4)}
// //                  </td>
// //                </tr>
// //              );
// //            })}
// //          </tbody>
// //        </table>
// //      </div>
// //    </div>
// //  );
// // };

// // export default DegreeRadianConversionTable;


// import React, { useState, useRef } from 'react';

// const DegreeRadianConversionTable = () => {
//   const tableRef = useRef(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchType, setSearchType] = useState('degrees');
  
//   // Function to convert degrees to radians
//   const degreesToRadians = (degrees) => {
//     return degrees * (Math.PI / 180);
//   };

//   // Function to get pi form representation
//   const getPiForm = (degrees) => {
//     if (degrees === 0) return '0';
//     if (degrees === 180) return 'π';
//     if (degrees === 360) return '2π';
    
//     const gcd = (a, b) => b ? gcd(b, a % b) : a;
//     const numerator = degrees;
//     const denominator = 180;
//     const divisor = gcd(numerator, denominator);
    
//     const simplifiedNumerator = numerator / divisor;
//     const simplifiedDenominator = denominator / divisor;
    
//     if (simplifiedNumerator === 1 && simplifiedDenominator === 1) return 'π';
//     if (simplifiedNumerator === 2 && simplifiedDenominator === 1) return '2π';
    
//     if (simplifiedNumerator === 1) {
//       return `π/${simplifiedDenominator}`;
//     } else {
//       return `${simplifiedNumerator}π/${simplifiedDenominator}`;
//     }
//   };

//   // Generate degrees from 0 to 360
//   const degrees = Array.from({ length: 361 }, (_, i) => i);

//   // Filter the data based on search query
//   const filteredDegrees = degrees.filter(degree => {
//     if (!searchQuery) return true;
    
//     const radian = degreesToRadians(degree);
//     const piForm = getPiForm(degree);
    
//     if (searchType === 'degrees') {
//       return degree.toString().includes(searchQuery);
//     } else if (searchType === 'radians') {
//       return piForm.includes(searchQuery) || radian.toFixed(4).includes(searchQuery);
//     }
//     return true;
//   });

//   // Highlight the matched text
//   const highlightMatch = (text, query) => {
//     if (!query) return text;
    
//     const stringText = text.toString();
//     const index = stringText.toLowerCase().indexOf(query.toLowerCase());
    
//     if (index === -1) return stringText;
    
//     return (
//       <>
//         {stringText.substring(0, index)}
//         <span style={{ backgroundColor: '#ffff00', fontWeight: 'bold' }}>
//           {stringText.substring(index, index + query.length)}
//         </span>
//         {stringText.substring(index + query.length)}
//       </>
//     );
//   };

//   // Reset search
//   const resetSearch = () => {
//     setSearchQuery('');
//   };

//   // Styling
//   const styles = {
//     container: {
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
//       maxWidth: '900px',
//       margin: '40px auto',
//       padding: '20px',
//       backgroundColor: '#f9f9f9',
//     },
//     title: {
//       color: '#2c3e50',
//       textAlign: 'center',
//       marginBottom: '30px',
//       fontSize: '28px',
//     },
//     formula: {
//       backgroundColor: '#edf7ff',
//       padding: '15px',
//       borderRadius: '5px',
//       margin: '20px 0',
//       borderLeft: '4px solid #3498db',
//     },
//     searchContainer: {
//       display: 'flex',
//       marginBottom: '20px',
//       flexDirection: 'column',
//       gap: '10px',
//     },
//     searchBar: {
//       display: 'flex',
//       width: '100%',
//     },
//     searchInput: {
//       flex: 1,
//       padding: '12px 16px',
//       borderRadius: '6px 0 0 6px',
//       border: '1px solid #ddd',
//       borderRight: 'none',
//       fontSize: '16px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     },
//     resetButton: {
//       padding: '0 15px',
//       backgroundColor: '#f44336',
//       color: 'white',
//       border: 'none',
//       borderRadius: '0 6px 6px 0',
//       cursor: 'pointer',
//       fontSize: '16px',
//     },
//     radioContainer: {
//       display: 'flex',
//       gap: '15px',
//       padding: '5px 0',
//     },
//     radioGroup: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: '8px 16px',
//       backgroundColor: searchType === 'degrees' ? '#3498db' : 'transparent',
//       color: searchType === 'degrees' ? 'white' : '#333',
//       borderRadius: '20px',
//       cursor: 'pointer',
//       transition: 'all 0.2s ease',
//       border: searchType === 'degrees' ? '1px solid #3498db' : '1px solid #ddd',
//     },
//     radioGroupRadians: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: '8px 16px',
//       backgroundColor: searchType === 'radians' ? '#3498db' : 'transparent',
//       color: searchType === 'radians' ? 'white' : '#333',
//       borderRadius: '20px',
//       cursor: 'pointer',
//       transition: 'all 0.2s ease',
//       border: searchType === 'radians' ? '1px solid #3498db' : '1px solid #ddd',
//     },
//     radioInput: {
//       display: 'none', // Hide the default radio button
//     },
//     tableContainer: {
//       maxHeight: '600px',
//       overflowY: 'auto',
//       marginBottom: '30px',
//       position: 'relative',
//       zIndex: 1,
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'separate',
//       borderSpacing: 0,
//       margin: '20px 0',
//       backgroundColor: '#fff',
//       boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//       borderRadius: '8px',
//       overflow: 'visible',
//     },
//     thead: {
//       position: 'sticky',
//       top: 0,
//       zIndex: 2,
//       display: 'table-header-group',
//       WebkitPositionSticky: 'fixed',
//       WebkitTransform: 'translateZ(0)',
//     },
//     th: {
//       backgroundColor: '#3498db',
//       color: '#fff',
//       padding: '12px 15px',
//       textAlign: 'center',
//       fontWeight: '500',
//     },
//     td: {
//       borderBottom: '1px solid #eee',
//       padding: '10px 12px',
//       textAlign: 'center',
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Degree-Radian Conversion Table</h1>
      
//       <div style={styles.formula}>
//         <strong>Degrees to Radians:</strong> rad = deg × (π/180)<br />
//         <strong>Radians to Degrees:</strong> deg = rad × (180/π)
//       </div>
      
//       <div style={styles.searchContainer}>
//         <div style={styles.searchBar}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             style={styles.searchInput}
//           />
//           <button 
//             onClick={resetSearch} 
//             style={styles.resetButton}
//           >
//             Reset
//           </button>
//         </div>
        
//         <div style={styles.radioContainer}>
//           <label style={styles.radioGroup}>
//             <input
//               type="radio"
//               name="searchType"
//               value="degrees"
//               checked={searchType === 'degrees'}
//               onChange={() => setSearchType('degrees')}
//               style={styles.radioInput}
//             />
//             Search by Degrees
//           </label>
//           <label style={styles.radioGroupRadians}>
//             <input
//               type="radio"
//               name="searchType"
//               value="radians"
//               checked={searchType === 'radians'}
//               onChange={() => setSearchType('radians')}
//               style={styles.radioInput}
//             />
//             Search by Radians
//           </label>
//         </div>
//       </div>
      
//       <div style={styles.tableContainer}>
//         <table style={styles.table} ref={tableRef}>
//           <thead style={styles.thead}>
//             <tr>
//               <th style={styles.th}>Degrees</th>
//               <th style={styles.th}>Radians (π form)</th>
//               <th style={styles.th}>Radians (Decimal)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredDegrees.map((degree, index) => {
//               const radian = degreesToRadians(degree);
//               const piForm = getPiForm(degree);
              
//               return (
//                 <tr 
//                   key={degree} 
//                   style={index % 2 ? { backgroundColor: '#f8f9fa' } : {}}
//                 >
//                   <td style={styles.td}>
//                     {searchType === 'degrees' ? highlightMatch(degree + '°', searchQuery) : degree + '°'}
//                   </td>
//                   <td style={styles.td}>
//                     {searchType === 'radians' ? highlightMatch(piForm, searchQuery) : piForm}
//                   </td>
//                   <td style={styles.td}>
//                     {searchType === 'radians' ? highlightMatch(radian.toFixed(4), searchQuery) : radian.toFixed(4)}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DegreeRadianConversionTable;


import React, { useState, useRef } from 'react';

const DegreeRadianConversionTable = () => {
 const tableRef = useRef(null);
 const [searchQuery, setSearchQuery] = useState('');
 const [searchType, setSearchType] = useState('degrees');
 
 // Function to convert degrees to radians
 const degreesToRadians = (degrees) => {
   return degrees * (Math.PI / 180);
 };

 // Function to get pi form representation
 const getPiForm = (degrees) => {
   if (degrees === 0) return '0';
   if (degrees === 180) return 'π';
   if (degrees === 360) return '2π';
   
   const gcd = (a, b) => b ? gcd(b, a % b) : a;
   const numerator = degrees;
   const denominator = 180;
   const divisor = gcd(numerator, denominator);
   
   const simplifiedNumerator = numerator / divisor;
   const simplifiedDenominator = denominator / divisor;
   
   if (simplifiedNumerator === 1 && simplifiedDenominator === 1) return 'π';
   if (simplifiedNumerator === 2 && simplifiedDenominator === 1) return '2π';
   
   if (simplifiedNumerator === 1) {
     return `π/${simplifiedDenominator}`;
   } else {
     return `${simplifiedNumerator}π/${simplifiedDenominator}`;
   }
 };

 // Generate degrees from 0 to 360
 const degrees = Array.from({ length: 361 }, (_, i) => i);

 // Filter the data based on search query
 const filteredDegrees = degrees.filter(degree => {
   if (!searchQuery) return true;
   
   const radian = degreesToRadians(degree);
   const piForm = getPiForm(degree);
   
   if (searchType === 'degrees') {
     return degree.toString().includes(searchQuery);
   } else if (searchType === 'radians') {
     return piForm.includes(searchQuery) || radian.toFixed(4).includes(searchQuery);
   }
   return true;
 });

 // Highlight the matched text
 const highlightMatch = (text, query) => {
   if (!query) return text;
   
   const stringText = text.toString();
   const index = stringText.toLowerCase().indexOf(query.toLowerCase());
   
   if (index === -1) return stringText;
   
   return (
     <>
       {stringText.substring(0, index)}
       <span style={{ backgroundColor: '#ffff00', fontWeight: 'bold' }}>
         {stringText.substring(index, index + query.length)}
       </span>
       {stringText.substring(index + query.length)}
     </>
   );
 };

 // Reset search
 const resetSearch = () => {
   setSearchQuery('');
 };

 // Styling
 const styles = {
   container: {
     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
     maxWidth: '900px',
     margin: '40px auto',
     padding: '20px',
     backgroundColor: '#f9f9f9',
   },
   title: {
     color: '#2c3e50',
     textAlign: 'center',
     marginBottom: '30px',
     fontSize: '28px',
   },
   formula: {
     backgroundColor: '#edf7ff',
     padding: '15px',
     borderRadius: '5px',
     margin: '20px 0',
     borderLeft: '4px solid #3498db',
   },
   searchContainer: {
     display: 'flex',
     marginBottom: '20px',
     alignItems: 'center',
     gap: '10px',
   },
   searchInputWrapper: {
     position: 'relative',
     flex: 1,
   },
   searchInput: {
     width: '100%',
     padding: '10px 35px 10px 15px',
     borderRadius: '6px',
     border: '1px solid #ddd',
     fontSize: '16px',
     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
   },
   resetButton: {
     position: 'absolute',
     right: '10px',
     top: '50%',
     transform: 'translateY(-50%)',
     background: 'none',
     border: 'none',
     fontSize: '18px',
     color: '#666',
     cursor: 'pointer',
     padding: '5px',
     display: searchQuery ? 'block' : 'none',
   },
   radioGroup: {
     display: 'flex',
     alignItems: 'center',
     padding: '8px 16px',
     backgroundColor: searchType === 'degrees' ? '#3498db' : 'transparent',
     color: searchType === 'degrees' ? 'white' : '#333',
     borderRadius: '20px',
     cursor: 'pointer',
     transition: 'all 0.2s ease',
     border: searchType === 'degrees' ? '1px solid #3498db' : '1px solid #ddd',
     fontSize: '14px',
   },
   radioGroupRadians: {
     display: 'flex',
     alignItems: 'center',
     padding: '8px 16px',
     backgroundColor: searchType === 'radians' ? '#3498db' : 'transparent',
     color: searchType === 'radians' ? 'white' : '#333',
     borderRadius: '20px',
     cursor: 'pointer',
     transition: 'all 0.2s ease',
     border: searchType === 'radians' ? '1px solid #3498db' : '1px solid #ddd',
     fontSize: '14px',
   },
   radioInput: {
     display: 'none',
   },
   tableContainer: {
     maxHeight: '600px',
     overflowY: 'auto',
     marginBottom: '30px',
     position: 'relative',
     zIndex: 1,
   },
   table: {
     width: '100%',
     borderCollapse: 'separate',
     borderSpacing: 0,
     margin: '20px 0',
     backgroundColor: '#fff',
     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
     borderRadius: '8px',
     overflow: 'visible',
   },
   thead: {
     position: 'sticky',
     top: 0,
     zIndex: 2,
     display: 'table-header-group',
     WebkitPositionSticky: 'fixed',
     WebkitTransform: 'translateZ(0)',
   },
   th: {
     backgroundColor: '#3498db',
     color: '#fff',
     padding: '12px 15px',
     textAlign: 'center',
     fontWeight: '500',
   },
   td: {
     borderBottom: '1px solid #eee',
     padding: '10px 12px',
     textAlign: 'center',
   }
 };

 return (
   <div style={styles.container}>
     <h1 style={styles.title}>Degree-Radian Conversion Table</h1>
     
     <div style={styles.formula}>
       <strong>Degrees to Radians:</strong> rad = deg × (π/180)<br />
       <strong>Radians to Degrees:</strong> deg = rad × (180/π)
     </div>
     
     <div style={styles.searchContainer}>
       <div style={styles.searchInputWrapper}>
         <input
           type="text"
           placeholder="Search..."
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
           style={styles.searchInput}
         />
         <button 
           onClick={resetSearch} 
           style={styles.resetButton}
           aria-label="Reset search"
         >
           ×
         </button>
       </div>
       
       <label style={styles.radioGroup}>
         <input
           type="radio"
           name="searchType"
           value="degrees"
           checked={searchType === 'degrees'}
           onChange={() => setSearchType('degrees')}
           style={styles.radioInput}
         />
         Degrees
       </label>
       
       <label style={styles.radioGroupRadians}>
         <input
           type="radio"
           name="searchType"
           value="radians"
           checked={searchType === 'radians'}
           onChange={() => setSearchType('radians')}
           style={styles.radioInput}
         />
         Radians
       </label>
     </div>
     
     <div style={styles.tableContainer}>
       <table style={styles.table} ref={tableRef}>
         <thead style={styles.thead}>
           <tr>
             <th style={styles.th}>Degrees</th>
             <th style={styles.th}>Radians (π form)</th>
             <th style={styles.th}>Radians (Decimal)</th>
           </tr>
         </thead>
         <tbody>
           {filteredDegrees.map((degree, index) => {
             const radian = degreesToRadians(degree);
             const piForm = getPiForm(degree);
             
             return (
               <tr 
                 key={degree} 
                 style={index % 2 ? { backgroundColor: '#f8f9fa' } : {}}
               >
                 <td style={styles.td}>
                   {searchType === 'degrees' ? highlightMatch(degree + '°', searchQuery) : degree + '°'}
                 </td>
                 <td style={styles.td}>
                   {searchType === 'radians' ? highlightMatch(piForm, searchQuery) : piForm}
                 </td>
                 <td style={styles.td}>
                   {searchType === 'radians' ? highlightMatch(radian.toFixed(4), searchQuery) : radian.toFixed(4)}
                 </td>
               </tr>
             );
           })}
         </tbody>
       </table>
     </div>
   </div>
 );
};

export default DegreeRadianConversionTable;