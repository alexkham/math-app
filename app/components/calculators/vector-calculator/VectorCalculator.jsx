
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import styles from './VectorCalculator.module.css';

// // // // // // // // export default function VectorCalculator() {
// // // // // // // //   const [step, setStep] = useState('operation-type');
// // // // // // // //   const [operationType, setOperationType] = useState('');
// // // // // // // //   const [dimensionality, setDimensionality] = useState(3);
// // // // // // // //   const [vectors, setVectors] = useState([]);
// // // // // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // // // // //   const [result, setResult] = useState('');
// // // // // // // //   const [errors, setErrors] = useState([]);
// // // // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // // // //   const operationTypes = [
// // // // // // // //     { id: 'single', label: 'Single Vector Operations', description: 'Magnitude, unit vector, normalization' },
// // // // // // // //     { id: 'two', label: 'Two Vector Operations', description: 'Addition, subtraction, dot product, cross product' },
// // // // // // // //     { id: 'multiple', label: 'Multiple Vector Operations', description: 'Linear combinations, spans, linear independence' }
// // // // // // // //   ];

// // // // // // // //   const operationsByType = {
// // // // // // // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // // // // // // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // // // // // // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form']
// // // // // // // //   };

// // // // // // // //   // Validation
// // // // // // // //   const validateInputs = () => {
// // // // // // // //     const newErrors = [];

// // // // // // // //     // Check if operation is selected
// // // // // // // //     if (!selectedOperation) {
// // // // // // // //       newErrors.push('Please select an operation');
// // // // // // // //     }

// // // // // // // //     // Check if vectors have valid components
// // // // // // // //     vectors.forEach((vector, index) => {
// // // // // // // //       const vectorName = String.fromCharCode(65 + index);
// // // // // // // //       const emptyComponents = vector.components.filter(comp => comp === '' || comp === null || comp === undefined).length;
// // // // // // // //       const validComponents = vector.components.filter(comp => !isNaN(parseFloat(comp)) && isFinite(comp)).length;

// // // // // // // //       if (emptyComponents > 0) {
// // // // // // // //         newErrors.push(`Vector ${vectorName} has empty components`);
// // // // // // // //       }

// // // // // // // //       if (validComponents !== vector.components.length) {
// // // // // // // //         newErrors.push(`Vector ${vectorName} contains invalid numbers`);
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     // Operation specific validations
// // // // // // // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3) {
// // // // // // // //       newErrors.push('Cross product is only defined for 3D vectors');
// // // // // // // //     }

// // // // // // // //     if (operationType === 'multiple' && vectors.length < 2) {
// // // // // // // //       newErrors.push('Multiple vector operations require at least 2 vectors');
// // // // // // // //     }

// // // // // // // //     setErrors(newErrors);
// // // // // // // //     return newErrors.length === 0;
// // // // // // // //   };

// // // // // // // //   // Clear all data and reset to start
// // // // // // // //   const handleReset = () => {
// // // // // // // //     setStep('operation-type');
// // // // // // // //     setOperationType('');
// // // // // // // //     setDimensionality(3);
// // // // // // // //     setVectors([]);
// // // // // // // //     setSelectedOperation('');
// // // // // // // //     setResult('');
// // // // // // // //     setErrors([]);
// // // // // // // //     setIsLoading(false);
// // // // // // // //   };

// // // // // // // //   const handleOperationTypeSelect = (type) => {
// // // // // // // //     setOperationType(type);
// // // // // // // //     setErrors([]);
    
// // // // // // // //     // Initialize vectors based on operation type with default dimensionality
// // // // // // // //     let vectorCount = 1;
// // // // // // // //     if (type === 'two') vectorCount = 2;
// // // // // // // //     if (type === 'multiple') vectorCount = 2; // minimum for multiple

// // // // // // // //     const initialVectors = Array(vectorCount).fill(null).map((_, index) => ({
// // // // // // // //       id: index,
// // // // // // // //       components: new Array(dimensionality).fill('')
// // // // // // // //     }));

// // // // // // // //     setVectors(initialVectors);
// // // // // // // //     setStep('input');
// // // // // // // //   };

// // // // // // // //   const updateVectorComponent = (vectorIndex, componentIndex, value) => {
// // // // // // // //     const updatedVectors = [...vectors];
// // // // // // // //     updatedVectors[vectorIndex].components[componentIndex] = value;
// // // // // // // //     setVectors(updatedVectors);
    
// // // // // // // //     // Clear errors when user starts typing
// // // // // // // //     if (errors.length > 0) {
// // // // // // // //       setErrors([]);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const addVector = () => {
// // // // // // // //     if (operationType === 'multiple' && vectors.length < 10) {
// // // // // // // //       const newVector = {
// // // // // // // //         id: vectors.length,
// // // // // // // //         components: new Array(dimensionality).fill('')
// // // // // // // //       };
// // // // // // // //       setVectors([...vectors, newVector]);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const removeVector = (vectorIndex) => {
// // // // // // // //     if (operationType === 'multiple' && vectors.length > 2) {
// // // // // // // //       setVectors(vectors.filter((_, index) => index !== vectorIndex));
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const renderVector = (vector, vectorIndex) => {
// // // // // // // //     return (
// // // // // // // //       <div key={vector.id} className={styles.vectorCard}>
// // // // // // // //         <div className={styles.vectorHeader}>
// // // // // // // //           <h4 className={styles.vectorName}>
// // // // // // // //             Vector {String.fromCharCode(65 + vectorIndex)}
// // // // // // // //           </h4>
// // // // // // // //           {operationType === 'multiple' && vectors.length > 2 && (
// // // // // // // //             <button
// // // // // // // //               onClick={() => removeVector(vectorIndex)}
// // // // // // // //               className={styles.removeButton}
// // // // // // // //             >
// // // // // // // //               Remove
// // // // // // // //             </button>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //         <div className={styles.vectorComponents}>
// // // // // // // //           <span className={styles.bracket}>(</span>
// // // // // // // //           {vector.components.map((component, componentIndex) => (
// // // // // // // //             <React.Fragment key={componentIndex}>
// // // // // // // //               <input
// // // // // // // //                 type="number"
// // // // // // // //                 step="any"
// // // // // // // //                 value={component}
// // // // // // // //                 onChange={(e) => updateVectorComponent(vectorIndex, componentIndex, e.target.value)}
// // // // // // // //                 placeholder={`x${componentIndex + 1}`}
// // // // // // // //                 className={`${styles.componentInput} ${
// // // // // // // //                   component !== '' && (isNaN(parseFloat(component)) || !isFinite(component)) ? styles.error : ''
// // // // // // // //                 }`}
// // // // // // // //               />
// // // // // // // //               {componentIndex < vector.components.length - 1 && (
// // // // // // // //                 <span className={styles.separator}>,</span>
// // // // // // // //               )}
// // // // // // // //             </React.Fragment>
// // // // // // // //           ))}
// // // // // // // //           <span className={styles.bracket}>)</span>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   const getAvailableOperations = () => {
// // // // // // // //     return operationsByType[operationType] || [];
// // // // // // // //   };

// // // // // // // //   const handleOperationSelect = (operation) => {
// // // // // // // //     setSelectedOperation(operation);
// // // // // // // //     setErrors([]);
// // // // // // // //   };

// // // // // // // //   // Placeholder for API call
// // // // // // // //   const executeOperation = async () => {
// // // // // // // //     if (!validateInputs()) {
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setIsLoading(true);
// // // // // // // //     setResult('');

// // // // // // // //     try {
// // // // // // // //       // Prepare data for API
// // // // // // // //       const operationData = {
// // // // // // // //         operation: selectedOperation,
// // // // // // // //         operationType,
// // // // // // // //         dimensionality,
// // // // // // // //         vectors: vectors.map(vector => 
// // // // // // // //           vector.components.map(comp => parseFloat(comp))
// // // // // // // //         )
// // // // // // // //       };

// // // // // // // //       // Simulate API call
// // // // // // // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // // // // // // //       // Placeholder result
// // // // // // // //       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
      
// // // // // // // //     } catch (error) {
// // // // // // // //       setErrors(['Failed to execute operation. Please try again.']);
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const canExecute = () => {
// // // // // // // //     return selectedOperation && vectors.length > 0 && !isLoading;
// // // // // // // //   };

// // // // // // // //   const getVectorGridClass = () => {
// // // // // // // //     if (operationType === 'single') return styles.vectorGridSingle;
// // // // // // // //     if (operationType === 'two') return styles.vectorGridTwo;
// // // // // // // //     return styles.vectorGridMultiple;
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.container}>
// // // // // // // //       <div className={styles.main}>
// // // // // // // //         {/* Header */}
// // // // // // // //         <div className={styles.header}>
// // // // // // // //           <h1 className={styles.title}>Vector Calculator</h1>
// // // // // // // //           <p className={styles.subtitle}>Professional vector operations calculator</p>
// // // // // // // //         </div>

// // // // // // // //         {/* Operation Type Selection Cards - Only when no type selected */}
// // // // // // // //         {step === 'operation-type' && (
// // // // // // // //           <div>
// // // // // // // //             <h2 className={styles.stepTitle}>Select Operation Type</h2>
// // // // // // // //             <div className={styles.operationTypeGrid}>
// // // // // // // //               {operationTypes.map((type) => (
// // // // // // // //                 <button
// // // // // // // //                   key={type.id}
// // // // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // // // //                   className={styles.operationTypeCard}
// // // // // // // //                 >
// // // // // // // //                   <div className={styles.operationTypeTitle}>
// // // // // // // //                     {type.label}
// // // // // // // //                   </div>
// // // // // // // //                   <div className={styles.operationTypeDescription}>
// // // // // // // //                     {type.description}
// // // // // // // //                   </div>
// // // // // // // //                 </button>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Operation Type Buttons - Always Visible on Left */}
// // // // // // // //         {step === 'input' && (
// // // // // // // //           <div style={{
// // // // // // // //             display: 'grid',
// // // // // // // //             gridTemplateColumns: '300px 1fr',
// // // // // // // //             gap: '32px',
// // // // // // // //             alignItems: 'start'
// // // // // // // //           }}>
// // // // // // // //             {/* Left Side - Operation Type Selection */}
// // // // // // // //             <div>
// // // // // // // //               <h3 style={{
// // // // // // // //                 fontSize: '1.2rem',
// // // // // // // //                 fontWeight: '600',
// // // // // // // //                 color: '#1f2937',
// // // // // // // //                 marginBottom: '16px'
// // // // // // // //               }}>
// // // // // // // //                 Operation Types
// // // // // // // //               </h3>
// // // // // // // //               <div style={{
// // // // // // // //                 display: 'grid',
// // // // // // // //                 gridTemplateColumns: '1fr',
// // // // // // // //                 gap: '12px'
// // // // // // // //               }}>
// // // // // // // //                 {operationTypes.map((type) => (
// // // // // // // //                   <button
// // // // // // // //                     key={type.id}
// // // // // // // //                     onClick={() => handleOperationTypeSelect(type.id)}
// // // // // // // //                     style={{
// // // // // // // //                       padding: '16px',
// // // // // // // //                       border: operationType === type.id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// // // // // // // //                       borderRadius: '12px',
// // // // // // // //                       backgroundColor: operationType === type.id ? '#f0f7ff' : 'white',
// // // // // // // //                       cursor: 'pointer',
// // // // // // // //                       textAlign: 'left',
// // // // // // // //                       transition: 'all 0.3s ease',
// // // // // // // //                       transform: operationType === type.id ? 'scale(1.02)' : 'scale(1)'
// // // // // // // //                     }}
// // // // // // // //                     onMouseOver={(e) => {
// // // // // // // //                       if (operationType !== type.id) {
// // // // // // // //                         e.target.style.borderColor = '#4285f4';
// // // // // // // //                         e.target.style.backgroundColor = '#f8f9ff';
// // // // // // // //                       }
// // // // // // // //                     }}
// // // // // // // //                     onMouseOut={(e) => {
// // // // // // // //                       if (operationType !== type.id) {
// // // // // // // //                         e.target.style.borderColor = '#e5e7eb';
// // // // // // // //                         e.target.style.backgroundColor = 'white';
// // // // // // // //                       }
// // // // // // // //                     }}
// // // // // // // //                   >
// // // // // // // //                     <div style={{
// // // // // // // //                       fontSize: '1rem',
// // // // // // // //                       fontWeight: '600',
// // // // // // // //                       color: operationType === type.id ? '#4285f4' : '#1f2937',
// // // // // // // //                       marginBottom: '6px'
// // // // // // // //                     }}>
// // // // // // // //                       {type.label}
// // // // // // // //                     </div>
// // // // // // // //                     <div style={{
// // // // // // // //                       fontSize: '0.85rem',
// // // // // // // //                       color: '#6b7280'
// // // // // // // //                     }}>
// // // // // // // //                       {type.description}
// // // // // // // //                     </div>
// // // // // // // //                   </button>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Right Side - Input and Operations */}
// // // // // // // //             <div>
// // // // // // // //               <div className={styles.inputHeader}>
// // // // // // // //                 <h2 className={styles.inputTitle}>
// // // // // // // //                   Vector Input ({dimensionality}D)
// // // // // // // //                 </h2>
// // // // // // // //                 <div className={styles.buttonGroup}>
// // // // // // // //                   <button
// // // // // // // //                     onClick={handleReset}
// // // // // // // //                     className={`${styles.button} ${styles.buttonDanger}`}
// // // // // // // //                   >
// // // // // // // //                     Reset
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Dimensionality Controls */}
// // // // // // // //               <div style={{
// // // // // // // //                 display: 'flex',
// // // // // // // //                 justifyContent: 'center',
// // // // // // // //                 alignItems: 'center',
// // // // // // // //                 gap: '16px',
// // // // // // // //                 marginBottom: '24px',
// // // // // // // //                 padding: '16px',
// // // // // // // //                 backgroundColor: '#f3f4f6',
// // // // // // // //                 borderRadius: '8px',
// // // // // // // //                 border: '1px solid #d1d5db'
// // // // // // // //               }}>
// // // // // // // //                 <label style={{
// // // // // // // //                   fontSize: '1rem',
// // // // // // // //                   fontWeight: '500',
// // // // // // // //                   color: '#374151'
// // // // // // // //                 }}>
// // // // // // // //                   Vector Dimensions:
// // // // // // // //                 </label>
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="2"
// // // // // // // //                   max="10"
// // // // // // // //                   value={dimensionality}
// // // // // // // //                   onChange={(e) => {
// // // // // // // //                     const inputValue = e.target.value;
                    
// // // // // // // //                     // Handle empty input
// // // // // // // //                     if (inputValue === '') {
// // // // // // // //                       setDimensionality('');
// // // // // // // //                       return;
// // // // // // // //                     }
                    
// // // // // // // //                     const value = parseInt(inputValue);
                    
// // // // // // // //                     // Always update display value
// // // // // // // //                     setDimensionality(value);
                    
// // // // // // // //                     // Only update vectors if valid range
// // // // // // // //                     if (value >= 2 && value <= 10) {
// // // // // // // //                       const updatedVectors = vectors.map(vector => {
// // // // // // // //                         const newComponents = new Array(value).fill('');
// // // // // // // //                         for (let i = 0; i < Math.min(vector.components.length, value); i++) {
// // // // // // // //                           newComponents[i] = vector.components[i];
// // // // // // // //                         }
// // // // // // // //                         return { ...vector, components: newComponents };
// // // // // // // //                       });
// // // // // // // //                       setVectors(updatedVectors);
// // // // // // // //                       setErrors([]);
// // // // // // // //                     } else {
// // // // // // // //                       setErrors(['Dimensionality must be between 2 and 10']);
// // // // // // // //                     }
// // // // // // // //                   }}
// // // // // // // //                   style={{
// // // // // // // //                     width: '70px',
// // // // // // // //                     padding: '8px 12px',
// // // // // // // //                     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // // // // //                     borderRadius: '8px',
// // // // // // // //                     fontSize: '1rem',
// // // // // // // //                     textAlign: 'center'
// // // // // // // //                   }}
// // // // // // // //                 />
// // // // // // // //                 <span style={{
// // // // // // // //                   fontSize: '0.9rem',
// // // // // // // //                   color: '#6b7280'
// // // // // // // //                 }}>
// // // // // // // //                   (2-10 dimensions)
// // // // // // // //                 </span>
// // // // // // // //               </div>

// // // // // // // //               {/* Error Display */}
// // // // // // // //               {errors.length > 0 && (
// // // // // // // //                 <div className={styles.errorSection}>
// // // // // // // //                   <div className={styles.errorTitle}>Please fix the following:</div>
// // // // // // // //                   <ul className={styles.errorList}>
// // // // // // // //                     {errors.map((error, index) => (
// // // // // // // //                       <li key={index} className={styles.errorItem}>{error}</li>
// // // // // // // //                     ))}
// // // // // // // //                   </ul>
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Vector Inputs */}
// // // // // // // //               <div className={`${styles.vectorGrid} ${getVectorGridClass()}`}>
// // // // // // // //                 {vectors.map((vector, index) => renderVector(vector, index))}
// // // // // // // //               </div>

// // // // // // // //               {/* Add Vector Button for Multiple Operations */}
// // // // // // // //               {operationType === 'multiple' && vectors.length < 10 && (
// // // // // // // //                 <div className={styles.addVectorContainer}>
// // // // // // // //                   <button
// // // // // // // //                     onClick={addVector}
// // // // // // // //                     className={styles.addVectorButton}
// // // // // // // //                   >
// // // // // // // //                     + Add Vector
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Available Operations */}
// // // // // // // //               <div className={styles.operationsSection}>
// // // // // // // //                 <h3 className={styles.operationsTitle}>Available Operations</h3>
// // // // // // // //                 <div className={styles.operationsGrid}>
// // // // // // // //                   {getAvailableOperations().map((operation) => (
// // // // // // // //                     <button
// // // // // // // //                       key={operation}
// // // // // // // //                       onClick={() => handleOperationSelect(operation)}
// // // // // // // //                       className={`${styles.operationButton} ${
// // // // // // // //                         selectedOperation === operation ? styles.selected : ''
// // // // // // // //                       } ${
// // // // // // // //                         operation === 'Cross Product' && dimensionality !== 3 ? styles.disabled : ''
// // // // // // // //                       }`}
// // // // // // // //                       disabled={operation === 'Cross Product' && dimensionality !== 3}
// // // // // // // //                     >
// // // // // // // //                       {operation}
// // // // // // // //                     </button>
// // // // // // // //                   ))}
// // // // // // // //                 </div>

// // // // // // // //                 {/* Execute Button */}
// // // // // // // //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// // // // // // // //                   <button
// // // // // // // //                     onClick={executeOperation}
// // // // // // // //                     disabled={!canExecute()}
// // // // // // // //                     className={styles.executeButton}
// // // // // // // //                   >
// // // // // // // //                     {isLoading ? (
// // // // // // // //                       <div className={styles.loading}>
// // // // // // // //                         <div className={styles.spinner}></div>
// // // // // // // //                         Calculating...
// // // // // // // //                       </div>
// // // // // // // //                     ) : (
// // // // // // // //                       'Execute Operation'
// // // // // // // //                     )}
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Results */}
// // // // // // // //               <div className={styles.resultsSection}>
// // // // // // // //                 <h4 className={styles.resultsTitle}>Result</h4>
// // // // // // // //                 <div className={styles.resultsContent}>
// // // // // // // //                   {result || 'Select vectors and operation, then click Execute'}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // import React, { useState } from 'react';

// // // // // // // // /* ── placeholder explanations ─────────────────────────────────── */

// // // // // // // // const categoryExplanations = {
// // // // // // // //   single: {
// // // // // // // //     _default:
// // // // // // // //       'Single vector operations work on one vector at a time. Choose an operation on the left to see a detailed explanation here.',
// // // // // // // //     Magnitude:
// // // // // // // //       'The magnitude (or length) of a vector is computed as the square root of the sum of the squares of its components. ||v|| = √(v₁² + v₂² + … + vₙ²)',
// // // // // // // //     'Unit Vector':
// // // // // // // //       'A unit vector has magnitude 1 and points in the same direction as the original vector. It is found by dividing each component by the magnitude.',
// // // // // // // //     Normalize:
// // // // // // // //       'Normalization rescales a vector so its magnitude becomes 1 while preserving direction. Equivalent to computing the unit vector.',
// // // // // // // //     'Sum of Components':
// // // // // // // //       'The sum of components adds every element of the vector together into a single scalar value.',
// // // // // // // //     'L1 Norm':
// // // // // // // //       'The L1 norm (Manhattan norm) is the sum of the absolute values of all components: ||v||₁ = |v₁| + |v₂| + … + |vₙ|',
// // // // // // // //     'L2 Norm':
// // // // // // // //       'The L2 norm (Euclidean norm) equals the magnitude: ||v||₂ = √(v₁² + v₂² + … + vₙ²)',
// // // // // // // //     'Infinity Norm':
// // // // // // // //       'The infinity norm returns the largest absolute value among all components: ||v||∞ = max(|v₁|, |v₂|, …, |vₙ|)',
// // // // // // // //   },
// // // // // // // //   two: {
// // // // // // // //     _default:
// // // // // // // //       'Two-vector operations take a pair of vectors and produce a scalar, vector, or angle. Choose an operation to learn more.',
// // // // // // // //     Addition:
// // // // // // // //       'Vector addition sums corresponding components: (a₁+b₁, a₂+b₂, …). The result is a new vector of the same dimension.',
// // // // // // // //     Subtraction:
// // // // // // // //       'Vector subtraction finds the difference of corresponding components: (a₁−b₁, a₂−b₂, …).',
// // // // // // // //     'Dot Product':
// // // // // // // //       'The dot product multiplies corresponding components and sums the results: a·b = a₁b₁ + a₂b₂ + … + aₙbₙ. The result is a scalar.',
// // // // // // // //     'Cross Product':
// // // // // // // //       'The cross product is defined only in 3D. It returns a vector perpendicular to both inputs: a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).',
// // // // // // // //     'Angle Between':
// // // // // // // //       'The angle θ between two vectors is found via cos θ = (a·b) / (||a|| · ||b||). Result is in radians or degrees.',
// // // // // // // //     Distance:
// // // // // // // //       'The Euclidean distance between two vectors equals the magnitude of their difference: d = ||a − b||.',
// // // // // // // //     Projection:
// // // // // // // //       'The projection of a onto b gives the component of a in the direction of b: proj_b(a) = ((a·b)/(b·b)) · b.',
// // // // // // // //     Rejection:
// // // // // // // //       'The rejection of a from b is the component of a perpendicular to b: rej_b(a) = a − proj_b(a).',
// // // // // // // //   },
// // // // // // // //   multiple: {
// // // // // // // //     _default:
// // // // // // // //       'Multiple-vector operations analyse sets of vectors for properties like independence, orthogonality, and span. Pick an operation to see details.',
// // // // // // // //     'Linear Combination':
// // // // // // // //       'A linear combination multiplies each vector by a scalar and sums the results: c₁v₁ + c₂v₂ + … + cₖvₖ.',
// // // // // // // //     'Span Check':
// // // // // // // //       'The span of a set of vectors is the collection of all possible linear combinations. This check determines whether a target vector lies within that span.',
// // // // // // // //     'Linear Independence':
// // // // // // // //       'Vectors are linearly independent if none can be written as a linear combination of the others. Checked via row-reduction of the matrix they form.',
// // // // // // // //     'Orthogonality Check':
// // // // // // // //       'Vectors are mutually orthogonal if every pair has a dot product of zero.',
// // // // // // // //     'Gram-Schmidt':
// // // // // // // //       'The Gram–Schmidt process converts a set of linearly independent vectors into an orthonormal set that spans the same subspace.',
// // // // // // // //     'Matrix Form':
// // // // // // // //       'Arranges the input vectors as columns (or rows) of a matrix for further linear-algebra operations such as determinant or rank.',
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // // // // // const s = {
// // // // // // // //   /* — wrappers — */
// // // // // // // //   container: {
// // // // // // // //     minHeight: '100vh',
// // // // // // // //     backgroundColor: '#f8f9fa',
// // // // // // // //     padding: '20px',
// // // // // // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // // // // //   },
// // // // // // // //   mainNarrow: {
// // // // // // // //     maxWidth: '800px',
// // // // // // // //     margin: '0 auto',
// // // // // // // //     backgroundColor: 'white',
// // // // // // // //     borderRadius: '16px',
// // // // // // // //     padding: '32px',
// // // // // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // // // // //     transition: 'max-width 0.4s ease',
// // // // // // // //   },
// // // // // // // //   mainWide: {
// // // // // // // //     maxWidth: 'calc(100vw - 400px)',   /* 200px margin each side */
// // // // // // // //     margin: '0 auto',
// // // // // // // //     backgroundColor: 'white',
// // // // // // // //     borderRadius: '16px',
// // // // // // // //     padding: '32px',
// // // // // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // // // // //     transition: 'max-width 0.4s ease',
// // // // // // // //   },
// // // // // // // //   header: {
// // // // // // // //     textAlign: 'center',
// // // // // // // //     marginBottom: '32px',
// // // // // // // //   },
// // // // // // // //   title: {
// // // // // // // //     fontSize: '2.5rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#1a1a1a',
// // // // // // // //     margin: '0 0 8px 0',
// // // // // // // //   },
// // // // // // // //   subtitle: {
// // // // // // // //     color: '#6b7280',
// // // // // // // //     fontSize: '1.1rem',
// // // // // // // //     margin: '0',
// // // // // // // //   },

// // // // // // // //   /* — initial card grid — */
// // // // // // // //   stepTitle: {
// // // // // // // //     fontSize: '1.5rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#1f2937',
// // // // // // // //     marginBottom: '24px',
// // // // // // // //     textAlign: 'center',
// // // // // // // //   },
// // // // // // // //   operationTypeGrid: {
// // // // // // // //     display: 'grid',
// // // // // // // //     gridTemplateColumns: '1fr',
// // // // // // // //     gap: '16px',
// // // // // // // //   },
// // // // // // // //   operationTypeCard: {
// // // // // // // //     padding: '20px',
// // // // // // // //     border: '2px solid #e5e7eb',
// // // // // // // //     borderRadius: '12px',
// // // // // // // //     backgroundColor: 'white',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     textAlign: 'left',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //   },
// // // // // // // //   operationTypeTitle: {
// // // // // // // //     fontSize: '1.2rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#1f2937',
// // // // // // // //     marginBottom: '8px',
// // // // // // // //   },
// // // // // // // //   operationTypeDescription: {
// // // // // // // //     fontSize: '1rem',
// // // // // // // //     color: '#6b7280',
// // // // // // // //   },

// // // // // // // //   /* — 3-col layout — */
// // // // // // // //   threeColLayout: {
// // // // // // // //     display: 'grid',
// // // // // // // //     gridTemplateColumns: '200px 2fr 1fr',
// // // // // // // //     gap: '24px',
// // // // // // // //     alignItems: 'start',
// // // // // // // //   },

// // // // // // // //   /* — left panel — */
// // // // // // // //   leftPanel: {
// // // // // // // //     display: 'flex',
// // // // // // // //     flexDirection: 'column',
// // // // // // // //     gap: '10px',
// // // // // // // //     position: 'sticky',
// // // // // // // //     top: '20px',
// // // // // // // //   },
// // // // // // // //   leftPanelTitle: {
// // // // // // // //     fontSize: '0.95rem',
// // // // // // // //     fontWeight: '700',
// // // // // // // //     color: '#1f2937',
// // // // // // // //     marginBottom: '4px',
// // // // // // // //     textTransform: 'uppercase',
// // // // // // // //     letterSpacing: '0.04em',
// // // // // // // //   },

// // // // // // // //   /* — right (explanation) panel — */
// // // // // // // //   explanationPanel: {
// // // // // // // //     backgroundColor: '#f0f4ff',
// // // // // // // //     borderRadius: '12px',
// // // // // // // //     padding: '24px',
// // // // // // // //     border: '1px solid #d0d9f0',
// // // // // // // //     position: 'sticky',
// // // // // // // //     top: '20px',
// // // // // // // //   },
// // // // // // // //   explanationTitle: {
// // // // // // // //     fontSize: '1.05rem',
// // // // // // // //     fontWeight: '700',
// // // // // // // //     color: '#1f2937',
// // // // // // // //     margin: '0 0 12px 0',
// // // // // // // //   },
// // // // // // // //   explanationBody: {
// // // // // // // //     fontSize: '0.95rem',
// // // // // // // //     lineHeight: '1.6',
// // // // // // // //     color: '#374151',
// // // // // // // //     margin: 0,
// // // // // // // //   },

