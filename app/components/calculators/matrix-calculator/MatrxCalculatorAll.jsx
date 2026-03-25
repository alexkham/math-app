

// // // // // // // import React, { useState } from 'react';
// // // // // // // import styles from './MatrixCalculator.module.css';

// // // // // // // export default function MatrixCalculatorAll() {
// // // // // // //   const [step, setStep] = useState('operation-type');
// // // // // // //   const [operationType, setOperationType] = useState('');
// // // // // // //   const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
// // // // // // //   const [matrices, setMatrices] = useState([]);
// // // // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // // // //   const [scalarValue, setScalarValue] = useState('');
// // // // // // //   const [result, setResult] = useState('');
// // // // // // //   const [errors, setErrors] = useState([]);
// // // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // // //   const operationTypes = [
// // // // // // //     { id: 'single', label: 'Single Matrix Operations', description: 'Determinant, transpose, inverse, eigenvalues' },
// // // // // // //     { id: 'two', label: 'Two Matrix Operations', description: 'Addition, subtraction, multiplication' },
// // // // // // //     { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, scalar addition' },
// // // // // // //     { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' }
// // // // // // //   ];

// // // // // // //   const operationsByType = {
// // // // // // //     single: [
// // // // // // //       'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank', 
// // // // // // //       'Eigenvalues', 'Eigenvectors', 'Characteristic Polynomial',
// // // // // // //       'LU Decomposition', 'QR Decomposition', 'Singular Value Decomposition'
// // // // // // //     ],
// // // // // // //     two: [
// // // // // // //       'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
// // // // // // //       'Kronecker Product', 'Matrix Power', 'Commutator', 'Anti-commutator'
// // // // // // //     ],
// // // // // // //     scalar: [
// // // // // // //       'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
// // // // // // //       'Matrix Power (Scalar)', 'Exponential', 'Logarithm'
// // // // // // //     ],
// // // // // // //     system: [
// // // // // // //       'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
// // // // // // //       'Cramer\'s Rule', 'Matrix Equation AX=B', 'Least Squares Solution'
// // // // // // //     ]
// // // // // // //   };

// // // // // // //   // Validation functions
// // // // // // //   const validateDimensions = () => {
// // // // // // //     const newErrors = [];
    
// // // // // // //     if (dimensions.rows < 1 || dimensions.rows > 10) {
// // // // // // //       newErrors.push('Number of rows must be between 1 and 10');
// // // // // // //     }
// // // // // // //     if (dimensions.cols < 1 || dimensions.cols > 10) {
// // // // // // //       newErrors.push('Number of columns must be between 1 and 10');
// // // // // // //     }
    
// // // // // // //     return newErrors;
// // // // // // //   };

// // // // // // //   const validateMatrices = () => {
// // // // // // //     const newErrors = [];

// // // // // // //     if (!selectedOperation) {
// // // // // // //       newErrors.push('Please select an operation');
// // // // // // //     }

// // // // // // //     // Check if matrices have valid entries
// // // // // // //     matrices.forEach((matrix, index) => {
// // // // // // //       const matrixName = String.fromCharCode(65 + index);
// // // // // // //       const totalCells = matrix.rows * matrix.cols;
// // // // // // //       const emptyCells = matrix.data.filter(cell => cell === '' || cell === null || cell === undefined).length;
// // // // // // //       const validCells = matrix.data.filter(cell => !isNaN(parseFloat(cell)) && isFinite(cell)).length;

// // // // // // //       if (emptyCells > 0) {
// // // // // // //         newErrors.push(`Matrix ${matrixName} has empty cells`);
// // // // // // //       }

// // // // // // //       if (validCells !== totalCells) {
// // // // // // //         newErrors.push(`Matrix ${matrixName} contains invalid numbers`);
// // // // // // //       }
// // // // // // //     });

// // // // // // //     // Operation-specific validations
// // // // // // //     if (operationType === 'two') {
// // // // // // //       if (matrices.length !== 2) {
// // // // // // //         newErrors.push('Two matrix operations require exactly 2 matrices');
// // // // // // //       } else {
// // // // // // //         const [matrixA, matrixB] = matrices;
        
// // // // // // //         if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
// // // // // // //           if (matrixA.rows !== matrixB.rows || matrixA.cols !== matrixB.cols) {
// // // // // // //             newErrors.push('Matrices must have the same dimensions for this operation');
// // // // // // //           }
// // // // // // //         }
        
// // // // // // //         if (selectedOperation === 'Multiplication') {
// // // // // // //           if (matrixA.cols !== matrixB.rows) {
// // // // // // //             newErrors.push('For multiplication, columns of Matrix A must equal rows of Matrix B');
// // // // // // //           }
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }

// // // // // // //     if (operationType === 'single') {
// // // // // // //       if (['Determinant', 'Inverse', 'Eigenvalues', 'Eigenvectors'].includes(selectedOperation)) {
// // // // // // //         const matrix = matrices[0];
// // // // // // //         if (matrix && matrix.rows !== matrix.cols) {
// // // // // // //           newErrors.push('This operation requires a square matrix');
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }

// // // // // // //     if (operationType === 'scalar') {
// // // // // // //       if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(scalarValue)) {
// // // // // // //         newErrors.push('Please enter a valid scalar value');
// // // // // // //       }
// // // // // // //     }

// // // // // // //     return newErrors;
// // // // // // //   };

// // // // // // //   const validateInputs = () => {
// // // // // // //     const matrixErrors = validateMatrices();
// // // // // // //     setErrors(matrixErrors);
// // // // // // //     return matrixErrors.length === 0;
// // // // // // //   };

// // // // // // //   // Navigation functions
// // // // // // //   const handleReset = () => {
// // // // // // //     setStep('operation-type');
// // // // // // //     setOperationType('');
// // // // // // //     setDimensions({ rows: 3, cols: 3 });
// // // // // // //     setMatrices([]);
// // // // // // //     setSelectedOperation('');
// // // // // // //     setScalarValue('');
// // // // // // //     setResult('');
// // // // // // //     setErrors([]);
// // // // // // //     setIsLoading(false);
// // // // // // //   };

// // // // // // //   const handleBack = () => {
// // // // // // //     setErrors([]);
// // // // // // //     setStep('operation-type');
// // // // // // //     setOperationType('');
// // // // // // //     setMatrices([]);
// // // // // // //     setSelectedOperation('');
// // // // // // //     setResult('');
// // // // // // //     setScalarValue('');
// // // // // // //   };

// // // // // // //   const handleOperationTypeSelect = (type) => {
// // // // // // //     setOperationType(type);
// // // // // // //     setErrors([]);

// // // // // // //     // Initialize matrices based on operation type with default dimensions
// // // // // // //     let matrixCount = 1;
// // // // // // //     if (type === 'two') matrixCount = 2;
// // // // // // //     if (type === 'system') matrixCount = 2; // A and B for Ax=B

// // // // // // //     const initialMatrices = Array(matrixCount).fill(null).map((_, index) => ({
// // // // // // //       id: index,
// // // // // // //       rows: dimensions.rows,
// // // // // // //       cols: type === 'system' && index === 1 ? 1 : dimensions.cols, // B vector for systems
// // // // // // //       data: new Array(dimensions.rows * (type === 'system' && index === 1 ? 1 : dimensions.cols)).fill('')
// // // // // // //     }));

// // // // // // //     setMatrices(initialMatrices);
// // // // // // //     setStep('input');
// // // // // // //   };

// // // // // // //   const handleDimensionsChange = (dimension, value) => {
// // // // // // //     const inputValue = value;
    
// // // // // // //     // Handle empty input
// // // // // // //     if (inputValue === '') {
// // // // // // //       setDimensions(prev => ({ ...prev, [dimension]: '' }));
// // // // // // //       return;
// // // // // // //     }
    
// // // // // // //     const numericValue = parseInt(inputValue);
// // // // // // //     const newDimensions = { ...dimensions, [dimension]: numericValue };
    
// // // // // // //     // Always update display value
// // // // // // //     setDimensions(newDimensions);
    
// // // // // // //     // Only update matrices if both dimensions are valid
// // // // // // //     if (newDimensions.rows >= 1 && newDimensions.rows <= 10 && 
// // // // // // //         newDimensions.cols >= 1 && newDimensions.cols <= 10) {
      
// // // // // // //       // Update existing matrices with new dimensions
// // // // // // //       const updatedMatrices = matrices.map((matrix, index) => {
// // // // // // //         const newRows = newDimensions.rows;
// // // // // // //         const newCols = operationType === 'system' && index === 1 ? 1 : newDimensions.cols;
// // // // // // //         const newData = new Array(newRows * newCols).fill('');
        
// // // // // // //         // Copy existing values that fit in new dimensions
// // // // // // //         for (let row = 0; row < Math.min(matrix.rows, newRows); row++) {
// // // // // // //           for (let col = 0; col < Math.min(matrix.cols, newCols); col++) {
// // // // // // //             const oldIndex = row * matrix.cols + col;
// // // // // // //             const newIndex = row * newCols + col;
// // // // // // //             if (oldIndex < matrix.data.length) {
// // // // // // //               newData[newIndex] = matrix.data[oldIndex];
// // // // // // //             }
// // // // // // //           }
// // // // // // //         }
        
// // // // // // //         return {
// // // // // // //           ...matrix,
// // // // // // //           rows: newRows,
// // // // // // //           cols: newCols,
// // // // // // //           data: newData
// // // // // // //         };
// // // // // // //       });
      
// // // // // // //       setMatrices(updatedMatrices);
// // // // // // //       setErrors([]);
// // // // // // //     } else {
// // // // // // //       const dimensionErrors = [];
// // // // // // //       if (newDimensions.rows < 1 || newDimensions.rows > 10) {
// // // // // // //         dimensionErrors.push('Number of rows must be between 1 and 10');
// // // // // // //       }
// // // // // // //       if (newDimensions.cols < 1 || newDimensions.cols > 10) {
// // // // // // //         dimensionErrors.push('Number of columns must be between 1 and 10');
// // // // // // //       }
// // // // // // //       setErrors(dimensionErrors);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Matrix manipulation functions
// // // // // // //   const updateMatrixCell = (matrixIndex, cellIndex, value) => {
// // // // // // //     const updatedMatrices = [...matrices];
// // // // // // //     updatedMatrices[matrixIndex].data[cellIndex] = value;
// // // // // // //     setMatrices(updatedMatrices);
    
// // // // // // //     if (errors.length > 0) {
// // // // // // //       setErrors([]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const addMatrix = () => {
// // // // // // //     if (operationType === 'system' && matrices.length < 5) {
// // // // // // //       const newMatrix = {
// // // // // // //         id: matrices.length,
// // // // // // //         rows: dimensions.rows,
// // // // // // //         cols: dimensions.cols,
// // // // // // //         data: new Array(dimensions.rows * dimensions.cols).fill('')
// // // // // // //       };
// // // // // // //       setMatrices([...matrices, newMatrix]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const removeMatrix = (matrixIndex) => {
// // // // // // //     if (operationType === 'system' && matrices.length > 2) {
// // // // // // //       setMatrices(matrices.filter((_, index) => index !== matrixIndex));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const getAvailableOperations = () => {
// // // // // // //     return operationsByType[operationType] || [];
// // // // // // //   };

// // // // // // //   const handleOperationSelect = (operation) => {
// // // // // // //     setSelectedOperation(operation);
// // // // // // //     setErrors([]);
// // // // // // //   };

// // // // // // //   const renderMatrix = (matrix, matrixIndex) => {
// // // // // // //     const gridStyle = {
// // // // // // //       gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
// // // // // // //       gridTemplateRows: `repeat(${matrix.rows}, 1fr)`
// // // // // // //     };

// // // // // // //     return (
// // // // // // //       <div key={matrix.id} className={styles.matrixCard}>
// // // // // // //         <div className={styles.matrixHeader}>
// // // // // // //           <h4 className={styles.matrixName}>
// // // // // // //             Matrix {String.fromCharCode(65 + matrixIndex)}
// // // // // // //             {operationType === 'system' && matrixIndex === matrices.length - 1 && matrices.length > 1 && ' (Vector)'}
// // // // // // //           </h4>
// // // // // // //           <div className={styles.matrixDimensions}>
// // // // // // //             {matrix.rows} × {matrix.cols}
// // // // // // //           </div>
// // // // // // //           {operationType === 'system' && matrices.length > 2 && matrixIndex >= 2 && (
// // // // // // //             <button
// // // // // // //               onClick={() => removeMatrix(matrixIndex)}
// // // // // // //               className={styles.removeButton}
// // // // // // //             >
// // // // // // //               Remove
// // // // // // //             </button>
// // // // // // //           )}
// // // // // // //         </div>
        
// // // // // // //         <div className={styles.matrixContainer}>
// // // // // // //           <div className={styles.matrixContent}>
// // // // // // //             <span className={styles.matrixBracket}>[</span>
// // // // // // //             <div 
// // // // // // //               className={styles.matrixTable}
// // // // // // //               style={gridStyle}
// // // // // // //             >
// // // // // // //               {matrix.data.map((cell, cellIndex) => (
// // // // // // //                 <input
// // // // // // //                   key={cellIndex}
// // // // // // //                   type="number"
// // // // // // //                   step="any"
// // // // // // //                   value={cell}
// // // // // // //                   onChange={(e) => updateMatrixCell(matrixIndex, cellIndex, e.target.value)}
// // // // // // //                   className={`${styles.matrixCell} ${
// // // // // // //                     cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? styles.error : ''
// // // // // // //                   }`}
// // // // // // //                   placeholder="0"
// // // // // // //                 />
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //             <span className={styles.matrixBracket}>]</span>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const executeOperation = async () => {
// // // // // // //     if (!validateInputs()) {
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setIsLoading(true);
// // // // // // //     setResult('');

// // // // // // //     try {
// // // // // // //       // Prepare data for API
// // // // // // //       const operationData = {
// // // // // // //         operation: selectedOperation,
// // // // // // //         operationType,
// // // // // // //         dimensions,
// // // // // // //         matrices: matrices.map(matrix => ({
// // // // // // //           rows: matrix.rows,
// // // // // // //           cols: matrix.cols,
// // // // // // //           data: matrix.data.map(cell => parseFloat(cell))
// // // // // // //         })),
// // // // // // //         scalarValue: scalarValue ? parseFloat(scalarValue) : null
// // // // // // //       };

// // // // // // //       // Simulate API call
// // // // // // //       await new Promise(resolve => setTimeout(resolve, 1200));
      
// // // // // // //       // Placeholder result
// // // // // // //       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
      
// // // // // // //     } catch (error) {
// // // // // // //       setErrors(['Failed to execute operation. Please try again.']);
// // // // // // //     } finally {
// // // // // // //       setIsLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const canExecute = () => {
// // // // // // //     return selectedOperation && matrices.length > 0 && !isLoading;
// // // // // // //   };

// // // // // // //   const getMatrixGridClass = () => {
// // // // // // //     if (operationType === 'single') return styles.matrixGridSingle;
// // // // // // //     if (operationType === 'two' || operationType === 'scalar') return styles.matrixGridTwo;
// // // // // // //     return styles.matrixGridMultiple;
// // // // // // //   };

// // // // // // //   const needsScalarInput = () => {
// // // // // // //     return operationType === 'scalar' || 
// // // // // // //            (operationType === 'single' && ['Matrix Power (Scalar)'].includes(selectedOperation));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       <div className={styles.main}>
// // // // // // //         {/* Header */}
// // // // // // //         <div className={styles.header}>
// // // // // // //           <h1 className={styles.title}>Matrix Calculator</h1>
// // // // // // //           <p className={styles.subtitle}>Professional matrix operations calculator</p>
// // // // // // //         </div>

