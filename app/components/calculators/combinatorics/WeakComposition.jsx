// 'use client'

// import { useState, useEffect } from 'react'
// import { processContent } from '@/app/utils/contentProcessor'

// export function WeakComposition({ explanations }) {
//   const [n, setN] = useState('')
//   const [r, setR] = useState('')
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState('')

//   const factorial = (num) => {
//     if (num < 0) return null
//     if (num === 0 || num === 1) return 1
    
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//       result *= i
//       if (result > Number.MAX_SAFE_INTEGER) {
//         return 'Too large'
//       }
//     }
//     return result
//   }

//   const clearN = () => {
//     setN('')
//   }

//   const clearR = () => {
//     setR('')
//   }

//   const calculate = () => {
//     setError('')
    
//     const nNum = parseInt(n)
//     const rNum = parseInt(r)
    
//     if (isNaN(nNum) || isNaN(rNum)) {
//       setError('Please enter valid numbers for both n and r')
//       return
//     }
    
//     if (nNum < 0 || rNum < 0) {
//       setError('Please enter non-negative numbers')
//       return
//     }

//     if (rNum === 0) {
//       if (nNum === 0) {
//         setResult({
//           n: nNum,
//           r: rNum,
//           result: 1,
//           formula: '$C(0+0-1, 0-1) = C(-1,-1) = 1$'
//         })
//       } else {
//         setResult({
//           n: nNum,
//           r: rNum,
//           result: 0,
//           formula: '$C(' + nNum + '+0-1, 0-1) = C(' + (nNum-1) + ',-1) = 0$'
//         })
//       }
//       return
//     }
    
//     if (nNum > 171 || (nNum + rNum - 1) > 171) {
//       setError('Numbers too large (maximum calculation limit exceeded)')
//       return
//     }

//     const numerator = nNum + rNum - 1
//     const denominator = rNum - 1
    
//     const numeratorFactorial = factorial(numerator)
//     const denominatorFactorial = factorial(denominator)
//     const nFactorial = factorial(nNum)
    
//     if (numeratorFactorial === 'Too large' || denominatorFactorial === 'Too large' || nFactorial === 'Too large') {
//       setError('Result too large to calculate')
//       return
//     }

//     const compositionResult = numeratorFactorial / (denominatorFactorial * nFactorial)

//     setResult({
//       n: nNum,
//       r: rNum,
//       result: compositionResult,
//       formula: '$C(' + numerator + ',' + denominator + ') = \\frac{' + numerator + '!}{' + denominator + '! \\times ' + nNum + '!}$',
//       // calculation: numeratorFactorial.toLocaleString() + ' / (' + denominatorFactorial.toLocaleString() + ' × ' + nFactorial.toLocaleString() + ')'
//       calculation: '$\\frac{' + numeratorFactorial.toLocaleString() + '}{' + denominatorFactorial.toLocaleString() + ' \\times ' + nFactorial.toLocaleString() + '}$'
//     })
//   }

//   useEffect(() => {
//     if (n !== '' && r !== '' && !isNaN(parseInt(n)) && !isNaN(parseInt(r))) {
//       calculate()
//     } else {
//       setResult(null)
//       setError('')
//     }
//   }, [n, r])

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
//           }}>Weak Composition</h2>

//           <div style={{ marginBottom: '25px' }}>
//             <label style={{
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '500',
//               color: '#333'
//             }}>
//               Number of identical items (n):
//             </label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type="number"
//                 value={n}
//                 onChange={(e) => setN(e.target.value)}
//                 placeholder="e.g., 5"
//                 min="0"
//                 style={{
//                   width: '100%',
//                   padding: '12px 40px 12px 16px',
//                   border: '2px solid #ddd',
//                   borderRadius: '8px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box'
//                 }}
//               />
//               {n && (
//                 <button
//                   onClick={clearN}
//                   style={{
//                     position: 'absolute',
//                     right: '10px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     background: 'none',
//                     border: 'none',
//                     fontSize: '18px',
//                     color: '#999',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   ×
//                 </button>
//               )}
//             </div>
//           </div>

