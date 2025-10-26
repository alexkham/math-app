
// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import styles from './StatisticsCalculator.module.css';
// // // // // // // // //import explanations from './explanations';

// // // // // // // // const StatisticsCalculator = ({explanations}) => {
// // // // // // // //   const [numbers, setNumbers] = useState(['']);
// // // // // // // //   const [stats, setStats] = useState(null);
// // // // // // // //   const [fileType, setFileType] = useState('csv');
// // // // // // // //   const [inputMethod, setInputMethod] = useState('manual');
// // // // // // // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');
// // // // // // // //   const [currentExplanation, setCurrentExplanation] = useState('');
// // // // // // // //   const [error, setError] = useState(null);

// // // // // // // //   const handleExplanationClick = (key) => {
// // // // // // // //     if(explanations)
// // // // // // // //     setCurrentExplanation(explanations[key]);
// // // // // // // //   };


// // // // // // // // const calculateStats = (data) => {
// // // // // // // //     try {
// // // // // // // //       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
// // // // // // // //       if (validData.length === 0) {
// // // // // // // //         throw new Error("No valid numbers to calculate statistics.");
// // // // // // // //       }
  
// // // // // // // //       const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // // // // //       const n = sortedData.length;
  
// // // // // // // //       const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // // // // //       const mean = sum / n;
// // // // // // // //       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // // // // // //       const min = sortedData[0];
// // // // // // // //       const max = sortedData[n - 1];
// // // // // // // //       const range = max - min;
  
// // // // // // // //       // Updated mode calculation
// // // // // // // //       const modeMap = sortedData.reduce((acc, val) => {
// // // // // // // //         acc[val] = (acc[val] || 0) + 1;
// // // // // // // //         return acc;
// // // // // // // //       }, {});
// // // // // // // //       const maxFrequency = Math.max(...Object.values(modeMap));
// // // // // // // //       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
// // // // // // // //       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
// // // // // // // //       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // // // // // // //       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
// // // // // // // //       const standardDeviationN1 = Math.sqrt(varianceN1);
// // // // // // // //       const standardDeviationN = Math.sqrt(varianceN);
  
// // // // // // // //       const q1Index = Math.floor(n / 4);
// // // // // // // //       const q3Index = Math.floor((3 * n) / 4);
// // // // // // // //       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
// // // // // // // //       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
// // // // // // // //       const iqr = q3 - q1;
  
// // // // // // // //       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
// // // // // // // //       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
// // // // // // // //       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
// // // // // // // //       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
// // // // // // // //       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
// // // // // // // //       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
// // // // // // // //       return {
// // // // // // // //         sampleSize: n,
// // // // // // // //         sum: sum.toFixed(2),
// // // // // // // //         mean: mean.toFixed(2),
// // // // // // // //         median: median.toFixed(2),
// // // // // // // //         mode: modeValue,
// // // // // // // //         min,
// // // // // // // //         max,
// // // // // // // //         range,
// // // // // // // //         varianceN1: varianceN1.toFixed(2),
// // // // // // // //         varianceN: varianceN.toFixed(2),
// // // // // // // //         standardDeviationN1: standardDeviationN1.toFixed(2),
// // // // // // // //         standardDeviationN: standardDeviationN.toFixed(2),
// // // // // // // //         q1: q1.toFixed(2),
// // // // // // // //         q3: q3.toFixed(2),
// // // // // // // //         iqr: iqr.toFixed(2),
// // // // // // // //         skewness: skewness.toFixed(2),
// // // // // // // //         kurtosis: kurtosis.toFixed(2),
// // // // // // // //         coefficientOfVariation: coefficientOfVariation.toFixed(2),
// // // // // // // //         geometricMean: geometricMean.toFixed(2),
// // // // // // // //         harmonicMean: harmonicMean.toFixed(2),
// // // // // // // //         rootMeanSquare: rootMeanSquare.toFixed(2)
// // // // // // // //       };
// // // // // // // //     } catch (error) {
// // // // // // // //       throw new Error(`Error calculating statistics: ${error.message}`);
// // // // // // // //     }
// // // // // // // //   };


// // // // // // // // const handleAddNumber = () => {
// // // // // // // //     setNumbers([...numbers, '']);
// // // // // // // //     setError(null);
// // // // // // // //   };

// // // // // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // // // // //     setError(null);
// // // // // // // //   };

// // // // // // // //   const handleInputChange = (e, index) => {
// // // // // // // //     const newNumbers = [...numbers];
// // // // // // // //     newNumbers[index] = e.target.value;
// // // // // // // //     setNumbers(newNumbers);
// // // // // // // //     setError(null);
// // // // // // // //   };

// // // // // // // //   const handleResetAll = () => {
// // // // // // // //     setNumbers(['']);
// // // // // // // //     setPreferredCalculation('auto')
// // // // // // // //     setStats(null);
// // // // // // // //     setError(null);
// // // // // // // //   };

// // // // // // // // //   const handleFileUpload = (event) => {
// // // // // // // // //     const file = event.target.files[0];
// // // // // // // // //     if (file) {
// // // // // // // // //       const reader = new FileReader();
// // // // // // // // //       reader.onload = (e) => {
// // // // // // // // //         try {
// // // // // // // // //           let content = e.target.result;
// // // // // // // // //           let parsedNumbers = fileType === 'csv' 
// // // // // // // // //             ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
// // // // // // // // //             : content.split('\n').map(num => num.trim());
// // // // // // // // //           parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
// // // // // // // // //           if (parsedNumbers.length === 0) {
// // // // // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // // // // //           }
// // // // // // // // //           setNumbers(parsedNumbers);
// // // // // // // // //           setError(null);
// // // // // // // // //         } catch (error) {
// // // // // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // // // // //         }
// // // // // // // // //       };
// // // // // // // // //       reader.onerror = () => {
// // // // // // // // //         setError("Error reading file.");
// // // // // // // // //       };
// // // // // // // // //       reader.readAsText(file);
// // // // // // // // //     }
// // // // // // // // //   };

  
// // // // // // // // // const handleFileUpload = (event) => {
// // // // // // // // //     setStats(null); // Reset results when a file is uploaded
// // // // // // // // //     const file = event.target.files[0];
// // // // // // // // //     if (file) {
// // // // // // // // //       const reader = new FileReader();
// // // // // // // // //       reader.onload = (e) => {
// // // // // // // // //         try {
// // // // // // // // //           let content = e.target.result;
// // // // // // // // //           let parsedNumbers = content.split('\n').map(num => num.trim()).filter(num => num !== '' && !isNaN(num));
// // // // // // // // //           if (parsedNumbers.length === 0) {
// // // // // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // // // // //           }
// // // // // // // // //           setNumbers(parsedNumbers);
// // // // // // // // //           setError(null);
// // // // // // // // //         } catch (error) {
// // // // // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // // // // //         }
// // // // // // // // //       };
// // // // // // // // //       reader.onerror = () => {
// // // // // // // // //         setError("Error reading file.");
// // // // // // // // //       };
// // // // // // // // //       reader.readAsText(file);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // // const handleFileUpload = (event) => {
// // // // // // // // //     setStats(null); // Reset results when a file is uploaded
// // // // // // // // //     const file = event.target.files[0];
// // // // // // // // //     if (file) {
// // // // // // // // //       if (file.type !== 'text/plain') {
// // // // // // // // //         setError("Please upload a valid .txt file.");
// // // // // // // // //         return;
// // // // // // // // //       }
  
// // // // // // // // //       const reader = new FileReader();
// // // // // // // // //       reader.onload = (e) => {
// // // // // // // // //         try {
// // // // // // // // //           let content = e.target.result;
// // // // // // // // //           let parsedNumbers = content.split(/\r?\n/)
// // // // // // // // //             .map(line => line.trim())
// // // // // // // // //             .filter(line => line !== '')
// // // // // // // // //             .map(line => {
// // // // // // // // //               const num = parseFloat(line);
// // // // // // // // //               if (isNaN(num)) {
// // // // // // // // //                 throw new Error(`Invalid number found: ${line}`);
// // // // // // // // //               }
// // // // // // // // //               return num;
// // // // // // // // //             });
  
// // // // // // // // //           if (parsedNumbers.length === 0) {
// // // // // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // // // // //           }
  
// // // // // // // // //           setNumbers(parsedNumbers);
// // // // // // // // //           setError(null);
// // // // // // // // //         } catch (error) {
// // // // // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // // // // //         }
// // // // // // // // //       };
// // // // // // // // //       reader.onerror = () => {
// // // // // // // // //         setError("Error reading file.");
// // // // // // // // //       };
// // // // // // // // //       reader.readAsText(file);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // // const handleFileUpload = (event) => {
// // // // // // // // //     setStats(null);
// // // // // // // // //     const file = event.target.files[0];
// // // // // // // // //     if (file) {
// // // // // // // // //       const reader = new FileReader();
// // // // // // // // //       reader.onload = (e) => {
// // // // // // // // //         try {
// // // // // // // // //           let content = e.target.result;
// // // // // // // // //           let parsedNumbers;
// // // // // // // // //           if (fileType === 'csv') {
// // // // // // // // //             parsedNumbers = content.split('\n')
// // // // // // // // //               .flatMap(line => line.split(','))
// // // // // // // // //               .map(num => num.trim())
// // // // // // // // //               .filter(num => num !== '' && !isNaN(num))
// // // // // // // // //               .map(Number);
// // // // // // // // //           } else { // txt
// // // // // // // // //             parsedNumbers = content.split('\n')
// // // // // // // // //               .map(num => num.trim())
// // // // // // // // //               .filter(num => num !== '' && !isNaN(num))
// // // // // // // // //               .map(Number);
// // // // // // // // //           }
// // // // // // // // //           if (parsedNumbers.length === 0) {
// // // // // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // // // // //           }
// // // // // // // // //           setNumbers(parsedNumbers);
// // // // // // // // //           setError(null);
// // // // // // // // //         } catch (error) {
// // // // // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // // // // //         }
// // // // // // // // //       };
// // // // // // // // //       reader.onerror = () => {
// // // // // // // // //         setError("Error reading file.");
// // // // // // // // //       };
// // // // // // // // //       reader.readAsText(file);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // // const handleFileUpload = (event) => {
// // // // // // // // //     setStats(null);
// // // // // // // // //     const file = event.target.files[0];
// // // // // // // // //     if (file) {
// // // // // // // // //       // Check file type
// // // // // // // // //       if ((fileType === 'csv' && !file.name.toLowerCase().endsWith('.csv')) || 
// // // // // // // // //           (fileType === 'txt' && !file.name.toLowerCase().endsWith('.txt'))) {
// // // // // // // // //         setError(`Please upload a ${fileType.toUpperCase()} file.`);
// // // // // // // // //         return;
// // // // // // // // //       }
  
// // // // // // // // //       const reader = new FileReader();
// // // // // // // // //       reader.onload = (e) => {
// // // // // // // // //         try {
// // // // // // // // //           let content = e.target.result;
// // // // // // // // //           let parsedNumbers;
// // // // // // // // //           if (fileType === 'csv') {
// // // // // // // // //             parsedNumbers = content.split('\n')
// // // // // // // // //               .flatMap(line => line.split(','))
// // // // // // // // //               .map(num => num.trim())
// // // // // // // // //               .filter(num => num !== '' && !isNaN(parseFloat(num)))
// // // // // // // // //               .map(Number);
// // // // // // // // //           } else { // txt
// // // // // // // // //             parsedNumbers = content.split(/\r?\n/)
// // // // // // // // //               .map(num => num.trim())
// // // // // // // // //               .filter(num => num !== '' && !isNaN(parseFloat(num)))
// // // // // // // // //               .map(Number);
// // // // // // // // //           }
// // // // // // // // //           if (parsedNumbers.length === 0) {
// // // // // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // // // // //           }
// // // // // // // // //           console.log("Parsed numbers:", parsedNumbers); // For debugging
// // // // // // // // //           setNumbers(parsedNumbers);
// // // // // // // // //           setError(null);
// // // // // // // // //         } catch (error) {
// // // // // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // // // // //         }
// // // // // // // // //       };
// // // // // // // // //       reader.onerror = () => {
// // // // // // // // //         setError("Error reading file.");
// // // // // // // // //       };
// // // // // // // // //       reader.readAsText(file);
// // // // // // // // //     }
// // // // // // // // //   };


// // // // // // // // const handleFileUpload = (event) => {
// // // // // // // //     setStats(null);
// // // // // // // //     const file = event.target.files[0];
// // // // // // // //     if (file) {
// // // // // // // //       if ((fileType === 'csv' && !file.name.toLowerCase().endsWith('.csv')) || 
// // // // // // // //           (fileType === 'txt' && !file.name.toLowerCase().endsWith('.txt'))) {
// // // // // // // //         setError(`Please upload a ${fileType.toUpperCase()} file.`);
// // // // // // // //         return;
// // // // // // // //       }
  
// // // // // // // //       const reader = new FileReader();
// // // // // // // //       reader.onload = (e) => {
// // // // // // // //         try {
// // // // // // // //           let content = e.target.result;
// // // // // // // //           let parsedNumbers;
// // // // // // // //           if (fileType === 'csv') {
// // // // // // // //             parsedNumbers = content.split('\n')
// // // // // // // //               .flatMap(line => line.split(','))
// // // // // // // //               .map(num => num.trim())
// // // // // // // //               .filter(num => num !== '' && !isNaN(parseFloat(num)))
// // // // // // // //               .map(Number);
// // // // // // // //           } else { // txt
// // // // // // // //             // Split by newlines, commas, and spaces
// // // // // // // //             parsedNumbers = content.split(/[\n,\s]+/)
// // // // // // // //               .map(num => num.trim())
// // // // // // // //               .filter(num => num !== '' && !isNaN(parseFloat(num)))
// // // // // // // //               .map(Number);
// // // // // // // //           }
// // // // // // // //           if (parsedNumbers.length === 0) {
// // // // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // // // //           }
// // // // // // // //           setNumbers(parsedNumbers);
// // // // // // // //           setError(null);
// // // // // // // //         } catch (error) {
// // // // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // // // //         }
// // // // // // // //       };
// // // // // // // //       reader.onerror = () => {
// // // // // // // //         setError("Error reading file.");
// // // // // // // //       };
// // // // // // // //       reader.readAsText(file);
// // // // // // // //     }
// // // // // // // //   }; 


// // // // // // // // const handleCalculate = () => {
// // // // // // // //     try {
// // // // // // // //       if (numbers.length === 0) {
// // // // // // // //         throw new Error("No data available for calculation.");
// // // // // // // //       }
// // // // // // // //       const result = calculateStats(numbers);
// // // // // // // //       setStats(result);
// // // // // // // //       setError(null);
// // // // // // // //     } catch (error) {
// // // // // // // //       setError(error.message);
// // // // // // // //       setStats(null);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // // // const handleCalculate = () => {
// // // // // // // // //     try {
// // // // // // // // //       const result = calculateStats(numbers);
// // // // // // // // //       setStats(result);
// // // // // // // // //       setError(null);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       setError(error.message);
// // // // // // // // //       setStats(null);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.container}>
// // // // // // // //       {/* <h1 className={styles.title}>Statistics Calculator</h1> */}
      
// // // // // // // //       {/* {error && <div className={styles.error}>{error}</div>} */}
      
// // // // // // // //       <div className={styles.gridContainer}>
// // // // // // // //         <div className={styles.inputSection}>
// // // // // // // //           {/* <div className={styles.inputToggle}>
// // // // // // // //             <button 
// // // // // // // //               className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// // // // // // // //               onClick={() => setInputMethod('manual')}
// // // // // // // //             >
// // // // // // // //               Manual Input
// // // // // // // //             </button>
// // // // // // // //             <button 
// // // // // // // //               className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// // // // // // // //               onClick={() => setInputMethod('file')}
// // // // // // // //             >
// // // // // // // //               File Upload
// // // // // // // //             </button>
// // // // // // // //           </div> */}

// // // // // // // // <div className={styles.inputToggle}>
// // // // // // // //   <button 
// // // // // // // //     className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// // // // // // // //     onClick={() => {
// // // // // // // //       if (inputMethod !== 'manual') {
// // // // // // // //         setInputMethod('manual');
// // // // // // // //         setStats(null);
// // // // // // // //         setNumbers(['']); // Reset to a single empty input
// // // // // // // //         setError(null);
// // // // // // // //       }
// // // // // // // //     }}
// // // // // // // //   >
// // // // // // // //     Manual Input
// // // // // // // //   </button>
// // // // // // // //   <button 
// // // // // // // //     className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// // // // // // // //     onClick={() => {
// // // // // // // //       if (inputMethod !== 'file') {
// // // // // // // //         setInputMethod('file');
// // // // // // // //         setStats(null);
// // // // // // // //         setNumbers([]); // Clear all manual inputs
// // // // // // // //         setError(null);
// // // // // // // //       }
// // // // // // // //     }}
// // // // // // // //   >
// // // // // // // //     File Upload
// // // // // // // //   </button>
  
// // // // // // // // </div>

// // // // // // // //           {inputMethod === 'manual' ? (
// // // // // // // //             <>
// // // // // // // //               <div className={styles.inputGrid}>
// // // // // // // //                 {numbers.map((number, index) => (
// // // // // // // //                   <div key={index} className={styles.inputGroup}>
// // // // // // // //                     <input
// // // // // // // //                       type="number"
// // // // // // // //                       value={number}
// // // // // // // //                       onChange={(e) => handleInputChange(e, index)}
// // // // // // // //                       className={styles.input}
// // // // // // // //                       placeholder="Number"
// // // // // // // //                     />
// // // // // // // //                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //               <div className={styles.buttonGroup}>
// // // // // // // //                 <button onClick={handleAddNumber} className={styles.button}>Add Number</button>
// // // // // // // //                 <button onClick={handleResetAll} className={styles.button}>
// // // // // // // //                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
// // // // // // // //                     Reset</button>
// // // // // // // //               </div>
// // // // // // // //             </>
// // // // // // // //           ) : (
            
// // // // // // // //             <div className={styles.fileUploadSection}>
// // // // // // // //   <div className={styles.radioGroup}>
// // // // // // // //     <div className={styles.radioOption}>
// // // // // // // //       <input
// // // // // // // //         type="radio"
// // // // // // // //         id="csvRadio"
// // // // // // // //         value="csv"
// // // // // // // //         checked={fileType === 'csv'}
// // // // // // // //         onChange={() => setFileType('csv')}
// // // // // // // //       />
// // // // // // // //       <label htmlFor="csvRadio">CSV</label>
// // // // // // // //     </div>
// // // // // // // //     <div className={styles.radioOption}>
// // // // // // // //       <input
// // // // // // // //         type="radio"
// // // // // // // //         id="txtRadio"
// // // // // // // //         value="txt"
// // // // // // // //         checked={fileType === 'txt'}
// // // // // // // //         onChange={() => setFileType('txt')}
// // // // // // // //       />
// // // // // // // //       <label htmlFor="txtRadio">TXT</label>
// // // // // // // //     </div>
// // // // // // // //   </div>
// // // // // // // //   <div className={styles.uploadContainer}>
// // // // // // // //     <input 
// // // // // // // //       type="file" 
// // // // // // // //       accept={fileType === 'csv' ? '.csv' : '.txt'} 
// // // // // // // //       onChange={handleFileUpload} 
// // // // // // // //       className={styles.fileInput} 
// // // // // // // //     />
// // // // // // // //     <button onClick={handleResetAll} className={styles.button}>
// // // // // // // //       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
// // // // // // // //     </button>
// // // // // // // //   </div>
// // // // // // // // </div>
// // // // // // // //             // <div className={styles.fileUploadSection}>
// // // // // // // //             //   <div className={styles.radioGroup}>
// // // // // // // //             //     <label>
// // // // // // // //             //       <input
// // // // // // // //             //         type="radio"
// // // // // // // //             //         value="csv"
// // // // // // // //             //         checked={fileType === 'csv'}
// // // // // // // //             //         onChange={() => setFileType('csv')}
// // // // // // // //             //       />
// // // // // // // //             //       CSV
// // // // // // // //             //     </label>
// // // // // // // //             //     <label>
// // // // // // // //             //       <input
// // // // // // // //             //         type="radio"
// // // // // // // //             //         value="txt"
// // // // // // // //             //         checked={fileType === 'txt'}
// // // // // // // //             //         onChange={() => setFileType('txt')}
// // // // // // // //             //       />
// // // // // // // //             //       TXT
// // // // // // // //             //     </label>
// // // // // // // //             //   </div>
// // // // // // // //             //   <div className={styles.uploadContainer}>
// // // // // // // //             //   <input 
// // // // // // // //             //     type="file" 
// // // // // // // //             //     accept={fileType === 'csv' ? '.csv' : '.txt'} 
// // // // // // // //             //     onChange={handleFileUpload} 
// // // // // // // //             //     className={styles.fileInput} 
// // // // // // // //             //   />
// // // // // // // //             //    <button onClick={handleResetAll} className={styles.button}>
                
// // // // // // // //             //    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
// // // // // // // //             //     </button>
// // // // // // // //             //    </div>
// // // // // // // //             // </div>
// // // // // // // //           )}
// // // // // // // //           {error && <div className={styles.error}>{error}</div>}
// // // // // // // //           <button onClick={handleCalculate} className={styles.calculateButton}>Calculate</button>
          
