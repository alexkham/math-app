import React, { useState } from 'react';
import { Calculator, PieChart, Database } from 'lucide-react';
import styles from './TableNavigation.module.css';

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'arithmetics':
      return <Calculator className={styles.icon} />;
    case 'trigonometry':
      return <PieChart className={styles.icon} />;
    case 'statistics':
      return <Database className={styles.icon} />;
    default:
      return <Calculator className={styles.icon} />;
  }
};

const TableModal = ({ table, onClose }) => (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <h2 className={styles.modalTitle}>{table.name}</h2>
      <img src="/api/placeholder/300/200" alt={table.name} className={styles.modalImage} />
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>x</th>
              <th>f(x)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(table.content).slice(0, 5).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
    </div>
  </div>
);

const TableNavigation = ({ filesData }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);

  const categories = [...new Set(filesData.map(file => file.filename.split('_')[0]))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mathematical Tables</h1>
      
      <div className={styles.categoryGrid}>
        {categories.map((category) => (
          <div 
            key={category} 
            className={`${styles.categoryCard} ${selectedCategory === category ? styles.selectedCard : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className={styles.cardHeader}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              {getCategoryIcon(category)}
            </div>
            <p className={styles.tableCount}>
              {filesData.filter(file => file.filename.startsWith(category.toLowerCase())).length} tables available
            </p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className={styles.tablesSection}>
          <h2 className={styles.sectionTitle}>{selectedCategory} Tables</h2>
          <div className={styles.tableGrid}>
            {filesData
              .filter(file => file.filename.startsWith(selectedCategory.toLowerCase()))
              .map((file) => (
                <div key={file.filename} className={styles.tableCard}>
                  <h3 className={styles.tableTitle}>{file.filename.split('_').join(' ')}</h3>
                  <img src="/api/placeholder/300/200" alt={file.filename} className={styles.tableImage} />
                  <button 
                    className={styles.viewButton}
                    onClick={() => setSelectedTable(file)}
                  >
                    View Table
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      {selectedTable && (
        <TableModal table={selectedTable} onClose={() => setSelectedTable(null)} />
      )}
    </div>
  );
};

export default TableNavigation;