//           <div style={{ marginBottom: '25px' }}>
//             <label style={{
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '500',
//               color: '#333'
//             }}>
//               Number of cells (r):
//             </label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type="number"
//                 value={r}
//                 onChange={(e) => setR(e.target.value)}
//                 placeholder="e.g., 3"
//                 min="0"
//                 style={{
//                   width: '100%',
//                   padding: '12px 40px 12px 16px',
//                   border: '2px solid #ddd',
//                   borderRadius: '8px',
//                   fontSize: '16px',
//                   boxSizing: 'border-box'
//                 }}
//               />
//               {r && (
//                 <button
//                   onClick={clearR}
//                   style={{
//                     position: 'absolute',
//                     right: '10px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     background: 'none',
//                     border: 'none',
//                     fontSize: '18px',
//                     color: '#999',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   ×
//                 </button>
//               )}
//             </div>
//           </div>

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

//           {result && !error && (
//             <div style={{
//               backgroundColor: '#e7f3ff',
//               padding: '20px',
//               borderRadius: '8px',
//               border: '1px solid #17a2b8'
//             }}>
//               <h3 style={{
//                 margin: '0 0 15px 0',
//                 color: '#0c5460',
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
                
//                 <strong>Calculation:</strong>
//                 <span>{processContent(result.calculation)}</span>
                
//                 <strong>Result:</strong>
//                 <span>{typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}</span>
//               </div>

//               {typeof result.result === 'number' && result.result > 0 && (
//                 <div style={{
//                   marginTop: '15px',
//                   padding: '10px',
//                   backgroundColor: 'rgba(255,255,255,0.5)',
//                   borderRadius: '4px'
//                 }}>
//                   <small style={{ color: '#0c5460' }}>
//                     There are {result.result.toLocaleString()} ways to distribute {result.n} identical items into {result.r} cells (empty cells allowed).
//                   </small>
//                 </div>
//               )}
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
//             borderLeft: '4px solid #17a2b8'
//           }}>
//             <div style={{
//               margin: '0 0 10px 0',
//               color: '#495057',
//               fontSize: '16px',
//               fontWeight: 'bold'
//             }}>
//               {explanations?.formula ? processContent(explanations.formula) : processContent('$C(n+r-1, r-1) = \\frac{(n+r-1)!}{(r-1)! \\times n!}$')}
//             </div>
//             <p style={{
//               margin: 0,
//               color: '#6c757d',
//               lineHeight: '1.5'
//             }}>
//               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to distribute $n$ identical items into $r$ cells where empty cells are allowed. This is equivalent to finding non-negative integer solutions.')}
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
//               {explanations?.example ? processContent(explanations.example) : processContent('Distributing 5 identical candies among 3 children (some can get none): $C(5+3-1, 3-1) = C(7,2) = 21$ compositions')}
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
//               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We use the stars and bars method: arrange $n$ identical items and $r-1$ dividers. This gives $C(n+r-1, r-1)$ ways to choose positions for dividers among $n+r-1$ total positions.')}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { processContent } from '@/app/utils/contentProcessor'
import CombinatoricsAPI from '@/app/services/combinatoricsApi'
import { getFactorial } from './memoizedFactorials'

