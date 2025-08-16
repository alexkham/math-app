

// // // import { useState, useEffect } from 'react'
// // // import { processContent } from '@/app/utils/contentProcessor'

// // // export function PermutationFull({ explanations }) {
// // //   const [n, setN] = useState('')
// // //   const [result, setResult] = useState(null)
// // //   const [error, setError] = useState('')

// // //   const factorial = (num) => {
// // //     if (num < 0) return null
// // //     if (num === 0 || num === 1) return 1
    
// // //     let result = 1
// // //     for (let i = 2; i <= num; i++) {
// // //       result *= i
// // //       if (result > Number.MAX_SAFE_INTEGER) {
// // //         return 'Too large'
// // //       }
// // //     }
// // //     return result
// // //   }

// // //   const clearField = () => {
// // //     setN('')
// // //   }

// // //   const calculate = () => {
// // //     setError('')
    
// // //     const nNum = parseInt(n)
    
// // //     if (isNaN(nNum)) {
// // //       setError('Please enter a valid number')
// // //       return
// // //     }
    
// // //     if (nNum < 0) {
// // //       setError('Please enter a non-negative number')
// // //       return
// // //     }
    
// // //     if (nNum > 170) {
// // //       setError('Number too large (maximum is 170)')
// // //       return
// // //     }

// // //     const factorialResult = factorial(nNum)
// // //     setResult({
// // //       n: nNum,
// // //       result: factorialResult,
// // //       formula: `${nNum}!`
// // //     })
// // //   }

// // //   useEffect(() => {
// // //     if (n !== '' && !isNaN(parseInt(n))) {
// // //       calculate()
// // //     } else {
// // //       setResult(null)
// // //       setError('')
// // //     }
// // //   }, [n])

// // //   return (
// // //     <>
// // //       <style>
// // //         {`
// // //           .markdown-link {
// // //             color: #007bff;
// // //             text-decoration: none;
// // //             font-weight: bold;
// // //           }
// // //           .markdown-link:hover {
// // //             color: #0056b3;
// // //             text-decoration: underline;
// // //           }
// // //         `}
// // //       </style>
// // //       <div style={{
// // //         display: 'flex',
// // //         gap: '30px',
// // //         backgroundColor: '#fff',
// // //         borderRadius: '12px',
// // //         padding: '20px',
// // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // //         minHeight: '500px'
// // //       }}>
// // //         <div style={{ flex: '1', paddingRight: '15px' }}>
// // //           <h2 style={{
// // //             color: '#333',
// // //             marginBottom: '30px',
// // //             fontSize: '24px'
// // //           }}>Permutation (Full)</h2>

// // //           <div style={{ marginBottom: '25px' }}>
// // //             <label style={{
// // //               display: 'block',
// // //               marginBottom: '8px',
// // //               fontWeight: '500',
// // //               color: '#333'
// // //             }}>
// // //               Number of objects (n):
// // //             </label>
// // //             <div style={{ position: 'relative' }}>
// // //               <input
// // //                 type="number"
// // //                 value={n}
// // //                 onChange={(e) => setN(e.target.value)}
// // //                 placeholder="e.g., 5"
// // //                 min="0"
// // //                 style={{
// // //                   width: '100%',
// // //                   padding: '12px 40px 12px 16px',
// // //                   border: '2px solid #ddd',
// // //                   borderRadius: '8px',
// // //                   fontSize: '16px',
// // //                   boxSizing: 'border-box'
// // //                 }}
// // //               />
// // //               {n && (
// // //                 <button
// // //                   onClick={clearField}
// // //                   style={{
// // //                     position: 'absolute',
// // //                     right: '10px',
// // //                     top: '50%',
// // //                     transform: 'translateY(-50%)',
// // //                     background: 'none',
// // //                     border: 'none',
// // //                     fontSize: '18px',
// // //                     color: '#999',
// // //                     cursor: 'pointer'
// // //                   }}
// // //                 >
// // //                   ×
// // //                 </button>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {error && (
// // //             <div style={{
// // //               backgroundColor: '#f8d7da',
// // //               color: '#721c24',
// // //               padding: '12px 16px',
// // //               borderRadius: '8px',
// // //               border: '1px solid #f5c6cb',
// // //               marginBottom: '20px'
// // //             }}>
// // //               {error}
// // //             </div>
// // //           )}

// // //           {result && !error && (
// // //             <div style={{
// // //               backgroundColor: '#d1edff',
// // //               padding: '20px',
// // //               borderRadius: '8px',
// // //               border: '1px solid #007bff'
// // //             }}>
// // //               <h3 style={{
// // //                 margin: '0 0 15px 0',
// // //                 color: '#004085',
// // //                 fontSize: '18px'
// // //               }}>Result:</h3>
              
// // //               <div style={{
// // //                 display: 'grid',
// // //                 gridTemplateColumns: 'auto 1fr',
// // //                 gap: '10px 20px',
// // //                 alignItems: 'center'
// // //               }}>
// // //                 <strong>Formula:</strong>
// // //                 <span>{processContent(result.formula)}</span>
                
// // //                 <strong>Result:</strong>
// // //                 <span>{typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}</span>
// // //               </div>

// // //               {typeof result.result === 'number' && (
// // //                 <div style={{
// // //                   marginTop: '15px',
// // //                   padding: '10px',
// // //                   backgroundColor: 'rgba(255,255,255,0.5)',
// // //                   borderRadius: '4px'
// // //                 }}>
// // //                   <small style={{ color: '#004085' }}>
// // //                     There are {result.result.toLocaleString()} ways to arrange {result.n} distinct objects.
// // //                   </small>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div style={{
// // //           flex: '1',
// // //           paddingLeft: '15px',
// // //           borderLeft: '1px solid #e0e0e0'
// // //         }}>
// // //           <h3 style={{
// // //             color: '#495057',
// // //             marginBottom: '20px',
// // //             fontSize: '20px'
// // //           }}>Explanation</h3>

// // //           <div style={{
// // //             backgroundColor: '#f8f9fa',
// // //             padding: '20px',
// // //             borderRadius: '8px',
// // //             marginBottom: '20px',
// // //             borderLeft: '4px solid #007bff'
// // //           }}>
// // //             <div style={{
// // //               margin: '0 0 10px 0',
// // //               color: '#495057',
// // //               fontSize: '16px',
// // //               fontWeight: 'bold'
// // //             }}>
// // //               {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n) = n!$')}
// // //             </div>
// // //             <p style={{
// // //               margin: 0,
// // //               color: '#6c757d',
// // //               lineHeight: '1.5'
// // //             }}>
// // //               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $n$ distinct objects in a sequence.')}
// // //             </p>
// // //           </div>

// // //           <div style={{
// // //             backgroundColor: '#fff3cd',
// // //             padding: '15px',
// // //             borderRadius: '8px',
// // //             border: '1px solid #ffeaa7',
// // //             marginBottom: '20px'
// // //           }}>
// // //             <h4 style={{
// // //               margin: '0 0 10px 0',
// // //               color: '#856404',
// // //               fontSize: '14px'
// // //             }}>Example:</h4>
// // //             <div style={{
// // //               margin: 0,
// // //               color: '#856404',
// // //               fontSize: '14px',
// // //               lineHeight: '1.4'
// // //             }}>
// // //               {explanations?.example ? processContent(explanations.example) : processContent('How many ways can you arrange 5 people in a line? $5! = 120$ ways')}
// // //             </div>
// // //           </div>

// // //           <div style={{
// // //             backgroundColor: '#e2e3ff',
// // //             padding: '15px',
// // //             borderRadius: '8px',
// // //             border: '1px solid #6f42c1'
// // //           }}>
// // //             <h4 style={{
// // //               margin: '0 0 10px 0',
// // //               color: '#4c2a85',
// // //               fontSize: '14px'
// // //             }}>Why this formula?</h4>
// // //             <p style={{
// // //               margin: 0,
// // //               color: '#4c2a85',
// // //               fontSize: '14px',
// // //               lineHeight: '1.4'
// // //             }}>
// // //               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('For the first position, you have $n$ choices. For the second position, you have $(n-1)$ choices, and so on. This gives us $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 1 = n!$')}
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   )
// // // }


// // import { useState, useEffect } from 'react'
// // import { processContent } from '@/app/utils/contentProcessor'
// // import CombinatoricsAPI from '@/app/services/combinatoricsApi'

// // export function PermutationFull({ explanations }) {
// //   const [n, setN] = useState('')
// //   const [result, setResult] = useState(null)
// //   const [error, setError] = useState('')
// //   const [loading, setLoading] = useState(false)

// //   // Local calculation threshold
// //   const LOCAL_THRESHOLD = 10

// //   // Simplify expression before calculation
// //   const simplifyExpression = (nNum) => {
// //     if (nNum === 0 || nNum === 1) {
// //       return { simplified: true, result: 1 }
// //     }
// //     return { simplified: false }
// //   }

// //   // Local factorial calculation for small numbers
// //   const localFactorial = (num) => {
// //     if (num === 0 || num === 1) return 1
// //     let result = 1
// //     for (let i = 2; i <= num; i++) {
// //       result *= i
// //     }
// //     return result
// //   }

// //   const clearField = () => {
// //     setN('')
// //   }

// //   const calculate = async () => {
// //     setError('')
// //     setLoading(true)
    
// //     try {
// //       const nNum = parseInt(n)
      
// //       if (isNaN(nNum)) {
// //         setError('Please enter a valid number')
// //         return
// //       }
      
// //       if (nNum < 0) {
// //         setError('Please enter a non-negative number')
// //         return
// //       }

// //       // Try to simplify first
// //       const simplified = simplifyExpression(nNum)
// //       if (simplified.simplified) {
// //         setResult({
// //           n: nNum,
// //           result: simplified.result,
// //           formula: `${nNum}!`,
// //           method: 'simplified'
// //         })
// //         return
// //       }

// //       // Check if we can calculate locally
// //       if (nNum <= LOCAL_THRESHOLD) {
// //         const localResult = localFactorial(nNum)
// //         setResult({
// //           n: nNum,
// //           result: localResult,
// //           formula: `${nNum}!`,
// //           method: 'local'
// //         })
// //         return
// //       }

// //       // Use API for larger numbers
// //       const apiResult = await CombinatoricsAPI.calculate('permutation-full', { n: nNum })
// //       setResult({
// //         n: nNum,
// //         result: apiResult,
// //         formula: `${nNum}!`,
// //         method: 'api'
// //       })