// // // // // // // //   /* — middle (calculator) — */
// // // // // // // //   inputHeader: {
// // // // // // // //     display: 'flex',
// // // // // // // //     justifyContent: 'space-between',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: '24px',
// // // // // // // //   },
// // // // // // // //   inputTitle: {
// // // // // // // //     fontSize: '1.35rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#1f2937',
// // // // // // // //     margin: '0',
// // // // // // // //   },
// // // // // // // //   buttonGroup: { display: 'flex', gap: '12px' },
// // // // // // // //   vectorGrid: {
// // // // // // // //     display: 'grid',
// // // // // // // //     gap: '16px',
// // // // // // // //     marginBottom: '24px',
// // // // // // // //   },
// // // // // // // //   vectorGridSingle: { gridTemplateColumns: '1fr' },
// // // // // // // //   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
// // // // // // // //   vectorGridMultiple: { gridTemplateColumns: '1fr' },
// // // // // // // //   vectorCard: {
// // // // // // // //     backgroundColor: '#f8f9fa',
// // // // // // // //     padding: '16px',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     border: '1px solid #e5e7eb',
// // // // // // // //   },
// // // // // // // //   vectorHeader: {
// // // // // // // //     display: 'flex',
// // // // // // // //     justifyContent: 'space-between',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: '12px',
// // // // // // // //   },
// // // // // // // //   vectorName: {
// // // // // // // //     margin: '0',
// // // // // // // //     fontSize: '1.05rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#374151',
// // // // // // // //   },
// // // // // // // //   vectorComponents: {
// // // // // // // //     display: 'flex',
// // // // // // // //     gap: '8px',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     flexWrap: 'wrap',
// // // // // // // //   },
// // // // // // // //   componentInput: {
// // // // // // // //     width: '56px',
// // // // // // // //     padding: '6px',
// // // // // // // //     border: '1px solid #d1d5db',
// // // // // // // //     borderRadius: '4px',
// // // // // // // //     textAlign: 'center',
// // // // // // // //     fontSize: '0.9rem',
// // // // // // // //     outline: 'none',
// // // // // // // //   },
// // // // // // // //   componentInputError: {
// // // // // // // //     borderColor: '#dc2626',
// // // // // // // //     backgroundColor: '#fef2f2',
// // // // // // // //   },
// // // // // // // //   separator: { color: '#6b7280' },
// // // // // // // //   bracket: { fontWeight: '500' },
// // // // // // // //   addVectorContainer: {
// // // // // // // //     display: 'flex',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     marginBottom: '24px',
// // // // // // // //   },
// // // // // // // //   addVectorButton: {
// // // // // // // //     padding: '8px 16px',
// // // // // // // //     border: '2px dashed #4285f4',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     backgroundColor: 'transparent',
// // // // // // // //     color: '#4285f4',
// // // // // // // //     fontSize: '0.9rem',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //   },
// // // // // // // //   operationsSection: { marginBottom: '24px' },
// // // // // // // //   operationsTitle: {
// // // // // // // //     fontSize: '1.1rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#1f2937',
// // // // // // // //     marginBottom: '16px',
// // // // // // // //   },
// // // // // // // //   operationsGrid: {
// // // // // // // //     display: 'grid',
// // // // // // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
// // // // // // // //     gap: '8px',
// // // // // // // //     marginBottom: '24px',
// // // // // // // //   },
// // // // // // // //   operationButton: {
// // // // // // // //     padding: '10px 12px',
// // // // // // // //     border: '2px solid #e5e7eb',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     backgroundColor: 'white',
// // // // // // // //     color: '#374151',
// // // // // // // //     fontSize: '0.85rem',
// // // // // // // //     fontWeight: '500',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //   },
// // // // // // // //   operationButtonSelected: {
// // // // // // // //     borderColor: '#4285f4',
// // // // // // // //     backgroundColor: '#f0f7ff',
// // // // // // // //     color: '#4285f4',
// // // // // // // //   },
// // // // // // // //   operationButtonDisabled: {
// // // // // // // //     backgroundColor: '#f3f4f6',
// // // // // // // //     color: '#9ca3af',
// // // // // // // //     cursor: 'not-allowed',
// // // // // // // //     borderColor: '#e5e7eb',
// // // // // // // //   },
// // // // // // // //   executeButton: {
// // // // // // // //     padding: '12px 32px',
// // // // // // // //     border: 'none',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     backgroundColor: '#4285f4',
// // // // // // // //     color: 'white',
// // // // // // // //     fontSize: '1rem',
// // // // // // // //     fontWeight: '500',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //     marginBottom: '24px',
// // // // // // // //   },
// // // // // // // //   executeButtonDisabled: {
// // // // // // // //     backgroundColor: '#9ca3af',
// // // // // // // //     cursor: 'not-allowed',
// // // // // // // //   },
// // // // // // // //   resultsSection: {
// // // // // // // //     backgroundColor: '#f9fafb',
// // // // // // // //     padding: '16px',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     border: '1px solid #e5e7eb',
// // // // // // // //   },
// // // // // // // //   resultsTitle: {
// // // // // // // //     margin: '0 0 12px 0',
// // // // // // // //     fontSize: '1.05rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: '#1f2937',
// // // // // // // //   },
// // // // // // // //   resultsContent: {
// // // // // // // //     minHeight: '60px',
// // // // // // // //     backgroundColor: 'white',
// // // // // // // //     padding: '12px',
// // // // // // // //     borderRadius: '6px',
// // // // // // // //     border: '1px solid #d1d5db',
// // // // // // // //     fontSize: '1rem',
// // // // // // // //     color: '#374151',
// // // // // // // //     display: 'flex',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //   },
// // // // // // // //   errorSection: {
// // // // // // // //     backgroundColor: '#fef2f2',
// // // // // // // //     border: '1px solid #fecaca',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     padding: '16px',
// // // // // // // //     marginBottom: '16px',
// // // // // // // //   },
// // // // // // // //   errorTitle: {
// // // // // // // //     color: '#dc2626',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     fontSize: '1rem',
// // // // // // // //     margin: '0 0 8px 0',
// // // // // // // //   },
// // // // // // // //   errorList: { listStyle: 'none', padding: '0', margin: '0' },
// // // // // // // //   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },
// // // // // // // //   buttonDanger: {
// // // // // // // //     padding: '8px 16px',
// // // // // // // //     borderRadius: '6px',
// // // // // // // //     fontSize: '0.9rem',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     transition: 'all 0.2s ease',
// // // // // // // //     border: '2px solid #dc2626',
// // // // // // // //     backgroundColor: 'transparent',
// // // // // // // //     color: '#dc2626',
// // // // // // // //   },
// // // // // // // //   removeButton: {
// // // // // // // //     padding: '4px 8px',
// // // // // // // //     border: 'none',
// // // // // // // //     borderRadius: '4px',
// // // // // // // //     backgroundColor: '#dc2626',
// // // // // // // //     color: 'white',
// // // // // // // //     fontSize: '0.8rem',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //   },
// // // // // // // //   loading: {
// // // // // // // //     display: 'flex',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     gap: '8px',
// // // // // // // //   },
// // // // // // // //   spinner: {
// // // // // // // //     width: '16px',
// // // // // // // //     height: '16px',
// // // // // // // //     border: '2px solid #e5e7eb',
// // // // // // // //     borderTop: '2px solid #4285f4',
// // // // // // // //     borderRadius: '50%',
// // // // // // // //     animation: 'spin 1s linear infinite',
// // // // // // // //   },
// // // // // // // //   dimControls: {
// // // // // // // //     display: 'flex',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     gap: '16px',
// // // // // // // //     marginBottom: '24px',
// // // // // // // //     padding: '14px',
// // // // // // // //     backgroundColor: '#f3f4f6',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     border: '1px solid #d1d5db',
// // // // // // // //   },
// // // // // // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // // // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },
// // // // // // // // };

// // // // // // // // const spinKeyframes = `
// // // // // // // // @keyframes spin {
// // // // // // // //   0% { transform: rotate(0deg); }
// // // // // // // //   100% { transform: rotate(360deg); }
// // // // // // // // }`;

// // // // // // // // /* ── component ────────────────────────────────────────────────── */

// // // // // // // // export default function VectorCalculator() {
// // // // // // // //   const [step, setStep] = useState('operation-type');
// // // // // // // //   const [operationType, setOperationType] = useState('');
// // // // // // // //   const [dimensionality, setDimensionality] = useState(3);
// // // // // // // //   const [vectors, setVectors] = useState([]);
// // // // // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // // // // //   const [result, setResult] = useState('');
// // // // // // // //   const [errors, setErrors] = useState([]);
// // // // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // // // //   const operationTypes = [
// // // // // // // //     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
// // // // // // // //     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot &amp; cross product' },
// // // // // // // //     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
// // // // // // // //   ];

// // // // // // // //   const operationsByType = {
// // // // // // // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // // // // // // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // // // // // // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
// // // // // // // //   };

// // // // // // // //   /* ── helpers ── */

// // // // // // // //   const validateInputs = () => {
// // // // // // // //     const newErrors = [];
// // // // // // // //     if (!selectedOperation) newErrors.push('Please select an operation');
// // // // // // // //     vectors.forEach((vector, index) => {
// // // // // // // //       const name = String.fromCharCode(65 + index);
// // // // // // // //       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
// // // // // // // //       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // // // // // //       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
// // // // // // // //       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
// // // // // // // //     });
// // // // // // // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
// // // // // // // //       newErrors.push('Cross product is only defined for 3D vectors');
// // // // // // // //     if (operationType === 'multiple' && vectors.length < 2)
// // // // // // // //       newErrors.push('Multiple vector operations require at least 2 vectors');
// // // // // // // //     setErrors(newErrors);
// // // // // // // //     return newErrors.length === 0;
// // // // // // // //   };

// // // // // // // //   const handleReset = () => {
// // // // // // // //     setStep('operation-type');
// // // // // // // //     setOperationType('');
// // // // // // // //     setDimensionality(3);
// // // // // // // //     setVectors([]);
// // // // // // // //     setSelectedOperation('');
// // // // // // // //     setResult('');
// // // // // // // //     setErrors([]);
// // // // // // // //     setIsLoading(false);
// // // // // // // //   };

// // // // // // // //   const handleOperationTypeSelect = (type) => {
// // // // // // // //     setOperationType(type);
// // // // // // // //     setSelectedOperation('');
// // // // // // // //     setErrors([]);
// // // // // // // //     let count = 1;
// // // // // // // //     if (type === 'two') count = 2;
// // // // // // // //     if (type === 'multiple') count = 2;
// // // // // // // //     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // // // // //     setVectors(
// // // // // // // //       Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }))
// // // // // // // //     );
// // // // // // // //     setStep('input');
// // // // // // // //   };

// // // // // // // //   const updateVectorComponent = (vi, ci, value) => {
// // // // // // // //     const updated = [...vectors];
// // // // // // // //     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
// // // // // // // //     updated[vi].components[ci] = value;
// // // // // // // //     setVectors(updated);
// // // // // // // //     if (errors.length > 0) setErrors([]);
// // // // // // // //   };

// // // // // // // //   const addVector = () => {
// // // // // // // //     if (operationType === 'multiple' && vectors.length < 10) {
// // // // // // // //       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // // // // //       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const removeVector = (i) => {
// // // // // // // //     if (operationType === 'multiple' && vectors.length > 2)
// // // // // // // //       setVectors(vectors.filter((_, idx) => idx !== i));
// // // // // // // //   };

// // // // // // // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // // // // // // //   const handleOperationSelect = (op) => {
// // // // // // // //     setSelectedOperation(op);
// // // // // // // //     setErrors([]);
// // // // // // // //   };

// // // // // // // //   const executeOperation = async () => {
// // // // // // // //     if (!validateInputs()) return;
// // // // // // // //     setIsLoading(true);
// // // // // // // //     setResult('');
// // // // // // // //     try {
// // // // // // // //       await new Promise(r => setTimeout(r, 1000));
// // // // // // // //       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
// // // // // // // //     } catch {
// // // // // // // //       setErrors(['Failed to execute operation. Please try again.']);
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

// // // // // // // //   const getVectorGridExtra = () => {
// // // // // // // //     if (operationType === 'single') return s.vectorGridSingle;
// // // // // // // //     if (operationType === 'two') return s.vectorGridTwo;
// // // // // // // //     return s.vectorGridMultiple;
// // // // // // // //   };

// // // // // // // //   /* ── current explanation text ── */
// // // // // // // //   const getExplanation = () => {
// // // // // // // //     const pool = categoryExplanations[operationType];
// // // // // // // //     if (!pool) return '';
// // // // // // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // // // // // //     return pool._default;
// // // // // // // //   };

// // // // // // // //   const getExplanationHeading = () => {
// // // // // // // //     if (selectedOperation) return selectedOperation;
// // // // // // // //     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
// // // // // // // //     return labels[operationType] || 'Explanation';
// // // // // // // //   };

// // // // // // // //   /* ── left-panel button style ── */
// // // // // // // //   const catBtnStyle = (id) => ({
// // // // // // // //     padding: '12px',
// // // // // // // //     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// // // // // // // //     borderRadius: '10px',
// // // // // // // //     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
// // // // // // // //     cursor: 'pointer',
// // // // // // // //     textAlign: 'left',
// // // // // // // //     transition: 'all 0.25s ease',
// // // // // // // //     width: '100%',
// // // // // // // //     boxSizing: 'border-box',
// // // // // // // //   });
// // // // // // // //   const catLabelStyle = (id) => ({
// // // // // // // //     fontSize: '0.9rem',
// // // // // // // //     fontWeight: '600',
// // // // // // // //     color: operationType === id ? '#4285f4' : '#1f2937',
// // // // // // // //     marginBottom: '4px',
// // // // // // // //   });
// // // // // // // //   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

// // // // // // // //   const dimInputStyle = {
// // // // // // // //     width: '64px',
// // // // // // // //     padding: '8px 10px',
// // // // // // // //     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // // // // //     borderRadius: '8px',
// // // // // // // //     fontSize: '1rem',
// // // // // // // //     textAlign: 'center',
// // // // // // // //     outline: 'none',
// // // // // // // //   };

// // // // // // // //   /* ── render a single vector card ── */
// // // // // // // //   const renderVector = (vector, vi) => (
// // // // // // // //     <div key={vector.id} style={s.vectorCard}>
// // // // // // // //       <div style={s.vectorHeader}>
// // // // // // // //         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
// // // // // // // //         {operationType === 'multiple' && vectors.length > 2 && (
// // // // // // // //           <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //       <div style={s.vectorComponents}>
// // // // // // // //         <span style={s.bracket}>(</span>
// // // // // // // //         {vector.components.map((comp, ci) => (
// // // // // // // //           <React.Fragment key={ci}>
// // // // // // // //             <input
// // // // // // // //               type="number"
// // // // // // // //               step="any"
// // // // // // // //               value={comp}
// // // // // // // //               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
// // // // // // // //               placeholder={`x${ci + 1}`}
// // // // // // // //               style={{
// // // // // // // //                 ...s.componentInput,
// // // // // // // //                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
// // // // // // // //               }}
// // // // // // // //             />
// // // // // // // //             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
// // // // // // // //           </React.Fragment>
// // // // // // // //         ))}
// // // // // // // //         <span style={s.bracket}>)</span>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );

// // // // // // // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // // // // // // //   return (
// // // // // // // //     <div style={s.container}>
// // // // // // // //       <style>{spinKeyframes}</style>
// // // // // // // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // // // // // // //         {/* Header */}
// // // // // // // //         <div style={s.header}>
// // // // // // // //           <h1 style={s.title}>Vector Calculator</h1>
// // // // // // // //           <p style={s.subtitle}>Professional vector operations calculator</p>
// // // // // // // //         </div>

// // // // // // // //         {/* ── INITIAL STATE ── */}
// // // // // // // //         {step === 'operation-type' && (
// // // // // // // //           <div>
// // // // // // // //             <h2 style={s.stepTitle}>Select Operation Type</h2>
// // // // // // // //             <div style={s.operationTypeGrid}>
// // // // // // // //               {operationTypes.map((type) => (
// // // // // // // //                 <button
// // // // // // // //                   key={type.id}
// // // // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // // // //                   style={s.operationTypeCard}
// // // // // // // //                   onMouseOver={(e) => {
// // // // // // // //                     e.currentTarget.style.borderColor = '#4285f4';
// // // // // // // //                     e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // // // // //                   }}
// // // // // // // //                   onMouseOut={(e) => {
// // // // // // // //                     e.currentTarget.style.borderColor = '#e5e7eb';
// // // // // // // //                     e.currentTarget.style.backgroundColor = 'white';
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <div style={s.operationTypeTitle}>{type.label}</div>
// // // // // // // //                   <div style={s.operationTypeDescription}>{type.description}</div>
// // // // // // // //                 </button>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* ── EXPANDED STATE — 3-column ── */}
// // // // // // // //         {step === 'input' && (
// // // // // // // //           <div style={s.threeColLayout}>

// // // // // // // //             {/* ▸ LEFT — category buttons */}
// // // // // // // //             <div style={s.leftPanel}>
// // // // // // // //               <div style={s.leftPanelTitle}>Category</div>
// // // // // // // //               {operationTypes.map((type) => (
// // // // // // // //                 <button
// // // // // // // //                   key={type.id}
// // // // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // // // //                   style={catBtnStyle(type.id)}
// // // // // // // //                   onMouseOver={(e) => {
// // // // // // // //                     if (operationType !== type.id) {
// // // // // // // //                       e.currentTarget.style.borderColor = '#4285f4';
// // // // // // // //                       e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // // // // //                     }
// // // // // // // //                   }}
// // // // // // // //                   onMouseOut={(e) => {
// // // // // // // //                     if (operationType !== type.id) {
// // // // // // // //                       e.currentTarget.style.borderColor = '#e5e7eb';
// // // // // // // //                       e.currentTarget.style.backgroundColor = 'white';
// // // // // // // //                     }
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <div style={catLabelStyle(type.id)}>{type.label}</div>
// // // // // // // //                   <div style={catDescStyle}>{type.description}</div>
// // // // // // // //                 </button>
// // // // // // // //               ))}
// // // // // // // //             </div>

// // // // // // // //             {/* ▸ MIDDLE — calculator */}
// // // // // // // //             <div>
// // // // // // // //               <div style={s.inputHeader}>
// // // // // // // //                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
// // // // // // // //                 <div style={s.buttonGroup}>
// // // // // // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset</button>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Dimensionality */}
// // // // // // // //               <div style={s.dimControls}>
// // // // // // // //                 <label style={s.dimLabel}>Dimensions:</label>
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="2"
// // // // // // // //                   max="10"
// // // // // // // //                   value={dimensionality}
// // // // // // // //                   onChange={(e) => {
// // // // // // // //                     const raw = e.target.value;
// // // // // // // //                     if (raw === '') { setDimensionality(''); return; }
// // // // // // // //                     const val = parseInt(raw);
// // // // // // // //                     setDimensionality(val);
// // // // // // // //                     if (val >= 2 && val <= 10) {
// // // // // // // //                       setVectors(vectors.map(v => {
// // // // // // // //                         const nc = new Array(val).fill('');
// // // // // // // //                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
// // // // // // // //                         return { ...v, components: nc };
// // // // // // // //                       }));
// // // // // // // //                       setErrors([]);
// // // // // // // //                     } else {
// // // // // // // //                       setErrors(['Dimensionality must be between 2 and 10']);
// // // // // // // //                     }
// // // // // // // //                   }}
// // // // // // // //                   style={dimInputStyle}
// // // // // // // //                 />
// // // // // // // //                 <span style={s.dimHint}>(2–10)</span>
// // // // // // // //               </div>

// // // // // // // //               {/* Errors */}
// // // // // // // //               {errors.length > 0 && (
// // // // // // // //                 <div style={s.errorSection}>
// // // // // // // //                   <div style={s.errorTitle}>Please fix the following:</div>
// // // // // // // //                   <ul style={s.errorList}>
// // // // // // // //                     {errors.map((err, i) => (
// // // // // // // //                       <li key={i} style={s.errorItem}>&bull; {err}</li>
// // // // // // // //                     ))}
// // // // // // // //                   </ul>
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Vectors */}
// // // // // // // //               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
// // // // // // // //                 {vectors.map((v, i) => renderVector(v, i))}
// // // // // // // //               </div>

// // // // // // // //               {/* Add vector */}
// // // // // // // //               {operationType === 'multiple' && vectors.length < 10 && (
// // // // // // // //                 <div style={s.addVectorContainer}>
// // // // // // // //                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {/* Operations */}
// // // // // // // //               <div style={s.operationsSection}>
// // // // // // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // // // // // //                 <div style={s.operationsGrid}>
// // // // // // // //                   {getAvailableOperations().map((op) => {
// // // // // // // //                     const sel = selectedOperation === op;
// // // // // // // //                     const dis = op === 'Cross Product' && dimensionality !== 3;
// // // // // // // //                     return (
// // // // // // // //                       <button
// // // // // // // //                         key={op}
// // // // // // // //                         onClick={() => handleOperationSelect(op)}
// // // // // // // //                         disabled={dis}
// // // // // // // //                         style={{
// // // // // // // //                           ...s.operationButton,
// // // // // // // //                           ...(sel ? s.operationButtonSelected : {}),
// // // // // // // //                           ...(dis ? s.operationButtonDisabled : {}),
// // // // // // // //                         }}
// // // // // // // //                       >
// // // // // // // //                         {op}
// // // // // // // //                       </button>
// // // // // // // //                     );
// // // // // // // //                   })}
// // // // // // // //                 </div>

// // // // // // // //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// // // // // // // //                   <button
// // // // // // // //                     onClick={executeOperation}
// // // // // // // //                     disabled={!canExecute()}
// // // // // // // //                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
// // // // // // // //                   >
// // // // // // // //                     {isLoading ? (
// // // // // // // //                       <div style={s.loading}>
// // // // // // // //                         <div style={s.spinner} />
// // // // // // // //                         Calculating...
// // // // // // // //                       </div>
// // // // // // // //                     ) : (
// // // // // // // //                       'Execute Operation'
// // // // // // // //                     )}
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Result */}
// // // // // // // //               <div style={s.resultsSection}>
// // // // // // // //                 <h4 style={s.resultsTitle}>Result</h4>
// // // // // // // //                 <div style={s.resultsContent}>
// // // // // // // //                   {result || 'Select vectors and operation, then click Execute'}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* ▸ RIGHT — explanation */}
// // // // // // // //             <div style={s.explanationPanel}>
// // // // // // // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // // // // // // //               <p style={s.explanationBody}>{getExplanation()}</p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import React, { useState } from 'react';
// // // // // // // import computeVector from './computeVector';

// // // // // // // /* ── placeholder explanations ─────────────────────────────────── */

// // // // // // // const categoryExplanations = {
// // // // // // //   single: {
// // // // // // //     _default:
// // // // // // //       'Single vector operations work on one vector at a time. Choose an operation on the left to see a detailed explanation here.',
// // // // // // //     Magnitude:
// // // // // // //       'The magnitude (or length) of a vector is computed as the square root of the sum of the squares of its components. ||v|| = √(v₁² + v₂² + … + vₙ²)',
// // // // // // //     'Unit Vector':
// // // // // // //       'A unit vector has magnitude 1 and points in the same direction as the original vector. It is found by dividing each component by the magnitude.',
// // // // // // //     Normalize:
// // // // // // //       'Normalization rescales a vector so its magnitude becomes 1 while preserving direction. Equivalent to computing the unit vector.',
// // // // // // //     'Sum of Components':
// // // // // // //       'The sum of components adds every element of the vector together into a single scalar value.',
// // // // // // //     'L1 Norm':
// // // // // // //       'The L1 norm (Manhattan norm) is the sum of the absolute values of all components: ||v||₁ = |v₁| + |v₂| + … + |vₙ|',
// // // // // // //     'L2 Norm':
// // // // // // //       'The L2 norm (Euclidean norm) equals the magnitude: ||v||₂ = √(v₁² + v₂² + … + vₙ²)',
// // // // // // //     'Infinity Norm':
// // // // // // //       'The infinity norm returns the largest absolute value among all components: ||v||∞ = max(|v₁|, |v₂|, …, |vₙ|)',
// // // // // // //   },
// // // // // // //   two: {
// // // // // // //     _default:
// // // // // // //       'Two-vector operations take a pair of vectors and produce a scalar, vector, or angle. Choose an operation to learn more.',
// // // // // // //     Addition:
// // // // // // //       'Vector addition sums corresponding components: (a₁+b₁, a₂+b₂, …). The result is a new vector of the same dimension.',
// // // // // // //     Subtraction:
// // // // // // //       'Vector subtraction finds the difference of corresponding components: (a₁−b₁, a₂−b₂, …).',
// // // // // // //     'Dot Product':
// // // // // // //       'The dot product multiplies corresponding components and sums the results: a·b = a₁b₁ + a₂b₂ + … + aₙbₙ. The result is a scalar.',
// // // // // // //     'Cross Product':
// // // // // // //       'The cross product is defined only in 3D. It returns a vector perpendicular to both inputs: a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).',
// // // // // // //     'Angle Between':
// // // // // // //       'The angle θ between two vectors is found via cos θ = (a·b) / (||a|| · ||b||). Result is in radians or degrees.',
// // // // // // //     Distance:
// // // // // // //       'The Euclidean distance between two vectors equals the magnitude of their difference: d = ||a − b||.',
// // // // // // //     Projection:
// // // // // // //       'The projection of a onto b gives the component of a in the direction of b: proj_b(a) = ((a·b)/(b·b)) · b.',
// // // // // // //     Rejection:
// // // // // // //       'The rejection of a from b is the component of a perpendicular to b: rej_b(a) = a − proj_b(a).',
// // // // // // //   },
// // // // // // //   multiple: {
// // // // // // //     _default:
// // // // // // //       'Multiple-vector operations analyse sets of vectors for properties like independence, orthogonality, and span. Pick an operation to see details.',
// // // // // // //     'Linear Combination':
// // // // // // //       'A linear combination multiplies each vector by a scalar and sums the results: c₁v₁ + c₂v₂ + … + cₖvₖ.',
// // // // // // //     'Span Check':
// // // // // // //       'The span of a set of vectors is the collection of all possible linear combinations. This check determines whether a target vector lies within that span.',
// // // // // // //     'Linear Independence':
// // // // // // //       'Vectors are linearly independent if none can be written as a linear combination of the others. Checked via row-reduction of the matrix they form.',
// // // // // // //     'Orthogonality Check':
// // // // // // //       'Vectors are mutually orthogonal if every pair has a dot product of zero.',
// // // // // // //     'Gram-Schmidt':
// // // // // // //       'The Gram–Schmidt process converts a set of linearly independent vectors into an orthonormal set that spans the same subspace.',
// // // // // // //     'Matrix Form':
// // // // // // //       'Arranges the input vectors as columns (or rows) of a matrix for further linear-algebra operations such as determinant or rank.',
// // // // // // //   },
// // // // // // // };

// // // // // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // // // // const s = {
// // // // // // //   /* — wrappers — */
// // // // // // //   container: {
// // // // // // //     minHeight: '100vh',
// // // // // // //     backgroundColor: '#f8f9fa',
// // // // // // //     padding: '20px',
// // // // // // //     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // // // //   },
// // // // // // //   mainNarrow: {
// // // // // // //     maxWidth: '800px',
// // // // // // //     margin: '0 auto',
// // // // // // //     backgroundColor: 'white',
// // // // // // //     borderRadius: '16px',
// // // // // // //     padding: '32px',
// // // // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // // // //     transition: 'max-width 0.4s ease',
// // // // // // //   },
// // // // // // //   mainWide: {
// // // // // // //     maxWidth: 'calc(100vw - 400px)',
// // // // // // //     margin: '0 auto',
// // // // // // //     backgroundColor: 'white',
// // // // // // //     borderRadius: '16px',
// // // // // // //     padding: '32px',
// // // // // // //     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // // // // // //     transition: 'max-width 0.4s ease',
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     textAlign: 'center',
// // // // // // //     marginBottom: '32px',
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: '2.5rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1a1a1a',
// // // // // // //     margin: '0 0 8px 0',
// // // // // // //   },
// // // // // // //   subtitle: {
// // // // // // //     color: '#6b7280',
// // // // // // //     fontSize: '1.1rem',
// // // // // // //     margin: '0',
// // // // // // //   },

// // // // // // //   /* — initial card grid — */
// // // // // // //   stepTitle: {
// // // // // // //     fontSize: '1.5rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1f2937',
// // // // // // //     marginBottom: '24px',
// // // // // // //     textAlign: 'center',
// // // // // // //   },
// // // // // // //   operationTypeGrid: {
// // // // // // //     display: 'grid',
// // // // // // //     gridTemplateColumns: '1fr',
// // // // // // //     gap: '16px',
// // // // // // //   },
// // // // // // //   operationTypeCard: {
// // // // // // //     padding: '20px',
// // // // // // //     border: '2px solid #e5e7eb',
// // // // // // //     borderRadius: '12px',
// // // // // // //     backgroundColor: 'white',
// // // // // // //     cursor: 'pointer',
// // // // // // //     textAlign: 'left',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //   },
// // // // // // //   operationTypeTitle: {
// // // // // // //     fontSize: '1.2rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1f2937',
// // // // // // //     marginBottom: '8px',
// // // // // // //   },
// // // // // // //   operationTypeDescription: {
// // // // // // //     fontSize: '1rem',
// // // // // // //     color: '#6b7280',
// // // // // // //   },

// // // // // // //   /* — 3-col layout — */
// // // // // // //   threeColLayout: {
// // // // // // //     display: 'grid',
// // // // // // //     gridTemplateColumns: '200px 2fr 1fr',
// // // // // // //     gap: '24px',
// // // // // // //     alignItems: 'start',
// // // // // // //   },

// // // // // // //   /* — left panel — */
// // // // // // //   leftPanel: {
// // // // // // //     display: 'flex',
// // // // // // //     flexDirection: 'column',
// // // // // // //     gap: '10px',
// // // // // // //     position: 'sticky',
// // // // // // //     top: '20px',
// // // // // // //   },
// // // // // // //   leftPanelTitle: {
// // // // // // //     fontSize: '0.95rem',
// // // // // // //     fontWeight: '700',
// // // // // // //     color: '#1f2937',
// // // // // // //     marginBottom: '4px',
// // // // // // //     textTransform: 'uppercase',
// // // // // // //     letterSpacing: '0.04em',
// // // // // // //   },

// // // // // // //   /* — right (explanation) panel — */
// // // // // // //   explanationPanel: {
// // // // // // //     backgroundColor: '#f0f4ff',
// // // // // // //     borderRadius: '12px',
// // // // // // //     padding: '24px',
// // // // // // //     border: '1px solid #d0d9f0',
// // // // // // //     position: 'sticky',
// // // // // // //     top: '20px',
// // // // // // //   },
// // // // // // //   explanationTitle: {
// // // // // // //     fontSize: '1.05rem',
// // // // // // //     fontWeight: '700',
// // // // // // //     color: '#1f2937',
// // // // // // //     margin: '0 0 12px 0',
// // // // // // //   },
// // // // // // //   explanationBody: {
// // // // // // //     fontSize: '0.95rem',
// // // // // // //     lineHeight: '1.6',
// // // // // // //     color: '#374151',
// // // // // // //     margin: 0,
// // // // // // //   },

// // // // // // //   /* — middle (calculator) — */
// // // // // // //   inputHeader: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: '24px',
// // // // // // //   },
// // // // // // //   inputTitle: {
// // // // // // //     fontSize: '1.35rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1f2937',
// // // // // // //     margin: '0',
// // // // // // //   },
// // // // // // //   buttonGroup: { display: 'flex', gap: '12px' },
// // // // // // //   vectorGrid: {
// // // // // // //     display: 'grid',
// // // // // // //     gap: '16px',
// // // // // // //     marginBottom: '24px',
// // // // // // //   },
// // // // // // //   vectorGridSingle: { gridTemplateColumns: '1fr' },
// // // // // // //   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
// // // // // // //   vectorGridMultiple: { gridTemplateColumns: '1fr' },
// // // // // // //   vectorCard: {
// // // // // // //     backgroundColor: '#f8f9fa',
// // // // // // //     padding: '16px',
// // // // // // //     borderRadius: '8px',
// // // // // // //     border: '1px solid #e5e7eb',
// // // // // // //   },
// // // // // // //   vectorHeader: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'space-between',
// // // // // // //     alignItems: 'center',
// // // // // // //     marginBottom: '12px',
// // // // // // //   },
// // // // // // //   vectorName: {
// // // // // // //     margin: '0',
// // // // // // //     fontSize: '1.05rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#374151',
// // // // // // //   },
// // // // // // //   vectorComponents: {
// // // // // // //     display: 'flex',
// // // // // // //     gap: '8px',
// // // // // // //     alignItems: 'center',
// // // // // // //     flexWrap: 'wrap',
// // // // // // //   },
// // // // // // //   componentInput: {
// // // // // // //     width: '56px',
// // // // // // //     padding: '6px',
// // // // // // //     border: '1px solid #d1d5db',
// // // // // // //     borderRadius: '4px',
// // // // // // //     textAlign: 'center',
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     outline: 'none',
// // // // // // //   },
// // // // // // //   componentInputError: {
// // // // // // //     borderColor: '#dc2626',
// // // // // // //     backgroundColor: '#fef2f2',
// // // // // // //   },
// // // // // // //   separator: { color: '#6b7280' },
// // // // // // //   bracket: { fontWeight: '500' },
// // // // // // //   addVectorContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     marginBottom: '24px',
// // // // // // //   },
// // // // // // //   addVectorButton: {
// // // // // // //     padding: '8px 16px',
// // // // // // //     border: '2px dashed #4285f4',
// // // // // // //     borderRadius: '8px',
// // // // // // //     backgroundColor: 'transparent',
// // // // // // //     color: '#4285f4',
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //   },
// // // // // // //   operationsSection: { marginBottom: '24px' },
// // // // // // //   operationsTitle: {
// // // // // // //     fontSize: '1.1rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1f2937',
// // // // // // //     marginBottom: '16px',
// // // // // // //   },
// // // // // // //   operationsGrid: {
// // // // // // //     display: 'grid',
// // // // // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
// // // // // // //     gap: '8px',
// // // // // // //     marginBottom: '24px',
// // // // // // //   },
// // // // // // //   operationButton: {
// // // // // // //     padding: '10px 12px',
// // // // // // //     border: '2px solid #e5e7eb',
// // // // // // //     borderRadius: '8px',
// // // // // // //     backgroundColor: 'white',
// // // // // // //     color: '#374151',
// // // // // // //     fontSize: '0.85rem',
// // // // // // //     fontWeight: '500',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //   },
// // // // // // //   operationButtonSelected: {
// // // // // // //     borderColor: '#4285f4',
// // // // // // //     backgroundColor: '#f0f7ff',
// // // // // // //     color: '#4285f4',
// // // // // // //   },
// // // // // // //   operationButtonDisabled: {
// // // // // // //     backgroundColor: '#f3f4f6',
// // // // // // //     color: '#9ca3af',
// // // // // // //     cursor: 'not-allowed',
// // // // // // //     borderColor: '#e5e7eb',
// // // // // // //   },
// // // // // // //   executeButton: {
// // // // // // //     padding: '12px 32px',
// // // // // // //     border: 'none',
// // // // // // //     borderRadius: '8px',
// // // // // // //     backgroundColor: '#4285f4',
// // // // // // //     color: 'white',
// // // // // // //     fontSize: '1rem',
// // // // // // //     fontWeight: '500',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //     marginBottom: '24px',
// // // // // // //   },
// // // // // // //   executeButtonDisabled: {
// // // // // // //     backgroundColor: '#9ca3af',
// // // // // // //     cursor: 'not-allowed',
// // // // // // //   },
// // // // // // //   resultsSection: {
// // // // // // //     backgroundColor: '#f9fafb',
// // // // // // //     padding: '16px',
// // // // // // //     borderRadius: '8px',
// // // // // // //     border: '1px solid #e5e7eb',
// // // // // // //   },
// // // // // // //   resultsTitle: {
// // // // // // //     margin: '0 0 12px 0',
// // // // // // //     fontSize: '1.05rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1f2937',
// // // // // // //   },
// // // // // // //   resultsContent: {
// // // // // // //     minHeight: '60px',
// // // // // // //     backgroundColor: 'white',
// // // // // // //     padding: '12px',
// // // // // // //     borderRadius: '6px',
// // // // // // //     border: '1px solid #d1d5db',
// // // // // // //     fontSize: '1rem',
// // // // // // //     color: '#374151',
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'center',
// // // // // // //     flexDirection: 'column',
// // // // // // //     gap: '8px',
// // // // // // //   },
// // // // // // //   errorSection: {
// // // // // // //     backgroundColor: '#fef2f2',
// // // // // // //     border: '1px solid #fecaca',
// // // // // // //     borderRadius: '8px',
// // // // // // //     padding: '16px',
// // // // // // //     marginBottom: '16px',
// // // // // // //   },
// // // // // // //   errorTitle: {
// // // // // // //     color: '#dc2626',
// // // // // // //     fontWeight: '600',
// // // // // // //     fontSize: '1rem',
// // // // // // //     margin: '0 0 8px 0',
// // // // // // //   },
// // // // // // //   errorList: { listStyle: 'none', padding: '0', margin: '0' },
// // // // // // //   errorItem: { color: '#dc2626', fontSize: '0.9rem', marginBottom: '4px' },
// // // // // // //   buttonDanger: {
// // // // // // //     padding: '8px 16px',
// // // // // // //     borderRadius: '6px',
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     cursor: 'pointer',
// // // // // // //     transition: 'all 0.2s ease',
// // // // // // //     border: '2px solid #dc2626',
// // // // // // //     backgroundColor: 'transparent',
// // // // // // //     color: '#dc2626',
// // // // // // //   },
// // // // // // //   removeButton: {
// // // // // // //     padding: '4px 8px',
// // // // // // //     border: 'none',
// // // // // // //     borderRadius: '4px',
// // // // // // //     backgroundColor: '#dc2626',
// // // // // // //     color: 'white',
// // // // // // //     fontSize: '0.8rem',
// // // // // // //     cursor: 'pointer',
// // // // // // //   },
// // // // // // //   loading: {
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     justifyContent: 'center',
// // // // // // //     gap: '8px',
// // // // // // //   },
// // // // // // //   spinner: {
// // // // // // //     width: '16px',
// // // // // // //     height: '16px',
// // // // // // //     border: '2px solid #e5e7eb',
// // // // // // //     borderTop: '2px solid #4285f4',
// // // // // // //     borderRadius: '50%',
// // // // // // //     animation: 'spin 1s linear infinite',
// // // // // // //   },
// // // // // // //   dimControls: {
// // // // // // //     display: 'flex',
// // // // // // //     justifyContent: 'center',
// // // // // // //     alignItems: 'center',
// // // // // // //     gap: '16px',
// // // // // // //     marginBottom: '24px',
// // // // // // //     padding: '14px',
// // // // // // //     backgroundColor: '#f3f4f6',
// // // // // // //     borderRadius: '8px',
// // // // // // //     border: '1px solid #d1d5db',
// // // // // // //   },
// // // // // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

// // // // // // //   /* — coefficient input (Linear Combination) — */
// // // // // // //   coefficientRow: {
// // // // // // //     display: 'flex',
// // // // // // //     alignItems: 'center',
// // // // // // //     gap: '8px',
// // // // // // //     marginBottom: '8px',
// // // // // // //   },
// // // // // // //   coefficientLabel: {
// // // // // // //     fontSize: '0.85rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#4285f4',
// // // // // // //     minWidth: '24px',
// // // // // // //   },
// // // // // // //   coefficientInput: {
// // // // // // //     width: '64px',
// // // // // // //     padding: '6px',
// // // // // // //     border: '2px solid #4285f4',
// // // // // // //     borderRadius: '4px',
// // // // // // //     textAlign: 'center',
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     outline: 'none',
// // // // // // //     backgroundColor: '#f0f7ff',
// // // // // // //   },
// // // // // // //   coefficientHint: {
// // // // // // //     fontSize: '0.8rem',
// // // // // // //     color: '#6b7280',
// // // // // // //   },

// // // // // // //   /* — extra inputs section (coefficients / target) — */
// // // // // // //   extraInputsSection: {
// // // // // // //     backgroundColor: '#fffbeb',
// // // // // // //     border: '1px solid #fde68a',
// // // // // // //     borderRadius: '8px',
// // // // // // //     padding: '16px',
// // // // // // //     marginBottom: '24px',
// // // // // // //   },
// // // // // // //   extraInputsTitle: {
// // // // // // //     fontSize: '0.95rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#92400e',
// // // // // // //     margin: '0 0 12px 0',
// // // // // // //   },

// // // // // // //   /* — result formatting — */
// // // // // // //   resultLabel: {
// // // // // // //     fontSize: '0.85rem',
// // // // // // //     color: '#6b7280',
// // // // // // //     fontStyle: 'italic',
// // // // // // //   },
// // // // // // //   resultValue: {
// // // // // // //     fontSize: '1.1rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#1f2937',
// // // // // // //     fontFamily: 'monospace',
// // // // // // //   },
// // // // // // //   resultTrue: {
// // // // // // //     color: '#059669',
// // // // // // //     fontWeight: '600',
// // // // // // //     fontSize: '1rem',
// // // // // // //   },
// // // // // // //   resultFalse: {
// // // // // // //     color: '#dc2626',
// // // // // // //     fontWeight: '600',
// // // // // // //     fontSize: '1rem',
// // // // // // //   },
// // // // // // //   resultDetail: {
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     color: '#374151',
// // // // // // //     textAlign: 'center',
// // // // // // //   },
// // // // // // //   resultError: {
// // // // // // //     color: '#dc2626',
// // // // // // //     fontWeight: '500',
// // // // // // //     fontSize: '0.95rem',
// // // // // // //   },
// // // // // // //   matrixTable: {
// // // // // // //     borderCollapse: 'collapse',
// // // // // // //     fontFamily: 'monospace',
// // // // // // //     fontSize: '0.95rem',
// // // // // // //   },
// // // // // // //   matrixCell: {
// // // // // // //     padding: '6px 12px',
// // // // // // //     textAlign: 'right',
// // // // // // //     border: '1px solid #e5e7eb',
// // // // // // //   },
// // // // // // //   matrixRowLabel: {
// // // // // // //     padding: '6px 10px',
// // // // // // //     textAlign: 'left',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: '#4285f4',
// // // // // // //     border: '1px solid #e5e7eb',
// // // // // // //     backgroundColor: '#f0f7ff',
// // // // // // //   },
// // // // // // // };

// // // // // // // const spinKeyframes = `
// // // // // // // @keyframes spin {
// // // // // // //   0% { transform: rotate(0deg); }
// // // // // // //   100% { transform: rotate(360deg); }
// // // // // // // }`;

// // // // // // // /* ── component ────────────────────────────────────────────────── */

// // // // // // // export default function VectorCalculator() {
// // // // // // //   const [step, setStep] = useState('operation-type');
// // // // // // //   const [operationType, setOperationType] = useState('');
// // // // // // //   const [dimensionality, setDimensionality] = useState(3);
// // // // // // //   const [vectors, setVectors] = useState([]);
// // // // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // // // //   const [result, setResult] = useState(null);
// // // // // // //   const [errors, setErrors] = useState([]);
// // // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // // //   const [coefficients, setCoefficients] = useState([]);
// // // // // // //   const [targetVector, setTargetVector] = useState([]);

// // // // // // //   const operationTypes = [
// // // // // // //     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
// // // // // // //     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot &amp; cross product' },
// // // // // // //     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
// // // // // // //   ];

// // // // // // //   const operationsByType = {
// // // // // // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // // // // // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // // // // // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
// // // // // // //   };

// // // // // // //   /* ── helpers ── */

// // // // // // //   const validateInputs = () => {
// // // // // // //     const newErrors = [];
// // // // // // //     if (!selectedOperation) newErrors.push('Please select an operation');
// // // // // // //     vectors.forEach((vector, index) => {
// // // // // // //       const name = String.fromCharCode(65 + index);
// // // // // // //       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
// // // // // // //       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // // // // //       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
// // // // // // //       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
// // // // // // //     });
// // // // // // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
// // // // // // //       newErrors.push('Cross product is only defined for 3D vectors');
// // // // // // //     if (operationType === 'multiple' && vectors.length < 2)
// // // // // // //       newErrors.push('Multiple vector operations require at least 2 vectors');

// // // // // // //     // Validate coefficients for Linear Combination
// // // // // // //     if (selectedOperation === 'Linear Combination') {
// // // // // // //       const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
// // // // // // //       if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
// // // // // // //     }

// // // // // // //     // Validate target vector for Span Check
// // // // // // //     if (selectedOperation === 'Span Check') {
// // // // // // //       const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
// // // // // // //       const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
// // // // // // //       if (emptyTarget) newErrors.push('Target vector has empty components');
// // // // // // //       if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
// // // // // // //     }

// // // // // // //     setErrors(newErrors);
// // // // // // //     return newErrors.length === 0;
// // // // // // //   };

// // // // // // //   const handleReset = () => {
// // // // // // //     setStep('operation-type');
// // // // // // //     setOperationType('');
// // // // // // //     setDimensionality(3);
// // // // // // //     setVectors([]);
// // // // // // //     setSelectedOperation('');
// // // // // // //     setResult(null);
// // // // // // //     setErrors([]);
// // // // // // //     setIsLoading(false);
// // // // // // //     setCoefficients([]);
// // // // // // //     setTargetVector([]);
// // // // // // //   };

// // // // // // //   const handleOperationTypeSelect = (type) => {
// // // // // // //     setOperationType(type);
// // // // // // //     setSelectedOperation('');
// // // // // // //     setErrors([]);
// // // // // // //     setResult(null);
// // // // // // //     let count = 1;
// // // // // // //     if (type === 'two') count = 2;
// // // // // // //     if (type === 'multiple') count = 2;
// // // // // // //     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // // // //     const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
// // // // // // //     setVectors(newVectors);
// // // // // // //     setCoefficients(new Array(count).fill(''));
// // // // // // //     setTargetVector(new Array(dim).fill(''));
// // // // // // //     setStep('input');
// // // // // // //   };

// // // // // // //   const updateVectorComponent = (vi, ci, value) => {
// // // // // // //     const updated = [...vectors];
// // // // // // //     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
// // // // // // //     updated[vi].components[ci] = value;
// // // // // // //     setVectors(updated);
// // // // // // //     if (errors.length > 0) setErrors([]);
// // // // // // //   };

// // // // // // //   const updateCoefficient = (index, value) => {
// // // // // // //     const updated = [...coefficients];
// // // // // // //     updated[index] = value;
// // // // // // //     setCoefficients(updated);
// // // // // // //     if (errors.length > 0) setErrors([]);
// // // // // // //   };

// // // // // // //   const updateTargetComponent = (ci, value) => {
// // // // // // //     const updated = [...targetVector];
// // // // // // //     updated[ci] = value;
// // // // // // //     setTargetVector(updated);
// // // // // // //     if (errors.length > 0) setErrors([]);
// // // // // // //   };

// // // // // // //   const addVector = () => {
// // // // // // //     if (operationType === 'multiple' && vectors.length < 10) {
// // // // // // //       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // // // //       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
// // // // // // //       setCoefficients([...coefficients, '']);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const removeVector = (i) => {
// // // // // // //     if (operationType === 'multiple' && vectors.length > 2) {
// // // // // // //       setVectors(vectors.filter((_, idx) => idx !== i));
// // // // // // //       setCoefficients(coefficients.filter((_, idx) => idx !== i));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // // // // // //   const handleOperationSelect = (op) => {
// // // // // // //     setSelectedOperation(op);
// // // // // // //     setErrors([]);
// // // // // // //     setResult(null);
// // // // // // //   };

// // // // // // //   const executeOperation = () => {
// // // // // // //     if (!validateInputs()) return;
// // // // // // //     setIsLoading(true);
// // // // // // //     setResult(null);

// // // // // // //     // Small timeout for visual feedback
// // // // // // //     setTimeout(() => {
// // // // // // //       const numericVectors = vectors.map(v =>
// // // // // // //         v.components.map(c => parseFloat(c))
// // // // // // //       );

// // // // // // //       const params = {
// // // // // // //         operation: selectedOperation,
// // // // // // //         operationType,
// // // // // // //         dimensionality,
// // // // // // //         vectors: numericVectors,
// // // // // // //       };

// // // // // // //       // Attach extra params for special operations
// // // // // // //       if (selectedOperation === 'Linear Combination') {
// // // // // // //         params.coefficients = coefficients.map(c => parseFloat(c));
// // // // // // //       }
// // // // // // //       if (selectedOperation === 'Span Check') {
// // // // // // //         params.targetVector = targetVector.map(c => parseFloat(c));
// // // // // // //       }

// // // // // // //       const res = computeVector(params);
// // // // // // //       setResult(res);

// // // // // // //       if (res.type === 'error') {
// // // // // // //         setErrors([res.value]);
// // // // // // //       }

// // // // // // //       setIsLoading(false);
// // // // // // //     }, 150);
// // // // // // //   };

// // // // // // //   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

// // // // // // //   const getVectorGridExtra = () => {
// // // // // // //     if (operationType === 'single') return s.vectorGridSingle;
// // // // // // //     if (operationType === 'two') return s.vectorGridTwo;
// // // // // // //     return s.vectorGridMultiple;
// // // // // // //   };

// // // // // // //   /* ── current explanation text ── */
// // // // // // //   const getExplanation = () => {
// // // // // // //     const pool = categoryExplanations[operationType];
// // // // // // //     if (!pool) return '';
// // // // // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // // // // //     return pool._default;
// // // // // // //   };

// // // // // // //   const getExplanationHeading = () => {
// // // // // // //     if (selectedOperation) return selectedOperation;
// // // // // // //     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
// // // // // // //     return labels[operationType] || 'Explanation';
// // // // // // //   };

// // // // // // //   /* ── left-panel button style ── */
// // // // // // //   const catBtnStyle = (id) => ({
// // // // // // //     padding: '12px',
// // // // // // //     border: operationType === id ? '2px solid #4285f4' : '2px solid #e5e7eb',
// // // // // // //     borderRadius: '10px',
// // // // // // //     backgroundColor: operationType === id ? '#f0f7ff' : 'white',
// // // // // // //     cursor: 'pointer',
// // // // // // //     textAlign: 'left',
// // // // // // //     transition: 'all 0.25s ease',
// // // // // // //     width: '100%',
// // // // // // //     boxSizing: 'border-box',
// // // // // // //   });
// // // // // // //   const catLabelStyle = (id) => ({
// // // // // // //     fontSize: '0.9rem',
// // // // // // //     fontWeight: '600',
// // // // // // //     color: operationType === id ? '#4285f4' : '#1f2937',
// // // // // // //     marginBottom: '4px',
// // // // // // //   });
// // // // // // //   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

// // // // // // //   const dimInputStyle = {
// // // // // // //     width: '64px',
// // // // // // //     padding: '8px 10px',
// // // // // // //     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // // // //     borderRadius: '8px',
// // // // // // //     fontSize: '1rem',
// // // // // // //     textAlign: 'center',
// // // // // // //     outline: 'none',
// // // // // // //   };

// // // // // // //   /* ── render a single vector card ── */
// // // // // // //   const renderVector = (vector, vi) => (
// // // // // // //     <div key={vector.id} style={s.vectorCard}>
// // // // // // //       <div style={s.vectorHeader}>
// // // // // // //         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
// // // // // // //         {operationType === 'multiple' && vectors.length > 2 && (
// // // // // // //           <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //       <div style={s.vectorComponents}>
// // // // // // //         <span style={s.bracket}>(</span>
// // // // // // //         {vector.components.map((comp, ci) => (
// // // // // // //           <React.Fragment key={ci}>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               step="any"
// // // // // // //               value={comp}
// // // // // // //               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
// // // // // // //               placeholder={`x${ci + 1}`}
// // // // // // //               style={{
// // // // // // //                 ...s.componentInput,
// // // // // // //                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
// // // // // // //               }}
// // // // // // //             />
// // // // // // //             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
// // // // // // //           </React.Fragment>
// // // // // // //         ))}
// // // // // // //         <span style={s.bracket}>)</span>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   /* ── render result based on type ── */
// // // // // // //   const renderResult = () => {
// // // // // // //     if (!result) return 'Select vectors and operation, then click Execute';

// // // // // // //     if (result.type === 'error') {
// // // // // // //       return <span style={s.resultError}>{result.value}</span>;
// // // // // // //     }

// // // // // // //     if (result.type === 'scalar') {
// // // // // // //       return (
// // // // // // //         <>
// // // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // // //           <span style={s.resultValue}>{result.value}</span>
// // // // // // //         </>
// // // // // // //       );
// // // // // // //     }

// // // // // // //     if (result.type === 'vector') {
// // // // // // //       return (
// // // // // // //         <>
// // // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // // //           <span style={s.resultValue}>({result.value.join(', ')})</span>
// // // // // // //         </>
// // // // // // //       );
// // // // // // //     }

// // // // // // //     if (result.type === 'boolean') {
// // // // // // //       return (
// // // // // // //         <>
// // // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // // //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// // // // // // //             {result.value ? '✓ TRUE' : '✗ FALSE'}
// // // // // // //           </span>
// // // // // // //           <span style={s.resultDetail}>{result.detail}</span>
// // // // // // //         </>
// // // // // // //       );
// // // // // // //     }

// // // // // // //     if (result.type === 'matrix') {
// // // // // // //       return (
// // // // // // //         <>
// // // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // // //           <table style={s.matrixTable}>
// // // // // // //             <tbody>
// // // // // // //               {result.value.map((row, ri) => (
// // // // // // //                 <tr key={ri}>
// // // // // // //                   {result.rowLabels && (
// // // // // // //                     <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
// // // // // // //                   )}
// // // // // // //                   {row.map((val, ci) => (
// // // // // // //                     <td key={ci} style={s.matrixCell}>{val}</td>
// // // // // // //                   ))}
// // // // // // //                 </tr>
// // // // // // //               ))}
// // // // // // //             </tbody>
// // // // // // //           </table>
// // // // // // //         </>
// // // // // // //       );
// // // // // // //     }

// // // // // // //     return JSON.stringify(result.value);
// // // // // // //   };

// // // // // // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // // // // // //   return (
// // // // // // //     <div style={s.container}>
// // // // // // //       <style>{spinKeyframes}</style>
// // // // // // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // // // // // //         {/* Header */}
// // // // // // //         <div style={s.header}>
// // // // // // //           <h1 style={s.title}>Vector Calculator</h1>
// // // // // // //           <p style={s.subtitle}>Professional vector operations calculator</p>
// // // // // // //         </div>

// // // // // // //         {/* ── INITIAL STATE ── */}
// // // // // // //         {step === 'operation-type' && (
// // // // // // //           <div>
// // // // // // //             <h2 style={s.stepTitle}>Select Operation Type</h2>
// // // // // // //             <div style={s.operationTypeGrid}>
// // // // // // //               {operationTypes.map((type) => (
// // // // // // //                 <button
// // // // // // //                   key={type.id}
// // // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // // //                   style={s.operationTypeCard}
// // // // // // //                   onMouseOver={(e) => {
// // // // // // //                     e.currentTarget.style.borderColor = '#4285f4';
// // // // // // //                     e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // // // //                   }}
// // // // // // //                   onMouseOut={(e) => {
// // // // // // //                     e.currentTarget.style.borderColor = '#e5e7eb';
// // // // // // //                     e.currentTarget.style.backgroundColor = 'white';
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   <div style={s.operationTypeTitle}>{type.label}</div>
// // // // // // //                   <div style={s.operationTypeDescription}>{type.description}</div>
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* ── EXPANDED STATE — 3-column ── */}
// // // // // // //         {step === 'input' && (
// // // // // // //           <div style={s.threeColLayout}>

// // // // // // //             {/* ▸ LEFT — category buttons */}
// // // // // // //             <div style={s.leftPanel}>
// // // // // // //               <div style={s.leftPanelTitle}>Category</div>
// // // // // // //               {operationTypes.map((type) => (
// // // // // // //                 <button
// // // // // // //                   key={type.id}
// // // // // // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // // // // // //                   style={catBtnStyle(type.id)}
// // // // // // //                   onMouseOver={(e) => {
// // // // // // //                     if (operationType !== type.id) {
// // // // // // //                       e.currentTarget.style.borderColor = '#4285f4';
// // // // // // //                       e.currentTarget.style.backgroundColor = '#f8f9ff';
// // // // // // //                     }
// // // // // // //                   }}
// // // // // // //                   onMouseOut={(e) => {
// // // // // // //                     if (operationType !== type.id) {
// // // // // // //                       e.currentTarget.style.borderColor = '#e5e7eb';
// // // // // // //                       e.currentTarget.style.backgroundColor = 'white';
// // // // // // //                     }
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   <div style={catLabelStyle(type.id)}>{type.label}</div>
// // // // // // //                   <div style={catDescStyle}>{type.description}</div>
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             {/* ▸ MIDDLE — calculator */}
// // // // // // //             <div>
// // // // // // //               <div style={s.inputHeader}>
// // // // // // //                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
// // // // // // //                 <div style={s.buttonGroup}>
// // // // // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset</button>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Dimensionality */}
// // // // // // //               <div style={s.dimControls}>
// // // // // // //                 <label style={s.dimLabel}>Dimensions:</label>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   min="2"
// // // // // // //                   max="10"
// // // // // // //                   value={dimensionality}
// // // // // // //                   onChange={(e) => {
// // // // // // //                     const raw = e.target.value;
// // // // // // //                     if (raw === '') { setDimensionality(''); return; }
// // // // // // //                     const val = parseInt(raw);
// // // // // // //                     setDimensionality(val);
// // // // // // //                     if (val >= 2 && val <= 10) {
// // // // // // //                       setVectors(vectors.map(v => {
// // // // // // //                         const nc = new Array(val).fill('');
// // // // // // //                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
// // // // // // //                         return { ...v, components: nc };
// // // // // // //                       }));
// // // // // // //                       // Also resize target vector
// // // // // // //                       const nt = new Array(val).fill('');
// // // // // // //                       for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
// // // // // // //                       setTargetVector(nt);
// // // // // // //                       setErrors([]);
// // // // // // //                     } else {
// // // // // // //                       setErrors(['Dimensionality must be between 2 and 10']);
// // // // // // //                     }
// // // // // // //                   }}
// // // // // // //                   style={dimInputStyle}
// // // // // // //                 />
// // // // // // //                 <span style={s.dimHint}>(2–10)</span>
// // // // // // //               </div>

// // // // // // //               {/* Errors */}
// // // // // // //               {errors.length > 0 && (
// // // // // // //                 <div style={s.errorSection}>
// // // // // // //                   <div style={s.errorTitle}>Please fix the following:</div>
// // // // // // //                   <ul style={s.errorList}>
// // // // // // //                     {errors.map((err, i) => (
// // // // // // //                       <li key={i} style={s.errorItem}>&bull; {err}</li>
// // // // // // //                     ))}
// // // // // // //                   </ul>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* Vectors */}
// // // // // // //               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
// // // // // // //                 {vectors.map((v, i) => renderVector(v, i))}
// // // // // // //               </div>

// // // // // // //               {/* Add vector */}
// // // // // // //               {operationType === 'multiple' && vectors.length < 10 && (
// // // // // // //                 <div style={s.addVectorContainer}>
// // // // // // //                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
// // // // // // //               {selectedOperation === 'Linear Combination' && (
// // // // // // //                 <div style={s.extraInputsSection}>
// // // // // // //                   <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
// // // // // // //                   {vectors.map((v, i) => (
// // // // // // //                     <div key={i} style={s.coefficientRow}>
// // // // // // //                       <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
// // // // // // //                       <input
// // // // // // //                         type="number"
// // // // // // //                         step="any"
// // // // // // //                         value={coefficients[i] || ''}
// // // // // // //                         onChange={(e) => updateCoefficient(i, e.target.value)}
// // // // // // //                         placeholder="0"
// // // // // // //                         style={s.coefficientInput}
// // // // // // //                       />
// // // // // // //                       <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* ── Extra inputs: Target Vector (Span Check) ── */}
// // // // // // //               {selectedOperation === 'Span Check' && (
// // // // // // //                 <div style={s.extraInputsSection}>
// // // // // // //                   <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
// // // // // // //                   <div style={s.vectorComponents}>
// // // // // // //                     <span style={s.bracket}>(</span>
// // // // // // //                     {targetVector.map((comp, ci) => (
// // // // // // //                       <React.Fragment key={ci}>
// // // // // // //                         <input
// // // // // // //                           type="number"
// // // // // // //                           step="any"
// // // // // // //                           value={comp}
// // // // // // //                           onChange={(e) => updateTargetComponent(ci, e.target.value)}
// // // // // // //                           placeholder={`t${ci + 1}`}
// // // // // // //                           style={{
// // // // // // //                             ...s.componentInput,
// // // // // // //                             borderColor: '#f59e0b',
// // // // // // //                           }}
// // // // // // //                         />
// // // // // // //                         {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
// // // // // // //                       </React.Fragment>
// // // // // // //                     ))}
// // // // // // //                     <span style={s.bracket}>)</span>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {/* Operations */}
// // // // // // //               <div style={s.operationsSection}>
// // // // // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // // // // //                 <div style={s.operationsGrid}>
// // // // // // //                   {getAvailableOperations().map((op) => {
// // // // // // //                     const sel = selectedOperation === op;
// // // // // // //                     const dis = op === 'Cross Product' && dimensionality !== 3;
// // // // // // //                     return (
// // // // // // //                       <button
// // // // // // //                         key={op}
// // // // // // //                         onClick={() => handleOperationSelect(op)}
// // // // // // //                         disabled={dis}
// // // // // // //                         style={{
// // // // // // //                           ...s.operationButton,
// // // // // // //                           ...(sel ? s.operationButtonSelected : {}),
// // // // // // //                           ...(dis ? s.operationButtonDisabled : {}),
// // // // // // //                         }}
// // // // // // //                       >
// // // // // // //                         {op}
// // // // // // //                       </button>
// // // // // // //                     );
// // // // // // //                   })}
// // // // // // //                 </div>

// // // // // // //                 <div style={{ display: 'flex', justifyContent: 'center' }}>
// // // // // // //                   <button
// // // // // // //                     onClick={executeOperation}
// // // // // // //                     disabled={!canExecute()}
// // // // // // //                     style={{ ...s.executeButton, ...(!canExecute() ? s.executeButtonDisabled : {}) }}
// // // // // // //                   >
// // // // // // //                     {isLoading ? (
// // // // // // //                       <div style={s.loading}>
// // // // // // //                         <div style={s.spinner} />
// // // // // // //                         Calculating...
// // // // // // //                       </div>
// // // // // // //                     ) : (
// // // // // // //                       'Execute Operation'
// // // // // // //                     )}
// // // // // // //                   </button>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Result */}
// // // // // // //               <div style={s.resultsSection}>
// // // // // // //                 <h4 style={s.resultsTitle}>Result</h4>
// // // // // // //                 <div style={s.resultsContent}>
// // // // // // //                   {renderResult()}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* ▸ RIGHT — explanation */}
// // // // // // //             <div style={s.explanationPanel}>
// // // // // // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // // // // // //               <p style={s.explanationBody}>{getExplanation()}</p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import React, { useState } from 'react';
// // // // // // import computeVector from './computeVector';

// // // // // // /* ── placeholder explanations ─────────────────────────────────── */

// // // // // // const categoryExplanations = {
// // // // // //   single: {
// // // // // //     _default:
// // // // // //       'Single vector operations work on one vector at a time. Choose an operation on the left to see a detailed explanation here.',
// // // // // //     Magnitude:
// // // // // //       'The magnitude (or length) of a vector is computed as the square root of the sum of the squares of its components. ||v|| = √(v₁² + v₂² + … + vₙ²)',
// // // // // //     'Unit Vector':
// // // // // //       'A unit vector has magnitude 1 and points in the same direction as the original vector. It is found by dividing each component by the magnitude.',
// // // // // //     Normalize:
// // // // // //       'Normalization rescales a vector so its magnitude becomes 1 while preserving direction. Equivalent to computing the unit vector.',
// // // // // //     'Sum of Components':
// // // // // //       'The sum of components adds every element of the vector together into a single scalar value.',
// // // // // //     'L1 Norm':
// // // // // //       'The L1 norm (Manhattan norm) is the sum of the absolute values of all components: ||v||₁ = |v₁| + |v₂| + … + |vₙ|',
// // // // // //     'L2 Norm':
// // // // // //       'The L2 norm (Euclidean norm) equals the magnitude: ||v||₂ = √(v₁² + v₂² + … + vₙ²)',
// // // // // //     'Infinity Norm':
// // // // // //       'The infinity norm returns the largest absolute value among all components: ||v||∞ = max(|v₁|, |v₂|, …, |vₙ|)',
// // // // // //   },
// // // // // //   two: {
// // // // // //     _default:
// // // // // //       'Two-vector operations take a pair of vectors and produce a scalar, vector, or angle. Choose an operation to learn more.',
// // // // // //     Addition:
// // // // // //       'Vector addition sums corresponding components: (a₁+b₁, a₂+b₂, …). The result is a new vector of the same dimension.',
// // // // // //     Subtraction:
// // // // // //       'Vector subtraction finds the difference of corresponding components: (a₁−b₁, a₂−b₂, …).',
// // // // // //     'Dot Product':
// // // // // //       'The dot product multiplies corresponding components and sums the results: a·b = a₁b₁ + a₂b₂ + … + aₙbₙ. The result is a scalar.',
// // // // // //     'Cross Product':
// // // // // //       'The cross product is defined only in 3D. It returns a vector perpendicular to both inputs: a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).',
// // // // // //     'Angle Between':
// // // // // //       'The angle θ between two vectors is found via cos θ = (a·b) / (||a|| · ||b||). Result is in radians or degrees.',
// // // // // //     Distance:
// // // // // //       'The Euclidean distance between two vectors equals the magnitude of their difference: d = ||a − b||.',
// // // // // //     Projection:
// // // // // //       'The projection of a onto b gives the component of a in the direction of b: proj_b(a) = ((a·b)/(b·b)) · b.',
// // // // // //     Rejection:
// // // // // //       'The rejection of a from b is the component of a perpendicular to b: rej_b(a) = a − proj_b(a).',
// // // // // //   },
// // // // // //   multiple: {
// // // // // //     _default:
// // // // // //       'Multiple-vector operations analyse sets of vectors for properties like independence, orthogonality, and span. Pick an operation to see details.',
// // // // // //     'Linear Combination':
// // // // // //       'A linear combination multiplies each vector by a scalar and sums the results: c₁v₁ + c₂v₂ + … + cₖvₖ.',
// // // // // //     'Span Check':
// // // // // //       'The span of a set of vectors is the collection of all possible linear combinations. This check determines whether a target vector lies within that span.',
// // // // // //     'Linear Independence':
// // // // // //       'Vectors are linearly independent if none can be written as a linear combination of the others. Checked via row-reduction of the matrix they form.',
// // // // // //     'Orthogonality Check':
// // // // // //       'Vectors are mutually orthogonal if every pair has a dot product of zero.',
// // // // // //     'Gram-Schmidt':
// // // // // //       'The Gram–Schmidt process converts a set of linearly independent vectors into an orthonormal set that spans the same subspace.',
// // // // // //     'Matrix Form':
// // // // // //       'Arranges the input vectors as columns (or rows) of a matrix for further linear-algebra operations such as determinant or rank.',
// // // // // //   },
// // // // // // };

// // // // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // // // const s = {
// // // // // //   /* — wrappers — */
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

// // // // // //   /* — initial card grid — */
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

// // // // // //   /* — left panel — */
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

// // // // // //   /* — right (explanation) panel — */
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
// // // // // //   vectorGrid: {
// // // // // //     display: 'grid',
// // // // // //     gap: '16px',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   vectorGridSingle: { gridTemplateColumns: '1fr' },
// // // // // //   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
// // // // // //   vectorGridMultiple: { gridTemplateColumns: '1fr' },
// // // // // //   vectorCard: {
// // // // // //     backgroundColor: '#f8f9fa',
// // // // // //     padding: '16px',
// // // // // //     borderRadius: '8px',
// // // // // //     border: '1px solid #e5e7eb',
// // // // // //   },
// // // // // //   vectorHeader: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'space-between',
// // // // // //     alignItems: 'center',
// // // // // //     marginBottom: '12px',
// // // // // //   },
// // // // // //   vectorName: {
// // // // // //     margin: '0',
// // // // // //     fontSize: '1.05rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#374151',
// // // // // //   },
// // // // // //   vectorHeaderButtons: {
// // // // // //     display: 'flex',
// // // // // //     gap: '6px',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   vectorComponents: {
// // // // // //     display: 'flex',
// // // // // //     gap: '8px',
// // // // // //     alignItems: 'center',
// // // // // //     flexWrap: 'wrap',
// // // // // //   },
// // // // // //   componentInput: {
// // // // // //     width: '56px',
// // // // // //     padding: '6px',
// // // // // //     border: '1px solid #d1d5db',
// // // // // //     borderRadius: '4px',
// // // // // //     textAlign: 'center',
// // // // // //     fontSize: '0.9rem',
// // // // // //     outline: 'none',
// // // // // //   },
// // // // // //   componentInputError: {
// // // // // //     borderColor: '#dc2626',
// // // // // //     backgroundColor: '#fef2f2',
// // // // // //   },
// // // // // //   separator: { color: '#6b7280' },
// // // // // //   bracket: { fontWeight: '500' },
// // // // // //   addVectorContainer: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   addVectorButton: {
// // // // // //     padding: '8px 16px',
// // // // // //     border: '2px dashed #4285f4',
// // // // // //     borderRadius: '8px',
// // // // // //     backgroundColor: 'transparent',
// // // // // //     color: '#4285f4',
// // // // // //     fontSize: '0.9rem',
// // // // // //     cursor: 'pointer',
// // // // // //     transition: 'all 0.2s ease',
// // // // // //   },
// // // // // //   operationsSection: { marginBottom: '24px' },
// // // // // //   operationsTitle: {
// // // // // //     fontSize: '1.1rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1f2937',
// // // // // //     marginBottom: '16px',
// // // // // //   },
// // // // // //   operationsGrid: {
// // // // // //     display: 'grid',
// // // // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
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
// // // // // //   clearVectorButton: {
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
// // // // // //   dimControls: {
// // // // // //     display: 'flex',
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '16px',
// // // // // //     marginBottom: '24px',
// // // // // //     padding: '14px',
// // // // // //     backgroundColor: '#f3f4f6',
// // // // // //     borderRadius: '8px',
// // // // // //     border: '1px solid #d1d5db',
// // // // // //   },
// // // // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

// // // // // //   /* — coefficient input (Linear Combination) — */
// // // // // //   coefficientRow: {
// // // // // //     display: 'flex',
// // // // // //     alignItems: 'center',
// // // // // //     gap: '8px',
// // // // // //     marginBottom: '8px',
// // // // // //   },
// // // // // //   coefficientLabel: {
// // // // // //     fontSize: '0.85rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#4285f4',
// // // // // //     minWidth: '24px',
// // // // // //   },
// // // // // //   coefficientInput: {
// // // // // //     width: '64px',
// // // // // //     padding: '6px',
// // // // // //     border: '2px solid #4285f4',
// // // // // //     borderRadius: '4px',
// // // // // //     textAlign: 'center',
// // // // // //     fontSize: '0.9rem',
// // // // // //     outline: 'none',
// // // // // //     backgroundColor: '#f0f7ff',
// // // // // //   },
// // // // // //   coefficientHint: {
// // // // // //     fontSize: '0.8rem',
// // // // // //     color: '#6b7280',
// // // // // //   },

// // // // // //   /* — extra inputs section (coefficients / target) — */
// // // // // //   extraInputsSection: {
// // // // // //     backgroundColor: '#fffbeb',
// // // // // //     border: '1px solid #fde68a',
// // // // // //     borderRadius: '8px',
// // // // // //     padding: '16px',
// // // // // //     marginBottom: '24px',
// // // // // //   },
// // // // // //   extraInputsTitle: {
// // // // // //     fontSize: '0.95rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#92400e',
// // // // // //     margin: '0 0 12px 0',
// // // // // //   },

// // // // // //   /* — result formatting — */
// // // // // //   resultLabel: {
// // // // // //     fontSize: '0.85rem',
// // // // // //     color: '#6b7280',
// // // // // //     fontStyle: 'italic',
// // // // // //   },
// // // // // //   resultValue: {
// // // // // //     fontSize: '1.1rem',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#1f2937',
// // // // // //     fontFamily: 'monospace',
// // // // // //   },
// // // // // //   resultTrue: {
// // // // // //     color: '#059669',
// // // // // //     fontWeight: '600',
// // // // // //     fontSize: '1rem',
// // // // // //   },
// // // // // //   resultFalse: {
// // // // // //     color: '#dc2626',
// // // // // //     fontWeight: '600',
// // // // // //     fontSize: '1rem',
// // // // // //   },
// // // // // //   resultDetail: {
// // // // // //     fontSize: '0.9rem',
// // // // // //     color: '#374151',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   resultError: {
// // // // // //     color: '#dc2626',
// // // // // //     fontWeight: '500',
// // // // // //     fontSize: '0.95rem',
// // // // // //   },
// // // // // //   matrixTable: {
// // // // // //     borderCollapse: 'collapse',
// // // // // //     fontFamily: 'monospace',
// // // // // //     fontSize: '0.95rem',
// // // // // //   },
// // // // // //   matrixCell: {
// // // // // //     padding: '6px 12px',
// // // // // //     textAlign: 'right',
// // // // // //     border: '1px solid #e5e7eb',
// // // // // //   },
// // // // // //   matrixRowLabel: {
// // // // // //     padding: '6px 10px',
// // // // // //     textAlign: 'left',
// // // // // //     fontWeight: '600',
// // // // // //     color: '#4285f4',
// // // // // //     border: '1px solid #e5e7eb',
// // // // // //     backgroundColor: '#f0f7ff',
// // // // // //   },
// // // // // // };

// // // // // // const spinKeyframes = `
// // // // // // @keyframes spin {
// // // // // //   0% { transform: rotate(0deg); }
// // // // // //   100% { transform: rotate(360deg); }
// // // // // // }`;

// // // // // // /* ── component ────────────────────────────────────────────────── */

// // // // // // export default function VectorCalculator() {
// // // // // //   const [step, setStep] = useState('operation-type');
// // // // // //   const [operationType, setOperationType] = useState('');
// // // // // //   const [dimensionality, setDimensionality] = useState(3);
// // // // // //   const [vectors, setVectors] = useState([]);
// // // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // // //   const [result, setResult] = useState(null);
// // // // // //   const [errors, setErrors] = useState([]);
// // // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // // //   const [coefficients, setCoefficients] = useState([]);
// // // // // //   const [targetVector, setTargetVector] = useState([]);

// // // // // //   const operationTypes = [
// // // // // //     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
// // // // // //     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot & cross product' },
// // // // // //     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
// // // // // //   ];

// // // // // //   const operationsByType = {
// // // // // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // // // // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // // // // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
// // // // // //   };

// // // // // //   /* ── helpers ── */

// // // // // //   const validateInputs = () => {
// // // // // //     const newErrors = [];
// // // // // //     if (!selectedOperation) newErrors.push('Please select an operation');
// // // // // //     vectors.forEach((vector, index) => {
// // // // // //       const name = String.fromCharCode(65 + index);
// // // // // //       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
// // // // // //       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // // // //       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
// // // // // //       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
// // // // // //     });
// // // // // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
// // // // // //       newErrors.push('Cross product is only defined for 3D vectors');
// // // // // //     if (operationType === 'multiple' && vectors.length < 2)
// // // // // //       newErrors.push('Multiple vector operations require at least 2 vectors');

// // // // // //     if (selectedOperation === 'Linear Combination') {
// // // // // //       const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
// // // // // //       if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
// // // // // //     }

// // // // // //     if (selectedOperation === 'Span Check') {
// // // // // //       const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
// // // // // //       const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
// // // // // //       if (emptyTarget) newErrors.push('Target vector has empty components');
// // // // // //       if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
// // // // // //     }

// // // // // //     setErrors(newErrors);
// // // // // //     return newErrors.length === 0;
// // // // // //   };

// // // // // //   const handleReset = () => {
// // // // // //     setStep('operation-type');
// // // // // //     setOperationType('');
// // // // // //     setDimensionality(3);
// // // // // //     setVectors([]);
// // // // // //     setSelectedOperation('');
// // // // // //     setResult(null);
// // // // // //     setErrors([]);
// // // // // //     setIsLoading(false);
// // // // // //     setCoefficients([]);
// // // // // //     setTargetVector([]);
// // // // // //   };

// // // // // //   const clearVector = (vi) => {
// // // // // //     const updated = [...vectors];
// // // // // //     const dim = updated[vi].components.length;
// // // // // //     updated[vi] = { ...updated[vi], components: new Array(dim).fill('') };
// // // // // //     setVectors(updated);
// // // // // //   };

// // // // // //   const handleOperationTypeSelect = (type) => {
// // // // // //     setOperationType(type);
// // // // // //     setSelectedOperation('');
// // // // // //     setErrors([]);
// // // // // //     setResult(null);
// // // // // //     let count = 1;
// // // // // //     if (type === 'two') count = 2;
// // // // // //     if (type === 'multiple') count = 2;
// // // // // //     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // // //     const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
// // // // // //     setVectors(newVectors);
// // // // // //     setCoefficients(new Array(count).fill(''));
// // // // // //     setTargetVector(new Array(dim).fill(''));
// // // // // //     setStep('input');
// // // // // //   };

// // // // // //   const updateVectorComponent = (vi, ci, value) => {
// // // // // //     const updated = [...vectors];
// // // // // //     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
// // // // // //     updated[vi].components[ci] = value;
// // // // // //     setVectors(updated);
// // // // // //     if (errors.length > 0) setErrors([]);
// // // // // //   };

// // // // // //   const updateCoefficient = (index, value) => {
// // // // // //     const updated = [...coefficients];
// // // // // //     updated[index] = value;
// // // // // //     setCoefficients(updated);
// // // // // //     if (errors.length > 0) setErrors([]);
// // // // // //   };

// // // // // //   const updateTargetComponent = (ci, value) => {
// // // // // //     const updated = [...targetVector];
// // // // // //     updated[ci] = value;
// // // // // //     setTargetVector(updated);
// // // // // //     if (errors.length > 0) setErrors([]);
// // // // // //   };

// // // // // //   const addVector = () => {
// // // // // //     if (operationType === 'multiple' && vectors.length < 10) {
// // // // // //       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // // //       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
// // // // // //       setCoefficients([...coefficients, '']);
// // // // // //     }
// // // // // //   };

// // // // // //   const removeVector = (i) => {
// // // // // //     if (operationType === 'multiple' && vectors.length > 2) {
// // // // // //       setVectors(vectors.filter((_, idx) => idx !== i));
// // // // // //       setCoefficients(coefficients.filter((_, idx) => idx !== i));
// // // // // //     }
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
// // // // // //       const numericVectors = vectors.map(v =>
// // // // // //         v.components.map(c => parseFloat(c))
// // // // // //       );

// // // // // //       const params = {
// // // // // //         operation: selectedOperation,
// // // // // //         operationType,
// // // // // //         dimensionality,
// // // // // //         vectors: numericVectors,
// // // // // //       };

// // // // // //       if (selectedOperation === 'Linear Combination') {
// // // // // //         params.coefficients = coefficients.map(c => parseFloat(c));
// // // // // //       }
// // // // // //       if (selectedOperation === 'Span Check') {
// // // // // //         params.targetVector = targetVector.map(c => parseFloat(c));
// // // // // //       }

// // // // // //       const res = computeVector(params);
// // // // // //       setResult(res);

// // // // // //       if (res.type === 'error') {
// // // // // //         setErrors([res.value]);
// // // // // //       }

// // // // // //       setIsLoading(false);
// // // // // //     }, 150);
// // // // // //   };

// // // // // //   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

// // // // // //   const getVectorGridExtra = () => {
// // // // // //     if (operationType === 'single') return s.vectorGridSingle;
// // // // // //     if (operationType === 'two') return s.vectorGridTwo;
// // // // // //     return s.vectorGridMultiple;
// // // // // //   };

// // // // // //   /* ── current explanation text ── */
// // // // // //   const getExplanation = () => {
// // // // // //     const pool = categoryExplanations[operationType];
// // // // // //     if (!pool) return '';
// // // // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // // // //     return pool._default;
// // // // // //   };

// // // // // //   const getExplanationHeading = () => {
// // // // // //     if (selectedOperation) return selectedOperation;
// // // // // //     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
// // // // // //     return labels[operationType] || 'Explanation';
// // // // // //   };

// // // // // //   /* ── left-panel button style ── */
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

// // // // // //   const dimInputStyle = {
// // // // // //     width: '64px',
// // // // // //     padding: '8px 10px',
// // // // // //     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // // //     borderRadius: '8px',
// // // // // //     fontSize: '1rem',
// // // // // //     textAlign: 'center',
// // // // // //     outline: 'none',
// // // // // //   };

// // // // // //   /* ── render a single vector card ── */
// // // // // //   const renderVector = (vector, vi) => (
// // // // // //     <div key={vector.id} style={s.vectorCard}>
// // // // // //       <div style={s.vectorHeader}>
// // // // // //         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
// // // // // //         <div style={s.vectorHeaderButtons}>
// // // // // //           <button
// // // // // //             onClick={() => clearVector(vi)}
// // // // // //             style={s.clearVectorButton}
// // // // // //             title="Clear this vector"
// // // // // //           >
// // // // // //             Clear
// // // // // //           </button>
// // // // // //           {operationType === 'multiple' && vectors.length > 2 && (
// // // // // //             <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <div style={s.vectorComponents}>
// // // // // //         <span style={s.bracket}>(</span>
// // // // // //         {vector.components.map((comp, ci) => (
// // // // // //           <React.Fragment key={ci}>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               step="any"
// // // // // //               value={comp}
// // // // // //               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
// // // // // //               placeholder={`x${ci + 1}`}
// // // // // //               style={{
// // // // // //                 ...s.componentInput,
// // // // // //                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
// // // // // //               }}
// // // // // //             />
// // // // // //             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
// // // // // //           </React.Fragment>
// // // // // //         ))}
// // // // // //         <span style={s.bracket}>)</span>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );

// // // // // //   /* ── render result based on type ── */
// // // // // //   const renderResult = () => {
// // // // // //     if (!result) return 'Select vectors and operation, then click Execute';

// // // // // //     if (result.type === 'error') {
// // // // // //       return <span style={s.resultError}>{result.value}</span>;
// // // // // //     }

// // // // // //     if (result.type === 'scalar') {
// // // // // //       return (
// // // // // //         <>
// // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // //           <span style={s.resultValue}>{result.value}</span>
// // // // // //         </>
// // // // // //       );
// // // // // //     }

// // // // // //     if (result.type === 'vector') {
// // // // // //       return (
// // // // // //         <>
// // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // //           <span style={s.resultValue}>({result.value.join(', ')})</span>
// // // // // //         </>
// // // // // //       );
// // // // // //     }

// // // // // //     if (result.type === 'boolean') {
// // // // // //       return (
// // // // // //         <>
// // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// // // // // //             {result.value ? '✓ TRUE' : '✗ FALSE'}
// // // // // //           </span>
// // // // // //           <span style={s.resultDetail}>{result.detail}</span>
// // // // // //         </>
// // // // // //       );
// // // // // //     }

// // // // // //     if (result.type === 'matrix') {
// // // // // //       return (
// // // // // //         <>
// // // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // // //           <table style={s.matrixTable}>
// // // // // //             <tbody>
// // // // // //               {result.value.map((row, ri) => (
// // // // // //                 <tr key={ri}>
// // // // // //                   {result.rowLabels && (
// // // // // //                     <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
// // // // // //                   )}
// // // // // //                   {row.map((val, ci) => (
// // // // // //                     <td key={ci} style={s.matrixCell}>{val}</td>
// // // // // //                   ))}
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </>
// // // // // //       );
// // // // // //     }

// // // // // //     return JSON.stringify(result.value);
// // // // // //   };

// // // // // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // // // // //   return (
// // // // // //     <div style={s.container}>
// // // // // //       <style>{spinKeyframes}</style>
// // // // // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // // // // //         {/* Header */}
// // // // // //         <div style={s.header}>
// // // // // //           <h1 style={s.title}>Vector Calculator</h1>
// // // // // //           <p style={s.subtitle}>Professional vector operations calculator</p>
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
// // // // // //                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
// // // // // //                 <div style={s.buttonGroup}>
// // // // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Dimensionality */}
// // // // // //               <div style={s.dimControls}>
// // // // // //                 <label style={s.dimLabel}>Dimensions:</label>
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   min="2"
// // // // // //                   max="10"
// // // // // //                   value={dimensionality}
// // // // // //                   onChange={(e) => {
// // // // // //                     const raw = e.target.value;
// // // // // //                     if (raw === '') { setDimensionality(''); return; }
// // // // // //                     const val = parseInt(raw);
// // // // // //                     setDimensionality(val);
// // // // // //                     if (val >= 2 && val <= 10) {
// // // // // //                       setVectors(vectors.map(v => {
// // // // // //                         const nc = new Array(val).fill('');
// // // // // //                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
// // // // // //                         return { ...v, components: nc };
// // // // // //                       }));
// // // // // //                       const nt = new Array(val).fill('');
// // // // // //                       for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
// // // // // //                       setTargetVector(nt);
// // // // // //                       setErrors([]);
// // // // // //                     } else {
// // // // // //                       setErrors(['Dimensionality must be between 2 and 10']);
// // // // // //                     }
// // // // // //                   }}
// // // // // //                   style={dimInputStyle}
// // // // // //                 />
// // // // // //                 <span style={s.dimHint}>(2–10)</span>
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

// // // // // //               {/* Vectors */}
// // // // // //               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
// // // // // //                 {vectors.map((v, i) => renderVector(v, i))}
// // // // // //               </div>

// // // // // //               {/* Add vector */}
// // // // // //               {operationType === 'multiple' && vectors.length < 10 && (
// // // // // //                 <div style={s.addVectorContainer}>
// // // // // //                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
// // // // // //               {selectedOperation === 'Linear Combination' && (
// // // // // //                 <div style={s.extraInputsSection}>
// // // // // //                   <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
// // // // // //                   {vectors.map((v, i) => (
// // // // // //                     <div key={i} style={s.coefficientRow}>
// // // // // //                       <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
// // // // // //                       <input
// // // // // //                         type="number"
// // // // // //                         step="any"
// // // // // //                         value={coefficients[i] || ''}
// // // // // //                         onChange={(e) => updateCoefficient(i, e.target.value)}
// // // // // //                         placeholder="0"
// // // // // //                         style={s.coefficientInput}
// // // // // //                       />
// // // // // //                       <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* ── Extra inputs: Target Vector (Span Check) ── */}
// // // // // //               {selectedOperation === 'Span Check' && (
// // // // // //                 <div style={s.extraInputsSection}>
// // // // // //                   <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
// // // // // //                   <div style={s.vectorComponents}>
// // // // // //                     <span style={s.bracket}>(</span>
// // // // // //                     {targetVector.map((comp, ci) => (
// // // // // //                       <React.Fragment key={ci}>
// // // // // //                         <input
// // // // // //                           type="number"
// // // // // //                           step="any"
// // // // // //                           value={comp}
// // // // // //                           onChange={(e) => updateTargetComponent(ci, e.target.value)}
// // // // // //                           placeholder={`t${ci + 1}`}
// // // // // //                           style={{
// // // // // //                             ...s.componentInput,
// // // // // //                             borderColor: '#f59e0b',
// // // // // //                           }}
// // // // // //                         />
// // // // // //                         {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
// // // // // //                       </React.Fragment>
// // // // // //                     ))}
// // // // // //                     <span style={s.bracket}>)</span>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {/* Operations */}
// // // // // //               <div style={s.operationsSection}>
// // // // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // // // //                 <div style={s.operationsGrid}>
// // // // // //                   {getAvailableOperations().map((op) => {
// // // // // //                     const sel = selectedOperation === op;
// // // // // //                     const dis = op === 'Cross Product' && dimensionality !== 3;
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
// // // // // //                   {renderResult()}
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
// // // // // import computeVector from './computeVector';
// // // // // import { processContent } from '../../../utils/contentProcessor';
// // // // // import {
// // // // //   descriptions as defaultDescriptions,
// // // // //   steps as operationSteps,
// // // // // } from './vectorExplanations';

// // // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // // const s = {
// // // // //   /* — wrappers — */
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

// // // // //   /* — initial card grid — */
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

// // // // //   /* — left panel — */
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

// // // // //   /* — right (explanation) panel — */
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
// // // // //     margin: '0 0 0 0',
// // // // //   },
// // // // //   explanationDivider: {
// // // // //     border: 'none',
// // // // //     borderTop: '1px solid #d0d9f0',
// // // // //     margin: '16px 0',
// // // // //   },
// // // // //   stepsTitle: {
// // // // //     fontSize: '0.9rem',
// // // // //     fontWeight: '700',
// // // // //     color: '#4285f4',
// // // // //     margin: '0 0 10px 0',
// // // // //     textTransform: 'uppercase',
// // // // //     letterSpacing: '0.03em',
// // // // //   },
// // // // //   stepsList: {
// // // // //     listStyle: 'none',
// // // // //     padding: '0',
// // // // //     margin: '0',
// // // // //   },
// // // // //   stepItem: {
// // // // //     fontSize: '0.88rem',
// // // // //     lineHeight: '1.55',
// // // // //     color: '#1f2937',
// // // // //     fontFamily: 'monospace',
// // // // //     padding: '3px 0',
// // // // //     whiteSpace: 'pre-wrap',
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
// // // // //   vectorGrid: {
// // // // //     display: 'grid',
// // // // //     gap: '16px',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   vectorGridSingle: { gridTemplateColumns: '1fr' },
// // // // //   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
// // // // //   vectorGridMultiple: { gridTemplateColumns: '1fr' },
// // // // //   vectorCard: {
// // // // //     backgroundColor: '#f8f9fa',
// // // // //     padding: '16px',
// // // // //     borderRadius: '8px',
// // // // //     border: '1px solid #e5e7eb',
// // // // //   },
// // // // //   vectorHeader: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'space-between',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: '12px',
// // // // //   },
// // // // //   vectorName: {
// // // // //     margin: '0',
// // // // //     fontSize: '1.05rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#374151',
// // // // //   },
// // // // //   vectorHeaderButtons: {
// // // // //     display: 'flex',
// // // // //     gap: '6px',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   vectorComponents: {
// // // // //     display: 'flex',
// // // // //     gap: '8px',
// // // // //     alignItems: 'center',
// // // // //     flexWrap: 'wrap',
// // // // //   },
// // // // //   componentInput: {
// // // // //     width: '56px',
// // // // //     padding: '6px',
// // // // //     border: '1px solid #d1d5db',
// // // // //     borderRadius: '4px',
// // // // //     textAlign: 'center',
// // // // //     fontSize: '0.9rem',
// // // // //     outline: 'none',
// // // // //   },
// // // // //   componentInputError: {
// // // // //     borderColor: '#dc2626',
// // // // //     backgroundColor: '#fef2f2',
// // // // //   },
// // // // //   separator: { color: '#6b7280' },
// // // // //   bracket: { fontWeight: '500' },
// // // // //   addVectorContainer: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   addVectorButton: {
// // // // //     padding: '8px 16px',
// // // // //     border: '2px dashed #4285f4',
// // // // //     borderRadius: '8px',
// // // // //     backgroundColor: 'transparent',
// // // // //     color: '#4285f4',
// // // // //     fontSize: '0.9rem',
// // // // //     cursor: 'pointer',
// // // // //     transition: 'all 0.2s ease',
// // // // //   },
// // // // //   operationsSection: { marginBottom: '24px' },
// // // // //   operationsTitle: {
// // // // //     fontSize: '1.1rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1f2937',
// // // // //     marginBottom: '16px',
// // // // //   },
// // // // //   operationsGrid: {
// // // // //     display: 'grid',
// // // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
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
// // // // //   clearVectorButton: {
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
// // // // //   dimControls: {
// // // // //     display: 'flex',
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //     gap: '16px',
// // // // //     marginBottom: '24px',
// // // // //     padding: '14px',
// // // // //     backgroundColor: '#f3f4f6',
// // // // //     borderRadius: '8px',
// // // // //     border: '1px solid #d1d5db',
// // // // //   },
// // // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

// // // // //   /* — coefficient input (Linear Combination) — */
// // // // //   coefficientRow: {
// // // // //     display: 'flex',
// // // // //     alignItems: 'center',
// // // // //     gap: '8px',
// // // // //     marginBottom: '8px',
// // // // //   },
// // // // //   coefficientLabel: {
// // // // //     fontSize: '0.85rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#4285f4',
// // // // //     minWidth: '24px',
// // // // //   },
// // // // //   coefficientInput: {
// // // // //     width: '64px',
// // // // //     padding: '6px',
// // // // //     border: '2px solid #4285f4',
// // // // //     borderRadius: '4px',
// // // // //     textAlign: 'center',
// // // // //     fontSize: '0.9rem',
// // // // //     outline: 'none',
// // // // //     backgroundColor: '#f0f7ff',
// // // // //   },
// // // // //   coefficientHint: {
// // // // //     fontSize: '0.8rem',
// // // // //     color: '#6b7280',
// // // // //   },

// // // // //   /* — extra inputs section (coefficients / target) — */
// // // // //   extraInputsSection: {
// // // // //     backgroundColor: '#fffbeb',
// // // // //     border: '1px solid #fde68a',
// // // // //     borderRadius: '8px',
// // // // //     padding: '16px',
// // // // //     marginBottom: '24px',
// // // // //   },
// // // // //   extraInputsTitle: {
// // // // //     fontSize: '0.95rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#92400e',
// // // // //     margin: '0 0 12px 0',
// // // // //   },

// // // // //   /* — result formatting — */
// // // // //   resultLabel: {
// // // // //     fontSize: '0.85rem',
// // // // //     color: '#6b7280',
// // // // //     fontStyle: 'italic',
// // // // //   },
// // // // //   resultValue: {
// // // // //     fontSize: '1.1rem',
// // // // //     fontWeight: '600',
// // // // //     color: '#1f2937',
// // // // //     fontFamily: 'monospace',
// // // // //   },
// // // // //   resultTrue: {
// // // // //     color: '#059669',
// // // // //     fontWeight: '600',
// // // // //     fontSize: '1rem',
// // // // //   },
// // // // //   resultFalse: {
// // // // //     color: '#dc2626',
// // // // //     fontWeight: '600',
// // // // //     fontSize: '1rem',
// // // // //   },
// // // // //   resultDetail: {
// // // // //     fontSize: '0.9rem',
// // // // //     color: '#374151',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   resultError: {
// // // // //     color: '#dc2626',
// // // // //     fontWeight: '500',
// // // // //     fontSize: '0.95rem',
// // // // //   },
// // // // //   matrixTable: {
// // // // //     borderCollapse: 'collapse',
// // // // //     fontFamily: 'monospace',
// // // // //     fontSize: '0.95rem',
// // // // //   },
// // // // //   matrixCell: {
// // // // //     padding: '6px 12px',
// // // // //     textAlign: 'right',
// // // // //     border: '1px solid #e5e7eb',
// // // // //   },
// // // // //   matrixRowLabel: {
// // // // //     padding: '6px 10px',
// // // // //     textAlign: 'left',
// // // // //     fontWeight: '600',
// // // // //     color: '#4285f4',
// // // // //     border: '1px solid #e5e7eb',
// // // // //     backgroundColor: '#f0f7ff',
// // // // //   },
// // // // // };

// // // // // const spinKeyframes = `
// // // // // @keyframes spin {
// // // // //   0% { transform: rotate(0deg); }
// // // // //   100% { transform: rotate(360deg); }
// // // // // }`;

// // // // // /* ── component ────────────────────────────────────────────────── */

// // // // // export default function VectorCalculator({ descriptions: descriptionsProp } = {}) {
// // // // //   const [step, setStep] = useState('operation-type');
// // // // //   const [operationType, setOperationType] = useState('');
// // // // //   const [dimensionality, setDimensionality] = useState(3);
// // // // //   const [vectors, setVectors] = useState([]);
// // // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // // //   const [result, setResult] = useState(null);
// // // // //   const [errors, setErrors] = useState([]);
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [coefficients, setCoefficients] = useState([]);
// // // // //   const [targetVector, setTargetVector] = useState([]);
// // // // //   const [computedSteps, setComputedSteps] = useState(null);

// // // // //   /* ── merge descriptions: props override defaults ── */
// // // // //   const mergedDescriptions = descriptionsProp
// // // // //     ? Object.keys(defaultDescriptions).reduce((acc, cat) => {
// // // // //         acc[cat] = {
// // // // //           ...defaultDescriptions[cat],
// // // // //           ...(descriptionsProp[cat] || {}),
// // // // //         };
// // // // //         return acc;
// // // // //       }, {})
// // // // //     : defaultDescriptions;

// // // // //   const operationTypes = [
// // // // //     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
// // // // //     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot & cross product' },
// // // // //     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
// // // // //   ];

// // // // //   const operationsByType = {
// // // // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // // // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // // // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
// // // // //   };

// // // // //   /* ── helpers ── */

// // // // //   const validateInputs = () => {
// // // // //     const newErrors = [];
// // // // //     if (!selectedOperation) newErrors.push('Please select an operation');
// // // // //     vectors.forEach((vector, index) => {
// // // // //       const name = String.fromCharCode(65 + index);
// // // // //       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
// // // // //       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // // //       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
// // // // //       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
// // // // //     });
// // // // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
// // // // //       newErrors.push('Cross product is only defined for 3D vectors');
// // // // //     if (operationType === 'multiple' && vectors.length < 2)
// // // // //       newErrors.push('Multiple vector operations require at least 2 vectors');

// // // // //     if (selectedOperation === 'Linear Combination') {
// // // // //       const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
// // // // //       if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
// // // // //     }

// // // // //     if (selectedOperation === 'Span Check') {
// // // // //       const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
// // // // //       const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
// // // // //       if (emptyTarget) newErrors.push('Target vector has empty components');
// // // // //       if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
// // // // //     }

// // // // //     setErrors(newErrors);
// // // // //     return newErrors.length === 0;
// // // // //   };

