// 'use client'
// import React, { useState, useEffect } from 'react';
// import styles from './BaseVisualizer2.module.css';

// const BaseVisualizer2 = () => {
//   const [number, setNumber] = useState('');
//   const [base, setBase] = useState('');
//   const [visualization, setVisualization] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     setError('');
//     const num = Number(number) ? Number(number) : 0;
//     const b = Number(base) ? Number(base) : 0;
    
//     if (num > 144) {
//       setError('Number must be 144 or less');
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
//         {[...Array(144)].map((_, i) => (
//           <div
//             key={i}
//             className={`${styles.cube} ${i < filled ? styles.filled : ''}`}
//           > {i < filled ? i + 1 : ''}</div>
//         ))}
//       </div>
//     );
//   };

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

// //     if (b === 0 || remainingCubes === 0) return null;

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

 
// const renderCubes = (count, base) => {
//     // This will render exactly 'count' cubes.
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
//               <div className={styles.groupedCubes}>
//                 {/* Display 'count' groups, each group having 'groupSize' cubes */}
//                 {[...Array(count)].map((_, groupIndex) => (
//                   <div key={groupIndex} className={styles.group}>
//                     {renderCubes(groupSize, b)}
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.powerCount}>×{count}</div>
//             </div>
//           );
//         })}
//         {remainingCubes > 0 && (
//           <div className={styles.powerGroup}>
//             <div className={styles.powerLabel}>Remainder</div>
//             {renderCubes(remainingCubes, b)}
//             <div className={styles.powerCount}>×1</div>
//           </div>
//         )}
//       </div>
//     );
//   };


//   const handleReset = () => {
//     setNumber('');
//     setBase('');
//     setVisualization([]);
//     setError('');
//   };
  

// return (
//     <div className={styles.container}>
     
//       <div className={styles.controls}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="number">Number:</label>
//           <input 
//             id="number"
//             type="number"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             placeholder="0-144"
//             min="0"
//             max="144"
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor="base">Base:</label>
//           <input 
//             id="base"
//             type="number"
//             value={base}
//             onChange={(e) => setBase(e.target.value)}
//             placeholder="2-36"
//             min="2"
//             max="36"
//           />
//         </div>
//         {error && (
//           <div className={styles.error}>{error}</div>
//         ) }
//         <button className={styles.resetButton} onClick={handleReset}>Reset</button>
//       </div>
//       <div className={styles.visualizationContainer}>
//         <div className={styles.originalStructure}>
//           {renderGrid(Number(number) > 144 ? 0 : Number(number))}
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

// export default BaseVisualizer2;



'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './BaseVisualizer2.module.css';

const BaseVisualizer2 = () => {
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
          > {i < filled ? i + 1 : ''}</div>
        ))}
      </div>
    );
  };

  const renderCubes = (count, base) => {
    return (
      <div className={styles.cubeRow}>
        {[...Array(count)].map((_, i) => (
          <div key={i} className={`${styles.cube} ${styles.filled}`}></div>
        ))}
      </div>
    );
  };
  
  const renderResultStructure = () => {
    const b = Number(base) ? Number(base) : 0;
    let remainingCubes = Number(number) ? Number(number) : 0;
  
    if (b === 0 || remainingCubes === 0) return null;
  
    return (
      <div className={styles.resultStructure}>
        {[...visualization].reverse().map(({ power, count }) => {
          const groupSize = Math.pow(b, power);
          const cubesInThisGroup = count * groupSize;
          remainingCubes -= cubesInThisGroup;
  
          return (
            <div key={power} className={styles.powerGroup}>
              <div className={styles.powerLabel}>
                {base}<sup>{power}</sup>({groupSize})
              </div>
              <div className={styles.groupedCubes}>
                {[...Array(count)].map((_, groupIndex) => (
                  <div key={groupIndex} className={styles.group}>
                    {renderCubes(groupSize, b)}
                  </div>
                ))}
              </div>
              <div className={styles.powerCount}>×{count}</div>
            </div>
          );
        })}
        {remainingCubes > 0 && (
          <div className={styles.powerGroup}>
            <div className={styles.powerLabel}>Remainder</div>
            {renderCubes(remainingCubes, b)}
            <div className={styles.powerCount}>×1</div>
          </div>
        )}
      </div>
    );
  };

  const handleReset = () => {
    setNumber('');
    setBase('');
    setVisualization([]);
    setError('');
  };

  return (
    <div className={styles.container}>
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
        {error && (
          <div className={styles.error}>{error}</div>
        )}
        <button className={styles.resetButton} onClick={handleReset}>Reset</button>
      </div>
      
      <div className={styles.converterInfo}>
        <div className={styles.infoText}>
          This visual converter helps you understand base conversion through cube representations. 
          For larger numbers or pure calculation needs, use our 
          <Link href="/converters/base-converter" className={styles.converterLink}>
            Full Base Converter
          </Link> 
          which handles unlimited number sizes without visual constraints.
        </div>
      </div>

      <div className={styles.visualizationContainer}>
        <div className={styles.originalStructure}>
          {renderGrid(Number(number) > 144 ? 0 : Number(number))}
        </div>
        {renderResultStructure()}
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

export default BaseVisualizer2;