// // // // // // //         {/* Step 1: Operation Type Selection */}
// // // // // // //         {step === 'operation-type' && (
// // // // // // //           <div>
// // // // // // //             <h2 className={styles.stepTitle}>Select Operation Type</h2>
// // // // // // //             <div className={styles.operationTypeGrid}>
// // // // // // //               {operationTypes.map((type) => (
// // // // // // //                 <button
// // // // // // //                   key={type.id}
// // // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // // //                   className={styles.operationTypeCard}
// // // // // // //                 >
// // // // // // //                   <div className={styles.operationTypeTitle}>
// // // // // // //                     {type.label}
// // // // // // //                   </div>
// // // // // // //                   <div className={styles.operationTypeDescription}>
// // // // // // //                     {type.description}
// // // // // // //                   </div>
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Step 2: Matrix Input and Operations */}
// // // // // // //         {step === 'input' && (
// // // // // // //           <div>
// // // // // // //             <div className={styles.inputHeader}>
// // // // // // //               <h2 className={styles.inputTitle}>
// // // // // // //                 Matrix Input ({dimensions.rows}×{dimensions.cols})
// // // // // // //               </h2>
// // // // // // //               <div className={styles.buttonGroup}>
// // // // // // //                 <button
// // // // // // //                   onClick={handleBack}
// // // // // // //                   className={`${styles.button} ${styles.buttonSecondary}`}
// // // // // // //                 >
// // // // // // //                   Back
// // // // // // //                 </button>
// // // // // // //                 <button
// // // // // // //                   onClick={handleReset}
// // // // // // //                   className={`${styles.button} ${styles.buttonDanger}`}
// // // // // // //                 >
// // // // // // //                   Reset
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Matrix Dimensions Controls */}
// // // // // // //             <div style={{
// // // // // // //               display: 'flex',
// // // // // // //               justifyContent: 'center',
// // // // // // //               alignItems: 'center',
// // // // // // //               gap: '24px',
// // // // // // //               marginBottom: '24px',
// // // // // // //               padding: '16px',
// // // // // // //               backgroundColor: '#f0f7ff',
// // // // // // //               borderRadius: '8px',
// // // // // // //               border: '1px solid #e0e7ff',
// // // // // // //               flexWrap: 'wrap'
// // // // // // //             }}>
// // // // // // //               <div style={{
// // // // // // //                 display: 'flex',
// // // // // // //                 alignItems: 'center',
// // // // // // //                 gap: '8px'
// // // // // // //               }}>
// // // // // // //                 <label style={{
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   fontWeight: '500',
// // // // // // //                   color: '#374151'
// // // // // // //                 }}>
// // // // // // //                   Rows:
// // // // // // //                 </label>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   min="1"
// // // // // // //                   max="10"
// // // // // // //                   value={dimensions.rows}
// // // // // // //                   onChange={(e) => handleDimensionsChange('rows', e.target.value)}
// // // // // // //                   style={{
// // // // // // //                     width: '60px',
// // // // // // //                     padding: '8px 12px',
// // // // // // //                     border: dimensions.rows < 1 || dimensions.rows > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // // // //                     borderRadius: '8px',
// // // // // // //                     fontSize: '1rem',
// // // // // // //                     textAlign: 'center'
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div style={{
// // // // // // //                 display: 'flex',
// // // // // // //                 alignItems: 'center',
// // // // // // //                 gap: '8px'
// // // // // // //               }}>
// // // // // // //                 <label style={{
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   fontWeight: '500',
// // // // // // //                   color: '#374151'
// // // // // // //                 }}>
// // // // // // //                   Columns:
// // // // // // //                 </label>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   min="1"
// // // // // // //                   max="10"
// // // // // // //                   value={dimensions.cols}
// // // // // // //                   onChange={(e) => handleDimensionsChange('cols', e.target.value)}
// // // // // // //                   style={{
// // // // // // //                     width: '60px',
// // // // // // //                     padding: '8px 12px',
// // // // // // //                     border: dimensions.cols < 1 || dimensions.cols > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // // // //                     borderRadius: '8px',
// // // // // // //                     fontSize: '1rem',
// // // // // // //                     textAlign: 'center'
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div style={{
// // // // // // //                 fontSize: '0.9rem',
// // // // // // //                 color: '#6b7280'
// // // // // // //               }}>
// // // // // // //                 Matrix size: {dimensions.rows} × {dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
// // // // // // //               </div>
// // // // // // //               {operationType === 'single' && dimensions.rows !== dimensions.cols && (
// // // // // // //                 <div style={{
// // // // // // //                   fontSize: '0.85rem',
// // // // // // //                   color: '#dc2626',
// // // // // // //                   fontWeight: '500'
// // // // // // //                 }}>
// // // // // // //                   Note: Some operations require square matrices
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             {/* Error Display */}
// // // // // // //             {errors.length > 0 && (
// // // // // // //               <div className={styles.errorSection}>
// // // // // // //                 <div className={styles.errorTitle}>Please fix the following:</div>
// // // // // // //                 <ul className={styles.errorList}>
// // // // // // //                   {errors.map((error, index) => (
// // // // // // //                     <li key={index} className={styles.errorItem}>{error}</li>
// // // // // // //                   ))}
// // // // // // //                 </ul>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {/* Matrix Inputs */}
// // // // // // //             <div className={`${styles.matrixGrid} ${getMatrixGridClass()}`}>
// // // // // // //               {matrices.map((matrix, index) => renderMatrix(matrix, index))}
// // // // // // //             </div>

// // // // // // //             {/* Add Matrix Button for System Operations */}
// // // // // // //             {operationType === 'system' && matrices.length < 5 && (
// // // // // // //               <div className={styles.addMatrixContainer}>
// // // // // // //                 <button
// // // // // // //                   onClick={addMatrix}
// // // // // // //                   className={styles.addMatrixButton}
// // // // // // //                 >
// // // // // // //                   + Add Matrix
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {/* Available Operations */}
// // // // // // //             <div className={styles.operationsSection}>
// // // // // // //               <h3 className={styles.operationsTitle}>Available Operations</h3>
              
// // // // // // //               {/* Scalar Input for scalar operations */}
// // // // // // //               {needsScalarInput() && (
// // // // // // //                 <div className={styles.scalarInputContainer}>
// // // // // // //                   <label className={styles.scalarLabel}>Scalar value:</label>
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     step="any"
// // // // // // //                     value={scalarValue}
// // // // // // //                     onChange={(e) => setScalarValue(e.target.value)}
// // // // // // //                     placeholder="Enter scalar value"
// // // // // // //                     className={styles.scalarInput}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               <div className={styles.operationsGrid}>
// // // // // // //                 {getAvailableOperations().map((operation) => {
// // // // // // //                   const isDisabled = 
// // // // // // //                     (operation === 'Determinant' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols) ||
// // // // // // //                     (operation === 'Inverse' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols) ||
// // // // // // //                     (operation === 'Eigenvalues' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols) ||
// // // // // // //                     (operation === 'Eigenvectors' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols);

// // // // // // //                   return (
// // // // // // //                     <button
// // // // // // //                       key={operation}
// // // // // // //                       onClick={() => handleOperationSelect(operation)}
// // // // // // //                       disabled={isDisabled}
// // // // // // //                       className={`${styles.operationButton} ${
// // // // // // //                         selectedOperation === operation ? styles.selected : ''
// // // // // // //                       }`}
// // // // // // //                     >
// // // // // // //                       {operation}
// // // // // // //                     </button>
// // // // // // //                   );
// // // // // // //                 })}
// // // // // // //               </div>

// // // // // // //               {/* Execute Button */}
// // // // // // //               <div style={{ display: 'flex', justifyContent: 'center' }}>
// // // // // // //                 <button
// // // // // // //                   onClick={executeOperation}
// // // // // // //                   disabled={!canExecute()}
// // // // // // //                   className={styles.executeButton}
// // // // // // //                 >
// // // // // // //                   {isLoading ? (
// // // // // // //                     <div className={styles.loading}>
// // // // // // //                       <div className={styles.spinner}></div>
// // // // // // //                       Calculating...
// // // // // // //                     </div>
// // // // // // //                   ) : (
// // // // // // //                     'Execute Operation'
// // // // // // //                   )}
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Results */}
// // // // // // //             <div className={styles.resultsSection}>
// // // // // // //               <h4 className={styles.resultsTitle}>Result</h4>
// // // // // // //               <div className={styles.resultsContent}>
// // // // // // //                 {result || 'Select matrices and operation, then click Execute'}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import React, { useState } from 'react';

// // // // // // /* ── placeholder explanations ─────────────────────────────────── */

// // // // // // const categoryExplanations = {
// // // // // //   single: {
// // // // // //     _default: 'Single matrix operations work on one matrix at a time. Choose an operation to see a detailed explanation.',
// // // // // //     Transpose: 'The transpose flips a matrix over its diagonal, turning rows into columns and vice versa: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62.',
// // // // // //     Determinant: 'The determinant is a scalar value that encodes properties of a square matrix. It is zero if and only if the matrix is singular (non-invertible).',
// // // // // //     Inverse: 'The inverse A\u207B\u00B9 satisfies AA\u207B\u00B9 = I. It exists only for square matrices with non-zero determinant.',
// // // // // //     Trace: 'The trace is the sum of the diagonal elements: tr(A) = \u03A3 a\u1D62\u1D62. Defined only for square matrices.',
// // // // // //     Rank: 'The rank is the number of linearly independent rows (or columns). Found via row reduction to echelon form.',
// // // // // //     Eigenvalues: 'Eigenvalues \u03BB satisfy det(A \u2212 \u03BBI) = 0. They reveal scaling factors along principal directions.',
// // // // // //     Eigenvectors: 'Eigenvectors v satisfy Av = \u03BBv. Each eigenvalue has at least one associated eigenvector.',
// // // // // //     'Characteristic Polynomial': 'The characteristic polynomial is det(A \u2212 \u03BBI), whose roots are the eigenvalues.',
// // // // // //     'LU Decomposition': 'LU decomposition factors A = LU where L is lower triangular and U is upper triangular.',
// // // // // //     'QR Decomposition': 'QR decomposition factors A = QR where Q is orthogonal and R is upper triangular.',
// // // // // //     'Singular Value Decomposition': 'SVD factors A = U\u03A3V\u1D40 into orthogonal matrices U, V and diagonal \u03A3 of singular values.',
// // // // // //   },
// // // // // //   two: {
// // // // // //     _default: 'Two-matrix operations take a pair of matrices and produce a new matrix or scalar. Choose an operation to learn more.',
// // // // // //     Addition: 'Matrix addition sums corresponding elements. Both matrices must have identical dimensions.',
// // // // // //     Subtraction: 'Matrix subtraction finds the difference of corresponding elements. Both matrices must have identical dimensions.',
// // // // // //     Multiplication: 'Matrix multiplication AB requires columns of A to equal rows of B. Result is m\u00D7p for m\u00D7n and n\u00D7p matrices.',
// // // // // //     'Element-wise Multiplication': 'Hadamard product multiplies corresponding elements. Both matrices must have identical dimensions.',
// // // // // //     'Kronecker Product': 'The Kronecker product A\u2297B creates a block matrix by multiplying every element of A by the entire matrix B.',
// // // // // //     'Matrix Power': 'Raises a square matrix to an integer power by repeated multiplication: A\u207F = A\u00B7A\u00B7\u2026\u00B7A.',
// // // // // //     Commutator: 'The commutator [A,B] = AB \u2212 BA measures how much multiplication order matters. Zero for commuting matrices.',
// // // // // //     'Anti-commutator': 'The anti-commutator {A,B} = AB + BA. Used extensively in quantum mechanics.',
// // // // // //   },
// // // // // //   scalar: {
// // // // // //     _default: 'Scalar operations combine a matrix with a single number. Choose an operation to see details.',
// // // // // //     'Scalar Multiplication': 'Multiplies every element of the matrix by the scalar: (cA)\u1D62\u2C7C = c \u00B7 a\u1D62\u2C7C.',
// // // // // //     'Scalar Addition': 'Adds the scalar to every element of the matrix: (A + c)\u1D62\u2C7C = a\u1D62\u2C7C + c.',
// // // // // //     'Scalar Subtraction': 'Subtracts the scalar from every element: (A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 c.',
// // // // // //     'Matrix Power (Scalar)': 'Raises a square matrix to a scalar integer power by repeated multiplication.',
// // // // // //     Exponential: 'The matrix exponential e\u1D2C is defined via the Taylor series: \u03A3 A\u207F/n! for n = 0, 1, 2, \u2026',
// // // // // //     Logarithm: 'The matrix logarithm is the inverse of the matrix exponential. Requires certain conditions on the matrix.',
// // // // // //   },
// // // // // //   system: {
// // // // // //     _default: 'System operations solve or analyse systems of linear equations Ax = b. Choose an operation to see details.',
// // // // // //     'Solve Linear System': 'Finds the vector x satisfying Ax = b using the most appropriate method for the given system.',
// // // // // //     'Gaussian Elimination': 'Reduces the augmented matrix [A|b] to row echelon form using elementary row operations.',
// // // // // //     'Gauss-Jordan': 'Extends Gaussian elimination to reduced row echelon form (RREF), directly yielding the solution.',
// // // // // //     'Cramer\'s Rule': 'Solves a system with a unique solution by computing ratios of determinants. Requires square, non-singular A.',
// // // // // //     'Matrix Equation AX=B': 'Solves AX = B for X by computing X = A\u207B\u00B9B. Requires A to be square and invertible.',
// // // // // //     'Least Squares Solution': 'Finds x that minimizes ||Ax \u2212 b||\u00B2. Works even for overdetermined (non-square) systems.',
// // // // // //   },
// // // // // // };

// // // // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // // // const s = {
// // // // // //   container: {
// // // // // //     minHeight: '100vh',
// // // // // //     backgroundColor: '#f8f9fa',
// // // // // //     padding: '20px',
// // // // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // // //   },
// // // // // //   mainNarrow: {
// // // // // //     maxWidth: '800px',
// // // // // //     margin: '0 auto',
// // // // // //     backgroundColor: 'white',
// // // // // //     borderRadius: '16px',
// // // // // //     padding: '32px',
// // // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // // //     transition: 'max-width 0.4s ease',
// // // // // //   },
// // // // // //   mainWide: {
// // // // // //     maxWidth: 'calc(100vw - 400px)',
// // // // // //     margin: '0 auto',
// // // // // //     backgroundColor: 'white',
// // // // // //     borderRadius: '16px',
// // // // // //     padding: '32px',
// // // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // // //     transition: 'max-width 0.4s ease',
// // // // // //   },
// // // // // //   header: {
// // // // // //     textAlign: 'center',
// // // // // //     marginBottom: '32px',
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: '2.5rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1a1a1a',
// // // // // //     margin: '0 0 8px 0',
// // // // // //   },
// // // // // //   subtitle: {
// // // // // //     color: '#6b7280',
// // // // // //     fontSize: '1.1rem',
// // // // // //     margin: '0',
// // // // // //   },
// // // // // //   stepTitle: {
// // // // // //     fontSize: '1.5rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1f2937',
// // // // // //     marginBottom: '24px',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   operationTypeGrid: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: '1fr',
// // // // // //     gap: '16px',
// // // // // //   },
// // // // // //   operationTypeCard: {
// // // // // //     padding: '20px',
// // // // // //     border: '2px solid #e5e7eb',
// // // // // //     borderRadius: '12px',
// // // // // //     backgroundColor: 'white',
// // // // // //     cursor: 'pointer',
// // // // // //     textAlign: 'left',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //   },
// // // // // //   operationTypeTitle: {
// // // // // //     fontSize: '1.2rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1f2937',
// // // // // //     marginBottom: '8px',
// // // // // //   },
// // // // // //   operationTypeDescription: {
// // // // // //     fontSize: '1rem',
// // // // // //     color: '#6b7280',
// // // // // //   },

// // // // // //   /* — 3-col layout — */
// // // // // //   threeColLayout: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: '200px 2fr 1fr',
// // // // // //     gap: '24px',
// // // // // //     alignItems: 'start',
// // // // // //   },
// // // // // //   leftPanel: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     gap: '10px',
// // // // // //     position: 'sticky',
// // // // // //     top: '20px',
// // // // // //   },
// // // // // //   leftPanelTitle: {
// // // // // //     fontSize: '0.95rem',
// // // // // //     fontWeight: '700',
// // // // // //     color: '#1f2937',
// // // // // //     marginBottom: '4px',
// // // // // //     textTransform: 'uppercase',
// // // // // //     letterSpacing: '0.04em',
// // // // // //   },
// // // // // //   explanationPanel: {
// // // // // //     backgroundColor: '#f0f4ff',
// // // // // //     borderRadius: '12px',
// // // // // //     padding: '24px',
// // // // // //     border: '1px solid #d0d9f0',
// // // // // //     position: 'sticky',
// // // // // //     top: '20px',
// // // // // //   },
// // // // // //   explanationTitle: {
// // // // // //     fontSize: '1.05rem',
// // // // // //     fontWeight: '700',
// // // // // //     color: '#1f2937',
// // // // // //     margin: '0 0 12px 0',
// // // // // //   },
// // // // // //   explanationBody: {
// // // // // //     fontSize: '0.95rem',
// // // // // //     lineHeight: '1.6',
// // // // // //     color: '#374151',
// // // // // //     margin: 0,
// // // // // //   },

// // // // // //   /* — middle (calculator) — */
// // // // // //   inputHeader: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   inputTitle: {
// // // // // //     fontSize: '1.35rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1f2937',
// // // // // //     margin: '0',
// // // // // //   },
// // // // // //   buttonGroup: { display: 'flex', gap: '12px' },

// // // // // //   /* — dimension controls — */
// // // // // //   dimControls: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '24px',
// // // // // //     marginBottom: '24px',
// // // // // //     padding: '14px',
// // // // // //     backgroundColor: '#f0f7ff',
// // // // // //     borderRadius: '8px',
// // // // // //     border: '1px solid #e0e7ff',
// // // // // //     flexWrap: 'wrap',
// // // // // //   },
// // // // // //   dimGroup: {
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '8px',
// // // // // //   },
// // // // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },
// // // // // //   dimWarning: { fontSize: '0.85rem', color: '#dc2626', fontWeight: '500' },

// // // // // //   /* — matrix grid — */
// // // // // //   matrixGrid: {
// // // // // //     display: 'grid',
// // // // // //     gap: '24px',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   matrixGridSingle: { gridTemplateColumns: '1fr' },
// // // // // //   matrixGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' },
// // // // // //   matrixGridMultiple: { gridTemplateColumns: '1fr' },
// // // // // //   matrixCard: {
// // // // // //     backgroundColor: '#f8f9fa',
// // // // // //     padding: '20px',
// // // // // //     borderRadius: '12px',
// // // // // //     border: '1px solid #e5e7eb',
// // // // // //   },
// // // // // //   matrixHeader: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: '16px',
// // // // // //   },
// // // // // //   matrixName: {
// // // // // //     margin: '0',
// // // // // //     fontSize: '1.1rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#374151',
// // // // // //   },
// // // // // //   matrixHeaderRight: {
// // // // // //     display: 'flex',
// // // // // //     gap: '8px',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   matrixDimLabel: {
// // // // // //     fontSize: '0.85rem',
// // // // // //     color: '#6b7280',
// // // // // //     fontWeight: '500',
// // // // // //   },
// // // // // //   matrixContainer: {
// // // // // //     display: 'flex',
// // // // // //     flexDirection: 'column',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   matrixContent: {
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '8px',
// // // // // //   },
// // // // // //   matrixBracket: {
// // // // // //     fontSize: '2rem',
// // // // // //     fontWeight: 'bold',
// // // // // //     color: '#374151',
// // // // // //     lineHeight: '1',
// // // // // //   },
// // // // // //   matrixTable: {
// // // // // //     display: 'grid',
// // // // // //     gap: '4px',
// // // // // //     padding: '8px',
// // // // // //   },
// // // // // //   matrixCell: {
// // // // // //     width: '50px',
// // // // // //     height: '35px',
// // // // // //     padding: '4px',
// // // // // //     border: '1px solid #d1d5db',
// // // // // //     borderRadius: '4px',
// // // // // //     textAlign: 'center',
// // // // // //     fontSize: '0.85rem',
// // // // // //     backgroundColor: 'white',
// // // // // //     outline: 'none',
// // // // // //   },
// // // // // //   matrixCellError: {
// // // // // //     borderColor: '#dc2626',
// // // // // //     backgroundColor: '#fef2f2',
// // // // // //   },

// // // // // //   /* — operations — */
// // // // // //   operationsSection: { marginBottom: '24px' },
// // // // // //   operationsTitle: {
// // // // // //     fontSize: '1.1rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1f2937',
// // // // // //     marginBottom: '16px',
// // // // // //   },
// // // // // //   operationsGrid: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
// // // // // //     gap: '8px',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   operationButton: {
// // // // // //     padding: '10px 12px',
// // // // // //     border: '2px solid #e5e7eb',
// // // // // //     borderRadius: '8px',
// // // // // //     backgroundColor: 'white',
// // // // // //     color: '#374151',
// // // // // //     fontSize: '0.85rem',
// // // // // //     fontWeight: '500',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   operationButtonSelected: {
// // // // // //     borderColor: '#4285f4',
// // // // // //     backgroundColor: '#f0f7ff',
// // // // // //     color: '#4285f4',
// // // // // //   },
// // // // // //   operationButtonDisabled: {
// // // // // //     backgroundColor: '#f3f4f6',
// // // // // //     color: '#9ca3af',
// // // // // //     cursor: 'not-allowed',
// // // // // //     borderColor: '#e5e7eb',
// // // // // //   },

// // // // // //   /* — scalar input — */
// // // // // //   scalarSection: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '12px',
// // // // // //     marginBottom: '16px',
// // // // // //     padding: '12px',
// // // // // //     backgroundColor: '#f0f7ff',
// // // // // //     borderRadius: '8px',
// // // // // //     border: '1px solid #e0e7ff',
// // // // // //   },
// // // // // //   scalarLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // // //   scalarInput: {
// // // // // //     width: '80px',
// // // // // //     padding: '8px 12px',
// // // // // //     border: '1px solid #d1d5db',
// // // // // //     borderRadius: '6px',
// // // // // //     textAlign: 'center',
// // // // // //     fontSize: '1rem',
// // // // // //     outline: 'none',
// // // // // //   },

// // // // // //   /* — execute — */
// // // // // //   executeButton: {
// // // // // //     padding: '12px 32px',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '8px',
// // // // // //     backgroundColor: '#4285f4',
// // // // // //     color: 'white',
// // // // // //     fontSize: '1rem',
// // // // // //     fontWeight: '500',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   executeButtonDisabled: {
// // // // // //     backgroundColor: '#9ca3af',
// // // // // //     cursor: 'not-allowed',
// // // // // //   },

// // // // // //   /* — results — */
// // // // // //   resultsSection: {
// // // // // //     backgroundColor: '#f9fafb',
// // // // // //     padding: '16px',
// // // // // //     borderRadius: '8px',
// // // // // //     border: '1px solid #e5e7eb',
// // // // // //   },
// // // // // //   resultsTitle: {
// // // // // //     margin: '0 0 12px 0',
// // // // // //     fontSize: '1.05rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1f2937',
// // // // // //   },
// // // // // //   resultsContent: {
// // // // // //     minHeight: '60px',
// // // // // //     backgroundColor: 'white',
// // // // // //     padding: '12px',
// // // // // //     borderRadius: '6px',
// // // // // //     border: '1px solid #d1d5db',
// // // // // //     fontSize: '1rem',
// // // // // //     color: '#374151',
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'center',
// // // // // //     flexDirection: 'column',
// // // // // //     gap: '8px',
// // // // // //   },

// // // // // //   /* — errors — */
// // // // // //   errorSection: {
// // // // // //     backgroundColor: '#fef2f2',
// // // // // //     border: '1px solid #fecaca',
// // // // // //     borderRadius: '8px',
// // // // // //     padding: '16px',
// // // // // //     marginBottom: '16px',
// // // // // //   },
// // // // // //   errorTitle: {
// // // // // //     color: '#dc2626',
// // // // // //     fontWeight: '600',
// // // // // //     fontSize: '1rem',
// // // // // //     margin: '0 0 8px 0',
// // // // // //   },
// // // // // //   errorList: { listStyle: 'none', padding: '0', margin: '0' },
// // // // // //   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

// // // // // //   /* — buttons — */
// // // // // //   buttonDanger: {
// // // // // //     padding: '8px 16px',
// // // // // //     borderRadius: '6px',
// // // // // //     fontSize: '0.9rem',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //     border: '2px solid #dc2626',
// // // // // //     backgroundColor: 'transparent',
// // // // // //     color: '#dc2626',
// // // // // //   },
// // // // // //   clearMatrixButton: {
// // // // // //     padding: '3px 8px',
// // // // // //     border: '1px solid #9ca3af',
// // // // // //     borderRadius: '4px',
// // // // // //     backgroundColor: 'transparent',
// // // // // //     color: '#6b7280',
// // // // // //     fontSize: '0.75rem',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'all 0.15s ease',
// // // // // //   },
// // // // // //   removeButton: {
// // // // // //     padding: '3px 8px',
// // // // // //     border: 'none',
// // // // // //     borderRadius: '4px',
// // // // // //     backgroundColor: '#dc2626',
// // // // // //     color: 'white',
// // // // // //     fontSize: '0.75rem',
// // // // // //     cursor: 'pointer',
// // // // // //   },
// // // // // //   addMatrixContainer: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   addMatrixButton: {
// // // // // //     padding: '8px 16px',
// // // // // //     border: '2px dashed #4285f4',
// // // // // //     borderRadius: '8px',
// // // // // //     backgroundColor: 'transparent',
// // // // // //     color: '#4285f4',
// // // // // //     fontSize: '0.9rem',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //   },

// // // // // //   /* — loading — */
// // // // // //   loading: {
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'center',
// // // // // //     gap: '8px',
// // // // // //   },
// // // // // //   spinner: {
// // // // // //     width: '16px',
// // // // // //     height: '16px',
// // // // // //     border: '2px solid #e5e7eb',
// // // // // //     borderTop: '2px solid #4285f4',
// // // // // //     borderRadius: '50%',
// // // // // //     animation: 'spin 1s linear infinite',
// // // // // //   },
// // // // // // };

// // // // // // const spinKeyframes = `
// // // // // // @keyframes spin {
// // // // // //   0% { transform: rotate(0deg); }
// // // // // //   100% { transform: rotate(360deg); }
// // // // // // }`;

// // // // // // /* ── component ────────────────────────────────────────────────── */

// // // // // // export default function MatrixCalculator() {
// // // // // //   const [step, setStep] = useState('operation-type');
// // // // // //   const [operationType, setOperationType] = useState('');
// // // // // //   const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
// // // // // //   const [matrices, setMatrices] = useState([]);
// // // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // // //   const [scalarValue, setScalarValue] = useState('');
// // // // // //   const [result, setResult] = useState(null);
// // // // // //   const [errors, setErrors] = useState([]);
// // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // //   const operationTypes = [
// // // // // //     { id: 'single', label: 'Single Matrix', description: 'Determinant, transpose, inverse, eigenvalues' },
// // // // // //     { id: 'two', label: 'Two Matrices', description: 'Addition, subtraction, multiplication' },
// // // // // //     { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, addition' },
// // // // // //     { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' },
// // // // // //   ];

// // // // // //   const operationsByType = {
// // // // // //     single: [
// // // // // //       'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank',
// // // // // //       'Eigenvalues', 'Eigenvectors', 'Characteristic Polynomial',
// // // // // //       'LU Decomposition', 'QR Decomposition', 'Singular Value Decomposition',
// // // // // //     ],
// // // // // //     two: [
// // // // // //       'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
// // // // // //       'Kronecker Product', 'Matrix Power', 'Commutator', 'Anti-commutator',
// // // // // //     ],
// // // // // //     scalar: [
// // // // // //       'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
// // // // // //       'Matrix Power (Scalar)', 'Exponential', 'Logarithm',
// // // // // //     ],
// // // // // //     system: [
// // // // // //       'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
// // // // // //       "Cramer's Rule", 'Matrix Equation AX=B', 'Least Squares Solution',
// // // // // //     ],
// // // // // //   };

// // // // // //   const squareOnly = ['Determinant', 'Inverse', 'Trace', 'Eigenvalues', 'Eigenvectors',
// // // // // //     'Characteristic Polynomial', 'LU Decomposition'];

// // // // // //   /* ── validation ── */

// // // // // //   const validateInputs = () => {
// // // // // //     const newErrors = [];
// // // // // //     if (!selectedOperation) newErrors.push('Please select an operation');

// // // // // //     matrices.forEach((matrix, index) => {
// // // // // //       const name = String.fromCharCode(65 + index);
// // // // // //       const total = matrix.rows * matrix.cols;
// // // // // //       const empty = matrix.data.filter(c => c === '' || c === null || c === undefined).length;
// // // // // //       const valid = matrix.data.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // // // //       if (empty > 0) newErrors.push(`Matrix ${name} has empty cells`);
// // // // // //       if (valid !== total) newErrors.push(`Matrix ${name} contains invalid numbers`);
// // // // // //     });

// // // // // //     if (operationType === 'two' && matrices.length === 2) {
// // // // // //       const [a, b] = matrices;
// // // // // //       if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
// // // // // //         if (a.rows !== b.rows || a.cols !== b.cols)
// // // // // //           newErrors.push('Matrices must have the same dimensions for this operation');
// // // // // //       }
// // // // // //       if (selectedOperation === 'Multiplication') {
// // // // // //         if (a.cols !== b.rows)
// // // // // //           newErrors.push('For multiplication, columns of A must equal rows of B');
// // // // // //       }
// // // // // //     }

// // // // // //     if (operationType === 'single' && squareOnly.includes(selectedOperation)) {
// // // // // //       const m = matrices[0];
// // // // // //       if (m && m.rows !== m.cols) newErrors.push('This operation requires a square matrix');
// // // // // //     }

// // // // // //     if (operationType === 'scalar') {
// // // // // //       if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(parseFloat(scalarValue)))
// // // // // //         newErrors.push('Please enter a valid scalar value');
// // // // // //     }

// // // // // //     setErrors(newErrors);
// // // // // //     return newErrors.length === 0;
// // // // // //   };

// // // // // //   /* ── handlers ── */

// // // // // //   const handleReset = () => {
// // // // // //     setStep('operation-type');
// // // // // //     setOperationType('');
// // // // // //     setDimensions({ rows: 3, cols: 3 });
// // // // // //     setMatrices([]);
// // // // // //     setSelectedOperation('');
// // // // // //     setScalarValue('');
// // // // // //     setResult(null);
// // // // // //     setErrors([]);
// // // // // //     setIsLoading(false);
// // // // // //   };

// // // // // //   const clearMatrix = (mi) => {
// // // // // //     const updated = [...matrices];
// // // // // //     updated[mi] = { ...updated[mi], data: new Array(updated[mi].rows * updated[mi].cols).fill('') };
// // // // // //     setMatrices(updated);
// // // // // //   };

// // // // // //   const handleOperationTypeSelect = (type) => {
// // // // // //     setOperationType(type);
// // // // // //     setSelectedOperation('');
// // // // // //     setErrors([]);
// // // // // //     setResult(null);

// // // // // //     let count = 1;
// // // // // //     if (type === 'two') count = 2;
// // // // // //     if (type === 'system') count = 2;

// // // // // //     const initialMatrices = Array(count).fill(null).map((_, i) => ({
// // // // // //       id: i,
// // // // // //       rows: dimensions.rows,
// // // // // //       cols: type === 'system' && i === count - 1 ? 1 : dimensions.cols,
// // // // // //       data: new Array(dimensions.rows * (type === 'system' && i === count - 1 ? 1 : dimensions.cols)).fill(''),
// // // // // //     }));
// // // // // //     setMatrices(initialMatrices);
// // // // // //     setStep('input');
// // // // // //   };

// // // // // //   const handleDimensionsChange = (dim, value) => {
// // // // // //     if (value === '') {
// // // // // //       setDimensions(prev => ({ ...prev, [dim]: '' }));
// // // // // //       return;
// // // // // //     }
// // // // // //     const val = parseInt(value);
// // // // // //     const newDims = { ...dimensions, [dim]: val };
// // // // // //     setDimensions(newDims);

// // // // // //     if (newDims.rows >= 1 && newDims.rows <= 10 && newDims.cols >= 1 && newDims.cols <= 10) {
// // // // // //       const updated = matrices.map((matrix, i) => {
// // // // // //         const nr = newDims.rows;
// // // // // //         const nc = operationType === 'system' && i === matrices.length - 1 ? 1 : newDims.cols;
// // // // // //         const newData = new Array(nr * nc).fill('');
// // // // // //         for (let r = 0; r < Math.min(matrix.rows, nr); r++) {
// // // // // //           for (let c = 0; c < Math.min(matrix.cols, nc); c++) {
// // // // // //             const oi = r * matrix.cols + c;
// // // // // //             const ni = r * nc + c;
// // // // // //             if (oi < matrix.data.length) newData[ni] = matrix.data[oi];
// // // // // //           }
// // // // // //         }
// // // // // //         return { ...matrix, rows: nr, cols: nc, data: newData };
// // // // // //       });
// // // // // //       setMatrices(updated);
// // // // // //       setErrors([]);
// // // // // //     } else {
// // // // // //       const errs = [];
// // // // // //       if (newDims.rows < 1 || newDims.rows > 10) errs.push('Rows must be between 1 and 10');
// // // // // //       if (newDims.cols < 1 || newDims.cols > 10) errs.push('Columns must be between 1 and 10');
// // // // // //       setErrors(errs);
// // // // // //     }
// // // // // //   };

// // // // // //   const updateMatrixCell = (mi, ci, value) => {
// // // // // //     const updated = [...matrices];
// // // // // //     updated[mi] = { ...updated[mi], data: [...updated[mi].data] };
// // // // // //     updated[mi].data[ci] = value;
// // // // // //     setMatrices(updated);
// // // // // //     if (errors.length > 0) setErrors([]);
// // // // // //   };

// // // // // //   const addMatrix = () => {
// // // // // //     if (operationType === 'system' && matrices.length < 5) {
// // // // // //       setMatrices([...matrices, {
// // // // // //         id: matrices.length,
// // // // // //         rows: dimensions.rows,
// // // // // //         cols: dimensions.cols,
// // // // // //         data: new Array(dimensions.rows * dimensions.cols).fill(''),
// // // // // //       }]);
// // // // // //     }
// // // // // //   };

// // // // // //   const removeMatrix = (mi) => {
// // // // // //     if (operationType === 'system' && matrices.length > 2)
// // // // // //       setMatrices(matrices.filter((_, i) => i !== mi));
// // // // // //   };

// // // // // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // // // // //   const handleOperationSelect = (op) => {
// // // // // //     setSelectedOperation(op);
// // // // // //     setErrors([]);
// // // // // //     setResult(null);
// // // // // //   };

// // // // // //   const executeOperation = () => {
// // // // // //     if (!validateInputs()) return;
// // // // // //     setIsLoading(true);
// // // // // //     setResult(null);
// // // // // //     setTimeout(() => {
// // // // // //       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
// // // // // //       setIsLoading(false);
// // // // // //     }, 150);
// // // // // //   };

// // // // // //   const canExecute = () => selectedOperation && matrices.length > 0 && !isLoading;

// // // // // //   const needsScalarInput = () =>
// // // // // //     operationType === 'scalar' || selectedOperation === 'Matrix Power (Scalar)';

// // // // // //   const isSquareRequired = (op) => squareOnly.includes(op);

// // // // // //   const isOpDisabled = (op) => {
// // // // // //     if (!isSquareRequired(op)) return false;
// // // // // //     const m = matrices[0];
// // // // // //     return m && m.rows !== m.cols;
// // // // // //   };

// // // // // //   /* ── explanation helpers ── */
// // // // // //   const getExplanation = () => {
// // // // // //     const pool = categoryExplanations[operationType];
// // // // // //     if (!pool) return '';
// // // // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // // // //     return pool._default;
// // // // // //   };

// // // // // //   const getExplanationHeading = () => {
// // // // // //     if (selectedOperation) return selectedOperation;
// // // // // //     const labels = {
// // // // // //       single: 'Single Matrix Ops',
// // // // // //       two: 'Two Matrix Ops',
// // // // // //       scalar: 'Scalar Ops',
// // // // // //       system: 'System Ops',
// // // // // //     };
// // // // // //     return labels[operationType] || 'Explanation';
// // // // // //   };

// // // // // //   /* ── left-panel button styles ── */
// // // // // //   const catBtnStyle = (id) => ({
// // // // // //     padding: '12px',
// // // // // //     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// // // // // //     borderRadius: '10px',
// // // // // //     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
// // // // // //     cursor: 'pointer',
// // // // // //     textAlign: 'left',
// // // // // //     transition: 'all 0.25s ease',
// // // // // //     width: '100%',
// // // // // //     boxSizing: 'border-box',
// // // // // //   });
// // // // // //   const catLabelStyle = (id) => ({
// // // // // //     fontSize: '0.9rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: operationType === id ? '#4285f4' : '#1f2937',
// // // // // //     marginBottom: '4px',
// // // // // //   });
// // // // // //   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

// // // // // //   const dimInputStyle = (val) => ({
// // // // // //     width: '60px',
// // // // // //     padding: '8px 12px',
// // // // // //     border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // // //     borderRadius: '8px',
// // // // // //     fontSize: '1rem',
// // // // // //     textAlign: 'center',
// // // // // //     outline: 'none',
// // // // // //   });

// // // // // //   const getMatrixGridExtra = () => {
// // // // // //     if (operationType === 'single') return s.matrixGridSingle;
// // // // // //     if (operationType === 'two' || operationType === 'scalar') return s.matrixGridTwo;
// // // // // //     return s.matrixGridMultiple;
// // // // // //   };

// // // // // //   /* ── render a matrix card ── */
// // // // // //   const renderMatrix = (matrix, mi) => {
// // // // // //     const gridStyle = {
// // // // // //       gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
// // // // // //       gridTemplateRows: `repeat(${matrix.rows}, 1fr)`,
// // // // // //     };
// // // // // //     const label = operationType === 'system' && mi === matrices.length - 1 && matrices.length > 1
// // // // // //       ? ` (Vector)` : '';

// // // // // //     return (
// // // // // //       <div key={matrix.id} style={s.matrixCard}>
// // // // // //         <div style={s.matrixHeader}>
// // // // // //           <h4 style={s.matrixName}>Matrix {String.fromCharCode(65 + mi)}{label}</h4>
// // // // // //           <div style={s.matrixHeaderRight}>
// // // // // //             <span style={s.matrixDimLabel}>{matrix.rows} × {matrix.cols}</span>
// // // // // //             <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// // // // // //               Clear
// // // // // //             </button>
// // // // // //             {operationType === 'system' && matrices.length > 2 && mi >= 2 && (
// // // // // //               <button onClick={() => removeMatrix(mi)} style={s.removeButton}>Remove</button>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div style={s.matrixContainer}>
// // // // // //           <div style={s.matrixContent}>
// // // // // //             <span style={s.matrixBracket}>[</span>
// // // // // //             <div style={{ ...s.matrixTable, ...gridStyle }}>
// // // // // //               {matrix.data.map((cell, ci) => (
// // // // // //                 <input
// // // // // //                   key={ci}
// // // // // //                   type="number"
// // // // // //                   step="any"
// // // // // //                   value={cell}
// // // // // //                   onChange={(e) => updateMatrixCell(mi, ci, e.target.value)}
// // // // // //                   placeholder="0"
// // // // // //                   style={{
// // // // // //                     ...s.matrixCell,
// // // // // //                     ...(cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? s.matrixCellError : {}),
// // // // // //                   }}
// // // // // //                 />
// // // // // //               ))}
// // // // // //             </div>
// // // // // //             <span style={s.matrixBracket}>]</span>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // // // // //   return (
// // // // // //     <div style={s.container}>
// // // // // //       <style>{spinKeyframes}</style>
// // // // // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // // // // //         {/* Header */}
// // // // // //         <div style={s.header}>
// // // // // //           <h1 style={s.title}>Matrix Calculator</h1>
// // // // // //           <p style={s.subtitle}>Professional matrix operations calculator</p>
// // // // // //         </div>

// // // // // //         {/* ── INITIAL STATE ── */}
// // // // // //         {step === 'operation-type' && (
// // // // // //           <div>
// // // // // //             <h2 style={s.stepTitle}>Select Operation Type</h2>
// // // // // //             <div style={s.operationTypeGrid}>
// // // // // //               {operationTypes.map((type) => (
// // // // // //                 <button
// // // // // //                   key={type.id}
// // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // //                   style={s.operationTypeCard}
// // // // // //                   onMouseOver={(e) => {
// // // // // //                     e.currentTarget.style.borderColor = '#4285f4';
// // // // // //                     e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // // //                   }}
// // // // // //                   onMouseOut={(e) => {
// // // // // //                     e.currentTarget.style.borderColor = '#e5e7eb';
// // // // // //                     e.currentTarget.style.backgroundColor = 'white';
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <div style={s.operationTypeTitle}>{type.label}</div>
// // // // // //                   <div style={s.operationTypeDescription}>{type.description}</div>
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* ── EXPANDED STATE — 3-column ── */}
// // // // // //         {step === 'input' && (
// // // // // //           <div style={s.threeColLayout}>

// // // // // //             {/* ▸ LEFT — category buttons */}
// // // // // //             <div style={s.leftPanel}>
// // // // // //               <div style={s.leftPanelTitle}>Category</div>
// // // // // //               {operationTypes.map((type) => (
// // // // // //                 <button
// // // // // //                   key={type.id}
// // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // //                   style={catBtnStyle(type.id)}
// // // // // //                   onMouseOver={(e) => {
// // // // // //                     if (operationType !== type.id) {
// // // // // //                       e.currentTarget.style.borderColor = '#4285f4';
// // // // // //                       e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // // //                     }
// // // // // //                   }}
// // // // // //                   onMouseOut={(e) => {
// // // // // //                     if (operationType !== type.id) {
// // // // // //                       e.currentTarget.style.borderColor = '#e5e7eb';
// // // // // //                       e.currentTarget.style.backgroundColor = 'white';
// // // // // //                     }
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <div style={catLabelStyle(type.id)}>{type.label}</div>
// // // // // //                   <div style={catDescStyle}>{type.description}</div>
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* ▸ MIDDLE — calculator */}
// // // // // //             <div>
// // // // // //               <div style={s.inputHeader}>
// // // // // //                 <h2 style={s.inputTitle}>Matrix Input ({dimensions.rows}×{dimensions.cols})</h2>
// // // // // //                 <div style={s.buttonGroup}>
// // // // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Dimensions */}
// // // // // //               <div style={s.dimControls}>
// // // // // //                 <div style={s.dimGroup}>
// // // // // //                   <label style={s.dimLabel}>Rows:</label>
// // // // // //                   <input
// // // // // //                     type="number" min="1" max="10"
// // // // // //                     value={dimensions.rows}
// // // // // //                     onChange={(e) => handleDimensionsChange('rows', e.target.value)}
// // // // // //                     style={dimInputStyle(dimensions.rows)}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <div style={s.dimGroup}>
// // // // // //                   <label style={s.dimLabel}>Cols:</label>
// // // // // //                   <input
// // // // // //                     type="number" min="1" max="10"
// // // // // //                     value={dimensions.cols}
// // // // // //                     onChange={(e) => handleDimensionsChange('cols', e.target.value)}
// // // // // //                     style={dimInputStyle(dimensions.cols)}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <span style={s.dimHint}>
// // // // // //                   {dimensions.rows}×{dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
// // // // // //                 </span>
// // // // // //                 {operationType === 'single' && dimensions.rows !== dimensions.cols && (
// // // // // //                   <span style={s.dimWarning}>Some operations require square matrices</span>
// // // // // //                 )}
// // // // // //               </div>

// // // // // //               {/* Errors */}
// // // // // //               {errors.length > 0 && (
// // // // // //                 <div style={s.errorSection}>
// // // // // //                   <div style={s.errorTitle}>Please fix the following:</div>
// // // // // //                   <ul style={s.errorList}>
// // // // // //                     {errors.map((err, i) => (
// // // // // //                       <li key={i} style={s.errorItem}>&bull; {err}</li>
// // // // // //                     ))}
// // // // // //                   </ul>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Matrices */}
// // // // // //               <div style={{ ...s.matrixGrid, ...getMatrixGridExtra() }}>
// // // // // //                 {matrices.map((m, i) => renderMatrix(m, i))}
// // // // // //               </div>

// // // // // //               {/* Add matrix (system) */}
// // // // // //               {operationType === 'system' && matrices.length < 5 && (
// // // // // //                 <div style={s.addMatrixContainer}>
// // // // // //                   <button onClick={addMatrix} style={s.addMatrixButton}>+ Add Matrix</button>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Scalar input */}
// // // // // //               {needsScalarInput() && (
// // // // // //                 <div style={s.scalarSection}>
// // // // // //                   <label style={s.scalarLabel}>Scalar value:</label>
// // // // // //                   <input
// // // // // //                     type="number" step="any"
// // // // // //                     value={scalarValue}
// // // // // //                     onChange={(e) => setScalarValue(e.target.value)}
// // // // // //                     placeholder="Enter value"
// // // // // //                     style={s.scalarInput}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Operations */}
// // // // // //               <div style={s.operationsSection}>
// // // // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // // // //                 <div style={s.operationsGrid}>
// // // // // //                   {getAvailableOperations().map((op) => {
// // // // // //                     const sel = selectedOperation === op;
// // // // // //                     const dis = isOpDisabled(op);
// // // // // //                     return (
// // // // // //                       <button
// // // // // //                         key={op}
// // // // // //                         onClick={() => handleOperationSelect(op)}
// // // // // //                         disabled={dis}
// // // // // //                         style={{
// // // // // //                           ...s.operationButton,
// // // // // //                           ...(sel ? s.operationButtonSelected : {}),
// // // // // //                           ...(dis ? s.operationButtonDisabled : {}),
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         {op}
// // // // // //                       </button>
// // // // // //                     );
// // // // // //                   })}
// // // // // //                 </div>

// // // // // //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// // // // // //                   <button
// // // // // //                     onClick={executeOperation}
// // // // // //                     disabled={!canExecute()}
// // // // // //                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
// // // // // //                   >
// // // // // //                     {isLoading ? (
// // // // // //                       <div style={s.loading}>
// // // // // //                         <div style={s.spinner} />
// // // // // //                         Calculating...
// // // // // //                       </div>
// // // // // //                     ) : (
// // // // // //                       'Execute Operation'
// // // // // //                     )}
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Result */}
// // // // // //               <div style={s.resultsSection}>
// // // // // //                 <h4 style={s.resultsTitle}>Result</h4>
// // // // // //                 <div style={s.resultsContent}>
// // // // // //                   {result || 'Select matrices and operation, then click Execute'}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* ▸ RIGHT — explanation */}
// // // // // //             <div style={s.explanationPanel}>
// // // // // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // // // // //               <p style={s.explanationBody}>{getExplanation()}</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState } from 'react';

// // // // // /* ── placeholder explanations ─────────────────────────────────── */

// // // // // const categoryExplanations = {
// // // // //   single: {
// // // // //     _default: 'Single matrix operations work on one matrix at a time. Choose an operation to see a detailed explanation.',
// // // // //     Transpose: 'The transpose flips a matrix over its diagonal, turning rows into columns and vice versa: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62.',
// // // // //     Determinant: 'The determinant is a scalar value that encodes properties of a square matrix. It is zero if and only if the matrix is singular (non-invertible).',
// // // // //     Inverse: 'The inverse A\u207B\u00B9 satisfies AA\u207B\u00B9 = I. It exists only for square matrices with non-zero determinant.',
// // // // //     Trace: 'The trace is the sum of the diagonal elements: tr(A) = \u03A3 a\u1D62\u1D62. Defined only for square matrices.',
// // // // //     Rank: 'The rank is the number of linearly independent rows (or columns). Found via row reduction to echelon form.',
// // // // //     Eigenvalues: 'Eigenvalues \u03BB satisfy det(A \u2212 \u03BBI) = 0. They reveal scaling factors along principal directions.',
// // // // //     Eigenvectors: 'Eigenvectors v satisfy Av = \u03BBv. Each eigenvalue has at least one associated eigenvector.',
// // // // //     'Characteristic Polynomial': 'The characteristic polynomial is det(A \u2212 \u03BBI), whose roots are the eigenvalues.',
// // // // //     'LU Decomposition': 'LU decomposition factors A = LU where L is lower triangular and U is upper triangular.',
// // // // //     'QR Decomposition': 'QR decomposition factors A = QR where Q is orthogonal and R is upper triangular.',
// // // // //     'Singular Value Decomposition': 'SVD factors A = U\u03A3V\u1D40 into orthogonal matrices U, V and diagonal \u03A3 of singular values.',
// // // // //   },
// // // // //   two: {
// // // // //     _default: 'Two-matrix operations take a pair of matrices and produce a new matrix or scalar. Choose an operation to learn more.',
// // // // //     Addition: 'Matrix addition sums corresponding elements. Both matrices must have identical dimensions.',
// // // // //     Subtraction: 'Matrix subtraction finds the difference of corresponding elements. Both matrices must have identical dimensions.',
// // // // //     Multiplication: 'Matrix multiplication AB requires columns of A to equal rows of B. Result is m\u00D7p for m\u00D7n and n\u00D7p matrices.',
// // // // //     'Element-wise Multiplication': 'Hadamard product multiplies corresponding elements. Both matrices must have identical dimensions.',
// // // // //     'Kronecker Product': 'The Kronecker product A\u2297B creates a block matrix by multiplying every element of A by the entire matrix B.',
// // // // //     'Matrix Power': 'Raises a square matrix to an integer power by repeated multiplication: A\u207F = A\u00B7A\u00B7\u2026\u00B7A.',
// // // // //     Commutator: 'The commutator [A,B] = AB \u2212 BA measures how much multiplication order matters. Zero for commuting matrices.',
// // // // //     'Anti-commutator': 'The anti-commutator {A,B} = AB + BA. Used extensively in quantum mechanics.',
// // // // //   },
// // // // //   scalar: {
// // // // //     _default: 'Scalar operations combine a matrix with a single number. Choose an operation to see details.',
// // // // //     'Scalar Multiplication': 'Multiplies every element of the matrix by the scalar: (cA)\u1D62\u2C7C = c \u00B7 a\u1D62\u2C7C.',
// // // // //     'Scalar Addition': 'Adds the scalar to every element of the matrix: (A + c)\u1D62\u2C7C = a\u1D62\u2C7C + c.',
// // // // //     'Scalar Subtraction': 'Subtracts the scalar from every element: (A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 c.',
// // // // //     'Matrix Power (Scalar)': 'Raises a square matrix to a scalar integer power by repeated multiplication.',
// // // // //     Exponential: 'The matrix exponential e\u1D2C is defined via the Taylor series: \u03A3 A\u207F/n! for n = 0, 1, 2, \u2026',
// // // // //     Logarithm: 'The matrix logarithm is the inverse of the matrix exponential. Requires certain conditions on the matrix.',
// // // // //   },
// // // // //   system: {
// // // // //     _default: 'System operations solve or analyse systems of linear equations Ax = b. Choose an operation to see details.',
// // // // //     'Solve Linear System': 'Finds the vector x satisfying Ax = b using the most appropriate method for the given system.',
// // // // //     'Gaussian Elimination': 'Reduces the augmented matrix [A|b] to row echelon form using elementary row operations.',
// // // // //     'Gauss-Jordan': 'Extends Gaussian elimination to reduced row echelon form (RREF), directly yielding the solution.',
// // // // //     'Cramer\'s Rule': 'Solves a system with a unique solution by computing ratios of determinants. Requires square, non-singular A.',
// // // // //     'Matrix Equation AX=B': 'Solves AX = B for X by computing X = A\u207B\u00B9B. Requires A to be square and invertible.',
// // // // //     'Least Squares Solution': 'Finds x that minimizes ||Ax \u2212 b||\u00B2. Works even for overdetermined (non-square) systems.',
// // // // //   },
// // // // // };

// // // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // // const s = {
// // // // //   container: {
// // // // //     minHeight: '100vh',
// // // // //     backgroundColor: '#f8f9fa',
// // // // //     padding: '20px',
// // // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // //   },
// // // // //   mainNarrow: {
// // // // //     maxWidth: '800px',
// // // // //     margin: '0 auto',
// // // // //     backgroundColor: 'white',
// // // // //     borderRadius: '16px',
// // // // //     padding: '32px',
// // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // //     transition: 'max-width 0.4s ease',
// // // // //   },
// // // // //   mainWide: {
// // // // //     maxWidth: 'calc(100vw - 400px)',
// // // // //     margin: '0 auto',
// // // // //     backgroundColor: 'white',
// // // // //     borderRadius: '16px',
// // // // //     padding: '32px',
// // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // //     transition: 'max-width 0.4s ease',
// // // // //   },
// // // // //   header: {
// // // // //     textAlign: 'center',
// // // // //     marginBottom: '32px',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: '2.5rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1a1a1a',
// // // // //     margin: '0 0 8px 0',
// // // // //   },
// // // // //   subtitle: {
// // // // //     color: '#6b7280',
// // // // //     fontSize: '1.1rem',
// // // // //     margin: '0',
// // // // //   },
// // // // //   stepTitle: {
// // // // //     fontSize: '1.5rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1f2937',
// // // // //     marginBottom: '24px',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   operationTypeGrid: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: '1fr',
// // // // //     gap: '16px',
// // // // //   },
// // // // //   operationTypeCard: {
// // // // //     padding: '20px',
// // // // //     border: '2px solid #e5e7eb',
// // // // //     borderRadius: '12px',
// // // // //     backgroundColor: 'white',
// // // // //     cursor: 'pointer',
// // // // //     textAlign: 'left',
// // // // //     transition: 'all 0.2s ease',
// // // // //   },
// // // // //   operationTypeTitle: {
// // // // //     fontSize: '1.2rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1f2937',
// // // // //     marginBottom: '8px',
// // // // //   },
// // // // //   operationTypeDescription: {
// // // // //     fontSize: '1rem',
// // // // //     color: '#6b7280',
// // // // //   },

// // // // //   /* — 3-col layout — */
// // // // //   threeColLayout: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: '200px 2fr 1fr',
// // // // //     gap: '24px',
// // // // //     alignItems: 'start',
// // // // //   },
// // // // //   leftPanel: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     gap: '10px',
// // // // //     position: 'sticky',
// // // // //     top: '20px',
// // // // //   },
// // // // //   leftPanelTitle: {
// // // // //     fontSize: '0.95rem',
// // // // //     fontWeight: '700',
// // // // //     color: '#1f2937',
// // // // //     marginBottom: '4px',
// // // // //     textTransform: 'uppercase',
// // // // //     letterSpacing: '0.04em',
// // // // //   },
// // // // //   explanationPanel: {
// // // // //     backgroundColor: '#f0f4ff',
// // // // //     borderRadius: '12px',
// // // // //     padding: '24px',
// // // // //     border: '1px solid #d0d9f0',
// // // // //     position: 'sticky',
// // // // //     top: '20px',
// // // // //   },
// // // // //   explanationTitle: {
// // // // //     fontSize: '1.05rem',
// // // // //     fontWeight: '700',
// // // // //     color: '#1f2937',
// // // // //     margin: '0 0 12px 0',
// // // // //   },
// // // // //   explanationBody: {
// // // // //     fontSize: '0.95rem',
// // // // //     lineHeight: '1.6',
// // // // //     color: '#374151',
// // // // //     margin: 0,
// // // // //   },

// // // // //   /* — middle (calculator) — */
// // // // //   inputHeader: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   inputTitle: {
// // // // //     fontSize: '1.35rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1f2937',
// // // // //     margin: '0',
// // // // //   },
// // // // //   buttonGroup: { display: 'flex', gap: '12px' },

// // // // //   /* — dimension controls — */
// // // // //   dimControls: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     gap: '24px',
// // // // //     marginBottom: '24px',
// // // // //     padding: '14px',
// // // // //     backgroundColor: '#f0f7ff',
// // // // //     borderRadius: '8px',
// // // // //     border: '1px solid #e0e7ff',
// // // // //     flexWrap: 'wrap',
// // // // //   },
// // // // //   dimGroup: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '8px',
// // // // //   },
// // // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },
// // // // //   dimWarning: { fontSize: '0.85rem', color: '#dc2626', fontWeight: '500' },

// // // // //   /* — matrix grid — */
// // // // //   matrixGrid: {
// // // // //     display: 'grid',
// // // // //     gap: '24px',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   matrixGridSingle: { gridTemplateColumns: '1fr' },
// // // // //   matrixGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' },
// // // // //   matrixGridMultiple: { gridTemplateColumns: '1fr' },
// // // // //   matrixCard: {
// // // // //     backgroundColor: '#f8f9fa',
// // // // //     padding: '20px',
// // // // //     borderRadius: '12px',
// // // // //     border: '1px solid #e5e7eb',
// // // // //   },
// // // // //   matrixHeader: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: '16px',
// // // // //   },
// // // // //   matrixName: {
// // // // //     margin: '0',
// // // // //     fontSize: '1.1rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#374151',
// // // // //   },
// // // // //   matrixHeaderRight: {
// // // // //     display: 'flex',
// // // // //     gap: '8px',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   matrixDimLabel: {
// // // // //     fontSize: '0.85rem',
// // // // //     color: '#6b7280',
// // // // //     fontWeight: '500',
// // // // //   },
// // // // //   matrixContainer: {
// // // // //     display: 'flex',
// // // // //     flexDirection: 'column',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   matrixContent: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '8px',
// // // // //   },
// // // // //   matrixBracket: {
// // // // //     fontSize: '2rem',
// // // // //     fontWeight: 'bold',
// // // // //     color: '#374151',
// // // // //     lineHeight: '1',
// // // // //   },
// // // // //   matrixTable: {
// // // // //     display: 'grid',
// // // // //     gap: '4px',
// // // // //     padding: '8px',
// // // // //   },
// // // // //   matrixCell: {
// // // // //     width: '50px',
// // // // //     height: '35px',
// // // // //     padding: '4px',
// // // // //     border: '1px solid #d1d5db',
// // // // //     borderRadius: '4px',
// // // // //     textAlign: 'center',
// // // // //     fontSize: '0.85rem',
// // // // //     backgroundColor: 'white',
// // // // //     outline: 'none',
// // // // //   },
// // // // //   matrixCellError: {
// // // // //     borderColor: '#dc2626',
// // // // //     backgroundColor: '#fef2f2',
// // // // //   },

// // // // //   /* — operations — */
// // // // //   operationsSection: { marginBottom: '24px' },
// // // // //   operationsTitle: {
// // // // //     fontSize: '1.1rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1f2937',
// // // // //     marginBottom: '16px',
// // // // //   },
// // // // //   operationsGrid: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
// // // // //     gap: '8px',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   operationButton: {
// // // // //     padding: '10px 12px',
// // // // //     border: '2px solid #e5e7eb',
// // // // //     borderRadius: '8px',
// // // // //     backgroundColor: 'white',
// // // // //     color: '#374151',
// // // // //     fontSize: '0.85rem',
// // // // //     fontWeight: '500',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'all 0.2s ease',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   operationButtonSelected: {
// // // // //     borderColor: '#4285f4',
// // // // //     backgroundColor: '#f0f7ff',
// // // // //     color: '#4285f4',
// // // // //   },
// // // // //   operationButtonDisabled: {
// // // // //     backgroundColor: '#f3f4f6',
// // // // //     color: '#9ca3af',
// // // // //     cursor: 'not-allowed',
// // // // //     borderColor: '#e5e7eb',
// // // // //   },

