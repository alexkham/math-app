
import React, { useState, useEffect } from 'react';
import styles from './MatrixGenerator.module.css';
import { MatrixBracket } from './MatrixBracket';
import { processContent } from '../../utils/contentProcessor';

const defaultExplanations = {}; // Explanations object left empty as requested

const getPairKey = (i, j, size) => {
  const minIdx = Math.min(i, j);
  const maxIdx = Math.max(i, j);
  return (minIdx * size + maxIdx) % 5;
};

const MatrixCell = ({ value, row, col, matrixType, matrix, size }) => {
  const getHighlightClass = () => {
    switch (matrixType) {
      case 'identity':
      case 'scalar':
      case 'diagonal':
        return row === col ? styles.highlighted : '';
        
      case 'upperTriangular':
        return col >= row ? styles.highlighted : '';
        
      case 'lowerTriangular':
        return col <= row ? styles.highlighted : '';
        
      case 'symmetric':
        if (row === col) return styles.highlightDiagonal;
        if (matrix && matrix[row][col] === matrix[col][row]) {
          const pairKey = getPairKey(row, col, size);
          return styles[`pair${pairKey}`];
        }
        return '';
        
      case 'skewSymmetric':
        if (row === col) return '';
        if (matrix && matrix[row][col] === -matrix[col][row]) {
          const pairKey = getPairKey(row, col, size);
          return styles[`pair${pairKey}`];
        }
        return '';
        
      default:
        return '';
    }
  };

  return (
    <span className={`${styles.cell} ${getHighlightClass()}`}>
      {value}
    </span>
  );
};

