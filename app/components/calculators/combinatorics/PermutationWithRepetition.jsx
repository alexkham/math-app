// 'use client'

// import { useState, useEffect } from 'react'
// import { processContent } from '@/app/utils/contentProcessor'

// export function PermutationWithRepetition({ explanations }) {
//   const [n, setN] = useState('')
//   const [r, setR] = useState('')
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState('')

//   const power = (base, exponent) => {
//     if (base < 0 || exponent < 0) return null
//     if (exponent === 0) return 1
    
//     let result = 1
//     for (let i = 0; i < exponent; i++) {
//       result *= base
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

//     if (nNum === 0 && rNum > 0) {
//       setError('Cannot arrange positions with 0 available items')
//       return
//     }

//     if (nNum > 100 || rNum > 100) {
//       setError('Numbers too large (maximum is 100)')
//       return
//     }

//     const permutationResult = power(nNum, rNum)
    
//     if (permutationResult === 'Too large') {
//       setError('Result too large to calculate')
//       return
//     }

//     setResult({
//       n: nNum,
//       r: rNum,
//       result: permutationResult,
//       formula: `${nNum}^${rNum}`,
//       calculation: rNum === 0 ? '1' : Array(rNum).fill(nNum).join(' × ')
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
//           }}>Permutation with Repetition</h2>

//           <div style={{ marginBottom: '25px' }}>
//             <label style={{
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '500',
//               color: '#333'
//             }}>
//               Available items (n):
//             </label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type="number"
//                 value={n}
//                 onChange={(e) => setN(e.target.value)}
//                 placeholder="e.g., 10"
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
//               Positions to fill (r):
//             </label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type="number"
//                 value={r}
//                 onChange={(e) => setR(e.target.value)}
//                 placeholder="e.g., 4"
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
//               backgroundColor: '#d4edda',
//               padding: '20px',
//               borderRadius: '8px',
//               border: '1px solid #28a745'
//             }}>
//               <h3 style={{
//                 margin: '0 0 15px 0',
//                 color: '#155724',
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
//                   <small style={{ color: '#155724' }}>
//                     There are {result.result.toLocaleString()} ways to arrange {result.r} positions using {result.n} items where repetition is allowed.
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
//             borderLeft: '4px solid #28a745'
//           }}>
//             <div style={{
//               margin: '0 0 10px 0',
//               color: '#495057',
//               fontSize: '16px',
//               fontWeight: 'bold'
//             }}>
//               {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n,r) = n^r$')}
//             </div>
//             <p style={{
//               margin: 0,
//               color: '#6c757d',
//               lineHeight: '1.5'
//             }}>
//               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $r$ positions using $n$ items where each item can be used multiple times.')}
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
//               {explanations?.example ? processContent(explanations.example) : processContent('Creating a 4-digit PIN using digits 0-9: $10^4 = 10,000$ possible PINs (each digit can be any of the 10 options)')}
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
//               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('For each of the $r$ positions, you have $n$ choices (since repetition is allowed). This gives us $n \\times n \\times \\cdots \\times n$ ($r$ times) = $n^r$')}
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

export function PermutationWithRepetition({ explanations }) {
  const [n, setN] = useState('')
  const [r, setR] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const power = (base, exponent) => {
    if (base < 0 || exponent < 0) return null
    if (exponent === 0) return 1
    
    let result = 1
    for (let i = 0; i < exponent; i++) {
      result *= base
      if (result > Number.MAX_SAFE_INTEGER) {
        return 'Too large'
      }
    }
    return result
  }

  const clearN = () => {
    setN('')
  }

  const clearR = () => {
    setR('')
  }

  const calculate = () => {
    setError('')
    
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

    if (nNum === 0 && rNum > 0) {
      setError('Cannot arrange positions with 0 available items')
      return
    }

    if (nNum > 100 || rNum > 100) {
      setError('Numbers too large (maximum is 100)')
      return
    }

    const permutationResult = power(nNum, rNum)
    
    if (permutationResult === 'Too large') {
      setError('Result too large to calculate')
      return
    }

    setResult({
      n: nNum,
      r: rNum,
      result: permutationResult,
    //   formula: `${nNum}^${rNum}`,
    formula: `$${nNum}^{${rNum}}$`,
    //   calculation: rNum === 0 ? '1' : Array(rNum).fill(nNum).join(' × ')

    calculation: rNum === 0 ? '$1$' : `$${Array(rNum).fill(nNum).join(' \\times ')}$`
    })
  }

  useEffect(() => {
    if (n !== '' && r !== '' && !isNaN(parseInt(n)) && !isNaN(parseInt(r))) {
      calculate()
    } else {
      setResult(null)
      setError('')
    }
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
          }}>Permutation with Repetition</h2>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Available items (n):
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
                placeholder="e.g., 10"
                min="0"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
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
              Positions to fill (r):
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                value={r}
                onChange={(e) => setR(e.target.value)}
                placeholder="e.g., 4"
                min="0"
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
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
                >
                  ×
                </button>
              )}
            </div>
          </div>

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

          {result && !error && (
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
                <span>{typeof result.result === 'number' ? result.result.toLocaleString() : processContent(result.result)}</span>
              </div>

              {typeof result.result === 'number' && result.result > 0 && (
                <div style={{
                  marginTop: '15px',
                  padding: '10px',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  borderRadius: '4px'
                }}>
                  <small style={{ color: '#155724' }}>
                    There are {result.result.toLocaleString()} ways to arrange {result.r} positions using {result.n} items where repetition is allowed.
                  </small>
                </div>
              )}
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
              {explanations?.formula ? processContent(explanations.formula) : processContent('$P(n,r) = n^r$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $r$ positions using $n$ items where each item can be used multiple times.')}
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
              {explanations?.example ? processContent(explanations.example) : processContent('Creating a 4-digit PIN using digits 0-9: $10^4 = 10,000$ possible PINs (each digit can be any of the 10 options)')}
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
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('For each of the $r$ positions, you have $n$ choices (since repetition is allowed). This gives us $n \\times n \\times \\cdots \\times n$ ($r$ times) = $n^r$')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}