// import React, { useState } from 'react';
// import { Search } from 'lucide-react';

// const styles = {
//   card: {
//     backgroundColor: 'white',
//     borderRadius: '0.5rem',
//     boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
//     width: '100%',
//     maxWidth: '800px', // Made wider for the complete table
//     margin: '0 auto',
//     overflowX: 'auto', // Added for horizontal scroll on small screens
//   },
//   cardHeader: {
//     padding: '1.5rem',
//   },
//   cardTitle: {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   cardContent: {
//     padding: '1.5rem',
//   },
//   searchContainer: {
//     position: 'relative',
//     marginTop: '1rem',
//   },
//   searchInput: {
//     width: '100%',
//     padding: '0.5rem 1rem 0.5rem 2.5rem',
//     border: '1px solid #e5e7eb',
//     borderRadius: '0.375rem',
//     fontSize: '0.875rem',
//   },
//   searchIcon: {
//     position: 'absolute',
//     left: '0.75rem',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     color: '#9ca3af',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     textAlign: 'center',
//   },
//   tableHeader: {
//     backgroundColor: '#f9fafb',
//   },
//   tableHeaderCell: {
//     padding: '0.75rem',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     color: '#374151',
//     border: '1px solid #e5e7eb',
//     backgroundColor: '#f3f4f6',
//     minWidth: '2.5rem',
//   },
//   tableFirstCell: {
//     backgroundColor: '#f3f4f6',
//     fontWeight: '500',
//     border: '1px solid #e5e7eb',
//   },
//   tableCell: {
//     padding: '0.75rem',
//     fontSize: '0.875rem',
//     border: '1px solid #e5e7eb',
//     color: '#374151',
//   },
//   highlightedCell: {
//     backgroundColor: '#dbeafe',
//   },
//   noResults: {
//     textAlign: 'center',
//     padding: '1rem',
//     color: '#6b7280',
//   },
// };

// const CompleteMultiplicationTable = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const maxNumber = 12;
  
//   // Generate numbers array for rows and columns
//   const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  
//   // Function to check if a cell should be highlighted based on search
//   const shouldHighlight = (num1, num2, product) => {
//     if (!searchTerm) return false;
//     const searchValue = searchTerm.toLowerCase();
//     return (
//       num1.toString().includes(searchValue) ||
//       num2.toString().includes(searchValue) ||
//       product.toString().includes(searchValue)
//     );
//   };

//   // Count how many cells match the search
//   const getMatchCount = () => {
//     let count = 0;
//     numbers.forEach(num1 => {
//       numbers.forEach(num2 => {
//         if (shouldHighlight(num1, num2, num1 * num2)) count++;
//       });
//     });
//     return count;
//   };

//   return (
//     <div style={styles.card}>
//       <div style={styles.cardHeader}>
//         <h2 style={styles.cardTitle}>Complete Multiplication Table</h2>
        
//         <div style={styles.searchContainer}>
//           <div style={styles.searchIcon}>
//             <Search size={16} />
//           </div>
//           <input
//             type="text"
//             placeholder="Search in table..."
//             style={styles.searchInput}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div style={styles.cardContent}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.tableHeaderCell}>×</th>
//               {numbers.map(num => (
//                 <th key={num} style={styles.tableHeaderCell}>{num}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {numbers.map(row => (
//               <tr key={row}>
//                 <td style={styles.tableFirstCell}>{row}</td>
//                 {numbers.map(col => {
//                   const product = row * col;
//                   const isHighlighted = shouldHighlight(row, col, product);
//                   return (
//                     <td 
//                       key={col}
//                       style={{
//                         ...styles.tableCell,
//                         ...(isHighlighted ? styles.highlightedCell : {})
//                       }}
//                     >
//                       {product}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         {searchTerm && getMatchCount() === 0 && (
//           <div style={styles.noResults}>
//             No results found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompleteMultiplicationTable;
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    overflowX: 'auto',
  },
  cardHeader: {
    padding: '1.5rem',
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 10,
    borderBottom: '1px solid #e5e7eb',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContent: {
    padding: '1.5rem',
  },
  searchContainer: {
    position: 'relative',
    marginTop: '1rem',
  },
  searchInput: {
    width: '100%',
    padding: '0.5rem 1rem 0.5rem 2.5rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
  },
  searchIcon: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  tableHeader: {
    position: 'sticky',
    top: '120px', // Adjusted to account for card header
    backgroundColor: '#2563eb', // Primary blue
    zIndex: 5,
  },
  tableHeaderCell: {
    padding: '0.75rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white',
    border: '1px solid #3b82f6', // Lighter blue for borders
    minWidth: '2.5rem',
  },
  tableFirstCol: {
    minWidth: '2.5rem',
    position: 'sticky',
    left: 0,
    backgroundColor: '#e6e6e6', // Secondary blue
    color: 'gray',
    fontWeight: '500',
    border: '1px solid lightgray', // Even lighter blue for borders
    zIndex: 6, // Above regular cells but below corner
  },
  tableCornerCell: {
    position: 'sticky',
    top: '120px',
    left: 0,
    backgroundColor: '#1d4ed8', // Darker blue for corner
    color: 'white',
    zIndex: 7, // Highest to stay above everything
    border: '1px solid #3b82f6',
  },
  tableCell: {
    padding: '0.75rem',
    fontSize: '0.875rem',
    border: '1px solid #e5e7eb',
    color: '#374151',
  },
  highlightedCell: {
    backgroundColor: '#dbeafe',
  },
  noResults: {
    textAlign: 'center',
    padding: '1rem',
    color: '#6b7280',
  },
};

const CompleteMultiplicationTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const maxNumber = 12;
  
  const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  
  const shouldHighlight = (num1, num2, product) => {
    if (!searchTerm) return false;
    const searchValue = searchTerm.toLowerCase();
    return (
      num1.toString().includes(searchValue) ||
      num2.toString().includes(searchValue) ||
      product.toString().includes(searchValue)
    );
  };

  const getMatchCount = () => {
    let count = 0;
    numbers.forEach(num1 => {
      numbers.forEach(num2 => {
        if (shouldHighlight(num1, num2, num1 * num2)) count++;
      });
    });
    return count;
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Complete Multiplication Table</h2>
        
        <div style={styles.searchContainer}>
          <div style={styles.searchIcon}>
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search in table..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div style={styles.cardContent}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCornerCell}>×</th>
              {numbers.map(num => (
                <th key={num} style={styles.tableHeaderCell}>{num}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {numbers.map(row => (
              <tr key={row}>
                <td style={styles.tableFirstCol}>{row}</td>
                {numbers.map(col => {
                  const product = row * col;
                  const isHighlighted = shouldHighlight(row, col, product);
                  return (
                    <td 
                      key={col}
                      style={{
                        ...styles.tableCell,
                        ...(isHighlighted ? styles.highlightedCell : {})
                      }}
                    >
                      {product}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        
        {searchTerm && getMatchCount() === 0 && (
          <div style={styles.noResults}>
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default CompleteMultiplicationTable;