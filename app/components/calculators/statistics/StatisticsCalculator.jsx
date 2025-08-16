// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import styles from './StatisticsCalculator.module.css';

// // // // // // // // const StatisticsCalculator = () => {
// // // // // // // //   const [numbers, setNumbers] = useState(['']);
// // // // // // // //   const [stats, setStats] = useState(null);
// // // // // // // //   const [fileType, setFileType] = useState('csv');

// // // // // // // //   const calculateStats = (data) => {
// // // // // // // //     const validData = data.filter(n => !isNaN(n) && n !== '');
// // // // // // // //     if (validData.length === 0) return null;

// // // // // // // //     const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // // // // //     const n = sortedData.length;
    
// // // // // // // //     const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // // // // //     const mean = sum / n;
    
// // // // // // // //     const median = n % 2 === 0
// // // // // // // //       ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2
// // // // // // // //       : sortedData[Math.floor(n / 2)];
    
// // // // // // // //     const min = sortedData[0];
// // // // // // // //     const max = sortedData[n - 1];
// // // // // // // //     const range = max - min;
    
// // // // // // // //     const mode = sortedData.reduce((acc, val) => {
// // // // // // // //       acc[val] = (acc[val] || 0) + 1;
// // // // // // // //       return acc;
// // // // // // // //     }, {});
// // // // // // // //     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
// // // // // // // //     const variance = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n <= 30 ? n - 1 : n);
// // // // // // // //     const standardDeviation = Math.sqrt(variance);
    
// // // // // // // //     return {
// // // // // // // //       mean: mean.toFixed(2),
// // // // // // // //       median: median.toFixed(2),
// // // // // // // //       min,
// // // // // // // //       max,
// // // // // // // //       range,
// // // // // // // //       count: n,
// // // // // // // //       sum: sum.toFixed(2),
// // // // // // // //       mode: modeValue,
// // // // // // // //       standardDeviation: standardDeviation.toFixed(2),
// // // // // // // //       variance: variance.toFixed(2),
// // // // // // // //       sampleSize: n <= 30 ? 'small' : 'large'
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     const newStats = calculateStats(numbers);
// // // // // // // //     setStats(newStats);
// // // // // // // //   }, [numbers]);

// // // // // // // //   const handleAddNumber = () => {
// // // // // // // //     setNumbers([...numbers, '']);
// // // // // // // //   };

// // // // // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // // // // //   };

// // // // // // // //   const handleInputChange = (e, index) => {
// // // // // // // //     const newNumbers = [...numbers];
// // // // // // // //     newNumbers[index] = e.target.value;
// // // // // // // //     setNumbers(newNumbers);
// // // // // // // //   };

// // // // // // // //   const handleResetAll = () => {
// // // // // // // //     setNumbers(['']);
// // // // // // // //     setStats(null);
// // // // // // // //   };

// // // // // // // //   const handleFileUpload = (event) => {
// // // // // // // //     const file = event.target.files[0];
// // // // // // // //     if (file) {
// // // // // // // //       const reader = new FileReader();
// // // // // // // //       reader.onload = (e) => {
// // // // // // // //         let content = e.target.result;
// // // // // // // //         let parsedNumbers;

// // // // // // // //         if (fileType === 'csv') {
// // // // // // // //           parsedNumbers = content.split('\n')
// // // // // // // //             .map(line => line.split(','))
// // // // // // // //             .flat()
// // // // // // // //             .map(num => num.trim())
// // // // // // // //             .filter(num => num !== '' && !isNaN(num));
// // // // // // // //         } else {
// // // // // // // //           parsedNumbers = content.split('\n')
// // // // // // // //             .map(num => num.trim())
// // // // // // // //             .filter(num => num !== '' && !isNaN(num));
// // // // // // // //         }

// // // // // // // //         setNumbers(parsedNumbers);
// // // // // // // //       };

// // // // // // // //       reader.readAsText(file);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.container}>
// // // // // // // //       <h1 className={styles.title}>Statistics Calculator</h1>
      
// // // // // // // //       <div className={styles.inputSection}>
// // // // // // // //         <h2>Manual Input</h2>
// // // // // // // //         <div className={styles.inputGrid}>
// // // // // // // //           {numbers.map((number, index) => (
// // // // // // // //             <div key={index} className={styles.inputGroup}>
// // // // // // // //               <input
// // // // // // // //                 type="number"
// // // // // // // //                 value={number}
// // // // // // // //                 onChange={(e) => handleInputChange(e, index)}
// // // // // // // //                 className={styles.input}
// // // // // // // //                 placeholder="Enter number..."
// // // // // // // //               />
// // // // // // // //               <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //         <div className={styles.buttonGroup}>
// // // // // // // //           <button onClick={handleAddNumber} className={styles.button}>Add Number</button>
// // // // // // // //           <button onClick={handleResetAll} className={styles.button}>Reset All</button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <div className={styles.uploadSection}>
// // // // // // // //         <h2>File Upload</h2>
// // // // // // // //         <div className={styles.radioGroup}>
// // // // // // // //           <label>
// // // // // // // //             <input
// // // // // // // //               type="radio"
// // // // // // // //               value="csv"
// // // // // // // //               checked={fileType === 'csv'}
// // // // // // // //               onChange={() => setFileType('csv')}
// // // // // // // //             />
// // // // // // // //             CSV
// // // // // // // //           </label>
// // // // // // // //           <label>
// // // // // // // //             <input
// // // // // // // //               type="radio"
// // // // // // // //               value="txt"
// // // // // // // //               checked={fileType === 'txt'}
// // // // // // // //               onChange={() => setFileType('txt')}
// // // // // // // //             />
// // // // // // // //             TXT
// // // // // // // //           </label>
// // // // // // // //         </div>
// // // // // // // //         <input type="file" accept={fileType === 'csv' ? '.csv' : '.txt'} onChange={handleFileUpload} className={styles.fileInput} />
// // // // // // // //       </div>

// // // // // // // //       {stats && (
// // // // // // // //         <div className={styles.results}>
// // // // // // // //           <h2>Results</h2>
// // // // // // // //           <p>Sample Size: {stats.sampleSize === 'small' ? '≤ 30' : '> 30'}</p>
// // // // // // // //           <p>Count: {stats.count}</p>
// // // // // // // //           <p>Sum: {stats.sum}</p>
// // // // // // // //           <p>Mean: {stats.mean}</p>
// // // // // // // //           <p>Median: {stats.median}</p>
// // // // // // // //           <p>Mode: {stats.mode}</p>
// // // // // // // //           <p>Min: {stats.min}</p>
// // // // // // // //           <p>Max: {stats.max}</p>
// // // // // // // //           <p>Range: {stats.range}</p>
// // // // // // // //           <p>Standard Deviation: {stats.standardDeviation}</p>
// // // // // // // //           <p>Variance: {stats.variance}</p>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default StatisticsCalculator;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import styles from './StatisticsCalculator.module.css';

// // // // // // // const StatisticsCalculator = () => {
// // // // // // //   const [numbers, setNumbers] = useState(['']);
// // // // // // //   const [stats, setStats] = useState(null);
// // // // // // //   const [fileType, setFileType] = useState('csv');
// // // // // // //   const [inputMethod, setInputMethod] = useState('manual');

// // // // // // //   const calculateStats = (data) => {
// // // // // // //     const validData = data.filter(n => !isNaN(n) && n !== '');
// // // // // // //     if (validData.length === 0) return null;

// // // // // // //     const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // // // //     const n = sortedData.length;
    
// // // // // // //     const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // // // //     const mean = sum / n;
    
// // // // // // //     const median = n % 2 === 0
// // // // // // //       ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2
// // // // // // //       : sortedData[Math.floor(n / 2)];
    
// // // // // // //     const min = sortedData[0];
// // // // // // //     const max = sortedData[n - 1];
// // // // // // //     const range = max - min;
    
// // // // // // //     const mode = sortedData.reduce((acc, val) => {
// // // // // // //       acc[val] = (acc[val] || 0) + 1;
// // // // // // //       return acc;
// // // // // // //     }, {});
// // // // // // //     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
// // // // // // //     const variance = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n <= 30 ? n - 1 : n);
// // // // // // //     const standardDeviation = Math.sqrt(variance);
    
// // // // // // //     return {
// // // // // // //       mean: mean.toFixed(2),
// // // // // // //       median: median.toFixed(2),
// // // // // // //       min,
// // // // // // //       max,
// // // // // // //       range,
// // // // // // //       count: n,
// // // // // // //       sum: sum.toFixed(2),
// // // // // // //       mode: modeValue,
// // // // // // //       standardDeviation: standardDeviation.toFixed(2),
// // // // // // //       variance: variance.toFixed(2),
// // // // // // //       sampleSize: n <= 30 ? 'small' : 'large'
// // // // // // //     };
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     const newStats = calculateStats(numbers);
// // // // // // //     setStats(newStats);
// // // // // // //   }, [numbers]);

// // // // // // //   const handleAddNumber = () => {
// // // // // // //     setNumbers([...numbers, '']);
// // // // // // //   };

// // // // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // // // //   };

// // // // // // //   const handleInputChange = (e, index) => {
// // // // // // //     const newNumbers = [...numbers];
// // // // // // //     newNumbers[index] = e.target.value;
// // // // // // //     setNumbers(newNumbers);
// // // // // // //   };

// // // // // // //   const handleResetAll = () => {
// // // // // // //     setNumbers(['']);
// // // // // // //     setStats(null);
// // // // // // //   };

