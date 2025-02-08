// // // // MatrixGenerator.jsx
// // // import React, { useState, useEffect } from 'react';
// // // import styles from './MatrixGenerator.module.css';
// // // import { MatrixBracket } from './MatrixBracket';

// // // const defaultExplanations = {
// // //   identity: {
// // //     description: "Square matrix with 1s on main diagonal and 0s elsewhere",
// // //     properties: ["A = I", "AA = A", "Symmetric"],
// // //     link: "https://en.wikipedia.org/wiki/Identity_matrix"
// // //   },
// // //   zero: {
// // //     description: "All elements are 0",
// // //     properties: ["A + 0 = A", "A × 0 = 0"],
// // //     link: "https://en.wikipedia.org/wiki/Zero_matrix"
// // //   },
// // //   scalar: {
// // //     description: "Diagonal matrix with same value λ on main diagonal",
// // //     properties: ["λI", "Commutes with all matrices"],
// // //     link: "https://en.wikipedia.org/wiki/Scalar_matrix"
// // //   },
// // //   diagonal: {
// // //     description: "Non-zero elements only on main diagonal",
// // //     properties: ["Easy to compute determinant", "Eigenvalues are diagonal elements"],
// // //     link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
// // //   },
// // //   upperTriangular: {
// // //     description: "All elements below main diagonal are 0",
// // //     properties: ["Determinant is product of diagonal elements"],
// // //     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
// // //   },
// // //   lowerTriangular: {
// // //     description: "All elements above main diagonal are 0", 
// // //     properties: ["Determinant is product of diagonal elements"],
// // //     link: null
// // //   },
// // //   symmetric: {
// // //     description: "Equal to its transpose (A = Aᵀ)",
// // //     properties: ["aᵢⱼ = aⱼᵢ", "Real eigenvalues"],
// // //     link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
// // //   },
// // //   skewSymmetric: {
// // //     description: "Negative of its transpose (A = -Aᵀ)",
// // //     properties: ["aᵢⱼ = -aⱼᵢ", "Main diagonal is zero"],
// // //     link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
// // //   },
// // //   random: {
// // //     description: "Matrix with random elements",
// // //     properties: [],
// // //     link: null
// // //   }
// // // };

// // // const MatrixGenerator = ({ explanations = defaultExplanations }) => {
// // //   const [size, setSize] = useState(3);
// // //   const [matrix, setMatrix] = useState(null);
// // //   const [matrixType, setMatrixType] = useState('random');

// // //   const getRandomValue = () => Math.floor(Math.random() * 9) + 1;

// // //   const generateMatrix = () => {
// // //     let newMatrix;
    
// // //     switch (matrixType) {
// // //       case 'identity':
// // //         newMatrix = Array(size).fill().map((_, i) => 
// // //           Array(size).fill().map((_, j) => i === j ? 1 : 0)
// // //         );
// // //         break;
// // //       case 'zero':
// // //         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
// // //         break;
// // //       case 'scalar':
// // //         const scalar = getRandomValue();
// // //         newMatrix = Array(size).fill().map((_, i) => 
// // //           Array(size).fill().map((_, j) => i === j ? scalar : 0)
// // //         );
// // //         break;
// // //       case 'diagonal':
// // //         newMatrix = Array(size).fill().map((_, i) => 
// // //           Array(size).fill().map((_, j) => i === j ? getRandomValue() : 0)
// // //         );
// // //         break;
// // //       case 'upperTriangular':
// // //         newMatrix = Array(size).fill().map((_, i) => 
// // //           Array(size).fill().map((_, j) => j >= i ? getRandomValue() : 0)
// // //         );
// // //         break;
// // //       case 'lowerTriangular':
// // //         newMatrix = Array(size).fill().map((_, i) => 
// // //           Array(size).fill().map((_, j) => j <= i ? getRandomValue() : 0)
// // //         );
// // //         break;
// // //       case 'symmetric':
// // //         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
// // //         for (let i = 0; i < size; i++) {
// // //           for (let j = i; j < size; j++) {
// // //             const value = getRandomValue();
// // //             newMatrix[i][j] = value;
// // //             newMatrix[j][i] = value;
// // //           }
// // //         }
// // //         break;
// // //       case 'skewSymmetric':
// // //         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
// // //         for (let i = 0; i < size; i++) {
// // //           for (let j = i + 1; j < size; j++) {
// // //             const value = getRandomValue();
// // //             newMatrix[i][j] = value;
// // //             newMatrix[j][i] = -value;
// // //           }
// // //         }
// // //         break;
// // //       default:
// // //         newMatrix = Array(size).fill().map(() => 
// // //           Array(size).fill().map(() => getRandomValue())
// // //         );
// // //     }
// // //     setMatrix(newMatrix);
// // //   };

// // //   useEffect(() => {
// // //     generateMatrix();
// // //   }, [size, matrixType]);

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.content}>
// // //         <div className={styles.explanationSection}>
// // //           {matrix && explanations[matrixType] && (
// // //             <>
// // //               <h3 className={styles.title}>
// // //                 {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
// // //               </h3>
// // //               <p className={styles.description}>
// // //                 {explanations[matrixType].description}
// // //               </p>
// // //               {explanations[matrixType].properties.length > 0 && (
// // //                 <ul className={styles.properties}>
// // //                   {explanations[matrixType].properties.map((prop, i) => (
// // //                     <li key={i}>{prop}</li>
// // //                   ))}
// // //                 </ul>
// // //               )}
// // //             </>
// // //           )}
// // //         </div>

// // //         <div className={styles.matrixSection}>
// // //           <div className={styles.controls}>
// // //             <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
// // //               {[2, 3, 4, 5].map(n => (
// // //                 <option key={n} value={n}>{n}x{n}</option>
// // //               ))}
// // //             </select>

// // //             <select value={matrixType} onChange={(e) => setMatrixType(e.target.value)}>
// // //               <option value="random">Random</option>
// // //               <option value="identity">Identity</option>
// // //               <option value="zero">Zero</option>
// // //               <option value="scalar">Scalar</option>
// // //               <option value="diagonal">Diagonal</option>
// // //               <option value="upperTriangular">Upper Triangular</option>
// // //               <option value="lowerTriangular">Lower Triangular</option>
// // //               <option value="symmetric">Symmetric</option>
// // //               <option value="skewSymmetric">Skew-symmetric</option>
// // //             </select>

// // //             <button onClick={() => setMatrix(null)}>Clear</button>
// // //           </div>

