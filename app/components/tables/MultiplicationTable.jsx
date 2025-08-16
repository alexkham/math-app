// MultiplicationTable.js
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    width: '100%',
    maxWidth: '28rem',
    margin: '0 auto',
  },
  cardHeader: {
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContent: {
    padding: '1.5rem',
  },
  select: {
    position: 'relative',
    width: '8rem',
    margin: '1rem auto',
  },
  selectTrigger: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
  },
  selectContent: {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    marginTop: '0.25rem',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    zIndex: 50,
    maxHeight: '15rem',
    overflowY: 'auto',
  },
  selectItem: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    '&:hover': {
      backgroundColor: '#f3f4f6',
    },
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
    '&:focus': {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 1px #3b82f6',
    },
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
  },
  tableHeader: {
    backgroundColor: '#f9fafb',
  },
  tableHeaderCell: {
    padding: '0.75rem 1rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    borderBottom: '1px solid #e5e7eb',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#f9fafb',
    },
    borderBottom: '1px solid #e5e7eb',
  },
  tableCell: {
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#374151',
  },
  tableCellBold: {
    fontWeight: 'bold',
  },
  noResults: {
    textAlign: 'center',
    padding: '1rem',
    color: '#6b7280',
  },
};

const MultiplicationTable = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const maxNumber = 12;

  const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  const tableRows = Array.from({ length: maxNumber }, (_, i) => {
    const multiplier = i + 1;
    const result = multiplier * selectedNumber;
    return { multiplier, result };
  });

  const filteredRows = tableRows.filter(row => {
    const searchValue = searchTerm.toLowerCase();
    return (
      row.multiplier.toString().includes(searchValue) ||
      row.result.toString().includes(searchValue) ||
      `${selectedNumber} × ${row.multiplier}`.includes(searchValue)
    );
  });

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Multiplication Table</h2>
        
        <div style={styles.select}>
          <button 
            style={styles.selectTrigger}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            {selectedNumber} Times Table ▼
          </button>
          
          {isSelectOpen && (
            <div style={styles.selectContent}>
              {numbers.map((num) => (
                <div
                  key={num}
                  style={styles.selectItem}
                  onClick={() => {
                    setSelectedNumber(num);
                    setIsSelectOpen(false);
                  }}
                >
                  {num} Times Table
                </div>
              ))}
            </div>
          )}
        </div>

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
              <th style={styles.tableHeaderCell}>Multiplier</th>
              <th style={styles.tableHeaderCell}>Operation</th>
              <th style={styles.tableHeaderCell}>Result</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(({ multiplier, result }) => (
              <tr key={multiplier} style={styles.tableRow}>
                <td style={styles.tableCell}>{multiplier}</td>
                <td style={styles.tableCell}>
                  {selectedNumber} × {multiplier}
                </td>
                <td style={{...styles.tableCell, ...styles.tableCellBold}}>
                  {result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredRows.length === 0 && (
          <div style={styles.noResults}>
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiplicationTable;