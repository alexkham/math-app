// // // import React, { useState, useEffect } from 'react';
// // // import styles from './VectorCalculator.module.css';

// // // export default function VectorCalculator() {
// // //   const [step, setStep] = useState('operation-type');
// // //   const [operationType, setOperationType] = useState('');
// // //   const [dimensionality, setDimensionality] = useState(3);
// // //   const [vectors, setVectors] = useState([]);
// // //   const [selectedOperation, setSelectedOperation] = useState('');
// // //   const [result, setResult] = useState('');
// // //   const [errors, setErrors] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const operationTypes = [
// // //     { id: 'single', label: 'Single Vector Operations', description: 'Magnitude, unit vector, normalization' },
// // //     { id: 'two', label: 'Two Vector Operations', description: 'Addition, subtraction, dot product, cross product' },
// // //     { id: 'multiple', label: 'Multiple Vector Operations', description: 'Linear combinations, spans, linear independence' }
// // //   ];

// // //   const operationsByType = {
// // //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// // //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// // //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form']
// // //   };

// // //   // Validation
// // //   const validateInputs = () => {
// // //     const newErrors = [];

// // //     // Check if operation is selected
// // //     if (!selectedOperation) {
// // //       newErrors.push('Please select an operation');
// // //     }

// // //     // Check if vectors have valid components
// // //     vectors.forEach((vector, index) => {
// // //       const vectorName = String.fromCharCode(65 + index);
// // //       const emptyComponents = vector.components.filter(comp => comp === '' || comp === null || comp === undefined).length;
// // //       const validComponents = vector.components.filter(comp => !isNaN(parseFloat(comp)) && isFinite(comp)).length;

// // //       if (emptyComponents > 0) {
// // //         newErrors.push(`Vector ${vectorName} has empty components`);
// // //       }

// // //       if (validComponents !== vector.components.length) {
// // //         newErrors.push(`Vector ${vectorName} contains invalid numbers`);
// // //       }
// // //     });

// // //     // Operation specific validations
// // //     if (selectedOperation === 'Cross Product' && dimensionality !== 3) {
// // //       newErrors.push('Cross product is only defined for 3D vectors');
// // //     }

// // //     if (operationType === 'multiple' && vectors.length < 2) {
// // //       newErrors.push('Multiple vector operations require at least 2 vectors');
// // //     }

// // //     setErrors(newErrors);
// // //     return newErrors.length === 0;
// // //   };

// // //   // Clear all data and reset to start
// // //   const handleReset = () => {
// // //     setStep('operation-type');
// // //     setOperationType('');
// // //     setDimensionality(3);
// // //     setVectors([]);
// // //     setSelectedOperation('');
// // //     setResult('');
// // //     setErrors([]);
// // //     setIsLoading(false);
// // //   };

// // //   // Go back one step
// // //   const handleBack = () => {
// // //     setErrors([]);
// // //     if (step === 'dimensionality') {
// // //       setStep('operation-type');
// // //       setOperationType('');
// // //     } else if (step === 'input') {
// // //       setStep('dimensionality');
// // //       setVectors([]);
// // //       setSelectedOperation('');
// // //       setResult('');
// // //     }
// // //   };

// // //   const handleOperationTypeSelect = (type) => {
// // //     setOperationType(type);
// // //     setStep('dimensionality');
// // //     setErrors([]);
// // //   };

// // //   const handleDimensionalitySet = () => {
// // //     if (dimensionality < 2 || dimensionality > 10) {
// // //       setErrors(['Dimensionality must be between 2 and 10']);
// // //       return;
// // //     }

// // //     // Initialize vectors based on operation type
// // //     let vectorCount = 1;
// // //     if (operationType === 'two') vectorCount = 2;
// // //     if (operationType === 'multiple') vectorCount = 2; // minimum for multiple

// // //     const initialVectors = Array(vectorCount).fill(null).map((_, index) => ({
// // //       id: index,
// // //       components: new Array(dimensionality).fill('')
// // //     }));

// // //     setVectors(initialVectors);
// // //     setStep('input');
// // //     setErrors([]);
// // //   };

// // //   const updateVectorComponent = (vectorIndex, componentIndex, value) => {
// // //     const updatedVectors = [...vectors];
// // //     updatedVectors[vectorIndex].components[componentIndex] = value;
// // //     setVectors(updatedVectors);
    
// // //     // Clear errors when user starts typing
// // //     if (errors.length > 0) {
// // //       setErrors([]);
// // //     }
// // //   };

// // //   const addVector = () => {
// // //     if (operationType === 'multiple' && vectors.length < 10) {
// // //       const newVector = {
// // //         id: vectors.length,
// // //         components: new Array(dimensionality).fill('')
// // //       };
// // //       setVectors([...vectors, newVector]);
// // //     }
// // //   };

// // //   const removeVector = (vectorIndex) => {
// // //     if (operationType === 'multiple' && vectors.length > 2) {
// // //       setVectors(vectors.filter((_, index) => index !== vectorIndex));
// // //     }
// // //   };

// // //   const getAvailableOperations = () => {
// // //     return operationsByType[operationType] || [];
// // //   };

// // //   const handleOperationSelect = (operation) => {
// // //     setSelectedOperation(operation);
// // //     setErrors([]);
// // //   };

// // //   // Placeholder for API call
// // //   const executeOperation = async () => {
// // //     if (!validateInputs()) {
// // //       return;
// // //     }

// // //     setIsLoading(true);
// // //     setResult('');

// // //     try {
// // //       // Prepare data for API
// // //       const operationData = {
// // //         operation: selectedOperation,
// // //         operationType,
// // //         dimensionality,
// // //         vectors: vectors.map(vector => 
// // //           vector.components.map(comp => parseFloat(comp))
// // //         )
// // //       };

// // //       // Simulate API call
// // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // //       // Placeholder result
// // //       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
      
// // //     } catch (error) {
// // //       setErrors(['Failed to execute operation. Please try again.']);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const canExecute = () => {
// // //     return selectedOperation && vectors.length > 0 && !isLoading;
// // //   };

// // //   const getVectorGridClass = () => {
// // //     if (operationType === 'single') return styles.vectorGridSingle;
// // //     if (operationType === 'two') return styles.vectorGridTwo;
// // //     return styles.vectorGridMultiple;
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.main}>
// // //         {/* Header */}
// // //         <div className={styles.header}>
// // //           <h1 className={styles.title}>Vector Calculator</h1>
// // //           <p className={styles.subtitle}>Professional vector operations calculator</p>
// // //         </div>

// // //         {/* Step 1: Operation Type Selection */}
// // //         {step === 'operation-type' && (
// // //           <div>
// // //             <h2 className={styles.stepTitle}>Select Operation Type</h2>
// // //             <div className={styles.operationTypeGrid}>
// // //               {operationTypes.map((type) => (
// // //                 <button
// // //                   key={type.id}
// // //                   onClick={() => handleOperationTypeSelect(type.id)}
// // //                   className={styles.operationTypeCard}
// // //                 >
// // //                   <div className={styles.operationTypeTitle}>
// // //                     {type.label}
// // //                   </div>
// // //                   <div className={styles.operationTypeDescription}>
// // //                     {type.description}
// // //                   </div>
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Step 2: Dimensionality Selection */}
// // //         {step === 'dimensionality' && (
// // //           <div>
// // //             <h2 className={styles.stepTitle}>Set Vector Dimensionality</h2>
// // //             {errors.length > 0 && (
// // //               <div className={styles.errorSection}>
// // //                 <div className={styles.errorTitle}>Please fix the following:</div>
// // //                 <ul className={styles.errorList}>
// // //                   {errors.map((error, index) => (
// // //                     <li key={index} className={styles.errorItem}>{error}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}
// // //             <div className={styles.dimensionalityContainer}>
// // //               <div className={styles.dimensionalityInput}>
// // //                 <label className={styles.dimensionalityLabel}>
// // //                   Number of dimensions (2-10):
// // //                 </label>
// // //                 <input
// // //                   type="number"
// // //                   min="2"
// // //                   max="10"
// // //                   value={dimensionality}
// // //                   onChange={(e) => setDimensionality(parseInt(e.target.value))}
// // //                   className={styles.dimensionalityField}
// // //                 />
// // //               </div>
// // //               <div className={styles.buttonGroup}>
// // //                 <button
// // //                   onClick={handleBack}
// // //                   className={`${styles.button} ${styles.buttonSecondary}`}
// // //                 >
// // //                   Back
// // //                 </button>
// // //                 <button
// // //                   onClick={handleDimensionalitySet}
// // //                   className={`${styles.button} ${styles.buttonPrimary}`}
// // //                 >
// // //                   Continue
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Step 3: Vector Input and Operations */}
// // //         {step === 'input' && (
// // //           <div>
// // //             <div className={styles.inputHeader}>
// // //               <h2 className={styles.inputTitle}>
// // //                 Vector Input ({dimensionality}D)
// // //               </h2>
// // //               <div className={styles.buttonGroup}>
// // //                 <button
// // //                   onClick={handleBack}
// // //                   className={`${styles.button} ${styles.buttonSecondary}`}
// // //                 >
// // //                   Back
// // //                 </button>
// // //                 <button
// // //                   onClick={handleReset}
// // //                   className={`${styles.button} ${styles.buttonDanger}`}
// // //                 >
// // //                   Reset
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Error Display */}
// // //             {errors.length > 0 && (
// // //               <div className={styles.errorSection}>
// // //                 <div className={styles.errorTitle}>Please fix the following:</div>
// // //                 <ul className={styles.errorList}>
// // //                   {errors.map((error, index) => (
// // //                     <li key={index} className={styles.errorItem}>{error}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             {/* Vector Inputs */}
// // //             <div className={`${styles.vectorGrid} ${getVectorGridClass()}`}>
// // //               {vectors.map((vector, vectorIndex) => (
// // //                 <div key={vector.id} className={styles.vectorCard}>
// // //                   <div className={styles.vectorHeader}>
// // //                     <h4 className={styles.vectorName}>
// // //                       Vector {String.fromCharCode(65 + vectorIndex)}
// // //                     </h4>
// // //                     {operationType === 'multiple' && vectors.length > 2 && (
// // //                       <button
// // //                         onClick={() => removeVector(vectorIndex)}
// // //                         className={styles.removeButton}
// // //                       >
// // //                         Remove
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                   <div className={styles.vectorComponents}>
// // //                     <span className={styles.bracket}>(</span>
// // //                     {vector.components.map((component, componentIndex) => (
// // //                       <React.Fragment key={componentIndex}>
// // //                         <input
// // //                           type="number"
// // //                           step="any"
// // //                           value={component}
// // //                           onChange={(e) => updateVectorComponent(vectorIndex, componentIndex, e.target.value)}
// // //                           placeholder={`x${componentIndex + 1}`}
// // //                           className={`${styles.componentInput} ${
// // //                             component !== '' && (isNaN(parseFloat(component)) || !isFinite(component)) ? styles.error : ''
// // //                           }`}
// // //                         />
// // //                         {componentIndex < vector.components.length - 1 && (
// // //                           <span className={styles.separator}>,</span>
// // //                         )}
// // //                       </React.Fragment>
// // //                     ))}
// // //                     <span className={styles.bracket}>)</span>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Add Vector Button for Multiple Operations */}
// // //             {operationType === 'multiple' && vectors.length < 10 && (
// // //               <div className={styles.addVectorContainer}>
// // //                 <button
// // //                   onClick={addVector}
// // //                   className={styles.addVectorButton}
// // //                 >
// // //                   + Add Vector
// // //                 </button>
// // //               </div>
// // //             )}

// // //             {/* Available Operations */}
// // //             <div className={styles.operationsSection}>
// // //               <h3 className={styles.operationsTitle}>Available Operations</h3>
// // //               <div className={styles.operationsGrid}>
// // //                 {getAvailableOperations().map((operation) => (
// // //                   <button
// // //                     key={operation}
// // //                     onClick={() => handleOperationSelect(operation)}
// // //                     className={`${styles.operationButton} ${
// // //                       selectedOperation === operation ? styles.selected : ''
// // //                     } ${
// // //                       operation === 'Cross Product' && dimensionality !== 3 ? styles.disabled : ''
// // //                     }`}
// // //                     disabled={operation === 'Cross Product' && dimensionality !== 3}
// // //                   >
// // //                     {operation}
// // //                   </button>
// // //                 ))}
// // //               </div>

// // //               {/* Execute Button */}
// // //               <div style={{ display: 'flex', justifyContent: 'center' }}>
// // //                 <button
// // //                   onClick={executeOperation}
// // //                   disabled={!canExecute()}
// // //                   className={styles.executeButton}
// // //                 >
// // //                   {isLoading ? (
// // //                     <div className={styles.loading}>
// // //                       <div className={styles.spinner}></div>
// // //                       Calculating...
// // //                     </div>
// // //                   ) : (
// // //                     'Execute Operation'
// // //                   )}
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Results */}
// // //             <div className={styles.resultsSection}>
// // //               <h4 className={styles.resultsTitle}>Result</h4>
// // //               <div className={styles.resultsContent}>
// // //                 {result || 'Select vectors and operation, then click Execute'}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect } from 'react';
// // import styles from './VectorCalculator.module.css';

// // export default function VectorCalculator() {
// //   const [step, setStep] = useState('operation-type');
// //   const [operationType, setOperationType] = useState('');
// //   const [dimensionality, setDimensionality] = useState(3);
// //   const [vectors, setVectors] = useState([]);
// //   const [selectedOperation, setSelectedOperation] = useState('');
// //   const [result, setResult] = useState('');
// //   const [errors, setErrors] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const operationTypes = [
// //     { id: 'single', label: 'Single Vector Operations', description: 'Magnitude, unit vector, normalization' },
// //     { id: 'two', label: 'Two Vector Operations', description: 'Addition, subtraction, dot product, cross product' },
// //     { id: 'multiple', label: 'Multiple Vector Operations', description: 'Linear combinations, spans, linear independence' }
// //   ];

// //   const operationsByType = {
// //     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
// //     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
// //     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form']
// //   };

// //   // Validation
// //   const validateInputs = () => {
// //     const newErrors = [];

// //     // Check if operation is selected
// //     if (!selectedOperation) {
// //       newErrors.push('Please select an operation');
// //     }

// //     // Check if vectors have valid components
// //     vectors.forEach((vector, index) => {
// //       const vectorName = String.fromCharCode(65 + index);
// //       const emptyComponents = vector.components.filter(comp => comp === '' || comp === null || comp === undefined).length;
// //       const validComponents = vector.components.filter(comp => !isNaN(parseFloat(comp)) && isFinite(comp)).length;

// //       if (emptyComponents > 0) {
// //         newErrors.push(`Vector ${vectorName} has empty components`);
// //       }

// //       if (validComponents !== vector.components.length) {
// //         newErrors.push(`Vector ${vectorName} contains invalid numbers`);
// //       }
// //     });

// //     // Operation specific validations
// //     if (selectedOperation === 'Cross Product' && dimensionality !== 3) {
// //       newErrors.push('Cross product is only defined for 3D vectors');
// //     }

// //     if (operationType === 'multiple' && vectors.length < 2) {
// //       newErrors.push('Multiple vector operations require at least 2 vectors');
// //     }

// //     setErrors(newErrors);
// //     return newErrors.length === 0;
// //   };

// //   // Clear all data and reset to start
// //   const handleReset = () => {
// //     setStep('operation-type');
// //     setOperationType('');
// //     setDimensionality(3);
// //     setVectors([]);
// //     setSelectedOperation('');
// //     setResult('');
// //     setErrors([]);
// //     setIsLoading(false);
// //   };

// //   // Go back to operation type selection
// //   const handleBack = () => {
// //     setErrors([]);
// //     setStep('operation-type');
// //     setOperationType('');
// //     setVectors([]);
// //     setSelectedOperation('');
// //     setResult('');
// //   };

// //   const handleOperationTypeSelect = (type) => {
// //     setOperationType(type);
// //     setErrors([]);
    
// //     // Initialize vectors based on operation type with default dimensionality
// //     let vectorCount = 1;
// //     if (type === 'two') vectorCount = 2;
// //     if (type === 'multiple') vectorCount = 2; // minimum for multiple

// //     const initialVectors = Array(vectorCount).fill(null).map((_, index) => ({
// //       id: index,
// //       components: new Array(dimensionality).fill('')
// //     }));

// //     setVectors(initialVectors);
// //     setStep('input');
// //   };

// //   const updateVectorComponent = (vectorIndex, componentIndex, value) => {
// //     const updatedVectors = [...vectors];
// //     updatedVectors[vectorIndex].components[componentIndex] = value;
// //     setVectors(updatedVectors);
    
// //     // Clear errors when user starts typing
// //     if (errors.length > 0) {
// //       setErrors([]);
// //     }
// //   };

// //   const addVector = () => {
// //     if (operationType === 'multiple' && vectors.length < 10) {
// //       const newVector = {
// //         id: vectors.length,
// //         components: new Array(dimensionality).fill('')
// //       };
// //       setVectors([...vectors, newVector]);
// //     }
// //   };

// //   const removeVector = (vectorIndex) => {
// //     if (operationType === 'multiple' && vectors.length > 2) {
// //       setVectors(vectors.filter((_, index) => index !== vectorIndex));
// //     }
// //   };

// //   const getAvailableOperations = () => {
// //     return operationsByType[operationType] || [];
// //   };

// //   const handleOperationSelect = (operation) => {
// //     setSelectedOperation(operation);
// //     setErrors([]);
// //   };

// //   // Placeholder for API call
// //   const executeOperation = async () => {
// //     if (!validateInputs()) {
// //       return;
// //     }

// //     setIsLoading(true);
// //     setResult('');

// //     try {
// //       // Prepare data for API
// //       const operationData = {
// //         operation: selectedOperation,
// //         operationType,
// //         dimensionality,
// //         vectors: vectors.map(vector => 
// //           vector.components.map(comp => parseFloat(comp))
// //         )
// //       };

// //       // Simulate API call
// //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// //       // Placeholder result
// //       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
      