export function WeakComposition({ explanations }) {
  const [n, setN] = useState('')
  const [r, setR] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const clearN = () => {
    setN('')
  }

  const clearR = () => {
    setR('')
  }

  const resetForm = () => {
    setN('')
    setR('')
    setResult(null)
    setError('')
  }

  const calculate = async () => {
    setError('')
    setLoading(true)
    
    try {
      const nNum = parseInt(n)
      const rNum = parseInt(r)
      
      if (isNaN(nNum) || isNaN(rNum)) {
        setError('Please enter valid numbers for both n and r')
        return
      }
      
      if (nNum < 0 || rNum < 0) {
        setError('Please enter non-negative numbers')
        return
      }

      if (rNum === 0) {
        if (nNum === 0) {
          setResult({
            n: nNum,
            r: rNum,
            result: 1,
            formula: '$C(0+0-1, 0-1) = C(-1,-1) = 1$',
            calculation: 'Edge case',
            method: 'edge-case'
          })
        } else {
          setResult({
            n: nNum,
            r: rNum,
            result: 0,
            formula: '$C(' + nNum + '+0-1, 0-1) = C(' + (nNum-1) + ',-1) = 0$',
            calculation: 'Edge case',
            method: 'edge-case'
          })
        }
        return
      }

      const numerator = nNum + rNum - 1
      const denominator = rNum - 1

      if (numerator > 100 || denominator > 100 || nNum > 100) {
        try {
          const apiResult = await CombinatoricsAPI.calculate('weak-composition', { n: nNum, r: rNum })
          setResult({
            n: nNum,
            r: rNum,
            result: apiResult,
            formula: '$C(' + numerator + ',' + denominator + ') = \\frac{' + numerator + '!}{' + denominator + '! \\times ' + (numerator - denominator) + '!}$',
            calculation: 'API calculation',
            method: 'api'
          })
          return
        } catch (apiError) {
          setError('Numbers too large for calculation')
          return
        }
      }
      
      const numeratorFactorial = getFactorial(numerator)
      const denominatorFactorial = getFactorial(denominator)
      const numeratorMinusDenominatorFactorial = getFactorial(numerator - denominator)
      
      if (numeratorFactorial === null || denominatorFactorial === null || numeratorMinusDenominatorFactorial === null) {
        try {
          const apiResult = await CombinatoricsAPI.calculate('weak-composition', { n: nNum, r: rNum })
          setResult({
            n: nNum,
            r: rNum,
            result: apiResult,
            formula: '$C(' + numerator + ',' + denominator + ') = \\frac{' + numerator + '!}{' + denominator + '! \\times ' + (numerator - denominator) + '!}$',
            calculation: 'API calculation',
            method: 'api'
          })
          return
        } catch (apiError) {
          setError('Numbers too large for calculation')
          return
        }
      }

      const compositionResult = Math.floor(parseInt(numeratorFactorial) / (parseInt(denominatorFactorial) * parseInt(numeratorMinusDenominatorFactorial)))

      setResult({
        n: nNum,
        r: rNum,
        result: compositionResult,
        formula: '$C(' + numerator + ',' + denominator + ') = \\frac{' + numerator + '!}{' + denominator + '! \\times ' + (numerator - denominator) + '!}$',
        calculation: '$\\frac{' + numeratorFactorial + '}{' + denominatorFactorial + ' \\times ' + numeratorMinusDenominatorFactorial + '}$',
        method: 'local'
      })

    } catch (err) {
      setError(err.message || 'Calculation failed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setResult(null)
    setError('')
  }, [n, r])

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
          }}>Weak Composition</h2>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Number of identical items (n):
            </label>
            <div style={{ position: 'relative' }}>
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
                  onClick={clearN}
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
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Number of cells (r):
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                value={r}
                onChange={(e) => setR(e.target.value)}
                placeholder="e.g., 3"
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
              {r && (
                <button
                  onClick={clearR}
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
          </div>

          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '25px'
          }}>
            <button
              onClick={calculate}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              disabled={loading || !n || !r}
            >
              Calculate
            </button>

            <button
              onClick={resetForm}
              style={{
                padding: '8px 16px',
                backgroundColor: '#6c757d',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              disabled={loading}
            >
              Reset
            </button>
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
              backgroundColor: '#e7f3ff',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #17a2b8'
            }}>
              <h3 style={{
                margin: '0 0 15px 0',
                color: '#0c5460',
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
                
                <strong>Calculation:</strong>
                <span>{processContent(result.calculation)}</span>
                
                <strong>Result:</strong>
                <div style={{
                  maxWidth: '400px',
                  overflow: 'auto',
                  wordBreak: 'break-all'
                }}>
                  {typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}
                </div>
              </div>

              {typeof result.result === 'number' && result.result > 0 && (
                <div style={{
                  marginTop: '15px',
                  padding: '10px',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  borderRadius: '4px'
                }}>
                  <small style={{ color: '#155724' }}>
                    There are {result.result.toLocaleString()} ways to distribute {result.n} identical items into {result.r} cells (empty cells allowed).
                  </small>
                </div>
              )}

              <div style={{
                marginTop: '10px',
                fontSize: '12px',
                color: '#6c757d'
              }}>
                {/* Method: {result.method === 'local' ? 'Local calculation' : 
                        result.method === 'api' ? 'Server calculation' : 'Edge case'} */}
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
            borderLeft: '4px solid #17a2b8'
          }}>
            <div style={{
              margin: '0 0 10px 0',
              color: '#495057',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              {explanations?.formula ? processContent(explanations.formula) : processContent('$C(n+r-1, r-1) = \\frac{(n+r-1)!}{(r-1)! \\times n!}$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to distribute $n$ identical items into $r$ cells where empty cells are allowed. This is equivalent to finding non-negative integer solutions.')}
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
              {explanations?.example ? processContent(explanations.example) : processContent('Distributing 5 identical candies among 3 children (some can get none): $C(5+3-1, 3-1) = C(7,2) = 21$ compositions')}
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
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We use the stars and bars method: arrange $n$ identical items and $r-1$ dividers. This gives $C(n+r-1, r-1)$ ways to choose positions for dividers among $n+r-1$ total positions.')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}