// // //           {matrix && (
// // //             <div className={styles.matrixDisplay}>
// // //               <MatrixBracket size={size} type="left" />
// // //               <div className={styles.matrixContent}>
// // //                 {matrix.map((row, i) => (
// // //                   <div key={i} className={styles.matrixRow}>
// // //                     {row.map((cell, j) => (
// // //                       <span key={j} className={styles.cell}>{cell}</span>
// // //                     ))}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <MatrixBracket size={size} type="right" />
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {matrix && explanations[matrixType]?.link && (
// // //         <a 
// // //           href={explanations[matrixType].link}
// // //           className={styles.link}
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn more
// // //         </a>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default MatrixGenerator;


// // import React, { useState, useEffect } from 'react';
// // import styles from './MatrixGenerator.module.css';
// // import { MatrixBracket } from './MatrixBracket';
// // import { processContent } from '../../utils/contentProcessor';

// // const defaultExplanations = {
// //   identity: {
// //     description: "Identity matrix is a special diagonal matrix where all diagonal entries are 1 and all other entries are 0. It's denoted as $I$ or $I_n$ where $n$ is the dimension.\n\nKey properties:\n- $AI=IA=A$ for any matrix $A$ of compatible size\n- $(I_n)^k = I_n$ for any positive integer $k$\n- $det(I_n) = 1$\n- All eigenvalues are 1\n- Both symmetric and orthogonal",
// //     properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
// //     link: "https://en.wikipedia.org/wiki/Identity_matrix"
// //   },
// //   zero: {
// //     description: "Zero matrix, denoted as $0$ or $0_{m×n}$, has all entries equal to 0. It's the additive identity in matrix algebra.\n\nKey properties:\n- $A + 0 = 0 + A = A$\n- $A0 = 0A = 0$\n- $det(0_n) = 0$ for square zero matrix\n- All eigenvalues are 0\n- Rank is 0",
// //     properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
// //     link: "https://en.wikipedia.org/wiki/Zero_matrix"
// //   },
// //   scalar: {
// //     description: "A scalar matrix is a diagonal matrix where all diagonal entries are equal to some scalar $λ$. It's a scalar multiple of the identity matrix: $λI$.\n\nKey properties:\n- Commutes with all matrices: $AS = SA$ for any matrix $A$\n- $det(λI_n) = λ^n$\n- All eigenvalues are $λ$\n- Both symmetric and diagonal",
// //     properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
// //     link: "https://en.wikipedia.org/wiki/Scalar_matrix"
// //   },
// //   diagonal: {
// //     description: "Diagonal matrix has non-zero elements only on the main diagonal. All off-diagonal elements are 0.\n\nKey properties:\n- Easy matrix operations (add/multiply element-wise on diagonal)\n- $det(D) = ∏d_{ii}$ (product of diagonal elements)\n- Eigenvalues are the diagonal entries\n- Always diagonalizable",
// //     properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
// //     link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
// //   },
// //   upperTriangular: {
// //     description: "Upper triangular matrix has all entries below the main diagonal equal to 0.\n\nKey properties:\n- $det(U) = ∏u_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of upper triangular matrices is upper triangular\n- LU decomposition basis",
// //     properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
// //     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
// //   },
// //   lowerTriangular: {
// //     description: "Lower triangular matrix has all entries above the main diagonal equal to 0.\n\nKey properties:\n- $det(L) = ∏l_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of lower triangular matrices is lower triangular\n- LU decomposition basis",
// //     properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
// //     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
// //   },
// //   symmetric: {
// //     description: "A symmetric matrix equals its transpose: $A = A^T$. Each entry $a_{ij} = a_{ji}$.\n\nKey properties:\n- All eigenvalues are real\n- Orthogonal eigenvectors exist\n- Diagonalizable\n- Real quadratic forms basis\n- Important in optimization",
// //     properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
// //     link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
// //   },
// //   skewSymmetric: {
// //     description: "A skew-symmetric (or anti-symmetric) matrix equals negative of its transpose: $A = -A^T$. Properties:\n- $a_{ij} = -a_{ji}$\n- Main diagonal must be 0\n- Determinant is square of a polynomial (Pfaffian)\n- Pure imaginary eigenvalues\n- Important in physics and mechanics",
// //     properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
// //     link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
// //   },
// //   random: {
// //     description: "A matrix with random entries. While not a special type, random matrices are crucial in:\n- Statistical analysis\n- Quantum mechanics\n- Data compression\n- Testing algorithms\n- Neural networks initialization",
// //     properties: ["Testing", "Simulation", "Algorithm verification"],
// //     link: null
// //   }
// // };

// // const MatrixGenerator = ({ explanations = defaultExplanations }) => {
// //   const [size, setSize] = useState(3);
// //   const [matrix, setMatrix] = useState(null);
// //   const [matrixType, setMatrixType] = useState('random');

// //   const getRandomValue = () => Math.floor(Math.random() * 9) + 1;

// //   const generateMatrix = () => {
// //     let newMatrix;
    
// //     switch (matrixType) {
// //       case 'identity':
// //         newMatrix = Array(size).fill().map((_, i) => 
// //           Array(size).fill().map((_, j) => i === j ? 1 : 0)
// //         );
// //         break;
// //       case 'zero':
// //         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
// //         break;
// //       case 'scalar':
// //         const scalar = getRandomValue();
// //         newMatrix = Array(size).fill().map((_, i) => 
// //           Array(size).fill().map((_, j) => i === j ? scalar : 0)
// //         );
// //         break;
// //       case 'diagonal':
// //         newMatrix = Array(size).fill().map((_, i) => 
// //           Array(size).fill().map((_, j) => i === j ? getRandomValue() : 0)
// //         );
// //         break;
// //       case 'upperTriangular':
// //         newMatrix = Array(size).fill().map((_, i) => 
// //           Array(size).fill().map((_, j) => j >= i ? getRandomValue() : 0)
// //         );
// //         break;
// //       case 'lowerTriangular':
// //         newMatrix = Array(size).fill().map((_, i) => 
// //           Array(size).fill().map((_, j) => j <= i ? getRandomValue() : 0)
// //         );
// //         break;
// //       case 'symmetric':
// //         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
// //         for (let i = 0; i < size; i++) {
// //           for (let j = i; j < size; j++) {
// //             const value = getRandomValue();
// //             newMatrix[i][j] = value;
// //             newMatrix[j][i] = value;
// //           }
// //         }
// //         break;
// //       case 'skewSymmetric':
// //         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
// //         for (let i = 0; i < size; i++) {
// //           for (let j = i + 1; j < size; j++) {
// //             const value = getRandomValue();
// //             newMatrix[i][j] = value;
// //             newMatrix[j][i] = -value;
// //           }
// //         }
// //         break;
// //       default:
// //         newMatrix = Array(size).fill().map(() => 
// //           Array(size).fill().map(() => getRandomValue())
// //         );
// //     }
// //     setMatrix(newMatrix);
// //   };

// //   useEffect(() => {
// //     generateMatrix();
// //   }, [size, matrixType]);

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.content}>
// //         <div className={styles.matrixSection}>
// //           <div className={styles.controls}>
// //             <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
// //               {[2, 3, 4, 5].map(n => (
// //                 <option key={n} value={n}>{n}x{n}</option>
// //               ))}
// //             </select>

// //             <select value={matrixType} onChange={(e) => setMatrixType(e.target.value)}>
// //               <option value="random">Random</option>
// //               <option value="identity">Identity</option>
// //               <option value="zero">Zero</option>
// //               <option value="scalar">Scalar</option>
// //               <option value="diagonal">Diagonal</option>
// //               <option value="upperTriangular">Upper Triangular</option>
// //               <option value="lowerTriangular">Lower Triangular</option>
// //               <option value="symmetric">Symmetric</option>
// //               <option value="skewSymmetric">Skew-symmetric</option>
// //             </select>

// //             <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
// //               Clear
// //             </button>
// //           </div>

// //           {matrix && (
// //             <div className={styles.matrixDisplay}>
// //               <MatrixBracket size={size} type="left" />
// //               <div className={styles.matrixContent}>
// //                 {matrix.map((row, i) => (
// //                   <div key={i} className={styles.matrixRow}>
// //                     {row.map((cell, j) => (
// //                       <span key={j} className={styles.cell}>{cell}</span>
// //                     ))}
// //                   </div>
// //                 ))}
// //               </div>
// //               <MatrixBracket size={size} type="right" />
// //             </div>
// //           )}
// //         </div>

// //         <div className={styles.explanationSection}>
// //           {matrix && explanations[matrixType] && (
// //             <>
// //               <h3 className={styles.title}>
// //                 {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
// //               </h3>
// //               <div className={styles.description}>
// //                 {processContent(explanations[matrixType].description)}
// //               </div>
// //               {explanations[matrixType].properties.length > 0 && (
// //                 <div className={styles.properties}>
// //                   <h4>Key Properties:</h4>
// //                   <ul>
// //                     {explanations[matrixType].properties.map((prop, i) => (
// //                       <li key={i}>{processContent(prop)}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //               {explanations[matrixType].link && (
// //                 <a 
// //                   href={explanations[matrixType].link}
// //                   className={styles.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Learn more →
// //                 </a>
// //               )}
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MatrixGenerator;


// import React, { useState, useEffect } from 'react';
// import styles from './MatrixGenerator.module.css';
// import { MatrixBracket } from './MatrixBracket';
// import { processContent } from '../../utils/contentProcessor';

// const defaultExplanations = {
//   identity: {
//     description: "Identity matrix is a special diagonal matrix where all diagonal entries are 1 and all other entries are 0. It's denoted as $I$ or $I_n$ where $n$ is the dimension.\n\nKey properties:\n- $AI=IA=A$ for any matrix $A$ of compatible size\n- $(I_n)^k = I_n$ for any positive integer $k$\n- $det(I_n) = 1$\n- All eigenvalues are 1\n- Both symmetric and orthogonal",
//     properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
//     link: "https://en.wikipedia.org/wiki/Identity_matrix"
//   },
//   zero: {
//     description: "Zero matrix, denoted as $0$ or $0_{m×n}$, has all entries equal to 0. It's the additive identity in matrix algebra.\n\nKey properties:\n- $A + 0 = 0 + A = A$\n- $A0 = 0A = 0$\n- $det(0_n) = 0$ for square zero matrix\n- All eigenvalues are 0\n- Rank is 0",
//     properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
//     link: "https://en.wikipedia.org/wiki/Zero_matrix"
//   },
//   scalar: {
//     description: "A scalar matrix is a diagonal matrix where all diagonal entries are equal to some scalar $λ$. It's a scalar multiple of the identity matrix: $λI$.\n\nKey properties:\n- Commutes with all matrices: $AS = SA$ for any matrix $A$\n- $det(λI_n) = λ^n$\n- All eigenvalues are $λ$\n- Both symmetric and diagonal",
//     properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
//     link: "https://en.wikipedia.org/wiki/Scalar_matrix"
//   },
//   diagonal: {
//     description: "Diagonal matrix has non-zero elements only on the main diagonal. All off-diagonal elements are 0.\n\nKey properties:\n- Easy matrix operations (add/multiply element-wise on diagonal)\n- $det(D) = ∏d_{ii}$ (product of diagonal elements)\n- Eigenvalues are the diagonal entries\n- Always diagonalizable",
//     properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
//     link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
//   },
//   upperTriangular: {
//     description: "Upper triangular matrix has all entries below the main diagonal equal to 0.\n\nKey properties:\n- $det(U) = ∏u_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of upper triangular matrices is upper triangular\n- LU decomposition basis",
//     properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   lowerTriangular: {
//     description: "Lower triangular matrix has all entries above the main diagonal equal to 0.\n\nKey properties:\n- $det(L) = ∏l_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of lower triangular matrices is lower triangular\n- LU decomposition basis",
//     properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   symmetric: {
//     description: "A symmetric matrix equals its transpose: $A = A^T$. Each entry $a_{ij} = a_{ji}$.\n\nKey properties:\n- All eigenvalues are real\n- Orthogonal eigenvectors exist\n- Diagonalizable\n- Real quadratic forms basis\n- Important in optimization",
//     properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
//     link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
//   },
//   skewSymmetric: {
//     description: "A skew-symmetric (or anti-symmetric) matrix equals negative of its transpose: $A = -A^T$. Properties:\n- $a_{ij} = -a_{ji}$\n- Main diagonal must be 0\n- Determinant is square of a polynomial (Pfaffian)\n- Pure imaginary eigenvalues\n- Important in physics and mechanics",
//     properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
//     link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
//   },
//   random: {
//     description: "A matrix with random entries. While not a special type, random matrices are crucial in:\n- Statistical analysis\n- Quantum mechanics\n- Data compression\n- Testing algorithms\n- Neural networks initialization",
//     properties: ["Testing", "Simulation", "Algorithm verification"],
//     link: null
//   }
// };

// const MatrixGenerator = ({ explanations = defaultExplanations }) => {
//   const [size, setSize] = useState(3);
//   const [matrix, setMatrix] = useState(null);
//   const [matrixType, setMatrixType] = useState('random');

//   const getRandomValue = () => Math.floor(Math.random() * 9) + 1;

//   const generateMatrix = () => {
//     let newMatrix;
    
//     switch (matrixType) {
//       case 'identity':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? 1 : 0)
//         );
//         break;
//       case 'zero':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         break;
//       case 'scalar':
//         const scalar = getRandomValue();
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? scalar : 0)
//         );
//         break;
//       case 'diagonal':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? getRandomValue() : 0)
//         );
//         break;
//       case 'upperTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j >= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'lowerTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j <= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'symmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = value;
//           }
//         }
//         break;
//       case 'skewSymmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i + 1; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = -value;
//           }
//         }
//         break;
//       default:
//         newMatrix = Array(size).fill().map(() => 
//           Array(size).fill().map(() => getRandomValue())
//         );
//     }
//     setMatrix(newMatrix);
//   };