// // // // // // //   const handleFileUpload = (event) => {
// // // // // // //     const file = event.target.files[0];
// // // // // // //     if (file) {
// // // // // // //       const reader = new FileReader();
// // // // // // //       reader.onload = (e) => {
// // // // // // //         let content = e.target.result;
// // // // // // //         let parsedNumbers;

// // // // // // //         if (fileType === 'csv') {
// // // // // // //           parsedNumbers = content.split('\n')
// // // // // // //             .map(line => line.split(','))
// // // // // // //             .flat()
// // // // // // //             .map(num => num.trim())
// // // // // // //             .filter(num => num !== '' && !isNaN(num));
// // // // // // //         } else {
// // // // // // //           parsedNumbers = content.split('\n')
// // // // // // //             .map(num => num.trim())
// // // // // // //             .filter(num => num !== '' && !isNaN(num));
// // // // // // //         }

// // // // // // //         setNumbers(parsedNumbers);
// // // // // // //       };

// // // // // // //       reader.readAsText(file);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       <h1 className={styles.title}>Statistics Calculator</h1>
      
// // // // // // //       <div className={styles.inputToggle}>
// // // // // // //         <button 
// // // // // // //           className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// // // // // // //           onClick={() => setInputMethod('manual')}
// // // // // // //         >
// // // // // // //           Manual Input
// // // // // // //         </button>
// // // // // // //         <button 
// // // // // // //           className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// // // // // // //           onClick={() => setInputMethod('file')}
// // // // // // //         >
// // // // // // //           File Upload
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       <div className={styles.contentWrapper}>
// // // // // // //         <div className={styles.inputSection}>
// // // // // // //           {inputMethod === 'manual' ? (
// // // // // // //             <>
// // // // // // //               <div className={styles.inputGrid}>
// // // // // // //                 {numbers.map((number, index) => (
// // // // // // //                   <div key={index} className={styles.inputGroup}>
// // // // // // //                     <input
// // // // // // //                       type="number"
// // // // // // //                       value={number}
// // // // // // //                       onChange={(e) => handleInputChange(e, index)}
// // // // // // //                       className={styles.input}
// // // // // // //                       placeholder="Enter number..."
// // // // // // //                     />
// // // // // // //                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //               <div className={styles.buttonGroup}>
// // // // // // //                 <button onClick={handleAddNumber} className={styles.button}>Add Number</button>
// // // // // // //                 <button onClick={handleResetAll} className={styles.button}>Reset All</button>
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           ) : (
// // // // // // //             <>
// // // // // // //               <div className={styles.radioGroup}>
// // // // // // //                 <label>
// // // // // // //                   <input
// // // // // // //                     type="radio"
// // // // // // //                     value="csv"
// // // // // // //                     checked={fileType === 'csv'}
// // // // // // //                     onChange={() => setFileType('csv')}
// // // // // // //                   />
// // // // // // //                   CSV
// // // // // // //                 </label>
// // // // // // //                 <label>
// // // // // // //                   <input
// // // // // // //                     type="radio"
// // // // // // //                     value="txt"
// // // // // // //                     checked={fileType === 'txt'}
// // // // // // //                     onChange={() => setFileType('txt')}
// // // // // // //                   />
// // // // // // //                   TXT
// // // // // // //                 </label>
// // // // // // //               </div>
// // // // // // //               <input 
// // // // // // //                 type="file" 
// // // // // // //                 accept={fileType === 'csv' ? '.csv' : '.txt'} 
// // // // // // //                 onChange={handleFileUpload} 
// // // // // // //                 className={styles.fileInput} 
// // // // // // //               />
// // // // // // //             </>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {stats && (
// // // // // // //           <div className={styles.results}>
// // // // // // //             <h2>Results</h2>
// // // // // // //             <p>Sample Size: {stats.sampleSize === 'small' ? '≤ 30' : '> 30'}</p>
// // // // // // //             <p>Count: {stats.count}</p>
// // // // // // //             <p>Sum: {stats.sum}</p>
// // // // // // //             <p>Mean: {stats.mean}</p>
// // // // // // //             <p>Median: {stats.median}</p>
// // // // // // //             <p>Mode: {stats.mode}</p>
// // // // // // //             <p>Min: {stats.min}</p>
// // // // // // //             <p>Max: {stats.max}</p>
// // // // // // //             <p>Range: {stats.range}</p>
// // // // // // //             <p>Standard Deviation: {stats.standardDeviation}</p>
// // // // // // //             <p>Variance: {stats.variance}</p>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default StatisticsCalculator;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import styles from './StatisticsCalculator.module.css';

// // // // // // const StatisticsCalculator = () => {
// // // // // //   const [numbers, setNumbers] = useState(['']);
// // // // // //   const [stats, setStats] = useState(null);
// // // // // //   const [fileType, setFileType] = useState('csv');
// // // // // //   const [inputMethod, setInputMethod] = useState('manual');

// // // // // //   const calculateStats = (data) => {
// // // // // //     const validData = data.filter(n => !isNaN(n) && n !== '');
// // // // // //     if (validData.length === 0) return null;

// // // // // //     const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // // //     const n = sortedData.length;
    
// // // // // //     const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // // //     const mean = sum / n;
// // // // // //     const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // // // //     const min = sortedData[0];
// // // // // //     const max = sortedData[n - 1];
// // // // // //     const range = max - min;
    
// // // // // //     const mode = sortedData.reduce((acc, val) => {
// // // // // //       acc[val] = (acc[val] || 0) + 1;
// // // // // //       return acc;
// // // // // //     }, {});
// // // // // //     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
// // // // // //     const variance = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n <= 30 ? n - 1 : n);
// // // // // //     const standardDeviation = Math.sqrt(variance);
    
// // // // // //     return {
// // // // // //       mean: mean.toFixed(2),
// // // // // //       median: median.toFixed(2),
// // // // // //       min,
// // // // // //       max,
// // // // // //       range,
// // // // // //       count: n,
// // // // // //       sum: sum.toFixed(2),
// // // // // //       mode: modeValue,
// // // // // //       standardDeviation: standardDeviation.toFixed(2),
// // // // // //       variance: variance.toFixed(2),
// // // // // //       sampleSize: n <= 30 ? 'small' : 'large'
// // // // // //     };
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     const newStats = calculateStats(numbers);
// // // // // //     setStats(newStats);
// // // // // //   }, [numbers]);

// // // // // //   const handleAddNumber = () => {
// // // // // //     setNumbers([...numbers, '']);
// // // // // //   };

// // // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // // //   };

// // // // // //   const handleInputChange = (e, index) => {
// // // // // //     const newNumbers = [...numbers];
// // // // // //     newNumbers[index] = e.target.value;
// // // // // //     setNumbers(newNumbers);
// // // // // //   };

// // // // // //   const handleResetAll = () => {
// // // // // //     setNumbers(['']);
// // // // // //     setStats(null);
// // // // // //   };

// // // // // //   const handleFileUpload = (event) => {
// // // // // //     const file = event.target.files[0];
// // // // // //     if (file) {
// // // // // //       const reader = new FileReader();
// // // // // //       reader.onload = (e) => {
// // // // // //         let content = e.target.result;
// // // // // //         let parsedNumbers = fileType === 'csv' 
// // // // // //           ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
// // // // // //           : content.split('\n').map(num => num.trim());
// // // // // //         parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
// // // // // //         setNumbers(parsedNumbers);
// // // // // //       };
// // // // // //       reader.readAsText(file);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <h1 className={styles.title}>Statistics Calculator</h1>
      
// // // // // //       <div className={styles.inputToggle}>
// // // // // //         <button 
// // // // // //           className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// // // // // //           onClick={() => setInputMethod('manual')}
// // // // // //         >
// // // // // //           Manual Input
// // // // // //         </button>
// // // // // //         <button 
// // // // // //           className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// // // // // //           onClick={() => setInputMethod('file')}
// // // // // //         >
// // // // // //           File Upload
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div className={styles.contentWrapper}>
// // // // // //         <div className={styles.inputSection}>
// // // // // //           {inputMethod === 'manual' ? (
// // // // // //             <>
// // // // // //               <div className={styles.inputGrid}>
// // // // // //                 {numbers.map((number, index) => (
// // // // // //                   <div key={index} className={styles.inputGroup}>
// // // // // //                     <input
// // // // // //                       type="number"
// // // // // //                       value={number}
// // // // // //                       onChange={(e) => handleInputChange(e, index)}
// // // // // //                       className={styles.input}
// // // // // //                       placeholder="Number"
// // // // // //                     />
// // // // // //                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //               <div className={styles.buttonGroup}>
// // // // // //                 <button onClick={handleAddNumber} className={styles.button}>Add</button>
// // // // // //                 <button onClick={handleResetAll} className={styles.button}>Reset</button>
// // // // // //               </div>
// // // // // //             </>
// // // // // //           ) : (
// // // // // //             <div className={styles.fileUploadSection}>
// // // // // //               <div className={styles.radioGroup}>
// // // // // //                 <label>
// // // // // //                   <input
// // // // // //                     type="radio"
// // // // // //                     value="csv"
// // // // // //                     checked={fileType === 'csv'}
// // // // // //                     onChange={() => setFileType('csv')}
// // // // // //                   />
// // // // // //                   CSV
// // // // // //                 </label>
// // // // // //                 <label>
// // // // // //                   <input
// // // // // //                     type="radio"
// // // // // //                     value="txt"
// // // // // //                     checked={fileType === 'txt'}
// // // // // //                     onChange={() => setFileType('txt')}
// // // // // //                   />
// // // // // //                   TXT
// // // // // //                 </label>
// // // // // //               </div>
// // // // // //               <input 
// // // // // //                 type="file" 
// // // // // //                 accept={fileType === 'csv' ? '.csv' : '.txt'} 
// // // // // //                 onChange={handleFileUpload} 
// // // // // //                 className={styles.fileInput} 
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {stats && (
// // // // // //           <div className={styles.results}>
// // // // // //             <h2>Results</h2>
// // // // // //             <p>Sample Size: {stats.sampleSize === 'small' ? '≤ 30' : '> 30'}</p>
// // // // // //             <p>Count: {stats.count}</p>
// // // // // //             <p>Sum: {stats.sum}</p>
// // // // // //             <p>Mean: {stats.mean}</p>
// // // // // //             <p>Median: {stats.median}</p>
// // // // // //             <p>Mode: {stats.mode}</p>
// // // // // //             <p>Min: {stats.min}</p>
// // // // // //             <p>Max: {stats.max}</p>
// // // // // //             <p>Range: {stats.range}</p>
// // // // // //             <p>Standard Deviation: {stats.standardDeviation}</p>
// // // // // //             <p>Variance: {stats.variance}</p>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default StatisticsCalculator;
// // // // // import React, { useState } from 'react';
// // // // // import styles from './StatisticsCalculator.module.css';

// // // // // const StatisticsCalculator = () => {
// // // // //   const [numbers, setNumbers] = useState(['']);
// // // // //   const [stats, setStats] = useState(null);
// // // // //   const [fileType, setFileType] = useState('csv');
// // // // //   const [inputMethod, setInputMethod] = useState('manual');

// // // // //   const calculateStats = (data) => {
// // // // //     const validData = data.filter(n => !isNaN(n) && n !== '');
// // // // //     if (validData.length === 0) return null;

// // // // //     const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // // //     const n = sortedData.length;
    
// // // // //     const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // // //     const mean = sum / n;
// // // // //     const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // // //     const min = sortedData[0];
// // // // //     const max = sortedData[n - 1];
// // // // //     const range = max - min;
    
// // // // //     const mode = sortedData.reduce((acc, val) => {
// // // // //       acc[val] = (acc[val] || 0) + 1;
// // // // //       return acc;
// // // // //     }, {});
// // // // //     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
// // // // //     const variance = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n <= 30 ? n - 1 : n);
// // // // //     const standardDeviation = Math.sqrt(variance);
    
// // // // //     return {
// // // // //       mean: mean.toFixed(2),
// // // // //       median: median.toFixed(2),
// // // // //       min,
// // // // //       max,
// // // // //       range,
// // // // //       count: n,
// // // // //       sum: sum.toFixed(2),
// // // // //       mode: modeValue,
// // // // //       standardDeviation: standardDeviation.toFixed(2),
// // // // //       variance: variance.toFixed(2),
// // // // //       sampleSize: n <= 30 ? 'small' : 'large'
// // // // //     };
// // // // //   };

// // // // //   const handleAddNumber = () => {
// // // // //     setNumbers([...numbers, '']);
// // // // //   };

// // // // //   const handleRemoveNumber = (indexToRemove) => {
// // // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // // //   };

// // // // //   const handleInputChange = (e, index) => {
// // // // //     const newNumbers = [...numbers];
// // // // //     newNumbers[index] = e.target.value;
// // // // //     setNumbers(newNumbers);
// // // // //   };

// // // // //   const handleResetAll = () => {
// // // // //     setNumbers(['']);
// // // // //     setStats(null);
// // // // //   };

// // // // //   const handleFileUpload = (event) => {
// // // // //     const file = event.target.files[0];
// // // // //     if (file) {
// // // // //       const reader = new FileReader();
// // // // //       reader.onload = (e) => {
// // // // //         let content = e.target.result;
// // // // //         let parsedNumbers = fileType === 'csv' 
// // // // //           ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
// // // // //           : content.split('\n').map(num => num.trim());
// // // // //         parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
// // // // //         setNumbers(parsedNumbers);
// // // // //       };
// // // // //       reader.readAsText(file);
// // // // //     }
// // // // //   };

// // // // //   const handleCalculate = () => {
// // // // //     setStats(calculateStats(numbers));
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <h1 className={styles.title}>Statistics Calculator</h1>
      
// // // // //       <div className={styles.gridContainer}>
// // // // //         <div className={styles.inputSection}>
// // // // //           <div className={styles.inputToggle}>
// // // // //             <button 
// // // // //               className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// // // // //               onClick={() => setInputMethod('manual')}
// // // // //             >
// // // // //               Manual Input
// // // // //             </button>
// // // // //             <button 
// // // // //               className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// // // // //               onClick={() => setInputMethod('file')}
// // // // //             >
// // // // //               File Upload
// // // // //             </button>
// // // // //           </div>

// // // // //           {inputMethod === 'manual' ? (
// // // // //             <>
// // // // //               <div className={styles.inputGrid}>
// // // // //                 {numbers.map((number, index) => (
// // // // //                   <div key={index} className={styles.inputGroup}>
// // // // //                     <input
// // // // //                       type="number"
// // // // //                       value={number}
// // // // //                       onChange={(e) => handleInputChange(e, index)}
// // // // //                       className={styles.input}
// // // // //                       placeholder="Number"
// // // // //                     />
// // // // //                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <div className={styles.buttonGroup}>
// // // // //                 <button onClick={handleAddNumber} className={styles.button}>Add</button>
// // // // //                 <button onClick={handleResetAll} className={styles.button}>Reset</button>
// // // // //               </div>
// // // // //             </>
// // // // //           ) : (
// // // // //             <div className={styles.fileUploadSection}>
// // // // //               <div className={styles.radioGroup}>
// // // // //                 <label>
// // // // //                   <input
// // // // //                     type="radio"
// // // // //                     value="csv"
// // // // //                     checked={fileType === 'csv'}
// // // // //                     onChange={() => setFileType('csv')}
// // // // //                   />
// // // // //                   CSV
// // // // //                 </label>
// // // // //                 <label>
// // // // //                   <input
// // // // //                     type="radio"
// // // // //                     value="txt"
// // // // //                     checked={fileType === 'txt'}
// // // // //                     onChange={() => setFileType('txt')}
// // // // //                   />
// // // // //                   TXT
// // // // //                 </label>
// // // // //               </div>
// // // // //               <input 
// // // // //                 type="file" 
// // // // //                 accept={fileType === 'csv' ? '.csv' : '.txt'} 
// // // // //                 onChange={handleFileUpload} 
// // // // //                 className={styles.fileInput} 
// // // // //               />
// // // // //             </div>
// // // // //           )}
// // // // //           <button onClick={handleCalculate} className={styles.calculateButton}>Calculate</button>
// // // // //         </div>

// // // // //         <div className={styles.results}>
// // // // //           <h2>Results</h2>
// // // // //           <p>Sample Size: <span>{stats?.sampleSize === 'small' ? '≤ 30' : '> 30'}</span></p>
// // // // //           <p>Count: <span>{stats?.count}</span></p>
// // // // //           <p>Sum: <span>{stats?.sum}</span></p>
// // // // //           <p>Mean: <span>{stats?.mean}</span></p>
// // // // //           <p>Median: <span>{stats?.median}</span></p>
// // // // //           <p>Mode: <span>{stats?.mode}</span></p>
// // // // //           <p>Min: <span>{stats?.min}</span></p>
// // // // //           <p>Max: <span>{stats?.max}</span></p>
// // // // //           <p>Range: <span>{stats?.range}</span></p>
// // // // //           <p>Standard Deviation: <span>{stats?.standardDeviation}</span></p>
// // // // //           <p>Variance: <span>{stats?.variance}</span></p>
// // // // //         </div>

// // // // //         <div className={styles.explanations}>
// // // // //           <h2>Explanations</h2>
// // // // //           <p>This section will contain explanations of the statistical concepts and calculations.</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default StatisticsCalculator;
// // // // import React, { useState } from 'react';
// // // // import styles from './StatisticsCalculator.module.css';

// // // // const StatisticsCalculator = () => {
// // // //   const [numbers, setNumbers] = useState(['']);
// // // //   const [stats, setStats] = useState(null);
// // // //   const [fileType, setFileType] = useState('csv');
// // // //   const [inputMethod, setInputMethod] = useState('manual');
// // // //   const [advancedMode, setAdvancedMode] = useState(false);
// // // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');

// // // //   const calculateStats = (data) => {
// // // //     const validData = data.filter(n => !isNaN(n) && n !== '');
// // // //     if (validData.length === 0) return null;

// // // //     const sortedData = validData.map(Number).sort((a, b) => a - b);
// // // //     const n = sortedData.length;
    
// // // //     const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // // //     const mean = sum / n;
// // // //     const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // // //     const min = sortedData[0];
// // // //     const max = sortedData[n - 1];
// // // //     const range = max - min;
    
// // // //     const mode = sortedData.reduce((acc, val) => {
// // // //       acc[val] = (acc[val] || 0) + 1;
// // // //       return acc;
// // // //     }, {});
// // // //     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
// // // //     const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // // //     const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
    
// // // //     const standardDeviationN1 = Math.sqrt(varianceN1);
// // // //     const standardDeviationN = Math.sqrt(varianceN);
    
// // // //     return {
// // // //       sampleSize: n,
// // // //       sum: sum.toFixed(2),
// // // //       mean: mean.toFixed(2),
// // // //       median: median.toFixed(2),
// // // //       mode: modeValue,
// // // //       min,
// // // //       max,
// // // //       range,
// // // //       varianceN1: varianceN1.toFixed(2),
// // // //       varianceN: varianceN.toFixed(2),
// // // //       standardDeviationN1: standardDeviationN1.toFixed(2),
// // // //       standardDeviationN: standardDeviationN.toFixed(2)
// // // //     };
// // // //   };

// // // //   const handleAddNumber = () => {
// // // //     setNumbers([...numbers, '']);
// // // //   };

// // // //   const handleRemoveNumber = (indexToRemove) => {
// // // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // // //   };

// // // //   const handleInputChange = (e, index) => {
// // // //     const newNumbers = [...numbers];
// // // //     newNumbers[index] = e.target.value;
// // // //     setNumbers(newNumbers);
// // // //   };

// // // //   const handleResetAll = () => {
// // // //     setNumbers(['']);
// // // //     setStats(null);
// // // //   };

// // // //   const handleFileUpload = (event) => {
// // // //     const file = event.target.files[0];
// // // //     if (file) {
// // // //       const reader = new FileReader();
// // // //       reader.onload = (e) => {
// // // //         let content = e.target.result;
// // // //         let parsedNumbers = fileType === 'csv' 
// // // //           ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
// // // //           : content.split('\n').map(num => num.trim());
// // // //         parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
// // // //         setNumbers(parsedNumbers);
// // // //       };
// // // //       reader.readAsText(file);
// // // //     }
// // // //   };

// // // //   const handleCalculate = () => {
// // // //     setStats(calculateStats(numbers));
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <h1 className={styles.title}>Statistics Calculator</h1>
      
// // // //       <div className={styles.gridContainer}>
// // // //         <div className={styles.inputSection}>
// // // //           <div className={styles.inputToggle}>
// // // //             <button 
// // // //               className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// // // //               onClick={() => setInputMethod('manual')}
// // // //             >
// // // //               Manual Input
// // // //             </button>
// // // //             <button 
// // // //               className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// // // //               onClick={() => setInputMethod('file')}
// // // //             >
// // // //               File Upload
// // // //             </button>
// // // //           </div>

// // // //           {inputMethod === 'manual' ? (
// // // //             <>
// // // //               <div className={styles.inputGrid}>
// // // //                 {numbers.map((number, index) => (
// // // //                   <div key={index} className={styles.inputGroup}>
// // // //                     <input
// // // //                       type="number"
// // // //                       value={number}
// // // //                       onChange={(e) => handleInputChange(e, index)}
// // // //                       className={styles.input}
// // // //                       placeholder="Number"
// // // //                     />
// // // //                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               <div className={styles.buttonGroup}>
// // // //                 <button onClick={handleAddNumber} className={styles.button}>Add</button>
// // // //                 <button onClick={handleResetAll} className={styles.button}>Reset</button>
// // // //               </div>
// // // //             </>
// // // //           ) : (
// // // //             <div className={styles.fileUploadSection}>
// // // //               <div className={styles.radioGroup}>
// // // //                 <label>
// // // //                   <input
// // // //                     type="radio"
// // // //                     value="csv"
// // // //                     checked={fileType === 'csv'}
// // // //                     onChange={() => setFileType('csv')}
// // // //                   />
// // // //                   CSV
// // // //                 </label>
// // // //                 <label>
// // // //                   <input
// // // //                     type="radio"
// // // //                     value="txt"
// // // //                     checked={fileType === 'txt'}
// // // //                     onChange={() => setFileType('txt')}
// // // //                   />
// // // //                   TXT
// // // //                 </label>
// // // //               </div>
// // // //               <input 
// // // //                 type="file" 
// // // //                 accept={fileType === 'csv' ? '.csv' : '.txt'} 
// // // //                 onChange={handleFileUpload} 
// // // //                 className={styles.fileInput} 
// // // //               />
// // // //             </div>
// // // //           )}
// // // //           <button onClick={handleCalculate} className={styles.calculateButton}>Calculate</button>
          
// // // //           <div className={styles.advancedOptions}>
// // // //             <label>
// // // //               <input
// // // //                 type="checkbox"
// // // //                 checked={advancedMode}
// // // //                 onChange={() => setAdvancedMode(!advancedMode)}
// // // //               />
// // // //               Advanced Mode
// // // //             </label>
// // // //             {advancedMode && (
// // // //               <div className={styles.radioGroup}>
// // // //                 <label>
// // // //                   <input
// // // //                     type="radio"
// // // //                     value="auto"
// // // //                     checked={preferredCalculation === 'auto'}
// // // //                     onChange={() => setPreferredCalculation('auto')}
// // // //                   />
// // // //                   Auto (n-1 for n &lt; 30, n for n &gt;= 30)
// // // //                 </label>
// // // //                 <label>
// // // //                   <input
// // // //                     type="radio"
// // // //                     value="n-1"
// // // //                     checked={preferredCalculation === 'n-1'}
// // // //                     onChange={() => setPreferredCalculation('n-1')}
// // // //                   />
// // // //                   Always use n-1
// // // //                 </label>
// // // //                 <label>
// // // //                   <input
// // // //                     type="radio"
// // // //                     value="n"
// // // //                     checked={preferredCalculation === 'n'}
// // // //                     onChange={() => setPreferredCalculation('n')}
// // // //                   />
// // // //                   Always use n
// // // //                 </label>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <div className={styles.results}>
// // // //           <h2>Results</h2>
// // // //           {stats && (
// // // //             <>
// // // //               <p>Sample Size: <span>{stats.sampleSize}</span></p>
// // // //               <p>Sum: <span>{stats.sum}</span></p>
// // // //               <p>Mean: <span>{stats.mean}</span></p>
// // // //               <p>Median: <span>{stats.median}</span></p>
// // // //               <p>Mode: <span>{stats.mode}</span></p>
// // // //               <p>Min: <span>{stats.min}</span></p>
// // // //               <p>Max: <span>{stats.max}</span></p>
// // // //               <p>Range: <span>{stats.range}</span></p>
// // // //               <p>Variance: <span>
// // // //                 {advancedMode ? (
// // // //                   <>
// // // //                     (n-1): {stats.varianceN1}, (n): {stats.varianceN}
// // // //                   </>
// // // //                 ) : (
// // // //                   stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN
// // // //                 )}
// // // //               </span></p>
// // // //               <p>Standard Deviation: <span>
// // // //                 {advancedMode ? (
// // // //                   <>
// // // //                     (n-1): {stats.standardDeviationN1}, (n): {stats.standardDeviationN}
// // // //                   </>
// // // //                 ) : (
// // // //                   stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN
// // // //                 )}
// // // //               </span></p>
// // // //             </>
// // // //           )}
// // // //         </div>

// // // //         <div className={styles.explanations}>
// // // //           <h2>Explanations</h2>
// // // //           <p>This calculator uses different methods for calculating variance and standard deviation based on sample size:</p>
// // // //           <ul>
// // // //             <li>For samples with less than 30 data points, it uses (n-1) in the denominator.</li>
// // // //             <li>For samples with 30 or more data points, it uses n in the denominator.</li>
// // // //           </ul>
// // // //           <p>In advanced mode, you can see both calculations and choose your preferred method.</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StatisticsCalculator;
// // // import React, { useState } from 'react';
// // // import styles from './StatisticsCalculator.module.css';

// // // const StatisticsCalculator = () => {
// // //   const [numbers, setNumbers] = useState(['']);
// // //   const [stats, setStats] = useState(null);
// // //   const [fileType, setFileType] = useState('csv');
// // //   const [inputMethod, setInputMethod] = useState('manual');
// // //   const [preferredCalculation, setPreferredCalculation] = useState('auto');

// // //   const calculateStats = (data) => {
// // //     const validData = data.filter(n => !isNaN(n) && n !== '');
// // //     if (validData.length === 0) return null;

// // //     const sortedData = validData.map(Number).sort((a, b) => a - b);
// // //     const n = sortedData.length;
    
// // //     const sum = sortedData.reduce((acc, val) => acc + val, 0);
// // //     const mean = sum / n;
// // //     const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// // //     const min = sortedData[0];
// // //     const max = sortedData[n - 1];
// // //     const range = max - min;
    
// // //     const mode = sortedData.reduce((acc, val) => {
// // //       acc[val] = (acc[val] || 0) + 1;
// // //       return acc;
// // //     }, {});
// // //     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
// // //     const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// // //     const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
    
// // //     const standardDeviationN1 = Math.sqrt(varianceN1);
// // //     const standardDeviationN = Math.sqrt(varianceN);
    
// // //     return {
// // //       sampleSize: n,
// // //       sum: sum.toFixed(2),
// // //       mean: mean.toFixed(2),
// // //       median: median.toFixed(2),
// // //       mode: modeValue,
// // //       min,
// // //       max,
// // //       range,
// // //       varianceN1: varianceN1.toFixed(2),
// // //       varianceN: varianceN.toFixed(2),
// // //       standardDeviationN1: standardDeviationN1.toFixed(2),
// // //       standardDeviationN: standardDeviationN.toFixed(2)
// // //     };
// // //   };

// // //   const handleAddNumber = () => {
// // //     setNumbers([...numbers, '']);
// // //   };

// // //   const handleRemoveNumber = (indexToRemove) => {
// // //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// // //   };

// // //   const handleInputChange = (e, index) => {
// // //     const newNumbers = [...numbers];
// // //     newNumbers[index] = e.target.value;
// // //     setNumbers(newNumbers);
// // //   };

// // //   const handleResetAll = () => {
// // //     setNumbers(['']);
// // //     setStats(null);
// // //   };

// // //   const handleFileUpload = (event) => {
// // //     const file = event.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onload = (e) => {
// // //         let content = e.target.result;
// // //         let parsedNumbers = fileType === 'csv' 
// // //           ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
// // //           : content.split('\n').map(num => num.trim());
// // //         parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
// // //         setNumbers(parsedNumbers);
// // //       };
// // //       reader.readAsText(file);
// // //     }
// // //   };

// // //   const handleCalculate = () => {
// // //     setStats(calculateStats(numbers));
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <h1 className={styles.title}>Statistics Calculator</h1>
      
// // //       <div className={styles.gridContainer}>
// // //         <div className={styles.inputSection}>
// // //           <div className={styles.inputToggle}>
// // //             <button 
// // //               className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// // //               onClick={() => setInputMethod('manual')}
// // //             >
// // //               Manual Input
// // //             </button>
// // //             <button 
// // //               className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// // //               onClick={() => setInputMethod('file')}
// // //             >
// // //               File Upload
// // //             </button>
// // //           </div>

// // //           {inputMethod === 'manual' ? (
// // //             <>
// // //               <div className={styles.inputGrid}>
// // //                 {numbers.map((number, index) => (
// // //                   <div key={index} className={styles.inputGroup}>
// // //                     <input
// // //                       type="number"
// // //                       value={number}
// // //                       onChange={(e) => handleInputChange(e, index)}
// // //                       className={styles.input}
// // //                       placeholder="Number"
// // //                     />
// // //                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className={styles.buttonGroup}>
// // //                 <button onClick={handleAddNumber} className={styles.button}>Add</button>
// // //                 <button onClick={handleResetAll} className={styles.button}>Reset</button>
// // //               </div>
// // //             </>
// // //           ) : (
// // //             <div className={styles.fileUploadSection}>
// // //               <div className={styles.radioGroup}>
// // //                 <label>
// // //                   <input
// // //                     type="radio"
// // //                     value="csv"
// // //                     checked={fileType === 'csv'}
// // //                     onChange={() => setFileType('csv')}
// // //                   />
// // //                   CSV
// // //                 </label>
// // //                 <label>
// // //                   <input
// // //                     type="radio"
// // //                     value="txt"
// // //                     checked={fileType === 'txt'}
// // //                     onChange={() => setFileType('txt')}
// // //                   />
// // //                   TXT
// // //                 </label>
// // //               </div>
// // //               <input 
// // //                 type="file" 
// // //                 accept={fileType === 'csv' ? '.csv' : '.txt'} 
// // //                 onChange={handleFileUpload} 
// // //                 className={styles.fileInput} 
// // //               />
// // //             </div>
// // //           )}
// // //           <button onClick={handleCalculate} className={styles.calculateButton}>Calculate</button>
          
// // //           <div className={styles.advancedOptions}>
// // //             <div className={styles.radioGroup}>
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   value="auto"
// // //                   checked={preferredCalculation === 'auto'}
// // //                   onChange={() => setPreferredCalculation('auto')}
// // //                 />
// // //                 Auto (n-1 for n &lt; 30, n for n &gt;= 30)
// // //               </label>
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   value="n-1"
// // //                   checked={preferredCalculation === 'n-1'}
// // //                   onChange={() => setPreferredCalculation('n-1')}
// // //                 />
// // //                 Always use n-1
// // //               </label>
// // //               <label>
// // //                 <input
// // //                   type="radio"
// // //                   value="n"
// // //                   checked={preferredCalculation === 'n'}
// // //                   onChange={() => setPreferredCalculation('n')}
// // //                 />
// // //                 Always use n
// // //               </label>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className={styles.results}>
// // //           <h2>Results</h2>
// // //           {stats && (
// // //             <>
// // //               <p>Sample Size: <span>{stats.sampleSize}</span></p>
// // //               <p>Sum: <span>{stats.sum}</span></p>
// // //               <p>Mean: <span>{stats.mean}</span></p>
// // //               <p>Median: <span>{stats.median}</span></p>
// // //               <p>Mode: <span>{stats.mode}</span></p>
// // //               <p>Min: <span>{stats.min}</span></p>
// // //               <p>Max: <span>{stats.max}</span></p>
// // //               <p>Range: <span>{stats.range}</span></p>
// // //               <p>Variance: <span>
// // //                 {stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN}
// // //               </span></p>
// // //               <p>Standard Deviation: <span>
// // //                 {stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN}
// // //               </span></p>
// // //             </>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default StatisticsCalculator;
// // import React, { useState } from 'react';
// // import styles from './StatisticsCalculator.module.css';

// // const StatisticsCalculator = () => {
// //   const [numbers, setNumbers] = useState(['']);
// //   const [stats, setStats] = useState(null);
// //   const [fileType, setFileType] = useState('csv');
// //   const [inputMethod, setInputMethod] = useState('manual');
// //   const [preferredCalculation, setPreferredCalculation] = useState('auto');

// //   const calculateStats = (data) => {
// //     const validData = data.filter(n => !isNaN(n) && n !== '');
// //     if (validData.length === 0) return null;

// //     const sortedData = validData.map(Number).sort((a, b) => a - b);
// //     const n = sortedData.length;
    
// //     const sum = sortedData.reduce((acc, val) => acc + val, 0);
// //     const mean = sum / n;
// //     const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
// //     const min = sortedData[0];
// //     const max = sortedData[n - 1];
// //     const range = max - min;
    
// //     const mode = sortedData.reduce((acc, val) => {
// //       acc[val] = (acc[val] || 0) + 1;
// //       return acc;
// //     }, {});
// //     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
// //     const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
// //     const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
    
// //     const standardDeviationN1 = Math.sqrt(varianceN1);
// //     const standardDeviationN = Math.sqrt(varianceN);
    
// //     return {
// //       sampleSize: n,
// //       sum: sum.toFixed(2),
// //       mean: mean.toFixed(2),
// //       median: median.toFixed(2),
// //       mode: modeValue,
// //       min,
// //       max,
// //       range,
// //       varianceN1: varianceN1.toFixed(2),
// //       varianceN: varianceN.toFixed(2),
// //       standardDeviationN1: standardDeviationN1.toFixed(2),
// //       standardDeviationN: standardDeviationN.toFixed(2)
// //     };
// //   };

// //   const handleAddNumber = () => {
// //     setNumbers([...numbers, '']);
// //   };

// //   const handleRemoveNumber = (indexToRemove) => {
// //     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
// //   };

// //   const handleInputChange = (e, index) => {
// //     const newNumbers = [...numbers];
// //     newNumbers[index] = e.target.value;
// //     setNumbers(newNumbers);
// //   };

// //   const handleResetAll = () => {
// //     setNumbers(['']);
// //     setStats(null);
// //   };

// //   const handleFileUpload = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         let content = e.target.result;
// //         let parsedNumbers = fileType === 'csv' 
// //           ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
// //           : content.split('\n').map(num => num.trim());
// //         parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
// //         setNumbers(parsedNumbers);
// //       };
// //       reader.readAsText(file);
// //     }
// //   };

// //   const handleCalculate = () => {
// //     setStats(calculateStats(numbers));
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h1 className={styles.title}>Statistics Calculator</h1>
      
// //       <div className={styles.gridContainer}>
// //         <div className={styles.inputSection}>
// //           <div className={styles.inputToggle}>
// //             <button 
// //               className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
// //               onClick={() => setInputMethod('manual')}
// //             >
// //               Manual Input
// //             </button>
// //             <button 
// //               className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
// //               onClick={() => setInputMethod('file')}
// //             >
// //               File Upload
// //             </button>
// //           </div>

// //           {inputMethod === 'manual' ? (
// //             <>
// //               <div className={styles.inputGrid}>
// //                 {numbers.map((number, index) => (
// //                   <div key={index} className={styles.inputGroup}>
// //                     <input
// //                       type="number"
// //                       value={number}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                       className={styles.input}
// //                       placeholder="Number"
// //                     />
// //                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className={styles.buttonGroup}>
// //                 <button onClick={handleAddNumber} className={styles.button}>Add</button>
// //                 <button onClick={handleResetAll} className={styles.button}>Reset</button>
// //               </div>
// //             </>
// //           ) : (
// //             <div className={styles.fileUploadSection}>
// //               <div className={styles.radioGroup}>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     value="csv"
// //                     checked={fileType === 'csv'}
// //                     onChange={() => setFileType('csv')}
// //                   />
// //                   CSV
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     value="txt"
// //                     checked={fileType === 'txt'}
// //                     onChange={() => setFileType('txt')}
// //                   />
// //                   TXT
// //                 </label>
// //               </div>
// //               <input 
// //                 type="file" 
// //                 accept={fileType === 'csv' ? '.csv' : '.txt'} 
// //                 onChange={handleFileUpload} 
// //                 className={styles.fileInput} 
// //               />
// //             </div>
// //           )}
// //           <button onClick={handleCalculate} className={styles.calculateButton}>Calculate</button>
          
// //           <div className={styles.advancedOptions}>
// //             <div className={styles.radioGroup}>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   value="auto"
// //                   checked={preferredCalculation === 'auto'}
// //                   onChange={() => setPreferredCalculation('auto')}
// //                 />
// //                 Auto (n-1 for n &lt; 30, n for n &gt;= 30)
// //               </label>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   value="n-1"
// //                   checked={preferredCalculation === 'n-1'}
// //                   onChange={() => setPreferredCalculation('n-1')}
// //                 />
// //                 Always use n-1
// //               </label>
// //               <label>
// //                 <input
// //                   type="radio"
// //                   value="n"
// //                   checked={preferredCalculation === 'n'}
// //                   onChange={() => setPreferredCalculation('n')}
// //                 />
// //                 Always use n
// //               </label>
// //             </div>
// //           </div>
// //         </div>

// //         <div className={styles.results}>
// //           <h2>Results</h2>
// //           <p>Sample Size: <span>{stats?.sampleSize}</span></p>
// //           <p>Sum: <span>{stats?.sum}</span></p>
// //           <p>Mean: <span>{stats?.mean}</span></p>
// //           <p>Median: <span>{stats?.median}</span></p>
// //           <p>Mode: <span>{stats?.mode}</span></p>
// //           <p>Min: <span>{stats?.min}</span></p>
// //           <p>Max: <span>{stats?.max}</span></p>
// //           <p>Range: <span>{stats?.range}</span></p>
// //           <p>Variance: <span>
// //             {stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN)}
// //           </span></p>
// //           <p>Standard Deviation: <span>
// //             {stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN)}
// //           </span></p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StatisticsCalculator;
// import React, { useState } from 'react';
// import styles from './StatisticsCalculator.module.css';
// import explanations from './explanations';

// const StatisticsCalculator = () => {
//   const [numbers, setNumbers] = useState(['']);
//   const [stats, setStats] = useState(null);
//   const [fileType, setFileType] = useState('csv');
//   const [inputMethod, setInputMethod] = useState('manual');
//   const [preferredCalculation, setPreferredCalculation] = useState('auto');
//   const [currentExplanation, setCurrentExplanation] = useState('');

//   const handleExplanationClick = (key) => {
//     setCurrentExplanation(explanations[key]);
//   };

//   const calculateStats = (data) => {
//     const validData = data.filter(n => !isNaN(n) && n !== '');
//     if (validData.length === 0) return null;

//     const sortedData = validData.map(Number).sort((a, b) => a - b);
//     const n = sortedData.length;
    
//     const sum = sortedData.reduce((acc, val) => acc + val, 0);
//     const mean = sum / n;
//     const median = n % 2 === 0 ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2 : sortedData[Math.floor(n / 2)];
//     const min = sortedData[0];
//     const max = sortedData[n - 1];
//     const range = max - min;
    
//     const mode = sortedData.reduce((acc, val) => {
//       acc[val] = (acc[val] || 0) + 1;
//       return acc;
//     }, {});
//     const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
    
//     const varianceN1 = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (n - 1);
//     const varianceN = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
    
//     const standardDeviationN1 = Math.sqrt(varianceN1);
//     const standardDeviationN = Math.sqrt(varianceN);

//     const q1Index = Math.floor(n / 4);
//     const q3Index = Math.floor((3 * n) / 4);
//     const q1 = n % 2 === 0 ? (sortedData[q1Index - 1] + sortedData[q1Index]) / 2 : sortedData[q1Index];
//     const q3 = n % 2 === 0 ? (sortedData[q3Index - 1] + sortedData[q3Index]) / 2 : sortedData[q3Index];
//     const iqr = q3 - q1;

//     const skewness = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / (n * Math.pow(standardDeviationN, 3));
//     const kurtosis = sortedData.reduce((acc, val) => acc + Math.pow(val - mean, 4), 0) / (n * Math.pow(standardDeviationN, 4)) - 3;

//     const coefficientOfVariation = (standardDeviationN / mean) * 100;

//     const geometricMean = Math.pow(sortedData.reduce((acc, val) => acc * val, 1), 1 / n);
//     const harmonicMean = n / sortedData.reduce((acc, val) => acc + 1 / val, 0);
//     const rootMeanSquare = Math.sqrt(sortedData.reduce((acc, val) => acc + Math.pow(val, 2), 0) / n);
    
//     return {
//       sampleSize: n,
//       sum: sum.toFixed(2),
//       mean: mean.toFixed(2),
//       median: median.toFixed(2),
//       mode: modeValue,
//       min,
//       max,
//       range,
//       varianceN1: varianceN1.toFixed(2),
//       varianceN: varianceN.toFixed(2),
//       standardDeviationN1: standardDeviationN1.toFixed(2),
//       standardDeviationN: standardDeviationN.toFixed(2),
//       q1: q1.toFixed(2),
//       q3: q3.toFixed(2),
//       iqr: iqr.toFixed(2),
//       skewness: skewness.toFixed(2),
//       kurtosis: kurtosis.toFixed(2),
//       coefficientOfVariation: coefficientOfVariation.toFixed(2),
//       geometricMean: geometricMean.toFixed(2),
//       harmonicMean: harmonicMean.toFixed(2),
//       rootMeanSquare: rootMeanSquare.toFixed(2)
//     };
//   };

//   const handleAddNumber = () => {
//     setNumbers([...numbers, '']);
//   };

//   const handleRemoveNumber = (indexToRemove) => {
//     setNumbers(numbers.filter((_, index) => index !== indexToRemove));
//   };

//   const handleInputChange = (e, index) => {
//     const newNumbers = [...numbers];
//     newNumbers[index] = e.target.value;
//     setNumbers(newNumbers);
//   };

//   const handleResetAll = () => {
//     setNumbers(['']);
//     setStats(null);
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         let content = e.target.result;
//         let parsedNumbers = fileType === 'csv' 
//           ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
//           : content.split('\n').map(num => num.trim());
//         parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
//         setNumbers(parsedNumbers);
//       };
//       reader.readAsText(file);
//     }
//   };

//   const handleCalculate = () => {
//     setStats(calculateStats(numbers));
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Statistics Calculator</h1>
      
//       <div className={styles.gridContainer}>
//         <div className={styles.inputSection}>
//           <div className={styles.inputToggle}>
//             <button 
//               className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
//               onClick={() => setInputMethod('manual')}
//             >
//               Manual Input
//             </button>
//             <button 
//               className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
//               onClick={() => setInputMethod('file')}
//             >
//               File Upload
//             </button>
//           </div>

//           {inputMethod === 'manual' ? (
//             <>
//               <div className={styles.inputGrid}>
//                 {numbers.map((number, index) => (
//                   <div key={index} className={styles.inputGroup}>
//                     <input
//                       type="number"
//                       value={number}
//                       onChange={(e) => handleInputChange(e, index)}
//                       className={styles.input}
//                       placeholder="Number"
//                     />
//                     <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.buttonGroup}>
//                 <button onClick={handleAddNumber} className={styles.button}>Add</button>
//                 <button onClick={handleResetAll} className={styles.button}>Reset</button>
//               </div>
//             </>
//           ) : (
//             <div className={styles.fileUploadSection}>
//               <div className={styles.radioGroup}>
//                 <label>
//                   <input
//                     type="radio"
//                     value="csv"
//                     checked={fileType === 'csv'}
//                     onChange={() => setFileType('csv')}
//                   />
//                   CSV
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="txt"
//                     checked={fileType === 'txt'}
//                     onChange={() => setFileType('txt')}
//                   />
//                   TXT
//                 </label>
//               </div>
//               <input 
//                 type="file" 
//                 accept={fileType === 'csv' ? '.csv' : '.txt'} 
//                 onChange={handleFileUpload} 
//                 className={styles.fileInput} 
//               />
//             </div>
//           )}
//           <button onClick={handleCalculate} className={styles.calculateButton}>Calculate</button>
          
//           <div className={styles.advancedOptions}>
//             <div className={styles.radioGroup}>
//               <label>
//                 <input
//                   type="radio"
//                   value="auto"
//                   checked={preferredCalculation === 'auto'}
//                   onChange={() => setPreferredCalculation('auto')}
//                 />
//                 Auto (n-1 for n &lt; 30, n for n &gt;= 30)
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="n-1"
//                   checked={preferredCalculation === 'n-1'}
//                   onChange={() => setPreferredCalculation('n-1')}
//                 />
//                 Always use n-1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="n"
//                   checked={preferredCalculation === 'n'}
//                   onChange={() => setPreferredCalculation('n')}
//                 />
//                 Always use n
//               </label>
//             </div>
//           </div>
//         </div>


//         <div className={styles.results}>
//   <h2>Results</h2>
//   <p className={styles.tooltipContainer}>
//     Sample Size: <span className={styles.infoIcon} onClick={() => handleExplanationClick('sampleSize')}>ⓘ</span>
//     <span>{stats?.sampleSize}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Sum: <span className={styles.infoIcon} onClick={() => handleExplanationClick('sum')}>ⓘ</span>
//     <span>{stats?.sum}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('mean')}>ⓘ</span>
//     <span>{stats?.mean}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Median: <span className={styles.infoIcon} onClick={() => handleExplanationClick('median')}>ⓘ</span>
//     <span>{stats?.median}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Mode: <span className={styles.infoIcon} onClick={() => handleExplanationClick('mode')}>ⓘ</span>
//     <span>{stats?.mode}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Min: <span className={styles.infoIcon} onClick={() => handleExplanationClick('min')}>ⓘ</span>
//     <span>{stats?.min}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Max: <span className={styles.infoIcon} onClick={() => handleExplanationClick('max')}>ⓘ</span>
//     <span>{stats?.max}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Range: <span className={styles.infoIcon} onClick={() => handleExplanationClick('range')}>ⓘ</span>
//     <span>{stats?.range}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Variance: <span className={styles.infoIcon} onClick={() => handleExplanationClick('variance')}>ⓘ</span>
//     <span>{stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN)}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Standard Deviation: <span className={styles.infoIcon} onClick={() => handleExplanationClick('standardDeviation')}>ⓘ</span>
//     <span>{stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN)}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Q1 (First Quartile): <span className={styles.infoIcon} onClick={() => handleExplanationClick('q1')}>ⓘ</span>
//     <span>{stats?.q1}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Q3 (Third Quartile): <span className={styles.infoIcon} onClick={() => handleExplanationClick('q3')}>ⓘ</span>
//     <span>{stats?.q3}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     IQR (Interquartile Range): <span className={styles.infoIcon} onClick={() => handleExplanationClick('iqr')}>ⓘ</span>
//     <span>{stats?.iqr}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Skewness: <span className={styles.infoIcon} onClick={() => handleExplanationClick('skewness')}>ⓘ</span>
//     <span>{stats?.skewness}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Kurtosis: <span className={styles.infoIcon} onClick={() => handleExplanationClick('kurtosis')}>ⓘ</span>
//     <span>{stats?.kurtosis}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Coefficient of Variation: <span className={styles.infoIcon} onClick={() => handleExplanationClick('coefficientOfVariation')}>ⓘ</span>
//     <span>{stats?.coefficientOfVariation}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Geometric Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('geometricMean')}>ⓘ</span>
//     <span>{stats?.geometricMean}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Harmonic Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('harmonicMean')}>ⓘ</span>
//     <span>{stats?.harmonicMean}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
//   <p className={styles.tooltipContainer}>
//     Root Mean Square: <span className={styles.infoIcon} onClick={() => handleExplanationClick('rootMeanSquare')}>ⓘ</span>
//     <span>{stats?.rootMeanSquare}</span>
//     <span className={styles.tooltip}>Click to see explanation</span>
//   </p>
// </div>

// {/* <div className={styles.results}>
//   <h2>Results</h2>
//   <p className='tooltipContainer'>Sample Size: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('sampleSize')}>ⓘ</span> <span>{stats?.sampleSize}</span></p>
//   <p>Sum: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('sum')}>ⓘ</span> <span>{stats?.sum}</span></p>
//   <p>Mean: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('mean')}>ⓘ</span> <span>{stats?.mean}</span></p>
//   <p>Median: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('median')}>ⓘ</span> <span>{stats?.median}</span></p>
//   <p>Mode: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('mode')}>ⓘ</span> <span>{stats?.mode}</span></p>
//   <p>Min: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('min')}>ⓘ</span> <span>{stats?.min}</span></p>
//   <p>Max: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('max')}>ⓘ</span> <span>{stats?.max}</span></p>
//   <p>Range: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('range')}>ⓘ</span> <span>{stats?.range}</span></p>
//   <p>Variance: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('variance')}>ⓘ</span> <span>
//     {stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN)}
//   </span></p>
//   <p>Standard Deviation: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('standardDeviation')}>ⓘ</span> <span>
//     {stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN)}
//   </span></p>
//   <p>Q1 (First Quartile): <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('q1')}>ⓘ</span> <span>{stats?.q1}</span></p>
//   <p>Q3 (Third Quartile): <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('q3')}>ⓘ</span> <span>{stats?.q3}</span></p>
//   <p>IQR (Interquartile Range): <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('iqr')}>ⓘ</span> <span>{stats?.iqr}</span></p>
//   <p>Skewness: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('skewness')}>ⓘ</span> <span>{stats?.skewness}</span></p>
//   <p>Kurtosis: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('kurtosis')}>ⓘ</span> <span>{stats?.kurtosis}</span></p>
//   <p>Coefficient of Variation: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('coefficientOfVariation')}>ⓘ</span> <span>{stats?.coefficientOfVariation}</span></p>
//   <p>Geometric Mean: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('geometricMean')}>ⓘ</span> <span>{stats?.geometricMean}</span></p>
//   <p>Harmonic Mean: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('harmonicMean')}>ⓘ</span> <span>{stats?.harmonicMean}</span></p>
//   <p>Root Mean Square: <span className={styles.infoIcon} title="Click to see explanation" onClick={() => handleExplanationClick('rootMeanSquare')}>ⓘ</span> <span>{stats?.rootMeanSquare}</span></p>
// </div> */}
// <div className={styles.explanationSection}>
//   <h2>Explanation</h2>
//   <p>{currentExplanation}</p>
// </div>

//         {/* <div className={styles.results}>
//           <h2>Results</h2>
//           <p>Sample Size: <span>{stats?.sampleSize}</span></p>
//           <p>Sum: <span>{stats?.sum}</span></p>
//           <p>Mean: <span>{stats?.mean}</span></p>
//           <p>Median: <span>{stats?.median}</span></p>
//           <p>Mode: <span>{stats?.mode}</span></p>
//           <p>Min: <span>{stats?.min}</span></p>
//           <p>Max: <span>{stats?.max}</span></p>
//           <p>Range: <span>{stats?.range}</span></p>
//           <p>Variance: <span>
//             {stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN)}
//           </span></p>
//           <p>Standard Deviation: <span>
//             {stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN)}
//           </span></p>
//           <p>Q1 (First Quartile): <span>{stats?.q1}</span></p>
//           <p>Q3 (Third Quartile): <span>{stats?.q3}</span></p>
//           <p>IQR (Interquartile Range): <span>{stats?.iqr}</span></p>
//           <p>Skewness: <span>{stats?.skewness}</span></p>
//           <p>Kurtosis: <span>{stats?.kurtosis}</span></p>
//           <p>Coefficient of Variation: <span>{stats?.coefficientOfVariation}%</span></p>
//           <p>Geometric Mean: <span>{stats?.geometricMean}</span></p>
//           <p>Harmonic Mean: <span>{stats?.harmonicMean}</span></p>
//           <p>Root Mean Square: <span>{stats?.rootMeanSquare}</span></p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default StatisticsCalculator;
import React, { useState } from 'react';
import styles from './StatisticsCalculator.module.css';
//import explanations from './explanations';

const StatisticsCalculator = ({explanations}) => {
  const [numbers, setNumbers] = useState(['']);
  const [stats, setStats] = useState(null);
  const [fileType, setFileType] = useState('csv');
  const [inputMethod, setInputMethod] = useState('manual');
  const [preferredCalculation, setPreferredCalculation] = useState('auto');
  const [currentExplanation, setCurrentExplanation] = useState('');
  const [error, setError] = useState(null);

  const handleExplanationClick = (key) => {
    if(explanations)
    setCurrentExplanation(explanations[key]);
  };

//   const calculateStats = (data) => {
//     try {
//       const validData = data.filter(n => !isNaN(n) && n !== '');
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
      
//       const mode = sortedData.reduce((acc, val) => {
//         acc[val] = (acc[val] || 0) + 1;
//         return acc;
//       }, {});
//       const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
      
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

// const calculateStats = (data) => {
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
      
//       const mode = sortedData.reduce((acc, val) => {
//         acc[val] = (acc[val] || 0) + 1;
//         return acc;
//       }, {});
//       const modeValue = Object.keys(mode).reduce((a, b) => mode[a] > mode[b] ? a : b);
      
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
  
      // Updated mode calculation
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
    setPreferredCalculation('auto')
    setStats(null);
    setError(null);
  };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         try {
//           let content = e.target.result;
//           let parsedNumbers = fileType === 'csv' 
//             ? content.split('\n').map(line => line.split(',').map(num => num.trim())).flat()
//             : content.split('\n').map(num => num.trim());
//           parsedNumbers = parsedNumbers.filter(num => num !== '' && !isNaN(num));
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

  
// const handleFileUpload = (event) => {
//     setStats(null); // Reset results when a file is uploaded
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         try {
//           let content = e.target.result;
//           let parsedNumbers = content.split('\n').map(num => num.trim()).filter(num => num !== '' && !isNaN(num));
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

// const handleFileUpload = (event) => {
//     setStats(null); // Reset results when a file is uploaded
//     const file = event.target.files[0];
//     if (file) {
//       if (file.type !== 'text/plain') {
//         setError("Please upload a valid .txt file.");
//         return;
//       }
  
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         try {
//           let content = e.target.result;
//           let parsedNumbers = content.split(/\r?\n/)
//             .map(line => line.trim())
//             .filter(line => line !== '')
//             .map(line => {
//               const num = parseFloat(line);
//               if (isNaN(num)) {
//                 throw new Error(`Invalid number found: ${line}`);
//               }
//               return num;
//             });
  
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

// const handleFileUpload = (event) => {
//     setStats(null);
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         try {
//           let content = e.target.result;
//           let parsedNumbers;
//           if (fileType === 'csv') {
//             parsedNumbers = content.split('\n')
//               .flatMap(line => line.split(','))
//               .map(num => num.trim())
//               .filter(num => num !== '' && !isNaN(num))
//               .map(Number);
//           } else { // txt
//             parsedNumbers = content.split('\n')
//               .map(num => num.trim())
//               .filter(num => num !== '' && !isNaN(num))
//               .map(Number);
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

// const handleFileUpload = (event) => {
//     setStats(null);
//     const file = event.target.files[0];
//     if (file) {
//       // Check file type
//       if ((fileType === 'csv' && !file.name.toLowerCase().endsWith('.csv')) || 
//           (fileType === 'txt' && !file.name.toLowerCase().endsWith('.txt'))) {
//         setError(`Please upload a ${fileType.toUpperCase()} file.`);
//         return;
//       }
  
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         try {
//           let content = e.target.result;
//           let parsedNumbers;
//           if (fileType === 'csv') {
//             parsedNumbers = content.split('\n')
//               .flatMap(line => line.split(','))
//               .map(num => num.trim())
//               .filter(num => num !== '' && !isNaN(parseFloat(num)))
//               .map(Number);
//           } else { // txt
//             parsedNumbers = content.split(/\r?\n/)
//               .map(num => num.trim())
//               .filter(num => num !== '' && !isNaN(parseFloat(num)))
//               .map(Number);
//           }
//           if (parsedNumbers.length === 0) {
//             throw new Error("No valid numbers found in the file.");
//           }
//           console.log("Parsed numbers:", parsedNumbers); // For debugging
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


const handleFileUpload = (event) => {
    setStats(null);
    const file = event.target.files[0];
    if (file) {
      if ((fileType === 'csv' && !file.name.toLowerCase().endsWith('.csv')) || 
          (fileType === 'txt' && !file.name.toLowerCase().endsWith('.txt'))) {
        setError(`Please upload a ${fileType.toUpperCase()} file.`);
        return;
      }
  
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          let content = e.target.result;
          let parsedNumbers;
          if (fileType === 'csv') {
            parsedNumbers = content.split('\n')
              .flatMap(line => line.split(','))
              .map(num => num.trim())
              .filter(num => num !== '' && !isNaN(parseFloat(num)))
              .map(Number);
          } else { // txt
            // Split by newlines, commas, and spaces
            parsedNumbers = content.split(/[\n,\s]+/)
              .map(num => num.trim())
              .filter(num => num !== '' && !isNaN(parseFloat(num)))
              .map(Number);
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


const handleCalculate = () => {
    try {
      if (numbers.length === 0) {
        throw new Error("No data available for calculation.");
      }
      const result = calculateStats(numbers);
      setStats(result);
      setError(null);
    } catch (error) {
      setError(error.message);
      setStats(null);
    }
  };

// const handleCalculate = () => {
//     try {
//       const result = calculateStats(numbers);
//       setStats(result);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//       setStats(null);
//     }
//   };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Statistics Calculator</h1> */}
      
      {/* {error && <div className={styles.error}>{error}</div>} */}
      
      <div className={styles.gridContainer}>
        <div className={styles.inputSection}>
          {/* <div className={styles.inputToggle}>
            <button 
              className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
              onClick={() => setInputMethod('manual')}
            >
              Manual Input
            </button>
            <button 
              className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
              onClick={() => setInputMethod('file')}
            >
              File Upload
            </button>
          </div> */}

<div className={styles.inputToggle}>
  <button 
    className={`${styles.toggleButton} ${inputMethod === 'manual' ? styles.active : ''}`}
    onClick={() => {
      if (inputMethod !== 'manual') {
        setInputMethod('manual');
        setStats(null);
        setNumbers(['']); // Reset to a single empty input
        setError(null);
      }
    }}
  >
    Manual Input
  </button>
  <button 
    className={`${styles.toggleButton} ${inputMethod === 'file' ? styles.active : ''}`}
    onClick={() => {
      if (inputMethod !== 'file') {
        setInputMethod('file');
        setStats(null);
        setNumbers([]); // Clear all manual inputs
        setError(null);
      }
    }}
  >
    File Upload
  </button>
  
</div>

          {inputMethod === 'manual' ? (
            <>
              <div className={styles.inputGrid}>
                {numbers.map((number, index) => (
                  <div key={index} className={styles.inputGroup}>
                    <input
                      type="number"
                      value={number}
                      onChange={(e) => handleInputChange(e, index)}
                      className={styles.input}
                      placeholder="Number"
                    />
                    <button onClick={() => handleRemoveNumber(index)} className={styles.removeButton}>×</button>
                  </div>
                ))}
              </div>
              <div className={styles.buttonGroup}>
                <button onClick={handleAddNumber} className={styles.button}>Add Number</button>
                <button onClick={handleResetAll} className={styles.button}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    Reset</button>
              </div>
            </>
          ) : (
            
            <div className={styles.fileUploadSection}>
  <div className={styles.radioGroup}>
    <div className={styles.radioOption}>
      <input
        type="radio"
        id="csvRadio"
        value="csv"
        checked={fileType === 'csv'}
        onChange={() => setFileType('csv')}
      />
      <label htmlFor="csvRadio">CSV</label>
    </div>
    <div className={styles.radioOption}>
      <input
        type="radio"
        id="txtRadio"
        value="txt"
        checked={fileType === 'txt'}
        onChange={() => setFileType('txt')}
      />
      <label htmlFor="txtRadio">TXT</label>
    </div>
  </div>
  <div className={styles.uploadContainer}>
    <input 
      type="file" 
      accept={fileType === 'csv' ? '.csv' : '.txt'} 
      onChange={handleFileUpload} 
      className={styles.fileInput} 
    />
    <button onClick={handleResetAll} className={styles.button}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
    </button>
  </div>
</div>
            // <div className={styles.fileUploadSection}>
            //   <div className={styles.radioGroup}>
            //     <label>
            //       <input
            //         type="radio"
            //         value="csv"
            //         checked={fileType === 'csv'}
            //         onChange={() => setFileType('csv')}
            //       />
            //       CSV
            //     </label>
            //     <label>
            //       <input
            //         type="radio"
            //         value="txt"
            //         checked={fileType === 'txt'}
            //         onChange={() => setFileType('txt')}
            //       />
            //       TXT
            //     </label>
            //   </div>
            //   <div className={styles.uploadContainer}>
            //   <input 
            //     type="file" 
            //     accept={fileType === 'csv' ? '.csv' : '.txt'} 
            //     onChange={handleFileUpload} 
            //     className={styles.fileInput} 
            //   />
            //    <button onClick={handleResetAll} className={styles.button}>
                
            //    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            //     </button>
            //    </div>
            // </div>
          )}
          {error && <div className={styles.error}>{error}</div>}
          <button onClick={handleCalculate} className={styles.calculateButton}>Calculate</button>
          
          <div className={styles.advancedOptions}>
            <div className={styles.radioGroupColumn}>
              <label>
                <input
                  type="radio"
                  value="auto"
                  checked={preferredCalculation === 'auto'}
                  onChange={() => setPreferredCalculation('auto')}
                />
                Auto (n-1 for n &lt; 30, n for n &gt;= 30)
              </label>
              <label>
                <input
                  type="radio"
                  value="n-1"
                  checked={preferredCalculation === 'n-1'}
                  onChange={() => setPreferredCalculation('n-1')}
                />
                Always use n-1
              </label>
              <label>
                <input
                  type="radio"
                  value="n"
                  checked={preferredCalculation === 'n'}
                  onChange={() => setPreferredCalculation('n')}
                />
                Always use n
              </label>
            </div>
          </div>
        </div>

        <div className={styles.results}>
          <h2>Results</h2>
          <p className={styles.tooltipContainer}>
            Sample Size: <span className={styles.infoIcon} onClick={() => handleExplanationClick('sampleSize')}>ⓘ</span>
            <span>{stats?.sampleSize}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Sum: <span className={styles.infoIcon} onClick={() => handleExplanationClick('sum')}>ⓘ</span>
            <span>{stats?.sum}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('mean')}>ⓘ</span>
            <span>{stats?.mean}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Median: <span className={styles.infoIcon} onClick={() => handleExplanationClick('median')}>ⓘ</span>
            <span>{stats?.median}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Mode: <span className={styles.infoIcon} onClick={() => handleExplanationClick('mode')}>ⓘ</span>
            <span>{stats?.mode}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Min: <span className={styles.infoIcon} onClick={() => handleExplanationClick('min')}>ⓘ</span>
            <span>{stats?.min}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Max: <span className={styles.infoIcon} onClick={() => handleExplanationClick('max')}>ⓘ</span>
            <span>{stats?.max}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Range: <span className={styles.infoIcon} onClick={() => handleExplanationClick('range')}>ⓘ</span>
            <span>{stats?.range}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Variance: <span className={styles.infoIcon} onClick={() => handleExplanationClick('variance')}>ⓘ</span>
            <span>{stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.varianceN1 : stats.varianceN)}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Standard Deviation: <span className={styles.infoIcon} onClick={() => handleExplanationClick('standardDeviation')}>ⓘ</span>
            <span>{stats && (stats.sampleSize < 30 || preferredCalculation === 'n-1' ? stats.standardDeviationN1 : stats.standardDeviationN)}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Q1 (First Quartile): <span className={styles.infoIcon} onClick={() => handleExplanationClick('q1')}>ⓘ</span>
            <span>{stats?.q1}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Q3 (Third Quartile): <span className={styles.infoIcon} onClick={() => handleExplanationClick('q3')}>ⓘ</span>
            <span>{stats?.q3}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            IQR (Interquartile Range): <span className={styles.infoIcon} onClick={() => handleExplanationClick('iqr')}>ⓘ</span>
            <span>{stats?.iqr}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Skewness: <span className={styles.infoIcon} onClick={() => handleExplanationClick('skewness')}>ⓘ</span>
            <span>{stats?.skewness}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Kurtosis: <span className={styles.infoIcon} onClick={() => handleExplanationClick('kurtosis')}>ⓘ</span>
            <span>{stats?.kurtosis}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Coefficient of Variation: <span className={styles.infoIcon} onClick={() => handleExplanationClick('coefficientOfVariation')}>ⓘ</span>
            <span>{stats?.coefficientOfVariation}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Geometric Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('geometricMean')}>ⓘ</span>
            <span>{stats?.geometricMean}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Harmonic Mean: <span className={styles.infoIcon} onClick={() => handleExplanationClick('harmonicMean')}>ⓘ</span>
            <span>{stats?.harmonicMean}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
          <p className={styles.tooltipContainer}>
            Root Mean Square: <span className={styles.infoIcon} onClick={() => handleExplanationClick('rootMeanSquare')}>ⓘ</span>
            <span>{stats?.rootMeanSquare}</span>
            <span className={styles.tooltip}>Click to see explanation</span>
          </p>
        </div>

        {explanations&&<div className={styles.explanationSection}>
          <h2>Explanation</h2>
          <p>{currentExplanation}</p>
        </div>}
      </div>
    </div>
  );
};

export default StatisticsCalculator;