// // // // //   /* — scalar input — */
// // // // //   scalarSection: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     gap: '12px',
// // // // //     marginBottom: '16px',
// // // // //     padding: '12px',
// // // // //     backgroundColor: '#f0f7ff',
// // // // //     borderRadius: '8px',
// // // // //     border: '1px solid #e0e7ff',
// // // // //   },
// // // // //   scalarLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // //   scalarInput: {
// // // // //     width: '80px',
// // // // //     padding: '8px 12px',
// // // // //     border: '1px solid #d1d5db',
// // // // //     borderRadius: '6px',
// // // // //     textAlign: 'center',
// // // // //     fontSize: '1rem',
// // // // //     outline: 'none',
// // // // //   },

// // // // //   /* — execute — */
// // // // //   executeButton: {
// // // // //     padding: '12px 32px',
// // // // //     border: 'none',
// // // // //     borderRadius: '8px',
// // // // //     backgroundColor: '#4285f4',
// // // // //     color: 'white',
// // // // //     fontSize: '1rem',
// // // // //     fontWeight: '500',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'all 0.2s ease',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   executeButtonDisabled: {
// // // // //     backgroundColor: '#9ca3af',
// // // // //     cursor: 'not-allowed',
// // // // //   },

// // // // //   /* — results — */
// // // // //   resultsSection: {
// // // // //     backgroundColor: '#f9fafb',
// // // // //     padding: '16px',
// // // // //     borderRadius: '8px',
// // // // //     border: '1px solid #e5e7eb',
// // // // //   },
// // // // //   resultsTitle: {
// // // // //     margin: '0 0 12px 0',
// // // // //     fontSize: '1.05rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1f2937',
// // // // //   },
// // // // //   resultsContent: {
// // // // //     minHeight: '60px',
// // // // //     backgroundColor: 'white',
// // // // //     padding: '12px',
// // // // //     borderRadius: '6px',
// // // // //     border: '1px solid #d1d5db',
// // // // //     fontSize: '1rem',
// // // // //     color: '#374151',
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     flexDirection: 'column',
// // // // //     gap: '8px',
// // // // //   },

// // // // //   /* — errors — */
// // // // //   errorSection: {
// // // // //     backgroundColor: '#fef2f2',
// // // // //     border: '1px solid #fecaca',
// // // // //     borderRadius: '8px',
// // // // //     padding: '16px',
// // // // //     marginBottom: '16px',
// // // // //   },
// // // // //   errorTitle: {
// // // // //     color: '#dc2626',
// // // // //     fontWeight: '600',
// // // // //     fontSize: '1rem',
// // // // //     margin: '0 0 8px 0',
// // // // //   },
// // // // //   errorList: { listStyle: 'none', padding: '0', margin: '0' },
// // // // //   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

// // // // //   /* — buttons — */
// // // // //   buttonDanger: {
// // // // //     padding: '8px 16px',
// // // // //     borderRadius: '6px',
// // // // //     fontSize: '0.9rem',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'all 0.2s ease',
// // // // //     border: '2px solid #dc2626',
// // // // //     backgroundColor: 'transparent',
// // // // //     color: '#dc2626',
// // // // //   },
// // // // //   clearMatrixButton: {
// // // // //     padding: '3px 8px',
// // // // //     border: '1px solid #9ca3af',
// // // // //     borderRadius: '4px',
// // // // //     backgroundColor: 'transparent',
// // // // //     color: '#6b7280',
// // // // //     fontSize: '0.75rem',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'all 0.15s ease',
// // // // //   },
// // // // //   removeButton: {
// // // // //     padding: '3px 8px',
// // // // //     border: 'none',
// // // // //     borderRadius: '4px',
// // // // //     backgroundColor: '#dc2626',
// // // // //     color: 'white',
// // // // //     fontSize: '0.75rem',
// // // // //     cursor: 'pointer',
// // // // //   },
// // // // //   addMatrixContainer: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   addMatrixButton: {
// // // // //     padding: '8px 16px',
// // // // //     border: '2px dashed #4285f4',
// // // // //     borderRadius: '8px',
// // // // //     backgroundColor: 'transparent',
// // // // //     color: '#4285f4',
// // // // //     fontSize: '0.9rem',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'all 0.2s ease',
// // // // //   },

// // // // //   /* — loading — */
// // // // //   loading: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //     gap: '8px',
// // // // //   },
// // // // //   spinner: {
// // // // //     width: '16px',
// // // // //     height: '16px',
// // // // //     border: '2px solid #e5e7eb',
// // // // //     borderTop: '2px solid #4285f4',
// // // // //     borderRadius: '50%',
// // // // //     animation: 'spin 1s linear infinite',
// // // // //   },

// // // // //   /* — matrix accordion (two matrices, cols > 5) — */
// // // // //   matrixAccordion: {
// // // // //     border: '1px solid #e5e7eb',
// // // // //     borderRadius: '12px',
// // // // //     overflow: 'hidden',
// // // // //     marginBottom: '0',
// // // // //   },
// // // // //   matrixAccordionToggle: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     width: '100%',
// // // // //     padding: '14px 20px',
// // // // //     border: 'none',
// // // // //     backgroundColor: '#f8f9fa',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'background-color 0.15s ease',
// // // // //   },
// // // // //   matrixAccordionLeft: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '12px',
// // // // //   },
// // // // //   matrixAccordionName: {
// // // // //     fontSize: '1.1rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#374151',
// // // // //     margin: 0,
// // // // //   },
// // // // //   matrixAccordionDim: {
// // // // //     fontSize: '0.85rem',
// // // // //     color: '#6b7280',
// // // // //     fontWeight: '500',
// // // // //   },
// // // // //   matrixAccordionArrow: {
// // // // //     fontSize: '0.75rem',
// // // // //     color: '#6b7280',
// // // // //     transition: 'transform 0.2s ease',
// // // // //   },
// // // // //   matrixAccordionBody: {
// // // // //     padding: '0 20px 20px 20px',
// // // // //     backgroundColor: '#f8f9fa',
// // // // //   },
// // // // // };

// // // // // const spinKeyframes = `
// // // // // @keyframes spin {
// // // // //   0% { transform: rotate(0deg); }
// // // // //   100% { transform: rotate(360deg); }
// // // // // }`;

// // // // // /* ── component ────────────────────────────────────────────────── */

// // // // // export default function MatrixCalculator() {
// // // // //   const [step, setStep] = useState('operation-type');
// // // // //   const [operationType, setOperationType] = useState('');
// // // // //   const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
// // // // //   const [matrices, setMatrices] = useState([]);
// // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // //   const [scalarValue, setScalarValue] = useState('');
// // // // //   const [result, setResult] = useState(null);
// // // // //   const [errors, setErrors] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [matrixAccordionOpen, setMatrixAccordionOpen] = useState({});

// // // // //   const toggleMatrixAccordion = (mi) => {
// // // // //     setMatrixAccordionOpen(prev => ({ ...prev, [mi]: !prev[mi] }));
// // // // //   };

// // // // //   const needsAccordion = () => operationType === 'two' && dimensions.cols > 5;

// // // // //   const operationTypes = [
// // // // //     { id: 'single', label: 'Single Matrix', description: 'Determinant, transpose, inverse, eigenvalues' },
// // // // //     { id: 'two', label: 'Two Matrices', description: 'Addition, subtraction, multiplication' },
// // // // //     { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, addition' },
// // // // //     { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' },
// // // // //   ];

// // // // //   const operationsByType = {
// // // // //     single: [
// // // // //       'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank',
// // // // //       'Eigenvalues', 'Eigenvectors', 'Characteristic Polynomial',
// // // // //       'LU Decomposition', 'QR Decomposition', 'Singular Value Decomposition',
// // // // //     ],
// // // // //     two: [
// // // // //       'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
// // // // //       'Kronecker Product', 'Matrix Power', 'Commutator', 'Anti-commutator',
// // // // //     ],
// // // // //     scalar: [
// // // // //       'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
// // // // //       'Matrix Power (Scalar)', 'Exponential', 'Logarithm',
// // // // //     ],
// // // // //     system: [
// // // // //       'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
// // // // //       "Cramer's Rule", 'Matrix Equation AX=B', 'Least Squares Solution',
// // // // //     ],
// // // // //   };

// // // // //   const squareOnly = ['Determinant', 'Inverse', 'Trace', 'Eigenvalues', 'Eigenvectors',
// // // // //     'Characteristic Polynomial', 'LU Decomposition'];

// // // // //   /* ── validation ── */

// // // // //   const validateInputs = () => {
// // // // //     const newErrors = [];
// // // // //     if (!selectedOperation) newErrors.push('Please select an operation');

// // // // //     matrices.forEach((matrix, index) => {
// // // // //       const name = String.fromCharCode(65 + index);
// // // // //       const total = matrix.rows * matrix.cols;
// // // // //       const empty = matrix.data.filter(c => c === '' || c === null || c === undefined).length;
// // // // //       const valid = matrix.data.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // // //       if (empty > 0) newErrors.push(`Matrix ${name} has empty cells`);
// // // // //       if (valid !== total) newErrors.push(`Matrix ${name} contains invalid numbers`);
// // // // //     });

// // // // //     if (operationType === 'two' && matrices.length === 2) {
// // // // //       const [a, b] = matrices;
// // // // //       if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
// // // // //         if (a.rows !== b.rows || a.cols !== b.cols)
// // // // //           newErrors.push('Matrices must have the same dimensions for this operation');
// // // // //       }
// // // // //       if (selectedOperation === 'Multiplication') {
// // // // //         if (a.cols !== b.rows)
// // // // //           newErrors.push('For multiplication, columns of A must equal rows of B');
// // // // //       }
// // // // //     }

// // // // //     if (operationType === 'single' && squareOnly.includes(selectedOperation)) {
// // // // //       const m = matrices[0];
// // // // //       if (m && m.rows !== m.cols) newErrors.push('This operation requires a square matrix');
// // // // //     }

// // // // //     if (operationType === 'scalar') {
// // // // //       if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(parseFloat(scalarValue)))
// // // // //         newErrors.push('Please enter a valid scalar value');
// // // // //     }

// // // // //     setErrors(newErrors);
// // // // //     return newErrors.length === 0;
// // // // //   };

// // // // //   /* ── handlers ── */

// // // // //   const handleReset = () => {
// // // // //     setStep('operation-type');
// // // // //     setOperationType('');
// // // // //     setDimensions({ rows: 3, cols: 3 });
// // // // //     setMatrices([]);
// // // // //     setSelectedOperation('');
// // // // //     setScalarValue('');
// // // // //     setResult(null);
// // // // //     setErrors([]);
// // // // //     setIsLoading(false);
// // // // //   };

// // // // //   const clearMatrix = (mi) => {
// // // // //     const updated = [...matrices];
// // // // //     updated[mi] = { ...updated[mi], data: new Array(updated[mi].rows * updated[mi].cols).fill('') };
// // // // //     setMatrices(updated);
// // // // //   };

// // // // //   const handleOperationTypeSelect = (type) => {
// // // // //     setOperationType(type);
// // // // //     setSelectedOperation('');
// // // // //     setErrors([]);
// // // // //     setResult(null);
// // // // //     setMatrixAccordionOpen({ 0: true, 1: true });

// // // // //     let count = 1;
// // // // //     if (type === 'two') count = 2;
// // // // //     if (type === 'system') count = 2;

// // // // //     const initialMatrices = Array(count).fill(null).map((_, i) => ({
// // // // //       id: i,
// // // // //       rows: dimensions.rows,
// // // // //       cols: type === 'system' && i === count - 1 ? 1 : dimensions.cols,
// // // // //       data: new Array(dimensions.rows * (type === 'system' && i === count - 1 ? 1 : dimensions.cols)).fill(''),
// // // // //     }));
// // // // //     setMatrices(initialMatrices);
// // // // //     setStep('input');
// // // // //   };

// // // // //   const handleDimensionsChange = (dim, value) => {
// // // // //     if (value === '') {
// // // // //       setDimensions(prev => ({ ...prev, [dim]: '' }));
// // // // //       return;
// // // // //     }
// // // // //     const val = parseInt(value);
// // // // //     const newDims = { ...dimensions, [dim]: val };
// // // // //     setDimensions(newDims);

// // // // //     if (newDims.rows >= 1 && newDims.rows <= 10 && newDims.cols >= 1 && newDims.cols <= 10) {
// // // // //       const updated = matrices.map((matrix, i) => {
// // // // //         const nr = newDims.rows;
// // // // //         const nc = operationType === 'system' && i === matrices.length - 1 ? 1 : newDims.cols;
// // // // //         const newData = new Array(nr * nc).fill('');
// // // // //         for (let r = 0; r < Math.min(matrix.rows, nr); r++) {
// // // // //           for (let c = 0; c < Math.min(matrix.cols, nc); c++) {
// // // // //             const oi = r * matrix.cols + c;
// // // // //             const ni = r * nc + c;
// // // // //             if (oi < matrix.data.length) newData[ni] = matrix.data[oi];
// // // // //           }
// // // // //         }
// // // // //         return { ...matrix, rows: nr, cols: nc, data: newData };
// // // // //       });
// // // // //       setMatrices(updated);
// // // // //       setErrors([]);
// // // // //     } else {
// // // // //       const errs = [];
// // // // //       if (newDims.rows < 1 || newDims.rows > 10) errs.push('Rows must be between 1 and 10');
// // // // //       if (newDims.cols < 1 || newDims.cols > 10) errs.push('Columns must be between 1 and 10');
// // // // //       setErrors(errs);
// // // // //     }
// // // // //   };

// // // // //   const updateMatrixCell = (mi, ci, value) => {
// // // // //     const updated = [...matrices];
// // // // //     updated[mi] = { ...updated[mi], data: [...updated[mi].data] };
// // // // //     updated[mi].data[ci] = value;
// // // // //     setMatrices(updated);
// // // // //     if (errors.length > 0) setErrors([]);
// // // // //   };

// // // // //   const addMatrix = () => {
// // // // //     if (operationType === 'system' && matrices.length < 5) {
// // // // //       setMatrices([...matrices, {
// // // // //         id: matrices.length,
// // // // //         rows: dimensions.rows,
// // // // //         cols: dimensions.cols,
// // // // //         data: new Array(dimensions.rows * dimensions.cols).fill(''),
// // // // //       }]);
// // // // //     }
// // // // //   };

// // // // //   const removeMatrix = (mi) => {
// // // // //     if (operationType === 'system' && matrices.length > 2)
// // // // //       setMatrices(matrices.filter((_, i) => i !== mi));
// // // // //   };

// // // // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // // // //   const handleOperationSelect = (op) => {
// // // // //     setSelectedOperation(op);
// // // // //     setErrors([]);
// // // // //     setResult(null);
// // // // //   };

// // // // //   const executeOperation = () => {
// // // // //     if (!validateInputs()) return;
// // // // //     setIsLoading(true);
// // // // //     setResult(null);
// // // // //     setTimeout(() => {
// // // // //       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
// // // // //       setIsLoading(false);
// // // // //     }, 150);
// // // // //   };

// // // // //   const canExecute = () => selectedOperation && matrices.length > 0 && !isLoading;

// // // // //   const needsScalarInput = () =>
// // // // //     operationType === 'scalar' || selectedOperation === 'Matrix Power (Scalar)';

// // // // //   const isSquareRequired = (op) => squareOnly.includes(op);

// // // // //   const isOpDisabled = (op) => {
// // // // //     if (!isSquareRequired(op)) return false;
// // // // //     const m = matrices[0];
// // // // //     return m && m.rows !== m.cols;
// // // // //   };

// // // // //   /* ── explanation helpers ── */
// // // // //   const getExplanation = () => {
// // // // //     const pool = categoryExplanations[operationType];
// // // // //     if (!pool) return '';
// // // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // // //     return pool._default;
// // // // //   };

// // // // //   const getExplanationHeading = () => {
// // // // //     if (selectedOperation) return selectedOperation;
// // // // //     const labels = {
// // // // //       single: 'Single Matrix Ops',
// // // // //       two: 'Two Matrix Ops',
// // // // //       scalar: 'Scalar Ops',
// // // // //       system: 'System Ops',
// // // // //     };
// // // // //     return labels[operationType] || 'Explanation';
// // // // //   };

// // // // //   /* ── left-panel button styles ── */
// // // // //   const catBtnStyle = (id) => ({
// // // // //     padding: '12px',
// // // // //     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// // // // //     borderRadius: '10px',
// // // // //     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
// // // // //     cursor: 'pointer',
// // // // //     textAlign: 'left',
// // // // //     transition: 'all 0.25s ease',
// // // // //     width: '100%',
// // // // //     boxSizing: 'border-box',
// // // // //   });
// // // // //   const catLabelStyle = (id) => ({
// // // // //     fontSize: '0.9rem',
// // // // //     fontWeight: '600',
// // // // //     color: operationType === id ? '#4285f4' : '#1f2937',
// // // // //     marginBottom: '4px',
// // // // //   });
// // // // //   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

// // // // //   const dimInputStyle = (val) => ({
// // // // //     width: '60px',
// // // // //     padding: '8px 12px',
// // // // //     border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // //     borderRadius: '8px',
// // // // //     fontSize: '1rem',
// // // // //     textAlign: 'center',
// // // // //     outline: 'none',
// // // // //   });

// // // // //   const getMatrixGridExtra = () => {
// // // // //     if (operationType === 'single') return s.matrixGridSingle;
// // // // //     if (operationType === 'two' || operationType === 'scalar') {
// // // // //       if (needsAccordion()) return s.matrixGridSingle;
// // // // //       return s.matrixGridTwo;
// // // // //     }
// // // // //     return s.matrixGridMultiple;
// // // // //   };

// // // // //   /* ── render a matrix card ── */
// // // // //   const renderMatrix = (matrix, mi, nested = false) => {
// // // // //     const gridStyle = {
// // // // //       gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
// // // // //       gridTemplateRows: `repeat(${matrix.rows}, 1fr)`,
// // // // //     };
// // // // //     const label = operationType === 'system' && mi === matrices.length - 1 && matrices.length > 1
// // // // //       ? ` (Vector)` : '';

// // // // //     return (
// // // // //       <div key={matrix.id} style={nested ? {} : s.matrixCard}>
// // // // //         {!nested && (
// // // // //           <div style={s.matrixHeader}>
// // // // //             <h4 style={s.matrixName}>Matrix {String.fromCharCode(65 + mi)}{label}</h4>
// // // // //             <div style={s.matrixHeaderRight}>
// // // // //               <span style={s.matrixDimLabel}>{matrix.rows} × {matrix.cols}</span>
// // // // //               <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// // // // //                 Clear
// // // // //               </button>
// // // // //               {operationType === 'system' && matrices.length > 2 && mi >= 2 && (
// // // // //                 <button onClick={() => removeMatrix(mi)} style={s.removeButton}>Remove</button>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //         {nested && (
// // // // //           <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
// // // // //             <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// // // // //               Clear
// // // // //             </button>
// // // // //           </div>
// // // // //         )}
// // // // //         <div style={s.matrixContainer}>
// // // // //           <div style={s.matrixContent}>
// // // // //             <span style={s.matrixBracket}>[</span>
// // // // //             <div style={{ ...s.matrixTable, ...gridStyle }}>
// // // // //               {matrix.data.map((cell, ci) => (
// // // // //                 <input
// // // // //                   key={ci}
// // // // //                   type="number"
// // // // //                   step="any"
// // // // //                   value={cell}
// // // // //                   onChange={(e) => updateMatrixCell(mi, ci, e.target.value)}
// // // // //                   placeholder="0"
// // // // //                   style={{
// // // // //                     ...s.matrixCell,
// // // // //                     ...(cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? s.matrixCellError : {}),
// // // // //                   }}
// // // // //                 />
// // // // //               ))}
// // // // //             </div>
// // // // //             <span style={s.matrixBracket}>]</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // // // //   return (
// // // // //     <div style={s.container}>
// // // // //       <style>{spinKeyframes}</style>
// // // // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // // // //         {/* Header */}
// // // // //         <div style={s.header}>
// // // // //           <h1 style={s.title}>Matrix Calculator</h1>
// // // // //           <p style={s.subtitle}>Professional matrix operations calculator</p>
// // // // //         </div>

// // // // //         {/* ── INITIAL STATE ── */}
// // // // //         {step === 'operation-type' && (
// // // // //           <div>
// // // // //             <h2 style={s.stepTitle}>Select Operation Type</h2>
// // // // //             <div style={s.operationTypeGrid}>
// // // // //               {operationTypes.map((type) => (
// // // // //                 <button
// // // // //                   key={type.id}
// // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // //                   style={s.operationTypeCard}
// // // // //                   onMouseOver={(e) => {
// // // // //                     e.currentTarget.style.borderColor = '#4285f4';
// // // // //                     e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // //                   }}
// // // // //                   onMouseOut={(e) => {
// // // // //                     e.currentTarget.style.borderColor = '#e5e7eb';
// // // // //                     e.currentTarget.style.backgroundColor = 'white';
// // // // //                   }}
// // // // //                 >
// // // // //                   <div style={s.operationTypeTitle}>{type.label}</div>
// // // // //                   <div style={s.operationTypeDescription}>{type.description}</div>
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* ── EXPANDED STATE — 3-column ── */}
// // // // //         {step === 'input' && (
// // // // //           <div style={s.threeColLayout}>

// // // // //             {/* ▸ LEFT — category buttons */}
// // // // //             <div style={s.leftPanel}>
// // // // //               <div style={s.leftPanelTitle}>Category</div>
// // // // //               {operationTypes.map((type) => (
// // // // //                 <button
// // // // //                   key={type.id}
// // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // //                   style={catBtnStyle(type.id)}
// // // // //                   onMouseOver={(e) => {
// // // // //                     if (operationType !== type.id) {
// // // // //                       e.currentTarget.style.borderColor = '#4285f4';
// // // // //                       e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // //                     }
// // // // //                   }}
// // // // //                   onMouseOut={(e) => {
// // // // //                     if (operationType !== type.id) {
// // // // //                       e.currentTarget.style.borderColor = '#e5e7eb';
// // // // //                       e.currentTarget.style.backgroundColor = 'white';
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   <div style={catLabelStyle(type.id)}>{type.label}</div>
// // // // //                   <div style={catDescStyle}>{type.description}</div>
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* ▸ MIDDLE — calculator */}
// // // // //             <div>
// // // // //               <div style={s.inputHeader}>
// // // // //                 <h2 style={s.inputTitle}>Matrix Input ({dimensions.rows}×{dimensions.cols})</h2>
// // // // //                 <div style={s.buttonGroup}>
// // // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Dimensions */}
// // // // //               <div style={s.dimControls}>
// // // // //                 <div style={s.dimGroup}>
// // // // //                   <label style={s.dimLabel}>Rows:</label>
// // // // //                   <input
// // // // //                     type="number" min="1" max="10"
// // // // //                     value={dimensions.rows}
// // // // //                     onChange={(e) => handleDimensionsChange('rows', e.target.value)}
// // // // //                     style={dimInputStyle(dimensions.rows)}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div style={s.dimGroup}>
// // // // //                   <label style={s.dimLabel}>Cols:</label>
// // // // //                   <input
// // // // //                     type="number" min="1" max="10"
// // // // //                     value={dimensions.cols}
// // // // //                     onChange={(e) => handleDimensionsChange('cols', e.target.value)}
// // // // //                     style={dimInputStyle(dimensions.cols)}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <span style={s.dimHint}>
// // // // //                   {dimensions.rows}×{dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
// // // // //                 </span>
// // // // //                 {operationType === 'single' && dimensions.rows !== dimensions.cols && (
// // // // //                   <span style={s.dimWarning}>Some operations require square matrices</span>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* Errors */}
// // // // //               {errors.length > 0 && (
// // // // //                 <div style={s.errorSection}>
// // // // //                   <div style={s.errorTitle}>Please fix the following:</div>
// // // // //                   <ul style={s.errorList}>
// // // // //                     {errors.map((err, i) => (
// // // // //                       <li key={i} style={s.errorItem}>&bull; {err}</li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Matrices */}
// // // // //               <div style={{ ...s.matrixGrid, ...getMatrixGridExtra() }}>
// // // // //                 {matrices.map((m, i) => {
// // // // //                   if (needsAccordion()) {
// // // // //                     const isOpen = matrixAccordionOpen[i] !== false;
// // // // //                     const label = operationType === 'system' && i === matrices.length - 1 && matrices.length > 1
// // // // //                       ? ' (Vector)' : '';
// // // // //                     return (
// // // // //                       <div key={m.id} style={s.matrixAccordion}>
// // // // //                         <button
// // // // //                           onClick={() => toggleMatrixAccordion(i)}
// // // // //                           style={s.matrixAccordionToggle}
// // // // //                         >
// // // // //                           <div style={s.matrixAccordionLeft}>
// // // // //                             <span style={s.matrixAccordionName}>Matrix {String.fromCharCode(65 + i)}{label}</span>
// // // // //                             <span style={s.matrixAccordionDim}>{m.rows} × {m.cols}</span>
// // // // //                           </div>
// // // // //                           <span style={{
// // // // //                             ...s.matrixAccordionArrow,
// // // // //                             transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// // // // //                           }}>
// // // // //                             ▼
// // // // //                           </span>
// // // // //                         </button>
// // // // //                         {isOpen && (
// // // // //                           <div style={s.matrixAccordionBody}>
// // // // //                             {renderMatrix(m, i, true)}
// // // // //                           </div>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     );
// // // // //                   }
// // // // //                   return renderMatrix(m, i);
// // // // //                 })}
// // // // //               </div>

// // // // //               {/* Add matrix (system) */}
// // // // //               {operationType === 'system' && matrices.length < 5 && (
// // // // //                 <div style={s.addMatrixContainer}>
// // // // //                   <button onClick={addMatrix} style={s.addMatrixButton}>+ Add Matrix</button>
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Scalar input */}
// // // // //               {needsScalarInput() && (
// // // // //                 <div style={s.scalarSection}>
// // // // //                   <label style={s.scalarLabel}>Scalar value:</label>
// // // // //                   <input
// // // // //                     type="number" step="any"
// // // // //                     value={scalarValue}
// // // // //                     onChange={(e) => setScalarValue(e.target.value)}
// // // // //                     placeholder="Enter value"
// // // // //                     style={s.scalarInput}
// // // // //                   />
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Operations */}
// // // // //               <div style={s.operationsSection}>
// // // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // // //                 <div style={s.operationsGrid}>
// // // // //                   {getAvailableOperations().map((op) => {
// // // // //                     const sel = selectedOperation === op;
// // // // //                     const dis = isOpDisabled(op);
// // // // //                     return (
// // // // //                       <button
// // // // //                         key={op}
// // // // //                         onClick={() => handleOperationSelect(op)}
// // // // //                         disabled={dis}
// // // // //                         style={{
// // // // //                           ...s.operationButton,
// // // // //                           ...(sel ? s.operationButtonSelected : {}),
// // // // //                           ...(dis ? s.operationButtonDisabled : {}),
// // // // //                         }}
// // // // //                       >
// // // // //                         {op}
// // // // //                       </button>
// // // // //                     );
// // // // //                   })}
// // // // //                 </div>

// // // // //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// // // // //                   <button
// // // // //                     onClick={executeOperation}
// // // // //                     disabled={!canExecute()}
// // // // //                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
// // // // //                   >
// // // // //                     {isLoading ? (
// // // // //                       <div style={s.loading}>
// // // // //                         <div style={s.spinner} />
// // // // //                         Calculating...
// // // // //                       </div>
// // // // //                     ) : (
// // // // //                       'Execute Operation'
// // // // //                     )}
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Result */}
// // // // //               <div style={s.resultsSection}>
// // // // //                 <h4 style={s.resultsTitle}>Result</h4>
// // // // //                 <div style={s.resultsContent}>
// // // // //                   {result || 'Select matrices and operation, then click Execute'}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* ▸ RIGHT — explanation */}
// // // // //             <div style={s.explanationPanel}>
// // // // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // // // //               <p style={s.explanationBody}>{getExplanation()}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useState } from 'react';
// // // // import computeMatrix from './computeMatrix';

// // // // /* ── placeholder explanations ─────────────────────────────────── */

// // // // const categoryExplanations = {
// // // //   single: {
// // // //     _default: 'Single matrix operations work on one matrix at a time. Choose an operation to see a detailed explanation.',
// // // //     Transpose: 'The transpose flips a matrix over its diagonal, turning rows into columns and vice versa: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62.',
// // // //     Determinant: 'The determinant is a scalar value that encodes properties of a square matrix. It is zero if and only if the matrix is singular (non-invertible).',
// // // //     Inverse: 'The inverse A\u207B\u00B9 satisfies AA\u207B\u00B9 = I. It exists only for square matrices with non-zero determinant.',
// // // //     Trace: 'The trace is the sum of the diagonal elements: tr(A) = \u03A3 a\u1D62\u1D62. Defined only for square matrices.',
// // // //     Rank: 'The rank is the number of linearly independent rows (or columns). Found via row reduction to echelon form.',
// // // //     'LU Decomposition': 'LU decomposition factors A = LU where L is lower triangular and U is upper triangular.',
// // // //   },
// // // //   two: {
// // // //     _default: 'Two-matrix operations take a pair of matrices and produce a new matrix or scalar. Choose an operation to learn more.',
// // // //     Addition: 'Matrix addition sums corresponding elements. Both matrices must have identical dimensions.',
// // // //     Subtraction: 'Matrix subtraction finds the difference of corresponding elements. Both matrices must have identical dimensions.',
// // // //     Multiplication: 'Matrix multiplication AB requires columns of A to equal rows of B. Result is m\u00D7p for m\u00D7n and n\u00D7p matrices.',
// // // //     'Element-wise Multiplication': 'Hadamard product multiplies corresponding elements. Both matrices must have identical dimensions.',
// // // //     'Kronecker Product': 'The Kronecker product A\u2297B creates a block matrix by multiplying every element of A by the entire matrix B.',
// // // //     Commutator: 'The commutator [A,B] = AB \u2212 BA measures how much multiplication order matters. Zero for commuting matrices.',
// // // //     'Anti-commutator': 'The anti-commutator {A,B} = AB + BA. Used extensively in quantum mechanics.',
// // // //   },
// // // //   scalar: {
// // // //     _default: 'Scalar operations combine a matrix with a single number. Choose an operation to see details.',
// // // //     'Scalar Multiplication': 'Multiplies every element of the matrix by the scalar: (cA)\u1D62\u2C7C = c \u00B7 a\u1D62\u2C7C.',
// // // //     'Scalar Addition': 'Adds the scalar to every element of the matrix: (A + c)\u1D62\u2C7C = a\u1D62\u2C7C + c.',
// // // //     'Scalar Subtraction': 'Subtracts the scalar from every element: (A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 c.',
// // // //     'Matrix Power (Scalar)': 'Raises a square matrix to a scalar integer power by repeated multiplication.',
// // // //   },
// // // //   system: {
// // // //     _default: 'System operations solve or analyse systems of linear equations Ax = b. Choose an operation to see details.',
// // // //     'Solve Linear System': 'Finds the vector x satisfying Ax = b using the most appropriate method for the given system.',
// // // //     'Gaussian Elimination': 'Reduces the augmented matrix [A|b] to row echelon form using elementary row operations.',
// // // //     'Gauss-Jordan': 'Extends Gaussian elimination to reduced row echelon form (RREF), directly yielding the solution.',
// // // //     'Cramer\'s Rule': 'Solves a system with a unique solution by computing ratios of determinants. Requires square, non-singular A.',
// // // //     'Matrix Equation AX=B': 'Solves AX = B for X by computing X = A\u207B\u00B9B. Requires A to be square and invertible.',
// // // //     'Least Squares Solution': 'Finds x that minimizes ||Ax \u2212 b||\u00B2. Works even for overdetermined (non-square) systems.',
// // // //   },
// // // // };

// // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // const s = {
// // // //   container: {
// // // //     minHeight: '100vh',
// // // //     backgroundColor: '#f8f9fa',
// // // //     padding: '20px',
// // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // //   },
// // // //   mainNarrow: {
// // // //     maxWidth: '800px',
// // // //     margin: '0 auto',
// // // //     backgroundColor: 'white',
// // // //     borderRadius: '16px',
// // // //     padding: '32px',
// // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // //     transition: 'max-width 0.4s ease',
// // // //   },
// // // //   mainWide: {
// // // //     maxWidth: 'calc(100vw - 400px)',
// // // //     margin: '0 auto',
// // // //     backgroundColor: 'white',
// // // //     borderRadius: '16px',
// // // //     padding: '32px',
// // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // //     transition: 'max-width 0.4s ease',
// // // //   },
// // // //   header: {
// // // //     textAlign: 'center',
// // // //     marginBottom: '32px',
// // // //   },
// // // //   title: {
// // // //     fontSize: '2.5rem',
// // // //     fontWeight: '600',
// // // //     color: '#1a1a1a',
// // // //     margin: '0 0 8px 0',
// // // //   },
// // // //   subtitle: {
// // // //     color: '#6b7280',
// // // //     fontSize: '1.1rem',
// // // //     margin: '0',
// // // //   },
// // // //   stepTitle: {
// // // //     fontSize: '1.5rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //     marginBottom: '24px',
// // // //     textAlign: 'center',
// // // //   },
// // // //   operationTypeGrid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: '1fr',
// // // //     gap: '16px',
// // // //   },
// // // //   operationTypeCard: {
// // // //     padding: '20px',
// // // //     border: '2px solid #e5e7eb',
// // // //     borderRadius: '12px',
// // // //     backgroundColor: 'white',
// // // //     cursor: 'pointer',
// // // //     textAlign: 'left',
// // // //     transition: 'all 0.2s ease',
// // // //   },
// // // //   operationTypeTitle: {
// // // //     fontSize: '1.2rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //     marginBottom: '8px',
// // // //   },
// // // //   operationTypeDescription: {
// // // //     fontSize: '1rem',
// // // //     color: '#6b7280',
// // // //   },

// // // //   /* — 3-col layout — */
// // // //   threeColLayout: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: '200px 2fr 1fr',
// // // //     gap: '24px',
// // // //     alignItems: 'start',
// // // //   },
// // // //   leftPanel: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '10px',
// // // //     position: 'sticky',
// // // //     top: '20px',
// // // //   },
// // // //   leftPanelTitle: {
// // // //     fontSize: '0.95rem',
// // // //     fontWeight: '700',
// // // //     color: '#1f2937',
// // // //     marginBottom: '4px',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '0.04em',
// // // //   },
// // // //   explanationPanel: {
// // // //     backgroundColor: '#f0f4ff',
// // // //     borderRadius: '12px',
// // // //     padding: '24px',
// // // //     border: '1px solid #d0d9f0',
// // // //     position: 'sticky',
// // // //     top: '20px',
// // // //   },
// // // //   explanationTitle: {
// // // //     fontSize: '1.05rem',
// // // //     fontWeight: '700',
// // // //     color: '#1f2937',
// // // //     margin: '0 0 12px 0',
// // // //   },
// // // //   explanationBody: {
// // // //     fontSize: '0.95rem',
// // // //     lineHeight: '1.6',
// // // //     color: '#374151',
// // // //     margin: 0,
// // // //   },

// // // //   /* — middle (calculator) — */
// // // //   inputHeader: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   inputTitle: {
// // // //     fontSize: '1.35rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //     margin: '0',
// // // //   },
// // // //   buttonGroup: { display: 'flex', gap: '12px' },

// // // //   /* — dimension controls — */
// // // //   dimControls: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     gap: '24px',
// // // //     marginBottom: '24px',
// // // //     padding: '14px',
// // // //     backgroundColor: '#f0f7ff',
// // // //     borderRadius: '8px',
// // // //     border: '1px solid #e0e7ff',
// // // //     flexWrap: 'wrap',
// // // //   },
// // // //   dimGroup: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '8px',
// // // //   },
// // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },
// // // //   dimWarning: { fontSize: '0.85rem', color: '#dc2626', fontWeight: '500' },

// // // //   /* — matrix grid — */
// // // //   matrixGrid: {
// // // //     display: 'grid',
// // // //     gap: '24px',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   matrixGridSingle: { gridTemplateColumns: '1fr' },
// // // //   matrixGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' },
// // // //   matrixGridMultiple: { gridTemplateColumns: '1fr' },
// // // //   matrixCard: {
// // // //     backgroundColor: '#f8f9fa',
// // // //     padding: '20px',
// // // //     borderRadius: '12px',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   matrixHeader: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: '16px',
// // // //   },
// // // //   matrixName: {
// // // //     margin: '0',
// // // //     fontSize: '1.1rem',
// // // //     fontWeight: '600',
// // // //     color: '#374151',
// // // //   },
// // // //   matrixHeaderRight: {
// // // //     display: 'flex',
// // // //     gap: '8px',
// // // //     alignItems: 'center',
// // // //   },
// // // //   matrixDimLabel: {
// // // //     fontSize: '0.85rem',
// // // //     color: '#6b7280',
// // // //     fontWeight: '500',
// // // //   },
// // // //   matrixContainer: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'center',
// // // //   },
// // // //   matrixContent: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '8px',
// // // //   },
// // // //   matrixBracket: {
// // // //     fontSize: '2rem',
// // // //     fontWeight: 'bold',
// // // //     color: '#374151',
// // // //     lineHeight: '1',
// // // //   },
// // // //   matrixTable: {
// // // //     display: 'grid',
// // // //     gap: '4px',
// // // //     padding: '8px',
// // // //   },
// // // //   matrixCell: {
// // // //     width: '50px',
// // // //     height: '35px',
// // // //     padding: '4px',
// // // //     border: '1px solid #d1d5db',
// // // //     borderRadius: '4px',
// // // //     textAlign: 'center',
// // // //     fontSize: '0.85rem',
// // // //     backgroundColor: 'white',
// // // //     outline: 'none',
// // // //   },
// // // //   matrixCellError: {
// // // //     borderColor: '#dc2626',
// // // //     backgroundColor: '#fef2f2',
// // // //   },