//   useEffect(() => {
//     generateMatrix();
//   }, [size, matrixType]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.controls}>
//         <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
//           {[2, 3, 4, 5].map(n => (
//             <option key={n} value={n}>{n}x{n}</option>
//           ))}
//         </select>

//         <select value={matrixType} onChange={(e) => setMatrixType(e.target.value)}>
//           <option value="random">Random</option>
//           <option value="identity">Identity</option>
//           <option value="zero">Zero</option>
//           <option value="scalar">Scalar</option>
//           <option value="diagonal">Diagonal</option>
//           <option value="upperTriangular">Upper Triangular</option>
//           <option value="lowerTriangular">Lower Triangular</option>
//           <option value="symmetric">Symmetric</option>
//           <option value="skewSymmetric">Skew-symmetric</option>
//         </select>

//         <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
//           Clear
//         </button>
//       </div>

//       <div className={styles.content}>
//         <div className={styles.matrixPanel}>
//           {matrix && (
//             <div className={styles.matrixDisplay}>
//               <MatrixBracket size={size} type="left" />
//               <div className={styles.matrixContent}>
//                 {matrix.map((row, i) => (
//                   <div key={i} className={styles.matrixRow}>
//                     {row.map((cell, j) => (
//                       <span key={j} className={styles.cell}>{cell}</span>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//               <MatrixBracket size={size} type="right" />
//             </div>
//           )}
//         </div>