const MatrixGenerator = ({ explanations = defaultExplanations }) => {
  const [size, setSize] = useState(3);
  const [matrix, setMatrix] = useState(null);
  const [matrixType, setMatrixType] = useState('random');

  const getRandomValue = () => Math.floor(Math.random() * 9) + 1;

  const generateMatrix = () => {
    let newMatrix;
    
    switch (matrixType) {
      case 'identity':
        newMatrix = Array(size).fill().map((_, i) => 
          Array(size).fill().map((_, j) => i === j ? 1 : 0)
        );
        break;
      case 'zero':
        newMatrix = Array(size).fill().map(() => Array(size).fill(0));
        break;
      case 'scalar':
        const scalar = getRandomValue();
        newMatrix = Array(size).fill().map((_, i) => 
          Array(size).fill().map((_, j) => i === j ? scalar : 0)
        );
        break;
      case 'diagonal':
        newMatrix = Array(size).fill().map((_, i) => 
          Array(size).fill().map((_, j) => i === j ? getRandomValue() : 0)
        );
        break;
      case 'upperTriangular':
        newMatrix = Array(size).fill().map((_, i) => 
          Array(size).fill().map((_, j) => j >= i ? getRandomValue() : 0)
        );
        break;
      case 'lowerTriangular':
        newMatrix = Array(size).fill().map((_, i) => 
          Array(size).fill().map((_, j) => j <= i ? getRandomValue() : 0)
        );
        break;
      case 'symmetric':
        newMatrix = Array(size).fill().map(() => Array(size).fill(0));
        for (let i = 0; i < size; i++) {
          for (let j = i; j < size; j++) {
            const value = getRandomValue();
            newMatrix[i][j] = value;
            newMatrix[j][i] = value;
          }
        }
        break;
      case 'skewSymmetric':
        newMatrix = Array(size).fill().map(() => Array(size).fill(0));
        for (let i = 0; i < size; i++) {
          for (let j = i + 1; j < size; j++) {
            const value = getRandomValue();
            newMatrix[i][j] = value;
            newMatrix[j][i] = -value;
          }
        }
        break;
      default:
        newMatrix = Array(size).fill().map(() => 
          Array(size).fill().map(() => getRandomValue())
        );
    }
    setMatrix(newMatrix);
  };

  useEffect(() => {
    generateMatrix();
  }, [size, matrixType]);

  // return (
  //   <div className={styles.container}>
  //     <span className={styles.instructions}>
  //       Welcome to the Matrix Type Visualizer! Select a matrix size and type to see different matrix structures. 
  //       The highlighted elements show the special characteristics of each matrix type. 
  //       Click 'Clear' to reset the current matrix.
  //     </span>

  //     <div className={styles.content}>
  //       <div className={styles.leftPanel}>
  //         <div className={styles.controls}>
  //           <div className={styles.controlGroup}>
  //             <label htmlFor="size-select">Matrix Size:</label>
  //             <select 
  //               id="size-select"
  //               value={size} 
  //               onChange={(e) => setSize(Number(e.target.value))}
  //             >
  //               {[2, 3, 4, 5].map(n => (
  //                 <option key={n} value={n}>{n}x{n}</option>
  //               ))}
  //             </select>
  //           </div>
   
  //           <div className={styles.controlGroup}>
  //             <label htmlFor="type-select">Matrix Type:</label>
  //             <select 
  //               id="type-select"
  //               value={matrixType} 
  //               onChange={(e) => setMatrixType(e.target.value)}
  //             >
  //               <option value="random">Random</option>
  //               <option value="identity">Identity</option>
  //               <option value="zero">Zero</option>
  //               <option value="scalar">Scalar</option>
  //               <option value="diagonal">Diagonal</option>
  //               <option value="upperTriangular">Upper Triangular</option>
  //               <option value="lowerTriangular">Lower Triangular</option>
  //               <option value="symmetric">Symmetric</option>
  //               <option value="skewSymmetric">Skew-symmetric</option>
  //             </select>
  //           </div>
   
  //           <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
  //             Clear
  //           </button>
  //         </div>
   
  //         {matrix && (
  //           <div className={styles.matrixDisplay}>
  //             <MatrixBracket size={size} type="left" />
  //             <div className={styles.matrixContent}>
  //               {matrix.map((row, i) => (
  //                 <div key={i} className={styles.matrixRow}>
  //                   {row.map((cell, j) => (
  //                     <MatrixCell
  //                       key={j}
  //                       value={cell}
  //                       row={i}
  //                       col={j}
  //                       matrixType={matrixType}
  //                       matrix={matrix}
  //                       size={size}
  //                     />
  //                   ))}
  //                 </div>
  //               ))}
  //             </div>
  //             <MatrixBracket size={size} type="right" />
  //           </div>
  //         )}
  //       </div>
   
  //       <div className={styles.explanationSection}>
  //         {matrix && explanations[matrixType] && (
  //           <>
  //             <h3 className={styles.title}>
  //               {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
  //             </h3>
  //             <div className={styles.description}>
  //               {processContent(explanations[matrixType].description)}
  //             </div>
  //             {explanations[matrixType].properties.length > 0 && (
  //               <div className={styles.properties}>
  //                 <h4>Key Properties:</h4>
  //                 <ul>
  //                   {explanations[matrixType].properties.map((prop, i) => (
  //                     <li key={i}>{processContent(prop)}</li>
  //                   ))}
  //                 </ul>
  //               </div>
  //             )}
  //             {explanations[matrixType].link && (
  //               <a 
  //                 href={explanations[matrixType].link}
  //                 className={styles.link}
  //                 rel="noopener noreferrer"
  //               >
  //                 Learn more →
  //               </a>
  //             )}
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <span className={styles.instructions}>
            Select a matrix size and type to see different matrix structures. 
            The highlighted elements show the special characteristics of each matrix type.
             Click  &apos;Clear&apos; to reset  the current matrix.
          </span>
  
          <div className={styles.controls}>
            <div className={styles.controlGroup}>
              <label htmlFor="size-select">Matrix Size:</label>
              <select 
                id="size-select"
                value={size} 
                onChange={(e) => setSize(Number(e.target.value))}
              >
                {[2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}x{n}</option>
                ))}
              </select>
            </div>
   
            <div className={styles.controlGroup}>
              <label htmlFor="type-select">Matrix Type:</label>
              <select 
                id="type-select"
                value={matrixType} 
                onChange={(e) => setMatrixType(e.target.value)}
              >
                <option value="random">Random</option>
                <option value="identity">Identity</option>
                <option value="zero">Zero</option>
                <option value="scalar">Scalar</option>
                <option value="diagonal">Diagonal</option>
                <option value="upperTriangular">Upper Triangular</option>
                <option value="lowerTriangular">Lower Triangular</option>
                <option value="symmetric">Symmetric</option>
                <option value="skewSymmetric">Skew-symmetric</option>
              </select>
            </div>
   
            <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
              Clear
            </button>
          </div>
   
          {matrix && (
            <div className={styles.matrixDisplay}>
              <MatrixBracket size={size} type="left" />
              <div className={styles.matrixContent}>
                {matrix.map((row, i) => (
                  <div key={i} className={styles.matrixRow}>
                    {row.map((cell, j) => (
                      <MatrixCell
                        key={j}
                        value={cell}
                        row={i}
                        col={j}
                        matrixType={matrixType}
                        matrix={matrix}
                        size={size}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <MatrixBracket size={size} type="right" />
            </div>
          )}
        </div>
       
   
        <div className={styles.explanationSection}>
          {matrix && explanations[matrixType] && (
            <>
              <h3 className={styles.title}>
                {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
              </h3>
              <div className={styles.description}>
                {processContent(explanations[matrixType].description)}
              </div>
              {explanations[matrixType].properties.length > 0 && (
                <div className={styles.properties}>
                  <h4>Key Properties:</h4>
                  <ul>
                    {explanations[matrixType].properties.map((prop, i) => (
                      <li key={i}>{processContent(prop)}</li>
                    ))}
                  </ul>
                </div>
              )}
              {explanations[matrixType].link && (
                <a 
                  href={explanations[matrixType].link}
                  className={styles.link}
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );


};

export default MatrixGenerator;