// // // // //   const handleReset = () => {
// // // // //     setStep('operation-type');
// // // // //     setOperationType('');
// // // // //     setDimensionality(3);
// // // // //     setVectors([]);
// // // // //     setSelectedOperation('');
// // // // //     setResult(null);
// // // // //     setErrors([]);
// // // // //     setIsLoading(false);
// // // // //     setCoefficients([]);
// // // // //     setTargetVector([]);
// // // // //     setComputedSteps(null);
// // // // //   };

// // // // //   const clearVector = (vi) => {
// // // // //     const updated = [...vectors];
// // // // //     const dim = updated[vi].components.length;
// // // // //     updated[vi] = { ...updated[vi], components: new Array(dim).fill('') };
// // // // //     setVectors(updated);
// // // // //   };

// // // // //   const handleOperationTypeSelect = (type) => {
// // // // //     setOperationType(type);
// // // // //     setSelectedOperation('');
// // // // //     setErrors([]);
// // // // //     setResult(null);
// // // // //     setComputedSteps(null);
// // // // //     let count = 1;
// // // // //     if (type === 'two') count = 2;
// // // // //     if (type === 'multiple') count = 2;
// // // // //     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // //     const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
// // // // //     setVectors(newVectors);
// // // // //     setCoefficients(new Array(count).fill(''));
// // // // //     setTargetVector(new Array(dim).fill(''));
// // // // //     setStep('input');
// // // // //   };

// // // // //   const updateVectorComponent = (vi, ci, value) => {
// // // // //     const updated = [...vectors];
// // // // //     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
// // // // //     updated[vi].components[ci] = value;
// // // // //     setVectors(updated);
// // // // //     if (errors.length > 0) setErrors([]);
// // // // //   };

// // // // //   const updateCoefficient = (index, value) => {
// // // // //     const updated = [...coefficients];
// // // // //     updated[index] = value;
// // // // //     setCoefficients(updated);
// // // // //     if (errors.length > 0) setErrors([]);
// // // // //   };

// // // // //   const updateTargetComponent = (ci, value) => {
// // // // //     const updated = [...targetVector];
// // // // //     updated[ci] = value;
// // // // //     setTargetVector(updated);
// // // // //     if (errors.length > 0) setErrors([]);
// // // // //   };

// // // // //   const addVector = () => {
// // // // //     if (operationType === 'multiple' && vectors.length < 10) {
// // // // //       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // // //       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
// // // // //       setCoefficients([...coefficients, '']);
// // // // //     }
// // // // //   };

// // // // //   const removeVector = (i) => {
// // // // //     if (operationType === 'multiple' && vectors.length > 2) {
// // // // //       setVectors(vectors.filter((_, idx) => idx !== i));
// // // // //       setCoefficients(coefficients.filter((_, idx) => idx !== i));
// // // // //     }
// // // // //   };

// // // // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // // // //   const handleOperationSelect = (op) => {
// // // // //     setSelectedOperation(op);
// // // // //     setErrors([]);
// // // // //     setResult(null);
// // // // //     setComputedSteps(null);
// // // // //   };

// // // // //   const executeOperation = () => {
// // // // //     if (!validateInputs()) return;
// // // // //     setIsLoading(true);
// // // // //     setResult(null);
// // // // //     setComputedSteps(null);

// // // // //     setTimeout(() => {
// // // // //       const numericVectors = vectors.map(v =>
// // // // //         v.components.map(c => parseFloat(c))
// // // // //       );

// // // // //       const params = {
// // // // //         operation: selectedOperation,
// // // // //         operationType,
// // // // //         dimensionality,
// // // // //         vectors: numericVectors,
// // // // //       };

// // // // //       if (selectedOperation === 'Linear Combination') {
// // // // //         params.coefficients = coefficients.map(c => parseFloat(c));
// // // // //       }
// // // // //       if (selectedOperation === 'Span Check') {
// // // // //         params.targetVector = targetVector.map(c => parseFloat(c));
// // // // //       }

// // // // //       const res = computeVector(params);
// // // // //       setResult(res);

// // // // //       if (res.type === 'error') {
// // // // //         setErrors([res.value]);
// // // // //       }

// // // // //       // Generate dynamic steps
// // // // //       const stepFn = operationSteps[operationType]?.[selectedOperation];
// // // // //       if (stepFn) {
// // // // //         const extras = {
// // // // //           coefficients: params.coefficients,
// // // // //           targetVector: params.targetVector,
// // // // //         };
// // // // //         const stepLines = stepFn(numericVectors, res, extras);
// // // // //         setComputedSteps(stepLines);
// // // // //       }

// // // // //       setIsLoading(false);
// // // // //     }, 150);
// // // // //   };

// // // // //   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

// // // // //   const getVectorGridExtra = () => {
// // // // //     if (operationType === 'single') return s.vectorGridSingle;
// // // // //     if (operationType === 'two') return s.vectorGridTwo;
// // // // //     return s.vectorGridMultiple;
// // // // //   };

// // // // //   /* ── explanation: description (from merged, overridable) ── */
// // // // //   const getDescription = () => {
// // // // //     const pool = mergedDescriptions[operationType];
// // // // //     if (!pool) return '';
// // // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // // //     return pool._default;
// // // // //   };

// // // // //   const getExplanationHeading = () => {
// // // // //     if (selectedOperation) return selectedOperation;
// // // // //     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
// // // // //     return labels[operationType] || 'Explanation';
// // // // //   };

// // // // //   /* ── left-panel button style ── */
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

// // // // //   const dimInputStyle = {
// // // // //     width: '64px',
// // // // //     padding: '8px 10px',
// // // // //     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // // //     borderRadius: '8px',
// // // // //     fontSize: '1rem',
// // // // //     textAlign: 'center',
// // // // //     outline: 'none',
// // // // //   };

// // // // //   /* ── render a single vector card ── */
// // // // //   const renderVector = (vector, vi) => (
// // // // //     <div key={vector.id} style={s.vectorCard}>
// // // // //       <div style={s.vectorHeader}>
// // // // //         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
// // // // //         <div style={s.vectorHeaderButtons}>
// // // // //           <button
// // // // //             onClick={() => clearVector(vi)}
// // // // //             style={s.clearVectorButton}
// // // // //             title="Clear this vector"
// // // // //           >
// // // // //             Clear
// // // // //           </button>
// // // // //           {operationType === 'multiple' && vectors.length > 2 && (
// // // // //             <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //       <div style={s.vectorComponents}>
// // // // //         <span style={s.bracket}>(</span>
// // // // //         {vector.components.map((comp, ci) => (
// // // // //           <React.Fragment key={ci}>
// // // // //             <input
// // // // //               type="number"
// // // // //               step="any"
// // // // //               value={comp}
// // // // //               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
// // // // //               placeholder={`x${ci + 1}`}
// // // // //               style={{
// // // // //                 ...s.componentInput,
// // // // //                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
// // // // //               }}
// // // // //             />
// // // // //             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
// // // // //           </React.Fragment>
// // // // //         ))}
// // // // //         <span style={s.bracket}>)</span>
// // // // //       </div>
// // // // //     </div>
// // // // //   );

// // // // //   /* ── render result based on type ── */
// // // // //   const renderResult = () => {
// // // // //     if (!result) return 'Select vectors and operation, then click Execute';

// // // // //     if (result.type === 'error') {
// // // // //       return <span style={s.resultError}>{result.value}</span>;
// // // // //     }

// // // // //     if (result.type === 'scalar') {
// // // // //       return (
// // // // //         <>
// // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // //           <span style={s.resultValue}>{result.value}</span>
// // // // //         </>
// // // // //       );
// // // // //     }

// // // // //     if (result.type === 'vector') {
// // // // //       return (
// // // // //         <>
// // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // //           <span style={s.resultValue}>({result.value.join(', ')})</span>
// // // // //         </>
// // // // //       );
// // // // //     }

// // // // //     if (result.type === 'boolean') {
// // // // //       return (
// // // // //         <>
// // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// // // // //             {result.value ? '✓ TRUE' : '✗ FALSE'}
// // // // //           </span>
// // // // //           <span style={s.resultDetail}>{result.detail}</span>
// // // // //         </>
// // // // //       );
// // // // //     }

// // // // //     if (result.type === 'matrix') {
// // // // //       return (
// // // // //         <>
// // // // //           <span style={s.resultLabel}>{result.label}</span>
// // // // //           <table style={s.matrixTable}>
// // // // //             <tbody>
// // // // //               {result.value.map((row, ri) => (
// // // // //                 <tr key={ri}>
// // // // //                   {result.rowLabels && (
// // // // //                     <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
// // // // //                   )}
// // // // //                   {row.map((val, ci) => (
// // // // //                     <td key={ci} style={s.matrixCell}>{val}</td>
// // // // //                   ))}
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </>
// // // // //       );
// // // // //     }

// // // // //     return JSON.stringify(result.value);
// // // // //   };

// // // // //   /* ── JSX ─────────────────────────────────────────────────────── */

// // // // //   return (
// // // // //     <div style={s.container}>
// // // // //       <style>{spinKeyframes}</style>
// // // // //       <div style={step === 'input' ? s.mainWide : s.mainNarrow}>

// // // // //         {/* Header */}
// // // // //         <div style={s.header}>
// // // // //           <h1 style={s.title}>Vector Calculator</h1>
// // // // //           <p style={s.subtitle}>Professional vector operations calculator</p>
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
// // // // //                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
// // // // //                 <div style={s.buttonGroup}>
// // // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Dimensionality */}
// // // // //               <div style={s.dimControls}>
// // // // //                 <label style={s.dimLabel}>Dimensions:</label>
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   min="2"
// // // // //                   max="10"
// // // // //                   value={dimensionality}
// // // // //                   onChange={(e) => {
// // // // //                     const raw = e.target.value;
// // // // //                     if (raw === '') { setDimensionality(''); return; }
// // // // //                     const val = parseInt(raw);
// // // // //                     setDimensionality(val);
// // // // //                     if (val >= 2 && val <= 10) {
// // // // //                       setVectors(vectors.map(v => {
// // // // //                         const nc = new Array(val).fill('');
// // // // //                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
// // // // //                         return { ...v, components: nc };
// // // // //                       }));
// // // // //                       const nt = new Array(val).fill('');
// // // // //                       for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
// // // // //                       setTargetVector(nt);
// // // // //                       setErrors([]);
// // // // //                     } else {
// // // // //                       setErrors(['Dimensionality must be between 2 and 10']);
// // // // //                     }
// // // // //                   }}
// // // // //                   style={dimInputStyle}
// // // // //                 />
// // // // //                 <span style={s.dimHint}>(2–10)</span>
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

// // // // //               {/* Vectors */}
// // // // //               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
// // // // //                 {vectors.map((v, i) => renderVector(v, i))}
// // // // //               </div>

// // // // //               {/* Add vector */}
// // // // //               {operationType === 'multiple' && vectors.length < 10 && (
// // // // //                 <div style={s.addVectorContainer}>
// // // // //                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
// // // // //               {selectedOperation === 'Linear Combination' && (
// // // // //                 <div style={s.extraInputsSection}>
// // // // //                   <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
// // // // //                   {vectors.map((v, i) => (
// // // // //                     <div key={i} style={s.coefficientRow}>
// // // // //                       <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
// // // // //                       <input
// // // // //                         type="number"
// // // // //                         step="any"
// // // // //                         value={coefficients[i] || ''}
// // // // //                         onChange={(e) => updateCoefficient(i, e.target.value)}
// // // // //                         placeholder="0"
// // // // //                         style={s.coefficientInput}
// // // // //                       />
// // // // //                       <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* ── Extra inputs: Target Vector (Span Check) ── */}
// // // // //               {selectedOperation === 'Span Check' && (
// // // // //                 <div style={s.extraInputsSection}>
// // // // //                   <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
// // // // //                   <div style={s.vectorComponents}>
// // // // //                     <span style={s.bracket}>(</span>
// // // // //                     {targetVector.map((comp, ci) => (
// // // // //                       <React.Fragment key={ci}>
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           step="any"
// // // // //                           value={comp}
// // // // //                           onChange={(e) => updateTargetComponent(ci, e.target.value)}
// // // // //                           placeholder={`t${ci + 1}`}
// // // // //                           style={{
// // // // //                             ...s.componentInput,
// // // // //                             borderColor: '#f59e0b',
// // // // //                           }}
// // // // //                         />
// // // // //                         {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
// // // // //                       </React.Fragment>
// // // // //                     ))}
// // // // //                     <span style={s.bracket}>)</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}

// // // // //               {/* Operations */}
// // // // //               <div style={s.operationsSection}>
// // // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // // //                 <div style={s.operationsGrid}>
// // // // //                   {getAvailableOperations().map((op) => {
// // // // //                     const sel = selectedOperation === op;
// // // // //                     const dis = op === 'Cross Product' && dimensionality !== 3;
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
// // // // //                   {renderResult()}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* ▸ RIGHT — explanation panel */}
// // // // //             <div style={s.explanationPanel}>
// // // // //               {/* Theory (from merged descriptions — overridable via props) */}
// // // // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // // // //               <p style={s.explanationBody}>{processContent(getDescription())}</p>

// // // // //               {/* Steps (dynamic — always from vectorExplanations.js, never overridable) */}
// // // // //               {computedSteps && computedSteps.length > 0 && (
// // // // //                 <>
// // // // //                   <hr style={s.explanationDivider} />
// // // // //                   <div style={s.stepsTitle}>Calculation Steps</div>
// // // // //                   <ul style={s.stepsList}>
// // // // //                     {computedSteps.map((line, i) => (
// // // // //                       <li key={i} style={s.stepItem}>{line}</li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useState } from 'react';
// // // // import computeVector from './computeVector';
// // // // import {
// // // //   descriptions as defaultDescriptions,
// // // //   steps as operationSteps,
// // // // } from './vectorExplanations';

// // // // /* ── styles ───────────────────────────────────────────────────── */

// // // // const s = {
// // // //   /* — wrappers — */
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

// // // //   /* — initial card grid — */
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

// // // //   /* — left panel — */
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

// // // //   /* — right (explanation) panel — */
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
// // // //     margin: '0 0 0 0',
// // // //   },
// // // //   explanationDivider: {
// // // //     border: 'none',
// // // //     borderTop: '1px solid #d0d9f0',
// // // //     margin: '16px 0',
// // // //   },
// // // //   stepsTitle: {
// // // //     fontSize: '0.9rem',
// // // //     fontWeight: '700',
// // // //     color: '#4285f4',
// // // //     margin: '0 0 10px 0',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '0.03em',
// // // //   },
// // // //   stepsList: {
// // // //     listStyle: 'none',
// // // //     padding: '0',
// // // //     margin: '0',
// // // //   },
// // // //   stepItem: {
// // // //     fontSize: '0.88rem',
// // // //     lineHeight: '1.55',
// // // //     color: '#1f2937',
// // // //     fontFamily: 'monospace',
// // // //     padding: '3px 0',
// // // //     whiteSpace: 'pre-wrap',
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
// // // //   vectorGrid: {
// // // //     display: 'grid',
// // // //     gap: '16px',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   vectorGridSingle: { gridTemplateColumns: '1fr' },
// // // //   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
// // // //   vectorGridMultiple: { gridTemplateColumns: '1fr' },
// // // //   vectorCard: {
// // // //     backgroundColor: '#f8f9fa',
// // // //     padding: '16px',
// // // //     borderRadius: '8px',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   vectorHeader: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: '12px',
// // // //   },
// // // //   vectorName: {
// // // //     margin: '0',
// // // //     fontSize: '1.05rem',
// // // //     fontWeight: '600',
// // // //     color: '#374151',
// // // //   },
// // // //   vectorHeaderButtons: {
// // // //     display: 'flex',
// // // //     gap: '6px',
// // // //     alignItems: 'center',
// // // //   },
// // // //   vectorComponents: {
// // // //     display: 'flex',
// // // //     gap: '8px',
// // // //     alignItems: 'center',
// // // //     flexWrap: 'wrap',
// // // //   },
// // // //   componentInput: {
// // // //     width: '56px',
// // // //     padding: '6px',
// // // //     border: '1px solid #d1d5db',
// // // //     borderRadius: '4px',
// // // //     textAlign: 'center',
// // // //     fontSize: '0.9rem',
// // // //     outline: 'none',
// // // //   },
// // // //   componentInputError: {
// // // //     borderColor: '#dc2626',
// // // //     backgroundColor: '#fef2f2',
// // // //   },
// // // //   separator: { color: '#6b7280' },
// // // //   bracket: { fontWeight: '500' },
// // // //   addVectorContainer: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   addVectorButton: {
// // // //     padding: '8px 16px',
// // // //     border: '2px dashed #4285f4',
// // // //     borderRadius: '8px',
// // // //     backgroundColor: 'transparent',
// // // //     color: '#4285f4',
// // // //     fontSize: '0.9rem',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.2s ease',
// // // //   },
// // // //   operationsSection: { marginBottom: '24px' },
// // // //   operationsTitle: {
// // // //     fontSize: '1.1rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //     marginBottom: '16px',
// // // //   },
// // // //   operationsGrid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
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
// // // //   clearVectorButton: {
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
// // // //   dimControls: {
// // // //     display: 'flex',
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     gap: '16px',
// // // //     marginBottom: '24px',
// // // //     padding: '14px',
// // // //     backgroundColor: '#f3f4f6',
// // // //     borderRadius: '8px',
// // // //     border: '1px solid #d1d5db',
// // // //   },
// // // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

// // // //   /* — coefficient input (Linear Combination) — */
// // // //   coefficientRow: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '8px',
// // // //     marginBottom: '8px',
// // // //   },
// // // //   coefficientLabel: {
// // // //     fontSize: '0.85rem',
// // // //     fontWeight: '600',
// // // //     color: '#4285f4',
// // // //     minWidth: '24px',
// // // //   },
// // // //   coefficientInput: {
// // // //     width: '64px',
// // // //     padding: '6px',
// // // //     border: '2px solid #4285f4',
// // // //     borderRadius: '4px',
// // // //     textAlign: 'center',
// // // //     fontSize: '0.9rem',
// // // //     outline: 'none',
// // // //     backgroundColor: '#f0f7ff',
// // // //   },
// // // //   coefficientHint: {
// // // //     fontSize: '0.8rem',
// // // //     color: '#6b7280',
// // // //   },

// // // //   /* — extra inputs section (coefficients / target) — */
// // // //   extraInputsSection: {
// // // //     backgroundColor: '#fffbeb',
// // // //     border: '1px solid #fde68a',
// // // //     borderRadius: '8px',
// // // //     padding: '16px',
// // // //     marginBottom: '24px',
// // // //   },
// // // //   extraInputsTitle: {
// // // //     fontSize: '0.95rem',
// // // //     fontWeight: '600',
// // // //     color: '#92400e',
// // // //     margin: '0 0 12px 0',
// // // //   },

// // // //   /* — result formatting — */
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
// // // //   },
// // // //   resultError: {
// // // //     color: '#dc2626',
// // // //     fontWeight: '500',
// // // //     fontSize: '0.95rem',
// // // //   },
// // // //   matrixTable: {
// // // //     borderCollapse: 'collapse',
// // // //     fontFamily: 'monospace',
// // // //     fontSize: '0.95rem',
// // // //   },
// // // //   matrixCell: {
// // // //     padding: '6px 12px',
// // // //     textAlign: 'right',
// // // //     border: '1px solid #e5e7eb',
// // // //   },
// // // //   matrixRowLabel: {
// // // //     padding: '6px 10px',
// // // //     textAlign: 'left',
// // // //     fontWeight: '600',
// // // //     color: '#4285f4',
// // // //     border: '1px solid #e5e7eb',
// // // //     backgroundColor: '#f0f7ff',
// // // //   },

// // // //   /* — history accordion — */
// // // //   historySection: {
// // // //     marginTop: '16px',
// // // //   },
// // // //   historyToggle: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     width: '100%',
// // // //     padding: '10px 0',
// // // //     border: 'none',
// // // //     borderTop: '1px solid #d0d9f0',
// // // //     backgroundColor: 'transparent',
// // // //     cursor: 'pointer',
// // // //     fontSize: '0.85rem',
// // // //     fontWeight: '700',
// // // //     color: '#6b7280',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '0.03em',
// // // //   },
// // // //   historyArrow: {
// // // //     fontSize: '0.75rem',
// // // //     transition: 'transform 0.2s ease',
// // // //   },
// // // //   historyList: {
// // // //     listStyle: 'none',
// // // //     padding: '0',
// // // //     margin: '8px 0 0 0',
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     gap: '10px',
// // // //   },
// // // //   historyEntry: {
// // // //     backgroundColor: 'white',
// // // //     borderRadius: '8px',
// // // //     padding: '10px 12px',
// // // //     border: '1px solid #d0d9f0',
// // // //   },
// // // //   historyEntryHeader: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     marginBottom: '6px',
// // // //   },
// // // //   historyOpName: {
// // // //     fontSize: '0.85rem',
// // // //     fontWeight: '700',
// // // //     color: '#4285f4',
// // // //   },
// // // //   historyTime: {
// // // //     fontSize: '0.75rem',
// // // //     color: '#9ca3af',
// // // //   },
// // // //   historyVectors: {
// // // //     fontSize: '0.78rem',
// // // //     color: '#6b7280',
// // // //     fontFamily: 'monospace',
// // // //     marginBottom: '4px',
// // // //     lineHeight: '1.4',
// // // //     wordBreak: 'break-word',
// // // //   },
// // // //   historyResult: {
// // // //     fontSize: '0.85rem',
// // // //     fontWeight: '600',
// // // //     color: '#1f2937',
// // // //     fontFamily: 'monospace',
// // // //   },
// // // //   historyClearBtn: {
// // // //     padding: '4px 10px',
// // // //     border: '1px solid #d0d9f0',
// // // //     borderRadius: '4px',
// // // //     backgroundColor: 'transparent',
// // // //     color: '#9ca3af',
// // // //     fontSize: '0.7rem',
// // // //     cursor: 'pointer',
// // // //     marginTop: '8px',
// // // //   },
// // // // };

// // // // const spinKeyframes = `
// // // // @keyframes spin {
// // // //   0% { transform: rotate(0deg); }
// // // //   100% { transform: rotate(360deg); }
// // // // }`;

// // // // /* ── helpers for history ─────────────────────────────────────── */

// // // // function fmtVecCompact(v) {
// // // //   return '(' + v.map(c => {
// // // //     if (Number.isInteger(c)) return String(c);
// // // //     return parseFloat(c.toFixed(4)).toString();
// // // //   }).join(', ') + ')';
// // // // }

// // // // function formatHistoryResult(res) {
// // // //   if (res.type === 'scalar') return String(res.value);
// // // //   if (res.type === 'vector') return fmtVecCompact(res.value);
// // // //   if (res.type === 'boolean') return res.value ? '\u2713 TRUE' : '\u2717 FALSE';
// // // //   if (res.type === 'matrix') return `${res.value.length}\u00D7${res.value[0].length} matrix`;
// // // //   return String(res.value);
// // // // }

// // // // function formatHistoryInputs(entry) {
// // // //   const parts = entry.vectors.map((v, i) =>
// // // //     `${String.fromCharCode(65 + i)}=${fmtVecCompact(v)}`
// // // //   );
// // // //   if (entry.coefficients) {
// // // //     parts.push('c=[' + entry.coefficients.map(c => {
// // // //       if (Number.isInteger(c)) return String(c);
// // // //       return parseFloat(c.toFixed(4)).toString();
// // // //     }).join(', ') + ']');
// // // //   }
// // // //   if (entry.targetVector) {
// // // //     parts.push('t=' + fmtVecCompact(entry.targetVector));
// // // //   }
// // // //   return parts.join('  ');
// // // // }

// // // // /* ── component ────────────────────────────────────────────────── */

// // // // export default function VectorCalculator({ descriptions: descriptionsProp } = {}) {
// // // //   const [step, setStep] = useState('operation-type');
// // // //   const [operationType, setOperationType] = useState('');
// // // //   const [dimensionality, setDimensionality] = useState(3);
// // // //   const [vectors, setVectors] = useState([]);
// // // //   const [selectedOperation, setSelectedOperation] = useState('');
// // // //   const [result, setResult] = useState(null);
// // // //   const [errors, setErrors] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [coefficients, setCoefficients] = useState([]);
// // // //   const [targetVector, setTargetVector] = useState([]);
// // // //   const [computedSteps, setComputedSteps] = useState(null);
// // // //   const [history, setHistory] = useState([]);
// // // //   const [historyOpen, setHistoryOpen] = useState(false);

// // // //   /* ── merge descriptions: props override defaults ── */
// // // //   const mergedDescriptions = descriptionsProp
// // // //     ? Object.keys(defaultDescriptions).reduce((acc, cat) => {
// // // //         acc[cat] = {
// // // //           ...defaultDescriptions[cat],
// // // //           ...(descriptionsProp[cat] || {}),
// // // //         };
// // // //         return acc;
// // // //       }, {})
// // // //     : defaultDescriptions;

// // // //   const operationTypes = [
// // // //     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
// // // //     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot & cross product' },
// // // //     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
// // // //   ];

// // // //   const operationsByType = {
// // // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
// // // //   };

// // // //   /* ── helpers ── */

// // // //   const validateInputs = () => {
// // // //     const newErrors = [];
// // // //     if (!selectedOperation) newErrors.push('Please select an operation');
// // // //     vectors.forEach((vector, index) => {
// // // //       const name = String.fromCharCode(65 + index);
// // // //       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
// // // //       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // // //       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
// // // //       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
// // // //     });
// // // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
// // // //       newErrors.push('Cross product is only defined for 3D vectors');
// // // //     if (operationType === 'multiple' && vectors.length < 2)
// // // //       newErrors.push('Multiple vector operations require at least 2 vectors');

// // // //     if (selectedOperation === 'Linear Combination') {
// // // //       const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
// // // //       if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
// // // //     }

// // // //     if (selectedOperation === 'Span Check') {
// // // //       const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
// // // //       const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
// // // //       if (emptyTarget) newErrors.push('Target vector has empty components');
// // // //       if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
// // // //     }

// // // //     setErrors(newErrors);
// // // //     return newErrors.length === 0;
// // // //   };

// // // //   const handleReset = () => {
// // // //     setStep('operation-type');
// // // //     setOperationType('');
// // // //     setDimensionality(3);
// // // //     setVectors([]);
// // // //     setSelectedOperation('');
// // // //     setResult(null);
// // // //     setErrors([]);
// // // //     setIsLoading(false);
// // // //     setCoefficients([]);
// // // //     setTargetVector([]);
// // // //     setComputedSteps(null);
// // // //     // history intentionally NOT cleared — persists through reset
// // // //   };

// // // //   const clearVector = (vi) => {
// // // //     const updated = [...vectors];
// // // //     const dim = updated[vi].components.length;
// // // //     updated[vi] = { ...updated[vi], components: new Array(dim).fill('') };
// // // //     setVectors(updated);
// // // //   };

// // // //   const handleOperationTypeSelect = (type) => {
// // // //     setOperationType(type);
// // // //     setSelectedOperation('');
// // // //     setErrors([]);
// // // //     setResult(null);
// // // //     setComputedSteps(null);
// // // //     let count = 1;
// // // //     if (type === 'two') count = 2;
// // // //     if (type === 'multiple') count = 2;
// // // //     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // //     const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
// // // //     setVectors(newVectors);
// // // //     setCoefficients(new Array(count).fill(''));
// // // //     setTargetVector(new Array(dim).fill(''));
// // // //     setStep('input');
// // // //   };

// // // //   const updateVectorComponent = (vi, ci, value) => {
// // // //     const updated = [...vectors];
// // // //     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
// // // //     updated[vi].components[ci] = value;
// // // //     setVectors(updated);
// // // //     if (errors.length > 0) setErrors([]);
// // // //   };

// // // //   const updateCoefficient = (index, value) => {
// // // //     const updated = [...coefficients];
// // // //     updated[index] = value;
// // // //     setCoefficients(updated);
// // // //     if (errors.length > 0) setErrors([]);
// // // //   };

// // // //   const updateTargetComponent = (ci, value) => {
// // // //     const updated = [...targetVector];
// // // //     updated[ci] = value;
// // // //     setTargetVector(updated);
// // // //     if (errors.length > 0) setErrors([]);
// // // //   };

// // // //   const addVector = () => {
// // // //     if (operationType === 'multiple' && vectors.length < 10) {
// // // //       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // // //       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
// // // //       setCoefficients([...coefficients, '']);
// // // //     }
// // // //   };

// // // //   const removeVector = (i) => {
// // // //     if (operationType === 'multiple' && vectors.length > 2) {
// // // //       setVectors(vectors.filter((_, idx) => idx !== i));
// // // //       setCoefficients(coefficients.filter((_, idx) => idx !== i));
// // // //     }
// // // //   };

// // // //   const getAvailableOperations = () => operationsByType[operationType] || [];

// // // //   const handleOperationSelect = (op) => {
// // // //     setSelectedOperation(op);
// // // //     setErrors([]);
// // // //     setResult(null);
// // // //     setComputedSteps(null);
// // // //   };

// // // //   const executeOperation = () => {
// // // //     if (!validateInputs()) return;
// // // //     setIsLoading(true);
// // // //     setResult(null);
// // // //     setComputedSteps(null);

// // // //     setTimeout(() => {
// // // //       const numericVectors = vectors.map(v =>
// // // //         v.components.map(c => parseFloat(c))
// // // //       );

// // // //       const params = {
// // // //         operation: selectedOperation,
// // // //         operationType,
// // // //         dimensionality,
// // // //         vectors: numericVectors,
// // // //       };

// // // //       if (selectedOperation === 'Linear Combination') {
// // // //         params.coefficients = coefficients.map(c => parseFloat(c));
// // // //       }
// // // //       if (selectedOperation === 'Span Check') {
// // // //         params.targetVector = targetVector.map(c => parseFloat(c));
// // // //       }

// // // //       const res = computeVector(params);
// // // //       setResult(res);

// // // //       if (res.type === 'error') {
// // // //         setErrors([res.value]);
// // // //       } else {
// // // //         // Push to history on success
// // // //         const entry = {
// // // //           id: Date.now(),
// // // //           operation: selectedOperation,
// // // //           vectors: numericVectors,
// // // //           result: res,
// // // //           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
// // // //         };
// // // //         if (params.coefficients) entry.coefficients = params.coefficients;
// // // //         if (params.targetVector) entry.targetVector = params.targetVector;
// // // //         setHistory(prev => [entry, ...prev]);
// // // //       }

// // // //       // Generate dynamic steps
// // // //       const stepFn = operationSteps[operationType]?.[selectedOperation];
// // // //       if (stepFn) {
// // // //         const extras = {
// // // //           coefficients: params.coefficients,
// // // //           targetVector: params.targetVector,
// // // //         };
// // // //         const stepLines = stepFn(numericVectors, res, extras);
// // // //         setComputedSteps(stepLines);
// // // //       }

// // // //       setIsLoading(false);
// // // //     }, 150);
// // // //   };

// // // //   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

// // // //   const getVectorGridExtra = () => {
// // // //     if (operationType === 'single') return s.vectorGridSingle;
// // // //     if (operationType === 'two') return s.vectorGridTwo;
// // // //     return s.vectorGridMultiple;
// // // //   };

// // // //   /* ── explanation: description (from merged, overridable) ── */
// // // //   const getDescription = () => {
// // // //     const pool = mergedDescriptions[operationType];
// // // //     if (!pool) return '';
// // // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // // //     return pool._default;
// // // //   };

// // // //   const getExplanationHeading = () => {
// // // //     if (selectedOperation) return selectedOperation;
// // // //     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
// // // //     return labels[operationType] || 'Explanation';
// // // //   };

// // // //   /* ── left-panel button style ── */
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

// // // //   const dimInputStyle = {
// // // //     width: '64px',
// // // //     padding: '8px 10px',
// // // //     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // // //     borderRadius: '8px',
// // // //     fontSize: '1rem',
// // // //     textAlign: 'center',
// // // //     outline: 'none',
// // // //   };