// //     } catch (error) {
// //       setErrors(['Failed to execute operation. Please try again.']);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const canExecute = () => {
// //     return selectedOperation && vectors.length > 0 && !isLoading;
// //   };

// //   const getVectorGridClass = () => {
// //     if (operationType === 'single') return styles.vectorGridSingle;
// //     if (operationType === 'two') return styles.vectorGridTwo;
// //     return styles.vectorGridMultiple;
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.main}>
// //         {/* Header */}
// //         <div className={styles.header}>
// //           <h1 className={styles.title}>Vector Calculator</h1>
// //           <p className={styles.subtitle}>Professional vector operations calculator</p>
// //         </div>

// //         {/* Step 1: Operation Type Selection */}
// //         {step === 'operation-type' && (
// //           <div>
// //             <h2 className={styles.stepTitle}>Select Operation Type</h2>
// //             <div className={styles.operationTypeGrid}>
// //               {operationTypes.map((type) => (
// //                 <button
// //                   key={type.id}
// //                   onClick={() => handleOperationTypeSelect(type.id)}
// //                   className={styles.operationTypeCard}
// //                 >
// //                   <div className={styles.operationTypeTitle}>
// //                     {type.label}
// //                   </div>
// //                   <div className={styles.operationTypeDescription}>
// //                     {type.description}
// //                   </div>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Step 2: Vector Input and Operations */}
// //         {step === 'input' && (
// //           <div>
// //             <div className={styles.inputHeader}>
// //               <h2 className={styles.inputTitle}>
// //                 Vector Input ({dimensionality}D)
// //               </h2>
// //               <div className={styles.buttonGroup}>
// //                 <button
// //                   onClick={handleBack}
// //                   className={`${styles.button} ${styles.buttonSecondary}`}
// //                 >
// //                   Back
// //                 </button>
// //                 <button
// //                   onClick={handleReset}
// //                   className={`${styles.button} ${styles.buttonDanger}`}
// //                 >
// //                   Reset
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Dimensionality Controls */}
// //             <div style={{
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //               gap: '16px',
// //               marginBottom: '24px',
// //               padding: '16px',
// //               backgroundColor: '#f0f7ff',
// //               borderRadius: '8px',
// //               border: '1px solid #e0e7ff'
// //             }}>
// //               <label style={{
// //                 fontSize: '1rem',
// //                 fontWeight: '500',
// //                 color: '#374151'
// //               }}>
// //                 Vector Dimensions:
// //               </label>
// //               <input
// //                 type="number"
// //                 min="2"
// //                 max="10"
// //                 value={dimensionality}
// //                 onChange={(e) => {
// //                   const inputValue = e.target.value;
                  
// //                   // Handle empty input
// //                   if (inputValue === '') {
// //                     setDimensionality('');
// //                     return;
// //                   }
                  
// //                   const value = parseInt(inputValue);
                  
// //                   // Always update display value
// //                   setDimensionality(value);
                  
// //                   // Only update vectors if valid range
// //                   if (value >= 2 && value <= 10) {
// //                     const updatedVectors = vectors.map(vector => {
// //                       const newComponents = new Array(value).fill('');
// //                       for (let i = 0; i < Math.min(vector.components.length, value); i++) {
// //                         newComponents[i] = vector.components[i];
// //                       }
// //                       return { ...vector, components: newComponents };
// //                     });
// //                     setVectors(updatedVectors);
// //                     setErrors([]);
// //                   } else {
// //                     setErrors(['Dimensionality must be between 2 and 10']);
// //                   }
// //                 }}
// //                 style={{
// //                   width: '70px',
// //                   padding: '8px 12px',
// //                   border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
// //                   borderRadius: '8px',
// //                   fontSize: '1rem',
// //                   textAlign: 'center'
// //                 }}
// //               />
// //               <span style={{
// //                 fontSize: '0.9rem',
// //                 color: '#6b7280'
// //               }}>
// //                 (2-10 dimensions)
// //               </span>
// //             </div>

// //             {/* Error Display */}
// //             {errors.length > 0 && (
// //               <div className={styles.errorSection}>
// //                 <div className={styles.errorTitle}>Please fix the following:</div>
// //                 <ul className={styles.errorList}>
// //                   {errors.map((error, index) => (
// //                     <li key={index} className={styles.errorItem}>{error}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Vector Inputs */}
// //             <div className={`${styles.vectorGrid} ${getVectorGridClass()}`}>
// //               {vectors.map((vector, vectorIndex) => (
// //                 <div key={vector.id} className={styles.vectorCard}>
// //                   <div className={styles.vectorHeader}>
// //                     <h4 className={styles.vectorName}>
// //                       Vector {String.fromCharCode(65 + vectorIndex)}
// //                     </h4>
// //                     {operationType === 'multiple' && vectors.length > 2 && (
// //                       <button
// //                         onClick={() => removeVector(vectorIndex)}
// //                         className={styles.removeButton}
// //                       >
// //                         Remove
// //                       </button>
// //                     )}
// //                   </div>
// //                   <div className={styles.vectorComponents}>
// //                     <span className={styles.bracket}>(</span>
// //                     {vector.components.map((component, componentIndex) => (
// //                       <React.Fragment key={componentIndex}>
// //                         <input
// //                           type="number"
// //                           step="any"
// //                           value={component}
// //                           onChange={(e) => updateVectorComponent(vectorIndex, componentIndex, e.target.value)}
// //                           placeholder={`x${componentIndex + 1}`}
// //                           className={`${styles.componentInput} ${
// //                             component !== '' && (isNaN(parseFloat(component)) || !isFinite(component)) ? styles.error : ''
// //                           }`}
// //                         />
// //                         {componentIndex < vector.components.length - 1 && (
// //                           <span className={styles.separator}>,</span>
// //                         )}
// //                       </React.Fragment>
// //                     ))}
// //                     <span className={styles.bracket}>)</span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Add Vector Button for Multiple Operations */}
// //             {operationType === 'multiple' && vectors.length < 10 && (
// //               <div className={styles.addVectorContainer}>
// //                 <button
// //                   onClick={addVector}
// //                   className={styles.addVectorButton}
// //                 >
// //                   + Add Vector
// //                 </button>
// //               </div>
// //             )}

// //             {/* Available Operations */}
// //             <div className={styles.operationsSection}>
// //               <h3 className={styles.operationsTitle}>Available Operations</h3>
// //               <div className={styles.operationsGrid}>
// //                 {getAvailableOperations().map((operation) => (
// //                   <button
// //                     key={operation}
// //                     onClick={() => handleOperationSelect(operation)}
// //                     className={`${styles.operationButton} ${
// //                       selectedOperation === operation ? styles.selected : ''
// //                     } ${
// //                       operation === 'Cross Product' && dimensionality !== 3 ? styles.disabled : ''
// //                     }`}
// //                     disabled={operation === 'Cross Product' && dimensionality !== 3}
// //                   >
// //                     {operation}
// //                   </button>
// //                 ))}
// //               </div>

// //               {/* Execute Button */}
// //               <div style={{ display: 'flex', justifyContent: 'center' }}>
// //                 <button
// //                   onClick={executeOperation}
// //                   disabled={!canExecute()}
// //                   className={styles.executeButton}
// //                 >
// //                   {isLoading ? (
// //                     <div className={styles.loading}>
// //                       <div className={styles.spinner}></div>
// //                       Calculating...
// //                     </div>
// //                   ) : (
// //                     'Execute Operation'
// //                   )}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Results */}
// //             <div className={styles.resultsSection}>
// //               <h4 className={styles.resultsTitle}>Result</h4>
// //               <div className={styles.resultsContent}>
// //                 {result || 'Select vectors and operation, then click Execute'}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import styles from './VectorCalculator.module.css';