// // // //   /* — operations — */
// // // //   operationsSection: { marginBottom: '24px' },
// // // //   operationsTitle: {
// // // //     fontSize: '1.1rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //     marginBottom: '16px',
// // // //   },
// // // //   operationsGrid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
// // // //     gap: '8px',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   operationButton: {
// // // //     padding: '10px 12px',
// // // //     border: '2px solid #e5e7eb',
// // // //     borderRadius: '8px',
// // // //     backgroundColor: 'white',
// // // //     color: '#374151',
// // // //     fontSize: '0.85rem',
// // // //     fontWeight: '500',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.2s ease',
// // // //     textAlign: 'center',
// // // //   },
// // // //   operationButtonSelected: {
// // // //     borderColor: '#4285f4',
// // // //     backgroundColor: '#f0f7ff',
// // // //     color: '#4285f4',
// // // //   },
// // // //   operationButtonDisabled: {
// // // //     backgroundColor: '#f3f4f6',
// // // //     color: '#9ca3af',
// // // //     cursor: 'not-allowed',
// // // //     borderColor: '#e5e7eb',
// // // //   },

// // // //   /* — scalar input — */
// // // //   scalarSection: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     gap: '12px',
// // // //     marginBottom: '16px',
// // // //     padding: '12px',
// // // //     backgroundColor: '#f0f7ff',
// // // //     borderRadius: '8px',
// // // //     border: '1px solid #e0e7ff',
// // // //   },
// // // //   scalarLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // //   scalarInput: {
// // // //     width: '80px',
// // // //     padding: '8px 12px',
// // // //     border: '1px solid #d1d5db',
// // // //     borderRadius: '6px',
// // // //     textAlign: 'center',
// // // //     fontSize: '1rem',
// // // //     outline: 'none',
// // // //   },

// // // //   /* — execute — */
// // // //   executeButton: {
// // // //     padding: '12px 32px',
// // // //     border: 'none',
// // // //     borderRadius: '8px',
// // // //     backgroundColor: '#4285f4',
// // // //     color: 'white',
// // // //     fontSize: '1rem',
// // // //     fontWeight: '500',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.2s ease',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   executeButtonDisabled: {
// // // //     backgroundColor: '#9ca3af',
// // // //     cursor: 'not-allowed',
// // // //   },

// // // //   /* — results — */
// // // //   resultsSection: {
// // // //     backgroundColor: '#f9fafb',
// // // //     padding: '16px',
// // // //     borderRadius: '8px',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   resultsTitle: {
// // // //     margin: '0 0 12px 0',
// // // //     fontSize: '1.05rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //   },
// // // //   resultsContent: {
// // // //     minHeight: '60px',
// // // //     backgroundColor: 'white',
// // // //     padding: '12px',
// // // //     borderRadius: '6px',
// // // //     border: '1px solid #d1d5db',
// // // //     fontSize: '1rem',
// // // //     color: '#374151',
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     flexDirection: 'column',
// // // //     gap: '8px',
// // // //   },
// // // //   resultLabel: {
// // // //     fontSize: '0.85rem',
// // // //     color: '#6b7280',
// // // //     fontStyle: 'italic',
// // // //   },
// // // //   resultValue: {
// // // //     fontSize: '1.1rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //     fontFamily: 'monospace',
// // // //   },
// // // //   resultError: {
// // // //     color: '#dc2626',
// // // //     fontWeight: '500',
// // // //     fontSize: '0.95rem',
// // // //   },
// // // //   resultTrue: {
// // // //     color: '#059669',
// // // //     fontWeight: '600',
// // // //     fontSize: '1rem',
// // // //   },
// // // //   resultFalse: {
// // // //     color: '#dc2626',
// // // //     fontWeight: '600',
// // // //     fontSize: '1rem',
// // // //   },
// // // //   resultDetail: {
// // // //     fontSize: '0.9rem',
// // // //     color: '#374151',
// // // //     textAlign: 'center',
// // // //     whiteSpace: 'pre-wrap',
// // // //   },
// // // //   resultMatrixTable: {
// // // //     borderCollapse: 'collapse',
// // // //     fontFamily: 'monospace',
// // // //     fontSize: '0.9rem',
// // // //   },
// // // //   resultMatrixCell: {
// // // //     padding: '5px 10px',
// // // //     textAlign: 'right',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   resultDecompSection: {
// // // //     width: '100%',
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '16px',
// // // //     alignItems: 'center',
// // // //   },
// // // //   resultDecompLabel: {
// // // //     fontSize: '0.9rem',
// // // //     fontWeight: '700',
// // // //     color: '#4285f4',
// // // //     marginBottom: '4px',
// // // //   },
// // // //   resultVarRow: {
// // // //     display: 'flex',
// // // //     gap: '16px',
// // // //     flexWrap: 'wrap',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   resultVarItem: {
// // // //     fontSize: '1rem',
// // // //     fontFamily: 'monospace',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //   },

// // // //   /* — errors — */
// // // //   errorSection: {
// // // //     backgroundColor: '#fef2f2',
// // // //     border: '1px solid #fecaca',
// // // //     borderRadius: '8px',
// // // //     padding: '16px',
// // // //     marginBottom: '16px',
// // // //   },
// // // //   errorTitle: {
// // // //     color: '#dc2626',
// // // //     fontWeight: '600',
// // // //     fontSize: '1rem',
// // // //     margin: '0 0 8px 0',
// // // //   },
// // // //   errorList: { listStyle: 'none', padding: '0', margin: '0' },
// // // //   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

// // // //   /* — buttons — */
// // // //   buttonDanger: {
// // // //     padding: '8px 16px',
// // // //     borderRadius: '6px',
// // // //     fontSize: '0.9rem',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.2s ease',
// // // //     border: '2px solid #dc2626',
// // // //     backgroundColor: 'transparent',
// // // //     color: '#dc2626',
// // // //   },
// // // //   clearMatrixButton: {
// // // //     padding: '3px 8px',
// // // //     border: '1px solid #9ca3af',
// // // //     borderRadius: '4px',
// // // //     backgroundColor: 'transparent',
// // // //     color: '#6b7280',
// // // //     fontSize: '0.75rem',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.15s ease',
// // // //   },
// // // //   removeButton: {
// // // //     padding: '3px 8px',
// // // //     border: 'none',
// // // //     borderRadius: '4px',
// // // //     backgroundColor: '#dc2626',
// // // //     color: 'white',
// // // //     fontSize: '0.75rem',
// // // //     cursor: 'pointer',
// // // //   },
// // // //   addMatrixContainer: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   addMatrixButton: {
// // // //     padding: '8px 16px',
// // // //     border: '2px dashed #4285f4',
// // // //     borderRadius: '8px',
// // // //     backgroundColor: 'transparent',
// // // //     color: '#4285f4',
// // // //     fontSize: '0.9rem',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.2s ease',
// // // //   },

// // // //   /* — loading — */
// // // //   loading: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     gap: '8px',
// // // //   },
// // // //   spinner: {
// // // //     width: '16px',
// // // //     height: '16px',
// // // //     border: '2px solid #e5e7eb',
// // // //     borderTop: '2px solid #4285f4',
// // // //     borderRadius: '50%',
// // // //     animation: 'spin 1s linear infinite',
// // // //   },

// // // //   /* — matrix accordion (two matrices, cols > 5) — */
// // // //   matrixAccordion: {
// // // //     border: '1px solid #e5e7eb',
// // // //     borderRadius: '12px',
// // // //     overflow: 'hidden',
// // // //     marginBottom: '0',
// // // //   },
// // // //   matrixAccordionToggle: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     width: '100%',
// // // //     padding: '14px 20px',
// // // //     border: 'none',
// // // //     backgroundColor: '#f8f9fa',
// // // //     cursor: 'pointer',
// // // //     transition: 'background-color 0.15s ease',
// // // //   },
// // // //   matrixAccordionLeft: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '12px',
// // // //   },
// // // //   matrixAccordionName: {
// // // //     fontSize: '1.1rem',
// // // //     fontWeight: '600',
// // // //     color: '#374151',
// // // //     margin: 0,
// // // //   },
// // // //   matrixAccordionDim: {
// // // //     fontSize: '0.85rem',
// // // //     color: '#6b7280',
// // // //     fontWeight: '500',
// // // //   },
// // // //   matrixAccordionArrow: {
// // // //     fontSize: '0.75rem',
// // // //     color: '#6b7280',
// // // //     transition: 'transform 0.2s ease',
// // // //   },
// // // //   matrixAccordionBody: {
// // // //     padding: '0 20px 20px 20px',
// // // //     backgroundColor: '#f8f9fa',
// // // //   },
// // // // };

// // // // const spinKeyframes = `
// // // // @keyframes spin {
// // // //   0% { transform: rotate(0deg); }
// // // //   100% { transform: rotate(360deg); }
// // // // }`;

// // // // /* ── component ────────────────────────────────────────────────── */

// // // // export default function MatrixCalculator() {
// // // //   const [step, setStep] = useState('operation-type');
// // // //   const [operationType, setOperationType] = useState('');
// // // //   const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
// // // //   const [matrices, setMatrices] = useState([]);
// // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // //   const [scalarValue, setScalarValue] = useState('');
// // // //   const [result, setResult] = useState(null);
// // // //   const [errors, setErrors] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [matrixAccordionOpen, setMatrixAccordionOpen] = useState({});

// // // //   const toggleMatrixAccordion = (mi) => {
// // // //     setMatrixAccordionOpen(prev => ({ ...prev, [mi]: !prev[mi] }));
// // // //   };

// // // //   const needsAccordion = () => operationType === 'two' && dimensions.cols > 5;

// // // //   const operationTypes = [
// // // //     { id: 'single', label: 'Single Matrix', description: 'Determinant, transpose, inverse, trace, rank' },
// // // //     { id: 'two', label: 'Two Matrices', description: 'Addition, subtraction, multiplication' },
// // // //     { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, addition, power' },
// // // //     { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' },
// // // //   ];

// // // //   const operationsByType = {
// // // //     single: [
// // // //       'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank',
// // // //       'LU Decomposition',
// // // //     ],
// // // //     two: [
// // // //       'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
// // // //       'Kronecker Product', 'Commutator', 'Anti-commutator',
// // // //     ],
// // // //     scalar: [
// // // //       'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
// // // //       'Matrix Power (Scalar)',
// // // //     ],
// // // //     system: [
// // // //       'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
// // // //       "Cramer's Rule", 'Matrix Equation AX=B', 'Least Squares Solution',
// // // //     ],
// // // //   };

// // // //   const squareOnly = ['Determinant', 'Inverse', 'Trace', 'LU Decomposition'];

// // // //   /* ── validation ── */

// // // //   const validateInputs = () => {
// // // //     const newErrors = [];
// // // //     if (!selectedOperation) newErrors.push('Please select an operation');

// // // //     matrices.forEach((matrix, index) => {
// // // //       const name = String.fromCharCode(65 + index);
// // // //       const total = matrix.rows * matrix.cols;
// // // //       const empty = matrix.data.filter(c => c === '' || c === null || c === undefined).length;
// // // //       const valid = matrix.data.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // //       if (empty > 0) newErrors.push(`Matrix ${name} has empty cells`);
// // // //       if (valid !== total) newErrors.push(`Matrix ${name} contains invalid numbers`);
// // // //     });

// // // //     if (operationType === 'two' && matrices.length === 2) {
// // // //       const [a, b] = matrices;
// // // //       if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
// // // //         if (a.rows !== b.rows || a.cols !== b.cols)
// // // //           newErrors.push('Matrices must have the same dimensions for this operation');
// // // //       }
// // // //       if (selectedOperation === 'Multiplication') {
// // // //         if (a.cols !== b.rows)
// // // //           newErrors.push('For multiplication, columns of A must equal rows of B');
// // // //       }
// // // //     }

// // // //     if (operationType === 'single' && squareOnly.includes(selectedOperation)) {
// // // //       const m = matrices[0];
// // // //       if (m && m.rows !== m.cols) newErrors.push('This operation requires a square matrix');
// // // //     }

// // // //     if (operationType === 'scalar') {
// // // //       if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(parseFloat(scalarValue)))
// // // //         newErrors.push('Please enter a valid scalar value');
// // // //     }

// // // //     setErrors(newErrors);
// // // //     return newErrors.length === 0;
// // // //   };

// // // //   /* ── handlers ── */

// // // //   const handleReset = () => {
// // // //     setStep('operation-type');
// // // //     setOperationType('');
// // // //     setDimensions({ rows: 3, cols: 3 });
// // // //     setMatrices([]);
// // // //     setSelectedOperation('');
// // // //     setScalarValue('');
// // // //     setResult(null);
// // // //     setErrors([]);
// // // //     setIsLoading(false);
// // // //   };

// // // //   const clearMatrix = (mi) => {
// // // //     const updated = [...matrices];
// // // //     updated[mi] = { ...updated[mi], data: new Array(updated[mi].rows * updated[mi].cols).fill('') };
// // // //     setMatrices(updated);
// // // //   };

// // // //   const handleOperationTypeSelect = (type) => {
// // // //     setOperationType(type);
// // // //     setSelectedOperation('');
// // // //     setErrors([]);
// // // //     setResult(null);
// // // //     setMatrixAccordionOpen({ 0: true, 1: true });

// // // //     let count = 1;
// // // //     if (type === 'two') count = 2;
// // // //     if (type === 'system') count = 2;

// // // //     const initialMatrices = Array(count).fill(null).map((_, i) => ({
// // // //       id: i,
// // // //       rows: dimensions.rows,
// // // //       cols: type === 'system' && i === count - 1 ? 1 : dimensions.cols,
// // // //       data: new Array(dimensions.rows * (type === 'system' && i === count - 1 ? 1 : dimensions.cols)).fill(''),
// // // //     }));
// // // //     setMatrices(initialMatrices);
// // // //     setStep('input');
// // // //   };

// // // //   const handleDimensionsChange = (dim, value) => {
// // // //     if (value === '') {
// // // //       setDimensions(prev => ({ ...prev, [dim]: '' }));
// // // //       return;
// // // //     }
// // // //     const val = parseInt(value);
// // // //     const newDims = { ...dimensions, [dim]: val };
// // // //     setDimensions(newDims);

// // // //     if (newDims.rows >= 1 && newDims.rows <= 10 && newDims.cols >= 1 && newDims.cols <= 10) {
// // // //       const updated = matrices.map((matrix, i) => {
// // // //         const nr = newDims.rows;
// // // //         const nc = operationType === 'system' && i === matrices.length - 1 ? 1 : newDims.cols;
// // // //         const newData = new Array(nr * nc).fill('');
// // // //         for (let r = 0; r < Math.min(matrix.rows, nr); r++) {
// // // //           for (let c = 0; c < Math.min(matrix.cols, nc); c++) {
// // // //             const oi = r * matrix.cols + c;
// // // //             const ni = r * nc + c;
// // // //             if (oi < matrix.data.length) newData[ni] = matrix.data[oi];
// // // //           }
// // // //         }
// // // //         return { ...matrix, rows: nr, cols: nc, data: newData };
// // // //       });
// // // //       setMatrices(updated);
// // // //       setErrors([]);
// // // //     } else {
// // // //       const errs = [];
// // // //       if (newDims.rows < 1 || newDims.rows > 10) errs.push('Rows must be between 1 and 10');
// // // //       if (newDims.cols < 1 || newDims.cols > 10) errs.push('Columns must be between 1 and 10');
// // // //       setErrors(errs);
// // // //     }
// // // //   };

// // // //   const updateMatrixCell = (mi, ci, value) => {
// // // //     const updated = [...matrices];
// // // //     updated[mi] = { ...updated[mi], data: [...updated[mi].data] };
// // // //     updated[mi].data[ci] = value;
// // // //     setMatrices(updated);
// // // //     if (errors.length > 0) setErrors([]);
// // // //   };

// // // //   const addMatrix = () => {
// // // //     if (operationType === 'system' && matrices.length < 5) {
// // // //       setMatrices([...matrices, {
// // // //         id: matrices.length,
// // // //         rows: dimensions.rows,
// // // //         cols: dimensions.cols,
// // // //         data: new Array(dimensions.rows * dimensions.cols).fill(''),
// // // //       }]);
// // // //     }
// // // //   };

// // // //   const removeMatrix = (mi) => {
// // // //     if (operationType === 'system' && matrices.length > 2)
// // // //       setMatrices(matrices.filter((_, i) => i !== mi));
// // // //   };

// // // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // // //   const handleOperationSelect = (op) => {
// // // //     setSelectedOperation(op);
// // // //     setErrors([]);
// // // //     setResult(null);
// // // //   };

// // // //   const executeOperation = () => {
// // // //     if (!validateInputs()) return;
// // // //     setIsLoading(true);
// // // //     setResult(null);

// // // //     setTimeout(() => {
// // // //       const numericMatrices = matrices.map(m => ({
// // // //         rows: m.rows,
// // // //         cols: m.cols,
// // // //         data: m.data.map(c => parseFloat(c)),
// // // //       }));

// // // //       const params = {
// // // //         operation: selectedOperation,
// // // //         operationType,
// // // //         dimensions,
// // // //         matrices: numericMatrices,
// // // //         scalarValue: scalarValue !== '' ? parseFloat(scalarValue) : null,
// // // //       };

// // // //       const res = computeMatrix(params);
// // // //       setResult(res);

// // // //       if (res.type === 'error') {
// // // //         setErrors([res.value]);
// // // //       }

// // // //       setIsLoading(false);
// // // //     }, 150);
// // // //   };

// // // //   const canExecute = () => selectedOperation && matrices.length > 0 && !isLoading;

// // // //   const needsScalarInput = () =>
// // // //     operationType === 'scalar' || selectedOperation === 'Matrix Power (Scalar)';

// // // //   const isSquareRequired = (op) => squareOnly.includes(op);

// // // //   const isOpDisabled = (op) => {
// // // //     if (!isSquareRequired(op)) return false;
// // // //     const m = matrices[0];
// // // //     return m && m.rows !== m.cols;
// // // //   };

// // // //   /* ── explanation helpers ── */
// // // //   const getExplanation = () => {
// // // //     const pool = categoryExplanations[operationType];
// // // //     if (!pool) return '';
// // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // //     return pool._default;
// // // //   };

// // // //   const getExplanationHeading = () => {
// // // //     if (selectedOperation) return selectedOperation;
// // // //     const labels = {
// // // //       single: 'Single Matrix Ops',
// // // //       two: 'Two Matrix Ops',
// // // //       scalar: 'Scalar Ops',
// // // //       system: 'System Ops',
// // // //     };
// // // //     return labels[operationType] || 'Explanation';
// // // //   };

// // // //   /* ── left-panel button styles ── */
// // // //   const catBtnStyle = (id) => ({
// // // //     padding: '12px',
// // // //     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// // // //     borderRadius: '10px',
// // // //     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
// // // //     cursor: 'pointer',
// // // //     textAlign: 'left',
// // // //     transition: 'all 0.25s ease',
// // // //     width: '100%',
// // // //     boxSizing: 'border-box',
// // // //   });
// // // //   const catLabelStyle = (id) => ({
// // // //     fontSize: '0.9rem',
// // // //     fontWeight: '600',
// // // //     color: operationType === id ? '#4285f4' : '#1f2937',
// // // //     marginBottom: '4px',
// // // //   });
// // // //   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

// // // //   const dimInputStyle = (val) => ({
// // // //     width: '60px',
// // // //     padding: '8px 12px',
// // // //     border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // //     borderRadius: '8px',
// // // //     fontSize: '1rem',
// // // //     textAlign: 'center',
// // // //     outline: 'none',
// // // //   });

// // // //   const getMatrixGridExtra = () => {
// // // //     if (operationType === 'single') return s.matrixGridSingle;
// // // //     if (operationType === 'two' || operationType === 'scalar') {
// // // //       if (needsAccordion()) return s.matrixGridSingle;
// // // //       return s.matrixGridTwo;
// // // //     }
// // // //     return s.matrixGridMultiple;
// // // //   };

// // // //   /* ── render a matrix card ── */
// // // //   const renderMatrix = (matrix, mi, nested = false) => {
// // // //     const gridStyle = {
// // // //       gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
// // // //       gridTemplateRows: `repeat(${matrix.rows}, 1fr)`,
// // // //     };
// // // //     const label = operationType === 'system' && mi === matrices.length - 1 && matrices.length > 1
// // // //       ? ` (Vector)` : '';

// // // //     return (
// // // //       <div key={matrix.id} style={nested ? {} : s.matrixCard}>
// // // //         {!nested && (
// // // //           <div style={s.matrixHeader}>
// // // //             <h4 style={s.matrixName}>Matrix {String.fromCharCode(65 + mi)}{label}</h4>
// // // //             <div style={s.matrixHeaderRight}>
// // // //               <span style={s.matrixDimLabel}>{matrix.rows} × {matrix.cols}</span>
// // // //               <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// // // //                 Clear
// // // //               </button>
// // // //               {operationType === 'system' && matrices.length > 2 && mi >= 2 && (
// // // //                 <button onClick={() => removeMatrix(mi)} style={s.removeButton}>Remove</button>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         {nested && (
// // // //           <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
// // // //             <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// // // //               Clear
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //         <div style={s.matrixContainer}>
// // // //           <div style={s.matrixContent}>
// // // //             <span style={s.matrixBracket}>[</span>
// // // //             <div style={{ ...s.matrixTable, ...gridStyle }}>
// // // //               {matrix.data.map((cell, ci) => (
// // // //                 <input
// // // //                   key={ci}
// // // //                   type="number"
// // // //                   step="any"
// // // //                   value={cell}
// // // //                   onChange={(e) => updateMatrixCell(mi, ci, e.target.value)}
// // // //                   placeholder="0"
// // // //                   style={{
// // // //                     ...s.matrixCell,
// // // //                     ...(cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? s.matrixCellError : {}),
// // // //                   }}
// // // //                 />
// // // //               ))}
// // // //             </div>
// // // //             <span style={s.matrixBracket}>]</span>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   };

// // // //   /* ── render result based on type ── */
// // // //   const renderResultMatrix = (matrix) => (
// // // //     <table style={s.resultMatrixTable}>
// // // //       <tbody>
// // // //         {matrix.map((row, ri) => (
// // // //           <tr key={ri}>
// // // //             {row.map((val, ci) => (
// // // //               <td key={ci} style={s.resultMatrixCell}>{val}</td>
// // // //             ))}
// // // //           </tr>
// // // //         ))}
// // // //       </tbody>
// // // //     </table>
// // // //   );

// // // //   const renderResult = () => {
// // // //     if (!result) return 'Select matrices and operation, then click Execute';

// // // //     if (result.type === 'error') {
// // // //       return <span style={s.resultError}>{result.value}</span>;
// // // //     }

// // // //     if (result.type === 'scalar') {
// // // //       return (
// // // //         <>
// // // //           <span style={s.resultLabel}>{result.label}</span>
// // // //           <span style={s.resultValue}>{result.value}</span>
// // // //         </>
// // // //       );
// // // //     }

// // // //     if (result.type === 'vector') {
// // // //       return (
// // // //         <>
// // // //           <span style={s.resultLabel}>{result.label}</span>
// // // //           <div style={s.resultVarRow}>
// // // //             {result.value.map((val, i) => (
// // // //               <span key={i} style={s.resultVarItem}>
// // // //                 {result.variables ? result.variables[i] : `x${i + 1}`} = {val}
// // // //               </span>
// // // //             ))}
// // // //           </div>
// // // //           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
// // // //         </>
// // // //       );
// // // //     }

// // // //     if (result.type === 'matrix') {
// // // //       return (
// // // //         <>
// // // //           <span style={s.resultLabel}>{result.label} ({result.rows}&times;{result.cols})</span>
// // // //           {renderResultMatrix(result.value)}
// // // //         </>
// // // //       );
// // // //     }

// // // //     if (result.type === 'boolean') {
// // // //       return (
// // // //         <>
// // // //           <span style={s.resultLabel}>{result.label}</span>
// // // //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// // // //             {result.value ? '\u2713 TRUE' : '\u2717 FALSE'}
// // // //           </span>
// // // //           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
// // // //         </>
// // // //       );
// // // //     }

// // // //     if (result.type === 'decomposition') {
// // // //       return (
// // // //         <div style={s.resultDecompSection}>
// // // //           <span style={s.resultLabel}>{result.label}</span>
// // // //           {Object.keys(result.value).map((key) => {
// // // //             const part = result.value[key];
// // // //             return (
// // // //               <div key={key} style={{ textAlign: 'center' }}>
// // // //                 <div style={s.resultDecompLabel}>{part.label}</div>
// // // //                 {renderResultMatrix(part.matrix)}
// // // //               </div>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       );
// // // //     }

// // // //     return JSON.stringify(result.value);
// // // //   };

// // // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // // //   return (
// // // //     <div style={s.container}>
// // // //       <style>{spinKeyframes}</style>
// // // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // // //         {/* Header */}
// // // //         <div style={s.header}>
// // // //           <h1 style={s.title}>Matrix Calculator</h1>
// // // //           <p style={s.subtitle}>Professional matrix operations calculator</p>
// // // //         </div>

// // // //         {/* ── INITIAL STATE ── */}
// // // //         {step === 'operation-type' && (
// // // //           <div>
// // // //             <h2 style={s.stepTitle}>Select Operation Type</h2>
// // // //             <div style={s.operationTypeGrid}>
// // // //               {operationTypes.map((type) => (
// // // //                 <button
// // // //                   key={type.id}
// // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // //                   style={s.operationTypeCard}
// // // //                   onMouseOver={(e) => {
// // // //                     e.currentTarget.style.borderColor = '#4285f4';
// // // //                     e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // //                   }}
// // // //                   onMouseOut={(e) => {
// // // //                     e.currentTarget.style.borderColor = '#e5e7eb';
// // // //                     e.currentTarget.style.backgroundColor = 'white';
// // // //                   }}
// // // //                 >
// // // //                   <div style={s.operationTypeTitle}>{type.label}</div>
// // // //                   <div style={s.operationTypeDescription}>{type.description}</div>
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* ── EXPANDED STATE — 3-column ── */}
// // // //         {step === 'input' && (
// // // //           <div style={s.threeColLayout}>

// // // //             {/* ▸ LEFT — category buttons */}
// // // //             <div style={s.leftPanel}>
// // // //               <div style={s.leftPanelTitle}>Category</div>
// // // //               {operationTypes.map((type) => (
// // // //                 <button
// // // //                   key={type.id}
// // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // //                   style={catBtnStyle(type.id)}
// // // //                   onMouseOver={(e) => {
// // // //                     if (operationType !== type.id) {
// // // //                       e.currentTarget.style.borderColor = '#4285f4';
// // // //                       e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // //                     }
// // // //                   }}
// // // //                   onMouseOut={(e) => {
// // // //                     if (operationType !== type.id) {
// // // //                       e.currentTarget.style.borderColor = '#e5e7eb';
// // // //                       e.currentTarget.style.backgroundColor = 'white';
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   <div style={catLabelStyle(type.id)}>{type.label}</div>
// // // //                   <div style={catDescStyle}>{type.description}</div>
// // // //                 </button>
// // // //               ))}
// // // //             </div>

// // // //             {/* ▸ MIDDLE — calculator */}
// // // //             <div>
// // // //               <div style={s.inputHeader}>
// // // //                 <h2 style={s.inputTitle}>Matrix Input ({dimensions.rows}×{dimensions.cols})</h2>
// // // //                 <div style={s.buttonGroup}>
// // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Dimensions */}
// // // //               <div style={s.dimControls}>
// // // //                 <div style={s.dimGroup}>
// // // //                   <label style={s.dimLabel}>Rows:</label>
// // // //                   <input
// // // //                     type="number" min="1" max="10"
// // // //                     value={dimensions.rows}
// // // //                     onChange={(e) => handleDimensionsChange('rows', e.target.value)}
// // // //                     style={dimInputStyle(dimensions.rows)}
// // // //                   />
// // // //                 </div>
// // // //                 <div style={s.dimGroup}>
// // // //                   <label style={s.dimLabel}>Cols:</label>
// // // //                   <input
// // // //                     type="number" min="1" max="10"
// // // //                     value={dimensions.cols}
// // // //                     onChange={(e) => handleDimensionsChange('cols', e.target.value)}
// // // //                     style={dimInputStyle(dimensions.cols)}
// // // //                   />
// // // //                 </div>
// // // //                 <span style={s.dimHint}>
// // // //                   {dimensions.rows}×{dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
// // // //                 </span>
// // // //                 {operationType === 'single' && dimensions.rows !== dimensions.cols && (
// // // //                   <span style={s.dimWarning}>Some operations require square matrices</span>
// // // //                 )}
// // // //               </div>

// // // //               {/* Errors */}
// // // //               {errors.length > 0 && (
// // // //                 <div style={s.errorSection}>
// // // //                   <div style={s.errorTitle}>Please fix the following:</div>
// // // //                   <ul style={s.errorList}>
// // // //                     {errors.map((err, i) => (
// // // //                       <li key={i} style={s.errorItem}>&bull; {err}</li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               )}

// // // //               {/* Matrices */}
// // // //               <div style={{ ...s.matrixGrid, ...getMatrixGridExtra() }}>
// // // //                 {matrices.map((m, i) => {
// // // //                   if (needsAccordion()) {
// // // //                     const isOpen = matrixAccordionOpen[i] !== false;
// // // //                     const label = operationType === 'system' && i === matrices.length - 1 && matrices.length > 1
// // // //                       ? ' (Vector)' : '';
// // // //                     return (
// // // //                       <div key={m.id} style={s.matrixAccordion}>
// // // //                         <button
// // // //                           onClick={() => toggleMatrixAccordion(i)}
// // // //                           style={s.matrixAccordionToggle}
// // // //                         >
// // // //                           <div style={s.matrixAccordionLeft}>
// // // //                             <span style={s.matrixAccordionName}>Matrix {String.fromCharCode(65 + i)}{label}</span>
// // // //                             <span style={s.matrixAccordionDim}>{m.rows} × {m.cols}</span>
// // // //                           </div>
// // // //                           <span style={{
// // // //                             ...s.matrixAccordionArrow,
// // // //                             transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// // // //                           }}>
// // // //                             ▼
// // // //                           </span>
// // // //                         </button>
// // // //                         {isOpen && (
// // // //                           <div style={s.matrixAccordionBody}>
// // // //                             {renderMatrix(m, i, true)}
// // // //                           </div>
// // // //                         )}
// // // //                       </div>
// // // //                     );
// // // //                   }
// // // //                   return renderMatrix(m, i);
// // // //                 })}
// // // //               </div>

// // // //               {/* Add matrix (system) */}
// // // //               {operationType === 'system' && matrices.length < 5 && (
// // // //                 <div style={s.addMatrixContainer}>
// // // //                   <button onClick={addMatrix} style={s.addMatrixButton}>+ Add Matrix</button>
// // // //                 </div>
// // // //               )}

// // // //               {/* Scalar input */}
// // // //               {needsScalarInput() && (
// // // //                 <div style={s.scalarSection}>
// // // //                   <label style={s.scalarLabel}>Scalar value:</label>
// // // //                   <input
// // // //                     type="number" step="any"
// // // //                     value={scalarValue}
// // // //                     onChange={(e) => setScalarValue(e.target.value)}
// // // //                     placeholder="Enter value"
// // // //                     style={s.scalarInput}
// // // //                   />
// // // //                 </div>
// // // //               )}

// // // //               {/* Operations */}
// // // //               <div style={s.operationsSection}>
// // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // //                 <div style={s.operationsGrid}>
// // // //                   {getAvailableOperations().map((op) => {
// // // //                     const sel = selectedOperation === op;
// // // //                     const dis = isOpDisabled(op);
// // // //                     return (
// // // //                       <button
// // // //                         key={op}
// // // //                         onClick={() => handleOperationSelect(op)}
// // // //                         disabled={dis}
// // // //                         style={{
// // // //                           ...s.operationButton,
// // // //                           ...(sel ? s.operationButtonSelected : {}),
// // // //                           ...(dis ? s.operationButtonDisabled : {}),
// // // //                         }}
// // // //                       >
// // // //                         {op}
// // // //                       </button>
// // // //                     );
// // // //                   })}
// // // //                 </div>

// // // //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// // // //                   <button
// // // //                     onClick={executeOperation}
// // // //                     disabled={!canExecute()}
// // // //                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
// // // //                   >
// // // //                     {isLoading ? (
// // // //                       <div style={s.loading}>
// // // //                         <div style={s.spinner} />
// // // //                         Calculating...
// // // //                       </div>
// // // //                     ) : (
// // // //                       'Execute Operation'
// // // //                     )}
// // // //                   </button>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Result */}
// // // //               <div style={s.resultsSection}>
// // // //                 <h4 style={s.resultsTitle}>Result</h4>
// // // //                 <div style={s.resultsContent}>
// // // //                   {renderResult()}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* ▸ RIGHT — explanation */}
// // // //             <div style={s.explanationPanel}>
// // // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // // //               <p style={s.explanationBody}>{getExplanation()}</p>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useState } from 'react';
// // // import computeMatrix from './computeMatrix';
// // // import {
// // //   descriptions as defaultDescriptions,
// // //   steps as operationSteps,
// // // } from './matrixExplanations';

// // // /* ── styles ───────────────────────────────────────────────────── */

// // // const s = {
// // //   container: {
// // //     minHeight: '100vh',
// // //     backgroundColor: '#f8f9fa',
// // //     padding: '20px',
// // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // //   },
// // //   mainNarrow: {
// // //     maxWidth: '800px',
// // //     margin: '0 auto',
// // //     backgroundColor: 'white',
// // //     borderRadius: '16px',
// // //     padding: '32px',
// // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // //     transition: 'max-width 0.4s ease',
// // //   },
// // //   mainWide: {
// // //     maxWidth: 'calc(100vw - 400px)',
// // //     margin: '0 auto',
// // //     backgroundColor: 'white',
// // //     borderRadius: '16px',
// // //     padding: '32px',
// // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // //     transition: 'max-width 0.4s ease',
// // //   },
// // //   header: {
// // //     textAlign: 'center',
// // //     marginBottom: '32px',
// // //   },
// // //   title: {
// // //     fontSize: '2.5rem',
// // //     fontWeight: '600',
// // //     color: '#1a1a1a',
// // //     margin: '0 0 8px 0',
// // //   },
// // //   subtitle: {
// // //     color: '#6b7280',
// // //     fontSize: '1.1rem',
// // //     margin: '0',
// // //   },
// // //   stepTitle: {
// // //     fontSize: '1.5rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     marginBottom: '24px',
// // //     textAlign: 'center',
// // //   },
// // //   operationTypeGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: '1fr',
// // //     gap: '16px',
// // //   },
// // //   operationTypeCard: {
// // //     padding: '20px',
// // //     border: '2px solid #e5e7eb',
// // //     borderRadius: '12px',
// // //     backgroundColor: 'white',
// // //     cursor: 'pointer',
// // //     textAlign: 'left',
// // //     transition: 'all 0.2s ease',
// // //   },
// // //   operationTypeTitle: {
// // //     fontSize: '1.2rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     marginBottom: '8px',
// // //   },
// // //   operationTypeDescription: {
// // //     fontSize: '1rem',
// // //     color: '#6b7280',
// // //   },

// // //   /* — 3-col layout — */
// // //   threeColLayout: {
// // //     display: 'grid',
// // //     gridTemplateColumns: '200px 2fr 1fr',
// // //     gap: '24px',
// // //     alignItems: 'start',
// // //   },
// // //   leftPanel: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '10px',
// // //     position: 'sticky',
// // //     top: '20px',
// // //   },
// // //   leftPanelTitle: {
// // //     fontSize: '0.95rem',
// // //     fontWeight: '700',
// // //     color: '#1f2937',
// // //     marginBottom: '4px',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '0.04em',
// // //   },
// // //   explanationPanel: {
// // //     backgroundColor: '#f0f4ff',
// // //     borderRadius: '12px',
// // //     padding: '24px',
// // //     border: '1px solid #d0d9f0',
// // //     position: 'sticky',
// // //     top: '20px',
// // //   },
// // //   explanationTitle: {
// // //     fontSize: '1.05rem',
// // //     fontWeight: '700',
// // //     color: '#1f2937',
// // //     margin: '0 0 12px 0',
// // //   },
// // //   explanationBody: {
// // //     fontSize: '0.95rem',
// // //     lineHeight: '1.6',
// // //     color: '#374151',
// // //     margin: '0 0 0 0',
// // //   },
// // //   explanationDivider: {
// // //     border: 'none',
// // //     borderTop: '1px solid #d0d9f0',
// // //     margin: '16px 0',
// // //   },
// // //   stepsTitle: {
// // //     fontSize: '0.9rem',
// // //     fontWeight: '700',
// // //     color: '#4285f4',
// // //     margin: '0 0 10px 0',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '0.03em',
// // //   },
// // //   stepsList: {
// // //     listStyle: 'none',
// // //     padding: '0',
// // //     margin: '0',
// // //   },
// // //   stepItem: {
// // //     fontSize: '0.88rem',
// // //     lineHeight: '1.55',
// // //     color: '#1f2937',
// // //     fontFamily: 'monospace',
// // //     padding: '3px 0',
// // //     whiteSpace: 'pre-wrap',
// // //   },

// // //   /* — middle (calculator) — */
// // //   inputHeader: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: '24px',
// // //   },
// // //   inputTitle: {
// // //     fontSize: '1.35rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     margin: '0',
// // //   },
// // //   buttonGroup: { display: 'flex', gap: '12px' },

// // //   /* — dimension controls — */
// // //   dimControls: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     gap: '24px',
// // //     marginBottom: '24px',
// // //     padding: '14px',
// // //     backgroundColor: '#f0f7ff',
// // //     borderRadius: '8px',
// // //     border: '1px solid #e0e7ff',
// // //     flexWrap: 'wrap',
// // //   },
// // //   dimGroup: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '8px',
// // //   },
// // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },
// // //   dimWarning: { fontSize: '0.85rem', color: '#dc2626', fontWeight: '500' },

