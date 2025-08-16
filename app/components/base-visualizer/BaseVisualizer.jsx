// // // // // // // // // // 'use client'
// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import styles from './BaseVisualizer.module.css';

// // // // // // // // // // const BaseVisualizer = () => {
// // // // // // // // // //   const [number, setNumber] = useState('');
// // // // // // // // // //   const [base, setBase] = useState('');
// // // // // // // // // //   const [visualization, setVisualization] = useState([]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (number !== '' && base !== '' && !isNaN(number) && !isNaN(base)) {
// // // // // // // // // //       const num = parseInt(number);
// // // // // // // // // //       const b = parseInt(base);
// // // // // // // // // //       if (b >= 2 && b <= 36) {
// // // // // // // // // //         const converted = num.toString(b);
// // // // // // // // // //         const newVisualization = converted.split('').map(digit => parseInt(digit, b));
// // // // // // // // // //         setVisualization(newVisualization);
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   }, [number, base]);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // //       <h1>Number Base Converter and Visualizer</h1>
// // // // // // // // // //       <div className={styles.controls}>
// // // // // // // // // //         <input 
// // // // // // // // // //           type="number" 
// // // // // // // // // //           value={number} 
// // // // // // // // // //           onChange={(e) => setNumber(e.target.value)}
// // // // // // // // // //           placeholder="Enter a number (decimal)"
// // // // // // // // // //         />
// // // // // // // // // //         <input 
// // // // // // // // // //           type="number" 
// // // // // // // // // //           value={base} 
// // // // // // // // // //           onChange={(e) => setBase(e.target.value)}
// // // // // // // // // //           placeholder="Enter a base (2-36)"
// // // // // // // // // //           min="2"
// // // // // // // // // //           max="36"
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className={styles.result}>
// // // // // // // // // //         {number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 &&
// // // // // // // // // //           `${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`
// // // // // // // // // //         }
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className={styles.grid}>
// // // // // // // // // //         {[...Array(Number(number))].map((_, i) => (
// // // // // // // // // //           <div 
// // // // // // // // // //             key={i} 
// // // // // // // // // //             className={`${styles.cube} ${i < visualization.reduce((a, b) => a + b, 0) ? styles.filled : ''}`}
// // // // // // // // // //           >{i+1}</div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default BaseVisualizer;
// // // // // // // // // 'use client'
// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import styles from './BaseVisualizer.module.css';

// // // // // // // // // const BaseVisualizer = () => {
// // // // // // // // //   const [number, setNumber] = useState('');
// // // // // // // // //   const [base, setBase] = useState('');
// // // // // // // // //   const [visualization, setVisualization] = useState([]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (number !== '' && base !== '' && !isNaN(number) && !isNaN(base)) {
// // // // // // // // //       const num = parseInt(number);
// // // // // // // // //       const b = parseInt(base);
// // // // // // // // //       if (b >= 2 && b <= 36) {
// // // // // // // // //         const converted = num.toString(b);
// // // // // // // // //         const newVisualization = converted.split('').map(digit => parseInt(digit, b));
// // // // // // // // //         setVisualization(newVisualization);
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   }, [number, base]);

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.container}>
// // // // // // // // //       <h1>Number Base Converter and Visualizer</h1>
// // // // // // // // //       <div className={styles.controls}>
// // // // // // // // //         <input 
// // // // // // // // //           type="number"
// // // // // // // // //           value={number}
// // // // // // // // //           onChange={(e) => setNumber(e.target.value)}
// // // // // // // // //           placeholder="Enter a number (decimal)"
// // // // // // // // //         />
// // // // // // // // //         <input 
// // // // // // // // //           type="number"
// // // // // // // // //           value={base}
// // // // // // // // //           onChange={(e) => setBase(e.target.value)}
// // // // // // // // //           placeholder="Enter a base (2-36)"
// // // // // // // // //           min="2"
// // // // // // // // //           max="36"
// // // // // // // // //         />
// // // // // // // // //       </div>
// // // // // // // // //       <div className={styles.result}>
// // // // // // // // //         {number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 &&
// // // // // // // // //           `${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`
// // // // // // // // //         }
// // // // // // // // //       </div>
// // // // // // // // //       <div className={styles.visualizationContainer}>
// // // // // // // // //         <div className={styles.originalStructure}>
// // // // // // // // //           {[...Array(Number(number)?Number(number):0)].map((_, i) => (
// // // // // // // // //             <div
// // // // // // // // //               key={i}
// // // // // // // // //               className={styles.cube}
// // // // // // // // //             >{i+1}</div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //         <div className={styles.resultingStructure}>
// // // // // // // // //           {visualization.map((digit, groupIndex) => (
// // // // // // // // //             <div key={groupIndex} className={styles.group}>
// // // // // // // // //               {[...Array(digit)].map((_, i) => (
// // // // // // // // //                 <div
// // // // // // // // //                   key={i}
// // // // // // // // //                   className={`${styles.cube} ${styles.filled}`}
// // // // // // // // //                 ></div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default BaseVisualizer;
// // // // // // // // 'use client'
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import styles from './BaseVisualizer.module.css';

