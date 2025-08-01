'use client'

import { useState, useEffect } from 'react'
import { processContent } from '@/app/utils/contentProcessor'

export function PartitionIntoGroups({ explanations }) {
  const [n, setN] = useState('')
  const [groupSizes, setGroupSizes] = useState([''])
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

  const clearN = () => {
    setN('')
  }

  const addGroup = () => {
    setGroupSizes([...groupSizes, ''])
  }

  const removeGroup = (index) => {
    if (groupSizes.length > 1) {
      const newSizes = groupSizes.filter((_, i) => i !== index)
      setGroupSizes(newSizes)
    }
  }

  const updateGroupSize = (index, value) => {
    const newSizes = [...groupSizes]
    newSizes[index] = value
    setGroupSizes(newSizes)
  }

  const calculate = () => {
    setError('')
    
    const nNum = parseInt(n)
    
    if (isNaN(nNum)) {
      setError('Please enter a valid number for n')
      return
    }
    
    if (nNum < 0) {
      setError('Please enter a non-negative number for n')
      return
    }

    if (nNum > 171) {
      setError('Number too large (maximum n is 171)')
      return
    }

    const sizes = groupSizes.map(size => parseInt(size)).filter(size => !isNaN(size))
    
    if (sizes.length === 0) {
      setError('Please enter at least one group size')
      return
    }

    if (sizes.some(size => size < 0)) {
      setError('Group sizes must be non-negative')
      return
    }

    const sum = sizes.reduce((acc, size) => acc + size, 0)
    
    if (sum !== nNum) {
      setError('Sum of group sizes must equal n (' + nNum + ')')
      return
    }

    const nFactorial = factorial(nNum)
    if (nFactorial === 'Too large') {
      setError('Result too large to calculate')
      return
    }

    let denominator = 1
    const factorials = []
    
    for (let size of sizes) {
      const sizeFactorial = factorial(size)
      if (sizeFactorial === 'Too large') {
        setError('Result too large to calculate')
        return
      }
      factorials.push(sizeFactorial)
      denominator *= sizeFactorial
    }

    const multinomialResult = nFactorial / denominator

    // Create formula string
    const sizesStr = sizes.join(',')
    const denominatorStr = sizes.map(size => size + '!').join(' \\times ')
    
    setResult({
      n: nNum,
      sizes: sizes,
      result: multinomialResult,
      formula: '$\\binom{' + nNum + '}{' + sizesStr + '} = \\frac{' + nNum + '!}{' + denominatorStr + '}$',
      // calculation: nFactorial.toLocaleString() + ' / (' + factorials.map(f => f.toLocaleString()).join(' × ') + ')'
      calculation: '$\\frac{' + nFactorial.toLocaleString() + '}{' + factorials.map(f => f.toLocaleString()).join(' \\times ') + '}$'
    })
  }

  useEffect(() => {
    if (n !== '' && !isNaN(parseInt(n)) && groupSizes.some(size => size !== '' && !isNaN(parseInt(size)))) {
      calculate()
    } else {
      setResult(null)
      setError('')
    }
  }, [n, groupSizes])

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
          }}>Partition Into Groups</h2>

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
              Group sizes:
            </label>
            
            {groupSizes.map((size, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '10px', 
                marginBottom: '10px',
                alignItems: 'center'
              }}>
                <input
                  type="number"
                  value={size}
                  onChange={(e) => updateGroupSize(index, e.target.value)}
                  placeholder={`Group ${index + 1} size`}
                  min="0"
                  style={{
                    flex: '1',
                    padding: '12px 16px',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
                {groupSizes.length > 1 && (
                  <button
                    onClick={() => removeGroup(index)}
                    style={{
                      background: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            
            <button
              onClick={addGroup}
              style={{
                background: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 16px',
                cursor: 'pointer',
                fontSize: '14px',
                marginTop: '10px'
              }}
            >
              + Add Group
            </button>
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
                  <small style={{ color: '#0c5460' }}>
                    There are {result.result.toLocaleString()} ways to distribute {result.n} distinct items into groups of sizes [{result.sizes.join(', ')}].
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
              {explanations?.formula ? processContent(explanations.formula) : processContent('$\\binom{n}{n_1,n_2,\\ldots,n_r} = \\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_r!}$')}
            </div>
            <p style={{
              margin: 0,
              color: '#6c757d',
              lineHeight: '1.5'
            }}>
              {explanations?.description ? processContent(explanations.description) : processContent('Calculate the number of ways to distribute $n$ distinct items into $r$ labeled groups of specified sizes. The sum of group sizes must equal $n$.')}
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
              {explanations?.example ? processContent(explanations.example) : processContent('Dividing 10 students into 3 labeled groups (classroom: 3, playground: 4, gym: 3): $\\binom{10}{3,4,3} = \\frac{10!}{3! \\times 4! \\times 3!} = 4,200$ ways')}
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
              {explanations?.reasoning ? processContent(explanations.reasoning) : processContent('We start with $n!$ arrangements, then divide by each group size factorial to account for arrangements within each group being identical. This leaves only the distinct ways to form the specified groups.')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}