// // // //   /* ── render a single vector card ── */
// // // //   const renderVector = (vector, vi) => (
// // // //     <div key={vector.id} style={s.vectorCard}>
// // // //       <div style={s.vectorHeader}>
// // // //         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
// // // //         <div style={s.vectorHeaderButtons}>
// // // //           <button
// // // //             onClick={() => clearVector(vi)}
// // // //             style={s.clearVectorButton}
// // // //             title="Clear this vector"
// // // //           >
// // // //             Clear
// // // //           </button>
// // // //           {operationType === 'multiple' && vectors.length > 2 && (
// // // //             <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //       <div style={s.vectorComponents}>
// // // //         <span style={s.bracket}>(</span>
// // // //         {vector.components.map((comp, ci) => (
// // // //           <React.Fragment key={ci}>
// // // //             <input
// // // //               type="number"
// // // //               step="any"
// // // //               value={comp}
// // // //               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
// // // //               placeholder={`x${ci + 1}`}
// // // //               style={{
// // // //                 ...s.componentInput,
// // // //                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
// // // //               }}
// // // //             />
// // // //             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
// // // //           </React.Fragment>
// // // //         ))}
// // // //         <span style={s.bracket}>)</span>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   /* ── render result based on type ── */
// // // //   const renderResult = () => {
// // // //     if (!result) return 'Select vectors and operation, then click Execute';

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
// // // //           <span style={s.resultValue}>({result.value.join(', ')})</span>
// // // //         </>
// // // //       );
// // // //     }

// // // //     if (result.type === 'boolean') {
// // // //       return (
// // // //         <>
// // // //           <span style={s.resultLabel}>{result.label}</span>
// // // //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// // // //             {result.value ? '✓ TRUE' : '✗ FALSE'}
// // // //           </span>
// // // //           <span style={s.resultDetail}>{result.detail}</span>
// // // //         </>
// // // //       );
// // // //     }

// // // //     if (result.type === 'matrix') {
// // // //       return (
// // // //         <>
// // // //           <span style={s.resultLabel}>{result.label}</span>
// // // //           <table style={s.matrixTable}>
// // // //             <tbody>
// // // //               {result.value.map((row, ri) => (
// // // //                 <tr key={ri}>
// // // //                   {result.rowLabels && (
// // // //                     <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
// // // //                   )}
// // // //                   {row.map((val, ci) => (
// // // //                     <td key={ci} style={s.matrixCell}>{val}</td>
// // // //                   ))}
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </>
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
// // // //           <h1 style={s.title}>Vector Calculator</h1>
// // // //           <p style={s.subtitle}>Professional vector operations calculator</p>
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
// // // //                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
// // // //                 <div style={s.buttonGroup}>
// // // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Dimensionality */}
// // // //               <div style={s.dimControls}>
// // // //                 <label style={s.dimLabel}>Dimensions:</label>
// // // //                 <input
// // // //                   type="number"
// // // //                   min="2"
// // // //                   max="10"
// // // //                   value={dimensionality}
// // // //                   onChange={(e) => {
// // // //                     const raw = e.target.value;
// // // //                     if (raw === '') { setDimensionality(''); return; }
// // // //                     const val = parseInt(raw);
// // // //                     setDimensionality(val);
// // // //                     if (val >= 2 && val <= 10) {
// // // //                       setVectors(vectors.map(v => {
// // // //                         const nc = new Array(val).fill('');
// // // //                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
// // // //                         return { ...v, components: nc };
// // // //                       }));
// // // //                       const nt = new Array(val).fill('');
// // // //                       for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
// // // //                       setTargetVector(nt);
// // // //                       setErrors([]);
// // // //                     } else {
// // // //                       setErrors(['Dimensionality must be between 2 and 10']);
// // // //                     }
// // // //                   }}
// // // //                   style={dimInputStyle}
// // // //                 />
// // // //                 <span style={s.dimHint}>(2–10)</span>
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

// // // //               {/* Vectors */}
// // // //               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
// // // //                 {vectors.map((v, i) => renderVector(v, i))}
// // // //               </div>

// // // //               {/* Add vector */}
// // // //               {operationType === 'multiple' && vectors.length < 10 && (
// // // //                 <div style={s.addVectorContainer}>
// // // //                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
// // // //                 </div>
// // // //               )}

// // // //               {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
// // // //               {selectedOperation === 'Linear Combination' && (
// // // //                 <div style={s.extraInputsSection}>
// // // //                   <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
// // // //                   {vectors.map((v, i) => (
// // // //                     <div key={i} style={s.coefficientRow}>
// // // //                       <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
// // // //                       <input
// // // //                         type="number"
// // // //                         step="any"
// // // //                         value={coefficients[i] || ''}
// // // //                         onChange={(e) => updateCoefficient(i, e.target.value)}
// // // //                         placeholder="0"
// // // //                         style={s.coefficientInput}
// // // //                       />
// // // //                       <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               )}

// // // //               {/* ── Extra inputs: Target Vector (Span Check) ── */}
// // // //               {selectedOperation === 'Span Check' && (
// // // //                 <div style={s.extraInputsSection}>
// // // //                   <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
// // // //                   <div style={s.vectorComponents}>
// // // //                     <span style={s.bracket}>(</span>
// // // //                     {targetVector.map((comp, ci) => (
// // // //                       <React.Fragment key={ci}>
// // // //                         <input
// // // //                           type="number"
// // // //                           step="any"
// // // //                           value={comp}
// // // //                           onChange={(e) => updateTargetComponent(ci, e.target.value)}
// // // //                           placeholder={`t${ci + 1}`}
// // // //                           style={{
// // // //                             ...s.componentInput,
// // // //                             borderColor: '#f59e0b',
// // // //                           }}
// // // //                         />
// // // //                         {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
// // // //                       </React.Fragment>
// // // //                     ))}
// // // //                     <span style={s.bracket}>)</span>
// // // //                   </div>
// // // //                 </div>
// // // //               )}

// // // //               {/* Operations */}
// // // //               <div style={s.operationsSection}>
// // // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // // //                 <div style={s.operationsGrid}>
// // // //                   {getAvailableOperations().map((op) => {
// // // //                     const sel = selectedOperation === op;
// // // //                     const dis = op === 'Cross Product' && dimensionality !== 3;
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

// // // //             {/* ▸ RIGHT — explanation panel */}
// // // //             <div style={s.explanationPanel}>
// // // //               {/* Theory (from merged descriptions — overridable via props) */}
// // // //               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
// // // //               <p style={s.explanationBody}>{getDescription()}</p>

// // // //               {/* Steps (dynamic — always from vectorExplanations.js, never overridable) */}
// // // //               {computedSteps && computedSteps.length > 0 && (
// // // //                 <>
// // // //                   <hr style={s.explanationDivider} />
// // // //                   <div style={s.stepsTitle}>Calculation Steps</div>
// // // //                   <ul style={s.stepsList}>
// // // //                     {computedSteps.map((line, i) => (
// // // //                       <li key={i} style={s.stepItem}>{line}</li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </>
// // // //               )}

// // // //               {/* History accordion */}
// // // //               {history.length > 0 && (
// // // //                 <div style={s.historySection}>
// // // //                   <button
// // // //                     onClick={() => setHistoryOpen(!historyOpen)}
// // // //                     style={s.historyToggle}
// // // //                   >
// // // //                     <span>History ({history.length})</span>
// // // //                     <span style={{
// // // //                       ...s.historyArrow,
// // // //                       transform: historyOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// // // //                     }}>
// // // //                       ▼
// // // //                     </span>
// // // //                   </button>

// // // //                   {historyOpen && (
// // // //                     <>
// // // //                       <ul style={s.historyList}>
// // // //                         {history.map((entry) => (
// // // //                           <li key={entry.id} style={s.historyEntry}>
// // // //                             <div style={s.historyEntryHeader}>
// // // //                               <span style={s.historyOpName}>{entry.operation}</span>
// // // //                               <span style={s.historyTime}>{entry.time}</span>
// // // //                             </div>
// // // //                             <div style={s.historyVectors}>
// // // //                               {formatHistoryInputs(entry)}
// // // //                             </div>
// // // //                             <div style={s.historyResult}>
// // // //                               = {formatHistoryResult(entry.result)}
// // // //                             </div>
// // // //                           </li>
// // // //                         ))}
// // // //                       </ul>
// // // //                       <button
// // // //                         onClick={() => { setHistory([]); setHistoryOpen(false); }}
// // // //                         style={s.historyClearBtn}
// // // //                       >
// // // //                         Clear history
// // // //                       </button>
// // // //                     </>
// // // //                   )}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useState } from 'react';
// // // import computeVector from './computeVector';
// // // import {
// // //   descriptions as defaultDescriptions,
// // //   steps as operationSteps,
// // // } from './vectorExplanations';

// // // /* ── styles ───────────────────────────────────────────────────── */

// // // const s = {
// // //   /* — wrappers — */
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

// // //   /* — initial card grid — */
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

// // //   /* — left panel — */
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

// // //   /* — right (explanation) panel — */
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
// // //   vectorGrid: {
// // //     display: 'grid',
// // //     gap: '16px',
// // //     marginBottom: '24px',
// // //   },
// // //   vectorGridSingle: { gridTemplateColumns: '1fr' },
// // //   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
// // //   vectorGridMultiple: { gridTemplateColumns: '1fr' },
// // //   vectorCard: {
// // //     backgroundColor: '#f8f9fa',
// // //     padding: '16px',
// // //     borderRadius: '8px',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   vectorHeader: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: '12px',
// // //   },
// // //   vectorName: {
// // //     margin: '0',
// // //     fontSize: '1.05rem',
// // //     fontWeight: '600',
// // //     color: '#374151',
// // //   },
// // //   vectorHeaderButtons: {
// // //     display: 'flex',
// // //     gap: '6px',
// // //     alignItems: 'center',
// // //   },
// // //   vectorComponents: {
// // //     display: 'flex',
// // //     gap: '8px',
// // //     alignItems: 'center',
// // //     flexWrap: 'wrap',
// // //   },
// // //   componentInput: {
// // //     width: '56px',
// // //     padding: '6px',
// // //     border: '1px solid #d1d5db',
// // //     borderRadius: '4px',
// // //     textAlign: 'center',
// // //     fontSize: '0.9rem',
// // //     outline: 'none',
// // //   },
// // //   componentInputError: {
// // //     borderColor: '#dc2626',
// // //     backgroundColor: '#fef2f2',
// // //   },
// // //   separator: { color: '#6b7280' },
// // //   bracket: { fontWeight: '500' },
// // //   addVectorContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     marginBottom: '24px',
// // //   },
// // //   addVectorButton: {
// // //     padding: '8px 16px',
// // //     border: '2px dashed #4285f4',
// // //     borderRadius: '8px',
// // //     backgroundColor: 'transparent',
// // //     color: '#4285f4',
// // //     fontSize: '0.9rem',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.2s ease',
// // //   },
// // //   operationsSection: { marginBottom: '24px' },
// // //   operationsTitle: {
// // //     fontSize: '1.1rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     marginBottom: '16px',
// // //   },
// // //   operationsGrid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
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
// // //   clearVectorButton: {
// // //     padding: '3px 8px',
// // //     border: '1px solid #9ca3af',
// // //     borderRadius: '4px',
// // //     backgroundColor: 'transparent',
// // //     color: '#6b7280',
// // //     fontSize: '0.75rem',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.15s ease',
// // //   },
// // //   randomVectorButton: {
// // //     padding: '3px 8px',
// // //     border: '1px solid #4285f4',
// // //     borderRadius: '4px',
// // //     backgroundColor: 'transparent',
// // //     color: '#4285f4',
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
// // //   dimControls: {
// // //     display: 'flex',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     gap: '16px',
// // //     marginBottom: '24px',
// // //     padding: '14px',
// // //     backgroundColor: '#f3f4f6',
// // //     borderRadius: '8px',
// // //     border: '1px solid #d1d5db',
// // //   },
// // //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// // //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

// // //   /* — coefficient input (Linear Combination) — */
// // //   coefficientRow: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '8px',
// // //     marginBottom: '8px',
// // //   },
// // //   coefficientLabel: {
// // //     fontSize: '0.85rem',
// // //     fontWeight: '600',
// // //     color: '#4285f4',
// // //     minWidth: '24px',
// // //   },
// // //   coefficientInput: {
// // //     width: '64px',
// // //     padding: '6px',
// // //     border: '2px solid #4285f4',
// // //     borderRadius: '4px',
// // //     textAlign: 'center',
// // //     fontSize: '0.9rem',
// // //     outline: 'none',
// // //     backgroundColor: '#f0f7ff',
// // //   },
// // //   coefficientHint: {
// // //     fontSize: '0.8rem',
// // //     color: '#6b7280',
// // //   },

// // //   /* — extra inputs section (coefficients / target) — */
// // //   extraInputsSection: {
// // //     backgroundColor: '#fffbeb',
// // //     border: '1px solid #fde68a',
// // //     borderRadius: '8px',
// // //     padding: '16px',
// // //     marginBottom: '24px',
// // //   },
// // //   extraInputsTitle: {
// // //     fontSize: '0.95rem',
// // //     fontWeight: '600',
// // //     color: '#92400e',
// // //     margin: '0 0 12px 0',
// // //   },

// // //   /* — result formatting — */
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
// // //   },
// // //   resultError: {
// // //     color: '#dc2626',
// // //     fontWeight: '500',
// // //     fontSize: '0.95rem',
// // //   },
// // //   matrixTable: {
// // //     borderCollapse: 'collapse',
// // //     fontFamily: 'monospace',
// // //     fontSize: '0.95rem',
// // //   },
// // //   matrixCell: {
// // //     padding: '6px 12px',
// // //     textAlign: 'right',
// // //     border: '1px solid #e5e7eb',
// // //   },
// // //   matrixRowLabel: {
// // //     padding: '6px 10px',
// // //     textAlign: 'left',
// // //     fontWeight: '600',
// // //     color: '#4285f4',
// // //     border: '1px solid #e5e7eb',
// // //     backgroundColor: '#f0f7ff',
// // //   },

// // //   /* — history accordion — */
// // //   historySection: {
// // //     marginTop: '16px',
// // //   },
// // //   historyToggle: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     width: '100%',
// // //     padding: '10px 0',
// // //     border: 'none',
// // //     borderTop: '1px solid #d0d9f0',
// // //     backgroundColor: 'transparent',
// // //     cursor: 'pointer',
// // //     fontSize: '0.85rem',
// // //     fontWeight: '700',
// // //     color: '#6b7280',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '0.03em',
// // //   },
// // //   historyArrow: {
// // //     fontSize: '0.75rem',
// // //     transition: 'transform 0.2s ease',
// // //   },
// // //   historyList: {
// // //     listStyle: 'none',
// // //     padding: '0',
// // //     margin: '8px 0 0 0',
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     gap: '10px',
// // //   },
// // //   historyEntry: {
// // //     backgroundColor: 'white',
// // //     borderRadius: '8px',
// // //     padding: '10px 12px',
// // //     border: '1px solid #d0d9f0',
// // //   },
// // //   historyEntryHeader: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: '6px',
// // //   },
// // //   historyOpName: {
// // //     fontSize: '0.85rem',
// // //     fontWeight: '700',
// // //     color: '#4285f4',
// // //   },
// // //   historyTime: {
// // //     fontSize: '0.75rem',
// // //     color: '#9ca3af',
// // //   },
// // //   historyVectors: {
// // //     fontSize: '0.78rem',
// // //     color: '#6b7280',
// // //     fontFamily: 'monospace',
// // //     marginBottom: '4px',
// // //     lineHeight: '1.4',
// // //     wordBreak: 'break-word',
// // //   },
// // //   historyResult: {
// // //     fontSize: '0.85rem',
// // //     fontWeight: '600',
// // //     color: '#1f2937',
// // //     fontFamily: 'monospace',
// // //   },
// // //   historyClearBtn: {
// // //     padding: '4px 10px',
// // //     border: '1px solid #d0d9f0',
// // //     borderRadius: '4px',
// // //     backgroundColor: 'transparent',
// // //     color: '#9ca3af',
// // //     fontSize: '0.7rem',
// // //     cursor: 'pointer',
// // //     marginTop: '8px',
// // //   },
// // // };

// // // const spinKeyframes = `
// // // @keyframes spin {
// // //   0% { transform: rotate(0deg); }
// // //   100% { transform: rotate(360deg); }
// // // }`;

// // // /* ── helpers for history ─────────────────────────────────────── */

// // // function fmtVecCompact(v) {
// // //   return '(' + v.map(c => {
// // //     if (Number.isInteger(c)) return String(c);
// // //     return parseFloat(c.toFixed(4)).toString();
// // //   }).join(', ') + ')';
// // // }

// // // function formatHistoryResult(res) {
// // //   if (res.type === 'scalar') return String(res.value);
// // //   if (res.type === 'vector') return fmtVecCompact(res.value);
// // //   if (res.type === 'boolean') return res.value ? '\u2713 TRUE' : '\u2717 FALSE';
// // //   if (res.type === 'matrix') return `${res.value.length}\u00D7${res.value[0].length} matrix`;
// // //   return String(res.value);
// // // }

// // // function formatHistoryInputs(entry) {
// // //   const parts = entry.vectors.map((v, i) =>
// // //     `${String.fromCharCode(65 + i)}=${fmtVecCompact(v)}`
// // //   );
// // //   if (entry.coefficients) {
// // //     parts.push('c=[' + entry.coefficients.map(c => {
// // //       if (Number.isInteger(c)) return String(c);
// // //       return parseFloat(c.toFixed(4)).toString();
// // //     }).join(', ') + ']');
// // //   }
// // //   if (entry.targetVector) {
// // //     parts.push('t=' + fmtVecCompact(entry.targetVector));
// // //   }
// // //   return parts.join('  ');
// // // }

// // // /* ── component ────────────────────────────────────────────────── */

// // // export default function VectorCalculator({ descriptions: descriptionsProp } = {}) {
// // //   const [step, setStep] = useState('operation-type');
// // //   const [operationType, setOperationType] = useState('');
// // //   const [dimensionality, setDimensionality] = useState(3);
// // //   const [vectors, setVectors] = useState([]);
// // //   const [selectedOperation, setSelectedOperation] = useState('');
// // //   const [result, setResult] = useState(null);
// // //   const [errors, setErrors] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [coefficients, setCoefficients] = useState([]);
// // //   const [targetVector, setTargetVector] = useState([]);
// // //   const [computedSteps, setComputedSteps] = useState(null);
// // //   const [history, setHistory] = useState([]);
// // //   const [historyOpen, setHistoryOpen] = useState(false);

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

// // //   const operationTypes = [
// // //     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
// // //     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot & cross product' },
// // //     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
// // //   ];

// // //   const operationsByType = {
// // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
// // //   };

// // //   /* ── helpers ── */

// // //   const validateInputs = () => {
// // //     const newErrors = [];
// // //     if (!selectedOperation) newErrors.push('Please select an operation');
// // //     vectors.forEach((vector, index) => {
// // //       const name = String.fromCharCode(65 + index);
// // //       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
// // //       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// // //       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
// // //       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
// // //     });
// // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
// // //       newErrors.push('Cross product is only defined for 3D vectors');
// // //     if (operationType === 'multiple' && vectors.length < 2)
// // //       newErrors.push('Multiple vector operations require at least 2 vectors');

// // //     if (selectedOperation === 'Linear Combination') {
// // //       const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
// // //       if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
// // //     }

// // //     if (selectedOperation === 'Span Check') {
// // //       const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
// // //       const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
// // //       if (emptyTarget) newErrors.push('Target vector has empty components');
// // //       if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
// // //     }

// // //     setErrors(newErrors);
// // //     return newErrors.length === 0;
// // //   };

// // //   const handleReset = () => {
// // //     setStep('operation-type');
// // //     setOperationType('');
// // //     setDimensionality(3);
// // //     setVectors([]);
// // //     setSelectedOperation('');
// // //     setResult(null);
// // //     setErrors([]);
// // //     setIsLoading(false);
// // //     setCoefficients([]);
// // //     setTargetVector([]);
// // //     setComputedSteps(null);
// // //     // history intentionally NOT cleared — persists through reset
// // //   };

// // //   const clearVector = (vi) => {
// // //     const updated = [...vectors];
// // //     const dim = updated[vi].components.length;
// // //     updated[vi] = { ...updated[vi], components: new Array(dim).fill('') };
// // //     setVectors(updated);
// // //   };

// // //   const randomizeVector = (vi) => {
// // //     const updated = [...vectors];
// // //     const dim = updated[vi].components.length;
// // //     updated[vi] = {
// // //       ...updated[vi],
// // //       components: Array.from({ length: dim }, () => String(Math.floor(Math.random() * 21) - 10)),
// // //     };
// // //     setVectors(updated);
// // //   };

// // //   const handleOperationTypeSelect = (type) => {
// // //     setOperationType(type);
// // //     setSelectedOperation('');
// // //     setErrors([]);
// // //     setResult(null);
// // //     setComputedSteps(null);
// // //     let count = 1;
// // //     if (type === 'two') count = 2;
// // //     if (type === 'multiple') count = 2;
// // //     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // //     const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
// // //     setVectors(newVectors);
// // //     setCoefficients(new Array(count).fill(''));
// // //     setTargetVector(new Array(dim).fill(''));
// // //     setStep('input');
// // //   };

// // //   const updateVectorComponent = (vi, ci, value) => {
// // //     const updated = [...vectors];
// // //     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
// // //     updated[vi].components[ci] = value;
// // //     setVectors(updated);
// // //     if (errors.length > 0) setErrors([]);
// // //   };

// // //   const updateCoefficient = (index, value) => {
// // //     const updated = [...coefficients];
// // //     updated[index] = value;
// // //     setCoefficients(updated);
// // //     if (errors.length > 0) setErrors([]);
// // //   };

// // //   const updateTargetComponent = (ci, value) => {
// // //     const updated = [...targetVector];
// // //     updated[ci] = value;
// // //     setTargetVector(updated);
// // //     if (errors.length > 0) setErrors([]);
// // //   };

// // //   const addVector = () => {
// // //     if (operationType === 'multiple' && vectors.length < 10) {
// // //       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// // //       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
// // //       setCoefficients([...coefficients, '']);
// // //     }
// // //   };

// // //   const removeVector = (i) => {
// // //     if (operationType === 'multiple' && vectors.length > 2) {
// // //       setVectors(vectors.filter((_, idx) => idx !== i));
// // //       setCoefficients(coefficients.filter((_, idx) => idx !== i));
// // //     }
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
// // //       const numericVectors = vectors.map(v =>
// // //         v.components.map(c => parseFloat(c))
// // //       );

// // //       const params = {
// // //         operation: selectedOperation,
// // //         operationType,
// // //         dimensionality,
// // //         vectors: numericVectors,
// // //       };

// // //       if (selectedOperation === 'Linear Combination') {
// // //         params.coefficients = coefficients.map(c => parseFloat(c));
// // //       }
// // //       if (selectedOperation === 'Span Check') {
// // //         params.targetVector = targetVector.map(c => parseFloat(c));
// // //       }

// // //       const res = computeVector(params);
// // //       setResult(res);

// // //       if (res.type === 'error') {
// // //         setErrors([res.value]);
// // //       } else {
// // //         // Push to history on success
// // //         const entry = {
// // //           id: Date.now(),
// // //           operation: selectedOperation,
// // //           vectors: numericVectors,
// // //           result: res,
// // //           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
// // //         };
// // //         if (params.coefficients) entry.coefficients = params.coefficients;
// // //         if (params.targetVector) entry.targetVector = params.targetVector;
// // //         setHistory(prev => [entry, ...prev]);
// // //       }

// // //       // Generate dynamic steps
// // //       const stepFn = operationSteps[operationType]?.[selectedOperation];
// // //       if (stepFn) {
// // //         const extras = {
// // //           coefficients: params.coefficients,
// // //           targetVector: params.targetVector,
// // //         };
// // //         const stepLines = stepFn(numericVectors, res, extras);
// // //         setComputedSteps(stepLines);
// // //       }

// // //       setIsLoading(false);
// // //     }, 150);
// // //   };

// // //   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

// // //   const getVectorGridExtra = () => {
// // //     if (operationType === 'single') return s.vectorGridSingle;
// // //     if (operationType === 'two') return s.vectorGridTwo;
// // //     return s.vectorGridMultiple;
// // //   };

// // //   /* ── explanation: description (from merged, overridable) ── */
// // //   const getDescription = () => {
// // //     const pool = mergedDescriptions[operationType];
// // //     if (!pool) return '';
// // //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// // //     return pool._default;
// // //   };

// // //   const getExplanationHeading = () => {
// // //     if (selectedOperation) return selectedOperation;
// // //     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
// // //     return labels[operationType] || 'Explanation';
// // //   };

// // //   /* ── left-panel button style ── */
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

// // //   const dimInputStyle = {
// // //     width: '64px',
// // //     padding: '8px 10px',
// // //     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// // //     borderRadius: '8px',
// // //     fontSize: '1rem',
// // //     textAlign: 'center',
// // //     outline: 'none',
// // //   };

// // //   /* ── render a single vector card ── */
// // //   const renderVector = (vector, vi) => (
// // //     <div key={vector.id} style={s.vectorCard}>
// // //       <div style={s.vectorHeader}>
// // //         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
// // //         <div style={s.vectorHeaderButtons}>
// // //           <button
// // //             onClick={() => randomizeVector(vi)}
// // //             style={s.randomVectorButton}
// // //             title="Fill with random numbers"
// // //           >
// // //             Random
// // //           </button>
// // //           <button
// // //             onClick={() => clearVector(vi)}
// // //             style={s.clearVectorButton}
// // //             title="Clear this vector"
// // //           >
// // //             Clear
// // //           </button>
// // //           {operationType === 'multiple' && vectors.length > 2 && (
// // //             <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
// // //           )}
// // //         </div>
// // //       </div>
// // //       <div style={s.vectorComponents}>
// // //         <span style={s.bracket}>(</span>
// // //         {vector.components.map((comp, ci) => (
// // //           <React.Fragment key={ci}>
// // //             <input
// // //               type="number"
// // //               step="any"
// // //               value={comp}
// // //               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
// // //               placeholder={`x${ci + 1}`}
// // //               style={{
// // //                 ...s.componentInput,
// // //                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
// // //               }}
// // //             />
// // //             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
// // //           </React.Fragment>
// // //         ))}
// // //         <span style={s.bracket}>)</span>
// // //       </div>
// // //     </div>
// // //   );

// // //   /* ── render result based on type ── */
// // //   const renderResult = () => {
// // //     if (!result) return 'Select vectors and operation, then click Execute';

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
// // //           <span style={s.resultValue}>({result.value.join(', ')})</span>
// // //         </>
// // //       );
// // //     }

// // //     if (result.type === 'boolean') {
// // //       return (
// // //         <>
// // //           <span style={s.resultLabel}>{result.label}</span>
// // //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// // //             {result.value ? '✓ TRUE' : '✗ FALSE'}
// // //           </span>
// // //           <span style={s.resultDetail}>{result.detail}</span>
// // //         </>
// // //       );
// // //     }

// // //     if (result.type === 'matrix') {
// // //       return (
// // //         <>
// // //           <span style={s.resultLabel}>{result.label}</span>
// // //           <table style={s.matrixTable}>
// // //             <tbody>
// // //               {result.value.map((row, ri) => (
// // //                 <tr key={ri}>
// // //                   {result.rowLabels && (
// // //                     <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
// // //                   )}
// // //                   {row.map((val, ci) => (
// // //                     <td key={ci} style={s.matrixCell}>{val}</td>
// // //                   ))}
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </>
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
// // //           <h1 style={s.title}>Vector Calculator</h1>
// // //           <p style={s.subtitle}>Professional vector operations calculator</p>
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
// // //                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
// // //                 <div style={s.buttonGroup}>
// // //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// // //                 </div>
// // //               </div>

// // //               {/* Dimensionality */}
// // //               <div style={s.dimControls}>
// // //                 <label style={s.dimLabel}>Dimensions:</label>
// // //                 <input
// // //                   type="number"
// // //                   min="2"
// // //                   max="10"
// // //                   value={dimensionality}
// // //                   onChange={(e) => {
// // //                     const raw = e.target.value;
// // //                     if (raw === '') { setDimensionality(''); return; }
// // //                     const val = parseInt(raw);
// // //                     setDimensionality(val);
// // //                     if (val >= 2 && val <= 10) {
// // //                       setVectors(vectors.map(v => {
// // //                         const nc = new Array(val).fill('');
// // //                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
// // //                         return { ...v, components: nc };
// // //                       }));
// // //                       const nt = new Array(val).fill('');
// // //                       for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
// // //                       setTargetVector(nt);
// // //                       setErrors([]);
// // //                     } else {
// // //                       setErrors(['Dimensionality must be between 2 and 10']);
// // //                     }
// // //                   }}
// // //                   style={dimInputStyle}
// // //                 />
// // //                 <span style={s.dimHint}>(2–10)</span>
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

// // //               {/* Vectors */}
// // //               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
// // //                 {vectors.map((v, i) => renderVector(v, i))}
// // //               </div>

// // //               {/* Add vector */}
// // //               {operationType === 'multiple' && vectors.length < 10 && (
// // //                 <div style={s.addVectorContainer}>
// // //                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
// // //                 </div>
// // //               )}

// // //               {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
// // //               {selectedOperation === 'Linear Combination' && (
// // //                 <div style={s.extraInputsSection}>
// // //                   <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
// // //                   {vectors.map((v, i) => (
// // //                     <div key={i} style={s.coefficientRow}>
// // //                       <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
// // //                       <input
// // //                         type="number"
// // //                         step="any"
// // //                         value={coefficients[i] || ''}
// // //                         onChange={(e) => updateCoefficient(i, e.target.value)}
// // //                         placeholder="0"
// // //                         style={s.coefficientInput}
// // //                       />
// // //                       <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {/* ── Extra inputs: Target Vector (Span Check) ── */}
// // //               {selectedOperation === 'Span Check' && (
// // //                 <div style={s.extraInputsSection}>
// // //                   <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
// // //                   <div style={s.vectorComponents}>
// // //                     <span style={s.bracket}>(</span>
// // //                     {targetVector.map((comp, ci) => (
// // //                       <React.Fragment key={ci}>
// // //                         <input
// // //                           type="number"
// // //                           step="any"
// // //                           value={comp}
// // //                           onChange={(e) => updateTargetComponent(ci, e.target.value)}
// // //                           placeholder={`t${ci + 1}`}
// // //                           style={{
// // //                             ...s.componentInput,
// // //                             borderColor: '#f59e0b',
// // //                           }}
// // //                         />
// // //                         {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
// // //                       </React.Fragment>
// // //                     ))}
// // //                     <span style={s.bracket}>)</span>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {/* Operations */}
// // //               <div style={s.operationsSection}>
// // //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// // //                 <div style={s.operationsGrid}>
// // //                   {getAvailableOperations().map((op) => {
// // //                     const sel = selectedOperation === op;
// // //                     const dis = op === 'Cross Product' && dimensionality !== 3;
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

// // //               {/* Steps (dynamic — always from vectorExplanations.js, never overridable) */}
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

// // //               {/* History accordion */}
// // //               {history.length > 0 && (
// // //                 <div style={s.historySection}>
// // //                   <button
// // //                     onClick={() => setHistoryOpen(!historyOpen)}
// // //                     style={s.historyToggle}
// // //                   >
// // //                     <span>History ({history.length})</span>
// // //                     <span style={{
// // //                       ...s.historyArrow,
// // //                       transform: historyOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// // //                     }}>
// // //                       ▼
// // //                     </span>
// // //                   </button>