//         <div className={styles.explanationSection}>
//           {matrix && explanations[matrixType] && (
//             <>
//               <h3 className={styles.title}>
//                 {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
//               </h3>
//               <div className={styles.description}>
//                 {processContent(explanations[matrixType].description)}
//               </div>
//               {explanations[matrixType].properties.length > 0 && (
//                 <div className={styles.properties}>
//                   <h4>Key Properties:</h4>
//                   <ul>
//                     {explanations[matrixType].properties.map((prop, i) => (
//                       <li key={i}>{processContent(prop)}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               {explanations[matrixType].link && (
//                 <a 
//                   href={explanations[matrixType].link}
//                   className={styles.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn more →
//                 </a>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatrixGenerator;


// import React, { useState, useEffect } from 'react';
// import styles from './MatrixGenerator.module.css';
// import { MatrixBracket } from './MatrixBracket';
// import { processContent } from '../../utils/contentProcessor';

// const defaultExplanations = {
//   identity: {
//     description: `Identity matrix is a special diagonal matrix where all diagonal entries are 1 and all other entries are 0. It's denoted as $I$ or $I_n$ where $n$ is the dimension.
//     \n**Key properties**:
//     \n- $AI=IA=A$ for any matrix $A$ of compatible size
//     \n- $(I_n)^k = I_n$ for any positive integer $k$
//     \n- $det(I_n) = 1$
//     All eigenvalues are 1
//     Both symmetric and orthogonal
//     `,
//     properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
//     link: "https://en.wikipedia.org/wiki/Identity_matrix"
//   },
//   zero: {
//     description: "Zero matrix, denoted as $0$ or $0_{m×n}$, has all entries equal to 0. It's the additive identity in matrix algebra.\n\nKey properties:\n- $A + 0 = 0 + A = A$\n- $A0 = 0A = 0$\n- $det(0_n) = 0$ for square zero matrix\n- All eigenvalues are 0\n- Rank is 0",
//     properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
//     link: "https://en.wikipedia.org/wiki/Zero_matrix"
//   },
//   scalar: {
//     description: "A scalar matrix is a diagonal matrix where all diagonal entries are equal to some scalar $λ$. It's a scalar multiple of the identity matrix: $λI$.\n\nKey properties:\n- Commutes with all matrices: $AS = SA$ for any matrix $A$\n- $det(λI_n) = λ^n$\n- All eigenvalues are $λ$\n- Both symmetric and diagonal",
//     properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
//     link: "https://en.wikipedia.org/wiki/Scalar_matrix"
//   },
//   diagonal: {
//     description: "Diagonal matrix has non-zero elements only on the main diagonal. All off-diagonal elements are 0.\n\nKey properties:\n- Easy matrix operations (add/multiply element-wise on diagonal)\n- $det(D) = ∏d_{ii}$ (product of diagonal elements)\n- Eigenvalues are the diagonal entries\n- Always diagonalizable",
//     properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
//     link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
//   },
//   upperTriangular: {
//     description: "Upper triangular matrix has all entries below the main diagonal equal to 0.\n\nKey properties:\n- $det(U) = ∏u_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of upper triangular matrices is upper triangular\n- LU decomposition basis",
//     properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   lowerTriangular: {
//     description: "Lower triangular matrix has all entries above the main diagonal equal to 0.\n\nKey properties:\n- $det(L) = ∏l_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of lower triangular matrices is lower triangular\n- LU decomposition basis",
//     properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   symmetric: {
//     description: "A symmetric matrix equals its transpose: $A = A^T$. Each entry $a_{ij} = a_{ji}$.\n\nKey properties:\n- All eigenvalues are real\n- Orthogonal eigenvectors exist\n- Diagonalizable\n- Real quadratic forms basis\n- Important in optimization",
//     properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
//     link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
//   },
//   skewSymmetric: {
//     description: "A skew-symmetric (or anti-symmetric) matrix equals negative of its transpose: $A = -A^T$. Properties:\n- $a_{ij} = -a_{ji}$\n- Main diagonal must be 0\n- Determinant is square of a polynomial (Pfaffian)\n- Pure imaginary eigenvalues\n- Important in physics and mechanics",
//     properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
//     link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
//   },
//   random: {
//     description: "A matrix with random entries. While not a special type, random matrices are crucial in:\n- Statistical analysis\n- Quantum mechanics\n- Data compression\n- Testing algorithms\n- Neural networks initialization",
//     properties: ["Testing", "Simulation", "Algorithm verification"],
//     link: null
//   }
// };

// const MatrixGenerator = ({ explanations = defaultExplanations }) => {
//   const [size, setSize] = useState(3);
//   const [matrix, setMatrix] = useState(null);
//   const [matrixType, setMatrixType] = useState('random');

//   const getRandomValue = () => Math.floor(Math.random() * 9) + 1;

//   const generateMatrix = () => {
//     let newMatrix;
    