// export default function VectorCalculator() {
//   const [step, setStep] = useState('operation-type');
//   const [operationType, setOperationType] = useState('');
//   const [dimensionality, setDimensionality] = useState(3);
//   const [vectors, setVectors] = useState([]);
//   const [selectedOperation, setSelectedOperation] = useState('');
//   const [result, setResult] = useState('');
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const operationTypes = [
//     { id: 'single', label: 'Single Vector Operations', description: 'Magnitude, unit vector, normalization' },
//     { id: 'two', label: 'Two Vector Operations', description: 'Addition, subtraction, dot product, cross product' },
//     { id: 'multiple', label: 'Multiple Vector Operations', description: 'Linear combinations, spans, linear independence' }
//   ];

//   const operationsByType = {
//     single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
//     two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
//     multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form']
//   };

//   // Validation
//   const validateInputs = () => {
//     const newErrors = [];

//     // Check if operation is selected
//     if (!selectedOperation) {
//       newErrors.push('Please select an operation');
//     }

//     // Check if vectors have valid components
//     vectors.forEach((vector, index) => {
//       const vectorName = String.fromCharCode(65 + index);
//       const emptyComponents = vector.components.filter(comp => comp === '' || comp === null || comp === undefined).length;
//       const validComponents = vector.components.filter(comp => !isNaN(parseFloat(comp)) && isFinite(comp)).length;

//       if (emptyComponents > 0) {
//         newErrors.push(`Vector ${vectorName} has empty components`);
//       }

//       if (validComponents !== vector.components.length) {
//         newErrors.push(`Vector ${vectorName} contains invalid numbers`);
//       }
//     });

//     // Operation specific validations
//     if (selectedOperation === 'Cross Product' && dimensionality !== 3) {
//       newErrors.push('Cross product is only defined for 3D vectors');
//     }

//     if (operationType === 'multiple' && vectors.length < 2) {
//       newErrors.push('Multiple vector operations require at least 2 vectors');
//     }

//     setErrors(newErrors);
//     return newErrors.length === 0;
//   };

//   // Clear all data and reset to start
//   const handleReset = () => {
//     setStep('operation-type');
//     setOperationType('');
//     setDimensionality(3);
//     setVectors([]);
//     setSelectedOperation('');
//     setResult('');
//     setErrors([]);
//     setIsLoading(false);
//   };

//   // Go back to operation type selection
//   const handleBack = () => {
//     setErrors([]);
//     setStep('operation-type');
//     setOperationType('');
//     setVectors([]);
//     setSelectedOperation('');
//     setResult('');
//   };

//   const handleOperationTypeSelect = (type) => {
//     setOperationType(type);
//     setErrors([]);
    
//     // Initialize vectors based on operation type with default dimensionality
//     let vectorCount = 1;
//     if (type === 'two') vectorCount = 2;
//     if (type === 'multiple') vectorCount = 2; // minimum for multiple

//     const initialVectors = Array(vectorCount).fill(null).map((_, index) => ({
//       id: index,
//       components: new Array(dimensionality).fill('')
//     }));

//     setVectors(initialVectors);
//     setStep('input');
//   };

//   const updateVectorComponent = (vectorIndex, componentIndex, value) => {
//     const updatedVectors = [...vectors];
//     updatedVectors[vectorIndex].components[componentIndex] = value;
//     setVectors(updatedVectors);
    
//     // Clear errors when user starts typing
//     if (errors.length > 0) {
//       setErrors([]);
//     }
//   };

//   const addVector = () => {
//     if (operationType === 'multiple' && vectors.length < 10) {
//       const newVector = {
//         id: vectors.length,
//         components: new Array(dimensionality).fill('')
//       };
//       setVectors([...vectors, newVector]);
//     }
//   };

//   const removeVector = (vectorIndex) => {
//     if (operationType === 'multiple' && vectors.length > 2) {
//       setVectors(vectors.filter((_, index) => index !== vectorIndex));
//     }
//   };

//   const getAvailableOperations = () => {
//     return operationsByType[operationType] || [];
//   };

//   const handleOperationSelect = (operation) => {
//     setSelectedOperation(operation);
//     setErrors([]);
//   };

//   // Placeholder for API call
//   const executeOperation = async () => {
//     if (!validateInputs()) {
//       return;
//     }

//     setIsLoading(true);
//     setResult('');

//     try {
//       // Prepare data for API
//       const operationData = {
//         operation: selectedOperation,
//         operationType,
//         dimensionality,
//         vectors: vectors.map(vector => 
//           vector.components.map(comp => parseFloat(comp))
//         )
//       };

//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Placeholder result
//       setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
      
//     } catch (error) {
//       setErrors(['Failed to execute operation. Please try again.']);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const canExecute = () => {
//     return selectedOperation && vectors.length > 0 && !isLoading;
//   };

//   const getVectorGridClass = () => {
//     if (operationType === 'single') return styles.vectorGridSingle;
//     if (operationType === 'two') return styles.vectorGridTwo;
//     return styles.vectorGridMultiple;
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         {/* Header */}
//         <div className={styles.header}>
//           <h1 className={styles.title}>Vector Calculator</h1>
//           <p className={styles.subtitle}>Professional vector operations calculator</p>
//         </div>

//         {/* Operation Type Tabs - Always Visible */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           marginBottom: '32px',
//           borderBottom: '1px solid #e5e7eb'
//         }}>
//           {operationTypes.map(type => (
//             <button
//               key={type.id}
//               onClick={() => handleOperationTypeSelect(type.id)}
//               style={{
//                 padding: '12px 24px',
//                 border: 'none',
//                 backgroundColor: 'transparent',
//                 color: operationType === type.id ? '#4285f4' : '#6b7280',
//                 fontWeight: operationType === type.id ? '600' : '400',
//                 fontSize: '1rem',
//                 cursor: 'pointer',
//                 borderBottom: operationType === type.id ? '2px solid #4285f4' : '2px solid transparent',
//                 transition: 'all 0.3s ease',
//                 transform: operationType === type.id ? 'translateY(-1px)' : 'translateY(0)'
//               }}
//               onMouseOver={(e) => {
//                 if (operationType !== type.id) {
//                   e.target.style.color = '#374151';
//                 }
//               }}
//               onMouseOut={(e) => {
//                 if (operationType !== type.id) {
//                   e.target.style.color = '#6b7280';
//                 }
//               }}
//             >
//               {type.label}
//             </button>
//           ))}
//         </div>

//         {/* Operation Type Selection Cards - Only when no type selected */}
//         {step === 'operation-type' && (
//           <div style={{
//             opacity: step === 'operation-type' ? 1 : 0,
//             transform: step === 'operation-type' ? 'translateY(0)' : 'translateY(20px)',
//             transition: 'all 0.4s ease'
//           }}>
//             <h2 className={styles.stepTitle}>Select Operation Type</h2>
//             <div className={styles.operationTypeGrid}>
//               {operationTypes.map((type) => (
//                 <button
//                   key={type.id}
//                   onClick={() => handleOperationTypeSelect(type.id)}
//                   className={styles.operationTypeCard}
//                 >
//                   <div className={styles.operationTypeTitle}>
//                     {type.label}
//                   </div>
//                   <div className={styles.operationTypeDescription}>
//                     {type.description}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Vector Input and Operations */}
//         {step === 'input' && (
//           <div style={{
//             opacity: step === 'input' ? 1 : 0,
//             transform: step === 'input' ? 'translateY(0)' : 'translateY(20px)',
//             transition: 'all 0.4s ease'
//           }}>
//             <div className={styles.inputHeader}>
//               <h2 className={styles.inputTitle}>
//                 Vector Input ({dimensionality}D)
//               </h2>
//               <div className={styles.buttonGroup}>
//                 <button
//                   onClick={handleReset}
//                   className={`${styles.button} ${styles.buttonDanger}`}
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>

//             {/* Dimensionality Controls */}
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '16px',
//               marginBottom: '24px',
//               padding: '16px',
//               backgroundColor: '#f3f4f6',
//               borderRadius: '8px',
//               border: '1px solid #d1d5db'
//             }}>
//               <label style={{
//                 fontSize: '1rem',
//                 fontWeight: '500',
//                 color: '#374151'
//               }}>
//                 Vector Dimensions:
//               </label>
//               <input
//                 type="number"
//                 min="2"
//                 max="10"
//                 value={dimensionality}
//                 onChange={(e) => {
//                   const inputValue = e.target.value;
                  
//                   // Handle empty input
//                   if (inputValue === '') {
//                     setDimensionality('');
//                     return;
//                   }
                  
//                   const value = parseInt(inputValue);
                  
//                   // Always update display value
//                   setDimensionality(value);
                  
//                   // Only update vectors if valid range
//                   if (value >= 2 && value <= 10) {
//                     const updatedVectors = vectors.map(vector => {
//                       const newComponents = new Array(value).fill('');
//                       for (let i = 0; i < Math.min(vector.components.length, value); i++) {
//                         newComponents[i] = vector.components[i];
//                       }
//                       return { ...vector, components: newComponents };
//                     });
//                     setVectors(updatedVectors);
//                     setErrors([]);
//                   } else {
//                     setErrors(['Dimensionality must be between 2 and 10']);
//                   }
//                 }}
//                 style={{
//                   width: '70px',
//                   padding: '8px 12px',
//                   border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
//                   borderRadius: '8px',
//                   fontSize: '1rem',
//                   textAlign: 'center'
//                 }}
//               />
//               <span style={{
//                 fontSize: '0.9rem',
//                 color: '#6b7280'
//               }}>
//                 (2-10 dimensions)
//               </span>
//             </div>

//             {/* Error Display */}
//             {errors.length > 0 && (
//               <div className={styles.errorSection}>
//                 <div className={styles.errorTitle}>Please fix the following:</div>
//                 <ul className={styles.errorList}>
//                   {errors.map((error, index) => (
//                     <li key={index} className={styles.errorItem}>{error}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Vector Inputs */}
//             <div className={`${styles.vectorGrid} ${getVectorGridClass()}`}>
//               {vectors.map((vector, vectorIndex) => (
//                 <div key={vector.id} className={styles.vectorCard}>
//                   <div className={styles.vectorHeader}>
//                     <h4 className={styles.vectorName}>
//                       Vector {String.fromCharCode(65 + vectorIndex)}
//                     </h4>
//                     {operationType === 'multiple' && vectors.length > 2 && (
//                       <button
//                         onClick={() => removeVector(vectorIndex)}
//                         className={styles.removeButton}
//                       >
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                   <div className={styles.vectorComponents}>
//                     <span className={styles.bracket}>(</span>
//                     {vector.components.map((component, componentIndex) => (
//                       <React.Fragment key={componentIndex}>
//                         <input
//                           type="number"
//                           step="any"
//                           value={component}
//                           onChange={(e) => updateVectorComponent(vectorIndex, componentIndex, e.target.value)}
//                           placeholder={`x${componentIndex + 1}`}
//                           className={`${styles.componentInput} ${
//                             component !== '' && (isNaN(parseFloat(component)) || !isFinite(component)) ? styles.error : ''
//                           }`}
//                         />
//                         {componentIndex < vector.components.length - 1 && (
//                           <span className={styles.separator}>,</span>
//                         )}
//                       </React.Fragment>
//                     ))}
//                     <span className={styles.bracket}>)</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Add Vector Button for Multiple Operations */}
//             {operationType === 'multiple' && vectors.length < 10 && (
//               <div className={styles.addVectorContainer}>
//                 <button
//                   onClick={addVector}
//                   className={styles.addVectorButton}
//                 >
//                   + Add Vector
//                 </button>
//               </div>
//             )}

//             {/* Available Operations */}
//             <div className={styles.operationsSection}>
//               <h3 className={styles.operationsTitle}>Available Operations</h3>
//               <div className={styles.operationsGrid}>
//                 {getAvailableOperations().map((operation) => (
//                   <button
//                     key={operation}
//                     onClick={() => handleOperationSelect(operation)}
//                     className={`${styles.operationButton} ${
//                       selectedOperation === operation ? styles.selected : ''
//                     } ${
//                       operation === 'Cross Product' && dimensionality !== 3 ? styles.disabled : ''
//                     }`}
//                     disabled={operation === 'Cross Product' && dimensionality !== 3}
//                   >
//                     {operation}
//                   </button>
//                 ))}
//               </div>

//               {/* Execute Button */}
//               <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <button
//                   onClick={executeOperation}
//                   disabled={!canExecute()}
//                   className={styles.executeButton}
//                 >
//                   {isLoading ? (
//                     <div className={styles.loading}>
//                       <div className={styles.spinner}></div>
//                       Calculating...
//                     </div>
//                   ) : (
//                     'Execute Operation'
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Results */}
//             <div className={styles.resultsSection}>
//               <h4 className={styles.resultsTitle}>Result</h4>
//               <div className={styles.resultsContent}>
//                 {result || 'Select vectors and operation, then click Execute'}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import styles from './VectorCalculator.module.css';

