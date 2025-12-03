

import React, { useState, useEffect } from 'react';
import styles from './MatrixCalculator.module.css';

export default function MatrixCalculatorAll() {
  const [step, setStep] = useState('operation-type');
  const [operationType, setOperationType] = useState('');
  const [dimensions, setDimensions] = useState({ rows: 3, cols: 3 });
  const [matrices, setMatrices] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState('');
  const [scalarValue, setScalarValue] = useState('');
  const [result, setResult] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const operationTypes = [
    { id: 'single', label: 'Single Matrix Operations', description: 'Determinant, transpose, inverse, eigenvalues' },
    { id: 'two', label: 'Two Matrix Operations', description: 'Addition, subtraction, multiplication' },
    { id: 'scalar', label: 'Scalar Operations', description: 'Scalar multiplication, scalar addition' },
    { id: 'system', label: 'System Operations', description: 'Solve linear systems, LU decomposition' }
  ];

  const operationsByType = {
    single: [
      'Transpose', 'Determinant', 'Inverse', 'Trace', 'Rank', 
      'Eigenvalues', 'Eigenvectors', 'Characteristic Polynomial',
      'LU Decomposition', 'QR Decomposition', 'Singular Value Decomposition'
    ],
    two: [
      'Addition', 'Subtraction', 'Multiplication', 'Element-wise Multiplication',
      'Kronecker Product', 'Matrix Power', 'Commutator', 'Anti-commutator'
    ],
    scalar: [
      'Scalar Multiplication', 'Scalar Addition', 'Scalar Subtraction',
      'Matrix Power (Scalar)', 'Exponential', 'Logarithm'
    ],
    system: [
      'Solve Linear System', 'Gaussian Elimination', 'Gauss-Jordan',
      'Cramer\'s Rule', 'Matrix Equation AX=B', 'Least Squares Solution'
    ]
  };

  // Validation functions
  const validateDimensions = () => {
    const newErrors = [];
    
    if (dimensions.rows < 1 || dimensions.rows > 10) {
      newErrors.push('Number of rows must be between 1 and 10');
    }
    if (dimensions.cols < 1 || dimensions.cols > 10) {
      newErrors.push('Number of columns must be between 1 and 10');
    }
    
    return newErrors;
  };

  const validateMatrices = () => {
    const newErrors = [];

    if (!selectedOperation) {
      newErrors.push('Please select an operation');
    }

    // Check if matrices have valid entries
    matrices.forEach((matrix, index) => {
      const matrixName = String.fromCharCode(65 + index);
      const totalCells = matrix.rows * matrix.cols;
      const emptyCells = matrix.data.filter(cell => cell === '' || cell === null || cell === undefined).length;
      const validCells = matrix.data.filter(cell => !isNaN(parseFloat(cell)) && isFinite(cell)).length;

      if (emptyCells > 0) {
        newErrors.push(`Matrix ${matrixName} has empty cells`);
      }

      if (validCells !== totalCells) {
        newErrors.push(`Matrix ${matrixName} contains invalid numbers`);
      }
    });

    // Operation-specific validations
    if (operationType === 'two') {
      if (matrices.length !== 2) {
        newErrors.push('Two matrix operations require exactly 2 matrices');
      } else {
        const [matrixA, matrixB] = matrices;
        
        if (['Addition', 'Subtraction', 'Element-wise Multiplication'].includes(selectedOperation)) {
          if (matrixA.rows !== matrixB.rows || matrixA.cols !== matrixB.cols) {
            newErrors.push('Matrices must have the same dimensions for this operation');
          }
        }
        
        if (selectedOperation === 'Multiplication') {
          if (matrixA.cols !== matrixB.rows) {
            newErrors.push('For multiplication, columns of Matrix A must equal rows of Matrix B');
          }
        }
      }
    }

    if (operationType === 'single') {
      if (['Determinant', 'Inverse', 'Eigenvalues', 'Eigenvectors'].includes(selectedOperation)) {
        const matrix = matrices[0];
        if (matrix && matrix.rows !== matrix.cols) {
          newErrors.push('This operation requires a square matrix');
        }
      }
    }

    if (operationType === 'scalar') {
      if (scalarValue === '' || isNaN(parseFloat(scalarValue)) || !isFinite(scalarValue)) {
        newErrors.push('Please enter a valid scalar value');
      }
    }

    return newErrors;
  };

  const validateInputs = () => {
    const matrixErrors = validateMatrices();
    setErrors(matrixErrors);
    return matrixErrors.length === 0;
  };

  // Navigation functions
  const handleReset = () => {
    setStep('operation-type');
    setOperationType('');
    setDimensions({ rows: 3, cols: 3 });
    setMatrices([]);
    setSelectedOperation('');
    setScalarValue('');
    setResult('');
    setErrors([]);
    setIsLoading(false);
  };

  const handleBack = () => {
    setErrors([]);
    setStep('operation-type');
    setOperationType('');
    setMatrices([]);
    setSelectedOperation('');
    setResult('');
    setScalarValue('');
  };

  const handleOperationTypeSelect = (type) => {
    setOperationType(type);
    setErrors([]);

    // Initialize matrices based on operation type with default dimensions
    let matrixCount = 1;
    if (type === 'two') matrixCount = 2;
    if (type === 'system') matrixCount = 2; // A and B for Ax=B

    const initialMatrices = Array(matrixCount).fill(null).map((_, index) => ({
      id: index,
      rows: dimensions.rows,
      cols: type === 'system' && index === 1 ? 1 : dimensions.cols, // B vector for systems
      data: new Array(dimensions.rows * (type === 'system' && index === 1 ? 1 : dimensions.cols)).fill('')
    }));

    setMatrices(initialMatrices);
    setStep('input');
  };

  const handleDimensionsChange = (dimension, value) => {
    const inputValue = value;
    
    // Handle empty input
    if (inputValue === '') {
      setDimensions(prev => ({ ...prev, [dimension]: '' }));
      return;
    }
    
    const numericValue = parseInt(inputValue);
    const newDimensions = { ...dimensions, [dimension]: numericValue };
    
    // Always update display value
    setDimensions(newDimensions);
    
    // Only update matrices if both dimensions are valid
    if (newDimensions.rows >= 1 && newDimensions.rows <= 10 && 
        newDimensions.cols >= 1 && newDimensions.cols <= 10) {
      
      // Update existing matrices with new dimensions
      const updatedMatrices = matrices.map((matrix, index) => {
        const newRows = newDimensions.rows;
        const newCols = operationType === 'system' && index === 1 ? 1 : newDimensions.cols;
        const newData = new Array(newRows * newCols).fill('');
        
        // Copy existing values that fit in new dimensions
        for (let row = 0; row < Math.min(matrix.rows, newRows); row++) {
          for (let col = 0; col < Math.min(matrix.cols, newCols); col++) {
            const oldIndex = row * matrix.cols + col;
            const newIndex = row * newCols + col;
            if (oldIndex < matrix.data.length) {
              newData[newIndex] = matrix.data[oldIndex];
            }
          }
        }
        
        return {
          ...matrix,
          rows: newRows,
          cols: newCols,
          data: newData
        };
      });
      
      setMatrices(updatedMatrices);
      setErrors([]);
    } else {
      const dimensionErrors = [];
      if (newDimensions.rows < 1 || newDimensions.rows > 10) {
        dimensionErrors.push('Number of rows must be between 1 and 10');
      }
      if (newDimensions.cols < 1 || newDimensions.cols > 10) {
        dimensionErrors.push('Number of columns must be between 1 and 10');
      }
      setErrors(dimensionErrors);
    }
  };

  // Matrix manipulation functions
  const updateMatrixCell = (matrixIndex, cellIndex, value) => {
    const updatedMatrices = [...matrices];
    updatedMatrices[matrixIndex].data[cellIndex] = value;
    setMatrices(updatedMatrices);
    
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const addMatrix = () => {
    if (operationType === 'system' && matrices.length < 5) {
      const newMatrix = {
        id: matrices.length,
        rows: dimensions.rows,
        cols: dimensions.cols,
        data: new Array(dimensions.rows * dimensions.cols).fill('')
      };
      setMatrices([...matrices, newMatrix]);
    }
  };

  const removeMatrix = (matrixIndex) => {
    if (operationType === 'system' && matrices.length > 2) {
      setMatrices(matrices.filter((_, index) => index !== matrixIndex));
    }
  };

  const getAvailableOperations = () => {
    return operationsByType[operationType] || [];
  };

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
    setErrors([]);
  };

  const renderMatrix = (matrix, matrixIndex) => {
    const gridStyle = {
      gridTemplateColumns: `repeat(${matrix.cols}, 1fr)`,
      gridTemplateRows: `repeat(${matrix.rows}, 1fr)`
    };

    return (
      <div key={matrix.id} className={styles.matrixCard}>
        <div className={styles.matrixHeader}>
          <h4 className={styles.matrixName}>
            Matrix {String.fromCharCode(65 + matrixIndex)}
            {operationType === 'system' && matrixIndex === matrices.length - 1 && matrices.length > 1 && ' (Vector)'}
          </h4>
          <div className={styles.matrixDimensions}>
            {matrix.rows} × {matrix.cols}
          </div>
          {operationType === 'system' && matrices.length > 2 && matrixIndex >= 2 && (
            <button
              onClick={() => removeMatrix(matrixIndex)}
              className={styles.removeButton}
            >
              Remove
            </button>
          )}
        </div>
        
        <div className={styles.matrixContainer}>
          <div className={styles.matrixContent}>
            <span className={styles.matrixBracket}>[</span>
            <div 
              className={styles.matrixTable}
              style={gridStyle}
            >
              {matrix.data.map((cell, cellIndex) => (
                <input
                  key={cellIndex}
                  type="number"
                  step="any"
                  value={cell}
                  onChange={(e) => updateMatrixCell(matrixIndex, cellIndex, e.target.value)}
                  className={`${styles.matrixCell} ${
                    cell !== '' && (isNaN(parseFloat(cell)) || !isFinite(cell)) ? styles.error : ''
                  }`}
                  placeholder="0"
                />
              ))}
            </div>
            <span className={styles.matrixBracket}>]</span>
          </div>
        </div>
      </div>
    );
  };

  const executeOperation = async () => {
    if (!validateInputs()) {
      return;
    }

    setIsLoading(true);
    setResult('');

    try {
      // Prepare data for API
      const operationData = {
        operation: selectedOperation,
        operationType,
        dimensions,
        matrices: matrices.map(matrix => ({
          rows: matrix.rows,
          cols: matrix.cols,
          data: matrix.data.map(cell => parseFloat(cell))
        })),
        scalarValue: scalarValue ? parseFloat(scalarValue) : null
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Placeholder result
      setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
      
    } catch (error) {
      setErrors(['Failed to execute operation. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  const canExecute = () => {
    return selectedOperation && matrices.length > 0 && !isLoading;
  };

  const getMatrixGridClass = () => {
    if (operationType === 'single') return styles.matrixGridSingle;
    if (operationType === 'two' || operationType === 'scalar') return styles.matrixGridTwo;
    return styles.matrixGridMultiple;
  };

  const needsScalarInput = () => {
    return operationType === 'scalar' || 
           (operationType === 'single' && ['Matrix Power (Scalar)'].includes(selectedOperation));
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Matrix Calculator</h1>
          <p className={styles.subtitle}>Professional matrix operations calculator</p>
        </div>

        {/* Step 1: Operation Type Selection */}
        {step === 'operation-type' && (
          <div>
            <h2 className={styles.stepTitle}>Select Operation Type</h2>
            <div className={styles.operationTypeGrid}>
              {operationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleOperationTypeSelect(type.id)}
                  className={styles.operationTypeCard}
                >
                  <div className={styles.operationTypeTitle}>
                    {type.label}
                  </div>
                  <div className={styles.operationTypeDescription}>
                    {type.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Matrix Input and Operations */}
        {step === 'input' && (
          <div>
            <div className={styles.inputHeader}>
              <h2 className={styles.inputTitle}>
                Matrix Input ({dimensions.rows}×{dimensions.cols})
              </h2>
              <div className={styles.buttonGroup}>
                <button
                  onClick={handleBack}
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Back
                </button>
                <button
                  onClick={handleReset}
                  className={`${styles.button} ${styles.buttonDanger}`}
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Matrix Dimensions Controls */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '24px',
              padding: '16px',
              backgroundColor: '#f0f7ff',
              borderRadius: '8px',
              border: '1px solid #e0e7ff',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <label style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  Rows:
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={dimensions.rows}
                  onChange={(e) => handleDimensionsChange('rows', e.target.value)}
                  style={{
                    width: '60px',
                    padding: '8px 12px',
                    border: dimensions.rows < 1 || dimensions.rows > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <label style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  Columns:
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={dimensions.cols}
                  onChange={(e) => handleDimensionsChange('cols', e.target.value)}
                  style={{
                    width: '60px',
                    padding: '8px 12px',
                    border: dimensions.cols < 1 || dimensions.cols > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}
                />
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#6b7280'
              }}>
                Matrix size: {dimensions.rows} × {dimensions.cols} ({dimensions.rows * dimensions.cols} elements)
              </div>
              {operationType === 'single' && dimensions.rows !== dimensions.cols && (
                <div style={{
                  fontSize: '0.85rem',
                  color: '#dc2626',
                  fontWeight: '500'
                }}>
                  Note: Some operations require square matrices
                </div>
              )}
            </div>

            {/* Error Display */}
            {errors.length > 0 && (
              <div className={styles.errorSection}>
                <div className={styles.errorTitle}>Please fix the following:</div>
                <ul className={styles.errorList}>
                  {errors.map((error, index) => (
                    <li key={index} className={styles.errorItem}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Matrix Inputs */}
            <div className={`${styles.matrixGrid} ${getMatrixGridClass()}`}>
              {matrices.map((matrix, index) => renderMatrix(matrix, index))}
            </div>

            {/* Add Matrix Button for System Operations */}
            {operationType === 'system' && matrices.length < 5 && (
              <div className={styles.addMatrixContainer}>
                <button
                  onClick={addMatrix}
                  className={styles.addMatrixButton}
                >
                  + Add Matrix
                </button>
              </div>
            )}

            {/* Available Operations */}
            <div className={styles.operationsSection}>
              <h3 className={styles.operationsTitle}>Available Operations</h3>
              
              {/* Scalar Input for scalar operations */}
              {needsScalarInput() && (
                <div className={styles.scalarInputContainer}>
                  <label className={styles.scalarLabel}>Scalar value:</label>
                  <input
                    type="number"
                    step="any"
                    value={scalarValue}
                    onChange={(e) => setScalarValue(e.target.value)}
                    placeholder="Enter scalar value"
                    className={styles.scalarInput}
                  />
                </div>
              )}

              <div className={styles.operationsGrid}>
                {getAvailableOperations().map((operation) => {
                  const isDisabled = 
                    (operation === 'Determinant' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols) ||
                    (operation === 'Inverse' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols) ||
                    (operation === 'Eigenvalues' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols) ||
                    (operation === 'Eigenvectors' && operationType === 'single' && matrices[0] && matrices[0].rows !== matrices[0].cols);

                  return (
                    <button
                      key={operation}
                      onClick={() => handleOperationSelect(operation)}
                      disabled={isDisabled}
                      className={`${styles.operationButton} ${
                        selectedOperation === operation ? styles.selected : ''
                      }`}
                    >
                      {operation}
                    </button>
                  );
                })}
              </div>

              {/* Execute Button */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={executeOperation}
                  disabled={!canExecute()}
                  className={styles.executeButton}
                >
                  {isLoading ? (
                    <div className={styles.loading}>
                      <div className={styles.spinner}></div>
                      Calculating...
                    </div>
                  ) : (
                    'Execute Operation'
                  )}
                </button>
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsSection}>
              <h4 className={styles.resultsTitle}>Result</h4>
              <div className={styles.resultsContent}>
                {result || 'Select matrices and operation, then click Execute'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}