// // //                   {historyOpen && (
// // //                     <>
// // //                       <ul style={s.historyList}>
// // //                         {history.map((entry) => (
// // //                           <li key={entry.id} style={s.historyEntry}>
// // //                             <div style={s.historyEntryHeader}>
// // //                               <span style={s.historyOpName}>{entry.operation}</span>
// // //                               <span style={s.historyTime}>{entry.time}</span>
// // //                             </div>
// // //                             <div style={s.historyVectors}>
// // //                               {formatHistoryInputs(entry)}
// // //                             </div>
// // //                             <div style={s.historyResult}>
// // //                               = {formatHistoryResult(entry.result)}
// // //                             </div>
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                       <button
// // //                         onClick={() => { setHistory([]); setHistoryOpen(false); }}
// // //                         style={s.historyClearBtn}
// // //                       >
// // //                         Clear history
// // //                       </button>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from 'react';
// // import computeVector from './computeVector';
// // import {
// //   descriptions as defaultDescriptions,
// //   steps as operationSteps,
// // } from './vectorExplanations';

// // /* ── styles ───────────────────────────────────────────────────── */

// // const s = {
// //   /* — wrappers — */
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

// //   /* — initial card grid — */
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

// //   /* — left panel — */
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

// //   /* — right (explanation) panel — */
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
// //   vectorGrid: {
// //     display: 'grid',
// //     gap: '16px',
// //     marginBottom: '24px',
// //   },
// //   vectorGridSingle: { gridTemplateColumns: '1fr' },
// //   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
// //   vectorGridMultiple: { gridTemplateColumns: '1fr' },
// //   vectorCard: {
// //     backgroundColor: '#f8f9fa',
// //     padding: '16px',
// //     borderRadius: '8px',
// //     border: '1px solid #e5e7eb',
// //   },
// //   vectorHeader: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: '12px',
// //   },
// //   vectorName: {
// //     margin: '0',
// //     fontSize: '1.05rem',
// //     fontWeight: '600',
// //     color: '#374151',
// //   },
// //   vectorHeaderButtons: {
// //     display: 'flex',
// //     gap: '6px',
// //     alignItems: 'center',
// //   },
// //   vectorComponents: {
// //     display: 'flex',
// //     gap: '8px',
// //     alignItems: 'center',
// //     flexWrap: 'wrap',
// //   },
// //   componentInput: {
// //     width: '56px',
// //     padding: '6px',
// //     border: '1px solid #d1d5db',
// //     borderRadius: '4px',
// //     textAlign: 'center',
// //     fontSize: '0.9rem',
// //     outline: 'none',
// //   },
// //   componentInputError: {
// //     borderColor: '#dc2626',
// //     backgroundColor: '#fef2f2',
// //   },
// //   separator: { color: '#6b7280' },
// //   bracket: { fontWeight: '500' },
// //   addVectorContainer: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     marginBottom: '24px',
// //   },
// //   addVectorButton: {
// //     padding: '8px 16px',
// //     border: '2px dashed #4285f4',
// //     borderRadius: '8px',
// //     backgroundColor: 'transparent',
// //     color: '#4285f4',
// //     fontSize: '0.9rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.2s ease',
// //   },
// //   operationsSection: { marginBottom: '24px' },
// //   operationsTitle: {
// //     fontSize: '1.1rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     marginBottom: '16px',
// //   },
// //   operationsGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
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
// //   clearVectorButton: {
// //     padding: '3px 8px',
// //     border: '1px solid #9ca3af',
// //     borderRadius: '4px',
// //     backgroundColor: 'transparent',
// //     color: '#6b7280',
// //     fontSize: '0.75rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.15s ease',
// //   },
// //   randomVectorButton: {
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
// //   dimControls: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     gap: '16px',
// //     marginBottom: '24px',
// //     padding: '14px',
// //     backgroundColor: '#f3f4f6',
// //     borderRadius: '8px',
// //     border: '1px solid #d1d5db',
// //   },
// //   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
// //   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

// //   /* — coefficient input (Linear Combination) — */
// //   coefficientRow: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     marginBottom: '8px',
// //   },
// //   coefficientLabel: {
// //     fontSize: '0.85rem',
// //     fontWeight: '600',
// //     color: '#4285f4',
// //     minWidth: '24px',
// //   },
// //   coefficientInput: {
// //     width: '64px',
// //     padding: '6px',
// //     border: '2px solid #4285f4',
// //     borderRadius: '4px',
// //     textAlign: 'center',
// //     fontSize: '0.9rem',
// //     outline: 'none',
// //     backgroundColor: '#f0f7ff',
// //   },
// //   coefficientHint: {
// //     fontSize: '0.8rem',
// //     color: '#6b7280',
// //   },

// //   /* — extra inputs section (coefficients / target) — */
// //   extraInputsSection: {
// //     backgroundColor: '#fffbeb',
// //     border: '1px solid #fde68a',
// //     borderRadius: '8px',
// //     padding: '16px',
// //     marginBottom: '24px',
// //   },
// //   extraInputsTitle: {
// //     fontSize: '0.95rem',
// //     fontWeight: '600',
// //     color: '#92400e',
// //     margin: '0 0 12px 0',
// //   },

// //   /* — result formatting — */
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
// //   },
// //   resultError: {
// //     color: '#dc2626',
// //     fontWeight: '500',
// //     fontSize: '0.95rem',
// //   },
// //   matrixTable: {
// //     borderCollapse: 'collapse',
// //     fontFamily: 'monospace',
// //     fontSize: '0.95rem',
// //   },
// //   matrixCell: {
// //     padding: '6px 12px',
// //     textAlign: 'right',
// //     border: '1px solid #e5e7eb',
// //   },
// //   matrixRowLabel: {
// //     padding: '6px 10px',
// //     textAlign: 'left',
// //     fontWeight: '600',
// //     color: '#4285f4',
// //     border: '1px solid #e5e7eb',
// //     backgroundColor: '#f0f7ff',
// //   },

// //   /* — history accordion — */
// //   historySection: {
// //     marginTop: '16px',
// //   },
// //   historyToggle: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     width: '100%',
// //     padding: '10px 0',
// //     border: 'none',
// //     borderTop: '1px solid #d0d9f0',
// //     backgroundColor: 'transparent',
// //     cursor: 'pointer',
// //     fontSize: '0.85rem',
// //     fontWeight: '700',
// //     color: '#6b7280',
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.03em',
// //   },
// //   historyArrow: {
// //     fontSize: '0.75rem',
// //     transition: 'transform 0.2s ease',
// //   },
// //   historyList: {
// //     listStyle: 'none',
// //     padding: '0',
// //     margin: '8px 0 0 0',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '10px',
// //   },
// //   historyEntry: {
// //     backgroundColor: 'white',
// //     borderRadius: '8px',
// //     padding: '10px 12px',
// //     border: '1px solid #d0d9f0',
// //   },
// //   historyEntryHeader: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: '6px',
// //   },
// //   historyOpName: {
// //     fontSize: '0.85rem',
// //     fontWeight: '700',
// //     color: '#4285f4',
// //   },
// //   historyTime: {
// //     fontSize: '0.75rem',
// //     color: '#9ca3af',
// //   },
// //   historyVectors: {
// //     fontSize: '0.78rem',
// //     color: '#6b7280',
// //     fontFamily: 'monospace',
// //     marginBottom: '4px',
// //     lineHeight: '1.4',
// //     wordBreak: 'break-word',
// //   },
// //   historyResult: {
// //     fontSize: '0.85rem',
// //     fontWeight: '600',
// //     color: '#1f2937',
// //     fontFamily: 'monospace',
// //   },
// //   historyClearBtn: {
// //     padding: '4px 10px',
// //     border: '1px solid #d0d9f0',
// //     borderRadius: '4px',
// //     backgroundColor: 'transparent',
// //     color: '#9ca3af',
// //     fontSize: '0.7rem',
// //     cursor: 'pointer',
// //     marginTop: '8px',
// //   },
// // };

// // const spinKeyframes = `
// // @keyframes spin {
// //   0% { transform: rotate(0deg); }
// //   100% { transform: rotate(360deg); }
// // }`;

// // /* ── helpers for history ─────────────────────────────────────── */

// // function fmtVecCompact(v) {
// //   return '(' + v.map(c => {
// //     if (Number.isInteger(c)) return String(c);
// //     return parseFloat(c.toFixed(4)).toString();
// //   }).join(', ') + ')';
// // }

// // function formatHistoryResult(res) {
// //   if (res.type === 'scalar') return String(res.value);
// //   if (res.type === 'vector') return fmtVecCompact(res.value);
// //   if (res.type === 'boolean') return res.value ? '\u2713 TRUE' : '\u2717 FALSE';
// //   if (res.type === 'matrix') return `${res.value.length}\u00D7${res.value[0].length} matrix`;
// //   return String(res.value);
// // }

// // function formatHistoryInputs(entry) {
// //   const parts = entry.vectors.map((v, i) =>
// //     `${String.fromCharCode(65 + i)}=${fmtVecCompact(v)}`
// //   );
// //   if (entry.coefficients) {
// //     parts.push('c=[' + entry.coefficients.map(c => {
// //       if (Number.isInteger(c)) return String(c);
// //       return parseFloat(c.toFixed(4)).toString();
// //     }).join(', ') + ']');
// //   }
// //   if (entry.targetVector) {
// //     parts.push('t=' + fmtVecCompact(entry.targetVector));
// //   }
// //   return parts.join('  ');
// // }

// // /* ── component ────────────────────────────────────────────────── */

// // export default function VectorCalculator({ descriptions: descriptionsProp } = {}) {
// //   const [step, setStep] = useState('operation-type');
// //   const [operationType, setOperationType] = useState('');
// //   const [dimensionality, setDimensionality] = useState(3);
// //   const [vectors, setVectors] = useState([]);
// //   const [selectedOperation, setSelectedOperation] = useState('');
// //   const [result, setResult] = useState(null);
// //   const [errors, setErrors] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [coefficients, setCoefficients] = useState([]);
// //   const [targetVector, setTargetVector] = useState([]);
// //   const [computedSteps, setComputedSteps] = useState(null);
// //   const [history, setHistory] = useState([]);
// //   const [historyOpen, setHistoryOpen] = useState(false);

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

// //   const operationTypes = [
// //     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
// //     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot & cross product' },
// //     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
// //   ];

// //   const operationsByType = {
// //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
// //   };

// //   /* ── helpers ── */

// //   const validateInputs = () => {
// //     const newErrors = [];
// //     if (!selectedOperation) newErrors.push('Please select an operation');
// //     vectors.forEach((vector, index) => {
// //       const name = String.fromCharCode(65 + index);
// //       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
// //       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
// //       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
// //       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
// //     });
// //     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
// //       newErrors.push('Cross product is only defined for 3D vectors');
// //     if (operationType === 'multiple' && vectors.length < 2)
// //       newErrors.push('Multiple vector operations require at least 2 vectors');

// //     if (selectedOperation === 'Linear Combination') {
// //       const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
// //       if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
// //     }

// //     if (selectedOperation === 'Span Check') {
// //       const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
// //       const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
// //       if (emptyTarget) newErrors.push('Target vector has empty components');
// //       if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
// //     }

// //     setErrors(newErrors);
// //     return newErrors.length === 0;
// //   };

// //   const handleReset = () => {
// //     setStep('operation-type');
// //     setOperationType('');
// //     setDimensionality(3);
// //     setVectors([]);
// //     setSelectedOperation('');
// //     setResult(null);
// //     setErrors([]);
// //     setIsLoading(false);
// //     setCoefficients([]);
// //     setTargetVector([]);
// //     setComputedSteps(null);
// //     // history intentionally NOT cleared — persists through reset
// //   };

// //   const clearVector = (vi) => {
// //     const updated = [...vectors];
// //     const dim = updated[vi].components.length;
// //     updated[vi] = { ...updated[vi], components: new Array(dim).fill('') };
// //     setVectors(updated);
// //   };

// //   const randomizeVector = (vi) => {
// //     const updated = [...vectors];
// //     const dim = updated[vi].components.length;
// //     updated[vi] = {
// //       ...updated[vi],
// //       components: Array.from({ length: dim }, () => String(Math.floor(Math.random() * 21) - 10)),
// //     };
// //     setVectors(updated);
// //   };

// //   const handleOperationTypeSelect = (type) => {
// //     setOperationType(type);
// //     setSelectedOperation('');
// //     setErrors([]);
// //     setResult(null);
// //     setComputedSteps(null);
// //     let count = 1;
// //     if (type === 'two') count = 2;
// //     if (type === 'multiple') count = 2;
// //     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// //     const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
// //     setVectors(newVectors);
// //     setCoefficients(new Array(count).fill(''));
// //     setTargetVector(new Array(dim).fill(''));
// //     setStep('input');
// //   };

// //   const updateVectorComponent = (vi, ci, value) => {
// //     const updated = [...vectors];
// //     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
// //     updated[vi].components[ci] = value;
// //     setVectors(updated);
// //     if (errors.length > 0) setErrors([]);
// //   };

// //   const updateCoefficient = (index, value) => {
// //     const updated = [...coefficients];
// //     updated[index] = value;
// //     setCoefficients(updated);
// //     if (errors.length > 0) setErrors([]);
// //   };

// //   const updateTargetComponent = (ci, value) => {
// //     const updated = [...targetVector];
// //     updated[ci] = value;
// //     setTargetVector(updated);
// //     if (errors.length > 0) setErrors([]);
// //   };

// //   const addVector = () => {
// //     if (operationType === 'multiple' && vectors.length < 10) {
// //       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
// //       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
// //       setCoefficients([...coefficients, '']);
// //     }
// //   };

// //   const removeVector = (i) => {
// //     if (operationType === 'multiple' && vectors.length > 2) {
// //       setVectors(vectors.filter((_, idx) => idx !== i));
// //       setCoefficients(coefficients.filter((_, idx) => idx !== i));
// //     }
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
// //       const numericVectors = vectors.map(v =>
// //         v.components.map(c => parseFloat(c))
// //       );

// //       const params = {
// //         operation: selectedOperation,
// //         operationType,
// //         dimensionality,
// //         vectors: numericVectors,
// //       };

// //       if (selectedOperation === 'Linear Combination') {
// //         params.coefficients = coefficients.map(c => parseFloat(c));
// //       }
// //       if (selectedOperation === 'Span Check') {
// //         params.targetVector = targetVector.map(c => parseFloat(c));
// //       }

// //       const res = computeVector(params);
// //       setResult(res);

// //       if (res.type === 'error') {
// //         setErrors([res.value]);
// //       } else {
// //         // Push to history on success
// //         const entry = {
// //           id: Date.now(),
// //           operation: selectedOperation,
// //           vectors: numericVectors,
// //           result: res,
// //           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
// //         };
// //         if (params.coefficients) entry.coefficients = params.coefficients;
// //         if (params.targetVector) entry.targetVector = params.targetVector;
// //         setHistory(prev => [entry, ...prev]);
// //       }

// //       // Generate dynamic steps
// //       const stepFn = operationSteps[operationType]?.[selectedOperation];
// //       if (stepFn) {
// //         const extras = {
// //           coefficients: params.coefficients,
// //           targetVector: params.targetVector,
// //         };
// //         const stepLines = stepFn(numericVectors, res, extras);
// //         setComputedSteps(stepLines);
// //       }

// //       setIsLoading(false);
// //     }, 150);
// //   };

// //   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

// //   const getVectorGridExtra = () => {
// //     if (operationType === 'single') return s.vectorGridSingle;
// //     if (operationType === 'two') return s.vectorGridTwo;
// //     return s.vectorGridMultiple;
// //   };

// //   /* ── explanation: description (from merged, overridable) ── */
// //   const getDescription = () => {
// //     const pool = mergedDescriptions[operationType];
// //     if (!pool) return '';
// //     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
// //     return pool._default;
// //   };

// //   const getExplanationHeading = () => {
// //     if (selectedOperation) return selectedOperation;
// //     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
// //     return labels[operationType] || 'Explanation';
// //   };

// //   /* ── left-panel button style ── */
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

// //   const dimInputStyle = {
// //     width: '64px',
// //     padding: '8px 10px',
// //     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// //     borderRadius: '8px',
// //     fontSize: '1rem',
// //     textAlign: 'center',
// //     outline: 'none',
// //   };

// //   /* ── render a single vector card ── */
// //   const renderVector = (vector, vi) => (
// //     <div key={vector.id} style={s.vectorCard}>
// //       <div style={s.vectorHeader}>
// //         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
// //         <div style={s.vectorHeaderButtons}>
// //           <button
// //             onClick={() => randomizeVector(vi)}
// //             style={s.randomVectorButton}
// //             title="Fill with random numbers"
// //           >
// //             Random
// //           </button>
// //           <button
// //             onClick={() => clearVector(vi)}
// //             style={s.clearVectorButton}
// //             title="Clear this vector"
// //           >
// //             Clear
// //           </button>
// //           {operationType === 'multiple' && vectors.length > 2 && (
// //             <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
// //           )}
// //         </div>
// //       </div>
// //       <div style={s.vectorComponents}>
// //         <span style={s.bracket}>(</span>
// //         {vector.components.map((comp, ci) => (
// //           <React.Fragment key={ci}>
// //             <input
// //               type="number"
// //               step="any"
// //               value={comp}
// //               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
// //               placeholder="0"
// //               style={{
// //                 ...s.componentInput,
// //                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
// //               }}
// //             />
// //             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
// //           </React.Fragment>
// //         ))}
// //         <span style={s.bracket}>)</span>
// //       </div>
// //     </div>
// //   );

// //   /* ── render result based on type ── */
// //   const renderResult = () => {
// //     if (!result) return 'Select vectors and operation, then click Execute';

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
// //           <span style={s.resultValue}>({result.value.join(', ')})</span>
// //         </>
// //       );
// //     }

// //     if (result.type === 'boolean') {
// //       return (
// //         <>
// //           <span style={s.resultLabel}>{result.label}</span>
// //           <span style={result.value ? s.resultTrue : s.resultFalse}>
// //             {result.value ? '✓ TRUE' : '✗ FALSE'}
// //           </span>
// //           <span style={s.resultDetail}>{result.detail}</span>
// //         </>
// //       );
// //     }

// //     if (result.type === 'matrix') {
// //       return (
// //         <>
// //           <span style={s.resultLabel}>{result.label}</span>
// //           <table style={s.matrixTable}>
// //             <tbody>
// //               {result.value.map((row, ri) => (
// //                 <tr key={ri}>
// //                   {result.rowLabels && (
// //                     <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
// //                   )}
// //                   {row.map((val, ci) => (
// //                     <td key={ci} style={s.matrixCell}>{val}</td>
// //                   ))}
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </>
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
// //           <h1 style={s.title}>Vector Calculator</h1>
// //           <p style={s.subtitle}>Professional vector operations calculator</p>
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
// //                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
// //                 <div style={s.buttonGroup}>
// //                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
// //                 </div>
// //               </div>

// //               {/* Dimensionality */}
// //               <div style={s.dimControls}>
// //                 <label style={s.dimLabel}>Dimensions:</label>
// //                 <input
// //                   type="number"
// //                   min="2"
// //                   max="10"
// //                   value={dimensionality}
// //                   onChange={(e) => {
// //                     const raw = e.target.value;
// //                     if (raw === '') { setDimensionality(''); return; }
// //                     const val = parseInt(raw);
// //                     setDimensionality(val);
// //                     if (val >= 2 && val <= 10) {
// //                       setVectors(vectors.map(v => {
// //                         const nc = new Array(val).fill('');
// //                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
// //                         return { ...v, components: nc };
// //                       }));
// //                       const nt = new Array(val).fill('');
// //                       for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
// //                       setTargetVector(nt);
// //                       setErrors([]);
// //                     } else {
// //                       setErrors(['Dimensionality must be between 2 and 10']);
// //                     }
// //                   }}
// //                   style={dimInputStyle}
// //                 />
// //                 <span style={s.dimHint}>(2–10)</span>
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

// //               {/* Vectors */}
// //               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
// //                 {vectors.map((v, i) => renderVector(v, i))}
// //               </div>

// //               {/* Add vector */}
// //               {operationType === 'multiple' && vectors.length < 10 && (
// //                 <div style={s.addVectorContainer}>
// //                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
// //                 </div>
// //               )}

// //               {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
// //               {selectedOperation === 'Linear Combination' && (
// //                 <div style={s.extraInputsSection}>
// //                   <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
// //                   {vectors.map((v, i) => (
// //                     <div key={i} style={s.coefficientRow}>
// //                       <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
// //                       <input
// //                         type="number"
// //                         step="any"
// //                         value={coefficients[i] || ''}
// //                         onChange={(e) => updateCoefficient(i, e.target.value)}
// //                         placeholder="0"
// //                         style={s.coefficientInput}
// //                       />
// //                       <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* ── Extra inputs: Target Vector (Span Check) ── */}
// //               {selectedOperation === 'Span Check' && (
// //                 <div style={s.extraInputsSection}>
// //                   <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
// //                   <div style={s.vectorComponents}>
// //                     <span style={s.bracket}>(</span>
// //                     {targetVector.map((comp, ci) => (
// //                       <React.Fragment key={ci}>
// //                         <input
// //                           type="number"
// //                           step="any"
// //                           value={comp}
// //                           onChange={(e) => updateTargetComponent(ci, e.target.value)}
// //                           placeholder="0"
// //                           style={{
// //                             ...s.componentInput,
// //                             borderColor: '#f59e0b',
// //                           }}
// //                         />
// //                         {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
// //                       </React.Fragment>
// //                     ))}
// //                     <span style={s.bracket}>)</span>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Operations */}
// //               <div style={s.operationsSection}>
// //                 <h3 style={s.operationsTitle}>Available Operations</h3>
// //                 <div style={s.operationsGrid}>
// //                   {getAvailableOperations().map((op) => {
// //                     const sel = selectedOperation === op;
// //                     const dis = op === 'Cross Product' && dimensionality !== 3;
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

// //               {/* Steps (dynamic — always from vectorExplanations.js, never overridable) */}
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

// //               {/* History accordion */}
// //               {history.length > 0 && (
// //                 <div style={s.historySection}>
// //                   <button
// //                     onClick={() => setHistoryOpen(!historyOpen)}
// //                     style={s.historyToggle}
// //                   >
// //                     <span>History ({history.length})</span>
// //                     <span style={{
// //                       ...s.historyArrow,
// //                       transform: historyOpen ? 'rotate(180deg)' : 'rotate(0deg)',
// //                     }}>
// //                       ▼
// //                     </span>
// //                   </button>

// //                   {historyOpen && (
// //                     <>
// //                       <ul style={s.historyList}>
// //                         {history.map((entry) => (
// //                           <li key={entry.id} style={s.historyEntry}>
// //                             <div style={s.historyEntryHeader}>
// //                               <span style={s.historyOpName}>{entry.operation}</span>
// //                               <span style={s.historyTime}>{entry.time}</span>
// //                             </div>
// //                             <div style={s.historyVectors}>
// //                               {formatHistoryInputs(entry)}
// //                             </div>
// //                             <div style={s.historyResult}>
// //                               = {formatHistoryResult(entry.result)}
// //                             </div>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                       <button
// //                         onClick={() => { setHistory([]); setHistoryOpen(false); }}
// //                         style={s.historyClearBtn}
// //                       >
// //                         Clear history
// //                       </button>
// //                     </>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import computeVector from './computeVector';
// import {
//   descriptions as defaultDescriptions,
//   steps as operationSteps,
// } from './vectorExplanations';

// /* ── styles ───────────────────────────────────────────────────── */

// const s = {
//   /* — wrappers — */
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

//   /* — initial card grid — */
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
//     outline: 'none',
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

//   /* — left panel — */
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

//   /* — right (explanation) panel — */
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
//   vectorGrid: {
//     display: 'grid',
//     gap: '16px',
//     marginBottom: '24px',
//   },
//   vectorGridSingle: { gridTemplateColumns: '1fr' },
//   vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
//   vectorGridMultiple: { gridTemplateColumns: '1fr' },
//   vectorCard: {
//     backgroundColor: '#f8f9fa',
//     padding: '16px',
//     borderRadius: '8px',
//     border: '1px solid #e5e7eb',
//   },
//   vectorHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '12px',
//   },
//   vectorName: {
//     margin: '0',
//     fontSize: '1.05rem',
//     fontWeight: '600',
//     color: '#374151',
//   },
//   vectorHeaderButtons: {
//     display: 'flex',
//     gap: '6px',
//     alignItems: 'center',
//   },
//   vectorComponents: {
//     display: 'flex',
//     gap: '8px',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   componentInput: {
//     width: '56px',
//     padding: '6px',
//     border: '1px solid #d1d5db',
//     borderRadius: '4px',
//     textAlign: 'center',
//     fontSize: '0.9rem',
//     outline: 'none',
//   },
//   componentInputError: {
//     borderColor: '#dc2626',
//     backgroundColor: '#fef2f2',
//   },
//   separator: { color: '#6b7280' },
//   bracket: { fontWeight: '500' },
//   addVectorContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '24px',
//   },
//   addVectorButton: {
//     padding: '8px 16px',
//     border: '2px dashed #4285f4',
//     borderRadius: '8px',
//     backgroundColor: 'transparent',
//     color: '#4285f4',
//     fontSize: '0.9rem',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     outline: 'none',
//   },
//   operationsSection: { marginBottom: '24px' },
//   operationsTitle: {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#1f2937',
//     marginBottom: '16px',
//   },
//   operationsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
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
//     outline: 'none',
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
//     outline: 'none',
//   },
//   executeButtonDisabled: {
//     backgroundColor: '#9ca3af',
//     cursor: 'not-allowed',
//   },
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
//   buttonDanger: {
//     padding: '8px 16px',
//     borderRadius: '6px',
//     fontSize: '0.9rem',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     border: '2px solid #dc2626',
//     backgroundColor: 'transparent',
//     color: '#dc2626',
//     outline: 'none',
//   },
//   clearVectorButton: {
//     padding: '3px 8px',
//     border: '1px solid #9ca3af',
//     borderRadius: '4px',
//     backgroundColor: 'transparent',
//     color: '#6b7280',
//     fontSize: '0.75rem',
//     cursor: 'pointer',
//     transition: 'all 0.15s ease',
//     outline: 'none',
//   },
//   randomVectorButton: {
//     padding: '3px 8px',
//     border: '1px solid #4285f4',
//     borderRadius: '4px',
//     backgroundColor: 'transparent',
//     color: '#4285f4',
//     fontSize: '0.75rem',
//     cursor: 'pointer',
//     transition: 'all 0.15s ease',
//     outline: 'none',
//   },
//   removeButton: {
//     padding: '3px 8px',
//     border: 'none',
//     borderRadius: '4px',
//     backgroundColor: '#dc2626',
//     color: 'white',
//     fontSize: '0.75rem',
//     cursor: 'pointer',
//     outline: 'none',
//   },
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
//   dimControls: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '16px',
//     marginBottom: '24px',
//     padding: '14px',
//     backgroundColor: '#f3f4f6',
//     borderRadius: '8px',
//     border: '1px solid #d1d5db',
//   },
//   dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
//   dimHint: { fontSize: '0.85rem', color: '#6b7280' },

//   /* — coefficient input (Linear Combination) — */
//   coefficientRow: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     marginBottom: '8px',
//   },
//   coefficientLabel: {
//     fontSize: '0.85rem',
//     fontWeight: '600',
//     color: '#4285f4',
//     minWidth: '24px',
//   },
//   coefficientInput: {
//     width: '64px',
//     padding: '6px',
//     border: '2px solid #4285f4',
//     borderRadius: '4px',
//     textAlign: 'center',
//     fontSize: '0.9rem',
//     outline: 'none',
//     backgroundColor: '#f0f7ff',
//   },
//   coefficientHint: {
//     fontSize: '0.8rem',
//     color: '#6b7280',
//   },

//   /* — extra inputs section (coefficients / target) — */
//   extraInputsSection: {
//     backgroundColor: '#fffbeb',
//     border: '1px solid #fde68a',
//     borderRadius: '8px',
//     padding: '16px',
//     marginBottom: '24px',
//   },
//   extraInputsTitle: {
//     fontSize: '0.95rem',
//     fontWeight: '600',
//     color: '#92400e',
//     margin: '0 0 12px 0',
//   },

//   /* — result formatting — */
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
//   },
//   resultError: {
//     color: '#dc2626',
//     fontWeight: '500',
//     fontSize: '0.95rem',
//   },
//   matrixTable: {
//     borderCollapse: 'collapse',
//     fontFamily: 'monospace',
//     fontSize: '0.95rem',
//   },
//   matrixCell: {
//     padding: '6px 12px',
//     textAlign: 'right',
//     border: '1px solid #e5e7eb',
//   },
//   matrixRowLabel: {
//     padding: '6px 10px',
//     textAlign: 'left',
//     fontWeight: '600',
//     color: '#4285f4',
//     border: '1px solid #e5e7eb',
//     backgroundColor: '#f0f7ff',
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
//     outline: 'none',
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
//   historyVectors: {
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
//     outline: 'none',
//   },
// };