//     switch (matrixType) {
//       case 'identity':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? 1 : 0)
//         );
//         break;
//       case 'zero':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         break;
//       case 'scalar':
//         const scalar = getRandomValue();
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? scalar : 0)
//         );
//         break;
//       case 'diagonal':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? getRandomValue() : 0)
//         );
//         break;
//       case 'upperTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j >= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'lowerTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j <= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'symmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = value;
//           }
//         }
//         break;
//       case 'skewSymmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i + 1; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = -value;
//           }
//         }
//         break;
//       default:
//         newMatrix = Array(size).fill().map(() => 
//           Array(size).fill().map(() => getRandomValue())
//         );
//     }
//     setMatrix(newMatrix);
//   };

//   useEffect(() => {
//     generateMatrix();
//   }, [size, matrixType]);

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.controls}>
// //         <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
// //           {[2, 3, 4, 5].map(n => (
// //             <option key={n} value={n}>{n}x{n}</option>
// //           ))}
// //         </select>

// //         <select value={matrixType} onChange={(e) => setMatrixType(e.target.value)}>
// //           <option value="random">Random</option>
// //           <option value="identity">Identity</option>
// //           <option value="zero">Zero</option>
// //           <option value="scalar">Scalar</option>
// //           <option value="diagonal">Diagonal</option>
// //           <option value="upperTriangular">Upper Triangular</option>
// //           <option value="lowerTriangular">Lower Triangular</option>
// //           <option value="symmetric">Symmetric</option>
// //           <option value="skewSymmetric">Skew-symmetric</option>
// //         </select>

// //         <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
// //           Clear
// //         </button>
// //       </div>

// //       <div className={styles.content}>
// //         <div className={styles.matrixPanel}>
// //           {matrix && (
// //             <div className={styles.matrixDisplay}>
// //               <MatrixBracket size={size} type="left" />
// //               <div className={styles.matrixContent}>
// //                 {matrix.map((row, i) => (
// //                   <div key={i} className={styles.matrixRow}>
// //                     {row.map((cell, j) => (
// //                       <span key={j} className={styles.cell}>{cell}</span>
// //                     ))}
// //                   </div>
// //                 ))}
// //               </div>
// //               <MatrixBracket size={size} type="right" />
// //             </div>
// //           )}
// //         </div>

// //         <div className={styles.explanationSection}>
// //           {matrix && explanations[matrixType] && (
// //             <>
// //               <h3 className={styles.title}>
// //                 {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
// //               </h3>
// //               <div className={styles.description}>
// //                 {processContent(explanations[matrixType].description)}
// //               </div>
// //               {explanations[matrixType].properties.length > 0 && (
// //                 <div className={styles.properties}>
// //                   <h4>Key Properties:</h4>
// //                   <ul>
// //                     {explanations[matrixType].properties.map((prop, i) => (
// //                       <li key={i}>{processContent(prop)}</li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               )}
// //               {explanations[matrixType].link && (
// //                 <a 
// //                   href={explanations[matrixType].link}
// //                   className={styles.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Learn more →
// //                 </a>
// //               )}
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );

// return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.leftPanel}>
//           <div className={styles.controls}>
//             <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
//               {[2, 3, 4, 5].map(n => (
//                 <option key={n} value={n}>{n}x{n}</option>
//               ))}
//             </select>
   
//             <select value={matrixType} onChange={(e) => setMatrixType(e.target.value)}>
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
   
//             <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
//               Clear
//             </button>
//           </div>
   
//           {matrix && (
//             <div className={styles.matrixDisplay}>
//               <MatrixBracket size={size} type="left" />
//               <div className={styles.matrixContent}>
//                 {matrix.map((row, i) => (
//                   <div key={i} className={styles.matrixRow}>
//                     {row.map((cell, j) => (
//                       <span key={j} className={styles.cell}>{cell}</span>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//               <MatrixBracket size={size} type="right" />
//             </div>
//           )}
//         </div>
   
//         <div className={styles.explanationSection}>
//           {matrix && explanations[matrixType] && (
//             <>
//               <h3 className={styles.title}>
//                 {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
//               </h3>
//               <div className={styles.description}>
//                 {processContent(explanations[matrixType].description)}
//               </div>
//               {explanations[matrixType].properties.length > 0 && (
//                 <div className={styles.properties}>
//                   <h4>Key Properties:</h4>
//                   <ul>
//                     {explanations[matrixType].properties.map((prop, i) => (
//                       <li key={i}>{processContent(prop)}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               {explanations[matrixType].link && (
//                 <a 
//                   href={explanations[matrixType].link}
//                   className={styles.link}
//                 //   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn more →
//                 </a>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//    );

// };

// export default MatrixGenerator;


// import React, { useState, useEffect } from 'react';
// import styles from './MatrixGenerator.module.css';
// import { MatrixBracket } from './MatrixBracket';
// import { processContent } from '../../utils/contentProcessor';

// const defaultExplanations = {
//   identity: {
//     description: `Identity matrix is a special diagonal matrix where all diagonal entries are 1 and all other entries are 0. It's denoted as $I$ or $I_n$ where $n$ is the dimension.
//     \n**Key properties**:
//     \n- $AI=IA=A$ for any matrix $A$ of compatible size
//     \n- $(I_n)^k = I_n$ for any positive integer $k$
//     \n- $det(I_n) = 1$
//     All eigenvalues are 1
//     Both symmetric and orthogonal
//     `,
//     properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
//     link: "https://en.wikipedia.org/wiki/Identity_matrix"
//   },
//   zero: {
//     description: "Zero matrix, denoted as $0$ or $0_{m×n}$, has all entries equal to 0. It's the additive identity in matrix algebra.\n\nKey properties:\n- $A + 0 = 0 + A = A$\n- $A0 = 0A = 0$\n- $det(0_n) = 0$ for square zero matrix\n- All eigenvalues are 0\n- Rank is 0",
//     properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
//     link: "https://en.wikipedia.org/wiki/Zero_matrix"
//   },
//   scalar: {
//     description: "A scalar matrix is a diagonal matrix where all diagonal entries are equal to some scalar $λ$. It's a scalar multiple of the identity matrix: $λI$.\n\nKey properties:\n- Commutes with all matrices: $AS = SA$ for any matrix $A$\n- $det(λI_n) = λ^n$\n- All eigenvalues are $λ$\n- Both symmetric and diagonal",
//     properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
//     link: "https://en.wikipedia.org/wiki/Scalar_matrix"
//   },
//   diagonal: {
//     description: "Diagonal matrix has non-zero elements only on the main diagonal. All off-diagonal elements are 0.\n\nKey properties:\n- Easy matrix operations (add/multiply element-wise on diagonal)\n- $det(D) = ∏d_{ii}$ (product of diagonal elements)\n- Eigenvalues are the diagonal entries\n- Always diagonalizable",
//     properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
//     link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
//   },
//   upperTriangular: {
//     description: "Upper triangular matrix has all entries below the main diagonal equal to 0.\n\nKey properties:\n- $det(U) = ∏u_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of upper triangular matrices is upper triangular\n- LU decomposition basis",
//     properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   lowerTriangular: {
//     description: "Lower triangular matrix has all entries above the main diagonal equal to 0.\n\nKey properties:\n- $det(L) = ∏l_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of lower triangular matrices is lower triangular\n- LU decomposition basis",
//     properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   symmetric: {
//     description: "A symmetric matrix equals its transpose: $A = A^T$. Each entry $a_{ij} = a_{ji}$.\n\nKey properties:\n- All eigenvalues are real\n- Orthogonal eigenvectors exist\n- Diagonalizable\n- Real quadratic forms basis\n- Important in optimization",
//     properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
//     link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
//   },
//   skewSymmetric: {
//     description: "A skew-symmetric (or anti-symmetric) matrix equals negative of its transpose: $A = -A^T$. Properties:\n- $a_{ij} = -a_{ji}$\n- Main diagonal must be 0\n- Determinant is square of a polynomial (Pfaffian)\n- Pure imaginary eigenvalues\n- Important in physics and mechanics",
//     properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
//     link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
//   },
//   random: {
//     description: "A matrix with random entries. While not a special type, random matrices are crucial in:\n- Statistical analysis\n- Quantum mechanics\n- Data compression\n- Testing algorithms\n- Neural networks initialization",
//     properties: ["Testing", "Simulation", "Algorithm verification"],
//     link: null
//   }
// };