// // // // // // // // const BaseVisualizer = () => {
// // // // // // // //   const [number, setNumber] = useState('');
// // // // // // // //   const [base, setBase] = useState('');
// // // // // // // //   const [visualization, setVisualization] = useState([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (number !== '' && base !== '' && !isNaN(number) && !isNaN(base)) {
// // // // // // // //       const num = parseInt(number);
// // // // // // // //       const b = parseInt(base);
// // // // // // // //       if (b >= 2 && b <= 36) {
// // // // // // // //         const converted = num.toString(b);
// // // // // // // //         const newVisualization = converted.split('').map(digit => parseInt(digit, b));
// // // // // // // //         setVisualization(newVisualization);
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   }, [number, base]);

// // // // // // // //   const renderGrid = (filled) => {
// // // // // // // //     return (
// // // // // // // //       <div className={styles.grid}>
// // // // // // // //         {[...Array(100)].map((_, i) => (
// // // // // // // //           <div
// // // // // // // //             key={i}
// // // // // // // //             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
// // // // // // // //           ></div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.container}>
// // // // // // // //       <h1>Number Base Converter and Visualizer</h1>
// // // // // // // //       <div className={styles.controls}>
// // // // // // // //         <input 
// // // // // // // //           type="number"
// // // // // // // //           value={number}
// // // // // // // //           onChange={(e) => setNumber(e.target.value)}
// // // // // // // //           placeholder="Enter a number (0-100)"
// // // // // // // //           min="0"
// // // // // // // //           max="100"
// // // // // // // //         />
// // // // // // // //         <input 
// // // // // // // //           type="number"
// // // // // // // //           value={base}
// // // // // // // //           onChange={(e) => setBase(e.target.value)}
// // // // // // // //           placeholder="Enter a base (2-36)"
// // // // // // // //           min="2"
// // // // // // // //           max="36"
// // // // // // // //         />
// // // // // // // //       </div>
// // // // // // // //       <div className={styles.result}>
// // // // // // // //         {number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 &&
// // // // // // // //           `${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`
// // // // // // // //         }
// // // // // // // //       </div>
// // // // // // // //       <div className={styles.visualizationContainer}>
// // // // // // // //         <div className={styles.originalStructure}>
// // // // // // // //           {renderGrid(Number(number)?Number(number):0)}
// // // // // // // //         </div>
// // // // // // // //         <div className={styles.resultingStructure}>
// // // // // // // //           {renderGrid(visualization.reduce((a, b) => a + b, 0))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default BaseVisualizer;
// // // // // // // 'use client'
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import styles from './BaseVisualizer.module.css';

// // // // // // // const BaseVisualizer = () => {
// // // // // // //   const [number, setNumber] = useState('');
// // // // // // //   const [base, setBase] = useState('');
// // // // // // //   const [visualization, setVisualization] = useState([]);
// // // // // // //   const [error, setError] = useState('');

// // // // // // //   useEffect(() => {
// // // // // // //     setError('');
// // // // // // //     if (number !== '' && base !== '' && !isNaN(number) && !isNaN(base)) {
// // // // // // //       const num = parseInt(number);
// // // // // // //       const b = parseInt(base);
// // // // // // //       if (num > 100) {
// // // // // // //         setError('Number must be 100 or less');
// // // // // // //         return;
// // // // // // //       }
// // // // // // //       if (b >= 2 && b <= 36) {
// // // // // // //         const converted = num.toString(b);
// // // // // // //         const newVisualization = converted.split('').map(digit => parseInt(digit, b));
// // // // // // //         setVisualization(newVisualization);
// // // // // // //       } else {
// // // // // // //         setError('Base must be between 2 and 36');
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }, [number, base]);

// // // // // // //   const renderGrid = (filled) => {
// // // // // // //     return (
// // // // // // //       <div className={styles.grid}>
// // // // // // //         {[...Array(100)].map((_, i) => (
// // // // // // //           <div
// // // // // // //             key={i}
// // // // // // //             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
// // // // // // //           >{i+1}</div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       <h1>Number Base Converter and Visualizer</h1>
// // // // // // //       <div className={styles.controls}>
// // // // // // //         <input 
// // // // // // //           type="number"
// // // // // // //           value={number}
// // // // // // //           onChange={(e) => setNumber(e.target.value)}
// // // // // // //           placeholder="Enter a number (0-100)"
// // // // // // //           min="0"
// // // // // // //           max="100"
// // // // // // //         />
// // // // // // //         <input 
// // // // // // //           type="number"
// // // // // // //           value={base}
// // // // // // //           onChange={(e) => setBase(e.target.value)}
// // // // // // //           placeholder="Enter a base (2-36)"
// // // // // // //           min="2"
// // // // // // //           max="36"
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <div className={styles.visualizationContainer}>
// // // // // // //         <div className={styles.originalStructure}>
// // // // // // //           {renderGrid(Number(number) > 100 ? 100 : Number(number))}
// // // // // // //         </div>
// // // // // // //         <div className={styles.resultingStructure}>
// // // // // // //           {renderGrid(visualization.reduce((a, b) => a + b, 0))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div className={styles.messageContainer}>
// // // // // // //         {error ? (
// // // // // // //           <div className={styles.error}>{error}</div>
// // // // // // //         ) : (
// // // // // // //           number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
// // // // // // //             <div className={styles.result}>
// // // // // // //               {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
// // // // // // //             </div>
// // // // // // //           )
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default BaseVisualizer;
// // // // // // 'use client'
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import styles from './BaseVisualizer.module.css';