// //     } catch (err) {
// //       setError(err.message || 'Calculation failed')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   useEffect(() => {
// //     if (n !== '' && !isNaN(parseInt(n))) {
// //       calculate()
// //     } else {
// //       setResult(null)
// //       setError('')
// //     }
// //   }, [n])

// //   return (
// //     <>
// //       <style>
// //         {`
// //           .markdown-link {
// //             color: #007bff;
// //             text-decoration: none;
// //             font-weight: bold;
// //           }
// //           .markdown-link:hover {
// //             color: #0056b3;
// //             text-decoration: underline;
// //           }
// //         `}
// //       </style>
// //       <div style={{
// //         display: 'flex',
// //         gap: '30px',
// //         backgroundColor: '#fff',
// //         borderRadius: '12px',
// //         padding: '20px',
// //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //         minHeight: '500px'
// //       }}>
// //         <div style={{ flex: '1', paddingRight: '15px' }}>
// //           <h2 style={{
// //             color: '#333',
// //             marginBottom: '30px',
// //             fontSize: '24px'
// //           }}>Permutation (Full)</h2>

// //           <div style={{ marginBottom: '25px' }}>
// //             <label style={{
// //               display: 'block',
// //               marginBottom: '8px',
// //               fontWeight: '500',
// //               color: '#333'
// //             }}>
// //               Number of objects (n):
// //             </label>
// //             <div style={{ position: 'relative' }}>
// //               <input
// //                 type="number"
// //                 value={n}
// //                 onChange={(e) => setN(e.target.value)}
// //                 placeholder="e.g., 5"
// //                 min="0"
// //                 style={{
// //                   width: '100%',
// //                   padding: '12px 40px 12px 16px',
// //                   border: '2px solid #ddd',
// //                   borderRadius: '8px',
// //                   fontSize: '16px',
// //                   boxSizing: 'border-box'
// //                 }}
// //                 disabled={loading}
// //               />
// //               {n && (
// //                 <button
// //                   onClick={clearField}
// //                   style={{
// //                     position: 'absolute',
// //                     right: '10px',
// //                     top: '50%',
// //                     transform: 'translateY(-50%)',
// //                     background: 'none',
// //                     border: 'none',
// //                     fontSize: '18px',
// //                     color: '#999',
// //                     cursor: 'pointer'
// //                   }}
// //                   disabled={loading}
// //                 >
// //                   ×
// //                 </button>
// //               )}
// //             </div>
// //           </div>

// //           {loading && (
// //             <div style={{
// //               backgroundColor: '#e3f2fd',
// //               color: '#1565c0',
// //               padding: '12px 16px',
// //               borderRadius: '8px',
// //               border: '1px solid #90caf9',
// //               marginBottom: '20px'
// //             }}>
// //               Calculating...
// //             </div>
// //           )}

// //           {error && (
// //             <div style={{
// //               backgroundColor: '#f8d7da',
// //               color: '#721c24',
// //               padding: '12px 16px',
// //               borderRadius: '8px',
// //               border: '1px solid #f5c6cb',
// //               marginBottom: '20px'
// //             }}>
// //               {error}
// //             </div>
// //           )}

// //           {result && !error && !loading && (
// //             <div style={{
// //               backgroundColor: '#d1edff',
// //               padding: '20px',
// //               borderRadius: '8px',
// //               border: '1px solid #007bff'
// //             }}>
// //               <h3 style={{
// //                 margin: '0 0 15px 0',
// //                 color: '#004085',
// //                 fontSize: '18px'
// //               }}>Result:</h3>
              
// //               <div style={{
// //                 display: 'grid',
// //                 gridTemplateColumns: 'auto 1fr',
// //                 gap: '10px 20px',
// //                 alignItems: 'center'
// //               }}>
// //                 <strong>Formula:</strong>
// //                 <span>{processContent(result.formula)}</span>
                
// //                 <strong>Result:</strong>
// //                 <span>{typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}</span>
// //               </div>

// //               {typeof result.result === 'number' && (
// //                 <div style={{
// //                   marginTop: '15px',
// //                   padding: '10px',
// //                   backgroundColor: 'rgba(255,255,255,0.5)',
// //                   borderRadius: '4px'
// //                 }}>
// //                   <small style={{ color: '#004085' }}>
// //                     There are {result.result.toLocaleString()} ways to arrange {result.n} distinct objects.
// //                   </small>
// //                 </div>
// //               )}