// const getHighlightedCells = (type, size) => {
//   const highlights = [];
  
//   switch (type) {
//     case 'identity':
//       for (let i = 0; i < size; i++) {
//         highlights.push([i, i]);
//       }
//       break;
      
//     case 'zero':
//       break;
      
//     case 'scalar':
//       for (let i = 0; i < size; i++) {
//         highlights.push([i, i]);
//       }
//       break;
      
//     case 'diagonal':
//       for (let i = 0; i < size; i++) {
//         highlights.push([i, i]);
//       }
//       break;
      
//     case 'upperTriangular':
//       for (let i = 0; i < size; i++) {
//         for (let j = i; j < size; j++) {
//           highlights.push([i, j]);
//         }
//       }
//       break;
      
//     case 'lowerTriangular':
//       for (let i = 0; i < size; i++) {
//         for (let j = 0; j <= i; j++) {
//           highlights.push([i, j]);
//         }
//       }
//       break;
      
//     case 'symmetric':
//       for (let i = 0; i < size; i++) {
//         for (let j = i; j < size; j++) {
//           highlights.push([i, j]);
//           if (i !== j) {
//             highlights.push([j, i]);
//           }
//         }
//       }
//       break;
      
//     case 'skewSymmetric':
//       for (let i = 0; i < size; i++) {
//         for (let j = i + 1; j < size; j++) {
//           highlights.push([i, j]);
//           highlights.push([j, i]);
//         }
//       }
//       break;
//   }
  
//   return highlights;
// };

// const MatrixCell = ({ value, row, col, matrixType, size }) => {
//   const isHighlighted = () => {
//     const highlights = getHighlightedCells(matrixType, size);
//     return highlights.some(([r, c]) => r === row && c === col);
//   };

//   const getSpecialClass = () => {
//     if (matrixType === 'skewSymmetric') {
//       if (value > 0) return styles.positive;
//       if (value < 0) return styles.negative;
//       return styles.zero;
//     }
//     return '';
//   };

//   const cellClass = `${styles.cell} 
//     ${isHighlighted() ? styles.highlighted : ''} 
//     ${getSpecialClass()}`;

//   return (
//     <span className={cellClass}>
//       {value}
//     </span>
//   );
// };

// const MatrixGenerator = ({ explanations = defaultExplanations }) => {
//   const [size, setSize] = useState(3);
//   const [matrix, setMatrix] = useState(null);
//   const [matrixType, setMatrixType] = useState('random');

//   const getRandomValue = () => Math.floor(Math.random() * 9) + 1;

//   const generateMatrix = () => {
//     let newMatrix;
    
//     switch (matrixType) {
//       case 'identity':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? 1 : 0)
//         );
//         break;
//       case 'zero':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         break;
//       case 'scalar':
//         const scalar = getRandomValue();
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? scalar : 0)
//         );
//         break;
//       case 'diagonal':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? getRandomValue() : 0)
//         );
//         break;
//       case 'upperTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j >= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'lowerTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j <= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'symmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = value;
//           }
//         }
//         break;
//       case 'skewSymmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i + 1; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = -value;
//           }
//         }
//         break;
//       default:
//         newMatrix = Array(size).fill().map(() => 
//           Array(size).fill().map(() => getRandomValue())
//         );
//     }
//     setMatrix(newMatrix);
//   };

//   useEffect(() => {
//     generateMatrix();
//   }, [size, matrixType]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.leftPanel}>
//           <div className={styles.controls}>
//             <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
//               {[2, 3, 4, 5].map(n => (
//                 <option key={n} value={n}>{n}x{n}</option>
//               ))}
//             </select>
   
//             <select value={matrixType} onChange={(e) => setMatrixType(e.target.value)}>
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
   
//             <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
//               Clear
//             </button>
//           </div>
   
//           {matrix && (
//             <div className={styles.matrixDisplay}>
//               <MatrixBracket size={size} type="left" />
//               <div className={styles.matrixContent}>
//                 {matrix.map((row, i) => (
//                   <div key={i} className={styles.matrixRow}>
//                     {row.map((cell, j) => (
//                       <MatrixCell
//                         key={j}
//                         value={cell}
//                         row={i}
//                         col={j}
//                         matrixType={matrixType}
//                         size={size}
//                       />
//                     ))}
//                   </div>
//                 ))}
//               </div>
//               <MatrixBracket size={size} type="right" />
//             </div>
//           )}
//         </div>
   
//         <div className={styles.explanationSection}>
//           {matrix && explanations[matrixType] && (
//             <>
//               <h3 className={styles.title}>
//                 {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
//               </h3>
//               <div className={styles.description}>
//                 {processContent(explanations[matrixType].description)}
//               </div>
//               {explanations[matrixType].properties.length > 0 && (
//                 <div className={styles.properties}>
//                   <h4>Key Properties:</h4>
//                   <ul>
//                     {explanations[matrixType].properties.map((prop, i) => (
//                       <li key={i}>{processContent(prop)}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               {explanations[matrixType].link && (
//                 <a 
//                   href={explanations[matrixType].link}
//                   className={styles.link}
//                   rel="noopener noreferrer"
//                 >
//                   Learn more →
//                 </a>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatrixGenerator;