// const spinKeyframes = `
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }`;

// /* ── Tooltip component ────────────────────────────────────────── */

// const tipStyles = {
//   wrap: {
//     position: 'relative',
//     display: 'inline-flex',
//     alignItems: 'center',
//   },
//   icon: {
//     width: '16px',
//     height: '16px',
//     borderRadius: '50%',
//     border: '1.5px solid #9ca3af',
//     background: 'transparent',
//     color: '#9ca3af',
//     fontSize: '10px',
//     fontWeight: '600',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'help',
//     flexShrink: 0,
//     transition: 'border-color 0.15s, color 0.15s, background 0.15s',
//     outline: 'none',
//     padding: 0,
//   },
//   iconHover: {
//     borderColor: '#4285f4',
//     color: '#4285f4',
//     background: 'rgba(66,133,244,0.08)',
//   },
//   bubble: {
//     position: 'absolute',
//     bottom: 'calc(100% + 8px)',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     backgroundColor: '#1f2937',
//     color: 'white',
//     fontSize: '12px',
//     lineHeight: '1.5',
//     padding: '8px 12px',
//     borderRadius: '8px',
//     width: '220px',
//     zIndex: 10,
//     pointerEvents: 'none',
//   },
//   arrow: {
//     content: '',
//     position: 'absolute',
//     top: '100%',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     borderWidth: '5px',
//     borderStyle: 'solid',
//     borderColor: '#1f2937 transparent transparent transparent',
//   },
// };

// function Tooltip({ text }) {
//   const [show, setShow] = useState(false);
//   if (!text) return null;
//   return (
//     <span style={tipStyles.wrap}>
//       <button
//         style={{ ...tipStyles.icon, ...(show ? tipStyles.iconHover : {}) }}
//         onMouseEnter={() => setShow(true)}
//         onMouseLeave={() => setShow(false)}
//         onFocus={() => setShow(true)}
//         onBlur={() => setShow(false)}
//         tabIndex={0}
//         aria-label="Help"
//       >
//         ?
//       </button>
//       {show && (
//         <span style={tipStyles.bubble}>
//           {text}
//           <span style={tipStyles.arrow} />
//         </span>
//       )}
//     </span>
//   );
// }

// /* ── helpers for history ─────────────────────────────────────── */

// function fmtVecCompact(v) {
//   return '(' + v.map(c => {
//     if (Number.isInteger(c)) return String(c);
//     return parseFloat(c.toFixed(4)).toString();
//   }).join(', ') + ')';
// }

// function formatHistoryResult(res) {
//   if (res.type === 'scalar') return String(res.value);
//   if (res.type === 'vector') return fmtVecCompact(res.value);
//   if (res.type === 'boolean') return res.value ? '\u2713 TRUE' : '\u2717 FALSE';
//   if (res.type === 'matrix') return `${res.value.length}\u00D7${res.value[0].length} matrix`;
//   return String(res.value);
// }

// function formatHistoryInputs(entry) {
//   const parts = entry.vectors.map((v, i) =>
//     `${String.fromCharCode(65 + i)}=${fmtVecCompact(v)}`
//   );
//   if (entry.coefficients) {
//     parts.push('c=[' + entry.coefficients.map(c => {
//       if (Number.isInteger(c)) return String(c);
//       return parseFloat(c.toFixed(4)).toString();
//     }).join(', ') + ']');
//   }
//   if (entry.targetVector) {
//     parts.push('t=' + fmtVecCompact(entry.targetVector));
//   }
//   return parts.join('  ');
// }

// /* ── component ────────────────────────────────────────────────── */

// export default function VectorCalculator({ descriptions: descriptionsProp } = {}) {
//   const [step, setStep] = useState('operation-type');
//   const [operationType, setOperationType] = useState('');
//   const [dimensionality, setDimensionality] = useState(3);
//   const [vectors, setVectors] = useState([]);
//   const [selectedOperation, setSelectedOperation] = useState('');
//   const [result, setResult] = useState(null);
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [coefficients, setCoefficients] = useState([]);
//   const [targetVector, setTargetVector] = useState([]);
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

//   const operationTypes = [
//     { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
//     { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot & cross product' },
//     { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
//   ];

//   const operationsByType = {
//     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
//     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
//     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
//   };

//   /* ── helpers ── */

//   const validateInputs = () => {
//     const newErrors = [];
//     if (!selectedOperation) newErrors.push('Please select an operation');
//     vectors.forEach((vector, index) => {
//       const name = String.fromCharCode(65 + index);
//       const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
//       const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
//       if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
//       if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
//     });
//     if (selectedOperation === 'Cross Product' && dimensionality !== 3)
//       newErrors.push('Cross product is only defined for 3D vectors');
//     if (operationType === 'multiple' && vectors.length < 2)
//       newErrors.push('Multiple vector operations require at least 2 vectors');

//     if (selectedOperation === 'Linear Combination') {
//       const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
//       if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
//     }

//     if (selectedOperation === 'Span Check') {
//       const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
//       const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
//       if (emptyTarget) newErrors.push('Target vector has empty components');
//       if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
//     }

//     setErrors(newErrors);
//     return newErrors.length === 0;
//   };

//   const handleReset = () => {
//     setStep('operation-type');
//     setOperationType('');
//     setDimensionality(3);
//     setVectors([]);
//     setSelectedOperation('');
//     setResult(null);
//     setErrors([]);
//     setIsLoading(false);
//     setCoefficients([]);
//     setTargetVector([]);
//     setComputedSteps(null);
//     // history intentionally NOT cleared — persists through reset
//   };

//   const clearVector = (vi) => {
//     const updated = [...vectors];
//     const dim = updated[vi].components.length;
//     updated[vi] = { ...updated[vi], components: new Array(dim).fill('') };
//     setVectors(updated);
//   };

//   const randomizeVector = (vi) => {
//     const updated = [...vectors];
//     const dim = updated[vi].components.length;
//     updated[vi] = {
//       ...updated[vi],
//       components: Array.from({ length: dim }, () => String(Math.floor(Math.random() * 21) - 10)),
//     };
//     setVectors(updated);
//   };

//   const handleOperationTypeSelect = (type) => {
//     setOperationType(type);
//     setSelectedOperation('');
//     setErrors([]);
//     setResult(null);
//     setComputedSteps(null);
//     let count = 1;
//     if (type === 'two') count = 2;
//     if (type === 'multiple') count = 2;
//     const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
//     const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
//     setVectors(newVectors);
//     setCoefficients(new Array(count).fill(''));
//     setTargetVector(new Array(dim).fill(''));
//     setStep('input');
//   };

//   const updateVectorComponent = (vi, ci, value) => {
//     const updated = [...vectors];
//     updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
//     updated[vi].components[ci] = value;
//     setVectors(updated);
//     if (errors.length > 0) setErrors([]);
//   };

//   const updateCoefficient = (index, value) => {
//     const updated = [...coefficients];
//     updated[index] = value;
//     setCoefficients(updated);
//     if (errors.length > 0) setErrors([]);
//   };

//   const updateTargetComponent = (ci, value) => {
//     const updated = [...targetVector];
//     updated[ci] = value;
//     setTargetVector(updated);
//     if (errors.length > 0) setErrors([]);
//   };

//   const addVector = () => {
//     if (operationType === 'multiple' && vectors.length < 10) {
//       const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
//       setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
//       setCoefficients([...coefficients, '']);
//     }
//   };

//   const removeVector = (i) => {
//     if (operationType === 'multiple' && vectors.length > 2) {
//       setVectors(vectors.filter((_, idx) => idx !== i));
//       setCoefficients(coefficients.filter((_, idx) => idx !== i));
//     }
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
//       const numericVectors = vectors.map(v =>
//         v.components.map(c => parseFloat(c))
//       );

//       const params = {
//         operation: selectedOperation,
//         operationType,
//         dimensionality,
//         vectors: numericVectors,
//       };

//       if (selectedOperation === 'Linear Combination') {
//         params.coefficients = coefficients.map(c => parseFloat(c));
//       }
//       if (selectedOperation === 'Span Check') {
//         params.targetVector = targetVector.map(c => parseFloat(c));
//       }

//       const res = computeVector(params);
//       setResult(res);

//       if (res.type === 'error') {
//         setErrors([res.value]);
//       } else {
//         // Push to history on success
//         const entry = {
//           id: Date.now(),
//           operation: selectedOperation,
//           vectors: numericVectors,
//           result: res,
//           time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
//         };
//         if (params.coefficients) entry.coefficients = params.coefficients;
//         if (params.targetVector) entry.targetVector = params.targetVector;
//         setHistory(prev => [entry, ...prev]);
//       }

//       // Generate dynamic steps
//       const stepFn = operationSteps[operationType]?.[selectedOperation];
//       if (stepFn) {
//         const extras = {
//           coefficients: params.coefficients,
//           targetVector: params.targetVector,
//         };
//         const stepLines = stepFn(numericVectors, res, extras);
//         setComputedSteps(stepLines);
//       }

//       setIsLoading(false);
//     }, 150);
//   };

//   const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

//   const getVectorGridExtra = () => {
//     if (operationType === 'single') return s.vectorGridSingle;
//     if (operationType === 'two') return s.vectorGridTwo;
//     return s.vectorGridMultiple;
//   };

//   /* ── explanation: description (from merged, overridable) ── */
//   const getDescription = () => {
//     const pool = mergedDescriptions[operationType];
//     if (!pool) return '';
//     if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
//     return pool._default;
//   };

//   const getExplanationHeading = () => {
//     if (selectedOperation) return selectedOperation;
//     const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
//     return labels[operationType] || 'Explanation';
//   };

//   /* ── left-panel button style ── */
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
//     outline: 'none',
//   });
//   const catLabelStyle = (id) => ({
//     fontSize: '0.9rem',
//     fontWeight: '600',
//     color: operationType === id ? '#4285f4' : '#1f2937',
//     marginBottom: '4px',
//   });
//   const catDescStyle = { fontSize: '0.78rem', color: '#6b7280', lineHeight: '1.35' };

//   const dimInputStyle = {
//     width: '64px',
//     padding: '8px 10px',
//     border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
//     borderRadius: '8px',
//     fontSize: '1rem',
//     textAlign: 'center',
//     outline: 'none',
//   };

//   /* ── render a single vector card ── */
//   const renderVector = (vector, vi) => (
//     <div key={vector.id} style={s.vectorCard}>
//       <div style={s.vectorHeader}>
//         <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
//         <div style={s.vectorHeaderButtons}>
//           <button
//             onClick={() => randomizeVector(vi)}
//             style={s.randomVectorButton}
//             title="Fill with random numbers"
//           >
//             Random
//           </button>
//           <button
//             onClick={() => clearVector(vi)}
//             style={s.clearVectorButton}
//             title="Clear this vector"
//           >
//             Clear
//           </button>
//           {operationType === 'multiple' && vectors.length > 2 && (
//             <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
//           )}
//           <Tooltip text="Random fills with integers from -10 to 10. Clear empties all fields." />
//         </div>
//       </div>
//       <div style={s.vectorComponents}>
//         <span style={s.bracket}>(</span>
//         {vector.components.map((comp, ci) => (
//           <React.Fragment key={ci}>
//             <input
//               type="number"
//               step="any"
//               value={comp}
//               onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
//               placeholder="0"
//               style={{
//                 ...s.componentInput,
//                 ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
//               }}
//             />
//             {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
//           </React.Fragment>
//         ))}
//         <span style={s.bracket}>)</span>
//       </div>
//     </div>
//   );

//   /* ── render result based on type ── */
//   const renderResult = () => {
//     if (!result) return 'Select vectors and operation, then click Execute';

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
//           <span style={s.resultValue}>({result.value.join(', ')})</span>
//         </>
//       );
//     }

//     if (result.type === 'boolean') {
//       return (
//         <>
//           <span style={s.resultLabel}>{result.label}</span>
//           <span style={result.value ? s.resultTrue : s.resultFalse}>
//             {result.value ? '✓ TRUE' : '✗ FALSE'}
//           </span>
//           <span style={s.resultDetail}>{result.detail}</span>
//         </>
//       );
//     }

//     if (result.type === 'matrix') {
//       return (
//         <>
//           <span style={s.resultLabel}>{result.label}</span>
//           <table style={s.matrixTable}>
//             <tbody>
//               {result.value.map((row, ri) => (
//                 <tr key={ri}>
//                   {result.rowLabels && (
//                     <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
//                   )}
//                   {row.map((val, ci) => (
//                     <td key={ci} style={s.matrixCell}>{val}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
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
//           <h1 style={s.title}>Vector Calculator</h1>
//           <p style={s.subtitle}>Professional vector operations calculator</p>
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
//                 <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
//                 <div style={s.buttonGroup}>
//                   <Tooltip text="Enter vector components below. Each input field represents one dimension. Use Random to fill with test values, or Clear to reset." />
//                   <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
//                 </div>
//               </div>

//               {/* Dimensionality */}
//               <div style={s.dimControls}>
//                 <label style={s.dimLabel}>Dimensions:</label>
//                 <input
//                   type="number"
//                   min="2"
//                   max="10"
//                   value={dimensionality}
//                   onChange={(e) => {
//                     const raw = e.target.value;
//                     if (raw === '') { setDimensionality(''); return; }
//                     const val = parseInt(raw);
//                     setDimensionality(val);
//                     if (val >= 2 && val <= 10) {
//                       setVectors(vectors.map(v => {
//                         const nc = new Array(val).fill('');
//                         for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
//                         return { ...v, components: nc };
//                       }));
//                       const nt = new Array(val).fill('');
//                       for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
//                       setTargetVector(nt);
//                       setErrors([]);
//                     } else {
//                       setErrors(['Dimensionality must be between 2 and 10']);
//                     }
//                   }}
//                   style={dimInputStyle}
//                 />
//                 <span style={s.dimHint}>(2–10)</span>
//                 <Tooltip text="Set the number of components per vector. Changing this resizes all vectors, preserving existing values that fit." />
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

//               {/* Vectors */}
//               <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
//                 {vectors.map((v, i) => renderVector(v, i))}
//               </div>

//               {/* Add vector */}
//               {operationType === 'multiple' && vectors.length < 10 && (
//                 <div style={s.addVectorContainer}>
//                   <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
//                 </div>
//               )}

//               {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
//               {selectedOperation === 'Linear Combination' && (
//                 <div style={s.extraInputsSection}>
//                   <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
//                   {vectors.map((v, i) => (
//                     <div key={i} style={s.coefficientRow}>
//                       <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
//                       <input
//                         type="number"
//                         step="any"
//                         value={coefficients[i] || ''}
//                         onChange={(e) => updateCoefficient(i, e.target.value)}
//                         placeholder="0"
//                         style={s.coefficientInput}
//                       />
//                       <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* ── Extra inputs: Target Vector (Span Check) ── */}
//               {selectedOperation === 'Span Check' && (
//                 <div style={s.extraInputsSection}>
//                   <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
//                   <div style={s.vectorComponents}>
//                     <span style={s.bracket}>(</span>
//                     {targetVector.map((comp, ci) => (
//                       <React.Fragment key={ci}>
//                         <input
//                           type="number"
//                           step="any"
//                           value={comp}
//                           onChange={(e) => updateTargetComponent(ci, e.target.value)}
//                           placeholder="0"
//                           style={{
//                             ...s.componentInput,
//                             borderColor: '#f59e0b',
//                           }}
//                         />
//                         {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
//                       </React.Fragment>
//                     ))}
//                     <span style={s.bracket}>)</span>
//                   </div>
//                 </div>
//               )}

//               {/* Operations */}
//               <div style={s.operationsSection}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
//                   <h3 style={{ ...s.operationsTitle, marginBottom: 0 }}>Available Operations</h3>
//                   <Tooltip text={selectedOperation ? getDescription() : 'Select an operation to see its description. Grayed-out operations require specific conditions (e.g. 3D vectors for Cross Product).'} />
//                 </div>
//                 <div style={s.operationsGrid}>
//                   {getAvailableOperations().map((op) => {
//                     const sel = selectedOperation === op;
//                     const dis = op === 'Cross Product' && dimensionality !== 3;
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
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
//                   <h4 style={{ ...s.resultsTitle, margin: 0 }}>Result</h4>
//                   <Tooltip text="Results appear here after clicking Execute. Scalars show a single number, vectors show components in parentheses, and boolean results show pass/fail." />
//                 </div>
//                 <div style={s.resultsContent}>
//                   {renderResult()}
//                 </div>
//               </div>
//             </div>

//             {/* ▸ RIGHT — explanation panel */}
//             <div style={s.explanationPanel}>
//               {/* Theory (from merged descriptions — overridable via props) */}
//               <h4 style={s.explanationTitle}>{getExplanationHeading()}</h4>
//               <p style={s.explanationBody}>{getDescription()}</p>

//               {/* Steps (dynamic — always from vectorExplanations.js, never overridable) */}
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
//                             <div style={s.historyVectors}>
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
import computeVector from './computeVector';
import {
  descriptions as defaultDescriptions,
  steps as operationSteps,
} from './vectorExplanations';

/* ── styles ───────────────────────────────────────────────────── */

const s = {
  /* — wrappers — */
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

  /* — initial card grid — */
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

  /* — left panel — */
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

  /* — right (explanation) panel — */
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
  vectorGrid: {
    display: 'grid',
    gap: '16px',
    marginBottom: '24px',
  },
  vectorGridSingle: { gridTemplateColumns: '1fr' },
  vectorGridTwo: { gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' },
  vectorGridMultiple: { gridTemplateColumns: '1fr' },
  vectorCard: {
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  vectorHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  vectorName: {
    margin: '0',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#374151',
  },
  vectorHeaderButtons: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  },
  vectorComponents: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  componentInput: {
    width: '56px',
    padding: '6px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '0.9rem',
    outline: 'none',
  },
  componentInputError: {
    borderColor: '#dc2626',
    backgroundColor: '#fef2f2',
  },
  separator: { color: '#6b7280' },
  bracket: { fontWeight: '500' },
  addVectorContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  addVectorButton: {
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
  operationsSection: { marginBottom: '24px' },
  operationsTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '16px',
  },
  operationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
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
  clearVectorButton: {
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
  randomVectorButton: {
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
  dimControls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
    padding: '14px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
  },
  dimLabel: { fontSize: '0.95rem', fontWeight: '500', color: '#374151' },
  dimHint: { fontSize: '0.85rem', color: '#6b7280' },

  /* — coefficient input (Linear Combination) — */
  coefficientRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  coefficientLabel: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#4285f4',
    minWidth: '24px',
  },
  coefficientInput: {
    width: '64px',
    padding: '6px',
    border: '2px solid #4285f4',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '0.9rem',
    outline: 'none',
    backgroundColor: '#f0f7ff',
  },
  coefficientHint: {
    fontSize: '0.8rem',
    color: '#6b7280',
  },

  /* — extra inputs section (coefficients / target) — */
  extraInputsSection: {
    backgroundColor: '#fffbeb',
    border: '1px solid #fde68a',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
  },
  extraInputsTitle: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#92400e',
    margin: '0 0 12px 0',
  },

  /* — result formatting — */
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
  },
  resultError: {
    color: '#dc2626',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  matrixTable: {
    borderCollapse: 'collapse',
    fontFamily: 'monospace',
    fontSize: '0.95rem',
  },
  matrixCell: {
    padding: '6px 12px',
    textAlign: 'right',
    border: '1px solid #e5e7eb',
  },
  matrixRowLabel: {
    padding: '6px 10px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#4285f4',
    border: '1px solid #e5e7eb',
    backgroundColor: '#f0f7ff',
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
  historyVectors: {
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
}
button:focus, button:focus-visible {
  outline: none;
  box-shadow: none;
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

function fmtVecCompact(v) {
  return '(' + v.map(c => {
    if (Number.isInteger(c)) return String(c);
    return parseFloat(c.toFixed(4)).toString();
  }).join(', ') + ')';
}

function formatHistoryResult(res) {
  if (res.type === 'scalar') return String(res.value);
  if (res.type === 'vector') return fmtVecCompact(res.value);
  if (res.type === 'boolean') return res.value ? '\u2713 TRUE' : '\u2717 FALSE';
  if (res.type === 'matrix') return `${res.value.length}\u00D7${res.value[0].length} matrix`;
  return String(res.value);
}

function formatHistoryInputs(entry) {
  const parts = entry.vectors.map((v, i) =>
    `${String.fromCharCode(65 + i)}=${fmtVecCompact(v)}`
  );
  if (entry.coefficients) {
    parts.push('c=[' + entry.coefficients.map(c => {
      if (Number.isInteger(c)) return String(c);
      return parseFloat(c.toFixed(4)).toString();
    }).join(', ') + ']');
  }
  if (entry.targetVector) {
    parts.push('t=' + fmtVecCompact(entry.targetVector));
  }
  return parts.join('  ');
}

/* ── component ────────────────────────────────────────────────── */

export default function VectorCalculator({ descriptions: descriptionsProp } = {}) {
  const [step, setStep] = useState('operation-type');
  const [operationType, setOperationType] = useState('');
  const [dimensionality, setDimensionality] = useState(3);
  const [vectors, setVectors] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [coefficients, setCoefficients] = useState([]);
  const [targetVector, setTargetVector] = useState([]);
  const [computedSteps, setComputedSteps] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyOpen, setHistoryOpen] = useState(false);

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

  const operationTypes = [
    { id: 'single', label: 'Single Vector', description: 'Magnitude, unit vector, normalization' },
    { id: 'two', label: 'Two Vectors', description: 'Add, subtract, dot & cross product' },
    { id: 'multiple', label: 'Multiple Vectors', description: 'Linear combinations, spans, independence' },
  ];

  const operationsByType = {
    single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
    two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
    multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form'],
  };

  /* ── helpers ── */

  const validateInputs = () => {
    const newErrors = [];
    if (!selectedOperation) newErrors.push('Please select an operation');
    vectors.forEach((vector, index) => {
      const name = String.fromCharCode(65 + index);
      const empty = vector.components.filter(c => c === '' || c === null || c === undefined).length;
      const valid = vector.components.filter(c => !isNaN(parseFloat(c)) && isFinite(c)).length;
      if (empty > 0) newErrors.push(`Vector ${name} has empty components`);
      if (valid !== vector.components.length) newErrors.push(`Vector ${name} contains invalid numbers`);
    });
    if (selectedOperation === 'Cross Product' && dimensionality !== 3)
      newErrors.push('Cross product is only defined for 3D vectors');
    if (operationType === 'multiple' && vectors.length < 2)
      newErrors.push('Multiple vector operations require at least 2 vectors');

    if (selectedOperation === 'Linear Combination') {
      const invalidCoeffs = coefficients.some(c => c === '' || isNaN(parseFloat(c)));
      if (invalidCoeffs) newErrors.push('All coefficients must be valid numbers');
    }

    if (selectedOperation === 'Span Check') {
      const emptyTarget = targetVector.some(c => c === '' || c === null || c === undefined);
      const invalidTarget = targetVector.some(c => isNaN(parseFloat(c)) || !isFinite(parseFloat(c)));
      if (emptyTarget) newErrors.push('Target vector has empty components');
      if (invalidTarget) newErrors.push('Target vector contains invalid numbers');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleReset = () => {
    setStep('operation-type');
    setOperationType('');
    setDimensionality(3);
    setVectors([]);
    setSelectedOperation('');
    setResult(null);
    setErrors([]);
    setIsLoading(false);
    setCoefficients([]);
    setTargetVector([]);
    setComputedSteps(null);
    // history intentionally NOT cleared — persists through reset
  };

  const clearVector = (vi) => {
    const updated = [...vectors];
    const dim = updated[vi].components.length;
    updated[vi] = { ...updated[vi], components: new Array(dim).fill('') };
    setVectors(updated);
  };

  const randomizeVector = (vi) => {
    const updated = [...vectors];
    const dim = updated[vi].components.length;
    updated[vi] = {
      ...updated[vi],
      components: Array.from({ length: dim }, () => String(Math.floor(Math.random() * 21) - 10)),
    };
    setVectors(updated);
  };

  const handleOperationTypeSelect = (type) => {
    setOperationType(type);
    setSelectedOperation('');
    setErrors([]);
    setResult(null);
    setComputedSteps(null);
    let count = 1;
    if (type === 'two') count = 2;
    if (type === 'multiple') count = 2;
    const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
    const newVectors = Array(count).fill(null).map((_, i) => ({ id: i, components: new Array(dim).fill('') }));
    setVectors(newVectors);
    setCoefficients(new Array(count).fill(''));
    setTargetVector(new Array(dim).fill(''));
    setStep('input');
  };

  const updateVectorComponent = (vi, ci, value) => {
    const updated = [...vectors];
    updated[vi] = { ...updated[vi], components: [...updated[vi].components] };
    updated[vi].components[ci] = value;
    setVectors(updated);
    if (errors.length > 0) setErrors([]);
  };

  const updateCoefficient = (index, value) => {
    const updated = [...coefficients];
    updated[index] = value;
    setCoefficients(updated);
    if (errors.length > 0) setErrors([]);
  };

  const updateTargetComponent = (ci, value) => {
    const updated = [...targetVector];
    updated[ci] = value;
    setTargetVector(updated);
    if (errors.length > 0) setErrors([]);
  };

  const addVector = () => {
    if (operationType === 'multiple' && vectors.length < 10) {
      const dim = (typeof dimensionality === 'number' && dimensionality >= 2) ? dimensionality : 3;
      setVectors([...vectors, { id: vectors.length, components: new Array(dim).fill('') }]);
      setCoefficients([...coefficients, '']);
    }
  };

  const removeVector = (i) => {
    if (operationType === 'multiple' && vectors.length > 2) {
      setVectors(vectors.filter((_, idx) => idx !== i));
      setCoefficients(coefficients.filter((_, idx) => idx !== i));
    }
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
      const numericVectors = vectors.map(v =>
        v.components.map(c => parseFloat(c))
      );

      const params = {
        operation: selectedOperation,
        operationType,
        dimensionality,
        vectors: numericVectors,
      };

      if (selectedOperation === 'Linear Combination') {
        params.coefficients = coefficients.map(c => parseFloat(c));
      }
      if (selectedOperation === 'Span Check') {
        params.targetVector = targetVector.map(c => parseFloat(c));
      }

      const res = computeVector(params);
      setResult(res);

      if (res.type === 'error') {
        setErrors([res.value]);
      } else {
        // Push to history on success
        const entry = {
          id: Date.now(),
          operation: selectedOperation,
          vectors: numericVectors,
          result: res,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        };
        if (params.coefficients) entry.coefficients = params.coefficients;
        if (params.targetVector) entry.targetVector = params.targetVector;
        setHistory(prev => [entry, ...prev]);
      }

      // Generate dynamic steps
      const stepFn = operationSteps[operationType]?.[selectedOperation];
      if (stepFn) {
        const extras = {
          coefficients: params.coefficients,
          targetVector: params.targetVector,
        };
        const stepLines = stepFn(numericVectors, res, extras);
        setComputedSteps(stepLines);
      }

      setIsLoading(false);
    }, 150);
  };

  const canExecute = () => selectedOperation && vectors.length > 0 && !isLoading;

  const getVectorGridExtra = () => {
    if (operationType === 'single') return s.vectorGridSingle;
    if (operationType === 'two') return s.vectorGridTwo;
    return s.vectorGridMultiple;
  };

  /* ── explanation: description (from merged, overridable) ── */
  const getDescription = () => {
    const pool = mergedDescriptions[operationType];
    if (!pool) return '';
    if (selectedOperation && pool[selectedOperation]) return pool[selectedOperation];
    return pool._default;
  };

  const getExplanationHeading = () => {
    if (selectedOperation) return selectedOperation;
    const labels = { single: 'Single Vector Ops', two: 'Two Vector Ops', multiple: 'Multiple Vector Ops' };
    return labels[operationType] || 'Explanation';
  };

  /* ── left-panel button style ── */
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

  const dimInputStyle = {
    width: '64px',
    padding: '8px 10px',
    border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    textAlign: 'center',
    outline: 'none',
  };

  /* ── render a single vector card ── */
  const renderVector = (vector, vi) => (
    <div key={vector.id} style={s.vectorCard}>
      <div style={s.vectorHeader}>
        <h4 style={s.vectorName}>Vector {String.fromCharCode(65 + vi)}</h4>
        <div style={s.vectorHeaderButtons}>
          <button
            onClick={() => randomizeVector(vi)}
            style={s.randomVectorButton}
            title="Fill with random numbers"
          >
            Random
          </button>
          <button
            onClick={() => clearVector(vi)}
            style={s.clearVectorButton}
            title="Clear this vector"
          >
            Clear
          </button>
          {operationType === 'multiple' && vectors.length > 2 && (
            <button onClick={() => removeVector(vi)} style={s.removeButton}>Remove</button>
          )}
          <Tooltip text="Random fills with integers from -10 to 10. Clear empties all fields." />
        </div>
      </div>
      <div style={s.vectorComponents}>
        <span style={s.bracket}>(</span>
        {vector.components.map((comp, ci) => (
          <React.Fragment key={ci}>
            <input
              type="number"
              step="any"
              value={comp}
              onChange={(e) => updateVectorComponent(vi, ci, e.target.value)}
              placeholder="0"
              style={{
                ...s.componentInput,
                ...(comp !== '' && (isNaN(parseFloat(comp)) || !isFinite(comp)) ? s.componentInputError : {}),
              }}
            />
            {ci < vector.components.length - 1 && <span style={s.separator}>,</span>}
          </React.Fragment>
        ))}
        <span style={s.bracket}>)</span>
      </div>
    </div>
  );

  /* ── render result based on type ── */
  const renderResult = () => {
    if (!result) return 'Select vectors and operation, then click Execute';

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
          <span style={s.resultValue}>({result.value.join(', ')})</span>
        </>
      );
    }

    if (result.type === 'boolean') {
      return (
        <>
          <span style={s.resultLabel}>{result.label}</span>
          <span style={result.value ? s.resultTrue : s.resultFalse}>
            {result.value ? '✓ TRUE' : '✗ FALSE'}
          </span>
          <span style={s.resultDetail}>{result.detail}</span>
        </>
      );
    }

    if (result.type === 'matrix') {
      return (
        <>
          <span style={s.resultLabel}>{result.label}</span>
          <table style={s.matrixTable}>
            <tbody>
              {result.value.map((row, ri) => (
                <tr key={ri}>
                  {result.rowLabels && (
                    <td style={s.matrixRowLabel}>{result.rowLabels[ri]}</td>
                  )}
                  {row.map((val, ci) => (
                    <td key={ci} style={s.matrixCell}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
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
          <h1 style={s.title}>Vector Calculator</h1>
          <p style={s.subtitle}>Professional vector operations calculator</p>
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
                <h2 style={s.inputTitle}>Vector Input ({dimensionality}D)</h2>
                <div style={s.buttonGroup}>
                  <Tooltip text="Enter vector components below. Each input field represents one dimension. Use Random to fill with test values, or Clear to reset." />
                  <button onClick={handleReset} style={s.buttonDanger}>Reset All</button>
                </div>
              </div>

              {/* Dimensionality */}
              <div style={s.dimControls}>
                <label style={s.dimLabel}>Dimensions:</label>
                <input
                  type="number"
                  min="2"
                  max="10"
                  value={dimensionality}
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === '') { setDimensionality(''); return; }
                    const val = parseInt(raw);
                    setDimensionality(val);
                    if (val >= 2 && val <= 10) {
                      setVectors(vectors.map(v => {
                        const nc = new Array(val).fill('');
                        for (let i = 0; i < Math.min(v.components.length, val); i++) nc[i] = v.components[i];
                        return { ...v, components: nc };
                      }));
                      const nt = new Array(val).fill('');
                      for (let i = 0; i < Math.min(targetVector.length, val); i++) nt[i] = targetVector[i];
                      setTargetVector(nt);
                      setErrors([]);
                    } else {
                      setErrors(['Dimensionality must be between 2 and 10']);
                    }
                  }}
                  style={dimInputStyle}
                />
                <span style={s.dimHint}>(2–10)</span>
                <Tooltip text="Set the number of components per vector. Changing this resizes all vectors, preserving existing values that fit." />
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

              {/* Vectors */}
              <div style={{ ...s.vectorGrid, ...getVectorGridExtra() }}>
                {vectors.map((v, i) => renderVector(v, i))}
              </div>

              {/* Add vector */}
              {operationType === 'multiple' && vectors.length < 10 && (
                <div style={s.addVectorContainer}>
                  <button onClick={addVector} style={s.addVectorButton}>+ Add Vector</button>
                </div>
              )}

              {/* ── Extra inputs: Coefficients (Linear Combination) ── */}
              {selectedOperation === 'Linear Combination' && (
                <div style={s.extraInputsSection}>
                  <div style={s.extraInputsTitle}>Coefficients (one per vector)</div>
                  {vectors.map((v, i) => (
                    <div key={i} style={s.coefficientRow}>
                      <span style={s.coefficientLabel}>c{String.fromCharCode(8321 + i)}</span>
                      <input
                        type="number"
                        step="any"
                        value={coefficients[i] || ''}
                        onChange={(e) => updateCoefficient(i, e.target.value)}
                        placeholder="0"
                        style={s.coefficientInput}
                      />
                      <span style={s.coefficientHint}>× Vector {String.fromCharCode(65 + i)}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Extra inputs: Target Vector (Span Check) ── */}
              {selectedOperation === 'Span Check' && (
                <div style={s.extraInputsSection}>
                  <div style={s.extraInputsTitle}>Target Vector (is it in the span?)</div>
                  <div style={s.vectorComponents}>
                    <span style={s.bracket}>(</span>
                    {targetVector.map((comp, ci) => (
                      <React.Fragment key={ci}>
                        <input
                          type="number"
                          step="any"
                          value={comp}
                          onChange={(e) => updateTargetComponent(ci, e.target.value)}
                          placeholder="0"
                          style={{
                            ...s.componentInput,
                            borderColor: '#f59e0b',
                          }}
                        />
                        {ci < targetVector.length - 1 && <span style={s.separator}>,</span>}
                      </React.Fragment>
                    ))}
                    <span style={s.bracket}>)</span>
                  </div>
                </div>
              )}

              {/* Operations */}
              <div style={s.operationsSection}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <h3 style={{ ...s.operationsTitle, marginBottom: 0 }}>Available Operations</h3>
                  <Tooltip text={selectedOperation ? getDescription() : 'Select an operation to see its description. Grayed-out operations require specific conditions (e.g. 3D vectors for Cross Product).'} />
                </div>
                <div style={s.operationsGrid}>
                  {getAvailableOperations().map((op) => {
                    const sel = selectedOperation === op;
                    const dis = op === 'Cross Product' && dimensionality !== 3;
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
                  <Tooltip text="Results appear here after clicking Execute. Scalars show a single number, vectors show components in parentheses, and boolean results show pass/fail." />
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
              <p style={s.explanationBody}>{getDescription()}</p>

              {/* Steps (dynamic — always from vectorExplanations.js, never overridable) */}
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
                            <div style={s.historyVectors}>
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