


import { useState, useEffect } from 'react'
import { processContent } from '@/app/utils/contentProcessor'

export function PermutationWithRepetition({ explanations = {} }) {
  const [n, setN] = useState('')
  const [r, setR] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // // Simple content processor for basic LaTeX-like formatting
  // const processContent = (content) => {
  //   if (!content) return ''
    
  //   // Basic LaTeX math rendering (simplified)
  //   const processed = content
  //     .replace(/\$([^$]+)\$/g, (match, formula) => {
  //       // Simple replacements for common math notation
  //       return formula
  //         .replace(/\^{([^}]+)}/g, '<sup>$1</sup>')
  //         .replace(/\^(\w)/g, '<sup>$1</sup>')
  //         .replace(/\\times/g, '×')
  //         .replace(/\\cdots/g, '⋯')
  //     })
    
  //   return <span dangerouslySetInnerHTML={{ __html: processed }} />
  // }

  const simplifyExpression = (nNum, rNum) => {
    if (rNum === 0) return { simplified: true, result: '1' }
    if (nNum === 0) return { simplified: true, result: '0' }
    if (nNum === 1) return { simplified: true, result: '1' }
    if (rNum === 1) return { simplified: true, result: nNum.toString() }
    return { simplified: false }
  }

  // Native JavaScript power calculation with BigInt for large numbers
  const calculatePower = (base, exponent) => {
    try {
      if (exponent === 0) return '1'
      if (base === 0) return '0'
      if (base === 1) return '1'
      if (exponent === 1) return base.toString()
      
      // Use BigInt for accurate large number calculation
      const bigBase = BigInt(base)
      let result = BigInt(1)
      
      for (let i = 0; i < exponent; i++) {
        result *= bigBase
      }
      
      return result.toString()
    } catch (e) {
      throw new Error('Calculation failed: ' + e.message)
    }
  }

  const clearN = () => setN('')
  const clearR = () => setR('')

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

      if (nNum === 0 && rNum > 0) {
        setError('Cannot arrange positions with 0 available items')
        return
      }

      if (nNum > 1000 || rNum > 1000) {
        setError('Numbers too large (maximum is 1000)')
        return
      }

      const simplified = simplifyExpression(nNum, rNum)
      if (simplified.simplified) {
        setResult({
          n: nNum,
          r: rNum,
          result: simplified.result,
          formula: `${nNum}^{${rNum}}`,
          method: 'simplified'
        })
        return
      }

      const calculatedResult = calculatePower(nNum, rNum)
      setResult({
        n: nNum,
        r: rNum,
        result: calculatedResult,
        formula: `${nNum}^{${rNum}}`,
        calculation: Array(rNum).fill(nNum).join(' × '),
        method: 'calculated'
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

  const containerStyle = {
    display: 'flex',
    gap: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    minHeight: '500px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 40px 12px 16px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box'
  }

  const buttonStyle = {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: '500'
  }

  const clearButtonStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    color: '#999',
    cursor: 'pointer'
  }

  return (
    <div style={containerStyle}>
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
              style={inputStyle}
              disabled={loading}
            />
            {n && (
              <button
                onClick={clearN}
                style={clearButtonStyle}
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
            Positions to fill (r):
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
                placeholder="e.g., 4"
                min="0"
                style={inputStyle}
                disabled={loading}
              />
              {r && (
                <button
                  onClick={clearR}
                  style={clearButtonStyle}
                  disabled={loading}
                >
                  ×
                </button>
              )}
            </div>
            <button
              onClick={calculate}
              style={{
                ...buttonStyle,
                backgroundColor: '#007bff',
                color: '#fff',
                opacity: loading || !n || !r ? 0.6 : 1
              }}
              disabled={loading || !n || !r}
            >
              Calculate
            </button>
            <button
              onClick={resetForm}
              style={{
                ...buttonStyle,
                backgroundColor: '#6c757d',
                color: '#fff'
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
              <span>{processContent(`$${result.formula}$`)}</span>
              
              {result.calculation && (
                <>
                  <strong>Calculation:</strong>
                  <span>{processContent(`$${result.calculation}$`)}</span>
                </>
              )}
              
              <strong>Result:</strong>
              <div style={{
                maxWidth: '400px',
                overflow: 'auto',
                wordBreak: 'break-all'
              }}>
                {typeof result.result === 'string' && !isNaN(result.result) ? 
                  parseInt(result.result).toLocaleString() : result.result}
              </div>
            </div>

            <div style={{
              marginTop: '15px',
              padding: '10px',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: '4px'
            }}>
              <small style={{ color: '#155724' }}>
                There are {typeof result.result === 'string' && !isNaN(result.result) ? 
                  parseInt(result.result).toLocaleString() : result.result} ways to arrange {result.r} positions using {result.n} items where repetition is allowed.
              </small>
            </div>

            <div style={{
              marginTop: '10px',
              fontSize: '12px',
              color: '#6c757d'
            }}>
              {/* Method: {result.method === 'calculated' ? 'Direct calculation' : 'Simplified'} */}
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
  )
}