// // //   /* — matrix grid — */
// // //   matrixGrid: {
// // //     display: 'grid',
// // //     gap: '24px',
// // //     marginBottom: '24px',
// // //   },
// // //   matrixGridSingle: { gridTemplateColumns: '1fr' },
// // //   matrixGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' },
// // //   matrixGridMultiple: { gridTemplateColumns: '1fr' },
// // //   matrixCard: {
// // //     backgroundColor: '#f8f9fa',
// // //     padding: '20px',
// // //     borderRadius: '12px',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   matrixHeader: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: '16px',
// // //   },
// // //   matrixName: {
// // //     margin: '0',
// // //     fontSize: '1.1rem',
// // //     fontWeight: '600',
// // //     color: '#374151',
// // //   },
// // //   matrixHeaderRight: {
// // //     display: 'flex',
// // //     gap: '8px',
// // //     alignItems: 'center',
// // //   },
// // //   matrixDimLabel: {
// // //     fontSize: '0.85rem',
// // //     color: '#6b7280',
// // //     fontWeight: '500',
// // //   },
// // //   matrixContainer: {
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //   },
// // //   matrixContent: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '8px',
// // //   },
// // //   matrixBracket: {
// // //     fontSize: '2rem',
// // //     fontWeight: 'bold',
// // //     color: '#374151',
// // //     lineHeight: '1',
// // //   },
// // //   matrixTable: {
// // //     display: 'grid',
// // //     gap: '4px',
// // //     padding: '8px',
// // //   },
// // //   matrixCell: {
// // //     width: '50px',
// // //     height: '35px',
// // //     padding: '4px',
// // //     border: '1px solid #d1d5db',
// // //     borderRadius: '4px',
// // //     textAlign: 'center',
// // //     fontSize: '0.85rem',
// // //     backgroundColor: 'white',
// // //     outline: 'none',
// // //   },
// // //   matrixCellError: {
// // //     borderColor: '#dc2626',
// // //     backgroundColor: '#fef2f2',
// // //   },

// // //   /* — operations — */
// // //   operationsSection: { marginBottom: '24px' },
// // //   operationsTitle: {
// // //     fontSize: '1.1rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     marginBottom: '16px',
// // //   },
// // //   operationsGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
// // //     gap: '8px',
// // //     marginBottom: '24px',
// // //   },
// // //   operationButton: {
// // //     padding: '10px 12px',
// // //     border: '2px solid #e5e7eb',
// // //     borderRadius: '8px',
// // //     backgroundColor: 'white',
// // //     color: '#374151',
// // //     fontSize: '0.85rem',
// // //     fontWeight: '500',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //     textAlign: 'center',
// // //   },
// // //   operationButtonSelected: {
// // //     borderColor: '#4285f4',
// // //     backgroundColor: '#f0f7ff',
// // //     color: '#4285f4',
// // //   },
// // //   operationButtonDisabled: {
// // //     backgroundColor: '#f3f4f6',
// // //     color: '#9ca3af',
// // //     cursor: 'not-allowed',
// // //     borderColor: '#e5e7eb',
// // //   },

// // //   /* — scalar input — */
// // //   scalarSection: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     gap: '12px',
// // //     marginBottom: '16px',
// // //     padding: '12px',
// // //     backgroundColor: '#f0f7ff',
// // //     borderRadius: '8px',
// // //     border: '1px solid #e0e7ff',
// // //   },
// // //   scalarLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // //   scalarInput: {
// // //     width: '80px',
// // //     padding: '8px 12px',
// // //     border: '1px solid #d1d5db',
// // //     borderRadius: '6px',
// // //     textAlign: 'center',
// // //     fontSize: '1rem',
// // //     outline: 'none',
// // //   },

// // //   /* — execute — */
// // //   executeButton: {
// // //     padding: '12px 32px',
// // //     border: 'none',
// // //     borderRadius: '8px',
// // //     backgroundColor: '#4285f4',
// // //     color: 'white',
// // //     fontSize: '1rem',
// // //     fontWeight: '500',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //     marginBottom: '24px',
// // //   },
// // //   executeButtonDisabled: {
// // //     backgroundColor: '#9ca3af',
// // //     cursor: 'not-allowed',
// // //   },

// // //   /* — results — */
// // //   resultsSection: {
// // //     backgroundColor: '#f9fafb',
// // //     padding: '16px',
// // //     borderRadius: '8px',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   resultsTitle: {
// // //     margin: '0 0 12px 0',
// // //     fontSize: '1.05rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //   },
// // //   resultsContent: {
// // //     minHeight: '60px',
// // //     backgroundColor: 'white',
// // //     padding: '12px',
// // //     borderRadius: '6px',
// // //     border: '1px solid #d1d5db',
// // //     fontSize: '1rem',
// // //     color: '#374151',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     flexDirection: 'column',
// // //     gap: '8px',
// // //   },
// // //   resultLabel: {
// // //     fontSize: '0.85rem',
// // //     color: '#6b7280',
// // //     fontStyle: 'italic',
// // //   },
// // //   resultValue: {
// // //     fontSize: '1.1rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     fontFamily: 'monospace',
// // //   },
// // //   resultError: {
// // //     color: '#dc2626',
// // //     fontWeight: '500',
// // //     fontSize: '0.95rem',
// // //   },
// // //   resultTrue: {
// // //     color: '#059669',
// // //     fontWeight: '600',
// // //     fontSize: '1rem',
// // //   },
// // //   resultFalse: {
// // //     color: '#dc2626',
// // //     fontWeight: '600',
// // //     fontSize: '1rem',
// // //   },
// // //   resultDetail: {
// // //     fontSize: '0.9rem',
// // //     color: '#374151',
// // //     textAlign: 'center',
// // //     whiteSpace: 'pre-wrap',
// // //   },
// // //   resultMatrixTable: {
// // //     borderCollapse: 'collapse',
// // //     fontFamily: 'monospace',
// // //     fontSize: '0.9rem',
// // //   },
// // //   resultMatrixCell: {
// // //     padding: '5px 10px',
// // //     textAlign: 'right',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   resultDecompSection: {
// // //     width: '100%',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '16px',
// // //     alignItems: 'center',
// // //   },
// // //   resultDecompLabel: {
// // //     fontSize: '0.9rem',
// // //     fontWeight: '700',
// // //     color: '#4285f4',
// // //     marginBottom: '4px',
// // //   },
// // //   resultVarRow: {
// // //     display: 'flex',
// // //     gap: '16px',
// // //     flexWrap: 'wrap',
// // //     justifyContent: 'center',
// // //   },
// // //   resultVarItem: {
// // //     fontSize: '1rem',
// // //     fontFamily: 'monospace',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //   },

// // //   /* — errors — */
// // //   errorSection: {
// // //     backgroundColor: '#fef2f2',
// // //     border: '1px solid #fecaca',
// // //     borderRadius: '8px',
// // //     padding: '16px',
// // //     marginBottom: '16px',
// // //   },
// // //   errorTitle: {
// // //     color: '#dc2626',
// // //     fontWeight: '600',
// // //     fontSize: '1rem',
// // //     margin: '0 0 8px 0',
// // //   },
// // //   errorList: { listStyle: 'none', padding: '0', margin: '0' },
// // //   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

// // //   /* — buttons — */
// // //   buttonDanger: {
// // //     padding: '8px 16px',
// // //     borderRadius: '6px',
// // //     fontSize: '0.9rem',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //     border: '2px solid #dc2626',
// // //     backgroundColor: 'transparent',
// // //     color: '#dc2626',
// // //   },
// // //   clearMatrixButton: {
// // //     padding: '3px 8px',
// // //     border: '1px solid #9ca3af',
// // //     borderRadius: '4px',
// // //     backgroundColor: 'transparent',
// // //     color: '#6b7280',
// // //     fontSize: '0.75rem',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.15s ease',
// // //   },
// // //   removeButton: {
// // //     padding: '3px 8px',
// // //     border: 'none',
// // //     borderRadius: '4px',
// // //     backgroundColor: '#dc2626',
// // //     color: 'white',
// // //     fontSize: '0.75rem',
// // //     cursor: 'pointer',
// // //   },
// // //   addMatrixContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginBottom: '24px',
// // //   },
// // //   addMatrixButton: {
// // //     padding: '8px 16px',
// // //     border: '2px dashed #4285f4',
// // //     borderRadius: '8px',
// // //     backgroundColor: 'transparent',
// // //     color: '#4285f4',
// // //     fontSize: '0.9rem',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //   },

// // //   /* — loading — */
// // //   loading: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     gap: '8px',
// // //   },
// // //   spinner: {
// // //     width: '16px',
// // //     height: '16px',
// // //     border: '2px solid #e5e7eb',
// // //     borderTop: '2px solid #4285f4',
// // //     borderRadius: '50%',
// // //     animation: 'spin 1s linear infinite',
// // //   },

// // //   /* — matrix accordion (two matrices, cols > 5) — */
// // //   matrixAccordion: {
// // //     border: '1px solid #e5e7eb',
// // //     borderRadius: '12px',
// // //     overflow: 'hidden',
// // //     marginBottom: '0',
// // //   },
// // //   matrixAccordionToggle: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     width: '100%',
// // //     padding: '14px 20px',
// // //     border: 'none',
// // //     backgroundColor: '#f8f9fa',
// // //     cursor: 'pointer',
// // //     transition: 'background-color 0.15s ease',
// // //   },
// // //   matrixAccordionLeft: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '12px',
// // //   },
// // //   matrixAccordionName: {
// // //     fontSize: '1.1rem',
// // //     fontWeight: '600',
// // //     color: '#374151',
// // //     margin: 0,
// // //   },
// // //   matrixAccordionDim: {
// // //     fontSize: '0.85rem',
// // //     color: '#6b7280',
// // //     fontWeight: '500',
// // //   },
// // //   matrixAccordionArrow: {
// // //     fontSize: '0.75rem',
// // //     color: '#6b7280',
// // //     transition: 'transform 0.2s ease',
// // //   },
// // //   matrixAccordionBody: {
// // //     padding: '0 20px 20px 20px',
// // //     backgroundColor: '#f8f9fa',
// // //   },
// // // };

// // // const spinKeyframes = `
// // // @keyframes spin {
// // //   0% { transform: rotate(0deg); }
// // //   100% { transform: rotate(360deg); }
// // // }`;

// // // /* ── component ────────────────────────────────────────────────── */

// // // export default function MatrixCalculator({ descriptions: descriptionsProp } = {}) {
// // //   const [step, setStep] = useState('operation-type');
// // //   const [operationType, setOperationType] = useState('');
// // //   const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
// // //   const [matrices, setMatrices] = useState([]);
// // //   const [selectedOperation, setSelectedOperation] = useState('');
// // //   const [scalarValue, setScalarValue] = useState('');
// // //   const [result, setResult] = useState(null);
// // //   const [errors, setErrors] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [matrixAccordionOpen, setMatrixAccordionOpen] = useState({});
// // //   const [computedSteps, setComputedSteps] = useState(null);

// // //   /* ── merge descriptions: props override defaults ── */
// // //   const mergedDescriptions = descriptionsProp
// // //     ? Object.keys(defaultDescriptions).reduce((acc, cat) => {
// // //         acc[cat] = {
// // //           ...defaultDescriptions[cat],
// // //           ...(descriptionsProp[cat] || {}),
// // //         };
// // //         return acc;
// // //       }, {})
// // //     : defaultDescriptions;

// // //   const toggleMatrixAccordion = (mi) => {
// // //     setMatrixAccordionOpen(prev => ({ ...prev, [mi]: !prev[mi] }));
// // //   };

// // //   const needsAccordion = () => operationType === 'two' && dimensions.cols > 5;

// // //   const operationTypes = [
// // //     { id: 'single', label: 'Single Matrix', description: 'Determinant, transpose, inverse, trace, rank' },
// // //     { id: 'two', label: 'Two Matrices', description: 'Addition, subtraction, multiplication' },
// // //     { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, addition, power' },
// // //     { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' },
// // //   ];

// // //   const operationsByType = {
// // //     single: [
// // //       'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank',
// // //       'LU Decomposition',
// // //     ],
// // //     two: [
// // //       'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
// // //       'Kronecker Product', 'Commutator', 'Anti-commutator',
// // //     ],
// // //     scalar: [
// // //       'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
// // //       'Matrix Power (Scalar)',
// // //     ],
// // //     system: [
// // //       'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
// // //       "Cramer's Rule", 'Matrix Equation AX=B', 'Least Squares Solution',
// // //     ],
// // //   };

// // //   const squareOnly = ['Determinant', 'Inverse', 'Trace', 'LU Decomposition'];

// // //   /* ── validation ── */

// // //   const validateInputs = () => {
// // //     const newErrors = [];
// // //     if (!selectedOperation) newErrors.push('Please select an operation');

// // //     matrices.forEach((matrix, index) => {
// // //       const name = String.fromCharCode(65 + index);
// // //       const total = matrix.rows * matrix.cols;
// // //       const empty = matrix.data.filter(c => c === '' || c === null || c === undefined).length;
// // //       const valid = matrix.data.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // //       if (empty > 0) newErrors.push(`Matrix ${name} has empty cells`);
// // //       if (valid !== total) newErrors.push(`Matrix ${name} contains invalid numbers`);
// // //     });

// // //     if (operationType === 'two' && matrices.length === 2) {
// // //       const [a, b] = matrices;
// // //       if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
// // //         if (a.rows !== b.rows || a.cols !== b.cols)
// // //           newErrors.push('Matrices must have the same dimensions for this operation');
// // //       }
// // //       if (selectedOperation === 'Multiplication') {
// // //         if (a.cols !== b.rows)
// // //           newErrors.push('For multiplication, columns of A must equal rows of B');
// // //       }
// // //     }

// // //     if (operationType === 'single' && squareOnly.includes(selectedOperation)) {
// // //       const m = matrices[0];
// // //       if (m && m.rows !== m.cols) newErrors.push('This operation requires a square matrix');
// // //     }

// // //     if (operationType === 'scalar') {
// // //       if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(parseFloat(scalarValue)))
// // //         newErrors.push('Please enter a valid scalar value');
// // //     }

// // //     setErrors(newErrors);
// // //     return newErrors.length === 0;
// // //   };

// // //   /* ── handlers ── */

// // //   const handleReset = () => {
// // //     setStep('operation-type');
// // //     setOperationType('');
// // //     setDimensions({ rows: 3, cols: 3 });
// // //     setMatrices([]);
// // //     setSelectedOperation('');
// // //     setScalarValue('');
// // //     setResult(null);
// // //     setErrors([]);
// // //     setIsLoading(false);
// // //     setComputedSteps(null);
// // //   };

// // //   const clearMatrix = (mi) => {
// // //     const updated = [...matrices];
// // //     updated[mi] = { ...updated[mi], data: new Array(updated[mi].rows * updated[mi].cols).fill('') };
// // //     setMatrices(updated);
// // //   };

// // //   const handleOperationTypeSelect = (type) => {
// // //     setOperationType(type);
// // //     setSelectedOperation('');
// // //     setErrors([]);
// // //     setResult(null);
// // //     setComputedSteps(null);
// // //     setMatrixAccordionOpen({ 0: true, 1: true });

// // //     let count = 1;
// // //     if (type === 'two') count = 2;
// // //     if (type === 'system') count = 2;

// // //     const initialMatrices = Array(count).fill(null).map((_, i) => ({
// // //       id: i,
// // //       rows: dimensions.rows,
// // //       cols: type === 'system' && i === count - 1 ? 1 : dimensions.cols,
// // //       data: new Array(dimensions.rows * (type === 'system' && i === count - 1 ? 1 : dimensions.cols)).fill(''),
// // //     }));
// // //     setMatrices(initialMatrices);
// // //     setStep('input');
// // //   };

// // //   const handleDimensionsChange = (dim, value) => {
// // //     if (value === '') {
// // //       setDimensions(prev => ({ ...prev, [dim]: '' }));
// // //       return;
// // //     }
// // //     const val = parseInt(value);
// // //     const newDims = { ...dimensions, [dim]: val };
// // //     setDimensions(newDims);

// // //     if (newDims.rows >= 1 && newDims.rows <= 10 && newDims.cols >= 1 && newDims.cols <= 10) {
// // //       const updated = matrices.map((matrix, i) => {
// // //         const nr = newDims.rows;
// // //         const nc = operationType === 'system' && i === matrices.length - 1 ? 1 : newDims.cols;
// // //         const newData = new Array(nr * nc).fill('');
// // //         for (let r = 0; r < Math.min(matrix.rows, nr); r++) {
// // //           for (let c = 0; c < Math.min(matrix.cols, nc); c++) {
// // //             const oi = r * matrix.cols + c;
// // //             const ni = r * nc + c;
// // //             if (oi < matrix.data.length) newData[ni] = matrix.data[oi];
// // //           }
// // //         }
// // //         return { ...matrix, rows: nr, cols: nc, data: newData };
// // //       });
// // //       setMatrices(updated);
// // //       setErrors([]);
// // //     } else {
// // //       const errs = [];
// // //       if (newDims.rows < 1 || newDims.rows > 10) errs.push('Rows must be between 1 and 10');
// // //       if (newDims.cols < 1 || newDims.cols > 10) errs.push('Columns must be between 1 and 10');
// // //       setErrors(errs);
// // //     }
// // //   };

// // //   const updateMatrixCell = (mi, ci, value) => {
// // //     const updated = [...matrices];
// // //     updated[mi] = { ...updated[mi], data: [...updated[mi].data] };
// // //     updated[mi].data[ci] = value;
// // //     setMatrices(updated);
// // //     if (errors.length > 0) setErrors([]);
// // //   };

// // //   const addMatrix = () => {
// // //     if (operationType === 'system' && matrices.length < 5) {
// // //       setMatrices([...matrices, {
// // //         id: matrices.length,
// // //         rows: dimensions.rows,
// // //         cols: dimensions.cols,
// // //         data: new Array(dimensions.rows * dimensions.cols).fill(''),
// // //       }]);
// // //     }
// // //   };

// // //   const removeMatrix = (mi) => {
// // //     if (operationType === 'system' && matrices.length > 2)
// // //       setMatrices(matrices.filter((_, i) => i !== mi));
// // //   };

// // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // //   const handleOperationSelect = (op) => {
// // //     setSelectedOperation(op);
// // //     setErrors([]);
// // //     setResult(null);
// // //     setComputedSteps(null);
// // //   };

// // //   const executeOperation = () => {
// // //     if (!validateInputs()) return;
// // //     setIsLoading(true);
// // //     setResult(null);
// // //     setComputedSteps(null);

// // //     setTimeout(() => {
// // //       const numericMatrices = matrices.map(m => ({
// // //         rows: m.rows,
// // //         cols: m.cols,
// // //         data: m.data.map(c => parseFloat(c)),
// // //       }));

// // //       const params = {
// // //         operation: selectedOperation,
// // //         operationType,
// // //         dimensions,
// // //         matrices: numericMatrices,
// // //         scalarValue: scalarValue !== '' ? parseFloat(scalarValue) : null,
// // //       };

// // //       const res = computeMatrix(params);
// // //       setResult(res);

// // //       if (res.type === 'error') {
// // //         setErrors([res.value]);
// // //       }

// // //       // Generate dynamic steps
// // //       const stepFn = operationSteps[operationType]?.[selectedOperation];
// // //       if (stepFn) {
// // //         // Convert flat data to 2D for steps functions
// // //         const mats2D = numericMatrices.map(m => {
// // //           const mat = [];
// // //           for (let r = 0; r < m.rows; r++) {
// // //             mat.push(m.data.slice(r * m.cols, r * m.cols + m.cols));
// // //           }
// // //           return mat;
// // //         });
// // //         const extras = {
// // //           scalarValue: params.scalarValue,
// // //         };
// // //         const stepLines = stepFn(mats2D, res, extras);
// // //         setComputedSteps(stepLines);
// // //       }

// // //       setIsLoading(false);
// // //     }, 150);
// // //   };

// // //   const canExecute = () => selectedOperation && matrices.length > 0 && !isLoading;

// // //   const needsScalarInput = () =>
// // //     operationType === 'scalar' || selectedOperation === 'Matrix Power (Scalar)';

// // //   const isSquareRequired = (op) => squareOnly.includes(op);

// // //   const isOpDisabled = (op) => {
// // //     if (!isSquareRequired(op)) return false;
// // //     const m = matrices[0];
// // //     return m && m.rows !== m.cols;
// // //   };

// // //   /* ── explanation helpers ── */
// // //   const getDescription = () => {
// // //     const pool = mergedDescriptions[operationType];
// // //     if (!pool) return '';
// // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // //     return pool._default;
// // //   };

// // //   const getExplanationHeading = () => {
// // //     if (selectedOperation) return selectedOperation;
// // //     const labels = {
// // //       single: 'Single Matrix Ops',
// // //       two: 'Two Matrix Ops',
// // //       scalar: 'Scalar Ops',
// // //       system: 'System Ops',
// // //     };
// // //     return labels[operationType] || 'Explanation';
// // //   };

// // //   /* ── left-panel button styles ── */
// // //   const catBtnStyle = (id) => ({
// // //     padding: '12px',
// // //     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// // //     borderRadius: '10px',
// // //     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
// // //     cursor: 'pointer',
// // //     textAlign: 'left',
// // //     transition: 'all 0.25s ease',
// // //     width: '100%',
// // //     boxSizing: 'border-box',
// // //   });
// // //   const catLabelStyle = (id) => ({
// // //     fontSize: '0.9rem',
// // //     fontWeight: '600',
// // //     color: operationType === id ? '#4285f4' : '#1f2937',
// // //     marginBottom: '4px',
// // //   });
// // //   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

// // //   const dimInputStyle = (val) => ({
// // //     width: '60px',
// // //     padding: '8px 12px',
// // //     border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // //     borderRadius: '8px',
// // //     fontSize: '1rem',
// // //     textAlign: 'center',
// // //     outline: 'none',
// // //   });

// // //   const getMatrixGridExtra = () => {
// // //     if (operationType === 'single') return s.matrixGridSingle;
// // //     if (operationType === 'two' || operationType === 'scalar') {
// // //       if (needsAccordion()) return s.matrixGridSingle;
// // //       return s.matrixGridTwo;
// // //     }
// // //     return s.matrixGridMultiple;
// // //   };

// // //   /* ── render a matrix card ── */
// // //   const renderMatrix = (matrix, mi, nested = false) => {
// // //     const gridStyle = {
// // //       gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
// // //       gridTemplateRows: `repeat(${matrix.rows}, 1fr)`,
// // //     };
// // //     const label = operationType === 'system' && mi === matrices.length - 1 && matrices.length > 1
// // //       ? ` (Vector)` : '';

// // //     return (
// // //       <div key={matrix.id} style={nested ? {} : s.matrixCard}>
// // //         {!nested && (
// // //           <div style={s.matrixHeader}>
// // //             <h4 style={s.matrixName}>Matrix {String.fromCharCode(65 + mi)}{label}</h4>
// // //             <div style={s.matrixHeaderRight}>
// // //               <span style={s.matrixDimLabel}>{matrix.rows} × {matrix.cols}</span>
// // //               <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// // //                 Clear
// // //               </button>
// // //               {operationType === 'system' && matrices.length > 2 && mi >= 2 && (
// // //                 <button onClick={() => removeMatrix(mi)} style={s.removeButton}>Remove</button>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}
// // //         {nested && (
// // //           <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
// // //             <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// // //               Clear
// // //             </button>
// // //           </div>
// // //         )}
// // //         <div style={s.matrixContainer}>
// // //           <div style={s.matrixContent}>
// // //             <span style={s.matrixBracket}>[</span>
// // //             <div style={{ ...s.matrixTable, ...gridStyle }}>
// // //               {matrix.data.map((cell, ci) => (
// // //                 <input
// // //                   key={ci}
// // //                   type="number"
// // //                   step="any"
// // //                   value={cell}
// // //                   onChange={(e) => updateMatrixCell(mi, ci, e.target.value)}
// // //                   placeholder="0"
// // //                   style={{
// // //                     ...s.matrixCell,
// // //                     ...(cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? s.matrixCellError : {}),
// // //                   }}
// // //                 />
// // //               ))}
// // //             </div>
// // //             <span style={s.matrixBracket}>]</span>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   /* ── render result based on type ── */
// // //   const renderResultMatrix = (matrix) => (
// // //     <table style={s.resultMatrixTable}>
// // //       <tbody>
// // //         {matrix.map((row, ri) => (
// // //           <tr key={ri}>
// // //             {row.map((val, ci) => (
// // //               <td key={ci} style={s.resultMatrixCell}>{val}</td>
// // //             ))}
// // //           </tr>
// // //         ))}
// // //       </tbody>
// // //     </table>
// // //   );

// // //   const renderResult = () => {
// // //     if (!result) return 'Select matrices and operation, then click Execute';

// // //     if (result.type === 'error') {
// // //       return <span style={s.resultError}>{result.value}</span>;
// // //     }

// // //     if (result.type === 'scalar') {
// // //       return (
// // //         <>
// // //           <span style={s.resultLabel}>{result.label}</span>
// // //           <span style={s.resultValue}>{result.value}</span>
// // //         </>
// // //       );
// // //     }

// // //     if (result.type === 'vector') {
// // //       return (
// // //         <>
// // //           <span style={s.resultLabel}>{result.label}</span>
// // //           <div style={s.resultVarRow}>
// // //             {result.value.map((val, i) => (
// // //               <span key={i} style={s.resultVarItem}>
// // //                 {result.variables ? result.variables[i] : `x${i + 1}`} = {val}
// // //               </span>
// // //             ))}
// // //           </div>
// // //           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
// // //         </>
// // //       );
// // //     }

// // //     if (result.type === 'matrix') {
// // //       return (
// // //         <>
// // //           <span style={s.resultLabel}>{result.label} ({result.rows}&times;{result.cols})</span>
// // //           {renderResultMatrix(result.value)}
// // //         </>
// // //       );
// // //     }

// // //     if (result.type === 'boolean') {
// // //       return (
// // //         <>
// // //           <span style={s.resultLabel}>{result.label}</span>
// // //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// // //             {result.value ? '\u2713 TRUE' : '\u2717 FALSE'}
// // //           </span>
// // //           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
// // //         </>
// // //       );
// // //     }

// // //     if (result.type === 'decomposition') {
// // //       return (
// // //         <div style={s.resultDecompSection}>
// // //           <span style={s.resultLabel}>{result.label}</span>
// // //           {Object.keys(result.value).map((key) => {
// // //             const part = result.value[key];
// // //             return (
// // //               <div key={key} style={{ textAlign: 'center' }}>
// // //                 <div style={s.resultDecompLabel}>{part.label}</div>
// // //                 {renderResultMatrix(part.matrix)}
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       );
// // //     }

// // //     return JSON.stringify(result.value);
// // //   };

// // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // //   return (
// // //     <div style={s.container}>
// // //       <style>{spinKeyframes}</style>
// // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // //         {/* Header */}
// // //         <div style={s.header}>
// // //           <h1 style={s.title}>Matrix Calculator</h1>
// // //           <p style={s.subtitle}>Professional matrix operations calculator</p>
// // //         </div>

// // //         {/* ── INITIAL STATE ── */}
// // //         {step === 'operation-type' && (
// // //           <div>
// // //             <h2 style={s.stepTitle}>Select Operation Type</h2>
// // //             <div style={s.operationTypeGrid}>
// // //               {operationTypes.map((type) => (
// // //                 <button
// // //                   key={type.id}
// // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // //                   style={s.operationTypeCard}
// // //                   onMouseOver={(e) => {
// // //                     e.currentTarget.style.borderColor = '#4285f4';
// // //                     e.currentTarget.style.backgroundColor = '#f8f9ff';
// // //                   }}
// // //                   onMouseOut={(e) => {
// // //                     e.currentTarget.style.borderColor = '#e5e7eb';
// // //                     e.currentTarget.style.backgroundColor = 'white';
// // //                   }}
// // //                 >
// // //                   <div style={s.operationTypeTitle}>{type.label}</div>
// // //                   <div style={s.operationTypeDescription}>{type.description}</div>
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* ── EXPANDED STATE — 3-column ── */}
// // //         {step === 'input' && (
// // //           <div style={s.threeColLayout}>

// // //             {/* ▸ LEFT — category buttons */}
// // //             <div style={s.leftPanel}>
// // //               <div style={s.leftPanelTitle}>Category</div>
// // //               {operationTypes.map((type) => (
// // //                 <button
// // //                   key={type.id}
// // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // //                   style={catBtnStyle(type.id)}
// // //                   onMouseOver={(e) => {
// // //                     if (operationType !== type.id) {
// // //                       e.currentTarget.style.borderColor = '#4285f4';
// // //                       e.currentTarget.style.backgroundColor = '#f8f9ff';
// // //                     }
// // //                   }}
// // //                   onMouseOut={(e) => {
// // //                     if (operationType !== type.id) {
// // //                       e.currentTarget.style.borderColor = '#e5e7eb';
// // //                       e.currentTarget.style.backgroundColor = 'white';
// // //                     }
// // //                   }}
// // //                 >
// // //                   <div style={catLabelStyle(type.id)}>{type.label}</div>
// // //                   <div style={catDescStyle}>{type.description}</div>
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             {/* ▸ MIDDLE — calculator */}
// // //             <div>
// // //               <div style={s.inputHeader}>
// // //                 <h2 style={s.inputTitle}>Matrix Input ({dimensions.rows}×{dimensions.cols})</h2>
// // //                 <div style={s.buttonGroup}>
// // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // //                 </div>
// // //               </div>

// // //               {/* Dimensions */}
// // //               <div style={s.dimControls}>
// // //                 <div style={s.dimGroup}>
// // //                   <label style={s.dimLabel}>Rows:</label>
// // //                   <input
// // //                     type="number" min="1" max="10"
// // //                     value={dimensions.rows}
// // //                     onChange={(e) => handleDimensionsChange('rows', e.target.value)}
// // //                     style={dimInputStyle(dimensions.rows)}
// // //                   />
// // //                 </div>
// // //                 <div style={s.dimGroup}>
// // //                   <label style={s.dimLabel}>Cols:</label>
// // //                   <input
// // //                     type="number" min="1" max="10"
// // //                     value={dimensions.cols}
// // //                     onChange={(e) => handleDimensionsChange('cols', e.target.value)}
// // //                     style={dimInputStyle(dimensions.cols)}
// // //                   />
// // //                 </div>
// // //                 <span style={s.dimHint}>
// // //                   {dimensions.rows}×{dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
// // //                 </span>
// // //                 {operationType === 'single' && dimensions.rows !== dimensions.cols && (
// // //                   <span style={s.dimWarning}>Some operations require square matrices</span>
// // //                 )}
// // //               </div>

// // //               {/* Errors */}
// // //               {errors.length > 0 && (
// // //                 <div style={s.errorSection}>
// // //                   <div style={s.errorTitle}>Please fix the following:</div>
// // //                   <ul style={s.errorList}>
// // //                     {errors.map((err, i) => (
// // //                       <li key={i} style={s.errorItem}>&bull; {err}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               )}

// // //               {/* Matrices */}
// // //               <div style={{ ...s.matrixGrid, ...getMatrixGridExtra() }}>
// // //                 {matrices.map((m, i) => {
// // //                   if (needsAccordion()) {
// // //                     const isOpen = matrixAccordionOpen[i] !== false;
// // //                     const label = operationType === 'system' && i === matrices.length - 1 && matrices.length > 1
// // //                       ? ' (Vector)' : '';
// // //                     return (
// // //                       <div key={m.id} style={s.matrixAccordion}>
// // //                         <button
// // //                           onClick={() => toggleMatrixAccordion(i)}
// // //                           style={s.matrixAccordionToggle}
// // //                         >
// // //                           <div style={s.matrixAccordionLeft}>
// // //                             <span style={s.matrixAccordionName}>Matrix {String.fromCharCode(65 + i)}{label}</span>
// // //                             <span style={s.matrixAccordionDim}>{m.rows} × {m.cols}</span>
// // //                           </div>
// // //                           <span style={{
// // //                             ...s.matrixAccordionArrow,
// // //                             transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// // //                           }}>
// // //                             ▼
// // //                           </span>
// // //                         </button>
// // //                         {isOpen && (
// // //                           <div style={s.matrixAccordionBody}>
// // //                             {renderMatrix(m, i, true)}
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     );
// // //                   }
// // //                   return renderMatrix(m, i);
// // //                 })}
// // //               </div>

// // //               {/* Add matrix (system) */}
// // //               {operationType === 'system' && matrices.length < 5 && (
// // //                 <div style={s.addMatrixContainer}>
// // //                   <button onClick={addMatrix} style={s.addMatrixButton}>+ Add Matrix</button>
// // //                 </div>
// // //               )}

// // //               {/* Scalar input */}
// // //               {needsScalarInput() && (
// // //                 <div style={s.scalarSection}>
// // //                   <label style={s.scalarLabel}>Scalar value:</label>
// // //                   <input
// // //                     type="number" step="any"
// // //                     value={scalarValue}
// // //                     onChange={(e) => setScalarValue(e.target.value)}
// // //                     placeholder="Enter value"
// // //                     style={s.scalarInput}
// // //                   />
// // //                 </div>
// // //               )}

// // //               {/* Operations */}
// // //               <div style={s.operationsSection}>
// // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // //                 <div style={s.operationsGrid}>
// // //                   {getAvailableOperations().map((op) => {
// // //                     const sel = selectedOperation === op;
// // //                     const dis = isOpDisabled(op);
// // //                     return (
// // //                       <button
// // //                         key={op}
// // //                         onClick={() => handleOperationSelect(op)}
// // //                         disabled={dis}
// // //                         style={{
// // //                           ...s.operationButton,
// // //                           ...(sel ? s.operationButtonSelected : {}),
// // //                           ...(dis ? s.operationButtonDisabled : {}),
// // //                         }}
// // //                       >
// // //                         {op}
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>

// // //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// // //                   <button
// // //                     onClick={executeOperation}
// // //                     disabled={!canExecute()}
// // //                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
// // //                   >
// // //                     {isLoading ? (
// // //                       <div style={s.loading}>
// // //                         <div style={s.spinner} />
// // //                         Calculating...
// // //                       </div>
// // //                     ) : (
// // //                       'Execute Operation'
// // //                     )}
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Result */}
// // //               <div style={s.resultsSection}>
// // //                 <h4 style={s.resultsTitle}>Result</h4>
// // //                 <div style={s.resultsContent}>
// // //                   {renderResult()}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* ▸ RIGHT — explanation panel */}
// // //             <div style={s.explanationPanel}>
// // //               {/* Theory (from merged descriptions — overridable via props) */}
// // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // //               <p style={s.explanationBody}>{getDescription()}</p>

// // //               {/* Steps (dynamic — always from matrixExplanations.js, never overridable) */}
// // //               {computedSteps && computedSteps.length > 0 && (
// // //                 <>
// // //                   <hr style={s.explanationDivider} />
// // //                   <div style={s.stepsTitle}>Calculation Steps</div>
// // //                   <ul style={s.stepsList}>
// // //                     {computedSteps.map((line, i) => (
// // //                       <li key={i} style={s.stepItem}>{line}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from 'react';
// // import computeMatrix from './computeMatrix';
// // import {
// //   descriptions as defaultDescriptions,
// //   steps as operationSteps,
// // } from './matrixExplanations';

// // /* ── styles ───────────────────────────────────────────────────── */

// // const s = {
// //   container: {
// //     minHeight: '100vh',
// //     backgroundColor: '#f8f9fa',
// //     padding: '20px',
// //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// //   },
// //   mainNarrow: {
// //     maxWidth: '800px',
// //     margin: '0 auto',
// //     backgroundColor: 'white',
// //     borderRadius: '16px',
// //     padding: '32px',
// //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// //     transition: 'max-width 0.4s ease',
// //   },
// //   mainWide: {
// //     maxWidth: 'calc(100vw - 400px)',
// //     margin: '0 auto',
// //     backgroundColor: 'white',
// //     borderRadius: '16px',
// //     padding: '32px',
// //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// //     transition: 'max-width 0.4s ease',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     marginBottom: '32px',
// //   },
// //   title: {
// //     fontSize: '2.5rem',
// //     fontWeight: '600',
// //     color: '#1a1a1a',
// //     margin: '0 0 8px 0',
// //   },
// //   subtitle: {
// //     color: '#6b7280',
// //     fontSize: '1.1rem',
// //     margin: '0',
// //   },
// //   stepTitle: {
// //     fontSize: '1.5rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     marginBottom: '24px',
// //     textAlign: 'center',
// //   },
// //   operationTypeGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: '1fr',
// //     gap: '16px',
// //   },
// //   operationTypeCard: {
// //     padding: '20px',
// //     border: '2px solid #e5e7eb',
// //     borderRadius: '12px',
// //     backgroundColor: 'white',
// //     cursor: 'pointer',
// //     textAlign: 'left',
// //     transition: 'all 0.2s ease',
// //   },
// //   operationTypeTitle: {
// //     fontSize: '1.2rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     marginBottom: '8px',
// //   },
// //   operationTypeDescription: {
// //     fontSize: '1rem',
// //     color: '#6b7280',
// //   },