// //               <div style={{
// //                 marginTop: '10px',
// //                 fontSize: '12px',
// //                 color: '#6c757d'
// //               }}>
// //                 Method: {result.method === 'local' ? 'Local calculation' : 
// //                         result.method === 'api' ? 'Server calculation' : 'Simplified'}
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         <div style={{
// //           flex: '1',
// //           paddingLeft: '15px',
// //           borderLeft: '1px solid #e0e0e0'
// //         }}>
// //           <h3 style={{
// //             color: '#495057',
// //             marginBottom: '20px',
// //             fontSize: '20px'
// //           }}>Explanation</h3>

// //           <div style={{
// //             backgroundColor: '#f8f9fa',
// //             padding: '20px',
// //             borderRadius: '8px',
// //             marginBottom: '20px',
// //             borderLeft: '4px solid #007bff'
// //           }}>
// //             <div style={{
// //               margin: '0 0 10px 0',
// //               color: '#495057',
// //               fontSize: '16px',
// //               fontWeight: 'bold'
// //             }}>
// //               {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n) = n!$')}
// //             </div>
// //             <p style={{
// //               margin: 0,
// //               color: '#6c757d',
// //               lineHeight: '1.5'
// //             }}>
// //               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $n$ distinct objects in a sequence.')}
// //             </p>
// //           </div>

// //           <div style={{
// //             backgroundColor: '#fff3cd',
// //             padding: '15px',
// //             borderRadius: '8px',
// //             border: '1px solid #ffeaa7',
// //             marginBottom: '20px'
// //           }}>
// //             <h4 style={{
// //               margin: '0 0 10px 0',
// //               color: '#856404',
// //               fontSize: '14px'
// //             }}>Example:</h4>
// //             <div style={{
// //               margin: 0,
// //               color: '#856404',
// //               fontSize: '14px',
// //               lineHeight: '1.4'
// //             }}>
// //               {explanations?.example ? processContent(explanations.example) : processContent('How many ways can you arrange 5 people in a line? $5! = 120$ ways')}
// //             </div>
// //           </div>

// //           <div style={{
// //             backgroundColor: '#e2e3ff',
// //             padding: '15px',
// //             borderRadius: '8px',
// //             border: '1px solid #6f42c1'
// //           }}>
// //             <h4 style={{
// //               margin: '0 0 10px 0',
// //               color: '#4c2a85',
// //               fontSize: '14px'
// //             }}>Why this formula?</h4>
// //             <p style={{
// //               margin: 0,
// //               color: '#4c2a85',
// //               fontSize: '14px',
// //               lineHeight: '1.4'
// //             }}>
// //               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('For the first position, you have $n$ choices. For the second position, you have $(n-1)$ choices, and so on. This gives us $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 1 = n!$')}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }



// // import { useState, useEffect } from 'react'
// // import { processContent } from '@/app/utils/contentProcessor'
// // import CombinatoricsAPI from '@/app/services/combinatoricsApi'

// // export function PermutationFull({ explanations }) {
// //   const [n, setN] = useState('')
// //   const [result, setResult] = useState(null)
// //   const [error, setError] = useState('')
// //   const [loading, setLoading] = useState(false)

// //   // Local calculation threshold
// //   const LOCAL_THRESHOLD = 10

// //   // Simplify expression before calculation
// //   const simplifyExpression = (nNum) => {
// //     if (nNum === 0 || nNum === 1) {
// //       return { simplified: true, result: 1 }
// //     }
// //     return { simplified: false }
// //   }

// //   // Local factorial calculation for small numbers
// //   const localFactorial = (num) => {
// //     if (num === 0 || num === 1) return 1
// //     let result = 1
// //     for (let i = 2; i <= num; i++) {
// //       result *= i
// //     }
// //     return result
// //   }

// //   const clearField = () => {
// //     setN('')
// //   }

// //   const calculate = async () => {
// //     setError('')
// //     setLoading(true)
    
// //     try {
// //       const nNum = parseInt(n)
      
// //       if (isNaN(nNum)) {
// //         setError('Please enter a valid number')
// //         return
// //       }
      
// //       if (nNum < 0) {
// //         setError('Please enter a non-negative number')
// //         return
// //       }

// //       // Try to simplify first
// //       const simplified = simplifyExpression(nNum)
// //       if (simplified.simplified) {
// //         setResult({
// //           n: nNum,
// //           result: simplified.result,
// //           formula: `${nNum}!`,
// //           method: 'simplified'
// //         })
// //         return
// //       }

// //       // Check if we can calculate locally
// //       if (nNum <= LOCAL_THRESHOLD) {
// //         const localResult = localFactorial(nNum)
// //         setResult({
// //           n: nNum,
// //           result: localResult,
// //           formula: `${nNum}!`,
// //           method: 'local'
// //         })
// //         return
// //       }

// //       // Use API for larger numbers
// //       const apiResult = await CombinatoricsAPI.calculate('permutation-full', { n: nNum })
// //       setResult({
// //         n: nNum,
// //         result: apiResult,
// //         formula: `${nNum}!`,
// //         method: 'api'
// //       })

// //     } catch (err) {
// //       setError(err.message || 'Calculation failed')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   useEffect(() => {
// //     if (n !== '' && !isNaN(parseInt(n))) {
// //       calculate()
// //     } else {
// //       setResult(null)
// //       setError('')
// //     }
// //   }, [n])

// //   return (
// //     <>
// //       <style>
// //         {`
// //           .markdown-link {
// //             color: #007bff;
// //             text-decoration: none;
// //             font-weight: bold;
// //           }
// //           .markdown-link:hover {
// //             color: #0056b3;
// //             text-decoration: underline;
// //           }
// //         `}
// //       </style>
// //       <div style={{
// //         display: 'flex',
// //         gap: '30px',
// //         backgroundColor: '#fff',
// //         borderRadius: '12px',
// //         padding: '20px',
// //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //         minHeight: '500px'
// //       }}>
// //         <div style={{ flex: '1', paddingRight: '15px' }}>
// //           <h2 style={{
// //             color: '#333',
// //             marginBottom: '30px',
// //             fontSize: '24px'
// //           }}>Permutation (Full)</h2>

// //           <div style={{ marginBottom: '25px' }}>
// //             <label style={{
// //               display: 'block',
// //               marginBottom: '8px',
// //               fontWeight: '500',
// //               color: '#333'
// //             }}>
// //               Number of objects (n):
// //             </label>
// //             <div style={{ position: 'relative' }}>
// //               <input
// //                 type="number"
// //                 value={n}
// //                 onChange={(e) => setN(e.target.value)}
// //                 placeholder="e.g., 5"
// //                 min="0"
// //                 style={{
// //                   width: '100%',
// //                   padding: '12px 40px 12px 16px',
// //                   border: '2px solid #ddd',
// //                   borderRadius: '8px',
// //                   fontSize: '16px',
// //                   boxSizing: 'border-box'
// //                 }}
// //                 disabled={loading}
// //               />
// //               {n && (
// //                 <button
// //                   onClick={clearField}
// //                   style={{
// //                     position: 'absolute',
// //                     right: '10px',
// //                     top: '50%',
// //                     transform: 'translateY(-50%)',
// //                     background: 'none',
// //                     border: 'none',
// //                     fontSize: '18px',
// //                     color: '#999',
// //                     cursor: 'pointer'
// //                   }}
// //                   disabled={loading}
// //                 >
// //                   ×
// //                 </button>
// //               )}
// //             </div>
// //           </div>

// //           {loading && (
// //             <div style={{
// //               backgroundColor: '#e3f2fd',
// //               color: '#1565c0',
// //               padding: '12px 16px',
// //               borderRadius: '8px',
// //               border: '1px solid #90caf9',
// //               marginBottom: '20px'
// //             }}>
// //               Calculating...
// //             </div>
// //           )}

// //           {error && (
// //             <div style={{
// //               backgroundColor: '#f8d7da',
// //               color: '#721c24',
// //               padding: '12px 16px',
// //               borderRadius: '8px',
// //               border: '1px solid #f5c6cb',
// //               marginBottom: '20px'
// //             }}>
// //               {error}
// //             </div>
// //           )}

// //           {result && !error && !loading && (
// //             <div style={{
// //               backgroundColor: '#d1edff',
// //               padding: '20px',
// //               borderRadius: '8px',
// //               border: '1px solid #007bff'
// //             }}>
// //               <h3 style={{
// //                 margin: '0 0 15px 0',
// //                 color: '#004085',
// //                 fontSize: '18px'
// //               }}>Result:</h3>
              
// //               <div style={{
// //                 display: 'grid',
// //                 gridTemplateColumns: 'auto 1fr',
// //                 gap: '10px 20px',
// //                 alignItems: 'center'
// //               }}>
// //                 <strong>Formula:</strong>
// //                 <span>{processContent(result.formula)}</span>
                
// //                 <strong>Result:</strong>
// //                 <span>{typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}</span>
// //               </div>

// //               {typeof result.result === 'number' && (
// //                 <div style={{
// //                   marginTop: '15px',
// //                   padding: '10px',
// //                   backgroundColor: 'rgba(255,255,255,0.5)',
// //                   borderRadius: '4px'
// //                 }}>
// //                   <small style={{ color: '#004085' }}>
// //                     There are {result.result.toLocaleString()} ways to arrange {result.n} distinct objects.
// //                   </small>
// //                 </div>
// //               )}

// //               <div style={{
// //                 marginTop: '10px',
// //                 fontSize: '12px',
// //                 color: '#6c757d'
// //               }}>
// //                 Method: {result.method === 'local' ? 'Local calculation' : 
// //                         result.method === 'api' ? 'Server calculation' : 'Simplified'}
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         <div style={{
// //           flex: '1',
// //           paddingLeft: '15px',
// //           borderLeft: '1px solid #e0e0e0'
// //         }}>
// //           <h3 style={{
// //             color: '#495057',
// //             marginBottom: '20px',
// //             fontSize: '20px'
// //           }}>Explanation</h3>

// //           <div style={{
// //             backgroundColor: '#f8f9fa',
// //             padding: '20px',
// //             borderRadius: '8px',
// //             marginBottom: '20px',
// //             borderLeft: '4px solid #007bff'
// //           }}>
// //             <div style={{
// //               margin: '0 0 10px 0',
// //               color: '#495057',
// //               fontSize: '16px',
// //               fontWeight: 'bold'
// //             }}>
// //               {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n) = n!$')}
// //             </div>
// //             <p style={{
// //               margin: 0,
// //               color: '#6c757d',
// //               lineHeight: '1.5'
// //             }}>
// //               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $n$ distinct objects in a sequence.')}
// //             </p>
// //           </div>

// //           <div style={{
// //             backgroundColor: '#fff3cd',
// //             padding: '15px',
// //             borderRadius: '8px',
// //             border: '1px solid #ffeaa7',
// //             marginBottom: '20px'
// //           }}>
// //             <h4 style={{
// //               margin: '0 0 10px 0',
// //               color: '#856404',
// //               fontSize: '14px'
// //             }}>Example:</h4>
// //             <div style={{
// //               margin: 0,
// //               color: '#856404',
// //               fontSize: '14px',
// //               lineHeight: '1.4'
// //             }}>
// //               {explanations?.example ? processContent(explanations.example) : processContent('How many ways can you arrange 5 people in a line? $5! = 120$ ways')}
// //             </div>
// //           </div>

// //           <div style={{
// //             backgroundColor: '#e2e3ff',
// //             padding: '15px',
// //             borderRadius: '8px',
// //             border: '1px solid #6f42c1'
// //           }}>
// //             <h4 style={{
// //               margin: '0 0 10px 0',
// //               color: '#4c2a85',
// //               fontSize: '14px'
// //             }}>Why this formula?</h4>
// //             <p style={{
// //               margin: 0,
// //               color: '#4c2a85',
// //               fontSize: '14px',
// //               lineHeight: '1.4'
// //             }}>
// //               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('For the first position, you have $n$ choices. For the second position, you have $(n-1)$ choices, and so on. This gives us $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 1 = n!$')}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }


// import { useState, useEffect } from 'react'
// import { processContent } from '@/app/utils/contentProcessor'
// import CombinatoricsAPI from '@/app/services/combinatoricsApi'

// export function PermutationFull({ explanations }) {
//   const [n, setN] = useState('')
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)

//   // Local calculation threshold
//   const LOCAL_THRESHOLD = 10

//   // Simplify expression before calculation
//   const simplifyExpression = (nNum) => {
//     if (nNum === 0 || nNum === 1) {
//       return { simplified: true, result: 1 }
//     }
//     return { simplified: false }
//   }

//   // Local factorial calculation for small numbers
//   const localFactorial = (num) => {
//     if (num === 0 || num === 1) return 1
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//       result *= i
//     }
//     return result
//   }

//   const clearField = () => {
//     setN('')
//   }

//   const calculate = async () => {
//     setError('')
//     setLoading(true)
    
//     try {
//       const nNum = parseInt(n)
      
//       if (isNaN(nNum)) {
//         setError('Please enter a valid number')
//         return
//       }
      
//       if (nNum < 0) {
//         setError('Please enter a non-negative number')
//         return
//       }
      
//       if (nNum > 100) {
//         setError('Number too large (maximum is 100)')
//         return
//       }

//       // Try to simplify first
//       const simplified = simplifyExpression(nNum)
//       if (simplified.simplified) {
//         setResult({
//           n: nNum,
//           result: simplified.result,
//           formula: `${nNum}!`,
//           method: 'simplified'
//         })
//         return
//       }

//       // Check if we can calculate locally
//       if (nNum <= LOCAL_THRESHOLD) {
//         const localResult = localFactorial(nNum)
//         setResult({
//           n: nNum,
//           result: localResult,
//           formula: `${nNum}!`,
//           method: 'local'
//         })
//         return
//       }

//       // Use API for larger numbers
//       console.log('Calling API for n =', nNum)
//       const apiResult = await CombinatoricsAPI.calculate('permutation-full', { n: nNum })
//       console.log('API result:', apiResult)
//       setResult({
//         n: nNum,
//         result: apiResult,
//         formula: `${nNum}!`,
//         method: 'api'
//       })

//     } catch (err) {
//       setError(err.message || 'Calculation failed')
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     // Clear results when input changes
//     setResult(null)
//     setError('')
//   }, [n])

//   return (
//     <>
//       <style>
//         {`
//           .markdown-link {
//             color: #007bff;
//             text-decoration: none;
//             font-weight: bold;
//           }
//           .markdown-link:hover {
//             color: #0056b3;
//             text-decoration: underline;
//           }
//         `}
//       </style>
//       <div style={{
//         display: 'flex',
//         gap: '30px',
//         backgroundColor: '#fff',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//         minHeight: '500px'
//       }}>
//         <div style={{ flex: '1', paddingRight: '15px' }}>
//           <h2 style={{
//             color: '#333',
//             marginBottom: '30px',
//             fontSize: '24px'
//           }}>Permutation (Full)</h2>

//           <div style={{ marginBottom: '25px' }}>
//             <label style={{
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '500',
//               color: '#333'
//             }}>
//               Number of objects (n):
//             </label>
//             <div style={{
//               display: 'flex',
//               gap: '10px',
//               alignItems: 'center'
//             }}>
//               <div style={{
//                 flex: '1',
//                 position: 'relative'
//               }}>
//                 <input
//                   type="number"
//                   value={n}
//                   onChange={(e) => setN(e.target.value)}
//                   placeholder="e.g., 5"
//                   min="0"
//                   style={{
//                     width: '100%',
//                     padding: '12px 40px 12px 16px',
//                     border: '2px solid #ddd',
//                     borderRadius: '8px',
//                     fontSize: '16px',
//                     boxSizing: 'border-box'
//                   }}
//                   disabled={loading}
//                 />
//                 {n && (
//                   <button
//                     onClick={clearField}
//                     style={{
//                       position: 'absolute',
//                       right: '10px',
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       background: 'none',
//                       border: 'none',
//                       fontSize: '18px',
//                       color: '#999',
//                       cursor: 'pointer'
//                     }}
//                     disabled={loading}
//                   >
//                     ×
//                   </button>
//                 )}
//               </div>
//               <button
//                 onClick={calculate}
//                 style={{
//                   padding: '12px 20px',
//                   backgroundColor: '#007bff',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   cursor: 'pointer',
//                   fontWeight: '500'
//                 }}
//                 disabled={loading || !n}
//               >
//                 Calculate
//               </button>
//               <button
//                 onClick={clearField}
//                 style={{
//                   padding: '12px 20px',
//                   backgroundColor: '#6c757d',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   cursor: 'pointer',
//                   fontWeight: '500'
//                 }}
//                 disabled={loading || !n}
//               >
//                 Reset
//               </button>
//             </div>
//           </div>

//           {loading && (
//             <div style={{
//               backgroundColor: '#e3f2fd',
//               color: '#1565c0',
//               padding: '12px 16px',
//               borderRadius: '8px',
//               border: '1px solid #90caf9',
//               marginBottom: '20px'
//             }}>
//               Calculating...
//             </div>
//           )}

//           {error && (
//             <div style={{
//               backgroundColor: '#f8d7da',
//               color: '#721c24',
//               padding: '12px 16px',
//               borderRadius: '8px',
//               border: '1px solid #f5c6cb',
//               marginBottom: '20px'
//             }}>
//               {error}
//             </div>
//           )}

//           {result && !error && !loading && (
//             <div style={{
//               backgroundColor: '#d1edff',
//               padding: '20px',
//               borderRadius: '8px',
//               border: '1px solid #007bff'
//             }}>
//               <h3 style={{
//                 margin: '0 0 15px 0',
//                 color: '#004085',
//                 fontSize: '18px'
//               }}>Result:</h3>
              
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'auto 1fr',
//                 gap: '10px 20px',
//                 alignItems: 'center'
//               }}>
//                 <strong>Formula:</strong>
//                 <span>{processContent(result.formula)}</span>
                
//                 <strong>Result:</strong>
//                 <div style={{
//                   maxWidth: '400px',
//                   overflow: 'auto',
//                   wordBreak: 'break-all'
//                 }}>
//                   {typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}
//                 </div>
//               </div>

//               {typeof result.result === 'number' && (
//                 <div style={{
//                   marginTop: '15px',
//                   padding: '10px',
//                   backgroundColor: 'rgba(255,255,255,0.5)',
//                   borderRadius: '4px'
//                 }}>
//                   <small style={{ color: '#004085' }}>
//                     There are {result.result.toLocaleString()} ways to arrange {result.n} distinct objects.
//                   </small>
//                 </div>
//               )}

//               <div style={{
//                 marginTop: '10px',
//                 fontSize: '12px',
//                 color: '#6c757d'
//               }}>
//                 Method: {result.method === 'local' ? 'Local calculation' : 
//                         result.method === 'api' ? 'Server calculation' : 'Simplified'}
//               </div>
//             </div>
//           )}
//         </div>

//         <div style={{
//           flex: '1',
//           paddingLeft: '15px',
//           borderLeft: '1px solid #e0e0e0'
//         }}>
//           <h3 style={{
//             color: '#495057',
//             marginBottom: '20px',
//             fontSize: '20px'
//           }}>Explanation</h3>

//           <div style={{
//             backgroundColor: '#f8f9fa',
//             padding: '20px',
//             borderRadius: '8px',
//             marginBottom: '20px',
//             borderLeft: '4px solid #007bff'
//           }}>
//             <div style={{
//               margin: '0 0 10px 0',
//               color: '#495057',
//               fontSize: '16px',
//               fontWeight: 'bold'
//             }}>
//               {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n) = n!$')}
//             </div>
//             <p style={{
//               margin: 0,
//               color: '#6c757d',
//               lineHeight: '1.5'
//             }}>
//               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $n$ distinct objects in a sequence.')}
//             </p>
//           </div>

//           <div style={{
//             backgroundColor: '#fff3cd',
//             padding: '15px',
//             borderRadius: '8px',
//             border: '1px solid #ffeaa7',
//             marginBottom: '20px'
//           }}>
//             <h4 style={{
//               margin: '0 0 10px 0',
//               color: '#856404',
//               fontSize: '14px'
//             }}>Example:</h4>
//             <div style={{
//               margin: 0,
//               color: '#856404',
//               fontSize: '14px',
//               lineHeight: '1.4'
//             }}>
//               {explanations?.example ? processContent(explanations.example) : processContent('How many ways can you arrange 5 people in a line? $5! = 120$ ways')}
//             </div>
//           </div>

//           <div style={{
//             backgroundColor: '#e2e3ff',
//             padding: '15px',
//             borderRadius: '8px',
//             border: '1px solid #6f42c1'
//           }}>
//             <h4 style={{
//               margin: '0 0 10px 0',
//               color: '#4c2a85',
//               fontSize: '14px'
//             }}>Why this formula?</h4>
//             <p style={{
//               margin: 0,
//               color: '#4c2a85',
//               fontSize: '14px',
//               lineHeight: '1.4'
//             }}>
//               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('For the first position, you have $n$ choices. For the second position, you have $(n-1)$ choices, and so on. This gives us $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 1 = n!$')}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


import { useState, useEffect } from 'react'
import { processContent } from '@/app/utils/contentProcessor'
import CombinatoricsAPI from '@/app/services/combinatoricsApi'
import { getFactorial } from './memoizedFactorials'

export function PermutationFull({ explanations }) {
  const [n, setN] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Simplify expression before calculation
  const simplifyExpression = (nNum) => {
    if (nNum === 0 || nNum === 1) {
      return { simplified: true, result: 1 }
    }
    return { simplified: false }
  }

  const clearField = () => {
    setN('')
  }

  const calculate = async () => {
    setError('')
    setLoading(true)
    
    try {
      const nNum = parseInt(n)
      
      if (isNaN(nNum)) {
        setError('Please enter a valid number')
        return
      }
      
      if (nNum < 0) {
        setError('Please enter a non-negative number')
        return
      }
      
      if (nNum > 100) {
        setError('Number too large (maximum is 100)')
        return
      }

      // Try to simplify first
      const simplified = simplifyExpression(nNum)
      if (simplified.simplified) {
        setResult({
          n: nNum,
          result: simplified.result,
          formula: `${nNum}!`,
          method: 'simplified'
        })
        return
      }

      // Use memoized factorial for all numbers ≤ 100
      const localResult = getFactorial(nNum)
      if (localResult !== null) {
        setResult({
          n: nNum,
          result: localResult,
          formula: `${nNum}!`,
          method: 'local'
        })
        return
      }

      // Use API for larger numbers (shouldn't reach here with max 100)
      const apiResult = await CombinatoricsAPI.calculate('permutation-full', { n: nNum })
      setResult({
        n: nNum,
        result: apiResult,
        formula: `${nNum}!`,
        method: 'api'
      })

    } catch (err) {
      setError(err.message || 'Calculation failed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Clear results when input changes
    setResult(null)
    setError('')
  }, [n])

  return (
    <>
      <style>
        {`
          .markdown-link {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
          }
          .markdown-link:hover {
            color: #0056b3;
            text-decoration: underline;
          }
        `}
      </style>
      <div style={{
        display: 'flex',
        gap: '30px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minHeight: '500px'
      }}>
        <div style={{ flex: '1', paddingRight: '15px' }}>
          <h2 style={{
            color: '#333',
            marginBottom: '30px',
            fontSize: '24px'
          }}>Permutation (Full)</h2>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Number of objects (n):
            </label>
            <div style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center'
            }}>
              <div style={{
                flex: '1',
                position: 'relative'
              }}>
                <input
                  type="number"
                  value={n}
                  onChange={(e) => setN(e.target.value)}
                  placeholder="e.g., 5"
                  min="0"
                  style={{
                    width: '100%',
                    padding: '12px 40px 12px 16px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                  disabled={loading}
                />
                {n && (
                  <button
                    onClick={clearField}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      fontSize: '18px',
                      color: '#999',
                      cursor: 'pointer'
                    }}
                    disabled={loading}
                  >
                    ×
                  </button>
                )}
              </div>
              <button
                onClick={calculate}
                style={{
                  padding: '12px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
                disabled={loading || !n}
              >
                Calculate
              </button>
              <button
                onClick={clearField}
                style={{
                  padding: '12px 20px',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
                disabled={loading || !n}
              >
                Reset
              </button>
            </div>
          </div>

          {loading && (
            <div style={{
              backgroundColor: '#e3f2fd',
              color: '#1565c0',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #90caf9',
              marginBottom: '20px'
            }}>
              Calculating...
            </div>
          )}

          {error && (
            <div style={{
              backgroundColor: '#f8d7da',
              color: '#721c24',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #f5c6cb',
              marginBottom: '20px'
            }}>
              {error}
            </div>
          )}

          {result && !error && !loading && (
            <div style={{
              backgroundColor: '#d1edff',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #007bff'
            }}>
              <h3 style={{
                margin: '0 0 15px 0',
                color: '#004085',
                fontSize: '18px'
              }}>Result:</h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '10px 20px',
                alignItems: 'center'
              }}>
                <strong>Formula:</strong>
                <span>{processContent(result.formula)}</span>
                
                <strong>Result:</strong>
                <div style={{
                  maxWidth: '400px',
                  overflow: 'auto',
                  wordBreak: 'break-all'
                }}>
                  {typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}
                </div>
              </div>

              {typeof result.result === 'number' && (
                <div style={{
                  marginTop: '15px',
                  padding: '10px',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  borderRadius: '4px'
                }}>
                  <small style={{ color: '#004085' }}>
                    There are {result.result.toLocaleString()} ways to arrange {result.n} distinct objects.
                  </small>
                </div>
              )}

              <div style={{
                marginTop: '10px',
                fontSize: '12px',
                color: '#6c757d'
              }}>
                {/* Method: {result.method === 'local' ? 'Local calculation' : 
                        result.method === 'api' ? 'Server calculation' : 'Simplified'} */}
              </div>
            </div>
          )}
        </div>

        <div style={{
          flex: '1',
          paddingLeft: '15px',
          borderLeft: '1px solid #e0e0e0'
        }}>
          <h3 style={{
            color: '#495057',
            marginBottom: '20px',
            fontSize: '20px'
          }}>Explanation</h3>

          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
            borderLeft: '4px solid #007bff'
          }}>
            <div style={{
              margin: '0 0 10px 0',
              color: '#495057',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n) = n!$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $n$ distinct objects in a sequence.')}
            </p>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #ffeaa7',
            marginBottom: '20px'
          }}>
            <h4 style={{
              margin: '0 0 10px 0',
              color: '#856404',
              fontSize: '14px'
            }}>Example:</h4>
            <div style={{
              margin: 0,
              color: '#856404',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              {explanations?.example ? processContent(explanations.example) : processContent('How many ways can you arrange 5 people in a line? $5! = 120$ ways')}
            </div>
          </div>

          <div style={{
            backgroundColor: '#e2e3ff',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #6f42c1'
          }}>
            <h4 style={{
              margin: '0 0 10px 0',
              color: '#4c2a85',
              fontSize: '14px'
            }}>Why this formula?</h4>
            <p style={{
              margin: 0,
              color: '#4c2a85',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('For the first position, you have $n$ choices. For the second position, you have $(n-1)$ choices, and so on. This gives us $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 1 = n!$')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}