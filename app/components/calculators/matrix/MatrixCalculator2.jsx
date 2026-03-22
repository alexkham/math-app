
// MatrixCalculator2.jsx
import { useState, useEffect } from 'react';
import Matrix2 from './Matrix2';
import styles from './MatrixCalculator.module.css';
import MatrixOperationsPanel from './OperationsPanel';

export default function MatrixCalculator2() {
 const [dimensions, setDimensions] = useState({ rows: 2, cols: 2 });
 const [matrix, setMatrix] = useState([[0, 0], [0, 0]]);
 const [error, setError] = useState('');

 useEffect(() => {
   setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
 }, [dimensions]);

 const handleCellChange = (rowIndex, colIndex, value) => {
   const newMatrix = matrix.map((row, i) =>
     row.map((cell, j) =>
       i === rowIndex && j === colIndex ? Number(value) || 0 : cell
     )
   );
   setMatrix(newMatrix);
 };

 const handleDimensionChange = (type, value) => {
   const numValue = parseInt(value, 10);
   
   if (isNaN(numValue)) {
     setError('Please enter a valid number');
     return;
   }

   if (numValue < 1 || numValue > 10) {
     setError('Dimensions must be between 1 and 10');
     return;
   }

   setError('');
   setDimensions(prev => ({ ...prev, [type]: numValue }));
 };

 const adjustDimension = (type, increment) => {
   setDimensions(prev => {
     const newValue = prev[type] + increment;
     if (newValue >= 1 && newValue <= 10) {
       return { ...prev, [type]: newValue };
     }
     return prev;
   });
 };

 const resetToZeros = () => {
   setMatrix(Array(dimensions.rows).fill().map(() => Array(dimensions.cols).fill(0)));
 };

 const resetAll = () => {
   setDimensions({ rows: 2, cols: 2 });
 };

 const generateRandom = () => {
   const newMatrix = matrix.map(row =>
     row.map(() => Math.floor(Math.random() * 10))
   );
   setMatrix(newMatrix);
 };

//  const handleTranspose = () => {
//    const rows = dimensions.cols;
//    const cols = dimensions.rows;
//    const transposed = Array(rows).fill().map((_, i) => 
//      Array(cols).fill().map((_, j) => matrix[j][i])
//    );
   
//    setMatrix(transposed);
//    setDimensions({ rows, cols });
//  };

// Around line 75 - find the current handleTranspose and replace it
const handleTranspose = () => {
  const rows = dimensions.cols;
  const cols = dimensions.rows;
  const transposed = Array(rows).fill().map((_, i) => 
    Array(cols).fill().map((_, j) => matrix[j][i])
  );
  
  setDimensions({ rows, cols });
  setTimeout(() => setMatrix(transposed), 0);
};

const handleScalarOperation = (operation, value) => {
   const newMatrix = matrix.map(row =>
     row.map(cell => {
       switch(operation) {
         case 'add': return cell + value;
         case 'multiply': return cell * value;
         default: return cell;
       }
     })
   );
   setMatrix(newMatrix);
 };

 const operations = [
   { 
     name: 'Add Scalar', 
     handler: (value) => handleScalarOperation('add', value) 
   },
   { 
     name: 'Multiply by Scalar', 
     handler: (value) => handleScalarOperation('multiply', value) 
   },
   { 
     name: 'Transpose', 
     handler: handleTranspose 
   }
 ];

 return (
   <div className={styles.container}>
     <div className={styles.dimensions}>
       <div className={styles.dimensionGroup}>
         <div className={styles.dimensionControl}>
           <label>Rows:</label>
           <div className={styles.inputGroup}>
             <button 
               onClick={() => adjustDimension('rows', -1)}
               disabled={dimensions.rows <= 1}
               className={styles.adjustButton}
             >
               −
             </button>
             <input
               type="number"
               min="1"
               max="10"
               value={dimensions.rows}
               onChange={(e) => handleDimensionChange('rows', e.target.value)}
               className={styles.dimensionInput}
             />
             <button 
               onClick={() => adjustDimension('rows', 1)}
               disabled={dimensions.rows >= 10}
               className={styles.adjustButton}
             >
               +
             </button>
           </div>
         </div>
         <div className={styles.dimensionControl}>
           <label>Columns:</label>
           <div className={styles.inputGroup}>
             <button 
               onClick={() => adjustDimension('cols', -1)}
               disabled={dimensions.cols <= 1}
               className={styles.adjustButton}
             >
               −
             </button>
             <input
               type="number"
               min="1"
               max="10"
               value={dimensions.cols}
               onChange={(e) => handleDimensionChange('cols', e.target.value)}
               className={styles.dimensionInput}
             />
             <button 
               onClick={() => adjustDimension('cols', 1)}
               disabled={dimensions.cols >= 10}
               className={styles.adjustButton}
             >
               +
             </button>
           </div>
         </div>
       </div>

       <div className={styles.controls}>
         <div className={styles.leftGroup}>
           <button onClick={resetToZeros} className={styles.basicBtn}>
             Set to Zeros
           </button>
           <button onClick={resetAll} className={styles.basicBtn}>
             Reset All
           </button>
           <button onClick={generateRandom} className={styles.basicBtn}>
             Generate Random
           </button>
         </div>
         <div className={styles.rightGroup}>
           <MatrixOperationsPanel 
             operations={operations}
             title='Unary Matrix Operations'
           />
         </div>
       </div>
     </div>

     {error && <div className={styles.error}>{error}</div>}
     
     <div className={styles.matrixWrapper}>
       <Matrix2
         matrix={matrix}
         name="A"
         labelPosition="left"
         onCellChange={handleCellChange}
       />
     </div>
   </div>
 );
}