// // // // // // const BaseVisualizer = () => {
// // // // // //   const [number, setNumber] = useState('');
// // // // // //   const [base, setBase] = useState('');
// // // // // //   const [visualization, setVisualization] = useState([]);
// // // // // //   const [error, setError] = useState('');

// // // // // //   useEffect(() => {
// // // // // //     setError('');
// // // // // //     const num = Number(number) ? Number(number) : 0;
// // // // // //     const b = Number(base) ? Number(base) : 0;
    
// // // // // //     if (num > 100) {
// // // // // //       setError('Number must be 100 or less');
// // // // // //       return;
// // // // // //     }
// // // // // //     if (b >= 2 && b <= 36) {
// // // // // //       const converted = num.toString(b);
// // // // // //       const newVisualization = converted.split('').reverse().map((digit, index) => ({
// // // // // //         power: index,
// // // // // //         count: parseInt(digit, b)
// // // // // //       }));
// // // // // //       setVisualization(newVisualization);
// // // // // //     } else if (b !== 0) {
// // // // // //       setError('Base must be between 2 and 36');
// // // // // //     }
// // // // // //   }, [number, base]);

// // // // // //   const renderGrid = (filled) => {
// // // // // //     return (
// // // // // //       <div className={styles.grid}>
// // // // // //         {[...Array(100)].map((_, i) => (
// // // // // //           <div
// // // // // //             key={i}
// // // // // //             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
// // // // // //           ></div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   const renderResultStructure = () => {
// // // // // //     return (
// // // // // //       <div className={styles.resultStructure}>
// // // // // //         {visualization.map(({ power, count }) => (
// // // // // //           <div key={power} className={styles.powerGroup}>
// // // // // //             <div className={styles.powerLabel}>{base}<sup>{power}</sup></div>
// // // // // //             <div className={styles.powerCubes}>
// // // // // //               {[...Array(count)].map((_, i) => (
// // // // // //                 <div key={i} className={styles.cube} />
// // // // // //               ))}
// // // // // //             </div>
// // // // // //             <div className={styles.powerCount}>× {count}</div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <h1>Number Base Converter and Visualizer</h1>
// // // // // //       <div className={styles.controls}>
// // // // // //         <input 
// // // // // //           type="number"
// // // // // //           value={number}
// // // // // //           onChange={(e) => setNumber(e.target.value)}
// // // // // //           placeholder="Enter a number (0-100)"
// // // // // //           min="0"
// // // // // //           max="100"
// // // // // //         />
// // // // // //         <input 
// // // // // //           type="number"
// // // // // //           value={base}
// // // // // //           onChange={(e) => setBase(e.target.value)}
// // // // // //           placeholder="Enter a base (2-36)"
// // // // // //           min="2"
// // // // // //           max="36"
// // // // // //         />
// // // // // //       </div>
// // // // // //       <div className={styles.visualizationContainer}>
// // // // // //         <div className={styles.originalStructure}>
// // // // // //           {renderGrid(Number(number) > 100 ? 100 : Number(number))}
// // // // // //         </div>
// // // // // //         {renderResultStructure()}
// // // // // //       </div>
// // // // // //       <div className={styles.messageContainer}>
// // // // // //         {error ? (
// // // // // //           <div className={styles.error}>{error}</div>
// // // // // //         ) : (
// // // // // //           number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
// // // // // //             <div className={styles.result}>
// // // // // //               {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
// // // // // //             </div>
// // // // // //           )
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default BaseVisualizer;
// // // // // 'use client'
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import styles from './BaseVisualizer.module.css';

// // // // // const BaseVisualizer = () => {
// // // // //   const [number, setNumber] = useState('');
// // // // //   const [base, setBase] = useState('');
// // // // //   const [visualization, setVisualization] = useState([]);
// // // // //   const [error, setError] = useState('');

// // // // //   useEffect(() => {
// // // // //     setError('');
// // // // //     const num = Number(number) ? Number(number) : 0;
// // // // //     const b = Number(base) ? Number(base) : 0;
    