export default function VectorCalculator() {
  const [step, setStep] = useState('operation-type');
  const [operationType, setOperationType] = useState('');
  const [dimensionality, setDimensionality] = useState(3);
  const [vectors, setVectors] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState('');
  const [result, setResult] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const operationTypes = [
    { id: 'single', label: 'Single Vector Operations', description: 'Magnitude, unit vector, normalization' },
    { id: 'two', label: 'Two Vector Operations', description: 'Addition, subtraction, dot product, cross product' },
    { id: 'multiple', label: 'Multiple Vector Operations', description: 'Linear combinations, spans, linear independence' }
  ];

  const operationsByType = {
    single: ['Magnitude', 'Unit Vector', 'Normalize', 'Sum of Components', 'L1 Norm', 'L2 Norm', 'Infinity Norm'],
    two: ['Addition', 'Subtraction', 'Dot Product', 'Cross Product', 'Angle Between', 'Distance', 'Projection', 'Rejection'],
    multiple: ['Linear Combination', 'Span Check', 'Linear Independence', 'Orthogonality Check', 'Gram-Schmidt', 'Matrix Form']
  };

  // Validation
  const validateInputs = () => {
    const newErrors = [];

    // Check if operation is selected
    if (!selectedOperation) {
      newErrors.push('Please select an operation');
    }

    // Check if vectors have valid components
    vectors.forEach((vector, index) => {
      const vectorName = String.fromCharCode(65 + index);
      const emptyComponents = vector.components.filter(comp => comp === '' || comp === null || comp === undefined).length;
      const validComponents = vector.components.filter(comp => !isNaN(parseFloat(comp)) && isFinite(comp)).length;

      if (emptyComponents > 0) {
        newErrors.push(`Vector ${vectorName} has empty components`);
      }

      if (validComponents !== vector.components.length) {
        newErrors.push(`Vector ${vectorName} contains invalid numbers`);
      }
    });

    // Operation specific validations
    if (selectedOperation === 'Cross Product' && dimensionality !== 3) {
      newErrors.push('Cross product is only defined for 3D vectors');
    }

    if (operationType === 'multiple' && vectors.length < 2) {
      newErrors.push('Multiple vector operations require at least 2 vectors');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  // Clear all data and reset to start
  const handleReset = () => {
    setStep('operation-type');
    setOperationType('');
    setDimensionality(3);
    setVectors([]);
    setSelectedOperation('');
    setResult('');
    setErrors([]);
    setIsLoading(false);
  };

  const handleOperationTypeSelect = (type) => {
    setOperationType(type);
    setErrors([]);
    
    // Initialize vectors based on operation type with default dimensionality
    let vectorCount = 1;
    if (type === 'two') vectorCount = 2;
    if (type === 'multiple') vectorCount = 2; // minimum for multiple

    const initialVectors = Array(vectorCount).fill(null).map((_, index) => ({
      id: index,
      components: new Array(dimensionality).fill('')
    }));

    setVectors(initialVectors);
    setStep('input');
  };

  const updateVectorComponent = (vectorIndex, componentIndex, value) => {
    const updatedVectors = [...vectors];
    updatedVectors[vectorIndex].components[componentIndex] = value;
    setVectors(updatedVectors);
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const addVector = () => {
    if (operationType === 'multiple' && vectors.length < 10) {
      const newVector = {
        id: vectors.length,
        components: new Array(dimensionality).fill('')
      };
      setVectors([...vectors, newVector]);
    }
  };

  const removeVector = (vectorIndex) => {
    if (operationType === 'multiple' && vectors.length > 2) {
      setVectors(vectors.filter((_, index) => index !== vectorIndex));
    }
  };

  const renderVector = (vector, vectorIndex) => {
    return (
      <div key={vector.id} className={styles.vectorCard}>
        <div className={styles.vectorHeader}>
          <h4 className={styles.vectorName}>
            Vector {String.fromCharCode(65 + vectorIndex)}
          </h4>
          {operationType === 'multiple' && vectors.length > 2 && (
            <button
              onClick={() => removeVector(vectorIndex)}
              className={styles.removeButton}
            >
              Remove
            </button>
          )}
        </div>
        <div className={styles.vectorComponents}>
          <span className={styles.bracket}>(</span>
          {vector.components.map((component, componentIndex) => (
            <React.Fragment key={componentIndex}>
              <input
                type="number"
                step="any"
                value={component}
                onChange={(e) => updateVectorComponent(vectorIndex, componentIndex, e.target.value)}
                placeholder={`x${componentIndex + 1}`}
                className={`${styles.componentInput} ${
                  component !== '' && (isNaN(parseFloat(component)) || !isFinite(component)) ? styles.error : ''
                }`}
              />
              {componentIndex < vector.components.length - 1 && (
                <span className={styles.separator}>,</span>
              )}
            </React.Fragment>
          ))}
          <span className={styles.bracket}>)</span>
        </div>
      </div>
    );
  };

  const getAvailableOperations = () => {
    return operationsByType[operationType] || [];
  };

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
    setErrors([]);
  };

  // Placeholder for API call
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
        dimensionality,
        vectors: vectors.map(vector => 
          vector.components.map(comp => parseFloat(comp))
        )
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Placeholder result
      setResult(`Operation "${selectedOperation}" executed successfully. API integration pending.`);
      
    } catch (error) {
      setErrors(['Failed to execute operation. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  const canExecute = () => {
    return selectedOperation && vectors.length > 0 && !isLoading;
  };

  const getVectorGridClass = () => {
    if (operationType === 'single') return styles.vectorGridSingle;
    if (operationType === 'two') return styles.vectorGridTwo;
    return styles.vectorGridMultiple;
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Vector Calculator</h1>
          <p className={styles.subtitle}>Professional vector operations calculator</p>
        </div>

        {/* Operation Type Selection Cards - Only when no type selected */}
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

        {/* Operation Type Buttons - Always Visible on Left */}
        {step === 'input' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* Left Side - Operation Type Selection */}
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '16px'
              }}>
                Operation Types
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '12px'
              }}>
                {operationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleOperationTypeSelect(type.id)}
                    style={{
                      padding: '16px',
                      border: operationType === type.id ? '2px solid #4285f4' : '2px solid #e5e7eb',
                      borderRadius: '12px',
                      backgroundColor: operationType === type.id ? '#f0f7ff' : 'white',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                      transform: operationType === type.id ? 'scale(1.02)' : 'scale(1)'
                    }}
                    onMouseOver={(e) => {
                      if (operationType !== type.id) {
                        e.target.style.borderColor = '#4285f4';
                        e.target.style.backgroundColor = '#f8f9ff';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (operationType !== type.id) {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: operationType === type.id ? '#4285f4' : '#1f2937',
                      marginBottom: '6px'
                    }}>
                      {type.label}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#6b7280'
                    }}>
                      {type.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Input and Operations */}
            <div>
              <div className={styles.inputHeader}>
                <h2 className={styles.inputTitle}>
                  Vector Input ({dimensionality}D)
                </h2>
                <div className={styles.buttonGroup}>
                  <button
                    onClick={handleReset}
                    className={`${styles.button} ${styles.buttonDanger}`}
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Dimensionality Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
                padding: '16px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                border: '1px solid #d1d5db'
              }}>
                <label style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  Vector Dimensions:
                </label>
                <input
                  type="number"
                  min="2"
                  max="10"
                  value={dimensionality}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    
                    // Handle empty input
                    if (inputValue === '') {
                      setDimensionality('');
                      return;
                    }
                    
                    const value = parseInt(inputValue);
                    
                    // Always update display value
                    setDimensionality(value);
                    
                    // Only update vectors if valid range
                    if (value >= 2 && value <= 10) {
                      const updatedVectors = vectors.map(vector => {
                        const newComponents = new Array(value).fill('');
                        for (let i = 0; i < Math.min(vector.components.length, value); i++) {
                          newComponents[i] = vector.components[i];
                        }
                        return { ...vector, components: newComponents };
                      });
                      setVectors(updatedVectors);
                      setErrors([]);
                    } else {
                      setErrors(['Dimensionality must be between 2 and 10']);
                    }
                  }}
                  style={{
                    width: '70px',
                    padding: '8px 12px',
                    border: dimensionality < 2 || dimensionality > 10 ? '2px solid #dc2626' : '2px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}
                />
                <span style={{
                  fontSize: '0.9rem',
                  color: '#6b7280'
                }}>
                  (2-10 dimensions)
                </span>
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

              {/* Vector Inputs */}
              <div className={`${styles.vectorGrid} ${getVectorGridClass()}`}>
                {vectors.map((vector, index) => renderVector(vector, index))}
              </div>

              {/* Add Vector Button for Multiple Operations */}
              {operationType === 'multiple' && vectors.length < 10 && (
                <div className={styles.addVectorContainer}>
                  <button
                    onClick={addVector}
                    className={styles.addVectorButton}
                  >
                    + Add Vector
                  </button>
                </div>
              )}

              {/* Available Operations */}
              <div className={styles.operationsSection}>
                <h3 className={styles.operationsTitle}>Available Operations</h3>
                <div className={styles.operationsGrid}>
                  {getAvailableOperations().map((operation) => (
                    <button
                      key={operation}
                      onClick={() => handleOperationSelect(operation)}
                      className={`${styles.operationButton} ${
                        selectedOperation === operation ? styles.selected : ''
                      } ${
                        operation === 'Cross Product' && dimensionality !== 3 ? styles.disabled : ''
                      }`}
                      disabled={operation === 'Cross Product' && dimensionality !== 3}
                    >
                      {operation}
                    </button>
                  ))}
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
                  {result || 'Select vectors and operation, then click Execute'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}