// import React, { useState, useEffect } from 'react';
// import styles from './MatrixGenerator.module.css';
// import { MatrixBracket } from './MatrixBracket';
// import { processContent } from '../../utils/contentProcessor';

// // const defaultExplanations = {
// //   identity: {
// //     description: `Identity matrix is a special diagonal matrix where all diagonal entries are 1 and all other entries are 0. It's denoted as $I$ or $I_n$ where $n$ is the dimension.
// //     \n**Key properties**:
// //     \n- $AI=IA=A$ for any matrix $A$ of compatible size
// //     \n- $(I_n)^k = I_n$ for any positive integer $k$
// //     \n- $det(I_n) = 1$
// //     All eigenvalues are 1
// //     Both symmetric and orthogonal
// //     `,
// //     properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
// //     link: "https://en.wikipedia.org/wiki/Identity_matrix"
// //   },
// //   zero: {
// //     description: "Zero matrix, denoted as $0$ or $0_{m×n}$, has all entries equal to 0. It's the additive identity in matrix algebra.\n\nKey properties:\n- $A + 0 = 0 + A = A$\n- $A0 = 0A = 0$\n- $det(0_n) = 0$ for square zero matrix\n- All eigenvalues are 0\n- Rank is 0",
// //     properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
// //     link: "https://en.wikipedia.org/wiki/Zero_matrix"
// //   },
// //   scalar: {
// //     description: "A scalar matrix is a diagonal matrix where all diagonal entries are equal to some scalar $λ$. It's a scalar multiple of the identity matrix: $λI$.\n\nKey properties:\n- Commutes with all matrices: $AS = SA$ for any matrix $A$\n- $det(λI_n) = λ^n$\n- All eigenvalues are $λ$\n- Both symmetric and diagonal",
// //     properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
// //     link: "https://en.wikipedia.org/wiki/Scalar_matrix"
// //   },
// //   diagonal: {
// //     description: "Diagonal matrix has non-zero elements only on the main diagonal. All off-diagonal elements are 0.\n\nKey properties:\n- Easy matrix operations (add/multiply element-wise on diagonal)\n- $det(D) = ∏d_{ii}$ (product of diagonal elements)\n- Eigenvalues are the diagonal entries\n- Always diagonalizable",
// //     properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
// //     link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
// //   },
// //   upperTriangular: {
// //     description: "Upper triangular matrix has all entries below the main diagonal equal to 0.\n\nKey properties:\n- $det(U) = ∏u_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of upper triangular matrices is upper triangular\n- LU decomposition basis",
// //     properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
// //     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
// //   },
// //   lowerTriangular: {
// //     description: "Lower triangular matrix has all entries above the main diagonal equal to 0.\n\nKey properties:\n- $det(L) = ∏l_{ii}$ (product of diagonal elements)\n- Eigenvalues are diagonal elements\n- Product of lower triangular matrices is lower triangular\n- LU decomposition basis",
// //     properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
// //     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
// //   },
// //   symmetric: {
// //     description: "A symmetric matrix equals its transpose: $A = A^T$. Each entry $a_{ij} = a_{ji}$.\n\nKey properties:\n- All eigenvalues are real\n- Orthogonal eigenvectors exist\n- Diagonalizable\n- Real quadratic forms basis\n- Important in optimization",
// //     properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
// //     link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
// //   },
// //   skewSymmetric: {
// //     description: "A skew-symmetric (or anti-symmetric) matrix equals negative of its transpose: $A = -A^T$. Properties:\n- $a_{ij} = -a_{ji}$\n- Main diagonal must be 0\n- Determinant is square of a polynomial (Pfaffian)\n- Pure imaginary eigenvalues\n- Important in physics and mechanics",
// //     properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
// //     link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
// //   },
// //   random: {
// //     description: "A matrix with random entries. While not a special type, random matrices are crucial in:\n- Statistical analysis\n- Quantum mechanics\n- Data compression\n- Testing algorithms\n- Neural networks initialization",
// //     properties: ["Testing", "Simulation", "Algorithm verification"],
// //     link: null
// //   }
// // };

// const defaultExplanations = {
//   identity: {
//     description: "The identity matrix acts like the number 1 in multiplication - any matrix multiplied by identity stays unchanged. $I_n = \\begin{bmatrix} \\color{red}1 & 0 & 0 \\\\ 0 & \\color{red}1 & 0 \\\\ 0 & 0 & \\color{red}1 \\end{bmatrix}$.\n Just as 1 is the neutral element for multiplication of numbers, the identity matrix is the neutral element for matrix multiplication.",
//     properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
//     link: "https://en.wikipedia.org/wiki/Identity_matrix"
//   },
//   zero: {
//     description: "The zero matrix is the matrix equivalent of the number 0. Every entry is zero, making it the additive identity for matrices. $0 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$.\n Adding or subtracting a zero matrix from any matrix leaves the original matrix unchanged.",
//     properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
//     link: "https://en.wikipedia.org/wiki/Zero_matrix"
//   },
//   scalar: {
//     description: "A scalar matrix is an identity matrix multiplied by some number λ. It always takes the form: $\\begin{bmatrix} \\color{red}λ & 0 & 0 \\\\ 0 & \\color{red}λ & 0 \\\\ 0 & 0 & \\color{red}λ \\end{bmatrix}$ For example, when λ = 3: $\\begin{bmatrix} 3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$.\n These matrices commute with all other matrices of compatible size.",
//     properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
//     link: "https://en.wikipedia.org/wiki/Scalar_matrix"
//  },
//   diagonal: {
//     description: "A diagonal matrix has non-zero elements only on its main diagonal. All other entries must be 0: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ 0 & \\color{red}b & 0 \\\\ 0 & 0 & \\color{red}c \\end{bmatrix}$.\n These matrices are particularly easy to work with as operations like multiplication become simple element-wise operations on the diagonal.",
//     properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
//     link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
//   },
//   upperTriangular: {
//     description: "Upper triangular matrices have all entries below the main diagonal equal to 0. The entries above can be any number: $\\begin{bmatrix} \\color{red}a & \\color{red}b & \\color{red}c \\\\ 0 & \\color{red}d & \\color{red}e \\\\ 0 & 0 & \\color{red}f \\end{bmatrix}$.\n These matrices appear naturally in many matrix decomposition methods.",
//     properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   lowerTriangular: {
//     description: "Lower triangular matrices have all entries above the main diagonal equal to 0. The entries below can be any number: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ \\color{red}b & \\color{red}c & 0 \\\\ \\color{red}d & \\color{red}e & \\color{red}f \\end{bmatrix}$.\n These matrices are fundamental in LU decomposition and Gaussian elimination.",
//     properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
//     link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//   },
//   symmetric: {
//     description: "A symmetric matrix is equal to its transpose - it mirrors across its main diagonal. If entry (i,j) is x, then entry (j,i) must also be x: $\\begin{bmatrix} a & \\color{red}b & \\color{blue}c \\\\ \\color{red}b & d & \\color{green}e \\\\ \\color{blue}c & \\color{green}e & f \\end{bmatrix}$.\n These matrices are crucial in optimization and quadratic forms. Notice how elements of the same color must be equal, showing the mirror property across the diagonal.",
//     properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
//     link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
// },
//   skewSymmetric: {
//     description: "In a skew-symmetric matrix, each entry (i,j) equals the negative of entry (j,i). The main diagonal must be 0: $\\begin{bmatrix} 0 & \\color{red}a & \\color{red}b \\\\ \\color{red}{-a} & 0 & \\color{red}c \\\\ \\color{red}{-b} & \\color{red}{-c} & 0 \\end{bmatrix}$.\n These matrices represent rotations and angular velocities in physics.",
//     properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
//     link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
//   },
//   random: {
//     description: "A random matrix has entries chosen at random, often from a specific probability distribution. Here's an example: $\\begin{bmatrix} 3 & 7 & 2 \\\\ 5 & 1 & 9 \\\\ 4 & 6 & 8 \\end{bmatrix}$.\n These matrices are essential in statistical analysis, quantum mechanics, and machine learning, especially for initializing neural networks.",
//     properties: ["Testing", "Simulation", "Algorithm verification"],
//     link: null
//   }
// };

