// 'use client'

// import { useState, useEffect } from 'react'
// import { processContent } from '@/app/utils/contentProcessor'

// export function PermutationWithoutRepetition({ explanations }) {
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

//     if (rNum > nNum) {
//       setError('r cannot be greater than n (cannot pick more items than available)')
//       return
//     }
    
//     if (nNum > 171) {
//       setError('Number too large (maximum n is 171)')
//       return
//     }

//     const nFactorial = factorial(nNum)
//     const nMinusRFactorial = factorial(nNum - rNum)
    
//     if (nFactorial === 'Too large' || nMinusRFactorial === 'Too large') {
//       setError('Result too large to calculate')
//       return
//     }

//     const permutationResult = nFactorial / nMinusRFactorial

//     setResult({
//       n: nNum,
//       r: rNum,
//       result: permutationResult,
//       formula: `$\\frac{${nNum}!}{(${nNum}-${rNum})!} = \\frac{${nNum}!}{${nNum - rNum}!}$`,
//       calculation: `$\\frac{${nFactorial.toLocaleString()}}{${nMinusRFactorial.toLocaleString()}}$`
//       // formula: `${nNum}! / (${nNum}-${rNum})! = ${nNum}! / ${nNum - rNum}!`,
//       // calculation: `${nFactorial.toLocaleString()} / ${nMinusRFactorial.toLocaleString()}`
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
//           }}>Partial Permutation Without Repetition</h2>

//           <div style={{ marginBottom: '25px' }}>
//             <label style={{
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '500',
//               color: '#333'
//             }}>
//               Total items (n):
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
//               Items to pick (r):
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
//                     There are {result.result.toLocaleString()} ways to pick and arrange {result.r} items from {result.n} available items.
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
//               {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n,r) = \\frac{n!}{(n-r)!}$')}
//             </div>
//             <p style={{
//               margin: 0,
//               color: '#6c757d',
//               lineHeight: '1.5'
//             }}>
//               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to pick $r$ different items from $n$ items where order matters. Each selection creates a different arrangement.')}
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
//               {explanations?.example ? processContent(explanations.example) : processContent('Selecting and arranging podium finishers (1st, 2nd, 3rd) from 5 runners: $P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60$ arrangements')}
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
//               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We start with $n!$ total arrangements, then divide by $(n-r)!$ to account for the remaining items we don\'t select. This gives us only the arrangements of the $r$ selected items in their specific positions.')}
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

export function PermutationWithoutRepetition({ explanations }) {
  const [n, setN] = useState('')
  const [r, setR] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Simplify expression before calculation
  const simplifyExpression = (nNum, rNum) => {
    if (rNum === 0) {
      return { simplified: true, result: 1 }
    }
    if (rNum === 1) {
      return { simplified: true, result: nNum }
    }
    if (rNum === nNum) {
      const factorial = getFactorial(nNum)
      if (factorial !== null) {
        return { simplified: true, result: factorial }
      }
    }
    return { simplified: false }
  }

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

      if (rNum > nNum) {
        setError('r cannot be greater than n (cannot pick more items than available)')
        return
      }
      
      if (nNum > 100) {
        setError('Number too large (maximum n is 100)')
        return
      }

      // Try to simplify first
      const simplified = simplifyExpression(nNum, rNum)
      if (simplified.simplified) {
        setResult({
          n: nNum,
          r: rNum,
          result: simplified.result,
          formula: `$\\frac{${nNum}!}{(${nNum}-${rNum})!} = \\frac{${nNum}!}{${nNum - rNum}!}$`,
          method: 'simplified'
        })
        return
      }

      // Use memoized factorials for calculations ≤ 100
      const nFactorial = getFactorial(nNum)
      const nMinusRFactorial = getFactorial(nNum - rNum)
      
      if (nFactorial !== null && nMinusRFactorial !== null) {
        const permutationResult = Math.floor(parseInt(nFactorial) / parseInt(nMinusRFactorial))
        setResult({
          n: nNum,
          r: rNum,
          result: permutationResult,
          formula: `$\\frac{${nNum}!}{(${nNum}-${rNum})!} = \\frac{${nNum}!}{${nNum - rNum}!}$`,
          calculation: `$\\frac{${parseInt(nFactorial).toLocaleString()}}{${parseInt(nMinusRFactorial).toLocaleString()}}$`,
          method: 'local'
        })
        return
      }

      // Use API for larger numbers
      const apiResult = await CombinatoricsAPI.calculate('permutation-partial', { 
        n: nNum, 
        r: rNum 
      })
      setResult({
        n: nNum,
        r: rNum,
        result: apiResult,
        formula: `$\\frac{${nNum}!}{(${nNum}-${rNum})!} = \\frac{${nNum}!}{${nNum - rNum}!}$`,
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
          }}>Partial Permutation Without Repetition</h2>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Total items (n):
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
              Items to pick (r):
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
                disabled={loading || !n || !r}
              >
                Calculate
              </button>
              <button
                onClick={resetForm}
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
                disabled={loading}
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
                
                {result.calculation && (
                  <>
                    <strong>Calculation:</strong>
                    <span>{processContent(result.calculation)}</span>
                  </>
                )}
                
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
                  <small style={{ color: '#0c5460' }}>
                    There are {result.result.toLocaleString()} ways to pick and arrange {result.r} items from {result.n} available items.
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
            borderLeft: '4px solid #17a2b8'
          }}>
            <div style={{
              margin: '0 0 10px 0',
              color: '#495057',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n,r) = \\frac{n!}{(n-r)!}$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to pick $r$ different items from $n$ items where order matters. Each selection creates a different arrangement.')}
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
              {explanations?.example ? processContent(explanations.example) : processContent('Selecting and arranging podium finishers (1st, 2nd, 3rd) from 5 runners: $P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60$ arrangements')}
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
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We start with $n!$ total arrangements, then divide by $(n-r)!$ to account for the remaining items we don\'t select. This gives us only the arrangements of the $r$ selected items in their specific positions.')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}