// // // // //     if (num > 100) {
// // // // //       setError('Number must be 100 or less');
// // // // //       return;
// // // // //     }
// // // // //     if (b >= 2 && b <= 36) {
// // // // //       const converted = num.toString(b);
// // // // //       const newVisualization = converted.split('').reverse().map((digit, index) => ({
// // // // //         power: index,
// // // // //         count: parseInt(digit, b)
// // // // //       }));
// // // // //       setVisualization(newVisualization);
// // // // //     } else if (b !== 0) {
// // // // //       setError('Base must be between 2 and 36');
// // // // //     }
// // // // //   }, [number, base]);

// // // // //   const renderGrid = (filled) => {
// // // // //     return (
// // // // //       <div className={styles.grid}>
// // // // //         {[...Array(100)].map((_, i) => (
// // // // //           <div
// // // // //             key={i}
// // // // //             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
// // // // //           ></div>
// // // // //         ))}
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   const renderResultStructure = () => {
// // // // //     const b = Number(base) ? Number(base) : 0;
// // // // //     let remainingCubes = Number(number) ? Number(number) : 0;

// // // // //     return (
// // // // //       <div className={styles.resultStructure}>
// // // // //         {[...visualization].reverse().map(({ power, count }) => {
// // // // //           const groupSize = Math.pow(b, power);
// // // // //           const cubesInThisGroup = count * groupSize;
// // // // //           remainingCubes -= cubesInThisGroup;

// // // // //           return (
// // // // //             <div key={power} className={styles.powerGroup}>
// // // // //               <div className={styles.powerLabel}>{base}<sup>{power}</sup></div>
// // // // //               <div className={styles.powerCubes}>
// // // // //                 {[...Array(count)].map((_, groupIndex) => (
// // // // //                   <div key={groupIndex} className={styles.cubeGroup}>
// // // // //                     {[...Array(groupSize)].map((_, cubeIndex) => (
// // // // //                       <div key={cubeIndex} className={`${styles.cube} ${styles.filled}`} />
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <div className={styles.powerCount}>× {count}</div>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //         {remainingCubes > 0 && (
// // // // //           <div className={styles.powerGroup}>
// // // // //             <div className={styles.powerLabel}>Remainder</div>
// // // // //             <div className={styles.powerCubes}>
// // // // //               {[...Array(remainingCubes)].map((_, i) => (
// // // // //                 <div key={i} className={`${styles.cube} ${styles.filled}`} />
// // // // //               ))}
// // // // //             </div>
// // // // //             <div className={styles.powerCount}>× {remainingCubes}</div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <h1>Number Base Converter and Visualizer</h1>
// // // // //       <div className={styles.controls}>
// // // // //         <input 
// // // // //           type="number"
// // // // //           value={number}
// // // // //           onChange={(e) => setNumber(e.target.value)}
// // // // //           placeholder="Enter a number (0-100)"
// // // // //           min="0"
// // // // //           max="100"
// // // // //         />
// // // // //         <input 
// // // // //           type="number"
// // // // //           value={base}
// // // // //           onChange={(e) => setBase(e.target.value)}
// // // // //           placeholder="Enter a base (2-36)"
// // // // //           min="2"
// // // // //           max="36"
// // // // //         />
// // // // //       </div>
// // // // //       <div className={styles.visualizationContainer}>
// // // // //         <div className={styles.originalStructure}>
// // // // //           {renderGrid(Number(number) > 100 ? 100 : Number(number))}
// // // // //         </div>
// // // // //         {renderResultStructure()}
// // // // //       </div>
// // // // //       <div className={styles.messageContainer}>
// // // // //         {error ? (
// // // // //           <div className={styles.error}>{error}</div>
// // // // //         ) : (
// // // // //           number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
// // // // //             <div className={styles.result}>
// // // // //               {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
// // // // //             </div>
// // // // //           )
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BaseVisualizer;
// // // // 'use client'
// // // // import React, { useState, useEffect } from 'react';
// // // // import styles from './BaseVisualizer.module.css';

// // // // const BaseVisualizer = () => {
// // // //   const [number, setNumber] = useState('');
// // // //   const [base, setBase] = useState('');
// // // //   const [visualization, setVisualization] = useState([]);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     setError('');
// // // //     const num = Number(number) ? Number(number) : 0;
// // // //     const b = Number(base) ? Number(base) : 0;
    
// // // //     if (num > 100) {
// // // //       setError('Number must be 100 or less');
// // // //       return;
// // // //     }
// // // //     if (b >= 2 && b <= 36) {
// // // //       const converted = num.toString(b);
// // // //       const newVisualization = converted.split('').reverse().map((digit, index) => ({
// // // //         power: index,
// // // //         count: parseInt(digit, b)
// // // //       }));
// // // //       setVisualization(newVisualization);
// // // //     } else if (b !== 0) {
// // // //       setError('Base must be between 2 and 36');
// // // //     }
// // // //   }, [number, base]);

// // // //   const renderGrid = (filled, size = 100) => {
// // // //     return (
// // // //       <div className={`${styles.grid} ${size < 100 ? styles.smallGrid : ''}`}>
// // // //         {[...Array(size)].map((_, i) => (
// // // //           <div
// // // //             key={i}
// // // //             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
// // // //           ></div>
// // // //         ))}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   const renderResultStructure = () => {
// // // //     const b = Number(base) ? Number(base) : 0;
// // // //     let remainingCubes = Number(number) ? Number(number) : 0;

// // // //     return (
// // // //       <div className={styles.resultStructure}>
// // // //         {[...visualization].reverse().map(({ power, count }) => {
// // // //           const groupSize = Math.pow(b, power);
// // // //           const cubesInThisGroup = count * groupSize;
// // // //           remainingCubes -= cubesInThisGroup;

// // // //           return (
// // // //             <div key={power} className={styles.powerGroup}>
// // // //               <div className={styles.powerLabel}>{base}<sup>{power}</sup></div>
// // // //               <div className={styles.powerCubes}>
// // // //                 {[...Array(count)].map((_, groupIndex) => (
// // // //                   <div key={groupIndex} className={styles.cubeGroup}>
// // // //                     {renderGrid(groupSize, groupSize)}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               <div className={styles.powerCount}>× {count}</div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //         {remainingCubes > 0 && (
// // // //           <div className={styles.powerGroup}>
// // // //             <div className={styles.powerLabel}>Remainder</div>
// // // //             <div className={styles.powerCubes}>
// // // //               {renderGrid(remainingCubes, remainingCubes)}
// // // //             </div>
// // // //             <div className={styles.powerCount}>× 1</div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <h1>Number Base Converter and Visualizer</h1>
// // // //       <div className={styles.controls}>
// // // //         <input 
// // // //           type="number"
// // // //           value={number}
// // // //           onChange={(e) => setNumber(e.target.value)}
// // // //           placeholder="Enter a number (0-100)"
// // // //           min="0"
// // // //           max="100"
// // // //         />
// // // //         <input 
// // // //           type="number"
// // // //           value={base}
// // // //           onChange={(e) => setBase(e.target.value)}
// // // //           placeholder="Enter a base (2-36)"
// // // //           min="2"
// // // //           max="36"
// // // //         />
// // // //       </div>
// // // //       <div className={styles.visualizationContainer}>
// // // //         <div className={styles.originalStructure}>
// // // //           {renderGrid(Number(number) > 100 ? 100 : Number(number))}
// // // //         </div>
// // // //         {renderResultStructure()}
// // // //       </div>
// // // //       <div className={styles.messageContainer}>
// // // //         {error ? (
// // // //           <div className={styles.error}>{error}</div>
// // // //         ) : (
// // // //           number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
// // // //             <div className={styles.result}>
// // // //               {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
// // // //             </div>
// // // //           )
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BaseVisualizer;
// // // 'use client'
// // // import React, { useState, useEffect } from 'react';
// // // import styles from './BaseVisualizer.module.css';

// // // const BaseVisualizer = () => {
// // //   const [number, setNumber] = useState('');
// // //   const [base, setBase] = useState('');
// // //   const [visualization, setVisualization] = useState([]);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     setError('');
// // //     const num = Number(number) ? Number(number) : 0;
// // //     const b = Number(base) ? Number(base) : 0;
    
// // //     if (num > 100) {
// // //       setError('Number must be 100 or less');
// // //       return;
// // //     }
// // //     if (b >= 2 && b <= 36) {
// // //       const converted = num.toString(b);
// // //       const newVisualization = converted.split('').reverse().map((digit, index) => ({
// // //         power: index,
// // //         count: parseInt(digit, b)
// // //       }));
// // //       setVisualization(newVisualization);
// // //     } else if (b !== 0) {
// // //       setError('Base must be between 2 and 36');
// // //     }
// // //   }, [number, base]);

// // //   const renderGrid = (filled) => {
// // //     return (
// // //       <div className={styles.grid}>
// // //         {[...Array(100)].map((_, i) => (
// // //           <div
// // //             key={i}
// // //             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
// // //           ></div>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   const renderCubes = (count) => {
// // //     return (
// // //       <div className={styles.cubeRow}>
// // //         {[...Array(count)].map((_, i) => (
// // //           <div key={i} className={`${styles.cube} ${styles.filled}`}></div>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   const renderResultStructure = () => {
// // //     const b = Number(base) ? Number(base) : 0;
// // //     let remainingCubes = Number(number) ? Number(number) : 0;

// // //     return (
// // //       <div className={styles.resultStructure}>
// // //         {[...visualization].reverse().map(({ power, count }) => {
// // //           const groupSize = Math.pow(b, power);
// // //           const cubesInThisGroup = count * groupSize;
// // //           remainingCubes -= cubesInThisGroup;

// // //           return (
// // //             <div key={power} className={styles.powerGroup}>
// // //               <div className={styles.powerLabel}>{base}<sup>{power}</sup></div>
// // //               {renderCubes(cubesInThisGroup)}
// // //               <div className={styles.powerCount}>× {count}</div>
// // //             </div>
// // //           );
// // //         })}
// // //         {remainingCubes > 0 && (
// // //           <div className={styles.powerGroup}>
// // //             <div className={styles.powerLabel}>Remainder</div>
// // //             {renderCubes(remainingCubes)}
// // //             <div className={styles.powerCount}>× 1</div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className={styles.container}>
// // //       <h1>Number Base Converter and Visualizer</h1>
// // //       <div className={styles.controls}>
// // //         <input 
// // //           type="number"
// // //           value={number}
// // //           onChange={(e) => setNumber(e.target.value)}
// // //           placeholder="Enter a number (0-100)"
// // //           min="0"
// // //           max="100"
// // //         />
// // //         <input 
// // //           type="number"
// // //           value={base}
// // //           onChange={(e) => setBase(e.target.value)}
// // //           placeholder="Enter a base (2-36)"
// // //           min="2"
// // //           max="36"
// // //         />
// // //       </div>
// // //       <div className={styles.visualizationContainer}>
// // //         <div className={styles.originalStructure}>
// // //           {renderGrid(Number(number) > 100 ? 100 : Number(number))}
// // //         </div>
// // //         {renderResultStructure()}
// // //       </div>
// // //       <div className={styles.messageContainer}>
// // //         {error ? (
// // //           <div className={styles.error}>{error}</div>
// // //         ) : (
// // //           number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
// // //             <div className={styles.result}>
// // //               {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
// // //             </div>
// // //           )
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BaseVisualizer;
// // 'use client'
// // import React, { useState, useEffect } from 'react';
// // import styles from './BaseVisualizer.module.css';

// // const BaseVisualizer = () => {
// //   const [number, setNumber] = useState('');
// //   const [base, setBase] = useState('');
// //   const [visualization, setVisualization] = useState([]);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     setError('');
// //     const num = Number(number) ? Number(number) : 0;
// //     const b = Number(base) ? Number(base) : 0;
    
// //     if (num > 100) {
// //       setError('Number must be 100 or less');
// //       return;
// //     }
// //     if (b >= 2 && b <= 36) {
// //       const converted = num.toString(b);
// //       const newVisualization = converted.split('').reverse().map((digit, index) => ({
// //         power: index,
// //         count: parseInt(digit, b)
// //       }));
// //       setVisualization(newVisualization);
// //     } else if (b !== 0) {
// //       setError('Base must be between 2 and 36');
// //     }
// //   }, [number, base]);

// //   const renderGrid = (filled) => {
// //     return (
// //       <div className={styles.grid}>
// //         {[...Array(100)].map((_, i) => (
// //           <div
// //             key={i}
// //             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
// //           ></div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   const renderCubes = (count) => {
// //     return (
// //       <div className={styles.cubeRow}>
// //         {[...Array(count)].map((_, i) => (
// //           <div key={i} className={`${styles.cube} ${styles.filled}`}></div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   const renderResultStructure = () => {
// //     const b = Number(base) ? Number(base) : 0;
// //     let remainingCubes = Number(number) ? Number(number) : 0;

// //     return (
// //       <div className={styles.resultStructure}>
// //         {[...visualization].reverse().map(({ power, count }) => {
// //           const groupSize = Math.pow(b, power);
// //           const cubesInThisGroup = count * groupSize;
// //           remainingCubes -= cubesInThisGroup;

// //           return (
// //             <div key={power} className={styles.powerGroup}>
// //               <div className={styles.powerLabel}>
// //                 {base}<sup>{power}</sup>({groupSize})
// //               </div>
// //               {renderCubes(cubesInThisGroup)}
// //               <div className={styles.powerCount}>×{count}</div>
// //             </div>
// //           );
// //         })}
// //         {remainingCubes > 0 && (
// //           <div className={styles.powerGroup}>
// //             <div className={styles.powerLabel}>Remainder</div>
// //             {renderCubes(remainingCubes)}
// //             <div className={styles.powerCount}>×1</div>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h1>Number Base Converter and Visualizer</h1>
// //       <div className={styles.controls}>
// //         <input 
// //           type="number"
// //           value={number}
// //           onChange={(e) => setNumber(e.target.value)}
// //           placeholder="Enter a number (0-100)"
// //           min="0"
// //           max="100"
// //         />
// //         <input 
// //           type="number"
// //           value={base}
// //           onChange={(e) => setBase(e.target.value)}
// //           placeholder="Enter a base (2-36)"
// //           min="2"
// //           max="36"
// //         />
// //       </div>
// //       <div className={styles.visualizationContainer}>
// //         <div className={styles.originalStructure}>
// //           {renderGrid(Number(number) > 100 ? 100 : Number(number))}
// //         </div>
// //         {renderResultStructure()}
// //       </div>
// //       <div className={styles.messageContainer}>
// //         {error ? (
// //           <div className={styles.error}>{error}</div>
// //         ) : (
// //           number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
// //             <div className={styles.result}>
// //               {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
// //             </div>
// //           )
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BaseVisualizer;
// 'use client'
// import React, { useState, useEffect } from 'react';
// import styles from './BaseVisualizer.module.css';

// const BaseVisualizer = () => {
//   const [number, setNumber] = useState('');
//   const [base, setBase] = useState('');
//   const [visualization, setVisualization] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     setError('');
//     const num = Number(number) ? Number(number) : 0;
//     const b = Number(base) ? Number(base) : 0;
    
//     if (num > 100) {
//       setError('Number must be 100 or less');
//       return;
//     }
//     if (b >= 2 && b <= 36) {
//       const converted = num.toString(b);
//       const newVisualization = converted.split('').reverse().map((digit, index) => ({
//         power: index,
//         count: parseInt(digit, b)
//       }));
//       setVisualization(newVisualization);
//     } else if (b !== 0) {
//       setError('Base must be between 2 and 36');
//     }
//   }, [number, base]);

//   const renderGrid = (filled) => {
//     return (
//       <div className={styles.grid}>
//         {[...Array(100)].map((_, i) => (
//           <div
//             key={i}
//             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
//           ></div>
//         ))}
//       </div>
//     );
//   };

//   const renderCubes = (count) => {
//     return (
//       <div className={styles.cubeRow}>
//         {[...Array(count)].map((_, i) => (
//           <div key={i} className={`${styles.cube} ${styles.filled}`}></div>
//         ))}
//       </div>
//     );
//   };

//   const renderResultStructure = () => {
//     const b = Number(base) ? Number(base) : 0;
//     let remainingCubes = Number(number) ? Number(number) : 0;

//     if (b === 0 || remainingCubes === 0) return null;

//     return (
//       <div className={styles.resultStructure}>
//         {[...visualization].reverse().map(({ power, count }) => {
//           const groupSize = Math.pow(b, power);
//           const cubesInThisGroup = count * groupSize;
//           remainingCubes -= cubesInThisGroup;

//           return (
//             <div key={power} className={styles.powerGroup}>
//               <div className={styles.powerLabel}>
//                 {base}<sup>{power}</sup>({groupSize})
//               </div>
//               {renderCubes(cubesInThisGroup)}
//               <div className={styles.powerCount}>×{count}</div>
//             </div>
//           );
//         })}
//         {remainingCubes > 0 && (
//           <div className={styles.powerGroup}>
//             <div className={styles.powerLabel}>Remainder</div>
//             {renderCubes(remainingCubes)}
//             <div className={styles.powerCount}>×1</div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Number Base Converter and Visualizer</h1>
//       <div className={styles.controls}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="number">Number:</label>
//           <input 
//             id="number"
//             type="number"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             placeholder="Enter a number (0-100)"
//             min="0"
//             max="100"
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor="base">Base:</label>
//           <input 
//             id="base"
//             type="number"
//             value={base}
//             onChange={(e) => setBase(e.target.value)}
//             placeholder="Enter a base (2-36)"
//             min="2"
//             max="36"
//           />
//         </div>
//       </div>
//       <div className={styles.visualizationContainer}>
//         <div className={styles.originalStructure}>
//           {renderGrid(Number(number) > 100 ? 100 : Number(number))}
//         </div>
//         {renderResultStructure()}
//       </div>
//       <div className={styles.messageContainer}>
//         {error ? (
//           <div className={styles.error}>{error}</div>
//         ) : (
//           number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
//             <div className={styles.result}>
//               {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default BaseVisualizer;
'use client'
import React, { useState, useEffect } from 'react';
import styles from './BaseVisualizer.module.css';

const BaseVisualizer = () => {
  const [number, setNumber] = useState('');
  const [base, setBase] = useState('');
  const [visualization, setVisualization] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    const num = Number(number) ? Number(number) : 0;
    const b = Number(base) ? Number(base) : 0;
    
    if (num > 144) {
      setError('Number must be 144 or less');
      return;
    }
    if (b >= 2 && b <= 36) {
      const converted = num.toString(b);
      const newVisualization = converted.split('').reverse().map((digit, index) => ({
        power: index,
        count: parseInt(digit, b)
      }));
      setVisualization(newVisualization);
    } else if (b !== 0) {
      setError('Base must be between 2 and 36');
    }
  }, [number, base]);

  const renderGrid = (filled) => {
    return (
      <div className={styles.grid}>
        {[...Array(144)].map((_, i) => (
          <div
            key={i}
            className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
          ></div>
        ))}
      </div>
    );
  };


  const renderDots = (count, groupSize) => {
    return (
      <div className={styles.dotGroup}>
        {[...Array(count)].map((_, groupIndex) => (
          <div key={groupIndex} className={styles.dotRow}>
            {[...Array(groupSize)].map((_, dotIndex) => (
              <div key={dotIndex} className={styles.dot}></div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  const renderResultStructure = () => {
    const b = Number(base) ? Number(base) : 0;
    let remainingDots = Number(number) ? Number(number) : 0;
  
    if (b === 0 || remainingDots === 0) return null;
  
    return (
      <div className={styles.resultStructure}>
        {[...visualization].reverse().map(({ power, count }) => {
          const groupSize = Math.pow(b, power);
  
          return (
            <div key={power} className={styles.powerGroup}>
              <div className={styles.powerLabel}>
                {base}<sup>{power}</sup>({groupSize})
              </div>
              {renderDots(count, groupSize)}
              <div className={styles.powerCount}>×{count}</div>
            </div>
          );
        })}
      </div>
    );
  };


//   const renderDots = (count, groupSize) => {
//   return (
//     <div className={styles.dotGroup}>
//       {[...Array(count)].map((_, groupIndex) => (
//         <div key={groupIndex} className={styles.dotRow}>
//           {[...Array(groupSize)].map((_, dotIndex) => (
//             <div key={dotIndex} className={styles.dot}></div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// const renderResultStructure = () => {
//   const b = Number(base) ? Number(base) : 0;
//   let remainingDots = Number(number) ? Number(number) : 0;

//   if (b === 0 || remainingDots === 0) return null;

//   return (
//     <div className={styles.resultStructure}>
//       {[...visualization].reverse().map(({ power, count }) => {
//         const groupSize = Math.pow(b, power);
//         const dotsInThisGroup = count * groupSize;
//         remainingDots -= dotsInThisGroup;

//         return (
//           <div key={power} className={styles.powerGroup}>
//             <div className={styles.powerLabel}>
//               {base}<sup>{power}</sup>({groupSize})
//             </div>
//             {renderDots(count, groupSize)}
//             <div className={styles.powerCount}>×{count}</div>
//           </div>
//         );
//       })}
//       {remainingDots > 0 && (
//         <div className={styles.powerGroup}>
//           <div className={styles.powerLabel}>Remainder</div>
//           {renderDots(1, remainingDots)}
//           <div className={styles.powerCount}>×1</div>
//         </div>
//       )}
//     </div>
//   );
// };

//   const renderDots = (count) => {
//     return (
//       <div className={styles.dotRow}>
//         {[...Array(count)].map((_, i) => (
//           <div key={i} className={styles.dot}></div>
//         ))}
//       </div>
//     );
//   };

//   const renderResultStructure = () => {
//     const b = Number(base) ? Number(base) : 0;
//     let remainingDots = Number(number) ? Number(number) : 0;

//     if (b === 0 || remainingDots === 0) return null;

//     return (
//       <div className={styles.resultStructure}>
//         {[...visualization].reverse().map(({ power, count }) => {
//           const groupSize = Math.pow(b, power);
//           const dotsInThisGroup = count * groupSize;
//           remainingDots -= dotsInThisGroup;

//           return (
//             <div key={power} className={styles.powerGroup}>
//               <div className={styles.powerLabel}>
//                 {base}<sup>{power}</sup>({groupSize})
//               </div>
             
//              {renderDots(dotsInThisGroup)}
            
//               <div className={styles.powerCount}>×{count}</div>
//             </div>
//           );
//         })}
//         {remainingDots > 0 && (
//           <div className={styles.powerGroup}>
//             <div className={styles.powerLabel}>Remainder</div>
//             {renderDots(remainingDots)}
//             <div className={styles.powerCount}>×1</div>
//           </div>
//         )}
//       </div>
//     );
//   };

  return (
    <div className={styles.container}>
      <h1>Number Base Converter and Visualizer</h1>
      <div className={styles.controls}>
        <div className={styles.inputGroup}>
          <label htmlFor="number">Number:</label>
          <input 
            id="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="0-144"
            min="0"
            max="144"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="base">Base:</label>
          <input 
            id="base"
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="2-36"
            min="2"
            max="36"
          />
        </div>
      </div>
      <div className={styles.visualizationContainer}>
        <div className={styles.originalStructure}>
          {renderGrid(Number(number) > 144 ? 144 : Number(number))}
        </div>
        <div className={styles.resultStructure}>
          {renderResultStructure()}
        </div>
      </div>
      <div className={styles.messageContainer}>
        {error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          number && base && !isNaN(number) && !isNaN(base) && parseInt(base) >= 2 && parseInt(base) <= 36 && (
            <div className={styles.result}>
              {`${number} in base ${base} is: ${parseInt(number).toString(parseInt(base))}`}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BaseVisualizer;