// const getPairKey = (i, j, size) => {
//   // Get a unique key for each symmetric/skew-symmetric pair
//   const minIdx = Math.min(i, j);
//   const maxIdx = Math.max(i, j);
//   return (minIdx * size + maxIdx) % 5;
// };

// const MatrixCell = ({ value, row, col, matrixType, matrix, size }) => {
//   const getHighlightClass = () => {
//     switch (matrixType) {
//       case 'identity':
//       case 'scalar':
//       case 'diagonal':
//         return row === col ? styles.highlighted : '';
        
//       case 'upperTriangular':
//         return col >= row ? styles.highlighted : '';
        
//       case 'lowerTriangular':
//         return col <= row ? styles.highlighted : '';
        
//       case 'symmetric':
//         if (row === col) return styles.highlightDiagonal;
//         if (matrix && matrix[row][col] === matrix[col][row]) {
//           const pairKey = getPairKey(row, col, size);
//           return styles[`pair${pairKey}`];
//         }
//         return '';
        
//       case 'skewSymmetric':
//         if (row === col) return '';
//         if (matrix && matrix[row][col] === -matrix[col][row]) {
//           const pairKey = getPairKey(row, col, size);
//           return styles[`pair${pairKey}`];
//         }
//         return '';
        
//       default:
//         return '';
//     }
//   };

//   return (
//     <span className={`${styles.cell} ${getHighlightClass()}`}>
//       {value}
//     </span>
//   );
// };

// const MatrixGenerator = ({ explanations = defaultExplanations }) => {
//   const [size, setSize] = useState(3);
//   const [matrix, setMatrix] = useState(null);
//   const [matrixType, setMatrixType] = useState('random');

//   const getRandomValue = () => Math.floor(Math.random() * 9) + 1;

//   const generateMatrix = () => {
//     let newMatrix;
    
//     switch (matrixType) {
//       case 'identity':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? 1 : 0)
//         );
//         break;
//       case 'zero':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         break;
//       case 'scalar':
//         const scalar = getRandomValue();
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? scalar : 0)
//         );
//         break;
//       case 'diagonal':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => i === j ? getRandomValue() : 0)
//         );
//         break;
//       case 'upperTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j >= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'lowerTriangular':
//         newMatrix = Array(size).fill().map((_, i) => 
//           Array(size).fill().map((_, j) => j <= i ? getRandomValue() : 0)
//         );
//         break;
//       case 'symmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = value;
//           }
//         }
//         break;
//       case 'skewSymmetric':
//         newMatrix = Array(size).fill().map(() => Array(size).fill(0));
//         for (let i = 0; i < size; i++) {
//           for (let j = i + 1; j < size; j++) {
//             const value = getRandomValue();
//             newMatrix[i][j] = value;
//             newMatrix[j][i] = -value;
//           }
//         }
//         break;
//       default:
//         newMatrix = Array(size).fill().map(() => 
//           Array(size).fill().map(() => getRandomValue())
//         );
//     }
//     setMatrix(newMatrix);
//   };

//   useEffect(() => {
//     generateMatrix();
//   }, [size, matrixType]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.leftPanel}>
//           <div className={styles.controls}>
//             <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
//               {[2, 3, 4, 5].map(n => (
//                 <option key={n} value={n}>{n}x{n}</option>
//               ))}
//             </select>
   
//             <select value={matrixType} onChange={(e) => setMatrixType(e.target.value)}>
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
   
//             <button onClick={() => setMatrix(null)} className={styles.clearBtn}>
//               Clear
//             </button>
//           </div>
   
//           {matrix && (
//             <div className={styles.matrixDisplay}>
//               <MatrixBracket size={size} type="left" />
//               <div className={styles.matrixContent}>
//                 {matrix.map((row, i) => (
//                   <div key={i} className={styles.matrixRow}>
//                     {row.map((cell, j) => (
//                       <MatrixCell
//                         key={j}
//                         value={cell}
//                         row={i}
//                         col={j}
//                         matrixType={matrixType}
//                         matrix={matrix}
//                         size={size}
//                       />
//                     ))}
//                   </div>
//                 ))}
//               </div>
//               <MatrixBracket size={size} type="right" />
//             </div>
//           )}
//         </div>
   
//         <div className={styles.explanationSection}>
//           {matrix && explanations[matrixType] && (
//             <>
//               <h3 className={styles.title}>
//                 {matrixType.charAt(0).toUpperCase() + matrixType.slice(1)} Matrix
//               </h3>
//               <div className={styles.description}>
//                 {processContent(explanations[matrixType].description)}
//               </div>
//               {explanations[matrixType].properties.length > 0 && (
//                 <div className={styles.properties}>
//                   <h4>Key Properties:</h4>
//                   <ul>
//                     {explanations[matrixType].properties.map((prop, i) => (
//                       <li key={i}>{processContent(prop)}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               {explanations[matrixType].link && (
//                 <a 
//                   href={explanations[matrixType].link}
//                   className={styles.link}
//                   rel="noopener noreferrer"
//                 >
//                   Learn more →
//                 </a>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatrixGenerator;


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
             Click 'Clear' to reset  the current matrix.
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