// //   /* — 3-col layout — */
// //   threeColLayout: {
// //     display: 'grid',
// //     gridTemplateColumns: '200px 2fr 1fr',
// //     gap: '24px',
// //     alignItems: 'start',
// //   },
// //   leftPanel: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '10px',
// //     position: 'sticky',
// //     top: '20px',
// //   },
// //   leftPanelTitle: {
// //     fontSize: '0.95rem',
// //     fontWeight: '700',
// //     color: '#1f2937',
// //     marginBottom: '4px',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.04em',
// //   },
// //   explanationPanel: {
// //     backgroundColor: '#f0f4ff',
// //     borderRadius: '12px',
// //     padding: '24px',
// //     border: '1px solid #d0d9f0',
// //     position: 'sticky',
// //     top: '20px',
// //   },
// //   explanationTitle: {
// //     fontSize: '1.05rem',
// //     fontWeight: '700',
// //     color: '#1f2937',
// //     margin: '0 0 12px 0',
// //   },
// //   explanationBody: {
// //     fontSize: '0.95rem',
// //     lineHeight: '1.6',
// //     color: '#374151',
// //     margin: '0 0 0 0',
// //   },
// //   explanationDivider: {
// //     border: 'none',
// //     borderTop: '1px solid #d0d9f0',
// //     margin: '16px 0',
// //   },
// //   stepsTitle: {
// //     fontSize: '0.9rem',
// //     fontWeight: '700',
// //     color: '#4285f4',
// //     margin: '0 0 10px 0',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.03em',
// //   },
// //   stepsList: {
// //     listStyle: 'none',
// //     padding: '0',
// //     margin: '0',
// //   },
// //   stepItem: {
// //     fontSize: '0.88rem',
// //     lineHeight: '1.55',
// //     color: '#1f2937',
// //     fontFamily: 'monospace',
// //     padding: '3px 0',
// //     whiteSpace: 'pre-wrap',
// //   },

// //   /* — middle (calculator) — */
// //   inputHeader: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: '24px',
// //   },
// //   inputTitle: {
// //     fontSize: '1.35rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     margin: '0',
// //   },
// //   buttonGroup: { display: 'flex', gap: '12px' },

// //   /* — dimension controls — */
// //   dimControls: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: '24px',
// //     marginBottom: '24px',
// //     padding: '14px',
// //     backgroundColor: '#f0f7ff',
// //     borderRadius: '8px',
// //     border: '1px solid #e0e7ff',
// //     flexWrap: 'wrap',
// //   },
// //   dimGroup: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //   },
// //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },
// //   dimWarning: { fontSize: '0.85rem', color: '#dc2626', fontWeight: '500' },

// //   /* — matrix grid — */
// //   matrixGrid: {
// //     display: 'grid',
// //     gap: '24px',
// //     marginBottom: '24px',
// //   },
// //   matrixGridSingle: { gridTemplateColumns: '1fr' },
// //   matrixGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' },
// //   matrixGridMultiple: { gridTemplateColumns: '1fr' },
// //   matrixCard: {
// //     backgroundColor: '#f8f9fa',
// //     padding: '20px',
// //     borderRadius: '12px',
// //     border: '1px solid #e5e7eb',
// //   },
// //   matrixHeader: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: '16px',
// //   },
// //   matrixName: {
// //     margin: '0',
// //     fontSize: '1.1rem',
// //     fontWeight: '600',
// //     color: '#374151',
// //   },
// //   matrixHeaderRight: {
// //     display: 'flex',
// //     gap: '8px',
// //     alignItems: 'center',
// //   },
// //   matrixDimLabel: {
// //     fontSize: '0.85rem',
// //     color: '#6b7280',
// //     fontWeight: '500',
// //   },
// //   matrixContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   matrixContent: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //   },
// //   matrixBracket: {
// //     fontSize: '2rem',
// //     fontWeight: 'bold',
// //     color: '#374151',
// //     lineHeight: '1',
// //   },
// //   matrixTable: {
// //     display: 'grid',
// //     gap: '4px',
// //     padding: '8px',
// //   },
// //   matrixCell: {
// //     width: '50px',
// //     height: '35px',
// //     padding: '4px',
// //     border: '1px solid #d1d5db',
// //     borderRadius: '4px',
// //     textAlign: 'center',
// //     fontSize: '0.85rem',
// //     backgroundColor: 'white',
// //     outline: 'none',
// //   },
// //   matrixCellError: {
// //     borderColor: '#dc2626',
// //     backgroundColor: '#fef2f2',
// //   },

// //   /* — operations — */
// //   operationsSection: { marginBottom: '24px' },
// //   operationsTitle: {
// //     fontSize: '1.1rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     marginBottom: '16px',
// //   },
// //   operationsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
// //     gap: '8px',
// //     marginBottom: '24px',
// //   },
// //   operationButton: {
// //     padding: '10px 12px',
// //     border: '2px solid #e5e7eb',
// //     borderRadius: '8px',
// //     backgroundColor: 'white',
// //     color: '#374151',
// //     fontSize: '0.85rem',
// //     fontWeight: '500',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //     textAlign: 'center',
// //   },
// //   operationButtonSelected: {
// //     borderColor: '#4285f4',
// //     backgroundColor: '#f0f7ff',
// //     color: '#4285f4',
// //   },
// //   operationButtonDisabled: {
// //     backgroundColor: '#f3f4f6',
// //     color: '#9ca3af',
// //     cursor: 'not-allowed',
// //     borderColor: '#e5e7eb',
// //   },

// //   /* — scalar input — */
// //   scalarSection: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: '12px',
// //     marginBottom: '16px',
// //     padding: '12px',
// //     backgroundColor: '#f0f7ff',
// //     borderRadius: '8px',
// //     border: '1px solid #e0e7ff',
// //   },
// //   scalarLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// //   scalarInput: {
// //     width: '80px',
// //     padding: '8px 12px',
// //     border: '1px solid #d1d5db',
// //     borderRadius: '6px',
// //     textAlign: 'center',
// //     fontSize: '1rem',
// //     outline: 'none',
// //   },

// //   /* — execute — */
// //   executeButton: {
// //     padding: '12px 32px',
// //     border: 'none',
// //     borderRadius: '8px',
// //     backgroundColor: '#4285f4',
// //     color: 'white',
// //     fontSize: '1rem',
// //     fontWeight: '500',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //     marginBottom: '24px',
// //   },
// //   executeButtonDisabled: {
// //     backgroundColor: '#9ca3af',
// //     cursor: 'not-allowed',
// //   },

// //   /* — results — */
// //   resultsSection: {
// //     backgroundColor: '#f9fafb',
// //     padding: '16px',
// //     borderRadius: '8px',
// //     border: '1px solid #e5e7eb',
// //   },
// //   resultsTitle: {
// //     margin: '0 0 12px 0',
// //     fontSize: '1.05rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //   },
// //   resultsContent: {
// //     minHeight: '60px',
// //     backgroundColor: 'white',
// //     padding: '12px',
// //     borderRadius: '6px',
// //     border: '1px solid #d1d5db',
// //     fontSize: '1rem',
// //     color: '#374151',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     flexDirection: 'column',
// //     gap: '8px',
// //   },
// //   resultLabel: {
// //     fontSize: '0.85rem',
// //     color: '#6b7280',
// //     fontStyle: 'italic',
// //   },
// //   resultValue: {
// //     fontSize: '1.1rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     fontFamily: 'monospace',
// //   },
// //   resultError: {
// //     color: '#dc2626',
// //     fontWeight: '500',
// //     fontSize: '0.95rem',
// //   },
// //   resultTrue: {
// //     color: '#059669',
// //     fontWeight: '600',
// //     fontSize: '1rem',
// //   },
// //   resultFalse: {
// //     color: '#dc2626',
// //     fontWeight: '600',
// //     fontSize: '1rem',
// //   },
// //   resultDetail: {
// //     fontSize: '0.9rem',
// //     color: '#374151',
// //     textAlign: 'center',
// //     whiteSpace: 'pre-wrap',
// //   },
// //   resultMatrixTable: {
// //     borderCollapse: 'collapse',
// //     fontFamily: 'monospace',
// //     fontSize: '0.9rem',
// //   },
// //   resultMatrixCell: {
// //     padding: '5px 10px',
// //     textAlign: 'right',
// //     border: '1px solid #e5e7eb',
// //   },
// //   resultDecompSection: {
// //     width: '100%',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '16px',
// //     alignItems: 'center',
// //   },
// //   resultDecompLabel: {
// //     fontSize: '0.9rem',
// //     fontWeight: '700',
// //     color: '#4285f4',
// //     marginBottom: '4px',
// //   },
// //   resultVarRow: {
// //     display: 'flex',
// //     gap: '16px',
// //     flexWrap: 'wrap',
// //     justifyContent: 'center',
// //   },
// //   resultVarItem: {
// //     fontSize: '1rem',
// //     fontFamily: 'monospace',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //   },

// //   /* — errors — */
// //   errorSection: {
// //     backgroundColor: '#fef2f2',
// //     border: '1px solid #fecaca',
// //     borderRadius: '8px',
// //     padding: '16px',
// //     marginBottom: '16px',
// //   },
// //   errorTitle: {
// //     color: '#dc2626',
// //     fontWeight: '600',
// //     fontSize: '1rem',
// //     margin: '0 0 8px 0',
// //   },
// //   errorList: { listStyle: 'none', padding: '0', margin: '0' },
// //   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

// //   /* — buttons — */
// //   buttonDanger: {
// //     padding: '8px 16px',
// //     borderRadius: '6px',
// //     fontSize: '0.9rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //     border: '2px solid #dc2626',
// //     backgroundColor: 'transparent',
// //     color: '#dc2626',
// //   },
// //   clearMatrixButton: {
// //     padding: '3px 8px',
// //     border: '1px solid #9ca3af',
// //     borderRadius: '4px',
// //     backgroundColor: 'transparent',
// //     color: '#6b7280',
// //     fontSize: '0.75rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.15s ease',
// //   },
// //   randomMatrixButton: {
// //     padding: '3px 8px',
// //     border: '1px solid #4285f4',
// //     borderRadius: '4px',
// //     backgroundColor: 'transparent',
// //     color: '#4285f4',
// //     fontSize: '0.75rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.15s ease',
// //   },
// //   removeButton: {
// //     padding: '3px 8px',
// //     border: 'none',
// //     borderRadius: '4px',
// //     backgroundColor: '#dc2626',
// //     color: 'white',
// //     fontSize: '0.75rem',
// //     cursor: 'pointer',
// //   },
// //   addMatrixContainer: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     marginBottom: '24px',
// //   },
// //   addMatrixButton: {
// //     padding: '8px 16px',
// //     border: '2px dashed #4285f4',
// //     borderRadius: '8px',
// //     backgroundColor: 'transparent',
// //     color: '#4285f4',
// //     fontSize: '0.9rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //   },

// //   /* — loading — */
// //   loading: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     gap: '8px',
// //   },
// //   spinner: {
// //     width: '16px',
// //     height: '16px',
// //     border: '2px solid #e5e7eb',
// //     borderTop: '2px solid #4285f4',
// //     borderRadius: '50%',
// //     animation: 'spin 1s linear infinite',
// //   },

// //   /* — matrix accordion (two matrices, cols > 5) — */
// //   matrixAccordion: {
// //     border: '1px solid #e5e7eb',
// //     borderRadius: '12px',
// //     overflow: 'hidden',
// //     marginBottom: '0',
// //   },
// //   matrixAccordionToggle: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     width: '100%',
// //     padding: '14px 20px',
// //     border: 'none',
// //     backgroundColor: '#f8f9fa',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.15s ease',
// //   },
// //   matrixAccordionLeft: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   matrixAccordionName: {
// //     fontSize: '1.1rem',
// //     fontWeight: '600',
// //     color: '#374151',
// //     margin: 0,
// //   },
// //   matrixAccordionDim: {
// //     fontSize: '0.85rem',
// //     color: '#6b7280',
// //     fontWeight: '500',
// //   },
// //   matrixAccordionArrow: {
// //     fontSize: '0.75rem',
// //     color: '#6b7280',
// //     transition: 'transform 0.2s ease',
// //   },
// //   matrixAccordionBody: {
// //     padding: '0 20px 20px 20px',
// //     backgroundColor: '#f8f9fa',
// //   },
// // };

// // const spinKeyframes = `
// // @keyframes spin {
// //   0% { transform: rotate(0deg); }
// //   100% { transform: rotate(360deg); }
// // }`;

// // /* ── component ────────────────────────────────────────────────── */

// // export default function MatrixCalculator({ descriptions: descriptionsProp } = {}) {
// //   const [step, setStep] = useState('operation-type');
// //   const [operationType, setOperationType] = useState('');
// //   const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
// //   const [matrices, setMatrices] = useState([]);
// //   const [selectedOperation, setSelectedOperation] = useState('');
// //   const [scalarValue, setScalarValue] = useState('');
// //   const [result, setResult] = useState(null);
// //   const [errors, setErrors] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [matrixAccordionOpen, setMatrixAccordionOpen] = useState({});
// //   const [computedSteps, setComputedSteps] = useState(null);

// //   /* ── merge descriptions: props override defaults ── */
// //   const mergedDescriptions = descriptionsProp
// //     ? Object.keys(defaultDescriptions).reduce((acc, cat) => {
// //         acc[cat] = {
// //           ...defaultDescriptions[cat],
// //           ...(descriptionsProp[cat] || {}),
// //         };
// //         return acc;
// //       }, {})
// //     : defaultDescriptions;

// //   const toggleMatrixAccordion = (mi) => {
// //     setMatrixAccordionOpen(prev => ({ ...prev, [mi]: !prev[mi] }));
// //   };

// //   const needsAccordion = () => operationType === 'two' && dimensions.cols > 5;

// //   const operationTypes = [
// //     { id: 'single', label: 'Single Matrix', description: 'Determinant, transpose, inverse, trace, rank' },
// //     { id: 'two', label: 'Two Matrices', description: 'Addition, subtraction, multiplication' },
// //     { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, addition, power' },
// //     { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' },
// //   ];

// //   const operationsByType = {
// //     single: [
// //       'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank',
// //       'LU Decomposition',
// //     ],
// //     two: [
// //       'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
// //       'Kronecker Product', 'Commutator', 'Anti-commutator',
// //     ],
// //     scalar: [
// //       'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
// //       'Matrix Power (Scalar)',
// //     ],
// //     system: [
// //       'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
// //       "Cramer's Rule", 'Matrix Equation AX=B', 'Least Squares Solution',
// //     ],
// //   };

// //   const squareOnly = ['Determinant', 'Inverse', 'Trace', 'LU Decomposition'];

// //   /* ── validation ── */

// //   const validateInputs = () => {
// //     const newErrors = [];
// //     if (!selectedOperation) newErrors.push('Please select an operation');

// //     matrices.forEach((matrix, index) => {
// //       const name = String.fromCharCode(65 + index);
// //       const total = matrix.rows * matrix.cols;
// //       const empty = matrix.data.filter(c => c === '' || c === null || c === undefined).length;
// //       const valid = matrix.data.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// //       if (empty > 0) newErrors.push(`Matrix ${name} has empty cells`);
// //       if (valid !== total) newErrors.push(`Matrix ${name} contains invalid numbers`);
// //     });

// //     if (operationType === 'two' && matrices.length === 2) {
// //       const [a, b] = matrices;
// //       if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
// //         if (a.rows !== b.rows || a.cols !== b.cols)
// //           newErrors.push('Matrices must have the same dimensions for this operation');
// //       }
// //       if (selectedOperation === 'Multiplication') {
// //         if (a.cols !== b.rows)
// //           newErrors.push('For multiplication, columns of A must equal rows of B');
// //       }
// //     }

// //     if (operationType === 'single' && squareOnly.includes(selectedOperation)) {
// //       const m = matrices[0];
// //       if (m && m.rows !== m.cols) newErrors.push('This operation requires a square matrix');
// //     }

// //     if (operationType === 'scalar') {
// //       if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(parseFloat(scalarValue)))
// //         newErrors.push('Please enter a valid scalar value');
// //     }

// //     setErrors(newErrors);
// //     return newErrors.length === 0;
// //   };

// //   /* ── handlers ── */

// //   const handleReset = () => {
// //     setStep('operation-type');
// //     setOperationType('');
// //     setDimensions({ rows: 3, cols: 3 });
// //     setMatrices([]);
// //     setSelectedOperation('');
// //     setScalarValue('');
// //     setResult(null);
// //     setErrors([]);
// //     setIsLoading(false);
// //     setComputedSteps(null);
// //   };

// //   const clearMatrix = (mi) => {
// //     const updated = [...matrices];
// //     updated[mi] = { ...updated[mi], data: new Array(updated[mi].rows * updated[mi].cols).fill('') };
// //     setMatrices(updated);
// //   };

// //   const randomizeMatrix = (mi) => {
// //     const updated = [...matrices];
// //     const total = updated[mi].rows * updated[mi].cols;
// //     updated[mi] = {
// //       ...updated[mi],
// //       data: Array.from({ length: total }, () => String(Math.floor(Math.random() * 21) - 10)),
// //     };
// //     setMatrices(updated);
// //   };

// //   const handleOperationTypeSelect = (type) => {
// //     setOperationType(type);
// //     setSelectedOperation('');
// //     setErrors([]);
// //     setResult(null);
// //     setComputedSteps(null);
// //     setMatrixAccordionOpen({ 0: true, 1: true });

// //     let count = 1;
// //     if (type === 'two') count = 2;
// //     if (type === 'system') count = 2;

// //     const initialMatrices = Array(count).fill(null).map((_, i) => ({
// //       id: i,
// //       rows: dimensions.rows,
// //       cols: type === 'system' && i === count - 1 ? 1 : dimensions.cols,
// //       data: new Array(dimensions.rows * (type === 'system' && i === count - 1 ? 1 : dimensions.cols)).fill(''),
// //     }));
// //     setMatrices(initialMatrices);
// //     setStep('input');
// //   };

// //   const handleDimensionsChange = (dim, value) => {
// //     if (value === '') {
// //       setDimensions(prev => ({ ...prev, [dim]: '' }));
// //       return;
// //     }
// //     const val = parseInt(value);
// //     const newDims = { ...dimensions, [dim]: val };
// //     setDimensions(newDims);

// //     if (newDims.rows >= 1 && newDims.rows <= 10 && newDims.cols >= 1 && newDims.cols <= 10) {
// //       const updated = matrices.map((matrix, i) => {
// //         const nr = newDims.rows;
// //         const nc = operationType === 'system' && i === matrices.length - 1 ? 1 : newDims.cols;
// //         const newData = new Array(nr * nc).fill('');
// //         for (let r = 0; r < Math.min(matrix.rows, nr); r++) {
// //           for (let c = 0; c < Math.min(matrix.cols, nc); c++) {
// //             const oi = r * matrix.cols + c;
// //             const ni = r * nc + c;
// //             if (oi < matrix.data.length) newData[ni] = matrix.data[oi];
// //           }
// //         }
// //         return { ...matrix, rows: nr, cols: nc, data: newData };
// //       });
// //       setMatrices(updated);
// //       setErrors([]);
// //     } else {
// //       const errs = [];
// //       if (newDims.rows < 1 || newDims.rows > 10) errs.push('Rows must be between 1 and 10');
// //       if (newDims.cols < 1 || newDims.cols > 10) errs.push('Columns must be between 1 and 10');
// //       setErrors(errs);
// //     }
// //   };

// //   const updateMatrixCell = (mi, ci, value) => {
// //     const updated = [...matrices];
// //     updated[mi] = { ...updated[mi], data: [...updated[mi].data] };
// //     updated[mi].data[ci] = value;
// //     setMatrices(updated);
// //     if (errors.length > 0) setErrors([]);
// //   };

// //   const addMatrix = () => {
// //     if (operationType === 'system' && matrices.length < 5) {
// //       setMatrices([...matrices, {
// //         id: matrices.length,
// //         rows: dimensions.rows,
// //         cols: dimensions.cols,
// //         data: new Array(dimensions.rows * dimensions.cols).fill(''),
// //       }]);
// //     }
// //   };

// //   const removeMatrix = (mi) => {
// //     if (operationType === 'system' && matrices.length > 2)
// //       setMatrices(matrices.filter((_, i) => i !== mi));
// //   };

// //   const getAvailableOperations = () => operationsByType[operationType] || [];

// //   const handleOperationSelect = (op) => {
// //     setSelectedOperation(op);
// //     setErrors([]);
// //     setResult(null);
// //     setComputedSteps(null);
// //   };

// //   const executeOperation = () => {
// //     if (!validateInputs()) return;
// //     setIsLoading(true);
// //     setResult(null);
// //     setComputedSteps(null);

// //     setTimeout(() => {
// //       const numericMatrices = matrices.map(m => ({
// //         rows: m.rows,
// //         cols: m.cols,
// //         data: m.data.map(c => parseFloat(c)),
// //       }));

// //       const params = {
// //         operation: selectedOperation,
// //         operationType,
// //         dimensions,
// //         matrices: numericMatrices,
// //         scalarValue: scalarValue !== '' ? parseFloat(scalarValue) : null,
// //       };

// //       const res = computeMatrix(params);
// //       setResult(res);

// //       if (res.type === 'error') {
// //         setErrors([res.value]);
// //       }

// //       // Generate dynamic steps
// //       const stepFn = operationSteps[operationType]?.[selectedOperation];
// //       if (stepFn) {
// //         // Convert flat data to 2D for steps functions
// //         const mats2D = numericMatrices.map(m => {
// //           const mat = [];
// //           for (let r = 0; r < m.rows; r++) {
// //             mat.push(m.data.slice(r * m.cols, r * m.cols + m.cols));
// //           }
// //           return mat;
// //         });
// //         const extras = {
// //           scalarValue: params.scalarValue,
// //         };
// //         const stepLines = stepFn(mats2D, res, extras);
// //         setComputedSteps(stepLines);
// //       }

// //       setIsLoading(false);
// //     }, 150);
// //   };

// //   const canExecute = () => selectedOperation && matrices.length > 0 && !isLoading;

// //   const needsScalarInput = () =>
// //     operationType === 'scalar' || selectedOperation === 'Matrix Power (Scalar)';

// //   const isSquareRequired = (op) => squareOnly.includes(op);

// //   const isOpDisabled = (op) => {
// //     if (!isSquareRequired(op)) return false;
// //     const m = matrices[0];
// //     return m && m.rows !== m.cols;
// //   };

// //   /* ── explanation helpers ── */
// //   const getDescription = () => {
// //     const pool = mergedDescriptions[operationType];
// //     if (!pool) return '';
// //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// //     return pool._default;
// //   };

// //   const getExplanationHeading = () => {
// //     if (selectedOperation) return selectedOperation;
// //     const labels = {
// //       single: 'Single Matrix Ops',
// //       two: 'Two Matrix Ops',
// //       scalar: 'Scalar Ops',
// //       system: 'System Ops',
// //     };
// //     return labels[operationType] || 'Explanation';
// //   };

// //   /* ── left-panel button styles ── */
// //   const catBtnStyle = (id) => ({
// //     padding: '12px',
// //     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// //     borderRadius: '10px',
// //     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
// //     cursor: 'pointer',
// //     textAlign: 'left',
// //     transition: 'all 0.25s ease',
// //     width: '100%',
// //     boxSizing: 'border-box',
// //   });
// //   const catLabelStyle = (id) => ({
// //     fontSize: '0.9rem',
// //     fontWeight: '600',
// //     color: operationType === id ? '#4285f4' : '#1f2937',
// //     marginBottom: '4px',
// //   });
// //   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

// //   const dimInputStyle = (val) => ({
// //     width: '60px',
// //     padding: '8px 12px',
// //     border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// //     borderRadius: '8px',
// //     fontSize: '1rem',
// //     textAlign: 'center',
// //     outline: 'none',
// //   });

// //   const getMatrixGridExtra = () => {
// //     if (operationType === 'single') return s.matrixGridSingle;
// //     if (operationType === 'two' || operationType === 'scalar') {
// //       if (needsAccordion()) return s.matrixGridSingle;
// //       return s.matrixGridTwo;
// //     }
// //     return s.matrixGridMultiple;
// //   };

// //   /* ── render a matrix card ── */
// //   const renderMatrix = (matrix, mi, nested = false) => {
// //     const gridStyle = {
// //       gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
// //       gridTemplateRows: `repeat(${matrix.rows}, 1fr)`,
// //     };
// //     const label = operationType === 'system' && mi === matrices.length - 1 && matrices.length > 1
// //       ? ` (Vector)` : '';

// //     return (
// //       <div key={matrix.id} style={nested ? {} : s.matrixCard}>
// //         {!nested && (
// //           <div style={s.matrixHeader}>
// //             <h4 style={s.matrixName}>Matrix {String.fromCharCode(65 + mi)}{label}</h4>
// //             <div style={s.matrixHeaderRight}>
// //               <span style={s.matrixDimLabel}>{matrix.rows} × {matrix.cols}</span>
// //               <button onClick={() => randomizeMatrix(mi)} style={s.randomMatrixButton} title="Fill with random numbers">
// //                 Random
// //               </button>
// //               <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// //                 Clear
// //               </button>
// //               {operationType === 'system' && matrices.length > 2 && mi >= 2 && (
// //                 <button onClick={() => removeMatrix(mi)} style={s.removeButton}>Remove</button>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //         {nested && (
// //           <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginBottom: '8px' }}>
// //             <button onClick={() => randomizeMatrix(mi)} style={s.randomMatrixButton} title="Fill with random numbers">
// //               Random
// //             </button>
// //             <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
// //               Clear
// //             </button>
// //           </div>
// //         )}
// //         <div style={s.matrixContainer}>
// //           <div style={s.matrixContent}>
// //             <span style={s.matrixBracket}>[</span>
// //             <div style={{ ...s.matrixTable, ...gridStyle }}>
// //               {matrix.data.map((cell, ci) => (
// //                 <input
// //                   key={ci}
// //                   type="number"
// //                   step="any"
// //                   value={cell}
// //                   onChange={(e) => updateMatrixCell(mi, ci, e.target.value)}
// //                   placeholder="0"
// //                   style={{
// //                     ...s.matrixCell,
// //                     ...(cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? s.matrixCellError : {}),
// //                   }}
// //                 />
// //               ))}
// //             </div>
// //             <span style={s.matrixBracket}>]</span>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   /* ── render result based on type ── */
// //   const renderResultMatrix = (matrix) => (
// //     <table style={s.resultMatrixTable}>
// //       <tbody>
// //         {matrix.map((row, ri) => (
// //           <tr key={ri}>
// //             {row.map((val, ci) => (
// //               <td key={ci} style={s.resultMatrixCell}>{val}</td>
// //             ))}
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );

// //   const renderResult = () => {
// //     if (!result) return 'Select matrices and operation, then click Execute';

// //     if (result.type === 'error') {
// //       return <span style={s.resultError}>{result.value}</span>;
// //     }

// //     if (result.type === 'scalar') {
// //       return (
// //         <>
// //           <span style={s.resultLabel}>{result.label}</span>
// //           <span style={s.resultValue}>{result.value}</span>
// //         </>
// //       );
// //     }

// //     if (result.type === 'vector') {
// //       return (
// //         <>
// //           <span style={s.resultLabel}>{result.label}</span>
// //           <div style={s.resultVarRow}>
// //             {result.value.map((val, i) => (
// //               <span key={i} style={s.resultVarItem}>
// //                 {result.variables ? result.variables[i] : `x${i + 1}`} = {val}
// //               </span>
// //             ))}
// //           </div>
// //           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
// //         </>
// //       );
// //     }

// //     if (result.type === 'matrix') {
// //       return (
// //         <>
// //           <span style={s.resultLabel}>{result.label} ({result.rows}&times;{result.cols})</span>
// //           {renderResultMatrix(result.value)}
// //         </>
// //       );
// //     }

// //     if (result.type === 'boolean') {
// //       return (
// //         <>
// //           <span style={s.resultLabel}>{result.label}</span>
// //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// //             {result.value ? '\u2713 TRUE' : '\u2717 FALSE'}
// //           </span>
// //           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
// //         </>
// //       );
// //     }

// //     if (result.type === 'decomposition') {
// //       return (
// //         <div style={s.resultDecompSection}>
// //           <span style={s.resultLabel}>{result.label}</span>
// //           {Object.keys(result.value).map((key) => {
// //             const part = result.value[key];
// //             return (
// //               <div key={key} style={{ textAlign: 'center' }}>
// //                 <div style={s.resultDecompLabel}>{part.label}</div>
// //                 {renderResultMatrix(part.matrix)}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       );
// //     }

// //     return JSON.stringify(result.value);
// //   };

// //   /* ── JSX ─────────────────────────────────────────────────────── */

// //   return (
// //     <div style={s.container}>
// //       <style>{spinKeyframes}</style>
// //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// //         {/* Header */}
// //         <div style={s.header}>
// //           <h1 style={s.title}>Matrix Calculator</h1>
// //           <p style={s.subtitle}>Professional matrix operations calculator</p>
// //         </div>

// //         {/* ── INITIAL STATE ── */}
// //         {step === 'operation-type' && (
// //           <div>
// //             <h2 style={s.stepTitle}>Select Operation Type</h2>
// //             <div style={s.operationTypeGrid}>
// //               {operationTypes.map((type) => (
// //                 <button
// //                   key={type.id}
// //                   onClick={() => handleOperationTypeSelect(type.id)}
// //                   style={s.operationTypeCard}
// //                   onMouseOver={(e) => {
// //                     e.currentTarget.style.borderColor = '#4285f4';
// //                     e.currentTarget.style.backgroundColor = '#f8f9ff';
// //                   }}
// //                   onMouseOut={(e) => {
// //                     e.currentTarget.style.borderColor = '#e5e7eb';
// //                     e.currentTarget.style.backgroundColor = 'white';
// //                   }}
// //                 >
// //                   <div style={s.operationTypeTitle}>{type.label}</div>
// //                   <div style={s.operationTypeDescription}>{type.description}</div>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* ── EXPANDED STATE — 3-column ── */}
// //         {step === 'input' && (
// //           <div style={s.threeColLayout}>

// //             {/* ▸ LEFT — category buttons */}
// //             <div style={s.leftPanel}>
// //               <div style={s.leftPanelTitle}>Category</div>
// //               {operationTypes.map((type) => (
// //                 <button
// //                   key={type.id}
// //                   onClick={() => handleOperationTypeSelect(type.id)}
// //                   style={catBtnStyle(type.id)}
// //                   onMouseOver={(e) => {
// //                     if (operationType !== type.id) {
// //                       e.currentTarget.style.borderColor = '#4285f4';
// //                       e.currentTarget.style.backgroundColor = '#f8f9ff';
// //                     }
// //                   }}
// //                   onMouseOut={(e) => {
// //                     if (operationType !== type.id) {
// //                       e.currentTarget.style.borderColor = '#e5e7eb';
// //                       e.currentTarget.style.backgroundColor = 'white';
// //                     }
// //                   }}
// //                 >
// //                   <div style={catLabelStyle(type.id)}>{type.label}</div>
// //                   <div style={catDescStyle}>{type.description}</div>
// //                 </button>
// //               ))}
// //             </div>

// //             {/* ▸ MIDDLE — calculator */}
// //             <div>
// //               <div style={s.inputHeader}>
// //                 <h2 style={s.inputTitle}>Matrix Input ({dimensions.rows}×{dimensions.cols})</h2>
// //                 <div style={s.buttonGroup}>
// //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// //                 </div>
// //               </div>

// //               {/* Dimensions */}
// //               <div style={s.dimControls}>
// //                 <div style={s.dimGroup}>
// //                   <label style={s.dimLabel}>Rows:</label>
// //                   <input
// //                     type="number" min="1" max="10"
// //                     value={dimensions.rows}
// //                     onChange={(e) => handleDimensionsChange('rows', e.target.value)}
// //                     style={dimInputStyle(dimensions.rows)}
// //                   />
// //                 </div>
// //                 <div style={s.dimGroup}>
// //                   <label style={s.dimLabel}>Cols:</label>
// //                   <input
// //                     type="number" min="1" max="10"
// //                     value={dimensions.cols}
// //                     onChange={(e) => handleDimensionsChange('cols', e.target.value)}
// //                     style={dimInputStyle(dimensions.cols)}
// //                   />
// //                 </div>
// //                 <span style={s.dimHint}>
// //                   {dimensions.rows}×{dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
// //                 </span>
// //                 {operationType === 'single' && dimensions.rows !== dimensions.cols && (
// //                   <span style={s.dimWarning}>Some operations require square matrices</span>
// //                 )}
// //               </div>

// //               {/* Errors */}
// //               {errors.length > 0 && (
// //                 <div style={s.errorSection}>
// //                   <div style={s.errorTitle}>Please fix the following:</div>
// //                   <ul style={s.errorList}>
// //                     {errors.map((err, i) => (
// //                       <li key={i} style={s.errorItem}>&bull; {err}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}

// //               {/* Matrices */}
// //               <div style={{ ...s.matrixGrid, ...getMatrixGridExtra() }}>
// //                 {matrices.map((m, i) => {
// //                   if (needsAccordion()) {
// //                     const isOpen = matrixAccordionOpen[i] !== false;
// //                     const label = operationType === 'system' && i === matrices.length - 1 && matrices.length > 1
// //                       ? ' (Vector)' : '';
// //                     return (
// //                       <div key={m.id} style={s.matrixAccordion}>
// //                         <button
// //                           onClick={() => toggleMatrixAccordion(i)}
// //                           style={s.matrixAccordionToggle}
// //                         >
// //                           <div style={s.matrixAccordionLeft}>
// //                             <span style={s.matrixAccordionName}>Matrix {String.fromCharCode(65 + i)}{label}</span>
// //                             <span style={s.matrixAccordionDim}>{m.rows} × {m.cols}</span>
// //                           </div>
// //                           <span style={{
// //                             ...s.matrixAccordionArrow,
// //                             transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// //                           }}>
// //                             ▼
// //                           </span>
// //                         </button>
// //                         {isOpen && (
// //                           <div style={s.matrixAccordionBody}>
// //                             {renderMatrix(m, i, true)}
// //                           </div>
// //                         )}
// //                       </div>
// //                     );
// //                   }
// //                   return renderMatrix(m, i);
// //                 })}
// //               </div>

// //               {/* Add matrix (system) */}
// //               {operationType === 'system' && matrices.length < 5 && (
// //                 <div style={s.addMatrixContainer}>
// //                   <button onClick={addMatrix} style={s.addMatrixButton}>+ Add Matrix</button>
// //                 </div>
// //               )}

// //               {/* Scalar input */}
// //               {needsScalarInput() && (
// //                 <div style={s.scalarSection}>
// //                   <label style={s.scalarLabel}>Scalar value:</label>
// //                   <input
// //                     type="number" step="any"
// //                     value={scalarValue}
// //                     onChange={(e) => setScalarValue(e.target.value)}
// //                     placeholder="Enter value"
// //                     style={s.scalarInput}
// //                   />
// //                 </div>
// //               )}

// //               {/* Operations */}
// //               <div style={s.operationsSection}>
// //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// //                 <div style={s.operationsGrid}>
// //                   {getAvailableOperations().map((op) => {
// //                     const sel = selectedOperation === op;
// //                     const dis = isOpDisabled(op);
// //                     return (
// //                       <button
// //                         key={op}
// //                         onClick={() => handleOperationSelect(op)}
// //                         disabled={dis}
// //                         style={{
// //                           ...s.operationButton,
// //                           ...(sel ? s.operationButtonSelected : {}),
// //                           ...(dis ? s.operationButtonDisabled : {}),
// //                         }}
// //                       >
// //                         {op}
// //                       </button>
// //                     );
// //                   })}
// //                 </div>

// //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// //                   <button
// //                     onClick={executeOperation}
// //                     disabled={!canExecute()}
// //                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
// //                   >
// //                     {isLoading ? (
// //                       <div style={s.loading}>
// //                         <div style={s.spinner} />
// //                         Calculating...
// //                       </div>
// //                     ) : (
// //                       'Execute Operation'
// //                     )}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Result */}
// //               <div style={s.resultsSection}>
// //                 <h4 style={s.resultsTitle}>Result</h4>
// //                 <div style={s.resultsContent}>
// //                   {renderResult()}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ▸ RIGHT — explanation panel */}
// //             <div style={s.explanationPanel}>
// //               {/* Theory (from merged descriptions — overridable via props) */}
// //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// //               <p style={s.explanationBody}>{getDescription()}</p>

// //               {/* Steps (dynamic — always from matrixExplanations.js, never overridable) */}
// //               {computedSteps && computedSteps.length > 0 && (
// //                 <>
// //                   <hr style={s.explanationDivider} />
// //                   <div style={s.stepsTitle}>Calculation Steps</div>
// //                   <ul style={s.stepsList}>
// //                     {computedSteps.map((line, i) => (
// //                       <li key={i} style={s.stepItem}>{line}</li>
// //                     ))}
// //                   </ul>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState } from 'react';
// import computeMatrix from './computeMatrix';
// import { processContent } from '../../../utils/contentProcessor';
// import {
//   descriptions as defaultDescriptions,
//   steps as operationSteps,
// } from './matrixExplanations';

// /* ── styles ───────────────────────────────────────────────────── */

// const s = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#f8f9fa',
//     padding: '20px',
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },
//   mainNarrow: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     backgroundColor: 'white',
//     borderRadius: '16px',
//     padding: '32px',
//     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//     transition: 'max-width 0.4s ease',
//   },
//   mainWide: {
//     maxWidth: 'calc(100vw - 400px)',
//     margin: '0 auto',
//     backgroundColor: 'white',
//     borderRadius: '16px',
//     padding: '32px',
//     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//     transition: 'max-width 0.4s ease',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '32px',
//   },
//   title: {
//     fontSize: '2.5rem',
//     fontWeight: '600',
//     color: '#1a1a1a',
//     margin: '0 0 8px 0',
//   },
//   subtitle: {
//     color: '#6b7280',
//     fontSize: '1.1rem',
//     margin: '0',
//   },
//   stepTitle: {
//     fontSize: '1.5rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: '24px',
//     textAlign: 'center',
//   },
//   operationTypeGrid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr',
//     gap: '16px',
//   },
//   operationTypeCard: {
//     padding: '20px',
//     border: '2px solid #e5e7eb',
//     borderRadius: '12px',
//     backgroundColor: 'white',
//     cursor: 'pointer',
//     textAlign: 'left',
//     transition: 'all 0.2s ease',
//   },
//   operationTypeTitle: {
//     fontSize: '1.2rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: '8px',
//   },
//   operationTypeDescription: {
//     fontSize: '1rem',
//     color: '#6b7280',
//   },

//   /* — 3-col layout — */
//   threeColLayout: {
//     display: 'grid',
//     gridTemplateColumns: '200px 2fr 1fr',
//     gap: '24px',
//     alignItems: 'start',
//   },
//   leftPanel: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//     position: 'sticky',
//     top: '20px',
//   },
//   leftPanelTitle: {
//     fontSize: '0.95rem',
//     fontWeight: '700',
//     color: '#1f2937',
//     marginBottom: '4px',
//     textTransform: 'uppercase',
//     letterSpacing: '0.04em',
//   },
//   explanationPanel: {
//     backgroundColor: '#f0f4ff',
//     borderRadius: '12px',
//     padding: '24px',
//     border: '1px solid #d0d9f0',
//     position: 'sticky',
//     top: '20px',
//   },
//   explanationTitle: {
//     fontSize: '1.05rem',
//     fontWeight: '700',
//     color: '#1f2937',
//     margin: '0 0 12px 0',
//   },
//   explanationBody: {
//     fontSize: '0.95rem',
//     lineHeight: '1.6',
//     color: '#374151',
//     margin: '0 0 0 0',
//   },
//   explanationDivider: {
//     border: 'none',
//     borderTop: '1px solid #d0d9f0',
//     margin: '16px 0',
//   },
//   stepsTitle: {
//     fontSize: '0.9rem',
//     fontWeight: '700',
//     color: '#4285f4',
//     margin: '0 0 10px 0',
//     textTransform: 'uppercase',
//     letterSpacing: '0.03em',
//   },
//   stepsList: {
//     listStyle: 'none',
//     padding: '0',
//     margin: '0',
//   },
//   stepItem: {
//     fontSize: '0.88rem',
//     lineHeight: '1.55',
//     color: '#1f2937',
//     fontFamily: 'monospace',
//     padding: '3px 0',
//     whiteSpace: 'pre-wrap',
//   },

//   /* — middle (calculator) — */
//   inputHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '24px',
//   },
//   inputTitle: {
//     fontSize: '1.35rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     margin: '0',
//   },
//   buttonGroup: { display: 'flex', gap: '12px' },

//   /* — dimension controls — */
//   dimControls: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '24px',
//     marginBottom: '24px',
//     padding: '14px',
//     backgroundColor: '#f0f7ff',
//     borderRadius: '8px',
//     border: '1px solid #e0e7ff',
//     flexWrap: 'wrap',
//   },
//   dimGroup: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
//   dimHint: { fontSize: '0.85rem', color: '#6b7280' },
//   dimWarning: { fontSize: '0.85rem', color: '#dc2626', fontWeight: '500' },

//   /* — matrix grid — */
//   matrixGrid: {
//     display: 'grid',
//     gap: '24px',
//     marginBottom: '24px',
//   },
//   matrixGridSingle: { gridTemplateColumns: '1fr' },
//   matrixGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' },
//   matrixGridMultiple: { gridTemplateColumns: '1fr' },
//   matrixCard: {
//     backgroundColor: '#f8f9fa',
//     padding: '20px',
//     borderRadius: '12px',
//     border: '1px solid #e5e7eb',
//   },
//   matrixHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   matrixName: {
//     margin: '0',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#374151',
//   },
//   matrixHeaderRight: {
//     display: 'flex',
//     gap: '8px',
//     alignItems: 'center',
//   },
//   matrixDimLabel: {
//     fontSize: '0.85rem',
//     color: '#6b7280',
//     fontWeight: '500',
//   },
//   matrixContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   matrixContent: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   matrixBracket: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#374151',
//     lineHeight: '1',
//   },
//   matrixTable: {
//     display: 'grid',
//     gap: '4px',
//     padding: '8px',
//   },
//   matrixCell: {
//     width: '50px',
//     height: '35px',
//     padding: '4px',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//     textAlign: 'center',
//     fontSize: '0.85rem',
//     backgroundColor: 'white',
//     outline: 'none',
//   },
//   matrixCellError: {
//     borderColor: '#dc2626',
//     backgroundColor: '#fef2f2',
//   },

//   /* — operations — */
//   operationsSection: { marginBottom: '24px' },
//   operationsTitle: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: '16px',
//   },
//   operationsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//     gap: '8px',
//     marginBottom: '24px',
//   },
//   operationButton: {
//     padding: '10px 12px',
//     border: '2px solid #e5e7eb',
//     borderRadius: '8px',
//     backgroundColor: 'white',
//     color: '#374151',
//     fontSize: '0.85rem',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     textAlign: 'center',
//   },
//   operationButtonSelected: {
//     borderColor: '#4285f4',
//     backgroundColor: '#f0f7ff',
//     color: '#4285f4',
//   },
//   operationButtonDisabled: {
//     backgroundColor: '#f3f4f6',
//     color: '#9ca3af',
//     cursor: 'not-allowed',
//     borderColor: '#e5e7eb',
//   },

//   /* — scalar input — */
//   scalarSection: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '16px',
//     padding: '12px',
//     backgroundColor: '#f0f7ff',
//     borderRadius: '8px',
//     border: '1px solid #e0e7ff',
//   },
//   scalarLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
//   scalarInput: {
//     width: '80px',
//     padding: '8px 12px',
//     border: '1px solid #d1d5db',
//     borderRadius: '6px',
//     textAlign: 'center',
//     fontSize: '1rem',
//     outline: 'none',
//   },

//   /* — execute — */
//   executeButton: {
//     padding: '12px 32px',
//     border: 'none',
//     borderRadius: '8px',
//     backgroundColor: '#4285f4',
//     color: 'white',
//     fontSize: '1rem',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     marginBottom: '24px',
//   },
//   executeButtonDisabled: {
//     backgroundColor: '#9ca3af',
//     cursor: 'not-allowed',
//   },

//   /* — results — */
//   resultsSection: {
//     backgroundColor: '#f9fafb',
//     padding: '16px',
//     borderRadius: '8px',
//     border: '1px solid #e5e7eb',
//   },
//   resultsTitle: {
//     margin: '0 0 12px 0',
//     fontSize: '1.05rem',
//     fontWeight: '600',
//     color: '#1f2937',
//   },
//   resultsContent: {
//     minHeight: '60px',
//     backgroundColor: 'white',
//     padding: '12px',
//     borderRadius: '6px',
//     border: '1px solid #d1d5db',
//     fontSize: '1rem',
//     color: '#374151',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   resultLabel: {
//     fontSize: '0.85rem',
//     color: '#6b7280',
//     fontStyle: 'italic',
//   },
//   resultValue: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     fontFamily: 'monospace',
//   },
//   resultError: {
//     color: '#dc2626',
//     fontWeight: '500',
//     fontSize: '0.95rem',
//   },
//   resultTrue: {
//     color: '#059669',
//     fontWeight: '600',
//     fontSize: '1rem',
//   },
//   resultFalse: {
//     color: '#dc2626',
//     fontWeight: '600',
//     fontSize: '1rem',
//   },
//   resultDetail: {
//     fontSize: '0.9rem',
//     color: '#374151',
//     textAlign: 'center',
//     whiteSpace: 'pre-wrap',
//   },
//   resultMatrixTable: {
//     borderCollapse: 'collapse',
//     fontFamily: 'monospace',
//     fontSize: '0.9rem',
//   },
//   resultMatrixCell: {
//     padding: '5px 10px',
//     textAlign: 'right',
//     border: '1px solid #e5e7eb',
//   },
//   resultDecompSection: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     alignItems: 'center',
//   },
//   resultDecompLabel: {
//     fontSize: '0.9rem',
//     fontWeight: '700',
//     color: '#4285f4',
//     marginBottom: '4px',
//   },
//   resultVarRow: {
//     display: 'flex',
//     gap: '16px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   resultVarItem: {
//     fontSize: '1rem',
//     fontFamily: 'monospace',
//     fontWeight: '600',
//     color: '#1f2937',
//   },

//   /* — errors — */
//   errorSection: {
//     backgroundColor: '#fef2f2',
//     border: '1px solid #fecaca',
//     borderRadius: '8px',
//     padding: '16px',
//     marginBottom: '16px',
//   },
//   errorTitle: {
//     color: '#dc2626',
//     fontWeight: '600',
//     fontSize: '1rem',
//     margin: '0 0 8px 0',
//   },
//   errorList: { listStyle: 'none', padding: '0', margin: '0' },
//   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

//   /* — buttons — */
//   buttonDanger: {
//     padding: '8px 16px',
//     borderRadius: '6px',
//     fontSize: '0.9rem',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     border: '2px solid #dc2626',
//     backgroundColor: 'transparent',
//     color: '#dc2626',
//   },
//   clearMatrixButton: {
//     padding: '3px 8px',
//     border: '1px solid #9ca3af',
//     borderRadius: '4px',
//     backgroundColor: 'transparent',
//     color: '#6b7280',
//     fontSize: '0.75rem',
//     cursor: 'pointer',
//     transition: 'all 0.15s ease',
//   },
//   randomMatrixButton: {
//     padding: '3px 8px',
//     border: '1px solid #4285f4',
//     borderRadius: '4px',
//     backgroundColor: 'transparent',
//     color: '#4285f4',
//     fontSize: '0.75rem',
//     cursor: 'pointer',
//     transition: 'all 0.15s ease',
//   },
//   removeButton: {
//     padding: '3px 8px',
//     border: 'none',
//     borderRadius: '4px',
//     backgroundColor: '#dc2626',
//     color: 'white',
//     fontSize: '0.75rem',
//     cursor: 'pointer',
//   },
//   addMatrixContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '24px',
//   },
//   addMatrixButton: {
//     padding: '8px 16px',
//     border: '2px dashed #4285f4',
//     borderRadius: '8px',
//     backgroundColor: 'transparent',
//     color: '#4285f4',
//     fontSize: '0.9rem',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//   },

//   /* — loading — */
//   loading: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//   },
//   spinner: {
//     width: '16px',
//     height: '16px',
//     border: '2px solid #e5e7eb',
//     borderTop: '2px solid #4285f4',
//     borderRadius: '50%',
//     animation: 'spin 1s linear infinite',
//   },

//   /* — matrix accordion (two matrices, cols > 5) — */
//   matrixAccordion: {
//     border: '1px solid #e5e7eb',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     marginBottom: '0',
//   },
//   matrixAccordionToggle: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     padding: '14px 20px',
//     border: 'none',
//     backgroundColor: '#f8f9fa',
//     cursor: 'pointer',
//     transition: 'background-color 0.15s ease',
//   },
//   matrixAccordionLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   matrixAccordionName: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#374151',
//     margin: 0,
//   },
//   matrixAccordionDim: {
//     fontSize: '0.85rem',
//     color: '#6b7280',
//     fontWeight: '500',
//   },
//   matrixAccordionArrow: {
//     fontSize: '0.75rem',
//     color: '#6b7280',
//     transition: 'transform 0.2s ease',
//   },
//   matrixAccordionBody: {
//     padding: '0 20px 20px 20px',
//     backgroundColor: '#f8f9fa',
//   },

//   /* — history accordion — */
//   historySection: {
//     marginTop: '16px',
//   },
//   historyToggle: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     padding: '10px 0',
//     border: 'none',
//     borderTop: '1px solid #d0d9f0',
//     backgroundColor: 'transparent',
//     cursor: 'pointer',
//     fontSize: '0.85rem',
//     fontWeight: '700',
//     color: '#6b7280',
//     textTransform: 'uppercase',
//     letterSpacing: '0.03em',
//   },
//   historyArrow: {
//     fontSize: '0.75rem',
//     transition: 'transform 0.2s ease',
//   },
//   historyList: {
//     listStyle: 'none',
//     padding: '0',
//     margin: '8px 0 0 0',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   historyEntry: {
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     padding: '10px 12px',
//     border: '1px solid #d0d9f0',
//   },
//   historyEntryHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '6px',
//   },
//   historyOpName: {
//     fontSize: '0.85rem',
//     fontWeight: '700',
//     color: '#4285f4',
//   },
//   historyTime: {
//     fontSize: '0.75rem',
//     color: '#9ca3af',
//   },
//   historyInputs: {
//     fontSize: '0.78rem',
//     color: '#6b7280',
//     fontFamily: 'monospace',
//     marginBottom: '4px',
//     lineHeight: '1.4',
//     wordBreak: 'break-word',
//   },
//   historyResult: {
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     fontFamily: 'monospace',
//   },
//   historyClearBtn: {
//     padding: '4px 10px',
//     border: '1px solid #d0d9f0',
//     borderRadius: '4px',
//     backgroundColor: 'transparent',
//     color: '#9ca3af',
//     fontSize: '0.7rem',
//     cursor: 'pointer',
//     marginTop: '8px',
//   },
// };