// // // // // // // //           <div className={styles.advancedOptions}>
// // // // // // // //             <div className={styles.radioGroupColumn}>
// // // // // // // //               <label>
// // // // // // // //                 <input
// // // // // // // //                   type="radio"
// // // // // // // //                   value="auto"
// // // // // // // //                   checked={preferredCalculation === 'auto'}
// // // // // // // //                   onChange={() => setPreferredCalculation('auto')}
// // // // // // // //                 />
// // // // // // // //                 Auto (n-1 for n &lt; 30, n for n &gt;= 30)
// // // // // // // //               </label>
// // // // // // // //               <label>
// // // // // // // //                 <input
// // // // // // // //                   type="radio"
// // // // // // // //                   value="n-1"
// // // // // // // //                   checked={preferredCalculation === 'n-1'}
// // // // // // // //                   onChange={() => setPreferredCalculation('n-1')}
// // // // // // // //                 />
// // // // // // // //                 Always use n-1
// // // // // // // //               </label>
// // // // // // // //               <label>
// // // // // // // //                 <input
// // // // // // // //                   type="radio"
// // // // // // // //                   value="n"
// // // // // // // //                   checked={preferredCalculation === 'n'}
// // // // // // // //                   onChange={() => setPreferredCalculation('n')}
// // // // // // // //                 />
// // // // // // // //                 Always use n
// // // // // // // //               </label>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className={styles.results}>
// // // // // // // //           <h2>Results</h2>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Sample Size: <span className={styles.infoIcon} onClick={() => handleExplanationClick('sampleSize')}>ⓘ</span>
// // // // // // // //             <span>{stats?.sampleSize}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Sum: <span className={styles.infoIcon} onClick={() => handleExplanationClick('sum')}>ⓘ</span>
// // // // // // // //             <span>{stats?.sum}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('mean')}>ⓘ</span>
// // // // // // // //             <span>{stats?.mean}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Median: <span className={styles.infoIcon} onClick={() => handleExplanationClick('median')}>ⓘ</span>
// // // // // // // //             <span>{stats?.median}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Mode: <span className={styles.infoIcon} onClick={() => handleExplanationClick('mode')}>ⓘ</span>
// // // // // // // //             <span>{stats?.mode}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Min: <span className={styles.infoIcon} onClick={() => handleExplanationClick('min')}>ⓘ</span>
// // // // // // // //             <span>{stats?.min}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Max: <span className={styles.infoIcon} onClick={() => handleExplanationClick('max')}>ⓘ</span>
// // // // // // // //             <span>{stats?.max}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Range: <span className={styles.infoIcon} onClick={() => handleExplanationClick('range')}>ⓘ</span>
// // // // // // // //             <span>{stats?.range}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Variance: <span className={styles.infoIcon} onClick={() => handleExplanationClick('variance')}>ⓘ</span>
// // // // // // // //             <span>{stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN)}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Standard Deviation: <span className={styles.infoIcon} onClick={() => handleExplanationClick('standardDeviation')}>ⓘ</span>
// // // // // // // //             <span>{stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN)}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Q1 (First Quartile): <span className={styles.infoIcon} onClick={() => handleExplanationClick('q1')}>ⓘ</span>
// // // // // // // //             <span>{stats?.q1}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Q3 (Third Quartile): <span className={styles.infoIcon} onClick={() => handleExplanationClick('q3')}>ⓘ</span>
// // // // // // // //             <span>{stats?.q3}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             IQR (Interquartile Range): <span className={styles.infoIcon} onClick={() => handleExplanationClick('iqr')}>ⓘ</span>
// // // // // // // //             <span>{stats?.iqr}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Skewness: <span className={styles.infoIcon} onClick={() => handleExplanationClick('skewness')}>ⓘ</span>
// // // // // // // //             <span>{stats?.skewness}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Kurtosis: <span className={styles.infoIcon} onClick={() => handleExplanationClick('kurtosis')}>ⓘ</span>
// // // // // // // //             <span>{stats?.kurtosis}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Coefficient of Variation: <span className={styles.infoIcon} onClick={() => handleExplanationClick('coefficientOfVariation')}>ⓘ</span>
// // // // // // // //             <span>{stats?.coefficientOfVariation}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Geometric Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('geometricMean')}>ⓘ</span>
// // // // // // // //             <span>{stats?.geometricMean}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Harmonic Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('harmonicMean')}>ⓘ</span>
// // // // // // // //             <span>{stats?.harmonicMean}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //           <p className={styles.tooltipContainer}>
// // // // // // // //             Root Mean Square: <span className={styles.infoIcon} onClick={() => handleExplanationClick('rootMeanSquare')}>ⓘ</span>
// // // // // // // //             <span>{stats?.rootMeanSquare}</span>
// // // // // // // //             <span className={styles.tooltip}>Click to see explanation</span>
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {explanations&&<div className={styles.explanationSection}>
// // // // // // // //           <h2>Explanation</h2>
// // // // // // // //           <p>{currentExplanation}</p>
// // // // // // // //         </div>}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default StatisticsCalculator;



// // // // // // // import React, { useState } from 'react';
// // // // // // // import { processContent } from '@/app/utils/contentProcessor';

// // // // // // // const StatisticsCalculator = () => {
// // // // // // //   const [numbers, setNumbers] = useState(['']);
// // // // // // //   const [stats, setStats] = useState(null);
// // // // // // //   const [fileType, setFileType] = useState('csv');
// // // // // // //   const [inputMethod, setInputMethod] = useState('manual');
// // // // // // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');
// // // // // // //   const [currentExplanation, setCurrentExplanation] = useState('');
// // // // // // //   const [error, setError] = useState(null);

// // // // // // //   const explanations = {
// // // // // // //     sampleSize: 'The total number of data points in your dataset.',
// // // // // // //     sum: 'The total of all values added together.',
// // // // // // //     mean: 'The average value, calculated by dividing the sum by the sample size.',
// // // // // // //     median: 'The middle value when data is sorted. If even count, average of two middle values.',
// // // // // // //     mode: 'The most frequently occurring value(s) in the dataset.',
// // // // // // //     min: 'The smallest value in the dataset.',
// // // // // // //     max: 'The largest value in the dataset.',
// // // // // // //     range: 'The difference between the maximum and minimum values.',
// // // // // // //     variance: 'Measures how spread out the data is from the mean.',
// // // // // // //     standardDeviation: 'The square root of variance, showing average distance from mean.',
// // // // // // //     q1: 'The value below which 25% of the data falls.',
// // // // // // //     q3: 'The value below which 75% of the data falls.',
// // // // // // //     iqr: 'The range between Q1 and Q3, containing the middle 50% of data.',
// // // // // // //     skewness: 'Measures asymmetry of the distribution. Positive = right-skewed, Negative = left-skewed.',
// // // // // // //     kurtosis: 'Measures the "tailedness" of the distribution.',
// // // // // // //     coefficientOfVariation: 'The ratio of standard deviation to mean, expressed as percentage.',
// // // // // // //     geometricMean: 'The nth root of the product of n numbers.',
// // // // // // //     harmonicMean: 'The reciprocal of the arithmetic mean of reciprocals.',
// // // // // // //     rootMeanSquare: 'The square root of the mean of squared values.'
// // // // // // //   };

// // // // // // //   const handleExplanationClick = (key) => {
// // // // // // //     setCurrentExplanation(explanations[key]);
// // // // // // //   };

// // // // // // //   const calculateStats = (data) => {
// // // // // // //     try {
// // // // // // //       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
// // // // // // //       if (validData.length === 0) {
// // // // // // //         throw new Error("No valid numbers to calculate statistics.");
// // // // // // //       }
  
// // // // // // //       const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // // // //       const n = sortedData.length;
  
// // // // // // //       const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // // // //       const mean = sum / n;
// // // // // // //       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // // // // //       const min = sortedData[0];
// // // // // // //       const max = sortedData[n - 1];
// // // // // // //       const range = max - min;
  
// // // // // // //       const modeMap = sortedData.reduce((acc, val) => {
// // // // // // //         acc[val] = (acc[val] || 0) + 1;
// // // // // // //         return acc;
// // // // // // //       }, {});
// // // // // // //       const maxFrequency = Math.max(...Object.values(modeMap));
// // // // // // //       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
// // // // // // //       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
// // // // // // //       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // // // // // //       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
// // // // // // //       const standardDeviationN1 = Math.sqrt(varianceN1);
// // // // // // //       const standardDeviationN = Math.sqrt(varianceN);
  
// // // // // // //       const q1Index = Math.floor(n / 4);
// // // // // // //       const q3Index = Math.floor((3 * n) / 4);
// // // // // // //       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
// // // // // // //       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
// // // // // // //       const iqr = q3 - q1;
  
// // // // // // //       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
// // // // // // //       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
// // // // // // //       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
// // // // // // //       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
// // // // // // //       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
// // // // // // //       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
// // // // // // //       return {
// // // // // // //         sampleSize: n,
// // // // // // //         sum: sum.toFixed(2),
// // // // // // //         mean: mean.toFixed(2),
// // // // // // //         median: median.toFixed(2),
// // // // // // //         mode: modeValue,
// // // // // // //         min,
// // // // // // //         max,
// // // // // // //         range,
// // // // // // //         varianceN1: varianceN1.toFixed(2),
// // // // // // //         varianceN: varianceN.toFixed(2),
// // // // // // //         standardDeviationN1: standardDeviationN1.toFixed(2),
// // // // // // //         standardDeviationN: standardDeviationN.toFixed(2),
// // // // // // //         q1: q1.toFixed(2),
// // // // // // //         q3: q3.toFixed(2),
// // // // // // //         iqr: iqr.toFixed(2),
// // // // // // //         skewness: skewness.toFixed(2),
// // // // // // //         kurtosis: kurtosis.toFixed(2),
// // // // // // //         coefficientOfVariation: coefficientOfVariation.toFixed(2),
// // // // // // //         geometricMean: geometricMean.toFixed(2),
// // // // // // //         harmonicMean: harmonicMean.toFixed(2),
// // // // // // //         rootMeanSquare: rootMeanSquare.toFixed(2)
// // // // // // //       };
// // // // // // //     } catch (error) {
// // // // // // //       throw new Error(`Error calculating statistics: ${error.message}`);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleAddNumber = () => {
// // // // // // //     setNumbers([...numbers, '']);
// // // // // // //     setError(null);
// // // // // // //   };

// // // // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // // // //     setError(null);
// // // // // // //   };

// // // // // // //   const handleInputChange = (e, index) => {
// // // // // // //     const newNumbers = [...numbers];
// // // // // // //     newNumbers[index] = e.target.value;
// // // // // // //     setNumbers(newNumbers);
// // // // // // //     setError(null);
// // // // // // //   };

// // // // // // //   const handleResetAll = () => {
// // // // // // //     setNumbers(['']);
// // // // // // //     setPreferredCalculation('auto');
// // // // // // //     setStats(null);
// // // // // // //     setError(null);
// // // // // // //     setCurrentExplanation('');
// // // // // // //   };

// // // // // // //   const handleCalculate = () => {
// // // // // // //     try {
// // // // // // //       const result = calculateStats(numbers);
// // // // // // //       setStats(result);
// // // // // // //       setError(null);
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message);
// // // // // // //       setStats(null);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleFileUpload = (event) => {
// // // // // // //     setStats(null);
// // // // // // //     const file = event.target.files[0];
// // // // // // //     if (file) {
// // // // // // //       if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
// // // // // // //         setError("Please upload a valid .txt or .csv file.");
// // // // // // //         return;
// // // // // // //       }
// // // // // // //       const reader = new FileReader();
// // // // // // //       reader.onload = (e) => {
// // // // // // //         try {
// // // // // // //           let content = e.target.result;
// // // // // // //           let parsedNumbers;
          
// // // // // // //           if (fileType === 'csv') {
// // // // // // //             parsedNumbers = content.split('\n')
// // // // // // //               .map(line => line.split(',').map(num => num.trim()))
// // // // // // //               .flat()
// // // // // // //               .filter(num => num !== '' && !isNaN(num));
// // // // // // //           } else {
// // // // // // //             parsedNumbers = content.split('\n')
// // // // // // //               .map(num => num.trim())
// // // // // // //               .filter(num => num !== '' && !isNaN(num));
// // // // // // //           }
          
// // // // // // //           if (parsedNumbers.length === 0) {
// // // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // // //           }
// // // // // // //           setNumbers(parsedNumbers);
// // // // // // //           setError(null);
// // // // // // //         } catch (error) {
// // // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // // //         }
// // // // // // //       };
// // // // // // //       reader.onerror = () => {
// // // // // // //         setError("Error reading file.");
// // // // // // //       };
// // // // // // //       reader.readAsText(file);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={{
// // // // // // //       maxWidth: '1400px',
// // // // // // //       margin: '0 auto',
// // // // // // //       padding: '30px 20px',
// // // // // // //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // // // //       background: '#ffffff'
// // // // // // //     }}>
// // // // // // //       {/* <h1 style={{
// // // // // // //         textAlign: 'center',
// // // // // // //         color: '#2d3748',
// // // // // // //         marginBottom: '30px',
// // // // // // //         fontSize: '32px',
// // // // // // //         fontWeight: '700',
// // // // // // //         letterSpacing: '-0.5px'
// // // // // // //       }}>
// // // // // // //         Statistics Calculator
// // // // // // //       </h1> */}

// // // // // // //       <div style={{
// // // // // // //         display: 'grid',
// // // // // // //         gridTemplateColumns: '1fr 1fr 1fr',
// // // // // // //         gap: '25px'
// // // // // // //       }}>
// // // // // // //         {/* INPUT SECTION */}
// // // // // // //         <div style={{
// // // // // // //           background: 'white',
// // // // // // //           borderRadius: '12px',
// // // // // // //           padding: '25px',
// // // // // // //           border: '2px solid #e2e8f0',
// // // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // // // // //         }}>
// // // // // // //           <h2 style={{
// // // // // // //             margin: '0 0 20px 0',
// // // // // // //             fontSize: '20px',
// // // // // // //             fontWeight: '600',
// // // // // // //             color: '#2d3748'
// // // // // // //           }}>
// // // // // // //             Input Data
// // // // // // //           </h2>

// // // // // // //           <div style={{
// // // // // // //             display: 'flex',
// // // // // // //             justifyContent: 'center',
// // // // // // //             gap: '10px',
// // // // // // //             marginBottom: '25px'
// // // // // // //           }}>
// // // // // // //             <button
// // // // // // //               onClick={() => setInputMethod('manual')}
// // // // // // //               style={{
// // // // // // //                 background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
// // // // // // //                 color: inputMethod === 'manual' ? 'white' : '#718096',
// // // // // // //                 border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // // // // //                 padding: '8px 20px',
// // // // // // //                 borderRadius: '6px',
// // // // // // //                 cursor: 'pointer',
// // // // // // //                 fontSize: '14px',
// // // // // // //                 fontWeight: '600',
// // // // // // //                 transition: 'all 0.2s'
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Manual Input
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => setInputMethod('file')}
// // // // // // //               style={{
// // // // // // //                 background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
// // // // // // //                 color: inputMethod === 'file' ? 'white' : '#718096',
// // // // // // //                 border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // // // // //                 padding: '8px 20px',
// // // // // // //                 borderRadius: '6px',
// // // // // // //                 cursor: 'pointer',
// // // // // // //                 fontSize: '14px',
// // // // // // //                 fontWeight: '600',
// // // // // // //                 transition: 'all 0.2s'
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               File Upload
// // // // // // //             </button>
// // // // // // //           </div>

// // // // // // //           {inputMethod === 'manual' && (
// // // // // // //             <div>
// // // // // // //               <div style={{
// // // // // // //                 display: 'grid',
// // // // // // //                 gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
// // // // // // //                 gap: '10px',
// // // // // // //                 marginBottom: '15px',
// // // // // // //                 maxHeight: '300px',
// // // // // // //                 overflowY: 'auto',
// // // // // // //                 padding: '5px'
// // // // // // //               }}>
// // // // // // //                 {numbers.map((num, index) => (
// // // // // // //                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // // // // //                     <input
// // // // // // //                       type="text"
// // // // // // //                       value={num}
// // // // // // //                       onChange={(e) => handleInputChange(e, index)}
// // // // // // //                       placeholder="Value"
// // // // // // //                       style={{
// // // // // // //                         width: '70px',
// // // // // // //                         padding: '8px',
// // // // // // //                         border: '2px solid #e2e8f0',
// // // // // // //                         borderRadius: '6px',
// // // // // // //                         fontSize: '13px',
// // // // // // //                         outline: 'none',
// // // // // // //                         transition: 'border 0.2s'
// // // // // // //                       }}
// // // // // // //                       onFocus={(e) => e.target.style.borderColor = '#245de1'}
// // // // // // //                       onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
// // // // // // //                     />
// // // // // // //                     {numbers.length > 1 && (
// // // // // // //                       <button
// // // // // // //                         onClick={() => handleRemoveNumber(index)}
// // // // // // //                         style={{
// // // // // // //                           background: '#ef4444',
// // // // // // //                           color: 'white',
// // // // // // //                           border: 'none',
// // // // // // //                           borderRadius: '50%',
// // // // // // //                           width: '22px',
// // // // // // //                           height: '22px',
// // // // // // //                           cursor: 'pointer',
// // // // // // //                           fontSize: '16px',
// // // // // // //                           display: 'flex',
// // // // // // //                           alignItems: 'center',
// // // // // // //                           justifyContent: 'center',
// // // // // // //                           flexShrink: 0
// // // // // // //                         }}
// // // // // // //                       >
// // // // // // //                         ×
// // // // // // //                       </button>
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>

// // // // // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // // // // //                 <button
// // // // // // //                   onClick={handleAddNumber}
// // // // // // //                   style={{
// // // // // // //                     flex: 1,
// // // // // // //                     background: '#245de1',
// // // // // // //                     color: 'white',
// // // // // // //                     border: 'none',
// // // // // // //                     padding: '10px',
// // // // // // //                     borderRadius: '6px',
// // // // // // //                     cursor: 'pointer',
// // // // // // //                     fontSize: '14px',
// // // // // // //                     fontWeight: '600',
// // // // // // //                     transition: 'background 0.2s'
// // // // // // //                   }}
// // // // // // //                   onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // // // // //                   onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // // // // //                 >
// // // // // // //                   + Add Number
// // // // // // //                 </button>
// // // // // // //                 <button
// // // // // // //                   onClick={handleResetAll}
// // // // // // //                   style={{
// // // // // // //                     flex: 1,
// // // // // // //                     background: 'white',
// // // // // // //                     color: '#245de1',
// // // // // // //                     border: '2px solid #245de1',
// // // // // // //                     padding: '10px',
// // // // // // //                     borderRadius: '6px',
// // // // // // //                     cursor: 'pointer',
// // // // // // //                     fontSize: '14px',
// // // // // // //                     fontWeight: '600'
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Reset
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {inputMethod === 'file' && (
// // // // // // //             <div>
// // // // // // //               <div style={{
// // // // // // //                 background: '#f8f9fa',
// // // // // // //                 padding: '15px',
// // // // // // //                 borderRadius: '8px',
// // // // // // //                 border: '2px solid #e2e8f0',
// // // // // // //                 marginBottom: '15px'
// // // // // // //               }}>
// // // // // // //                 <h3 style={{
// // // // // // //                   margin: '0 0 12px 0',
// // // // // // //                   fontSize: '14px',
// // // // // // //                   fontWeight: '600',
// // // // // // //                   color: '#2d3748'
// // // // // // //                 }}>
// // // // // // //                   File Type
// // // // // // //                 </h3>
// // // // // // //                 <div style={{ display: 'flex', gap: '15px' }}>
// // // // // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // // //                     <input
// // // // // // //                       type="radio"
// // // // // // //                       value="csv"
// // // // // // //                       checked={fileType === 'csv'}
// // // // // // //                       onChange={() => setFileType('csv')}
// // // // // // //                       style={{ marginRight: '8px' }}
// // // // // // //                     />
// // // // // // //                     CSV
// // // // // // //                   </label>
// // // // // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // // //                     <input
// // // // // // //                       type="radio"
// // // // // // //                       value="txt"
// // // // // // //                       checked={fileType === 'txt'}
// // // // // // //                       onChange={() => setFileType('txt')}
// // // // // // //                       style={{ marginRight: '8px' }}
// // // // // // //                     />
// // // // // // //                     TXT
// // // // // // //                   </label>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // // // // //                 <input
// // // // // // //                   type="file"
// // // // // // //                   accept={fileType === 'csv' ? '.csv' : '.txt'}
// // // // // // //                   onChange={handleFileUpload}
// // // // // // //                   style={{
// // // // // // //                     flex: 1,
// // // // // // //                     padding: '10px',
// // // // // // //                     border: '2px solid #e2e8f0',
// // // // // // //                     borderRadius: '6px',
// // // // // // //                     fontSize: '13px',
// // // // // // //                     cursor: 'pointer'
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //                 <button
// // // // // // //                   onClick={handleResetAll}
// // // // // // //                   style={{
// // // // // // //                     background: 'white',
// // // // // // //                     color: '#245de1',
// // // // // // //                     border: '2px solid #245de1',
// // // // // // //                     padding: '10px 15px',
// // // // // // //                     borderRadius: '6px',
// // // // // // //                     cursor: 'pointer',
// // // // // // //                     fontSize: '14px',
// // // // // // //                     fontWeight: '600'
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Reset
// // // // // // //                 </button>
// // // // // // //               </div>

// // // // // // //               {numbers.length > 0 && numbers[0] !== '' && (
// // // // // // //                 <div style={{
// // // // // // //                   background: '#e6f2ff',
// // // // // // //                   padding: '12px',
// // // // // // //                   borderRadius: '6px',
// // // // // // //                   border: '2px solid #245de1',
// // // // // // //                   fontSize: '13px',
// // // // // // //                   color: '#2d3748',
// // // // // // //                   marginBottom: '15px'
// // // // // // //                 }}>
// // // // // // //                   <strong>{numbers.length}</strong> numbers loaded from file
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {error && (
// // // // // // //             <div style={{
// // // // // // //               background: '#ffebee',
// // // // // // //               color: '#d32f2f',
// // // // // // //               border: '2px solid #ef9a9a',
// // // // // // //               borderRadius: '6px',
// // // // // // //               padding: '12px',
// // // // // // //               marginBottom: '15px',
// // // // // // //               fontSize: '13px',
// // // // // // //               fontWeight: '500',
// // // // // // //               textAlign: 'center'
// // // // // // //             }}>
// // // // // // //               {error}
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           <button
// // // // // // //             onClick={handleCalculate}
// // // // // // //             style={{
// // // // // // //               width: '100%',
// // // // // // //               background: '#245de1',
// // // // // // //               color: 'white',
// // // // // // //               border: 'none',
// // // // // // //               padding: '14px',
// // // // // // //               borderRadius: '6px',
// // // // // // //               cursor: 'pointer',
// // // // // // //               fontSize: '16px',
// // // // // // //               fontWeight: '600',
// // // // // // //               marginBottom: '20px',
// // // // // // //               transition: 'background 0.2s'
// // // // // // //             }}
// // // // // // //             onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // // // // //             onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // // // // //           >
// // // // // // //             Calculate Statistics
// // // // // // //           </button>

// // // // // // //           <div style={{
// // // // // // //             background: '#f8f9fa',
// // // // // // //             padding: '15px',
// // // // // // //             borderRadius: '8px',
// // // // // // //             border: '2px solid #e2e8f0'
// // // // // // //           }}>
// // // // // // //             <h3 style={{
// // // // // // //               margin: '0 0 12px 0',
// // // // // // //               fontSize: '14px',
// // // // // // //               fontWeight: '600',
// // // // // // //               color: '#2d3748'
// // // // // // //             }}>
// // // // // // //               Calculation Method
// // // // // // //             </h3>
// // // // // // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// // // // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   value="auto"
// // // // // // //                   checked={preferredCalculation === 'auto'}
// // // // // // //                   onChange={() => setPreferredCalculation('auto')}
// // // // // // //                   style={{ marginRight: '8px' }}
// // // // // // //                 />
// // // // // // //                 Auto (n-1 for n &lt; 30, n for n ≥ 30)
// // // // // // //               </label>
// // // // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   value="n-1"
// // // // // // //                   checked={preferredCalculation === 'n-1'}
// // // // // // //                   onChange={() => setPreferredCalculation('n-1')}
// // // // // // //                   style={{ marginRight: '8px' }}
// // // // // // //                 />
// // // // // // //                 Always use n-1 (Sample)
// // // // // // //               </label>
// // // // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   value="n"
// // // // // // //                   checked={preferredCalculation === 'n'}
// // // // // // //                   onChange={() => setPreferredCalculation('n')}
// // // // // // //                   style={{ marginRight: '8px' }}
// // // // // // //                 />
// // // // // // //                 Always use n (Population)
// // // // // // //               </label>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* RESULTS SECTION */}
// // // // // // //         <div style={{
// // // // // // //           background: 'white',
// // // // // // //           borderRadius: '12px',
// // // // // // //           padding: '25px',
// // // // // // //           border: '2px solid #e2e8f0',
// // // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// // // // // // //           maxHeight: '800px',
// // // // // // //           overflowY: 'auto'
// // // // // // //         }}>
// // // // // // //           <h2 style={{
// // // // // // //             margin: '0 0 20px 0',
// // // // // // //             fontSize: '20px',
// // // // // // //             fontWeight: '600',
// // // // // // //             color: '#2d3748'
// // // // // // //           }}>
// // // // // // //             Results
// // // // // // //           </h2>

// // // // // // //           <div style={{ display: 'grid', gap: '12px' }}>
// // // // // // //             {[
// // // // // // //               { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
// // // // // // //               { label: 'Sum', key: 'sum', value: stats?.sum },
// // // // // // //               { label: 'Mean', key: 'mean', value: stats?.mean },
// // // // // // //               { label: 'Median', key: 'median', value: stats?.median },
// // // // // // //               { label: 'Mode', key: 'mode', value: stats?.mode },
// // // // // // //               { label: 'Min', key: 'min', value: stats?.min },
// // // // // // //               { label: 'Max', key: 'max', value: stats?.max },
// // // // // // //               { label: 'Range', key: 'range', value: stats?.range },
// // // // // // //               { 
// // // // // // //                 label: 'Variance', 
// // // // // // //                 key: 'variance', 
// // // // // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
// // // // // // //               },
// // // // // // //               { 
// // // // // // //                 label: 'Standard Deviation', 
// // // // // // //                 key: 'standardDeviation', 
// // // // // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
// // // // // // //               },
// // // // // // //               { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
// // // // // // //               { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
// // // // // // //               { label: 'IQR', key: 'iqr', value: stats?.iqr },
// // // // // // //               { label: 'Skewness', key: 'skewness', value: stats?.skewness },
// // // // // // //               { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
// // // // // // //               { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
// // // // // // //               { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
// // // // // // //               { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
// // // // // // //               { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
// // // // // // //             ].map((item) => (
// // // // // // //               <div
// // // // // // //                 key={item.key}
// // // // // // //                 style={{
// // // // // // //                   background: '#f8f9fa',
// // // // // // //                   padding: '12px 15px',
// // // // // // //                   borderRadius: '8px',
// // // // // // //                   border: '1.5px solid #e2e8f0',
// // // // // // //                   display: 'flex',
// // // // // // //                   alignItems: 'center',
// // // // // // //                   justifyContent: 'space-between'
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
// // // // // // //                   <span style={{ fontSize: '14px', color: '#718096', fontWeight: '500' }}>
// // // // // // //                     {item.label}
// // // // // // //                   </span>
// // // // // // //                   <div
// // // // // // //                     style={{
// // // // // // //                       position: 'relative',
// // // // // // //                       display: 'inline-flex',
// // // // // // //                       alignItems: 'center'
// // // // // // //                     }}
// // // // // // //                     onMouseEnter={(e) => {
// // // // // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // // // // //                       if (tooltip) {
// // // // // // //                         tooltip.style.visibility = 'visible';
// // // // // // //                         tooltip.style.opacity = '1';
// // // // // // //                       }
// // // // // // //                     }}
// // // // // // //                     onMouseLeave={(e) => {
// // // // // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // // // // //                       if (tooltip) {
// // // // // // //                         tooltip.style.visibility = 'hidden';
// // // // // // //                         tooltip.style.opacity = '0';
// // // // // // //                       }
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     <span
// // // // // // //                       onClick={() => handleExplanationClick(item.key)}
// // // // // // //                       style={{
// // // // // // //                         display: 'inline-flex',
// // // // // // //                         alignItems: 'center',
// // // // // // //                         justifyContent: 'center',
// // // // // // //                         width: '18px',
// // // // // // //                         height: '18px',
// // // // // // //                         borderRadius: '50%',
// // // // // // //                         background: '#245de1',
// // // // // // //                         color: 'white',
// // // // // // //                         fontSize: '12px',
// // // // // // //                         cursor: 'pointer',
// // // // // // //                         fontWeight: '600'
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       i
// // // // // // //                     </span>
// // // // // // //                     <span
// // // // // // //                       data-tooltip
// // // // // // //                       style={{
// // // // // // //                         visibility: 'hidden',
// // // // // // //                         position: 'absolute',
// // // // // // //                         bottom: '125%',
// // // // // // //                         left: '50%',
// // // // // // //                         transform: 'translateX(-50%)',
// // // // // // //                         backgroundColor: '#555',
// // // // // // //                         color: '#fff',
// // // // // // //                         textAlign: 'center',
// // // // // // //                         borderRadius: '6px',
// // // // // // //                         padding: '5px 10px',
// // // // // // //                         whiteSpace: 'nowrap',
// // // // // // //                         fontSize: '11px',
// // // // // // //                         fontWeight: '400',
// // // // // // //                         zIndex: 1,
// // // // // // //                         opacity: 0,
// // // // // // //                         transition: 'opacity 0.3s',
// // // // // // //                         pointerEvents: 'none'
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       Click to see explanation
// // // // // // //                     </span>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //                 <span style={{
// // // // // // //                   fontSize: '16px',
// // // // // // //                   fontWeight: '700',
// // // // // // //                   color: item.value !== undefined ? '#245de1' : '#cbd5e0'
// // // // // // //                 }}>
// // // // // // //                   {item.value !== undefined ? item.value : '—'}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* EXPLANATION SECTION */}
// // // // // // //         <div style={{
// // // // // // //           background: 'white',
// // // // // // //           borderRadius: '12px',
// // // // // // //           padding: '25px',
// // // // // // //           border: '2px solid #e2e8f0',
// // // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // // // // //         }}>
// // // // // // //           <h2 style={{
// // // // // // //             margin: '0 0 20px 0',
// // // // // // //             fontSize: '20px',
// // // // // // //             fontWeight: '600',
// // // // // // //             color: '#2d3748'
// // // // // // //           }}>
// // // // // // //             Explanation
// // // // // // //           </h2>
          
// // // // // // //           {currentExplanation ? (
// // // // // // //             <div style={{
// // // // // // //               background: '#e6f2ff',
// // // // // // //               padding: '18px',
// // // // // // //               borderRadius: '8px',
// // // // // // //               border: '2px solid #245de1',
// // // // // // //               fontSize: '14px',
// // // // // // //               lineHeight: '1.6',
// // // // // // //               color: '#2d3748'
// // // // // // //             }}>
// // // // // // //               {currentExplanation}
// // // // // // //             </div>
// // // // // // //           ) : (
// // // // // // //             <div style={{
// // // // // // //               textAlign: 'center',
// // // // // // //               padding: '40px 20px',
// // // // // // //               color: '#718096',
// // // // // // //               fontSize: '14px',
// // // // // // //               lineHeight: '1.6'
// // // // // // //             }}>
// // // // // // //               Click on any <span style={{
// // // // // // //                 display: 'inline-flex',
// // // // // // //                 alignItems: 'center',
// // // // // // //                 justifyContent: 'center',
// // // // // // //                 width: '18px',
// // // // // // //                 height: '18px',
// // // // // // //                 borderRadius: '50%',
// // // // // // //                 background: '#245de1',
// // // // // // //                 color: 'white',
// // // // // // //                 fontSize: '12px',
// // // // // // //                 fontWeight: '600',
// // // // // // //                 margin: '0 4px'
// // // // // // //               }}>i</span> icon in the results to see an explanation
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default StatisticsCalculator;





// // // // // // import React, { useState } from 'react';
// // // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // // import defaultExplanations from './explanations';

// // // // // // const StatisticsCalculator = ({explanations: propsExplanations}) => {
// // // // // //   const [numbers, setNumbers] = useState(['']);
// // // // // //   const [stats, setStats] = useState(null);
// // // // // //   const [fileType, setFileType] = useState('csv');
// // // // // //   const [inputMethod, setInputMethod] = useState('manual');
// // // // // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');
// // // // // //   const [currentExplanation, setCurrentExplanation] = useState('');
// // // // // //   const [error, setError] = useState(null);

// // // // // //   const explanations = propsExplanations || defaultExplanations;

// // // // // //   const handleExplanationClick = (key) => {
// // // // // //     setCurrentExplanation(explanations[key]);
// // // // // //   };

// // // // // //   const calculateStats = (data) => {
// // // // // //     try {
// // // // // //       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
// // // // // //       if (validData.length === 0) {
// // // // // //         throw new Error("No valid numbers to calculate statistics.");
// // // // // //       }
  
// // // // // //       const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // // //       const n = sortedData.length;
  
// // // // // //       const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // // //       const mean = sum / n;
// // // // // //       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // // // //       const min = sortedData[0];
// // // // // //       const max = sortedData[n - 1];
// // // // // //       const range = max - min;
  
// // // // // //       const modeMap = sortedData.reduce((acc, val) => {
// // // // // //         acc[val] = (acc[val] || 0) + 1;
// // // // // //         return acc;
// // // // // //       }, {});
// // // // // //       const maxFrequency = Math.max(...Object.values(modeMap));
// // // // // //       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
// // // // // //       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
// // // // // //       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // // // // //       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
// // // // // //       const standardDeviationN1 = Math.sqrt(varianceN1);
// // // // // //       const standardDeviationN = Math.sqrt(varianceN);
  
// // // // // //       const q1Index = Math.floor(n / 4);
// // // // // //       const q3Index = Math.floor((3 * n) / 4);
// // // // // //       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
// // // // // //       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
// // // // // //       const iqr = q3 - q1;
  
// // // // // //       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
// // // // // //       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
// // // // // //       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
// // // // // //       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
// // // // // //       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
// // // // // //       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
// // // // // //       return {
// // // // // //         sampleSize: n,
// // // // // //         sum: sum.toFixed(2),
// // // // // //         mean: mean.toFixed(2),
// // // // // //         median: median.toFixed(2),
// // // // // //         mode: modeValue,
// // // // // //         min,
// // // // // //         max,
// // // // // //         range,
// // // // // //         varianceN1: varianceN1.toFixed(2),
// // // // // //         varianceN: varianceN.toFixed(2),
// // // // // //         standardDeviationN1: standardDeviationN1.toFixed(2),
// // // // // //         standardDeviationN: standardDeviationN.toFixed(2),
// // // // // //         q1: q1.toFixed(2),
// // // // // //         q3: q3.toFixed(2),
// // // // // //         iqr: iqr.toFixed(2),
// // // // // //         skewness: skewness.toFixed(2),
// // // // // //         kurtosis: kurtosis.toFixed(2),
// // // // // //         coefficientOfVariation: coefficientOfVariation.toFixed(2),
// // // // // //         geometricMean: geometricMean.toFixed(2),
// // // // // //         harmonicMean: harmonicMean.toFixed(2),
// // // // // //         rootMeanSquare: rootMeanSquare.toFixed(2)
// // // // // //       };
// // // // // //     } catch (error) {
// // // // // //       throw new Error(`Error calculating statistics: ${error.message}`);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleAddNumber = () => {
// // // // // //     setNumbers([...numbers, '']);
// // // // // //     setError(null);
// // // // // //   };

// // // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // // //     setError(null);
// // // // // //   };

// // // // // //   const handleInputChange = (e, index) => {
// // // // // //     const newNumbers = [...numbers];
// // // // // //     newNumbers[index] = e.target.value;
// // // // // //     setNumbers(newNumbers);
// // // // // //     setError(null);
// // // // // //   };

// // // // // //   const handleResetAll = () => {
// // // // // //     setNumbers(['']);
// // // // // //     setPreferredCalculation('auto');
// // // // // //     setStats(null);
// // // // // //     setError(null);
// // // // // //     setCurrentExplanation('');
// // // // // //   };

// // // // // //   const handleCalculate = () => {
// // // // // //     try {
// // // // // //       const result = calculateStats(numbers);
// // // // // //       setStats(result);
// // // // // //       setError(null);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //       setStats(null);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleFileUpload = (event) => {
// // // // // //     setStats(null);
// // // // // //     const file = event.target.files[0];
// // // // // //     if (file) {
// // // // // //       if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
// // // // // //         setError("Please upload a valid .txt or .csv file.");
// // // // // //         return;
// // // // // //       }
// // // // // //       const reader = new FileReader();
// // // // // //       reader.onload = (e) => {
// // // // // //         try {
// // // // // //           let content = e.target.result;
// // // // // //           let parsedNumbers;
          
// // // // // //           if (fileType === 'csv') {
// // // // // //             parsedNumbers = content.split('\n')
// // // // // //               .map(line => line.split(',').map(num => num.trim()))
// // // // // //               .flat()
// // // // // //               .filter(num => num !== '' && !isNaN(num));
// // // // // //           } else {
// // // // // //             parsedNumbers = content.split('\n')
// // // // // //               .map(num => num.trim())
// // // // // //               .filter(num => num !== '' && !isNaN(num));
// // // // // //           }
          
// // // // // //           if (parsedNumbers.length === 0) {
// // // // // //             throw new Error("No valid numbers found in the file.");
// // // // // //           }
// // // // // //           setNumbers(parsedNumbers);
// // // // // //           setError(null);
// // // // // //         } catch (error) {
// // // // // //           setError(`Error processing file: ${error.message}`);
// // // // // //         }
// // // // // //       };
// // // // // //       reader.onerror = () => {
// // // // // //         setError("Error reading file.");
// // // // // //       };
// // // // // //       reader.readAsText(file);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{
// // // // // //       maxWidth: '1400px',
// // // // // //       margin: '0 auto',
// // // // // //       padding: '30px 20px',
// // // // // //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // // //       background: '#ffffff'
// // // // // //     }}>
// // // // // //       {/* <h1 style={{
// // // // // //         textAlign: 'center',
// // // // // //         color: '#2d3748',
// // // // // //         marginBottom: '30px',
// // // // // //         fontSize: '32px',
// // // // // //         fontWeight: '700',
// // // // // //         letterSpacing: '-0.5px'
// // // // // //       }}>
// // // // // //         Statistics Calculator
// // // // // //       </h1> */}

// // // // // //       <div style={{
// // // // // //         display: 'grid',
// // // // // //         gridTemplateColumns: '1fr 1fr 1fr',
// // // // // //         gap: '25px'
// // // // // //       }}>
// // // // // //         {/* INPUT SECTION */}
// // // // // //         <div style={{
// // // // // //           background: 'white',
// // // // // //           borderRadius: '12px',
// // // // // //           padding: '25px',
// // // // // //           border: '2px solid #e2e8f0',
// // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // // // //         }}>
// // // // // //           <h2 style={{
// // // // // //             margin: '0 0 20px 0',
// // // // // //             fontSize: '20px',
// // // // // //             fontWeight: '600',
// // // // // //             color: '#2d3748'
// // // // // //           }}>
// // // // // //             Input Data
// // // // // //           </h2>

// // // // // //           <div style={{
// // // // // //             display: 'flex',
// // // // // //             justifyContent: 'center',
// // // // // //             gap: '10px',
// // // // // //             marginBottom: '25px'
// // // // // //           }}>
// // // // // //             <button
// // // // // //               onClick={() => setInputMethod('manual')}
// // // // // //               style={{
// // // // // //                 background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
// // // // // //                 color: inputMethod === 'manual' ? 'white' : '#718096',
// // // // // //                 border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // // // //                 padding: '8px 20px',
// // // // // //                 borderRadius: '6px',
// // // // // //                 cursor: 'pointer',
// // // // // //                 fontSize: '14px',
// // // // // //                 fontWeight: '600',
// // // // // //                 transition: 'all 0.2s'
// // // // // //               }}
// // // // // //             >
// // // // // //               Manual Input
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => setInputMethod('file')}
// // // // // //               style={{
// // // // // //                 background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
// // // // // //                 color: inputMethod === 'file' ? 'white' : '#718096',
// // // // // //                 border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // // // //                 padding: '8px 20px',
// // // // // //                 borderRadius: '6px',
// // // // // //                 cursor: 'pointer',
// // // // // //                 fontSize: '14px',
// // // // // //                 fontWeight: '600',
// // // // // //                 transition: 'all 0.2s'
// // // // // //               }}
// // // // // //             >
// // // // // //               File Upload
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {inputMethod === 'manual' && (
// // // // // //             <div>
// // // // // //               <div style={{
// // // // // //                 display: 'grid',
// // // // // //                 gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
// // // // // //                 gap: '10px',
// // // // // //                 marginBottom: '15px',
// // // // // //                 maxHeight: '300px',
// // // // // //                 overflowY: 'auto',
// // // // // //                 padding: '5px'
// // // // // //               }}>
// // // // // //                 {numbers.map((num, index) => (
// // // // // //                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // // // //                     <input
// // // // // //                       type="text"
// // // // // //                       value={num}
// // // // // //                       onChange={(e) => handleInputChange(e, index)}
// // // // // //                       placeholder="Value"
// // // // // //                       style={{
// // // // // //                         width: '70px',
// // // // // //                         padding: '8px',
// // // // // //                         border: '2px solid #e2e8f0',
// // // // // //                         borderRadius: '6px',
// // // // // //                         fontSize: '13px',
// // // // // //                         outline: 'none',
// // // // // //                         transition: 'border 0.2s'
// // // // // //                       }}
// // // // // //                       onFocus={(e) => e.target.style.borderColor = '#245de1'}
// // // // // //                       onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
// // // // // //                     />
// // // // // //                     {numbers.length > 1 && (
// // // // // //                       <button
// // // // // //                         onClick={() => handleRemoveNumber(index)}
// // // // // //                         style={{
// // // // // //                           background: '#ef4444',
// // // // // //                           color: 'white',
// // // // // //                           border: 'none',
// // // // // //                           borderRadius: '50%',
// // // // // //                           width: '22px',
// // // // // //                           height: '22px',
// // // // // //                           cursor: 'pointer',
// // // // // //                           fontSize: '16px',
// // // // // //                           display: 'flex',
// // // // // //                           alignItems: 'center',
// // // // // //                           justifyContent: 'center',
// // // // // //                           flexShrink: 0
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         ×
// // // // // //                       </button>
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>

// // // // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // // // //                 <button
// // // // // //                   onClick={handleAddNumber}
// // // // // //                   style={{
// // // // // //                     flex: 1,
// // // // // //                     background: '#245de1',
// // // // // //                     color: 'white',
// // // // // //                     border: 'none',
// // // // // //                     padding: '10px',
// // // // // //                     borderRadius: '6px',
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontSize: '14px',
// // // // // //                     fontWeight: '600',
// // // // // //                     transition: 'background 0.2s'
// // // // // //                   }}
// // // // // //                   onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // // // //                   onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // // // //                 >
// // // // // //                   + Add Number
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   onClick={handleResetAll}
// // // // // //                   style={{
// // // // // //                     flex: 1,
// // // // // //                     background: 'white',
// // // // // //                     color: '#245de1',
// // // // // //                     border: '2px solid #245de1',
// // // // // //                     padding: '10px',
// // // // // //                     borderRadius: '6px',
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontSize: '14px',
// // // // // //                     fontWeight: '600'
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Reset
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {inputMethod === 'file' && (
// // // // // //             <div>
// // // // // //               <div style={{
// // // // // //                 background: '#f8f9fa',
// // // // // //                 padding: '15px',
// // // // // //                 borderRadius: '8px',
// // // // // //                 border: '2px solid #e2e8f0',
// // // // // //                 marginBottom: '15px'
// // // // // //               }}>
// // // // // //                 <h3 style={{
// // // // // //                   margin: '0 0 12px 0',
// // // // // //                   fontSize: '14px',
// // // // // //                   fontWeight: '600',
// // // // // //                   color: '#2d3748'
// // // // // //                 }}>
// // // // // //                   File Type
// // // // // //                 </h3>
// // // // // //                 <div style={{ display: 'flex', gap: '15px' }}>
// // // // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // //                     <input
// // // // // //                       type="radio"
// // // // // //                       value="csv"
// // // // // //                       checked={fileType === 'csv'}
// // // // // //                       onChange={() => setFileType('csv')}
// // // // // //                       style={{ marginRight: '8px' }}
// // // // // //                     />
// // // // // //                     CSV
// // // // // //                   </label>
// // // // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // //                     <input
// // // // // //                       type="radio"
// // // // // //                       value="txt"
// // // // // //                       checked={fileType === 'txt'}
// // // // // //                       onChange={() => setFileType('txt')}
// // // // // //                       style={{ marginRight: '8px' }}
// // // // // //                     />
// // // // // //                     TXT
// // // // // //                   </label>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // // // //                 <input
// // // // // //                   type="file"
// // // // // //                   accept={fileType === 'csv' ? '.csv' : '.txt'}
// // // // // //                   onChange={handleFileUpload}
// // // // // //                   style={{
// // // // // //                     flex: 1,
// // // // // //                     padding: '10px',
// // // // // //                     border: '2px solid #e2e8f0',
// // // // // //                     borderRadius: '6px',
// // // // // //                     fontSize: '13px',
// // // // // //                     cursor: 'pointer'
// // // // // //                   }}
// // // // // //                 />
// // // // // //                 <button
// // // // // //                   onClick={handleResetAll}
// // // // // //                   style={{
// // // // // //                     background: 'white',
// // // // // //                     color: '#245de1',
// // // // // //                     border: '2px solid #245de1',
// // // // // //                     padding: '10px 15px',
// // // // // //                     borderRadius: '6px',
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontSize: '14px',
// // // // // //                     fontWeight: '600'
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Reset
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {numbers.length > 0 && numbers[0] !== '' && (
// // // // // //                 <div style={{
// // // // // //                   background: '#e6f2ff',
// // // // // //                   padding: '12px',
// // // // // //                   borderRadius: '6px',
// // // // // //                   border: '2px solid #245de1',
// // // // // //                   fontSize: '13px',
// // // // // //                   color: '#2d3748',
// // // // // //                   marginBottom: '15px'
// // // // // //                 }}>
// // // // // //                   <strong>{numbers.length}</strong> numbers loaded from file
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {error && (
// // // // // //             <div style={{
// // // // // //               background: '#ffebee',
// // // // // //               color: '#d32f2f',
// // // // // //               border: '2px solid #ef9a9a',
// // // // // //               borderRadius: '6px',
// // // // // //               padding: '12px',
// // // // // //               marginBottom: '15px',
// // // // // //               fontSize: '13px',
// // // // // //               fontWeight: '500',
// // // // // //               textAlign: 'center'
// // // // // //             }}>
// // // // // //               {error}
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <button
// // // // // //             onClick={handleCalculate}
// // // // // //             style={{
// // // // // //               width: '100%',
// // // // // //               background: '#245de1',
// // // // // //               color: 'white',
// // // // // //               border: 'none',
// // // // // //               padding: '14px',
// // // // // //               borderRadius: '6px',
// // // // // //               cursor: 'pointer',
// // // // // //               fontSize: '16px',
// // // // // //               fontWeight: '600',
// // // // // //               marginBottom: '20px',
// // // // // //               transition: 'background 0.2s'
// // // // // //             }}
// // // // // //             onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // // // //             onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // // // //           >
// // // // // //             Calculate Statistics
// // // // // //           </button>

// // // // // //           <div style={{
// // // // // //             background: '#f8f9fa',
// // // // // //             padding: '15px',
// // // // // //             borderRadius: '8px',
// // // // // //             border: '2px solid #e2e8f0'
// // // // // //           }}>
// // // // // //             <h3 style={{
// // // // // //               margin: '0 0 12px 0',
// // // // // //               fontSize: '14px',
// // // // // //               fontWeight: '600',
// // // // // //               color: '#2d3748'
// // // // // //             }}>
// // // // // //               Calculation Method
// // // // // //             </h3>
// // // // // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// // // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   value="auto"
// // // // // //                   checked={preferredCalculation === 'auto'}
// // // // // //                   onChange={() => setPreferredCalculation('auto')}
// // // // // //                   style={{ marginRight: '8px' }}
// // // // // //                 />
// // // // // //                 Auto (n-1 for n &lt; 30, n for n ≥ 30)
// // // // // //               </label>
// // // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   value="n-1"
// // // // // //                   checked={preferredCalculation === 'n-1'}
// // // // // //                   onChange={() => setPreferredCalculation('n-1')}
// // // // // //                   style={{ marginRight: '8px' }}
// // // // // //                 />
// // // // // //                 Always use n-1 (Sample)
// // // // // //               </label>
// // // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   value="n"
// // // // // //                   checked={preferredCalculation === 'n'}
// // // // // //                   onChange={() => setPreferredCalculation('n')}
// // // // // //                   style={{ marginRight: '8px' }}
// // // // // //                 />
// // // // // //                 Always use n (Population)
// // // // // //               </label>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* RESULTS SECTION */}
// // // // // //         <div style={{
// // // // // //           background: 'white',
// // // // // //           borderRadius: '12px',
// // // // // //           padding: '25px',
// // // // // //           border: '2px solid #e2e8f0',
// // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// // // // // //           maxHeight: '800px',
// // // // // //           overflowY: 'auto'
// // // // // //         }}>
// // // // // //           <h2 style={{
// // // // // //             margin: '0 0 20px 0',
// // // // // //             fontSize: '20px',
// // // // // //             fontWeight: '600',
// // // // // //             color: '#2d3748'
// // // // // //           }}>
// // // // // //             Results
// // // // // //           </h2>

// // // // // //           <div style={{ display: 'grid', gap: '12px' }}>
// // // // // //             {[
// // // // // //               { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
// // // // // //               { label: 'Sum', key: 'sum', value: stats?.sum },
// // // // // //               { label: 'Mean', key: 'mean', value: stats?.mean },
// // // // // //               { label: 'Median', key: 'median', value: stats?.median },
// // // // // //               { label: 'Mode', key: 'mode', value: stats?.mode },
// // // // // //               { label: 'Min', key: 'min', value: stats?.min },
// // // // // //               { label: 'Max', key: 'max', value: stats?.max },
// // // // // //               { label: 'Range', key: 'range', value: stats?.range },
// // // // // //               { 
// // // // // //                 label: 'Variance', 
// // // // // //                 key: 'variance', 
// // // // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
// // // // // //               },
// // // // // //               { 
// // // // // //                 label: 'Standard Deviation', 
// // // // // //                 key: 'standardDeviation', 
// // // // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
// // // // // //               },
// // // // // //               { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
// // // // // //               { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
// // // // // //               { label: 'IQR', key: 'iqr', value: stats?.iqr },
// // // // // //               { label: 'Skewness', key: 'skewness', value: stats?.skewness },
// // // // // //               { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
// // // // // //               { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
// // // // // //               { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
// // // // // //               { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
// // // // // //               { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
// // // // // //             ].map((item) => (
// // // // // //               <div
// // // // // //                 key={item.key}
// // // // // //                 style={{
// // // // // //                   background: '#f8f9fa',
// // // // // //                   padding: '12px 15px',
// // // // // //                   borderRadius: '8px',
// // // // // //                   border: '1.5px solid #e2e8f0',
// // // // // //                   display: 'flex',
// // // // // //                   alignItems: 'center',
// // // // // //                   justifyContent: 'space-between'
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
// // // // // //                   <span style={{ fontSize: '14px', color: '#718096', fontWeight: '500' }}>
// // // // // //                     {item.label}
// // // // // //                   </span>
// // // // // //                   <div
// // // // // //                     style={{
// // // // // //                       position: 'relative',
// // // // // //                       display: 'inline-flex',
// // // // // //                       alignItems: 'center'
// // // // // //                     }}
// // // // // //                     onMouseEnter={(e) => {
// // // // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // // // //                       if (tooltip) {
// // // // // //                         tooltip.style.visibility = 'visible';
// // // // // //                         tooltip.style.opacity = '1';
// // // // // //                       }
// // // // // //                     }}
// // // // // //                     onMouseLeave={(e) => {
// // // // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // // // //                       if (tooltip) {
// // // // // //                         tooltip.style.visibility = 'hidden';
// // // // // //                         tooltip.style.opacity = '0';
// // // // // //                       }
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     <span
// // // // // //                       onClick={() => handleExplanationClick(item.key)}
// // // // // //                       style={{
// // // // // //                         display: 'inline-flex',
// // // // // //                         alignItems: 'center',
// // // // // //                         justifyContent: 'center',
// // // // // //                         width: '18px',
// // // // // //                         height: '18px',
// // // // // //                         borderRadius: '50%',
// // // // // //                         background: '#245de1',
// // // // // //                         color: 'white',
// // // // // //                         fontSize: '12px',
// // // // // //                         cursor: 'pointer',
// // // // // //                         fontWeight: '600'
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       i
// // // // // //                     </span>
// // // // // //                     <span
// // // // // //                       data-tooltip
// // // // // //                       style={{
// // // // // //                         visibility: 'hidden',
// // // // // //                         position: 'absolute',
// // // // // //                         bottom: '125%',
// // // // // //                         left: '50%',
// // // // // //                         transform: 'translateX(-50%)',
// // // // // //                         backgroundColor: '#555',
// // // // // //                         color: '#fff',
// // // // // //                         textAlign: 'center',
// // // // // //                         borderRadius: '6px',
// // // // // //                         padding: '5px 10px',
// // // // // //                         whiteSpace: 'nowrap',
// // // // // //                         fontSize: '11px',
// // // // // //                         fontWeight: '400',
// // // // // //                         zIndex: 1,
// // // // // //                         opacity: 0,
// // // // // //                         transition: 'opacity 0.3s',
// // // // // //                         pointerEvents: 'none'
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       Click to see explanation
// // // // // //                     </span>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <span style={{
// // // // // //                   fontSize: '16px',
// // // // // //                   fontWeight: '700',
// // // // // //                   color: item.value !== undefined ? '#245de1' : '#cbd5e0'
// // // // // //                 }}>
// // // // // //                   {item.value !== undefined ? item.value : '—'}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* EXPLANATION SECTION */}
// // // // // //         <div style={{
// // // // // //           background: 'white',
// // // // // //           borderRadius: '12px',
// // // // // //           padding: '25px',
// // // // // //           border: '2px solid #e2e8f0',
// // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // // // //         }}>
// // // // // //           <h2 style={{
// // // // // //             margin: '0 0 20px 0',
// // // // // //             fontSize: '20px',
// // // // // //             fontWeight: '600',
// // // // // //             color: '#2d3748'
// // // // // //           }}>
// // // // // //             Explanation
// // // // // //           </h2>
          
// // // // // //           {currentExplanation ? (
// // // // // //             <div style={{
// // // // // //               background: '#e6f2ff',
// // // // // //               padding: '18px',
// // // // // //               borderRadius: '8px',
// // // // // //               border: '2px solid #245de1',
// // // // // //               fontSize: '14px',
// // // // // //               lineHeight: '1.6',
// // // // // //               color: '#2d3748'
// // // // // //             }}>
// // // // // //               {currentExplanation}
// // // // // //             </div>
// // // // // //           ) : (
// // // // // //             <div style={{
// // // // // //               textAlign: 'center',
// // // // // //               padding: '40px 20px',
// // // // // //               color: '#718096',
// // // // // //               fontSize: '14px',
// // // // // //               lineHeight: '1.6'
// // // // // //             }}>
// // // // // //               Click on any <span style={{
// // // // // //                 display: 'inline-flex',
// // // // // //                 alignItems: 'center',
// // // // // //                 justifyContent: 'center',
// // // // // //                 width: '18px',
// // // // // //                 height: '18px',
// // // // // //                 borderRadius: '50%',
// // // // // //                 background: '#245de1',
// // // // // //                 color: 'white',
// // // // // //                 fontSize: '12px',
// // // // // //                 fontWeight: '600',
// // // // // //                 margin: '0 4px'
// // // // // //               }}>i</span> icon in the results to see an explanation
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default StatisticsCalculator;


// // // // // import React, { useState } from 'react';
// // // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // // import defaultExplanations from './explanations';

// // // // // const StatisticsCalculator = ({explanations: propsExplanations}) => {
// // // // //   const [numbers, setNumbers] = useState(['']);
// // // // //   const [stats, setStats] = useState(null);
// // // // //   const [fileType, setFileType] = useState('csv');
// // // // //   const [inputMethod, setInputMethod] = useState('manual');
// // // // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');
// // // // //   const [currentExplanation, setCurrentExplanation] = useState('');
// // // // //   const [error, setError] = useState(null);

// // // // //   const explanations = propsExplanations || defaultExplanations;

// // // // //   const handleExplanationClick = (key) => {
// // // // //     setCurrentExplanation(explanations[key]);
// // // // //   };

// // // // //   const calculateStats = (data) => {
// // // // //     try {
// // // // //       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
// // // // //       if (validData.length === 0) {
// // // // //         throw new Error("No valid numbers to calculate statistics.");
// // // // //       }
  
// // // // //       const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // //       const n = sortedData.length;
  
// // // // //       const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // //       const mean = sum / n;
// // // // //       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // // //       const min = sortedData[0];
// // // // //       const max = sortedData[n - 1];
// // // // //       const range = max - min;
  
// // // // //       const modeMap = sortedData.reduce((acc, val) => {
// // // // //         acc[val] = (acc[val] || 0) + 1;
// // // // //         return acc;
// // // // //       }, {});
// // // // //       const maxFrequency = Math.max(...Object.values(modeMap));
// // // // //       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
// // // // //       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
// // // // //       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // // // //       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
// // // // //       const standardDeviationN1 = Math.sqrt(varianceN1);
// // // // //       const standardDeviationN = Math.sqrt(varianceN);
  
// // // // //       const q1Index = Math.floor(n / 4);
// // // // //       const q3Index = Math.floor((3 * n) / 4);
// // // // //       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
// // // // //       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
// // // // //       const iqr = q3 - q1;
  
// // // // //       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
// // // // //       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
// // // // //       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
// // // // //       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
// // // // //       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
// // // // //       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
// // // // //       return {
// // // // //         sampleSize: n,
// // // // //         sum: sum.toFixed(2),
// // // // //         mean: mean.toFixed(2),
// // // // //         median: median.toFixed(2),
// // // // //         mode: modeValue,
// // // // //         min,
// // // // //         max,
// // // // //         range,
// // // // //         varianceN1: varianceN1.toFixed(2),
// // // // //         varianceN: varianceN.toFixed(2),
// // // // //         standardDeviationN1: standardDeviationN1.toFixed(2),
// // // // //         standardDeviationN: standardDeviationN.toFixed(2),
// // // // //         q1: q1.toFixed(2),
// // // // //         q3: q3.toFixed(2),
// // // // //         iqr: iqr.toFixed(2),
// // // // //         skewness: skewness.toFixed(2),
// // // // //         kurtosis: kurtosis.toFixed(2),
// // // // //         coefficientOfVariation: coefficientOfVariation.toFixed(2),
// // // // //         geometricMean: geometricMean.toFixed(2),
// // // // //         harmonicMean: harmonicMean.toFixed(2),
// // // // //         rootMeanSquare: rootMeanSquare.toFixed(2)
// // // // //       };
// // // // //     } catch (error) {
// // // // //       throw new Error(`Error calculating statistics: ${error.message}`);
// // // // //     }
// // // // //   };

// // // // //   const handleAddNumber = () => {
// // // // //     setNumbers([...numbers, '']);
// // // // //     setError(null);
// // // // //   };

// // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // //     setError(null);
// // // // //   };

// // // // //   const handleInputChange = (e, index) => {
// // // // //     const newNumbers = [...numbers];
// // // // //     newNumbers[index] = e.target.value;
// // // // //     setNumbers(newNumbers);
// // // // //     setError(null);
// // // // //   };

// // // // //   const handleResetAll = () => {
// // // // //     setNumbers(['']);
// // // // //     setPreferredCalculation('auto');
// // // // //     setStats(null);
// // // // //     setError(null);
// // // // //     setCurrentExplanation('');
// // // // //   };

// // // // //   const handleCalculate = () => {
// // // // //     try {
// // // // //       const result = calculateStats(numbers);
// // // // //       setStats(result);
// // // // //       setError(null);
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //       setStats(null);
// // // // //     }
// // // // //   };

// // // // //   const handleFileUpload = (event) => {
// // // // //     setStats(null);
// // // // //     const file = event.target.files[0];
// // // // //     if (file) {
// // // // //       if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
// // // // //         setError("Please upload a valid .txt or .csv file.");
// // // // //         return;
// // // // //       }
// // // // //       const reader = new FileReader();
// // // // //       reader.onload = (e) => {
// // // // //         try {
// // // // //           let content = e.target.result;
// // // // //           let parsedNumbers;
          
// // // // //           if (fileType === 'csv') {
// // // // //             parsedNumbers = content.split('\n')
// // // // //               .map(line => line.split(',').map(num => num.trim()))
// // // // //               .flat()
// // // // //               .filter(num => num !== '' && !isNaN(num));
// // // // //           } else {
// // // // //             parsedNumbers = content.split('\n')
// // // // //               .map(num => num.trim())
// // // // //               .filter(num => num !== '' && !isNaN(num));
// // // // //           }
          
// // // // //           if (parsedNumbers.length === 0) {
// // // // //             throw new Error("No valid numbers found in the file.");
// // // // //           }
// // // // //           setNumbers(parsedNumbers);
// // // // //           setError(null);
// // // // //         } catch (error) {
// // // // //           setError(`Error processing file: ${error.message}`);
// // // // //         }
// // // // //       };
// // // // //       reader.onerror = () => {
// // // // //         setError("Error reading file.");
// // // // //       };
// // // // //       reader.readAsText(file);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={{
// // // // //       maxWidth: '1400px',
// // // // //       margin: '0 auto',
// // // // //       padding: '30px 20px',
// // // // //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // // //       background: '#ffffff'
// // // // //     }}>
// // // // //       {/* <h1 style={{
// // // // //         textAlign: 'center',
// // // // //         color: '#2d3748',
// // // // //         marginBottom: '30px',
// // // // //         fontSize: '32px',
// // // // //         fontWeight: '700',
// // // // //         letterSpacing: '-0.5px'
// // // // //       }}>
// // // // //         Statistics Calculator
// // // // //       </h1> */}

// // // // //       <div style={{
// // // // //         display: 'grid',
// // // // //         gridTemplateColumns: '1fr 1fr 1fr',
// // // // //         gap: '25px'
// // // // //       }}>
// // // // //         {/* INPUT SECTION */}
// // // // //         <div style={{
// // // // //           background: 'white',
// // // // //           borderRadius: '12px',
// // // // //           padding: '25px',
// // // // //           border: '2px solid #e2e8f0',
// // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // // //         }}>
// // // // //           <h2 style={{
// // // // //             margin: '0 0 20px 0',
// // // // //             fontSize: '20px',
// // // // //             fontWeight: '600',
// // // // //             color: '#2d3748'
// // // // //           }}>
// // // // //             Input Data
// // // // //           </h2>

// // // // //           <div style={{
// // // // //             display: 'flex',
// // // // //             justifyContent: 'center',
// // // // //             gap: '10px',
// // // // //             marginBottom: '25px'
// // // // //           }}>
// // // // //             <button
// // // // //               onClick={() => setInputMethod('manual')}
// // // // //               style={{
// // // // //                 background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
// // // // //                 color: inputMethod === 'manual' ? 'white' : '#718096',
// // // // //                 border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // // //                 padding: '8px 20px',
// // // // //                 borderRadius: '6px',
// // // // //                 cursor: 'pointer',
// // // // //                 fontSize: '14px',
// // // // //                 fontWeight: '600',
// // // // //                 transition: 'all 0.2s'
// // // // //               }}
// // // // //             >
// // // // //               Manual Input
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setInputMethod('file')}
// // // // //               style={{
// // // // //                 background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
// // // // //                 color: inputMethod === 'file' ? 'white' : '#718096',
// // // // //                 border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // // //                 padding: '8px 20px',
// // // // //                 borderRadius: '6px',
// // // // //                 cursor: 'pointer',
// // // // //                 fontSize: '14px',
// // // // //                 fontWeight: '600',
// // // // //                 transition: 'all 0.2s'
// // // // //               }}
// // // // //             >
// // // // //               File Upload
// // // // //             </button>
// // // // //           </div>

// // // // //           {inputMethod === 'manual' && (
// // // // //             <div>
// // // // //               <div style={{
// // // // //                 display: 'grid',
// // // // //                 gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
// // // // //                 gap: '10px',
// // // // //                 marginBottom: '15px',
// // // // //                 maxHeight: '300px',
// // // // //                 overflowY: 'auto',
// // // // //                 padding: '5px'
// // // // //               }}>
// // // // //                 {numbers.map((num, index) => (
// // // // //                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // // //                     <input
// // // // //                       type="number"
// // // // //                       value={num}
// // // // //                       onChange={(e) => handleInputChange(e, index)}
// // // // //                       placeholder="Value"
// // // // //                       style={{
// // // // //                         width: '70px',
// // // // //                         padding: '8px',
// // // // //                         border: '2px solid #e2e8f0',
// // // // //                         borderRadius: '6px',
// // // // //                         fontSize: '13px',
// // // // //                         outline: 'none',
// // // // //                         transition: 'border 0.2s'
// // // // //                       }}
// // // // //                       onFocus={(e) => e.target.style.borderColor = '#245de1'}
// // // // //                       onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
// // // // //                     />
// // // // //                     {numbers.length > 1 && (
// // // // //                       <button
// // // // //                         onClick={() => handleRemoveNumber(index)}
// // // // //                         style={{
// // // // //                           background: '#ef4444',
// // // // //                           color: 'white',
// // // // //                           border: 'none',
// // // // //                           borderRadius: '50%',
// // // // //                           width: '22px',
// // // // //                           height: '22px',
// // // // //                           cursor: 'pointer',
// // // // //                           fontSize: '16px',
// // // // //                           display: 'flex',
// // // // //                           alignItems: 'center',
// // // // //                           justifyContent: 'center',
// // // // //                           flexShrink: 0
// // // // //                         }}
// // // // //                       >
// // // // //                         ×
// // // // //                       </button>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>

// // // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // // //                 <button
// // // // //                   onClick={handleAddNumber}
// // // // //                   style={{
// // // // //                     flex: 1,
// // // // //                     background: '#245de1',
// // // // //                     color: 'white',
// // // // //                     border: 'none',
// // // // //                     padding: '10px',
// // // // //                     borderRadius: '6px',
// // // // //                     cursor: 'pointer',
// // // // //                     fontSize: '14px',
// // // // //                     fontWeight: '600',
// // // // //                     transition: 'background 0.2s'
// // // // //                   }}
// // // // //                   onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // // //                   onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // // //                 >
// // // // //                   + Add Number
// // // // //                 </button>
// // // // //                 <button
// // // // //                   onClick={handleResetAll}
// // // // //                   style={{
// // // // //                     flex: 1,
// // // // //                     background: 'white',
// // // // //                     color: '#245de1',
// // // // //                     border: '2px solid #245de1',
// // // // //                     padding: '10px',
// // // // //                     borderRadius: '6px',
// // // // //                     cursor: 'pointer',
// // // // //                     fontSize: '14px',
// // // // //                     fontWeight: '600'
// // // // //                   }}
// // // // //                 >
// // // // //                   Reset
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           {inputMethod === 'file' && (
// // // // //             <div>
// // // // //               <div style={{
// // // // //                 background: '#f8f9fa',
// // // // //                 padding: '15px',
// // // // //                 borderRadius: '8px',
// // // // //                 border: '2px solid #e2e8f0',
// // // // //                 marginBottom: '15px'
// // // // //               }}>
// // // // //                 <h3 style={{
// // // // //                   margin: '0 0 12px 0',
// // // // //                   fontSize: '14px',
// // // // //                   fontWeight: '600',
// // // // //                   color: '#2d3748'
// // // // //                 }}>
// // // // //                   File Type
// // // // //                 </h3>
// // // // //                 <div style={{ display: 'flex', gap: '15px' }}>
// // // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // //                     <input
// // // // //                       type="radio"
// // // // //                       value="csv"
// // // // //                       checked={fileType === 'csv'}
// // // // //                       onChange={() => setFileType('csv')}
// // // // //                       style={{ marginRight: '8px' }}
// // // // //                     />
// // // // //                     CSV
// // // // //                   </label>
// // // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // //                     <input
// // // // //                       type="radio"
// // // // //                       value="txt"
// // // // //                       checked={fileType === 'txt'}
// // // // //                       onChange={() => setFileType('txt')}
// // // // //                       style={{ marginRight: '8px' }}
// // // // //                     />
// // // // //                     TXT
// // // // //                   </label>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // // //                 <input
// // // // //                   type="file"
// // // // //                   accept={fileType === 'csv' ? '.csv' : '.txt'}
// // // // //                   onChange={handleFileUpload}
// // // // //                   style={{
// // // // //                     flex: 1,
// // // // //                     padding: '10px',
// // // // //                     border: '2px solid #e2e8f0',
// // // // //                     borderRadius: '6px',
// // // // //                     fontSize: '13px',
// // // // //                     cursor: 'pointer'
// // // // //                   }}
// // // // //                 />
// // // // //                 <button
// // // // //                   onClick={handleResetAll}
// // // // //                   style={{
// // // // //                     background: 'white',
// // // // //                     color: '#245de1',
// // // // //                     border: '2px solid #245de1',
// // // // //                     padding: '10px 15px',
// // // // //                     borderRadius: '6px',
// // // // //                     cursor: 'pointer',
// // // // //                     fontSize: '14px',
// // // // //                     fontWeight: '600'
// // // // //                   }}
// // // // //                 >
// // // // //                   Reset
// // // // //                 </button>
// // // // //               </div>

// // // // //               {numbers.length > 0 && numbers[0] !== '' && (
// // // // //                 <div style={{
// // // // //                   background: '#e6f2ff',
// // // // //                   padding: '12px',
// // // // //                   borderRadius: '6px',
// // // // //                   border: '2px solid #245de1',
// // // // //                   fontSize: '13px',
// // // // //                   color: '#2d3748',
// // // // //                   marginBottom: '15px'
// // // // //                 }}>
// // // // //                   <strong>{numbers.length}</strong> numbers loaded from file
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           )}

// // // // //           {error && (
// // // // //             <div style={{
// // // // //               background: '#ffebee',
// // // // //               color: '#d32f2f',
// // // // //               border: '2px solid #ef9a9a',
// // // // //               borderRadius: '6px',
// // // // //               padding: '12px',
// // // // //               marginBottom: '15px',
// // // // //               fontSize: '13px',
// // // // //               fontWeight: '500',
// // // // //               textAlign: 'center'
// // // // //             }}>
// // // // //               {error}
// // // // //             </div>
// // // // //           )}

// // // // //           <button
// // // // //             onClick={handleCalculate}
// // // // //             style={{
// // // // //               width: '100%',
// // // // //               background: '#245de1',
// // // // //               color: 'white',
// // // // //               border: 'none',
// // // // //               padding: '14px',
// // // // //               borderRadius: '6px',
// // // // //               cursor: 'pointer',
// // // // //               fontSize: '16px',
// // // // //               fontWeight: '600',
// // // // //               marginBottom: '20px',
// // // // //               transition: 'background 0.2s'
// // // // //             }}
// // // // //             onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // // //             onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // // //           >
// // // // //             Calculate Statistics
// // // // //           </button>

// // // // //           <div style={{
// // // // //             background: '#f8f9fa',
// // // // //             padding: '15px',
// // // // //             borderRadius: '8px',
// // // // //             border: '2px solid #e2e8f0'
// // // // //           }}>
// // // // //             <h3 style={{
// // // // //               margin: '0 0 12px 0',
// // // // //               fontSize: '14px',
// // // // //               fontWeight: '600',
// // // // //               color: '#2d3748'
// // // // //             }}>
// // // // //               Calculation Method
// // // // //             </h3>
// // // // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   value="auto"
// // // // //                   checked={preferredCalculation === 'auto'}
// // // // //                   onChange={() => setPreferredCalculation('auto')}
// // // // //                   style={{ marginRight: '8px' }}
// // // // //                 />
// // // // //                 Auto (n-1 for n &lt; 30, n for n ≥ 30)
// // // // //               </label>
// // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   value="n-1"
// // // // //                   checked={preferredCalculation === 'n-1'}
// // // // //                   onChange={() => setPreferredCalculation('n-1')}
// // // // //                   style={{ marginRight: '8px' }}
// // // // //                 />
// // // // //                 Always use n-1 (Sample)
// // // // //               </label>
// // // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   value="n"
// // // // //                   checked={preferredCalculation === 'n'}
// // // // //                   onChange={() => setPreferredCalculation('n')}
// // // // //                   style={{ marginRight: '8px' }}
// // // // //                 />
// // // // //                 Always use n (Population)
// // // // //               </label>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* RESULTS SECTION */}
// // // // //         <div style={{
// // // // //           background: 'white',
// // // // //           borderRadius: '12px',
// // // // //           padding: '25px',
// // // // //           border: '2px solid #e2e8f0',
// // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// // // // //           maxHeight: '800px',
// // // // //           overflowY: 'auto'
// // // // //         }}>
// // // // //           <h2 style={{
// // // // //             margin: '0 0 20px 0',
// // // // //             fontSize: '20px',
// // // // //             fontWeight: '600',
// // // // //             color: '#2d3748'
// // // // //           }}>
// // // // //             Results
// // // // //           </h2>

// // // // //           <div style={{ display: 'grid', gap: '12px' }}>
// // // // //             {[
// // // // //               { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
// // // // //               { label: 'Sum', key: 'sum', value: stats?.sum },
// // // // //               { label: 'Mean', key: 'mean', value: stats?.mean },
// // // // //               { label: 'Median', key: 'median', value: stats?.median },
// // // // //               { label: 'Mode', key: 'mode', value: stats?.mode },
// // // // //               { label: 'Min', key: 'min', value: stats?.min },
// // // // //               { label: 'Max', key: 'max', value: stats?.max },
// // // // //               { label: 'Range', key: 'range', value: stats?.range },
// // // // //               { 
// // // // //                 label: 'Variance', 
// // // // //                 key: 'variance', 
// // // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
// // // // //               },
// // // // //               { 
// // // // //                 label: 'Standard Deviation', 
// // // // //                 key: 'standardDeviation', 
// // // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
// // // // //               },
// // // // //               { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
// // // // //               { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
// // // // //               { label: 'IQR', key: 'iqr', value: stats?.iqr },
// // // // //               { label: 'Skewness', key: 'skewness', value: stats?.skewness },
// // // // //               { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
// // // // //               { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
// // // // //               { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
// // // // //               { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
// // // // //               { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
// // // // //             ].map((item) => (
// // // // //               <div
// // // // //                 key={item.key}
// // // // //                 style={{
// // // // //                   background: '#f8f9fa',
// // // // //                   padding: '12px 15px',
// // // // //                   borderRadius: '8px',
// // // // //                   border: '1.5px solid #e2e8f0',
// // // // //                   display: 'flex',
// // // // //                   alignItems: 'center',
// // // // //                   justifyContent: 'space-between'
// // // // //                 }}
// // // // //               >
// // // // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
// // // // //                   <span style={{ fontSize: '14px', color: '#718096', fontWeight: '500' }}>
// // // // //                     {item.label}
// // // // //                   </span>
// // // // //                   <div
// // // // //                     style={{
// // // // //                       position: 'relative',
// // // // //                       display: 'inline-flex',
// // // // //                       alignItems: 'center'
// // // // //                     }}
// // // // //                     onMouseEnter={(e) => {
// // // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // // //                       if (tooltip) {
// // // // //                         tooltip.style.visibility = 'visible';
// // // // //                         tooltip.style.opacity = '1';
// // // // //                       }
// // // // //                     }}
// // // // //                     onMouseLeave={(e) => {
// // // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // // //                       if (tooltip) {
// // // // //                         tooltip.style.visibility = 'hidden';
// // // // //                         tooltip.style.opacity = '0';
// // // // //                       }
// // // // //                     }}
// // // // //                   >
// // // // //                     <span
// // // // //                       onClick={() => handleExplanationClick(item.key)}
// // // // //                       style={{
// // // // //                         display: 'inline-flex',
// // // // //                         alignItems: 'center',
// // // // //                         justifyContent: 'center',
// // // // //                         width: '18px',
// // // // //                         height: '18px',
// // // // //                         borderRadius: '50%',
// // // // //                         background: '#245de1',
// // // // //                         color: 'white',
// // // // //                         fontSize: '12px',
// // // // //                         cursor: 'pointer',
// // // // //                         fontWeight: '600'
// // // // //                       }}
// // // // //                     >
// // // // //                       i
// // // // //                     </span>
// // // // //                     <span
// // // // //                       data-tooltip
// // // // //                       style={{
// // // // //                         visibility: 'hidden',
// // // // //                         position: 'absolute',
// // // // //                         bottom: '125%',
// // // // //                         left: '50%',
// // // // //                         transform: 'translateX(-50%)',
// // // // //                         backgroundColor: '#555',
// // // // //                         color: '#fff',
// // // // //                         textAlign: 'center',
// // // // //                         borderRadius: '6px',
// // // // //                         padding: '5px 10px',
// // // // //                         whiteSpace: 'nowrap',
// // // // //                         fontSize: '11px',
// // // // //                         fontWeight: '400',
// // // // //                         zIndex: 1,
// // // // //                         opacity: 0,
// // // // //                         transition: 'opacity 0.3s',
// // // // //                         pointerEvents: 'none'
// // // // //                       }}
// // // // //                     >
// // // // //                       Click to see explanation
// // // // //                     </span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <span style={{
// // // // //                   fontSize: '16px',
// // // // //                   fontWeight: '700',
// // // // //                   color: item.value !== undefined ? '#245de1' : '#cbd5e0'
// // // // //                 }}>
// // // // //                   {item.value !== undefined ? item.value : '—'}
// // // // //                 </span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* EXPLANATION SECTION */}
// // // // //         <div style={{
// // // // //           background: 'white',
// // // // //           borderRadius: '12px',
// // // // //           padding: '25px',
// // // // //           border: '2px solid #e2e8f0',
// // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // // //         }}>
// // // // //           <h2 style={{
// // // // //             margin: '0 0 20px 0',
// // // // //             fontSize: '20px',
// // // // //             fontWeight: '600',
// // // // //             color: '#2d3748'
// // // // //           }}>
// // // // //             Explanation
// // // // //           </h2>
          
// // // // //           {currentExplanation ? (
// // // // //             <div style={{
// // // // //               background: '#e6f2ff',
// // // // //               padding: '18px',
// // // // //               borderRadius: '8px',
// // // // //               border: '2px solid #245de1',
// // // // //               fontSize: '14px',
// // // // //               lineHeight: '1.6',
// // // // //               color: '#2d3748'
// // // // //             }}>
// // // // //               {currentExplanation}
// // // // //             </div>
// // // // //           ) : (
// // // // //             <div style={{
// // // // //               textAlign: 'center',
// // // // //               padding: '40px 20px',
// // // // //               color: '#718096',
// // // // //               fontSize: '14px',
// // // // //               lineHeight: '1.6'
// // // // //             }}>
// // // // //               Click on any <span style={{
// // // // //                 display: 'inline-flex',
// // // // //                 alignItems: 'center',
// // // // //                 justifyContent: 'center',
// // // // //                 width: '18px',
// // // // //                 height: '18px',
// // // // //                 borderRadius: '50%',
// // // // //                 background: '#245de1',
// // // // //                 color: 'white',
// // // // //                 fontSize: '12px',
// // // // //                 fontWeight: '600',
// // // // //                 margin: '0 4px'
// // // // //               }}>i</span> icon in the results to see an explanation
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default StatisticsCalculator;



// // // // import React, { useState } from 'react';
// // // // import { processContent } from '@/app/utils/contentProcessor';
// // // // import defaultExplanations from './explanations';

// // // // const StatisticsCalculator = ({explanations: propsExplanations}) => {
// // // //   const [numbers, setNumbers] = useState(['']);
// // // //   const [stats, setStats] = useState(null);
// // // //   const [fileType, setFileType] = useState('csv');
// // // //   const [inputMethod, setInputMethod] = useState('manual');
// // // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');
// // // //   const [currentExplanation, setCurrentExplanation] = useState('');
// // // //   const [error, setError] = useState(null);

// // // //   const explanations = propsExplanations || defaultExplanations;

// // // //   const handleExplanationClick = (key) => {
// // // //     setCurrentExplanation(explanations[key]);
// // // //   };

// // // //   const calculateStats = (data) => {
// // // //     try {
// // // //       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
// // // //       if (validData.length === 0) {
// // // //         throw new Error("No valid numbers to calculate statistics.");
// // // //       }
  
// // // //       const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // //       const n = sortedData.length;
  
// // // //       const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // //       const mean = sum / n;
// // // //       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // //       const min = sortedData[0];
// // // //       const max = sortedData[n - 1];
// // // //       const range = max - min;
  
// // // //       const modeMap = sortedData.reduce((acc, val) => {
// // // //         acc[val] = (acc[val] || 0) + 1;
// // // //         return acc;
// // // //       }, {});
// // // //       const maxFrequency = Math.max(...Object.values(modeMap));
// // // //       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
// // // //       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
// // // //       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // // //       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
// // // //       const standardDeviationN1 = Math.sqrt(varianceN1);
// // // //       const standardDeviationN = Math.sqrt(varianceN);
  
// // // //       const q1Index = Math.floor(n / 4);
// // // //       const q3Index = Math.floor((3 * n) / 4);
// // // //       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
// // // //       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
// // // //       const iqr = q3 - q1;
  
// // // //       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
// // // //       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
// // // //       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
// // // //       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
// // // //       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
// // // //       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
// // // //       return {
// // // //         sampleSize: n,
// // // //         sum: sum.toFixed(2),
// // // //         mean: mean.toFixed(2),
// // // //         median: median.toFixed(2),
// // // //         mode: modeValue,
// // // //         min,
// // // //         max,
// // // //         range,
// // // //         varianceN1: varianceN1.toFixed(2),
// // // //         varianceN: varianceN.toFixed(2),
// // // //         standardDeviationN1: standardDeviationN1.toFixed(2),
// // // //         standardDeviationN: standardDeviationN.toFixed(2),
// // // //         q1: q1.toFixed(2),
// // // //         q3: q3.toFixed(2),
// // // //         iqr: iqr.toFixed(2),
// // // //         skewness: skewness.toFixed(2),
// // // //         kurtosis: kurtosis.toFixed(2),
// // // //         coefficientOfVariation: coefficientOfVariation.toFixed(2),
// // // //         geometricMean: geometricMean.toFixed(2),
// // // //         harmonicMean: harmonicMean.toFixed(2),
// // // //         rootMeanSquare: rootMeanSquare.toFixed(2)
// // // //       };
// // // //     } catch (error) {
// // // //       throw new Error(`Error calculating statistics: ${error.message}`);
// // // //     }
// // // //   };

// // // //   const handleAddNumber = () => {
// // // //     setNumbers([...numbers, '']);
// // // //     setError(null);
// // // //   };

// // // //   const handleRemoveNumber = (indexToRemove) => {
// // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // //     setError(null);
// // // //   };

// // // //   const handleInputChange = (e, index) => {
// // // //     const newNumbers = [...numbers];
// // // //     newNumbers[index] = e.target.value;
// // // //     setNumbers(newNumbers);
// // // //     setError(null);
// // // //   };

// // // //   const handleResetAll = () => {
// // // //     setNumbers(['']);
// // // //     setPreferredCalculation('auto');
// // // //     setStats(null);
// // // //     setError(null);
// // // //     setCurrentExplanation('');
// // // //   };

// // // //   const handleCalculate = () => {
// // // //     try {
// // // //       const result = calculateStats(numbers);
// // // //       setStats(result);
// // // //       setError(null);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //       setStats(null);
// // // //     }
// // // //   };

// // // //   const handleFileUpload = (event) => {
// // // //     setStats(null);
// // // //     const file = event.target.files[0];
// // // //     if (file) {
// // // //       if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
// // // //         setError("Please upload a valid .txt or .csv file.");
// // // //         return;
// // // //       }
// // // //       const reader = new FileReader();
// // // //       reader.onload = (e) => {
// // // //         try {
// // // //           let content = e.target.result;
// // // //           let parsedNumbers;
          
// // // //           if (fileType === 'csv') {
// // // //             parsedNumbers = content.split('\n')
// // // //               .map(line => line.split(',').map(num => num.trim()))
// // // //               .flat()
// // // //               .filter(num => num !== '' && !isNaN(num));
// // // //           } else {
// // // //             parsedNumbers = content.split('\n')
// // // //               .map(num => num.trim())
// // // //               .filter(num => num !== '' && !isNaN(num));
// // // //           }
          
// // // //           if (parsedNumbers.length === 0) {
// // // //             throw new Error("No valid numbers found in the file.");
// // // //           }
// // // //           setNumbers(parsedNumbers);
// // // //           setError(null);
// // // //         } catch (error) {
// // // //           setError(`Error processing file: ${error.message}`);
// // // //         }
// // // //       };
// // // //       reader.onerror = () => {
// // // //         setError("Error reading file.");
// // // //       };
// // // //       reader.readAsText(file);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{
// // // //       maxWidth: '1400px',
// // // //       margin: '0 auto',
// // // //       padding: '30px 20px',
// // // //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // // //       background: '#ffffff'
// // // //     }}>
// // // //       {/* <h1 style={{
// // // //         textAlign: 'center',
// // // //         color: '#2d3748',
// // // //         marginBottom: '30px',
// // // //         fontSize: '32px',
// // // //         fontWeight: '700',
// // // //         letterSpacing: '-0.5px'
// // // //       }}>
// // // //         Statistics Calculator
// // // //       </h1> */}

// // // //       <div style={{
// // // //         display: 'grid',
// // // //         gridTemplateColumns: '1fr 1fr 1fr',
// // // //         gap: '25px'
// // // //       }}>
// // // //         {/* INPUT SECTION */}
// // // //         <div style={{
// // // //           background: 'white',
// // // //           borderRadius: '12px',
// // // //           padding: '25px',
// // // //           border: '2px solid #e2e8f0',
// // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // //         }}>
// // // //           <h2 style={{
// // // //             margin: '0 0 20px 0',
// // // //             fontSize: '20px',
// // // //             fontWeight: '600',
// // // //             color: '#2d3748'
// // // //           }}>
// // // //             Input Data
// // // //           </h2>

// // // //           <div style={{
// // // //             display: 'flex',
// // // //             justifyContent: 'center',
// // // //             gap: '10px',
// // // //             marginBottom: '25px'
// // // //           }}>
// // // //             <button
// // // //               onClick={() => setInputMethod('manual')}
// // // //               style={{
// // // //                 background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
// // // //                 color: inputMethod === 'manual' ? 'white' : '#718096',
// // // //                 border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // //                 padding: '8px 20px',
// // // //                 borderRadius: '6px',
// // // //                 cursor: 'pointer',
// // // //                 fontSize: '14px',
// // // //                 fontWeight: '600',
// // // //                 transition: 'all 0.2s'
// // // //               }}
// // // //             >
// // // //               Manual Input
// // // //             </button>
// // // //             <button
// // // //               onClick={() => setInputMethod('file')}
// // // //               style={{
// // // //                 background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
// // // //                 color: inputMethod === 'file' ? 'white' : '#718096',
// // // //                 border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // // //                 padding: '8px 20px',
// // // //                 borderRadius: '6px',
// // // //                 cursor: 'pointer',
// // // //                 fontSize: '14px',
// // // //                 fontWeight: '600',
// // // //                 transition: 'all 0.2s'
// // // //               }}
// // // //             >
// // // //               File Upload
// // // //             </button>
// // // //           </div>

// // // //           {inputMethod === 'manual' && (
// // // //             <div>
// // // //               <div style={{
// // // //                 display: 'grid',
// // // //                 gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
// // // //                 gap: '10px',
// // // //                 marginBottom: '15px',
// // // //                 maxHeight: '300px',
// // // //                 overflowY: 'auto',
// // // //                 padding: '5px'
// // // //               }}>
// // // //                 {numbers.map((num, index) => (
// // // //                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // // //                     <input
// // // //                       type="number"
// // // //                       value={num}
// // // //                       onChange={(e) => handleInputChange(e, index)}
// // // //                       placeholder="Value"
// // // //                       style={{
// // // //                         width: '70px',
// // // //                         padding: '8px',
// // // //                         border: '2px solid #e2e8f0',
// // // //                         borderRadius: '6px',
// // // //                         fontSize: '13px',
// // // //                         outline: 'none',
// // // //                         transition: 'border 0.2s'
// // // //                       }}
// // // //                       onFocus={(e) => e.target.style.borderColor = '#245de1'}
// // // //                       onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
// // // //                     />
// // // //                     {numbers.length > 1 && (
// // // //                       <button
// // // //                         onClick={() => handleRemoveNumber(index)}
// // // //                         style={{
// // // //                           background: '#ef4444',
// // // //                           color: 'white',
// // // //                           border: 'none',
// // // //                           borderRadius: '50%',
// // // //                           width: '22px',
// // // //                           height: '22px',
// // // //                           cursor: 'pointer',
// // // //                           fontSize: '16px',
// // // //                           display: 'flex',
// // // //                           alignItems: 'center',
// // // //                           justifyContent: 'center',
// // // //                           flexShrink: 0
// // // //                         }}
// // // //                       >
// // // //                         ×
// // // //                       </button>
// // // //                     )}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // //                 <button
// // // //                   onClick={handleAddNumber}
// // // //                   style={{
// // // //                     flex: 1,
// // // //                     background: '#245de1',
// // // //                     color: 'white',
// // // //                     border: 'none',
// // // //                     padding: '10px',
// // // //                     borderRadius: '6px',
// // // //                     cursor: 'pointer',
// // // //                     fontSize: '14px',
// // // //                     fontWeight: '600',
// // // //                     transition: 'background 0.2s'
// // // //                   }}
// // // //                   onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // //                   onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // //                 >
// // // //                   + Add Number
// // // //                 </button>
// // // //                 <button
// // // //                   onClick={handleResetAll}
// // // //                   style={{
// // // //                     flex: 1,
// // // //                     background: 'white',
// // // //                     color: '#245de1',
// // // //                     border: '2px solid #245de1',
// // // //                     padding: '10px',
// // // //                     borderRadius: '6px',
// // // //                     cursor: 'pointer',
// // // //                     fontSize: '14px',
// // // //                     fontWeight: '600',
// // // //                     display: 'flex',
// // // //                     alignItems: 'center',
// // // //                     justifyContent: 'center',
// // // //                     gap: '5px'
// // // //                   }}
// // // //                 >
// // // //                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                     <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
// // // //                     <path d="M3 3v5h5"/>
// // // //                   </svg>
// // // //                   Reset
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {inputMethod === 'file' && (
// // // //             <div>
// // // //               <div style={{
// // // //                 background: '#f8f9fa',
// // // //                 padding: '15px',
// // // //                 borderRadius: '8px',
// // // //                 border: '2px solid #e2e8f0',
// // // //                 marginBottom: '15px'
// // // //               }}>
// // // //                 <h3 style={{
// // // //                   margin: '0 0 12px 0',
// // // //                   fontSize: '14px',
// // // //                   fontWeight: '600',
// // // //                   color: '#2d3748'
// // // //                 }}>
// // // //                   File Type
// // // //                 </h3>
// // // //                 <div style={{ display: 'flex', gap: '15px' }}>
// // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // //                     <input
// // // //                       type="radio"
// // // //                       value="csv"
// // // //                       checked={fileType === 'csv'}
// // // //                       onChange={() => setFileType('csv')}
// // // //                       style={{ marginRight: '8px' }}
// // // //                     />
// // // //                     CSV
// // // //                   </label>
// // // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // //                     <input
// // // //                       type="radio"
// // // //                       value="txt"
// // // //                       checked={fileType === 'txt'}
// // // //                       onChange={() => setFileType('txt')}
// // // //                       style={{ marginRight: '8px' }}
// // // //                     />
// // // //                     TXT
// // // //                   </label>
// // // //                 </div>
// // // //               </div>

// // // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // // //                 <input
// // // //                   type="file"
// // // //                   accept={fileType === 'csv' ? '.csv' : '.txt'}
// // // //                   onChange={handleFileUpload}
// // // //                   style={{
// // // //                     flex: 1,
// // // //                     padding: '10px',
// // // //                     border: '2px solid #e2e8f0',
// // // //                     borderRadius: '6px',
// // // //                     fontSize: '13px',
// // // //                     cursor: 'pointer'
// // // //                   }}
// // // //                 />
// // // //                 <button
// // // //                   onClick={handleResetAll}
// // // //                   style={{
// // // //                     background: 'white',
// // // //                     color: '#245de1',
// // // //                     border: '2px solid #245de1',
// // // //                     padding: '10px 15px',
// // // //                     borderRadius: '6px',
// // // //                     cursor: 'pointer',
// // // //                     fontSize: '14px',
// // // //                     fontWeight: '600'
// // // //                   }}
// // // //                 >
// // // //                   Reset
// // // //                 </button>
// // // //               </div>

// // // //               {numbers.length > 0 && numbers[0] !== '' && (
// // // //                 <div style={{
// // // //                   background: '#e6f2ff',
// // // //                   padding: '12px',
// // // //                   borderRadius: '6px',
// // // //                   border: '2px solid #245de1',
// // // //                   fontSize: '13px',
// // // //                   color: '#2d3748',
// // // //                   marginBottom: '15px'
// // // //                 }}>
// // // //                   <strong>{numbers.length}</strong> numbers loaded from file
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           )}

// // // //           {error && (
// // // //             <div style={{
// // // //               background: '#ffebee',
// // // //               color: '#d32f2f',
// // // //               border: '2px solid #ef9a9a',
// // // //               borderRadius: '6px',
// // // //               padding: '12px',
// // // //               marginBottom: '15px',
// // // //               fontSize: '13px',
// // // //               fontWeight: '500',
// // // //               textAlign: 'center'
// // // //             }}>
// // // //               {error}
// // // //             </div>
// // // //           )}

// // // //           <button
// // // //             onClick={handleCalculate}
// // // //             style={{
// // // //               width: '100%',
// // // //               background: '#245de1',
// // // //               color: 'white',
// // // //               border: 'none',
// // // //               padding: '14px',
// // // //               borderRadius: '6px',
// // // //               cursor: 'pointer',
// // // //               fontSize: '16px',
// // // //               fontWeight: '600',
// // // //               marginBottom: '20px',
// // // //               transition: 'background 0.2s'
// // // //             }}
// // // //             onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // // //             onMouseOut={(e) => e.target.style.background = '#245de1'}
// // // //           >
// // // //             Calculate Statistics
// // // //           </button>

// // // //           <div style={{
// // // //             background: '#f8f9fa',
// // // //             padding: '15px',
// // // //             borderRadius: '8px',
// // // //             border: '2px solid #e2e8f0'
// // // //           }}>
// // // //             <h3 style={{
// // // //               margin: '0 0 12px 0',
// // // //               fontSize: '14px',
// // // //               fontWeight: '600',
// // // //               color: '#2d3748'
// // // //             }}>
// // // //               Calculation Method
// // // //             </h3>
// // // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // //                 <input
// // // //                   type="radio"
// // // //                   value="auto"
// // // //                   checked={preferredCalculation === 'auto'}
// // // //                   onChange={() => setPreferredCalculation('auto')}
// // // //                   style={{ marginRight: '8px' }}
// // // //                 />
// // // //                 Auto (n-1 for n &lt; 30, n for n ≥ 30)
// // // //               </label>
// // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // //                 <input
// // // //                   type="radio"
// // // //                   value="n-1"
// // // //                   checked={preferredCalculation === 'n-1'}
// // // //                   onChange={() => setPreferredCalculation('n-1')}
// // // //                   style={{ marginRight: '8px' }}
// // // //                 />
// // // //                 Always use n-1 (Sample)
// // // //               </label>
// // // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '13px', color: '#2d3748', cursor: 'pointer' }}>
// // // //                 <input
// // // //                   type="radio"
// // // //                   value="n"
// // // //                   checked={preferredCalculation === 'n'}
// // // //                   onChange={() => setPreferredCalculation('n')}
// // // //                   style={{ marginRight: '8px' }}
// // // //                 />
// // // //                 Always use n (Population)
// // // //               </label>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* RESULTS SECTION */}
// // // //         <div style={{
// // // //           background: 'white',
// // // //           borderRadius: '12px',
// // // //           padding: '25px',
// // // //           border: '2px solid #e2e8f0',
// // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// // // //           maxHeight: '800px',
// // // //           overflowY: 'auto'
// // // //         }}>
// // // //           <h2 style={{
// // // //             margin: '0 0 20px 0',
// // // //             fontSize: '20px',
// // // //             fontWeight: '600',
// // // //             color: '#2d3748'
// // // //           }}>
// // // //             Results
// // // //           </h2>

// // // //           <div style={{ display: 'grid', gap: '12px' }}>
// // // //             {[
// // // //               { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
// // // //               { label: 'Sum', key: 'sum', value: stats?.sum },
// // // //               { label: 'Mean', key: 'mean', value: stats?.mean },
// // // //               { label: 'Median', key: 'median', value: stats?.median },
// // // //               { label: 'Mode', key: 'mode', value: stats?.mode },
// // // //               { label: 'Min', key: 'min', value: stats?.min },
// // // //               { label: 'Max', key: 'max', value: stats?.max },
// // // //               { label: 'Range', key: 'range', value: stats?.range },
// // // //               { 
// // // //                 label: 'Variance', 
// // // //                 key: 'variance', 
// // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
// // // //               },
// // // //               { 
// // // //                 label: 'Standard Deviation', 
// // // //                 key: 'standardDeviation', 
// // // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
// // // //               },
// // // //               { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
// // // //               { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
// // // //               { label: 'IQR', key: 'iqr', value: stats?.iqr },
// // // //               { label: 'Skewness', key: 'skewness', value: stats?.skewness },
// // // //               { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
// // // //               { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
// // // //               { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
// // // //               { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
// // // //               { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
// // // //             ].map((item) => (
// // // //               <div
// // // //                 key={item.key}
// // // //                 style={{
// // // //                   background: '#f8f9fa',
// // // //                   padding: '12px 15px',
// // // //                   borderRadius: '8px',
// // // //                   border: '1.5px solid #e2e8f0',
// // // //                   display: 'flex',
// // // //                   alignItems: 'center',
// // // //                   justifyContent: 'space-between'
// // // //                 }}
// // // //               >
// // // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
// // // //                   <span style={{ fontSize: '14px', color: '#718096', fontWeight: '500' }}>
// // // //                     {item.label}
// // // //                   </span>
// // // //                   <div
// // // //                     style={{
// // // //                       position: 'relative',
// // // //                       display: 'inline-flex',
// // // //                       alignItems: 'center'
// // // //                     }}
// // // //                     onMouseEnter={(e) => {
// // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // //                       if (tooltip) {
// // // //                         tooltip.style.visibility = 'visible';
// // // //                         tooltip.style.opacity = '1';
// // // //                       }
// // // //                     }}
// // // //                     onMouseLeave={(e) => {
// // // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // // //                       if (tooltip) {
// // // //                         tooltip.style.visibility = 'hidden';
// // // //                         tooltip.style.opacity = '0';
// // // //                       }
// // // //                     }}
// // // //                   >
// // // //                     <span
// // // //                       onClick={() => handleExplanationClick(item.key)}
// // // //                       style={{
// // // //                         display: 'inline-flex',
// // // //                         alignItems: 'center',
// // // //                         justifyContent: 'center',
// // // //                         width: '18px',
// // // //                         height: '18px',
// // // //                         borderRadius: '50%',
// // // //                         background: '#245de1',
// // // //                         color: 'white',
// // // //                         fontSize: '12px',
// // // //                         cursor: 'pointer',
// // // //                         fontWeight: '600'
// // // //                       }}
// // // //                     >
// // // //                       i
// // // //                     </span>
// // // //                     <span
// // // //                       data-tooltip
// // // //                       style={{
// // // //                         visibility: 'hidden',
// // // //                         position: 'absolute',
// // // //                         bottom: '125%',
// // // //                         left: '50%',
// // // //                         transform: 'translateX(-50%)',
// // // //                         backgroundColor: '#555',
// // // //                         color: '#fff',
// // // //                         textAlign: 'center',
// // // //                         borderRadius: '6px',
// // // //                         padding: '5px 10px',
// // // //                         whiteSpace: 'nowrap',
// // // //                         fontSize: '11px',
// // // //                         fontWeight: '400',
// // // //                         zIndex: 1,
// // // //                         opacity: 0,
// // // //                         transition: 'opacity 0.3s',
// // // //                         pointerEvents: 'none'
// // // //                       }}
// // // //                     >
// // // //                       Click to see explanation
// // // //                     </span>
// // // //                   </div>
// // // //                 </div>
// // // //                 <span style={{
// // // //                   fontSize: '16px',
// // // //                   fontWeight: '700',
// // // //                   color: item.value !== undefined ? '#245de1' : '#cbd5e0'
// // // //                 }}>
// // // //                   {item.value !== undefined ? item.value : '—'}
// // // //                 </span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* EXPLANATION SECTION */}
// // // //         <div style={{
// // // //           background: 'white',
// // // //           borderRadius: '12px',
// // // //           padding: '25px',
// // // //           border: '2px solid #e2e8f0',
// // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // // //         }}>
// // // //           <h2 style={{
// // // //             margin: '0 0 20px 0',
// // // //             fontSize: '20px',
// // // //             fontWeight: '600',
// // // //             color: '#2d3748'
// // // //           }}>
// // // //             Explanation
// // // //           </h2>
          
// // // //           {currentExplanation ? (
// // // //             <div style={{
// // // //               background: '#e6f2ff',
// // // //               padding: '18px',
// // // //               borderRadius: '8px',
// // // //               border: '2px solid #245de1',
// // // //               fontSize: '14px',
// // // //               lineHeight: '1.6',
// // // //               color: '#2d3748'
// // // //             }}>
// // // //               {currentExplanation}
// // // //             </div>
// // // //           ) : (
// // // //             <div style={{
// // // //               textAlign: 'center',
// // // //               padding: '40px 20px',
// // // //               color: '#718096',
// // // //               fontSize: '14px',
// // // //               lineHeight: '1.6'
// // // //             }}>
// // // //               Click on any <span style={{
// // // //                 display: 'inline-flex',
// // // //                 alignItems: 'center',
// // // //                 justifyContent: 'center',
// // // //                 width: '18px',
// // // //                 height: '18px',
// // // //                 borderRadius: '50%',
// // // //                 background: '#245de1',
// // // //                 color: 'white',
// // // //                 fontSize: '12px',
// // // //                 fontWeight: '600',
// // // //                 margin: '0 4px'
// // // //               }}>i</span> icon in the results to see an explanation
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StatisticsCalculator;


// // // import React, { useState } from 'react';
// // // import { processContent } from '@/app/utils/contentProcessor';
// // // import defaultExplanations from './explanations';

// // // const StatisticsCalculator = ({explanations: propsExplanations}) => {
// // //   const [numbers, setNumbers] = useState(['']);
// // //   const [stats, setStats] = useState(null);
// // //   const [fileType, setFileType] = useState('csv');
// // //   const [inputMethod, setInputMethod] = useState('manual');
// // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');
// // //   const [currentExplanation, setCurrentExplanation] = useState('');
// // //   const [error, setError] = useState(null);

// // //   const explanations = propsExplanations || defaultExplanations;

// // //   const handleExplanationClick = (key) => {
// // //     setCurrentExplanation(explanations[key]);
// // //   };

// // //   const calculateStats = (data) => {
// // //     try {
// // //       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
// // //       if (validData.length === 0) {
// // //         throw new Error("No valid numbers to calculate statistics.");
// // //       }
  
// // //       const sortedData = validData.map(Number).sort((a, b) => a - b);
// // //       const n = sortedData.length;
  
// // //       const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // //       const mean = sum / n;
// // //       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // //       const min = sortedData[0];
// // //       const max = sortedData[n - 1];
// // //       const range = max - min;
  
// // //       const modeMap = sortedData.reduce((acc, val) => {
// // //         acc[val] = (acc[val] || 0) + 1;
// // //         return acc;
// // //       }, {});
// // //       const maxFrequency = Math.max(...Object.values(modeMap));
// // //       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
// // //       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
// // //       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // //       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
// // //       const standardDeviationN1 = Math.sqrt(varianceN1);
// // //       const standardDeviationN = Math.sqrt(varianceN);
  
// // //       const q1Index = Math.floor(n / 4);
// // //       const q3Index = Math.floor((3 * n) / 4);
// // //       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
// // //       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
// // //       const iqr = q3 - q1;
  
// // //       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
// // //       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
// // //       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
// // //       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
// // //       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
// // //       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
// // //       return {
// // //         sampleSize: n,
// // //         sum: sum.toFixed(2),
// // //         mean: mean.toFixed(2),
// // //         median: median.toFixed(2),
// // //         mode: modeValue,
// // //         min,
// // //         max,
// // //         range,
// // //         varianceN1: varianceN1.toFixed(2),
// // //         varianceN: varianceN.toFixed(2),
// // //         standardDeviationN1: standardDeviationN1.toFixed(2),
// // //         standardDeviationN: standardDeviationN.toFixed(2),
// // //         q1: q1.toFixed(2),
// // //         q3: q3.toFixed(2),
// // //         iqr: iqr.toFixed(2),
// // //         skewness: skewness.toFixed(2),
// // //         kurtosis: kurtosis.toFixed(2),
// // //         coefficientOfVariation: coefficientOfVariation.toFixed(2),
// // //         geometricMean: geometricMean.toFixed(2),
// // //         harmonicMean: harmonicMean.toFixed(2),
// // //         rootMeanSquare: rootMeanSquare.toFixed(2)
// // //       };
// // //     } catch (error) {
// // //       throw new Error(`Error calculating statistics: ${error.message}`);
// // //     }
// // //   };

// // //   const handleAddNumber = () => {
// // //     setNumbers([...numbers, '']);
// // //     setError(null);
// // //   };

// // //   const handleRemoveNumber = (indexToRemove) => {
// // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // //     setError(null);
// // //   };

// // //   const handleInputChange = (e, index) => {
// // //     const newNumbers = [...numbers];
// // //     newNumbers[index] = e.target.value;
// // //     setNumbers(newNumbers);
// // //     setError(null);
// // //   };

// // //   const handleResetAll = () => {
// // //     setNumbers(['']);
// // //     setPreferredCalculation('auto');
// // //     setStats(null);
// // //     setError(null);
// // //     setCurrentExplanation('');
// // //   };

// // //   const handleCalculate = () => {
// // //     try {
// // //       const result = calculateStats(numbers);
// // //       setStats(result);
// // //       setError(null);
// // //     } catch (err) {
// // //       setError(err.message);
// // //       setStats(null);
// // //     }
// // //   };

// // //   const handleFileUpload = (event) => {
// // //     setStats(null);
// // //     const file = event.target.files[0];
// // //     if (file) {
// // //       if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
// // //         setError("Please upload a valid .txt or .csv file.");
// // //         return;
// // //       }
// // //       const reader = new FileReader();
// // //       reader.onload = (e) => {
// // //         try {
// // //           let content = e.target.result;
// // //           let parsedNumbers;
          
// // //           if (fileType === 'csv') {
// // //             parsedNumbers = content.split('\n')
// // //               .map(line => line.split(',').map(num => num.trim()))
// // //               .flat()
// // //               .filter(num => num !== '' && !isNaN(num));
// // //           } else {
// // //             parsedNumbers = content.split('\n')
// // //               .map(num => num.trim())
// // //               .filter(num => num !== '' && !isNaN(num));
// // //           }
          
// // //           if (parsedNumbers.length === 0) {
// // //             throw new Error("No valid numbers found in the file.");
// // //           }
// // //           setNumbers(parsedNumbers);
// // //           setError(null);
// // //         } catch (error) {
// // //           setError(`Error processing file: ${error.message}`);
// // //         }
// // //       };
// // //       reader.onerror = () => {
// // //         setError("Error reading file.");
// // //       };
// // //       reader.readAsText(file);
// // //     }
// // //   };

// // //   return (
// // //     <div style={{
// // //       maxWidth: '1400px',
// // //       margin: '0 auto',
// // //       padding: '30px 20px',
// // //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// // //       background: '#ffffff'
// // //     }}>
// // //       {/* <h1 style={{
// // //         textAlign: 'center',
// // //         color: '#2d3748',
// // //         marginBottom: '30px',
// // //         fontSize: '42px',
// // //         fontWeight: '700',
// // //         letterSpacing: '-0.5px'
// // //       }}>
// // //         Statistics Calculator
// // //       </h1> */}

// // //       <div style={{
// // //         display: 'grid',
// // //         gridTemplateColumns: '1fr 1fr 1fr',
// // //         gap: '25px'
// // //       }}>
// // //         {/* INPUT SECTION */}
// // //         <div style={{
// // //           background: 'white',
// // //           borderRadius: '12px',
// // //           padding: '25px',
// // //           border: '2px solid #e2e8f0',
// // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // //         }}>
// // //           <h2 style={{
// // //             margin: '0 0 20px 0',
// // //             fontSize: '26px',
// // //             fontWeight: '600',
// // //             color: '#2d3748'
// // //           }}>
// // //             Input Data
// // //           </h2>

// // //           <div style={{
// // //             display: 'flex',
// // //             justifyContent: 'center',
// // //             gap: '10px',
// // //             marginBottom: '25px'
// // //           }}>
// // //             <button
// // //               onClick={() => setInputMethod('manual')}
// // //               style={{
// // //                 background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
// // //                 color: inputMethod === 'manual' ? 'white' : '#718096',
// // //                 border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // //                 padding: '8px 20px',
// // //                 borderRadius: '6px',
// // //                 cursor: 'pointer',
// // //                 fontSize: '18px',
// // //                 fontWeight: '600',
// // //                 transition: 'all 0.2s'
// // //               }}
// // //             >
// // //               Manual Input
// // //             </button>
// // //             <button
// // //               onClick={() => setInputMethod('file')}
// // //               style={{
// // //                 background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
// // //                 color: inputMethod === 'file' ? 'white' : '#718096',
// // //                 border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
// // //                 padding: '8px 20px',
// // //                 borderRadius: '6px',
// // //                 cursor: 'pointer',
// // //                 fontSize: '18px',
// // //                 fontWeight: '600',
// // //                 transition: 'all 0.2s'
// // //               }}
// // //             >
// // //               File Upload
// // //             </button>
// // //           </div>

// // //           {inputMethod === 'manual' && (
// // //             <div>
// // //               <div style={{
// // //                 display: 'grid',
// // //                 gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
// // //                 gap: '10px',
// // //                 marginBottom: '15px',
// // //                 maxHeight: '300px',
// // //                 overflowY: 'auto',
// // //                 padding: '5px'
// // //               }}>
// // //                 {numbers.map((num, index) => (
// // //                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// // //                     <input
// // //                       type="number"
// // //                       value={num}
// // //                       onChange={(e) => handleInputChange(e, index)}
// // //                       placeholder="Value"
// // //                       style={{
// // //                         width: '70px',
// // //                         padding: '8px',
// // //                         border: '2px solid #e2e8f0',
// // //                         borderRadius: '6px',
// // //                         fontSize: '17px',
// // //                         outline: 'none',
// // //                         transition: 'border 0.2s'
// // //                       }}
// // //                       onFocus={(e) => e.target.style.borderColor = '#245de1'}
// // //                       onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
// // //                     />
// // //                     {numbers.length > 1 && (
// // //                       <button
// // //                         onClick={() => handleRemoveNumber(index)}
// // //                         style={{
// // //                           background: '#ef4444',
// // //                           color: 'white',
// // //                           border: 'none',
// // //                           borderRadius: '50%',
// // //                           width: '22px',
// // //                           height: '22px',
// // //                           cursor: 'pointer',
// // //                           fontSize: '21px',
// // //                           display: 'flex',
// // //                           alignItems: 'center',
// // //                           justifyContent: 'center',
// // //                           flexShrink: 0
// // //                         }}
// // //                       >
// // //                         ×
// // //                       </button>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // //                 <button
// // //                   onClick={handleAddNumber}
// // //                   style={{
// // //                     flex: 1,
// // //                     background: '#245de1',
// // //                     color: 'white',
// // //                     border: 'none',
// // //                     padding: '10px',
// // //                     borderRadius: '6px',
// // //                     cursor: 'pointer',
// // //                     fontSize: '18px',
// // //                     fontWeight: '600',
// // //                     transition: 'background 0.2s'
// // //                   }}
// // //                   onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // //                   onMouseOut={(e) => e.target.style.background = '#245de1'}
// // //                 >
// // //                   + Add Number
// // //                 </button>
// // //                 <button
// // //                   onClick={handleResetAll}
// // //                   style={{
// // //                     flex: 1,
// // //                     background: 'white',
// // //                     color: '#245de1',
// // //                     border: '2px solid #245de1',
// // //                     padding: '10px',
// // //                     borderRadius: '6px',
// // //                     cursor: 'pointer',
// // //                     fontSize: '18px',
// // //                     fontWeight: '600',
// // //                     display: 'flex',
// // //                     alignItems: 'center',
// // //                     justifyContent: 'center',
// // //                     gap: '5px'
// // //                   }}
// // //                 >
// // //                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // //                     <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
// // //                     <path d="M3 3v5h5"/>
// // //                   </svg>
// // //                   Reset
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {inputMethod === 'file' && (
// // //             <div>
// // //               <div style={{
// // //                 background: '#f8f9fa',
// // //                 padding: '15px',
// // //                 borderRadius: '8px',
// // //                 border: '2px solid #e2e8f0',
// // //                 marginBottom: '15px'
// // //               }}>
// // //                 <h3 style={{
// // //                   margin: '0 0 12px 0',
// // //                   fontSize: '18px',
// // //                   fontWeight: '600',
// // //                   color: '#2d3748'
// // //                 }}>
// // //                   File Type
// // //                 </h3>
// // //                 <div style={{ display: 'flex', gap: '15px' }}>
// // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// // //                     <input
// // //                       type="radio"
// // //                       value="csv"
// // //                       checked={fileType === 'csv'}
// // //                       onChange={() => setFileType('csv')}
// // //                       style={{ marginRight: '8px' }}
// // //                     />
// // //                     CSV
// // //                   </label>
// // //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// // //                     <input
// // //                       type="radio"
// // //                       value="txt"
// // //                       checked={fileType === 'txt'}
// // //                       onChange={() => setFileType('txt')}
// // //                       style={{ marginRight: '8px' }}
// // //                     />
// // //                     TXT
// // //                   </label>
// // //                 </div>
// // //               </div>

// // //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// // //                 <input
// // //                   type="file"
// // //                   accept={fileType === 'csv' ? '.csv' : '.txt'}
// // //                   onChange={handleFileUpload}
// // //                   style={{
// // //                     flex: 1,
// // //                     padding: '10px',
// // //                     border: '2px solid #e2e8f0',
// // //                     borderRadius: '6px',
// // //                     fontSize: '17px',
// // //                     cursor: 'pointer'
// // //                   }}
// // //                 />
// // //                 <button
// // //                   onClick={handleResetAll}
// // //                   style={{
// // //                     background: 'white',
// // //                     color: '#245de1',
// // //                     border: '2px solid #245de1',
// // //                     padding: '10px 15px',
// // //                     borderRadius: '6px',
// // //                     cursor: 'pointer',
// // //                     fontSize: '18px',
// // //                     fontWeight: '600'
// // //                   }}
// // //                 >
// // //                   Reset
// // //                 </button>
// // //               </div>

// // //               {numbers.length > 0 && numbers[0] !== '' && (
// // //                 <div style={{
// // //                   background: '#e6f2ff',
// // //                   padding: '12px',
// // //                   borderRadius: '6px',
// // //                   border: '2px solid #245de1',
// // //                   fontSize: '17px',
// // //                   color: '#2d3748',
// // //                   marginBottom: '15px'
// // //                 }}>
// // //                   <strong>{numbers.length}</strong> numbers loaded from file
// // //                 </div>
// // //               )}
// // //             </div>
// // //           )}

// // //           {error && (
// // //             <div style={{
// // //               background: '#ffebee',
// // //               color: '#d32f2f',
// // //               border: '2px solid #ef9a9a',
// // //               borderRadius: '6px',
// // //               padding: '12px',
// // //               marginBottom: '15px',
// // //               fontSize: '17px',
// // //               fontWeight: '500',
// // //               textAlign: 'center'
// // //             }}>
// // //               {error}
// // //             </div>
// // //           )}

// // //           <button
// // //             onClick={handleCalculate}
// // //             style={{
// // //               width: '100%',
// // //               background: '#245de1',
// // //               color: 'white',
// // //               border: 'none',
// // //               padding: '14px',
// // //               borderRadius: '6px',
// // //               cursor: 'pointer',
// // //               fontSize: '21px',
// // //               fontWeight: '600',
// // //               marginBottom: '20px',
// // //               transition: 'background 0.2s'
// // //             }}
// // //             onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// // //             onMouseOut={(e) => e.target.style.background = '#245de1'}
// // //           >
// // //             Calculate Statistics
// // //           </button>

// // //           <div style={{
// // //             background: '#f8f9fa',
// // //             padding: '15px',
// // //             borderRadius: '8px',
// // //             border: '2px solid #e2e8f0'
// // //           }}>
// // //             <h3 style={{
// // //               margin: '0 0 12px 0',
// // //               fontSize: '18px',
// // //               fontWeight: '600',
// // //               color: '#2d3748'
// // //             }}>
// // //               Calculation Method
// // //             </h3>
// // //             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// // //                 <input
// // //                   type="radio"
// // //                   value="auto"
// // //                   checked={preferredCalculation === 'auto'}
// // //                   onChange={() => setPreferredCalculation('auto')}
// // //                   style={{ marginRight: '8px' }}
// // //                 />
// // //                 Auto (n-1 for n &lt; 30, n for n ≥ 30)
// // //               </label>
// // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// // //                 <input
// // //                   type="radio"
// // //                   value="n-1"
// // //                   checked={preferredCalculation === 'n-1'}
// // //                   onChange={() => setPreferredCalculation('n-1')}
// // //                   style={{ marginRight: '8px' }}
// // //                 />
// // //                 Always use n-1 (Sample)
// // //               </label>
// // //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// // //                 <input
// // //                   type="radio"
// // //                   value="n"
// // //                   checked={preferredCalculation === 'n'}
// // //                   onChange={() => setPreferredCalculation('n')}
// // //                   style={{ marginRight: '8px' }}
// // //                 />
// // //                 Always use n (Population)
// // //               </label>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* RESULTS SECTION */}
// // //         <div style={{
// // //           background: 'white',
// // //           borderRadius: '12px',
// // //           padding: '25px',
// // //           border: '2px solid #e2e8f0',
// // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// // //           maxHeight: '800px',
// // //           overflowY: 'auto'
// // //         }}>
// // //           <h2 style={{
// // //             margin: '0 0 20px 0',
// // //             fontSize: '26px',
// // //             fontWeight: '600',
// // //             color: '#2d3748'
// // //           }}>
// // //             Results
// // //           </h2>

// // //           <div style={{ display: 'grid', gap: '12px' }}>
// // //             {[
// // //               { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
// // //               { label: 'Sum', key: 'sum', value: stats?.sum },
// // //               { label: 'Mean', key: 'mean', value: stats?.mean },
// // //               { label: 'Median', key: 'median', value: stats?.median },
// // //               { label: 'Mode', key: 'mode', value: stats?.mode },
// // //               { label: 'Min', key: 'min', value: stats?.min },
// // //               { label: 'Max', key: 'max', value: stats?.max },
// // //               { label: 'Range', key: 'range', value: stats?.range },
// // //               { 
// // //                 label: 'Variance', 
// // //                 key: 'variance', 
// // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
// // //               },
// // //               { 
// // //                 label: 'Standard Deviation', 
// // //                 key: 'standardDeviation', 
// // //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
// // //               },
// // //               { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
// // //               { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
// // //               { label: 'IQR', key: 'iqr', value: stats?.iqr },
// // //               { label: 'Skewness', key: 'skewness', value: stats?.skewness },
// // //               { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
// // //               { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
// // //               { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
// // //               { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
// // //               { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
// // //             ].map((item) => (
// // //               <div
// // //                 key={item.key}
// // //                 style={{
// // //                   background: '#f8f9fa',
// // //                   padding: '12px 15px',
// // //                   borderRadius: '8px',
// // //                   border: '1.5px solid #e2e8f0',
// // //                   display: 'flex',
// // //                   alignItems: 'center',
// // //                   justifyContent: 'space-between'
// // //                 }}
// // //               >
// // //                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
// // //                   <span style={{ fontSize: '18px', color: '#718096', fontWeight: '500' }}>
// // //                     {item.label}
// // //                   </span>
// // //                   <div
// // //                     style={{
// // //                       position: 'relative',
// // //                       display: 'inline-flex',
// // //                       alignItems: 'center'
// // //                     }}
// // //                     onMouseEnter={(e) => {
// // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // //                       if (tooltip) {
// // //                         tooltip.style.visibility = 'visible';
// // //                         tooltip.style.opacity = '1';
// // //                       }
// // //                     }}
// // //                     onMouseLeave={(e) => {
// // //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// // //                       if (tooltip) {
// // //                         tooltip.style.visibility = 'hidden';
// // //                         tooltip.style.opacity = '0';
// // //                       }
// // //                     }}
// // //                   >
// // //                     <span
// // //                       onClick={() => handleExplanationClick(item.key)}
// // //                       style={{
// // //                         display: 'inline-flex',
// // //                         alignItems: 'center',
// // //                         justifyContent: 'center',
// // //                         width: '18px',
// // //                         height: '18px',
// // //                         borderRadius: '50%',
// // //                         background: '#245de1',
// // //                         color: 'white',
// // //                         fontSize: '21px',
// // //                         cursor: 'pointer',
// // //                         fontWeight: '600'
// // //                       }}
// // //                     >
// // //                       i
// // //                     </span>
// // //                     <span
// // //                       data-tooltip
// // //                       style={{
// // //                         visibility: 'hidden',
// // //                         position: 'absolute',
// // //                         bottom: '125%',
// // //                         left: '50%',
// // //                         transform: 'translateX(-50%)',
// // //                         backgroundColor: '#555',
// // //                         color: '#fff',
// // //                         textAlign: 'center',
// // //                         borderRadius: '6px',
// // //                         padding: '5px 10px',
// // //                         whiteSpace: 'nowrap',
// // //                         fontSize: '18px',
// // //                         fontWeight: '400',
// // //                         zIndex: 1,
// // //                         opacity: 0,
// // //                         transition: 'opacity 0.3s',
// // //                         pointerEvents: 'none'
// // //                       }}
// // //                     >
// // //                       Click to see explanation
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //                 <span style={{
// // //                   fontSize: '21px',
// // //                   fontWeight: '700',
// // //                   color: item.value !== undefined ? '#245de1' : '#cbd5e0'
// // //                 }}>
// // //                   {item.value !== undefined ? item.value : '—'}
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* EXPLANATION SECTION */}
// // //         <div style={{
// // //           background: 'white',
// // //           borderRadius: '12px',
// // //           padding: '25px',
// // //           border: '2px solid #e2e8f0',
// // //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// // //         }}>
// // //           <h2 style={{
// // //             margin: '0 0 20px 0',
// // //             fontSize: '26px',
// // //             fontWeight: '600',
// // //             color: '#2d3748'
// // //           }}>
// // //             Explanation
// // //           </h2>
          
// // //           {currentExplanation ? (
// // //             <div style={{
// // //               background: '#e6f2ff',
// // //               padding: '18px',
// // //               borderRadius: '8px',
// // //               border: '2px solid #245de1',
// // //               fontSize: '18px',
// // //               lineHeight: '1.6',
// // //               color: '#2d3748'
// // //             }}>
// // //               {processContent(currentExplanation)}
// // //             </div>
// // //           ) : (
// // //             <div style={{
// // //               textAlign: 'center',
// // //               padding: '40px 20px',
// // //               color: '#718096',
// // //               fontSize: '18px',
// // //               lineHeight: '1.6'
// // //             }}>
// // //               Click on any <span style={{
// // //                 display: 'inline-flex',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'center',
// // //                 width: '18px',
// // //                 height: '18px',
// // //                 borderRadius: '50%',
// // //                 background: '#245de1',
// // //                 color: 'white',
// // //                 fontSize: '21px',
// // //                 fontWeight: '600',
// // //                 margin: '0 4px'
// // //               }}>i</span> icon in the results to see an explanation
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default StatisticsCalculator;



// // import React, { useState } from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';
// // import defaultExplanations from './explanations';

// // const StatisticsCalculator = ({explanations: propsExplanations}) => {
// //   const [numbers, setNumbers] = useState(['']);
// //   const [stats, setStats] = useState(null);
// //   const [fileType, setFileType] = useState('csv');
// //   const [inputMethod, setInputMethod] = useState('manual');
// //   const [preferredCalculation, setPreferredCalculation] = useState('auto');
// //   const [currentExplanation, setCurrentExplanation] = useState('');
// //   const [error, setError] = useState(null);

// //   const explanations = propsExplanations || defaultExplanations;

// //   const handleExplanationClick = (key) => {
// //     setCurrentExplanation(explanations[key]);
// //   };

// //   const calculateStats = (data) => {
// //     try {
// //       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
// //       if (validData.length === 0) {
// //         throw new Error("No valid numbers to calculate statistics.");
// //       }
  
// //       const sortedData = validData.map(Number).sort((a, b) => a - b);
// //       const n = sortedData.length;
  
// //       const sum = sortedData.reduce((acc, val) => acc + val, 0);
// //       const mean = sum / n;
// //       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// //       const min = sortedData[0];
// //       const max = sortedData[n - 1];
// //       const range = max - min;
  
// //       const modeMap = sortedData.reduce((acc, val) => {
// //         acc[val] = (acc[val] || 0) + 1;
// //         return acc;
// //       }, {});
// //       const maxFrequency = Math.max(...Object.values(modeMap));
// //       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
// //       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
// //       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// //       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
// //       const standardDeviationN1 = Math.sqrt(varianceN1);
// //       const standardDeviationN = Math.sqrt(varianceN);
  
// //       const q1Index = Math.floor(n / 4);
// //       const q3Index = Math.floor((3 * n) / 4);
// //       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
// //       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
// //       const iqr = q3 - q1;
  
// //       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
// //       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
// //       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
// //       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
// //       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
// //       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
// //       return {
// //         sampleSize: n,
// //         sum: sum.toFixed(2),
// //         mean: mean.toFixed(2),
// //         median: median.toFixed(2),
// //         mode: modeValue,
// //         min,
// //         max,
// //         range,
// //         varianceN1: varianceN1.toFixed(2),
// //         varianceN: varianceN.toFixed(2),
// //         standardDeviationN1: standardDeviationN1.toFixed(2),
// //         standardDeviationN: standardDeviationN.toFixed(2),
// //         q1: q1.toFixed(2),
// //         q3: q3.toFixed(2),
// //         iqr: iqr.toFixed(2),
// //         skewness: skewness.toFixed(2),
// //         kurtosis: kurtosis.toFixed(2),
// //         coefficientOfVariation: coefficientOfVariation.toFixed(2),
// //         geometricMean: geometricMean.toFixed(2),
// //         harmonicMean: harmonicMean.toFixed(2),
// //         rootMeanSquare: rootMeanSquare.toFixed(2)
// //       };
// //     } catch (error) {
// //       throw new Error(`Error calculating statistics: ${error.message}`);
// //     }
// //   };

// //   const handleAddNumber = () => {
// //     setNumbers([...numbers, '']);
// //     setError(null);
// //   };

// //   const handleRemoveNumber = (indexToRemove) => {
// //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// //     setError(null);
// //   };

// //   const handleInputChange = (e, index) => {
// //     const newNumbers = [...numbers];
// //     newNumbers[index] = e.target.value;
// //     setNumbers(newNumbers);
// //     setError(null);
// //   };

// //   const handleResetAll = () => {
// //     setNumbers(['']);
// //     setPreferredCalculation('auto');
// //     setStats(null);
// //     setError(null);
// //     setCurrentExplanation('');
// //   };

// //   const handleCalculate = () => {
// //     try {
// //       const result = calculateStats(numbers);
// //       setStats(result);
// //       setError(null);
// //     } catch (err) {
// //       setError(err.message);
// //       setStats(null);
// //     }
// //   };

// //   const handleFileUpload = (event) => {
// //     setStats(null);
// //     const file = event.target.files[0];
// //     if (file) {
// //       if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
// //         setError("Please upload a valid .txt or .csv file.");
// //         return;
// //       }
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         try {
// //           let content = e.target.result;
// //           let parsedNumbers;
          
// //           if (fileType === 'csv') {
// //             parsedNumbers = content.split('\n')
// //               .map(line => line.split(',').map(num => num.trim()))
// //               .flat()
// //               .filter(num => num !== '' && !isNaN(num));
// //           } else {
// //             parsedNumbers = content.split('\n')
// //               .map(num => num.trim())
// //               .filter(num => num !== '' && !isNaN(num));
// //           }
          
// //           if (parsedNumbers.length === 0) {
// //             throw new Error("No valid numbers found in the file.");
// //           }
// //           setNumbers(parsedNumbers);
// //           setError(null);
// //         } catch (error) {
// //           setError(`Error processing file: ${error.message}`);
// //         }
// //       };
// //       reader.onerror = () => {
// //         setError("Error reading file.");
// //       };
// //       reader.readAsText(file);
// //     }
// //   };

// //   return (
// //     <div style={{
// //       maxWidth: '1400px',
// //       margin: '0 auto',
// //       padding: '30px 20px',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
// //       background: '#ffffff'
// //     }}>
// //       {/* <h1 style={{
// //         textAlign: 'center',
// //         color: '#2d3748',
// //         marginBottom: '30px',
// //         fontSize: '42px',
// //         fontWeight: '700',
// //         letterSpacing: '-0.5px'
// //       }}>
// //         Statistics Calculator
// //       </h1> */}

// //       <div style={{
// //         display: 'grid',
// //         gridTemplateColumns: '1fr 1fr 1fr',
// //         gap: '25px'
// //       }}>
// //         {/* INPUT SECTION */}
// //         <div style={{
// //           background: 'white',
// //           borderRadius: '12px',
// //           padding: '25px',
// //           border: '2px solid #e2e8f0',
// //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// //         }}>
// //           <h2 style={{
// //             margin: '0 0 20px 0',
// //             fontSize: '26px',
// //             fontWeight: '600',
// //             color: '#2d3748'
// //           }}>
// //             Input Data
// //           </h2>

// //           <div style={{
// //             display: 'flex',
// //             justifyContent: 'center',
// //             gap: '10px',
// //             marginBottom: '25px'
// //           }}>
// //             <button
// //               onClick={() => setInputMethod('manual')}
// //               style={{
// //                 background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
// //                 color: inputMethod === 'manual' ? 'white' : '#718096',
// //                 border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
// //                 padding: '8px 20px',
// //                 borderRadius: '6px',
// //                 cursor: 'pointer',
// //                 fontSize: '18px',
// //                 fontWeight: '600',
// //                 transition: 'all 0.2s'
// //               }}
// //             >
// //               Manual Input
// //             </button>
// //             <button
// //               onClick={() => setInputMethod('file')}
// //               style={{
// //                 background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
// //                 color: inputMethod === 'file' ? 'white' : '#718096',
// //                 border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
// //                 padding: '8px 20px',
// //                 borderRadius: '6px',
// //                 cursor: 'pointer',
// //                 fontSize: '18px',
// //                 fontWeight: '600',
// //                 transition: 'all 0.2s'
// //               }}
// //             >
// //               File Upload
// //             </button>
// //           </div>

// //           {inputMethod === 'manual' && (
// //             <div>
// //               <div style={{
// //                 display: 'grid',
// //                 gridTemplateColumns: '1fr 1fr',
// //                 gap: '10px',
// //                 marginBottom: '15px',
// //                 maxHeight: '300px',
// //                 overflowY: 'auto',
// //                 padding: '5px'
// //               }}>
// //                 {numbers.map((num, index) => (
// //                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// //                     <input
// //                       type="number"
// //                       value={num}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                       placeholder="Value"
// //                       style={{
// //                         flex: 1,
// //                         padding: '8px',
// //                         border: '2px solid #e2e8f0',
// //                         borderRadius: '6px',
// //                         fontSize: '17px',
// //                         outline: 'none',
// //                         transition: 'border 0.2s'
// //                       }}
// //                       onFocus={(e) => e.target.style.borderColor = '#245de1'}
// //                       onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
// //                     />
// //                     {numbers.length > 1 && (
// //                       <button
// //                         onClick={() => handleRemoveNumber(index)}
// //                         style={{
// //                           background: '#ef4444',
// //                           color: 'white',
// //                           border: 'none',
// //                           borderRadius: '50%',
// //                           width: '22px',
// //                           height: '22px',
// //                           cursor: 'pointer',
// //                           fontSize: '21px',
// //                           display: 'flex',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                           flexShrink: 0
// //                         }}
// //                       >
// //                         ×
// //                       </button>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>

// //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// //                 <button
// //                   onClick={handleAddNumber}
// //                   style={{
// //                     flex: 1,
// //                     background: '#245de1',
// //                     color: 'white',
// //                     border: 'none',
// //                     padding: '10px',
// //                     borderRadius: '6px',
// //                     cursor: 'pointer',
// //                     fontSize: '18px',
// //                     fontWeight: '600',
// //                     transition: 'background 0.2s'
// //                   }}
// //                   onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// //                   onMouseOut={(e) => e.target.style.background = '#245de1'}
// //                 >
// //                   + Add Number
// //                 </button>
// //                 <button
// //                   onClick={handleResetAll}
// //                   style={{
// //                     flex: 1,
// //                     background: 'white',
// //                     color: '#245de1',
// //                     border: '2px solid #245de1',
// //                     padding: '10px',
// //                     borderRadius: '6px',
// //                     cursor: 'pointer',
// //                     fontSize: '18px',
// //                     fontWeight: '600',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     gap: '5px'
// //                   }}
// //                 >
// //                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
// //                     <path d="M3 3v5h5"/>
// //                   </svg>
// //                   Reset
// //                 </button>
// //               </div>
// //             </div>
// //           )}

// //           {inputMethod === 'file' && (
// //             <div>
// //               <div style={{
// //                 background: '#f8f9fa',
// //                 padding: '15px',
// //                 borderRadius: '8px',
// //                 border: '2px solid #e2e8f0',
// //                 marginBottom: '15px'
// //               }}>
// //                 <h3 style={{
// //                   margin: '0 0 12px 0',
// //                   fontSize: '18px',
// //                   fontWeight: '600',
// //                   color: '#2d3748'
// //                 }}>
// //                   File Type
// //                 </h3>
// //                 <div style={{ display: 'flex', gap: '15px' }}>
// //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// //                     <input
// //                       type="radio"
// //                       value="csv"
// //                       checked={fileType === 'csv'}
// //                       onChange={() => setFileType('csv')}
// //                       style={{ marginRight: '8px' }}
// //                     />
// //                     CSV
// //                   </label>
// //                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// //                     <input
// //                       type="radio"
// //                       value="txt"
// //                       checked={fileType === 'txt'}
// //                       onChange={() => setFileType('txt')}
// //                       style={{ marginRight: '8px' }}
// //                     />
// //                     TXT
// //                   </label>
// //                 </div>
// //               </div>

// //               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
// //                 <input
// //                   type="file"
// //                   accept={fileType === 'csv' ? '.csv' : '.txt'}
// //                   onChange={handleFileUpload}
// //                   style={{
// //                     flex: 1,
// //                     padding: '10px',
// //                     border: '2px solid #e2e8f0',
// //                     borderRadius: '6px',
// //                     fontSize: '17px',
// //                     cursor: 'pointer'
// //                   }}
// //                 />
// //                 <button
// //                   onClick={handleResetAll}
// //                   style={{
// //                     background: 'white',
// //                     color: '#245de1',
// //                     border: '2px solid #245de1',
// //                     padding: '10px 15px',
// //                     borderRadius: '6px',
// //                     cursor: 'pointer',
// //                     fontSize: '18px',
// //                     fontWeight: '600'
// //                   }}
// //                 >
// //                   Reset
// //                 </button>
// //               </div>

// //               {numbers.length > 0 && numbers[0] !== '' && (
// //                 <div style={{
// //                   background: '#e6f2ff',
// //                   padding: '12px',
// //                   borderRadius: '6px',
// //                   border: '2px solid #245de1',
// //                   fontSize: '17px',
// //                   color: '#2d3748',
// //                   marginBottom: '15px'
// //                 }}>
// //                   <strong>{numbers.length}</strong> numbers loaded from file
// //                 </div>
// //               )}
// //             </div>
// //           )}

// //           {error && (
// //             <div style={{
// //               background: '#ffebee',
// //               color: '#d32f2f',
// //               border: '2px solid #ef9a9a',
// //               borderRadius: '6px',
// //               padding: '12px',
// //               marginBottom: '15px',
// //               fontSize: '17px',
// //               fontWeight: '500',
// //               textAlign: 'center'
// //             }}>
// //               {error}
// //             </div>
// //           )}

// //           <button
// //             onClick={handleCalculate}
// //             style={{
// //               width: '100%',
// //               background: '#245de1',
// //               color: 'white',
// //               border: 'none',
// //               padding: '14px',
// //               borderRadius: '6px',
// //               cursor: 'pointer',
// //               fontSize: '21px',
// //               fontWeight: '600',
// //               marginBottom: '20px',
// //               transition: 'background 0.2s'
// //             }}
// //             onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
// //             onMouseOut={(e) => e.target.style.background = '#245de1'}
// //           >
// //             Calculate Statistics
// //           </button>

// //           <div style={{
// //             background: '#f8f9fa',
// //             padding: '15px',
// //             borderRadius: '8px',
// //             border: '2px solid #e2e8f0'
// //           }}>
// //             <h3 style={{
// //               margin: '0 0 12px 0',
// //               fontSize: '18px',
// //               fontWeight: '600',
// //               color: '#2d3748'
// //             }}>
// //               Calculation Method
// //             </h3>
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
// //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// //                 <input
// //                   type="radio"
// //                   value="auto"
// //                   checked={preferredCalculation === 'auto'}
// //                   onChange={() => setPreferredCalculation('auto')}
// //                   style={{ marginRight: '8px' }}
// //                 />
// //                 Auto (n-1 for n &lt; 30, n for n ≥ 30)
// //               </label>
// //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// //                 <input
// //                   type="radio"
// //                   value="n-1"
// //                   checked={preferredCalculation === 'n-1'}
// //                   onChange={() => setPreferredCalculation('n-1')}
// //                   style={{ marginRight: '8px' }}
// //                 />
// //                 Always use n-1 (Sample)
// //               </label>
// //               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
// //                 <input
// //                   type="radio"
// //                   value="n"
// //                   checked={preferredCalculation === 'n'}
// //                   onChange={() => setPreferredCalculation('n')}
// //                   style={{ marginRight: '8px' }}
// //                 />
// //                 Always use n (Population)
// //               </label>
// //             </div>
// //           </div>
// //         </div>

// //         {/* RESULTS SECTION */}
// //         <div style={{
// //           background: 'white',
// //           borderRadius: '12px',
// //           padding: '25px',
// //           border: '2px solid #e2e8f0',
// //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
// //           maxHeight: '800px',
// //           overflowY: 'auto'
// //         }}>
// //           <h2 style={{
// //             margin: '0 0 20px 0',
// //             fontSize: '26px',
// //             fontWeight: '600',
// //             color: '#2d3748'
// //           }}>
// //             Results
// //           </h2>

// //           <div style={{ display: 'grid', gap: '12px' }}>
// //             {[
// //               { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
// //               { label: 'Sum', key: 'sum', value: stats?.sum },
// //               { label: 'Mean', key: 'mean', value: stats?.mean },
// //               { label: 'Median', key: 'median', value: stats?.median },
// //               { label: 'Mode', key: 'mode', value: stats?.mode },
// //               { label: 'Min', key: 'min', value: stats?.min },
// //               { label: 'Max', key: 'max', value: stats?.max },
// //               { label: 'Range', key: 'range', value: stats?.range },
// //               { 
// //                 label: 'Variance', 
// //                 key: 'variance', 
// //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
// //               },
// //               { 
// //                 label: 'Standard Deviation', 
// //                 key: 'standardDeviation', 
// //                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
// //               },
// //               { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
// //               { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
// //               { label: 'IQR', key: 'iqr', value: stats?.iqr },
// //               { label: 'Skewness', key: 'skewness', value: stats?.skewness },
// //               { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
// //               { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
// //               { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
// //               { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
// //               { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
// //             ].map((item) => (
// //               <div
// //                 key={item.key}
// //                 style={{
// //                   background: '#f8f9fa',
// //                   padding: '12px 15px',
// //                   borderRadius: '8px',
// //                   border: '1.5px solid #e2e8f0',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'space-between'
// //                 }}
// //               >
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
// //                   <span style={{ fontSize: '18px', color: '#718096', fontWeight: '500' }}>
// //                     {item.label}
// //                   </span>
// //                   <div
// //                     style={{
// //                       position: 'relative',
// //                       display: 'inline-flex',
// //                       alignItems: 'center'
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// //                       if (tooltip) {
// //                         tooltip.style.visibility = 'visible';
// //                         tooltip.style.opacity = '1';
// //                       }
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
// //                       if (tooltip) {
// //                         tooltip.style.visibility = 'hidden';
// //                         tooltip.style.opacity = '0';
// //                       }
// //                     }}
// //                   >
// //                     <span
// //                       onClick={() => handleExplanationClick(item.key)}
// //                       style={{
// //                         display: 'inline-flex',
// //                         alignItems: 'center',
// //                         justifyContent: 'center',
// //                         width: '18px',
// //                         height: '18px',
// //                         borderRadius: '50%',
// //                         background: '#245de1',
// //                         color: 'white',
// //                         fontSize: '21px',
// //                         cursor: 'pointer',
// //                         fontWeight: '600'
// //                       }}
// //                     >
// //                       i
// //                     </span>
// //                     <span
// //                       data-tooltip
// //                       style={{
// //                         visibility: 'hidden',
// //                         position: 'absolute',
// //                         bottom: '125%',
// //                         left: '50%',
// //                         transform: 'translateX(-50%)',
// //                         backgroundColor: '#555',
// //                         color: '#fff',
// //                         textAlign: 'center',
// //                         borderRadius: '6px',
// //                         padding: '5px 10px',
// //                         whiteSpace: 'nowrap',
// //                         fontSize: '18px',
// //                         fontWeight: '400',
// //                         zIndex: 1,
// //                         opacity: 0,
// //                         transition: 'opacity 0.3s',
// //                         pointerEvents: 'none'
// //                       }}
// //                     >
// //                       Click to see explanation
// //                     </span>
// //                   </div>
// //                 </div>
// //                 <span style={{
// //                   fontSize: '21px',
// //                   fontWeight: '700',
// //                   color: item.value !== undefined ? '#245de1' : '#cbd5e0'
// //                 }}>
// //                   {item.value !== undefined ? item.value : '—'}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* EXPLANATION SECTION */}
// //         <div style={{
// //           background: 'white',
// //           borderRadius: '12px',
// //           padding: '25px',
// //           border: '2px solid #e2e8f0',
// //           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
// //         }}>
// //           <h2 style={{
// //             margin: '0 0 20px 0',
// //             fontSize: '26px',
// //             fontWeight: '600',
// //             color: '#2d3748'
// //           }}>
// //             Explanation
// //           </h2>
          
// //           {currentExplanation ? (
// //             <div style={{
// //               background: '#e6f2ff',
// //               padding: '18px',
// //               borderRadius: '8px',
// //               border: '2px solid #245de1',
// //               fontSize: '18px',
// //               lineHeight: '1.6',
// //               color: '#2d3748'
// //             }}>
// //               {processContent(currentExplanation)}
// //             </div>
// //           ) : (
// //             <div style={{
// //               textAlign: 'center',
// //               padding: '40px 20px',
// //               color: '#718096',
// //               fontSize: '18px',
// //               lineHeight: '1.6'
// //             }}>
// //               Click on any <span style={{
// //                 display: 'inline-flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 width: '18px',
// //                 height: '18px',
// //                 borderRadius: '50%',
// //                 background: '#245de1',
// //                 color: 'white',
// //                 fontSize: '21px',
// //                 fontWeight: '600',
// //                 margin: '0 4px'
// //               }}>i</span> icon in the results to see an explanation
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StatisticsCalculator;



// import React, { useState } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
// import defaultExplanations from './explanations';

// const StatisticsCalculator = ({explanations: propsExplanations}) => {
//   const [numbers, setNumbers] = useState(['']);
//   const [stats, setStats] = useState(null);
//   const [fileType, setFileType] = useState('csv');
//   const [inputMethod, setInputMethod] = useState('manual');
//   const [preferredCalculation, setPreferredCalculation] = useState('auto');
//   const [currentExplanation, setCurrentExplanation] = useState('');
//   const [error, setError] = useState(null);

//   const explanations = propsExplanations || defaultExplanations;

//   const handleExplanationClick = (key) => {
//     setCurrentExplanation(explanations[key]);
//   };

//   const calculateStats = (data) => {
//     try {
//       const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
//       if (validData.length === 0) {
//         throw new Error("No valid numbers to calculate statistics.");
//       }
  
//       const sortedData = validData.map(Number).sort((a, b) => a - b);
//       const n = sortedData.length;
  
//       const sum = sortedData.reduce((acc, val) => acc + val, 0);
//       const mean = sum / n;
//       const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
//       const min = sortedData[0];
//       const max = sortedData[n - 1];
//       const range = max - min;
  
//       const modeMap = sortedData.reduce((acc, val) => {
//         acc[val] = (acc[val] || 0) + 1;
//         return acc;
//       }, {});
//       const maxFrequency = Math.max(...Object.values(modeMap));
//       const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
//       const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
//       const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
//       const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
//       const standardDeviationN1 = Math.sqrt(varianceN1);
//       const standardDeviationN = Math.sqrt(varianceN);
  
//       const q1Index = Math.floor(n / 4);
//       const q3Index = Math.floor((3 * n) / 4);
//       const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
//       const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
//       const iqr = q3 - q1;
  
//       const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
//       const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
//       const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
//       const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
//       const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
//       const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
//       return {
//         sampleSize: n,
//         sum: sum.toFixed(2),
//         mean: mean.toFixed(2),
//         median: median.toFixed(2),
//         mode: modeValue,
//         min,
//         max,
//         range,
//         varianceN1: varianceN1.toFixed(2),
//         varianceN: varianceN.toFixed(2),
//         standardDeviationN1: standardDeviationN1.toFixed(2),
//         standardDeviationN: standardDeviationN.toFixed(2),
//         q1: q1.toFixed(2),
//         q3: q3.toFixed(2),
//         iqr: iqr.toFixed(2),
//         skewness: skewness.toFixed(2),
//         kurtosis: kurtosis.toFixed(2),
//         coefficientOfVariation: coefficientOfVariation.toFixed(2),
//         geometricMean: geometricMean.toFixed(2),
//         harmonicMean: harmonicMean.toFixed(2),
//         rootMeanSquare: rootMeanSquare.toFixed(2)
//       };
//     } catch (error) {
//       throw new Error(`Error calculating statistics: ${error.message}`);
//     }
//   };

//   const handleAddNumber = () => {
//     setNumbers([...numbers, '']);
//     setError(null);
//   };

//   const handleRemoveNumber = (indexToRemove) => {
//     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
//     setError(null);
//   };

//   const handleInputChange = (e, index) => {
//     const newNumbers = [...numbers];
//     newNumbers[index] = e.target.value;
//     setNumbers(newNumbers);
//     setError(null);
//   };

//   const handleResetAll = () => {
//     setNumbers(['']);
//     setPreferredCalculation('auto');
//     setStats(null);
//     setError(null);
//     setCurrentExplanation('');
//   };

//   const handleCalculate = () => {
//     try {
//       const result = calculateStats(numbers);
//       setStats(result);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setStats(null);
//     }
//   };

//   const handleFileUpload = (event) => {
//     setStats(null);
//     const file = event.target.files[0];
//     if (file) {
//       if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
//         setError("Please upload a valid .txt or .csv file.");
//         return;
//       }
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         try {
//           let content = e.target.result;
//           let parsedNumbers;
          
//           if (fileType === 'csv') {
//             parsedNumbers = content.split('\n')
//               .map(line => line.split(',').map(num => num.trim()))
//               .flat()
//               .filter(num => num !== '' && !isNaN(num));
//           } else {
//             parsedNumbers = content.split('\n')
//               .map(num => num.trim())
//               .filter(num => num !== '' && !isNaN(num));
//           }
          
//           if (parsedNumbers.length === 0) {
//             throw new Error("No valid numbers found in the file.");
//           }
//           setNumbers(parsedNumbers);
//           setError(null);
//         } catch (error) {
//           setError(`Error processing file: ${error.message}`);
//         }
//       };
//       reader.onerror = () => {
//         setError("Error reading file.");
//       };
//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: '1400px',
//       margin: '0 auto',
//       padding: '30px 20px',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       background: '#ffffff'
//     }}>
//       {/* <h1 style={{
//         textAlign: 'center',
//         color: '#2d3748',
//         marginBottom: '30px',
//         fontSize: '42px',
//         fontWeight: '700',
//         letterSpacing: '-0.5px'
//       }}>
//         Statistics Calculator
//       </h1> */}

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr 1fr',
//         gap: '25px'
//       }}>
//         {/* INPUT SECTION */}
//         <div style={{
//           background: 'white',
//           borderRadius: '12px',
//           padding: '25px',
//           border: '2px solid #e2e8f0',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
//         }}>
//           <h2 style={{
//             margin: '0 0 20px 0',
//             fontSize: '26px',
//             fontWeight: '600',
//             color: '#2d3748'
//           }}>
//             Input Data
//           </h2>

//           <div style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: '10px',
//             marginBottom: '25px'
//           }}>
//             <button
//               onClick={() => setInputMethod('manual')}
//               style={{
//                 background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
//                 color: inputMethod === 'manual' ? 'white' : '#718096',
//                 border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
//                 padding: '8px 20px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '18px',
//                 fontWeight: '600',
//                 transition: 'all 0.2s'
//               }}
//             >
//               Manual Input
//             </button>
//             <button
//               onClick={() => setInputMethod('file')}
//               style={{
//                 background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
//                 color: inputMethod === 'file' ? 'white' : '#718096',
//                 border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
//                 padding: '8px 20px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '18px',
//                 fontWeight: '600',
//                 transition: 'all 0.2s'
//               }}
//             >
//               File Upload
//             </button>
//           </div>

//           {inputMethod === 'manual' && (
//             <div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '10px',
//                 marginBottom: '15px',
//                 maxHeight: '300px',
//                 overflowY: 'auto',
//                 padding: '5px'
//               }}>
//                 {numbers.map((num, index) => (
//                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
//                     <input
//                       type="number"
//                       value={num}
//                       onChange={(e) => handleInputChange(e, index)}
//                       placeholder="Value"
//                       style={{
//                         flex: 1,
//                         padding: '8px',
//                         border: '2px solid #e2e8f0',
//                         borderRadius: '6px',
//                         fontSize: '17px',
//                         outline: 'none',
//                         transition: 'border 0.2s'
//                       }}
//                       onFocus={(e) => e.target.style.borderColor = '#245de1'}
//                       onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
//                     />
//                     {numbers.length > 1 && (
//                       <button
//                         onClick={() => handleRemoveNumber(index)}
//                         style={{
//                           background: '#ef4444',
//                           color: 'white',
//                           border: 'none',
//                           borderRadius: '50%',
//                           width: '22px',
//                           height: '22px',
//                           cursor: 'pointer',
//                           fontSize: '21px',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           flexShrink: 0
//                         }}
//                       >
//                         ×
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
//                 <button
//                   onClick={handleAddNumber}
//                   style={{
//                     flex: 1,
//                     background: '#245de1',
//                     color: 'white',
//                     border: 'none',
//                     padding: '10px',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '18px',
//                     fontWeight: '600',
//                     transition: 'background 0.2s'
//                   }}
//                   onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
//                   onMouseOut={(e) => e.target.style.background = '#245de1'}
//                 >
//                   + Add Number
//                 </button>
//                 <button
//                   onClick={handleResetAll}
//                   style={{
//                     flex: 1,
//                     background: 'white',
//                     color: '#245de1',
//                     border: '2px solid #245de1',
//                     padding: '10px',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '18px',
//                     fontWeight: '600',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '5px'
//                   }}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
//                     <path d="M3 3v5h5"/>
//                   </svg>
//                   Reset
//                 </button>
//               </div>
//             </div>
//           )}

//           {inputMethod === 'file' && (
//             <div>
//               <div style={{
//                 background: '#f8f9fa',
//                 padding: '15px',
//                 borderRadius: '8px',
//                 border: '2px solid #e2e8f0',
//                 marginBottom: '15px'
//               }}>
//                 <h3 style={{
//                   margin: '0 0 12px 0',
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   color: '#2d3748'
//                 }}>
//                   File Type
//                 </h3>
//                 <div style={{ display: 'flex', gap: '15px' }}>
//                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
//                     <input
//                       type="radio"
//                       value="csv"
//                       checked={fileType === 'csv'}
//                       onChange={() => setFileType('csv')}
//                       style={{ marginRight: '8px' }}
//                     />
//                     CSV
//                   </label>
//                   <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
//                     <input
//                       type="radio"
//                       value="txt"
//                       checked={fileType === 'txt'}
//                       onChange={() => setFileType('txt')}
//                       style={{ marginRight: '8px' }}
//                     />
//                     TXT
//                   </label>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
//                 <input
//                   type="file"
//                   accept={fileType === 'csv' ? '.csv' : '.txt'}
//                   onChange={handleFileUpload}
//                   style={{
//                     flex: 1,
//                     padding: '10px',
//                     border: '2px solid #e2e8f0',
//                     borderRadius: '6px',
//                     fontSize: '17px',
//                     cursor: 'pointer',
//                     backgroundColor: 'white',
//                     color: '#2d3748'
//                   }}
//                 />
//                 <button
//                   onClick={handleResetAll}
//                   style={{
//                     background: 'white',
//                     color: '#245de1',
//                     border: '2px solid #245de1',
//                     padding: '10px 15px',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '18px',
//                     fontWeight: '600'
//                   }}
//                 >
//                   Reset
//                 </button>
//               </div>

//               {numbers.length > 0 && numbers[0] !== '' && (
//                 <div style={{
//                   background: '#e6f2ff',
//                   padding: '12px',
//                   borderRadius: '6px',
//                   border: '2px solid #245de1',
//                   fontSize: '17px',
//                   color: '#2d3748',
//                   marginBottom: '15px'
//                 }}>
//                   <strong>{numbers.length}</strong> numbers loaded from file
//                 </div>
//               )}
//             </div>
//           )}

//           {error && (
//             <div style={{
//               background: '#ffebee',
//               color: '#d32f2f',
//               border: '2px solid #ef9a9a',
//               borderRadius: '6px',
//               padding: '12px',
//               marginBottom: '15px',
//               fontSize: '17px',
//               fontWeight: '500',
//               textAlign: 'center'
//             }}>
//               {error}
//             </div>
//           )}

//           <button
//             onClick={handleCalculate}
//             style={{
//               width: '100%',
//               background: '#245de1',
//               color: 'white',
//               border: 'none',
//               padding: '14px',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '21px',
//               fontWeight: '600',
//               marginBottom: '20px',
//               transition: 'background 0.2s'
//             }}
//             onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
//             onMouseOut={(e) => e.target.style.background = '#245de1'}
//           >
//             Calculate Statistics
//           </button>

//           <div style={{
//             background: '#f8f9fa',
//             padding: '15px',
//             borderRadius: '8px',
//             border: '2px solid #e2e8f0'
//           }}>
//             <h3 style={{
//               margin: '0 0 12px 0',
//               fontSize: '18px',
//               fontWeight: '600',
//               color: '#2d3748'
//             }}>
//               Calculation Method
//             </h3>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
//                 <input
//                   type="radio"
//                   value="auto"
//                   checked={preferredCalculation === 'auto'}
//                   onChange={() => setPreferredCalculation('auto')}
//                   style={{ marginRight: '8px' }}
//                 />
//                 Auto (n-1 for n &lt; 30, n for n ≥ 30)
//               </label>
//               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
//                 <input
//                   type="radio"
//                   value="n-1"
//                   checked={preferredCalculation === 'n-1'}
//                   onChange={() => setPreferredCalculation('n-1')}
//                   style={{ marginRight: '8px' }}
//                 />
//                 Always use n-1 (Sample)
//               </label>
//               <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
//                 <input
//                   type="radio"
//                   value="n"
//                   checked={preferredCalculation === 'n'}
//                   onChange={() => setPreferredCalculation('n')}
//                   style={{ marginRight: '8px' }}
//                 />
//                 Always use n (Population)
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* RESULTS SECTION */}
//         <div style={{
//           background: 'white',
//           borderRadius: '12px',
//           padding: '25px',
//           border: '2px solid #e2e8f0',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
//           maxHeight: '800px',
//           overflowY: 'auto'
//         }}>
//           <h2 style={{
//             margin: '0 0 20px 0',
//             fontSize: '26px',
//             fontWeight: '600',
//             color: '#2d3748'
//           }}>
//             Results
//           </h2>

//           <div style={{ display: 'grid', gap: '12px' }}>
//             {[
//               { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
//               { label: 'Sum', key: 'sum', value: stats?.sum },
//               { label: 'Mean', key: 'mean', value: stats?.mean },
//               { label: 'Median', key: 'median', value: stats?.median },
//               { label: 'Mode', key: 'mode', value: stats?.mode },
//               { label: 'Min', key: 'min', value: stats?.min },
//               { label: 'Max', key: 'max', value: stats?.max },
//               { label: 'Range', key: 'range', value: stats?.range },
//               { 
//                 label: 'Variance', 
//                 key: 'variance', 
//                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
//               },
//               { 
//                 label: 'Standard Deviation', 
//                 key: 'standardDeviation', 
//                 value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
//               },
//               { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
//               { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
//               { label: 'IQR', key: 'iqr', value: stats?.iqr },
//               { label: 'Skewness', key: 'skewness', value: stats?.skewness },
//               { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
//               { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
//               { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
//               { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
//               { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
//             ].map((item) => (
//               <div
//                 key={item.key}
//                 style={{
//                   background: '#f8f9fa',
//                   padding: '12px 15px',
//                   borderRadius: '8px',
//                   border: '1.5px solid #e2e8f0',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between'
//                 }}
//               >
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                   <span style={{ fontSize: '18px', color: '#718096', fontWeight: '500' }}>
//                     {item.label}
//                   </span>
//                   <div
//                     style={{
//                       position: 'relative',
//                       display: 'inline-flex',
//                       alignItems: 'center'
//                     }}
//                     onMouseEnter={(e) => {
//                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
//                       if (tooltip) {
//                         tooltip.style.visibility = 'visible';
//                         tooltip.style.opacity = '1';
//                       }
//                     }}
//                     onMouseLeave={(e) => {
//                       const tooltip = e.currentTarget.querySelector('[data-tooltip]');
//                       if (tooltip) {
//                         tooltip.style.visibility = 'hidden';
//                         tooltip.style.opacity = '0';
//                       }
//                     }}
//                   >
//                     <span
//                       onClick={() => handleExplanationClick(item.key)}
//                       style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         width: '18px',
//                         height: '18px',
//                         borderRadius: '50%',
//                         background: '#245de1',
//                         color: 'white',
//                         fontSize: '21px',
//                         cursor: 'pointer',
//                         fontWeight: '600'
//                       }}
//                     >
//                       i
//                     </span>
//                     <span
//                       data-tooltip
//                       style={{
//                         visibility: 'hidden',
//                         position: 'absolute',
//                         bottom: '125%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         backgroundColor: '#555',
//                         color: '#fff',
//                         textAlign: 'center',
//                         borderRadius: '6px',
//                         padding: '5px 10px',
//                         whiteSpace: 'nowrap',
//                         fontSize: '18px',
//                         fontWeight: '400',
//                         zIndex: 1,
//                         opacity: 0,
//                         transition: 'opacity 0.3s',
//                         pointerEvents: 'none'
//                       }}
//                     >
//                       Click to see explanation
//                     </span>
//                   </div>
//                 </div>
//                 <span style={{
//                   fontSize: '21px',
//                   fontWeight: '700',
//                   color: item.value !== undefined ? '#245de1' : '#cbd5e0'
//                 }}>
//                   {item.value !== undefined ? item.value : '—'}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* EXPLANATION SECTION */}
//         <div style={{
//           background: 'white',
//           borderRadius: '12px',
//           padding: '25px',
//           border: '2px solid #e2e8f0',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
//         }}>
//           <h2 style={{
//             margin: '0 0 20px 0',
//             fontSize: '26px',
//             fontWeight: '600',
//             color: '#2d3748'
//           }}>
//             Explanation
//           </h2>
          
//           {currentExplanation ? (
//             <div style={{
//               background: '#e6f2ff',
//               padding: '18px',
//               borderRadius: '8px',
//               border: '2px solid #245de1',
//               fontSize: '18px',
//               lineHeight: '1.6',
//               color: '#2d3748'
//             }}>
//               {processContent(currentExplanation)}
//             </div>
//           ) : (
//             <div style={{
//               textAlign: 'center',
//               padding: '40px 20px',
//               color: '#718096',
//               fontSize: '18px',
//               lineHeight: '1.6'
//             }}>
//               Click on any <span style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 width: '18px',
//                 height: '18px',
//                 borderRadius: '50%',
//                 background: '#245de1',
//                 color: 'white',
//                 fontSize: '21px',
//                 fontWeight: '600',
//                 margin: '0 4px'
//               }}>i</span> icon in the results to see an explanation
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatisticsCalculator;


import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import defaultExplanations from './explanations';

const StatisticsCalculator = ({explanations: propsExplanations}) => {
  const [numbers, setNumbers] = useState(['']);
  const [stats, setStats] = useState(null);
  const [fileType, setFileType] = useState('csv');
  const [inputMethod, setInputMethod] = useState('manual');
  const [preferredCalculation, setPreferredCalculation] = useState('auto');
  const [currentExplanation, setCurrentExplanation] = useState('');
  const [error, setError] = useState(null);

  const explanations = propsExplanations || defaultExplanations;

  const handleExplanationClick = (key) => {
    setCurrentExplanation(explanations[key]);
  };

  const calculateStats = (data) => {
    try {
      const validData = data.filter(n => !isNaN(parseFloat(n)) && isFinite(n));
      if (validData.length === 0) {
        throw new Error("No valid numbers to calculate statistics.");
      }
  
      const sortedData = validData.map(Number).sort((a, b) => a - b);
      const n = sortedData.length;
  
      const sum = sortedData.reduce((acc, val) => acc + val, 0);
      const mean = sum / n;
      const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
      const min = sortedData[0];
      const max = sortedData[n - 1];
      const range = max - min;
  
      const modeMap = sortedData.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      const maxFrequency = Math.max(...Object.values(modeMap));
      const modes = Object.keys(modeMap).filter(key => modeMap[key] === maxFrequency).map(Number);
      const modeValue = modes.length === n ? "No unique mode" : modes.join(", ");
  
      const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
      const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  
      const standardDeviationN1 = Math.sqrt(varianceN1);
      const standardDeviationN = Math.sqrt(varianceN);
  
      const q1Index = Math.floor(n / 4);
      const q3Index = Math.floor((3 * n) / 4);
      const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
      const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
      const iqr = q3 - q1;
  
      const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
      const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;
  
      const coefficientOfVariation = (standardDeviationN / mean) * 100;
  
      const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
      const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
      const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
  
      return {
        sampleSize: n,
        sum: sum.toFixed(2),
        mean: mean.toFixed(2),
        median: median.toFixed(2),
        mode: modeValue,
        min,
        max,
        range,
        varianceN1: varianceN1.toFixed(2),
        varianceN: varianceN.toFixed(2),
        standardDeviationN1: standardDeviationN1.toFixed(2),
        standardDeviationN: standardDeviationN.toFixed(2),
        q1: q1.toFixed(2),
        q3: q3.toFixed(2),
        iqr: iqr.toFixed(2),
        skewness: skewness.toFixed(2),
        kurtosis: kurtosis.toFixed(2),
        coefficientOfVariation: coefficientOfVariation.toFixed(2),
        geometricMean: geometricMean.toFixed(2),
        harmonicMean: harmonicMean.toFixed(2),
        rootMeanSquare: rootMeanSquare.toFixed(2)
      };
    } catch (error) {
      throw new Error(`Error calculating statistics: ${error.message}`);
    }
  };

  const handleAddNumber = () => {
    setNumbers([...numbers, '']);
    setError(null);
  };

  const handleRemoveNumber = (indexToRemove) => {
    setNumbers(numbers.filter((_, index) => index !== indexToRemove));
    setError(null);
  };

  const handleInputChange = (e, index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = e.target.value;
    setNumbers(newNumbers);
    setError(null);
  };

  const handleResetAll = () => {
    setNumbers(['']);
    setPreferredCalculation('auto');
    setStats(null);
    setError(null);
    setCurrentExplanation('');
  };

  const handleCalculate = () => {
    try {
      const result = calculateStats(numbers);
      setStats(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setStats(null);
    }
  };

  const handleFileUpload = (event) => {
    setStats(null);
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'text/plain' && file.type !== 'text/csv' && !file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
        setError("Please upload a valid .txt or .csv file.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          let content = e.target.result;
          let parsedNumbers;
          
          if (fileType === 'csv') {
            parsedNumbers = content.split('\n')
              .map(line => line.split(',').map(num => num.trim()))
              .flat()
              .filter(num => num !== '' && !isNaN(num));
          } else {
            parsedNumbers = content.split('\n')
              .map(num => num.trim())
              .filter(num => num !== '' && !isNaN(num));
          }
          
          if (parsedNumbers.length === 0) {
            throw new Error("No valid numbers found in the file.");
          }
          setNumbers(parsedNumbers);
          setError(null);
        } catch (error) {
          setError(`Error processing file: ${error.message}`);
        }
      };
      reader.onerror = () => {
        setError("Error reading file.");
      };
      reader.readAsText(file);
    }
  };

  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '30px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#ffffff'
    }}>
      {/* <h1 style={{
        textAlign: 'center',
        color: '#2d3748',
        marginBottom: '30px',
        fontSize: '42px',
        fontWeight: '700',
        letterSpacing: '-0.5px'
      }}>
        Statistics Calculator
      </h1> */}

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '25px'
      }}>
        {/* INPUT SECTION */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '25px',
          border: '2px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h2 style={{
            margin: '0 0 20px 0',
            fontSize: '26px',
            fontWeight: '600',
            color: '#2d3748'
          }}>
            Input Data
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '25px'
          }}>
            <button
              onClick={() => setInputMethod('manual')}
              style={{
                background: inputMethod === 'manual' ? '#245de1' : '#f8f9fa',
                color: inputMethod === 'manual' ? 'white' : '#718096',
                border: inputMethod === 'manual' ? '2px solid #245de1' : '2px solid #e2e8f0',
                padding: '8px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              Manual Input
            </button>
            <button
              onClick={() => setInputMethod('file')}
              style={{
                background: inputMethod === 'file' ? '#245de1' : '#f8f9fa',
                color: inputMethod === 'file' ? 'white' : '#718096',
                border: inputMethod === 'file' ? '2px solid #245de1' : '2px solid #e2e8f0',
                padding: '8px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              File Upload
            </button>
          </div>

          {inputMethod === 'manual' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                marginBottom: '15px',
                maxHeight: '300px',
                overflowY: 'auto',
                padding: '5px'
              }}>
                {numbers.map((num, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                      type="number"
                      value={num}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Value"
                      style={{
                        flex: 1,
                        padding: '8px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '17px',
                        outline: 'none',
                        transition: 'border 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#245de1'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    {numbers.length > 1 && (
                      <button
                        onClick={() => handleRemoveNumber(index)}
                        style={{
                          background: '#ef4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '22px',
                          height: '22px',
                          cursor: 'pointer',
                          fontSize: '21px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <button
                  onClick={handleAddNumber}
                  style={{
                    flex: 1,
                    background: '#245de1',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: '600',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
                  onMouseOut={(e) => e.target.style.background = '#245de1'}
                >
                  + Add Number
                </button>
                <button
                  onClick={handleResetAll}
                  style={{
                    flex: 1,
                    background: 'white',
                    color: '#245de1',
                    border: '2px solid #245de1',
                    padding: '10px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                  </svg>
                  Reset
                </button>
              </div>
            </div>
          )}

          {inputMethod === 'file' && (
            <div>
              <div style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #e2e8f0',
                marginBottom: '15px'
              }}>
                <h3 style={{
                  margin: '0 0 12px 0',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#2d3748'
                }}>
                  File Type
                </h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      value="csv"
                      checked={fileType === 'csv'}
                      onChange={() => setFileType('csv')}
                      style={{ marginRight: '8px' }}
                    />
                    CSV
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      value="txt"
                      checked={fileType === 'txt'}
                      onChange={() => setFileType('txt')}
                      style={{ marginRight: '8px' }}
                    />
                    TXT
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <label style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '17px',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  color: '#2d3748',
                  textAlign: 'center',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = '#245de1';
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.backgroundColor = 'white';
                }}>
                  Choose File
                  <input
                    type="file"
                    accept={fileType === 'csv' ? '.csv' : '.txt'}
                    onChange={handleFileUpload}
                    style={{
                      display: 'none'
                    }}
                  />
                </label>
                <button
                  onClick={handleResetAll}
                  style={{
                    background: 'white',
                    color: '#245de1',
                    border: '2px solid #245de1',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}
                >
                  Reset
                </button>
              </div>

              {numbers.length > 0 && numbers[0] !== '' && (
                <div style={{
                  background: '#e6f2ff',
                  padding: '12px',
                  borderRadius: '6px',
                  border: '2px solid #245de1',
                  fontSize: '17px',
                  color: '#2d3748',
                  marginBottom: '15px'
                }}>
                  <strong>{numbers.length}</strong> numbers loaded from file
                </div>
              )}
            </div>
          )}

          {error && (
            <div style={{
              background: '#ffebee',
              color: '#d32f2f',
              border: '2px solid #ef9a9a',
              borderRadius: '6px',
              padding: '12px',
              marginBottom: '15px',
              fontSize: '17px',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <button
            onClick={handleCalculate}
            style={{
              width: '100%',
              background: '#245de1',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '21px',
              fontWeight: '600',
              marginBottom: '20px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#1d4ab8'}
            onMouseOut={(e) => e.target.style.background = '#245de1'}
          >
            Calculate Statistics
          </button>

          <div style={{
            background: '#f8f9fa',
            padding: '15px',
            borderRadius: '8px',
            border: '2px solid #e2e8f0'
          }}>
            <h3 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#2d3748'
            }}>
              Calculation Method
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
                <input
                  type="radio"
                  value="auto"
                  checked={preferredCalculation === 'auto'}
                  onChange={() => setPreferredCalculation('auto')}
                  style={{ marginRight: '8px' }}
                />
                Auto (n-1 for n &lt; 30, n for n ≥ 30)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
                <input
                  type="radio"
                  value="n-1"
                  checked={preferredCalculation === 'n-1'}
                  onChange={() => setPreferredCalculation('n-1')}
                  style={{ marginRight: '8px' }}
                />
                Always use n-1 (Sample)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', fontSize: '17px', color: '#2d3748', cursor: 'pointer' }}>
                <input
                  type="radio"
                  value="n"
                  checked={preferredCalculation === 'n'}
                  onChange={() => setPreferredCalculation('n')}
                  style={{ marginRight: '8px' }}
                />
                Always use n (Population)
              </label>
            </div>
          </div>
        </div>

        {/* RESULTS SECTION */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '25px',
          border: '2px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          maxHeight: '800px',
          overflowY: 'auto'
        }}>
          <h2 style={{
            margin: '0 0 20px 0',
            fontSize: '26px',
            fontWeight: '600',
            color: '#2d3748'
          }}>
            Results
          </h2>

          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { label: 'Sample Size', key: 'sampleSize', value: stats?.sampleSize },
              { label: 'Sum', key: 'sum', value: stats?.sum },
              { label: 'Mean', key: 'mean', value: stats?.mean },
              { label: 'Median', key: 'median', value: stats?.median },
              { label: 'Mode', key: 'mode', value: stats?.mode },
              { label: 'Min', key: 'min', value: stats?.min },
              { label: 'Max', key: 'max', value: stats?.max },
              { label: 'Range', key: 'range', value: stats?.range },
              { 
                label: 'Variance', 
                key: 'variance', 
                value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN) 
              },
              { 
                label: 'Standard Deviation', 
                key: 'standardDeviation', 
                value: stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN) 
              },
              { label: 'Q1 (First Quartile)', key: 'q1', value: stats?.q1 },
              { label: 'Q3 (Third Quartile)', key: 'q3', value: stats?.q3 },
              { label: 'IQR', key: 'iqr', value: stats?.iqr },
              { label: 'Skewness', key: 'skewness', value: stats?.skewness },
              { label: 'Kurtosis', key: 'kurtosis', value: stats?.kurtosis },
              { label: 'Coefficient of Variation', key: 'coefficientOfVariation', value: stats ? stats.coefficientOfVariation + '%' : undefined },
              { label: 'Geometric Mean', key: 'geometricMean', value: stats?.geometricMean },
              { label: 'Harmonic Mean', key: 'harmonicMean', value: stats?.harmonicMean },
              { label: 'Root Mean Square', key: 'rootMeanSquare', value: stats?.rootMeanSquare }
            ].map((item) => (
              <div
                key={item.key}
                style={{
                  background: '#f8f9fa',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  border: '1.5px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#718096', fontWeight: '500' }}>
                    {item.label}
                  </span>
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      const tooltip = e.currentTarget.querySelector('[data-tooltip]');
                      if (tooltip) {
                        tooltip.style.visibility = 'visible';
                        tooltip.style.opacity = '1';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const tooltip = e.currentTarget.querySelector('[data-tooltip]');
                      if (tooltip) {
                        tooltip.style.visibility = 'hidden';
                        tooltip.style.opacity = '0';
                      }
                    }}
                  >
                    <span
                      onClick={() => handleExplanationClick(item.key)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: '#245de1',
                        color: 'white',
                        fontSize: '21px',
                        cursor: 'pointer',
                        fontWeight: '600'
                      }}
                    >
                      i
                    </span>
                    <span
                      data-tooltip
                      style={{
                        visibility: 'hidden',
                        position: 'absolute',
                        bottom: '125%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#555',
                        color: '#fff',
                        textAlign: 'center',
                        borderRadius: '6px',
                        padding: '5px 10px',
                        whiteSpace: 'nowrap',
                        fontSize: '18px',
                        fontWeight: '400',
                        zIndex: 1,
                        opacity: 0,
                        transition: 'opacity 0.3s',
                        pointerEvents: 'none'
                      }}
                    >
                      Click to see explanation
                    </span>
                  </div>
                </div>
                <span style={{
                  fontSize: '21px',
                  fontWeight: '700',
                  color: item.value !== undefined ? '#245de1' : '#cbd5e0'
                }}>
                  {item.value !== undefined ? item.value : '—'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* EXPLANATION SECTION */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '25px',
          border: '2px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h2 style={{
            margin: '0 0 20px 0',
            fontSize: '26px',
            fontWeight: '600',
            color: '#2d3748'
          }}>
            Explanation
          </h2>
          
          {currentExplanation ? (
            <div style={{
              background: '#e6f2ff',
              padding: '18px',
              borderRadius: '8px',
              border: '2px solid #245de1',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#2d3748'
            }}>
              {processContent(currentExplanation)}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: '#718096',
              fontSize: '18px',
              lineHeight: '1.6'
            }}>
              Click on any <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#245de1',
                color: 'white',
                fontSize: '21px',
                fontWeight: '600',
                margin: '0 4px'
              }}>i</span> icon in the results to see an explanation
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCalculator;