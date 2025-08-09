// 'use client'

// import { useState, useEffect } from 'react'
// import { processContent } from '@/app/utils/contentProcessor'

// export function DistributionIntoCells({ explanations }) {
//   const [n, setN] = useState('')
//   const [r, setR] = useState('')
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState('')

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

//     if (nNum === 0) {
//       setResult({
//         n: nNum,
//         r: rNum,
//         result: rNum === 0 ? 1 : 0,
//         formula: `${rNum}^${nNum} = ${rNum}^0 = 1`
//       })
//       return
//     }

//     if (rNum === 0) {
//       setResult({
//         n: nNum,
//         r: rNum,
//         result: 0,
//         formula: `${rNum}^${nNum} = 0^${nNum} = 0`
//       })
//       return
//     }
    
//     if (nNum > 50) {
//       setError('Number too large (maximum n is 50)')
//       return
//     }

//     if (rNum > 100) {
//       setError('Number too large (maximum r is 100)')
//       return
//     }

//     const distributionResult = Math.pow(rNum, nNum)
    
//     if (distributionResult > Number.MAX_SAFE_INTEGER) {
//       setError('Result too large to calculate accurately')
//       return
//     }

//     setResult({
//       n: nNum,
//       r: rNum,
//       result: distributionResult,
//       formula: '$' + rNum + '^{' + nNum + '}$'
//     //   formula: `${rNum}^${nNum}`
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
//           }}>Distribution into Cells</h2>

//           <div style={{ marginBottom: '25px' }}>
//             <label style={{
//               display: 'block',
//               marginBottom: '8px',
//               fontWeight: '500',
//               color: '#333'
//             }}>
//               Number of items (n):
//             </label>
//             <div style={{ position: 'relative' }}>
//               <input
//                 type="number"
//                 value={n}
//                 onChange={(e) => setN(e.target.value)}
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
//                 placeholder="e.g., 2"
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
//                     There are {result.result.toLocaleString()} ways to distribute {result.n} different items into {result.r} numbered cells.
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
//               {explanations?.formula ? processContent(explanations.formula) : processContent('$r^n$')}
//             </div>
//             <p style={{
//               margin: 0,
//               color: '#6c757d',
//               lineHeight: '1.5'
//             }}>
//               {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to distribute $n$ different items into $r$ numbered cells. Each item can go into any cell.')}
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
//               {explanations?.example ? processContent(explanations.example) : processContent('Assigning 3 different tasks to 2 specific days of the week: $2^3 = 8$ distributions')}
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
//               {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('Each of the $n$ items has $r$ choices of cells to go into. Since items are different and cells are numbered, each item independently chooses from $r$ options, giving $r \\times r \\times ... \\times r = r^n$ total distributions.')}
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

export function DistributionIntoCells({ explanations }) {
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

  const bigIntPower = (base, exponent) => {
    if (exponent === 0) return 1n
    if (base === 0) return 0n
    
    let result = 1n
    let baseBig = BigInt(base)
    let expBig = BigInt(exponent)
    
    while (expBig > 0) {
      if (expBig % 2n === 1n) {
        result *= baseBig
      }
      baseBig *= baseBig
      expBig = expBig / 2n
    }
    
    return result
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

      if (nNum === 0) {
        setResult({
          n: nNum,
          r: rNum,
          result: rNum === 0 ? 1 : 1,
          formula: '$' + rNum + '^{0} = 1$',
          calculation: 'Edge case'
        })
        return
      }

      if (rNum === 0) {
        setResult({
          n: nNum,
          r: rNum,
          result: 0,
          formula: '$0^{' + nNum + '} = 0$',
          calculation: 'Edge case'
        })
        return
      }

      if (nNum > 300 || rNum > 300) {
        try {
          const apiResult = await CombinatoricsAPI.calculate('distribution-cells', { n: nNum, r: rNum })
          setResult({
            n: nNum,
            r: rNum,
            result: apiResult,
            formula: '$' + rNum + '^{' + nNum + '}$',
            calculation: 'API calculation'
          })
          return
        } catch (apiError) {
          setError('Numbers too large for calculation')
          return
        }
      }

      const distributionResult = bigIntPower(rNum, nNum)
      
      setResult({
        n: nNum,
        r: rNum,
        result: distributionResult.toString(),
        formula: '$' + rNum + '^{' + nNum + '}$',
        calculation: '$' + rNum + '^{' + nNum + '}$'
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
          }}>Distribution into Cells</h2>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Number of items (n):
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
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
                placeholder="e.g., 2"
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
                  {typeof result.result === 'string' ? parseInt(result.result).toLocaleString() : result.result.toLocaleString()}
                </div>
              </div>

              {result.result > 0 && (
                <div style={{
                  marginTop: '15px',
                  padding: '10px',
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  borderRadius: '4px'
                }}>
                  <small style={{ color: '#155724' }}>
                    There are {typeof result.result === 'string' ? parseInt(result.result).toLocaleString() : result.result.toLocaleString()} ways to distribute {result.n} different items into {result.r} numbered cells.
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
              {explanations?.formula ? processContent(explanations.formula) : processContent('$r^n$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to distribute $n$ different items into $r$ numbered cells. Each item can go into any cell.')}
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
              {explanations?.example ? processContent(explanations.example) : processContent('Assigning 3 different tasks to 2 specific days of the week: $2^3 = 8$ distributions')}
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
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('Each of the $n$ items has $r$ choices of cells to go into. Since items are different and cells are numbered, each item independently chooses from $r$ options, giving $r \\times r \\times ... \\times r = r^n$ total distributions.')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}