// const spinKeyframes = `
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }`;

// /* ── helpers for history ─────────────────────────────────────── */

// function fmtMatCompact(m, rows, cols) {
//   if (rows <= 2 && cols <= 2) {
//     const data = [];
//     for (let r = 0; r < rows; r++) {
//       const row = [];
//       for (let c = 0; c < cols; c++) {
//         const v = m[r * cols + c];
//         row.push(Number.isInteger(v) ? String(v) : parseFloat(v.toFixed(4)).toString());
//       }
//       data.push('[' + row.join(', ') + ']');
//     }
//     return data.join(' ');
//   }
//   return `${rows}\u00D7${cols}`;
// }

// function formatHistoryResult(res) {
//   if (res.type === 'scalar') return String(res.value);
//   if (res.type === 'vector') return '(' + res.value.join(', ') + ')';
//   if (res.type === 'matrix') return `${res.rows}\u00D7${res.cols} matrix`;
//   if (res.type === 'boolean') return res.value ? '\u2713 TRUE' : '\u2717 FALSE';
//   if (res.type === 'decomposition') return res.label;
//   return String(res.value);
// }

// function formatHistoryInputs(entry) {
//   const parts = entry.matrices.map((m, i) =>
//     `${String.fromCharCode(65 + i)}(${m.rows}\u00D7${m.cols})`
//   );
//   if (entry.scalarValue !== null && entry.scalarValue !== undefined) {
//     parts.push(`c=${entry.scalarValue}`);
//   }
//   return parts.join('  ');
// }

// /* ── component ────────────────────────────────────────────────── */

// export default function MatrixCalculator({ descriptions: descriptionsProp } = {}) {
//   const [step, setStep] = useState('operation-type');
//   const [operationType, setOperationType] = useState('');
//   const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
//   const [matrices, setMatrices] = useState([]);
//   const [selectedOperation, setSelectedOperation] = useState('');
//   const [scalarValue, setScalarValue] = useState('');
//   const [result, setResult] = useState(null);
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [matrixAccordionOpen, setMatrixAccordionOpen] = useState({});
//   const [computedSteps, setComputedSteps] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyOpen, setHistoryOpen] = useState(false);

//   /* ── merge descriptions: props override defaults ── */
//   const mergedDescriptions = descriptionsProp
//     ? Object.keys(defaultDescriptions).reduce((acc, cat) => {
//         acc[cat] = {
//           ...defaultDescriptions[cat],
//           ...(descriptionsProp[cat] || {}),
//         };
//         return acc;
//       }, {})
//     : defaultDescriptions;

//   const toggleMatrixAccordion = (mi) => {
//     setMatrixAccordionOpen(prev => ({ ...prev, [mi]: !prev[mi] }));
//   };

//   const needsAccordion = () => operationType === 'two' && dimensions.cols > 5;

//   const operationTypes = [
//     { id: 'single', label: 'Single Matrix', description: 'Determinant, transpose, inverse, trace, rank' },
//     { id: 'two', label: 'Two Matrices', description: 'Addition, subtraction, multiplication' },
//     { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, addition, power' },
//     { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' },
//   ];

//   const operationsByType = {
//     single: [
//       'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank',
//       'LU Decomposition',
//     ],
//     two: [
//       'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
//       'Kronecker Product', 'Commutator', 'Anti-commutator',
//     ],
//     scalar: [
//       'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
//       'Matrix Power (Scalar)',
//     ],
//     system: [
//       'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
//       "Cramer's Rule", 'Matrix Equation AX=B', 'Least Squares Solution',
//     ],
//   };

//   const squareOnly = ['Determinant', 'Inverse', 'Trace', 'LU Decomposition'];

//   /* ── validation ── */

//   const validateInputs = () => {
//     const newErrors = [];
//     if (!selectedOperation) newErrors.push('Please select an operation');

//     matrices.forEach((matrix, index) => {
//       const name = String.fromCharCode(65 + index);
//       const total = matrix.rows * matrix.cols;
//       const empty = matrix.data.filter(c => c === '' || c === null || c === undefined).length;
//       const valid = matrix.data.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
//       if (empty > 0) newErrors.push(`Matrix ${name} has empty cells`);
//       if (valid !== total) newErrors.push(`Matrix ${name} contains invalid numbers`);
//     });

//     if (operationType === 'two' && matrices.length === 2) {
//       const [a, b] = matrices;
//       if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
//         if (a.rows !== b.rows || a.cols !== b.cols)
//           newErrors.push('Matrices must have the same dimensions for this operation');
//       }
//       if (selectedOperation === 'Multiplication') {
//         if (a.cols !== b.rows)
//           newErrors.push('For multiplication, columns of A must equal rows of B');
//       }
//     }

//     if (operationType === 'single' && squareOnly.includes(selectedOperation)) {
//       const m = matrices[0];
//       if (m && m.rows !== m.cols) newErrors.push('This operation requires a square matrix');
//     }

//     if (operationType === 'scalar') {
//       if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(parseFloat(scalarValue)))
//         newErrors.push('Please enter a valid scalar value');
//     }

//     setErrors(newErrors);
//     return newErrors.length === 0;
//   };

//   /* ── handlers ── */

//   const handleReset = () => {
//     setStep('operation-type');
//     setOperationType('');
//     setDimensions({ rows: 3, cols: 3 });
//     setMatrices([]);
//     setSelectedOperation('');
//     setScalarValue('');
//     setResult(null);
//     setErrors([]);
//     setIsLoading(false);
//     setComputedSteps(null);
//   };

//   const clearMatrix = (mi) => {
//     const updated = [...matrices];
//     updated[mi] = { ...updated[mi], data: new Array(updated[mi].rows * updated[mi].cols).fill('') };
//     setMatrices(updated);
//   };

//   const randomizeMatrix = (mi) => {
//     const updated = [...matrices];
//     const total = updated[mi].rows * updated[mi].cols;
//     updated[mi] = {
//       ...updated[mi],
//       data: Array.from({ length: total }, () => String(Math.floor(Math.random() * 21) - 10)),
//     };
//     setMatrices(updated);
//   };

//   const handleOperationTypeSelect = (type) => {
//     setOperationType(type);
//     setSelectedOperation('');
//     setErrors([]);
//     setResult(null);
//     setComputedSteps(null);
//     setMatrixAccordionOpen({ 0: true, 1: true });

//     let count = 1;
//     if (type === 'two') count = 2;
//     if (type === 'system') count = 2;

//     const initialMatrices = Array(count).fill(null).map((_, i) => ({
//       id: i,
//       rows: dimensions.rows,
//       cols: type === 'system' && i === count - 1 ? 1 : dimensions.cols,
//       data: new Array(dimensions.rows * (type === 'system' && i === count - 1 ? 1 : dimensions.cols)).fill(''),
//     }));
//     setMatrices(initialMatrices);
//     setStep('input');
//   };

//   const handleDimensionsChange = (dim, value) => {
//     if (value === '') {
//       setDimensions(prev => ({ ...prev, [dim]: '' }));
//       return;
//     }
//     const val = parseInt(value);
//     const newDims = { ...dimensions, [dim]: val };
//     setDimensions(newDims);

//     if (newDims.rows >= 1 && newDims.rows <= 10 && newDims.cols >= 1 && newDims.cols <= 10) {
//       const updated = matrices.map((matrix, i) => {
//         const nr = newDims.rows;
//         const nc = operationType === 'system' && i === matrices.length - 1 ? 1 : newDims.cols;
//         const newData = new Array(nr * nc).fill('');
//         for (let r = 0; r < Math.min(matrix.rows, nr); r++) {
//           for (let c = 0; c < Math.min(matrix.cols, nc); c++) {
//             const oi = r * matrix.cols + c;
//             const ni = r * nc + c;
//             if (oi < matrix.data.length) newData[ni] = matrix.data[oi];
//           }
//         }
//         return { ...matrix, rows: nr, cols: nc, data: newData };
//       });
//       setMatrices(updated);
//       setErrors([]);
//     } else {
//       const errs = [];
//       if (newDims.rows < 1 || newDims.rows > 10) errs.push('Rows must be between 1 and 10');
//       if (newDims.cols < 1 || newDims.cols > 10) errs.push('Columns must be between 1 and 10');
//       setErrors(errs);
//     }
//   };

//   const updateMatrixCell = (mi, ci, value) => {
//     const updated = [...matrices];
//     updated[mi] = { ...updated[mi], data: [...updated[mi].data] };
//     updated[mi].data[ci] = value;
//     setMatrices(updated);
//     if (errors.length > 0) setErrors([]);
//   };

//   const addMatrix = () => {
//     if (operationType === 'system' && matrices.length < 5) {
//       setMatrices([...matrices, {
//         id: matrices.length,
//         rows: dimensions.rows,
//         cols: dimensions.cols,
//         data: new Array(dimensions.rows * dimensions.cols).fill(''),
//       }]);
//     }
//   };

//   const removeMatrix = (mi) => {
//     if (operationType === 'system' && matrices.length > 2)
//       setMatrices(matrices.filter((_, i) => i !== mi));
//   };

//   const getAvailableOperations = () => operationsByType[operationType] || [];

//   const handleOperationSelect = (op) => {
//     setSelectedOperation(op);
//     setErrors([]);
//     setResult(null);
//     setComputedSteps(null);
//   };

//   const executeOperation = () => {
//     if (!validateInputs()) return;
//     setIsLoading(true);
//     setResult(null);
//     setComputedSteps(null);

//     setTimeout(() => {
//       const numericMatrices = matrices.map(m => ({
//         rows: m.rows,
//         cols: m.cols,
//         data: m.data.map(c => parseFloat(c)),
//       }));

//       const params = {
//         operation: selectedOperation,
//         operationType,
//         dimensions,
//         matrices: numericMatrices,
//         scalarValue: scalarValue !== '' ? parseFloat(scalarValue) : null,
//       };

//       const res = computeMatrix(params);
//       setResult(res);

//       if (res.type === 'error') {
//         setErrors([res.value]);
//       } else {
//         // Push to history on success
//         const entry = {
//           id: Date.now(),
//           operation: selectedOperation,
//           matrices: numericMatrices,
//           scalarValue: params.scalarValue,
//           result: res,
//           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
//         };
//         setHistory(prev => [entry, ...prev]);
//       }

//       // Generate dynamic steps
//       const stepFn = operationSteps[operationType]?.[selectedOperation];
//       if (stepFn) {
//         // Convert flat data to 2D for steps functions
//         const mats2D = numericMatrices.map(m => {
//           const mat = [];
//           for (let r = 0; r < m.rows; r++) {
//             mat.push(m.data.slice(r * m.cols, r * m.cols + m.cols));
//           }
//           return mat;
//         });
//         const extras = {
//           scalarValue: params.scalarValue,
//         };
//         const stepLines = stepFn(mats2D, res, extras);
//         setComputedSteps(stepLines);
//       }

//       setIsLoading(false);
//     }, 150);
//   };

//   const canExecute = () => selectedOperation && matrices.length > 0 && !isLoading;

//   const needsScalarInput = () =>
//     operationType === 'scalar' || selectedOperation === 'Matrix Power (Scalar)';

//   const isSquareRequired = (op) => squareOnly.includes(op);

//   const isOpDisabled = (op) => {
//     if (!isSquareRequired(op)) return false;
//     const m = matrices[0];
//     return m && m.rows !== m.cols;
//   };

//   /* ── explanation helpers ── */
//   const getDescription = () => {
//     const pool = mergedDescriptions[operationType];
//     if (!pool) return '';
//     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
//     return pool._default;
//   };

//   const getExplanationHeading = () => {
//     if (selectedOperation) return selectedOperation;
//     const labels = {
//       single: 'Single Matrix Ops',
//       two: 'Two Matrix Ops',
//       scalar: 'Scalar Ops',
//       system: 'System Ops',
//     };
//     return labels[operationType] || 'Explanation';
//   };

//   /* ── left-panel button styles ── */
//   const catBtnStyle = (id) => ({
//     padding: '12px',
//     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
//     borderRadius: '10px',
//     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
//     cursor: 'pointer',
//     textAlign: 'left',
//     transition: 'all 0.25s ease',
//     width: '100%',
//     boxSizing: 'border-box',
//   });
//   const catLabelStyle = (id) => ({
//     fontSize: '0.9rem',
//     fontWeight: '600',
//     color: operationType === id ? '#4285f4' : '#1f2937',
//     marginBottom: '4px',
//   });
//   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

//   const dimInputStyle = (val) => ({
//     width: '60px',
//     padding: '8px 12px',
//     border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
//     borderRadius: '8px',
//     fontSize: '1rem',
//     textAlign: 'center',
//     outline: 'none',
//   });

//   const getMatrixGridExtra = () => {
//     if (operationType === 'single') return s.matrixGridSingle;
//     if (operationType === 'two' || operationType === 'scalar') {
//       if (needsAccordion()) return s.matrixGridSingle;
//       return s.matrixGridTwo;
//     }
//     return s.matrixGridMultiple;
//   };

//   /* ── render a matrix card ── */
//   const renderMatrix = (matrix, mi, nested = false) => {
//     const gridStyle = {
//       gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
//       gridTemplateRows: `repeat(${matrix.rows}, 1fr)`,
//     };
//     const label = operationType === 'system' && mi === matrices.length - 1 && matrices.length > 1
//       ? ` (Vector)` : '';

//     return (
//       <div key={matrix.id} style={nested ? {} : s.matrixCard}>
//         {!nested && (
//           <div style={s.matrixHeader}>
//             <h4 style={s.matrixName}>Matrix {String.fromCharCode(65 + mi)}{label}</h4>
//             <div style={s.matrixHeaderRight}>
//               <span style={s.matrixDimLabel}>{matrix.rows} × {matrix.cols}</span>
//               <button onClick={() => randomizeMatrix(mi)} style={s.randomMatrixButton} title="Fill with random numbers">
//                 Random
//               </button>
//               <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
//                 Clear
//               </button>
//               {operationType === 'system' && matrices.length > 2 && mi >= 2 && (
//                 <button onClick={() => removeMatrix(mi)} style={s.removeButton}>Remove</button>
//               )}
//             </div>
//           </div>
//         )}
//         {nested && (
//           <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginBottom: '8px' }}>
//             <button onClick={() => randomizeMatrix(mi)} style={s.randomMatrixButton} title="Fill with random numbers">
//               Random
//             </button>
//             <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
//               Clear
//             </button>
//           </div>
//         )}
//         <div style={s.matrixContainer}>
//           <div style={s.matrixContent}>
//             <span style={s.matrixBracket}>[</span>
//             <div style={{ ...s.matrixTable, ...gridStyle }}>
//               {matrix.data.map((cell, ci) => (
//                 <input
//                   key={ci}
//                   type="number"
//                   step="any"
//                   value={cell}
//                   onChange={(e) => updateMatrixCell(mi, ci, e.target.value)}
//                   placeholder="0"
//                   style={{
//                     ...s.matrixCell,
//                     ...(cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? s.matrixCellError : {}),
//                   }}
//                 />
//               ))}
//             </div>
//             <span style={s.matrixBracket}>]</span>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   /* ── render result based on type ── */
//   const renderResultMatrix = (matrix) => (
//     <table style={s.resultMatrixTable}>
//       <tbody>
//         {matrix.map((row, ri) => (
//           <tr key={ri}>
//             {row.map((val, ci) => (
//               <td key={ci} style={s.resultMatrixCell}>{val}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   const renderResult = () => {
//     if (!result) return 'Select matrices and operation, then click Execute';

//     if (result.type === 'error') {
//       return <span style={s.resultError}>{result.value}</span>;
//     }

//     if (result.type === 'scalar') {
//       return (
//         <>
//           <span style={s.resultLabel}>{result.label}</span>
//           <span style={s.resultValue}>{result.value}</span>
//         </>
//       );
//     }

//     if (result.type === 'vector') {
//       return (
//         <>
//           <span style={s.resultLabel}>{result.label}</span>
//           <div style={s.resultVarRow}>
//             {result.value.map((val, i) => (
//               <span key={i} style={s.resultVarItem}>
//                 {result.variables ? result.variables[i] : `x${i + 1}`} = {val}
//               </span>
//             ))}
//           </div>
//           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
//         </>
//       );
//     }

//     if (result.type === 'matrix') {
//       return (
//         <>
//           <span style={s.resultLabel}>{result.label} ({result.rows}&times;{result.cols})</span>
//           {renderResultMatrix(result.value)}
//         </>
//       );
//     }

//     if (result.type === 'boolean') {
//       return (
//         <>
//           <span style={s.resultLabel}>{result.label}</span>
//           <span style={result.value ? s.resultTrue : s.resultFalse}>
//             {result.value ? '\u2713 TRUE' : '\u2717 FALSE'}
//           </span>
//           {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
//         </>
//       );
//     }

//     if (result.type === 'decomposition') {
//       return (
//         <div style={s.resultDecompSection}>
//           <span style={s.resultLabel}>{result.label}</span>
//           {Object.keys(result.value).map((key) => {
//             const part = result.value[key];
//             return (
//               <div key={key} style={{ textAlign: 'center' }}>
//                 <div style={s.resultDecompLabel}>{part.label}</div>
//                 {renderResultMatrix(part.matrix)}
//               </div>
//             );
//           })}
//         </div>
//       );
//     }

//     return JSON.stringify(result.value);
//   };

//   /* ── JSX ─────────────────────────────────────────────────────── */

//   return (
//     <div style={s.container}>
//       <style>{spinKeyframes}</style>
//       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

//         {/* Header */}
//         <div style={s.header}>
//           <h1 style={s.title}>Matrix Calculator</h1>
//           <p style={s.subtitle}>Professional matrix operations calculator</p>
//         </div>

//         {/* ── INITIAL STATE ── */}
//         {step === 'operation-type' && (
//           <div>
//             <h2 style={s.stepTitle}>Select Operation Type</h2>
//             <div style={s.operationTypeGrid}>
//               {operationTypes.map((type) => (
//                 <button
//                   key={type.id}
//                   onClick={() => handleOperationTypeSelect(type.id)}
//                   style={s.operationTypeCard}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.borderColor = '#4285f4';
//                     e.currentTarget.style.backgroundColor = '#f8f9ff';
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.borderColor = '#e5e7eb';
//                     e.currentTarget.style.backgroundColor = 'white';
//                   }}
//                 >
//                   <div style={s.operationTypeTitle}>{type.label}</div>
//                   <div style={s.operationTypeDescription}>{type.description}</div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ── EXPANDED STATE — 3-column ── */}
//         {step === 'input' && (
//           <div style={s.threeColLayout}>

//             {/* ▸ LEFT — category buttons */}
//             <div style={s.leftPanel}>
//               <div style={s.leftPanelTitle}>Category</div>
//               {operationTypes.map((type) => (
//                 <button
//                   key={type.id}
//                   onClick={() => handleOperationTypeSelect(type.id)}
//                   style={catBtnStyle(type.id)}
//                   onMouseOver={(e) => {
//                     if (operationType !== type.id) {
//                       e.currentTarget.style.borderColor = '#4285f4';
//                       e.currentTarget.style.backgroundColor = '#f8f9ff';
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (operationType !== type.id) {
//                       e.currentTarget.style.borderColor = '#e5e7eb';
//                       e.currentTarget.style.backgroundColor = 'white';
//                     }
//                   }}
//                 >
//                   <div style={catLabelStyle(type.id)}>{type.label}</div>
//                   <div style={catDescStyle}>{type.description}</div>
//                 </button>
//               ))}
//             </div>

//             {/* ▸ MIDDLE — calculator */}
//             <div>
//               <div style={s.inputHeader}>
//                 <h2 style={s.inputTitle}>Matrix Input ({dimensions.rows}×{dimensions.cols})</h2>
//                 <div style={s.buttonGroup}>
//                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
//                 </div>
//               </div>

//               {/* Dimensions */}
//               <div style={s.dimControls}>
//                 <div style={s.dimGroup}>
//                   <label style={s.dimLabel}>Rows:</label>
//                   <input
//                     type="number" min="1" max="10"
//                     value={dimensions.rows}
//                     onChange={(e) => handleDimensionsChange('rows', e.target.value)}
//                     style={dimInputStyle(dimensions.rows)}
//                   />
//                 </div>
//                 <div style={s.dimGroup}>
//                   <label style={s.dimLabel}>Cols:</label>
//                   <input
//                     type="number" min="1" max="10"
//                     value={dimensions.cols}
//                     onChange={(e) => handleDimensionsChange('cols', e.target.value)}
//                     style={dimInputStyle(dimensions.cols)}
//                   />
//                 </div>
//                 <span style={s.dimHint}>
//                   {dimensions.rows}×{dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
//                 </span>
//                 {operationType === 'single' && dimensions.rows !== dimensions.cols && (
//                   <span style={s.dimWarning}>Some operations require square matrices</span>
//                 )}
//               </div>

//               {/* Errors */}
//               {errors.length > 0 && (
//                 <div style={s.errorSection}>
//                   <div style={s.errorTitle}>Please fix the following:</div>
//                   <ul style={s.errorList}>
//                     {errors.map((err, i) => (
//                       <li key={i} style={s.errorItem}>&bull; {err}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {/* Matrices */}
//               <div style={{ ...s.matrixGrid, ...getMatrixGridExtra() }}>
//                 {matrices.map((m, i) => {
//                   if (needsAccordion()) {
//                     const isOpen = matrixAccordionOpen[i] !== false;
//                     const label = operationType === 'system' && i === matrices.length - 1 && matrices.length > 1
//                       ? ' (Vector)' : '';
//                     return (
//                       <div key={m.id} style={s.matrixAccordion}>
//                         <button
//                           onClick={() => toggleMatrixAccordion(i)}
//                           style={s.matrixAccordionToggle}
//                         >
//                           <div style={s.matrixAccordionLeft}>
//                             <span style={s.matrixAccordionName}>Matrix {String.fromCharCode(65 + i)}{label}</span>
//                             <span style={s.matrixAccordionDim}>{m.rows} × {m.cols}</span>
//                           </div>
//                           <span style={{
//                             ...s.matrixAccordionArrow,
//                             transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//                           }}>
//                             ▼
//                           </span>
//                         </button>
//                         {isOpen && (
//                           <div style={s.matrixAccordionBody}>
//                             {renderMatrix(m, i, true)}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   }
//                   return renderMatrix(m, i);
//                 })}
//               </div>

//               {/* Add matrix (system) */}
//               {operationType === 'system' && matrices.length < 5 && (
//                 <div style={s.addMatrixContainer}>
//                   <button onClick={addMatrix} style={s.addMatrixButton}>+ Add Matrix</button>
//                 </div>
//               )}

//               {/* Scalar input */}
//               {needsScalarInput() && (
//                 <div style={s.scalarSection}>
//                   <label style={s.scalarLabel}>Scalar value:</label>
//                   <input
//                     type="number" step="any"
//                     value={scalarValue}
//                     onChange={(e) => setScalarValue(e.target.value)}
//                     placeholder="Enter value"
//                     style={s.scalarInput}
//                   />
//                 </div>
//               )}

//               {/* Operations */}
//               <div style={s.operationsSection}>
//                 <h3 style={s.operationsTitle}>Available Operations</h3>
//                 <div style={s.operationsGrid}>
//                   {getAvailableOperations().map((op) => {
//                     const sel = selectedOperation === op;
//                     const dis = isOpDisabled(op);
//                     return (
//                       <button
//                         key={op}
//                         onClick={() => handleOperationSelect(op)}
//                         disabled={dis}
//                         style={{
//                           ...s.operationButton,
//                           ...(sel ? s.operationButtonSelected : {}),
//                           ...(dis ? s.operationButtonDisabled : {}),
//                         }}
//                       >
//                         {op}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                   <button
//                     onClick={executeOperation}
//                     disabled={!canExecute()}
//                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
//                   >
//                     {isLoading ? (
//                       <div style={s.loading}>
//                         <div style={s.spinner} />
//                         Calculating...
//                       </div>
//                     ) : (
//                       'Execute Operation'
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Result */}
//               <div style={s.resultsSection}>
//                 <h4 style={s.resultsTitle}>Result</h4>
//                 <div style={s.resultsContent}>
//                   {renderResult()}
//                 </div>
//               </div>
//             </div>

//             {/* ▸ RIGHT — explanation panel */}
//             <div style={s.explanationPanel}>
//               {/* Theory (from merged descriptions — overridable via props) */}
//               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
//               <p style={s.explanationBody}>{processContent(getDescription())}</p>

//               {/* Steps (dynamic — always from matrixExplanations.js, never overridable) */}
//               {computedSteps && computedSteps.length > 0 && (
//                 <>
//                   <hr style={s.explanationDivider} />
//                   <div style={s.stepsTitle}>Calculation Steps</div>
//                   <ul style={s.stepsList}>
//                     {computedSteps.map((line, i) => (
//                       <li key={i} style={s.stepItem}>{line}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               {/* History accordion */}
//               {history.length > 0 && (
//                 <div style={s.historySection}>
//                   <button
//                     onClick={() => setHistoryOpen(!historyOpen)}
//                     style={s.historyToggle}
//                   >
//                     <span>History ({history.length})</span>
//                     <span style={{
//                       ...s.historyArrow,
//                       transform: historyOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//                     }}>
//                       ▼
//                     </span>
//                   </button>

//                   {historyOpen && (
//                     <>
//                       <ul style={s.historyList}>
//                         {history.map((entry) => (
//                           <li key={entry.id} style={s.historyEntry}>
//                             <div style={s.historyEntryHeader}>
//                               <span style={s.historyOpName}>{entry.operation}</span>
//                               <span style={s.historyTime}>{entry.time}</span>
//                             </div>
//                             <div style={s.historyInputs}>
//                               {formatHistoryInputs(entry)}
//                             </div>
//                             <div style={s.historyResult}>
//                               = {formatHistoryResult(entry.result)}
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                       <button
//                         onClick={() => { setHistory([]); setHistoryOpen(false); }}
//                         style={s.historyClearBtn}
//                       >
//                         Clear history
//                       </button>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import computeMatrix from './computeMatrix';
import { processContent } from '../../../utils/contentProcessor';
import {
  descriptions as defaultDescriptions,
  steps as operationSteps,
} from './matrixExplanations';

/* ── styles ───────────────────────────────────────────────────── */

const s = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  mainNarrow: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'max-width 0.4s ease',
  },
  mainWide: {
    maxWidth: 'calc(100vw - 400px)',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'max-width 0.4s ease',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 8px 0',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '1.1rem',
    margin: '0',
  },
  stepTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '24px',
    textAlign: 'center',
  },
  operationTypeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  },
  operationTypeCard: {
    padding: '20px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: 'white',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.2s ease',
    outline: 'none',
  },
  operationTypeTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px',
  },
  operationTypeDescription: {
    fontSize: '1rem',
    color: '#6b7280',
  },

  /* — 3-col layout — */
  threeColLayout: {
    display: 'grid',
    gridTemplateColumns: '200px 2fr 1fr',
    gap: '24px',
    alignItems: 'start',
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    position: 'sticky',
    top: '20px',
  },
  leftPanelTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  explanationPanel: {
    backgroundColor: '#f0f4ff',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #d0d9f0',
    position: 'sticky',
    top: '20px',
  },
  explanationTitle: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#1f2937',
    margin: '0 0 12px 0',
  },
  explanationBody: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#374151',
    margin: '0 0 0 0',
  },
  explanationDivider: {
    border: 'none',
    borderTop: '1px solid #d0d9f0',
    margin: '16px 0',
  },
  stepsTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#4285f4',
    margin: '0 0 10px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
  },
  stepsList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  stepItem: {
    fontSize: '0.88rem',
    lineHeight: '1.55',
    color: '#1f2937',
    fontFamily: 'monospace',
    padding: '3px 0',
    whiteSpace: 'pre-wrap',
  },

  /* — middle (calculator) — */
  inputHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  inputTitle: {
    fontSize: '1.35rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0',
  },
  buttonGroup: { display: 'flex', gap: '12px' },

  /* — dimension controls — */
  dimControls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '24px',
    padding: '14px',
    backgroundColor: '#f0f7ff',
    borderRadius: '8px',
    border: '1px solid #e0e7ff',
    flexWrap: 'wrap',
  },
  dimGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
  dimHint: { fontSize: '0.85rem', color: '#6b7280' },
  dimWarning: { fontSize: '0.85rem', color: '#dc2626', fontWeight: '500' },

  /* — matrix grid — */
  matrixGrid: {
    display: 'grid',
    gap: '24px',
    marginBottom: '24px',
  },
  matrixGridSingle: { gridTemplateColumns: '1fr' },
  matrixGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' },
  matrixGridMultiple: { gridTemplateColumns: '1fr' },
  matrixCard: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  matrixHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  matrixName: {
    margin: '0',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#374151',
  },
  matrixHeaderRight: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  matrixDimLabel: {
    fontSize: '0.85rem',
    color: '#6b7280',
    fontWeight: '500',
  },
  matrixContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  matrixContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  matrixBracket: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#374151',
    lineHeight: '1',
  },
  matrixTable: {
    display: 'grid',
    gap: '4px',
    padding: '8px',
  },
  matrixCell: {
    width: '50px',
    height: '35px',
    padding: '4px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '0.85rem',
    backgroundColor: 'white',
    outline: 'none',
  },
  matrixCellError: {
    borderColor: '#dc2626',
    backgroundColor: '#fef2f2',
  },

  /* — operations — */
  operationsSection: { marginBottom: '24px' },
  operationsTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '16px',
  },
  operationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '8px',
    marginBottom: '24px',
  },
  operationButton: {
    padding: '10px 12px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#374151',
    fontSize: '0.85rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',
    outline: 'none',
  },
  operationButtonSelected: {
    borderColor: '#4285f4',
    backgroundColor: '#f0f7ff',
    color: '#4285f4',
  },
  operationButtonDisabled: {
    backgroundColor: '#f3f4f6',
    color: '#9ca3af',
    cursor: 'not-allowed',
    borderColor: '#e5e7eb',
  },

  /* — scalar input — */
  scalarSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
    padding: '12px',
    backgroundColor: '#f0f7ff',
    borderRadius: '8px',
    border: '1px solid #e0e7ff',
  },
  scalarLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
  scalarInput: {
    width: '80px',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    textAlign: 'center',
    fontSize: '1rem',
    outline: 'none',
  },

  /* — execute — */
  executeButton: {
    padding: '12px 32px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#4285f4',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginBottom: '24px',
    outline: 'none',
  },
  executeButtonDisabled: {
    backgroundColor: '#9ca3af',
    cursor: 'not-allowed',
  },

  /* — results — */
  resultsSection: {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  resultsTitle: {
    margin: '0 0 12px 0',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  resultsContent: {
    minHeight: '60px',
    backgroundColor: 'white',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8px',
  },
  resultLabel: {
    fontSize: '0.85rem',
    color: '#6b7280',
    fontStyle: 'italic',
  },
  resultValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    fontFamily: 'monospace',
  },
  resultError: {
    color: '#dc2626',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  resultTrue: {
    color: '#059669',
    fontWeight: '600',
    fontSize: '1rem',
  },
  resultFalse: {
    color: '#dc2626',
    fontWeight: '600',
    fontSize: '1rem',
  },
  resultDetail: {
    fontSize: '0.9rem',
    color: '#374151',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
  },
  resultMatrixTable: {
    borderCollapse: 'collapse',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
  },
  resultMatrixCell: {
    padding: '5px 10px',
    textAlign: 'right',
    border: '1px solid #e5e7eb',
  },
  resultDecompSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
  },
  resultDecompLabel: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#4285f4',
    marginBottom: '4px',
  },
  resultVarRow: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  resultVarItem: {
    fontSize: '1rem',
    fontFamily: 'monospace',
    fontWeight: '600',
    color: '#1f2937',
  },

  /* — errors — */
  errorSection: {
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
  },
  errorTitle: {
    color: '#dc2626',
    fontWeight: '600',
    fontSize: '1rem',
    margin: '0 0 8px 0',
  },
  errorList: { listStyle: 'none', padding: '0', margin: '0' },
  errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },

  /* — buttons — */
  buttonDanger: {
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '2px solid #dc2626',
    backgroundColor: 'transparent',
    color: '#dc2626',
    outline: 'none',
  },
  clearMatrixButton: {
    padding: '3px 8px',
    border: '1px solid #9ca3af',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: '#6b7280',
    fontSize: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
  },
  randomMatrixButton: {
    padding: '3px 8px',
    border: '1px solid #4285f4',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: '#4285f4',
    fontSize: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
  },
  fillControlsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '12px',
    flexWrap: 'wrap',
  },
  fillValueInput: {
    width: '48px',
    padding: '3px 6px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '0.8rem',
    outline: 'none',
  },
  fillButton: {
    padding: '3px 8px',
    border: '1px solid #6b7280',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: '#6b7280',
    fontSize: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
  },
  diagonalButton: {
    padding: '3px 8px',
    border: '1px solid #059669',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: '#059669',
    fontSize: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    outline: 'none',
  },
  fillLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
  },
  removeButton: {
    padding: '3px 8px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#dc2626',
    color: 'white',
    fontSize: '0.75rem',
    cursor: 'pointer',
    outline: 'none',
  },
  addMatrixContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  addMatrixButton: {
    padding: '8px 16px',
    border: '2px dashed #4285f4',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#4285f4',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
  },

  /* — loading — */
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid #e5e7eb',
    borderTop: '2px solid #4285f4',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },

  /* — matrix accordion (two matrices, cols > 5) — */
  matrixAccordion: {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '0',
  },
  matrixAccordionToggle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '14px 20px',
    border: 'none',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease',
    outline: 'none',
  },
  matrixAccordionLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  matrixAccordionName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#374151',
    margin: 0,
  },
  matrixAccordionDim: {
    fontSize: '0.85rem',
    color: '#6b7280',
    fontWeight: '500',
  },
  matrixAccordionArrow: {
    fontSize: '0.75rem',
    color: '#6b7280',
    transition: 'transform 0.2s ease',
  },
  matrixAccordionBody: {
    padding: '0 20px 20px 20px',
    backgroundColor: '#f8f9fa',
  },

  /* — history accordion — */
  historySection: {
    marginTop: '16px',
  },
  historyToggle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '10px 0',
    border: 'none',
    borderTop: '1px solid #d0d9f0',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    outline: 'none',
  },
  historyArrow: {
    fontSize: '0.75rem',
    transition: 'transform 0.2s ease',
  },
  historyList: {
    listStyle: 'none',
    padding: '0',
    margin: '8px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  historyEntry: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '10px 12px',
    border: '1px solid #d0d9f0',
  },
  historyEntryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  historyOpName: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#4285f4',
  },
  historyTime: {
    fontSize: '0.75rem',
    color: '#9ca3af',
  },
  historyInputs: {
    fontSize: '0.78rem',
    color: '#6b7280',
    fontFamily: 'monospace',
    marginBottom: '4px',
    lineHeight: '1.4',
    wordBreak: 'break-word',
  },
  historyResult: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#1f2937',
    fontFamily: 'monospace',
  },
  historyClearBtn: {
    padding: '4px 10px',
    border: '1px solid #d0d9f0',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: '#9ca3af',
    fontSize: '0.7rem',
    cursor: 'pointer',
    marginTop: '8px',
    outline: 'none',
  },
};

const spinKeyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

/* ── Tooltip component ────────────────────────────────────────── */

const tipStyles = {
  wrap: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
  },
  icon: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '1.5px solid #9ca3af',
    background: 'transparent',
    color: '#9ca3af',
    fontSize: '10px',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'help',
    flexShrink: 0,
    transition: 'border-color 0.15s, color 0.15s, background 0.15s',
    outline: 'none',
    padding: 0,
  },
  iconHover: {
    borderColor: '#4285f4',
    color: '#4285f4',
    background: 'rgba(66,133,244,0.08)',
  },
  bubble: {
    position: 'absolute',
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#1f2937',
    color: 'white',
    fontSize: '12px',
    lineHeight: '1.5',
    padding: '8px 12px',
    borderRadius: '8px',
    width: '220px',
    zIndex: 10,
    pointerEvents: 'none',
  },
  arrow: {
    content: '',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#1f2937 transparent transparent transparent',
  },
};

function Tooltip({ text }) {
  const [show, setShow] = useState(false);
  if (!text) return null;
  return (
    <span style={tipStyles.wrap}>
      <button
        style={{ ...tipStyles.icon, ...(show ? tipStyles.iconHover : {}) }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        tabIndex={0}
        aria-label="Help"
      >
        ?
      </button>
      {show && (
        <span style={tipStyles.bubble}>
          {text}
          <span style={tipStyles.arrow} />
        </span>
      )}
    </span>
  );
}

/* ── helpers for history ─────────────────────────────────────── */

function fmtMatCompact(m, rows, cols) {
  if (rows <= 2 && cols <= 2) {
    const data = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        const v = m[r * cols + c];
        row.push(Number.isInteger(v) ? String(v) : parseFloat(v.toFixed(4)).toString());
      }
      data.push('[' + row.join(', ') + ']');
    }
    return data.join(' ');
  }
  return `${rows}\u00D7${cols}`;
}

function formatHistoryResult(res) {
  if (res.type === 'scalar') return String(res.value);
  if (res.type === 'vector') return '(' + res.value.join(', ') + ')';
  if (res.type === 'matrix') return `${res.rows}\u00D7${res.cols} matrix`;
  if (res.type === 'boolean') return res.value ? '\u2713 TRUE' : '\u2717 FALSE';
  if (res.type === 'decomposition') return res.label;
  return String(res.value);
}

function formatHistoryInputs(entry) {
  const parts = entry.matrices.map((m, i) =>
    `${String.fromCharCode(65 + i)}(${m.rows}\u00D7${m.cols})`
  );
  if (entry.scalarValue !== null && entry.scalarValue !== undefined) {
    parts.push(`c=${entry.scalarValue}`);
  }
  return parts.join('  ');
}

/* ── component ────────────────────────────────────────────────── */

export default function MatrixCalculator({ descriptions: descriptionsProp } = {}) {
  const [step, setStep] = useState('operation-type');
  const [operationType, setOperationType] = useState('');
  const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
  const [matrices, setMatrices] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState('');
  const [scalarValue, setScalarValue] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [matrixAccordionOpen, setMatrixAccordionOpen] = useState({});
  const [computedSteps, setComputedSteps] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [fillValues, setFillValues] = useState({});

  /* ── merge descriptions: props override defaults ── */
  const mergedDescriptions = descriptionsProp
    ? Object.keys(defaultDescriptions).reduce((acc, cat) => {
        acc[cat] = {
          ...defaultDescriptions[cat],
          ...(descriptionsProp[cat] || {}),
        };
        return acc;
      }, {})
    : defaultDescriptions;

  const toggleMatrixAccordion = (mi) => {
    setMatrixAccordionOpen(prev => ({ ...prev, [mi]: !prev[mi] }));
  };

  const needsAccordion = () => operationType === 'two' && dimensions.cols > 5;

  const operationTypes = [
    { id: 'single', label: 'Single Matrix', description: 'Determinant, transpose, inverse, trace, rank' },
    { id: 'two', label: 'Two Matrices', description: 'Addition, subtraction, multiplication' },
    { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, addition, power' },
    { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' },
  ];

  const operationsByType = {
    single: [
      'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank',
      'LU Decomposition',
    ],
    two: [
      'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
      'Kronecker Product', 'Commutator', 'Anti-commutator',
    ],
    scalar: [
      'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
      'Matrix Power (Scalar)',
    ],
    system: [
      'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
      "Cramer's Rule", 'Matrix Equation AX=B', 'Least Squares Solution',
    ],
  };

  const squareOnly = ['Determinant', 'Inverse', 'Trace', 'LU Decomposition'];

  /* ── validation ── */

  const validateInputs = () => {
    const newErrors = [];
    if (!selectedOperation) newErrors.push('Please select an operation');

    matrices.forEach((matrix, index) => {
      const name = String.fromCharCode(65 + index);
      const total = matrix.rows * matrix.cols;
      const empty = matrix.data.filter(c => c === '' || c === null || c === undefined).length;
      const valid = matrix.data.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
      if (empty > 0) newErrors.push(`Matrix ${name} has empty cells`);
      if (valid !== total) newErrors.push(`Matrix ${name} contains invalid numbers`);
    });

    if (operationType === 'two' && matrices.length === 2) {
      const [a, b] = matrices;
      if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
        if (a.rows !== b.rows || a.cols !== b.cols)
          newErrors.push('Matrices must have the same dimensions for this operation');
      }
      if (selectedOperation === 'Multiplication') {
        if (a.cols !== b.rows)
          newErrors.push('For multiplication, columns of A must equal rows of B');
      }
    }

    if (operationType === 'single' && squareOnly.includes(selectedOperation)) {
      const m = matrices[0];
      if (m && m.rows !== m.cols) newErrors.push('This operation requires a square matrix');
    }

    if (operationType === 'scalar') {
      if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(parseFloat(scalarValue)))
        newErrors.push('Please enter a valid scalar value');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  /* ── handlers ── */

  const handleReset = () => {
    setStep('operation-type');
    setOperationType('');
    setDimensions({ rows: 3, cols: 3 });
    setMatrices([]);
    setSelectedOperation('');
    setScalarValue('');
    setResult(null);
    setErrors([]);
    setIsLoading(false);
    setComputedSteps(null);
  };

  const clearMatrix = (mi) => {
    const updated = [...matrices];
    updated[mi] = { ...updated[mi], data: new Array(updated[mi].rows * updated[mi].cols).fill('') };
    setMatrices(updated);
  };

  const randomizeMatrix = (mi) => {
    const updated = [...matrices];
    const total = updated[mi].rows * updated[mi].cols;
    updated[mi] = {
      ...updated[mi],
      data: Array.from({ length: total }, () => String(Math.floor(Math.random() * 21) - 10)),
    };
    setMatrices(updated);
  };

  const fillMatrix = (mi) => {
    const val = fillValues[mi] !== undefined && fillValues[mi] !== '' ? fillValues[mi] : '0';
    const updated = [...matrices];
    const total = updated[mi].rows * updated[mi].cols;
    updated[mi] = {
      ...updated[mi],
      data: new Array(total).fill(String(val)),
    };
    setMatrices(updated);
  };

  const diagonalMatrix = (mi) => {
    const val = fillValues[mi] !== undefined && fillValues[mi] !== '' ? fillValues[mi] : '1';
    const updated = [...matrices];
    const { rows, cols } = updated[mi];
    const data = new Array(rows * cols).fill('0');
    const diag = Math.min(rows, cols);
    for (let i = 0; i < diag; i++) {
      data[i * cols + i] = String(val);
    }
    updated[mi] = { ...updated[mi], data };
    setMatrices(updated);
  };

  const updateFillValue = (mi, value) => {
    setFillValues(prev => ({ ...prev, [mi]: value }));
  };

  const handleOperationTypeSelect = (type) => {
    setOperationType(type);
    setSelectedOperation('');
    setErrors([]);
    setResult(null);
    setComputedSteps(null);
    setMatrixAccordionOpen({ 0: true, 1: true });

    let count = 1;
    if (type === 'two') count = 2;
    if (type === 'system') count = 2;

    const initialMatrices = Array(count).fill(null).map((_, i) => ({
      id: i,
      rows: dimensions.rows,
      cols: type === 'system' && i === count - 1 ? 1 : dimensions.cols,
      data: new Array(dimensions.rows * (type === 'system' && i === count - 1 ? 1 : dimensions.cols)).fill(''),
    }));
    setMatrices(initialMatrices);
    setStep('input');
  };

  const handleDimensionsChange = (dim, value) => {
    if (value === '') {
      setDimensions(prev => ({ ...prev, [dim]: '' }));
      return;
    }
    const val = parseInt(value);
    const newDims = { ...dimensions, [dim]: val };
    setDimensions(newDims);

    if (newDims.rows >= 1 && newDims.rows <= 10 && newDims.cols >= 1 && newDims.cols <= 10) {
      const updated = matrices.map((matrix, i) => {
        const nr = newDims.rows;
        const nc = operationType === 'system' && i === matrices.length - 1 ? 1 : newDims.cols;
        const newData = new Array(nr * nc).fill('');
        for (let r = 0; r < Math.min(matrix.rows, nr); r++) {
          for (let c = 0; c < Math.min(matrix.cols, nc); c++) {
            const oi = r * matrix.cols + c;
            const ni = r * nc + c;
            if (oi < matrix.data.length) newData[ni] = matrix.data[oi];
          }
        }
        return { ...matrix, rows: nr, cols: nc, data: newData };
      });
      setMatrices(updated);
      setErrors([]);
    } else {
      const errs = [];
      if (newDims.rows < 1 || newDims.rows > 10) errs.push('Rows must be between 1 and 10');
      if (newDims.cols < 1 || newDims.cols > 10) errs.push('Columns must be between 1 and 10');
      setErrors(errs);
    }
  };

  const updateMatrixCell = (mi, ci, value) => {
    const updated = [...matrices];
    updated[mi] = { ...updated[mi], data: [...updated[mi].data] };
    updated[mi].data[ci] = value;
    setMatrices(updated);
    if (errors.length > 0) setErrors([]);
  };

  const addMatrix = () => {
    if (operationType === 'system' && matrices.length < 5) {
      setMatrices([...matrices, {
        id: matrices.length,
        rows: dimensions.rows,
        cols: dimensions.cols,
        data: new Array(dimensions.rows * dimensions.cols).fill(''),
      }]);
    }
  };

  const removeMatrix = (mi) => {
    if (operationType === 'system' && matrices.length > 2)
      setMatrices(matrices.filter((_, i) => i !== mi));
  };

  const getAvailableOperations = () => operationsByType[operationType] || [];

  const handleOperationSelect = (op) => {
    setSelectedOperation(op);
    setErrors([]);
    setResult(null);
    setComputedSteps(null);
  };

  const executeOperation = () => {
    if (!validateInputs()) return;
    setIsLoading(true);
    setResult(null);
    setComputedSteps(null);

    setTimeout(() => {
      const numericMatrices = matrices.map(m => ({
        rows: m.rows,
        cols: m.cols,
        data: m.data.map(c => parseFloat(c)),
      }));

      const params = {
        operation: selectedOperation,
        operationType,
        dimensions,
        matrices: numericMatrices,
        scalarValue: scalarValue !== '' ? parseFloat(scalarValue) : null,
      };

      const res = computeMatrix(params);
      setResult(res);

      if (res.type === 'error') {
        setErrors([res.value]);
      } else {
        // Push to history on success
        const entry = {
          id: Date.now(),
          operation: selectedOperation,
          matrices: numericMatrices,
          scalarValue: params.scalarValue,
          result: res,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        };
        setHistory(prev => [entry, ...prev]);
      }

      // Generate dynamic steps
      const stepFn = operationSteps[operationType]?.[selectedOperation];
      if (stepFn) {
        // Convert flat data to 2D for steps functions
        const mats2D = numericMatrices.map(m => {
          const mat = [];
          for (let r = 0; r < m.rows; r++) {
            mat.push(m.data.slice(r * m.cols, r * m.cols + m.cols));
          }
          return mat;
        });
        const extras = {
          scalarValue: params.scalarValue,
        };
        const stepLines = stepFn(mats2D, res, extras);
        setComputedSteps(stepLines);
      }

      setIsLoading(false);
    }, 150);
  };

  const canExecute = () => selectedOperation && matrices.length > 0 && !isLoading;

  const needsScalarInput = () =>
    operationType === 'scalar' || selectedOperation === 'Matrix Power (Scalar)';

  const isSquareRequired = (op) => squareOnly.includes(op);

  const isOpDisabled = (op) => {
    if (!isSquareRequired(op)) return false;
    const m = matrices[0];
    return m && m.rows !== m.cols;
  };

  /* ── explanation helpers ── */
  const getDescription = () => {
    const pool = mergedDescriptions[operationType];
    if (!pool) return '';
    if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
    return pool._default;
  };

  const getExplanationHeading = () => {
    if (selectedOperation) return selectedOperation;
    const labels = {
      single: 'Single Matrix Ops',
      two: 'Two Matrix Ops',
      scalar: 'Scalar Ops',
      system: 'System Ops',
    };
    return labels[operationType] || 'Explanation';
  };

  /* ── left-panel button styles ── */
  const catBtnStyle = (id) => ({
    padding: '12px',
    border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
    borderRadius: '10px',
    backgroundColor: operationType === id ? '#f0f7ff' : 'white',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.25s ease',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
  });
  const catLabelStyle = (id) => ({
    fontSize: '0.9rem',
    fontWeight: '600',
    color: operationType === id ? '#4285f4' : '#1f2937',
    marginBottom: '4px',
  });
  const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

  const dimInputStyle = (val) => ({
    width: '60px',
    padding: '8px 12px',
    border: val < 1 || val > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    textAlign: 'center',
    outline: 'none',
  });

  const getMatrixGridExtra = () => {
    if (operationType === 'single') return s.matrixGridSingle;
    if (operationType === 'two' || operationType === 'scalar') {
      if (needsAccordion()) return s.matrixGridSingle;
      return s.matrixGridTwo;
    }
    return s.matrixGridMultiple;
  };

  /* ── render a matrix card ── */
  const renderMatrix = (matrix, mi, nested = false) => {
    const gridStyle = {
      gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
      gridTemplateRows: `repeat(${matrix.rows}, 1fr)`,
    };
    const label = operationType === 'system' && mi === matrices.length - 1 && matrices.length > 1
      ? ` (Vector)` : '';

    return (
      <div key={matrix.id} style={nested ? {} : s.matrixCard}>
        {!nested && (
          <div style={s.matrixHeader}>
            <h4 style={s.matrixName}>Matrix {String.fromCharCode(65 + mi)}{label}</h4>
            <div style={s.matrixHeaderRight}>
              <span style={s.matrixDimLabel}>{matrix.rows} × {matrix.cols}</span>
              <button onClick={() => randomizeMatrix(mi)} style={s.randomMatrixButton} title="Fill with random numbers">
                Random
              </button>
              <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
                Clear
              </button>
              {operationType === 'system' && matrices.length > 2 && mi >= 2 && (
                <button onClick={() => removeMatrix(mi)} style={s.removeButton}>Remove</button>
              )}
              <Tooltip text="Random fills with integers from -10 to 10. Clear empties all cells." />
            </div>
          </div>
        )}
        {nested && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginBottom: '8px' }}>
            <button onClick={() => randomizeMatrix(mi)} style={s.randomMatrixButton} title="Fill with random numbers">
              Random
            </button>
            <button onClick={() => clearMatrix(mi)} style={s.clearMatrixButton} title="Clear this matrix">
              Clear
            </button>
          </div>
        )}
        {/* Fill controls */}
        <div style={s.fillControlsRow}>
          <span style={s.fillLabel}>Value:</span>
          <input
            type="number"
            step="any"
            value={fillValues[mi] !== undefined ? fillValues[mi] : ''}
            onChange={(e) => updateFillValue(mi, e.target.value)}
            placeholder="0"
            style={s.fillValueInput}
          />
          <button onClick={() => fillMatrix(mi)} style={s.fillButton} title="Fill all cells with this value">
            Fill All
          </button>
          <button onClick={() => diagonalMatrix(mi)} style={s.diagonalButton} title="Diagonal matrix with this value (default 1)">
            Diagonal
          </button>
          <Tooltip text="Fill All sets every cell to the value. Diagonal places it on the main diagonal with zeros elsewhere (default 1 = identity matrix)." />
        </div>
        <div style={s.matrixContainer}>
          <div style={s.matrixContent}>
            <span style={s.matrixBracket}>[</span>
            <div style={{ ...s.matrixTable, ...gridStyle }}>
              {matrix.data.map((cell, ci) => (
                <input
                  key={ci}
                  type="number"
                  step="any"
                  value={cell}
                  onChange={(e) => updateMatrixCell(mi, ci, e.target.value)}
                  placeholder="0"
                  style={{
                    ...s.matrixCell,
                    ...(cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? s.matrixCellError : {}),
                  }}
                />
              ))}
            </div>
            <span style={s.matrixBracket}>]</span>
          </div>
        </div>
      </div>
    );
  };

  /* ── render result based on type ── */
  const renderResultMatrix = (matrix) => (
    <table style={s.resultMatrixTable}>
      <tbody>
        {matrix.map((row, ri) => (
          <tr key={ri}>
            {row.map((val, ci) => (
              <td key={ci} style={s.resultMatrixCell}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderResult = () => {
    if (!result) return 'Select matrices and operation, then click Execute';

    if (result.type === 'error') {
      return <span style={s.resultError}>{result.value}</span>;
    }

    if (result.type === 'scalar') {
      return (
        <>
          <span style={s.resultLabel}>{result.label}</span>
          <span style={s.resultValue}>{result.value}</span>
        </>
      );
    }

    if (result.type === 'vector') {
      return (
        <>
          <span style={s.resultLabel}>{result.label}</span>
          <div style={s.resultVarRow}>
            {result.value.map((val, i) => (
              <span key={i} style={s.resultVarItem}>
                {result.variables ? result.variables[i] : `x${i + 1}`} = {val}
              </span>
            ))}
          </div>
          {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
        </>
      );
    }

    if (result.type === 'matrix') {
      return (
        <>
          <span style={s.resultLabel}>{result.label} ({result.rows}&times;{result.cols})</span>
          {renderResultMatrix(result.value)}
        </>
      );
    }

    if (result.type === 'boolean') {
      return (
        <>
          <span style={s.resultLabel}>{result.label}</span>
          <span style={result.value ? s.resultTrue : s.resultFalse}>
            {result.value ? '\u2713 TRUE' : '\u2717 FALSE'}
          </span>
          {result.detail && <span style={s.resultDetail}>{result.detail}</span>}
        </>
      );
    }

    if (result.type === 'decomposition') {
      return (
        <div style={s.resultDecompSection}>
          <span style={s.resultLabel}>{result.label}</span>
          {Object.keys(result.value).map((key) => {
            const part = result.value[key];
            return (
              <div key={key} style={{ textAlign: 'center' }}>
                <div style={s.resultDecompLabel}>{part.label}</div>
                {renderResultMatrix(part.matrix)}
              </div>
            );
          })}
        </div>
      );
    }

    return JSON.stringify(result.value);
  };

  /* ── JSX ─────────────────────────────────────────────────────── */

  return (
    <div style={s.container}>
      <style>{spinKeyframes}</style>
      <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

        {/* Header */}
        <div style={s.header}>
          <h1 style={s.title}>Matrix Calculator</h1>
          <p style={s.subtitle}>Professional matrix operations calculator</p>
        </div>

        {/* ── INITIAL STATE ── */}
        {step === 'operation-type' && (
          <div>
            <h2 style={s.stepTitle}>Select Operation Type</h2>
            <div style={s.operationTypeGrid}>
              {operationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleOperationTypeSelect(type.id)}
                  style={s.operationTypeCard}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#4285f4';
                    e.currentTarget.style.backgroundColor = '#f8f9ff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                    e.currentTarget.style.backgroundColor = 'white';
                  }}
                >
                  <div style={s.operationTypeTitle}>{type.label}</div>
                  <div style={s.operationTypeDescription}>{type.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── EXPANDED STATE — 3-column ── */}
        {step === 'input' && (
          <div style={s.threeColLayout}>

            {/* ▸ LEFT — category buttons */}
            <div style={s.leftPanel}>
              <div style={s.leftPanelTitle}>Category</div>
              {operationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleOperationTypeSelect(type.id)}
                  style={catBtnStyle(type.id)}
                  onMouseOver={(e) => {
                    if (operationType !== type.id) {
                      e.currentTarget.style.borderColor = '#4285f4';
                      e.currentTarget.style.backgroundColor = '#f8f9ff';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (operationType !== type.id) {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.backgroundColor = 'white';
                    }
                  }}
                >
                  <div style={catLabelStyle(type.id)}>{type.label}</div>
                  <div style={catDescStyle}>{type.description}</div>
                </button>
              ))}
            </div>

            {/* ▸ MIDDLE — calculator */}
            <div>
              <div style={s.inputHeader}>
                <h2 style={s.inputTitle}>Matrix Input ({dimensions.rows}×{dimensions.cols})</h2>
                <div style={s.buttonGroup}>
                  <Tooltip text="Enter matrix values below. Use Random for test values, Clear to reset, Fill All to set uniform values, or Diagonal for identity-like matrices." />
                  <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
                </div>
              </div>

              {/* Dimensions */}
              <div style={s.dimControls}>
                <div style={s.dimGroup}>
                  <label style={s.dimLabel}>Rows:</label>
                  <input
                    type="number" min="1" max="10"
                    value={dimensions.rows}
                    onChange={(e) => handleDimensionsChange('rows', e.target.value)}
                    style={dimInputStyle(dimensions.rows)}
                  />
                </div>
                <div style={s.dimGroup}>
                  <label style={s.dimLabel}>Cols:</label>
                  <input
                    type="number" min="1" max="10"
                    value={dimensions.cols}
                    onChange={(e) => handleDimensionsChange('cols', e.target.value)}
                    style={dimInputStyle(dimensions.cols)}
                  />
                </div>
                <span style={s.dimHint}>
                  {dimensions.rows}×{dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
                </span>
                {operationType === 'single' && dimensions.rows !== dimensions.cols && (
                  <span style={s.dimWarning}>Some operations require square matrices</span>
                )}
                <Tooltip text="Set matrix dimensions (1–10 each). Changing resizes all matrices, preserving existing values that fit." />
              </div>

              {/* Errors */}
              {errors.length > 0 && (
                <div style={s.errorSection}>
                  <div style={s.errorTitle}>Please fix the following:</div>
                  <ul style={s.errorList}>
                    {errors.map((err, i) => (
                      <li key={i} style={s.errorItem}>&bull; {err}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Matrices */}
              <div style={{ ...s.matrixGrid, ...getMatrixGridExtra() }}>
                {matrices.map((m, i) => {
                  if (needsAccordion()) {
                    const isOpen = matrixAccordionOpen[i] !== false;
                    const label = operationType === 'system' && i === matrices.length - 1 && matrices.length > 1
                      ? ' (Vector)' : '';
                    return (
                      <div key={m.id} style={s.matrixAccordion}>
                        <button
                          onClick={() => toggleMatrixAccordion(i)}
                          style={s.matrixAccordionToggle}
                        >
                          <div style={s.matrixAccordionLeft}>
                            <span style={s.matrixAccordionName}>Matrix {String.fromCharCode(65 + i)}{label}</span>
                            <span style={s.matrixAccordionDim}>{m.rows} × {m.cols}</span>
                          </div>
                          <span style={{
                            ...s.matrixAccordionArrow,
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}>
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div style={s.matrixAccordionBody}>
                            {renderMatrix(m, i, true)}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return renderMatrix(m, i);
                })}
              </div>

              {/* Add matrix (system) */}
              {operationType === 'system' && matrices.length < 5 && (
                <div style={s.addMatrixContainer}>
                  <button onClick={addMatrix} style={s.addMatrixButton}>+ Add Matrix</button>
                </div>
              )}

              {/* Scalar input */}
              {needsScalarInput() && (
                <div style={s.scalarSection}>
                  <label style={s.scalarLabel}>Scalar value:</label>
                  <input
                    type="number" step="any"
                    value={scalarValue}
                    onChange={(e) => setScalarValue(e.target.value)}
                    placeholder="Enter value"
                    style={s.scalarInput}
                  />
                  <Tooltip text="The scalar is applied to every element according to the selected operation (multiply, add, subtract, or power)." />
                </div>
              )}

              {/* Operations */}
              <div style={s.operationsSection}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <h3 style={{ ...s.operationsTitle, marginBottom: 0 }}>Available Operations</h3>
                  <Tooltip text={selectedOperation ? getDescription() : 'Select an operation to see its description. Grayed-out operations require square matrices.'} />
                </div>
                <div style={s.operationsGrid}>
                  {getAvailableOperations().map((op) => {
                    const sel = selectedOperation === op;
                    const dis = isOpDisabled(op);
                    return (
                      <button
                        key={op}
                        onClick={() => handleOperationSelect(op)}
                        disabled={dis}
                        style={{
                          ...s.operationButton,
                          ...(sel ? s.operationButtonSelected : {}),
                          ...(dis ? s.operationButtonDisabled : {}),
                        }}
                      >
                        {op}
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button
                    onClick={executeOperation}
                    disabled={!canExecute()}
                    style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
                  >
                    {isLoading ? (
                      <div style={s.loading}>
                        <div style={s.spinner} />
                        Calculating...
                      </div>
                    ) : (
                      'Execute Operation'
                    )}
                  </button>
                </div>
              </div>

              {/* Result */}
              <div style={s.resultsSection}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <h4 style={{ ...s.resultsTitle, margin: 0 }}>Result</h4>
                  <Tooltip text="Results appear here after clicking Execute. Outputs vary by operation: scalars, vectors, matrices, or decompositions (multiple matrices)." />
                </div>
                <div style={s.resultsContent}>
                  {renderResult()}
                </div>
              </div>
            </div>

            {/* ▸ RIGHT — explanation panel */}
            <div style={s.explanationPanel}>
              {/* Theory (from merged descriptions — overridable via props) */}
              <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
              <p style={s.explanationBody}>{processContent(getDescription())}</p>

              {/* Steps (dynamic — always from matrixExplanations.js, never overridable) */}
              {computedSteps && computedSteps.length > 0 && (
                <>
                  <hr style={s.explanationDivider} />
                  <div style={s.stepsTitle}>Calculation Steps</div>
                  <ul style={s.stepsList}>
                    {computedSteps.map((line, i) => (
                      <li key={i} style={s.stepItem}>{line}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* History accordion */}
              {history.length > 0 && (
                <div style={s.historySection}>
                  <button
                    onClick={() => setHistoryOpen(!historyOpen)}
                    style={s.historyToggle}
                  >
                    <span>History ({history.length})</span>
                    <span style={{
                      ...s.historyArrow,
                      transform: historyOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}>
                      ▼
                    </span>
                  </button>

                  {historyOpen && (
                    <>
                      <ul style={s.historyList}>
                        {history.map((entry) => (
                          <li key={entry.id} style={s.historyEntry}>
                            <div style={s.historyEntryHeader}>
                              <span style={s.historyOpName}>{entry.operation}</span>
                              <span style={s.historyTime}>{entry.time}</span>
                            </div>
                            <div style={s.historyInputs}>
                              {formatHistoryInputs(entry)}
                            </div>
                            <div style={s.historyResult}>
                              = {formatHistoryResult(entry.result)}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => { setHistory([]); setHistoryOpen(false); }}
                        style={s.historyClearBtn}
                      >
                        Clear history
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}