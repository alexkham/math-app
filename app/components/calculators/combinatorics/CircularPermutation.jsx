'use client'

import { useState, useEffect } from 'react'
import { processContent } from '@/app/utils/contentProcessor'

export function CircularPermutation({ explanations }) {
  const [n, setN] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const factorial = (num) => {
    if (num < 0) return null
    if (num === 0 || num === 1) return 1
    
    let result = 1
    for (let i = 2; i <= num; i++) {
      result *= i
      if (result > Number.MAX_SAFE_INTEGER) {
        return 'Too large'
      }
    }
    return result
  }

  const clearField = () => {
    setN('')
  }

  const calculate = () => {
    setError('')
    
    const nNum = parseInt(n)
    
    if (isNaN(nNum)) {
      setError('Please enter a valid number')
      return
    }
    
    if (nNum < 0) {
      setError('Please enter a non-negative number')
      return
    }

    if (nNum === 0) {
      setResult({
        n: nNum,
        result: 0,
        formula: '0! / 1 = 0'
      })
      return
    }

    if (nNum === 1) {
      setResult({
        n: nNum,
        result: 1,
        formula: '(1-1)! = 0! = 1'
      })
      return
    }
    
    if (nNum > 171) {
      setError('Number too large (maximum is 171)')
      return
    }

    const factorialResult = factorial(nNum - 1)
    setResult({
      n: nNum,
      result: factorialResult,
      formula: `(${nNum}-1)! = ${nNum - 1}!`
    })
  }

  useEffect(() => {
    if (n !== '' && !isNaN(parseInt(n))) {
      calculate()
    } else {
      setResult(null)
      setError('')
    }
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
          }}>Circular Permutation</h2>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#333'
            }}>
              Number of objects (n):
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
                placeholder="e.g., 6"
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
                  <small style={{ color: '#0c5460' }}>
                    There are {result.result.toLocaleString()} ways to arrange {result.n} distinct objects in a circle.
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
              {explanations?.formula ? processContent(explanations.formula) : processContent('$P_{circular}(n) = (n-1)!$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to arrange $n$ distinct objects in a circle. In circular arrangements, rotations are considered identical.')}
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
              {explanations?.example ? processContent(explanations.example) : processContent('How many ways can 6 people sit around a circular table? $(6-1)! = 5! = 120$ ways')}
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
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('In a circle, we fix one object to eliminate rotational symmetry. This leaves $(n-1)$ objects to arrange in $(n-1)!$ ways. All rotations of a linear arrangement represent the same circular arrangement.')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}